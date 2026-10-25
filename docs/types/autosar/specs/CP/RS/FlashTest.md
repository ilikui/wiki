# Requirements on Flash Test (`FlashTest`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 260 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_FlashTest_260\AUTOSAR_CP_RS_FlashTest.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_FlashTest_260\AUTOSAR_CP_RS_FlashTest.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_FlashTest_260\zzgen\CP_RS_FlashTest.complete.txt`

## 文档简介

This document specifies requirements on the module Flash Test.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the module Flash Test.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Flash Test that are not included in the AUTOSAR Glossary .

| Acronym: | Description: |
|---|---|
| ECC | Error Correction Code |
| EOL | End Of Line |

Often used in the term 'EOL Programming' or 'EOL Configuration'
| NMI | Non maskable interrupt |
|---|---|
| SFR | Special Function Register |
| WP | Work Package |

| Abbreviation: | Description: |
|---|---|
| REQ | Requirement |
| STD | Standard |
| UNINIT | Uninitialized (= not initialized) |

| Term: | Description: |
|---|---|
| Background test | Background test is called periodically by a scheduler, and is interruptible. The test is split up over many scheduled tasks. |
| Foreground test | Foreground test is called via users call. |
| Invariable memory | Invariable memory can be program flash, program SRAM, locked cache and ROM |
| Memory scrubbing | Automatic sequential data reading to trigger detection/verification mechanisms typical ECC. |
| Test interval | Interval of a complete Flash test in background mode |
| signature | Unique calculation result of the content of a specific memory block |

As this is a document from professionals for professionals, all other terms are expected to be known.

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Flash Test.

### 5. 功能概述
*原文标题：Functional Overview*

This SW module provides algorithm to test invariable memory. Invariable memory can be data/program flash, program SRAM, locked cache and is either embedded in the microcontroller or memory mapped connected to the microcontroller. For simplification the SW module is called Flash Test Driver.

The test service can be executed at any time after MCU initialization and it is up to the user of the Flash Test Driver to choose the suitable test algorithm and the right execution place to fulfill the safety requirements of the system. The test service itself is dependant on the storage concept of the system. Therefore the availability of different test algorithms is configurable.

The Flash Test driver is intended to be integrated in the overall safety concept and will not provide the required diagnostic coverage on its own.

### 6. 功能性需求
*原文标题：Functional Requirements*

The Flash Test module is using the Diagnostic Event Manager (DEM) for error reporting. Errors are reported though the DEM API (BSW, `Dem_SetEventStatus`()).

Development errors are reported to the Default Error Tracer (DET).

### 7. 配置
*原文标题：Configuration*

In this chapter requirements on configurability of the module are listed.

 Memory block test shall be configured
⌈
| Description: | Configure memory blocks to be tested. Block sizes shall be configurable. It shall be possible to configure multiple Flash block areas (for example by configuring their start and end address). Additionally the link to the stored signature or checksum locations shall be configured for each memory block, if applicable. |
|---|---|
| Rationale: | Define memory blocks to be tested. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Flash test service shall be configured
⌈
| Description: | It shall be configurable which test algorithms can be used on each memory block. |
|---|---|
| Rationale: | Adapt flash test service to system storage concept and optimize driver code |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Post build configuration shall be supported
⌈
| Description: | Post build configuration shall be supported |
|---|---|
| Rationale: | # For object code deliveries. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 初始化
*原文标题：Initialization*

No special initialization requirements collected.

### 9. Normal Operation

In this chapter requirements on the "normal" functionality of the module are listed.

 Data integrity shall be checked using ECC
⌈
| Description: | Actively test data integrity using ECC. |
|---|---|

An algorithm shall be provided to check the correctness of data and redundant bits extended to a word of memory when reading the word.

This algorithm is applicable if invariable memory supports this mechanism. The test shall report a DEM error in case of any failure.
| Rationale: | Detect single bit failures, two-bit failures, three-bit failures in a 16-bit word |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | SW ECC or HW ECC. It can be used for "memory scrubbing". |
| Supporting Material: | - |

⌋

 Data integrity shall be checked using checksum
⌈
| Description: | Check data integrity using checksum |
|---|---|

An algorithm shall be provided to re-calculate a checksum of a memory block and compare it with stored checksum located on a defined address in the invariable memory.

This algorithm is applicable if flash memory contains a checksum. The link to the location of the stored checksum shall be configurable. The test shall report a DEM error in case of checksum mismatch.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 关机 Operation
*原文标题：Shutdown Operation*

There are no dedicated requirements for shutdown operation collected.

### 11. Fault Operation

There are no dedicated requirements for fault/recovery operation operations collected for this SW module.

### 12. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

There are no dedicated non-functional requirements collected.

### 13. 时序需求
*原文标题：Timing Requirements*

There are no dedicated timing requirements collected.

### 14. Resource Usage

Memory Content to Be Tested Should Not be Valid During the Test
⌈
| Description: | The tests are content based and require no change of the content during the test period. This has to be ensured by the caller. |
|---|---|
| Rationale: | Content of memory blocks under test shall not be valid during the test period |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Test of data flash during run time |
| Supporting Material: | - |

⌋

### 15. References

### 16. 附录
*原文标题：Appendix*

### 17. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 18. Traceable item history of this document according to AUTOSAR Release R25-11

### 19. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 20. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 21. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 22. Traceable item history of this document according to AUTOSAR Release R24-11

### 23. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 24. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 25. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 26. Traceable item history of this document according to AUTOSAR Release R23-11

### 27. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 28. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 29. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
