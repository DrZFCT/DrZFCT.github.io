---
layout: post
title: PAC Bayesian
author: Kaizhao Liu

---

In this article, we explain the PAC-Bayesian generalization bound.


# PAC-Bayesian Generalization Bound

Let $l:\cH\times \cZ \to [0,1]$ be a loss function and $\PP$ be a prior distribution over $\cH$.
Then, for any $\delta\in (0,1)$, with probability at least $1-\delta$ over the sampling of dataset $S$,
we have for any $\QQ \in \cP(\cH)$, it holds that 

$$
L(\QQ)\leq \hat{L}(\QQ)+\sqrt{\frac{\text{KL}(\QQ||\PP)+\log(1/\delta)}{2n}}.
$$

The key point is that $\QQ$ can depend on the dataset $S$ but the prior $\PP$ can not. So one can optimize $\PP$ to minimize the KL divergence.

Why is $L(\QQ)=\EE_{h\sim\QQ} L(h)$ relavent? For example, model trained by SGD are influenced by both random initialization and sampling randomness, so the output model can be regarded as a distribution $\QQ$.

# Donsker and Varadhan's Variational Principle

The key point in the proof of PAC-Bayesian Generalization bound is the following inequality, which can be regarded as a generalization of Jensen's inequality:

$$
e^{\EE_p [V]}\leq \EE_\pi [e^V]e^{\text{KL}(p||\pi)}
$$

For any pair of distribution $p,\pi\in \cP(\cX)$.

This result follows from the variational representation of Gibbs distribution.
Let $V:\cX\to\RR$ be an (negative) energy function and $\pi\in\cP(\cX)$ be an arbitary underlying distribution. The corresponding Gibbs distribution is given by 

$$
\frac{\mathrm{d} \pi_V}{\mathrm{d} \pi}=\frac{e^{V(x)}}{\EE_\pi[e^V]}.
$$

The Gibbs distribution can be characterized by the following variational principle:

$$
\pi_V=\arg\max_{p\in \cP(\cX)}(\EE_p[V]-\text{KL}(p||\pi)),
$$

with the optimal value 

$$
\log \EE_\pi [e^V] = \sup_{p\in \cP(\cX)} (\EE_p[V]-\text{KL}(p||\pi)).
$$

The proof of this variational principle is based on the following observation:

$$
\begin{align}
    \EE_p[V]-\text{KL}(p||\pi) &= \int V(x)p(x)\mathrm dx - \int p(x)\log(\frac{p(x)}{\pi(x)})\mathrm dx \\
    &= -\int p(x)\log(\frac{p(x)}{\pi(x)e^{V(x)}})\mathrm dx \\
    &= -\text{KL}(p||\pi_V)+\log \EE_\pi [e^V] .
\end{align}
$$