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

where $\rho(t)$ is positive unit-trace operator on the system's Hilbert space $\cH$, and $$\cL_D\rho(t)=\sum_d \cD[V_d]\rho(t)$$  ,where $V_d$ are operators on $\cH$ and 

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

The state of the systen $\rho$ can then be represented as a real vector $\br$



# Characterization of the Stationary States

Let

$$
\mathfrak{E}=\{\rho|\dot{\rho}=\cL(\rho)=0\}
$$

be the set of steady states for the dynamic given by Equation $\ref{eq:lindblad}$.



Reference: [Stabilizing open quantum systems by Markovian reservoir engineering
](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.81.062306)