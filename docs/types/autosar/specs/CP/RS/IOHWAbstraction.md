# Requirements on I/O Hardware Abstraction (`IOHWAbstraction`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 075 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_IOHWAbstraction_075\AUTOSAR_CP_RS_IOHWAbstraction.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_IOHWAbstraction_075\AUTOSAR_CP_RS_IOHWAbstraction.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_IOHWAbstraction_075\zzgen\CP_RS_IOHWAbstraction.complete.txt`

## 文档简介

This document defines general rules and formats for requirements specification within AUTOSAR. It shall be used as a basis for each requirements document.

The requirements are structured in the following way:

* General requirements on Basic Software Modules (other document)
* General requirements which apply to all modules of the Microcontroller and ECU Abstraction Layers (this document)
* Module specific requirements (this document)

Constraints

First scope for specification of requirements on basic software module are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document defines general rules and formats for requirements specification within AUTOSAR. It shall be used as a basis for each requirements document.

The requirements are structured in the following way:

* General requirements on Basic Software Modules (other document)
* General requirements which apply to all modules of the Microcontroller and ECU Abstraction Layers (this document)
* Module specific requirements (this document)

Constraints

First scope for specification of requirements on basic software module are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 2. Conventions to be used

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

The glossary below includes acronyms and abbreviations relevant to SRS IOHWAbstraction that are not included in the AUTOSAR Glossary .

### 6. Expressions - 通用
*原文标题：Expressions - general*

| Expression | Description | Example |
|---|---|---|
| Class | A class represents a kind of electrical connection to the ECU. It could be for example an analogue, a discrete,... | Analogue Class, |

Discrete Class...
| Electrical Signal | It is the electrical signal on the pin of the ECU | Physical input voltage at an ECU-Pin |
|---|---|---|
| ECU pin | It is an hardware electrical connection of the ECU with the rest of the electronic system |  |
| ECU Signals | It is the software representation of an electrical signal. A signal has attributes and a symbolic name | Input voltage,Discrete Output, PWM Input ... |
| ECU Signal group | It is the software representation of a group of electrical signals from the same Class | Only for discrete Inputs and discrete Outputs |
| Attributes | Characteristics that can be Software (SW) and Hardware (HW) for each kind of Signals existing in a ECU | Range, |

Lifetime / delay,

...
| Symbolic name | The symbolic name of a signal is used by the IO Hardware Abstraction module to make a link (function, pin) |
|---|---|

### 7. Expressions - signal attributes

| Expression | Description | Example |
|---|---|---|
| Data Type | Analogue: Datatype of the signal |  |

| Discrete: either bool or AUTOSAR defined type (BoolType) | (VoltageType, CurrentType, ResistanceType, BoolType) |
|---|---|

Each DataType has a given size: 16 bits or 32 bits
| Range | This is a functional range and not an electrical range.) |
|---|---|

For analogue signals  (Voltage, current),  (resistance)

For discrete signals

| For timing signals  (period), [-100..100%] (Duty Cycle) | [-12Volts...+12Volts] (voltage) |
|---|---|
| Resolution | This attribute for many Classes is dependent on the range and the Data Type. |

Example: (upperLimit - lowerLimit) / (2^(datatypelength) -1)

| For the others is known and defined. | Voltage_(min) = -12 Volts |
|---|---|

Voltage_(max) = 12 Volts

Data Type : 16 bits

Resolution => 24 / 65535
| Hardware Resolution | This is the maximum possible resolution of the hardware (ADC) | ADC converter could have a 8/10/12/16 bits resolution |
|---|---|---|
| Hardware Accuracy | This is the accuracy of Hardware. It depends on hardware peripheral used for acquisition and/or generation | ADC converter could have an accuracy of +-3LSB |
| Accuracy | It depends of hardware peripheral used for acquisition and/or generation. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Requirements on I/O Hardware Abstraction.

### 9. 功能概述
*原文标题：Functional Overview*

### 10. IO Hardware 抽象
*原文标题：IO Hardware Abstraction*

The IO Hardware Abstraction module abstracts from the signal path of the ECU hardware (Layout, Microcontroller Pins, Microcontroller external devices like IO ASIC). It provides a signal based interface to the upper software layer. It performs static abstraction and inversion (if needed) of values according to their physical representation at the inputs/outputs of the ECU hardware (compensation of static influences caused within the path between ECU IO and Microcontroller pin, e.g. voltage divider, hardware inversion).

The IO Hardware Abstraction module allows configuring each signal according to an attributes list. Interfaces are AUTOSAR Standard.

### 11. 概述 of Attributes to qualify Signals
*原文标题：Overview of Attributes to qualify Signals*

| Signal \Attributes | Signal Data Type | Access | BSW-Range | Unit | BSW-Resolution | Failure Monitoring | Age (Lifetime/Delay) | Filtering / Debouncing | Sampling Rate | Report Feature | Pulse Test | Wakeup |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Analogue_(in) | X | X | X | X | X | - | Xl | X | X | O | - | - |
| Analogue_(out) | X | X | X | X | X | O | Xd | - | - | - | O | - |
| Discrete_(in) | X | X | F | - | - | - | Xl | X | X | O | - | O |
| Discrete_(Status) | X | - | F | - | - | - | Xl | X | - | - | - | O |
| Discrete_(pow) | X | X | F | - | - | O | Xd | - | - | - | O | - |
| PWx Period_(in) | X | X | X | X | X | - | Xl | - | - | - | - | O |
| PWx Period_(out) | X | X | X | X | X | O | Xd | - | - | - | O | - |
| PWx Duty Cycle_(in) | X | X | F | F | X | - | Xl | - | - | - | - | O |
| PWx Duty Cycle_(out) | X | X | F | F | X | O | Xd | - | - | - | O | - |

Table legend

* X means the Attribute is applicable to this Class of ECU Signal and shall be configured.

  * Xl means the Age Attribute applicable is the Lifetime.
  * Xd means the Age Attribute applicable is the Delay.
* F means the Attribute is applicable to this Class of ECU Signal but it is a fixed standard value.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 功能性需求
*原文标题：Functional Requirements*

### 13. IO Hardware 抽象
*原文标题：IO Hardware Abstraction*

### 14. 通用
*原文标题：General*

The IO Hardware Abstraction module shall provide values within one static range for each Signal
⌈
| Description: | The IO Hardware Abstraction module shall provide values within one static range for each Signal. This range is independent of the basic software driver scaling factor. |
|---|---|

Examples:

Analogue Signals =>

with (lowerLimit = - UpperLimit

or with (lowerLimit = 0)
| Rationale: | Support of a wide range with a high resolution |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The IO Hardware Abstraction module shall provide a service to read an input voltage with specific attributes
⌈
| Description: | The IO Hardware Abstraction module shall provide a service to read an input voltage with these attributes: |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 配置
*原文标题：Configuration*

A Symbolic Name for each Signal shall be unique
⌈
| Description: | The IO Hardware Abstraction shall allow to configure statically an unique Symbolic Name for each Signal. |
|---|---|
| Rationale: | No change in the upper layers when changing the hardware allocation. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Flexible ECU-Design |
| Supporting Material: | - |

⌋

 The IO Hardware Abstraction module shall be independent of physical level
⌈
| Description: | The AUTOSAR IO Hardware Abstraction module shall be independent of physical level ( i.e. : output command active at low state or high state ) and provide only logical level to the upper layer for digital IO. |
|---|---|
| Rationale: | Independency between users and hardware design |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | For instance, doors could be OPEN / CLOSE and theses states are independent of real hardware input status (0v, 5v, 12v) |
| Supporting Material: | - |

⌋

 The IO Hardware Abstraction shall be able to handle more than one electrical signal simultaneously
⌈
| Description: | The IO Hardware Abstraction shall be able to handle more than one electrical signal simultaneously. The definition of a group is done during the configuration step. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Normal Operation

The IO Hardware Abstraction shall hide any communication over ECU internal onboard peripherals to access Signals
⌈
| Description: | The IO Hardware Abstraction shall hide any communication over ECU internal onboard peripherals to access Signals. The Signal routing on the ECU is abstracted by this interface. |
|---|---|
| Rationale: | It shall be no difference for the upper layers, if a port is connected directly to the Microcontroller or an onboard ASIC. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 17. 诊断 Functions
*原文标题：Diagnostic Functions*

The following schematics show output driver stages and their diagnostic capability. They shall help to understand the following requirements.

 The IO Hardware Abstraction shall detect a failure short circuit to the ground, according to the hardware capabilities
⌈
| Description: | The IO Hardware Abstraction shall detect a failure short circuit to the ground, according to the hardware capabilities |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Analog monitoring of a discrete load signal, Fault detection for diagnosis and/or software driven driver stage protection |
| Supporting Material: | Specific Hardware Design : existing diagnostic monitoring. |

⌋

 The IO Hardware Abstraction shall detect a failure short circuit to +UBat, according to the hardware capabilities
⌈
| Description: | The IO Hardware Abstraction shall detect a failure short circuit to +UBat, according to the hardware capabilities |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Analog monitoring of a discrete load signal, Fault detection for diagnosis and / or error reaction |
| Supporting Material: | Specific Hardware Design : existing diagnostic monitoring. |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Fault operation

The IO Hardware Abstraction module shall keep the ECU hardware safe
⌈
| Description: | The IO Hardware Abstraction module shall keep the ECU hardware safe. The IO Hardware Abstraction shall be able to cut off an output signal when a failure is detected on this output. This will be done in order to protect the hardware. |
|---|---|
| Rationale: | Protection against ECU deterioration. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Short circuit to the ground, short circuit to the supply, over temperature, overload. Deactivation of the output after three orders. |
| Supporting Material: | - |

⌋

 The IO Hardware Abstraction module shall not decide on its own to switch an output on again that has been switched off for hardware protection reasons
⌈
| Description: | The IO Hardware Abstraction module shall not decide on its own to switch an output on again that has been switched off for hardware protection reasons. |
|---|---|

Such a strategy to recover a failure shall be defined in a Software Component.
| Rationale: | Strategies are included in SW-C |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Power 状态 transitions
*原文标题：Power state transitions*

Encapsulation of power state preparation shall be available
⌈
| Description: | In case power control on the peripherals is implemented, IoHwAbstraction |
|---|---|

shall define an API for each application Power Mode, in which all perpheral

power state transitions relevant to the given application power mode are made effective.
| Rationale: | It is necessary to create an encapsulation which allows to map an application power mode, eventually valid for different ECUs on the vehicle system, to the power state of each peripheral on each ECU. In this way the setting phase for a given power mode can be atomically executed, so that all HW peripheral transition to the validpower state synchronously. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Concept Proposal 596: ECU Degradation |

⌋

 Encapsulation of power state setting shall be available
⌈
| Description: | In case power control on the peripherals is implemented, IoHwAbstraction shall define an API for each application Power Mode, in which all peripheral power state transitions relevant to the given application power mode are to be prepared (power state preparation). |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 21. [SRS_IoHwAb_12339

The IO Hardware Abstraction shall guarantee a given worst case delay time for each signal]

 The IO Hardware Abstraction shall guarantee a given worst case delay time for each signal
⌈
| Description: | The IO Hardware Abstraction shall guarantee a given worst case delay time for each signal. The time can be used for the evaluation of the time constraints. |
|---|---|
| Rationale: | Fulfill the request reaction times. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A lot of time constraints e.g. reaction after a pushed button |
| Supporting Material: | - |

⌋

### 22. References

### 23. 附录
*原文标题：Appendix*

### 24. Change history of AUTOSAR traceable items

### 25. Traceable item history of this document according to AUTOSAR Release R25-11

### 26. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 27. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 28. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 29. Traceable item history of this document according to AUTOSAR Release R24-11

### 30. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 31. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 32. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 33. Traceable item history of this document according to AUTOSAR Release R23-11

### 34. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 35. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 36. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
