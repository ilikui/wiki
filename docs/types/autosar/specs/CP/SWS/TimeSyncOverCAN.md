# Specification of Time Synchronization over CAN (`TimeSyncOverCAN`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 674 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_TimeSyncOverCAN_674\AUTOSAR_CP_SWS_TimeSyncOverCAN.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_TimeSyncOverCAN_674\AUTOSAR_CP_SWS_TimeSyncOverCAN.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_TimeSyncOverCAN_674\zzgen\CP_SWS_TimeSyncOverCAN.complete.txt`

## 文档简介

The CanTSyn module implements the Time Synchronization over CAN protocol as specified in .

 below shows the CanTSyn module and other time provider modules in context of the Layered SW Architecture of AUTOSAR.

## 模块依赖

The Time Synchronization over CAN (CanTSyn) has interfaces towards the Synchronized Time-Base Manager (StbM), the CAN Interface (CanIf), the L-SDU Router (LSduR), the BSW Mode Manager (BswM), the Crypto Service Manager (CSM), the Intrusion Detection System Manager (IdsM) and the Default Error Tracer (Det).

* StbM -

  * Get and set the current time value
  * Get FV from FVM
* LSduR - Receiving and transmitting messages
* CanIf - Accessing the clock unit in the CAN controller
* BswM - Coordination of network access (via `CanTSyn_SetTransmissionMode`)
* DET - Reporting of development errors
* CSM -

  * Generation of ICV for Time Master
  * Verification of ICV for Time Slave
* IdsM - Reporting of security events

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The CanTSyn module implements the Time Synchronization over CAN protocol as specified in .

 below shows the CanTSyn module and other time provider modules in context of the Layered SW Architecture of AUTOSAR.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

This section lists module local abbreviations and definitions. For additional Time Synchronization related abbreviations and definitions refer to chapter 3 in the RS Time Synchronization . For general terms and abbreviations refer to the AUTOSAR Glossary .

| Abbreviation | Description |
|---|---|
| GTM | Global Time Master |
| BswM | BSW Mode Manager module |
| <Bus>TSyn | Bus specific Time Synchronization module |
| CAN FD | Controller Area Network (CAN) - Flexible Data Rate |
| CanTSyn | Time Synchronization over CAN module |
| CRC | Cyclic Redundancy Checksum |
| CSM | Crypto Service Manager |
| Debounce Time | Minimum gap between two TX messages with the same PDU |
| Det | Default Error Tracer module |
| DLC | Data Length Code |
| DoS | Denial of Service |
| CanIf | CAN interface module |
| FUP message | Follow-Up message |
| FV | Freshness Value |
| FVM | Freshness Value Manager |
| ICV | Integrity Check Value |
| IdsM | Intrusion Detection System Manager |
| LSduR | L-SDU Router module |
| MAC | Message Authentication Code |
| OVS | Overflow Seconds value (field in FUP message) |
| SC | Sequence Counter in Time Synchronization messages |
| SGW | "Synchronized to Gateway" state of Time Synchronization |
| StbM | Synchronized Time-Base Manager |
| SYNC message | Time Synchronization |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for CanTSyn.

Thus, the General Specification on Basic Software (SWS BSW General) shall be considered additionally and as required specification for CanTSyn.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

# The Time Base in the SYNC messages is limited to 32 bit, wherefore the maximum supported time value is 4294967295 seconds (2^(32)-1).
# The Time Synchronization on CAN protocol assumes a local reference clock with a maximum tick duration of 2\mus (i.e., this is equal to a local reference clock with a minimum frequency of 500 kHz)
# The authentication protection mechanism of the time is not supported on classic CAN busses, due to below reasons.

  * The authentication protection mechanism is complex to achieve on classic CAN busses due to payload limitation and any solution incorporated will leave the security vulnerabilities (e.g., cryptographic attacks, DoS).
  * Today's ECUs in vehicle E/E architecture supports both classic CAN and CanFD channels.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

Automotive systems requiring a common Time Base for ECUs regardless of which bus system the ECUs are connected to.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The Time Synchronization over CAN (CanTSyn) has interfaces towards the Synchronized Time-Base Manager (StbM), the CAN Interface (CanIf), the L-SDU Router (LSduR), the BSW Mode Manager (BswM), the Crypto Service Manager (CSM), the Intrusion Detection System Manager (IdsM) and the Default Error Tracer (Det).

* StbM -

  * Get and set the current time value
  * Get FV from FVM
* LSduR - Receiving and transmitting messages
* CanIf - Accessing the clock unit in the CAN controller
* BswM - Coordination of network access (via `CanTSyn_SetTransmissionMode`)
* DET - Reporting of development errors
* CSM -

  * Generation of ICV for Time Master
  * Verification of ICV for Time Slave
* IdsM - Reporting of security events

### 10. 文件结构
*原文标题：File structure*

### 11. 代码文件结构
*原文标题：Code file structure*

For details, refer to the section 5.1.6 "Code file structure" of the SWS BSW General .

### 12. 头文件结构
*原文标题：Header file structure*

For details, refer to the section 5.1.7 "Header file structure" of the SWS BSW General .

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The TS shall initialize the Local Time Base with a configurable startup value |  |  |
| The Implementation of Time Synchronization shall initialize the Global Time Base with a configurable startup value. |  |  |
| The Implementation of Time Synchronization shall provide measurement data to the application |  |  |
| The Timesync over CAN module shall trigger Time Base Synchronization transmission |  |  |
| The Timesync over CAN module shall provide the Time Base after reception of a valid Timesync/TS messages |  |  |
| The Timesync over CAN module shall support means to protect the Time synchronization protocol |  |  |
| The Timesync over CAN module shall detect and handle timeout and integrity errors in the Time Synchronization protocol |  |  |
| The Timesync over CAN module shall support a protocol for precise time measurement and synchronization over CAN |  |  |
| The Timesync over CAN module shall support user specific data wi |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

### 15. 概述
*原文标题：Overview*

This chapter defines the AUTOSAR specific details of the implementation of the Time Synchronization over CAN protocol, which is specified in the protocol specification .

The API of the module is defined in chapter , while the configuration is defined in chapter .

Time Synchronization principles and common wording is described in the SWS Synchronized Time-Base Manager  and RS Time Synchronization .

### 16. 模块处理
*原文标题：Module Handling*

This section specifies general aspects of the implementation of the CanTSyn module.

### 17. 接口 to 上层 Layer
*原文标题：Interface to Upper Layer*

Upstream requirements: ,
⌈
If CanTSyn calls an API of the StbM, it shall use the Time Base ID of the Time Base referenced via the parameter CanTSynSynchronizedTimeBaseRef of the corresponding Time Domain.
⌋

### 18. Interrupt 处理
*原文标题：Interrupt Handling*

When transmitting or receiving a SYNC message, the current value of the Virtual Local Time needs to be captured in the RX indication / TX confirmation callbacks

* either in interrupt mode in context of the RX / TX interrupt
* or in polling mode in the main function (Note: it is strongly recommended not to use polling mode for Time Slaves).

Any delay between the occurrence of the interrupt itself and the determination of the current Virtual Local Time worsens the precision of either the transmitted or received Time Base.

Therefore, it is inevitable that these RX indication / TX confirmation callbacks establish a protection against interruptions immediately after being called (if called in context of the RX / TX interrupt with interrupt nesting disabled, this is implicitly ensured by the controller).

Thereafter only the necessary checks shall be made to determine that the message is a SYNC message (and to determine the Time Base ID if necessary). Once the Time Base ID and the SYNC message type are confirmed the current value of the Virtual Local Time is obtained from a function call to the StbM (still in the context of locked interrupts).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 初始化
*原文标题：Initialization*

The Time Synchronization over CAN is initialized via `CanTSyn_Init`. Except for `CanTSyn_Init`, the API functions of the Time Synchronization over CAN may only be called when the module has been properly initialized.

  Upstream requirements: ,
⌈
A call to `CanTSyn_Init` initializes all internal variables and sets the Time Synchronization over CAN to the initialized state.
⌋

### 20. Message Format

Refer to the protocol specification .

### 21. Acting as Time Master

A Time Master is an entity which is the master for a Time Base and which propagates this Time Base to a set of Time Slaves within a certain segment of a communication network, being a source for this Time Base.

If a Time Master is also the owner of the Time Base, i.e., the Time Base which all other nodes derive their Time Base from, then that Time Master is the system-wide (or Global) Time Master (refer to ). A Time Gateway typically consists of one Time Slaves port and 1..N Time Master ports. When mapping time entities to real ECUs it has to be noted, that an ECU could be the Time Master (or even Global Time Master) for one Time Base and Time Slave for another Time Base.

The CanTSyn supports a fan-out of a given Time Base on several CAN busses in parallel. Those busses all belong to the same Time Domain.

Note: A separate configuration container CanTSynGlobalTimeDomain needs to be configured for each CAN bus on which the CanTSyn transmits the Time Base for a given Time Domain - although those busses all belong to the same Time Domain.

The protocol specification  specifies the protocol state machine of a Time Master.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Time 同步 Message Transmission
*原文标题：Time Synchronization Message Transmission*

Upstream requirements:
⌈
A Time Master shall transmit SYNC and FUP messages by calling `LSduR_CanTSynTransmit` with the PduId derived via CanTSynGlobalTimePduRef of the corresponding Time Domain.
⌋

### 23. Transmission 模式
*原文标题：Transmission mode*

Upstream requirements: ,
⌈
If `CanTSyn_SetTransmissionMode`(Controller, Mode) is called and parameter Mode equals `CANTSYN_TX_OFF`, all transmit requests from CanTSyn shall be omitted on this CAN channel.
⌋

  Upstream requirements: ,
⌈
If `CanTSyn_SetTransmissionMode`(Controller, Mode) is called and parameter Mode equals `CANTSYN_TX_ON`, all transmit requests from CanTSyn on this CAN channel shall be able to be transmitted.
⌋

### 24. Triggering of SYNC Message Transmission

A Time Synchronization sequence of the Time Master is triggered in the `TM_Idle` state (refer to ) according to figure

* either cyclically (refer to chapter ) or
* or immediately,i.e., event triggered (refer to chapter ).

Triggering takes the debounce interval into consideration (refer to chapter ) to build and transmit the SYNC message.

### 25. Cyclic Time 同步
*原文标题：Cyclic Time Synchronization*

Upstream requirements: ,
⌈
For a Synchronized Time Domain (refer to CanTSynGlobalTimeDomain) if

* the Time Master is in state `TM_Idle`
* and the `GLOBAL_TIME_BASE` bit within the timeBaseStatus is set
* and CanTSynGlobalTimeTxPeriod is unequal to 0
* and cylic transmission period has elapsed (cyclicCounter is 0)
* and the associated cyclicMsgResumeCounter is equal to or less than 0
* and syncTxCounter (if configured) is less than CanTSynSyncTransmissionsPerCycle,

then a Time Master shall

* request a transmission of a SYNC message for the corresponding Time Domain
* and restart the cyclicCounter by setting it to the value of CanTSynGlobalTimeTxPeriod

The (cyclic) transmission shall be started in the earliest possible `CanTSyn_MainFunction` call once the requirements above are fulfilled.
⌋

Note: "earliest possible" means:

* In the next `CanTSyn_MainFunction`, because `GLOBAL_TIME_BASE` is set outside the `CanTSyn_MainFunction`.
* In the current `CanTSyn_MainFunction`, when switching from immediate to cyclic transmission (because this decision is made inside the `CanTSyn_MainFunction`).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Immediate Time 同步
*原文标题：Immediate Time Synchronization*

In addition to the cyclic Timesync message transmission, an immediate message transmission might be required.

  Upstream requirements:
⌈
If CanTSynImmediateTimeSync is set to TRUE for a Time Base, CanTSyn shall check on each `CanTSyn_MainFunction` call by calling `StbM_GetTimeBaseUpdateCounter`, if the timeBaseUpdateCounter of the corresponding Time Base has changed.
⌋

  Upstream requirements:
⌈
If

* the Time Master is in state `TM_Idle`
* and CanTSynImmediateTimeSync is set to TRUE
* and the timeBaseUpdateCounter of a Time Base has changed
* and the `GLOBAL_TIME_BASE` bit of the timeBaseStatus is set
* and syncTxCounter (if configured) is less than CanTSynSyncTransmissionsPerCycle,

CanTSyn shall trigger an immediate transmission of Time Synchronization messages for the corresponding Time Domain.
⌋

Note: timeBaseStatus can be obtained by `StbM_GetTimeBaseStatus` or `StbM_GetCurrentTime`.

In addition, to the actual trigger condition for an immediate transmission (refer to  above) the parameter CanTSynCyclicMsgResumeTime needs to be considered for immediate transmission. Refer also to the trigger condition for cyclic Timesync message transmissions (refer to ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Debouncing of Time 同步 Message Transmission
*原文标题：Debouncing of Time Synchronization Message Transmission*

### 28. Debouncing per PDU

The CanTSyn debounces CAN Tx PDUs of a Time Master to avoid bursts of Timesync messages on the bus (e.g. if immediate transmission is enabled). This mechanism also defines the minimum interval between a SYNC and the corresponding FUP message.

For each Tx PDU the CanTSyn maintains a debounceCounter. On each transmission of a Timesync message the debounce counter is (re-)loaded by the configured debounce time CanTSynGlobalTimeDebounceTime. The counter is decremented in each CanTSyn main cycle. Transmission of the same PDU can only be triggered, if the debounce counter has reached the value 0. Refer also to the overall sequence for the Timesync message transmission in .

The CanTSyn does not support sharing of PDUs across domains and busses, i.e., the same PDU ID should not be used for different time domains.

However, the CanTSyn supports a separate mechanism to debounce the transmission of SYNC messages across CAN busses (refer to chapter ).

### 29. Debouncing across 多 domains and busses
*原文标题：Debouncing across multiple domains and busses*

If SW timestamping is used the precision of the Global Time transmitted by the Time Master is affected by the transmission confirmation ISR delay/jitter. The effect increases if the Time Master transmits SYNC messages on various domains/buses, where the transmit confirmation interrupt is handled by the same core. In this case it is likely that several transmit confirmation interrupts are triggered almost simultaneously. As a result any but the first CanTSyn ISR execution gets delayed by the CanTSyn's ISR delay of the 'first' interrupt to be processed and its execution time but also by any other interrupt's ISR which is then processed directly after the first CanTSyn ISR and before the second one (e.g., due to interrupt priority). To avoid such burst transmissions of SYNC messages, the transmissions will be distributed across CanTSyn main cycles, i.e., the number of simultaneous SYNC message transmissions per CanTSyn main cycle is limited. Refer also to the overall sequence for the Timesync message transmission in .

  Upstream requirements:
⌈
If

* the CanTSyn module is configured as Time Master for at least one Time Domain
* and CanTSynSyncTransmissionsPerCycle is greater than 0

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Calculation and Assembling of Time 同步 Messages
*原文标题：Calculation and Assembling of Time Synchronization Messages*

This chapter describes the workflow, how the items of a Time Synchronization message will be calculated (1^(st) step) and how the message will be assembled (2^(nd) step).

### 31. Global Time Calculation

For calculation of the Global Time by the Time Master also refer to the protocol specification

* ,
* .

In addition to the message fields (refer to chapter )

* SyncTimeSec
* OVS and
* SyncTimeNSec,

which are actually transmitted on the bus by the Time Master, this chapter defines and uses the following internal variables for calculation of the Global Time to be transmitted on the bus for Synchronized Time Domains:

* T0_(SYNC): Global Time retrieved from StbM
* T0_(`SYNC_ns`): Nanosecond part of T0_(SYNC)
* T0_(VLT): Virtual Local Time that corresponds to T0_(SYNC). Retrieved together with T0_(SYNC) from StbM
* T1_(VLT): Egress timestamp of SYNC message relative to Virtual Local Time in StbM
* T1_(CAN): Egress timestamp of SYNC message as captured by CAN controller HW
* T4: Correction value for T0_(SYNC), which accounts for the delay between retrieving the time tuple  from StbM and actually transmitting the SYNC message on the bus.
* T_(currentTime_CAN): Current local time as read from CAN controller HW when TX confirmation interrupt for SYNC message is processed in CanTSyn

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. User 数据
*原文标题：User Data*

Upstream requirements:
⌈
User Data shall be mapped to the `StbM_UserDataType`, where the byte number given in the message and by the `StbM_UserDataType` shall match (User Byte 0 mapped to `StbM_UserDataType`.userByte0, etc.).

`StbM_UserDataType`.userDataLength shall be set to the Time Synchronization message type specific number of User Bytes.
⌋

### 33. OVS Calculation

Refer also to 6.4.2.6.4 "Calculate FUP Message Nanoseconds Field (SyncTimeNSec and OVS)" in  for how to set the OVS field of the FUP message.

  Upstream requirements:
⌈
OVS shall be set within FUP messages if the transmitter detects a nanosecond overflow greater than the defined range of `StbM_TimeStampType`.nanoseconds (refer to ). The leftover part of seconds which does not fit into `StbM_TimeStampType`.nanoseconds shall be written to OVS.
⌋

### 34. SGW Calculation

Refer also to the protocol specification  for how to set the SGW field of the FUP message.

  Upstream requirements:
⌈
The SGW value (Time Gateway synchronization status) shall be retrieved from the Time Base synchronization status. If the `SYNC_TO_GATEWAY` bit within timeBaseStatus is not set the SGW value shall be SyncToGTM. Otherwise the SGW value shall be set to SyncToSubDomain.
⌋

### 35. Sequence Counter Calculation

Refer also to the protocol specification  and  for the specification of the Sequence Counter (SC) field calculation for the SYNC and FUP messages, respectively.

### 36. CRC Calculation

Refer also to the protocol specification  and  for the specification of the calculation of the CRC field of the SYNC and FUP messages, respectively.

  Upstream requirements: ,
⌈
The function `Crc_CalculateCRC8H2F` as defined in  shall be used to calculate the CRC if configured.
⌋

### 37. ICV Generation

Refer also to the protocol specification  and  for how the calculation of the Freshness Value and ICV integrates with protocol state machine of the Time Master.

  Upstream requirements:
⌈
If in state state `TM_BuildFupMsg` for the Time Doamin the CanTSyn shall calculate the ICV using

* the SYNC payload (byte 0 .. 7),
* the FUP payload (byte 0 .. 9)
* and the FV (if configured by CanTSynIcvGenerationFvIdRef).
⌋

Refer to the SWS StbM  for the configuration details of FV referenced in each Time Domain.

  Upstream requirements:
⌈
When the FV is referenced (refer CanTSynIcvGenerationFvIdRef) and the configured truncated FV length (StbMFreshnessValueTruncLength) == FV length (StbMFreshnessValueLength) in StbM, the Time Master shall call the `StbM_GetTxFreshness` Api to obtain the FV by using the StbMFreshnessValueId.
⌋

  Upstream requirements:
⌈
When the FV is referenced (refer CanTSynIcvGenerationFvIdRef) and the configured truncated FV length (StbMFreshnessValueTruncLength) < FV length (StbMFreshnessValueLength), the Time Master shall call the `StbM_GetTxFreshnessTruncData` Api to obtain the FV and the truncated FV by using the StbMFreshnessValueId.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Message Assembling

Refer to the protocol specification  and  for how to build the SYNC and FUP messages.

### 39. Acting as Time Slave

A Time Slave is an entity, which is the recipient for a certain Time Base within a certain segment of a communication network, being a consumer for this Time Base.

### 40. SYNC and FUP message processing

For the overall behavior of the Time Slave refer to the protocol state machine in the protocol specification .

The sections below specify details how the protocol state machine is realized in the CanTSyn module.

  Upstream requirements:
⌈
If

* for a Time Domain Security Event reporting is enabled (CanTSynEnableSecurityEventReporting is true)
* and that Time Domain is in state `TS_WaitForFupMsg`,

when a SYNC message is received, then the Time Slave shall report the security event `SEV_TSYN_CAN_MSG_SEQUENCE_ERROR` to the IdsM.
⌋

Note: The general timeout monitoring for the Time Base update is located in the StbM and not in the Timesync modules.

  Upstream requirements:
⌈
If

* for a Time Domain Security Event reporting is enabled (CanTSynEnableSecurityEventReporting is true)
* and for that Time Domain any SYNC or FUP message is received within CanTSynGlobalTimeRxDebounceTime after the previous Timesync message (i.e., while the Time Domain is in state `TS_DebounceBeforeFupMsg` or state `TS_DebounceBeforeSyncMsg`),

then the Time Slave shall report the security event `SEV_TSYN_CAN_MSG_SEQUENCE_ERROR` to the IdsM.
⌋

### 41. Time 同步 Messages的校验 and Disassembling
*原文标题：Validation and Disassembling of Time Synchronization Messages*

This chapter describes the workflow, how the items of a Time Synchronization message will be validated (1^(st) step) and how the message will be disassembled (2^(nd) step).

### 42. Global Time Calculation

For calculation of the Global Time by the Time Slave also refer to the protocol specification .

In addition to the message fields (refer to chapter )

* SyncTimeSec
* OVS and
* SyncTimeNSec,

which are actually received by the Time Slave on the bus from the Time Master, this chapter defines and uses the following internal variables for calculation of the Rx Time Tuple for Synchronized Time Domains:

* T0: Global Time (seconds portion) received from Time Master in SYNC message
* T1_(VLT): Ingress timestamp of SYNC message as captured by HW in the CAN controller or by SW in `CanTSyn_RxIndication`.
* TG_(Rx) : Global Time component of the Rx Time Tuple.
* T2_(VLT): Virtual Local Time component of the Rx Time Tuple (equivalent to `TV_Rx` in the StbM).
* T3_(VLT): Current time read out from CAN controller hardware - used for correlation of StbM time and CAN HW clock.
* T5_(VLT): Current virtual local time in StbM - used for correlation of StbM local time and CAN HW clock.
* T4: Correction value for T0 as received from the Time Master. It is calculated from values of OVS and SyncTimeNSec field in the FUP message.
* T_(SRD): SYNC reception delay as difference between T3_(VLT) and T1_(VLT).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. OVS Consideration

Refer to the protocol specification  and  for processing the OVS field of the FUP message.

### 44. SGW Calculation

Refer also to the protocol specification  for processing the SGW field of the FUP message.

  Upstream requirements: ,
⌈
If the SGW value (in the FUP message) is set to SyncToSubDomain, the `SYNC_TO_GATEWAY` bit within timeBaseStatus shall be set to TRUE. Otherwise, it shall be set to FALSE.
⌋

### 45. Sequence Counter 校验
*原文标题：Sequence Counter Validation*

Refer to the protocol specification  and  for the details of sequence counter check.

### 46. CRC 校验
*原文标题：CRC Validation*

Refer to the protocol specification  and  for the specification of the CRC check.

  Upstream requirements: ,
⌈
The function `Crc_CalculateCRC8H2F` as defined in  shall be used to validate the CRC if configured.
⌋

### 47. ICV Verification

Refer to the protocol specification  for how calculation of the Freshness Value and ICV integrates with protocol state machine of the Time Slave.

The requirements in this chapter refine the protocol specification by

* adding a retry strategy when deriving the Freshness Value or ICV value
* allowing truncation of the ICV
* adding Security Events
* and defining the APIs for deriving the Freshness Value or ICV value

Refer to the chapter 7.3.13 in the SWS StbM  for the configuration details of FV referenced in each Time Domain.

  Upstream requirements:
⌈
When

* the FV is referenced (refer CanTSynIcvVerificationFvIdRef)
* and FVL > 0,

in a received FUP message, then the Time Slave shall call the `StbM_GetRxFreshness` Api to obtain the Freshness Value by using

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. Message Disassembling

Refer to the protocol specification  and  for the overall flow of the message verification process of a SYNC or FUP message on Time Slave side.

  Upstream requirements: ,
⌈
For a valid pair of SYNC and FUP messages with successfully validated set of values SyncTimeSec, OVS and SyncTimeNSec a new Rx Time Tuple  (refer to ), consisting of the Global Time value and the associated value of the Virtual Local Time, shall be calculated (refer to , , ) and forwarded to the StbM module via `StbM_BusSetGlobalTime`.
⌋

  Upstream requirements:
⌈
On an invocation of `StbM_BusSetGlobalTime` the parameter pathDelay of the measureDataPtr structure shall be set to the value of the propagation delay as configured by CanTSynGlobalTimePropagationDelay.
⌋

### 49. Time Recording

### 50. Global Time Precision Measurement

The CanTSyn provides all relevant information for Global Time Precision Measurement via `StbM_BusSetGlobalTime` to the StbM.

### 51. Time 校验
*原文标题：Time Validation*

Upstream requirements:
⌈
The CanTSyn shall support Time Validation, if CanTSynTimeValidationSupport set to TRUE.
⌋

  Upstream requirements:
⌈
If

* CanTSynTimeValidationSupport is enabled and
* CanTSynEnableTimeValidation for the Time Domain is enabled

CanTSyn shall do time recording for Time Validation for that Time Domain
⌋

  Upstream requirements:
⌈
If

* time recording for Time Validation is enabled for a Time Domain (refer to  and )
* and CanTSyn is configured as Time Slave for that Time Domain,

CanTSyn shall call `StbM_CanSetSlaveTimingData` upon successful reception of a FUP message.

`StbM_CanSetSlaveTimingData` shall be called after `StbM_BusSetGlobalTime`.
⌋

Note: `StbM_BusSetGlobalTime` shall be called first, because it updates the Synclocal Time Tuple (refer to ), which is required by `StbM_CanSetSlaveTimingData`.

  Upstream requirements:
⌈
Upon invocation of `StbM_CanSetSlaveTimingData` CanTSyn shall pass following values

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 52. 安全事件
*原文标题：Security Events*

Upstream requirements:
⌈
If security event reporting has been enabled for the CanTSyn module (CanTSynEnableSecurityEventReporting = TRUE) the respective security events shall be reported to the IdsM  via the interfaces defined in BSWGeneral .
⌋

The following table lists the security events which are standardized for the CanTSyn together with their trigger conditions.

 Security events for CanTSyn
  Upstream requirements: ,
⌈
| Name | Description | ID |
|---|---|---|
| SEV_TSYN_CAN_ICV_GENERATION_FAILED | ICV generation for a FUP message has failed. | 66 |
| SEV_TSYN_CAN_ICV_VERIFICATION_FAILED | ICV verification of a FUP message has failed. | 67 |
| SEV_TSYN_CAN_FRESHNESS_NOT_AVAILABLE | Failed to get freshness value from FvM. | 68 |
| SEV_TSYN_CAN_MSG_SEQUENCE_ERROR | Failed to receive correct sequence of SYNC and FUP from the TimeMaster within (CanTSynGlobalTimeFollowUpTimeout). | 69 |

⌋

The following tables specify the context data which shall be reported for the respective security events.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 53. 错误分类
*原文标题：Error Classification*

Section 7.2 "Error Handling" of the document "General Specification of Basic Software Modules"  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 54. Development 错误
*原文标题：Development Errors*

Definition of development errors in module CanTSyn
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called with wrong PDU or SDU | CANTSYN_E_INVALID_PDUID | 0x01 |
| API service used in un-initialized state | CANTSYN_E_UNINIT | 0x02 |
| A pointer is NULL | CANTSYN_E_NULL_POINTER | 0x03 |
| CanTSyn initialization failed | CANTSYN_E_INIT_FAILED | 0x04 |
| API called with invalid parameter | CANTSYN_E_PARAM | 0x05 |
| Invalid Controller index | CANTSYN_E_INV_CTRL_IDX | 0x06 |

⌋

### 其余 80 章（内容从略，见纯文本全文）

55. Runtime 错误
56. Production 错误
57. Extended Production 错误
58. API 规范
59. Imported 类型
60. 类型定义
61. CanTSyn_ConfigType
62. CanTSyn_TransmissionModeType
63. 功能定义
64. CanTSyn_Init
65. CanTSyn_SetTransmissionMode
66. CanTSyn_RxIndication
67. CanTSyn_TxConfirmation
68. CanTSyn_IcvGenerationIndication
69. CanTSyn_IcvVerificationIndication
70. Scheduled functions
71. CanTSyn_MainFunction
72. Expected 接口
73. Mandatory 接口
74. Optional 接口
75. Callout 接口
76. Configurable 接口
77. 服务接口
78. 时序图
79. Enable Egress Timestamping
80. CAN Time 同步 (Time Master)
81. CAN Time 同步 (Time Slave)
82. CAN Secure Time 同步 (Time Master, Time Slave)
83. 配置规范
84. How to read this chapter
85. Containers and 配置 parameters
86. Variants
87. CanTSyn
88. CanTSynGeneral
89. CanTSynSecurityEventRefs
90. CanTSynGlobalTimeDomain
91. CanTSynGlobalTimeSyncDataIDList
92. CanTSynGlobalTimeSyncDataIDListElement
93. CanTSynGlobalTimeFupDataIDList
94. CanTSynGlobalTimeFupDataIDListElement
95. CanTSynGlobalTimeMaster
96. CanTSynGlobalTimeMasterPdu
97. CanTSynGlobalTimeTxIcvGeneration
98. CanTSynGlobalTimeSlave
99. CanTSynGlobalTimeSlavePdu
100. CanTSynGlobalTimeRxIcvVerification
101. Constraints
102. 发布信息
103. 附录
104. 不适用需求
105. Change history of AUTOSAR traceable items
106. Traceable item history of this document according to AUTOSAR Release R25-11
107. Added 规范 Items in R25-11
108. Changed 规范 Items in R25-11
109. Deleted 规范 Items in R25-11
110. Added Constraints in R25-11
111. Changed Constraints in R25-11
112. Deleted Constraints in R25-11
113. Traceable item history of this document according to AUTOSAR Release R24-11
114. Added 规范 Items in R24-11
115. Changed 规范 Items in R24-11
116. Deleted 规范 Items in R24-11
117. Added Constraints in R24-11
118. Changed Constraints in R24-11
119. Deleted Constraints in R24-11
120. Traceable item history of this document according to AUTOSAR Release R23-11
121. Added 规范 Items in R23-11
122. Changed 规范 Items in R23-11
123. Deleted 规范 Items in R23-11
124. Added Constraints in R23-11
125. Changed Constraints in R23-11
126. Deleted Constraints in R23-11
127. 映射 Tables
128. 协议 Inputs的映射
129. 协议 Outputs的映射
130. 协议时序 Values的映射
131. 协议 Parameters的映射
132. 协议 Parameters of a Time Domain的映射
133. 协议 Parameters of the Time Master of a Time Domain的映射
134. 协议 Parameters of a Time Slave of a Time Domain的映射
