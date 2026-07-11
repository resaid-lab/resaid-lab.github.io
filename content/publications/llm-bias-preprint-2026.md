---
title: "Bias Testing and Mitigation in Black Box LLMs using Metamorphic Relations"
authors: "Sina Salimian, Gias Uddin, Sumon Biswas, Henry Leung"
venue: "ACM Transactions on Software Engineering and Methodology"
venue_short: "Preprint"
year: 2026
date: 2026-01-01
pdf: ""
doi: ""
arxiv: "https://arxiv.org/abs/2512.00556"
code: ""
data: ""
artifact: ""
slides: ""
video: ""
featured: false
abstract: >
  The widespread deployment of Large Language Models (LLMs) has intensified concerns about subtle social biases embedded
  in their outputs. Existing guardrails often fail when faced with indirect or contextually complex bias-inducing
  prompts. To address these limitations, we propose a unified framework for both systematic bias evaluation and targeted
  mitigation. Our approach introduces six novel Metamorphic Relations (MRs) that, based on metamorphic testing
  principles, transform direct bias-inducing inputs into semantically equivalent yet adversarially challenging variants.
  These transformations enable an automated method for exposing hidden model biases: when an LLM responds inconsistently
  or unfairly across MR-generated variants, the underlying bias becomes detectable. We further show that the same MRs
  can be used to generate diverse bias-inducing samples for fine-tuning, directly linking the testing process to
  mitigation. Using six state-of-the-art LLMs — spanning open-source and proprietary models — and a representative
  subset of 385 questions from the 8,978-item BiasAsker benchmark covering seven protected groups, our MRs reveal up
  to 14% more hidden biases compared to existing tools. Moreover, fine-tuning with both original and MR-mutated samples
  significantly enhances bias resiliency, increasing safe response rates from 54.7% to over 88.9% across models. These
  results highlight metamorphic relations as a practical mechanism for improving fairness in conversational AI.
bibtex: |
  @article{salimian2026bias,
    title={Bias Testing and Mitigation in Black Box LLMs using Metamorphic Relations},
    author={Salimian, Sina and Uddin, Gias and Biswas, Sumon and Leung, Henry},
    journal={arXiv preprint arXiv:2512.00556},
    year={2026}
  }
---
