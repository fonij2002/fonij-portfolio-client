import {
  ArticleCard,
  ContainerResponsive,
  ContainerWithBorder,
} from "@/components/ui/custom";
import { blogPostMetas, categories } from "@/lib/blog";
import type { BlogCategory } from "@/types/blog";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export const BlogCardList = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("all");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") return blogPostMetas;
    return blogPostMetas.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="blog">
      <ContainerResponsive>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The Builder Notes
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium capitalize transition ${
                  isActive
                    ? "bg-white text-neutral-950"
                    : "border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <ArticleCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </ContainerResponsive>
    </section>
  );
};
