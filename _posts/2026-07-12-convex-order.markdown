---
layout: post
title: Convex Order
author: Kaizhao Liu
published_status: 0
---

# Stochastic Dominance

### Zeroth-order

For two random variables


### First-Order Stochastic Dominance

For two distributions $\mu$ and $\nu$ in $\cP_1(\RR)$, we define $\mu \preceq_{1} \nu$ 
if for every *non-decreasing* function $\varphi:\RR\to\RR$,

$$
\int \varphi\d\mu \geq \int\varphi\d\nu.
$$


An equivalent definition is

$$
F_\mu(t)\leq F_\nu(t)\quad\forall t\in\RR.
$$

Another equivalent characterization is that there exists three random varaibles $X\sim\nu,Y\sim\mu,\epsilon\geq 0$ such that $Y=X+\epsilon$.

### Second-Order Stochastic Dominance

For two distributions $\mu$ and $\nu$ in $\cP_1(\RR)$, we define $\mu \preceq_{1} \nu$ 
if for every *non-decreasing and concave* function $\varphi:\RR\to\RR$,

$$
\int \varphi\d\mu \geq \int\varphi\d\nu.
$$

An equivalent definition is

$$
\int_{-\infty}^t F_\mu(x)\d x\leq \int_{-\infty}^t F_\nu(x)\d x \quad\forall t\in\RR.
$$

To see this, using Fubini theorem and integration by parts


Another equivalent characterization is that there exists four random varaibles $X\sim\nu,Y\sim\mu,\epsilon\geq 0,\delta$ such that $X=Y-\epsilon+\delta$ and $\EE[\delta|Y-\epsilon]=0$.


###  Third and Higher Order

N-th Order Stochastic Dominance: Obsession with the Extreme Left Tail

As you move all the way up to $N$-th order, you are just repeatedly integrating the CDF from $-\infty$.
Every time you take an integral starting from $-\infty$, you are building a new accumulator that overwhelmingly punishes probability mass located at the far-left edge of the distribution.
As $n \to \infty$, the criteria become entirely obsessed with the absolute worst possible outcome. 
An infinitely high-order stochastic dominance preference converges to a Maximin strategy---meaning the decision-maker entirely ignores the mean, variance, and skew, and only looks at which distribution has the least-bad absolute minimum value.

Higher order stochastic dominance are more ``inclusive'', in the sense that higher-order stochastic dominance can successfully rank a larger set of probability distributions.



# Convex Order and Strassen's Theorem

For two distributions $\mu$ and $\nu$, we define $\mu \preceq_{\mathrm{cx}} \nu$ 
if for every convex function $\varphi:\RR\to\RR$,

$$
\int \varphi\d\mu \geq \int\varphi\d\nu.
$$

Because all convex functions are ``curved upward'', $\mu \preceq_{\mathrm{cx}} \nu$ intuitively means $\mu$ is more spread out than $\nu$.

### Strassen's Theorem

Note that if $\EE[Y|X]=X$, then $\PP_Y \preceq_{\mathrm{cx}} \PP_X$ because

$$
\EE\varphi(X)=\EE\varphi(\EE[Y|X])\leq \EE\varphi(Y).
$$

**Strassen's theorem** asserts the converse: if $\mu \preceq_{\mathrm{cx}} \nu$,
then there exists a coupling $\gamma$ such that $\EE[Y|X]=X$, where $Y\sim\mu$ and $X\sim\nu$.


# Blackwell Order