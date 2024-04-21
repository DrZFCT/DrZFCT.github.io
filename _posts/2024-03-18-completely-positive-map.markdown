---
layout: post
title: "Completely Positive Map"
author: Kaizhao Liu
---

Let us first briefly explain what a $C^*$-algebra is. As it is an algebra, it's a vector space equipped with an operation called multiplication. A $C^*$-algebra is also a Banach algebra. This essentially means that it's a vector space with a norm (a way to measure the "size" or "length" of its elements) that's compatible with its algebraic structure.

One defining feature of a $C^*$-algebra is the presence of an involution operation, denoted by $*$. This operation assigns to each element a "conjugate" or "adjoint" element in a way that's compatible with the algebraic operations. In simpler terms, it's like a generalization of complex conjugation for matrices or operators. The last condition for $C^*$ algebra is the $C^*$-condition. This is a key property that distinguishes C*-algebras from other Banach algebras. The $C^*$-condition essentially imposes a compatibility between the algebraic structure and the norm, stating that the norm of the product of two elements should be less than or equal to the product of their norms.

An example of a $C^*$-algebra is the algebra of complex square matrices $M_n(\CC)$. 

Let $A$ and $B$ be $C^*$-algebras. A linear map $\phi :A\to B$ is called a positive map if $\phi$ maps positive elements to positive elements: $a \geq 0 \implies \phi(a) \geq 0$.

Any linear map $\phi :A\to B$ induces another map $\text{id} \otimes \phi :\mathbb{C}^{k \times k} \otimes A \to \mathbb{C}^{k \times k} \otimes B$ in a natural way.

If $\mathbb{C}^{k\times k} \otimes A$ is identified with the C*-algebra $A^{k\times k}$ of $k\times k$-matrices with entries in $A$, then $\text{id} \otimes \phi$ acts as

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


