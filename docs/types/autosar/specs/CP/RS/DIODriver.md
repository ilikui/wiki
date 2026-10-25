# Requirements on DIO Driver (`DIODriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 191 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_DIODriver_191\AUTOSAR_CP_RS_DIODriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_DIODriver_191\AUTOSAR_CP_RS_DIODriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_DIODriver_191\zzgen\CP_RS_DIODriver.complete.txt`

## 文档简介

This document specifies requirements on the module DIO Driver.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the module DIO Driver.

### 2. Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 3. Conventions to be used

### 4. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 5. 需求指南
*原文标题：Requirements Guidelines*

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* SHOULD: This word, or the adjective "RECOMMENDED", means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Requirement 结构
*原文标题：Requirement structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

### 7. 功能性需求
*原文标题：Functional Requirements*

* Configuration (which elements of the module need to be configurable)
* Initialisation
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

### 8. Non-Functional 需求
*原文标题：Non-Functional Requirements*

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling,...)
* ...

### 9. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to DIO Driver that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| CS | Chip select |
| EOL | End Of Line |

Often used in the term 'EOL Programming' or 'EOL Configuration'
| MAL | Old name of Microcontroller Abstraction Layer (replaced by MCAL because 'MAL' is a french term meaning 'bad') |
|---|---|
| Master | A device controlling other devices (slaves, see below) |
| Slave | A device being completely controlled by a master device |
| NMI | Non maskable interrupt |
| PLL | Phase Locked Loop |
| RX | Reception (in the context of bus communication) |
| SPAL | The name of this working group |
| SFR | Special Function Register |
| WP | Work Package |
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

### 10. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the DIO Driver.

### 11. 功能概述
*原文标题：Functional Overview*

The DIO driver provides port and channel based read and write access to the internal general purpose I/O ports. The read and write behavior is unbuffered. The basic behavior of this driver is synchronous.

The following expressions are used within the DIO driver:

| Expression | Explanation |
|---|---|
| DIO channel | Represents a single general-purpose digital input/output pin |
| DIO port | Represents multiple DIO channels that are grouped by hardware and accessible synchronously (typically controlled by one hardware register). |

Example: Port A (8 bit) of Freescale HC08
| DIO channel group | Represents multiple adjoining DIO channels represented by a logical group. A DIO channel group is a subset of one DIO port, accessible synchronously. |
|---|---|

Example: Port pins 2..6 of an 8 bit port

### 12. 功能性需求
*原文标题：Functional Requirements*

### 13. 配置 and 初始化
*原文标题：Configuration and Initialization*

The configuration and initialization of the port structure is not part of the DIO driver. This is done by the Port driver (see  Configuration of port pin properties in ).

 Symbolic names shall be configured
⌈
| Description: | The DIO driver shall allow the static configuration of the following symbolic names: |
|---|---|

* DIO channel names
* DIO channel group names
* DIO port names
| Rationale: | Provide human readable symbolic names for DIO channels |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 14. Normal Operation

The DIO Driver shall provide a service that writes a data word to the assigned DIO port
⌈
| Description: | The DIO Driver shall provide a service that writes a data word to the assigned DIO port. The operation shall be unbuffered. There shall be no influence to the input functionality of the port. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | General read/write behavior |
|---|---|
| Use Case: | Write access to an entire DIO port. |
| Supporting Material: | - |

⌋

 The DIO Driver shall provide a service that writes a selectable number of adjoining bits to an assigned part of a DIO port
⌈
| Description: | The DIO Driver shall provide a service that writes a selectable number of adjoining bits to an assigned part of a DIO port. The operation shall be unbuffered. |
|---|---|
| Rationale: | Allow for simultaneous setting of a group of DIO channels of a DIO port that has multiple external assignments. |

Applies To:
| Dependencies: | General read/write behavior |
|---|---|
| Use Case: | Write access to DIO ports with multiple assignments. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

Provide atomicity of DIO access
⌈
| Description: | All re-entrant functions of the DIO Driver shall perform the following access actions in an atomic way: |
|---|---|

* DIO ports
* DIO channels
* DIO channel groups
| Rationale: | Avoid data integrity problems within concurrent access of DIO Driver API functions. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A specific microcontroller (or a specific compiler) does not provide atomic access to single port pins. For that reason, the implementation has to use read-modify-write operations on the whole port. Concurrent access to pins of the same port will lead to data integrity problems if concurrent access is not blocked. |
| Supporting Material: | - |

⌋

### 16. References

### 17. 附录
*原文标题：Appendix*

### 18. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyper-links in the document.

### 19. Traceable item history of this document according to AUTOSAR Release R24-11

### 20. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 21. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 22. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 23. Traceable item history of this document according to AUTOSAR Release R25-11

### 24. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 25. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 26. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
