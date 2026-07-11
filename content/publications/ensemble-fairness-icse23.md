---
title: "Towards Understanding Fairness and its Composition in Ensemble Machine Learning"
authors: "Usman Gohar, Sumon Biswas, Hridesh Rajan"
venue: "45th IEEE/ACM International Conference on Software Engineering"
venue_short: "ICSE"
year: 2023
date: 2023-05-14
pdf: "/uploads/ensemble-fairness-ICSE23.pdf"
doi: "https://doi.org/10.1109/ICSE48619.2023.00133"
arxiv: ""
code: "https://github.com/UsmanGohar/FairEnsemble"
data: ""
artifact: ""
slides: ""
video: ""
featured: false
abstract: >
  Machine Learning (ML) software has been widely adopted in modern society, with reported fairness implications for
  minority groups based on race, sex, age, etc. Many recent works have proposed methods to measure and mitigate
  algorithmic bias in ML models. The existing approaches focus on single classifier-based ML models. However, real-world
  ML models are often composed of multiple independent or dependent learners in an ensemble (e.g., Random Forest), where
  the fairness composes in a non-trivial way. How does fairness compose in ensembles? What are the fairness impacts of
  the learners on the ultimate fairness of the ensemble? Can fair learners result in an unfair ensemble? Furthermore,
  studies have shown that hyperparameters influence the fairness of ML models. Ensemble hyperparameters are more complex
  since they affect how learners are combined in different categories of ensembles. Understanding the impact of ensemble
  hyperparameters on fairness will help programmers design fair ensembles. Today, we do not understand these fully for
  different ensemble algorithms. In this paper, we comprehensively study popular real-world ensembles: bagging,
  boosting, stacking and voting. We have developed a benchmark of 168 ensemble models collected from Kaggle on four
  popular fairness datasets. We use existing fairness metrics to understand the composition of fairness. Our results
  show that ensembles can be designed to be fairer without using mitigation techniques. We also identify the interplay
  between fairness composition and data characteristics to guide fair ensemble design. Finally, our benchmark can be
  leveraged for further research on fair ensembles.
bibtex: |
  @inproceedings{gohar2023ensemble,
    title={Towards Understanding Fairness and its Composition in Ensemble Machine Learning},
    author={Gohar, Usman and Biswas, Sumon and Rajan, Hridesh},
    booktitle={Proceedings of the 45th International Conference on Software Engineering},
    pages={1533--1545},
    year={2023},
    doi={10.1109/ICSE48619.2023.00133}
  }
---
