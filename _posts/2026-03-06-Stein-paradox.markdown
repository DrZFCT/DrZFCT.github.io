---
layout: post
title: "Stein Paradox"
author: Kaizhao Liu
published_status: 0
---

We illustrate Stein paradox.

# An Simple Normal Example



$X \sim \cN(\mu,\sigma^2 I_d)$
where $X\in \RR^d$ and $\mu\in\RR^d$.

say we observe one sample 

admissibility

In terms of MSE,
The naive estimator is not admissible if $d\geq 3$.

$$
\hat\mu_{JS}(x)=x-\frac{d-2}{\|x\|^2}x
$$

Denote $g(x)=\frac{n-2}{\|x\|^2}x$,

$$
\begin{align*}
    \operatorname{MSE}(\hat\mu_{JS})&=\EE\|X+g(X)-\mu\|^2\\
    &=n+\EE \|g(X)\|^2 + 2\EE [(X-\mu)g(X)] \\
    &=n+(n-2)^2\EE \left[\frac{1}{\|X\|^2}\right] - 2(n-2)\EE \left[\nabla\cdot\left(\frac{X}{\|X\|^2}\right)\right]\\
    &=n-(n-2)^2\EE \left[\frac{1}{\|X\|^2}\right]
\end{align*}
$$

where 

The JS estimator is actually not admissible.


If we have $n\geq 1$ observations, we can simply form the estimator

$$

$$

# References

[Wikipedia: James-Stein Estimator](https://en.wikipedia.org/wiki/James%E2%80%93Stein_estimator)