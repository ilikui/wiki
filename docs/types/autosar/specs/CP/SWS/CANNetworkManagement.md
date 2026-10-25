# Specification of CAN Network Management (`CANNetworkManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 013 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CANNetworkManagement_013\AUTOSAR_CP_SWS_CANNetworkManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CANNetworkManagement_013\AUTOSAR_CP_SWS_CANNetworkManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CANNetworkManagement_013\zzgen\CP_SWS_CANNetworkManagement.complete.txt`

## 文档简介

This document describes the concept, core functionality, configurable features, interfaces and configuration issues of the AUTOSAR CAN Network Management (CanNm).

The AUTOSAR CAN Network Management is a hardware independent protocol that can only be used on CAN  (for limitations refer to ). Its main purpose is to coordinate the transition between normal operation and bus-sleep mode of the network.

In addition to the core functionality configurable features are provided e.g. to implement a service to detect all present nodes or to detect if all other nodes are ready to sleep.

For a general understanding of the AUTOSAR Network Management functionality please refer to  and .

## 模块依赖

CAN Network Management (CanNm) mainly uses services of Linklayer SDU Router (LSduR ) to address a lower layer (e.g CAN Interface: CanIf ) and provides services to the Network Management Interface (Nm ).

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document describes the concept, core functionality, configurable features, interfaces and configuration issues of the AUTOSAR CAN Network Management (CanNm).

The AUTOSAR CAN Network Management is a hardware independent protocol that can only be used on CAN  (for limitations refer to ). Its main purpose is to coordinate the transition between normal operation and bus-sleep mode of the network.

In addition to the core functionality configurable features are provided e.g. to implement a service to detect all present nodes or to detect if all other nodes are ready to sleep.

For a general understanding of the AUTOSAR Network Management functionality please refer to  and .

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the CanNm module that are not included in the .

| Acronym/abbreviation: | Description: |
|---|---|
| CanIf | Abbreviation for the CAN Interface |
| CanNm | Abbreviation for CAN Network Management |
| CBV | Control Bit Vector |
| CWU | Car Wakeup |
| ERA | External Request Array |
| EIRA | External and Internal Request Array |
| LSduR | Linklayer SDU Router |
| NM | Network Management |
| PNC | Partial Network Cluster |
| PNI | Partial Network Information |
| PNL | Partial Network Learning |
| SNI | Source Node Identifier |

| Term | Description: |
|---|---|
| PDU transmission ability is disabled | This means that the Network Management PDU transmission has been disabled by the service CanNm_DisableCommunication. |
| Repeat Message Request Bit Indication | CanNm_RxIndication finds the RptMsgRequest set in the Control Bit Vector of a received Network Management PDU. |
| Top-level PNC coordinator | An ECU acts as top-level PNC coordinator for those PNCs which are actively coordinated on all assigned channels. This ECU has the PNC gateway functionality enabled. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for CAN Network Management.

Thus, the specification SWS BSW General shall be considered as additional and required specification for CAN Network Management.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

# One channel of CanNm is associated with only one network management cluster in one network. One network management cluster can have only one channel of CanNm in one node.
# One channel of CanNm is associated with only one network within the same ECU.
# CanNm is only applicable for CAN  systems.

The  presents an AUTOSAR Network Management stack within an example ECU that contains at least one CanNm cluster.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

The CanNm module can be applied to any car domain under limitations provided above.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

CAN Network Management (CanNm) mainly uses services of Linklayer SDU Router (LSduR ) to address a lower layer (e.g CAN Interface: CanIf ) and provides services to the Network Management Interface (Nm ).

### 10. 文件结构
*原文标题：File Structure*

### 11. 代码文件结构
*原文标题：Code File Structure*

Please refer to .

### 12. 头文件结构
*原文标题：Header File Structure*

Please refer to .

  Upstream requirements: , ,
⌈
`ComStack_Types`.h shall be included.

Note: The following header files are indirectly included by `ComStack_Types`.h

* `Std_Types`.h (for AUTOSAR standard types )
* `Platform_Types`.h (for platform specific types)
⌋

  Upstream requirements:
⌈
Det.h shall be included for interfacing the Default Error Tracer.
⌋

  Upstream requirements:
⌈
`NmStack_Types`.h shall be included for common network management types.
⌋

  Upstream requirements:
⌈
`LSduR_CanNm`.h shall be included for interfacing the LSduR.
⌋

  Upstream requirements:
⌈
`PduR_CanNm`.h shall be included if COM user data support is enabled.
⌋

### 13. 协议 layer dependencies
*原文标题：Protocol layer dependencies*

The CAN Network Management is based on the protocol mentioned in .

### 14. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , and , and links to the fulfillment of these. Requirements that are not fulfilled by this document are linked to  to .

| Requirement | Description | Satisfied by |
|---|---|---|
| Nm shall provide services to coordinate shutdown of Nm-clusters independently of each other |  |  |
| It shall be possible to trigger the startup of all Nodes at any Point in Time |  |  |
| Nm shall provide a service to request to keep the bus awake and a service to cancel this request. |  |  |
| The Nm shall provide the current state of Nm |  |  |
| Nm shall inform application when Nm state changes occur. |  |  |
| The Nm interface shall signal to the application that all other ECUs are ready to sleep. |  |  |
| There shall be a deterministic time from the point where all nodes agree to go to bus sleep to the point where bus is switched off. |  |  |
| Nm shall perform communication system error handling for errors that have impact on the Nm behavior. |  |  |
| Nm shall provide a mechanism to limit its bus load. |  |  |
| The timing of Nm shall be configurable. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 功能规范
*原文标题：Functional specification*

### 16. Coordination algorithm

The AUTOSAR CanNm is based on decentralized direct network management strategy, which means that every network node performs activities self-sufficient depending on the Network Management PDUs only that are received or transmitted within the communication system.

The AUTOSAR CanNm algorithm is based on periodic Network Management PDUs, which are received by all nodes in the cluster via broadcast transmission. Reception of Network Management PDUs indicates that sending nodes want to keep the network management cluster awake. If any node is ready to go to the Bus-Sleep Mode, it stops sending Network Management PDUs, but as long as Network Management PDUs from other nodes are received, it postpones transition to the Bus-Sleep Mode. Finally, if a dedicated timer elapses because no Network Management PDUs are received anymore, every node initiates transition to the Bus-Sleep Mode.

If any node in the network management cluster requires bus-communication, it can wake-up the network management cluster from the Bus-Sleep Mode by transmitting Network Management PDUs. For more details concerning wakeup procedure itself please refer to the AUTOSAR SWS ComM .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Operational Modes

In the following chapter operational modes of the AUTOSAR CanNm algorithm are described in detail.

⌈
The AUTOSAR CanNm shall contain three operational modes visible at the module's interface:

* Network Mode
* Prepare Bus-Sleep Mode
* Bus-Sleep Mode
⌋

⌈
Changes of the AUTOSAR CanNm operational modes shall be notified to the upper layer by means of callback functions.
⌋

  Upstream requirements: ,
⌈
When `CanNm_GetState` is called CanNm shall return the current NM state and mode.
⌋

### 18. 网络模式
*原文标题：Network Mode*

⌈
The Network Mode shall consist of three internal states:

* Repeat Message State
* Normal Operation State
* Ready Sleep State
⌋

⌈
When the Network Mode is entered from Bus-Sleep, by default, the CanNm module shall enter the Repeat Message State.
⌋

⌈
When the Network Mode is entered from Prepare Bus-Sleep Mode, by default, the CanNm module shall enter the Repeat Message State.
⌋

⌈
When the Network Mode is entered, the CanNm module shall start the NM-Timeout Timer.
⌋

  Upstream requirements:
⌈
When the Network Mode is entered, CanNm shall notify the upper layer of the new current operational mode by calling the callback function `Nm_NetworkMode`.
⌋

⌈
At successful reception of a Network Management PDU (call of `CanNm_RxIndication`) in the Network Mode, the CanNm module shall restart the NM-Timeout Timer if PDU transmission ability is enabled.
⌋

  Upstream requirements:
⌈
At successful transmission of a Network Management PDU (call of `CanNm_TxConfirmation` with E_OK) in the Network Mode, the CanNm module shall restart the NM-Timeout Timer.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Repeat Message 状态
*原文标题：Repeat Message State*

For nodes that are not in passive mode (refer to ) the Repeat Message State ensures, that any transition from Bus-Sleep or Prepare Bus-Sleep to the Network Mode becomes visible to the other nodes on the network. Additionally, it ensures that any node stays active for a minimum amount of time. It can be used for detection of present nodes.

⌈
When the Repeat Message State is entered the CanNm module shall (re-)start transmission of Network Management PDUs unless passive mode is enabled and/or communication is disabled.
⌋

⌈
When the NM-Timeout Timer expires in the Repeat Message State, the CanNm module shall (re-)start the NM-Timeout Timer.
⌋

  Upstream requirements:
⌈
When the NM-Timeout Timer expires in the Repeat Message State the CanNm module shall report `CANNM_E_NETWORK_TIMEOUT` to the DET.
⌋

⌈
The network management state machine shall stay in the Repeat Message State for a configurable amount of time determined by the CanNmRepeatMessageTime (configuration parameter); after that time the CanNm module shall leave the Repeat Message State.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Normal Operation 状态
*原文标题：Normal Operation State*

The Normal Operation State ensures that any node can keep the network management cluster awake as long as the network is requested.

⌈
When the Normal Operation State is entered from Ready Sleep State, the CanNm module shall start transmission of Network Management PDUs.
⌋

Note: If passive mode is enabled or the Network Management PDU transmission ability has been disabled no NM PDUs are transmitted, therefore no action is required.

⌈
When the NM-Timeout Timer expires in the Normal Operation State, the CanNm module shall (re-)start the NM-Timeout Timer.
⌋

  Upstream requirements:
⌈
When the NM-Timeout Timer expires in the Normal Operation State the CanNm module shall report `CANNM_E_NETWORK_TIMEOUT` to the DET.
⌋

  Upstream requirements:
⌈
When the network is released and the current state is Normal Operation State, the CanNm module shall enter the Ready Sleep state (refer to ).
⌋

  Upstream requirements: ,
⌈
If CanNmNodeDetectionEnabled is set to TRUE and Repeat Message Request Bit is received in the Normal Operation State, the CanNm module shall enter the Repeat Message State.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Ready 休眠状态
*原文标题：Ready Sleep State*

The Ready Sleep State ensures that any node in the network management cluster waits with transition to the Prepare Bus-Sleep Mode as long as any other node keeps the network management cluster awake.

⌈
When the Ready Sleep State is entered from Repeat Message State or Normal Operation State, the CanNm module shall stop transmission of Network Management PDUs.
⌋

Note: If passive mode is enabled no NM PDUs are transmitted, therefore no action is required.

Note: If passive mode is disabled in some cases NM PDUs have to be transmitted in Ready Sleep State to grant a synchronized shutdown in the network, e.g. re-transmission of PN shutdown messages.

⌈
When the NM-Timeout Timer expires in the Ready Sleep State, the CanNm module shall enter the Prepare Bus-Sleep Mode.
⌋

  Upstream requirements:
⌈
When the network is requested and the current state is the Ready Sleep State, the CanNm module shall enter Normal Operation State (refer to ).
⌋

  Upstream requirements: ,
⌈
If CanNmNodeDetectionEnabled is set to TRUE and Repeat Message Request Bit is received in the Ready Sleep State, the CanNm module shall enter the Repeat Message State.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Prepare Bus-Sleep 模式
*原文标题：Prepare Bus-Sleep Mode*

The purpose of the Prepare Bus-Sleep Mode is to ensure that all nodes have time to stop their network activity before the Bus-Sleep Mode is entered. In Prepare Bus-Sleep Mode the bus activity is calmed down (i.e. queued messages are transmitted in order to make all Tx-buffers empty) and finally there is no activity on the bus in the Prepare Bus-Sleep Mode.

  Upstream requirements:
⌈
When Prepare Bus-Sleep Mode is entered, the CanNm module shall notify the upper layer by calling `Nm_PrepareBusSleepMode`.
⌋

  Upstream requirements: ,
⌈
The parameter CanNmStayInPbsEnabled shall match parameter NmStayInPbsEnabled from the `PRS_Nm_00506` specification ().
⌋

Note: `PRS_Nm_00506` implicitly contains that if CanNmStayInPbsEnabled is enabled CanNm will never be left due to a timeout, i.e. CanNm will stay in Prepare Bus-Sleep Mode until either ECU goes to Power Off or any restart reason applies.

  Upstream requirements:
⌈
At successful reception of a Network Management PDU in the Prepare Bus-Sleep Mode, the CanNm Module shall enter the Network Mode; by default the CanNm Module shall enter the Repeat Message State (refer to ).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Bus-Sleep 模式
*原文标题：Bus-Sleep Mode*

The purpose of the Bus-Sleep Mode is to reduce power consumption in the node when no messages are to be exchanged. The communication controller is switched into the sleep mode, respective wakeup mechanisms are activated and finally power consumption is reduced to the adequate level in the Bus-Sleep Mode.

If CanNmStayInPbsEnabled is disabled and a configurable amount of time determined by the CanNmTimeoutTime + CanNmWaitBusSleepTime (both configuration parameters) is identically configured for all nodes in the network management cluster, all nodes in the network management cluster that are coordinated with use of the AUTOSAR NM algorithm perform the transition into the Bus-Sleep Mode at approximately the same time.

Note: The parameters CanNmTimeoutTime and CanNmWaitBusSleepTime should have the same values within all network nodes of the network management cluster.

Depending on the specific implementation, transition into the Bus-Sleep Mode takes place exactly or approximately at the same time; time jitter for this transition depends on the following factors:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 网络 states
*原文标题：Network states*

Network states (i.e. 'requested' and 'released') are two additional states of the AUTOSAR CanNm state machine that exist in parallel to the state machine. Network states denote, whether the software components need to communicate on the bus (the network state is then 'requested'); or whether the software components don't have to communicate on the bus (the bus network state is then 'released'); note that if the network is released an ECU may still communicate because some other ECU still request the network.

  Upstream requirements: , ,
⌈
The function call `CanNm_NetworkRequest` shall request the network. I.e. the CanNm module shall change network state to 'requested'.
⌋

  Upstream requirements: , ,
⌈
The function call `CanNm_NetworkRelease` shall release the network. I.e. the CanNm module shall change network state to 'released'.
⌋

### 25. 初始化
*原文标题：Initialization*

⌈
If the initialization of the CanNm module (`CanNm_Init`) is successful, the CanNm module shall set the Network Management State to Bus-Sleep Mode.
⌋

Note: The CanNm module should be initialized after LSduR and the according lower layer (e.g. CanIf) are initialized and before any other network management service is called.

⌈
When initialized, by default, the CanNm module shall set the network state to 'released'
⌋

⌈
When initialized, by default, the CanNm module shall enter the Bus-Sleep Mode.
⌋

⌈
The function `CanNm_Init` shall select the active configuration set by means of a configuration pointer parameter being passed (see `CanNm_Init`).
⌋

⌈
If CanNmGlobalPnSupport is set to TRUE and CanNm is initialized (call of `CanNm_Init`) then CanNm shall stop the NM Message Tx Timeout Timer.
⌋

⌈
During initialization the CanNm module shall deactivate the bus load reduction.
⌋

⌈
After initialization the CanNm module shall stop the transmission of Network Management PDUs by stopping the Message Cycle Timer.
⌋

Note: If CanNmPassiveModeEnabled is set to TRUE the CanNm Message Cycle is not needed, because no Network Management PDUs are transmitted by such nodes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Execution

### 27. Processor 架构
*原文标题：Processor architecture*

⌈
The AUTOSAR CanNm algorithm shall be processor independent, which means; it shall not rely on any processor specific hardware support and thus shall be realizable on any processor architecture that is in the scope of AUTOSAR.
⌋

### 28. 时序 parameters
*原文标题：Timing parameters*

⌈
The configuration parameter CanNmTimeoutTime shall determine the AUTOSAR CanNm timing parameter NM-Timeout Time.
⌋

⌈
The configuration parameter CanNmRepeatMessageTime shall determine the AUTOSAR CanNm timing parameter Repeat Message Time.
⌋

⌈
The configuration parameter CanNmWaitBusSleepTime shall determine the AUTOSAR CanNm timing parameter Wait Bus-Sleep Time.
⌋

⌈
The configuration parameter CanNmRemoteSleepIndTime shall determine the AUTOSAR CanNm timing parameter Remote Sleep Indication Time.
⌋

### 29. 网络管理 PDU 结构
*原文标题：Network Management PDU Structure*

The figure below shows the format of the Network Management PDU for an example with 8 bytes where Source Node Identifier (SNI) is located in the first byte and the Control Bit Vector (CBV) at the second byte, user data is used and partial network is enabled. User data range is located between the system bytes and the PNC Request Bit Vector:

| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |  |
|---|---|---|---|---|---|---|---|---|
| Byte 7 | PNC Request Bit Vector - byte 3 | < | < | < | < | < | < | < |
| Byte 6 | PNC Request Bit Vector - byte 2 | < | < | < | < | < | < | < |
| Byte 5 | PNC Request Bit Vector - byte 1 | < | < | < | < | < | < | < |
| Byte 4 | PNC Request Bit Vector - byte 0 | < | < | < | < | < | < | < |
| Byte 3 | User data 1 | < | < | < | < | < | < | < |
| Byte 2 | User data 0 | < | < | < | < | < | < | < |
| Byte 1 | Control Bit Vector (CBV) | < | < | < | < | < | < | < |
| Byte 0 | Source Node Identifier (SNI) | < | < | < | < | < | < | < |

  Upstream requirements: ,
⌈
The location of the Source Node Identifier shall be configurable by means of CanNmPduNidPosition to Byte 0, Byte 1, or off.
⌋

Note: Setting the CanNmPduNidPosition to off means that in the NM PDU no space is occupied by the Source Node Identifier.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Communication 调度
*原文标题：Communication Scheduling*

### 31. Transmission

The Network Management PDUs transmission ability is configurable by means of CanNmPassiveModeEnabled (refer also to ). The transmission mechanisms described in this chapter are only relevant if CanNmPassiveModeEnabled is FALSE.

Also the Network Management PDU transmission ability can be enabled and disabled by communication control service (refer to ). The transmission mechanisms described in this chapter are only relevant if the Network Management PDU transmission ability is enabled.

The CanNm module provides a periodic transmission mode, see `PRS_Nm_00237`. In this transmission mode the CanNm module sends Network Management PDUs periodically.

⌈
The CanNm module shall optionally provide the periodic transmission mode with bus load reduction. In this transmission mode the CanNm module shall transmit Network Management PDUs due to a specific algorithm.
⌋

The periodic transmission mode is used in "Repeat Message State" and "Normal Operation State". Periodic transmission mode with bus load reduction is only available in "Normal Operation State"

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Reception

If a NM PDU has been successfully received, the lower layer (e.g. CanIf) will inform CanNm via the function call `CanNm_RxIndication`.

  Upstream requirements:
⌈
On the call of the callback function `CanNm_RxIndication`, the CanNm module shall copy the data of the Network Management PDU referenced in the function parameter to an internal buffer.
⌋

### 33. Bus Load Reduction Mechanism

The transmission period of Network Management PDUs is usually determined by the timing parameter CanNmMsgCycleTime. This parameter has to be equal for all NM nodes which belong to a network management cluster. Without any action this would lead to a bus load which depends on the amount of members of the network management cluster. Even if bursts are prevented through a node specific timing parameter called CanNmMsgCycleOffset a mechanism is necessary which reduces the bus load independently of the size of the network management cluster.

In order to achieve that the following two aspects have to be considered:

# If a Network Management PDU is received the CanNm Message Cycle Timer is reloaded with the node specific timing parameter CanNmMsgReducedTime.

  The node specific time CanNmMsgReducedTime should be greater than 0.5 * CanNmMsgCycleTime and less than CanNmMsgCycleTime.
# If a Network Management PDU is been transmitted the CanNm Message Cycle Timer is reloaded with the network management cluster specific timing parameter CanNmMsgCycleTime.

This leads to the following behavior:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Additional features

### 35. Remote 休眠 Indication的检测
*原文标题：Detection of Remote Sleep Indication*

The "Remote Sleep Indication" denotes a situation, where a node in Normal Operations States finds all other nodes in the cluster are ready to sleep (in Ready-Seep State). The node in Normal Operation State will still keep the bus awake.

⌈
Detection of remote sleep indication shall be statically configurable with use of the CanNmRemoteSleepIndEnabled switch (configuration parameter).
⌋

  Upstream requirements:
⌈
If the CanNm module receives no Network Management PDUs in the Normal Operation State for a configurable amount of time determined by CanNmRemoteSleepIndTime (configuration parameter), the CanNm module shall call the callback function `Nm_RemoteSleepIndication`.
⌋

With a call of `Nm_RemoteSleepIndication` CanNm notifies the module Nm that all nodes in the cluster are ready to sleep (the so-called 'Remote Sleep Indication').

  Upstream requirements:
⌈
If Remote Sleep Indication has been previously detected and if a Network Management PDU is received in the Normal Operation State or Ready Sleep State again, the module CanNm shall call the callback function `Nm_RemoteSleepCancellation`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. User 数据
*原文标题：User Data*

NM user data in CanNm can be accessed for transmission in two ways: Either by writing data within the API `CanNm_SetUserData` (CanNmUserDataEnabled needs to be TRUE) or by writing according Com signals (CanNmComUserDataSupport needs to be TRUE). In second case the first option is not available.

Reading NM user data from received CanNm messages is only possible with the APIs `CanNm_GetUserData` or `CanNm_GetPduData` (CanNmUserDataEnabled needs to be TRUE).

  Upstream requirements: ,
⌈
When `CanNm_SetUserData` is called the CanNm module shall set the Network Management user data for the Network Management PDUs transmitted next on the bus.
⌋

  Upstream requirements: ,
⌈
When `CanNm_GetUserData` is called CanNm module shall return the Network Management user data of the most recently received Network Management PDU.
⌋

Note: If user data is configured it will be sent for sure in Repeat Message State. In Normal Operation State it depends on the configuration of busload reduction whether user data is sent. In Ready Sleep State user data will not be sent.

### 37. COM User 数据
*原文标题：COM User Data*

Alternatively to the usage of the CanNm APIs to set and get user data, CanNm may use the COM to retrieve its user data.

⌈
If CanNmComUserDataSupport is enabled the API `CanNm_SetUserData` shall not be available.
⌋

  Upstream requirements:
⌈
If CanNmComUserDataSupport is enabled and NM-PDU is not configured for triggered transmission in the lower layer (e.g. CanIf: CanIfTxPduTriggerTransmit set to FALSE) CanNm shall collect the NM User Data from the referenced NM I-PDU by calling `PduR_CanNmTriggerTransmit` and combine the user data with the further NM system bytes each time before it requests the transmission of the corresponding NM PDU.
⌋

Note: In case of triggered transmission no data is needed at the transmission request, just the length is needed. The data will be collected within `CanNm_TriggerTransmit`.

⌈
If CanNmComUserDataSupport is enabled and `PduR_CanNmTriggerTransmit` returns E_NOT_OK, the NM shall use the last transmitted value for NmUserData.
⌋

Note: The transmission of outdated NM data can be avoided by not stopping the IPdu in COM used for NmUserData transmission.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Passive 模式
*原文标题：Passive Mode*

In the Passive Mode the node is only receiving Network Management PDUs but not transmitting any Network Management PDUs.

  Upstream requirements:
⌈
Passive Mode shall be statically configurable with use of the CanNmPassiveModeEnabled switch (configuration parameter).
⌋

Note: Passive Mode has to be either enabled or disabled for all NM networks within one ECU.

### 39. 网络管理 PDU Rx Indication
*原文标题：Network Management PDU Rx Indication*

⌈
On the call of the callback function `CanNm_RxIndication`, the CanNm module shall call the Nm callback function `Nm_PduRxIndication`, if and only if CanNmPduRxIndicationEnabled (configuration parameter) is set to TRUE.
⌋

### 40. 状态 change 通知
*原文标题：State change notification*

Upstream requirements:
⌈
All changes of the AUTOSAR CanNm states shall be notified to the upper layer by calling `Nm_StateChangeNotification` if the callback `Nm_StateChangeNotification` is enabled (configuration parameter CanNmStateChangeIndEnabled is TRUE).
⌋

### 41. Communication 控制
*原文标题：Communication Control*

Note: Communication Control is statically configurable by the configuration parameter CanNmComControlEnabled.

  Upstream requirements:
⌈
If the service `CanNm_DisableCommunication` is called the CanNm module shall disable the Network Management PDU transmission ability.
⌋

Note: This behavior shall also be applied in Repeat Message State. Communication Control feature does not influence the duration of the Repeat Message State.

  Upstream requirements:
⌈
When the Network Management PDU transmission ability is disabled, the CanNm module shall stop the CanNm Message Cycle Timer in order to stop the transmission of Network Management PDUs.
⌋

⌈
When the Network Management PDU transmission ability is disabled, the CanNm module shall stop the NM-Timeout Timer.
⌋

⌈
When the Network Management PDU transmission ability is disabled, the CanNm module shall stop the Remote Sleep Indication Detection.
⌋

  Upstream requirements:
⌈
When the Network Management PDU transmission ability is enabled, the transmission of NM PDUs shall be started latest within the next NM main function.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Coordinator 同步支持
*原文标题：Coordinator Synchronization Support*

When having more than one coordinator connected to the same bus a special bit in the CBV, the NmCoordinatorSleepReady bit is used to indicate that the main coordinator requests to start shutdown sequence. The main functionality of the algorithm is described in the Nm module.

⌈
If CanNmCoordinatorSyncSupport is set to TRUE and CanNm has entered Network Mode or called `Nm_CoordReadyToSleepCancellation` before it shall notify the Nm by calling `Nm_CoordReadyToSleepIndication` on the first reception of a NM PDU with the NmCoordinatorSleepReady bit (see CBV) set to 1.
⌋

⌈
If CanNmCoordinatorSyncSupport is set to TRUE and CanNm called `Nm_CoordReadyToSleepIndication` and is still in Network Mode it shall notify the Nm by calling `Nm_CoordReadyToSleepCancellation` on the first reception of a NM PDU with the NmCoordinatorSleepReady bit (see CBV) set to 0.
⌋

⌈
If CanNmCoordinatorSyncSupport is set to TRUE and the API `CanNm_SetSleepReadyBit` is called CanNm shall set the "NM Coordinator Sleep ready Bit" to the passed value and trigger a single Network Management PDU.
⌋

### 其余 93 章（内容从略，见纯文本全文）

43. Car 唤醒
44. Rx Path
45. Tx Path
46. Partial Networking
47. Rx 处理 of NM PDUs
48. Tx 处理 of NM PDUs
49. Internal Requested Partial 网络 Clusters的处理
50. Spontaneous Transmission of NM PDUs via CanNm_NetworkRequest
51. Transmission 错误处理
52. 功能性需求 on CanNm API
53. 错误分类
54. Development 错误
55. Runtime 错误
56. Transient Faults
57. Production 错误
58. Extended Production 错误
59. the main 功能的调度
60. Application notes
61. 唤醒通知
62. Coordination of coupled networks
63. Summary of CanNm 时序需求
64. UML 状态 chart diagram
65. API 规范
66. Imported 类型
67. 类型定义
68. CanNm_ConfigType
69. 功能定义
70. CanNm_Init
71. CanNm_DeInit
72. CanNm_PassiveStartUp
73. CanNm_NetworkRequest
74. CanNm_NetworkRelease
75. CanNm_DisableCommunication
76. CanNm_EnableCommunication
77. CanNm_SetUserData
78. CanNm_GetUserData
79. CanNm_Transmit
80. CanNm_GetNodeIdentifier
81. CanNm_GetLocalNodeIdentifier
82. CanNm_RepeatMessageRequest
83. CanNm_GetPduData
84. CanNm_GetState
85. CanNm_RequestBusSynchronization
86. CanNm_CheckRemoteSleepIndication
87. CanNm_SetSleepReadyBit
88. CanNm_PnLearningRequest
89. CanNm_ActivateTxPnShutdownMsg
90. CanNm_DeactivateTxPnShutdownMsg
91. Callback 通知
92. CanNm_TxConfirmation
93. CanNm_RxIndication
94. CanNm_ConfirmPnAvailability
95. CanNm_TriggerTransmit
96. Scheduled functions
97. CanNm_MainFunction
98. Expected 接口
99. Mandatory 接口
100. Optional 接口
101. Configurable 接口
102. Job End 通知
103. 服务接口
104. 时序图
105. CanNm Transmission
106. CanNm Reception
107. Nm Coordination
108. 配置规范
109. How to read this chapter
110. Containers and 配置 parameters
111. CanNm
112. CanNmGlobalConfig
113. CanNmChannelConfig
114. CanNmRxPdu
115. CanNmTxPdu
116. CanNmUserDataTxPdu
117. 发布信息
118. 附录
119. 示例
120. periodic transmission 模式 with bus load reduction的示例
121. 示例时序行为 for 网络管理 PDUs
122. Change history of AUTOSAR traceable items
123. Traceable item history of this document according to AUTOSAR Release R26-11
124. Added 规范 Items in R26-11
125. Changed 规范 Items in R26-11
126. Deleted 规范 Items in R26-11
127. Traceable item history of this document according to AUTOSAR Release R25-11
128. Added 规范 Items in R25-11
129. Changed 规范 Items in R25-11
130. Deleted 规范 Items in R25-11
131. Traceable item history of this document according to AUTOSAR Release R24-11
132. Added 规范 Items in R24-11
133. Changed 规范 Items in R24-11
134. Deleted 规范 Items in R24-11
135. 不适用需求
