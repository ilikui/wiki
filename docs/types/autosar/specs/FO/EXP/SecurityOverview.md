# Explanation of Security Overview (`SecurityOverview`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 1077 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_EXP_SecurityOverview_1077\AUTOSAR_FO_EXP_SecurityOverview.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_EXP_SecurityOverview_1077\AUTOSAR_FO_EXP_SecurityOverview.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_EXP_SecurityOverview_1077\zzgen\FO_EXP_SecurityOverview.complete.txt`

## 文档简介

This explanatory document provides additional information regarding secure design for the AUTOSAR standards. This document is currently limited to the AUTOSAR Adaptive Platform. Support for the AUTOSAR Classic Platform may be added in a future release of this document.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This explanatory document provides additional information regarding secure design for the AUTOSAR standards. This document is currently limited to the AUTOSAR Adaptive Platform. Support for the AUTOSAR Classic Platform may be added in a future release of this document.

### 2. 目标
*原文标题：Objectives*

This document explains security features which could be utilized within the AUTOSAR Adaptive Platform. The motivation is to provide standardized and portable security for Adaptive Applications as well as the whole AUTOSAR Adaptive Platform.

### 3. 范围
*原文标题：Scope*

This document shall be explanatory and help the security engineer to identify security related topics within Adaptive Applications and the AUTOSAR Adaptive Platform.

The content of this document will address the following topics:

* Protection against memory corruption attacks.
* Isolation of software components between each other.
* Isolation of the operating system from software components.
* Existing security solutions

### 4. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

All acronyms used are included in the AUTOSAR TR Glossary.

### 6. 相关文档
*原文标题：Related Documentation*

### 7. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 8. Security 概述
*原文标题：Security Overview*

### 9. Protected Runtime Environment

### 10. 简介
*原文标题：Introduction*

Vulnerabilities in software programs lead to unauthorized system manipulation and access when they are exploited by runtime attacks. Unauthorized system manipulations are, for instance, arbitrary code execution, privilege escalation, or persistent manipulation of storage. The cause of the vulnerabilities are mostly programming mistakes and design flaws. Although design rules and guidelines might be followed during the development process or quality assurance processes like static code analysis or fuzzing are performed, vulnerabilities exist statistically in nearly all projects. These measures can be specified only qualitatively by the AUTOSAR Adaptive Platform specification. However, there are technical countermeasures on the operating system level to harden a system against such attacks. Note that the term harden includes that there is still no guaranteed system security but the effort for a successful attack can be raised to a higher level.

The hardening measures are combined as the term Protected Runtime Environment (PRE) in the context of AUTOSAR Adaptive Platform. A PRE includes the most important, basic protection mechanisms for a complex software environment.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Protection against 存储 Corruption Attacks
*原文标题：Protection against Memory Corruption Attacks*

Unmanaged languages, such as C or C++, enable programmers to implement their code with a high degree of freedom to manage resources. As such, code can be optimized for runtime performance or memory consumption and access to low level functions of the operating system is possible. However, programmers are fully responsible for bounds checking and memory management since C/C++ is memory-unsafe. In practice, this often leads to the violation of the Memory Safety policy or memory errors, as the manual management of memory is very error prone.

Memory errors in turn can be utilized to cause memory corruption, the root cause of nearly all vulnerabilities in software components. If the vulnerabilities are exploited by an attacker the possible impact is, for example, arbitrary code execution, privilege escalation, or the leakage of sensitive information.

The language of choice in the AUTOSAR Adaptive Platform is C++14 as proposed in platform design explanatory document .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 概述
*原文标题：Overview*

The exploitation of vulnerabilities and its mitigation is a complex topic. Computer security researchers continuously develop new attacks and corresponding defenses. A general model for memory corruption attacks and the corresponding protecting techniques is described in . The model (cf. Figure ) summarizes the general causes of vulnerabilities, the way to exploit them according to the targeted impact, as well as mitigation policies on the individual attack stages for four types of attacks: Code corruption attack, Control-flow hijack attack, Data-only attack, and Information leak. On each attack stage they define several policies that must hold to prevent a successful attack.

The first two stages are common for all attack types and describe the root cause of vulnerabilities. In the first stage a memory corruption manipulates a pointer. When this invalid pointer is then dereferenced, a corruption is triggered. A pointer is invalid if it is an out-of-bounds pointer, i.e. pointing out of the bounds of a previously allocated memory area, or if it becomes a dangling pointer, i.e. pointing to a deleted object.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Secure Coding

A first measure to counter vulnerabilities at their root is to avoid mistakes and errors in the first place. To reach this goal programmers have to take care of many pitfalls during the development process. A simple example is the usage of unsafe functions from the standard C library like strcpy(). It copies a null character terminated character string to a buffer until the null character is reached. If the allocated destination buffer is not large enough, the function still copies characters behind the end of the buffer and thus overwrites other data. This is one of many pitfalls commonly known as a buffer overflow and can be used by an attacker, for example, to overwrite the stored return pointer if the buffer is allocated on the stack. For the given example a programmer should use safer variants instead. To that end, many standard C library functions have been supplemented with versions including a bounds check, for strcpy() this is strncpy(). Therewith the length of the input is limited and the buffer, if it is allocated properly, does not get overflowed. While there are supposedly more safe functions, such as strncpy(), they come with their own quirks and flaws.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Attacks and Countermeasures

For a second line of defense it is assumed that vulnerabilities are present and that some will always be inserted by developers. Therefore a requirement for enhanced countermeasures is independence from written code. The goal is to mitigate exploitation of vulnerabilities.

### 15. 代码 Corruption Attack
*原文标题：Code Corruption Attack*

A Code Corruption Attack intends to manipulate the executable instructions in the text segment in the virtual memory space and to breach the Code Integrity policy (cf. Figure ).

The countermeasure is to set the memory pages containing code to read-only or W \oplus X (write xor execute), respectively. It has to be implemented on both system levels, i.e. the processor as well as the operating system. The MMU of the CPU has to provide fine-grained memory permission layout (e.g. NX-bit ) or the operating system should emulate this. Further, the operating system level has to support the underlying permission layout, e.g. like W \oplus X  or Data Execution Prevention (DEP) . But care has to be taken if self-modifying code and Just-In-Time (JIT) compilation is used, as the generated code must first be written to writeable pages, which are then set to be executable.

### 16. Control-flow Hijack Attack

A Control-flow Hijack Attack starts with the exploitation of a memory corruption to modify a code pointer so that it points to an attacker defined address and the Code Pointer Integrity policy is harmed (cf. Figure ). This pointer is then used by a indirect control flow transfer in the original code. Therewith the control-flow is diverted from the original and so its Control-flow Integrity is violated. The last step is the execution of the exploit payload. The literature distinguishes between two approaches: code-injection attacks and code-reuse attacks. While code-injection attacks  are based on injecting arbitrary and custom instructions (a.k.a. shellcode) into the memory as exploit payload, code-reuse attacks, such as Return Oriented Programming (ROP) , Jump Oriented Programming (JOP) , and return-to-libc , utilize existing code in the process memory to construct so called gadgets, which enable the targeted malicious functionality.

All in all, a control-flow hijack attack will be successful if the integrity of a code pointer and of the control-flow are broken.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Data-only Attack

A memory corruption can also be exploited to modify security critical data that is not related to control-flow data. For instance, exploiting a buffer overflow to alter a conditional construct can lead to unintended program behavior. Therewith the policy Data Integrity is violated. Techniques such as Data Space Randomization and Write Integrity Testing (WIT) makes it harder to perform such kinds of attacks but they are not established in practice yet.

### 18. Information Leak

Memory corruption attacks are also used to leak memory contents. Therewith probabilistic countermeasures like ASLR can be circumvented by the knowledge of randomly generated data. As for the data-only attack Data Space Randomization might help to mitigate information leakage.

### 19. Existing Solutions

In this section current state-of-the-art solutions of implemented countermeasures mentioned in the sections before are presented. For each approach the system level (compiler, operating system, or hardware) at which an approach is enforced is stated and which technical and security requirements are expected.

### 20. Write xor Execute, 数据 Execution Prevention (DEP)
*原文标题：Write xor Execute, Data Execution Prevention (DEP)*

System Level: Hardware, Operating System

The idea of this approach is to flag memory pages either writable or executable, but not both at the same time. Therewith code-injected attacks are mitigated. At the lowest system level a mechanism for fine-grained memory page permissions is required. Further the operating system must support the hardware mechanism or even emulate a memory page permission mechanism.

| Architecture | Instruction Set | Enforcement |
|---|---|---|
| x86 | AMD64 | No-eXecution bit (NX-bit), Page Table |
| Intel64 | eXecute Disable (XD-bit), Page Table |  |
| ARM | ARMv6 | execute never bit (XN-bit), Page Table |
| ARMv8-A | PEN privileged execute never, PAN privileged access never |  |
| SPARC | Oracle SPARC Architecture 2011 | Translation Storage Buffer (optional) |
| PowerPC | IBM PowerISA | Segment Lookaside Buffer (SLB) |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Stack Smashing Protection (SSP)

System Level: Compiler

Stack Smashing Protection (SSP) mechanisms place pseudo-random values (Stack Canaries or Stack Cookie) on the stack before the saved base pointer and the saved return address as part of the function prologue and compare the value again before a function returns. SSP is enforced at compile-time. Due to performance reasons, the compiler has to decide which function has to be protected. If the compiler implementation makes the wrong decision and the concerned function is vulnerable, SSP fails. Further, information leaks enable an attacker to read the pseudo-random value and integrate it to her exploit so that the buffer is overwritten with the correct value.

| Compiler | Option | Description |
|---|---|---|
| GNU Compiler Collection (GCC) | -fstack-protector | Emit extra code to check for buffer overflows, such as stack smashing attacks. This is done by adding a guard variable to functions with vulnerable objects. This includes functions that call alloca, and functions with buffers larger than 8 bytes. The guards are initialized when a function is entered and then checked when the function exits. If a guard check fails, an error message is printed and the program exits. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Address Space Layout Randomization (ASLR)

System Level: Compiler, Operating System

Address Space Layout Randomization (ASLR) obfuscates the address space layout of a process. Therewith the locations of various memory segments get randomized which makes it harder to predict the correct target address which is needed to perform a code-reuse attack. ASLR requires high entropy to prevent brute-force de-randomization attacks and depends on the prevention of unintended Information Leak (Section ) that are used by dynamically constructed exploit payloads. To guarantee high entropy ASLR should be implemented on 64-bit architectures (or above). Additionally, ASLR requires position-independent executables (PIE) which allows to use a random base address for the main executable binary.

ASLR is enforced by the operating system primarily but requires position-independent executables for binaries and position independent code for shared libraries generated by the complier.

| Family | Name | Implementation |
|---|---|---|
| Linux | Linux kernel | Linux kernel mainline \geq 3.14. ASLR for user-space programs and Kernel Address Space Layout Randomization (KASLR) for the kernel itself. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Control-flow Integrity (CFI)

System Level: Compiler

Control-flow Integrity (CFI) is a current research topic. However, Clang includes an implementation of a number of Control-flow Integrity (CFI) schemes, which are designed to abort the program upon detecting certain forms of undefined behavior that can potentially allow attackers to subvert the program's control flow. These schemes have been optimized for performance, allowing developers to enable them in release builds. The CFI implementation in Clang has a performance overhead of ca. 1% and a binary size overhead of ca. 15% (only forward-edges).

| Compiler | Option | Description |
|---|---|---|
| GNU Compiler Collection (GCC) | -fvtable-verify = | This option is only available when compiling C++ code. It turns on (or off, if using -fvtable-verify=none) the security feature that verifies at run time, for every virtual call, that the vtable pointer through which the call is made is valid for the type of the object, and has not been corrupted or overwritten. If an invalid vtable pointer is detected at run time, an error is reported and execution of the program is immediately halted. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 代码 Pointer Integrity (CPI), 代码 Pointer Separation (CPS)
*原文标题：Code Pointer Integrity (CPI), Code Pointer Separation (CPS)*

System Level: Compiler

Code-Pointer Integrity (CPI) is a property of C/C++ programs that guarantees absence of control-flow hijack attacks by requiring integrity of all direct and indirect pointers to code. Code-Pointer Separation (CPS) is a simplified version of CPI that provides strong protection against such attacks in practice. SafeStack is a component of CPI/CPS, which can be used independently and protects against stack-based control-flow hijacks.

CPI/CPS/SafeStack can be automatically enforced for C/C++ programs through compile-time instrumentation with low performance overheads of 8.5% / 1.9% / 0.05% correspondingly. The SafeStack enforcement mechanism is now part of the Clang compiler, while CPI and CPS are available as research prototypes. For the current status please see .

| Compiler | Option | Description |
|---|---|---|
| Clang^(,) | -fsanitize=safe-stack | SafeStack is an instrumentation pass that protects programs against attacks based on stack buffer overflows, without introducing any measurable performance overhead. It works by separating the program stack into two distinct regions: the safe stack and the unsafe stack. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Pointer Authentication

System Level: Hardware, Compiler

Pointer Authentication uses cryptographic functions to authenticate and verify pointers before dereferencing . Pointers are replaced by a generated signature and cannot be dereferenced directly. This requires compiler and instruction set support. ARM recently introduces the Pointer Authentication extensions in ARMv8.3-A specification. The GCC introduces basic support for pointer authentication in version 7 for the AArch64 target (ARMv8.3-A architecture). The overhead is negligible because of hardware acceleration for the cryptographic primitives.

| Compiler | Option | Description |
|---|---|---|
| GNU Compiler Collection (GCC) | -msign-return-address= |  |

| scope | Select the function scope on which return address signing will be applied. Permissible values are none, which disables return address signing, non-leaf, which enables pointer signing for functions which are not leaf functions, and all, which enables pointer signing for all functions. The default value is none. |
|---|---|

### 26. Isolation

Isolating software components within a system is a common protection measure to protect other components from erroneous ones, either through unintentional programming errors, or intentional harm caused by an attacker taking over a corruptible component. While the protective measures detailed in section  are a preventive measure, intended to impede an attacker from taking over a software component by exploiting programming errors, isolation intends to limit the influence an attacker might have to other software components after taking over a software component. As such, isolation is only an effective measure, if the architecture of the system is appropriately designed, dividing and isolating different functional aspects of the system accordingly. Note that this guide does not cover this architectural aspect of isolation, but the technical aspect, i.e. how isolation can be implemented.

The following sections describe two approaches to isolation: the isolation of multiple software components between each other, and the isolation of software components and the operating system itself. These two approaches are orthogonal - i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Horizontal Isolation

### 28. Virtual 存储
*原文标题：Virtual Memory*

The oldest and most prevalent isolation mechanism is the concept of virtual memory, i.e. presenting each running software component of a system with its own virtual address space, which is mapped to the available physical memory by the operating system. The origins date back to the 1950s, with the original intention of hiding the fragmentation of physical memory, but offers the possibility of isolating software components. As each component operates in a virtual address space, it cannot access the memory of other components (unless explicitly allowed by the operating system). This feature requires hardware support, e.g. by a Memory Management Unit (MMU), but this support is nearly ubiquitous in most computer systems except very small microcontrollers.

An extension of this concept is that of virtual machines (or virtualization), whereby multiple virtual machines (VM) are emulated by a hypervisor. Each VM may run a complete operating system, depending on the degree of virtualization even in an unmodified state. The hypervisor controls the access of each VM to the physical hardware components, or even emulate certain components such as network interfaces.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. OS-Level Virtualization

A more lightweight form of virtualization, often called operating-system-level virtualization or containerization, is available in modern OS. Prominent examples are "LXC", which is built on top of the Linux Kernel Namespacing functionality, or the "Jail" functionality provided by the FreeBSD operating system. These tools only virtualize certain resources of an operating system, for example, file system, the process tree, or the network stack. This way, the operating system creates a container with a tightly controlled access to system resources or other containers. In contrast to full virtualization, these containers cannot execute a different operating system, albeit a completely separate user-space instance can be run side-by-side.

| OS Family | Solution | Description |
|---|---|---|
| UNIX | chroot | This is a system call available in many UNIX alike systems, which can be used to set up a an execution environment with a different root filesystem. As such, it only isolates the filesystem of the host from the container. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Vertical Isolation

Isolating the operating system from applications, often called sandboxing is an another important aspect of a protected runtime environment. The basic idea is to limit the capabilities of a process, i.e. restricting what a process can do. The classic way to do this is by dropping privileges as soon as they are not needed anymore, i.e. privilege revocation. For example, the ping command requires root privileges on UNIX systems to create a raw network socket, but will drop its privileges to a regular user after creating it. Ideally, a software component should drop (or never be given) any privileges it does not require, or drop them as soon as they are no longer required. As with the example of ping, any software component must then be structured with a setup phase, in which all advanced privileges are used and subsequently dropped. The following shows a few examples of operating system functionalities, which allow an application to drop capabilities or privileges.

| OS Family | Solution | Description |
|---|---|---|
| Linux | Seccomp Mode 1 (Strict) | Processes on the Linux operating system can limit their set of allowed system calls in a very easy manner. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. POSIX User and Group Identity 配置
*原文标题：POSIX User and Group Identity Configuration*

Execution Management supports the configuration of POSIX user and group identity attributes at process startup. This allows Adaptive AUTOSAR applications to execute under specific operating system user/group contexts, which is essential for enforcing access control, isolating persistent data, and aligning with containerization or POSIX-native file permissions.

The identity information is provided via: UID: the user identifier under which the process runs. GID: the primary group identifier for the process. SupplementaryGID: one or more supplementary group identifiers. To provide flexibility across different deployment scenarios, UID, GID, and SupplementaryGIDs are configured at Process level with the possibility to redefine at StartupConfig level the SupplementaryGIDs.

This mechanism enables integrators to run the same Executable under different identity contexts, depending on the functional state of the platform (e.g., normal mode, diagnostic mode, maintenance, or degraded operation).

AUTOSAR does not mandate that UID, GID, or SupplementaryGIDs be configured in every Process. These attributes are optional and their omission does not constitute an error.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Isolated Runtime Environment

There are multiple technologies that isolate computing environments from one another in order to increase security. Trusted Execution Environments (TEEs) , Secure Elements (SEs)  and integrated SEs are well-known examples.

Whilst different technologies have different capabilities and trade-offs, all ensure that sensitive data is stored, processed, and protected in an isolated and trusted environment; offering protection against attacks generated in the rest of the device and even from other actors inside the execution environment.

### 33. Hardware Trust Anchors

Hardware trust anchors have the main functions to protect sensitive data from manipulation and to support computation intensive crypto functions.

Examples of standardized Hardware Trust Anchors include:

# Hardware Security Modules (HSM)
# Secure Hardware Extensions (SHE)
# Trusted Platform Modules (TPM)

### 34. Hardware Security 模块
*原文标题：Hardware Security Module*

The current industry standard for the most robust cybersecurity solutions in the automotive industry is a Hardware Security Module (HSM). HSMs in automotive are often based on the EVITA (E-safety Vehicle Intrusion protected Applications) standard. EVITA defines different levels of security - Light, medium and full to address different security requirements. Typically, it includes

* Secure boot - Ensures the ECU firmware is authenticated and not tampered in the boot process
* Cryptographic technologies - Hardware accelerators for symmetric and asymmetric cryptography, random number generation, and other cryptographic primitives.
* Secure storage - Protected RAM and flash area for program code and data

  * to store Secure firmware and sensitive data, such as cryptographic keys and certificates.
  * Firmware Integrity: The dedicated memory ensures that security-related firmware can be updated securely and that the integrity of the firmware is maintained, preventing unauthorized modifications.
* Secure communication support - Protects data between ECUs, or between ECU and external interfaces.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Secure Hardware Extensions (SHE)

SHE is a security standard designed for automotive microcontrollers, developed by the Hersteller Initiative Software (HIS), a consortium of major German car manufacturers.

SHE consists of 3 building blocks

* A storage area to keep the sensitive information
* Implementation of a block cipher
* Control logic connecting to the CPU

SHE can be implemented in several ways: a finite state machine or small dedicated CPU core.

While both SHE and HSM provide hardware-based security for automotive systems, SHE focuses on essential security functions suitable for basic requirements, whereas HSM offers a comprehensive set of advanced security features for high-security applications. The choice between SHE and HSM depends on the specific security needs, complexity, and cost considerations of the automotive system.

### 36. Trusted Platform 模块
*原文标题：Trusted Platform Modules*

TPMs are specialized hardware components that focus on foundational security features like secure boot and platform integrity verification, suitable for securing the overall vehicle platform.

### 37. Trusted Execution Environments

Modern CPUs provide a collection of isolation technologies. Different forms of Memory Protection or Memory Management units can isolate one region of memory from another. Different processor modes can ensure that code executing at lower privilege cannot access resources associated with higher privilege. In some CPU architectures, a combination of these two techniques is used to provide effective isolation against software attacks.

Many CPU vendors offer a hardware-based Trusted Execution Environment or TEE for their MCU's and MPU's for their Root of Trust. A hardware-based TEE provides a source of integrity (e.g. trusted boot) and confidentiality (secure storage and crypto operations). Where higher levels of assurance and attack resistance are required, the TEE can be used with an optional trusted subsystem that can protect from physical attacks.

### 38. TEE 架构
*原文标题：TEE Architecture*

A Trusted Execution Environment is the name given to an execution environment formed by a combination of CPU-based isolation, plus a software operating system. TEEs can in theory be created by any isolation technology. This gives a solution which can be highly performant (as it leverages the high-power primary CPU) and secure against software attacks. This blend of features meets the requirements of many automotive applications.

Trusted Execution Environments provide a secure environment for application code. Whilst a major use case is to protect cryptographic functions and thus provide similar aims to an HSM, they have far broader applicability. TEEs are often used to provide capabilities such as secure logging and audit or to protect access to peripherals, for example when enforcing Digital Media Rights protection for high-definition streaming video.

TEEs are provided with an API set, and optionally an associated protection profile.

TEEs provide isolation from the regular execution environment (REE) running one or more operating systems, possibly under control of a hypervisor.

Figure 3 illustrates the top-level logical separation between REE and TEE on the same platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 28 章（内容从略，见纯文本全文）

39. TEE Summary
40. Global Platform Standards
41. 简介
42. TEE Protection Profile
43. Secure Communication
44. 简介
45. Post Quantum 密码服务
46. Protection
47. SecOC
48. Constraints
49. Pros/Cons
50. Key 管理
51. Use-cases
52. (D)TLS
53. Constraints
54. Pros/Cons
55. Key managmenent
56. Use-cases
57. IPsec
58. Constraints
59. Pros/Cons
60. Key 管理
61. Use-cases
62. MACsec
63. Constraints
64. Pros/Cons
65. Key 管理
66. Use-cases
