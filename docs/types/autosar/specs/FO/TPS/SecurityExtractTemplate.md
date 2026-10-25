# Security Extract Template (`SecurityExtractTemplate`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 980 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TPS_SecurityExtractTemplate_980\AUTOSAR_FO_TPS_SecurityExtractTemplate.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TPS_SecurityExtractTemplate_980\AUTOSAR_FO_TPS_SecurityExtractTemplate.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TPS_SecurityExtractTemplate_980\zzgen\FO_TPS_SecurityExtractTemplate.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. 概述
*原文标题：Overview*

The Security Extract Template (SECXT) is part of the Intrusion Detection System (IDS). The elements of an IDS are described in the document `SWS_IntrusionDetectionSystemManager` . In the context of ECU development projects, the SECXT serves multiple use cases that are described in Chapter .

The Intrusion Detection System Manager (IdsM) is a Basic Software module (for the AUTOSAR Classic Platform) or a Platform Service (for the AUTOSAR Adaptive Platform) that collects and centrally aggregates security incidents that possibly result from malicious attacks on the vehicle's software, communications or electronics system. In each of the security relevant ECUs or machines within the vehicle, an instance of the IdSM module or service collects and filters security events (optionally including additional data) in order to store them in a local Security Event Memory (Sem) and/or to forward them over the vehicle network to a central Intrusion Detection System Reporter (IdsR). This IdsR might be, for example, located within a telematics unit enabling it to send security reports and associated data via a cellular network to an OEM's Security Operations Center (SOC).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Use Cases

The Security Extract primarily serves as collection and exchange format for definition of security events and their system-related properties. Additionally, the SECXT can be used to specify instances of the IdsM module and their system-level configurations.

The Security Extract Template has been defined in a way that makes it applicable to both the Classic and the Adaptive Platform of AUTOSAR at the same time. That means, the same Security Extract file can contain definitions that can be applied to an IdsM running on Classic Platform as well as on an IdsM running on Adaptive Platform.

Furthermore, the SECXT is also used in the context of AUTOSAR standardization as collection format for the standardized security events.

### 5. SECXT as Collection and Exchange Format

During the development of an ECU, the security aspects have also to be taken into account due to new legislative regulations ("Cybersecurity Engineering"). This security engineering process is usually carried out in parallel to the functional development process and usually also leads to identification of possible indicators for specific threats that, later in the field, shall be identified, filtered and, if necessary, sent as qualified security events (QSEv) via the IdsR to a central SIEM for further analysis and handling.

An IdsR, a SIEM or any other entity that needs information about security events can potentially also use Security Extract files as input for configuration of the security events it needs to handle.

### 6. SECXT as 配置 Format for IdsM
*原文标题：SECXT as Configuration Format for IdsM*

A part of the Intrusion Detection System standardized by AUTOSAR, the Security Extract Template contains additional elements to specify IdsM instances and their system-level properties such as provisioning of timestamp or authentication (i.e. signature) information in the QSEv messages to be sent to the IdsR.

### 7. SECXT as Standardization Format

The standardized security events for a subset of BSW modules (Classic Platform) and Functional Clusters (Adaptive Platform) are defined within the ARXML file `AUTOSAR_MOD_GeneralDefinition_SecurityEvents`.arxml which is based on the Security Extract Template and distributed as part of `AUTOSAR_MOD_GeneralDefinitions`.zip.

### 8. Conceptual Background

In this chapter, further background information on the overall concept of the Security Extract file format is given to create a better basis for understanding the meta-model described in Chapter .

### 9. Main Development Phases for an IDS

Typically, an Intrusion Detection System (IDS) is based on the system parts IdsM, IdsR and the Security Operation Center (SOC) as exemplarily depicted in Figure .

The development of such an IDS can be divided into the following main phases:

# Security Analysis phase
# IDS Design phase
# IDS Deployment phase
# IDS Operational phase

The Security Extract Template supports all these four phases and can both be used for specification and exchange of IDS related definitions by and between OEMs and their suppliers. Therefore, a Security Extract file has potentially a high number of release cycles starting with security analysis and ending with "end of support" for a specific vehicle.

### 10. Security Analysis Phase

In the Security Analysis phase, the vehicle's electronics and software system is examined and analyzed by security experts to identify and evaluate potential approaches of attacks on the components of the system that could lead to a security breach. In a second step, based on these potential attack approaches, detectable events that deviate from the normal behavior of the system are identified and defined as Security Events.

One example of such a security event is the failed check of a CRC within a received End-to-End protected network message. While one occurrence of such a CRC failure would be explained by random transmission error (e.g. electromagnetic interference), a high number of reports of this security event within a short time and, in particular, only for a certain kind of network messages would arouse suspicion of a malicious attack on the network system.

The Security Extract Template supports this phase by formalizing the definition of these security events and their attributes (such as the ID). In addition, AUTOSAR also provides standardized security events in Security Extract format (as already mentioned in Ch. ).

### 11. IDS 设计 Phase
*原文标题：IDS Design Phase*

The IDS Design phase distributes, customizes and adapts the generic IDS components towards a concrete vehicle electronics and software system taking into consideration the security events identified in the previous phase. For example, IdsM instances are defined for the relevant ECUs and the respective security events are associated with these IdsM instances together with the definition of filters to prevent, for example, reporting of single and therefore harmless security events (like in the CRC failure example above).

In this phase, the Security Extract Template is enriched with the design decisions such as definition of IdsM instances, the mapping of security events onto them and the configuration of filters.

### 12. IDS Deployment Phase

The IDS Deployment phase comprises the realization of the IDS Design from the previous step towards the real system in hardware and software.

This phase is supported by the Security Extract Template through definition of IdsM instance deployment onto specific ECU-HW and the possibility to derive ECU configuration parameters for the IdsM modules on the Classic Platform (i.e. definition of Upstream Mapping rules, see also Ch. ).

### 13. IDS Operational Phase

The IDS Operational phase refers to the running IDS in the field when the vehicle is used by the end customer.

This phase is still regarded as part of the development process because it typically involves an IDS update process to keep the IDS up to date with new versions of application and platform software as well as with newly identified attack approaches and thus new security events.

During the IDS update process, Security Extract files can be used to reconfigure the IdsM instances of the IDS and also to make these reconfigurations known to the IdsR.

This is a notable difference to other AUTOSAR (M2 level) exchange files (e.g. System Description) which usually do not evolve further after the final configuration of the ECU-HW devices of the vehicle has been specified for SOP. On the other hand, the Security Extract file is expected to be maintained and further extended even after SOP of the vehicle it relates to due to its involvement in the IDS update process.

### 14. Security Extract 建模的描述
*原文标题：Description of Security Extract Modeling*

In this chapter, the meta-model of the Security Extract Template is described in detail.

### 15. 概述 on Main 建模 Elements
*原文标题：Overview on Main Model Elements*

The Security Extract Template comprises the main elements as shown in Figure .

These elements have the following purposes:

* The IdsDesign is the "umbrella" meta-class, i.e. the root element that links together all relevant Security Extract elements to form and define the scope of the IDS under design and to be implemented.
* The abstract meta-class IdsCommonElement serves as base class for the Security Extract elements. Its only purpose is to be referenced by the single role element of IdsDesign.
* The meta-class SecurityEventDefinition is derived from IdsCommonElement and defines a security event together with its general properties. The SecurityEventDefinitions can be provided by different parties of a development project in multiple Security Extract files.
* IdsmInstance is derived from IdsCommonElement and specifies an instance of the IdsM together with its system-level configuration parameters.
* IdsmProperties is derived from IdsCommonElement and provides a container for definition of functional properties related to IdsmInstances that can be applied in a re-usable manner by respective referencing.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. IdsDesign

Semantics of IdsDesign
  Status: DRAFT
⌈
The meta-class IdsDesign represents a structural container that defines the scope (and thus the system boundaries) of an IDS design and implementation by linking together (through the references in the role element all relevant Security Extract elements.
⌋

The IdsDesign linking together all relevant Security Extract elements is depicted in Figure .

| Class | IdsDesign | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the root element of a SecurityExtract file for IDS development. It defines the scope of an IDS to be designed and implemented by referencing all SecurityExtract meta-classes that need to be included into the IDS development process. |  |  |  |

| Tags: atp.recommendedPackage=IdsDesigns | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, UploadableDesignElement, UploadablePackageElement | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| element | IdsCommonElement | * | ref | This reference includes an element with IDS related definitions into the IdsDesign. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 定义 of Security Event
*原文标题：Definition of Security Event*

Semantics of SecurityEventDefinition
  Status: DRAFT
⌈
A SecurityEventDefinition represents the atomic unit of a security-related event with pre-defined properties that is reported by security sensors and further processed by the IdsM.
⌋

| Class | SecurityEventDefinition | < | < | < |
|---|---|---|---|---|
| Note | This meta-class defines a security-related event as part of the intrusion detection system. |  |  |  |

| Tags: atp.recommendedPackage=SecurityEventDefinitions | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, IdsCommonElement, MultilanguageReferrable, PackageableElement, Referrable, UploadableDesignElement, UploadablePackageElement | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| eventSymbolName | SymbolProps | 0..1 | aggr | This aggregation defines optionally an alternative EventName for the SecurityEventDefinition in case there is a collision of shortNames. |

Stereotypes: atpSplitable Tags: atp.Splitkey=eventSymbolName.shortName atp.Status=candidate
| id | PositiveInteger | 0..1 | attr | This attribute represents the numerical identification of the defined security event. The identification shall be unique within the scope of the IDS. |
|---|---|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Properties of a Security Event

EventName of SecurityEventDefinition
  Status: DRAFT
⌈
A SecurityEventDefinition shall be named and referred to by a symbolic EventName composed of upper-case letters and underscore characters with an abbreviated prefix indicating the source BSW module (Classic Platform) or source functional cluster (Adaptive Platform) of the security event (e.g. `KEYM_CERTIFICATE_FAILED`). In a Security Extract, an instance of a SecurityEventDefinition shall use this EventName as its shortName.
⌋

 Alternative EventName of SecurityEventDefinition
  Status: DRAFT
⌈
If SecurityEventDefinitions from different sources are merged and a collision of their shortNames is detected, then the aggregated SymbolProps (in the role eventSymbolName) shall be used to define an alternative EventName for the colliding SecurityEventDefinition. The EventName defined through the role eventSymbolName takes precedence over the EventName defined by the shortName.
⌋

An instance of SecurityEventDefinition needs to be uniquely identifiable (i.e. within an IDS scope) by its id:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Attributes of Mapped Security Events

Additionally to the general properties of a SecurityEventDefinition described in Ch. , there are additional properties of a SecurityEventDefinition that can only be defined in the concrete context of its use, i.e. in particular, when its mapping to an IdsmInstance has been defined (see Ch. ). The additional properties of a SecurityEventDefinition that are dependent on its mapping are defined by the meta-class SecurityEventContextProps and described in detail in Ch. .

### 20. 过滤 of Security Events
*原文标题：Filtering of Security Events*

In general, reported security events do not immediately become qualified security events but need to pass a set of well-defined condition checks in order to become qualified.

These condition checks are performed in sequence as follows:

* Default reporting mode (see Chapter )
* Filter chain (see Chapter )

After qualified security events have successfully passed these security event specific filters, additional filters that are generic for an IdsM Instance are applied in order to reduce possible high rates of incoming security events:

* Limitation filters (see Chapter )

The reporting mode and filter chain checks (the first two steps documented above) are modeled around the abstract meta-class SecurityEventContextMapping affecting only the referenced SecurityEventDefinitions while the limitation filters (the third step) are modeled separately because it applies to the whole IdsM Instance with all its SecurityEventDefinitions.

 Definition of pre-qualified security events
  Status: DRAFT
⌈
Pre-qualified security events - which are, for example, reported by a smart security sensor (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 概述 on SecurityEventFilterChain
*原文标题：Overview on SecurityEventFilterChain*

A SecurityEventFilterChain contains the definitions of filtering algorithms that can be applied in a standardized order towards the occurrence of a security event.

 Filtering Semantics of SecurityEventFilterChain
  Status: DRAFT
⌈
A SecurityEventFilterChain defines for each of the contained filter algorithms whether this algorithm

* shall be applied with the specified filter algorithm parameters or
* shall not be applied.

The order of application of the contained filter algorithms is standardized.
⌋

 Applicability of SecurityEventFilterChain towards SecurityEventDefinitions
  Status: DRAFT
⌈
A specific SecurityEventFilterChain shall only be applied to those SecurityEventDefinitions to which this SecurityEventFilterChain is mapped by derived meta-classes of the abstract meta-class SecurityEventContextMapping.
⌋

This mapping is described in detail in Chapter .

Figure  shows an overview on the modeling of the filter chain for security events.

| Class | SecurityEventFilterChain | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents a configurable chain of filters used to qualify security events. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. SecurityEventStateFilter

Semantics of SecurityEventStateFilter
  Status: DRAFT
⌈
The SecurityEventStateFilter defines a blocking filter of functionality "State Filter" and is applicable to both the Classic and Adaptive Platform. If any of the referenced states (respectively for CP and AP) is active, then the reported SecurityEventDefinition shall be discarded by the IdsM. For the Classic Platform, the possible active states are referenced by blockIfStateActiveCp. For the Adaptive Platform, the possible active states are referenced by blockIfStateActiveAp.
⌋

Please note that the state machines which indicate the currently active state are defined differently for the Classic and the Adaptive Platform.

 Unambiguous definition of SecurityEventStateFilter for CP or AP
  Status: DRAFT
⌈
For SecurityEventStateFilter, either the references in the role blockIfStateActiveCp or the references in the role blockIfStateActiveAp shall be defined in order to ensure the unambiguous applicability of the SecurityEventStateFilter towards the Classic or the Adaptive Platform.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. SecurityEventStateFilter for the Classic Platform

Semantics of SecurityEventStateFilter for CP
  Status: DRAFT
⌈
For the Classic Platform, if a SecurityEventDefinition, that is mapped to the SecurityEventFilterChain to which the SecurityEventStateFilter belongs to, is reported to the IdsM when the currently active BlockState in the IdsM matches one of the BlockStates referenced in the role blockIfStateActiveCp, then the IdsM shall discard the reported SecurityEventDefinition.
⌋

### 24. SecurityEventStateFilter for the Adaptive Platform

Semantics of SecurityEventStateFilter for AP
  Status: DRAFT
⌈
For the Adaptive Platform, if a SecurityEventDefinition, that is mapped to the SecurityEventFilterChain to which the SecurityEventStateFilter belongs to, is reported to the IdsM when the currently active machine state matches one of the machine states referenced in the role blockIfStateActiveAp, then the IdsM shall discard the reported SecurityEventDefinition.
⌋

### 25. SecurityEventOneEveryNFilter

Semantics of SecurityEventOneEveryNFilter
  Status: DRAFT
⌈
SecurityEventOneEveryNFilter defines a sampling filter of functionality "Forward Every Nth" with N being defined by the attribute n. Every n'th security event passes this filter further down the filter chain.
⌋

 Valid interval for attribute SecurityEventOneEveryNFilter.n
  Status: DRAFT
⌈
The valid interval for attribute SecurityEventOneEveryNFilter.n is 2..65535.
⌋

| Class | SecurityEventOneEveryNFilter | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the configuration of a sampling (i.e. every n-th event is sampled) filter for security events. | < | < | < |
| Base | ARObject, AbstractSecurityEventFilter, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | SecurityEventFilterChain.oneEveryN | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| n | PositiveInteger | 0..1 | attr | This attribute represents the configuration of the sampling filter, i.e. it configures the parameter "n" that controls how many events (n-1) shall be dropped after a sampled event until a new sample is created. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. SecurityEventAggregationFilter

Semantics of SecurityEventAggregationFilter
  Status: DRAFT
⌈
SecurityEventAggregationFilter defines an accumulating filter of functionality "aggregation filter". It counts for each consecutive time interval minimumIntervalLength the number of occurrences of the specific SecurityEventDefinition. If at the end of a time interval this number is greater than zero, the resulting aggregated security event containing this number and optional context data is passed further down the filter chain.
⌋

 Valid interval for attribute SecurityEventAggregationFilter.minimumIntervalLength
  Status: DRAFT
⌈
The valid interval for attribute SecurityEventAggregationFilter.minimumIntervalLength is ]0..INF[ seconds.
⌋

 Semantics of attribute SecurityEventAggregationFilter.contextDataSource
  Status: DRAFT
⌈
The attribute contextDataSource defines whether - in case the qualifying condition of the SecurityEventAggregationFilter is met - the context data of the first or of the last reported SecurityEventDefinition within that time interval shall be attached to the resulting aggregated security event.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. SecurityEventThresholdFilter

Semantics of SecurityEventThresholdFilter
  Status: DRAFT
⌈
SecurityEventThresholdFilter defines an accumulating filter of functionality "threshold filter". It discards for each consecutive time interval intervalLength the first thresholdNumber-1 occurrences of the specific SecurityEventDefinition. All subsequently reported security events within the same time interval are passed further down the filter chain.
⌋

 Valid interval for attribute SecurityEventThresholdFilter.intervalLength
  Status: DRAFT
⌈
The valid interval for attribute SecurityEventThresholdFilter.intervalLength is ]0..INF[ seconds.
⌋

 Valid interval for attribute SecurityEventThresholdFilter.thresholdNumber
  Status: DRAFT
⌈
The valid interval for attribute SecurityEventThresholdFilter.thresholdNumber is 2..65535.
⌋

| Class | SecurityEventThresholdFilter | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the threshold filter that drops (repeatedly at each beginning of a configurable time interval) a configurable number of security events . All subsequently arriving security events (within the configured time interval) pass the filter. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Final Qualification of a reported Security Event

Final Qualification of a SecurityEventDefinition
  Status: DRAFT
⌈
A reported SecurityEventDefinition that is not blocked by the defaultReportingMode and that has successfully passed all filters of a SecurityEventFilterChain as configured becomes a qualified security event (QSEv).
⌋

Note: This QSEv is still subject to limitation filtering (if configured) before it is sent onto the network. Please refer to Chapter .

### 29. Limitation Filters

Security events might occur in high numbers within a short time. Therefore, limitation filters can be applied if the network bandwidth for sending qualified security event (QSEv) messages needs to be limited in order to not significantly affect the remaining network communication in a negative way.

Since the properties of the limitation filters usually need to be defined dependent on the network connection properties of the ECU on which the IdsM instance runs, the specifically configured limitation filters are associated with an IdsmInstance and not with SecurityEventDefinitions.

Therefore, the meta-classes representing the limitation filter, IdsmRateLimitation and IdsmTrafficLimitation, are aggregated by IdsmProperties as shown in Figure .

An IdsmInstance can use specific IdsmRateLimitation and/or IdsmTrafficLimitation filters by referencing one or both of them in the role rateLimitationFilter or trafficLimitationFilter, respectively.

| Class | AbstractSecurityIdsmInstanceFilter (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class acts as an abstract base class for security event filters that apply for an entire IdsM. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Rate Limitation Filter

Semantics of IdsmRateLimitation
  Status: DRAFT
⌈
IdsmRateLimitation defines a rate limitation filter. During each consecutive time interval timeInterval, when the accumulated number of sent QSEv messages exceeds maxEventsInInterval then all subsequent QSEv messages within the same time interval are not sent onto the network but discarded.
⌋

 Valid interval for attribute IdsmRateLimitation.timeInterval
  Status: DRAFT
⌈
The valid interval for attribute IdsmRateLimitation.timeInterval is 0..65535 seconds.
⌋

 Valid interval for attribute IdsmRateLimitation.maxEventsInInterval
  Status: DRAFT
⌈
The valid interval for attribute IdsmRateLimitation.maxEventsInInterval is 1..65535.
⌋

| Class | IdsmRateLimitation | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the configuration of a rate limitation filter for security events. This means that security events are dropped if the number of events (of any type) processed within a configurable time window is greater than a configurable threshold. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Traffic Limitation Filter

Semantics of IdsmTrafficLimitation
  Status: DRAFT
⌈
IdsmTrafficLimitation defines a traffic limitation filter. During each consecutive time interval timeInterval, when the accumulated size of sent QSEv messages exceeds maxBytesInInterval then all subsequent QSEv messages within the same time interval are not sent onto the network but discarded.
⌋

 Valid interval for attribute IdsmTrafficLimitation.timeInterval
  Status: DRAFT
⌈
The valid interval for attribute IdsmTrafficLimitation.timeInterval is 0..65535 seconds.
⌋

 Valid interval for attribute IdsmTrafficLimitation.maxBytesInInterval
  Status: DRAFT
⌈
The valid interval for attribute IdsmTrafficLimitation.maxBytesInInterval is 1..65535.
⌋

 Existence of attribute IdsmTrafficLimitation.maxBytesInInterval
  Status: DRAFT
⌈
For each IdsmTrafficLimitation, the attribute maxBytesInInterval shall exist.
⌋

 Existence of attribute IdsmTrafficLimitation.timeInterval
  Status: DRAFT
⌈
For each IdsmTrafficLimitation, the attribute timeInterval shall exist.
⌋

| Class | IdsmTrafficLimitation | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the configuration of a traffic limitation filter for Security Events. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 概述 on Security Event Mappings
*原文标题：Overview on Security Event Mappings*

The mapping of SecurityEventDefinitions serves the following three main purposes:

# to link the SecurityEventDefinition with the IdsmInstance that shall be able to report it,
# to associate the SecurityEventDefinition with the SecurityEventFilterChain which is applicable for it,
# to add information on the executional context in which the SecurityEventDefinition can occur.

To meet these three purposes, the abstract meta-class SecurityEventContextMapping has the following derived concrete meta-classes (also shown in Figure ):

* SecurityEventContextMappingBswModule
* SecurityEventContextMappingFunctionalCluster
* SecurityEventContextMappingCommConnector
* SecurityEventContextMappingApplication

These concrete meta-classes add their respective executional context information to the mapping of SecurityEventDefinitions to an IdsmInstance.

### 其余 78 章（内容从略，见纯文本全文）

33. 映射 of Security Events to an IdsM Instance
34. Context 数据定义
35. Default Reporting 模式定义
36. Persistent Storage 定义
37. Severity Level 定义
38. Sensor Instance ID 定义
39. Security Events with BSW 模块 Context的映射
40. Security Events with 功能性 Cluster Context的映射
41. 映射 of Security Events with Communication Connector Context
42. 映射 of Security Events with Application Context
43. 配置 of an IdsM Instance
44. Attributes of an IdsM Instance
45. Instance ID of IdsM
46. Timestamp in QSEv messages
47. Signature 支持 in QSEv Messages
48. Association of Security Events with an IdsM Instance
49. 网络配置 of an IdsM instance
50. IdsM 网络配置 on Classic Platform
51. IdsM 网络配置 on Adaptive Platform
52. Block States of an IdsM instance on CP
53. Reporting Security Events
54. Security Event Context 数据 Identification
55. 附录
56. Reference Material
57. Terms and Abbreviations
58. Security Events in Use
59. 示例
60. 示例 for 建模 of SecurityEventContextDataDefinition
61. Mentioned Class Tables
62. Upstream 映射
63. Firewall
64. IdsM
65. KeyM
66. TcpIp
67. Splitable Elements in the 范围 of this Document
68. Variation Points in the 范围 of this Document
69. Change History
70. Change History of this document according to AUTOSAR Release R20-11
71. Added 规范 Items in R20-11
72. Changed 规范 Items in R20-11
73. Deleted 规范 Items in R20-11
74. Added Constraints in R20-11
75. Changed Constraints in R20-11
76. Deleted Constraints in R20-11
77. Change History of this document according to AUTOSAR Release R22-11
78. Added 规范 Items in R22-11
79. Changed 规范 Items in R22-11
80. Deleted 规范 Items in R22-11
81. Added Constraints in R22-11
82. Changed Constraints in R22-11
83. Deleted Constraints in R22-11
84. Change History of this document according to AUTOSAR Release R23-11
85. Added 规范 Items in R23-11
86. Changed 规范 Items in R23-11
87. Deleted 规范 Items in R23-11
88. Added Constraints in R23-11
89. Changed Constraints in R23-11
90. Deleted Constraints in R23-11
91. Added Advisories in R23-11
92. Changed Advisories in R23-11
93. Deleted Advisories in R23-11
94. Change History of this document according to AUTOSAR Release R24-11
95. Added 规范 Items in R24-11
96. Changed 规范 Items in R24-11
97. Deleted 规范 Items in R24-11
98. Added Constraints in R24-11
99. Changed Constraints in R24-11
100. Deleted Constraints in R24-11
101. Added Advisories in R24-11
102. Changed Advisories in R24-11
103. Deleted Advisories in R24-11
104. Change History of this document according to AUTOSAR Release R25-11
105. Added 规范 Items in R25-11
106. Changed 规范 Items in R25-11
107. Deleted 规范 Items in R25-11
108. Added Constraints in R25-11
109. Changed Constraints in R25-11
110. Deleted Constraints in R25-11
