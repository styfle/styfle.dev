import Link from 'next/link';
import Layout from '../components/Layout'
import { getPosts, BlogPost } from '../utils/posts';

export async function getStaticProps() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => b.date.localeCompare(a.date));
  return { props: { posts: sortedPosts } };
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (<Layout title="Blog">
    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <div className="home">
          <h1 className="page-heading">Blog</h1>
          <ul className="post-list">
            {posts.map(({slug, title, date}) => (
              <li key={slug}>
                <h3>
                  <small className="post-meta">
                    {new Date(date).toDateString()}
                  </small>{" "}
                  <Link href="/post/[slug]" as={`/post/${slug}`}>
                    <a className="post-link">{title}</a>
                  </Link>
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
    </Layout>);
}