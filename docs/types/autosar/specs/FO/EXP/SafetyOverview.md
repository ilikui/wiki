# Explanation of Safety Overview (`SafetyOverview`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 895 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_EXP_SafetyOverview_895\AUTOSAR_FO_EXP_SafetyOverview.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_EXP_SafetyOverview_895\AUTOSAR_FO_EXP_SafetyOverview.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_EXP_SafetyOverview_895\zzgen\FO_EXP_SafetyOverview.complete.txt`

## 文档简介

Any failure or malfunction which violates the safety goals is considered to be dangerous. Most common safety related failures or malfunctions are

* Hardware errors in CPUs, RAM, Flash or Bus of the MCU and their peripherals
* Any systematic and safety-relevant error in the software (also of lower ASIL or QM if violating the freedom from interference)
* Electromagnetic interference on the communication lines
* Hardware errors in communication hardware components
* Software errors in communication drivers which cause corruption, delay, loss, repetition, re-sequencing, insertion, or masquerading of messages (taken from ISO 26262-6 clause D2.4).

Based on the initial hardware software fault considerations from chapter , the above mentioned failure sources and the safety goals, as well as the ISO 26262, which provides examples for faults which cause interference between software components, faults can be grouped as follows:

* Memory,
* Timing,
* Execution,
* Exchange of information,
* Authentication of applications and services,
* Rights management.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

This explanatory document may contain assumptions, exemplary items, like reference models, use-cases, scenarios, and/or references to exemplary technical solutions, devices, processes or software. Any such assumptions or exemplary items contained in this document are for illustration purposes only. These assumptions are not part of the AUTOSAR standard. Neither their presence in such specifications, nor any later documentation of AUTOSAR conformance products actually implementing such exemplary items, imply that intellectual property rights covering such items or assumptions are licensed under the same rules as applicable to the AUTOSAR standard.

### 2. No ASIL Ratings

The AUTOSAR consortium is only providing an architecture definition, descriptions of the functional blocks and a proof of concept implementation, it is not possible to add ASIL ratings to each architectural item in this scope. It is only possible to give the reader some hints on how to combine the architectural items to achieve a safe architecture in his own very specific context: considering the underlying hardware, the products safety goals and metrics as well as the development processes.

### 3. SEooC according to ISO26262 part 10

If the AUTOSAR definition itself can be considered being a SEooC according to ISO 26262 part 10 is still unresolved and not verified yet. According to the definition of an item, element or architecture from the ISO 26262 part 1, an architecture - in this case the software architecture - is a representation of the structure of the item or element and an element could be a system, a software component or a software unit, which eventually might also be an SEooC. Either way, following the ISO 26262 part 10 SEooC definition as a guideline for this document to create reusable content and similarities to a proper "Safety Manual" could be considered as a common starting point. Still, the AUTomotive Open System ARrchitecture will eventually be the basis for a software component, which could be considered as an element and SEooC according to ISO 26262 part 10. The goal of the AUTOSAR architecture is to enable and support systems up to ASIL D.

### 4. Cybersecurity

For autonomous driving, cybersecurity is expected to have a greater impact than in the past. Not only that communication channels and communication partners need to be authenticated and verified, they also need to be safe. The security concept and capabilities of the AUTOSAR can be found in the explanatory documentation . This explanatory document, the `AUTOSAR_EXP_SafetyOverview`, contains only safety topics. It is the responsibility of the corresponding project-team, to decide if their specific safety goals can be realized with state-of-the art cybersecurity measures. Some security related safety features could be:

* Secure boot
* Authentication of communication partners within the vehicle network as well as with the off-board world
* Secure key exchange
* Secure key storage
* ...

The security specific algorithms like encryption, decryption and signing are not directly considered safety related, they still need to be developed and integrated in compliance to ISO 26262 and with respect to cybersecurity guidelines and standards e.g. ISO 21434.

### 5. Completeness

This document might not cover all possible scenarios in which AUTOSAR Platforms could be used. The safety related requirements are derived from some specific use cases and to the best knowledge of all the members of the AUTOSAR Working Groups, contributors and reviewers.

### 6. 简介
*原文标题：Introduction*

### 7. 目的
*原文标题：Purpose*

Functional safety is a system characteristic which is taken into account from the beginning of the development of the AUTOSAR Platforms as it may influence system and software architectural design decisions. Therefore, the AUTOSAR Platforms specifications include requirements related to functional safety. Aspects such as complexity of the system design can be relevant for the achievement of functional safety in the automotive industry.

Software is one parameter that can influence complexity on system level. New techniques and concepts for software development can be used in order to minimize complexity and ease the achievement of functional safety. The AUTOSAR Platforms support the development of safety-related systems by offering safety measures and mechanisms.

However, the AUTOSAR Platforms are not a complete safe solution. The objective of this safety overview is to derive safety requirements from the top level safety requirements and assumed use-cases or scenarios and allocate them to the architectural elements of the item, or to any external measure. The use of the AUTOSAR Adaptive Platform does not imply ISO 26262-10 compliance.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 范围
*原文标题：Scope*

This document shall be explanatory and help the functional safety engineer to identify functional safety related topics within the AUTOSAR Platforms. The content of this document is structured into separate chapters as follows:

* AUTOSAR Platform objectives, use-cases and scenarios
* System definition, system context and assumptions
* Hazard analysis
* Safety Needs
* Functional safety concept

which could be mapped to the following chapters within the ISO 26262, figure :

*  Item definition
*  Hazard analysis and risk assessment
*  Functional safety concept

as visualized in figure . Safety requirements are hierarchically structured and assigned or referenced from hazard to safety goal to functional requirement and artifact, according to ISO 26262, as illustrated in figure . The development process and organizational topics are not part of this overview, a risk assessment is not done (see chapter ) every system description, scenario or use-case in this document are just explanatory and for reference only. The system design is out of scope!

### 9. Intended audience

This document shall provide an overview of the functional safety measures and mechanisms of the AUTOSAR Platforms and their implementation to those involved in the development of safety-relevant (ECU) systems. Therefore, this document is intended for the users of the AUTOSAR Platforms, including people involved in safety analysis. AUTOSAR specific and functional safety related glossary terms are covered by the AUTOSAR Glossary  or the ISO 26262  itself, and are not copied if no additional information or interpretation hint related to this document is necessary.

### 10. Assumption of Use and 目标
*原文标题：Assumption of Use and Objectives*

### 11. Assumption of Use

Assumptions of use for the AUTOSAR Platforms are in particular, but not limited to, automotive grade electronic control units from the following domains:

* Autonomous Driving: from driver assistance to fully automated driving, including the ecosystem of AD, ADAS and/or Sensor-ECUs where applicable,
* Gateways,
* Body-Domain Controller,
* Infotainment-systems, etc.

To solve the requirements for more processing power, e.g. for sensor-data processing (images, radar), multi-sensor data-fusion or machine-learning as well as enhanced multimedia capabilities like 2D/3D graphics acceleration, video and audio processing, the AUTOSAR Adaptive Platform shall support high performance computation units and accelerators, often realized through specialized and proprietary hardware components and software interfaces.

### 12. 设计目标
*原文标题：Design Objectives*

The overall design objectives of the AUTOSAR Adaptive Platform are similar to those of the well known and established AUTOSAR Classic Platform, and therefore describes layers of abstraction, interfaces and some common behavior of an automotive software for an electronic control unit. The AUTOSAR Adaptive Platform is still providing an abstraction layer for the software developers e.g. AUTOSAR Runtime for Adaptive Applications (ARA), so that AUTOSAR Adaptive Platform applications could be exchanged between ECUs or being ported easily. From a systematic viewpoint this is similar to the AUTOSAR Classic Platform BSW and VFB layer - as described in AUTOSAR Classic Platform architecture documentation  , and shown for comparison in figures  and .

The second major objective is to allow dynamic software upgrades and more flexible development and deployment of applications and services within the vehicle in the field.

The third - and for the functional safety engineer most important - objective is the capability to execute applications with mixed criticality, from QM to ASIL D within one partition while maintaining freedom from interference.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Scenarios

### 14. 示例 of Classic Platform
*原文标题：Example of Classic Platform*

For scenarios of Autosar Classic Platofrm please see .

### 15. 示例 Scenario：HAD
*原文标题：Example Scenario: HAD*

The Highly Autonomous Driving (HAD) scenario has been chosen to investigate the safety capabilities of the AUTOSAR Adaptive Platform. This scenario does not only cover the requirement for high performance computing and dynamic software updates but also the corresponding highest safety case: ASIL D according to ISO 26262 . The system design on vehicle level is assumed to contain several sensors, being directly connected to sensors or Sensor-ECUs (e.g. radar, lidar, vision, INS, GNSS). The vehicle is expected to have at least one ADAS-ECU for the autonomous driving functionality where AUTOSAR Adaptive Platform could be integrated, not only on that ADAS-ECU, but also on the Sensor-ECUs or any other before mentioned domain controller.

### 16. 示例 Scenario：Instrument Cluster
*原文标题：Example Scenario: Instrument Cluster*

Another example which is not as safety critical as HAD, but can be rated with an ASIL, is an instrument cluster. While the instrument cluster is not as safety critical as HAD, it is also not as trivial as an infotainment system.

Let's consider the use case where the speedometer gives a wrong speed and the driver drives well above the speed limit, risking himself as well as the rest of the traffic. Another critical scenario may occur when a failure indication is not turned on e.g. brake failure, airbag failure or an engine failure.

As the state of the art in the automotive industry advances, the instrument cluster would require high performance. Integrating an instrument cluster on AUTOSAR Adaptive Platform would naturally make sense to cater the high performance requirements. In turn, AUTOSAR Adaptive Platform should ensure functional safety requirements.

### 17. Top Level Feature Requests or Use Cases

Based on the initial stakeholder analysis and AUTOSAR consortium partner requirements the following feature requests according to the intended use and scope of the AUTOSAR Platforms have been identified:

*[] Provide flexible execution time and resources for multiple, mixed criticality applications.
*[] Provide dynamically configurable, updateable and upgradable runtime for multiple, mixed criticality applications.
*[] Provide information exchange between multiple, mixed criticality applications.
*[] Provide information exchange between mixed criticality application and other external components such as sensors, actors or ECUs inside the vehicle.
*[] Provide information exchange between mixed criticality application and other external components outside the vehicle.
*[] Maintain correct configuration and monitor correct operation during the driving cycle.

### 18. 系统描述
*原文标题：System Description*

### 19. Element Under Investigation

The Element under investigation in this explanatory document is the AUTOSAR Platform architecture running in a system-context roughly described in chapter . The AUTOSAR Platform architecture will eventually be the basis for a software component, which could be considered as an element and SEooC according to ISO 26262-1 and ISO 26262-10.

The AUTOSAR Platforms are intended to be solution independent, except for the fact that it is developed for the automotive industry and according to objectives described in chapter . Still, the platform it will be executed on needs to be investigated too, in order to derive some hazards and safety requirements. Some of which will eventually be satisfied by software features as described and defined in the AUTOSAR Platform architecture, others by the OEM or their suppliers respectively. Modern ECUs contain highly modular embedded software, which can consist of both non-safety-related and safety-related software components, which perform functions with different ASIL ratings.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Assumed 系统 Context
*原文标题：Assumed System Context*

The following system-context descriptions are just educated guesses and assumptions, necessary for derivation and explanation of the safety requirements.

### 21. Vehicle Context

At the time of the initial definition of the AUTOSAR Adaptive Platform high performance processing units developed as SEooC are not always reaching the safety rating of ASIL D by itself, therefore several simple systematic designs have been considered to be able to reach ASIL B or ASIL D by proper decomposition. The AUTOSAR Adaptive Platform architecture can only support the actual system or hardware developer to achieve the specific safety targets.

The vehicle system design is not part of the AUTOSAR Platform specification, still either option ( and ) could be a valid system setup. It is up to the final product developer and safety engineer to choose a proper system design and decomposition strategy to achieve the specific safety goals and fulfill the specific safety requirements.

### 22. ECU Context

In a typical safety compliant ECU it can be assumed that, besides a microprocessor (uP or SoC) dynamic and persistent memory, it will be equipped with a Power Management Integrated Circuit (PMIC), Watchdog and some on-board-sensors or drivers as well as several input-output channels, e.g. digital, analog or for communication via a vehicle bus like Ethernet, CAN or FlexRay.

Some simple on-board safety measures are:

* Regulated and controlled power management
* Power monitoring (voltage and current)
* Temperature monitoring
* Alive monitoring (Watchdog)
* Input/output control

If the controller or the running software is not trustworthy anymore, e.g. if voltage levels are not stable or the watchdog has been triggered, the line driver and the transceivers might be disabled, to achieve the Fail-Silent behavior without software interaction.

### 23. Microprocessor Context

A Microprocessor or SoC design could look like the one shown in figure

A typical microprocessor suited for the AUTOSAR Adaptive Platform might contain several performance processing cores (uP), a Hardware Security Module (HSM) and in some cases also a peripheral micro-controller core (uC). The HSM and uC could be typical general purpose controller and be user-programmable or equipped with a firmware from the vendor. These can typically be based on AUTOSAR Classic Platform. The main target for the AUTOSAR Adaptive Platform is the performance processor. The peripherals may or may not be accessible through the uP, peripheral access is not standardized in the AUTOSAR Adaptive Platform at the same level as it is in the AUTOSAR Classic Platform. The only hardware requirements from the AUTOSAR Adaptive Platform are indirectly defined through the OS, which shall provide multi-process support for isolation of applications and therefore requires a Memory Management Unit (MMU) according to Specification of Operating System Interface  and Specification of Execution Management . If the ECU shall communicate with other ECUs, support for Ethernet is intended with the SOME/IP protocol.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Hardware Accelerator

Hardware accelerators and parallel processing are respected within the AUTOSAR architecture. For more information regarding this topic please read the "Design guidelines for using parallel processing technologies on Adaptive Platform " and "Explanation of Safe API for hardware accelerators ". The software development process and the required software mechanisms for a hardware accelerator are basically the same as for the typical Microprocessor. There shall be mechanisms to check if software routines are scheduled correctly, the computations are correct and the control flow shall be monitorable.

### 25. 软件 Context
*原文标题：Software Context*

### 26. Dynamic 存储 Allocation
*原文标题：Dynamic Memory Allocation*

Using dynamic objects or variables in safety relevant code is not recommended according to ISO 26262-6 Table 6 , or else online/run-time tests are required during their creation.

Dynamic memory allocation is inferred by some of the Adaptive platform APIs. Provided that Adaptive Platform vendors and Adaptive application ensure proper error handling and cleanup in case of allocation failure, and that when running safety relevant code the memory allocation and deallocation functions (e.g. malloc and free, new and delete) have deterministic performance, meaning that either their worst execution / blocking time is a known value, or a dedicated safety mechanism such as a watchdog is applied to handle timing violations, then they are allowed to use dynamic memory allocation in safety relevant code.

Please consider  Specification of Adaptive Platform Core , which states that the implementation of the AUTOSAR Adaptive Platform treats a failed default allocation as non-recoverable. For Classic Platform please consider subchapters  and  of .

### 27. 通用 Hardware and 软件 Fault Considerations
*原文标题：General Hardware and Software Fault Considerations*

The hardware is not part of the AUTOSAR Platform architecture, it is still necessary to respect the hardware to define the source of higher safety requirements eventually. This section is to be considered as general a priori knowledge and collects and describes typical hardware and software faults along with the safety measures which might directly affect the AUTOSAR Platforms. Most likely, not all hardware and software faults will be described here and not all effects will be analyzed sufficiently enough. Therefore, it is mandatory to perform a full safety evaluation for each safety-critical application built on top of the AUTOSAR Platforms according to the relevant industry standards.

### 28. Potential Hardware Faults and Safety Measures

Incorrect execution of multiple applications with mixed criticality may be due to systematic faults (e.g. bugs in processor design) or random hardware faults. Natural phenomena, such as ionized radiation (e.g. high energy particle impacts), electromagnetic compliance, vibrations, aging effects or external environmental conditions, can lead to such malfunctions. Integrating applications with different criticalities on a single platform can be very tricky.

Partitioning mechanisms on hardware level can be applied in order to isolate these applications (Mapping mixed-criticality applications on multi-core architectures ).

Hardware partitioning based on safety criticality of AUTOSAR Platform applications, ensures a lesser impact of single points of failure compared to software or logical partitioning as errors in one hardware partition do not have effect on other partitions. However, hardware partitioning techniques may compromise performance when two applications on different hardware partition need to communicate.

We may categorize hardware faults into three different classes: transient, intermittent and permanent. Transient fault may occur once and is not reproducible (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Potential 软件 Faults and Safety Measures
*原文标题：Potential Software Faults and Safety Measures*

Hardware faults may impact software directly or indirectly. Examples of direct impact may include an arithmetic miscalculation (although the control flow of a program may be correct) or a wrong control flow may cause a jump in address which could result in undefined behavior, infinite loop or premature end of execution. Examples of indirect impact may include affecting other CPU Cores (overload on OS, caches, memory, peripherals or cross-core interrupt flooding or an intense heating of one core may cause shutdown), memory corruption via software and misconfiguration of OS, platform services or peripherals (corruption of OS scheduling table or unintended execution of 'Disable Interrupts' instruction or misconfiguration of real-time clock).

Following is a list of typical measures that can be taken in order to detect/avoid the above mentioned software faults:

* Redundant Execution (2oo2, 2oo2D, 2oo3)
* Program Flow Control ("Does the software pass-by known points in the right order?")
* Checksums
* Arbitration
* Collision Detection
* Signatures
* Software Lockstep
* Parallel Execution
* Safety Checker

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Security

Security and Functional Safety are often considered two different concepts: functional safety primarily deals with unintended faults and errors and security primarily deals with intended threats leading to a harm or loss. Nevertheless, in a connected system, security is very important to create safe systems and achieve a high product quality. Security mechanisms needs to be developed according the provided standard, e.g. ISO 21434 Road vehicles - Cybersecurity engineering , and during runtime, monitoring of the security mechanisms is highly recommended to check that the security systems and mechanisms are working and running in the appropriate state.

### 31. AUTOSAR Platform 架构概述
*原文标题：AUTOSAR Platform Architecture Overview*

### 32. AUTOSAR Classic Platform Features

Classic Autosar offers following features - independent of applications:

* Configuration if ECU and application data
* Execution of applications
* Scheduling of applications
* Application state management
* Runtime behavior monitoring: processing time and sequence, bus load, memory consumption, HW, etc.
* Safe and secure communication through vehicle networks: e.g. CAN, CAN-FD, FlexRay, Ethernet
* Diagnosis (UDS,OBD)
* Persistent data storage

### 33. AUTOSAR Adaptive Platform Features

The HAD scenario and the resulting HAD-applications require the following capabilities from the underlining AUTOSAR Adaptive Platform Foundation Libraries and Services as shown in figure  (besides the specialized HAD applications of course):

* Safe and secure boot
* Execution of applications
* Scheduling of applications
* Application state management: start, stop, halt, etc.
* Runtime behavior monitoring: processing time, bus load, memory consumption, etc.
* Access to application data
* Persistent data storage
* Configuration of ECU and application data
* Update of deployed applications
* Deployment of new applications
* System monitoring
* Send and receive messages through vehicle networks: e.g CAN, CAN-FD, FlexRay, Ethernet

This feature list is not only related to the mentioned HAD scenario and could be applied to other domain specific ECUs too and so far, comes without any further deep application and safety analysis on these topics.

### 34. AUTOSAR Classic Platform Achitecture and 模块
*原文标题：AUTOSAR Classic Platform Achitecture and Modules*

For layered Classic platform Architecture and Modules see .

### 35. AUTOSAR Adaptive Platform 架构
*原文标题：AUTOSAR Adaptive Platform Architecture*

The architecture of the AUTOSAR Adaptive Platform is shown in figure  and is divided into

# AUTOSAR Adaptive Platform Foundation Functional Clusters (FCs)
# AUTOSAR Adaptive Platform Services FCs
# AUTOSAR Adaptive Platform Standardized Application/Interface FCs
# AUTOSAR Adaptive Platform Vehicle Service FCs
# Operating System Interface

The operating system (OS) itself is not directly part of the architecture, but the AUTOSAR Adaptive Platform has several requirements regarding the OS , like being a POSIX PSE51 compliant OS .

### 36. AUTOSAR Adaptive Platform 功能性 Cluster
*原文标题：AUTOSAR Adaptive Platform Functional Cluster*

The AUTOSAR Adaptive Platform functional clusters  are

| Adaptive Platform Functional Cluster | Short Name |
|---|---|
| Log and Trace | log |
| Intrusion Detection System Manager | idsm |
| Communication Management | com |
| Network Management | nm |
| Operating System Interface | osi |
| Cryptography | crypto |
| Execution Management | exec |
| Raw Data Stream | rds |
| Firewall | fw |
| Platform Health Management | phm |
| Vehicle Update and Configuration Management | vucm |
| Persistency | per |
| Core | core |
| Time Synchronization | tsync |
| State Management | sm |
| Update and Configuration Management | ucm |
| Automotive API Gateway | aag |
| Diagnostics | diag |

The detailed description for the AUTOSAR Adaptive Platform functional clusters can be found in the respective specialized documents. A summary is also part of the "Explanation of Adaptive Platform Design ."

### 37. Configuring ASILs in AUTOSAR

This specification is intended to support the Automotive Safety Integrity Level (ASIL) of ISO 26262 . Other safety integrity levels will not be considered and are out of scope of this document. The ASIL is determined as part of the HARA in the concept phase as of ISO 26262-3 and assigned to each safety goal. A system element, software element or hardware element will inherit this ASIL as an attribute via the allocation of safety requirements to safety goals through the system hierarchy.

The ASIL is stored as AdminData that contains Sdg data element with the attribute gid="SAFEX". The contents of this element shall contain a Sd-element with the attribute gid="ASIL".

Valid values for this attribute are:

* QM
* A
* B
* C
* D
* QM(A)
* QM(B)
* QM(C)
* QM(D)
* A(A)
* A(B)
* A(C)
* A(D)
* B(B)
* B(C)
* B(D)
* C(C)
* C(D)
* D(D)

Note that the parentheses notation is used to express decomposed safety requirements. In this specification we will refer to the original ASIL (i.e. the value in parentheses) as the contextual ASIL before decomposition, since it belongs to the context of safety goal.

Listing 5.1: Example for the AUTOSAR XML representation of an ASIL attribute at an element

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Hazard Analysis

### 39. 简介
*原文标题：Introduction*

Any failure or malfunction which violates the safety goals is considered to be dangerous. Most common safety related failures or malfunctions are

* Hardware errors in CPUs, RAM, Flash or Bus of the MCU and their peripherals
* Any systematic and safety-relevant error in the software (also of lower ASIL or QM if violating the freedom from interference)
* Electromagnetic interference on the communication lines
* Hardware errors in communication hardware components
* Software errors in communication drivers which cause corruption, delay, loss, repetition, re-sequencing, insertion, or masquerading of messages (taken from ISO 26262-6 clause D2.4).

Based on the initial hardware software fault considerations from chapter , the above mentioned failure sources and the safety goals, as well as the ISO 26262, which provides examples for faults which cause interference between software components, faults can be grouped as follows:

* Memory,
* Timing,
* Execution,
* Exchange of information,
* Authentication of applications and services,
* Rights management.

### 40. Top Level Failures

The top level safety related failures for the AUTOSAR Platforms considered to be

*[] Unintended, untimely and/or incorrect execution of applications
*[] Unintended, untimely and/or incorrect configuration, update and upgrade of applications
*[] Unintended, untimely and/or incorrect exchange of information between applications
*[] Unintended, untimely and/or incorrect exchange of information between applications and external components inside the vehicle
*[] Unintended, untimely and/or incorrect exchange of information between applications and external components outside the vehicle
*[] Corruption of configuration

### 其余 34 章（内容从略，见纯文本全文）

41. Safety Needs
42. Top Level Safety 需求
43. Potential Product Safety Quality Attributes
44. 功能性 Safety Concept
45. Derived AUTOSAR Platform 功能性 Safety 需求
46. Safe Execution
47. Safe Communication
48. Safe Storage
49. Safe 配置 and Update
50. Safety Artifacts of the AUTOSAR Platform
51. Ensure correct computation, execution and execution order of 多 applications with mixed criticality
52. Classic Platform Autosar
53. Adaptive Platform Autosar
54. AUTOSAR shall ensure correct 配置 during the entire life cycle of the platform
55. Classic Platform Autosar
56. Adaptive Platform Autosar
57. AUTOSAR shall ensure correct update and upgrade of 多 platform and non-platform applications with mixed criticality
58. Classic Platform Autosar
59. Adaptive Platform Autosar
60. AUTOSAR shall ensure correct exchange (transmission and reception) of information
61. Classic Platform Autosar
62. Adaptive Platform Autosar
63. AUTOSAR shall detect faults and failures while processing 数据, communicating with other systems or 系统 elements
64. Classic Platform Autosar
65. Adaptive Platform Autosar
66. AUTOSAR shall provide mechanisms to 支持 safe storage for applications
67. Classic Platform Autosar
68. Adaptive Platform Autosar
69. AUTOSAR shall monitor, detect and provide means to react on detectable failures
70. Classic Platform Autosar
71. Adaptive Platform Autosar
72. 附录
73. Abbreviations
74. 术语表
