import { getProjects, GitHubProject, getRawFile } from 'utils/github';

export interface Params {
  name: string;
  [key: string]: string;
}

interface Props {
  project: GitHubProject;
  readme: string;
}

export async function getProps(params: Params): Promise<Props> {
  const projects = await getProjects();
  const project = projects.find(p => p.name === params.name);
  if (!project) {
    throw new Error(`Expected name ${params.name}`);
  }
  const filename = project.name === 'geoslack' ? 'docs/README.md' : 'README.md';
  let readme = await getRawFile(project, filename);
  readme = readme.replaceAll('ceriously.com', 'styfle.dev');
  if (project.name === 'geoslack') {
    readme = readme.replaceAll(
      /img\/.+(png|svg)/g,
      (match: string) => `https://raw.githubusercontent.com/styfle/geoslack/main/docs/${match}`,
    );
  }
  return { project, readme };
}
