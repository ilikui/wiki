# Specification of Communication Management (`CommunicationManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 717 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_CommunicationManagement_717\AUTOSAR_AP_SWS_CommunicationManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_CommunicationManagement_717\AUTOSAR_AP_SWS_CommunicationManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_CommunicationManagement_717\zzgen\AP_SWS_CommunicationManagement.complete.txt`

## 文档简介

This document contains the requirements on the functionality, API and the configuration of the AUTOSAR Adaptive Communication Management as part of the Adaptive AUTOSAR platform foundation.

The Communication Management realizes Service Oriented Communication between Adaptive AUTOSAR Applications for all levels of communication, e.g. IntraProcess, InterProcess, InterMachine. It consists of potentially generated Service Provider Skeletons and Service Requester Proxies and optionally the generic Communication Manager software for central brokering and configuration.

The Communication Management provides a built-in safety mechanism (E2E protection), which can be used for all levels of communication for events and methods.

The documentation of the Communication Management consists of two documents:

* the ARAComAPI explanatory document , providing explanations of the design and behavior descriptions of the ara::com API,
* this document, providing the requirements on the ara::com API.

Therefore it is recommended to read the ARAComAPI explanatory document first to get an overview and understanding, and to read this document afterward.

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document contains the requirements on the functionality, API and the configuration of the AUTOSAR Adaptive Communication Management as part of the Adaptive AUTOSAR platform foundation.

The Communication Management realizes Service Oriented Communication between Adaptive AUTOSAR Applications for all levels of communication, e.g. IntraProcess, InterProcess, InterMachine. It consists of potentially generated Service Provider Skeletons and Service Requester Proxies and optionally the generic Communication Manager software for central brokering and configuration.

The Communication Management provides a built-in safety mechanism (E2E protection), which can be used for all levels of communication for events and methods.

The documentation of the Communication Management consists of two documents:

* the ARAComAPI explanatory document , providing explanations of the design and behavior descriptions of the ara::com API,
* this document, providing the requirements on the ara::com API.

Therefore it is recommended to read the ARAComAPI explanatory document first to get an overview and understanding, and to read this document afterward.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Abbreviation / Acronym: | Description: |
|---|---|
| BOM | Byte Order Mark |
| CM | Communication Management |
| DDS | Data Distribution Service |
| DTLS | Datagram Transport Layer Security |
| E2E | End-to-end communication protection |
| IP | Internet Protocol |
| QoS | Quality of Service |
| RPC | Remote Procedure Call |
| RTPS | Real Time Publish Subscribe Protocol |
| SecOC | Secure Onboard Communication |
| SoC | Service-Oriented Communication |
| SOME/IP | Scalable service-Oriented MiddlewarE over IP |
| TLV | Tag-Length-Value |
| TCP | Transmission Control Protocol |
| TTL | Time To Live |
| UDP | User Datagram Protocol |

### 4. 定义 of terms
*原文标题：Definition of terms*

| Term: | Description: |
|---|---|
| Callable | In the context of C++ a Callable is defined as: A Callable type is a type for which the INVOKE operation (used by, e.g., std::function, std::bind, and std::thread::thread) is applicable. This operation may be performed explicitly using the library function std::invoke. (since C++17) |
| Cycle | A cycle describes the time interval of periodical sending and reception of messages. This is important for E2E protected messages with a message counter which shall be increased by the sending entity for every new cycle (= for every new message). Within every cycle the receiving entity shall check if a new message has arrived and if its content is usable. For more information see documents PRS_E2EProtocol (chapter 6) and SWS_E2ELibrary (chapter 9). |
| Event | It is a notification mechanism that is used by the Service Skeleton to inform the Service Proxy that a specific condition or state change occurred. The notification includes the data related to the event. Events are sent to a Service Proxy only of it is subscribed to the Event. |

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

The current version of this document is missing some functionality which is not standardized and specified within the SWS Communication Management document but described in Explanation of ara::com API  and implemented in the demonstrator code:

### 10. Local Buffer Overruns

Currently it is not specified what happens if local buffers are full because the application accesses data slower than they are received over the network.

### 11. SOME/IP

The following limitations regarding the SOME/IP functionality described in  and  apply:

### 12. Optional method arguments with Tag-Length-Value serialization

Optional method arguments with SOME/IP Tag-Length-Value serialization
⌈
Communication Management does currently not support the existence of optional method arguments with the Tag-Length-Value serialization principle (described in  and ).
⌋

### 13. SOME/IP 服务 Discovery
*原文标题：SOME/IP Service Discovery*

The following limitations regarding the SOME/IP SD functionality described in  and  apply:

### 14. SOME/IP 服务 Discovery Discardable flag
*原文标题：SOME/IP Service Discovery Discardable flag*

SOME/IP Service Discovery Discardable flag
⌈
The specification does not support setting the SOME/IP Service Discovery Discardable flag of a SOME/IP entry option to 1 and reacting to the reception of an (unknown/unsupported) option with the Discardable flag set to 1 (see , , , ).
⌋

### 15. SOME/IP 服务 Discovery 配置 options
*原文标题：SOME/IP Service Discovery Configuration options*

SOME/IP Service Discovery Configuration options
⌈
The specification does not support that SOME/IP Service Discovery configuration options (see  - ) configured via the RequiredSomeipServiceInstance.capabilityRecord respectively in the ProvidedSomeipServiceInstance.capabilityRecord and configuration options contained in a FindService respectively OfferService entry of a received SOME/IP-SD message are considered during the process of matching offered services to required services and vice versa. Any configured and/or received configuration options are simply ignored during the matching process, i.e., they don't have any impact on the result set returned by FindService() or StartFindService(). Please note that the transmission of configuration options is supported.
⌋

### 16. SOME/IP 服务 Discovery Load balancing options
*原文标题：SOME/IP Service Discovery Load balancing options*

SOME/IP Service Discovery Load balancing options
⌈
The specification does not support that SOME/IP Service Discovery load balancing options configured (see , ,  - ) via the ProvidedSomeipServiceInstance.loadBalancingPriority and ProvidedSomeipServiceInstance.loadBalancingWeight are included in the OfferService entry of a transmitted SOME/IP-SD message. Additionally, the specification does not support that load balancing options of an OfferService entry of a received SOME/IP-SD message are considered during the process of matching offered services to required services. Any received load balancing options are simply ignored during the matching process, i.e., they don't have any impact on the result set returned by FindService() or StartFindService().
⌋

### 17. SOME/IP 服务 Discovery SD endpoint options
*原文标题：SOME/IP Service Discovery SD endpoint options*

SOME/IP Service Discovery SD endpoint options
⌈
The specification does not support that IPv4/IPv6 SD endpoint options (see  - ,  - , , , ) are included in any SOME/IP-SD entry of a transmitted SOME/IP-SD message.
⌋

### 18. E2E Protection

The general limitations regarding E2E protection and the detectable failure modes are described in . Additional, platform specific limitations regarding E2E protection are described in chapter  and .

 E2E Protection
⌈
E2E protection of ServiceInterface.triggers are not supported in the current version of this document.
⌋

### 19. the 网络行为的时序
*原文标题：Timing of the network behavior*

The timing of the network behavior is platform vendor specific (examples are: socket open, socket close, trigger to send a find message). This is particularly important during the Functional cluster lifecycle analysis.

### 20. Signal-Based IEEE1722 ACF 网络 binding
*原文标题：Signal-Based IEEE1722 ACF Network binding*

No service discovery for Signal-Based IEEE1722 ACF Network binding
  Status: DRAFT
  Upstream requirements:
⌈
Signal-Based IEEE1722 ACF Network binding does not support service discovery. All communication paths need to be configured statically.
⌋

### 21. Thread-safety

Thread-safety for the ara::com API is not defined within this release.

### 22. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 23. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

 shows the interfaces provided by Communication Management to other functional clusters within the AUTOSAR Adaptive Platform.  lists the interfaces provided to other functional clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| No provided interfaces | < | < |

### 24. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

 shows the interfaces required by Communication Management from other functional clusters within the AUTOSAR Adaptive Platform.  lists the interfaces required from other functional clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Cryptography | CryptoStack | This interface may be used e.g., to establish encrypted connections and generate / verify checksums (MAC). |
| Execution Management | ExecutionClient |  |
| Intrusion Detection System Manager | EventReporter | Communication Management may use this interface to report security events. |
| Log and Trace | Logger | Communication Management shall use this interface to log standardized messages. |
| Operating System Interface | OperatingSystemInterface | Communication Management should use this interface to create and control Threads used by the implementation. |

### 25. Platform dependencies

The Communication Management is dependent on the E2E protection protocol defined in  and . The E2E functions are used to execute end-to-end communication protection between Service Provider Skeletons and Service Requester Proxies.

### 26. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in the Requirements on Communication Management document  and the AUTOSAR RS General , and links to the fulfilment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| DDS Compliance |  |  |
| DDS standard serialization rules |  |  |
| DDS Quality of Service |  |  |
| Type Definition |  |  |
| Customization |  |  |
| Security mechanism |  |  |
| Publish |  |  |
| Subscribe |  |  |
| MACsec Protocol support |  |  |
| MACsec support for Adaptive AUTOSAR Platform |  |  |
| Compatibility with the ISO 14882 C++ standard |  |  |
| Public namespaces |  |  |
| Header file name |  |  |
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Usage of ara::core types |  |  |
| Error reporting |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| Avoidance of shared ownership |  |  |
| Usage of string types |  |  |
| Connecting run-time interface with model |  |  |
| Return type of asynchronous function calls |  |  |
| Return type of synchronous function calls |  |  |
| Handling of unsuccessf |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 功能规范
*原文标题：Functional specification*

### 28. 总体描述
*原文标题：General description*

The AUTOSAR Adaptive architecture organizes the software of the AUTOSAR Adaptive foundation as functional clusters. These clusters offer common functionality as services to the applications. The Communication Management (CM) for AUTOSAR Adaptive is such a functional cluster and is part of "AUTOSAR Runtime for Adaptive Applications" - ARA. It is responsible for the construction and supervision of communication paths between applications, both local and remote.

The CM provides the infrastructure that enables communication between Adaptive AUTOSAR Applications within one machine and with software entities on other machines, e.g. other Adaptive AUTOSAR applications or Classic AUTOSAR SWCs. All communication paths can be established at design- , start-up- or run-time.

This specification includes the syntax of the API, the relationship of API to the model and describes semantics, e.g. through state machines, and assumption of pre-, post-conditions and use of APIs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Architectural 概念
*原文标题：Architectural concepts*

The Communication management of AUTOSAR Adaptive can be logically divided into the following sub-parts:

* Language binding
* End-to-end communication protection
* Communication / Network binding
* Communication Management software

In the context of Communication Management, the following types of interfaces are defined:

* Public Application Interface: Part of the Adaptive AUTOSAR API and specified in the SWS. This is the standardized ara::com API.
* Functional Cluster Interactions: Interaction between functional clusters. Not normative, intended to make specification more readable and to support integration of SW into demonstrator. (dotted arrow in ) And also interactions between elements within a functional cluster. Not used in specifications, so it is a non-standardized interface. Used for communication inside Communication Management software (grey arrow in )

Please note, that Language Binding and Communication Binding depend on a specific configuration by the integrator, but they need to be deployed within the application binary. This results in the fact that the serialization of the Communication Binding will run in the execution context of the Adaptive Application.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 设计 decisions
*原文标题：Design decisions*

The design of the ARA API covers the following principles:

* It uses the Proxy/Skeleton pattern:

  * The (service) proxy is the representative of the possibly remote (i.e. other process, other core, other node) service. It is an instance of a C++ class local to the application/client, which uses the service.
  * The (service) skeleton is the connection of the user provided service implementation to the middleware transport infrastructure. Service implementation class is derived from the (service) skeleton.
  * Beside proxies/skeletons, there might exist a so-called "Runtime" (singleton) class to provide some essentials to manage proxies and skeletons. But this is communication management software implementation specific and therefore not specified in this document, but may be specified in a future version.

  Regarding proxy/skeleton design pattern in general and its role in middleware implementations, see  .
* It supports callback mechanisms on data reception.
* The API has zero-copy capabilities including the possibility for memory management in the middleware.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Communication paradigms and 定义
*原文标题：Communication paradigms and Definitions*

Service-Oriented Communication (SoC) as a part of Service-Oriented Architecture (SOA)  is the main communication pattern for Adaptive AUTOSAR Applications. It allows establishing communication paths both at run-time, so it can be used to build up dynamic communication with unknown number of participants. Figure  shows the basic operation principle of Service-Oriented Communication.

Service Discovery decides whether external and internal service-oriented communication is established. The discovery strategy shall allow either returning a specific service instance or all available instances providing the requested service at the time of the request, no matter if they are available locally or remote. The Communication Management software should provide an optimized implementation for both the Service discovery and the communication connection, depending on the location where the service provider resides. More about Service Discovery can be found in SOME/IP Service Discovery Protocol Specification .

The service class is the central element of the Service-Oriented Communication pattern applied in Adaptive AUTOSAR.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 服务 contract versioning
*原文标题：Service contract versioning*

In Service Oriented Architecture (SOA) environments the client and the provider of a service rely on a contract which covers the service interface and behavior. The interface and the behavior of a service may change over time. Therefore, service contract versioning has been introduced to differentiate between the different versions of a service.

The AUTOSAR Adaptive platform supports service contract versioning. The service contract versioning is separated between the design phase and the deployment phase. This means that any service at design level may have its own version number which is mapped to a version number of the used network binding and vice versa. The mapping process is manually done by the service designer or integrator.

Note:

1. The contract version of a ServiceInterface consists of a majorVersion and a minorVersion number. The majorVersion number indicates backwards-incompatible service changes. The minorVersion number indicates backwards-compatible service changes.

* for backwards-incompatible interface or behavior changes the majorVersion number is increased and the minorVersion number is set to 0.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 网络 binding
*原文标题：Network binding*

The following chapters describe the requirements according to specific network protocol bindings.

Since the selection of a particular network protocol binding is an integrator driven deployment decision, any change in the selection of a particular network protocol binding or changes in the various attributes and parameters of a particular network protocol binding shall be possible without requiring a re-compilation of the involved adaptive applications. The required changes to the involved adaptive application shall be limited to a re-linking (either static or dynamic) of the involved adaptive application.

 Change of Service Interface Deployment
  Upstream requirements:
⌈
A change of the service interface deployment shall be possible without re-compiling the involved adaptive applications. - This means that the following changes in the service interface deployment shall be possible without the need for a re-compilation of the adaptive applications:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. SOME/IP 网络 binding
*原文标题：SOME/IP Network binding*

SOME/IP supports different kind of bindings:

SOME/IP Events:

* unicast is one-to-one communication
* multi-cast is one-to-many communication

In case the active subscriptions will reach the multi-cast-threshold the communication paradigm will be switched from unicast to multi-cast to gain a better network utilization. Below the multi-cast-threshold SOME/IP is maintaining for a subscription a single unicast communication.

SOME/IP Events:

* many-to-one communication using multiple unicast communications

 SOME/IP Compliance
  Upstream requirements: ,
⌈
The SOME/IP network binding shall implement the SOME/IP Protocol and the SOME/IP Service Discovery Protocol defined in  and .
⌋

The byte order of the SOME/IP header fields is defined as network byte order by .

The byte order of additional fields in the SOME/IP payload is defined as network byte order by .

 Payload Byte order definition
  Upstream requirements: ,
⌈
The byte order of the parameters inside the payload shall be defined by byteOrder of ApSomeipTransformationProps. If byteOrder of ApSomeipTransformationProps is not configured explicitly, the default value defined for `BYTE_ORDER` in  shall be used.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Static 服务 Connection
*原文标题：Static Service Connection*

Static service connection
  Upstream requirements:
⌈
The static connection of services which are bound to SOME/IP protocols shall be preformed by statically pre-configured application end-points as described in the `TPS_ManifestSpecification` for a ProvidedSomeipServiceInstance by ,  and for a RequiredSomeipServiceInstance by , , .
⌋

 Service Discovery is bypassed by static service connection
⌈
The service discovery protocols are bypassed in case of a static service connection.
⌋

 Service versioning is not checked at runtime in case of a static service connection
⌈
Service versions are not checked at run-time in case of a static service connection since the Service Discovery has been bypassed.
⌋

Note: ara::com language APIs are agnostic to static service connection.

### 36. 服务 Discovery
*原文标题：Service Discovery*

Implement reboot detection
  Upstream requirements:
⌈
The service discovery of the SOME/IP network binding shall implement the reboot detection according to , , , , , and .
⌋

### 37. Start of 服务 discovery 协议
*原文标题：Start of service discovery protocol*

Periodic link state monitoring
⌈
The SOME/IP network binding shall periodically monitor and obtain the current link state of the underlying network interfaces.

Note: This information is required since the behavior of SOME/IP service discovery is influenced by the current link state as well as by changes in the link state
⌋

 Start of service discovery protocol on Server side
  Upstream requirements: , , ,
⌈
The registration of a new offered service which is bound to SOME/IP by invoking the OfferService() method (see ) of the ServiceSkeleton class shall trigger the start of the initial wait phase of the SOME/IP service discovery protocol after link up according to .
⌋

The different phases of SOME/IP Service Discovery on the Server side are configured in the Manifest in the SomeipSdServerServiceInstanceConfig referenced in ProvidedSomeipServiceInstance element in the role sdServerConfig. The configuration is described in more detail in `TPS_ManifestSpecification` by

*  (Initial Wait Phase),
*  (Repetition Phase),
*  (Main Phase).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. FindService message

SOME/IP FindService message
  Upstream requirements: , , , , , ,
⌈
The fields in the SOME/IP FindService message shall be as follows:

* The Type field and the TTL field shall be set to values suitable for a FindService entry, which means that

  * The Type field shall be set to FindService (see  for numerical value)
  * TTL for FindService messages shall not be used, and the value may be set to an arbitrary value. The field is only defined in the protocol for backward compatibility.
* The Service ID field shall be set to a value derived from the Manifest where the SomeipServiceInterfaceDeployment element defines the serviceInterfaceId.
* The Instance ID shall be set to a value derived from the Manifest where the RequiredSomeipServiceInstance element defines the requiredServiceInstanceId for the SomeipServiceInterfaceDeployment that is referenced by the RequiredSomeipServiceInstance in the role serviceInterfaceDeployment. If the requiredServiceInstanceId is set to "ALL" then 0xFFFF shall be used.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. OfferService message

SOME/IP OfferService message
  Upstream requirements: , , , , , , ,
⌈
The fields in the SOME/IP OfferService message shall be as follows:

* The Type field and the TTL field shall be set to values suitable for a OfferService entry, which means that

  * The Type field shall be set to OfferService (see  for numerical value).
  * The TTL field shall be set to a value derived from the Manifest where the SomeipSdServerServiceInstanceConfig element that is referenced by the ProvidedSomeipServiceInstance in the role sdServerConfig defines the serviceOfferTimeToLive.
* The Service ID field shall be set to a value derived from the Manifest where the SomeipServiceInterfaceDeployment element defines the serviceInterfaceId.
* The Instance ID shall be set to a value derived from the Manifest where the ProvidedSomeipServiceInstance element defines the serviceInstanceId for the SomeipServiceInterfaceDeployment that is referenced by the ProvidedSomeipServiceInstance in the role serviceInterfaceDeployment.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. StopOfferService message

SOME/IP StopOffer message
  Upstream requirements: , , , , ,
⌈
The fields in the SOME/IP StopOffer message shall be as follows:

* The Type field and the TTL field shall be set to values suitable for a StopOffer entry, which means that

  * The Type field shall be set to OfferService (see  for numerical value)
  * The TTL fields shall be set to 0x000000 (see )
* The Service ID field shall be set to the same value as in the OfferService message.
* The Instance ID field shall be set to the same value as in the OfferService message.
* The Major Version field shall be set to the same value as in the OfferService message.
* The Minor Version field shall be set to the same value as in the OfferService message.
* IPv4 Endpoint Option shall be set to the same value as in the OfferService message.
* IPv6 Endpoint Option shall be set to the same value as in the OfferService message.
* Configuration Option shall be set to the same value as in the OfferService message.
⌋

### 41. SubscribeEventgroup message

Sending SOME/IP SubscribeEventgroup messages - initial
  Upstream requirements: , , , ,
⌈
The subscription to at least one Event (ServiceInterface.event) of an Eventgroup (SomeipEventGroup) by invoking the Subscribe() method (see ) of the specific Event class of the ServiceProxy class shall cause the sending of a SOME/IP SubscribeEventgroup messages in case there is no active subscription for the particular Eventgroup (either because there was no previous subscription to this particular Eventgroup or the TTL of every received SubscribeGroupAck message (see ) for the particular Eventgroup has already expired).

The subscription to at least one Event of an Eventgroup by invoking the Subscribe() method (see ) of the specific Event class of the ServiceProxy class shall not cause the sending of a SOME/IP SubscribeEventgroup messages in case there is an active subscription for the particular Eventgroup (because there was some previous subscription to this particular Eventgroup and the TTL of at least one received SubscribeGroupAck message (see ) for the particular Eventgroup has not yet expired).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. StopSubscribe Eventgroup message

Sending SOME/IP StopSubscribeEventgroup messages
  Upstream requirements: , , , ,
⌈
Stopping the subscription of an Event (ServiceInterface.event) of an Eventgroup (SomeipEventGroup) by invoking the Unsubscribe() method (see ) of the specific Event class of the ServiceProxy class shall not cause the sending of a SOME/IP StopSubscribeEventgroup message if there are still active subscriptions for other Events of the same Eventgroup.

Stopping the subscription of the last Event of an Eventgroup by invoking the Unsubscribe() method (see ) of the specific Event class of the ServiceProxy class shall cause the sending of a SOME/IP StopSubscribeEventgroup message.
⌋

 Content of SOME/IP StopSubscribeEventgroup message
  Upstream requirements: , , , ,
⌈
The fields in the SOME/IP StopSubscribeEventgroup message shall be as follows:

* The Type field and the TTL field shall be set to values suitable for a StopSubscribeEventgroup entry, which means that

  * The Type field shall be set to SubscribeEventgroup (see  for numerical value)
  * The TTL field shall be set to 0x000000 (see )
* The Service ID field shall be set to the same value as in the SubscribeEventgroup message.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 410 章（内容从略，见纯文本全文）

43. Link Loss
44. Accumulation of SOME/IP messages
45. Execution context of message reception actions
46. 处理 Events
47. 处理 Triggers
48. 处理 Method Calls
49. 处理 Fields
50. Serialization of Payload
51. 基础数据类型
52. Enumeration (CompuMethod.category=TEXTTABLE) 数据类型
53. Bitfield (CompuMethod.category=BITFIELD_TEXTTABLE) 数据类型
54. Structured 数据类型 (structs)
55. Structured Datatypes and Arguments with Identifier and optional Members
56. Strings
57. Vectors and arrays
58. One-dimensional
59. Multi-dimensional
60. Associative Maps
61. Variants
62. 示例：Variant of std：：uint8/std：：uint16 both padded to 32 bit
63. Segmentation of SOME/IP messages
64. De-serialization of Payload
65. Structured 数据类型 (structs)
66. Structured Datatypes and Arguments with Identifier and optional Members
67. Strings
68. Vectors and arrays
69. Associative Maps
70. Variants
71. Bitfield (CompuMethod.category=BITFIELD_TEXTTABLE) 数据类型
72. Segmentation of SOME/IP messages
73. Marker 接口
74. Signal-Based 网络 binding
75. Signal-Based SOME/IP 网络 binding
76. 服务 Discovery
77. Accumulation of messages
78. 处理 Events
79. 处理 Triggers
80. 处理 Method Calls
81. 处理 Fields
82. Serialization of Payload
83. De-Serialization of Payload
84. Signal-Based Static 网络 binding
85. 服务 Discovery
86. Accumulation of messages
87. 处理 Events
88. 处理 Method Calls
89. 处理 Fields
90. Serialization of Payload
91. De-Serialization of Payload
92. Signal-Based IEEE1722 ACF 网络 binding
93. 服务 Discovery
94. Accumulation of messages
95. 支持 for Non-Time-Synchronous 控制 Format and Time-Synchronous 控制 Format
96. 处理 Events
97. 处理 Method Calls
98. 处理 Fields
99. Serialization of Payload
100. De-Serialization of Payload
101. Execution context of message reception actions
102. DDS 网络 binding
103. 服务 Discovery via Domain Participant USER_DATA QoS policy
104. 服务 Discovery via Topic
105. 处理 Events
106. 处理 Triggers
107. 处理 Method Calls
108. 处理 Fields
109. Serialization of Payload
110. 基础数据类型
111. Enumeration 数据类型
112. Structured 数据类型 (structs)
113. Strings
114. Vectors and Arrays
115. Associative Maps
116. Variant
117. Security
118. IAM
119. Access 控制的配置
120. Local Access 控制
121. Remote Access 控制
122. Secure Communication
123. Creation and use of secure channels
124. SOME/IP and DDS 网络 binding
125. DDS Security
126. SecOC
127. SOME/IP 网络 binding
128. Signal based 网络 binding
129. (D)TLS
130. SOME/IP 网络 binding
131. DDS 网络 Binding (secure transports)
132. IPsec
133. MACsec
134. Safety
135. End-to-end communication protection for SOMEIP
136. Events
137. 限制
138. Publisher
139. Subscriber - GetNewSamples
140. Case 1 - there are one or more serialized samples
141. Case 2 - there are no serialized samples
142. Subscriber - Callable f
143. Subscriber - Access to E2E information
144. Methods
145. 限制
146. E2E protection of the 服务 method request (Client)
147. Serializing the payload
148. E2E protection of the payload
149. E2E checking the 服务 method request (Server)
150. E2E checking of the payload
151. Deserializing the payload
152. E2E 错误通知
153. E2E protection of the 服务 method response (Server)
154. Serializing the E2E 错误 response payload
155. Serializing the response payload
156. E2E protection of the response payload
157. E2E checking the 服务 method response (Client)
158. E2E checking of the payload
159. Deserializing the payload
160. E2E 错误通知
161. Timeout supervision
162. Fields
163. Send a GET message
164. Receive a GET message
165. Receive a response to a GET message
166. Send a SET message
167. Receive a SET message
168. Receive a response to a SET message
169. Send an UPDATE message
170. Receive an UPDATE message
171. End-to-end communication protection for DDS
172. Events
173. Triggers
174. Methods
175. Fields
176. Communication 接口
177. Offer 服务
178. 服务 skeleton creation
179. 服务 skeleton Destruction
180. Query 服务 Event Subscription 状态 on Skeleton side
181. Send event
182. Processing of 服务 methods
183. Registering/Unsetting handlers
184. Registering handler with null pointer
185. Registering get handlers for fields
186. Registering set handlers for fields
187. Unsetting handlers
188. Find 服务
189. 服务 proxy creation
190. 服务 proxy destruction
191. 服务 event subscription
192. Receive event
193. Receive event by polling
194. Receive event by getting triggered
195. Query 服务 Trigger Subscription 状态 on Skeleton side
196. Send trigger
197. 服务 trigger subscription
198. Receive trigger
199. Receive trigger by getting triggered
200. Call a 服务 method
201. Update 通知 events for fields
202. API 数据类型
203. 服务 Identifier 数据类型
204. Event Related 数据类型
205. Trigger Related 数据类型
206. Method Related 数据类型
207. Generic 数据类型
208. 错误 Related 数据类型
209. E2E Related 数据类型
210. API Header Files
211. 服务 Implementation 数据类型 Header Files
212. 服务 Method Application 错误 Header Files
213. 功能性 cluster lifecycle
214. 启动
215. 关机
216. Reporting
217. 安全事件
218. Log Messages
219. Violation Messages
220. Production 错误
221. API 规范
222. PortInterface to API class binding
223. Header：{<si-namespace-derived-directory-path-lower>}/{<si-shortname-lower>}_common.h
224. Namespaces
225. Namespace：{<hierarchical-namespace-list-lower-common>}
226. Namespace：{<hierarchical-namespace-list-lower-common>}：：common
227. Class：{<si-shortname>}
228. Public Member Variables
229. Header：{<si-namespace-derived-directory-path-lower>}/{<si-shortname-lower>}_proxy.h
230. Namespaces
231. Namespace：{<hierarchical-namespace-list-lower-proxy>}
232. Namespace：{<hierarchical-namespace-list-lower-proxy>}：：proxy
233. Namespace：{<hierarchical-namespace-list-lower-proxy>}：：proxy：：events
234. Namespace：{<hierarchical-namespace-list-lower-proxy>}：：proxy：：fields
235. Namespace：{<hierarchical-namespace-list-lower-proxy>}：：proxy：：methods
236. Namespace：{<hierarchical-namespace-list-lower-proxy>}：：proxy：：triggers
237. Class：{<event-name>}
238. Public Member 类型
239. Public Member Functions
240. Member Functions
241. E2E Protection
242. 服务 Communication
243. 服务 Discovery
244. 服务管理
245. Class：{<field-name>}
246. Public Member 类型
247. Public Member Functions
248. Member Functions
249. E2E Protection
250. 服务 Communication
251. 服务 Discovery
252. 服务管理
253. Class：{<fnfmethod-name>}
254. Public Member Functions
255. E2E Protection
256. 服务 Communication
257. Class：{<method-name>}
258. Public Member Functions
259. E2E Protection
260. 服务 Communication
261. Struct：Output
262. Class：{<trigger-name>}
263. Public Member Functions
264. Member Functions
265. 服务 Communication
266. 服务 Discovery
267. 服务管理
268. Class：{<service-interface-name>}Proxy
269. Public Member Variables
270. Public Member Functions
271. Special Member Functions
272. Constructors
273. Named Constructors
274. 服务 Discovery
275. Class：HandleType
276. Public Member Functions
277. Special Member Functions
278. Member Functions
279. Header：{<si-namespace-derived-directory-path-lower>}/{<si-shortname-lower>}_skeleton.h
280. Namespaces
281. Namespace：{<hierarchical-namespace-list-lower-skeleton>}
282. Namespace：{<hierarchical-namespace-list-lower-skeleton>}：：skeleton
283. Namespace：{<hierarchical-namespace-list-lower-skeleton>}：：skeleton：：events
284. Namespace：{<hierarchical-namespace-list-lower-skeleton>}：：skeleton：：fields
285. Namespace：{<hierarchical-namespace-list-lower-skeleton>}：：skeleton：：triggers
286. Class：{<event-name>}
287. Public Member 类型
288. Public Member Functions
289. Member Functions
290. 服务 Communication
291. 服务 Discovery
292. Class：{<field-name>}
293. Public Member 类型
294. Public Member Functions
295. Member Functions
296. 服务 Communication
297. 服务管理
298. Class：{<trigger-name>}
299. Public Member Functions
300. Member Functions
301. 服务 Discovery
302. Class：{<service-interface-name>}Skeleton
303. Public Member Variables
304. Public Member Functions
305. Special Member Functions
306. Constructors
307. Member Functions
308. 服务 Communication
309. 服务 Discovery
310. 服务管理
311. Struct：{<method-name>}Output
312. Header：ara/com/类型.h
313. Non-Member 类型
314. Header：ara/com/服务/find_service_handle.h
315. Struct：FindServiceHandle
316. Public Member Functions
317. Special Member Functions
318. Member Functions
319. Header：ara/com/服务/sample_ptr.h
320. Class：SamplePtr
321. Public Member Functions
322. Special Member Functions
323. Constructors
324. Member Functions
325. Header：ara/com/服务/service_identifier.h
326. Class：ServiceIdentifierType
327. Public Member Functions
328. Special Member Functions
329. Member Functions
330. Header：ara/com/服务/service_version.h
331. Class：ServiceVersionType
332. Public Member Functions
333. Special Member Functions
334. Member Functions
335. Header：ara/com/com_error_domain.h
336. Namespaces
337. Namespace：ara：：com
338. Non-Member 类型
339. Non-Member Functions
340. Other
341. Class：ComErrorDomain
342. Public Member 类型
343. Public Member Functions
344. Special Member Functions
345. Member Functions
346. Class：ComException
347. Public Member Functions
348. Constructors
349. Header：ara/com/e2e/profile_check_status.h
350. Non-Member 类型
351. Header：ara/com/e2e/sm_state.h
352. Non-Member 类型
353. Header：ara/com/e2e/e2e_error_domain.h
354. Non-Member 类型
355. Non-Member Functions
356. Other
357. Class：ComE2EErrorDomain
358. Public Member 类型
359. Public Member Functions
360. Special Member Functions
361. Member Functions
362. Class：ComE2EException
363. Public Member Functions
364. Constructors
365. Header：ara/com/e2e/transport_fault_condition.h
366. Non-Member 类型
367. 服务接口
368. Implementation 数据类型
369. Provided 服务接口
370. Provided Ports
371. Client -Server 接口
372. 配置
373. Default Values
374. Semantic Constraints
375. 附录
376. Mentioned 清单 Elements
377. Demands and constraints on Base 软件 (normative)
378. Platform Extension 接口 (normative)
379. Header：apext/com/secoc/fvm.h
380. Struct：FVContainer
381. Public Member Variables
382. Class：FVM
383. Public Member 类型
384. Public Member Functions
385. Member Functions
386. Header：apext/com/secoc/fvm_error_domain.h
387. Non-Member 类型
388. Non-Member Functions
389. Other
390. Class：ComSecOcFvmErrorDomain
391. Public Member 类型
392. Public Member Functions
393. Special Member Functions
394. Member Functions
395. Class：ComSecOcFvmException
396. Public Member Functions
397. Constructors
398. Not implemented 需求
399. History of Constraints and 规范 Items
400. Constraint and 规范 Item Changes between AUTOSAR Release R24-11 and R25-11
401. Added 规范 Items in R25-11
402. Changed 规范 Items in R25-11
403. Deleted 规范 Items in R25-11
404. Added Constraints in R25-11
405. Changed Constraints in R25-11
406. Deleted Constraints in R25-11
407. Constraint and 规范 Item Changes between AUTOSAR Release R23-11 and R24-11
408. Added 规范 Items in R24-11
409. Changed 规范 Items in R24-11
410. Deleted 规范 Items in R24-11
411. Added Constraints in R24-11
412. Changed Constraints in R24-11
413. Deleted Constraints in R24-11
414. Constraint and 规范 Item Changes between AUTOSAR Release R22-11 and R23-11
415. Added 规范 Items in R23-11
416. Changed 规范 Items in R23-11
417. Deleted 规范 Items in R23-11
418. Added Constraints in R23-11
419. Changed Constraints in R23-11
420. Deleted Constraints in R23-11
421. Constraint and 规范 Item Changes between AUTOSAR Release R21-11 and R22-11
422. Added 规范 Items in R22-11
423. Changed 规范 Items in R22-11
424. Deleted 规范 Items in R22-11
425. Constraint and 规范 Item Changes between AUTOSAR Release R20-11 and R21-11
426. Added 规范 Items in R21-11
427. Changed 规范 Items in R21-11
428. Deleted 规范 Items in R21-11
429. Constraint and 规范 Item Changes between AUTOSAR Release R19-11 and R20-11
430. Added 规范 Items in R20-11
431. Changed 规范 Items in R20-11
432. Deleted 规范 Items in R20-11
433. Constraint and 规范 Item Changes between AUTOSAR Release R19-03 and R19-11
434. Added 规范 Items in R19-11
435. Changed 规范 Items in R19-11
436. Deleted 规范 Items in R19-11
437. Constraint and 规范 Item Changes between AUTOSAR Release R18-10 and R19-03
438. Added 规范 Items in 19-03
439. Changed 规范 Items in 19-03
440. Deleted 规范 Items in 19-03
441. Constraint and 规范 Item Changes between AUTOSAR Release R18-03 and R18-10
442. Added 规范 Items in 18-10
443. Changed 规范 Items in 18-10
444. Deleted 规范 Items in 18-10
445. Constraint and 规范 Item Changes between AUTOSAR Release R17-10 and R18-03
446. Added 规范 Items in 18-03
447. Changed 规范 Items in 18-03
448. Deleted 规范 Items in 18-03
449. Constraint and 规范 Item Changes between AUTOSAR Release R17-03 and R17-10
450. Added 规范 Items in 17-10
451. Changed 规范 Items in 17-10
452. Deleted 规范 Items in 17-10
