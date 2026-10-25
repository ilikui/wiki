# Specification of Communication Manager (`COMManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 079 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_COMManager_079\AUTOSAR_CP_SWS_COMManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_COMManager_079\AUTOSAR_CP_SWS_COMManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_COMManager_079\zzgen\CP_SWS_COMManager.complete.txt`

## 文档简介

The Communication Manager Module (COM Manager, ComM) is a component of the Basic Software (BSW). It is a Resource Manager, which encapsulates the control of the underlying communication services. The ComM module controls basic software modules relating to communication and not software components or runnable entities. The ComM module collects the bus communication access requests from communication requestors (see definition of term "User" in chapter ) and coordinates the bus communication access requests.

The purpose of the ComM module is:

Simplifying the usage of the bus communication stack for the user. This includes a simplified network management handling.

Coordinating the availability of the bus communication stack (allow sending and receiving of signals) of multiple independent software components on one ECU.

Comment: A user should not have any knowledge about the hardware (e.g. on which channel to communicate). A user simply requests a "Communication Mode" and ComM module switches the communication capability of the corresponding channel on/off.

Offer an API to disable sending of signals to prevent the ECU from (actively) waking up the communication bus.

Comment: On CAN every message wakes up the bus, on FlexRay it is only possible to wake up the bus with a so called wake-up pattern.

Controlling of more than one communication bus channel of an ECU by implementing a channel state machine for every channel.

Comment: The ComM module requests a Communication Mode from the corresponding Bus State Manager module. The actual bus states are controlled by the corresponding Bus State Manager module.

Offering the possibility to force an ECU that keeps the bus awake to the 'No Communication' mode (see section  for details).

Simplifying the resource management by allocating all resources necessary for the requested Communication Mode.

Comment: E.g. check if communication is allowed when a user requests 'Full Communication' mode, and prevent the ECU from shutdown during communication.

Further, the PNC extension allows users to request and keep awake a logical group of ECUs all over the network, a so-called "partial network cluster". The "PNC gateway" allows to span these (logical) network clusters over different, hierarchically structured physical busses and networks

## 模块依赖

A context view which shows the Communication Manager Module and the dependencies to other modules is shown in Figure :

The Communication Manager Module requests the communication capabilities, requested from the users, from the Bus State Manager modules.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The Communication Manager Module (COM Manager, ComM) is a component of the Basic Software (BSW). It is a Resource Manager, which encapsulates the control of the underlying communication services. The ComM module controls basic software modules relating to communication and not software components or runnable entities. The ComM module collects the bus communication access requests from communication requestors (see definition of term "User" in chapter ) and coordinates the bus communication access requests.

The purpose of the ComM module is:

Simplifying the usage of the bus communication stack for the user. This includes a simplified network management handling.

Coordinating the availability of the bus communication stack (allow sending and receiving of signals) of multiple independent software components on one ECU.

Comment: A user should not have any knowledge about the hardware (e.g. on which channel to communicate). A user simply requests a "Communication Mode" and ComM module switches the communication capability of the corresponding channel on/off.

Offer an API to disable sending of signals to prevent the ECU from (actively) waking up the communication bus.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Acronyms and 定义
*原文标题：Acronyms and definitions*

The glossary below includes acronyms and abbreviations relevant to the Communication Manager module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| BSW | Basic Software |
| BswM | Basic Software Mode Manager |
| ComM | Communication Manager |
| DCM | Diagnostic Communication Manager |
| Det | Default Error Tracer |
| EcuM | ECU State Manager module |
| I-PDU | Information Protocol Data Unit |
| NM | Network Management |
| PDU | Protocol Data Unit |
| SW-C | Software Component |
| VMM | Vehicle Message Matrix |
| OA TC10 | Open Alliance TC10 specification (see ) |
| IRA | Internal Request Array. This is a bit vector which contains the aggregated internal PNC requests per channel. (see also chapter  "Nm_UpdateIRA") |
| EIRA | External and Internal Request Array. This is a bit vector which contains the aggregated external and internal PNC requests |
| ERA | External Request Array. This is a bit vector which contains the aggregated external PNC requests. Each ComMChannel which has a ComMPncGatewayType set is has one corresponding ERA |
| ERAn | All External Request Arrays which are available in ComM, i.e. "n" ComMChannels where ComMPncGatewayType is set, result in "n" External Request Arrays in ComM |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Communication Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Communication Manager.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No limitations.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

A context view which shows the Communication Manager Module and the dependencies to other modules is shown in Figure :

The Communication Manager Module requests the communication capabilities, requested from the users, from the Bus State Manager modules.

### 10. 文件结构
*原文标题：File structure*

### 11. AUTOSAR Runtime Environment (RTE)

Every user can request a Communication Mode. The RTE propagates the user request to the ComM module and the Communication Mode indications from the ComM to the users (for details refer to ).

### 12. ECU 状态管理器 (EcuM)
*原文标题：ECU State Manager (EcuM)*

EcuM is responsible to validate wake-up events and send an indication to ComM if a wake-up is validated.

Communication allowed and shutdown of ECU is handled by EcuM together with BswM. (see  for details)

### 13. 基础软件模式管理器 (BswM)
*原文标题：Basic Software Mode Manager (BswM)*

The BswM realizes two functionalities Mode Arbitration and Mode Control to allow the application of an Application Mode Management and a Vehicle Mode Management.

The BswM propagates user requests to the ComM module, if configured in the action lists of BswM to be able to request ComM modes via BswM.

The BswM controls the PDU Groups in the AUTOSAR Communication Module (COM), if the call of `Com_IpduGroupControl` is configured in the action list.

  Upstream requirements:
⌈
ComM indicates all channel main state changes and all PNC state changes to the BswM.
⌋

If EcuM-Flex is used, BswM will indicate to ComM if communication is allowed or not.

### 14. NVRAM 管理器
*原文标题：NVRAM Manager*

The ComM module uses the NVRAM Manager to store and read non-volatile data. For details on initial values of the NVRAM data refer to Chapter .

Comment: The NVRAM Manager must be initialized after a power up or reset of the ECU. It must be initialized before ComM, as when ComM is initialized, ComM assumes that NVRAM is ready to be used, and that it can read back non-volatile configuration data. When ComM is de-initialized, it writes non-volatile data to NVRAM.

### 15. 诊断 Communication 管理器 (DCM)
*原文标题：Diagnostic Communication Manager (DCM)*

The DCM performs the scheduling of diagnostic PDUs. The DCM acts as a user by requesting Communication Mode `COMM_FULL_COMMUNICATION` via a "`DCM_ActiveDiagnostic`" indication if diagnostics shall be performed. The DCM does not provide an API to start/stop sending and receiving but guarantees that the communication capabilities are according to the ComM module Communication Modes.

### 16. LIN 状态管理器
*原文标题：LIN State Manager*

The LIN State Manager controls the actual states of the LIN bus that correspond to a Communication Mode of the ComM module. The ComM module requests a Communication Mode from the LIN State Manager and the LIN State Manager maps the Communication Mode to a bus state.

### 17. CAN 状态管理器
*原文标题：CAN State Manager*

The CAN State Manager controls the actual states of the CAN bus that correspond to a Communication Mode of the ComM module. The ComM module requests a Communication Mode from the CAN State Manager and the CAN State Manager maps the Communication Mode to a bus state.

### 18. FlexRay 状态管理器
*原文标题：FlexRay State Manager*

The FlexRay State Manager controls the actual states of the FlexRay bus that correspond to a Communication Mode of the ComM module. The ComM module requests a Communication Mode from the FlexRay State Manager and the FlexRay State Manager maps the Communication Mode to a bus state.

### 19. Ethernet 状态管理器
*原文标题：Ethernet State Manager*

The Ethernet State Manager controls the actual states of the Ethernet bus that correspond to a Communication Mode of the ComM module. The ComM module requests a Communication Mode from the Ethernet State Manager and the Ethernet State Manager maps the Communication Mode to a bus state.

### 20. 网络管理 (NM)
*原文标题：Network Management (NM)*

The ComM module uses the NM to synchronize the control of communication capabilities across the network (synchronous start-up and shutdown). Additionally the status information about PNCs is exchanged via dedicated APIs between ComM and Nm.

### 21. Default 错误 Tracer (DET)
*原文标题：Default Error Tracer (DET)*

The DET (see )provides services for reporting development, runtime, and transient errors. (see Section )

### 22. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| It shall be possible to create an AUTOSAR ECU out of modules provided as source code and modules provided as object code, even mixed |  |  |
| BSW Modules shall support pre-co |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 功能规范
*原文标题：Functional specification*

The Communication Manager (ComM) module simplifies the resource management for the users, whereat users may be runnable entities, SW-Cs, the BswM (e.g. SW-C request via BswM) or DCM (communication needed to diagnostic purpose).

  Upstream requirements:
⌈
The ComM shall provide three different Communication Modes. The highest Communication Mode shall be `COMM_FULL_COMMUNICATION`. The lowest Communication Mode shall be `COMM_NO_COMMUNICATION`.
⌋

  Upstream requirements:
⌈
For a user it shall only be possible to request the Communication Modes `COMM_NO_COMMUNICATION` and `COMM_FULL_COMMUNICATION` (see `ComM_RequestComMode`(), ).
⌋

Rationale for :

* The Communication Mode `COMM_SILENT_COMMUNICATION` and sub-modes/sub-states are only necessary for synchronization with AUTOSAR NM.
* The Communication Mode `COMM_FULL_COMMUNICATION_WITH_WAKEUP_REQUEST` is only necessary to request the lower layer to trigger a wake-up on the network (e.g. Ethernet hardware compliant to ). This mode could not be requested by a user.

  Upstream requirements:
⌈
The Communication Mode `COMM_SILENT_COMMUNICATION` shall only be used for network synchronization.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Partial 网络 Cluster 管理
*原文标题：Partial Network Cluster Management*

The ComM offers users the option to wake and keep awake so-called "partial network cluster" (PNC). A PNC is a (logical) group of ECUs which have to be active at the same time to realize some distributed functionality. If PNC-enabled gateways are used, a PNC can span the whole network (different busses on different topology levels of the network hierarchy). Without the PN functionality, NM messages can only wake and keep awake whole busses.

### 25. 概述
*原文标题：Overview*

ComM implements a state machine for each partial network cluster (PNC) to represent the communication mode of a PNC.

Each PNC has its own state. The state definitions are related to the states of ComM for a simple mapping.

ComM users are used to request and release the PNCs.

The status of all PNCs on the nodes of a system channel is exchanged within the so-called PNC bit vector via a network management message (NM message).

Additional information regarding the partial network cluster functionality can be found in document Guide to Mode Management .

### 26. Partial 网络 Cluster 管理 Functionality
*原文标题：Partial Network Cluster Management Functionality*

Upstream requirements:
⌈
PNC functionality shall only exist if the parameter ComMPncSupport is set to TRUE. (see ).
⌋

 Enabling or disabling of the PNC functionality shall be post-build configurable
  Upstream requirements: ,
⌈
Enabling or disabling of the PNC functionality shall be post-build configurable using the parameter ComMPncEnabled (see ).
⌋

 Enabling or disabling of the PNC functionality at post-build time shall be exclusively allowed for CAN and FlexRay
⌈
Enabling or disabling of the PNC functionality at post-build time shall be allowed for ComMChannels that have ComMBusType set to `COMM_BUS_TYPE_CAN` or `COMM_BUS_TYPE_FR`.
⌋

Comment: The ComM module notifies the BswM about every state change of the PNC state machine by calling `BswM_ComM_CurrentPNCMode` (refer to ).

  Upstream requirements:
⌈
For exchanging PNC status information between ComM and Nm, bit vectors shall be used. Such a bit vector is called "PNC bit vector" and contain a maximum of 504 bits.
⌋

Comment: The PNC bit vector is provided as a reference to an array of type uint8 to the ComM within the dedicated APIs. Each bit in the PNC bit vector represents the status of a particular PNC.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. ComM PNC 状态 machine
*原文标题：ComM PNC state machine*

Execute PNC functionality upfront to ComMChannel related actions
  Upstream requirements:
⌈
If the PNC functionality is enabled using the configuration parameter ComMPncEnabled set to TRUE, all actions related to PNC changes shall be executed before the channel related actions (channel related actions, see Chapter 7.3).
⌋

  Upstream requirements:
⌈
For every Partial Network Cluster, only one PNC state machine shall be implemented (i.e. one PNC state machine per PNC, independent of the amount of ComMChannels).
⌋

  Upstream requirements:
⌈
The ComM module shall support up to 504 PNC state machines.
⌋

  Upstream requirements:
⌈
The PNC state machine shall consist of the two main states `COMM_PNC_FULL_COMMUNICATION` and `COMM_PNC_NO_COMMUNICATION`.
⌋

  Upstream requirements:
⌈
The PNC main state `COMM_PNC_FULL_COMMUNICATION` shall consist of the sub states `COMM_PNC_PREPARE_SLEEP`, `COMM_PNC_READY_SLEEP` and `COMM_PNC_REQUESTED`.
⌋

  Upstream requirements:
⌈
Every state change (listed within the `ComM_PncModeType`), excluding entering of the main state `COMM_PNC_NO_COMMUNICATION` coming from PowerOff, shall be notified by the API call `BswM_ComM_CurrentPNCMode` with the entered PNC state.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 行为 in PNC main 状态 COMM_PNC_NO_COMMUNICATION
*原文标题：Behavior in PNC main state COMM_PNC_NO_COMMUNICATION*

Upstream requirements:
⌈
The PNC main state `COMM_PNC_NO_COMMUNICATION` shall be the default PNC state from power off.
⌋

The main state `COMM_PNC_NO_COMMUNICATION` is the target state as long as the PNC is neither requested ECU internally nor requested externally.

  Upstream requirements:
⌈
If the API `ComM_EcuM_WakeUpIndication`() is called in PNC state `COMM_PNC_NO_COMMUNICATION`, the configuration switch ComMSynchronousWakeUp is set to TRUE (see ) and for all PNCs that reference at least one ComMChannel via ComMChannelPerPnc (see ), the PNC main state `COMM_PNC_NO_COMMUNICATION` shall be left and the PNC sub state `COMM_PNC_PREPARE_SLEEP` shall be entered.
⌋

  Upstream requirements:
⌈
If the API `ComM_EcuM_WakeUpIndication`() is called in PNC state `COMM_PNC_NO_COMMUNICATION`, and the configuration switch ComMSynchronousWakeUp is set to FALSE, the PNC main state `COMM_PNC_NO_COMMUNICATION` shall be the current state.
⌋

Comment: In case of asynchronous wake up, the PNC state shall stay in `COMM_PNC_NO_COMMUNICATION` until the PNC request is received (PNC bit in EIRA/ERAn is set to '1').

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. PNC gateway related 需求
*原文标题：PNC gateway related requirements*

Upstream requirements: ,
⌈
When in main state `COMM_PNC_NO_COMMUNICATION` at least one PNC bit representing this PNC in ERAn changes to '1', then the main state `COMM_PNC_NO_COMMUNICATION` shall be left and the sub state `COMM_PNC_REQUESTED` shall be entered under the following conditions:

* the parameter ComMPncGatewayEnabled (see ) is set to TRUE
* this PNC references at least one channel via ComMChannelPerPnc (see ) and all referenced channels have the ComMPncGatewayType set
⌋

Note: All the channels shall have GW type set which are referred by the PNC irrespective of the type of the reference i.e ComMChannelPerPnc or ComMChannelPerTxOnlyPnc.

### 30. On entry of PNC main 状态 COMM_PNC_NO_COMMUNICATION from PowerOff
*原文标题：On entry of PNC main state COMM_PNC_NO_COMMUNICATION from PowerOff*

Note: After switching on the power supply, main state `COMM_PNC_NO_COMMUNICATION` is entered from PowerOff (see )

### 31. 行为 in PNC main 状态 COMM_PNC_FULL_COMMUNICATION
*原文标题：Behavior in PNC main state COMM_PNC_FULL_COMMUNICATION*

Upstream requirements:
⌈
As long as a specific PNC is in state `COMM_PNC_FULL_COMMUNICATION` all ComMChannels which are referenced by this PNC via ComMChannelPerPnc (see ) shall be in `COMM_FULL_COMMUNICATION`.
⌋

### 32. On entry of PNC sub 状态 COMM_PNC_REQUESTED
*原文标题：On entry of PNC sub state COMM_PNC_REQUESTED*

Upstream requirements:
⌈
When entering the PNC sub state `COMM_PNC_REQUESTED` from `COMM_PNC_NO_COM` or `COMM_PNC_PREPARE_SLEEP`, this PNC reference at least one ComMChannel via ComMChannelPerPnc (see ) and ComMPncWakeupSleepRequestEnabled of this PNC is set to TRUE, `BswM_ComM_CurrentPNCMode` shall be called with `COMM_PNC_REQUESTED_WITH_WAKEUP_REQUEST`, instead of calling `BswM_ComM_CurrentPNCMode` with `COMM_PNC_REQUESTED`.
⌋

Note: Notification towards the BswM with `COMM_PNC_REQUESTED_WITH_WAKEUP_REQUEST` is used for Ethernet switch port switching to trigger a wake-up on the network where the used Ethernet hardware is compatible to the OA TC10 (see )

  Upstream requirements: ,
⌈
When entering the PNC sub state `COMM_PNC_REQUESTED`, then the ComM module shall set the PNC bit with value '1' of the PNC bit representing this PNC within the IRA and forward the aggregated internal PNC requests to each channel which is referenced this PNC by calling `Nm_UpdateIRA`(<channel>, <IRA>) under either of the following conditions:

* ComMPncGatewayEnabled is set to FALSE
* ComMPncGatewayType is not set on any of the ComMChannels referenced by this PNC
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. PNC gateway related 需求
*原文标题：PNC gateway related requirements*

Upstream requirements: ,
⌈
When entering the PNC sub state `COMM_PNC_REQUESTED` and ComMPncGatewayEnabled is set to TRUE, then ComM shall set the PNC bit with value '1' of the PNC bit representing this PNC within the IRA on all referenced ComMChannels where ComMPncGatewayType is set to `COMM_GATEWAY_TYPE_ACTIVE` and forward the aggregated internal PNC request accordingly to those ComMChannels by calling `Nm_UpdateIRA`(<channel>, <IRA>)
⌋

### 34. 行为 in PNC sub 状态 COMM_PNC_REQUESTED
*原文标题：Behavior in PNC sub state COMM_PNC_REQUESTED*

Upstream requirements:
⌈
When all ComMUsers assigned to this PNC request "No Communication", the sub state `COMM_PNC_REQUESTED` shall be left and the sub state `COMM_PNC_READY_SLEEP` shall be entered, if ComMPncGatewayEnabled is set to FALSE or ComMPncGatewayType is not set on all channels which are referenced by this PNC.
⌋

Note: As long as at least one ComMUser assigned to this PNC requests "Full Communication", `COMM_PNC_REQUESTED` will be the current PNC state. Please refer to the following requirements.

  Upstream requirements:
⌈
In sub state `COMM_PNC_REQUESTED` when ComMPncGatewayEnabled is set to FALSE and at least one ComMUser assigned to a specific PNC requests "Full Communication", then ComM shall request `COMM_FULL_COMMUNICATION` of those ComMChannels which are referenced via ComMChannelPerTxOnlyPnc by this PNC.
⌋

  Upstream requirements:
⌈
In sub state `COMM_PNC_REQUESTED` when ComMPncGatewayEnabled is set to FALSE and all ComMUsers assigned to a specific PNC requests "No Communication", then ComM shall request `COMM_NO_COMMUNICATION` of those ComMChannels which are referenced via ComMChannelPerTxOnlyPnc by this PNC.
⌋

### 35. PNC gateway related 需求
*原文标题：PNC gateway related requirements*

Upstream requirements:
⌈
The sub state `COMM_PNC_REQUESTED` shall be left and the sub state `COMM_PNC_READY_SLEEP` shall be entered under the following conditions:

* all ComMUsers assigned to this PNC request "No Communication"
* the parameter ComMPncGatewayEnabled is set to TRUE
* at least one ComMChannel is referenced via ComMChannelPerPnc (see ) by this PNC
* all ComMChannels referenced by this PNC have ComMPncGatewayType parameter set
* the PNC bit representing this PNC equals to '0' in ERAn
⌋

  Upstream requirements: ,
⌈
The sub state `COMM_PNC_REQUESTED` shall be left and the sub state `COMM_PNC_READY_SLEEP` shall be entered under the following conditions:

* all ComMUsers assigned to this PNC request "No Communication"
* the parameter ComMPncGatewayEnabled is set to TRUE
* all ComMChannels referenced by this PNC have ComMPncGatewayType parameter NOT set
⌋

  Upstream requirements:
⌈
In sub state `COMM_PNC_REQUESTED` when ComMPncGatewayEnabled is set to TRUE and at least one ComMUser assigned to a specific PNC requests "Full Communication", then ComM shall set the PNC bit representing this specific PNC to value '1' within the IRA of those ComMChannels

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. On entry PNC sub 状态 COMM_PNC_READY_SLEEP
*原文标题：On entry PNC sub state COMM_PNC_READY_SLEEP*

Upstream requirements: ,
⌈
When entering the PNC sub state `COMM_PNC_READY_SLEEP` from `COMM_PNC_REQUESTED`, then the PNC bit representing this PNC within the IRA shall be set to value '0' and the aggregated internal PNC requests shall be forwarded to each channel which is referenced by this PNC by calling `Nm_UpdateIRA`(<channel>, <IRA>)
⌋

  Upstream requirements:
⌈
When entering the PNC sub state `COMM_PNC_READY_SLEEP` from `COMM_PNC_REQUESTED`, ComM shall release the `COMM_FULL_COMMUNICATION` request for all configured ComM channels referenced via ComMChannelPerPnc (see ) by this PNC
⌋

### 37. 行为 in PNC sub 状态 COMM_PNC_READY_SLEEP
*原文标题：Behavior in PNC sub state COMM_PNC_READY_SLEEP*

As long as the PNC is requested (i.e. the PNC bit representing this PNC within EIRA equals '1') and no ComMUser assigned to this PNC requests "Full Communication", `COMM_PNC_READY_SLEEP` will be the current state.

  Upstream requirements:
⌈
If the PNC is released (i.e. the PNC bit representing this PNC within EIRA equals '0'), the sub state `COMM_PNC_READY_SLEEP` shall be left and the sub state `COMM_PNC_PREPARE_SLEEP` shall be entered.
⌋

  Upstream requirements: , ,
⌈
The sub state `COMM_PNC_READY_SLEEP` shall be left and the sub state `COMM_PNC_REQUESTED` shall be entered if at least one ComMUser assigned to this PNC requests "Full Communication".
⌋

### 38. PNC gateway related requirement

Upstream requirements:
⌈
When in sub state `COMM_PNC_READY_SLEEP` at least one PNC bit representing this PNC in ERAn changes to '1', the sub state `COMM_PNC_READY_SLEEP` shall be left and the sub state `COMM_PNC_REQUESTED` shall be entered under the following conditions:

* the parameter ComMPncGatewayEnabled (see ) is set to TRUE,
* this PNC references at least one channel via ComMChannelPerPnc (see ) and the referenced channels have the ComMPncGatewayType set
⌋

### 39. On entry of PNC sub 状态 COMM_PNC_PREPARE_SLEEP
*原文标题：On entry of PNC sub state COMM_PNC_PREPARE_SLEEP*

Upstream requirements:
⌈
If the sub state `COMM_PNC_PREPARE_SLEEP` is entered, the timer ComMPncPrepareSleepTimer (see ) shall be started with the configured initial value.
⌋

### 40. 行为 in PNC sub 状态 COMM_PNC_PREPARE_SLEEP
*原文标题：Behavior in PNC sub state COMM_PNC_PREPARE_SLEEP*

As long as the timer ComMPncPrepareSleepTimer (see ) is running and no changes in ComMUser, EIRA or ERAn occur, `COMM_PNC_PREPARE_SLEEP` will be the current state.

  Upstream requirements:
⌈
When the timer ComMPncPrepareSleepTimer (see ) expires, the PNC sub state `COMM_PNC_PREPARE_SLEEP` shall be left and the PNC main state `COMM_PNC_NO_COMMUNICATION` shall be entered.
⌋

  Upstream requirements:
⌈
When in `COMM_PNC_PREPARE_SLEEP` at least one ComMUser assigned to this PNC requests "Full Communication", the `COMM_PNC_PREPARE_SLEEP` state shall be left. The timer ComMPncPrepareSleepTimer shall be stopped and the sub state `COMM_PNC_REQUESTED` state shall be entered.
⌋

  Upstream requirements:
⌈
When in `COMM_PNC_PREPARE_SLEEP` the PNC bit representing this PNC within EIRA changes to '1' and this PNC references at least one channel via ComMChannelPerPnc (see ), the sub state `COMM_PNC_PREPARE_SLEEP` shall be left. The timer ComMPncPrepareSleepTimer shall be stopped and the sub state `COMM_PNC_READY_SLEEP` shall be entered.
⌋

### 41. PNC gateway related 需求
*原文标题：PNC gateway related requirements*

Upstream requirements: ,
⌈
When in sub state `COMM_PNC_PREPARE_SLEEP` at least one PNC bit representing this PNC in ERAn changes to '1', then sub state `COMM_PNC_PREPARE_SLEEP` shall be left, `COMM_PNC_REQUESTED` shall be entered and timer ComMPncPrepareSleepTimer shall be stopped under the following conditions:

* the parameter ComMPncGatewayEnabled (see ) is set to TRUE,
* this PNC references at least one channel via ComMChannelPerPnc (see ) and the referenced channels have the ComMPncGatewayType set
⌋

### 42. PNC Gateway

The PNC Gateway feature is used to span (logical) partial network clusters across bus / communication channel boundaries, "gatewaying" PNC requests from one bus/network to the others. (Therefore, for a PNC gateway to exist, it needs to be connected to multiple physical channels.)

To do so, the PNC gateway configuration contains information for each PNC which physical channels are required to reach all members of that PNC (PNC-to-channel-mapping, see ).

The PNC gateway collects PNC requests from all of its multiple active channels (which are called active since it actively keeps them awake, if required) and aggregates them. The PNC gateway sends the aggregated PNC state in the network to all its active channels, which causes all nodes to have the same view on the global PNC request state as the gateway.

If the PNC gateway is not the topmost PNC gateway in the network hierarchy, the PNC gateway will also send the aggregated PNC request state of all subordinate nodes, plus its own internal request state, to its superior PNC coordinator, which is connected via the so-called "passive" channel (which is called passive because it's the opposite of active).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. 支持 for not coordinated PNCs assigned to 多 channels
*原文标题：Support for not coordinated PNCs assigned to multiple channels*

Comment: When a Partial Network is assigned to more than one ComMChannel than this PNC is coordinated either on all affected ComMChannels or not at all (see  ).

Note: If PNCs are assigned to different ComMChannels and those ComMChannels are not coordinated by a PNC gateway, then the network topology and communication design has to ensure, that the affected ComMChannels are requested and released to the same point in time. If PNCs are used, an application should not care about ComMChannel states, and additionally, ComM will not take care about ComMChannel states for this use case, since the PNC coordination for those ComMChannels is not performed. Or in other words, if a PNC is requested (passively) then also all referenced ComMChannels shall be requested (passively), because an application expects that all ComMChannels assigned to this PNCs reside in `COMM_FULL_COMMUNICATION`.

 depict an example for a PNC gateway (Node2) with not coordinated ComMChannels

### 44. Active PNC Gateway

Note: Even if the configuration parameter ComMPncGatewayEnabled (see ) is TRUE and the parameter ComMPncGatewayType is set to `COMM_GATEWAY_TYPE_ACTIVE` for a ComMChannel (see ), the active PNC gateway still behaves as shown in .

Comment: An active PNC gateway on a system channel shall be the last node on a system channel that releases a PNC.

Comment: If the PNC bit for a PNC is equal to zero in all ERAn, no other node than the PNC gateway is requesting the PNC.

### 45. Passive PNC Gateway

Comment: The passively coordinated channels exist only if they are connected to more than one PNC gateway. If the PNC gateway functionality of ComM is enabled (ComMPncGatewayEnabled is set to TRUE) ComM channels mapped to this PNC gateway can be set to type active or passive (`COMM_GATEWAY_TYPE_ACTIVE` or `COMM_GATEWAY_TYPE_PASSIVE`). If a ComM channel is mapped to two different PNC gateways, only one gateway coordinates this channel actively, while the other passively. That means, a PNC gateway is always mapped to at least one ComM channel type active and may be mapped to one or some ComM channels type passive.

Comment: A PNC gateway requests the PNC if a local ComM user requests the PNC or at least one PNC bit within ERA originate from the actively coordinated system channels of a passive PNC gateway is not equal to 0.

Comment to  and : A PNC gateway calculates the PNCs bit value in the ERA Tx PNC bit vectors to be sent for a passively coordinated channel, in the same manner as the PNC bit value in ERA for an actively coordinated channel, but sets the PNC's bit to '0' according to the rules of  and .

### 46. Synchronized PNC 关机
*原文标题：Synchronized PNC shutdown*

A PN topology always reflects a hierarchical topology, where the so-called top-level PNC coordinator is located on the highest level. On the subordinated levels multiple so-called intermediate PNC coordinators and PNC leaf nodes could reside.

Figure 5 shows PNC-Coor1 as top-level PNC coordinator, PNC-Coor2 as intermediate PNC coordinator, Node1 and Node2 as PNC leaf node which resides on the lowest level of the PN topology. For example, if Node1 requests PNC1, then the PNC request is propagated across the PN to the top-level PNC coordinator. The top-level PNC coordinator "takes over" the PNC request and ensures that the PNC request is distributed across the PN. Therefore the top-level PNC coordinator mirrors back the PNC request on channel 1 (PNC-Coor1.Ch1) and forward the PNC request to channel 2 (PNC-Coor2.Ch2). If for example Node1 releases PNC1 and no other ECU in the network has PNC1 requested, then Node1 will still receive Nm frames from the top-level PNC coordinator where the PNC1 is requested. The release of the PNC leaf node is not forwarded immediately across the PN topology from the PNC leaf node to the top-level PNC coordinator.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 212 章（内容从略，见纯文本全文）

47. 支持 for 多 top-level PNC coordinators
48. Dynamic PNC-to-channel-mapping (optional)
49. Update PNC-to-channel-mapping
50. PNC Membership Forwarding
51. Partial Networking 配置 Hints
52. Bi-directional PNC 处理
53. Uni-directional PNC 处理
54. Transmission only PNC 处理
55. ComM channel 状态 machine
56. ComM managed and managing channels
57. 行为 in 状态 COMM_NO_COMMUNICATION
58. COMM_NO_COM_NO_PENDING_REQUEST sub-state
59. COMM_NO_COM_REQUEST_PENDING sub-state
60. 行为 in 状态 COMM_SILENT_COMMUNICATION
61. 行为 in 状态 COMM_FULL_COMMUNICATION
62. COMM_FULL_COM_NETWORK_REQUESTED sub-state
63. COMM_FULL_COM_READY_SLEEP sub-state
64. ComM User to PNC Relations
65. Extended functionality
66. Communication inhibition
67. Manage communication inhibition
68. Bus wake up inhibition
69. Limit to COMM_NO_COMMUNICATION 模式
70. 示例 for communication inhibition 功能
71. Wake up inhibition - 示例 1
72. Wake up inhibition - 示例 2
73. Limit to COMM_NO_COMMUNICATION - 示例 1
74. Limit to COMM_NO_COMMUNICATION - 示例 2
75. Bus communication 管理
76. 网络管理 dependencies
77. Bus 错误管理
78. 网络 Start Indication
79. Test 支持需求
80. Inhibited Full Communication Request Counter
81. 错误分类
82. Development 错误
83. Runtime 错误
84. Production 错误
85. Extended Production 错误
86. Communication 管理器模块服务
87. 架构
88. Use Cases
89. SW-Cs does not care about the ComM 模块 at all
90. its communication 系统的SW-Cs only cares about the 状态
91. SW-Cs explicitly wants to take influence on its communication 状态
92. SW-C wants to interact directly with physical channels activate ECU 模式 Limitation
93. Ports and Port 接口的规范
94. 类型 used by the 接口
95. Ports and Port 接口 for User Requests
96. 通用 Approach
97. 数据类型
98. Port 接口 ComM_UserRequest
99. the Communication 管理器模块的Ports and Port 接口 for the current 模式
100. 通用 approach
101. Port 接口 ComM_CurrentMode
102. Ports and Port 接口 for the ComM users currently requesting COMM_FULL_COMMUNICATION
103. 通用 approach
104. 数据类型
105. Port 接口 ComM_CurrentChannelRequest
106. Ports and Port 接口 for ECU 模式 Limitation
107. 通用 approach
108. Port 接口 ComM_ECUModeLimitation
109. Ports and Port 接口 for Channel Wake up
110. 通用 approach
111. Port 接口 ComM_ChannelWakeup
112. Ports and Port 接口 for 接口 Channel Limitation
113. 通用 approach
114. Port 接口 ComM_ChannelLimitation
115. the 服务 of the Communication 管理器模块的定义
116. Runnables and Entry points
117. Internal 行为
118. Header 文件 to be included by the Communication 管理器模块
119. Multicore Distribution
120. Non 功能性需求
121. 安全事件
122. API 规范
123. Imported 类型
124. Standard 类型
125. 类型定义
126. ComM_InitStatusType
127. ComM_PncModeType
128. ComM_StateType
129. ComM_ConfigType
130. 功能定义
131. ComM_Init
132. ComM_DeInit
133. ComM_GetStatus
134. ComM_GetInhibitionStatus
135. ComM_RequestComMode
136. ComM_GetMaxComMode
137. ComM_GetRequestedComMode
138. ComM_GetCurrentComMode
139. ComM_GetCurrentPNCComMode
140. ComM_GetPncToChannelMapping
141. ComM_UpdatePncToChannelMapping
142. ComM_ResetPncToChannelMapping
143. ComM_PnLearningRequest
144. ComM_UpdatePncMembership
145. ComM_PreventWakeUp
146. ComM_LimitChannelToNoComMode
147. ComM_LimitECUToNoComMode
148. ComM_ReadInhibitCounter
149. ComM_ResetInhibitCounter
150. ComM_SetECUGroupClassification
151. ComM_GetVersionInfo
152. Callback 通知
153. AUTOSAR 网络管理接口
154. ComM_Nm_NetworkStartIndication
155. ComM_Nm_NetworkMode
156. ComM_Nm_PrepareBusSleepMode
157. ComM_Nm_BusSleepMode
158. ComM_Nm_RestartIndication
159. ComM_Nm_RepeatMessageLeftIndication
160. ComM_Nm_PncLearningBitIndication
161. ComM_Nm_ForwardSynchronizedPncShutdown
162. ComM_Nm_UpdateEIRA
163. ComM_Nm_UpdateERA
164. AUTOSAR 诊断 Communication 管理器接口
165. ComM_DCM_ActiveDiagnostic
166. ComM_DCM_InactiveDiagnostic
167. AUTOSAR ECU 状态管理器接口
168. ComM_EcuM_WakeUpIndication
169. ComM_EcuM_PNCWakeUpIndication
170. AUTOSAR ECU 状态管理器 and 基础软件模式管理器接口
171. ComM_CommunicationAllowed
172. Bus 状态管理器接口
173. ComM_<Bus>SM_ModeIndication
174. ComM_<Bus>SM_BusSleepMode
175. Scheduled functions
176. ComM_MainFunction
177. Expected 接口
178. Mandatory 接口
179. AUTOSAR NVRAM 管理器模块
180. AUTOSAR Bus 状态管理器
181. AUTOSAR 网络管理接口
182. AUTOSAR 诊断 Communication 管理器模块
183. AUTOSAR RTE 接口 provided by RTE to ComM for the SW-C
184. 基础软件模式管理器 (BswM)
185. Optional 接口
186. Configurable 接口
187. 服务接口
188. Sender-Receiver-Interfaces
189. ComM_CurrentChannelRequest
190. Client-Server-Interfaces
191. ComM_ChannelLimitation
192. ComM_ChannelWakeup
193. ComM_ECUModeLimitation
194. ComM_UserRequest
195. ComM_PncToChannelMapping
196. ComM_DynamicPncToChannelMapping
197. Mode-Switch-Interfaces
198. ComM_CurrentMode
199. Implementation 数据类型
200. ComM_InhibitionStatusType
201. ComM_ModeType
202. ComM_UserHandleType
203. ComM_UserHandleArrayType
204. ComM_UserHandleSubArrayType
205. Ports
206. ComM_CL
207. ComM_CR
208. ComM_CW
209. ComM_modeLimitation
210. ComM_UM
211. ComM_UR
212. ComM_PncToChannelMapping
213. ComM_DynamicPncToChannelMapping
214. ModeDeclarationGroups
215. ComMMode
216. 时序图
217. Transmission and Reception start (CAN)
218. Passive 唤醒 (CAN)
219. 网络关机 (CAN)
220. Communication request
221. Synchronized PNC 关机
222. 配置规范
223. How to read this chapter
224. Containers and 配置 parameters
225. ComM
226. ComMGeneral
227. ComMConfigSet
228. ComMUser
229. ComMChannel
230. ComMNetworkManagement
231. ComMUserPerChannel
232. ComMPnc
233. 发布信息
234. 附录
235. 不适用需求
236. Change history of AUTOSAR traceable items
237. Traceable item history of this document according to AUTOSAR Release R22-11
238. Traceable item history of this document according to AUTOSAR Release R23-11
239. Added 规范 Items in R23-11
240. Changed 规范 Items in R23-11
241. Deleted 规范 Items in R23-11
242. Added Constraints in R23-11
243. Changed Constraints in R23-11
244. Deleted Constraints in R23-11
245. Traceable item history of this document according to AUTOSAR Release R24-11
246. Added 规范 Items in R24-11
247. Changed 规范 Items in R24-11
248. Deleted 规范 Items in R24-11
249. Added Constraints in R24-11
250. Changed Constraints in R24-11
251. Deleted Constraints in R24-11
252. Traceable item history of this document according to AUTOSAR Release R25-11
253. Added 规范 Items in R25-11
254. Changed 规范 Items in R25-11
255. Deleted 规范 Items in R25-11
256. Added Constraints in R25-11
257. Changed Constraints in R25-11
258. Deleted Constraints in R25-11
