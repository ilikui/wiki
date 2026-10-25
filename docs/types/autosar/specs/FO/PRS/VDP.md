# Vehicle Data Protocol Specification (`VDP`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 1119 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_VDP_1119\AUTOSAR_FO_PRS_VDP.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_VDP_1119\AUTOSAR_FO_PRS_VDP.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_VDP_1119\zzgen\FO_PRS_VDP.complete.txt`

## 文档简介

This protocol specification specifies the format, message sequences and semantics of the AUTOSAR Protocol VDP.

VDP aims at addressing the need for distributing data collection tasks from a central data collection unit on an HPC to remote ECUs (in particular Classic Platform ECUs) as depicted in figure . The remote ECUs are assumed to have local access to the required data.

## 模块依赖

VDP has one dependency on other protocol layers, which is described in the requirements in chapter  but additionally listed here.

* VDP messages are limited in length by the maximum length of the underlying IPDUs (c.f. )

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

This protocol specification specifies the format, message sequences and semantics of the AUTOSAR Protocol VDP.

VDP aims at addressing the need for distributing data collection tasks from a central data collection unit on an HPC to remote ECUs (in particular Classic Platform ECUs) as depicted in figure . The remote ECUs are assumed to have local access to the required data.

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

To achieve this, VDP introduces a technical realization of four different sampling modes in a remote ECU controlled from a central collection unit. The different sampling modes are listed below.

* Cyclic: A data point is sampled cyclically at a remote ECU.
* On-change: A data point is sampled only when the value has changed (a 'change' can defined per data point type, i.e. per DCA Remote, and is not limited by the protocol. Exemplarily, it could be either a "\neq" or the entering or leaving of a numerical range).
* Cyclic and on-change: A data point is sampled cyclically or additionally when it has changed.
* On-request: A data point is sampled only when a specific request (the trigger request, c.f. subsection ) is received at the remote ECU.

VDP also provides error reporting mechanisms for the cases when specific data points do not support all modes.

One essential enabler for the practicability of the different sampling strategies is the systematic decoupling of sampling and transmission. For this, data point samples are buffered in a component in the remote ECU and potentially transmitted decoupled in time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

### 4. 约束与假设
*原文标题：Constraints and assumptions*

VDP is relying on an underlying transport protocol in case VDP messages are longer than the frame size of the underlying bus protocol.

### 5. 限制
*原文标题：Limitations*

The protocol can be applied on bus systems (including TPs) with appropriate message size and it should especially not be used in case the messages are too small to encompass multiple data point dynamic configurations or multiple data point samples (see chapter  for descriptions and definitions of these terms).

### 6. Dependencies

### 7. Dependencies to other 协议 layers
*原文标题：Dependencies to other protocol layers*

VDP has one dependency on other protocol layers, which is described in the requirements in chapter  but additionally listed here.

* VDP messages are limited in length by the maximum length of the underlying IPDUs (c.f. )

### 8. Use Cases

| ID | Name | Description |
|---|---|---|
| UC_VDP_00001 | Dynamic In-Vehicle Data Collection | The dynamic collection of data from ECUs in the vehicle. Therein it shall support both data following a push semantic (notifications, event-based) as well as data following a pull semantic (get-APIs). The transmission may happen immediately after sampling, but it may also be delayed until a transmission trigger condition is fulfilled. |

### 9. 相关文档
*原文标题：Related documentation*

### 10. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 11. 相关规范
*原文标题：Related specification*

The protocol requirements covered in this PRS are addressing the requirements imposed on this solution by the

* AUTOSAR Requirements Specification VDP (`FO_RS_VDP`.pdf)

### 12. 协议需求
*原文标题：Protocol Requirements*

### 13. 需求 Traceability
*原文标题：Requirements Traceability*

| Requirement | Description | Satisfied by |
|---|---|---|
| Multi-Version Support |  |  |
| VDP Dynamic Configuration of Data Points |  |  |
| VDP Different Modes for Data Sampling |  |  |
| VDP Different Modes for Data Transmission |  |  |
| Detection of Missing Data on the Central ECU |  |  |
| VDP Temporary Interruption of Data Sampling |  |  |
| VDP Efficient Representation of Meta Data |  |  |
| VDP Error Handling |  |  |
| VDP Control Sequence Enforcement |  |  |

### 14. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 15. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Vehicle Data Protocol that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| VDP | Vehicle Data Protocol |
| DCA | Data Class Adapter |
| CM | Communication Module |
| DP | Data point |

### 16. 定义 of terms
*原文标题：Definition of terms*

| Terms: | Description: |
|---|---|
| Remote ECU | A remote ECU is the owner of the data resource wherein a functional cluster can have local access for retrieving this data. |
| Central ECU | A central ECU is the location of a vehicle central data collection unit, which aggregates all data from the remote ECUs provided with VDP. |
| Data point | A data point refers to a data resource inside the vehicle with a well-defined semantic that can be collected (e.g. vehicle speed). |
| Data point sample | A data point sample refers to the value of a data point acquired at a specific point in time (e.g. vehicle speed at 12 am). |
| VDP-CM Proxy | The VDP communication module proxy (VDP-CM Proxy) is the implementation of VDP in the data requesting software component residing in an HPC. Most probably it is directly attached to a vehicle data collector. |
| VDP-CM Remote | The VDP communication module remote (VDP-CM Remote) is the implementation of the VDP in the ECU which either owns the data resources or has direct access to it. |
| DCA Remote | A DCA Remote refers to a Data Class Adapter Remote. The Data Class Adapter Remotes are directly connected to a CM Remote and can directly access data points on the other side. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 协议规范
*原文标题：Protocol specification*

### 18. Message format

For both, data and control information, the same VDP message format is used, it consists of a header and a payload segment, c.f. figure .

 Endianness
  Upstream requirements: , , , , , ,
⌈
All VDP specific fields shall be encoded in little-endian byte order.
⌋

 Reserved bits
  Upstream requirements: , , , , , ,
⌈
All reserved bits shall be set to 0.
⌋

 VDP maximum message size
  Replaces:
  Upstream requirements: , , , , , ,
⌈
When transport protocols denoted by TP_1, ...., TP_n are used on which the VDP messages shall be routed, the maximally allowed VDP message size (VDP.maxMessageSize) shall fulfill the following condition dependent on the maximum IPDU size of the underlying transport protocols (TP_i.maxIPDUSize) in the following manner

VDP.maxMessageSize \le \min_{i \in } (TP_i.maxIPDUSize)

All transmitted VDP messages shall be shorter than or as long as VDP.maxMessageSize.

If no transport protocol is used all transmitted VDP messages shall be shorter than or as long as the maximum frame length.
⌋

This means in particular, that VDP does not implement any additional segmentation or routing logic of either control or data messages.

### 19. Header format

The header format is specified in the following requirement and illustrated in figure .

 Header format
  Upstream requirements: , , , , , ,
⌈
The VDP header shall contain the following fields

* (MT) message type, and
* (ADD) message type specific additional information.
⌋

### 20. Payload format

Please refer to section  for further description.

### 21. 数据类型
*原文标题：Data types*

The following introduces two VDP specific data types, the dynamic data length encoded UINT and the VDP relative timestamp.

 Dynamic data length encoded uint (DDLE)
  Upstream requirements:
⌈
VDP implementations shall support the encoding of unsigned integers of AUTOSAR type uint8_least as dynamic data length encoding as described in the following for an uint8_least VAL.

The encoding reserves the most significant bit of each byte for the indication whether another byte encoding VAL follows. MSB = 1 indicates that another byte follows, MSB = 0 indicates that this is the last byte.

The remaining 7 bit of each bytes contain the bits of VAL. The first byte contains the 7 first bits of VAL. The n^{th} byte then contains the n^{th} 7 bit of VAL.

In case the k\cdot7 most significant bits of VAL are 0, the k first bytes are not transmitted.
⌋

The dynamic data length encoding is illustrated in figure . In the bottom of the aforementioned figure, a uint16 with value '87' is encoded in DDLE. The number '87' in uint16 is depicted there, highlighting that the most significant byte is 0 and the most significant bit of the lower byte as well. DDLE then does not encode the byte with value 0.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. VDP Slot ID and DCA Remote ID

Maximum VDP Slot ID
  Upstream requirements:
⌈
The maximum allowed VDP Slot ID (VDP.maxSlotID) shall be configurable at compile time and must be less or equal to 16382 (max 2 bytes when coded in DDLE).
⌋

The value 16383 (DDLE encoded 0xFF 0x7F) is used for the identification of asynchronous errors, see also: : Asynchronous error information

 VDP Slot ID
  Upstream requirements: ,
⌈
The VDP Slot ID (`VDP_SLOT_ID`) shall be within the range  and of type DDLE in any VDP message.
⌋

 DCA Remote ID
  Upstream requirements:
⌈
The DCA Remote ID (`DCA_REM_ID`) shall be within the range  and of type DDLE (maximally 2 bytes) in any VDP message.
⌋

### 23. 错误 codes
*原文标题：Error codes*

The error codes as listed in the following requirement can either occur synchronously in a control response or asynchronously in a data message. All error codes which can be sent from the VDP-CM Remote to the VDP-CM Proxy in either a control message response or in a data message are listed in . The usage of these error codes require that the control message requests are in the correct format.

In case a control type independent description can be given for this error code, it is given here, in case it is specific for a control type, it is explained in the according subsection.

 Error codes
  Upstream requirements:
⌈
The error code (EC) shall be one of the following values in case the origin of the error is the DCA Remote.

* (sync): ; (async):
* (async):
* (async): ; (sync):
* (async):
* (sync):
* (sync):
* (sync):
* (sync):
* (sync):
*
* (sync, async) Implementation specific.

In case the origin of the error is the VDP-CM Remote, the following error codes shall be used.

* (sync): ; (async):
* (async):
* (async):
* (async):
* (async):
* (sync):
* (sync):
* (sync):
* (sync):
* (sync):
* (sync):
* (sync):
* (sync):
* (sync):
*
* (sync, async) Implementation specific.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Message 类型
*原文标题：Message Types*

VDP shall support data messages and control messages, they are differentiated using the (MT) field of the header (c.f. subsection ) which can be of the following values.

 Message types
  Upstream requirements: , , ,
⌈
The message type (MT) in the header can be selected to be

*[(MT) = 0] Protocol version message
*[(MT) = 1] Control message
*[(MT) = 2] Data message
*[(MT) = 3] Error message
*[(MT) = 4 - 7]

Data and error message shall be sent from VDP-CM Remote to VDP-CM Proxy only. Control and Protocol version shall be split into a request sent from VDP-CM Proxy to VDP-CM Remote and a response sent from VDP-CM Remote to VDP-CM Proxy.
⌋

### 25. 协议 version
*原文标题：Protocol version*

The protocol version can be requested by the VDP-CM Proxy at the VDP-CM Remote as depicted in fig. .

The VDP-CM Remote answers with a protocol version response as depicted in .

 Protocol version request header
  Upstream requirements:
⌈
For a protocol version request, the message type specific additional information (ADD) of the header shall be reserved.
⌋

 Protocol version request
  Upstream requirements:
⌈
A protocol version request shall not contain any payload.
⌋

 Protocol version response payload
  Upstream requirements:
⌈
The payload of the protocol version response shall be of two byte length and shall contain

* Main version (uint8) set to 0x02, and
* Minor version (uint8) set to 0x00.
⌋

### 26. 控制 Messages
*原文标题：Control Messages*

The following requirements describe the common features and requirements imposed on all control messages. The specific instantiations in form of services/commands can be found in section .

Control message requests are sent from VDP-CM Proxy to VDP-CM Remote and control message responses are sent from VDP-CM Remote to VDP-CM Proxy as required previously and depicted in figure . In case the control message was not in the correct format, the control message response is not sent but an error message.

Because VDP control messages contain data that is security relevant (e.g., the SEC flag in the VDP settings), the authenticity of the VDP control messages need to be ensured. This can be done by using an appropriate protocol such as SecOC for transmission of VDP control messages.

 Control message request - header field (ADD)
  Upstream requirements: , , ,
⌈
For a control message, i.e. (MT) = 1, the field (ADD) of the VDP header shall contain the control message sequence counter (`CON_SQ_CT`).
⌋

The header of a control message is depicted in figure .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 控制 message sequence counter
*原文标题：Control message sequence counter*

For all control messages (control acting from the VDP-CM Proxy to the VDP-CM Remote), a control message sequence counter is used to detect message loss and map responses to requests. Since the protocol is not stateless, this is essential to assure validity of the control sequences per remote ECU. Consequentially, if one VDP-CM Proxy is connected to multiple VDP-CM Remotes, it needs to handle as many control sequence counters.

 Control message sequence counter
  Upstream requirements:
⌈
The field (`CON_SQ_CT`) shall be a 5-bit unsigned integer (0..31).
⌋

 Control message sequence counter initialization
  Upstream requirements:
⌈
During initialization, the control message sequence counter (`CON_SQ_CT`) shall be set to '1'.
⌋

The previous requirement and the following incrementation and wrap around rules need to be realized by both, VDP-CM Proxy and Remote.

 Control message sequence counter incrementation
  Upstream requirements:
⌈
The control message sequence counter (`CON_SQ_CT`) shall be incremented by one for each VDP control request.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Acknowledge

Control message requests are sent from the VDP-CM Proxy to the VDP-CM Remote. The VDP-CM Remote indicates using an acknowledge bit whether the request was received and processed successfully. Requests which are partially erroneous are also responded to with (ACK) = 0, however the parts which can be successfully applied to the VDP-CM Remote are applied. The following subsections describe the specific realization per message type.

Beyond that, error messages can be sent asynchronously (c.f. section ).

 Acknowledge bit
  Upstream requirements:
⌈
The acknowledge bit (ACK) of the control message response shall contain the following encoding.

* (ACK) = 1: Acknowledge
* (ACK) = 0: Not-acknowledge
⌋

### 29. NACK response payload

The control message response contains information about the erroneous parts of the control message requests.

 Not-acknowledge control message response payload
  Upstream requirements:
⌈
For a control message response with (ACK) = 0 (not-acknowledge), the payload of the control message response shall contain repeatedly

* (EC) error code, and
* depending on (EC),

  * (`VDP_SLOT_ID`) VDP Slot ID,
  * (`DCA_REM_ID`) DCA Remote ID, or
  * nothing.

It is described for each error code whether the VDP Slot ID or the DCA Remote ID follows.
⌋

Not all error codes are allowed for every request. The specific allowed error codes per request are listed in the corresponding subsections. The following requirements specify the usage of error codes which are common for more than one control message type.

 Generic DCA Remote error
  Upstream requirements:
⌈
The error code (EC) = 0x00 shall be used in a control message response with (ACK) = 0, if a generic error occurred in the DCA Remote corresponding to the (`VDP_SLOT_ID`).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 数据 messages
*原文标题：Data messages*

An overview of the data message can be found in figure .

Here, it is worth emphasizing, that the VDP-CM Remote responds (ideally) with one data message to all requests received. In this data message, all previously acquired data samples are aggregated and sent to the data consumer. An example with three different samples whereof one reported an asynchronous error for one sample is depicted in figure .

 Data message
  Upstream requirements:
⌈
A data message shall have (MT) = 2.
⌋

 Data message header
  Upstream requirements:
⌈
The data message header field ADD shall contain a sequence counter (`DATA_SQ_CT`) which is an unsigned integer of 5 bit length.
⌋

 Sequence counter initialization
  Upstream requirements:
⌈
The VDP-CM Remote shall initialize the sequence counter (`DATA_SQ_CT`) with 1 on startup.
⌋

 Sequence counter increment
  Upstream requirements:
⌈
The sequence counter (`DATA_SQ_CT`) shall be increased by 1 with each data message sent by the VDP-CM Remote.
⌋

 Sequence counter wrap around
  Upstream requirements:
⌈
When the sequence counter (`DATA_SQ_CT`) reaches 31, it shall wrap around and be set to 1 for the next data message.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 数据 point sampling information
*原文标题：Data point sampling information*

Data point sample information
  Upstream requirements: ,
⌈
A data point sample information (DPSI) shall contain the following fields.

* (`VDP_SLOT_ID`)
* (`REL_TS`) Relative timestamp
* (DLEN) Data length
* (DATA) Data
⌋

 VDP Slot IDs are used in data messages
  Upstream requirements: ,
⌈
All samples acquired using the information from one data point dynamic configuration in the add dynamic configuration request shall be reported in the data message with the (`VDP_SLOT_ID`) of the data point dynamic configuration.
⌋

 Relative timestamp
  Upstream requirements: ,
⌈
The relative timestamp (`REL_TS`) shall be encoded according to  with a maximum length of 6 byte. If the DDLE encoded relative timestamp does not fit into 6 byte a timestamp encoding error according to  shall be raised.

If the (DPI) is the first one in the data message, the relative timestamp encodes `VDP_REL_TS`(`REF_TS`, <sample acquisition time> ). Otherwise, it is `VDP_REL_TS`(reconstructed(<sample acquisition time of the previous sample>), <sample acquisition time> ).
⌋

 Data length encoding
  Upstream requirements: ,
⌈
The data length (DLEN) shall be of type DDLE.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Asynchronous 错误 information
*原文标题：Asynchronous error information*

Asynchronous error information
  Upstream requirements:
⌈
The asynchronous error information (`ASYNC_ERR`) shall contain the following fields

* 0xFF 7F,
* (EC) Error code,
* (`ERR_LEN`) Error information length,
* (`ERR_INFO`) Error information.
⌋

 Error information length (`ERR_LEN`)
  Upstream requirements:
⌈
The error information length (`ERR_LEN`) shall be of type DDLE and at most 2 byte long.
⌋

 Error information (`ERR_INFO`)
  Upstream requirements:
⌈
The error information (`ERR_INFO`) shall be of length (`ERR_LEN`) and its content shall depend on (EC).
⌋

 Allowed error codes for asynchronous errors
  Upstream requirements:
⌈
Only the following error codes (EC) from the total list given in  shall be allowed in .

*
*
*
*
*
*
*
*
*
*
*
⌋

 Generic DCA Remote error
  Upstream requirements:
⌈
The error code (EC) = 0x00 generic DCA Remote error shall be used when a generic error occurred while sampling a data point.

If used, (`ERR_LEN`) \ge 1, and (`ERR_INFO`) shall contain in the first byte(s) the DDLE encoded VDP Slot ID of the data point causing this error.

The remainder of the (`ERR_INFO`) is implementation specific.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 服务 / Commands
*原文标题：Services / Commands*

Message types
  Upstream requirements: , , ,
⌈
The command type (CT) in the extended header shall be selected from the following.

*[(CT) = 0] Add dynamic configuration
*[(CT) = 1] Remove dynamic configuration
*[(CT) = 2] Activation
*[(CT) = 3] Trigger
*[(CT) = 4 - 7]
⌋

### 34. Add dynamic 配置
*原文标题：Add dynamic configuration*

The full add dynamic configuration request as described in the following requirements is depicted in fig. .

The add dynamic configuration request is answered with a add dynamic configuration response, c.f fig. .

### 35. Request 概述
*原文标题：Request overview*

Add dynamic configuration request header
  Upstream requirements: ,
⌈
The control message extended header for an add dynamic configuration request shall contain

* (CT) = 0 Command type: add dynamic configuration,
* Reserved,
* (TCYCLIC) Transmission mode cyclic, and
* (conditional, TCT) Transmission cycle time.
⌋

 Add dynamic configuration request
  Upstream requirements:
⌈
The add dynamic configuration request payload shall contain optionally and repeatedly DCA Remote dynamic configuration (`DCA_REM_DCFG`, m_k byte).
⌋

 Transmission mode cyclic flag
  Upstream requirements:
⌈
In case the flag (TCYCLIC) in the header of the add dynamic configuration request is set to '1', the transmission cycle time (TCT) shall be used.
⌋

 Transmission cycle time already in use
  Upstream requirements:
⌈
In case the flag (TCYCLIC) in the header of the add dynamic configuration request is set to '1' but the VDP-CM Remote has a previously configured transmission cycle time (TCT), it shall respond with (EC) = 0x7C, transmission cycle time already in use.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. DCA Remote dynamic 配置 (DCA_REM_DCFG)
*原文标题：DCA Remote dynamic configuration (DCA_REM_DCFG)*

The add dynamic configuration of the specific data points which shall be sampled is done per DCA Remote. The requested dynamic configuration contains a unique identifier, the VDP Slot ID, and the precise parametrization the respective data point.

 DCA Remote dynamic configuration
  Upstream requirements:
⌈
The DCA Remote dynamic configuration (`DCA_REM_DCFG`) shall contain

* (`DCA_REM_ID`) The DCA Remote ID ,
* (`DCA_REM_DCFG_CT`) The number of `DP_DCFG` following , and
* (repeated) (`DP_DCFG`) Data point dynamic configuration
⌋

### 37. 数据 point dynamic 配置 (DP_DCFG)
*原文标题：Data point dynamic configuration (DP_DCFG)*

The data point dynamic configurations encode the mapping of the DCA Remote specific parametrization (given by the DCA Remote data point dynamic configuration) and the dynamically assigned identifier, the VDP Slot ID.

 Data point dynamic configuration
  Upstream requirements:
⌈
The data point dynamic configuration (`DP_DCFG`) shall contain

* (`VDP_SLOT_ID`) VDP Slot ID,
* (SET) VDP settings,
* (COL) Collection settings ,
* (SCT) Sampling cycle time, conditional field depending on (COL),
* (`DCA_REM_DP_DCFG_LEN`) DCA Remote data point dynamic configuration length,
* (`DCA_REM_DP_DCFG`) DCA Remote data point dynamic configuration.

(l is either p + 3 or p + 5 depending on (SCT).)
⌋

 VDP Slot ID not unique error
  Upstream requirements: , ,
⌈
If a VDP Slot ID is set multiple times in the same add dynamic configuration request or set even though it is already in use in the remote ECU, the VDP-CM Remote shall respond with a error message with (PEC) = 2.
⌋

 Invalid length of (`DP_DCFG`)
  Upstream requirements: ,
⌈
If the field (`DP_DCFG`) is too short (e.g. less than 5 bytes), the VDP-CM Remote shall respond with an error message with (PEC) = 3, incorrect number of bytes.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. VDP settings

VDP settings
  Upstream requirements: , , ,
⌈
The field VDP settings shall contain

* Reserved
* (TRES) Timestamp resolution
* (SEC) Usage of secured channel
* (PERSIST) Persistency
* (`TXMODE_ON_SAMPLING`) Transmission mode 'on sampling'
* (`INIT_ACT`) Initial activation state
⌋

 Timestamp resolution
  Upstream requirements:
⌈
The field (TRES) shall encode the following timestamp resolutions for the dynamically configured data point inside the data message

* 1\,\mus,
* 10\,\mus,
* 100\,\mus,
* 1\,ms,
* 10\,ms,
* 100\,ms,
* 1\,s,
* Reserved and unused.
⌋

The following requirements cover the protection of the communication by using a secured channel based on a secure communication protocol (like SecOC, TLS, IPsec, MACsec and so on). Which one to use is not specified.

 (SEC) Usage of secured channel bit
  Upstream requirements:
⌈
A data message containing at least one data point sample requiring with (SEC) = 1 shall be secured by usage of secured channel.
⌋

 Data transmission without usage of secured channel
  Upstream requirements:
⌈
A data message which contains no data points samples requiring (SEC) = 1 shall not be secured by the usage of secured channel.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Collection settings

Collection settings
  Upstream requirements: ,
⌈
The field (COL) shall contain the following information

* Reserved
* (SCHANGE) Sampling mode 'on change'
* (SCYCLIC) Sampling mode 'cyclic'
⌋

 Sampling mode on.change
  Upstream requirements: ,
⌈
When (SCHANGE) = 1, the data point shall be sampled each time a change has been identified by the DCA Remote.

The definition of change is implementation specific for the DCA Remote.
⌋

 Sampling mode on-change is not supported
  Upstream requirements: ,
⌈
In case, a DCA Remote does not support (SCHANGE) = 1 for a specific (`DP_DCFG`), the add dynamic configuration response shall contain (ACK) = 0. The payload of the response shall then contain the (`VDP_SLOT_ID`) of the (`DP_DCFG`) and the error code 0x08.
⌋

 Sampling mode cyclic and sampling cycle time
  Upstream requirements: ,
⌈
When (SCYCLIC) = 1, the sampling cycle time (SCT) of 2 bytes shall be set. In case it is not set, an error message shall be responded with (PEC)=3, incorrect number of bytes.
⌋

 Sampling cycle time
  Upstream requirements: ,
⌈
The field (SCT) shall be of type uint16 and contains the sampling cycle time in milliseconds.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Remove dynamic 配置
*原文标题：Remove dynamic configuration*

The full remove dynamic configuration request as described in the following requirements is depicted in fig. .

The remove dynamic configuration request is answered with the same response as the add dynamic configuration request, c.f fig. .

 Remove dynamic configuration request header
  Upstream requirements: ,
⌈
The control message extended header for a remove dynamic configuration request shall have one byte length and contain

* (CT) = 1 Command type: remove dynamic configuration,
* Reserved,
* (`DCA_REM`),
* (GLOBAL), and
* (T_CYCLIC) Transmission mode cyclic.
⌋

 Remove cyclic transmission settings
  Upstream requirements:
⌈
When the flag (T_CYCLIC) in a remove dynamic configuration request is set, the VDP-CM Remote shall stop the cyclic transmission of data messages.

In case no cyclic transmission was set previously with an add dynamic configuration request, the VDP-CM Remote shall respond with error code (EC) = 0x7C, transmission cycle time not set.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Remove all

A remove dynamic configuration request can conveniently remove all dynamic configurations from the VDP-CM Remote and attached DCA Remotes. This is encoded in bit 1 of the VDP extended header for the remove dynamic configuration request, i.e. the flag (GLOBAL).

 Global null configuration
  Upstream requirements:
⌈
When the flag (GLOBAL) is set to '1' the VDP-CM Remote shall remove all data point dynamic configurations and the transmission cyclic time (TCT) from the remote ECU.
⌋

 Global null configuration payload length
  Upstream requirements:
⌈
When the flag (GLOBAL) is set to '1' the payload of the remove dynamic configuration request shall be empty.

If the request contains a payload, the VDP-CM Remote shall respond with an error message with (PEC) = 3, incorrect number of bytes.
⌋

 Global null configuration invalid options
  Upstream requirements:
⌈
When the flag (GLOBAL) is set to '1', (TCYCLIC) and (`DCA_REM`) of the extended header must be set to '0'. Otherwise, the VDP-CM Remote shall respond with an error message with (PEC) = 5, invalid options.
⌋

### 其余 38 章（内容从略，见纯文本全文）

42. Remove per DCA
43. Remove per 数据 point
44. Add/remove dynamic 配置 response
45. Activation
46. Trigger
47. Sequences
48. Adding 数据 point dynamic configurations to one DCA
49. Sampling 模式 cyclic
50. Sampling 模式 on request
51. Transmission and sampling on request
52. Transmission on sampling
53. Transmission on request
54. 错误 messages
55. 配置 parameters
56. 协议 usage and 指南
57. 附录
58. Change history of AUTOSAR traceable items
59. Traceable item history of this document according to AUTOSAR Release R24-11
60. Added 规范 Items in R24-11
61. Changed 规范 Items in R24-11
62. Deleted 规范 Items in R24-11
63. Added Constraints in R24-11
64. Changed Constraints in R24-11
65. Deleted Constraints in R24-11
66. Traceable item history of this document according to AUTOSAR Release R25-11
67. Added 规范 Items in R25-11
68. Changed 规范 Items in R25-11
69. Deleted 规范 Items in R25-11
70. Added Constraints in R25-11
71. Changed Constraints in R25-11
72. Deleted Constraints in R25-11
73. Traceable item history of this document according to AUTOSAR Release R26-11
74. Added 规范 Items in R26-11
75. Changed 规范 Items in R26-11
76. Deleted 规范 Items in R26-11
77. Added Constraints in R26-11
78. Changed Constraints in R26-11
79. Deleted Constraints in R26-11
