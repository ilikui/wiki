# Specification of Time Synchronization (`TimeSynchronization`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 880 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_TimeSynchronization_880\AUTOSAR_AP_SWS_TimeSynchronization.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_TimeSynchronization_880\AUTOSAR_AP_SWS_TimeSynchronization.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_TimeSynchronization_880\zzgen\AP_SWS_TimeSynchronization.complete.txt`

## 文档简介

Time Synchronization between different applications and/or ECUs is of paramount importance when correlation of different events across a distributed system is needed, either to be able to track such events in time or to trigger them at an accurate point in time.

For this reason, a Time Synchronization API is offered to the Application, so it can retrieve the time information synchronized with other entities / ECUs.

For the format, message sequences and semantics of the time synchronization protocols to use, please refer to the Protocol Requirements Specicification (PRS) of the AUTOSAR Time synchronization Protocol (see ).

The Time Synchronization functionality is then offered by means of different "Time Base Resources" (from now on referred to as TBR).

These TBRs are classified in different types. These types have an equivalent design to the types of the time bases offered in the Synchronized Time Base Manager specification  (from now on referred to as StbM). The classification is the following:

* Synchronized Master Time Base
* Synchronized Slave Time Base

As in StbM, the TBRs offered by the Time Synchronization module (TS from now on), are also synchronized with other Time Bases on other nodes of a distributed system.

The Application consumes the time information provided and managed by the TBRs. Therefore, the TBRs serve as Time Base brokers, offering access to Synchronized Time Bases. By doing so, the TS module abstracts from the "real" Time Base provider.

The TS module supports securing of the Time Synchronization messages sent via network.

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

Time Synchronization between different applications and/or ECUs is of paramount importance when correlation of different events across a distributed system is needed, either to be able to track such events in time or to trigger them at an accurate point in time.

For this reason, a Time Synchronization API is offered to the Application, so it can retrieve the time information synchronized with other entities / ECUs.

For the format, message sequences and semantics of the time synchronization protocols to use, please refer to the Protocol Requirements Specicification (PRS) of the AUTOSAR Time synchronization Protocol (see ).

The Time Synchronization functionality is then offered by means of different "Time Base Resources" (from now on referred to as TBR).

These TBRs are classified in different types. These types have an equivalent design to the types of the time bases offered in the Synchronized Time Base Manager specification  (from now on referred to as StbM). The classification is the following:

* Synchronized Master Time Base
* Synchronized Slave Time Base

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| backupTimestamp | Value of the Global Time which is stored into persistent memory and used at startup for calculating the initial value of the Time Base. |
| Clock Update Counter | Counter value belonging to the Time Base, that indicates a Time Base update. |
| DST | Daylight Saving Time, also know as Day Light Saving (abbreviated DLS), is the practice of advancing clocks during summer months so that evening daylight lasts longer, while sacrificing normal sunrise times. Typically, regions that use daylight saving time adjust clocks forward one hour close to the start of spring and adjust them backward in the autumn to standard time. |
| FVM | Freshness Value Manager |
| FV | Freshness Value |
| gPTP | Generalized Precision Time Protocol |
| ICV | Integrity Check Value |
| NTP | Network Time Protocol |
| OS | Operating System |
| Pdelay | Propagation/path delay as given in IEEE 802.1AS |
| Pdelay_{Req} | Propagation / path delay request message |
| Pdelay_{Resp} | Propagation / path delay response message |
| Pdelay_{RespFollowUp} | Propagation / path delay Follow-Up message |
| PTP | Precision Time Protocol |
| r_{oc} | Rate for time offset elimination via Rate Adaption. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 定义
*原文标题：Definitions*

### 5. ara：：核：：SteadyClock
*原文标题：ara::core::SteadyClock*

Definition: TS is using ara::core::SteadyClock as the basis for its interfaces and for synchronization with the daemon process realizing the time-sync protocol.

### 6. Time Base Application

# Active Application This kind of Application autonomously calls the TS either:

  * To read time information from the TBRs
  * To update the Time Base maintained by a TBR, according to application information.
# Notification Application This feature will be provided at a later release/version of the TS.

### 7. Rate Correction

Definition: A factor that is applied to the Local Time to correct the Rate Deviation between the Local Clock's frequency and the Master Clock frequency. The value is typically close to 1.0.

### 8. Rate Deviation

Definition: Positive or negative rate offset to an rate ratio of 1.0 betweeen the Local Clock's frequency and the Master Clock's frequency, i.e., how much the frequency of the Local Clock deviates from that of the Master clock. The value should typically be close to 0.0.

### 9. 相关文档
*原文标题：Related documentation*

### 10. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 11. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 12. 约束与假设
*原文标题：Constraints and assumptions*

### 13. 已知限制
*原文标题：Known limitations*

The Time Synchronization module is bound to Adaptive Platform Systems.

### 14. 配置
*原文标题：Configuration*

Please refer to the corresponding model elements.

### 15. Time Gateway

Time Gateway functionality is currently not in scope of the Time Synchronization module for the Adaptive Platform.

### 16. Out of 范围
*原文标题：Out of Scope*

Errors, which occurred during Global Time establishment and which are not caused by the module itself (i.e. loss of PTP global time is not an issue of the TS but of the TSP modules) are out of the scope of this module.

### 17. 适用的车型领域
*原文标题：Applicability to car domains*

The concept is targeted at supporting time-critical automotive applications. This does not mean that the concept has all that is required by such systems though, but crucial timing-related features which cannot be deferred to implementation are considered.

### 18. Recommendation

In the case where the TSP is based on Ethernet, the protocol to be used is defined in the PRS (see ).

### 19. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 20. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

 shows the interfaces provided by Time Synchronization to other functional clusters within the AUTOSAR Adaptive Platform.  lists the interfaces provided to other functional clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| SynchronizedTimeBaseConsumer | Intrusion Detection System Manager | Adaptive Intrusion Detection System Manager shall use this interface to determine timestamps of security events. |
| ^ | Log and Trace | Log and Trace shall use this interface to determine the timestamps that are associated with log messages. |
| ^ | Raw Data Stream | This interface is used to determine the current synchronized global time for IEEE1722-based communication. |
| ^ | Update and Configuration Management | Update and Configuration Management shall use this interface to get latest timestamp. |
| ^ | Vehicle Update and Configuration Management | Vehicle Update and Configuration Management shall use this interface to get latest timestamp. |

### 21. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

 shows the interfaces required by Time Synchronization from other functional clusters within the AUTOSAR Adaptive Platform.  lists the interfaces required from other functional clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Cryptography | CryptoStack | Time Synchronization shall use this interface to generate / verify checksums (MAC). |
| Execution Management | ExecutionClient | Time Synchronization shall use this interface to report the state of its daemon process. |
| Log and Trace | Logger | Time Synchronization shall use this interface to log standardized messages. |
| Persistency | KeyValueStorage | Used to store the last received timestamp to enable a faster startup. |
| Platform Health Management | SupervisedEntity | Time Synchronization should use this interface to enable supervision of its daemon process by Platform Health Management |

### 22. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in Time Synchronization  and the AUTOSAR RS General , and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Usage of ara::core types |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| Provide only interfaces that are intended to be used by AUTOSAR Applications and Functional Clusters |  |  |
| Internal namespaces |  |  |
| No description |  |  |
| No description |  |  |
| No description |  |  |
| InstanceSpecifierAlreadyInUseViolation |  |  |
| AraNotInitializedViolation |  |  |
| Basic SW security events |  |  |
| The Implementation of Time Synchronization shall maintain its own Time Base independently of the acting role. |  |  |
| The Implementation of Time Synchronization shall initialize the Global Time Base with a configurable startup value. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 功能规范
*原文标题：Functional specification*

The functional behavior is described under the following specific contexts:

* Startup Behavior
* Shutdown Behavior
* Construction Behavior (Initialization)
* Normal Operation
* Error Handling
* Error Classification
* Version Check

### 24. 通用概述 of TS
*原文标题：General Overview of TS*

For the Adaptive Platform, three different technologies were considered to fulfill such Time Synchronization requirements. These technologies were:

* StbM of the Classic Platform
* Library chrono - either std::chrono (C++11) or boost::chrono
* The Time posix interface

The following table shows the interfaces provided to the Application by means of this API and their equivalent interface in StbM.

| Time Synchronization API - AP | StbM - CP |
|---|---|
| GetTimeWithStatus | StbM_GetCurrentTime |
| SetTime | StbM_SetGlobalTime |
| updateTime | StbM_UpdateGlobalTime |
| setUserData | StbM_SetUserData |
| getRateDeviation | StbM_GetRateDeviation |
| setRateCorrection | StbM_SetRateCorrection |
| timeLeap (attribute of the TimeBase Status class) | StbM_GetTimeLeap |
| getTimeBaseStatus | StbM_GetTimeBaseStatus |
| n/a | StbM_StartTimer |
| updateCounter (attribute of the TimeBase Status class) | StbM_GetTimeBaseUpdateCounter |
| This information is accessible via the Status flags | StbM_GetMasterConfig |

### 25. Base functionality of every Time Base

Every Time Base has to provide a minimum set of functionality, as listed below:

* offer possibility to obtain the current timestamp
* creating a snapshot of its parameters

This chapter briefly describes these functionalities. Details on how to use and the exact behavior of these core methods are given in chapter .

### 26. Time Base Status

This TimeBaseStatus is a snapshot of all the information of a Time Base Resource it is related to, like status flags, amount of times the TBR has been updated, time leap information (possibly generated during the last synchronization of the Time Base Resource), etc.

### 27. Rate Deviation

Applications will have different thresholds for acceptable time drift values. Hence there needs to be a way, how applications can access this information.

  Upstream requirements:
⌈
ara::tsync::SynchronizedTimeBaseConsumer::GetRateDeviation shall return the calculated rate deviation of its TBR against the time source it is synchronized to. In case there is no rate deviation calculated yet, the initial rate deviation of 0.0 shall be returned.
⌋

Note: For more information of how rate deviation is calculated see:  Time Correction.

### 28. Clock Time Value

Reading the clock's time value is very likely the most commonly performed operation by the applications interacting with TS.

To ensure type safe handling of time values, the timepoint is provided as std::chrono structure.

More detailed information on how this is implemented is given in the further chapters and in chapter .

### 29. Status Flags of TBRs

Time Synchronization defines a set of status flags that are used to express specific status conditions of a TBR. Status flags can be queried by an application through a ara::tsync::SynchronizedTimeBaseConsumer::GetTimeWithStatus.

Synchronization status GetSynchronizationStatus includes:

* The kNotSynchronizedUntilStartup: Indicates whether a synchronization of a time base to its corresponding TBR happend until start-up (initial state)
* The kTimeOut: Indicates whether a synchronization of a time base to its corresponding TBR is lost or delayed.
* The kSynchronized: Indicates if the time base of the corresponding TBR has been successfully synchronized at least once against its time source.
* The kSynchToGateway: Indicates if the corresponding TBR updates are based on a Time Gateway below the Global Time Master.

The status if a leap jump happend since the last status request through a GetTimeWithStatus could be retrieved via GetLeapJump:

* The kTimeLeapNone: Indicates that no leap jump happend
* The kTimeLeapFuture: Indicates if there has been a jump in time to the future.
* The kTimeLeapPast: Indicates if there has been a jump in time to the past.

### 30. Time 同步 and Protocols
*原文标题：Time Synchronization and Protocols*

Time Synchronization mechanisms and protocols (i.e.  are out of the Scope of this document, for protocol specification please refer to the PRS (see ).

### 31. Normal Operation

### 32. 简介
*原文标题：Introduction*

A Global Time network consists of a Time Master and at least one Time Slave. For each Time Domain, the Time Master is distributing the Global Time Base to the connected Time Slaves via Time Synchronization messages. The Time Slave corrects the received Global Time Base taking into account the Time Stamp at the transmitter side and the own generated receiver Time Stamp.

The local time of a Slave Time Base will be maintained autonomously and updated whenever a new time value is received from its associated Master Time Base.

### 33. Time Base Manifestations

The number of Synchronized Time Bases is not limited by the TS functionality, but by the functional needs of the system to be fulfilled (i.e. the TS does not define a limit of Synchronized Time Bases identifiers in the system).

### 34. Roles of the Time Base Resources

### 35. Global Time Master

A TBR can act as a Global Time Master, in which case it is the system wide origin for a given time value that is then distributed via the network to the Time Slaves.

### 36. Time Slave

In the role of a Time Slave, the TBR updates its internally-maintained local time to a value of a Global Time Base, which is provided by the corresponding TSP module.

### 37. Time Base Resources

### 38. Slave Time Bases

Upstream requirements:
⌈
Monitoring of time leaps to the future shall only be enabled, if a timeLeapFutureThreshold is other than zero and ara::tsync::SynchronizationStatus unequal to kNotSynchronizedUntilStartup.
⌋

  Upstream requirements:
⌈
Monitoring of time leaps to the past shall only be enabled, if a timeLeapPastThreshold is other than zero and ara::tsync::SynchronizationStatus unequal to kNotSynchronizedUntilStartup.
⌋

  Upstream requirements:
⌈
A check for time leaps shall be performed on every successful synchronization with the master clock, but only after the clock has been synchronized once (ara::tsync::SynchronizationStatus unequal to kNotSynchronizedUntilStartup).
⌋

  Upstream requirements:
⌈
If the adjustment made by the resynchronization exceeded the specified threshold values, the corresponding ara::tsync::LeapJump status shall be set to kTimeLeapNone if no leap jump occurred. kTimeLeapFuture: if jump occured in time to the future greater than timeLeapFutureThreshold. kTimeLeapPast: if jump occured in time to the past greater than timeLeapPastThreshold.
⌋

  Upstream requirements:
⌈
The initial value of ara::tsync::LeapJump shall be kTimeLeapNone.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Immediate Time 同步
*原文标题：Immediate Time Synchronization*

All TSP Modules are working independently of the TS regarding the handling of the bus-specific Time Synchronization protocol (i.e. autonomous transmission of Timesync messages on the bus).

Time information is passed from a TSP to the TBR. Implementation details as well as the interaction of such a TSP with the TBR are outside of the scope of this specification(for protocol specification please refer to ).

### 40. User 数据
*原文标题：User Data*

User Data is part of each Time Base. User Data are set by the system-wide Time Master of each Time Base and distributed as part of the Timesync messages.

User Data are used for application specific purposes e.g. :

* for debugging purposes during integration
* and/or to characterize the Time Base, e.g.,

  * regarding the quality of the underlying clock source
  * or regarding the progress of time (e.g., if Global Time has been restored from non-volatile memory after reset).

Note, that the status information, if contained in the user data, is from the Time Master's point of view, whereas the StatusFlag (ara::tsync::SynchronizedTimeBaseStatus) refers to the status of the Time Base from a Time Slave's point of view.

  Upstream requirements: ,
⌈
In case there are no User Data stored, ara::tsync::SynchronizedTimeBaseStatus::GetUserData shall return an empty vector.
⌋

 No user data available
  Upstream requirements: ,
⌈
In case there are no User Data available, ara::tsync::SynchronizedTimeBaseProvider shall return an empty Vector.
⌋

### 41. Time Correction

TS provides the ability for Time Slaves to perform Rate and Offset Correction of the Synchronized TBR.

For Global Time Masters, the TS provides the ability to perform Rate Correction of their Time Base(s).

Time correction can be configured individually for each Time Base.

### 42. Rate Correction for Time Slaves

Rate Correction detects and eliminates rate deviations of local instances of Time Bases. Rate Correction determines the rate deviation in the scope of a measurement. This rate deviation is used as correction factor which the TBR uses to correct the Time Base's time whenever it is read (e.g. in the scope of ara::tsync::SynchronizedTimeBaseConsumer::GetTimeWithStatus).

  Upstream requirements: ,
⌈
The TBR shall perform Rate Correction measurements to determine its rate deviation if ara::tsync::SynchronizationStatus is set to kSynchronized.
⌋

  Upstream requirements: , , ,
⌈
The TBR shall perform Rate Correction measurements continuously. The end of a measurement marks the start of the next measurement.

The start and end of measurements is always triggered by (and aligned to) the reception of time values for Synchronized.
⌋

  Upstream requirements:
⌈
During runtime, the Synchronized TBR shall determine the timespan of a Rate Correction measurement on the basis of clock ara::core::SteadyClock.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Offset Correction for Time Consumer

Offset Correction eliminates time offsets of local instances of Synchronized Time Bases. This correction takes place whenever the current time is read (e.g. in the scope of ara::tsync::SynchronizedTimeBaseConsumer::GetTimeWithStatus). The offset is measured when the local instance of the Time Base is synchronized in the scope of TSP.

  Upstream requirements: , ,
⌈
For Synchronized TBRs, it shall be measured the offset between its local instance of the Time Base and the Global Time Base whenever the Time Base is synchronized in the scope of the function TSP by taking a snapshot of the TLSync and TVSync.
⌋

  Upstream requirements:
⌈
If the absolute value of the time offset between Global Time Base and local instance of the Time Base (abs(TG - TL_{Sync})) is equal or greater than 'GlobalTimeCorrectionProps.offsetCorrectionJumpThreshold', the TBR shall calculate the corrected time (TL) of its local instance of the Time Base according to the following formula: TL = TG + (TV - TV_{Sync}) * r_{rc}
⌋

Note: This correction will be done whenever the time is read in the scope of e.g. the function ara::tsync::SynchronizedTimeBaseConsumer::GetTimeWithStatus.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Rate Correction for Global Time Masters

Rate correction is applied by setting a correction factor which the TBR uses to correct the Time Base's time whenever it is transmitted over the network. This happens independent of the rate correction done by the slave.

  Upstream requirements:
⌈
If GlobalTimeCorrectionProps.allowProviderRateCorrection equals true, and the rate deviation (= rateCorrection - 1.0) is within the valid range [-providerRateDeviationMax .. providerRateDeviationMax] , when ara::tsync::SynchronizedTimeBaseProvider::SetRateCorrection is called, TS shall set the rate correction value to the value of parameter rateCorrection.

If GlobalTimeCorrectionProps.allowProviderRateCorrection equals false, ara::tsync::SynchronizedTimeBaseProvider::SetRateCorrection TS shall not set a new rate correction value and shall return error code kFunctionNotSupported.
⌋

Note: Refer  for handling of out of range rateCorrection values.

 Setting RATE CORRECTED Bit Upon SetRateCorrection Invocation
  Upstream requirements:
⌈
Upon a valid invocation of ara::tsync::SynchronizedTimeBaseProvider::SetRateCorrection, TS shall set the `RATE_CORRECTED` bit in the timeBaseStatus of the corresponding Time Base to 1.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. 通知 of Time Base Consumer
*原文标题：Notifications of Time Base Consumer*

The Application might request to be notified of dedicated events for a specific TBR.

### 46. Status flags 通知
*原文标题：Status flags notification*

A change in the StatusFlags of the ara::tsync::SynchronizedTimeBaseStatus can be notified.

  Upstream requirements:
⌈
A registered notifier via ara::tsync::SynchronizedTimeBaseConsumer::RegisterStatusChangeNotifier shall be invoked, if one of the following content is changed: ara::tsync::SynchronizationStatus, ara::tsync::LeapJump or the user data.
⌋

### 47. 同步 status 通知
*原文标题：Synchronization status notification*

A change in the StatusFlags of the ara::tsync::SynchronizationStatus (e.g. if the timebase is in Timeout) can be notified.

  Upstream requirements:
⌈
A registered notifier via ara::tsync::SynchronizedTimeBaseConsumer::RegisterSynchronizationStateChangeNotifier shall be invoked, if ara::tsync::SynchronizationStatus is changed.
⌋

### 48. LeapJump 通知
*原文标题：LeapJump notification*

A leap jump can be notified.

  Upstream requirements:
⌈
A registered notifier via ara::tsync::SynchronizedTimeBaseConsumer::RegisterTimeLeapNotifier shall be invoked, if ara::tsync::LeapJump is changed.
⌋

### 49. Global Time Precision Measurement 支持
*原文标题：Global Time Precision Measurement Support*

To verify the precision of each Local Time Base compared to the Global Time Base a recording mechanism shall be optionally supported for Time Slaves and Time Gateways. In principle, a snapshot is taken of all required data at the point in time, where a synchronization event takes place. Access is provided to those values by an actively pushed API function on each successful assembled data block. An Off-Board Tester collects each block and calculates the precision afterwards and maintains a history of recorded blocks and their elements accordingly. How and by which protocol the data will be transferred to the Off-Board Tester will be specified by the Application.

  Upstream requirements:
⌈
For Synchronized Time Bases, a registered TimePrecisionMeasurement notifier (via ara::tsync::SynchronizedTimeBaseConsumer::RegisterTimePrecisionMeasurementNotifier) shall write the block elements

* glbSeconds
* glbNanoSeconds
* timeBaseStatus
* virtualLocalTimeLow
* rateDeviation
* locSeconds
* locNanoSeconds
* pathDelay

to the related measurement recording table after updating the Main Time Tuple (i.e., after updating the Local Time Base by the Global Time Base).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 50. Global Time 校验 Measurement 支持
*原文标题：Global Time Validation Measurement Support*

Figure  outlines the basic concept of the Time Validation feature.

A Time Slave collects information on the time synchronization process, to predict e.g. the Sync Ingress based on its local instance of Global Time and check whether Master and Slave agree upon the current time. The prediction itself will be locally analyzed by a separate Adaptive Application to detect any existing impairments. Furthermore, information on the time synchronization process from Time Masters and Slaves is also shared with a Validator Adaptive Application which may run anywhere in the network, e.g. on the owner of Global Time.

The Validator uses the information on the time synchronization process received from the Time Master and Time Slave Entities via a user defined feedback channel to reconstruct the whole synchronization process and check that a coherent time base is established among all peers.

The Time Validation feature only provides API to the Adaptive Application. The feedback channel and the actual validation performed by the respective Adaptive Application is not standardized in AUTOSAR. It is done in a user defined way on application level.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. Secure Time 同步
*原文标题：Secure Time Synchronization*

### 52. Freshness value

The Freshness Value (FV) refers to a monotonic counter that is used to ensure freshness of the authenticated time synchronization messages. Freshness Values are to be derived from a Freshness Value Manager (FVM). FVM interface is defined by the appendix C.

 Initialization of the FVM
  Upstream requirements:
⌈
Freshness Value Manager shall be initialized prior to its usage by calling the apext::tsync::FVM::Initialize.
⌋

### 53. 配置 of Secure TimeSync
*原文标题：Configuration of Secure TimeSync*

Usage of Secure Time Synchronization
  Upstream requirements:
⌈
Secure Time Synchronization shall be used if a SecOcSecureComProps instance is referenced in the role icvSecureComProps by a GlobalTimeDomain instance (refer to the description of GlobalTimeDomain in ).
⌋

 Usage of Freshness Value
  Upstream requirements:
⌈
If the attribute GlobalTimeDomain.icvFreshnessValueId is set, the Freshness Value shall be used for the ICV calculation by Time Master. Time Slave shall check the attribute to verify if the received message is built properly, discard it in case its structure does not correspond to the configuration, and generate the security event `SEV_TSYN_ETH_FRESHNESS_NOT_AVAILABLE`.
⌋

 Check the configuration of Freshness Value
  Upstream requirements:
⌈
Time Slave shall check the status of the 'ICV with FV' bit of the AUTOSAR Sub-TLV:Time Authenticated of the TimeSync message (refer to PRS ). In case the Freshness Value shall be used, but the 'ICV with FV' bit is not set, Time Slave shall discard the message and generate the security event `SEV_TSYN_ETH_FRESHNESS_NOT_AVAILABLE`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 54. Time Master

Secure Time Synchronization message sending
  Upstream requirements:
⌈
The Secured Time Synchronization message shall be sent according to . The following additional steps shall be performed:

* If the attribute icvFreshnessValueId is defined, obtain the FV by calling apext::tsync::FVM::GetTxFreshness and passing the configured freshnessValueId.
* Calculate the ICV using the obtained (optional) FV.
* If the attribute icvFreshnessValueTxLength is defined, the FV shall be truncated and only the least significant bits shall be used in the message.
* Construct the AUTOSAR TLV Sub-TLV: Time Authenticated with (optional) FV and ICV (see ).
⌋

 Secure Time Synchronization message build attempts
  Upstream requirements:
⌈
For every message to be sent and secured, an Authentication Build Counter shall be maintained:

* The Authentication Build Counter shall be set to 0 if the operation was successful.
* If the query of the FV apext::tsync::FVM::GetTxFreshness returns a recoverable error kFVNotAvailable, or an error occurs during calculation of the ICV, the Authentication Build Counter is incremented and the ICV generation will be retried.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 123 章（内容从略，见纯文本全文）

55. Time Slave
56. 功能性 cluster life cycle
57. 启动
58. Default values
59. 关机
60. Daemon crash
61. Reporting
62. 安全事件
63. Log Messages
64. API 规范
65. PortInterface to API class binding
66. Header：ara/tsync/consumer_time_base_validation_notification.h
67. Class：ConsumerTimeBaseValidationNotification
68. Public Member Functions
69. Special Member Functions
70. Member Functions
71. Header：ara/tsync/provider_time_base_validation_notification.h
72. Class：ProviderTimeBaseValidationNotification
73. Public Member Functions
74. Special Member Functions
75. Member Functions
76. Header：ara/tsync/synchronized_time_base_consumer.h
77. Non-Member 类型
78. Class：SynchronizedTimeBaseConsumer
79. Public Member Functions
80. Special Member Functions
81. Constructors
82. Member Functions
83. Header：ara/tsync/synchronized_time_base_provider.h
84. Class：SynchronizedTimeBaseProvider
85. Public Member Functions
86. Special Member Functions
87. Constructors
88. Member Functions
89. Header：ara/tsync/synchronized_time_base_status.h
90. Non-Member 类型
91. Class：SynchronizedTimeBaseStatus
92. Public Member Functions
93. Special Member Functions
94. Member Functions
95. Struct：UserData
96. Public Member Variables
97. Header：ara/tsync/time_precision_measurement_type.h
98. Struct：TimePrecisionMeasurement
99. Public Member Variables
100. Header：ara/tsync/time_validation_measurement_types.h
101. Struct：PdelayInitiatorMeasurementType
102. Public Member Variables
103. Struct：PdelayResponderMeasurementType
104. Public Member Variables
105. Struct：TimeMasterMeasurementType
106. Public Member Variables
107. Struct：TimeSlaveMeasurementType
108. Public Member Variables
109. Header：ara/tsync/timestamp.h
110. Non-Member 类型
111. Struct：TimeBase
112. Public Member 类型
113. Public Member Variables
114. Header：ara/tsync/tsync_error_domain.h
115. Non-Member 类型
116. Non-Member Functions
117. Other
118. Class：TsyncErrorDomain
119. Public Member 类型
120. Public Member Functions
121. Special Member Functions
122. Member Functions
123. Class：TsyncException
124. Public Member Functions
125. Constructors
126. 服务接口
127. 配置
128. Default Values
129. Semantic Constraints
130. 附录
131. Mentioned 清单 Elements
132. Demands and constraints on Base 软件 (normative)
133. 接口 to other 功能性 Clusters (informative)
134. Header：apext/tsync/fvm.h
135. Struct：FVContainer
136. Public Member Variables
137. Class：FVM
138. Public Member Functions
139. Member Functions
140. Header：apext/tsync/fvm_error_domain.h
141. Non-Member 类型
142. Non-Member Functions
143. Other
144. Class：TsyncFvmErrorDomain
145. Public Member 类型
146. Public Member Functions
147. Special Member Functions
148. Member Functions
149. Class：TsyncFvmException
150. Public Member Functions
151. Constructors
152. Change History
153. Change History of this document according to AUTOSAR Release R23-11
154. Added 规范 Items in R23-11
155. Changed 规范 Items in R23-11
156. Deleted 规范 Items in R23-11
157. Change History of this document according to AUTOSAR Release R24-11
158. Added 规范 Items in R24-11
159. Changed 规范 Items in R24-11
160. Deleted 规范 Items in R24-11
161. Added Constraints in R24-11
162. Changed Constraints in R24-11
163. Deleted Constraints in R24-11
164. Change History of this document according to AUTOSAR Release R25-11
165. Added 规范 Items in R25-11
166. Changed 规范 Items in R25-11
167. Deleted 规范 Items in R25-11
168. Added Constraints in R25-11
169. Changed Constraints in R25-11
170. Deleted Constraints in R25-11
171. Change History of this document according to AUTOSAR Release R26-11
172. Added 规范 Items in R26-11
173. Changed 规范 Items in R26-11
174. Deleted 规范 Items in R26-11
175. Added Constraints in R26-11
176. Changed Constraints in R26-11
177. Deleted Constraints in R26-11
