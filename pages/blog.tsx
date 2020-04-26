import Link from 'next/link';
import Layout from '../components/Layout'
import { getPosts, BlogPost } from '../utils/posts';

export async function getStaticProps() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => a.date.localeCompare(b.date));
  return { props: { posts: sortedPosts } };
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (<Layout title="Blog">
    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <div className="home">
          <h1 className="page-heading">Blog</h1>
          <h2 className="post-list-heading">Posts</h2>
          <ul className="post-list">
            {posts.map(({slug, title, date}) => (
              <li key={slug}>
                <span className="post-meta">
                  {new Date(date).toDateString()}
                </span>
                <h3>
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