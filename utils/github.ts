import { Octokit } from '@octokit/rest';
import { existsSync, promises } from 'fs';
const { readFile, writeFile } = promises;
if (!process.env.GH_TOKEN) {
  throw new Error('Expected environment variable GH_TOKEN');
}
const octokit = new Octokit({ auth: process.env.GH_TOKEN });

export interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: any;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: any;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: any;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface GitHubProject {
  name: string;
  full_name: string;
  description: string;
  homepage: string;
  html_url: string;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  size: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  og_image_url?: string;
}

async function getAllRepos(): Promise<Repo[]> {
  let repos: Repo[];
  if (existsSync('./repos.json')) {
    console.log('Found cached repos.json...');
    const json = await readFile('./repos.json', 'utf8');
    repos = JSON.parse(json);
  } else {
    console.log('Fetching all repos so this might take a second...');
    repos = await octokit.paginate(octokit.repos.listForAuthenticatedUser, {
      visibility: 'all',
      affiliation: 'owner',
      sort: 'created',
      per_page: 100,
    });
    await writeFile('./repos.json', JSON.stringify(repos), 'utf8');
  }
  return repos;
}

export async function getProjects(): Promise<GitHubProject[]> {
  const repos = await getAllRepos();
  const allowList = new Set([
    'Basic-Wars',
    'The-Harvest-Club',
    'typed-tmpl',
    'ypha',
    'dice',
    'wedding',
    'dad-jokes',
  ]);
  const blockList = new Set([
    'dotnet-api-example',
    'tsc-example',
    'screenshot-v2',
    'styfle.github.io',
  ]);
  const projects: GitHubProject[] = repos.filter(
    r =>
      allowList.has(r.name) ||
      (!r.fork && !r.private && !r.disabled && !r.archived && !blockList.has(r.name)),
  );
  projects.forEach(async r => {
    if (!r.og_image_url) {
      if (existsSync(`${process.cwd()}/public/images/projects/${r.name}.png`)) {
        r.og_image_url = `/images/projects/${r.name}.png`;
      }
      if (existsSync(`${process.cwd()}/public/images/projects/${r.name}.jpg`)) {
        r.og_image_url = `/images/projects/${r.name}.jpg`;
      }
    }
    if (!r.homepage || r.name === 'styfle.dev') {
      r.homepage = r.html_url;
    } else if (r.homepage.startsWith('https://styfle.dev')) {
      r.homepage = r.homepage.slice(18);
    }
  });
  return projects;
}

export async function getRawFile({ full_name }: GitHubProject, filename: string) {
  const url = `https://raw.githubusercontent.com/${full_name}/main/${filename}`;
  const res = await fetch(url);
  const text = await res.text();
  return text;
}
