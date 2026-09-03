---
layout: post
title: Wasserstein Geometry
author: Kaizhao Liu
published_status: 1
---

We provide an introduction to Wasserstein geometry.
Although it looks like a Riemannian geometry, $\cP_2(\RR^d)$ is not a smooth manifold.

Modern treatment define as a length space, 

# Metric Derivative 

Metric space. Although in general we cannot make sense of 


# Review of Riemannian Geometry

### Geodesics

Recall the second derivative of a function along a curve in a standard Riemannian manifold:

$$\frac{d^2}{dt^2} f(\gamma(t)) = \text{Hess} f(\dot{\gamma}, \dot{\gamma}) + \langle \nabla f, \nabla_{\dot{\gamma}} \dot{\gamma} \rangle$$

### Geodesic Convexity

A set is geodesically convex if for all 

A function $f:\cM\to\RR$ is called $\alpha$-geodesic convex if 

first-order condition

$$
f(y)\geq f(x)+\left\langle \nabla f(x),\log_x(y)\right\rangle_x+\frac{\alpha}{2}\mathrm{d}^2(y,x)\quad\forall x,y\in\cM
$$

second-order condition

$$
\text{Hess} f(p)[v,v]\geq \alpha\|v\|_p^2\quad \forall p\in\cM,\forall p\in T_p\cM.
$$

Example:

# Tangent Space

Let $\mu\in\cP_{2,\rm ac}$. Define the tangent space to $\cP_{2,\rm ac}(\RR^d)$ at $\mu$ to be 

$$
T_\mu \cP_{2,\rm ac}(\RR^d):=\overline{\{\nabla\psi|\psi:\RR^d\to\RR \text{ compactly supported, smooth}\}}^{L^2(\mu)}.
$$

We endow $T_\mu \cP_{2,\rm ac}(\RR^d)$ with the $L^2(\mu)$ inner product.


### Benamou-Brenier theorem

Let $\mu_0,\mu_1\in\cP_{2,\rm ac}(\RR^d)$. Then,

$$
W_2^2(\mu_0,\mu_1)=\inf\left\{\int_0^1 \|v_t\|_{\mu_t}^2\bigg|\partial_t\mu_t+{\rm div}(\mu_t v_t)=0\right\}.
$$

The optimal curve is unique and is described by $X_t\sim\mu_t$, where $X_t=(1-t)X_0+tX_1$ and $(X_0,X_1)\sim\bar{\gamma}\in\Gamma_{\mu_0,\mu_1}$ with $\bar{\gamma}$ being an optimal coupling.

### Geodesics

Put it another way, in Lagrangian coordinates, every single particle travels in a straight line at a constant speed. 
In Eulerian coordinates, the acceleration of a fluid particle is given by the material derivative of the velocity field $v$:

$$\frac{D v}{Dt} = \partial_t v + (v \cdot \nabla)v$$

Since Wasserstein space restricts tangent vectors to be gradient fields, we write $v = \nabla \phi$. 
Using the vector calculus identity $(\nabla \phi \cdot \nabla)\nabla \phi = \nabla \left( \frac{1}{2} \vert{}\nabla \phi\vert{}^2 \right)$, the Eulerian acceleration becomes:

$$\frac{D v}{Dt} = \partial_t (\nabla \phi) + \nabla \left( \frac{1}{2} \vert{}\nabla \phi\vert{}^2 \right) = \nabla \left( \partial_t \phi + \frac{1}{2} \vert{}\nabla \phi\vert{}^2 \right)$$

Because the particles must have zero acceleration ($a = 0$), we arrive precisely at:$$\nabla \left( \partial_t \phi + \frac{1}{2} \vert{}\nabla \phi\vert{}^2 \right) = 0.$$
Removing the gradient gives the Hamilton-Jacobi equation $\partial_t \phi + \frac{1}{2}\vert{}\nabla \phi\vert{}^2 = 0$

Summarizing, a constant-speed geodesic satisfies the following system of equations:

$$
\begin{cases}
  \partial_t\mu_t&=-\nabla\cdot (\mu_t\nabla\phi_t)\\
  \partial\phi_t&=-\frac{1}{2}|\nabla\phi_t|^2.
\end{cases}
$$

### Exponential and Logarithmic Map

The logarithmic map $\log_\mu:\cP_{2,\rm ac}(\RR^d)\to T_\mu \cP_{2,\rm ac}(\RR^d)$, which is the inverse of the exponential map, has the following form:

$$
\log_\mu (\nu)=T_{\mu\to\nu}-{\rm id}
$$


# Otto Calculus

Just like Ito calculus,



We 

$$
\nabla\mkern-10mu\nabla \cF(\mu)=\nabla \delta\cF(\mu),
$$

where $\nabla$ on the right-hand side denotes the usual Euclidean gradient.

second-order rule

$$\text{Hess}_{W_2} \mathcal{F}(\mu)[\Phi, \Psi] =  \left\langle \Phi, \nabla^2 \left( \frac{\delta \mathcal{F}}{\delta \mu} \right) \Psi \right\rangle_\mu + \iint\frac{\delta^2 \mathcal{F}}{\delta \mu(x) \delta \mu(y)} \nabla \cdot (\mu \Phi)(x) \nabla \cdot (\mu \Psi)(y) \mathrm{d}x \mathrm{d}y$$

### Example: Wasserstein gradient of the squared Wasserstein distance

$$
\nabla\mkern-10mu\nabla W_2^2(\cdot,\nu)(\mu)=2({\rm id}-T_{\mu\to\nu})
$$

The proof uses the HJB equation.

### Example: Wasserstein gradient of KL-divergence


### Example: Wasserstein gradient of $\chi^2$-distance



# Bures-Wasserstein Geometry

The Bures-Wasserstein space ${\rm BW}(\RR^d)$ is the space of non-degenerate Gaussians on $\RR^d$ equipped with the Wasserstein metric.
Since Gaussians are parameterized by the mean and covariance, we can think of ${\rm BW}(\RR^d)\simeq \RR^d\times S_d^+(\RR)$, where $S_d^+(\RR)$ is the space of symmetric positive definite $d\times d$ matrices.


From the affine nature of the optimal transport map of a non-degenerate Gaussian, we can see that ${\rm BW}(\RR^d)$, when considered as the subspace of $\cP_{2,\rm ac}(\RR^d)$ is geodesically convex. 
Therefore, if $\cF:\cP_{2,\rm ac}\to \RR$ is an $\alpha$-geodesically convex functional, then $\cF$ is also $\alpha$-geodesically convex when viewed as a functional over ${\rm BW}(\RR^d)$.

The Riemannian structure of $\cP_{2,\rm ac}(\RR^d)$ descends to ${\rm BW}(\RR^d)$ and endows the Bures-Wasserstein space with the structure of a bona fide finite-dimensional Riemannian manifold.
The tangent space at $\mu\in{\rm BW}(\RR^d)$ is 

$$
\begin{align*}
  T_\mu {\rm BW}(\RR^d)&=\{\lambda (T_{\mu\to\nu}-{\rm id})|\lambda>0,\nu\in {\rm BW}(\RR^d)\}\\
  &=\{x\mapsto S(x-m)+a|a\in\RR^d,S\in S_d(\RR)\}
\end{align*}
$$

where $m=\EE_{X\sim\mu}[X]$ and $S_d(\RR)$ is the space of symmetric $d\times d$ matrices.

The Bures-Wasserstein gradient is the orthogonal projection of $\nabla\delta\cF(\mu)$ onto $T_\mu{\rm BW}(\RR^d)$, computed by

$$
x\mapsto (\int \nabla^2\delta\cF(\mu)\mathrm{d}\mu)(x-m)+\int \nabla\delta\cF(\mu)\mathrm{d}\mu.
$$

using integration by parts and the quadratic nature of the logarithm of Gaussian densities. Therefore, the BW gradient flow of the functional $\cF$ is the curve $(\mu_t=\cN(m_t,\Sigma_t))_{t\geq 0}$, where 

$$
\begin{align*}
  &\dot{m_t}=-\EE \nabla\delta\cF(\mu_t)(X_t),\\
  &\dot{\Sigma_t}=-\EE \nabla^2\delta\cF(\mu_t)(X_t)\Sigma_t-\Sigma_t \EE \nabla^2\delta\cF(\mu_t)(X_t),
\end{align*}
$$

and $X_t\sim\mu_t$.

# Gaussian Mixtures: Wasserstein over Bures-Wasserstein

Gaussian mixture are typically introduced as distributions of the form $\sum_{k=1}^K w_k\cN(m_k,\Sigma_k)$ for mixing weights $w_k\geq 0,\sum_{k=1}^K w_k=1$.
But we can define a Gaussian mixture more broadly as a measure of the form $\int \cN(m,\Sigma)\nu(\mathrm{d}m,\mathrm{d}\Sigma)$. This leads to a natural interpretation


Given $\nu\in\cP_2({\rm BW}(\RR^d))$, let $G_\nu$ denotes the corresponding Gaussian mixture $G_\nu=\int \cN(m,\Sigma)\nu(\mathrm{d}m,\mathrm{d}\Sigma)$.
Let $\cF$ be a functional over $\cP_2(\RR^d)$, and let $\cG$ be the corresponding functional over $\cP_2({\rm BW}(\RR^d))$ given by $\nu\mapsto \cF(G_\nu)$. The first variation of $\cG$ can be computed as 

$$
\delta\cG(\nu):(m,\Sigma)\mapsto \int \delta\cF(G_\nu)\mathrm{d}\cN(m,\Sigma)
$$

using linearity. Using the identification ${\rm BW}(\RR^d)\simeq \RR^d\times S_d^+(\RR)$, 

$$
\delta\cG(\nu):\mu\in {\rm BW}(\RR^d)\mapsto \int \delta\cF(G_\nu)\mathrm{d}\mu
$$

The Wasserstein gradient of $\cG(\nu)$ at  is the Riemannian gradient of $\delta\cG(\nu)$ evaluated at $(m,\Sigma)$, in other words, the Bures-Wasserstein gradient of $\delta\cG(\nu)$ at $\mu=\cN(m,\Sigma)$. 
Using the formulas from the previous section,
the Wasserstein gradient flow of $\cG$ is the curve $(\nu_t)_{t\geq 0}$ described as follows: $\nu_t=\text{Law}(m_t,\Sigma_t)$, where the random variables $m_t$ and $\Sigma_t$ are described by 

$$
\begin{align*}
  &\dot{m_t}=-\EE \nabla\delta\cF(G_{\nu_t})(X_t),\\
  &\dot{\Sigma_t}=-\EE \nabla^2\delta\cF(G_{\nu_t})(X_t)\Sigma_t-\Sigma_t \EE \nabla^2\delta\cF(\mu_t)(X_t),
\end{align*}
$$

and $X_t\sim\cN(m_t,\Sigma_t)$.

# Fisher-Rao Geometry

Hellinger distance

reaction equation 

$$
\partial_t\mu_t=\alpha_t\mu_t,
$$ 

where $\alpha_t:\RR^d\to\RR$ dictates the rate of reaction.

$$
\frac{1}{4}\int \alpha^2\mathrm{d}\mu.
$$


# Wasserstein-Fisher-Rao Geometry

$$
\partial_t\mu_t+{\rm div}(\mu_t v_t)=\alpha_t\mu_t
$$

$$
T_\mu \cM_{+}(\RR^d):=\overline{\{(\psi,\nabla\psi)|\psi:\RR^d\to\RR \text{ compactly supported, smooth}\}}^{L^2(\mu)}.
$$