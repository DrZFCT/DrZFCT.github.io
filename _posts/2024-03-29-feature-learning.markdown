---
layout: post
title: Feature Learning
author: Kaizhao Liu

---

One notable difference between traditional machine learning algorithms and deep learning is that in deep learning, the features are learnable and can be interpreted.



# 1D Hermite Polynomials


The $k$-th order probabilist's Hermite polynomial is defined to be

$$
h_k(z)=\frac{(-1)^k}{\sqrt{k!}}\frac{\gamma^{(k)}(z)}{\gamma(z)},
$$

where $\gamma(z)=\frac{1}{\sqrt{2\pi}}e^{-\frac{x^2}{2}}$ is the pdf of 1D standard Gaussian distribution.


A key fact is that normalized Hermite polynomials form a complet orthonormal basis of $L^2(\gamma)$, where $\gamma=\cN(0,1)$ by a benign abuse of notation.

### Properties of Unnormalized Hermite Polynomials

The unnormalized one is 

$$
\text{He}_k(z)=\sqrt{k!}h_k(z).
$$

- $\text{He}_{k}(-z)=(-1)^k\text{He}_k(z)$
- $\text{He}_{k+1}(z)=z\text{He}_k(z)-\text{He}'_k(z)$
  - take the derivative of $\gamma(z)\text{He}_{k}(z)=(-1)^k\gamma^{(k)}(z)$
  - note that $\gamma'(z)=-z\gamma(z)$
- $\text{He}'_{k+1}(z)=(k+1)\text{He}_k(z)$
  - proof by induction
  - take the derivative of $\gamma^{(k+1)}(z)+z\gamma^{(k)}(z)=-k\gamma^{(k-1)}(z)$
- $\text{He}^{(2)}_{k}(z)-z\text{He}'_k(z)+k\text{He}(z)=0$
  - combine the above two identities
  - *differential eqaution formulation*
- (**Stein's Lemma**) Assume $f\in C^k\cap  L^2(\gamma)$, then $$\EE_{z\sim\gamma} f(z)\text{He}_{k}(z)=\EE_{z\sim\gamma} f^{(k)}(z)$$
  - integration by parts
- (**Poincare Inequality**) Assume $f\in C^1\cap  L^2(\gamma)$ and $f'\in L^2(\gamma)$, then $$\text{Var} f\leq \|f'\|^2_{L^2(\gamma)}  $$
  - expand $f=\sum_{m=0}^\infty \hat{f}_m h_m(z)$
  - $$\text{Var} f=\sum_{m=1}^\infty \hat{f}^2_m$$
  - $$ \|f'\|^2_{L^2(\gamma)}=\sum_{m=1}^\infty m\hat{f}^2_m $$

### Physicist's Hermite Polynomials

The physicist's Hermite polynomial is given by $\text{H}_k(z)=(-1)^ke^{-x^2}\frac{\mathrm d^k}{\mathrm dz^k}e^{-x^2}$.

### Properties of Probabilist's Hermite Polynomials

For any $f\in L^2(\mu)$, 


The following facts will be useful:

In practice, we often focus on the study of high-dimensional function of the form $f(\left\langle u,x\right\rangle)$.
Let $\gamma_d=\cN(0,I_d)$. For any $f,g\in L^2(\mu)$ and $u,v\in\SS^{d-1}$, we have (*Inner Product Formula*):

$$
\EE_{x\sim\gamma_d} f(\left\langle u,x\right\rangle)g(\left\langle v,x\right\rangle)=\sum_{k=0}^\infty \hat f_k \hat g_k \left\langle u,v\right\rangle^k 
$$

- Proof:
  - expand $$f=\sum_{m=0}^\infty \hat{f}_m h_m(z)$$ and $$g=\sum_{m=0}^\infty \hat{g}_m h_m(z)$$
  - 

# Hermite Tensors

It is well known that a complete set of orthonormal polynomials in $d$ variables can be obtained by using products of such polynomials in a single variable. 
Such a procedure lacks symmetry, and there is sometimes an advantage to be gained by expressing the polynomials in tensor invariant notation.

The Hermite tensors are defined by:

$$
\text{He}_k(x)=\frac{(-1)^k}{\sqrt{k!}}
$$

If $\|u\|=1$, we have 

$$
h_k(\left\langle u,x\right\rangle) = \left\langle \text{He}_k(x),u^{\otimes k}\right\rangle
$$

Generalized Stein's lemma

$$
\sqrt{k!}\EE_{x\sim\gamma} f(x)\text{He}_k(x) = \EE_{x\sim\gamma} \nabla_x^k f(x)
$$

Reference:
[Note on N-dimensional hermite polynomials](https://onlinelibrary.wiley.com/doi/10.1002/cpa.3160020402)


# Single-Index Model

$$
f^*(x)=\varphi (\left\langle w_*,x\right\rangle)
$$

isotonic regression 



# Picture: Small Initialization



# Standard Initialization

$w_j\sim \cN(0,\frac{I_d}{d})$, $x\sim \SS^{d-1}$