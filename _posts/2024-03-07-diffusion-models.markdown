---
layout: post
title: Diffusion Models
author: Kaizhao Liu

---

Let us first recall how to reverse a classical diffusion process.

Let $f:\RR^d\times [0,T]\to \RR^d$ and $\sigma:\RR^m\times [0,T]\to \RR^d$, let the $\RR^d$-valued stochastic process $Y=(Y_s)_{s\in [0,T]}$ be the solution to the SDE 

$$
\mathrm{d}Y_s=f(Y_s,s)\mathrm{d}s+\sigma(Y_s,s)\mathrm{d}B_s
$$

where $B_s$ is a standard $m$-dimensional Brownian motion. Assume that $Y$ has density $p_Y$, which satisfies the Fokker-Planck equation given by 

$$
\partial_t p_Y=\text{div}(\text{div}(Dp_Y)-fp_Y),
$$

where $D:=\frac{1}{2}\sigma\sigma^T$.

Now consider the reverse time stochastic process $$(\overleftarrow{Y}_s)_{s\in [0,T]}$$ satisfying 

$$
p_{\overleftarrow{Y}}(\cdot,t)=\overleftarrow{p}_Y(\cdot,t):=p_Y(\cdot,T-t)
$$ 

for every $t\in [0,T]$. We ask for a SDE description of this process.

Using the Fokker-Planck equation of $Y_s$, we have 

$$
\partial_t \overleftarrow{p}_Y=\text{div}(-\text{div}(\overleftarrow{D}\overleftarrow{p}_Y)+\overleftarrow{f}\overleftarrow{p}_Y).
$$

The negative divergence prohibits us from directly viewing the above equation as a Fokker-Planck equation. However, we can write

$$
\text{div}(\overleftarrow{D}\overleftarrow{p}_Y)=\text{div}(\overleftarrow{D})\overleftarrow{p}_Y+\overleftarrow{D}\nabla \overleftarrow{p}_Y= (\text{div}(\overleftarrow{D})+\overleftarrow{D}\nabla\log \overleftarrow{p}_Y)\overleftarrow{p}_Y.
$$

In this way, once we know $\nabla\log \overleftarrow{p}_Y$, we can cpnvert the negative divergence term to the drift term.

As a special case, if we choose to maintain the original diffusion term, then we obtain the following SDE:

$$
\mathrm{d}\overleftarrow{Y}_s=\overleftarrow{\mu}(\overleftarrow{Y}_s,s)\mathrm{d}s+\overleftarrow{\sigma}(\overleftarrow{Y}_s,s)\mathrm{d}B_s,\quad \overleftarrow{Y}_0\sim Y_T
$$

where 

$$
\mu:=2\text{div}(D)+2D\nabla\log p_Y-f.
$$

# Reversing Lindblad Equation

The quantum version of Fokker-Planck equation, also named (Markovian) Lindblad equation, is the following:

$$
\dot{\rho}(t)=-i[H,\rho(t)]+\sum_i \cD[L_i](\rho(t)), \quad t\in[0,T]
$$

where 

$$
\cD[L](\rho):=L\rho L^\dagger -\frac{1}{2}\{L^\dagger L,\rho\}.
$$  

Here $[A,B]=AB-BA$ is the commutator and $\{A,B\}=AB+BA$ is the anticommutator. Note that the Hamiltonian $H$ is Hermitian. Here we assume that $H$ and $L_i$'s are not time dependent.

To reverse a Lindblad operator $L$, exactly similar to what we have done in standard diffusion model, what we need to do is solve this equation for $L_b$ and $H_b$, where $H_b$ is Hermitian:

$$
-\cD[L](\rho)=\cD[L_b](\rho)-i[H_b,\rho].
$$

One way to solve for $L_b$ and $H_b$ goes like this. First notice that $\rho$ is Hermitian. Thus it has an eigenvalue decomposition under a suitable set of basis, which I denote by $\rho=\sum_i\lambda_i\ket{i}\bra{i}$ following physicists convention.

Expanding $[H_b,\rho]$ under this basis gives 
$$\bra{i}[H_b,\rho] \ket{j}= (\lambda_j-\lambda_i)\bra{i} H_b \ket{j}.$$
Plugging this expansion into the equation we want to solve, we find that the condition that $H_b$ is Hermitian imposes that $$\cD[L_b](\rho)+\cD[L](\rho)$$ should be Hermitian. Moreover, the diagonal elements of 
$$
\cD[L_b](\rho)+\cD[L](\rho)
$$
should be zero for $H_b$ to be solvable.

Now recall that 
$$\cD[L](\rho):=L\rho L^\dagger -\frac{1}{2} L^\dagger L\rho -\frac{1}{2} \rho L^\dagger L.$$
This is already Hermitian, but the diagonal elements are not all zero. 

Now the magic part begins. Consider $$L_b=\rho^{\frac{1}{2}}L^\dagger \rho^{-\frac{1}{2}}.$$
Then 

$$\cD[L_b](\rho):= -\frac{1}{2}\rho^{-\frac{1}{2}} L\rho L^\dagger\rho^{\frac{1}{2}}-\frac{1}{2}\rho^{\frac{1}{2}} L\rho L^\dagger\rho^{-\frac{1}{2}}+\rho^{\frac{1}{2}} L^\dagger L\rho^{\frac{1}{2}}.$$

Summing and noticing that for Hermitian $A$, operator of the form 

$$ A -\frac{1}{2}\rho^{-\frac{1}{2}}A\rho^{\frac{1}{2}}-\frac{1}{2}\rho^{\frac{1}{2}}A\rho^{-\frac{1}{2}}$$

is Hermitian with zero diagonal elements.


In summary, the reverse Lindblad's equation can be expressed by 

$$ 
\begin{align}
    &\dot{\overleftarrow{\rho}}= -i[H_b,\overleftarrow{\rho}]+\sum_i \cD[L_{b,i}](\overleftarrow{\rho}),\quad t\in[0,T]\\
    &H_b(t) = -H + \sum_i H_c(\rho(T-t),L_i), \\
    & L_{b,i}(t) = \rho(T-t)^{\frac{1}{2}}L_i^\dagger{\rho(T-t)}^{-\frac{1}{2}},
\end{align}

$$

where 

$$
\begin{align}
    &H_c(\rho,L)=-\frac{i}{2}\sum_{i,j}\frac{\sqrt{\lambda_i}-\sqrt{\lambda_j}}{\sqrt{\lambda_i}+\sqrt{\lambda_j}}\bra{i} M(\rho,L) \ket{j}\ket{i}\bra{j},\\ 
    &M(\rho,L)=L^\dagger L +\rho^{-\frac{1}{2}}L\rho L^\dagger \rho^{\frac{1}{2}}
\end{align}

$$

# Complex Fokker-Planck Equation

Let $f:\CC^d\times [0,T]\to \CC^d$ and $\sigma:\CC^m\times [0,T]\to \CC^d$, let the $\CC^d$-valued stochastic process $Z=(Z_s)_{s\in [0,T]}$ be the solution to the SDE 

$$
\mathrm{d}Z_s=f(Z_s,s)\mathrm{d}s+\sigma(Z_s,s)\mathrm{d}B_s
$$

where $B_s$ is a standard $m$-dimensional Brownian motion. Assume that $Z$ has density $p_Z$, which satisfies the Fokker-Planck equation given by 

$$
\partial_t p_Z=\text{Re}\left\{ \sum_{i,j}\left(\frac{\partial^2 p_Z(\sigma\sigma^\top)_{ij}}{\partial z_i \partial z_j}+\frac{\partial^2 p_Z(\sigma\sigma^\dagger)_{ij}}{\partial z_i \partial \bar{z_j}}\right) - 2\sum_{i=1}^n \frac{\partial f_i p_Z}{\partial z_i} \right\}.
$$






# Stochastic Unraveling

Unraveling means a stochastic wave-equation that recovers the evolution of density matrices $ρ(t)$ in expectation. More specifically, it looks for a stochastic process $X_t(\omega)$ on the Hilbert space $\CC^d$, such that the expectation $ρ(t):=\EE X_t(\omega)X_t^\dagger (\omega)$ solves the Lindblad equation. 

Formally, a density matrix is an expectation of pure states $\ket{\phi}\bra{\phi}$. We seek a SDE that describes the evolution of each $\ket{\phi}$:

$$
\ket{\mathrm d \phi}=\ket{v}\mathrm d t+\sum_j \ket{u_j}\mathrm d \xi_j
$$

where $\xi_j$ are independent complex Brownian motions.



Using Ito calculus,

$$
\mathrm d \ket{\phi}\bra{\phi}=  \ket{\mathrm d\phi}\bra{\phi} + \ket{\phi}\bra{\mathrm d\phi} + \ket{\mathrm d\phi}\bra{\mathrm d\phi}.
$$

Noting that 

$$
\mathrm d \xi_j^\dagger \mathrm d \xi_k = 2\delta_{jk}\mathrm d t ,
$$

we obtain

$$
\mathrm d \ket{\phi}\bra{\phi}= \left(\ket{v}\bra{\phi}+\ket{\phi}\bra{v}+2\sum_j \ket{u_j}\bra{u_j} \right)\mathrm d t .
$$

Matching this with the Lindblad equation, we require

$$
\ket{v}\bra{\phi}+\ket{\phi}\bra{v}+2\sum_j \ket{u_j}\bra{u_j} = \cL (\ket{\phi}\bra{\phi}) .
$$


# Qubit Channel

For an arbitary density matrix $\rho$, we have the formula

$$
\frac{I}{2}=\frac{1}{4}(\rho + X\rho X^\dagger+ Y\rho Y^\dagger +Z\rho Z^\dagger)
$$

where 

$$
X = \begin{pmatrix}
0 & 1\\
1 & 0
\end{pmatrix}\quad
Y=\begin{pmatrix}
0  & -i\\
i  & 0
\end{pmatrix}\quad
Z = \begin{pmatrix}
1  & 0\\
0  & -1
\end{pmatrix}
$$

The lindblad equation for quantum qubit channel can be written as 

$$
\dot{\rho}(t)=-\gamma (\rho(t) - \frac{I}{2}),\quad t\in [0,T]
$$

or in the Lindblad's form as

$$
\dot{\rho}(t)=\frac{\gamma}{4}\left(\cD[X](\rho(t))+\cD[Y](\rho(t))+\cD[Z](\rho(t))\right)
$$

At $t=0$, $\rho(0)$ has an eigenvalue decomposition $\rho(0)=U\Lambda(0) U^\dagger$, where $U$ is unitary and $\Lambda(0)$ is diagonal. As the qubit channel admits the unitary freedom, we can focus on the case where $U=I$, and the result can be easily generalized to arbitary $U$. Say

$$
\Lambda(0)=\begin{pmatrix}
\lambda_1(0)  & \\
  & \lambda_2(0)
\end{pmatrix}
$$

where $\lambda_i(0)\geq 0$ for $i\in [2]$ and $\lambda_1(0)+\lambda_2(0)=1$.

At time $t$, solving the Lindblad equation yields

$$
\Lambda(t)=\begin{pmatrix}
\lambda_1(t)  & \\
  & \lambda_2(t)
\end{pmatrix}=\begin{pmatrix}
\frac{1}{2}+e^{-\gamma t}(\lambda_1(0)-\frac{1}{2})  & \\
  & \frac{1}{2}+e^{-\gamma t}(\lambda_2(0)-\frac{1}{2})
\end{pmatrix} .
$$

The reversed Hamiltonian can be expressed by 

$$
H_b = 0
$$

and the reversed Lindblad operators can be expressed by

$$
X_b(t) = \sqrt{\frac{\gamma}{4}}\begin{pmatrix}
 0 & \sqrt{\frac{\lambda_1(T-t)}{\lambda_2(T-t)}}\\
 \sqrt{\frac{\lambda_2(T-t)}{\lambda_1(T-t)}} & 0
\end{pmatrix},\quad 
Y_b(t) = \sqrt{\frac{\gamma}{4}}\begin{pmatrix}
 0 & i\sqrt{\frac{\lambda_1(T-t)}{\lambda_2(T-t)}}\\
 -i\sqrt{\frac{\lambda_2(T-t)}{\lambda_1(T-t)}} & 0
\end{pmatrix},\quad 
Z_b = \sqrt{\frac{\gamma}{4}}Z.
$$

For general $U$, the reversed Lindblad operators can be obtained by applying the transformation $X \mapsto U^\dagger X U$. Note that the operator $Z$ can actually be dropped.

# $d$-dimensional channel 

For $d$-dimensional density matrix, notice that $I = \tr(\rho)I$ can be expressed as an operator sum.

# Questions

For quantum state preparation, we already know the $\Lambda(0)$ we want and we want to prepare this from the state $I/2$, we do not need to learn anything, just apply the reversed Lindblad operators.

Maybe I have some misunderstanding here for we have discussed to "learn" something via quantum process tomography just like diffusion models. 

How to physically implement a given (time-dependent) Lindblad operator  ? To prepare a pure state, the reversed Lindblad operators seems to blow up.

For $d$-dimensional channel, it seems thaat $d^2$ Lindblad operators are necessary, which suffers from the curse of dimensionality.

# 



