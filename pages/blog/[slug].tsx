import { highlight, highlightAuto } from 'highlight.js';
import marked from 'marked';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getPosts } from '../../utils/posts';
import { formatDate } from '../../utils/date';

interface PostProps {
  slug: string;
  title: string;
  date: string;
  html: string;
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
  const { title, date, content } = post;
  const html = marked(content, {
    highlight: function (code, lang) {
      if (!lang) {
        return highlightAuto(code).value;
      }
      return highlight(lang, code).value;
    },
  });
  return {
    props: { slug, title, date, html },
  };
}

export default function Post(props: PostProps) {
  const { slug, title, date, html } = props;
  return (
    <Layout title={title}>
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
