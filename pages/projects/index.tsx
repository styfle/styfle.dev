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
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  section {
    border: 2px solid #2d2f2d;
    border-radius: 0.5rem;
    padding: 1rem;
    transition: box-shadow 200ms;
    box-shadow: none;
  }

  section:hover {
    cursor: pointer;
    box-shadow: 0 0 5px 2px rgba(155, 191, 158, 0.5);
  }

  h2 {
    margin: 0;
  }

  time {
    font-size: 10px;
  }
`}</style>
      <div className="grid">
      {projects.map(({name, description, homepage, created_at, og_image_url}) => (
        <section key={name}>
          {og_image_url ? <img src={og_image_url} width="100%" /> : null}
          <h2>
            {homepage && homepage.startsWith('https://styfle.dev/') 
            ? (<Link href="/projects/[name]" as={`/projects/${name}`}>
              <a>{name}</a>
            </Link>)
            : <a href={homepage}>{name}</a>}
          </h2>
          <time dateTime={created_at} itemProp="created_at" >
            {new Date(created_at).toDateString()}
          </time>
          <div itemProp="description">{description}</div>
        </section>
      ))}
    </div>
    </Layout>);
}