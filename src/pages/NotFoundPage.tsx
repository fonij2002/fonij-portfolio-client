import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-neutral-950 px-6 py-10 text-neutral-100 lg:px-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[10%] h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute right-[10%] top-[8%] h-80 w-80 rounded-full bg-cyan-400/15 blur-[130px]" />
        <div className="absolute bottom-16 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-6 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8 lg:p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative mx-auto mt-8 flex h-28 w-28 items-center justify-center"
          >
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/6 shadow-xl shadow-black/20">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mt-8 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Looks like you got lost in my mind :)
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 pt-6"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-neutral-300 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to the main page
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
