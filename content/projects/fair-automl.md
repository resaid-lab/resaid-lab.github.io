---
title: "Fair-AutoML: Performance-Aware Fairness Repair"
description: >
  An automated machine learning approach for repairing fairness in ML models
  without sacrificing accuracy. Fair-AutoML searches over preprocessing,
  in-processing, and postprocessing interventions to find optimal fairness-accuracy trade-offs.
status: "completed"
hidden: true
build:
  render: never
  list: never
people: ["Sumon Biswas", "Giang Nguyen", "Hridesh Rajan"]
categories: ["ML Fairness", "AI Software Engineering"]
tags: ["fairness repair", "AutoML", "accuracy trade-offs", "mitigation"]
featured: false
date: 2023-12-01
---

## Overview

Existing fairness repair tools often improve fairness at the cost of large accuracy
drops, making them impractical in high-stakes applications. Fair-AutoML addresses
this by treating fairness repair as a multi-objective optimization problem that
jointly optimizes for both fairness and accuracy.

## Approach

Fair-AutoML leverages AutoML search over the space of:
- **Preprocessing:** Resampling, reweighting, data transformation
- **In-processing:** Constrained optimization, adversarial debiasing
- **Postprocessing:** Threshold adjustment, calibration

The system uses Pareto front optimization to find the best trade-off between
fairness and accuracy for a given application context.

## Publications

- **Fix Fairness, Don't Ruin Accuracy: Performance Aware Fairness Repair using AutoML** (FSE 2023)
