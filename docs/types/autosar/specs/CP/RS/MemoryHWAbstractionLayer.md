# Requirements on Memory Hardware Abstraction Layer (`MemoryHWAbstractionLayer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 116 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_MemoryHWAbstractionLayer_116\AUTOSAR_CP_RS_MemoryHWAbstractionLayer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_MemoryHWAbstractionLayer_116\AUTOSAR_CP_RS_MemoryHWAbstractionLayer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_MemoryHWAbstractionLayer_116\zzgen\CP_RS_MemoryHWAbstractionLayer.complete.txt`

## 文档简介

This document specifies requirements on the modules making up the Memory Hardware Abstraction Layer (MemHwA). The picture below shows the architecture and context of this Memory Hardware Abstraction Layer.

The Flash EEPROM Emulation (FEE) module and EEPROM Abstraction (EA) module shall provide a block based addressing scheme and a configurable, "virtually unlimited" number of erase-write-cycles. Thus, the upper layer module (the NVRAM manager) needs not be changed if the underlying memory driver and device is changed.

The Memory Access (MemAcc) module shall abstract from the addressing scheme of the underlying memory (Mem) drivers and provide an address based addressing scheme. Also, it provides a device-agnostic address-based memory interface to maintain the access coordination of different upper layer modules like NvM, BndM or OTA client compenent and the synchronization of the hardware access. Thus, the upper layer module (FEE, EA, BndM, etc.) needs not be changed if the underlying Mem drivers and devices are changed.

The Memory Abstraction Interface (MemIf) shall replace the driver interface layers (EEPROM and flash interface) and allow the NVRAM manager to access several me

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the modules making up the Memory Hardware Abstraction Layer (MemHwA). The picture below shows the architecture and context of this Memory Hardware Abstraction Layer.

The Flash EEPROM Emulation (FEE) module and EEPROM Abstraction (EA) module shall provide a block based addressing scheme and a configurable, "virtually unlimited" number of erase-write-cycles. Thus, the upper layer module (the NVRAM manager) needs not be changed if the underlying memory driver and device is changed.

The Memory Access (MemAcc) module shall abstract from the addressing scheme of the underlying memory (Mem) drivers and provide an address based addressing scheme. Also, it provides a device-agnostic address-based memory interface to maintain the access coordination of different upper layer modules like NvM, BndM or OTA client compenent and the synchronization of the hardware access. Thus, the upper layer module (FEE, EA, BndM, etc.) needs not be changed if the underlying Mem drivers and devices are changed.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

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
* Output for other WPs (e.g. Description Templates, Tooling,...)
* ...

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to this document that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| (Logical) Block | Continuous area of memory that can be individually addressed by the module user (i.e. for read / write / erase / compare operations). The block size is statically configurable (pre-compile time). |
| Page | Smallest amount of memory that can be written in one pass. |
| Sector | Smallest amount of memory that can be erased in one pass. |
| FEE | Flash EEPROM Emulation |
| EA | EEPROM Abstraction Layer |
| MemIf | Memory Abstraction Interface |
| Mem | Memory Driver |
| MemAcc | Memory Access module |
| BndM | Bulk non-volatile data Manager |
| OTA client | Over The Air software update client |
| Sector Batch | Combination of multiple consecutive sectors of the same size |
| Sub Address Area | Combination of multiple non-contiguous sectors of the same size; used by MemAcc |
| Address Area | Combination of multiple Sub Address Area |
| MCU | Microcontroller unit |
| MPU | Microprocessor unit |
| AP | AUTOSAR Adaptive Platform |
| CP | AUTOSAR Classic Platform |

As this is a document from professionals for professionals, all other terms are expected to be known.

### 6. 功能概述
*原文标题：Functional Overview*

### 7. 存储 Access 模块
*原文标题：Memory Access Module*

The Memory Access (MemAcc) Module shall abstract any hardware dependency to the upper layer module which makes the memory access completely technology independent.

By abstracting the memory mapping in the Memory Access Module, the upper layer module doesn't need to know the physical segmentation of the underlying memory technology because the Memory Access module provides a contiguous logical memory area for the upper layer module.

The Memory Access Module shall handle all hardware independent functionality, such as iteration over multiple flash pages to program large memory areas. Apart from that it shall provide access coordination of different upper layer modules like NvM, BndM or OTA client compenent and the synchronization of the hardware access.

### 8. 存储驱动
*原文标题：Memory Driver*

The Memory Driver (Mem) shall provide a memory device agnostic interface to support all kinds of memory devices like flash, EEPROM, phase change memory (PCM), RAM, etc.

It supports basic services for reading, writing, and erasing of memory devices based on the physical segmentation.

In contrast to the FLS and EEP Driver, the Memory Driver works on physical addresses and supports data and code memory access.

### 9. EEPROM 抽象 Layer
*原文标题：EEPROM Abstraction Layer*

The EEPROM Abstraction Layer (EA) shall extend the EEPROM driver such that it provides upper layer modules with a virtual segmentation on a linear address space and a "virtually limitless" number of erase / write cycles. Apart from that it shall provide the same functionality as an EEPROM driver.

### 10. Flash EEPROM Emulation

The Flash EEPROM Emulation (FEE) shall emulate the behavior of the EEPROM Abstraction Layer on flash memory technology. Thus it shall have the same functional scope and API as the EEPROM Abstraction Layer and allow for a similar configuration based on that of the underlying flash driver and flash device.

### 11. 存储抽象接口
*原文标题：Memory Abstraction Interface*

The Memory Abstraction Interface (MemIf) shall abstract from the number of underlying FEE or EA modules and provide upper layer modules with a virtual segmentation on a uniform linear address space.

### 12. 需求规范
*原文标题：Requirements Specification*

### 13. 功能性需求
*原文标题：Functional Requirements*

### 14. 存储抽象模块
*原文标题：Memory Abstraction Modules*

### 15. 配置
*原文标题：Configuration*

MemAcc module shall allow the configuration of the non-contiguous physical memory areas of different memory devices to a logical address area
⌈
| Description: | MemAcc module shall allow the configuration of non-contiguous physical memory areas of different memory devices to a logical address area. |
|---|---|

The configuration parameters shall be used by the configuration tool to generate the memory areas allocated to each upper layer module.

The following constraints shall be considered:

# An address area can only be assigned to one upper layer module
# Address areas can span multiple memory devices
# Start address and length of memory access requests need to be aligned to the according physical memory segmentation
# Within a sub-address area, only one sector size is allowed
# Only one job per address area is allowed
| Rationale: | # Encapsulate hardware dependencies from upper layer modules |
|---|---|

# Simplify the memory acess by providing a logical address space
# Enable merging non-contiguous physical address areas to a contiguous logical memory area
# Enable merging of memory areas from different memory devices
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | # Combination of internal and external memory |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 初始化
*原文标题：Initialization*

MemAcc module and Mem driver shall provide an interface for initialization
⌈
| Description: | MemAcc module and Mem driver shall provide an interface for initialization of all states and all global variables of the module. |
|---|---|

Before initialization, MemAcc module and Mem driver are inactive.
| Rationale: | Basic functionality |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | ECU initialization. |
| Supporting Material: | - |

⌋

### 17. Normal Operation

MemAcc module and Mem driver shall provide asynchronous memory access functions
⌈
| Description: | MemAcc module and Mem driver shall provide asynchronous functions for accessing memory devices. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Memory access functions must be non-blocking since the upper layer modules expect an asynchronous interface. |
| Supporting Material: | - |

⌋

 MemAcc module and Mem driver shall support optional services
⌈
| Description: | MemAcc module and Mem driver shall provide measures to make Mem driver services optional and indicate to the upper layer module that a specific service is not available. |
|---|---|
| Rationale: | The erase service is not needed for all memory device technologies, e.g., phase change memory (PCM). |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | # Memory device technologies which don't need an erase service |

# Read-only Mem drivers
| Supporting Material: | - |
|---|---|

⌋

 MemAcc module and Mem driver shall provide a synchronous status function
⌈
| Description: | MemAcc module and Mem driver shall provide a synchronous function which returns the job processing status. |
|---|---|
| Rationale: | Provide memory job processing status to the upper layer module. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 关机 Operation
*原文标题：Shutdown Operation*

The modules of the Memory Abstraction Layer don't need any shutdown capabilities (also there are no shutdown capabilities in the flash or EEPROM driver).

### 19. Fault Operation

The FEE and EA modules shall detect possible data inconsistencies due to aborted / interrupted write operations
⌈
| Description: | The FEE and EA modules shall detect possible data inconsistencies due to aborted / interrupted write operations. |
|---|---|
| Rationale: | The "user" shall not work on inconsistent data therefore it has to be recognized. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | 1) A write operation is interrupted by a loss of power, after power-on-reset the possible inconsistency of data shall be detected upon the next read access to the affected memory area. |

2) A write operation is cancelled by the upper layer. Upon next read access to the affected memory area the possible data inconsistency shall be detected.
| Supporting Material: | Depending on the implementation, the physical device and the point in the write operation at which the interrupt occurs the FEE or EA module might be able to determine that the operation has failed but not which was the block that should have been written. |
|---|---|

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 存储抽象接口
*原文标题：Memory Abstraction Interface*

The following requirements have been taken over from the SPAL SRS on Memory Abstraction and have been adapted (in wording only) to the architectural concept shown in Figure .

### 21. 通用
*原文标题：General*

The Memory Abstraction Interface shall provide uniform access to the API services of the underlying memory abstraction modules
⌈
| Description: | The Memory Abstraction Interface shall provide uniform access to those API services of the underlying memory abstraction modules that are required for usage within the NVRAM manager. |
|---|---|

Further comments:

The initialization routines and the job processing functions are not mapped by the memory abstraction interface.
| Rationale: | Allow usage of memory abstraction modules by one uniform interface. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Allow the upper layer module access to internal and external memory devices without any difference. |
| Supporting Material: | This requirement shall replace . |

⌋

 The Memory Abstraction Interface shall allow the selection of an underlying memory abstraction module by using a device index
⌈
| Description: | The Memory Abstraction Interface shall allow the selection of an underlying memory abstraction module (FEE or EA module) by using a device index. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 配置
*原文标题：Configuration*

The Memory Abstraction Interface shall allow the pre-compile time configuration of the number of underlying memory abstraction modules
⌈
| Description: | The Memory Abstraction Interface shall allow the pre-compile time configuration of the number of underlying memory abstraction modules. |
|---|---|
| Rationale: | Flexibility |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | One ECU only uses internal EEPROM (thus needing one EA module), another ECU uses both internal plus external EEPROM (thus needing two EA modules). |
| Supporting Material: | WP Architecture |

This requirement shall replace .
⌋

### 23. Normal Operation

The Memory Abstraction Interface shall preserve the functionality of the underlying memory abstraction module
⌈
| Description: | The Memory Abstraction Interface shall preserve the functionality of the underlying memory abstraction module. It shall not provide additional functionality. |
|---|---|
| Rationale: | Simplicity, efficiency |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The memory abstraction modules abstract from all hardware properties, the Memory Abstraction Interface does not need to add anything (it only is needed to access more than one memory abstraction module). |
| Supporting Material: | This requirement shall replace . |

⌋

### 24. Fault Operation

The Memory Abstraction Interface shall only check those parameters that are used within the interface itself
⌈
| Description: | The Memory Abstraction Interface shall only check those parameters that are used within the interface itself and that are not passed to the underlying memory abstraction modules. |
|---|---|
| Rationale: | Simplicity, efficiency: avoid double checking of parameters. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The device index may be checked (depending on the setting of the development error detection switch). The block address shall not be checked. |
| Supporting Material: | This requirement shall replace . |

⌋

### 25. Onboard Device 抽象
*原文标题：Onboard Device Abstraction*

For the Onboard Device Abstraction the same requirements like for the Memory Hardware Abstraction apply. One member of the Onboard Device Abstraction is the Watchdog Interface.

### 26. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 27. 存储抽象模块
*原文标题：Memory Abstraction Modules*

The EA module shall extend the functional scope of an EEPROM driver
⌈
| Description: | The EEPROM Abstraction Layer (EA) shall extend the functional scope of an EEPROM driver. In addition to the properties of an EEPROM driver, the EA shall work on a virtual 32bit address space and it shall abstract completely from the limitation of erase / write cycles given by the underlying device. |
|---|---|
| Rationale: | Uniform handling of all EEPROM devices. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The NVRAM manager shall not need to be changed if the underlying EEPROM drivers and devices change. |
| Supporting Material: | AUTOSAR SRS EEPROM driver |

⌋

 The FEE module shall extend the functional scope of an internal flash driver
⌈
| Description: | The Flash EEPROM Emulation (FEE) shall extend the functional scope of an internal flash driver. It shall have the same functional scope and API as an EA module. |
|---|---|
| Rationale: | Uniform handling of all flash devices. |

Applies To:
| Dependencies: | Scope of EEPROM Abstraction Layer |
|---|---|
| Use Case: | The NVRAM manager shall not need to be changed if the underlying flash drivers and devices change. |
| Supporting Material: | AUTOSAR SRS EEPROM driver |

AUTOSAR SRS Flash driver
⌋

### 28. 存储抽象接口
*原文标题：Memory Abstraction Interface*

### 29. 时序需求
*原文标题：Timing Requirements*

The Memory Abstraction Interface shall preserve the timing behavior of the underlying memory abstraction modules and their APIs
⌈
| Description: | The Memory Abstraction Interface shall preserve the timing behavior of the underlying memory abstraction modules and their APIs by 1:1 mapping of the Memory Abstraction Interface API to the memory abstraction modules' API |
|---|---|
| Rationale: | Simplicity, efficiency |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Example: |

The write service of the Memory Abstraction Interface is directly mapped to the write service of an underlying memory abstraction module (FEE or EA).
| Supporting Material: | WP Architecture |
|---|---|

This requirement shall replace .
⌋

### 30. Onboard Device 抽象
*原文标题：Onboard Device Abstraction*

For the Onboard Device Abstraction the same requirements like for the Memory Hardware Abstraction apply. One member of the Onboard Device Abstraction is the Watchdog Interface.

### 31. References

### 32. 附录
*原文标题：Appendix*

### 33. Change history of AUTOSAR traceable items

### 34. Traceable item history of this document according to AUTOSAR Release R24-11

### 35. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 36. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 37. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 38. Traceable item history of this document according to AUTOSAR Release R24-11

### 39. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 40. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 41. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none
