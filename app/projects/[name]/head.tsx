import { getOgImage } from 'utils/og-image';
import { getProps, Params } from './utils';

export default async function Head({ params }: { params: Params }) {
  const { project } = await getProps(params);
  const { name: title, og_image_url } = project;
  const ogImage = getOgImage(og_image_url ?? '/images/blog/ceriously-flat-glow.jpg');
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <title>{title}</title>
    </>
  );
}
