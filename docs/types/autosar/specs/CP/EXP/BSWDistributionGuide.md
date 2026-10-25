# Guide to BSW Distribution (`BSWDistributionGuide`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 631 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_BSWDistributionGuide_631\AUTOSAR_CP_EXP_BSWDistributionGuide.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_BSWDistributionGuide_631\AUTOSAR_CP_EXP_BSWDistributionGuide.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_BSWDistributionGuide_631\zzgen\CP_EXP_BSWDistributionGuide.complete.txt`

## 文档简介

This document is a general introduction to the distribution of BSW in AUTOSAR systems. It consists of two parts, one focusing on the distribution of BSW in case of multi-core and the other focusing on distribution in case of safety.

 guides to the development and configuration of AUTOSAR-compliant software for multi-core systems. As of release 4.1, it addresses the allocation of AUTOSAR BSW modules to partitions on multi-core systems and their interaction only. The allocation of BSW modules to different BSW partitions allows for both enhanced functional safety and increased performance.

In  the BSW distribution in safety cases is described. As of release 4.2 AUTOSAR allows to map BSW modules into different partitions and to protect those partitions against each other.

 gives an outlook of possible future extensions in the area of BSW distribution.

A glossary of technical terms and a list of references to external information are provided in  and .

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document is a general introduction to the distribution of BSW in AUTOSAR systems. It consists of two parts, one focusing on the distribution of BSW in case of multi-core and the other focusing on distribution in case of safety.

 guides to the development and configuration of AUTOSAR-compliant software for multi-core systems. As of release 4.1, it addresses the allocation of AUTOSAR BSW modules to partitions on multi-core systems and their interaction only. The allocation of BSW modules to different BSW partitions allows for both enhanced functional safety and increased performance.

In  the BSW distribution in safety cases is described. As of release 4.2 AUTOSAR allows to map BSW modules into different partitions and to protect those partitions against each other.

 gives an outlook of possible future extensions in the area of BSW distribution.

A glossary of technical terms and a list of references to external information are provided in  and .

### 2. BSW Distribution in Multi-Core Systems

### 3. 概述
*原文标题：Overview*

This chapter contains a description of the supported scenarios for distributed execution of BSW modules on several partitions and cores and a number of use cases in which a distribution of the BSW can enhance performance. It also introduces basic synchronization concepts applicable to distributed BSW execution, and an introduction to inter-partition communication.

### 4. Supported Scenarios

It is possible to assign functional clusters of BSW modules ("BSW Functional cluster"), which are used by applications to access buses, non-volatile memory, I/O channels, and watchdogs, to different BSW partitions for safety or performance reasons. The clustering of BSW modules is currently not standardized. Except for the MCAL, parallel usage of the same type of functional clusters in different partitions ("duplication") is not generally supported, but it is possible by using a master satellite approach. Functional clusters to partitions may be assigned such that

* a BSW functional cluster is only available in one partition
* a BSW functional cluster is available on all partitions with all interfaces
* a BSW functional cluster is distributed over multiple partitions, possibly with partition specific subsets of functionality, to allow a high grade of concurrency.

By supporting the scenarios listed above, AUTOSAR addresses the following essential features:

* All code for communication between BSW partitions can be generated for automatic adaptation to different system configurations.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Performance Use Cases and Hardware Assigned to Different 核
*原文标题：Performance Use Cases and Hardware Assigned to Different Cores*

The following use cases are examples for how system performance can be improved by allocation of the BSW to multiple partitions and cores, and how systems where the access to the peripheral hardware is assigned to multiple cores benefit from the allocation of the BSW to multiple partitions and cores.

* To increase system performance and to reduce resource consumption in systems that are distributed over several cores, it may be necessary to allocate functional clusters of BSW modules to different cores, e.g. communication modules on BSW partition "A" and I/O modules on BSW partition "B", depending on hardware architecture, load balancing and on distribution of SW-Cs. In particular, if HW resources are accessed exclusively by one core in a Multi-Core system, the performance is increased by locating the corresponding BSW users, services and drivers on that core.
* Signal gateway functionality is implemented by allocating a FlexRay cluster on one core and a CAN cluster on a different core. The two COM modules need to be synchronized in this case, and there must be some direct cross core communication between the two COM instances.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Technical 概述
*原文标题：Technical Overview*

Below is a short summary of the technical solution as described in the following sections:

* Define clusters of BSW modules that contain preferably all three layers of a stack, or, if needed, a subset of modules of a stack (e.g. communication, memory, I/O stack).
* Some BSW modules are widely used by different clusters (and/or BSW modules). For these BSW modules it is recommended that they are implemented in a way that they support callers from different clusters/partitions/cores. Examples of such modules can be found in different areas of Classic AUTOSAR: error handling (Det, Dem), intrusion detection (IdsM), routing (PduR, LSduR), crypto (Csm, KeyM), NV handling (NvM) or Time Synchronization (StbM). A BSW module implementation shall provide sufficient information about possible restrictions for callers from different partitions/cores.
* A module initialization may be split between several partitions e.g. for setting up hardware which takes more time and shall not block the rest of the system.
* Module entities can be split into a master and satellites, which are assigned to different BSW partitions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. BSW 功能性 Clusters
*原文标题：BSW Functional Clusters*

BSW functional clusters are groups of functionally coherent BSW modules. Each functional cluster includes a set of BSW modules. It is possible to have several BSW functional clusters of the same type (e.g. several I/O clusters in different BSW partitions), each using a different set of modules (e.g. IOHWA + ADC in one partition and IOHWA + ADC + DIO in the second partition).

The following types of clusters might be standardized in a later release:

* Communication cluster
* Memory cluster
* I/O cluster
* Watchdog cluster

The allocation of BSW functional clusters to BSW partitions is determined by the usage of BSW modules by the application software. Functional clusters can be allocated to different BSW partitions, and functional clusters of the same type can be available in several BSW partitions. Different functional clusters can be allocated to the same or to different BSW partitions.

The same functional cluster can only exist at most once per BSW partition.

BSW functional clusters are used by applications or other BSW modules to access buses, memory, I/O channels and watchdogs, and they are usually required in one or few BSW partitions only.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Inter-BSW-partition communication

Function calls to tasks that are supposed to be executed in a different BSW partition/on a different core cannot be implemented as simple C calls to this function, because these calls would be handled on the local BSW partition.

The BSW Scheduler (SchM) therefore provides functions to invoke masters or satellites of the same module on different BSW partitions using either client-server or sender-receiver communication. Details on this API of the SchM are explained in .

### 9. Determining the 分区 for 服务 Execution
*原文标题：Determining the Partition for Service Execution*

The actual BSW partition for the handling of an RTE event is determined by its task mapping. Basically, if an event is mapped to a task, it is executed within the partition assigned to this task. If an event is not mapped to a task, it is executed within the same partition as the task that caused the event. Details on the task mapping are described in  of this document.

Calls from BSW entities to other BSW entities are not mapped to a partition. They are executed wherever they are called. Therefore, several calls to a BSW function may be processed in parallel on different partitions and cores. Consequently such functions must be designed and implemented carefully w.r.t. parallel execution in different partitions; if necessary, they shall be reentrant or concurrency safe.

### 10. Parallel Execution of BSW 模块
*原文标题：Parallel Execution of BSW modules*

This is the chapter for developers of BSW modules.

### 11. Core-Dependent Branching

Because entities of the same module share the same implementation, even if they are running on different cores, different behavior cannot be realized by different code. Instead, the specific behavior shall be determined by runtime information. It is possible for example to use the core id for this, i.e. branch the control flow depending on the return value of the OS APIs GetCoreID, or also GetApplicationID.

Another variant of implementing modules operating sharing the same implementation but running on different cores can be realized basing on a different core individual configuration. This requires to call the initialization routine Init per core passing a pointer to the according configuration. This design pattern is considered as ideal to implement a core-dependent branching for the MCAL.

### 12. Master/Satellite-approach

Modules that need to be accessed in different BSW partitions can be implemented using the master/satellite pattern.

The distribution of work between master and satellite is implementation specific. One extreme is that the satellite only provides the interfaces to the other modules in the same BSW partition, and that it routes all requests to the master and answers back to the other modules. At the other extreme, the satellite can provide the full functionality locally (e.g. local mode management for a complete application which runs in the same BSW partition) and only synchronizes its internal states with the master, if necessary. There might even be several masters for different functionality, e.g. two PduR masters for a distributed PduR gateway.

The master coordinates requests from the satellites and can filter or monitor incoming satellite requests. The master and one or several satellites are treated like being one module entity in some respect:

* Master and satellites are always vendor specific solutions, coming from the same vendor.
* The interfaces of master and satellite to other module entities in general are the same as specified in AUTOSAR for traditional modules.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Using the BSW Scheduler for Inter-Partition-Communication

The BSW Scheduler (SchM) provides a number of functions to support communication between BSW module entities that are executed in parallel. More precisely, it provides the following methods to handle synchronous and asynchronous calls (including callbacks) as well as sender-receiver communication.

The functionality is generally similar to that of function calls between SWCs and the BSW. However, because the RTE may not be available at certain points of time (especially during startup of an ECU), this functionality must be available within the BSW itself.

* `Std_ReturnType` `SchM_Call_`<bsnp>_<name>(

    <data_1> ...  <data_n>)

  or

  `Std_ReturnType` `SchM_Call_`<bsnp>_<name>(
    <data_1> ...  <data_n>)

  Invoke a client-server-operation, possibly crossing partition boundaries. The actual parameters data_1 ... data_n are information that is passed  and/or re-passed  to/from the called service.

  The presence of the parameter returnValue and its type <typeOfReturnValue> depend on the called service. For synchronous calls, the parameter is present and <typeOfReturnValue> is the type returned by the called service.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Using Shared Buffers (in systems without 存储 protection)
*原文标题：Using Shared Buffers (in systems without memory protection)*

In systems without memory protection between the BSW partitions, system services and all BswCalledEntities can be called directly in every partition, including the complete call tree. This requires a reentrant, concurrency safe implementation.

The services and other called entities might work on module internal data, which is shared between different entities of the same module. All access to such data must be protected by ExclusiveAreas. Appropriateness of concrete protection mechanisms depends on the possible kinds of access. For example, concurrent writing generally needs to be prohibited, whereas concurrent reading may be acceptable, as long as only one partition writes at the same time.

BswSchedulableEntities are located on one core only and process the data periodically or event driven.

 shows the example of a service "X", where the same API and the same code is called directly by the RTE on different cores. This is the default, if the services (respectively the OperationInvokedEvents) are not mapped to a task.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Accessing Hardware/Drivers

BswModuleEntitys of the MCAL (drivers) shall be accessed in the following way:

* Access by the BSW functional cluster within the BSW partition where the caller is located. So for example the FLS driver belongs to the BSW functional cluster "Memory". In case of NVM access, the NVM module might be provided on all cores as a master/satellite implementation. The master uses the FLS driver on a single core only. So the FLS driver is available on exactly that core.
* Any BSW required by the application shall be accessed in the BSW partition where the caller is located. For example I/O drivers such as DIO, ADC and PWM can be used by any core / partition. These are either realized as master/satellite implementation or as a redundant implementation per core basing on atomic access to the hardware.

The detailed realization of the MCAL multi-core approach is described in .

### 16. Concurrency safe implementation of 模块
*原文标题：Concurrency safe implementation of modules*

Concurrency safety of BSW modules respectively the functions implemented by these modules may be achieved by different mechanisms.

Generally, the following levels of reentrancy can be distinguished according to . The concrete level of a BswModuleEntity is defined in the optional attribute "reentrancyLevel".

* Multi-core reentrant: Unlimited concurrent execution of an interface is possible, including preemption and parallel execution on multi-core systems. This level can be either achieved by mutual exclusion when entering critical regions, or by the absence of such regions, for example if there are no shared resources (including hardware and memory).
* Single-core reentrant: Pseudo-concurrent execution (i.e. preemption) of an interface is possible on single core systems. This is the highest level of reentrancy defined by AUTOSAR 4.0.3. Because it does not explicitly cover multi-core systems, "concurrency safe" has been introduced additionally. This level can generally be ensured by the same mechanisms as "concurrency safe", but they must be ensured to work across core boundaries.
* Non-reentrant: Concurrent execution of this interface is not possible.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Kernel based Master-Satellite Realization

One way of realizing the master-satellite concept is the implementation of a module split into kernel and according interfaces, which are provided for all partitions the module shall be used from. The focus of the chapter is to describe the idea of the distribution of the according BSW module as a guidance for similar cases.

In a first step the service API's are categorized, e.g. according to MCAL distribution concept:

* Service API required by multiple cores / partitions for triggering and reading / writing of data
* Service API which are required by one partition only (e.g. initialization, shutdown)

This will lead to the following BSW module architecture:

In the second step the SW designer needs to select an according BSW distribution pattern for each service API following the below listed categories:

* Trigger a control flow from service API to kernel API (if required including data)
* Read of a symbol from a global buffer
* Write a symbol to a global buffer, which is later-on polled by the kernel

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Atomic Operations 库
*原文标题：Atomic Operations Library*

Introducing the BMC Libray, AUTOSAR now provides a multi-core atomic library. The interfaces of this library cover similar use cases / interfaces as the C11 standard atomic library (http://en.cppreference.com/w/c/atomic).

The library shall support developers implementing efficient lock-free implementations and so ease the implementation of distributed BSW (Master/Satellite) without the use of a heavy weight mutex. Please note however that not all HW targets allow lock-free implementation.

Atomic operations typically perform a read-modify-write sequence on a memory address. For example, an atomic increment loads a value, increments it, and stores the result in such a way that no other thread can modify the value in the middle. So, a cross-core set request can be realized with atomic operations in an efficient way.

### 19. SchM 接口 for Parallel BSW execution
*原文标题：SchM Interfaces for Parallel BSW execution*

This chapter describes the extensions to the SchM required by the concept "Enhanced BSW allocation".

The Basic Software Scheduler (SchM) is responsible for handling the inter-partition communication between BSW modules. This is conceptually similar to the handling of inter-partition communication between SW-Cs by the RTE. Because the BSW modules are arranged below the RTE in the AUTOSAR architecture however, the communication must be available before the RTE is available. Therefore and for reasons of performance, BSW modules use the SchM for communication.

For the distribution of BSW modules across several partitions, the SchM shall implement the methods `SchM_Call`, `SchM_Result`, `SchM_Send` and `SchM_Receive`, which are used to handle service calls and callbacks as well as writing data to and reading data from a sender-receiver connection. For details on the signatures of these functions, please refer to , which describes the SchM extensions from a BSW developer's point of view.

The SchM can use IocSend (a direct call to the OS) to send data in inter-partition communication. Other RTE internal mechanism might not be available during startup.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 基础软件 in Partitioned Systems的配置
*原文标题：Configuration of Basic Software in Partitioned Systems*

This is the chapter for integrators.

### 21. Task 映射
*原文标题：Task Mapping*

The parallelization of BSW modules introduces several new subclasses of BswEvent to the AUTOSAR metamodel. These classes are shown in . Each BswEvent (including instances of subclasses of BswEvent) is assigned to a BswSchedulableEntity, which is started upon occurrence of the event.

A more fine grained description of the partition specific behavior of an entity can be described by the use of BswDistinguishedPartitions, as shown in . A BswDistinguishedPartition is the abstract representation of a partition, which allows to the mapping of a specific BswEvent, BswModuleCallPoint or BswVariableAccess to a set of abstract partitions. The representation of a partition at this point is an abstract one in the sense that it is part of the BSW module description (according to the module description template), whereas a concrete partition is determined at ECU configuration time.

For example, if a module entity running in partition 1 provides data via a VariableDataPrototype to the same entity running in partitions 2 and 3, the BswModuleEntity aggregates a dataSendPoint with a contextLimitiation to partition 1 and a dataSendPoint with a contextLimitation to partitions 2 and 3.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 通用配置 of Master and Satellites
*原文标题：General Configuration of Master and Satellites*

Modules that shall be available in multiple partitions can be implemented as masters and satellites. In this case, the master and all satellites of the same module share the same code (which may implement core-dependent behavior however) and the same configuration. Hence, a master and its satellites are treated as one module entity w.r.t. their configuration.

The communication between master and satellites is not to be standardized. It is considered to be module-internal and it is not visible to other modules. However, since it is recommended to use SchM mechanisms for internal communication, the non-standardized client-server entries and data accesses in the BSWMD to connect master and satellite need to be configured.

### 23. Configuring the BswM (per 分区)
*原文标题：Configuring the BswM (per Partition)*

On systems with distributed BSW there is one BSW Mode Manager (BswM) per partition (but one OS and EcuM per core, which is the same as long as we have one BSW partition per core). Each of these BswMs can be configured independently. A BswM mainly interacts with the state managers (ECU state manager and bus state managers, for instance) on the same partition.

The BswM is also responsible for the initialization and shutdown of BSW modules running in the same partition. Therefore, its configuration depends on the mapping of BSW modules to partitions.

The configuration of the BswMs is split across the container BswMGeneral, which contains shared configuration parameters of all BswM entities and BswMConfig containers, where one BswMConfig is defined for each BswM entity. Consequenty, the mapping of a BswM to its partition is defined in the corresponding BswMConfig container, which has a BswMPartitionRef pointing to the respective partition. This mapping of BswM configurations to partitions ensures that for every partition the correct configuration of the BswM can be determined.

RteInitializationRunnableBatches need to be defined per partition (needing an initialization).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Configuring the EcuM (per 核)
*原文标题：Configuring the EcuM (per Core)*

On systems with distributed BSW there is one EcuM per core (even if there are multiple BSW partitions on that core). In other words, on every core there shall be one and only one partition that runs the EcuM. The partition running the EcuM is determined by the EcuMFlexEcucPartitionRef, which is specified in the container EcuMFlexUserConfig of the EcuM configuration.

On architectures with a sequential start of cores, there is one designated master core in which the boot loader starts the master EcuM via `EcuM_Init`. The EcuM in the master core starts some drivers, determines the Post Build configuration and starts all remaining cores with all their satellite EcuMs.

On architectures where all cores are started at the same time, core dependent branching within the `EcuM_Init` function can be used to achieve core-specific behavior. This can in turn be used to identify the EcuM master (running on the master core), which is responsible for the EcuM initialization on the slaves.

### 25. MCAL Distribution

### 26. 简介
*原文标题：Introduction*

Because it is required to provide access to hardware features from several cores and partitions the MCAL functionality needs to be provided to exactly that core it is required and where it is useful to provide the functionality. So consequently the distribution of MCAL modules is not identically done for all MCAL modules but needs to follow the needs of the functional clusters described in the chapters before. The following chapters shall guide through the classification of the required multi-core capabilities, introduce an according multi-core type which is assigned to the individual modules. Furthermore some basic design patterns shall be shown to allow the implementation of the required functionality.

It shall be noted that the introduction of the multi-core MCAL requires the introduction of asynchronously behaving interfaces to enable non-blocking parallel execution on multiple cores. These are introduced to the individual SWS of the affected AUTOSAR modules and not mentioned furthermore in the chapter below.

### 27. Assumptions of Use

To apply the MCAL distribution several assumptions of use shall be given, to define the boundary conditions of the MCAL environment:

# A multi-partition (multi-application) AUTOSAR operating system is required to support the use cases defined within this concept.
# The hardware implementation shall allow a mapping of peripherals at least to cores. In future it is expected that hardware implementations allow a mapping to cores and partitions.
# It shall be possible to route hardware and software interrupts to one partition or at least a dedicated core (for further routing by the OS).
# Service modules which are required by the MCAL drivers shall support multi-core use-cases by being able to accept calls to their service API's on respectively by any core. The relevant services are:

  * Det
  * Dem
  * EcuM
  * Os
  * SchM
  * NvM

Furthermore it is assumed that a multi-core microcontroller is used however this is not mandatory as the concept provides an identical set of service API's regardless whether it is a single- or multi-core implementation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Constraints

To realize the concept further constraints are defined to prevent inefficient and multi-core blocking implementations. In this sense it is especially important to consider that it is not sufficient anymore to implement exclusive areas on a single core but to additionally ensure an access serialization in case resources need to be shared across several partitions distributed to several cores.

* Access Serialization on a single core: For single-core systems concurrency problems are well understood and mitigated by exclusive areas, which limit concurrent access to one process at a time. This is typically done by locking interrupts, employing OS resources or creating a non-pre-emptive scheduling. This effectively means access-serialization of the different processes.
* Access Serialization across cores: Since exclusive areas only have a core-wide scope, they are not sufficient to prevent concurrent access in multi-core environments. But as soon as it is required to access the same resource (e.g. by access to the service API's, processing of the ISRs and main-functions) it is required to introduce cross-core means.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 定义 of MCAL Users
*原文标题：Definition of MCAL Users*

There are the following different MCAL users to be considered:

* Application SWC (above the RTE) via IoHwAbstr
* CDD or BSW Module (below the RTE)

So the MCAL multi-core support needs to be provided independently of the RTE to cover both the use-cases.

### 30. 多分区 versus Multi-Core MCAL
*原文标题：Multiple Partitions versus Multi-Core MCAL*

### 31. Considering 多分区
*原文标题：Considering Multiple Partitions*

As the AUTOSAR standard allows the definition of multiple partitions per core, the MCAL distribution concept needs to respect this idea for the purpose of later extensions motivated for example by safety distribution. So, this concept implements the following idea:

# Mappable elements are not simply mapped to cores, but instead to partitions. This is to allow, that one is able to implement further isolation features to the MCAL at a later point in time to ensure for example freedom from interference in between ADC channels.
# MCAL interfaces instead are not mapped to partitions, but it is assumed that these are available on the cores where the user partitions reside. This results in the correct definition of the core scope, which is either GLOBAL or LOCAL. Simply spoken this means that interfaces required by partitions on a single core only, might be allocated with LOCAL scope. Instead interfaces required by different partitions on multiple cores shall be allocated with GLOBAL scope.

Conclusion: APIs are not mapped to partitions (just related to partitions). Mappable elements are mapped to partitions for further distribution needs.

### 32. Impact on MCAL Symbol Allocation

Respecting the idea of multi-core on the one and multiple partitions on the other hand will cause some influence on the mapping of MCAL driver internal data, constants as well as peripherals. Depending on the driver design as well as the hardware capabilities one can:

# Map peripherals to cores or partitions, which might be protected by further hardware means, such as: privilege levels (hypervisor, supervisor, user, ...), safety partitions (by partition ID, task ID, ...) etc.
# If required, allocate data in the individual partitions to ensure for example freedom from interference in between those. But allocate the data at least with the same core scope than the APIs using it. Map data and related operations to the same core.

Please note that allocating data to different partitions does not isolate those automatically. To achieve this an according memory protection is required in addition.

Conclusion: Symbols shall be allocated with the same core scope than the APIs (internal or public) using it.

### 其余 89 章（内容从略，见纯文本全文）

33. Multi-Core Capabilities Classification Criteria
34. Criteria 1 - APIs Availability
35. Criteria 2 - MCAL Kernel Execution Context
36. Criteria 3 - HW Elements 映射
37. Multi-Core Capabilities Classification Summary
38. MCAL Multi-Core 类型的定义
39. MCAL Multi-Core 模块类型 I
40. MCAL Multi-Core 模块类型 II
41. MCAL Multi-Core 模块类型 III
42. MCAL Multi-Core 模块类型 IV
43. MCAL Multi-Core 模块类型 V
44. MCAL Multi-Core 类型 Summary
45. 映射 MCAL 模块 to Multi-Core 类型
46. Separation Strategies and 映射 of Elements
47. Separation Strategies
48. Separation on HW Level
49. Separation on SW Level
50. 映射 of Elements
51. The Single-Core 模块 as Mappable Element
52. The Independent Hardware Element as Mappable Element
53. The Atomic Hardware Element as Mappable Element
54. The Multi-Core-Module as Mappable Element
55. 示例
56. 映射软件 to different 核分区
57. Allocation with Global 范围
58. Allocation with Local 范围
59. Allocation using Cloning capabilities
60. How to determine the 核范围?
61. Determining the 核范围 of MCAL symbols
62. Applying MemMap to the according Multi-Core-Types
63. Allocating 驱动 internal Symbols
64. Allocation 示例 for Multi-Core-Type IV
65. Allocation 示例 for Multi-Core-Type II
66. Com-Stack Distribution
67. 简介
68. Assumptions of Use
69. Constraints
70. 功能性 Elements
71. I-PDU 配置 in a distributed environment
72. Pdu gateway
73. Connection to security stack via SecOC
74. <Net>Tp Routing
75. 模式, 状态 and 网络管理
76. 启动/关机
77. Architectural Components
78. PduR as central inter-core dispatcher
79. Using EcucBusToPartitionMapping
80. ASW Side
81. 驱动 Side
82. Hints for 分区 assignment of I-PDUs
83. Crypto-Stack Distribution
84. Freshness value 处理
85. Multi-Partition 服务组件架构 Pattern
86. 简介
87. 建模 Aspect
88. Implementation Aspect
89. BSW Distribution in Safety Systems
90. 通用概述 on safety
91. Safety solutions in AUTOSAR
92. Some 模块 are always ASIL
93. Overall 配置
94. Crossing 分区 boundaries
95. QM 模块 calls ASIL
96. Static stub
97. Generated stub
98. ASIL calls QM 分区
99. Static wrapper
100. Generated wrapper
101. ASIL calls ASIL
102. QM calls QM
103. Parameter passing
104. Access to peripherals / hardware
105. 启动, 关机 and 休眠/唤醒
106. 启动
107. 关机
108. 休眠 / 唤醒
109. 错误处理
110. 时序 protection
111. Combining Safety and Multi-Core
112. Performance Considerations
113. Constraints
114. Outlook on Upcoming AUTOSAR Versions
115. 已知限制
116. Inter BSW 模块 calls in distributed BSW
117. Standardized BSW 功能性 clusters
118. 术语表
119. 缩略语
120. Technical Terms
121. References
