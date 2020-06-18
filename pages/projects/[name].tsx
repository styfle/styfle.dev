import Link from 'next/link';
import Layout from '../../components/Layout';
import { getProjects, GitHubProject, getRawFile } from '../../utils/github';
import { markdownToHtml } from '../../utils/markdown';

interface Props {
  project: GitHubProject;
  readme: string;
}

export const getStaticPaths = async () => ({
  paths: (await getProjects()).map(p => `/projects/${p.name}`),
  fallback: false,
});

export async function getStaticProps({
  params,
}: {
  params: { name: string };
}): Promise<{ props: Props }> {
  const { name } = params;

  const project = (await getProjects()).find(p => p.name === name);
  if (!project) {
    throw new Error(`Expected name ${name}`);
  }
  const readme = await getRawFile(project, 'README.md');
  return {
    props: { project, readme },
  };
}

export default function Project({ project, readme }: Props) {
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
        <Link href="/projects">
          <a className="green-link">&laquo; All projects</a>
        </Link>
        <a className="green-link" href={html_url}>
          Edit this page &raquo;
        </a>
      </div>
    </Layout>
  );
}
