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


# Debiasing Green-Red List 

The Green-Red list specify a green list and let LLMs only output tokens from the green list. We can denote this output distribution by $Q_w$.
Then LLM-generated texts can be detected by counting the numbers of tokens from the green list.
However, this approach modifies the generated distribution of LLMs, which might result in degraded generation results.

In, [Debiasing Watermarks for Large Language Models via Maximal Coupling](https://arxiv.org/abs/2411.11203), the authors proposed a way to debias this watermark by considering the maximal coupling between $Q_w$ and $P_w$.
The output, which is the marginal, is always $P_w$, but we also know the underlying coupling $\xi$. When the output is from the green list, $\xi$ is typically smaller.
Thus we can consider the pivotal staistics $\sum \xi$ (sum over tokens from green list) for detection.

Another way is to use higher criticism.


# Statistical Theory of Watermarks Detection

Further, we can compare the efficacy of different pivotal statistics by modifying the established framework of hypothesis testing in mathematical statistics, as in [A Statistical Framework of Watermarks for Large Language Models: Pivot, Detection Efficiency and Optimal Rules](https://arxiv.org/abs/2404.01245). 



# Detection of Watermarks in Hybrid AI-Human Texts

[Robust Detection of Watermarks for Large Language Models Under Human Edits](https://arxiv.org/abs/2411.13868)

Formulate as a mixture detection problem, different from previous formulations, so optimal test might be different.
goodness of fit test

Empirical work
[On the Empirical Power of Goodness-of-Fit Tests in Watermark Detection](https://arxiv.org/abs/2510.03944)

# Estimation of Watermark Proportions in Hybrid AI-Human Texts

Some works investigate the problem of identifying watermarked segments within mixed-source texts, but information theoretically it is more difficult than detecting their aggregate presence.


[Optimal Estimation of Watermark Proportions in Hybrid AI-Human Texts](https://arxiv.org/abs/2506.22343)


watermarks for diffusion models?