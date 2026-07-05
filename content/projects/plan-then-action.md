---
title: "LLM Reasoning and Planning"
description: "Methods that make language-model reasoning more deliberate, structured, and inspectable, separating high-level planning from low-level action generation."
status: "active"
image: "/images/projects/plan-then-action.png"
image_alt: "Overview of the two-stage Plan-Then-Action (PTA-GRPO) framework: high-level guidance distillation followed by guidance-aware reinforcement learning"
github: ""
paper: "https://arxiv.org/abs/2510.01833"
demo: ""
artifact: ""
people:
  - "Sumon Biswas"
  - "Zhihao Dou"
  - "Qinjian Zhao"
  - "Zhongwei Wan"
  - "Dinggen Zhang"
  - "Weida Wang"
  - "Towsif Raiyan"
  - "Benteng Chen"
  - "Qingtao Pan"
  - "Yang Ouyang"
  - "Zhiqiang Gao"
  - "Shufei Zhang"
categories: ["LLMs"]
tags: []
publications:
  - "plan-then-action-icml26"
featured: true
date: 2026-07-13
---

## Overview

Large language models can appear to reason, yet generation is autoregressive: each token is chosen from the immediate context, one step at a time. This local view is powerful, but it explains familiar failure modes, such as reasoning that drifts, contradicts itself, takes redundant detours, or commits early to a path that later proves wrong. We study how to make model reasoning globally coherent, efficient, and trustworthy by helping a model decide where it is going before it takes the next step.

We treat this as a broad research direction rather than a single technique. It spans how to represent a plan or intermediate goal, how to supervise reasoning when only the final answer is labeled, how to allocate computation so hard problems get more deliberation, and how to keep long reasoning chains faithful to the underlying evidence. Tree search and reinforcement learning each address part of this, but often at high computational cost or without producing better reasoning trajectories; we look for methods that scale, generalize across model families, and make the reasoning process itself an object we can shape and verify.

## Current Focus

- Plan-Then-Action Enhanced Reasoning with Group Relative Policy Optimization (PTA-GRPO), our ICML 2026 work: a two-stage recipe that first distills chain-of-thought into compact high-level guidance for supervised fine-tuning, then applies guidance-aware reinforcement learning that jointly optimizes the final output and the quality of the plan that produced it
- Evaluation on mathematical reasoning benchmarks (MATH, AIME2024, AIME2025, AMC) across diverse base models (Qwen2.5-7B-Instruct, Qwen3-8B, Qwen3-14B, LLaMA3.2-3B), where PTA-GRPO yields stable and consistent gains
- Reinforcement learning objectives that separate planning quality from final-answer quality, and guidance that is learned rather than hand-crafted
- Extending planning-guided reasoning beyond math to coding, tool use, and multi-step decision making, with reasoning traces that stay inspectable for responsible use of advanced LLMs
