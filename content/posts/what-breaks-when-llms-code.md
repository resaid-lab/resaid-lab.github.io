---
title: "What Actually Breaks When LLMs Write Code?"
date: 2026-06-11
author: "Sumon Biswas"
description: >
  Our new preprint studies 547 real-world safety failures of agentic code
  assistants — not jailbreaks, but ordinary tasks gone wrong. A reflection on
  why operational safety deserves as much attention as adversarial safety.
---

Most conversations about the safety of coding agents revolve around adversarial
scenarios: prompt injection, jailbreaks, malicious instructions hidden in a
README. Those threats are real. But after watching these tools work — and
occasionally watching them wreck a working environment while "fixing" a unit
test — we kept returning to a more uncomfortable question: what goes wrong when
nobody is attacking, and the agent is simply trying to help?

Our new preprint, [What Breaks When LLMs Code?](/publications/agentic-code-safety-preprint-2026/),
led by our Ph.D. student [Alif Al Hasan](/people/alif-al-hasan/), is an attempt
to answer that question with evidence rather than anecdotes. We call this
*operational safety*: the safety of an agent during benign, goal-directed,
everyday use.

## What we did

Getting at real failures required two complementary evidence streams. On the
research side, we screened 68,816 papers from 22 premier venues and curated the
185 that genuinely study safety-relevant behavior of coding agents. On the
practice side, we mined 16,586 GitHub issues from widely deployed LLM-powered
coding tools and manually confirmed 547 genuine safety failures — each one a
real user, a real task, and a real mess afterwards.

Systematic open coding over both corpora produced a taxonomy of 33 operational
risk types organized across seven dimensions, with every incident annotated for
contributing factors, task context, severity, and downstream impact.

## What surprised us

The failures are not rare edge cases, and they are not mild. 326 of the 547
incidents — roughly six in ten — were rated high or critical severity. The
dominant risks read like a system administrator's nightmares: constraint
violations, destructive operations, authorization bypasses, and deception
(agents confidently reporting success on work they did not do).

The most striking pattern, though, is *where* failures happen. Over 65% of
incidents arise during bug fixing and setup or configuration — the most mundane
tasks we hand to these tools, and precisely the ones existing safety benchmarks
rarely exercise. The literature has been looking where the light is; the
incidents are happening somewhere else.

## Some reflection

I think this gap exists because "safety" inherited its framing from security,
where the adversary is the organizing concept. But a coding agent that deletes
your database while debugging a flaky test has no adversary in the loop — just
misplaced confidence and missing guardrails. Our results suggest that defenses
need to move beyond filtering adversarial prompts toward enforcing environmental
constraints, making failures transparent instead of papered over, and giving
agents a reliable way to stop and say "I should not proceed."

This paper is also a milestone for us internally: it is the first paper grown
end-to-end inside the lab, and its replication package is the first repository
under the lab's GitHub organization. Expect more in this line of work — the
taxonomy is a foundation, and turning it into enforceable guardrails is where we
are headed next.

## Pointers

- Paper: [arXiv:2605.30777](https://arxiv.org/abs/2605.30777)
- Replication package: [resaid-lab/what_breaks_when_LLMs_code](https://github.com/resaid-lab/what_breaks_when_LLMs_code)
- Publication page: [What Breaks When LLMs Code?](/publications/agentic-code-safety-preprint-2026/)
- Project: [Coding Agents and Operational Safety](/projects/agentic-code-safety/)
