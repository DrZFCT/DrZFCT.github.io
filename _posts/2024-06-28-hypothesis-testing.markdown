---
layout: post
title: Hypothesis Testing
author: Kaizhao Liu

---


# Why Hypothesis Testing Instead of Classification?



# Multiple Hypothesis Testing

### Multiple Testing Problem

### FWER Control

The **family-wise error rate (FWER)** is the probability of falsely rejecting at least one true null hypothesis,

$$
\PP (V\geq 1).
$$

A procedure controls FWER at level $\alpha$ if $\PP(V\geq 1)\leq \alpha$, regardess of the number of true null hypothesis $n_0$.

### FDR Control

