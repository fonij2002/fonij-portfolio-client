import { quickAnswers } from "@/data/chat_answers";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import React, { useState } from "react";

function getAnswer(message: string): string {
  const normalized = message.toLowerCase().trim();

  if (!normalized) {
    return "Ask me about my skills, background, projects, or how I work.";
  }

  if (
    normalized.includes("education") ||
    normalized.includes("university") ||
    normalized.includes("degree")
  ) {
    return quickAnswers.education;
  }

  if (
    normalized.includes("skill") ||
    normalized.includes("tech stack") ||
    normalized.includes("frontend")
  ) {
    return quickAnswers.skills;
  }

  if (
    normalized.includes("background") ||
    normalized.includes("who are you") ||
    normalized.includes("about you")
  ) {
    return quickAnswers.background;
  }

  if (
    normalized.includes("project") ||
    normalized.includes("work") ||
    normalized.includes("portfolio")
  ) {
    return quickAnswers.projects;
  }

  if (
    normalized.includes("blog") ||
    normalized.includes("write") ||
    normalized.includes("notes")
  ) {
    return quickAnswers.blog;
  }

  if (
    normalized.includes("contact") ||
    normalized.includes("email") ||
    normalized.includes("reach")
  ) {
    return quickAnswers.contact;
  }

  return quickAnswers.others;
}

export const ChatBoxForm = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuestion = question.trim();
    if (!trimmedQuestion) {
      setAnswer("");
      setShowAnswer(false);
      return;
    }

    setAnswer(getAnswer(trimmedQuestion));
    setShowAnswer(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" />
          <input
            type="text"
            value={question}
            onChange={(e) => {
              setQuestion(e.target.value);
              setShowAnswer(false);
            }}
            placeholder="Ask about my skills, background, ..."
            className="h-14 w-full rounded-2xl border border-white/10 bg-neutral-900/80 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-fuchsia-400/30"
          />
        </div>

        <button
          type="submit"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-semibold text-neutral-950 transition hover:scale-[1.01]"
        >
          Ask Me
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      <AnimatePresence>
        {showAnswer && (
          <motion.div
            key={answer}
            initial={{ opacity: 0, y: 12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 8, height: 0 }}
            transition={{ duration: 0.35 }}
            className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/70 p-5 text-left"
          >
            <div className="mb-3 flex items-center gap-2 text-sm text-neutral-400">
              <BookOpen className="h-4 w-4" />
              My Answer
            </div>
            <p className="leading-7 text-neutral-200">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
