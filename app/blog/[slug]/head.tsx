import { getOgImage } from 'utils/og-image';
import { getProps, Params } from './utils';

export default async function Head({ params }: { params: Params }) {
  const { title, ogImage } = await getProps(params);
  const og = getOgImage(ogImage?.src ?? '/images/blog/ceriously-flat-glow.jpg');
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={og} />
      <title>{title}</title>
    </>
  );
}
