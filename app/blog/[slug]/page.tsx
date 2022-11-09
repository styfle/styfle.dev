import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from 'utils/posts';
import { formatDate } from 'utils/date';
import { markdownToHtml } from 'utils/markdown';
import { getProps, Params } from './utils';

export const generateStaticParams = async () => {
  const posts = await getPosts('trim');
  return posts;
};

export default async function Post({ params }: { params: Params }) {
  const { slug, title, date, ogImage, content } = await getProps(params);
  const html = markdownToHtml(content);
  return (
    <article>
      <header>
        <h1 itemProp="name headline">{title}</h1>
        <p style={{ textAlign: 'center', fontSize: '0.8em', lineHeight: '1' }}>
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
