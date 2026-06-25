---
title: "Long-Term Fairness and ML Safety"
description: >
  Modeling and analysis for ML-enabled systems whose predictions reshape their own
  future inputs, with emphasis on long-term fairness, feedback loops, and safety.
status: "active"
people: ["Sumon Biswas", "Yining She", "Christian Kästner", "Eunsuk Kang"]
categories: ["Fairness", "Safety"]
publications:
  - "fairsense-icse25"
  - "safe-ml-fse23"
featured: true
date: 2025-05-01
---

## Overview

Many ML-enabled systems operate inside feedback loops: a model's decisions change
the environment, and those changes later influence the model's future inputs. This
project studies how those dynamics can create long-term fairness and safety risks
that are difficult to detect with static model evaluation alone.

## Current Focus

- Simulation-based analysis of long-term fairness under feedback
- Sensitivity analysis over system configurations and environmental assumptions
- Safety arguments for ML systems whose effects accumulate over time

This project includes the FairSense framework and related work on feedback-loop
risks in ML-based systems.
