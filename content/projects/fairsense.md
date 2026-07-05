---
title: "Long-Term Fairness and ML Safety"
description: "Simulation-based analysis of long-term fairness and safety in ML-enabled systems whose decisions reshape their own future inputs through feedback loops."
status: "active"
image: "/images/projects/fairsense.png"
image_alt: "Diagram of a feedback loop where an ML system's decisions change the environment and feed back into its future inputs"
github: "https://github.com/cmu-soda/FairSense"
paper: "https://doi.org/10.1109/ICSE55347.2025.00159"
demo: ""
artifact: ""
people: ["Sumon Biswas", "Yining She", "Christian Kästner", "Eunsuk Kang"]
categories: ["Fairness", "Safety"]
tags: []
publications:
  - "fairsense-icse25"
featured: true
date: 2025-05-01
---

## Overview

Many ML-enabled systems operate in dynamic environments: the system's decisions
change the environment, and those changes feed back into its future inputs. Certain
self-reinforcing loops can amplify errors, entrench bias, and cause fairness
violations in the long term even when immediate outcomes are fair. In predictive
policing, for example, a model that flags a neighborhood as high-crime sends more
patrols there, producing more recorded arrests, which the model reads as even higher
crime. The same pattern appears in loan approvals that affect credit scores and in
medical risk scoring that influences treatment access.

We build methods to detect and analyze these long-term risks before deployment.
Our FairSense framework (ICSE 2025) performs Monte-Carlo simulation to enumerate
evolution traces of a system under a given fairness requirement, then applies
sensitivity analysis over the space of configurations to understand how design
options and environmental factors shape long-term fairness. This builds on our
earlier position that feedback loops should be treated as first-class design
concerns in ML-based systems.

## Current Focus

- Simulation-based detection of long-term unfairness: given a fairness requirement,
  FairSense runs Monte-Carlo simulations to enumerate possible evolution traces for
  each system configuration.
- Sensitivity analysis over the configuration space to pinpoint the small number of
  design options and environmental factors that most influence a system's long-term
  trajectory, enabling targeted monitoring and interventions.
- Case studies in loan lending, opioid risk scoring, and predictive policing, where
  feedback between decisions and the environment drives fairness violations that
  static, model-centric evaluation misses.
- Extending the analysis beyond fairness to other evolving system properties, such
  as safety, whose effects accumulate over time.
