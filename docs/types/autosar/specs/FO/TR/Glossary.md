# Glossary (`Glossary`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 055 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TR_Glossary_055\AUTOSAR_FO_TR_Glossary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TR_Glossary_055\AUTOSAR_FO_TR_Glossary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TR_Glossary_055\zzgen\FO_TR_Glossary.complete.txt`

## 文档简介

This document constitutes the comprehensive glossary of AUTOSAR. It contains definitions of all major abbreviations, acronyms and terms used within AUTOSAR. Please note that the document is not intended to be exhaustive. It is important to consult the glossaries of the various working group documents, as these contain additional specific terms within their respective domains.

## 模块依赖

| Definition | See ISO-26262 (), ID 1.61 |
|---|---|
| Initiator | Safety |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | See , ID 1.61 |

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document constitutes the comprehensive glossary of AUTOSAR. It contains definitions of all major abbreviations, acronyms and terms used within AUTOSAR. Please note that the document is not intended to be exhaustive. It is important to consult the glossaries of the various working group documents, as these contain additional specific terms within their respective domains.

### 2. Acronyms, Abbreviations (and Initialisms)

### 3. Explanation

An Abbreviation is a shortened form of a word or phrase, like "Temp." for "Temperature", whereas an Acronym is a specific type of abbreviation formed from the initial letters of a phrase and pronounced as a single word like "AUTOSAR", which stands for "AUTomotive Open System Architecture". An Initialism is similar to an Acronym but is pronounced letter by letter, like "ECU" for "Electronic Control Unit", and there are hybrid forms of an Initialism and an Acronym, like "VLAN" for "Virtual LAN. However, in both colloquial and technical contexts, the terms Abbreviation, Acronym and Initialism are used interchangeably, and that is also the case in this document.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. How to read this document

The title of the sub-chapters is identical to the term to be defined.

### 5. <Term> 模板
*原文标题：<Term> Template*

| Definition | <term to be defined> |
|---|---|
| Initiator | <Functional Cluster which responsible for the term> |
| Further Explanations | <further explanation of the definition> |
| Comment | <comment or hints> |
| Example | <example of the term> |
| Reference | <reference of definition> |

### 6. 定义
*原文标题：Definitions*

### 7. 抽象 Platform
*原文标题：Abstract Platform*

| Definition | A Software Platform defined by AUTOSAR for the definition of functional level communications independent of Classic / Adaptive / Offboard deployments. |
|---|---|
| Initiator | System Design |
| Further Explanations | An Abstract Platform exists only in the methodological and modeling sense and is not a physical deployable platform. |

In the context of AUTOSAR Classic and AUTOSAR Adaptive functional level communications means VFB level communications.
| Comment | - |
|---|---|
| Example | - |
| Reference | - |

### 8. Acceptance Test Suite

| Definition | A test case description used in the context of Acceptance Testing |
|---|---|
| Initiator | Acceptance Testing |
| Further Explanations | ISO 9646 distinguishes between Abstract Test Suites and Executable Test Suites. For AUTOSAR the earlier relates to the Acceptance Test Specifications, whereas the latter to the test implementations or Acceptance Test Suites. |
| Comment | - |
| Example | - |
| Reference | , Parts 1,2 and 4 |

### 9. Access 控制 Decision
*原文标题：Access Control Decision*

| Definition | The Access Control Decision is a Boolean value indicating if the requested operation is permitted or not. It is based on the identity of the caller and the Access Control Policy |
|---|---|
| Initiator | Security |
| Further Explanations | In the case of Identity and Access Management, the 'caller' is an Adaptive Applications. |
| Comment | - |
| Example | - |
| Reference | - |

### 10. Access 控制 Policy
*原文标题：Access Control Policy*

| Definition | Access Control Policies are bound to the targets of calls (i.e. Service interfaces) and are used to express what Identity Information is necessary to access those interfaces. |
|---|---|
| Initiator | Security |
| Further Explanations | Policies can be provided through Configuration / modeling or by statically pre-programming them into the PDP. |
| Comment | - |
| Example | - |
| Reference | - |

### 11. Adaptability

| Definition | Adaptability is the ability of a system to adjust itself to changed circumstances in its environment in order to continue to provide the intended Functionality. |
|---|---|
| Initiator | Safety |
| Further Explanations | One should distinguish between changes in the environment of the system/vehicle ("run-time adaptability") and changes in the development environment where software Architecture (like AUTOSAR) is used ("design-time predictability"). |
| Comment | - |
| Example | - |
| Reference | * Antonio Carlos Schneider Beck, Carlos Arthur Lang Lisboa, Luigi Carro (eds.), Adaptable Embedded Systems, Springer Science & Business Media, 27 Nov 2012 |

* Twan Basten, Roelof Hamberg, Frans Reckers, Jacques Verriet, Model-Based Design of Adaptive Embedded Systems, Springer Science & Business Media, 15 Mar 2013

### 12. Adaptive Application

| Definition | Software that follows the Adaptive AUTOSAR specifications and therefore can be deployed onto an Adaptive Platform instance. It consists of its implementation, operational data (e.g. map data) and its Meta-data given by the Application Design Model. In order to be deployable on different Adaptive Platforms, it only uses ARA programming interfaces including POSIX profile PSE51 APIs. |
|---|---|
| Initiator | Execution Management |
| Further Explanations | Adaptive Applications are generally more coarse grain than SW-Cs of the Classic Platform. They use exclusively Adaptive Platform APIs, and may offer and use services. They are implemented by one or several executables, byte code or libraries with defined entry points and may comprise multiple parts (e.g. libraries, data files). |
| Comment | The goal of Adaptive Platform is to achieve portability of Adaptive Applications among different implementations of the Adaptive Platform at least on source-code level, potentially also on object-code level. |
| Example | - |
| Reference | - |

### 13. Adaptive Platform Foundation

| Definition | Part of an Adaptive Platform implementation, which provides standardized platform Functionality to Applications via software interfaces (APIs). |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | The Adaptive Platform Foundation includes of core system functionalities such as OS, Execution Manager, Communication Management and Persistency. |
| Comment | The goal of Adaptive Platform is to achieve portability of Adaptive Applications among different implementations of the Adaptive Platform at least on source-code level, potentially also on object-code level. |
| Example | - |
| Reference | - |

### 14. Adaptive Platform 服务
*原文标题：Adaptive Platform Services*

| Definition | Standard platform services that is provided by an application which is part of AUTOSAR platform implementation. |
|---|---|
| Initiator | Communication |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 15. Adaptive Platform Machine 配置
*原文标题：Adaptive Platform Machine Configuration*

| Definition | Configuration model in the AUTOSAR Adaptive Platform that defines the target Configuration content whose scope is local to a specific target Machine. |
|---|---|
| Initiator | WG-MT |
| Further Explanations | The Adaptive Platform Machine Configuration is uploaded with executable code to a target Machine and supports the Integration of Executables onto the machine. |
| Comment | - |
| Example | - |
| Reference | - |

### 16. Application Programming 接口
*原文标题：Application Programming Interface*

| Definition | An Application Programming Interface (API) is the prescribed method of a specific software part by which a programmer writing a program can make requests to that software part. |
|---|---|
| Initiator | WG-MT |
| Further Explanations | - |
| Comment | - |
| Example | (OSEK/VDX Operating System) |
| Reference | - |

### 17. Application 软件组件
*原文标题：Application Software Component*

| Definition | An Application Software Component is a specific Software Component which realizes a defined Functionality on application level and runs on the AUTOSAR infrastructure. It communicates only through the AUTOSAR Runtime Environment (RTE). |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | Application Software Components are located "above" the AUTOSAR Runtime Environment. |
| Comment | - |
| Example | - |
| Reference | - |

### 18. 架构
*原文标题：Architecture*

| Definition | The fundamental organization of a system embodied in its components, their static and dynamic relationships to each other, and to the environment, and the principles guiding its design and evolution. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | - |
| Comment | "Static and dynamic" added to definition of  . |
| Example | - |
| Reference | , |

### 19. Artifact

| Definition | This is a Work Product definition that provides a description and definition for tangible work product types. Artifacts may be composed of other artifacts. At a high level, an artifact is represented as a single conceptual file. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 20. ASIL Decomposition

| Definition | See ISO-26262 () ID 1.7 |
|---|---|
| Initiator | Safety |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | See , ID 1.7 |

### 21. Asserted Property

| Definition | A property or quality of a design entity (e.g. SW component or system) is asserted, if the design entity guarantees that this property or quality is fulfilled. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | A property or quality of a design unit can be asserted by the design unit itself or in combination with another design unit. |
| Comment | - |
| Example | If the worst case Execution Time of a Task (w.r.t. a certain CPU etc.) is asserted to be 3 ms, the execution time of this task will under any circumstances be less than or equal to 3 ms. |
| Reference | Compare Required Property |

### 22. Assessment

| Definition | See ISO-26262 (), ID 1.4 |
|---|---|
| Initiator | Safety |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | See , ID 1.4 |

### 23. Asset

| Definition | An item that has been designed for use in multiple contexts. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | - |
| Comment | - |
| Example | An asset can be design, specifications, source code, documentation, test suits, manual procedures, etc. |

From a security perspective anything that has a value to any of the stakeholders such as critical data (information, software) and critical functions, that could potentially be subject to attacks and possibly, but not necessarily, motivates countermeasures.
| Reference | , |
|---|---|

### 24. Asynchronous Communication

| Definition | Asynchronous communication does not block the sending software entity. |
|---|---|

The sending software entity continues its operation without getting a response from the communication partner(s).
| Initiator | Communication |
|---|---|
| Further Explanations | There could be an acknowledgement by the communication system about the sending of the information. |

A later response to the sending software entity is possible.
| Comment | - |
|---|---|
| Example | - |
| Reference | - |

### 25. Asynchronous 功能
*原文标题：Asynchronous Function*

| Definition | A Function is called asynchronous if the described Functionality is not guaranteed to be completed the moment the Function returns to the caller. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 26. Atomic 软件组件
*原文标题：Atomic Software Component*

| Definition | Non-composed Software-Component. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | An Atomic Software Component might access HW or not, therefore not all Atomic SW-Cs are relocatable. |
| Comment | - |
| Example | Application Software-Component, Complex Driver |
| Reference | - |

### 27. Audit

| Definition | See ISO-26262 (), ID 1.5 |
|---|---|
| Initiator | Safety |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | See , ID 1.5 |

### 28. Authenticity

| Definition | The property that data originated from its purported source. |
|---|---|
| Initiator | Security |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | NIST SP 800-38B under Authenticity |

### 29. Automotive API

| Definition | The Automotive API is an interface that allows data-centric communication with the vehicle. It defines how other systems can access selected vehicle data securely and independently of the in-vehicle representation using a standardized interface across vehicle types and manufacturers. |
|---|---|
| Initiator | Communication |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | See |

### 30. Automotive API Gateway

| Definition | The Automotive API Gateway is the Functional Cluster that offers the Automotive API and can thus connect clients to vehicle internal data. |
|---|---|
| Initiator | Communication |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | See |

### 31. Automotive Safety Integrity Levels

| Definition | See ISO-26262 (), ID 1.7 |
|---|---|
| Initiator | Safety |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | See , ID 1.7 |

### 32. AUTOSAR Adaptive Platform

| Definition | An adaptive computing platform standardized by AUTOSAR. In a narrow term, it refers to its specification. In a broad term, it may refer to an instance of Adaptive Platform implementation. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 33. AUTOSAR Application 接口
*原文标题：AUTOSAR Application Interface*

| Definition | A set of Blueprints which are standardized by AUTOSAR and which can be used for creating AUTOSAR Interfaces of an Adaptive Application. AUTOSAR Interfaces that are derived from Standardized AUTOSAR Blueprints are Standardized AUTOSAR Interfaces. |
|---|---|
| Initiator | Application Interfaces |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference |  |

### 34. AUTOSAR Authoring Tool

| Definition | An AUTOSAR Tool used to create and modify AUTOSAR XML descriptions. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | System Description Editor |
| Reference | - |

### 35. AUTOSAR Blueprint

| Definition | An AUTOSAR Blueprint is a Blueprint for an AUTOSAR element. It also includes that it is specified within the AUTOSAR project which attributes are mandatory to be specified for the blueprint of a specific class of AUTOSAR element types as well as how to derive an AUTOSAR object from that blueprint. |
|---|---|
| Initiator | Application Interfaces |
| Further Explanations | The AUTOSAR meta-model supports the pre-definition of model elements taken as the basis for further modeling. These pre-definitions are called blueprints. |
| Comment | - |
| Example | - |
| Reference |  |

### 36. AUTOSAR Converter Tool

| Definition | An AUTOSAR Tool used to create AUTOSAR XML files by converting information from other AUTOSAR XML files. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | ECU Flattener |
| Reference | - |

### 37. AUTOSAR 定义
*原文标题：AUTOSAR Definition*

| Definition | This is the definition of parameters which can have values. One could say that the parameter values are instances of the definitions. But in the meta-model hierarchy of AUTOSAR, definitions are also instances of the meta-model and therefore considered as a description. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 38. AUTOSAR 接口
*原文标题：AUTOSAR Interface*

| Definition | The AUTOSAR Interface of a software component refers to the collection of all Ports (Port) of that component through which it interacts with other components. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | - |
| Comment | Note that an AUTOSAR Interface is different from a Port Interface. The latter characterizes one specific Port of a component. |
| Example | - |
| Reference | See AUTOSAR Specification of . |

### 39. AUTOSAR Meta-model

| Definition | The AUTOSAR meta-model is a UML2.0 model that defines the language for describing AUTOSAR systems and related artifacts. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | The AUTOSAR XML Schema is derived from the AUTOSAR meta-model. |
| Example | - |
| Reference |  |

### 40. AUTOSAR 建模
*原文标题：AUTOSAR Model*

| Definition | This is an instance of the AUTOSAR Meta-model. The AUTOSAR Model represents aspects suitable to the intended use according to the AUTOSAR methodology. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 41. AUTOSAR Partial 建模
*原文标题：AUTOSAR Partial Model*

| Definition | In AUTOSAR, the possible Partitioning of models is marked in the meta-model by atpSplitable>>. One partial model is represented in an AUTOSAR XML description by one file. The partial model does not need to fulfill all semantic constraints applicable to an AUTOSAR model. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 42. AUTOSAR Processor Tool

| Definition | An AUTOSAR Tool used to create non-AUTOSAR files by processing information from AUTOSAR XML files. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | RTE Generator |
| Reference | - |

### 43. AUTOSAR Runtime for Adaptive Applications

| Definition | A set of standard application interfaces provided by Functional Clusters, which belong to either Adaptive Platform Foundation or Adaptive Platform Services. |
|---|---|
| Initiator | General |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 44. AUTOSAR Run-Time 接口 (ARTI)
*原文标题：AUTOSAR Run-Time Interface (ARTI)*

| Definition | The AUTOSAR Run-Time Interface shall define an interface between build tools and Debugging/Tracing tools. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | The interface shall ease and speed up the Debugging, Tracing and Verification of System behavior as well as round-trip engineering. |
| Comment |  |
| Example | - |
| Reference | AUTOSAR Specification of ARTI () |

### 45. AUTOSAR 服务
*原文标题：AUTOSAR Service*

| Definition | The term Service is used in the layered software architecture to denote the highest layer of the AUTOSAR Software architecture that interacts with the application. The term service is used in the meaning defined by the service-oriented architecture. This meaning has the strongest relation to the usage of the term service on the AUTOSAR Adaptive Platform. |
|---|---|

The term service is also used to describe the handling of diagnostic services, e.g. UDS service ReadDataByIdentifier, for the communication between a diagnostic tester and a diagnostic stack on an (AUTOSAR) Electronic Control Unit (ECU).
| Initiator | Software and Architecture |
|---|---|
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 46. AUTOSAR 软件
*原文标题：AUTOSAR Software*

| Definition | Application Software or Basic/Platform Software developed according to the AUTOSAR Standard. |
|---|---|
| Initiator | - |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 47. AUTOSAR Tool

| Definition | This is a software tool which supports one or more tasks defined as AUTOSAR tasks in the methodology. Depending on the supported tasks, an AUTOSAR tool can act as an AUTOSAR Authoring Tool, an AUTOSAR Converter Tool, an AUTOSAR Processor Tool or as a combination of those. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 48. AUTOSAR XML 描述
*原文标题：AUTOSAR XML description*

| Definition | In AUTOSAR this is a serialized AUTOSAR model. In fact an AUTOSAR XML description is the XML representation of an AUTOSAR Model. The AUTOSAR XML description can consist of several files. Each individual file represents an AUTOSAR Partial Model and must validate successfully against the AUTOSAR XML Schema. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 49. AUTOSAR XML Schema

| Definition | The AUTOSAR XML Schema is an XML language definition for exchanging (AUTOSAR Model) and descriptions. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | The AUTOSAR XML Schema is a W3C XML schema that defines the language for exchanging AUTOSAR models. This Schema is derived from the AUTOSAR Meta-model. |

The AUTOSAR XML Schema defines the AUTOSAR data exchange format.
| Comment | - |
|---|---|
| Example | - |
| Reference | - |

### 50. Availability

| Definition | 1. Availability is the ability of the system to perform a Function A completely according to its specification. |
|---|---|

2. The ratio of the total time the system is performing a function A (according to 1) during a given interval to the length of the interval. Alternative: The probability that the system is performing the function A at a specified time t.

3. In a degraded Mode the system has the ability to perform a subset B of A if full A is not available. In this case, the Functionality B is available.
| Initiator | Safety |
|---|---|
| Further Explanations | see  for more details. |
| Comment | 1. Degraded modes are covered by this definition (see example) |
| Example | 1. Power Steering: if the support Function fails it is not available while the steering as a base function has full availability. 2. From a security perspective availability is an attribute that ensures correct and timely access upon demand by an authorized entity. |
| Reference | See , ID 1.8 |

### 51. 基础软件
*原文标题：Basic Software*

| Definition | The Basic Software (BSW) provides the infrastructural (schematic dependent and schematic independent) functionalities of an Electronic Control Unit. It consists of Integration Code and Standard Software. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | - |
| Comment | - |
| Example | Microcontroller Abstraction Layer (MCAL), AUTOSAR Service, Communication Layer |
| Reference | - |

### 52. 基础软件模块
*原文标题：Basic Software Module*

| Definition | A collection of software files (code and description) that define a certain basic software Functionality present on an Electronic Control Unit. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | Standard Software may be composed of several software modules that are developed independently. A software module may consist of Integration Code and/ or Standard Software. |
| Comment | - |
| Example | A Digital IO Driver, Complex Driver, OS are examples of Basic Software Modules. |
| Reference | - |

### 53. Bit Position

| Definition | In AUTOSAR the bit position N within an I-PDU denotes the bit I, with I = N |
|---|---|

modulo 8, within the byte J, with J = N / 8. The byte J and bit position I is

interpreted in accordance to the definition in ISO 17356-4 (OSEK/VDX Communication).
| Initiator | Communication |
|---|---|
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 54. Blueprint

| Definition | This is a model from which other models can be derived by copy and refinement. Note that in contrast to meta-model resp. types, this process is not an instantiation. |
|---|---|
| Initiator | Methodology and Templates |
| Further Explanations | - |
| Comment | - |
| Example | Standardized Blueprint and AUTOSAR Blueprint. |
| Reference | - |

### 55. Bulk 数据
*原文标题：Bulk Data*

| Definition | "Bulk Data" is a set of data such big in size, that standard mechanisms used to handle smaller data sets become inconvenient. This implies that bulk data in a software system are modeled, stored, accessed and transported by different mechanisms than smaller data sets. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | Bulk data are typically handled by adding a level of abstraction (e.g. files) which separates the containment of the data from the internal structure. |
| Comment | The critical size, above which data must be regarded as bulk data depends on the technical infrastructure (e.g. bus system) and the considered Use Case (transport, storage etc.). |
| Example | Data on a persistent medium which has a capacity of a few kBytes (e.g. EEPROM) can be directly accessed via memory addresses, address offsets can be mapped to symbols of a programming language: No bulk data mechanisms are needed. For media with bigger capacity this becomes inconvenient or even impossible, so that a file system is used: The data are treated as bulk data. |
| Reference | - |

### 56. Bus Mirroring

| Definition | Forwarding information from an internal vehicle bus to an external bus, e.g. the diagnostic Connector. |
|---|---|
| Initiator | Communication |
| Further Explanations | Bus Mirroring is used to make internal buses accessible to external testers such that internal buses can be debugged in case of errors. |
| Comment | Because the external (or intermediary) buses typically do not have sufficient bandwidth to transport all information from an internal bus, filters have to be applied to select the frames that are relevant to the analysis. |
| Example | An Electronic Control Unit does not go to sleep in a vehicle. The engineer wants to check the NM traffic to check for irregular behavior, e.g. concerning partial networking information. |
| Reference | - |

### 57. Bus 唤醒
*原文标题：Bus Wake-Up*

| Definition | A bus wake-up is caused by a specific wake pulse on the bus defined within the specification of the dedicated communication standard (e.g. CAN, LIN, FR). A bus wake-up initiates that the transceiver and controller leave their energy saving Mode and enter normal mode to start bus communication again. |
|---|---|
| Initiator | Communication |
| Further Explanations | - |
| Comment | - |
| Example | - |
| Reference | - |

### 58. Bypassing

| Definition | The experimental incorporation of new Functionality within an ECU image. |
|---|---|
| Initiator | Runtime Environment |
| Further Explanations | Bypassing involves the incorporation of new Functionality or to replace existing functionality to an existing ECU image without requiring that the image be rebuilt. |
| Comment | Bypassing can be either "internal" where the new/ replacement Functionality is present on the ECU image or "external" where an Rapid Prototyping Tool provides the functionality out with the ECU. |
| Example | An RP tool intercepts the output of a bypassed RunnableEntity via the RP Memory Interface and replaces the value with the bypass result. Subsequent RunnableEntitys then process the bypass value rather than the original result. |
| Reference | - |

### 59. Calibration

| Definition | Calibration is the adjustment of parameters of Software Components realizing the control functionality (namely parameters of AUTOSAR SW-Cs, ECU abstraction or Complex Driver. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | Only those software modules can be calibrated, which are above RTE and ECU Abstraction and CDD. Calibration is always done at post-build time. Used techniques to set Calibration Data include end-of-line programming, garage programming and adaptive calibration (e.g. in the case of anti-pinch protection for power window). |
| Comment | - |
| Example | The Calibration of the engine control will take into account the production differences of the individual motor this System will control. |
| Reference | - |

### 60. Call Point

| Definition | A point in a Software Component where the SWC enforce an execution entity (Entry Point) in another SWC. |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | - |
| Comment | - |
| Example | Request Service |

Send Information
| Reference | - |
|---|---|

### 61. Callback

| Definition | Functionality that is defined by an AUTOSAR module so that lower-level modules (i.e. lower in the Layered Software Architecture) can provide Notification as required (e.g. when certain events occur or asynchronous processing completes). |
|---|---|
| Initiator | Software and Architecture |
| Further Explanations | In AUTOSAR, modules usually provide a register mechanism for callback functions which is set through Configuration. A module provides callbacks so that other modules can initiate its processing while the module calls Callbacks to execute functionality that could not be specified by AUTOSAR, i.e. Integration Code. |
| Comment | - |
| Example | (from the viewpoint of a particular SWS): |

The module being specified (Msws) should be informed about an Event in another module (Mexternal). In this example, Msws calls Mexternal to perform some processing and can only resume when Mexternal completes. Upon completion, Mexternal calls Msws's Callback Function. That is, the called module (Mexternal) CALLS the calling module (Msws) BACK when complete ==> a Callback.
| Reference | - |
|---|---|

### 其余 297 章（内容从略，见纯文本全文）

62. Callout
63. CAN XL
64. Cascaded Switch
65. Cascading Failure
66. Category 1 Interrupt
67. Category 2 Interrupt
68. Causality of Transmission
69. Classic Platform
70. Client
71. Client-Server Communication
72. Client-Server 接口
73. Cluster Signal
74. 代码 Generator
75. 代码 Variant Coding
76. Common Cause Failure
77. Communication Attribute
78. Complex 驱动
79. Composition
80. Compositionality
81. Conditioned Signal
82. Confidentiality
83. 配置
84. Confirmation
85. Connector
86. 控制 Flow
87. Coordinate
88. 数据
89. 数据 Element
90. 数据流
91. 数据 Variant Coding
92. Deadline
93. Debugging
94. Dependability
95. Dependent Failure
96. 诊断 Coverage
97. 诊断 Event
98. Diversity
99. Dynamic PDU
100. Dynamic Routing
101. E2E Profile
102. E2E Protection Alive Counter
103. E2E Protection Sequence Counter
104. ECU 抽象 Layer
105. ECU 配置
106. ECU 配置描述
107. ECU HW
108. ECU Instance
109. Electrical Signal
110. Electronic 控制 Unit (ECU)
111. Empty 功能
112. Entry Point
113. 错误
114. 错误检测 Rate
115. Ethernet Switch Port Groups
116. Event
117. Event Message (SOME/IP)
118. Executable
119. Executable Entity Cluster
120. Execution Order Constraint
121. Execution Time
122. Exit Point
123. External Port
124. Fail-operational
125. Fail-safe
126. Fail-silent
127. Failure 模式
128. Failure
129. Failure Rate
130. Fault
131. Fault 检测
132. Fault Reaction
133. Fault Reaction Time
134. Fault Tolerance
135. Fault Tolerant Time Interval
136. Feature
137. Firewall
138. Flag
139. FlexRay
140. Foundation
141. Frame
142. Frame PDU
143. Freedom from Interference
144. Freshness
145. 功能
146. 功能性 Cluster
147. 功能性网络
148. 功能性 Safety Concept
149. 功能性 Safety Requirement
150. 功能性 Unit
151. Functionality
152. Gateway
153. Gateway ECU
154. Graceful Degradation
155. Hardware 抽象 Layer
156. Hardware Connection
157. Hardware Element
158. Hardware Interrupt
159. Hardware Port
160. Health Indicator
161. Hook
162. Host ECU
163. Host Port
164. Hypervisor
165. Identity and Access 管理 (IAM)
166. Identity Information
167. Implementation Conformance Class 1 (ICC1)
168. Implementation Conformance Class 2 (ICC2)
169. Implementation Conformance Class 3 (ICC3)
170. Independence
171. Independent Failures
172. Indication
173. 集成
174. 集成代码
175. Integrity
176. Integrity Check Value
177. Inter-Integrated Circuit I2C
178. Intermediate PNC Coordinator
179. Internal Port
180. Interrupt Frame
181. Interrupt Handler
182. Interrupt 服务 Routine
183. Interrupt Vector Table
184. Interrupt
185. Intrusion 检测系统
186. Invalid Flag
187. Invalid Value of Signal
188. I-PDU
189. Life Cycle
190. LIN Bus Idle
191. Link 状态 Accumulation
192. Link Time 配置
193. Logical Execution Time (LET)
194. 日志与追踪
195. Logging
196. Machine
197. 清单
198. Mappable Element
199. 映射
200. Master Switch
201. MCAL Signal
202. Meta-data
203. MetaDataItem
204. Microcontroller
205. Microcontroller 抽象 Layer
206. Middleware
207. Minimum Send Interval
208. Mistake
209. 模式
210. Multimedia Stream
211. Multiplexed PDU
212. 网络
213. 网络接口
214. NM Coordination Cluster
215. NM Coordinator
216. Non-repudiation
217. 通知
218. Onboard Security Event
219. OS Application
220. OS Event
221. Partitioning
222. 协议控制 Information
223. 协议数据 Unit (PDU)
224. PDU Meta-Data
225. PDU Timeout
226. Performance
227. Peripheral Hardware
228. Personalization
229. Plausibility
230. PNC Leaf Node
231. PNC Request Bit Vector
232. PN 关机 message
233. Policy Decision Point (PDP)
234. Policy Enforcement Point (PEP)
235. Port
236. Port 接口
237. Post-build Time 配置
238. Post-build Hooking
239. Pre-build Hooking
240. Pre-Compile Time 配置
241. Predictabiliy
242. Pretended Networking
243. Private 接口
244. Probability of Failure
245. Procedure Call
246. Process
247. Processed 清单
248. Profiling
249. Proven In Use Argument
250. Provide Port
251. Rapid Prototyping
252. Rapid Prototyping 存储接口
253. Rapid Prototyping Tool
254. Rate Conversion
255. Raw 数据 Stream
256. Recovery
257. Redundancy
258. Reentrancy
259. Reliability
260. Relocatability
261. Require Port
262. Required Property
263. Residual 错误 Rate
264. Resource
265. Resource-Management
266. Response Time
267. Risk
268. Robustness
269. RTE Event
270. Runnable Entity
271. SAE J1939
272. Safe 状态
273. Safety
274. Safety Analysis
275. Safety Case
276. Safety Goal
277. Safety Measure
278. Safety Mechanism
279. Safety 协议
280. Sample Application
281. Scalability
282. Scheduler
283. 服务数据 Unit
284. Security
285. Secure Channel
286. Security Event
287. Sender-Receiver Communication
288. Sender-Receiver 接口
289. Sensor-Actuator SW-Component
290. Server
291. 服务
292. 服务 Discovery
293. 服务 Instance
294. 服务接口
295. Service-Oriented Communication
296. 服务 Port
297. 服务 Proxy
298. 服务 Skeleton
299. 服务 Layer
300. ShortName-path
301. ShortName-path (relative)
302. ShortName-path (absolute)
303. Signal 服务 Translation
304. Slave Switch
305. 软件 Cluster (Adaptive Platform)
306. 软件 Cluster (Classic Platform)
307. 软件组件
308. 软件组件接口
309. 软件配置
310. 软件 Interrupt
311. 软件 Package
312. 软件 Platform
313. 软件 Signal
314. 软件 Unit
315. Special Periphery Access
316. Standard Periphery Access
317. Standard 软件
318. Standardized AUTOSAR Blueprint
319. Standardized AUTOSAR 接口
320. Standardized Blueprint
321. Standardized 接口
322. Static 配置
323. 同步 Points
324. 同步
325. Synchronous Communication
326. Synchronous 功能
327. 系统
328. 系统 Constraint
329. 系统 Health Monitor
330. 系统 Signal
331. Systematic Fault
332. Task
333. Technical Signal
334. Timed Communication
335. Timeout
336. Top-level PNC Coordinator
337. 追踪
338. 可信平台
339. Uplink Port
340. Use Case
341. 校验
342. Variability
343. Variant
344. Variant Coding
345. Variation Binding
346. Variation Binding Time
347. Variation Point
348. Vehicle 状态管理器
349. Vehicle Variant
350. Vendor ID
351. Verification
352. VFB 视图
353. Virtual 功能性 Bus
354. Virtual 集成
355. Virtualization
356. 唤醒 and 休眠 on Dataline
357. Worst Case Execution Time
358. Worst Case Response Time
