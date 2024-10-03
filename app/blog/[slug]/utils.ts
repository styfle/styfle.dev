import { getPosts } from 'utils/posts';

export interface Params {
  slug: string;
  [key: string]: string;
}

interface Props {
  slug: string;
  title: string;
  date: string;
  content: string;
  ogImage?: { src: string; width: number; height: number } | null;
}

export async function getProps(params: Params): Promise<Props> {
  const { slug } = params;
  const posts = await getPosts('full');
  const post = posts.find(p => p.slug === slug);
  if (!post) {
    throw new Error(`Expected slug ${slug}`);
  }
  const { title, date, ogImage, content } = post;
  return { slug, title, date, ogImage, content };
}
