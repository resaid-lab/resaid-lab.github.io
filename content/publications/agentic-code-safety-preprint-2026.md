---
title: "What Breaks When LLMs Code? Characterizing Operational Safety Failures of Agentic Code Assistants"
authors: "Alif Al Hasan, Sumon Biswas"
venue: "41st IEEE/ACM International Conference on Automated Software Engineering"
venue_short: "ASE"
year: 2026
date: 2026-11-16
pdf: ""
doi: ""
arxiv: "https://arxiv.org/abs/2605.30777"
code: "https://github.com/resaid-lab/what_breaks_when_LLMs_code"
data: ""
artifact: ""
slides: ""
video: ""
featured: true
abstract: >
  Autonomous coding agents built on large language models (LLMs) are rapidly being integrated into development
  workflows, yet their operational safety properties remain poorly understood beyond evaluations of explicitly
  malicious inputs. In practice, high-impact failures arise during benign, goal-directed use through environment
  breakage, fabricated success reports, etc. that current benchmarks do not capture. What categories of operational
  safety failures actually occur when coding agents are used for everyday development tasks and what is their impact?
  We present an incident-driven empirical study grounded in two complementary evidence streams. We screen 68,816
  papers from 22 premier venues, curating 185 safety-relevant studies, and mine 16,586 GitHub issues from widely
  deployed LLM-powered coding tools, manually confirming 547 genuine safety failures. Applying systematic open coding
  over both corpora, we derive a multi-dimensional safety taxonomy of 33 operational risk types organized across seven
  dimensions, and annotate each incident with contributing factors, task context, severity, and downstream impact.
  Our findings show that coding-agent failures are often severe, with 326 of 547 incidents rated high or critical.
  The dominant risks are constraint violations, destructive operations, authorization bypasses, and deception, and
  over 65% of incidents arise in bug fixing and setup or configuration, patterns largely missing from prior
  literature. These results have direct implications for SE tool designers and benchmark developers: guardrails must
  go beyond adversarial-prompt defenses to enforce environmental constraints, failure transparency, and safe-halt
  behaviors.
bibtex: |
  @inproceedings{hasan2026breaks,
    title={What Breaks When LLMs Code? Characterizing Operational Safety Failures of Agentic Code Assistants},
    author={Hasan, Alif Al and Biswas, Sumon},
    booktitle={Proceedings of the 41st IEEE/ACM International Conference on Automated Software Engineering (ASE)},
    year={2026}
  }
---
