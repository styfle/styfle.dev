import Image from 'next/image';
import { getProjects } from 'utils/github';
import { formatDate } from 'utils/date';
import style from './projects.module.css';

export default async function Projects() {
  const projects = await getProjects();
  return (
    <>
      <h1>Projects</h1>
      <div className={style.grid}>
        {projects.map(({ name, description, homepage, created_at, og_image_url }) => (
          <section key={name} className={style.section}>
            <a href={homepage || ''}>
              <Image alt={name} src={og_image_url || ''} width={640} height={320} />
              <h2>{name}</h2>
              <time dateTime={created_at || ''} itemProp="dateCreated">
                {formatDate(created_at || '')}
              </time>
              <div itemProp="description">{description}</div>
            </a>
          </section>
        ))}
      </div>
    </>
  );
}
