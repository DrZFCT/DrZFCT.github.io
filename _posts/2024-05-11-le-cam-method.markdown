---
layout: post
title: Le Cam Methods
author: Kaizhao Liu

---

In this article, I breifly explain the idea of Le Cam methods.


# Two-Point Argument

The goal is to lower bound the minimax risk

$$
R^*(\Theta)=\inf_{\hat\theta}\sup_{\theta\in\Theta}\EE_\theta \ell(\theta,\hat\theta).
$$

We first present a version of LeCam's method as in [Lecture notes on: Information-theoretic methods for high-dimensional statistics](http://www.stat.yale.edu/~yw562/teaching/it-stats.pdf).
Suppose the loss function $\ell:\Theta\times\Theta\to\RR_+$ satisfies the following $\alpha$-triangle inequality

$$
\ell(\theta_0,\theta_1)\leq \alpha(\ell(\theta_0,\theta)+\ell(\theta_1,\theta))
$$

for some $\alpha>0$, then 

$$
R^*(\Theta)\geq \sup_{\theta_0,\theta_1\in\Theta} \frac{\ell(\theta_0,\theta_1)}{4\alpha}(1-\text{TV}(\PP_{\theta_0},\PP_{\theta_1})).
$$


# Interpretation: From Estimation to Testing

[High-dimensional statistics: A non-asymptotic viewpoint]()


# Sharpened Bound for Quadratic loss

