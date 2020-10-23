import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../components/Layout';
import { getPosts, BlogPost } from '../../utils/posts';
import marked from 'marked';
import { formatDate } from '../../utils/date';

export async function getStaticProps() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
  return { props: { posts: sortedPosts } };
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <Layout title="Blog">
      <h1>Blog</h1>
      <Image src="/blog/simpsons-any-key.jpg" width={714} height={416} priority />
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
            dangerouslySetInnerHTML={{ __html: marked(content.split('\n')[1]) }}
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
