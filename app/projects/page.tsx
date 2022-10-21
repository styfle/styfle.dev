import { experimental_use as use } from 'react';
import Image from 'next/image';
import Layout from 'components/Layout';
import { getProjects, GitHubProject } from 'utils/github';
import { formatDate } from 'utils/date';
import style from 'styles/projects.module.css';

async function getProps(): Promise<GitHubProject[]> {
  const projects = await getProjects();
  return projects;
}

export default function Projects() {
  const projects = use(getProps());
  return (
    <Layout title="Projects">
      <h1>Projects</h1>
      <div className={style.grid}>
        {projects.map(({ name, description, homepage, created_at, og_image_url }) => (
          <section key={name} className={style.section}>
            <a href={homepage || ''}>
              <Image alt={name} src={og_image_url || ''} width={640} height={320} />
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
