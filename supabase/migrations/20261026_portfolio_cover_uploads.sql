-- Public image URLs are intentionally accessible to everyone with the URL.
-- Do not upload confidential images, including covers of unpublished projects.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('portfolio-covers', 'portfolio-covers', true, 5242880, array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "Portfolio admin can upload covers" on storage.objects
for insert to authenticated with check (
  bucket_id='portfolio-covers' and (select private.is_portfolio_admin())
);
create policy "Portfolio admin can update covers" on storage.objects
for update to authenticated using (
  bucket_id='portfolio-covers' and (select private.is_portfolio_admin())
) with check (
  bucket_id='portfolio-covers' and (select private.is_portfolio_admin())
);
create policy "Portfolio admin can delete covers" on storage.objects
for delete to authenticated using (
  bucket_id='portfolio-covers' and (select private.is_portfolio_admin())
);
