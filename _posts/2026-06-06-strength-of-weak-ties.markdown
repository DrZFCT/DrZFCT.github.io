---
layout: post
title: Strength of Weak Ties
author: Kaizhao Liu
published_status: 0
---

The seminal paper of [Mark Granovetter (1973)](https://doi.org/10.1086/225469).

# Triadic Closure


**clustering coefficient**: The clustering coefficient of a node A is defined as the probability that two randomly selected friends of A are friends with each other.

### Principle of Triadic Closure

principle **triadic closure**

reason for triadic closure

# Strength of Weak Ties

### Information Flow in Social Networks

**bridge** 

Gaint components and small-world properties tell us that bridges are presumably extremely rare in real social networks.


**local bridge**

its **span** 

an edge is a local bridge precisely when it does not form a side of any triangle in the graph.


neighborhood overlap

### 




# Social Capital

Our discussion thus far suggests a general view of social networks in terms of tightly-knit groups and the weak ties that link them.
The analysis has focused primarily on the roles that different kinds of *edges* of a network play in this structure.

There is a lot further insight to be gained by asking about the roles that different *nodes* play in this structure as well.
In social networks, access to edges that span different groups is not equally distributed across all nodes: 
some nodes are positioned at the interface between multiple groups, with access to boundary-spanning edfes, while others are positioned in the middle of a single group.

### Embeddedness



# A Graph Partitioning Algorithm


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
