---
layout: post
title: Anytime Acceleration of Gradient Descent
author: Kaizhao Liu

---

This is my note on the paper [Anytime Acceleration of Gradient Descent](arxiv.org/abs/2411.17668).



# Introduction

In my previous note [Classical Gradient Descent Analysis](/2024-05-04-classical-gradient-descent.markdown), we have encountered the analysis of gradient descent with fixed stepsize $\eta$ on

$$
\min_{x\in\RR^d} f(x)
$$

where $f$ is smooth and convex. Here the question is, if the stepsize $\eta_t$ is not fixed, is it possible to achieve a faster rate then $1/t$?



### Basic Inequality for Smooth Convex Functions

For a $L$-smooth convex function, we first establish the following inequality

$$
f(y)\geq f(x)+\left\langle \nabla f(x), y-x\right\rangle +\frac{1}{2L}\|\nabla f(y)-\nabla f(x)\|^2
$$

This can be proved by noting that 

$$
g_x(y):=f(x)+\left\langle \nabla f(x), y-x\right\rangle 
$$

is also a convex $L$-smooth function and $x$ is its global minimum.
Then 

$$
g_x(x)\leq g_x\left(y-\frac{\nabla g_x(y)}{L}\right).
$$

From an optimization point of view,
co-coercivities

$$
Q_{ij}:=2(f_i-f_j)+2\left\langle g_j, x_j-x_i\right\rangle -\|g_j-g_i\|^2.
$$

generate all possible long-range consistency constraints on the objective function $f$.
In other words, the co-coercivity conditions generate all possible valid inequalities with which one can prove convergence rates for GD.


# Intuition: Two-Step Case 

[Acceleration by Stepsize Hedging I: Multi-Step Descent and the Silver Stepsize Schedule](arxiv.org/abs/2309.07879)





# Silver Stepsize Schedule

In [Acceleration by Stepsize Hedging II: Silver Stepsize Schedule for Smooth Convex Optimization](arxiv.org/abs/2309.16530), 

where $n=2^k-1$, $r_k=\frac{1}{4\rho^{2k}-3}$, and the learning

The authors exhibit explicit non-negative multipliers $\lambda_{ij}$ satisfying the following identity

$$
\sum_{i\neq j\in\{0,\cdots,n,*\}}\lambda_{ij}Q_{ij}=\|x_0-x^*\|^2-\|x_n-\frac{g_n}{2r_k} -x^*\|^2+\frac{f^*-f_n}{r_k}.
$$

This immediately implies 

$$
f_n-f^*\leq r_k \|x_0-x^*\|^2.
$$

When $n=0$, the identity is 

$$
\lambda_{*0}Q_{*0}+\lambda_{0*}Q_{0*}=\|x_0-x^*\|^2-\|x_0-g_0 -x^*\|^2+2(f^*-f_0)
$$

which holds if $\lambda_{*0}=1$ and $\lambda_{0*}=0$.

When $n=1$,


For larger horizons $n$, we construct $\lambda_{ij}$ via recursive gluing.


# Primitive Stepsize Schedule