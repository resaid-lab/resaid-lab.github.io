---
title: "LLM Reasoning and Planning"
description: >
  Methods that make language-model reasoning more deliberate, structured, and
  inspectable, separating high-level planning from low-level action generation.
status: "active"
people: ["Sumon Biswas", "Zhihao Dou", "Towsif Raiyan"]
categories: ["LLMs"]
publications:
  - "plan-then-action-icml26"
featured: true
date: 2026-07-13
---

## Overview

Large language models often solve complex tasks through long token-level reasoning,
but this process can be locally coherent while still lacking a stable global plan.
This project studies training and evaluation methods that encourage models to commit
to compact, inspectable plans before generating detailed reasoning traces.

## Current Focus

- High-level planning guidance for mathematical and symbolic reasoning
- Reinforcement learning objectives that separate planning quality from final-answer quality
- More inspectable reasoning traces for responsible use of advanced LLMs

The first paper in this project is the ICML 2026 work on Plan Then Action.
