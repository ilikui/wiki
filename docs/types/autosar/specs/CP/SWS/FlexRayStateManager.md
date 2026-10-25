# Specification of FlexRay State Manager (`FlexRayStateManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 254 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayStateManager_254\AUTOSAR_CP_SWS_FlexRayStateManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayStateManager_254\AUTOSAR_CP_SWS_FlexRayStateManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayStateManager_254\zzgen\CP_SWS_FlexRayStateManager.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module FlexRay State Manager (FrSM).

The AUTOSAR BSW stack specifies for each communication bus a bus specific state manager. This module shall implement the control flow for the respective bus. The FrSM is a member of the Communication Service Layer. It interacts with the Communication Hardware Abstraction Layer and the System Service Layer.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module FlexRay State Manager (FrSM).

The AUTOSAR BSW stack specifies for each communication bus a bus specific state manager. This module shall implement the control flow for the respective bus. The FrSM is a member of the Communication Service Layer. It interacts with the Communication Hardware Abstraction Layer and the System Service Layer.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the FlexRay Manager module that are not included in the .

Acronym/

| Abbrevation | Description: |
|---|---|
| BswM | Basic Software Mode Manager |
| CHI | Controller Host Interface |
| ComM | AUTOSAR Communication Manager |
| DCM | Diagnostic Communication Manager |
| e.g. | exempli gratia =  for example |
| EcuM | ECU State Manager |
| Fr | FlexRay Driver |
| FrIf | FlexRay Interface (AUTOSAR BSW module) |
| FrSM | FlexRay State Manager |
| FrTrcv | FlexRay Transceiver Driver |
| i.e. | id est =  that is |
| POC | Protocol Operation Control |
| POCState | Actual CC (defined in ) internal state of the POC. This state might differ from vPOC!State in certain cases, e.g. after FREEZE command invocation (see  for details). |
| RX | Reception |
| SchM | Schedule Manager |
| TX | Transmission |
| vPOC | Data structure provided from the CC to the host at the CHI, which contains the actual POC status of the CC. |
| vPOC!Freeze | vPOC!Freeze denotes the Freeze bit that is part of the vPOC data structure. The Freeze bit is used by the CC to indicate that the HALT state has been entered due to an error condition. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for FrSM.

Thus, the specification SWS BSW General shall be considered as additional and required specification for FrSM.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

This specification only defines the straightforward case for starting and stopping the communication on a FlexRay cluster.

For the case of multiple CC of one ECU assigned to one FlexRay cluster some items are left open for the implementation:

* Which CC is used to transmit the wakeup pattern
* Handling of inconsistent POC states in the CCs

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

The FlexRay Communication stack can be used wherever high data rates and fault tolerant communication (in conjunction with ) is required. Furthermore, it enables the synchronized operation of several ECUs within a car.

The FrSM can be used for all domain applications which use the FlexRay Protocol.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. AUTOSAR BSW Scheduler

The BSW Scheduler calls the main functions of the FrSM, which are necessary for the cyclic processes of the FrSM.

### 11. AUTOSAR Communication 管理器
*原文标题：AUTOSAR Communication Manager*

The ComM requests network communication modes and is notified by the FrSM when a communication mode is reached.

### 12. AUTOSAR FlexRay 接口
*原文标题：AUTOSAR FlexRay Interface*

The FrSM uses the API of the FrIf to initialize the FlexRay Communication Hardware and to control the operating modes of the FlexRay Controllers and FlexRay Transceivers assigned to the FlexRay Networks.

### 13. AUTOSAR Default 错误 Tracer
*原文标题：AUTOSAR Default Error Tracer*

In order to be able to report development errors, the FrSM has to have access to the error hook of the Default Error Tracer.

### 14. AUTOSAR 诊断 Event 管理器
*原文标题：AUTOSAR Diagnostic Event Manager*

In order to be able to report production errors the FrSM has to have access to the Diagnostic Event Manager.

### 15. AUTOSAR BSW 模式管理器
*原文标题：AUTOSAR BSW Mode Manager*

In order to be able to report state changed the FrSM has to have access to the BSW Mode Manager.

### 16. AUTOSAR FlexRay 网络管理
*原文标题：AUTOSAR FlexRay Network Management*

In order to be able to report startup failures the FrSM has to have access to the FlexRay Network Management.

### 17. 文件结构
*原文标题：File structure*

### 18. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 19. 头文件结构
*原文标题：Header file structure*

⌈
The header file FrSM.h shall include a software and specification version number.
⌋

  Upstream requirements:
⌈
The FrSM module shall perform a consistency check between code files and header files based on pre-process-checking the version numbers of related code files and header files.
⌋

### 20. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| API naming convention |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 功能规范
*原文标题：Functional specification*

### 22. Background & Rationale

FlexRay start-up is a complex process that is completely different from CAN. E.g. on CAN every message can wakeup the bus, on FlexRay a special wakeup pattern is needed. In order to make the FlexRay start-up process as reliable as possible, it has to be controlled by a BSW module with in-depth FlexRay knowledge. As the AUTOSAR ComM has a completely abstracted bus view, it is the task of the FrSM to map this abstracted view to the states of the FlexRay POC and to the CHI commands to change these states.

### 23. Main Task of the FlexRay 状态管理器
*原文标题：Main Task of the FlexRay State Manager*

The main task of the FrSM module can be summarized as follows:

The FrSM module shall provide an abstract interface to the AUTOSAR ComM module to startup or shutdown the communication on a FlexRay cluster. The FrSM module shall not directly access the FlexRay hardware (FlexRay Communication Controller and FlexRay Transceiver), but by means of the FrIf module. FrIf module redirects the request to the appropriate driver module.

### 24. the FlexRay 状态管理器的状态 Machine
*原文标题：State Machine of the FlexRay State Manager*

### 25. 通用
*原文标题：General*

⌈
FrSM shall implement one state machine for each FlexRay cluster.
⌋

The states of this state machine are to some extent derived from the POC states of the FlexRay CC. This document is based on the assumption that there is always a unique POC state for every FlexRay cluster (see Limitations in ).

The state machine of each cluster is processed by the main function `FrSM_MainFunction`() assigned to that cluster. However, some transitions of the state machine are processed in the context of the `FrSM_RequestComMode`() function in order to achieve a deterministic behavior for shutdown.

### 26. States

⌈
The state machine shall comprise the following states:

* `FRSM_READY`
* `FRSM_WAKEUP`
* `FRSM_STARTUP`
* `FRSM_HALT_REQ`
* `FRSM_ONLINE`
* `FRSM_ONLINE_PASSIVE`
* `FRSM_KEYSLOT_ONLY`
* `FRSM_LOW_NUMBER_OF_COLDSTARTERS`
⌋

 provides additional information about the state machine states.

| FrSM Cluster State | Mapped FlexRay CC state | Description |
|---|---|---|
| FRSM_READY | POC:ready |  |
| FRSM_WAKEUP | POC:wake-up | FrSM performs wake-up |
| FRSM_STARTUP | POC:start-up | FrSM performs startup |
| FRSM_HALT_REQ | POC:normal active |  |

| or POC:normal passive | FrSM performs a shutdown |  |
|---|---|---|
| FRSM_ONLINE | POC:normal active | Full Communication |
| FRSM_ONLINE_PASSIVE | POC:normal passive | Due to clock synchronization errors no data is transmitted or received. |
| FRSM_KEYSLOT_ONLY | POC:normal active |  |

| and vPOCSlotMode \neq AllSlots | Data can only be transmitted in the key slots. |  |
|---|---|---|
| FRSM_LOW_NUMBER_OF_COLDSTARTERS | POC:normal active | Full communication; FlexRay is synchronized based on sync frames only. |

⌈
For controlling the passive mode (receive-only), the state machine shall additionally comprise the following states which concurrent to the states above:

* `FRSM_ECU_ACTIVE`
* `FRSM_ECU_PASSIVE`
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Variables

In addition to its state, the state machine description uses the following variables. Note that these variables are only auxiliary means for improving the clearness and the readability of the specification.

| FrSM Variable | Type | Description |
|---|---|---|
| reqComMode | ComM_ModeType | The communication mode that has been requested by the ComM. |

The communication modes are abbreviated in this document as follows:

NoCom: `COMM_NO_COMMUNICATION`

SilentCom: `COMM_SILENT_COMMUNICATION`

FullCom: `COMM_FULL_COMMUNICATION`

According to the definition of `ComM_ModeType` these modes are ordered as follows:

NoCom < SilentCom < FullCom
| startupCounter | Integer | The number of startup attempts that have been performed |
|---|---|---|
| wakeupType | Enum | The following values are supported: |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 状态 Machine 配置
*原文标题：State Machine Configuration*

The state machine description uses the following configuration parameters that are defined in  for each FlexRay cluster:

| FrSM Configuration Parameter | Type | Description |
|---|---|---|
| FrSMIsWakeupEcu | Boolean | Configuration parameter, see . |
| FrSMCheckWakeupReason | Boolean | Configuration parameter, see . |
| FrSMIsColdstartEcu | Boolean | Configuration parameter, see . |
| FrSMIsDualChannelNode | Boolean | This parameter is derived from the FrIf configuration. If the corresponding FrIf cluster is connected to both channels of the FlexRay cluster, this parameter is TRUE. Otherwise, it is FALSE. |
| FrSMStartupRepetitionsWithWakeup | Integer | Configuration parameter, see . |

If this optional configuration parameter is missing, there shall be no limitation, i.e. the configuration parameter shall be treated as having the value \infty
| FrSMStartupRepetitions | Integer | Configuration parameter, see . |
|---|---|---|

If this optional configuration parameter is missing, there shall be no limitation, i.e. the configuration parameter shall be treated as having the value \infty
| FrSMNumWakeupPatterns | Integer | Configuration parameter, see . |
|---|---|---|
| FrSMDelayStartupWithoutWakeup | Boolean | Configuration parameter, see . |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Conditions

The state machine description uses the following conditions that are evaluated during runtime for each FlexRay cluster:

| FrSM Condition | Type | Description |
|---|---|---|
| WUReason | Enum | If FrSMCheckWakeupReason is false, WUReason evaluates to NO_WU_BY_BUS. |

Otherwise if FrSMCheckWakeupReason is true, determine the wakeup reason by calling `FrIf_GetTransceiverWUReason` for each transceiver of the FlexRay cluster and check for `FRTRCV_WU_BY_BUS` and evaluate WUReason to

* `NO_WU_BY_BUS` in case no wakeup has been detected.
* `PARTIAL_WU_BY_BUS` in case the ECU is connected to both FlexRay channels of the cluster and wakeup has been detected for exactly one channel
* `ALL_WU_BY_BUS` in case wakeup has been detected for all of the FlexRay channels of the cluster to which the ECU is connected.
| t1_IsActive | boolean | Evaluates to true if t1 has been started and has not expired yet, otherwise to false |
|---|---|---|
| t3_IsNotActive | boolean | Evaluates to false if t3 is running and has not expired, otherwise to true. |
| t_TrcvStdbyDelay_IsActive | boolean | Evaluates to true if t_TrcvStdbyDelay has been started and has not expired yet, otherwise to false. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Timers

The state machine description uses the following timers for each FlexRay cluster:

| Timer | Description |
|---|---|
| t1 | The timer t1 models the delay of clearing the coldstart inhibit mode (i.e. calling FrIf_AllowColdstart). |

The duration of this timer can be statically configured with the configuration parameter FrSMDurationT1.
| t2 | The timer t2 models the time difference after which the FrSM will repeat the startup of the FlexRay cluster. |
|---|---|

The duration of this timer can be statically configured with the configuration parameter FrSMDurationT2.
| t3 | The timer t3 supervises the transition to FullCom. The duration of this timer can be statically configured with the configuration parameter FrSMDurationT3. |
|---|---|
| t4 | The timer t4 ensures that a dual channel node will eventually clear its coldstart inhibit bit and become a leading coldstarter. |
| t_TrcvStdbyDelay | The timer t_TrcvStdbyDelay models the time difference after which the FrSM will reinitialize the FlexRay communication controllers and set the transceivers into STANDBY mode when FlexRay communication is stopped. |

⌈
If the configuration parameter FrSMDurationT1 is set to 0, timer t1 shall not be started.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 功能性 Elements
*原文标题：Functional Elements*

The functionality being performed in the transitions of the state machine is partitioned into the following functional elements. I.e. the following table contains abbreviations used as actions in the FrSM state machine description, which reference one or more function calls visible at the interfaces of the FrSM module.

| Functional Element | Description |
|---|---|
| FE_WAKEUP | Call FrIf_SendWUP for each controller of the FlexRay cluster. |
| FE_SET_WU_CHANNEL_INITIAL | In case of a single channel node, do nothing. |

In case of a dual channel node, call `FrIf_SetWakeupChannel` for each controller of the FlexRay cluster in order to set the wakeup channel to the channel A.
| FE_SET_WU_CHANNEL_FORWARD | In case of a single channel node, do nothing. |
|---|---|

In case of a dual channel node, call `FrIf_SetWakeupChannel` for each controller of the FlexRay cluster in order to set the wakeup channel to the channel on which no wakeup has been detected while evaluating WUReason.
| FE_CONFIG | Call FrIf_ControllerInit for each controller of the FlexRay cluster. |
|---|---|
| FE_START | Call FrIf_StartCommunication for each controller of the FlexRay cluster. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 唤醒 Pattern Transmission
*原文标题：Wakeup Pattern Transmission*

⌈
The FrSM shall repeat the transmission of wakeup patterns according to the configuration parameter FrSMNumWakeupPatterns. I.e. the FlexRay State Manager shall perform the following actions while being in state `FRSM_WAKEUP`:

* Set counter wakeupCounter to 1 when the state `FRSM_WAKEUP` is entered
* While wakeupCounter < FrSMNumWakeupPatterns and busTrafficDetected = false:

  * Wait until the FlexRay controllers of the FlexRay cluster are in state `FR_READY`
  * When the FlexRay controllers are in state `FR_READY`, check vPOC!WakeupStatus of the FlexRay controllers and act as follows:

    * if vPOC!WakeupStatus = `FR_WAKEUP_RECEIVED_HEADER` \lor `FR_WAKEUP_RECEIVED_WUP`: busTrafficDetected := true
    * else if vPOC!WakeupStatus = `FR_WAKEUP_TRANSMITTED`: wakeupTransmitted := true
    * else: wakeupTransmitted := false
* If busTrafficDetected = false and wakeupCounter < FrSMNumWakeupPatterns, execute `FE_WAKEUP`
* Increment the wakeupCounter

If any of the FlexRay controllers enters the HALT state due to an error condition, the wakeup pattern transmission shall be aborted and the wakeupFinished condition shall evaluate to true.
⌋

### 33. Transitions

The following diagram shows the FrSM state machine.

Note that the states are described in .

The following table defines the events and conditions that trigger the transitions of FrSM state machine and the actions that are executed within the transitions. Each row of the table contains a requirement which should be interpreted as follows. If the FrSM module is in the source state of the transition in column "Transition" as defined in  and when the condition in column "Event " holds and if the event in column "Event " occurs, then the actions in column "Actions" shall be executed and afterwards the FrSM module shall change its state to the target state of the transition in column "Transition" as defined in .

In case different actions have to be performed in a transition T, there can be multiple rows in the table. The rows are denoted as T (a), T (b) etc. in this case. Note that the conditions ensure that only one of the possibilities matches.

⌈
The FrSM shall execute the actions of the transition in the order that is defined in the table within .
⌋

⌈
After every transition to a different state, the FrSM shall inform the BswM by calling `BswM_FrSM_CurrentState`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 配置描述
*原文标题：Configuration description*

The FrSM configuration tool reads the ECU configuration description of the FrIf as the mapping of controllers to clusters is contained in the FrIf configuration description.

### 35. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 36. Development 错误
*原文标题：Development Errors*

Definition of development errors in module FrSM
  Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Invalid pointer in parameter list. In case of this error, the API service shall return immediately without any further action, beside reporting this development error. | FRSM_E_PARAM_POINTER | 0x01 |
| Invalid network handle parameter | FRSM_E_INV_HANDLE | 0x02 |
| FrSM module was not initialized | FRSM_E_UNINIT | 0x03 |
| Invalid communication mode requested | FRSM_E_INV_MODE | 0x04 |
| Initialization failed | FRSM_INIT_FAILED | 0x05 |

⌋

### 37. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 38. Production 错误
*原文标题：Production Errors*

### 39. FRSM_E_CLUSTER_STARTUP

FlexRay cluster startup failure.
  Upstream requirements: , ,
⌈
| Diagnostic Event (Error Name) | FRSM_E_CLUSTER_STARTUP |
|---|---|
| Description | FlexRay controller has not reached the state normal active within the configured time after FlexRay startup. |
| Failed condition | FlexRay controller has not reached the state normal active within the time t3. |
| Passed condition | FlexRay controller has reached the state normal active. |

⌋

### 40. FRSM_E_CLUSTER_SYNC_LOSS

FlexRay synchronization loss.
  Upstream requirements: , ,
⌈
| Diagnostic Event (Error Name) | FRSM_E_CLUSTER_SYNC_LOSS |
|---|---|
| Description | FlexRay controller has lost synchronization after successful startup. |
| Failed condition | FlexRay controller has lost synchronization after it has reached state normal active. |
| Passed condition | FlexRay controller has reached the state normal active or the request for FlexRay communication has been released. |

⌋

### 41. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 42. API 规范
*原文标题：API specification*

### 43. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module FrSM
⌈
| Module | Header File | Imported Type |
|---|---|---|
| ComM | Rte_ComM_Type.h | ComM_ModeType |
| Comtype | ComStack_Types.h | NetworkHandleType |
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Fr | Fr_GeneralTypes.h | Fr_ChannelType |
| ^ | Fr_GeneralTypes.h | Fr_ErrorModeType |
| ^ | Fr_GeneralTypes.h | Fr_POCStateType |
| ^ | Fr_GeneralTypes.h | Fr_POCStatusType |
| ^ | Fr_GeneralTypes.h | Fr_SlotModeType |
| ^ | Fr_GeneralTypes.h | Fr_StartupStateType |
| ^ | Fr_GeneralTypes.h | Fr_WakeupStatusType |
| FrIf | FrIf.h | FrIf_StateTransitionType |
| FrTrcv | Fr_GeneralTypes.h | FrTrcv_TrcvModeType |
| ^ | Fr_GeneralTypes.h | FrTrcv_TrcvWUReasonType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 44. 类型定义
*原文标题：Type definitions*

### 45. FrSM_ConfigType

Definition of datatype `FrSM_ConfigType`
⌈
| Name | FrSM_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Description | This type contains the implementation-specific post build time configuration structure that is for FrSM_Init. | < |
| Available via | FrSM.h | < |

⌋

### 46. FrSM_BswM_StateType

Definition of datatype `FrSM_BswM_StateType`
⌈
| Name | FrSM_BswM_StateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | FRSM_BSWM_READY | 0x00 | - |
| ^ | FRSM_BSWM_READY_ECU_PASSIVE | 0x01 | - |
| ^ | FRSM_BSWM_STARTUP | 0x02 | - |
| ^ | FRSM_BSWM_STARTUP_ECU_PASSIVE | 0x03 | - |
| ^ | FRSM_BSWM_WAKEUP | 0x04 | - |
| ^ | FRSM_BSWM_WAKEUP_ECU_PASSIVE | 0x05 | - |
| ^ | FRSM_BSWM_HALT_REQ | 0x06 | - |
| ^ | FRSM_BSWM_HALT_REQ_ECU_PASSIVE | 0x07 | - |
| ^ | FRSM_BSWM_KEYSLOT_ONLY | 0x08 | - |
| ^ | FRSM_BSWM_KEYSLOT_ONLY_ECU_PASSIVE | 0x09 | - |
| ^ | FRSM_BSWM_ONLINE | 0x0A | - |
| ^ | FRSM_BSWM_ONLINE_ECU_PASSIVE | 0x0B | - |
| ^ | FRSM_BSWM_ONLINE_PASSIVE | 0x0C | - |
| ^ | FRSM_BSWM_ONLINE_PASSIVE_ECU_PASSIVE | 0x0D | - |
| ^ | FRSM_LOW_NUMBER_OF_COLDSTARTERS | 0x0E | - |
| ^ | FRSM_LOW_NUMBER_OF_COLDSTARTERS_ECU_PASSIVE | 0x0F | - |
| Description | This type defines the states that are reported to the BswM using BswM_FrSM_CurrentState. | < | < |
| Available via | FrSM.h | < | < |

⌋

### 47. 功能定义
*原文标题：Function definitions*

This is a list of functions provided for upper layer modules.

### 48. FrSM_Init

Definition of API function `FrSM_Init`
  Upstream requirements: , , , , ,
⌈
| Service Name | FrSM_Init | < |
|---|---|---|
| Syntax | void FrSM_Init ( |  |

  const `FrSM_ConfigType`* `FrSM_ConfigPtr`
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | FrSM_ConfigPtr | Pointer to a selected configuration structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the FlexRay State Manager. | < |
| Available via | FrSM.h | < |

⌋

  Upstream requirements: ,
⌈
The `FrSM_Init` function shall initialize the state machines for all FlexRay clusters and set them into the state `FRSM_READY`, i.e. perform transition T00.
⌋

  Upstream requirements: ,
⌈
The `FrSM_Init` function shall internally store the configuration data address to enable subsequent API calls to access the configuration data.
⌋

  Upstream requirements:
⌈
If development error detection is enabled (FrSMDevErrorDetect is ON), the `FrSM_Init` function shall remember internally the successful initialization for other API functions to check for proper module initialization.
⌋

### 49. FrSM_RequestComMode

Definition of API function `FrSM_RequestComMode`
  Upstream requirements: , , ,
⌈
| Service Name | FrSM_RequestComMode | < |
|---|---|---|
| Syntax | Std_ReturnType FrSM_RequestComMode ( |  |

  NetworkHandleType network,
  `ComM_ModeType` mode
| ) | < |  |
|---|---|---|
| Service ID | 0x40 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different networks. Non reentrant for the same network. | < |
| Parameters (in) | network | Handle of the communication network |
| ^ | mode | Requested communication mode |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Request accepted E_NOT_OK: Request not accepted |
| Description | Request of a new communication mode. | < |
| Available via | FrSM.h | < |

⌋

⌈
The `FrSM_RequestComMode` function shall store the requested communication mode.
⌋

The next activation of the `FrSM_MainFunction` will then process this request when processing the state machine of the corresponding cluster.

Note, that the state machine definition in  refers to this stored request as reqComMode.

⌈
If NoCom is requested after FullCom has been reached (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 50. FrSM_GetCurrentComMode

Definition of API function `FrSM_GetCurrentComMode`
  Upstream requirements: , , ,
⌈
| Service Name | FrSM_GetCurrentComMode | < |
|---|---|---|
| Syntax | Std_ReturnType FrSM_GetCurrentComMode ( |  |

  NetworkHandleType network,
  `ComM_ModeType`* mode
| ) | < |  |
|---|---|---|
| Service ID | 0x41 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different networks. Non reentrant for the same network. | < |
| Parameters (in) | network | Handle of the communication channel |
| Parameters (inout) | None | < |
| Parameters (out) | mode | Pointer to the memory location where the current communication mode shall be stored |
| Return value | Std_ReturnType | E_OK: Request accepted E_NOT_OK: Request not accepted |
| Description | Query the current communication mode. | < |
| Available via | FrSM.h | < |

⌋

⌈
The `FrSM_GetCurrentComMode` function shall write the current communication mode of the corresponding FlexRay cluster into the given memory location.
⌋

  Upstream requirements:
⌈
The `FrSM_GetCurrentComMode` function shall determine the communication mode as follows:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. FrSM_AllSlots

Definition of API function `FrSM_AllSlots`
  Upstream requirements: , ,
⌈
| Service Name | FrSM_AllSlots | < |
|---|---|---|
| Syntax | Std_ReturnType FrSM_AllSlots ( |  |

  NetworkHandleType NetworkHandle
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different FlexRay clusters | < |
| Parameters (in) | NetworkHandle | This parameter identifies the FlexRay cluster for which a communication mode is requested. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Request accepted E_NOT_OK: Request not accepted |
| Description | This API function can be used to leave the KeySlotOnlyMode. | < |
| Available via | FrSM.h | < |

⌋

⌈
The `FrSM_AllSlots` function shall be pre compile time configurable ON/OFF by the configuration parameter FrSMAllSlotsSupport
⌋

⌈
The `FrSM_AllSlots` function shall call `FrIf_AllSlots` for each controller of the FlexRay cluster. It shall return E_OK if each of these calls returned E_OK, otherwise `FrSM_AllSlots` shall return E_NOT_OK.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 52. FrSM_SetEcuPassive

Definition of API function `FrSM_SetEcuPassive`
  Upstream requirements: , ,
⌈
| Service Name | FrSM_SetEcuPassive | < |
|---|---|---|
| Syntax | Std_ReturnType FrSM_SetEcuPassive ( |  |

  boolean `FrSM_Passive`
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | FrSM_Passive | This parameter determines whether all FlexRay clusters are set to passive, i.e. receive only. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Request accepted E_NOT_OK: Request not accepted |
| Description | This API function can be used to set all FlexRay clusters of the ECU to a receive only mode. | < |
| Available via | FrSM.h | < |

⌋

⌈
The `FrSM_SetEcuPassive` function shall set the state of all FrSM state machines to `FRSM_ECU_PASSIVE` if the parameter `FrSM_Passive` evaluates to true, otherwise it shall set the state of all FrSM state machines to `FRSM_ECU_ACTIVE`.
⌋

⌈
If the state machine of a FlexRay cluster is not in state `FRSM_READY` (i.e. the transceivers of the FlexRay cluster are not in standby mode), the function shall execute `FE_TRCV_NORMAL` for this cluster.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 53. Callback 通知
*原文标题：Callback notifications*

The FrSM does not provide any call-back API services to other BSW modules.

### 其余 40 章（内容从略，见纯文本全文）

54. Scheduled functions
55. FrSM_MainFunction_<FrSMCluster.ShortName>
56. Expected 接口
57. Mandatory 接口
58. Optional 接口
59. Configurable 接口
60. <Cdd>_SyncLossErrorIndication
61. 服务接口
62. 时序图
63. 初始化
64. Single Channel 唤醒
65. Single Channel Passive 启动
66. Dual Channel 唤醒
67. Dual Channel 唤醒 Forward
68. Key Slot Only 模式
69. Transition from full communication to no communication
70. 配置规范
71. How to read this chapter
72. Containers and 配置 parameters
73. FrSM
74. FrSMConfig
75. FrSMGeneral
76. FrSMCluster
77. FrSMClusterDemEventParameterRefs
78. 发布信息
79. 附录
80. Change history of AUTOSAR traceable items
81. Traceable item history of this document according to AUTOSAR Release R26-11
82. Added 规范 Items in R26-11
83. Changed 规范 Items in R26-11
84. Deleted 规范 Items in R26-11
85. Traceable item history of this document according to AUTOSAR Release R25-11
86. Added 规范 Items in R25-11
87. Changed 规范 Items in R25-11
88. Deleted 规范 Items in R25-11
89. Traceable item history of this document according to AUTOSAR Release R24-11
90. Added 规范 Items in R24-11
91. Changed 规范 Items in R24-11
92. Deleted 规范 Items in R24-11
93. 不适用需求
