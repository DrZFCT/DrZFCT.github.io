---
layout: post
title: Topology of Random Measures
author: Kaizhao Liu
published_status: 0
---

In traditional probability theory, we study random variables (random elements in $\RR^d$) and their convergence in probability, a.s. convergence, and convergence in law. We have classical results regarding $\frac{1}{n}\sum_{i=1}n X_i$ and their convergence (weak, strong LLN, and CLT), which corresponds to the three type of convergences above. 

## What does “convergence” mean in \(\mathcal P(\mathbb R^d)\)?

First we need to choose a topology/metric on \(\mathcal P(\mathbb R^d)\), typically:

- **Weak topology** (most common): \(\mu_n \Rightarrow \mu\) iff  
  \[
  \int f\,d\mu_n \to \int f\,d\mu,\quad \forall f\in C_b(\mathbb R^d).
  \]
  (metrized by Prokhorov, bounded-Lipschitz metrics, etc.)

- **Wasserstein \(W_p\)** topology: stronger; roughly weak convergence + convergence of \(p\)-th moments.

Then for random measures \(M_n:\Omega\to\mathcal P(\mathbb R^d)\), define exactly as usual in metric spaces:

- \(M_n \to M\) **a.s.** if \(d(M_n,M)\to0\) a.s.
- \(M_n \to M\) **in probability** if \(\Pr(d(M_n,M)>\varepsilon)\to0\).
- \(M_n \Rightarrow M\) **in law** if \(\mathcal L(M_n)\Rightarrow \mathcal L(M)\) in \(\mathcal P(\mathcal P(\mathbb R^d))\).

So the three convergence modes are the same; only the state space changed.

---

## 2) LLN for empirical measures

Assume \(X_i\) i.i.d. with law \(\mu\). Then
\[
\hat\mu_n=\frac1n\sum_{i=1}^n\delta_{X_i}.
\]

### Strong law at measure level (Varadarajan)
\[
\hat\mu_n \Rightarrow \mu \quad \text{weakly, a.s.}
\]

Equivalent viewpoint: for each bounded continuous \(f\),
\[
\int f\,d\hat\mu_n=\frac1n\sum_{i=1}^n f(X_i)\to \mathbb E[f(X_1)] \quad \text{a.s.}
\]
So this is an LLN **simultaneously for all test functions \(f\in C_b\)**.

(Weak LLN version: convergence in probability instead of a.s.)

---

## 3) CLT for empirical measures = empirical process CLT

For one fixed \(f\in L^2(\mu)\):
\[
\sqrt n\left(\int f\,d\hat\mu_n-\int f\,d\mu\right)
=\frac1{\sqrt n}\sum_{i=1}^n\bigl(f(X_i)-\mathbb Ef(X_i)\bigr)
\Rightarrow N(0,\operatorname{Var}_\mu(f)).
\]
That is just ordinary CLT.

Measure-level CLT studies the whole random functional
\[
f\mapsto \sqrt n\left(\int f\,d\hat\mu_n-\int f\,d\mu\right),
\]
which converges (for suitable function classes \( \mathcal F\), e.g. Donsker classes) to a centered Gaussian process with covariance
\[
\operatorname{Cov}(f(X),g(X)).
\]
In 1D this gives the classical empirical CDF CLT (Donsker/Brownian bridge).

---

## More or less information than usual LLN/CLT?

- **More** than just sample mean LLN/CLT:  
  sample mean is only \(f(x)=x\) (or coordinates).  
  Empirical measure convergence controls \(\frac1n\sum f(X_i)\) for many/all \(f\).

- **Equivalent** if you phrase LLN/CLT for all test functions in a convergence-determining class.

- **Potentially less** if you use only weak topology and care about unbounded \(f\) (like moments).  
  Weak convergence alone does not guarantee moment convergence.  
  If moments matter, use stronger topologies (e.g. \(W_p\)) or add moment conditions.

---
