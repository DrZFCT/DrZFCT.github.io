---
layout: post
title: Numerical Analysis
author: Kaizhao Liu

---

In this note, I sketch the most fundamental ideas and algorithms developed in the traditional field of numerical analysis. If permitted, I also sketch the mathematical analysis of such algorithms. The material means to establish an understanding of this field as easy as possible, thus all implementation and technical details are omitted.

### Chebyshev Polynomials

Minimum $L^\infty$ norm property 


# Root-Finding 


# Interpolation

### Polynomial Interpolation

Given $k$ pairs $(x_1,y_1),\ldots,(x_k,y_k)$, we can use them to define the **Lagrange interpolation** basis $\phi_1,\ldots,\phi_k$ by writing 

$$
\phi_i(x):=\frac{\prod_{j\neq i}(x-x_j)}{\prod_{j\neq i}(x_i-x_j)}.
$$


The **Newton** basis,

$$
\psi_i(x)=\prod_{j=1}^{i-1}(x-x_j)
$$

### Piecewise Interpolation 




# Integration


### Newton-Cotes Quadrature 


### Gauss Quadrature


(adaptive quadrature?)

# Differentiation



### Finite Difference

We have a function $f$ that we can query the function value. For example, when $f$ takes on a complex form or when a user provides $f$ as a subroutine without analytical information about its structure.



### Choosing the Step Size

Numerical differentiation has a curious property. It appears that any formula above can be arbitarily accurate by choosing a sufficiently small $h$. However, implementations of arithmetic operations usually are inexact. 

### Automatic Differentiation



> Leverage the chain rule.


# Fast Fourier Transform

The blog
[Big Ideas in Applied Math: The Fast Fourier Transform](https://www.ethanepperly.com/index.php/2021/05/10/big-ideas-in-applied-math-the-fast-fourier-transform/)
by Ethan N. Epperly is a great introduction.

# ODE



# PDE