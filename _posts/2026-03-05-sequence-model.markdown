---
layout: post
title: "Sequence Model"
author: Kaizhao Liu
published_status: 1
---

We illustrate basic inequality, noise complexity (e.g. Radamacher complexity, Gaussian complexity), and localization for the least square estimator in the simplest sequence model setting.

# Sequence Model

In the sequence model, we observe data $y_i$ for $i=1,\dots,d$ from the following model

$$
\begin{pmatrix} 
y_1 \\ 
\vdots \\ 
y_d 
\end{pmatrix} = 
\begin{pmatrix} 
\theta_1^* \\ 
\vdots \\ 
\theta_d^* \end{pmatrix} + \frac{\sigma}{\sqrt{n}} 
\begin{pmatrix} 
w_1 \\ 
\vdots \\ 
w_d 
\end{pmatrix}
$$

where the noise satisfies $\EE w_i=0$ and $\var(w_i)=1$. 
Note that the noise level has been rescaled by $1/\sqrt{n}$, reflecting the fact that we took the average of $n$ independent measurements.
Our goal is to estimate the groundtruth parameter $\theta^*$; here, we assume to belong to some set $\Theta\subset\RR^d$ that we know.

We can consider the constrained least-squares estimator

$$
\hat\theta\in \argmin_{\theta\in\Theta}\|y-\theta\|_2^2=\argmin_{\theta\in\Theta} \sum_{i=1}^n (y_i-\theta_i)^2.
$$

We want to understand the performance of this estimator.
Note that for general $\Theta$, we cannot write down an explicit expression for this estimator. 
This is also not a maximum likelihood estimator if $w_i$ are not Gaussian. 
Thus, traditional statistical analysis techniques fail on this problem.

Also note that this setup also includes the class of *fixed design regression problems*.
In this model, our goal is to estimate the regression function $f^*(x)=\EE[Y|X=x]$.
We are given $(x_i,y_i)$ pairs that are drawn with $y_i\sim \PP_{Y|X=x_i}$, and in the analysis, we condition on the values $$\{x_i\}_{i=1}^n$$ of the covariates. We can write this as 

$$
y_i=f^*(x_i)+\sigma w_i
$$

for some noise variables 
$$
\EE[w_i|x_i]=0
$$.
This is a special case of our sequence model if we make the identification $$\theta^*=(f^*(x_1),\dots,f^*(x_n))$$. The set $\Theta$ is then determined by a class of possible functions $\cF$ such that 

$$
\Theta=\{(f(x_1),\dots,f(x_n))|f\in\cF\}.
$$



# Basic Inequality

Suppose $\theta^*\in\Theta$, then 

$$
\begin{equation}\tag{I}\label{I}
    \|\hat\theta - \theta^*\|_2^2 \leq 2\frac{\sigma}{\sqrt{n}}\sum_{i=1}^n w_i(\hat\theta_i-\theta_i^*).
\end{equation}
$$

Moreover, if $\Theta$ is convex, then the $2$ factor can be reduced to $1$.

The proof is simply by expanding the inequality $$\|y-\hat\theta\|^2_2 \leq \|y-\theta^*\|^2_2$$.
The intuition is that when plugging $$y=\theta^*+\frac{\sigma}{\sqrt{n}}w$$ in, the desired quantity $$\|\hat\theta - \theta^*\|_2^2$$ appears in the LHS.

For the convex case, we use the first-order gradient condition for optimality 
$$ \left\langle \nabla_{\hat\theta} \|y-\hat\theta\|_2^2, \theta^*-\hat\theta \right\rangle \geq 0$$
instead.


# Noise Complexity

Why is the basic inequality $\eqref{I}$ useful? We can bound the MSE by

$$
\begin{align*}
    \EE_w\|\hat\theta-\theta^*\|_2^2&\leq 2\frac{\sigma}{\sqrt{n}}\EE_w \sum_{i=1}^n w_i(\hat\theta_i-\theta_i^*)\\
    &= 2\frac{\sigma}{\sqrt{n}}\EE_w \sum_{i=1}^n w_i\hat\theta_i \\
    &\leq 2\frac{\sigma}{\sqrt{n}}\EE_w \sup_{\theta\in\Theta}\sum_{i=1}^n w_i\theta_i
\end{align*}
$$

note that in the last step we simply apply a uniform bound, because we want to avoid analyzing the complicated dependence of $\hat\theta$ on $w_i$. 

We can see the RHS is exactly the **noise complexity** of the set $\Theta$.
In the following, we show how to bound RHS in some structured $\Theta$.


### Finite Classes

Say that $$\Theta=\{\theta^1,\dots,\theta^N\}$$ is a finite class with $$\|\theta^j\|_2\leq R$$ for each $j=1,\dots,N$ and each $w_i$ is a 1-sub-Gaussian variable. Then 

$$
\begin{equation}\label{eq:finiteclassslowrate}\tag{slow}
    \EE_w \max_{\theta\in \Theta}\left\langle w,\theta\right\rangle \leq R\sqrt{2\log N},
\end{equation}
$$

and 

$$
\EE_w\|\hat\theta-\theta^*\|_2^2\leq 4\sigma R\sqrt{\frac{\log N}{n}}.
$$

### $\ell_p$ Balls

First consider $p=2$, i.e. $$\Theta=\{\|\theta\|_2\leq R\}$$,

$$
\begin{align*}
    \EE_w \sup_{\|\theta\|_2\leq R}\sum_{i=1}^n w_i\theta_i &\leq \EE_w \sup_{\|\theta\|_2\leq R} \|\theta\|_2\|w\|_2 \\
    &=R\EE \|w\|_2\leq R\sqrt{\EE \|w\|_2^2}= R\sqrt{d}.
\end{align*}
$$

For $p=1$, i.e. $$\Theta=\{\|\theta\|_1\leq R\}$$, and that each $w_i$ is a 1-sub-Gaussian variable. Then,

$$
\EE_w \sup_{\|\theta\|_1\leq R}\sum_{i=1}^n w_i\theta_i \leq \EE_w \sup_{\|\theta\|_1\leq R} \|\theta\|_1\|w\|_\infty = R \EE_w \|w\|_\infty \leq 2R\sqrt{2\log d}.
$$

Note that the Gaussian/Rademacher complexity of $\ell_1$ balls has an exponential improvement over $\ell_2$ balls.

### Matrix Denoising

We write 

$$
\bY=\bM+\frac{\sigma}{\sqrt{n}}\bW
$$

where $\bY,\bM,\bW\in\RR^{d_1\times d_2}$. 

Suppose $$\|\bM\|_F\leq R$$, then it is just the sequence model of $\ell_2$ balls, with dimension $d_1d_2$.

To leverage the matrix structure, we additionally assume $\rk(\bM)\leq k$.

$$
\EE \|\hat\bM-\bM^*\|_F^2\lesssim R\sigma \sqrt{\frac{k(d_1+d_2)}{n}}.
$$

# Localization

In our previous discussion, we made a naive use of the basic inequality, in that we ignored the fact that the difference $\hat\theta-\theta^*$ on the RHS is likely to be small. A more careful use of the basic inequality exploits this fact directly, and often leads to a ``rate-doubling'' phenomenon.


### Finite Class

We first illustrate how localization works in the simplest case, that is, where $\Theta$ only consist of a finite number of elements, *i.e.*, $$\Theta=\{\theta_1,\dots,\theta_N\}$$.

We devide the basic inequality $\eqref{I}$ by $$\|\hat\theta-\theta^*\|_2$$, leading to

$$
\begin{equation}
    \|\hat\theta - \theta^*\|_2 \leq 2\sum_{i=1}^n w_i\frac{\hat\theta_i-\theta_i^*}{\|\hat\theta-\theta^*\|_2}.
\end{equation}
$$

In this step we suppose that $\hat\theta\neq \theta^*$; otherwise the error is zero.

Now the vector $$\frac{\hat\theta-\theta^*}{\|\hat\theta-\theta^*\|_2}$$ has norm one and we have a finite collection of these vectors. Consequently, by the usual Gaussian tail bound arguments, with probability at least $1-\exp{(-t^2/2)}$,

$$
\sum_{i=1}^n w_i\frac{\hat\theta_i-\theta_i^*}{\|\hat\theta-\theta^*\|_2} \leq \sqrt{2\log N}+t.
$$

Thus, with probability at least $1-\exp{(-t^2/2)}$,

$$
\begin{equation}\tag{fast}
    \|\hat\theta-\theta^*\|_2^2\lesssim \frac{\sigma^2\log N}{n}+t^2.
\end{equation}
$$

Comparing with $\eqref{eq:finiteclassslowrate}$, we see that our bound no longer depends on $R$ as it was removed by the rescaling argument, and our dependence is now $(\log N)/n$ instead of $\sqrt{(\log N)/n}$.

### Low-Rank Matrix Denoising

$$
\EE \|\hat\bM-\bM^*\|_F^2\lesssim \sigma^2 \frac{k(d_1+d_2)}{n}.
$$