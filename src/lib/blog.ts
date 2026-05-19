import fm from "front-matter";
import type {
  BlogPost,
  BlogPostMeta,
  BlogSection,
  BlogCategory,
} from "@/types/blog";

type FrontMatterAttributes = {
  slug?: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "all">;
  publishedAt: string | Date;
  readTime: string;
  coverImage?: string;
  coverImageAlt?: string;
};

const markdownModules = import.meta.glob("@/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function normalizeToString(value: unknown): string {
  if (value instanceof Date) {
    return value.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return String(value ?? "");
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\u0600-\u06FFa-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function parseSections(markdown: string): BlogSection[] {
  const normalized = markdown.replace(/\r\n/g, "\n").trim();

  const matches = [...normalized.matchAll(/^##\s+(.+)$/gm)];

  if (matches.length === 0) {
    return [
      {
        id: "article",
        title: "Article",
        content: normalized,
      },
    ];
  }

  return matches.map((match, index) => {
    const title = match[1].trim();
    const start = match.index ?? 0;
    const end = matches[index + 1]?.index ?? normalized.length;

    return {
      id: slugify(title),
      title,
      content: normalized.slice(start, end).trim(),
    };
  });
}

function parsePost(filePath: string, rawMarkdown: string): BlogPost {
  const parsed = fm<FrontMatterAttributes>(rawMarkdown);
  const data = parsed.attributes;
  const content = parsed.body.trim();

  const fileName = filePath.split("/").pop()?.replace(".md", "") ?? "";
  const slug = data.slug || fileName;

  const meta: BlogPostMeta = {
    slug,
    title: normalizeToString(data.title),
    excerpt: normalizeToString(data.excerpt),
    category: data.category,
    publishedAt: normalizeToString(data.publishedAt),
    readTime: normalizeToString(data.readTime),
    coverImage: data.coverImage,
    coverImageAlt: data.coverImageAlt,
  };

  return {
    ...meta,
    content,
    sections: parseSections(content),
  };
}

export const blogPosts: BlogPost[] = Object.entries(markdownModules)
  .map(([filePath, rawMarkdown]) => parsePost(filePath, rawMarkdown as string))
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

export const blogPostMetas: BlogPostMeta[] = blogPosts.map(
  ({ content, sections, ...meta }) => meta,
);

export const categories = [
  "all",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
] as const;

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
