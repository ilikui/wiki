# Requirements on ICU Driver (`ICUDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 112 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_ICUDriver_112\AUTOSAR_CP_RS_ICUDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_ICUDriver_112\AUTOSAR_CP_RS_ICUDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_ICUDriver_112\zzgen\CP_RS_ICUDriver.complete.txt`

## 文档简介

This document specifies requirements on the module ICU Driver.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the module ICU Driver.

### 2. Constraints

First scopes for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

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

### 5. 需求结构
*原文标题：Requirements structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

### 6. 功能性需求：
*原文标题：Functional Requirements:*

* Configuration (which elements of the module need to be configurable)
* Initialization
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

### 7. Non-Functional 需求：
*原文标题：Non-Functional Requirements:*

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling,...)
* ...

### 8. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to ICU Driver that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| Circular buffer | An area of memory used to store a continuous stream of data by starting again at the beginning of the buffer after reaching the end. |
| DIO | Digital Input Output |
| Duty Cycle | Percentage of High Time to Period Time |

(High Time / Period Time) * 100%
| ECU | Electric Control Unit |
|---|---|
| High Time | See Figure "ICU time definitions". The standard type STD_HIGH shall be used. |
| ICU | Input Capture Unit |
| ICU channel | Represents a logical ICU entity bound to one input signal and the hardware resources for the configured measurement mode. |
| Linear buffer | An area of memory used to store a stream of data by starting at the beginning of the buffer and stopping at the latest on reaching the end. |
| Low Time | See Figure "ICU time definitions" |
| MAL | Old name of Microcontroller Abstraction Layer (replaced by MCAL because 'MAL' is a French term meaning 'male') |
| MCAL | Microcontroller Abstraction Layer |
| MCU | Microcontroller Unit |
| Measurement mode | The measurement mode defines the capability for signal acquisition and evaluation. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the ICU Driver.

### 10. 功能概述
*原文标题：Functional Overview*

### 11. ICU 驱动
*原文标题：ICU Driver*

The ICU Driver controls the input capture unit of the microcontroller. It provides the following features:

* Period-, Low-, High time measurement
* Edge detection and notification
* Edge counting
* Edge time stamping
* Wake-up interrupts

The picture below shows the typical key resources of a Capture Compare Unit:

For signal edge detection the edge detector of a capture compare unit or the interrupt controller for external events is used.

For signal measuring a capture timer and at least one capture register is needed. Simple signal edge detection without time measurement can also be implemented with external interrupt control units:

However Non Maskable Interrupts (NMI) are not in the scope of this module, because there is nothing which can be controlled.

### 12. 功能性需求
*原文标题：Functional Requirements*

### 13. ICU 驱动
*原文标题：ICU Driver*

### 14. 配置
*原文标题：Configuration*

The ICU driver shall allow the configuration of global parameters
⌈
| Description: | The ICU driver shall allow the configuration of the following parameters: |
|---|---|

* Clock source with optional prescaler (module wide)
* MCU Hardware dependent settings (only ICU-peripheral specific settings)
| Rationale: | Configuration of microcontroller specific ICU features |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The ICU driver shall support basic static configurations per channel
⌈
| Description: | The ICU driver shall support the following basic static configurations per channel: |
|---|---|

Mandatory parameters

* Symbolic name for channel
* Notification function(s)
* Wake-up capability

Optional parameters

* Signal Source (Configured Port Pin or Input from a Signal Matrix) if provided by hardware (if multiple sources are selectable)
* Measurement Mode: (if multiple modes are selectable)

  * Signal Edge Detection / Notification
  * Signal Measurement
  * Timestamp
  * Edge Counter
* If measurement mode is "timestamp measurement", buffer handling shall be configurable. The values shall be:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 初始化
*原文标题：Initialization*

After initialization of the ICU driver all notifications shall be disabled
⌈
| Description: | After initialization of the ICU driver all notifications shall be disabled. |
|---|---|

All ICU channel status shall be set to INACTIVE.

The wakeup-capability of a channel shall be disabled after the initialization.

All used registers shall be initialized (including pending flags for interrupts) .
| Rationale: | The user of an ICU channel shall be responsible to enable / disable the notification. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The ICU Driver shall provide the functionality to deinitialize ICU channels to their power on reset state
⌈
| Description: | The ICU Driver shall provide the functionality to deinitialize ICU channels to their power on reset state (not including registers which are not writeable). |
|---|---|
| Rationale: | It is necessary to reset all hardware registers to the same state before a valid initialization can be done. Otherwise the code for the initialization is different for initialization after power on reset or after a mode change. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Normal Operation

The ICU driver shall allow to enable/disable the notification for an ICU channel at runtime
⌈
| Description: | The ICU driver shall allow to enable/disable the notification for an ICU channel at runtime. |
|---|---|

The following options shall be available for each selected channel:

* disable notification
* enable notification on

  * rising edge (if supported by hardware)
  * falling edge (if supported by hardware)
  * both edges (if supported by hardware)
| Rationale: | Adaptable notification according to the next expected edge(s). |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Edge detection of a hall sensor. |

The disable Notification can be used to implement an anti saturation mechanism to avoid to jeopardize the entire system in case of too many interrupts coming to ICU.
| Supporting Material: | - |
|---|---|

⌋

 The ICU driver shall provide notification for an ICU Channel at the configured signal edge
⌈
| Description: | The ICU driver shall provide notification for an ICU Channel at the configured signal edge (rising / falling / both edges) in the following configuration: |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 关机 Operation
*原文标题：Shutdown Operation*

The ICU driver shall provide a service for enabling / disabling the wake-up capability of single ICU channels
⌈
| Description: | The ICU driver shall provide a service for enabling / disabling the wake-up capability of single ICU channels. |
|---|---|
| Rationale: | Controlling the wake-up conditions of a MCU needs to enable or disable the HW interrupts, not only some notification conditions. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Limitation of the wake-up occurrences in the case of error condition. |
| Supporting Material: | - |

⌋

### 18. Constrains to other functions

Constrains to Mode Management:

After a wake-up condition, the ECU state manager shall take care about the wake-up information before it calls the initialization service of the ICU driver.

### 19. References

### 20. 附录
*原文标题：Appendix*

### 21. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 22. Traceable item history of this document according to AUTOSAR Release R25-11

### 23. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 24. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 25. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
