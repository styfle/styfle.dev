import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from 'utils/posts';
import { marked } from 'marked';
import { formatDate } from 'utils/date';
import Simpsons from 'public/images/blog/simpsons-any-key.jpg';
import { getOgImage } from 'utils/og-image';

export async function generateMetadata() {
  const title = 'Blog';
  const description = 'Occasional articles about software, the web, and more.';
  const ogImage = getOgImage('/images/blog/simpsons-any-key.jpg');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://styfle.dev/blog`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: ogImage,
    },
  };
}

export default async function Blog() {
  const allPosts = await getPosts('trim');
  const posts = allPosts.sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <h1>Blog</h1>
      <Image
        src={Simpsons}
        placeholder="blur"
        width="710"
        height="360"
        alt="Simpsons Any Key"
        //@ts-ignore
        fetchPriority="high"
      />
      {posts.map(({ slug, title, date, content }) => (
        <article key={slug}>
          <h2 style={{ margin: 0 }}>
            <Link href={`/blog/${slug}`} className="green-link">
              {title}
            </Link>
          </h2>
          <time dateTime={date} itemProp="datePublished">
            {formatDate(date)}
          </time>
          <div itemProp="articleBody" dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          <Link href={`/blog/${slug}`} className="green-link">
            Read more...
          </Link>
          <hr />
        </article>
      ))}
    </>
  );
}
