---
title: "Trustworthy LLMs and VLMs"
description: >
  Testing and analysis for hidden failure modes in large language and
  vision-language models, from social bias under black-box access to
  reasoning-level backdoors.
status: "active"
people: ["Sumon Biswas", "Towsif Raiyan", "Zhihao Dou", "Sina Salimian", "Gias Uddin", "Henry Leung"]
categories: ["LLMs"]
publications:
  - "reshift-eccv26"
  - "llm-bias-preprint-2026"
featured: true
date: 2026-09-08
---

## Overview

Large language and vision-language models are deployed in settings where biased,
inconsistent, or manipulated behavior can affect users, yet their internals are
often unavailable or hard to inspect. This project develops methods that expose and
characterize such hidden failures, treating trustworthiness as a property that must
be tested for rather than assumed.

## Current Focus

- Metamorphic relations that reveal and help mitigate social bias in black-box LLMs
- Reasoning-level robustness, including backdoor attacks that redirect the
  chain-of-thought of vision-language models
- Evaluation methods that connect systematic testing to targeted mitigation

The project includes work on black-box bias testing and on reasoning-level
robustness of vision-language models.
