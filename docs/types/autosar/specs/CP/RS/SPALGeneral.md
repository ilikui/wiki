# General Requirements on SPAL (`SPALGeneral`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 009 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_SPALGeneral_009\AUTOSAR_CP_RS_SPALGeneral.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_SPALGeneral_009\AUTOSAR_CP_RS_SPALGeneral.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_SPALGeneral_009\zzgen\CP_RS_SPALGeneral.complete.txt`

## 文档简介

This document specifies general requirements on Basic Software Modules of the following software layers:

* Microcontroller Abstraction Layer
* ECU Abstraction Layer

Those modules are of the following type:

* Drivers for \muC-internal and external peripherals
* Handlers
* Interfaces

The selection of modules is derived from CP SWS BSWGeneral and Layered Architecture. The following modules are in scope:

* Memory drivers and interfaces (internal/external EEPROM, Flash, Flash EEPROM Emulation)
* I/O drivers (PORT, ADC, DIO, PWM, ICU, OCU)
* I/O Hardware Abstraction
* ECU onboard communication drivers and handlers (SPI)
* System drivers (internal/external Watchdog, MCU, GPT, RAM test)

Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies general requirements on Basic Software Modules of the following software layers:

* Microcontroller Abstraction Layer
* ECU Abstraction Layer

Those modules are of the following type:

* Drivers for \muC-internal and external peripherals
* Handlers
* Interfaces

The selection of modules is derived from CP SWS BSWGeneral and Layered Architecture. The following modules are in scope:

* Memory drivers and interfaces (internal/external EEPROM, Flash, Flash EEPROM Emulation)
* I/O drivers (PORT, ADC, DIO, PWM, ICU, OCU)
* I/O Hardware Abstraction
* ECU onboard communication drivers and handlers (SPI)
* System drivers (internal/external Watchdog, MCU, GPT, RAM test)

Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 2. 需求指南
*原文标题：Requirements Guidelines*

Existing specifications shall be referenced (in form of a single requirement). Differences to these specifications are specified as additional requirements.

### 3. Conventions used

* The representation of requirements in AUTOSAR documents follows the table specified in .
* In requirements, the following specific semantics are used (taken from Request for Comment RFC 2119 from the Internet Engineering Task Force IETF)

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求 quality
*原文标题：Requirements quality*

All Requirements shall have the following properties:

* Redundancy

  Requirements shall not be repeated within one requirement or in other requirements
* Clearness

  All requirements shall allow one possibility of interpretation only. Only technical terms of the glossary may be used.
* Atomicity

  Each Requirement shall only contain one requirement. A Requirement is atomic if it cannot be split up in further requirements.
* Testability

  Requirements shall be testable by analysis, review or test.
* Traceability

  The source and status of a requirement shall be visible at all times.

### 5. 需求 identification
*原文标题：Requirements identification*

Each requirement has its unique identifier starting with the prefix "BSW" (for "Basic Software"). For any review annotations, remarks or questions please refer to this unique ID rather than chapter or page numbers!

### 6. 需求 status
*原文标题：Requirements status*

Each chapter shall be structured in the following way:

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

### 7. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to General Requirements on SPAL that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| CS | Chip Select |
| DIO | Digital Input Output |
| ECU | Electric Control Unit |
| ICU | Interrupt Capture Unit |
| MAL | Old name of Microcontroller Abstraction Layer (replaced by MCAL because 'MAL' is a French term meaning 'bad') |
| MCAL | Microcontroller Abstraction Layer |
| MCU | Microcontroller Unit |
| MMU | Memory Management Unit |
| Master | A device controlling other devices (slaves, see below) |
| Slave | A device being completely controlled by a master device |
| NMI | Non Maskable Interrupt |
| OS | Operating System |
| OCU | Output Compare Unit |
| PLL | Phase Locked Loop |
| PWM | Pulse Width Modulation |
| RX | Reception (in the context of bus communication) |
| SPAL | Standard Peripheral Abstraction Layer (The name of this working group) |
| SFR | Special Function Register |
| RTE | Runtime Environment |
| WP | Work Package |
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

As this is a document from professionals for professionals, all other terms are expected to be known.

### 8. Conceptual Issues

### 9. 通用 Rules
*原文标题：General Rules*

# Don't do anything within our callbacks that exceeds 50 \mus runtime this will affect the system performance too much.
# Each driver specification is designed so that the driver itself will take care of atomicity and data integrity for data inside of the driver.
# Application buffers shall be passed as pointers from the user to the driver.

### 10. List of drivers not affected by the clock frequency

The clock frequency is a parameter that has a very large influence to most of the drivers included in WP "Specification / Standardization of BSW". Below is a list of the software modules that do not have a direct dependency on the clock frequency:

* PORT
* DIO
* RAM test

Conclusion: Most of the drivers have a strong dependency of the clock frequency therefore it is very important to carefully consider the influence across the whole system when configuring each software component.

### 11. MCAL relevant ECU Power Modes

The drivers included in WP "Specification / Standardization of BSW" shall support the ECU power modes defined in the Specification of ECU State Manager.

Different clock modes have to be supported. All drivers shall support re-initialization with different configuration settings. Please refer to the document "ECU State Manager".

### 12. 唤醒 Scenarios
*原文标题：Wake-up Scenarios*

Due to different timing requirements (e.g. ECUs that wake up cyclically and only check some inputs and go to sleep again as fast as possible) different initialization procedures are necessary. Examples:

* Initialization after Wake-up
* Initialization after Power On Reset

Conclusion: It is not possible to have a standard wake-up sequence. This sequence depends on the microcontroller hardware and the system requirements. Current specified concept allows for a standardized way to handle wake-up signaling and offers the possibility to customize the actual wake-up sequence.

### 13. 调度 and 集成 of drivers
*原文标题：Scheduling and integration of drivers*

Today, 90% of the functions of known ECUs are scheduled cooperatively. Reasons are:

* Technical: Lower overhead (task switch time and task stack consumption) in comparison to pre-emptive systems
* Technical: Better possibility to create a deterministic behavior
* Technical: It is easier to reach stable 95% system load with a cooperative system than with a full pre-emptive
* Historical: Many ECUs are using a cooperative scheduling concept

For this reason, all drivers shall allow to be used within a cooperatively scheduled system. They shall not implement blocking code and expect that they are pre-empted by the operating system. Implementation hint: use state machines instead of linear code.

### 14. 需求规范
*原文标题：Requirements Specification*

### 15. 功能性需求
*原文标题：Functional Requirements*

### 16. 通用需求
*原文标题：General Requirements*

This chapter contains general requirements which apply to all modules of the Microcontroller and ECU Abstraction Layers, but not necessarily to Basic Software Modules of other layers.

### 17. 配置
*原文标题：Configuration*

The implementation of all driver modules shall allow the configuration of specific module parameter types at link time
⌈
| Description: | The implementation of all driver modules shall allow the configuration of the following module parameter types at link time: |
|---|---|

* values written to hardware registers
* values used within the driver module (e.g. timings)
* callback functions

Those parameters shall be placed in a module external initialization data structure.
| Rationale: | Delivery of driver modules as object code |
|---|---|

Applies To:
| Dependencies: | Specification of configuration items |
|---|---|
| Use Case: | Internal development models of e.g. SVDO and Hella |
| Supporting Material: | Sophisticated software design techniques are necessary to achieve similar scalability and resource efficiency like source code. |

⌋

 All driver modules shall allow the static configuration of notification mechanism
⌈
| Description: | All driver modules shall allow the static configuration of notification mechanisms. |
|---|---|

Pointers to callback functions shall not be passed via the API.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 初始化
*原文标题：Initialization*

All driver modules shall implement an interface for initialization
⌈
| Description: | All driver modules shall implement an interface for initialization. |
|---|---|

This service shall initialize all module global variables and those SFRs that are used by this module.
| Rationale: | Basic functionality. |
|---|---|

Applies To:
| Dependencies: | Initialization of hardware resources |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 All driver modules shall only initialize the configured resources
⌈
| Description: | All driver modules shall only initialize the configured resources. Resources that are not configured in the configuration file shall not be touched. |
|---|---|
| Rationale: | Allow integration with complex drivers without resource conflicts. |

Applies To:
| Dependencies: | Driver module initialization |
|---|---|
| Use Case: | Timer channels 0..3 are used by the GPT driver, timer channels 4..6 are used by complex drivers |
| Supporting Material: | - |

⌋

 All driver modules shall implement an interface for de-initialization
⌈
| Description: | All driver modules shall implement an interface for de-initialization. |
|---|---|

This service shall reset all module global variables and all SFRs that are used by this module to their default reset value.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Normal Operation

All drivers and handlers of the AUTOSAR Basic Software shall implement notification mechanisms of drivers and handlers
⌈
| Description: | All drivers and handlers of the AUTOSAR Basic Software shall implement the following notification mechanisms (configurable per module) for use within the Basic Software: |
|---|---|

* Polling (by reading a status information)
* Callback functions
* Error reporting function of the Default Error Tracer
* Event reporting function of the Diagnostic Event Manager
| Rationale: | Flexible integration |
|---|---|

Avoidance of strong coupling and dependencies
Applies To:
| Dependencies: | Review annotation #35 of Mr. Schumpelt/Bosch |
|---|---|
| Use Case: | The completion of an EEPROM write command can be signaled via a callback function or by setting status information (which is accessible via the module interface). |

A fault occurred during EEPROM writing (cell defective) can be signaled to the Diagnostic Event Manager.
| Supporting Material: | - |
|---|---|

⌋

 All driver modules that provide different operation modes shall provide a service for mode selection
⌈
| Description: | All driver modules that provide different operation modes shall provide a service for mode selection. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Fault Operation

All driver modules shall raise an error if the change of the operation mode leads to degradation of running operations
⌈
| Description: | All driver modules shall raise an error if the change of the operation mode leads to degradation of running operations. |
|---|---|

The running operation shall be maintained.

Further comment:

This error condition shall never happen in correct system designs.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | Control of operation mode |
|---|---|
| Use Case: | The SPI EEPROM operation mode is valid during a running SPI communication sequence. |
| Supporting Material: | - |

⌋

 All driver modules shall have a specific behavior after a development error detection
⌈
| Description: | In case of a development error detection, all driver modules shall |
|---|---|

* report the error to the Default Error Tracer (DET)
* skip the desired functionality (leave service without any action)
* in case of standard return value return E_NOT_OK
* in case of arbitrary return values (e.g. `Dio_ReadPort`) return 0
| Rationale: | Uniform behavior of all SPAL modules. |
|---|---|

Avoid processing of wrong API parameters and thus avoid damage to hardware or dangerous system behavior.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 关机 Operation
*原文标题：Shutdown Operation*

All driver modules shall set their wake-up conditions depending on the selected operation mode
⌈
| Description: | All driver modules shall set their wake-up conditions depending on the selected operation mode. |
|---|---|
| Rationale: | Allow enabling of module specific wake-up interrupts. |

Applies To:
| Dependencies: | Control of operation mode |
|---|---|
| Use Case: | Example: |

The ECU state manager switches the ECU power mode to '`ECU_POWERMODE_SLEEP`'.

The modules 'GPT' and 'ICU' enable specific wake-up interrupts according to their configuration related to '`ECU_POWERMODE_SLEEP`'.
| Supporting Material: | - |
|---|---|

⌋

### 22. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 23. 时序需求
*原文标题：Timing requirements*

All drivers shall provide a non blocking implementation
⌈
| Description: | All drivers shall provide a non blocking implementation. |
|---|---|

Note: 'blocking implementation' in this requirement means 'insensible, uncooperative usage of processor time' like long term loops.
| Rationale: | Avoid undetermined waiting times. Allow all drivers to be used within a cooperatively scheduled system. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The waiting loop for the 'ADC Conversion Ready Flag' shall have an additional timeout condition. |
| Supporting Material: | - |

⌋

 The drivers shall be coded in a way that is most efficient in terms of memory and runtime resources
⌈
| Description: | The drivers shall be coded in a way that is most efficient in terms of memory and runtime resources. |
|---|---|
| Rationale: | Avoid waste of resources. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Usage of the driver in embedded automotive systems. |
| Supporting Material: | - |

⌋

### 24. 软件设计需求
*原文标题：Software design requirements*

The driver's API shall be accessed by its handler or manager
⌈
| Description: | If a driver is controlled by a handler or a manager, it is not allowed to bypass the handler/manager and access the driver's API directly. |
|---|---|

If a driver does not have a handler/manager above, it may be accessed directly.
| Rationale: | Consistent access. Handlers and Managers shall not be bypassed. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The EEPROM driver is controlled exclusively by the NVRAM |

Manager via the EEPROM Abstraction module and the Memory Abstraction Interface.

No other form of access to the EEPROM driver's API shall be allowed.
| Supporting Material: | - |
|---|---|

⌋

 Configuration data shall be kept constant
⌈
| Description: | The contents of the init structure passed to the module via the init function shall be kept constant and available during runtime. |
|---|---|

Comment:

Usually, this init data structure is located in ROM.
| Rationale: | The module could access this structure at any time. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 25. Process 需求
*原文标题：Process requirements*

Specification of configuration items shall be provided
⌈
| Description: | The SWS (software specification) shall specify for each configuration element |
|---|---|

* whether it is configurable before or after compile time
* where this configuration item is located (init data structure, configuration header file *_Cfg.h)
| Rationale: | Enable correct implementation of configuration parameters that allow for object code delivery |
|---|---|

Applies To:
| Dependencies: | Configuration after compile time |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 26. References

### 27. 附录
*原文标题：Appendix*

### 28. Change history of AUTOSAR traceable items

### 29. Traceable item history of this document according to AUTOSAR Release R25-11

### 30. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 31. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 32. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 33. Traceable item history of this document according to AUTOSAR Release R24-11

### 34. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 35. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 36. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none
