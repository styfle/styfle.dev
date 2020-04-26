import matter from 'gray-matter';
import { resolve, join } from 'path';
import fs from 'fs';
const { readFile, readdir } = fs.promises;

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    content: string;
}

export async function getPosts(): Promise<BlogPost[]> {
  const postsDirectory = resolve(process.cwd(), '_posts');
  const postFiles = await readdir(postsDirectory);

  const posts = await Promise.all(postFiles.map(async fileName => {
    const fullPath = join(postsDirectory, fileName);
    const markdown = await readFile(fullPath, 'utf8');
    const {
      data: { slug, title, date },
      content,
    } = matter(markdown);

    if (typeof slug !== 'string') {
      throw new Error(`Expected string slug but found: ${slug}. Did you forget add it to ${fileName}?`);
    }
    if (typeof title !== 'string') {
      throw new Error(`Expected string title but found: ${title}. Did you forget add it to ${fileName}?`);
    }
    if (typeof date !== 'string') {
      throw new Error(`Expected string date but found: ${date}. Did you forget add it to ${fileName}?`);
    }
    
    return { slug, title, date, content };
  }));

  return posts;
}