---
layout: post
title: Convex Optimization
author: Kaizhao Liu

---

Consider the general constrained optimization problem (P) shown below, where we have not assumed anything regarding
the functions $f$, $h$, $l$ (like convexity). 

$$
\begin{array}{ll}
&\text{(P)}\\  \min\limits_{x} &f(x) \\
 \text{subject to} 
& h_i(x) \leq 0, \quad i = 1, \ldots, m \\
& l_j(x) = 0, \quad j = 1, \ldots, r
\end{array}
$$



# Langrangian

Define the Lagrangian

$$
L(x, u, v) = f(x) + \sum_{i=1}^{m} u_i h_i(x) + \sum_{j=1}^{r} v_j l_j(x).
$$

where $u\in\RR^m$, $v\in\RR^r$, and $u\geq 0$.

Then we have 

$$
L(x, u, v)\leq f(x),
$$

i.e. the Lagrangian $L(x, u, v)$ is always a lower bound for the primal criterion
$f(x)$ for any dual feasible $u,v$.

And so, we have that if $f^*$ is the primal optimal value and $C$ is the primal feasible set, then

$$
f^*\geq \min_{x\in C} L(x,u,v)\geq \min_x L(x,u,v):=g(u,v),
$$

where the function 

$$
g(u, v) = \min_{x} L(x, u, v)
$$

is called the Lagrange dual function, and it provides a lower bound on the optimal value $f^*$ for any dual feasible $u,v$.

# Dual Problem


We define $G$ as the dual of $P$ by maximizing $g(u,v)$ over all dual feasible $u, v$.

$$
\begin{array}{ll}
&\text{(G)} \\ \max\limits_{u,v} &g(u,v) \\
 \text{subject to} 
& u \geq 0
\end{array}
$$

A very interesting property is that the dual problem is a convex optimization problem (even if the primal problem is non-convex) problem in $u, v$,
as $g(u, v)$ can be expressed as the negative of pointwise maximum of convex functions in $(u, v)$.

### Weak Duality

If the dual optimal value is $g^*$, then

$$
f^*\geq g^*.
$$

This always holds (even if the primal problem is nonconvex) and is called the **weak duality property**.

### Slater's Condition

In some problems, we have $f^* = g^*$, known as **strong duality**. For example, if **Slater's condition** holds, then we have strong duality.

Slater's condition:
- The primal is a convex problem, i.e. $f$ is convex, $h_i$ is convex, and $l_j$ is affine.
- There exists at least one strictly feasible $x\in\RR^n$, i.e. $h_i(x)<0$ for every $i$.
  - An extension maintains that strict inequalities only need to hold over $h_i (x)$ that are not affine.

### Duality Gap 

The duality gap for $x,u,v$ is $f (x) − g (u, v)$. It satisfies 

$$
0\leq f(x)-f^*\leq f(x)-g(u,v).
$$

This implies that a zero duality gap indicates an optimal value for both the primal and the dual.

# KKT Conditions


We first state the KKT conditions associated with problem $P$, they are:

- **Stationarity Condition**: for the given dual variable pair $u, v$, the point $x$ minimizes the lagrangian $L(x, u, v)$

$$
0 \in \partial \left( f(x) + \sum_{i=1}^{m} u_i h_i(x) + \sum_{j=1}^{r} v_j l_j(x) \right)
$$

- **Complementary Slackness**
  
$$
u_i \cdot h_i(x) = 0, \quad i = 1, \ldots, m
$$

- **Primal feasibility**

$$
h_i(x) \leq 0, \quad i = 1, \ldots, m
$$

$$
l_j(x) = 0, \quad j = 1, \ldots, r
$$

- **Dual Feasibility**

$$
u_i \geq 0, \quad i = 1, \ldots, m
$$


KKT conditions on $x, u, v$ are in a very broad sense equivalent to having an optimal primal solution $x$ and optimal dual solution $u, v$ at the same time.

### Necessity

First we show that if  $x^* , u^* , v^* $ are the primal and dual solutions respectively *with zero duality gap*, then they satisfy the KKT conditions.

$$
\begin{align*}
    f(x^*)&=g(u^*,v^*)\\
    &=\min_x f(x)+\sum_{i=1}^{m} u_i^* h_i(x) + \sum_{j=1}^{r} v_j^* l_j(x)\\
    &\leq f(x^*)+\sum_{i=1}^{m} u_i^* h_i(x^*) + \sum_{j=1}^{r} v_j^* l_j(x^*)\\
    &\leq f(x^*)
\end{align*}
$$

which means that all inequalities can be replaced by equalities, yielding the KKT conditions.

### Sufficiency

Next we show that if there exists $x^* , u^* , v^* $ that satisfy KKT conditions, then $x^* , u^* , v^* $ are primal and dual optimal.

$$
\begin{align*}
    g(u^*,v^*)&=f(x^*)+\sum_{i=1}^{m} u_i^* h_i(x^*) + \sum_{j=1}^{r} v_j^* l_j(x^*)\\
    &=f(x^*)
\end{align*}
$$

which indicates zero duality gap.