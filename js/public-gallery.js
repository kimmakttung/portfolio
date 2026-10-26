import {publicProjects} from './cloud-api.js';

// Keep the original local-only experience as a fallback when offline.
// Only is_published rows are loaded, even if the viewer is an admin.
async function refreshPublished() {
  try {
    window.portfolioCloudPublished = await publicProjects();
    document.dispatchEvent(new Event('portfolio-cloud-updated'));
  } catch(error) {
    console.warn('Gallery cloud sync unavailable:',error?.message||error);
    // Do not discard existing local project data.
  }
}
refreshPublished();
document.addEventListener('visibilitychange',()=>{
  if(!document.hidden)refreshPublished();
});
