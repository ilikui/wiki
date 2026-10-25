# Requirements on Execution Management (`ExecutionManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 720 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_ExecutionManagement_720\AUTOSAR_AP_RS_ExecutionManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_ExecutionManagement_720\AUTOSAR_AP_RS_ExecutionManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_ExecutionManagement_720\zzgen\AP_RS_ExecutionManagement.complete.txt`

## 文档简介

This document specifies requirements of the AUTOSAR Adaptive Platform on the Execution Management. The motivation is to provide a standardized way to start, stop and police applications platform wide.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements of the AUTOSAR Adaptive Platform on the Execution Management. The motivation is to provide a standardized way to start, stop and police applications platform wide.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

There are no special requirement guidelines for this document.

### 5. 需求 status
*原文标题：Requirements status*

The following requirements are described within this document but not otherwise considered in this release:

*  - Identification of Processes

The functionality described above is subject to modification and will be considered for inclusion in a future release of this document.

### 6. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to this Document.

| Abbreviation / Acronym: | Description: |
|---|---|
| Modelled Process | A Modelled Process is an instance of an Executable to be executed on a Machine and has a 1:1 association with the ARXML/Meta-Model element Process.This document also uses the term Process(without the "modelled" prefix) to refer to the OS concept of a running process. |
| Execution Dependency | Dependencies between Modelled Processes instances can be configured to define a sequence for starting and terminating them. |
| Execution Management | The element of the AUTOSAR Adaptive Platform responsible for the ordered startup and shutdown of the AUTOSAR Adaptive Platform and Adaptive Applications. |
| Function Group | A Function Group is a set of Modelled Processes which need to be controlled consistently. Depending on the state of the Function Group,Processes (related to the Modelled Processes) are started or terminated. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Execution Management.

### 8. 功能概述
*原文标题：Functional Overview*

The AUTOSAR Adaptive Platform provides services to influence the lifecycle of applications based on configuration. This document therefore includes requirements that determine the facilities provided by Execution Management to affect the machine-wide startup, shutdown and restart of an application based on configuration.

Execution Management is responsible for all aspects of platform lifecycle management and application lifecycle management, including:

* Machine startup and shutdown.

  * Execution Management is the initial ("boot") process of the operating system.
* Required process hierarchy of started services, e.g., init and its child process.

  * after booting. The boot process in this case corresponds to machine init process.
* Provision of process isolation with each instance of an Executable managed as a single process.
* Startup and shutdown of applications.

  * Loading Executable based on a defined Execution Dependency.
  * Specific requirements until starting an Executable main function (i.e. entry point)
* Privileges and use of access control

  * description and semantics of access control in manifest files
* State management

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 功能性需求
*原文标题：Functional Requirements*

### 10. 启动 and 关机 of applications
*原文标题：Startup and Shutdown of applications*

Execution Management shall set-up one process for the execution of each Modelled Process.
  Upstream requirements:
⌈
| Description: | For each instance of an Executable, Execution Management shall allocate one POSIX process. Furthermore process specific properties (like priority, scheduling policy and access rights) shall be assigned based on the Execution Manifest. |
|---|---|
| Rationale: | Isolation of Executable instances from each other. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Safety and security related applications require isolation. |
| Supporting Material: | - |

⌋

 Execution Management shall support integrity and authenticity monitoring.
⌈
| Description: | Execution Management shall support configurable integrity and authenticity monitoring for all Executables and their corresponding Execution Management meta-data (i.e. processed Machine and Execution Manifests). |
|---|---|
| Rationale: | Execution Management takes over the responsibility from Operating System and/or boot loader for AUTOSAR Adaptive Platform startup and hence for keeping the platform trusted. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Execution

Execution Management shall assist identification of processes during Machine runtime.
⌈
| Description: | Adaptive Applications shall be identifiable, for example by Identity and Access Management, during runtime so that access restrictions can be enforced. Execution Management spawns runtime processes based on Execution Manifest. Execution Management is qualified to assist AUTOSAR Adaptive Platform software, such as Identity and Access Management, by providing information about the link between runtime representation and Modelled Process. |
|---|---|
| Rationale: | Adaptive Applications shall be identifiable by Identity and Access Management on the basis of their runtime representation as spawned by Execution Management. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | App A requests access on Service Interface. Identity and Access Management is able to retrieve runtime information of App A, e.g. POSIX pid or cryptographic token. Execution Management assists Identity and Access Management by resolving this runtime information to the Adaptive Application. |
| Supporting Material: | - |

⌋

 Execution Management shall support standardized trace points throughout the state transitions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 状态管理
*原文标题：State Management*

Execution Management shall support State Management functionality.
⌈
| Description: | Execution Management shall provide an interface to State Management to request a change in Function Group State. |
|---|---|
| Rationale: | To support the starting and stopping of Processes based on declared Function Group State dependencies, Execution Management provides an interface to request Function Group State (including Machine State) changes by the State Management fuctional cluster. In response to state change requests, Execution Management ensures that only the required set of application Processes are running in any given operation conditions and therefore platform resources are saved for relevant Processes. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Provide a mechanism to define modes of operation of the Machine. |
| Supporting Material: | - |

⌋

 Execution Management shall support process lifecycle management.
⌈
| Description: | The lifecycle of a Process consists of its initialization, running and terminating (shutdown) phases. As well as supporting transitions between these phases of the Process lifecycle, Execution Management should ensure that phases, e.g. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 错误处理
*原文标题：Error Handling*

Error Handling.
⌈
| Description: | Execution Management shall support error handling including unrecoverable errors. |
|---|---|
| Rationale: | Execution Management may face conditions where it has no mechanism to recover the system. These situations are typically expected to result from a misconfigured system and therefore a suitable response might be to halt startup so that the misconfiguration can be resolved. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Execution Management can not start Platform Health Management or State Management and hence the platform as a whole cannot be started, it is not possible to recover from this situation hence Execution Management must halt startup. |
| Supporting Material: | - |

⌋

### 14. 支持 for 诊断
*原文标题：Support for Diagnostics*

Support for Diagnostics is handled by State Management and therefore the requirements are replaced by the ones from .

### 15. Non-Functional 需求
*原文标题：Non-Functional Requirements*

Execution Management shall be implemented at least according to the highest safety integrity level from any process that is supported on the platform.
  Upstream requirements:
⌈
| Description: | Execution Management shall be implemented at least according to the highest safety integrity level from any Process that is supported on the platform. |
|---|---|
| Rationale: | Execution Management manages Process instantiation and termination of all the Processes and therefore needs to be developed and executed according to the same safety standards as the highest rated safety application managed by Execution Management in the system. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | An ASIL C, B and QM application is running on the AUTOSAR Adaptive Platform. Execution Management shall execute the ASIL C, B and the QM application, therefore Execution Management shall be implemented with an ASIL C. |
| Supporting Material: | - |

⌋

### 16. References

### 17. 附录
*原文标题：Appendix*

### 18. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 19. Traceable item history of this document according to AUTOSAR Release R26-11

### 20. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

| Number | Heading |
|---|---|
| Execution Management shall set-up one process for the execution of each Modelled Process. |  |
| Execution Management shall support the configuration of OS resource budgets for process and groups of processes. |  |
| Execution Management shall support the binding of all threads of a given process to a specified set of processor cores. |  |
| Execution Management shall control the right to create child process for each process it starts. |  |
| Execution Management shall support multiple instances of Executables. |  |
| Execution Management shall support self-initiated graceful shutdown of processes. |  |
| Execution Management shall support integrity and authenticity monitoring. |  |
| Execution Management shall support the ordered startup and shutdown of processes. |  |
| Execution Management shall support State Management functionality. |  |
| Execution Management shall support process lifecycle management. |  |
| Execution Management shall assist identification of processes during Machine runtime. |  |
| Error Handling. |  |
| Execution Management shall be implemented at least according to the highest safety integrity level from any process that is supported on the platform. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

none

### 22. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

none

### 23. Traceable item history of this document according to AUTOSAR Release R25-11

### 24. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 25. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| Execution Management shall set-up one process for the execution of each Modelled Process. |  |
| Execution Management shall support the configuration of OS resource budgets for process and groups of processes. |  |
| Execution Management shall support the binding of all threads of a given process to a specified set of processor cores. |  |
| Execution Management shall control the right to create child process for each process it starts. |  |
| Execution Management shall support multiple instances of Executables. |  |
| Execution Management shall support self-initiated graceful shutdown of processes. |  |
| Execution Management shall support a Trusted Platform. |  |
| Execution Management shall support integrity and authenticity monitoring. |  |
| Execution Management shall support the ordered startup and shutdown of processes. |  |
| Execution Management shall support State Management functionality. |  |
| Execution Management shall support process lifecycle management. |  |
| Execution Management shall assist identification of processes during Machine runtime. |  |
| Error Handling. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 27. Traceable item history of this document according to AUTOSAR Release R24-11

### 28. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 29. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| Execution Management shall set-up one process for the execution of each Modelled Process. |  |
| Execution Management shall support the configuration of OS resource budgets for process and groups of processes. |  |
| Execution Management shall support the binding of all threads of a given process to a specified set of processor cores. |  |
| Execution Management shall control the right to create child process for each process it starts. |  |
| Execution Management shall support self-initiated graceful shutdown of processes. |  |
| Execution Management shall support State Management functionality. |  |
| Execution Management shall support process lifecycle management. |  |
| Error Handling. |  |
| Execution Management shall be implemented at least according the highest safety integrity level from any process that is supported on the platform. |  |
| Execution Management shall support standardized trace points throughout the state transitions. |  |

### 30. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

| Number | Heading |
|---|---|
| Execution Management shall perform Machine-wide coordination of process. |  |
| Execution Management shall provide APIs to the process for configuring external trigger conditions for its activities. |  |
| Execution Management shall provide APIs to the process for configuring cyclic triggering of its activities. |  |
| Execution Management shall provide APIs to the process to support deterministic redundant execution of process. |  |
| Execution Management shall support time-triggered execution. |  |

### 31. Traceable item history of this document according to AUTOSAR Release R23-11

### 32. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| Execution Management shall support standardized trace points throughout the state transitions. |  |

### 33. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| Execution Management shall support the binding of all threads of a given process to a specified set of processor cores. |  |
| Execution Management shall control the right to create child process for each process it starts. |  |
| Execution Management shall provide APIs to the process to support deterministic redundant execution of process. |  |
| Execution Management shall be implemented at least according the highest safety integrity level from any process that is supported on the platform. |  |

### 34. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 35. Traceable item history of this document according to AUTOSAR Release R22-11

### 36. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| Execution Management shall be implemented at least according the highest safety integrity level from any process that is supported on the platform. |  |

### 37. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| Execution Management shall set-up one process for the execution of each Modelled Process. |  |
| Execution Management shall support the configuration of OS resource budgets for process and groups of process. |  |
| Execution Management shall support the binding of all threads of a given process to a specified set of processor cores. |  |
| Execution Management shall ensure it is the sole entity starting process. |  |
| Execution Management shall perform Machine-wide coordination of process. |  |
| Execution Management shall provide APIs to the process to support deterministic redundant execution of process. |  |
| Execution Management shall support process lifecycle management. |  |
| Execution Management shall support time-triggered execution. |  |

 |

### 38. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 39. Traceable item history of this document according to AUTOSAR Release R21-11

### 40. Added 需求 in R21-11
*原文标题：Added Requirements in R21-11*

| Number | Heading |
|---|---|
| Execution Management shall support integrity and authenticity monitoring |  |

### 41. Changed 需求 in R21-11
*原文标题：Changed Requirements in R21-11*

none

### 42. Deleted 需求 in R21-11
*原文标题：Deleted Requirements in R21-11*

none

### 43. Traceable item history of this document according to AUTOSAR Release R20-11

### 44. Added 需求 in R20-11
*原文标题：Added Requirements in R20-11*

| Number | Heading |
|---|---|
| Execution Management shall support time-triggered execution |  |
| Error Handling |  |

### 45. Changed 需求 in R20-11
*原文标题：Changed Requirements in R20-11*

none

### 46. Deleted 需求 in R20-11
*原文标题：Deleted Requirements in R20-11*

| Number | Heading |
|---|---|
| Execution Management shall support configurable recovery actions |  |

### 47. Traceable item history of this document according to AUTOSAR Release R19-11

### 48. Added 需求 in 19-11
*原文标题：Added Requirements in 19-11*

none

### 49. Changed 需求 in 19-11
*原文标题：Changed Requirements in 19-11*

| Number | Heading |
|---|---|
| Only Execution Management shall start Executables |  |

### 50. Deleted 需求 in 19-11
*原文标题：Deleted Requirements in 19-11*

none

### 51. Traceable item history of this document according to AUTOSAR Release 19-03

### 52. Added 需求 in 19-03
*原文标题：Added Requirements in 19-03*

none

### 53. Changed 需求 in 19-03
*原文标题：Changed Requirements in 19-03*

| Number | Heading |
|---|---|
| The Execution Management shall support the binding of Executable threads to a specified set of processor cores. |  |

### 54. Deleted 需求 in 19-03
*原文标题：Deleted Requirements in 19-03*

none

### 55. Traceable item history of this document according to AUTOSAR Release 18-10

### 56. Added 需求 in 18-10
*原文标题：Added Requirements in 18-10*

| Number | Heading |
|---|---|
| Execution Management shall support a Trusted Platform |  |
| Execution Management shall assist identification of Processes during Machine runtime |  |

### 57. Changed 需求 in 18-10
*原文标题：Changed Requirements in 18-10*

| Number | Heading |
|---|---|
| The Execution Management shall set-up one process for the execution of each Executable instance |  |
| The Execution Management shall support the configuration of OS resource budgets for Executable and groups of Executables |  |
| Execution Management shall support self-initiated graceful shutdown of Executable instances |  |
| Execution Management shall support configurable recovery actions |  |
| The Execution Management shall provide Machine State Management functionality |  |

### 58. Deleted 需求 in 18-10
*原文标题：Deleted Requirements in 18-10*

| Number | Heading |
|---|---|
| The Execution Management shall support the checking of the integrity of Executables at startup of Executable |  |
| The Execution Management shall support the authentication and authorization of Executables at startup of Executable |  |

### 59. Traceable item history of this document according to AUTOSAR Release 18-03

### 60. Added 需求 in 18-03
*原文标题：Added Requirements in 18-03*

| Number | Heading |
|---|---|
| Execution Management shall be implemented at least according the highest safety integrity level from any process that is supported on the platform. |  |

### 61. Changed 需求 in 18-03
*原文标题：Changed Requirements in 18-03*

| Number | Heading |
|---|---|
| Only Execution Management shall start Executables |  |
| The Execution Management shall provide Machine State Management functionality |  |
| Execution Management shall support application lifecycle management |  |
| Execution Management shall support diagnostic reset cause |  |

### 62. Deleted 需求 in 18-03
*原文标题：Deleted Requirements in 18-03*

| Number | Heading |
|---|---|
| The Execution Management shall support the analysis of available and required OS resource budgets for Executables and groups of Executables during installation and run-time |  |
| The Execution Management shall support of the allocation of dedicated resources for the Executable (e.g GPU) |  |
| Application Manifest shall support unambiguous identification of Executable instances |  |

### 63. Traceable item history of this document according to AUTOSAR Release 17-10

### 64. Added 需求 in 17-10
*原文标题：Added Requirements in 17-10*

| Number | Heading |
|---|---|
| The Execution Management shall provide functions to support redundant execution of Executables |  |
| Execution Management shall support diagnostic reset cause |  |

### 65. Changed 需求 in 17-10
*原文标题：Changed Requirements in 17-10*

none

### 66. Deleted 需求 in 17-10
*原文标题：Deleted Requirements in 17-10*

| Number | Heading |
|---|---|
| The Execution Management shall load Executables |  |
| Execution Management shall support application lifecycle management |  |

### 67. Traceable item history of this document according to AUTOSAR Release 17-03

### 68. Added 需求 in 17-03
*原文标题：Added Requirements in 17-03*

| Number | Heading |
|---|---|
| The Execution Management shall load Executables |  |
| The Execution Management shall set-up one process for the execution of each Executable instance |  |
| The Execution Management shall support the checking of the integrity of Executables at startup of Executable |  |
| The Execution Management shall support the authentication and authorization of Executables at startup of Executable |  |
| The Execution Management shall support the configuration of OS resource budgets for Executable and groups of Executables |  |
| The Execution Management shall support the analysis of available and required OS resource budgets for Executables and groups of Executables during installation and run-time |  |
| The Execution Management shall support of the allocation of dedicated resources for the Executable (e.g GPU) |  |
| The Execution Management shall support the binding of Executable threads to a specified set of processor cores. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 69. Changed 需求 in 17-03
*原文标题：Changed Requirements in 17-03*

none

### 70. Deleted 需求 in 17-03
*原文标题：Deleted Requirements in 17-03*

none
