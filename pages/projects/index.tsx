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
<style jsx>{`
  article {
    border: 1px solid #2d2d2d;
    border-radius: 7px;
    display: inline-block;
    width: 300px;
    padding: 20px;
    height: 300px;
    margin-right: 5px;
  }

  h2 {
    margin: 0;
  }

  time {
    font-size: 10px;
  }
`}</style>
      {projects.map(({name, description, created_at}) => (
        <article key={name}>
          <h2>
            <Link href="/projects/[name]" as={`/projects/${name}`}>
              <a>{name}</a>
            </Link>
          </h2>
          <time dateTime={created_at} itemProp="created_at" >
            {new Date(created_at).toDateString()}
          </time>
          <div itemProp="description">{description}</div>
        </article>
      ))}
    </Layout>);
}