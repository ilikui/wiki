# Specification of UDP Network Management (`UDPNetworkManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 414 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_UDPNetworkManagement_414\AUTOSAR_CP_SWS_UDPNetworkManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_UDPNetworkManagement_414\AUTOSAR_CP_SWS_UDPNetworkManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_UDPNetworkManagement_414\zzgen\CP_SWS_UDPNetworkManagement.complete.txt`

## 文档简介

This document describes the concept, core functionality, optional features, interfaces and configuration issues of the AUTOSAR UDP Network Management (UdpNm). UdpNm is intended to be an optional feature. It is intended to work together with a TCP/IP Stack, independent of the physical layer of the communication system used. The AUTOSAR UDP Network Management is a hardware independent protocol that can be used on TCP/IP based systems (for limitations refer to chapter ). Its main purpose is to coordinate the transition between normal operation and bus-sleep mode of the network.

In addition to the core functionality optional features are provided e.g. to implement a service to detect all present nodes or to detect if all other nodes are ready to sleep. The UDP Network Management (UdpNm) function provides an adaptation between Network Management Interface (Nm) and a TCP/IP Stack (TCP/IP). For a general understanding of the AUTOSAR Network Management functionality please refer to .

## 模块依赖

UDP Network Management (UdpNm) uses services of the TCP/IP Stack and provides services to the Generic Network Management Interface (Nm).

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document describes the concept, core functionality, optional features, interfaces and configuration issues of the AUTOSAR UDP Network Management (UdpNm). UdpNm is intended to be an optional feature. It is intended to work together with a TCP/IP Stack, independent of the physical layer of the communication system used. The AUTOSAR UDP Network Management is a hardware independent protocol that can be used on TCP/IP based systems (for limitations refer to chapter ). Its main purpose is to coordinate the transition between normal operation and bus-sleep mode of the network.

In addition to the core functionality optional features are provided e.g. to implement a service to detect all present nodes or to detect if all other nodes are ready to sleep. The UDP Network Management (UdpNm) function provides an adaptation between Network Management Interface (Nm) and a TCP/IP Stack (TCP/IP). For a general understanding of the AUTOSAR Network Management functionality please refer to .

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the UdpNm module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| CWU | Car Wakeup |
| EthIf | Ethernet Interface |
| PNI | Partial Network Information |
| PNL | Partial Network Learning |
| TCP/IP | A family of communication protocols used in computer networks |

| Term: | Description: |
|---|---|
| PDU transmission ability is disabled | This means that the NM message transmission has been disabled by the optional service UdpNm_DisableCommunication. |
| Repeat Message Request Bit Indication | UdpNm_SoAdIfRxIndication finds the Repeat Message Bit set in the Control Bit Vector of a received NM message. |
| NM PDU | Refers to the payload transmitted in a packet. It contains the NM User Data as well as the Control Bit Vector and the Source Node Identifier. |
| NM Packet | Refers to an Ethernet Frame containing an IP as well as a UDP header in addition to the data (PDU) transmitted by the NM in the payload section. |
| NM Message | Most abstract term referring to any single information item transferred within the methodology of the NM algorithm. |
| Bus-Off state | Refers to a situation where no cable is connected to the Ethernet HW. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for UDP Network Management.

Thus, the specification SWS BSW General shall be considered as additional and required specification for UDP Network Management.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

# One instance of UdpNm is associated with only one NM-Cluster in one network. One NM-Cluster can have only one instance of UdpNm in one node.
# One instance of UdpNm is associated with only one network within the same ECU.
# UdpNm is only applicable for TCP/IP based systems.

 presents an AUTOSAR NM stack within an example ECU belonging to two UDP NM-clusters.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

N/A

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

UDP Network Management (UdpNm) uses services of the TCP/IP Stack and provides services to the Generic Network Management Interface (Nm).

### 10. 文件结构
*原文标题：File Structure*

### 11. 代码文件结构
*原文标题：Code File Structure*

Upstream requirements: , ,
⌈
The code file structure shall not be fully defined within this specification. However, the code file structure shall include the following files:

* `UdpNm_Lcfg`.c (for link time configurable parameters)
* `UdpNm_PBcfg`.c (for post build time configurable parameters)

These files shall contain all link time post build time configurable parameters.
⌋

### 12. 协议 layer dependencies
*原文标题：Protocol layer dependencies*

The Udp Network Management is based on the protocol mentioned in PRS NetworkManagementProtocol .

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Nm shall be applicable to different types of communication systems which are in the scope of AUTOSAR and support a bus sleep mode. |  |  |
| Nm shall provide services to coordinate shutdown of Nm-clusters independently of each other |  |  |
| It shall be possible to trigger the startup of all Nodes at any Point in Time |  |  |
| Nm shall provide a service to request to keep the bus awake and a service to cancel this request. |  |  |
| Nm shall put the communication controller into sleep mode if there is no bus communication |  |  |
| The Nm shall provide the current state of Nm |  |  |
| Nm shall inform application when Nm state changes occur. |  |  |
| The Nm interface shall signal to the application that all other ECUs are ready to sleep. |  |  |
| Nm shall perform communication system error handling for errors that have impact on the Nm behavior. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

### 15. Coordination algorithm

The AUTOSAR UdpNm is based on decentralized direct network management strategy, which means that every network node performs activities self-sufficient depending only on the UDP packets received and/or transmitted within the communication system.

The AUTOSAR UdpNm coordination algorithm is based on periodic NM packets, which are received by all nodes in the cluster via multicast transmission. Reception of NM packets indicates that sending nodes want to keep the NM-cluster awake. If any node is ready to go to the Bus-Sleep Mode, it stops sending NM packets, but as long as NM packets from other nodes are received, it postpones transition to the Bus-Sleep Mode. Finally, if a dedicated timer elapses because no NM packets are received anymore, every node initiates transition to the Bus-Sleep Mode. If any node in the NM-cluster requires bus-communication, it can keep the NM-cluster awake by transmitting NM packets. For more details concerning the wakeup procedure itself, please refer to  ff. or .

The main concept of the AUTOSAR UdpNm coordination algorithm can be defined by the following two key-requirements:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Operational Modes

This chapter describes the operational modes of the AUTOSAR UdpNm coordination algorithm.

  Upstream requirements: ,
⌈
The AUTOSAR UdpNm shall contain three operational modes visible at the modules interface:

* Network Mode
* Prepare Bus-Sleep Mode
* Bus-Sleep Mode
⌋

  Upstream requirements:
⌈
Changes of the AUTOSAR UdpNm operational modes shall be signalled to the upper layer by means of call-back functions.
⌋

### 17. 网络模式
*原文标题：Network Mode*

Upstream requirements: ,
⌈
The Network Mode shall consist of three internal states:

* Repeat Message State
* Normal Operation State
* Ready Sleep State
⌋

  Upstream requirements:
⌈
When the Network Mode is entered from Bus-Sleep Mode or Prepare Bus-Sleep Mode, by default, the Repeat Message State shall be entered.
⌋

  Upstream requirements:
⌈
When the Network Mode is entered, the NM-Timeout Timer shall be started.
⌋

  Upstream requirements:
⌈
When the Network Mode is entered, the UdpNm shall notify the upper layer by calling `Nm_NetworkMode`.
⌋

  Upstream requirements:
⌈
Upon successful reception of an NM PDU (call of `UdpNm_SoAdIfRxIndication`) in Network Mode, the NM-Timeout Timer shall be restarted.
⌋

  Upstream requirements:
⌈
Upon transmission of an NM PDU (call of `UdpNm_SoAdIfTxConfirmation` with E_OK) in the Network Mode, the NM-Timeout Timer shall be restarted.
⌋

Note: As no transmission confirmation is available from the SoAd or the TCP/IP stack it is assumed that each Network Management PDU transmission request results in a successful Network Management PDU transmission.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Repeat Message 状态
*原文标题：Repeat Message State*

For nodes that are not in passive mode (refer to chapter ) the Repeat Message State ensures, that any transition from Bus-Sleep or Prepare Bus-Sleep to the Network Mode becomes visible for the other nodes on the network. Additionally it ensures that any node stays active for a minimum amount of time (UdpNmRepeatMessageTime). Optionally it can be used for detection of present nodes.

  Upstream requirements:
⌈
When the Repeat Message State is entered from Bus-Sleep Mode, Prepare-Bus-Sleep Mode, Normal Operation State or Ready Sleep State transmission of NM packets shall be (re-) started unless passive mode is enabled.
⌋

  Upstream requirements:
⌈
When the NM-Timeout Timer expires in the Repeat Message State, the NM-Timeout Timer shall be restarted.
⌋

  Upstream requirements:
⌈
The NM shall stay in the Repeat Message State for a configurable amount of time determined by the UdpNmRepeatMessageTime (configuration parameter); after that time the Repeat Message State shall be left.
⌋

  Upstream requirements:
⌈
When Repeat Message State is left, the Normal Operation State shall be entered, if the network has been requested (see ).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Normal Operation 状态
*原文标题：Normal Operation State*

The Normal Operation State ensures that any node can keep the NM-cluster awake as long as the network functionality is required.

  Upstream requirements:
⌈
When the Normal Operation State is entered from Ready Sleep State, transmission of NM PDUs shall be started unless passive mode is enabled or the NM message transmission ability has been disabled.
⌋

  Upstream requirements:
⌈
When the NM-Timeout Timer expires in the Normal Operation State, the NM-Timeout Timer shall be restarted.
⌋

  Upstream requirements:
⌈
When the network is released and the current state is Normal Operation State, the Normal Operation State shall be left and the Ready Sleep state shall be entered (refer to ).
⌋

  Upstream requirements:
⌈
If UdpNmNodeDetectionEnabled is set to TRUE and Repeat Message Request bit is received in the Normal Operation State, UdpNm shall enter Repeat Message State.
⌋

  Upstream requirements:
⌈
If UdpNmNodeDetectionEnabled is set to TRUE and function `UdpNm_RepeatMessageRequest` is called in the Normal Operation State, UdpNm shall enter Repeat Message State.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Ready 休眠状态
*原文标题：Ready Sleep State*

The Ready Sleep State ensures that any node in the NM-cluster waits with transition to the Prepare Bus-Sleep Mode as long as any other node keeps the NM-cluster awake.

  Upstream requirements:
⌈
When the Ready Sleep State is entered from Repeat Message State or Normal Operation State, transmission of NM PDUs shall be stopped.
⌋

Note: If passive mode is enabled no NM PDUs are transmited, no action is required. If passive mode is disabled, in some cases NM PDUs have to be transmitted in Ready Sleep State to grant a synchronized shutdown in the network, e.g. re-transmission of PN shutdown messages.

  Upstream requirements:
⌈
When the NM-Timeout Timer expires in the Ready Sleep State, the Ready Sleep State shall be left and the Prepare Bus-Sleep Mode shall be entered.
⌋

  Upstream requirements:
⌈
When the network is requested and the current state is the Ready Sleep State, the Ready Sleep State shall be left and the Normal Operation State shall be entered (refer to `SWS_UdpNm_00104`).
⌋

  Upstream requirements:
⌈
If UdpNmNodeDetectionEnabled is set to TRUE and Repeat Message Request bit is received in the Ready Sleep State, UdpNm shall enter Repeat Message State.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Prepare Bus-Sleep 模式
*原文标题：Prepare Bus-Sleep Mode*

The purpose of the Prepare Bus Sleep state is to ensure that all nodes have time to stop their network activity before the Bus Sleep state is entered. Bus activity is calmed down (i.e. queued messages are transmitted in order to empty all Tx-buffers) and finally there is no activity on the bus in the Prepare Bus-Sleep Mode.

  Upstream requirements:
⌈
When Prepare Bus-Sleep Mode is entered, the UdpNm shall notify the upper layer by calling `Nm_PrepareBusSleepMode`.
⌋

  Upstream requirements:
⌈
Upon successful reception of an NM PDU in the Prepare Bus-Sleep Mode, the Prepare Bus-Sleep Mode shall be left and the Network Mode shall be entered; by default the Repeat Message State is entered (refer to ).
⌋

  Upstream requirements:
⌈
When the network is requested in the Prepare Bus-Sleep Mode, the Prepare Bus-Sleep Mode shall be left and the Network Mode shall be entered; by default the Repeat Message State is entered (refer to )
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Bus-Sleep 模式
*原文标题：Bus-Sleep Mode*

The purpose of the Bus-Sleep state is to reduce power consumption in the node, when no messages are to be exchanged.

The communication controller is switched to sleep mode, respective wakeup mechanisms are activated and finally power consumption is reduced to the adequate level in the Bus-Sleep Mode.

If UdpNmStayInPbsEnabled is disabled and configurable amount of time determined by the UdpNmTimeoutTime + UdpNmWaitBusSleepTime (both configuration parameters) is identically configured for all nodes in the network management cluster, all nodes in the network management cluster that are coordinated with use of the AUTOSAR NM algorithm perform the transition into the Bus-Sleep Mode at approximately the same time.

Note: The parameters UdpNmTimeoutTime and UdpNmWaitBusSleepTime should have the same values within all network nodes of the NM-cluster. Depending on the specific implementation, transition into the Bus-Sleep Mode takes place approximately at the same time. The time jitter experienced for this transition depends on the following factors:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 网络 states
*原文标题：Network states*

Network states (i.e. 'requested' and 'released') are two additional states of the AUTOSAR UdpNm state machine that exist in parallel to the state machine. Network states denote, whether the software components need to communicate on the bus (the network state is then 'requested'); or whether the software components don't have to communicate on the bus (the bus network state is then 'released'); note that if the network is released an ECU may still communicate because some other ECU still request the network.

  Upstream requirements:
⌈
The function call `UdpNm_NetworkRequest` shall request the network. I.e. the UdpNm module shall change network state to 'requested'.
⌋

  Upstream requirements:
⌈
The function call `UdpNm_NetworkRelease` shall release the network. I.e. the UdpNm module shall change network state to 'released'.
⌋

### 24. 初始化
*原文标题：Initialization*

Upstream requirements:
⌈
After successful initialization the Network Management state shall be set to BusSleep Mode.
⌋

Note: The UdpNm module should be initialized after SoAd is initialized and before any other network management service is called.

  Upstream requirements:
⌈
When initialized, by default, the UdpNm module shall set the network state to 'released'.
⌋

  Upstream requirements:
⌈
When initialized, by default, the UdpNm module shall enter the Bus-Sleep Mode.
⌋

  Upstream requirements:
⌈
The function `UdpNm_Init` shall select the active configuration set by means of a configuration pointer parameter being passed (see ).
⌋

  Upstream requirements:
⌈
After initialization the transmission of NM messages shall be stopped.
⌋

  Upstream requirements:
⌈
After initialization each byte of the user data bytes shall be set to 0xFF.
⌋

  Upstream requirements:
⌈
After initialization the Control Bit Vector shall be set to 0x00.
⌋

  Upstream requirements:
⌈
During initialization and if UdpNmPnEnabled is TRUE, the UdpNm module shall set each byte of the PNC Request Bit Vector to 0x00.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Execution

### 26. Processor 架构
*原文标题：Processor architecture*

Upstream requirements:
⌈
The AUTOSAR UdpNm coordination algorithm shall be processor independent, meaning it shall not rely on any processor specific hardware support and thus shall be realizable on any processor architecture that is within the scope of AUTOSAR.
⌋

### 27. 时序 parameters
*原文标题：Timing parameters*

Upstream requirements:
⌈
The configuration parameter UdpNmTimeoutTime shall determine the AUTOSAR UdpNm timing parameter NM-Timeout Time.
⌋

  Upstream requirements:
⌈
The configuration parameter UdpNmRepeatMessageTime shall determine the AUTOSAR UdpNm timing parameter Repeat Message Time.
⌋

  Upstream requirements:
⌈
The configuration parameter UdpNmWaitBusSleepTime shall determine the AUTOSAR UdpNm timing parameter Wait Bus-Sleep Time.
⌋

  Upstream requirements:
⌈
The optional configuration parameter UdpNmRemoteSleepIndTime shall determine the AUTOSAR UdpNm timing parameter Remote Sleep Indication Time.
⌋

### 28. Communication 调度
*原文标题：Communication Scheduling*

### 29. NM Message Transmission

Note: The transmission mechanisms described in this chapter are only relevant if the NM message transmission ability is enabled.

  Upstream requirements:
⌈
The transmission of NM messages shall be configurable by means of UdpNmPassiveModeEnabled (see ).
⌋

Note: Passive nodes do not transmit NM messages, i.e. they can not actively influence the shut down decision, but they do receive NM message in order to be able to shut down synchronously.

Note: The transmission mechanisms described in this chapter are only relevant if UdpNmPassiveModeEnabled is FALSE.

Note: The UdpNm module provides the periodic transmission mode, see `PRS_Nm_00237`. In this transmission mode the UdpNm module sends Network Management PDUs periodically.

Note: The periodic transmission mode is used in the "Repeat Message State" and "Normal Operation State".

Transmission of NM PDU in Repeat Message State can be started either directly in case of UdpNmImmediateNmTransmissions is greater than 0 (see `PRS_Nm_00005`) or otherwise delayed by UdpNmMsgCycleOffset (see `PRS_Nm_00334`).

Note: UdpNmImmediateNmTransmissions has to be greater than 0 in case UdpNmPnHandleMultipleNetworkRequests is set to TRUE due to .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. NM Message Reception

If an NM message has been successfully received, the SoAd will call `UdpNm_SoAdIfRxIndication`.

  Upstream requirements:
⌈
Upon a call of `UdpNm_SoAdIfRxIndication`, the UdpNm module shall copy the data of the Network Management PDU referenced in the function parameter to an internal buffer.
⌋

  Upstream requirements:
⌈
When an NM PDU has been received, the Nm function `Nm_PduRxIndication` shall be called, if UdpNmPduRxIndicationEnabled (configuration parameter) is TRUE.
⌋

### 31. Additional features

### 32. 检测 of Remote 休眠 Indication (optional)
*原文标题：Detection of Remote Sleep Indication (optional)*

The "Remote Sleep Indication" denotes a situation, where a node in Normal Operation State finds all other nodes in the cluster are ready to sleep. The node still in Normal Operation State will still keep the bus awake.

  Upstream requirements:
⌈
Detection of remote sleep indication shall be statically configurable with use of the UdpNmRemoteSleepIndEnabled switch (configuration parameter).
⌋

  Upstream requirements: ,
⌈
If no NM PDUs are received in the Normal Operation State for a configurable amount of time determined by the UdpNmRemoteSleepIndTime (configuration parameter), the NM shall notify the Generic Network Management Interface that all other nodes in the cluster are ready to sleep (the so-called 'Remote Sleep Indication') by calling `Nm_RemoteSleepIndication`.
⌋

  Upstream requirements:
⌈
If Remote Sleep Indication has been previously detected and if an NM PDU is received in the Normal Operation State or Ready Sleep State again, the NM shall notify the Generic Network Management Interface that some nodes in the cluster are not ready to sleep anymore (the so-called 'Remote Sleep Cancellation') by calling `Nm_RemoteSleepCancellation`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. User 数据 (optional)
*原文标题：User Data (optional)*

Upstream requirements: ,
⌈
Support of NM user data shall be statically configurable using the UdpNmUserDataEnabled switch (configuration parameter).
⌋

  Upstream requirements:
⌈
When `UdpNm_SetUserData` is called, the NM user data for NM packets transmitted next on the bus shall be set; operation of setting the NM user data shall guarantee data consistency.
⌋

  Upstream requirements: ,
⌈
When `UdpNm_GetUserData` is called, the NM user data contained in the payload of the most recently received NM PDU shall be provided; operation of providing the NM user data shall guarantee data consistency.
⌋

Note: If NM user data is configured it will be sent for sure in the Repeat Message State. In Ready Sleep State the user data will not be sent.

  Upstream requirements:
⌈
If UdpNmComUserDataSupport is enabled the API `UdpNm_SetUserData` shall not be available.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Passive 模式 (optional)
*原文标题：Passive Mode (optional)*

In Passive Mode the node is only receiving NM messages but not transmitting any NM messages.

  Upstream requirements:
⌈
Passive Mode shall be statically configurable with use of the UdpNmPassiveModeEnabled switch (configuration parameter).
⌋

  Upstream requirements:
⌈
Passive Mode shall be statically configured consistent for all instances within one ECU.
⌋

  Upstream requirements:
⌈
If Passive Mode is used (configuration parameter UdpNmPassiveModeEnabled) the following options must not be used:

* Bus Synchronization

  (configuration parameter UdpNmBusSynchronizationEnabled)
* Remote Sleep Indication

  (configuration parameter UdpNmRemoteSleepIndEnabled)
* Node Detection

  (configuration parameter UdpNmNodeDetectionEnabled)
⌋

### 35. 状态 change 通知 (optional)
*原文标题：State change notification (optional)*

Upstream requirements: ,
⌈
All changes of the AUTOSAR UdpNm states shall be notified to the upper layer by calling `Nm_StateChangeNotification` if the callback `Nm_StateChangeNotification` is enabled (configuration parameter UdpNmStateChangeIndEnabled is TRUE).
⌋

### 36. Communication 控制 (optional)
*原文标题：Communication Control (optional)*

Upstream requirements:
⌈
Communication Control shall be statically configurable with use of the UdpNmComControlEnabled switch (configuration parameter).
⌋

  Upstream requirements:
⌈
The optional service `UdpNm_DisableCommunication` shall disable the NM PDU transmission ability.
⌋

Note: The NM coordination algorithm cannot work correctly if NM PDU transmission ability is disabled. Therefore it has to be ensured that the ECU is not shutdown as long as the NM PDU transmission ability is disabled.

If `UdpNm_NetworkRelease` is called and NM PDU transmission ability has been disabled, ECU will shut down. This ensures that ECU can shut down also in case of race conditions (e.g. diagnostic session left shortly before enabling communication) or a wrong usage of communication control.

  Upstream requirements:
⌈
The optional service `UdpNm_DisableCommunication` shall return E_NOT_OK, if the current mode is not Network Mode.
⌋

  Upstream requirements:
⌈
When the Network Management PDU transmission ability is disabled, the UdpNm module shall stop the UdpNm Message Cycle Timer in order to stop the transmission of Network Management PDUs.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. NM Coordinator 同步支持 (optional)
*原文标题：NM Coordinator synchronization support (optional)*

When having more than one coordinator connected to the same bus a special bit in the CBV, the NmCoordinatorSleepReady bit is used to indicate that the main coordinator requests to start shutdown sequence. The main functionality of the algorithm is described in the Nm module.

  Upstream requirements: ,
⌈
If the UdpNm called `NM_CoordReadyToSleepIndication` and is still in Network Mode it shall notify the Nm by calling `Nm_CoordReadyToSleepCancellation` on the first reception of a NM message with the NmCoordinatorSleepReady bit (see CBV) set it to 0
⌋

  Upstream requirements:
⌈
If UdpNm has entered Network mode or called `Nm_CoordReadyToSleepCancellation` before it shall notify the NM by calling `NM_CoordReadyToSleepIndication` on the first reception of NM message with the NmCoordinatorSleepReady bit (see CBV) set to 1
⌋

  Upstream requirements:
⌈
If UdpNmCoodinatorSyncSupport is set to TRUE and the API `UdpNm_SetSleepReadyBit` is called UdpNm shall set the "NM Coordinator Sleep Ready Bit" bit to passed value and trigger a single Network Management PDU.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Partial Networking

An overview regarding the partial network cluster functionality can be found in document .

### 39. Rx 处理 of NM PDUs
*原文标题：Rx Handling of NM PDUs*

Upstream requirements:
⌈
If the UdpNmPnEnabled is FALSE, the UdpNm shall perform the normal Rx Indication handling and the partial networking extensions shall be disabled.
⌋

  Upstream requirements:
⌈
If UdpNmPnEnabled is TRUE, the PNI bit in the received NM-PDU is 0 and UdpNmAllNmMessagesKeepAwake is TRUE, the UdpNm module shall perform the normal Rx Indication handling and omitting the extensions for partial networking.
⌋

  Upstream requirements:
⌈
If UdpNmPnEnabled is TRUE, the PNI bit in the received NM-PDU is 0 and UdpNmAllNmMessagesKeepAwake is FALSE, the UdpNm module shall ignore the received NM-PDU.
⌋

  Upstream requirements: , ,
⌈
If UdpNmPnEnabled is set to TRUE, the PNI bit in the received NM-PDU is set to 1 and one of the following pre-conditions is valid:

* UdpNmSynchronizedPncShutdownEnabled is set to FALSE
* UdpNmSynchronizedPncShutdownEnabled is set to TRUE and the PNSR bit is set to 0

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Tx 处理 of NM PDUs
*原文标题：Tx Handling of NM PDUs*

Upstream requirements:
⌈
If UdpNmPnEnabled is TRUE the UdpNm module shall set the value of the transmitted PNI bit in the CBV to 1.
⌋

Note: The usage of the CBV is mandatory in case Partial Networking is used.

  Upstream requirements:
⌈
If UdpNmPnEnabled is FALSE the UdpNm module shall set the value of the transmitted PNI bit in the CBV always to 0.
⌋

  Upstream requirements:
⌈
If the NM-channel parameter UdpNmPnEnabled is set to TRUE, the UdpNm module shall store the latest PNC Request Bit Vector for this NM-channel everytime the PNC Request Bit Vector has been fetched from the Nm module via call of `Nm_PncBitVectorTxIndication`.
⌋

  Upstream requirements:
⌈
If the NM-channel parameter UdpNmPnEnabled is set to TRUE, a NM-PDU has been transmitted on this NM-Channel and `UdpNm_TxConfirmation` is called with result E_OK for this NM-PDU, then the UdpNm module shall forward the confirmation to Nm by calling `Nm_PncBitVectorTxConfirmation` with the stored PNC Request Bit Vector (see ) for this NM-channel with result set to E_OK.
⌋

Note: The confirmation towards the Nm is always performed, independent of the reason for transmission of a NM-PDU (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Internal Requested Partial 网络 Clusters的处理
*原文标题：Handling of Internal Requested Partial Network Clusters*

All internal PNC requests are maintained by ComM. ComM forwards the aggregated internal PNC requests per channel as PNC Request Bit Vector to NmIf. This PNC Request Bit Vector carries the so-called "Internal Request Array". The UdpNm has to retrieve the latest IRA from NmIf every time an `NM_PDU` is transmitted. NmIf provides the IRA information to UdpNm and updates the PNC reset timer (each time a relevant PNC is transmitted, the PNC reset timer is re-started).

Note: For all configured NM-channel where UdpNmPnEnabled is set to TRUE, the UdpNm will call `Nm_PncBitVectorTxIndication`(<NM-channel>, <buffer to store the unfiltered PNC Request Bit Vector of aggregated internal PNC requests>) (see ,  and ) to indicate the transmission and to retrieve the current internal PNC requests as PNC Request Bit Vector with respect to the configured NmPncBitVectorLength. The UdpNm will copy received internal PNC requests to the PNC Request Bit Vector bytes of the NM-PDU.

### 其余 96 章（内容从略，见纯文本全文）

42. Spontaneous Transmission of NM-PDUs via UdpNm_NetworkRequest
43. Payload (PDU) 结构
44. 功能性需求 on UdpNm API
45. Car 唤醒
46. 错误分类
47. Development 错误
48. Runtime 错误
49. Production 错误
50. Extended Production 错误
51. the main 功能的调度
52. Application notes
53. 唤醒通知
54. Coordination of coupled networks
55. Version check
56. Parameter check
57. 安全事件
58. API 规范
59. Imported 类型
60. 类型定义
61. UdpNm_ConfigType
62. UdpNm_PduPositionType
63. 功能定义
64. UdpNm_Init
65. UdpNm_PassiveStartUp
66. UdpNm_NetworkRequest
67. UdpNm_NetworkRelease
68. UdpNm_DisableCommunication
69. UdpNm_EnableCommunication
70. UdpNm_SetUserData
71. UdpNm_GetUserData
72. UdpNm_GetNodeIdentifier
73. UdpNm_GetLocalNodeIdentifier
74. UdpNm_RepeatMessageRequest
75. UdpNm_GetPduData
76. UdpNm_GetState
77. UdpNm_RequestBusSynchronization
78. UdpNm_CheckRemoteSleepIndication
79. UdpNm_SetSleepReadyBit
80. UdpNm_Transmit
81. UdpNm_PnLearningRequest
82. UdpNm_ActivateTxPnShutdownMsg
83. UdpNm_DeactivateTxPnShutdownMsg
84. Callback 通知
85. UdpNm_SoAdIfTxConfirmation
86. UdpNm_SoAdIfRxIndication
87. UdpNm_SoAdIfTriggerTransmit
88. Scheduled functions
89. UdpNm_MainFunction_<Instance Id>
90. Expected 接口
91. Mandatory 接口
92. Optional 接口
93. Configurable 接口
94. 服务接口
95. UML 状态 chart diagram
96. Sequence diagrams and Transition Tables
97. UdpNmTransmission
98. UdpNm Reception
99. 配置规范
100. How to read this chapter
101. Containers and 配置 parameters
102. UdpNm
103. UdpNmGlobalConfig
104. UdpNmChannelConfig
105. UdpNmRxPdu
106. UdpNmTxPdu
107. UdpNmUserDataTxPdu
108. 发布信息
109. 附录
110. 不适用需求
111. Change history of AUTOSAR traceable items
112. Traceable item history of this document according to AUTOSAR Release R22-11
113. Added Advisories in R22-11
114. Changed Advisories in R22-11
115. Deleted Advisories in R22-11
116. Added Constraints in R22-11
117. Changed Constraints in R22-11
118. Deleted Constraints in R22-11
119. Added 规范 Items in R22-11
120. Changed 规范 Items in R22-11
121. Deleted 规范 Items in R22-11
122. Traceable item history of this document according to AUTOSAR Release R23-11
123. Added 规范 Items in R23-11
124. Changed 规范 Items in R23-11
125. Deleted 规范 Items in R23-11
126. Traceable item history of this document according to AUTOSAR Release R24-11
127. Added 规范 Items in R24-11
128. Changed 规范 Items in R24-11
129. Deleted 规范 Items in R24-11
130. Traceable item history of this document according to AUTOSAR Release R25-11
131. Added 规范 Items in R25-11
132. Changed 规范 Items in R25-11
133. Deleted 规范 Items in R25-11
134. Traceable item history of this document according to AUTOSAR Release R26-11
135. Added 规范 Items in R26-11
136. Changed 规范 Items in R26-11
137. Deleted 规范 Items in R26-11
