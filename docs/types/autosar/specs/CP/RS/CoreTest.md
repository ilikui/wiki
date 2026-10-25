# Requirements on Core Test (`CoreTest`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 258 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_CoreTest_258\AUTOSAR_CP_RS_CoreTest.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_CoreTest_258\AUTOSAR_CP_RS_CoreTest.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_CoreTest_258\zzgen\CP_RS_CoreTest.complete.txt`

## 文档简介

This document defines general rules and requirements for Core Test specification in AUTOSAR. It shall be used as a basis for each requirements document.

Care has been taken to insure consistency between the Core test, RAM test and Flash test SRS documents.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document defines general rules and requirements for Core Test specification in AUTOSAR. It shall be used as a basis for each requirements document.

Care has been taken to insure consistency between the Core test, RAM test and Flash test SRS documents.

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

The glossary below includes acronyms and abbreviations relevant to CoreTest that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| CPU | Central Processing Unit |
| MPU | Memory Protection Unit |
| L1 | 1^(st) level memory |
| L2 | 2^(nd) level memory |
| MCU | Microcontroller Unit |
| BIST | Built in Self Test |
| IRQ | Interrupt Request |
| Core | A CPU plus closely located functional resources |
| Atomic sequence/ atomic part | Sequence of software code execution which must not be interrupted at any time |
| Partial test | A partial test is defined as the test of one or more 'hardware resources'. (A partial test is interruptible because it is executed in background mode). |
| PCB | Printed Circuit Board |
| External device | A physical external entity; e.g. a second microcontroller |
| Resource | A core internal unit which executes a unique functionality (e.g. IRQ-controller) |

Checksum/

| signature | A numerical representation of the result of a test execution or atomic sequence of a test execution. |
|---|---|
| Caller/calling entity | The caller/calling entity is located on a higher AUTOSAR or ISO layer. It is the user of the API call. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the CoreTest.

### 5. 功能概述
*原文标题：Functional Overview*

This module describes the requirements for an API specifying test cases in accordance with the automotive norm. It covers periodic as well as start-up tests. This is meant to be integrated in the overall safety concept and will not give the required diagnostic coverage on its own.

The test may be run in background or foreground mode.

* the test is called periodically by a scheduler, and is interruptible on completion of the current atomic sequence which is a part of the core test. One complete test may consist of many atomic sequences which test functionality of the core entities. This complete test is split up over many atomic test parts to take care of real time operating system requirements in case of scheduling of tasks.
* the tests can be used to test the whole core functionality or selected blocks, e.g. prior to running a critical task.

It shall be allowed to cancel the background mode and start a foreground mode. It shall not be possible to have both modes being executed at the same time. If a background task is running and a foreground task is requested, the background task should be cancelled (e.g. at the end of an atomic sequence) before calling the foreground task.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 核的定义
*原文标题：Definition of Core*

The Core is defined as the central processing unit (CPU), all dedicated memory and bus interfaces (TCM, L1, L2 cache, system bus, etc.) and all dedicated supporting functionality (e.g. interrupt controller, debug, etc.). Throughout this document the expression 'Core' is used for referencing to this definition. A very generic block diagram is shown below. Cores which implement more than one generic CPU should have more than one core test entity.

The requirements are derived from the automotive standards. Busses have to be tested including arbitration, MMU/MPU, caches, tightly coupled memories, general purpose and dedicated registers, numerical execution units, including address generation and interrupts plus exception handling.

The corresponding tests are listed in the automotive standard. APIs are foreseen for techniques defined as test by the automotive standard, with exception of boundary scan test which will not be in the scope of this document.

Not covered are permanent monitoring techniques nor redundant hardware techniques (e.g. lock-step CPU). If present and requiring software support, they may have to be addressed by MCAL complex drivers.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Multicore 支持
*原文标题：Multicore Support*

It shall be possible to execute a Core test on every equal instance of a core inside a silicon device. The Core test itself and the API do not have to be aware of the system architecture itself due to its fact of being a driver located on lower AUTOSAR layers .

Additionally a Core test have not to be aware of the number of cores which co-exist in the overall system architecture and is only focused on one single core entity (i.e. if there are multi-cores, then the user-application has to schedule multiple entities of the same test for each core).

Therefore there has to be a clear distinction between the expressions 'Multi-microcontroller' and 'multi-core'. Multi-Microcontroller system designs are out of scope of a core test and its driver API due to the nature of being a driver and a driver API.

As a summary, the core test is a local MCAL driver and as such it has no horizontal view to the system architecture design as well as to other microcontrollers or upper layer services.

### 8. Architectural Prerequisites

### 9. Resource Allocation

There is no resource managing entity available in AUTOSAR upper layers (e.g. ISO 7-layer model - session management). It is necessary to temporarily free a local core resource (e.g. IRQ controller) from application usage to avoid unwanted behavior and interference between test and application during runtime. There is no managing entity available within AUTOSAR architecture to actively handle this requirement prior starting to execute a core test (Feb/2008, R3.0). An MCAL driver cannot handle resource management due to its state of being a driver located in lower AUTOSAR layers. The ECU state manager  might be extended to handle this as an additional state or mode.

### 10. Test Concept

Today AUTOSAR does not support runtime testing; therefore no test managing entity is available in AUTOSAR upper layers. Due to the intentionally missing ability of an MCAL driver to directly access test results being executed on other cores (e.g. Multi-microcontroller systems), a test managing entity is needed in upper AUTOSAR layers architecture  to handle test result processing (local, external) and related reactions of the overall system architecture.

### 11. 限制
*原文标题：Limitations*

Due to  and , a Core test implementation might be limited to be executed during power-up/start-up time where core resources are not shared among different active application tasks or entities (e.g. IRQ-controller, DMA) -OR- might be limited to test resources with are not shared during runtime (e.g. CPU itself).

### 12. 功能性需求
*原文标题：Functional Requirements*

### 13. 配置
*原文标题：Configuration*

The Core Test Shall Be Configurable
⌈
| Description: | The Core functionality to be tested and the atomic tests to be run shall be configurable. |
|---|---|
| Rationale: | The new Cores are highly configurable at synthesis. Caches, MPU, Tightly Coupled Memories/Internal Memories and other functionality is implementation specific and optional/configurable. The tests need to reflect the configuration of the Core on which they will be finally executed |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Reuse same test software with different versions of core and select configuration. |
| Supporting Material: | - |

⌋

 Link Time Configuration Shall Be Supported
⌈
| Description: | The Core functionality to be tested and the atomic tests to be run shall be configured at link time by object libraries |
|---|---|
| Rationale: | The core test shall be available as object library. No runtime (post build) configuration is required as core functionality is fixed and not dependent on software variants and use cases. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Reuse same test software with different versions of core and select configuration. |
| Supporting Material: | - |

⌋

### 14. Normal Operation

Core Register Test Shall Be Available
⌈
| Description: | Shall support test according the automotive standard. |
|---|---|
| Rationale: | The automotive standard requires testing of all critical Core components. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Part of Core test strategy to detect failures of the Core. |
| Supporting Material: | - |

⌋

 Core Interrupt and Exception Detection Tests Shall Be Available
⌈
| Description: | Shall support test according to the automotive standard. |
|---|---|
| Rationale: | The automotive standard requires testing of all critical Core components |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Core ALU Test Shall Be Available
⌈
| Description: | Shall support test of 'coding and execution including flag registers' as suggested by the automotive standard. |
|---|---|
| Rationale: | The automotive standard requires testing of all critical Core components. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 初始化
*原文标题：Initialisation*

An init Function for the Core Test Shall Be Available (rejected)
⌈
| Description: | Shall support test according to the automotive standard. |
|---|---|

* Select a dedicated test coverage level
* Activate dedicated diagnostic hardware (if available)
* Activate Core internal test and diagnostic modes (if available)
| Rationale: | For high coverage levels a hardware support is likely to be needed to achieve related test coverage requirements. An API is needed to initialise the dedicated diagnostic hardware (if available) |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|

Use Case:
| Supporting Material: | - |
|---|---|

⌋

### 16. 关机 Operation
*原文标题：Shutdown Operation*

A DeInit Function for the Core Test Shall Be Available (rejected)
⌈
| Description: | * Stop dedicated diagnostic hardware (if available) |
|---|---|

* Disable Core internal test and diagnostic modes (if available)
| Rationale: | For the automotive standard additional hardware support is likely to be needed. An API is needed to reset the dedicated diagnostic hardware. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 17. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

Shared Resources to Be Tested Shall Be Made Exclusively Available to Test
⌈
| Description: | A mechanism for requesting and releasing shared resources in multi master systems shall be available. The caller has to handle the state of the shared resource. Saving/restoring the state prior to the call to API in NOT handled by the test itself, but rather a task of the caller. |
|---|---|
| Rationale: | In Cores some resources such as tightly coupled memory interfaces are shared with external masters, e.g. DMA. These shared resources need to be made exclusively available for testing purposes. The test can then freely manipulate them, e.g. change to test mode if supported, etc. without conflicting with the rest of the application. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Timing Requirements (rejected)
⌈
| Description: | Test duration of a Core test software |
|---|---|
| Rationale: | Run time execution of a Core test is identified a vital requirement and therefore will be a debug event during development phase. |

Maximum execution time shall not be exceeded to avoid conflicts with OS and/or application software as well as Core performance requirements.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. References

### 19. 附录
*原文标题：Appendix*

### 20. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 21. Traceable item history of this document according to AUTOSAR Release R25-11

### 22. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 23. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 24. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
