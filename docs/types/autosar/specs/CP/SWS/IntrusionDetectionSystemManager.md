# Specification of Intrusion Detection System Manager (`IntrusionDetectionSystemManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 977 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_IntrusionDetectionSystemManager_977\AUTOSAR_CP_SWS_IntrusionDetectionSystemManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_IntrusionDetectionSystemManager_977\AUTOSAR_CP_SWS_IntrusionDetectionSystemManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_IntrusionDetectionSystemManager_977\zzgen\CP_SWS_IntrusionDetectionSystemManager.complete.txt`

## 文档简介

This specification describes the functionality, API, and the configuration for the AUTOSAR Basic Software module Intrusion Detection System Manager (IdsM).

The IdsM is part of the AUTOSAR Intrusion Detection System (IDS).

An overview and description of the elements of a distributed IDS according to AUTOSAR is available in the IDS requirement specification .

The software component IdsM provides a standardized interface for receiving notifications of on-board security events SEv. The SEvs can be reported by security sensors implemented in Basic Software Modules (BSW) and application Software Components (SW-C).

Additionally, the SEvs can be reported with optional context data such as event type and suspicious data, which can be useful information for the security forensic performed at the backend.

Besides collecting, the IdsM has the capability of qualifying SEvs according to configurable rules. The IdsM filters and transforms reported SEvs to qualified on-board security events (QSEv). The QSEv are further handled by the IdsM for storage or forwarding.

Depending on the overall security concept, QSEv can be persisted locally on the ECU via Security Event Memory (Sem), propagated towards configured sinks, or both. The available sinks are the Diagnostic Event Manager (Dem) module and the IDS Reporter Module (IdsR), which might pass the QSEv data to a security operation center (SOC) in the backend.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API, and the configuration for the AUTOSAR Basic Software module Intrusion Detection System Manager (IdsM).

The IdsM is part of the AUTOSAR Intrusion Detection System (IDS).

An overview and description of the elements of a distributed IDS according to AUTOSAR is available in the IDS requirement specification .

The software component IdsM provides a standardized interface for receiving notifications of on-board security events SEv. The SEvs can be reported by security sensors implemented in Basic Software Modules (BSW) and application Software Components (SW-C).

Additionally, the SEvs can be reported with optional context data such as event type and suspicious data, which can be useful information for the security forensic performed at the backend.

Besides collecting, the IdsM has the capability of qualifying SEvs according to configurable rules. The IdsM filters and transforms reported SEvs to qualified on-board security events (QSEv). The QSEv are further handled by the IdsM for storage or forwarding.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Intrusion Detection System Manager module that are not included in the `AUTOSAR_FO_TR_Glossary` .

| Abbreviation / Acronym: | Description: |
|---|---|
| Csm | Crypto Service Manager |
| Dcm | Diagnostic Communication Manager |
| Dem event | Diagnostic Event Manager event |
| ECUC | ECU configuration |
| IDS | Intrusion Detection System |
| IdsM | Intrusion Detection System Manager |
| IdsR | Intrusion Detection System Reporter |
| IF | Interface |
| NvM | Non-volatile memory |
| PduR | PDU Router |
| QSEv | Qualified Security Event |
| SecXT | Security Extract |
| Sem | Security Event Memory |
| SEv | On-board Security Event |
| SOC | Security Operation Center |
| StbM | Synchronized Time-Base Manager |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 相关规范
*原文标题：Related Specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for the Intrusion Detection Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for the Intrusion Detection Manager.

This document is part of the AUTOSAR IDS specification and covers aspects specific to Classic Platform only. For other aspects of the IDS specification, please refer to the following documents:

* `AUTOSAR_RS_Intrusion` Detection System : Specifies IDS system requirements.
* `AUTOSAR_PRS_IntrusionDetectionSystem` : Specifies the communication protocol for the transmission of security events.
* `AUTOSAR_MOD_GeneralDefinitions` : Standardized Security Events reported by AUTOSAR BSW
* `AUTOSAR_TPS_SecurityExtractTemplate` : Specifies the Security Extract.

### 5. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 6. 约束与假设
*原文标题：Constraints and assumptions*

⌈
The Intrusion Detection System Manager has no knowledge of the meaning of the context data reported within a SEv; thus, it can not determine independently if a system has being compromised or not. Identification and threat response is realized outside of the scope of IdsM, e.g., in a SOC.
⌋

### 7. Assumptions

The following assumptions have been made in the design of the IdsM concept:

* Precision of timestamps: The timestamps of events received by the backend may be inaccurate to some degree. However, it shall be possible in most cases to extract the order of events from the events received by the backend. In some cases, this might not be possible, e.g., because of events occurring in parallel on different ECUs or because of inherent tolerances in time synchronization.

* Uniqueness of QSEv: Events do not need to be uniquely identifiable. Two events may contain the same data.

* Dropping of events: It is acceptable that SEvs are dropped depending on their reporting frequency and criticality, e.g., a general overload of the system.

* Semantics of events: Security-related events are indicative of a potential ongoing attack or are somehow suited to assess the security state of the vehicle. Meaning that events can occur during the normal operation without any attack happening.

### 8. 适用的车型领域
*原文标题：Applicability to Car Domains*

The AUTOSAR Intrusion Detection System Manager is generic and provides flexible configuration. It is independent of the underlying communication system and can be applied to any automotive domain under limitations and assumptions provided above.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. 接口 to 模块
*原文标题：Interfaces to Modules*

The AUTOSAR Intrusion Detection System Manager includes header files of the modules BswM, Dcm, DET, Dem, NvM, PduR, and the RTE. Furthermore, it provides generic interfaces to Basic Software Modules and Software Components (Sensors) for reporting their SEvs.

Figure  shows the interfaces provided to and required from other modules in the AUTOSAR BSW.

### 11. Sensor 模块
*原文标题：Sensor Modules*

The IdsM provides generic IdsM interfaces that notify Security Events (SEvs) with additional information depending on the configuration.

Standard API Used by the Basic Software Modules and by Software Components.

* Notification of a SEv
* Notification of a SEv with context data

Smart Sensor API Used by software components in cases in which it is necessary to transmit an event count and a timestamp. These additional parameters are already calculated by a smart sensor. They are located either in a SW-C or a Cdd.

* Notification of a SEv with a counter
* Notification of a SEv with a counter and context data
* Notification of a SEv with a timestamp and a counter
* Notification of a SEv with a timestamp, a counter and context data

### 12. 错误处理模块
*原文标题：Error Handling Modules*

IdsM reports development errors to the Default Error Tracer.

### 13. 诊断 Access
*原文标题：Diagnostic Access*

The Dcm module is able to modify the configuration of the events' reporting level.

### 14. Persistence of Reporting Level

The NvM module persists the configuration values of the events' reporting level.

### 15. IdsR Sink

The PduR is used in case the events are configured to be sent to the IdsR sink; The sending of the events is bus independent.

### 16. Dem / Sem Sink

The Dem module is used in case the events are configured to be logged in the Dem / Sem sink.

### 17. BSW Scheduler

The IdsM needs cyclic invocation of its main scheduling function in order to evaluate and handle the reported SEvs.

### 18. 文件结构
*原文标题：File Structure*

This section explains the file structure of the IdsM.

### 19. 代码文件结构
*原文标题：Code File Structure*

For details, refer to the section 5.1.6 "Code file structure" in .

### 20. 头文件结构
*原文标题：Header File Structure*

Besides the files defined in section 5.1.7 "Header file structure" in , the Intrusion Detection System Manager module needs to include the files defined below.

⌈
The IdsM module shall include the header file Det.h if the parameter IdsMDevErrorDetect is enabled.
⌋

⌈
The IdsM module shall include the header file Dem.h if the parameter IdsMSinkDem is enabled.
⌋

⌈
The IdsM module shall include the header file Dcm.h if the parameter IdsMDiagnosticSupport is enabled.
⌋

⌈
The IdsM module shall include the header file NvM.h if the parameter IdsMNvmBlockDescriptor is configured.
⌋

⌈
The IdsM module shall include the header file PduR.h if the parameter IdsMSinkIdsR is enabled.
⌋

### 21. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in the IDS requirement specification , the Specification of Intrusion Detection System Protocol  and BSW General system requirement specification  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Initialization of the IdsM |  |  |
| Provide Interface for reporting SEv |  |  |
| IdsM shall buffer reported SEv for callers |  |  |
| Provide configurable filter chains for qualifying SEv |  |  |
| Provide multiple filter chains |  |  |
| Configure reporting mode per Security Event Type and IdsM instance |  |  |
| Support machine state filter |  |  |
| Support sampling filter |  |  |
| Support Aggregation filter |  |  |
| Support Threshold filter |  |  |
| Persist QSEv records |  |  |
| Event Timestamps |  |  |
| Timestamp Sources |  |  |
| Authenticity of QSEvs |  |  |
| The IdsM shall allow to transmit QSEv to the IdsR |  |  |
| Limit event rate and traffic |  |  |
| Configuration of qualification filters for SEv |  |  |
| Configuration of persistency handling for QSEv |  |  |
| Configuration of propagation handling for QSEv |  |  |
| Reconfigu |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 功能规范
*原文标题：Functional specification*

### 23. 概述
*原文标题：Overview*

The Intrusion Detection functionality consists of collecting possible security events, handle them with filter rules and forward them towards configured sinks.

This chapter specifies the functional behavior of the IdsM for the Classic Platform.

Figure  shows how the IdsM is integrated in the AUTOSAR BSW security stack:

The modules that act as sensors and report SEvs towards the IdsM are:

* AUTOSAR Basic Software Modules (BSW)
* Proprietary Complex Device Drivers (CDD)
* Application Software Components (SW-C)

The collected On-board Security Event SEvs are processed by a series of configured rules called "Filter Chains" into QSEvs, which can be sent to the following sinks:

* Intrusion Detection System Reporter (IdsR), using the PduR for transmission of the QSEvs.
* Dem / Sem Module, for local persistence of the QSEv records.

It is possible to reconfigure specific event parameters and filter qualifiers via diagnostics using the Dcm module.

Optionally integrity and confidentiality of the QSEv records can be enforced via crypto-algorithms.

Figure  shows the interaction with the modules mentioned above.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 模块处理
*原文标题：Module Handling*

The functionality of the IdsM is divided into the following functional sub-modules:

* Reception of Events
* Buffering of Events
* IdsM Internal SEvs
* Qualification of Events
* Reporting of QSEvs
* Persistence of specific parameter of events in NvM
* Read and Write specific parameters of events via diagnostics with Dcm

Figure  shows the allocation in the stack of the functional sub-modules listed above, these are described in detail throughout this chapter .

### 25. 初始化
*原文标题：Initialization*

The IdsM module is initialized via `IdsM_Init`. Except for `IdsM_Init`, the API functions of the IdsM module may only be called after the module has been properly initialized.

 Initialisation
  Upstream requirements:
⌈
A call to `IdsM_Init` initializes all internal variables and sets the IdsM module to the initialized state.
⌋

 Error UnInit
  Upstream requirements:
⌈
If development error reporting is enabled via IdsMDevErrorDetect, the IdsM module shall call `Det_ReportError` with the error code `IDSM_E_UNINIT` when any API other than `IdsM_Init` is called in uninitialized state.
⌋

 Error ReInit
  Upstream requirements:
⌈
When `IdsM_Init` is called in initialized state, the IdsM module shall not re-initialize its internal variables. It shall instead call `Det_ReportError` with the error code `IDSM_E_ALREADY_INITIALIZED` if development error reporting is enabled (see IdsMDevErrorDetect).
⌋

### 26. 时序 Related Functionality
*原文标题：Timing Related Functionality*

To be able to handle the security events and their filters asynchronously, the IdsM module is triggered cyclically via the `IdsM_MainFunction`.

### 27. Reception and 缓冲 of Events
*原文标题：Reception and Buffering of Events*

### 28. Reception of Events

If a sensor reports a security event via the IdsM services `IdsM_ReportSecurityEvent`, without and with context data respectively, an event buffer from the IdsM event buffer pool is used and processed asynchronously in the `IdsM_MainFunction` function.

If context data exists, a context data buffer with the adequate size will be used. If there are currently no context buffers available, the event is processed without context data.

The service `IdsM_ReportSecurityEvent` can be used by any sensor, independently of its source.

### 29. Smart Sensors

Smart sensors provide additional information to the standard sensors. The smart sensors can be a SW-C or a CDD which previously records a timestamp and calculates a counter for a certain SEv Type. The services in this section are available though:

* Service interfaces for the SW-Cs. (Refer to: ).
* Direct C API call for the CDDs.

 Reception of SEvs with optional parameters
  Upstream requirements:
⌈
The IdsM shall be able to receive SEvs with additional optional parameters such as timestamp, counter calculated from a smart sensor and the versioned SEv context data, with the service `IdsM_ReportSecurityEvent`.

Note: For reporting SEvs with context data, the security sensor provides a context data pointer to a byte array where the context data is available, the corresponding size and version. The IdsM shall not rely on knowledge of the internal structure of the context data. For reporting a SEv with a timestamp but with no previously calculated counter, the security sensor provides the count value as 1.
⌋

 Max Length Context Data
⌈
IdsM shall support a maximum length of 1500 bytes for the context data.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Security Event 定义
*原文标题：Security Event Definition*

A Security Event or Security Event Instance SEv defines the atomic unit, reported by a sensor, that can be handled by the IdsM module. The IdsM receives the notification of a sensor from BSW or CDD modules, or from SW-Cs via the RTE. The IdsM module uses the EventId to manage the status of the SEv of a system and performs the required actions for individual results, e.g., filtering, storing, reporting via the network. A Security Event Definition represents the type of event to be reported. The definition, found in the SecXT, includes a global unique identifier and the short-name of the reporting module.

⌈
The IdsM module shall represent each SEv instance by an IdsMExternalEventId, a IdsMSensorInstanceId, a IdsMInternalEventId, and the related EventName. These combination of parameters shall be unique per IdsM instance represented by the ECU configuration.
⌋

⌈
Each SEv shall have an IdsMInternalEventId. This parameter shall not be configured manually. The IdsM shall calculate the value of this parameter internally and shall publish the value in the parameter. This ID is used for internal handling of the SEvs.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Buffers

Event Buffers configurable
  Upstream requirements:
⌈
The IdsM shall have a configurable number of event buffers IdsMNumberOfEventBuffers, depending on the amount of configured IdsMEvents that are to be handled.
⌋

A recommended number of buffers can be calculated as follows: Number of Event Buffers = Number of Event Aggregation Filter instances + Upper bound of parallel processed events

 Event Buffer storage
  Upstream requirements:
⌈
Upon reception of a SEv, the IdsM shall store the event in an Event Buffer until it can be further processed. Event buffers shall be handled and filtered asynchronously in the `IdsM_MainFunction` service.
⌋

 Availability of Event Buffer
  Upstream requirements:
⌈
In case no Event Buffer is found. The IdsM internal SEv 'No Event Buffer Available' shall be triggered, in case it has been configured.
⌋

See `SEV_IDSM_NO_EVENT_BUFFER_AVAILABLE` in .

 Context Data Buffers configurable
  Upstream requirements:
⌈
The IdsM shall have a configurable number of context data buffers IdsMNumberOfContextDataBuffers with different configurable sizes IdsMContextDataBufferSize in order to satisfy different sensor use cases.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Context 数据 Modifier
*原文标题：Context Data Modifier*

An application shall be able to change the content of the originally reported context data of incoming SEvs.

If context data is to be modified, a combination of a IdsMContextDataModifierCallout and a IdsMContextDataModifierOptions can be configured.

The IdsMContextDataModifierCallout function is used to modify the context data and the contextDataSize is used to find a context data buffer of the adequate size.

  Upstream requirements:
⌈
If the Context Data Modifier is configured, the IdsM shall call ContextDataModifierCallout directly after the corresponding SEv is reported, as long as the reporting mode is DETAILED or `DETAILED_BYPASSING_FILTERS`.
⌋

  Upstream requirements:
⌈
If IdsM calls ContextDataModifierCallout, then it shall use the context data provided by the out parameter modifiedContextData as the SEv's context data.
⌋

The IdsM can configure two kinds of context data modifiers:

* A specific modifier, IdsMContextDataModifierCallout, which affects only the SEvs linked to it.
* A global modifier, IdsMGlobalContextDataModifierCalloutFct, which affects all configured SEvs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Context 数据 Endianess
*原文标题：Context Data Endianess*

SEv context data is generally structured (see e.g. ) and can contain multiple elements. On the IdsM side, the internal structure of the context data is not visible, as the context data is provided by the IDS sensor as a byte array.

In order to to fulfill , all context data elements need to be provided in big endian byte order. This needs to be considered when constructing the SEv context data, i.e., the IDS sensor needs to take care of the endianess before submitting the SEv to the IdsM.

The API descriptions in Chapter  have been adapted accordingly to ensure that IDS sensors provide context data with correct byte order.

### 34. IdsM Internal SEvs

The module IdsM itself can also be used as a Security Event sensor.

 Internal Security Events
  Upstream requirements:
⌈
The security events reported by IdsM module are listed in .
⌋

 Security events for IdsM
  Upstream requirements:
⌈
| Name | Description | ID |
|---|---|---|
| SEV_IDSM_NO_EVENT_BUFFER_AVAILABLE | A SEv cannot be handled because there are no more event buffers available to process the event. | 46 |
| SEV_IDSM_NO_CONTEXT_DATA_BUFFER_AVAILABLE | The context data of an incoming event cannot be stored because there are no more context data buffers available. | 47 |
| SEV_IDSM_COMMUNICATION_ERROR | An error occurred when sending a QSEv via PDU. | 49 |
| SEV_IDSM_NO_QUALIFIED_EVENT_BUFFER_AVAILABLE | A security event raised when a QSEv has to be dropped due to insufficient QSEv buffers available. | 87 |
| SEV_IDSM_STATISTICS | A SEV reported by application to snapshot the IdsM statistics data. | 126 |

⌋

 Independent Buffers
  Upstream requirements:
⌈
In case the IdsM Internal Events are configured, the IdsM shall provide own buffers for each one of these SEvs. These are dedicated buffers, independent from the common Event Buffers used for normal SEvs. Each of these buffers should store a single SEv.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Qualification of SEvs

Raw Security Events can be generated at a very high rate by the BSW. However, only a subset of these events might be of interest to the OEM. By preprocessing the raw SEv and dropping all events that do not match the filtering criteria, resource needs on the ECUs and the network can be reduced.

 Security Events stored in Event Buffer
  Upstream requirements:
⌈
The IdsM shall store the SEvs in the Event Buffers and process them asynchronously in the `IdsM_MainFunction` service in order to identify them as QSEvs.
⌋

 Qualification by Filtering
  Upstream requirements:
⌈
The qualification of reported security events shall take place by evaluating the processed SEv against a configurable sequence of filters, known as the filter chain.
⌋

⌈
A SEv shall contain the information of the filter chain that is used to qualify it into a QSEv.
⌋

Notes:

* A SEv is able to have no filter chain associated to it.
* Several events can be assigned to a filter chain. All assigned events share the same settings of a filter. However, each assigned event has its own variable part for the filter (e.g. counter).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Filter Chain

Filter chains are configured using the SecXT model.

 Filter chain selection
  Upstream requirements: ,
⌈
When a SEv is reported, the IdsM shall apply the filter chain that is mapped to it.
⌋

 Filter chain evaluation
  Upstream requirements:
⌈
IdsM shall evaluate the filter chain after evaluating the reporting mode.
⌋

 Possible Filters
  Upstream requirements:
⌈
Each filter chain may consist of the following filters:

* BlockState Filter
* Forward Every nth Filter
* Event Aggregation Filter
* Event Threshold Filter
* Event Rate Limitation
* Traffic Limitation
⌋

Note: Each filter can be activated by aggregating the respective Filter object at the SecurityFilterChain object in the model.

 Filter chain order
  Upstream requirements:
⌈
IdsM shall evaluate all activated filter in the order BlockState Filter, Forward-Every-nth Filter, Event Aggregation Filter, Event Threshold Filter.
⌋

 Dropping of SEvs
  Upstream requirements:
⌈
If the evaluation of one filter leads to dropping the SEv, IdsM shall not evaluate any additional filter.
⌋

After successful evaluation of the configured filter chain, the security event is defined as qualified (QSEv).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Blocker Filters

The blocker filters drop processed SEvs that do not match the filter criteria. These are filters specific to an instance of a SEv.

### 38. Reporting 模式 Filter
*原文标题：Reporting Mode Filter*

The reporting mode filter enables the possibility to decide the detail of information of a SEv that is forwarded, bypass the filter chain or turn off the processing of certain SEv.

 Mandatory for each Security Event
  Upstream requirements:
⌈
The IdsM shall provide a reporting mode filter for each instance of SEv ID. This Filter is mandatory for each configured SEv.
⌋

 Link to Security Event
  Upstream requirements:
⌈
The reporting mode filter shall not part of a filter chain. It shall be directly linked to the respective SEv.
⌋

Note: A SEv does not have to be assigned to a filter chain.

 Reporting Mode
  Upstream requirements:
⌈
IdsM shall determine the default reporting mode of each reported SEv from the IdsMReportingModeFilter.
⌋

 Reporting Mode Options
  Upstream requirements:
⌈
| Reporting Mode Level | Related Behavior |
|---|---|
| OFF | IdsM shall discard the SEv without further processing. |
| BRIEF | If the SEv has been reported including context data, IdsM shall shall discard the context data from further processing, transmission, and storage. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Block 状态 Filter
*原文标题：Block State Filter*

⌈
The IdsM shall provide a block state filter. See IdsMBlockStateFilter.
⌋

⌈
The block state filter shall represent a list of states in which the collection of the SEvs shall be blocked (the SEvs shall be dropped).
⌋

⌈
The IdsM shall be informed, by the BswM module, about the current state with the callback service `IdsM_BswM_StateChanged`. This information shall be used when a block state filter is processed in the main function asynchronously.
⌋

 Block State Filter
  Upstream requirements:
⌈
If IdsM evaluates the Block State Filter and the current block state equals one of the states referenced by IdsMBlockState, then IdsM shall drop the SEv.
⌋

⌈
The block state filter shall forward the SEv to the next filter in the chain if the current state is not part of the list. In case this is the last filter in the chain, the filter forwards the QSEv to the sink.
⌋

Note: The possible States that can be contained in the filter are described in IdsMBlockState. The BswM reports the current IdsM state with the service `IdsM_BswM_StateChanged` using the symbolic name of the IdsM Block State Identifier IdsMBlockStateID.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Sampling Filters

The sampling filters forward only certain events out of all incoming security events. These are filters specific to an instance of a SEv.

### 41. Forward Every Nth

⌈
The IdsM shall provide Forward Every Nth filter.
⌋

 Sampling Filter
  Upstream requirements:
⌈
If IdsM evaluates the sampling filter for a SEv, IdsM shall drop all the SEvs but every nth, where n is defined in IdsMNthParameter. Forwarding of SEvs starts with the first received SEv. Then every nth SEv is forwarded.
⌋

An implementation will typically maintain one counter that will be incremented when an SEv of given type is evaluated by the sampling filter. If the counter equals n the SEv is not dropped and the counter is reset to 0.

 Sampling Filter Initialization
  Upstream requirements:
⌈
IdsM shall initialize the sampling filter for a SEv so that the first received SEv is forwarded.
⌋

Example: IdsMNthParameter is set to 3 for a certain event type, then SEvs 1, 4, 7, ... will be forwarded by the IdsM (1 describing the first SEv reported after reset).

⌈
The forwarding of the SEvs by the Forward Every Nth filter shall be done without modification of SEv data.
⌋

e.g. Counter remains with the original value.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Aggregation Filters

All SEv of a given type occurring within a configured time interval are aggregated into one SEv with an additional counter information attached that indicates how often the event occurred in the time interval.

### 43. Event Aggregation Filter

⌈
The IdsM shall provide an aggregation filter.
⌋

 Configuration of Event Aggregation Filter
  Upstream requirements:
⌈
The parameter IdsMEventAggregationTimeInterval shall represent the duration of the interval during which SEvs of the given type shall be aggregated.
⌋

⌈
The aggregation filter shall forward a SEv with the sum of the SEv's counters processed in an interval. Considering the configuration for a specific SEv, of the aggregation filter's time interval with value l_j for IdsMEventAggregationTimeInterval, the filter shall count the number of events of the same ID j received during a single aggregation time interval l_j
⌋

 No Event Forwarding During Interval
  Upstream requirements:
⌈
The aggregation filter shall not forward (i.e., to the next filter) any incoming SEv during the aggregation interval.
⌋

At the end of each aggregation interval, the aggregation filter shall implement the following logic for each Security Event Type:

 End of Interval: No Event
  Upstream requirements:
⌈
If no SEv of the same event type has been received by the aggregation filter in the past aggregation interval, no action shall be taken.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Event Threshold Filter

⌈
The IdsM shall provide a threshold filter.
⌋

 Event Dropping Below Threshold
  Upstream requirements:
⌈
The threshold filter shall drop an SEv of given type if the sum of count parameters of all SEvs of given type that were processed by the event threshold filter in the current threshold interval is smaller than the configured parameter IdsMEventThresholdNumber.
⌋

 Event Forwarding Above Threshold
  Upstream requirements:
⌈
The threshold filter shall forward an SEv of given type if the sum of count parameters of all SEvs of given type that were processed by the event threshold filter in the current threshold interval is equal to or greater than the configured parameter IdsMEventThresholdNumber.
⌋

Considering the configuration for a specific SEv, of the threshold filter l_j for IdsMEventThresholdTimeInterval, and a threshold number p for IdsMEventThresholdNumber, the filter shall count the incoming SEvs with the same ID j received during a single aggregation time interval l_j and drops the first p - 1 events. All further incoming SEvs (equal or greater than p) shall be immediately forwarded until the end of the interval l_j.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 124 章（内容从略，见纯文本全文）

45. Rate Limitation Filters
46. Event Rate Limitation
47. Traffic Limitation
48. Timestamp
49. Reporting and Persistence of SEVs
50. 结构 Of QSEVs
51. Propagation of QSEvs：IdsR Sink
52. Authenticity of QSEvs
53. IDS 服务接口 Options
54. Transmission Protocols
55. Transmission Retry 处理
56. Storage of Events：Dem / Sem Sink
57. Persistence in NvM of 配置
58. Reconfiguration of SEvs
59. Reconfiguration via 诊断
60. Reconfiguration via Reporting 模式 API
61. Statistics
62. 配置 IdsM Statistics
63. Security Event IdsM Statistics
64. 错误分类
65. Development 错误
66. Runtime 错误
67. Production 错误
68. Extended Production 错误
69. 错误检测 and 通知
70. Api Parameter Checking
71. API 规范
72. Imported 类型
73. 类型定义
74. IdsM_ConfigType
75. IdsM_SecurityEventIdType
76. IdsM_SensorInstanceIdType
77. IdsM_Filters_BlockStateType
78. IdsM_Filters_ReportingModeType
79. IdsM_ReportingModeStatusType
80. IdsM_ReturnType
81. IdsM_TimestampDataType
82. IdsM_TransmissionStateType
83. 功能定义
84. IdsM_Init
85. IdsM_ReportSecurityEvent
86. IdsM_GetReportingMode
87. IdsM_SetReportingMode
88. IdsM_GetStatusReportingMode
89. Callback 通知
90. IdsM_BswM_StateChanged
91. IdsM_TpTxConfirmation
92. IdsM_TxConfirmation
93. IdsM_CopyTxData
94. IdsM_Dcm_GetReportingMode_RequestResults
95. IdsM_Dcm_GetReportingMode_Start
96. IdsM_Dcm_SetReportingMode_Start
97. IdsM_DemReadQSEv
98. IdsM_CsmNotification
99. IdsM_TransmissionSetState
100. Scheduled Functions
101. IdsM_MainFunction
102. Expected 接口
103. Mandatory 接口
104. Optional 接口
105. Configurable 接口
106. 服务接口
107. Client-Server 接口
108. IdsM_IdsMService(EventName)
109. IdsM_RequestCustomTimestamp
110. IdsM_ReportingModeService
111. Implementation 数据类型
112. Ports
113. Port IdsM_IdsMService
114. Port IdsM_RequestCustomTimestamp
115. Port IdsM_ReportingModeService
116. Callout 接口
117. IdsMContextDataModifierCallout
118. 时序图
119. Sequence diagram for storage of qualified security events in Dem
120. Timestamp Sequence Diagrams
121. 配置规范
122. Containers and 配置 parameters
123. IdsM
124. IdsMGeneral
125. IdsMGlobalRateLimitationFilter
126. IdsMSecurityEventRefs
127. IdsMFilterEventRateLimitation
128. IdsMFilterTrafficLimitation
129. IdsMTimestamp
130. IdsMAuthenticator
131. IdsMConfiguration
132. IdsMFilterChain
133. IdsMBlockStateFilter
134. IdsMForwardEveryNthFilter
135. IdsMEventAggregationFilter
136. IdsMEventThresholdFilter
137. IdsMPdus
138. IdsMIfTxPdu
139. IdsMEventTpTxPdu
140. IdsMTransmissionRetry
141. IdsMBufferConfiguration
142. IdsMContextDataBuffer
143. IdsMEventBuffers
144. IdsMQualifiedEventBuffers
145. IdsMEvent
146. IdsMReportingModeFilter
147. IdsMServiceInterfaceOptions
148. IdsMContextDataModifierOptions
149. IdsMBlockState
150. IdsMContextDataModification
151. 配置 Constraints
152. 发布信息
153. 附录
154. Change history of AUTOSAR traceable items
155. Traceable item history of this document according to AUTOSAR Release R26-11
156. Added 规范 Items in R26-11
157. Changed 规范 Items in R26-11
158. Deleted 规范 Items in R26-11
159. Added Constraints in R26-11
160. Changed Constraints in R26-11
161. Deleted Constraints in R26-11
162. Traceable item history of this document according to AUTOSAR Release R25-11
163. Added 规范 Items in R25-11
164. Changed 规范 Items in R25-11
165. Deleted 规范 Items in R25-11
166. Added Constraints in R25-11
167. Changed Constraints in R25-11
168. Deleted Constraints in R25-11
