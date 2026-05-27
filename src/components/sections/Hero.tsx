import { Header } from "@/components";
import { ChatBoxForm, LinkIcon } from "@/components/ui/custom";
import { motion } from "framer-motion";
import { Briefcase, FileDown, Notebook } from "lucide-react";
import { HeroBackground } from "./HeroBackground";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden px-4 pb-16 sm:px-6 lg:px-8"
    >
      <Header />
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.02 }}
            className="mb-7 sm:mb-8"
          >
            <img
              src="/profile_image.png"
              alt="Foroozan image"
              className="h-20 w-20 rounded-[1.6rem] object-cover sm:h-28 sm:w-28 sm:rounded-[2rem]"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-6xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:whitespace-nowrap lg:text-5xl"
          >
            Hi! I&apos;m Foroozan, a Digital Product Builder.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 max-w-2xl text-base leading-7 text-neutral-300 sm:mt-6 sm:text-lg"
          >
            Think in systems. Build for people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-8 w-full rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:mt-12 sm:rounded-[2rem] sm:p-6"
          >
            <ChatBoxForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 grid w-full grid-cols-3 gap-2 sm:mt-6 sm:max-w-2xl sm:gap-3"
          >
            <LinkIcon
              href="/Resume_ForoozanIraji.pdf"
              download
              icon={<FileDown className="h-4 w-4" />}
            >
              Resume
            </LinkIcon>

            <LinkIcon href="#projects" icon={<Briefcase className="h-4 w-4" />}>
              Projects
            </LinkIcon>

            <LinkIcon href="#blog" icon={<Notebook className="h-4 w-4" />}>
              Notes
            </LinkIcon>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
