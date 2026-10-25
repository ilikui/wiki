# Requirements on Automotive API Gateway (`AutomotiveAPIGateway`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 1115 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_AutomotiveAPIGateway_1115\AUTOSAR_AP_RS_AutomotiveAPIGateway.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_AutomotiveAPIGateway_1115\AUTOSAR_AP_RS_AutomotiveAPIGateway.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_AutomotiveAPIGateway_1115\zzgen\AP_RS_AutomotiveAPIGateway.complete.txt`

## 文档简介

This document specifies requirements of AUTOSAR Automotive API Gateway. It is meant to be independent of any particular implementation providing basic information about aspects of it to be implemented.

AUTOSAR for both Adaptive and Classic platform uses its own methodology. As Automotive API Gateway uses regular ara::com communication with its fields, methods and events semantics for in-vehicle communication it needs to combine it with data-centric approach focused around VSS data model and VISS protocol.

This documents presents requirements for:

* data type constraints,
* units,
* VSS to communication primitives mapping,
* service availability,
* minimal subset of VISS protocol features.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements of AUTOSAR Automotive API Gateway. It is meant to be independent of any particular implementation providing basic information about aspects of it to be implemented.

AUTOSAR for both Adaptive and Classic platform uses its own methodology. As Automotive API Gateway uses regular ara::com communication with its fields, methods and events semantics for in-vehicle communication it needs to combine it with data-centric approach focused around VSS data model and VISS protocol.

This documents presents requirements for:

* data type constraints,
* units,
* VSS to communication primitives mapping,
* service availability,
* minimal subset of VISS protocol features.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

### 5. 需求 identification
*原文标题：Requirements identification*

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* SHOULD: This word, or the adjective "RECOMMENDED", means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Automotive API Gateway Requirements that are not included in the AUTOSAR TR Glossary.

| Abbreviation / Acronym: | Description: |
|---|---|
| VSS | Vehicle Signal Specification |
| VISS | The Vehicle Information Service Specification |
| VISSv2 | The Vehicle Information Service Specification version 2 |

### 7. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Automotive API Gateway.

### 8. 功能概述
*原文标题：Functional Overview*

The AUTOSAR Adaptive Automotive API Gateway interacts with clients providing the VISSv2 server. This document therefore includes requirements on

* VSS adoption rules,
* mapping between VSS and ServiceInterfaces element,
* VISS supported features.

### 9. 功能性需求
*原文标题：Functional Requirements*

Enforcement of Datatype Restrictions
⌈
| Description: | The Automotive API Gateway shall enforce the restrictions defined for the VSS datatypes. |
|---|---|
| Rationale: | Compliance with the external interface is required for clients to Access Data. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Access Data |
| Supporting Material: | chapter Data Entry defines supported datatypes - including their allowed ranges - as well as restrictions for them. |

⌋

 Datatype Mapping
⌈
| Description: | The Automotive API Gateway shall support the mapping of the VSS datatype of a VSS leaf to a different, compatible datatype within the vehicle. |
|---|---|
| Rationale: | The datatypes of VSS and the ones within the AUTOSAR environment are defined separately. The Automotive API Gateway needs to be able to connect these two sides. Which concrete data types are compatible is described as part of the realization of this requirement. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Access Data; Make Data Accessible |
| Supporting Material: |  |

⌋

 Unit Mapping
⌈
| Description: | The Automotive API Gateway shall support the mapping of the VSS unit of a VSS leaf to a different, compatible unit within the vehicle. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Non-Functional 需求
*原文标题：Non-Functional Requirements*

There is no non-functional requirements.

### 11. References

### 12. 附录
*原文标题：Appendix*

### 13. Change history of AUTOSAR traceable items

### 14. Traceable item history of this document according to AUTOSAR Release R25-11

### 15. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 16. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 17. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 18. Traceable item history of this document according to AUTOSAR Release R24-11

### 19. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| Enforcement of Datatype Restrictions |  |
| Datatype Mapping |  |
| Unit Mapping |  |
| Mapping to Field |  |
| Mapping to Event |  |
| Mapping to Methods |  |
| Mapping to Structured Datatype |  |
| Mapping of Structured Datatype |  |
| Tolerate Missing Mappings |  |
| Possible Mapping Targets |  |
| Association to Concrete Instance of a Service Interface |  |
| Mapping of Functionality |  |
| Mapping of Errors |  |
| VISS interface |  |
| VISS Read of Multiple Leaves |  |
| VISS Subscriptions |  |
| Ignore VSS Aggregates |  |
| VISS Change Filter |  |
| VISS Timebased filter |  |
| VISS Server Capabilities |  |
| Signal Freshness |  |
| Protection from Overloads |  |
| Limited Request Rate on AUTOSAR-facing Interfaces |  |
| Signal to Service Capability |  |

### 20. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 21. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none
