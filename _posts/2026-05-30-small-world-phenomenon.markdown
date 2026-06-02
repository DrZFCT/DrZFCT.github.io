---
layout: post
title: Small-World Phenomenon
author: Kaizhao Liu
published_status: 1
---

This is a note on the [estimation of Wasserstein distances](https://arxiv.org/abs/2407.18163).

# Gaint Component

# Distance and Breadth-First Search

In additional to providing an algorithm of determining distances, it can also serve as a useful conceptual framework to organize the structure of a graph, arranging the nodes based on their distances from a fixed starting point.


# Small-World Phenomenon

### Empirical Evidence

### Reason

Communication efficiency



# Problem Set: Erdős-Rényi Graph

## Problem 1: Percolation and the Mean-Field Phase Transition in $G(n,p)$

The Erdős-Rényi random graph $G(n,p)$ serves as the canonical mean-field model for network connectivity. Consider the sparse regime where $p = \frac{c}{n}$ for a macroscopic parameter $c > 0$, and let the system size approach the thermodynamic limit ($n \to \infty$). We are interested in the percolation transition where a macroscopic "giant component" emerges.

**Part (a): The Local Limit.**
Prove that in the thermodynamic limit, the degree distribution of any randomly selected vertex converges to a Poisson distribution with mean $c$. 

**Part (b): The Self-Consistency Equation.**
Let $\rho$ be the fraction of vertices belonging to the largest connected component. Derive the mean-field self-consistency equation for the order parameter:
$$1 - \rho = e^{-c\rho}$$

<details>
<summary><b>Hint</b></summary>
Model the exploration of a vertex's local neighborhood as a Galton-Watson branching process. 
</details>


**Part (c): Criticality and Scaling**
Using the self-consistency equation derived in Part (b):
1. Show that a continuous phase transition occurs at a critical threshold $c_c = 1$.
2. In the immediate supercritical regime ($c = 1 + \epsilon$ for $0 < \epsilon \ll 1$), perform a Taylor expansion to determine the critical exponent $\beta$ for the order parameter, where $\rho \propto (c - 1)^\beta$.

---

## Problem 2: The Small-World Paradox and Clustering

A defining feature of empirical social networks is the "small-world phenomenon," which requires both a short average path length (scaling as $O(\ln n)$) and a high local clustering coefficient. 

Let the clustering coefficient $C$ of a network be defined as the probability that two randomly chosen neighbors of a vertex $v$ are also connected to each other.

**Part (a): The Failure of Erdős-Rényi**
Consider the sparse Erdős-Rényi graph $G(n,p)$ with $p = \frac{c}{n}$ for a constant $c > 0$. 
1. What is the exact expected clustering coefficient $C$ of this graph?
2. What happens to $C$ as $n \to \infty$? Briefly explain why this proves $G(n,p)$ is a poor model for social networks, even though its average path length scales as $O(\ln n)$.

**Part (b): The Regular Ring Lattice**
Consider a deterministic ring lattice of $n$ vertices. The vertices are arranged in a circle, and each vertex is connected to its $k$ nearest neighbors (i.e., $k/2$ neighbors on the left, and $k/2$ on the right). Assume $n \gg k \ge 4$.
Calculate the clustering coefficient $C$ of this ring lattice. Show that as $n \to \infty$ (while keeping $k$ fixed), $C$ remains strictly bounded away from $0$. 

**Part (c): Bridging the Gap**
The ring lattice from Part (b) has high clustering, but its average path length scales linearly as $O(n/k)$, which violates the small-world requirement. Propose a mathematically explicit procedure to modify the ring lattice from Part (b) such that the average path length drops to $O(\ln n)$ while the clustering coefficient $C$ remains $O(1)$. Justify your proposed mechanism qualitatively.
