---
layout: post
title: "Completely Positive Map"
author: Kaizhao Liu
---

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


