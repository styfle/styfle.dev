import { getOgImage } from 'utils/og-image';

export default async function Head() {
  const title = 'Projects';
  const ogImage = getOgImage('/images/blog/ceriously-flat-glow.jpg');
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <title>{title}</title>
    </>
  );
}
