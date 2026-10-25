# Specification of Intrusion Detection System Protocol (`IntrusionDetectionSystem`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 981 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_IntrusionDetectionSystem_981\AUTOSAR_FO_PRS_IntrusionDetectionSystem.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_IntrusionDetectionSystem_981\AUTOSAR_FO_PRS_IntrusionDetectionSystem.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_IntrusionDetectionSystem_981\zzgen\FO_PRS_IntrusionDetectionSystem.complete.txt`

## 文档简介

This Protocol Requirements Specification defines the format, message sequences and semantics of the AUTOSAR Protocol Intrusion Detection System (IDS).

The document RS IntrusionDetectionSystem  describes the elements of a distributed Intrusion Detection System (IDS). Please see  for an overview of the IDS elements.

The PRS IDS contributes to the IDS by providing the protocol for the transmission of qualified security events (QSEv) from an Intrusion Detection System Manager (IdsM) instance to an Intrusion Detection System Reporter (IdsR) instance.

The IdsR is an OEM specific application that can be used to further propagate the QSEvs to the SOC. The IdsR is not specified by AUTOSAR.

## 模块依赖

IdsM has dependencies to other protocol layers like TCP, UDP or CAN depending on the used network.

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

This Protocol Requirements Specification defines the format, message sequences and semantics of the AUTOSAR Protocol Intrusion Detection System (IDS).

The document RS IntrusionDetectionSystem  describes the elements of a distributed Intrusion Detection System (IDS). Please see  for an overview of the IDS elements.

The PRS IDS contributes to the IDS by providing the protocol for the transmission of qualified security events (QSEv) from an Intrusion Detection System Manager (IdsM) instance to an Intrusion Detection System Reporter (IdsR) instance.

The IdsR is an OEM specific application that can be used to further propagate the QSEvs to the SOC. The IdsR is not specified by AUTOSAR.

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

As described in  QSEv can be persisted locally on the ECU where the security event was qualified. Alternatively a QSEv can be send to the IdsR. The IDS protocol covers the sending of the QSEv from the IdsM instance to the IdsR instance.

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

The IDS protocol supports a push-interface for QSEv. The IdsM instances push QSEv which are configured accordingly to the IdsR. A pull interface is not covered by this protocol. It could be realized by storing the QSEv locally in a appropriate component and then accessing the locally stored QSEv via regular diagnostic interfaces.

### 4. 约束与假设
*原文标题：Constraints and assumptions*

There are no specific assumptions and constraints for using the IDS protocol. It was designed to work for all bus system. The software stack must be able to send and receive I-PDUs. The IdsM does not support the reception of QSEvs.

### 5. 限制
*原文标题：Limitations*

There is no limit defined for the context data size. The recommendation is to set the limit for a complete individual QSEv to 16 kByte.

### 6. Dependencies

### 7. Dependencies to other 协议 layers
*原文标题：Dependencies to other protocol layers*

IdsM has dependencies to other protocol layers like TCP, UDP or CAN depending on the used network.

### 8. Dependencies to other standards and norms

The elements of the IDS protocol can be mapped to the syslog format by the IdsR if required for the SOC.

### 9. Dependencies to the Application Layer

The IDS protocol has no dependencies to the application layer. Application layer components can issue security events by using API of IdsM.

### 10. Use Cases

The AUTOSAR IDS architecture and functionality is described in . Therefore this chapter is a brief summary of the use case for the protocol.

| ID | Name | Description |
|---|---|---|
| 0001 | Transmission of QSEv | Transmission of qualified security events from IdsM instances to IdsR instance |

### 11. UC_0001 "Forward QSEv to ECU with SOC connection"

The main use case for the IDS protocol is the propagation of Qualified Security Events QSEv to the IdsR in a way that is independent from the kind of ECU or the used communication mechanism. IdsM instances can be allocated to all nodes of the vehicle architecture that are security relevant. This decision is typically based on a security analysis of the vehicle E/E architecture. As a result an IdsM instance can be connected to the IdsR indirectly via a number of different bus systems as illustrated in , which shows an example of AP and CP.

### 12. 协议需求
*原文标题：Protocol Requirements*

### 13. 需求 Traceability
*原文标题：Requirements Traceability*

The following tables reference the requirements specified in the IDS requirement specification  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| Provide Interface for reporting SEv |  |  |
| IdsM shall buffer reported SEv for callers |  |  |
| Configure reporting mode per Security Event Type and IdsM instance |  |  |
| Persist QSEv records |  |  |
| Event Timestamps |  |  |
| Timestamp Sources |  |  |
| Authenticity of QSEvs |  |  |
| The IdsM shall allow to transmit QSEv to the IdsR |  |  |

### 14. 术语与缩略语定义
*原文标题：Definition of Terms and Acronyms*

### 15. Acronyms and Abbreviation

The glossary below includes acronyms and abbreviations relevant to the Intrusion Detection System Manager module that are not included in the `AUTOSAR_FO_TR_Glossary` .

| Acronym / Abbreviation | Description: |
|---|---|
| Authenticator | Relevant information to a SEv. It is optional data and is the result of a cryptographic primitive provided by the IdsM, using the Csm in conjunction with the crypto stack to provide integrity and authenticity of the QSEvs. |
| Context Data | Relevant information to a Security Event (SEv). It is optional data that provides a broader understanding of the security event (e.g. the corrupted data). The content and encoding of the context data is externally defined by the sensor and unknown to the IdsM module. |
| Context Data Buffer | Buffer with variable sizes to fit to the needs of the context data of the SEvs. |
| Event Buffer | Buffer to temporarily store the reported SEv. |
| Event Frame | Main frame of IDS protocol which includes the basic information like the Security Event ID. |
| Filter Chain | A set of consecutive filters which is applied to security events. The output are Qualified Security Events. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 协议规范
*原文标题：Protocol specification*

Purpose
  Upstream requirements:
⌈
The main purpose of the IDS protocol is the transmission of qualified security events (QSEv) from an Intrusion Detection System Manager (IdsM) instance to an Intrusion Detection System Reporter (IdsR) instance.
⌋

### 17. IDS Message Format

The IDS protocol is shown in .

 IDS Protocol Structure
⌈
The IDS protocol consists of the standard Event Frame and up to three optional fields. It provides several options to send only minimal data of Qualified Security Event QSEv or to extend this data with more details.

Beside the extension with a timestamp or context data, there is also the option to secure the data transport by adding an authenticator to every QSEv. The list below shows examples of configurations and explains the options.
⌋

All options can be configured or switched off independent from each other, so a subset or combination of all options is possible.

#  Standard Qualified Security Event
  ⌈
  Standard Qualified Security Event QSEv without further data.
  ⌋
#  QSEv with Timestamp
    Upstream requirements: , ,
  ⌈
  Qualified Security Event QSEv with Timestamp: If more precise timestamp is required in addition to the one provided for example by IdsR. The sensor or the IdsM can add timestamp to every QSEv. This option must be set by corresponding configuration bit in the protocol header.
  ⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. IDS 协议概述
*原文标题：IDS Protocol Overview*

In figure  you can find an overview on all elements of the IDS protocol.

### 19. Endianess - Byte Order

Byte and Bit order
⌈
The IDS protocol uses big endianess as byte order also known as Motorola format. This is equal to the network byte order, e.g. used by ethernet. In the tables and descriptions of this section, the byte numbers increase in the same sequence as the bytes are transmitted in the IDS message, starting from 0.

The first byte is the Most Signifcant Byte (MSB), usually Byte 0 the last byte is the Least Significant Byte (LSB). The bit numbers decrease, the most significant bit (msb) of a byte being bit 7 and the least significant bit (lsb) 0.
⌋

Note:  also applies to context data, i.e., the individual context data elements shall be provided in big endian byte order.

### 20. Independence of communication 接口
*原文标题：Independence of communication interface*

Independence of IDS Protocol
⌈
The IDS protocol is independent from the used hardware and the underlying communication interface (e.g. CAN, Ethernet, FlexRay). It is optimised to fit to standard CAN bus communication with the minimum required information on security event. Also ethernet communication is applicable.
⌋

### 21. IDS Event Frame

shows the Event Frame of IDS protocol.

 Event Frame
⌈
The IDS Event Frame consists of 8 Byte as detailed above.
⌋

Note:

 Optional Data
  Upstream requirements:
⌈
Timestamp, Context Data Frame and Authenticator Frame are optional.
⌋

### 22. 协议 Version and Header
*原文标题：Protocol Version and Header*

| Byte 0 | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|
| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |
| Protocol Version | < | < | < | Protocol Header | < | < | < |
| ^ | ^ | ^ | ^ | Reserved | Authenticator | Timestamp | Context Data |

### 23. 协议 Version
*原文标题：Protocol Version*

Version Information
⌈
The version information of the IDS protocol:

* * Bit : 0-15

Formula for calculation: ProtocolVersion = (BYTE0 & 0xF0) >> 4 With the extension of Context Data by introduction of the Context Data Version the protocol shall distinguish between Protocol Version: Protocol Version : 1 Context Data is reported by the sensor without Context Data Version. Protocol Version : 2 Context Data is reported by the sensor with Context Data Version.
⌋

### 24. 协议 Header
*原文标题：Protocol Header*

Protocol Header Information
⌈
IDS protocol header information, includes configuration bits to switch specific functionalities on or off:

* * Bit: Context Data
  * 0: No Context Data Frame included
  * 1: Context Data Frame included
* * Bit: Timestamp
  * 0: No Timestamp included
  * 1: Timestamp included
* * Bit: Authenticator
  * 0: No Authenticator Frame included
  * 1: Authenticator Frame included
* * Bit: reserved

Formula for calculation: ProtocolHeader = (BYTE0 & 0x0F)
⌋

Note:

 Availability of optional data
⌈
Only if Timestamp, Context Data or Authenticator is available, the corresponding Protocol Header Bit is set to 1. Context Data or Authenticator will never be transmitted with Length=0.
⌋

 Protocol Header Bit Context Data Frame
  Upstream requirements:
⌈
If Protocol Header Bit is set to 1, the IDS protocol shall consider Context Data Frame in the IDS frame for transmission. If Protocol Header Bit is set to 0, no Context Data Frame shall be sent.
⌋

 Protocol Header Bit Timestamp
  Upstream requirements:
⌈
If Protocol Header Bit is set to 1, the IDS protocol shall consider Timestamp in the IDS frame for transmission.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. IdsM Instance ID and Sensor Instance ID

| Byte 1 | < | < | < | < | < | < | < | Byte 2 | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 | Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |
| IDS Instance ID | < | < | < | < | < | < | < | < | < | Sensor Instance ID | < | < | < | < | < |

### 26. IdsM Instance ID

Instance ID
⌈
| Unique identifier of the IdsM instance which sends the qualified security event. IdsM Instance ID range: 0-1023. Usually there is one IdsM instance in one ECU. In case of complex ECU with Multi-Cores or Multi-Processor devices it is possible that there are multiple IdsM. In such constellation all IdsM must be configured with different IDS Instance ID. Formula for calculation: IdsM Instance ID (10 Bits) = ((BYTE2 & 0xC0) >> 6) | ((BYTE1  2)) |
|---|---|

⌋

### 27. Sensor Instance ID

Sensor Instance ID
⌈
Identifier to differentiate between multiple instances of same kind of sensor module. Sensor Instance ID range: 0-63 e.g. Multiple CanDrv in one ECU can issue "same" security event. To differentiate these the Sensor Instance ID is used. In case there is only one instance of the sensor in the configuration, the value of the Sensor Instance ID shall be, by default, set to 0. Note: The Sensor Instance ID shall be set at configuration of the corresponding instance.

Formula for calculation: Sensor Instance ID (6 Bits) = (BYTE2 & 0x3F)
⌋

### 28. Event 定义 ID
*原文标题：Event Definition ID*

The Event Definition ID is shown in .

| Byte 3 | < | < | < | < | < | < | < | Byte 4 | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Event Definition ID | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < |

 Event Definition ID
⌈
The Event Definition ID is a unique identifier of a security event. It describes the kind of a security event.
⌋

 Event Instance
⌈
If a sensor generates multiple security events of same kind it is called Event instance.
⌋

 Event ID Range
⌈
The range for the Event Definition ID is split into three scopes:

# AUTOSAR internal IDs: 0-0x7FFF (max. 32768 security events)
# Customer specific IDs: 0x8000-0xFFFE (max. 32767 security events)
# Invalid ID: 0xFFFF
⌋

### 29. Count

shows the IDS element Count.

| Byte 5 | < | < | < | < | < | < | < | Byte 6 | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Count | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < |

 Count
⌈
The count represents the number of IdsM API calls which result in the current Qualified Security Event. When an event is created, its count is initialized to 1. However, filters like Event Aggregation may combine several events into a single one. The count of this event is set to the sum of the counts of all aggregated events.

If the security event is reported by a smart sensor which already filters and preset the count value, this preset is just added to the count of IdsM. So the final count is the sum of the count of the sensor and the result of IdsM processing.
⌋

### 30. Reserved

The Reserved byte is shown in .

| Byte 7 | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|
| Reserved | < | < | < | < | < | < | < |

 Reserved Byte
⌈
The Byte of the Event Frame of IDS protocol is reserved for future use.
⌋

Note:

 Preset Reserved Bytes
⌈
Reserved Bytes should be preset with value 0. On receiver side those bytes should be ignored.
⌋

### 31. Timestamp

Details on timestamp are shown in .

 Timestamp Option
  Upstream requirements:
⌈
The IDS Protocol provides Timestamp as a configurable option.
⌋

 Initial Value
  Upstream requirements:
⌈
Timestamp is logged when security event was detected the first time (first occurence).
⌋

 Resolution
  Upstream requirements:
⌈
Resolution in ms is required. The Timestamp shall be encoded with 64 Bits in total to fit into a single CAN frame.
⌋

 Sources
  Upstream requirements:
⌈
Different sources for Timestamp can be configured in the IDS Protocol.

* * Bit: Timestamp source
  * 0: AUTOSAR Standard CP: StbM - AP: ara::tsync
  * 1: Auxiliary / OEM Specific timestamp
* * Bit: reserved
⌋

### 32. Timestamp AUTOSAR

| Timestamp | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|
| Byte 0 | < | < | < | < | Byte 1 | Byte 2 | Byte 3 |
| Bit 7 | Bit 6 | Bit 5 .. 0 | < | < | ^ | ^ | ^ |
| Source | Reserved | Nanoseconds | < | < | < | < | < |

| Timestamp | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|
| Byte 4 | < | Byte 5 | < | Byte 6 | < | Byte 7 | < |
| Seconds | < | < | < | < | < | < | < |

 Format
  Upstream requirements:
⌈
For the IDS Protocol AUTOSAR time format combines the timestamps for nanoseconds with 30 Bits and seconds with 32 Bits.
⌋

### 33. Nanoseconds

Nanoseconds Format
  Upstream requirements:
⌈
For nanoseconds only 30 Bits are required to encode 0..999 999 999 ns = 10^(-9) seconds.
⌋

Note: AUTOSAR Time Synchronisation Protocol (e.g. stbm in CP) uses 32 Bits for nanoseconds. The truncation of nanoseconds for IDS Protocol does not limit the resolution of the timestamp.

### 34. Seconds

Seconds Format
  Upstream requirements:
⌈
Seconds are encoded with 32 Bits which result in approximately 127 years resolution.
⌋

Note: For details please refer to Time Synchronisation Protocol SWS-TimeSynchronisation

### 35. Timestamp OEM

| Timestamp | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|
| Byte 0 | < | < | < | < | Byte 1 | Byte 2 | Byte 3 |
| Bit 7 | Bit 6 .. 0 | < | < | < | ^ | ^ | ^ |
| Source | OEM Timestamp | < | < | < | < | < | < |

 OEM Timestamp
  Upstream requirements:
⌈
OEM time source offers the option to use other time protocol. The length is limited to 63 Bits. An interface to OEM application is required. Accuracy is defined by OEM.
⌋

### 36. Context 数据
*原文标题：Context Data*

Context Data Option
  Upstream requirements: , , , ,
⌈
The IDS protocol provides an optional feature to enrich the standard security event transfered in the Event Frame with more detailed information. Therefore context data can be added. It is a binary blob attached by the sensor. These data includes specific detailed information about the security event which can be used by the SOC for improved analysis of the security incident, e.g. a malformed message detected by a communication sensor. IdsM has no knowledge of the content or structure of these data. Only the issuing sensor and the Backend or SOC knows it.
⌋

### 37. Context 数据 Version
*原文标题：Context Data Version*

Context Data Version
  Upstream requirements:
⌈
The IDS Context Data Version shall represent the definition and structure of the Context Data of a security event. It shall have a length of 2 Bytes. Whenever the definition or the structure of the Context Data is changed the Context Data Version has to be increased.
⌋

 Context Data Modification
  Upstream requirements:
⌈
The most significant bit of the Context Data Version shall determine whether the Context Data has been modified using the ContextDataModifierCallout or not.

Byte Bit =0: Original reported Context Data Byte Bit =1: Context Data provided by user callout
⌋

There are two variants of context data with different sizes:

### 38. Context 数据 - Size Long
*原文标题：Context Data - Size Long*

shows the "Context Data Size Long" with 4 Bytes length field.

 Size Long
  Upstream requirements:
⌈
The "Context Data Size Long" includes a 4 Bytes length field. Up to 2^(31)-1 context data bytes can be transmitted.
⌋

### 39. Context 数据 - Size Short
*原文标题：Context Data - Size Short*

Size Short
  Upstream requirements:
⌈
The "Context Data Size Short" is the alternative version with 1 Byte length field for max. 127 Bytes context data.
⌋

### 40. Context 数据 Length Encoding
*原文标题：Context Data Length Encoding*

| Context Data | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|
| Byte 0 | < | < | < | < | < | < | < |
| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |
| Length Format | Context Data Length | < | < | < | < | < | < |

 Length Format
  Upstream requirements:
⌈
Most Significant Bit (msb) of first byte Context Data (MSB) signals if the length is encoded in 7 Bits (1 Byte) or 31 Bits (4 Bytes). Length Format=Context Data Byte Bit: 0: 7 Bits length information encoded in Context Data Byte Bit: 1-127 Bytes 1: 31 Bits Length Information encoded in Context Data Byte Bit: 1..(2^(31)-1) Bytes
⌋

### 41. Authenticator

Authenticator Option
  Upstream requirements:
⌈
The IDS protocol provides an optional feature to make the transmission of QSEv more secure. A digital authenticator can be added to the IDS message. It can be used to ensure authenticity as well as to prove integrity of messages from the IdsM via all communication systems until reaching the Backend or SOC (End2End-Security).
⌋

 shows the Authenticator option of the IDS protocol.

### 42. Authenticator Length

Length
  Upstream requirements:
⌈
* Authenticator Length is encoded in 2 Bytes:
* Authenticator Length Byte: Authenticator Length 1..65535
⌋

### 43. Authenticator 数据
*原文标题：Authenticator Data*

| Authenticator | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Byte 2 | < | Byte 3 | < | Byte 4 | < | Byte 5 | < | Byte 5 | < | Byte .. | < | Byte .. | < | Byte n | < |
| Authenticator Data | < | < | < | < | < | < | < | < | < | < | < | < | < | < | < |

 shows the Authenticator data.

 Format
  Upstream requirements:
⌈
Authenticator Data Byte: Authenticator data

The cryptographic value of the Authenticator of the qualified security event is calculated with the serialized data of: Event Frame + optional Timestamp + optional Context Data. Which kind of cryptoalgorithm is used, depends on the system. The IDS protocol does not prescribe any specific algorithm or the format.
⌋

(also refer to  Event Frame,  Timestamp and  Context Data.)

### 44. IDS Message Separation

IDS Message Separation Header
⌈
On ethernet the IDS Message Separation Header is mandatory. It is used to address IDS messages unambiguously. In addition to the transmission of a single IDS message via ethernet, multiple IDS messages can be collected and sent within a single ethernet frame.
⌋

 Ethernet Port Address
⌈
An unique ethernet port address should be used for IDS communication.
⌋

 SOME/IP
⌈
SOME/IP and IDS messages should not be mixed on same port as they can't be distinguished properly by the receiver.
⌋

Note: The IdsR typically is connected via Ethernet. But as already mentioned also other automotive communication buses and protocols are supported. Regarding message separation header the following should be considered:

* * CAN FD: The I-Pdu-Multiplexer  supports collecting of multiple IDS messages within one message. Because of the size restrictions on CAN the I-Pdu-Multiplexer typically uses short header or no header option. Therefore the IDS Message Separation Header is normally not used on CAN buses.

* * FlexRay: The PDU Packing feature supports collecting of multiple IDS messages within one message.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. IDS Message Separation Header

shows the IDS Message Separation Header.

 Format
⌈
The IDS Message Separation Header consists of a 4 byte ID field for unique identification at the receiver and a 4 byte length field specifying the data length. Both in big endian byte order.
⌋

### 46. IDS Message Separation Header ID

ID
⌈
The IDS Message Separation Header ID is encoded in 4 byte. It is an arbitrary number, preferable 0.
⌋

Note: In AUTOSAR CP the IDS Message Separation Header ID shall be set at configuration of the Socket Adapter and I-PDU Multiplexer. For details please refer to SWS-Socket Adaptor  and SWS-IPDUMultiplexer .

### 47. IDS Message Separation Header Length

Length
⌈
The IDS Message Separation Header Length is equal to the IDS Message length. It is encoded in 4 bytes. The possible range is: Message Length Byte: 8.. 2.147.549.212 Bytes.
⌋

The minimum length is 8 Bytes and is equal to the minimal IDS message which is the Event Frame (8 Bytes) without any options configured. Please also refer to  Example IDS Message with Minimum Size.

The maximum length depends on the configured options. In case all options are configured with maximum size and the IDS Message Separation Header is used the totale size message is 2.147.549.212 Bytes. For details please refer to  Example IDS Message with Maximum Size.

Note: AUTOSAR platforms:

* * CP: The IDS Message Separation Header corresponds to the N-PDU mechanism which is supported by SocketAdaptor/I-PDU-Multiplexer  / .

* * AP: The IDS Message Separation Header must be generated by IdsM.

### 48. PDU 类型
*原文标题：PDU Type*

Note: In the CP IDS protocol uses GeneralPurposeIPdu (Interaction Layer Protocol Data Unit) of type IDS for transmission of Qualified Security Event QSEv. For details refer to System Template .

### 49. 示例 of IDS Messages
*原文标题：Example of IDS Messages*

### 50. 示例 IDS Message with Maximum Size
*原文标题：Example IDS Message with Maximum Size*

Maximum IDS Message
⌈
All options of IDS protocol configured with maximum size:

* * Option Timestamp AUTOSAR is configured.

* * Option Context Data Size Long is configured.

* * Option Authenticator is configured.

Event Frame: 8 Bytes Timestamp: 8 Bytes Context Data Size Long: 2^(31)-1 Bytes = 2.147.483.647 Bytes Context Data Size Long Length Encoding: 4 Bytes Authenticator: 65535 Bytes Authenticator Length Encoding: 2 Bytes IDS Message = 8 + 8 + 2.147.483.647 + 4 + 65535 + 2 = 2.147.549.204 Bytes

For CAN Bus: Maximum message size with CAN TP = 2^(32) -1 = 4.294.967.295

For Ethernet: IDS Message Separation Header must be added with 8 Bytes: Maximum IDS Message with IDS Separation Header: 8 Bytes + 2.147.549.204 Bytes = 2.147.549.212 Bytes

Maximum Size which can be encoded with 4 Bytes for IDS Message Separation Header: 4 Bytes = 2^(32) = 4.294.967.296 This ensures that IDS messages with maximum size can be transfered via the standard automotive bus system!
⌋

### 51. 示例 IDS Message with minimum size
*原文标题：Example IDS Message with minimum size*

Minimum IDS Message
⌈
No option of IDS protocol is configured - minimal size:

Event Frame: 8 Bytes IDS Message = 8 Bytes
⌋

### 52. Message 类型
*原文标题：Message types*

Currently not used for IDS Protocol.

### 53. 服务 / Commands
*原文标题：Services / Commands*

Currently not used for IDS Protocol.

### 54. Sequences (下层 layer)
*原文标题：Sequences (lower layer)*

Currently not used for IDS Protocol.

### 55. 错误 messages
*原文标题：Error messages*

IDS Protocol does not send specific error messages.

### 56. 配置 parameters
*原文标题：Configuration parameters*

Currently not used for IDS Protocol.

### 57. 协议 usage and 指南
*原文标题：Protocol usage and guidelines*

Currently not used for IDS Protocol.

### 58. 附录
*原文标题：Appendix*

### 59. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 60. Traceable item history of this document according to AUTOSAR Release R26-11

### 61. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 62. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

none

### 63. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

none

### 64. Traceable item history of this document according to AUTOSAR Release R25-11

### 65. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 66. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|
| IDS Protocol Structure |  |
| Protocol Header Information |  |
| Availability of optional data |  |
| Optional Data |  |
| Protocol Header Bit Authenticator Frame |  |
| QSEv with Authenticator |  |
| Authenticator Option |  |
| Length |  |
| Format |  |
| Maximum IDS Message |  |

### 67. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 68. Traceable item history of this document according to AUTOSAR Release R24-11

### 69. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

| Number | Heading |
|---|---|
| Protocol Header Bit Context Data Frame |  |
| Protocol Header Bit Timestamp |  |
| Protocol Header Bit Signature Frame |  |
| Context Data Version |  |
| Context Data Modification |  |

### 70. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

| Number | Heading |
|---|---|
| Version Information |  |

### 71. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

| Number | Heading |
|---|---|

 |
 |
