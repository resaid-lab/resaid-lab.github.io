---
title: "Fairify: Fairness Verification of Neural Networks"
authors: "Sumon Biswas, Hridesh Rajan"
venue: "45th IEEE/ACM International Conference on Software Engineering"
venue_short: "ICSE"
year: 2023
date: 2023-05-14
pdf: "/uploads/fairify-ICSE23.pdf"
doi: "https://doi.org/10.1109/ICSE48619.2023.00134"
arxiv: ""
code: "https://github.com/sumonbis/Fairify"
data: ""
artifact: ""
slides: ""
video: ""
featured: true
abstract: >
  Fairness of machine learning (ML) software has become a major concern in the recent past. Although recent research on
  testing and improving fairness have demonstrated impact on real-world software, providing fairness guarantee in practice
  is still lacking. Certification of ML models is challenging because of the complex decision-making process of the
  models. In this paper, we proposed Fairify, an SMT-based approach to verify individual fairness property in neural
  network (NN) models. Individual fairness ensures that any two similar individuals get similar treatment irrespective
  of their protected attributes e.g., race, sex, age. Verifying this fairness property is hard because of the global
  checking and non-linear computation nodes in NN. We proposed sound approach to make individual fairness verification
  tractable for the developers. The key idea is that many neurons in the NN always remain inactive when a smaller part
  of the input domain is considered. So, Fairify leverages white-box access to the models in production and then apply
  formal analysis based pruning. Our approach adopts input partitioning and then prunes the NN for each partition to
  provide fairness certification or counterexample. We leveraged interval arithmetic and activation heuristic of the
  neurons to perform the pruning as necessary. We evaluated Fairify on 25 real-world neural networks collected from four
  different sources, and demonstrated the effectiveness, scalability and performance over baseline and closely related
  work. Fairify is also configurable based on the domain and size of the NN. Our novel formulation of the problem can
  answer targeted verification queries with relaxations and counterexamples, which have practical implications.
bibtex: |
  @inproceedings{biswas2023fairify,
    title={Fairify: Fairness Verification of Neural Networks},
    author={Biswas, Sumon and Rajan, Hridesh},
    booktitle={Proceedings of the 45th International Conference on Software Engineering},
    pages={1546--1558},
    year={2023},
    doi={10.1109/ICSE48619.2023.00134}
  }
---
