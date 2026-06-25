---
title: "FairSense: Long-Term Fairness Analysis of ML-Enabled Systems"
authors: "Yining She, Sumon Biswas, Christian Kästner, Eunsuk Kang"
venue: "47th IEEE/ACM International Conference on Software Engineering"
venue_short: "ICSE"
year: 2025
date: 2025-05-01
pdf: "/uploads/fairsense.pdf"
doi: "https://doi.org/10.1109/ICSE55347.2025.00159"
arxiv: ""
code: "https://github.com/cmu-soda/FairSense"
data: ""
artifact: ""
slides: ""
video: ""
featured: true
abstract: >
  Algorithmic fairness of machine learning (ML) models has raised significant concern in the recent years. Many testing,
  verification, and bias mitigation techniques have been proposed to identify and reduce fairness issues in ML models.
  The existing methods are model-centric and designed to detect fairness issues under static settings. However, many
  ML-enabled systems operate in a dynamic environment where the predictive decisions made by the system impact the
  environment, which in turn affects future decision-making. Such a self-reinforcing feedback loop can cause fairness
  violations in the long term, even if the immediate outcomes are fair. In this paper, we propose a simulation-based
  framework called FairSense to detect and analyze long-term unfairness in ML-enabled systems. Given a fairness
  requirement, FairSense performs Monte-Carlo simulation to enumerate evolution traces for each system configuration.
  Then, FairSense performs sensitivity analysis on the space of possible configurations to understand the impact of
  design options and environmental factors on the long-term fairness of the system. We demonstrate FairSense's potential
  utility through three real-world case studies: Loan lending, opioids risk scoring, and predictive policing.
bibtex: |
  @inproceedings{she2025fairsense,
    title={FairSense: Long-Term Fairness Analysis of ML-Enabled Systems},
    author={She, Yining and Biswas, Sumon and K{\"a}stner, Christian and Kang, Eunsuk},
    booktitle={Proceedings of the 47th International Conference on Software Engineering},
    pages={782--794},
    year={2025},
    doi={10.1109/ICSE55347.2025.00159}
  }
---
