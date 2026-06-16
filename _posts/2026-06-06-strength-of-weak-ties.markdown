---
layout: post
title: Strength of Weak Ties
author: Kaizhao Liu
published_status: 1
---

The seminal paper of [Mark Granovetter (1973)](https://doi.org/10.1086/225469).

How information flows through a social network, how different nodes can play structurally distinct roles

# Triadic Closure


**clustering coefficient**: The clustering coefficient of a node A is defined as the probability that two randomly selected friends of A are friends with each other.

### Principle of Triadic Closure

principle **triadic closure**: 

### reason for triadic closure

One reason why B and C are more likely to become friends, when they have a common friend A, is simply based on the opportunity for B and C to meet: if A spends time with both B and C, then there is an increased chance that they will end up knowing each other and potentially becoming friends. A second, related reason is that in the process of forming a friendship, the fact that each of B and C is friends with  A (provided they are mutually aware of this) gives them a basis for trusting each other that  an arbitrary pair of unconnected people might lack.  A third reason is based on the incentive A may have to bring B and C together: if A is friends with B and C, then it becomes a source of latent stress in these relationships if B and C are not friends with each other.


# Strength of Weak Ties

### Information Flow in Social Networks

**bridge** 

Gaint components and small-world properties tell us that bridges are presumably extremely rare in real social networks.


**local bridge**

its **span** 

an edge is a local bridge precisely when it does not form a side of any triangle in the graph.


**neighborhood overlap**

### From Local Bridge to Weak Ties: Strong Triadic Closure Property




# Social Capital

Our discussion thus far suggests a general view of social networks in terms of tightly-knit groups and the weak ties that link them.
The analysis has focused primarily on the roles that different kinds of *edges* of a network play in this structure.

There is a lot further insight to be gained by asking about the roles that different *nodes* play in this structure as well.
In social networks, access to edges that span different groups is not equally distributed across all nodes: 
some nodes are positioned at the interface between multiple groups, with access to boundary-spanning edges, while others are positioned in the middle of a single group.

### Embeddedness

We define the **embeddedness** of an edge in a network to be the number of common neighbors the two endpoints have. Here are two remarks: First, the embeddedness of an edge is equal to the numerator in the ratio that defines the *neighborhood overlap*; Second, we observe that *local bridges* are precisely the edges that have an embeddedness of zero.

Let us consider the benefit of a node A in which all of its edges have significant embeddedness.
A long line of research in sociology has argued that if two individuals are connected by an embedded edge, then this makes it easier for them to trust one another, and to have confidence in the integrity of the transactions (social, economic, or otherwise) that take place between them. 
Indeed, the presence of mutual friends puts the interactions between two people “on display” in a social sense, even when they are carried out in private; in the event of misbehavior by one of the two parties to the interaction, there is the potential for social sanctions and reputational consequences from their mutual friends.

No similar kind of deterring threat exists for edges with zero embeddedness, since there is no one who knows both people involved in the interaction. In this respect, for a node B involving multiple local bridges, the interactions it is involved in are much riskier than the embedded interactions that A experiences.
Further, for B, the constraints on its behavior are made complicated by the fact that it is subject to potentially contradictory norms and expectations from the different groups it associates with.

### Structural Holes

However, catalyzed by influential work of [Ronald S. Burt (1992)](https://www.jstor.org/stable/j.ctv1kz4h78), has argued that network positions at the ends of multiple local bridges like B, confer a distinct set of equally fundamental advantages.

The canonical setting for this argument is the social network within an organization or company, consisting of people who are in some ways collaborating on common objectives and in other ways implicitly competing for career advancement. Note that although we may be thinking about settings in which there is a formal organizational hierarchy — encoding who reports to whom — we’re interested in the more informal network of who knows whom, and who talks to whom on a regular basis.

In Burt’s language, such node B, with its multiple local bridges, spans a *structural hole* in the organization — the “empty space” in the network between two sets of nodes that do not otherwise interact closely.

The first kind of advantage, following the observations in the previous section, is an informational one: B has early access to information originating in multiple, non-interacting parts of the network. Any one person has a limited amount of energy they can invest in maintaining contacts across the organization, and B is investing its energy efficiently by reaching out to different groups rather than basing all its contacts in the same group.  
A second, related kind of advantage is based on the way in which standing at one end of a local bridge can be an amplifier for creativity. Experience from many domains suggests that innovations often arise from the unexpected synthesis of multiple ideas, each of them on their own perhaps well-known, but well-known in distinct and unrelated bodies of expertise. Thus, a position at the interface between many non-interacting groups gives the node not only access to the combined information from these groups, but also the opportunity for novel ideas by combining these disparate sources of information in new ways.  
Finally, this position in the network provides an opportunity for a kind of social “gatekeeping” — it regulates the access of one tightly-knit group to the other tightly-knit group B belongs to. This provides B with a source of power in the organization, and one  ould imagine that certain people in this situation might try to prevent triangles from forming around the local bridges they’re part of.

This last point highlights a sense in which the interests of B and of the organization as a whole may not be aligned. For the functioning of the organization, accelerating the flow of information between groups could be beneficial, but this building of bridges would come at the expense of B's latent power at the boundaries of these groups. 
It also emphasizes that our analysis of structural holes is primarily a static one: we look at the network at a single point in time, and consider the effects of the local bridges. How long these local bridges last before triadic closure produces short-cuts around them, and the extent to which people in an organization are consciously, strategically seeking out local bridges and trying to maintain them, is less well understood; it is a topic of ongoing research.

### Closure and Bridging as Forms of Social Capital

All of these arguments are naturally related to the notion of *social capital*.
The term “social capital” is designed to suggest its role as part of an array of different forms of capital, all of which serve as tangible or intangible resources that can be mobilized to accomplish tasks.




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
