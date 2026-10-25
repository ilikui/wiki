# Diagnostic Extract Template (`DiagnosticExtractTemplate`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 673 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TPS_DiagnosticExtractTemplate_673\AUTOSAR_CP_TPS_DiagnosticExtractTemplate.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TPS_DiagnosticExtractTemplate_673\AUTOSAR_CP_TPS_DiagnosticExtractTemplate.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TPS_DiagnosticExtractTemplate_673\zzgen\CP_TPS_DiagnosticExtractTemplate.complete.txt`

## 文档简介

The meta-model for the diagnostic services according to AUTOSAR, to a large degree, takes over aspects of the description of diagnostic services according to the definition of Unified Diagnostic Services (UDS) as of .

## 模块依赖

With respect to development processes, the DiagnosticExtract format also enables more independence when defining requirements on diagnostic functionality than possible with EcuC parameters. The approach of "decentralized configuration" is met in the DiagnosticExtract template in mainly two ways described in the following sub-chapters.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. 概述
*原文标题：Overview*

The distributed nature of an AUTOSAR ECU development requires an optimized capturing of information. In particular, diagnostic information (i.e. DEM and DCM configuration) shall be captured only once by the person with the best knowledge and therefore being able to take responsibility better than one centralized individual.

In the configuration approach before the advent of the DiagnosticExtract, the Basic Software Modules DCM and DEM are entirely configured centrally.

During integration, some ApplicationSwComponentTypes above the RTE  (Application Software) introduce PortPrototypes to be connected to the ServiceSwComponentTypes that represent the service-related basic software modules, see .

Additionally, ApplicationSwComponentTypes express needs which shall be fulfilled by the ServiceSwComponentTypes.

The market shows a high demand for transferring diagnostic requirements of the OEM-specific configuration process to their tier-1 suppliers.

In the past, due to the absence of integral options, many file formats like ODX or EcuC (see ) are often used. But neither ODX nor EcuC is well suited to transfer this information.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. OEM

The OEM or requester of diagnostic data uses the DiagnosticExtract to define the diagnostic interfaces of one or multiple ECUs. It may also define some InternalBehaviors as requirements for the ECU-Supplier or Application Developer

* Defines the values of the DTCs
* Defines the UDS services and sub-services supported by the ECUs
* Defines the required events needed by a specific composition implemented by an Application Developer

NOTE: This list represents an example; this document does not define a specific ownership of each element.

In the first use case, the DiagnosticExtract is used to exchange information which is transformed into the EcuC (M2 to M1 mapping, see also  and ).

Second, the OEM uses the DiagnosticExtract to document requirements to be implemented by a supplier. These requirements are expressed in textual language and can not be mapped directly to any EcuC parameters (no M2 to M1 mapping possible).

### 4. Application Developer

The Application Developers implement their software-components with the corresponding software-component description. The role "Application Developer" can be assumed by both an OEM and a supplier. In other words, both OEM and supplier may contribute application software to a given ECU.

With the introduction of this concept, the Application Developer has the possibility to provide diagnostic information relevant to the software-components as part of the DiagnosticExtract.

The Application Developer may also receive some input as requirement from the OEM within the DiagnosticExtract in textual form as for example:

NOTE: Only mentioned as as example content. This document does not define a specific ownership of each element.

In the first use case, the Application Developer defines the parameters of a specific ReadDataByIdentifier, i.e. the content of the diagnostic request but not the DID itself. The DID of this command will usually be defined by the OEM.

Secondly, the software-component events including information like Debouncing and OperationCycle may be defined by the Application Developer.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. ECU-Supplier

The ECU-Supplier or integrator receives one or several DiagnosticExtract files from the OEM and from multiple Application Developers. The main goal of the Integrator is to integrate all delivered DiagnosticExtract and to generate the EcuC from it.

Since this concept does not define a specific ownership for each element like DIDs, parameters of a UDS service, Events, Sessions, etc. the integrator has to ensure that the complete information is still valid after merging it.

* Mapping of DTCs to Events
* Merge of Events
* Mapping of services

Some DTCs may already be mapped to events - especially in cases where both come from the same party. But if the DTCs are defined by the OEM and the software implemented by other supplier acting as an Application Developer the integrator has to ensure that both are mapped together.

In some cases, an Event may be defined multiple times. An OEM defines the Events which shall be implemented by an Application Developer. A Supplier implements a software-component which will be used in multiple projects and which also detects this type of error and also defines this same event.

Both events may have different naming but the same meaning.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Exchanging of Files

During an ECU development project, the three main roles (OEM, Application Developer, ECU Integrator) exchange DiagnosticExtract files. The timing and frequency of exchanges and the content in each of these exchanged files is highly dependent on the individual project setup and situation.

Therefore, the DiagnosticExtract format has been designed to allow for gradual enrichment of definitions contributed at largely arbitrary points in time by the different roles in order to meet the needs of "Decentralized Configuration".

For any exchange path between any two roles, the same file format based on the DiagnosticExtract template is used. It is then up to a company specific process and tooling to merge the collected DiagnosticExtract files while resolving conflicts (contradictions, redundancies etc.).

As final result, a consistent and complete DiagnosticExtract file is available which is input to derivation of the configuration for the diagnostic modules of the basic software.

Even after the DiagnosticExtract has been fully integrated and is ready to go for deriving the configuration of the diagnostic stack on EcuC, level it is still foreseen to feed it back to e.g. an OEM.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Relationship to software-component 服务 Needs
*原文标题：Relationship to software-component Service Needs*

Before the introduction of the Diagnostic Extract, Service Needs were used to describe diagnostic requirements on software-component level. These configuration requirements are referenced to the related basic software module DCM or OEM in order to provide the corresponding configuration on basic software level.

The usage of ServiceNeeds is only possible on AtomicSwComponentType level whereas the assignment of diagnostic demands needs to be possible on the level of CompositionSwComponentTypes.

The software-component Service Needs within the software-component Description are still to be used along with the DiagnosticExtract in order to annotate the software-component ports which are relevant for further mapping and handling as defined by the DiagnosticExtract.

From software-component developer's perspective, the DiagnosticExtract is therefore used partially as substitution and partially as extension of the software-component Service Needs. The reasoning for "substitution" is the avoidance of redundant diagnostic definitions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Recommendation and Hints

Multiple parties may have different understanding of which parts shall be provided by each one. There is no defined rule to indicate who is responsible for each part. At the end, it is the ECU-Supplier in his role as integrator who has to ensure that all mappings are done and that the ECU runs as expected by the OEM.

If the OEM does not have own diagnostic requirements, the ECU-Supplier has to provide the complete DiagnosticExtract. In this case, the OEM may only receive the DiagnosticExtract as part of the delivery. The process itself how the parties work with this format is not defined within this specification.

 shows a recommended way how to handle the DiagnosticExtract between the different parties. In use case 1, some software-components are implemented by the OEM (or by a Supplier of the OEM) and the first merging of DiagnosticExtract data occurs at the OEM.

In use case 2, the OEM provides the diagnostic requirements via DiagnosticExtract and multiple Application Developers provide information related to their implementation, the merging is performed completely by the ECU-Supplier.

Also, a combination of use cases 1 and 2 is allowed.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 限制
*原文标题：Limitations*

This release of the DiagnosticExtract template focuses on defining diagnostic requirements a single ECU only. For the time being, distributed diagnostic functionality for a system or partial system consisting of multiple ECUs cannot be defined using the DiagnosticExtract template.

In future releases, the DiagnosticExtract template may be extended to also cover configuration of distributed diagnostic functionality. Similar to the description of communication dependencies in the System Description, it may then be possible to describe diagnostic demands on system level to derive the diagnostic demands for a specific ECU from this description.

### 10. 诊断配置 on classic and adaptive Platform的建模
*原文标题：Modeling of Diagnostic Configuration on classic and adaptive Platform*

The configuration of the "external behavior" of the AUTOSAR diagnostic stack is done by means of the so-called DiagnosticExtract. The DiagnosticExtract in general extends to both the AUTOSAR classic platform and the AUTOSAR adaptive platform.

In particular, some parts of the DiagnosticExtract apply only for the AUTOSAR classic platform, some parts are shared between the AUTOSAR classic platform and the AUTOSAR adaptive platform, and some parts apply only for the AUTOSAR adaptive platform.

The parts that are specific to the AUTOSAR classic platform, and the parts that apply to both the AUTOSAR classic platform and the AUTOSAR adaptive platform are documented in the deliverable "TPS Diagnostic Extract Template", i.e. this document.

For technical reasons, the parts that apply to the AUTOSAR adaptive platform cannot be included in this document, "TPS Diagnostic Extract Template" and are consequently described in the document .

The parts about the configuration of Diagnostic Management, as described in "TPS Manifest Specification", fit seamlessly into the same modeling framework that is used on the AUTOSAR classic platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 范围
*原文标题：Scope*

This document describes the formal description of contributions to the diagnostic configuration.

On the level of meta-modeling, the content described in this document conceptually relates to the definition of SwcServiceDependency or BswServiceDependency, as defined by the  or .

Further relations exist to the specification of communication in AUTOSAR systems as described by the .

Further relations exist to the specification of the  as well as to the .

Please note that the configuration of service-oriented vehicle diagnostics (SOVD) is only supported on the AUTOSAR adaptive platform. For more details, please refer to .

The relation of the DiagnosticExtract to the rest of the AUTOSAR meta-model is sketched in .

### 12. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. About Tables

There is a number of tables in this document that describe the applicability or multiplicity of model elements. These tables contain empty cells, which represent a "not applicable" meaning. Model elements that correspond to an empty cell shall not exist in the context described by the respective table cell.

If the value of a table cell shall indicate that that either the existence or multiplicity of the represented model element shall be ignored anyway, the table cell gets the content "d/c" for "don't care". This means that if the respective model element exists, it shall be ignored in the downstream processing of the model.

### 14. Use Cases

### 15. Use cases for 诊断数据 exchange
*原文标题：Use cases for diagnostic data exchange*

The basic usage of the DiagnosticExtract is the exchange of diagnostic data between the different parties involved in the diagnostic development process to allow the configuration of the DCM and the DEM and to provide the description of corresponding application interfaces to implement diagnostic services and fault handling.

### 16. 配置 of DCM
*原文标题：Configuration of DCM*

As depicted in , the configuration of the DCM includes the setup of diagnostic services and the assignment of data objects provided by one or more software components (e.g. Composition 1, Composition 2).

### 17. 配置 of DEM
*原文标题：Configuration of DEM*

As sketched in , the configuration of the DEM includes fault memory data (DTCs and environmental data) and the assignment of corresponding data by one or more SwComponentTypes (e.g. Composition 1, Composition 2).

As already explained, the diagnostic development process is distributed among different parties. On the one hand side, the OEM needs to describe the general requirements for a diagnostic system that have to be implemented by an ECU:

# Depending on the diagnostic system, the OEM can provide a completely or partly-filled DiagnosticExtract including the description of PortInterfaces:

  * Integrator/SWC developer (OEM or Tier 1) is responsible for the completion (detailing of predefined diagnostic content).
  * Integrator/SWC developer (OEM or Tier 1) is responsible for the specific configuration of diagnostic content defined by himself.
  * New integration of updated Diagnostic descriptions by integrator.
# Return of completely or partly-filled DiagnosticExtract to OEM for:

  * Documentation
  * ECU testing
  * Integration reviews
  * Failure correction

Use case examples:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 配置 of the Fim
*原文标题：Configuration of the Fim*

### 19. 建模功能 Inhibition
*原文标题：Model Function Inhibition*

A typical use case for the FIM is the definition of "control mechanisms for software components and the functionality therein", see . By this means, the FIM can significantly modify the behavior of the application software at run-time, e.g. in response to a sensor failure.

The conditions for deciding about inhibitions are derived from diagnostic events. If a diagnostic event that relates to a hardware sensor is reported as "failed" then the FIM can degrade the behavior of the application software to no longer rely on the sensor information that has become unreliable.

Consequently, the DiagnosticExtract needs to provide the basic mechanisms to create the definition of such inhibition rules that relate pieces of the application software (which are visible to the DiagnosticExtract as formally defined SwComponentTypes) to the definition of diagnostic events.

### 20. 建模 Fim 配置 before Dem exists
*原文标题：Model Fim configuration before Dem exists*

The configuration of the FIM module and the DEM module are closely intertwined because the FIM uses the diagnostic events defined in the context of the DEM. This means that the FIM can only be configured if the DEM exists as a basis for creating this configuration.

Clearly, this is contradicting the approach of a "decentralized configuration" of the diagnostics stack's behavior. It may happen that the configuration of the FIM and the configuration of the DEM by means of the DiagnosticExtract are distributed over different organizations within a concrete vehicle project.

However, the organizations would not be able to make progress independently of each other because the work product of one is the immediate prerequisite that the other organization can start working.

Therefore, one important use case for the DiagnosticExtract is the ability to configure the FIM module in the scope of the DiagnosticExtract without the immediate need to already have access to the corresponding configuration of the DEM module.

In other words, a typical work-flow could look like this:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. J1939 诊断的配置
*原文标题：Configuration of J1939 Diagnostics*

Within the System Extract, J1939 diagnostic is configured on a service level by the diagnostic messages DM01..DM60, which will be handled by J1939 DCM.

The diagnostic content which is provided by the diagnostic messages is defined within the DiagnosticExtract separately for each J1939 function, and contributes to the configuration of the J1939 DCM as well as the parts of the DEM configuration that are relevant for J1939.

J1939 functions (known as Controller Application or CA within the ) are identified by a NAME and an address (assigned at run-time) and are represented in AUTOSAR by the J1939NmNode.

### 22. J1939 诊断 Aspects independent of the Deployment的建模
*原文标题：Modeling of J1939 Diagnostic Aspects independent of the Deployment*

The main use case for modeling the J1939 in the DiagnosticExtract is the possibility to create the diagnostic configuration relevant for a J1939 function, even if the underlying communication architecture is not (fully) defined and if no vehicle model (represented by a System) exists.

The J1939 diagnostics modeling is done during functional development before the System exists where the functions are deployed. This approach represents a case of decentralized configuration of the diagnostic stack.

### 23. J1939 诊断 Content modeled in the 诊断 Extract
*原文标题：J1939 Diagnostic Content modeled in the Diagnostic Extract*

The diagnostic content for J1939 consists of the following topics:

* The Suspect Parameter Number is used throughout the J1939 specification to identify measured values (physical signals) and commands, the communication signals to which these are mapped, and diagnostic events caused by these.
* Communication signals that are relevant for diagnostics are specifically annotated, and reported by the J1939 diagnostics.
* J1939 DTCs consist of an SPN, identifying the source of the diagnostic event, and an FMI (Failure Mode Indicator), identifying the problem with this source, like a boundary exception. In addition, an event counter is contained in the DTC.
* contain measured values captured at the time a diagnostic event is reported as failed. J1939 supports two different kinds of freeze frames:

  * standardized freeze frames (reported by DM04), which have a legislated layout
  * expanded freeze frames (reported by DM24/DM25), which have a configurable layout

### 24. Conceptual Background

has already given an overview on the intended way of using the DiagnosticExtract template and files. This chapter gives further background information on the overall concept behind the new format to create a better basis for understanding of the meta-model described in .

### 25. relevant 诊断 Elements的定义
*原文标题：Definition of relevant Diagnostic Elements*

ECU configuration is not suitable to be exchanged between partners in an ECU development project
⌈
The ECU configuration (EcuC) parameters defined by the AUTOSAR Software Specification (SWS) documents for Dem and Dcm are not suitable to be exchanged between partners in an ECU development project.

Besides proprietary ways of using the EcuC format, the main reason for EcuC parameters being inappropriate to be exchanged is their closeness to implementation (e.g. parameter on buffer sizes).
⌋

 Differences in the development processes for diagnostics at automotive OEMs and ECU suppliers
⌈
Additionally, there are differences in the development processes for diagnostics at automotive OEMs and ECU suppliers resulting in different views on relevant diagnostic properties to be exchanged and different ways of deriving and defining them as diagnostic requirements.
⌋

Therefore, the identification of all diagnostic properties and requirements as superset from the companies' views forms the basis on which the DiagnosticExtract template has been defined.

### 26. 抽象 from EcuC Level
*原文标题：Abstraction from EcuC Level*

The DiagnosticExtract template does not only focus on relevant diagnostic properties and requirements but also - if required - lift them onto an appropriate abstraction level to make them meaningfully exchangeable (e.g. debouncing requirements that abstract from mapping on a concrete ECU).

However, for many EcuC parameters identified as relevant, an abstraction is not useful or not required and thus, these parameters are mapped 1:1 to equivalent elements of the DiagnosticExtract template.

 Values contained in DiagnosticExtract shall be taken for the derivation of basic software modules
⌈
The values specified in a given DiagnosticExtract shall be taken for the derivation of basic software modules in the diagnostic stack.

This means that parameter values in the EcuC are created that could be subject to constraints, e.g. a valid interval.
⌋

Therefore, model elements in the DiagnosticExtract shall be carefully checked against the constraints formulated in EcuC. However, this document does not contain specific constraints on a detailed basis.

### 27. Independence of 定义
*原文标题：Independence of Definition*

With respect to development processes, the DiagnosticExtract format also enables more independence when defining requirements on diagnostic functionality than possible with EcuC parameters. The approach of "decentralized configuration" is met in the DiagnosticExtract template in mainly two ways described in the following sub-chapters.

### 28. Use of <<atpSplitable>> enabling separation of elements over several physical files

Most elements of the DiagnosticExtract template can be split over several physical files. Therefore, parts of these elements (e.g. certain attributes) can be defined by, for example, an OEM and other parts of these elements by, for example, an ECU supplier.

### 29. Use of self-contained 映射 elements
*原文标题：Use of self-contained mapping elements*

Many diagnostic requirements are established by mappings between diagnostic elements (e.g., DTC to DemEvent mapping). However, the "decentralized configuration" approach requires that these mappings can be flexibly defined at almost any time within the ECU development process and by any of the involved companies respectively roles.

Therefore, the DiagnosticExtract template defines self-contained mapping elements that have references to two (or potentially more) diagnostic elements to define a mapping.

The self-contained mapping elements can be created any time after the diagnostic elements to be mapped together have been defined. Alternatively, a mapping element can be created after only one diagnostic element has been defined indicating the need to make the mapping complete by defining the additional diagnostic element(s) to map to.

### 30. 诊断 Resources
*原文标题：Diagnostic Resources*

### 31. 概述
*原文标题：Overview*

This chapter contains a description of diagnostic resources that are defined to describe the external behavior of the diagnostic stack. The definition of these resources (e.g. diagnostic services, diagnostic events) is done independently of their usage in the context of either other diagnostic resources or the application software.

The description of the modeling of diagnostic resources can be roughly divided into five sections

* A common section that contains meta-classes shared between the description of the diagnostic services (that roughly corresponds to the Dcm) and the diagnostic event handling (that roughly corresponds to the Dem), see .
* A section dedicated to the configuration of the diagnostic services, see .
* A section dedicated to the configuration of the diagnostic event handling, see .
* A section dedicated to the configuration of the functional inhibition from the diagnostics point of view, see .
* A section dedicated to the configuration of the diagnostics on J1939, see .

Following the descriptions in . The modeling of the DiagnosticExtract supports the application of variant handling of dedicated model elements.

### 32. Common Meta 建模 Elements
*原文标题：Common Meta Model Elements*

### 33. 概述
*原文标题：Overview*

This chapter highlights the formal modeling of some of the central parts of AUTOSAR diagnostics when it comes to configuration. There are some concepts widely used that need to be reflected in the meta-model.

The purpose of the DiagnosticCommonElement is to provide a common reference target for all kinds of diagnostic elements. This aspect is explained in more detail in .

The purpose of a Data Identifier (DID) is to associate a unique numerical value to a piece of data related to diagnostics. From the modeling point of view, this means that the modeling of the Data Identifier needs to provide an attribute that represents the numeric value as well as a relation to a Data Element representing a set of diagnostic piece of data.

### 34. 诊断数据 Identifier
*原文标题：Diagnostic Data Identifier*

AUTOSAR diagnostics supports two kinds of data identifiers
⌈
In AUTOSAR, two kinds of data identifiers are supported:

* The DiagnosticDataIdentifier inherits from DiagnosticAbstractDataIdentifier and is used to define data identifiers fully known at configuration time. A DiagnosticDataIdentifier shall have at least 1 dataElement.
* The DiagnosticDynamicDataIdentifier inherits from DiagnosticAbstractDataIdentifier and is used to define data identifiers fully known only at run time. Consequently, there is no formal means to define dataElement at configuration time.
⌋

 Existence of DiagnosticDataIdentifier.dataElement
  Imposition time: AP: `IT_DiagDes`, CP: `IT_DiagDes`
⌈
For each DiagnosticDataIdentifier, the aggregation of DiagnosticParameter in the role dataElement shall exist at least once.
⌋

| Class | DiagnosticDataIdentifier | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to model a diagnostic data identifier (DID) that is fully specified regarding the payload at configuration-time. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 诊断 Parameter
*原文标题：Diagnostic Parameter*

### 36. 概述
*原文标题：Overview*

Role of meta-class DiagnosticParameter
⌈
The role of the DiagnosticParameter is to allocate a well-defined (i.e. start, length, content) slot in a diagnostic telegram, represented e.g. by a DiagnosticDataIdentifier or DiagnosticRoutineSubfunction.
⌋

To facilitate the modeling of DiagnosticParameter, an abstract meta-class named DiagnosticAbstractParameter is defined to allow for making statements (e.g. , , and ) about all its sub-classes uniformly instead of clarifying model semantics for each sub-class separately.

 Semantics of meta-class DiagnosticAbstractParameter
⌈
Meta-class DiagnosticAbstractParameter has been defined as a vessel to define attributes that are equally relevant for the sub-classes DiagnosticParameter and DiagnosticParameterElement.
⌋

The modeling approach for the definition of a DiagnosticParameter is reflected in .

| Class | DiagnosticParameter | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to describe information relevant for the execution of a specific diagnostic service, i.e. it can be taken to parameterize the service. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Size of a 诊断 Parameter
*原文标题：Size of a Diagnostic Parameter*

Size of a DiagnosticAbstractParameter
⌈
The size of the slot can be described in two mutually exclusive ways:

* if the aggregation in the role DiagnosticAbstractParameter.dataElement exists, then the size of the slot is defined by the value of the attribute DiagnosticAbstractParameter.dataElement.swDataDefProps.baseType.baseTypeSize. The unit of attribute baseTypeSize is bit.
* if the aggregation DiagnosticAbstractParameter.dataElement does not exist, then the size of the slot is defined by the value of the attribute DiagnosticAbstractParameter.parameterSize. The unit of attribute parameterSize is bit.
⌋

 Semantics of attribute DiagnosticAbstractParameter.parameterSize
⌈
The attribute DiagnosticAbstractParameter.parameterSize can be used to indicate the size of the current DiagnosticAbstractParameter in the unit bits.

This information is relevant if the following DiagnosticAbstractParameter (or the end of the telegram) is not placed directly adjacent to the current DiagnosticAbstractParameter, i.e. gaps exist between two adjacent DiagnosticAbstractParameters.
⌋

### 其余 253 章（内容从略，见纯文本全文）

38. Start Position of a 诊断 Parameter
39. Content of a 诊断 Parameter
40. 诊断 Parameter as Reference Target
41. 诊断数据 Element
42. Usage of SwDataDefProps
43. 定义 of Arrays on the level of DiagnosticDataElement
44. 定义 of textual Strings
45. Textual Documentation
46. 诊断 Contribution
47. 诊断协议
48. Implications on the 工作流 to create a 诊断 Extract
49. 诊断 Common Properties
50. 诊断服务
51. 简介
52. 诊断服务 Instance vs. 诊断服务 Class
53. 诊断 Access Permission
54. 诊断 Session
55. 诊断 Security Level
56. 诊断 Authentication
57. 诊断 Environmental Condition
58. Environmental Condition Formula
59. Atomic Conditions
60. 数据 Condition to DID
61. 数据 Condition to 数据 Element owned by Application
62. 模式 Condition
63. 诊断服务 supported by AUTOSAR
64. SessionControl
65. SecurityAccess
66. Authentication
67. EcuReset
68. CommunicationControl
69. ControlDTCSetting
70. DataByIdentifier
71. IOControl
72. RoutineControl
73. DynamicallyDefineDataIdentifier
74. ReadDataByPeriodicIdentifier
75. ResponseOnEvent
76. ReadDTCInformation
77. ClearDiagnosticInformation
78. 存储服务
79. RequestFileTransfer
80. OBD 诊断服务 supported by AUTOSAR
81. OBD 模式 0x01 (RequestCurrentPowertrainDiagnosticData)
82. OBD 模式 0x02 (RequestPowertrainFreezeFrameData)
83. OBD 模式 0x03 / 0x07 (RequestEmissionRelatedDiagnosticTroubleCodes)
84. OBD 模式 0x04 (ClearResetEmissionRelatedDiagnosticInformation)
85. OBD 模式 0x06 (RequestOnBoardMonitoringTestResults)
86. OBD 模式 0x08 (RequestControlOfOnBoardDevice)
87. OBD 模式 0x09 (RequestVehicleInformation)
88. OBD 模式 0x0A (RequestEmissionRelatedDiagnosticTroubleCodesPermanentStatus)
89. UDS 诊断服务 for supporting WWH-OBD
90. 诊断 Event 处理
91. 简介
92. 诊断 Event
93. 概述
94. Textual 描述
95. Associated Event Identification
96. 诊断 Trouble 代码
97. 诊断存储 Destination
98. 诊断 Extended 数据 Record
99. 诊断 Freeze Frame
100. 诊断 Condition
101. 诊断 Debouncing
102. 诊断 Condition Group
103. 诊断 Operation Cycle
104. 诊断 Aging
105. 诊断 Indicator
106. 诊断 Test Result
107. OBD-related aspects of Dem 配置
108. Dem 配置 for OBD-II
109. Dem 配置 for WWH-OBD
110. 功能性 Inhibition
111. 简介
112. Alias Events
113. 功能 Identifier
114. 诊断 on J1939
115. 简介
116. Suspect Parameter Number
117. Dem-related 建模
118. 诊断映射
119. 简介
120. 诊断服务的映射
121. 诊断服务数据映射
122. 诊断服务数据映射 for OBD
123. 诊断服务软件映射
124. 诊断 Secure Coding
125. 诊断 Authentication Transmit Certificate 映射
126. Event-related 诊断映射
127. DiagnosticEvent to DtcUds 映射
128. DiagnosticEvent to DiagnosticOperationCycle 映射
129. DiagnosticEvent to DebounceAlgorithm 映射
130. DiagnosticEvent to EnableConditionGroup 映射
131. DiagnosticEvent to StorageConditionGroup 映射
132. DiagnosticEvent to Port 映射
133. DiagnosticOperationCycle to Port 映射
134. DiagnosticEnableCondition to Port 映射
135. DiagnosticStorageCondition to Port 映射
136. Extended 数据 Record 映射
137. Extended 数据 Record 数据 Provider 映射
138. Extended 数据 Record Sender Port 映射
139. Extended 数据 Record ServerPort 映射
140. Master to Slave Event 映射
141. 诊断 Event to Security Event 映射
142. 诊断 Event to ISignalPort 映射
143. 功能 Inhibition的映射
144. 映射 between Inhibition Source and 诊断 Event
145. Alias Event 映射
146. 功能 Identifiers to interested software-components的映射
147. 诊断 IUMPR to 功能 Identifier 映射
148. J1939-related DiagnosticMapping
149. SPN 映射
150. 映射 between Software-Components and Controller Applications
151. 映射 between DiagnosticEvent and J1939 DTC
152. CP 软件 Clusters的诊断配置
153. Association of 诊断映射 with a CP 软件 Cluster
154. 映射 between DEXT elements and CP 软件 Cluster Resources
155. 映射 between 诊断 Events and CP 软件 Cluster Resources
156. 映射 between 诊断数据 Elements and CP 软件 Cluster Resources
157. 映射 between 诊断 Routines and CP 软件 Cluster Resources
158. 映射 between 诊断功能 Identifiers and CP 软件 Cluster Resources
159. 附录
160. Reference Material
161. Imposition Times of Constraints
162. Abbreviations
163. 示例
164. the 定义 of nested 诊断 Parameters的示例
165. Simple Nesting 示例
166. Simple Nesting 示例 with Gaps
167. Two-Level Nesting 示例
168. Array of Struct 示例
169. 诊断服务数据映射的示例
170. Simple 结构
171. Nested 结构
172. Array of 结构
173. the 定义 of Mature and De-Mature Condition的示例
174. the 定义 of semi-formal Textual 描述的示例
175. the 定义 of Pre- and Run-Condition的示例
176. Mentioned Class Tables
177. 术语表
178. Change history of AUTOSAR traceable items
179. Traceable item history of this document according to AUTOSAR Release R4.2.1
180. Added 规范 Items in R4.2.1
181. Added Constraints in R4.2.1
182. Traceable item history of this document according to AUTOSAR Release R4.2.2
183. Added Traceables in R4.2.2
184. Changed Traceables in R4.2.2
185. Deleted Traceables in R4.2.2
186. Added Constraints in R4.2.2
187. Changed Constraints in R4.2.2
188. Deleted Constraints in R4.2.2
189. Traceable item history of this document according to AUTOSAR Release R4.3.0
190. Added Traceables in R4.3.0
191. Changed Traceables in R4.3.0
192. Deleted Traceables in R4.3.0
193. Added Constraints in R4.3.0
194. Changed Constraints in R4.3.0
195. Deleted Constraints in R4.3.0
196. Traceable item history of this document according to AUTOSAR Release R4.3.1
197. Added 规范 Items in 4.3.1
198. Changed 规范 Items in 4.3.1
199. Deleted 规范 Items in 4.3.1
200. Added Constraints in 4.3.1
201. Changed Constraints in 4.3.1
202. Deleted Constraints in 4.3.1
203. Traceable item history of this document according to AUTOSAR Release R4.4.0
204. Added 规范 Items in 4.4.0
205. Changed 规范 Items in 4.4.0
206. Deleted 规范 Items in 4.4.0
207. Added Constraints in 4.4.0
208. Changed Constraints in 4.4.0
209. Deleted Constraints in 4.4.0
210. Traceable item history of this document according to AUTOSAR Release R19-11
211. Added 规范 Items in 19-11
212. Changed 规范 Items in 19-11
213. Deleted 规范 Items in 19-11
214. Added Constraints in 19-11
215. Changed Constraints in 19-11
216. Deleted Constraints in 19-11
217. Traceable item history of this document according to AUTOSAR Release R20-11
218. Added 规范 Items in R20-11
219. Changed 规范 Items in R20-11
220. Deleted 规范 Items in R20-11
221. Added Constraints in R20-11
222. Changed Constraints in R20-11
223. Deleted Constraints in R20-11
224. Traceable item history of this document according to AUTOSAR Release R21-11
225. Added 规范 Items in R21-11
226. Changed 规范 Items in R21-11
227. Deleted 规范 Items in R21-11
228. Added Constraints in R21-11
229. Changed Constraints in R21-11
230. Deleted Constraints in R21-11
231. Traceable item history of this document according to AUTOSAR Release R22-11
232. Added 规范 Items in R22-11
233. Changed 规范 Items in R22-11
234. Deleted 规范 Items in R22-11
235. Added Constraints in R22-11
236. Changed Constraints in R22-11
237. Deleted Constraints in R22-11
238. Traceable item history of this document according to AUTOSAR Release R23-11
239. Added 规范 Items in R23-11
240. Changed 规范 Items in R23-11
241. Deleted 规范 Items in R23-11
242. Added Constraints in R23-11
243. Changed Constraints in R23-11
244. Deleted Constraints in R23-11
245. Added Advisories in R23-11
246. Changed Advisories in R23-11
247. Deleted Advisories in R23-11
248. Traceable item history of this document according to AUTOSAR Release R24-11
249. Added 规范 Items in R24-11
250. Changed 规范 Items in R24-11
251. Deleted 规范 Items in R24-11
252. Added Constraints in R24-11
253. Changed Constraints in R24-11
254. Deleted Constraints in R24-11
255. Added Advisories in R24-11
256. Changed Advisories in R24-11
257. Deleted Advisories in R24-11
258. Traceable item history of this document according to AUTOSAR Release R25-11
259. Added 规范 Items in R25-11
260. Changed 规范 Items in R25-11
261. Deleted 规范 Items in R25-11
262. Added Constraints in R25-11
263. Changed Constraints in R25-11
264. Deleted Constraints in R25-11
265. Added Advisories in R25-11
266. Changed Advisories in R25-11
267. Deleted Advisories in R25-11
268. Traceable item history of this document according to AUTOSAR Release R26-11
269. Added 规范 Items in R26-11
270. Changed 规范 Items in R26-11
271. Deleted 规范 Items in R26-11
272. Added Constraints in R26-11
273. Changed Constraints in R26-11
274. Deleted Constraints in R26-11
275. Added Advisories in R26-11
276. Changed Advisories in R26-11
277. Deleted Advisories in R26-11
278. 建模 of InstanceRef
279. 简介
280. 建模
281. Upstream 映射
282. 简介
283. Dcm
284. Dem
285. FiM
286. IdsM
287. J1939Dcm
288. KeyM
289. Splitable Elements in the 范围 of this Document
290. Variation Points in the 范围 of this Document
