import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout'
import { getProjects, GitHubProject } from '../../utils/github';

export const getStaticPaths = async () => ({
  paths: (await getProjects()).map(p => `/projects/${p.name}`),
  fallback: false,
});

export async function getStaticProps({
  params,
}: {
  params: { name: string };
}): Promise<{ props: GitHubProject }> {
  const { name } = params;

  const project = (await getProjects()).find(p => p.name === name);
  if (!project) {
    throw new Error(`Expected name ${name}`);
  }
  return {
    props: project
  };
}

export default function Project(props: GitHubProject) {
  const { name, description, created_at, stargazers_count } = props;
  return (<Layout title={name}>
    <article className="post h-entry">
      <header className="post-header">
        <Head>
          <link href="/nord.css" rel="stylesheet"></link>
        </Head>
        <h1 className="post-title p-name" itemProp="name headline">
          {name}
        </h1>
        <p className="post-meta">
          Created: <time dateTime={created_at} itemProp="created_at">
            {new Date(created_at).toDateString()}
          </time>
        </p>
        <p className="post-meta">
          Stars: {stargazers_count}
        </p>
      </header>

      <div
        className="post-content e-content"
        itemProp="description"
  >{description}</div>

      <a className="u-url" href={`/projects/${name}`} hidden></a>

      <footer className="site-footer">
        <Link href="/projects">
          <a>&laquo; Back to projects</a>
        </Link>
      </footer>
    </article>
  </Layout>);
}