---
layout: post
title: Point Estimation
author: Kaizhao Liu

---

Let $X = (X_1, \cdots , X_n)$ be a sample from a population
$\PP_\theta \in \cP$, where $\theta \in \Theta$.
An estimator of $\gamma(\theta)$ is a measurable function from the range of $X$ to $\gamma(\Theta)$.

We use squared error loss (MSE)

$$ 
R_T(\theta)=\EE [(T-\gamma(\theta))^2|\theta]
$$

throughout the article.

# Minimaxity

For a parametric family $\PP_\theta \in \cP$ and an estimator $T\in \cT$ among a class of estimators $T\in \cT$, the maximum risk of $T$ is defined to be the worst case scenario: 

$$
\sup_{\theta\in \Theta} R_T(\theta) .
$$

The minimax risk is defined to be 

$$
R_n=\inf_{T\in \cT} \sup_{\theta\in \Theta} R_T(\theta) .
$$

An esimator $T$ is minimax optimal if its maximum risk achieves the minimax rate.

In general, it is hard to find a minimax optimal estimator. Therefore, we are appeal to some weaker theoretical properties instead. 

For example, when finding an exact minimax estimator is difficult, we may also find a minimax estimator *asymptotically*, i.e $\hat T$ such that

$$
\sup_{\theta\in \Theta} R_{\hat T}(\theta)\asymp \inf_{T\in \cT} \sup_{\theta\in \Theta} R_T(\theta).
$$

Some other weaker theoretical properties is explained in the next section.

# Admissibility, Unbiasedness, Consistency

A decision rule $T \in \cT$ is called **admissible** if and only if there does not exist any $T' \in \cT$ that has samller risk than $T$ uniformly over $\PP_\theta$.

Here is the celebrated theorem of *Rao and Blackwell*, which states that any admissible estimator must be functions of sufficient statistics: 
*Let $T$ be a sufficient statistic for $\PP_\theta \in \cP$, $T_0$ be
an estimator satisfying $$\EE_{\PP_\theta} \|T_0\| < \infty$$ for all $\PP \in \cP$. Let $T_1 = \EE [T_0(X) | T ]$ . Then
$R_{T_1}(\theta) \leq  R_{T_0} (\theta )$.*

An estimator is said to be **unbiased** if and only if 

$$
\EE_{\PP_\theta} T(X)=\gamma (\theta).
$$

The UMVUE is defined to be a minimax optimal estimator among the class of all unbiased estimators. Statisticians have developed some interesting methods to find UMVUEs, see *Lehmann–Scheffé theorem* for example. 

The minimum risk of an unbiased estimator is constrained by *Cramér–Rao lower bound*.

If $T(X)\to_P \gamma(\theta)$ as $n\to\infty$, then $T(X)$ is called **consistent**. When dealing with large sample properties like this, a statistic $T(X)$ is often denoted by $T_n$ to emphasize its dependence on the sample size $n$.


# Moment Estimation, MLE

The above criteria provide guidelines of finding good estimators, but they do not provide us any specific procedure to construct an estimator.

In practice, the most intuitive ways of constructing estimators are moment estimation and maximum likelihood estimation (MLE).

Moment estimation works by comparing population moments and sample moments.

MLE works by maximizing the likelihood.

# Bayesian Statistics

Take the prior distribution to be continuous with density $\pi$, an arbitrary probability density on $\Theta$.
The Bayesian risk of an estimator $T$ for $\gamma(θ)$ is defined as the weighted average of the
risk $R_T(\theta)$ with the weight $\pi$.

The **Bayesian estimator** w.r.t. the prior density $\pi$ is the estimator $T_{\text{Bayes}}$
that minimizes $R_{\text{Bayes}}(\pi, T )$ over all estimators $T$. A good property of Bayesian estiamtors is that they can be given explicitly by the posterior mean:

$$
T_{\text{Bayes}}(X)=\EE[\gamma(\theta)|X].
$$

An interesting connection between bayesian estimator and minimax estimator is the following.
Suppose that $T$ is the Bayes estimator for $\gamma(\theta)$ w.r.t some prior. If the risk $R_T$ does not depend on $\theta$, then $T$ is minimax optimal (among all estimators).
