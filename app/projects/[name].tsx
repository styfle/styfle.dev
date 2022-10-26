import { use } from 'react';
import Link from 'next/link';
import Layout from 'components/Layout';
import { getProjects, GitHubProject, getRawFile } from 'utils/github';
import { markdownToHtml } from 'utils/markdown';

interface Props {
  project: GitHubProject;
  readme: string;
}

interface Params {
  name: string;
}

export const generateStaticParams = async () => (await getProjects()).map(p => p.name);

async function getProps({ name }: Params): Promise<Props> {
  const project = (await getProjects()).find(p => p.name === name);
  if (!project) {
    throw new Error(`Expected name ${name}`);
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

export default function Project({ params }: { params: Params }) {
  const { project, readme } = use(getProps(params));
  const { name, html_url } = project;
  const baseUrl = `${html_url}/blob/main/`;
  const html = markdownToHtml(readme, baseUrl);
  return (
    <Layout title={name}>
      <div
        className="main-content"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
      <a href={`/projects/${name}`} hidden></a>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="/projects" className="green-link">
          &laquo; All projects
        </Link>
        <a className="green-link" href={html_url}>
          Edit this page &raquo;
        </a>
      </div>
    </Layout>
  );
}
