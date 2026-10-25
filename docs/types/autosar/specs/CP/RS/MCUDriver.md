# Requirements on MCU Driver (`MCUDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 195 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_MCUDriver_195\AUTOSAR_CP_RS_MCUDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_MCUDriver_195\AUTOSAR_CP_RS_MCUDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_MCUDriver_195\zzgen\CP_RS_MCUDriver.complete.txt`

## 文档简介

This document specifies requirements on the module MCU Driver.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the module MCU Driver.

### 2. Constraints

First scopes for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 3. Conventions to be used

### 4. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

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

### 6. 功能性需求：
*原文标题：Functional Requirements:*

* Configuration (which elements of the module need to be configurable)
* Initialisation
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

### 7. Non-Functional 需求：
*原文标题：Non-Functional Requirements:*

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling,...)
* ...

### 8. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to MCUDriver that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| CS | Chip select |
| DIO | Digital Input Output |
| ECU | Electric Control Unit |
| EOL | End Of Line |

Often used in the term 'EOL Programming' or 'EOL Configuration'
| ICU | Interrupt Capture Unit |
|---|---|
| MAL | Old name of Microcontroller Abstraction Layer (replaced by MCAL because 'MAL' is a french term meaning 'bad') |
| MCAL | Microcontroller Abstraction Layer |
| MCU | Microcontroller Unit |
| MMU | Memory Management Unit |
| Master | A device controlling other devices (slaves, see below) |
| Slave | A device beeing completely controlled by a master device |
| NMI | Non maskable interrupt |
| OS | Operating System |
| PLL | Phase Locked Loop |
| PWM | Pulse Width Modulation |
| RX | Reception (in the context of bus communication) |
| SPAL | The name of this working group (Standard Peripheral Abstraction Layer) |
| SFR | Special Function Register |
| RTE | Runtime environment |
| WP | Work Package |

| Abbreviation: | Description: |
|---|---|
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the MCU Driver.

### 10. 功能概述
*原文标题：Functional Overview*

The MCU Driver  provides services for basic microcontroller initialization, power down functionality, reset and microcontroller specific functions required from other MCAL software modules. The initialization services allow a flexible and application related MCU initialization in addition to the start-up code (see figure below). The start-up code is very MCU specific. The provided start-up code description in this document is for guidance and implies functionality, which have to be taken into account before standardized MCU initialization is able to start.

The MCU driver accesses the microcontroller hardware directly and is located in the Microcontroller Abstraction Layer (MCAL).

MCU driver Features:

* Describe set up required to configure a functionality that is not presently covered by another MCAL module e.g. global clock settings
* Set up off PLL and MCU clock distribution
* Service for RAM section initialization
* Setting of MCU dependent configuration control bits not covered by general SPAL requirements
* Activation of μC reduced power modes
* Perform a μC reset
* Get the reset reason from hardware

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. 配置 and 初始化
*原文标题：Configuration and Initialization*

Low Power Mode Configuration
⌈
| Description: | The configuration setting of Low Power Modes is completely microcontroller specific. It shall be possible to configure the different modes supported by the hardware and required by the application. |
|---|---|
| Rationale: | Reduce power consumption of the MCU depending on application needs |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The MCU Driver shall allow the static configuration of RAM segments that are initialized during start-up
⌈
| Description: | The MCU Driver shall allow the static configuration of RAM segments that are initialized during start-up. |
|---|---|
| Rationale: | Allow to define which segments of RAM are initialized (zeroed-out) and which not. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Allow to save data in specific RAM segments over a reset. |
| Supporting Material: | - |

⌋

 The MCU Driver shall provide a service to initialize the contents of configured RAM sections
⌈
| Description: | The MCU Driver shall provide a service to initialize the contents of configured RAM sections. |
|---|---|

RAM sections that are not configured to be initialized shall not be touched.
| Rationale: | Defined RAM contents after ECU start-up. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Normal Operation

The MCU Driver shall provide a service for querying the standardized reset reason
⌈
| Description: | The MCU Driver shall provide a service for querying the reset reason. The following standardized reset reasons shall be distinguished (if supported by hardware): |
|---|---|

* Power On Reset (default return value)
* External Hard Reset
* Internal Watchdog Timer Reset
* Other reset reasons
| Rationale: | Different reset reasons may require different actions during the initialization phase. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Information for ECU state manager (e.g. decide what start-up sequence is chosen). |
| Supporting Material: | Note: The reset reasons listed above are not required to be implemented in each microcontroller device. If a microcontroller does not have the ability to distinguish between multiple reset reasons, the default value shall be "Power On Reset". |

⌋

 The MCU driver shall provide a service that allows to query the raw reset status
⌈
| Description: | The MCU driver shall provide a service that allows to query the reset reason. This service shall return the full, raw and μC specific reset information. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Fault operation

The MCU driver shall provide a notification of failure of the clock source
⌈
| Description: | The MCU driver shall provide a notification in order to report failure conditions for the clock source when a failure has occurred with the clock generation in the MCU. The notification shall be provided if MCU is able to detect these kind of failures. As the Diagnostic Event Manager will interface to this function, the notification shall not be called during startup phase. |
|---|---|
| Rationale: | Once a fault is detected a choice of recovery may be desired. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Loss of crystal recovery and orderly shutdown |
| Supporting Material: | - |

⌋

### 15. 关机 operation
*原文标题：Shutdown operation*

The MCU driver shall provide a service to activate MCU power saving modes of the μC
⌈
| Description: | The MCU driver shall provide a service to activate MCU power saving modes of the μC. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | The upper layer intends to enter ECU reduced power mode. The upper layer is calling the MCU driver to activate the appropriate MCU setting. |
| Supporting Material: | Note: The MCU modes Low Power Modes are not required to be implemented in each microcontroller device. |

⌋

### 16. Remarks

This chapter  has many types of functionality gathered together to solve a problem of correct initialization following recovery from an MCU power saving mode or a reset.

A configuration tool is very important for the correct implementation of this functionality and may need to be part of the final solution.

### 17. References

### 18. 附录
*原文标题：Appendix*

### 19. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 20. Traceable item history of this document according to AUTOSAR Release R25-11

### 21. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 22. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 23. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
