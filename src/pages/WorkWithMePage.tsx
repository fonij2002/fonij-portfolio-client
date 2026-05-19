import {
  collaborationOptions,
  platformOptions,
  scopeOptions,
} from "@/data/collaboration_data";
import type {
  BudgetRange,
  FormState,
  TimelineRange,
} from "@/types/collaboration";
import { motion } from "framer-motion";
import { Briefcase, Send } from "lucide-react";
import React, { useMemo, useState } from "react";

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  collaborationType: "freelance",
  projectTitle: "",
  projectSummary: "",
  audience: "",
  currentStage: "",
  scope: [],
  platforms: [],
  timeline: "flexible",
  extraNotes: "",
};

function FieldLabel({
  children,
  optional = false,
}: {
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label className="mb-3 block text-sm font-medium text-neutral-200">
      {children}
      {optional && <span className="ml-2 text-neutral-500">Optional</span>}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`h-12 w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-fuchsia-400/30 ${props.className ?? ""}`}
    />
  );
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`min-h-[130px] w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-fuchsia-400/30 ${props.className ?? ""}`}
    />
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={`h-12 w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 text-sm text-white outline-none transition focus:border-fuchsia-400/30 ${props.className ?? ""}`}
    />
  );
}

export const WorkWithMePage = () => {
  const [form, setForm] = useState<FormState>(initialForm);

  const mailtoHref = useMemo(() => {
    const lines = [
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Company: ${form.company || "-"}`,
      `Role: ${form.role || "-"}`,
      `Collaboration type: ${form.collaborationType}`,
      `Project title: ${form.projectTitle || "-"}`,
      `Project summary: ${form.projectSummary || "-"}`,
      `Audience: ${form.audience || "-"}`,
      `Current stage: ${form.currentStage || "-"}`,
      `Scope: ${form.scope.join(", ") || "-"}`,
      `Platforms: ${form.platforms.join(", ") || "-"}`,
      `Timeline: ${form.timeline}`,
      `Extra notes: ${form.extraNotes || "-"}`,
    ];

    const subject = encodeURIComponent(
      `Work with me inquiry${form.projectTitle ? ` - ${form.projectTitle}` : ""}`,
    );
    const body = encodeURIComponent(lines.join("\n"));

    return `mailto:fonij2002@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleArrayValue = (key: "scope" | "platforms", value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[40rem] overflow-hidden">
        <div className="absolute left-[6%] top-8 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[130px]" />
        <div className="absolute right-[8%] top-12 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute left-1/2 top-24 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[160px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-neutral-950" />
      </div>

      <main className="relative z-10 px-6 pb-20 pt-10 lg:px-8 lg:pt-14">
        <div className="mx-auto max-w-7xl">
          <section className="mt-10 grid gap-8">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-white/10 bg-white/4 p-6 backdrop-blur-xl sm:p-8"
            >
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Let’s build something thoughtful, useful, and
                    well-structured.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-400 sm:text-base">
                    Fill this out once, and I can quickly understand your
                    requirements, constraints, and the best next step.
                  </p>
                </div>
              </div>

              <form className="space-y-8">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <FieldLabel>Your name</FieldLabel>
                    <Input
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <FieldLabel>Your email</FieldLabel>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <FieldLabel>How would you like to work together?</FieldLabel>
                  <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                    {collaborationOptions.map((option) => {
                      const active = form.collaborationType === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() =>
                            updateField("collaborationType", option.value)
                          }
                          className={`rounded-[1.5rem] border p-4 text-left transition ${
                            active
                              ? "border-white/20 bg-white/10"
                              : "border-white/10 bg-white/3 hover:bg-white/6"
                          }`}
                        >
                          <p className="text-sm font-semibold text-white">
                            {option.label}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-neutral-400">
                            {option.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-5">
                  <div>
                    <FieldLabel>Project summary</FieldLabel>
                    <Textarea
                      value={form.projectSummary}
                      onChange={(e) =>
                        updateField("projectSummary", e.target.value)
                      }
                      placeholder="What are you building, why does it matter, and what do you want this project to achieve?"
                    />
                  </div>
                  <div>
                    <FieldLabel>Who is this for?</FieldLabel>
                    <Textarea
                      value={form.audience}
                      onChange={(e) => updateField("audience", e.target.value)}
                      placeholder="Tell me about your users, customers, or internal team."
                      className="min-h-[110px]"
                    />
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <FieldLabel optional>
                      What do you need help with?
                    </FieldLabel>
                    <div className="flex flex-wrap gap-2">
                      {scopeOptions.map((option) => {
                        const active = form.scope.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleArrayValue("scope", option)}
                            className={`rounded-full border px-4 py-2 text-sm transition ${
                              active
                                ? "border-white/20 bg-white/10 text-white"
                                : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <FieldLabel optional>Timeline</FieldLabel>
                    <Select
                      value={form.timeline}
                      onChange={(e) =>
                        updateField("timeline", e.target.value as TimelineRange)
                      }
                    >
                      <option value="asap">ASAP</option>
                      <option value="2-4-weeks">2 - 4 weeks</option>
                      <option value="1-2-months">1 - 2 months</option>
                      <option value="3-months-plus">3+ months</option>
                      <option value="flexible">Flexible</option>
                    </Select>
                  </div>
                </div>

                <div>
                  <FieldLabel optional>Anything else I should know?</FieldLabel>
                  <Textarea
                    value={form.extraNotes}
                    onChange={(e) => updateField("extraNotes", e.target.value)}
                    placeholder="Anything about context, urgency, technical debt, business goals, or collaboration style."
                  />
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/3 p-5">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Ready to send your request?
                      </p>
                      <p className="mt-2 text-sm leading-7 text-neutral-400">
                        This button opens your email app with the details filled
                        in, so your request stays structured and easy for me to
                        review.
                      </p>
                    </div>

                    <a
                      href={mailtoHref}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.01]"
                    >
                      Send request
                      <Send className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </form>
            </motion.section>
          </section>
        </div>
      </main>
    </div>
  );
};
