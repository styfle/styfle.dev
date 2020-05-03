import Link from 'next/link';
import Layout from '../../components/Layout'
import { getProjects, GitHubProject } from '../../utils/github';

export async function getStaticProps() {
  const projects = await getProjects();
  return { props: { projects } };
}

export default function Projects({ projects }: { projects: GitHubProject[] }) {
  return (<Layout title="Projects">
    <h1>Projects</h1>
      {projects.map(({name, description, created_at}) => (
        <article key={name}>
          <h2>
            <Link href="/projects/[name]" as={`/projects/${name}`}>
              <a>{name}</a>
            </Link>
          </h2>
          <p className="post-meta">
              <time dateTime={created_at} itemProp="created_at" >
                {new Date(created_at).toDateString()}
              </time>
            </p>
          <div
            className="post-content e-content"
            itemProp="description"
      >{description}</div>
        </article>
      ))}
    </Layout>);
}