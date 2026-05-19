import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles, Copy, SplitSquareVertical } from "lucide-react";

import { ModelSettings } from "./ModelSettings";
import { ResponsePanel } from "./ResponsePanel";

const fakeGenerate = (prompt: string, model: string) => {
  return `Model: ${model}\n\n${prompt}\n\nThis is a simulated response generated locally inside Promptry.`;
};

export const Playground = ({ initialPrompt }: { initialPrompt: string }) => {
  const [compareMode, setCompareMode] = useState(false);

  const [prompt, setPrompt] = useState(initialPrompt);

  const [configA, setConfigA] = useState({
    model: "gpt-4.1",
    temperature: 0.7,
    maxTokens: 1024,
    topP: 1,
    apiKey: "",
  });

  const [configB, setConfigB] = useState({
    model: "claude-sonnet",
    temperature: 0.8,
    maxTokens: 1024,
    topP: 1,
    apiKey: "",
  });

  const responseA = useMemo(() => {
    return fakeGenerate(prompt, configA.model);
  }, [prompt, configA]);

  const responseB = useMemo(() => {
    return fakeGenerate(prompt, configB.model);
  }, [prompt, configB]);

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Prompt Playground
            </h3>

            <p className="mt-2 text-sm text-neutral-400">
              Edit the template, compare models, and experiment.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() => setCompareMode(!compareMode)}
            className="border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            <SplitSquareVertical className="mr-2 h-4 w-4" />
            {compareMode ? "Single Mode" : "Compare Mode"}
          </Button>
        </div>

        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[260px] rounded-2xl border-white/10 bg-black/30 text-neutral-100"
        />

        <div className="mt-5 flex flex-wrap gap-3">
          <Button className="bg-white text-black hover:bg-neutral-200">
            <Sparkles className="mr-2 h-4 w-4" />
            Generate
          </Button>

          <Button
            variant="outline"
            className="border-white/10 bg-white/5 text-white hover:bg-white/10"
            onClick={() => navigator.clipboard.writeText(prompt)}
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy Prompt
          </Button>
        </div>
      </div>

      {!compareMode ? (
        <div className="grid gap-6 lg:grid-cols-[380px_1fr]">
          <ModelSettings config={configA} onChange={setConfigA} />

          <ResponsePanel title={configA.model} response={responseA} />
        </div>
      ) : (
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="space-y-6">
            <ModelSettings config={configA} onChange={setConfigA} />

            <ResponsePanel title={configA.model} response={responseA} />
          </div>

          <div className="space-y-6">
            <ModelSettings config={configB} onChange={setConfigB} />

            <ResponsePanel title={configB.model} response={responseB} />
          </div>
        </div>
      )}
    </div>
  );
};
