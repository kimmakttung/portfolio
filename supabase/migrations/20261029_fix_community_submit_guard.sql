create or replace function private.guard_community_submit()
returns trigger language plpgsql security invoker set search_path = '' as $$
begin
 if tg_table_name = 'community_requests' then
   if exists (select 1 from public.community_requests r
     where r.author_id=new.author_id and r.created_at > now()-interval '90 seconds') then
      raise exception 'Please wait before submitting another request';
   end if;
 elsif tg_table_name = 'community_projects' then
   if exists (select 1 from public.community_projects p
     where p.owner_id=new.owner_id and p.created_at > now()-interval '10 seconds') then
      raise exception 'Please wait before starting another draft';
   end if;
 end if;
 return new;
end;
$$;