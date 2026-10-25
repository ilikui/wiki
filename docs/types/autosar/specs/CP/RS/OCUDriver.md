# Requirements on OCU Driver (`OCUDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 614 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_OCUDriver_614\AUTOSAR_CP_RS_OCUDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_OCUDriver_614\AUTOSAR_CP_RS_OCUDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_OCUDriver_614\zzgen\CP_RS_OCUDriver.complete.txt`

## 文档简介

This document specifies requirements on the Output Compare Unit Driver.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the Output Compare Unit Driver.

### 2. How to read this document

Each requirement has its unique identifier starting with the prefix "BSW" (for "Basic Software"). For any review annotations, remarks or questions please refer to this unique ID rather than chapter or page numbers!

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

* The representation of requirements in AUTOSAR documents follows the table specified in .
* In requirements, the following specific semantics are used

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求指南
*原文标题：Requirements Guidelines*

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
* Output for other WPs (e.g. Description Templates, Tooling...)
* ...

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to OCU Driver that are not included in the AUTOSAR Glossary . Acronyms and abbreviations that have a local scope are not contained in the AUTOSAR glossary. These must appear in a local glossary.

| Acronym | Description |
|---|---|
| OCU | Output Compare Unit |
| OCU channel | Represents a logical entity composed of a free running counter a comparison threshold and the action that is done as a result of the comparison process. |
| Compare threshold. | Target value that is compared with the content of the counter each time the counter increases by one unit. |
| Free running counter | A counter that runs from a minimum to a maximum value and restarts automatically to the minimum after reaching the maximum value. |
| DMA | Direct memory access |
| SPAL | Standard Peripheral Abstraction Layer |

| Abbreviation | Description |
|---|---|
| STD | Standard |
| UNINIT | Uninitialized (= not initialized) |

As this is a document from professionals for professionals, all other terms are expected to be known.

### 6. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the OCU Driver.

### 7. 功能概述
*原文标题：Functional Overview*

The driver provides a means to compare two values and act automatically upon compare match, allowing therefore speeding up software processes.

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Output Compare driver (OCU).

Each OCU channel is linked to hardware OCU which belongs to the microcontroller.

The driver provides services for initialization and control of the microcontroller internal OCU peripheral. The OCU module can generate HW signals to drive external devices.

The picture below shows the typical representation of an OCU channel.

The 'output' is the action that is actually done upon compare match. A software action and/or a hardware action can be performed according to the configuration.

### 8. 功能性需求
*原文标题：Functional Requirements*

### 9. 配置
*原文标题：Configuration*

The OCU driver shall support the following basic static configurations per channel
⌈
| Description: | The OCU driver shall support the following basic static configurations per channel: |
|---|---|

Mandatory parameters

* Symbolic name for channel / channel ID.
* Maximum value of the counter
* count resolution/frequency
* Notification function(s)
* Default value of the threshold
* Assigned hardware channel.

Optional parameters

* Count direction
* Output signal (internal signal or port pin, if provided by hardware). The default output level (value after reset) shall be available.

  * `OCU_LOW`/`OCU_HIGH`,
* Hardware event(s) triggered by the channel (if supported by HW).

  * The hardware resource ID: (e.g `OCU_ADC`, `OCU_DMA`)
  * For each hardware resource the adequate number.

e.g: `ADC_chn1`.

* Optional clock settings if supported by hardware.

In addition, the OCU driver shall allow the configuration OCU-peripheral specific settings if supported by hardware.
| Rationale: | To allow different usage for each channel |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|

Use Case:
Supporting Material:
⌋

### 10. 初始化
*原文标题：Initialization*

After initialization of the OCU driver, all notifications shall be disabled
⌈
| Description: | After initialization of the OCU driver, all notifications shall be disabled. |
|---|---|

All channels shall be stopped. (No counting running).

In case a channel has an associated output pin, this pin shall be set to the default value defined in the configuration of the channel.
| Rationale: | To prevent unwanted events after initialization. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The OCU Driver shall provide the functionality to de-initialize OCU driver
⌈
| Description: | The OCU Driver shall provide the functionality to de-initialize OCU driver. |
|---|---|
| Rationale: | It is necessary to reset the driver specific resources (SFRs, variables ...) before a valid initialization can be done. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | De-initialization is needed before re-initialization with a valid configuration (post-build) during ECU runtime. |
| Supporting Material: | - |

⌋

### 11. Normal Operation

The OCU driver shall provide a notification for an OCU channel when the current value of the counter matches the threshold
⌈
| Description: | The OCU driver shall provide a notification for an OCU channel when the current value of the counter matches the threshold. The notification should be triggered under the following conditions: |
|---|---|

* The notification function configured as non null pointer
* and only if notifications are enabled
| Rationale: | Upon comparison matches on a channel, an action must be performed. The module that will perform the action needs to be informed. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Upper layers perform actions synchronized to a reference, which is represented by the current value of the threshold |

Supporting Material:
⌋

 The OCU driver shall allow enabling /disabling notifications for an OCU channel during runtime
⌈
| Description: | The OCU driver shall allow enabling /disabling notifications for an OCU channel during runtime. |
|---|---|

The following options shall be available for each selected channel:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 关机 Operation
*原文标题：Shutdown Operation*

None.

### 13. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

There is no non-functional requirement for the OCU Driver.

### 14. References

### 15. 附录
*原文标题：Appendix*

### 16. Change history of AUTOSAR traceable items

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

none

### 23. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 24. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 25. Traceable item history of this document according to AUTOSAR Release R23-11

### 26. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 27. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 28. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
