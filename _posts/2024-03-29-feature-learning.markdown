---
layout: post
title: Feature Learning
author: Kaizhao Liu

---

One notable difference between traditional machine learning algorithms and deep learning is that in deep learning, the features are learnable and can be interpreted.



# 1D Hermite Polynomials


The $k$-th order probabilist's Hermite polynomial

$$
h_k(z)=\frac{(-1)^k}{\sqrt{k!}}\frac{}{}
$$

A key fact is that normalized Hermite polynomials form a complet orthonormal basis of $L^2(\mu)$, where $\mu=\cN(0,1)$.

For any $f\in L^2(\mu)$, 


The following facts will be useful:

In practice, we often focus on the study of high-dimensional function of the form $f(\left\langle u,x\right\rangle)$.
Let $\gamma=\cN(0,I_d)$. For any $f,g\in L^2(\mu)$ and $u,v\in\SS^{d-1}$, we have 

$$
\EE_{x\sim\gamma} f(\left\langle u,x\right\rangle)g(\left\langle v,x\right\rangle)=\sum_{k=0}^\infty \hat f_k \hat g_k \left\langle u,v\right\rangle^k 
$$

# Hermite Tensors

It is well known that a complete set of orthonormal polynomials in $d$ variables can be obtained by using products of such polynomials in a single variable. 
Such a procedure lacks symmetry, and there is sometimes an advantage to be gained by expressing the polynomials in tensor invariant notation.

The Hermite tensors are defined by:

$$
He_k(x)=\frac{(-1)^k}{\sqrt{k!}}
$$

If $\|u\|=1$, we have 

$$
h_k(\left\langle u,x\right\rangle) = \left\langle He_k(x),u^{\otimes k}\right\rangle
$$

Generalized Stein's lemma

$$
\sqrt{k!}\EE_{x\sim\gamma} f(x)He_k(x) = \EE_{x\sim\gamma} \nabla_x^k f(x)
$$

Reference:
![Note on N-dimensional hermite polynomials]()


# Single-Index Model

$$
f^*(x)=\varphi (\left\langle w_*,x\right\rangle)
$$

isotonic regression 



# Picture: Small Initialization



# Standard Initialization

$w_j\sim \cN(0,\frac{I_d}{d})$, $x\sim \SS^{d-1}$