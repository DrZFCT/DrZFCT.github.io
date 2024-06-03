---
layout: post
title: Boolean Analysis
author: Kaizhao Liu

---

Denote 

$$
 x^S=\prod_{i\in S} x_i \quad (\text{with } x^\emptyset=1\text{ by convention}) 
$$

we also use the notation $\chi_S(x):=x^S$ to think of the monomial $x^S$ as a function on $x=(x_1,\cdots,x_n)\in\mathbb R^n$.



# Fourier Expansion

Define an inner product on pairs of function $f,g:\\{-1,1\\}^n\to\mathbb R$ by 

$$
\left\langle f,g \right\rangle := \frac{1}{2^n}\sum_{x\in\{-1,1\}^n} f(x)g(x) = \EE_{x\sim\{-1,1\}^n} f(x)g(x).
$$

Then the $2^n$ parity functions $\chi_S$ forms an orthonormal basis for the vector space $V$ of functions $\\{-1,1\\}\to\RR^n$.

Thus every function $f:\\{-1,1\\}^n\to\mathbb R$ can be uniquely expressed as a multilinear polynomial,

$$
f(x)=\sum_{S\subset [n]}\hat{f}(S)\chi_S(x),
$$

where the fourier coefficients are given by 

$$
\hat{f}(S)=\left\langle f,\chi_S(x) \right\rangle .
$$

Examples:
- $\text{min}_2(x_1,x_2)=-\frac{1}{2}+\frac{1}{2}x_1+\frac{1}{2}x_2+\frac{1}{2}x_1x_2$
- $\text{min}_3(x_1,x_2,x_3)=-\frac{3}{4}+\frac{1}{4}x_1+\frac{1}{4}x_2+\frac{1}{4}x_3+\frac{1}{4}x_1x_2+\frac{1}{4}x_2x_3+\frac{1}{4}x_1x_3+\frac{1}{4}x_1x_2x_3$