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
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        href="/themes/nord.css"
        rel="stylesheet"
        media="(prefers-color-scheme: dark)"
        //@ts-ignore
        precedence="high"
      ></link>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        href="/themes/github.css"
        rel="stylesheet"
        media="(prefers-color-scheme: light)"
        //@ts-ignore
        precedence="high"
      ></link>
    </>
  );
}
