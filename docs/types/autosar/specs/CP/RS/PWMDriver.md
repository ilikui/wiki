# Requirements on PWM Driver (`PWMDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 113 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_PWMDriver_113\AUTOSAR_CP_RS_PWMDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_PWMDriver_113\AUTOSAR_CP_RS_PWMDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_PWMDriver_113\zzgen\CP_RS_PWMDriver.complete.txt`

## 文档简介

This document specifies requirements on the module PWM Driver.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the module PWM Driver.

### 2. Constraints

First scope for specification of requirements on basic software module is systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

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
* Initialisation
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

The glossary below includes acronyms and abbreviations relevant to SRS PWM Driver that are not included in the AUTOSAR Glossary .

| Acronym: | Description: |
|---|---|
| CS | Chip Select |
| DIO | Digital Input Output |
| ECU | Electric Control Unit |
| DMA | Direct Memory Access |
| ICU | Input Capture Unit |
| MAL | Old name of Microcontroller Abstraction Layer (replaced by MCAL because 'MAL' is a french term meaning 'bad') |
| MCAL | Microcontroller Abstraction Layer |
| MCU | Microcontroller Unit |
| MISO | Master Input Slave Output |
| MMU | Memory Management Unit |
| MOSI | Master Output Slave Input |
| Master | A device controlling other devices (slaves, see below) |
| Slave | A device being completely controlled by a master device |
| NMI | Non Maskable Interrupt |
| OS | Operating System |
| PLL | Phase Locked Loop |
| PWM | Pulse Width Modulation |
| RX | Reception (in the context of bus communication) |
| SPAL | The name of this working group |
| SFR | Special Function Register |
| RTE | RunTime Environment |

| Abbreviation: | Description: |
|---|---|
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

As this is a document from professionals for professionals, all other terms are expected to be known.

### 9. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the PWM Driver.

### 10. 功能概述
*原文标题：Functional Overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Pwm driver.

Each PWM channel is linked to a hardware PWM which belongs to the microcontroller. The type of the PWM signal ( for example center Align, left Align, Etc.. ) is not defined within this specification and is left up to the implementation.

The driver provides services for initialization and control of the microcontroller internal PWM stage (pulse width modulation). The PWM module generates pulses with variable pulse width. It allows the selection of the duty cycle and the signal period time.

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. 通用
*原文标题：General*

The PWM Driver shall provide a scaling scheme for duty cycle
⌈
| Description: | The PWM Driver shall provide the following scaling scheme for duty cycle: |
|---|---|

* 0 = 0%
* 0x8000 = 100%

0x8000 gives the highest resolution while allowing 100% duty cycle to be represented with a 16 bit value.
| Rationale: | The value 0x8000 (32768) is chosen because the following calculation can be implemented efficiently. |
|---|---|

Applies To:
| Dependencies: | Resolution of duty cycle |
|---|---|
| Use Case: | Source code example: |

AbsoluteDutyCycle = ((uint32)AbsolutePeriodTime * RelativeDutyCycle) >> 15;
| Supporting Material: | - |
|---|---|

⌋

 The PWM driver shall provide a 16 bit interface to set the duty cycle
⌈
| Description: | The PWM driver shall provide a 16 bit interface to set the duty cycle. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | The duty cycle is always the active level of the signal (High or low, depends on idle level configuration, see ) |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 13. 配置
*原文标题：Configuration*

The PWM Driver shall allow the module wide configuration of the numbers of PWM channels
⌈
| Description: | The PWM Driver shall allow the module wide configuration of the following parameters: |
|---|---|

* Number of PWM channels
| Rationale: | Basic configuration |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The PWM driver shall allow the static configuration of PWM channel properties
⌈
| Description: | The PWM driver shall allow the static configuration of the following options for each PWM channel. |
|---|---|

Mandatory parameters:

* assigned HW channel
* default value for period
* default value for duty cycle
* Polarity (high or low)
* idle state (duty cycle = 0%) high or low
* Type of Channel:

  * Fixed Period
  * Fixed Period, shifted (if supported by hardware)
  * Variable Period

Optional parameters (if supported by hardware):

* channel phase shift
* Reference channel for phase shift
* microcontroller specific channel properties
| Rationale: | Basic channel configuration. |
|---|---|

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Channel phase shift: to avoid EMC problems |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 初始化
*原文标题：Initialization*

By initializing the PWM driver, all PWM-channels shall be started
⌈
| Description: | By initializing the PWM driver, all PWM-channels are started. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 By de-initializing the PWM driver, all PWM-channels shall be stop
⌈
| Description: | By de-initializing the PWM driver, all PWM-channels shall be stopped.The state of the PWM outputs shall be configurable. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | Configuration of PWM channel properties |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 15. Normal Operation

The PWM driver shall provide a service for setting the duty cycle of a selected channel
⌈
| Description: | The PWM driver shall provide a service for setting the duty cycle of a selected channel. The parameters shall be |
|---|---|

* PWM channel
* PWM duty cycle (range: 0..100%; 0% = Inverted polarity level, 100% = Polarity level, no spikes allowed)
| Rationale: | Basic functionality. |
|---|---|

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The PWM Driver shall wait to the end of the signal period to update the duty cycle of a PWM signal
⌈
| Description: | The PWM Driver shall wait to the end of the signal period to update the duty cycle of a PWM signal. This feature shall be configurable. |
|---|---|
| Rationale: | Duty cycle not validduring a period. |

Duty cycle changes during a period can lead to undesired artefacts on the output signal (insertion of one pulse that is too short/too long). I know this as "buffered/unbuffered PWM output operation" (Freescale HC08). Buffered operation (which avoids those dirt effects) requires 2 registers instead of one.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

The PWM driver shall not cover a PWM emulation on general purpose I/O
⌈
| Description: | The PWM driver shall only work with the PWM pins on the MCU. |
|---|---|

The PWM driver shall not cover a PWM emulation on general purpose I/O.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 17. References

### 18. 附录
*原文标题：Appendix*

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
