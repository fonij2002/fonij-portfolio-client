import { scopeOptions } from "@/data/collaboration_data";
import type { FormState } from "@/types/collaboration";
import { InputSelect } from "@/components/ui/custom";
import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";

const initialForm: FormState = {
  name: "",
  email: "",
  urgency: "",
  scope: [],
  projectSummary: "",
};

const urgencyOptions = [
  {
    label: "As soon as possible",
    value: "urgent",
  },
  {
    label: "Within a few weeks",
    value: "soon",
  },
  {
    label: "No strict deadline",
    value: "flexible",
  },
  {
    label: "Planning ahead",
    value: "planning",
  },
];

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
      className={`min-h-32.5 w-full rounded-2xl border border-white/10 bg-neutral-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-fuchsia-400/30 ${props.className ?? ""}`}
    />
  );
}
type FormErrors = Partial<Record<keyof FormState, string>>;
export const BuildWithMePage = () => {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.urgency) {
      nextErrors.urgency = "Please select project urgency.";
    }

    if (form.scope.length === 0) {
      nextErrors.scope = "Please select at least one project type.";
    }

    if (!form.projectSummary.trim()) {
      nextErrors.projectSummary = "Please write a short project summary.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSendRequest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    window.location.href = mailtoHref;
  };

  const mailtoHref = useMemo(() => {
    const lines = [
      `Name: ${form.name || "-"}`,
      `Email: ${form.email || "-"}`,
      `Project Urgency: ${form.urgency}`,
      `Scope: ${form.scope.join(", ") || "-"}`,
      `Project summary: ${form.projectSummary || "-"}`,
    ];

    const subject = encodeURIComponent(
      `Build with me inquiry from ${form.name ? ` - ${form.name}` : ""}`,
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

  const toggleArrayValue = (key: "scope", value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((item) => item !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-160 overflow-hidden">
        <div className="absolute left-[6%] top-8 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[130px]" />
        <div className="absolute right-[8%] top-12 h-96 w-96 rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute left-1/2 top-24 h-112 w-md -translate-x-1/2 rounded-full bg-violet-500/10 blur-[160px]" />
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
                    Tell me a little about your project, and I’ll reach out soon
                    with the best next step.
                  </p>
                </div>
              </div>

              <form className="space-y-8" onSubmit={handleSendRequest}>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <FieldLabel>Your name</FieldLabel>
                    <Input
                      value={form.name}
                      onChange={(e) => {
                        updateField("name", e.target.value);
                        setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Jane Doe"
                      className={errors.name ? "border-red-400/70" : ""}
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <FieldLabel>Your email</FieldLabel>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        updateField("email", e.target.value);
                        setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="jane@email.com"
                      className={errors.email ? "border-red-400/70" : ""}
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <FieldLabel>What do you want to build?</FieldLabel>

                    <div className="flex flex-wrap gap-2">
                      {scopeOptions.map((option) => {
                        const active = form.scope.includes(option);

                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              toggleArrayValue("scope", option);
                              setErrors((prev) => ({
                                ...prev,
                                scope: undefined,
                              }));
                            }}
                            className={`rounded-full border px-4 py-2 text-sm transition ${
                              active
                                ? "border-white/80 bg-white/10 text-white"
                                : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>

                    {errors.scope && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.scope}
                      </p>
                    )}
                  </div>
                  <InputSelect
                    id="project-urgency"
                    label="How urgent is this project?"
                    placeholder="Select project urgency"
                    value={form.urgency}
                    onChange={(value) => {
                      updateField("urgency", value);
                      setErrors((prev) => ({ ...prev, urgency: undefined }));
                    }}
                    options={urgencyOptions}
                    error={errors.urgency}
                  />
                </div>

                <div>
                  <FieldLabel>Project summary</FieldLabel>
                  <Textarea
                    value={form.projectSummary}
                    onChange={(e) => {
                      updateField("projectSummary", e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        projectSummary: undefined,
                      }));
                    }}
                    placeholder="Share the idea behind your project, who you want to help, and what you hope we can build together."
                    className={errors.projectSummary ? "border-red-400/70" : ""}
                  />
                  {errors.projectSummary && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.projectSummary}
                    </p>
                  )}
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    type="submit"
                    className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:scale-[1.01] sm:w-auto sm:min-w-40"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </motion.section>
          </section>
        </div>
      </main>
    </div>
  );
};
