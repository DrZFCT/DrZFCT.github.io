---
layout: post
title: "Bracketing Number"
author: Kaizhao Liu
published_status: 0
---

Consider an empirical process

# Motivating Example: 

Suppose we want to upper bound 

$$
\EE\sup_{f\in\cF}\left[\EE f(X)-\frac{1}{n}\sum_{i=1}^n f(X_i)\right].
$$

Let us look at the function class of 1D thresholds:

$$
\cF=\{x\mapsto 1_{\{x\leq\theta\}}:\theta\in\RR\}.
$$

Usually, we can do symmetrization to bring out the sub-Gaussian nature.

Here, we consider 

For simplicity assume that $\PP$ does not have atoms, and let $\theta_1,\dots,\theta_N$ (with $\theta_0=-\infty$, $\theta_{N+1}=+\infty$) correspond to the quantiles: $\PP(\theta_i\leq X\leq \theta_{i+1})=\frac{1}{N+1}$. 
For a given $\theta$, let $u(\theta)$ and $l(\tehta)$ denote,respectively, the upper and lower elements corresponding to the discrete collection $\theta_0,\dots,\theta_{N+1}$. Then trivially,


# H\"older Class