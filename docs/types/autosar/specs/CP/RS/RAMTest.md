# Requirements on RAM Test (`RAMTest`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 114 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_RAMTest_114\AUTOSAR_CP_RS_RAMTest.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_RAMTest_114\AUTOSAR_CP_RS_RAMTest.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_RAMTest_114\zzgen\CP_RS_RAMTest.complete.txt`

## 文档简介

This document specifies requirements on the module RAM Test.

This document covers requirements only for software algorithms to check the RAM. A hardware RAM check (like ECC check) is not in the scope of this document.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the module RAM Test.

This document covers requirements only for software algorithms to check the RAM. A hardware RAM check (like ECC check) is not in the scope of this document.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Requirement 结构
*原文标题：Requirement Structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

### 5. 功能性需求：
*原文标题：Functional Requirements:*

* Configuration (which elements of the module need to be configurable)
* Initialization
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

### 6. Non-Functional 需求：
*原文标题：Non-Functional Requirements:*

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling, ...)
* ...

### 7. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to RAM Test that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| ECU | Electric Control Unit |
| EOL | End Of Line |

Often used in the term 'EOL Programming' or 'EOL Configuration'
| MAL | Old name of Microcontroller Abstraction Layer (replaced by MCAL because 'MAL' is a french term meaning 'bad') |
|---|---|
| MCAL | Microcontroller Abstraction Layer |
| MCU | Microcontroller Unit |
| NMI | Non maskable interrupt |
| OS | Operating System |
| SPAL | The name of this working group |
| SFR | Special Function Register |
| RTE | Runtime environment |
| WP | Work Package |
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

### 8. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the RAM Test.

### 9. 功能概述
*原文标题：Functional Overview*

This module has the task to test the RAM memory area by software.

### 10. 功能性需求
*原文标题：Functional Requirements*

### 11. 配置
*原文标题：Configuration*

The number of tested cells shall be changeable at runtime
⌈
| Description: | To react on different requirements (sleep, driving cycle) the user shall have the possibility to change the number of tested cells per cycle "online". |
|---|---|
| Rationale: | Influences the interrupt disable times. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | When car is driven the system interrupt locking time must be much shorter than in case of sleep mode. |
| Supporting Material: | - |

⌋

 Test cell size shall be a published parameter
⌈
| Description: | The implementer shall chose the test cell size (bit, byte, word, long word) for a specific test implementation according to the controller properties. This parameter shall be published to the integrator along with a specific implementation. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Runtime optimization by implementer due to controller properties. |
| Supporting Material: | - |

⌋

 Multiple RAM areas shall be configurable at post build/ link time
⌈
| Description: | It shall be possible to configure multiple RAM areas (by configuring their start and end address). |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Normal Operation

A safety mechanism with low coverage shall be available
⌈
| Description: | A safety measure which fulfils a diagnostic coverage of 60% shall be available. It may be provided by hardware means, by an appropriate test algorithm, or both. |
|---|---|
| Rationale: | Detect permanent faults in RAM. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Support of EOL, quick start-up tests and where low diagnostic coverage tests are required, e.g. if system has safety goals with low ISO 26262 ASIL rating only. |
| Supporting Material: | *  Tables 4, 5 and D.1 |

*  Table 33, clause 5.1.13.5 (RAM Pattern test), 5.1.13.6 (Parity bit), 5.1.13.7 (RAM March test)
⌋

 A Test algorithm with medium coverage shall be available
⌈
| Description: | A safety measure which fulfils a diagnostic coverage of 90 % shall be available. It may be provided by hardware means, by an appropriate test algorithm, or both. |
|---|---|
| Rationale: | Detect permanent faults in RAM. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Support of EOL, start-up tests and where medium diagnostic coverage tests are required, e.g. if the latent fault metric of ISO 26262 for the ASIL level of the safety goals of a system can be achieved with medium coverage. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

Effects of Instruction / Data queue shall be taken into account
⌈
| Description: | When writing to a cell and after reading back this may lead to the problem that the read-back value comes from the data queue and not from the RAM cell to be tested. In that case instruction(s) have to be injected to eliminate such an effect. |
|---|---|
| Rationale: | Read back the value from a tested cell. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Controller with instruction or data queue may have such effects. |
| Supporting Material: | - |

⌋

 The RAM Test Module shall be usable to comply with requirements of the different ASIL levels of ISO 26262.
⌈
| Description: | The RAM Test Module shall provide and document (fault models and fault coverage) diagnostic capability for permanent faults in RAMs to enable fulfillment of the latent fault metric targets of ISO 26262 for the different ASIL levels. |
|---|---|
| Rationale: | Usability of AUTOSAR for sytems which need to comply with ISO 26262. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | *  Tables 4, 5 and D.1 |

*  Table 33, clause 5.1.13.5 (RAM Pattern test), 5.1.13.6 (Parity bit), 5.1.13.7 (RAM March test)
⌋

### 14. References

### 15. 附录
*原文标题：Appendix*

### 16. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyper-links in the document.

### 17. Traceable item history of this document according to AUTOSAR Release R25-11

### 18. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 19. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 20. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 21. Traceable item history of this document according to AUTOSAR Release R24-11

### 22. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| The number of tested cells shall be changeable at runtime |  |
| Test cell size shall be a published parameter |  |
| Multiple RAM areas shall be configurable at post build/ link time |  |
| A subset of available RAM Test algorithms shall be selectable at pre-compile time |  |
| A subset of the pre-compile time selected RAM Check test algorithms shall be selectable at runtime |  |
| It shall be possible to divide the RAM test execution into smaller pieces |  |
| Current status of RAM test execution per block shall be available through a get status interface |  |
| The RAM test module shall be able to perform its tests in a non-destructive manner |  |
| The RAM test module shall be able to perform its tests in a destructive manner |  |
| Effects of Instruction / Data queue shall be taken into account |  |
| RAM test execution status shall be provided by a notification mechanism |  |
| A safety mechanism with low coverage shall be available |  |
| A Test algorithm with medium coverage shall be available |  |
| A Test algorithm with high coverage shall be available |  |
| The RAM Test Module shall be usable to comply with requirements of the different ASIL levels of ISO 26262. |  |

### 23. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 24. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none
