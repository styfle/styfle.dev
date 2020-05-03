import Link from 'next/link';
import Layout from '../../components/Layout'
import { getPosts, BlogPost } from '../../utils/posts';
import marked from 'marked';

export async function getStaticProps() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
  return { props: { posts: sortedPosts } };
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (<Layout title="Blog">
    <h1>Blog</h1>
      {posts.map(({slug, title, date, content}) => (
        <article key={slug}>
          <h2>
            <Link href="/blog/[slug]" as={`/blog/${slug}`}>
              <a>{title}</a>
            </Link>
          </h2>
          <p className="post-meta">
              <time
                className="dt-published"
                dateTime={date}
                itemProp="datePublished"
              >
                {new Date(date).toDateString()}
              </time>
            </p>
          <div
            className="post-content e-content"
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: marked(content.split('\n')[1]) }}
          ></div>
          <Link href="/blog/[slug]" as={`/blog/${slug}`}>
            <a>Read more...</a>
          </Link>
          <hr/>
        </article>
      ))}
    </Layout>);
}