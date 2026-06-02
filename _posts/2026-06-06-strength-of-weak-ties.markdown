---
layout: post
title: Strength of Weak Ties
author: Kaizhao Liu
published_status: 0
---

The seminal paper of [Mark Granovetter (1973)]()


# Problem Set

## Problem 1: The Small-World Paradox and Clustering

A defining feature of empirical social networks is the "small-world phenomenon," which requires both a short average path length (scaling as $O(\ln n)$) and a high local clustering coefficient. 

Let the clustering coefficient $C$ of a network be defined as the probability that two randomly chosen neighbors of a vertex $v$ are also connected to each other.

**Part (a): The Failure of Erdős-Rényi.**
Consider the sparse Erdős-Rényi graph $G(n,p)$ with $p = \frac{c}{n}$ for a constant $c > 0$. 
1. What is the exact expected clustering coefficient $C$ of this graph?
2. What happens to $C$ as $n \to \infty$? Briefly explain why this proves $G(n,p)$ is a poor model for social networks, even though its average path length scales as $O(\ln n)$.

**Part (b): The Regular Ring Lattice**
Consider a deterministic ring lattice of $n$ vertices. The vertices are arranged in a circle, and each vertex is connected to its $k$ nearest neighbors (i.e., $k/2$ neighbors on the left, and $k/2$ on the right). Assume $n \gg k \ge 4$.
Calculate the clustering coefficient $C$ of this ring lattice. Show that as $n \to \infty$ (while keeping $k$ fixed), $C$ remains strictly bounded away from $0$. 

**Part (c): Bridging the Gap**
The ring lattice from Part (b) has high clustering, but its average path length scales linearly as $O(n/k)$, which violates the small-world requirement. Propose a mathematically explicit procedure to modify the ring lattice from Part (b) such that the average path length drops to $O(\ln n)$ while the clustering coefficient $C$ remains $O(1)$. Justify your proposed mechanism qualitatively.
