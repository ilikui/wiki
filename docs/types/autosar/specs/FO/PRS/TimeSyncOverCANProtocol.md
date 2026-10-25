# Time Synchronization over CAN Protocol Specification (`TimeSyncOverCANProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 1089 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_TimeSyncOverCANProtocol_1089\AUTOSAR_FO_PRS_TimeSyncOverCANProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_TimeSyncOverCANProtocol_1089\AUTOSAR_FO_PRS_TimeSyncOverCANProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_TimeSyncOverCANProtocol_1089\zzgen\FO_PRS_TimeSyncOverCANProtocol.complete.txt`

## 文档简介

This protocol specification specifies the message format, sequences and semantics of the AUTOSAR Time Synchronization Protocol over CAN.

The defined Time Synchronization Protocol messages are contained as regular payload of the CAN frames.

The protocol specifies a two-step mechanism:

# In a first step (SYNC message transmission):

  # The transmitting CAN node, i.e. the Time Master, transmits in a first broadcast message, the so-called SYNC message, only the seconds portion T_(`TMGlobalTime_Sec`) of its current local time T_(TMGlobalTime) (this is due to payload length limitations).

    The Time Master, uses CAN low-level mechanisms like the "CAN transmit confirmation" or HW timestamping to detect the point in time T_(SyncEgress) when the message was actually transmitted, i.e. it takes a timestamp of the SYNC message egress.
  # The receiving CAN node, i.e. the Time Slave, samples the timestamp of the ingress of the SYNC message (T_(SyncIngress)) and reads the time information T_(`TMGlobalTime_Sec`) contained in the SYNC message.
# In a second step (Follow-Up (FUP) message transmission):

  # The transmitting CAN node sends a second broadcast message, the so-called Follow-Up (FUP) message. Within that message the Time Master transmits the offset \Deltat_(SyncTxOffset) between

    * the time information transmitted in the SYNC message T_(`TMGlobalTime_Sec`)
    * and the timestamp of the SYNC message egress T_(SyncEgress), i.e., when the SYNC message was actually put on the bus.
  # Upon reception of the FUP message the receiving CAN node, i.e., the Time Slave, calculates its new synchronized time t_(TSGlobalTime) by adding

    * the Time Master's time T_(TMGlobalTime) received in the two messages, i.e.,

      * the timestamp within the SYNC message T_(`TMGlobalTime_Sec`)
      * and the time offset within the FUP message \Deltat_(SyncTxOffset)
    * and the time \Deltat_(LinkDelay) that the SYNC message needs to travel from the Time Master to the Time Slave
    * and the offset \Deltat_(SlaveRxOffset) that has elapsed from ingress of the received SYNC message (T_(SyncIngress)) to the current point in time T_(`TSLocalTime_ReSync`), i.e., when the Time Slave's time is actually synchronized.

Time synchronization using this two-step mechanism is more precise than by receiving just one message and omitting the egress and ingress timestamps. Highest precision of the time synchronization can be achieved, if hardware timestamping for SYNC message ingress T_(SyncIngr

## 模块依赖

This Time Synchronization Protocol can be used on all CAN data link layers as defined in , i.e.,

* CAN Classic
* CAN FD
* and CAN XL.

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

This protocol specification specifies the message format, sequences and semantics of the AUTOSAR Time Synchronization Protocol over CAN.

The defined Time Synchronization Protocol messages are contained as regular payload of the CAN frames.

The protocol specifies a two-step mechanism:

# In a first step (SYNC message transmission):

  # The transmitting CAN node, i.e. the Time Master, transmits in a first broadcast message, the so-called SYNC message, only the seconds portion T_(`TMGlobalTime_Sec`) of its current local time T_(TMGlobalTime) (this is due to payload length limitations).

    The Time Master, uses CAN low-level mechanisms like the "CAN transmit confirmation" or HW timestamping to detect the point in time T_(SyncEgress) when the message was actually transmitted, i.e. it takes a timestamp of the SYNC message egress.
  # The receiving CAN node, i.e. the Time Slave, samples the timestamp of the ingress of the SYNC message (T_(SyncIngress)) and reads the time information T_(`TMGlobalTime_Sec`) contained in the SYNC message.
# In a second step (Follow-Up (FUP) message transmission):

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

Just transmitting the time information from a Time Master to the Time Slaves in a broadcast CAN message has the disadvantage that the time value becomes inaccurate due to CAN specific effects like arbitration and SW related delays. The two-step mechanism of the AUTOSAR Time Synchronization Protocol on CAN significantly reduces those inaccuracies.

In addition, the AUTOSAR Time Synchronization Protocol on CAN provides security and safety mechanisms to protect the time synchronization between Time Master and Time Slave from accidentally or intentionally corrupted on the CAN bus.

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

### 4. 约束与假设
*原文标题：Constraints and assumptions*

* The Time Synchronization on CAN protocol assumes a local reference clock with a maximum tick duration of 2\mus (i.e., with a minimum frequency of 500 kHz).

### 5. 限制
*原文标题：Limitations*

* The Time Synchronization on CAN protocol supports a maximum time value of 4294967295 seconds (2^(32)-1). This is because the time value field in the SYNC messages is limited to 32 bit.
* The Time Synchronization on CAN protocol does not support sharing of PDUs across domains and busses, i.e., the same PDU should not be used for different time domains.

### 6. Dependencies

### 7. Dependencies to other 协议 layers
*原文标题：Dependencies to other protocol layers*

This Time Synchronization Protocol can be used on all CAN data link layers as defined in , i.e.,

* CAN Classic
* CAN FD
* and CAN XL.

### 8. Dependencies to other standards and norms

### 9. Dependencies to the Application Layer

The Time Synchronization over CAN protocol relies on the existence of a Local Time Management on top of the protocol, which provides/consumes the timestamps delivered by the protocol. The Local Time Management is responsible for the following tasks:

* on Time Master side

  * maintains a Global Time t_(TMGlobalTime) driven by a local Clock
  * and distributes (cyclically or event driven) timestamps T_(TMGlobalTime) of the Local Time to connected Time Slaves via the Time Synchronization Protocol
* on Time Slave side

  * adjusts its current Global Time t_(TSGlobalTime) based on timestamps T_(TSGlobalTime) received from the Time Master via the Time Synchronization Protocol
  * and extrapolates/progresses its Global Time t_(TSGlobalTime) based on its local Clock between two timestamps T_(TSGlobalTime)_((i)) and T_(TSGlobalTime)_((i+1)) received from the Time Master.
* on both sides

  * and evaluates error states

In addition, the application may relay the time information received for one Time Domain on one CAN bus to another Time Domanin on another CAN bus and which manages the corresponding status information accordingly.

### 10. Use Cases

| Use Case ID | Use Case Name | Description |
|---|---|---|
| 1 | Distributing a reference time on a CAN bus | A CAN node configured as a Time Master for a Time Domain broadcasts its Local Time to other CAN nodes configured as Time Slaves linked to that Time Domain. |
| 2 | Synchronizing to a reference time on a CAN bus | A CAN node configured as a Time Slave for a Time Domain reveives a timestamp from another CAN node configured as Time Master linked to that Time Domain and synchronizes its local time to the Time Master's time. |
| 3 | Forwarding a reference time from one CAN bus to another one | A CAN node that is configured Time Gateway, i.e., it is configured |

* as a Time Slave for Time Domain on one CAN Bus (i.e., to synchronize its time to a Time Master on that CAN bus)
* and at the same time as Time Master for the same Time Domain on a different CAN bus

"forwards" time from the CAN bus, that it is connected to as a Time Slave, to the CAN bus that it is connected to as a Time Master.

### 11. 相关文档
*原文标题：Related documentation*

### 12. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 13. 相关规范
*原文标题：Related specification*

None

### 14. 协议需求
*原文标题：Protocol Requirements*

### 15. 需求 Traceability
*原文标题：Requirements Traceability*

| Requirement | Description | Satisfied by |
|---|---|---|
| The Timesync over CAN module shall trigger Time Base Synchronization transmission |  |  |
| The Timesync over CAN module shall provide the Time Base after reception of a valid Timesync/TS messages |  |  |
| The Timesync over CAN module shall support means to protect the Time synchronization protocol |  |  |
| The Timesync over CAN module shall support a protocol for precise time measurement and synchronization over CAN |  |  |
| The Timesync over CAN module shall support user specific data within the time measurement and synchronization protocol |  |  |
| The Timesync over CAN module shall support means to secure the Time Synchronization protocol |  |  |

### 16. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

This section lists abbreviations and definitions related to the Time Synchronization on CAN protocol. For additional abbreviations and definitions refer

* to chapter 3 in the RS Time Synchronization
* and to the AUTOSAR Glossary  for general terms and abbreviations.

### 17. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation/Acronym | Description |
|---|---|
| CAN FD | Controller Area Network (CAN) - Flexible Data Rate |
| CAN 2.0 | CAN protocol according to CAN 2.0 |
| CRC | Cyclic Redundancy Checksum |
| D | Domain Id: field in Time Synchronization messages |
| FV | Freshness Value: field in FUP message |
| FVL | Freshness Value Length: field in FUP message |
| FVM | Freshness Value Manager: entity responsible for providing freshness values |
| ICV | Integrity Check Value: field in FUP message |
| ICVL | Integrity Check Value Length: field in FUP message |
| MAC | Message Authentication Code |
| OVS | Overflow Seconds value (field in FUP message) |
| SC | Sequence Counter in Time Synchronization messages |
| SGW | "Synchronized to Gateway" / Time Gateway Synchronization Status of a Time Domain |

* 0 (= SyncToGTM), if the time sent by the Time Master in the Time Synchronization messages is synchronized to the system-wide Time Master of the Time Domain (and no synchronization loss has been detected)
* 1 (= SyncToSubDomain), if the time sent by the Time Master in the Time Synchronization messages is not in sync with the system-wide Time Master of the corresponding Time Domain, but only with (one of) the Time Gateway(s).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 定义 of terms
*原文标题：Definition of terms*

| Term | Description |
|---|---|
| Clock | Entity that measures time |
| FUP message | Follow-Up message |
| Global Time | Time that is synchronized to an external reference clock, i.e., on Time Slave side to a Time Master or on Time Master side to an external time provider (e.g. GNSS) |
| Local Time | Time that not synchronized to an external reference clock, i.e., it is directly derived from the local clock |
| stuck Sequence Counter | Difference between the Sequence Counter of the current message and the Sequence Counter of the previous message is 0 |
| SYNC message | Synchronization message |
| Time Domain | A Time Domain on CAN denotes which CAN nodes are linked to a given Time Master as the source of time. All CAN nodes of the Time Domain are linked to the same CAN bus. |
| Time Gateway | A Time Gateway is a network node, that receives/consumes as a Time Slave the time information of a Time Domain from the Time Master within a certain segment of a communication network and sends the time information within another (or even the same) segment of a communication network (thus acting as a Time Master). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Inputs to the Time 同步协议
*原文标题：Inputs to the Time Synchronization protocol*

| Term | Description |
|---|---|
| APP_TMRequestSyncTx | Input (request) from the application to trigger a SYNC message transmission. |
| APP_TMUserData | Input from the Time Master application for the User Data bytes |
| APP_TMGatewayStatus | Input from the Time Master application for the "Synchronized to Gateway" status flag of the Time Domain as transmitted by a Time Gateway. A Time Gateway sets this flag to 1, if it is no longer synchronized to the system-wide Time Master of the given Time Domain. Otherwise this status flag is reset/not set. |
| APP_TMMasterTimeAvailable | Input from the Time Master application to the Time Master state machine that indicates if a valid Time Master time is available to be transmitted to the Time Slaves. |
| DLL_EventSyncTxSuccess | Input to the Time Master state machine from Data Link Layer indicate a successful transmission of a SYNC message. |
| DLL_EventSyncTxFailure | Input to the Time Master state machine from the Data Link Layer to indicate that a transmission of a SYNC message has failed |
| EXT_TMEventFvCalcFailure | Input from the Freshness Value Manager that indicates a Freshness Value calculation failure. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Outputs of the Time 同步协议
*原文标题：Outputs of the Time Synchronization protocol*

| Term | Description |
|---|---|
| APP_TMEventSyncTxFailure | Output (indication) to the application for a failed SYNC message transmission. |
| APP_TSUserData | Output to the Time Slave application for the User Data byte array. |
| APP_TSUserDataLength | Output to the Time Slave application for the length of the User Data. |
| APP_TSGatewayStatus | Output to the Time Slave application for the "Synchronized to Gateway" status flag of a Time Domain as received by the protocol. |
| DLL_TransmitSyncMsg | Output from the protocol Time Master to the Data Link Layer to request a transmission of a SYNC message on the bus. |
| DLL_TransmitFupMsg | Output from the protocol Time Master to the Data Link Layer to request a transmission of a FUP message on the bus. |

### 21. 时序 Values used by the Time 同步协议
*原文标题：Timing Values used by the Time Synchronization protocol*

| Term | Description |
|---|---|
| \Deltat_(FupRxTimeout) | The timeout interval when waiting for FUP message after a corresponding SYNC message has been successfully received. Configured by parameter Cfg_TSDebounceInterval. |
| \Deltat_(LinkDelay) | Propagation delay of a message on the CAN bus. This value is not measured, but configured by the parameter Cfg_TSLinkDelay. |
| \Deltat_(RxDebounceInterval) | Time interval between the reception of two Time Synchronization messages. Configured by parameter Cfg_TSDebounceInterval. |
| \Deltat_(SlaveSyncLossTimeout) | Timeout interval between two valid FUP messages on Time Slave side. If timeout is exceeded the synchronization to the Time Master is considered lost. Configured by Cfg_TSSyncLossTimeout. |
| \Deltat_(SlaveRxOffset) | Time offset from SYNC ingress to actually re-synchronizing the Time Slave's Local Time (which can only be done after the FUP message has been received). |
| \Deltat_(SyncTxOffset) | Time offset from transmission request for SYNC message to actual egress of the SYNC mesage. |
| \Deltat_(SyncTxInterval) | Time interval for SYNC message transmission requests of the Time Master. Interval is configured by Cfg_TMSyncTxInterval. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 协议规范
*原文标题：Protocol specification*

### 23. Message 类型
*原文标题：Message types*

There are two types of Time Synchronization messages

* SYNC messages
* and FUP messages.

SYNC and FUP messages of the same Time Domain may share the same CAN ID. The multiplexer (indicating if SYNC or FUP payload is contained) is located at byte 0, named as Type.

If Time Synchronization messages are sent by the same Time Master the same CAN ID typcially share the same different Time Domains. If Time Synchronization messages are sent by different Time Masters different CAN IDs need to be used for different Time Domains.

### 24. Message format

Time Synchronization messages may be protected by a CRC. The CRC is optional.

Time Synchronization messages can be secured by an ICV, that provides the integrity and authenticity protection of these messages. The authentication of time is supported on CAN FD/XL only. The usage of a ICV is optional.

The ICV is included in the FUP messages. This is to ensure a higher performance of the system. However, the data used for ICV calculation includes the payload of SYNC and FUP messages.

The actual message layout of the SYNC and FUP messages varies depending on the following configuration settings of the Time Master

* CRC protection (on / off)
* ICV protection (on / off)

The message layout is indicated by the Message Type Field in the individual message as given in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. SYNC Message Format

SYNC message format - not CRC protected
  Upstream requirements:
  Previous Identifiers: `SWS_CanTSyn_00015`
⌈
| Byte | Bit Position | Field Name | Field Value Range | Description |
|---|---|---|---|---|
| 0 |  | Type | 0x10 |  |
| 1 |  | UserByte_1 | default: 0 |  |
| 2 | 7..4 | D | 0..15 | Time Domain Id |
| 3..0 | SC | 0..15 | Sequence Counter |  |
| 3 |  | UserByte_0 | default: 0 |  |
| 4..7 |  | SyncTimeSec | 0 .. 4294967295 s | Seconds part of the time |

⌋

 SYNC message format - CRC protected
  Upstream requirements: ,
  Previous Identifiers: `SWS_CanTSyn_00017`
⌈
| Byte | Bit Position | Field Name | Field Value Range | Description |
|---|---|---|---|---|
| 0 |  | Type | 0x20 |  |
| 1 |  | CRC |  |  |
| 2 | 7..4 | D | 0..15 | Time Domain Id |
| 3..0 | SC | 0..15 | Sequence Counter |  |
| 3 |  | UserByte_0 | default: 0 |  |
| 4..7 |  | SyncTimeSec | 0 .. 4294967295 s | Seconds part of the time |

⌋

### 26. Follow-up (FUP) Message Format

FUP message format - not CRC protected, not ICV secured
  Upstream requirements:
  Previous Identifiers: `SWS_CanTSyn_00016`
⌈
| Byte | Bit Position | Field Name | Field Value Range | Description |
|---|---|---|---|---|
| 0 |  | Type | 0x18 |  |
| 1 |  | UserByte_2 | default: 0 |  |
| 2 | 7..4 | D | 0..15 | Time Domain Id |
| 3..0 | SC | 0..15 | Sequence Counter |  |
| 3 | 7..3 | reserved | default: 0 |  |
| 2 | SGW | SyncToGTM = 0 |  |  |
|  |  | SyncToSubDomain = 1 |  |  |
| 1..0 | OVS | 0 .. 3 s | Overflow into seconds |  |
| 4..7 |  | SyncTimeNSec | 0 .. 999999999 ns | Nanoseconds part of time |

⌋

 FUP message format - CRC protected, not ICV secured
  Upstream requirements: ,
  Previous Identifiers: `SWS_CanTSyn_00018`
⌈
| Byte | Bit Position | Field Name | Field Value Range | Description |
|---|---|---|---|---|
| 0 |  | Type | 0x28 |  |
| 1 |  | CRC |  |  |
| 2 | 7..4 | D | 0..15 | Time Domain Id |
| 3..0 | SC | 0..15 | Sequence Counter |  |
| 3 | 7..3 | reserved | default: 0 |  |
| 2 | SGW | SyncToGTM = 0 |  |  |
|  |  | SyncToSubDomain = 1 |  |  |
| 1..0 | OVS | 0 .. 3 s | Overflow into seconds |  |
| 4..7 |  | SyncTimeNSec | 0 .. 999999999 ns | Nanoseconds part of time |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 数据类型
*原文标题：Data Types*

Not applicable.

### 28. 服务 / Commands
*原文标题：Services / Commands*

Not applicable

### 29. Sequences (下层 layer)
*原文标题：Sequences (lower layer)*

shows the protocol sequence in  with a little more detail by adding the Data Link Layer.

### 30. the Time 同步协议的通用行为
*原文标题：General Behavior of the Time Synchronization Protocol*

Unique Domain Id
  Upstream requirements:
⌈
The `Cfg_TDDomainId` shall be unique per CAN bus.
⌋

Note: That means no two Time Domains with the same `Cfg_TDDomainId` will coexist on a given CAN bus.

 Mapping of Time Domain to CAN ID
  Upstream requirements:
⌈
For a given CAN bus each Time Domain `Cfg_TDDomainId` shall be mapped to a different CAN ID (refer to parameter `Cfg_TDCanId`).
⌋

### 31. CRC Protection of Time 同步 Messages
*原文标题：CRC Protection of Time Synchronization Messages*

The CRC protection of the payload of the Time Synchronization messages is based on AUTOSAR E2E Profile 2. For details refer to .

The use of a CRC checksum is optional and depends on the setting of

* configuration parameter `Cfg_TMCrcProtected` on Time Master side
* configuration parameter `Cfg_TSCrcVerified` on Time Slave side

The 8 bit CRC checksum is calculated taking into account

* the payload to be protected
* and a configured Data Id

 CRC Checksum Algorithm of Time Synchronization Protocol
  Upstream requirements:
⌈
The 8 bit CRC checksum of the Time Synchronization message shall be calculated using the following parameters

* generator polynomial: 0x2F
* initial value: 0xFF
* XOR value: 0xFF
* input data: not reflected
* result data: not reflected
⌋

Due to the limited length of the 8 bit polynomial, it is possible that a masquerading fault cannot be detected in a specific cycle when evaluating a received CRC value. By including a so called Data ID into the CRC calculation a masquerading fault can be detected in one of the successive communication cycles.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. ICV Calculation of Time 同步 Messages
*原文标题：ICV Calculation of Time Synchronization Messages*

The Time Synchronization protocol as described in this document provides a mechanism to verify the authenticity and freshness of secured Time Synchronization messages.

The requirements in

* chapter ,
* chapter ,
* chapter
* and chapter

define only the general flow of calculating the FreshnessValue and ICV but have no details about the actual MAC or Signature calculation.

For the resource constraint embedded use case with static participants, the use of Message Authentication Codes (MACs) as a basis for authentication (e.g. a CMAC  based on AES  with an adequate key length) is proposed.

In case a MAC is used, it is possible to transmit and compare only parts of the MAC. This is known as MAC truncation. However, this results in a lower security level at least for forgery of single MACs. It is proposed to always use a key length of at least 128 bit, a MAC truncation can be beneficial. Of course, the actual length of the MAC for each use case has to be chosen carefully. For some guidance, we refer to appendix A of . In general, MAC sizes of 64 bit and above are considered by NIST to provide sufficient protection against guessing attacks.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. User 数据
*原文标题：User Data*

User Data are part of each Time Domain. User Data are set by the system-wide Time Master of each Time Base and distributed as part of the Time Synchronizatoin messages.

User Data are used for application specific purposes, e.g.

* for debugging purposes during integration
* and/or to characterize the Time Base, e.g.,

  * regarding the quality of the underlying clock source
  * or regarding the progress of time (e.g., if Synchronized Time has been restored from non-volatile memory after reset).

Note, that the status information, if contained in the User Data, is from the Time Master's point of view.

User Data consist of up to three bytes. Due to the frame format of various Time Synchronization messages it is not possible to transmit all three bytes on the CAN system. It is the responsibility of the system designer to only use those User Data bytes that can be distributed inside the CAN network.

### 34. Time Master

The AUTOSAR Time Synchronization protocol over CAN specifies a protocol state machine for the Time Master and one for the Time Slave. The protocol state machines define, how to process the SYNC and FUP messages of the given Time Domain on Time Master and on Time Slave side.

In the following the term "Time Master" refers to a CAN node that is configured as a Time Master for a given Time Domain and that complies to the Time Master protocol state machine of the AUTOSAR Time Synchronization Protocol over CAN.

Similarly, the term "Time Slave" refers to a CAN node that is configured as a Time Slave for a given Time Domain and that complies to the Time Slave protocol state machine of the AUTOSAR Time Synchronization Protocol over CAN.

 illustrates the protocol state machine of a Time Master.

### 35. 状态 TM_Init
*原文标题：State TM_Init*

Initialize Sequence Counter of Time Master
  Upstream requirements: ,
⌈
If in state `TM_Init`, then the Time Master shall

* initialize the Sequence Counter value for the given Time Domain with 0
* and set the \Deltat_(SyncTxInterval) to 0.
⌋

### 36. Transition from TM_Init

Transition from state `TM_Init`
  Upstream requirements:
⌈
When initialization (`TM_Init`) is completed, the Time Master shall go to state `TM_Idle`.
⌋

### 37. 状态 TM_Idle
*原文标题：State TM_Idle*

In state `TM_Idle` the Time Master waits for the next SYNC message transmission request from the application. The Time Master is in this state after initialization and returns to this state when the Time Master has successfully completed or aborted the Time Synchronization sequence.

### 38. Transition from TM_Idle

The Time Synchronization over CAN protocol supports cyclic as well as event driven transmission requests to start a Time Synchronization sequence. If the parameter `Cfg_TMSyncTxInterval`

* is set to 0, the protocol waits for an external trigger request by the application to start the synchronization sequence
* is greater than 0, the protocol itself cyclically triggers a synchronization sequence

 Triggering of synchronization sequence by external request
  Upstream requirements:
⌈
If

* in state `TM_Idle`
* and `Cfg_TMSyncTxInterval` is set to 0
* and t_(TMGlobalTime) is valid (refer to `APP_TMMasterTimeAvailable`),

when a request to start a Time Synchronization sequence is received (refer to `APP_TMRequestSyncTx`), then the Time Master shall set the protocol state of that Time Domain to state `TM_BuildSyncMsg`.
⌋

 Cyclic triggering of synchronization sequence
  Upstream requirements:
⌈
If

* in state `TM_Idle`
* and `Cfg_TMSyncTxInterval` is greater than 0
* and t_(TMGlobalTime) is valid (refer to `APP_TMMasterTimeAvailable`),

when \Deltat_(SyncTxInterval) has elapsed (i.e., \Deltat_(SyncTxInterval) equals 0), then the Time Master shall

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. 状态 TM_BuildSyncMsg
*原文标题：State TM_BuildSyncMsg*

illustrates the flow of actions when building a SYNC message.

### 40. Set SYNC Message 类型 Field (类型)
*原文标题：Set SYNC Message Type Field (Type)*

Calculation of the Message Type Field of a SYNC Message
  Upstream requirements: ,
⌈
If in state `TM_BuildSyncMsg`, then the Time Master shall build a SYNC message and set the Message Type field of the SYNC message depending on the configuration parameter `Cfg_TMCrcProtected` of the given Time Domain according to requirement .
⌋

 Message Type of a SYNC Message
  Upstream requirements: ,
⌈
| Configuration | Message | < |
|---|---|---|
| Cfg_TMCrcProtected | Message Type | Description |
| CRC_NOT_SUPPORTED | 0x10 | SYNC message, |
|  | not CRC protected |  |
| CRC_SUPPORTED | 0x20 | SYNC message, |
|  | CRC protected |  |

⌋

### 41. Set SYNC Message Domain Id Field (D)

Calculate Time Domain Id of a SYNC Message
  Upstream requirements: ,
⌈
The Time Master shall set the D field of the SYNC message to the Time Domain Id `Cfg_TDDomainId` of the given Time Domain.
⌋

### 42. Set SYNC Message Sequence Counter Field (SC)

Time Master Calculation of the Sequence Counter value of a SYNC Message
  Upstream requirements: ,
⌈
If in state `TM_BuildSyncMsg`, then the Time Master shall increment sequence counter value by 1 for the given Time Domain.

When the sequence counter value reaches 16, the Time Master shall set the sequence counter value back to 0.
⌋

Note: The message transmission does not have to be successful for incrementing the sequence counter. The sequence counter is incremented for each SYNC message request.

 Time Master Update of the SC Field of a SYNC Message
  Upstream requirements: ,
⌈
When the Time Master has updated the sequence counter value of the given Time Domain (refer to ), then the Time Master shall set the SC field of the SYNC message to the updated sequence counter value.
⌋

### 43. Get Current Local Time and User/Status 数据
*原文标题：Get Current Local Time and User/Status Data*

The Time Master has to derive the current time (and corresponding Time Domain status and user data) of the Time Master, before setting the corresponding fields of the SYNC and FUP message.

 Get Current Time and Status from Application
  Upstream requirements:
⌈
If in state `TM_BuildSyncMsg`, then the Time Master shall read

* the current Time Master's Global Time T_(TMGlobalTime)
* and the current Time Master's Local Time T_(TMLocalTime)
* and the Time Gateway Synchronization status (via `APP_TMGatewayStatus`)
* and the user data (via to `APP_TMUserData`)

for the given Time Domain in a consistent way from the application.
⌋

Note: "in a consistent way" is typically achieved by reading the data in "atomic", i.e., "non-interruptable" way.

Note: Although the Time Gateway Synchronization status is not needed for the transmission of the SYNC message (because it is contained in the SGW field of the subsequent FUP message) the Time Gateway Synchronization status shall reflect the status at the point in time when capturing the time information for the SYNC message.

### 44. Set SYNC Message Seconds Field (SyncTimeSec)

Calculation of the SyncTimeSec Field of a SYNC Message
  Upstream requirements:
⌈
When the Time Master has read the current time (refer to ) then the Time Master set SyncTimeSec field of the SYNC message to the seconds part T_(`TMGlobalTime_Sec`) of T_(TMGlobalTime).
⌋

Note: Taking the seconds part means truncating the nanoseconds part.

### 45. Set SYNC Message User 数据 Fields (UserData_0/_1)
*原文标题：Set SYNC Message User Data Fields (UserData_0/_1)*

Time Master Calculation of the UserData_0 Field of a SYNC Message
  Upstream requirements:
  Previous Identifiers: `SWS_CanTSyn_00013`
⌈
When the Time Master has read the current user data (refer to ) then the Time Master shall set the field UserData_0 of the SYNC message to the value `APP_TMUserData`.
⌋

 Time Master Calculation of the UserData_1 Field of a SYNC Message
  Upstream requirements: ,
  Previous Identifiers: `SWS_CanTSyn_00013`
⌈
If the configuration parameter `Cfg_TMCrcProtected` is set to `CRC_NOT_SUPPORTED`, when the Time Master has read the current user data from the application (refer to ) then the Time Master shall set the field UserData_1 of the SYNC message to the value `APP_TMUserData`.
⌋

Note: The configuration parameter `Cfg_TMCrcProtected` needs to be considered, because only if the message is not CRC protected, the UserData_1 field is available at all. Otherwise, the UserData_1 field is used for the CRC.

### 46. Set SYNC Message Checksum Field (CRC)

Calculation of CRC Field for SYNC Messages
  Upstream requirements:
⌈
If

* the configuration parameter `Cfg_TMCrcProtected` is set to `CRC_SUPPORTED`
* and the

  * Type,
  * D,
  * SC
  * SyncTimeSec,
  * and UserByte_0

  fields of the SYNC message have been set,

then the Time Master shall generate the CRC field of the SYNC message by calculating the CRC according to  over bytes 2 to 7 and the DataID, where

* the DataID is calculated according to
* and byte 2 is applied first, followed by the other bytes in ascending order, and the DataID last.
⌋

### 47. Transition from TM_BuildSyncMsg

Transition from state `TM_BuildSyncMsg`
  Upstream requirements:
⌈
If

* in state `TM_BuildSyncMsg`
* and the configuration parameter `Cfg_TMCrcProtected` is set to `CRC_NOT_SUPPORTED`
* and the

  * Type,
  * D,
  * SC,
  * SyncTimeSec,
  * UserByte_0,
  * and UserByte_1

  of the SYNC message have been set,

then the Time Master

* shall transmit the SYNC message (refer to `DLL_TransmitSyncMsg`)
* and start the SYNC message transmission timeout \Deltat_(SyncTxTimeout)
* and transition to the protocol state `TM_TransmitSyncMsg` for the given Time Domain.

.
⌋

 Transition from state `TM_BuildSyncMsg`, if SYNC Message is CRC protected
  Upstream requirements: ,
⌈
If

* in state `TM_BuildSyncMsg`
* and the configuration parameter `Cfg_TMCrcProtected` is set to `CRC_SUPPORTED`
* and the CRC checksum of the SYNC message has been calculated,

then the Time Master shall

* transmit the SYNC message (refer to `DLL_TransmitSyncMsg`)
* and start the SYNC message transmission timeout \Deltat_(SyncTxTimeout)
* and transition to the protocol state `TM_TransmitSyncMsg` for the given Time Domain.
⌋

### 其余 63 章（内容从略，见纯文本全文）

48. 状态 TM_TransmitSyncMsg
49. Transition from TM_TransmitSyncMsg
50. 状态 TM_DebounceBeforeFupMsg
51. Transition from TM_DebounceBeforeFupMsg
52. 状态 TM_BuildFupMsg
53. Set FUP Message 类型 Field (类型)
54. Set FUP Message Domain Id Field (D)
55. Set FUP Message Sequence Counter Field (SC)
56. Set FUP Message Nanoseconds Field (SyncTimeNSec and OVS)
57. Set FUP Message Time Gateway 同步 Status Field (SGW)
58. Set FUP Message User 数据 Field (UserData_2)
59. Set FUP Message Checksum Field (CRC)
60. Set Freshness Value Field (FV and FVL)
61. Set Integrity Check Value Fields (ICV and ICVL)
62. Transition from TM_BuildFupMsg
63. 状态 TM_TransmitFupMsg
64. Transition from TM_TransmitFupMsg
65. 状态 TM_DebounceBeforeSyncMsg
66. Transition from TM_DebounceBeforeSyncMsg
67. Time Slave
68. 状态 TS_Init
69. Transition from TS_Init
70. 状态 TS_Idle
71. Transition from TS_Idle
72. 状态 TS ReceiveSyncMsg
73. Check SYNC Message 类型 Field (类型)
74. Check SYNC Message Domain Id Field (D)
75. Check SYNC Message Sequence Counter Field (SC)
76. Sequence Counter Hysteresis
77. Check SYNC Message CRC Field (CRC)
78. Get SYNC Message Seconds Field (SyncTimeSec)
79. Get SYNC Message User 数据 Fields (UserData_0/_1)
80. Transition from TS_ReceiveSyncMsg
81. 状态 TS_DebounceBeforeFupMsg
82. 状态 TS_WaitForFupMsg
83. 状态 TS_ReceiveFupMsg
84. Check FUP Message 类型 Field (类型)
85. Check FUP Message Domain Id Field (D)
86. Check FUP Message Sequence Counter Field (SC)
87. Check FUP Message Nanoseconds Overflow Field (OVS)
88. Check FUP Message CRC Field (CRC)
89. ICV Secured FUP Messages
90. Check Freshness Value Fields (FV and FVL)
91. Check ICV Value Fields (ICV and ICVL)
92. Update of Time Slave
93. Update Local Time (from SyncTimeNSec and OVS) Fields
94. Update User 数据 (from UserData_2) Field
95. Update Time Gateway 同步 Status (from SGW) Field
96. Transition from TS_ReceiveFupMsg
97. 状态 TS_DebounceBeforeSyncMsg
98. 错误 messages
99. 配置 Parameters
100. 配置 Parameters of a Time Domain
101. 配置 Parameters of the Time Master of a Time Domain
102. 配置 Parameters of a Time Slave of a Time Domain
103. 协议 usage and 指南
104. 附录
105. 附录
106. Change history of AUTOSAR traceable items
107. Traceable item history of this document according to AUTOSAR Release R25-11
108. Added 规范 Items in R25-11
109. Changed 规范 Items in R25-11
110. Deleted 规范 Items in R25-11
