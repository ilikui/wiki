# Requirements on Health Monitoring (`HealthMonitoring`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 878 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_HealthMonitoring_878\AUTOSAR_FO_RS_HealthMonitoring.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_HealthMonitoring_878\AUTOSAR_FO_RS_HealthMonitoring.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_HealthMonitoring_878\zzgen\FO_RS_HealthMonitoring.complete.txt`

## 文档简介

This document specifies requirements on the Health Monitoring.

For this release, this document applies to Adaptive Platform only: the alignment with Classic Platform will be done in a subsequent release. The "Applies to" fields in chapter  should be ignored. The alignment with Classic Platform will be done in a subsequent release."

Health Monitoring is required by  (under the terms control flow monitoring, external monitoring facility, watchdog, logical monitoring, temporal monitoring, program sequence monitoring) and this specification is supposed to address all relevant requirements from this standard.

Health monitoring has the following error detection functions:

# Alive supervision - checking if Checkpoints happens with a correct frequency
# Deadline supervision - checking the delta time between two Checkpoints
# Logical supervision - checking for correct sequence of execution of Checkpoints
# Health status supervision - checking if Health Status information is valid

Health monitoring provides also a configurable error handling mechanism in order to recover from errors detected by the previous supervision functions.

The Health Supervision is supposed to be implemented by

## 章节详细内容

### 1. 范围 of this document
*原文标题：Scope of this document*

This document specifies requirements on the Health Monitoring.

For this release, this document applies to Adaptive Platform only: the alignment with Classic Platform will be done in a subsequent release. The "Applies to" fields in chapter  should be ignored. The alignment with Classic Platform will be done in a subsequent release."

Health Monitoring is required by  (under the terms control flow monitoring, external monitoring facility, watchdog, logical monitoring, temporal monitoring, program sequence monitoring) and this specification is supposed to address all relevant requirements from this standard.

Health monitoring has the following error detection functions:

# Alive supervision - checking if Checkpoints happens with a correct frequency
# Deadline supervision - checking the delta time between two Checkpoints
# Logical supervision - checking for correct sequence of execution of Checkpoints
# Health status supervision - checking if Health Status information is valid

Health monitoring provides also a configurable error handling mechanism in order to recover from errors detected by the previous supervision functions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. How to read this document

### 3. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see Standardization Template, chapter Support for Traceability .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see Standardization Template, chapter Support for Traceability .

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the specification or implementation of Health Monitoring that are not included in the .

| Abbreviation: | Description: |
|---|---|
| CM | AUTOSAR Adaptive Communication Management |
| SE | Supervised Entity |

| Acronym: | Description: |
|---|---|
| Alive Counter | An independent data resource in context of a Checkpoint to track and handle its amount of Alive Indications. |
| Alive Indication | An indication of a Supervised Entity to signal its aliveness by calling a checkpoint used for Alive Supervision. |
| Alive Supervision | Mechanism to check the timing constraints of cyclic Supervised Entitys to be within the configured min and max limits. |
| Checkpoint | A point in the control flow of a Supervised Entity where the activity is reported. |
| Deadline End Checkpoint | A Checkpoint for which Deadline Supervision is configured and which is a ending point for a particular Transition. It is possible that a Checkpoint is both a Deadline Start Checkpoint and Deadline End Checkpoint - if Deadline Supervision is chained. |
| Deadline Start Checkpoint | A Checkpoint for which Deadline Supervision is configured and which is a starting point for a particular Transition. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 功能概述
*原文标题：Functional overview*

The Health Monitoring is intended to supervise the execution of supervised entities with respect to timing constraints (alive and deadline supervision) and with respect to the required sequence of execution (logical supervision) and with respect to their health (health supervision).

The Health Monitoring can be performed on supervised entities, which can be any software components or groups of software components or Adaptive Applications.

The supervision results, as well as the output of other monitors (e. g. Voltage monitor) can be used to create HealthIndicators, which give an overall health status for features or subsystems.

The following features are provided by the Health Monitoring:

# Supervision of multiple individual supervised entities located on the microprocessor or virtual machine, having independent supervision constraints.
# Support for parallel and concurrent execution of supervised entities and for multiple instantiation.
# Support for different modes of operation, with different behavior of software components depending on mode.
# Support for multiple hardware watchdogs.
# Support for several error handling mechanisms.

### 6. 需求规范
*原文标题：Requirements specification*

### 7. 功能性需求
*原文标题：Functional requirements*

### 8. Supervision functions

Health Monitoring shall provide a Logical Supervision
  Status: DRAFT
⌈
| Description: | Health Monitoring shall check if the sequence of Checkpoints in a Supervised Entity at runtime is the same as the one that is specified. This shall include: |
|---|---|

* start of if/else branch (decision node): exactly one of the code branches shall be entered, the choice is runtime-specific depending on logical condition
* end of if/else branch (merge node): exactly one of the branches shall be reached so that the join is performed
* fork of the flow into concurrent execution (fork node): all concurrent branches shall be entered
* join of the flow of concurrent execution (join node): all concurrent branches shall be reached so that the join is performed.
| Rationale: | To detect if the sequence in the execution is the same as specified/designed. |
|---|---|
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | Supervision of any software components: application software components or platform components (e.g. execution manager, state manager). |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 接口 to Supervised Entities
*原文标题：Interface to Supervised Entities*

Health Monitoring shall provide an interface to Supervised Entities to report the currently reached Checkpoint.
  Status: DRAFT
⌈
| Description: | Health Monitoring shall provide an interface to Supervised Entities to report the currently reached Checkpoint by a Supervised Entity, taking into account that a given code location can be achieved from different processes, threads or executed on different cores. |
|---|---|
| Rationale: | This is the only way how an application can report its progress. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | - |
| Supporting Material: | - |

⌋

 Health Monitoring shall provide an interface to Supervised Entities informing them about their Supervision Status.
  Status: DRAFT
⌈
| Description: | Health Monitoring shall provide an interface informing about Supervision Status, including: |
|---|---|

* which Supervised Entity failed
* current Local Supervision Status of each Supervised Entity
* current Global Supervision Status of microcontroller or virtual machine
* reason why the last error reactions were performed
* upcoming microcontroller or virtual machine reset

This shall be available by notification and by polling.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Features related to supervision functions

Health Monitoring shall support mode-dependent behavior of Supervised Entities.
  Status: DRAFT
⌈
| Description: | Health Monitoring shall support supervision modes of Supervised entities, where |
|---|---|

* a Supervised Entity has possibly a different behavior in each Supervision Mode.
* a Supervision Mode is shared across all Supervised Entities in case of Classic Platform.
* a Supervision mode is shared across multiple Supervised Entity instances in case of Adaptive Platform.
* a Supervision Mode is defined as a flat or hierarchical state machine.
| Rationale: | In different modes, a Supervised Entity can have a different behavior, e.g. other execution path, other timing. |
|---|---|
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In "init" mode, the function init() is supervised with its Checkpoints related to the "init" mode. In "run" mode, the run() function is supervised with its Checkpoints related to the "run" mode.In AP, Supervision Modes are derived from Function Group States. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Features related to 支持 for watchdogs
*原文标题：Features related to support for watchdogs*

This section specifies requirements for support of watchdogs. A watchdog is typically a simple hardware entity that expects a simple certain information within a defined time period. It can also be realized by a more complex system, e.g. by another microcontroller.

 Health Monitoring shall support timeout watchdogs.
  Status: DRAFT
⌈
| Description: | Health Monitoring shall support simple timeout watchdogs, i.e. watchdogs that require that specific value(s) are written within a defined timeout. |
|---|---|
| Rationale: | Such hardware watchdogs are broadly available. Moreover, systems exist that apply several watchdogs as a redundancy measure (with a simple timeout watchdog and a complex question-answer watchdog). |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | - |
| Supporting Material: | - |

⌋

 Health Monitoring shall support window watchdogs.
  Status: DRAFT
⌈
| Description: | Health Monitoring shall support window watchdogs, i.e. where the watchdog requires a correct value to be written within a defined min/max time window. |
|---|---|
| Rationale: | Window watchdogs are broadly used in automotive systems. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Supported 错误处理 mechanisms
*原文标题：Supported error handling mechanisms*

Health Monitoring shall be able to report supervision errors.
  Status: DRAFT
⌈
| Description: | As a possible error reaction, Health Monitoring shall report supervision errors, providing information on what kind of error was detected. |
|---|---|
| Rationale: | Reporting of errors is needed so that they can be logged and analyzed or so that a centralized error reaction can take place. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | Reporting that a Supervised Entity violated its Alive Supervision, but still within limits. Reporting that the entire microcontroller is in such a bad state that it needs to be reset. Handling of the error reported by Health Monitoring by others. |
| Supporting Material: | - |

⌋

 Health Monitoring shall be able to wrongly trigger the serviced watchdogs.
  Status: DRAFT
⌈
| Description: | As a possible error reaction, Health Monitoring shall be able to wrongly trigger the serviced watchdogs. |
|---|---|
| Rationale: | In order to provide a quick reset of the microprocessor. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | Typical error reaction provided by hardware watchdogs is a quick reset of the microprocessor. A typical wrong triggering of watchdogs includes: |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Features related to 系统 Health Monitoring
*原文标题：Features related to System Health Monitoring*

System Health Monitor shall transmit Health Indicators as standardized service events
  Status: DRAFT
⌈
| Description: | Health Indicator transmission shall be done in a standardized way as part of a standardized service event. |
|---|---|
| Rationale: | Health Indicators shall be provided as kind of Health of Service/Subsystem in a platform agnostic standardized way to other modules/platforms so they can be used on platform level for error recovery/degradation |
| Applies To: | FO, CP, AP |
| Dependencies: | - |
| Use Case: | E.g. feature HAD is spread over multiple platforms (AP, CP and Non-AUTOSAR). SHM determines Health Indicator and transmits it over standardized Health Indicator event to components using feature HAD. |
| Supporting Material: |  |

⌋

 SHM shall receive relevant health information from local health monitors
  Status: DRAFT
⌈
| Description: | SHM shall provide an interface to receive Health Indicators and Health Information through various communication mechanisms. |
|---|---|
| Rationale: | Received information is used to determine Health Indicators on System Level, SHM needs to support information reception. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Non 功能性需求
*原文标题：Non functional requirements*

Health Monitoring shall support building safety-related systems.
  Status: DRAFT
⌈
| Description: | Health Monitoring shall support building safety-related systems compliant to ISO 26262. |
|---|---|
| Rationale: | Health Monitoring shall not prevent but facilitate the implementation of safe systems compliant with ISO 26262. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | Building driving assistance systems. |
| Supporting Material: |  |

⌋

### 15. References

### 16. 附录
*原文标题：Appendix*

### 17. History of Constraints and 规范 Items
*原文标题：History of Constraints and Specification Items*

Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 18. Change History of this document according to AUTOSAR Release R22-11

### 19. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

none

### 20. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| Health Monitoring shall provide an Alive Supervision |  |
| Health Monitoring shall be able to trigger microcontroller reset. |  |
| Health Monitoring shall provide a Logical Supervision |  |
| Health Monitoring shall be able to wrongly trigger the serviced watchdogs. |  |
| Health Monitoring shall provide a Deadline Supervision |  |
| Health Monitoring shall support building safety-related systems. |  |
| System Health Monitor shall transmit Health Indicators as standardized service events |  |
| SHM shall be platform agnostic |  |

### 21. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 22. Added Constraints in R22-11

none

### 23. Changed Constraints in R22-11

none

### 24. Deleted Constraints in R22-11

none

### 25. Change History of this document according to AUTOSAR Release R23-11

### 26. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 27. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 28. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 29. Added Constraints in R23-11

none

### 30. Changed Constraints in R23-11

none

### 31. Deleted Constraints in R23-11

none

### 32. Change History of this document according to AUTOSAR Release R24-11

### 33. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 34. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 35. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 36. Change History of this document according to AUTOSAR Release R25-11

### 37. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 38. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| Health Monitoring shall support multiple watchdogs |  |
| Health Monitoring shall provide an Alive Supervision |  |
| Health Monitoring shall be able to report supervision errors. |  |
| Health Monitoring shall provide configurable tolerances for detected errors and configurable delays of error reactions. |  |
| Health Monitoring shall be able to trigger microcontroller reset. |  |
| Health Monitoring shall provide a Logical Supervision |  |
| Health Monitoring shall be able to wrongly trigger the serviced watchdogs. |  |
| Health Monitoring shall provide a Deadline Supervision |  |
| Health Monitoring shall provide an interface to Supervised Entities informing them about their Supervision Status. |  |
| Health Monitoring shall support the supervision within and across Supervised Entities. |  |
| Health Monitoring shall support the supervision of concurrent and parallel Supervised Entities. |  |
| Health Monitoring shall support timeout watchdogs. |  |
| Health Monitoring shall support window watchdogs. |  |
| Health Monitoring shall support question-answer watchdogs. |  |
| Health Monitoring shall support modes of the hardware watchdogs. |  |
| Health Monitoring shall support different watchdog realizations. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
