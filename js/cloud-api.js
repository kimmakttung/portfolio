import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.75.0';

const config = window.PORTFOLIO_SUPABASE || {};
export const supabase = config.url && config.publishableKey
  ? createClient(config.url, config.publishableKey) : null;

export function requireClient() {
  if (!supabase) throw new Error('Supabase 연결 설정이 없습니다.');
  return supabase;
}
export async function currentUser() {
  const {data, error} = await requireClient().auth.getUser();
  if (error) throw error;
  return data.user;
}
export async function currentRole() {
  const user = await currentUser();
  if (!user) return 'guest';
  const {data, error} = await requireClient().from('profiles')
    .select('role').eq('id', user.id).single();
  if (error) throw error;
  return data.role;
}
export async function publicProjects() {
  const {data, error} = await requireClient().from('portfolio_projects')
    .select('id,payload,is_published,is_pinned,modified_at')
    .eq('is_published', true)
    .order('is_pinned', {ascending:false})
    .order('modified_at', {ascending:false})
    .limit(250);
  if (error) throw error;
  return (data || []).map(row => ({
    ...row.payload,
    id:row.id,
    pinned:row.is_pinned,
    updatedAt:row.modified_at,
    cloud:true,
    is_published:true
  }));
}
export async function adminProjects() {
  const {data, error} = await requireClient().from('portfolio_projects')
    .select('id,payload,is_published,is_pinned,modified_at')
    .order('modified_at', {ascending:false}).limit(250);
  if (error) throw error;
  return data || [];
}
export async function getPublishedProject(id) {
  const {data, error} = await requireClient().from('portfolio_projects')
    .select('id,payload,is_published,is_pinned,modified_at')
    .eq('id',id).eq('is_published',true).maybeSingle();
  if (error) throw error;
  return data;
}
export async function saveCloudProject(project, {published = false, pinned = false} = {}) {
  if (await currentRole() !== 'admin') throw new Error('관리자만 저장할 수 있습니다.');
  const id = String(project.id || crypto.randomUUID());
  const payload = {...project,id,updatedAt:new Date().toISOString()};
  delete payload.localizations;
  delete payload.deleted;
  delete payload.cloud;
  delete payload.is_published;
  const {data,error} = await requireClient().from('portfolio_projects')
    .upsert({
      id,
      payload,
      is_published:Boolean(published),
      is_pinned:Boolean(pinned),
      modified_at:new Date().toISOString()
    },{onConflict:'id'}).select('id').single();
  if (error) throw error;
  return data;
}
export async function deleteCloudProject(id) {
  if (await currentRole() !== 'admin') throw new Error('관리자 권한이 필요합니다.');
  const {error} = await requireClient().from('portfolio_projects').delete().eq('id',id);
  if (error) throw error;
}
export async function uploadCover(file) {
  if (await currentRole() !== 'admin') throw new Error('관리자 권한이 필요합니다.');
  const extensions = {'image/jpeg':'jpg','image/png':'png','image/webp':'webp'};
  const extension = extensions[file.type];
  if (!extension || !file.size || file.size > 5 * 1024 * 1024)
    throw new Error('이미지는 5MB 이하의 JPG, PNG, WebP만 업로드할 수 있습니다.');
  const key = crypto.randomUUID() + '.' + extension;
  const {error} = await requireClient().storage.from('portfolio-covers')
    .upload(key, file, {contentType:file.type, upsert:false});
  if (error) throw error;
  return requireClient().storage.from('portfolio-covers').getPublicUrl(key).data.publicUrl;
}
