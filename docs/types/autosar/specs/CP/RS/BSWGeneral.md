# General Requirements on Basic Software Modules (`BSWGeneral`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 043 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_BSWGeneral_043\AUTOSAR_CP_RS_BSWGeneral.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_BSWGeneral_043\AUTOSAR_CP_RS_BSWGeneral.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_BSWGeneral_043\zzgen\CP_RS_BSWGeneral.complete.txt`

## 文档简介

The goal of this document is to define a common set of basic requirements that apply to all SW modules of the AUTOSAR Basic Software.

These requirements shall be adopted and refined for the specification of Basic SW modules .

The functional requirements defined in this document shall be referenced in each Software Specification (SWS) document of the AUTOSAR Basic Software.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

The goal of this document is to define a common set of basic requirements that apply to all SW modules of the AUTOSAR Basic Software.

These requirements shall be adopted and refined for the specification of Basic SW modules .

The functional requirements defined in this document shall be referenced in each Software Specification (SWS) document of the AUTOSAR Basic Software.

### 2. Constraints

First scope for specification of requirements on Basic Software Modules are systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 3. Conventions to be used

Each requirement has its unique identifier starting with the prefix "BSW" (for "Basic Software"). For any review annotations, remarks or questions, please refer to this unique ID rather than chapter or page numbers!

* The representation of requirements in AUTOSAR documents follows the table specified in `TPS_STDT_00078`, see .
* In requirements, the following specific semantics shall be used (based on the Internet Engineering Task Force IETF).

The key words "MUST", "MUST NOT", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "MAY", and "OPTIONAL" in this document are to be interpreted as:

* SHALL: This word means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* MUST: This word means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase means that the definition is an absolute prohibition of the specification due to legal constraints.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 5. 需求指南
*原文标题：Requirements Guidelines*

### 6. 需求结构
*原文标题：Requirements structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

Functional Requirements:

* Configuration (which elements of the module need to be configurable)
* Initialization
* Normal Operation
* Shutdown Operation
* Fault Operation
* \ldots{}

Non-Functional Requirements:

* Timing Requirements
* Resource Usage
* Usability
* Output for other WGs (e.g. Description Templates, Tooling,...)
* \ldots{}

### 7. 映射 to AUTOSAR releases
*原文标题：Mapping to AUTOSAR releases*

For each requirement defined in the document "General Requirements on Basic Software Modules", there shall be a reference to the AUTOSAR release(s) for which the requirement is valid. This is achieved by the row "AUTOSAR release" in the requirement description table.

This Requirements Specification contains general requirements that are valid for all SW modules that are part of the AUTOSAR Basic Software.

The obligatory part of the requirements is stated in the description of each requirement.

### 8. 缩略语
*原文标题：Acronyms and abbreviations*

All acronyms and abbreviations relevant to this specification are included in the AUTOSAR Glossary .

### 9. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the General Requirements on Basic Software Modules.

### 10. 功能概述
*原文标题：Functional Overview*

The requirements on Basic Software cover the following domains:

* Body
* Powertrain
* Chassis
* Safety (assumption: covered, because hardware and system infrastructure are similar to the domains above)

The ECU application experience is taken from the following concrete applications:

* Sunroof and power window ECU
* Diesel engine ECU
* ESP ECU
* BMW, DC and VW standard software packages ('Standard Core', 'Standard Software Platform', 'Standard Software Core') including ISO 17356-3 OS , communication modules, bootloader, basic diagnostic functions for the domains listed above
* Infotainment control ECU

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. 配置
*原文标题：Configuration*

BSW Modules shall support link-time configuration
⌈
| Description: | Link-time configuration phase shall be supported. Link-time parameters are optional. |
|---|---|
| Rationale: | Allow configurable functionality of modules that are deployed as object code. Usually those modules are drivers. |

Applies To:
| Dependencies: | Usage of source code and object code |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 BSW Modules shall support post-build configuration
⌈
| Description: | Post-build configuration phase shall be supported. Post-build parameters are optional |
|---|---|
| Rationale: | Change ECU configuration after ECU production without an update of the whole application. |

Applies To:
| Dependencies: | Usage of source code and object code |
|---|---|
| Use Case: | Type declaration of the config type |

typedef struct `ComM_ConfigType_Tag` {
...
} `ComM_ConfigType`;

(in ComM.h)

as a forward declaration use:

typedef struct `ComM_ConfigType_Tag` `ComM_ConfigType`;
extern void ComM(`ComM_ConfigType` * ComMConfigPtr);

(in ComM.h)
| Supporting Material: | - |
|---|---|

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 唤醒
*原文标题：Wake-Up*

Basic Software Modules shall report wake-up reasons
⌈
| Description: | All Basic Software Modules that implement wake-up interrupts shall report the wake-up reason to the ECU State Manager. |
|---|---|

Within this notification the ECU State Manager shall store the passed wake-up ID for later evaluation.
| Rationale: | Allow ECU State Manager to decide which start-up sequence is chosen based on the wake-up reason. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A body ECU can wake-up from 3 different wake-up sources. Depending on the wake-up reason, the ECU |

* blinks the door lock indication LEDs
* performs a full start-up
* evaluates the received key ID and decides to start-up and unlock or goto sleep again
| Supporting Material: | - |
|---|---|

⌋

### 14. 初始化
*原文标题：Initialization*

The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function
⌈
| Description: | If a Basic Software Module needs to initialize variables and hardware resources, this should be done in a separate initialization function. This function shall be named <Module name>_Init(). This function shall only be called by the BswM or EcuM. |
|---|---|
| Rationale: | Interface to EcuM |

Applies To:
| Dependencies: | ,  , |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The sequence of modules to be initialized shall be configurable
⌈
| Description: | The sequence of modules to be initialized shall be configurable. |
|---|---|
| Rationale: | To enable the handling of dependencies of Basic SW-modules with the respect to environment, implementation and proprietary functionality the start-up sequence needs to be adaptable. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Start-up sequence is a proprietary functionality. Det dependency shall allow error detection during development. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Normal Operation

SW components shall be tested by a function defined in a common API in the Basis-SW
⌈
| Description: | If a SW component above or below RTE has the requirement to be tested by external devices e.g. in the garage, the required function shall be accessed via a common API from diagnostics services in Basic-SW (function, data interface). |
|---|---|
| Rationale: | Ensure less difference in handling and kind of API |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Tester in the garage requires calibration of a certain SW-component e.g. steering angle sensor monitoring in the ESP. The interface must remain to be ready for moving this SW-component. |

This interface can also be used by XCP.
| Supporting Material: | - |
|---|---|

⌋

 BSW modules with AUTOSAR interfaces shall be describable with the means of the SW-C Template
⌈
| Description: | BSW modules with AUTOSAR interfaces shall be describable with the means of the SW-C Template. The BSW description template shall therefore inherit the concepts of the SW-C Template for those BSW modules. |
|---|---|
| Rationale: | AUTOSAR Services are located in the BSW, but have to interact with AUTOSAR SW-Cs (above the RTE) via ports. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 关机 Operation
*原文标题：Shutdown Operation*

Basic SW module shall be able to shutdown
⌈
| Description: | If a Basic SW module needs to shutdown functionality (e.g. release hardware resources), this shall be done in a separate API function. |
|---|---|
| Rationale: | Interface to EcuM |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 17. Fault Operation and 错误检测
*原文标题：Fault Operation and Error Detection*

Classification of development errors
⌈
| Description: | All AUTOSAR Basic Software Modules shall report development relevant errors if development error detection is enabled: |
|---|---|

* Errors caused by software bugs
* Errors caused by incorrect integration by the user
* Errors caused by invalid configuration
* Errors caused by bugs in the integration tools

Development errors are handled like assertions: After calling the configured `Det_ReportError` hooks, the normal control flow of execution shall not be continued. Det shall stop execution of the entire process.

This can be done for example with an endless loop or a halt statement or by creating something like an exception stack trace. If there is only one hook function configured, this might also do the exception handling and stop execution.
| Rationale: | Extended error detection for debugging and especially integration. |
|---|---|

Applies To:
| Dependencies: | Development error detection keyword |
|---|---|
| Use Case: | The EEPROM driver provides internal checking of API parameters which is only activated for the first software integration test ('development build') and disabled afterwards ('deployment build'). |

Supporting Material:
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 19. 软件架构需求
*原文标题：Software Architecture Requirements*

The AUTOSAR Basic Software shall provide a microcontroller abstraction layer which provides a standardized interface to higher software layers
⌈
| Description: | The AUTOSAR Basic Software shall provide a microcontroller abstraction layer which provides a standardized interface to higher software layers. |
|---|---|
| Rationale: | Portability and reusability. |

Encapsulate implementation details of a specific microcontroller from higher software layers.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Exchange microcontroller ST10 with STAR12 without affecting higher software layers interfacing with the microcontroller abstraction layer. |
| Supporting Material: |  |

⌋

 The AUTOSAR Basic Software shall provide a hardware abstraction layer
⌈
| Description: | The AUTOSAR Basic Software shall provide a hardware abstraction layer which provides a stable interface to higher software layers which is independent from the ECU hardware layout. |
|---|---|
| Rationale: | Keep the impact of changes in the ECU hardware layout as small as possible. Portability and reusability of modules of higher software layers. Flexibility for changes in the ECU hardware layout. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 软件集成需求
*原文标题：Software Integration Requirements*

The Implementation of interrupt service routines shall be done by the Operating System, complex drivers or modules
⌈
| Description: | Only the Operating System, complex drivers and modules of the microcontroller abstraction layer are allowed to implement interrupt service routines. |
|---|---|

If a transition from an interrupt service routine to an operating system task is needed, it shall take place at the lowest level possible of the Basic Software.

In the case of CAT2 ISRs this shall be at the latest in the RTE.

In the case of CAT1 ISRs this shall be at the latest in the Interface layer.

This means: no interrupts on application level.
| Rationale: | Portability and reusability. |
|---|---|

The implementation of interrupt service routines is highly microcontroller dependent.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Exchange microcontroller ST10 with STAR12 without affecting higher software layers. |
| Supporting Material: | - |

⌋

 The runtime of interrupt service routines and functions that are running in interrupt context shall be kept short
⌈
| Description: | The runtime of interrupt service routines and functions that are running in interrupt context should be kept short. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 软件模块设计需求
*原文标题：Software Module Design Requirements*

All Basic SW Modules written in C language shall conform to the MISRA C 2025 Standard.
⌈
| Description: | MISRA C (see ) describes programming rules for the C programming language and a process to implement and follow these rules. |
|---|---|

Only in technically reasonable, exceptional cases MISRA violations are permissible. Such violations against MISRA rules shall be clearly identified and documented within comments in the C source code (including rationale why MISRA rule is violated).

Examples of MISRA rules violations shall look like:

/* MR12 RULE XX VIOLATION: Reason */

/* MR12 DIR XX VIOLATION: Reason */
| Rationale: | Portability, maintainability, error avoidance, safety |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Software for safety relevant systems |
| Supporting Material: |  |

⌋

 Unique Name of Basic Software Modules
⌈
| Description: | AUTOSAR shall identify all AUTOSAR Basic Software Modules by a unique name. Related file names shall contain the module name. |
|---|---|

Additional Information:

Convention for module related files:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 软件 Documentation 需求
*原文标题：Software Documentation Requirements*

All Basic SW Modules shall be documented according to a common standard.
⌈
| Description: | The module documentation shall contain at least the following items: |
|---|---|

* Cover sheet with title, version number, date, author, document status, document name
* Change history with version number, date, author, change description, document status
* Table of contents (navigable)
* Functional overview
* Source file list and description
* Module requirements
* Used resources (interrupts, \muC peripherals etc.)
* Integration description (OS, interface to other modules etc.)
* Configuration description with parameter, description, unit, validrange, default value, relation to other parameters

The module documentation shall also contain examples for

* the correct usage of the API
* the configuration of the module
| Rationale: | User acceptance, maintainability, usability |
|---|---|

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | Standard Core |
| Supporting Material: | - |

⌋

 Documentation of multiple instances of configuration parameters shall be available
⌈
| Description: | "Multiplicity" defines how many times an entity (in this case configuration parameter) is instanciated. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. References

### 24. Related standards and norms

### 25. ISO 17356

### 26. 附录
*原文标题：Appendix*

### 27. Change history of AUTOSAR traceable items

### 28. Traceable item history of this document according to AUTOSAR Release R26-11

### 29. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

| Number | Heading |
|---|---|
| Handling of corrupted NV data. |  |
| Errors for module double initialization shall follow a naming rule |  |

### 30. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

| Number | Heading |
|---|---|
| All Basic SW Modules written in C language shall conform to the MISRA C 2025 Standard. |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |
| It shall be allowed to use macros instead of functions where source code is used and runtime is critical |  |
| All type definitions of target and compiler specific scope shall be placed and organized in a single type header |  |
| Parameters shall have a type |  |
| Each module shall provide version information |  |
| API handling in uninitialized state |  |
| AUTOSAR Basic Software Modules shall apply a naming rule for enabling/disabling the existence of API(s) |  |

### 31. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

| Number | Heading |
|---|---|
| Each BSW module shall provide a function to read out the version information of a dedicated module implementation |  |
| Get version information function shall follow a naming rule |  |
| Reporting of security events during startup |  |

### 32. Traceable item history of this document according to AUTOSAR Release R25-11

### 33. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| BSW modules shall be able to handle PDU meta data |  |

### 34. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| All AUTOSAR standard types and constants shall be placed and organized in a standard type header file |  |
| List possible security events |  |
| Reporting of security events during startup |  |
| Definition of security event ID symbols |  |

### 35. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

| Number | Heading |
|---|---|
| The Basic Software Module specifications shall specify the scope of the configuration parameters |  |

### 36. Traceable item history of this document according to AUTOSAR Release R24-11

### 37. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 38. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| Unique Name of Basic Software Modules |  |
| Machine readable module description |  |
| A Naming seperation of different instances of BSW drivers shall be in place |  |
| Callback Function Return Types for AUTOSAR BSW |  |
| List possible error notifications |  |
| API handling in uninitialized state |  |
| Classification of security events |  |

### 39. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

| Number | Heading |
|---|---|
| Classification of transient faults |  |

### 40. Traceable item history of this document according to AUTOSAR Release R23-11

### 41. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 42. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 43. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

| Number | Heading |
|---|---|
| If tracing is enabled, all AUTOSAR Basic Software Modules should allow tracing its entry and exit points. |  |

### 44. Traceable item history of this document according to AUTOSAR Release R22-11

### 45. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| All software modules shall provide version and identification information |  |
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |
| Modules of the \muC Abstraction Layer (MCAL) may not have hard coded horizontal interfaces |  |
| The source code of software modules above the \muC Abstraction Layer (MCAL) shall not be processor and compiler dependent. |  |
| All Basic SW Modules written in C language shall conform to the MISRA C 2012 Standard. |  |
| All Basic SW Modules shall be documented according to a common standard. |  |
| The memory consumption of all Basic SW Modules shall be documented for a defined configuration for all supported platforms. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 47. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 48. Tracegroups

| Defined Trace Groups | < |
|---|---|
| Identifier | Included Requirements |
| TG_BSW |  |
| TG_BSW_NonFunctional |  |
