# Specification of Diagnostics (`Diagnostics`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 723 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_Diagnostics_723\AUTOSAR_AP_SWS_Diagnostics.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_Diagnostics_723\AUTOSAR_AP_SWS_Diagnostics.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_Diagnostics_723\zzgen\AP_SWS_Diagnostics.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Adaptive Diagnostic Management (DM).

The DM is a diagnostic server implementation that realizes

* a UDS server instance according to ISO 14229-1

* SOVD according to ASAM for the AUTOSAR Adaptive Platform.

As transport layer for UDS, a flexible concept is applied. The DoIP protocol based on ISO 13400-2:2019, including ISO 13400-2:2019/Amd 1:2023 or a custom implementation of a transport protocol can be used.

For SOVD, the HTTP/HTTPS transport protocol with REST services is used.

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Adaptive Diagnostic Management (DM).

The DM is a diagnostic server implementation that realizes

* a UDS server instance according to ISO 14229-1

* SOVD according to ASAM for the AUTOSAR Adaptive Platform.

As transport layer for UDS, a flexible concept is applied. The DoIP protocol based on ISO 13400-2:2019, including ISO 13400-2:2019/Amd 1:2023 or a custom implementation of a transport protocol can be used.

For SOVD, the HTTP/HTTPS transport protocol with REST services is used.

### 2. 诊断接口
*原文标题：Diagnostic interface*

Since release R19-03, a C++ interface was introduced for diagnostics as a replacement for the former ara::com based service interface.

### 3. AUTOSAR 诊断 Extract 模板 (DEXT)
*原文标题：AUTOSAR Diagnostic Extract Template (DEXT)*

The AUTOSAR Diagnostic Extract Template (DEXT)  is the configuration input to the DM.

### 4. 软件 Cluster
*原文标题：Software Cluster*

The AUTOSAR adaptive platform (AP) is able to be extended with new software packages without re-flashing the entire ECU. The individual software packages are described by SoftwareClusters. To support the current approaches of diagnostic management (like software updates), each SoftwareCluster has its own DiagnosticAddress.

The DM is intended to support an own diagnostic server instance per installed SoftwareCluster. All diagnostic server instances share a single TransportLayer instance (e.g. DoIP on TCP/IP port 13400).

### 5. 诊断 Server
*原文标题：Diagnostic Server*

The Diagnostic Communication Management response handling basically resembles the functionality of the Dcm BSW module of the AUTOSAR Classic platform. I.e. it is responsible for processing/dispatching of diagnostic services according to ISO 14229-1 and SOVD services as per Service-Oriented Vehicle Diagnostics standard Specification . That means:

* Receiving diagnostic request messages from the network layer.

  * UDS DoIP or proprietary transport protocol requests
  * SOVD HTTP/REST requests
* Processing and extracting information from the request

  * transport layer independent UDS information
  * entity path and resource information for SOVD requests
* Dispatching the request towards the Diagnostic Server instances depending on

  * the target address and target address type (physical or functional) for UDS requests
  * the addressed entity and its path in the URI for SOVD requests
* Managing multiple diagnostic requests and clients by

  * correlating the diagnostic request to an existing UDS session (if already exists).
  * handling modes and locks for the SOVD resource requested by the SOVD client and protect access to the resources (e.g., operations).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 诊断 Managers external dependencies
*原文标题：Diagnostic Managers external dependencies*

### 7. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Abbreviation / Acronym: | Description: |
|---|---|
| APMC | Adaptive Platform Machine Configuration |
| DCM | Diagnostic Communication Manager (Module of the AUTOSAR Classic Platform) |
| DDDID | Dynamically Defined Data Identifier |
| DID | Diagnostic Identifier |
| DNS | Domain Name System |
| EDR | Extended Data Record |
| EID | Entity Identifier |
| FDC | Fault Detection Counter |
| GID | Group Identifier |
| HTTP | Hypertext-Transport-Protocol (see RFC 7540 and RFC 7541 for HTTP/2 (backward compatible to HTTP/1.1)) |
| HTTPS | Hypertext Transfer Protocol Secure (secure variant of HTTP) |
| NRC | Negative Response Code used by UDS in the diagnostic response to indicate the tester that a certain failure has occurred and the diagnostic request was not processed. |
| Oc | Occurrence counter |
| OC | Operation Cycle |
| OCC | Operation Cycle Counter |
| PDID | Periodic Data Identifier according to ISO 14229-1. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 相关文档
*原文标题：Related documentation*

### 9. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 10. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 11. 约束与假设
*原文标题：Constraints and assumptions*

### 12. 已知限制
*原文标题：Known Limitations*

This chapter describes known limitations of the DM in respect to general claimed goals of the module. The nature of constraints can be a general exclusion of a certain domain / functionality or it can be that the provided standard has not yet integrated this functionality and will do so in future releases.

### 13. UDS 支持
*原文标题：UDS support*

The following international standards are not supported by the DM:

* Legislated OBD services (ISO 15031-5:2015) are not supported by the DM.
* Legislated WWH-OBD services (ISO 27145-2:2012, ISO 27145-2:2012 Amd 1:2023, ISO 27145-3:2012) are not supported by the DM.

The Sub-functions of UDS services are implemented according to ISO 14229-1:2020 (Edition 3) unless explicitly stated.

The following UDS services are not implemented by the DM:

* 0x23 ReadMemoryByAddress
* 0x24 ReadScalingDataByIdentifier
* 0x2F InputOutputControlByIdentifier
* 0x3D WriteMemoryByAddress
* 0x83 AccessTimingParameter
* 0x84 SecuredDataTransmission
* 0x87 LinkControl

The following UDS services have limitations as listed below:

* 0x19 ReadDTCInformation: The following sub-functions are not supported:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. DoIP 支持
*原文标题：DoIP support*

The following limitations apply for the ISO 13400-2 (DoIP) series:

* DoIP gateway is not supported by the DM, this means, no further routing to underlying sub-networks is foreseen and related DoIP-requirements, do not apply.
* Value 0x00 is not supported as default value for EID,GID and VIN as specified in ISO 13400-2
* Manufacturer-specific-PayloadType and DoIP-PayloadType 0x9001 as defined in ISO 13400-2:2025 (Edition 3), are not supported.

### 15. SOVD 支持
*原文标题：SOVD support*

For ASAM SOVD 1.0 (2022-07)  the following limitations apply:

* The SOVD entities area, app and function are not supported.
* Custom SOVD modes are not supported. Only standardized SOVD modes communication_control (section 7.6.3.5.7) and control_dtc_settings (section 7.6.3.5.8) are supported
* For executions of SOVD operations custom capabilities are not supported.
* For SOVD operations, the attribute modes is not supported.
* SOVD locks cannot be acquired on SOVD component (Machine) level. Acquiring SOVD locks is only possible on SOVD sub-component (SoftwareCluster) level.
* The SOVD attribute symptom of a SOVD fault is not supported.
* The serialization of SOVD data, with DiagnosticSovdProps.singleElementSerialization set to plain is not supported.

For ASAM SOVD 1.1 (2026-01)  / ISO 17978-3:2026  the following limitations apply:

* The SOVD API based on version 1.1 / ISO 17978-3:2026 is not yet (fully) supported.
* Bugfixes between SOVD 1.0 and 1.1 have been introduced to this document, based on the ISO 17978-3 (DIS/FDIS) document.
* Changes in SOVD 1.1, which have been done to comply to ISO guidelines, will be introduced after official release of the ISO 17978-3, e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 通用
*原文标题：General*

Software Cluster / Diagnostic Service Instances:

* Software Cluster/Diagnostic Server instances are supported by DM interfaces but are not specified in detail.

### 17. AP stabilization

Thread-safety for some APIs is not defined.

### 18. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 19. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| No provided interfaces | < | < |

### 20. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

Figures ,  show the interfaces required by Diagnostic Management from other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of required interfaces from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Cryptography | CryptoStack | This interface may be used e.g., to access keys for secure diagnostics. |
| Execution Management | ExecutionClient | This interface is used to report the status of the Diagnostic Management daemon process(es). |
| Intrusion Detection System Manager | EventReporter | Diagnostic Management uses this interface to report standardized security events. |
| Log and Trace | Logger | Diagnostic Management shall use this interface to log standardized messages. |
| Persistency | FileStorage | Used to store associated data of diagnostic trouble codes (e.g., freeze frames). |
| Persistency | KeyValueStorage | Used to store properties of diagnostic trouble codes and diagnostic sessions. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in Diagnostics  and the AUTOSAR RS General , and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Compatibility with the ISO 14882 C++ standard |  |  |
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Enumerator and constant names |  |  |
| Usage of ara::core types |  |  |
| Error reporting |  |  |
| noexcept behavior of class destructors |  |  |
| Connecting run-time interface with model |  |  |
| Return type of asynchronous function calls |  |  |
| Return type of synchronous function calls |  |  |
| Handling of unsuccessful operations |  |  |
| Availability of special member functions |  |  |
| Classes whose construction requires interaction by the ARA framework |  |  |
| Classes that are created with an InstanceSpecifier as an argument are not copyable, but at most movable. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 功能规范
*原文标题：Functional specification*

The functionality of DM is split into two layers: the UDS Transport Layer and the Application Layer.

On the UDS Transport Layer, the DM handles connections with the Diagnostic Client(s) via a standardized or user defined UDS Transport Protocol, see section  for details. The sub-component of the DM, implementing a particular Transport Protocol is called a Transport Protocol Handler.

Besides the UDS Transport Layer, also communication via SOVD according to  is supported. The SOVD Transport Layer is covered in section .

On the Application Layer, the DM implements the two main building blocks of diagnostics: Diagnostic Event Management and Diagnostic Communication Management, both according to UDS ISO 14229-1 and SOVD.

On AUTOSAR adaptive platform, the Application Layer can be split into multiple SoftwareClusters, each with its own diagnostic address. Accordingly, the DM instantiates for each SoftwareCluster a Diagnostic Server that implements diagnostics with the scope given by this SoftwareCluster, see section . In the context of SOVD, the diagnostic address corresponds to a SOVD sub-component, see section .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. UDS 传输 Layer
*原文标题：UDS Transport Layer*

Since there exist standardized as well as OEM-specific UDS Transport Layers, the DM supports a standardized C++ API (called Transport Protocol API), where different kinds of UDS Transport Layers can be connected. Currently the Adaptive Platform only provides a detailed description of Ethernet-based network technologies, which mandates support of DoIP . It is very likely, that upcoming releases of the DM will also detail CAN, CAN-FD, FR, ... networks. The Transport Protocol API allows for extensions of DM towards not-yet-detailed and proprietary UDS Transport Protocols.

The UDS Transport Protocol (TP) implementation can optionally provide the so far received UDS message content in payloadInfo. It is up to the TP implementation to decide how much of the so far received data is provided. It is recommended to provide at least the first two bytes of the received message. The DM is then able to detect a functional received tester present (UDS bypass logic) and accept this message, even the DM is currently processing a physical request.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. UDS 传输 Layer的支持
*原文标题：Support of UDS Transport Layer*

The UDS Transport Protocol API is formally described in section . This section describes the required interaction of the components using this API. Each (proprietary) UDS Transport Protocol implementation subclasses the abstract class apext::diag::uds_transport::UdsTransportProtocolHandler, which shall be provided by DM according to .

### 25. 初始化, Starting and Stopping of a UDS TransportLayer
*原文标题：Initialization, Starting and Stopping of a UDS TransportLayer*

Lifecycle management of an UDS Transport Protocol implementation
  Upstream requirements:
⌈
The lifecycle of an UDS Transport Protocol implementation shall be managed by the DM in the following order:

* Creation of the UDS Transport Protocol implementation by calling its constructor apext::diag::uds_transport::UdsTransportProtocolHandler::UdsTransportProtocolHandler.
* Initializing of the UDS Transport Protocol implementation by calling apext::diag::uds_transport::UdsTransportProtocolHandler::Initialize.
* Starting of the UDS Transport Protocol implementation by calling apext::diag::uds_transport::UdsTransportProtocolHandler::Start.
* Stopping of the UDS Transport Protocol implementation by calling apext::diag::uds_transport::UdsTransportProtocolHandler::Stop.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. UDS message reception on a UDS TransportLayer

Channel identification in Indication
  Upstream requirements:
⌈
UDS Transport Protocol implementation shall determine a distinct identifier to identify the network specific channel over which the UDS request has been received, which can be later used to deliver the UDS response to the source of the UDS request.
⌋

Note: A diagnostic client has basically two address parts which together serve for its unique identification:

* The UDS source address (SA) in the clients/testers request which represent a technology/transport layer independent part.
* The technology/transport layer specific/dependent network endpoint source address, from which the request from the client originates. In Ethernet-based networks this typically is an IP-address/port number pair, while in CAN networks it is the CAN identifier of the CAN-TP message used by the client. In UDS on CAN (ISO ISO-15765-2) contrary to DoIP, the SA is not explicitly transmitted, but directly deduced from the CAN identifier of the CAN-TP message. That means on CAN we do not have two separate address parts, only the network endpoint source address part is used for identification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. UDS message transmission on a UDS TransportLayer

Transmission of UDS response message
  Upstream requirements:
⌈
DM shall send a diagnostic response UDS message to the same UDS Transport Protocol implementation, where it has received the UDS request message (see ) by calling the apext::diag::uds_transport::UdsTransportProtocolHandler::Transmit method of the UDS Transport Protocol implementation.
⌋

 Reuse channel identifier of Indication
  Upstream requirements:
⌈
DM shall set the argument channelId in the apext::diag::uds_transport::UdsTransportProtocolHandler::Transmit call to the same value as in the Indication of the corresponding UDS request message (see ).
⌋

 Confirmation of UDS message transmission
  Upstream requirements:
⌈
When the UDS Transport Protocol implementation has a final feedback of the network layer, whether the UDS message triggered for transmission (see ) could be sent on the network or not, it shall notify DM by calling apext::diag::uds_transport::UdsTransportProtocolMgr::TransmitConfirmation (see ) setting the message argument to the message parameter of the apext::diag::uds_transport::UdsTransportProtocolHandler::Transmit call ().
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Channel 通知
*原文标题：Channel Notifications*

Each incoming UDS request message is assigned an exact UDS Transport Protocol implementation specific Channel. With the normal request/reply paradigm in diagnostics, the UDS response message is sent out at the same Channel, from which the UDS request has been received. Therefore the Channel identifier is given to the DM in apext::diag::uds_transport::UdsTransportProtocolMgr::IndicateMessage in the form of parameter globalChannelId. The Channel part from this parameter is then used in the corresponding response in apext::diag::uds_transport::UdsTransportProtocolHandler::Transmit.

There are use cases, where a diagnostic request might be answered deferred after the restart of the DM. The UDS service for ECU reset is a candidate for such a requirement. The upcoming requirements shall cover this use case.

 Requesting Notification of a channel reestablishment
  Upstream requirements:
⌈
The DM shall call the apext::diag::uds_transport::UdsTransportProtocolHandler::NotifyReestablishment method of a UDS Transport Protocol implementation, with the parameter channelId set to the identifier of the Channel, where it needs a re-establishment notification.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. DoIP

DoIP is the technical term for the standardized (offboard-) communication within modern vehicle networks. It means "Diagnostics on IP" and covers todays fast high-speed diagnostic access into the vehicle.

### 30. 简介 & Use-Cases of DoIP
*原文标题：Introduction & Use-Cases of DoIP*

The Diagnostic Management has a built-in support for Diagnostic communication over IP (DoIP) based on ISO 13400-2. It allows the configuration of one or multiple DoIP instances within a system by the DoIpInstantiation. Technically, this allows the separation of different diagnostic communication domains, for example to isolate internal and external testers. Such separation can be achieved by assigning the respective DoIP instances to distinct network segments, e.g., through the use of VLANs. This architectural approach enhances security and robustness by preventing unintended access between different diagnostic environments, while maintaining flexible communication capabilities. The PlatformModuleEthernetEndpointConfiguration is used to point from a DoIpInstantiation to the concrete ethernet connector in the system.

 Support of DoIP based on ISO 13400-2
  Upstream requirements: , , , , , ,
⌈
If DoIpInstantiation.DoIpGid is configured for a machine, the DM shall support DoIP based on the configured DoIpFunctionalClusterDesign.doIpProtocolVersion. For this configuration

* a value of 2 shall use ISO 13400-2:2012.
* a value of 3 shall use ISO 13400-2:2019.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Supported DoIpInstantiation Use Cases

Use Case 1: Standard Deployment (1:1:1 Mapping)

In the standard deployment scenario, a one-to-one-to-one (1:1:1) relationship exists between the Ethernet interface, the DoIP instance, and the Diagnostic Manager (DM). Each Ethernet interface is associated with exactly one DoIP instance, which in turn is connected to a single Diagnostic Manager. The Diagnostic Manager distributes diagnostic requests to the corresponding diagnostic applications within the system. This configuration represents the typical and recommended setup for straightforward deployments, ensuring clear separation of communication paths and minimal system complexity. The logical address of the DoIP server equals the physical request TA of the UDS server DM instance.

Use Case 2: Virtualized Deployment (n:n:n Mapping)

In a virtualized environment, a many-to-many-to-many (n:n:n) relationship can be established between (virtual) Ethernet interfaces, DoIP instances, and Diagnostic Managers. A single physical Ethernet interface is abstracted by a hypervisor layer into multiple virtual Ethernet interfaces. Each virtual interface is assigned to a dedicated DoIP instance and a corresponding Diagnostic Manager.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. DoIP Payload 类型 & Default Values
*原文标题：DoIP Payload Types & Default Values*

ISO 13400-2 defines a set of payload types that are used for Diagnostic Communication over IP (DoIP). These payload types cover the essential communication mechanisms required for connection management, diagnostic message transport, and error handling.

AUTOSAR supports the majority of these payload types in order to ensure compliant and efficient DoIP communication. The supported payload types enable the DoIP functionality as specified and provide the basis for interoperability between diagnostic testers and ECUs.

### 33. DoIP Payload 类型
*原文标题：DoIP Payload Types*

Supported DoIP message types
  Upstream requirements: , , , , ,
⌈
The DM shall support the DoIP message types listed in Table .
⌋

 supportedDoIpMessageTypes
  Upstream requirements: , , , , ,
⌈
| Payload type value | Payload type name |
|---|---|
| 0x0000 | Generic DoIP header negative acknowledge |
| 0x0001 | Vehicle identification request message |
| 0x0002 | Vehicle identification request message with EID |
| 0x0003 | Vehicle identification request message with VIN |
| 0x0004 | Vehicle announcement message/vehicle identification response message |
| 0x0005 | Routing activation request |
| 0x0006 | Routing activation response |
| 0x0007 | Alive check request |
| 0x0008 | Alive check response |
| 0x4001 | DoIP entity status request |
| 0x4002 | DoIP entity status response |
| 0x4003 | Diagnostic power mode information request |
| 0x4004 | Diagnostic power mode information response |
| 0x8001 | Diagnostic message |
| 0x8002 | Diagnostic message positive acknowledgement |
| 0x8003 | Diagnostic message negative acknowledgement |
| 0x8004 | Periodic diagnostic message (introduced with ISO 13400-2:2019/Amd 1:2023) |

⌋

### 34. DoIP Default Values

Default value for DoIpNetworkConfiguration.DoIpTcpInitialInactivityTime
  Upstream requirements:
⌈
If the attribute DoIpNetworkConfiguration.DoIpTcpInitialInactivityTime is not configured, the DM shall use a value of 2 seconds.
⌋

 Default value for DoIpNetworkConfiguration.DoIpTcpGeneralInactivityTime
  Upstream requirements:
⌈
If the attribute DoIpNetworkConfiguration.DoIpTcpGeneralInactivityTime is not configured, the DM shall use a value of 300 seconds.
⌋

 Default value for DoIpNetworkConfiguration.DoIpVehicleAnnouncementCount
  Upstream requirements:
⌈
If the attribute DoIpNetworkConfiguration.DoIpVehicleAnnouncementCount is not configured, the DM shall use a value of 3.
⌋

 Default value for DoIpNetworkConfiguration.DoIpVehicleAnnouncementInterval
  Upstream requirements:
⌈
If the attribute DoIpNetworkConfiguration.DoIpVehicleAnnouncementInterval is not configured, the DM shall use a value of 0.5 seconds.
⌋

 Default value for DoIpNetworkConfiguration.DoIpTcpAliveCheckResponseTimeout
  Upstream requirements:
⌈
If the attribute DoIpNetworkConfiguration.DoIpTcpAliveCheckResponseTimeout is not configured, the DM shall use a value of 0.5 seconds.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. DoIP Payload 类型：Generic DoIP Header Negative Acknowledge
*原文标题：DoIP Payload Types: Generic DoIP Header Negative Acknowledge*

DoIP sending Diagnostic Message Negative Ack 0x03
  Upstream requirements:
⌈
The DoIP instance shall return NACK 0x03 in case, a diagnostic message (see ) is received with:

* TA of the received message is not member of any DoIpFunctionalClusterDesign.requestConfigurationDesign (interval between )
* TA is not reachable at runtime, which means that a configured TA in SoftwareClusterUdsDiagnosticAddress.diagnosticAddress or DoIpRequestConfigurationDesign is configured but not available at runtime. The detection of this situation is vendor specific.
⌋

### 36. DoIP Payload 类型：Vehicle Identification Request / Vehicle Announcement Message
*原文标题：DoIP Payload Types: Vehicle Identification Request / Vehicle Announcement Message*

Providing the VIN in DoIP protocol messages
  Upstream requirements:
⌈
DM shall retrieve the VIN required in some DoIP messages by reading the data from the DID with DiagnosticDataIdentifier.representsVin set to TRUE.
⌋

 Providing VIN, if interface is not available
  Upstream requirements:
⌈
If the DM fails to retrieve the VIN according to , then the DM shall return the VIN with value "0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF 0xFF".
⌋

 Providing EID in DoIP protocol messages using Application Interface
  Upstream requirements:
⌈
If DoIpNetworkConfiguration.DoIpEidRetrieval is configured with `EID_USE_API`, the DM shall obtain the EID by calling the method DoIPEntityIdentification::GetEntityId.
⌋

 DoIPEntityIdentification not yet offered when DM needs to retrieve EID from Application
  Upstream requirements:
⌈
If the DM fails to retrieve the EID according to , the DM shall send the 6-byte EID value equal to "0xFF 0xFF 0xFF 0xFF 0xFF 0xFF".
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. DoIP Payload 类型：Routing Activation & Alive Check
*原文标题：DoIP Payload Types: Routing Activation & Alive Check*

For further information on the handling of Routing Activation, as well as of the Alive Check, consult ISO 13400-2 specification.

### 38. DoIP Payload 类型：Entity Status & Power 模式 Information Request
*原文标题：DoIP Payload Types: Entity Status & Power Mode Information Request*

Providing the PowerMode in DoIP protocol messages
  Upstream requirements: ,
⌈
If the DM needs to know the PowerMode to be able to react or answer on any DoIP message, it shall obtain it, by calling the method DoIPPowerMode::GetDoIPPowerMode.
⌋

 DoIPPowerMode not yet offered when client requests DoIP PowerMode
  Upstream requirements:
⌈
If a client sends the Diagnostic power mode information request-message (payload type = 0x4003), the DM shall send a Diagnostic power mode information response-message (payload type = 0x4004) with power mode value set to 0 ("Not ready"), as long as the Offer-function of the DoIPPowerMode-interface is not yet called by the AA, that provides the power mode-value (as defined in the ISO 13400-2 specification).
⌋

### 39. DoIP Payload 类型：(UDS) 诊断 Message
*原文标题：DoIP Payload Types: (UDS) Diagnostic Message*

Diagnostic Messages with the Payload Type set to 0x8001, 0x8002, 0x8003 and 0x8004 are handled with the DoIP daemon and the DM and are the main L5-L7 diagnostic messages. See chapter xxx for further information.

### 40. DoIP Payload 类型：Custom Payload (as of ISO 13400-2：2025)
*原文标题：DoIP Payload Types: Custom Payload (as of ISO 13400-2:2025)*

Will be introduced by AR-129633.

### 41. DoIP 传输 Layer Security (TLS)
*原文标题：DoIP Transport Layer Security (TLS)*

Secure Communication for DoIP using TLS
  Upstream requirements:
⌈
If TLSCertificateAvailabilityBehavior is set to alwaysEnforceTLSConnection or is not configured or a valid TLS certificate is present, the Diagnostic Server instance shall secure all DoIP connections of a DoIpNetworkConfiguration, using TLS according ISO 13400-2 considering the configuration referenced by DoIpNetworkConfigurationDesign.networkConfiguration.secureComPropsForTcp.
⌋

During ECU- or vehicle production, the new build or shipped ECU may not be equipped with a TLS certificate and diagnostics is used to upload the necessary certificates for TLS communication.

For this use case, the DM allows an optional fallback to an unsecured DoIP communication, until a valid certificate is present.

 Fallback to unsecured TLS connection
  Upstream requirements:
⌈
If TLSCertificateAvailabilityBehavior is set to fallbackToNonTLSConnection and no valid TLS certificate is present, the Diagnostic Server instance shall use an unsecured DoIP connection according to according ISO 13400-2 for that DoIpNetworkConfigurationDesign.
⌋

### 其余 307 章（内容从略，见纯文本全文）

42. Further DoIP 传输 Layer related 需求
43. Dispatching of UDS Requests
44. SOVD 传输 Layer
45. 诊断 Server
46. Interaction between DM and applications
47. MetaInfo class
48. Provision of MetaInfo
49. Lifetime of MetaInfo
50. Concurrency of ara：：diag 接口
51. Caching of application calls
52. 诊断 Communication 管理
53. 诊断 Conversations
54. 诊断 Conversation 服务接口
55. Cancellation of a 诊断 Conversation
56. Life-cycle of a 诊断 Conversation
57. 多 Client 处理
58. Assignment of UDS requests to 诊断 Conversations
59. Prioritization of 诊断 Conversations
60. Replacement of 诊断 Conversations and initial values
61. Refusal of incoming 诊断 request
62. 处理 Authentication 状态 and DynamicAccessLists
63. ExternalAuthentication
64. ClientAuthentication
65. ClientAuthenticationHandle
66. DynamicAccessList Creation and Update
67. 诊断服务 Authentication checks
68. UDS request 校验/Verification
69. UDS request format checks
70. Supported 服务 checks
71. Session and Security Checks
72. Manufacturer and Supplier Permission Checks and Confirmation
73. Condition checks
74. UDS response 处理
75. NRCs created by application
76. Keep track of active non-default sessions
77. UDS 服务 processing
78. Supported UDS 服务
79. Common 服务 processing items
80. UDS 服务 serialization
81. 服务 0x10 - DiagnosticSessionControl
82. 服务 0x11 - ECUReset
83. 服务 0x11 - ECUReset - RapidPowerShutdown sub 功能
84. 服务 0x11 - ECUReset - all other sub functions
85. 服务 0x14 - ClearDiagnosticInformation
86. Clearing user-defined fault 存储
87. 服务 0x19 - ReadDTCInformation
88. SF 0x01 - reportNumberOfDTCByStatusMask
89. SF 0x02 - reportDTCByStatusMask
90. SF 0x03 - reportDTCSnapshotIdentification
91. SF 0x04 - reportDTCSnapshotRecordByDTCNumber
92. SF 0x06 - reportDTCExtDataRecordByDTCNumber
93. SF 0x07 - reportNumberOfDTCBySeverityMaskRecord
94. SF 0x0A - reportSupportedDTC
95. SF 0x14 - reportDTCFaultDetectionCounter
96. SF 0x17 - reportUserDefMemoryDTCByStatusMask
97. SF 0x18 - reportUserDefMemoryDTCSnapshotRecordByDTCNumber
98. SF 0x19 - reportUserDefMemoryDTCExtDataRecordByDTCNumber
99. 服务 0x22 - ReadDataByIdentifier
100. 服务 0x27 - SecurityAccess
101. 服务 0x28 - CommunicationControl
102. 服务 0x29 - Authentication
103. 服务 0x29 - deAuthenticate (0x00)
104. 服务 0x29 - verifyCertificateUnidirectional (0x01)
105. 服务 0x29 - verifyCertificateBidirectional (0x02)
106. 服务 0x29 - proofOfOwnership (0x03)
107. 服务 0x29 - transmitCertificate (0x04)
108. 服务 0x29 - authenticationConfiguration (0x08)
109. 服务 0x2A - ReadDataByPeriodicIdentifier
110. 服务 0x2C - DynamicallyDefineDataIdentifier
111. 服务 0x2E - WriteDataByIdentifier
112. 服务 0x31 - RoutineControl
113. 服务 0x34 - RequestDownload
114. 服务 0x35 - RequestUpload
115. 服务 0x36 - TransferData
116. 服务 0x37 - RequestTransferExit
117. 服务 0x38 - RequestFileTransfer
118. 服务 0x3E - TesterPresent
119. 服务 0x85 - ControlDTCSetting
120. 服务 0x86 - ResponseOnEvent
121. Custom 诊断服务
122. 诊断 SOVD 管理
123. SOVD Conversations and UDS Interplay
124. SOVD Request 校验 and Verification
125. SOVD - Authorization
126. SOVD - Locks
127. SOVD - 校验 of Environmental Conditions
128. SOVD - 服务校验 of Requests
129. SOVD 数据 Serialization & 数据 Conversion
130. SOVD 数据 - Serialization
131. SOVD 数据 - Conversion
132. Standardized SOVD APIs
133. SOVD resource docs
134. SOVD resource version-info
135. SOVD data-categories
136. SOVD data-groups
137. SOVD method Query entity 数据
138. SOVD method Locks
139. SOVD method Logging
140. Configurable SOVD APIs
141. SOVD API - 数据 Access
142. SOVD API - 配置
143. 配置 - Explicit Configurations
144. SOVD API - 数据 Lists
145. SOVD API - Faults
146. Faults - 通用
147. Faults - Methods
148. SOVD API - Operations
149. Operations - Query for operations from an Entity
150. Operations - Query for executions of an operation
151. Operations - Proximity 管理
152. Operations - Retrieve details of an operation
153. Operations - Start execution of an operation
154. Operations - Terminate execution of an operation
155. Operations - Read the status of an operation execution
156. SOVD API - Modes
157. Modes - CommunicationControl
158. Modes - ControlDTCSetting
159. SOVD API - Bulk 数据
160. SOVD API - 软件 Update
161. 诊断 Event 管理
162. 诊断 Events
163. Event 定义
164. Monitors
165. Event Combination
166. Combination On Storage
167. Combination On Retrieval
168. EnableConditions
169. Debouncing
170. Counter-based debouncing
171. Time-based debouncing
172. Monitor-internal debouncing
173. Debounce algorithm reset
174. Dependencies to enable conditions
175. Dependencies to UDS 服务 0x85 ControlDTCSettings
176. Event Status processing
177. Event status change 通知
178. Event occurrence
179. Condition Mangement
180. Operation Cycles 管理
181. Event 存储
182. DTC 简介
183. Format
184. Groups
185. Priority
186. UDS DTC Status
187. Status processing
188. UDS DTC Status change 通知
189. Indicators
190. User controlled WarningIndicatorRequest-bit
191. Destination
192. DTC related 数据
193. Triggering for 数据 storage
194. Storage of snapshot record 数据
195. Storage of extended 数据
196. Internal statistical 数据 elements in EDRs
197. Clearing DTCs
198. Locking of the DTC clearing process by a client
199. ClearConditions
200. DTC clearing triggered by application
201. Aging
202. NumberOfStoredEntries
203. Active / Passive Status of Events
204. Event 存储 overflow
205. Event 存储 entry displacement
206. Reporting order of event 存储 entries
207. Required 配置
208. 诊断数据管理
209. Internal and External 诊断数据 Elements
210. Reading and Writing 诊断数据 Identifier
211. Supported 诊断 Mappings
212. Reading 诊断数据 Identifier
213. Writing 诊断数据 Identifier
214. 功能性 cluster life-cycle
215. 启动
216. 系统关机行为 and ara：：diag Interaction
217. Daemon crash
218. Reporting
219. 安全事件
220. Log Messages
221. Violation Messages
222. Production 错误
223. Access 控制
224. API 规范
225. PortInterface to API class binding
226. 诊断 related APIs
227. UDS-related APIs
228. 通用 UDS 诊断 Manager-related APIs
229. Header：ara/diag/cancellation_handler.h
230. Header：ara/diag/concurrency.h
231. Header：ara/diag/conversation.h
232. Header：ara/diag/diag_error_domain.h
233. Header：ara/diag/diag_uds_nrc_error_domain.h
234. Header：ara/diag/generic_uds_service.h
235. Header：ara/diag/meta_info.h
236. Header：ara/diag/release_handler.h
237. Header：ara/diag/service_validation.h
238. 诊断 and Communication Management-related APIs
239. Header：ara/diag/ecu_reset_request.h
240. Header：ara/diag/security_access.h
241. Header：ara/diag/communication_control.h
242. Header：ara/diag/authentication.h
243. Header：ara/diag/client_authentication.h
244. Header：ara/diag/client_authentication_handle.h
245. Header：ara/diag/external_authentication.h
246. Header：ara/diag/transmit_certificate.h
247. 数据 Transmission Management-related APIs
248. Header：ara/diag/generic_data_identifier.h
249. Header：{<data-element-directory-path>}/{<data-element-shortname-lower>}.h
250. Header：{<data-identifier-directory-path>}/{<data-identifier-shortname-lower>}.h
251. Header：ara/diag/dynamic_access_list_diag_service_builder.h
252. Header：ara/diag/diagnostic_service_dynamic_access_list.h
253. Stored 数据 Transmission Management-related APIs
254. Header：ara/diag/condition.h
255. Header：ara/diag/operation_cycle.h
256. Header：ara/diag/monitor.h
257. Header：ara/diag/monitor_types.h
258. Header：ara/diag/multiple_condition.h
259. Header：ara/diag/multiple_event.h
260. Header：ara/diag/multiple_monitor.h
261. Header：ara/diag/indicator.h
262. Header：ara/diag/event.h
263. Header：ara/diag/event_types.h
264. Header：ara/diag/dtc_information.h
265. Header：{<extended-data-record-element-shortname-lower>}.h
266. InputOutput 控制 Management-related APIs
267. Routine 控制 Management-related APIs
268. Header：ara/diag/generic_routine.h
269. Header：{<routine-interface-directory-path>}/{<routine-interface-shortname-lower>}.h
270. Upload Download Management-related APIs
271. Header：ara/diag/download.h
272. Header：ara/diag/upload.h
273. Header：ara/diag/data_transfer.h
274. Header：ara/diag/file_transfer.h
275. 诊断 DoIP-related APIs
276. 通用 DoIP-related APIs
277. Header：ara/diag/doip_activationline.h
278. Header：ara/diag/doip_entity_identification.h
279. Header：ara/diag/doip_group_identification.h
280. Header：ara/diag/doip_power_mode.h
281. Header：ara/diag/doip_trigger_vehicle_announcement.h
282. 诊断 SOVD-related APIs
283. 通用 SOVD 诊断 Manager-related APIs
284. Header：ara/diag/diag_sovd_error_domain.h
285. Further SOVD-related APIs
286. Header：ara/diag/sovd_authorization.h
287. Header：ara/diag/sovd_bulk_data.h
288. Header：ara/diag/sovd_configuration.h
289. Header：ara/diag/sovd_http_redirect.h
290. Header：ara/diag/sovd_proximity_challenge.h
291. Header：ara/diag/sovd_service_validation.h
292. Header：ara/diag/sovd_sw_update.h
293. Header：ara/diag/diagnostic_sovd_content_data.h
294. Header：ara/diag/diagnostic_sovd_content_element_data.h
295. Header：ara/diag/generic_diagnostic_sovd_content.h
296. Header：ara/diag/generic_diagnostic_sovd_operation.h
297. 服务接口
298. 配置
299. Containers and 配置 parameters
300. 服务校验
301. 诊断
302. SoftwareClusterDiagnosticPropsCollection
303. SoftwareClusterDiagnosticProps
304. ServiceValidationConfig
305. ManufacturerValidationOrderCollection
306. SovdValidationOrderCollection
307. SupplierValidationOrderCollection
308. SOVD 网络配置
309. SovdNodeConfiguration
310. SovdNodeKindConfiguration
311. SovdGatewayConfiguration
312. SovdServerConfiguration
313. CommunicationConnectorCollection
314. DoIP 配置
315. DoIpInstantiation
316. DoIpNetworkConfigurationCollection
317. DoIpNetworkConfiguration
318. DoIpRequestConfigurationCollection
319. DoIpRequestConfiguration
320. Correspondence Table
321. Default Values
322. Semantic Constraints
323. 附录
324. Mentioned 清单 Elements
325. Demands and constraints on Base 软件 (normative)
326. Platform Extension 接口 (normative)
327. 诊断传输 Protocol-related APIs (UDS)
328. Header：apext/diag/uds_transport/protocol_handler.h
329. Header：apext/diag/uds_transport/protocol_mgr.h
330. Header：apext/diag/uds_transport/protocol_periodic_handler.h
331. Header：apext/diag/uds_transport/protocol_types.h
332. Header：apext/diag/uds_transport/uds_message.h
333. Sequence Diagrams of UDS 传输 Layer Interaction
334. Lifecycle
335. UDS Request Processing
336. UDS Response Transmission
337. Channel Reestablishment
338. 诊断传输 Protocol-related APIs (SOVD)
339. Not implemented 需求
340. 不适用需求
341. History of Constraints and 规范 Items
342. Constraint and 规范 Item History of this document according to AUTOSAR Release R26-11
343. Added 规范 Items in R26-11
344. Changed 规范 Items in R26-11
345. Deleted 规范 Items in R26-11
346. Added Constraints in R26-11
347. Changed Constraints in R26-11
348. Deleted Constraints in R26-11
