import Link from 'next/link';
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
      <picture>
        <source
          srcSet="https://res.cloudinary.com/ceriously/image/upload/v1589074697/blog/simpsons-any-key.webp"
          type="image/webp"
        />
        <source
          srcSet="https://res.cloudinary.com/ceriously/image/upload/v1589074697/blog/simpsons-any-key.jpg"
          type="image/jpeg"
        />
        <img
          alt="Simpsons Any Key"
          src="https://res.cloudinary.com/ceriously/image/upload/v1589074697/blog/simpsons-any-key.jpg"
        />
      </picture>
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
