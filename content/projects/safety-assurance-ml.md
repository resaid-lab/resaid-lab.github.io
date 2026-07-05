---
title: "Safety Assurance of ML-Based Systems"
description: "We provided safety assurance for ML-enabled systems by inferring preconditions over pipeline abstractions and identifying safety risks from feedback loops between the system and its environment."
status: "completed"
image: "/images/projects/safety-assurance-ml.png"
image_alt: "Abstraction of an ML pipeline with preconditions propagated backward from a component postcondition toward the model inputs"
github: ""
paper: ""
demo: ""
artifact: ""
people:
  - "Sumon Biswas"
  - "Yining She"
  - "Eunsuk Kang"
categories: ["Safety", "Verification"]
tags: []
publications: ["safe-ml-fse23"]
featured: false
date: 2023-11-01
---

## Overview

ML-based software makes predictions in settings where failures carry real safety consequences. Our motivating case study was the DHS passenger screening challenge, hosted on Kaggle with the largest prize pool in its history ($1.5 million): TSA screens more than two million passengers daily, high false alarm rates create checkpoint bottlenecks, and false negatives pose severe safety risks. We built abstractions of such ML-enabled systems and inferred preconditions that provide probable guarantees on the safety of their predictions.

Starting from the source code of a challenge solution, we abstracted away low-level details and applied weakest-precondition reasoning over the resulting pipeline: given a postcondition of a component, we inferred the weakest precondition and propagated it backward, stage by stage, toward the model inputs. We also studied a second threat to safe ML-based systems: feedback loops, where a system's decisions change the environment, and the changed environment generates observations that feed back into further decision-making.

## Key Results

- Built pipeline abstractions of an ML-enabled system directly from source code, using a solution to the DHS/TSA passenger screening challenge as the case study, and abstracted away low-level implementation details to make the system analyzable.
- Applied weakest-precondition reasoning on the abstraction: for a given postcondition of a pipeline component, inferred the weakest precondition and propagated it backward toward the inputs, yielding early signals and uncertainty estimates that target safety-critical false negatives.
- Identified feedback loops as a safety risk in ML-based socio-technical systems such as drug monitoring, loan lending, and predictive policing, and argued that their gradual, long-term amplification makes them difficult to detect and diagnose with existing software engineering techniques (SE4SafeML workshop at ESEC/FSE 2023).
- Proposed a set of research problems in modeling, analyzing, and testing ML-based systems to identify, monitor, and mitigate the effects of undesirable feedback loops.
