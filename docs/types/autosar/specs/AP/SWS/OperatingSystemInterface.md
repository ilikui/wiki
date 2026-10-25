# Specification of Operating System Interface (`OperatingSystemInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 719 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_OperatingSystemInterface_719\AUTOSAR_AP_SWS_OperatingSystemInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_OperatingSystemInterface_719\AUTOSAR_AP_SWS_OperatingSystemInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_OperatingSystemInterface_719\zzgen\AP_SWS_OperatingSystemInterface.complete.txt`

## 文档简介

This document is the software specification of the Operating System Interface within the AUTOSAR Adaptive Platform.

AUTOSAR Adaptive Platform does not specify a new Operating System for highly performant microcontrollers. Rather, it defines an execution context and programming interface for use by Adaptive Applications.

The Operating System Interface provides both C and C++ interfaces. In case of a C program, the application's main source code business logic include C function calls defined in the POSIX standard, namely PSE51 defined in IEEE1003.13 . During compilation, the compiler determines which C library from the platform's Operating System provides these C functions and the application's Executable must be linked against at runtime. In case of a C++ program, application software component's source code includes function calls defined in the C++ Standard and its Standard C++ Library.

## 模块依赖

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Operating System Interface to other Functional Clusters. Section  lists the interfaces required by Operating System Interface.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This document is the software specification of the Operating System Interface within the AUTOSAR Adaptive Platform.

AUTOSAR Adaptive Platform does not specify a new Operating System for highly performant microcontrollers. Rather, it defines an execution context and programming interface for use by Adaptive Applications.

The Operating System Interface provides both C and C++ interfaces. In case of a C program, the application's main source code business logic include C function calls defined in the POSIX standard, namely PSE51 defined in IEEE1003.13 . During compilation, the compiler determines which C library from the platform's Operating System provides these C functions and the application's Executable must be linked against at runtime. In case of a C++ program, application software component's source code includes function calls defined in the C++ Standard and its Standard C++ Library.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The following technical terms used in this document are defined in the corresponding document mentioned in the table below.

| Term | Description |
|---|---|
| Operating System | see  Requirements on Operating System Interface |
| Operating System Interface | see  Requirements on Operating System Interface |
| Execution Management | see  Requirements on Execution Management |
| Adaptive Application | see  AUTOSAR Glossary |
| AUTOSAR Adaptive Platform | see  AUTOSAR Glossary |
| Executable | see  AUTOSAR Glossary |
| Foundation | see  AUTOSAR Glossary |
| Functional Cluster | see  AUTOSAR Glossary |
| Machine | see  AUTOSAR Glossary |
| Process | see  AUTOSAR Glossary |
| Task | In case of POSIX a Task is called thread or pthread. see  AUTOSAR Glossary |
| ARTI | see  AUTOSAR Glossary |

### 3. 相关文档
*原文标题：Related Documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 5. Further applicable 规范
*原文标题：Further applicable specification*

None.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 已知限制
*原文标题：Known Limitations*

There are no known limitations for this specification.

### 8. Dependencies to 功能性 Clusters
*原文标题：Dependencies to Functional Clusters*

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Operating System Interface to other Functional Clusters. Section  lists the interfaces required by Operating System Interface.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

### 9. Provided 接口
*原文标题：Provided Interfaces*

Figure  shows the interfaces provided by Operating System Interface to other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of interfaces provided to other Functional Clusters within the AUTOSAR Adaptive Platform.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| OperatingSystemInterface | Communication Management | Communication Management should use this interface to create and control Threads used by the implementation. |

### 10. Required 接口
*原文标题：Required Interfaces*

Figure  shows the interfaces required by Operating System Interface.  provides a complete list of required interfaces from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| No required interfaces | < | < |

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following table references the features specified in  and links to the fulfillments of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| Source Code Portability Support |  |  |
| Compatibility with the ISO 14882 C++ standard |  |  |
| POSIX PSE51 Compliance |  |  |
| The Operating System Interface shall support C++. |  |  |
| No description |  |  |

### 12. 功能规范
*原文标题：Functional specification*

### 13. Reporting

### 14. 安全事件
*原文标题：Security Events*

This functional cluster does not define any security events.

### 15. Log Messages

This section lists all non-verbose log messages (i.e., modelled DLT messages) defined by this functional cluster.

### 16. ARTI 追踪接口
*原文标题：ARTI Tracing Interface*

The ARTI Tracing Interface is used to understand, verify and visualize the timing behavior of the OS. It is used to collect information about Tasks and Processes of the OS.

The ARTI interface follows the two-level approach of AUTOSAR, where a "Task" is a schedulable unit (in POSIX and C++ called "thread"), and a "Process" is a mandatory environment holding several Tasks. A system may look like this:

The OS provides the information of Processes and Tasks in different ways. It can implement trace buffers that contain kernel internal information, it could provide propritary hooks within the kernel with internal information or it could provide modeled messages out of the box.

These different variants of the OS specific information need to be sent using modeled messages to the ara::log API. This can be implemented in different ways.

For example, for Operating Systems that are using trace buffers with internal information, there could be a separate application. Here such application or daemon is called "OS/ara::log Adapter". The  shows how it integrates in the AUTOSAR framework.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Task 接口
*原文标题：Task Interface*

The term Task applies to the object as defined in the AUTOSAR Glossary: "A Task is the smallest schedulable unit managed by the OS. The OS decides when which task can run on the CPU of the ECU."

The trace events of a Task shall follow the state machine in Figure .

The minimal state machine for a single Task has the states:

* The Task is ready and can be scheduled for running
* The Task is being executed
* The Task is waiting for an event, semaphore, a different thread or different OS object. The Task can not be scheduled for running.

For an OS that does not support or differentiate between Ready state and Waiting state, the ARTI trace events for tracing switches between Ready and Running shall be mandatory, and ARTI trace events for switching to Waiting state are optional.

The trace points that are related to Tasks are:

 Log Task Schedule Notification
  Upstream requirements:
⌈
If tracing is desired then whenever an OS Task is scheduled and is entering the running state, the Operating System Interface shall log a modeled message of type OsTaskSchedule.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Process 接口
*原文标题：Process Interface*

The term Process applies to the object as defined in the AUTOSAR Glossary: "An Executable unit managed by an Operating System scheduler that has its own name space and resources (including memory) protected against the use by other Processes."

The trace points that are related to Processes are:

 Log Process Switch Notification
  Upstream requirements:
⌈
If tracing is desired then whenever an OS Process is switched, the Operating System Interface shall log a modeled message of type OsProcessSwitch.
⌋

 Log Process Creation Notification
  Upstream requirements:
⌈
If tracing is desired then whenever an OS Process is created, the Operating System Interface shall log a modeled message of type OsProcessCreate.
⌋

 Log Process Ending Notification
  Upstream requirements:
⌈
If tracing is desired then whenever an OS Process ends, the Operating System Interface shall log a modeled message of type OsProcessDestroy.
⌋

 Log Process Renaming Notification
  Upstream requirements:
⌈
If tracing is desired then whenever an OS Process is renamed, the Operating System Interface shall log a modeled message of type OsProcessRename.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Log and Trace Messages

Log Message OsProcessCreate
  Status: DRAFT
  Upstream requirements:
⌈
| Dlt-Message | OsProcessCreate | < | < |
|---|---|---|---|
| Description | Notify the tracer about the creation of a process | < | < |
| MessageId | 0x8000e000 | < | < |
| MessageTypeInfo | DLT_TRACE_STATE | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| timeStamp | Time when the event occurred | uint64 | NoUnit |
| coreId | Id of the core | uint32 | NoUnit |
| posixProcessId | OS specific PID which has been being created | uint32 | NoUnit |
| posixParentProcessId | OS specific PID which has been assigned to the parent process | uint32 | NoUnit |

⌋

 Log Message OsProcessDestroy
  Status: DRAFT
  Upstream requirements:
⌈
| Dlt-Message | OsProcessDestroy | < | < |
|---|---|---|---|
| Description | Notify the tracer about the destruction of a process | < | < |
| MessageId | 0x8000e001 | < | < |
| MessageTypeInfo | DLT_TRACE_STATE | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| timeStamp | Time when the event occurred | uint64 | NoUnit |
| coreId | Id of the core | uint32 | NoUnit |
| posixProcessId | OS specific PID which has been assigned to the process that is being destroyed | uint32 | NoUnit |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Violation Messages

This functional cluster does not define any violation messages (i.e., DLT messages logged for Violations according to ). Please note that concrete implementations might implement Non-Standardized Violations (see also ).

### 21. Production 错误
*原文标题：Production Errors*

This functional cluster does not define any production errors (i.e., Diagnostic Events).

### 22. API 规范
*原文标题：API Specification*

This functional cluster does not define any APIs.

The AUTOSAR Adaptive Platform does not specify a new Operating System for highly performant microcontrollers. Rather, it defines an execution context and programming interface for use by Adaptive Applications.

### 23. C++ language binding Operating 系统
*原文标题：C++ language binding Operating System*

### 24. Application 接口 C (POSIX PSE51)
*原文标题：Application Interface C (POSIX PSE51)*

POSIX PSE51 Interface
  Upstream requirements: ,
⌈
The minimal OS functionality provided by Adaptive AUTOSAR platform shall be as defined by POSIX PSE51 interface, according to the  specification.
⌋

Note that PSE51 requires  as specified in the standard.

There are several Operating Systems on the market, e.g. Linux, that provide POSIX compliant interfaces. However Adaptive Applications are required to use a more restricted API to the Operating Systems as compared to the platform services and Foundation. In particular, the starting assumption is that an Adaptive Application may use PSE51 as OS interface whereas platform-specific applications may use full POSIX.

The implementation of platform Foundation and platform services functionality may use non-PSE51 APIs, even OS specific ones. The use of specific APIs will be left open to the implementer of the AUTOSAR Adaptive Platform and is not standardized.

In case of a C program, the applications main source code business logic includes C function calls defined in the POSIX standard.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Application C++ 接口
*原文标题：Application C++ Interface*

Use of C++ Language
  Upstream requirements: , , ,
⌈
The Operating System shall provide implementations of the C++ standard in library and header form - version as per .
⌋

In case of a C++ program, application software components source code can include function calls defined in the C++ Standard and its Standard C++ Library. The C++ Standards defines C++ Standard Library, and it includes Thread support library, Input/output library and others that provide most of PSE51 functionalites through these C++ interfaces. Some PSE51 functions, such as setting thread scheduling policies, are not available yet through these C++ Standard Library and Adaptive Applications (implemented in C++) need to use PSE51 C interface in conjunction with these C++ libraries.

In case of Linux and the gcc C++ compiler (g++), the compiler links the libstdc++ library, which provides the defined Standard C++ library functions. The libstdc++ library itself depends on the glibc library, i.e., the libstdc++ implementation includes function calls to the glibc library.

### 26. 服务接口
*原文标题：Service Interfaces*

This functional cluster does not define any provided or required service interfaces.

### 27. 配置
*原文标题：Configuration*

The configuration model of this functional cluster is defined in . This chapter defines the default values for attributes and semantic constraints for elements specified in  that are part of the configuration model of this functional cluster.

### 28. Default Values

This functional cluster does not define any default values for attributes specified in .

### 29. Semantic Constraints

This functional cluster does not define any semantic constraints for elements specified in .

### 30. 附录
*原文标题：Appendix*

### 31. Mentioned 清单 Elements
*原文标题：Mentioned Manifest Elements*

This chapter contains the remaining set of meta-class tables which are not shown directly in the main body of this document.

This chapter is generated.

### 32. Demands and constraints on Base 软件 (normative)
*原文标题：Demands and constraints on Base Software (normative)*

This functional cluster defines no demands or constraints for the Base Software on which the AUTOSAR Adaptive Platform is running on (usually a POSIX-compatible operating system).

### 33. Platform Extension 接口 (normative)
*原文标题：Platform Extension Interfaces (normative)*

This functional cluster does not specify any Platform Extension Interfaces.

### 34. Not implemented 需求
*原文标题：Not implemented requirements*

This chapter lists all functional requirements specified in the corresponding requirement specifications that are not implemented or violated by this specification and provides a rationale.

  Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
These requirements are not applicable as they are not within the scope of this release.
⌋

### 35. History of Constraints and 规范 Items
*原文标题：History of Constraints and Specification Items*

This chapter provides an overview of the history of constraints and specification items. Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 36. Constraint and 规范 Item Changes between AUTOSAR Release R25-11 and R26-11
*原文标题：Constraint and Specification Item Changes between AUTOSAR Release R25-11 and R26-11*

### 37. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 38. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

| Number | Heading |
|---|---|
| POSIX PSE51 Interface |  |

### 39. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

| Number | Heading |
|---|---|
| Default Scheduling Policies |  |
| Multi-Threading Support |  |
| Multi-Process Support |  |
| Multi-Process Isolation |  |
| Virtual Memory |  |
| Specification of Core Affinity |  |
| Implicit shared object support |  |
| Multi-Process Creation Capability Restriction |  |
| Availability of environment variables |  |
| Start Execution Management as Initial Process. |  |
| ResourceGroup minimum requirement |  |
| Memory ResourceGroups |  |
| CPU ResourceGroups |  |

### 40. Constraint and 规范 Item Changes between AUTOSAR Release R24-11 and R25-11
*原文标题：Constraint and Specification Item Changes between AUTOSAR Release R24-11 and R25-11*

### 41. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 42. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|
| POSIX PSE51 Interface |  |
| Use of C++ Language |  |
| Multi-Threading Support |  |
| Multi-Process Support |  |
| Multi-Process Isolation |  |
| Virtual Memory |  |
| Specification of Core Affinity |  |
| Implicit shared object support |  |
| Multi-Process Creation Capability Restriction |  |
| ResourceGroup minimum requirement |  |
| Memory ResourceGroups |  |
| CPU ResourceGroups |  |
| LogMessage OsProcessCreate |  |
| LogMessage OsProcessDestroy |  |
| LogMessage OsProcessInfo |  |
| LogMessage OsProcessRename |  |
| LogMessage OsProcessSwitch |  |
| LogMessage OsTaskCreate |  |
| LogMessage OsTaskTerminate |  |
| LogMessage OsTaskInfo |  |
| LogMessage OsTaskPreempt |  |
| LogMessage OsTaskRelease |  |
| LogMessage OsTaskRename |  |
| LogMessage OsTaskSchedule |  |
| LogMessage OsTaskWait |  |
| Log OS tracing started |  |
| Log Task Schedule Notification |  |
| Log Task Wait Notification |  |
| Log Task Release Notification |  |
| Log Task Preempt Notification |  |
| Log Task Exit Notification |  |
| Log Task Creation Notification |  |
| Log Task Renaming Notification |  |
| Log Process Switch Notification |  |
| Log Process Creation Notification |  |
| Log Process Ending Notification |  |
| Log Process Renaming Notification |  |

### 43. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 44. Constraint and 规范 Item Changes between AUTOSAR Release R23-11 and R24-11
*原文标题：Constraint and Specification Item Changes between AUTOSAR Release R23-11 and R24-11*

### 45. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 46. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

| Number | Heading |
|---|---|
| POSIX PSE51 Interface |  |
| Use of C++ Language |  |
| LogMessage OsProcessCreate |  |
| LogMessage OsProcessDestroy |  |
| LogMessage OsProcessInfo |  |
| LogMessage OsProcessRename |  |
| LogMessage OsProcessSwitch |  |
| LogMessage OsTaskCreate |  |
| LogMessage OsTaskTerminate |  |
| LogMessage OsTaskInfo |  |
| LogMessage OsTaskPreempt |  |
| LogMessage OsTaskRelease |  |
| LogMessage OsTaskRename |  |
| LogMessage OsTaskSchedule |  |
| LogMessage OsTaskWait |  |
| Log OS tracing started |  |
| Log Task Schedule Notification |  |
| Log Task Wait Notification |  |
| Log Task Release Notification |  |
| Log Task Preempt Notification |  |
| Log Task Exit Notification |  |
| Log Task Creation Notification |  |
| Log Task Renaming Notification |  |
| Log Process Switch Notification |  |
| Log Process Creation Notification |  |
| Log Process Ending Notification |  |
| Log Process Renaming Notification |  |

### 47. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 48. Constraint and 规范 Item Changes between AUTOSAR Release R22-11 and R23-11
*原文标题：Constraint and Specification Item Changes between AUTOSAR Release R22-11 and R23-11*

### 49. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

| Number | Heading |
|---|---|
| LogMessage OsProcessCreate |  |
| LogMessage OsProcessDestroy |  |
| LogMessage OsProcessInfo |  |
| LogMessage OsProcessRename |  |
| LogMessage OsProcessSwitch |  |
| LogMessage OsTaskCreate |  |
| LogMessage OsTaskTerminate |  |
| LogMessage OsTaskInfo |  |
| LogMessage OsTaskPreempt |  |
| LogMessage OsTaskRelease |  |
| LogMessage OsTaskRename |  |
| LogMessage OsTaskSchedule |  |
| LogMessage OsTaskWait |  |
| Log OS tracing started |  |
| Log Task Schedule Notification |  |
| Log Task Wait Notification |  |
| Log Task Release Notification |  |
| Log Task Preempt Notification |  |
| Log Task Exit Notification |  |
| Log Task Creation Notification |  |
| Log Task Renaming Notification |  |
| Log Process Switch Notification |  |
| Log Process Creation Notification |  |
| Log Process Ending Notification |  |
| Log Process Renaming Notification |  |

### 50. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

none

### 51. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 52. Constraint and 规范 Item Changes between AUTOSAR Release R21-11 and R22-11
*原文标题：Constraint and Specification Item Changes between AUTOSAR Release R21-11 and R22-11*

### 53. Added Advisories in R22-11

none

### 54. Changed Advisories in R22-11

none

### 55. Deleted Advisories in R22-11

none

### 56. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

none

### 57. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

none

### 58. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

none

### 59. Added Constraints in R22-11

none

### 60. Changed Constraints in R22-11

none

### 61. Deleted Constraints in R22-11

none

### 62. Constraint and 规范 Item Changes between AUTOSAR Release R19-03 and R19-11
*原文标题：Constraint and Specification Item Changes between AUTOSAR Release R19-03 and R19-11*

### 63. Added 规范 Items in R19-11
*原文标题：Added Specification Items in R19-11*

none

### 64. Changed 规范 Items in R19-11
*原文标题：Changed Specification Items in R19-11*

none

### 65. Deleted 规范 Items in R19-11
*原文标题：Deleted Specification Items in R19-11*

none

### 66. Added Constraints in R19-11

none

### 67. Changed Constraints in R19-11

none

### 68. Deleted Constraints in R19-11

none
