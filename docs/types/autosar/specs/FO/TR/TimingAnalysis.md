# Timing Analysis and Design (`TimingAnalysis`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 645 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TR_TimingAnalysis_645\AUTOSAR_FO_TR_TimingAnalysis.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TR_TimingAnalysis_645\AUTOSAR_FO_TR_TimingAnalysis.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TR_TimingAnalysis_645\zzgen\FO_TR_TimingAnalysis.complete.txt`

## 文档简介

This document represents recommended methods and practices for timing analysis and design within the AUTOSAR development process. It is intended for different kinds of readers:

* System, development and test engineers with no or little knowledge of timing analysis
* Engineers with general knowledge of timing analysis who want to enhance their understanding of AUTOSAR methodology
* Further stakeholders (listed under )

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document represents recommended methods and practices for timing analysis and design within the AUTOSAR development process. It is intended for different kinds of readers:

* System, development and test engineers with no or little knowledge of timing analysis
* Engineers with general knowledge of timing analysis who want to enhance their understanding of AUTOSAR methodology
* Further stakeholders (listed under )

### 2. Objective

During the development of AUTOSAR based systems, a common technical approach for timing analysis is needed to fulfill the AUTOSAR main requirement `RS_Main_00340`. This document describes all major steps of timing analysis needed from the definition and validation of functional timing requirements to the verification of timing requirements on component and system level. Figure  illustrates the different aspects for timing analysis. Basis for the described methods are AUTOSAR Methodology  and AUTOSAR timing extensions .

### 3. 概述
*原文标题：Overview*

The AUTOSAR timing analysis methodology is divided in following parts:

* Decomposition of timing requirements
* Timing analysis on function level
* End-to-end timing analysis for distributed functions
* Timing analysis on the network level
* Timing analysis on the ECU level
* Timing properties and methods for timing analysis

For each part, a proposed methodology is presented based using a number of typical real world use-cases. A complete overview of all use-cases is given in section  on page .

### 4. Motivation

The increasing number of functions, complexity in E/E Architectures and the resulting requirements on ECUs and communication networks imply increasing requirements on the development process. A central part of the development process is the design of robust and extendible ECUs and network architectures.

In the development of ECUs complexity is introduced through the integration of multiple SW-Cs (constituting various functions) executed in schedulable tasks. The design and verification of the task schedules becomes difficult due to their dependencies on shared resources such as processing cores and memory.

On the network level heterogeneous network types such as CAN, LIN, FlexRay, MOST and Ethernet are used. This makes it hard to ensure robustness, especially when routing between protocols over a gateway takes place. The design of an efficient and robust network architecture and configuration is increasingly difficult. This creates the need for a systematic approach.

These aspects must be addressed in the E/E development process together with additional requirements regarding quality, testability, ability to perform diagnostic services and so on.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 示例
*原文标题：Example*

The active steering shown in the figure  demonstrates an end-to-end timing constraint with a real-world AUTOSAR Classic Platform (CP) example. The system consists of sensors, ECUs, buses and an actuator. With the vehicle dynamics model of the car and the active steering function the functional developer defined a maximum reaction time for the outlined chain: 30ms. This becomes a top level end-to-end timing requirement for the system.

This timing requirement then gets decomposed, i.e. it gets sliced into smaller portions T1...T5, one portion for each component of the system. Obviously, ECUs and buses handle many different features with their own timing requirements, all competing for network and computation resources. On an ECU with tasks/interrupts and their Runnable Entities, the top level timing requirements are broken down into more fine grained timing requirements and the competition for resources is continued on a lower level.

In this example, the embedded software is developed independently from the later allocation on concrete ECUs, i.e. ICM and ASA in Figure .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 范围
*原文标题：Scope*

This document describes how to implement timing analysis during the development of E/E systems. Similar to , this does not include a complete process description but rather a set of practical methods to define timing requirements and how to ensure that these requirements are met. As stated in , the methodology is designed to cover the needs of various AUTOSAR stakeholders:

* Organizations: Methodology is modeled in a modular format to allow organizations to tailor it and combine the methodology within their own internal processes, while identifying points where they interact with other organizations.
* Engineers: Methodology is scoped to allow engineers of various roles quickly find AUTOSAR information that is relevant to their specific needs.
* Tool Vendors: Methodology provides a common language to share among all AUTOSAR members and a common expectation of what capabilities tools should support.

The following topics are addressed:

* Definition of appropriate timing analysis methods including related timing properties for all stages of an AUTOSAR development process without disclosure of company confidential information.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation | Meaning |
|---|---|
| ASA | Active Steering Actuator |
| AUTOSAR | AUTomotive Open System ARchitecture |
| BSW | Basic Software |
| CAN | Controller Area Network |
| COM | Communication module |
| CPU | Central Processing Unit |
| DES | Discrete Event Simulation |
| E2E | End to end |
| ECU | Electrical Control Unit |
| ICM | Integrated Chassis Management |
| ID | Identifier |
| I/O | Input/Output |
| LIN | Local Interconnect Network |
| NW | Network |
| PIL | Processor-In-The-Loop |
| PDU | Protocol Data Unit |
| RE | Runnable Entities |
| RTE | Runtime Environment |
| SW-C | Software Component |
| SPEM | Software Process Engineering Meta-Model |
| TD | Timing Description |
| TIMEX | AUTOSAR Timing Extensions |
| UC | Use-Case |
| UML | Unified Modeling Language |
| WCET | Worst case execution time |
| WCRT | Worst case response time |
| VFB | Virtual Functional Bus |

### 8. 术语表 of Terms
*原文标题：Glossary of Terms*

| Term | Synonym | Definition |
|---|---|---|
| Event-triggered Frame | Sporadic Frame | A frame that is sent on an event triggered by the application independent from a communication schedule. The event-triggered sending is limited by a debounce time which specifies the shortest allowed temporal distance between two occurrences. |
| Accuracy |  | The accuracy is the closeness to the true value. For the worst case of a timing property it describes the maximum overestimation. |
| Cause-Effect Chain |  | A cause-effect chain represents the data-flow among communicating components, by relating read events of a consumer component to the corresponding write events of a producer component. |
| Execution Time |  | The execution time is the total time that the function needs to be assigned the resource in order to complete. |
| Event Chain |  | An event chain describes a causal order for a set of functionally dependent timing events. (See TimingDescriptionEventChain in ) |
| Frame | Message | A frame is a data package sent over a communication medium. This element describes the structure of data (OSI layer 2) sent on a channel. For example, a frame on CAN and FlexRay. A commonly used synonym is "message". |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 限制
*原文标题：Limitations*

One of the key features of the AUTOSAR Adaptive Platform is adaptability. Applications can be started and stopped on-the-fly. Existing applications updated or even new applications installed over-the-air. This results in the possibility of operation conditions changing rapidly and unpredictably. It is no longer possible to predict and analyze the timing for all possible operating conditions.

Currently the scope of this document is limited to analysis and design of a well-known system until its delivered. Future extensions will cover possibilities for timing analysis of systems with a high levels of uncertainty introduces by the adaptability of the AUTOSAR Adaptive Platform.

### 10. Use Cases

In order to show the proposed usage of timing analysis methodology a number of real-world use-cases are included in the document.

The use-cases are divided into categories using the same structure as the chapters:

* Timing analysis on the function level (chapter )
* End-to-end timing analysis for distributed functions (interface between ECU and network level) (chapter )
* Timing analysis on the network level (chapter )
* Timing analysis on the ECU level (chapter )

| Section | Use-case | Page |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

### 11. Methodology Roles

This section introduces roles that can benefit from knowledge about the methods presented in this document and will be used in the Timing Analysis Methodology.

| Role | ECU Integrator | < | < |
|---|---|---|---|
| Package | AUTOSAR Root::M2::Methodology::Methodology Library::Common Elements::Roles | < | < |
| Brief Description | Integrates the complete software on an ECU. | < | < |
| Description | Integrates the complete software on an ECU, which includes generating necessary code and completing the configuration of all software components and basic software modules. | < | < |
| Benefit | Receives information about how to define standardized timing requirements (related to the function) and how to verify them. | < | < |
| Relation Type | Related Element | Mul. | Note |
| Performs | TBC | 1 | n.A. |

| Role | E/E Architect | < | < |
|---|---|---|---|
| Package | Not in the AUTOSAR methodology yet. A part of AUTOSAR System Engineer Role. | < | < |
| Brief Description | Defines E/E topology. | < | < |
| Description | Defines E/E topology. | < | < |
| Benefit | Receives information about how to evaluate the timing quality of the E/E architecture under timing requirements (resources and timing budgets, high level). | < | < |
| Relation Type | Related Element | Mul. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Document 结构 and Chapter 概述
*原文标题：Document Structure and Chapter Overview*

This section contains an overview of the document and the chapter contents. Figure  on page  illustrates the different aspects for timing analysis and indicates the chapters in which these will be addressed. In order to show relevance in real world systems, each aspect is described based on one or more typical use-cases, which are linked to  in Chapter . These use-cases are split into smaller timing tasks. For each of these tasks the necessary timing properties and the corresponding timing methods are presented. These are used to validate the timing and performance constraints typical for the corresponding use-case.

Chapter  "" contains the objective, motivation, scope of the document abbreviations and glossary of terms. Additionally, a list of the use-cases is contained in section .

Chapter  "" gives a general overview of timing analyses and introduces the relevant elements and concepts.

Chapter  "" contains a short introduction about the challenge of breaking down functional timing requirements from an abstract user's view to the implementation view of AUTOSAR timing extensions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 时序的基础概念
*原文标题：Basic Concepts of Timing*

### 14. 时序需求 and 抽象 Levels
*原文标题：Timing Requirements and Abstraction Levels*

Timing properties described in the previous section have to be taken into account all along the specification and design process. In the specification phase, these timing properties are expressed as timing requirements on the system functions and decomposed during the system specification and design phases. In order to achieve this decomposition, it is better to follow some methodological principles. The following chapters of this document will present in more details these principles through the description of use cases. This section gives the definitions of the main timing abstraction levels considered in this document. It also gives some preliminary rules for applying timing requirements decomposition throughout these abstraction levels.

### 15. 时序抽象 Levels
*原文标题：Timing Abstraction Levels*

In this document, we will consider the following main timing abstraction levels corresponding to different levels of abstraction of platforms:

* Functional Level This abstraction level is out of AUTOSAR modeling scope but is of primary importance to capture timing requirements from the early specification phases. It consists in an abstract architecture of the system functions.
* Abstract Platform Level This abstraction level is in the AUTOSAR modeling scope. It consists of a description of an architecture of abstract components. These components are platform agnostic and can be mapped to any concrete platform (AUTOSAR or non AUTOSAR platforms).
* Concrete Platform Level This abstraction level corresponds, in the scope of AUTOSAR, to Classic Platform or Adaptive Platform, and can also correspond to a non AUTOSAR concrete platform (e.g. COVESA).

Timing requirements decomposition has to be coherent between these levels of abstraction. A minimal set of guidelines shall be followed to ensure this coherence. Among these guidelines, it is important to distinguish concepts of decomposition and transformation.

### 16. Chaining Decompositions and Transformations

In this document, we will consider two kinds of transitions: transformation and decomposition. These are used in the following context and definitions.

* Decomposition A decomposition consists in splitting a component or a timing requirement (more generally an artifact) at a given level of abstraction (either at functional-level, or abstract platform level or at a concrete platform level). A decomposition is a result of a design or organizational decision.
* Transformation A transformation is a mapping. It is based on a set of rules describing how one (or many) source concepts are transformed into one (or many) target concepts. In this document we consider that transformations are used between different levels of abstraction (e.g. a transformation from functional level to abstract platform level, or a transformation from an abstract platform level to a concrete platform level). Once the mapping rules are defined, a transformation can be automated, e.g. by creation of elements on lower layer.

In order to simplify the transition between levels of abstraction and ensure a coherent timing requirements decomposition the following guidelines are recommended:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 基础概念 of Real Time Architectures
*原文标题：Basic Concepts of Real Time Architectures*

### 18. Real Time 架构定义
*原文标题：Real Time Architecture Definition*

An E/E architecture is the result of early design decisions that are necessary before a group of stakeholders can collaboratively build a system. An architecture defines the constituents (such as components, subsystems, ECUs, functions, compilation units ...) and the relevant relations (such as "calls", "sends data to", "synchronizes with", "uses", "depends on" ...) among them. In addition to the above-mentioned structural aspects, a real-time architecture shall provide means to fulfill timing requirements. Like for the system's constituents, real-time architecting consists of decomposing timing requirements and identifying relationships (such as refinement and traceability) among them. In fact, the timing requirements decomposition is a consequence of the structural decomposition where timing requirements are in part inherited by the decomposed units. However, while structural decomposition could be driven by functional concerns, input/output data flows, and/or provided/required services, timing decomposition is a more complex task to achieve. Correct timing requirement decomposition must be locally and globally feasible.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Execution and Transmission Times

The execution time of a Schedulable Entity is the duration taken by the Schedulable Entity to complete its execution on a computing resource (e.g. ECU). When referring to execution time we mean the net execution time. It only includes the duration a Schedulable Entity is actually executed on the computing resource. Not included is the time where it may be suspended or preempted due to other Schedulable Entities sharing the same computing resource, the setup time required to prepare the computing resource on the start or when resuming the execution of a Schedulable Entity.

Similarly, the transmission time of a signal/message/frame on a communication resource (e.g. bus, network) is the duration taken by the signal/message/frame to transit from its source to its destination without any consideration of other signals/messages/frames transiting on the same communication resource.

An execution/transmission time is a quantitative property that can be described with the following characteristics:

* A statistical qualifier (worst, best, mean/average) representing the bounds of execution/transmission time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Response Time

The response time of a Schedulable Entity is the time duration taken by the Schedulable Entity to complete its execution. Unlike for execution time, the response time takes into account other Schedulable Entities that are sharing the same execution/communication resource. Hence, the response time of a Schedulable Entity comprises its execution time and additional terms induced by the concurrent access to shared resources (blocking times, jitters...). See Chapter  for more details.

An end-to-end response time is a response time in which several Schedulable Entities are involved. These Schedulable Entities form a chain. First Schedulable Entity of the chain is called the source Schedulable Entity and the last one is called the sink Schedulable Entity. The end-to-end response time is the elapsed time until the sink Schedulable Entity of the chain terminates its execution.

Like an execution time, a response time is a quantitative property that can be described with the following characteristics:

* A statistical qualifier (worst, best and mean/average).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Relation between 时序 and 数据 Flow
*原文标题：Relation between Timing and Data Flow*

The functional behavior of a real-time system can not only be affected by its end-to-end timing behavior but also by its internal data flow. A cause-effect chain represents the data flow among communicating components, by relating read events of a consumer component to the corresponding write events of a producer component. Depending on the abstraction level, a component might be a functional block, a software component, or a Schedulable Entity.

It is important to mention that the specific data flow is observed on job-level. Take Figure  as an example. It shows a cause-effect chain of three periodic real-time tasks (Schedulable Entities). The different execution instances of Schedulable Entities are called jobs. With implicit communication, each job reads its input at the beginning of its execution, executes on that data, and writes (publishes) the results after completion. This behavior varies for every job, because the physical execution times of Schedulable Entities are affected by a multitude of influences. Typical reasons are: input data, execution cycle, hardware platform, and scheduling design.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Logical Execution Time and data-flow determinism

Response times are statistical qualifiers in the sense of Section , meaning that the time that a Schedulable Entity takes for completion may jitter. Consequently, the times when Schedulable Entities read and write data may also jitter. A cause-effect chain is a chain in which the outcome of one entity influences the behavior of the next entity in the chain. The motivation of a logical timing abstraction is the observation that the relevant behavior of real-time programs is determined by the data flow within a cause-effect chain. For this data flow, it is only important when inputs are read and outputs are written, and not when programs complete code execution.

The concept of a cause-effect chain allows specifying a unique data flow between the entities of a chain. Such a unique data flow is called a deterministic data flow and the related property is data-flow determinism. Data-flow determinism guarantees that the behavior of a chain is preserved under any platform execution. Data-flow determinism is an important basic concept of real-time architectures, because it increases design predictability, robustness, and portability.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Languages for 时序需求规范
*原文标题：Languages for Timing Requirements Specification*

The AUTOSAR methodology is based on the AUTOSAR language and its timing extensions. AUTOSAR is the language for the software implementation levels but not applicable at the functional levels (analysis and design). Therefore, in order to ensure a complete model-based approach for timing requirements decomposition, a complementary modeling language for functional levels has to be used. EAST-ADL2  and its timing extension TADL2  allow functional levels specification with precise timing models. Moreover, TADL2 and AUTOSAR Timing extensions are sharing the same base concepts which may facilitate the translation of timing requirements from the functional level to the AUTOSAR level (where timing requirements are expressed with TIMEX).

Therefore, EAST-ADL / TADL is briefly presented as an example of modeling language for the support of the functional levels of a methodology for timing requirements decomposition.

### 24. EAST-ADL / TADL

EAST-ADL is an Architecture Description Language (ADL) for automotive embedded systems, developed in several European research projects. It is designed to complement AUTOSAR with descriptions at higher level of abstractions. Aspects covered by EAST-ADL include vehicle features, functions, requirements, variability, software components, hardware components and communication.

TADL2 (Timing Augmented Description Language) language concepts can be used in specific steps of the GMP (Generic Methodology Pattern, see section ) methodology to describe timing information. TADL2 allows the specification of timing constraints that may express the following timing properties/requirements:

* Execution Time (Worst-case, Best-case, Simulated, Measured)
* End-to-end Latency
* Sampling Rates
* Time Budget
* Response Time
* Communication Delay
* Slack
* Repetition pattern
* Synchronization
* ...

TADL2 base concepts are quite equivalent to those of AUTOSAR TIMEX presented in the following section.

### 25. 基础概念 of AUTOSAR TIMEX
*原文标题：Basic concepts of AUTOSAR TIMEX*

According to , the primary purpose of the timing extensions is to support constructing embedded real-time systems that satisfy given timing requirements and to perform timing analysis/validations of those systems once they have been built.

The AUTOSAR Timing Extensions provide a timing model as specification basis for a contract based development process, in which the development is carried out by different organizations in different locations and time frames. The constraints entered in the early phase of the project (when corresponding solutions are not developed yet) shall be seen as extra-functional requirements agreed upon by the development partners.

This way the timing specification supports a top-down design methodology. However, due to the fact that a pure top-down design is not feasible in most of the cases (e.g. because of legacy code), the timing specification allows the bottom-up design methodology as well.

The resulting overall specification (AUTOSAR Model and Timing Extensions) shall enable the analysis of a system's timing behavior and the validation of the analysis results against timing constraints.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. TIMEX Work Products

The following part decribes the different TIMEX Work Products to provide a general overview on them. Further, much more detailed descriptions are given in .

Events. The notion of Event is used to describe that specific observable events occur in a system and also at which locations in this system the occurrences are observed. These are related to predefined Event types and are used to specify different actions (eg. Read/Write data to ports, Send/Receive data via network, Start/Terminate executables ...).

Event Chains specify a causal relationship between two Events. For example Event B occurs if and only if Event A occurred before.

Timing Constraints imposed on Events. Event Triggering Constraint imposes a constraint on the occurrences of an Event in a temporal space (periodic, sporadic, specific pattern).

Timing Constraints imposed on Event Chains. Event Triggering Constraints are used to specify a reaction or age, e.g the maximum distance of two following events. Latency and synchronization timing constraints specify that a stimuli or response event must occur within a given time interval (tolerance) to be said to occur simultaneous and synchronous respectively.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 时序需求 on 设计 Levels
*原文标题：Timing Requirements on Design Levels*

The decomposition of timing requirements is a primary concern for the design and analysis of a real-time system. At the beginning of the system design process, timing requirements are expressed at the level of the customer functionality identified in the specification. The development of the customer functionality requires its decomposition into small and manageable components. This decomposition activity called architecting implies also a decomposition of timing requirements attached to the decomposed functionality. This chapter gives an overview of the proposed approach for the decomposition of timing requirements.

### 28. 时序需求 Decomposition Problem
*原文标题：Timing Requirements Decomposition Problem*

Mastering timing requirements is one key success factor for the development and integration of state of the art automotive E/E-systems. Timing requirements should be monitored continuously during the complex development process of a vehicle, and further shall be reused and communicated for the re-use of functions or components to other vehicle projects: timing requirements have to be described systematically and carefully. The required level of detail can vary from timing constraints for high level customer related features at the vehicle level, over timing requirements for the control of a power amplifier for a particular actuator, to ECU-internal timing for data synchronicity of software functions on a multi-core microcontroller at the operational level. As illustrated in Figure , the development process follows the well-known V-model, which describes a systematic and staggered top-down approach from system specifications to system integration. On the left branch process steps of specification are described, implementing decomposition from an entire E/E-system to single components. The base of the V describes implementation and associated test procedures.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Hierarchical 时序描述
*原文标题：Hierarchical Timing Description*

During the early design phase of an automotive development process the architecture discussion is about high level customer related functions. These functions can be detailed in functional "cause and effect" or "activity" chains, which from a temporal view can be budgeted - justified by customer's experience. The functional quality and thus technical effort dedicated to the customer's experience is a business decision of a company. In the AFS example this is the reaction time from the detection by the yaw rate sensor to the motor control of the steering system. This avoids instable behavior during driving in curves.

An other example is a powertrain or chassis control function which can cause inconveniences like bucking during shifting or braking.

From methodological and technical view timing analysis is a tool to assure the desired temporal behavior during the mapping of a functional network to a component network as depicted on Figure .

Once the major timing budgets for customer related functions are defined and a distribution of functional parts to hardware components is done , a more detailed temporal view of a networking architecture can be made.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 280 章（内容从略，见纯文本全文）

30. Methodologies for 时序需求 Decomposition
31. 功能性 and 软件 Architectures 建模 Levels
32. 指南 for 时序需求 Decomposition
33. Conclusions
34. 时序 on 功能性 Level
35. 简介
36. 功能性架构建模 Elements
37. 功能性时序建模 Elements
38. From 功能性 Level to Autosar
39. 功能性建模 Languages
40. 设计 at the 功能性 Level
41. 概述 of Function-level Use Cases
42. Function-level use case "Identify 时序需求 for a new vehicle 功能"
43. Main Scenario
44. Function-level use case "分区 a vehicle 功能 into a 功能性架构"
45. Main Scenario
46. Function-level use case "映射 a 功能性架构 to a hardware components 网络"
47. Main Scenario
48. End-to-End 时序 for Distributed Functions
49. Relation to other chapters
50. 概述 of End-to-End Use Cases
51. E2E use case "Derive per-hop time budgets from End-to-End 时序需求"
52. Main Scenario
53. E2E use case "Deriving 时序需求 from an existing implementation"
54. Main Scenario
55. E2E use case "Specify 时序需求 for 功能性接口 based on Signals/Parameters"
56. Main Scenario
57. E2E use case "Aggregate E2E 时序 guarantees from per-hop 时序 guarantees"
58. Main Scenario
59. E2E use case "Verify guarantees against 时序需求"
60. Main Scenario
61. E2E use case "Trace-based 时序 verification of a distributed implementation"
62. Main Scenario
63. E2E use-case "简介 of Service-Oriented Communication"
64. Main Scenario
65. 校验 in 时序 Reference Platform
66. 时序 for Networks
67. 示例
68. 网络 Use-cases的概述
69. NW use case "集成 of new communication"
70. Main Scenario
71. Alternative Scenario
72. Performance/时序需求
73. NW use case "设计 and 配置 of a new 网络"
74. Main Scenario
75. Performance/时序需求
76. NW use case "Remapping of an existing communication link"
77. Main Scenario
78. Performance/时序需求
79. NW use case "Changes of the E/E-Topology"
80. Moving a single ECU
81. Moving 多 ECUs
82. Adding a 网络
83. Removing a 网络
84. Main Scenario
85. Performance/时序需求
86. NW use case "Optimizing the communication timings"
87. Main Scenario
88. Performance/时序需求
89. NW use case "Derive 时序 properties of a message on a 网络 segment"
90. Main Scenario
91. 时序 for SW-Integration on ECU Level
92. Platform Specific Terminology
93. 示例
94. 概述 of ECU Use Cases
95. Assumptions
96. ECU use case "Create 时序建模 of the entire ECU"
97. Characteristic Information
98. Main Scenario
99. Alternative Scenario
100. ECU use case "Collect 时序 Information of a SWE"
101. Characteristic Information
102. Main Scenario
103. Alternative #1 Scenario
104. ECU use case "Derive 时序 properties of an executable entity"
105. Characteristic Information
106. Main Scenario
107. Alternative Scenario 1
108. Alternative Scenario 2
109. ECU use case "Verification of 时序"
110. Characteristic Information
111. Main Scenario
112. ECU use case "Debug 时序"
113. Characteristic Information
114. Main Scenario
115. ECU use case "Optimize 时序 of an ECU"
116. Characteristic Information
117. Main Scenario
118. ECU use case "Optimize 调度"
119. Characteristic Information
120. Main Scenario
121. 调度 and Sporadic Events
122. ECU use case "Optimize 代码"
123. Characteristic Information
124. Main Scenario
125. ECU use case "Integrate a new 功能"
126. Characteristic Information
127. Main Scenario
128. 系统 Level Logical Execution Time
129. 系统 Level Logical Execution Time的基础概念
130. SL-LET in early 设计 stages：规范 and budgeting on 功能性 level
131. Specify a deterministic 数据 flow by using SL-LET intervals for SWC without given 映射
132. Problem：Data-age dispersion without LET and SL-LET
133. Specifying Deterministic data-age dispersion with SL-LET
134. Subsequent use-cases
135. Decomposition of SL-LET intervals to LET intervals
136. Composition of SL-LET intervals from existing LET 规范
137. Robustness of cause-effect chains against modified execution and communication times with (SL-)LET
138. Main Scenario
139. Modified 网络调度, intra-ECU communication and WCRTs
140. Updated 规范
141. Decompose 系统 in LET Zones with hierarchical clocks
142. The Role of LET Zones in the Development Process
143. Properties and Methods for 时序 Analysis
144. 通用简介
145. AUTOSAR Classic Platform (CP)
146. Operating 系统 (OS)
147. OSEK/AUTOSAR CP OS task states
148. 时序 parameters
149. Comments on AUTOSAR OS ECC
150. Comments on AUTOSAR OS Execution Budget and Deferrable Server
151. Runtime Environment (RTE) and 调度管理器 (SchM) ExecutableEntitys'
152. 通用定义
153. ExecutionTimeConstraint and 核 Execution Time (CET)
154. CET 定义
155. Visualizing CET, GET and RT
156. Gross Execution Time (GET)
157. GET 定义
158. Measurement Methodology
159. Response Time (RT)
160. Scenario A：Unqueued / "Last-is-Best" Semantics (e.g., DataReceptionEvent)
161. Scenario B：Queued / FIFO Semantics (e.g., BCC2 Task Activations)
162. Scenario C：Extended Conformance Class (ECC) Tasks (Event-Driven)
163. AUTOSAR 时序 Extensions Implementation
164. Execution Time Constraints (CET)
165. Event-Chain Based Constraints (GET and RT)
166. Differentiating GET vs. RT in TIMEX
167. A Simple Grammar of 时序 Properties
168. 简介 of the Grammar
169. Resources and Schedulable Entities
170. Method of Derivation
171. Statistical Qualifier
172. Constraint 类型
173. 协议 Specifica
174. CAN
175. Activation
176. Relations between Use Cases, Tasks, Properties and Methods
177. 时序 Properties的定义 and Classification
178. Classification and Relation of Properties
179. regarded 时序 Properties的概述
180. GENERIC PROPERTY Load
181. 范围 and Application
182. 接口
183. Expressiveness
184. SPECIFIC PROPERTY Load (CAN)
185. 范围, Application
186. 接口
187. Expressiveness
188. SPECIFIC PROPERTY Load (CPU)
189. 范围 and Application
190. 接口
191. Expressiveness
192. GENERIC PROPERTY Latency
193. 范围 and Application
194. 接口
195. Expressiveness
196. GENERIC PROPERTY Response Time
197. 范围 and Application
198. 接口
199. Expressiveness
200. SPECIFIC PROPERTY Response Time (Routing)
201. 范围 and Application
202. 接口
203. Expressiveness
204. SPECIFIC PROPERTY Response Time (CAN)
205. 范围 and Application
206. 接口
207. Expressiveness
208. SPECIFIC PROPERTY Response Time (ECU)
209. 范围 and Application
210. 接口
211. Expressiveness
212. GENERIC PROPERTY Transmission Time
213. 范围 and Application
214. 接口
215. SPECIFIC PROPERTY Transmission Time (CAN)
216. 范围 and Application
217. 接口
218. SPECIFIC PROPERTY Execution Time
219. 范围 and Application
220. 接口
221. Expressiveness
222. 定义, 描述 and Classification of 时序 Methods
223. Classification and Relation of Methods
224. Analytical calculation
225. Simulation
226. Measurement and 追踪
227. Determination of the Comparability of the Different Methods
228. 概述 of regarded Methods
229. GENERIC METHOD Determine Load
230. 范围 and Application
231. Classification
232. Relation
233. 接口
234. Implementation
235. SPECIFIC METHOD Determine Load (CAN)
236. 范围 and Application
237. Classification
238. Relation
239. 接口
240. Limitation in Application
241. Implementation
242. Analysis
243. Simulation
244. Measurement
245. GENERIC METHOD Determine Latency
246. 范围 and Application
247. Classification
248. Relation
249. 接口
250. Implementation
251. SPECIFIC METHOD Determine Response Time (Routing)
252. 范围 and Application
253. Classification
254. Relation
255. 接口
256. Limitation in Application
257. Implementation
258. Analysis
259. Simulation
260. Measurement
261. SPECIFIC METHOD Determine Response Time (CAN)
262. 范围 and Application
263. Classification
264. Relation
265. 接口
266. Limitation in Application
267. Implementation
268. Analysis
269. Simulation
270. Measurement
271. 通用 remarks
272. Determination of the Comparability of the Different Methods
273. Artifacts for 时序 Analysis
274. 时序 Tasks的描述
275. 时序建模 Elements
276. Work Products
277. 限制
278. 附录
279. 时序 Reference Platform
280. 简介
281. Relation and Extensions to 通用 AUTOSAR Demonstrator
282. TRP on 功能性 Level的设计
283. 软件 Application of TRP
284. 软件 Application of AP Subscriber
285. 软件 Application of CP Provider
286. 软件 Application of AP Provider
287. Hardware Setup of TRP
288. 追踪 and Measurement on TRP
289. 追踪 and Measurement on AP
290. 追踪 and Measurement on CP
291. Evaluation of 需求 on TRP
292. TIMEX ARTI 映射
293. 简介
294. 映射 on AUTOSAR Classic Platform
295. LET Interval Constraints
296. 简介
297. 上层 Bound for the LET interval
298. 下层 Bound for the LET interval
299. Composability of different implementations of (系统 Level-)LET
300. History of Constraints and 规范 Items
301. Constraint History of this Document related to AUTOSAR R4.1.3
302. Changed Constraints in R4.1.3
303. Added Constraints in R4.1.3
304. Deleted Constraints in R4.1.3
305. 规范 Items History of this Document related to AUTOSAR R4.1.3
306. Changed 规范 Items in R4.1.3
307. Added 规范 Items in R4.1.3
308. Deleted 规范 Items in R4.1.3
309. List of figures, list of tables, and index
