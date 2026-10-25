# Specification of Platform Health Management (`PlatformHealthManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 851 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_PlatformHealthManagement_851\AUTOSAR_AP_SWS_PlatformHealthManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_PlatformHealthManagement_851\AUTOSAR_AP_SWS_PlatformHealthManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_PlatformHealthManagement_851\zzgen\AP_SWS_PlatformHealthManagement.complete.txt`

## 文档简介

This document is the software specification of the Platform Health Management functional cluster within the Adaptive Platform .

The specification implements the requirements specified in .

It also implements the general functionality described in the Foundation documents  and .

Health Monitoring is required by  (under the terms control flow monitoring, external monitoring facility, watchdog, logical monitoring, temporal monitoring, program sequence monitoring) and this specification is supposed to address all relevant requirements from this standard.

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document is the software specification of the Platform Health Management functional cluster within the Adaptive Platform .

The specification implements the requirements specified in .

It also implements the general functionality described in the Foundation documents  and .

Health Monitoring is required by  (under the terms control flow monitoring, external monitoring facility, watchdog, logical monitoring, temporal monitoring, program sequence monitoring) and this specification is supposed to address all relevant requirements from this standard.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Acronym: | Description: |
|---|---|
| E2E | AUTOSAR End to End communication protection mechanism |
| PHM | Platform Health Management |
| SE | Supervised Entity |

| Acronym: | Description: |
|---|---|
| Alive Supervision | Mechanism to check the timing constraints of cyclic Supervised Entitys to be within the configured min and max limits. |
| ara::com | Communication middleware for the AUTOSAR Adaptive Platform |
| AUTOSAR Adaptive Platform | see  AUTOSAR Glossary |
| Checkpoint | A point in the control flow of a Supervised Entity where the activity is reported. |
| Daisy chaining | Chaining multiple instances of Health Monitoring |
| Deadline Supervision | Mechanism to check that the timing constraints for execution of the transition from a Deadline Start Checkpoint to a corresponding Deadline End Checkpoint are within the configured min and max limits. |
| Elementary Supervision Status | The current status of an Alive Supervision, Deadline Supervision or Logical Supervision, based on the evaluation (correct/incorrect) of the supervision. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 已知限制
*原文标题：Known limitations*

* Daisy chaining (i.e. forwarding Supervision Status or Checkpoint information to an entity external to PHM or another PHM instance) is currently not supported in this document release.
* Interface with the Diagnostic Manager is not specified in this release.
* The configuration attribute for the alive notification cycle time (with respect to PHM sending AliveNotification to watchdog interface) is not specified for this release.
* A change in the value of Supervision (Alive/Deadline/Logical) configuration parameters between two Function Group States wherein the process being supervised continues to execute on switching between these states is not considered. The Supervision continues as per configuration in the Supervision Mode corresponding to old Function Group State.
* Similar to above limitation, dynamic change between Supervision exclusion (disable) and Supervision inclusion (enable) on Function Group State change wherein the process under consideration continues to execute on change in Function Group State is not supported.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restriction

### 9. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 10. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

Figure  shows interfaces provided by Platform Health Management to other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of interfaces provided to other Functional Clusters within the AUTOSAR Adaptive Platform.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| RecoveryAction | State Management | Platform Health Management uses this interface to trigger failure recovery. |
| SupervisedEntity | Diagnostic Management | Diagnostic Management should use this interface to enable supervision of its daemon process(es) by Platform Health Management. |
| ^ | Execution Management | Execution Management shall use this interface to enable supervision of its process(es) by Platform Health Management. |
| ^ | State Management | State Management shall use this interface to enable supervision of its process(es) by Platform Health Management. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

Figure  shows the interfaces required by Platform Health Management from other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of required interfaces from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Execution Management | ExecutionClient | Platform Health Management uses this interface to report the state of its daemon process to Execution Management. |
| Log and Trace | Logger | Platform Health Management shall use this interface to log standardized messages. |

### 12. Additional dependencies on Execution 管理
*原文标题：Additional dependencies on Execution Management*

The Platform Health Management functional cluster is dependent on the Execution Management Interface .

Following process state information is needed from Execution Management with respect to processes for which supervision is configured:

* process reporting Execution State kRunning,
* process terminated,
* process is about to be informed by Execution Management to terminate.

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in AUTOSAR RS PlatformHealthManagement  and AUTOSAR RS HealthMonitoring  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Compatibility with the ISO 14882 C++ standard |  |  |
| Return values / application errors |  |  |
| Type names |  |  |
| Usage of ara::core types |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| noexcept behavior of class destructors |  |  |
| Naming conventions for L&T Context ID |  |  |
| usage of "noexcept" specifier |  |  |
| InstanceSpecifierAlreadyInUseViolation |  |  |
| Health Monitoring shall provide an Alive Supervision |  |  |
| Health Monitoring shall be able to report supervision errors. |  |  |
| Health Monitoring shall be able to trigger microcontroller reset. |  |  |
| Health Monitoring shall provide a Logical Supervision |  |  |
| Health Monitoring shall be able to wrongly trigger the serviced watchdogs. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

### 15. 总体描述
*原文标题：General description*

The Platform Health Management monitors applications with respect to timing constraints (Alive Supervision and Deadline Supervision) and logical program sequence (Logical Supervision). With the same means, functional clusters like State Management and Execution Management can be monitored. In case of a detected failure, Platform Health Management notifies State Management. As coordinator of the platform, State Management can decide how to handle the error and trigger a suitable recovery action.

Platform Health Management has also an interface to the hardware watchdog and can trigger a watchdog reaction in case of a critical failure where a notification to State Management is not sufficient.

All the algorithms and the procedures for the Platform Health Management are described in the Autosar Foundation document  and are not specified here: only the Autosar Adaptive specificities, including the interfaces with the other functional clusters are described in this document.

The interfaces of Health Management to other Functional Clusters are only informative and are not standardized.

### 16. Supervision of Supervised Entities

State Management coordinates the platform through Function Groups . Within a Function Group, there may be multiple Processes running.

Platform Health Management monitors Supervised Entitys. Each Supervised Entity maps to whole or part of a Process. The monitoring is active as long as the corresponding Process is active.

Platform Health Management provides three kinds of supervisions to monitor a Supervised Entity: Alive Supervision, Deadline Supervision and Logical Supervision. The supervision algorithms are described in . Only details specific for Adaptive Platform are described in this document.

The results of the supervisions of a Supervised Entity Instance are reflected in the Elementary Supervision Status.There exists one Elementary Supervision Status per Alive, Deadline, Logical Supervision. The status of elementary supervisions within a Function Group is conglomerated in the corresponding Global Supervision Status.

One Elementary Supervision Status contributes to only one Global Supervision Status.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Start and Stop of Supervisions

Supervision of non reporting processes is not supported.

 Start of Alive Supervision
  Upstream requirements: ,
⌈
The Platform Health Management shall start the first aliveReferenceCycle of a configured AliveSupervision of a Supervised Entity Instance as soon as the corresponding process reports Execution State kRunning.
⌋

Rationale: Cyclic execution is expected only after process reached state kRunning. Execution Management monitors that the process reaches state kRunning within a configured timeout.

The information of process reporting Execution state kRunning is to be provided by Execution Management through a vendor specific Inter Functional Cluster Interface.

 Checkpoints corresponding to Alive Supervision before kRunning
  Upstream requirements: ,
⌈
With respect to Alive Supervision, Platform Health Management shall ignore Checkpoints reported by a Supervised Entity Instance before the corresponding process reaches state kRunning.
⌋

Implementation hint: The same time base should be used between Execution Management and Platform Health Management to synchronize the kRunning state with the start of the Alive Supervision. See  for details.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Stopping of Alive Supervision for Self Terminating Process

In case of a Self-Terminating Process, the process can intentionally terminate even without SIGTERM being issued by Execution Management. Hence, it is necessary to mark the point in time at which the process starts to (self-) terminate so that the Alive Supervision could be stopped. This is intended to be achieved by process reporting a checkpoint named as terminatingCheckpoint. Additionally, a timeout (configurable) has to be monitored by Platform Health Management to check that the process terminates within this duration since reporting of terminatingCheckpoint. This timeout check is to monitor that the process is not stuck in its execution and therefore is not terminating.

Note: Unless SIGTERM is issued to the process by Execution Management, Execution Management will not monitor for process termination timeout.

Platform Health Management is to be informed by Execution Management regarding the termination of the process.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Supervision of processes started before Platform Health 管理
*原文标题：Supervision of processes started before Platform Health Management*

Start of Supervision (Alive Supervision/Deadline Supervision/Logical Supervision) in case of processes that are started before Platform Health Management process (e.g, process corresponding to Execution Management) is not standardized. It is up to Adaptive Platform Vendor specific decision.

### 20. Deactivation of Supervision during runtime

There are situations in which deactivation of the monitoring is necessary because the overall system goes into a degradation such as Suspend-to-RAM, for example. Deactivation is critical and must be taken into account in the safety case, as no further monitoring takes place during deactivation.

 Temporarily disabling of Supervision
⌈
A invocation of ara::phm::SupervisedEntity::Disable shall disable the supervision.

Note: A disabled Supervision is not longer monitored.
⌋

Advisory note: Disabling a Supervision is a critical task and must be synchronized with the overall safety-relevant functionalities.

 Checkpoints are ignored while disabling
  Upstream requirements: ,
⌈
Platform Health Management shall ignore Checkpoints reported by a Supervised Entity instance while the Supervision (Alive Supervision/Deadline Supervision/Logical Supervision) is disabled.
⌋

 Reactivation of Supervision
⌈
A invocation of ara::phm::SupervisedEntity::Enable shall enable the Supervision. Further it shall restart the aliveReferenceCycle if the Supervision is configured as AliveSupervision.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Supervision Modes

Expected execution (timing or sequence) of the Software can change based on certain conditions. Hence, the value of the Supervision (Alive/Deadline/Logical) parameters might have to be changed based on conditions. For each such condition a mode called a Supervision Mode can be configured. Currently, this condition can be configured based on Function Group State.

Note: It is possible to exclude (disable) Supervision for a Supervised Entity Instance in a Supervision Mode. This can be achieved by configuring NoSupervision for the Supervised Entity Instance in the Supervision Mode.

### 22. Effect of changing 模式
*原文标题：Effect of changing Mode*

In AUTOSAR Adaptive Platform, Supervision Mode changes on Function Group State change.

Function Group State change has following impact on processes:

* Certain processes are terminated.
* Certain processes are newly started.
* Certain processes are restarted.
* Remaining processes continue to execute.

Supervisions (Alive, Deadline and Logical) of the Supervised Entitys corresponding to the processes shall be handled as follows.

 Supervisions on termination of process
  Upstream requirements:
⌈
Alive Supervision, Deadline Supervision and Logical Supervision shall be stopped on termination of the corresponding process. Results of Alive, Deadline and Logical Supervision shall be set to correct.
⌋

The termination of the process could be due to various reasons. It could be due to change in Function Group State (the process is not configured to be executed in the new Function Group State), a self-terminating process is terminating on its own or abrupt termination of a process (e.g. due to out of bound memory access).

Note:

# On termination of process, Elementary Supervision Status of the corresponding Supervised Entity Instance will be set to kDeactivated .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Determination of Supervision Status

Based on the results of Alive Supervision, Deadline Supervision and Logical Supervision the Elementary Supervision Status and Global Supervision Status are determined. Please refer  for details of these Supervisions.

### 24. Determination of Elementary Supervision Status

The state machine of the Elementary Supervision Status determines the status of an individual Alive Supervision, Deadline Supervision and Logical Supervision. This is done based on the following:

# Previous value of the Elementary Supervision Status,
# Current values of the result (correct/incorrect) of the corresponding Alive Supervision, Deadline Supervision and Logical Supervision

The state machine is initialized at the initialization of the Platform Health Management. Note: In this release, only state machine for Elementary Supervision Status for intra process supervision is specified.

 Tracking of Elementary Supervision Status
  Upstream requirements:
⌈
The Platform Health Management shall track the Elementary Supervision Status of each Alive Supervision, Deadline Supervision and Logical Supervision.
⌋

Figure  shows the state machine for Elementary Supervision Status of a supervision with all possible states.

 States of state machine for Elementary Supervision Status
  Upstream requirements:
⌈
The state machine of the Elementary Supervision Status shall have the states kOK, kDeactivated, kExpired and kFailed.
⌋

See also figure  and ara::phm::ElementarySupervisionStatus.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Determination of Global Supervision Status

The Global Supervision Status is determined based on the Elementary Supervision Status of a set of Alive, Deadline and/or Logical Supervisions within a Function Group which are configured as part of a single GlobalSupervision. Global Supervision Status is "worst-of" all included Elementary Supervision Statuses.

The Global Supervision Status has similar values as the Elementary Supervision Status. The main differences are the addition of the kStopped value. Figure  shows the values and transitions between them.

The Platform Health Management reports a detected failure to State Management as soon as state kExpired is reached. State kStopped is used only for critical failures which need a direct reaction via hardware watchdog. From AUTOSAR point of view, this is relevant for failures in supervisions corresponding to Operating System, State Management or Execution Management. Platform Health Management triggers the watchdog reaction by not setting a correct watchdog trigger condition as soon as state kStopped is reached, see . This transition and therefore the reaction can be postponed for a configurable amount of time, named expiredSupervisionTolerance.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Recovery actions

The scope of Platform Health Management is to monitor the safety relevant Processes on the platform and report detect failures to State Management. If a failure in State Management is detected, Platform Health Management can trigger a reaction via hardware watchdog.

### 27. Notificaton to 状态管理
*原文标题：Notificaton to State Management*

The Platform Health Management debounces the failures of Supervised Entitys, see the Elementary Supervision Status kFailed in chapter . After the debouncing, a recovery action is necessary. Thus, Platform Health Management notifies State Management. State Management as a coordinator of the platform can decide how a detected failure shall be handled and can trigger corresponding recovery actions. In most cases this might include switching the faulty Function Group to another state. In case a failure cannot be handled, State Management can request a watchdog reaction via corresponding error code to Platform Health Management.

According to ISO 26262, it has to be ensured that a reaction is triggered after a safety-relevant failure occurred. Therefore, Platform Health Management has to make sure that State Management receives the notification on a detected failure. The Platform Health Management monitors the return of the ara::phm::RecoveryAction::RecoveryHandler with a configurable timeout. If no response by State Management is received in time, the PHM will do its own countermeasures by wrongly triggering or stop triggering the serviced watchdog.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 处理 of Hardware Watchdog
*原文标题：Handling of Hardware Watchdog*

The Platform Health Management is the only Functional Cluster with an interface to the hardware watchdog. Therefore, the watchdog supervises Platform Health Management and PHM can initiate a reaction of the watchdog by stop triggering or by sending a false trigger. Since this reaction means usually a reset of the machine, it has an impact on all functions and should be used only as a last resort in order to ensure freedom from interference. Failures that require a watchdog reaction are supervision failures in State Management and Execution Management since in these cases a recovery action via State Management as described in section  is not possible.

Platform Health Management handles the hardware watchdog via the WatchdogInterface. PHM indicates aliveness to WatchdogInterface cyclically. WatchdogInterface will trigger the hardware watchdog correctly as long as PHM indicates aliveness. If PHM does not report aliveness in configured time, WatchdogInterface shall initiate watchdog reaction.

In case a critical failure is detected, PHM can trigger recovery action through WatchdogInterface.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 配置 Parameters
*原文标题：Configuration Parameters*

Configuration of recovery actions within Platform Health Management has one parameter:

# recoveryNotificationTimeout: the maximum acceptable amount of time Platform Health Management waits for a response by State Management after detection of failure.

### 30. 多 processes and 多 instances
*原文标题：Multiple processes and multiple instances*

During the application deployment phase, a single Supervised Entity may be instanciated several times: this happens for example when the same C++ object class representing a Supervised Entity is explicitly instanciated inside the code or when the same executable containing the Supervised Entity is started/run multiple times. In such a case, each instance of the Supervised Entity is individually supervised, each Alive Supervision, Deadline Supervision and Logical Supervision generating an instance of Elementary Supervision Status.

A specific instance of a Supervised Entity identifies itself at run time via an InstanceSpecifier. The API usage of the ara::core::InstanceSpecifier is specified in `SWS_CORE_10200` and chapter "'InstanceSpecifier data type"' in . The modelling relation of the InstanceSpecifier and its usage in PHM is explained in detail in the chapter "'Supervised Entities and Checkpoints"' in .

 Multiple Supervised Entities of the same or different type belonging to a process
  Upstream requirements: ,
⌈
Multiple Supervised Entitys of the same or different types i.e. logical, deadline or alive supervision can be created for the same process.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 功能性 cluster life-cycle
*原文标题：Functional cluster life-cycle*

This section defines behavior of this functional cluster during its life-cycle. Please note that there is a general behavior for ara::core::Initialize and ara::core::Deinitialize defined in  by  and .

### 32. 启动
*原文标题：Startup*

Handling of Watchdog after Startup
  Upstream requirements: , , , ,
⌈
Platform Health Management shall call apext::phm::WatchdogInterface::AliveNotification before reporting kRunning to Execution Management using the method ara::exec::ExecutionClient::ReportExecutionState.
⌋

The intention is to take over the control of the HW watchdog as early as possible.

More information on the machine startup sequence can be found in .

### 33. 关机
*原文标题：Shutdown*

It is the integrators responsibility to make correct use of the shutdown mechanism. Details for ensuring safe execution are given in . Details on the sequence of machine shutdown can be found in .

 Termination of Supervisions at SIGTERM
  Upstream requirements: , ,
⌈
Platform Health Management shall stop all configured supervisions (eg: delete all supervision objects) after receiving SIGTERM.
⌋

 Global Supervision Status at SIGTERM
  Upstream requirements: , ,
⌈
Platform Health Management shall change all Global Supervision Statuses to kDEACTIVATED after receiving SIGTERM.
⌋

### 34. watchdog during 关机的处理
*原文标题：Handling of watchdog during shutdown*

Handling of watchdog during and after Shutdown of Platform Health Management will not be specified.

Note: Platform Health Management will no more be able to handle the servicing of the watchdog once it is shutdown.

### 35. Reporting

### 36. 安全事件
*原文标题：Security Events*

This section lists all security events defined by this functional cluster.

 Security events for ap_phm
  Upstream requirements:
⌈
| Name | Description | ID |
|---|---|---|
| SEV_ACCESS_CONTROL_PHM_IAM_ACCESS_DENIED | Access of an application to a resource provided by Platform Health Management was denied. | 65 |

⌋

 Security event context data definition: `SEV_ACCESS_CONTROL_PHM_IAM_ACCESS_DENIED`
⌈
| SEV Name | SEV_ACCESS_CONTROL_PHM_IAM_ACCESS_DENIED | < |
|---|---|---|
| ID | 65 | < |
| Description | Access of an application to a resource provided by Platform Health Management was denied. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| UserId | uint32 |  |

⌋

### 37. Log Messages

Log Message SupervisionStateChanged
  Status: DRAFT
  Upstream requirements:
⌈
| Dlt-Message | SupervisionStateChanged | < | < |
|---|---|---|---|
| Description | Message sent by Platform Health Management when the Execution state of a process changes. The well defined states of a process supervision determine if process is running ok, if a supervision failure is detected or supervision ends. | < | < |
| MessageId | 0x80009001 | < | < |
| MessageTypeInfo | DLT_LOG_INFO | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| executionStateOfProcess | Execution state of Process. | uint8 |  |
| modeledProcessId | Meta-model identifier of the process that has been started, i.e., its short name path with '/' as a separator. | uint8 |  |
| hasChangedFrom | has changed from | uint8 |  |
| prevExecutionState | Execution state | uint32 |  |
| to | to | uint8 |  |
| currExecutionState | Execution state | uint32 |  |

⌋

 Log Message RecoveryInitiated
  Status: DRAFT
  Upstream requirements:
⌈
| Dlt-Message | RecoveryInitiated | < | < |
|---|---|---|---|
| Description | Message sent by Platform Health Management when the Global Supervision Status has reached status "EXPIRED" and the RecoveryHandler API invoked State Management. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Violation Messages

This section lists all violation messages (i.e., DLT messages logged for Violations according to ) defined by this functional cluster. Please note that concrete implementations might additionally implement Non-Standardized Violations (see also ).

 Violation Message InstanceSpecifierAlreadyInUseViolation
  Status: DRAFT
  Upstream requirements: ,
  Previous Identifiers: `SWS_CORE_13006`
⌈
| Dlt-Message | InstanceSpecifierAlreadyInUseViolation | < | < |
|---|---|---|---|
| Description | Violation message that is sent in case a constructor in the ara framework was called with an InstanceSpecifier already in use in this process. | < | < |
| MessageId | 0x80001ff9 | < | < |
| MessageTypeInfo | DLT_LOG_FATAL | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| modeledProcessId | Meta-model identifier of the process that caused the violation, i.e., its short name path with '/' as a separator. | uint8 |  |
| location | An implementation-defined identifier of the location where the violation was detected, for example {filename}:{linenumber}. | uint8 |  |
| instanceSpecifier | InstanceSpecifier used to try to create the object. | uint8 |  |
| className | Name of the class that was instantiated. | uint8 |  |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 83 章（内容从略，见纯文本全文）

39. Production 错误
40. PHM_E_WATCHDOG_RESET
41. Lost Daemon Connection
42. API 规范
43. PortInterface to API class binding
44. Header：ara/phm/supervised_entities/{<si-namespace-derived-directory-path-lower>}/{<phmssi-sn>}.h
45. Namespaces
46. Namespace：ara：：phm：：supervised_entities：：{<hierarchical-namespace-list-lower-skeleton>}
47. Non-Member 类型
48. Global Variables
49. Header：ara/phm/phm_error_domain.h
50. Non-Member 类型
51. Non-Member Functions
52. Other
53. Class：PhmErrorDomain
54. Public Member 类型
55. Public Member Functions
56. Special Member Functions
57. Member Functions
58. Class：PhmException
59. Public Member Functions
60. Constructors
61. Header：ara/phm/recovery_action.h
62. Non-Member 类型
63. Class：RecoveryAction
64. Public Member Functions
65. Special Member Functions
66. Constructors
67. Member Functions
68. Header：ara/phm/supervised_entity.h
69. Non-Member 类型
70. Class：SupervisedEntity
71. Public Member Functions
72. Special Member Functions
73. Constructors
74. Member Functions
75. 服务接口
76. 配置
77. Default Values
78. Semantic Constraints
79. 附录
80. Mentioned 清单 Elements
81. Demands and constraints on Base 软件 (normative)
82. Platform Extension API (normative)
83. Header：apext/phm/watchdog_interface.h
84. Class：WatchdogInterface
85. Public Member Functions
86. Member Functions
87. Not implemented 需求
88. Change History of AUTOSAR traceable items
89. Traceable item history of this document according to AUTOSAR Release R21-11
90. Added 规范 Items in R21-11
91. Changed 规范 Items in R21-11
92. Deleted 规范 Items in R21-11
93. Traceable item history of this document according to AUTOSAR Release R22-11
94. Added 规范 Items in R22-11
95. Changed 规范 Items in R22-11
96. Deleted 规范 Items in R22-11
97. Traceable item history of this document according to AUTOSAR Release R23-11
98. Added 规范 Items in R23-11
99. Changed 规范 Items in R23-11
100. Deleted 规范 Items in R23-11
101. Traceable item history of this document according to AUTOSAR Release R24-11
102. Added 规范 Items in R24-11
103. Changed 规范 Items in R24-11
104. Deleted 规范 Items in R24-11
105. Added Constraints in R24-11
106. Changed Constraints in R24-11
107. Deleted Constraints in R24-11
108. Traceable item history of this document according to AUTOSAR Release R25-11
109. Added 规范 Items in R25-11
110. Changed 规范 Items in R25-11
111. Deleted 规范 Items in R25-11
112. Added Constraints in R25-11
113. Changed Constraints in R25-11
114. Deleted Constraints in R25-11
115. Traceable item history of this document according to AUTOSAR Release R26-11
116. Added 规范 Items in R26-11
117. Changed 规范 Items in R26-11
118. Deleted 规范 Items in R26-11
119. Added Constraints in R26-11
120. Changed Constraints in R26-11
121. Deleted Constraints in R26-11
