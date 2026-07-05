---
title: "Fairify: Fairness Verification of Neural Networks"
description: >
  SMT-based verification of individual fairness in neural networks, using input
  partitioning and sound neural pruning to produce certificates or counterexamples
  for real-world models.
status: "completed"
image: "/images/projects/fairify.png"
image_alt: "Diagram of neural network pruning applied to one partition of the input domain"
github: "https://github.com/sumonbis/Fairify"
paper: "https://doi.org/10.1109/ICSE48619.2023.00134"
demo: ""
artifact: ""
people: ["Sumon Biswas", "Hridesh Rajan", "Usman Gohar", "Giang Nguyen"]
categories: ["Fairness", "Verification"]
tags: []
publications:
  - "fairify-icse23"
featured: true
date: 2023-05-15
---

## Overview

We built Fairify, an SMT-based approach that verifies individual fairness of deep
neural networks in production. Individual fairness requires that any two individuals
who differ only in protected attributes such as race, sex, or age receive similar
predictions; unlike group metrics, it captures worst-case discrimination. The
property is hard to verify because it must be checked globally over the input
domain and because of the non-linear computation nodes in the network.

We encoded individual fairness as pre- and post-conditions of the network and made
verification tractable in three steps: input partitioning, sound neural pruning,
and heuristic-based neural pruning. The key observation was that many neurons
remain inactive when only a smaller part of the input domain is considered, so
Fairify assigns a copy of the network to each partition and prunes it using
interval arithmetic and layer-wise analysis before invoking the SMT solver.

## Key Results

- Encoded individual fairness as SMT pre- and post-conditions, so each verification
  query returns either a fairness certificate or a concrete counterexample.
- Made global verification tractable by partitioning the input domain and applying
  sound pruning (interval arithmetic, layer-wise analysis) plus activation-heuristic
  pruning to each partition's copy of the network.
- Verified 25 real-world neural networks collected from four different sources,
  showing better effectiveness, scalability, and performance than baseline and
  closely related work.
- Supported relaxed and targeted fairness queries and partial certification, and
  located violations with counterexamples that make fairness repair explainable;
  published at ICSE 2023.
