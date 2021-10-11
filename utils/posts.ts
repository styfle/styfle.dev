import matter from 'gray-matter';
import { resolve, join } from 'path';
import fs from 'fs';
const { readFile, readdir } = fs.promises;

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  ogImage?: { src: string; width: number; height: number };
  content: string;
}

export async function getPosts(): Promise<BlogPost[]> {
  const postsDirectory = resolve(process.cwd(), '_posts');
  const postFiles = await readdir(postsDirectory);

  const posts = await Promise.all(
    postFiles.map(async fileName => {
      const fullPath = join(postsDirectory, fileName);
      const markdown = await readFile(fullPath, 'utf8');
      const {
        data: { slug, title, date, ogImage },
        content,
      } = matter(markdown);

      if (typeof slug !== 'string') {
        throw new Error(
          `Expected string slug but found: ${slug}. Did you forget add it to ${fileName}?`,
        );
      }
      if (typeof title !== 'string') {
        throw new Error(
          `Expected string title but found: ${title}. Did you forget add it to ${fileName}?`,
        );
      }
      if (typeof date !== 'string') {
        throw new Error(
          `Expected string date but found: ${date}. Did you forget add it to ${fileName}?`,
        );
      }
      if (ogImage && typeof ogImage !== 'object') {
        throw new Error(`Expected ogImage to be object but found: ${typeof ogImage}`);
      }

      return { slug, title, date, ogImage, content };
    }),
  );

  return posts;
}
