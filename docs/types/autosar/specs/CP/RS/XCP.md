# Requirements on Module XCP (`XCP`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 429 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_XCP_429\AUTOSAR_CP_RS_XCP.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_XCP_429\AUTOSAR_CP_RS_XCP.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_XCP_429\zzgen\CP_RS_XCP.complete.txt`

## 文档简介

This document defines general rules and formats for requirements specification within AUTOSAR. It shall be used as a basis for each requirements document.

The AUTOSAR Requirements on XCP specifies the XCP feature-set, which shall be supported by the AUTOSAR XCP Software Specification document.

A detailed list can be found on .

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document defines general rules and formats for requirements specification within AUTOSAR. It shall be used as a basis for each requirements document.

The AUTOSAR Requirements on XCP specifies the XCP feature-set, which shall be supported by the AUTOSAR XCP Software Specification document.

A detailed list can be found on .

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see Standardization Template, chapter Support for Traceability ().

In requirements, the following specific semantics shall be used (based on the Internet Engineering Task Force IETF).

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 需求规范
*原文标题：Requirements Specification*

### 4. 功能概述
*原文标题：Functional Overview*

XCP is an ASAM standard for calibration purpose of an ECU. This protocol provides the following functionality:

### 5. XCP provides the following 基础 features：
*原文标题：XCP provides the following basic features:*

* Synchronous data acquisition
* Synchronous data stimulation
* Online memory calibration (read / write access)
* Calibration data page initialization and switching
* Flash Programming for ECU development purposes
* Various transportation layers (CAN, Ethernet (TCP/IP, UDP), USB,...)
* Block communication mode
* Interleaved communication mode
* Dynamic data transfer configuration
* Timestamped data transfer
* Synchronization of data transfer
* Priorization of data transfer
* Atomic bit modification
* Bitwise data stimulation

### 6. XCP improves the following features compared to CCP 2.1：
*原文标题：XCP improves the following features compared to CCP 2.1:*

* Compatibility and specification
* Efficiency and throughput
* Power-up data transfer
* Data page freezing
* Auto configuration
* Flash programming.

### 7. XCP was designed according to the following principles：
*原文标题：XCP was designed according to the following principles:*

* Minimal Slave resource consumption (RAM, ROM, runtime)
* Efficient communication
* Simple Slave implementation

### 8. 功能性需求
*原文标题：Functional Requirements*

### 9. 通用
*原文标题：General*

The AUTOSAR XCP module shall be located above the PduR
  Status: DRAFT
  Replaces:
⌈
| Description: | Within the AUTOSAR layered architecture, the AUTOSAR XCP module shall be located above the PduR. |
|---|---|
| Rationale: | Due to performance reason, the AUTOSAR XCP is located as low as possible within the layered architecture. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | BSW Layered Software Architecture |

⌋

 The AUTOSAR XCP shall make use of the data transmit- and receive APIs of the PduR
  Status: DRAFT
  Replaces:
⌈
| Description: | For sending and transmission of XCP Messages, the corresponding APIs provided by the PduR shall be used |
|---|---|
| Rationale: | Usage of available APIs |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Transmit and receive XCP Messages |
| Supporting Material: | PDU-Router |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Features

The code generator of the XCP Module shall generate the A2L `IF_DATA` section
⌈
| Description: | The code generator of the XCP Module shall generate the A2L IF_DATA section, based on the configuration of XCP. |
|---|---|
| Rationale: | The configuration information of the XCP Slave (AUTOSAR XCP Module) |

should also be used for the configuration of the XCP Master.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Ensure consistency of XCP Master and XCP Slave configuration. |
| Supporting Material: | http://www.asam.net/doc_int/getfile/getfile.php?id=240&memberlogin= |

⌋

 The slave shall transfer the contents of the elements defined in each ODT of the DAQ-list to the master
⌈
| Description: | The slave has to transfer the contents of the elements defined in each ODT of the DAQ-list to the master. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Calibration purpose |
| Supporting Material: | http://www.asam.net/doc_int/getfile/getfile.php?id=238&memberlogin= |

⌋

 Synchronous Data Stimulation shall be the inverse mode of Synchronous Data Acquisition
⌈
| Description: | Synchronous Data Stimulation is the inverse mode of Synchronous Data Acquisition. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 初始化
*原文标题：Initialisation*

The AUTOSAR XCP module shall implement an interface for initialization.
⌈
| Description: | The AUTOSAR XCP module implements an interface for initialization. |
|---|---|

This service shall initialize all global variables of the module.
| Rationale: | Basic functionality. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Set the AUTOSAR XCP module into a defined state |
| Supporting Material: | - |

⌋

### 12. Normal Operation

The AUTOSAR XCP module shall operate as described within the ASAM XCP Specification Version 1.1. Please refer to http://www.asam.net/doc_int/getfile/getfile.php?id=238&memberlogin=.

### 13. 关机 Operation
*原文标题：Shutdown Operation*

The AUTOSAR XCP module shall operate as described within the ASAM XCP Specification Version 1.1. Please refer to http://www.asam.net/doc_int/getfile/getfile.php?id=238&memberlogin=.

### 14. Fault Operation

The AUTOSAR XCP module shall operate as described within the ASAM XCP Specification Version 1.1. Please refer to http://www.asam.net/doc_int/getfile/getfile.php?id=238&memberlogin=.

### 15. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

Not applicable.

### 16. References

### 17. 附录
*原文标题：Appendix*

### 18. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 19. Requirement History of this Document According to AUTOSAR Release R22-11

### 20. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

| Number | Heading |
|---|---|
| The AUTOSAR XCP module shall be located above the bus interfaces / Socket Adaptor |  |
| The AUTOSAR XCP shall make use of the data transmit- and receive APIs of the Bus Interfaces |  |
| The AUTOSAR XCP messages shall be identified by unique PDU-IDs |  |
| The XCP Specification Version 1.1 shall be used |  |
| XCP on CAN shall be supported |  |
| XCP on FlexRay shall be supported |  |
| XCP on Ethernet shall be supported |  |
| The code generator of the XCP Module shall generate the A2L IF_DATA section |  |
| The slave shall transfer the contents of the elements defined in each ODT of the DAQ-list to the master |  |
| Synchronous Data Stimulation shall be the inverse mode of Synchronous Data Acquisition |  |
| Multiple direct successive packets without acknowledge shall be sent / received |  |
| The XCP master shall already send the next request before having received the response on the previous request |  |
| It shall be possible to configure the DAQ Lists dynamically |  |
| It shall be possible to transmit a timestamp within the XCP packet |  |
| It shall be possible to bypass data by making use of Synchronous Data Acquisition and Synchronous Data Stimulation simultaneously |  |
| The feature "Seed&Key" shall be used |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

none

### 22. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

none

### 23. Requirement History of this Document According to AUTOSAR Release R23-11

### 24. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| The AUTOSAR XCP module shall be located above the bus interfaces / Socket Adaptor |  |
| The AUTOSAR XCP shall make use of the data transmit- and receive APIs of the Bus Interfaces |  |
| The AUTOSAR XCP messages shall be identified by unique PDU-IDs |  |
| The XCP Specification Version 1.1 shall be used |  |
| XCP on CAN shall be supported |  |
| XCP on FlexRay shall be supported |  |
| XCP on Ethernet shall be supported |  |
| The code generator of the XCP Module shall generate the A2L IF_DATA section |  |
| The slave shall transfer the contents of the elements defined in each ODT of the DAQ-list to the master |  |
| Synchronous Data Stimulation shall be the inverse mode of Synchronous Data Acquisition |  |
| Multiple direct successive packets without acknowledge shall be sent / received |  |
| The XCP master shall already send the next request before having received the response on the previous request |  |
| It shall be possible to configure the DAQ Lists dynamically |  |
| It shall be possible to transmit a timestamp within the XCP packet |  |
| It shall be possible to bypass data by making use of Synchronous Data Acquisition and Synchronous Data Stimulation simultaneously |  |
| The feature "Seed&Key" shall be used |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 26. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 27. Requirement History of this Document According to AUTOSAR Release R24-11

### 28. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| The AUTOSAR XCP module shall be located above the PduR |  |
| The AUTOSAR XCP shall make use of the data transmit- and receive APIs of the PduR |  |

### 29. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| The AUTOSAR XCP module shall be located above the bus interfaces / Socket Adaptor |  |
| The AUTOSAR XCP shall make use of the data transmit- and receive APIs of the Bus Interfaces |  |
| The AUTOSAR XCP messages shall be identified by unique PDU-IDs |  |

### 30. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 31. Requirement History of this Document According to AUTOSAR Release R25-11

### 32. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 33. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 34. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

| Number | Heading |
|---|---|
| The AUTOSAR XCP module shall be located above the bus interfaces / Socket Adaptor |  |
| The AUTOSAR XCP shall make use of the data transmit- and receive APIs of the Bus Interfaces |  |
| The XCP shall provide a feature to enable and disable communication on specific channel |  |
