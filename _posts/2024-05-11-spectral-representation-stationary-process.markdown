---
layout: post
title: The Spectral Representation of a Stationary Prcoess
author: Kaizhao Liu

---

The spectral representation of a stationary process $\{X_t\}$ essentially decomposes $\{X_t\}$ into a sum of sinusoidal components with uncorrelated random coefficients. This is an analogue of the more familiar Fourier representation of deterministic functions.

The analysis of stationary process by means of their spectral representations is often referred to as the *frequency domain* analysis of time series. It is equivalent to *time domain* analysis based on the autocovariance function, but provides an alternative way of viewing the process which for some applications may be more illuminating. The spectral point of view is particularly advantageous in the analysis of multivariate stationary processes and in the analysis of very large datasets, for which numerical calculations can be performed rapidly using the FFT.

# Complex-Valued Stationary Time Series

A process $\{X_t\}$ is a **complex-valued stationary process** if $\EE |X_t|^2<\infty$, $\EE X_t$ is independent of $t$,and $\EE (X_{t+h}\bar{X_t})$ is independent of $t$.

Its **autocovariance function** $\gamma$ is defined to be

$$
\gamma(h)=\EE(X_{t+h}\bar{X}_t)-\EE X_{t+h}\EE \bar{X}_t.
$$

It can be seen immediately that $\gamma$ satisfies 

$$
\begin{align}
    & \gamma(0)\geq 0\\
    & |\gamma(h)|\leq \gamma(0),\quad\forall h\in\ZZ \\
    & \gamma(h)=\overline{\gamma(-h)},\quad\forall h\in\ZZ
\end{align}
$$

Conversely, a function $K$ defined on the integers is the autocovariance function of a stationary time series if and only if $K$ is Hermitian and non-negative definite.

# Herglotz's Theorem

A complex-valued function $\gamma$ defined on the integers is non-negative definite if and only if 

$$
\gamma(h)=\int_{-\pi}^\pi e^{ihx}\mathrm{d} F(x), \forall h\in\ZZ
$$

where $F$ is a right-continuous, non-decreasing, bounded function on $[-\pi,\pi]$ and $F(-\pi)=0$.