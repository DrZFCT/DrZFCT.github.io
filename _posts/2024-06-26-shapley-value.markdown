---
layout: post
title: Shapley Value
author: Kaizhao Liu

---

Economical Ideas.

# Example

Suppose Alice and Bob are selling cookies.

Neither works 0, Alice works 20, Bob works 30, Alice and Bob 100.

$$
\begin{align*}
    &\phi_{\text{Alice}}=\frac{1}{2}(20-0)+\frac{1}{2}(100-30)=45\\
    &\phi_{\text{Bob}}=\frac{1}{2}(30-0)+\frac{1}{2}(100-20)=55
\end{align*}
$$

How to generalize?


Suppose we have $d$ features $x_1,x_2,\dots,x_d$ and a value function $v(S)\in\RR$. 

Given a permutation $\pi$ of thesse $d$ features, we define Shapley value $\phi_i$ for feature $i$ as follows:

$$
\phi_i=\sum_{S\subset N\setminus\{i\}}\frac{|S|!(d-|S|-1)!}{d!}[v(S\cup\{i\})-v(S)].
$$

Claim:

$$
\sum_{i=1}^d\phi_i=v(N)-v(\emptyset)
$$

Now we need to choose $v(S)\in\RR$.

- conditional Shapley value: $v(S)=\EE[f(X)|X_S=x_s]$
- interventional Shapley: $v(S)=\EE[f(X)|\operatorname{do}(X_S=x_s)]$

