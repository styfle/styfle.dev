import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from 'utils/posts';
import { marked } from 'marked';
import { formatDate } from 'utils/date';
import Simpsons from 'public/images/blog/simpsons-any-key.jpg';

export default async function Blog() {
  const allPosts = await getPosts('trim');
  const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <h1>Blog</h1>
      <Image src={Simpsons} placeholder="blur" width="720" height="420" alt="Simpsons Any Key" />
      {posts.map(({ slug, title, date, content }) => (
        <article key={slug}>
          <h2>
            <Link href="/blog/[slug]" as={`/blog/${slug}`} className="green-link">
              {title}
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
          <Link href="/blog/[slug]" as={`/blog/${slug}`} className="green-link">
            Read more...
          </Link>
          <hr />
        </article>
      ))}
    </>
  );
}
