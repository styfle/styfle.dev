import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from 'utils/posts';
import { formatDate } from 'utils/date';
import { markdownToHtml } from 'utils/markdown';
import { getProps, Params } from './utils';
import { getOgImage } from 'utils/og-image';

export const generateStaticParams = async () => {
  const posts = await getPosts('trim');
  return posts;
};

export async function generateMetadata({ params }: { params: Params }) {
  const posts = await getPosts('trim');
  const post = posts.find(p => p.slug === params.slug);
  if (!post) {
    throw new Error(`Expected slug ${params.slug}`);
  }
  const ogImage = getOgImage(post.ogImage?.src ?? '/images/blog/ceriously-flat-glow.jpg');

  const { title, slug, date: publishedTime, content: description } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://styfle.dev/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage,
    },
  };
}

export default async function Post({ params }: { params: Params }) {
  const { slug, title, date, ogImage, content } = await getProps(params);
  const html = markdownToHtml(content);
  return (
    <article>
      <header>
        <h1 itemProp="name headline">{title}</h1>
        <p style={{ textAlign: 'center', lineHeight: '1' }}>
          <time dateTime={date} itemProp="datePublished">
            {formatDate(date)}
          </time>
        </p>
      </header>

      {ogImage ? (
        <Image src={ogImage.src} width={ogImage.width} height={ogImage.height} alt={title} />
      ) : null}
      <div
        className="main-content"
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>

      <a href={`/blog/${slug}`} hidden></a>

      <Link href="/blog" className="green-link">
        &laquo; Back to blog
      </Link>
    </article>
  );
}
