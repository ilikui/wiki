# Specification of Raw Data Stream (`RawDataStream`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1098 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_RawDataStream_1098\AUTOSAR_AP_SWS_RawDataStream.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_RawDataStream_1098\AUTOSAR_AP_SWS_RawDataStream.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_RawDataStream_1098\zzgen\AP_SWS_RawDataStream.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the functional cluster Raw Data Stream for the AUTOSAR Adaptive Platform. Sometimes it could be necessary for the application software to be able to process raw binary data streams sent over a communication channel. In some cases a raw binary data stream is handled as a continuing sequence of bytes where the data is not typed (byte stream). So serialization of the data is not necessary. In some other cases one received Ethernet frame (datagram) is processed as an atomic unit of a stream, where parts of the header information need to be forwarded as typed data, and the according payload as raw binary data (datagram stream).

This functional cluster specifies an interface to support processing of raw binary data streams. Generally, the term Raw Data Stream is used to represent a raw binary data stream.

A Raw Data Streaming interface is statically defined and dependent on the underlying network protocol. The modeling for the Raw Data Streaming Interface supports the following network protocols:

* Raw Data Streaming over Ethernet using IP based protocols (network layer)
* Raw Data Streaming over Ethernet using IEEE1722 protocol (data link layer)

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the functional cluster Raw Data Stream for the AUTOSAR Adaptive Platform. Sometimes it could be necessary for the application software to be able to process raw binary data streams sent over a communication channel. In some cases a raw binary data stream is handled as a continuing sequence of bytes where the data is not typed (byte stream). So serialization of the data is not necessary. In some other cases one received Ethernet frame (datagram) is processed as an atomic unit of a stream, where parts of the header information need to be forwarded as typed data, and the according payload as raw binary data (datagram stream).

This functional cluster specifies an interface to support processing of raw binary data streams. Generally, the term Raw Data Stream is used to represent a raw binary data stream.

A Raw Data Streaming interface is statically defined and dependent on the underlying network protocol. The modeling for the Raw Data Streaming Interface supports the following network protocols:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Raw 数据 Streaming over Ethernet using IP based protocols (网络 layer)
*原文标题：Raw Data Streaming over Ethernet using IP based protocols (network layer)*

Raw Data Streams using IP based protocols use TCP/IP sockets as transport layer. Both unicast and multicast socket connections shall be supported. The TCP/IP sockets can use both TCP or UDP as transport protocol. TCP is the natural choice for Raw Data Streams using IP protocol, since it is a reliable stream oriented protocol. However, UDP shall also be supported when an unreliable connection is acceptable for the application.

The integration of the Raw Data Streaming Interface and Adaptive Applications is done in the deployment phase, by specifying various attributes and parameters for the TCP/IP socket connections that shall be used for the Raw Data Stream which is using IP based protocols.

Secure communication can be achieved by applying TLS or IPSec protocols in the middleware. Also access control imposed by the IAM can be applied for Raw Data Streams using IP based protocols.

### 3. Raw 数据 Streaming over Ethernet using IEEE1722 协议 (数据 link layer)
*原文标题：Raw Data Streaming over Ethernet using IEEE1722 protocol (data link layer)*

Raw Data Streams using IEEE1722 protocol use data link sockets (ISO OSI layer 2) as transport layer. Both MAC unicast and MAC multicast socket connections shall be supported. The data link sockets can use the following IEEE1722 subtypes (specified by ) as transport protocol: AAF, 61883_IIDC, RVF, CRF, TSCF and NTSCF

The integration of the Raw Data Streaming Interface and Adaptive Applications is done in the deployment phase, by specifying various attributes and parameters for the data link socket connections that shall be used for the Raw Data Stream which is using IEEE1722 protocol. A datagram is interchanged between the Raw Data Stream and an application, where the IEEE1722 header information is handled as typed data types and the payload as raw binary data bytes.

Secure communication can be achieved by using MACSec protocol in the middleware. Also access control imposed by the IAM can be applied for Raw Data Streams using IEEE1722 protocol.

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Abbreviation / Acronym: | Description: |
|---|---|
| MAC address | Medium access control address (MAC addresses are used in the medium access control protocol sublayer of the data link layer (ISO OSI layer 2)) |
| IP | Internet Protocol |
| SOME/IP | Scalable service-Oriented MiddlewarE over IP |
| TCP | Transmission Control Protocol |
| UDP | User Datagram Protocol |
| E2E | End-to-end communication protection |
| TLS | Transport Layer Security |
| DTLS | Datagram Transport Layer Security |
| 61883_IIDC | IEC 61883/IIDC format as defined by |
| AAF | AVTP Audio Format as defined by |
| RVF | Raw Video Format as defined by |
| CRF | Control Reference Format as defined by |
| TSCF | Time Sensitive Control Format as defined by |
| NTSCF | None Time Sensitive Control Format as defined by |

### 5. 定义
*原文标题：Definitions*

### 6. MAC unicast socket connection

Definition: A "MAC unicast socket connection" is a communication via a socket (provided by the operation system) that is bound to a data link layer (ISO OSI layer 2), where the used address is a media access control address. Via this address exactly one counter communication partner can be reached (unicast).

### 7. MAC multicast socket connection

Definition: A "MAC multicast socket connection" is a communication via a socket (provided by the operation system) that is bound to a data link layer (ISO OSI layer 2), where the used address is a media access control address. Via this address one or more counter communication partner can be reached (multicast).

### 8. AVTPDU-common-header

Definition: An "AVTPDU-common-header" is defined by  and represents the first 12 bits (subtype (8 bits), header specific (1 bit), version (3 bits) of a AVTPDU-header. The AVTPDU-common-header contains the basic fields that all formats of AVTP stream data subtypes share.

### 9. AVTPDU-common-stream-header

Definition: An "AVTPDU-common-stream-header" is defined by  and expands the AVTPDU-common-header used by a subset of AVTP stream data subtypes (e.g. 61883_IIDC, AAF, TSCF, RVF).

### 10. AVTPDU-common-control-header

Definition: An "AVTPDU-common-stream-header" is defined by  and expands the AVTPDU-common-header used by a subset of AVTP stream data subtypes (e.g. ADP).

### 11. AVTPDU-alternative-header

Definition: An "AVTPDU-alternative-header" is defined by  and used for AVTP stream data subtypes that do not exhibit the commonalities shared between formats that use the AVTPDU-common-stream-header or AVTPDU-common-control-headers. For example, CRF and NTSCF subtypes uses the AVTPDU-alternative-header.

### 12. AVTPDU-payload

Definition: An "AVTPDU-payload" is defined by  and represents the second part of an AVTPDU. The AVTPDU-payload carry data of subtype encoded in the AVTPDU-header. For example, an AAF-payload carry audio data (i.e. audio samples).

### 13. Stream 数据 producer
*原文标题：Stream data producer*

Definition: A "stream data producer" represent an end node in an Ethernet network which produces (continously) data. The data is transmitted via a stream and received by 1 or multiple end nodes (stream data consumer). Note: The term "talker" is synonymous with "stream data producer".

### 14. Stream 数据 consumer
*原文标题：Stream data consumer*

Definition: A "stream data consumer" represent an end node in an Ethernet network which consumes (continously) data. The data is received via a stream. Note: The term "listener" is synonymous with "stream data consumer".

### 15. AVTP presentation time

Definition: The "AVTP presentation time" is defined by  and represents the gPTP time at which designated data within an AVTPDU payload is transferred to a time-sensitive application of an stream data consumer. An AVTPDU-header of header format AVTPDU-common-stream-header carries the presentation time as "avtp_timestamp" according to . AVTP presentation time is calculated as "TavtpPresentationTime" = "TcurrentGlobalTime" + "TmaxTransitTime". Please note: presentation time does not cover format conversion time and processing time of the receiving time-sensitive application (see  figure 6 "Figure 6 - AVTP Timing Reference Planes").

### 16. Max transit time

Definition: "Max transit time" is defined by . The basic method to calculate an appropriate "Max Transit Time" is to take the worst-case transit time from the stream data producer (talker) to a stream data consumer (listener) and choose a max transit time that is greater than or equal to the largest worst-case transit time.

### 17. Media clock

Definition: "Media clock" is defined by  and represents an entity which generate a rate (e.g. precise hardware clock with an constant rate (e.g. 48kHz). The media clock is hosted by the media clock provider.

### 18. Media clock provider

Definition: A "media clock provider" is an end node in the network which hosts an media clock. The media clock provider transmit an IEEE1722 stream to 1 or multiple media clock consumer. The IEEE1722 stream is of subtype CRF (clock reference format) and contain several presentation timestamps which correlates to the media clock rate.

### 19. Media clock consumer

Definition: A "media clock consumer" is an end node in the network which receive a IEEE1722 stream of subtype CRF (clock reference format) from a media clock provider. The media clock consumer perform a recovery of its media clock (e.g. PLL) based on the received encapsulated data from the media clock provider.

### 20. ACF-stream

Definition: An "ACF-stream" represents an IEEE1722 stream of subtype TSCF (time-synchronous control format) or NTSCF(non-time-synchronous control format) which transport encapsulated bus frames as ACF-messages (e.g. `ACF_CAN`) within its AVTPDU-payload (ACF-payload).

### 21. ACF-message

Definition: An "ACF-message" is defined by ) and represents an encapsulated bus frame of a certain kind of bus type (e.g. CAN). The bus frame is encapsulate with an corresponding ACF-message type (e.g. `ACF_CAN`). The ACF-message consist of an ACF-message-header and an ACF-message-payload. Multipe ACF-messages of different ACF-message types could form an ACF-payload which is transported within the same ACF-stream.

### 22. ACF-message-header

Definition: An "ACF-message-header" represents the first part of an ACF-message. The first 7 bits represents the ACF-message type. Several ACF-message types are specified by  (e.g. `ACF_CAN`, `ACF_LIN`). The following 9 bits represents the lenght of the subsequential ACF-message-payload.

### 23. ACF-message-payload

Definition: An "ACF-message-payload" is defined by  and represents the second part of an ACF-message. The ACF-message-payload carry data of ACF-message type encoded in the ACF-message-header. For example, an `ACF_CAN`-payload carry an CAN2.0 frame.

### 24. 相关文档
*原文标题：Related documentation*

### 25. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 26. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

AUTOSAR provides a general specification  which is also applicable for the Raw Data Stream functional cluster. The specification SWS General shall be considered as additional and required specification for implementation of the Raw Data Stream functional cluster.

Currently, the specific requirements for the Raw Data Stream functional cluster are part of .

### 27. 约束与假设
*原文标题：Constraints and assumptions*

### 28. 已知限制
*原文标题：Known limitations*

The current solution does not support any runtime variance in terms of network topology, such as service discovery functionality, which means that the RawDataStreams has to be configured statically on the same ECU as the application. Dynamic configuration and runtime functionality will be added in future releases if needed.

Raw Data Streams do not provide handling of safety protection. Safety communication mechanisms like E2E has to be applied on application level.

### 29. Raw 数据 Streams over Ethernet using IP based protocols (网络 layer)
*原文标题：Raw Data Streams over Ethernet using IP based protocols (network layer)*

The multicast support for Raw Data Streams using IP based protocols is limited to one-to-many, i.e. a server can send data to multiple clients using multicast IP address, but only receive data from one client, using the unicast IP address. Also multicast shall only be used with UDP. For TCP connections, only 1-to-1 connections are supported, i.e. multiple clients to one server is not supported.

### 30. Raw 数据 Streams over Ethernet using IEEE1722 协议 (数据 link layer)
*原文标题：Raw Data Streams over Ethernet using IEEE1722 protocol (data link layer)*

A Raw Data Streams using IEEE1722 protocol support the following IEEE1722 subtypes (specified by ) as transport protocol: AAF, 61883_IIDC, RVF, CRF, TSCF and NTSCF. Support of other subtypes specified by  may be added in future.

### 31. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 32. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| No provided interfaces | < | < |

### 33. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

Figure  shows interfaces required by Raw Data Stream functional cluster from other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of required interfaces from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Cryptography | CryptoStack | This interface may be used to establish encrypted connections. |
| Log and Trace | Logger | Raw Data Stream uses this interface to log standardized messages. |
| Time Synchronization | SynchronizedTimeBaseConsumer | This interface is used to determine the current synchronized global time for IEEE1722-based communication. |

### 34. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in the Requirements on Communication Management document , the General Requirements specific to Adaptive Platform , and the Requirements on IEEE1722 , and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| IEEE1722Tp module handling of IEEE1722 streams |  |  |
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Usage of ara::core types |  |  |
| Public types defined by functional clusters shall be designed to allow implementation without dynamic memory allocation |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| Availability of special member functions |  |  |
| Classes whose construction requires interaction by the ARA framework |  |  |
| Classes that are created with an InstanceSpecifier as an argument are not copyable, but at most movable. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 功能规范
*原文标题：Functional specification*

### 36. Raw 数据 Streaming using IP based protocols (网络 layer)
*原文标题：Raw Data Streaming using IP based protocols (network layer)*

### 37. Raw 数据 Streaming 接口
*原文标题：Raw Data Streaming Interface*

The operations of the interface are synchronous. The default behavior is blocking, but a timeout handling shall be implemented to return the call with an error if the operation takes too long. The timeout values are applied as parameters to each operation. See the description for each operation below on how the timeout handling is applied.

The configuration of the Raw Data Streams is done by specifying credentials and parameters for the socket connections that shall be used for the Raw Data Stream, using RawDataStreamMapping and EthernetRawDataStreamMapping. The model elements and the parameters are described in `TPS_ManifestSpecification` .

Secure communication can be achieved by applying TLS or IPSec protocols in the middleware. Also access control imposed by the IAM can be applied for Raw Data Streams. All security functions are configurable in the deployment and mapping model of Raw Data Streaming Interface, see `TPS_ManifestSpecification` .

All security functions (TLS, IPSec, IAM) are configurable in the deployment and mapping model of Raw Data Streaming Interface, see `TPS_ManifestSpecification` .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Use cases

The RawDataStream interface can be used in the following set-ups:

* Client (connect to) to an external non-AUTOSAR sensor providing raw data on a socket connection.
* Server (wait for a connection from) for an external non-AUTOSAR sensor providing raw data on a socket connection.
* Client or Server for another AUTOSAR external RawDataStream instance.

RawDataStream socket connections can be setup for UDP or TCP, Unicast or Multicast. Currently the use cases in fig  are supported.

See chapter  for information on the ethernet socket configuration parameters for the different use cases.

### 39. Raw 数据 Streaming
*原文标题：Raw Data Streaming*

For the IP based Raw Data Stream C++ API reference, see chapter .

 Defining a RawDataStream
  Upstream requirements: , ,
⌈
To open a RawDataStream connection a RawDataStream instance is created. The constructor creates the necessary socket data structures for RawDataStream Communication, using the artifacts specified in the mapped EthernetRawDataStreamClientMapping and EthernetRawDataStreamServerMapping.
⌋

The functionality of a RawDataStream for Client communication is realized in these four operations: Connect, Shutdown, ReadData and WriteData. A RawDataStream for Server Communication is realized in these four operations: WaitForConnection, Shutdown, ReadData and WriteData.

 Connect stream link
  Upstream requirements: , ,
⌈
Each invocation of the Connect operation for a TCP socket connection shall establish a communication link with a remote server that is listening for socket connections, The socket created in the RawDataStream instance shall be used for the connection. For UDP socket connections Connect shall do nothing.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Security

### 41. Access 控制 via IAM
*原文标题：Access Control via IAM*

Restrictions on using RawDataStreams
  Upstream requirements:
⌈
If a Process calls

* the RawDataStreamClient::Create() constructor (see )

or

* the RawDataStreamServer::Create() constructor (see )

providing an InstanceSpecifier that does not identify a RPortPrototype referenced by a RawDataStreamMapping in the role portPrototype, that is mapped to the requesting Process in the role process, then this shall be treated as a violation.
⌋

### 42. Secure Communication

Raw Data Strem communication can be transported via TCP and UDP. Therefore different security mechanisms is available to secure the communication. The following security protocols are currently supported:

* TLS 1.2 (see )
* DTLS 1.2 (see )
* IPSec

### 43. Creation and use of secure channels for Raw 数据 Streaming
*原文标题：Creation and use of secure channels for Raw Data Streaming*

Secure UDP and TCP channel creation for TLS and DTLS
  Upstream requirements:
⌈
The Raw Data Stream software shall create secure UDP and TCP channels according to the input for all TlsSecureComProps as part of the EthernetRawDataStreamMapping.
⌋

 Using secure TLS, DTLS channels
  Upstream requirements: ,
⌈
All communication triggered by a RawDataStream shall be sent via the respective secure channel according to the input. The appropriate secure channel is defined in the TlsSecureComProps as part of the EthernetRawDataStreamMapping that is mapped to an EthernetCommunicationConnector.
⌋

### 44. (D)TLS for Raw 数据 Streaming
*原文标题：(D)TLS for Raw Data Streaming*

A (D)TLS secure channel may provide authenticity, integrity and confidentiality which may be used with raw data streaming.

The TLS and DTLS implementation should support the following cipher suites:

* `TLS_PSK_WITH_NULL_SHA256` for authentic communication (see ).
* `TLS_PSK_WITH_AES_128_GCM_SHA256` for confidential communication (see ).

 TLS secure channel for raw data streams using reliable transport
  Upstream requirements:
⌈
A TLS secure channel shall be created and used if

* a TlsSecureComProps instance is part of a EthernetRawDataStreamMapping and is configured for transmission over "tcp" by assigning a localTcpPort in the EthernetRawDataStreamMapping.
⌋

 DTLS secure channel for methods using unreliable transport
  Upstream requirements:
⌈
A DTLS secure channel shall be created and used if:

* a TlsSecureComProps instance is part of a EthernetRawDataStreamMapping and is configured for transmission over "udp" by assigning a localUdpPort in the EthernetRawDataStreamMapping.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Raw 数据 Stream 接口
*原文标题：Raw Data Stream Interfaces*

See chapter  for the different use cases that are supported.

### 46. Creation of a RawDataStream

Creation of RawDataStreamClient instance
  Upstream requirements: , ,
⌈
A RawDataStream instance on the client side (RawDataStreamClient object) is created by calling the named exception-less RawDataStreamClient::Create() constructor takes an instance Specifier qualifying the wanted network binding and parameters for the instance.

If Remote Unicast Credentials (TCP or UDP) are defined for the client, the constructor shall create an endpoint for the communication, and store the handle in the created RawDataStreamClient object, to be used in the Read- and Write-operations for the RawDataStreamClient (for 1:1 use cases).

If Multicast Credentials (UDP) are defined for the client, the constructor shall create an endpoint for the communication, bind and join the multicast address and port specified in the MulticastCredentials.

For 1:N use cases this endpoint shall be used when RawDataStreamsClient.ReadData() is called, otherwise (for 1:1 use cases), the unicast endpoint shall be used for reading data.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Set up a RawDataStream connection

Setup RawDataStreamClient connection
  Upstream requirements: , ,
⌈
The RawDataStreamClient::Connect() function sets up a unicast socket connection for the RawDataStream defined by the instance, and establishes a connection to the TCP server.

In the case of UDP, no connection is established. Incoming and outgoing packets are restricted to the specified address. The socket endpoints and attributes are specified in the manifest which is accessed through the InstanceSpecifer provided in the constructor. If TLS security protocol is configured for the socket connection, the TLS/DTLS connection shall be initialized here.
⌋

 Connect RawDataStreamServer to incoming connection
  Upstream requirements: , ,
⌈
The RawDataStreamServer::WaitForConnection() function enables to setup the RawDataStreamServer instance for incoming connections.

For TCP the constructor marks the socket as ready to accept connection requests from a client, and WaitForConnection() waits to accept an incoming connection request.

In the case of UDP, no connection is established, and the operation shall return with no action.
⌋

### 48. 关机 of a RawDataStream connection
*原文标题：Shutdown of a RawDataStream connection*

Shutdown RawDataStreamClient connection
  Upstream requirements: , ,
⌈
The RawDataStreamClient::ShutDown() function closes the socket connection for the RawDataStream defined by the instance. Both the receiving and the sending part of the socket connection shall be shut down.

For TCP, the full-duplex connection shall be shut down disallowing further receptions and transmissions, before closing the socket.
⌋

 Shutdown RawDataStreamServer connection
  Upstream requirements: , ,
⌈
The RawDataStreamServer::ShutDown() function closes the socket connection for the RawDataStream defined by the instance. Both the receiving and the sending part of the socket connection shall be shut down.

For TCP, the full-duplex connection shall be shut down disallowing further receptions and transmissions, before closing the socket.
⌋

### 49. Read 数据 from a RawDataStream connection
*原文标题：Read data from a RawDataStream connection*

Read data from a RawDataStreamClient connection
  Upstream requirements: , ,
⌈
The RawDataStreamClient::ReadData() function requests to read a number of bytes of data from the socket connection for the RawDataStream defined by the instance.

If Multicast Credentials are defined for the client, the data shall be read from the multicast socket created in the constructor (for 1:N use cases), otherwise the data shall be read from the unicast TCP socket connection set up in Connect() (for 1:1 TCP unicast use case), or the unicast UDP socket created in the constructor (for 1:1 UDP unicast use case).

For efficiency, the zero-copy semantics of std::unique_ptr is used, which means that the ownership of the allocated memory of the read data is transferred to the application in the Read DataResult.data value.
⌋

 Read data from a RawDataStreamServer connection
  Upstream requirements: , ,
⌈
The RawDataStreamServer::ReadData() function requests to read a number of bytes of data from the Unicast socket connection for the RawDataStream defined by the instance.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 50. Write 数据 to a RawDataStream connection
*原文标题：Write data to a RawDataStream connection*

Write data to a RawDataStreamClient connection
  Upstream requirements: , ,
⌈
The RawDataStreamClient::WriteData() function requests to write of a number of bytes to the the socket connection for the RawDataStream defined by the instance (for 1:1 use cases).

If Multicast Credentials are defined for the client reading of data, a single socket can be used for both multicast reading and unicast writing (for use case 1:N UDP + 1:1 UDP, Server sends data via multicast, and a client sends control data via unicast). For efficiency, the zero-copy semantics of std::unique_ptr is used.
⌋

 Write data to a RawDataStreamServer connection
  Upstream requirements: , ,
⌈
The RawDataStreamClient::WriteData() function requests to write a number of bytes to the the socket connection for the RawDataStream defined by the instance.

If Remote Multicast Credentials are defined for the server, the data shall be written to the multicast socket created in the constructor (for 1:N use cases). Otherwise in case of TCP, the data shall be written to the unicast socket connection set up in WaitForConnection() (for 1:1 TCP unicast use case ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. Raw 数据 Streaming using IEEE1722 协议 (数据 link layer)
*原文标题：Raw Data Streaming using IEEE1722 protocol (data link layer)*

### 52. Raw 数据 Streaming 接口
*原文标题：Raw Data Streaming Interface*

The operations of the Raw Data Streaming interface using IEEE1722 protocol are synchronous and therefore performed as blocking operation calls.

The configuration of the Raw Data Streams using IEEE1722 protocol is done by specifying parameters for the data link layer socket connections that shall be used for the communication via an IEEE1722 stream, using RawDataStreamMapping and EthernetMacRawDataStreamMapping. The model elements and the parameters are described in `TPS_ManifestSpecification` .

Secure communication can be achieved by using MACSec protocols in the middleware. Also access control imposed by the IAM can be applied for Raw Data Streams. All security functions (MACSec, IAM) are configurable in the deployment and mapping model of Raw Data Streaming Interface, see `TPS_ManifestSpecification` .

An application can use the Raw Data Streaming API both as a IEEE1722 stream consumer (consuming data from an IEEE1722 stream) or IEEE1722 stream producer (producing data for an IEEE1722 stream).

Figure  shows the logical view of the usage of Raw Data Streaming instances using IEEE1722 protocol.

### 53. Use cases

The Raw data stream interface supporting IEEE1722 protocol can be used in the following set-ups:

* IEEE1722 stream consumer which consumes data from an IEEE1722 stream via a data link layer socket connection.
* IEEE1722 stream producer which produces data to an IEEE1722 stream via a data link layer socket connection.

Data link layer sockets can be setup for a communication based on the IEEE1722 protocol. Currently the following use cases are supported:

* 1:1 communication mapping, where one IEEE1722 stream producer and one IEEE1722 stream consumer is connected to one IEEE1722 stream (e.g. video stream, where data is produced by one video device and data is consumed by one display).
* 1:n communication mapping, where one IEEE1722 stream producer and multiple IEEE1722 stream consumers are connected to one IEEE1722 stream (e.g. audio stream, where data is produced by a audio device and data it consumed by multiple speakers).
* n:1 communication mapping, where multiple IEEE1722 stream producer and one IEEE1722 stream consumers are connected to one IEEE1722 stream (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 127 章（内容从略，见纯文本全文）

54. Raw 数据 Streaming
55. Security
56. Access 控制 via IAM
57. Secure Communication
58. Raw 数据 Streaming 接口
59. Consume IEEE1722 stream 数据
60. AVTPDU-header inspection
61. Produce IEEE1722 stream 数据
62. AVTPDU-header creation
63. Treatment of shared AVTPDU-header fields
64. AVTPDU-common-header fields
65. AVTPDU-common-stream-header fields
66. AVTPDU-alternative-header fields
67. 61883_IIDC-header fields
68. AAF-header fields
69. ACF-header fields
70. CRF-header fields
71. RVF-header fields
72. 错误处理 for consuming or producing IEEE1722 stream 数据
73. 功能性 cluster lifecycle
74. 启动
75. 关机
76. Reporting
77. 安全事件
78. Log Messages
79. Violation Messages
80. Production Errrors
81. API 规范
82. PortInterface to API class binding
83. Header：ara/rds/raw_data_stream.h
84. Class：RawDataStreamClient
85. Public Member Functions
86. Special Member Functions
87. Member Functions
88. Named Constructors
89. Class：RawDataStreamServer
90. Public Member Functions
91. Special Member Functions
92. Member Functions
93. Named Constructors
94. Struct：ReadDataResult
95. Public Member Variables
96. Header：ara/rds/raw_data_stream_IEEE1722.h
97. Class：IEEE1722Datagram
98. Protected Member Variables
99. Public Member Functions
100. Special Member Functions
101. Class：IEEE1722Datagram61883_IIDC
102. Protected Member Variables
103. Public Member Functions
104. Special Member Functions
105. Class：IEEE1722DatagramAAF
106. Protected Member Variables
107. Public Member Functions
108. Special Member Functions
109. Class：IEEE1722DatagramAVTPDUCommonHeaderFields
110. Protected Member Variables
111. Public Member Functions
112. Special Member Functions
113. Class：IEEE1722DatagramAVTPDUCommonStreamHeaderFields
114. Protected Member Variables
115. Public Member Functions
116. Special Member Functions
117. Class：IEEE1722DatagramCRF
118. Protected Member Variables
119. Public Member Functions
120. Special Member Functions
121. Class：IEEE1722DatagramNTSCF
122. Protected Member Variables
123. Public Member Functions
124. Special Member Functions
125. Class：IEEE1722DatagramRVF
126. Protected Member Variables
127. Public Member Functions
128. Special Member Functions
129. Class：IEEE1722DatagramTSCF
130. Public Member Functions
131. Special Member Functions
132. Class：IEEE1722RawDataStreamConsumer
133. Public Member Functions
134. Special Member Functions
135. Member Functions
136. Named Constructors
137. Class：IEEE1722RawDataStreamProducer
138. Public Member Functions
139. Special Member Functions
140. Member Functions
141. Named Constructors
142. Header：ara/rds/rds_error_domain.h
143. Non-Member 类型
144. Non-Member Functions
145. Other
146. Class：RdsErrorDomain
147. Public Member 类型
148. Public Member Functions
149. Special Member Functions
150. Member Functions
151. Class：RdsException
152. Public Member Functions
153. Constructors
154. 服务接口
155. 配置
156. Default Values
157. Semantic Constraints
158. 附录
159. Mentioned 清单 Elements
160. Demands and constraints on Base 软件 (normative)
161. Platform Extension 接口 (normative)
162. Not implemented 需求
163. History of Constraints and 规范 Items
164. Constraint and 规范 Item Changes between AUTOSAR Release R24-11 and R25-11
165. Added 规范 Items in R25-11
166. Changed 规范 Items in R25-11
167. Deleted 规范 Items in R25-11
168. Added Constraints in R25-11
169. Changed Constraints in R25-11
170. Deleted Constraints in R25-11
171. Constraint and 规范 Item Changes between AUTOSAR Release R23-11 and R24-11
172. Added 规范 Items in R24-11
173. Changed 规范 Items in R24-11
174. Deleted 规范 Items in R24-11
175. Added Constraints in R24-11
176. Changed Constraints in R24-11
177. Deleted Constraints in R24-11
178. Added 规范 Items in R23-11
179. Changed 规范 Items in R23-11
180. Deleted 规范 Items in R23-11
