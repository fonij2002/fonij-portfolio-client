import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useMemo, useState } from "react";
import { ContainerTransparent } from "@/components/ui/custom";

import { projectData } from "@/data/project_data";
import type { ProjectCategory } from "@/types/project";
import { projectCategories } from "@/configs";

export const ProjectPreview = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projectData;

    return projectData.filter(
      (projectData) => projectData.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <section id="projects">
      <ContainerTransparent>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Work I’ve been building and shaping.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-10 flex flex-wrap gap-3"
        >
          {projectCategories.map((category) => {
            const isActive = selectedCategory === category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() => setSelectedCategory(category.value)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-neutral-950"
                    : "border border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </motion.div>

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
              >
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-neutral-300">
                  {project.category.replace("-", " ")}
                </div>

                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {project.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                    What I do
                  </p>
                  <p className="mt-3 text-sm leading-7 text-neutral-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.01]"
                    >
                      Live project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-sm font-medium text-neutral-200 transition hover:bg-white/10 hover:text-white"
                    >
                      GitHub code
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8 text-center text-neutral-400">
            No projects found in this category yet.
          </div>
        )}
      </ContainerTransparent>
    </section>
  );
};
