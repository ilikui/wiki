# Specification of Time Synchronization over Ethernet (`TimeSyncOverEthernet`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 676 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_TimeSyncOverEthernet_676\AUTOSAR_CP_SWS_TimeSyncOverEthernet.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_TimeSyncOverEthernet_676\AUTOSAR_CP_SWS_TimeSyncOverEthernet.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_TimeSyncOverEthernet_676\zzgen\CP_SWS_TimeSyncOverEthernet.complete.txt`

## 文档简介

The EthTSyn module handles the Time Synchronization Protocol on Ethernet as specified in .

In addition to what is specified in  the EthTSyn module supports the following features:

* Debouncing of Timesync PDUs to avoid that a PDU with higher priority blocks those with lower priority
* "Immediate" transmission of Time Synchronization messages for fast (re-) synchronization of a Time Master and a Time Slave

The EthTSyn is tightly coupled to the Synchronized Time-Base Manager (StbM; refer to ), which is responsible for interpolating (a local instance of) a Synchronized Time Base between the reception of 2 consecutive Sync messages for that Time Base. The StbM also provides the service interface for Time Synchronization to the application. Figure 1 shows the Time Synchronization related modules in the AUTOSAR Layered Architecture.

The EthTSyn supports securing the global time messages on the Ethernet communication bus. The figure below shows the time provider modules interface with the security modules in the AUTOSAR Layered Architecture.

## 模块依赖

The Global Time Synchronization over Ethernet (EthTSyn) has interfaces towards the Synchronized Time-Base Manager (StbM), the Ethernet Interface (EthIf), the L-SDU Router (LSduR), the Basic Software Mode Manager (BswM), the Crypto Service Manager (CSM), the Intrusion Detection System Manager (IdsM) and the Default Error Tracer (DET).

* StbM -

  * Get and set the current time value
  * Get FV from FVM
* EthIf - Receiving and transmitting messages
* LSduR - Routing of L-SDUs between EthIf and upper layer modules (e.g. EthTSyn),
* BswM - Coordination of network access
* DET - Reporting of development errors
* CSM -

  * Generation of ICV for Time Master
  * Verification of ICV for Time Slave
* IdsM - Reporting of security events

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The EthTSyn module handles the Time Synchronization Protocol on Ethernet as specified in .

In addition to what is specified in  the EthTSyn module supports the following features:

* Debouncing of Timesync PDUs to avoid that a PDU with higher priority blocks those with lower priority
* "Immediate" transmission of Time Synchronization messages for fast (re-) synchronization of a Time Master and a Time Slave

The EthTSyn is tightly coupled to the Synchronized Time-Base Manager (StbM; refer to ), which is responsible for interpolating (a local instance of) a Synchronized Time Base between the reception of 2 consecutive Sync messages for that Time Base. The StbM also provides the service interface for Time Synchronization to the application. Figure 1 shows the Time Synchronization related modules in the AUTOSAR Layered Architecture.

The EthTSyn supports securing the global time messages on the Ethernet communication bus. The figure below shows the time provider modules interface with the security modules in the AUTOSAR Layered Architecture.

### 2. Acronyms, Abbreviations and 定义
*原文标题：Acronyms, Abbreviations and Definitions*

This section lists module local Abbreviations and Definitions. For a complete set of Synchronized Time Base related terms refer to the corresponding chapter in .

| Abbreviation / Acronym: | Description |
|---|---|
| (G)TD | (Global) Time Domain |
| (G)TM | (Global)Time Master |
| <Bus>TSyn | A bus specific Time Synchronization module |
| AVB | Audio Video Bridging |
| BMCA | Best Master Clock Algorithm |
| CID | Company ID (IEEE) |
| CRC | Cyclic Redundancy Checksum |
| CSM | Crypto Service Manager |
| Debounce Time | Minimum gap between sending (Event) messages. |
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |
| ETH | Ethernet |
| EthTSyn | Time Synchronization Provider module for Ethernet |
| Follow_Up | Time transport message (Follow-Up) |
| FV | Freshness Value |
| FVM | Freshness Value Manager |
| GM(C) | Grand Master (Clock) |
| ICV | Integrity Check Value |
| LSduR | L-SDU Router module |
| MAC | Media Access Control |
| MAC | Message Authentication Code |
| meanPropagationDelay | meanPropagationDelay as defined by |
| neighborRateRatio | neighborRateRatio as defined by |
| Pdelay | Propagation / path delay as given in |
| Pdelay_Req | Propagation / path delay request message |
| Pdelay_Resp | Propagation / path delay response message |
| Pdelay_Resp_Follow_Up | Propagat |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides

* a General Specification on Basic Software  which is also valid for EthTSyn and
* a Time Synchronization Protocol Specification  which is also valid for EthTSyn.

Thus, the specification  and  shall be considered as additional and required specification for EthTSyn.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

This section gives limitations with respect to the protocol implemented, specifically compared to . Constraints of the configuration can be found in .

### 7. 限制
*原文标题：Limitations*

* No support of BMCA protocol, like specified in .
* No support of Announce and Signaling messages, like specified in .
* The reception of a `Pdelay_Req` is not taken as a pre-condition to start with the transmission of Sync messages.
* The Rate Correction will be performed by the StbM, (refer to ) based on Sync messages, which does not require the Pdelay mechanism, though the IEEE Standard mandates to calculate the rate correction based on Pdelay messages. This is considered to be a deviation from the IEEE-Standard, but it is considered to be interoperable. For some applications, e.g. for Audio/Video, it might be necessary to use Pdelay based Rate Correction performed by EthTSyn itself, which is optional and not considered by this specification.
* The Time Validation use case (Time Validation enabled) requires that the Pdelay measurement appears for a higher layer Validation application as if it was performed with timestamps from that Global Time Base that needs to be validated. The relevant timestamps are therefore mapped to the local instance of that Global Time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Accuracy

The accuracy of Time Synchronization depends on various factors (e.g., oscillator accuracy, number of bridges in the network path, configuration, ...). Refer to , for recommendations on how to properly configure the overall system for highest possible accuracy.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

Automotive systems requiring a common Time Base for ECUs regardless of which bus system the ECUs are connected to.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The Global Time Synchronization over Ethernet (EthTSyn) has interfaces towards the Synchronized Time-Base Manager (StbM), the Ethernet Interface (EthIf), the L-SDU Router (LSduR), the Basic Software Mode Manager (BswM), the Crypto Service Manager (CSM), the Intrusion Detection System Manager (IdsM) and the Default Error Tracer (DET).

* StbM -

  * Get and set the current time value
  * Get FV from FVM
* EthIf - Receiving and transmitting messages
* LSduR - Routing of L-SDUs between EthIf and upper layer modules (e.g. EthTSyn),
* BswM - Coordination of network access
* DET - Reporting of development errors
* CSM -

  * Generation of ICV for Time Master
  * Verification of ICV for Time Slave
* IdsM - Reporting of security events

### 11. 文件结构
*原文标题：File structure*

### 12. 代码文件结构
*原文标题：Code file structure*

For details, refer to the section 5.1.6 "Code file structure" of the SWS BSW General .

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Implementation of Time Synchronization shall maintain its own Time Base independently of the acting role. |  |  |
| The Implementation of Time Synchronization shall provide measurement data to the application |  |  |
| The Timesync over Ethernet module shall trigger Time Base Synchronization transmission |  |  |
| The Timesync over Ethernet module shall support IEEE 802.1AS as well as AUTOSAR extensions |  |  |
| The Timesync over Ethernet module shall detect and handle errors in synchronization protocol / communication |  |  |
| The configuration of the Time Synchronization over Ethernet module shall allow the module to work as a Time Master |  |  |
| The configuration of the Time Synchronization over Ethernet module shall allow the module to work as a Time Slave |  |  |
| The Implementation of the Time Synchronization shall evaluate and propagate Time Gateway relevant information |  |  |
| The Timesync over Ethernet module |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

This chapter defines the behavior of the module EthTSyn, responsible for the Time Synchronization over Ethernet. The API of the module is defined in , while the configuration is defined in .

### 15. 概述
*原文标题：Overview*

The module EthTSyn is responsible to ensure the collection and distribution of synchronized time information across the Ethernet network. It interacts with the StbM and provides all Ethernet specific functions to the StbM.

### 16. 通用
*原文标题：General*

Refer to chapter General in .

### 17. VLAN 支持
*原文标题：VLAN Support*

Upstream requirements:
⌈
When calling `LSduR_EthTSynTransmit`, EthTSyn shall use a meta data item of type PRIORITY_8 (referenced by the parameter PduInfoPtr) to set the frame priority to the value of the configuration parameter EthTSynFramePrio.

Use a metadata item of type `ETHERNET_MAC_64` (referenced by parameter PduInfoPtr) to set the destination MAC address based on the configuration parameter EthTSynDestPhyAddr.
⌋

Refer to chapter VLAN Support in  for additional requirements.

### 18. Message Transmission

Retry Counter for Transmission
  Upstream requirements:
⌈
For every transmission of messages, EthTSyn shall maintain a retry counter (refer to EthTSynMaxNumberOfTransmitRetries).
⌋

 Initialization of Transmission Retry Counter
  Upstream requirements:
⌈
Upon the initial processing of messages, the retry counter shall be set to 0.
⌋

 Incrementing the Transmission Retry Counter
  Upstream requirements:
⌈
If `LSduR_EthTSynTransmit` returns a value different than E_OK, the retry counter shall be incremented, and the message transmission shall be retried in the next call of `EthTSyn_MainFunction`.
⌋

 Stop of retrying transmissions
  Upstream requirements:
⌈
If the retry counter has reached the configuration value EthTSynMaxNumberOfTransmitRetries, the EthTSyn shall stop retrying and resume cyclic transmission.
⌋

### 19. 初始化
*原文标题：Initialization*

The EthTSyn is initialized via `EthTSyn_Init`. Except for `EthTSyn_Init`, the API functions of the EthTSyn module may only be called when the module has been properly initialized.

  Upstream requirements:
⌈
A call to `EthTSyn_Init` initializes all internal variables and sets the EthTSyn module to the initialized state.
⌋

Note: Unless specified otherwise EthTSyn uses default values as given in .

### 20. 处理 of different Virtual Local Time sources
*原文标题：Handling of different Virtual Local Time sources*

If HW Timestamping is enabled, the StbM could also use the ETH free running counter for interpolation of the local instance of the Global Time. There are however use cases when the StbM is configured to use the GPT instead, e.g.

* A Global Time Master or a Time Gateway is connected to different CAN/ETH busses and HW timestamping of each CAN/ETH communication controller is unsynchronized with each other.

In such a case conversions are required between the timestamps of different Virtual Local Time sources:

* The StbM uses (i.e., captures, stores and returns) only timestamps in the scope of its Virtual Local Time source.
* <Bus>TSyn modules thus need to convert timestamps from their Virtual Local Time source to the scope of the StbM's Virtual Local Time source in case different scopes are used when either passing a global time to the StbM or when obtaining it from the StbM (refer to alternative label "Time Source of StbM" in sequence diagrams  and ).
* The conversion can happen linearly, i.e., no rate correction terms need to be determined and applied.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Debounce Time

Upstream requirements:
⌈
If EthTSynGlobalTimeDebounceTime is set to 0, EthTSyn shall ignore any debouncing.
⌋

  Upstream requirements:
⌈
If EthTSynGlobalTimeDebounceTime is greater than 0, EthTSyn shall always consider debouncing for all Timesync PDUs (Sync, `Follow_Up`, `Pdelay_Req`, `Pdelay_Resp` and `Pdelay_Resp_Follow_Up`) as described below.
⌋

Note: The Debouncing avoids misassignment of time stamps to false event message.

  Upstream requirements:
⌈
EthTSynGlobalTimeDebounceTime represents the reload value of a debounceCounter that shall be reloaded at that point in time, where a Timesync PDU has been sent and that shall be decremented on each `EthTSyn_MainFunction` call if no Timesync PDU is transmitted.
⌋

  Upstream requirements:
⌈
A new Timesync PDU shall only be sent, if the corresponding debounceCounter has reached 0.
⌋

  Upstream requirements:
⌈
Each EthTSynPTPPort of a EthTSynGlobalTimeDomain shall have its own debounceCounter.
⌋

### 22. Pdelay 协议
*原文标题：Pdelay Protocol*

This chapter defines EthTSyn specific requirements in addition to the generic requirements in chapter "Pdelay Protocol for Latency Calculation" in .

The Pdelay protocol is executed:

* For every Domain for which EthTSynNeighbourRateRatioConfig is set to TransportSpecific or EthTSynLinkDelayConfig is set to TransportSpecific
* Only once for multiple Domains, if EthTSynNeighbourRateRatioConfig is set to CMLDS or EthTSynLinkDelayConfig is set to CMLDS

The Pdelay protocol is not executed, if neither of the above conditions are met.

The configuration restrictions of  apply.

The overall sequence of actions for the Pdelay measurement are given in .

### 23. Pdelay Message Transmission

The detailed sequences of actions for the transmission of

* the `Pdelay_Req` message
* the `Pdelay_Resp` message and
* the `Pdelay_Resp_Follow_Up` message

are given in .

  Upstream requirements: ,
⌈
If the Pdelay Initiator transmits a `Pdelay_Req` for latency calculation with the cycle (refer to `PRS_TS_00011` in ), the following sequence shall be applied:

# Activate the time stamping via `EthIf_EnableEgressTimeStamp` if EthTSynHardwareTimestampSupport is set to TRUE
# Transmit the `Pdelay_Req` message by calling `LSduR_EthTSynTransmit` with

  * parameter TxPduId derived from the configuration parameter EthTSynTxPduRef of the corresponding port
  * and parameter SduDataPtr set to the actual `Pdelay_Req` message data
  * and parameter SduLength set to length of the `Pdelay_Req` message data
⌋

  Upstream requirements: ,
⌈
If the Pdelay Responder transmits a `Pdelay_Resp` for latency calculation (refer to `PRS_TS_00012`) in ) the following sequence shall be applied:

# Activate the time stamping via `EthIf_EnableEgressTimeStamp` if EthTSynHardwareTimestampSupport is set to TRUE
# Transmit the `Pdelay_Resp` message by calling `LSduR_EthTSynTransmit` with

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Pdelay Message Reception

The detailed sequences of actions for the reception of

* the `Pdelay_Req` message
* the `Pdelay_Resp` message and
* the `Pdelay_Resp_Follow_Up` message

are given in sequence diagram .

  Upstream requirements:
⌈
If EthTSynHardwareTimestampSupport is set to TRUE, when `EthTSyn_RxIndication` is called on ingress of the `Pdelay_Req` message, then the EthTSyn shall retrieve the ingress timestamp t2 from the meta data item of type `TIMETUPLE_TYPE_PTR` of the PDU identified by parameter RxPduId.

If the StbM does not use the Ethernet controller as source for the Virtual Local Time (refer to parameter StbMLocalTimeHardware in ), the EthTSyn shall convert the ingress time stamp to the Virtual Local Time as used in the StbM.
⌋

  Upstream requirements:
⌈
If EthTSynHardwareTimestampSupport is set to FALSE, when `EthTSyn_RxIndication` is called on ingress of `Pdelay_Req` message, then the EthTSyn shall retrieve the ingress timestamp t2 from the StbM via `StbM_GetCurrentVirtualLocalTime`.
⌋

  Upstream requirements:
⌈
The Time Master shall set requestReceiptTimestamp (to be used in the `Pdelay_Resp` message) to t2.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Message Format

Refer to chapter Message format in  for additional requirements.

### 26. Sync and Follow_Up acc. to IEEE 802.1AS

Refer to chapter Sync and `Follow_Up` acc. to IEEE 802.1AS in .

### 27. Sync and Follow_Up acc. to AUTOSAR

Refer to chapter Sync and `Follow_Up` acc. to AUTOSAR in .

### 28. Follow_Up Message Header [AUTOSAR

]

Refer to chapter `Follow_Up` Message Header  in .

### 29. AUTOSAR and OEM Sub-TLV's

Refer to chapter AUTOSAR and OEM Sub-TLVs in .

### 30. AUTOSAR Sub-TLV：Time Secured
*原文标题：AUTOSAR Sub-TLV: Time Secured*

Refer to chapter AUTOSAR Sub-TLV: Time Secured in .

### 31. AUTOSAR Sub-TLV：Status Secured / Not Secured
*原文标题：AUTOSAR Sub-TLV: Status Secured / Not Secured*

Refer to chapter AUTOSAR Sub-TLV: Status Secured in .

### 32. AUTOSAR Sub-TLV：UserData Secured / Not Secured
*原文标题：AUTOSAR Sub-TLV: UserData Secured / Not Secured*

Upstream requirements: ,
⌈
The AUTOSAR Sub-TLV: UserData shall be mapped to the `StbM_UserDataType`, whereas the User Byte number given in the message and by the `StbM_UserDataType` shall match (UserByte_0 mapped to `StbM_UserDataType`.userByte0 etc.).

The UserDataLength shall be mapped to `StbM_UserDataType`.userDataLength and vice versa.
⌋

Refer to chapter AUTOSAR Sub-TLV: UserData Secured / Not Secured in  for additional requirements.

### 33. AUTOSAR Sub-TLV：Time Authenticated
*原文标题：AUTOSAR Sub-TLV: Time Authenticated*

Refer to chapter AUTOSAR Sub-TLV: Time Authenticated in .

### 34. Pdelay Message Header

Refer to  for the general header structure.

If EthTSynNeighbourRateRatioConfig or EthTSynLinkDelayConfig are configured to TransportSpecific:

* Either compliant with  using domainNumber 0x00,
* or Autosar specific using the lowest domainNumber,
* or with all configured domainNumbers for shared media like 10BASE-T1S.

If EthTSynNeighbourRateRatioConfig or EthTSynLinkDelayConfig is configured to CMLDS, the majorSdoId shall be transmitted as 0x2 and the minorSdoId shall be transmitted as 0x00. As a result, the aggregation of the the previous transportSpecific, message-type, and reserved fields (now SdoId) for CMLDS is 0x200.

The domainNumber shall be transmitted as 0x00 for all CMLDS Pdelay messages.

### 35. Acting as Time Master

Refer to chapter Acting as Time Master in  for additional requirements.

If the EthTSyn has at least one EthTSynPTPPort configured in the EthTSynPortRole `TIME_MASTER`, the EthTSyn module checks on each `EthTSyn_MainFunction` call the necessity for a Timesync message transmission for the respective Time Domains.

 illustrates the flow for the Time Master to trigger a (immediate and cyclic) message transmission of a Timesync message.

### 36. Message processing

Status: DRAFT
  Upstream requirements:
⌈
When EthTSynPortRole is set to DYNAMIC or `TIME_MASTER`, ports (for eth controller only 1 port and for switch individual port) shall transmit Sync and `Follow_Up` message according to the configuration parameter EthTSynGlobalTimeTxPeriod.
⌋

Note: For  Immediate Synchronization is not further affected by the port-specific EthTSynGlobalTimeTxPeriod.

Refer to chapter Message Processing in  for additional requirements.

  Upstream requirements: ,
⌈
If the Time Master transmits a Sync message (refer to  in ), the following sequence shall be applied:

* Retrieve the Global Time Tuple  from the StbM via `StbM_GetCurrentTime` according to Figure 9.2.
* Activate the time stamping via `EthIf_EnableEgressTimeStamp`, if EthTSynHardwareTimestampSupport is set to TRUE
* Transmit the `Pdelay_Resp_Follow_Up` message by calling `LSduR_EthTSynTransmit` with

  * parameter TxPduId derived from the configuration parameter EthTSynTxPduRef of the corresponding port
  * and parameter SduDataPtr set to the actual Sync message data
  * and parameter SduLength set to the length of the Sync message data
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Runtime 错误检测
*原文标题：Runtime Error detection*

Upstream requirements:
⌈
If EthTSynMasterSlaveConflictDetection is set to TRUE and if the Time Master receives a Sync message from another Time Master, it shall report a runtime error by calling `Det_ReportRuntimeError` with error code `ETHTSYN_E_TMCONFLICT` and discard the received Sync message.
⌋

### 38. Frame Debouncing

The EthTSyn debounces Tx PDUs of a Time Master to avoid bursts of Timesync messages on the network (e.g. if immediate transmission is enabled).

For each Tx PDU the EthTSyn maintains a debounceCounter. On each transmission of a Timesync message the debounce counter is (re-)loaded by the configured debounce time EthTSynGlobalTimeDebounceTime. The counter is decremented in each EthTSyn main cycle. Transmission of the same PDU can only be triggered, if the debounce counter has reached the value 0. Refer also to the overall sequence for the Timesync message transmission in .

The EthTSyn does not support sharing of PDUs across domains and busses, i.e. same PDU ID shall not be used for different time domains.

 Setting the Debounce Counter After Successful Timesync PDU Transmission
  Upstream requirements:
⌈
If for a Time Domain

* EthTSynGlobalTimeDebounceTime is greater than 0
* and the corresponding Timesync PDU has been successfully sent,

then the EthTSyn shall set the PDU specific debounceCounter to EthTSynGlobalTimeDebounceTime.
⌋

Note: A Timesync PDU is considered to be successfully sent, if a transmission confirmation for the PDU has been received.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Immediate Time 同步
*原文标题：Immediate Time Synchronization*

In addition to the standard cyclic message transmission an immediate message transmission might be required. Depending on configuration, the EthTSyn module checks on each `EthTSyn_MainFunction` call the necessity for a Timesync message transmission for each Time Base, where a Master Port belongs to.

 illustrates how immediate and cyclic message transmission align.

  Upstream requirements:
⌈
If EthTSynImmediateTimeSync is set to TRUE, EthTSyn shall check within each `EthTSyn_MainFunction` call by calling `StbM_GetTimeBaseUpdateCounter` if the returned timeBaseUpdateCounter has been changed.
⌋

  Upstream requirements:
⌈
If

* EthTSynImmediateTimeSync is set to TRUE
* and the timeBaseUpdateCounter for the updated Time Base resp. timeBaseId has been changed
* and the `GLOBAL_TIME_BASE` bit within the timeBaseStatus, which is read from StbM, is set,

EthTSyn shall trigger an immediate transmission of Time Synchronization messages belonging to this Time Base.
⌋

Note: The timeBaseStatus can be read from StbM by `StbM_GetTimeBaseStatus` or `StbM_GetCurrentTime`.

The debounceCounter as described in  has always to be considered.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Secure Time 同步
*原文标题：Secure Time Synchronization*

Refer to the chapter in StbM  for the configuration details of FV referenced in each Time Domain.

  Upstream requirements:
⌈
When the FV is referenced (refer EthTSynIcvGenerationFvIdRef, see link in note below) and the configured truncated FV length (StbMFreshnessValueTruncLength) is equal to FV length (StbMFreshnessValueLength) in StbM, the Time Master shall call the `StbM_GetTxFreshness` Api in order to obtain the full FV by using the StbMFreshnessValueId.
⌋

  Upstream requirements:
⌈
When the FV is referenced (refer EthTSynIcvGenerationFvIdRef) and the configured truncated FV length (StbMFreshnessValueTruncLength) is less than FV length (StbMFreshnessValueLength) in StbM, the Time Master shall call the `StbM_GetTxFreshnessTruncData` Api in order to obtain the full FV and the truncated FV by using the StbMFreshnessValueId.
⌋

  Upstream requirements:
⌈
If `StbM_GetTxFreshness` returns E_OK, the Time Master shall construct of the AUTOSAR Sub-TLV: Time Authenticated with FV and use the full FV in ICV generation.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Link 状态 and Transmission 模式
*原文标题：Link State and Transmission Mode*

Upstream requirements: ,
⌈
A transceiver link state change (notification call of `EthTSyn_TrcvLinkStateChg`) from `ETHTRCV_LINK_STATE_ACTIVE` to `ETHTRCV_LINK_STATE_DOWN` resets the state machines for transmission and reception of Time Synchronization messages.
⌋

  Upstream requirements: ,
⌈
A transceiver link state change (notification call of `EthTSyn_TrcvLinkStateChg`) from `ETHTRCV_LINK_STATE_DOWN` to `ETHTRCV_LINK_STATE_ACTIVE` (re-)starts the transmission and reception of Time Synchronization messages.
⌋

  Upstream requirements: ,
⌈
If `EthTSyn_SetTransmissionMode` is called and the parameter Mode equals `ETHTSYN_TX_OFF`, all transmit request from EthTSyn shall be omitted on this Ethernet controller.
⌋

  Upstream requirements: ,
⌈
If `EthTSyn_SetTransmissionMode` is called and the parameter Mode equals `ETHTSYN_TX_ON`, all transmit request from EthTSyn on this Ethernet controller shall be able to be transmitted.
⌋

### 42. Message Field Calculation and Assembling

Refer to chapter Message Field Calculation and Assembling in  for additional requirements.

### 43. SGW Calculation

Refer to chapter SGW Calculation in .

### 44. CRC Calculation

Refer to chapter CRC Calculation in  for additional requirements.

  Upstream requirements:
⌈
The function `Crc_CalculateCRC8H2F` as defined in  shall be used to calculate the CRC if configured.
⌋

### 45. AUTOSAR Sub-TLV：Time Secured
*原文标题：AUTOSAR Sub-TLV: Time Secured*

Refer to chapter AUTOSAR Sub-TLV: Time Secured in .

### 46. AUTOSAR Sub-TLV：Status secured
*原文标题：AUTOSAR Sub-TLV: Status secured*

Refer to chapter AUTOSAR Sub-TLV: Status secured in .

### 47. AUTOSAR Sub-TLV：UserData secured
*原文标题：AUTOSAR Sub-TLV: UserData secured*

Refer to chapter AUTOSAR Sub-TLV: UserData secured in .

### 48. Sequence Counter (sequenceId) Calculation

Refer to chapter Sequence Counter (sequenceId) Calculation in  for additional requirements.

### 49. ICV Generation

Refer to chapter ICV Generation in .

### 50. Message Assembling

Upstream requirements: ,
⌈
Refer to chapter Message Assembling in .
⌋

### 51. Dynamic port 配置 for Time Master or Time Slave
*原文标题：Dynamic port configuration for Time Master or Time Slave*

Status: DRAFT
  Upstream requirements: ,
⌈
If the parameter EthTSynPortRole is set to DYNAMIC on any port, receiving a Sync message shall turn the respective reception port automatically into a Slave port. All remaining ports which are set as DYNAMIC shall turn as Master port.
⌋

Note: Receiving Sync messages on different ports can cause inconsistencies.

  Status: DRAFT
  Upstream requirements: ,
⌈
If Sync and `Follow_Up` messages are not received on dynamically set to Slave port for HoldOverTime, then all the ports which are dynamically set to either Master or Slave shall turn back to DYNAMIC.
⌋

Note: This will stop transmission of Sync and `Follow_Up` on dynamically set to Master port and allow for a seamless change-over of the Slave port.

  Status: DRAFT
  Upstream requirements: ,
⌈
If Sync and `Follow_Up` are not received on a Slave port for HoldOverTime, then all the ports which are set to `TIME_MASTER` (dynamically or statically) shall stop transmission of Sync and `Follow_Up` messages.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 52. 系统 Wide Global Time Master
*原文标题：System Wide Global Time Master*

If the Time Base referred to by EthTSynSynchronizedTimeBaseRef of the ports in EthTSynPortRole `TIME_MASTER` is not referenced by any other `TIME_SLAVE` port of any other <Bus>TSyn module, the master is considered a System Wide Global Time Master for the top level Time Domain of the .

Refer also to section  on the difference between an AR Time Gateway and an IEEE Time-aware Bridge.

### 53. Acting as Time Slave

Refer to chapter Acting as Time Slave in  for additional requirements.

### 54. Message processing

In addition to the `Follow_Up` message fields:

* preciseOriginTimeStamp
* correctionField

(refer to  in chapter Message Processing which are received by the Time Slave on the bus from the Time Master, this chapter defines and uses the following internal variables for calculation of the Rx Time Tuple of a Synchronized Time Base:

* T1_(VLT): Ingress timestamp of SYNC message as captured by HW in the Ethernet controller or by SW in `EthTSyn_RxIndication`.
* T2: Global Time component of the Rx Time Tuple (equivalent to `TG_Rx` in the StbM).
* T2_(VLT): Virtual Local Time component of the Rx Time Tuple (equivalent to `TV_Rx` in the StbM).
* T3_(VLT): Current time read out from Ethernet controller hardware - used for correlation of StbM time and Ethernet HW clock.
* T4_(VLT): Current virtual local time in StbM - used for correlation of StbM local time and Ethernet HW clock.
* T_(SRD): SYNC reception delay as difference between T3_(VLT) and T1_(VLT).

 illustrates the flow of actions to calculate the Rx Time Tuple from the data that is received in the Sync and in the `Follow_Up` messages. The diagram helps to understand the requirements in this chapter.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 55. Runtime 错误检测
*原文标题：Runtime Error detection*

Upstream requirements:
⌈
If EthTSynMasterSlaveConflictDetection is set to TRUE and if the Time Slave receives a Sync frame with different sourcePortIdentity (i.e., different MAC addresses), it shall report a runtime error by calling `Det_ReportRuntimeError` with error code `ETHTSYN_E_TSCONFLICT` and discard the received Sync frame.
⌋

### 56. Frame Debouncing

Refer to chapter Frame Debouncing in  for additional requirements.

  Upstream requirements:
⌈
During the EthTSynGlobalTimeRxDebounceTime, if the sequence is reset, then the Time Slave shall report the security event `SEV_TSYN_ETH_MSG_SEQUENCE_ERROR` to the IdsM (refer to ).
⌋

### 57. Secure Time 同步
*原文标题：Secure Time Synchronization*

Refer to the chapter in StbM  for the configuration details of FV referenced in each Time Domain.

  Upstream requirements:
⌈
When the FV is referenced (refer EthTSynIcvVerificationFvIdRef), FVL is greater than 0 and 'ICV with FV' bit is set in `ICV_Flags` of received `Follow_Up` message, the Time Slave shall call the `StbM_GetRxFreshness` Api in order to obtain the Freshness Value by using

* the StbMFreshnessValueId from the reference EthTSynIcvVerificationFvIdRef
* the StbMTruncatedFreshnessValue as received in the FV field of the `Follow_Up` message
* the StbMTruncatedFreshnessValueLength as received in the FVL field of the `Follow_Up` message
* the StbMAuthVerifyAttempts as the number of failed verification attempt counts for the current message (ICV verification attempt counter)
* the StbMFreshnessValueLength from the reference EthTSynIcvVerificationFvIdRef
⌋

  Upstream requirements:
⌈
If `StbM_GetRxFreshness` returns E_OK, the Time Slave shall use the FV in ICV verification.
⌋

  Upstream requirements:
⌈
If

* `StbM_GetRxFreshness` returns non-recoverable error code (e.g., E_NOT_OK)
* or FVL == 0 and ICV with FV bit is set in `ICV_Flags` of received `Follow_Up` message,

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 82 章（内容从略，见纯文本全文）

58. Message Field 校验 and Disassembling
59. SGW Calculation
60. CRC 校验
61. AUTOSAR Sub-TLV：Time Secured
62. AUTOSAR Sub-TLV：Status secured
63. AUTOSAR Sub-TLV：UserData secured
64. Sequence Counter (sequenceId) 校验
65. ICV Verification
66. Message Disassembling
67. Time Gateway
68. Differences to a Time Aware Bridge
69. Time Recording
70. Time 校验
71. Recording of Pdelay Measurement
72. 安全事件
73. 错误分类
74. Development 错误
75. Runtime 错误
76. Production 错误
77. Extended Production 错误
78. API 规范
79. Imported 类型
80. 类型定义
81. EthTSyn_ConfigType
82. EthTSyn_TransmissionModeType
83. 功能定义
84. EthTSyn_Init
85. EthTSyn_SetTransmissionMode
86. EthTSyn_SetProtocolParam
87. EthTSyn_GetProtocolParam
88. EthTSyn_RxIndication
89. EthTSyn_TxConfirmation
90. EthTSyn_TrcvLinkStateChg
91. EthTSyn_IcvGenerationIndication
92. EthTSyn_IcvVerificationIndication
93. Scheduled functions
94. EthTSyn_MainFunction
95. Expected 接口
96. Mandatory 接口
97. Optional 接口
98. Callout 接口
99. Configurable 接口
100. 服务接口
101. 时序图
102. EthIf_EnableEgressTimeStamp
103. Time 同步 Sequence
104. Pdelay Measurement Sequence
105. EthTSyn Egress Timestamping
106. EthTSyn Ingress Timestamping
107. Time measurement with Switches
108. Time Aware Bridge with GTM as 管理 CPU - Tx
109. Time Aware Bridge without GTM as 管理 CPU - Tx
110. Time Aware Bridge without GTM as 管理 CPU - Rx
111. Secure Time 同步 Sequence
112. 配置规范
113. How to read this chapter
114. Containers and 配置 parameters
115. EthTSyn
116. EthTSynGeneral
117. EthTSynSecurityEventRefs
118. EthTSynGlobalTimeDomain
119. EthTSynGlobalTimeFollowUpDataIDList
120. EthTSynGlobalTimeFollowUpDataIDListElement
121. EthTSynPTPPort
122. EthTSynPTPPortDetails
123. EthTSynCMLDS
124. EthTSynPhysicalPortConfiguration
125. EthTSynVirtualPortConfiguration
126. EthTSynGlobalTimeTxIcvGeneration
127. EthTSynGlobalTimeRxIcvVerification
128. EthTSynTxPdu
129. EthTSynRxPdu
130. EthTSynPdelayConfig
131. EthTSynGlobalTimeMasterConfig
132. EthTSynCrcTimeFlagsTxSecured
133. EthTSynGlobalTimeSlaveConfig
134. EthTSynCrcFlagsRxValidated
135. Constraints
136. 配置 Constraints
137. 发布信息
138. 附录
139. 不适用需求
