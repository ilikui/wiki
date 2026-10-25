# Specification of FlexRay Network Management (`FlexRayNetworkManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 028 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayNetworkManagement_028\AUTOSAR_CP_SWS_FlexRayNetworkManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayNetworkManagement_028\AUTOSAR_CP_SWS_FlexRayNetworkManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayNetworkManagement_028\zzgen\CP_SWS_FlexRayNetworkManagement.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module FlexRay Network Management (FrNm).

The AUTOSAR FlexRay Network Management is a hardware independent protocol that can only be used on FlexRay (for limitations see ). Its main purpose is to coordinate the transition between normal operation and bus-sleep mode of the network.

In addition to the core functionality optional features are provided e.g. to implement a service to detect all present nodes or to detect if all other nodes are ready to sleep.

## 模块依赖

FlexRay NM provides services to the Generic Network Management Interface (NmIf) and uses services of FlexRay Interface

Note: In addition to the modules depicted in Figure , FlexRay Nm uses some additional modules (like the DET).

The FlexRay NM uses OS objects and/or related OS services according to .

  Upstream requirements:
⌈
| Module: | Dependencies: |
|---|---|
| Nm | FlexRay NM provides services to the Generic Network Management Interface (NmIf) |
| PduR | FlexRay NM uses services of the PDU Router |
| LSduR | FlexRay NM uses services of the L-SDU Router. |
| FrIf | FlexRay NM uses services of the FlexRay Interface. |
| Det | The FlexRay Network Management informs the Default Error Tracer on development errors |
| EcuM | EcuM gets wake up event information from FlexRay Network Management if supported by hardware. |
| RTE | The FlexRay Network Management main function may be scheduled by the by the RTE. |

⌋

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module FlexRay Network Management (FrNm).

The AUTOSAR FlexRay Network Management is a hardware independent protocol that can only be used on FlexRay (for limitations see ). Its main purpose is to coordinate the transition between normal operation and bus-sleep mode of the network.

In addition to the core functionality optional features are provided e.g. to implement a service to detect all present nodes or to detect if all other nodes are ready to sleep.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the FrNm module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| CC | Communication Controller |
| NM | Network Management |
| WCET | Worst Case Execution Time |
| DET | Default Error Tracer. AUTOSAR Module for detection and reporting of errors during development. |
| SRS | Software requirements specification |
| SWS | Software working specification |
| API | Application program interface |
| Com | Communication module |
| OS | Operating system |
| SchM | Schedule Manager |
| PDU | Protocol data unit |
| CPU | Central processing unit |
| PNL | Partial Network Learning |
| FrIf | Abbreviation for the FlexRay Interface |
| FrNm | Abbreviation for the Network Management on FlexRay |
| NmIf | Abbreviation for the generic Network Management |
| ECU | Electronic control unit |
| ComM | Communication manager |
| FrSm | FlexRay State Manager |
| HW | Hardware |
| LSduR | Module that transfers L-SDUs from one module to another module. The L-SDU Router module can be utilized for internal routing purposes. |

| Term: | Definition: |
|---|---|
| Bus-Sleep Mode | Network mode where all interconnected communication controllers are in the sleep mode. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for FlexRay Network Management.

Thus, the specification SWS BSW General shall be considered as additional and required specification for FlexRay Network Management.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

# FlexRay NM can be applied to FlexRay communication systems that support bus sleep mode and that are implemented with appropriate wakeup mechanisms.
# One instance of FlexRay NM can be applied to only one instance of FlexRay Interface within the same ECU.
# One instance of FlexRay NM can be applied to only one FlexRay NM-Cluster in one FlexRay network. One FlexRay NM-Cluster can have only one instance of FlexRay NM.
# FlexRay NM can be applied to both FlexRay channels of the same FlexRay Bus at the same time.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

AUTOSAR NM can be applied to any car domain, wherever FlexRay technology is used, under limitations provided above.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

FlexRay NM provides services to the Generic Network Management Interface (NmIf) and uses services of FlexRay Interface

Note: In addition to the modules depicted in Figure , FlexRay Nm uses some additional modules (like the DET).

The FlexRay NM uses OS objects and/or related OS services according to .

  Upstream requirements:
⌈
| Module: | Dependencies: |
|---|---|
| Nm | FlexRay NM provides services to the Generic Network Management Interface (NmIf) |
| PduR | FlexRay NM uses services of the PDU Router |
| LSduR | FlexRay NM uses services of the L-SDU Router. |
| FrIf | FlexRay NM uses services of the FlexRay Interface. |
| Det | The FlexRay Network Management informs the Default Error Tracer on development errors |
| EcuM | EcuM gets wake up event information from FlexRay Network Management if supported by hardware. |
| RTE | The FlexRay Network Management main function may be scheduled by the by the RTE. |

⌋

### 10. 文件结构
*原文标题：File structure*

### 11. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 12. 协议 layer dependencies
*原文标题：Protocol layer dependencies*

The FlexRay Network Management is based on the protocol mentioned in .

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Nm shall provide services to coordinate shutdown of Nm-clusters independently of each other |  |  |
| It shall be possible to trigger the startup of all Nodes at any Point in Time |  |  |
| Nm shall put the communication controller into sleep mode if there is no bus communication |  |  |
| The Nm shall provide the current state of Nm |  |  |
| Nm shall inform application when Nm state changes occur. |  |  |
| The Nm interface shall signal to the application that all other ECUs are ready to sleep. |  |  |
| There shall be a deterministic time from the point where all nodes agree to go to bus sleep to the point where bus is switched off. |  |  |
| Nm shall perform communication system error handling for errors that have impact on the Nm behavior. |  |  |
| Nm shall support communication clusters of up to 64 ECUs |  |  |
| The timing of Nm shall be configurable. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

### 15. Coordination algorithm

The AUTOSAR FlexRay NM is based on a decentralized direct network management strategy, which means that every network node individually performs self-sufficient NM activities based only on the NM-messages that are received or transmitted within the communication system.

The AUTOSAR FlexRay NM coordination algorithm is based on periodic NM-Vote messages received by all nodes in the cluster. Reception of an NM-Vote message indicates that the sending node wants to keep the NM-cluster awake. If any node is ready to enter the Bus-Sleep Mode, it stops sending NM-messages, but as long as NM-messages from other nodes are received, it postpones transition into the Bus-Sleep Mode. Ultimately, if a designated timer elapses as a result of prolonged absence of NM-messages, then the node initiates transition into the Bus-Sleep Mode.

If any node in the NM-cluster requires bus-communication, then it can "wake-up" the NM-cluster from the Bus-Sleep Mode by transmitting NM-Vote messages. For additional details concerning the wakeup procedure, please refer to the Mode Management (see , ).

FlexRay Network Management is responsible for the following functionalities:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Operational modes

In this chapter, the operational modes of the AUTOSAR FlexRay NM coordination algorithm are described in detail. Figure  shows the detailed UML state chart of the FlexRay NM.

⌈
The AUTOSAR FrNm shall consist of three operational modes:

* Bus-Sleep Mode
* Synchronize Mode
* Network Mode
⌋

  Upstream requirements:
⌈
Changes in the AUTOSAR FrNm operational modes and states shall be notified by the FrNm module to the Generic NM Interface module by calling callback function `Nm_StateChangeNotification`.
⌋

### 17. Bus-Sleep 模式
*原文标题：Bus-Sleep Mode*

The Bus Sleep Mode is the default mode after the initialization of the FrNm State Machine, where it remains unless the NM is started (either with a passive startup request or with a network request) or when the power of the CPU is switched off.

In the Bus Sleep Mode, the communication controller can be switched into the sleep mode where wakeup detection mechanisms are activated and power consumption is reduced to a minimal level. The corresponding functionality (shut down of FlexRay, power down of the CPU) will be implemented in other modules. The FlexRay NM will only indicate the readiness of Sleep Mode.

⌈
When Bus-Sleep Mode is entered, the FlexRay NM shall notify the Generic Network Management Interface by calling `Nm_StateChangeNotification`, except when the Bus-Sleep Mode is entered by default during initialization.
⌋

Note: The FlexRay NM will notify the ComM via the Generic NM Interface (macro adaptation layer). This notification is an optional interface.

⌈
When Bus-Sleep Mode is entered, except by default at initialization, the FrNm module shall notify the upper layer by calling the call-back function `Nm_BusSleepMode`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Synchronize 模式
*原文标题：Synchronize Mode*

In the Synchronize Mode, the FrNm state machine waits to be synchronized to the FrNm Repetition Cycle. This is necessary as the FlexRay NM is dependent on state changes being synchronized across the NM Cluster.

⌈
The FrNm module shall leave the Synchronize Mode and enter the Network Mode at the first boundary between two NM Repetition Cycles.
⌋

⌈
When the FrNm module enters the Synchronize mode, it shall deactivate the transmission of NM-Data and deactivate the transmission of the NM-Vote.
⌋

⌈
If FlexRay NM is in Synchronize state and FlexRay NM receives the indication `FrNm_StartupError` and if the network is requested, then FlexRay NM shall remain in Synchronize state.
⌋

⌈
If FlexRay NM is in Synchronize state and FlexRay NM receives the indication `FrNm_StartupError` and if the network is released, then FlexRay NM shall perform a transition to Bus Sleep State.
⌋

⌈
When the FrNm module has entered Synchronize Mode, it shall notify the Generic NM Interface module by calling `Nm_SynchronizeMode`.
⌋

### 19. 网络模式
*原文标题：Network Mode*

⌈
The Network Mode of the FrNm module shall consist of three internal states:

* Repeat Message State
* Normal Operation State
* Ready Sleep State
⌋

⌈
The FrNm module shall synchronize all state changes into and within the Network Mode with the boundary between two NM Repetition Cycles.
⌋

Rationale: The FlexRay NM defines a number of FlexRay cycles as NM Repetition Cycle to improve the reliability of the NM vote transmission. Within a NM Repetition Cycle, the NM is not allowed to change the NM-vote. For details see chapter .

⌈
On entering the Network Mode state, the FlexRay Network Management shall first enter the internal sub-state Repeat message state.
⌋

⌈
When the FrNm module has entered the Network Mode, it shall notify the Generic NM Interface module by calling `Nm_NetworkMode`.
⌋

⌈
The FrNm module shall immediately leave the Network mode when the function `FrNm_Init` is called.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Repeat Message 状态
*原文标题：Repeat Message State*

For nodes that are not configured as passive, the Repeat Message State ensures that any transition from the Bus-Sleep to the Network Mode becomes visible to the other nodes on the network. Additionally, it ensures that any node stays active for a minimum amount of time. Optionally it can be used for detection of present nodes (see explanation in chapter ).

⌈
When the FrNm module enters the Repeat Message State, it shall activate the transmission of NM-Data if the node is configured for NM-Data transmissions and the node shall vote to keep the cluster awake if the node is configured to allow voting.
⌋

⌈
When the FrNm module enters the Repeat Message State, it shall start the NM Repeat Message Timer (time is configurable by parameter FrNmRepeatMessageTime).
⌋

⌈
The FrNm module shall leave the Repeat Message State if the NM Repeat Message Timer is expired. During this transition it shall clear the Repeat Message Request Bit.
⌋

Note: This transition takes place at a repetition cycle boundary as FrNmRepeatMessageTime is an integer multiple of one repetition cycle.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Normal Operation 状态
*原文标题：Normal Operation State*

The Normal Operation State ensures that any node can keep the NM-cluster awake as long as the network is requested.

Note: This State will not be reached if the node is configured as "passive node" . For such a node, it is up to the implementation to optimize this state and remove the code corresponding to this state.

⌈
When the FrNm module enters the Normal Operation State, it shall activate the transmission of NM-Data and the Node shall vote to keep the cluster awake (send "positive" NM-Votes).
⌋

⌈
If FrNmNodeDetectionEnabled is set to TRUE the FlexRay NM module shall leave the Normal Operation State and enter the Repeat Message State at the end of a NM Repetition Cycle when a Repeat Message Request is active. During this transition it shall set the Repeat Message Request Bit if the Repeat Message Request is active due to a call of `FrNm_RepeatMessageRequest`.
⌋

⌈
The FlexRay NM module shall leave the Normal Operation State and enter the Ready Sleep State if no Repeat Message Request is active and the network has been released and if a Repetition Cycle is completed.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Ready 休眠状态
*原文标题：Ready Sleep State*

The Ready Sleep State ensures that any node in the NM-cluster waits to transition to the Bus-Sleep Mode as long as any other node keeps the NM-cluster awake.

⌈
When the FrNm module enters the Ready Sleep State, it shall deactivate the transmission of NM-Data and shall transmit negative NM-Votes.
⌋

Note: If passive mode is disabled, in some cases NM PDUs have to be transmitted in Ready Sleep State to grant a synchronized shutdown in the network, e.g. re-transmission of PN shutdown messages

⌈
The FlexRay NM module shall leave the Ready Sleep State (and the Network Mode) and enter the Bus-Sleep Mode at the end of the FrNmReadySleepCnt +1 NM Repetition Cycle without any positive NM-Votes.
⌋

⌈
If FrNmNodeDetectionEnabled is set to TRUE the FlexRay NM module shall leave the Ready Sleep State and enter the Repeat Message State at the end of a NM Repetition Cycle when a Repeat Message Request is active and Ready Sleep Time has not expired. During this transition it shall set the Repeat Message Request Bit if the Repeat Message Request is active due to a call of `FrNm_RepeatMessageRequest`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 网络 states
*原文标题：Network states*

Network states (i.e., 'requested' and 'released') are two additional "states of the AUTOSAR FlexRay NM state machine" that exist in parallel to the state machine described in chapter .

Network states distinguish between whether the software components need to communicate on the bus (the network state is then 'requested') or not (the network state is then 'released'). Note that if the network is released an ECU may still communicate because at least one other ECU still requests the network.

This network states reflect the demand of an upper layer (e.g., ComM) on keeping the bus awake (network requested) or not (network released).

### 24. UML 状态 Chart Diagram
*原文标题：UML State Chart Diagram*

The figure shows an UML state diagram with respect to the API specification.

### 25. 初始化 and 启动
*原文标题：Initialization and Startup*

Upstream requirements:
⌈
The FrNm module shall store the initialization status in a private variable.
⌋

Note: The FrNm module's environment shall initialize the FrNm module after the corresponding FlexRay Interface is initialized and before any other FlexRay NM service is called.

⌈
FlexRay NM shall set the flag `FrNm_NetworkRequest` to FALSE after initialization and enter into bus sleep mode.
⌋

  Upstream requirements:
⌈
During initialization the FrNm module shall set each byte of the user data to 0xFF.
⌋

  Upstream requirements:
⌈
During initialization the FrNm module shall set the Control Bit Vector to 0x00.
⌋

  Upstream requirements:
⌈
During initialization and if FrNmPnEnabled is TRUE, the FrNm module shall set each byte of the PNC Request Bit Vector to 0x00.
⌋

Note: FrNm do not support re-transmission of PN shutdown messages (as it is supported e.g. on CanNm), since NM messages on FlexRay are transmitted with a short period. At initialization, the control bit vector is set to 0x00, which includes the PNSR bit (PNSR bit set to '0' == transmission of PN shutdown message deactivated).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Communication

Using NM-Messages, FlexRay NM provides mechanisms for information exchange to coordinate shutdown. These messages are sent according to the schedule configured within each ECU and coordinated across the NM Cluster.

### 27. 通用需求
*原文标题：General requirements*

The FrIf shall be configured for every node to receive all NM vote messages that are not aggregated by the FlexRay controller.

Note: FlexRay supports an automatic aggregation of Network Management data called Network Management Vector (see chapter 9.3.3.4 Network management service, page 209, of the FlexRay protocol specification ).

The FlexRay Controller calculates this NM-Vector by exchanging the NM-Vector in selected network management enabled frames within the static segment of the communication cycle. Every node may be configured to send one NM-Vector in one of its transmission slots.

The FlexRay communication controller will maintain an aggregated network management vector throughout each communication cycle by applying a bit-wise OR between each received Network Management Vectors (regardless of whether the frame is subscribed to a receive buffer).

This method is a powerful way to receive the NM-Vector from nodes on the network without involving the CPU, but requires at least one send-slot for every node (participating in the Network Management) in the static segment.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. FlexRay NM-PDU format

As specified in  the FlexRay NM is capable of sending NM-Vote and NM-Data independently. Therefore several corresponding PDU formats exist for the NM-Vote and for the NM-Data. To also support an associated transmission of NM-Vote and NM-Data in the static segment the NM-Data PDU contains an optional Voting Bit.

### 29. FlexRay NM-Data PDU format

The figure below shows the format of the Network Management PDU for example with 8 byte PDU length where the control bit vector is locacted at the first byte, the source node identifier is located in the second byte, user data is used and partial networt is enabled. The user data range is located between the system bytes and the PNC Request Bit Vector.

| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |  |
|---|---|---|---|---|---|---|---|---|
| Byte 7 | PNC Request Bit Vector - byte 3 | < | < | < | < | < | < | < |
| Byte 6 | PNC Request Bit Vector - byte 2 | < | < | < | < | < | < | < |
| Byte 5 | PNC Request Bit Vector - byte 1 | < | < | < | < | < | < | < |
| Byte 4 | PNC Request Bit Vector - byte 0 | < | < | < | < | < | < | < |
| Byte 3 | User data 1 | < | < | < | < | < | < | < |
| Byte 2 | User data 0 | < | < | < | < | < | < | < |
| Byte 1 | Source Node Identifier | < | < | < | < | < | < | < |
| Byte 0 | Set to "0" | Control Bit Vector | < | < | < | < | < | < |

Note:

* In FrNm the control bit vector is mandatory and therefore not configurable.
* The NM-PDU length is defined by the PduLength parameter  in the "global" ECUC module (see Ecu Configuration specification).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. FlexRay NM-Vote PDU format

The NM-Vote PDU format of the FrNm module is decribed in .

 NM-Vote PDU Format
⌈
| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |  |
|---|---|---|---|---|---|---|---|---|
| Byte 0 | Vote | Set to "0" | < | < | < | < | < | < |

⌋

⌈
The NM-Vote PDU format of the FrNm module shall contain a Voting Bit (Vote) with the following meaning:

* 0: vote against keeping awake
* 1: vote for keeping awake
⌋

Note: In case of transmitting the NM-Vote (combined or separately) in the dynamic segment the vote bit is not needed as the presence of the NM PDU at all is sufficient. Therefore within the dynamic segment it is not necessary to set the vote bit.

### 31. Combination of NM-PDUs

When the NM-Vote and NM-Data are combined within one PDU (see chapter ) the content of the NM-Vote will be combined with the content of the Control Bit Vector (CBV) Byte of the NM-Data as shown in Table  below. The following requirements specify this combination.

| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |  |
|---|---|---|---|---|---|---|---|---|
| NM-Data PDU - CBV | Set to "0" | Partial Network Information Bit | Partial Network Learning Bit | Active Wakeup Bit | NM Coordinator Sleep Ready | Res | Res | RptMsgRequest |
| + | < | < | < | < | < | < | < | < |
| NM-Vote PDU | Vote | Set to "0" | < | < | < | < | < | < |
| = | < | < | < | < | < | < | < | < |
| Combined CBV and Vote | Vote | Partial Network Information Bit | Partial Network Learning Bit | Active Wakeup Bit | NM Coordinator Sleep Ready | Res | Res | RptMsgRequest |

⌈
The FrNm module shall combine the NM-Vote PDU Format with the Control Bit Vector Format of the NM-Data PDU in case the FrNm module shall transmit the NM-Vote in the same PDU as the NM-Data.
⌋

### 32. FlexRay NM-PDU transmission

For the FlexRay NM-PDU transmission both decoupled or immediate buffer access can be used. For more details see FlexRay Interface SWS .

### 33. FlexRay NM-PDU reception

The FlexRay Reception Indication is used to indicate reception of FlexRay NM-PDU receptions. For more details see FlexRay Interface SWS .

### 34. 功能性需求 on FrNm API
*原文标题：Functional requirements on FrNm API*

The following requirements define the available FlexRay NM functions.

  Upstream requirements:
⌈
The set of the Source Node Identifier shall be configurable using the configuration parameter FrNmNodeId.
⌋

  Upstream requirements:
⌈
If FrNmRepeatMsgIndEnabled is set to TRUE and the Repeat Message Request bit set to 1 is received FrNm module shall call the callout function `Nm_RepeatMessageIndication` only the first time until Repeat Message State has been left again. In case the Partial Network Learning Bit is also received with value 1 and FrNmDynamicPncToChannelMappingEnabled is set to TRUE the parameter pnLearningBitSet shall be set to TRUE in this function call, otherwise to FALSE.
⌋

Note: When Repeat Message Bit is received NM will enter or restart Repeat Message State, but the bits will still be received as requestor will send until he leaves Repeat Message State to be fault-tolerant regarding possible loss of messages. State Change and callout are only needed once the first time the node received it.

### 35. Execution

The FlexRay NM State machine and hence the invocation of the FlexRay NM MainFunction has to be synchronized with the FlexRay communication schedule (). FlexRay NM decisions and state changes have to be aligned to the FlexRay communication cycle. To guarantee synchronized state changes and decisions of the FrNm, the FlexRay NM MainFunction (`FrNm_MainFunction_`<FrNmChannel.ShortName>) has to be executed within a specific time window as shown in Figure . The borders of this window are defined on one side by the availability of all NM-Votes (and availability of the repeat message bit if node detection is enabled) of the actual cycle and on the other side by the last point in time where the own NM-Vote (of the next cycle) has to be sent.

As the relative time for a FlexRay cycle may vary due to the FlexRay clock rate correction, and the FlexRay NM algorithm is dependent on the synchronisation to the FlexRay network, it is not recommended to use a CPU time service. Instead this can (for example) be achieved by using an AUTOSAR OS Schedule Table which is synchronized to the global (FlexRay) time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. FlexRay NM-Main 功能结构
*原文标题：FlexRay NM-Main Function structure*

The FlexRay NM MainFunction will hold the "automated" functionality of the FlexRay NM - as there is the periodic transmission of NM-Messages, the processing of received NM-Messages and the periodic processing of the FlexRay NM state machine (at the boundary between two NM-Repetition Cycles).

⌈
The FrNm module shall call `LSduR_FrNmTransmit`, which results in a call of the FlexRay Interface function `FrIf_Transmit`, to transmit NM-Vote and NM-Data if the transmission of cyclic NM-messages is started.
⌋

Note: The FlexRay Interface module calls `LSduR_FrIfTxConfirmation`, which in turn calls the FrNm module function `FrNm_TxConfirmation` with E_OK, when a NM-message is successfully transmitted and a transmit confirmation is supported and configured within the FlexRay Interface.

Note: The FlexRay Interface module calls `LSduR_FrIfRxIndication`, which in turn calls the FrNm module function `FrNm_RxIndication`, when a NM-message is received. It is up to the implementation as to how the FrNm module is to handle the data from the NM-message. It can be immediately processed (to reduce the memory consumption), or it can be stored to be available to be processed (to reduce computing time).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. FlexRay NM-MainFunction execution

Note: The FlexRay NM module integrator shall define a schedule to activate the FlexRay NM MainFunction synchronously to the FlexRay communication cycle.

Note: The FrNm module's environment (SchM) should execute the FlexRay NM MainFunction (`FrNm_MainFunction_`<FrNmChannel.ShortName>) at least once a FlexRay communication cycle, synchronous to the FlexRay global time when FlexRay global time is available within the time window depicted in Figure . The execution of the FlexRay NM MainFunction should not cross a FlexRay cycle boundary. The FlexRay NM MainFunction should be executed periodically even when FlexRay global time is no longer available. The periodicity of FlexRay NM MainFunction is configurable in the SchM configuration which has to correspond to the value of the FrNmMainFunctionPeriod configuration parameter.

Rationale: This is necessary because FlexRay NM state changes may influence whether the NM-Vote PDU should be transmitted in the subsequent cycle.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Additional Features

### 39. Cluster size

Upstream requirements: ,
⌈
The AUTOSAR FlexRay NM algorithm shall support up to 64 nodes per NM-Cluster.
⌋

Note: The AUTOSAR FlexRay NM algorithm can support an arbitrary number of nodes per NM-cluster (even more than the maximum of 64 nodes per FlexRay cluster). This upper limit is only a matter of configuration, since the upper limit is not fixed and depends on the trade off between response time, fault-tolerance and resulting bus load configured for the AUTOSAR FlexRay NM coordination algorithm.

### 40. 检测 of Remote 休眠 Indication (optional)
*原文标题：Detection of Remote Sleep Indication (optional)*

The "Remote Sleep Indication" signals a situation where a node detects that all other nodes are ready to sleep, but the node where the indication occurs is still keeping the bus awake.

  Upstream requirements:
⌈
The detection of remote sleep indication by the FrNm module shall be configurable at pre-compile time by the configuration parameter FrNmRemoteSleepIndicationEnabled.
⌋

Note: If a node is configured as Passive , then the remote sleep indication shall not be used because the node cannot vote so it is incapable of being the only node keeping the NM Cluster awake. Consequently the remote sleep indication simply cannot occur.

  Upstream requirements:
⌈
If no NM-messages with an indication to keep the bus awake are received in the Normal Operation State for a configurable amount of time determined by the FrNmRemoteSleepIndTime, then the NM shall notify the Generic NM Interface module that all other nodes in the cluster are ready to sleep (the 'Remote Sleep Indication') by calling `Nm_RemoteSleepIndication`.
⌋

⌈
The FrNm module shall reject a check of Remote Sleep Indication (`FrNm_CheckRemoteSleepIndication`) when not in Network Mode.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 112 章（内容从略，见纯文本全文）

41. 检测 of Nodes (optional)
42. User 数据 (optional)
43. Passive Node 配置 (optional)
44. NM PDU Rx Indication (optional)
45. 状态 change 通知 (optional)
46. Dual FlexRay Channel PDU 支持 (optional)
47. Car 唤醒 (optional)
48. Rx Path
49. Tx Path
50. Coordinated Bus 关机 (optional)
51. Extension for Partial 网络 (optional)
52. RX-Path
53. TX-Path
54. Internal Requested Partial 网络 Clusters的处理
55. 调度 details
56. FlexRay NM Cycle 需求
57. NM-Message scheduled 需求
58. Transmission 错误处理
59. 错误分类
60. Development 错误
61. Runtime 错误
62. Production 错误
63. Extended Production 错误
64. Version check
65. Send ActiveWakeupBit in CBV
66. 安全事件
67. API 规范
68. Imported 类型
69. 类型定义
70. Generic NM 类型定义
71. FlexRay NM specific 类型定义
72. FrNm_ConfigType
73. 功能定义
74. FrNm_Init
75. FrNm_PassiveStartUp
76. FrNm_NetworkRequest
77. FrNm_NetworkRelease
78. FrNm_SetUserData
79. FrNm_GetUserData
80. FrNm_GetPduData
81. FrNm_RepeatMessageRequest
82. FrNm_GetNodeIdentifier
83. FrNm_GetLocalNodeIdentifier
84. FrNm_RequestBusSynchronization
85. FrNm_CheckRemoteSleepIndication
86. FrNm_GetState
87. FrNm_StartupError
88. FrNm_Transmit
89. FrNm_EnableCommunication
90. FrNm_DisableCommunication
91. FrNm_SetSleepReadyBit
92. FrNm_PnLearningRequest
93. FrNm_ActivateTxPnShutdownMsg
94. FrNm_DeactivateTxPnShutdownMsg
95. FrNm_RxIndication
96. FrNm_TriggerTransmit
97. FrNm_TxConfirmation
98. Scheduled functions
99. FrNm_MainFunction_<FrNmChannel.ShortName>
100. Expected 接口
101. Mandatory 接口
102. Optional 接口
103. Callout 接口
104. Configurable 接口
105. NetworkStartIndication
106. PduRxIndication
107. RemoteSleepCancellation
108. RemoteSleepIndication
109. TransmissionTimeoutException
110. 服务接口
111. 时序图
112. Use Case 01 - 初始化
113. Use Case 02 - Passive 启动
114. Use Case 03 - Passive 启动 with a 网络 Request
115. Use Case 04 - Normal Operation
116. Use Case 05 - 关机
117. 配置规范
118. How to read this chapter
119. Containers and 配置 parameters
120. FrNm
121. Global configurable parameters
122. FrNmGlobalConfig
123. FrNmGlobalFeatures
124. FrNmGlobalProperties
125. Channel configurable parameters
126. FrNmChannelConfig
127. FrNmChannel
128. FrNmChannelTiming
129. FrNmChannelIdentifiers
130. FrNmRxPdu
131. FrNmTxPdu
132. FrNmUserDataTxPdu
133. Published parameters
134. 配置 constraints
135. 示例
136. 示例 of Bus-Schedule with NM-Vote PDUs
137. Bus 调度 with NM-Data PDUs的示例
138. 附录
139. 不适用需求
140. Change history of AUTOSAR traceable items
141. Traceable item history of this document according to AUTOSAR Release R25-11
142. Added 规范 Items in R26-11
143. Changed 规范 Items in R26-11
144. Deleted 规范 Items in R26-11
145. Traceable item history of this document according to AUTOSAR Release R25-11
146. Added 规范 Items in R25-11
147. Changed 规范 Items in R25-11
148. Deleted 规范 Items in R25-11
149. Traceable item history of this document according to AUTOSAR Release R24-11
150. Added 规范 Items in R24-11
151. Changed 规范 Items in R24-11
152. Deleted 规范 Items in R24-11
