-- Allow members to edit only their own display name.
-- They cannot alter the role or ID columns using the public API.
alter table public.profiles
  add constraint profiles_display_name_length
  check (display_name is null or char_length(display_name) <= 100);
grant update (display_name) on public.profiles to authenticated;
create policy "Members can update only their profile row"
on public.profiles for update to authenticated
using (id = (select auth.uid()))
with check (id = (select auth.uid()));
