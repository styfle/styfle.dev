import Head from 'next/head';

import Navigation from './Navigation';
import Footer from './Footer';

interface Props {
  title: string;
  ogImage?: { src: string; width: number; height: number } | null;
  children: React.ReactNode;
}

export default function Layout({ title, ogImage, children }: Props) {
  const og_image_url = ogImage?.src ?? '/images/blog/ceriously-flat-glow.jpg';
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:title" content={title} />
        <meta property="og:image" content={og_image_url} />
        <meta name="twitter:creator" content="@styfle" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Navigation />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
