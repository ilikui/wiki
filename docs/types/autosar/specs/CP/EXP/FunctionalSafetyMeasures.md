# Overview of Functional Safety Measures in AUTOSAR (`FunctionalSafetyMeasures`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 664 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_FunctionalSafetyMeasures_664\AUTOSAR_CP_EXP_FunctionalSafetyMeasures.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_FunctionalSafetyMeasures_664\AUTOSAR_CP_EXP_FunctionalSafetyMeasures.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_FunctionalSafetyMeasures_664\zzgen\CP_EXP_FunctionalSafetyMeasures.complete.txt`

## 文档简介

Functional safety is a system characteristic which is taken into account from the beginning, as it may influence system design decisions. Therefore AUTOSAR specifications include requirements related to functional safety.

Aspects such as complexity of the system design can be relevant for the achievement of functional safety in the automotive field.

Software is one parameter that can influence complexity on system level. New techniques and concepts for software development can be used in order to minimize complexity and therefore can ease the achievement of functional safety.

AUTOSAR supports the development of safety-related systems by offering safety measures and mechanisms. However AUTOSAR is not a complete safe solution.

The use of AUTOSAR does not imply  compliance. It is still possible to build unsafe systems using the AUTOSAR safety measures and mechanisms.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

Functional safety is a system characteristic which is taken into account from the beginning, as it may influence system design decisions. Therefore AUTOSAR specifications include requirements related to functional safety.

Aspects such as complexity of the system design can be relevant for the achievement of functional safety in the automotive field.

Software is one parameter that can influence complexity on system level. New techniques and concepts for software development can be used in order to minimize complexity and therefore can ease the achievement of functional safety.

AUTOSAR supports the development of safety-related systems by offering safety measures and mechanisms. However AUTOSAR is not a complete safe solution.

The use of AUTOSAR does not imply  compliance. It is still possible to build unsafe systems using the AUTOSAR safety measures and mechanisms.

### 2. 免责声明
*原文标题：Disclaimer*

This explanatory document represents the functional safety measures and mechanisms of the latest release of AUTOSAR. Some of the described mechanisms and measures may be implemented differently or may not be available in previous releases. The user of this document shall always consult the applicable referenced documents.

### 3. 范围
*原文标题：Scope*

The content of this document is structured into separate chapters as follows:

Functional Safety Mechanisms: This chapter contains AUTOSAR functional safety mechanisms related to freedom from interference between AUTOSAR SW-Cs.

* Memory: Partitioning mechanisms of AUTOSAR with the context of Application Software development and deployment.
* Timing: Temporal Program Flow Monitoring mechanisms using the Watchdog Manager and Timing Protection mechanisms using the Operating System.
* Execution: Logical Supervision mechanisms using the Watchdog Manager.
* Exchange of Information: Communication fault detection mechanisms using the End-2-End Library and Extensions.

Functional Safety Measures: This chapter contains topics related to the development of safety-relevant systems. The following items are covered:

* Functional Safety Measures of AUTOSAR, such as Traceability, Development Measures and the Evolution of the Standard.
* Functional Safety Measures not delivered by AUTOSAR.
* Safety Use Case: An exemplary safety related system using AUTOSAR based on the guided tour example Front Light Management.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 目的
*原文标题：Purpose*

Information about AUTOSAR functional safety mechanisms and measures is currently distributed throughout the referenced documentation. Unless one knows how functional safety mechanisms are supported and where the necessary information is specifically located, it is difficult to evaluate how a safety-relevant system can be implemented using AUTOSAR efficiently.

This explanatory document summarizes the key points related to functional safety in AUTOSAR and explains how the functional safety mechanisms and measures can be used.

Note: This document supersedes the AUTOSAR document "Technical Safety Concept Status Report", ID: 233.

### 5. Intended Audience

This document gives an overview of the functional safety measures and mechanisms of AUTOSAR and their implementation to those involved in the development of safety-relevant (ECU) systems. Therefore this document is intended for the users of AUTOSAR, including people involved in safety analysis.

### 6. 功能性 Safety Mechanisms
*原文标题：Functional Safety Mechanisms*

Modern ECUs contain highly modular embedded software, which can consist of both non-safety-related and safety-related software components, which perform functions with different ASIL ratings.

According to ISO 26262 Coexistence], if the embedded software consists of software components with different ASIL ratings, then either the entire software must be developed according to the highest ASIL, or freedom from interference shall be ensured for software components with a higher ASIL rating from elements with a lower ASIL rating.

Furthermore, the ISO 26262 Freedom from interference between software elements.] standard provides examples for faults, which cause interference between software components. The faults are grouped as follows:

* Memory
* Timing
* Execution
* Exchange of Information

During the course of the following chapter, an overview of AUTOSAR functional safety mechanisms for these terms.] is given. Those mechanisms assist with the prevention, detection and mitigation of hardware and software faults to ensure freedom from interference between software components.

Note: AUTOSAR functional safety mechanisms are used to support the development of safety-related systems.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 存储 Partitioning
*原文标题：Memory Partitioning*

A modular implementation of embedded systems that consists of both safety-related software components of different ASILs or of safety-related and non-safety-related software components is facilitated by AUTOSAR features that support freedom from interference between such software components.

Software Components which are developed according to a low ASIL rating may interfere by wrongfully accessing memory regions of software components with a higher ASIL rating. An execution of software components in separate memory regions or memory partitions supports the prevention of such memory access violations. Please see section  for further details.

The features described in this chapter are part of the OS and the RTE functionality, which are required to enable groups of SW-Cs to run in separate memory partitions, in order to provide freedom from interference between software components.

### 8. Fault Models

According to ISO 26262 D.2.3 Memory], the following memory-related effects of faults can be considered as a cause for interference between software components:

* Corruption of content.
* Read or write access to memory allocated to another software element.
* Inconsistent data (e.g. due to update during data fetch).
* Stack overflow or underflow.

The functional safety mechanism Memory Partitioning provides protection by means of restricting access to memory and memory-mapped hardware. Memory partitioning means that OS-Applications reside in different memory areas (partitions) that are protected from each other. In particular, code executing in one partition cannot modify memory of a different partition. Moreover, memory partitioning enables to protect read-only memory segments (e.g. code execution), as well as to protect memory-mapped hardware.

The memory partitioning and user/supervisor-modes related features address the following goal: Supporting freedom from interference between software components by means of memory partitioning (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 描述
*原文标题：Description*

Memory Partitioning is an extension of the RTE and the OS, which is described in the AUTOSAR Specification as "One Partition will be implemented using one OS-Application", V3.5.0, R4.1 Rev 3, Page 154, `ECUC_EcuC_00005`] and "SW-Cs grouped in separate user-mode memory partitions".

During the course of this chapter, this extension will be described as the relationship of Runnables, Tasks, Software Components and OS-Applications in the context of the AUTOSAR Methodology.

### 10. Application 软件
*原文标题：Application Software*

In the AUTOSAR Architecture, Application Software is located above the RTE and consists of interconnected AUTOSAR Software Components, which atomically encapsulate parts of the Application Software functionality.

AUTOSAR Software Components are hardware-independent, so they can be integrated onto any available ECU Hardware. To facilitate the inter- and intra-ECU information exchange, AUTOSAR Software Components communicate exclusively over the RTE.

AUTOSAR Software Components contain a number of Functions and Variables, which provide the internal functionality. The internal structure of an AUTOSAR Software Component, its Variables and Function Calls, is hidden from the public view via the header files. Only the external RTE calls are presented at the public interface.

AUTOSAR Software Components also contain functions, which must be invoked at runtime. Those C-functions are referred to as Runnables in AUTOSAR.

Runnables cannot be executed by themselves; they must be assigned to executable entities of the operating system. Such an assignment can be performed by inserting function calls of Runnables into OS-Task bodies.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. OS Applications

presents an interpretation of the relations from . Runnables from AUTOSAR Software Components are assigned to OS-Tasks according to this diagram.

AUTOSAR OS-Applications are collections of Operating System objects such as Tasks, ISRs, Schedule Tables, Counters and Alarms that form a cohesive functional unit. All objects which belong to the same OS-Application have access to each other.

The Operating System objects within an OS-Application may belong to different AUTOSAR Software Components. The RTE implements a memory area which is accessible by all members of the OS-Application without restrictions to facilitate communication between the SW-Cs efficiently.

There are two classes of OS-Applications:

# "Trusted OS-Applications are allowed to run with monitoring or protection features disabled at runtime. They may have unrestricted access to memory and the Operating System module's API. Trusted OS-Applications need not have their timing behavior enforced at runtime. They are allowed to run in privileged mode when supported by the processor."
# "Non-Trusted OS-Applications are not allowed to run with monitoring or protection features disabled at runtime.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Communication and 代码 Sharing
*原文标题：Communication and Code Sharing*

According to  and , an OS-Application can contain multiple AUTOSAR Software Components and associated Runnables. Runnables are only allowed to directly access variables and to perform function calls within their respective Software Component.

Internal Function Calls and Variables of a Software Component are not publically known by other Software Components, as their definitions are not presented by the header files of the external interface.

Therefore, a direct communication via variables and the execution of Code of other Software Components is not intended.

In , this is illustrated by the example of code-sharing, which is only allowed within the Software Component and not between Software Components of one OS-Application. Communication with other Software Components shall be performed via the RTE. Runnable 4 may not execute functions belonging to SW-C 2.2.

### 13. 存储 Partitioning within Application 软件
*原文标题：Memory Partitioning within Application Software*

Application Software in an AUTOSAR ECU can consist of safety-related and non-safety-related Software Components. Freedom from interference between Software Components with different ASIL ratings shall be ensured according to the requirements of ISO 26262 Coexistence].

The AUTOSAR Operating System provides freedom from interference for memory-related faults by placing OS-Applications into separate memory regions. This mechanism is called Memory Partitioning. OS-Applications are protected from each other, as code executing in the Memory Partition of one OS-Application cannot modify other memory regions. The corresponding requirements from the AUTOSAR OS specification are presented in .

| Req. ID | Requirement Text |
|---|---|
| The Operating System module shall prevent write access to the OS-Application's private data sections from other non-trusted OS-Applications. |  |
| The Operating System module shall prevent write access to all private stacks of Tasks/Category 2 ISRs of an OS-Application from other non-trusted OS-Applications. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 存储 Partitioning within 软件 Components
*原文标题：Memory Partitioning within Software Components*

A Mixed-ASIL Software Component could consist of Runnables with different ASIL ratings and therefore requires an execution environment which supports freedom from interference between those Runnables. An execution of different Runnables of one Software Component in different Memory Partitions is not possible due to the following:

Memory Partitioning is performed at the level of OS-Applications. According to  and  however, a Software Component can only be assigned to one OS-Application and therefore has only one Memory Partition. Also, Runnables of a Software Component can only be called by the Tasks of one OS-Application.

As shown in , Runnables of a Software Component cannot be distributed to Tasks of multiple OS-Applications.

Memory Partitioning cannot be used to separate Runnables within the same SW-C. If it is necessary to have a Software Component comprise Runnables with different ASIL-ratings and an independent execution with freedom from interference is required for those Runnables, then memory partitioning at OS-Application level is not sufficient, memory partitioning has to be performed at Task-level. This approach is shown in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Implementation of 存储 Partitioning
*原文标题：Implementation of Memory Partitioning*

A broad variety of technical safety concepts on the system- and software level can be implemented using the mechanism Memory Partitioning.

 shows a possible implementation whereas all Basic Software Modules are executed in one trusted/supervisor-mode memory partition (highlighted in red in ). Some SW-Cs are logically grouped and put in separate non- trusted/user-mode memory partitions (highlighted in green). Selected SW-Cs belong to the same trusted/supervisor-mode memory partition as the Basic Software Modules (see fourth SW-C in  highlighted in red). There may be several non-trusted/user-mode  partitions, each containing one or more SW-Cs.

The execution of SW-Cs in non-trusted/user-mode memory partitions is restricted from modifying other memory regions, whereas the execution of SW-Cs of trusted/supervisor-mode memory partitions is not restricted.

Modern microcontrollers for safety relevant applications support memory partitioning via dedicated hardware, a Memory Protection Unit (MPU).

Note: It is assumed that memory partitioning will be implemented on a microcontroller which has an MPU or similar hardware features Partitioning].

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 检测 and Reaction
*原文标题：Detection and Reaction*

The functional safety mechanism Memory Partitioning provides protection by means of restricting access to memory and memory-mapped hardware. Code executing in one partition cannot modify memory of a different partition. Memory partitioning enables to protect read-only memory segments, as well as to protect memory-mapped hardware. Moreover, Software Components which are executed in user-mode have restricted access to CPU instructions like e.g. reconfiguration.

The mechanism Memory Partitioning can be implemented with the support of microcontroller hardware such as Memory Protection Unit or Memory Management Unit. The microcontroller hardware must be configured appropriately by the Operating System to facilitate detection and prevention of incorrect memory accesses. The execution of Software Components which are executed in non-trusted/user-mode memory partitions is then monitored.

In case of a memory access violation or a CPU instruction violation in a non-trusted/user-mode partition, the faulty access is blocked and an exception is raised by the microcontroller hardware.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 限制
*原文标题：Limitations*

# Memory Partitioning is not applicable for trusted OS-Applications.

  The execution of trusted/supervisor-mode memory partitions is not controlled by means of the Operating System and some MMU/MPU hardware implementations.
# Memory Partitioning not supported on task-level.

  The implementation of task-level partitioning is not mandatory for AUTOSAR OS implementations. Freedom from Interference within the OS-Application may be therefore not supported.
# Performance penalty due to Memory Partitioning.

  Depending on the architecture of the Application Software and the implementation of microcontroller hardware and the OS, there is a performance penalty associated with the use of Memory Partitioning. This penalty increases with the number of context switches which are performed per time unit.
# No Basic Software Partitioning.

  The current specification of the Basic Software does not specify memory partitioning for Basic Software Components with different ASIL ratings from different suppliers.

### 18. References to AUTOSAR Documents

Source: Requirements on AUTOSAR Features, V1.2.1, R4.1 Rev 2

AUTOSAR OS shall support isolation and protection of application software

AUTOSAR shall support usage of hardware memory protection features to enhance safety

### 19. References to ISO26262

The following references to the ISO 26262 standard are related to the aspects of freedom from interference for software components with different ASIL ratings.

Additionally, concepts related to software partitioning and memory-related faults are covered.

| ID | ISO26262 Reference |
|---|---|
| 01 | Part 6:  Partitioning |
| 02 | Part 6:  Dependent failure analysis |
| 03 | Part 6: |
| 04 | Part 6: |
| 05 | Part 9: |
| 06 | Part 9: |
| 07 | Part 9: |

### 20. 时序 Monitoring
*原文标题：Timing Monitoring*

Timing is an important property of embedded systems. Safe behavior requires that the systems actions and reactions are performed within the right time.

The right time can be described in terms of a set of timing constraints that have to be satisfied. However, an AUTOSAR software component cannot ensure proper timing by itself. It depends on proper support by the AUTOSAR runtime environment and the basic software. During integration the timing constraints of the AUTOSAR software components need to be ensured.

### 21. Fault Models

According to ISO 26262 D.2.2 Timing and execution], the following Timing- and Execution-related faults can be considered as a cause for interference between software components:

* Blocking of execution
* Deadlocks
* Livelocks
* Incorrect allocation of execution time
* Incorrect synchronization between software elements

Timing protection and monitoring can be described as monitoring of the following properties: Monitoring that tasks are dispatched at the specified time, meet their execution time budgets, and do not monopolize OS resources.

To guarantee that safety-related functions will respect their timing constraints, tasks monopolizing the CPU (such as heavy CPU load, many interrupt requests) shall be detected and handled.

### 22. 描述
*原文标题：Description*

The following timing monitoring mechanisms are provided by AUTOSAR:

# Timing Protection mechanisms using the Operating System.
# Temporal Program Flow Monitoring using the Watchdog Manager.

This chapter will explain the applicability of the Watchdog Manager for implementing timing monitoring of Application Software. Temporal Program Flow Monitoring consists of the mechanisms Deadline Supervision and Alive Supervision, which will be discussed thereafter.

The Watchdog Manager also provides a mechanism called Logical Supervision, which can be combined with Deadline Supervision to provide a high diagnostic coverage. This topic is discussed in Chapter .

Also, an overview of the Timing Protection mechanisms of AUTOSAR OS will be given.

### 23. Supervised Entities

The Watchdog Manager supervises the execution of Application Software in an AUTOSAR ECU. The logical units of supervision are called Supervised Entities. There is no fixed relationship between Supervised Entities and the architectural building blocks in AUTOSAR. Typically a Supervised Entity may represent one SW-Cs or a Runnable within an SW-C, a BSW module or CDD depending on the choice of the developer.

Important places in a Supervised Entity are defined as Checkpoints. The code of Supervised Entities is interlaced with function calls of the Watchdog Manager. Those calls are used to report to the Watchdog Manager that a Checkpoint is reached.

### 24. Watchdog 管理器
*原文标题：Watchdog Manager*

The Watchdog Manager is a basic software module of the AUTOSAR Architecture.

The Watchdog Manager links the triggering of the Watchdog Hardware, V3.4.0, R4.1 Rev 3, Page 42, Page 82.] to the supervision of software execution. When a violation of the configured temporal and/or logical constraints on program execution is detected, a number of configurable actions to recover from this failure will be taken.

The Watchdog Manager provides the following mechanisms for Temporal Program Flow Monitoring:

Alive Supervision: Periodic Supervised Entities have constraints on the frequency with which they are executed. By means of Alive Supervision, Watchdog Manager checks periodically if the Checkpoints of a Supervised Entity have been reached within the given limits. This means that Watchdog Manager checks if a Supervised Entity is run not too frequently or not too rarely.

Alive Supervision is performed using a single Checkpoint without transitions. The supervised Entity must cyclically call the Checkpoint to signal its timely operation. The Watchdog Manager is executed periodically by the Operating System to verify the Checkpoint parameters.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. the Operating 系统的时序 Protection
*原文标题：Timing Protection of the Operating System*

According to the AUTOSAR OS Specification, a timing fault in a real-time system occurs when a task or interrupt misses its deadline at runtime.

The AUTOSAR OS does not offer deadline supervision for timing protection. Deadline supervision is insufficient to correctly identify the Task or Interrupt causing a timing fault in an AUTOSAR system. A deadline violation may be caused by unrelated Tasks or Interrupts interfering with the execution. Please consult the AUTOSAR OS Specification for further details.

Whether a task or interrupt meets its deadline in a fixed priority preemptive operating system like AUTOSAR OS is determined by the following factors:

* The execution time of Task/Interrupt in the system.
* The blocking time that Task/Interrupt suffers from lower priority Tasks/Interrupts locking shared resources or disabling interrupts.
* The inter-arrival rate of Task/Interrupt in the system.

For safe and accurate timing protection it is necessary for the operating system to control these factors at runtime to ensure that Tasks/Interrupts can meet their respective deadlines. The AUTOSAR OS provides the following timing protection mechanisms:

# Execution Time Protection.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 检测 and Reaction
*原文标题：Detection and Reaction*

The Watchdog Manager provides three mechanisms for Temporal and Logical Program Flow Monitoring: Deadline Supervision, Alive Supervision and Logical Supervision.

The supervision mechanisms are configured statically. For the monitoring of a Supervised Entity, more than one supervision mechanism can be employed.

Based on the results from each of enabled mechanisms, the status of the Supervised Entity (called Local Status) is computed. When the status of each Supervised Entity is determined, then based on each Local Supervision Status, the status of the whole MCU is determined (called Global Supervision Status).

Depending on the Local Supervision Status of each Supervised Entity and on the Global Supervision Status, the Watchdog Manager initiates a number of mechanisms to recover from supervision failures. These range from local error recovery within the Supervised Entity to a global reset of the ECU.

The following error recovery mechanisms can be employed by the Watchdog Manager:

# Error Handling in the Supervised Entity

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 限制
*原文标题：Limitations*

# The granularity of Checkpoints is not fixed by the Watchdog Manager. Few coarse-grained Checkpoints limit the detection abilities of the Watchdog Manager. For example, if an application SW-C only has one Checkpoint that indicates that a cyclic Runnable has been started, then the Watchdog Manager is only capable of detecting that this Runnable is re-started and check the timing constraints. In contrast, if that SW-C has Checkpoints at each block and branch in the Runnable the Watchdog Manager may also detect failures in the control flow of that SW-C. High granularity of Checkpoints causes a complex and large configuration of the Watchdog Manager.
# The Deadline Supervision has a weakness: it only detects the delays (when the End Checkpoint is reported), but it does not detect the timeouts (when the End Checkpoint is not reported at all).
# The nesting of Deadline Supervision (i.e. start 1, start 2, end 2, end 1) is not supported.
# The Alive Supervision function with more than one checkpoint per Supervised Entity is not consistently specified within the Specification of Watchdog Manager document.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. References to AUTOSAR Documents

Source: Requirements on AUTOSAR Features, V1.2.1, R4.1 Rev 2

AUTOSAR shall support program flow monitoring

AUTOSAR OS shall support timing protection

AUTOSAR OS shall support timing protection

### 29. References to ISO26262

The following references to the ISO 26262 standard are related to the aspects of freedom from interference for software components with different ASIL ratings. Concepts related to timing supervision are covered.

| ID | ISO26262 Reference |
|---|---|
| 03 | Part 6: |
| 08 | Part 6: |
| 09 | Part 6:  NOTE 2, Monitoring of program execution by an external element |

### 30. Logical Supervision

Logical Supervision is a technique for checking the correct execution of software and focuses on control flow errors.

Control flow errors cause a divergence from the valid (i.e. coded/compiled) program sequence during the error-free execution of the application. An incorrect control flow occurs if one or more program instructions are processed either in the incorrect sequence or are not even processed at all. Control flow errors can for example lead to data inconsistencies, data corruption, or other software failures.

### 31. Fault Models

According to ISO 26262 D.2.2 Timing and execution], the following Timing- and Execution-related faults can be considered as a cause for interference between software components:

* Blocking of execution
* Deadlocks
* Livelocks
* Incorrect allocation of execution time
* Incorrect synchronization between software elements

Logical and temporal monitoring of program sequences is used in the automotive industry and mentioned e.g. in ISO 26262 as a measure to detect failures of the processing units (i.e. CPU, microcontroller) and as measure for the detection of failures of the HW clock.

Faults in execution of program sequences (i.e. invalid execution of program sequences) can lead to data corruption, process crashes, or fail-silence violations.

Logical monitoring of program sequences is required/recommended/proposed by ISO 26262, IEC 61508, MISRA.

### 32. 描述
*原文标题：Description*

Logical Supervision of the execution sequence of a program enables the detection of errors that cause a divergence from the valid program sequence during the error-free execution of the application. An incorrect program flow occurs if one or more program instructions are processed either in an incorrect sequence or not even processed at all.

The Watchdog Manager supervises the execution of Application Software in an AUTOSAR ECU. The logical units of supervision are called Supervised Entities. There is no fixed relationship between Supervised Entities and the architectural building blocks in AUTOSAR. Typically a Supervised Entity may represent one SW-Cs or a Runnable within an SW-C, a BSW module or CDD depending on the choice of the developer.

Places relevant for logical supervision in a Supervised Entity are defined as Checkpoints. The code of Supervised Entities is interlaced with function calls of the Watchdog Manager. Those calls are used to report to the Watchdog Manager that a Checkpoint is reached.

Each Supervised Entity has one or more Checkpoints. The Checkpoints and Transitions between the Checkpoints of a Supervised Entity form a Graph.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 69 章（内容从略，见纯文本全文）

33. 检测 and Reaction
34. 限制
35. References to AUTOSAR Documents
36. References to ISO26262
37. End-2-End Protection
38. Fault Models
39. 描述
40. End-2-End Profiles
41. End-2-End 状态 Machine
42. the End-2-End Protection 库的集成
43. COM End-2-End Callout
44. RTE 数据转换器
45. 检测 and Reaction
46. 限制
47. References to AUTOSAR Documents
48. References to ISO26262
49. 功能性 Safety Measures
50. 功能性 Safety Measures of AUTOSAR
51. Traceability
52. Development Measures and the Evolution of the Standard
53. 功能性 Safety Measures not delivered by AUTOSAR
54. Safety related Extensions of Methodology and Templates
55. Safety Use Case
56. Use of AUTOSAR features for 功能性 safety
57. 时序 Related Features
58. Features related to the provision of synchronized time bases
59. Provision of a synchronized time-base within a cluster
60. Coverage Criteria of the Feature
61. Coverage justification
62. 服务 for accessing to synchronized time-bases
63. Coverage Criteria of the Feature
64. Coverage justification
65. Sync AUTOSAR OS with Global Time from providing bus 系统 in a well-defined way
66. Coverage Criteria of the Feature
67. Coverage justification
68. Features related to 同步 of processing of asynchronous processing units
69. 服务 for 同步 of SW-Cs
70. Coverage Criteria of the Feature
71. Coverage justification
72. Features to allow time deterministic implementation of applications
73. 支持 for 时序 constraints
74. Responsiveness to external events
75. Features related to protection against 时序 violation
76. Runtime 时序 protection and monitoring
77. Monitoring of local time
78. E-Gas Monitoring Related Features
79. Communication protections against corruption and loss of 数据
80. Priority access to SPI bus
81. Testing and monitoring of I/O 数据 and I/O HW
82. Ability to make an AUTOSAR application compatible to the e-Gas monitoring Concept
83. Hardware 诊断
84. 核 Test
85. Fault Models
86. 描述
87. 检测 and Reaction
88. 限制
89. References to AUTOSAR Documents
90. References to ISO26262
91. RAM Test
92. Fault Models
93. 描述
94. 检测 and Reaction
95. 限制
96. References to AUTOSAR Documents
97. References to ISO26262
98. 附录
99. 附录
100. 缩略语
101. 相关文档
