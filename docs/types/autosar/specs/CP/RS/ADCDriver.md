# Requirements on ADC Driver (`ADCDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 111 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_ADCDriver_111\AUTOSAR_CP_RS_ADCDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_ADCDriver_111\AUTOSAR_CP_RS_ADCDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_ADCDriver_111\zzgen\CP_RS_ADCDriver.complete.txt`

## 文档简介

This document specifies requirements on the module ADC Driver. The ADC driver is targeting Successive Approximation ADC Hardware. Delta Sigma ADC conversion requirements are out of scope of this document.

Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the module ADC Driver. The ADC driver is targeting Successive Approximation ADC Hardware. Delta Sigma ADC conversion requirements are out of scope of this document.

Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 2. How to Read this Document

Each requirement has its unique identifier starting with the prefix "BSW" (for "Basic Software"). For any review annotations, remarks or questions, please refer to this unique ID rather than chapter or page numbers!

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

### 4. 需求结构
*原文标题：Requirements Structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

Functional Requirements:

* Configuration (which elements of the module need to be configurable).
* Initialization.
* Normal Operation.
* Shutdown Operation.
* Fault Operation.
* ...

Non-Functional Requirements:

* Timing Requirements.
* Resource Usage.
* Usability.
* Output for other WPs (e.g. Description Templates, Tooling,...).
* ...

### 5. 缩略语
*原文标题：Acronyms and Abbreviations*

Acronyms and abbreviations that have a local scope are not contained in the AUTOSAR glossary. These must appear in a local glossary.

| Acronym: | Description: |
|---|---|
| CS | Chip select |
| DIO | Digital Input Output |
| ECU | Electric Control Unit |
| EOL | End Of Line |

Often used in the term 'EOL Programming' or 'EOL Configuration'
| ICU | Input Capture Unit |
|---|---|
| MAL | Old name of Microcontroller Abstraction Layer (replaced by MCAL because 'MAL' is a French term meaning 'bad') |
| MCAL | Microcontroller Abstraction Layer |
| MCU | Microcontroller Unit |
| MMU | Memory Management Unit |
| Master | A device controlling other devices (slaves, see below) |
| Slave | A device being completely controlled by a master device |
| NMI | Non maskable interrupt |
| OS | Operating System |
| PLL | Phase Locked Loop |
| PWM | Pulse Width Modulation |
| RX | Reception (in the context of bus communication) |
| SPAL | The name of this working group |
| SFR | Special Function Register |
| RTE | Runtime environment |
| WP | Work Package |
| ADC | Analogue Digital Converter |
| FFT | Fast Fourier Transformer |

| Abbreviation: | Description: |
|---|---|
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

The following expressions are used within the ADC driver:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 需求规范
*原文标题：Requirements Specification*

### 7. 功能概述
*原文标题：Functional Overview*

The ADC driver initializes and controls the internal Analogue Digital Converter unit(s) of the microcontroller. It provides services to start and stop a conversion respectively to enable and disable the trigger source of a conversion. Furthermore, it provides services to enable and disable a notification mechanism and routines to query the status and result of a conversion.

The ADC Driver shall work on so called ADC Channels. An ADC channel combines an analogue input pin, the needed ADC circuitry itself and a conversion result register into an entity that can be individually controlled and accessed via the ADC Driver.

All used terms are specified in the following chapter.

### 8. 功能性需求
*原文标题：Functional Requirements*

### 9. 配置
*原文标题：Configuration*

The ADC Driver shall support a specific basic static configurations per channel
⌈
| Description: | The ADC Driver shall support the following basic static configurations per channel (if supported by HW): |
|---|---|

* Symbolic name for channel.
* Sampling time.
* Conversion time.
* Resolution in bits.
* Reference voltage source.
* Clock source with optional prescaler settings.
* Other MCU dependent parameters.

Note: If one or more of these configuration parameters can only be assigned to the whole module, it's on the configuration tool to optimize data representation.
| Rationale: | To allow different usage for each channel. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The ADC Driver shall allow to group ADC channels that belong to the same ADC HW unit
⌈
| Description: | The ADC Driver shall allow to group ADC channels that belong to the same ADC HW unit into so called ADC channel groups (or groups for short). |
|---|---|

An ADC Channel Group shall consist of at least one ADC Channel.

All channels of a group share the same group configuration.

The ADC Driver shall support the following basic static configurations per channel group (if supported by HW):

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Normal Operation

The ADC driver shall mask out information bits from the conversion result not belonging to the ADC value
⌈
| Description: | The ADC driver shall mask out information bits from the conversion result not belonging to the ADC value. |
|---|---|
| Rationale: | Information bits are microcontroller specific. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Some \muCs are saving information bits in the result register (e.g. the channel number). These bits shall be masked out. |
| Supporting Material: | - |

⌋

 The result alignment shall be configurable between right-alignment and left-alignment
⌈
| Description: | The result alignment shall be configurable between right-alignment and left-alignment. |
|---|---|
| Rationale: | Information bits are microcontroller specific. |

Code and runtime optimization in driver and upper layer.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The ADC Driver shall provide a synchronous service for reading the last valid conversion results of the selected channel group
⌈
| Description: | The ADC Driver shall provide a synchronous service for reading the last valid conversion results of the selected channel group (passed as parameter). |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. References

### 12. 附录
*原文标题：Appendix*

### 13. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 14. Traceable item history of this document according to AUTOSAR Release R25-11

### 15. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 16. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 17. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 18. Traceable item history of this document according to AUTOSAR Release R24-11

### 19. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 20. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 21. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 22. Traceable item history of this document according to AUTOSAR Release R23-11

### 23. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 24. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 25. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 26. Traceable item history of this document according to AUTOSAR Release R22-11

### 27. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| The ADC Driver shall allow a specific result access modes for each ADC Channel Group |  |
| The ADC driver shall mask out information bits from the conversion result not belonging to the ADC value |  |
| Based on the channel group configuration the ADC driver shall be able to handle the buffers of stream jobs |  |
| The ADC Driver shall provide a service for querying the status of an ADC Channel Group |  |
| If the ADC provides signed values, the ADC driver shall put the sign bit into the MSB of the return value |  |
| The ADC Driver shall support a specific basic static configurations per channel |  |
| The ADC Driver shall provide notification functions to inform the caller about the end of a conversion for a Channel Group |  |
| The ADC driver shall provide a service to enable and disable each notification function separately |  |
| The ADC driver shall provide services to start and stop the conversion of an ADC Channel Group for all conversion modes |  |
| The ADC Driver shall allow to group ADC channels that belong to the same ADC HW unit |  |
| The ADC driver shall provide (for streaming access mode) a service to identify most recent sample and number of available samples of a channel group |  |

 | T

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 29. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 30. Added Constraints in R22-11

none

### 31. Changed Constraints in R22-11

none

### 32. Deleted Constraints in R22-11

none

### 33. Added Advisories in R22-11

none

### 34. Changed Advisories in R22-11

none

### 35. Deleted Advisories in R22-11

none
