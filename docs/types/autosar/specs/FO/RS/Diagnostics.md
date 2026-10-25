# Requirements on Diagnostics (`Diagnostics`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 004 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_Diagnostics_004\AUTOSAR_FO_RS_Diagnostics.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_Diagnostics_004\AUTOSAR_FO_RS_Diagnostics.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_Diagnostics_004\zzgen\FO_RS_Diagnostics.complete.txt`

## 文档简介

This document specifies system requirements of AUTOSAR Diagnostic. It is meant to be independent of any particular implementation and it contains foundation requirements, common to AUTOSAR Classic and Adaptive Platform, as well as requirements specific to Classic Platform and Adaptive Platform.

In the Classic Platform chapter the handling of the legislated OBD and enhanced Diagnostics shall be achieved. As far as possible the set of diagnostic basic software elements should consist of already existing elements of modules of automotive software. Only in case of good reasons valid elements of basic software should be part of the set. If such the definition of these valid elements is not part of this work package. Nevertheless the information about basic software elements additionally required shall be given to related work groups.

In the Adaptive Platform chapter, some constraints should be notify related to the Adaptive environment: - only support for Ethernet as physical communication infrastructure will be provided, and no other typical bus communication is planned for release 1.0; on these grounds, all classical SRS Diagnostics requirements referring to standards (i.e. J1939) c

## 章节详细内容

### 1. 范围 of the Document
*原文标题：Scope of the Document*

This document specifies system requirements of AUTOSAR Diagnostic. It is meant to be independent of any particular implementation and it contains foundation requirements, common to AUTOSAR Classic and Adaptive Platform, as well as requirements specific to Classic Platform and Adaptive Platform.

In the Classic Platform chapter the handling of the legislated OBD and enhanced Diagnostics shall be achieved. As far as possible the set of diagnostic basic software elements should consist of already existing elements of modules of automotive software. Only in case of good reasons valid elements of basic software should be part of the set. If such the definition of these valid elements is not part of this work package. Nevertheless the information about basic software elements additionally required shall be given to related work groups.

In the Adaptive Platform chapter, some constraints should be notify related to the Adaptive environment: - only support for Ethernet as physical communication infrastructure will be provided, and no other typical bus communication is planned for release 1.0; on these grounds, all classical SRS Diagnostics requirements referring to standards (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| CAN | Controller Area Network (communication bus) |
| DEM | Diagnostic Event Manager |
| DID | Diagnostic Identifier |
| DM | Diagnostic Management |
| DoIP | Diagnostic over IP - transport protocol for diagnostic services standardized as ISO 13400 |
| DTC | Diagnostic Trouble Code |
| ECU | Electronic Control Unit |
| IDL | Interface Description Language |
| OBD | On-board Diagnostic (standardized as ISO 15031) |
| RTE | Runtime Environment |
| SA | Source Address (diagnostics address of the tester) |
| SID | Service Identifier (hexa number to uniquely identify UDS services) |
| 0x22 for Read Data by Identifier service |  |
| 0x2E for Write to Non-Volatile memory service |  |
| SWC | Software Component (could refer either to Classic Platform SW-C or to Adaptive Platform SW-C) |
| TA | Target Address (diagnostic address of the ECU) |
| UDS | Unified Diagnostic Specification standardized as ISO 14229 |

### 3. Conventions to be used

In requirements, the following specific semantics are used :

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* SHOULD: This word, or the adjective "RECOMMENDED", means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求规范
*原文标题：Requirements Specification*

### 5. Common 诊断需求 for Classic and Adaptive Platform
*原文标题：Common Diagnostic requirements for Classic and Adaptive Platform*

Support event combination
⌈
| Description: | The diagnostic in AUTOSAR shall allow combining several individual events to trigger a single DTC. |
|---|---|
| Rationale: | Advanced fault analysis |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | Improved clustering and judging of events/faults. Several internal hardware faults of an electronic control unit can be mapped onto a single "ECU internal" failure to reduce the number of Diagnostic Trouble Codes shown to the technician in the service workshop. |

Supporting Material:
⌋

 Support the primary fault memory defined by ISO 14229-1
⌈
| Description: | The diagnostic in AUTOSAR shall support the primary fault memory defined by ISO 14229-1. |
|---|---|
| Rationale: | Storage of fault information for workshops. |
| Applies To: | CP, AP |
| Dependencies: | Production line, garage after reparation,... |
| Use Case: | The primary fault memory is used to store fault information that is related to defects in the vehicle and helps the workshops to identify the fault and repair it. |
| Supporting Material: | - |

⌋

 Support the user defined fault memories defined by ISO 14229-1
⌈
| Description: | The diagnostic in AUTOSAR shall support the user defined fault memories defined by ISO 14229-1. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 诊断需求 for the Classic Platform
*原文标题：Diagnostic requirements for the Classic Platform*

### 7. 功能性需求
*原文标题：Functional Requirements*

The DEM module shall support DTCs according to SAE J1939
⌈
| Description: | The DEM module shall support DTCs according to SAE J1939-73. |
|---|---|
| Rationale: | Support of SAE J1939-73 |
| Applies To: | CP |
| Dependencies: | DEM, J1939DCM |
| Use Case: | Diagnostics in HDV, HD-OBD |
| Supporting Material: | - |

⌋

 Support subfunction 0x42 of UDS service 0x19
⌈
| Description: | The diagnostic in AUTOSAR shall support subfunction 0x42 of UDS service 0x19 to retrieve WWH-OBD-specific DTCs matching the requested DTC status mask and severity mask record. |
|---|---|
| Rationale: | Support of WWH-OBD |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | Improved fault and event tracking and analysis |
| Supporting Material: | Support of WWH-OBD |

⌋

 Provide OBD-specific configuration capabilities
⌈
| Description: | The diagnostic in AUTOSAR shall provide the following configuration capabilities: |
|---|---|

* OBD- ECU kind 1: ECU acts as OBD Master ECU (Master or Primary ECU)
* OBD- ECU kind 2: ECU acts as OBD Slave ECU (Dependent / Secondary ECU)
* OBD- ECU kind 3: ECU acts as non-OBD ECU

The diagnostic in AUTOSAR shall both provide corresponding configuration parameters to switch on/switch off module-specific OBD functionality.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Fault 存储管理
*原文标题：Fault Memory Management*

The Diagnostic event (fault) management shall be established as Basic SW Module
⌈
| Description: | The Diagnostic event (error) management shall be a Basic SW Module described in the Diagnostic WP. Diagnostic event (error) management is out of scope for Mode Management. |
|---|---|
| Rationale: | SW Architecture |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | Improved fault and event tracking and analysis for Service, assembly line, OBD-SCAN-Tool |
| Supporting Material: | - |

⌋

 Classification of events for series production, OBD and expert usage
⌈
| Description: | The diagnostic in AUTOSAR shall support a classification of events for the following types of events: |
|---|---|

* Events that are defined for error analysis in the service station shall be stored in the primary event memory.
* Events that are defined for detailed error analysis by experts in the after sale department are stored in the secondary error memory.

Errors that occur during the development process shall be reported to the debugging modules. Therefore, debugging module APIs shall be used which (are not provided by the diagnostic in AUTOSAR).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. DTC and event-related 数据
*原文标题：DTC and event-related data*

Parallel fault memory access
⌈
| Description: | The diagnostic in AUTOSAR shall provide parallel access to the fault memory to various clients. Each client shall be able to access the fault memory independent from other clients. Conflicts occurring during parallel access to shared resources shall be resolved. |
|---|---|
| Rationale: | OEMs require parallel access to diagnostics. |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | * Support of OBD and UDS in parallel |

* Software interacting with secondary ECUs in OBD
* Software components accessing event memory data
| Supporting Material: | - |
|---|---|

⌋

 Independent event memories for multiple diagnostic server instances (virtual ECUs)
⌈
| Description: | The diagnostic in AUTOSAR shall provide multiple sets of independent event memories that can store information independently from each other. |
|---|---|
| Rationale: | Individual assignment of fault memories to dedicated diagnostic servers. |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | ECUs with multiple independent diagnostic servers. Common faults of the host ECU shall be stored in each of the virtual ECU which is affected by such a fault. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 诊断 Communication
*原文标题：Diagnostic Communication*

Handling of different diagnostic sessions in parallel
⌈
| Description: | Handle an established diagnostic communication and a parallel diagnostic access request in parallel. This is necessary to open a diagnostic access with high priority and the controlled shutdown of the established diagnostic access with low priority. |
|---|---|
| Rationale: | To prioritize handling of different diagnostic protocols e.g. OBD and normal diagnostic communication as UDS. |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | An internal vehicle diagnostic tester communication is interrupted by OBD diagnostic access request. |
| Supporting Material: | - |

⌋

 Different diagnostic addresses shall be supported by multiple (physical) channels
⌈
| Description: | Modern ECUs contain more than one functionality (e.g. board computer, instrument cluster). Each functionality shall be addressable by a diagnostic tool with a different diagnostic address. This does not imply that those multiple requests are allowed in parallel. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能 Inhibition 管理器 (FIM)
*原文标题：Function Inhibition Manager (FIM)*

The specification of Software requirements of the function inhibition manager is not a part of this specification. For details, please refer to the `AUTOSAR_FIM_SRS`.

### 12. 诊断需求 for the Adaptive Platform
*原文标题：Diagnostic requirements for the Adaptive Platform*

Several tester conversations in parallel with assigned priorities
⌈
| Description: | The diagnostic in AUTOSAR shall generally support a configurable amount of tester conversations/connections in parallel. Per tester connection, a priority shall be configurable. The priority is assigned to the tester address (SA of the UDS request), which identifies the connection. |
|---|---|
| Rationale: | ECUs in the Adaptive Platform generally have enough resources to handle multiple tester conversations in parallel. |
| Applies To: | AP |
| Dependencies: | - |
| Use Case: | Support for vehicle internal and external testers in parallel, which can not be easily synchronized. |
| Supporting Material: | ISO 14229-1 |

⌋

 Conversation preemption/abortion
⌈
| Description: | The diagnostic in AUTOSAR shall generally support the preemption of a tester conversation in case all configured tester connections are currently active and a new connection of a tester with higher priority than an existing one takes place, it shall abort the lowest priority conversation and accept the new connection/conversation. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 配置
*原文标题：Configuration*

### 14. References

### 15. Deliverables of AUTOSAR

# General Requirements of Basic Software Modules: `AUTOSAR_SRS_BSWGeneral`.pdf
# Specification of the Virtual Functional Bus : `AUTOSAR_EXP_VFB`.pdf
# Software Standardization Template : `AUTOSAR_TPS_StandardizationTemplate`.pdf

### 16. Related standards and norms

### 17. ITEA-EAST

* D1.5-General Architecture; ITEA/EAST-EEA, Version 1.0; chapter 3, page 72 et seq.
* D2.1-Embedded Basic Software Structure Requirements; ITEA/EAST-EEA, Version 1.0 or higher
* D2.2-Description of existing solutions; ITEA/EAST-EEA, Version 1.0 or higher.

### 18. ISO

# ISO 14229-1 Unified diagnostic services (UDS) Part 1: Specification and Requirements (v.2013)
# ISO 15031-5 Communication between vehicle and external equipment for emissions related diagnostics Part 5: Emissions related diagnostic services (2005-01-13)
# ISO 15765-3 Diagnostics on controller area network (CAN) Part 3: Implementation of unified diagnostic services (UDS on CAN) (2004-10-06)
# ISO 15765-4 Diagnostics on controller area network (CAN) Part 4: Requirements for emissions-related systems (2005-01-04)

### 19. 附录
*原文标题：Appendix*

### 20. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 21. Traceable item history of this document according to AUTOSAR Release R25-11

### 22. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| Support of UDS service 0x22 ReadDataByIdentifier |  |
| General validation of UDS requests according to ISO 14229-1 |  |
| UDS Response types |  |
| UDS service CommunicationControl (SID 0x28) |  |
| UDS service EcuReset (SID 0x11) |  |
| UDS service WriteDataByIdentifier (SID 0x2E) |  |

### 23. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| Support a set of SAE J1939 DM-messages |  |

### 24. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 25. Traceable item history of this document according to AUTOSAR Release R24-11

### 26. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| DoIP messages shall be bi-directionally routed |  |
| Valid DoIP messages shall be recognized |  |
| DoIP Vehicle Identification shall be provided |  |
| DoIP diagnostic message shall have a format |  |
| Multiple DoIP sockets shall be allowed on a single port |  |
| DoIP shall be able to access the DHCP host name option. |  |
| DoIP shall implement a mechanism to retrieve diagnostic power mode |  |
| DoIP shall be able to dynamically maintain connection to different testers |  |
| DoIP shall implement a mechanism to retrieve Entity Status |  |
| DoIP shall implement a mechanism to check if diagnostic testers are alive |  |
| DoIP shall implement routing activation mechanism |  |
| DoIP shall support USDT and UUDT messages according to ISO 14229-5 |  |
| TLS for diagnostic communication (DoIP) shall support at least one ciphersuite as defined in ISO13400-2. |  |
| SOVD service request validation |  |
| Variant handling at runtime |  |

### 27. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| Provide confirmation after transmit diagnostic responses to the application |  |
| Uses standard mechanisms provided by persistency modules |  |
| Application access to snapshot record data |  |
| Interact with standard bootloader |  |
| Provide defensive behavior |  |
| Store the current debounce counter value nonvolatile to over a powerdown cycle |  |
| Support DTCFunctionalUnit |  |
| Provide interfaces for monitoring application. |  |
| UDS service request validation |  |
| Provide the ability to handle event specific storage conditions |  |
| Support DTCs suppression |  |
| Client certificate validity |  |
| Client certificate target identification |  |
| Client certificate evaluation |  |
| Logging certificate evaluation |  |

### 28. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

| Number | Heading |
|---|---|
| Configuration of timing parameters |  |
| Independence of clearing DTC status and system degradation |  |

### 29. Traceable item history of this document according to AUTOSAR Release R23-11

### 30. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| Notify applications about the changes of enable conditions |  |
| Support of Transmit Certificate |  |
| Support of secure data coding |  |

### 31. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 32. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
