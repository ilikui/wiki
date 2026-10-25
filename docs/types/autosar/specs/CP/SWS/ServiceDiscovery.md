# Specification of Service Discovery (`ServiceDiscovery`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 616 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_ServiceDiscovery_616\AUTOSAR_CP_SWS_ServiceDiscovery.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_ServiceDiscovery_616\AUTOSAR_CP_SWS_ServiceDiscovery.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_ServiceDiscovery_616\zzgen\CP_SWS_ServiceDiscovery.complete.txt`

## 文档简介

The AUTOSAR Service Discovery module offers functionality to detect and offer available services - i.e. functional entities - within the vehicle network. To do so, it makes use of the IP Multicast and so called SOME/IP-SD messages.

The Service Discovery module (Sd) is located between the AUTOSAR BSW Mode Manager module (BswM) and the AUTOSAR Socket Adaptor module (SoAd).

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The AUTOSAR Service Discovery module offers functionality to detect and offer available services - i.e. functional entities - within the vehicle network. To do so, it makes use of the IP Multicast and so called SOME/IP-SD messages.

The Service Discovery module (Sd) is located between the AUTOSAR BSW Mode Manager module (BswM) and the AUTOSAR Socket Adaptor module (SoAd).

### 2. Acronyms, Abbreviations and 定义
*原文标题：Acronyms, Abbreviations and Definitions*

The glossary below includes acronyms and abbreviations relevant to the Service Discovery module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| BswM | Basis software manager |
| ECU | Electronic Control Unit |
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |
| SD | Service Discovery |
| Sd | Service Discovery Module in AUTOSAR |
| SoAd | Socket Adaptor |
| SOME/IP | Scalable service-Oriented MiddlewarE over IP |
| SOME/IP-SD | SOME/IP Service Discovery |

| Term: | Description: |
|---|---|
| Service | A functional entity that offers an interface |
| Service Instance | A single instance of the Service |
| Offer | A message entry that offers a Service Instance |
| Stop Offer | A message that stops offering a Service Instance |
| Find | A message entry used to find a Service Instance |
| Event | A message sent by an ECU implementing a Service Instance to an ECU using this Service Instance. |
| Eventgroup | A logical grouping of 1 or more events. An Eventgroup is part of a Service. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Service Discovery.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Service Discovery.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

Although the AUTOSAR SD is able to respond to wildcard requests (ANY) for Service ID, Instance ID, Major Version, and Minor Version, this module is only able to send wildcard finds for Minor Version.

Load Balancing Option (Priority field and Weight field) can be configured for the OfferServices. However, the Client does not evaluate these fields.

The specification does not support setting the Discardable flag of a SOME/IP entry option to 1 and reacting to the reception of an (unknown/unsupported) option with the Discardable flag set to 1 (see , , , ).

The specification does not support that IPv4/IPv6 SD endpoint options are included in any SOME/IP-SD entry of a transmitted SOME/IP-SD message (see  - ,  - , , , ).

SOME/IP-ACL contents will be the IP addresses of the allowed communication partners, so this feature will not be applicable in case of dynamic IP via DHCP is used.

### 8. 限制 for communication with Adaptive Platform
*原文标题：Limitations for communication with Adaptive Platform*

The following limitations regarding the SOME/IP SD functionality described in SOME/IP Service Discovery Protocol Specification and System Template apply:

* Configuration options (see  - ) Capability records that are received from CP side will not be evaluated on AP side.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

N/A

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 11. AUTOSAR BSW Scheduler

The BSW Scheduler calls the main functions of the Service Discovery module, which is necessary for the cyclic processes of the Service Discovery.

### 12. AUTOSAR BSW 模式管理器
*原文标题：AUTOSAR BSW Mode Manager*

The BswM module provides the link between the generic mode requests and the service requests.

### 13. AUTOSAR Socket Adaptor

The Socket Adaptor hands over service requests between the Ethernet Stack and the Service Discovery Module.

The Service Discovery module shall be able to activate and de-activate the PDU routing from and to TCP/IP-sockets and trigger the initial transport of events (triggered transmit).

The SoAds Socket Connection Table needs to be pre-configured to receive the unicast and multicast messages sent by Service Discovery modules of other ECUs. As the ECU might be connected to multiple (virtual) networks, there can exist multiple Service Discovery Instances, which may have multiple Socket Connection Table entries. The triples of Unicast Rx, Multicast Rx, and Tx PduIDs for each (virtual) interface need to be configured in the SoAd and known to the Service Discovery module.

Additionally the Service Discovery module updates endpoint information (IP address and port number) in socket connections (SoAdSocketConnection), which the Service Discovery module extracts from received Service Discovery messages.

For robustness reasons these UDP Sockets should only be used for SD messages and the option SoAdSocketUdpStrictHeaderLenCheckEnabledshould be turned on.

### 14. AUTOSAR Default 错误 Tracer
*原文标题：AUTOSAR Default Error Tracer*

In order to be able to report development errors, the Service Discovery module has to have access to the error hook of the Default Error Tracer.

### 15. AUTOSAR 诊断 Event 管理器
*原文标题：AUTOSAR Diagnostic Event Manager*

In order to be able to report production errors the Service Discovery module has to have access to the Diagnostic Event Manager.

### 16. AUTOSAR Non Volatile 存储
*原文标题：AUTOSAR Non Volatile Memory*

In order to save the updated ACL (Access Control List), the Service Discovery module shall have access to Non Volatile Memory NVM.

### 17. 文件结构
*原文标题：File structure*

### 18. 代码文件结构
*原文标题：Code file structure*

Upstream requirements: , ,
⌈
The code file structure shall not be defined within this specification completely. At this point it shall be pointed out that the code-file structure shall include the following files named:

* `Sd_Lcfg`.c - for link time configurable parameters and
* `Sd_PBcfg`.c - for post build time configurable parameters.

These files shall contain all link time and post-build time configurable parameters.
⌋

### 19. 头文件结构
*原文标题：Header file structure*

Upstream requirements: ,
⌈
The module shall include the Dem.h file. By this inclusion, the APIs to report errors as well as the required Event Id symbols are included.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
The module shall include the header file NvM.h if the ACL check is configured.
⌋

### 20. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Basic SW security events |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| Data types naming convention |  |  |
| API naming convention |  |  |
| Classification of development errors |  |  |
| Reporting of production relevant error status |  |  |
| BSW Modules shall support link-time configuration |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 功能规范
*原文标题：Functional specification*

### 22. Background & Rationale

The main tasks of the Service Discovery Module are managing the availability of functional entities called services in the in-vehicle communication as well as controlling the send behavior of event messages. This allows sending only event messages to receivers requiring them (Publish/Subscribe). The solution described here is also known as SOME/IP-SD (Scalable service-Oriented MiddlewarE over IP - Service Discovery).

With Service Discovery different ECUs can offer Service Instances and find available Service Instances within the vehicle network. An ECU can stop offering a Service Instance it was offering before. Later finds to such a service instance will remain unanswered. Service Instances are single implementations of a service that is defined by its service interface. In the AUTOSAR context, a find is an operation to identify available Service Instances and their locations.

In addition to the status of Service Instances, the Service Discovery is able to control sending special messages called events.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 需求
*原文标题：Requirements*

### 24. 通用需求
*原文标题：General requirements*

Upstream requirements: ,
⌈
It shall be possible to configure the Service Discovery module as an optional AUTOSAR BSW Module. Please refer to the SystemTemplate for configuration.
⌋

  Upstream requirements:
⌈
The Service Discovery shall implement a main function, which shall be called cyclically according to configuration parameter SdMainFunctionCycleTime.
⌋

  Upstream requirements: , ,
⌈
The Service Discovery module shall store the ServiceModeRequest, which is provided via the BswM by calling the following APIs:

* `Sd_ServerServiceSetState`() and `Sd_ClientServiceSetState`(), respectively, If the SdServerService and SdClientService, respectively, is NOT referencing a SdServiceGroup
* `Sd_ServiceGroupStart` and SdServiceGroupStop, if the SdServerService and SdClientService, respectively is referencing a SdServiceGroup
* `Sd_ConsumedEventGroupSetState`(), if dedicated SdEventGroupS are requested by a SdClientService. (Note: This API call is allowed independent of a reference to a SdServiceGroup of a SdClientService )
* `Sd_EventHandlerSetState`() does currently not exist, since this state is directly deduced from the state of a Server Service by the Service Discovery.
⌋

Note:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Ethernet Communication

Upstream requirements: ,
⌈
Every Service Discovery Configuration Instance (see configuration container SdInstance) shall have at least one TxPdu ID, one RxPdu ID for Unicast, and one RxPdu ID for Multicast (see configuration parameter SdInstanceTxPdu, SdInstanceUnicastRxPdu, and SdInstanceMulticastRxPdu respectively).
⌋

  Upstream requirements:
⌈
For different links, separate Service Discovery instance containers shall be configured.
⌋

Note:

Links in this regards also includes different virtual links using Ethernet VLANs.

  Upstream requirements: ,
⌈
A SD Instance does only support a single Address Family (i.e. IPv4 or IPv6). This address family shall be learned by means of the SoAd configuration of SdInstanceTxPdu, SdInstanceUnicastRxPdu, and SdInstanceMulticastRxPdu (local address).
⌋

  Upstream requirements: ,
⌈
During initialization of the SD module, the API `SoAd_OpenSoCon`() shall be called for all Socket Connections associated with SdInstanceTxPdu, SdInstanceUnicastRxPdu and SdInstanceMulticastRxPdu.
⌋

Note:

The SoAd module needs to be initialized before the SD module is initialized.

Note:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 状态处理
*原文标题：State Handling*

Upstream requirements: ,
⌈
The Service Discovery module shall store the status of all statically configured Service Instances and Eventgroups separately.
⌋

  Upstream requirements: ,
⌈
After initialization of the Service Discovery module by the call of the API `Sd_Init`(), all configured Server Service Instances shall have the state "`SD_SERVER_SERVICE_DOWN`", unless a Server Service Instance has SdServerServiceAutoAvailable set to true, then the state shall be set to "`SD_SERVER_SERVICE_AVAILABLE`".
⌋

Note:

SdServerServiceAutoAvailable set to true, is only allowed for Server Services which are NOT referencing a SdServiceGroup.

  Upstream requirements: ,
⌈
After initialization of the Service Discovery module by calling of the API `Sd_Init`(), all configured Client Service Instances shall have the state "`SD_CLIENT_SERVICE_RELEASED`", unless a Client Service Instance has SdClientServiceAutoRequired set to true, then the state shall be set to "`SD_CLIENT_SERVICE_REQUESTED`".
⌋

Note:

SdClientServiceAutoRequire set to true, is only allowed for Client Services which are NOT referencing a SdServiceGroup.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Interaction with Socket Adaptor

Upstream requirements: ,
⌈
The Service Discovery module shall be able to enable/disable routing groups within the SoAd module using the APIs `SoAd_EnableSpecificRouting`(), and `SoAd_DisableSpecificRouting`() for Server-and Client Service Instances.
⌋

  Upstream requirements: ,
⌈
The Service Discovery module shall be able to trigger the sending of initial Events using the API `SoAd_IfSpecificRoutingGroupTransmit`().
⌋

  Upstream requirements: ,
⌈
The Service Discovery module shall be able to reference RoutingGroup(s) per Service Instance/Eventgroup. See the following configuration parameters:

* SdClientServiceActivationRef (in SdConsumedMethods)
* SdConsumedEventGroupMulticastActivationRef
* SdConsumedEventGroupTcpActivationRef
* SdConsumedEventGroupUdpActivationRef
* SdServerServiceActivationRef (in SdProvidedMethods)
* SdEventActivationRef (in SdEventHandlerMulticast)
* SdEventActivationRef (in SdEventHandlerTcp)
* SdEventTriggeringRef (in SdEventHandlerTcp)
* SdEventActivationRef (in SdEventHandlerUdp)
* SdEventTriggeringRef (in SdEventHandlerUdp)
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Subscribe Eventgroup retry 处理
*原文标题：Subscribe Eventgroup retry handling*

The Subscribe Eventgroup retry mechanism is an optional feature for ClientServices. This could be used to speed up the recovery if a SOME/IP-SD message is lost (e.g. SubscribeEventGroupAck) and the interval between cycle offers are to large to get a fast recovery, or to speed up subscriptions if an Eventgroup is requested somewhere between two cyclic offers. The timing behavior of Subscribe Eventgroup retry mechanism could be configured per ClientService and has to match to the timing behavior of the corresponding ServerService (see TPS SysT constr_5095). For ServerServices which have their TLL (SdServerTimerTTL) set to 0xFFFFFF and their interval between cyclic offers in the main phase (SdServerTimerOfferCyclicDelay) set to 0, it's possible to set the Subscribe Eventgroup retry to 0xFF (see TPS SysT constr_5096). This would mean to retry the subscription to an EventGroup as along as the EventGroup is set to `SD_CONSUMED_EVENTGROUP_REQUESTED` and no SubscribeEventGroupAck was received.

  Upstream requirements:
⌈
The subscribe Eventgroup retry handling shall only be processed for Eventgroups of a ServerService where

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Message format

Most of the requirements are handled in the PRS  and only the Classic Platform related is defined in this chapter.

Note: All Service Discovery messages are in Network Byte Order (i.e. Big Endian Byte Order), see . This is ensured for SOME/IP header fields by  and needs to be configured for SOMEIP Payload according to .

### 30. Request ID

This chapter describes the requirements related to the Request ID field. The Request ID is made up of Client ID and Session ID. While the Client ID is not used for Service Discovery, the Session ID is used to detect the reboot or restart of other Service Discovery instances in the vehicle in order to repair the local state of the Service Discovery module.

  Upstream requirements:
⌈
After initialization of the Service Discovery Module, the Session ID for messages sent by the local ECU shall be 0x0001.
⌋

Note to : This means that the first SD message sent out has Session ID set to 0x0001. According to  the Service Discovery module has to handle the session ID per communication partner. Thus, the first SD message sent out to the multicast endpoint as well as the first SD message sent out to any unicast endpoint has the Session ID set to 0x0001.

### 31. 协议 Version field
*原文标题：Protocol Version field*

The Protocol Version field is used to describe the current version of SOME/IP.

### 32. 接口 Version field
*原文标题：Interface Version field*

The Interface Version field is used to describe the current version of the SOME/IP service; i.e. the current version of SOME/IP-SD itself.

### 33. Message 类型 field
*原文标题：Message Type field*

The Message Type field is used to differentiate the types of SOME/IP messages. SOME/IP-SD uses only event messages; thus, it always uses the same type.

### 34. Return 代码 field
*原文标题：Return Code field*

The Return Code is used to signal whether a request was successfully been processed. This is not applicable for SOME/IP-SD; therefore, the return code will be statically set to 0x00.

### 35. Flags field

With the Flags field the SOME/IP-SD header starts. It is used to signal global Service Discovery information, which includes currently the state of the last reboot as well as the capability of receiving unicast messages.

Reboot Detection

 Implement reboot detection
  Upstream requirements: ,
⌈
The service discovery shall implement the reboot detection according to , , , , , and .
⌋

  Upstream requirements: ,
⌈
If a server or client detects a reboot by evaluating the Session ID and Reboot Flag of a received SOME/IP-SD message which was send by a communication partner, then the local state of the affected communication partner shall expire and the following actions shall be performed:

* In case a client detects a reboot of a server and the client uses a service of this server, the client shall handle the reboot as if a StopOffer entry was received (see also  for further details). Furthermore

  * If SdClientServiceTcpRef is configured for this service, the active Client shall close the corresponding TCP connection by calling `SoAd_CloseSoCon`() with parameter "abort" set to TRUE.
  * This Offer entry shall be processed according to .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Reserved field

This Reserved field is not currently used and left empty for further enhancements of the SOME/IP-SD protocol.

### 37. Entries Array

When SOME/IP-SD find or offers Service Instances or handles subscriptions this is done by so called entries, which are transported in the entry array of the SOME/IP-SD message (see ).

### 38. Entry Format 类型 1
*原文标题：Entry Format Type 1*

Two types of Entries exist: Type 1 Entries for Services and Type 2 Entries for Eventgroups.

For further details on the Entry Format Type 1, see

The Type 1 Entries shall have the following layout:

  Upstream requirements: ,
⌈
The Service ID field of the Type 1 Entry format layout shall carry the Service ID of the service, statically configured using the parameter SdServerServiceID and SdClientServiceID, depending on being a server or client entry. See also [] and [].
⌋

  Upstream requirements: ,
⌈
The Instance ID field of the Type 1 Entry format layout shall carry the Instance ID of the service, statically configured using the parameter SdServerServiceInstanceID and SdClientServiceInstanceID, depending on being a server or client entry. See also [] and [].
⌋

  Upstream requirements: ,
⌈
The Major Version field of the Type 1 Entry format layout shall carry the SdServerServiceMajorVersion and SdClientServiceMajorVersion, depending on being a server or client entry. See also [] and [].
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Entry Format 类型 2
*原文标题：Entry Format Type 2*

The Type 2 Entries format shall be used for Eventgroups.

For further details on the Entry Format Type 2, see see

  Upstream requirements: ,
⌈
The Service ID field of the Type 2 Entry format layout shall carry the Service ID of the eventgroups service, statically configured using the parameter SdServerServiceID and SdClientServiceID, depending on being a server or client entry. See also [] and [].
⌋

  Upstream requirements: ,
⌈
The Instance ID field of the Type 2 Entry format layout shall carry the Instance ID of the eventgroups service statically configured using the parameter SdServerServiceInstanceID and SdClientServiceInstanceID, depending on being a server or client entry. See also [] and [].
⌋

  Upstream requirements: ,
⌈
The Major Version field of the Type 2 Entry format layout shall carry the SdServerServiceMajorVersion and SdClientServiceMajorVersion, depending on being a server or client entry. See also [] and [].
⌋

  Upstream requirements: ,
⌈
The TTL field of the Type 2 Entry format layout defines the lifetime of the entry in seconds configured using the parameter SdServerTimerTTL and SdClientTimerTTL, except for Stop- or Nack-Entries, which use a TTL of 0.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Options Array

The Option array is the last part of the Service Discovery Message (see ). The options in the options array carry additional information.

For further details on the Configuration Option, see

### 41. 配置 Option
*原文标题：Configuration Option*

The Configuration Option transports additional attributes of entries in the Service Discovery messages. Between 0 and n configuration items can be transported using the Configuration Option. These configuration items can include for example the name of the host or the Service.

  Upstream requirements: ,
⌈
The Configuration String shall be constructed as follows from the SdServerCapabilityRecord and SdClientCapabilityRecord (Eventgroups of Services with ID 0xFFFE shall include the Services CapabilityRecord):

* For every SdServerCapabilityRecordKey/ SdServerCapabilityRecordValue or SdClientServiceCapabilityRecordKey/ SdClientServiceCapabilityRecordValue pair:

  * A config_item_string is constructed of the concatenation of key, "=", and value.
  * The length of this config_item_string is written as uint8 to the configuration string.
  * The config_item_string is appended to the configuration string.
* Append a 0x00 uint8 at the end. This means no further config_item_string follows.

See also  and .
⌋

Example for Configuration Option:

  Upstream requirements: ,
⌈
SdServerCapabilityRecordValue and SdClientServiceCapabilityRecordValue are allowed to be empty.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. IPv4 Endpoint Option

This chapter describes the fields and values of the IPv4 Endpoint Option, which transports unicast IP Address, Layer 4 Protocols (e.g. UDP or TCP), and Port Number; thus, the information needed to communicate with a service.

When receiving a Service Discovery message offering a service and transporting an IPv4 Endpoint Option, ECUs receiving this message can dynamically configure the Socket Adaptor for using this service by updating a Socket Connection.

  Upstream requirements: ,
⌈
The ports shall be used for the events and notification events as well.

* When using UDP the server uses the announced port as source port.
* With TCP the client shall check the status of the socket connection by calling `SoAd_GetSoConMode`(). Calling this API has to provide `SOAD_SOCON_ONLINE` state for at the dedicated socket connection.

In addition, if a secure port was selected, an security association needs to be established before sending the subscription. Otherwise events and notification events can neither be sent secure ports nor received.
⌋

### 43. IPv6 Endpoint Option

This chapter describes the fields and values of the IPv6 Endpoint Option, which is the same as the IPv4 Endpoint Option except that it transport IPv6 Addresses instead IPv4 Addresses.

  Upstream requirements: , ,
⌈
The ports shall be used for the events and notification events as well.

* When using UDP the server uses the announced port as source port.
* With TCP the client shall check the status of the socket connection by calling `SoAd_GetSoConMode`(). Calling this API has to provide `SOAD_SOCON_ONLINE` state for at the dedicated socket connection.

In addition, if a secure port was selected, an security association needs to be established before sending the subscription. Otherwise events and notification events can neither be sent secure ports nor received.
⌋

### 44. IPv4 Multicast Option

The IPv4 Multicast option is either used by an SdServerService to announce its configured Eventhandler multicast endpoint or by a SdClientService to announce its configured Consumed Eventgroup multicast endpoint:

* If it is used as Eventhandler multicast endpoint, then an SdServerService announces the IPv4 multicast address, the transport layer protocol (ISO/OSI layer 4) and the port number, to where the multicast-events and multicast-notification-events are sent to.
* If it is used as Consumed Eventgroup multicast endpoint, then an SdClientService indicates the IPv4 multicast address, the transport layer protocol (ISO/OSI layer 4) and the port number, where the SdClient expects events to be received.

As transport layer protocol, only UDP is supported.

### 45. IPv6 Multicast Option

The IPv6 Multicast option is either used by an SdServerService to announce its configured Eventhandler multicast endpoint or by an SdClientService to announce its configured Consumed Eventgroup multicast endpoint:

* If it is used as Eventhandler multicast endpoint, then an SdServerService announces the IPv6 multicast address, the transport layer protocol (ISO/OSI layer 4) and the port number, to where the multicast-events and multicast-notification-events are sent to.
* If it is used as Consumed Eventgroup multicast endpoint, then an SdClientService indicates the IPv6 multicast address, the transport layer protocol (ISO/OSI layer 4) and the port number, where the SdClient expects events to be received.

As transport layer protocol, only UDP is supported.

### 46. IPv4 SD Endpoint Option

The IPv4 SD Endpoint Option transports the endpoint (i.e. IP-Address and Port) of the senders SD implementation. This is used to identify the SOME/IP-SD Instance in cases in which the IP-Address and/or Port Number cannot be used.

 IPv4 Service Discovery Endpoint Options
  Upstream requirements: ,
⌈
The SOME/IP-SD implementation shall support

, , , , , , , , , , .
⌋

Note: The sending of the SD Endpoint Options is currently out of scope of AUTOSAR.

### 47. IPv6 SD Endpoint Option

The IPv6 SD Endpoint Option transports the endpoint (i.e. IP-Address and Port) of the senders SD implementation. This is used to identify the SOME/IP-SD Instance in cases in which the IP-Address and/or Port Number cannot be used.

 IPv6 Service Discovery Endpoint Options
  Upstream requirements: , ,
⌈
The SOME/IP-SD implementation shall support

, , , , , , , , , , .
⌋

Note: The sending of the SD Endpoint Options is currently out of scope of AUTOSAR.

### 48. 处理 missing, redundant, and conflicting Options
*原文标题：Handling missing, redundant, and conflicting Options*

This section describes the error handling of received options.

Note: Several entry types are used in combination with different option types:

* Offer and StopOffer entries use an IPv4 or IPv6 Endpoint Option. The Endpoint Option content (IP address, port and L4-protocol) are identified via SdServerServiceTcpRef and SdServerServiceUdpRef
* Subscribe and StopSubscribe entries use an IPv4 or IPv6 Endpoint Option, if the corresponding Client Service refer to SdClientServiceTcpRef or SdClientServiceUdpRef
* Subscribe and StopSubscribe entries use an IPv4 or IPv6 Multicast Option, if the corresponding Client Service refer to SdClientServiceMulticastRef
* SubscribeEventGroupAck entries use an IPv4 or IPv6 Multicast Option. The Endpoint Option content (multicast IP address and port) are identified via SdMulticastEventSoConRef

For further details on Handling missing, redundant, and conflicting Options, see  4.1.4.6 Error Handling

  Upstream requirements: ,
⌈
SubscribeEventgroup entries shall be answered with SubscribeEventgroupNack, if the SubscribeEventgroup entry reference two or more options that are in conflict or the option type is unknown.
⌋

Note:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. Security considerations for Options

Upstream requirements:
⌈
For checking if endpoints are topological correct, the value of  shall be used in order to determine on how many leading bits shall be compared to check if an IP address is qualified as local. If not present, the value of the locally configured netmask for the IP address shall be used.
⌋

### 其余 142 章（内容从略，见纯文本全文）

50. Entries referencing Options
51. 服务 Discovery Entry 类型
52. Entries for 服务 (common 需求)
53. FindService entry
54. OfferService entry
55. Building OfferService entries
56. StopOfferService entry
57. Eventgroup Entries (Common 需求)
58. SubscribeEventgroup entry
59. StopSubscribeEventgroup entry
60. SubscribeEventgroupAck entry
61. SubscribeEventgroupNack entry
62. Building SubscribeEventgroup entries
63. Sending and Receiving of Messages
64. Sequence for message transmission
65. Sequence for message reception
66. Receiving Entries
67. Answering 行为, if receiving 服务 Discovery Entries via Multicast address
68. Timings and repetitions for Server 服务 and Event Handlers
69. Initial Wait Phase for Server 服务
70. Repetition Phase for Server 服务
71. Main Phase for Server 服务
72. Fan out 控制
73. Sharing of SdServerTimer
74. Timings and repetitions for Client 服务 and Consumed Eventgroups
75. Down Phase for Client 服务
76. Initial Wait Phase for Client 服务
77. Repetition Phase for Client 服务
78. Main Phase for Client 服务
79. Fan in 控制
80. Sharing of SdClientTimer
81. 处理 of SdServiceGroupS
82. SdServiceGroup 定义
83. 初始化 of SdServiceGroupS
84. Starting of SdServiceGroupS
85. Stopping of SdServiceGroupS
86. SOME/IP-ACL
87. ACL 配置
88. ACL update
89. ACL Policy Check
90. Client ACL
91. Offer 服务
92. Server ACL
93. SubscribeEventgroup
94. Method Request
95. 安全事件
96. 错误分类
97. Development 错误
98. Runtime 错误
99. Production 错误
100. Extended Production 错误
101. API 规范
102. Imported 类型
103. 类型定义
104. Sd_ConfigType
105. Sd_ServerServiceSetStateType
106. Sd_ClientServiceSetStateType
107. Sd_ConsumedEventGroupSetStateType
108. Sd_ClientServiceCurrentStateType
109. Sd_ConsumedEventGroupCurrentStateType
110. Sd_EventHandlerCurrentStateType
111. Sd_ConfigOptionStringType
112. Sd_ServiceGroupIdType
113. Sd_ServiceAclUpdateType
114. 功能定义
115. Sd_Init
116. Sd_ServerServiceSetState
117. Sd_ClientServiceSetState
118. Sd_ConsumedEventGroupSetState
119. Sd_LocalIpAddrAssignmentChg
120. Sd_SoConModeChg
121. Sd_ServiceGroupStart
122. Sd_ServiceGroupStop
123. Sd_AclUpdate
124. Sd_RequestRoutingGroupEnable
125. Sd_AclCheckEnable
126. Sd_RxIndication
127. Scheduled functions
128. Sd_MainFunction
129. Expected 接口
130. Mandatory 接口
131. Optional 接口
132. Configurable 接口
133. Sd_CapabilityRecordMatchCallout
134. 时序图
135. CLIENT / SERVER：Sd_RxIndication
136. SERVER：Response 行为
137. CLIENT：Response 行为
138. SERVER：buildOfferServiceEntry
139. CLIENT：buildSubscribeEventgroupEntry
140. SERVER：buildSubscribeEventgroupAckEntry
141. CLIENT / SERVER：TransmitSdMessage
142. SERVER：AddClientToFanOut
143. SERVER：Start
144. CLIENT：Start
145. ACL：服务 Offer
146. ACL：SubscribeEventgroup
147. ACL：Method call request
148. 配置规范
149. How to read this chapter
150. Containers and 配置 parameters
151. Sd
152. SdGeneral
153. SdConfig
154. SdCapabilityRecordMatchCallout
155. SdServiceGroup
156. SdInstance
157. SdClientService
158. SdBlocklistedVersions
159. SdClientCapabilityRecord
160. SdConsumedEventGroup
161. SdConsumedMethods
162. SdClientTimer
163. SdInstanceDemEventParameterRefs
164. SdInstanceMulticastRxPdu
165. SdInstanceTxPdu
166. SdInstanceUnicastRxPdu
167. SdServerService
168. SdEventHandler
169. SdEventHandlerMulticast
170. SdEventHandlerTcp
171. SdEventHandlerUdp
172. SdProvidedMethods
173. SdServerCapabilityRecord
174. SdServerTimer
175. SdServerServiceAllowedConsumers
176. SdClientServiceAllowedProvider
177. 发布信息
178. 附录
179. Change history of AUTOSAR traceable items
180. Traceable item history of this document according to AUTOSAR Release R26-11
181. Added 规范 Items in R26-11
182. Changed 规范 Items in R26-11
183. Deleted 规范 Items in R26-11
184. Traceable item history of this document according to AUTOSAR Release R25-11
185. Added 规范 Items in R25-11
186. Changed 规范 Items in R25-11
187. Deleted 规范 Items in R25-11
188. Traceable item history of this document according to AUTOSAR Release R24-11
189. Added 规范 Items in R24-11
190. Changed 规范 Items in R24-11
191. Deleted 规范 Items in R24-11
