---
layout: post
title: Numerical Algebra
author: Kaizhao Liu

---

In this note, I sketch the most fundamental ideas and algorithms developed in the traditional field of numerical algebra. If permitted, I also sketch the mathematical analysis of such algorithms. The material means to establish an understanding of this field as easy as possible, thus all implementation and technical details are omitted.

# Solving Linear Systems

According to linear algebra, for a linear system to have a unique solution, we can consider square matrix.
$A\in\RR^n$, $x,b\in\RR^n$, solve for $x%

$$
Ax=b
$$

Observation:

>If $A$ is upper or lower diagonal, we can plug-in, the computational complexity is $n^2$.



### LU Factorization

Sometimes we wish to solve a sequence of problems $Ax_1=b_1$, $Ax_2=b_2$, $\ldots$, where in each system the matrix $A$ is the same.




# Eigenvectors

### Computing a Single Eigenvalue

Roots of polynomial

##### Power Iteration

Assume $A\in\RR^{n\times n}$ is symmetric.

Convergence rate: $\frac{\lambda_2}{\lambda_1}$


##### Shifting, Inverse Power Iteration

Introduce a parameter $\sigma$, consider the eigenvalues of $A-\sigma I_{n}$



### Finding Multiple Eigenvalues

##### Deflation


##### QR Iteration

Deflation has the drawback that each eigenvector must be computed separately, which can be slow and can accumulate error if individual eignevalues are not accurate,

> Repeatedly factorize $A=QR$ and replace $A$ with $RQ$.



##### Krylov Subspace Methods

For a vector $b\in\RR^n$, we can examine the *Krylov matrix*

$$
K_k=(b,Ab,A^2b,\cdots,A^{k-1}b).
$$



# Singular Value Decomposition

By definition, an algorithm is 

> The columns of $V$ are the eigenvectors of $A^\top A$, so they can be computed. Then rewriting $A=U\Sigma V^\top$ as $AV=U\Sigma$, the columns of $U$ corresponding to nonzero singular values in $\Sigma$ are normalized columns of $AV$. The remianing columns satisfy $AA^\top u_i=0$ and can be computed using the LU factorization.


Computing the SVD is far more expensive than most of the linear solution techniques.


# Iterative Linear Solvers

Why bother deriving another class of linear solvers?

- Most of direct solvers require us to represent $A$ as a full $n\times n$ matrix.
- Algorithms such as LU, QR, and Cholesky factorization all take around $O(n^3)$ time.

Assume $A$ is symmetric and positive definite.

### Gradient Descent 



### Conjugate Gradient

Observation:

> Suppose $\{w_1,\cdots,w_n\}$ are orthogonal in $\RR^n$. Then $f(y)=\|y-y^*\|^2$ is minimized in at most $n$ steps by line searching in direction $w_1$, then direction $w_2$, and so on.


Two vectors $v,w$ are $A$-conjugate if $v^\top A w=0$. Thus, suppose $\{v_1,\cdots,v_n\}$ are $A$-conjugate. Then $$f(x)=\frac{1}{2}(x-x^*)^\top A(x-x^*)=\frac{1}{2}x^\top Ax-b^\top x+c$$ is minimzed in at most $n$ steps by line search in direction $v_1$, then direction $v_2$, and so on.

Now we need to find $n$ $A$-conjugate search directions.


# Tensor Decomposition

$$
T=\sum_{i=1}^r u^{(i)}\otimes v^{(i)}\otimes w^{(i)}
$$

Guarantees for Jennrich's Algorithm can be easily founded by the perburbation bounds [Chap 3.4]().

Where can we apply the tensor decomposition?
