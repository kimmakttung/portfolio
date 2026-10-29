-- CONNECT LABO community planning board. All exposed tables use explicit grants + RLS.
create table public.community_requests (
 id uuid primary key default gen_random_uuid(),
 author_id uuid not null references auth.users(id) on delete cascade,
 title text not null check (char_length(btrim(title)) between 4 and 140),
 details text not null check (char_length(btrim(details)) between 12 and 2500),
 category text not null default 'other' check (category in ('brand','culture','marketing','service','other')),
 is_hidden boolean not null default false,
 created_at timestamptz not null default now()
);
create index community_requests_feed_idx on public.community_requests (created_at desc);
create index community_requests_author_idx on public.community_requests(author_id,created_at desc);

create table public.community_projects (
 id uuid primary key default gen_random_uuid(),
 owner_id uuid not null references auth.users(id) on delete cascade,
 challenge_key text check (challenge_key is null or char_length(challenge_key) <= 60),
 challenge_title text not null default '' check (char_length(challenge_title) <= 180),
 title text not null check (char_length(btrim(title)) between 3 and 140),
 problem text not null default '' check (char_length(problem) <= 3000),
 audience text not null default '' check (char_length(audience) <= 1000),
 concept text not null default '' check (char_length(concept) <= 4000),
 execution text not null default '' check (char_length(execution) <= 5000),
 measurement text not null default '' check (char_length(measurement) <= 2500),
 is_published boolean not null default false,
 is_hidden boolean not null default false,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 constraint community_publish_complete check (
   not is_published or (
     char_length(btrim(problem)) >= 10 and
     char_length(btrim(concept)) >= 10 and
     char_length(btrim(execution)) >= 10
   )
 )
);
create index community_projects_public_idx on public.community_projects (updated_at desc) where is_published and not is_hidden;
create index community_projects_owner_idx on public.community_projects (owner_id,updated_at desc);

create table public.community_ratings (
 project_id uuid not null references public.community_projects(id) on delete cascade,
 reviewer_id uuid not null references auth.users(id) on delete cascade,
 score smallint not null check (score between 1 and 5),
 created_at timestamptz not null default now(),
 primary key (project_id,reviewer_id)
);
create index community_ratings_project_idx on public.community_ratings(project_id);

create table public.community_reports (
 id uuid primary key default gen_random_uuid(),
 reporter_id uuid not null references auth.users(id) on delete cascade,
 project_id uuid references public.community_projects(id) on delete cascade,
 request_id uuid references public.community_requests(id) on delete cascade,
 reason text not null check (char_length(btrim(reason)) between 8 and 500),
 created_at timestamptz not null default now(),
 constraint community_report_single_target check ((project_id is null) <> (request_id is null))
);
create unique index community_report_unique_project on public.community_reports(reporter_id,project_id) where project_id is not null;
create unique index community_report_unique_request on public.community_reports(reporter_id,request_id) where request_id is not null;

alter table public.community_requests enable row level security;
alter table public.community_projects enable row level security;
alter table public.community_ratings enable row level security;
alter table public.community_reports enable row level security;

-- Supabase 2026 data API changes: explicit privileges; never rely on default exposure.
revoke all on public.community_requests,public.community_projects,public.community_ratings,public.community_reports from public,anon,authenticated;
grant select,insert,delete on public.community_requests to authenticated;
grant update(is_hidden) on public.community_requests to authenticated;
grant select on public.community_projects to anon,authenticated;
grant insert,delete on public.community_projects to authenticated;
grant update(title,problem,audience,concept,execution,measurement,is_published,is_hidden,challenge_key,challenge_title) on public.community_projects to authenticated;
grant select on public.community_ratings to anon,authenticated;
grant insert,update(score),delete on public.community_ratings to authenticated;
grant select,insert on public.community_reports to authenticated;

create policy "Members read open and own requests" on public.community_requests
 for select to authenticated using (not is_hidden or author_id = (select auth.uid()) or (select private.is_portfolio_admin()));
create policy "Members create their requests" on public.community_requests
 for insert to authenticated with check (author_id = (select auth.uid()) and not is_hidden);
create policy "Members remove their requests" on public.community_requests
 for delete to authenticated using (author_id = (select auth.uid()) and not is_hidden);
create policy "Administrators hide requests" on public.community_requests
 for update to authenticated using ((select private.is_portfolio_admin()))
 with check ((select private.is_portfolio_admin()));

create policy "Anyone reads published project submissions" on public.community_projects
 for select to anon,authenticated using (is_published and not is_hidden);
create policy "Members read own drafts" on public.community_projects
 for select to authenticated using (owner_id = (select auth.uid()) or (select private.is_portfolio_admin()));
create policy "Members create private drafts only" on public.community_projects
 for insert to authenticated with check (owner_id = (select auth.uid()) and not is_published and not is_hidden);
create policy "Members update own unhidden submissions" on public.community_projects
 for update to authenticated using (owner_id = (select auth.uid()) and not is_hidden)
 with check (owner_id = (select auth.uid()) and not is_hidden);
create policy "Administrators moderate submissions" on public.community_projects
 for update to authenticated using ((select private.is_portfolio_admin()))
 with check ((select private.is_portfolio_admin()));
create policy "Members delete own unhidden submissions" on public.community_projects
 for delete to authenticated using (owner_id = (select auth.uid()) and not is_hidden);

create policy "Ratings visible for published submissions" on public.community_ratings
 for select to anon,authenticated using (
   exists(select 1 from public.community_projects p
     where p.id = project_id and p.is_published and not p.is_hidden)
 );
create policy "One rating per member other than author" on public.community_ratings
 for insert to authenticated with check (
   reviewer_id = (select auth.uid()) and
   exists(select 1 from public.community_projects p
     where p.id = project_id and p.is_published and not p.is_hidden
       and p.owner_id <> (select auth.uid()))
 );
create policy "Members change only own rating" on public.community_ratings
 for update to authenticated using (reviewer_id = (select auth.uid()))
 with check (
   reviewer_id = (select auth.uid()) and
   exists(select 1 from public.community_projects p
     where p.id = project_id and p.is_published and not p.is_hidden
       and p.owner_id <> (select auth.uid()))
 );
create policy "Members may remove own rating" on public.community_ratings
 for delete to authenticated using (reviewer_id = (select auth.uid()));

create policy "Moderators read reports" on public.community_reports
 for select to authenticated using ((select private.is_portfolio_admin()));
create policy "Members report visible content" on public.community_reports
 for insert to authenticated with check (
   reporter_id = (select auth.uid()) and (
     (project_id is not null and exists(select 1 from public.community_projects p where p.id=project_id and p.is_published and not p.is_hidden and p.owner_id<>(select auth.uid())))
     or
     (request_id is not null and exists(select 1 from public.community_requests r where r.id=request_id and not r.is_hidden and r.author_id<>(select auth.uid())))
   )
 );

-- Fast, invoker-rights timestamp update.
create or replace function private.touch_community_updated_at()
 returns trigger language plpgsql security invoker set search_path = '' as $$
 begin new.updated_at = now(); return new; end;
 $$;
create trigger community_project_updated before update on public.community_projects
 for each row execute function private.touch_community_updated_at();

-- Small anti-flood guard on new in-app requests and project drafts.
create or replace function private.guard_community_submit()
 returns trigger language plpgsql security invoker set search_path = '' as $$
 begin
   if tg_table_name='community_requests' and exists (
     select 1 from public.community_requests r where r.author_id=new.author_id and r.created_at > now()-interval '90 seconds'
   ) then raise exception 'Please wait before submitting another request'; end if;
   if tg_table_name='community_projects' and exists (
     select 1 from public.community_projects p where p.owner_id=new.owner_id and p.created_at > now()-interval '10 seconds'
   ) then raise exception 'Please wait before starting another draft'; end if;
   return new;
 end;
 $$;
create trigger community_request_guard before insert on public.community_requests
 for each row execute function private.guard_community_submit();
create trigger community_project_guard before insert on public.community_projects
 for each row execute function private.guard_community_submit();
