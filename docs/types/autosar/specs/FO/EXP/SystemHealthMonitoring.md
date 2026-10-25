# Explanation of System Health Monitoring (`SystemHealthMonitoring`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 993 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_EXP_SystemHealthMonitoring_993\AUTOSAR_FO_EXP_SystemHealthMonitoring.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_EXP_SystemHealthMonitoring_993\AUTOSAR_FO_EXP_SystemHealthMonitoring.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_EXP_SystemHealthMonitoring_993\zzgen\FO_EXP_SystemHealthMonitoring.complete.txt`

## 文档简介

System health monitoring (SHM) introduces platform agnostic health monitoring. SHM focuses on system wide coordination of error handling across multiple platforms on multiple controllers and machines. Currently, the health monitoring and the handling of recovery actions is performed at platform level using PHM in Adaptive platform and WdgM in Classic platform. For this concept, a new component called System Health Monitor is introduced. The System Health Monitor component can be instantiated either as a Master instance or a Client instance. SHM Client is responsible for communicating platform level health data to the Master instance whereas SHM Master is responsible for determination of Health Indicators. The Health Indicators can be determined at subsystem level, feature level, domain level and eventually at vehicle level. These Health Indicators can be used either for platform level recovery actions or to enhance the services with a Health of Service parameter, similar to Quality of Service.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

System health monitoring (SHM) introduces platform agnostic health monitoring. SHM focuses on system wide coordination of error handling across multiple platforms on multiple controllers and machines. Currently, the health monitoring and the handling of recovery actions is performed at platform level using PHM in Adaptive platform and WdgM in Classic platform. For this concept, a new component called System Health Monitor is introduced. The System Health Monitor component can be instantiated either as a Master instance or a Client instance. SHM Client is responsible for communicating platform level health data to the Master instance whereas SHM Master is responsible for determination of Health Indicators. The Health Indicators can be determined at subsystem level, feature level, domain level and eventually at vehicle level. These Health Indicators can be used either for platform level recovery actions or to enhance the services with a Health of Service parameter, similar to Quality of Service.

### 2. 目标
*原文标题：Objectives*

This document is intended to give more details on how System Health Monitoring or Health Indicators can be implemented. All of the content should be understood as an implementation hint and not mandatory specifications. The actual requirements can be found in  and the abstract specifications in .

### 3. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

The glossary below includes acronyms and terms relevant to System Health Monitoring that are not included in the .

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| GSS | Global Supervision Status |
| HI | Health Indicator |
| LSS | Local Supervision Status |
| PHM | Platform Health Management |
| WdgM | Watchdog Manager |

### 5. 定义 of terms
*原文标题：Definition of terms*

| Terms: | Description: |
|---|---|
| Alive Supervision | Kind of supervision that checks if a Supervised Entity executed in a correct frequency. |
| Checkpoint | A point in the control flow of a Supervised Entity where the activity is reported. |
| Deadline Supervision | Kind of supervision that checks if the execution time between two Checkpoints is within minimum/maximum time limit. |
| Global Supervision Status | Status that summarizes the Local Supervision Status of all Supervised Entities. |
| Health Channel | Channel providing information about the health status of a (sub)system. This might be the Global Supervision Status of an application, the result any test routine or the status reported by a (sub)system (e.g. voltage monitoring, OS kernel, ECU status). |
| Health Indicator | Health Indicator provides an evaluation metric of current system performance with regard to safety requirements. |
| Local Supervision Status | Status that represents the current result of Alive Supervision, Deadline Supervision and Logical Supervision of a single Supervised Entity. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 相关文档
*原文标题：Related Documentation*

### 7. Master/Client 架构
*原文标题：Master/Client Architecture*

In this chapter a master/client example architecture for System Health Monitor is shown. Distributed architectures are possible as well, but not in the scope of this example. Integration of SHM client on platform level will be described in upcoming releases.

### 8. 约束与假设
*原文标题：Constraints and Assumptions*

As logic for Health Indicator (HI) determination is not standardized, only an example will be provided.

### 9. 概述
*原文标题：Overview*

For global recovery System Health Monitor shall be used in addition to PHM and WdgM . The workflow depicted in the figure below clarifies responsibilities between PHM, WdgM and System Health Monitor. PHM and/or WdgM execute Local Supervision (LS) functions and determine Local Supervision Status (LSS) and Global Supervision Status (GSS). Necessary health information is transferred via the payload of existing protocols like SOMEIP to the System Health Monitor. By combining information of one or multiple PHM(s), WdgM(s), SM(s), BswM(s) and/or other System Health Monitoring components, the System Health Monitor determines the Health Indicators. Health Indicators include performance, reliability and subsystem health status. These Health Indicators are transmitted via Health Indicators service fields.

A master-client distribution is shown in the figure above. In this example the SHM client gathers health related information of the platform, performs some pre-evaluation to build a platform Health Indicator and sends it to the master. The master analyzes the platform HIs and additional supervision results of all its clients to create Health Indicators on a higher abstraction level.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Redundancy of 系统 Health Monitoring Master
*原文标题：Redundancy of System Health Monitoring Master*

It is needless to say that the System Health Monitoring Master is a very important single point of failure for this concept. Projects should think about redundancy of the SHM Master. The clients might utilize the timeout features provided by E2E to recognize a failed SHM Master. Similarly a redundant master can detect the failed master by subscribing to the provided HealthIndicators and not receiving them anymore.

There might be different strategies to achieve such a redundancy. One approach could be to have an explicit fallback SHM Master in one of the ECUs in case the originally configured SHM Master fails. The solution is easy to implement and is deterministic, with no need of arbitration to win the SHM Master role. However, the problem with this approach might be that the statically configured fallback SHM Master might not be the best option in run-time, as it might have poor HI than any other ECUs.

Another approach might be to allow an arbitration period after the SHM Master fails. In this arbitration period the client with the best HI will become the SHM Master.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 系统 Health Monitor in AUTOSAR的集成
*原文标题：Integration of System Health Monitor in AUTOSAR*

As currently SHM is only standardized with platform agnostic application interfaces, the most sensible solution is implementing SHM on an application layer in AUTOSAR. A project-specific solution implementing SHM at System Service layer shall be possible, but not recommended and hence not an AUTOSAR standardized way.

### 12. 系统 Health Monitor的接口
*原文标题：Interfaces of System Health Monitor*

### 13. 系统 Health Monitor 接口的概述
*原文标题：Overview of System Health Monitor Interfaces*

As System Health Monitor shall be standardized as platform agnostic component, all interface descriptions stay on abstract interface descriptions of `AUTOSAR_TPS_AbstractPlatformSpecification` . All platform interfaces and payload configuration for receiving healh infomration solely provide examples and are not part of the standardization in this release.

Supported Health Informations on adaptive Platform include:

* Global Supervision Status
* Health Channel Status
* Function Group Status

The AP informations are available in StateManagement, but there are currently no standardized interfaces for retrieving them from applications.

Supported Health Informations on classic Platform include:

* `WdgM_GlobalSupervision` from `WdgM_GlobalMode` interface
* `WdgM_LocalSupervision` from `WdgM_LocalMode` interface
* BswM Mode from ModeSwitchInterface

### 14. Information Transmission to SHM

Information to SHM shall be transmitted as data according to the HealthIndicator and HealthInfoInterface of SHM. For communication existing communication modules (ara::com, COM) can be used as well as existing protocols like SOME/IP. As cyclic messaging requires a certain bandwidth, the message content shall be configurable at runtime to contain different content. As a very high frequent heart beat will be required to ensure availability, there is no need to introduce additional acyclic messaging.

### 15. Health Indicator Transmission

The HealthIndicator Application Interface shall be used to exchange HealthIndicators between SHM client and master applications.

### 16. Health of 服务
*原文标题：Health of Service*

Some platforms might not use AUTOSAR at all, or have no knowledge which Health Indicator belong to which subsystem. For such cases it is possible to attach the Health Indicator of the service provider to the provided data. By binding a specific HI to the service as some kind of quality parameter, the receiver can decide how to use the service, without knowing the architecture behind it.

### 17. 示例 Health Indicator and Use Case
*原文标题：Example Health Indicator and Use Case*

### 18. 示例 Health Indicator：Sensors
*原文标题：Example Health Indicator: Sensors*

This section describes an example calculation for sensors with a definition of all three parameters of the Health Indicator (HI) .

A "Sensor application" processes and evaluates the measurements. The application implements voting and plausibility checks to decide which sensor value to forward. Redundancy is applied as a means to improve reliability. Hence, voting and plausibility information is combined with redundancy information to define reliability levels. For the numerical results, the receiver of the HI can define individual threshold values for different levels. The presented equation considers the following constraints: A higher number of voters agreeing with the selected voter increases the reliability; a larger number of implausible voters decreases reliability. As an implausible voter can be ignored, the reliability value shall distinguish the case of one plausible voter disagreeing from the case of one implausible voter disagreeing. On the other hand, a plausible voter disagreeing shall decrease the reliability. Therefore, the number of plausible agreeing voters and the number of implausible voters are the main reliability indicators.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 示例 Use Case：Health of 服务 (HoS) Indication
*原文标题：Example Use Case: Health of Service (HoS) Indication*

As first use case serves the interface between the domains Automated Driving and Chassis. The automated driving domain's task is to provide a safe drivable trajectory in the vehicle's current environment. Motion control takes these trajectories and the current vehicle state into account to transform the driving strategy into commands to control the actors. Therefore, motion control implements additional safety checks. Depending on the active mode, different safety requirements apply. When ADAS is active the main goal is the control quality. In case of poor control quality, the driver assistance functionality is shut down and the driver seamlessly takes over. In contrast, deactivating assistance functionalities is no safe option in FAD and HAD mode. Adequate degradation actions need to be activated to guarantee fail-degraded behavior in case of poor system performance. For this purpose, the trajectory input is checked for plausibility. If an input signal is unknown, safe default values are provided. Exactly at this step, plausibility checking, the Health Indicator of the currently active feature, e.g. highway pilot, can be attached to the sent trajectory.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 示例 Use Case：系统 Degradation
*原文标题：Example Use Case: System Degradation*

This use case demonstrates how Health Indicators can support system degradation strategies in automated driving context. As example serves a logical architecture of the automated driving domain as shown in figure .

It is realized via two redundant fail-safe systems, the nominal integration system (lower part) and the fail-degraded system (upper part). During operation, only ECUs of the same system are allowed to be active to guarantee that no contradicting commands are transported to braking and steering systems. At all times exactly one system must be active, except when switching between systems. The nominal and fail-degraded system must be independent by design. Otherwise, no fail-degraded capability can be guaranteed. The nominal system is responsible for calculating nominal trajectories, the fail-degraded system determines so-called minimum risk maneuvers.

The SHM collects all information on the nominal and the fail-degraded system, calculates the HIs, and sends them back to the platforms.

For coordinating system degradation, a decentralized approach is applied. Each plat- form implements its own state machine.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。
