---
slug: easy-prompt-engineering
title: Easy Prompt Engineering
excerpt: My notes on prompt engineering fundamentals, model settings, prompting techniques, and practical best practices.
category: build
publishedAt: 2026-04-01
readTime: 18 min read
coverImage: /blog/prompt-engineering/cover.png
coverImageAlt: Prompt engineering article cover
---

# Easy Prompt Engineering

These are my notes on how prompting works, how model configuration affects outputs, and which prompting techniques are most useful in practice.

## Basics

- **Prompt**: the input that an LLM uses to predict a specific output.
- What affects prompt quality:
  - model
  - training data
  - model configuration
  - word choice
  - style and tone
  - structure
  - context

- **Prompt engineering** is the iterative process of designing high-quality prompts that guide LLMs toward useful, accurate outputs.
- **LLM**: a prediction engine that generates the next token based on previous tokens and training data.

Tasks that benefit from good prompting:

- summarization
- extraction
- question answering
- classification
- translation
- code generation
- documentation
- reasoning

## LLM Output Configurations

LLMs do not predict one token directly. They predict probabilities for many possible next tokens. Sampling settings help choose the final token.

### Output length

More output tokens allow longer answers, but also increase latency and cost.

### Temperature

Temperature controls randomness.

- lower temperature → more deterministic
- higher temperature → more creative
- temperature `0` → greedy decoding

### Top-K

Top-K limits token selection to the K most likely tokens.

- lower Top-K → more focused
- higher Top-K → more varied
- Top-K `1` → greedy decoding

### Top-P

Top-P selects from the smallest set of tokens whose cumulative probability reaches P.

- lower Top-P → narrower output space
- higher Top-P → broader output space

### Good starting points

- balanced:
  - temperature: `0.2`
  - top-p: `0.95`
  - top-k: `30`

- creative:
  - temperature: `0.9`
  - top-p: `0.99`
  - top-k: `40`

- deterministic:
  - temperature: `0`
  - use for tasks with a single correct answer

## Prompting Techniques

LLMs can follow instructions, but they are not perfect. The clearer the prompt, the more likely you get the output you want.

### General prompting / zero-shot

- simplest form of prompting
- no examples
- only task description and input

![Zero shot prompt example](/blog/prompt-engineering/zero_shot_prompt_example.png)

### One-shot and few-shot

Examples are useful when you want a specific structure or pattern.

- **one-shot**: one example
- **few-shot**: multiple examples
- usually `3 to 5` examples is a good starting point

Include edge cases when needed.

![Few shot prompt example](/blog/prompt-engineering/few_shot_prompting1.png)
![Few shot prompt example](/blog/prompt-engineering/few_shot_prompting2.png)

### System, contextual, and role prompting

- **System prompting** sets the overall task and purpose
- **Contextual prompting** gives task-specific background
- **Role prompting** defines tone, identity, or expertise

Examples:

![System prompt example](/blog/prompt-engineering/system_prompt1.png)
![System prompt example](/blog/prompt-engineering/system_prompt2.png)
![Contextual prompt example](/blog/prompt-engineering/contextual_prompt.png)
![Role prompt example](/blog/prompt-engineering/role_prompt.png)

### Step-back prompting

Step-back prompting asks the model to first think about a broader principle before solving the narrow task.

![Traditional prompt example](/blog/prompt-engineering/traditional_prompt.png)
![Step-back prompt example](/blog/prompt-engineering/stepback_prompt1.png)
![Step-back prompt example](/blog/prompt-engineering/stepback_prompt2.png)

### Chain of Thought (CoT)

CoT prompting improves reasoning by encouraging intermediate reasoning steps.

For CoT, temperature `0` is usually preferred.

![No CoT prompt example](/blog/prompt-engineering/no_cot_prompt.png)
![CoT with zero-shot example](/blog/prompt-engineering/cot_prompt_with_zero_shot.png)
![CoT with single-shot example](/blog/prompt-engineering/cot_prompt_with_single_shot.png)

### Self-consistency

Self-consistency generates multiple reasoning paths and selects the most common final answer.

![Self-consistency prompt example](/blog/prompt-engineering/self_consistency_prompt1.png)
![Self-consistency prompt example](/blog/prompt-engineering/self_consistency_prompt2.png)
![Self-consistency prompt example](/blog/prompt-engineering/self_consistency_prompt3.png)

### Tree of Thoughts (ToT)

Tree of Thoughts extends Chain of Thought by exploring multiple reasoning paths at once.

![Chain of Thought vs Tree of Thoughts](/blog/prompt-engineering/cot_vs_tot.png)

### ReAct

ReAct combines reasoning with external actions such as tool use, retrieval, or API calls.

![ReAct Prompting Execution Result](/blog/prompt-engineering/react_prompt_execution.png)

### Automatic Prompt Engineering (APE)

APE uses models to generate and refine prompts automatically.

### Multimodal prompting

Multimodal prompting uses more than text, such as images, audio, code, or combined input formats.

## Best Practices

1. Provide examples
2. Keep prompts simple and clear
3. Be specific about output format
4. Prefer instructions over negative constraints
5. Control max output length
6. Use variables in prompts

![Variables in a Prompt](/blog/prompt-engineering/variables_in_prompt.png)

7. Try different input formats and writing styles
8. For classification few-shot prompts, mix classes
9. Re-test prompts when models change
10. Use structured output formats carefully

![JSON Schema Example](/blog/prompt-engineering/json_schema_example.png)

11. Document prompt attempts

![Prompt Documentation Template Example](/blog/prompt-engineering/prompt_doc_template.png)

## Conclusion

Prompt engineering is an iterative process.

You improve by:

- testing
- comparing
- documenting
- refining

Whenever you change the model or the sampling settings, test the prompt again.

## Resources

- Google Prompt Engineering — Lee Boonstra — February 2025
