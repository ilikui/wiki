# Specification of Automotive API Gateway (`AutomotiveAPIGateway`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1116 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_AutomotiveAPIGateway_1116\AUTOSAR_AP_SWS_AutomotiveAPIGateway.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_AutomotiveAPIGateway_1116\AUTOSAR_AP_SWS_AutomotiveAPIGateway.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_AutomotiveAPIGateway_1116\zzgen\AP_SWS_AutomotiveAPIGateway.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the vehicle service functional cluster , which provide access to a vehicle for non-AUTOSAR clients using a data-centric approach via the VISS protocol.

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters (on platform-level only), to allow efficient implementations, which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions, without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the vehicle service functional cluster , which provide access to a vehicle for non-AUTOSAR clients using a data-centric approach via the VISS protocol.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant to the Automotive API Gateway. A general list of acronyms and abbreviations is available in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| VISS | The Vehicle Information Service Specification; This document refers to the version 2 of VISS as defined in  and ) |
| Associated Field | The Field that was created for the VSS leaf according to |
| Associated ClientServerOperation | The ClientServerOperation that was created for the VSS leaf according to . |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a core specification  which is also applicable for the Automotive API Gateway. The chapter "General requirements for all FunctionalClusters" of this specification shall be considered an additional and required specification for implementing the Automotive API Gateway.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 已知限制
*原文标题：Known limitations*

VSS aggregates are not considered by the Automotive API Gateway. It treats VSS catalogs as though that parameter did not exist. (see also )

The Automotive API Gateway rejects update and subscribe requests that address a VSS branch ().

There is currently no standardized mechanism for the Automotive API Gateway to know the original capture time of a value. The time that the VISS network binding receives the value is used as a less-precise surrogate timestamp. It is still suitable to make limited assessments about the freshness of the value.

The declarative mapping possibilities are currently not sufficiently elaborated. Although the specification allows for their use it is expected that the declarative style does not yet support all requirements.

### 8. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters (on platform-level only), to allow efficient implementations, which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions, without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 9. Provided 接口
*原文标题：Provided Interfaces*

There is no interfaces which will be usable for other functional clusters.

### 10. Required 接口
*原文标题：Required Interfaces*

The Automotive API Gateway requires interfaces from Communication Management and Log and Trace.

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in AUTOSAR RS Automotive API Gateway  and the AUTOSAR RS General  , and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Enforcement of Datatype Restrictions |  |  |
| Datatype Mapping |  |  |
| Unit Mapping |  |  |
| Mapping to Field |  |  |
| Mapping to Event |  |  |
| Mapping to Methods |  |  |
| Mapping to Structured Datatype |  |  |
| Mapping of Structured Datatype |  |  |
| Possible Mapping Targets |  |  |
| Association to Concrete Instance of a Service Interface |  |  |
| Mapping of Functionality |  |  |
| Mapping of Errors |  |  |
| VISS interface |  |  |
| VISS Read of Multiple Leaves |  |  |
| VISS Subscriptions |  |  |
| Ignore VSS Aggregates |  |  |
| VISS Change Filter |  |  |
| VISS Timebased filter |  |  |
| VISS Server Capabilities |  |  |
| Signal Freshness |  |  |
| Protection from Overloads |  |  |
| Signal to Service Capability |  |  |

### 12. 功能规范
*原文标题：Functional specification*

### 13. VISS 接口
*原文标题：VISS Interface*

VISS Definition
  Status: DRAFT
  Upstream requirements: , ,
⌈
The Automotive API Gateway shall offer a VISS service according to specifications  and .
⌋

 Support VISS Server Capabilities
  Status: DRAFT
  Upstream requirements:
⌈
The Automotive API Gateway shall support the dynamic-metadata filter with parameter set to server_capabilities according to the specification .
⌋

 Authorization
  Status: DRAFT
  Upstream requirements:
⌈
The Automotive API Gateway shall ensure authorization of requests. See chapter Access Control Model of .
⌋

### 14. VISS Features

Rejection of Unsupported Filters
  Status: DRAFT
  Upstream requirements: , , ,
⌈
The Automotive API Gateway shall respond with an Error Message to a VISS request in case it contains a filter other than

* timebased,
* change, or
* dynamic-metadata with parameter set to server_capabilities.

The Error Response in this case shall have the Error Reason forbidden_request and the associated Error Code and Message according to .
⌋

 Cannot Update or Subscribe to VSS Branches
  Status: DRAFT
  Upstream requirements:
⌈
Automotive API Gateway shall respond with an Error Message to a VISS Update or Subscribe request in case it address a VSS branch. The Error Response in this case shall have the Error Reason not_implemented, the Error Code 501, and Error Message "Update and Subscribe to Branches is not supported".
⌋

### 15. VISS 错误
*原文标题：VISS Errors*

Reject Update Requests Violating Datatype Restrictions
  Status: DRAFT
  Upstream requirements:
⌈
The Automotive API Gateway shall respond with an Error Message to a VISS Update request in case the given value violates VSS datatype restrictions as defined in . The Error Response in this case shall have the Error Reason invalid_data and the associated Error Code and Message according to .
⌋

 Read Values Violating Datatype Restrictions
  Status: DRAFT
  Upstream requirements:
⌈
The Automotive API Gateway shall respond with an Error Response to a VISS Read request in case at least one of the response values violates VSS datatype restrictions as defined in . The Error Response in this case shall have the Error Reason bad_gateway, the Error Code 502, and the Error Message "The upstream server response was invalid".
⌋

 Malformed Subscription Request
  Status: DRAFT
  Upstream requirements:
⌈
The Automotive API Gateway shall respond with an Error Response to a VISS Subscribe request in case the request does not contain a filter.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. VSS

Model Import of the VSS Catalog
  Status: DRAFT
  Upstream requirements: , , , , , , , , ,
⌈
The Automotive API Gateway shall be modeled according to .
⌋

By using the modeling as specified in  many model elements including ServiceInterface are created. This can then be used to either generate a Skeleton and implement the possibilities required in code or to use existing Metamodel mapping capabilities like the PassThroughSwConnector to make the required connections. Either way, this mapping fulfills or helps to fulfill the multiple mapping requirements that this specification item traces up to.

 VSS Datatype Restrictions
  Status: DRAFT
  Upstream requirements:
⌈
The Automotive API Gateway shall consider a value of a VSS leaf as violating VSS datatype restrictions if one of the conditions is true:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. VISS Binding

Request to a Service that is not Offered
  Status: DRAFT
  Upstream requirements: ,
⌈
When a client requests to read, update, or subscribe to a VSS leaf and the ServiceInterface of the Associated Field / Associated ClientServerOperation is currently not offered, the Automotive API Gateway shall respond with an Error Message with the Error Reason unavailable_data and the associated Error Number and Message according to .
⌋

 Timestamp of a VISS Read Response and Subscription Event Message
  Status: DRAFT
  Upstream requirements: , ,
⌈
The Automotive API Gateway shall set the timestamp of the data point within the VISS read success response and subscription event message to be the timestamp of when the network binding captured the value.
⌋

Note: It is planned in a future release to add facilities for a more precise capture time. Currently it is not supported to have the original capture time of the value.

### 18. VISS Read

VSS Leaf Read Corresponds To Field Get
  Status: DRAFT
  Upstream requirements:
⌈
For the Automotive API Gateway a client read request to a VSS leaf shall correspond with getting the value of the Associated Field.
⌋

 Field Get Error
  Status: DRAFT
  Upstream requirements:
⌈
In case getting the value of an Associated Field results in an error the value can not be retrieved. In this case the Automotive API Gateway shall respond to the client that requested the read with a VISS Error Message with the Error Reason service_unavailable and the associated Error Number and Message according to .
⌋

 VSS Branch Read Correponds to Single Reads
  Status: DRAFT
  Upstream requirements: ,
⌈
For the Automotive API Gateway a client read request to a VSS branch shall correspond with read requests to all leaves of that branch. Additional information:

* If the value of leaves can not be retrieved they shall not be part of the response.
* If the value of no leaf can be retrieved an error response according to one of the leaf errors shall be returned to the client.
⌋

Note: That together with  this means it corresponds to reads of the associated fields of all leaves.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. VISS Update

Mapping of an Update Request
  Status: DRAFT
  Upstream requirements:
⌈
A client update request to a VSS leaf of the Automotive API Gateway shall correspond with a call of the Associated ClientServerOperation with the argument set to the value of the update request.
⌋

 Reaction to an Update Request Function Error
  Status: DRAFT
  Upstream requirements:
⌈
If a ClientServerOperation that corresponds to a client update request returns an error the Automotive API Gateway shall answer the associated VISS request with a VISS Error Message with the Error Reason bad_gateway, the Error Number 502, and the Error Message "The upstream server response was an error.".
⌋

### 20. VISS Subscription

Mapping of a Subscription Request
  Status: DRAFT
  Upstream requirements: ,
⌈
A successful client subscription without the timebased filter to a VSS leaf of the Automotive API Gateway shall correspond with a subscription to the Associated Field.
⌋

 Mapping of a Timebased Subscription Request
  Status: DRAFT
  Upstream requirements: , ,
⌈
A successful client subscription with the timebased filter to a VSS leaf of the Automotive API Gateway shall correspond with periodically getting the value of the Associated Field.
⌋

 Mapping of an Unsubscribe Request
  Status: DRAFT
  Upstream requirements: ,
⌈
A successful client unsubscribe request for a subscription to the Automotive API Gateway shall correspond to the termination of the subscription according to  or .
⌋

 Mapping of the Termination of a Subscription
  Status: DRAFT
  Upstream requirements: ,
⌈
The termination of a subscription without the timebased filter to a VSS leaf offered by the Automotive API Gateway shall correspond to an unsubscribe from the Associated Field.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. C++ Binding

C++ Binding
  Status: DRAFT
  Upstream requirements:
⌈
The Automotive API Gateway shall use the C++ binding as defined in . In case of conflicting specifications this specification shall take precedent over  for the Automotive API Gateway.
⌋

### 22. Field Read

Binding of a Field Read
  Status: DRAFT
  Upstream requirements: ,
⌈
The getting of the value of a Field of a ServiceInterface with VISS deployment shall invoke the registered get handler (see ) of the Field class. The value of the Field shall be the returned value of the get handler. Additional Information:

* In case a MethodCallProcessingMode of kPoll has been passed to the constructor of the Service Skeleton class (see ), the get handler shall only be executed upon a call to the ProcessNextMethodCall method (see ) of the Service Skeleton class.
* In case a MethodCallProcessingMode of kEventSingleThread has been passed to the constructor of the Service Skeleton class (see ), the get handler shall only be executed upon completion of all previous calls to get handlers of that Skeleton.
⌋

Note: The specification regarding the MethodCallProcessingMode is similar to , .

### 23. ClientServerOperation Execution

Binding of a ClientServerOperation Execution
  Status: DRAFT
  Upstream requirements: ,
⌈
An execution of a ClientServerOperation in the role method of a ServiceInterface with VISS deployment shall correspond to the execution of the service method (see ) that was generated for this ClientServerOperation. The content of the resolved Future returned by the service method shall correspond to the return of the ClientServerOperation. Additional Information:

* In case a MethodCallProcessingMode of kPoll has been passed to the constructor of the Service Skeleton class (see ), the service method shall only be executed upon a call to the ProcessNextMethodCall method (see ) of the Service Skeleton class.
* In case a MethodCallProcessingMode of kEventSingleThread has been passed to the constructor of the Service Skeleton class (see ), the service method shall only be executed upon completion of all previous calls to get handlers of that skeleton.
⌋

Note: The return can either be a value or an error.

Note: The specification regarding the MethodCallProcessingMode is similar to , .

### 24. Subscription

Binding of Field Update
  Status: DRAFT
  Upstream requirements: ,
⌈
In the context of the Automotive API Gateway an Associated Field shall be considered to receive an update when the Update function according to  is called successfully on the respective Field class.
⌋

Note: This will trigger required subscription event messages according to .

Note: This specification is relevant for the programmed solution using a Skeleton. For the declarative approach the update of a field is expressed in relation to the update of a connected field.

### 25. Declarative 映射
*原文标题：Declarative Mapping*

This chapter contains specification items that are only relevant in the declarative mapping case.

 Declarative Mapping
  Status: DRAFT
  Upstream requirements:
⌈
If a providedInterface of a PPortPrototype of an Automotive API Gateway is referenced by the providedOuterPort of a PassThroughSwConnector the Automotive API Gateway shall behave according to the semantics of that PassThroughSwConnector.
⌋

Note: In future releases closer elaborations are planned to better describe how the modelling can be used to create a declarative mapping to other ServiceInterfaces.

Note: In this situation it might still be desired to generate Skeletons. This is allowed but not mandated by the standard so that implementations of the declarative mapping have full freedom for their implementation.

 Network Binding Failure Reaction
  Status: DRAFT
  Upstream requirements:
⌈
If during the required interaction with the Service Interfaces due to a VISS request, the Automotive API Gateway receives a ComErrc::kCommunicationFailure it shall reject the VISS request with an Error Message with the Error Reason bad_gateway, the Error Number 502, and the Error Message "The upstream server response was invalid.".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 功能性 cluster life-cycle
*原文标题：Functional cluster life-cycle*

This section defines behavior of this functional cluster during its life-cycle. Please note that there is a general behavior for ara::core::Initialize and ara::core::Deinitialize defined in  by  and .

### 27. 启动
*原文标题：Startup*

In this release of the Automotive API Gateway the startup of the functional cluster is not yet standardized.

### 28. 关机
*原文标题：Shutdown*

In this release of the Automotive API Gateway the shutdown of the functional cluster is not yet standardized.

### 29. Reporting

In this release of the Automotive API Gateway the reporting is not yet standardized.

### 30. 安全事件
*原文标题：Security Events*

This functional cluster does not define any security events.

### 31. Log Messages

This functional cluster does not define any non-verbose log messages (i.e., modelled DLT messages).

### 32. Violation Messages

This functional cluster does not define any violation messages (i.e., DLT messages logged for Violations according to ). Please note that concrete implementations might implement Non-Standardized Violations (see also ).

### 33. Production 错误
*原文标题：Production Errors*

This functional cluster does not define any production errors (i.e., Diagnostic Events).

### 34. API 规范
*原文标题：API specification*

This functional cluster does not define any C++ APIs for AUTOSAR Adaptive Applications. However, it offers an API for VISS clients as defined by the VISS specification.

The VISS client-server interactions are fully described in VISS specification . As transport protocols it can use HTTP, WebSocket and MQTT which interaction models are publically known.

### 35. 服务接口
*原文标题：Service Interfaces*

The Automotive API Gateway provides service interfaces which specification is out of the scope of standarization.

Service Interface the Automotive API Gateway requires and provides are modeled in ARXML as defined in .

The Automotive API Gateway has two kinds of Service Interfaces:

* VISS Service Interfaces (only provided)

  VISS Service Interfaces can be recognized by their VISS deployment and are offered as a VISS service to VISS clients. They are created according to .
* ara::com Service Interfaces

  The ara::com Service Interfaces are used by the Gateway to interact with the vehicle internals.

### 36. 配置
*原文标题：Configuration*

The Automotive API Gateway at this moment does not specify any configuration.

### 37. 附录
*原文标题：Appendix*

### 38. Mentioned 清单 Elements
*原文标题：Mentioned Manifest Elements*

This chapter contains the remaining set of meta-class tables which are not shown directly in the main body of this document.

This chapter is generated.

| Class | ClientServerOperation | < | < | < |
|---|---|---|---|---|
| Note | An operation declared within the scope of a client/server interface. | < | < | < |
| Base | ARObject, AtpClassifier, AtpFeature, AtpStructureElement, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | ApplicationInterface.command, AtpClassifier.atpFeature, ClientServerInterface.operation, DiagnosticDataElementInterface.read, DiagnosticDataIdentifierInterface.read, DiagnosticDataIdentifierInterface.write, DiagnosticExtendedDataRecordInterface.provide, DiagnosticRoutineInterface.requestResult, DiagnosticRoutineInterface.start, DiagnosticRoutineInterface.stop, ServiceInterface.method | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| argument (ordered) | ArgumentDataPrototype | * | aggr | An argument of this ClientServerOperation. |

Stereotypes: atpVariation Tags: vh.latestBindingTime=blueprintDerivationTime
| fireAndForget | Boolean | 0..1 | attr | This attribute defines whether this method is a fire&forget method (true) or not (false). |
|---|---|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Demands and constraints on Base 软件 (normative)
*原文标题：Demands and constraints on Base Software (normative)*

This functional cluster defines no demands or constraints for the Base Software on which the AUTOSAR Adaptive Platform is running on (usually a POSIX-compatible operating system).

### 40. Platform Extension 接口 (normative)
*原文标题：Platform Extension Interfaces (normative)*

This functional cluster does not specify any Platform Extension Interfaces.

### 41. Not implemented 需求
*原文标题：Not implemented requirements*

This functional cluster implements all functional requirements specified in the corresponding requirement specifications.

### 42. History of Constraints and 规范 Items
*原文标题：History of Constraints and Specification Items*

Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 43. Constraint and 规范 Item Changes between AUTOSAR Release R24-11 and R25-11
*原文标题：Constraint and Specification Item Changes between AUTOSAR Release R24-11 and R25-11*

### 44. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 45. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|
| Network Binding Failure Reaction |  |
| Network Binding Failure Reaction for Subscriptions |  |

### 46. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 47. Constraint and 规范 Item Changes between AUTOSAR Release R23-11 and R24-11
*原文标题：Constraint and Specification Item Changes between AUTOSAR Release R23-11 and R24-11*

### 48. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

| Number | Heading |
|---|---|
| VSS Datatype Restrictions |  |
| Reject Update Requests Violating Datatype Restrictions |  |
| Read Values Violating Datatype Restrictions |  |
| Model Import of the VSS Catalog |  |
| Reject Splitting of VSS Struct |  |
| Declarative Mapping |  |
| Invalid and Unauthorized VISS Requests |  |
| VSS Leaf Read Corresponds To Field Get |  |
| VSS Branch Read Correponds to Single Reads |  |
| Initial Value of a Subscription |  |
| Mapping of a Subscription Request |  |
| Mapping of an Update Request |  |
| Cannot Update or Subscribe to VSS Branches |  |
| Conditions for Sending a VISS Subscription Event Message |  |
| Timestamp of a VISS Read Response and Subscription Event Message |  |
| Mapping of an Unsubscribe Request |  |
| Mapping of the Termination of a Subscription |  |
| Mapping of a Timebased Subscription Request |  |
| Mapping of the Termination of a Timebased Subscription |  |
| Conditions for Sending a VISS Subscription Event Message for a Timebased subscription |  |
| Field Get Error |  |
| Request to a Service that is not Offered |  |
| Reaction to an Update Request Function Error |  |
| Reaction to Subscribed Fields Becoming Unavailable |  |
| Network Binding Failure Reaction |  |
| Network Binding Failure Reaction for Subscriptions |  |
| Update Reque |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 50. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none
