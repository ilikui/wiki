# Specification of RTE Software (`RTE`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 084 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_RTE_084\AUTOSAR_CP_SWS_RTE.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_RTE_084\AUTOSAR_CP_SWS_RTE.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_RTE_084\zzgen\CP_SWS_RTE.complete.txt`

## 文档简介

This document contains the software specification of the AUTOSAR Run-Time Environment (RTE) and the Basic Software Scheduler. Basically, the RTE together with the OS, AUTOSAR COM and other Basic Software Modules is the implementation of the Virtual Functional Bus concepts (VFB, ). The RTE implements the AUTOSAR Virtual Functional Bus interfaces and thereby realizes the communication between AUTOSAR software-components.

This document describes how these concepts are realized within the RTE. Furthermore, the Application Programming Interface (API) of the RTE and the interaction of the RTE with other basic software modules is specified.

The Basic Software Scheduler offers concepts and services to integrate Basic Software Modules Hence, the Basic Software Scheduler

* embed Basic Software Module implementations into the AUTOSAR OS context
* trigger main processing functions of the Basic Software Modules
* apply data consistency mechanisms for the Basic Software Modules
* to communicate modes between Basic Software Modules

## 模块依赖

The main documents that served as input for the specification of the RTE are the specification of the Virtual Functional Bus  and the specification of the Software Component Template . Also of primary importance are the specifications of those Basic Software modules that closely interact with the RTE (or vice versa). These are especially the communication module  and the operating system . The main input of an RTE generator is described (among others) in the ECU Configuration Description. Therefore, the corresponding specification  is also important for the RTE specification. Furthermore, as the process of RTE generation is an important part of the overall AUTOSAR Methodology, the corresponding document  is also considered.

The following list shows the specifications that are closely interdependent to the specification of the RTE:

* Specification of the Virtual Functional Bus
* Specification of the Software Component Template
* Specification of AUTOSAR COM
* Specification of AUTOSAR OS
* Specification of ECU State Manager and Communication Manager
* Specification of ECU Configuration
* Specification of System Description / Generation
* AUTOSAR Methodology
* Specification of BSW Module Description Template
* AUTOSAR Generic Structure Template

## 章节详细内容

### 1. Note on XML 示例
*原文标题：Note on XML examples*

This specification includes examples in XML based on the AUTOSAR metamodel available at the time of writing. These examples are included as illustrations of configurations and their expected outcome but should not be considered part of the specification.

### 2. 简介
*原文标题：Introduction*

This document contains the software specification of the AUTOSAR Run-Time Environment (RTE) and the Basic Software Scheduler. Basically, the RTE together with the OS, AUTOSAR COM and other Basic Software Modules is the implementation of the Virtual Functional Bus concepts (VFB, ). The RTE implements the AUTOSAR Virtual Functional Bus interfaces and thereby realizes the communication between AUTOSAR software-components.

This document describes how these concepts are realized within the RTE. Furthermore, the Application Programming Interface (API) of the RTE and the interaction of the RTE with other basic software modules is specified.

The Basic Software Scheduler offers concepts and services to integrate Basic Software Modules Hence, the Basic Software Scheduler

* embed Basic Software Module implementations into the AUTOSAR OS context
* trigger main processing functions of the Basic Software Modules
* apply data consistency mechanisms for the Basic Software Modules
* to communicate modes between Basic Software Modules

### 3. 范围
*原文标题：Scope*

This document is intended to be the main reference for developers of an RTE generator tool or of a concrete RTE implementation respectively. The document is also the reference for developers of AUTOSAR software-components and basic software modules that interact with the RTE, since it specifies the application programming interface of the RTE and therefore the mechanisms for accessing the RTE functionality. Furthermore, this specification should be read by the AUTOSAR working groups that are closely related to the RTE (see Section  below), since it describes the interfaces of the RTE to these modules as well as the behavior / functionality the RTE expects from them.

This document is structured as follows. After this general introduction, Chapter  gives a more detailed introduction of the concepts of the RTE. Chapter  describes how an RTE is generated in the context of the overall AUTOSAR methodology. Chapter  is the central part of this document. It specifies the RTE functionality in detail. The RTE API is described in Chapter .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Dependency to other AUTOSAR specifications

The main documents that served as input for the specification of the RTE are the specification of the Virtual Functional Bus  and the specification of the Software Component Template . Also of primary importance are the specifications of those Basic Software modules that closely interact with the RTE (or vice versa). These are especially the communication module  and the operating system . The main input of an RTE generator is described (among others) in the ECU Configuration Description. Therefore, the corresponding specification  is also important for the RTE specification. Furthermore, as the process of RTE generation is an important part of the overall AUTOSAR Methodology, the corresponding document  is also considered.

The following list shows the specifications that are closely interdependent to the specification of the RTE:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 缩略语
*原文标题：Acronyms and Abbreviations*

All abbreviations used throughout this document - except the ones listed here - can be found in the official AUTOSAR glossary .

### 6. Technical Terms

All technical terms used throughout this document - except the ones listed here - can be found in the official AUTOSAR glossary  or the Software Component Template Specification .

| Term | Description |
|---|---|
| application mode manager | An application mode manager is an AUTOSAR software-component that provides the service of switching modes. The modes of an application mode manager do not have to be standardized. |
| ASCR runnable | A Runnable Entity that is triggered by at least one AsynchronousServerCallReturnsEvent. |
| associated Local Software Cluster Communication Plug-In | The Local Software Cluster Communication Plug-In which is assigned to a Communication Graph, ExclusiveArea, mode machine instance or distributed shared mode queue and therefore handles all accesses via RTE APIs, SchM APIs or RTE internal code. |
| associated Cross Software Cluster Communication Plug-In | The Cross Software Cluster Communication Plug-In which is assigned to a Communication Graph, mode machine instance and therefore handles all accesses via RTE APIs or RTE internal code. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Document Conventions

Requirements in the SRS are referenced using  where <n> is the requirement id. For example, .

Requirements in the SWS are marked with  as the first text in a paragraph. The scope of the requirement is marked with the half brackets.

Constraints on the input of the RTE are marked with .

Technical terms are typeset in monospace font, e.g. Warp Core.

AUTOSAR Meta Class Names and Attributes are typeset in monospace font, e.g. ApplicationSwComponentType. As a general rule, plural forms of AUTOSAR Meta Class Names and Attributes are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

AUTOSAR ECU Configuration Parameters are typeset in monospace font, e.g. RteCodeVendorId. As a general rule, plural forms of ECU Configuration Parameters are created by adding "s" to the singular form, e.g. RteEventToTaskMappings. By this means the document resembles terminology used in the ARXML file of AUTOSAR ECU Configuration Parameter Definition.

API function calls are also marked with monospace font, like `Rte_EjectWarpCore`.

### 8. 需求追踪
*原文标题：Requirements Tracing*

The following table references the requirements specified in  as well as  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| All Basic SW Modules written in C language shall conform to the MISRA C 2025 Standard. |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The AUTOSAR Basic Software shall provide a microcontroller abstraction layer which provides a standardized interface to higher software layers |  |  |
| Unique Name of Basic Software Modules |  |  |
| Data types naming convention |  |  |
| Global variables naming convention |  |  |
| AUTOSAR Basic Software Modules shall not define global data in their header files, but in the C file |  |  |
| API naming convention |  |  |
| Shared code shall be reentrant |  |  |
| Error values naming convention |  |  |
| It shall be allowed to use macros instead of functions where source code is used and runtime is critical |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. RTE 概述
*原文标题：RTE Overview*

### 10. The RTE in the Context of AUTOSAR

The Run-Time Environment (RTE) is at the heart of the AUTOSAR ECU architecture. The RTE is the realization (for a particular ECU) of the interfaces of the AUTOSAR Virtual Function Bus (VFB). The RTE provides the infrastructure services that enable communication to occur between AUTOSAR software-components as well as acting as the means by which AUTOSAR software-components access basic software modules including the OS and communication service.

The RTE encompasses both the variable elements of the system infrastructure that arise from the different mappings of components to ECUs as well as standardized RTE services.

In principle the RTE can be logically divided into two sub-parts realizing:

* the communication between software components
* the scheduling of the software components

To fully describe the concept of the RTE, the Basic Software Scheduler has to be considered as well. The Basic Software Scheduler schedules the schedulable entities of the basic software modules. In some documents the schedulable entities are also called main processing functions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. AUTOSAR 概念
*原文标题：AUTOSAR Concepts*

This section introduces some important AUTOSAR concepts and how they are implemented within the context of the RTE.

### 12. AUTOSAR Software-components

In AUTOSAR, "application" software is conceptually located above the AUTOSAR RTE and consists of "AUTOSAR application software-components" that are ECU and location independent and "AUTOSAR sensor-actuator components" that are dependent on ECU hardware and thus not readily relocatable for reasons of performance/efficiency. This means that, subject to constraints imposed by the system designer, an AUTOSAR software-component can be deployed to any available ECU during system configuration. The RTE is then responsible for ensuring that components can communicate and that the system continues to function as expected wherever the components are deployed. Considering sensor/actuator software components, they may only directly address the local ECU abstraction. Therefore, access to remote ECU abstraction shall be done through an intermediate sensor/actuator software component which broadcasts the information on the remote ECU. Hence, moving the sensor/actuator software components on different ECUs, may then imply to also move connected devices (sensor/actuator) to the same ECU (provided that efficient access is needed).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 基础软件模块
*原文标题：Basic Software Modules*

As well as "AUTOSAR software-components" an AUTOSAR ECU includes basic software modules. Basic software modules can access the ECU abstraction layer as well as other basic software modules directly and are thus neither ECU nor location independent .

An "AUTOSAR software-component" cannot directly access basic software modules - all communication is via AUTOSAR interfaces and therefore under the control of the RTE. The requirement to not have direct access applies to all Basic Software Modules including the operating system  and the communication service.

### 14. Communication

The communication interface of an AUTOSAR software-component consists of several ports (which are characterized by port-interfaces). An AUTOSAR software-component can communicate through its interfaces with other AUTOSAR software-components (whether that component is located on the same ECU or on a different ECU) or with basic software modules that have ports and runnables (i.e ServiceSwComponents, EcuAbstractionSwComponents and ComplexDeviceDriverSwComponents) and are located on the same ECU. This communication can only occur via the component's ports. A port can be categorized by either a sender-receiver or client-server port-interface. A sender-receiver interface provides a message passing facility whereas a client-server interface provides function invocation.

### 15. Communication Paradigms

The RTE provides different paradigms for the communication between software-component instances: sender-receiver (signal passing), client-server (function invocation), mode switch, and NvBlockSwComponentType interaction.

Each communication paradigm can be applied to intra-partition software-component distribution (which includes both intra-task and inter-task distribution, within the same Partition), inter-Partition software-component distribution, and inter-ECU software-component distribution. Intra-task communication occurs between runnable entities that are mapped to the same OS task whereas inter-task communication occurs between runnable entities mapped to different tasks of the same Partition and can therefore involve a context switch. Inter-Partition communication occurs between runnable entities in components mapped to different partitions of the same ECU and therefore involve a context switch and crossing a protection boundary (memory protection, timing protection, isolation on a core).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Communication Modes

The RTE supports two modes for sender-receiver communication:

* Explicit - A component uses explicit RTE API calls to send and receive data elements .
* Implicit - The RTE automatically reads a specified set of data elements before a runnable is invoked and automatically writes (a different) set of data elements after the runnable entity has terminated  . The term "implicit" is used here since the runnable does not actively initiate the reception or transmission of data.

Implicit and explicit communication is considered in greater detail in Section .

### 17. Static Communication

Upstream requirements:
⌈
The RTE shall support static communication only.
⌋

Static communication includes only those communication connections where the source(s) and destination(s) of all communication is known at the point the RTE is generated. . This includes also connections which are subject to variability because the variant handling concept of AUTOSAR does only support the selection of connectors from a superset of possible connectors to define a particular variant. Dynamic reconfiguration of communication is not supported due to the run-time and code overhead which would therefore limit the range of devices for which the RTE is suitable.

### 18. Multiplicity

As well as point to point communication (i.e. "1:1") the RTE supports communication connections with multiple providers or requires:

* When using sender-receiver communication, the RTE supports both "1:n" (single sender with multiple receivers)  and "n:1" (multiple senders and a single receiver)  communication with the restriction that multiple senders are not allowed for mode switch notifications, see metamodel restrictions .

  The execution of the multiple senders or receivers is not coordinated by the RTE. This means that the actions of different software-components are independent - the RTE does not ensure that different senders transmit data simultaneously and does not ensure that all receivers read data or receive events simultaneously.
* When using client-server communication, the RTE supports "n:1" (multiple clients and a single server)  communication. The RTE does not support "1:n" (single client with multiple servers) client-server communication.

Irrespective of whether "1:1", "n:1" or "1:n" communication is used, the RTE is responsible for implementing the communication connections and therefore the AUTOSAR software-component is unaware of the configuration.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Concurrency

AUTOSAR software-components have no direct access to the OS and hence there are no "tasks" in an AUTOSAR application. Instead, concurrent activity within AUTOSAR is based around RunnableEntitys within components that are invoked by the RTE.

The AUTOSAR VFB specification  defines a runnable entity as a "sequence of instructions that can be started by the Run-Time Environment". A component provides usually one or more runnable entities  and each runnable entity has exactly one entry point. An entry point defines the symbol within the software-component's code that provides the implementation of a runnable entity.

The RTE is responsible for invoking runnable entities - AUTOSAR software-components are not able to (dynamically) create private threads of control. Hence, all activity within an AUTOSAR application is initiated by the triggering of runnable entities by the RTE as a result of RTEEvents.

An RTEEvent encompasses all possible situations that can trigger execution of a runnable entity by the RTE. The different classes of RTEEvent are defined in Section .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. The RTE Generator

The RTE generator is one of a set of tools that create the realization of the AUTOSAR virtual function bus for an ECU based on information in the ECU Configuration Description. The RTE Generator is responsible for creating the AUTOSAR software-component API functions that link AUTOSAR software-components to the OS and manage communication between AUTOSAR software-components and between AUTOSAR software-components and basic software modules.

Additionally the RTE Generator creates both the Basic Software Scheduler and the Basic Software Scheduler API functions for each particular instance of a Basic Software Module.

The RTE generation process for SWCs has two main phases:

* RTE Contract phase - a limited set of information about a component, principally the AUTOSAR interface definitions, is used to create an application header file for a component type. The application header file defines the "contract" between component and RTE.
* RTE Generation phase - all relevant information about components, their deployment to ECUs and communication connections is used to generate the RTE and optionally the Ioc configuration . One RTE is generated for each ECU in the system.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 设计 Decisions
*原文标题：Design Decisions*

This section details decisions that affect both the general direction that has been taken as well as the actual content of this document.

# The role of this document is to specify RTE behavior, not RTE implementation. Implementation details should not be considered to be part of the RTE software specification unless they are explicitly marked as RTE requirements.
# An AUTOSAR system consists of multiple ECUs each of which contains an RTE that may have been generated by different RTE generators. Consequently, the specification of how RTEs from multiple vendors interoperate is considered to be within the scope of this document.
# The RTE does not have sufficient information to be able to derive a mapping from runnable entity to OS task. The decision was therefore taken to require that the mapping be specified as part of the RTE input.
# Support for CPP is provided by making the C RTE API available for CPP components rather than specifying a completely separate object-oriented API.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. RTE Generation Process

This chapter describes the methodology of the RTE and Basic Software Scheduler generation. For a detailed description of the overall AUTOSAR methodology refer to methodology document .

  Upstream requirements:
⌈
The RTE generator shall produce the same RTE API, RTE code, SchM API and SchM code when the input information is the same.
⌋

The RTE Generator gets involved in the AUTOSAR Methodology several times in different roles. Technically the RTE Generator can be implemented as one tool which is invoked with options to switch between the different roles. Or the RTE Generator could be a set of separate tools. In the following section the individual applications of the RTE Generator are described based on the roles that are take, not necessarily the actual tools.

The RTE Generator is used in different roles for the following phases:

* RTE Contract Phase
* Basic Software Scheduler Contract Phase
* PreBuild Data Set Contract Phase
* Basic Software Scheduler Generation Phase
* RTE Generation Phase
* PreBuild Data Set Generation Phase
* PostBuild Data Set Generation Phase

### 23. RTE Generator for Software-Components

In Figure  the overall AUTOSAR Methodology wrt. Application SW-Components and the RTE Generator is shown.

The whole vehicle functionality is described with means of CompositionSwComponents, SwComponentPrototypes and AtomicSwComponents . In the CompositionSwComponent descriptions the connections between the software-components' ports are also defined. Such a collection of software-components connected to each other, without the mapping on actual ECUs, is called the VFB view.

During the 'Configure System' step the needed software-components, the available ECUs and the System Constraints are resolved into a System Configuration Description. Now the SwComponentPrototypes and thus the associated AtomicSwComponents are mapped on the available ECUs.

Since in the VFB view the communication relationships between the AtomicSwComponents have been described and the mapping of each SwComponentPrototypes and AtomicSwComponents to a specific ECU has been fixed, the communication matrix can be generated. In the SwComponentType Description (using the format of the AUTOSAR Software Component Template ) the data that is exchanged through ports is defined in an abstract way.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. RTE Generator for 基础软件 Scheduler
*原文标题：RTE Generator for Basic Software Scheduler*

In Figure  the overall AUTOSAR Methodology wrt. Basis Software Scheduler and the RTE Generator interaction is shown.

The ECU Configuration phase is the start of the Basic Software Scheduler configuration where all the requirements of the different Basic Software Modules are collected. The Input information is provided in the Basic Software Module Descriptions  of the individual Basic Software Modules.

The Basic Software Scheduler configuration is then generated into the Basic Software Scheduler code which is compiled and built into the Ecu executable.

### 25. Contract Phase

### 26. RTE Contract Phase

To be able to support the AUTOSAR software-component development with RTE-specific APIs the 'Component API' (application header file) is generated from the 'software-component Internal Behavior Description' (see Figure ) by the RTE Generator in the so called 'RTE Contract Phase' (see Figure ).

In the software-component Interface description - which is using the AUTOSAR Software Component Template - at least the AUTOSAR Interfaces of the particular software-component have to be described. This means the software-component Types with Ports and their Interfaces. In the software-component Internal Behavior description additionally the Runnable Entities and the RTE Events are defined. From this information the RTE Generator can generate specific APIs to access the Ports and send and receive data.

With the generated 'Component API' (application header file) the Software Component developer can provide the Software Component's source code without being concerned as to whether the communication will later be local or using some network(s).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 基础软件 Scheduler Contract Phase
*原文标题：Basic Software Scheduler Contract Phase*

To be able to support the Basic Software Module development with Basic Software Scheduler specific APIs the Module Interlink Header ( ) and Module Interlink Types Header ( ) containing the definitions and declaration for the Basic Software Scheduler API related to the single Basic Software Module instance is generated by the RTE Generator in the so called 'Basic Software Scheduler Contract Phase'.

The required input is

* Basic Software Module Description and
* Basic Software Module Internal Behavior and
* Basic Software Module Implementation

Please note that in case of implemented PreCompileTime variability additionally the PreBuild Data Set Contract Phase is required  to be able to compile the Basic Software Module.

### 28. PreBuild 数据 Set Contract Phase
*原文标题：PreBuild Data Set Contract Phase*

In the RTE PreBuild Data Set Contract Phase are the Condition Value Macros (see ) generated which are required to resolve the implemented pre-build variability of a particular software component or Basic Software Module.

The particular values are defined via PredefinedVariants. These PredefinedVariant elements containing definition of SwSystemconstValues for SwSystemconsts which shall be applied when resolving the variability during ECU Configuration.

The output of this phase is the RTE Configuration Header File . This file is required to compile a particular variant of a software component using PreCompileTime variability. The Condition Value Macros are used for the implementation of PreCompileTime variability with preprocessor statements and therefore are needed to run the C preprocessor resolving the implemented variability.

### 29. Edit ECU 配置 of the RTE
*原文标题：Edit ECU Configuration of the RTE*

During the configuration of an ECU the RTE also needs to be configured. This is divided into several steps which have to be performed iteratively: The configuration of the RTE and the configuration of other modules.

So first the 'RTE Configuration Editor' needs to collect all the information needed to establish an operational RTE. This gathering includes information on the software-component instances and their communication relationships, the Runnable Entities and the involved RTE-Events and so on. The main source for all this information is the 'ECU Configuration Values', which might provide references to further descriptions like the software-component description or the System Configuration description.

An additional input source is the Specification of Timing Extensions . This template can be used to specify the execution order of runnable entities (see section 'Execution order constraint'). An 'RTE Configuration Editor' can use the information to create and check the configuration of the Rte Event to Os task mapping (see section ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Generation Phase

After the ECU has been entirely configured the generation of the actual RTE inclusive the Basic Software Scheduler part can be performed. Since all the relationships to and from the other Basic-SW modules have been already resolved during the ECU Configuration phase, the generation can be performed in parallel for all modules (see Figure ).

The Basic Software Scheduler is a part of the Rte and therefore not explicitly shown in figure .

### 31. 基础软件 Scheduler Generation Phase
*原文标题：Basic Software Scheduler Generation Phase*

Depending on the complexity of the ECU and the cooperation model of the different software vendors it might be required to integrate the Basic Software stand alone without software components.

Therefore the RTE Generator has to support the generation of the Basic Software Scheduler without software component related RTE fragments. The Basic Software Scheduler Generation Phase is only applicable for software builds which are not containing any kind of software components.

  Upstream requirements:
⌈
In the Basic Software Scheduler Generation Phase the RTE Generator shall generate the Basic Software Scheduler without the RTE functionality.
⌋

In this case the RTE Generator generates the API for Basic Software Modules and the Basic Software Scheduling code only. When the input contains software component related information this information raises an error.

For instance:

* Application Header Files are not generated for the software components contained in the ECU extract.
* Mapped RTEEvents are not permitted and the runnable calls are not generated into the OS task bodies. Nevertheless all OS task bodies related to the Basic Software Scheduler configuration are generated.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. RTE Generation Phase

The actual AUTOSAR software-components and Basic-SW modules code will be linked together with the RTE and Basic Software Scheduler code to build the entire ECU software.

Please note that in case of implemented PreCompileTime variability additionally the PreBuild Data Set Generation Phase is required (see section ) to be able to compile the ECU software. Further on in case of implemented post-build variability PostBuild Data Set Generation Phase is required (see section ) to be able to link the full ECU software.

The RTE Generator in the Generation Phase is also responsible to generate additional artifacts which contribute to the further build, deployment and calibration of the ECU's software.

  Upstream requirements: , ,
⌈
The RTE Generator in Generation Phase shall provide its Basic Software Module Description in order to capture the generated RTE's attributes.
⌋

Details about the Basic Software Module Description generation can can be found in section .

  Upstream requirements: ,
⌈
The RTE Generator in Generation Phase shall provide an MC-Support (Measurement and Calibration) description as part of the Basic Software Module Description.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 1105 章（内容从略，见纯文本全文）

33. Cluster Generation Phase
34. 基础软件模块描述 generation
35. Bsw 模块描述
36. Bsw Internal 行为
37. Bsw Implementation
38. Com and Large 数据 Path in Com usage
39. Com user generation
40. Large 数据 Path in Com user generation
41. PreBuild 数据 Set Generation Phase
42. PostBuild 数据 Set Generation Phase
43. RTE 配置 interaction with other BSW 模块
44. RTE 功能性规范
45. Architectural 概念
46. 范围
47. RTE and 数据类型
48. RTE and AUTOSAR Software-Components
49. Hierarchical 结构 of Software-Components
50. Ports, 接口 and Connections
51. Internal 行为
52. Implementation
53. Instantiation
54. 范围 and background
55. 概念 of instantiation
56. Single instantiation
57. 多 instantiation
58. Reentrant 代码
59. Unambiguous object identification
60. 多 instantiation and Per-instance 存储
61. RTE and AUTOSAR 服务
62. RTE and ECU 抽象
63. RTE and Complex Device 驱动
64. 基础软件 Scheduler and 基础软件模块
65. a 基础软件模块的描述
66. 基础软件接口
67. 基础软件 Internal 行为
68. 基础软件 Implementation
69. 基础软件模块的多 Instances
70. AUTOSAR 服务 / ECU 抽象 / Complex Device Drivers
71. RunnableEntity / BswModuleEntity 映射
72. Synchronized ModeDeclarationGroupPrototype
73. Synchronized Trigger
74. RTE and 基础软件 Scheduler Implementation Aspects
75. 范围
76. OS
77. OS Objects
78. 基础软件 Schedulable Entities
79. Runnable Entities
80. RTE Events
81. BswEvents
82. 映射 of Runnable Entities and 基础软件 Schedulable Entities to tasks (informative)
83. Scenario for 映射 of RunnableEntitys to tasks
84. Scenario 1
85. Scenario 2
86. Scenario 3
87. Scenario 4
88. Scenario 5
89. Scenario 6
90. Scenario 7
91. Scenario 8
92. Scenario 9
93. Monitoring of runnable execution time
94. TimingEvent activated runnables
95. 同步 of TimingEvent activated runnables
96. BackgroundEvent activated Runnable Entities and BasicSoftware Schedulable Entities
97. InitEvent activated Runnable Entities
98. OsTaskExecutionEvent activated Runnable Entities
99. Activation and Start of ExecutableEntitys
100. Activation by direct 功能 call
101. Activation Offset for RunnableEntitys and BswSchedulableEntitys
102. Provide activating RTE event
103. Cyclic execution of ExecutableEntitys
104. Interrupt decoupling and 通知
105. 基础通知 principles
106. Interrupts
107. Decoupling interrupts on RTE level
108. RTE and interrupt categories
109. RTE and 基础软件 Scheduler and BswExecutionContext
110. Interrupt decoupling for COM
111. 数据 Consistency
112. 通用
113. Communication Patterns
114. 概念
115. Mechanisms to guarantee 数据 consistency
116. Exclusive Areas
117. Assignment of 数据 consistency mechanisms
118. InterRunnableVariables
119. InterRunnableVariables with implicit 行为
120. InterRunnableVariables with explicit 行为
121. Runnable Entities and 基础软件 Schedulable Entities的多 trigger
122. Implementation of Parameter and 数据 Elements
123. 通用
124. Compatibility rules
125. Implementation of an 接口 element
126. 初始化 of VariableDataPrototypes
127. 初始化 of optional Elements
128. ApplicationDataType
129. ImplementationDataType
130. Initial value calculation
131. Measurement and Calibration
132. 通用
133. 定义 of Calibration Parameters
134. Online and offline calibration
135. Measurement
136. What can be measured
137. RTE 支持 for Measurement
138. Calibration
139. Calibration parameters
140. Separation of calibration parameters
141. 支持 for offline calibration
142. 支持 for online calibration：数据 emulation
143. 数据 emulation without SW 支持 (direct access)
144. 数据 emulation with SW 支持
145. Single pointered method
146. Double pointered method
147. InitRam parameter method
148. Arrangement of a ParameterElementGroup for pointered methods
149. Further 定义 for pointered methods
150. Calibration parameter access
151. Calibration parameter allocation
152. Calibration parameters in NVRAM
153. 多 calibration parameters instances
154. Generation of McSupportData
155. Export of the McSupportData
156. Usage of the FlatMap
157. Common attributes of McDataInstance
158. Export of Measurement information
159. Sender-Receiver communication
160. Client-Server communication
161. InterRunnableVariable
162. PerInstanceMemory
163. Nv RAM Block
164. Non Volatile 数据 communication
165. Export Calibration information
166. ParameterDataPrototypes of ParameterSwComponentType
167. Shared ParameterDataPrototypes
168. Instance specific ParameterDataPrototypes
169. Default values for RAM Block
170. Export of the Calibration Method
171. 描述 of ParameterElementGroup
172. McSupport 描述 of the InitRam parameter method
173. McSupport 描述 of the Single pointered method
174. McSupport 描述 of the Double pointered method
175. Export of Variant 处理
176. Access to NVRAM 数据
177. 通用
178. Usage of the NvBlockSwComponentType
179. 接口 of the NvBlockSwComponentType
180. Access to the NVRAM 数据
181. Access to the Bulk NvData
182. NVM 接口
183. 数据 Consistency
184. Communication Paradigms
185. Sender-Receiver
186. 简介
187. Receive Modes
188. Applicability
189. Representation in the 软件组件模板
190. 多数据 Elements
191. Initial Values
192. 多 Receivers and Senders
193. Implicit and Explicit 数据 Reception and Transmission
194. Implicit
195. Explicit
196. 数据 access的概念
197. Transmission Acknowledgement
198. Communication Time-out
199. 数据 Element Invalidation
200. 数据 Element Invalidation in case of Inter-ECU communication
201. 数据 Element Invalidation in case of Intra-ECU communication
202. Filters
203. 缓冲
204. Last-is-Best-Semantics for '数据' Reception
205. Queueing for 'event' Reception
206. Queueing of 模式 switches
207. Operation
208. Inter-ECU 映射
209. Primitive 数据类型
210. Composite 数据类型
211. Atomicity
212. Fan-out
213. Fan-in
214. Sequence diagrams of Sender Receiver communication
215. "Never received status" for 数据 Element
216. "Update flag" for 数据 Element
217. Dynamic 数据类型
218. Inter-ECU communication through TP
219. Inter-ECU communication of arrays of bytes
220. COM
221. Large 数据 Path in COM
222. 处理 of acknowledgment events
223. Meta 数据 for application
224. Client-Server
225. 简介
226. Multiplicity
227. 多 Clients Single Server
228. 多 operations
229. Single Client 多 Server
230. Call Serialization
231. (Bsw)OperationInvokedEvents mapped to a task/ISR2
232. (Bsw)OperationInvokedEvents not mapped to a task/ISR2
233. Communication Time-out
234. Port-Defined argument values
235. 缓冲
236. Inter-ECU and Inter-Partition Response to Request 映射
237. Client Identifier
238. SequenceCounter
239. Inter-ECU Response Channel Fan-Out
240. Parameter Serialization
241. Operation
242. Inter-ECU 映射
243. Atomicity
244. Fault 检测 and reporting
245. Asynchronous Client Server communication
246. Synchronous Client Server communication
247. SWC internal communication
248. Inter Runnable Variables
249. Inter-Partition communication
250. Inter 分区数据 communication using IOC
251. Inter 分区数据 communication using 基础软件 Scheduler
252. Accessing Com and Det in multicore/multipartition 配置
253. Accessing NvM in multicore/multipartition configurations
254. Signaling and 控制 flow 支持 for inter 分区 communication
255. Trusted Functions
256. 存储 Protection and Pointer 类型 Parameters in RTE API
257. PortInterface Element 映射 and 数据 Conversion
258. PortInterface Element 映射
259. 网络 Representation
260. 网络 Representation with no 数据 transformation
261. 网络 Representation with 数据 transformation
262. 数据 Conversion
263. Range Checks during Runtime
264. Range checks at sender's side
265. Range checks at receiver's side
266. Communication 数据的Cyclic 处理
267. 简介
268. Cyclic Reception of Communication 数据
269. 传输 and Value 错误处理
270. 错误 Reporting to Dem
271. 传输 and Value 错误 Counters 处理
272. Value Bitfield 错误处理
273. Modes
274. 模式 User
275. 模式管理器
276. Refinement of the semantics of ModeDeclarations and ModeDeclarationGroups
277. Order of actions taken by the RTE / 基础软件 Scheduler upon interception of a 模式 switch 通知
278. Assignment of 模式 machine instances to RTE and 基础软件 Scheduler
279. 模式 machine instances的初始化
280. 模式 switches的通知
281. 模式 switch acknowledgment
282. 映射 of ModeDeclarations
283. Distributed Shared 模式 Queues
284. External and Internal Trigger
285. External Trigger Event Communication
286. 简介
287. Trigger Sink
288. Trigger Source
289. Multiplicity
290. 多 Trigger
291. 多 Trigger Sinks Single Trigger Source
292. 多 Trigger Sources Single Trigger Sink
293. Synchronized Trigger
294. Inter Runnable Triggering
295. Multiplicity
296. Inter 基础软件模块 Entity Triggering
297. Inter ECU Trigger Communication
298. Queuing of Triggers
299. Activation of triggered ExecutableEntities
300. 初始化 and Finalization
301. 初始化 and Finalization of the RTE
302. the 基础软件 Scheduler的初始化
303. 初始化 of the RTE
304. Finalization of the RTE
305. Finalization of the 基础软件 Scheduler
306. 初始化 and Finalization of AUTOSAR Software-Components
307. Variant 处理支持
308. 概述
309. Choosing a Variant and Binding Variability
310. 通用 impact of Binding Times on RTE generation
311. Choosing a particular variant
312. SystemDesignTime
313. CodeGenerationTime
314. PreCompileTime
315. LinkTime
316. PostBuild
317. Variability affecting the RTE generation
318. 软件 Composition
319. Variant existence of SwComponentPrototypes
320. Variant existence of SwConnectors
321. COM related Variant existence
322. Variant existence of PortPrototypes
323. Atomic 软件组件 and its Internal 行为
324. RTE API which is subject to variability
325. Conditional API options
326. Runnable Entity's and RTEEvents
327. Conditional 存储 Allocation
328. NvBlockComponent and its Internal 行为
329. Parameter 组件
330. 数据类型
331. Constants
332. 基础软件模块 and its Internal 行为
333. 基础软件接口
334. Flat Instance descriptor
335. Variability affecting the 基础软件 Scheduler generation
336. 基础软件 Scheduler API which is subject to variability
337. 基础软件 Entities
338. API 行为
339. Variability affecting SWC implementation
340. Development 错误
341. DET Report Identifiers
342. DET 错误 Identifiers
343. DET 错误 Classification
344. Bypass 支持
345. Bypass 描述
346. 组件 wrapper method
347. Direct buffer access method
348. Extended buffer access method
349. Global Enable
350. RPT Preparation
351. Level 1 - Post-Build Hooking
352. Explicit Sender-Receiver and IRV APIs
353. Interaction With 数据 Conversion
354. Implicit Sender-Receiver and IRV
355. 模式 APIs
356. Client-Server APIs
357. IN Parameters
358. OUT Parameters
359. IN-OUT Parameters
360. Level 2 - Non Post-Build Hooking
361. RP Enabler Flag
362. Level 3 - Extended Non Post-Build Hooking
363. Level 2 and 3 - Non Post-Build Hooking and Implicit Communication
364. Export
365. 服务 Based Prototyping
366. Rapid Prototyping Scenarios
367. 服务 Functions
368. RP Stim Enabler
369. 集成
370. 服务 Point IDs
371. Conditional RunnableEntity Invocation
372. Interaction with RTE-Managed buffers
373. Export
374. 数据 Transformation
375. Execution of 转换器
376. 转换器 for inter-ECU communication
377. 转换器 for intra-ECU communication
378. 转换器 Chains
379. Buffer 处理
380. 接口 to 转换器
381. 错误处理
382. 转换器代码 Forwarding
383. 转换器 Transaction 处理
384. 转换器协议 Header Peeking
385. COM Based 转换器
386. RTE Reference
387. 范围
388. Programming Languages
389. Generator Principles
390. Default operating 模式
391. Vendor 模式
392. Build 支持
393. 软件组件 Namespace
394. Generator external 配置 switches
395. Unconnected R-Port check
396. Missing input 配置 check
397. Missing 初始化 values
398. API Principles
399. RTE Namespace
400. Direct API
401. Indirect API
402. Accessing Port 句柄
403. VariableAccess in the dataReadAccess and dataWriteAccess roles
404. Per Instance 存储
405. API 映射
406. "RTE Contract" Phase
407. "RTE Generation" Phase
408. 功能 Elision
409. API Naming Conventions
410. API Parameters
411. Return Values
412. Return References
413. 错误处理
414. Success Feedback
415. Unconnected Ports
416. 数据 Elements
417. Explicit Communication
418. Implicit Communication
419. 模式 Switch Ports
420. Client-Server
421. External Triggers
422. Non-identical port 接口
423. Return 类型 Std_ReturnType
424. RTE 模块
425. RTE Header 文件
426. Lifecycle Header 文件
427. Application Header 文件
428. 文件 Name
429. 范围
430. 文件 Contents
431. Instance 句柄
432. Runnable Entity Prototype
433. Initial Values
434. PerInstanceMemory
435. RTE-Component 接口
436. Application 错误
437. RTE 类型 Header 文件
438. 文件 Contents
439. Classification of Implementation 数据类型
440. Primitive Implementation 数据类型
441. Array Implementation 数据类型
442. 结构 Implementation 数据类型
443. Union Implementation 数据类型
444. Implementation 数据类型 redefinition
445. Pointer Implementation 数据类型
446. ImplementationDataTypes with VariationPoints
447. Naming of 数据类型
448. C/CPP
449. RTE 数据句柄类型 Header 文件
450. 文件 Name
451. 文件 Contents
452. Application 类型 Header 文件
453. 文件 Name
454. 范围
455. 文件 Contents
456. RTE Modes
457. Enumeration 数据类型
458. Range 数据类型
459. Implementation 数据类型 symbols
460. Macros for accessing Availability Information in Structs for optional Members
461. VFB 追踪 Header 文件
462. C/CPP
463. 文件 Contents
464. RTE 配置 Header 文件
465. C/CPP
466. 文件 Contents
467. Condition Value Macros
468. Generated RTE
469. Header 文件 Usage
470. C/CPP
471. 文件 Contents
472. 组件数据 Structures
473. Generated API
474. 回调
475. Task bodies
476. Lifecycle API
477. Reentrancy
478. RTE Post Build Variant Sets
479. 示例 1：文件 Contents Rte_PBcfg.h
480. 示例 2：文件 Contents Rte_PBcfg.h
481. 示例：文件 Contents Rte_PBcfg.c
482. RTE NvM Extern Buffer Declaration 文件
483. RTE 数据 Structures
484. Instance 句柄
485. 组件数据结构
486. 数据句柄 Section
487. 数据 Element without Status
488. 数据 Element with Status
489. 数据 Element with Extended Status
490. Usage
491. Per-instance 存储句柄 Section
492. Inter Runnable Variable 句柄 Section
493. Exclusive-area API Section
494. Port API Section
495. Calibration Parameter 句柄 Section
496. Inter Runnable Variable API Section
497. Inter Runnable Triggering API Section
498. Instance Id Section
499. RAM Block 数据 Updated 句柄 Section
500. Vendor Specific Section
501. API 数据类型
502. Std_ReturnType
503. Infrastructure 错误
504. Application 错误
505. Predefined 错误 Codes
506. No 错误
507. RTE_E_OK
508. Standard Application 错误 Values
509. RTE_E_INVALID
510. RTE_E_RAM_UNCHANGED
511. Immediate Infrastructure 错误 Codes
512. RTE_E_COM_STOPPED
513. RTE_E_TIMEOUT
514. RTE_E_LIMIT
515. RTE_E_NO_DATA
516. RTE_E_TRANSMIT_ACK
517. RTE_E_NEVER_RECEIVED
518. RTE_E_UNCONNECTED
519. RTE_E_IN_EXCLUSIVE_AREA
520. RTE_E_SEG_FAULT
521. RTE_E_OUT_OF_RANGE
522. RTE_E_SERIALIZATION_ERROR, RTE_E_HARD_TRANSFORMER_ERROR
523. RTE_E_SERIALIZATION_LIMIT, RTE_E_TRANSFORMER_LIMIT
524. RTE_E_SOFT_TRANSFORMER_ERROR
525. RTE_E_COM_BUSY
526. Overlayed 错误
527. RTE_E_LOST_DATA
528. RTE_E_MAX_AGE_EXCEEDED
529. Rte_Instance
530. RTE Modes
531. Enumeration 数据类型
532. Range 数据类型
533. 数据类型 with bitfield conversions
534. Communication 错误 Info DataType
535. API Reference
536. Rte_Ports
537. Rte_NPorts
538. Rte_Port
539. Rte_Write
540. Rte_Send
541. Rte_Switch
542. Rte_Invalidate
543. Rte_Feedback
544. Rte_SwitchAck
545. Rte_Read
546. Rte_DRead
547. Rte_Receive
548. Rte_Call
549. Rte_Result
550. Rte_Pim
551. Rte_CData
552. Rte_Prm
553. Rte_IRead
554. Rte_IReadRef
555. Rte_IWrite
556. Rte_IWriteRef
557. Rte_IInvalidate
558. Rte_IStatus
559. Rte_IrvIRead
560. Rte_IrvIReadRef
561. Rte_IrvIWrite
562. Rte_IrvIWriteRef
563. Rte_IrvRead
564. Rte_IrvWrite
565. Rte_Enter
566. Rte_Exit
567. Rte_Mode
568. Enhanced Rte_Mode
569. Rte_Trigger
570. Rte_IrTrigger
571. Rte_IFeedback
572. Rte_IsUpdated
573. Rte_PBCon
574. Rte_IsAvailable
575. Rte_SetAvailable
576. Rte_SetMetaDataItem
577. Rte_GetMetaDataItem
578. Rte_GetMetaDataLength
579. Rte_IsOutOfRange
580. Rte_IsInvalidValue
581. Rte_ComDataMainFunction
582. Runnable Entity Reference
583. Signature
584. Entry Point Prototype
585. Role Parameters
586. Return Value
587. Triggering Events
588. TimingEvent
589. BackgroundEvent
590. SwcModeSwitchEvent
591. AsynchronousServerCallReturnsEvent
592. DataReceiveErrorEvent
593. OperationInvokedEvent
594. DataReceivedEvent
595. DataSendCompletedEvent
596. ModeSwitchedAckEvent
597. SwcModeManagerErrorEvent
598. ExternalTriggerOccurredEvent
599. InternalTriggerOccurredEvent
600. DataWriteCompletedEvent
601. InitEvent
602. TransformerErrorEvent
603. OsTaskExecutionEvent
604. Reentrancy
605. RTE Lifecycle API Reference
606. Rte_Start
607. Signature
608. Existence
609. 描述
610. Return Value
611. Notes
612. Rte_Stop
613. Signature
614. Existence
615. 描述
616. Return Value
617. Notes
618. Rte_Init
619. Signature
620. Existence
621. 描述
622. Return Value
623. Notes
624. Rte_StartTiming
625. Signature
626. Existence
627. 描述
628. Return Value
629. Notes
630. RTE Call-backs Reference
631. RTE-COM Message Naming Conventions
632. Communication 服务 Call-backs
633. Call-backs for communication over AUTOSAR COM
634. Rte_COMCbk
635. Rte_COMCbkTAck
636. Rte_COMCbkTErr
637. Rte_COMCbkInv
638. Rte_COMCbkRxTOut
639. Rte_COMCbkTxTOut
640. Rte_COMCbkTxPrep_<mn>
641. Call-backs for communication over AUTOSAR Large 数据 Path in COM
642. Rte_COMCbkRxIndication
643. Rte_COMCbkStartOfReception
644. Rte_COMCbkCopyRxData
645. Rte_COMCbkTpRxIndication
646. Rte_COMCbkCopyTxData
647. Rte_COMCbkTpTxConfirmation
648. Rte_COMCbkTriggerTransmit
649. Rte_COMCbkTxConfirmation
650. NVM 服务 Call-backs
651. Rte_SetMirror
652. Rte_GetMirror
653. Rte_NvMNotifyJobFinished
654. Rte_NvMNotifyInitBlock
655. Expected 接口
656. Expected 接口 from Com
657. Expected 接口 from Os
658. Expected 接口 for 数据 Transformation
659. Expected 接口 from NvM
660. VFB 追踪 Reference
661. Principle of Operation
662. 支持 for 多 clients
663. 支持 for 多 Instantiation
664. Contribution to the 基础软件模块描述 and the client's 配置
665. Trace Events
666. RTE API Trace Events
667. RTE API Start
668. RTE API Return
669. BSW Scheduler API Trace Events
670. BSW Scheduler API Start
671. BSW Scheduler API Return
672. 模式 Switch Trace Events
673. RTE 模式 Switch Request Terminate API
674. BSW Scheduler 模式 Switch Request Terminate API
675. COM Trace Events
676. Signal Transmission
677. Signal Reception
678. Signal Invalidation
679. Signal Group Invalidation
680. COM Callback
681. OS Trace Events
682. Task Activate
683. Task Dispatch
684. Task Termination
685. Set OS Event
686. Wait OS Event
687. Received OS Event
688. Runnable Entity Trace Events
689. Runnable Entity Invocation
690. Runnable Entity Termination
691. BSW Schedulable Entities Trace Events
692. BSW Schedulable Entity Invocation
693. BSW Schedulable Entity Termination
694. RPT Trace Events
695. Transmission
696. Reception
697. 配置
698. Interaction with Object-code Software-Components
699. 基础软件 Scheduler Reference
700. 范围
701. API Principles
702. 基础软件 Scheduler Namespace
703. BSW Scheduler Name Prefix and Section Name Prefix
704. BSW Scheduler API options
705. 基础软件 Scheduler 模块
706. 模块 Interlink 类型 Header
707. 文件 Name
708. 范围
709. 文件 Contents
710. 基础软件 Scheduler Modes
711. 模块 Interlink Header
712. 文件 Name
713. 范围
714. 文件 Contents
715. Entry Point Prototype
716. 基础软件 Scheduler - 基础软件模块接口
717. Provide activating Bsw event
718. RunnableEntity mapped to BswModuleEntity
719. Condition Value Macros
720. API 数据类型
721. Predefined 错误 Codes for Std_ReturnType
722. SCHM_E_OK
723. SCHM_E_LIMIT
724. SCHM_E_NO_DATA
725. SCHM_E_TRANSMIT_ACK
726. SCHM_E_IN_EXCLUSIVE_AREA
727. SCHM_E_TIMEOUT
728. SCHM_E_LOST_DATA
729. 基础软件 Modes
730. Enumeration 数据类型
731. Range 数据类型
732. 数据类型 with bitfield conversions
733. API Reference
734. SchM_Enter
735. SchM_Exit
736. SchM_Call
737. SchM_Result
738. SchM_Send
739. SchM_Receive
740. SchM_Switch
741. SchM_Mode
742. Enhanced SchM_Mode
743. SchM_SwitchAck
744. SchM_Trigger
745. SchM_ActMainFunction
746. SchM_CData
747. SchM_Pim
748. Bsw 模块 Entity Reference
749. Signature
750. Entry Point Prototype
751. Reentrancy
752. Provide activating Bsw event
753. 基础软件 Scheduler Lifecycle API Reference
754. SchM_Init
755. SchM_Start
756. SchM_StartTiming
757. SchM_Deinit
758. RTE Implementation Plug-Ins Reference
759. 简介
760. RTE Implementation Plug-Ins in the AUTOSAR 架构
761. 多 RTE Implementation Plug-Ins 处理 one Communication Graph
762. 接口 between RTE Implementation Plug-Ins and RTE
763. 文件结构
764. RTE Global Buffer Declaration 文件
765. RIPS Buffer Declaration Files
766. RTE Implementation Plug-In Header 文件
767. RIPS SWC-BSW-Instance Header 文件
768. RTE Implementation Plug-In Implementation 文件
769. RTE Header 文件
770. Application Header 文件
771. 模块 Interlink Header
772. RTE 数据句柄类型 Header 文件
773. API principles
774. API name pattern
775. 基础需求 on RTE Implementation Plug-In 服务
776. 基础需求 on RTE Implementation
777. Macro API implementations
778. API 数据类型
779. API Reference
780. Implicit buffer value access
781. Rte_Rips_IRead
782. Rte_Rips_IWrite
783. Implicit buffer address access
784. Rte_Rips_IRBufferRef
785. Rte_Rips_IWBufferRef
786. Implicit communication buffer Fill Flush Routines
787. Rte_Rips_FillFlushRoutine
788. Explicit access protection
789. Rte_Rips_StartRead
790. Rte_Rips_StopRead
791. Rte_Rips_StartWrite
792. Rte_Rips_StopWrite
793. Explicit 数据 access 服务
794. Rte_Rips_Read
795. Rte_Rips_Write
796. Rte_Rips_DRead
797. ExclusiveArea protection
798. Rte_Rips_Enter
799. Rte_Rips_Exit
800. 模式 queue protection functions
801. Rte_Rips_EnterModeQueue
802. Rte_Rips_ExitModeQueue
803. Cross cluster 模式 communication functions
804. Rte_Rips_Switch
805. Rte_Rips_DequeueModeSwitch
806. Distributed Shared 模式 Queue 调度同步 functions
807. Rte_Rips_DsmqSwitch
808. Rte_Rips_DsmqTransitionStart
809. Rte_Rips_DsmqTransitionSync
810. Rte_Rips_DsmqTransitionEnd
811. Server 功能 Invocations
812. Rte_Rips_Invoke
813. Rte_Rips_ReturnResult
814. Rte_Rips_InvocationHandler
815. Signal 通知 for 转换器
816. Rte_Rips_NotifyRxAck
817. Rte_Rips_NotifyRxTOut
818. Rte_Rips_NotifyTxAck
819. Rte_Rips_NotifyTxErr
820. Rte_Rips_NotifyTxTOut
821. Rte_Rips_NotifyRxIndication
822. Rte_Rips_NotifyTriggerTransmit
823. Rte_Rips_NotifyTxConfirmation
824. Rte_Rips_NotifyCopyRxData
825. Rte_Rips_NotifyCopyTxData
826. Rte_Rips_NotifyStartOfReception
827. Rte_Rips_NotifyTpRxIndication
828. Rte_Rips_NotifyTpTxConfirmation
829. Cross cluster trigger communication functions
830. Rte_Rips_Trigger
831. 数据 and Event 通知
832. Rte_Rips_Feedback
833. Rte_Rips_DataIsUpdated
834. Rte_Rips_DataIsUpdated_EventActivation
835. External Parameter Access
836. Rte_Rips_Prm
837. RTE Implementation Plug-In Lifecycle API
838. Rte_Rips_SchM_Init
839. Rte_Rips_Rte_Start
840. Rte_Rips_Rte_Stop
841. Rte_Rips_SchM_Deinit
842. RTE Implementation Plug-Ins 功能性规范
843. Specializations of AtomicSwComponentTypes
844. Interaction with VFB 追踪
845. 校验 Strategy for RTE Implementation Plug-Ins
846. Graduated 校验 Strategy
847. 校验 Implication w.r.t. Exclusive Areas
848. 校验 Implication w.r.t. Event To Task 映射
849. 校验 Implication w.r.t. communication multiplicity
850. 数据 Communication
851. Enable RTE Implementation Plug-In 支持 for communication graphs
852. Details on RIPS FlatInstanceDescriptors for 数据 Communication Graphs
853. 数据 Communication Graphs involving NvBlockSwComponents
854. 处理 of Communication Status and Conversion with RTE Implementation Plug-Ins
855. Instantiation of global copy
856. Explicit Communication and RTE Implementation Plug-Ins
857. Global copy provided by RTE
858. Simple 示例 about non-queued read and write
859. Simple 示例 about queued read and write
860. Global copy provided by RTE Implementation Plug-In
861. Implicit Communication and RTE Implementation Plug-Ins
862. Fill Flush Routines
863. Simple 示例 about implicit w/o 组件数据结构
864. object 代码软件组件 with conversion的示例
865. Inter Runnable Variables and RTE Implementation Plug-Ins
866. RTE Implementation Plug-Ins and NvBlockSwComponents
867. 示例 about source 代码软件组件 with complex call tree and NV 数据
868. Exclusive Areas
869. Exclusive Areas and RTE Implementation Plug-Ins
870. Enable RTE Implementation Plug-In 支持 for ExclusiveAreas
871. Exclusive Areas in Role canEnter
872. Exclusive Areas in Role runsInside
873. Modes
874. Modes and Local 软件 Cluster Communication Plug-In
875. Modes and Cross 软件 Cluster Communication Plug-In
876. Enable RTE Implementation Plug-In 支持 for 模式 machine instances
877. Cross 软件 Cluster Communication Plug-In 支持 for 模式 communication
878. Rte_Rips_Switch indication
879. Rte_Rips_DequeueModeSwitch indication
880. Enable RTE Implementation Plug-In 支持 for distributed shared 模式 queues
881. RTE Implementation Plug-In 支持 for distributed shared 模式 queues
882. DSMQ transition OsTask activation
883. Rte_Rips_DsmqSwitch indication
884. Rte_Rips_DsmqTransitionStart indication
885. Rte_Rips_DsmqTransitionSync indication
886. Rte_Rips_DsmqTransitionEnd indication
887. Parameters
888. Enable RTE Implementation Plug-In 支持 for Parameter Communication Graphs
889. Instantiation of parameter
890. 软件组件 Implementation
891. 检测 of source 代码 vs. object 代码软件 components
892. 软件 sharing and RTE Implementation Plug-Ins
893. Client Server Communication
894. Enable RTE Implementation Plug-In 支持 for client server Communication
895. Trigger Communication
896. Enable RTE Implementation Plug-In 支持 for triggers
897. Trigger and Cross 软件 Cluster Communication Plug-In
898. Rte_Rips_Trigger indication
899. Transformers
900. DataTransformation for 数据 Communication Graphs的处理
901. 处理 of Client Server Communication Graphs and Trigger Communication Graphs
902. Measurement
903. Measurement on 数据 Communication Graphs
904. Measurement on Parameter Communication Graphs
905. Inter-Partition communication
906. Bypass 支持
907. 组件 wrapper method
908. Direct buffer access method
909. Extended buffer access method
910. Activation of RTEEvents and BswEvents
911. RTE ECU 配置
912. RTE 模块配置
913. RTE 配置 Version Information
914. RTE Generation Parameters
915. RTE PreBuild 配置
916. RTE PostBuild 配置
917. 软件组件 instances的处理
918. RTE Event to task/ISR 映射
919. Evaluation and execution order
920. Direct and trusted 功能 call
921. 调度 Points
922. Timeprotection 支持
923. Os Interaction
924. Background activation
925. Constraints
926. Rte Os Interaction
927. Activation using Os features
928. Modes and 调度 Tables
929. Exclusive Area implementation
930. NVRam Allocation
931. SWC Trigger queuing
932. SWC 模式 Machine Instance 配置
933. 软件组件类型的处理
934. Selection of Software-Component Implementation
935. 组件类型 Calibration
936. Implicit communication 配置
937. Exclusive access optimization
938. Communication infrastructure
939. 配置 of the BSW Scheduler
940. BSW Scheduler 通用配置
941. BSW 模块 Instance 配置
942. BSW ExclusiveArea 配置
943. BswEvent to task 映射
944. BswEvent to ISR2 映射
945. BSW Trigger 配置
946. BSW Trigger connection
947. BSW Trigger queuing
948. BSW ModeDeclarationGroup 配置
949. BSW Client Server 配置
950. BSW Sender Receiver 配置
951. BSW 模式 Machine Instance 配置
952. 同步 Points的配置
953. 初始化的配置
954. 配置 of Task Chains
955. distributed shared 模式 queues的配置
956. 配置 of RTE Implementation Plug-Ins
957. 通用配置定义 for Uri References
958. 通用配置 of RTE Implementation Plug-Ins utilization
959. 配置 of Fill-Flush-Routines of RTE Implementation Plug-Ins
960. 配置 of invocation handlers of RTE Implementation Plug-Ins
961. 配置 of Com User
962. Com User 模块 Cnf的配置
963. Com 回调的配置
964. 附录
965. Metamodel Restrictions
966. Restrictions concerning WaitPoint
967. Restrictions concerning RTEEvent
968. Restrictions concerning queued implementation policy
969. Restrictions concerning ServerCallPoint
970. 软件 components的Restriction concerning 多 instantiation
971. Restrictions concerning runnable entity
972. Restrictions concerning runnables with dependencies on modes
973. Restriction concerning SwcInternalBehavior
974. Restrictions concerning Initial Value
975. Restriction concerning PerInstanceMemory
976. Restrictions concerning unconnected r-port
977. Restrictions concerning unconnected requiredData, requiredModeGroup, requiredTrigger and requiredClientServerEntry
978. Restrictions regarding communication of 模式 switch 通知
979. Restrictions regarding Measurement and Calibration
980. Restriction concerning ExclusiveAreaImplMechanism
981. Restrictions concerning AtomicSwComponentTypes
982. Restriction concerning the enableUpdate attribute of NonqueuedReceiverComSpecs
983. Restrictions concerning the large and dynamic 数据类型
984. Restriction concerning REFERENCE 类型
985. Restriction concerning ModeDeclarationGroup categories and value attributes
986. Restrictions concerning C/S 接口
987. Restrictions concerning S/R Features
988. External 需求
989. MISRA C Compliance
990. Referenced Meta Classes
991. Referenced ECUC 配置 Parameters
992. Com
993. ComMainFunctionTx
994. ComMainFunctionRx
995. ComGroupSignal
996. ComIPdu
997. ComSignal
998. ComUserModule
999. ComUserUriDefSet
1000. ComUserModuleCnf
1001. ComUserSignal
1002. ComSignalGroup
1003. ComUserSignalGroup
1004. ComUserIPdu
1005. ComUserCallback
1006. EcuC
1007. EcucPartition
1008. EcucPdu
1009. EcucPduDedicatedPartition
1010. NvM
1011. NvMBlockDescriptor
1012. NvMInitBlockCallback
1013. NvMSingleBlockCallback
1014. NvMTargetBlockReference
1015. Os
1016. OsAlarm
1017. OsApplication
1018. OsAlarmCallback
1019. OsCounter
1020. OsEvent
1021. OsScheduleTable
1022. OsScheduleTableExpiryPoint
1023. OsTask
1024. OsIsr
1025. OsApplicationTrustedFunction
1026. Xfrm
1027. XfrmImplementationMapping
1028. 示例
1029. ModeDeclarationGroupMapping
1030. Stability need for received 数据
1031. CompuMethod with bitfield texttable conversion
1032. 结构类型 with self-reference
1033. 多 calibration parameters instances
1034. PayloadAsArray for variable-size array
1035. PayloadAsPointerToArray for variable-size array
1036. Change history of AUTOSAR traceable items
1037. Traceable item history of this document according to AUTOSAR Release R4.0.2
1038. Deleted SWS Items
1039. Changed SWS Items
1040. Added SWS Items
1041. Traceable item history of this document according to AUTOSAR Release R4.0.3
1042. Deleted SWS Items
1043. Changed SWS Items
1044. Added SWS Items
1045. Traceable item history of this document according to AUTOSAR Release R4.1.1
1046. Renamed SWS Items
1047. Added constraints
1048. Deleted SWS Items
1049. Changed SWS Items
1050. Added SWS Items
1051. Traceable item history of this document according to AUTOSAR Release R4.1.2
1052. Added 规范 Items in 4.1.2
1053. Changed 规范 Items in 4.1.2
1054. Deleted 规范 Items in 4.1.2
1055. Added Constraints in 4.1.2
1056. Changed Constraints in 4.1.2
1057. Deleted Constraints in 4.1.2
1058. Traceable item history of this document according to AUTOSAR Release R4.1.3
1059. Added 规范 Items in 4.1.3
1060. Changed 规范 Items in 4.1.3
1061. Deleted 规范 Items in 4.1.3
1062. Added Constraints in 4.1.3
1063. Changed Constraints in 4.1.3
1064. Deleted Constraints in 4.1.3
1065. Traceable item history of this document according to AUTOSAR Release R4.2.1
1066. Added 规范 Items in 4.2.1
1067. Changed 规范 Items in 4.2.1
1068. Deleted 规范 Items in 4.2.1
1069. Added Constraints in 4.2.1
1070. Changed Constraints in 4.2.1
1071. Deleted Constraints in 4.2.1
1072. Traceable item history of this document according to AUTOSAR Release R4.2.2
1073. Added 规范 Items in 4.2.2
1074. Changed 规范 Items in 4.2.2
1075. Deleted 规范 Items in 4.2.2
1076. Added Constraints in 4.2.2
1077. Changed Constraints in 4.2.2
1078. Deleted Constraints in 4.2.2
1079. Traceable item history of this document according to AUTOSAR Release R4.3.0
1080. Added 规范 Items in 4.3.0
1081. Changed 规范 Items in 4.3.0
1082. Deleted 规范 Items in 4.3.0
1083. Renamed Constraints in 4.3.0
1084. Added Constraints in 4.3.0
1085. Changed Constraints in 4.3.0
1086. Deleted Constraints in 4.3.0
1087. Traceable item history of this document according to AUTOSAR Release R4.3.1
1088. Added 规范 Items in 4.3.1
1089. Changed 规范 Items in 4.3.1
1090. Deleted 规范 Items in 4.3.1
1091. Added Constraints in 4.3.1
1092. Changed Constraints in 4.3.1
1093. Deleted Constraints in 4.3.1
1094. Traceable item history of this document according to AUTOSAR Release R4.4.0
1095. Added 规范 Items in 4.4.0
1096. Changed 规范 Items in 4.4.0
1097. Deleted 规范 Items in 4.4.0
1098. Added Constraints in 4.4.0
1099. Changed Constraints in 4.4.0
1100. Deleted Constraints in 4.4.0
1101. Traceable item history of this document according to AUTOSAR Release R19-11
1102. Added 规范 Items in 19-11
1103. Changed 规范 Items in 19-11
1104. Deleted 规范 Items in 19-11
1105. Traceable item history of this document according to AUTOSAR Release R20-11
1106. Added 规范 Items in R20-11
1107. Changed 规范 Items in R20-11
1108. Deleted 规范 Items in R20-11
1109. Traceable item history of this document according to AUTOSAR Release R21-11
1110. Added 规范 Items in R21-11
1111. Changed 规范 Items in R21-11
1112. Deleted 规范 Items in R21-11
1113. Traceable item history of this document according to AUTOSAR Release R22-11
1114. Added 规范 Items in R22-11
1115. Changed 规范 Items in R22-11
1116. Deleted 规范 Items in R22-11
1117. Traceable item history of this document according to AUTOSAR Release R23-11
1118. Added 规范 Items in R23-11
1119. Changed 规范 Items in R23-11
1120. Deleted 规范 Items in R23-11
1121. Added Constraints in R23-11
1122. Changed Constraints in R23-11
1123. Deleted Constraints in R23-11
1124. Traceable item history of this document according to AUTOSAR Release R24-11
1125. Added 规范 Items in R24-11
1126. Changed 规范 Items in R24-11
1127. Deleted 规范 Items in R24-11
1128. Added Constraints in R24-11
1129. Changed Constraints in R24-11
1130. Deleted Constraints in R24-11
1131. Traceable item history of this document according to AUTOSAR Release R25-11
1132. Added 规范 Items in R25-11
1133. Changed 规范 Items in R25-11
1134. Deleted 规范 Items in R25-11
1135. Added Constraints in R25-11
1136. Changed Constraints in R25-11
1137. Deleted Constraints in R25-11
