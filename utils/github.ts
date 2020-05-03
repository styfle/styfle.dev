import { Octokit } from '@octokit/rest';
import { existsSync, promises } from 'fs';
const { readFile, writeFile } = promises;
if (!process.env.GH_TOKEN) {
    throw new Error('Expected environment variable GH_TOKEN')
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
    description: string;
    homepage: string;
    html_url: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    size: number
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
        console.log('Fetching all repos so this might take a second...')
        repos = await octokit.paginate(
            octokit.repos.listForAuthenticatedUser,
            {
                visibility: 'public',
                affiliation: 'owner',
                sort: 'created',
                per_page: 100,
            }
        );
        await writeFile('./repos.json', JSON.stringify(repos), 'utf8');
    }
    return repos;
}

export async function getProjects(): Promise<GitHubProject[]> {
    const repos = await getAllRepos();
    const allowList = new Set(['The-Harvest-Club', 'ypha', 'dice', 'wedding']);
    const blockList = new Set(['dotnet-api-example', 'tsc-example', 'screenshot-v2', 'styfle.github.io']);
    const projects: GitHubProject[] = repos.filter(r => allowList.has(r.name) || (!r.fork && !r.private && !r.disabled && !r.archived && !blockList.has(r.name)));
    projects.forEach(r => {
        if (r.name in mapRepoToImage) { 
            r.og_image_url = mapRepoToImage[r.name];
        }
        if (!r.homepage || r.name === 'styfle.dev') {
            r.homepage = r.html_url;
        }
    });
    return projects;
}

const mapRepoToImage: Record<string, string> = {
    'doorbell': 'https://repository-images.githubusercontent.com/259120667/a4421500-8d6c-11ea-9096-82407a8c95a5',
    'cancel-workflow-action': 'https://repository-images.githubusercontent.com/237695528/790bf580-8d6d-11ea-8524-57512d577f22',
    'rediscovering-neverland': 'https://repository-images.githubusercontent.com/230126718/4fe36900-8d5d-11ea-979a-a21cd8131656',
    'tls-check': 'https://repository-images.githubusercontent.com/144043735/a061c300-8d6b-11ea-80e2-d7099d7917fe',
    'styfle.dev': 'https://repository-images.githubusercontent.com/173218733/50cdc800-8d68-11ea-88d1-59b2ff1cb179',
    'awesome-desktop-js': 'https://repository-images.githubusercontent.com/136332742/ed459980-8d6b-11ea-83f2-3a03d84b6df4',
    'packagephobia': 'https://repository-images.githubusercontent.com/125946482/c4260880-8d6d-11ea-9491-b75c56b3c3e1',
    'awesome-online-ide': 'https://repository-images.githubusercontent.com/101212460/9c2fa880-8d5f-11ea-9d4a-3e5fac3dad55',
    'breaking-changes-web': 'https://repository-images.githubusercontent.com/124409296/3fd08700-8d67-11ea-94a3-458a6c35de39',
    'dotfiles': 'https://repository-images.githubusercontent.com/84888943/a787d180-8d69-11ea-867a-5f17dcf06e99',
    'geoslack': 'https://repository-images.githubusercontent.com/97144945/d30abc00-8d69-11ea-8b1f-b8ff088e165c',
    'magnemite': 'https://repository-images.githubusercontent.com/72372310/3c3b0100-8d63-11ea-83f2-8eb9c4928ea3',
    'exeggcute': 'https://repository-images.githubusercontent.com/63953497/a8b60000-8d63-11ea-8f4d-1f197c326fb4',
    'react-server-example-tsx': 'https://repository-images.githubusercontent.com/60888990/e581f700-8d63-11ea-862f-1d468aae7171',
    'copee': 'https://repository-images.githubusercontent.com/39547867/182bef80-8d64-11ea-98af-8709c8d784bf',
    'typed-tmpl': 'https://repository-images.githubusercontent.com/45296077/47426100-8d64-11ea-9a71-78a05d28668f',
    'The-Harvest-Club': 'https://repository-images.githubusercontent.com/3373441/23334f80-8d65-11ea-86da-962d559821e8',
    'Basic-Wars': 'https://repository-images.githubusercontent.com/2135555/b077a380-8d67-11ea-9c2a-75106021354c',
};