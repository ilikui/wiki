# Specification of Execution Management (`ExecutionManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 721 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_ExecutionManagement_721\AUTOSAR_AP_SWS_ExecutionManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_ExecutionManagement_721\AUTOSAR_AP_SWS_ExecutionManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_ExecutionManagement_721\zzgen\AP_SWS_ExecutionManagement.complete.txt`

## 文档简介

This document is the software specification of the Execution Management functional cluster within the Adaptive Platform Foundation.

Execution Management is responsible for the management of all aspects of system execution including platform initialization and the startup / shutdown of applications. Execution Management works with, and configures, the Operating System to perform run-time scheduling of applications.

Section  describes how Execution Management concepts are realized within the AUTOSAR Adaptive Platform.

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document is the software specification of the Execution Management functional cluster within the Adaptive Platform Foundation.

Execution Management is responsible for the management of all aspects of system execution including platform initialization and the startup / shutdown of applications. Execution Management works with, and configures, the Operating System to perform run-time scheduling of applications.

Section  describes how Execution Management concepts are realized within the AUTOSAR Adaptive Platform.

### 2. What is Execution 管理
*原文标题：What is Execution Management*

Execution Management is the functional cluster within the Adaptive Platform Foundation that is responsible for platform initialization and the startup and shutdown of Modelled Processes. Modelled Processes are self-contained, e.g. have internal control of thread creation. Execution Management performs these tasks using information contained within one or more Manifest content such as when and how Executables should be started. Execution Management also provides support for State Management (see Section ) and Security (Section ).

### 3. Interaction with AUTOSAR Runtime for Adaptive

The set of programming interfaces to the Adaptive Applications is called AUTOSAR Runtime for Adaptive (ARA). The interfaces that constitute ARA include those of Execution Management specified in Section .

Execution Management, in common with other applications is assumed to be a Process executed on a POSIX compliant operating system. Execution Management is responsible for initiating execution of the Processes in all the Functional Clusters, Adaptive AUTOSAR Services, and user-level applications. Therefore, Execution Management has no standardized dependencies. The launching order of applications is derived by Execution Management according to the specification defined in this document to ensure proper startup of the AUTOSAR Adaptive Platform.

The Adaptive AUTOSAR Services are provided via mechanisms provided by the Communication Management functional cluster  of the Adaptive Platform Foundation. In order to use the Adaptive AUTOSAR Services, the functional clusters in the Adaptive Platform Foundation must be properly initialized beforehand. Please refer to the respective specifications regarding more information on Communication Management.

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Term | Description |
|---|---|
| Reporting Process | A type of Modelled Process with an associated Executable where reportingBehavior is omitted ( ) or set to reportsExecutionState. A Reporting Process is expected to report its Execution State to Execution Management. |
| Non-reporting Process | A type of Modelled Process with an associated Executable where reportingBehavior is set to doesNotReportExecutionState ( ). Please note that the Non-reporting Process was not developed for the AUTOSAR Adaptive Platform and for this reason it is not using Adaptive Platform Services. For example, it is not using ara::exec::ExecutionClient API and therefore cannot report Execution State to Execution Management. In general, this type of a Process is intended to allow integration of a software that cannot be modified for use with the AUTOSAR Adaptive Platform. |
| Companion Process | A type of Reporting Process that is associated with Non-reporting Process and used to determine when functionality expected from Non-reporting Process is available. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 已知限制
*原文标题：Known Limitations*

This chapter lists known limitations of Execution Management and their relation to this release of the AUTOSAR Adaptive Platform with the intent to provide an indication how Execution Management within the context of the AUTOSAR Adaptive Platform will evolve in future releases.

The following functionality is mentioned within this document but is not fully specified in this release:

* Section  Resource Limitation and Section  Fault Tolerance have been expanded in this release, but are not complete. In particular the contents will be expanded with more properties and formal requirements in the next release.

Appendix  details requirements from Execution Management Requirement Specification  that are not elaborated within this specification. The presence of these requirements in this document ensures that the requirement tracing is complete and also provides an indication of how Execution Management will evolve in future releases of the AUTOSAR Adaptive Platform.

The functionality described above is subject to modification and will be considered for inclusion in a future release of this document.

### 10. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 11. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

Figure  shows the interfaces provided by Execution Management to other Functional Clusters within the AUTOSAR Adaptive Platform.

Figure  shows the interfaces provided by Execution Management to State Management.  provides a complete list of interfaces provided to other Functional Clusters within the AUTOSAR Adaptive Platform.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| ExecutionClient | Automotive API Gateway |  |
| ^ | Communication Management |  |
| ^ | Cryptography |  |
| ^ | Diagnostic Management | This interface is used to report the status of the Diagnostic Management daemon process(es). |
| ^ | Firewall |  |
| ^ | Intrusion Detection System Manager |  |
| ^ | Network Management |  |
| ^ | Platform Health Management | Platform Health Management uses this interface to report the state of its daemon process to Execution Management. |
| ^ | State Management | This interface shall be used to report the state of the State Management process(es). |
| ^ | Time Synchronization | Time Synchronization shall use this interface to report the state of its daemon process. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

Figure  shows the interfaces required by Execution Management from other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of required interfaces from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Log and Trace | Logger | Execution Management shall use this interface to log standardized messages. |
| Platform Health Management | SupervisedEntity | Execution Management shall use this interface to enable supervision of its process(es) by Platform Health Management. |

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following table reference requirements specified in AUTOSAR RS ExecutionManagement  and the AUTOSAR RS General , and it links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Compatibility with the ISO 14882 C++ standard |  |  |
| Header file name |  |  |
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Variable names |  |  |
| Enumerator and constant names |  |  |
| Usage of ara::core types |  |  |
| Error reporting |  |  |
| Public types defined by functional clusters shall be designed to allow implementation without dynamic memory allocation |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| noexcept behavior of class destructors |  |  |
| Connecting run-time interface with model |  |  |
| Return type of asynchronous function calls |  |  |
| Return type of synchronous function calls |  |  |
| Usage of "final specifier" |  |  |
| Handling of unsuccessful operations |  |  |
| Use 32-bit integral types by default |  |  |
| Availability of a named constructor |  |  |
| Availabi |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

Execution Management is a functional cluster contained in the Adaptive Platform Foundation. Execution Management is responsible for all aspects of system execution management including platform initialization and startup / shutdown of applications.

Execution Management works in conjunction with the Operating System. In particular, Execution Management is responsible for configuring the Operating System to perform run-time scheduling and resource monitoring of applications.

This chapter describes the functional behavior of Execution Management.

* Section  presents an introduction to key terms within Execution Management focusing on the relationship between application, Executable, and Modelled Process. With the latter, we refer to an instance of the meta-model describing a Process, it will eventually be realized by an operating system Process.
* Section  covers the core Execution Management run-time responsibilities including the start of applications.
* Section  describes the lifecycle of applications including Modelled Process state transitions and startup / shutdown sequences.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Technical 概述
*原文标题：Technical Overview*

This chapter presents a short summary of the relationship between application, Executable, and Modelled Process.

### 16. Executable

An Executable is a software unit which is part of an application. It has exactly one entry point (main function) . An application can be implemented in one or more Executables  .

The lifecycle of Executables usually consists of:

| process Step | Software | Meta Information |
|---|---|---|
| Development and Integration | Linked, configured and calibrated binary for deployment onto the target Machine. The binary might contain code which was generated at integration time. | Execution Manifest, see Section  and , and Service Instance Manifest (not used by Execution Management). |
| Deployment and Removal | Binary installed on the target Machine. Previous version (if any) removed. | Processed Manifests, stored in a platform-specific format which is efficiently readable at Machine startup. |
| Execution | Process started as instance of the binary. | The Execution Management uses contents of the Processed Manifests to start up and configure each Process individually. |

Executables which belong to the same Adaptive Application might need to be deployed to different Machines, e.g. to one high performance Machine and one high safety Machine.

Figure  shows the lifecycle of an Executable from deployment to execution.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Modelled Process

A Modelled Process is an instance of an Executable. On the AUTOSAR Adaptive Platform, a Modelled Process is realized at run-time as an OS Process. For details on how Execution Management starts and stops Processes see Section .

Execution Management treats all Executables and the derived Modelled Processes the same way, independent of application boundaries.

Remark: In this release of this document it is mostly assumed that Processes are self-contained, i.e. that they take care of controlling thread creation and scheduling by calling APIs of the Operating System Interface from within the code. Execution Management only starts and terminates the Processes and while the Processes are running, Execution Management only interacts with the Processes by providing State Management mechanisms (see Section ).

### 18. 执行清单
*原文标题：Execution Manifest*

An Execution Manifest is created together with a Service Instance Manifest (not used by Execution Management) at design time and deployed onto a Machine together with the Executable it is attached to.

The Execution Manifest specifies the deployment related information of an Executable and describes in a standardized way the machine specific configuration of Modelled Process properties (startup parameters, resource group assignment, scheduling priorities etc.).

The Execution Manifest is bundled with the actual executable code in order to support the deployment of the executable code onto the Machine.

Each instance of an Executable binary, i.e. each started Process, is individually configurable, with the option to use a different configuration set per Machine State or per Function Group State (see Section  and , ,  and  ).

To perform its necessary actions, Execution Management imposes a number of requirements on the content of the Machine Manifest and Execution Manifest. The validation of the configuration is expected to be done by the vendor tooling.

For more information regarding the Execution Manifest specification please see .

### 19. 机器清单
*原文标题：Machine Manifest*

The Machine Manifest is also created at integration time for a specific Machine and is deployed like Execution Manifests whenever its contents change. The Machine Manifest holds all configuration information which cannot be assigned to a specific Executable or its instances (the Modelled Processes), i.e. which is not already covered by an Execution Manifest or a Service Instance Manifest.

The contents of a Machine Manifest includes the configuration of Machine properties and features (resources, safety, security, etc.). For details see .

### 20. 清单 Format
*原文标题：Manifest Format*

The Execution Manifests and the Machine Manifest can be transformed from the original standardized ARXML into a platform-specific format (called Processed Manifest), which is efficiently readable at Machine startup. The format transformation can be done either off board at integration time or at deployment time, or on the Machine (by Update and Configuration Management) at installation time.

### 21. Execution 管理 Responsibilities
*原文标题：Execution Management Responsibilities*

Execution Management is responsible for all aspects of Process execution management. A Process is a loaded instance of an Executable, which is part of an application.

Execution Management is started as part of the AUTOSAR Adaptive Platform startup phase and is responsible for starting and terminating Processes.

Execution Management determines when, and possibly in which order, to start or stop Processes, i.e. instances of the deployed Executables, based on information in the Machine Manifest and Execution Manifests.

Execution Management ensures that the integrity and authenticity of all Executables and Executable-related data (e.g. manifests) is checked. In the case of a failed integrity or authenticity check, Execution Management carries out the measures defined in Section .

 Default value for permissionToCreateChildProcess attribute
  Upstream requirements:
⌈
A Modelled Process without a specified permissionToCreateChildProcess attribute shall be considered by Execution Management as though the attribute was set to false.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 错误处理
*原文标题：Error handling*

All API operations can potentially raise errors.

 Obtain error information
  Upstream requirements:
⌈
According to Adaptive Platform Core , Execution Management shall provide means to obtain information about errors that occurred during API calls. For that reason, Execution Management can return the following errors:

* ara::exec::ExecErrc
* ara::exec::ExecException
* ara::exec::ExecException::ExecException
* ara::exec::ExecErrorDomain
* ara::exec::ExecErrorDomain::ExecErrorDomain
* ara::exec::ExecErrorDomain::Name
* ara::exec::ExecErrorDomain::Message
* ara::exec::GetExecErrorDomain
⌋

 Create error information
  Upstream requirements:
⌈
According to Adaptive Platform Core , Execution Management shall provide means to create error information as listed below.

* ara::exec::ExecErrorDomain::ThrowAsException
* ara::exec::MakeErrorCode
⌋

### 23. Process Lifecycle 管理
*原文标题：Process Lifecycle Management*

### 24. Execution 状态
*原文标题：Execution State*

Execution States characterizes the internal lifecycle of a Process. In other words, they describe it from the point of view of a Process that is executed. The states visible to the Process are defined by the ara::exec::ExecutionState enumeration, see .

The Execution State of a Process is used by Execution Management to construct and maintain the Process State as described in Section . Execution State change notifications from a Process result in Process State changes managed by Execution Management. The Execution State and Process State are maintained separately so that there is no explicit dependency between a Process's Execution State and Execution Management's Process State. This allows future evolution of Process State without impacting the internal Execution State of the Process.

### 25. 初始化
*原文标题：Initialization*

ExecutionClient usage restriction
  Upstream requirements:
⌈
The AUTOSAR Adaptive Platform implementation shall only allow a Process to report its own ExecutionState.
⌋

Because ara::exec::ExecutionClient handles the SIGTERM signal (see , , or ), it is not possible to have multiple instances of this class. Creating a second instance of ara::exec::ExecutionClient is unnecessary and creates ambiguity. Please consider following scenario, first instance is created with foo() as a termination handler and second instance is created with bar() as a termination handler. Which termination handler should be invoked, when SIGTERM is delivered?

 Single instance of ExecutionClient
  Upstream requirements:
⌈
ara::exec::ExecutionClient shall treat it as a ExecutionClientMultipleInstanceViolation, when additional instance is being created.
⌋

Execution Management considers Process initialization complete when the Process State Running is reached whether this is achieved implicitly (by a Non-reporting Process) or explicitly through a Process reporting its Execution State.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Termination

Initiation of Process termination
  Upstream requirements:
⌈
Execution Management shall initiate Process termination by sending the SIGTERM signal to the Process.
⌋

Note that from the perspective of Execution Management, requirement  only requests the initiation of the steps necessary for graceful termination under the control of the Process.

It is possible that a Process that should be terminated according to , e.g. during the handling of Execution Dependencies, is no longer alive. However, as Execution Management can determine the status of child Processes it would thus not attempt to terminate a Process that no longer exists.

Execution Management may send SIGTERM at any time, even before the Process has reported kRunning state and thus the Process is still in the Initializing Process State.

On receipt of SIGTERM, a Process commences the actual termination.

Execution Management provides a termination handler to minimize the required signal handling in the Adaptive Application (see ).

 Call of Termination Handler
  Upstream requirements:
⌈
On receipt of SIGTERM ara::exec::ExecutionClient shall invoke the termination handler defined by ara::exec::ExecutionClient::Create.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Abnormal Termination

Abnormal Termination of a Process
  Upstream requirements:
⌈
In case of Abnormal Termination outside a state transition resulting from previous request from ara::exec::StateClient::SetState, Execution Management shall perform the following actions:

# If Function Group State is not already set to an Undefined Function Group State,

  # Set the Function Group State (of the Function Group to which the relevant Modelled Process was mapped) to Undefined Function Group State.
  # Call undefinedStateCallback defined by ara::exec::StateClient with ara::exec::ExecutionErrorEvent.
# Log DltMessage ProcessAbnormalTermination.
⌋

Please note, that  prevent Execution Management from sending multiple notifications to State Management. If there is more than one failing Process, inside a Function Group State, notification will only be sent when a transition to an Undefined Function Group State happens.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Application Reporting

Correct Execution State reporting performed by Processes is a part of consistent behavior of Execution Management.

 Handling Execution State Running
  Upstream requirements:
⌈
Execution Management shall return kInvalidTransition when a Process reports Execution State kRunning (using the method ara::exec::ExecutionClient::ReportExecutionState) and the Process is not in Process State Starting.
⌋

To prevent denial-of-service attacks on Execution Management an implementation could rate-limit acceptance of Execution State reports or could request the Operating System to terminate the underlying Process. However such reactions are not standardized.

Execution Management differentiates between two types of Processes: Reporting Processes and Non-reporting Processes. Reporting Processes are considered to be the normal form of Processes and Non-reporting Processes are considered to be an exception.

Non-reporting Processes can be used to support running Executables which have not been designed with the AUTOSAR Adaptive Platform in mind.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Process States

Process States characterize the lifecycle of a Process from the point of view of Execution Management. In other words, Process States represent the Execution Management internal tracking of the Execution States (see Section ) and hence there is no need for a standardized type. Note that each Process is independent and therefore has its own Process State. Process State is used by Execution Management to resolve Execution Dependencies, manage timeouts, etc.

Additionally to the existing values for the Process State (Idle, Starting, Running, Terminating, Terminated), the implementation may define its own Process States, which are not in conflict/not replacing the existing ones.

 Idle Process State
  Upstream requirements:
⌈
The Idle Process State shall be the Process State prior to creation of the Process and to resource allocation.
⌋

 Starting Process State
  Upstream requirements:
⌈
The Starting Process State shall apply when the Process has been created and resources have been allocated.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 同步 with Platform Health 管理
*原文标题：Synchronization with Platform Health Management*

Platform Health Management requires Process State information for starting and stopping of Supervisions. For details see .

Platform Health Management needs the information that a Supervised Process reported Execution State kRunning () to start Alive Supervision.

 Report "kRunning received event" to Platform Health Management
  Upstream requirements:
⌈
Execution Management shall inform Platform Health Management if a Supervised Process has reported Execution State kRunning.
⌋

Platform Health Management needs the information that termination of a Supervised Process will be initiated () to stop Intra-Process Supervisions.

 Report "initiating Process termination" event to Platform Health Management
  Upstream requirements:
⌈
Execution Management shall inform Platform Health Management when a Supervised Process termination is about to be initiated.
⌋

Platform Health Management needs the information that a Supervised Process is terminated () to supervise Self-terminating Processes.

 Report "Process terminated" event to Platform Health Management
  Upstream requirements:
⌈
Execution Management shall inform Platform Health Management when a Supervised Process is terminated.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Trace Process 状态 Transitions
*原文标题：Trace Process State Transitions*

The timing behavior of Processes is a mandatory part of the lifecycle of an application. Wrong timing and timing shortages in Processes can lead to unexpected behavior or failures. Therefore it is important to provide a way to trace Process lifetime events within the Execution Management. The following trace points are introduced to be able to do a timing analysis of an application based on its Processes.

 State Transition logging - Process created
  Upstream requirements:
⌈
Whenever Execution Management has created a Process (see ), Execution Management shall log a DltMessage of type ProcessCreated.
⌋

 State Transition logging - Process kRunning received
  Upstream requirements:
⌈
Whenever Execution Management has received a kRunning (see ), Execution Management shall log a DltMessage of type ProcessKRunningReceived.
⌋

 State Transition logging - Process termination request
  Upstream requirements:
⌈
Whenever Execution Management is requesting a Process to be terminated (see ), Execution Management shall log a DltMessage of type ProcessTerminationRequest.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 启动 and Termination
*原文标题：Startup and Termination*

### 33. Execution Dependency

Execution Management can derive an ordering for the startup and termination of Processes within State Management framework based on the declared Execution Dependencies. This ensures that applications are started before dependent applications use the services that they provide and, likewise, that applications are shutdown only when their provided services are no longer required.

The Execution Dependencies, see  ,   and  , are configured in the Execution Manifests, which is created at integration time based on information provided by the application developer. An Execution Dependency defines the provider of functionality required by a Process necessary for that Process to provide its own functionality. Execution Management ensures the dependent Processes are in the state defined by the Execution Dependency before the Process defining the dependency is started.

Please note that Execution Dependencies do not determine which Processes should be started, they only determine the order in which they should be started. Special attention should be paid to   as this restricts usage of StateDependentStartupConfig across different Function Group States.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 182 章（内容从略，见纯文本全文）

34. Signal Mask
35. Arguments
36. Environment Variables
37. POSIX User and Group Identity 配置
38. Machine 启动 Sequence
39. 状态管理
40. 概述
41. Machine 状态
42. 启动
43. 关机/重启
44. 功能 Group 状态
45. 状态 Interaction
46. 状态 Transition
47. 资源限制
48. Resource 配置
49. Resource Monitoring
50. Application-level Resource 配置
51. CPU Usage
52. 核 Affinity
53. 调度
54. Resource 管理
55. 存储 Budget and Monitoring
56. Working Folder
57. Fault Tolerance
58. 简介
59. 范围
60. Threat 建模
61. Execution 管理 internal 错误处理
62. Security
63. Identity and Access 管理
64. 功能性 Cluster Lifecyle
65. 启动
66. 关机
67. 重启
68. Daemon crash
69. Reporting
70. 安全事件
71. Log Messages
72. Violation Messages
73. Production 错误
74. API 规范
75. Header：ara/exec/exec_error_domain.h
76. Non-Member 类型
77. Non-Member Functions
78. Other
79. Class：ExecErrorDomain
80. Public Member Functions
81. Special Member Functions
82. Member Functions
83. Class：ExecException
84. Public Member Functions
85. Constructors
86. Header：ara/exec/execution_client.h
87. Non-Member 类型
88. Class：ExecutionClient
89. Public Member Functions
90. Special Member Functions
91. Constructors
92. Member Functions
93. Header：ara/exec/execution_error_event.h
94. Non-Member 类型
95. Struct：ExecutionErrorEvent
96. Public Member Variables
97. Header：ara/exec/function_group.h
98. Class：FunctionGroup
99. Public Member Functions
100. Special Member Functions
101. Constructors
102. Member Functions
103. Header：ara/exec/function_group_state.h
104. Class：FunctionGroupState
105. Public Member Functions
106. Special Member Functions
107. Constructors
108. Member Functions
109. Header：ara/exec/state_client.h
110. Class：StateClient
111. Public Member Functions
112. Special Member Functions
113. Constructors
114. Member Functions
115. 服务接口
116. 配置
117. Default Values
118. Semantic Constraints
119. 附录
120. Mentioned 清单 Elements
121. Demands and constraints on Base 软件 (normative)
122. Platform Extension 接口 (normative)
123. Not implemented 需求
124. History of Constraints and 规范 Items
125. Traceable item history of this document according to AUTOSAR Release R26-11
126. Added 规范 Items in R26-11
127. Changed 规范 Items in R26-11
128. Deleted 规范 Items in R26-11
129. Added Constraints in R26-11
130. Changed Constraints in R26-11
131. Deleted Constraints in R26-11
132. Traceable item history of this document according to AUTOSAR Release R25-11
133. Added 规范 Items in R25-11
134. Changed 规范 Items in R25-11
135. Deleted 规范 Items in R25-11
136. Added Constraints in R25-11
137. Changed Constraints in R25-11
138. Deleted Constraints in R25-11
139. Traceable item history of this document according to AUTOSAR Release R24-11
140. Added 规范 Items in R24-11
141. Changed 规范 Items in R24-11
142. Deleted 规范 Items in R24-11
143. Added Constraints in R24-11
144. Changed Constraints in R24-11
145. Deleted Constraints in R24-11
146. Traceable item history of this document according to AUTOSAR Release R23-11
147. Added 规范 Items in R23-11
148. Changed 规范 Items in R23-11
149. Deleted 规范 Items in R23-11
150. Added Constraints in R23-11
151. Changed Constraints in R23-11
152. Deleted Constraints in R23-11
153. Traceable item history of this document according to AUTOSAR Release R22-11
154. Added 规范 Items in R22-11
155. Changed 规范 Items in R22-11
156. Deleted 规范 Items in R22-11
157. Added Constraints in R22-11
158. Changed Constraints in R22-11
159. Deleted Constraints in R22-11
160. Traceable item history of this document according to AUTOSAR Release R21-11
161. Added 规范 Items in R21-11
162. Changed 规范 Items in R21-11
163. Deleted 规范 Items in R21-11
164. Added Constraints in R21-11
165. Changed Constraints in R21-11
166. Deleted Constraints in R21-11
167. Traceable item history of this document according to AUTOSAR Release R20-11
168. Added 规范 Items in R20-11
169. Changed 规范 Items in R20-11
170. Deleted 规范 Items in R20-11
171. Added Constraints in R20-11
172. Changed Constraints in R20-11
173. Deleted Constraints in R20-11
174. Traceable item history of this document according to AUTOSAR Release R19-11
175. Added 规范 Items in R19-11
176. Changed 规范 Items in R19-11
177. Deleted 规范 Items in R19-11
178. Added Constraints in R19-11
179. Changed Constraints in R19-11
180. Deleted Constraints in R19-11
181. Traceable item history of this document according to AUTOSAR Release 19-03
182. Added 规范 Items in R19-03
183. Changed 规范 Items in R19-03
184. Deleted 规范 Items in R19-03
185. Added Constraints in R19-03
186. Changed Constraints in R19-03
187. Deleted Constraints in R19-03
188. Traceable item history of this document according to AUTOSAR Release 18-10
189. Added 规范 Items in 18-10
190. Changed 规范 Items in 18-10
191. Deleted 规范 Items in 18-10
192. Added Constraints in 18-10
193. Changed Constraints in 18-10
194. Deleted Constraints in 18-10
195. Traceable item history of this document according to AUTOSAR Release 18-03
196. Added 规范 Items in 18-03
197. Changed 规范 Items in 18-03
198. Deleted 规范 Items in 18-03
199. Added Constraints in 18-03
200. Changed Constraints in 18-03
201. Deleted Constraints in 18-03
202. Traceable item history of this document according to AUTOSAR Release 17-10
203. Added 规范 Items in 17-10
204. Changed 规范 Items in 17-10
205. Deleted 规范 Items in 17-10
206. Added Constraints in 17-10
207. Changed Constraints in 17-10
208. Deleted Constraints in 17-10
209. Traceable item history of this document according to AUTOSAR Release 17-03
210. Added 规范 Items in 17-03
211. Changed 规范 Items in 17-03
212. Deleted 规范 Items in 17-03
213. Added Constraints in 17-03
214. Changed Constraints in 17-03
215. Deleted Constraints in 17-03
