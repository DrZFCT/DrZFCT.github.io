---
layout: post
title: Watermarks for LLM
author: Kaizhao Liu

---

Statistical watermark leverage the psuedorandomness during decoding.

Naively, the psuedorandomness enables users to reproduce the entire sequence given the key, just like reproducing any numerical experiment. Thus comparison between the reproduced sequence and the sequence at hand can be made, enabling the determination of whether the sequence at hand is produced by a LLM. However, this intuitive method assumes that each next-token-distribution of LLM is known, which is unrealistic given the unaccessiblity of closed-source LLM. 

The good news is that this naive method can be further developed leveraging statistical ideas. The problem at hand is naturally a hypothesis testing problem. To get rid of the troublesome next-token-distribution, we can construct a test statistic that is **pivotal** with respect to these distributions, i.e. the distribution of the test statistic is the same regardless of these distributions.




# Reflection on Popular Existing Decoding Methods

- **greedy methods**: simply outputs
- **sampling-based methods**: recursively samples from the next-word distribution
- **planning-based methods**: aims at maximizing the sequence likelihood

In [Permute-and-Flip: An optimally robust and watermarkable decoder for LLMs](https://arxiv.org/abs/2402.05864), the authors propose a new *sampling-based* decoding method

Similar to the idea of Gumbel watermark, we can inject psuedo-randomness during the sampling


# Sampling Methods and Construction of Pivotal Statistics

- **Gumbel-Max** 

- **Inverse Transform**

- **Alias Method**

Given a 

# Statistical Theory

Further, we can compare the efficacy of different pivotal statistics by modifying the established framework of hypothesis testing in mathematical statistics, as in [A Statistical Framework of Watermarks for Large Language Models: Pivot, Detection Efficiency and Optimal Rules](https://arxiv.org/abs/2404.01245). 