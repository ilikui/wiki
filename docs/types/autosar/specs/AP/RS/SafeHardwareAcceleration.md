# Requirements on Safe Hardware Acceleration (`SafeHardwareAcceleration`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 1087 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_SafeHardwareAcceleration_1087\AUTOSAR_AP_RS_SafeHardwareAcceleration.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_SafeHardwareAcceleration_1087\AUTOSAR_AP_RS_SafeHardwareAcceleration.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_SafeHardwareAcceleration_1087\zzgen\AP_RS_SafeHardwareAcceleration.complete.txt`

## 文档简介

This document specifies requirements on the functional cluster Safe Hardware Acceleration of the AUTOSAR Adaptive Platform. The motivation is to provide a standardized and portable way to utilize hardware acceleration for safe and efficient computations.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the functional cluster Safe Hardware Acceleration of the AUTOSAR Adaptive Platform. The motivation is to provide a standardized and portable way to utilize hardware acceleration for safe and efficient computations.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 需求指南
*原文标题：Requirements Guidelines*

The requirements for the functional cluster Safe Hadware Acceleration should consider AUTOSAR Safety Requirements . Currently there are no other guidelines.

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms, abbreviations and terms relevant to the current document that are not included in the AUTOSAR TR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| DSP | Digital signal processor. |
| FPGA | Field programmable gate array. |
| GPU | Graphics processing unit. |
| HPC | High performance computing. |
| HWA | Hardware Accelerator. |
| SHWA | Safe Hardware Acceleration functional cluster in AUTOSAR Adaptive platform. |

| Term: | Description: |
|---|---|
| Asynchronous error | The error happens independently of user program like an error in hardware. This type of error should be caught and handled by specific error handler when they occurr. |
| Hardware Accelerator | A computer hardware designed to perform specific functions more efficiently when compared to software running on a general-purpose central processing unit (CPU). Examples of such devices are GPU, FPGA, DSP etc. |
| Host device | A device that is charged with controlling other devices. It is able to run code that can offload some of the processing to a dedicated hardware unit(hardware accelerator). Usually it is a general-purpose central processing unit (CPU) in heterogeneous systems. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the functional cluster Safe Hardware Acceleration. The functional cluster Safe Hardware Acceleration will be referenced as SHWA in the remainder of this document.

### 6. 功能概述
*原文标题：Functional Overview*

The AUTOSAR Adaptive Platform SHWA provides APIs for Adaptive Applications and other functional clusters of the AUTOSAR Adaptive Platform. The AUTOSAR Adaptive Platform SHWA is responsible for the aspects related to parallel computations considering safety rules and restrictions of the Adaptive Platform.

* Making heavy computations efficient by performing computations in parallel(simultaneous multi-core computation on the HWA).
* Error detection and correction of the tasks executed on the HWA.
* Monitoring hardware accelerators working states.

### 7. 功能性需求
*原文标题：Functional Requirements*

SHWA Operations Execution on Hardware Accelerator
⌈
| Description: | SHWA shall support execution of operations needed for Adaptive Application on Hardware accelerator. |
|---|---|
| Rationale: | Adaptive Application needs to perform dedicated operations on hardware accelerator to improve efficiency. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 SHWA Data Exchange with Hardware Accelerators
⌈
| Description: | SHWA shall support mechanisms of data exchange between Adaptive application and Hardware accelerator within the same ECU. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 SHWA Hardware Resources Restrictions
⌈
| Description: | SHWA shall support mechanisms of configuration of Hardware accelerator resources allowed for use. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Hardware Accelerator Runtime State Monitoring
⌈
| Description: | SHWA shall support mechanisms to monitor the state of the Hardware accelerator in runtime. |
|---|---|
| Rationale: | Adaptive Application needs to make a decision if it's safe to execute planned operations. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Non-Functional 需求
*原文标题：Non-Functional Requirements*

SHWA multi-processing
⌈
| Description: | Objects created by SHWA shall be always local to one Process. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 9. References

### 10. 附录
*原文标题：Appendix*

### 11. 附录
*原文标题：Appendix*

There is no content.

### 12. Change history of AUTOSAR traceable items

### 13. Change History of this document according to AUTOSAR Release R24-11

### 14. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| SHWA Operations Execution on Hardware Accelerator |  |
| SHWA Data Exchange with Hardware Accelerators |  |
| SHWA Hardware Resources Restrictions |  |
| Hardware Accelerator Runtime State Monitoring |  |
| Timer-based Blocking Operations Cancellation Mechanism |  |
| Hardware Accelerator Type Selection |  |
| Synchronous Errors Handling Mechanism |  |
| Asynchronous Error Handling Mechanism |  |
| Safe State Recovery Mechanism |  |
| Allocated Resources Explicit Clean Up |  |

### 15. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 16. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 17. Change History of this document according to AUTOSAR Release R25-11

### 18. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| SHWA multi-processing |  |
| Initialization and Shutdown |  |
| Memory Allocation |  |
| Device Properties |  |
| Device Abstraction |  |
| Event-based Synchronization |  |
| Data Access |  |
| Environment Information |  |

### 19. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| SHWA Operations Execution on Hardware Accelerator |  |
| Synchronous Errors Handling Mechanism |  |
| Data Integrity Support |  |
| Allocated Resources Clean Up |  |

### 20. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
