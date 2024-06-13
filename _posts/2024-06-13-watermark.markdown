---
layout: post
title: Watermarks for LLM
author: Kaizhao Liu

---








# Reflection on Popular Existing Decoding Methods

- **greedy methods**: simply outputs
- **sampling-based methods**: recursively samples from the next-word distribution
- **planning-based methods**: aims at maximizing the sequence likelihood

In [Permute-and-Flip: An optimally robust and watermarkable decoder for LLMs](https://arxiv.org/abs/2402.05864), the authors propose a new *sampling-based* decoding method

Similar to the idea of Gumbel watermark, we can inject psuedo-randomness during the sampling