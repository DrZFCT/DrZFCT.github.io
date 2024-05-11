---
layout: post
title: Classical Gradient Descent Analysis
author: Kaizhao Liu

---

In this article, I recap the classical gradient descent analysis.


# Gradient Flow



# Convex Analysis


# Effect of Finite Learning Rate: a Phenomenological Model

To analysis the effect of finite learning rate, let us first investigate a *phenomenological* model, to reproduce some phenomena observed in real neural network training process. Unlike toy models that can be analytically calculated but give no insight, phenomenological models can provide feature characteristic that can be generalized to a variety of scenarios.

Namely we consider the quadratic loss:

$$
f(x)=\frac{1}{2}x^\top Ax .
$$

