# Requirements on Watchdog Driver (`WatchdogDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 197 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_WatchdogDriver_197\AUTOSAR_CP_RS_WatchdogDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_WatchdogDriver_197\AUTOSAR_CP_RS_WatchdogDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_WatchdogDriver_197\zzgen\CP_RS_WatchdogDriver.complete.txt`

## 文档简介

This document specifies requirements on the module Watchdog Driver.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the module Watchdog Driver.

### 2. Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

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

### 5. Requirement 结构
*原文标题：Requirement structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

Functional Requirements:

* Configuration (which elements of the module need to be configurable)
* Initialisation
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

Non-Functional Requirements:

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling,...)
* ...

### 6. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to SRS WatchdogDriver that are not included in the AUTOSAR Glossary .

| Acronym / Abbreviation | Description: |
|---|---|
| CS | Chip select |
| DIO | Digital Input Output |
| ECU | Electric Control Unit |
| EOL | End Of Line |

Often used in the term 'EOL Programming' or 'EOL Configuration'
| HIS | Herstellerinitiative Software |
|---|---|
| ICU | Interrupt Capture Unit |
| MAL | Old name of Microconroller Abstraction Layer (replaced by MCAL because 'MAL' is a french term meaning 'bad') |
| MCAL | Microconroller Abstraction Layer |
| MCU | Microcontroller Unit |
| MMU | Memory Management Unit |
| Master | A device controlling other devices (slaves, see below) |
| Slave | A device beeing completely controlled by a master device |
| NMI | Non maskable interrupt |
| OS | Operating System |
| PLL | Phase Locked Loop |
| PWM | Pulse Width Modulation |
| RX | Reception (in the context of bus communication) |
| SPAL | The name of this working group |
| SFR | Special Function Register |
| RTE | Runtime environment |
| WP | Work Package |
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

### 7. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Watchdog.

### 8. 功能概述
*原文标题：Functional Overview*

### 9. Internal Watchdog 驱动
*原文标题：Internal Watchdog Driver*

The Internal Watchdog Driver controls the internal watchdog timer of the MCU. It offers the trigger functionality and a mode select service.

### 10. External Watchdog 驱动
*原文标题：External Watchdog Driver*

The External Watchdog Driver controls an external hardware watchdog. It offers the trigger functionality and a mode select service. It has the same functional scope like the internal watchdog driver.

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. Internal Watchdog 驱动
*原文标题：Internal Watchdog Driver*

### 13. 配置
*原文标题：Configuration*

The watchdog driver shall allow the static configuration of watchdog modes
⌈
| Description: | The watchdog driver shall allow the static configuration of watchdog modes. A watchdog mode shall minimally consist of the desired watchdog period. Any MCU specific parameter can be added. |
|---|---|

Further explanation: Each watchdog mode has the same set of parameters, values will differ.
| Rationale: | For mode switching. |
|---|---|

Applies To:
| Dependencies: | Watchdog mode selection service |
|---|---|
| Use Case: | Other mode parameters could be: |

* selection of window / timeout mode
* timeout reaction (reset or NMI)
| Supporting Material: | BMW Specification MCAL V1.0a, REQ MAL31.1.2 |
|---|---|

⌋

### 14. 初始化
*原文标题：Initialization*

The watchdog driver shall provide an initialization service that allows the selection of one of the statically configured watchdog modes
⌈
| Description: | The watchdog driver shall provide an initialization service that allows the selection of one of the statically configured watchdog modes. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The disabling of the watchdog shall not be possible
⌈
| Description: | The watchdog initialization service and the watchdog mode selection service must not allow the disabling of the watchdog. |
|---|---|

This requirement is only applicable for safety relevant systems. For that reason, this feature shall be statically configurable (by a preprocessor switch)
| Rationale: | Avoid the presence of code sequences in a safety relevant ECU that disable the watchdog. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Usage within safety relevant systems. |
| Supporting Material: | - |

⌋

### 15. Normal Operation

The watchdog driver shall provide a service for selecting the watchdog mode
⌈
| Description: | The watchdog driver shall provide a service for selecting the watchdog mode: |
|---|---|

* Fast mode (mandatory)
* Slow mode (optional)
* Off (optional)
| Rationale: | Allow adaptation of watchdog behavior to ECU state. |
|---|---|

Applies To:
| Dependencies: | Configuration of watchdog modes |
|---|---|
| Use Case: | Allow switching of different timeout periods for start-up and run mode: |

* ECU Start-up mode: Slow mode (long timeout period)
* ECU Run mode: Fast mode (short timeout period)
| Supporting Material: | It is not required for each microcontroller to provide all modes. Some watchdogs do not allow mode changes once they have been set up. |
|---|---|

⌋

 The watchdog driver shall provide a watchdog trigger routine.
⌈
| Description: | The watchdog driver shall provide a watchdog trigger routine. This routine shall allow data exchange with the watchdog device (to and from) |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | As long as the watchdog trigger condition is valid, this routine shall re-trigger the watchdog to keep it from expiring. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 关机 Operation
*原文标题：Shutdown Operation*

A Deinit function is not provided for the watchdog driver due to safety reasons and because most watchdogs do not allow a deactivation. Thus,  Driver module deinitialization is not valid for this module.

### 17. External Watchdog 驱动
*原文标题：External Watchdog Driver*

### 18. 通用
*原文标题：General*

For an external watchdog driver the same requirements shall apply like for an internal watchdog driver
⌈
| Description: | For an external watchdog driver the same requirements shall apply like for an internal watchdog driver. |
|---|---|
| Rationale: | Make no functional differences between internal and external watchdog. Keep the functional scope the same. |

Applies To:
| Dependencies: | Requirements on internal watchdog driver |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 19. 配置
*原文标题：Configuration*

A driver for an external SPI watchdog shall allow the static configuration of the required SPI parameters
⌈
| Description: | A driver for an external SPI watchdog shall allow the static configuration of the required SPI parameters. |
|---|---|

Those parameters are specified by the SPI Handler specification.
| Rationale: | Basic configuration of SPI access |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Use the SPI watchdog driver together with other SPI device drivers on the same SPI bus. |
| Supporting Material: | AUTOSAR SWS SPI Handler |

⌋

### 20. Non-Functional 需求
*原文标题：Non-Functional Requirements*

### 21. External Watchdog 驱动
*原文标题：External Watchdog Driver*

The external watchdog driver shall have a semantically identical API as an internal watchdog driver
⌈
| Description: | The external watchdog driver shall have a semantically identical API as an internal watchdog driver. |
|---|---|
| Rationale: | Ease control of watchdogs by the Watchdog Manager. Keep handling of internal and external Watchdogs similar. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Use the same Watchdog manager with an internal or with an external watchdog driver. |
| Supporting Material: | - |

⌋

 The source code of the external watchdog driver shall be independent from the underlying microcontroller
⌈
| Description: | The source code of the external watchdog driver shall be independent from the underlying microcontroller. |
|---|---|
| Rationale: | Reuse of external watchdog driver across multiple microcontrollers |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Example: The same external watchdog driver for an SPI watchdog device can be used on a NEC V850 and on a Renesas M16C without any modification using the standardized SPI Handler interface. |
| Supporting Material: | - |

⌋

### 22. References

### 23. 附录
*原文标题：Appendix*

### 24. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 25. Traceable item history of this document according to AUTOSAR Release R25-11

### 26. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 27. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 28. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 29. Traceable item history of this document according to AUTOSAR Release R24-11

### 30. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 31. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 32. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 33. Traceable item history of this document according to AUTOSAR Release R23-11

### 34. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 35. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 36. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 37. Traceable item history of this document according to AUTOSAR Release R22-11

### 38. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

none

### 39. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 40. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none
