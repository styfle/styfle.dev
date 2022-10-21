import { experimental_use as use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from 'components/Layout';
import { getPosts, BlogPost } from 'utils/posts';
import { marked } from 'marked';
import { formatDate } from 'utils/date';
import Simpsons from 'public/images/blog/simpsons-any-key.jpg';

async function getProps(): Promise<BlogPost[]> {
  return (await getPosts('trim')).sort((a, b) => b.date.localeCompare(a.date));
}

export default function Blog() {
  const posts = use(getProps());
  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      <Image src={Simpsons} placeholder="blur" width="720" height="420" alt="Simpsons Any Key" />
      {posts.map(({ slug, title, date, content }) => (
        <article key={slug}>
          <h2>
            <Link href="/blog/[slug]" as={`/blog/${slug}`}>
              <a className="green-link">{title}</a>
            </Link>
          </h2>
          <p className="post-meta">
            <time className="dt-published" dateTime={date} itemProp="datePublished">
              {formatDate(date)}
            </time>
          </p>
          <div
            className="post-content e-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
          <Link href="/blog/[slug]" as={`/blog/${slug}`}>
            <a className="green-link">Read more...</a>
          </Link>
          <hr />
        </article>
      ))}
    </Layout>
  );
}
