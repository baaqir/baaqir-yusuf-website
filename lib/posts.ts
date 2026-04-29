import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingMinutes: number;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "writing");

function readPostFile(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(readPostFile)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const file = `${slug}.md`;
  const filePath = path.join(POSTS_DIR, file);
  if (!fs.existsSync(filePath)) return null;
  return readPostFile(file);
}

export function formatDate(date: string) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
