---
layout: post
title: Dyson Series
author: Kaizhao Liu

---









# Baker-Hausdorff Lemma

Given two Hermitian operators $G$, $A$ on a Hilbert space $\cH$ and a real parameter $t$, then we have

$$
\exp{(itG)}A\exp{(-itG)}=A+it[G,A]+\frac{(it)^2}{2!}[G,[G,A]]+\cdots+\frac{(it)^n}{n!}[G,[G,[G,\cdots,[G,A]\cdots]]]+\cdots .
$$

A very elegant interpretation is by means of semigroup. Define

$$
Y(t)=\exp{(itG)}A\exp{(-itG)}.
$$

Then $Y(t)$ is the solution to the following ODE:

$$
\frac{\mathrm d Y(t)}{\mathrm d t}=i[G,Y(t)]=i\text{ad}_G(Y(t))
$$

with initial condition 

$$
Y(0)=A.
$$

So by means of semigroup,

$$
Y(t)=\exp{(it \text{ad}_G)}A=\sum_{i=0}^\infty \frac{(it)^n}{n!}\text{ad}^n_G(A).
$$

You can also prove this by Taylor expanding both $\exp{(itG)}$ and $\exp{(-itG)}$, and noting that 

$$
\sum_{k=0}^n (-1)^k C_n^k G^{n-k}AG^k = \text{ad}_G^n (A).
$$

Another less elegant way is to recursively differentiate $Y(t)$ and comparing the coefficients with Taylor's formula at $t=0$.

# Dyson Series