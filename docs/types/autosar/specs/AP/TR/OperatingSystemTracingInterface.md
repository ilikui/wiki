# Technical Report on Operating System Tracing Interface (`OperatingSystemTracingInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 1083 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_TR_OperatingSystemTracingInterface_1083\AUTOSAR_AP_TR_OperatingSystemTracingInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_TR_OperatingSystemTracingInterface_1083\AUTOSAR_AP_TR_OperatingSystemTracingInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_TR_OperatingSystemTracingInterface_1083\zzgen\AP_TR_OperatingSystemTracingInterface.complete.txt`

## 文档简介

This technical report provides additional information to the Operating System Tracing Interface of the AUTOSAR Standard.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This technical report provides additional information to the Operating System Tracing Interface of the AUTOSAR Standard.

### 2. 目标
*原文标题：Objectives*

The goal is to provide an API that can be used at a very low level to trace tasks and processes. It is at a very low level to have no or minimal impact on the runtime behavior of the application. The recorded information is used to determine timing information of the software.

Based on the timing information, the timing requirements, such as CPU time, deadlines, accuracy of periodicity can be analyzed. In addition, time consumption can be broken down to specific parts of the application, and timing dependencies and locks can be shown.

### 3. 范围
*原文标题：Scope*

This report is related to the operating system of the adaptive platform. The API is used by stack and trace tool vendors. It is not intended to be used by an application engineer.

The API is intended to be used at driver level of the operating system. Processes and tasks cannot be traced at application level or middleware level because this would influence the runtime behavior of the system.

### 4. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| Adaptive Application | see  AUTOSAR Glossary |
| ARTI | see  AUTOSAR Glossary |
| AUTOSAR Adaptive Platform | see  AUTOSAR Glossary |
| Executable | see  AUTOSAR Glossary |
| Execution Management | The element of the AUTOSAR Adaptive Platform responsible for the ordered startup and shutdown of the AUTOSAR Adaptive Platform and Adaptive Applications. |
| Execution Manifest | Manifest file to configure execution of an Adaptive Application. An Execution Manifest is created at integration time and deployed onto a Machine together with the Executable to which it is attached. It supports the integration of the Executable code and describes the configuration properties (startup parameters, resource group assignment etc.) of each Process, i.e. started instance of that Executable. |
| Machine | see  AUTOSAR Glossary |
| Manifest | see  AUTOSAR Glossary |
| Modelled Process | A Modelled Process is an instance of an Executable to be executed on a Machine and has a 1:1 association with the ARXML/Meta-Model element Process. This document also uses the term process (without the "modelled" prefix) to refer to the OS concept of a running process. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 相关文档
*原文标题：Related Documentation*

### 7. 功能规范
*原文标题：Functional Specification*

### 8. ARTI 追踪接口
*原文标题：ARTI Tracing Interface*

### 9. OS/ARTI Adapter

The so-called "OS/ARTI Adapter" provides the trace points at OS level. It is used to understand, verify and visualize the timing behavior of the OS. The ARTI trace hooks themselves form a standardized interface that is specified by the API below.

 illustrates the Layout of the OS/ARTI driver containing the OS/ARTI Adapter.

The implementation of the ARTI hooks themselves depends on the tracing mechanism and shall be provided by the tracing tool vendor.

The ARTI hook interface is designed to be usable as a C macro expansion or as a C function. If no tracing mechanism is available, the ARTI hooks may be expanded to nothing (in case of a macro) or call an empty function.

The ARTI interface follows the two-level approach of AUTOSAR, where a "task" is a schedulable unit (in OSes often called "thread"), and a "process" is a mandatory environment holding several tasks. An example system is shown in .

An ARTI interface carries some of these parameters:

* callingContext: type CallingContext represents the current interrupt handling.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Adapter 管理
*原文标题：Adapter Management*

The following interfaces are used for managing the OS/ARTI Adapter.

 ARTI Version Info
  Upstream requirements:
⌈
If ARTI is used then the OS/ARTI Adapter shall call ArtiVersionInfo when the OS/ARTI Adapter is started in the system.

* The parameter callingContext shall be set to the CallingContext which represents the current interrupt handling.
* The parameter versionInfoPtr shall be set to the ArtiVersionInfoType provided by the OS.

It is used to confirm the version of API between OS and ARTI-driver.
⌋

The OS/ARTI Adapter shall call this function just before ArtiInit is called. It is used to assure the compatibility of the OS and the ARTI-driver whereby the apiVersion of the OS and the returned apiVersion of the ARTI-driver must be equal for further using these hooks. When this function is called, versionInfoPtr is filled with the OS related values. The versionInfoPtr->apiVersion is filled by the OS with the highest supported version of the OS. The driver returns a pointer to a filled ArtiVersionInfoType with the values of the ARTI-driver. The returned apiVersion should be adapted to the version of the OS if possible.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Task 接口
*原文标题：Task Interface*

The term Task applies to the object as defined in the AUTOSAR Glossary: "A Task is the smallest schedulable unit managed by the OS. The OS decides when which task can run on the CPU of the ECU."

The trace events of a task shall follow the state machine in .

The minimal state machine for a single task has the states:

* The task is ready and can be scheduled for running.
* The task is being executed.
* The task is waiting for an event, semaphore, a different thread or different OS object. The task can not be scheduled for running.

For an OS that does not support or differentiate between Ready state and Waiting state, the ARTI trace hooks for tracing switches between Ready and Running shall be mandatory, and ARTI trace hooks for switching to Waiting state are optional.

Hooks to be called on events related to tasks:

 ARTI Task Switch Notification
  Upstream requirements:
⌈
If ARTI is enabled then the OS/ARTI Adapter shall call ArtiTaskSwitch whenever an OS task enters the running state.

* The parameter callingContext shall be set to the CallingContext which represents the current interrupt handling.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Process 接口
*原文标题：Process Interface*

The term Process applies to the object as defined in the AUTOSAR Glossary: "An executable unit managed by an operating system scheduler that has its own name space and resources (including memory) protected against the use by other processes."

Hooks to be called on events related to processes:

 ARTI Process Switch Notification
  Upstream requirements:
⌈
If ARTI is enabled then the OS/ARTI Adapter should call ArtiProcessSwitch whenever an OS process switch happens.

* The parameter callingContext shall be set to the CallingContext which represents the current interrupt handling.
* The parameter coreId shall be set to the coreId the current process is scheduled on.
* The parameter nextId shall be set to the operating system specific process ID of the next process.
⌋

 ARTI Process Creation Notification
  Upstream requirements:
⌈
If ARTI is enabled then the OS/ARTI Adapter shall call ArtiProcessCreate whenever an OS process is created.

* The parameter callingContext shall be set to the CallingContext which represents the current interrupt handling.
* The parameter coreId shall be set to the coreId the process is scheduled on.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. API 规范
*原文标题：API Specification*

### 14. 类型定义
*原文标题：Type Definitions*

### 15. ArtiVersionInfoType

Definition of API class ArtiVersionInfoType
  Upstream requirements:
⌈
| Kind: | struct | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Forwarding header file: | #include "ara/log/log_fwd.h" | < |
| Symbol: | ArtiVersionInfoType | < |
| Syntax: | typedef struct {...} ArtiVersionInfoType; | < |
| Description: | Holds information about the ARTI version supported by the OS and the ARTI-driver. | < |

⌋

 Definition of API variable ArtiVersionInfoType::apiVersion
  Upstream requirements:
⌈
| Kind: | variable | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Symbol: | apiVersion | < |
| Type: | uint32_t | < |
| Syntax: | uint32_t apiVersion; | < |
| Description: | The version of the API. |  |

| As an input parameter, it specifies the requested version of the API. As an output parameter, it indicates the supported version of the ARTI-driver. Set to 0x01 for the current AUTOSAR release. | < |
|---|---|

⌋

 Definition of API variable ArtiVersionInfoType::buildVersion
  Upstream requirements:
⌈
| Kind: | variable | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Symbol: | buildVersion | < |
| Type: | uint32_t | < |
| Syntax: | uint32_t buildVersion; | < |
| Description: | The version of the driver. |  |

This is an informal parameter.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. CallingContext

Definition of API enum CallingContext
  Upstream requirements:
⌈
| Kind: | enumeration | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Forwarding header file: | #include "ara/log/log_fwd.h" | < |
| Symbol: | CallingContext | < |
| Underlying type: | -- | < |
| Syntax: | typedef enum {...} CallingContext; | < |
| Values: | kInterruptsDisabled= 0 | Indicates that the hook is called in a context where interrupts are disabled. |
| ^ | kInterruptsMayBeDisabled= 1 | Indicates that the called hook may disable interrupts. |
| ^ | kInterruptsMayNotBeDisabled= 2 | Indicates that the called hook cannot disable interrupts. |
| Description: | Specifies whether interrupts are disabled or can be disabled. | < |

⌋

### 17. Callback 通知
*原文标题：Callback Notifications*

This is a list of functions provided for other modules.

### 18. ArtiTaskSwitch

Definition of API function ArtiTaskSwitch
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiTaskSwitch (CallingContext callingContext, uint32_t coreId, uint32_t nextId); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | coreId | The ID of the core that switches the task. |
| ^ | nextId | The ID of the task that enters the running state. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Notifies the tracer about a task switch. |  |

| The OS/ARTI Adapter should call this hook when a task enters the running state. This implies that the previous task on this core, which was in the running state, enters the ready state (preemption). | < |
|---|---|

⌋

### 19. ArtiTaskWait

Definition of API function ArtiTaskWait
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiTaskWait (CallingContext callingContext, uint32_t coreId, uint32_t taskId); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | coreId | The ID of the core on which the task is running. |
| ^ | taskId | The ID of the task that is entering the wait state. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Notifies the tracer that a task is entering the wait state. |  |

| The OS/ARTI Adapter should call this hook when a task is entering the wait state. | < |
|---|---|

⌋

### 20. ArtiTaskRelease

Definition of API function ArtiTaskRelease
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiTaskRelease (CallingContext callingContext, uint32_t coreId, uint32_t taskId); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | coreId | The ID of the core on which the task is running. |
| ^ | taskId | The ID of the task that is leaving the wait state. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Notifies the tracer that a task is leaving the wait state and entering the ready state. |  |

| The OS/ARTI Adapter should call this hook when a task is leaving the wait state and entering the ready state. | < |
|---|---|

⌋

### 21. ArtiTaskPreempt

Definition of API function ArtiTaskPreempt
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiTaskPreempt (CallingContext callingContext, uint32_t coreId, uint32_t taskId); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | coreId | The ID of the core on which the task is running. |
| ^ | taskId | The ID of the task that is leaving the running state. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Notifies the tracer that a task is leaving the running state and entering the ready state. |  |

| The OS/ARTI Adapter should call this hook when a task is leaving the running state and entering the ready state. | < |
|---|---|

⌋

### 22. ArtiTaskExit

Definition of API function ArtiTaskExit
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiTaskExit (CallingContext callingContext, uint32_t coreId, uint32_t taskId); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | coreId | The ID of the core where the task is exiting. |
| ^ | taskId | The ID of the task that is exiting. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Notifies the tracer about a task exit. |  |

| The OS/ARTI Adapter should call this hook when a task is terminated. | < |
|---|---|

⌋

### 23. ArtiTaskCreate

Definition of API function ArtiTaskCreate
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiTaskCreate (CallingContext callingContext, uint32_t coreId, uint32_t processId, uint32_t taskId); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | coreId | The ID of the core that creates the task. |
| ^ | processId | The ID of the process creating the new task. |
| ^ | taskId | The ID of the task that is being created. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Notifies the tracer about the creation of a task. |  |

| The OS/ARTI Adapter should call this at the time when the OS creates a new task. | < |
|---|---|

⌋

### 24. ArtiTaskRename

Definition of API function ArtiTaskRename
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiTaskRename (CallingContext callingContext, uint32_t taskId, const char *taskName); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | taskId | The ID of the task that is being renamed. |
| ^ | taskName | The name that has to be assigned to the task. The string has to be null-terminated. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Provides a name for a task. |  |

This function allows users to identify a specific task by its name.

| The OS/ARTI Adapter should call this function to provide a task name for a taskId. | < |
|---|---|

⌋

### 25. ArtiTaskInfo

Definition of API function ArtiTaskInfo
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiTaskInfo (CallingContext callingContext, uint32_t taskId, uint32_t processId, const char *taskName); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | taskId | The ID of the task for which information is provided. |
| ^ | processId | The ID of the process that owns this task. |
| ^ | taskName | The name of the task. The string has to be null-terminated. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Provides information about an existing task. |  |

| This function provides information about the task name and parent process. The OS/ARTI Adapter should call this function for each existing task directly after calling ArtiInit(), or whenever tracing is started. This will build up the initial task list. | < |
|---|---|

⌋

### 26. ArtiProcessSwitch

Definition of API function ArtiProcessSwitch
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiProcessSwitch (CallingContext callingContext, uint32_t coreId, uint32_t nextId); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | coreId | The ID of the core that switches the process. |
| ^ | nextId | The ID of the process that gets the CPU resources. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Notifies the tracer about a process switch. |  |

This hook is called when the CPU resources are switched to another process. Usually, this information can be derived from a task switch.

| The OS/ARTI Adapter should call this hook when a process is switched. | < |
|---|---|

⌋

### 27. ArtiProcessCreate

Definition of API function ArtiProcessCreate
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiProcessCreate (CallingContext callingContext, uint32_t coreId, uint32_t processId, uint32_t parentId); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | coreId | The ID of the core that creates the process. |
| ^ | processId | The ID of the process that is being created. |
| ^ | parentId | Optional ID of the parent process. If parentId == processId, then parentId is not used. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Notifies the tracer about the creation of a process. |  |

| The OS/ARTI Adapter should call this at the time when the OS creates a new process. | < |
|---|---|

⌋

### 28. ArtiProcessDestroy

Definition of API function ArtiProcessDestroy
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiProcessDestroy (CallingContext callingContext, uint32_t coreId, uint32_t processId); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | coreId | The ID of the core that destroys the memory context. |
| ^ | processId | The ID of the process that is to be destroyed. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Notifies the tracer about the destruction of a process. |  |

| The OS/ARTI Adapter should call this hook when the process is destroyed. | < |
|---|---|

⌋

### 29. ArtiProcessRename

Definition of API function ArtiProcessRename
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiProcessRename (CallingContext callingContext, uint32_t processId, const char *processName); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | processId | The ID of the process that is being renamed. |
| ^ | processName | The name that has to be assigned to the process. The string has to be null-terminated. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Provides a name for a process. |  |

This name is needed to identify a certain process by the user.

| The OS/ARTI Adapter should call this function to provide a process name. | < |
|---|---|

⌋

### 30. ArtiProcessInfo

Definition of API function ArtiProcessInfo
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiProcessInfo (CallingContext callingContext, uint32_t processId, uint32_t parentId, const char *processName); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | processId | The ID of the process for which information is provided. |
| ^ | parentId | The ID of the parent process. |
| ^ | processName | The name of the process. The string has to be null-terminated. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Provides information about an existing process. |  |

| This function provides information about the process name and parent process. The OS/ARTI Adapter should call this function for each existing process directly after calling ArtiInit(), or whenever tracing is started. This will build up the initial process list. | < |
|---|---|

⌋

### 31. ArtiVersionInfo

Definition of API function ArtiVersionInfo
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | ArtiVersionInfoType const *const ArtiVersionInfo (CallingContext callingContext, ArtiVersionInfoType const *const versionInfoPtr); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| ^ | versionInfoPtr | Constant pointer to a constant ArtiVersionInfoType holding the values of the operating system. |
| Return value: | ArtiVersionInfoType const *const | Constant pointer to a constant ArtiVersionInfoType holding the the values of the ARTI-driver. |
| Thread Safety: | reentrant | < |
| Description: | Assures compatibility between the OS and the ARTI-driver. |  |

The OS/ARTI Adapter should call this function just before ArtiInit is called.

It is used to assure the compatibility of the OS and the ARTI-driver. The apiVersion of the OS and the returned apiVersion of the ARTI-driver must be equal for further using these hooks.

When this function is called, versionInfoPtr is filled with the OS-related values. The versionInfoPtr->apiVersion is filled by the OS with the highest supported version of the OS.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. ArtiInit

Definition of API function ArtiInit
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiInit (CallingContext callingContext); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Initializes the OS/ARTI Adapter. |  |

| The OS/ARTI Adapter should call this function when it is started in the system. It may be used to initialize the trace driver implementing the adapter. | < |
|---|---|

⌋

### 33. ArtiCleanup

Definition of API function ArtiCleanup
  Upstream requirements:
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "ara/log/osarti.h" | < |
| Syntax: | void ArtiCleanup (CallingContext callingContext); | < |
| Parameters (in): | callingContext | Specifies whether interrupts are disabled or can be disabled. |
| Return value: | None | < |
| Thread Safety: | reentrant | < |
| Description: | Cleans up the OS/ARTI Adapter. |  |

| The OS/ARTI Adapter should call this function when it is stopped. It may be used to free local memory or flush pending messages. | < |
|---|---|

⌋

### 34. 附录
*原文标题：Appendix*

### 35. Change History

### 36. Change History of this document according to AUTOSAR Release R25-11

### 37. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 38. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 39. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 40. Change History of this document according to AUTOSAR Release R24-11

### 41. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 42. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

| Number | Heading |
|---|---|
| ARTI Version Info |  |
| ARTI Initialisation |  |
| ARTI Cleanup |  |
| ARTI Task Switch Notification |  |
| ARTI Task Wait Notification |  |
| ARTI Task Release Notification |  |
| ARTI Task Preempt Notification |  |
| ARTI Task Exit Notification |  |
| ARTI Task Creation Notification |  |
| ARTI Task Renaming Notification |  |
| ARTI Task Information Notification |  |
| ARTI Process Switch Notification |  |
| ARTI Process Creation Notification |  |
| ARTI Process Destroy Notification |  |
| ARTI Process Renaming Notification |  |
| ARTI Process Information Notification |  |
| Definition of API function ArtiInit |  |
| Definition of API function ArtiCleanup |  |
| Definition of API function ArtiTaskSwitch |  |
| Definition of API function ArtiTaskWait |  |
| Definition of API function ArtiTaskRelease |  |
| Definition of API function ArtiTaskPreempt |  |
| Definition of API function ArtiTaskExit |  |
| Definition of API function ArtiTaskCreate |  |
| Definition of API function ArtiTaskRename |  |
| Definition of API function ArtiTaskInfo |  |
| Definition of API function ArtiProcessSwitch |  |
| Definition of API function ArtiProcessCreate |  |
| Definition of API function ArtiProcessDestroy |  |
| Definition of API function ArtiProcessRename |  |
| Definition of API function Ar |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 44. Change History of this document according to AUTOSAR Release R23-11

### 45. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

| Number | Heading |
|---|---|
| ARTI Version Info |  |
| ARTI Initialisation |  |
| ARTI Cleanup |  |
| ARTI Task Switch Notification |  |
| ARTI Task Wait Notification |  |
| ARTI Task Release Notification |  |
| ARTI Task Preempt Notification |  |
| ARTI Task Exit Notification |  |
| ARTI Task Creation Notification |  |
| ARTI Task Renaming Notification |  |
| ARTI Task Information Notification |  |
| ARTI Process Switch Notification |  |
| ARTI Process Creation Notification |  |
| ARTI Process Destroy Notification |  |
| ARTI Process Renaming Notification |  |
| ARTI Process Information Notification |  |
| Definition of API function ArtiInit |  |
| Definition of API function ArtiCleanup |  |
| Definition of API function ArtiTaskSwitch |  |
| Definition of API function ArtiTaskWait |  |
| Definition of API function ArtiTaskRelease |  |
| Definition of API function ArtiTaskPreempt |  |
| Definition of API function ArtiTaskExit |  |
| Definition of API function ArtiTaskCreate |  |
| Definition of API function ArtiTaskRename |  |
| Definition of API function ArtiTaskInfo |  |
| Definition of API function ArtiProcessSwitch |  |
| Definition of API function ArtiProcessCreate |  |
| Definition of API function ArtiProcessDestroy |  |
| Definition of API function ArtiProcessRename |  |
| Definition of API function Ar |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

none

### 47. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none
