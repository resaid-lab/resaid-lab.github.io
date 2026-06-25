---
title: "Towards Safe ML-Based Systems in Presence of Feedback Loops"
authors: "Sumon Biswas, Yining She, Eunsuk Kang"
venue: "International Workshop on Dependability and Trustworthiness of Safety-Critical Systems with Machine Learned Components, ESEC/FSE"
venue_short: "SE4SafeML"
year: 2023
date: 2023-12-04
pdf: "/uploads/safe-ML-FSE23.pdf"
doi: "https://doi.org/10.1145/3617574.3617861"
arxiv: ""
code: ""
data: ""
artifact: ""
slides: ""
video: ""
featured: false
abstract: >
  Machine learning (ML) based software is increasingly being deployed in a myriad of socio-technical systems, such as
  drug monitoring, loan lending, and predictive policing. Although not commonly considered safety-critical, these systems
  have a potential to cause serious, long-lasting harm to users and the environment due to their close proximity and
  effect on the society. One type of emerging problem in these systems is unintended side effects from a feedback loop;
  the decision of ML-based system induces certain changes in the environment, which, in turn, generates observations
  that are fed back into the system for further decision-making. When this cyclic interaction between the system and the
  environment repeats over time, its effect may be amplified and ultimately result in an undesirable outcome. In this
  position paper, we bring attention to the safety risks that are introduced by feedback loops in ML-based systems, and
  the challenges of identifying and addressing them. In particular, due to their gradual and long-term impact, we argue
  that feedback loops are difficult to detect and diagnose using existing techniques in software engineering. We propose
  a set of research problems in modeling, analyzing, and testing ML-based systems to identify, monitor, and mitigate
  the effects of an undesirable feedback loop.
bibtex: |
  @inproceedings{biswas2023safe,
    title={Towards Safe ML-Based Systems in Presence of Feedback Loops},
    author={Biswas, Sumon and She, Yining and Kang, Eunsuk},
    booktitle={Proceedings of the International Workshop on Dependability and Trustworthiness of Safety-Critical Systems with Machine Learned Components at ESEC/FSE},
    year={2023},
    doi={10.1145/3617574.3617861}
  }
---
