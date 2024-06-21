---
layout: post
title: "Completely Positive Map"
author: Kaizhao Liu
---

In this article, I describe $C^*$-algebra, complete positive map, and its relationship to quantum mechanics.


# $C^*$-algebra

Let us first briefly explain what a $$C^*$$-algebra is. As it is an algebra, it's a vector space equipped with an operation called multiplication. A $$C^*$$-algebra is also a Banach algebra. This essentially means that it's a vector space with a norm (a way to measure the "size" or "length" of its elements) that's compatible with its algebraic structure.

One defining feature of a $$C^*$$-algebra is the presence of an involution operation, denoted by $$*$$. This operation assigns to each element a "conjugate" or "adjoint" element in a way that's compatible with the algebraic operations. In simpler terms, it's like a generalization of complex conjugation for matrices or operators. The last condition for $$C^*$$-algebra is the $$C^*$$-condition. This is a key property that distinguishes $$C^*$$-algebras from other Banach algebras. The $$C^*$$-condition essentially imposes a compatibility between the algebraic structure and the norm, stating that the norm of the product of two elements should be less than or equal to the product of their norms.

An example of a $C^*$-algebra is the algebra of complex $n\times n$ matrices $M_n(\CC)$. 

# Definition of complete positive map

Let $A$ and $B$ be $C^*$-algebras. A linear map $\phi :A\to B$ is called a positive map if $\phi$ maps positive elements to positive elements: $a \geq 0 \implies \phi(a) \geq 0$.

Any linear map $\phi :A\to B$ induces another map $\text{id} \otimes \phi :\mathbb{C}^{k \times k} \otimes A \to \mathbb{C}^{k \times k} \otimes B$ in a natural way.

If $\mathbb{C}^{k\times k} \otimes A$ is identified with the $$C^*$$-algebra $A^{k\times k}$ of $k\times k$-matrices with entries in $A$, then $\text{id} \otimes \phi$ acts as

$$
\begin{pmatrix}
a_{11} & \cdots & a_{1k} \\
\vdots & \ddots & \vdots \\
a_{k1} & \cdots & a_{kk}
\end{pmatrix}
\mapsto
\begin{pmatrix}
\phi(a_{11}) & \cdots & \phi(a_{1k}) \\
\vdots & \ddots & \vdots \\
\phi(a_{k1}) & \cdots & \phi(a_{kk})
\end{pmatrix}.
$$

\\[\cD\\]

# A positive map which is not complete positive 

Let the $C^*$-algebra in consideration be $M_n(\CC)$. The $E_{ij}$'s are a basis for this vector space.
Define a linear function on $M_n(\CC)$ by 

$$
\mu(E_{ij})= \left( (i-l)(j-k)\right)_{kl}.
$$

Now $\mu$ is positive; for let $A=(a_{ij})_{ij}\geq 0$ be a positive matrix in $M_n(\CC)$, and let $x\in\RR^n$ be any vector.
Then 

$$
x^T\mu(A)x=\sum_{i,j,k,l}a_{ij}(i-k)(j-l)x_kx_l=\sum_{i,j}a_{ij}\sum_{k}(i-l)x_l\sum_{j}(j-k)x_k\geq 0.
$$

Now we should that $\mu$ is not completely positive by showing that $\mu\otimes I_n$ is not positive.
Let $E$ be the element of $M_n(\CC)^{\otimes n}$ whose $(i,j)$th entry is $E_{ij}$. Then $E$ is positive as for any vector $x\in\RR^{n^2}$,

$$
\sum_{i,j,k,l}E_{ik,jl}x_{ik}x_{jl}=\sum_{i,j,k,l}\delta_{ij}x_{ik}x_{jl}=\sum_i \sum_k x_{ik} \sum_l x_{il}\geq 0.
$$

But $\mu\otimes I_n (E)$ is not positive as 

$$
\sum_{i,j,k,l}E_{ik,jl}\delta_{ik}\delta_{jl}=\sum_{i,j,k,l}(i-l)(j-k)\delta_{ik}\delta_{jl}=-\sum_{i,j}(i-j)^2<0.
$$


# Tricks with Maximal Entanglement

