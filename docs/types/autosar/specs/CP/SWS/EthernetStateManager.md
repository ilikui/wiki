# Specification of Ethernet State Manager (`EthernetStateManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 415 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_EthernetStateManager_415\AUTOSAR_CP_SWS_EthernetStateManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_EthernetStateManager_415\AUTOSAR_CP_SWS_EthernetStateManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_EthernetStateManager_415\zzgen\CP_SWS_EthernetStateManager.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Ethernet State Manager.

In the AUTOSAR Layered Software Architecture, the Ethernet State Manager belongs to the ECU Abstraction Layer, or more precisely, to the Communication Hardware Abstraction.

The main task of the Ethernet State Manager can be summarized as follows:

⌈
The Ethernet State Manager shall provide an abstract interface to the AUTOSAR Communication Manager to startup or shutdown the communication on an Ethernet cluster.
⌋

⌈
The Ethernet State Manager does not directly access the Ethernet hardware (Ethernet Communication Controller and Ethernet Transceiver), but by means of the Ethernet Interface. The Ethernet Interface redirects the request to the appropriate driver module.
⌋

Figure  is an example of an Autosar architecture including an Ethernet network.

## 模块依赖

* The BSW Scheduler calls the main functions of the EthSM, which are necessary for the cyclic processes of the EthSM.
* The ComM requests network communication modes and is notified by the EthSM when a communication mode is reached.
* The EthSM uses the API of the EthIf to initialize the Ethernet Communication Hardware and to control the operating modes of the Ethernet Controllers and Ethernet Transceivers assigned to the Ethernet Networks.

  The Ethernet Interface uses the API of the EthSM to provide the transceiver link state.
* In order to be able to report development errors, the Ethernet State Manager has to have access to the error hook of the Default Error Tracer.
* In order to be able to report production errors the Ethernet State Manager has to have access to the Diagnostic Event Manager.
* The EcuM initializes the EthSM.
* The BswM is notified by the EthSM when an internal state is reached.
* TcpIp is called to request the TCPIP state (e.g. Online, Offline, On Hold, ...). TcpIP uses the API of the EthSM to provide the TCPIP state.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Ethernet State Manager.

In the AUTOSAR Layered Software Architecture, the Ethernet State Manager belongs to the ECU Abstraction Layer, or more precisely, to the Communication Hardware Abstraction.

The main task of the Ethernet State Manager can be summarized as follows:

⌈
The Ethernet State Manager shall provide an abstract interface to the AUTOSAR Communication Manager to startup or shutdown the communication on an Ethernet cluster.
⌋

⌈
The Ethernet State Manager does not directly access the Ethernet hardware (Ethernet Communication Controller and Ethernet Transceiver), but by means of the Ethernet Interface. The Ethernet Interface redirects the request to the appropriate driver module.
⌋

Figure  is an example of an Autosar architecture including an Ethernet network.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| API | Application Program Interface |
| BSW | Basic Software |
| BswM | Basic Software Mode Manager |
| ComM | Communication Manager |
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |
| EcuM | ECU State Manager |
| Eth | Ethernet Controller |
| EthTrcv | Ethernet Transceiver |
| EthSM | Ethernet State Manager |
| EthIf | Ethernet Interface |
| SchM | BSW Scheduler |
| SoAd | Socket Adapter |
| OA TC10 | Open Alliance TC10 specification (see ) |

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. Related standards and norms

No related standards.

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules SWS BSW General, , which is also valid for Ethernet State Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for the Ethernet State Manager.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

The EthSM can be used for Ethernet communication only. Its dedication is to operate with the EthIf to control one or multiple underlying Ethernet Controllers and Ethernet Transceiver Drivers. Other protocols than Ethernet (i.e. CAN, LIN or FlexRay) are not supported.

The following items are not supported by the current version of this specification:

* Wake on LAN. (Please note, wake-up and sleep on dataline according to the OA TC10 specification (see ) is supported)

The actual EthSM requires an IP-based communication stack. To get `FULL_COMMUNICATION` it is necessary to get an active IP communication. In further specifications, an alternative "low level" state machine will be introduced. This state machine only works on driver/transceiver level (without IP communication). This is necessary to realize other communication protocols (e.g. IEEE 1722).

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The Ethernet State Manager can be used for all domain applications always when the Ethernet protocol is used. The Ethernet BSW Stack can be used wherever high data rates are required.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

* The BSW Scheduler calls the main functions of the EthSM, which are necessary for the cyclic processes of the EthSM.
* The ComM requests network communication modes and is notified by the EthSM when a communication mode is reached.
* The EthSM uses the API of the EthIf to initialize the Ethernet Communication Hardware and to control the operating modes of the Ethernet Controllers and Ethernet Transceivers assigned to the Ethernet Networks.

  The Ethernet Interface uses the API of the EthSM to provide the transceiver link state.
* In order to be able to report development errors, the Ethernet State Manager has to have access to the error hook of the Default Error Tracer.
* In order to be able to report production errors the Ethernet State Manager has to have access to the Diagnostic Event Manager.
* The EcuM initializes the EthSM.
* The BswM is notified by the EthSM when an internal state is reached.
* TcpIp is called to request the TCPIP state (e.g. Online, Offline, On Hold, ...). TcpIP uses the API of the EthSM to provide the TCPIP state.

### 11. 文件结构
*原文标题：File structure*

### 12. 代码文件结构
*原文标题：Code file structure*

For details refer to .

Remark:

Actually the module EthSM doesn't provide link time configuration and post-build time configuration.

### 13. Version Check

For details refer to .

### 14. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All software modules shall provide version and identification information |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| Each AUTOSAR Basic Software Module file shall provide version numbers in the header file |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| All Basic Software Modules shall provide a readable module vendor identification |  |  |
| BSW Modules shall support multiple configuration sets |  |  |
| API handling in uninitialized state |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| BSW module main processing functions shall not be allowed to enter a wait state |  |  |
| The BSW module description template shall provide means to model |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 功能规范
*原文标题：Functional specification*

An ECU can have different communication networks. Each network has to be identified with a unique network handle. The ComM requests communication modes from the networks. It knows by its configuration, which handle is assigned to what kind of network. In case of Ethernet, it uses the Ethernet state manager, which is responsible for the control flow abstraction of Ethernet networks. The following sections describe this in detail.

### 16. Translation of 网络 communication 模式 requests
*原文标题：Translation of network communication mode requests*

⌈
The EthSM shall provide to the ComM an API, which can be used by the ComM to request communication modes of Ethernet networks.
⌋

⌈
Depending on the parameters handed over by this API, the EthSM shall execute a state transition of the related network mode state machine (refer to section 7.6).
⌋

⌈
This transition shall translate the request into a respective API call to control the assigned Ethernet peripherals.
⌋

  Status: DRAFT
⌈
When EthSM transceiver link state gets called `EthSM_TrcvLinkStateChg` and the config parameter EthSMDataLinkInfoApi is set to TRUE, then EthSM shall call `ISO15118Chrg_DataLinkIndication`.
⌋

### 17. Output of current 网络 communication modes
*原文标题：Output of current network communication modes*

The current communication mode of a network can be different from the requested mode. The EthSM has to provide the information on the current communication mode to the ComM by the two following kind of interfaces:

⌈
The EthSM shall provide an API, which can be polled by the ComM to get the current communication mode of an Ethernet network.
⌋

⌈
The EthSM shall use a call-back notification of ComM to notify ComM of a change in communication modes.
⌋

### 18. 控制 of peripherals
*原文标题：Control of peripherals*

### 19. Ethernet 接口 Controllers
*原文标题：Ethernet Interface Controllers*

One Ethernet Interface Controllers and one ComM channel belong to one certain Ethernet network (handle).

⌈
Depending on the network mode state machine, the EthSM shall control the Ethernet Interface Controller modes of each Ethernet network.
⌋

⌈
The EthSM shall use the API of the EthIf to control the operating modes of the assigned Ethernet Interface Controllers.
⌋

### 20. 多 networks
*原文标题：Multiple networks*

The Ethernet State Manager shall be able to handle separate networks. This concerns separate physical networks (see also chapter ) and also separate VLAN's on the same physical network.

In both cases, the separation is done by separate handles per physical or virtual network. VLANs appear on higher layers (ComM) as separate networks. E.g.: If there is one physical Ethernet Interface Controller and two VLANs assigned to it, two ComM channels exists.

### 21. Background and Rationale

Explanation:

The application is responsible to recognize if the Ethernet network is needed or not.

One possible use case could be the usage of the Ethernet network in a tester connection (see description below).

Use Case: Use Ethernet in a tester connection

For example, the detection could takes place over a separate hardware pin of the ECU. In this case, the activation of the hardware pin and therefore the activation of the Ethernet network can only realized through the offboard-diagnostic tester. Reasons for the deactivation of the Ethernet network could be:

* The tester deactivate via the separate hardware pin the network
* The application deactivate the network
* The application recognize a timeout
* The link status of the network failed

Note:

The Ethernet network is requested by the application to wake-up or shutdown. The applicaction either need to communicate or do not need to communicate on the Ethernet network. Therefore, the EthSM statemashine has to provide the corresponding main states `ETHSM_FULL_COMMUNICATION` and `ETHSM_NO_COMMUNICATION`, but no other states, e.g. `ETHSM_SILENT_COMMUNICATION`.

### 22. 网络模式状态 machine
*原文标题：Network mode state machine*

⌈
The EthSM shall implement for each configured network handle one network mode state machine (EthSM statemachine).
⌋

⌈
The EthSM statemachine shall consist of 2 main states: `ETHSM_FULL_COMMUNICATION` and `ETHSM_NO_COMMUNICATION`.
⌋

⌈
The `ETHSM_FULL_COMMUNICATION` shall have 3 sub-states: `ETHSM_STATE_OFFLINE`, `ETHSM_STATE_WAIT_TRCVLINK` and `ETHSM_STATE_WAIT_ONLINE`.
⌋

⌈
The `ETHSM_NO_COMMUNICATION` shall have 3 sub-states: `ETHSM_STATE_ONLINE`, `ETHSM_STATE_ONHOLD` and `ETHSM_STATE_WAIT_OFFLINE`.
⌋

The following points give an overview, on how the EthSM statemachine generally reacts on requested communication modes:

# If communication mode `COMM_FULL_COMMUNICATION` is requested for a certain Ethernet network and the corresponding EthSM statemachine is in state `ETHSM_NO_COMMUNICATION`, then at least the following preconditions have to be fulfilled to transit to `ETHSM_FULL_COMMUNICATION`:

  * Request `ETH_MODE_ACTIVE` for the corresponding Ethernet Interface Controller.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Initial transition

⌈
After the initialization of the EthSM the state machine shall have a transition to `ETHSM_STATE_OFFLINE`.
⌋

Note: The initialization of the EthSM causes no further transactions in other modules. So no separate sequence diagram is needed.

### 24. 行为 in sub-state ETHSM_STATE_OFFLINE
*原文标题：Behaviour in sub-state ETHSM_STATE_OFFLINE*

### 25. Transition from sub-state OFFLINE to WAIT_TRCVLINK

Transition from OFFLINE to `WAIT_TRCVLINK`
⌈
In the state `ETHSM_STATE_OFFLINE` the state machine shall have a transition to `ETHSM_STATE_WAIT_TRCVLINK`, if ComM requests for the corresponding network handle: `COMM_FULL_COMMUNICATION` or `COMM_FULL_COMMUNICATION_WITH_WAKEUP_REQUEST` and EthSMWakeupSleepOnDatalineEnabled is set to TRUE
⌋

Note: The transition is shown as sequence diagram in Figure .

⌈
The transition from `ETHSM_STATE_OFFLINE` to `ETHSM_STATE_WAIT_TRCVLINK` shall set the controller mode according to the requested ComM communication mode:

* If ComM requested `COMM_FULL_COMMUNICATION`, then the controller mode of the corresponding EthIfCtrl shall be requested with `ETH_MODE_ACTIVE`
* If ComM requested `COMM_FULL_COMMUNICATION_WITH_WAKEUP_REQUEST` and EthSMWakeupSleepOnDatalineEnabled is set to TRUE, then the controller mode of corresponding EthIfCtrl shall be requested with `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST`
⌋

### 26. 行为 in sub-state ETHSM_STATE_WAIT_TRCVLINK
*原文标题：Behavior in sub-state ETHSM_STATE_WAIT_TRCVLINK*

Self transition `WAIT_TRCVLINK`
  Upstream requirements:
⌈
If EthSMWakeupSleepOnDatalineEnabled is set to TRUE and the EthSM statmachine is in state `ETHSM_STATE_WAIT_TRCVLINK`, and ComM request now `COMM_FULL_COMMUNICATION_WITH_WAKEUP_REQUEST`, then EthSM shall request the corresponding EthIfCtrl with `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST`.
⌋

### 27. Transition from sub-state WAIT_TRCVLINK to OFFLINE

Transition from `WAIT_TRCVLINK` to OFFLINE
⌈
In the state `ETHSM_STATE_WAIT_TRCVLINK` the state machine shall have a transition to `ETHSM_STATE_OFFLINE`, if the ComM requests `COMM_NO_COMMUNICATION` for the corresponding network handle.
⌋

⌈
The transition from `ETHSM_STATE_WAIT_TRCVLINK` to `ETHSM_STATE_OFFLINE` shall set the controller mode to `ETH_MODE_DOWN`.
⌋

### 28. Transition from sub-state WAIT_TRCVLINK to WAIT_ONLINE

Transition from `WAIT_TRCVLINK` to `WAIT_ONLINE`
⌈
In the state `ETHSM_STATE_WAIT_TRCVLINK` the state machine shall have a transition to `ETHSM_STATE_WAIT_ONLINE`, if the latest indicated link state reported by Ethernet Interface is `ETHTRCV_LINK_STATE_ACTIVE` for the corresponding network handle.
⌋

Note: The transition is shown as sequence diagram in Figure .

⌈
The transition from `ETHSM_STATE_WAIT_TRCVLINK` to `ETHSM_STATE_WAIT_ONLINE` shall request the TcpIp state `TCPIP_STATE_ONLINE` from the TcpIp module.
⌋

 PASS condition for Link down detection
⌈
If the optional configuration parameter `ETHSM_E_LINK_DOWN` exists, `ETHSM_E_LINK_DOWN` with EventStatus `DEM_EVENT_STATUS_PASSED` shall be reported to the DEM module when switching from `ETHSM_STATE_WAIT_TRCVLINK` to `ETHSM_STATE_WAIT_ONLINE`.
⌋

### 29. 行为 in sub-state ETHSM_STATE_WAIT_ONLINE
*原文标题：Behaviour in sub-state ETHSM_STATE_WAIT_ONLINE*

Self transition `WAIT_ONLINE`
  Upstream requirements:
⌈
If EthSMWakeupSleepOnDatalineEnabled is set to TRUE and EthSM is in state `ETHSM_STATE_WAIT_ONLINE` and ComM requests now `COMM_FULL_COMMUNICATION_WITH_WAKEUP_REQUEST`, then EthSM shall request the corresponding EthIfCtrl with `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST`.
⌋

### 30. Transition from sub-state WAIT_ONLINE to WAIT_TRCVLINK

Transition from `WAIT_ONLINE` to `WAIT_TRCVLINK`
⌈
In the state `ETHSM_STATE_WAIT_ONLINE` the state machine shall have a transition to `ETHSM_STATE_WAIT_TRCVLINK`, if the Ethernet interface reports `ETHTRCV_LINK_STATE_DOWN` for the corresponding network handle.
⌋

⌈
The transition from `ETHSM_STATE_WAIT_ONLINE` to `ETHSM_STATE_WAIT_TRCVLINK` shall request the TcpIp state `TCPIP_STATE_OFFLINE` from the TcpIp module.
⌋

### 31. Transition from sub-state WAIT_ONLINE to OFFLINE

Transition from `WAIT_ONLINE` to OFFLINE
⌈
In the state `ETHSM_STATE_WAIT_ONLINE` the state machine shall have a transition to `ETHSM_STATE_OFFLINE`, if the ComM requests `COMM_NO_COMMUNICATION` for the corresponding network handle.
⌋

⌈
The transition from `ETHSM_STATE_WAIT_ONLINE` to `ETHSM_STATE_OFFLINE` sets the controller mode to `ETH_MODE_DOWN`.
⌋

⌈
The transition from `ETHSM_STATE_WAIT_ONLINE` to `ETHSM_STATE_OFFLINE` shall request the TcpIp state `TCPIP_STATE_OFFLINE` from the TcpIp module.
⌋

### 32. Transition from sub-state WAIT_ONLINE to ONLINE

Transition from `WAIT_ONLINE` to ONLINE
⌈
If EthSMTcpIpUsed is TRUE, in the state `ETHSM_STATE_WAIT_ONLINE` the state machine shall have a transition to `ETHSM_STATE_ONLINE`, if the TcpIp modul reports `TCPIP_STATE_ONLINE` for the corresponding network handle. If EthSMTcpIpUsed is FALSE, in the state `ETHSM_STATE_WAIT_ONLINE` the state machine shall have a transition to `ETHSM_STATE_ONLINE` unconditionally.
⌋

Note: The transition is shown as sequence diagram in Figure .

⌈
After the successful transition from `ETHSM_STATE_WAIT_ONLINE` to `ETHSM_STATE_ONLINE` the Ethernet State Manager shall set the main state to `ETHSM_FULL_COMMUNICATION` and call the callback function `ComM_BusSM_ModeIndication` of the ComM with communication mode `COMM_FULL_COMMUNICATION`.
⌋

### 33. Transition from sub-state WAIT_ONLINE to WAIT_OFFLINE

Transition from `WAIT_ONLINE` to `WAIT_OFFLINE`
⌈
In the state `ETHSM_STATE_WAIT_ONLINE` the state machine shall have a transition to `ETHSM_STATE_WAIT_OFFLINE`, if EthSMForwardSilentCommunicationEnabled is set to TRUE and if the ComM requested `COMM_SILENT_COMMUNICATION` and TcpIp modul reports `TCPIP_STATE_ONLINE` for the corresponding network handle
⌋

 During transition from `WAIT_ONLINE` to `WAIT_OFFLINE`
⌈
During the transition from `ETHSM_STATE_WAIT_ONLINE` to `ETHSM_STATE_WAIT_OFFLINE` EthSM shall call `EthIf_SetControllerMode` with `ETH_MODE_ACTIVE_TX_OFFLINE`
⌋

 After transition from `WAIT_ONLINE` to `WAIT_OFFLINE` - state change and ComM
⌈
After the successful transition from `ETHSM_STATE_WAIT_ONLINE` to `ETHSM_STATE_WAIT_OFFLINE` the Ethernet State Manager shall set the main state to `ETHSM_FULL_COMMUNICATION` and call `ComM_BusSM_ModeIndication` with communication mode `COMM_FULL_COMMUNICATION`.
⌋

### 34. 行为 in sub-state ETHSM_STATE_ONLINE
*原文标题：Behaviour in sub-state ETHSM_STATE_ONLINE*

Self transition `STATE_ONLINE`
⌈
If the EthSM statemachine is in state `ETHSM_STATE_ONLINE`, EthSMWakeupSleepOnDatalineEnabled is set to TRUE and ComM request `COMM_FULL_COMMUNICATION_WITH_WAKEUP_REQUEST`, then the controller mode of the corresponding EthIfCtrl shall be requested with `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST`.
⌋

### 35. Transition from sub-state ONLINE to WAIT_ONLINE

Transition from ONLINE to `WAIT_ONLINE`
⌈
If EthSMTcpIpUsed is TRUE, in the state `ETHSM_STATE_ONLINE` the state machine shall have a transition to `ETHSM_STATE_WAIT_ONLINE`, if the TcpIp modul reports `TCPIP_STATE_OFFLINE` for the corresponding network handle.
⌋

⌈
After the successful transition from `ETHSM_STATE_ONLINE` to `ETHSM_STATE_WAIT_ONLINE` the Ethernet State Manager shall set the main state to `ETHSM_NO_COMMUNICATION` and call the callback function `ComM_BusSM_ModeIndication` of the ComM with communication mode `COMM_NO_COMMUNICATION`.
⌋

### 36. Transition from sub-state ONLINE to WAIT_OFFLINE

Transition from ONLINE to `WAIT_OFFLINE`
⌈
In the state `ETHSM_STATE_ONLINE` the state machine shall do a transition to `ETHSM_STATE_WAIT_OFFLINE`, if the ComM requests `COMM_SILENT_COMMUNICATION` or `COMM_NO_COMMUNICATION` for the corresponding network handle.
⌋

Note: The transition is shown as sequence diagram in Figure .

⌈
During the transition between `ETHSM_STATE_ONLINE` and `ETHSM_STATE_WAIT_OFFLINE` triggered by `EthSM_RequestComMode` with `COMM_SILENT_COMMUNICATION`, the API `EthIf_SetControllerMode` shall be called with `ETH_MODE_ACTIVE_TX_OFFLINE`, if EthSMForwardSilentCommunicationEnabled is set to TRUE.
⌋

⌈
During the transition between `ETHSM_STATE_ONLINE` and `ETHSM_STATE_WAIT_OFFLINE` triggered by `EthSM_RequestComMode` with `COMM_NO_COMMUNICATION`, the API `TcpIp_RequestComMode` shall be called with `TCPIP_STATE_OFFLINE`.
⌋

### 37. Transition from sub-state ONLINE to ONHOLD

Transition from ONLINE to ONHOLD
⌈
In the state `ETHSM_STATE_ONLINE` the state machine shall have a transition to `ETHSM_STATE_ONHOLD`, if the Ethernet Interface reports `ETHTRCV_LINK_STATE_DOWN` for the corresponding network handle.
⌋

Note: The transition is shown as sequence diagram in Figure .

⌈
The transition from `ETHSM_STATE_ONLINE` to `ETHSM_STATE_ONHOLD` shall request the TcpIp state `TCPIP_STATE_ONHOLD` from the TcpIp module.
⌋

⌈
If the optional configuration parameter `ETHSM_E_LINK_DOWN` exists, `ETHSM_E_LINK_DOWN` with EventStatus `DEM_EVENT_STATUS_FAILED` shall be reported to the DEM module when switching from `ETHSM_STATE_ONLINE` to

`ETHSM_STATE_ONHOLD`.
⌋

### 38. 行为 in sub-state ETHSM_STATE_WAIT_OFFLINE
*原文标题：Behaviour in sub-state ETHSM_STATE_WAIT_OFFLINE*

Self transition `WAIT_OFFLINE`
⌈
In the state `ETHSM_STATE_WAIT_OFFLINE`, if ComM requests `COMM_NO_COMMUNICATION` for the corresponding network handle, EthSM shall call the API `TcpIp_RequestComMode` with `TCPIP_STATE_OFFLINE`.
⌋

 Self transition `WAIT_OFFLINE`
⌈
In the state `ETHSM_STATE_WAIT_OFFLINE`, if ComM requests `COMM_FULL_COMMUNICATION` for the corresponding network handle, EthSM shall set the controller mode to `ETH_MODE_ACTIVE` and call the API `TcpIp_RequestComMode` with `TCPIP_STATE_ONLINE`
⌋

 Self transition `WAIT_OFFLINE`
⌈
In the state `ETHSM_STATE_WAIT_OFFLINE`, if ComM requests `COMM_FULL_COMMUNICATION_WITH_WAKEUP_REQUEST` for the corresponding network handle and EthSMWakeupSleepOnDatalineEnabled is set to TRUE, EthSM shall set the controller mode to `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST` and call the API `TcpIp_RequestComMode` with `TCPIP_STATE_ONLINE`
⌋

### 39. Transition from sub-state WAIT_OFFLINE to OFFLINE

Transition from `WAIT_OFFLINE` to OFFLINE
⌈
If EthSMTcpIpUsed is TRUE, in the state `ETHSM_STATE_WAIT_OFFLINE` the state machine shall have a transition to `ETHSM_STATE_OFFLINE`, if the TcpIp modul reports `TCPIP_STATE_OFFLINE` for the corresponding network handle. If EthSMTcpIpUsed is FALSE, in the state `ETHSM_STATE_WAIT_OFFLINE` the state machine shall have a transition to `ETHSM_STATE_OFFLINE` unconditionally.
⌋

⌈
The transition from `ETHSM_STATE_WAIT_OFFLINE` to `ETHSM_STATE_OFFLINE` shall set the controller mode to `ETH_MODE_DOWN`.
⌋

⌈
After the successful transition from `ETHSM_STATE_WAIT_OFFLINE` to `ETHSM_STATE_OFFLINE` the Ethernet State Manager shall set the main state to `ETHSM_NO_COMMUNICATION` and call the callback function `ComM_BusSM_ModeIndication` of the ComM with communication mode `COMM_NO_COMMUNICATION`.
⌋

### 40. Transistion from sub-state WAIT_OFFLINE to ONLINE

Transition from `WAIT_OFFLINE` to ONLINE
⌈
In the state `ETHSM_STATE_WAIT_OFFLINE` the state machine shall have a transition to `ETHSM_STATE_ONLINE`, if the TcpIp module reports `TCPIP_STATE_ONLINE` for the corresponding network handle, ComM requested `COMM_FULL_COMMUNICATION` or `COMM_FULL_COMMUNICATION_WITH_WAKEUP_REQUEST`
⌋

### 41. 行为 in sub-state ETHSM_STATE_ONHOLD
*原文标题：Behaviour in sub-state ETHSM_STATE_ONHOLD*

Self transition ONHOLD
  Upstream requirements:
⌈
If the EthSM statmachine is in state `ETHSM_STATE_ONHOLD`, EthSMWakeupSleepOnDatalineEnabled is set to TRUE and ComM request `COMM_FULL_COMMUNICATION_WITH_WAKEUP_REQUEST`, then the controller mode of the corresponding EthIfCtrl shall be requested with `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST`.
⌋

### 42. Transistion from ONHOLD to ONLINE

Transition from ONHOLD to ONLINE
⌈
In the state `ETHSM_STATE_ONHOLD` the state machine shall have a transition to `ETHSM_STATE_ONLINE`, if the Ethernet interface reports `ETHTRCV_LINK_STATE_ACTIVE` for the corresponding network handle.
⌋

⌈
The transition from `ETHSM_STATE_ONHOLD` to `ETHSM_STATE_ONLINE` shall request the TcpIp state `TCPIP_STATE_ONLINE` from the TcpIp module.
⌋

⌈
If the optional configuration parameter `ETHSM_E_LINK_DOWN` exists, `ETHSM_E_LINK_DOWN` with EventStatus `DEM_EVENT_STATUS_PASSED` shall be reported to the DEM module when switching from `ETHSM_STATE_ONHOLD` to

`ETHSM_STATE_ONLINE`.
⌋

### 43. Transition from sub-state ONHOLD to WAIT_TRCVLINK

Transition from ONHOLD to `WAIT_TRCVLINK`
⌈
If EthSMTcpIpUsed is TRUE, in the state `ETHSM_STATE_ONHOLD` the state machine shall have a transition to `ETHSM_STATE_WAIT_TRCVLINK`, if the TcpIp modul reports `TCPIP_STATE_OFFLINE` for the corresponding network handle. If EthSMTcpIpUsed is FALSE, in the state `ETHSM_STATE_ONHOLD` the state machine shall have a transition to `ETHSM_STATE_WAIT_TRCVLINK` unconditionally.
⌋

Note: The transition is shown as sequence diagram in Figure .

⌈
After the successful transition from `ETHSM_STATE_ONHOLD` to E `ETHSM_STATE_WAIT_TRCVLINK` the Ethernet State Manager shall set the main state to `ETHSM_NO_COMMUNICATION` and call the callback function `ComM_BusSM_ModeIndication` of the ComM with communication mode `COMM_NO_COMMUNICATION`.
⌋

### 44. Transition from sub-state ONHOLD to OFFLINE

Transition from ONHOLD to OFFLINE
⌈
In the state `ETHSM_STATE_ONHOLD` the state machine shall have a transition to `ETHSM_STATE_OFFLINE`, if the ComM requests `COMM_NO_COMMUNICATION` for the corresponding network handle.
⌋

⌈
The transition from `ETHSM_STATE_ONHOLD` to `ETHSM_STATE_OFFLINE` shall set the controller mode to `ETH_MODE_DOWN`.
⌋

⌈
The transition from `ETHSM_STATE_ONHOLD` to `ETHSM_STATE_OFFLINE` shall request the TcpIp state `TCPIP_STATE_OFFLINE` from the TcpIp module.
⌋

⌈
After the successful transition from `ETHSM_STATE_ONHOLD` to `ETHSM_STATE_OFFLINE` the Ethernet State Manager shall set the main state to `ETHSM_NO_COMMUNICATION` and call the callback function `ComM_BusSM_ModeIndication` of the ComM with communication mode `COMM_NO_COMMUNICATION`.
⌋

### 45. Transition from sub-state ONHOLD to WAIT_OFFLINE

Transition from ONHOLD to `WAIT_OFFLINE`
⌈
In the state `ETHSM_STATE_ONHOLD` the state machine shall have a transition to `ETHSM_STATE_WAIT_OFFLINE`, if EthSMForwardSilentCommunicationEnabled is set to TRUE and if the ComM requested `COMM_SILENT_COMMUNICATION` and the Ethernet interface reports `ETHTRCV_LINK_STATE_ACTIVE` for the corresponding network handle.
⌋

 During transition from ONHOLD to `WAIT_OFFLINE`
⌈
During the transition from `ETHSM_STATE_ONHOLD` to `ETHSM_STATE_WAIT_OFFLINE` EthSM shall call `EthIf_SetControllerMode` with `ETH_MODE_ACTIVE_TX_OFFLINE` and `TcpIp_RequestComMode` with `TCPIP_STATE_ONLINE`
⌋

### 46. Information about 状态 transitions
*原文标题：Information about state transitions*

⌈
Evertime the EthSM statemachine enters a sub-state, the EthSM shall report the entered sub-state towards the BswM by calling `BswM_EthSM_CurrentState`(<entered sub-state>) (e.g. when entering sub-state `ETHSM_STATE_ONLINE`, EthSM shall call `BswM_EthSM_CurrentState`(`ETHSM_STATE_ONLINE`). The transistion to `ETHSM_STATE_OFFLINE` after initialization (see ) shall not be reported towards the BswM.
⌋

Note: The BswM need the information about the EthSM internal states (see )

Note: The ComM needs the information about the communication states, e.g. `COMM_FULL_COMMUNICATION` or `COMM_NO_COMMUNICATION`. The calls towards the ComM are specified explicitely within the sub-states.

### 47. Commercial Off The Shelf stack usage

A commercial off the shelf stack (COTS) shall be useable. The commercial stack is useable without adaptation (Variant 1 in Figure ). However, the Ethernet State Manager is not able to control the Ethernet Interface Controller and Ethernet transceiver in this case. The commercial stack may be adapted for usage with the Ethernet Interface. In this case, the Ethernet State Manager is able to control both Ethernet Interface Controller and Ethernet transceiver (Variant 2 in Figure ).

⌈
It is possible to set the Ethernet State Manager in a dummy mode. In this mode, the Ethernet State Manager doesn't support the API to the Ethernet interface. The API to the ComM is available but the functionality is deactivated. The function calls from the ComM will be answered with the return value E_OK.
⌋

Note: see chapter  configuration specification

### 48. 错误分类
*原文标题：Error classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 49. Development 错误
*原文标题：Development Errors*

Definition of development errors in module EthSM
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Invalid communication mode requested | ETHSM_E_INVALID_NETWORK_MODE | 0x01 |
| EthSM module was not initialized | ETHSM_E_UNINIT | 0x02 |
| Invalid pointer in parameter list | ETHSM_E_PARAM_POINTER | 0x03 |
| Invalid parameter in parameter list | ETHSM_E_INVALID_NETWORK_HANDLE | 0x04 |
| Invalid TcpIp state | ETHSM_E_INVALID_TCP_IP_MODE | 0x05 |
| Invalid parameter in parameter list | ETHSM_E_PARAM_CONTROLLER | 0x07 |

⌋

### 50. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors

### 51. Production 错误
*原文标题：Production Errors*

Link down detection
  Upstream requirements:
⌈
| Diagnostic Event (Error Name) | ETHSM_E_LINK_DOWN |
|---|---|
| Description | It shall be reported when the transceiver switches to "down" while communication has already been established and is requested because of communication request. |
| Failed condition | During transition from ETHSM_STATE_ONLINE to ETHSM_STATE_ONHOLD, which is triggered by EthSM_TrcvLinkStateChg(ETHTRCV_LINK_STATE_DOWN). |
| Passed condition | During transition from ETHSM_STATE_ONHOLD to ETHSM_STATE_ONLINE or transition from ETHSM_STATE_WAIT_TRCVLINK to ETHSM_STATE_WAIT_ONLINE, which are triggered by EthSM_TrcvLinkStateChg(ETHTRCV_LINK_STATE_ACTIVE). |

⌋

### 其余 40 章（内容从略，见纯文本全文）

52. Extended Production 错误
53. API 规范
54. Imported 类型
55. 类型定义
56. EthSM_NetworkModeStateType
57. 功能定义
58. EthSM_Init
59. EthSM_RequestComMode
60. EthSM_GetCurrentComMode
61. Callback 通知
62. EthSM_CtrlModeIndication
63. EthSM_TrcvLinkStateChg
64. EthSM_TcpIpModeIndication
65. EthSM_SleepIndication
66. Scheduled functions
67. EthSM_MainFunction
68. Expected 接口
69. Mandatory 接口
70. Optional 接口
71. 时序图
72. 配置规范
73. How to read this chapter
74. Containers and 配置 parameters
75. 配置 Tool
76. EthSM
77. EthSMGeneral
78. EthSMNetwork
79. EthSMDemEventParameterRefs
80. 发布信息
81. 附录
82. 不适用需求
83. Change history of AUTOSAR traceable items
84. Traceable item history of this document according to AUTOSAR Release R24-11
85. Added 规范 Items in R24-11
86. Changed 规范 Items in R24-11
87. Deleted 规范 Items in R24-11
88. Traceable item history of this document according to AUTOSAR Release R25-11
89. Added 规范 Items in R25-11
90. Changed 规范 Items in R25-11
91. Deleted 规范 Items in R25-11
