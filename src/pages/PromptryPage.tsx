import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { roles } from "@/data/promptry_data";

import { SelectionCard } from "@/components/promptry/SelectionCard";
import { StepHeader } from "@/components/promptry/StepHeader";
import { Playground } from "@/components/promptry/Playground";

import { ArrowLeft, Sparkles, Wand2, BrainCircuit } from "lucide-react";

import { Button } from "@/components/ui/button";

export const PromptryPage = () => {
  const [roleId, setRoleId] = useState<string | null>(null);
  const [expertiseId, setExpertiseId] = useState<string | null>(null);
  const [actionId, setActionId] = useState<string | null>(null);

  const selectedRole = useMemo(() => {
    return roles.find((r) => r.id === roleId);
  }, [roleId]);

  const selectedExpertise = useMemo(() => {
    return selectedRole?.expertises.find((e) => e.id === expertiseId);
  }, [selectedRole, expertiseId]);

  const selectedAction = useMemo(() => {
    return selectedExpertise?.actions.find((a) => a.id === actionId);
  }, [selectedExpertise, actionId]);

  return (
    <section className="relative isolate overflow-hidden bg-[#050505] px-6 py-10 text-white lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300 backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            AI Prompt Operating System
          </div>

          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Promptry
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
            Profession-based AI prompting platform for developers, marketers,
            designers, lawyers, doctors and modern teams.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <BrainCircuit className="h-5 w-5 text-white" />

                <div>
                  <p className="text-sm text-neutral-400">Compare Models</p>

                  <p className="text-white">GPT • Claude • Gemini</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <Wand2 className="h-5 w-5 text-white" />

                <div>
                  <p className="text-sm text-neutral-400">Prompt Templates</p>

                  <p className="text-white">Structured by profession</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedRole && (
            <motion.div
              key="roles"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <StepHeader
                step="STEP 01"
                title="Choose your profession"
                description="Select the role that best matches your workflow and expertise."
              />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {roles.map((role) => (
                  <SelectionCard
                    key={role.id}
                    title={role.title}
                    description={role.description}
                    icon={role.icon}
                    onClick={() => setRoleId(role.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {selectedRole && !selectedExpertise && (
            <motion.div
              key="expertises"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Button
                variant="ghost"
                onClick={() => setRoleId(null)}
                className="mb-8 text-neutral-300 hover:bg-white/5 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <StepHeader
                step="STEP 02"
                title={`Choose your ${selectedRole.title} expertise`}
                description="Pick the specialization you want Promptry to optimize for."
              />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {selectedRole.expertises.map((expertise) => (
                  <SelectionCard
                    key={expertise.id}
                    title={expertise.title}
                    description={expertise.description}
                    icon={expertise.icon}
                    onClick={() => setExpertiseId(expertise.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {selectedExpertise && !selectedAction && (
            <motion.div
              key="actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Button
                variant="ghost"
                onClick={() => setExpertiseId(null)}
                className="mb-8 text-neutral-300 hover:bg-white/5 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <StepHeader
                step="STEP 03"
                title="Choose your workflow"
                description="Select the exact action you want AI assistance for."
              />

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {selectedExpertise.actions.map((action) => (
                  <SelectionCard
                    key={action.id}
                    title={action.title}
                    description={action.description}
                    icon={selectedExpertise.icon}
                    onClick={() => setActionId(action.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {selectedAction && (
            <motion.div
              key="playground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Button
                variant="ghost"
                onClick={() => setActionId(null)}
                className="mb-8 text-neutral-300 hover:bg-white/5 hover:text-white"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              <StepHeader
                step="STEP 04"
                title={selectedAction.title}
                description="Customize the template and compare model outputs side by side."
              />

              <Playground initialPrompt={selectedAction.promptTemplate} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
