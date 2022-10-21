import { experimental_use as use } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from 'components/Layout';
import { getPosts } from 'utils/posts';
import { formatDate } from 'utils/date';
import { markdownToHtml } from 'utils/markdown';

interface PostProps {
  slug: string;
  title: string;
  date: string;
  html: string;
  ogImage?: { src: string; width: number; height: number } | null;
}

interface Params {
  slug: string;
}

export const generateStaticParams = async () => (await getPosts('trim')).map(p => p.slug);

async function getProps(params: Params): Promise<PostProps> {
  const { slug } = params;

  const post = (await getPosts('full')).find(p => p.slug === slug);
  if (!post) {
    throw new Error(`Expected slug ${slug}`);
  }
  const { title, date, ogImage, content } = post;
  const html = markdownToHtml(content);
  return { slug, title, date, ogImage, html };
}

export default function Post({ params }: { params: Params }) {
  const { slug, title, date, ogImage, html } = use(getProps(params));
  return (
    <Layout title={title} ogImage={ogImage}>
      <article>
        <header>
          <Head>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
            <link
              href="/themes/nord.css"
              rel="stylesheet"
              media="(prefers-color-scheme: dark)"
            ></link>
            {/* eslint-disable-next-line @next/next/no-css-tags */}
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
