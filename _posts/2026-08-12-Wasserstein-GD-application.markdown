---
layout: post
title: "Wasserstein Gradient Flows: Applications"
author: Kaizhao Liu
published_status: 1
tags:
  - Optimal Transport
  - Wasserstein Geometry
  - Sampling
  - Machine Learning
---

In this post, we summarize several important applications of the theory of Wasserstein gradient flows in statistics and machine learning.

# Variational Inference

$$
q_*=\arg\min_{q\in\cQ} \KL(q\|\pi)
$$

For this problem, our previous theory proves that minimizing the Kullback-Leibler (KL) divergence to a log-concave distribution over the Wasserstein space is a strongly convex problem. 

$\pi\propto \exp(-V)$

$$
\tag{1}
\partial_t\mu_t={\rm div}(\mu_t\nabla\log \frac{\mu_t}{\pi})
$$

### Gaussian VI

Going beyond the Laplace approximation, we can ask for the optimal Gaussian approximation, which is formulated as the VI problem

$$
q_*=\arg\min_{q\in{\rm BW}(\RR^d)} \KL(q\|\pi)
$$

For the KL ddivergence $\cF=\KL(\cdot\|\pi)$, 

Therefore, the BW gradient flow of the functional $\KL(\cdot\|\pi)$, where $\pi\propto \exp(-V)$, is the curve $(q_t=\cN(m_t,\Sigma_t))_{t\geq 0}$, where 

$$
\begin{align*}
  &\dot{m}_t=-\EE \nabla V(X_t)\\
  &\dot{\Sigma}_t=2I-\EE \nabla^2 V(X_t)\Sigma_t-\Sigma_t\EE \nabla^2V(X_t)
\end{align*}
$$

and $X_t\sim q_t$.

### Mean-Field VI

Another important variational family is the class $\cQ=\cP_{2,{\rm ac}}(\RR)^{\otimes d}$ of product measures over $\RR^d$, in which case the problem is known as mean-field VI:

$$
q_*=\arg\min_{q\in\cP_{2,{\rm ac}}(\RR)^{\otimes d}} \KL(q\|\pi).
$$

In this section, we describe an approach based on finite-dimensional parameterization. 
The idea is to parameterize an element $q\in \cP_{2,{\rm ac}}(\RR)^{\otimes d}$ via the Brenier map $T_{\rho\to q}$ from the standard Gaussian measure $\rho$.
Since both $\rho$ and $q$ are product measures, the transport map is separable, i.e., it is of the form $T_{\rho\to q}(x)=(T_1(x_1),\dots,T_d(x_d))$ for some univariate (and increasing) maps $T_i:\RR\to\RR$.

However, the class of such mapsis still infinite-dimensional and needs to be further restricted for implementation.
To do so, we take a finite family $\cT:=\{T_1,\dots,T_N\}$ of optimal transport maps called the *dictionary*, and take as our eventual family of map the set $\operatorname{cone}(\cT)$ of all conic combinations of elements of $\cT$:

$$
\operatorname{cone}(\cT)=\left\{\sum_{i=1}^N \lambda_iT_i \bigg\vert \lambda\in \RR_+^N \right\}.
$$

This set is now finite-dimensional, and in fact is parameterized by the positive orthant $\RR_+^N$.
Therefore, we can now optimize the functional $\lambda\mapsto \KL(\rho^\lambda\mmid \pi)$ over $\RR_+^N$.
Note that we have replaced our original variational family $\cP_{2,\rm{ac}}(\RR)^{\otimes d}$ with the smaller set $\operatorname{cone}(\cT)_\sharp\rho$, but the hope is that for an appropriate choice of $\cT$, the family $\operatorname{cone}(\cT)_\sharp\rho$ is expressive enough to approximately capture all of $\cP_{2,\rm{ac}}(\RR)^{\otimes d}$.

The key observation is that the map $(\RR_+^N,\|\cdot\|_Q)\to (\operatorname{cone}(\cT)_\sharp\rho,W_2)$ $\lambda\mapsto\rho^\lambda$ is an isometry, where $\|x\|_Q^2:=\left\langle x,Qx\right\rangle$ and $Q$ is the $N\times N$ matrix with entries 

$$
Q_{ij}:=\left\langle T_i,T_j\right\rangle_\rho.
$$


Denote $T^\lambda:=\sum_{i=1}^N \lambda_iT_i$ and $\rho^\lambda:=(T^\lambda)_\sharp\rho$.
The Wasserstein gradient flow of $\KL(\cdot\mmid\pi)$ restricted to $\operatorname{cone}(\cT)_\sharp\rho$ is given by $(\rho^{\lambda(t)})_{t\geq 0}$, where 

$$
\dot{\lambda}_T=
$$


### Stein Variational Gradient Descent

We now ask whether we can minimize the KL divergence over the family of empirical measures.

Instead of doing the steepest descent in $L^2(\mu)$, we do the steepest descent with respect to a RKHS.



# Sampling 



Our theory proves that the Fokker-Planck equation (which governs the marginal law of the stochastic Langevin diffusion) is exactly the Wasserstein gradient flow of the KL divergence.

By proving that sampling is mathematically identical to optimization, practitioners can borrow state-of-the-art algorithms from deep learning and convex optimization (like Proximal Gradient, Mirror Descent, and Nesterov Acceleration) to remove asymptotic bias and drastically speed up the convergence of their MCMC samplers.

$$
\tag{2}
\partial_t\mu_t=\Delta \mu_t+{\rm div}(\mu_t\nabla V).
$$

which is the Fokker-Planck equation

# Interacting Particle Systems

If there is an interaction energy.

More generally, 

### Mean Field VI


One can show that for a functional $\cF$, the component of the Wasserstein gradient $\nabla\mkern-10mu\nabla\cF(\mu)$ which is tangential to the space of product measures takes the form 

$$
x\mapsto \left(\int \nabla\mkern-10mu\nabla\cF(\mu)(x)\mu(\d x_1,\dots,\d x_{i-1},\d x_{i+1},\dots,\d x_d)\right)_{i=1}^d.
$$

Note that the particle approach does not apply because the Wasserstein gradient of the KL divergence is not defined for discrete measures. We therefore use the stochastic dynamics to circumvent this issue:

$$
\d X_t=-\int \nabla_1 W(X_t,y)\mu_t(\d y)\d t+\sqrt{2}\d B_t
$$

where $\mu_t=\operatorname{Law}(X_t)$, $\nabla_1$ denotes the gradient taken with respect to the first argument, and 

$$
W(x,y):=\sum_{i=1}^d V(y_1,\dots,y_{i-1},x_i,y_{i+1},\dots, y_d).
$$

The corresponding interacting particle system is given by 

$$
\d X_t^j=-\frac{1}{N-1}\su
$$

### Birth-Death Sampling

Fisher-Rao gradient flow can also be implemented by a stochastic birth–death process, in the same sense that Langevin diffusion implements the Wasserstein gradient flow of KL.



# Non-parametric Maximum Likelihood

The NPMLE problem can be mathematically reformulated as minimizing an entropic optimal transport cost, which can be approached via gradient flows.

Consider a Gaussian mixture on $\RR^d$ with density given by:

$$
G_\rho=\int_{\RR^d}\phi(\cdot-y)\rho(\d y)=\phi * \rho.
$$


# Mean-Field Neural Networks

Standard gradient descent for two-layer neural networks operates in a highly non-convex parameter space, making it notoriously difficult to mathematically prove why or how neural networks actually converge to good solutions during training.

By lifting the optimization problem from the finite parameters of the network to a probability distribution over the parameters (the "mean-field" regime), the loss landscape becomes much better behaved.  

# Transformers

Unnormalized self-attention on a sphere is exactly a WGF that minimizes interaction energy.
