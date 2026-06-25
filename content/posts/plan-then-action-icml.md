---
title: "Teaching LLMs to Plan Before They Act"
date: 2026-06-10
author: "Sumon Biswas"
description: >
  Reflections on our ICML 2026 paper, Plan Then Action: why token-by-token
  chain-of-thought tends to wander, and what changes when a model is trained
  to commit to a high-level plan before it starts reasoning.
---

If you have ever watched a language model reason its way through a hard math
problem, you have probably seen it wander. The chain of thought starts off
promising, circles back on itself, re-derives something it already knew, and
occasionally talks itself out of a correct intermediate result. The final answer
may still be right, but the path there is long, redundant, and hard to trust.

Our ICML 2026 paper, [Plan Then Action](/publications/plan-then-action-icml26/),
starts from a simple diagnosis of why this happens: autoregressive generation is
local. At every step the model decides only what token comes next, so the
reasoning process is essentially a sequence of small, greedy decisions. There is
no global plan — nothing that commits the model to a strategy before it starts
executing one. Tree search and reinforcement learning can partially compensate,
but they are expensive and still operate over the same token-level process.

## The key idea

The approach we propose, PTA-GRPO (Plan-Then-Action Enhanced Reasoning with
Group Relative Policy Optimization), separates *deciding what to do* from
*doing it* — and trains both. It works in two stages. First, we use stronger
LLMs to distill long chains of thought into compact, high-level guidance — a
short statement of the strategy, not the steps — and fine-tune the model to
produce that guidance before its detailed reasoning. Second, we apply a
guidance-aware reinforcement learning method that jointly optimizes both the
final answer and the quality of the high-level plan itself, so the plan is not
decorative: it is rewarded for actually steering the reasoning well.

The results were consistent in a way that RL-for-reasoning results often are
not. Across MATH, AIME 2024, AIME 2025, and AMC, and across base models from
LLaMA3.2-3B up to Qwen3-14B, planning first yields stable improvements — the
gains do not depend on one lucky model or benchmark.

## Some reflection

What I find satisfying about this result is how familiar it feels from software
engineering. We never tell students to start typing code and hope a design
emerges; design comes first, then implementation. It turns out the same
discipline helps a model: a small amount of explicit structure, stated before
the work begins, prevents a lot of wandering during the work.

There is also a responsible-AI angle that motivates us beyond the benchmark
numbers. A plan is an artifact you can read. When a model commits to its
strategy up front, you get a compact, inspectable statement of intent — which is
far easier to audit than ten thousand tokens of stream-of-consciousness. We
think this kind of structured reasoning is a step toward models whose behavior
can be anticipated, not just observed. That theme — making AI systems
inspectable by construction — runs through much of what the lab does.

This work was a broad collaboration led by [Zhihao Dou](/people/zhihao-dou/),
with our M.S. student [Towsif Raiyan](/people/towsif-raiyan/) among the
contributors. The paper will be presented at ICML 2026 in Seoul this July.

## Pointers

- Paper: [arXiv:2510.01833](https://arxiv.org/abs/2510.01833) · [PDF](/uploads/plan-then-action-icml26.pdf)
- Publication page: [Plan Then Action](/publications/plan-then-action-icml26/)
- Project: [LLM Reasoning and Planning](/projects/plan-then-action/)
