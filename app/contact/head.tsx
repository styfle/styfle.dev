import { getOgImage } from 'utils/og-image';

export default async function Head() {
  const title = 'Contact';
  const ogImage = getOgImage('/images/blog/star-trek-kirk.jpg');
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <title>{title}</title>
    </>
  );
}
