import { getOgImage } from 'utils/og-image';

export default async function Head() {
  const title = 'Blog';
  const ogImage = getOgImage('/images/blog/simpsons-any-key.jpg');
  return (
    <>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={ogImage} />
      <title>{title}</title>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        href="/themes/nord.css"
        rel="stylesheet"
        media="(prefers-color-scheme: dark)"
        //@ts-ignore
        precedence="default"
      ></link>
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link
        href="/themes/github.css"
        rel="stylesheet"
        media="(prefers-color-scheme: light)"
        //@ts-ignore
        precedence="default"
      ></link>
    </>
  );
}
