---
layout: post
title: Stability of Lindblad's Equation
author: Kaizhao Liu

---



Under certain conditions the evolution of a quantum system interacting with its environment can be described by a quantum dynamical semigroup and shown to satisfy a Lindblad master equation

$$
\begin{equation}\label{eq:lindblad}\tag{1}
    \dot{\rho}(t)=-i[H,\rho]+\cL_D\rho(t) 
\end{equation}
$$

where $\rho(t)$ is positive unit-trace operator on the system's Hilbert space $\cH$, and $$\cL_D\rho(t)=\sum_d \cD[V_d]\rho(t)$$, where $V_d$ are operators on $\cH$ and 

$$
\cD[V_d]\rho(t):=V_d\rho V_d^\dagger -\frac{1}{2}\{V_d^\dagger V_d,\rho\}.
$$

We consider $\cH\simeq \CC^N$.

# Bloch Representation

From a mathematical point of view the Lindblad master equation is a complex matrix differential equation.
To use dynamical systems tools to study its stationary solutions and the stability, it is desirable to find a real representation for $\ref{eq:lindblad}$
by choosing an orthonormal basis $\mathbb \sigma=\\{\sigma_k\\}_{k=1}^{N^2}$ for all Hermitian matrices on $\cH$.

For $k=r+(s-1)N$ and $1\leq r<s\leq N$, the **generalized Pauli matrices** is defined by $\sigma_k=\lambda_{rs}$ where

$$
\begin{align}
    & \lambda_{rs}=\frac{1}{\sqrt{2}}(\ket{r}\bra{s}+\ket{s}\bra{r})\\
    & \lambda_{sr}=\frac{1}{\sqrt{2}}(-i\ket{r}\bra{s}+i\ket{s}\bra{r})\\
    & \lambda_{rr}=\frac{1}{\sqrt{r^2+r}}(\sum_{k=1}^r \ket{k}\bra{k}-r\ket{r+1}\bra{r+1})
\end{align}
$$

and $\sigma_{N^2}=\frac{1}{\sqrt{N}}\II$.

The state of the systen $\rho$ can then be represented as a real vector $\br=(r_k)\in\RR^{N^2}$ of coordinates with respect to this basis $$\{\sigma_k\}$$,

$$
\rho=\sum_{k=1}^{N^2}r_k\sigma_k,
$$

where $r_k$ can be calculated by $\tr(\rho\sigma_k)$.

Thus the Lindblad dynamics $\ref{eq:lindblad}$ can be rewritten as a real systems of differential equations:

$$
\dot{\br}=(\bL+\sum_d \bD^{(d)})\br,
$$

where $\bL,\bD^{(d)}$ are real $N^2\times N^2$ matrices with entries

$$
\begin{align}
    &L_{mn}=\tr(iH[\sigma_m,\sigma_n])\\
    &D^{(d)}_{mn}=\tr(V_d^\dagger\sigma_m V_d\sigma_n)-\frac{1}{2}\tr(V_d^\dagger V_d\{\sigma_m,\sigma_n\})
\end{align}
$$

# Characterization of the Stationary States

Let

$$
\mathfrak{E}_{ss}=\{\rho|\dot{\rho}=\cL(\rho)=0\}
$$

be the set of steady states for the dynamic given by Equation $\ref{eq:lindblad}$.
It is convex as Equation $\ref{eq:lindblad}$ is linear.

We can show that $\mathfrak{E}_{ss}$ is always non-empty using Brouwer's Fixed Point Theorem.

As any convex set is the convex hull of its extremal points,
next we want to characterize the extremal points of $\mathfrak{E}_{ss}$.

If $\rho_s=s\rho_0+(1-s)\rho_1$ is a convex combination of the positive operators $\rho_0,\rho_1$ with $0<s<1$,
then the support of $\rho_0$ and $\rho_1$ is contained in the support of $\rho_s$. Further, $\text{rank}(\rho_s)$ is constant for all $0<s<1$.
- The support of $\rho$ is defined by $\text{supp}(\rho)^\perp:=\{v\in\cH|v^\dagger\rho v=0\}$. As $\rho$ is positive, we have $\{v|v^\dagger\rho v=0\}=\{v\in\cH|\rho v=0\}=\ker \rho$, so $\text{supp}(\rho)=\text{im}\rho$.
- For $v\in \text{supp}(\rho_s)^\perp$, $0=v^\dagger\rho_s v = s v^\dagger\rho_0 v + (1-s)v^\dagger\rho_1 v$. Thus, $v^\dagger\rho_0 v=v^\dagger\rho_1 v=0$, so $\text{supp}(\rho_0)\subset\text{supp}(\rho_s)$ and $\text{supp}(\rho_1)\subset\text{supp}(\rho_s)$.


Reference: [Stabilizing open quantum systems by Markovian reservoir engineering
](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.81.062306)