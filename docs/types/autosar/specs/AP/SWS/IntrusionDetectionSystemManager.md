# Specification of Intrusion Detection System Manager for Adaptive Platform (`IntrusionDetectionSystemManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 978 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_IntrusionDetectionSystemManager_978\AUTOSAR_AP_SWS_IntrusionDetectionSystemManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_IntrusionDetectionSystemManager_978\AUTOSAR_AP_SWS_IntrusionDetectionSystemManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_IntrusionDetectionSystemManager_978\zzgen\AP_SWS_IntrusionDetectionSystemManager.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Adaptive Functional Cluster IdsM.

## 模块依赖

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Intrusion Detection System Mananger to other Functional Clusters. Section  lists the interfaces required by Intrusion Detection System Mananger.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Adaptive Functional Cluster IdsM.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant to Intrusion Detection System Manager. A general list of acronyms and abbreviations is available in the .

| Acronym | Description: |
|---|---|
| Filter Chain | A set of consecutive filters which is applied to Security Events- |
| Intrusion Detection System | An Intrusion Detection System is a security control which detects and processes security events. |
| Intrusion Detection System Manager | The Intrusion Detection System Manager handles security events reported by security sensors. |
| Intrusion Detection System Reporter | The Intrusion Detection System Reporter handles qualified security events received from Idsm instances. |
| Security Extract | The Security Extract specifies which security events are handled by IdsM instances and their configuration parameters. |
| Security Event Type | A security event type can be identified by its security event type ID. Instances of security event types are called security events and share the same security event type ID. |
| Security Events | Onboard Security Events are instances of security event types which are reported by BSW or SWC to the IdsM. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

This document is part of the AUTOSAR IDS specification and covers the software specification for the Adaptive Platform. For other aspects of the IDS specification, please refer to the following documents:

* System Requirements Specification of Intrusion Detection System (RS IDS) : Specifies IDS system requirements.
* Protocol Requirements on transmission of qualified security events (PRS IDS) : Specifies the communication protocol between for the transmission of security events.
* Security Extract Template : Specifies the Security Extract.

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. Further Applicable 规范
*原文标题：Further Applicable Specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

There are no known constraints and assumptions.

### 7. 已知限制
*原文标题：Known limitations*

There are no known limitations for this specification.

### 8. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Intrusion Detection System Mananger to other Functional Clusters. Section  lists the interfaces required by Intrusion Detection System Mananger.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

### 9. Provided 接口
*原文标题：Provided Interfaces*

Figure  shows interfaces provided by Intrusion Detection System Mananger to other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of interfaces provided to other Functional Clusters within the AUTOSAR Adaptive Platform.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| EventReporter | Communication Management | Communication Management may use this interface to report security events. |
| ^ | Diagnostic Management | Diagnostic Management uses this interface to report standardized security events. |
| ^ | Firewall | The Firewall uses this interface to report standardized security events. |

### 10. Required 接口
*原文标题：Required Interfaces*

Figure  shows interfaces required by Intrusion Detection System Mananger from other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of required interfaces from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Cryptography | CryptoStack | Adaptive Intrusion Detection System Manager uses this interface to sign security events. |
| Execution Management | ExecutionClient |  |
| Log and Trace | Logger | Adaptive Intrusion Detection System Manager shall use this interface to log standardized messages. |
| Time Synchronization | SynchronizedTimeBaseConsumer | Adaptive Intrusion Detection System Manager shall use this interface to determine timestamps of security events. |

### 11. 协议 layer dependencies
*原文标题：Protocol layer dependencies*

Security events generated via the IdsM API can be transmitted to the IdsR using the protocol specified in PRS IDS .

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in System Requirements Specification of Intrusion Detection System (RS IDS)  and the AUTOSAR RS General  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Usage of ara::core types |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| Handling of unsuccessful operations |  |  |
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
| Limit event r |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能规范
*原文标题：Functional specification*

This chapter specifies the functional behavior of the IdsM for the Adaptive Platform.

### 14. Event Generation

SWCLs and FCs can generate new security events using the IdsM API. All event types that can be generated by a SWCL are configured in the manifest and linked to a PortPrototype of the SWCL. Generating new events involves three steps:

# Construct an InstanceSpecifier object using the shortName path of the PortPrototype referencing the event type as the parameter.
# Construct an ara::idsm::EventReporter object by passing the InstanceSpecifier.
# Call the ara::idsm::EventReporter::ReportEvent function on the ara::idsm::EventReporter object.

Using the ara::idsm::EventReporter::ReportEvent function, an application can optionally provide a timestamp, a counter, and/or context data.

 EventReporter Constructor
  Upstream requirements:
⌈
The constructor ara::idsm::EventReporter::EventReporter shall create an ara::idsm::EventReporter instance that reports security events defined by the SecurityEventDefinition that is referenced by the SecurityEventMapping (via the SecurityEventForeignRef ) which also references

* the RPortPrototype (via the IdsmRPortPrototypeInExecutableInstanceRef) identified by the parameter instanceSpecifier and
* the calling Process (via the IdsmProcessForeignRef).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Context 数据 Endianess
*原文标题：Context Data Endianess*

SEv context data is generally structured (see e.g. ) and can contain multiple elements. On the IdsM side, the internal structure of the context data is not visible, as the context data is provided by the IDS sensor as a byte array.

In order to to fulfill , all context data elements need to be provided in big endian byte order. This needs to be considered when constructing the SEv context data, i.e., the IDS sensor needs to take care of the endianess before submitting the SEv to the IdsM.

### 16. Reporting 模式
*原文标题：Reporting Mode*

Reporting Mode
  Upstream requirements:
⌈
IdsM shall determine the default reporting mode of every reported SEv from the SecXT model parameter SecurityEventContextProps.defaultReportingMode.
⌋

 Reporting Mode Options
  Upstream requirements:
⌈
| Reporting Mode Level | Related Behavior |
|---|---|
| OFF | IdsM shall discard the SEv without further processing. |
| BRIEF | If the SEv has been reported including context data, IdsM shall shall discard the context data from further processing, transmission, and storage. |
| DETAILED | If the SEv has been reported including context data, IdsM shall keep the context data for potential transmission or persisting of the QSEv. |
| BRIEF_BYPASSING_FILTERS | IdsM shall report or persist the SEv without context data without further application of any filter chain. |
| DETAILED_BYPASSING_FILTERS | IdsM shall report or persist the SEv with context data (if provided by the sensor) without further application of any filter chain. |

⌋

### 17. Reconfiguration of Reporting 模式
*原文标题：Reconfiguration of Reporting Mode*

Get current reporting mode
  Upstream requirements: ,
⌈
The function ara::idsm::ReportingModeProvider::GetReportingMode shall provide the current reporting mode of the SEv specified by the parameter eventId.
⌋

 Set current reporting mode
  Upstream requirements: ,
⌈
The function ara::idsm::ReportingModeProvider::SetReportingMode shall change the reporting mode of the SEv specified by the parameter eventId to the mode specified by the parameter reportingMode.
⌋

### 18. Context 数据 Modification
*原文标题：Context Data Modification*

Context Data Modification
  Upstream requirements:
⌈
If ContextProviderMapping exists and an application registered a ara::idsm::ContextDataProvider via a call to ara::idsm::ContextDataProvider::Offer, then IdsM shall call the function ara::idsm::ContextDataProvider::ModifyContextData and use the modified context data for further processing of the SEv.
⌋

 Context Data Offset
  Upstream requirements:
⌈
If IdsM calls the function ara::idsm::ContextDataProvider::ModifyContextData, the parameter contextData shall be a span that contains the original context data at the offset originalContextDataOffset, which has been set at the constructor of the ara::idsm::ContextDataProvider. The size of the span shall be the size of the original context data plus the parameter additionalBytes.
⌋

### 19. Filter Chain

Filter chains are configured using the SecXT model element SecurityEventFilterChain.

 Filter chain selection
  Upstream requirements: ,
⌈
When a SEv is reported, the IdsM shall apply the filter chain that is mapped to the SecurityEventDefinition of the reported SEv via the SecurityEventContextMapping.
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

* Function Group State Filter
* Forward-Every-nth Filter
* Aggregation Filter
* Threshold Filter
⌋

 Filter chain configuration
  Upstream requirements:
⌈
Each filter can be activated by aggregating the respective Filter object at the SecurityEventFilterChain object in the model.
⌋

 Filter chain order
  Upstream requirements:
⌈
IdsM shall evaluate all activated filter in the order Function Group State Filter, Forward-Every-nth Filter, Aggregation Filter, Threshold Filter.
⌋

 Dropping of SEvs
  Upstream requirements:
⌈
If the evaluation of one filter leads to dropping the SEv, IdsM shall not evaluate any additional filter.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 功能 Group 状态 Filter
*原文标题：Function Group State Filter*

Function Group State Filter
  Upstream requirements:
⌈
If IdsM evaluates the Function Group State Filter and the current function group state equals one of the states referenced by SecurityEventStateFilter.blockIfStateActiveAp, then IdsM shall drop the SEv.
⌋

Note: The Function Group State Filter is comparable to the Machine State filter specified for IdsM on Classic Platform.

### 21. Sampling Filter

Sampling Filter
  Upstream requirements:
⌈
If IdsM evaluates the sampling filter for a SEv, IdsM shall drop all the SEvs but every n-th per SecurityEventDefinition, where n is defined by SecurityEventOneEveryNFilter.n.
⌋

An implementation will typically maintain one counter per SecurityEventDefinition that will be incremented when an SEv of given type is evaluated by the sampling filter. If the counter equals n the SEv is not dropped and the counter is reset to 0.

 Sampling Filter Initialization
  Upstream requirements:
⌈
IdsM shall initialize the sampling filter for a SEv so that the first received SEv per SecurityEventDefinition is forwarded.
⌋

Example: SecurityEventOneEveryNFilter.n is set to 3 for a certain event type, then SEvs 1, 4, 7, ... will be forwarded by the IdsM (1 describing the first SEv reported after reset).

### 22. Aggregation Filter

All SEv of a given type occurring within a configured time interval are aggregated into one SEv with an additional counter information attached that indicates how often the event occurred in the time interval.

 Configuration of Aggregation Filter
  Upstream requirements:
⌈
The integrator shall configure the parameter SecurityEventAggregationFilter.minimumIntervalLength to be the duration of the interval during which SEvs of the given type shall be aggregated.
⌋

 Start of Intervals
  Upstream requirements:
⌈
The intervals used for the Aggregation Filter and the Threshold Filter shall first start after initialization of IdsM. Subsequent intervals shall start with the end of the previous interval of the same filter.
⌋

 No Event Forwarding During Interval
  Upstream requirements:
⌈
The aggregation filter shall not forward (i.e., to the next filter) any incoming SEv during the aggregation interval.
⌋

At the end of each aggregation interval, the aggregation filter shall implement the following logic for each Security Event Type:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Threshold Filter

Event Dropping Below Threshold
  Upstream requirements:
⌈
The threshold filter shall drop an SEv of given type if the sum of count parameters of all SEvs of given type that were processed by the threshold filter in the current threshold interval is smaller than the configured parameter SecurityEventThresholdFilter.thresholdNumber.
⌋

 Event Forwarding Above Threshold
  Upstream requirements:
⌈
The threshold filter shall forward an SEv of given type if the sum of count parameters of all SEvs of given type that were processed by the threshold filter in the current threshold interval is equal to or greater than the configured parameter SecurityEventThresholdFilter.thresholdNumber.
⌋

### 24. Qualification

Event Forwarding Above Threshold
  Upstream requirements:
⌈
Filter algorithms shall not cause the SEv count to overflow. If the maximum value is reached, the value shall not be incremented any further.
⌋

After a SEv has successfully passed the last configured filter of the filter chain, it is considered a QSEv. Depending on the configuration, the QSEv can be transmitted to the IdsR and/or persisted locally.

### 25. Timestamp

Timestamps are optional and can be provided to the IdsM in different ways.

 Timestamps are optional
  Upstream requirements:
⌈
If IdsmInstance.timestampFormat is not set, IdsM shall not add a timestamp to a QSEv and shall ignore timestamps provided via the timestamp parameter of the event reporting interface.
⌋

 Timestamps provided by the stack
  Upstream requirements:
⌈
If IdsmInstance.timestampFormat equals "'AUTOSAR"' and the ara::idsm::EventReporter::ReportEvent function is called without a timestamp parameter, then Idsm shall add a timestamp from the TimeSync::TimeBaseResource referenced via the IdsTimeBaseForeignRef to stored and transmitted QSEvs.
⌋

The format of the timestamp to be added is specified in .

 Timestamp provided via event reporting interface
  Upstream requirements:
⌈
If IdsmInstance.timestampFormat is set and the ara::idsm::EventReporter::ReportEvent function is called with a timestamp parameter, then Idsm shall use this provided timestamp parameter for transmission or storage of the QSEv.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Propagation of QSEvs

QSEv transmission
  Upstream requirements: ,
⌈
If a PlatformModuleEthernetEndpointConfiguration is aggregated at the IdsPlatformInstantiation in the role networkInterface, IdsM shall transmit QSEvs using the IDS protocol defined in  from the local endpoint configured via the PlatformModuleEthernetEndpointConfiguration referenced by the IdsmModuleInstantiation in the role networkInterface to the remote endpoint configured via the RemoteEndpointConfiguration referenced by the PlatformModuleEthernetEndpointConfiguration in the role remoteConfig.
⌋

 Message ID
  Upstream requirements:
⌈
IdsM shall set the Message ID field of the IDS Message Separation Header to all zero (0x00000000).
⌋

 Protocol Version
  Upstream requirements:
⌈
If unversioned context data has been provided to IdsM, IdsM shall use version 1 of the IDS network protocol defined in . Otherwise, IdsM shall use version 2 of the IDS network protocol.
⌋

The Module Instance ID is used on CP to distinguish between events raised by multiple instances of the same BSW component. On AP, there can only be one instance of a functional cluster. Therefore, the Module Instance ID is not used on AP:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Propagation of QSEvs to an Application

In addition to QSEvs being propagated via the IDS network protocol, QSEvs can also be propagated to an application. Both propagation mechanisms are independent, e.g., the same QSEv may be propagated via the network protocol and to an application.

 QSEv transmission to application
  Upstream requirements:
⌈
If a QualifiedEventReceiverMapping exists and an application registered a ara::idsm::QualifiedEventsReceiver via a call to ara::idsm::QualifiedEventsReceiver::Offer, then IdsM shall call the function ara::idsm::QualifiedEventsReceiver::OnEventQualification upon qualification of a QSEv with unversioned context data, or the function ara::idsm::QualifiedEventsReceiver::OnEventQualification upon qualification of a QSEv with versioned context data or without context data.
⌋

### 28. Authenticity of Transmitted QSevs

IdsM can optionally protect the authenticity of transmitted QSEvs using cryptographic signatures.

 Signing QSEv
  Upstream requirements:
⌈
If an IdsmSignatureSupportAp is aggregated at the IdsmInstance in the role signatureSupportAp, then IdsM shall calculate a cryptographic signature to each QSEv transmitted to the IdsR and to each locally persisted QSEv.
⌋

 Signing Success and Failure
  Upstream requirements:
⌈
If signature generation according to  succeeds, IdsM shall attach the generated signature to each QSEv. If signature generation fails, IdsM shall continue processing the QSEv without a signature.
⌋

 Signature Generation Failed
  Upstream requirements:
⌈
When the IdsM fails to calculate the signature or signature generation failure occurs for other reasons, IdsM shall log the DltMessage SignatureGenerationFailed.
⌋

Over which data the signature shall be computed and how the signature shall be included in the message transmitted to the IdsR is specified in . Which signature primitive and which key shall be used can be configured in using the IdsmSignatureSupportAp model element:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Rate & Traffic Limitation

Rate and Traffic Limitation
  Upstream requirements:
⌈
Before sending a QSEv to the IdsR, IdsM shall apply rate and traffic limitation that can lead to dropping the QSEv.
⌋

 Rate Limitation
  Upstream requirements:
⌈
IdsM shall drop an QSEv from transmission, if its transmission would cause the number of QSEvs transmitted in the current interval, which is specified in IdsmRateLimitation.timeInterval, to exceed the maximum number of transmission configured as IdsmRateLimitation.maxEventsInInterval.
⌋

 Traffic Limitation
  Upstream requirements:
⌈
IdsM shall drop an QSEv from transmission, if its transmission would cause the number of bytes transmitted in the current interval, which is specified in IdsmTrafficLimitation.timeInterval, to exceed the maximum number of bytes configured as IdsmTrafficLimitation.maxBytesInInterval.
⌋

### 30. Access 控制
*原文标题：Access Control*

The generation of security events, modification of context data, and provision of timestamps is subject to access control, i.e., it can be restricted which processes can perform these tasks.

 EventReporter Access Control
  Upstream requirements:
⌈
IdsM shall restrict the Processes that can report an event type identified by a SecurityEventDefinition, which is referenced by a SecurityEventMapping, to the Process referenced by the same SecurityEventMapping via the IdsmProcessForeignRef.
⌋

 TimestampProvider Access Control
  Upstream requirements:
⌈
IdsM shall restrict the Processes that can provide timestamps via the TimestampProvider interface to the Process referenced by an TimestampProviderMapping via the IdsmProcessForeignRef.
⌋

 ContextDataProvider Access Control
  Upstream requirements:
⌈
IdsM shall restrict the Processes that can modify context data via the ContextDataProvider interface to the Process referenced by an ContextProviderMapping via the IdsmProcessForeignRef.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 诊断 Access
*原文标题：Diagnostic Access*

IdsM allows diagnostic access to support two use-cases: First, persisted events can be read via diagnostic access. Second, a reconfiguration of the reporting mode via diagnostic access is possible.

### 32. Access to Persisted Events

Each security event references a diagnostic event, which in turn references a DTC.

 Access to Persisted Events
  Upstream requirements: ,
⌈
If a QSEv has been successfully qualified and the QSEv is configured to be persisted (i.e., SecurityEventContextProps.persistentStorage == True) and mapped to a DiagnosticEvent via DiagnosticEventToSecurityEventMapping, then IdsM shall report the status of the referenced DiagnosticEvent to kFailed and, if the ReportingMode is DETAILED or `DETAILED_BYPASSING_FILTERS`, additionally store the provided context data and timestamp in the DiagnosticEvent's snapshot record.
⌋

### 33. IdsM Provided SEvs

IdsM itself can also be used as a Security Event sensor. The security events reported by the IdsM module are listed in Section .

 Buffer availability
  Upstream requirements: ,
⌈
IdsM shall ensure that IdsM internal events can be processed even though no buffers are available.
⌋

An implementation could achieve this by, e.g., pre-allocating memory buffers for IdsM provided events.

 Bypass limitation filter
  Upstream requirements:
⌈
IdsM internal SEvs shall not be filtered by rate and traffic limitation filter.
⌋

### 34. 功能性 cluster life-cycle
*原文标题：Functional cluster life-cycle*

This section defines behavior of this functional cluster during its life-cycle. Please note that there is a general behavior for ara::core::Initialize and ara::core::Deinitialize defined in  by  and .

 Queuing of IDS events
  Upstream requirements:
⌈
IDS events that are reported while the IdsM is not able to process them (e.g. daemon communication is not established) shall be queued. The queue size is defined by IdsmQueueSize. If this size is exceeded, the oldest entries shall be discarded. If IdsmQueueSize is not defined, the queue size is zero.
⌋

### 35. 启动
*原文标题：Startup*

Using ara::core::Initialize, the application can initialize its ara::idsm library.

 Initialization
  Upstream requirements:
⌈
When ara::core::Initialize is called, IdsM shall read in the manifest information and prepare the access structures necessary to generate events from the application.
⌋

Access structures may encompass the communication channel between the application process and the stack process (if there is any) or other resource required by the IdsM.

### 36. 关机
*原文标题：Shutdown*

Using ara::core::Deinitialize, the application can deinitialize its ara::idsm library.

 Deinitialization
  Upstream requirements:
⌈
When ara::core::Deinitialize is called, the IdsM shall close all accquired handles and free all access structures.
⌋

The application is expected not to call any API of IdsM before ara::core::Initialize or after ara::core::Deinitialize.

### 37. Daemon crash

This section is intentionally left empty.

### 38. Reporting

### 39. 安全事件
*原文标题：Security Events*

This chapter contains all standardized Security Events of this Functional Cluster.

 Security events for IDSM (AP)
  Upstream requirements:
⌈
| Name | Description | ID |
|---|---|---|
| SEV_IDSM_NO_EVENT_BUFFER_AVAILABLE | A SEv cannot be handled because there are no more event buffers available to process the event. | 46 |
| SEV_IDSM_NO_CONTEXT_DATA_BUFFER_AVAILABLE | The context data of an incoming event cannot be stored because there are no more context data buffers available. | 47 |
| SEV_IDSM_COMMUNICATION_ERROR | An error occurred when sending a QSEv via PDU. | 49 |
| SEV_IDSM_NO_QUALIFIED_EVENT_BUFFER_AVAILABLE | A security event raised when a QSEv has to be dropped due to insufficient QSEv buffers available. | 87 |
| SEV_ACCESS_CONTROL_IDSM_IAM_ACCESS_DENIED | Access of an application to a resource provided by Intrusion Detection System Management was denied. | 136 |

⌋

 Security event context data definition: `SEV_ACCESS_CONTROL_IDSM_IAM_ACCESS_DENIED`
⌈
| SEV Name | SEV_ACCESS_CONTROL_IDSM_IAM_ACCESS_DENIED | < |
|---|---|---|
| ID | 136 | < |
| Description | Access of an application to a resource provided by Intrusion Detection System Management was denied. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Log Messages

This chapter contains all Log Messages (i.e. DLT messages) of this Functional Cluster.

 Log Message SignatureGenerationFailed
  Status: DRAFT
  Upstream requirements:
⌈
| Dlt-Message | SignatureGenerationFailed | < | < |
|---|---|---|---|
| Description | IdsM failed to calculate the signature of a security event | < | < |
| MessageId | 0x80005000 | < | < |
| MessageTypeInfo | DLT_LOG_WARN | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| posixProcessId | OS specific PID which has been assigned to the IdsM | uint32 | NoUnit |

⌋

### 41. Violation Messages

This section lists all violation messages (i.e., DLT messages logged for Violations according to ) defined by this functional cluster. Please note that concrete implementations might additionally implement Non-Standardized Violations (see also ).

 Violation Message UnresolvableInstanceSpecifierViolation
  Status: DRAFT
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_13025`
⌈
| Dlt-Message | UnresolvableInstanceSpecifierViolation | < | < |
|---|---|---|---|
| Description | InstanceSpecifier either cannot be resolved in the model in the context of your executable or process, or it refers to a model element that is neither a PortPrototype of the expected type nor a FunctionalClusterInteractsWithFunctionalClusterMapping of the expected type. | < | < |
| MessageId | 0x80001fe8 | < | < |
| MessageTypeInfo | DLT_LOG_FATAL | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| modeledProcessId | Meta-model identifier of the process that caused the violation, i.e., its short name path with '/' as a separator | uint8 |  |
| location | An implementation-defined identifier of the location where the violation was detected, for example {ClassName}:{MethodName}, {filename}:{linenumber}, etc. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 86 章（内容从略，见纯文本全文）

42. Production 错误
43. API 规范
44. PortInterface to API class binding
45. Header：ara/idsm/common.h
46. Non-Member 类型
47. Header：ara/idsm/context_data_provider.h
48. Class：ContextDataProvider
49. Public Member Functions
50. Special Member Functions
51. Constructors
52. Member Functions
53. Header：ara/idsm/event_reporter.h
54. Class：EventReporter
55. Public Member Functions
56. Constructors
57. Member Functions
58. Header：ara/idsm/idsm_error_domain.h
59. Non-Member 类型
60. Non-Member Functions
61. Other
62. Class：IdsmErrorDomain
63. Public Member 类型
64. Public Member Functions
65. Special Member Functions
66. Member Functions
67. Class：IdsmException
68. Public Member Functions
69. Constructors
70. Header：ara/idsm/qualified_events_receiver.h
71. Class：QualifiedEventsReceiver
72. Public Member Functions
73. Special Member Functions
74. Constructors
75. Member Functions
76. Header：ara/idsm/reporting_mode_provider.h
77. Class：ReportingModeProvider
78. Public Member Functions
79. Constructors
80. Member Functions
81. Header：ara/idsm/timestamp_provider.h
82. Class：TimestampProvider
83. Public Member Functions
84. Special Member Functions
85. Constructors
86. Member Functions
87. 服务接口
88. 配置
89. 配置规范
90. 概述
91. Context Provider 映射
92. Timestamp Provider 映射
93. Reporting 模式 Provider 映射
94. Qualified Event Receiver 映射
95. Security Event 映射
96. Correspondence Table
97. Default Values
98. Semantic Constraints
99. 附录
100. Mentioned 清单 Elements
101. Mentioned APMC Elements from other 功能性 Clusters
102. Demands and constraints on Base 软件 (normative)
103. Platform Extension 接口 (normative)
104. Not implemented 需求
105. History of Constraints and 规范 Items
106. Constraint and 规范 Item History of this document according to AUTOSAR Release R22-11
107. Added 规范 Items in R22-11
108. Changed 规范 Items in R22-11
109. Deleted 规范 Items in R22-11
110. Constraint and 规范 Item History of this document according to AUTOSAR Release R23-11
111. Added 规范 Items in R23-11
112. Changed 规范 Items in R23-11
113. Deleted 规范 Items in R23-11
114. Constraint and 规范 Item History of this document according to AUTOSAR Release R24-11
115. Added 规范 Items in R24-11
116. Changed 规范 Items in R24-11
117. Deleted 规范 Items in R24-11
118. Added Constraints in R24-11
119. Changed Constraints in R24-11
120. Deleted Constraints in R24-11
121. Constraint and 规范 Item History of this document according to AUTOSAR Release R25-11
122. Added 规范 Items in R25-11
123. Changed 规范 Items in R25-11
124. Deleted 规范 Items in R25-11
125. Added Constraints in R25-11
126. Changed Constraints in R25-11
127. Deleted Constraints in R25-11
