# Portfolio authentication — setup and release checklist

## Built
- Supabase project: `my-portfolio` (Seoul, `xxqwmkrzylugugsxcggu`).
- Database RLS: `profiles` (owner-only read), `portfolio_projects` (published public, private/admin, writes/admin).
- Public image bucket: `portfolio-covers` (5 MB, JPG/PNG/WebP, admin-only writes).
- Admin dashboard: `admin.html` — manage unpublished/published projects, upload covers and import browser drafts.
- User pages: `login.html`, `mypage.html`.
- Public gallery: published cloud records are displayed alongside existing local/seed projects without deleting browser data.
- Public exhibit page: `exhibit.html` reads only published project rows.

## Important: complete OAuth and email sender settings before enabling sign-up
The default `js/supabase-config.js` leaves `allowEmailSignup` and `allowGoogleLogin` as `false`.
This deliberately avoids exposing unsupported sign-up paths.
Do not paste any provider secret into GitHub or frontend code.

### 1. Configure redirects in Supabase
Open https://supabase.com/dashboard/project/xxqwmkrzylugugsxcggu/auth/url-configuration
- Site URL: `https://kimmakttung.github.io/portfolio/` (adjust if custom domain is used).
- Additional redirect URLs: `https://kimmakttung.github.io/portfolio/**`.
- Local development URLs can be registered separately.

### 2. Google OAuth (recommended first visitor sign-up method)
- At https://console.cloud.google.com/ create or select a Google Cloud project.
- Configure OAuth consent screen (External if intended for public visitors) and publish the app when ready.
- Create a Web application OAuth client.
- Authorized redirect URI: `https://xxqwmkrzylugugsxcggu.supabase.co/auth/v1/callback`.
- In Supabase Authentication > Providers > Google, enable provider and paste Google client ID and client secret there only.
- Enable `allowGoogleLogin: true` in `js/supabase-config.js` **after** confirming the redirect flow.
- Test with a separate normal visitor Google account and confirm role is `member`.

### 3. Email/password sign-up for any visitor
- Keep email confirmation **enabled**.
- Configure a trusted SMTP sender in Supabase Authentication > SMTP Settings. Complete sender/domain verification with the chosen provider.
- Test delivering a verification email to an address not on the Supabase team; click the link and sign in.
- Set `allowEmailSignup: true` only after confirming verification emails can be delivered.
- Do not disable email confirmation simply to bypass the lack of a sender.

### 4. Admin usage
- Sign in at `login.html?next=admin.html`.
- Only the owner account promoted via trusted SQL is `admin`.
- Admin pages are guarded both in the browser and by Supabase row-level security.
- Changes to site source files are still made via GitHub/Codex; cloud dashboard manages database-backed gallery projects.

### 5. Smoke tests
- Public gallery and old local projects display when logged out.
- Login with admin credentials, create a draft in the dashboard.
- Admin can read draft; a logged-out visitor cannot.
- Publish the draft; a visitor can see it in the gallery and open its exhibit page.
- Unpublish and delete; the public listing updates.
- Upload a non-sensitive cover image. Published image files themselves are public.
- Confirm normal user cannot insert, update, or delete other projects.
- Sign out and confirm admin dashboard redirects to sign-in.
- Check security advisors: https://supabase.com/dashboard/project/xxqwmkrzylugugsxcggu/advisors/security

## Backups
The original `localStorage['dohyun-projects-v1']` data remains untouched.
An admin can import local drafts by explicit click. Browser drafts are not automatically published.
