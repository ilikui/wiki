# Requirements on GPT Driver (`GPTDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 187 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_GPTDriver_187\AUTOSAR_CP_RS_GPTDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_GPTDriver_187\AUTOSAR_CP_RS_GPTDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_GPTDriver_187\zzgen\CP_RS_GPTDriver.complete.txt`

## 文档简介

This document specifies requirements on the module GPT Driver.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the module GPT Driver.

### 2. Constraints

First scope for specification of requirements on basic software modules is systems, which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 3. How to read this document

Each requirement has its unique identifier starting with the prefix "BSW" (for "Basic Software"). For any review annotations, remarks or questions, please refer to this unique ID rather than chapter or page numbers!

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
* Output for other WPs (e.g. Description Templates, Tooling...)
* ...

### 8. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to GPT driver that are not included in the AUTOSAR Glossary .

| Acronym: | Description: |
|---|---|
| CS | Chip select |
| DIO | Digital Input Output |
| ECU | Electric Control Unit |
| EOL | End Of Line |

Often used in the term 'EOL Programming' or 'EOL Configuration'
| ICU | Input Capture Unit |
|---|---|
| MAL | Old name of Microconroller Abstraction Layer (replaced by MCAL because 'MAL' is a french term meaning 'bad') |
| MCAL | Microconroller Abstraction Layer |
| MCU | Microcontroller Unit |
| MMU | Memory Management Unit |
| Master | A device controlling other devices (slaves, see below) |
| Slave | A device being completely controlled by a master device |
| NMI | Non maskable interrupt |
| OS | Operating System |
| PLL | Phase Locked Loop |
| PWM | Pulse Width Modulation |
| RX | Reception (in the context of bus communication) |
| SPAL | The name of this working group (Standard Peripheral Abstraction Layer) |
| SFR | Special Function Register |
| RTE | Runtime environment |
| WP | Work Package |

| Abbreviation: | Description: |
|---|---|
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

As this is a document from professionals for professionals, all other terms are expected to be known.

### 9. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the GPT driver specification.

### 10. 功能概述
*原文标题：Functional Overview*

The GPT driver is part of the microcontroller abstraction layer (MCAL). It initializes and controls the internal General Purpose Timer(s) (GPT) of the microcontroller.

The GPT driver provides services and configuration parameters for

* Starting and stopping hardware timers
* Getting timer values
* Controlling time triggered interrupt notifications
* Controlling time triggered wakeup interrupts

The GPT driver is able to provide exact and short-term timings. The one-shot or continuous interrupt notifications of the GPT driver can be used where the OS Alarm service has too much overhead.

An example of a typical period time range is 50\mus ... 5 ms.

Some free running up counters - so-called GPT Predef Timers - are defined. These timers have predefined tick durations and predefined number of bits (physical time units and ranges). The GPT Predef Timers are used by the Time Service module.

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. 通用
*原文标题：General*

### 13. [SRS_Gpt_12328

]

 The GPT driver shall use the time unit ticks for all API services which are related to GPT timer channels
⌈
| Description: | The GPT driver shall use the time unit ticks for all API services which are related to GPT timer channels. |
|---|---|
| Rationale: | Conversions between physical time unit and ticks shall be part of the user software. |

Applies To:
| Dependencies: | Specification and configuration of time |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 14. [SRS_Gpt_13604

]

 The GPT driver shall support special free running up counters, so-called GPT Predef Timers
⌈
| Description: | The GPT driver shall support free running up counters (GPT Predef Timers) with predefined tick durations and predefined number of bits (physical time units and ranges). The functionality of the GPT Predef Timers shall be separated from the functionality relating to GPT timer channels. |
|---|---|
| Rationale: | The GPT driver shall provide the hardware time bases for the Time Service module. |

Applies To:
| Dependencies: | Specification and configuration of time |
|---|---|
| Use Case: | Time measurement, time based state machine, timeout supervision, busy waiting |
| Supporting Material: | - |

⌋

### 15. [SRS_Gpt_13605

]

 Different types of GPT Predef Timers shall be supported by the GPT driver
⌈
| Description: | The following types of GPT Predef Timers shall be supported by the GPT driver: |
|---|---|

* Timer 1\mus 16bit
* Timer 1\mus 24bit
* Timer 1\mus 32bit
* Timer 100\mus 32bit
| Rationale: | 1\mus: high resolution timer. |
|---|---|

16bit timer: To support 16bit hardware timers.

24bit timer: To support 24bit hardware timers.

32bit timer: To support 32bit hardware timers.

100\mus32bit timer: covers automotive use cases (time span 4.9 days)
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Time measurement, time based state machine, timeout supervision, busy waiting |
| Supporting Material: | - |

⌋

### 16. 配置
*原文标题：Configuration*

### 17. [SRS_Gpt_12404

]

 Configuration of one-shot/continuous mode for each timer channel shall be available
⌈
| Description: | The GPT Driver shall allow the following static configuration for each timer channel: |
|---|---|

* One-Shot mode: After the timer has reached its end value, the timer is stopped
* Continuous mode: After the timer has reached it's end value, the timer is restarted automatically
| Rationale: | Provision of guaranteed minimum delay time or guaranteed frequency. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | One-shot mode: |

Stepper motor control, where coil driver pulses must have a defined minimum duration. The timer is restarted after the output signal is set. Even if one output pulse is delayed (e.g. by interrupt disabling), the next pulse does not occur too early.

Continuous mode:

ADC conversion triggering. The ADC is triggered continuously at a fixed rate without the need of restarting the timer.

Input signal sampling. An input signal is sampled at a fixed rate.
| Supporting Material: | BMW Specification MCAL V1.0a, REQ MAL30.1.5 |
|---|---|

⌋

### 18. [SRS_Gpt_12114

]

 Each timer channel shall be configured in a way that the timer can use different clock sources
⌈
| Description: | The GPT driver shall make it possible to configure statically each timer channel in a way that the timer can use different clock sources if provided by hardware. |
|---|---|
| Rationale: | To provide general purpose functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The clock source is different in normal and power save mode. |
| Supporting Material: | - |

⌋

### 19. [SRS_Gpt_13606

]

 The GPT driver shall make it possible to configure statically which GPT Predef Timers are enabled
⌈
| Description: | The GPT driver shall make it possible to configure statically which GPT Predef Timers are enabled. |
|---|---|
| Rationale: | To disable GPT Predef Timers if timers can not be supported by hardware reasons. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Hardware does not support a GPT Predef Timer |
| Supporting Material: | - |

⌋

### 20. 初始化
*原文标题：Initialization*

### 21. [SRS_Gpt_12116

]

 The GPT Driver shall provide the functionality to deinitialize timer channels to their power on reset state
⌈
| Description: | The GPT Driver shall provide the functionality to deinitialize timer channels to their power on reset state. |
|---|---|
| Rationale: | It is necessary to reset all hardware registers to the same state before a valid initialization can be done. Otherwise the code for the initialization is different for initialization after power on reset or after a mode change. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | After changing internal clock frequency for power save modes it might be necessary to initialize the timer module with valid prescaler values. |
| Supporting Material: | - |

⌋

### 22. Normal Operation

### 23. [SRS_Gpt_12117

]

 The GPT Driver shall provide a synchronous service for reading the current timer value of each timer channel
⌈
| Description: | The GPT Driver shall provide a synchronous service for reading the current timer value of each timer channel. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Some signals need a time stamp. |
| Supporting Material: | - |

⌋

### 24. [SRS_Gpt_12128

]

 The GPT driver shall provide a service for starting a timer with specific parameters
⌈
| Description: | The GPT driver shall provide a service for starting a timer with the following parameters: |
|---|---|

* timer channel
* time period (number of ticks after the notification shall occur)
| Rationale: | Basic functionality. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 25. [SRS_Gpt_12119

]

 The GPT driver shall provide the service for stopping each channel of the timer
⌈
| Description: | The GPT driver shall provide the service for stopping each channel of the timer. |
|---|---|
| Rationale: | Without control the timer runs as long as power is supplied. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The timer has to be stopped before validinitialization or change of its value to avoid unwanted activities bound to timer values. |
| Supporting Material: | - |

⌋

### 26. [SRS_Gpt_12120

]

 The GPT Driver shall provide a notification per channel that is called when the time period has elapsed
⌈
| Description: | The GPT Driver shall provide a notification per channel that is called when the time period has elapsed. This callback shall be statically configurable per channel. |
|---|---|
| Rationale: | A timer is normally connected |

Applies To:
| Dependencies: | Start timer |
|---|---|
| Use Case: | # A functionality needs the information that a certain amount of time has passed. |

# To synchronize another action from a user function
| Supporting Material: | - |
|---|---|

⌋

### 27. [SRS_Gpt_12121

]

 The GPT Driver shall provide the functionality to enable the call of a notification function per channel during the runtime
⌈
| Description: | The GPT Driver shall provide the functionality to enable the call of a notification function per channel during the runtime. |
|---|---|
| Rationale: | A notification function has to be declared explicitly. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | When the timer rolls over. Roll over means that the timer reaches its maximum value and starts from zero or that it reaches a predefined value and starts from zero. |
| Supporting Material: | - |

⌋

### 28. [SRS_Gpt_12122

]

 The GPT Driver shall provide the functionality to disable the call of a notification function per channel during the runtime
⌈
| Description: | The GPT Driver shall provide the functionality to disable the call of a notification function per channel during the runtime. |
|---|---|
| Rationale: | Without disabling the notification would be active as long as the timer is active. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | When the timer rolls over. (see enable notification) |
| Supporting Material: | - |

⌋

### 29. [SRS_Gpt_13601

]

 The GPT Driver shall be capable of performing wakeup events, whenever a predefined wakeup period has expired
⌈
| Description: | The GPT Driver shall be capable of performing wakeup events, whenever a predefined wakeup period has expired. |
|---|---|

This feature shall only be available, if supported by hardware
| Rationale: | Reducing power consumption |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Flashing LED. The ECU is put in sleep mode in the time between the flashes and woken up, when the LED should be turned on again. |
| Supporting Material: | - |

⌋

### 30. [SRS_Gpt_13602

]

 The GPT driver shall provide a service for enabling / disabling the wake-up capability of single timer channels
⌈
| Description: | The GPT driver shall provide a service for enabling / disabling the wake-up capability of single timer channels. |
|---|---|

Related notifications for this channel shall be enabled / disabled.
| Rationale: | Controlling the wake-up conditions of a MCU needs to enable or disable the notifications. |
|---|---|

Applies To:
| Dependencies: | Wakeup functionality |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 31. [SRS_Gpt_13603

]

 The GPT driver shall provide a service for selecting the Wake-up mode
⌈
| Description: | The GPT driver shall provide a service for selecting the Wake-up mode: |
|---|---|

* Normal mode (mandatory)
* Wake-up mode

In normal mode all notifications are available as configured.

In Wake-up mode only those notifications, which cause wake-up capable notifications, are available.

All other notifications are disabled and must not lead to an exit of the reduced power mode state (e.g. idle, halt) of the MCU if the event occurs.
| Rationale: | Allow enabling / disabling of all notifications which are not required for the ECU wake-up. |
|---|---|

Applies To:
| Dependencies: | Wakeup functionality |
|---|---|
| Use Case: | During entry in the reduced power mode of an ECU all notifications of the MCU shall be disabled without disabling the wake-up sources in between. Otherwise wake-up events can be lost. |
| Supporting Material: | - |

⌋

### 32. [SRS_Gpt_13607

]

 The GPT Predef Timers shall be started/stopped automatically by the GPT driver
⌈
| Description: | The GPT Predef Timers shall be started/stopped automatically by the GPT driver. |
|---|---|
| Rationale: | To ensure that all enabled GPT Predef Timers run whenever possible (after initialization/deinitialization, after entering normal/sleep mode). |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Avoiding start of GPT Predef Timers by upper layer module |
| Supporting Material: | - |

⌋

### 33. [SRS_Gpt_13608

]

 The GPT driver shall provide a synchronous service for reading the current timer value of each GPT Predef Timer
⌈
| Description: | The GPT driver shall provide a synchronous service for reading the current timer value of each GPT Predef Timer. |
|---|---|
| Rationale: | To get the timer values. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Time measurement, time based state machine, timeout supervision, busy waiting |
| Supporting Material: | - |

⌋

### 34. Fault Operation

None

### 35. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

No content.

### 36. References

### 37. 附录
*原文标题：Appendix*

### 38. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 39. Traceable item history of this document according to AUTOSAR Release R25-11

### 40. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 41. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 42. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 43. Traceable item history of this document according to AUTOSAR Release R24-11

### 44. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 45. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 46. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 47. Traceable item history of this document according to AUTOSAR Release R23-11

### 48. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 49. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 50. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
