---
layout: post
title: Quantum Computing
author: Kaizhao Liu

---

In this article, we first recall the basic postulates of quantum computing.
Then we mainly focus on the mathematical structures behind it.

# Postulates of Quantum Mechanics

---

#### Postulate 1: Associated to any isolated physical system is a complex Hilbert space (*a.k.a. state space of the system*). The system is completely described by its state vector, which is a unit vector in the system’s state space.

Quantum mechanics does not tell us what the state space is for a given physical system, nor does the state vector. *Figuring that out for a specific system is a difficult problem for which physicists have developed many intricate and beautiful rules, for example quantum electrodynamics.*

The simplest quantum mechanical system is the **qubit**. A qubit has a two-dimensional state space. Suppose $\ket{0}$ and $\ket{1}$ form an orthonormal basis for that state space


#### Postulate 2: The evolution of a closed quantum system is described by a unitary transformation. That is, the state $\ket{\psi}$ of the system at time $t_1$ is related to the state $\ket{\psi'}$ of the system at time $t_2$ by a unitary operator $U$ which depends only on the times $t_1$ and $t_2$, $\ket{\psi'} = U\ket{\psi}$.

Quantum mechanics does not tell us which unitary operators $U$ describe real-world quantum dynamics.
In the case of single qubits, it turns out that any unitary operator at all can be realized in realistic systems.

A more refined version of this postulate can be given which describes the evolution of a quantum system in continuous time. From this more refined postulate we will recover Postulate 2.

#### Postulate 2': The time evolution of the state of a closed quantum system is described by the Schr&#246;dinger equation,

$$
i\hbar \frac{\mathrm{d}\ket{\psi}}{\mathrm{d}t}=H\ket{\psi}, 
$$

#### where $H$ is a fixed Hermitian operator known as the Hamiltonian of the closed system.

When experimentists observe the system, it becomes no longer closed.

#### Posulate 3: Quantum measurements are described by a collection $\{M_m\}$ of measurement operators. These are operators acting on the state space of the system being measured. The index m refers to the measurement outcomes that may occur in the experiment. If the state of the quantum system is $\ket{\psi}$ immediately before the measurement then the probability that result $m$ occurs is given by 

$$
p(m)=\bra{\psi}M_m^\dagger M_m\ket{\psi},
$$

#### and the state of the system after the measurement is 

$$
\frac{M_m\ket{\psi}}{\sqrt{\bra{\psi}M_m^\dagger M_m\ket{\psi}}}.
$$

#### The measurement operators satisfy the completeness equation,

$$
\sum_m M_m^\dagger M_m =I.
$$

#### Postulate 4: The state space of a composite physical system is the tensor product of the state spaces of the component physical systems.



# Density Matrix

---

The density matrix formulation is mathematically equivalent to the state vector appraoch, but it provides a convenient tool for describing quantum systems whose state is not completely known.

Suppose a quantum system is in one of a number of states $\ket{\psi_i}$, where $i$ is an index, with respective probabilities $p_i$. We shall call $\{ p_i, \ket{\psi_i} \}$ an ensemble of pure states. The density operator for the system is defined by the equation:

$$
\rho \equiv \sum_i p_i\ket{\psi_i}\bra{\psi_i}.
$$

#### Reformulation of Posulate 2: $\rho \mapsto U\rho U^\dagger$.

#### Reformulation of Posulate 3: $p(m)=\tr(M_m\rho M_m^\dagger)$, and the density matrix after measurement is 

$$
\frac{M_m\rho M_m^\dagger}{\tr(M_m\rho M_m^\dagger)}
$$



### Characterization of density matrices

An operator $\rho$ is the density operator associated to some ensemble $\{ p_i, \ket{\psi_i} \}$ if and only if 

(i) (**Trace condition**) $\rho$ has trace equal to one.

(ii) (**Positive condition**) $\rho$ is a positive operator.

### When do two sets of ensemble generate the same density matrix?

We say the set $\ket{\tilde{\psi}_i}$ *generates* the operator $\rho\equiv \sum_i\ket{\tilde{\psi}_i}\bra{\tilde{\psi}_i}$.

The sets $\ket{\tilde{\psi}_i}$ and $\ket{\tilde{\varphi}_i}$ generate the same density matrix if and only if 

$$
\ket{\tilde{\varphi}_i}=\sum_j u_{ij}\ket{\tilde{\psi}_i},
$$

where $u_{ij}$ is a unitary matrix of complex numbers.


# Composite Systems 

(**Schmidt decomposition**) For every vector $\ket{\psi}\in \cH_A\otimes\cH_B$, there exist orthonormal basis $\\{e_j\in \cH_A\\}$ and $\\{f_j\\}\in\cH_B$ such that 

$$
\ket{\psi}=\sum_{j=1}^d\lambda_j\ket{e_j}\otimes\ket{f_j}
$$


This is easily proved by an application of singular value decomposition.

(**Tricks with maximal entanglement**) If all Schmidt coefficients of a pure state $\phi$ are $\lambda_j=\frac{1}{d}$, then $\phi$ is called *maximally entangled* of dimension $d$. Every maximally entanged state is of the form $\phi=(\mathbb 1\otimes U)\ket{\Omega}$ where $U$ is any unitary and 

$$
\ket{\Omega}=\frac{1}{\sqrt{d}}\sum_{j=1}^d \ket{j}\otimes\ket{j}.
$$


# Advantage of Quantum Algorithm: Deutsch-Jozsa Problem

Deutsch-Jozsa algorithm is one of the first examples of a quantum algorithm that is exponentially faster than any possible deterministic classical algorithm.
The problem is stated as follows:

We are given a black box quantum computer known as an oracle that implements some function:

$$
f:\{0,1\}^n\to\{0,1\}.
$$

Moreover, we know that the function is either constant (0 on all inputs or 1 on all inputs) or balanced (1 for exactly half of the input domain and 0 for the other half).
The task then is to determine if $f$ is constant or balanced by using the oracle. A specific quantum algorithm can be find in [Wikipedia](https://en.wikipedia.org/wiki/Deutsch-Jozsa_algorithm).

# No Cloning Theorem


# Reversible, Uncomputation


# Questions 

Understand Choi's matrix paper and Quantum Process Tomography. Lindblad's paper also.

Learn something from Moyang Cheng, Yuchen Guo, Hanyu Xue, Yuxiang Wang.