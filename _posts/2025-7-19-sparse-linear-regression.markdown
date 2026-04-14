---
layout: post
title: Sparse Linear Models
author: Kaizhao Liu
published_status: 1
---

This is a note on [sparse linear models in high dimension](https://www.cambridge.org/core/books/highdimensional-statistics/8A91ECEEC38F46DAB53E9FF8757C7A4E).



# Recovery in the Noiseless Setting

We begin by focusing on the case in which the observations are perfect or noiseless. 
Concretely, we wish to find a solution $\theta$ to the linear system $$y = \bX\theta$$, where $y \in \mathbb{R}^n$ and $X \in \mathbb{R}^{n \times d}$ are given. 
This is an underdetermined set of linear equations when $d > n$. 
Our goal is to find the sparsest solution to the linear system.

The first idea is to consider the *hard-sparse* optimization problem

$$
\begin{equation}\tag{HS}\label{HS}
    \min_{\theta \in \mathbb{R}^d} \|\theta\|_0 \quad \text{such that} \quad \bX\theta = y.
\end{equation}
$$

However, this is a combinartorics optimization problem. In general, we need to check all subsets of cardinality $k=1,\dots,d$, which is computationally infeasible if the groundtruth sparisty is large.

A natural idea is to 
Algorithm: Basis Pursuit linear program

$$
\begin{equation}\tag{BS}\label{BS}
    \min_{\theta \in \mathbb{R}^d} \|\theta\|_1 \quad \text{such that} \quad \bX\theta = y.
\end{equation}
$$



Define

$$\mathbb{C}(S) = \{ \Delta \in \mathbb{R}^d \mid \| \Delta_{S^c} \| _1 \leq  \|\Delta_S\|_1 \}.$$

We say the matrix $\bX$ satisfies the **restricted nullspace** property with respect to $S$ if  

$$\CC(S) \cap \mathrm{null}(\bX) = \{0\}.$$

Then the following two properties are equivalent:  
- For any vector $\theta^* \in \mathbb{R}^d$ with support $S$, the basis pursuit program $\eqref{BS}$ applied with $$y = \bX\theta^*$$ has unique solution $\widehat{\theta} = \theta^*$.  
- The matrix $\bX$ satisfies the restricted nullspace property with respect to $S$.

Examples:
Say $\bX\in\RR^{n\times d}$ has i.i.d. entries $\bX_{ij}\sim\cN(0,1)$. Then if $n\geq ck\log(\frac{ed}{k})$ for some sharp constant $c$, then uniform $RN(k)$ holds with high probability.


# Estimation in Noisy Settings

Let us now turn to the noisy setting, in which we observe the vector–matrix pair $(y, \bX) \in \mathbb{R}^n \times \mathbb{R}^{n \times d}$ linked by the observation model $y = \bX\theta^* + w$. The new ingredient here is the noise vector $w \in \mathbb{R}^n$.

In this case, we also have a *hard sparse* estimator

$$
\hat\theta_{\text{HS}}=\argmin_{\|\theta\|_0\leq k}\|y-\bX\theta\|_2^2
$$


*Can we acheive the fast rate with a computationally efficient procedure?*

One can also consider relaxed

$$
\hat{\theta}=\argmin_{\|\theta\|_1\leq R}\|y-\bX\theta\|_2^2
$$

with $$R=\|\theta^*\|_1$$.


In particular, for a constant $\alpha \geq 1$, let us define the set  

$$ \mathbb{C}_{\alpha}(S) := \{\Delta \in \mathbb{R}^d \mid \|\Delta_{S^c}\|_1 \leq \alpha \|\Delta_S\|_1\}.$$

The matrix  $\bX$ satisfies the **restricted eigenvalue** (RE) condition over $S$ with parameters $(\kappa, \alpha)$ if  

$$\frac{1}{n} \|\bX\Delta\|_2^2 \geq \kappa \|\Delta\|_2^2 \quad \text{for all} \quad \Delta \in \CC_{\alpha}(S).$$



$$
\frac{\|\bX \hat{\Delta}\|_2^2}{n}\leq \frac{1}{n}\left\langle w,\bX\hat{\Delta}\right \rangle 
$$


$$
\begin{align*}
    x&=\\
    &=
\end{align*}
$$


