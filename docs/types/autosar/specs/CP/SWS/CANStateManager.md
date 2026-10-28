# Specification of CAN State Manager (`CANStateManager`)

> [返回本类索引](index.md)

| 属性     | 值                                           |
| -------- | -------------------------------------------- |
| 平台     | CP                                           |
| 类别     | SWS — 软件模块规范（Software Specification） |
| UID      | 253                                          |
| 规范版本 | R26-11                                       |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CANStateManager_253\AUTOSAR_CP_SWS_CANStateManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CANStateManager_253\AUTOSAR_CP_SWS_CANStateManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CANStateManager_253\zzgen\CP_SWS_CANStateManager.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module CAN State Manager.

The AUTOSAR BSW stack specifies for each communication bus a bus specific state manager. This module shall implement the control flow for the respective bus. Like shown in the figure below, the CAN State Manager (CanSM) is a member of the Communication Service Layer. It interacts with the Communication Hardware Abstraction Layer and the System Service Layer.

## 模块依赖

The next sections give a brief description of configuration information and services the CanSM module requires from other modules.

## 章节详细内容

### 1. 简介与功能概述

_原文标题：Introduction and functional overview_

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module CAN State Manager.

The AUTOSAR BSW stack specifies for each communication bus a bus specific state manager. This module shall implement the control flow for the respective bus. Like shown in the figure below, the CAN State Manager (CanSM) is a member of the Communication Service Layer. It interacts with the Communication Hardware Abstraction Layer and the System Service Layer.

### 2. 缩略语

_原文标题：Acronyms and Abbreviations_

The glossary below includes acronyms and abbreviations relevant to the CAN State Manager module that are not included in the .

| Abbreviation / Acronym: | Description:                |
| ----------------------- | --------------------------- |
| CanIf                   | CAN Interface               |
| CanSM                   | CAN State Manager           |
| ComM                    | Communication Manager       |
| EcuM                    | ECU State Manager           |
| RX                      | Receive                     |
| TX                      | Transmit                    |
| SchM                    | BSW Scheduler               |
| BswM                    | Basic Software Mode Manager |

### 3. 相关文档

_原文标题：Related documentation_

### 4. 输入文档与相关标准规范

_原文标题：Input documents & related standards and norms_

### 5. 相关规范

_原文标题：Related specification_

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for CAN State Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for CAN State Manager.

### 6. 约束与假设

_原文标题：Constraints and assumptions_

### 7. 限制

_原文标题：Limitations_

The CanSM module can be used for CAN communication only. Its task is to operate with the CanIf module to control one or multiple underlying CAN Controllers and CAN Transceiver Drivers. Other protocols than CAN (i.e. LIN or FlexRay) are not supported.

The configured DEM event `CANSM_E_MODE_REQUEST_TIMEOUT` is outdated.

### 8. 适用的车型领域

_原文标题：Applicability to car domains_

The CAN State Manager module can be used for all domain applications whenever the CAN protocol is used.

### 9. 对其他模块的依赖

_原文标题：Dependencies to other modules_

The next sections give a brief description of configuration information and services the CanSM module requires from other modules.

### 10. ECU 状态管理器 (EcuM)

_原文标题：ECU State Manager (EcuM)_

The EcuM module initializes the CanSM module and interacts with the CanSM module for the CAN wakeup validation (refer to for a detailed specification of this module).

### 11. BSW Scheduler (SchM, part of RTE)

The BSW Scheduler module calls the main function of the CanSM module, which is necessary for the cyclic processes of the CanSM module. Refer to for a detailed specification of this module.

### 12. Communication 管理器 (ComM)

_原文标题：Communication Manager (ComM)_

The ComM module uses the API of the CanSM module to request communication modes of CAN networks, which are identified with unique network handles (refer to for a detailed specification of this module).

The CanSM module notifies the current communication mode of its CAN networks to the ComM module.

### 13. CAN 接口 (CanIf)

_原文标题：CAN Interface (CanIf)_

The CanSM module uses the API of the CanIf module to control the operating modes of the CAN controllers and CAN transceivers assigned to the CAN networks (refer to for a detailed specification of this module).

The CanIf module notifies the CanSM module about peripheral events.

### 14. 诊断 Event 管理器 (DEM)

_原文标题：Diagnostic Event Manager (DEM)_

The CanSM module reports bus specific production errors to the DEM module (refer to for a detailed specification of this module).

### 15. 基础软件模式管理器 (BswM)

_原文标题：Basic Software Mode Manager (BswM)_

The CanSM need to notify bus specific mode changes to the BswM module (refer to for a detailed specification of this module).

### 16. CAN 网络管理 (CanNm)

_原文标题：CAN Network Management (CanNm)_

The CanSM module needs to notify the partial network availability to the CanNm module and shall handle notified CanNm timeout exceptions in case of partial networking (refer to for a detailed specification of this module).

### 17. Default 错误 Tracer (DET)

_原文标题：Default Error Tracer (DET)_

The CanSM module reports development and runtime errors to the DET module. Development Errors are only reported if development error handling is switched on by configuration (refer to for a detailed specification of this module).

### 18. 文件结构

_原文标题：File structure_

### 19. 代码文件结构

_原文标题：Code file structure_

For details refer to .

### 20. 头文件结构

_原文标题：Header file structure_

Upstream requirements:
⌈
The header file CanSM.h shall export CanSM module specific types and the API `CanSM_Init`.
⌋

### 21. Version check

For details refer to .

### 22. 需求追踪

_原文标题：Requirements Tracing_

The following tables reference the requirements specified in <`CITATIONS_OF_CONTRIBUTED_DOCUMENTS`> and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement                                                                                                        | Description | Satisfied by |
| ------------------------------------------------------------------------------------------------------------------ | ----------- | ------------ |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |             |              |
| For each callback function it shall be specified if it is called from interrupt context or not                     |             |              |
| Basic SW module shall be able to shutdown                                                                          |             |              |
| Classification of development errors                                                                               |             |              |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void                    |             |              |
| Callback Function Return Types for AUTOSAR BSW                                                                     |             |              |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API                   |             |              |
| Parameter shall be selected from multiple sets of parameters after code has been loaded and started                |             |              |
| BSW Modules shall support post-build configuration                                                                 |             |              |
| BSW Modules shall support multiple configuration sets                                                              |             |              |
| API handling in uninitialized state                                                                                |             |              |
| Init functions shall have a pointer to a config                                                                    |             |              |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 功能规范

_原文标题：Functional specification_

This chapter specifies the different functions of the CanSM module in the AUTOSAR BSW architecture.

An ECU can have different communication networks. Each network has to be identified with an unique network handle. The ComM module requests communication modes from the networks. It knows by its configuration, which handle is assigned to what kind of network. In case of CAN, it uses the CanSM module.

The CanSM module is responsible for the control flow abstraction of CAN networks:

It changes the communication modes of the configured CAN networks depending on the mode requests from the ComM module.

Therefore the CanSM module uses the API of the CanIf module. The CanIf module is responsible for the control flow abstraction of the configured CAN Controllers and CAN Transceivers (the data flow abstraction of the CanIf module is not relevant for the CanSM module). Any change of the CAN Controller modes and CAN Transceiver modes will be notified by the CanIf module to the CanSM module. Depending on this notifications and state of the CAN network state machine, which the CanSM module shall implement for each configured CAN network, the CanSM module notifies the ComM and the BswM (ref.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 通用需求

_原文标题：General requirements_

Upstream requirements:
⌈
The CanSM module shall store the current network mode for each configured CAN network internally (ref. to ).
⌋

Upstream requirements:
⌈
The internally stored network modes of the CanSM module can have the values `COMM_NO_COMMUNICATION`, `COMM_SILENT_COMMUNICATION`, `COMM_FULL_COMMUNICATION`.
⌋

Upstream requirements: ,
⌈
All effects of the CanSM state machine `CANSM_BSM` shall be operated in the context of the CanSM main function (ref. to ).
⌋

Upstream requirements:
⌈
If the CanSM state machine `CANSM_BSM` is in the state `CANSM_BSM_S_NOT_INITIALIZED`, it shall deny network mode requests from the ComM module (ref. to ).
⌋

Upstream requirements:
⌈
If CanSM has repeated one of the CanIf API calls `CanIf_SetControllerMode` (ref. to ), `CanIf_SetTrcvMode` (ref. to ), `CanIf_ClearTrcvWufFlag` (ref. ) or `CanIf_CheckTrcvWakeFlag` (ref. ) more often than CanSMModeRequestRepetitionMax (ref.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 状态 machine for each CAN 网络

_原文标题：State machine for each CAN network_

The diagram (ref. to Figure ) specifies the behavioral state machine of the CanSM module, which shall be implemented for each configured CAN network (ref. to )

### 26. Trigger：PowerOn

_原文标题：Trigger: PowerOn_

⌈
After PowerOn the CanSM state machines shall be in the state `CANSM_BSM_NOT_INITIALIZED`.
⌋

### 27. Trigger：CanSM_Init

_原文标题：Trigger: CanSM_Init_

Upstream requirements: ,
⌈
If the CanSM module is requested with the function `CanSM_Init`, this shall trigger the CanSM state machines for all configured CAN Networks (ref. to ) with the trigger `CanSM_Init`.
⌋

### 28. Trigger：CanSM_DeInit

_原文标题：Trigger: CanSM_DeInit_

Upstream requirements:
⌈
If the CanSM module is requested with the function `CanSM_DeInit`, this shall trigger the CanSM state machines for all configured CAN Networks (ref. to ) with the trigger `CanSM_DeInit`.
⌋

Note: Caller of the `CanSM_DeInit` function has to ensure all CAN networks are in the state `CANSM_NO_COMMUNICATION`

### 29. Trigger：T_START_WAKEUP_SOURCE

_原文标题：Trigger: T_START_WAKEUP_SOURCE_

Upstream requirements: ,
⌈
If the API request `CanSM_StartWakeupSource` (ref. to ) returns E_OK (ref. to ), it shall trigger the state machine with T_START_WAKEUP_SOURCE.
⌋

### 30. Trigger：T_STOP_WAKEUP_SOURCE

_原文标题：Trigger: T_STOP_WAKEUP_SOURCE_

Upstream requirements: ,
⌈
If the API request `CanSM_StopWakeupSource` (ref. to ) returns E_OK (ref. to ), it shall trigger the state machine with T_STOP_WAKEUP_SOURCE.
⌋

### 31. Trigger：T_FULL_COM_MODE_REQUEST

_原文标题：Trigger: T_FULL_COM_MODE_REQUEST_

Upstream requirements: ,
⌈
The API request `CanSM_RequestComMode` (ref. to ) with the parameter mode equal to `COMM_FULL_COMMUNICATION` shall trigger the state machine with T_FULL_COM_MODE_REQUEST, if the function parameter network matches the configuration parameter CanSMComMNetworkHandleRef (ref. to ).
⌋

### 32. Trigger：T_SILENT_COM_MODE_REQUEST

_原文标题：Trigger: T_SILENT_COM_MODE_REQUEST_

Upstream requirements: ,
⌈
The API request `CanSM_RequestComMode` (ref. to ) with the parameter mode equal to `COMM_SILENT_COMMUNICATION` shall trigger the sub state machine `CANSM_BSM_S_FULLCOM` with T_SILENT_COM_MODE_REQUEST, which corresponds to the function parameter network and the configuration parameter CanSMComMNetworkHandleRef (ref. to ).
⌋

Rationale: Regular use case for the transition of the CanNm Network mode to the CanNm Prepare Bus-Sleep mode.

### 33. Trigger：T_NO_COM_MODE_REQUEST

_原文标题：Trigger: T_NO_COM_MODE_REQUEST_

Upstream requirements: ,
⌈
The API request `CanSM_RequestComMode` (ref. to ) with the parameter mode equal to `COMM_NO_COMMUNICATION` shall trigger the state machine with T_NO_COM_MODE_REQUEST, if the function parameter network matches the configuration parameter CanSMComMNetworkHandleRef) (ref. to ).
⌋

Remark: Depending on the ComM configuration, the ComM module will request `COMM_SILENT_COMMUNICATION` first and then `COMM_NO_COMMUNICATION` or `COMM_NO_COMMUNICATION` directly (ComMNmVariant=LIGHT)".

### 34. Trigger：T_BUS_OFF

_原文标题：Trigger: T_BUS_OFF_

Upstream requirements: ,
⌈
The callback function `CanSM_ControllerBusOff` (ref. to ) shall trigger the state machine `CANSM_BSM` for the CAN network with T_BUS_OFF, if one of its configured CAN controllers matches to the function parameter ControllerId of the callback function `CanSM_ControllerBusOff`.
⌋

### 35. Guarding condition：G_FULL_COM_MODE_REQUESTED

_原文标题：Guarding condition: G_FULL_COM_MODE_REQUESTED_

Upstream requirements: ,
⌈
The guarding condition G_FULL_COM_MODE_REQUESTED of the `CanSM_BSM` state machine shall evaluate, if the latest accepted communication mode request with `CanSM_RequestComMode` (ref. to ) for the respective network of the state machine has been called with the parameter mode equal to `COMM_FULL_COMMUNICATION`.
⌋

### 36. Guarding condition：G_SILENT_COM_MODE_REQUESTED

_原文标题：Guarding condition: G_SILENT_COM_MODE_REQUESTED_

Upstream requirements: ,
⌈
The guarding condition G_SILENT_COM_MODE_REQUESTED of the `CanSM_BSM` state machine shall evaluate, if the latest accepted communication mode request with `CanSM_RequestComMode` (ref. to ) for the respective network of the state machine has been called with the parameter mode equal to `COMM_SILENT_COMMUNICATION`.
⌋

### 37. Effect：E_PRE_NOCOM

_原文标题：Effect: E_PRE_NOCOM_

Upstream requirements: ,
⌈
The effect E_PRE_NOCOM of the `CanSM_BSM` state machine shall call for the corresponding CAN network the API `BswM_CanSM_CurrentState` (ref. to ) with the parameters Network := CanSMComMNetworkHandleRef and CurrentState := `CANSM_BSWM_NO_COMMUNICATION`.
⌋

### 38. Effect：E_NOCOM

_原文标题：Effect: E_NOCOM_

Upstream requirements: ,
⌈
The effect E_NOCOM of the `CanSM_BSM` state machine shall change the internally stored network mode (ref. to ) of the addressed CAN network to `COMM_NO_COMMUNICATION`.
⌋

Upstream requirements: ,
⌈
If a communication mode request for the network is present already (ref. to ) and the stored communication mode request is `COMM_NO_COMMUNICATION`, then the effect E_NOCOM of the `CanSM_BSM` state machine shall call the API `ComM_BusSM_ModeIndication` (ref. to ) with the parameters Channel := CanSMComMNetworkHandleRef (ref. to ) and ComMode := `COMM_NO_COMMUNICATION`.
⌋

### 39. Effect：E_FULL_COM

_原文标题：Effect: E_FULL_COM_

Upstream requirements:
⌈
If ECU passive is FALSE (ref. to ), then the effect E_FULL_COM of the `CanSM_BSM` state machine shall call at 1^(st) place for each configured CAN controller of the CAN network the API `CanIf_SetPduMode` (ref. to ) with the parameters ControllerId := CanSMControllerId (ref. to ) and PduModeRequest := `CANIF_ONLINE`.
⌋

Upstream requirements:
⌈
If ECU passive is TRUE (ref. to ), then the effect E_FULL_COM of the `CanSM_BSM` state machine shall call at 1^(st) place for each configured CAN controller of the CAN network the API `CanIf_SetPduMode` (ref. to ) with the parameters ControllerId := CanSMControllerId (ref. to ) and PduModeRequest := `CANIF_TX_OFFLINE_ACTIVE`.
⌋

Upstream requirements:
⌈
After considering and in context of the effect E_FULL_COM of the `CanSM_BSM` state machine, the CanSM module shall call the API `ComM_BusSM_ModeIndication` (ref. to ) for the corresponding CAN network with the parameters Channel := CanSMComMNetworkHandleRef (ref. to ) and ComMode := `COMM_FULL_COMMUNICATION`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Effect：E_FULL_TO_SILENT_COM

_原文标题：Effect: E_FULL_TO_SILENT_COM_

Upstream requirements: ,
⌈
The effect E_FULL_TO_SILENT_COM of the `CanSM_BSM` state machine shall call at 1^(st) place for the corresponding CAN network the API `BswM_CanSM_CurrentState` (ref. to ) with the parameters Network := CanSMComMNetworkHandleRef and CurrentState := `CANSM_BSWM_SILENT_COMMUNICATION`.
⌋

Upstream requirements: ,
⌈
The effect E_FULL_TO_SILENT_COM of the `CanSM_BSM` state machine shall call at 2^(nd) place for each configured CAN controller of the CAN network the API `CanIf_SetPduMode` (ref. to ) with the parameters ControllerId := CanSMControllerId (ref. to ) and PduModeRequest := `CANIF_TX_OFFLINE`.
⌋

Upstream requirements: ,
⌈
The effect E_FULL_TO_SILENT_COM of the `CanSM_BSM` state machine shall call at 3^(th) place for the corresponding CAN network the API `ComM_BusSM_ModeIndication` (ref. to ) with the parameters Channel := CanSMComMNetworkHandleRef (ref. to ) and ComMode := `COMM_SILENT_COMMUNICATION`.
⌋

### 41. Effect：E_BR_END_FULL_COM

_原文标题：Effect: E_BR_END_FULL_COM_

Upstream requirements: ,
⌈
The effect E_BR_END_FULL_COM of the `CanSM_BSM` state machine shall be the same as E_FULL_COM.
⌋

### 42. Effect：E_BR_END_SILENT_COM

_原文标题：Effect: E_BR_END_SILENT_COM_

Upstream requirements: ,
⌈
The effect E_BR_END_SILENT_COM of the `CanSM_BSM` state machine shall be the same as E_FULL_TO_SILENT_COM.
⌋

### 43. Effect：E_SILENT_TO_FULL_COM

_原文标题：Effect: E_SILENT_TO_FULL_COM_

Upstream requirements: ,
⌈
The effect E_SILENT_TO_FULL_COM of the `CanSM_BSM` state machine shall be the same as E_FULL_COM.
⌋

### 44. Sub 状态 machine CANSM_BSM_WUVALIDATION

_原文标题：Sub state machine CANSM_BSM_WUVALIDATION_

### 45. 状态 operation to do in：S_TRCV_NORMAL

_原文标题：State operation to do in: S_TRCV_NORMAL_

Upstream requirements: ,
⌈
If for the CAN network a CAN Transceiver is configured (ref. to ), then as long the sub state machine `CANSM_BSM_WUVALIDATION` is in the state S_TRCV_NORMAL, the CanSM module shall operate the do action `DO_SET_TRCV_MODE_NORMAL` and therefore repeat for the configured CAN Transceiver of the CAN network (ref. to ) the API request `CanIf_SetTrcvMode` (ref. to ) with TransceiverMode equal to `CANTRCV_TRCVMODE_NORMAL`.
⌋

### 46. Guarding condition G_TRCV_NORMAL_E_OK

Upstream requirements: ,
⌈
The guarding condition G_TRCV_NORMAL_E_OK of the sub state machine `CANSM_BSM_WUVALIDATION` shall be passed, if the API call of has returned E_OK.
⌋

### 47. Trigger：T_TRCV_NORMAL_INDICATED

_原文标题：Trigger: T_TRCV_NORMAL_INDICATED_

Upstream requirements: ,
⌈
If CanSM module has got the `CANTRCV_TRCVMODE_NORMAL` mode indication (ref. to ) for the configured CAN Transceiver of the CAN network (ref. to ) after the respective request (ref. to ), this shall trigger the sub state machine machine `CANSM_BSM_WUVALIDATION` of the CAN network with T_TRCV_NORMAL_INDICATED.
⌋

### 48. Trigger：T_TRCV_NORMAL_TIMEOUT

_原文标题：Trigger: T_TRCV_NORMAL_TIMEOUT_

Upstream requirements: ,
⌈
After a timeout of `CANSM_MODEREQ_REPEAT_TIME` (ref. to ) for the supposed transceiver normal indication (ref. to ), this condition shall trigger the sub state machine `CANSM_BSM_WUVALIDATION` of the respective network with T_TRCV_NORMAL_TIMEOUT.
⌋

### 49. 状态 operation to do in：S_CC_STOPPED

_原文标题：State operation to do in: S_CC_STOPPED_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_WUVALIDATION` is in the state S_CC_STOPPED, the CanSM module shall operate the do action `DO_SET_CC_MODE_STOPPED` and therefore repeat for all configured CAN controllers of the CAN network (ref. to ) the API request `CanIf_SetControllerMode` (ref. to ) with ControllerMode equal to `CAN_CS_STOPPED`, if the current CAN controller mode (ref. to ) is different.
⌋

### 50. Guarding condition：G_CC_STOPPED_OK

_原文标题：Guarding condition: G_CC_STOPPED_OK_

Upstream requirements: ,
⌈
The guarding condition G_CC_STOPPED_OK of the sub state machine `CANSM_BSM_WUVALIDATION` shall be passed, if all API calls of have returned E_OK.
⌋

### 51. Trigger：T_CC_STOPPED_INDICATED

_原文标题：Trigger: T_CC_STOPPED_INDICATED_

Upstream requirements: ,
⌈
If the CanSM module has got all mode indications (ref. to ) for the configured CAN controllers of the CAN network (ref. to ) after the respective requests to stop the CAN controllers of the CAN network (ref. to ), this shall trigger the sub state machine `CANSM_BSM_WUVALIDATION` of the CAN network with T_CC_STOPPED_INDICATED.
⌋

### 52. Trigger：T_CC_STOPPED_TIMEOUT

_原文标题：Trigger: T_CC_STOPPED_TIMEOUT_

Upstream requirements: ,
⌈
After a timeout of `CANSM_MODEREQ_REPEAT_TIME` (ref. to ) for all supposed controller stopped mode indications (ref. to ), this condition shall trigger the sub state machine `CANSM_BSM_WUVALIDATION` of the respective network with T_CC_STOPPED_TIMEOUT.
⌋

### 53. 状态 operation to do in：S_CC_STARTED

_原文标题：State operation to do in: S_CC_STARTED_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_WUVALIDATION` is in the state S_CC_STARTED, the CanSM module shall operate the do action `DO_SET_CC_MODE_STARTED` and therefore repeat for all configured CAN controllers of the CAN network (ref. to ) the API request `CanIf_SetControllerMode` with ControllerMode equal to `CAN_CS_STARTED`, if the current CAN controller mode (ref. to ) is different.
⌋

### 54. Guarding condition：G_CC_STARTED_E_OK

_原文标题：Guarding condition: G_CC_STARTED_E_OK_

Upstream requirements: ,
⌈
The guarding condition G_CC_STARTED_OK of the sub state machine `CANSM_BSM_WUVALIDATION` shall be passed, if all API calls of have returned E_OK.
⌋

### 55. Trigger：T_CC_STARTED_INDICATED

_原文标题：Trigger: T_CC_STARTED_INDICATED_

Upstream requirements: ,
⌈
If CanSM module has got all mode indications (ref. to ) for the configured CAN controllers of the CAN network (ref. to ) after the respective requests to start the CAN controllers of the CAN network (ref. to ), this shall trigger the sub state machine `CANSM_BSM_WUVALIDATION` of the CAN network with T_CC_STARTED_INDICATED.
⌋

### 56. Trigger：T_CC_STARTED_TIMEOUT

_原文标题：Trigger: T_CC_STARTED_TIMEOUT_

Upstream requirements: ,
⌈
After a timeout of `CANSM_MODEREQ_REPEAT_TIME` (ref. to ) for all supposed controller started mode indications (ref. to), this condition shall trigger the sub state machine `CANSM_BSM_WUVALIDATION` of the respective network with T_CC_STARTED_TIMEOUT.
⌋

### 57. Sub 状态 machine：CANSM_BSM_S_PRE_NOCOM

_原文标题：Sub state machine: CANSM_BSM_S_PRE_NOCOM_

### 58. Guarding condition：CANSM_BSM_G_PN_NOT_SUPPORTED

_原文标题：Guarding condition: CANSM_BSM_G_PN_NOT_SUPPORTED_

Upstream requirements: ,
⌈
The guarding condition `CANSM_BSM_G_PN_NOT_SUPPORTED` of the sub state machine `CANSM_BSM_S_PRE_NO_COM` shall evaluate, if the configuration parameter CanTrcvPnEnabled (ref. to ) is FALSE, which is available via the reference CanSMTransceiverId (ref. to ) or if no CanSMTransceiverId is configured at all.
⌋

### 59. Guarding condition：CANSM_BSM_G_PN_SUPPORTED

_原文标题：Guarding condition: CANSM_BSM_G_PN_SUPPORTED_

Upstream requirements: ,
⌈
The guarding condition `CANSM_BSM_G_PN_SUPPORTED` of the sub state machine `CANSM_BSM_S_PRE_NO_COM` shall evaluate, if a CanSMTransceiverId (ref. to ) is configured and if the configuration parameter CanTrcvPnEnabled (ref. to ) is TRUE, which is available via the reference CanSMTransceiverId (ref. to ).
⌋

### 60. Sub 状态 machine：CANSM_BSM_DeinitPnSupported

_原文标题：Sub state machine: CANSM_BSM_DeinitPnSupported_

### 61. 状态 operation to do in：S_PN_CLEAR_WUF

_原文标题：State operation to do in: S_PN_CLEAR_WUF_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_DeinitPnSupported` is in the state S_PN_CLEAR_WUF, the CanSM module operate the do action `DO_CLEAR_TRCV_WUF` and therefore repeat the API request `CanIf_ClearTrcvWufFlag` and use the configured Transceiver (ref. to ) as API function parameter.
⌋

### 62. Guarding condition：G_PN_CLEAR_WUF_E_OK

_原文标题：Guarding condition: G_PN_CLEAR_WUF_E_OK_

Upstream requirements: ,
⌈
The guarding condition G_PN_CLEAR_WUF_E_OK of the sub state machine `CANSM_BSM_DeinitPnSupported` shall be passed, if the API call of has returned E_OK.
⌋

### 63. Trigger：T_CLEAR_WUF_INDICATED

_原文标题：Trigger: T_CLEAR_WUF_INDICATED_

Upstream requirements: ,
⌈
The callback function `CanSM_ClearTrcvWufFlagIndication` (ref. to ) shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the CAN network with T_CLEAR_WUF_INDICATED, if the function parameter Transceiver of `CanSM_ClearTrcvWufFlagIndication` matches to the configured CAN Transceiver (ref. to ) of the CAN network.
⌋

### 64. Trigger：T_CLEAR_WUF_TIMEOUT

_原文标题：Trigger: T_CLEAR_WUF_TIMEOUT_

Upstream requirements: ,
⌈
After a timeout of `CANSM_MODEREQ_REPEAT_TIME` (ref. to ) for the callback function `CanSM_ClearTrcvWufFlagIndication` (ref. to ), this condition shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the respective network with T_CLEAR_WUF_TIMEOUT.
⌋

### 65. 状态 operation to do in：S_CC_STOPPED

_原文标题：State operation to do in: S_CC_STOPPED_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_DeinitPnSupported` is in the state S_CC_STOPPED, the CanSM module shall operate the do action `DO_SET_CC_MODE_STOPPED` and therefore repeat for all configured CAN controllers of the CAN network (ref. to ) the API request `CanIf_SetControllerMode` with ControllerMode equal to `CAN_CS_STOPPED`, if the current CAN controller mode (ref. to ) is different.
⌋

### 66. Guarding condition：G_CC_STOPPED_E_OK

_原文标题：Guarding condition: G_CC_STOPPED_E_OK_

Upstream requirements: ,
⌈
The guarding condition G_CC_STOPPED_E_OK of the sub state machine `CANSM_BSM_DeinitPnSupported` shall be passed, if all API calls of have returned E_OK.
⌋

### 67. Trigger：T_CC_STOPPED_INDICATED

_原文标题：Trigger: T_CC_STOPPED_INDICATED_

Upstream requirements: ,
⌈
If CanSM module has got all mode indications (ref. to ) for the configured CAN controllers of the CAN network (ref. to ) after the respective requests to stop the CAN controllers of the CAN network (ref. to ), this shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the CAN network with T_CC_STOPPED_INDICATED.
⌋

### 68. Trigger：T_CC_STOPPED_TIMEOUT

_原文标题：Trigger: T_CC_STOPPED_TIMEOUT_

Upstream requirements: ,
⌈
After a timeout of `CANSM_MODEREQ_REPEAT_TIME` (ref. to ) for all supposed controller stopped mode indications (ref. to ), this condition shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the respective network with T_CC_STOPPED_TIMEOUT.
⌋

### 69. 状态 operation to do in：S_TRCV_NORMAL

_原文标题：State operation to do in: S_TRCV_NORMAL_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_DeinitPnSupported` is in the state S_TRCV_NORMAL, the CanSM module shall operate the do action `DO_SET_TRCV_MODE_NORMAL` and therefore repeat for the configured CAN Transceiver of the CAN network (ref. to ) the API request `CanIf_SetTrcvMode` (ref. to ) with TransceiverMode equal to `CANTRCV_TRCVMODE_NORMAL`.
⌋

### 70. Guarding condition：G_TRCV_NORMAL_E_OK

_原文标题：Guarding condition: G_TRCV_NORMAL_E_OK_

Upstream requirements: ,
⌈
The guarding condition G_TRCV_NORMAL_E_OK of the sub state machine `CANSM_BSM_DeinitPnSupported` shall be passed, if the API call of has returned E_OK.
⌋

### 71. Trigger：T_TRCV_NORMAL_INDICATED

_原文标题：Trigger: T_TRCV_NORMAL_INDICATED_

Upstream requirements: ,
⌈
If CanSM module has got the `CANTRCV_TRCVMODE_NORMAL` mode indication (ref. to ) for the configured CAN Transceiver of the CAN network (ref. to ) after the respective request (ref. to ), this shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the CAN network with T_TRCV_NORMAL_INDICATED.
⌋

### 72. Trigger：T_TRCV_NORMAL_TIMEOUT

_原文标题：Trigger: T_TRCV_NORMAL_TIMEOUT_

Upstream requirements: ,
⌈
After a timeout of `CANSM_MODEREQ_REPEAT_TIME` (ref. to ) for the supposed transceiver normal indication (ref. to ), this condition shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the respective network with T_TRCV_NORMAL_TIMEOUT.
⌋

### 73. 状态 operation to do in：S_TRCV_STANDBY

_原文标题：State operation to do in: S_TRCV_STANDBY_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_DeinitPnSupported` is in the state S_TRCV_STANDBY, the CanSM module shall operate the do action `DO_SET_TRCV_STANDBY` and therefore repeat for the configured CAN Transceiver of the CAN network (ref. to ) the API request `CanIf_SetTrcvMode` (ref. to ) with TransceiverMode equal to `CANTRCV_TRCVMODE_STANDBY`.
⌋

### 74. Guarding condition：G_TRCV_STANDBY_E_OK

_原文标题：Guarding condition: G_TRCV_STANDBY_E_OK_

Upstream requirements: ,
⌈
The guarding condition G_TRCV_STANDBY_E_OK of the sub state machine `CANSM_BSM_DeinitPnSupported` shall be passed, if the API call of has returned E_OK.
⌋

### 75. Trigger：T_TRCV_STANDBY_INDICATED

_原文标题：Trigger: T_TRCV_STANDBY_INDICATED_

Upstream requirements: ,
⌈
If the CanSM module has got the `CANTRCV_TRCVMODE_STANDBY` mode indication (ref. to ) for the configured CAN Transceiver of the CAN network (ref. to ) after the respective request (ref. to ), this shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the CAN network with T_TRCV_STANDBY_INDICATED.
⌋

### 76. Trigger：T_TRCV_STANDBY_TIMEOUT

_原文标题：Trigger: T_TRCV_STANDBY_TIMEOUT_

Upstream requirements: ,
⌈
After a timeout of `CANSM_MODEREQ_REPEAT_TIME` (ref. to ) for the supposed transceiver standby indication (ref. to ), this condition shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the respective network with T_TRCV_STANDBY_TIMEOUT.
⌋

### 77. 状态 operation to do in：S_CC_SLEEP

_原文标题：State operation to do in: S_CC_SLEEP_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_DeinitPnSupported` is in the state S_CC_SLEEP, the CanSM module shall operate the do action `DO_SET_CC_MODE_SLEEP` and therefore repeat for all configured CAN controllers of the CAN network (ref. to ) the API request `CanIf_SetControllerMode` (ref. to ) with ControllerMode equal to `CAN_CS_SLEEP`, if the current CAN controller mode (ref. to ) is different.
⌋

### 78. Guarding condition：G_CC_SLEEP_E_OK

_原文标题：Guarding condition: G_CC_SLEEP_E_OK_

Upstream requirements: ,
⌈
The guarding condition G_CC_SLEEP_E_OK of the sub state machine `CANSM_BSM_DeinitPnSupported` shall be passed, if all API calls of have returned E_OK.
⌋

### 79. Trigger：T_CC_SLEEP_INDICATED

_原文标题：Trigger: T_CC_SLEEP_INDICATED_

Upstream requirements: ,
⌈
If CanSM module has got all mode indications (ref. to ) for the configured CAN controllers of the CAN network (ref. to ) after the respective requests to set the CAN controllers of the CAN network to sleep mode (ref. to ), this shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the CAN network with T_CC_SLEEP_INDICATED.
⌋

### 80. Trigger：CANSM_BSM_T_CC_SLEEP_TIMEOUT

_原文标题：Trigger: CANSM_BSM_T_CC_SLEEP_TIMEOUT_

Upstream requirements: ,
⌈
After a timeout of `CANSM_MODEREQ_REPEAT_TIME` (ref. to ) for all supposed controller sleep mode indications (ref. to ), this condition shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` (ref. to Figure 7-4Figure 7-4) of the respective network with `CANSM_BSM_T_CC_SLEEP_TIMEOUT`.
⌋

### 81. 状态 operation to do in：S_CHECK_WFLAG_IN_CC_SLEEP

_原文标题：State operation to do in: S_CHECK_WFLAG_IN_CC_SLEEP_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_DeinitPnSupported` is in the state S_CHECK_WFLAG_IN_CC_SLEEP, the CanSM module operate the do action `DO_CHECK_WFLAG` and therefore repeat the API request `CanIf_CheckTrcvWakeFlag` (ref. ) and use the configured CAN Transceiver of the related Network (ref. to ) as Transceiver parameter.
⌋

### 82. Guarding condition：G_CHECK_WFLAG_E_OK

_原文标题：Guarding condition: G_CHECK_WFLAG_E_OK_

Upstream requirements: ,
⌈
The guarding condition G_CHECK_WFLAG_E_OK of the sub state machine `CANSM_BSM_DeinitPnSupported` shall be passed, if the API call of or has returned E_OK.
⌋

### 83. Trigger：T_CHECK_WFLAG_INDICATED

_原文标题：Trigger: T_CHECK_WFLAG_INDICATED_

Upstream requirements: ,
⌈
The callback function `CanSM_CheckTransceiverWakeFlagIndication` (ref. to ) shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the CAN network with T_CHECK_WFLAG_INDICATED, if the function parameter Transceiver of `CanSM_CheckTransceiverWakeFlagIndication` matches to the configured CAN Transceiver (ref. to ) of the CAN network.
⌋

### 84. Trigger：T_CHECK_WFLAG_TIMEOUT

_原文标题：Trigger: T_CHECK_WFLAG_TIMEOUT_

Upstream requirements: ,
⌈
After a timeout of `CANSM_MODEREQ_REPEAT_TIME` (ref. to ) for the callback function `CanSM_CheckTransceiverWakeFlagIndication` (ref. to ), this condition shall trigger the sub state machine `CANSM_BSM_DeinitPnSupported` of the respective network with T_CHECK_WFLAG_TIMEOUT.
⌋

### 85. 状态 operation to do in：S_CHECK_WFLAG_IN_NOT_CC_SLEEP

_原文标题：State operation to do in: S_CHECK_WFLAG_IN_NOT_CC_SLEEP_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_DeinitPnSupported` is in the state S_CHECK_WFLAG_IN_NOT_CC_SLEEP, the CanSM module operate the do action `DO_CHECK_WFLAG` and therefore repeat the API request `CanIf_CheckTrcvWakeFlag` (ref. ) and use the configured CAN Transceiver of the related Network (ref. to ) as Transceiver parameter.
⌋

### 86. Sub 状态 machine：CANSM_BSM_DeinitPnNotSupported

_原文标题：Sub state machine: CANSM_BSM_DeinitPnNotSupported_

### 87. 状态 operation to do in：S_CC_STOPPED

_原文标题：State operation to do in: S_CC_STOPPED_

Upstream requirements: ,
⌈
As long the sub state machine `CANSM_BSM_DeinitPnNotSupported` is in the state S_CC_STOPPED, the CanSM module shall operate the do action `DO_SET_CC_MODE_STOPPED` and therefore repeat for all configured CAN controllers of the CAN network (ref. to ) the API request `CanIf_SetControllerMode` (ref. to ) with ControllerMode equal to `CAN_CS_STOPPED`, if the current CAN controller mode (ref. to ) is different.
⌋

### 其余 139 章（内容从略，见纯文本全文）

88. Guarding condition：CANSM_BSM_G_CC_STOPPED_OK
89. Trigger：T_CC_STOPPED_INDICATED
90. Trigger：T_CC_STOPPED_TIMEOUT
91. 状态 operation to do in：S_CC_SLEEP
92. Guarding condition：G_CC_SLEEP_E_OK
93. Trigger：T_CC_SLEEP_INDICATED
94. Trigger：T_CC_SLEEP_TIMEOUT
95. 状态 operation to do in：S_TRCV_NORMAL
96. Guarding condition：G_TRCV_NORMAL_E_OK
97. Trigger：T_TRCV_NORMAL_INDICATED
98. Trigger：T_TRCV_NORMAL_TIMEOUT
99. 状态 operation to do in：S_TRCV_STANDBY
100.  Guarding condition：G_TRCV_STANDBY_E_OK
101.  Trigger：T_TRCV_STANDBY_INDICATED
102.  Trigger：CANSM_BSM_T_TRCV_STANDBY_TIMEOUT
103.  Sub 状态 machine：CANSM_BSM_S_SILENTCOM_BOR
104.  Effect：E_BUS_OFF
105.  状态 operation：S_RESTART_CC
106.  G_RESTART_CC_E_OK
107.  Trigger：T_RESTART_CC_INDICATED
108.  T_RESTART_CC_TIMEOUT
109.  Effect：E_TX_OFF
110.  Sub 状态 machine：CANSM_BSM_S_PRE_FULLCOM
111.  状态 operation to do in：S_TRCV_NORMAL
112.  Guarding condition：G_TRCV_NORMAL_E_OK
113.  Trigger：T_TRCV_NORMAL_INDICATED
114.  Trigger：T_TRCV_NORMAL_TIMEOUT
115.  状态 operation to do in：S_CC_STOPPED
116.  Guarding condition：G_CC_STOPPED_OK
117.  Trigger：T_CC_STOPPED_INDICATED
118.  Trigger：T_CC_STOPPED_TIMEOUT
119.  状态 operation to do in：S_CC_STARTED
120.  Guarding condition：G_CC_STARTED_OK
121.  Trigger：T_CC_STARTED_INDICATED
122.  Trigger：T_CC_STARTED_TIMEOUT
123.  Sub 状态 machine CANSM_BSM_S_FULLCOM
124.  Guarding condition：G_BUS_OFF_PASSIVE
125.  Effect：E_BUS_OFF_PASSIVE
126.  Trigger：T_CHANGE_BR_REQUEST
127.  Effect：E_CHANGE_BR_BSWM_MODE
128.  Trigger：T_BUS_OFF
129.  Effect：E_BUS_OFF
130.  状态 operation to do in：S_RESTART_CC
131.  Guarding condition：G_RESTART_CC_OK
132.  Trigger：T_RESTART_CC_INDICATED
133.  Trigger：T_RESTART_CC_TIMEOUT
134.  Effect：E_TX_OFF
135.  Guarding condition：G_TX_ON
136.  Effect：E_TX_ON
137.  Trigger：T_TX_TIMEOUT_EXCEPTION
138.  Notes
139.  Sub 状态 machine：CANSM_BSM_S_TX_TIMEOUT_EXCEPTION
140.  Trigger：T_CC_STOPPED_TIMEOUT
141.  Guarding condition：G_CC_STOPPED_E_OK
142.  状态 operation：DO_SET_CC_MODE_STOPPED ()
143.  Trigger：T_CC_STOPPED_INDICATED
144.  Trigger：T_CC_STARTED_INDICATED
145.  Guarding condition：G_CC_STARTED_E_OK
146.  状态 operation：DO_SET_CC_MODE_STARTED
147.  ExitPoint：TxTimeout
148.  Sub 状态 machine：CANSM_BSM_S_CHANGE_BAUDRATE
149.  状态 operation to do on entry：DO_SET_BAUDRATE_DIRECT
150.  Guarding condition：G_SET_BAUDRATE_DIRECT_OK
151.  Guarding conditions：G_SET_BAUDRATE_DIRECT_NOT_OK
152.  状态 operation to do in：S_CC_STOPPED
153.  Guarding condition：G_CC_STOPPED_OK
154.  Trigger：T_CC_STOPPED_INDICATED
155.  Trigger：T_CC_STOPPED_TIMEOUT
156.  Effect：E_CHANGE_BAUDRATE
157.  状态 operation to do in：S_CC_STARTED
158.  Guarding condition：G_CC_STARTED_OK
159.  Trigger：T_CC_STARTED_INDICATED
160.  Trigger：T_CC_STARTED_TIMEOUT
161.  Guarding condition：G_NO_COM_MODE_REQUESTED
162.  Guarding condition：G_NO_COM_MODE_NOT_REQUESTED
163.  错误分类
164.  Development 错误
165.  Runtime 错误
166.  Production 错误
167.  Extended Production 错误
168.  CANSM_E_BUS_OFF
169.  ECU online active / passive 模式
170.  Non-functional 设计 rules
171.  API 规范
172.  Imported 类型
173.  类型定义
174.  CanSM_ConfigType
175.  CanSM_BswMCurrentStateType
176.  定义 of symbol CANSM_BUSOFF_CONFIGURED
177.  功能定义
178.  CanSM_Init
179.  CanSM_DeInit
180.  CanSM_RequestComMode
181.  CanSM_GetCurrentComMode
182.  CanSM_StartWakeupSource
183.  CanSM_StopWakeupSource
184.  Optional
185.  CanSM_SetBaudrate
186.  CanSM_SetEcuPassive
187.  Call-back 通知
188.  CanSM_ControllerBusOff
189.  CanSM_ControllerModeIndication
190.  CanSM_TransceiverModeIndication
191.  CanSM_TxTimeoutException
192.  CanSM_ClearTrcvWufFlagIndication
193.  CanSM_CheckTransceiverWakeFlagIndication
194.  CanSM_ConfirmPnAvailability
195.  CanSM_ConfirmCtrlPnAvailability
196.  Scheduled functions
197.  CanSM_MainFunction
198.  Expected 接口
199.  Mandatory 接口
200.  Remark：Usage of CanIf_SetPduMode
201.  Optional 接口
202.  Configurable 接口
203.  <User_GetBusOffDelay>
204.  时序图
205.  Sequence diagram CanSm_StartCanController
206.  Sequence diagram CanSm_StopCanController
207.  配置规范
208.  How to read this chapter
209.  Containers and 配置 parameters
210.  CanSM
211.  CanSMConfiguration
212.  CanSMGeneral
213.  CanSMManagerNetwork
214.  CanSMDemEventParameterRefs
215.  发布信息
216.  附录
217.  不适用需求
218.  Change history of AUTOSAR traceable items
219.  Traceable item history of this document according to AUTOSAR Release R25-11
220.  Added 规范 Items in R25-11
221.  Changed 规范 Items in R25-11
222.  Deleted 规范 Items in R25-11
223.  Traceable item history of this document according to AUTOSAR Release R24-11
224.  Added 规范 Items in R24-11
225.  Changed 规范 Items in R24-11
226.  Deleted 规范 Items in R24-11
