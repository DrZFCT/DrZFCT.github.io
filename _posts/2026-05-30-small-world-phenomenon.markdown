---
layout: post
title: Small-World Phenomenon
author: Kaizhao Liu
published_status: 1
---

This is a note for GEEE's barker seminar.

# Gaint Component

# Distance and Breadth-First Search

In additional to providing an algorithm of determining distances, it can also serve as a useful conceptual framework to organize the structure of a graph, arranging the nodes based on their distances from a fixed starting point.


# Small-World Phenomenon

### Empirical Evidence

### Reason

Communication efficiency



# Problem Set: Erdős-Rényi Graph

## Problem 1: Percolation and the Mean-Field Phase Transition in $G(n,p)$

The Erdős-Rényi random graph $G(n,p)$ serves as the canonical mean-field model for network connectivity.
In this model, a graph is constructed by connecting nodes randomly. Each edge is included in the graph with probability $p$, independently from every other edge. 
Consider the sparse regime where $p = \frac{c}{n}$ for a macroscopic parameter $c > 0$, and let the system size approach the thermodynamic limit ($n \to \infty$). We are interested in the percolation transition where a macroscopic "giant component" emerges.

**Part (a): The Local Limit.**

Prove that in the thermodynamic limit, the degree distribution of any randomly selected vertex converges to a Poisson distribution with mean $c$. 

**Part (b): The Self-Consistency Equation.**

Let $\rho$ be the fraction of vertices belonging to the largest connected component. Derive the mean-field self-consistency equation for the order parameter:
$$1 - \rho = e^{-c\rho}.$$
<details>
<summary><b>Hint</b></summary>
Model the exploration of a vertex's local neighborhood as a Galton-Watson branching process. 
</details>


**Part (c): Criticality and Scaling.**

Using the self-consistency equation derived in Part (b):
1. Show that a continuous phase transition occurs at a critical threshold $c_c = 1$.
2. In the immediate supercritical regime ($c = 1 + \epsilon$ for $0 < \epsilon \ll 1$), perform a Taylor expansion to determine the critical exponent $\beta$ for the order parameter, where $\rho \propto (c - 1)^\beta$.

**Part (d)*: The Component Scaling via the Exploration Process.** 

Let $L_1$ denote the number of vertices in the largest connected component of $G(n,p)$. We can analyze the size of the components by studying the trajectory of the Active set $$A_t$$ in a discrete-time Breadth-First Search (BFS) exploration process. 

Using the exploration process, analyze the scaling of $L_1$ across the three macroscopic regimes:

1. **Subcritical ($c < 1$):** Show that the exploration process has a strictly negative drift. Use this to prove that w.h.p. the largest component is strictly microscopic, specifically $$L_1 = O(\log n)$$.
2. **Critical ($c = 1$):** At criticality, the initial drift is exactly zero, and $$A_t$$ behaves locally like an unbiased random walk. However, as vertices are explored, a small negative drift accumulates. By balancing the natural fluctuations of the random walk with this accumulating drift, heuristically derive the critical scaling $$L_1 = \Theta(n^{2/3})$$.
3. **Supercritical ($c > 1$):** Prove that, in probability as $n \to \infty$:
$$\frac{L_1}{n} \xrightarrow{p} \rho$$
where $\rho > 0$ is the unique positive root of the survival equation $1 - \rho = e^{-c\rho}$.

<details>
<summary><b>Hints</b></summary>

1. **The Exploration Process:** Define the BFS by maintaining three sets of vertices: Active ($A_t$), Neutral/Unexplored ($N_t$), and Explored ($E_t$). At each step $t$, select one active vertex, explore all its edges to the neutral set, move the discovered vertices to $A_{t+1}$, and move the selected vertex to $E_{t+1}$. If $A_t$ becomes empty, pick a new vertex from $N_t$ to start a new component.
2. **Concentration of Neutral Vertices:** Instead of tracking active vertices directly, track the neutral vertices $N_t$. Notice that a vertex remains in $N_t$ if and only if it has failed to connect to all $t$ vertices explored so far. Use this to find the exact binomial distribution of $|N_t|$. 
3. **The Deterministic Trajectory (for $c > 1$):** Use Chernoff bounds to show that $\frac{1}{n}|N_t|$ converges uniformly to $e^{-ct/n}$. Since $|A_t| = n - t - |N_t|$, find the macroscopic time $t$ where the active set size deterministically hits zero.
4. **Random Walk Fluctuations (for $c = 1$):** For the critical case, approximate the number of discovered vertices at step $t$ as $\text{Poisson}(1 - t/n)$. The size of the active set roughly follows $|A_t| \approx \text{Random Walk}(t) - \frac{t^2}{2n}$. The maximum of the random walk scales as $\sqrt{t}$. At what time $t$ does the deterministic negative penalty perfectly cancel out the expected positive fluctuations, forcing $|A_t|$ to $0$?

</details>



---

## Problem 2: Characteristic Path Length in the Supercritical Regime

In the supercritical regime ($p = \frac{c}{n}$ with $c > 1$), a macroscopic giant component exists. We want to understand the topology of this component by determining its characteristic path length, $L$, which is the typical shortest path distance between two randomly chosen vertices within it. 

Assume the system size is approaching the thermodynamic limit ($n \to \infty$).

**Part (a): The Local Tree-Like Structure.**

Pick a random vertex $v$ inside the giant component. Let $Z_k$ be the number of vertices exactly at shortest-path distance $k$ from $v$. For small $k$, the neighborhood of $v$ contains negligible cycles (i.e., it is a tree). 
Determine the expected value $\langle Z_k \rangle$ as a function of the mean degree $c$ and the depth $k$. 

<details>
<summary><b>Hints</b></summary>

Use the local limit you established in Problem 1. If every vertex has an expected forward degree of approximately $c$, how does the volume of the boundary grow with each step $k$?

</details>

**Part (b): The Small-World Scaling.**

The boundary of the local neighborhood expands as $k$ increases until it collides with the boundaries of other neighborhoods, eventually encompassing the entire macroscopic volume of the giant component. 
Let the characteristic path length $L$ be the distance at which the expected volume of the neighborhood reaches the order of the system size, $\sum_{i=0}^L \langle Z_i \rangle \sim n$. 
Derive the asymptotic scaling of $L$ as a function of $n$ and $c$.

<details>
<summary><b>Hints</b></summary>

Substitute your expression for $\langle Z_k \rangle$ from Part (a) into the sum. Because $c > 1$, this is a rapidly growing geometric series, so the sum is heavily dominated by its final term. Set the final term proportional to $n$ and solve for $L$.

</details>

**Part (c): Effective Spatial Dimension.**

In standard Euclidean lattices (like a 2D square lattice or a 3D cubic lattice), the volume of a neighborhood (number of vertices) grows as $R^d$, where $R$ is the radius and $d$ is the spatial dimension. Consequently, the maximum distance across the lattice scales as $L \propto n^{1/d}$.
By comparing this Euclidean scaling to your result from Part (b), what is the effective spatial dimension $d_{eff}$ of the Erdős-Rényi random graph? Briefly discuss what this implies about physical distance and local interactions in mean-field models.




**Part (d)*: Asymptotic Diameter and Typical Distances in $G(n,p)$.**

Let $\mathcal{C}_1$ denote the unique giant component of $G(n,p)$. 
Let $u, v \in \mathcal{C}_1$ be two vertices chosen uniformly at random from the giant component. Let $d(u,v)$ denote their shortest-path distance. 

Prove that with high probability, the typical distance between $u$ and $v$ satisfies:
$$d(u,v) = (1 + o(1)) \frac{\log n}{\log c}.$$



<details>
<summary><b>Hints</b></summary>

You may divide your proof into three standard phases: (1) establishing a lower bound via the first moment method, (2) showing the local neighborhood expansion couples with a Galton-Watson process until reaching mesoscopic size, and (3) using a collision argument (the "birthday paradox" on graphs) to connect the two expanding neighborhoods.

</details>