# Specification of LIN State Manager (`LINStateManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 255 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_LINStateManager_255\AUTOSAR_CP_SWS_LINStateManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_LINStateManager_255\AUTOSAR_CP_SWS_LINStateManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_LINStateManager_255\zzgen\CP_SWS_LINStateManager.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module LIN State Manager (LinSM). The LinSM together with the LIN Interface, LIN driver, LIN Transceiver driver forms the complete LIN protocol.

The LIN State Manager is designed to be hardware independent.

The LinSM is dependent on upper module Communication Manager (ComM) and lower module LIN Interface  (LinIf).

It is assumed that the reader is familiar with the ISO 17987 specification. This document will not describe functionality already described in the ISO 17987 specification.

Note that figures in this document are not regarded as requirements. All requirements are described in text prefixed with a requirement tag (e.g. LINSM042). Text not prefixed with a requirement shall be seen as informative text.

## 模块依赖

This section describes the relations to other modules within the basic software. It describes the services that are used from these modules. Figure  shows the modules that are required or optional for the realization of the LinSM module. The figure is complete but is not regarded as requirement.

To be able for the LinSM module to operate the following modules will be interfaced:

  Upstream requirements:
⌈
LIN Interface - LinIf
⌋

  Upstream requirements:
⌈
Diagnostic Event Manager - DEM
⌋

  Upstream requirements:
⌈
Default Error Tracer - DET
⌋

  Upstream requirements:
⌈
Communication Manager - ComM
⌋

  Upstream requirements:
⌈
BSW Mode Manager - BswM
⌋

Note that modules that are using the interface (except callbacks) from this module are not listed.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module LIN State Manager (LinSM). The LinSM together with the LIN Interface, LIN driver, LIN Transceiver driver forms the complete LIN protocol.

The LIN State Manager is designed to be hardware independent.

The LinSM is dependent on upper module Communication Manager (ComM) and lower module LIN Interface  (LinIf).

It is assumed that the reader is familiar with the ISO 17987 specification. This document will not describe functionality already described in the ISO 17987 specification.

Note that figures in this document are not regarded as requirements. All requirements are described in text prefixed with a requirement tag (e.g. LINSM042). Text not prefixed with a requirement shall be seen as informative text.

### 2. Architectural 概述
*原文标题：Architectural overview*

The Layered Software Architecture  positions the LinSM within the BSW architecture as shown below.

### 3. 功能概述
*原文标题：Functional overview*

The LinSM is responsible for the control flow of the LIN Bus.

This means:

* Switching schedule tables when requested by the upper layer(s) (for LIN master node only).
* Go to sleep and wake up handling, when requested by the upper layer(s) or indicated by the lower layer(s)
* Notification to upper layers when new state is entered.

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

Acronyms and abbreviations used in this document. Additional abbreviations can be found in the ISO 17987 specification.

| Abbreviation / Acronym: | Description: |
|---|---|
| API | Application Program Interface |
| AUTOSAR | Automotive Open System Architecture |
| BSW | Basic Software |
| BswM | BSW Mode Manager |
| ComM | Communication Manager |
| DCM | Diagnostic Communication Manager |
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |
| ECU | Electric Control Unit |
| ID | Identifier |
| ISR | Interrupt Service Routine |
| Jitter | Difference between longest delay and shortest delay (e.g. Worst case execution time - Best case execution time) |
| LIN | Local Interconnect Network |
| LinIf | LIN Interface |
| LinSM | LIN State Manager (the subject of this document) |
| MCAL | Microcontroller Abstraction Layer |
| PDU | Protocol Data Unit |
| RAM | Random Access memory |
| RTE | Run Time Environment |
| RX | Receive |
| SPAL | Standard Peripheral Abstraction Layer |
| SRS | Software Requirement Specification |
| SW | Software |
| SWS | Software Design Specification |
| TP | Transport Protocol |
| TX | Transmit |
| UART | Universal Asynchronous Receiver Transmitter |
| UML | Universal Modelling Language |
| URL | Uniform Resource Locator |
| WPII | Work Package in AUTOSAR phase 2 |
| XML | Extensibl |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Lin State Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Lin State Manager.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

There is at most one instance of the LinSM in each ECU. If the underlying LIN Driver  supports multiple networks, the LinSM may be LIN master or LIN slave on more than one cluster.

All references to (switching of) schedule tables do only apply to LIN master node; there are no schedule tables for LIN slave node.

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

This specification is applicable to all car domains, where LIN is used.

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section describes the relations to other modules within the basic software. It describes the services that are used from these modules. Figure  shows the modules that are required or optional for the realization of the LinSM module. The figure is complete but is not regarded as requirement.

To be able for the LinSM module to operate the following modules will be interfaced:

  Upstream requirements:
⌈
LIN Interface - LinIf
⌋

  Upstream requirements:
⌈
Diagnostic Event Manager - DEM
⌋

  Upstream requirements:
⌈
Default Error Tracer - DET
⌋

  Upstream requirements:
⌈
Communication Manager - ComM
⌋

  Upstream requirements:
⌈
BSW Mode Manager - BswM
⌋

Note that modules that are using the interface (except callbacks) from this module are not listed.

### 12. Relation to 上层 layers
*原文标题：Relation to Upper layers*

In principle, there is no requirement that specific modules shall call the interfaces of the LinSM module. Below, the normal users of LinSM module are listed.

### 13. 操作系统
*原文标题：Operating System*

The LinSM module does contain access of shared data with above or below modules (using the API). The data that is shared will not need a help of the OS to protect the data for consistency (there are no array accesses, only simple type accesses). However, there may be reentrant functions that access the same data in the LinSM module. It is up to the implementer to solve these accesses.

### 14. 模块 DET (Default 错误 Tracer)
*原文标题：Module DET (Default Error Tracer)*

The `Det_ReportError` - function of module DET  will be called for development and runtime errors.

### 15. 模块 DEM (诊断 Event 管理器)
*原文标题：Module DEM (Diagnostic Event Manager)*

Production errors will be reported to the Diagnostic Event Manager  module.

### 16. ComM

The Com manager module requests the communication via the LIN stack and queries the state of the LinSM module.

### 17. BSW 模式管理器
*原文标题：BSW Mode Manager*

The LinSM module will notify the BSW Mode Manager module  when a state is changed. The BSW Mode Manager module will interface the LinSM module when requesting a new schedule table (LIN master node only).

### 18. Relation to 下层 layers
*原文标题：Relation to Lower layers*

Below are the BSW modules that will be interfaced by LinSM module.

### 19. LinIf

The LinSM module assumes the following primitives to be provided by the LinIf  module:

* Transmission of the goto-sleep command (LIN master node only) and setting the lower layers to sleep mode (`LinIf_GotoSleep`)
* The wakeup of the Lin bus (`LinIf_Wakeup`)
* Request to change schedule tables (`LinIf_ScheduleRequest`). Only applicable to LIN master node.

It is assumed that the LinIf module will call the following callbacks:

* Confirming that the operational mode has been entered, with or without transmission of a wakeup frame (`LinSM_WakeupConfirmation`)
* Confirming that the sleep mode has been entered, after transmission of a goto-sleep command (LIN master node) or after reception of a goto-sleep command or bus idle detection (LIN slave node) (`LinSM_GotoSleepConfirmation`)
* Confirming a schedule change (`LinSM_ScheduleRequestConfirmation`). Only applicable to LIN master node.

⌈
The LinSM module shall not use or access the LIN driver or assume information about it any way other than what the LinIf module provides through the function calls to the LinIf module listed above.
⌋

### 20. 文件结构
*原文标题：File structure*

### 21. 代码文件结构
*原文标题：Code file structure*

This chapter describes the c-files that implement the LinSM module Configuration. The code file structure is not defined completely within this specification. It is up to each implementer to design the missing structure details.

The pre compile and link time configuration parameters has to be kept in separate files:

### 22. 头文件结构
*原文标题：Header File structure*

This chapter describes the header files that will be included by the LinSM module and possible other modules.

### 23. LinSM header files

Following header files will exist in a LinSM implementation:

⌈
A LinSM implementation shall provide a header file LinSM.h that contains all data exported from the LinSM - API declarations (except callbacks), extern types, and global data.
⌋

### 24. Included header files

Following external header files shall be included:

⌈
The LinSM module shall include the ComM.h file
⌋

⌈
The LinSM module shall include the `BswM_LinSM`.h
⌋

⌈
The LinSM module shall include the `ComM_BusSM`.h
⌋

  Upstream requirements:
⌈
The LinSM module shall perform a consistency check between code files and header files based on pre-process-checking the version numbers of related code files and header files.
⌋

### 25. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| The Basic Software Module specifications shall specify at least in the description which other modules they require |  |  |
| API handling in uninitialized state |  |  |
| No description |  |  |
| Init functions shall have a pointer to a configura |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 功能规范
*原文标题：Functional specification*

This chapter specifies the requirements on the module LinSM module. See the Basic Software Modules document  for an overview of the responsibilities of the LinSM.

The main responsibilities for the LinSM are:

* Control the communication status (no communication or full communication) of all LIN networks
* Handle schedule change requests (Only applicable to LIN master node)
* Handle communication mode requests
* Notify of state changes to upper layers

The LinSM module will not directly implement functionality in the LIN specification. The LinSM module will support the behavior defined in the ISO 17987 specification. The LIN behavior provided by the LinSM module will allow the reuse of existing LIN nodes conforming to the LIN 1.3, 2.0, 2.1, 2.2 and ISO 17987 specifications.

⌈
The LinSM module shall be able to handle one or more LIN networks.
⌋

Number of LIN networks are restricted by the LinIf specification. All networks are handled via the NetworkHandleType specified by the ComM module.

The identification of the LIN networks is made using reference in the configuration to the ComM network handles.

### 27. States and transitions of the LinSM 状态 machine
*原文标题：States and transitions of the LinSM state machine*

The LinSM module will operate in a state-machine. Each network connected will operate in an independent sub-state-machine. Figure  and Figure  show a simplified version of the requirements below, the intention of the figures is not to be complete, rather give an overview.

⌈
The LinSM module shall have one state-machine containing the states `LINSM_UNINIT` and `LINSM_INIT`.
⌋

⌈
In the `LINSM_INIT` there shall be a sub-state-machine for each network with the states `LINSM_NO_COM` and `LINSM_FULL_COM`.
⌋

⌈
In `LINSM_INIT` each network may be in the sub-states `LINSM_NO_COM` or `LINSM_FULL_COM` independently.
⌋

### 28. LINSM_UNINIT

The uninit state is the first state that is active in the LinSM module.

⌈
There shall be a state called `LINSM_UNINIT`
⌋

⌈
The state `LINSM_UNINIT` shall be active at start-up, before any API is called.
⌋

### 29. LINSM_INIT

After the initialization is made the LinSM module will activate the init state. There are two sub-states in this state. One is the no communication state where no communication is made on the LIN bus, the other is full communication where all communication is made and, for LIN master nodes, schedule tables are active. Each network may be in no communication or full communication independent of each other.

⌈
There shall be a state called `LINSM_INIT`
⌋

⌈
The LinSM state-machine shall transit from any state or sub-state to the state `LINSM_INIT` when `LinSM_Init` is called.
⌋

⌈
The LinSM state-machine shall transit from any state or sub-state to sub-state `LINSM_NO_COM` for all networks when `LinSM_Init` is called.
⌋

⌈
When entering `LINSM_INIT` the LinSM shall be put in an init state. Init state means that global variables, etc, shall be set to default value (reset value).
⌋

⌈
The sub-state `LINSM_NO_COM` shall be active when entering the `LINSM_INIT` state, for all networks when `LinSM_Init` is called.
⌋

⌈
The `LinSM_Init` function shall set the schedule type `NULL_SCHEDULE` for each configured channel. This requirement is only applicable for LIN master node.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. LINSM_NO_COM

The no communication state is active after initialization and when the ComM module requests no communication (LIN master node) or when the LinIf indicates a bus sleep event (LIN slave node).

⌈
There shall be a sub-state called `LINSM_NO_COM` in the state `LINSM_INIT`.
⌋

⌈
When entering `LINSM_NO_COM` the LinSM module shall notify (with the exception ) ComM of the state change by calling the `ComM_BusSM_ModeIndication` with the parameter `COMM_NO_COMMUNICATION` for the specific network.
⌋

⌈
When entering `LINSM_NO_COM` the LinSM module shall notify (with the exception ) BswM of the state change by calling the `BswM_LinSM_CurrentState` with the parameter `LINSM_NO_COM` for the specific network.
⌋

There is one exception to the above two requirements. The rationale is that the ComM may not be initialized when executing the `LinSM_Init` function.

⌈
The LinSM module shall not notify the state change to `LINSM_NO_COM` when the LinSM is executing the `LinSM_Init` function, i.e. the `LinSM_Init` function shall neither call `ComM_BusSM_ModeIndication` nor `BswM_LinSM_CurrentState`.
⌋

⌈
When `LINSM_NO_COM` is active, the LinSM module shall not command the LinIf module to communicate for the selected network, i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. LINSM_FULL_COM

The `LINSM_FULL_COM` is the only state where communication on the LIN bus is allowed. Each network can be in `LINSM_FULL_COM` independent of each other. All of the following requirements are applicable for each network.

⌈
There shall be a sub-state called `LINSM_FULL_COM` for each network in the state `LINSM_INIT`.
⌋

⌈
When entering `LINSM_FULL_COM` the ComM shall be notified of the state change by calling the `ComM_BusSM_ModeIndication` with the parameter `COMM_FULL_COMMUNICATION` for the specified network.
⌋

⌈
When entering `LINSM_FULL_COM` the BswM shall be notified of the state change by calling the `BswM_LinSM_CurrentState` with the parameter `LINSM_FULL_COM` for the specified network.
⌋

⌈
When entering `LINSM_FULL_COM` the transceiver shall be set to active by using the `LinIf_SetTrcvMode`. This requirement is applicable only when LinSMTransceiverPassiveMode is configured for the channel.
⌋

⌈
When entering `LINSM_FULL_COM`, the sub-state `LINSM_RUN_COMMUNICATION` will be entered.
⌋

### 32. Goto 休眠
*原文标题：Goto sleep*

The goto-sleep sequence differs between master and slave nodes.

In a master node, when the ComM module requests the no communication mode, the LinSM will request the goto-sleep command to be sent on the LIN bus.

In a slave node, the LIN Interface indicates the bus sleep event to LinSM, either caused by reception of a goto-sleep command or by detection of a bus idle condition. If the ComM module has requested the no communication mode before, the bus sleep event is forwarded to ComM. Otherwise if the full communication mode requested by ComM module is active, the bus sleep event is not forwarded to ComM, but the wakeup process is restarted by LinSM after the goto-sleep sequence is completed.

In all cases, the entering of the no communication mode is notified to BswM and ComM. The callback will always be made, even if there was a problem.

⌈
The LinSM module may only call `LinIf_GotoSleep` API in LinIf when the state `LINSM_FULL_COM` and the sub-state `LINSM_RUN_COMMUNICATION` is active.
⌋

⌈
When `LinSM_GotoSleepConfirmation` is called, and the current state/substate is `LINSM_FULL_COM`/`LINSM_GOTOSLEEP`, the LinSM shall set the state to `LINSM_NO_COM`, regardless of the "success" parameter.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Goto 休眠 specific for master node
*原文标题：Goto sleep specific for master node*

This chapter is only applicable for LIN master nodes.

⌈
If the state is `LINSM_FULL_COM`, the ComM requests `COMM_NO_COMMUNICATION`; the LinSM shall call `LinIf_GotoSleep` to transmit a goto sleep command on the requested network.
⌋

⌈
In all other cases from  the `LinIf_GotoSleep` shall not be called.
⌋

⌈
If the ComM module calls `LinSM_RequestComMode` requesting `COMM_NO_COMMUNICATION` the LinSM module shall directly call (and not wait for next main function call) the LinIf module function `LinIf_GotoSleep` on the specified network.
⌋

⌈
If the `LinIf_GotoSleep` returns E_NOT_OK the `LinSM_RequestComMode` shall return E_NOT_OK.

If the LinSM module returns `LinSM_RequestComMode` with E_NOT_OK, the same state shall be set (so that a `ComM_BusSM_ModeIndication` and `BswM_LinSM_CurrentState` are called).
⌋

### 34. Goto 休眠 specific for slave node
*原文标题：Goto sleep specific for slave node*

This chapter is only applicable for LIN slave nodes.

⌈
If the state is `LINSM_FULL_COM`, the ComM requests `COMM_NO_COMMUNICATION`; the LinSM shall store the requested communication mode and return E_OK without further action.
⌋

⌈
When `LinSM_GotoSleepIndication` is called, and the current state is `LINSM_FULL_COM`, the LinSM shall directly call `LinIf_GotoSleep` (and not wait for next main function call) to enter sleep mode on the requested network.
⌋

⌈
In all other cases from `SWS_LinSM_00231` the `LinIf_GotoSleep` shall not be called.
⌋

⌈
When the current state is `LINSM_FULL_COM`, and the requested communication mode by ComM module is `COMM_NO_COMMUNICATION`, LinIf shall call `LinIf_GotoSleep` and afterwards notifiy ComM of the bus sleep event by calling `ComM_BusSM_BusSleepMode` for the specified network.
⌋

⌈
In the case of  and the requested communication mode by ComM module is `COMM_FULL_COMMUNICATION`, the LinSM shall restart the wakeup up process.
⌋

### 35. Changing 调度 table (Master only)
*原文标题：Changing schedule table (Master only)*

This chapter is only applicable for LIN master nodes.

⌈
If the function `LinSM_ScheduleRequest` is called, the LinSM module shall forward (and not wait for the next main function call) the request to the LinIf module using the function call `LinIf_ScheduleRequest`.
⌋

⌈
When the LinSM called `LinIf_ScheduleRequest` from a call to `LinSM_ScheduleRequest`, it shall forward the return value to its caller.
⌋

⌈
If `LinIf_ScheduleRequest` returns with E_NOT_OK the LinSM module shall call `BswM_LinSM_CurrentSchedule` with the old schedule table in the next main function call.
⌋

⌈
When the LinSM module gets the confirmation of setting a schedule table from the LinIf module the `BswM_LinSM_CurrentSchedule` shall be called, if not timer has elapsed.
⌋

⌈
If timer has elapsed, the LinSM module shall call `BswM_LinSM_CurrentSchedule` with unchanged schedule table.

Be aware of that the LinIf will switch to a NULL schedule when entering sleep, then it may make a schedule switch callback.
⌋

⌈
If the LinIf confirms a schedule switch without a preceding call to request new schedule table the `BswM_LinSM_CurrentSchedule` shall be called
⌋

### 36. Wake up process

A LIN network will be woken up if ComM module requests a wake up through the `LinSM_RequestComMode` call or if a LIN node transmits the wakeup signal on the network. The wakeup by cluster is not handled by the LinSM module, it is handled by the EcuM module and will lead to that the ComM requests the network. In both cases the ComM will request full communication to the LinSM module for the specific network.

In case the LinIf is already awake (because of a LIN node waking up the bus) the LinIf will just ignore the wakeup call.

⌈
If the ComM requests `COMM_FULL_COMMUNICATION` the LinSM shall call `LinIf_Wakeup` directly (and not wait for next main function call) to transmit a wake up signal on the requested network, except in the case of `SWS_LinSM_00237`. Additionally LinSM shall reset the counter for maximum number of retries.
⌋

⌈
In all other cases from  the LinSM module shall not call `LinIf_Wakeup`.
⌋

⌈
When the LinIf notifies that the WakeUp is successfully sent (success = true), the state shall be set to `LINSM_FULL_COM`.
⌋

⌈
In all other cases from  the state shall be set same state as previous to the request (so that a mode indication callback is made to BswM and ComM).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Timeout of requests

After calling `LinIf_Wakeup` the LinSM module is waiting for the LinIf module to confirm the wake up on the bus. There is a possibility that the confirmation is not received, and therefore the LinSM module will wait forever.

The cause for a missing wakeup confirmation could be a problem in software, but also a bus failure or a problem in the master node. A slave node confirms a bus wakeup not after wakeup transmission like a master node, but with reception of the first LIN header from the master node. A LIN slave node shall repeat the wakeup frame transmission up to three times if the communication does not start. After three (failing) wakeup requests the node shall wait a minimum time before restarting the wake up process.

⌈
There shall be independent wakeup confirmation timers for each network.
⌋

⌈
The (countdown and expiration) handling of wakeup confirmation timers shall be done in the `LinSM_MainFunction`.
⌋

⌈
The wakeup confirmation timeout parameter LinSMConfirmationTimeout shall have a time that is either 0 or divisible by the `LinSM_MainFunction` (i.e. `LinSM_MainFunction` period * m; m integer >0).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. 处理多 networks and drivers
*原文标题：Handling multiple networks and drivers*

Usually only one LIN driver module (supporting multiple networks) is needed in an ECU to handle all LIN networks. However, rarely, some hardware configurations the ECU contain different LIN hardware (e.g. an advanced LIN controller and a UART). In such case, more than one different LIN drivers are required. This will not affect the LinSM module since the LIN driver only interfaces the LinIf module and not the LIN driver module directly.

The LinSM will only handle networks, and is not concerned to which driver the network maps to, this will be handled by the LinIf.

### 39. 多 networks
*原文标题：Multiple networks*

Each network has a unique network index (LinSMComMNetworkHandleRef) in the LinSM configuration.

The configuration parameter LinSMComMNetworkHandleRef is referencing the ComM module configuration directly. This means that no mapping between networks has to be made in the LinSM module when interfacing to the LinIf module. The network index may be used directly to the LinIf module APIs.

⌈
The LinSM module shall use the same NetworkHandle value, received through an API, when interfacing to the LinIf module (when LIN network is required as a parameter).
⌋

### 40. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 41. Development 错误
*原文标题：Development Errors*

Definition of development errors in module LinSM
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API called without initialization of LinSM | LINSM_E_UNINIT | 0x00 |
| Referenced network does not exist (identification is out of range) | LINSM_E_NONEXISTENT_NETWORK | 0x20 |
| API service called with wrong parameter | LINSM_E_PARAMETER | 0x30 |
| API service called with invalid pointer | LINSM_E_PARAM_POINTER | 0x40 |
| Init function failed | LINSM_E_INIT_FAILED | 0x50 |

⌋

### 42. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module LinSM
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Timeout of the callbacks from LinIf | LINSM_E_CONFIRMATION_TIMEOUT | 0x00 |

⌋

### 43. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 44. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 45. API 规范
*原文标题：API specification*

### 46. Imported 类型
*原文标题：Imported types*

### 47. Standard 类型
*原文标题：Standard types*

In this chapter all types included from the following modules are listed. The standard AUTOSAR types are defined in the AUTOSAR Specification of Standard Types document .

Following types are used by the LinSM module:

 Definition of imported datatypes of module LinSM
⌈
| Module | Header File | Imported Type |
|---|---|---|
| ComM | Rte_ComM_Type.h | ComM_ModeType |
| Comtype | ComStack_Types.h | NetworkHandleType |
| LinIf | LinIf.h | LinIf_SchHandleType |
| LinTrcv | Lin_GeneralTypes.h | LinTrcv_TrcvModeType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 48. 类型定义
*原文标题：Type definitions*

Following types are defined by the LinSM module:

### 49. LinSM_ModeType

Definition of datatype `LinSM_ModeType`
⌈
| Name | LinSM_ModeType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | LINSM_FULL_COM | 0x01 | Full communication |
| ^ | LINSM_NO_COM | 0x02 | No communication |
| Description | Type used to report the current mode to the BswM | < | < |
| Available via | LinSM.h | < | < |

⌋

### 50. LinSM_ConfigType

Definition of datatype `LinSM_ConfigType`
⌈
| Name | LinSM_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | Data structure type for the post-build configuration parameters. | < |
| Available via | LinSM.h | < |

⌋

### 51. LinSM API

This is a list of API calls provided for upper layer modules.

### 52. LinSM_Init

Definition of API function `LinSM_Init`
  Upstream requirements: , ,
⌈
| Service Name | LinSM_Init | < |
|---|---|---|
| Syntax | void LinSM_Init ( |  |

  const `LinSM_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the LinSM post-build configuration data. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function initializes the LinSM. | < |
| Available via | LinSM.h | < |

⌋

⌈
No other LinSM API or other module's (e.g. LinIf) API shall be called from the `LinSM_Init` function. Other modules may not be initialized.
⌋

### 53. LinSM_ScheduleRequest

The service `LinSM_ScheduleRequest` is only applicable for LIN master node.

 Definition of API function `LinSM_ScheduleRequest`
  Upstream requirements:
⌈
| Service Name | LinSM_ScheduleRequest | < |
|---|---|---|
| Syntax | Std_ReturnType LinSM_ScheduleRequest ( |  |

  NetworkHandleType network,
  `LinIf_SchHandleType` ScheduleTableIdx
| ) | < |  |
|---|---|---|
| Service ID | 0x10 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | network | Identification of the LIN channel |
| ^ | ScheduleTableIdx | Index of the scheduled table |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK - Schedule table request has been accepted. E_NOT_OK - Not possible to perform the request, e.g. not initialized. |
| Description | The upper layer requests a schedule table to be changed on one LIN network. | < |
| Available via | LinSM.h | < |

⌋

⌈
If LinSMDevErrorDetect is enabled: If the network parameter has an invalid value then the error-code `LINSM_E_NONEXISTENT_NETWORK` shall be reported to the DET module and E_NOT_OK shall be returned.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 49 章（内容从略，见纯文本全文）

54. LinSM_GetVersionInfo
55. LinSM_GetCurrentComMode
56. LinSM_RequestComMode
57. Scheduled functions
58. LinSM_MainFunction
59. LinSM 回调
60. LinSM_ScheduleRequestConfirmation
61. LinSM_GotoSleepIndication
62. LinSM_GotoSleepConfirmation
63. LinSM_WakeupConfirmation
64. Mandatory 接口
65. Optional 接口
66. Configurable 接口
67. 时序图
68. Goto-sleep process
69. Master
70. Slave
71. Internal wake up
72. 调度 switch (Master only)
73. 配置规范
74. How to read this chapter
75. Containers and 配置 parameters
76. 配置 Tool
77. LinSM_Configuration
78. LinSM
79. LinSMConfigSet
80. LinSMChannel
81. LinSMGeneral
82. LinSMSchedule
83. 发布信息
84. 附录
85. 不适用需求
86. Change history of AUTOSAR traceable items
87. Traceable item history of this document according to AUTOSAR Release R22-11
88. Added 规范 Items in R22-11
89. Changed 规范 Items in R22-11
90. Deleted 规范 Items in R22-11
91. Traceable item history of this document according to AUTOSAR Release R23-11
92. Added 规范 Items in R23-11
93. Changed 规范 Items in R23-11
94. Deleted 规范 Items in R23-11
95. Traceable item history of this document according to AUTOSAR Release R24-11
96. Added 规范 Items in R24-11
97. Changed 规范 Items in R24-11
98. Deleted 规范 Items in R24-11
99. Traceable item history of this document according to AUTOSAR Release R25-11
100. Added 规范 Items in R25-11
101. Changed 规范 Items in R25-11
102. Deleted 规范 Items in R25-11
