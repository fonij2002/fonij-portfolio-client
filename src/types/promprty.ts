import type { LucideIcon } from "lucide-react";

export interface PromptAction {
  id: string;
  title: string;
  description: string;
  promptTemplate: string;
}

export interface Expertise {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  actions: PromptAction[];
}

export interface Role {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  expertises: Expertise[];
}

export interface ModelConfig {
  model: string;
  temperature: number;
  maxTokens: number;
  topP: number;
  apiKey: string;
}
