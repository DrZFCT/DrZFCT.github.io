---
layout: post
title: Continuous Regret Analysis
author: Kaizhao Liu

---

In **online learning**, the data is provided in a sequential order, and the goal of the learner is to make online decisions to minimize overall *regrets*.


- the learner is a function $A$ that returns the current prediction given the full history

# Online Linear Optimization

At each round $t=1,\cdots,T$
- The learner picks $x_t\in X$.
- The opponent picks reward $r_t\in [0,1]^d$.
- The learner observes $r_t$ and gets reward $x_t^\top r_t$.

The regret is defined as

$$
R=\max_{x\in X} x^\top \sum_{t=0}^T r_t - \sum_{t=0}^T  x_t^Tr_t .
$$

Regret is defined as the difference between the reward that could have been achieved by a **single** action,
given the choices of the opponent, and what was actually achieved.

Note that the “best action” is chosen with full knowledge of the
opponent's whole sequence of actions, whereas the action of the learner at time $t$ must be based solely on the past history $r_0,\cdots,r_{t-1}$.

Also note that the opponent can be adversarial as the reward $r_t$ can be based on the learner's action $x_t$

Is there any game theoretical explanation???