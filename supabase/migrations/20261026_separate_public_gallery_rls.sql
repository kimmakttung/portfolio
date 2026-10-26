-- Keep public SELECT policy independent of the authenticated-only admin function.
-- PostgreSQL evaluates policy expressions with the querying role's permissions.
drop policy if exists "Published projects are public; admins see all" on public.portfolio_projects;
create policy "Anyone can read published projects"
on public.portfolio_projects for select to anon,authenticated
using (is_published);
create policy "Administrators can read unpublished projects"
on public.portfolio_projects for select to authenticated
using ((select private.is_portfolio_admin()));
