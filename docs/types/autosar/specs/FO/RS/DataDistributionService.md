# Requirements on Data Distribution Service (`DataDistributionService`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 1068 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_DataDistributionService_1068\AUTOSAR_FO_RS_DataDistributionService.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_DataDistributionService_1068\AUTOSAR_FO_RS_DataDistributionService.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_DataDistributionService_1068\zzgen\FO_RS_DataDistributionService.complete.txt`

## 文档简介

This document specifies the requirements of the Data Distribution Service (DDS) , which shall be supported by AUTOSAR CP and AP.

DDS is a middleware protocol and API standard for data-centric connectivity standardized by the Object Management Group (OMG), so every requirement would be directly derived from the OMG standard.

A detailed list can be found on

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies the requirements of the Data Distribution Service (DDS) , which shall be supported by AUTOSAR CP and AP.

DDS is a middleware protocol and API standard for data-centric connectivity standardized by the Object Management Group (OMG), so every requirement would be directly derived from the OMG standard.

A detailed list can be found on

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

In requirements, the following specific semantics shall be used (based on the Internet Engineering Task Force IETF).

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as:

* SHALL: This word means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* MUST: This word means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase means that the definition is an absolute prohibition of the specification due to legal constraints.
* SHOULD: This word, or the adjective "RECOMMENDED", mean that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求指南
*原文标题：Requirements Guideline*

The functional requirements defined in this document have been grouped on the basis of their functionality. The groups detailed in the next chapters are:

* General: [ ] Different kind of requirements related to the DDS OMG standard and to the introduction on AUTOSAR CP and AP architectures.
* Security: [ ] Requirements required to guarantee some degrees of Security.
* Safety: [ ] Requirements required to guarantee some degrees of Safety according ISO-26262 .
* DDS-DCPS Configuration: [ ]. Requirements stating the complaince with the Data-Centric Publisher/Subscriber communication paradigm.
* Requirements for unidirectional DDS communication: [ ]. Requirement related to the used DDS transport protocol.
* DDSI-RTPS: [ ]. Requirements stating the compliance with OMG DDSI-RTPS protocol
* Requirements for Service Oriented Architecture: [ ]. Requirements stating the compliance with the Service Oriented Architecture definition in AUTOSAR.
* Dynamic Discovery: [ ]. Requirements stating the compliance with OMG SPDP, SEDP protocols  and AUTOSAR Service Discovery

### 5. 需求 quality
*原文标题：Requirements quality*

No content

### 6. 需求 identification
*原文标题：Requirements identification*

No content

### 7. 缩略语
*原文标题：Acronyms and abbreviations*

### 8. Acronyms

For acronyms and abbreviations refer to .

| Acronym | Description |
|---|---|
| DDS-RPC | DDS Remote Procedure Call. In this document DDS Remote Procedure Call (or Remote Procedure Call simply) refers to the concepts expressed into the specification Remote Procedure Call over DDS . It introduces the concept of DDS Services. Services provide the mechanisms required to define and implement methods that can be invoked remotely by DDS client applications using the building blocks of the DDS data-centric publish-subscribe middleware . |

### 9. Abbreviations

None

### 10. 需求规范
*原文标题：Requirements Specification*

This chapter describes requirements for integration of DDS in AUTOSAR.

### 11. 功能概述
*原文标题：Functional Overview*

The Data Distribution Service (DDS)  is a middleware protocol and API standard from the Object Management Group (OMG). It integrates the components of a system together, providing low-latency data connectivity, extreme reliability, and a scalable architecture.

The DDS Middleware is a software layer that abstracts the Application from the details of the operating system, network transport, and low-level data formats. Underlying details like data wire format, discovery, connections, reliability, protocols, transport selection, Quality of Service (QoS), security, etc. are managed transparently by the middleware.

DDS provides QoS-managed data sharing. Applications communicate by publishing and subscribing to Topics identified by their Topic name. Subscriptions can specify time and content filters and get only a subset of the data being published on the Topic. Different DDS Domains can be defined in a system and each will operate in complete isolation, unless explicit cross-domain routing components are explicitly deployed.

DDS is uniquely data centric.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Global 数据 space
*原文标题：Global data space*

DDS Applications rely on a Data Model that is independent from the platform used. This model defines the global data space and specifies how Publishers and Subscribers refer to portions of this space. The Data Model can be as simple as a set of unrelated data-structures, each identified by a Topic and a Data Type.

Topics are uniquely identified by a name within the global data space. In addition, a Data Type provides structural information needed to tell the middleware how to manipulate the data. The use of typed interfaces implies the need for a generation tool to translate type descriptions into appropriate interfaces and implementations that fill the gap between the typed interfaces, the generic middleware and the platform-specifics (e.g. programming language).

The following definitions maybe useful to better understand the meaning and the context of requirements in this document:

Entity: The base object class of DDS, almost all the others are specializations of this one.

Topic: Topics associate a Name, a Data Type, and a set of QoS policy values.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 服务 Oriented 架构
*原文标题：Service Oriented Architecture*

In AUTOSAR a Service Instance is a functional entity implementing a Service Interface. Service Interfaces group named elements conforming to different kind of communication paradigms (mostly AUTOSAR specializations of general, well-known patterns such as, publish-subscribe and request-response).

In a Service-Oriented Architecture (SOA), applications can either provide (i.e. act as a server of) or require (i.e. act as a client of) Service Instances conforming to a pre-agreed Service Interface. In this kind of scenario the applications are loosely coupled and communicate over a middleware layer providing Service-oriented functionality.

DDS can realize these SOA functions by supporting implementation the five kinds of communication styles defined by the Communication Management Functional Cluster of the AUTOSAR Adaptive Platform :

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Dynamic Discovery

The following sub-sections describe the different layers of discovery protocols leading up to SOA Service Instance Discovery support under AUTOSAR and DDS.

### 15. OMG DDS Discovery

DDS Discovery is the behind-the-scenes technology in which DomainParticipants, DataWriters, and DataReaders on different ECUs dynamically learn about each other's existence and parameters.

Each DomainParticipant maintains an internal volatile database of information about all the known DomainParticipants and the DataReaders/DataWriters they host. This database is what makes it possible for DataWriters and DataReaders to be matched and, ultimately, communicate with each other. To create and refresh the database, each application follows a well-known discovery process.

The RTPS specification splits up the discovery protocol into two independent protocols: Participant Discovery Protocol (PDP) and Endpoint Discovery Protocol (EDP).

A Participant Discovery Protocol specifies how Participants discover each other in the network.

Once two Participants have discovered each other, they exchange information on the Endpoints (DataWriters and DataReaders) they contain using an Endpoint Discovery Protocol.

DDS Middleware implementations may choose to support multiple PDPs and EDPs, possibly vendor-specific.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. AUTOSAR 服务 Instance Discovery
*原文标题：AUTOSAR Service Instance Discovery*

Once DDS DomainParticipants have discovered each other, an additional set of exchanges takes place in order to:

* Advertising of availabe Service Instances by Applications providing them
* Discovery of, and binding to, Service Instances by Applications requiring them

For details about the AUTOSAR DDS Service Discovery Protocol refer to .

### 17. 功能性需求
*原文标题：Functional Requirements*

### 18. 通用
*原文标题：General*

DDS Compliance
⌈
| Description: | The DDS components of AUTOSAR shall comply with the DDS Minimum Profile defined in , the DDS Wire Interoperability protocol (DDSI-RTPS) defined in , and the DDS-XTYPES Minimal Programming Interface and Network Interoperability Profiles defined in . |
|---|---|
| Rationale: | Interoperability with other nodes implementing DDS |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | * Intercommunications between different kinds of architectures (e.g: AP/CP communication compatibility) |

* Intercommunicate with simulators or ADAS systems based on DDS (e.g. based on ROS2)
| Supporting Material: | OMG Data Distribution Service protocol specification  OMG DDS Interoperability Wire Protocol  OMG Extensible and Dynamic Topic Types for DDS |
|---|---|

⌋

 DDS standard serialization rules
⌈
| Description: | Data packets to be sent to the network shall be compliant with the DDS Interoperability Wire Protocol (DDSI-RTPS) defined in |
|---|---|
| Rationale: | Interoperability with other nodes implementing DDS |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | * Intercommunications between different kinds of architectures |

* Intercommunicate with simulators or ADAS systems based on DDS (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Security

Security mechanism
⌈
| Description: | The DDS middleware shall suppport and implement the DDSI-RTPS wire protocol extensions of DDS Security  in order to guarantee data integrity and data authentication. |
|---|---|
| Rationale: | Because external and hybrid communication will be provided, the communication must be secured |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | * Secure interoperability with other platforms in the vehicle |
| Supporting Material: | OMG DDS Security Specification |

⌋

### 20. Safety

Safety mechanism
⌈
| Description: | The DDS middleware shall support ISO26262-compliant E2E  safety mechanisms, without breaking DDS and DDSI-RTPS specification compliance |
|---|---|
| Rationale: | Because external and hybrid communication will be provided, the communication must incorporate safety mechanisms |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | * Safe interoperability with other platforms in the vehicle |
| Supporting Material: | ISO 26262 |

⌋

### 21. DDS-DCPS 配置
*原文标题：DDS-DCPS Configuration*

Publish
⌈
| Description: | The DDS AUTOSAR component shall permit to publish data on specific topics |
|---|---|
| Rationale: | Send data |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | Send typed data |
| Supporting Material: | OMG Data Distribution Service protocol specification |

⌋

 Subscribe
⌈
| Description: | The DDS AUTOSAR component shall permit to subscribe to specific topics |
|---|---|
| Rationale: | Receive typed data |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | Receive specific data type |
| Supporting Material: | OMG Data Distribution Service protocol specification |

⌋

### 22. 需求 for unidirectional DDS communication
*原文标题：Requirements for unidirectional DDS communication*

Transport protocol
⌈
| Description: | The AUTOSAR DDS component shall support different transport protocols underneath. |
|---|---|
| Rationale: | The AUTOSAR DDS component is unaware of the transport protocol. |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | * DDS over UDP for time critical communications. |

* DDS over TCP for time-uncritical communication of large data.
* Shared-memory for intra-ecu communications.
| Supporting Material: | DDS Interoperability Wire Protocol (, chapter 9) |
|---|---|

⌋

### 23. 需求 for DDSI-RTPS
*原文标题：Requirements for DDSI-RTPS*

RTPS message encapsulation
⌈
| Description: | The DDS components of AUTOSAR shall encapsulate data into RTPS messages |
|---|---|
| Rationale: | DDS intercommunicate by using RTPS messages |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | DDS intercommunication |
| Supporting Material: | - |

⌋

 RTPS message decapsulation
⌈
| Description: | The DDS components of AUTOSAR shall decapsulate data from RTPS messages |
|---|---|
| Rationale: | DDS intercommunicate by using RTPS messages |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | DDS intercommunication |
| Supporting Material: | - |

⌋

### 24. 需求 for SOA
*原文标题：Requirements for SOA*

DDS Event communication support
⌈
| Description: | DDS shall support event communication, which is a uni-directional communication that is produced and sent by the service provider. |
|---|---|
| Rationale: | Event based communication needs to be considered in the communication over the network |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | Communication of data which are produced on event-based, e.g gear-shifts |
| Supporting Material: | Requirements on SOME/IP Protocol |

⌋

 DDS Method communication support
⌈
| Description: | DDS must support method communication, which includes bidirectional and unidirectional RPC communication. In the latter case, the callee is not required to inform the caller of the result. In the former case, however, the caller must inform the callee of the result. |
|---|---|
| Rationale: | A remote procedure call either needs receive the result or doesn't need it. |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | Remote procedure call |
| Supporting Material: | Requirements on SOME/IP Protocol, OMG Remote Procedure Call over DDS |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 需求 for Dynamic Discovery
*原文标题：Requirements for Dynamic Discovery*

DDS shall optionally support SPDP according to DDS-RTPS specification
⌈
| Description: | DDS shall optionally support Simple Participant Discovery Protocol (SPDP). NOTE: SPDP needs to be supported if a static remote Domain participant configuration is missing. |
|---|---|
| Rationale: | This protocol represents the only standard implementation of a generic Simple Participant Protocol (PDP). It represents the first step of whole DDS Dynamic Discovery procedure. Goal of each participant is to achieve a complete list of all remote participant that are in its peers list. The peers list is the list of nodes with which a participant may communicate. |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | DDS middleware application |
| Supporting Material: | OMG DDS Interoperability Wire Protocol (DDS-RTPS) |

⌋

 DDS shall optionally support SEDP according to DDS-RTPS specification
⌈
| Description: | DDS shall optionally support Simple Endpoints Discovery Protocol (SEDP). NOTE: SEDP needs to be supported if a static remote Endpoints(writers, readers) configuration is missing. |
|---|---|
| Rationale: | This protocol represents the only standard implementation of a generic Simple Endpoints Protocol (EDP). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Non-Functional 需求
*原文标题：Non-Functional Requirements*

None.

### 27. References

### 28. 附录
*原文标题：Appendix*

### 29. 附录
*原文标题：Appendix*

No content

### 30. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 31. Traceable item history of this document according to AUTOSAR Release R25-11

### 32. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| DDS Event communication support |  |
| DDS Method communication support |  |
| DDS error handling of bi-directional method communication support |  |
| DDS shall support field communication with getters, setters and notification events. |  |
| DDS shall optionally support SPDP according to DDS-RTPS specification |  |
| DDS shall optionally support SEDP according to DDS-RTPS specification |  |
| DDS shall support the Domain Participant USER_DATA QoS policy, if Service Discovery as described by AUTOSAR DDS Service Discovery Protocol specification is to be supported |  |
| DDS shall support the Publisher/Subscriper PARTITION QoS policy, if Partition-based Resource Identification as described by AUTOSAR DDS Service Discovery Protocol specification is to be supported |  |

### 33. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 34. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 35. Traceable item history of this document according to AUTOSAR Release R24-11

### 36. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 37. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| DDS Compliance |  |
| DDS standard serialization rules |  |
| DDS payload serialization rules |  |
| DDS Quality of Service |  |
| The DDS AUTOSAR components receive unserialized data |  |
| Type Definition |  |
| Customization |  |
| Security mechanism |  |
| Safety mechanism |  |
| Publish |  |
| Subscribe |  |
| Transport protocol |  |
| RTPS message encapsulation |  |
| RTPS message decapsulation |  |

### 38. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 39. Traceable item history of this document according to AUTOSAR Release R23-11

### 40. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| DDS Compliance |  |
| DDS standard serialization rules |  |
| DDS payload serialization rules |  |
| DDS Quality of Service |  |
| The DDS AUTOSAR components receive unserialized data |  |
| Type Definition |  |
| Customization |  |
| Security mechanism |  |
| Safety mechanism |  |
| Publish |  |
| Subscribe |  |
| Transport protocol |  |
| RTPS message encapsulation |  |
| RTPS message decapsulation |  |

### 41. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 42. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 43. Traceable item history of this document according to AUTOSAR Release R22-11

### 44. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| DDS Compliance |  |
| DDS standard serialization rules |  |
| DDS payload serialization rules |  |
| DDS Quality of Service |  |
| Type Definition |  |
| Customization |  |
| Security mechanism |  |
| Safety mechanism |  |
| Publish |  |
| Subscribe |  |
| Transport protocol |  |
| RTPS message encapsulation |  |
| RTPS message decapsulation |  |
| The DDS AUTOSAR components receive unserialized data |  |

### 45. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 46. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none
