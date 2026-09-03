---
layout: post
title: "Wasserstein Gradient Flows: Applications"
author: Kaizhao Liu
published_status: 1
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

# Sampling 

Our theory proves that the Fokker-Planck equation (which governs the marginal law of the stochastic Langevin diffusion) is exactly the Wasserstein gradient flow of the KL divergence.

By proving that sampling is mathematically identical to optimization, practitioners can borrow state-of-the-art algorithms from deep learning and convex optimization (like Proximal Gradient, Mirror Descent, and Nesterov Acceleration) to remove asymptotic bias and drastically speed up the convergence of their MCMC samplers.

$$
\tag{2}
\partial_t\mu_t=\Delta \mu_t+{\rm div}(\mu_t\nabla V).
$$

which is the Fokker-Planck equation



# Non-parametric Maximum Likelihood

The NPMLE problem can be mathematically reformulated as minimizing an entropic optimal transport cost, which can be approached via gradient flows.




# Mean-Field Neural Networks

Standard gradient descent for two-layer neural networks operates in a highly non-convex parameter space, making it notoriously difficult to mathematically prove why or how neural networks actually converge to good solutions during training.

By lifting the optimization problem from the finite parameters of the network to a probability distribution over the parameters (the "mean-field" regime), the loss landscape becomes much better behaved.  

# Transformers

Unnormalized self-attention on a sphere is exactly a WGF that minimizes interaction energy.