---
title: "Fix Fairness, Don't Ruin Accuracy: Performance Aware Fairness Repair using AutoML"
authors: "Giang Nguyen, Sumon Biswas, Hridesh Rajan"
venue: "31st ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering"
venue_short: "FSE"
year: 2023
date: 2023-12-03
pdf: "/uploads/fair-automl-FSE23.pdf"
doi: "https://doi.org/10.1145/3611643.3616257"
arxiv: ""
code: "https://github.com/giangnm58/Fair-AutoML"
data: ""
artifact: ""
slides: ""
video: ""
featured: false
abstract: >
  Machine learning (ML) is increasingly being used in critical decision-making software, but incidents have raised
  questions about the fairness of ML predictions. To address this issue, new tools and methods are needed to mitigate
  bias in ML-based software. Previous studies have proposed bias mitigation algorithms that only work in specific
  situations and often result in a loss of accuracy. Our proposed solution is a novel approach that utilizes automated
  machine learning (AutoML) techniques to mitigate bias. Our approach includes two key innovations: a novel optimization
  function and a fairness-aware search space. By improving the default optimization function of AutoML and incorporating
  fairness objectives, we are able to mitigate bias with little to no loss of accuracy. Additionally, we propose a
  fairness-aware search space pruning method for AutoML to reduce computational cost and repair time. Our approach,
  built on the state-of-the-art AutoML tool, is designed to reduce bias in real-world scenarios. In order to demonstrate
  the effectiveness of our approach, we evaluated our approach on four fairness problems and 16 different ML models,
  and our results show a significant improvement over the baseline and existing bias mitigation techniques. Our approach,
  Fair-AutoML, successfully repaired 60 out of 64 buggy cases, while existing bias mitigation techniques only repaired
  up to 44 out of 64 cases.
bibtex: |
  @inproceedings{nguyen2023fair,
    title={Fix Fairness, Don't Ruin Accuracy: Performance Aware Fairness Repair using AutoML},
    author={Nguyen, Giang and Biswas, Sumon and Rajan, Hridesh},
    booktitle={Proceedings of the 31st ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering},
    pages={502--514},
    year={2023},
    doi={10.1145/3611643.3616257}
  }
---
