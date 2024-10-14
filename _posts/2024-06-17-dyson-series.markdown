---
layout: post
title: Dyson Series
author: Kaizhao Liu

---

Some quantum mechanical calculation.







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




# Wick's Theorem

In probability theory, Isserlis' theorem is a formula that allows one to compute higher-order moments of the multivariate normal distribution in terms of its covariance matrix.
This theorem is introduced to particle physics by Wick, so it is known as Wick's theorem.

If $(X_1, \dots, X_n)$ is a zero-mean multivariate normal random vector, then

$$
\operatorname{E} [X_1 X_2 \cdots X_n] = \sum_{p \in P_{n}^{2}} \prod_{\{i,j\} \in p} \operatorname{E} [X_i X_j] = \sum_{p \in P_{n}^{2}} \prod_{\{i,j\} \in p} \operatorname{Cov} (X_i, X_j),
$$

where the sum is over all the pairings of $\{1, \ldots, n\}$, i.e., all distinct ways of partitioning $\{1, \ldots, n\}$ into pairs $\{i,j\}$, and the product is over the pairs contained in $p$.

We can prove this by Gaussian integration by parts. If $(X_1,\cdots,X_n)$ is a zero-mean multivariate normal random vector, then 

$$
\EE (X_1f(X_1,\cdots,X_n))=\sum_{i=1}^n \text{Cov}(X_1,X_i)\EE (\partial_{X_i}f(X_1,\cdots,X_n)) .
$$

Applying this to $f(x_1,\cdots,x_n)=x_2\cdots x_n$.


More generally, if $(Z_1, \dots, Z_n)$ is a zero-mean complex-valued multivariate normal random vector, then the formula still holds. This is because the formula is linear on both sides, so we get the complex case from real case for free.
