# SOME/IP Protocol Specification (`SOMEIPProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 696 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_SOMEIPProtocol_696\AUTOSAR_FO_PRS_SOMEIPProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_SOMEIPProtocol_696\AUTOSAR_FO_PRS_SOMEIPProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_SOMEIPProtocol_696\zzgen\FO_PRS_SOMEIPProtocol.complete.txt`

## 文档简介

This protocol specification specifies the format, message sequences and semantics of the AUTOSAR Protocol "Scalable service-Oriented MiddlewarE over IP (SOME/IP)".

SOME/IP is an automotive/embedded communication protocol which supports remote procedure calls, event notifications and the underlying serialization/wire format. The only valid abbreviation is SOME/IP. Other abbreviations (e.g. Some/IP) are wrong and shall not be used.

## 模块依赖

There are no dependencies to AUTOSAR SWS modules.

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

This protocol specification specifies the format, message sequences and semantics of the AUTOSAR Protocol "Scalable service-Oriented MiddlewarE over IP (SOME/IP)".

SOME/IP is an automotive/embedded communication protocol which supports remote procedure calls, event notifications and the underlying serialization/wire format. The only valid abbreviation is SOME/IP. Other abbreviations (e.g. Some/IP) are wrong and shall not be used.

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

SOME/IP was created as existing solutions were not compatible to automotive use cases as well as incompatible to the AUTOSAR Classic Platform architecture. The major design goals were as follows:

* Fulfills the hard requirements regarding resource consumption of embedded ECUs
* Is compatible through as many use-cases and communication partners as possible
* Compatible with AUTOSAR at least on the wire-format level; i.e., SOME/IP was introduced with minimal architecture changes in the AUTOSAR Classic Platform.
* Provides the features required by automotive use-cases
* Is scalable from tiny to large platforms

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

SOME/IP shall be implemented on different operating system (i.e., AUTOSAR, GENIVI/COVESA, and OSEK) and even embedded devices without operating system. SOME/IP shall be used for inter-ECU Client/Server Serialization. An implementation of SOME/IP allows AUTOSAR to parse the RPC PDUs and transport the parameters to the application.

### 4. 约束与假设
*原文标题：Constraints and assumptions*

The "Support for serialization of extensible data structs" has been introduced - which SOME/IP serializers based on AUTOSAR Foundation Standard 1.0.0 (AUTOSAR Classic Standard 4.3.0) as well as most non-AUTOSAR implementations cannot process. To indicate this interoperability issue  requires to increase the major interface version of the respective serialized data.

The support for "complementary default value" during reception of less data than expected is no longer supported by AUTOSAR.

### 5. 限制
*原文标题：Limitations*

Reordering limitation for a SOME/IP message segment
⌈
Reordering of out-of-order segments of a SOME/IP message is not supported.
⌋

### 6. Dependencies

There are no dependencies to AUTOSAR SWS modules.

### 7. 文档结构
*原文标题：Document Structure*

The SOME/IP PRS will describe the following two aspects of SOME/IP.

Specification of SOME/IP on wire-format (Serialization)

* Structure of Header Format
* How the different data types are serialized as per SOME/IP

Specification of Protocol for Event and RPC-based communication

* Transport Protocol
* Rules that govern the RPC for SOME/IP

In addition to this document, the PRS SOME/IP-SD  describes the Service Discovery and other functionalities of SOME/IP.

### 8. Use Cases

| ID | Name | Description |
|---|---|---|
| UC_SOMEIP_00001 | Remote Procedure Call: Request/Response Methods | A Client application sends request to the server application and expects back a response from Server application. A Server application sends back response to the Client application on receiving a request. |
| UC_SOMEIP_00002 | Remote Procedure Call: Fire and Forget Methods | A Client application sends request to the server application and does not expect any response. |
| UC_SOMEIP_00003 | Event based communication | A Server application sends events to relevant client applications that are determined via SOME/IP-SD. |
| UC_SOMEIP_00004 | Field based communication | Applications communicate using fields that can have an optional notifier (event to be sent cyclically or on-change), an optional setter (a request/response method to update the field), and an optional getter (a request/response method to read out the current value of the field). |
| UC_SOMEIP_00005 | Communication using various transport protocols | Applications communicate over UDP or TCP as an underlying transport protocol. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 协议需求
*原文标题：Protocol Requirements*

### 10. 需求 Traceability
*原文标题：Requirements Traceability*

| Requirement | Description | Satisfied by |
|---|---|---|
| SOME/IP protocol shall provide service-based communication |  |  |
| SOME/IP protocol shall provide support of multiple versions of a service interface |  |  |
| SOME/IP protocol shall support event communication |  |  |
| SOME/IP protocol shall support different strategies for event communication |  |  |
| SOME/IP protocol shall support uni-directional RPC communication |  |  |
| SOME/IP protocol shall support bi-directional RPC communication |  |  |
| SOME/IP protocol shall support error handling of RPC communication |  |  |
| SOME/IP protocol shall support field communication |  |  |
| SOME/IP protocol shall support different transport protocols underneath |  |  |
| SOME/IP protocol shall support messages of different lengths |  |  |
| SOME/IP protocol shall support session handling |  |  |
| SOME/IP protocol shall support handling of protocol errors on receiver side |  |  |
| SOME/IP protocol shall support multiple instances of a service |  |  |
| SOME/IP protocol shall support combining multiple RPC methods, events and fields in one service |  |  |
| SOME/IP protocol shall support grouping events into eventgroups |  |  |
| SOME/IP protocol shall support grouping fields in eventgroups |  |  |
| SOME/IP protocol s |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the SOME/IP specification that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Byte Order Mark | The byte order mark (BOM) is a Unicode character, U+FEFF byte order mark (BOM), whose appearance as a magic number at the start of a text stream is used to indicate the used encoding. |
| Method | A method, procedure, function, or subroutine that is called/invoked. |
| Parameters | input, output, or input/output arguments of a method or an event |
| Remote Procedure Call (RPC) | A method call from one ECU to another that is transmitted using messages |
| Request | a message of the client to the server invoking a method |
| Response | a message of the server to the client transporting results of a method invocation |
| Request/Response communication | a RPC that consists of request and response |
| Event | A uni-directional data transmission that is only invoked on changes or cyclically and is sent from the producer of data to the consumers. |
| Field | A field does represent a status and thus has an valid value at all times on which getter, setter and notifier act upon. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 协议规范
*原文标题：Protocol specification*

SOME/IP provides service oriented communication over a network. It is based on service definitions that list the functionality that the service provides. A service can consist of combinations of zero or multiple events, methods and fields.

Events provide data that are sent cyclically or on change from the provider to the subscriber.

Methods provide the possibility to the subscriber to issue remote procedure calls which are executed on provider side.

Fields are combinations of one or more of the following three

* a notifier which sends data from the provider to the subscribers on change, on epsilon change, or cyclically based on configuration.
* a getter which can be called by the subscriber to explicitly query the provider for the value
* a setter which can be called by the subscriber when it wants to change the value on provider side

The major difference between the notifier of a field and an event is that events are only sent on change, the notifier of a field additionally sends the data directly after subscription.

### 13. 规范 of SOME/IP Message Format (Serialization)
*原文标题：Specification of SOME/IP Message Format (Serialization)*

Serialization describes the way data is represented in protocol data units (PDUs) as payload of either UDP or TCP messages, transported over an IP-based automotive in-vehicle network.

### 14. Header

Upstream requirements:
⌈
The structure of header layout shall consist of

* Message ID (Service ID/Method ID)
* Length
* Request ID (Client ID/Session ID)
* Protocol Version
* Interface Version
* Message Type
* Return Code
⌋

 is shown in .

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Message ID (Service ID / Method ID) | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < |
| Length | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < |
| Request ID (Client ID / Session ID) | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < |
| Protocol Version | < | < | < | < | < | < | < | Interface version | < | < | < | < | < | < | < | Message Type | < | < | < | < | < | < | < | Return Code | < | < | < | < | < | < | < |
| Payload | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < |

  Upstream requirements:
⌈
In case of E2E communication protection being applied, the E2E header is placed after Return Code, depending on the chosen Offset value for the E2E header.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Message ID [32 Bit

]

  Upstream requirements: , , ,
⌈
The Message ID shall be a 32 Bit identifier that is used to identify

* the RPC call to a method of an application
* or to identify an event.
⌋

Note: The assignment of the Message ID is up to the user / system designer. However, the Message ID is assumed be unique for the whole system (i.e. the vehicle).

### 16. Method ID [16 Bit

]

  Upstream requirements: ,
⌈
The Message ID header field shall be structured into a 16 Bit Service ID header field (to distinguish up to 2^{16} services) and a 16 bit Method ID header field to distinguish up to 2^{16} service elements (namely methods and/or events). This structuring of the Message ID header field is illustrated as shown in .
⌋

Note: It is common practice and recommended to split the ID space of the Method ID between Methods and Events/Notifications. Methods would be in the range 0x0000-0x7FFF (first bit of Method-ID is 0) and Events/Notifications would use the range 0x8000-0x8FFF (first bit of the Method-ID is 1).

 Message ID header field
  Upstream requirements: ,
⌈
| Service ID | Method ID |
|---|---|

⌋

Eventgroup is a logical grouping of events and notification events of fields inside a service in order to allow subscription.

  Upstream requirements: ,
⌈
A SOME/IP Eventgroup shall at least contain one event.
⌋

  Upstream requirements: , , ,
⌈
Events as well as field notifiers shall be mapped to at least one SOME/IP Eventgroup.
⌋

### 17. Length [32 Bit

]

  Upstream requirements: ,
⌈
Length field shall contain the length in Byte starting from Request ID/Client ID until the end of the SOME/IP message.
⌋

### 18. Request ID [32 Bit

]

The Request ID allows a server and client to differentiate multiple parallel uses of the same method, getter or setter.

  Upstream requirements: ,
⌈
The Request ID shall be unique for a request-response pair to differentiate between multiple calls of the same method.
⌋

  Upstream requirements:
⌈
When generating a response message, the provider shall copy the Request ID from the request to the response message.
⌋

Note: This allows the client to map a response to the issued request even with more than one request outstanding.

  Upstream requirements:
⌈
Request IDs must not be reused until the response has arrived or is not expected to arrive anymore (timeout).
⌋

### 19. 结构 of the Request ID
*原文标题：Structure of the Request ID*

Request ID
  Upstream requirements:
⌈
| Client ID | Session ID |
|---|---|

⌋

Note: This means that the implementer of an ECU can define the Client-IDs as required by his implementation and the provider does not need to know this layout or definitions because he just copies the complete Request-ID in the response.

  Upstream requirements: ,
⌈
The Client ID is the unique identifier for the calling client inside the ECU. The Client ID allows an ECU to differentiate calls from multiple clients to the same method.
⌋

  Upstream requirements: , ,
⌈
The Session ID is a unique identifier that allows to distinguish sequential messages or requests originating from the same sender from each other.
⌋

  Upstream requirements: ,
⌈
The Client ID shall also support being unique in the overall vehicle by having a configurable prefix or fixed value (e.g. the most significant byte of Client ID being the diagnostics address or a configured Client ID for a given application/SW-C).
⌋

For example:

| Client ID Prefix | Client ID | Session ID |
|---|---|---|

  Upstream requirements:
⌈
In case Session Handling is not active, the Session ID shall be set to 0x00.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 协议 Version [8 Bit
*原文标题：Protocol Version [8 Bit*

]

The Protocol Version identifies the used SOME/IP Header format (not including the Payload format).

  Upstream requirements: ,
⌈
Protocol Version shall be an 8 Bit field containing the SOME/IP protocol version.
⌋

  Upstream requirements: ,
⌈
The Protocol Version shall be increased, for all incompatible changes in the SOME/IP header. A change is incompatible if a receiver that is based on an older Protocol Version would not discard the message and process it incorrectly.

Note: The Protocol Version will not be increased for changes that only affect the payload format.
⌋

Note: Message processing and error handling is defined in chapter 4.2.6.3 (error processing overview)

  Upstream requirements: ,
⌈
The Protocol Version shall be 1.
⌋

### 21. 接口 Version [8 Bit
*原文标题：Interface Version [8 Bit*

]

  Upstream requirements: ,
⌈
Interface Version shall be an 8 Bit field that contains the Major Version of the Service Interface.
⌋

### 22. Message 类型 [8 Bit
*原文标题：Message Type [8 Bit*

]

 Message Type field
  Upstream requirements: ,
⌈
| Number | Value | Description |  |  |  |
|---|---|---|---|---|---|
| 0x00 |  |  | REQUEST |  | A request expecting a response (even void) |
| 0x01 |  |  | REQUEST_NO_RETURN |  | A fire&forget request |
| 0x02 |  |  | NOTIFICATION |  | A request of a notification/event callback expecting no response |
| 0x80 |  |  | RESPONSE |  | The response message |
| 0x81 |  |  | ERROR |  | The response containing an error |
| 0x20 |  |  | TP_REQUEST |  | A TP request expecting a response (even void) |
| 0x21 |  |  | TP_REQUEST_NO_RETURN |  | A TP fire&forget request |
| 0x22 |  |  | TP_NOTIFICATION |  | A TP request of a notification/event callback expecting no response |
| 0xa0 |  |  | TP_RESPONSE |  | The TP response message |
| 0xa1 |  |  | TP_ERROR |  | The TP response containing an error |

⌋

  Upstream requirements: ,
⌈
Regular request (message type 0x00) shall be answered by a response (message type 0x80) with return code 0x00 (E_OK) when no error occurred. If error occurs, then either a response message (message type 0x80) or an error message (message type 0x81) with return code not equal to 0x00 (E_OK) shall be sent.
⌋

Note: Refer  and , that describe when messages with message type response and message type error can be sent.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Return 代码 [8 Bit
*原文标题：Return Code [8 Bit*

]

  Upstream requirements: ,
⌈
The Return Code shall be used to signal whether a request was successfully processed. For simplification of the header layout, every message transports the field Return Code. The allowed Return Codes for specific message types are shown .
⌋

 Return Codes
  Upstream requirements: ,
⌈
| Message Type | Allowed Return Codes |
|---|---|
| REQUEST | N/A set to 0x00 (E_OK) |
| REQUEST_NO_RETURN | N/A set to 0x00 (E_OK) |
| NOTIFICATION | N/A set to 0x00 (E_OK) |
| RESPONSE | See Return Codes in |
| ERROR | See Return Codes in . Shall not be 0x00 (E_OK). |

⌋

### 24. Payload [variable size

]

In the payload field the parameters are carried. The serialization of the parameters will be specified in the following section.

The size of the SOME/IP payload field depends on the transport protocol used.

 SOME/IP payload size using UDP
  Upstream requirements: ,
⌈
With UDP the SOME/IP payload size should be between 0 and 1400 Bytes. Payload sizes greater than 1400 Bytes should be supported with TCP and segmentation of payload (see also ).
⌋

Note: The recommendation to 1400 Bytes improves change compatibility on the protocol stack (e.g. changing to IPv6 or adding security means).

Payload might consists of data elements for events or parameters for methods.

### 25. Endianness

Upstream requirements:
⌈
All SOME/IP Header Fields shall be encoded in network byte order (big endian).
⌋

  Upstream requirements:
⌈
The following fields in the payload of SOME/IP messages shall be encoded in network byte order (big endian):

* the optional length field of extensible structs (),
* the TLV tag () and the length field () of structured datatypes and arguments with identifier and optional members,
* the optional length field for fixed length strings (),
* the length field for dynamic length strings (),
* the optional length field for extensible fixed length arrays (),
* the length field of dynamic length arrays (),
* the length field of unions (),
* and the type field of unions ().
⌋

  Upstream requirements:
⌈
The byte order of the parameters inside the payload shall be determined by configuration parameter `BYTE_ORDER` in the allowed values according to the 'Allowed Range or Values' column in . If not configured explicitly via the configuration parameter `BYTE_ORDER`, the default value defined in  shall be used as the byte order of the parameters.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Serialization of 数据 Structures
*原文标题：Serialization of Data Structures*

The serialization is based on the parameter list defined by the interface specification. The interface specification defines the exact position of all data structures in the PDU and has to consider the memory alignment.

Alignment is used to align the beginning of data by inserting padding elements after the data in order to ensure that the aligned data starts at certain memory addresses.

There are processor architectures which can access data more efficiently (i.e. master) when they start at addresses which are multiples of a certain number (e.g multiples of 32 Bit).

  Upstream requirements: ,
⌈
Alignment of data shall be realized by inserting padding elements after the variable size data if the variable size data is not the last element in the serialized data stream.
⌋

Note: Please note that the padding value is not defined.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 基础 Datatypes
*原文标题：Basic Datatypes*

Supported basic Data Types
  Upstream requirements: , ,
⌈
| Type | Description | Size | Remark |
|---|---|---|---|
| boolean | TRUE/FALSE value | 8 | FALSE (0), TRUE (1) |
| uint8 | unsigned Integer | 8 |  |
| uint16 | unsigned Integer | 16 |  |
| uint32 | unsigned Integer | 32 |  |
| uint64 | unsigned Integer | 64 |  |
| sint8 | signed Integer | 8 |  |
| sint16 | signed Integer | 16 |  |
| sint32 | signed Integer | 32 |  |
| sint64 | signed Integer | 64 |  |
| float32 | floating point number | 32 | IEEE 754 binary32 (Single Precision) |
| float64 | floating point number | 64 | IEEE 754 binary64 (Double Precision) |

⌋

The Byte Order is specified for each parameter by configuration.

  Upstream requirements: , ,
⌈
For the evaluation of a Boolean value only the lowest bit of the uint8 is interpreted and the rest is ignored.
⌋

### 28. Structured Datatypes (structs)

The serialization of a struct shall be close to the in-memory layout. This means, only the parameters shall be serialized sequentially into the buffer. Especially for structs it is important to consider the correct memory alignment.

Example:

  Upstream requirements:
⌈
The SOME/IP implementation shall not automatically insert dummy/padding data.
⌋

  Upstream requirements: ,
⌈
A length field may be inserted in front of the Struct depending on the configuration parameter `SIZE_OF_STRUCT_LENGTH_FIELD` in the allowed range according to the 'Allowed Range or Values' column in . If not configured explicitly via the configuration parameter `SIZE_OF_STRUCT_LENGTH_FIELD`, the default value defined in  shall be used for the length of the length field.
⌋

  Upstream requirements: ,
⌈
The length field of the struct shall describe the number of bytes this struct occupies for SOME/IP transport.
⌋

  Upstream requirements: ,
⌈
The serialization of structs shall follow the depth-first-traversal of the structured data type.
⌋

### 29. Structured Datatypes and Arguments with Identifier and optional members ('TLV')

To achieve enhanced forward and backward compatibility, an additional Data ID can be added in front of struct members or method arguments. The receiver then can skip unknown members/arguments, i.e. where the Data ID is unknown. New members/arguments can be added at arbitrary positions when Data IDs are transferred in the serialized byte stream.

Moreover, the usage of Data IDs allows describing structs and methods with optional members/arguments. Whether a member/argument is optional or not, is defined in the data definition.

Whether an optional member/argument is actually present in the struct/method or not, must be determined during runtime. How this is realized depends on the used programming language or software platform (e.g. using a special available flag, using a special method, using pointers which might be null, ...).

  Upstream requirements:
⌈
A Data ID shall be unique within the direct members of a struct or arguments of a method.
⌋

Note: Please note that a Data ID does not need to be unique across different structs or methods.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 示例 for serializing structures with tags
*原文标题：Example for serializing structures with tags*

### 31. 示例 for serialization of arguments with tags
*原文标题：Example for serialization of arguments with tags*

Note: In the example Figure  there is no additional length field between the end of the SOME/IP header and the first tag. This would be redundant to the message length field in the SOME/IP header.

### 32. Strings

Following requirements are common for both fixed length and dynamic length strings.

  Upstream requirements:
⌈
Unicode encoding shall be determined by configuration parameter `STRING_ENCODING`.Different unicode encodings shall be supported according to the 'Allowed Range or Values' column in .If not configured explicitly via the configuration parameter `STRING_ENCODING`, the default value defined in  shall be used as the string encoding.
⌋

  Upstream requirements:
⌈
UTF-8 strings shall be zero terminated with a "\0" character. This means they shall end with a 0x00 Byte.
⌋

  Upstream requirements:
⌈
UTF-16LE and UTF-16BE strings shall be zero terminated with a "\0" character. This means they shall end with (at least) two 0x00 Bytes.
⌋

  Upstream requirements:
⌈
UTF-16LE and UTF-16BE strings shall have an even length.
⌋

  Upstream requirements:
⌈
UTF-16LE and UTF-16BE strings having an odd length the last byte shall be ignored.
⌋

  Upstream requirements:
⌈
All strings shall always start with a Byte Order Mark (BOM) in the first three (UTF-8) or two (UTF-16) bytes of the to be serialized array containing the string.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Strings (fixed length)

Upstream requirements:
⌈
Fixed length strings may have a length field that is added in front of the string (for the sake of backwards compatible extension).The length of this length field shall be determined by the configuration parameter `SIZE_OF_STRING_LENGTH_FIELD` in the allowed range according to the 'Allowed Range or Values' column in .If not configured explicitly via the configuration parameter `SIZE_OF_STRING_LENGTH_FIELD`, the default value defined in  shall be used.
⌋

  Upstream requirements:
⌈
Strings shall be terminated with a "\0"-character despite having a fixed length.
⌋

  Upstream requirements:
⌈
The length of the string (this includes the "\0") in Bytes has to be specified in the data type definition.
⌋

### 34. Strings (dynamic length)

Upstream requirements:
⌈
Strings with dynamic length shall start with a length field. The length is measured in Bytes.
⌋

  Upstream requirements:
⌈
The length field is placed before the BOM, and the BOM is included in the length.
⌋

  Upstream requirements:
⌈
String are terminated with a "\0".
⌋

Note: The maximum number of bytes of the string (including termination with "\0") shall also be derived from the data type definition.

  Upstream requirements:
⌈
,  and  shall also be valid for strings with dynamic length.
⌋

 Length field for Dynamic length strings
  Upstream requirements: ,
⌈
Dynamic length strings shall have a length field that is added in front of the string. The length of this length field shall be determined by the configuration parameter `SIZE_OF_STRING_LENGTH_FIELD` in the allowed range according to the 'Allowed Range or Values' column in . If not configured explicitly via the configuration parameter `SIZE_OF_STRING_LENGTH_FIELD`, the default value defined in  shall be used.
⌋

  Upstream requirements:
⌈
The length of the Strings length field is not considered in the value of the length field; i.e. the length field does not count itself.
⌋

### 35. Arrays

### 36. Arrays (fixed length)

Fixed length arrays are easier for use in very small devices. Dynamic length arrays might need more resources on the ECU using them.

  Upstream requirements:
⌈
Fixed length arrays may have a length field that is added in front of the array (for the sake of backwards compatible extension). The length of this length field shall be determined by the configuration parameter `SIZE_OF_ARRAY_LENGTH_FIELD` in the allowed range according to the 'Allowed Range or Values' column in . If not configured explicitly via the configuration parameter `SIZE_OF_ARRAY_LENGTH_FIELD`, the default value defined in  shall be used.
⌋

Note: Overruns of fixed-size arrays can only be detected with a length field.

### 37. One-dimensional

Upstream requirements: ,
⌈
The one-dimensional arrays with fixed length "n" shall carry exactly "n" elements of the same type. An optional length field may precede the first element (see .
⌋

Note: If a length field is defined for a specific fixed-length array, then this array is represented on the bus as a composite of the length field and the collection of n elements of the same data type.

The layout of  is shown in Figure .

### 38. Multidimensional

Upstream requirements: , ,
⌈
The serialization of multidimensional arrays follows the in-memory layout of multidimensional arrays in the C/C++ programming language (row-major order).
⌋

Note: If a length field is defined for a specific multidimensional fixed-length array, then this array is represented on the bus as a composite of a length field and n collections consisting each of a length field and m elements of the same data type.

The layout of  is shown in Figure .

### 39. Dynamic Length Arrays

Upstream requirements:
⌈
The layout of arrays with dynamic length shall be based on the layout of fixed length arrays.
⌋

  Upstream requirements:
⌈
A length field at the beginning of a dynamic length array shall be used to specify the length of the array in Bytes.
⌋

  Upstream requirements:
⌈
The length does not include the size of the length field.
⌋

Note: If the length of the length field is set to 0 Bits, the number of elements in the array has to be fixed; thus, being an array with fixed length.

The layout of dynamic arrays is shown in Figure  and Figure .

In the one-dimensional array one length field is used, which carries the number of bytes used for the array.

The number of static length elements can be easily calculated by dividing by the size of an element.

In the case of dynamical length elements the number of elements cannot be calculated, but the elements must be parsed sequentially.

Figure  shows the structure of a Multidimensional Array of dynamic length.

  Upstream requirements:
⌈
In multidimensional arrays every sub array of different dimensions shall have its own length field.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 69 章（内容从略，见纯文本全文）

40. Enumeration
41. Bitfield
42. Union / Variant
43. De-serialization of 数据 Structures
44. Structured DataTypes (structs)
45. Structured Datatypes and Arguments with Identifier and optional members ('TLV')
46. Strings
47. Strings (fixed length)
48. Strings (dynamic length)
49. Arrays
50. Arrays (fixed length)
51. Arrays (dynamic length)
52. Enumeration
53. Bitfield
54. Union / Variant
55. 规范 of SOME/IP 协议
56. 传输协议 Bindings
57. UDP Binding
58. TCP Binding
59. Allowing resync to TCP stream using Magic Cookies
60. 多 Service-Instances
61. Transporting large SOME/IP messages of UDP (SOME/IP-TP)
62. 示例
63. Sender specific 行为
64. Receiver specific 行为
65. Request/Response Communication
66. Fire&Forget Communication
67. 通知 Events
68. Strategy for sending 通知
69. Fields
70. 错误处理
71. Return 代码
72. 错误 Message
73. 错误 Processing 概述
74. Communication 错误的处理
75. Compatibility Rules for 接口 Version
76. 配置 Parameters
77. 协议 usage and 指南
78. Choosing the 传输协议
79. Security Considerations for SOME/IP
80. Compatibility of changes of the payload format
81. 附录
82. Change history of AUTOSAR traceable items
83. Traceable item history of this document according to AUTOSAR Release R26-11
84. Added 规范 Items in R26-11
85. Changed 规范 Items in R26-11
86. Deleted 规范 Items in R26-11
87. Added Constraints in R26-11
88. Changed Constraints in R26-11
89. Deleted Constraints in R26-11
90. Traceable item history of this document according to AUTOSAR Release R25-11
91. Added 规范 Items in R25-11
92. Changed 规范 Items in R25-11
93. Deleted 规范 Items in R25-11
94. Added Constraints in R25-11
95. Changed Constraints in R25-11
96. Deleted Constraints in R25-11
97. Traceable item history of this document according to AUTOSAR Release R24-11
98. Added 规范 Items in R24-11
99. Changed 规范 Items in R24-11
100. Deleted 规范 Items in R24-11
101. Traceable item history of this document according to AUTOSAR Release R23-11
102. Added 规范 Items in R23-11
103. Changed 规范 Items in R23-11
104. Deleted 规范 Items in R23-11
105. Traceable item history of this document according to AUTOSAR Release R22-11
106. Added 规范 Items in R22-11
107. Changed 规范 Items in R22-11
108. Deleted 规范 Items in R22-11
