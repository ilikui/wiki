# Specification of Health Monitoring (`HealthMonitoring`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | ASWS — 自适应软件规范（Adaptive SWS） |
| UID | 850 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_ASWS_HealthMonitoring_850\AUTOSAR_FO_ASWS_HealthMonitoring.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_ASWS_HealthMonitoring_850\AUTOSAR_FO_ASWS_HealthMonitoring.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_ASWS_HealthMonitoring_850\zzgen\FO_ASWS_HealthMonitoring.complete.txt`

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

### 2. Input documents and related standards and norms

This document specifies the functionality on the Health Monitoring and System Health Monitoring.

Health Monitoring is required by  (under the terms control flow monitoring, external monitoring facility, watchdog, logical monitoring, temporal monitoring, program sequence monitoring) and this specification is supposed to address all relevant requirements from this standard.

Health monitoring has the following error detection functions:

# Alive Supervision - checking if Checkpoints happens with a correct frequency
# Deadline Supervision - checking the delta time between two Checkpoints
# Logical Supervision - checking for correct sequence of execution of Checkpoints

The Health Monitoring is supposed to be implemented by AUTOSAR classic platform and AUTOSAR adaptive platform. It may be implemented by other platforms as well.

The Health Monitoring requirements are specified in .

The System Health Monitoring introduces platform agnostic health monitoring. It aims to abstract the health monitoring on a system level by sharing of health information between different Adaptive, Classic or non-AUTOSAR platforms.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Health Monitoring that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| SE | Supervised Entity. |
| SOTIF | Safety Of The Intended Functionality . |

| Technical Term: | Description: |
|---|---|
| Alive Indication | An indication of a Supervised Entity to signal its aliveness by calling a checkpoint used for Alive Supervision. |
| Alive Supervision | Kind of supervision that checks if a Supervised Entity executed in a correct frequency. |
| Checkpoint | A point in the control flow of a Supervised Entity where the activity is reported. |
| Deadline Supervision | Kind of supervision that checks if the execution time between two Checkpoints is within minimum/maximum time limit. |
| Elementary Supervision Status | Status that represents the current state of an Alive Supervision, Deadline Supervision or Logical Supervision, based on the evaluation (correct/incorrect) of the supervision. |
| Final Checkpoint | The ending Checkpoint of a Graph. There can be zero or more Final Checkpoints for each Graph. |
| Global Supervision Status | Cumulative Supervision Status. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 相关文档
*原文标题：Related documentation*

### 5. 约束与假设
*原文标题：Constraints and assumptions*

### 6. 限制 and conditions of use
*原文标题：Limitations and conditions of use*

The logic for determination of Health Indicator values is not standardized as a part of AUTOSAR.

Logical Supervisions always start with the report of the first Checkpoint. The application / the integrator has to ensure that the processes coordinate each other accordingly (sequences according to configured graph), even if one or multiple of the processes restarts or the processes have to be configured to always restart together during Function Group State changes.

### 7. 需求追踪
*原文标题：Requirements Tracing*

| Requirement | Description | Satisfied by |
|---|---|---|
| Health Monitoring shall provide an Alive Supervision |  |  |
| Health Monitoring shall provide configurable tolerances for detected errors and configurable delays of error reactions. |  |  |
| Health Monitoring shall provide a Logical Supervision |  |  |
| Health Monitoring shall provide a Deadline Supervision |  |  |
| Health Monitoring shall support the supervision within and across Supervised Entities. |  |  |
| Health Monitoring shall support the supervision of concurrent and parallel Supervised Entities. |  |  |
| Health Monitoring shall support building safety-related systems. |  |  |
| System Health Monitor shall transmit Health Indicators as standardized service events |  |  |
| SHM shall receive relevant health information from local health monitors |  |  |
| Communication between SHM and local health monitors shall be E2E protected |  |  |
| SHM shall be platform agnostic |  |  |
| SHM shall determine Health Indicators. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 功能规范
*原文标题：Functional specification*

### 9. 功能概述
*原文标题：Functional Overview*

This section presents black-box functional overview of the Health Monitoring. It does not define any requirements nor details on the functionality.

### 10. 功能性接口
*原文标题：Functional Interfaces*

The Health Monitoring supervises the execution of a configurable number of Supervised Entitys and it also supervises their Health Status. When it detects a violation of the configured temporal and/or logical constraints on program execution or a violation of the configured health constraints, it triggers the appropriate error handlers. Health Monitoring controls also the Watchdogs correspondingly, see Figure .

The Health Monitoring function can be split as a daisy chain. Each Health Monitoring instance has the same interface to Supervised Entitys, Error handling and Watchdog. In addition, the interface between the instances of Health Monitoring is standardized as well - it carries the results of Health Monitoring as well as "raw data" (Checkpoint IDs, Health Status together with necessary context information). Each instance adds some context-specific data to Checkpoints (e.g. process/task id).

In the example below (Figure ), there are three instances of Health Monitoring, each having different usage scenarios.

The data exchanged between Health Monitoring instances is configurable.

These are known use cases for Health Monitoring instances:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 基础概念 - Supervised Entitys, Checkpoints, Graphs, Supervision 模式
*原文标题：Basic concepts - Supervised Entitys, Checkpoints, Graphs, Supervision Mode*

The Health Monitoring supervises the execution of software. The logical units of supervision are Checkpoints that belong to Supervised Entitys. There is no fixed relationship between Supervised Entitys and the architectural building blocks software, but typically a Supervised Entity may represent one software component.

The Checkpoints and Transitions between the Checkpoints form a Graph. The Checkpoints of a graph can belong to the same Supervised Entity or to different Supervised Entitys.

  Upstream requirements: ,
⌈
The Health Monitoring shall supervise graphs with checkpoints belonging to the same or different Supervised Entitys.
⌋

  Upstream requirements: ,
⌈
The Health Monitoring shall simultaneously supervise graphs of Supervised Entitys preempeted by other Supervised Entitys.
⌋

A Graph may have one or more initial Checkpoints and one or more final Checkpoints. Any sequence of starting with any Initial Checkpoint and finishing with any Final Checkpoint is correct (assuming that the checkpoints belong to the same Graph). After the final Checkpoint, any initial Checkpoint can be reported.

At runtime, Health Monitoring verifies if the configured Graphs are executed.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Execution of Supervision Functions

Health Monitoring offers Alive Supervision, Deadline Supervision, Logical Supervision and Health Channel Supervision. All supervision functions can be invoked independently.

### 13. Alive Supervision

Periodic Supervised Entitys have constraints on the number of times they are executed within a given time span. By means of Alive Supervision, The Health Monitoring checks periodically if the Checkpoints of a Supervised Entity have been reached within the given limits. This means that Health Monitoring checks if a Supervised Entity is run not too frequently or not too rarely.

### 14. Deadline Supervision

Non-cyclic Supervised Entitys have individual constraints on the timing between two Checkpoints. By means of Deadline Supervision, Health Monitoring checks the time span of transitions between two Checkpoints (one Source Checkpoint and one Target Checkpoint) of a Supervised Entity (for detection of early arrivals and delays), and elapsed time after the Source Checkpoints (for detection of timeouts). This means that Health Monitoring checks if some steps in a Supervised Entity take a time that is within the configured minimum and maximum limits.

### 15. Logical Supervision

Logical Supervision is a fundamental technique for checking the correct execution of embedded system software. Please refer to the safety standards (IEC 61508 or ISO26262) when Logical Supervision is required. Logical Supervision focuses on control flow errors, which cause a divergence from the valid (i.e. coded/compiled) program sequence during the error-free execution of the application. An incorrect control flow occurs if one or more program instructions are processed either in the incorrect sequence or are not even processed at all. Control flow errors can lead to data corruption, microcontroller resets, or fail-silence violations.

For the control flow graph this implies that every time the Supervised Entity reports a new Checkpoint, it must be verified that there is a Transition configured between the previous Checkpoint and the reported one.

### 16. Determination of Supervision Status

Based on the results of the Alive, Deadline and Logical supervision Functions, the Cumulative Supervision Status is calculated. Each status is determined by a state machine. For details of the state machine, please refer the specification in the corresponding platform ( and ).

### 17. Watchdog 控制
*原文标题：Watchdog Control*

Health Monitoring controls the hardware watchdog. When the Supervised Entitys are not correctly evaluated due to a programming error or memory failure in the watchdog protocol itself, it may still happen that the watchdog protocol erroneously sets the triggering condition and no watchdog reset will be caused. Therefore, it may be needed to use Supervised Entitys and Checkpoints (or some other internal supervision mechanism) within watchdog protocol itself, while avoiding recursion in watchdog protocol.

### 18. 错误处理
*原文标题：Error Handling*

Depending on the Local Supervision Status of each Supervised Entity and on the Global Supervision Status, the Health Monitoring initiates mechanisms to recover from supervision failures. These range from notifying a central error handler to a global reset of the ECU.

### 19. 功能性 Decomposition
*原文标题：Functional Decomposition*

The Health Monitoring has the following logical steps:

# Execution of all Supervision Functions - see
# Determination of Supervision Status - see
# Determination of Actions - see  and

The behavior of Health Monitoring is mode-dependent (see description of supervision mode in  and ).

### 20. Execution of Supervision Functions and Determination of Supervision Results

Supervised Entitys are the units of supervision for the Health Monitoring. Each Supervised Entitys (SupervisedEntity) can be supervised by a different supervision function or a combination of them.

The following three supervision functions are executed at this stage:

* Alive Supervision (see )
* Deadline Supervision (see )
* Logical Supervision (see )

Each of three Supervision Functions results with a list of Results of Supervision Function for each Supervised Entity (SupervisedEntity) (highlighted in Blue on Figure ), where each Result is either correct or incorrect.

At Health Monitoring initialization, all the Results are set to correct. This means that for every Supervised Entity (SupervisedEntity) there are three partial results (one from Alive Supervision, one from Deadline Supervision and one from Logical Supervision).

In a given mode, each Supervised Entity (SupervisedEntity) may have zero, one or more Alive Supervisions (AliveSupervision), each having one correct/incorrect result.

In a given mode, each Supervised Entity (SupervisedEntity) may have zero, one or more Deadline Supervisions (DeadlineSupervision), each having one correct/incorrect result.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Alive Supervision

The Alive Supervision (AliveSupervision) offers a mechanism to periodically check the execution reliability of one or several Supervised Entitys. This mechanism supports a check of cyclic timing constraints of independent Supervised Entitys.

### 22. Alive Supervision 配置
*原文标题：Alive Supervision Configuration*

To provide Alive Supervision (AliveSupervision), the Checkpoints and their timing constraints need to be configured. The simplest configuration for AliveSupervision is one Checkpoint without any Transitions, as shown in Figure )

Moreover, it is also possible to have more than one Checkpoint as shown in Figure )

Each Checkpoint can have its own set of AliveSupervision Parameters. Transitions are not used by AliveSupervision. Although each Checkpoint has its own parameters, it is the SupervisedEntity for which status is determined based on the frequency of Checkpoints.

The parameters of the AliveSupervision depend on the Supervision Mode and are defined per Checkpoint (and not globally for the whole SupervisedEntity).

None, some, or all of theCheckpoints of a SupervisedEntity can be configured for AliveSupervision in a given Mode. Moreover, in each Mode the AliveSupervision options of Checkpoints can be different.

The ExpectedAliveIndications (EAI) specifies the amount of expected alive indications from a given Checkpoint, within a fixed period of supervision cycles. The period length is defined by AliveReferenceCycle.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Alive Supervision Algorithm

To send an Alive Indication, a Supervised Entity (SupervisedEntity) invokes the function ReportCheckpoint, which results with incrementation of an Alive Counter for the Checkpoint.

The periodic examination of the Counter of each Checkpoint of a SupervisedEntity by the Health Monitoring happens at every AliveReferenceCycle.

The Alive Reference Cycle (see AliveReferenceCycle) is the property of an AliveSupervision of a Checkpoint in a given Supervision Mode.

  Upstream requirements: ,
⌈
The Health Monitoring shall perform for each Alive Supervision (AliveSupervision) configured in the active Mode, the examination of the Alive Counter of each Checkpoint of the SupervisedEntity. The examination shall be done at the period AliveReferenceCycle of the corresponding Alive Supervision (AliveSupervision).
⌋

  Upstream requirements: ,
⌈
The Health Monitoring shall examine an Alive Counter by checking if it is within the allowed tolerance (Expected - Min Margin; Expected + Max Margin) (see ExpectedAliveIndications, MinMargin, MaxMargin).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Deadline Supervision

Deadline Supervision (DeadlineSupervision) checks the timing constraints of non-cyclic Supervised Entitys. In these Supervised Entitys, a certain event happens and a following event happens within a given time span. This time span can have a maximum and minimum deadline (time window).

### 25. Deadline Supervision 配置
*原文标题：Deadline Supervision Configuration*

For every DeadlineSupervision, two Checkpoints connected by a Transition are configured. The Deadline is attached to the Transition from the Source Checkpoint to the Target Checkpoint. The simplest DeadlineSupervision configuration contains two Checkpoints and one Transition, as shown in Figure )

More than one Transition can be defined in a SupervisedEntity. The Transitions and the Checkpoints do not have to form a closed graph. Since only the Source and the Target Checkpoints are considered by this Supervision Function, there can be independent graphs, as shown in Figure ). Moreover, the Checkpoints can be chained.

The configuration of DeadlineSupervision is similar to the one of AliveSupervision.

The parameters of the Deadline Supervision (see DeadlineSupervision) depend on the Supervision Mode (ModeDependentSettings) and are defined for per a set of two Checkpoints. None, some, or all of the Checkpoints of a SupervisedEntity can be configured for DeadlineSupervision in a given Mode.

A DeadlineSupervision is defined as a set of Transitions with time constraints.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Deadline Supervision Algorithm

When a Source Checkpoint (i.e. the Source Checkpoint referenced by the CheckpointTransition, see DeadlineSupervision) or a Target Checkpoint is reached, a SupervisedEntity invokes the function ReportCheckpoint, which will calculate the time expired between the Source Checkpoint and the Target Checkpoint.

The calculation is performed either at the occurrence of the Target Checkpoint or at the moment the elapsed time after Source Checkpoint is above the maximum limit (MaxDeadline).

  Upstream requirements: ,
⌈
If the time difference between the Target Checkpoint and the Source Checkpoint is not within the minimum and the maximum limits (that is, the time difference is either less than MinDeadline or greater than MaxDeadline), then the result of DeadlineSupervision for this SupervisedEntity shall be defined as incorrect. Otherwise, it shall be defined as correct.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Logical Supervision

Logical Supervision checks if the code of Supervised Entitys is executed in the correct sequence.

### 28. Logical Supervision 配置
*原文标题：Logical Supervision Configuration*

For every Logical Supervision (LogicalSupervision), there is a Graph of Checkpoints connected by Transitions. The Graph abstracts the behavior of the SupervisedEntity. There is a 1 to 1 correspondance between a Graph and the LogicalSupervision container.

In addition, a Checkpoint shall belong to maximum one internal Graph.

As an example for a SupervisedEntity, let us consider the following code fragment, which contains the Checkpoints CP0-0 to CP0-6.

This SupervisedEntity can be represented by the Graph shown in Figure .

A more abstract view of the SupervisedEntity is given by the Graph shown in Figure ), where the Checkpoint CP0-1 represents the complete while loop.

In a Graphs, Checkpoints can belong to the same SupervisedEntity or to different Supervised Entitys, no restriction is imposed. The transitions between Checkpoints in a Graph are dependent on the Supervision Mode.

The parameters of the Graphs (see LogicalSupervision) are the Transitions that are contained in a Supervision Mode (see ModeDependentSettings). Each Transition connects two Checkpoints. The Checkpoints exist irrespective if they are connected by any transitions.

### 29. Logical Supervision Algorithm

Immediately after initialization of the Health Monitoring, there has not yet been a Checkpoint reported, i.e. all the Supervised Entitys are passive. Each Graph is considered as inactive.

Each Graph represents one LogicalSupervision, but it may spans across possibly several Supervised Entitys. Assuming N Graphs that cross a Supervised Entity, this implies N results from the LogicalSupervision for the SupervisedEntity

  Upstream requirements: ,
⌈
The Health Monitoring shall mantain the activity status of each Graph.
⌋

  Upstream requirements: ,
⌈
At the initialization, the Health Monitoring shall consider each Graph as inactive.
⌋

Each Graph may have one or more Initial Checkpoints. Initial Checkpoints are Checkpoints with which a Graph can start.

To notify reaching a Checkpoint, a SupervisedEntity invokes the function ReportCheckpoint, which results with execution of Logical Supervision algorithm.

Because a Checkpoint can belong to only one internal Graph, the function ReportCheckpoint is able to identify to which Graph a Checkpoint belongs to.

  Upstream requirements: ,
⌈
The function ReportCheckpoint shall identify to which one Graph a reached Checkpoint belongs.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 系统 Health Monitoring
*原文标题：System Health Monitoring*

The previous chapters described Health Monitoring on platform level. In a distributed system using different platforms AP, CP, Non-AUTOSAR, a global monitor is necessary for evaluating and sharing health information on a vehicle level.

A standardized format for Health Indicator will be introduced for sharing health information of platforms, features, domains or even vehicles. These Health Indicator can either be used for platform level recovery actions, or to enhance services with a Health of Service, similar to Quality of Service (QoS).

Abstract interfaces for System Health Monitor to local health monitors shall be specified, allowing platform agnostic health management of several Adaptive, Classic and third-party platforms.

### 31. 系统 Health Monitoring 架构
*原文标题：System Health Monitoring Architecture*

The SystemHealthMonitor is intended for platform agnostic safety monitoring. For this reason the SystemHealthMonitor is introduced as an abstract component according to `AUTOSAR_TPS_AbstractPlatformSpecification`. A SystemHealthMonitor gathers health information of abstract LocalHealthMonitors. These LocalHealthMonitors are deployed on platform level and collect the health information of the platform itself. The LocalHealthMonitor on platform level might be implemented as a client SystemHealthMonitor as seen in the , or some functional cluster. The local information might include monitoring results of Platform Health Monitor(in AP)/Watchdog Manager(in CP), State Manager(in AP)/Basic Software Mode Manager(in CP) or hardware information e.g highTemp. Components like the State Manager are highly project specific and it can thus not be fully standardized which information the LocalHealthMonitor reports.

The collected information can be used to create a platform Health Indicator, giving an overall estimation of the platform health.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Concept of Health Indicator

Health Indicators provide an evaluation metric of current system performance with regard to safety requirements. Health information of safety monitors is analyzed and used to determine Health Indicators on different abstraction levels. The Health Indicator is defined as a tuple of ID, Performance, Reliability, Timestamp and SubsystemState. The Performance rates the performance with respect to malfunctioning behavior. Reliability evaluates how much to trust the system due to uncertainties. SubsystemState is a systemspecific Health status of the Subsystem Sub = {sub_(1),..., sub_(n)}. Different SubsystemStates are based on availability and availability requirements. Health Indicators can be results of supervisions on hardware, software, user, or the vehicle's environment. Combining monitoring results with well-defined safety properties, a corresponding health triple is determined. The three core parameters of the Health Indicator are supposed to capture different safety aspects required by different safety standards. The Degradation parameter is operating at the most abstract level. Only based on binary availability indications an overall degradation state is determined.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Application 接口
*原文标题：Application interfaces*

For reporting the actual health information a standardized interface shall be used. The platform HealthIndicator can be provided over the interface defined in  and local health information defined in . Local health information can contain health information from functional clusters e.g. supervision results from PHM/SM or external monitors (e.g voltage monitor). These interfaces are described as service interfaces in

### 34. Usage of HealthIndicators

Health Indicators can be used for directly exchanging health information of subsystems. Each consumer interested in a specific Health Indicator can access it over the HealthIndicatorInterface. Local platform managers (State Manager/Basic Software Mode Manager) could use the HIs of other platforms to degrade their own platform or activate backup functions, for platforms with bad health. This would allow decentralized system degradation across multiple platforms. Similarly applications might want to know the HI of features providing them with input, in order to decide whether to trust this information.

### 35. Health Monitoring API 规范
*原文标题：Health Monitoring API specification*

This chapter specifies the API of Health Monitoring that is referred in other document parts. It is defined in generic/abstract way, so that it can be implemented on different platforms. For exact API name and semantics please refer to corresponding Platform specific documents ( in case of Classic Platform and  in case of Adaptive platform).

### 36. Provided API

### 37. Reporting Checkpoints

Health Monitoring provides a method to report the current code location, represented by a Checkpoint

ReportCheckpoint(CheckpointID id)

### 38. Reporting health status

Health Monitoring provides a method to report the health status information

ReportHealthStatus(HealthStatusID id, HealthStatus status)

### 39. Forwarding information between health monitoring components

Health Monitoring provides a method to report the information collected and determined by one Health Monitoring component, so that they can be forwarded to another Health Monitoring component.

ReportHealthMonitoring(HealthMonitoring montoringData)

### 40. Init / DeInit

Health Monitoring provides a method to initialize the service.

Init()

Health Monitoring provides a method to deinitialize the service.

DeInit()

### 41. Retrieving Supervision Status from application

Health Monitoring provides a method to report the Local Status of a Supervised Entity to the application.

GetLocalStatus(LocalStatusType* LocalStatus)

Health Monitoring provides a method to report the Global Status to which the specified Supervised Entity belongs to the application.

GetGlobalStatus(GlobalStatusType* GlobalStatus)

### 42. Assumed API

This section specified an API that is used by Health Monitoring.

### 43. Triggering 错误处理
*原文标题：Triggering error handling*

Health Monitoring provides a method to trigger a defined error handler, providing the identifier of this error.

TriggerErrorHandler(ErrorID id)

### 44. Controlling watchdog

Health Monitoring provides a method to control the watchdog drivers.

ControlWatchdog(ControlData control)

### 45. 配置 Parameters
*原文标题：Configuration Parameters*

This chapter specifies a configuration model of Health Monitoring. The options defined here are referenced/used in chapter .

This configuration, which is abstract and platform-independent is supposed to be implemented/instantiated by the specific platforms, e.g. by AUTOSAR AP.

### 46. Overall 配置
*原文标题：Overall configuration*

The configuration of a machine (representing MCU, virtual machine, partition) is split into two categories:

# ModeIndependentSettings - containing only static information: what are possible SupervisedEntitys and possible Health Channels
# ModeDependentSettings - containing all supervision function configurations.

It means all supervision configuration is fully mode-dependent.

A system is made of several machines. Therefore, Health Monitoring is allocated to a specific machine.

It is possible that there are several independent suppliers of software for the same machine. Therefore, each of suppliers can supply any part of the configuration, for any configuration classes.

ModeDependentSettings contains also the configuration of watchdogs - but this part is not standardized (marked in blue).

The definitions of machines (machines/virtual machines/partitions) are assumed to be provided externally (by other specifications) therefore they are only referenced here.

### 47. Mode-independent settings

ModeIndependentSettings contain static information: what are possible SupervisedEntitys and possible Health Channel.

Implementation hint: This part of configuration is typically used to generate the type-safe API to Applications.

### 48. Supervised Entity

A SupervisedEntity is a collection of Checkpoints that can occur during the runtime of a software.

A SupervisedEntity has the following options:

# Name: Globally unique name identifier, used by Applications
# ID: Globally unique identifier (number)

Note that on AUTOSAR AP, the uniqueness of the name can be ensured by using a namespace as a part of the identificaiton.

A Checkpoint has the following options:

# Name: Name, used by Applications, unique within the SupervisedEntity.
# ID: Identifier of the Checkpoint, unique within the SupervisedEntity.

Note: On AUTOSAR AP, a Supervised Entity results with an enum, named after the Supervised Entitys namespace and name, with the enumerations corresponding to the checkpoints.

### 其余 28 章（内容从略，见纯文本全文）

49. Mode-dependent settings
50. Alive Supervision
51. Deadline Supervision
52. Logical Supervision
53. Global Supervision
54. 服务接口
55. 类型定义
56. Provided 服务接口
57. HealthIndicator
58. HealthInfo
59. 附录
60. History of Constraints and 规范 Items
61. Change History of this document according to AUTOSAR Release R25-11
62. Added 规范 Items in R25-11
63. Changed 规范 Items in R25-11
64. Deleted 规范 Items in R25-11
65. Change History of this document according to AUTOSAR Release R24-11
66. Added 规范 Items in R24-11
67. Changed 规范 Items in R24-11
68. Deleted 规范 Items in R24-11
69. Change History of this document according to AUTOSAR Release R23-11
70. Added 规范 Items in R23-11
71. Changed 规范 Items in R23-11
72. Deleted 规范 Items in R23-11
73. Change History of this document according to AUTOSAR Release R22-11
74. Added 规范 Items in R22-11
75. Changed 规范 Items in R22-11
76. Deleted 规范 Items in R22-11
