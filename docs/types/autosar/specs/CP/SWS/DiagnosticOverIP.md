# Specification of Diagnostic over IP (`DiagnosticOverIP`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 418 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticOverIP_418\AUTOSAR_CP_SWS_DiagnosticOverIP.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticOverIP_418\AUTOSAR_CP_SWS_DiagnosticOverIP.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticOverIP_418\zzgen\CP_SWS_DiagnosticOverIP.complete.txt`

## 文档简介

The intent of this document is to specify the functionality, API and the configuration of the AUTOSAR Basic Software module Diagnostic over IP (DoIP).

For detailed introduction and information about DoIP please refer to ISO 13400 documents set.

AUTOSAR as SW standard can provide a standardized solution of the ISO DoIP specification in the already existing Ethernet architecture as depict in .

## 模块依赖

This section describes the relations and dependencies between the DoIP module and other AUTOSAR Basic Software modules. It describes briefly the services and interfaces required from other modules and how they call the DoIP module and how they are called by the DoIP module.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The intent of this document is to specify the functionality, API and the configuration of the AUTOSAR Basic Software module Diagnostic over IP (DoIP).

For detailed introduction and information about DoIP please refer to ISO 13400 documents set.

AUTOSAR as SW standard can provide a standardized solution of the ISO DoIP specification in the already existing Ethernet architecture as depict in .

### 2. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| ARP | Address Resolution Protocol |
| DHCP | Diagnostic Host Configuration Protocol |
| EID | Entity identifier |
| GID | Group identifier |
| ICMP | Internet Control Message Protocol |
| IP | Internet Protocol |
| IPv4 | Internet Protocol version 4 |
| IPv6 | Internet Protocol version 6 |
| TCP | Transmission Control Protocol |
| TCP/IP | A family of communication protocols used in computer networks |
| VIN | Vehicle Identification Number |
| UDP | User Datagram Protocol |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. Related standards and norms

No content.

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules  (SWS BSW General), which is also valid for the DoIP module.

Thus, the specification SWS BSW General  shall be considered as additional and required specification for the DoIP module.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

The DoIP basic software module may be used for all car domains.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section describes the relations and dependencies between the DoIP module and other AUTOSAR Basic Software modules. It describes briefly the services and interfaces required from other modules and how they call the DoIP module and how they are called by the DoIP module.

### 10. Socket Adaptor (SoAd)

The Socket Adaptor  is the lower layer module of the DoIP module. It provides:

* Interfaces and callbacks for Socket connection establishment and notification
* Transmission of Data via multiple socket connection
* Reception of Data via multiple socket connection
* Notification on Socket status changes
* Notification on IP Address status changes

The Socket Adaptor is the interfacing module for the TCP/IP Stack  that supports IP, TCP, UDP,IPv4, IPv6 and address assignment mechanisms like AutoIP and DHCP.

### 11. Pdu Router (PduR)

The Pdu Router  is the module used by the DoIP module to connect to the rest of the communication stack. It provides:

* Forward diagnostic messages from the DoIP module to other modules (i.e. internal Dcm or other TP module)
* Forward diagnostic messages from Dcm or other TP modules to the DoIP module.

The PduR is the module to route the diagnostic message from the DoIP module to their according destination and back.

### 12. 诊断 Communication 管理器 (Dcm)
*原文标题：Diagnostic Communication Manager (Dcm)*

The Diagnostic Communication Manager  is the module providing the VIN to the DoIP module. Additionally the Dcm will execute the ECU local diagnostic routed via PduR.

### 13. Default 错误 Tracer (Det)
*原文标题：Default Error Tracer (Det)*

If the configuration parameter DoIPDevelopmentErrorDetect is set to true and a DoIP API is called with incorrect parameters, the Default Error Tracer  is called with an error ID.

### 14. 文件结构
*原文标题：File structure*

### 15. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 16. 需求追踪
*原文标题：Requirements Tracing*

| Requirement | Description | Satisfied by |
|---|---|---|
| DoIP messages shall be bi-directionally routed |  |  |
| Valid DoIP messages shall be recognized |  |  |
| DoIP Vehicle Identification shall be provided |  |  |
| DoIP diagnostic message shall have a format |  |  |
| Multiple DoIP sockets shall be allowed on a single port |  |  |
| DoIP shall be able to access the DHCP host name option. |  |  |
| DoIP shall implement a mechanism to retrieve diagnostic power mode |  |  |
| DoIP shall be able to dynamically maintain connection to different testers |  |  |
| DoIP shall implement a mechanism to retrieve Entity Status |  |  |
| DoIP shall implement a mechanism to check if diagnostic testers are alive |  |  |
| DoIP shall implement routing activation mechanism |  |  |
| Basic SW security events |  |  |
| No description |  |  |
| No description |  |  |

### 17. 功能规范
*原文标题：Functional specification*

This specification provides the AUTOSAR representation of ISO 13400-2 as specified in the following chapters.

### 18. DoIP usage scenarios

This chapter gives only a brief overview of some use cases. For detailed information about DoIP usage scenarios please refer to ISO 13400-1.

The use cases for usage of DoIP differ from the single connection of external test equipment (see ) to a brought interconnectivity of the car or single ECUs with the environment (see ).

The DoIP is using for this interaction a protocol that executes several services within the single DoIP entities to fulfil the service related requirements of the DoIP ISO 13400 :

Some of the DoIP services are exemplarily:

* Vehicle identification and announcement: Is necessary to detect who is participating in the DoIP communication
* Routing Activation: Allows that single Diagnostic Message pathes are activated or not to treat different protocols different (like UDS and OBD) and to also treat single testers different
* Node information: Provides general information of the single DoIP entity. Usually used by the testers to get the current DoIP protocol relevant information from the single DoIPEntities
* Alive mechanism: Is used to maintain different tester connections

### 19. DoIP Internal Tester Functionality Extension (DRAFT)

Note: Related to `CONC_649` DoIP Extension. Everything that is implemented in this section is in DRAFT state.

This usecase covers the possibility of in vehicle DoIP communication. The tester(s) can also reside within the vehicle network.

The requirement to be able to communicate with EXTERNAL and INTERNAL test equipment via DoIP can be generalized as:

An ECU/DoIP node might be "multi-homed". I.e. it can have multiple logical IP interfaces (maybe sharing the same physical Ethernet interface/MAC address).

In this case, the ECU shall be able to "communicate" on each of its IP interfaces via DoIP independently. I.e. DoIP functionalities on each IP interface have to be isolated from each other. That f.i. means that:

- An "Activation-Line-Low" trigger is something restricted to a certain IP interface. So not ALL DoIP connections on ALL interfaces are closed down then, but just the one aggregated to the IP interface for which an "Activation-Line-Low" happened. (so each interface has its own logical activation line)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Connection establishment

This chapter describes the maintenance of the socket connections of the DoIP module

  Upstream requirements: ,
⌈
The DoIP module shall determine the DoIP Activation Line status by the calls to `DoIP_ActivationLineSwitch` (uint8 InterfaceId, boolean *Active) based on the value of the boolean parameter Active per DoIPInterface with a given InterfaceId. The Activation Line status is considered "active", if the boolean value in the call is set to TRUE. The Activation Line status is considered "inactive", if the boolean value in the call is set to FALSE.
⌋

  Upstream requirements: ,
⌈
If data is received from SoAd or PduR (i.e. communication related interfaces are called) via PduIds related to a certain DoIPInterface configured with DoIPInterfaceActLineCtrl = TRUE, where the status of the Activation Line of this DoIPInterface is currently inactive, the DoIP module shall ignore all these requests and return a negative return value as return value.
⌋

Note: The return value depends on the API that is called. If it is `Std_ReturnType` it shall return E_NOT_OK, if it is `BufReq_ReturnType` it shall return `BUFREQ_NOT_OK`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. DoIP Message layout according ISO 13400-2

A DoIP message can be identified by its generic DoIP header structure, which is described in the chapter .

### 22. Generic DoIP header

All Pdus received or sent via the SoAd shall support the the DoIP header structure as defined in the ISO 13400-2  table 11. The DoIP header is described in this chapter.

  Upstream requirements:
⌈
The first 8 Bytes of a DoIP message shall contain the DoIP Header followed by the actual payload data.
⌋

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| Generic DoIP header synchronization pattern | < | < |
| Protocol version | 0 | 1 |
| Inverse protocol version | 1 | 1 |
| Generic DoIP payload type and payload length | < | < |
| Payload type | 2 | 2 |
| Payload length | 4 | 4 |
| Payload type specific message content | 8 | ... |

  Upstream requirements:
⌈
Byte 0 of the DoIP header shall contain the protocol version e.g. 0x02.
⌋

 Used DoIP protocol version
⌈
The DoIP module shall use the configured DoIPProtocolVersion  as DoIP protocol version in all generic headers of send DoIP messages.
⌋

  Upstream requirements:
⌈
The Byte 1 of the DoIP header shall contain the inverse protocol version e.g. 0xFD value shall be added if the protocol version is 0x02.
⌋

  Upstream requirements:
⌈
If config parameter `DoIP_ISO13400_2_2012` is enabled, the DoIP entity shall accept received frames with protocol version 0x02.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Payload 类型
*原文标题：Payload types*

This chapter describes the different Payload types in detail.

### 24. Generic acknowledge

This chapter contains the check of the DoIP header with the according negative acknowledge messages with payload type 0x0000 for an invalid DoIP header.

  Upstream requirements:
⌈
If an invalid DoIP header was received, a DoIP message with payload type 0x0000 shall be transmitted with the payload described in  on the TxPdu which is related to the RxPdu the message was received on, if the according SocketConnection status has not changed since the reception of the DoIP message
⌋

  Upstream requirements:
⌈
The payload of the generic DoIP header shall contain the corresponding NACK code (1 Byte) as specified from  to .
⌋

  Upstream requirements:
⌈
If the Protocol information is incorrect, (see , , , , and  for valid information) the NACK code 0x00 shall be sent and the according socket shall be closed (see ).
⌋

  Upstream requirements:
⌈
If a payload type is not supported (see  for valid payload types) the DoIP module shall send the NACK code 0x01 to indicate that an unknown payload type was requested. The message shall be discarded for further processing. For `TCP_DATA` socket connections, this NACK shall only be sent as response in the ISO 13400 connection state "Registered ".
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Vehicle Identification

Upstream requirements:
⌈
On a vehicle identification request the Protocol Type 0xFF and the inverse Protocol Type 0x00 shall be supported as default values, additionally to the ProtocolType described in  and .
⌋

### 26. Vehicle Identification request (payload 类型 0x0001)
*原文标题：Vehicle Identification request (payload type 0x0001)*

Upstream requirements:
⌈
When the module receives a DoIP message with payload type 0x0001 on a connection different than a configured DoIPUdpConnection, the module shall discard the DoIP message.
⌋

Note: This also means that it is not allowed to receive this payload type on a TCP connection.

  Upstream requirements:
⌈
The expected payload length (see ) for vehicle identification request message with payload type 0x0001 shall be exactly 0.
⌋

  Upstream requirements:
⌈
If a DoIP message with payload Type 0x0001 is received on the configured DoIPUdpConnection, the DoIP module shall respond with a vehicle identification response/vehicle announcement message after the configured DoIPInitialVehicleAnnouncementTime with payload type 0x0004.
⌋

### 27. Vehicle Identification request with EID (payload 类型 0x0002)
*原文标题：Vehicle Identification request with EID (payload type 0x0002)*

The payload data structure of a vehicle identification request message with EID shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| Payload type vehicle identification request message with EID | < | < |
| EID | 0 | 6 |

  Upstream requirements:
⌈
When the module receives a DoIP message with payload Type 0x0002 on a connection different than a configured DoIPUdpConnection, the module shall discard the DoIP message.
⌋

Note: This also means that it is not allowed to receive this payload type on a TCP connection.

  Upstream requirements:
⌈
The expected payload length (see ) for vehicle identification request message with payload type 0x0002 shall be exactly 6.
⌋

  Upstream requirements:
⌈
If a DoIP message with payload Type 0x0002 is received on the configured DoIPUdpConnection, the DoIP module shall further process the message.
⌋

  Upstream requirements:
⌈
If the Parameter DoIPUseMacAddressForIdentification is set to true the received "EID" 6 payload data bytes shall be compared to the MacAddress received via `SoAd_GetPhysAddr` .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Vehicle Identification request with VIN (payload 类型 0x003)
*原文标题：Vehicle Identification request with VIN (payload type 0x003)*

The payload data structure of a vehicle identification request message with VIN shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| Payload type vehicle identification request message with VIN | < | < |
| VIN | 0 | 17 |

  Upstream requirements:
⌈
When the module receives a DoIP message with payload Type 0x0003 on a connection different than a configured DoIPUdpConnection, the module shall discard the DoIP message.
⌋

Note: This also means that it is not allowed to receive this payload type on a TCP connection.

  Upstream requirements:
⌈
The expected payload length (see ) for vehicle identification request message with payload type 0x0003, shall be exactly 17.
⌋

  Upstream requirements:
⌈
If a DoIP message with payload Type 0x0003 is received on the configured DoIPUdpConnection the DoIP module shall further process the message.
⌋

  Upstream requirements:
⌈
The DoIP 17 payload data bytes shall be compared to the data retrieved by the function `Dcm_GetVin`. If the function returns E_OK, the VIN pointer is considered to contain valid information.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Vehicle Identification response/vehicle announcement (payload 类型 0x0004)
*原文标题：Vehicle Identification response/vehicle announcement (payload type 0x0004)*

Upstream requirements: ,
⌈
For a DoIP Interface with DoIPInterfaceAnnouncementStart = `DOIP_AUTOMATIC_ANNOUNCE`, the DoIP module shall start Vehicle announcement according to .
⌋

  Upstream requirements: ,
⌈
For a DoIP Interface with DoIPInterfaceAnnouncementStart = `DOIP_ONTRIGGER_ANNOUNCE`, the sending of vehicle announcement only starts if `DoIP_TriggerVehicleAnnouncement` () has been called for that Interface.
⌋

⌈
If `DoIP_TriggerVehicleAnnouncement`() is called, but the corresponding socket is not yet ONLINE then the request shall be remembered and vehicle announcement shall be sent as soon as the socket goes ONLINE.
⌋

  Upstream requirements:
⌈
If the DoIP module needs to send a vehicle announcement message (see  and ), it shall send the vehicle announcement message via the configured DoIPUdpVehicleAnnouncementConnection after DoIPInitialVehicleAnnouncementTime. This message shall be sent DoIPVehicleAnnouncementCount times with a delay of DoIPVehicleAnnouncementInterval between each message. The last "VIN/GID Status" byte of the Vehicle identification response message is optional as defined in the ISO 13400-2 standard.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Routing activation

### 31. Routing activation request (payload 类型 0x0005)
*原文标题：Routing activation request (payload type 0x0005)*

The payload data structure of a routing activation request message shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| External test equipment address information | < | < |
| Source address | 0 | 2 |
| Activation Type | 2 | 1 |
| Reserved and OEM specific data | < | < |
| Reserved by the ISO (0x00000000) | 3 | 4 |
| OEM specific | 7 | 4 |

  Upstream requirements:
⌈
When the module receives a DoIP message with payload Type 0x0005 on a connection different than a configured DoIPTcpConnection, the module shall discard the DoIP message.
⌋

Note: That means that it is also not allowed to receive this payload type on a UDP connection,

  Upstream requirements:
⌈
The expected payload length (see ) for Routing Activation Request Message with payload type 0x0005 shall be either exactly 7 or 11.
⌋

  Upstream requirements:
⌈
If a routing activation request message is received with a valid DoIP header, the DoIP module shall process further to , if the field "Source address" matches a configured DoIPTesterSA.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Routing activation response (payload 类型 0x0006)
*原文标题：Routing activation response (payload type 0x0006)*

The payload data structure of a routing activation response message shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| External test equipment address information | < | < |
| Logical Address Tester | 0 | 2 |
| Routing activation status information | < | < |
| Logical address of DoIP entity | 2 | 2 |
| Routing activation response code | 4 | 1 |
| Reserved by ISO (0x00000000) | 5 | 4 |
| OEM specific | 9 | 4 |

  Upstream requirements:
⌈
The "Logical Address Tester" field shall be set to the Tester SA the according routing activation request message was received from.
⌋

  Upstream requirements:
⌈
The "Logical Address DoIP entity" shall be set to the configured parameter DoIPLogicalAddress.
⌋

  Upstream requirements:
⌈
The "Routing activation response code shall be set according to the response conditions specified in , , , , , , ,  and .
⌋

  Upstream requirements:
⌈
If the DoIPRoutingActivationAuthenticationResLength and/or DoIPRoutingActivationConfirmationResLength are used (different from zero), the "OEM specific" field shall be filled with the specified length data.
⌋

Note: see details of the RoutingActivation request and response structures in .

### 33. Alive check

### 34. Alive check request (payload 类型 0x0007)
*原文标题：Alive check request (payload type 0x0007)*

Upstream requirements:
⌈
If the DoIP module needs to send a alive check request, it shall have no payload data but only the generic DoIP header and the payload type set 0x0007.
⌋

  Upstream requirements:
⌈
After sending an alive check request the DoIP module shall wait the configured time DoIPAliveCheckResponseTimeout to receive a valid alive check response and . If it does not receive an alive check response, the socket connection on which the alive check request was sent shall be reset as described in .
⌋

### 35. Alive check response (payload 类型 0x0008)
*原文标题：Alive check response (payload type 0x0008)*

The payload data structure of a alive check response message shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| External test equipment address information | < | < |
| Source address | 0 | 2 |

  Upstream requirements:
⌈
If an Alive check response is received on a socket connection which is in any ISO 13400 connection state "Registered" and the field "SourceAddress" matches the registered Source Address of this socket connection, then the DoIP module shall reset the general inactivity timer.

Note: The alive check response can always be sent (not only after an according request): With this method the test equipment can reset the inactivity time.
⌋

⌈
If an Alive check response is received on a socket connection which is in any ISO 13400 connection state "Registered" and the field "SourceAddress" does not match the registered Source Address of this socket connection, then the socket connection shall be closed as described in .
⌋

### 36. Node information

### 37. 诊断 power 模式 information request (payload 类型 0x4003)
*原文标题：Diagnostic power mode information request (payload type 0x4003)*

Upstream requirements:
⌈
When the module receives a DoIP message with payload Type 0x4003 on a connection different than a configured DoIPUdpConnection, the module shall discard the DoIP message.
⌋

Note: This means also that it is not allowed to receive this payload type on a TCP connection.

  Upstream requirements:
⌈
The expected payload length (see ) for diagnostic power mode information request message with payload type 0x4003 shall be exactly 0.
⌋

  Upstream requirements:
⌈
After a valid Diagnostic power mode request message, the DoIP module shall send a Diagnostic Power mode information response message () on the configured DoIPUdpConnection.
⌋

### 38. 诊断 power 模式 information response (payload 类型 0x4004)
*原文标题：Diagnostic power mode information response (payload type 0x4004)*

The payload data structure of a diagnostic power mode information response shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| Diagnostic Power Mode | < | < |
| Diagnostic power mode | 0 | 1 |

  Upstream requirements:
⌈
The "Diagnostic Power Mode" byte of diagnostic power mode information response message contains the 1 Byte value retrieved by a call to the configured DoIPPowerModeCallback (for the signature see <User>DoIPGetPowerModeStatus, ). If the function returns E_OK, the "Diagnostic Power Mode" shall be set to the retrieved value of PowerStateReady, otherwise it shall be set to 0x00 to indicate that the power mode is not ready.
⌋

### 39. 诊断 entity status request (payload 类型 0x4001)
*原文标题：Diagnostic entity status request (payload type 0x4001)*

Upstream requirements:
⌈
When the module receives a DoIP message with payload Type 0x4001 on a connection different than a configured DoIPUdpConnection, the module shall discard the DoIP message.
⌋

Note: This means also that it is not allowed to receive this payload type on a TCP connection.

  Upstream requirements:
⌈
The expected payload length (see ) for diagnostic entity status request message with payload type 0x4001 shall be exactly 0.
⌋

  Upstream requirements:
⌈
After a valid Diagnostic entity status request message, the DoIP module shall send a Diagnostic entity status response message on the configured DoIPUdpConnection.
⌋

### 40. 诊断 entity status response (payload 类型 0x4002)
*原文标题：Diagnostic entity status response (payload type 0x4002)*

The payload data structure of a diagnostic entity status response message shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| DoIP Entity Status Response | < | < |
| Node Type | 0 | 1 |
| Max open sockets | 1 | 1 |
| Currently open socket | 2 | 1 |
| Max. data size | 3 | 4 |

  Upstream requirements:
⌈
The "Node Type" byte of a diagnostic entity status response message shall contain the configured DoIPNodeType, whereas `DOIP_GATEWAY` shall be represented by 0x00 and `DOIP_NODE` shall be represented by 0x01.
⌋

  Upstream requirements:
⌈
The "Max open sockets" byte of a diagnostic entity status response message shall contain the configured DoIPMaxTesterConnections. This parameter represents the maximum number of concurrent `TCP_DATA` sockets allowed with this DoIP entity, excluding the reserve socket required for socket handling as defined in the ISO 13400-2 standard.
⌋

  Upstream requirements:
⌈
The "Currently open sockets" byte of a diagnostic entity status response message shall contain the currently active connections, based on the information described in .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 诊断 Message
*原文标题：Diagnostic Message*

For enhanced diagnostic as well as for emissions related diagnostic communication, the DoIP module uses the same diagnostic message structure and payload types. Additionally it provides an acknowledge mechanism to provide early feedback to the tester wether the diagnostic message was received and successfully received for the internal ECU or sent out to the target network.

### 42. 诊断 message (for request and response) (payload 类型 0x8001)
*原文标题：Diagnostic message (for request and response) (payload type 0x8001)*

The payload data structure of a diagnostic message shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| Logical address information | < | < |
| Source address | 0 | 2 |
| Target address | 2 | 2 |
| Diagnostic message data | < | < |
| User data | 4 | ... |

  Upstream requirements:
⌈
When the module receives a DoIP message with payload Type 0x8001 on a connection different than a configured DoIPTcpConnection, the module shall discard the DoIP message.
⌋

Note: This means also that it is not allowed to receive this payload type on a UDP connection.

  Upstream requirements:
⌈
The expected payload length (see ) for diagnostic messages with payload type 0x8001 shall be at least 5 byte.
⌋

  Upstream requirements:
⌈
If a diagnostic message on a socket connection arrived, which is in the state Registered , and the "Source Address" does not match, a negative acknowledge set to 0x02 shall be sent. Additionally, the socket connection shall be closed as described in .
⌋

Note: see details of the negative acknowledge message in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. 诊断 acknowledge message (payload 类型 0x8002)
*原文标题：Diagnostic acknowledge message (payload type 0x8002)*

The payload data structure of a diagnostic acknowledge message shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| Logical address information | < | < |
| Source address | 0 | 2 |
| Target address | 2 | 2 |
| Diagnostic message acknowledge information | < | < |
| ACK code (0x00) | 4 | 1 |
| Previous diagnostic message | 5 | ... |

  Upstream requirements:
⌈
If the DoIP module needs to send a diagnostic acknowledge message the "Source Address" shall be set to the according "TargetAddress" of the received message.
⌋

  Upstream requirements:
⌈
If the DoIP module needs to send a diagnostic acknowledge message the "Target Address" shall be set to the according "SourceAddress" of the received message.
⌋

  Upstream requirements:
⌈
If the DoIP module needs to send a diagnostic acknowledge message the field "previous diag message" shall be filled with the number of bytes of the original request message as configured in the parameter DoIPNumByteDiagAckNack for the DoIPTester the request was received on.
⌋

### 44. 诊断 negative acknowledge message (payload 类型 0x8003)
*原文标题：Diagnostic negative acknowledge message (payload type 0x8003)*

The payload data structure of a diagnostic negative acknowledge message shall be supported as described in Table :

| Item | Position (Byte) | Length (Byte) |
|---|---|---|
| Logical address information | < | < |
| Source address | 0 | 2 |
| Target address | 2 | 2 |
| Diagnostic message acknowledge information | < | < |
| Diagnostic message negative acknowledge code | 4 | 1 |
| Previous diagnostic message | 5 | ... |

  Upstream requirements:
⌈
If the DoIP module needs to send a diagnostic negative acknowledge message the "Source Address" shall be set to the according "TargetAddress" of the received message.
⌋

  Upstream requirements:
⌈
If the DoIP module needs to send a diagnostic negative acknowledge message the "Target Address" shall be set to the according "SourceAddress" of the received message.
⌋

  Upstream requirements:
⌈
If the DoIP module needs to send a diagnostic negative acknowledge message, the "Diagnostic message negative acknowledge code" shall be set to the value specified by the specification item that is triggering the diagnostic negative acknowledge message.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. UDP communication

DoIP messages that are communicated via UDP connection are communicated on the SoAd Interface APIs. So all messages which are received via UDP as described in Table  and sent via UDP as described in Table  shall be treated as described in this chapter.

  Upstream requirements:
⌈
If the SoAd calls the DoIP module via the Interface `DoIP_SoAdIfRxIndication`, the DoIP module shall copy the message into the internal UDP buffer for further processing.
⌋

Note: Further processing depends on the header information and on the payload type. For details refer to chapter . Which messages are expected to be received on UDP connection is described in Table .

  Upstream requirements:
⌈
If the DoIP module shall send a DoIP message via UDP it shall call the `SoAd_IfTransmit` with the TxPduId set to the SoAd internal TxPduId that is retrieved via the according configured DoIPSoAdUdpTxPduRef, the PduInfoPtr shall contain the length of the message and the pointer to the to be transmitted message buffer and additionally the buffer shall be locked.
⌋

Note: The events that lead to the sending of UDP DoIP messages are described in the rest of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 106 章（内容从略，见纯文本全文）

46. TCP communication
47. Reception of a TCP DoIP message
48. Transmission of a TCP DoIP message
49. 安全事件
50. 错误分类
51. Development 错误
52. Runtime 错误
53. Production 错误
54. Extended Production 错误
55. API 规范
56. Imported 类型
57. 类型定义
58. DoIP_ConfigType
59. 功能定义
60. DoIP_TpTransmit
61. DoIP_TpCancelTransmit
62. DoIP_TpCancelReceive
63. DoIP_IfTransmit
64. DoIP_IfCancelTransmit
65. DoIP_Init
66. DoIP_GetVersionInfo
67. DoIP_ActivationLineSwitch
68. DoIP_TriggerVehicleAnnouncement
69. DoIP_AllowNonTlsDoIPConnection
70. Call-back 通知
71. DoIP_SoAdTpCopyTxData
72. DoIP_SoAdTpTxConfirmation
73. DoIP_SoAdTpCopyRxData
74. DoIP_SoAdTpStartOfReception
75. DoIP_SoAdTpRxIndication
76. DoIP_SoAdIfRxIndication
77. DoIP_SoAdIfTxConfirmation
78. DoIP_SoConModeChg
79. DoIP_LocalIpAddrAssignmentChg
80. Scheduled functions
81. DoIP_MainFunction
82. Expected 接口
83. Mandatory 接口
84. Optional 接口
85. Configurable 接口
86. <User>_DoIPGetPowerModeCallback
87. <User>_DoIPRoutingActivationConfirmation
88. <User>_DoIPRoutingActivationAuthentication
89. <User>_DoIPTriggerGidSyncCallback
90. <User>_DoIPGetGidCallback
91. <User>_DoIPGetFurtherActionByteCallback
92. DoIP 服务组件
93. 时序图
94. UDP DoIP communication
95. Rx TCP message
96. Tx TCP message
97. Activation Line 处理 - Active
98. Activation Line 处理 - Inactive
99. 配置规范
100. How to read this chapter
101. 配置 and 配置 parameters
102. Variants
103. DoIP
104. DoIPGeneral
105. DoIPGetGidCallback
106. DoIPPowerModeCallback
107. DoIPTriggerGidSyncCallback
108. DoIPSecurityEvents
109. DoIPConfigSet
110. DoIPInterface
111. DoIPChannel
112. DoIPPduRRxPdu
113. DoIPPduRTxPdu
114. DoIPConnections
115. DoIPTargetAddress
116. DoIPTcpConnection
117. DoIPSoAdTcpRxPdu
118. DoIPSoAdTcpTxPdu
119. DoIPUdpConnection
120. DoIPSoAdUdpRxPdu
121. DoIPSoAdUdpTxPdu
122. DoIPUdpVehicleAnnouncementConnection
123. DoIPSoAdUdpVehicleAnnouncementTxPdu
124. DoIPFurtherActionByteCallback
125. DoIPProtocolVersion
126. DoIPRoutingActivation
127. DoIPRoutingActivationAuthenticationCallback
128. DoIPRoutingActivationConfirmationCallback
129. DoIPTester
130. 发布信息
131. 附录
132. Change History
133. Traceable item history of this document according to AUTOSAR Release R25-11
134. Added 规范 Items in R25-11
135. Changed 规范 Items in R25-11
136. Deleted 规范 Items in R25-11
137. Traceable item history of this document according to AUTOSAR Release R24-11
138. Added 规范 Items in R24-11
139. Changed 规范 Items in R24-11
140. Deleted 规范 Items in R24-11
141. Traceable item history of this document according to AUTOSAR Release R23-11
142. Added 规范 Items in R23-11
143. Changed 规范 Items in R23-11
144. Deleted 规范 Items in R23-11
145. Traceable item history of this document according to AUTOSAR Release R22-11
146. Added 规范 Items in R22-11
147. Changed 规范 Items in R22-11
148. Deleted 规范 Items in R22-11
149. Added Constraints in R22-11
150. Changed Constraints in R22-11
151. Deleted Constraints in R22-11
