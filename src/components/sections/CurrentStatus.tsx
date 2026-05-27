import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const CurrentStatus = () => {
  return (
    <section
      id="current-status"
      className="relative px-6 py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Current status
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                What I’m working on right now.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-400">
                A quick snapshot of my current focus, what I’m building, and the
                ideas I’m actively learning and refining.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-fuchsia-500/20 bg-fuchsia-500/10 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-fuchsia-200/80">
                  Building
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  Portfolio + UI system
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-200/90">
                  Designing a modern personal portfolio and growing a reusable
                  component system with flexible, polished UI patterns.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100/80">
                  Learning
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  Business + marketing thinking
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-200/90">
                  Studying how product, positioning, communication, and
                  distribution work together to shape stronger digital
                  experiences.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-violet-500/20 bg-violet-500/10 p-5 sm:col-span-2">
                <p className="text-xs uppercase tracking-[0.18em] text-violet-100/80">
                  Focus
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  Turning learning into systems
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-200/90">
                  My current direction is to turn scattered ideas into usable
                  systems: cleaner code structure, better design consistency,
                  and note-driven content that actually helps people understand
                  what I’m learning.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
