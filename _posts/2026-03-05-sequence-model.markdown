---
layout: post
title: "Sequence Model"
author: Kaizhao Liu
published_status: 1
---

We illustrate basic inequality, noise complexity (e.g. Radamacher complexity, Gaussian complexity), and localization for the least square estimator in the simplest sequence model setting.

# Sequence Model

In the sequence model, we observe data $y_i$ for $i=1,\dots,n$ from the following model

$$
\begin{pmatrix} 
y_1 \\ 
\vdots \\ 
y_n 
\end{pmatrix} = 
\begin{pmatrix} 
\theta_1^* \\ 
\vdots \\ 
\theta_n^* \end{pmatrix} + \sigma 
\begin{pmatrix} 
w_1 \\ 
\vdots \\ 
w_n 
\end{pmatrix}
$$

where the noise satisfies $\EE w_i=0$ and $\var(w_i)=1$.
Our goal is to estimate the groundtruth parameter $\theta^*$; here, we assume to belong to some set $\Theta\subset\RR^n$ that we know.

We can consider the constrained least-squares estimator

$$
\hat\theta\in \argmin_{\theta\in\Theta}\|y-\theta\|_2^2=\argmin_{\theta\in\Theta} \sum_{i=1}^n (y_i-\theta_i)^2.
$$

We want to understand the performance of this estimator.
Note that for general $\Theta$, we cannot write down an explicit expression for this estimator. 
This is also not a maximum likelihood estimator. 
Thus, traditional statistical analysis techniques fail on this problem.

# Basic Inequality

Suppose $\theta^*\in\Theta$, then 

$$
\begin{equation}\tag{I}\label{I}
    \|\hat\theta - \theta^*\|_2^2 \leq 2\sum_{i=1}^n w_i(\hat\theta_i-\theta_i^*).
\end{equation}
$$

Moreover, if $\Theta$ is convex, then the $2$ factor can be reduced to $1$.

The proof is simply by expanding the inequality $$\|y-\hat\theta\|^2_2 \leq \|y-\theta^*\|^2_2$$.


# Noise Complexity

Why is the basic inequality $\eqref{I}$ useful? We can bound the MSE by

$$
\begin{align*}
    \EE_w\|\hat\theta-\theta^*\|_2^2&\leq 2\EE_w \sum_{i=1}^n w_i(\hat\theta_i-\theta_i^*)\\
    &= 2\EE_w \sum_{i=1}^n w_i\hat\theta_i \\
    &\leq 2\EE_w \sup_{\theta\in\Theta}\sum_{i=1}^n w_i\theta_i
\end{align*}
$$

note that in the last step we simply apply a uniform bound, because we want to avoid analyzing the complicated dependence of $\hat\theta$ on $w_i$. 

We can see the RHS is exactly the noise complexity of the set $\Theta$.
In the following, we show how to bound RHS in some structured $\Theta$.

### $\ell_p$ Balls


### Low-rank Matrices



# Localization

Suppose 


### Finite Class

We first illustrate how localization works in the simplest case, that is, where $\Theta$ only consist of a finite number of elements, *i.e.*, $$\Theta=\{\theta_1,\dots,\theta_N\}$$.

We devide the basic inequality $\eqref{I}$ by $$\|\hat\theta-\theta^*\|_2$$, leading to

$$
\begin{equation}
    \|\hat\theta - \theta^*\|_2 \leq 2\sum_{i=1}^n w_i\frac{\hat\theta_i-\theta_i^*}{\|\hat\theta-\theta^*\|_2}.
\end{equation}
$$



### Low-Rank Matrices