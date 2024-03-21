---
layout: post
title: Diffusion Models
author: Kaizhao Liu

---

For an arbitary high-dimensional distribution 
$x\sim \mathcal{P}$

# Reversing Lindblad Equation

The quantum version of Fokker-Planck equation, also named Lindblad equation, is the following:

$$
\dot{\rho}=-i[H,\rho]+\sum_i \cD[L_i](\rho),
$$

where 

$$
\cD[L](\rho):=L\rho L^\dagger -\frac{1}{2}\{L^\dagger L,\rho\}.
$$  

Here $[A,B]=AB-BA$ is the commutator and $\{A,B\}=AB+BA$ is the anticommutator. Note that $H$ is Hermitian.

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

# Qubit Channel

