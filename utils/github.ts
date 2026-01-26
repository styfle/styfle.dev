import type { GetResponseDataTypeFromEndpointMethod } from '@octokit/types';
import { Octokit } from '@octokit/rest';
import { existsSync, promises } from 'fs';
const { readFile, writeFile } = promises;
if (!process.env.GH_TOKEN) {
  throw new Error('Expected environment variable GH_TOKEN');
}
const octokit = new Octokit({ auth: process.env.GH_TOKEN });
const reposFilePath = '/tmp/styfle-dev-repos.json';

export type Repo = GetResponseDataTypeFromEndpointMethod<
  typeof octokit.repos.listForAuthenticatedUser
>[number];

const validGitHubProjectKeys = [
  'name',
  'full_name',
  'description',
  'homepage',
  'html_url',
  'stargazers_count',
  'watchers_count',
  'created_at',
  'updated_at',
  'pushed_at',
  'og_image_url',
];

export type GitHubProject = Pick<
  Repo,
  | 'name'
  | 'full_name'
  | 'description'
  | 'homepage'
  | 'html_url'
  | 'stargazers_count'
  | 'watchers_count'
  | 'created_at'
  | 'updated_at'
  | 'pushed_at'
> & {
  og_image_url?: string;
};

async function getAllRepos(): Promise<Repo[]> {
  let repos: Repo[];
  if (existsSync(reposFilePath)) {
    console.log('Found cached ', reposFilePath);
    const json = await readFile(reposFilePath, 'utf8');
    repos = JSON.parse(json);
  } else {
    console.log('Fetching all repos so this might take a second...');
    const [repoList, tc39] = await Promise.all([
      octokit.paginate(octokit.repos.listForAuthenticatedUser, {
        visibility: 'all',
        affiliation: 'owner',
        sort: 'created',
        per_page: 100,
      }),
      octokit.repos.get({
        owner: 'tc39',
        repo: 'proposal-import-bytes',
      }),
    ]);
    repos = repoList;
    // @ts-expect-error The type doesn't match perfectly but it's close enough
    repos.push({
      name: 'ypha',
      full_name: 'styfle/ypha',
      html_url: 'https://github.com/styfle/ypha', // repo is currently private so we manually push here
      description: '👩🏽‍⚕️ Your Patient Has Arrived - replace the legacy Call Button in a waiting room',
      created_at: '2019-01-16T02:46:01Z',
      updated_at: '2025-03-10T01:48:36Z',
      pushed_at: '2025-03-10T01:48:33Z',
      homepage: 'https://ypha.app',
      stargazers_count: 0,
      watchers_count: 0,
    });
    if (tc39.status === 200) {
      // @ts-expect-error The type doesn't match perfectly but it's close enough
      repos.push(tc39.data);
    }
    repos.sort((a, b) => new Date(b.created_at!).getTime() - new Date(a.created_at!).getTime());
    await writeFile(reposFilePath, JSON.stringify(repos), 'utf8');
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
  projects.forEach(r => {
    if (!r.og_image_url) {
      if (existsSync(`${process.cwd()}/public/images/projects/${r.name}.png`)) {
        r.og_image_url = `/images/projects/${r.name}.png`;
      } else if (existsSync(`${process.cwd()}/public/images/projects/${r.name}.jpg`)) {
        r.og_image_url = `/images/projects/${r.name}.jpg`;
      } else {
        r.og_image_url = `https://placehold.co/1280x640/787/FFF.png?text=${r.name}`;
      }
    }
    if (!r.homepage || r.name === 'styfle.dev') {
      r.homepage = r.html_url;
    } else if (r.homepage.startsWith('https://styfle.dev')) {
      r.homepage = r.homepage.slice(18);
    }
    Object.keys(r)
      .filter(k => !validGitHubProjectKeys.includes(k))
      .forEach(k => {
        const project = r as Record<string, unknown>;
        delete project[k];
      });
  });
  return projects;
}

export async function getRawFile({ full_name }: GitHubProject, filename: string) {
  const url = `https://raw.githubusercontent.com/${full_name}/main/${filename}`;
  const res = await fetch(url);
  const text = await res.text();
  return text;
}
