# Specification of Time Synchronization over FlexRay (`TimeSyncOverFlexRay`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 675 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_TimeSyncOverFlexRay_675\AUTOSAR_CP_SWS_TimeSyncOverFlexRay.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_TimeSyncOverFlexRay_675\AUTOSAR_CP_SWS_TimeSyncOverFlexRay.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_TimeSyncOverFlexRay_675\zzgen\CP_SWS_TimeSyncOverFlexRay.complete.txt`

## 文档简介

The FrTSyn module handles the distribution of time information over FlexRay buses.

The FlexRay mechanism is much simpler than the mechanism for CAN since it is based on the fact, that FlexRay nodes are synchronized to each other, otherwise no messages can be transmitted on FlexRay.

Both, Time Master and Time Slaves have the same view on the FlexRay global time. It is therefore just necessary to define the same point in (FlexRay) time and to transmit the time information, which will be valid at that point in (FlexRay) time.

Although this same point in (FlexRay) time could be in theory any FlexRay macrotick within a FlexRay cycle, the start of a FlexRay cycle simplifies this mechanism. In addition, the mechanism does not just use any cycle start but uses the cycle start of the subsequent cycle with cycle counter value 0, i.e. the Time Master transmits time information located in the future.

On FlexRay only one Time Synchronization message is needed.

The Time Master uses its current FlexRay time, i.e. macrotick counter and cycle counter, and the current time, which shall be distributed and calculates the resulting time at the start of the next cycle 0. Once this resulting time has been calculated, it is neither very time critical, when exactly the FlexRay frame is transmitted, nor when it is received and processed.

Every Time Slave receiving the transmitted time information will use it in combination with the current FlexRay macrotick counter and cycle counter to determine the actual master time and set its slave time.

Figure  illustrates the Time Synchronization mechanism on FlexRay.

The FrTSyn also supports securing the global time messages on the FlexRay communication bus. The figure below shows the time provider modules interface with the security modules in the AUTOSAR Layered Architecture.

## 模块依赖

The Time Synchronization over FlexRay (FrTSyn) has interfaces towards the Synchronized Time-Base Manager (StbM), the FlexRay Interface (FrIf), the L-SDU Router (LSduR), the BSW Mode Manager (BswM), the Default Error Tracer (Det), the Crypto Service Manager (CSM), and the Intrusion Detection System Manager (IdsM).

* StbM -

  * Get and set the current time value
  * Get FV from FVM
* LSduR - Receiving and transmitting messages
* FrIf - Accessing the clock unit in the FlexRay controller
* BswM - Coordination of network access (via `FrTSyn_SetTransmissionMode`)
* Det - Reporting of development errors
* IdsM - Reporting of Security Events
* CSM -

  * Generation of ICV for Time Master
  * Verification of ICV for Time Slave

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The FrTSyn module handles the distribution of time information over FlexRay buses.

The FlexRay mechanism is much simpler than the mechanism for CAN since it is based on the fact, that FlexRay nodes are synchronized to each other, otherwise no messages can be transmitted on FlexRay.

Both, Time Master and Time Slaves have the same view on the FlexRay global time. It is therefore just necessary to define the same point in (FlexRay) time and to transmit the time information, which will be valid at that point in (FlexRay) time.

Although this same point in (FlexRay) time could be in theory any FlexRay macrotick within a FlexRay cycle, the start of a FlexRay cycle simplifies this mechanism. In addition, the mechanism does not just use any cycle start but uses the cycle start of the subsequent cycle with cycle counter value 0, i.e. the Time Master transmits time information located in the future.

On FlexRay only one Time Synchronization message is needed.

The Time Master uses its current FlexRay time, i.e. macrotick counter and cycle counter, and the current time, which shall be distributed and calculates the resulting time at the start of the next cycle 0.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Acronyms, Abbreviations, and 定义
*原文标题：Acronyms, Abbreviations, and Definitions*

This section lists module local abbreviations and definitions. For additional Time Synchronization related abbreviations and definitions refer to chapter 3 in the RS Time Synchronization . For general terms and abbreviations refer to the AUTOSAR Glossary .

| Abbreviation | Description |
|---|---|
| GTM | Global Time Master |
| BswM | BSW Mode Manager module |
| <Bus>TSyn | Bus specific Time Synchronization module |
| CRC | Cyclic Redundancy Checksum |
| CSM | Crypto Service Manager |
| Debounce Time | Minimum gap between two Tx messages with the same PDU |
| Det | Default Error Tracer module |
| FCNT | FlexRay Cycle Counter |
| FR | FlexRay |
| FrIf | FlexRay interface module |
| FrTSyn | Time Synchronization over FlexRay module |
| FV | Freshness Value |
| FVL | Freshness Value Length |
| FVM | Freshness Value Manager |
| ICV | Integrity Check Value |
| ICVL | Integrity Check Value Length |
| IdsM | Intrusion Detection System Manager module |
| LSduR | L-SDU Router module |
| MAC | Message Authentication Code |
| SC | Sequence Counter in Time Synchronization messages |
| SGW | "Synchronized to Gateway" state of Time Synchronization |
| StbM | Synchronized Time-Base Manager |
| SYNC message | Time Synchronization message |
| Timesync | Time Synchronization |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for FrTSyn.

Thus, the specification SWS BSW General shall be considered as additional and required specification for FrTSyn.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

Time Masters, Time Gateways and Time Slaves shall work with a Time Base reference clock with a tick duration of 2\mus.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

Automotive systems requiring a common Time Base for ECUs regardless of which bus system the ECUs are connected to.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The Time Synchronization over FlexRay (FrTSyn) has interfaces towards the Synchronized Time-Base Manager (StbM), the FlexRay Interface (FrIf), the L-SDU Router (LSduR), the BSW Mode Manager (BswM), the Default Error Tracer (Det), the Crypto Service Manager (CSM), and the Intrusion Detection System Manager (IdsM).

* StbM -

  * Get and set the current time value
  * Get FV from FVM
* LSduR - Receiving and transmitting messages
* FrIf - Accessing the clock unit in the FlexRay controller
* BswM - Coordination of network access (via `FrTSyn_SetTransmissionMode`)
* Det - Reporting of development errors
* IdsM - Reporting of Security Events
* CSM -

  * Generation of ICV for Time Master
  * Verification of ICV for Time Slave

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
| The Timesync over FlexRay module shall trigger Time Base Synchronization transmission |  |  |
| The Timesync over FlexRay module shall provide a Time Base after reception of a valid protocol information |  |  |
| The Timesync over FlexRay module shall support means to protect the Time Synchronization protocol |  |  |
| The Timesync over FlexRay module shall detect and handle timeout and integrity errors in the Time Synchronization protocol |  |  |
| The Timesync over FlexRay module shall support a protocol for precise time measurement and synchronization over FlexRay |  |  |
| The Timesync over FlexRay module shall sup |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

This chapter defines the behavior of the Time Synchronization over FlexRay. The API of the module is defined in chapter , while the configuration is defined in chapter .

### 15. 概述
*原文标题：Overview*

The Time Synchronization over FlexRay is responsible to ensure the collection and distribution of Synchronized Time information across the FlexRay network. It interacts with the StbM and provides all FlexRay specific functions to the StbM.

Time Synchronization principles and common wording is described in  and .

### 16. 模块处理
*原文标题：Module Handling*

This section contains description of auxiliary functionality of the Time Synchronization over FlexRay.

### 17. 初始化
*原文标题：Initialization*

The Time Synchronization over FlexRay is initialized via `FrTSyn_Init`. Except for `FrTSyn_Init`, the API functions of the Time Synchronization over FlexRay may only be called when the module has been properly initialized.

  Upstream requirements: ,
⌈
A call to `FrTSyn_Init` initializes all internal variables and sets the Time Synchronization over FlexRay to the initialized state.
⌋

  Upstream requirements:
⌈
The Sequence Counter (SC) shall be initialized with 0.
⌋

### 18. FlexRay 接口
*原文标题：FlexRay Interface*

Upstream requirements: ,
⌈
The FrTSyn module shall call `FrIf_GetGlobalTime` only if `FrIf_GetState` returns `FRIF_STATE_ONLINE`. This is to ensure that `FrIf_GetGlobalTime` returns valid time information, i.e. that the FlexRay communication controller is synchronous to the FlexRay global time.
⌋

### 19. 错误处理
*原文标题：Error Handling*

Upstream requirements: ,
⌈
On errors and exceptions, the FrTSyn module shall not modify its current module state but shall simply report the error event.
⌋

### 20. Message Format

SYNC messages may share the same FR PDU by using a multiplexed signal group. The multiplexer is located in byte 0, named Type.

For different Time Domains the same FR PDU may be used if Time Synchronization messages are sent by the same Time Master or Time Gateway.

For different Time Domains different FR PDUs shall be used if Time Synchronization messages are sent by different Time Masters or Time Gateways.

The usage of CRC is optional. To ensure a great variability between several time observing units, the configuration decides of how to handle CRC protected time synchronization messages if the receiver does not support the CRC calculation. Hence it might be possible, that a receiver is just using the given Time Base value, without evaluating the CRC.

SYNC messages can be ICV secured. This provides the integrity and authenticity protection of these messages.

The usage of a ICV is optional. To ensure a great variability between several time observing units, the configuration decides on how to handle ICV secured Time Synchronization messages if the receiver does not support the ICV calculation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. SYNC message

The message layout of the SYNC messages is defined by the following requirements:

*
*
*
*

depending on whether the payload is CRC protected and/or ICV secured or not.

 SYNC message format - not CRC protected, not ICV secured
  Upstream requirements: ,
⌈
| Byte | Bit Position | Field Name | Field Value Range | Description |
|---|---|---|---|---|
| 0 |  | Type | 0x10 | Message Type |
| 1 |  | User Byte 2 | default: 0 |  |
| 2 | 7..4 | D | 0..15 | Time Domain Id |
| 3..0 | SC | 0..15 | Sequence Counter |  |
| 3 | 7..2 | FCNT | 0..63 | FlexRay Cycle Counter |
| 1 | SGW | 0 = SyncToGTM |  |  |
|  |  | 1 = SyncToSubDomain |  |  |
| 0 | reserved | 0 |  |  |
| 4 |  | User Byte 0 | default: 0 |  |
| 5 |  | User Byte 1 | default: 0 |  |
| 6..11 |  | SyncTimeSec |  | 48 bit time value in seconds |
| 12..15 |  | SyncTimeNSec |  | 32 bit time value in nanoseconds |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Acting as Time Master

A Time Master is an entity which is the master for a certain Time Base and which propagates this Time Base to a set of Time Slaves within a certain segment of a communication network, being a source for this Time Base.

If a Time Master is also the owner of the Global Time Base, the Time Base from which all further Time Bases are derived from, then it is the Global Time Master. A Time Gateway typically consists of one Time Master port which is connected to one or more Time Slaves. When mapping time entities to real ECUs it has to be noted, that an ECU could be Time Master (or even Global Time Master) for one Time Base and Time Slave for another Time Base.

If the FrTSyn is configured as a Time Master for Time Domain, the FrTSyn module checks on each `FrTSyn_MainFunction` call the necessity for a Timesync message transmission for that Time Domain.

 illustrates how FrTSyn determines if (immediate and cyclic) message transmission of a Timesync message is required.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. SYNC message processing

Upstream requirements:
⌈
A Time Synchronization message sequence consists of a SYNC message per Time Domain.
⌋

Note: Refer to figure  for the sequence diagram of a Time Master.

  Upstream requirements: ,
⌈
For each configured Time Master (refer to FrTSynGlobalTimeMaster) if

* the `GLOBAL_TIME_BASE` bit within the timeBaseStatus is set
* and FrTSynGlobalTimeTxPeriod is unequal to 0
* and the associated cyclicMsgResumeCounter is equal or less than 0,

then the FrTSyn module shall periodically transmit SYNC messages with the cycle FrTSynGlobalTimeTxPeriod including the time value, which will be valid at the start of the next FlexRay cycle 0 and User Data.

The cyclic transmission shall be started in the earliest possible `FrTSyn_MainFunction` call once the requirements above are fulfilled.
⌋

Note: "earliest possible" means:

* In the next `FrTSyn_MainFunction`, because `GLOBAL_TIME_BASE` is set outside the `FrTSyn_MainFunction`.
* In the current `FrTSyn_MainFunction`, when switching from immediate to cyclic transmission (because this decision is made inside the `FrTSyn_MainFunction`). For details on immediate transmission refer to chapter .

  Upstream requirements: ,
⌈
If

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Transmission 模式
*原文标题：Transmission mode*

Upstream requirements: ,
⌈
If `FrTSyn_SetTransmissionMode`(Controller, Mode)is called and parameter Mode equals `FRTSYN_TX_OFF`, all transmit requests from FrTSyn shall be omitted on this FlexRay channel.
⌋

  Upstream requirements: ,
⌈
If `FrTSyn_SetTransmissionMode`(Controller, Mode) is called and parameter Mode equals `FRTSYN_TX_ON`, all transmit requests from FrTSyn on this FlexRay channel shall be able to be transmitted.
⌋

### 25. Debounce Time

The FrTSyn debounces FlexRay Tx PDUs of a Time Master to avoid bursts of Timesync messages on the bus (e.g. if immediate transmission is enabled).

For each Tx PDU the FrTSyn maintains a debounce counter debounceCounter. On each transmission of a Timesync message the debounceCounter is (re-)loaded by the configured debounce time FrTSynGlobalTimeDebounceTime. The debounceCounter is decremented in each FrTSyn main cycle. Transmission of the same PDU can only be triggered, if the debounceCounter has reached the value 0. Refer also to the overall sequence for the Timesync message transmission in .

The FrTSyn does not support sharing of PDUs across domains and busses, i.e. same PDU ID shall not be used for different time domains.

  Upstream requirements:
⌈
If for a Time Domain

* FrTSynGlobalTimeDebounceTime is greater than 0
* and the corresponding Timesync PDU has been successfully sent,

then the FrTSyn shall set the PDU specific debounceCounter to FrTSynGlobalTimeDebounceTime.
⌋

Note: A Timesync PDU is considered to be successfully sent, if

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Immediate Time 同步
*原文标题：Immediate Time Synchronization*

In addition to the cyclic Timesync message transmission an immediate message transmission might be required. Refer also to the overall sequence for the Timesync message transmission in .

  Upstream requirements:
⌈
If FrTSynImmediateTimeSync is set to TRUE for a Time Base, FrTSyn shall check on each `FrTSyn_MainFunction` call by calling `StbM_GetTimeBaseUpdateCounter`, if the timeBaseUpdateCounter of the corresponding Time Base has changed.
⌋

  Upstream requirements:
⌈
If

* FrTSynImmediateTimeSync is set to TRUE
* and the timeBaseUpdateCounter of a Time Base has changed
* and the `GLOBAL_TIME_BASE` bit of the timeBaseStatus is set,

then FrTSyn shall trigger an immediate transmission of Time Synchronization messages for the corresponding Time Base.
⌋

Note: timeBaseStatus can be obtained by `StbM_GetTimeBaseStatus` or `StbM_GetCurrentTime`.

Note: The debounceCounter as described in  shall always be considered.

In addition to the actual trigger condition for an immediate transmission (refer to  above) the parameter FrTSynCyclicMsgResumeTime needs to be considered for immediate transmission. Refer also to the trigger condition for cyclic Timesync message transmissions (refer to ) .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Calculation and Assembling of Time 同步 Messages
*原文标题：Calculation and Assembling of Time Synchronization Messages*

This chapter describes the workflow, how the items of a Time Synchronization message will be calculated (1^(st) step) and how the message will be assembled (2^(nd) step).

### 28. Global Time Calculation

Upstream requirements:
⌈
The transmitter of a Synchronized Time Base (Time Master) shall perform the following steps to distribute the Synchronized Time Base:

# Retrieve current Synchronized Time Base's Time Tuple as  via `StbM_GetCurrentTime`
# Protect the following two steps against interruptions:

  # Get currentCycle and currentMacroticks via `FrIf_GetGlobalTime`
  # Retrieve current Virtual Local Time value as T1_(VLT) via `StbM_GetCurrentVirtualLocalTime`
# Calculate the (future) time value of the Time Base at the start of the next FlexRay cycle by T0 = T_(SYNC) + (T1_(VLT) - T0_(VLT)) + (64 - currentCycle) * CycleLength - (CycleLength / MacroticksPerCycle) * currentMacroticks
# Calculate SyncTimeSec (second portion of T0) and SyncTimeNSec (nanosecond portion of T0)
⌋

Note: Refer to figure  for the Time Master sequence of actions.

Note: It is inevitable to retrieve currentCycle and currentMacroticks of the FlexRay time and T1_(VLT) of the Virtual Local Time in an atomic way, otherwise any delay between them will worsen the precision by the amount of the delay.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. SGW Calculation

Upstream requirements:
⌈
The SGW value (Time Gateway synchronization status) shall be retrieved from the Time Base synchronization status. If the `SYNC_TO_GATEWAY` bit within timeBaseStatus is not set the SGW value shall be SyncToGTM. Otherwise the SGW value shall be set to SyncToSubDomain.
⌋

### 30. Sequence Counter Calculation

Upstream requirements: ,
⌈
A Sequence Counter (SC) of 4 bit is representing numbers from 0 to 15 per Time Domain. The Sequence Counter shall be independent between SYNC messages and shall be incremented by 1 on every transmission request of a SYNC message. It shall wrap around at 15 to 0 again.
⌋

### 31. CRC Calculation

Upstream requirements: ,
⌈
The function `Crc_CalculateCRC8H2F` as defined in  shall be used to calculate the CRC, if configured.
⌋

  Upstream requirements: ,
⌈
The DataID shall be calculated as DataID = DataIDList, where DataIDList is given by configuration for each message type (refer to FrTSynGlobalTimeSyncDataIDList).
⌋

Note: A specific DataID out of a predefined DataIDList ensures the identification of data elements of Time Synchronization messages.

  Upstream requirements: ,
⌈
The CRC shall be calculated over Time Synchronization message byte 2 to byte 15 and DataID, where byte 2 is applied first, followed by the other bytes in ascending order, and DataID last.
⌋

### 32. ICV Calculation

Refer to  for the configuration details of FV referenced in each Time Domain.

  Upstream requirements:
⌈
When:

* the FV is referenced (refer FrTSynIcvGenerationFvIdRef),
* and the configured truncated FV length (StbMFreshnessValueTruncLength) is equal to the FV length (StbMFreshnessValueLength),

the Time Master shall call `StbM_GetTxFreshness` to obtain the FV by using the StbMFreshnessValueId (referenced via the FrTSynIcvGenerationFvIdRef parameter).
⌋

  Upstream requirements:
⌈
When:

* the FV is referenced (refer FrTSynIcvGenerationFvIdRef),
* and the configured truncated FV length (StbMFreshnessValueTruncLength) < FV length (StbMFreshnessValueLength),

the Time Master shall call `StbM_GetTxFreshnessTruncData` to obtain the FV and the truncated FV by using the StbMFreshnessValueId (referenced via the FrTSynIcvGenerationFvIdRef parameter).
⌋

Note: Having the configured truncated FV length (StbMFreshnessValueTruncLength) > FV length (StbMFreshnessValueLength) in StbM is not a valid configuration.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Message Assembling

Upstream requirements: ,
⌈
For each transmission of a Time Synchronization message the FrTSyn module shall assemble the message as follows:

* Calculate SC
* Copy currentCycle (refer to ) to FCNT (for SYNC message)
* Calculate SGW
* Copy all data to the appropriate position within the related message
* Calculate CRC (configuration dependent)
* Fetch the FV (configuration dependent) and append the FVL, ICVL and FV in the appropriate position within the related message
* Calculate the ICV (configuration dependent) and append it in the appropriate position within the related message
⌋

### 34. Acting as Time Slave

A Time Slave is an entity, which is the recipient for a certain Time Base within a certain segment of a communication network, being a consumer for this Time Base.

### 35. SYNC message processing

Upstream requirements: ,
⌈
The FrTSyn shall only accept a SYNC message with Type equal to 0x20 / 0x60 and a correct CRC value if FrTSynRxCrcValidated is configured to `CRC_VALIDATED`.
⌋

  Upstream requirements:
⌈
The FrTSyn shall only accept a SYNC message with Type equal to 0x10 / 0x50 if FrTSynRxCrcValidated is configured to `CRC_NOT_VALIDATED`.
⌋

  Upstream requirements:
⌈
The FrTSyn shall only accept a SYNC message with Type equal to 0x10 / 0x50 or 0x20 / 0x60 if FrTSynRxCrcValidated is configured to `CRC_IGNORED`.
⌋

  Upstream requirements: ,
⌈
The FrTSyn shall only accept a SYNC message with Type equal to 0x10 / 0x50 or a SYNC message with Type equal to 0x20 / 0x60 and a correct CRC value if FrTSynRxCrcValidated is configured to `CRC_OPTIONAL`.
⌋

  Upstream requirements:
⌈
If FrTSynRxIcvVerificationType is configured to `ICV_VERIFIED`, FrTSyn shall perform ICV verification for SYNC messages with ICV value (Message type: 0x50, 0x60).

The FrTSyn shall consider ICV verification as failed for SYNC messages without ICV (Message type: 0x10, 0x20).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Time 同步 Messages的校验 and Disassembling
*原文标题：Validation and Disassembling of Time Synchronization Messages*

This chapter describes the workflow how the items of a Time Synchronization message will be validated (1^(st) step) and how the message will be disassembled (2^(nd) step).

### 37. Global Time Calculation

Upstream requirements:
⌈
The receiver of a Synchronized Time Base shall perform the following steps to assemble the Synchronized Time Base:

# On SYNC message RX indication (or in the subsequent MainFunction call) store received time value T0 (SyncTimeSec, SyncTimeNSec)
# Protect the following two steps against interruptions:

  # Get currentCycle and currentMacroticks via `FrIf_GetGlobalTime`
  # Retrieve current Virtual Local Time value as T1_(VLT) via `StbM_GetCurrentVirtualLocalTime`
# Calculate Time Tuple  to update the Time Slave's local instance of the Time Base:

  # T1 = T0 + (CycleLength * currentCycle) + ((CycleLength / MacrotickPerCycle) * currentMacroticks)
  # If currentCycle is greater or equal than the retrieved FCNT value from the transmitter (Time Master), then the calculated value T1 shall be subtracted by 64 times the FlexRay cycle duration: T1 = T1 - (CycleLength * 64)
⌋

Note: Refer to figure  for the Time Slave sequence of actions.

Note: It is inevitable to retrieve currentCycle and currentMacroticks of the FlexRay time and T1_(VLT) of the Virtual Local Time atomic, otherwise any delay between them will worsen the precision by the amount of the delay.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. SGW Calculation

Upstream requirements: ,
⌈
If the SGW value of a SYNC message is set to SyncToSubDomain, the `SYNC_TO_GATEWAY` bit within timeBaseStatus shall be set to TRUE. Otherwise, it shall be set to FALSE.
⌋

### 39. Sequence Counter 校验
*原文标题：Sequence Counter Validation*

illustrates the Sequence Counter validation of a Time Slave for SYNC messages.

  Upstream requirements: ,
⌈
Upon reception of a SYNC message, if the message is the first SYNC message after startup, then a Time Slave shall consider the Sequence Counter value as valid.
⌋

Rationale: After startup it makes sense to skip the Sequence Counter check and to allow the Sequence Counter of the Time Slave to synchronize to the one of the Time Master.

  Upstream requirements: ,
⌈
Upon reception of a SYNC message, if the Sequence Counter check is disabled for SYNC messages (i.e., FrTSynGlobalTimeSequenceCounterJumpWidth == 0), then a Time Slave shall consider the Sequence Counter value of the SYNC message as valid.
⌋

  Upstream requirements: ,
⌈
Upon reception of a SYNC message, if

* the message is not the first SYNC message after startup
* and Sequence Counter check is enabled (i.e., FrTSynGlobalTimeSequenceCounterJumpWidth > 0)
* and the Time Domain is not in timeout (i.e., TIMEOUT bit not set in Time Base synchronization status timeBaseStatus)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Sequence Counter Hysteresis

This chapter specifies how to apply an optional hysteresis (FrTSynGlobalTimeSequenceCounterHysteresis, refer to ) to check if the Sequence Counter value is valid, i.e., if the Sequence Counter check is actually successful.

This requires that a number of consecutive Sequence Counter jumps are valid. Requirements ,  and  specify when an individual Sequence Counter jump is considered to be valid.

The hysteresis improves robustness against a scenario with a buggy master implementation or injection of invalid master messages, i.e., when the Sequence Counter increments by more than FrTSynGlobalTimeSequenceCounterJumpWidth. In such a scenario (without any hysteresis) a message with any (also invalid) Sequence Counter value would cause the Time Slave to leave the Timeout state although the Sequence Counter is not incremented correctly. A hysteresis avoids this.

  Upstream requirements: ,
⌈
Upon reception of a SYNC message, if

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. CRC 校验
*原文标题：CRC Validation*

Upstream requirements: ,
⌈
The function `Crc_CalculateCRC8H2F` as defined in  shall be used to validate the CRC, if configured.
⌋

  Upstream requirements: ,
⌈
The DataID shall be calculated as DataID = DataIDList, where DataIDList is given by configuration for each message Type.
⌋

Note: A specific DataID out of a predefined DataIDList ensures the identification of data elements of Time Synchronization messages.

  Upstream requirements: ,
⌈
The CRC shall be calculated over Time Synchronization message byte 2 to byte 15 and DataID, where byte 2 is applied first, followed by the other bytes in ascending order, and DataID last.
⌋

### 42. ICV Verification

Refer to  for the configuration details of FV referenced in each Time Domain.

  Upstream requirements:
⌈
When the FV is referenced (refer FrTSynIcvVerificationFvIdRef) and the FVL of the received SYNC message is greater than 0, the Time Slave shall call the `StbM_GetRxFreshness` Api to obtain the FV by using:

* the StbMFreshnessValueId from the reference FrTSynIcvVerificationFvIdRef,
* the StbMTruncatedFreshnessValue as received in the FV field of the SYNC message,
* the StbMTruncatedFreshnessValueLength as received in the FVL field of the SYNC message,
* the StbMFreshnessValueLength from the reference FrTSynIcvVerificationFvIdRef,
* the StbMAuthVerifyAttempts as the number of failed verification attempts for the current message (ICV verification attempt counter).
⌋

  Upstream requirements:
⌈
When the FVL of the received SYNC message is equal to 0, the Time Slave shall not include the FV in the ICV verification.
⌋

  Upstream requirements:
⌈
When the FV is not referenced (refer FrTSynIcvVerificationFvIdRef) and the FVL of the received SYNC message is greater than 0, the Time Slave shall stop the ICV verification and consider the ICV verification as failed.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Message Disassembling

Upstream requirements:
⌈
For each received Time Synchronization message the FrTSyn shall validate the message as follows (all conditions must match):

# Type matches depending on the FrTSynRxCrcValidated parameter
# SC value is valid (refer to requirements  to )
# D matches to the defined Time Domain range for each Type
# D matches to one of the configured Time Domains
# SyncTimeNSec matches the defined range of `StbM_TimeStampType`.nanoseconds.
# CRC (including DataID) matches depending on the FrTSynRxCrcValidated parameter.
# ICV verification is successful, depending on the FrTSynRxIcvVerificationType parameter.
⌋

  Upstream requirements: ,
⌈
If the validation of received Time Synchronization message is successful (refer to ), the FrTSyn shall disassemble the message and forward the global time via `StbM_BusSetGlobalTime` to StbM.
⌋

  Upstream requirements: ,
⌈
If the validation of the received Time Synchronization message has failed(refer to ), the FrTSyn shall discard the message.
⌋

### 44. Time Recording

### 45. Global Time Measurement 支持
*原文标题：Global Time Measurement Support*

Upstream requirements:
⌈
On an invocation of `StbM_BusSetGlobalTime` the member pathDelay of the measureDataPtr structure shall be set to 0.
⌋

### 46. Time 校验
*原文标题：Time Validation*

Upstream requirements:
⌈
The FrTSyn shall support Time Validation, if FrTSynTimeValidationSupport set to TRUE.
⌋

  Upstream requirements:
⌈
If

* FrTSynTimeValidationSupport is enabled and
* FrTSynEnableTimeValidation for the Time Domain is enabled

FrTSyn shall do time recording for Time Validation for that Time Domain.
⌋

  Upstream requirements:
⌈
If

* time recording for Time Validation is enabled for a Time Domain (refer to  and ) and
* FrTSyn is configured as Time Slave for that Time Domain,

FrTSyn shall call `StbM_FrSetSlaveTimingData` upon successful reception of a SYNC message.

`StbM_FrSetSlaveTimingData` shall be called after `StbM_BusSetGlobalTime`.
⌋

Note: `StbM_BusSetGlobalTime` shall be called first, because it updates the Synclocal Time Tuple (refer to ), which is required by `StbM_FrSetSlaveTimingData`. Refer to figure  for the overall sequence of API calls for a Time Slave.

  Upstream requirements:
⌈
Upon invocation of `StbM_FrSetSlaveTimingData` FrTSyn shall pass following values

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 78 章（内容从略，见纯文本全文）

47. 安全事件
48. 错误分类
49. Development 错误
50. Runtime 错误
51. Production 错误
52. Extended Production 错误
53. API 规范
54. API
55. Imported 类型
56. 类型定义
57. FrTSyn_ConfigType
58. FrTSyn_TransmissionModeType
59. 功能定义
60. FrTSyn_Init
61. FrTSyn_SetTransmissionMode
62. Call-back 通知
63. FrTSyn_RxIndication
64. FrTSyn_TriggerTransmit
65. FrTSyn_IcvGenerationIndication
66. FrTSyn_IcvVerificationIndication
67. Scheduled functions
68. FrTSyn_MainFunction
69. Expected 接口
70. Mandatory 接口
71. Optional 接口
72. 时序图
73. FlexRay Time 同步 (Time Master)
74. FlexRay Time 同步 (Time Slave)
75. FlexRay Secure Time 同步 Sequence
76. 配置规范
77. How to read this chapter
78. Containers and 配置 parameters
79. Variants
80. FrTSyn
81. FrTSynGeneral
82. FrTSynSecurityEventRefs
83. FrTSynGlobalTimeDomain
84. FrTSynGlobalTimeSyncDataIDList
85. FrTSynGlobalTimeSyncDataIDListElement
86. FrTSynGlobalTimeMaster
87. FrTSynGlobalTimeMasterPdu
88. FrTSynGlobalTimeTxIcvGeneration
89. FrTSynGlobalTimeSlave
90. FrTSynGlobalTimeSlavePdu
91. FrTSynGlobalTimeRxIcvVerification
92. Constraints
93. 发布信息
94. 附录
95. 不适用需求
96. Change history of AUTOSAR traceable items
97. Traceable item history of this document according to AUTOSAR Release R25-11
98. Added 规范 Items in R25-11
99. Changed 规范 Items in R25-11
100. Deleted 规范 Items in R25-11
101. Added Constraints in R25-11
102. Changed Constraints in R25-11
103. Deleted Constraints in R25-11
104. Traceable item history of this document according to AUTOSAR Release R24-11
105. Added 规范 Items in R24-11
106. Changed 规范 Items in R24-11
107. Deleted 规范 Items in R24-11
108. Added Constraints in R24-11
109. Changed Constraints in R24-11
110. Deleted Constraints in R24-11
111. Traceable item history of this document according to AUTOSAR Release R23-11
112. Added 规范 Items in R23-11
113. Changed 规范 Items in R23-11
114. Deleted 规范 Items in R23-11
115. Added Constraints in R23-11
116. Changed Constraints in R23-11
117. Deleted Constraints in R23-11
118. Traceable item history of this document according to AUTOSAR Release R22-11
119. Added 规范 Items in R22-11
120. Changed 规范 Items in R22-11
121. Deleted 规范 Items in R22-11
122. Added Constraints in R22-11
123. Changed Constraints in R22-11
124. Deleted Constraints in R22-11
