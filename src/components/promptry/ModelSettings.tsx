import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type { ModelConfig } from "@/types/promprty";

interface Props {
  config: ModelConfig;
  onChange: (config: ModelConfig) => void;
}

export const ModelSettings = ({ config, onChange }: Props) => {
  return (
    <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
      <div>
        <Label className="mb-3 block text-neutral-300">Model</Label>

        <Select
          value={config.model}
          onValueChange={(value) => onChange({ ...config, model: value })}
        >
          <SelectTrigger className="border-white/10 bg-black/20 text-white">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="gpt-4.1">GPT-4.1</SelectItem>
            <SelectItem value="gpt-4o">GPT-4o</SelectItem>
            <SelectItem value="claude-sonnet">Claude Sonnet</SelectItem>
            <SelectItem value="gemini-2.5">Gemini 2.5</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label className="mb-3 block text-neutral-300">API Key</Label>

        <Input
          type="password"
          value={config.apiKey}
          onChange={(e) => onChange({ ...config, apiKey: e.target.value })}
          placeholder="sk-..."
          className="border-white/10 bg-black/20 text-white"
        />
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <Label className="text-neutral-300">Temperature</Label>

          <span className="text-sm text-neutral-400">{config.temperature}</span>
        </div>

        <Slider
          value={[config.temperature]}
          min={0}
          max={1}
          step={0.1}
          onValueChange={(value) =>
            onChange({ ...config, temperature: value[0] })
          }
        />
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <Label className="text-neutral-300">Max Tokens</Label>

          <span className="text-sm text-neutral-400">{config.maxTokens}</span>
        </div>

        <Slider
          value={[config.maxTokens]}
          min={256}
          max={4096}
          step={256}
          onValueChange={(value) =>
            onChange({ ...config, maxTokens: value[0] })
          }
        />
      </div>
    </div>
  );
};
