# Specification of Socket Adaptor (`SocketAdaptor`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 416 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SocketAdaptor_416\AUTOSAR_CP_SWS_SocketAdaptor.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SocketAdaptor_416\AUTOSAR_CP_SWS_SocketAdaptor.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SocketAdaptor_416\zzgen\CP_SWS_SocketAdaptor.complete.txt`

## 文档简介

This document specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Socket Adaptor (SoAd).

The TCP/IP concept of data transmission, particularly using Ethernet as the physical layer, has been established as a de-facto standard in the computing and telecommunication environments. The addressing of applications, logical addressing of end points and physical addressing are all covered in a layered suite of protocols and number assignments. Dynamic configuration and routing are at the core of the concepts implemented here.

AUTOSAR follows a concept of static communication relations pre-determined at compile time and rigid during run-time. The data transmitted is considered just as pre-determined as the source and sink that it needs to travel from and to.

The Socket Adaptor module aims at bridging the gap between these two concepts. By establishing a pre-determined configuration that includes the information required for AUTOSAR and leaving some items open to be updated during run-time the conflicting concepts are leveraged. Furthermore the SoAd decouples the call-back based software architecture from the socket based communication handling in the TCP/IP world.

The main purpose of the SoAd module is to create an interface between an AUTOSAR communication service module using PDUs (e.g. PDU Router) and a socket based TCP/IP stack. It will map I-PDU IDs to socket connections and vice versa. The TCP/IP protocol stack is specified in TcpIp SWS as shown in Figure 1. The internal functional structure of the TCP/IP stack is shown schematically for information purposes.

The SoAd Module, and thereby the Ethernet communication stack, was first introduced in AUTOSAR R4.0.1, some major conceptual changes have been applied between AUTOSAR R4.0.3 and AUTOSAR R4.1.1.

## 模块依赖

This section outlines relations between the SoAd and related AUTOSAR basic software modules. It contains brief descriptions of the services required by the SoAd from other modules and how other modules will call the SoAd.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Socket Adaptor (SoAd).

The TCP/IP concept of data transmission, particularly using Ethernet as the physical layer, has been established as a de-facto standard in the computing and telecommunication environments. The addressing of applications, logical addressing of end points and physical addressing are all covered in a layered suite of protocols and number assignments. Dynamic configuration and routing are at the core of the concepts implemented here.

AUTOSAR follows a concept of static communication relations pre-determined at compile time and rigid during run-time. The data transmitted is considered just as pre-determined as the source and sink that it needs to travel from and to.

The Socket Adaptor module aims at bridging the gap between these two concepts. By establishing a pre-determined configuration that includes the information required for AUTOSAR and leaving some items open to be updated during run-time the conflicting concepts are leveraged.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the SoAd module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| ARP | Address Resolution Protocol |
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |
| DHCPv4 | Dynamic Host Configuration Protocol |
| DHCPv6 | Dynamic Host Configuration Protocol for Internet Protocol Version 6 |
| DoIP | Diagnostics over IP |
| HTTP | HyperText Transfer Protocol |
| IANA | Internet Assigned Numbers Authority |
| ICMPv4 | Internet Control Message Protocol |
| ICMPv6 | Internet Control Message Protocol for Internet Protocol Version 6 |
| IETF | Internet Engineering Task Force |
| IP | Internet Protocol |
| IPv4 | Internet Protocol version 4 |
| IPv6 | Internet Protocol version 6 |
| NDP | Neighbor Discovery Protocol |
| Sd | Service Discovery |
| TCP | Transmission Control Protocol |
| TCP/IP | A family of communication protocols used in computer networks |
| TLS | Transport Layer Security |
| TP | Transport Protocol |
| UDP | User Datagram Protocol |
| UdpNm | AUTOSAR UDP Network Management |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Socket Adaptor.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Socket Adaptor.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

The transmission of data using TCP/IP over Ethernet requires about 60 bytes of header information. This implies that for small messages the header overhead may reach an unacceptably high percentage.

To avoid further protocol overhead, the use of a single socket connection per PDU is described here. However, this solution is very resource intensive, particularly if many small PDUs are to be transmitted. One solution described here as an option is to add a small PDU header, containing an ID and length information. This enables transmission of multiple PDUs via one socket connection. Additionally, a resource conservation scheme is included in this specification as an option.

This document does not cover the assignment of UDP or TCP port numbers. There is no reserved space within the IANA assigned number range. Each implementer is responsible for managing the used port numbers.

This document does not cover the management of IP addresses. This might be done dynamically, e.g. by using DHCP, or statically. It is the implementers responsibility to prevent address conflicts and achieve compliance with IANA address assignments.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section outlines relations between the SoAd and related AUTOSAR basic software modules. It contains brief descriptions of the services required by the SoAd from other modules and how other modules will call the SoAd.

### 10. AUTOSAR TCP/IP Stack

The TcpIp module implements the main protocols of the TCP/IP protocol family (TCP, UDP, TLS, IPv4, ARP, ICMP, DHCP, IPv6, NDP, ICMPv6, DHCPv6) and provides dynamic, socket based communication via Ethernet. The SoAd module is one of the possible upper layer modules of the TcpIp module.

### 11. Generic 上层 Layer
*原文标题：Generic Upper Layer*

The SoAd module provides a generic upper layer support, i.e. the SoAd offers its services to any upper layer which conforms to the SoAd generic upper layer API/configuration. Each upper layer of the SoAd may specify which kind of service it wants to use.

In the AUTOSAR architecture a number of SoAd upper layer modules are already defined. The following list specifies these module and provides a rough description of the SoAd services used:

* PDU Router (PduR) : IF-PDU and TP-PDU API
* UDP Network Management (UdpNm) : IF-PDU API
* XCP on Ethernet (Xcp)  : IF-PDU API
* Service Discovery (Sd) : IF-PDU API, Control API
* Diagnostics over IP (DoIP) : IF-PDU and TP-PDU API, Control API

### 12. 文件结构
*原文标题：File structure*

### 13. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 14. Version check

For details refer to .

### 15. 需求追踪
*原文标题：Requirements Tracing*

| Requirement | Description | Satisfied by |
|---|---|---|
| Basic SW security events |  |  |
| Classification of development errors |  |  |
| TCP shall be implemented according to IETF RFC 793 |  |  |
| SoAd shall support generic upper layers |  |  |
| Robustness aganist the change of logical addresses |  |  |
| The Socket Adaptor shall implement a mechanism to transmit multiple PDUs within the same UDP datagram |  |  |
| The SoAd shall implement mechanisms to share the same PDU pair for the reception from and transmission to multiple remote nodes |  |  |
| The SoAd shall support access to measurement counter values |  |  |
| Method Call Request Check |  |  |

### 16. 功能规范
*原文标题：Functional specification*

The SoAd enables PDU-based communication via the TCP/IP network. Therefore AUTOSAR I-PDUs are mapped to socket connections which are configured and maintained by SoAd. To use a socket connection for more than one I-PDU a SoAd PDU Header can optionally be added in front of each I-PDU. A message acceptance policy is specified to define which TCP connections and UDP datagrams from remote nodes are accepted. Socket connections can be opened automatically or manually via a request from the upper layer. For disconnection and recovery of a socket connection a policy is defined. An upper layer of the SoAd can use the IF-API as well as the TP-API for transmission and reception of PDUs.To selectively enable/disable the routing of PDUs from or to socket connections PDU routing groups are defined and can be controlled by the upper layer of the SoAd. An IF-PDU can also be forwarded to multiple socket connections or a message received from a socket connection can be forwarded as different IF-PDUs to the same or different upper layers of the SoAd (PDU Fan-out).

Note: The SoAd Module does not provide any means for adaption of the Bit- or Byte-Order (Endianness) within a PDU.

### 17. Socket Connections

The TCP/IP communication is based on internet sockets. An internet socket is the endpoint of a communication link which is identified by the tuple IP address and port. Depending on the transport protocol sockets are separated in UDP sockets for connection-less communication via the User Datagram Protocol (UDP) and TCP sockets for connection-oriented communication via the Transmission Control Protocol (TCP). TCP is based on point-to-point communication relations. A broadcast or multicast is not possible in TCP. TCP requires for one party to establish the connection and for the other to accept the incoming request. Two stations may establish multiple connections with each other, each will be handled by a different socket and need to differ at least in one of the port numbers used. In TCP all messages sent from a source to a sink are considered a continuous stream of consecutive bytes with preserved order. An acknowledgement scheme is in place to preserve the byte order spanning all messages. Messages are retransmitted by the source if the sink does not acknowledge reception within a certain time. TCP ensures data integrity (using checksums), byte order and completeness.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Socket Connection Open

⌈
In the `SoAd_MainFunction`(), SoAd shall try to open each socket connection which fulfills all of the following criterias:

# No TcpIp socket is assigned to the socket connection
# Open is either (a) explicitly requested by a previous `SoAd_OpenSoCon`() call which has not been revoked by a following `SoAd_CloseSoCon`() call or (b) implicitly requested when SoAdSocketAutomaticSoConSetup is TRUE
# remote address is set (either specified by configuration or set via the function `SoAd_SetRemoteAddr`())
# local IP address is assigned, i.e. `SoAd_LocalIpAddrAssignmentChg`() has been called with the related LocalAddrId and `TCPIP_IPADDR_STATE_ASSIGNED` as State.
⌋

⌈
SoAd shall perform the following actions within `SoAd_MainFunction`() to open either a UDP socket connection which is part of a socket connection group containing a single socket connection (i.e. there is only one socket connection in the socket connection group configuration container) or a TCP socket connection with SoAdSocketTcpInitiate set to TRUE:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Socket Connection Close

⌈
In the `SoAd_MainFunction`(), SoAd shall close each socket connection which fulfills all of the following criteria:

# Current connection state is not `SOAD_SOCON_OFFLINE`
# Close is explicitly requested by a previous `SoAd_CloseSoCon`() call
# No upper layer requested to keep the socket connection open at the time of the `SoAd_CloseSoCon`() call (i.e. `SoAd_CloseSoCon`() has been called as often as `SoAd_OpenSoCon`()) or `SoAd_CloseSoCon`() has been called with abort set to TRUE.
⌋

⌈
SoAd shall perform the following actions within `SoAd_MainFunction`() to close a socket connection:

# Terminate active TP sessions (if any) and notify the upper layer about the termination
# Disable further transmission or reception for this socket connection, i.e. new transmit requests shall be rejected with E_NOT_OK and received messages shall simply be discarded.
# Close related TcpIp sockets
# Change the state of the socket connection to `SOAD_SOCON_OFFLINE` if closing of the socket connection results from a `SoAd_CloseSoCon`() request or to `SOAD_SOCON_RECONNECT` otherwise.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Socket Connection Open/Close Sequence Remarks

The Requirements describe in Chapters  and  shall lead to the following intended behavior:

Scenario 1:

1: Open

2: Main - ONLINE

3: Close

4: Open

5: Main - OFFLINE

6: Main - ONLINE

Comment: Open request (4) will be executed after close request (3) has been

executed.

Rational: To clearly separate two communication sessions, close has to win

against open, i.e. open request (4) shall not revoke the close request (3)

Scenario 2:

1: Open

2: Main - ONLINE

3: Close

4: Open

5: Close

6: Open

7: Close

8: Main - OFFLINE

9: Main, no change

Comment: Close request (5) revokes open request (4) and (7) revokes (6)

Rational: there is no need for the communication session as the upper layer

revoked it before it was ever active

### 21. 通知
*原文标题：Notifications*

⌈
Each time a socket connection state changes, SoAd shall notify the upper layer of a socket connection state change with the configured upper layer notification function <Up>_SoConModeChg() and the new state if SoAdSocketSoConModeChgNotification is set to TRUE for the socket connection.
⌋

  Upstream requirements:
⌈
Each time a socket connection state changes, SoAd shall notify the upper layer specified by SoAdSocketSoConModeChgNotifUpperLayerRef with the configured upper layer notification function <Up>_SoConModeChg() and the new state if the optional reference is set for the socket connection.
⌋

⌈
Each time the IP address assignment related to a socket connection changes, SoAd shall notify the upper layer of the IP address assignment change with the configured upper layer notification function <Up>_LocalIpAddrAssignmentChg() and the new address state if SoAdSocketIpAddrAssignmentChgNotification is set to TRUE for the socket connection.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Connection Status

⌈
If `SoAd_IsConnectionReady`() is called and the referred socket connection has no socket assigned, SoAd shall return `TCPIP_E_NOT_OK`.
⌋

⌈
If `SoAd_IsConnectionReady`() is called and the referred socket connection has a socket assigned, SoAd shall call `TcpIp_IsConnectionReady`() to pass RemoteAddrPtr for the corresponding socket. The return value of `TcpIp_IsConnectionReady`() shall be forwarded to the caller.
⌋

### 23. PDU Transmission

For the transmission of an upper layer module PDU via an UDP or TCP socket, the SoAd configuration specifies a PDU route which is linked to a socket connection. A PDU route (SoAdPduRoute, SoAdPduRouteDest) describes the route from an upper layer module of the SoAd to the related socket of the TcpIp stack which is described by the socket connection (SoAdSocketConnection, SoAdSocketConnectionGroup).

The upper layer module of the SoAd may use the Interface (IF) API or the Transport Protocol (TP) API for the transmit request and data provision respectively.

### 24. PDU Transmission via IF-API

⌈
For the transmission of a PDU requested by an upper layer using the IF-API, the SoAd shall

# Identify the related socket connection and PDU route by using the TxPduId provided at `SoAd_IfTransmit`().
# Call the related TcpIp transmit function depending on the connection type if the PDU length > 0 or SoAdPduHeaderEnable is TRUE, otherwise SoAd shall Skip further processing and return with E_NOT_OK.
⌋

  Upstream requirements:
⌈
If development error detection is enabled: In case of a transmit request for a SoAdPduRoute that refers to a global PDU structure configured with a MetaDataItem of the type `SOCKET_CONNECTION_ID_16` and the contained SoAdPduRouteDest refers to a socket connection group, SoAd shall raise the development error `SOAD_E_INV_METADATA`, if the socket connection identified by PduInfoType.MetaDataPtr is not part of the socket connection group of the related SoAdPduRouteDest.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. PDU Transmission via IF-API and nPduUdpTxBuffer

Upstream requirements:
⌈
In case SoAdTxUdpTriggerMode is set to `TRIGGER_NEVER` for any PDU route (SoAdPduRouteDest) related to a socket connection and all upper layers belonging to the related socket connection have SoAdTxUpperLayerType set to "IF", SoAd shall use the nPdu feature for this socket connection.
⌋

  Upstream requirements:
⌈
In case the nPdu feature is used for a socket connection and SoAdTxUdpTriggerMode is set to `TRIGGER_NEVER` for the actual PDU (SoAdPduRouteDest), SoAd shall store the PDU for the socket connection (instead of calling `TcpIp_UdpTransmit`()).
⌋

  Upstream requirements:
⌈
In case the nPdu feature is used for a socket connection and the related PDU parameter SoAdTxPduCollectionSemantics is set to `SOAD_COLLECT_LAST_IS_BEST`, SoAd shall only store the transmission request (TxPduId and PduInfoPtr->SduLength of `SoAd_IfTransmit`()) instead of the PDU data. When SoAd needs to provide the PDU data, SoAd shall retrieve the data from the upper layer by calling <Up>_TriggerTransmit().
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. PDU Transmission via IfRoutingGroupTransmit API

⌈
At `SoAd_IfRoutingGroupTransmit`() SoAd shall store a trigger transmit request for each SoAdPduRouteDest that contains a reference to the routing group identified by the parameter id for transmission in the `SoAd_MainFunction`().
⌋

⌈
At `SoAd_IfSpecificRoutingGroupTransmit`() SoAd shall store a trigger transmit request for each SoAdPduRouteDest that contains a reference to the routing group identified by the parameter id for transmission on the socket connection identified by the parameter SoConId in the `SoAd_MainFunction`().
⌋

⌈
In the `SoAd_MainFunction`() the SoAd shall check for pending triggered transmit request for SoAdPduRouteDest and identify all related IF-PDUs. For each identified IF-PDU SoAd shall process as specified below:

# retrieve the data from the related upper layer by calling <Up>_TriggerTransmit() and
# transmit the data via the related socket connection.
⌋

⌈
To trigger PDU data from an upper layer SoAd shall set PduInfoType.SduDataPtr to the location of the buffer where the data shall be copied, set PduInfoType.SduDataLength to the length of this buffer and then call <Up>_TriggerTransmit().
⌋

### 27. PDU Transmission via TP-API

⌈
For the transmission of a PDU requested by an upper layer using the TP-API, the SoAd shall

# Skip further processing and return with E_NOT_OK if the PDU length is 0.
# Identify the related socket connection and PDU route by using the TxPduId provided at `SoAd_TpTransmit`().
# Store the TP transmission request for further processing in the `SoAd_MainFunction`().
⌋

Note: TxPduId identifies a SoAdPduRoute in the SoAd configuration which contains one or more SoAdPduRouteDest container which references to a SoAdSocketConnection

⌈
In the `SoAd_MainFunction`() the SoAd shall check for pending TP transmission requests and process a pending request as specified below:

# Query the available amount of data at the upper layer by calling the configurable callback function <Up>_CopyTxData() with PduInfoType.SduLength = 0.
# Depending on the connection type: retrieve data and call the related TcpIp transmit function.
⌋

⌈
In case of a UDP socket connection the SoAd shall

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. PDU Header option

⌈
In case PDU header option is enabled (SoAdPduHeaderEnable is TRUE) for a socket connection and PDU transmission, SoAd shall insert the PDU Header with the configured HeaderId and the actual PDU length directly before the PDU data, i.e. `TcpIp_UdpTransmit`() or `TcpIp_TcpTransmit`() shall be called with a TotalLength or AvailableLength increased by the PDU Header length, the PDU Header shall be copied before the PDU data to a SoAd UDP transmit buffer (if any) and a memory specified by TcpIp within `SoAd_CopyTxData`() requesting the begin of the PDU data.
⌋

⌈
The SoAd PDU header shall consist of a 4 byte ID field for unique identification of the PDU at the receiver and a 4 byte length field specifying the data length of the PDU. Both in BigEndian byte order.
⌋

### 29. PDU Reception

For the reception of a PDU via an UDP or TCP socket, the SoAd configuration specifies a socket route which refers to a socket connection. A socket route (SoAdSocketRoute, SoAdSocketRouteDest) describes the route from an UDP or TCP socket of the TcpIp stack (which is described by the socket connection (SoAdSocketConnection, SoAdSocketConnectionGroup)) to the related upper layer module of the SoAd.

The upper layer module of the SoAd may use the Interface (IF) API or the Transport Protocol (TP) API for PDU reception.

⌈
For the reception of a message from an UDP or TCP socket and forwarding of the received data as PDU to the related upper layer the SoAd shall

# Identify the related socket connection and socket routes by using the SocketId provided at `SoAd_RxIndication`()
# Filter messages according to the message acceptance policy
# Convert the message into a PDU
# Skip further processing if PDU length is 0 and (SoAdPduHeaderEnable is FALSE or SoAdRxUpperLayerType is TP)
# Call the upper layer type related reception functions of the configured upper layer module depending on the SoAdRxUpperLayerType specified in SoAdSocketRouteDest configuration
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. PDU Reception via IF-API

⌈
SoAd shall perform the following further actions within the `SoAd_RxIndication`() function for reception of a PDU to an upper layer using the IF-API:

# assemble all data of a fragmented IF-PDU into a SoAd receive buffer if PDU Header is used
# call <Up>_RxIndication() of the related upper layer module (with RxPduId set to the ID specified by the upper layer module for the PDU referenced by SoAdRxPduRef) for each completely received PDU
# dispatch the next IF-PDU (if any) if PDU Header mode is used
⌋

Note: IF-PDU fragmentation is only supported for TCP socket connections with PDU Header mode enabled as UDP does not guarantee the message order and TCP segments are considered as separate PDUs if PDU Header mode is disabled.

  Upstream requirements:
⌈
In case of a reception related to a SoAdSocketRouteDest, that refers to a global PDU structure configured with a MetaDataItem of the type `SOCKET_CONNECTION_ID_16`, which is contained in a SoAdSocketRoute that refers to a socket connection group, SoAd shall use PduInfoType.MetaDataPtr to provide the socket connection identifier (SoConId) where the PDU was received with <Up>_RxIndication().
⌋

### 31. PDU Reception via TP-API (PDU Header disabled)

⌈
SoAd shall perform the following further actions within the `SoAd_RxIndication`() function for reception of a PDU from a socket connection with PDU Header mode disabled to an upper layer using the TP-API:

# if the SoAd receive buffer does not contain any TP data for this socket connection

  # Query the available amount of data at the upper layer by calling the configurable callback function <Up>_CopyRxData() with PduInfoType.SduLength = 0.
  # If not all data can be processed (i.e. forwarded to an upper layer or stored in a SoAd receive buffer), discard all received data and skip further processing.
  # Copy all received data which can be accepted by the upper layer module determined at (a) to the upper layer by calling <Up>_CopyRxData().
  # Copy all remaining data (i.e. data which are received but not delivered to the upper layer) to a SoAd receive buffer for later processing by `SoAd_MainFunction`().
# if the SoAd receive buffer already contains TP data for this socket connection and is able to store all (newley) received data: copy all received data to the SoAd receive buffer for later processing by `SoAd_MainFunction`()
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. PDU Reception via TP-API (PDU Header enabled)

⌈
SoAd shall perform the following further actions within the `SoAd_RxIndication`() function for reception of a PDU from a socket connection with PDU Header mode enabled to an upper layer using the TP-API:

# if no TP reception is in progress for the related socket connection

  # After reception of a complete PDU Header, call <Up>_StartOfReception() of the related upper layer module with RxPduId set to the ID specified by the upper layer module for the PDU referenced by SoAdRxPduRef, set TpSduLength to the length specified in the PDU Header, and set PduInfoType.SduDataPtr and PduInfoType.SduLength to provide already received PDU data to the upper layer.
  # if not all data can be processed (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Best Match Algorithm

⌈
SoAd shall use the following best match algorithm to select a socket connection of a socket connection group based on a provided (specific) remote address:

# socket connections that have no (specific or wildcard) remote address set shall be ignored
# the remote address of the remaining socket connections shall be compared with the provided remote address and the socket connection with the best match according to the following ordered list (item listed earlier has higher priority towards items listed later) shall be selected:

  # IP address and port match
  # IP address match (and wildcard set for port)
  # Port match (and wildcard set for IP address)
  # Wildcards are used for both IP address and port
  # No match (i.e. no socket connections can be selected)
⌋

### 34. Message Acceptance Policy

⌈
If SoAdSocketMsgAcceptanceFilterEnabled is TRUE, SoAd shall only accept TCP connections or UDP datagrams from remote nodes with a source address that matches the remote address specified in the socket connection (either via configuration parameters SoAdSocketRemoteIpAddress and SoAdSocketRemotePort or set online with `SoAd_SetRemoteAddr`() API).
⌋

Note: If SoAdSocketMsgAcceptanceFilterEnabled is TRUE and the remote address is not specified by the configuration or not yet set via `SoAd_SetRemoteAddr`() no message is accepted via the socket connection.

⌈
A remote address matches if both IP address and port match. The IP addresses match if they are identical or if the specified IP address is set to `TCPIP_IPADDR_ANY` (`TCPIP_IP6ADDR_ANY`). The port matches if they are identical or if the specified port is set to `TCPIP_PORT_ANY`.
⌋

⌈
For a UDP socket connection of type automatic (i.e. configuration parameter SoAdSocketAutomaticSoConSetup set to TRUE) which uses a wildcard in the configured remote address (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. TP PDU Cancelation

⌈
SoAd shall store a cancellation request when called with `SoAd_TpCancelReceive`() and `SoAd_TpCancelTransmit`(), but handle the request only in the `SoAd_MainFunction`() respecting the connection loss and recovery policy.
⌋

⌈
If `SoAd_TpCancelReceive`() or `SoAd_TpCancelTransmit`() is called for a PDU where TP reception or TP transmission is not in progress, SoAd shall ignore the request and return E_NOT_OK.
⌋

### 36. Disconnection and recovery

⌈
Within `SoAd_MainFunction`(), SoAd shall close the socket connection for any communication cancelation request related to an active TP transmission.
⌋

⌈
Within `SoAd_MainFunction`(), SoAd shall close the socket connection for any communication cancelation request related to an active TP reception.
⌋

⌈
SoAd shall automatically reestablish a socket connection which is in the connection state `SOAD_SOCON_RECONNECT` within `SoAd_MainFunction`() - independent of the configuration parameter SoAdSocketAutomaticSoConSetup, i.e. connection shall be reestablished even if the parameter is set to FALSE. Reconnection shall be done by considering configuration parameter SoAdSocketTcpInitiate.
⌋

⌈
SoAd shall return E_NOT_OK for TP-PDU Tx requests received at `SoAd_TpTransmit`() within connection reestablishment.
⌋

  Upstream requirements:
⌈
If a UDP socket connection is configured with a SoAdSocketUdpAliveSupervisionTimeout and the remote address was overwritten, as described in , the alive supervision timer for this socket connection shall be started with the value specified by the configuration parameter SoAdSocketUdpAliveSupervisionTimeout.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Routing Groups

To selectively enable/disable the routing of PDUs from or to socket connections routing groups are defined and can be controlled by the upper layer of the SoAd.

⌈
SoAd shall maintain the state of each configured routing group and activate or deactivate the state at initialization depending on the configuration parameter SoAdRoutingGroupIsEnabledAtInit.
⌋

⌈
For RoutingGroups that are referenced by a SoAdPduRouteDest that refers to a SoAdSocketConnectionGroup SoAd shall maintain independent states for each SocketConnection that is part of the referenced SoAdSocketConnectionGroup and handle them as if they were separate RoutingGroups.
⌋

⌈
If `SoAd_IfTransmit`() is called with TxPduId specifying a SoAdPduRouteDest which belongs only to inactive RoutingGroups, SoAd shall always skip the transmission for this SoAdPduRouteDest and shall consider the transmission as successful unless all SoAdPduRouteDest of a SoAdPduRoute belong only to inactive RoutingGroups. In the latter case SoAd shall return E_NOT_OK.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 120 章（内容从略，见纯文本全文）

38. PDU fan-out
39. Buffer 处理
40. 安全事件
41. 错误分类
42. Development 错误
43. Runtime 错误
44. Production 错误
45. Extended Production 错误
46. 版本检查
47. API 规范
48. Imported 类型
49. 类型定义
50. SoAd_SoConIdType
51. SoAd_SoConModeType
52. SoAd_RoutingGroupIdType
53. SoAd_ConfigType
54. SoAd_MeasurementIdxType
55. 功能定义
56. 通用
57. SoAd_GetVersionInfo
58. SoAd_Init
59. Normal Operation
60. SoAd_IfTransmit
61. SoAd_IfRoutingGroupTransmit
62. SoAd_IfSpecificRoutingGroupTransmit
63. SoAd_TpTransmit
64. Transmit/Receive Cancelation API
65. SoAd_TpCancelTransmit
66. SoAd_TpCancelReceive
67. Information and 控制 API
68. SoAd_GetSoConId
69. SoAd_OpenSoCon
70. SoAd_CloseSoCon
71. SoAd_GetSoConMode
72. SoAd_RequestIpAddrAssignment
73. SoAd_ReleaseIpAddrAssignment
74. SoAd_GetLocalAddr
75. SoAd_GetPhysAddr
76. SoAd_GetRemoteAddr
77. SoAd_EnableRouting
78. SoAd_EnableSpecificRouting
79. SoAd_DisableRouting
80. SoAd_DisableSpecificRouting
81. SoAd_SetRemoteAddr
82. SoAd_SetUniqueRemoteAddr
83. SoAd_ReleaseRemoteAddr
84. SoAd_TpChangeParameter
85. SoAd_ReadDhcpHostNameOption
86. SoAd_WriteDhcpHostNameOption
87. SoAd_GetAndResetMeasurementData
88. SoAd_IsConnectionReady
89. Callback 通知
90. SoAd_RxIndication
91. SoAd_CopyTxData
92. SoAd_TxConfirmation
93. SoAd_TcpAccepted
94. SoAd_TcpConnected
95. SoAd_TcpIpEvent
96. SoAd_LocalIpAddrAssignmentChg
97. Scheduled functions
98. Terms and 定义
99. SoAd_MainFunction
100. Expected 接口
101. Mandatory 接口
102. Optional 接口
103. Configurable 接口
104. <Up>_[SoAd
105. <Up>_[SoAd
106. <Up>_[SoAd
107. <Up>_[SoAd
108. <Up>_[SoAd
109. <Up>_[SoAd
110. <Up>_[SoAd
111. <Up>_[SoAd
112. <Up>_SoConModeChg
113. <Up>_LocalIpAddrAssignmentChg
114. Sequence diagrams and Transition Tables
115. Address - Assignment
116. Socket Connection Setup - UDP
117. Socket Connection Setup - TCP
118. Reception - 上层 Layer If API
119. Reception - 上层 Layer TP API
120. Transmission - 上层 Layer If API - TCP
121. Transmission - 上层 Layer If API - UDP
122. Transmission - 上层 Layer TP API
123. 配置规范
124. How to read this chapter
125. Containers and 配置 parameters
126. SoAd
127. SoAdBswModules
128. SoAdGeneral
129. SoAdSecurityEventRefs
130. SoAdConfig
131. SoAdSocketConnectionGroup
132. SoAdSocketConnection
133. SoAdSocketProtocol
134. SoAdSocketUdp
135. SoAdSocketTcp
136. SoAdSocketRemoteAddress
137. SoAdSocketRoute
138. SoAdSocketRouteDest
139. SoAdPduRoute
140. SoAdPduRouteDest
141. SoAdRoutingGroup
142. 发布信息
143. 附录
144. 不适用需求
145. Change history of AUTOSAR traceable items
146. Traceable item history of this document according to AUTOSAR Release R23-11
147. Added 规范 Items in R23-11
148. Changed 规范 Items in R23-11
149. Deleted 规范 Items in R23-11
150. Traceable item history of this document according to AUTOSAR Release R24-11
151. Added 规范 Items in R24-11
152. Changed 规范 Items in R24-11
153. Deleted 规范 Items in R24-11
154. Traceable item history of this document according to AUTOSAR Release R25-11
155. Added 规范 Items in R25-11
156. Changed 规范 Items in R25-11
157. Deleted 规范 Items in R25-11
