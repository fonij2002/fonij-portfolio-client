import { Header } from "@/components";
import { ChatBoxForm, LinkIcon } from "@/components/ui/custom";
import { motion } from "framer-motion";
import { Briefcase, FileDown, Notebook } from "lucide-react";
import { HeroBackground } from "./HeroBackground";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden px-6 pb-16 lg:px-8"
    >
      <Header />
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.02 }}
            className="mb-8"
          >
            <div className="relative mx-auto">
              <img
                src="/profile_image.png"
                alt="Foroozan image"
                className="h-24 w-24 rounded-[2rem] object-cover sm:h-28 sm:w-28"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Hi! I&apos;m Foroozan.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg"
          >
            Think in systems. Build for people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-12 w-full rounded-[2rem] border border-white/10 bg-white/6 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6"
          >
            <ChatBoxForm />
          </motion.div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <LinkIcon
              href="/Resume_ForoozanIraji.pdf"
              download
              icon={
                <FileDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
              }
            >
              My Resume
            </LinkIcon>

            <LinkIcon href="#projects" icon={<Briefcase className="h-4 w-4" />}>
              My Projects
            </LinkIcon>

            <LinkIcon href="#blog" icon={<Notebook className="h-4 w-4" />}>
              My Notes
            </LinkIcon>
          </div>
        </div>
      </div>
    </section>
  );
};
