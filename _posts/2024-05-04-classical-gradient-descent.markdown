---
layout: post
title: Classical Gradient Descent Analysis
author: Kaizhao Liu

---

In this article, I recap the classical gradient descent analysis.


# Gradient Flow


# Smoothness Analysis
A function $f \in C^1(\mathbb{R}^d)$ is said to be $L$-smooth if 
$$
\|\nabla f(y) - \nabla f(x)\| \leq L \|y - x\| 
$$
holds for any $x, y \in \mathbb{R}^d$.

If $f \in C^2(\mathbb{R}^d)$, the above condition is equivalent to 
$$
 \sup_{x} \| \nabla^2 f(x) \|_2 \leq L. 
$$
Consequently, we can show that smooth functions grow at most quadratically:

> If $f$ is $L$-smooth, we have 
> $$
f(y) \leq f(x) + \langle y - x, \nabla f(x) \rangle + \frac{L}{2} \|y - x\|^2 .
$$

### Convergence to Stationary Point

Consider the following gradient descent (GD) iterates as follows:
$$
x_{t+1} = x_t - \eta_t \nabla f(x_t)
$$
where $\eta_t$ is the learning rate (also called step size) of the $t$-th step.

If $\eta_t<\frac{2}{L}$, then $f(x_{t+1})\leq f(x_t)$.

If $\eta_t=\eta<\frac{2}{L}$, then we have 

$$
f(x_{t+1})  \leq  f(x_t) + \langle x_{t+1} - x_t, \nabla f(x_t) \rangle + \frac{L}{2} \|x_{t+1} - x_t\|^2 = f(x_t) +\left( -\eta_t + \frac{L \eta_t^2}{2} \right) \|\nabla f(x_t)\|^2 .
$$

Rearranging, we get 

$$
\eta (1-\frac{L}{2}\eta)\cdot\|\nabla f(x_t)\|^2 \leq  f(x_t)-f(x_{t+1}).
$$


# Convex Analysis


# Effect of Finite Learning Rate: a Phenomenological Model

To analysis the effect of finite learning rate, let us first investigate a *phenomenological* model, to reproduce some phenomena observed in real neural network training process. Unlike toy models that can be analytically calculated but give no insight, phenomenological models can provide feature characteristic that can be generalized to a variety of scenarios.

Namely we consider the quadratic loss:

$$
f(x,y)=\frac{1}{2}y^\top H(x) y .
$$

where $x\in \RR^m$, $y\in\RR^n$, and $H(x)\in \RR^{n+m}$ is positive definite.
Then it is easy to see the global minima is $M=\\{(x,y):y=0\\}$.

The GD update is

$$
\left\{\begin{matrix}
 x_{t+1}=x_t-\frac{\eta}{2}y_t^\top\nabla H(x)y_t   \\
  y_{t+1}=y_t-\eta H(x)y_t
\end{matrix}\right. .
$$

The Hessian near $M$ is 

$$
\nabla^2f=\begin{pmatrix}
 y^\to\nabla^2 H(x) & \nabla H(x) y\\
 y^\top \nabla H(x) & H(x)
\end{pmatrix}\approx
\begin{pmatrix}
0  &  0\\
0  & H(x)
\end{pmatrix}.
$$



# GD Converges to Max-Margin Solutions

Consider the binary classification problem. Let $\\{(x_i,y_i)\\}_{i=1}^n$ with $x_i\in\RR^d$ and $y_i\in\\{-1,+1\\}$ be the training data.
Assume 
- (*linear separability*) there exists a $w\in\RR^d$ such that $w^\top x_iy_i\geq 0$.
- $\max_i \\|x_i\\|\leq B$. 

We use a linear model $f_w(x)=w^\top x$ and consider the solution find by GD 

$$
w_{t+1}=w_t-\eta \nabla L(w_t)
$$

under the exponential loss

$$
L(w)=\frac{1}{n}\sum_{i=1}^ne^{-w^\top x_iy_i}.
$$

We will show that regardless of initialization, $w_t$ converges to the max-margin solution $w^*$

$$
w^*=\arg\max_{\|w\|=1}\gamma(w)\qquad \gamma^*=\gamma(w^*)
$$

where $\gamma(w)=\min_{i\in[n]}w^\top x_iy_i$ is the margin.

### Why Max-Margin Solutions?

We first need to understand the minimizers of $L(\cdot)$.
- For any $w\in\RR^d$ that perfectly classifies all data, $L(\lambda w)\to 0$ as $\lambda\to\infty$.
- This shows that the minimizers of $L(\cdot)$ are unbounded.

Now note that 

$$
\nabla L(w)=-\frac{1}{n}\sum_{i=1}^ne^{-w^\top x_iy_i}x_iy_i,
$$

when $\\|w\\|\to\infty$, the dominant term is 


### Property of Exponetial Loss

Exponential loss has very nice properties. As loss decreases to zero, sharpness decreases to zero.
Moreover, the gradient is well-controlled by the loss.
- $v^\top \nabla^2 L(w)v\leq BL(w)\\|v\\|^2$
- $\gamma^*L(w)\leq \\|\nabla L(w)\\|\leq BL(w)$



### Convergence to Max-Margin

To provide a rigorous proof, note that mathematically, the problem at hand is to prove the convergence of a number sequence to a limit, and determine its convergence rate.

As

$$
\gamma\left(\frac{w_{t+1}}{\|w_{t+1}\|}\right)=\frac{\min_i w_{t+1}^\top x_iy_i}{\|w_{t+1}\|}\leq \gamma^*,
$$

we only need to lower bound $\min_i w_{t+1}^\top x_iy_i$ and upper bound $\\|w_{t+1}\\|$ by something we can handle.

The norm can also be upper bounded by the derivative of the loss:

$$
\|w_{t+1}\|\leq \|w_0\|+\eta\sum_{s=0}^t \|\nabla L(w_s)\|
$$

The margin can be lower bounded by the loss:

$$
\min_i w_{t+1}^\top x_iy_i\geq -\log L(w_t) -\log n.
$$

To proceed we need a refined version of descent lemma:

Assume $\eta$ to be sufficiently small s.t. in each step $L(w_{t+1})\leq L(w_t)$, then

$$
\begin{align*}
    L(w_{t+1})&\leq L(w_t)-\eta \|\nabla L(w_t)\|^2+\frac{\eta^2}{2}\inf_{\beta\in[0,1]}\nabla L(w_t)^\top \nabla^2 L(w_t-\beta\eta \nabla L(w_t))\nabla L(w_t)\\
        &\leq L(w_t)-\eta \|\nabla L(w_t)\|^2+\frac{\eta^2B}{2}\|\nabla L(w_t)\|^2\inf_{\beta\in[0,1]}L(w_t-\beta\eta \nabla L(w_t))\\
        &\leq L(w_t)-\eta \|\nabla L(w_t)\|^2+\frac{\eta^2B}{2}\|\nabla L(w_t)\|^2L(w_t).
\end{align*}
$$

Proceeding, we have

$$
\begin{align*}
    L(w_{t+1})&\leq L(w_t)\left(1+\frac{\eta^2B}{2}\|\nabla L(w_t)\|^2-\eta \frac{\|\nabla L(w_t)\|^2}{L(w_t)}\right)\\
        &\leq L(w_t)\left(1+\frac{\eta^2B}{2}\|\nabla L(w_t)\|^2-\eta\gamma^* \|\nabla L(w_t)\|\right)\\
        &\leq L(w_t)\exp\left(\frac{\eta^2B}{2}\|\nabla L(w_t)\|^2-\eta\gamma^* \|\nabla L(w_t)\|\right)
\end{align*}
$$

and thus 

$$
-\log L(w_t)\geq -\log L(w_0) + \eta\gamma^* \sum_{s=0}^t \|\nabla L(w_s)\| - \frac{\eta^2B}{2}\sum_{s=0}^t \|\nabla L(w_s)\|^2.
$$

Therefore, as long as these two summation condition holds:
- $\lim_{t\to\infty}\sum_{s=0}^t \\|\nabla L(w_s)\\|=+\infty$
- $\lim_{t\to\infty}\sum_{s=0}^t \\|\nabla L(w_s)\\|^2<\infty$

we will have $\lim_{t\to\infty}\gamma\left(\frac{w_{t+1}}{\\|w_{t+1}\\|}\right)\geq \gamma^*$.

### Convergence Rate

To explain why the above summation condition holds and to prepare for the proof of the $O(\frac{1}{\log t})$ convergence rate, let us first consider the convergence of loss.

Inspired by standard results in convex optimization, we can expect that $L(w_t)=O(\frac{1}{t})$.


If $L(w_t)=\Theta(\frac{1}{t})$, then $\sum_{s=0}^t \\|\nabla L(w_s)\\| \asymp \sum_{s=1}^t\frac{1}{s}$ and $\lim_{t\to\infty}\sum_{s=0}^t \\|\nabla L(w_s)\\|^2\asymp \sum_{s=1}^t\frac{1}{s^2}$, so the summation condition holds and the convergence rate is $O(\frac{1}{\log t})$.

Note that we can not directly apply those results as they require that the minima are located in a compact domain, which is not the case here.
So we need an alternative proof of 

$$
L(w_t)=\Theta(\frac{1}{t}).
$$

The basic tool is still the descent lemma. Assume the learning rate is small s.t. $\eta\leq \frac{1}{BL(w_t)}$, we have

$$
L(w_{t+1})\leq L(w_t) - \frac{\eta}{2} \|\nabla L(w_t)\|^2
$$


and we also have 

$$
L(w_{t+1})\geq L(w_t) - \eta \|\nabla L(w_t)\|^2. 
$$

From these equations we can obtain $L(w_t)=\Theta(\frac{1}{t})$, guided by $\frac{1}{t+1}-\frac{1}{t}=\Theta(\frac{1}{t^2})$.
Formally, for a positive sequence $a_t$ that satisfies $a_{t+1}\leq a_t -\epsilon a_t^2$ where $\epsilon$ is a small positive number, we can deduce

$$
\begin{align*}
    \frac{1}{a_{t+1}}&\geq \frac{1}{a_t}+\frac{\epsilon}{1-\epsilon a_t}\\
        &\geq \frac{1}{a_t}+\epsilon .
\end{align*}
$$