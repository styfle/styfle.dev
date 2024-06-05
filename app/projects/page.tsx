import Image from 'next/image';
import { getProjects } from 'utils/github';
import { formatDate } from 'utils/date';
import style from './projects.module.css';
import { getOgImage } from 'utils/og-image';

export async function generateMetadata() {
  const title = 'Projects';
  const description = 'A porfolio of projects built by styfle over the years.';
  const ogImage = getOgImage('/images/blog/ceriously-flat-glow.jpg');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://styfle.dev/projects`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage,
    },
  };
}

export default async function Projects() {
  const projects = await getProjects();
  return (
    <>
      <h1>Projects</h1>
      <div className={style.grid}>
        {projects.map(({ name, description, homepage, created_at, og_image_url }) => (
          <section key={name} className={style.section}>
            <a href={homepage || ''}>
              <Image alt={name} src={og_image_url || ''} width={640} height={320} quality={80} />
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
