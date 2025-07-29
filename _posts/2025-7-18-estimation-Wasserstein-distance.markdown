---
layout: post
title: Estimation of Wasserstein Distances
author: Kaizhao Liu

---

This is a note on the [estimation of Wasserstein distances](https://arxiv.org/abs/2407.18163).


# The Wasserstein Law of Large Numbers

Suppose that $X_1,\dots,X_n\overset{i.i.d}{\sim}\mu$, where $\mu$ is a probability measure on a compact subset of $\RR^d$, which we can assume to be the unit cube $[0,1]^d$ for convenience.
The law of large numbers implies that the empirical measure 
$$
\mu_n=\frac{1}{n}\sum_{i=1}^n\delta_{X_i},
$$
converges


>If the support of $\mu$ lies in $[0,1]^d$, then $$\EE W_1(\mu_n,\mu)\lessim \sqrt{d}$$


# The Dyadic Partioning Argument


### Rethinking Dudley's entropy integral


# A Finer Analysis for $d=2$


# Optimality