---
title: "Fair-AutoML: Performance-Aware Fairness Repair"
description: "We repaired unfair ML models using AutoML with a fairness-aware optimization function and search space, mitigating bias with little to no loss of accuracy."
status: "completed"
image: "/images/projects/fair-automl.png"
image_alt: "Diagram of Fair-AutoML searching a fairness-aware AutoML space to repair a biased model while preserving accuracy"
github: "https://github.com/giangnm58/Fair-AutoML"
paper: "https://doi.org/10.1145/3611643.3616257"
demo: ""
artifact: ""
people: ["Sumon Biswas", "Giang Nguyen", "Hridesh Rajan"]
categories: ["Fairness", "SE for AI"]
tags: []
publications: ["fair-automl-fse23"]
featured: false
date: 2023-11-15
---

## Overview

Bias mitigation algorithms typically work only in specific situations and often
repair fairness at the cost of large accuracy drops, making them impractical for
critical decision-making software. We treated fairness repair as a
performance-aware optimization problem: fix the bias in a buggy model without
ruining its accuracy.

Fair-AutoML, built on a state-of-the-art AutoML tool, made this concrete through
two changes to standard AutoML: an optimization function that incorporates
fairness objectives alongside accuracy, and a fairness-aware search space over
candidate model configurations. A search-space pruning method further reduced
computational cost and repair time.

## Key Results

- Fair-AutoML repaired 60 of 64 buggy cases, while existing bias mitigation
  techniques repaired at most 44 of 64.
- Evaluated on four fairness problems and 16 different ML models, showing
  significant improvement over the baseline and existing mitigation techniques.
- The fairness-augmented optimization function mitigated bias with little to no
  loss of accuracy, and fairness-aware search-space pruning cut repair time.
- Published at ESEC/FSE 2023 ("Fix Fairness, Don't Ruin Accuracy: Performance
  Aware Fairness Repair using AutoML").
