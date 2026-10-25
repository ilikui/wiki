# Time Synchronization over Ethernet Protocol Specification (`TimeSyncOverEthernetProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 897 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_TimeSyncOverEthernetProtocol_897\AUTOSAR_FO_PRS_TimeSyncOverEthernetProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_TimeSyncOverEthernetProtocol_897\AUTOSAR_FO_PRS_TimeSyncOverEthernetProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_TimeSyncOverEthernetProtocol_897\zzgen\FO_PRS_TimeSyncOverEthernetProtocol.complete.txt`

## 文档简介

This protocol specification specifies the format, message sequences and semantics of the AUTOSAR Time synchronization Protocol.

The Time synchronization Protocol handles the distribution of time information over Ethernet. The Ethernet mechanism is based on existing PTP (Precision Time Protocol) mechanisms that are described in standards like IEEE1588 (IEEE Standard for a Precision Clock Synchronization Protocol for Networked Measurement and Control Systems) and IEEE802.1AS (Timing and Synchronization for Time-Sensitive Applications in Bridged Local Area Networks). IEEE802.1AS, also known as gPTP (generalized Precision Time Protocol), can be seen as a profile (or subset) for using IEEE1588. However, neither IEEE1588 nor IEEE802.1AS have been developed considering automotive requirements. Therefore, the Time Synchronization over Ethernet uses the current mechanisms as defined in IEEE802.1AS with specific extensions and/or restrictions. Automotive Ethernet networks deviate from commercial Ethernet networks in terms of the following items:

* Role and functions of ECUs is known and defined a priori
* The network is static, i.e. components like ECUs, switches and characteristics like cable length, don't change during operation or even after switching off and switching on the vehicle. Components of course may be unavailable (due to failure situations or by purpose) but mostly only change when the vehicle is at a service facility.

Therefore, dynamic mechanisms like determining the Global Time Master (denoted as grandmaster in IEEE802.1AS) by the best master clock algorithm (BMCA) during operation are not required. It is also possible to omit the cyclic measurement of link delays on Ethernet links due to the static nature of the automotive network and restrict mechanisms that belonging to dynamic network topology.

## 模块依赖

There are no dependencies to other protocols.

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

This protocol specification specifies the format, message sequences and semantics of the AUTOSAR Time synchronization Protocol.

The Time synchronization Protocol handles the distribution of time information over Ethernet. The Ethernet mechanism is based on existing PTP (Precision Time Protocol) mechanisms that are described in standards like IEEE1588 (IEEE Standard for a Precision Clock Synchronization Protocol for Networked Measurement and Control Systems) and IEEE802.1AS (Timing and Synchronization for Time-Sensitive Applications in Bridged Local Area Networks). IEEE802.1AS, also known as gPTP (generalized Precision Time Protocol), can be seen as a profile (or subset) for using IEEE1588. However, neither IEEE1588 nor IEEE802.1AS have been developed considering automotive requirements. Therefore, the Time Synchronization over Ethernet uses the current mechanisms as defined in IEEE802.1AS with specific extensions and/or restrictions. Automotive Ethernet networks deviate from commercial Ethernet networks in terms of the following items:

* Role and functions of ECUs is known and defined a priori
* The network is static, i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

The Time synchronization protocol is used to

* synchronize time bases and the corresponding Ethernet messages
* measure time differences between Ethernet frames

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

The concept is targeted at supporting time-critical and safety-related automotive applications such as airbag systems and braking systems. This doesn't mean that the concept has all that is required by such systems though, but crucial timing-related features that cannot be deferred to implementation are considered.

The concept is also targeted to secure the time bases to support security-critical use-cases such as digital certificate validity check and secure logging. It is also important to secure the time bases used in time-critical and safety-related automotive applications.

### 4. 约束与假设
*原文标题：Constraints and assumptions*

This document specifies the AUTOSAR Time Synchronization Protocol. It was created during elaboration of the AUTOSAR Foundation Standard 1.5.0 which took place in parallel to the development of the AUTOSAR Classic Standard 4.4.0. It already reflects all changes implied to TimeSyncOverEthernet by the work which was done for AUTOSAR Classic Platform.

### 5. 限制
*原文标题：Limitations*

* No support of BMCA protocol, like specified in
* No support of Announce and Signaling messages, like specified in .
* The reception of a `Pdelay_Req` is not taken as a pre-condition to start with the transmission of Sync messages.
* While IEEE 802.1AS states, that IEEE 802.1AS message shall not have a VLAN tag nor a priority tag, the Time synchronization protocol would allow Time Synchronization on VLANs under the condition, that the switch HW supports forwarding of reserved multicast addresses using the range of 01:80:C2:00:00:00 .. 0F
* 'CRC secured' in the context of this document refers to CRC integrity protection mechanism and does not imply that CRC is used as a cybersecurity solution.
* No support of securing the messages of Pdelay protocol.

### 6. Accuracy

The accuracy of Time Synchronization depends on various factors (e.g., oscillator accuracy, number of bridges in the network path, configuration, ...). Refer to , for recommendations on how to properly configure the overall system for highest possible accuracy.

### 7. Dependencies

### 8. Dependencies to other 协议 layers
*原文标题：Dependencies to other protocol layers*

There are no dependencies to other protocols.

### 9. Dependencies to other standards and norms

The AUTOSAR Time Synchronization protocol is derived from . For VLAN characteristics refer to .

### 10. Dependencies to the Application Layer

There are no dependencies to the application layer.

### 11. 协议需求
*原文标题：Protocol Requirements*

### 12. 需求 Traceability
*原文标题：Requirements Traceability*

| Requirement | Description | Satisfied by |
|---|---|---|
| The implementation of Time Synchronization shall provide Freshness Value (FV) to TSP modules required to secure the time information |  |  |
| The Timesync over Ethernet module shall trigger Time Base Synchronization transmission |  |  |
| The Timesync over Ethernet module shall support IEEE 802.1AS as well as AUTOSAR extensions |  |  |
| The Timesync over Ethernet module shall detect and handle errors in synchronization protocol / communication |  |  |
| The configuration of the Time Synchronization over Ethernet module shall allow the module to work as a Time Master |  |  |
| The configuration of the Time Synchronization over Ethernet module shall allow the module to work as a Time Slave |  |  |
| The Implementation of the Time Synchronization shall evaluate and propagate Time Gateway relevant information |  |  |
| The Timesync over Ethernet module shall access all communication ports belonging to Time Synchronization |  |  |
| The Timesync over Ethernet module shall support means to protect the Time Synchronization protocol |  |  |
| The Timesync over Ethernet module shall support user specific data within the time measurement and synchronization protocol |  |  |
| The Timesync over E |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

### 14. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| (G)TD | (Global) Time Domain |
| (G)TM | (Global) Time Master |
| <Bus>TSyn | A bus specific Time Synchronization module |
| AVB | Audio Video Bridging |
| BMCA | Best Master Clock Algorithm |
| CID | Company ID (IEEE) |
| CRC | Cyclic Redundancy Checksum |
| Debounce Time | Minimum gap between two Tx messages with the same PDU |
| ETH | Ethernet |
| EthTSyn | Time Synchronization Provider module for Ethernet |
| Follow_Up | Time transport message (Follow-Up) |
| GM(C) | Grand Master (Clock) |
| ICV | Integrity Check Value |
| IDS | Intrusion Detection System |
| Pdelay | Propagation / path delay as given in IEEE 802.1AS |
| Pdelay_Req | Propagation / path delay request message |
| Pdelay_Resp | Propagation / path delay response message |
| Pdelay_Resp_Follow_Up | Propagation / path delay Follow-Up message |
| PDU | Protocol Data Unit |
| PTP | Precision Time Protocol |
| StbM | Synchronized Time-Base Manager |
| Timesync | Time Synchronization |
| Sync | Time synchronization message (Sync) |
| TG | Time Gateway |
| TLV | Type/Tag-Length-Value encoding scheme used by various protocols (e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 协议规范
*原文标题：Protocol specification*

### 16. 通用
*原文标题：General*

Default Configuration Values Compliance
  Upstream requirements:
⌈
The Time Master and Time Slave shall use the default configuration values as defined by  (e.g. MAC destination address or Ethernet frame type), if not otherwise specified within this specification.
⌋

 State Machine Startup Without Announce Recognition
  Upstream requirements:
⌈
The Time Master and Time Slave shall start their protocol state machines without Announce message recognition.
⌋

 Ignore Announce Messages on Reception
  Upstream requirements:
⌈
The Time Master and Time Slave shall ignore the Announce message on the receiver side.
⌋

### 17. VLAN 支持
*原文标题：VLAN Support*

Conditional Use of VLAN and Priority Tags
  Upstream requirements:
⌈
If FramePrio exists, a frame format with priority and VLAN tags shall be used. Otherwise a frame format without priority and VLAN tags shall be used.
⌋

### 18. Message format

Some message extensions to the  are required. This is accomplished by a new AUTOSAR specific TLV, which is using a new IEEE CID (0x1A75FB) belonging to AUTOSAR only. An IEEE 802.1AS TLV is only available for the message-type Announce (not considered by this specification) and `Follow_Up` (extended by this specification). The organizationId of the new TLV identifies the AUTOSAR TLV, which is succeeding the IEEE 802.1AS TLV.

According to  a Non-AUTOSAR aware switch is supposed to not propagate the AUTOSAR TLV as this TLV is not supported by a Non-AUTOSAR aware switch.

The AUTOSAR TLV contains Sub-TLVs which always consist of a Type, a Length and a data area.

The usage of the CRC is optional. To ensure a great variability between several time observing units, the configuration decides of how to handle the CRC of a secured Sub-TLV. If the receiver does not support the CRC calculation, it might be possible, that a receiver just uses the given values, without evaluating the CRC itself.

If the CRC option is used, one side effect must be considered. Due to the fact, that Pdelay messages do not contain any TLV, a CRC protection of the related timestamps is not possible.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Header format

### 20. Sync and Follow_Up acc. to IEEE 802.1AS

IEEE 802.1AS Sync and `Follow_Up` Format Support
  Upstream requirements:
⌈
If MessageCompliance is set to TRUE, Sync and `Follow_Up` format shall be supported acc. to .
⌋

Note: To ensure compatibility with  Domain Number Zero 0 must be present.

The table below gives an overview, how an  conformant Sync looks like.

| Sync Message Header | < | < | < | < |
|---|---|---|---|---|
| High Nibble | Low Nibble | Octets | Offset | Value |
| transportSpecific | message-type | 1 | 0 | 0x10 |
| reserved | versionPTP | 1 | 1 | 0x02 |
| messageLength |  | 2 | 2 | 44 |
| domainNumber |  | 1 | 4 | (UInteger8) domainNumber = 0..127 |
| reserved |  | 1 | 5 | 0 |
| flags |  | 2 | 6 | Octet 0: 0x02, Octet 1: 0x00 |
| correctionField |  | 8 | 8 | (Integer64) correctionField |
| reserved |  | 4 | 16 | 0 |
| sourcePortIdentity |  | 10 | 20 | (PortIdentity) portIdentity from origin Time Aware End Station |
| sequenceId |  | 2 | 30 | (UInteger16) SyncSequenceId =(UInteger16) (prevSyncSequenceId+1) |
| control |  | 1 | 32 | 0 |
| logMessageInterval |  | 1 | 33 | (Integer8) currentLogSyncInterval |
| Sync Message Fields | < | < | < | < |
| High Nibble | Low Nibble | Octets | Offset | Value |
| PTP Message Header |  | 34 | 0 |  |
| reserved |  | 10 | 34 | 0 |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Sync and Follow_Up acc. to AUTOSAR

AUTOSAR Sync and `Follow_Up` Format Support
  Upstream requirements: , ,
⌈
If MessageCompliance is set to FALSE, the Sync and `Follow_Up` format shall be supported acc. to: `Follow_Up` Message Header and Sync Message Header  depending on configuration.
⌋

 AUTOSAR TLV in `Follow_Up` Message
  Upstream requirements: , , ,
⌈
If MessageCompliance is set to FALSE, the `Follow_Up` shall contain an AUTOSAR TLV, depending on configuration.
⌋

Message Header

| Sync Message Header | < | < | < | < |
|---|---|---|---|---|
| High Nibble | Low Nibble | Octets | Offset | Value |
| transportSpecific | message-type | 1 | 0 | 0x10 |
| reserved | versionPTP | 1 | 1 | 0x02 |
| messageLength |  | 2 | 2 | 44 |
| domainNumber |  | 1 | 4 | (UInteger8) domainNumber = 0..127 |
| reserved |  | 1 | 5 | 0 |
| flags |  | 2 | 6 | Octet 0: 0x02, Octet 1: 0x00 |
| correctionField |  | 8 | 8 | (Integer64) correctionField |
| reserved |  | 4 | 16 | 0 |
| sourcePortIdentity |  | 10 | 20 | (PortIdentity) portIdentity from origin Time Aware End Station |
| sequenceId |  | 2 | 30 | (UInteger16) SyncSequenceId = (UInteger16) (prevSyncSequenceId+1) |
| control |  | 1 | 32 | 0 |
| logMessageInterval |  | 1 | 33 | (Integer8) currentLogSyncInterval |
| Sync Message Fields | < | < | < | < |
| High Nibble | Low Nibble | Oc |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Follow_Up Message Header [AUTOSAR

]

 `Follow_Up` Message Header Length Handling
  Upstream requirements: , ,
⌈
The messageLength of the `Follow_Up` Message Header has to be adapted according to the length of all existing TLVs.
⌋

### 23. AUTOSAR TLV Header

AUTOSAR TLV Header Multiplicity
  Upstream requirements: , ,
⌈
The AUTOSAR TLV Header has a multiplicity of 1.
⌋

 Requirement for Sub-TLV Presence with TLV Header
  Upstream requirements: , ,
⌈
If an AUTOSAR TLV Header exists, at least one AUTOSAR or OEM Sub-TLV must exist as well.
⌋

 Length Field Adjustment Based on Sub-TLVs
  Upstream requirements: , ,
⌈
If an AUTOSAR TLV Header exists, the lengthField shall be adapted according to the accumulated size of the subsequent AUTOSAR and OEM Sub-TLVs.
⌋

### 24. AUTOSAR and OEM Sub-TLVs

In addition to Sub-TLVs defined by AUTOSAR it is allowed to also use OEM specific Sub-TLVs.

 OEM Sub-TLV Type Field Range
  Status: DRAFT
  Upstream requirements: ,
⌈
OEM Sub-TLVs shall have a Type field in the range of 0xA0 to 0xFF. The AUTOSAR Time Synchronization protocol shall reserve this range for OEM specific Sub-TLVs.
⌋

 Sub-TLV Placement After TLV Header
  Upstream requirements: , ,
⌈
If an AUTOSAR or Sub-TLV exists, it shall be placed after the AUTOSAR TLV Header.
⌋

 Sub-TLVs Contiguity Requirement
  Upstream requirements: , , ,
⌈
If more than one AUTOSAR or OEM Sub-TLV exists, each Sub-TLV shall be placed after the preceding Sub-TLV without gaps.
⌋

Note: If more than one Sub-TLV exists, the position of each Sub-TLV is arbitrary except Sub-TLV:Time Authenticated. It is assumed that the order of the Sub-TLVs does not change during runtime for a given configuration.

 Placement of Sub-TLV:Time Authenticated
  Status: DRAFT
  Upstream requirements: , , ,
⌈
If a Sub-TLV:Time Authenticated exists, a Time Master shall place it after the last AUTOSAR Sub-TLV.
⌋

Note: OEM Sub-TLVs can be placed before or after a Sub-TLV:Time Authenticated.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. AUTOSAR Sub-TLV：Time Secured
*原文标题：AUTOSAR Sub-TLV:Time Secured*

Multiplicity and Condition for Sub-TLV:Time Secured
  Upstream requirements: ,
⌈
The AUTOSAR Sub-TLV:Time Secured has a multiplicity of 1 and is only available, if CRC protection is required.
⌋

 Condition for Sending Sub-TLV:Time Secured
  Upstream requirements: , ,
⌈
If MessageCompliance is FALSE and TxSubTLVTime is set to TRUE, the Time Master shall send a `Follow_Up`, which contains an AUTOSAR Sub-TLV:Time Secured.
⌋

### 26. AUTOSAR Sub-TLV：Status Secured / Not Secured
*原文标题：AUTOSAR Sub-TLV:Status Secured / Not Secured*

Multiplicity and CRC Status for Sub-TLV:Status
  Upstream requirements: ,
⌈
The AUTOSAR Sub-TLV:Status has a multiplicity of 1 and can either be CRC protected (Status Secured) or not (Status Not Secured).
⌋

 Condition for Sending Sub-TLV:Status
  Upstream requirements: , ,
⌈
If MessageCompliance is set to FALSE and TxSubTLVStatus is set to TRUE, the Time Master shall send a `Follow_Up`, which contains an AUTOSAR Sub-TLV:Status Secured or Sub-TLV:Status Not Secured.
⌋

### 27. AUTOSAR Sub-TLV：UserData Secured / Not Secured
*原文标题：AUTOSAR Sub-TLV:UserData Secured / Not Secured*

Multiplicity and CRC Status for Sub-TLV:UserData
  Upstream requirements: ,
⌈
The AUTOSAR Sub-TLV:UserData has a multiplicity of 1 and can either be CRC protected (UserData Secured) or not (UserData Not Secured).
⌋

 Condition for Sending Sub-TLV:UserData
  Upstream requirements: , ,
⌈
If MessageCompliance is set to FALSE and TxSubTLVUserData is set to TRUE, the Time Master shall send a `Follow_Up`, which contains an AUTOSAR Sub-TLV:UserData Secured or Sub-TLV:UserData Not Secured.
⌋

### 28. AUTOSAR Sub-TLV：Time Authenticated
*原文标题：AUTOSAR Sub-TLV:Time Authenticated*

Multiplicity of Sub-TLV:Time Authenticated
  Upstream requirements:
⌈
The AUTOSAR Sub-TLV:Time Authenticated shall have a multiplicity of 5.
⌋

 CRC Status of Sub-TLV:Time Authenticated
  Upstream requirements:
⌈
The AUTOSAR Sub-TLV:Time Authenticated shall not be CRC protected.
⌋

 Condition for Sending Sub-TLV:Time Authenticated
  Upstream requirements:
⌈
If MessageCompliance is set to FALSE and TLVFollowUpICVSubTLV is set to TRUE, the Time Master shall send a `Follow_Up`, which contains the AUTOSAR Sub-TLV:Time Authenticated.
⌋

 Configurable FV Field Length
  Upstream requirements:
⌈
The length of the FV field of AUTOSAR Sub-TLV:Time Authenticated shall be configurable (GlobalTimeIcvFvLength).
⌋

 Configurable ICV Field Length
  Upstream requirements:
⌈
The length of the ICV field of AUTOSAR Sub-TLV:Time Authenticated shall be configurable (GlobalTimeIcvLength).
⌋

 Fragmentation of ICV Across Multiple Sub-TLVs
  Upstream requirements:
⌈
When ICV value does not fit within one AUTOSAR Sub-TLV:Time Authenticated, the `Follow_Up` message shall contain multiple AUTOSAR Sub-TLV:Time Authenticated with fragmented ICV value in each AUTOSAR Sub-TLV:Time Authenticated.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Body/Payload format

Placeholder for upcoming AUTOSAR releases.

### 30. 数据类型
*原文标题：Data Types*

Refer to .

### 31. Message 类型
*原文标题：Message types*

Refer to .

### 32. 数据 Messages
*原文标题：Data Messages*

Refer to .

### 33. 控制 Messages
*原文标题：Control Messages*

Refer to .

### 34. 服务 / Commands
*原文标题：Services / Commands*

Placeholder for upcoming AUTOSAR releases.

### 35. Sequences (下层 layer)
*原文标题：Sequences (lower layer)*

### 36. Pdelay 协议 for Latency Calculation
*原文标题：Pdelay Protocol for Latency Calculation*

illustrates the Propagation Delay Measurement (Pdelay) sequence using `Pdelay_Req`, `Pdelay_Resp` and `Pdelay_Resp_Follow_Up` messages as defined in  chapter 11.1.2 "Propagation delay measurement". Due to the limitation given in chapter , it is sufficient that only the Time Slave initiates the Pdelay measurement.

 Discard Pdelay latency if exceeding threshold
  Upstream requirements:
⌈
If GlobalTimeTxPdelayReqPeriod is not equal to 0 and if the Pdelay latency calculation result exceeds PdelayLatencyThreshold, the measured value shall be discarded and the previous value shall be kept.
⌋

 Ignore foreign `Pdelay_Resp` and `Pdelay_Resp_Follow_Up` messages
  Upstream requirements: , ,
⌈
If

* a `Pdelay_Resp` message or a `Pdelay_Resp_Follow_Up` message is received by a Peer Delay Initiator
* and the requestingPortIdentity of the message does not match the sourcePortIdentity of the Peer Delay Requester,

the Peer Delay Initiator shall ignore the received messages.
⌋

Rationale: In multidrop topologies (like 10BASE-T1S) a node may receive more than one `Pdelay_Resp` message and thus even `Pdelay_Resp` messages for "foreign" `Pdelay_Req` messages responding to requests from other nodes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Rate Ratio Calculation

Based on the ingress and egress timestamps t3 and t4 as given in  a Peer Delay Initiator is able to calculate the neighborRateRatio. neighborRateRatio is the ratio of the frequency of the local clock of the Peer Delay Responder to the frequency of the local clock of the Peer Delay Initiator.

 Calculation of neighborRateRatio if RateRatioEnable TRUE
  Status: DRAFT
  Upstream requirements:
⌈
If RateRatioEnable is set to TRUE

when a `Pdelay_Resp_Follow_Up` message is received,

a Peer Delay Initiator shall calculate the current value of the neighborRateRatio across previous N successive, successful Pdelay measurements according to , chapter 11.2.15.2.3 computePdelayRateRatio(), using the following formula:

neighborRateRatio = \frac{t3_{i} - t3_{(i-N)}}{t4_{i} - t4_{(i-N)}}

With

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Acting as Time Master

A Time Master is an entity which is the master for a certain Time Base and which propagates this Time Base to a set of Time Slaves within a certain segment of a communication network, being a source for this Time Base.

If a Time Master is also the owner of the Time Base then he is the Global Time master. A Time Gateway typically consists of one Time Slave and one or more Time Masters. When mapping time entities to real ECUs, an ECU could be Time Master (or even Global Time Master) for one Time Base and Time Slave for another Time Base.

### 39. Message Processing

Time Master supports Sync, `Follow_Up` and Pdelay message transmissions
  Upstream requirements: ,
⌈
The Time Master shall support the transmission of Sync and `Follow_Up` according to  as well as the transmission and reception of `Pdelay_Req`, `Pdelay_Resp` and `Pdelay_Resp_Follow_Up`.
⌋

 Periodic transmission of Sync by Time Master
  Upstream requirements: ,
⌈
The Time Master shall periodically transmit Sync with the cycle GlobalTimeTxPeriod, if

* `GLOBAL_TIME_BASE` bit within the timeBaseStatus, which is read from the corresponding Time Base, is set

and

* GlobalTimeTxPeriod is not 0.
⌋

 Use preciseOriginTimestamp in `Follow_Up` transmission
  Upstream requirements:
⌈
The preciseOriginTimestamp as calculated above, shall be used in the transmission of the `Follow_Up` as defined in  chapter 11.1.3 "Transport of time-synchronization information".
⌋

### 40. Frame Debouncing

Frame transmission order for simultaneous frames
  Upstream requirements:
⌈
If multiple frames are triggered at the same time, the frames shall be sent in the following order:

# Sync
# `Follow_Up`
# `Pdelay_Req`
# `Pdelay_Resp`, `Pdelay_Resp_Follow_Up`
⌋

### 41. Message Field Calculation and Assembling

Add AUTOSAR TLV to `Follow_Up` if MessageCompliance FALSE
  Upstream requirements: ,
⌈
If MessageCompliance is set to FALSE, a Time Master shall add an AUTOSAR TLV to the `Follow_Up` frame.
⌋

 Consider `CRC_SUPPORT` if MessageCompliance FALSE
  Upstream requirements:
⌈
If MessageCompliance is set to FALSE, `CRC_SUPPORT` shall be considered.
⌋

 `Follow_Up` TLV Sub-TLV.Type depending on `CRC_SUPPORT`
  Upstream requirements: ,
⌈
Depending on `CRC_SUPPORT` the `Follow_Up`.TLV.Sub-TLV.Type shall be:
⌋

`Follow_Up` Message Header

| Sub-TLV.Type | < |  |
|---|---|---|
| GlobalTimeTxCrcSecured | CRC_SUPPORTED | CR_NOT_SUPPORTED |
| 0x28 Sub-TLV:Time Secured is CRC secured | n.a. |  |
| 0x50 Sub-TLV:Status is CRC secured | 0x51 Sub-TLV:Status is not CRC secured |  |
| 0x60 Sub-TLV:UserData is CRC secured | 0x61 Sub-TLV:UserData is not CRC secured |  |
| 0x70 Sub-TLV:Time Authenticated is not CRC secured | 0x70 Sub-TLV:Time Authenticated is not CRC secured |  |

### 42. SGW Calculation

SGW mapping to AUTOSAR Sub-TLV:Status
  Upstream requirements: ,
⌈
The SGW value (Time Gateway synchronization status) shall be mapped to the Status element of the AUTOSAR Sub-TLV:Status.

If the `SYNC_TO_GATEWAY` is set, the SGW value shall be SyncToSubDomain. Otherwise, it shall be SyncToGTM.
⌋

### 43. CRC Calculation

CRC Calculation of Time Master
  Upstream requirements:
⌈
The CRC calculation of the Time Master shall use the generator polynomial 0x2F, the initial value 0xFF and the XOR value 0xFF. Neither the input data nor the result data shall be reflected.
⌋

Note: The CRC calculation is based on the AUTOSAR E2E Profile 2. For details refer to .

 DataID calculation for `Follow_Up` messages
  Upstream requirements:
⌈
The DataID shall be calculated as: DataID = DataIDList, where DataIDList is given by configuration for the `Follow_Up`.
⌋

Note: A specific DataID out of a predefined DataIDList ensures the identification of data elements of Time Synchronization messages.

 Byte order for CRC calculation on Multibyte values
  Upstream requirements:
⌈
If applying the CRC calculation on multibyte values, the byte order shall be such, that the byte containing the most significant bit of the value shall be used first.
⌋

 Byte order for CRC calculation on Multibyte Message Data
  Upstream requirements:
⌈
If applying the CRC calculation on multibyte message data, the byte order shall be in ascending order of the octets, i.e., the octet with the lowest offset shall be used first.
⌋

### 44. AUTOSAR Sub-TLV：Time Secured
*原文标题：AUTOSAR Sub-TLV:Time Secured*

Writing `CRC_Time_Flags` for `CRC_SECURED` `Follow_Up`
  Upstream requirements:
⌈
If GlobalTimeTxCrcSecured is `CRC_SUPPORTED`, the Time Master shall write the contents of CrcTimeFlagsTxSecured to `CRC_Time_Flags` acc. to the following rule.
⌋

| CrcTimeFlagsTxSecured contents: | < |  |
|---|---|---|
| CRC_Time_Flags | Follow_Up Message Header | Follow_Up Message Field |
| BitMask 0x01 | CRCMessageLength | n.a. |
| BitMask 0x02 | CRCDomainNumber | n.a. |
| BitMask 0x04 | CrcCorrectionField | n.a. |
| BitMask 0x08 | CRCSourcePortIdentity | n.a. |
| BitMask 0x10 | CRCSequenceIdentity | n.a. |
| BitMask 0x20 | n.a. | CRCPrecise - OriginTimestamp |
| BitMask 0x40 | n.a. | n.a. |
| BitMask 0x80 | n.a. | n.a. |

 Calculation of `CRC_Time_0` considering `CRC_Time_Flags` and DataID
  Upstream requirements:
⌈
If GlobalTimeTxCrcSecured is `CRC_SUPPORTED`, the Time Master shall calculate the CRC for `CRC_Time_0` by considering the contents of `CRC_Time_Flags` itself, the contents of the dependent fields as defined in CrcTimeFlagsTxSecured acc. to the rule in the table below and the DataID. The data elements used for the calculation of the CRC shall apply the following order:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. AUTOSAR Sub-TLV：Status secured
*原文标题：AUTOSAR Sub-TLV:Status secured*

CRC Calculation for Status Field
  Upstream requirements:
⌈
If GlobalTimeTxCrcSecured is set to `CRC_SUPPORTED`, the Time Master shall calculate the CRC for `CRC_Status` by considering the contents of Status and DataID (in this order).
⌋

### 46. AUTOSAR Sub-TLV：UserData secured
*原文标题：AUTOSAR Sub-TLV:UserData secured*

CRC Calculation for UserData Field
  Upstream requirements:
⌈
If GlobalTimeTxCrcSecured is set to `CRC_SUPPORTED`, the Time Master shall calculate the CRC for `CRC_UserData` by considering the contents of UserDataLength, UserByte_0, UserByte_1, UserByte_2 and DataID (in this order).
⌋

### 47. Sequence Counter (sequenceId) Calculation

Initialization of Sequence Counter
  Upstream requirements:
⌈
The Sequence Counter (sequenceId) of a Sync and `Pdelay_Req` message shall be initialized with 0.
⌋

 Sequence Counter Increment for `Pdelay_Req` Message
  Upstream requirements:
⌈
The Peer Delay Initiator shall increment the Sequence Counter of a `Pdelay_Req` message by 1 on each transmission request for a `Pdelay_Req` message. The Sequence Counter shall wrap around at 65535 to 0 again.
⌋

 Sequence Counter Increment for Sync Message
  Upstream requirements:
⌈
The Time Master shall increment the Sequence Counter of aSync message by 1 on each transmission request for a Sync message of a given Time Domain. The Sequence Counter shall wrap around at 65535 to 0 again.
⌋

 Sequence Counter Assignment for `Follow_Up` Message
  Upstream requirements:
⌈
The Time Master shall set the Sequence Counter (sequenceId) value for a `Follow_Up` message to the Sequence Counter (sequenceId) value of the corresponding Sync message.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. ICV Generation

Each timebase is configured with at least one Freshness Value (FV). The FV refers to a monotonic counter that is used to ensure freshness of the timebase. Such a monotonic counter could be realized by means of individual message counters, called Freshness Counter, or by a time stamp value called Freshness Timestamp.

The ICV refers to the result of a cryptographic function, that are used to ensure that unauthorized modifications of a message are detected. A cryptographic function can be of any primitive with the associated cryptographic key.

 Inclusion of Freshness Value in ICV Generation
  Upstream requirements:
⌈
When (GlobalTimeIcvFvLength) is configured greater than 0, then the Time Master shall derive the FV and include the FV in the ICV generation.
⌋

 Setting FV Flags When FV Length is Greater Than Zero
  Upstream requirements:
⌈
When (GlobalTimeIcvFvLength) is configured greater than 0, then the Time Master shall add the FV, the length of FV (FVL) and set the 'FV in ICV' flag of `ICV_Flags` in AUTOSAR Sub-TLV:Time Authenticated.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. Message Assembling

Setup of Time Synchronization Message Transmission
  Upstream requirements: , ,
⌈
For each transmission of a Time Synchronization message, the Time Synchronization module shall set-up the message as follows:

# Assemble Message Header
# If `Follow_Up`: Calculate `Follow_Up`.preciseOriginTimestamp
# If `Follow_Up`: Assemble IEEE TLV
# If `Follow_Up`: Assemble AUTOSAR TLV (configuration dependent) except the AUTOSAR Sub-TLV:Time Authenticated.
# If `Follow_Up`: Assemble AUTOSAR Sub-TLV:Time Authenticated (configuration dependent).
⌋

Note: Section  provides more details how the `Follow_Up` message shall assemble the AUTOSAR Sub-TLV:Time Authenticated.

### 其余 43 章（内容从略，见纯文本全文）

50. Acting as Time Slave
51. Message processing
52. Frame Debouncing
53. Message Field 校验 and Disassembling
54. SGW Calculation
55. UserData Processing
56. CRC 校验
57. AUTOSAR Sub-TLV：Time Secured
58. AUTOSAR Sub-TLV：Status secured
59. AUTOSAR Sub-TLV：UserData secured
60. Sequence Counter (sequenceId) 校验
61. Sequence Counter 校验 of SYNC Messages
62. Sequence Counter 校验 of SYNC Messages while in Timeout
63. other Messages 类型的Sequence Counter 校验
64. ICV Verification
65. Message Disassembling
66. Time measurement with Switches
67. Pdelay and Time 同步 measurement point
68. Time Aware Bridge with GTM as 管理 CPU
69. Time Aware Bridge with GTM not as 管理 CPU
70. 错误 messages
71. 安全事件
72. 配置 parameters
73. 协议 usage and 指南
74. References
75. 附录
76. Change history of AUTOSAR traceable items
77. Traceable item history of this document according to AUTOSAR Release R26-11
78. Added 规范 Items in R26-11
79. Changed 规范 Items in R26-11
80. Deleted 规范 Items in R26-11
81. Traceable item history of this document according to AUTOSAR Release R25-11
82. Added 规范 Items in R25-11
83. Changed 规范 Items in R25-11
84. Deleted 规范 Items in R25-11
85. Traceable item history of this document according to AUTOSAR Release R24-11
86. Added 规范 Items in R24-11
87. Changed 规范 Items in R24-11
88. Deleted 规范 Items in R24-11
89. Traceable item history of this document according to AUTOSAR Release R23-11
90. Added 规范 Items in R23-11
91. Changed 规范 Items in R23-11
92. Deleted 规范 Items in R23-11
