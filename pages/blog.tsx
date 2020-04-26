import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { getPosts, BlogPost } from '../utils/posts';


export async function getStaticProps() {
  const posts = await getPosts();
  const sortedPosts = posts.sort((a, b) => a.date.localeCompare(b.date));
  return { props: { posts: sortedPosts } };
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  return (
    <main className="page-content" aria-label="Content">
      <div className="wrapper">
        <div className="home">
          <Head>
            <title>BLOG styfle.dev</title>
          </Head>
          <h1 className="page-heading">styfle.dev</h1>
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
  );
}