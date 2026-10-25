# Requirements on Libraries (`Libraries`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 314 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_Libraries_314\AUTOSAR_CP_RS_Libraries.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_Libraries_314\AUTOSAR_CP_RS_Libraries.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_Libraries_314\zzgen\CP_RS_Libraries.complete.txt`

## 文档简介

This document specifies requirements on the AUTOSAR Libraries. It applies to all the libraries specified by AUTOSAR:

| Library short name: | Description: |
|---|---|
| Mfx | Library of Mathematical FiXed point calculations |
| Mfl | Library of Mathematical FLoating point point calculations |
| Ifx | Library of Interpolation functions of FiXed point |
| Ifl | Library of Interpolation functions of FLoating point |
| Bfx | Library of Bit handling |
| Msf | Library of Memory Standard Functions |
| Efx | Library of Extended functions on Fixed point |
| Crc | Library of CRC routines |
| E2E | SW-C End-to-End Communication Protection Library |

Each of these libraries has its own independent SWS but this SRS document applies to all libraries.

Conformance to all requirements is mandatory for all implementations. "Configurable" also means, the requirement must be met, but such functionality can be disabled, if not needed in an ECU (BSW or SW-C).

This document was initially dedicated to CRC routines. In order to keep traceability, the CRC requirements are still present but in a dedicated chapter.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the AUTOSAR Libraries. It applies to all the libraries specified by AUTOSAR:

| Library short name: | Description: |
|---|---|
| Mfx | Library of Mathematical FiXed point calculations |
| Mfl | Library of Mathematical FLoating point point calculations |
| Ifx | Library of Interpolation functions of FiXed point |
| Ifl | Library of Interpolation functions of FLoating point |
| Bfx | Library of Bit handling |
| Msf | Library of Memory Standard Functions |
| Efx | Library of Extended functions on Fixed point |
| Crc | Library of CRC routines |
| E2E | SW-C End-to-End Communication Protection Library |

Each of these libraries has its own independent SWS but this SRS document applies to all libraries.

Conformance to all requirements is mandatory for all implementations. "Configurable" also means, the requirement must be met, but such functionality can be disabled, if not needed in an ECU (BSW or SW-C).

This document was initially dedicated to CRC routines. In order to keep traceability, the CRC requirements are still present but in a dedicated chapter.

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

The glossary below includes acronyms and abbreviations relevant to Libraries that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| API | Application Programming Interface. Preferred term is "function". |

AR

| AR_ | Abbreviation used in place of AUTOSAR |
|---|---|
| BFX | Library of Bit handling |
| CRC | Cyclic Redundancy check |
| DET | Default Error Tracer |
| E2E | End to End |
| EcuM | ECU Manager |
| EFX | Extended function on Fixed point |
| IFL | Interpolation function s of FLoating point |
| IFX | Interpolation function s of FiXed point |
| Library | Set of APIs (i.e. functions) that may be called from any modules (BSW modules or SW-C) |
| MFL | Mathematical FLoating point calculation |
| MFX | Mathematical FiXed point calculation |
| MSF | Memory Standard Functions |
| OS | Operating System |

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Libraries.

### 5. 功能概述
*原文标题：Functional Overview*

The AUTOSAR libraries provide other BSW modules and application SW-Cs with mathematical services.

The libraries offer C functions that can be called from source code, i.e. from BSW modules, from SW-C, from RTE or from Complex Drivers.

### 6. CRC 库
*原文标题：CRC library*

The CRC Library provides functions for 8 bit, 16 bit, 32 bit and 64 bit CRC (cyclic redundancy check) calculations. The CRC library can be scaled in terms of

* Table based calculation (fast, but higher code size)
* Runtime calculation (slow, but smaller code size)
* Different standard CRC generator polynomials

Hardware supported CRC calculation is already supported by automotive microcontrollers.

### 7. SW-C End-to-End Communication Protection 库
*原文标题：SW-C End-to-End Communication Protection Library*

The SW-C End-to-End Communication Protection Library (in short: E2E library) provides functions for detecting errors in (safety-related) communication between safety-related SW-Cs. The protection is done by means of protecting of safety-related data elements exchanged between SW-Cs, and the responsibility to protect/check the signal is given to the SW-Cs (application), which call directly the E2E library. The library is supposed to work over a priori any communication stack used for inter-SW-C communication, which are currently FlexRay, CAN and LIN. In future, when further communication stacks are added, there might be a need to add further E2E profiles.

### 8. 功能性需求
*原文标题：Functional Requirements*

### 9. 配置
*原文标题：Configuration*

The functional behavior of each library functions shall not be configurable
⌈
| Description: | The functional behavior of library functions shall not be configurable. For some given inputs (c function parameters), a function shall return always the same outputs, as defined with the function specification. However, the internal behavior can be configurable. For examples: choose resource consumption strategy e.g. priority to CPU/RAM/ROM. But this is implementation specific and not standardized by AUTOSAR |
|---|---|
| Rationale: | A SW-C that uses a library function expects a deterministic and standardized behavior. It the SW integrator has the possibility to configure and change the behavior, the SW-C may react unexpectedly. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Division function. In case of division by zero, the function shall always return the same value. If the SW integrator has the possibility to configure this return value, it may be right for some SW-Cs but it may also be catastrophic for other SW-Cs. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 初始化
*原文标题：Initialization*

A library shall be operational before all BSW modules and application SW-Cs
⌈
Description:
| Rationale: | A Library function may be called at the very first step of ECU initialization, e.g. even by the OS or EcuM, thus the library shall be ready. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | AUTOSAR OS initialization may call bit handling function |
| Supporting Material: | - |

⌋

### 11. Normal Operation

Using libraries shall not pass through a port interface
⌈
| Description: | SW-Cs shall directly invoke library functions, without passing through port RTE interface. To access the library API, the SW-Cs shall directly include the library header file. |
|---|---|
| Rationale: | The SW developer should be free to use libraries without having to change the SW-C interface description: reduce effort and inconsistencies |

The port+RTE mechanism is not required for library calls: no consistency check, no queuing, no communication outside ECU, etc.

* Using library functions is a software designer decision. It is related to implementation, not to SW-C interface.
* Calling a library function is an elemental operation. It is not like a client/server operation
* Because, they are often used, library function shall be called in an efficient way

Thus, the function can be directly called from the source code, e.g. runnables, without using RTE API.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Application includes floating point arithmetic library header, and calls floating point routines in control loop calculations, without crossing RTE. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 关机 Operation
*原文标题：Shutdown Operation*

A library shall be operational until the shutdown
⌈
| Description: | A library shall be operational until the shutdown .A library should not require a shutdown operation phase. If so, it shall occur after all AUTOSAR BSW modules shutdown operations |
|---|---|
| Rationale: | A Library function may be called at the very latest step of ECU shutdown, e.g. even by the OS, thus the library shall be ready until the end |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | AUTOSAR OS shutdown operation may call bit handling function |
| Supporting Material: | - |

⌋

### 13. Fault Operation

The error cases, resulting in the check at runtime of the value of input parameters, shall be listed in SWS
⌈
| Description: | Function should check at runtime (both in production and development code) the value of input parameters, especially cases where erroneous value can bring to fatal error or unpredictable result, if they have the values allowed by the function specification. |
|---|---|

All the error cases shall be listed in SWS and the function should return a specified value (in SWS) that is not configurable. This value is dependant of the function and the error case so it is determined case by case.
| Rationale: | Avoid fatal error, |
|---|---|

provide standardized behaviour
Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Division by zero, negative number of a square root, out of range, overflow, underflow, etc. |
| Supporting Material: | - |

⌋

### 14. CRC 库
*原文标题：CRC library*

The CRC library shall support the standard generator polynomials
⌈
| Description: | The CRC library shall support the following generator polynomials: |
|---|---|

CRC 8-bit SAE-J850 (0x1D)

CRC 16-bit CRC-CCITT

CRC 32-bit Ethernet IEEE-802 (0x04C11DB7)

CRC 32-bit 0xF4ACFB13

CRC 64-bit ECMA 0x42F0E1EBA9EA3693
| Rationale: | These polynomials are considered to be standard. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | CRC 8-bit : Detect errors/inconsistent data in CAN/LIN/FlexRay Communication |

CRC16 and 32-bit : Detect errors/inconsistent data in NVRAM/RAM and FlexRay/Ethernet communication

CRC64: Detect errors/inconsistent data in NVRAM/RAM and ethernet/wireless communication
| Supporting Material: | - |
|---|---|

⌋

### 15. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 16. 通用
*原文标题：General*

The CRC Library shall provide different calculation methods, optimizing either performance or memory usage
⌈
| Description: | The CRC Library shall provide different calculation methods (algorithm), optimizing either performance or memory usage (e.g. for runtime calculation). |
|---|---|
| Rationale: | Allow for optimization of code size or execution time depending on specific ECU requirements. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The CRC Library shall support current standards of CRC calculation
⌈
| Description: | The CRC Library shall support current standards of CRC calculation: |
|---|---|

* Table based
* Runtime calculated
* Hardware based (may be supported in the future)
| Rationale: | Allow for optimization of code size or execution time depending on specific ECU requirements. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 All CRC routines shall allow step-by-step-wise calculation of a large data block
⌈
| Description: | All CRC routines shall allow step-by-step-wise calculation of a large data block that is passed by start address, length and start value. |
|---|---|
| Rationale: | CRC calculation of large data blocks without blocking the whole system. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. CRC 库
*原文标题：CRC library*

### 18. Compatibility

For a given function prototype name, the behavior and the parameters shall not evolve once it is a part of an AUTOSAR final release
⌈
| Description: | For a given function prototype name, the behavior and the parameters shall not evolve once it is a part of an AUTOSAR final release. For any reasons, if the specification of a behavior has to be changed in AUTOSAR release N+1, e.g. the WP LIBRARIES decides of a new feature, or a parameter/type has to be added/removed/modified from the specification, and if library implementations might be already in production, then a new function prototype shall be created. The previous one (AUTOSAR release N) shall be kept unchanged. |
|---|---|

In case of a type implementation is specified in SWS, then if this implementation changes, a new type name and API name shall be created and the previous one shall be retained.

In case of a type implementation is not defined in SWS, then the library developer is free to change the implementation without creating new type name.
| Rationale: | Avoid SW-C re-developing in case of library evolution. |
|---|---|

Avoid having to integrate new library releases if SW-C do not require new function.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Others

Using a library should be documented
⌈
| Description: | If a BSW module or a SW-C uses a Library, the developer should add an Implementation-DependencyOnLibrary in the BSW/SW-C template. |
|---|---|

minVersion and maxVersion parameters correspond to the supplier version. In case of AUTOSAR library, these parameters may be left empty because a SW-C or BSW module may rely on a library behaviour, not on a supplier implementation. However, the SW-C or BSW modules shall be compatible with the AUTOSAR platform where they are integrated.
| Rationale: | SW integrator to checks the AUTOSAR platform compatibilities while integrating a BSW module or a SW-C |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Usage of macros should be avoided
⌈
| Description: | The function should be declared as function or inline function. Macro #define should not be used |
|---|---|
| Rationale: | Macros do not specify argument type and return type so there is more chance of improper use |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 A library function may only call library functions
⌈
| Description: | A library function shall not call any BSW modules functions, e.g. the DET. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. References

### 21. 附录
*原文标题：Appendix*

### 22. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

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
