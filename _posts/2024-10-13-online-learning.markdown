---
layout: post
title: Online Learning
author: Kaizhao Liu

---

In this article we investigate online learning.

# Online COnvex Optimization

A convex set $S$

for $t=1,2,\cdots$
predict a vector $w_t\in S$
receive a convex loss function $f_t:S\to\RR$
suffer loss $f_t(w_t)$

### Follow the Leader

$$
w_t=\arg\min_{w\in S}\sum_{i=1}^{t-1}f_i(w)
$$

The following lemma is important for the analysis of

$$
\sum_{t=1}^T f_t(w_{t+1})\leq \sum_{t=1}^T f_t(u).
$$

Theorem: Running FTL on an Online Quadratic Optimization problem with $S=\RR^d$ 

### Follow the Regularized Leader

Example (Failure of FTL)

$$
w_t=\arg\min_{w\in S}\sum_{i=1}^{t-1}f_i(w)+R(w)
$$

Observe that running FTRL on $f_1,\cdots,f_T$ is equivalent to running FTL on $R,f_1,\cdots,f_T$.

Theorem: Running FTRL on an Online Linear Optimization problem with $S=\RR^d$ and regularizer 

### Online Gradient Descent

