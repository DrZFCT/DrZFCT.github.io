---
layout: post
title: Matrix Game
author: Kaizhao Liu, Zhekun Shi

---

RLHF (Reinforcement Learning from Human Feedback) has been the dominant technique to align an intelligent agent to human preferences.

Recently, google has proposed Nash Learning from Human Feedback, which formulated the preference alignment problem into a self-play game.





# von Neumann's Minimax Theorem


Let $X \subset \mathbb{R}^n$ and $Y \subset \mathbb{R}^m$ be compact convex sets. If $f: X \times Y \rightarrow \mathbb{R}$ is a continuous function that is concave-convex, i.e.,

$f(\cdot, y): X \to \mathbb{R}$ is concave for fixed $y$, and

$f(x, \cdot): Y \to \mathbb{R}$ is convex for fixed $x$.

Then we have that

$$
\max_{x \in X} \min_{y \in Y} f(x,y) = \min_{y \in Y} \max_{x \in X} f(x,y).
$$

# Two-Person Zero-Sum Games

A **two-person zero-sum game** in strategic form is any $F$ of the form $F = (\\{1, 2\\}, C_1, C_2, u_1, u_2)$ such that 

$$
u_2(c_1, c_2) = -u_1(c_1, c_2), \, \forall c_1 \in C_1, \, \forall c_2 \in C_2.
$$

The following theorem summarizes important mathematical properties of such games:

$(\sigma_1, \sigma_2)$ is a Nash equilibrium of a finite two-person zero-sum game $(\\{1, 2\\}, C_1, C_2, u_1, -u_1)$ if and only if

$$
\sigma_1 \in \arg\max_{\tau_1 \in \Delta(C_1)} \min_{\tau_2 \in \Delta(C_2)} u_1(\tau_1, \tau_2),
$$

and 

$$
\sigma_2 \in \arg\min_{\tau_2 \in \Delta(C_2)} \max_{\tau_1 \in \Delta(C_1)} u_1(\tau_1, \tau_2).
$$

Furthermore, if $(\sigma_1, \sigma_2)$ is an equilibrium of this game, then

$$
u_1(\sigma_1, \sigma_2) = \max_{\tau_1 \in \Delta(C_1)} \min_{\tau_2 \in \Delta(C_2)} u_1(\tau_1, \tau_2) = \min_{\tau_2 \in \Delta(C_2)} \max_{\tau_1 \in \Delta(C_1)} u_1(\tau_1, \tau_2).
$$


# Constructing a Game with Given Nash Equilibrium

Suppose each player has $n$ policies and the payoff matrix is $\\{\alpha_{ij}\\}_{i=1}^n$.
Then,

$$
\begin{equation}
    \begin{aligned}
    \max_{\pi}\min_{\pi^{\prime}}
    \left\{
    \sum_{i=1}^n\sum_{j=1}^n\alpha_{ij}\pi_i\pi^{\prime}_j
    \right\}
    =& \max_{\pi}\min_{\pi^{\prime}}
    \left\{
    \sum_{j=1}^n
    \left(\sum_{i=1}^n\alpha_{ij}\pi_i\right)\pi^{\prime}_j
    \right\} \\
    =& \max_{\pi}\min_j
    \left\{
    \sum_{i=1}^n\alpha_{ij}\pi_i
    \right\} .
    \end{aligned}
\end{equation}
$$

Let us reformulated it into a convex optimization problem.


$$
\begin{array}{ll}
&\text{(P)}\\  \min\limits_{\pi} &\max_j \sum_{i=1}^n\alpha_{ij}\pi_i \\
 \text{subject to} 
& -\pi_i \leq 0, \quad i = 1, \ldots, n \\
& \sum_{i=1}^n \pi_i- 1=0
\end{array}
$$

Let us further reformulate this problem into the epigraph form by introducing a single varaible $t\in\RR$.

$$
\begin{array}{ll}
&\text{(P)}\\  \min\limits_{\pi,t} &t \\
 \text{subject to} 
& \sum_{i=1}^n\alpha_{ij}\pi_i-t\leq 0, \quad j = 1, \ldots, n \\
& -\pi_i \leq 0, \quad i = 1, \ldots, n \\
& \sum_{i=1}^n \pi_i- 1=0
\end{array}
$$

We can easily see that Slater's condition is satisfied for this problem, so the KKT points are equivalent to primal and dual solutions.

$$
\left\{\begin{matrix}
 u^*\geq 0 &\sum_{i=1}^nu^*_i=1\\
 \pi^* \geq 0 & \sum_{i=1}^n \pi_i^*=1\\
 \sum_{i=1}^n \pi_i^*\alpha_{ij}-t^*\leq0 & u_j^*(\sum_{i=1}^n\pi_i^*\alpha_{ij}-t^*)=0\\
\tilde{u}^*\geq 0 & \tilde{u}^*_i\pi^*_i=0\\
&\sum_{i=1}^n\alpha_{ij}u_j^*-\tilde{u}_i^*=-v^*

\end{matrix}\right.
$$




### Apllication to Preference Matching

Consider large $n\geq 3$. To do preference matching, we need to construct a reasonable payoff matrix $\\{\alpha_{ij}\\}_{i=1}^n$ with Nash equilibrium $\pi^*>0$. In this case, the KKT conditions reduce to 

$$
\left\{\begin{matrix}
 u^*\geq 0 &\sum_{i=1}^nu^*_i=1\\
 \sum_{i=1}^n \pi_i^*\alpha_{ij}-t^*\leq0 & u_j^*(\sum_{i=1}^n\pi_i^*\alpha_{ij}-t^*)=0\\
&\sum_{i=1}^n\alpha_{ij}u_j^*=-v^*

\end{matrix}\right.
$$


It is worthy to note that the payoff matrix

$$
\alpha_{ij}=\pi_i^*+\pi_j^*-\delta_{ij}
$$

or

$$
\alpha_{ij}=-\frac{\pi_j^*}{\pi_i^*}+n\delta_{ij}
$$

guarantees that $ \pi^* $ is the Nash equilibrium by plugging into the KKT conditions. However, the first payoff matrix is symmetry, which is hard to interpret. And even worse, it depends on the $ \pi^* $ directly, which is not computable as the normalizing constant of  $ \pi^* $ is a summation of $n$ items. 
The second payoff matrix depends on $n$, which is also not computable.
  

From this we see that the payoff matrix should satisfies
- $\alpha_{ii}=0$ for all $i\in [n]$. This is because we expect the diagonal elements of $$ \{\alpha_{ij}\}_{i=1}^n $$ to be the same, and substracting $$\\{1_{ij}\\}$$ does not influence the Nash equilibrium.
- $\alpha_{ij}$ should only depends on $\frac{\pi_i}{\pi_j}$.

Now we show that no reasonable $\alpha_{ij}$ can satisfies these two conditions.

Assume $\alpha_{ij}=f(\frac{\pi_i}{\pi_j})$ for some differentiable function $f$. 
Due to permutation symmetry, we seek solutions that satisfies $$\sum_{i=1}^n\pi^*_i\alpha_{ij}=t^*$$ for all $j\in [n]$.

So we have 

$$
\sum_{i\ne j} \pi_if(\frac{\pi_i}{\pi_j})=0\quad\forall j\in [n]
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

However, plugging this to $$\sum_{i\ne j} \pi_if(\frac{\pi_i}{\pi_j})=0$$ yields a contradiction.