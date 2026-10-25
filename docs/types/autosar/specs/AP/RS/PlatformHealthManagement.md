# Requirements on Platform Health Management (`PlatformHealthManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 852 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_PlatformHealthManagement_852\AUTOSAR_AP_RS_PlatformHealthManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_PlatformHealthManagement_852\AUTOSAR_AP_RS_PlatformHealthManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_PlatformHealthManagement_852\zzgen\AP_RS_PlatformHealthManagement.complete.txt`

## 文档简介

This document specifies requirements on Platform Health Management. Platform Health Management implements the Platform Health Monitoring on the AUTOSAR Adaptive Platform.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on Platform Health Management. Platform Health Management implements the Platform Health Monitoring on the AUTOSAR Adaptive Platform.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the specification or implementation of Health Monitoring that are not included in the .

| Abbreviation: | Description: |
|---|---|
| EM | see  AUTOSAR Glossary |
| PHM | see  AUTOSAR Glossary |
| SE | Supervised Entity |
| SM | see  AUTOSAR Glossary |

| Acronym: | Description: |
|---|---|
| Adaptive Application | see  AUTOSAR Glossary |
| Alive Supervision | Mechanism to check the timing constraints of cyclic Supervised Entityes to be within the configured min and max limits. |
| ara::com | Communication middleware for the AUTOSAR Adaptive Platform |
| AUTOSAR Adaptive Platform | see  AUTOSAR Glossary |
| Checkpoint | A point in the control flow of a Supervised Entity where the activity is reported. |
| Daisy chaining | Chaining multiple instances of Health Monitoring |
| Deadline End Checkpoint | A Checkpoint for which Deadline Supervision is configured and which is a ending point for a particular Transition. It is possible that a Checkpoint is both a Deadline Start Checkpoint and Deadline End Checkpoint - if Deadline Supervision is chained. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Platform Health Management.

### 5. 功能概述
*原文标题：Functional Overview*

See RS Health Monitoring  for the overview of the functionality.

This document specifies the requirements regarding the realization of the Health Monitoring on the AUTOSAR Adaptive Platform. This includes:

* Standardized interfaces
* Mapping of abstract functionalities/concepts defined in Foundation to entities in the AUTOSAR Adaptive Platform.

EM, PHM and SM are the main safety relevant functional clusters of the AUTOSAR Adaptive Platform. Consequently, their development may require certain processes to be followed - as recommended in ISO26262, for instance  . A safety argumentation for the AUTOSAR Adaptive Platform, describing functional safety measures and use-cases is provided through Explanation of Safety Overview .

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No known limitation.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restriction.

### 9. 功能性需求
*原文标题：Functional Requirements*

### 10. Supervision functions

Platform Health Management shall provide a standardized C++ interface for the reporting of Checkpoints.
  Status: DRAFT
⌈
| Description: | Platform Health Management shall provide a standardized C++ interface for the reporting of Checkpoints. |
|---|---|
| Rationale: | Checkpoints are locations inside the code of Supervised Entitys. Platform Health Management checks that these locations are reached in correct time and order. Therefore Platform Health Management needs to be informed when a Checkpoint is reached. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Reporting of reached code locations for Alive Supervision, Deadline Supervision and Logical Supervision. |
| Supporting Material: | - |

⌋

 Platform Health Management shall support multiple occurrences of the same Supervised Entity.
  Status: DRAFT
⌈
| Description: | Platform Health Management shall support multiple occurrences of the same Supervised Entity. |
|---|---|
| Rationale: | An Adaptive Application or component can be instantiated multiple times |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Multiple occurrences of the same software component or Adaptive Application launched multiple times, as separate processes or threads. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 映射 of Supervised Entitys to threads and processes
*原文标题：Mapping of Supervised Entitys to threads and processes*

Platform Health Management shall derive the Supervision Mode from Function Group State(s).
  Status: DRAFT
⌈
| Description: | Platform Health Management shall derive the Supervision Mode from Function Group State(s). |
|---|---|
| Rationale: | Depending on Function Group State, the behavior of process can differ (e.g. other execution path, other timing). Hence, it should be possible to change Supervision configuration based on Function Group State. |

Applies To:
| Dependencies: | RS_HM_09253 |
|---|---|
| Use Case: | The program flow of a Sensor driver could differ between "Normal mode" and "Sensor Learning mode". Logical Supervision configuration will have to be changed between the corresponding Function Group States. |
| Supporting Material: | - |

⌋

 Platform Health Management shall support different allocations/distributions of a Supervision through threads and processes.
  Status: DRAFT
⌈
| Description: | Platform Health Management shall support the following Supervision: |
|---|---|

* A Supervision belonging to one thread
* A Supervision spread across several threads or processes
| Rationale: | Algorithms can be executed in one thread, multiple threads or processes. It must be possible to supervise a whole algorithm. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

Platform Health Management at highest safety integrity level
  Status: DRAFT
  Upstream requirements:
⌈
| Description: | Platform Health Management shall be implemented at least according the highest safety integrity level from any process that is supported on the platform. |
|---|---|
| Rationale: | Platform Health Management is responsible for ensuring part of the safe execution of safety relevant processes/applications, it should at least be developed with the highest ASIL as the process/application that is being executed. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | An ASIL C, B and QM application is running on the AUTOSAR Adaptive Platform. PHM shall supervise the ASIL C and B application, therefore PHM shall be implemented with an ASIL C. |
| Supporting Material: | - |

⌋

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following table references the features specified in  and links to the fulfillments of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| AUTOSAR shall provide mechanisms to support safe initialization of application software. |  |  |
| AUTOSAR shall provide mechanisms to support safe shutdown and termination of application software and embedded middleware. |  |  |
| AUTOSAR shall provide mechanisms to support safe transition of states in embedded middleware or service life cycle. |  |  |
| AUTOSAR shall provide mechanisms to support safe program execution. |  |  |

### 14. 不适用需求
*原文标题：Not applicable requirements*

Status: DRAFT
⌈
These requirements are not applicable as they are not within the scope of this release.
⌋

### 15. References

### 16. 附录
*原文标题：Appendix*

### 17. Change History of AUTOSAR traceable items

Please note that the lists in this chapter also include specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 18. Traceable item history of this document according to AUTOSAR Release R22-11

### 19. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| Platform Health Management shall be implemented at least according the highest safety integrity level from any process that is supported on the platform. |  |
| If supervision of State Management fails then Platform Health Management shall trigger a watchdog reset. |  |
| If supervision of Execution Management fails then Platform Health Management shall trigger a watchdog reset. |  |
| Platform Health Management shall notify State Management in case an AUTOSAR Adaptive Platform functional cluster, application or service other than Execution Management and State Management fails. |  |

### 20. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| Platform Health Management shall provide a standardized C++ interface for the reporting of Checkpoints. |  |
| Platform Health Management shall provide a standardized C++ interface for the reporting of Health Channel. |  |
| Platform Health Management shall determine Supervision status |  |
| Health Monitoring shall support multiple instances of Checkpoints in a Supervised Entity occurrence. |  |

### 21. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 22. Traceable item history of this document according to AUTOSAR Release R23-11

### 23. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| PHM shall only process a checkpoint reported from corresponding processes. |  |
| A security event shall be raised if a checkpoint is reported from a non-corresponding process. |  |

### 24. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| Platform Health Management shall support different allocations/distributions of a Supervision through threads and processes. |  |

### 25. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

| Number | Heading |
|---|---|
| Platform Health Management functionality shall be available within the same process and as a separate one. |  |

### 26. Traceable item history of this document according to AUTOSAR Release R24-11

### 27. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 28. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| Platform Health Management shall support multiple instantiation on different platforms. |  |

### 29. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

| Number | Heading |
|---|---|
| The Platform Health Management shall provide a standardized header file structure for each service. |  |
| The service header files shall define the namespace for the respective service. |  |
| The Platform Health Management shall define how language specific data types are derived from modeled data types. |  |
| Platform Health Management shall provide a standardized C++ interface for the reporting of Health Channel. |  |
| Platform Health Management shall provide a standardized interface between Platform Health Management components used in a daisy chain. |  |
| Platform Health Management shall provide the Daisy chaining interface over ara::com. |  |
| Platform Health Management shall provide an interface to receive Health Channel supervision status |  |
| Platform Health Management shall provide an interface to Supervised Entities to report their health status. |  |

### 30. Traceable item history of this document according to AUTOSAR Release R25-11

### 31. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 32. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 33. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

| Number | Heading |
|---|---|
| Platform Health Management shall support multiple instantiation on different platforms. |  |

### 34. Traceable item history of this document according to AUTOSAR Release R26-11

### 35. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

none

### 36. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

| Number | Heading |
|---|---|
| Platform Health Management shall support different allocations/distributions of a Supervision through threads and processes. |  |
| Platform Health Management shall support allocating of multiple Supervised Entitys to the same process. |  |

### 37. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

none
