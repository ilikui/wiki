# Specification of State Management (`StateManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 908 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_StateManagement_908\AUTOSAR_AP_SWS_StateManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_StateManagement_908\AUTOSAR_AP_SWS_StateManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_StateManagement_908\zzgen\AP_SWS_StateManagement.complete.txt`

## 文档简介

This document is the software specification of the State Management functional cluster within the Adaptive Platform Services.

State Management is responsible for determination the state of any of its internal statemachines, based on information received from other AUTOSAR Adaptive Platform Application or Adaptive Application.

Interaction with other applications includes requesting Function Group State transitions (as well as those for recovery actions), influencing the state from NetworkHandles, and supporting coordinated update sessions by transitioning Function Groups to different states according to the current update session phase. These interactions are facilitated through ara::com service interfaces and C++ APIs. State Management remains highly OEM and project-specific. Depending on the chosen implementation, chapter  provides two approaches for working with State Management. One approach focuses on the interface level only, allowing OEM flexibility in implementing internal logic and handling configurations. The other approach provides a standardized method for managing configurations and defining how these configurations interact with internal logic, following a StateMachine-based approach.

Section  describes how State Management concepts are realized within the AUTOSAR Adaptive Platform.

## 模块依赖

This chapter provides an informative guideline of the interaction of State Management with other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the public interfaces provided by State Management to other Functional Clusters. Section  lists the public interfaces required by State Management.

The goal is to provide a clear understanding of Functional Cluster boundaries and interaction, without specifying syntactical details. This ensures compatibility between documents specifying different Functional Clusters and supports parallel implementation of different Functional Clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters and return values can be added.

A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document is the software specification of the State Management functional cluster within the Adaptive Platform Services.

State Management is responsible for determination the state of any of its internal statemachines, based on information received from other AUTOSAR Adaptive Platform Application or Adaptive Application.

Interaction with other applications includes requesting Function Group State transitions (as well as those for recovery actions), influencing the state from NetworkHandles, and supporting coordinated update sessions by transitioning Function Groups to different states according to the current update session phase. These interactions are facilitated through ara::com service interfaces and C++ APIs. State Management remains highly OEM and project-specific. Depending on the chosen implementation, chapter  provides two approaches for working with State Management. One approach focuses on the interface level only, allowing OEM flexibility in implementing internal logic and handling configurations.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the State Management module that are not included in the AUTOSAR glossary.

| Terms: | Description: |
|---|---|
| Network Handle | Network Handles are provided by Network Management. A handle represents a set of (partial) networks. |
| StateMachine | Collection of modelled StateMachine States, each associated with an ActionList, where TransitionRequestTable and ErrorRecoveryTable are defining possible StateMachine State transitions. A StateMachine can be used to control a set of software in a configurable way.StateMachine is represented by meta-class ModeDeclarationGroupPrototype. The StateManagementStateNotification.stateMachine.category for each StateMachine has to be configured. |
| StateMachine State | A modelled state of a StateMachine which can be entered based on StateMachine inputs. Each StateMachine State has an associated ActionList. StateMachine State is represented by meta-class ModeDeclaration. |
| Initial State | A StateMachine State that is configured as ModeDeclarationGroup.InitialMode. This state is used for the very first StateMachine State transition when StateMachine is started (e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

The main documents that serve as input for the specification of the State Management are:

### 5. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a core specification  which is also applicable for State Management. The chapter "General requirements for all FunctionalClusters" of this specification shall be considered an additional and required specification for implementing State Management.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 已知限制
*原文标题：Known limitations*

This section lists known limitations of State Management and their relation to this release of the AUTOSAR Adaptive Platform with the intent to provide an indication how State Management within the context of the AUTOSAR Adaptive Platform will evolve in future releases.

The following functionality is mentioned within this document but is not (fully) specified in this release:

* Interaction with Diagnostic Management has to be clarified in one of the upcoming releases.

### 8. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter provides an informative guideline of the interaction of State Management with other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the public interfaces provided by State Management to other Functional Clusters. Section  lists the public interfaces required by State Management.

The goal is to provide a clear understanding of Functional Cluster boundaries and interaction, without specifying syntactical details. This ensures compatibility between documents specifying different Functional Clusters and supports parallel implementation of different Functional Clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters and return values can be added.

A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 9. Provided 接口
*原文标题：Provided Interfaces*

Figure  shows interfaces provided by State Management to other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of interfaces provided to other Functional Clusters within the AUTOSAR Adaptive Platform.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| UpdateRequest | Update and Configuration Management | This interface is used to interact with State Management of the Adaptive Platform during an update. |

### 10. Required 接口
*原文标题：Required Interfaces*

Figure  shows the interfaces required by State Management from other Functional Clusters within the AUTOSAR Adaptive Platform.

Figure  shows interfaces required by State Management from Execution Management within the AUTOSAR Adaptive Platform.  provides a complete list of required interfaces from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Execution Management | ExecutionClient | This interface shall be used to report the state of the State Management process(es). |
| Execution Management | FunctionGroup | This interface shall be used to construct FunctionGroupStates. |
| Execution Management | FunctionGroupState | This interface shall be used to request FunctionGroupState transitions. |
| Execution Management | StateClient | This interface shall be used to request FunctionGroupState transitions. |
| Log and Trace | Logger | State Management shall use this interface to log standardized messages. |
| Network Management | NetworkHandle | This interface shall be used to retrieve information about the network status of a NetworkHandle. |
| Persistency | KeyValueStorage | Used to store the internal state of State Management. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Suspend-to-RAM - Security Considerations

The Suspend-to-RAM low-power state relies on the security capabilities of the underlying platform. In automotive applications, where cybersecurity and functional safety are paramount, it is the responsibility of the system integrator to ensure that Suspend-to-RAM is correctly configured and that all relevant security mechanisms are fully implemented and validated.

In the context of automotive ECUs - especially those handling sensitive data - Suspend-to-RAM must only be used if its security implications have been thoroughly assessed and mitigated through appropriate platform and OS-level measures.

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Public namespaces |  |  |
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Enumerator and constant names |  |  |
| Handling of unsuccessful operations |  |  |
| Error handling for non-initialized Functional Cluster |  |  |
| Provide only interfaces that are intended to be used by AUTOSAR Applications and Functional Clusters |  |  |
| usage of "noexcept" specifier |  |  |
| Basic SW security events |  |  |
| State Management shall coordinate and control multiple sets of Applications. |  |  |
| State Management shall provide standardized interfaces. |  |  |
| State Management internal states. |  |  |
| State Management shall control Applications depending on dynamic communication paths . |  |  |
| Coordination of System Sleep States |  |  |
| State Management shall coordinate recovery actions. |  |  |

### 13. 功能规范
*原文标题：Functional specification*

State Management is a functional cluster contained in the Adaptive Platform Services. State Management is responsible for handling of incoming events, prioritization of these events/requests setting the corresponding internal States. State Management may consist of one or more state machines, which might be more or less loosely coupled depending on project needs.

Additionally the State Management takes care of not shutting down the system as long as an update session is active as part of State Managements internal State.

In dependency of the current internal States, State Management might decide to request Function Groups or Machine State to enter specific state by using interfaces of Execution Management.

State Management is responsible for en- and disabling (partial) networks by means of Network Management. State Management can influence Network Management's NetworkHandle in dependency of Function Groups states and - vice versa - can set Function Groups to a defined state depending on the value of Network Management's NetworkHandle.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 状态管理 Responsibilities
*原文标题：State Management Responsibilities*

State Management is the functional cluster which is responsible for determining the current internal States, and for initiating Function Group and Machine State transitions by requesting them from Execution Management.

If an State Management's internal State change is triggered then Execution Management may be requested to set Function Groups or Machine State into new Function Group State.

The state change request for Function Groups can be issued by several entities, such as:

* Platform Health Management reports supervision errors that trigger error recovery, e.g. to activate fallback Functionality.
* Update and Configuration Management to switch the system into states where software or configuration can be updated and updates can be verified.
* Network Management to coordinate required functionality and network state. This is no active request by Network Management. Network Management provides several sets of NetworkHandles, where State Management registers to and reacts on changes of them.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Machine 状态
*原文标题：Machine State*

A Machine State is a specific type of Function Group State (see Section ). Machine States and all other Function Group States are determined and requested by the State Management functional cluster, see Section . The set of active States is significantly influenced by vehiclewide events and modes which are evaluated into State Managements internal States. A Machine State is a specific type of Function Group State (see Section ). Machine States and all other Function Group States are determined and requested by the State Management functional cluster, see Section . The set of active States is significantly influenced by vehiclewide events and modes which are evaluated into State Managements internal States.

The Function Group States, including the Machine State, define the current set of running Modelled Processes. Each Adaptive Application can declare in its Execution Manifests in which Function Group States its Modelled Processes have to be running.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能 Group 状态
*原文标题：Function Group State*

If more than one group of functionally coherent Adaptive Applications is installed on the same machine, the Machine State mechanism is not flexible enough to control these functional clusters individually, in particular if they have to be started and terminated with interleaving lifecycles. Many different Machine States would be required in this case to cover all possible combinations of active functional clusters.

To support this use case, additional Function Groups and Function Group States can be configured. Other use cases where starting and terminating individual groups of Modelled Processes might be necessary including error recovery.

In general, Machine States are used to control Machine lifecycle (startup/shutdown/restart) and Modelled Processes of platform level Applications while other Function Group States individually control Modelled Processes which belong to groups of functionally coherent user level Adaptive Applications.

Modelled Processes reference in their Execution Manifest the states in which they want to be executed. A state can be any Function Group State, including a Machine State.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 状态管理架构
*原文标题：State Management Architecture*

State Management is the functional cluster which is responsible for determining the current set of active Function Group States, including the Machine State, and for initiating State transitions by requesting them from Execution Management. Execution Management performs the State transitions and controls the actual set of running Modelled Processes, depending on the current States.

State Management is the central point where new Function Group States can be requested and where the requests are arbitrated, including coordination of contradicting requests from different sources. Additional data and events might need to be considered for arbitration.

State Management functionality is highly project specific, and AUTOSAR decided against specifying functionality like the Classic Platform BswM for the Adaptive Platform. It is planned to only specify a set of basic service interfaces, and to encapsulate the actual arbitration logic into project specific code (e.g. a library), which can be plugged into the State Management framework and has standardized interfaces between framework and arbitration logic, so the code can be reused on different platforms.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Interaction with Platform Health 管理
*原文标题：Interaction with Platform Health Management*

Platform Health Management is responsible for monitoring supervised entities via local supervision(s). Failures in local supervision(s) will be accumulated in a global supervision. The scope of a global supervision is a single Function Group (or a part of it). For details see SWS-PlatformHealthManagement . As soon as a global supervision enters the kExpired state, Platform Health Management will notify State Management via C++ API provided by Platform Health Management. C++ interface is provided as a class with virtual functions, which have to be implemented by State Management.

When State Management receives notification from Platform Health Management it can evaluate the information from the notification and initiate the project-specific actions to recover from the failure (e.g. request Execution Management to switch a Function Group to another Function Group State, request Execution Management for a restart of the Machine, ...).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Interaction with Update and 配置管理
*原文标题：Interaction with Update and Configuration Management*

Update and Configuration Management is responsible for installing, removing or updating Software Clusters as smallest updatable entity. To enable Update and Configuration Management to fulfill its functionality State Management offers a service interface (see Section ) to be used by Update and Configuration Management.

Please note that system integrator has to limit usage of this interface to Update and Configuration Management by configuring Identity and Access Management.

In a first step Update and Configuration Management will ask State Management if it is allowed to perform an update. The decision will depend on current state of the machine (or whole vehicle) and has to be done in a project specific way.

 Start update session
  Upstream requirements: ,
⌈
State Management shall provide the service interface UpdateRequest to Update and Configuration Management with the method call RequestUpdateSession to check if an update can be performed.
⌋

 Active update session
  Upstream requirements: ,
⌈
The period between accepting an update session  and ending an update session  is considered by State Management as "active update session".
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Interaction with 网络管理
*原文标题：Interaction with Network Management*

To be portable between different ECUs the Adaptive Applications should not have the need to know which networks are needed to fulfill its functionality, because on different ECUs the networks could be configured differently. To control the availability of networks for several Adaptive Applications State Management interacts with Network Management via a C++ API.

Network Management provides multiple instances of NetworkHandles, where each represents a set of (partial) networks.

To fulfill the project-specific needs StateMachine might set NmNetworkHandle states depending on Function Group States and vice versa.

How interaction between Network Management and State Management is handled when using StateMachine approach is shown in section  and in section .

### 21. Interaction with Suspend-to-RAM Functionality

To optimize the shutdown and startup times, the machine could use Suspend-to-RAM instead of a complete shutdown and initial boot.

This includes before the OS is entering any suspend state

* a (partial) shutdown of all Function Groups including Executables where Executable.suspendToRamAwareness is set to suspendToRamNotSupported. This means that either all affected Function Groups are in "Off" state, or at least in a state where these affected Processs are not included/executed anymore.
* a notification to all Processs where their Executable.suspendToRamAwareness is set to suspendToRamAware. This can either be achieved by the StateMachine approach (see section ) or by an instance of ara::sm::s2r::S2RHub in the SMControlApplication (see section ). However under consideration of .

State Management provides a special mechanisms to coordinate Suspend-to-RAM operations for S2R-Aware applications. These Adaptive Applications require a state synchronization before the operating system enters the suspend state. To achieve this, State Management offers an S2R Hub that manages communication with S2R Satellites. Satellites can dynamically register with the hub.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. S2R Hub

The S2R Hub coordinates communication with S2R Satellites. It can be accessed through either the StateMachine approach (see section ) or a C++ API (e.g. in an SMControlApplication) in a mutual exclusive manner (see ).

 IAM check
  Status: DRAFT
  Upstream requirements:
⌈
S2R Hub shall verify during the ara::sm::s2r::S2RHub::S2RHub constructor that the current Process context matches the mapped SuspendToRamHubMapping.process. In case not, the Violation InsufficientPermissionsViolation and the SecurityEvent `SEV_ACCESS_CONTROL_SM_IAM_ACCESS_DENIED` shall be triggered.
⌋

 IAM demand
  Status: DRAFT
  Upstream requirements:
⌈
S2R Hub shall restrict processes that can trigger the suspend to RAM by using a ara::sm::s2r::S2RHub::S2RHub identified by a SuspendToRamModuleInstantiation to Processes referenced by a SuspendToRamHubMapping in the role process which also references the SuspendToRamModuleInstantiation in the role moduleInstantiation.
⌋

 Restrict to only authenticated S2R Satellites
  Status: DRAFT
  Upstream requirements:
⌈
S2R Hub shall restrict that only IAM authenticated S2R Satellites can register.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. S2R Satellite

S2R Satellite are used in S2R-Aware applications to register with the S2R Hub and receive notifications before entering and after leaving the Suspend Mode.

 IAM check in S2R Satellite
  Status: DRAFT
  Upstream requirements:
⌈
S2R Satellite shall verify during the ara::sm::s2r::S2RSatellite::S2RSatellite constructor that the current Process context matches the mapped SuspendToRamSatelliteMapping.process. In case not, the Violation InsufficientPermissionsViolation and the SecurityEvent `SEV_ACCESS_CONTROL_SM_IAM_ACCESS_DENIED` shall be triggered.
⌋

In projects without IAM requirements on S2R Satellites, the named constructor ara::sm::s2r::S2RSatellite::Create can be used.

 Forced IAM check in S2R Satellite
  Status: DRAFT
  Upstream requirements:
⌈
ara::sm::s2r::S2RSatellite::Create shall return the error kAuthenticationRequired if the "Force IAM switch" is set to true.
⌋

 Registration of S2R Satellites at S2R Hub
  Status: DRAFT
  Upstream requirements:
⌈
An S2R Satellite instance shall register with the hub via ara::sm::s2r::S2RSatellite::Offer. It is considered actively registered until ara::sm::s2r::S2RSatellite::StopOffer is called.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Platform Extension Power 模式
*原文标题：Platform Extension Power Mode*

State Management requires communication with the OS, which is facilitated by apext::sm::PowerStateInterface.

 Instantiation of apext::sm::PowerStateInterface
  Status: DRAFT
  Upstream requirements:
⌈
If ara::sm::s2r::S2RHub is instantiated, the State Management shall also create an instance of the apext::sm::PowerStateInterface.
⌋

### 25. Coordinated Suspend 模式管理 for Virtual Machines
*原文标题：Coordinated Suspend Mode Management for Virtual Machines*

To ensure a consistent and scalable approach to managing the suspend state of multiple virtual machines (VMs), the coordination mechanism shall be handled externally. Each VM is responsible for initiating its own shutdown process upon receiving a designated trigger. This means that:

* There is no centralized coordinator communicating directly with the applications inside each VM.
* Instead, an external system signals the suspend event (e.g. to the edge State Management via ara::com), and each VM reacts independently based on its internal logic and configuration.
* This design promotes modularity, resilience, and ease of integration, as each VM encapsulates its own shutdown behavior without relying on external orchestration at the application level.

By decentralizing the shutdown logic, the system avoids tight coupling between the coordinator and individual VM internals, leading to a more robust and maintainable architecture.

AUTOSAR State Management does not provide standardized external management interfaces.

The AUTOSAR Network Management can alternatively be used to coordinate the suspend or shutdown of a VM.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Interaction with Execution 管理
*原文标题：Interaction with Execution Management*

Execution Management is used to execute the Function Group State changes. The decision to change the state of Machine State or the Function Group State of Function Groups might come from inside of State Management based on State Management States (or other project specific requirements) or might be requested at State Management from an external Adaptive Application.

 Execution Management
  Upstream requirements:
⌈
State Management shall use StateClient API of Execution Management to request a change in the Function Group State of any Function Group (including Machine State).
⌋

Execution Management might not be able to carry out the requested Function Group State change due to several reasons (e.g. corrupted binary). Execution Management returns the result of the request.

When State Management gets kIntegrityOrAuthenticityCheckFailed as error to a Function Group SetState request it is expected that every subsequent request for the same Function Group State will fail with the same value. So any further action to solve this issue (e.g. update/fix application) is out of scope of State Management. Please note that this error indicates that the trusted platform has been compromised.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. StateManagement StateMachine

### 28. StateMachine 简介
*原文标题：StateMachine introduction*

Introducing StateMachines in the scope of State Management will give the integrator the possibility to define which set of Function Groups become active (Function Group State != "Off") under a certain condition. The integrator can define error reactions (violated supervisions, abnormal or unexpected termination) via configuration in the scope of a set of Function Group States, reflected by a StateMachine State of State Management.

StateMachines are comprised by set of StateMachine States. Each StateMachine has to have at least five StateMachine States: The Initial State, Off, PrepareUpdate, VerifyUpdate and PrepareRollback. There probably will be a number of additional project-specific StateMachine States (e.g. degraded States). Each State references an ActionList, which is comprised of a set of ActionListItems. All ActionListItems in an ActionList are executed as soon as a StateMachine State of a StateMachine is entered. Currently available Types for an ActionListItem are:

* Request Function Group State, (represented by meta-class StateManagementSetFunctionGroupStateActionItem).
* SYNC, (represented by meta-class StateManagementSyncActionItem).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Controlling application for StateMachine States

As State Management shall not contain any project-specific logic (under which condition a StateMachine State is requested) it is assumed that a project-specific Process (SMControlApplication ) exists. As SMControlApplication and StateMachine within State Management instance belong together it would make sense to instantiate them somehow together like follows:

* The Process is configured to run in the same Function Group State like the Process which contains the StateMachine.

* The Process is configured to run in a Function Group State, as ActionListItem in the ActionList referenced by the Initial State of the StateMachine.

Even if it would make sense to start these Processs as shown above, they could be part of different, decoupled Function Group States, depending on project needs.

SMControlApplication is needed when arbitrary state changes could be requested as per StateMachine configuration. If the only functionality provided by StateMachine is the reaction to errors reported by Platform Health Management and/or Execution Management, or reaction to changes in NetworkHandles, then there is no need to have a SMControlApplication.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. StateMachine 设计 considerations
*原文标题：StateMachine design considerations*

Even if it is possible to manage all Function Groups within a single StateMachine, it makes sense to control Function Group States of a sub-set of Function Groups in separate StateMachine instances. This design decision is heavily project-specific and depends e.g. on the number of installed Software Clusters, amount of Function Groups and their Function Group States. With an increasing number of these items and the needed combinations (project-specific), the number of states within a single StateMachine might become very hard to manage. For this reason State Management supports multiple StateMachine instances: As soon as any StateMachine is configured exactly one StateMachine has to have the role of a Controller. All other - optionally - configured StateMachines have to have the role of an Agent see StateManagementStateNotification.stateMachine.category.

 Existence of StateMachine of type Controller
⌈
As soon as any StateMachine is configured in a Machine exactly one StateMachine has to have the role of a Controller.
⌋

The Controller is the StateMachine, which is automatically started, when State Management starts.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. StateMachine 通用 conditions
*原文标题：StateMachine general conditions*

When a StateMachine exits it shall leave the system in a consistent state. This means that no Function Group, which are under control of the StateMachine should be in a state where no further influence on their state can be taken as error reaction. Therefore all controlled Function Groups shall be in "Off" state thus they do not cause any error.

 Existence of StateMachine Off state
⌈
Each configured StateMachine of type Agent shall have corresponding "Off" StateMachine State configured.
⌋

 ActionListItems allowed in the "Off" state of a StateMachine of type Agent
⌈
In the ActionList referencing the "Off" State of a StateMachine of type Agent, only the following ActionListItems shall be allowed:

* Function Group::Off
* NmNetworkHandle::NoCom
* SYNC
* Sleep
⌋

It is recommended that any StateMachine State from the StateMachine of type Controller containing MachineFG::Shutdown or MachineFG::Restart should stop all StateMachines of type Agent. By not doing so, the still running processes would be abruptly terminated when host is shut down.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 142 章（内容从略，见纯文本全文）

32. StateMachine 状态 changes
33. StateMachine ActionLists
34. StateMachine ActionListItems
35. Controlling 多 StateMachine Instances
36. ActionListItem 休眠
37. ActionListItem SetNetworkHandle
38. StateMachine 状态通知
39. StateMachine ActionListTimeout
40. StateMachine ErrorCode 配置 and 处理
41. StateMachine 支持 for Update and 配置管理
42. StateMachine 支持 for Suspend-to-RAM
43. Autonomous 唤醒 from suspend 状态
44. 功能性 cluster life-cycle
45. 启动
46. 关机
47. 重启
48. Suspended
49. Suspend-to-RAM tolerant
50. Suspend-to-RAM not supported
51. Suspend-to-RAM aware
52. Daemon crash
53. Reporting
54. 安全事件
55. Log Messages
56. Violation Messages
57. Production 错误
58. API 规范
59. Header：ara/sm/sm_error_domain.h
60. Non-Member 类型
61. Non-Member Functions
62. Other
63. Class：SmErrorDomain
64. Public Member 类型
65. Public Member Functions
66. Special Member Functions
67. Member Functions
68. Class：SmException
69. Public Member Functions
70. Constructors
71. Header：ara/sm/s2r/S2RHub.h
72. Class：S2RHub
73. Public Member Functions
74. Special Member Functions
75. Constructors
76. Member Functions
77. Header：ara/sm/s2r/S2RSatellite.h
78. Class：S2RSatellite
79. Public Member Functions
80. Special Member Functions
81. Constructors
82. Member Functions
83. 服务接口
84. Implementation 数据类型
85. 数据类型 for Update And 配置管理 interaction
86. 数据类型 for StateMachine interaction
87. 数据类型 for StateMachine 通知
88. 数据类型 for UpdateAllowed 服务接口
89. 数据类型 for ResetMachineNotifier
90. Provided 服务接口
91. UpdateRequest
92. StateMachine 服务
93. StateMachine UpdateAllowed 服务
94. Required 服务接口
95. Application 错误
96. StateManagement 错误 Domain
97. 配置
98. Default Values
99. Semantic Constraints
100. 附录
101. Mentioned 清单 Elements
102. Demands and constraints on Base 软件 (normative)
103. Platform Extension 接口 (normative)
104. Header：apext/sm/power_state_interface.h
105. Non-Member 类型
106. Class：PowerStateInterface
107. Public Member Functions
108. Member Functions
109. Not implemented 需求
110. History of Constraints and 规范 Items
111. Constraint and 规范 Item Changes between AUTOSAR Release R25-11 and R26-11
112. Added 规范 Items in R26-11
113. Changed 规范 Items in R26-11
114. Deleted 规范 Items in R26-11
115. Added Constraints in R26-11
116. Changed Constraints in R26-11
117. Deleted Constraints in R26-11
118. Constraint and 规范 Item Changes between AUTOSAR Release R24-11 and R25-11
119. Added 规范 Items in R25-11
120. Changed 规范 Items in R25-11
121. Deleted 规范 Items in R25-11
122. Added Constraints in R25-11
123. Changed Constraints in R25-11
124. Deleted Constraints in R25-11
125. Constraint and 规范 Item Changes between AUTOSAR Release R23-11 and R24-11
126. Added 规范 Items in R24-11
127. Changed 规范 Items in R24-11
128. Deleted 规范 Items in R24-11
129. Added Constraints in R24-11
130. Changed Constraints in R24-11
131. Deleted Constraints in R24-11
132. Constraint and 规范 Item Changes between AUTOSAR Release R22-11 and R23-11
133. Added 规范 Items in R23-11
134. Changed 规范 Items in R23-11
135. Deleted 规范 Items in R23-11
136. Added Constraints in R23-11
137. Changed Constraints in R23-11
138. Deleted Constraints in R23-11
139. Constraint and 规范 Item Changes between AUTOSAR Release R21-11 and R22-11
140. Added 规范 Items in R22-11
141. Changed 规范 Items in R22-11
142. Deleted 规范 Items in R22-11
143. Added Constraints in R22-11
144. Changed Constraints in R22-11
145. Deleted Constraints in R22-11
146. Constraint and 规范 Item Changes between AUTOSAR Release R20-11 and R21-11
147. Added 规范 Items "in R21-11"
148. Changed 规范 Items "in R21-11"
149. Deleted 规范 Items "in R21-11"
150. Added Constraints "in R21-11"
151. Changed Constraints "in R21-11"
152. Deleted Constraints "in R21-11"
153. Constraint and 规范 Item Changes between AUTOSAR Release R19-11 and R20-11
154. Added 规范 Items in R20-11
155. Changed 规范 Items in R20-11
156. Deleted 规范 Items in R20-11
157. Added Constraints in R20-11
158. Changed Constraints in R20-11
159. Deleted Constraints in R20-11
160. Constraint and 规范 Item Changes between AUTOSAR Release R19-03 and R19-11
161. Added 规范 Items in 19-11
162. Changed 规范 Items in 19-11
163. Deleted 规范 Items in 19-11
164. Added Constraints in 19-11
165. Changed Constraints in 19-11
166. Deleted Constraints in 19-11
167. Constraint and 规范 Item Changes in AUTOSAR Release R19-03
168. Added 规范 Items in 19-03
169. Changed 规范 Items in 19-03
170. Deleted 规范 Items in 19-03
171. Added Constraints in 19-03
172. Changed Constraints in 19-03
173. Deleted Constraints in 19-03
