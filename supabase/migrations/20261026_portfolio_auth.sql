-- Portfolio Auth / project publishing. Intended for a new Supabase project.
-- Apply with the Supabase connector once the destination organization is confirmed.
-- The site currently uses localStorage: this migration does not delete or import it.

create schema if not exists private;
revoke all on schema private from public;
grant usage on schema private to authenticated;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role text not null default 'member' check (role in ('member', 'admin')),
  created_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
revoke all on public.profiles from anon, authenticated;
grant select on public.profiles to authenticated;

create policy "Members can read their own profile" on public.profiles
  for select to authenticated
  using (id = (select auth.uid()));

create or replace function private.create_profile_for_new_user()
returns trigger
language plpgsql security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, display_name, role)
  values (
    new.id,
    coalesce(
      nullif(new.raw_user_meta_data ->> 'display_name', ''),
      nullif(new.raw_user_meta_data ->> 'full_name', ''),
      'Visitor'
    ),
    'member'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;
revoke all on function private.create_profile_for_new_user() from public, anon, authenticated;

create trigger create_auth_profile
  after insert on auth.users
  for each row execute function private.create_profile_for_new_user();

create or replace function private.is_portfolio_admin()
returns boolean
language sql stable security definer set search_path = ''
as $$
  select (select auth.uid()) is not null and exists (
    select 1 from public.profiles
    where id = (select auth.uid()) and role = 'admin'
  );
$$;
revoke all on function private.is_portfolio_admin() from public, anon;
grant execute on function private.is_portfolio_admin() to authenticated;

create table if not exists public.portfolio_projects (
  id text primary key,
  payload jsonb not null check (jsonb_typeof(payload) = 'object'),
  is_published boolean not null default false,
  is_pinned boolean not null default false,
  created_at timestamptz not null default now(),
  modified_at timestamptz not null default now()
);
alter table public.portfolio_projects enable row level security;
revoke all on public.portfolio_projects from anon, authenticated;
grant select on public.portfolio_projects to anon, authenticated;
grant insert, update, delete on public.portfolio_projects to authenticated;

create policy "Published projects are public; admins see all"
on public.portfolio_projects for select to anon, authenticated
using (is_published or (select private.is_portfolio_admin()));

create policy "Admin can add projects"
on public.portfolio_projects for insert to authenticated
with check ((select private.is_portfolio_admin()));

create policy "Admin can update projects"
on public.portfolio_projects for update to authenticated
using ((select private.is_portfolio_admin()))
with check ((select private.is_portfolio_admin()));

create policy "Admin can remove projects"
on public.portfolio_projects for delete to authenticated
using ((select private.is_portfolio_admin()));

-- Explicit table grants are necessary for projects with Data API auto-exposure disabled.
-- Admin promotion is a separate authenticated owner action AFTER sign-up, executed via
-- the Supabase SQL editor or connector; NEVER expose role-upgrade SQL in the browser.
