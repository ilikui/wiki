# Requirements on Operating System (`OS`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 008 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_OS_008\AUTOSAR_CP_RS_OS.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_OS_008\AUTOSAR_CP_RS_OS.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_OS_008\zzgen\CP_RS_OS.complete.txt`

## 文档简介

The goal of this document is to define the high-level requirements for the AUTOSAR operating system.

## 章节详细内容

### 1. 范围 of this Document
*原文标题：Scope of this Document*

The goal of this document is to define the high-level requirements for the AUTOSAR operating system.

### 2. How to Read this Document

### 3. Conventions to be used

* The representation of requirements in AUTOSAR documents follows the table specified in  (see Standardization Template ).
* In requirements, the following specific semantics shall be used (based on the Internet Engineering Task Force IETF).

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as:

* SHALL: This word means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* MUST: This word means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase means that the definition is an absolute prohibition of the specification due to legal constraints.
* SHOULD: This word, or the adjective "RECOMMENDED", mean that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

The table below contains all acronyms and abbreviations specifically used in this document. All others are listed and described in the AUTOSAR Glossary .

| Abbreviation | Description |
|---|---|
| MC | Multi-Core |
| SC | Single-Core |

### 5. 需求指南
*原文标题：Requirements Guidelines*

Existing specifications shall be referenced (in form of a single requirement). Differences to these specifications are specified as additional requirements.

### 6. 需求 quality
*原文标题：Requirements quality*

All Requirements shall have the following properties:

* Redundancy

  Requirements shall not be repeated within one requirement or in other requirements
* Clearness

  All requirements shall allow one possibility of interpretation only. Only technical terms of the glossary  may be used. Furthermore, it must be clear from the requirement, what object the statement is a requirement on.

  Examples:

  * The <...> module shall/should/may ...
  * The <...> module's environment shall ...
  * The <...> configuration shall...
  * The function <...> shall ...
  * The <...> SWS shall ...
  * The hardware shall ...
* Atomicity

  Each Requirement shall only contain one requirement. A Requirement is atomic if it cannot be split up in further requirements.
* Testability

  Requirements shall be testable by analysis, review or test.
* Traceability

  The source and status of a requirement shall be visible at all times.
* Formulation

  All requirements shall be formulated so that they can be interpreted without the surrounding context (for example: "the function Xyz..." instead of "this function...").

### 7. 需求 identification
*原文标题：Requirements identification*

Each requirement has its unique identifier starting with BSW as prefix. For any review annotations, remarks and/or questions please refer to this unique ID rather than chapter or page numbers!

### 8. 需求 status
*原文标题：Requirements status*

Additionally, each requirement contains a state information. The state can be one of the following.

| State: | Description: |
|---|---|
| Open | The requirement has been created by a member of the WP but not yet discussed in the WP meeting. |
| Proposed | The requirement has been reviewed during the WP meeting. It is accepted, but there are still open issues pending. |
| Approved | The requirement has been reviewed and approved by all WP participants. |
| Conflict | The requirement has been reviewed, but there are conflicts (e.g. contradictions with other requirements) which could not be resolved so far. |
| Rejected | The requirement has been reviewed and rejected. |

Thus, all requirements finalized are in the state "Approved".

### 9. Requirement 规范
*原文标题：Requirement Specification*

### 10. Traceability

| Feature no | Feature name |
|---|---|
| RS_BRF_01200 | AUTOSAR OS shall be backwards compatible to OSEK OS |
| RS_BRF_01232 | AUTOSAR OS shall support isolation and protection of application software |
| RS_BRF_01096 | AUTOSAR shall support start-up and shutdown of ECUs |
| RS_BRF_01208 | AUTOSAR OS shall support to start lists of tasks regularly |
| RS_BRF_01216 | AUTOSAR OS shall support to synchronize ScheduleTables to an outside time source |
| RS_BRF_01240 | AUTOSAR OS shall support communication between OSApplications |
| RS_BRF_02008 | AUTOSAR shall provide mechanisms to protect the system from unauthorized read access |
| RS_BRF_01224 | AUTOSAR OS shall support timing protection |
| RS_BRF_01248 | AUTOSAR OS shall support to terminate and restart OSApplications |
| RS_BRF_01256 | AUTOSAR OS shall offer support to switch off cores |
| RS_BRF_01264 | AUTOSAR OS shall support multi-core deadlock free mutual exclusion |
| RS_BRF_01184 | AUTOSAR shall support different methods of degradation |
| RS_BRF_00206 | AUTOSAR shall support multi-core MCUs |

### 11. Real-Time Operating 系统
*原文标题：Real-Time Operating System*

### 12. 功能性描述
*原文标题：Functional description*

The real-time operating system in an embedded automotive ECU builds the basis for the dynamic behavior of the software. It manages the scheduling of tasks and events, the data flow between different tasks and provides features for monitoring and error handling.

However, in automotive systems the requirements on an operating system are highly domain specific. For instance, in the body, powertrain and chassis domains, the focus is on efficient scheduling of tasks and alarms, handling of shared resources and deadline monitoring. The used operating system has to be very efficient in runtime and small in memory footprint.

In multimedia and telematics applications, the feature set provided by the operating system and also the available computing resources are significantly different. Here, on top of pure task management, also complex data handling (e.g. streams, flash file systems, etc.), memory management and often even a graphical user interface are contained in the OS.

The classic domain of an automotive OS covers the core features of scheduling and synchronization only. In the AUTOSAR architecture the additional features discussed above are outside the scope of the OS.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 核 Operating 系统需求
*原文标题：Core Operating System requirements*

The OS shall provide an API that is backward compatible to the API of OSEK OS
⌈
| Description: | The OS shall provide an API that is backward compatible to the API of OSEK OS . Valid requirements shall be integrated as an extension of the functionality provided by OSEK OS. |
|---|---|
| Rationale: | Guarantee migration progress |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Existing driver software can be reused as its interface to the OS is not changed. |
| Supporting Material: | , see |

⌋

 The OS shall provide partitions which allow for fault isolation capabilities
⌈
| Description: | The OS shall provide partitions (Fault Containment Regions) which allow for fault isolation capabilities. |
|---|---|
| Rationale: | AUTOSAR permits mutliple logical applications to co-exist on the same processor. The existing specification of OSEK OS  is not aware of multiple logical applications residing on a single processor. There is therefore no facility for the containment of faults. A fault in one application could propagate to another application resident on the same processor. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Statically Defined 调度
*原文标题：Statically Defined Scheduling*

### 15. 功能概述
*原文标题：Functional Overview*

In many applications it is necessary to statically define the activation of a set of tasks related to each other. This can be for guaranteeing data consistency in data-flow based designs, synchronizing with a time-triggered network, guaranteeing correct run-time phasing, etc.

A time-triggered operating system is often proposed as a solution to this problem. However, time is simply an event so any event triggered OS, including OSEK OS , can implement a scheduler for statically scheduled real-time software in automotive electronic control units.

The requirements for schedules tables provide an OSEK OS object that can be manipulated in the same way as an OSEKtime dispatcher table.

### 16. 需求
*原文标题：Requirements*

The Operating System shall provide statically configurable schedule tables based on time tables as an optional service
⌈
| Description: | The Operating System shall provide statically configurable schedule tables based on time tables as an optional service. |
|---|---|
| Rationale: | Requirement of Standard Core users. Table based schedules are more efficient and easier to understand than tasks activated by OSEK alarm services. |

Adding a table-based scheduling mechanism approach as an extension to OSEK OS  provides users with the ability to construct an OSEKtime-like dispatcher table without needing to introduce the unnecessary restrictions of the stack-based scheduling policy or an additional OS specification.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Release a number of tasks synchronously with a statically defined inter-arrival time. |
| Supporting Material: | - |

⌋

 The Operating System shall provide a mechanism which allows switching between different schedule tables
⌈
| Description: | The Operating System shall provide a mechanism which allows switching between different schedule tables. |
|---|---|
| Rationale: | For different application states (e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Monitoring Facilities

### 18. 功能概述
*原文标题：Functional Overview*

A monitoring function detects an error at an appropriate stage in execution and not the instant that the error occurs. Consequently, any monitoring function is the detection of a failure at runtime rather than the prevention of a fault.

### 19. 需求
*原文标题：Requirements*

The operating system shall be able to monitor stack usage and check for a stack overflow on a per executable object basis
⌈
| Description: | The operating system shall be able to monitor stack usage and check for a stack overflow on a per executable object basis (task/ISR). |
|---|---|
| Rationale: | On some hardware it will not be possible to implement any sophisticated memory protection. Stack monitoring provides an alternative (but less secure) solution where some protection is deemed better than none. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | If a system where an application could overflow its stack is implemented on hardware that cannot support true memory protection, stack monitoring is a useful alternative. |
| Supporting Material: | - |

⌋

### 20. Protection Facilities

### 21. 功能概述
*原文标题：Functional Overview*

The AUTOSAR concept requires multiply-sourced OS-Applications to co-exist on the same processor. To prevent unexpected interaction between these OS-Applications it is necessary to provide mechanisms that protect them from one another. There are two major use-cases:

# For a safety-critical system, the development of a safety-case is made much easier if individual OS-Application safety cases can be integrated into an overall safety case. This is only feasible if it can be demonstrated that at least a fault in one OS-Application cannot propagate beyond its own boundary and cause a fault in another, unrelated, OS-Application.
# Suppliers can only be expected to take responsibility (and some liability) for their software components and/or basic software modules if they can be assured that their software cannot be incorrectly blamed for a processor-wide failure.

Both of these use-cases can be satisfied by the addition of protection mechanisms to OSEK OS . The following sections outline the areas of protection.

### 22. 存储 Protection 需求
*原文标题：Memory Protection requirements*

The operating system shall prevent an OS-Application from modifying the memory of other OS-Applications
⌈
| Description: | The operating system shall provide the ability of partitioning OS-Applications with respect to memory and prevent an OS-Application from modifying the memory of other OS-Applications. |
|---|---|
| Rationale: | Where multiple OS-Applications (of different software integrity) are resident on the same processor, their memory will be globally writable by any code. This means that the data of one OS-Application could be corrupted by another unrelated OS-Application (i.e. there is fault propagation between OS-Applications). For example a task of an OS-Application may overflow its stack, causing static data of an unrelated OS-Application to be corrupted, causing it to fail. |

To permit reasoning about adequate independence between the functions of different integrity levels, it is essential that this is prevented at runtime.

Note that  is different: It only detects fault rather than preventing a memory access error from generating a fault.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 时序 Protection 需求
*原文标题：Timing Protection requirements*

Timing Fault Detection and Prevention of Propagation
⌈
| Description: | The OS shall provide a mechanism to detect timing faults in OS-Applications and prevent propagation to a different OS-Application resident on the same processor to ensure freedom from interference. |
|---|---|

Additional information: A timing fault is defined as:

* exceeding a specified execution time
* exceeding a specified arrival rate
| Rationale: | When these parameters are specified for every task/Category 2 ISR in the system it is possible to determine whether or not each task/ Category 2 ISR always meets its deadline. |
|---|---|

Timing correctness on an ECU running any fixed-priority pre-emptive OS, including OSEK OS , can only be guaranteed using schedulability analysis. This uses information about the tasks and interrupts (how often they run, how long they run for, which resources they access, how long they hold them for) and then calculates that the system will meet its real-time performance deadlines.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 服务 Protection 需求
*原文标题：Service Protection requirements*

The OS must preserve both its own integrity and the integrity of the OS-Applications that it schedules at runtime.

 The operating system shall prevent the corruption of the OS by any call of a system service
⌈
| Description: | The operating system shall prevent the corruption of the OS by any call of a system service. |
|---|---|
| Rationale: | If it was possible to place the OS into an unknown state, or corrupt OS data structures at runtime then this would damage every OS-Application resident on the same processor. This means that either: |

* every OS service call must have defined behavior in all cases; or
* the OS must not allow service calls to be made from contexts that would potentially result in the OS being placed into an undefined state.

This increases the integrity of the OS itself.
Applies To:
| Dependencies: | In case the current specification of OSEK OS allows configurations which do not protect the OS the AUTOSAR configuration has to make sure that these configurations can not be selected. |
|---|---|
| Use Case: | Avoid undefined behavior from e.g. calling services from wrong context. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Protection 错误
*原文标题：Protection Errors*

The OS must be able to identify when an error that violates the protection schemes has occurred and must also provide facilities through which action can be taken to correct the fault. However, it is not the task of the OS to define the error handling scheme.

 The OS shall be capable of notifying the occurrence of a protection error at runtime
⌈
| Description: | The OS shall be capable of notifying the occurrence of a protection error at runtime. |
|---|---|

A protection error is any memory access violation, timing fault, unauthorized call to OS service or software trap (for example division by zero, illegal instruction).
| Rationale: | If protection errors are notified at runtime this provides scope to potentially correct or handle the error according to a predefined fault handling strategy. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The application needs to provide some kind of runtime fault tolerance that needs to take action on the type and/or number of errors that occur to improve availability at runtime. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Timer 服务
*原文标题：Timer Services*

### 27. 功能概述
*原文标题：Functional Overview*

Timer Services provide software timers for use in application and basic software.

The core of a timing mechanism is already provided by the counters and alarms in OSEK OS . Introducing an almost identical mechanism, in the form of Timer Services, is therefore unnecessary.

However, to provide general purpose software timing a few supplementary features need to be added to AUTOSAR OS. These are described in  and .

### 28. 功能性需求
*原文标题：Functional Requirements*

The OS shall provide a standard interface to tick a software counter
⌈
| Description: | The OS shall provide a standard interface to tick a software counter. |
|---|---|
| Rationale: | OSEK OS  does not define the interface between counters and alarms. This creates a problem when porting applications between different vendors' implementations. Defining this interface in AUTOSAR OS removes this portability problem. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The OS shall provide a mechanism to cascade multiple software counters from a single hardware counter.
⌈
| Description: | The OS shall provide a mechanism to cascade multiple software counters from a single hardware counter. |
|---|---|
| Rationale: | If counters with different resolutions are required it may not be possible (e.g. because of limited hardware timers) or desirable (e.g. because of interrupt interference) to use multiple hardware timer sources. In many cases a lower resolution software counter can be driven from a higher resolution counter by ticking the lower resolution counter from the higher resolution counter. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Scalability

### 30. 功能概述
*原文标题：Functional Overview*

For a particular application, the operating system can be configured such that it only comprises the services required for this application. Thus the resource requirements of the operating system are as small as possible.

Scalability for the core OS is provided by OSEK OS's  conformance classes. Scalability with regard to AUTOSAR OS features is defined here.

### 31. 功能性需求
*原文标题：Functional Requirements*

The OS implementation shall offer scalability which is configurable by a generation tool
⌈
| Description: | The OS shall provide the following configurations with at least the specified features (additional features may be included): |
|---|---|

Class1 : OSEK OS  + Planned Schedules

Class2 : Class1 + Timing Protection

Class3 : Class1 + Memory Protection

Class4 : Class1+ Class2 + Class3
| Rationale: | Hardware support is required for Classes 3 and 4. Mandating this functionality would prevent AUTOSAR OS from being implemented on many commonly used microcontrollers. |
|---|---|

Implementations may choose different strategies for implementation, with a corresponding increase in performance, if some features are not required.
Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 32. Application 错误处理
*原文标题：Application Error Handling*

### 33. 功能概述
*原文标题：Functional Overview*

Some errors affecting an application may not lead to protection violations that are detectable by the OS but nevertheless result in an application entering a state where it cannot itself recover and continue executing. The detection of such errors is the responsibility of the application itself, but recovery from such errors requires interaction with the threads of control managed by the OS. The OS therefore needs to provide a mechanism upon which applications can build internal recovery mechanisms.

The core OSEK OS  provides some support: tasks can detect internal errors and terminate themselves; the system can use the alarm mechanism to program timeouts, implement threshold-based error detection; internal errors can be detected and the system can be shut down etc. However, the core OS does not provide the means to implement error recovery for logical applications that are defined by OS-Applications (see ).

This section introduces requirements to provide a framework of application-level and system-level control of OS-Applications.

### 34. 功能性需求
*原文标题：Functional Requirements*

The OS shall provide a mechanism to terminate OS-Application
⌈
| Description: | The OS shall provide a mechanism by which an OS-Application can be terminated as a single unit and all resources held by the OS-Application and managed by the OS are released. |
|---|---|

Termination shall prevent any task owned by the OS-Application from running and any interrupt handled by an ISR owned by the OS-Application from occuring.
| Rationale: | Error handling for AUTOSAR software components requires that the OS can terminate an OS-Application. |
|---|---|

When an application comprises multiple tasks/ISRs it is not possible in the core OS to stop the application atomically unless the OS itself is shut down. Shutdown is not practical when there are other OS-Applications for which termination is not required.

Therefore, the OS must provide a mechanism to terminate an OS-Application that does not affect other OS-Applications.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Error reaction in an OS-Application in response to the detection of an internal error. |
| Supporting Material: | - |

⌋

### 35. 通用 Multi-Core issues
*原文标题：General Multi-Core issues*

### 36. 概述
*原文标题：Overview*

The requirements in this section are very general. They define the spirit of the Multi-Core (MC) capability that will be supported by the AUTOSAR environment. From an architectural point of view, Multi-Core hardware can be managed in various different ways. On the one extreme, cores might be understood as almost separate ECU, on the other extreme, they can be presented to the user almost like a Single-Core (SC) system with the capability of true parallelism.

In automotive systems the requirements on the MC support is very domain specific. Efficient scheduling, low resource consumption and short response time are essential.

The requirements are designed in a way that the introduction of Multi-Core does not change the overall AUTOSAR philosophy.

The MC concept allows to handle several cores almost like a SC system, but gives freedom to use cores outside this concept, e.g. as a dedicated I/O controller.

### 37. 功能性需求
*原文标题：Functional Requirements*

The OS shall be able to manage multiple closely coupled CPU Cores
⌈
| Description: | The OS shall be able to manage multiple closely coupled CPU Cores. |
|---|---|

That does not imply that all cores on a \muC are controlled by the OS.
| Rationale: | Reasons to provide a solution with one OS that controls multiple cores are: |
|---|---|

* Enables efficient parallelization of functions.
* Upward and downward scalability in number of cores.
* Allows the restriction of the AUTOSAR Multi-Core extensions to a subset of available cores to run other OS instances on uncontrolled cores.
Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | * Applications (e.g. signal processing applications) with the need to achieve high performance computing via algorithm parallelization. |

* Multi core systems with common BSW.
* Applications that grow beyond the boundary of the given number of cores (e.g. one) can easily utilize a higher number of cores (upward scalability).
* Applications designed for multiple cores can be stripped down (e.g. for low cost systems) to fewer (e.g. one) cores (downward scalability).
* Migration of engine control systems to Multi-Core.
* Integration of formerly separated applications into one Multi-Core ECU.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Additional 描述 of the term "One AUTOSAR 系统 controlling 多核"
*原文标题：Additional description of the term "One AUTOSAR system controlling multiple cores"*

When talking about an AUTOSAR system that is controlling multiple cores as in  several implications are made:

* The system shall be aware of the existence of multiple cores.
* The system shall be responsible for the scheduling of tasks on multiple cores.
* Parts of the system code shall be able to run concurrently (e.g. by using reentrant code).
* All BSW IDs (e.g. IDs of tasks, events, alarms, ...) shall be unique across cores.
* It shall be allowed to access shared objects (e.g. data, peripheral units, ...) from any core, unless restricted by protection mechanisms.

### 39. Additional 描述 of the term "unbounded blocking"
*原文标题：Additional description of the term "unbounded blocking"*

Blocking is a situation where a high priority runtime object can not execute because a low priority runtime object prevents this (e.g. by occupying a needed resource).

Unintentional blocking might be caused by priority inversion.

The term unbounded blocking means that the potential blocking duration is not limited and therefore the required real-time behaviour cannot be guaranteed.

### 40. Assignment of runtime objects to 核
*原文标题：Assignment of runtime objects to cores*

### 41. 概述
*原文标题：Overview*

One major question when defining a Multi-Core system is whether runtime objects (tasks and ISR) can change between cores dynamically or not.

The ability to dynamically assign runtime objects to different cores would have a massive impact on all efficiency aspects (code size / data size / speed / response time / real time capability) of a system.

It is conceivable to bind OsApplications to cores or to define the core binding on the level of TASKS and ISRs. To minimize the impact and complexity of the Multi-Core support within AUTOSAR it was decided to define the core binding the level of OsApplications.

This section defines requirements, that state core binding as the way to handle runtime objects within a MC AUTOSAR environment.

### 42. 需求
*原文标题：Requirements*

OsApplications and as a result TASKS and OsISRs shall be assigned statically to cores
⌈
| Description: | OsApplications and as a result TASKS and OsISRs shall be assigned statically to cores. |
|---|---|
| Rationale: | * If TASKS or OsISRs can change the core during runtime, the real-time capability might be violated. |

* If tasks of a single OsApplication can be bound to different cores the shutdown of an OsApplication becomes hard. Valid mechanisms would be required.
* To fulfill requirement  and  it shall be possible to access EVENTS and TASKS of different OsApplications.
* In case of Multi-Core OSApplications shall be used irrespective of the scalability class. (see `AUTOSAR_SWS_OS`).
Applies To:
| Dependencies: | OS specification; , , |
|---|---|
| Use Case: | - |
| Supporting Material: | AUTOSAR_SWS_OS |

⌋

### 43. 启动 of Multi-Core systems
*原文标题：Startup of Multi-Core systems*

### 44. 概述
*原文标题：Overview*

This section contains some high-level requirements on the start-up.

Depending on the used microcontroller, the start-up or reset behavior of the microcontrollers can differ. The most common behavior after a reset is as follows:

* Only a so-called master core starts to execute while all other cores (slave cores) remain in halt state. The slave cores need to be started by the master core.
* A different approach is conceivable with all cores starting to execute concurrently after a reset. A master core does not exist in this case.

The wakeup mechanism and bootstrap requirements vary across different microcontrollers and microcontroller derivates.

The progress in the start-up code on the different cores is not reproducible; this is because the length of time for load and store operations depends on bus arbitration and other very timing sensitive effects of the HW. Therefore the boot code must be designed in a way that it does not rely on the knowledge of the boot progress on other core(s). It is required to synchronize the different cores during start-up.

### 其余 33 章（内容从略，见纯文本全文）

45. 需求
46. 关机 of Multi-Core systems
47. 概述
48. 需求
49. 配置 of Multi-Core systems
50. 概述
51. 需求
52. 服务 in Multi-Core systems
53. 概述
54. 需求
55. Debugging and 追踪
56. ARTI 支持
57. 追踪支持
58. 需求追踪
59. References
60. 附录
61. Change history of AUTOSAR traceable items
62. Traceable item history of this document according to AUTOSAR Release R25-11
63. Added 需求 in R25-11
64. Changed 需求 in R25-11
65. Deleted 需求 in R25-11
66. Traceable item history of this document according to AUTOSAR Release R24-11
67. Added 需求 in R24-11
68. Changed 需求 in R24-11
69. Deleted 需求 in R24-11
70. Traceable item history of this document according to AUTOSAR Release R23-11
71. Added 需求 in R23-11
72. Changed 需求 in R23-11
73. Deleted 需求 in R23-11
74. Traceable item history of this document according to AUTOSAR Release R22-11
75. Added 需求 in R22-11
76. Changed 需求 in R22-11
77. Deleted 需求 in R22-11
