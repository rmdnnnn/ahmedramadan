import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface PostFrontmatter {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  [key: string]: any;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

export function getPostsByType(type: "research" | "writeups"): Post[] {
  const directory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);
  const posts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(directory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: file.replace(/\.mdx$/, ""),
        frontmatter: {
          ...data,
          date: data.date || new Date().toISOString(),
        } as PostFrontmatter,
        content,
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      return dateB - dateA;
    });

  return posts;
}

export function getPostBySlug(
  type: "research" | "writeups",
  slug: string
): Post | null {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: {
      ...data,
      date: data.date || new Date().toISOString(),
    } as PostFrontmatter,
    content,
  };
}

export function getAllPostSlugs(type: "research" | "writeups"): string[] {
  const directory = path.join(contentDirectory, type);
  
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

