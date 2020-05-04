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
        <h1>
          {name}
        </h1>
        <p>
          Created: <time dateTime={created_at} itemProp="created_at">
            {new Date(created_at).toDateString()}
          </time>
        </p>
        <p>
          Stars: {stargazers_count}
        </p>
      <div itemProp="description">{description}</div>
      <a href={`/projects/${name}`} hidden></a>
      <Link href="/projects">
        <a className="green-link">&laquo; Back to projects</a>
      </Link>
  </Layout>);
}