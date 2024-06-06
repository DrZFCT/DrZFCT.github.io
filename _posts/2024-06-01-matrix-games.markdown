---
layout: post
title: Matrix Game
author: Kaizhao Liu, Zhekun Shi

---

RLHF (Reinforcement Learning from Human Feedback) has been the dominant technique to align an intelligent agent to human preferences.

Recently, Google has proposed Nash Learning from Human Feedback ([NLHF](https://arxiv.org/abs/2312.00886)), which formulated the preference alignment problem into a self-play game.





# von Neumann's Minimax Theorem

---

Let $X \subset \mathbb{R}^n$ and $Y \subset \mathbb{R}^m$ be compact convex sets. If $f: X \times Y \rightarrow \mathbb{R}$ is a continuous function that is concave-convex, i.e., $f(\cdot, y): X \to \mathbb{R}$ is concave for fixed $y$, and $f(x, \cdot): Y \to \mathbb{R}$ is convex for fixed $x$. Then we have that

$$
\max_{x \in X} \min_{y \in Y} f(x,y) = \min_{y \in Y} \max_{x \in X} f(x,y).
$$

# Two-Person Zero-Sum Games

---

A **two-person zero-sum game** in strategic form is any $F$ of the form $F = (\{1, 2\}, C_1, C_2, u_1, u_2)$ such that 

$$
u_2(c_1, c_2) = -u_1(c_1, c_2), \, \forall c_1 \in C_1, \, \forall c_2 \in C_2.
$$

The following theorem summarizes important mathematical properties of such games: $(\sigma_1, \sigma_2)$ is a Nash equilibrium of a finite two-person zero-sum game $(\{1, 2\}, C_1, C_2, u_1, -u_1)$ if and only if

$$
\sigma_1 \in \arg\max_{\tau_1 \in \Delta(C_1)} \min_{\tau_2 \in \Delta(C_2)} u_1(\tau_1, \tau_2),\quad
\text{and}\quad
\sigma_2 \in \arg\min_{\tau_2 \in \Delta(C_2)} \max_{\tau_1 \in \Delta(C_1)} u_1(\tau_1, \tau_2).
$$

Furthermore, if $(\sigma_1, \sigma_2)$ is an equilibrium of this game, then

$$
u_1(\sigma_1, \sigma_2) = \max_{\tau_1 \in \Delta(C_1)} \min_{\tau_2 \in \Delta(C_2)} u_1(\tau_1, \tau_2) = \min_{\tau_2 \in \Delta(C_2)} \max_{\tau_1 \in \Delta(C_1)} u_1(\tau_1, \tau_2).
$$


# Constructing a Game with Given Nash Equilibrium

---


Suppose each player has $n$ policies and the payoff matrix is $$\{\alpha_{ij}\}_{i=1}^n$$. Then,

$$
\begin{aligned}
\max_{\pi}\min_{\pi^{\prime}}
\left\{
\sum_{i=1}^n\sum_{j=1}^n\alpha_{ij}\pi_i\pi^{\prime}_j\right\}
 =& \max_{\pi}\min_{\pi^{\prime}}
\left\{
\sum_{j=1}^n \left(\sum_{i=1}^n\alpha_{ij}\pi_i\right)\pi^{\prime}_j\right\} \\
=& \max_{\pi}\min_j
\left\{
\sum_{i=1}^n\alpha_{ij}\pi_i
\right\} .
\end{aligned}
$$

Let us reformulated it into a convex optimization problem.


$$
\begin{aligned}
&\text{(P)}\\  
\min_{\pi}\quad\quad\quad &\max_j \sum_{i=1}^n\alpha_{ij}\pi_i \\
\text{subject to} \ \
& -\pi_i \leq 0, \quad i = 1, \ldots, n \\
& \sum_{i=1}^n \pi_i- 1=0
\end{aligned}
$$

Let us further reformulate this problem into the epigraph form by introducing a single varaible $t\in\mathbb{R}$.

$$
\begin{aligned}
&\text{(P)}\\  
\min_{\pi,t}\quad\quad\quad &t \\
\text{subject to}  \ \ 
& \sum_{i=1}^n\alpha_{ij}\pi_i-t\leq 0, \quad j = 1, \ldots, n \\
& -\pi_i \leq 0, \quad i = 1, \ldots, n \\
& \sum_{i=1}^n \pi_i- 1=0
\end{aligned}
$$

We can easily see that Slater's condition is satisfied for this problem, so the KKT points are equivalent to primal and dual solutions.


$$
\begin{cases}
 \quad\quad  u^*\geq 0 &
 \quad\quad\quad \sum_{i=1}^nu^*_i=1\\
 \quad\quad \pi^* \geq 0 & 
 \quad\quad\quad \sum_{i=1}^n \pi_i^*=1\\
 \sum_{i=1}^n \pi_i^*\alpha_{ij}-t^*\leq 0 & 
 \quad u_j^*\left(\sum_{i=1}^n\pi_i^*\alpha_{ij}-t^*\right)=0\\
\quad\quad \tilde{u}^*\geq 0 & 
\quad\quad\quad \tilde{u}^*_i\pi^*_i=0\\
&
\quad \sum_{i=1}^n\alpha_{ij}u_j^*-\tilde{u}_i^*=-v^* 
\end{cases}
$$




### Apllication to Preference Matching

Consider large $n\geq 3$. To do preference matching, we need to construct a reasonable payoff matrix $$\{\alpha_{ij}\}_{i=1}^n$$ with Nash equilibrium $\pi^*>0$. In this case, the KKT conditions reduce to 

$$
\begin{cases}
\quad\quad u^*\geq 0 & 
\quad\quad\quad \sum_{i=1}^nu^*_i=1\\
\sum_{i=1}^n \pi_i^*\alpha_{ij}-t^*\leq 0 & 
\quad u_j^*\left(\sum_{i=1}^n\pi_i^*\alpha_{ij}-t^*\right)=0\\
&
\quad\quad\quad  \sum_{i=1}^n\alpha_{ij}u_j^*=-v^*
\end{cases}
$$


It is worthy to note that the payoff matrix

$$
\begin{equation}
    \alpha_{ij}=\pi_i^*+\pi_j^*-\delta_{ij}
\end{equation}
$$

or

$$
\begin{equation}\label{eq:ratio}
    \alpha_{ij}=-\frac{\pi_j^*}{\pi_i^*}+n\delta_{ij}
\end{equation}
$$

guarantees that $ \pi^* $ is the Nash equilibrium by plugging into the KKT conditions. However, the first payoff matrix is symmetry, which is hard to interpret. And even worse, it depends on the $ \pi^* $ directly, which is not computable as the normalizing constant of  $ \pi^* $ is a summation of $n$ items. 
The second payoff matrix depends on $n$, which is also not computable.
  

From this we see that the payoff matrix should satisfies the following conditions up to adding a constant (may depend on $$\pi^*$$ and $n$) multiple of $1_{ij}$:
- $\alpha_{ii}=C$ for all $i\in [n]$, for some universal constant $C$ (independent of $$\pi^*$$ and $n$). 
- $\alpha_{ij}=f(\frac{\pi_i}{\pi_j})$ for some function $f$, i.e. the off-diagonal elements should depends on the ratio $\frac{\pi_i}{\pi_j}$ in the same way.

Now we show that no reasonable $\alpha_{ij}$ can satisfy these two conditions.

Assume $\alpha_{ij}=f(\frac{\pi_i}{\pi_j})$ for some differentiable function $f$. 
Due to permutation symmetry, we seek solutions that satisfies $$\sum_{i=1}^n\pi^*_i\alpha_{ij}=t^*$$ for all $j\in [n]$.
As adding $$t^*1_{ij}$$ to $\alpha_{ij}$ does not change the Nash equilibrium, we can assume $$t^*=0$$ without loss of generality.


So we have 

$$
\sum_{i\ne j} \pi_if(\frac{\pi_i}{\pi_j})=-C\pi_j\quad\forall j\in [n]
$$

Assume that $i\neq k\neq j$, and consider the infinitesimal variation $\pi_i\to \pi_i+\delta$, $\pi_k\to\pi_k-\delta$, keeping others still.
We have 

$$
(\pi_i+\delta)f(\frac{\pi_i+\delta}{\pi_j})+(\pi_k-\delta)f(\frac{\pi_k-\delta}{\pi_j})=\pi_i f(\frac{\pi_i}{\pi_j})+\pi_k f(\frac{\pi_k}{\pi_j}),
$$

so

$$
f(\frac{\pi_i}{\pi_j})+\frac{\pi_i}{\pi_j}f'(\frac{\pi_i}{\pi_j})=f(\frac{\pi_k}{\pi_j})+\frac{\pi_k}{\pi_j}f'(\frac{\pi_k}{\pi_j}).
$$

For this to hold on all possible $\pi$, we must have 

$$
f(x)+xf'(x)=C,
$$

i.e. 

$$
f(x)=\frac{C_1}{x}+C_2.
$$

Plugging this to $$\sum_{i\ne j} \pi_if(\frac{\pi_i}{\pi_j})=-C\pi$$ yields $C_2=0$ and $C=(1-n)C_1$. So $C_1=0$ and $f\equiv 0$, which is absurd.

Note that if we allow $C$ to depend on $n$, this is exactly the payoff matrix $$\alpha_{ij}=-\frac{\pi_j^*}{\pi_i^*}+n\delta_{ij}$$ we have encountered above.

