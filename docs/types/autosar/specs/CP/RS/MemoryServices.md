# Requirements on Memory Services (`MemoryServices`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 007 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_MemoryServices_007\AUTOSAR_CP_RS_MemoryServices.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_MemoryServices_007\AUTOSAR_CP_RS_MemoryServices.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_MemoryServices_007\zzgen\CP_RS_MemoryServices.complete.txt`

## 文档简介

This document specifies requirements on Basic Software Modules of the following software layers:

* Service Layer

Those modules are of the following type:

* NVRAM Management
* Interfaces

The selection of modules is derived from the Basic Software Module List and the AUTOSAR Layered Software Architecture. The following modules are in scope:

* NVRAM Manager
* Bulk NvData Manager

The requirements are structured in the following way:

* General requirements on Basic Software Modules (other document)
* General requirements which apply to all modules of the NVRAM Management
* Module specific requirements

Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

## 模块依赖

The NVRAM manager shall be independent from its underlying memory hardware.
⌈
| Description: | Existing (standardized) interfaces shall be used by NVRAM-Manager to access the underlying memory hardware. The interfaces shall abstract the memory hardware. |
|---|---|
| Rationale: | Portability, reusability, hardware cost reduction by flexible usage of memory devices |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on Basic Software Modules of the following software layers:

* Service Layer

Those modules are of the following type:

* NVRAM Management
* Interfaces

The selection of modules is derived from the Basic Software Module List and the AUTOSAR Layered Software Architecture. The following modules are in scope:

* NVRAM Manager
* Bulk NvData Manager

The requirements are structured in the following way:

* General requirements on Basic Software Modules (other document)
* General requirements which apply to all modules of the NVRAM Management
* Module specific requirements

Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 2. How to read this document

Each requirement has its unique identifier starting with the prefix "BSW" (for "Basic Software"). For any review annotations, remarks or questions, please refer to this unique ID rather than chapter or page numbers!

### 3. Conventions used

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* SHOULD: This word, or the adjective "RECOMMENDED", means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求结构
*原文标题：Requirements structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

Functional Requirements:

* Configuration (which elements of the module need to be configurable)
* Initialization
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

Non-Functional Requirements:

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling, ...)
* ...

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Requirements on Memory Services that are not included in the AUTOSAR Glossary .

| Acronym: | Description: |
|---|---|
| Basic Storage Object | A "Basic Storage Object" is the smallest entity of a NVRAM Block. Several "Basic Storage Objects" can be used to build a NVRAM Block. A "Basic Storage Object" can reside in different memory locations (RAM/ROM/NV memory). |
| NVRAM Block | The "NVRAM Block" is the entire structure, which is needed to administrate and to store a block of NV data. |
| NV data | The data to be stored in the Non-Volatile memory. |
| Block Management Type | Type of the NVRAM Block. It depends on the (configurable) individual composition of a NVRAM Block in chunks of different mandatory/optional Basic Storage Objects and the subsequent handling of this NVRAM block. |
| NV Block Header | Additional information included in the NV Block if the mechanism "Static Block ID" is enabled. |
| RAM Block | The "RAM Block" is a Basic Storage Object. It represents the part of a NVRAM Block, which resides in the RAM. |

See
| ROM Block | The "ROM Block" is a Basic Storage Object. It represents the part of a NVRAM Block, which resides in the ROM. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 需求规范
*原文标题：Requirements Specification*

### 7. 功能概述
*原文标题：Functional Overview*

The Non-Volatile RAM Manager (NVRAM Manager) manages the storage of data in all kinds of non-volatile memory.

The NVRAM manager itself shall be hardware independent, all functionality which is directly accessing hardware, e.g. internal or external EEPROM, emulated EEPROM in internal or external flash, etc. is encapsulated in lower layers of the Basic SW. The NVRAM manager handles concurrent accesses to the non-volatile data and provides reliability mechanisms like checksum protection for single data elements. To be usable in all domains of an automotive system, the NVRAM manager needs to be highly scalable (e.g. define the number and size of request queues, support different block management types, EEPROM Emulation, ...).

### 8. 功能性需求
*原文标题：Functional Requirements*

### 9. 配置
*原文标题：Configuration*

Each application shall be enabled to declare the memory requirements at configuration time
⌈
| Description: | By use of configuration techniques each application shall be enabled to declare the memory requirements at configuration time. This information shall be useable to assign memory areas and to generate the appropriate interfaces. Wrong memory assignments and conflicts in requirements (sufficient memory not available) shall be detected at configuration time. |
|---|---|
| Rationale: | Realization of higher reliability, interoperability |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The NVRAM manager shall support two classes of RAM data blocks
⌈
| Description: | The NVRAM manager shall support two classes of RAM data blocks. These RAM data blocks are mandatory for data exchange between the NVRAM Manager and SW-Components. They have to be provided by the SW-Components or BSW modules. The assignment to a special NVRAM block can be: |
|---|---|

* permanent, i.e. the RAM data block is assigned to exactly one NVRAM block during configuration time
* temporary, i.e. the RAM data block can be assigned to any NVRAM block during runtime
| Rationale: | Reduce RAM consumption. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 初始化
*原文标题：Initialization*

The NVRAM manager shall provide a service to check and load those NVRAM blocks, configured to have a permanent RAM data block to RAM
⌈
| Description: | The NVRAM manager shall provide a service to check and load those NVRAM blocks, configured to have a permanent RAM data block to RAM. |
|---|---|

This service has to be called by the ECU state manager once during start-up before the application is running.
| Rationale: | The application needs RAM blocks with valid data after ECU start-up. |
|---|---|

Applies To:
| Dependencies: | Static configuration of NVRAM blocks being loaded during start-up |
|---|---|
| Use Case: | ECU Start-up: provide NV data for application. |
| Supporting Material: | - |

⌋

### 11. Normal Operation

Note: Only NVRAM manager shall access non-volatile memory. All other software shall exclusively use NVRAM manager to access data in non-volatile memory. However, this is not a requirement on Memory Services but on the usage. Therefore, the former requirement  ("Only access non-volatile memory via NVRAM manager") has been removed.

 The NVRAM manager shall provide an implicit way of accessing blocks in the NVRAM and in the shared memory (RAM).
⌈
| Description: | The NVRAM manager only provides an implicit way of accessing blocks in the NVRAM and in the shared memory (RAM). This means, the NVRAM manager copies one or more blocks from NV memory to RAM block(s) and other way round. |
|---|---|

Explicit read and write access of variables inside a RAM block has to be provided by application (access macro ...).
| Rationale: | Basic functionality of NVRAM manager |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Accessing of parameters |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 关机 Operation
*原文标题：Shutdown Operation*

The NVRAM manager shall provide a function, which triggers update of integrity information and saving of RAM data blocks to NV memory
⌈
| Description: | The NVRAM manager shall provide a function, which triggers update of integrity information (recalculate a checksum, e.g. CRC) and saving of RAM data blocks to NV memory. This function can only affect permanent RAM data blocks because temporary RAM data blocks cannot be written back automatically, e.g. triggered by the ECU state manager. |
|---|---|

Information:

* This function has to be called by the ECU state manager once before shutdown
* This function can be called by a diagnostic service ('Save NVRAM')
| Rationale: | Don't let the application do the entire job. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | ECU Shut-down: save NV data of application |
| Supporting Material: | - |

⌋

 The NVRAM manager shall provide a function for aborting the shutdown process
⌈
| Description: | If during an ECU shutdown an ECU wake-up condition is detected, the NVRAM manager shall provide a function to abort those write jobs originating from the shutdown process. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Fault Operation

Treatable errors shall not affect other software components
⌈
| Description: | The NVRAM manager shall not report treatable (healable or recoverable) errors to other software components. |
|---|---|
| Rationale: | Separation of concerns, avoidance of unnecessary degradation of functionality |

Applies To:
| Dependencies: | Automatic data repair |
|---|---|
| Use Case: | Data is saved redundantly (within two identical blocks). If a data corruption is detected in one block, the contents of the redundant block are used. The application is not affected. |
| Supporting Material: | - |

⌋

 The NVRAM manager shall repair data in blocks of management type 'NVRAM redundant'
⌈
| Description: | The NVRAM manager shall repair data in blocks of management type 'NVRAM redundant' if a data corruption is detected and valid data can be derived. The number of repair cycles shall be limited in order to avoid infinite loops. |
|---|---|
| Rationale: | Robustness |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Data corruption (bit flipping) in a redundant NVRAM block |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 15. Hardware independence

The NVRAM manager shall be independent from its underlying memory hardware.
⌈
| Description: | Existing (standardized) interfaces shall be used by NVRAM-Manager to access the underlying memory hardware. The interfaces shall abstract the memory hardware. |
|---|---|
| Rationale: | Portability, reusability, hardware cost reduction by flexible usage of memory devices |

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

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

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

none

### 26. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none
