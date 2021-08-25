import Image from 'next/image';
import Layout from '../../components/Layout';
import { getProjects, GitHubProject } from '../../utils/github';
import { formatDate } from '../../utils/date';

export async function getStaticProps() {
  const projects = await getProjects();
  return { props: { projects } };
}

export default function Projects({ projects }: { projects: GitHubProject[] }) {
  return (
    <Layout title="Projects">
      <h1>Projects</h1>
      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 1rem;
        }

        section {
          border-color: rgba(185, 190, 180, 0.2);
          border-width: 2px;
          border-style: solid;
          border-radius: 0.5rem;
          padding: 1rem;
          transition-duration: 100ms;
          transition-property: border-color, background;
        }

        section:hover {
          cursor: pointer;
          background: rgba(185, 190, 180, 0.3);
        }

        @media (prefers-color-scheme: dark) {
          section {
            border-color: rgba(45, 47, 45, 1);
          }
          section:hover {
            background: rgba(125, 135, 125, 0.1);
          }
        }

        h2 {
          margin: 0;
        }

        time {
          font-size: 12px;
        }

        section > a {
          color: unset;
          text-decoration: unset;
        }

        section > a:hover {
          color: unset;
        }
      `}</style>
      <div className="grid">
        {projects.map(({ name, description, homepage, created_at, og_image_url }) => (
          <section key={name}>
            <a href={homepage || ''}>
              <Image src={og_image_url || ''} width={640} height={320} />
              <h2 className="green-link">{name}</h2>
              <time dateTime={created_at || ''} itemProp="created_at">
                {formatDate(created_at || '')}
              </time>
              <div itemProp="description">{description}</div>
            </a>
          </section>
        ))}
      </div>
    </Layout>
  );
}
