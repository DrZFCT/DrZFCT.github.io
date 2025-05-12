---
layout: post
title: Nystrom 
author: Kaizhao Liu

---

Algebra view: matrix, column space
Geometric view: operators, image

From least square 


# Penrose-I

# Projection

Consider an operator $A:\RR^n\to\RR^m$. 

The question is: what is the orthogonal projection onto subspace $\operatorname{im}(A)$, i.e. what is $P_A$?

For any vector $u\in\RR^m$, 

$$
P_A u =A v
$$ 

for some $v\in\RR^n$ by the definition of $\operatorname{im}(A)$.
By orthogonality, for any vector $w\in\RR^n$,

$$
\left\langle Aw, u-P_A u \right\rangle =0 .
$$

This is equivalent to 

$$
\left\langle w, A^* u-A^*A v \right\rangle =0 
$$

for any $w\in\RR^n$, so that 

$$
A^* u-A^*A v=0.
$$

If $A^*A$ is invertible, we have $v=(A^*A)^{-1}A^*u$, and thus $P_Au=A(A^*A)^{-1}A^*u$.

If $A^*A$ is not invertible, we can consider any inverse, for example the Penrose inverse and obtain the representation

$$
P_A=A(A^*A)^\dagger A^*.
$$

$$
A^*P_Au=A^*u
$$

In the world of matrices, $A\in M$ is a $m\times n$ matrix, $A^*$ is a $n\times m$ matrix.

# Nystrom 

