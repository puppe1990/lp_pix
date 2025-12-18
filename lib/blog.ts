import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  date: string;
  excerpt?: string;
  seoDescription?: string;
  author?: string;
  tags?: string[];
  image?: string;
  content: string;
  readingTime?: number;
}

export type BlogPostSummary = Omit<BlogPost, 'content'>;

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter(
      (file) =>
        (file.endsWith('.mdx') || file.endsWith('.md')) &&
        !file.toLowerCase().startsWith('readme')
    );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const realSlug = slug.replace(/\.(mdx|md)$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    // Try .md extension
    const mdPath = path.join(postsDirectory, `${realSlug}.md`);
    if (!fs.existsSync(mdPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(mdPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: realSlug,
      title: data.title || '',
      seoTitle: data.seoTitle || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      seoDescription: data.seoDescription || '',
      author: data.author || '',
      tags: data.tags || [],
      image: data.image || '',
      content,
      readingTime: calculateReadingTime(content),
    };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || '',
    seoTitle: data.seoTitle || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    seoDescription: data.seoDescription || '',
    author: data.author || '',
    tags: data.tags || [],
    image: data.image || '',
    content,
    readingTime: calculateReadingTime(content),
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getAllPostSummaries(): BlogPostSummary[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return getAllPosts().map(({ content: _content, ...summary }) => summary);
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
