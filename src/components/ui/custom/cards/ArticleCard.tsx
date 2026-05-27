import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/types/blog";

interface ArticleCardProps {
  post: BlogPost;
  index: number;
}

export const ArticleCard = ({ post, index }: ArticleCardProps) => {
  return (
    <motion.article
      key={post.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/7"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium capitalize text-neutral-300">
          {post.category}
        </span>
        <span className="text-xs text-neutral-500">{post.readTime}</span>
      </div>

      <h3 className="mt-5 text-xl font-semibold leading-snug text-white transition group-hover:text-neutral-200">
        {post.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-neutral-400">{post.excerpt}</p>

      <div className="mt-6 flex items-center justify-between gap-4">
        <span className="text-sm text-neutral-500">{post.date}</span>
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:gap-3"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
};
