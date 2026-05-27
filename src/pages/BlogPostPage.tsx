import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Clock3,
  Link as LinkIcon,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getBlogPostBySlug } from "@/lib/blog";
import { MarkdownRenderer } from "@/components/sections/MarkdownRenderer";

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const blogPost = slug ? getBlogPostBySlug(slug) : undefined;

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-neutral-950 px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 transition hover:bg-white/10 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/4 p-8">
            <h1 className="text-3xl font-semibold">Post not found</h1>
            <p className="mt-4 text-neutral-400">
              The article you are looking for does not exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const tableOfContents = useMemo(
    () =>
      blogPost.sections.map((section) => ({
        id: section.id,
        title: section.title,
      })),
    [blogPost.sections],
  );

  const activeSection = blogPost.sections[activeSectionIndex];
  const isFirstSection = activeSectionIndex === 0;
  const isLastSection = activeSectionIndex === blogPost.sections.length - 1;

  const goToPreviousSection = () => {
    if (!isFirstSection) setActiveSectionIndex((prev) => prev - 1);
  };

  const goToNextSection = () => {
    if (!isLastSection) setActiveSectionIndex((prev) => prev + 1);
  };

  const jumpToSection = (index: number) => {
    setActiveSectionIndex(index);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[38rem] overflow-hidden">
        <div className="absolute left-[8%] top-12 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute right-[10%] top-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-[130px]" />
        <div className="absolute left-1/2 top-28 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[150px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/20 to-neutral-950" />
      </div>

      <main className="relative z-10">
        <section className="px-6 pb-12 pt-10 lg:px-8 lg:pt-14">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </motion.div>

            <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-14">
              <aside className="hidden lg:block">
                <div className="sticky top-24 rounded-[2rem] border border-white/10 bg-white/4 p-5 backdrop-blur-xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    On this page
                  </div>

                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => {
                      const isActive = index === activeSectionIndex;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => jumpToSection(index)}
                          className={`group flex w-full items-start gap-3 rounded-2xl px-3 py-3 text-left text-sm transition ${
                            isActive
                              ? "bg-white/10 text-white"
                              : "text-neutral-400 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span
                            className={`mt-0.5 text-xs transition ${
                              isActive
                                ? "text-neutral-200"
                                : "text-neutral-600 group-hover:text-neutral-300"
                            }`}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="leading-6">{item.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </aside>

              <article>
                <motion.header
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-[2rem] border border-white/10 bg-white/4 p-6 backdrop-blur-xl sm:p-8 lg:p-10"
                >
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-neutral-300">
                    {blogPost.category}
                  </div>

                  <h1 className="mt-5 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                    {blogPost.title}
                  </h1>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
                    {blogPost.excerpt}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      <CalendarDays className="h-4 w-4" />
                      {blogPost.publishedAt}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      <Clock3 className="h-4 w-4" />
                      {blogPost.readTime}
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
                      <BookOpen className="h-4 w-4" />
                      Tutorial notes
                    </div>
                  </div>

                  {blogPost.coverImage && (
                    <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10">
                      <img
                        src={blogPost.coverImage}
                        alt={blogPost.coverImageAlt ?? blogPost.title}
                        className="h-[320px] w-full object-cover sm:h-105"
                      />
                    </div>
                  )}
                </motion.header>

                <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/3 p-6 backdrop-blur-xl sm:p-8 lg:p-10">
                  <div className="mb-8 rounded-[1.5rem] border border-white/10 bg-white/3 p-5 lg:hidden">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-300">
                      <LinkIcon className="h-3.5 w-3.5" />
                      Sections
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {tableOfContents.map((item, index) => {
                        const isActive = index === activeSectionIndex;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => jumpToSection(index)}
                            className={`rounded-full border px-3 py-2 text-sm transition ${
                              isActive
                                ? "border-white/20 bg-white/10 text-white"
                                : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {item.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-6 flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/10 bg-white/3 p-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                        Reading progress
                      </p>
                      <p className="mt-2 text-sm text-neutral-300">
                        Section{" "}
                        {String(activeSectionIndex + 1).padStart(2, "0")} of{" "}
                        {String(blogPost.sections.length).padStart(2, "0")}
                      </p>
                    </div>

                    <div className="h-2 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-white"
                        initial={false}
                        animate={{
                          width: `${((activeSectionIndex + 1) / blogPost.sections.length) * 100}%`,
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      />
                    </div>
                  </div>

                  <motion.section
                    key={activeSection.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="min-h-105"
                  >
                    <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-neutral-300 prose-p:leading-8 prose-li:text-neutral-300 prose-strong:text-white prose-img:rounded-2xl prose-img:border prose-img:border-white/10">
                      <MarkdownRenderer content={activeSection.content} />
                    </div>
                  </motion.section>

                  <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="button"
                      onClick={goToPreviousSection}
                      disabled={isFirstSection}
                      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition ${
                        isFirstSection
                          ? "cursor-not-allowed border border-white/10 bg-white/3 text-neutral-600"
                          : "border border-white/10 bg-white/5 text-neutral-200 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous section
                    </button>

                    <button
                      type="button"
                      onClick={goToNextSection}
                      disabled={isLastSection}
                      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition ${
                        isLastSection
                          ? "cursor-not-allowed border border-white/10 bg-white/3 text-neutral-600"
                          : "border border-white/10 bg-white text-neutral-950 hover:scale-[1.01]"
                      }`}
                    >
                      Next section
                      <BookOpen className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
