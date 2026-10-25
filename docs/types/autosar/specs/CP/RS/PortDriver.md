# Requirements on Port Driver (`PortDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 196 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_PortDriver_196\AUTOSAR_CP_RS_PortDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_PortDriver_196\AUTOSAR_CP_RS_PortDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_PortDriver_196\zzgen\CP_RS_PortDriver.complete.txt`

## 文档简介

This document specifies requirements on the module PORT Driver.

## 章节详细内容

### 1. 范围 of document
*原文标题：Scope of document*

This document specifies requirements on the module PORT Driver.

### 2. Constraints

First scope for specification of requirements on basic software modules is systems, which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 3. How to Read this Document

### 4. Conventions used

* The representation of requirements in AUTOSAR documents follows the table specified in , see .
* In requirements, the following specific semantics are used

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 需求结构
*原文标题：Requirements structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

### 6. 功能性需求
*原文标题：Functional Requirements*

* Configuration (which elements of the module need to be configurable)
* Initialisation
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

### 7. Non-Functional 需求
*原文标题：Non-Functional Requirements*

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling,...)
* ...

### 8. 缩略语
*原文标题：Acronyms and abbreviations*

Acronyms and abbreviations that have a local scope are not contained in the AUTOSAR glossary . These must appear in a local glossary.

| Acronym: | Description: |
|---|---|
| ADC | Analogue to Digital Converter |
| DIO | Digital Input Output |
| ICU | Input Capture Unit |
| MCAL | Microconroller Abstraction Layer |
| MCU | Microcontroller Unit |
| OS | Operating System |
| PWM | Pulse Width Modulation |
| SCI | Serial Communication Interface |
| SPAL | The name of this working group (Standard Peripheral Abstraction Layer) |
| SPI | Serial Peripheral Interface |
| WP | Work Package |

| Abbreviation: | Description: |
|---|---|
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

As this is a document from professionals for professionals, all other terms are expected to be known.

### 9. Requirement 规范
*原文标题：Requirement Specification*

This chapter describes all requirements driving the work to define the Port Driver.

### 10. 功能概述
*原文标题：Functional Overview*

This module initializes the whole port structure of the microcontroller. Many ports and port pins can be assigned to various functionalities like e.g.

* General purpose I/O
* ADC
* SPI
* SCI
* PWM

For this reason there has to be an overall configuration and initialization of this port structure. The configuration and usage of those port pins is microcontroller and ECU dependent.

The following expressions are used within the Port driver:

| Expression: | Explanation: |
|---|---|
| Physical Level (Input): | Two states possible: LOW/HIGH |
| Physical Level (Output): | three states possible: LOW/HIGH/High Impedance |
| Logical Level: | This level is seen within the software: TRUE/FALSE |

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. 配置
*原文标题：Configuration*

The Port driver shall allow the static configuration of the following options for each port
⌈
| Description: | The Port driver shall allow the static configuration of the following options for each port. The granularity of configuration (whole port or single port pin) is microcontroller dependent. |
|---|---|

Mandatory parameters:

* Pin usage (e.g. DIO, ADC, SPI, ...)
* Pin direction (input, output)
* Pin level init value
* Pin direction changeable during runtime (yes/no)

Optional parameters (only if supported by hardware):

* Activation of internal pull-ups/pull-downs
* Slew rate control
* Input thresholds
* Pin driver mode (push-pull/open drain)
* Further microcontroller specific properties

Level inversion features shall not be configurable, but be set to the default value (not inverted).

Level inversion is task of the I/O Hardware Abstraction.
| Rationale: | Basic configuration; |
|---|---|

Pin direction changeable during runtime: this is information necessary for port refreshing and runtime direction change, see  Set port pin direction and  Refresh port direction.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Normal Operation

The Port driver shall provide a service for setting the direction of port pins during runtime
⌈
| Description: | The Port driver shall provide a service for setting the direction of port pins during runtime. |
|---|---|

The Port driver shall only allow to change the direction of those port pins that are configured as changeable.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | Configuration of port pin properties |
|---|---|
| Use Case: | Single wire bidirectional communication with ASICs. |
| Supporting Material: | - |

⌋

 The Port driver shall provide a service to refresh the direction of all configured ports
⌈
| Description: | The Port driver shall provide a service to refresh the direction of all configured ports to the configured direction. |
|---|---|

The Port driver shall exclude those port pins from refreshing that are configured as "pin direction changeable during runtime".
| Rationale: | Make system more robust against EMC and application software bugs (port data direction register corruption). |
|---|---|

Applies To:
| Dependencies: | Configuration of port pin properties |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 14. Non-Functional 需求
*原文标题：Non-Functional Requirements*

All re-entrant functions of the Port Driver shall perform port register access actions in an atomic way
⌈
| Description: | All re-entrant functions of the Port Driver shall perform port register access actions in an atomic way. |
|---|---|
| Rationale: | Avoid data integrity problems within concurrent access of Port Driver API functions. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A specific microcontroller (or a specific compiler) does not provide atomic access to single port pins. For that reason, the implementation has to use read-modify-write operations on the whole port. Concurrent access to pins of the same port will lead to data integrity problems if concurrent access it not blocked. |
| Supporting Material: | - |

⌋

### 15. Process 需求
*原文标题：Process Requirements*

Ports and port pins that are not used shall be set to a defined state
⌈
| Description: | Ports and port pins that are not used (neither as general purpose I/O nor as special purpose I/O) shall be set to a defined state by the Port module configuration. |
|---|---|
| Rationale: | Ensure that all ports and port pins are in a defined state. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 16. References

### 17. 附录
*原文标题：Appendix*

### 18. Change history of AUTOSAR traceable items

### 19. Traceable item history of this document according to AUTOSAR Release R25-11

### 20. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 21. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 22. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 23. Traceable item history of this document according to AUTOSAR Release R24-11

### 24. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 25. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| The Port driver shall allow the static configuration of the following options for each port |  |
| The port driver shall allow the static configuration of the port pin names |  |

### 26. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 27. Traceable item history of this document according to AUTOSAR Release R23-11

### 28. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 29. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| The Port driver shall allow the static configuration of the following options for each port |  |
| Ports and port pins that are not used shall be set to a defined state |  |
| The port driver shall allow the static configuration of the port pin names |  |
| The Port driver shall provide a service for setting the direction of port pins during runtime |  |
| The Port driver shall provide a service to refresh the direction of all configured ports |  |
| All re-entrant functions of the Port Driver shall perform port register access actions in an atomic way |  |

### 30. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
