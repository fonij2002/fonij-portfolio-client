export type BlogCategory = "all" | "build" | "grow" | "think";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "all">;
  publishedAt: string;
  readTime: string;
  coverImage?: string;
  coverImageAlt?: string;
};

export type BlogSection = {
  id: string;
  title: string;
  content: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
  sections: BlogSection[];
};
