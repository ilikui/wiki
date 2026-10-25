# Specification of Watchdog Manager (`WatchdogManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 080 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_WatchdogManager_080\AUTOSAR_CP_SWS_WatchdogManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_WatchdogManager_080\AUTOSAR_CP_SWS_WatchdogManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_WatchdogManager_080\zzgen\CP_SWS_WatchdogManager.complete.txt`

## 文档简介

The Watchdog Manager is a basic software module at the service layer of the standardized basic software architecture of AUTOSAR.

The Watchdog Manager is able to supervise the program execution abstracting from the triggering of hardware watchdog entities.

The Watchdog Manager supervises the execution of a configurable number of so-called Supervised Entities. When it detects a violation of the configured temporal and/or logical constraints on program execution, it takes a number of configurable actions to recover from this failure.

The Watchdog Manager provides three mechanisms:

# Alive Supervision - for supervision of timing of periodic software
# Deadline Supervision - for supervision of timing of aperiodic software
# Logical Supervision - for supervision of the correctness of the execution sequence.

## 模块依赖

* The Watchdog Manager module is responsible for changing the mode of the Watchdog Driver and for reporting to the Watchdog Driver the condition to trigger the hardware watchdog. The services of the Watchdog Driver are accessed via the Watchdog Interface which allows addressing multiple watchdog instances.
* The ECU State Manager is responsible for initializing, de-initializing of the Watchdog Manager module and for triggering the hardware watchdog in sleep modes.
* The Watchdog Manager module may perform an immediate reset of the ECU in case of a supervision failure. This reset service is provided by the MCU driver.
* If development error detection is enabled, the Watchdog Manager module informs the Default Error Tracer about detected development errors.
* The Watchdog Manager may notify the Diagnostic Event Manager about detected functional / production-code relevant errors.
* The BSW Scheduler is responsible for calling the scheduled functions of the Watchdog Manager module. The Watchdog Manager module uses the services of the BSW Scheduler to implement critical sections.
* The Runtime Environment is responsible for propagating Checkpoint information from Supervised Entities in SW-Cs or in CDDs to the Watchdog Manager module. The Watchdog Manager module uses the services of the Runtime Environment to inform SW-Cs about changes in the supervision status. BSW Modules can call the Watchdog Manager module without using RTE.
* The Operating System is used by Watchdog Manager to provide the timestamp.
* SwCluC (introduced by Classic Platform Flexility Concept) can establish internal connection of WdgM over Software Clusters, by means of Binary Manifests. Note that, inter-EcucPartition connection within a WdgM will be established without SwCluC, as it's a part of BSW Multicore Distribution Concept and its way for implementation is not standardized (one of typical implementation method is master-satellite pattern).

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The Watchdog Manager is a basic software module at the service layer of the standardized basic software architecture of AUTOSAR.

The Watchdog Manager is able to supervise the program execution abstracting from the triggering of hardware watchdog entities.

The Watchdog Manager supervises the execution of a configurable number of so-called Supervised Entities. When it detects a violation of the configured temporal and/or logical constraints on program execution, it takes a number of configurable actions to recover from this failure.

The Watchdog Manager provides three mechanisms:

# Alive Supervision - for supervision of timing of periodic software
# Deadline Supervision - for supervision of timing of aperiodic software
# Logical Supervision - for supervision of the correctness of the execution sequence.

### 2. Supervised Entities and Checkpoints

The Watchdog Manager supervises the execution of software. The logical units of supervision are Supervised Entities. There is no fixed relationship between Supervised Entities and the architectural building blocks in AUTOSAR, i.e., SW-Cs, CDDs, RTE, BSW modules, but typically a Supervised Entity may represent one SW-C Prototype or one or more Runnable Entities within a SW-C Prototype, a BSW module instance or CDD instance depending on the choice of the developer.

Important places in a Supervised Entity are defined as Checkpoints. The code of Supervised Entities is interlaced with the calls of Watchdog Manager that report to the Watchdog Manager when they have reached a Checkpoint.

Each Supervised Entity has one or more Checkpoints. The Checkpoints and Transitions between the Checkpoints of a Supervised Entity form a Graph. This Graph is called Internal Graph. Moreover, Checkpoints from different Supervised Entities may also be connected by External Transition, forming an External Graph. There can be several External Graphs in each Watchdog Manager Mode.

A Graph may have one or more Initial Checkpoints and one or more Final Checkpoints.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Interaction of Supervision Mechanisms

The three supervision mechanisms supervise each Supervised Entity. A Supervised Entity may have one, two or three mechanisms enabled. Based on the results from each of enabled mechanisms, the status of the Supervised Entity (called Local Supervision Status) is computed.

When the status of each Supervised Entity is determined, then based on each Local Supervision Status, the status of the whole MCU is determined (called Global Supervision Status).

### 4. Supervision Functions

### 5. Alive Supervision

Periodic Supervised Entities have constraints on the number of times they are executed within a given time span. By means of Alive Supervision, Watchdog Manager checks periodically if the Checkpoints of a Supervised Entity have been reached within the given limits. This means, Watchdog Manager checks that a Supervised Entity is neither executed too frequently nor too rarely.

### 6. Deadline Supervision

Aperiodic or episodical Supervised Entities have individual constraints on the timing between two Checkpoints. By means of Deadline Supervision, Watchdog Manager checks the timing of transitions between two Checkpoints of a Supervised Entity. This means that Watchdog Manager checks if some steps in a Supervised Entity take a time that is within the configured minimum and maximum values. Watchdog Manager also detects no arrival to the second Checkpoint.

### 7. Logical Supervision

Logical Supervision is a fundamental technique for checking the correct execution of embedded system software. Please refer to the safety standards (IEC 61508  or ISO 26262 ) when Logical Supervision is required.

Logical Supervision focuses on control flow errors, which cause a divergence from the valid (i.e. coded/compiled) program sequence during the error-free execution of the application. An incorrect control flow occurs if one or more program instructions are processed either in the incorrect sequence or are not even processed at all. Control flow errors can lead to data corruption, microcontroller resets, or fail-silence violations.

For the Control Flow Graph this implies that every time the Supervised Entity reports a new Checkpoint, it must be verified that there is a Transition configured between the previous Checkpoint and the reported one.

### 8. Watchdog 处理
*原文标题：Watchdog Handling*

Watchdog Manager communicates with Watchdog Interface to control the hardware watchdog.

In contrast to versions before R4.0.1, the Watchdog Manager is no longer responsible for triggering the hardware watchdog via the Watchdog Interface and the Watchdog Driver. Instead, the Watchdog Manager reports via the Watchdog Interface a triggering condition to the Watchdog Driver. The Watchdog Driver is then responsible for triggering the hardware watchdog with the right timing for as long as the condition is true. The triggering condition is a counter value that the Watchdog Manager sets cyclically. The Watchdog Driver decrements this counter every time it triggers the hardware watchdog. When the counter reaches 0, the Watchdog Driver stops triggering the hardware watchdog. Therefore, when the Watchdog Manager fails to execute, this automatically causes a watchdog reset (after the time needed to decrement the counter plus the timeout value of HW watchdog).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 错误处理
*原文标题：Error Handling*

Depending on the Local Supervision Status of each Supervised Entity and on the Global Supervision Status, the Watchdog Manager initiates a number of mechanisms to recover from supervision failures. These range from local error recovery within the Supervised Entity to a global reset of the ECU.

### 10. 错误处理 in the Supervised Entity
*原文标题：Error Handling in the Supervised Entity*

In case the Supervised Entity is an SW-C or a CDD, then the Watchdog Manager may inform the Supervised Entity about supervision failures via the RTE Mode mechanism. The Supervised Entity may then take its actions to recover from that failure.

The Watchdog Manager may register an entry with the Diagnostic Event Manager (DEM) when it detects a supervision failure. A Supervised Entity may take recovery actions based on that error entry.

### 11. Reset by Hardware Watchdog

The Watchdog Manager indicates to the Watchdog Interface when Watchdog Interface shall no longer trigger the hardware watchdog. After the timeout of the hardware watchdog, the hardware watchdog resets the ECU or the MCU. This leads to a re-initialization of the ECU and/or MCU hardware and the complete reinitialization of software.

### 12. Immediate MCU Reset

In case an immediate, global reaction to the supervision failure is necessary, the Watchdog Manager may directly cause an MCU reset. This will lead to a re-initialization of the MCU hardware and the complete software. Usually, a MCU reset will not re-initialize the rest of the ECU hardware.

Note that a MCU reset is not available on some types of micro controllers.

MCU reset and watchdog reset are two mostly equivalent mechanisms for system-level error reaction. In safety-related systems, it is recommended to use both of them in parallel. By this means, the two mechanisms make a "redundant shutdown path".

### 13. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Watchdog Manager module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| AI | Alive Indication |
| EAI | Expected Alive Indications |
| SC | Supervision Cycle |
| SE | Supervised Entity |
| SRC | Supervision Reference Cycle |

| Term: | Description: |
|---|---|
| Alive Counter | An independent data resource in the Watchdog Manager in context of a Checkpoint to track and handle its amount of Alive Indications. |
| Alive Indication | An indication provided by a Checkpoint of a Supervised Entity to signal its aliveness to the Watchdog Manager. |
| Alive Supervision | Kind of supervision that checks if a Supervised Entity executed sufficiently often and not too often (including tolerances). |
| Checkpoint | A point in the control flow of a Supervised Entity where the activity is reported to the Watchdog Manager. |
| Deadline Supervision | Kind of supervision that checks if the execution time between two Checkpoints are lower than a given upper execution time limit. |
| Deadline Start Checkpoint | A Checkpoint for which Deadline Supervision is configured and which is a starting point for a particular Deadline Supervision. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 相关文档
*原文标题：Related documentation*

### 15. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 16. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules  (SWS BSW General), which is also valid for Watchdog Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Watchdog Manager.

### 17. 约束与假设
*原文标题：Constraints and assumptions*

### 18. 限制 and conditions of use
*原文标题：Limitations and conditions of use*

The main limitations of Watchdog Manager design are as follows. They may be removed in upcoming versions of this document:

* A Supervised Entity cannot span over multiple EcucPartitions.
* Handling of unconnected transition proxies for Logical Supervision based on Cross-Cluster External Graph by Watchdog Manager is unspecified in this release.
* As libraries cannot call BSWs, libraries cannot be supervised by Watchdog Manager.
* The nesting of Deadline Supervision (i.e. start 1, start 2, end 2, end 1) is not supported.
* The Alive Supervision function with more than one Checkpoint per Supervised Entity is not consistently specified within the document. For now, it is recommended to support only one Alive Supervision Checkpoint per Supervised Entity.

Further limitations:

* The Watchdog Manager does not encapsulate the Watchdog Driver initialization. The Watchdog Driver must be initialized by  in the startup process before the initialization of the Watchdog Manager.
* The Watchdog Manager is initialized after the OS has been started. Hence, it cannot be responsible for controlling the Watchdog Driver earlier in the startup process.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 适用的车型领域
*原文标题：Applicability to car domains*

No restriction.

### 20. 对其他模块的依赖
*原文标题：Dependencies to other modules*

* The Watchdog Manager module is responsible for changing the mode of the Watchdog Driver and for reporting to the Watchdog Driver the condition to trigger the hardware watchdog. The services of the Watchdog Driver are accessed via the Watchdog Interface which allows addressing multiple watchdog instances.
* The ECU State Manager is responsible for initializing, de-initializing of the Watchdog Manager module and for triggering the hardware watchdog in sleep modes.
* The Watchdog Manager module may perform an immediate reset of the ECU in case of a supervision failure. This reset service is provided by the MCU driver.
* If development error detection is enabled, the Watchdog Manager module informs the Default Error Tracer about detected development errors.
* The Watchdog Manager may notify the Diagnostic Event Manager about detected functional / production-code relevant errors.
* The BSW Scheduler is responsible for calling the scheduled functions of the Watchdog Manager module. The Watchdog Manager module uses the services of the BSW Scheduler to implement critical sections.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 文件结构
*原文标题：File Structure*

### 22. 代码文件结构
*原文标题：Code File Structure*

For details refer to .

### 23. Version Check

For details refer to .

### 24. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Health Monitoring shall provide a Deadline Supervision |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| API naming convention |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| Reporting of production relevant error status |  |  |
| BSW Modules shall support pre-compile configuration |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 功能规范
*原文标题：Functional specification*

This chapter presents the specification details of the internal functional behavior of the Watchdog Manager module.

### 26. Interaction of Supervision Functions

### 27. 概述
*原文标题：Overview*

Supervised Entities are the units of supervision for the Watchdog Manager module. Each Supervised Entity can be supervised by a different Supervision Function or a combination of them.

The available Supervision Functions are:

* Alive Supervision (see )
* Deadline Supervision (see )
* Logical Supervision (see )

Each of three Supervision Functions results with a list of Results of Supervision Function for each Supervised Entity (highlighted in Blue on ), where each Result is either correct or incorrect. At Watchdog Manager initialization, all the Results are set to correct. This means that for every Supervised Entity there are three partial results (one from Alive Supervision, one from Deadline Supervision and one from Logical Supervision).

In a given Mode, each Supervised Entity may have zero, one or more Alive Supervisions (WdgMAliveSupervision), each having one correct/incorrect result.

In a given Mode, each Supervised Entity may have zero, one or more Deadline Supervisions (WdgMDeadlineSupervision), each having one correct/incorrect result.

Note: Deadline Supervision is the combination of the mechanisms for detection of:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Local Supervision Status

The Local Supervision Status state machine determines the status of the Supervised Entity. This is done based on the following:

# Previous value of the Local Supervision Status,
# Current values of result of Alive Supervision, result of Deadline Supervision, result of Logical Supervision.

⌈
The Local Supervision Status state machine shall be calculated in every call of the function `WdgM_MainFunction` which the Supervised Entity is belonging to.
⌋

The Watchdog Manager module provides a feature to provide fault tolerance (corresponding to the local supervision status `WDGM_LOCAL_STATUS_FAILED`) for Alive Supervision for a configurable amount of (cumulative) time measured in multiples of the Supervision Cycle (Supervision Cycle is the period at which `WdgM_MainFunction` is called), named Failed Supervision Reference Cycles (see configuration parameter WdgMFailedAliveSupervisionRefCycleTol). If this parameter is set to 0, then there is no tolerance for Alive Supervision and then Alive Supervision behaves in the same way as Deadline Supervision and Logical Supervision, where the first incorrect result causes the transition to `WDGM_LOCAL_STATUS_EXPIRED`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Global Supervision Status

Based on the Local Supervision Status of all Supervised Entities, the Global Supervision Status is computed.

The Global Supervision Status has similar values as the Local Supervision Status. The main differences are the addition of the `WDGM_GLOBAL_STATUS_STOPPED` value.  shows the values and transitions between them.

 Global Supervision Status
⌈

⌋

  Upstream requirements:
⌈
The Watchdog Manager module shall have one Global Supervision Status for the whole monitored software.
⌋

⌈
Global Supervision Status shall be statically initialized with `WDGM_GLOBAL_STATUS_DEACTIVATED` (see Transition (18) in ).
⌋

The Watchdog Manager module provides a feature to postpone the error reaction (the error reaction being not setting a correct trigger condition) for a configurable amount of time measured in multiples of the Supervision Cycle, named Expired Supervision Tolerance (see configuration parameter WdgMExpiredSupervisionCycleTol ).

The Expired Supervision Tolerance is implemented within the state machine of the Global Supervision Status. The defined state machine is in the state `WDGM_GLOBAL_STATUS_EXPIRED` while the blocking is postponed.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Supervision Functions

Upstream requirements: ,
⌈
Alive Supervision and Deadline Supervision (timeout detection part) for each Supervised Entity shall be executed within the corresponding Main Function instance, which is identified by WdgMMainFunctionPartitionRef.
⌋

  Upstream requirements:
⌈
If the Global Supervision Status is not in the state `WDGM_GLOBAL_STATUS_DEACTIVATED`, then the `WdgM_MainFunction`() shall execute Alive Supervision according to the configured Supervision Cycle.
⌋

  Upstream requirements:
⌈
If the Global Supervision Status is not in the state `WDGM_GLOBAL_STATUS_DEACTIVATED`, then the `WdgM_MainFunction`() shall execute Deadline Supervision (timeout detection part) according to the configured Main Function Period.
⌋

### 31. Alive Supervision

Alive Supervision is one of the Supervision Functions of the Watchdog Manager module. The Alive Supervision offers a mechanism to periodically check the execution reliability of one or several Supervised Entities. This mechanism supports a check of cyclic timing constraints of independent Supervised Entities.

### 32. Alive Supervision 配置
*原文标题：Alive Supervision Configuration*

To provide Alive Supervision, the Checkpoints and their timing constraints need to be configured. The simplest configuration for Alive Supervision is one Checkpoint without any Transitions, as shown in .

The above configuration provides backward compatibility to Alive Supervision as defined in versions before AUTOSAR Classic Platform R4.0.1, where each Supervised Entity could be supervised with one set of parameters only.

Moreover, it is also possible to have more than one Checkpoint as shown in .

Each Checkpoint has its own set of Alive Supervision Parameters. Transitions are not used by Alive Supervision. Although each Checkpoint has its own parameters, it is the Supervised Entity for which status is determined based on the frequency of Checkpoints.

The parameters of the Alive Supervision (see WdgMAliveSupervision) depend on the Watchdog Manager Mode and are defined for per Checkpoint (and not globally for the whole Supervised Entity).

None, some, or all of the Checkpoints of a Supervised Entity can be configured for Alive Supervision in a given Mode. Moreover, in each Mode the Alive Supervision options of Checkpoints can be different.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Alive Supervision Algorithm

To send an Alive Indication, a Supervised Entity invokes the function `WdgM_CheckpointReached`, which results with incrementation of an Alive Counter for the Checkpoint.

Alive Supervision is performed by counting the number of reports from Supervised Entities (by `WdgM_CheckpointReached`) during a configurable period.

This Supervision is executed by `WdgM_MainFunctions` with configurable cycle times. The cyclic examination of the Counter of each Checkpoint of a Supervised Entity by the Main Function happens at every Supervision Reference Cycle (which is a multiple of Supervision Cycle).

The Supervision Cycle and Supervision Reference Cycle (see WdgMSupervisionReferenceCycle) are the properties of an Alive Supervision of a Checkpoint in a given Watchdog Manager Mode.

  Upstream requirements:
⌈
The function `WdgM_MainFunction` shall perform for each Alive Supervision (WdgMAliveSupervision) configured in the active Mode, the examination of the Alive Counter of each Checkpoint of the Supervised Entity. The examination shall be done at the period WdgMSupervisionReferenceCycle of the corresponding Alive Supervision (WdgMAliveSupervision).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Deadline Supervision

Deadline Supervision checks the timing constraints of non-cyclic Supervised Entities. In these Supervised Entities, a certain event happens and a following event happens within a given time span. This time span can have a maximum and minimum deadline (time window).

### 35. Deadline Supervision 配置
*原文标题：Deadline Supervision Configuration*

For every Deadline Supervision, two Checkpoints connected by a Transition are configured. The Deadline is attached to the Transition from the Start Checkpoint to the End Checkpoint. The simplest Deadline Supervision configuration contains two Checkpoints and one Transition, as shown in .

More than one Transition can be defined in a Supervised Entity. The Transitions and Checkpoints do not have to form a closed Graph. Since only the Start and End (Stop) Checkpoints are considered by this Supervision Function, there can be independent Graphs, as shown in . Moreover, the Checkpoints can be chained.

The configuration of Deadline Supervision is similar to the one of Alive Supervision.

The parameters of the Deadline Supervision (see WdgMDeadlineSupervision) depend on the Watchdog Manager Mode (WdgMMode) and are defined for per a set of two Checkpoints. None, some, or all of the Checkpoints of a Supervised Entity can be configured for Deadline Supervision in a given Mode.

A Deadline Supervision is defined as a set of Transitions with time constraints.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Deadline Supervision Algorithm

For each Deadline Start Checkpoints (i.e. Checkpoint referenced by WdgMDeadlineStartRef), Watchdog Manager has a timestamp variable storing the time when that Checkpoint has been reached.

A timestamp variable for Deadline Supervision is obtained by reading OS tick. For each Supervised Entity, an OS counter is configured.

An OS counter can be shared between Supervised Entities, or a separate OS counter can be used for each Supervised Entity (implementation-specific). In case OS-Applications/partitioning is used and a counter is shared across Supervised Entities belonging to different OS-applications, then the list of allowed OS-Applications to access the counter needs to be configured (OsCounterAccessingApplication).

⌈
For each Supervised Entity, an OS counter shall be configured (see WdgMOSCounter, ) if at least one Deadline Supervision is configured for the Supervised Entity in any of the Watchdog Manager Modes.
⌋

⌈
The OS counters for each Supervised Entity shall be configured to be accessible from the OsApplication which contains the Supervised Entity.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Logical Supervision

Logical Supervision checks if the code of Supervised Entities is executed in the correct sequence.

### 38. Logical Supervision 配置
*原文标题：Logical Supervision Configuration*

For every Logical Supervision, there is a Graph of Checkpoints connected by Transitions. The Graph abstracts the behavior of the Supervised Entity for the Watchdog Manager module.

As an example for a Supervised Entity, let us consider the following code fragment, which contains the Checkpoints CP0-0 to CP0-6.

CP0-0  i = 0;
    CP0-1  while(i < n) {
    CP0-2    if (a < b)
    CP0-3      a = b;
    CP0-4    else
               a = 0;
    CP0-5    i++;
    CP0-6  }

This Supervised Entity can be represented by the Graph shown by .

A more abstract view of the Supervised Entity is given by the Graph shown in , where the Checkpoint CP0-1 represents the complete while loop.

There are two types of Graphs for Logical Supervision. Firstly, there is an Internal Graph, in which all the Checkpoints belong to the same Supervised Entity and the Checkpoints are connected by Internal Transitions.

Second, there is an External Graph, in which at least two Checkpoints belong to different Supervised Entities. The Checkpoints are connected with External Transitions.

There are two types of Graphs for Logical Supervision.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Logical Supervision Algorithm

Immediately after initialization of the Watchdog Manager there has not yet been a Checkpoint reported, i.e. Logical Supervision for the Supervised Entity is inactive. This information is held in the Activity Flag (one flag per Graph).

Each Internal Graph represents one Logical Supervision. Assuming N Internal Graphs, this means that a Supervised Entity has N results from Logical Supervision for the Supervised Entity (Note: currently N is limited up to one per Supervised Entity).

Each External Graph represents one Logical Supervision, but it spans across possibly several Supervised Entities. Assuming M External Graphs that cross a Supervised Entity, this results with M results from the Logical Supervision for the Supervised Entity.

  Upstream requirements: ,
⌈
The Watchdog Manager module shall maintain an Activity Flag for each Graph.
⌋

  Upstream requirements:
⌈
The function `WdgM_Init` shall set the Activity Flag for each Graph to false.
⌋

Each Graph may have one or more Initial Checkpoints. Initial Checkpoints are Checkpoints with which a Graph can start.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. 错误处理 / Failure Recovery
*原文标题：Error Handling / Failure Recovery*

The Watchdog Manager module initiates a number of mechanisms to recover from supervision failures. These range from local error recovery within the Supervised Entity to a global reset of the ECU.

### 41. RTE 模式 Mechanism 通知
*原文标题：RTE Mode Mechanism Notifications*

The Watchdog Manager module informs SW-Cs and CDDs about supervision failures via the RTE Mode mechanism. The SW-C and CDDs can then take its actions to recover from that failure. (see , ).

### 42. Report to DEM in WDGM_GLOBAL_STATUS_STOPPED

The Watchdog Manager module registers an entry with the Diagnostic Event Manager (DEM) when Watchdog Manages reaches the state `WDGM_GLOBAL_STATUS_STOPPED`. An SW-C or a CDD can take recovery actions based on that error entry.

  Upstream requirements: , , , ,
⌈
Within the first call of `WdgM_MainFunction` after `WdgM_Init` and when the reset-cause was that in the previous operation cycle the Global Supervision Status had reached `WDGM_GLOBAL_STATUS_STOPPED` and if the parameter `WDGM_E_SUPERVISION` is configured, the Watchdog Manager module shall report an error status FAILED for `WDGM_E_SUPERVISION` to the DEM.
⌋

### 43. Not Setting the Watchdog Trigger Condition

In the state `WDGM_GLOBAL_STATUS_STOPPED`, the Watchdog Manager module stops setting the trigger condition to Watchdog Interface. As a result, after the timeout of the hardware watchdog, it will cause a reset of the ECU.

See  for the corresponding requirements.

### 44. MCU Reset

For applications which need a microcontroller reset as soon as an unrecoverable supervision failure is detected, or to have the independent shutdown path from the Hardware Watchdog, the Watchdog Manager module can perform an immediate reset of the MCU.

  Upstream requirements:
⌈
If the configuration parameter WdgMImmediateReset  is set to TRUE and the Global Supervision Status has reached the state `WDGM_GLOBAL_STATUS_STOPPED`, the Watchdog Manager module shall call the MCU service `Mcu_PerformReset` on the MCU Driver module.
⌋

 Interface provision in MCU driver
  Upstream requirements:
⌈
The parameter WdgMImmediateReset  may only be set to TRUE if the McuPerformResetApi (defined in SWS MCU Driver ) is set to TRUE.
⌋

  Upstream requirements:
⌈
In case of an immediate MCU reset, the Watchdog Manager module shall not provide a notification to the application via the RTE mode mechanism.
⌋

### 其余 116 章（内容从略，见纯文本全文）

45. Watchdog 处理
46. 支持 for 多 Watchdog Instances
47. Setting the Trigger Conditions
48. Switching Modes
49. Effect on Supervision Status
50. Effect on Watchdogs
51. Watchdog 处理 during 休眠
52. Watchdog 管理器配置
53. Mode-independent Supervision Settings
54. Supervised Entity
55. Logical Supervision of Internal Graphs
56. Mode-Dependent Parameters
57. 模式
58. Logical Supervision of External Graphs
59. Alive Supervision
60. Deadline Supervision
61. 支持 for Clustered 软件架构 using 软件 Cluster Connector (SwCluC)
62. 软件 Architectural Assumptions and Constraints
63. 配置 Aspects
64. 配置 for Cross-Cluster External Graphs
65. 错误分类
66. Development 错误
67. Runtime 错误
68. Production 错误
69. Extended Production 错误
70. 安全事件
71. API 规范
72. Imported 类型
73. 类型定义
74. WdgM_ConfigType
75. 功能定义
76. WdgM_Init
77. WdgM_DeInit
78. WdgM_SetMode
79. WdgM_GetMode
80. WdgM_CheckpointReached
81. WdgM_GetLocalStatus
82. WdgM_GetGlobalStatus
83. WdgM_PerformReset
84. WdgM_GetFirstExpiredSEID
85. Callback 通知
86. Scheduled functions
87. WdgM_MainFunction
88. Expected 接口
89. Mandatory 接口
90. Optional 接口
91. Configurable 接口
92. 服务接口
93. Ports and Port 接口 for Supervision
94. 通用 Approach
95. 数据类型
96. Port 接口
97. 服务 Ports
98. 错误 Codes
99. Ports and Port 接口 for Status Reporting
100. 通用 Approach
101. 数据类型
102. Port 接口
103. 模式 Ports
104. 时序图
105. 初始化
106. 配置规范
107. Parameter Differentiation
108. Static 配置 Parameters
109. Runtime 配置 Parameters
110. Precompile Options
111. Containers and 配置 parameters
112. 配置 Variants
113. WdgM
114. WdgMGeneral
115. WdgMSupervisedEntity
116. WdgMCheckpoint
117. WdgMInternalTransition
118. WdgMWatchdog
119. WdgMConfigSet
120. WdgMDemEventParameterRefs
121. WdgMMode
122. WdgMAliveSupervision
123. WdgMDeadlineSupervision
124. WdgMExternalLogicalSupervision
125. WdgMExternalTransition
126. WdgMTrigger
127. WdgMLocalStatusParams
128. WdgMMainFunction
129. WdgMMainFunctionModeProps
130. WdgMCrossClusterTransition
131. WdgMTransitionProxy
132. WdgMBaseSocket
133. 发布信息
134. 附录
135. 示例 Implementation of Alive Supervision Algorithm
136. Scenario A
137. Scenario B
138. 不适用需求
139. Change history of AUTOSAR traceable items
140. Traceable item history of this document according to AUTOSAR Release R24-11
141. Added 规范 Items in R24-11
142. Changed 规范 Items in R24-11
143. Deleted 规范 Items in R24-11
144. Added Constraints in R24-11
145. Changed Constraints in R24-11
146. Deleted Constraints in R24-11
147. Traceable item history of this document according to AUTOSAR Release R25-11
148. Added 规范 Items in R25-11
149. Changed 规范 Items in R25-11
150. Deleted 规范 Items in R25-11
151. Added Constraints in R25-11
152. Changed Constraints in R25-11
153. Deleted Constraints in R25-11
154. Traceable item history of this document according to AUTOSAR Release R26-11
155. Added 规范 Items in R26-11
156. Changed 规范 Items in R26-11
157. Deleted 规范 Items in R26-11
158. Added Constraints in R26-11
159. Changed Constraints in R26-11
160. Deleted Constraints in R26-11
