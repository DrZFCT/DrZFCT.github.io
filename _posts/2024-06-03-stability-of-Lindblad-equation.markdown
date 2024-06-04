---
layout: post
title: Stability of Lindblad's Equation
author: Kaizhao Liu

---



Under certain conditions the evolution of a quantum system interacting with its environment can be described by a quantum dynamical semigroup and shown to satisfy a Lindblad master equation

$$
\begin{equation}\label{eq:lindblad}
    \dot{\rho}(t)=-i[H,\rho]+\cL_D\rho(t)
\end{equation}
$$

where $\rho(t)$ is positive unit-trace operator



# Bloch Representation

From a mathematical point of view the Lindblad master equation is a complex matrix differential equation.
To use dynamical systems tools to study its stationary solutions and the stability, it is desirable to find a real representation for $\ref{eq:lindblad}$
by choosing an orthonormal basis $\bm \sigma=\\{\sigma_k\\}_{k=1}^{N^2}$ for all Hermitian matrices on $\cH$.


# Characterization of the Stationary States

Let

$$
\mathfrak{E}=\{\rho|\dot{\rho}=\cL(\rho)=0\}
$$

be the set of steady states for the dynamic given by $\ref{eq:lindblad}$



Reference: [Stabilizing open quantum systems by Markovian reservoir engineering
](https://journals.aps.org/pra/abstract/10.1103/PhysRevA.81.062306)