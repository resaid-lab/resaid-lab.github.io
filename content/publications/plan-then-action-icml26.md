---
title: "Plan Then Action: High-Level Planning Guidance Reinforcement Learning for LLM Reasoning"
authors: "Zhihao Dou, Qinjian Zhao, Zhongwei Wan, Dinggen Zhang, Weida Wang, Towsif Raiyan, Benteng Chen, Qingtao Pan, Yang Ouyang, Zhiqiang Gao, Shufei Zhang, Sumon Biswas"
venue: "43rd International Conference on Machine Learning"
venue_short: "ICML"
year: 2026
date: 2026-07-13
pdf: "/uploads/plan-then-action-icml26.pdf"
doi: ""
arxiv: "https://arxiv.org/abs/2510.01833"
code: ""
data: ""
artifact: ""
slides: ""
video: ""
featured: true
abstract: >
  Large language models (LLMs) have demonstrated remarkable reasoning abilities in complex tasks, often relying on
  Chain-of-Thought (CoT) reasoning. However, due to their autoregressive token-level generation, the reasoning process
  is largely constrained to local decision-making and lacks global planning. This limitation frequently results in
  redundant, incoherent, or inaccurate reasoning, which significantly degrades overall performance. Existing approaches,
  such as tree-based algorithms and reinforcement learning (RL), attempt to address this issue but suffer from high
  computational costs and often fail to produce optimal reasoning trajectories. To tackle this challenge, we propose
  Plan-Then-Action Enhanced Reasoning with Group Relative Policy Optimization (PTA-GRPO), a two-stage framework designed
  to improve both high-level planning and fine-grained CoT reasoning. In the first stage, we leverage advanced LLMs to
  distill CoT into compact high-level guidance, which is then used for supervised fine-tuning (SFT). In the second
  stage, we introduce a guidance-aware RL method that jointly optimizes the final output and the quality of high-level
  guidance, thereby enhancing reasoning effectiveness. We conduct extensive experiments on multiple mathematical
  reasoning benchmarks, including MATH, AIME2024, AIME2025, and AMC, across diverse base models such as
  Qwen2.5-7B-Instruct, Qwen3-8B, Qwen3-14B, and LLaMA3.2-3B. Experimental results demonstrate that PTA-GRPO
  consistently achieves stable and significant improvements across different models and tasks, validating its
  effectiveness and generalization.
bibtex: |
  @inproceedings{dou2026plan,
    title={Plan Then Action: High-Level Planning Guidance Reinforcement Learning for LLM Reasoning},
    author={Dou, Zhihao and Zhao, Qinjian and Wan, Zhongwei and Zhang, Dinggen and Wang, Weida and Raiyan, Towsif
            and Chen, Benteng and Pan, Qingtao and Ouyang, Yang and Gao, Zhiqiang and Zhang, Shufei and Biswas, Sumon},
    booktitle={Proceedings of the 43rd International Conference on Machine Learning},
    year={2026}
  }
---
