import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { getPosts } from '../../utils/posts';
import { formatDate } from '../../utils/date';
import { markdownToHtml } from '../../utils/markdown';

interface PostProps {
  slug: string;
  title: string;
  date: string;
  html: string;
  ogImage?: { src: string; width: number; height: number } | null;
}

export const getStaticPaths = async () => ({
  paths: (await getPosts()).map(p => `/blog/${p.slug}`),
  fallback: false,
});

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}): Promise<{ props: PostProps }> {
  const { slug } = params;

  const post = (await getPosts()).find(p => p.slug === slug);
  if (!post) {
    throw new Error(`Expected slug ${slug}`);
  }
  const { title, date, ogImage, content } = post;
  const html = markdownToHtml(content);
  return {
    props: { slug, title, date, ogImage, html },
  };
}

export default function Post(props: PostProps) {
  const { slug, title, date, ogImage, html } = props;
  return (
    <Layout title={title} ogImage={ogImage}>
      <article>
        <header>
          <Head>
            <link
              href="/themes/nord.css"
              rel="stylesheet"
              media="(prefers-color-scheme: dark)"
            ></link>
            <link
              href="/themes/github.css"
              rel="stylesheet"
              media="(prefers-color-scheme: light)"
            ></link>
          </Head>
          <h1 itemProp="name headline">{title}</h1>
          <p style={{ textAlign: 'center', fontSize: '0.8em', lineHeight: '1' }}>
            <time dateTime={date} itemProp="datePublished">
              {formatDate(date)}
            </time>
          </p>
        </header>

        {ogImage ? (
          <Image src={ogImage.src} width={ogImage.width} height={ogImage.height} alt={title} />
        ) : null}
        <div
          className="main-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>

        <a href={`/blog/${slug}`} hidden></a>

        <Link href="/blog">
          <a className="green-link">&laquo; Back to blog</a>
        </Link>
      </article>
    </Layout>
  );
}
