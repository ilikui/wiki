# Description of the AUTOSAR standard errors (`ErrorDescription`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 377 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_ErrorDescription_377\AUTOSAR_CP_EXP_ErrorDescription.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_ErrorDescription_377\AUTOSAR_CP_EXP_ErrorDescription.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_ErrorDescription_377\zzgen\CP_EXP_ErrorDescription.complete.txt`

## 文档简介

The purpose of the document is to:

* Give an overview of the dysfunctional behavior of the BSW not limited to one specific module ;
* Clarify error handling mechanisms to guarantee the same behavior for any BSW implementation and permit a safer exchange of module ;
* List the BSW mechanisms provided for application software and possibly point out the lacks to be fulfilled ;
* Give the failure modes coverage of the different mechanisms in terms of detection and recovery for a safety analysis point of view.

This document is aimed at developers of BSW-modules and application/SW-C developers.

The document describes all the existing errors handled by the AUTOSAR Basic Software and the way the architecture reacts to these errors according to the FDIR process (Fault, Detection, Isolation and Recovery). The document describes also the coverage of the identified failure modes for each existing error handling mechanism. The failure modes are assumed to be random failures related to the hardware. The incorporated SW mechanisms to detect these HW failures may however also detect SW (design) faults. The mechanisms are mapped to the list of failure modes and the effect of the mechanisms in te

## 章节详细内容

### 1. 目的
*原文标题：Purpose*

The purpose of the document is to:

* Give an overview of the dysfunctional behavior of the BSW not limited to one specific module ;
* Clarify error handling mechanisms to guarantee the same behavior for any BSW implementation and permit a safer exchange of module ;
* List the BSW mechanisms provided for application software and possibly point out the lacks to be fulfilled ;
* Give the failure modes coverage of the different mechanisms in terms of detection and recovery for a safety analysis point of view.

This document is aimed at developers of BSW-modules and application/SW-C developers.

The document describes all the existing errors handled by the AUTOSAR Basic Software and the way the architecture reacts to these errors according to the FDIR process (Fault, Detection, Isolation and Recovery). The document describes also the coverage of the identified failure modes for each existing error handling mechanism. The failure modes are assumed to be random failures related to the hardware. The incorporated SW mechanisms to detect these HW failures may however also detect SW (design) faults.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 限制
*原文标题：Limitations*

For the time being, the scope of the document is limited to the CAN communication stack and to the memory stack.

This document is only descriptive and does not contain requirements. Functionalities and requirements of the Basic Software modules are specified in the specification documents.

The document describes only the standard errors included in an AUTOSAR architecture. Specific errors can be added because of specific implementation and/or specific hardware properties.

### 3. Relation to other documents

This document is related to many other documents published within AUTOSAR. The purpose of this document is not to replace any of these other documents, but to give a complete view of the error handling in the BSW. Consequently there is a significant amount of overlap between this document and other documents. Note that this document is only descriptive and does not contain requirements.

### 4. Guide to the document

Here is a summary of the content of the following chapters.

*  This chapter describes generic error handling mechanisms.

*

  * Chapter  This chapter gives an overview of the existing error handling mechanisms in the communication stack. It describes also the mappings of each mechanism to the identified failure modes.
  * Chapter  and Chapter  These chapters describe precisely the AUTOSAR architecture behavior for each error of the communication stack.

*

  * Chapter  This chapter gives an overview of the existing error handling mechanisms in the memory stack. It describes also the mappings of each mechanism to the identified failure modes.
  * Chapter , Chapter , Chapter  These chapters describe precisely the AUTOSAR architecture behavior for each error of the memory stack.

For each error, a figure presents an information-flow summary for that error, and indicates where the error is detected, mitigated or recovered. Also for each module, a table details the specific items regarding error handling:

| Detection | This describes how the module detects or is notified of this error case. |
|---|---|
| Reaction | This indicates the internal reaction of the module (e.g. internal state changes). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Generic Mechanisms

This section describes generic mechanisms which are involved in the error handling strategies for different errors mentioned in this document. These mechanisms will not be described again in the description of the errors in chapters 5 and 6.

### 6. Report to the 诊断 Event 管理器 (DEM)
*原文标题：Report to the Diagnostic Event Manager (DEM)*

### 7. Summary

### 8. Roles of the 模块
*原文标题：Roles of the modules*

### 9. 模块 reporting the 错误 (other BSW or SWC)
*原文标题：Module reporting the error (other BSW or SWC)*

| Detection | depend on the SWC or BSW Module |
|---|---|
| Reaction | depend on the SWC or BSW Module |
| Report | * BSWs report the new status of the event with the Dem_SetEventStatus API or Det_ReportRuntimeError API |

* SWCs report the new status of the event with the `Dem_SetEventStatus` API through the RTE
| Recovery | Implementation specific |
|---|---|

### 10. 诊断 Event 管理器
*原文标题：Diagnostic Event Manager*

| Detection | * The DEM is notified by BSWs with the Dem_SetEventStatus API when an error occurs ( DEM_EVENT_STATUS_FAILED or DEM_EVENT_STATUS_PREFAILED) or is recovered ( DEM_EVENT_STATUS_PASSED or DEM_EVENT_STATUS_PREPASSED). |
|---|---|

* The DEM is notified by SWCs with the `Dem_SetEventStatus` API when an error occurs ( `DEM_EVENT_STATUS_FAILED` or `DEM_EVENT_STATUS_PREFAILED`) or is recovered ( `DEM_EVENT_STATUS_PASSED` or `DEM_EVENT_STATUS_PREPASSED`).
| Reaction | Storage of the event status  Handling of a FreezeFrame |
|---|---|
| Report | * SWS_Dem_00016 Depending on the DEM configuration, it can inform the FIM  and/or a SWC with the EventStatusChanged operation of the CallbackEventStatusChange DEM client server interface (connected to the configurable interfaces EventStatusChanged  or DTCStatusChanged  function). |

* A SWC can poll the DEM to get the status of an Event (operation GetEventStatus of the DiagnosticMonitor client server interface, connected to the `Dem_GetEventStatus` function )
| Recovery | The DEM has some |
|---|---|

* `SWS_Dem_127` healing capabilities (by a defined healing cycle for BSWs or monitor function for SWC).
* `SWS_Dem_004` debouncing capabilities

### 11. DET

The DET (Default Error Tracer) provides access to the DEM and RTE(SW-C) over integrator specific code. The occurrence of a runtime error (signaled by calling `Det_ReportRuntimeError` API) triggers the execution of a corresponding error handler which may be implemented as callout within the Det by an integrator of a particular ECU and may only include the storage of the corresponding error event to a memory, a call to the module Dem or the execution of short and reasonable actions.

### 12. 功能 Inhibition 管理器
*原文标题：Function Inhibition Manager*

| Detection | Different detection mechanisms exist: |
|---|---|

* access to the DEM information (polling for the Event attached to the requested FID with `Dem_GetEventStatus` , or dump of the event status on startup )
* notification by the DEM by the `Fim_DemTriggerOnEventStatus` callout
| Reaction | Depending on the implementation, storage of the Event status when a change is reported by the DEM. |
|---|---|
| Report | The FIM can be polled by the SWCs with Fim_GetFunctionPermission . It does not notify the SWCs. |
| Recovery |  |

### 13. RTE

The RTE provides access to the DEM and FIM operations for the SWCs. It executes the runnables associated to the DEM monitors (DEM callbacks) when information is required from a SWC or when a SWC must be notified. No specific functionalities are provided for the DEM by the RTE.

### 14. 通知 to SWCs
*原文标题：Notification to SWCs*

| Detection | Notification by the FIM or DEM (through the RTE) |
|---|---|
| Reaction | N/A |
| Report | N/A |
| Recovery | N/A |

### 15. Communication related 错误
*原文标题：Communication related errors*

### 16. 概述
*原文标题：Overview*

### 17. 错误处理 mechanisms
*原文标题：Error handling mechanisms*

### 18. 错误 list for CAN stack
*原文标题：Error list for CAN stack*

| Error | Description | Detection module | DEM/DET(runtime) error (reporter in bold) | Mitigator with BSW recovery actions |
|---|---|---|---|---|
| Driver Level Errors | < | < | < | < |
| Bus Off error on a CAN network | CAN | CANSM_E_BUS_OFF | CANSM: \rightarrow Bus Off Recovery state machine |  |
| Communication with the CAN controller timed out | CANSM | CANSM_E_MODE_REQUEST_TIMEOUT | CANSM: \rightarrow Timeout Recovery state machine |  |
| Signal errors | < | < | < | < |
| Cannot transmit a new message because the transmission queue is full | CANIF | not reported to the DEM reported to the CANIF reported to the SW-Cs | NONE indirectly, TX deadline monitoring |  |
| CAN frame received with an unexpected Data Length Counter, and DLC check enabled | CANIF | CANIF_E_INVALID_DATA_LENGTH | NONE indirectly, RX deadline monitoring |  |
| An expected message was not received in time by COM. | AUTOSAR COM | not reported to the DEM reported to the SW-Cs  and  for details of the COM timeout handling in AUTOSAR.] | AUTOSAR COM/SW-C |  |
| Timeout while waiting for the confirmation of a transmission. |  |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Mappings of EH mechanisms to hardware failure modes

The following communication hardware failure modes have been considered:

| ID | Short name | Description |
|---|---|---|
| CH01 | Permanent loss of one CAN frame ID type | All CAN frames with a specific ID are lost during reception or transmission. |
| CH02 | Temporary loss of one CAN frame | One CAN frame is temporarily lost during reception or transmission. |
| CH03 | One repeated CAN frame | One CAN frame (with identical ID and content) is unintentionally repeated one or more times on the CAN bus. Not flooded bus. |
| CH04 | One spurious CAN frame | One CAN frame with credible content is spuriously transmitted (and hence received). |
| CH05 | CAN frames out of sequence | The order in which CAN frames have been sent is not the order in which they are received. |
| CH06 | One corrupt CAN frame | The content of one CAN frame is corrupted |
| CH07 | One delayed CAN frame | One expected CAN frame transfer is delayed compared to expected transfer. |
| CH08 | CAN bus blocked | CAN communication is lost for all users |
| CH09 | CAN bus flooded | CAN frames are continuously transmitted on the CAN bus. |
| CH10 | Wrong routing | CAN frame is received by an incorrect destination or received from wrong source. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Loss of communication channel

### 21. CAN Bus Off

### 22. Summary

Note: The AUTOSAR COM module (or other modules like CANNM or CANTP) will react on a BusOff indirectly because of the loss of the communication channel, but it is not aware of the specific kind of error. For this reason, these modules are not considered in this section.

### 23. Roles of the 模块
*原文标题：Roles of the modules*

### 24. CAN controller (peripheral)

| Detection | HW dependant |
|---|---|
| Reaction | Any bus-off recovery from the CAN controller shall be disabled. |
| Report | Depending on the CAN Driver configuration: |

* Log the error in a register
* Report the error to the CAN Driver if interrupt configured
| Recovery | See .  Any bus-off recovery from the CAN controller shall be disabled. |
|---|---|

### 25. CAN 驱动
*原文标题：CAN Driver*

| Detection | Depending on the CAN Driver configuration: |
|---|---|

* Polling of the CAN controller register
* Activation by an interrupt
| Reaction | The driver transitions to CANIF_CS_STOPPED  Try to cancel pending messages |
|---|---|
| Report | The error is reported to the CAN Interface by the CanIf_ControllerBusOff(controller) API. |
| Recovery | See . |

### 26. CAN 接口
*原文标题：CAN Interface*

| Detection | Notified by CanIf_ControllerBusOff(controller) (see  above) |
|---|---|
| Reaction | The controller operation mode is set to CANIF_CS_STOPPED |
| Report | The error is reported to the CAN State Manager by the CanSm_ControllerBusOff (controller) |
| Recovery | The recovery is triggered by the CAN State Manager: |

* `CanIf_SetControllerMode`(Controller, `CANIF_CS_STARTED`).
* `Can_InitController`(Controller, *Config).
* `Can_SetControllerMode` (Controller, `CAN_T_STARTED`).

### 27. CAN 状态管理器
*原文标题：CAN State Manager*

| Detection | Notified by CanSm_ControllerBusOff(controller) (see above) |
|---|---|
| Reaction | * Count the bus-off events |

* Start the error recovery mechanism
| Report | * If the error is confirmed, it is reported to the DEM. If the recovery succeeds, the event is cleared from the DEM (see , , ). The DEM event for this error is configured per CAN network in the CANSM_E_BUS_OFF (see ). |
|---|---|

* CANSM informs the Communication Manager about the communication status (`COMM_SILENT_COMMUNICATION`) notified with `ComM_BusSM_ModeIndication` (see )
* CANSM informs the BSW State Manager of the BusOff event (with `BswM_CanSM_CurrentState`) (see )
| Recovery | The CAN State Manager controls the error recovery mechanism, which includes |
|---|---|

* a reset of the CAN controller: `CanIf_SetControllerMode`(..., `CANSM_CS_STARTED`)
* disabling/enabling the transmit path: `CanIf_SetPduMode`(...,`CANIF_SET_TX_OFFLINE`/ `CANIF_SET_TX_ONLINE`)

### 28. Communication 管理器
*原文标题：Communication Manager*

| Detection | Notified by ComM_BusSM_ModeIndication when the Bus Off is confirmed or recovered (see  above) |
|---|---|
| Reaction | N/A |
| Report | Propagate the indicated state to the users (through the RTE) |
| Recovery | N/A |

### 29. BSW 状态管理器
*原文标题：BSW State Manager*

| Detection | Notified by BswM_CanSM_RequestMode when the Bus Off is confirmed or recovered (see  above) |
|---|---|
| Reaction | not standardized |
| Report | not standardized |
| Recovery | N/A |

### 30. CAN Controller Hardware Timeout

### 31. Summary

### 32. Roles of the 模块
*原文标题：Roles of the modules*

### 33. CAN 驱动
*原文标题：CAN Driver*

| Detection | The CAN driver is responsible for the detection of timeout (or defective hardware) in: Can_SetBaudrate() Can_SetControllerMode() The detection is performed in each function when the CanTimeoutDuration is elapsed |
|---|---|
| Reaction | The CAN driver does not perform any reaction. In case of timeout, the CAN driver does not complete the requested operation and returns NOT_OK error to the caller. |
| Report | The CAN driver does not report any timeout event to the upper layers. |
| Recovery | See |

### 34. CAN 接口
*原文标题：CAN Interface*

| Detection | There is no timeout detection by CanIf |
|---|---|
| Reaction | There is no reaction performed by CanIf |
| Report | The CanIf does not report any timeout event to the upper layers. |
| Recovery | The recovery is triggered by the CAN State Manager: |

* `CanIf_SetControllerMode`(Controller, `CANIF_CS_STARTED`).
* `Can_InitController`(Controller, *Config).
* `Can_SetControllerMode` (Controller, `CAN_T_STARTED`).

### 35. CAN 状态管理器
*原文标题：CAN State Manager*

| Detection | The timeout is detected when the maximal amount of mode request repetitions (CanSMModeRequestRepetitionMax)  without a respective mode indication from the CanIf module elapsed. |
|---|---|
| Reaction | * Count the controller timeout events |

* Start the error recovery mechanism
| Report | * When CANSM module state machine was triggered with T_REPEAT_MAX, it reports CANSM_E_MODE_REQUEST_TIMEOUT to DET as a runtime (see ) |
|---|---|

* CANSM informs the Communication Manager about the communication status (`COMM_SILENT_COMMUNICATION`, `COMM_NO_COMMUNICATION`, `COMM_FULL_COMMUNICATION`, notified with `ComM_BusSM_ModeIndication`) (see   )
* CANSM informs the Communication Manager about the communication status (`CANSM_BSWM_NO_COMMUNICATION`, `CANSM_BSWM_SILENT_COMMUNICATION`, `CANSM_BSWM_BUS_OFF`, notified with `BswM_CanSM_CurrentState`) (see   )
| Recovery | The CAN State Manager controls the error recovery mechanism, which includes |
|---|---|

* a reset of the CAN controller: `CanIf_SetControllerMode`(..., `CANSM_CS_STARTED`)
* disabling/enabling the transmit path: `CanIf_SetPduMode`(...,`CANIF_SET_TX_OFFLINE`/ `CANIF_SET_TX_ONLINE`)

### 36. Communication 管理器
*原文标题：Communication Manager*

| Detection | Notified by ComM_BusSM_ModeIndication when the Bus Off is confirmed or recovered (see  above) |
|---|---|
| Reaction | N/A |
| Report | Propagate the indicated state to the users (through the RTE) |
| Recovery | N/A |

### 37. BSW 状态管理器
*原文标题：BSW State Manager*

| Detection | Notified by BswM_CanSM_RequestMode when the Bus Off is confirmed or recovered (see  above) |
|---|---|
| Reaction | not standardized |
| Report | not standardized |
| Recovery | N/A |

### 38. Signal 错误
*原文标题：Signal error*

### 39. CAN Transmission buffer full

### 40. Summary

Note: this mechanism can be used in combination with the  or  mechanisms.

### 41. Roles of the 模块
*原文标题：Roles of the modules*

### 42. CAN 驱动
*原文标题：CAN Driver*

| Detection | A Write request is received when there are no more available HW object for this transmission, and other transmission cannot be preempted. |
|---|---|

* `Can_Write` , , , ,
| Reaction | N/A |
|---|---|
| Report | The CAN driver informs the CAN Interface that it is currently busy with an higher priority message or cannot be preempted, and cannot send a new message currently |
| Recovery | N/A |

### 43. CAN 接口
*原文标题：CAN Interface*

| Detection | Transmit buffering can be enabled or disabled: |
|---|---|

* Transmit buffering disabled: if a transmit request fails, then the L-PDUs to be transmitted are lost and the API `CanIf_Transmit`() returns the value E_NOT_OK.
* If the function `CanIf_Transmit`() is called and if the CanIf has to store the L-PDU in the transmit L-PDU buffer, then if the corresponding CanIfTxBuffer is already filled, the CanIf shall overwrite the older L-PDU with the recent L-PDU (see )
| Reaction | N/A |
|---|---|
| Report | The error is either reported by the return code of CanIf_Transmit() or indirectly by the lack or transmission confirmation afterwards. |
| Recovery | N/A |

See also the , which provide a mechanism to detect and react (from SWC) in case of such an error. This error may also impact a TP (Transport Protocol) communication; in that case, this will be detected as a .

### 44. CAN Reception DLC 错误
*原文标题：CAN Reception DLC error*

### 45. Summary

Note: the  can be used in combination with the  mechanism. Also, the reception of a wrong DLC does not necessarily indicate a malfunction in the ECU, but can be caused by the ECU's environment.

### 46. Roles of the 模块
*原文标题：Roles of the modules*

### 47. CAN 接口
*原文标题：CAN Interface*

| Detection | * (CanIf_RxIndication) The CAN Interface is responsible for checking the length when a receive indication is triggered. This check occurs only in development mode or in production mode if the module is configured with the DLC check feature and the PDU is configured with a non-null DLC (see ) |
|---|---|
| Reaction | N/A |
| Report | SWS_CanIf_00168: If the DLC check fails, the CANIF reports CANIF_E_INVALID_DATA_LENGTH error to DET as runtime-error. Other upper layers are not informed. No receive indication is executed. Error reactions should be based on the COM RX Deadline Monitoring mechanism. SWS_CanIf_00006: Invalid values of CanDlc  will be reported to the DET (CANIF_E_INVALID_DATA_LENGTH) |
| Recovery | No receive indication is executed |

See also the, which provide a mechanism to detect and react (from SWC) in case of such an error. This error may also affect the CAN Transport or Network Management protocols; in these cases, the error will also be detected by the  mechanism or by the Network Management protocol.

### 48. COM RX Deadline Monitoring

### 49. Summary

### 50. Roles of the 模块
*原文标题：Roles of the modules*

### 51. AUTOSAR COM

| Detection | If configured, AUTOSAR COM will notice the failure because no signals were received for a given period of time |
|---|---|
| Reaction | AUTOSAR COM can replace the value with a default value or keep the previous value. |
| Report | The upper layer (RTE) is notified by Com_CbkRxTOut |
| Recovery | AUTOSAR COM can replace the value with a default value or keep the previous value. |

### 52. RTE

| Detection | The RTE is notified by AUTOSAR COM by Rte_COMCbkRxTOut_<sn> (or Rte_COMCbkRxTOut_<sg>). (see  above) |
|---|---|
| Reaction | N/A |
| Report | The RTE informs the SWC with a DataReceiveErrorEvent. |
| Recovery | See  and . |

### 53. SWC

| Detection | The SWC is notified by the RTE (DataReceiveErrorEvent), the status of the transmission is requested with an Rte_Feedback API. (see  above) |
|---|---|
| Reaction | The SWC can decide to re-send the signals or ignore the error. |
| Report | N/A |
| Recovery | The SWC can decide to re-send the signals. |

### 54. COM TX Deadline Monitoring

### 55. Summary

This feature should only be used if the lower layer communication modules provide confirmation for the transmissions.

### 56. Roles of the 模块
*原文标题：Roles of the modules*

### 57. AUTOSAR COM

| Detection | If the transmission deadline monitoring is configured, AUTOSAR COM will notice a timeout after the deadline for transmission is elapsed, if the lower layer modules do not confirm the transmission. |
|---|---|
| Reaction | N/A |
| Report | The upper layer (RTE) is notified by Com_CbkTxTOut |
| Recovery | See . |

### 58. RTE

| Detection | The RTE is notified by AUTOSAR COM with:  Rte_COMCbkTxTErr_<sn> (or Rte_COMCbkTxTOut_<sn>?) |
|---|---|
| Reaction | N/A |
| Report | The RTE informs the SWC with a DataSendCompletedEvent, and provides the status with an Rte_Feedback API. |
| Recovery | See . |

### 59. SWC

| Detection | The SWC is notified by the RTE (DataSendCompletedEvent), the status of the transmission is requested with an Rte_Feedback API. |
|---|---|
| Reaction | The SWC can decide to re-send the signals, log or ignore the error. |
| Report | N/A |
| Recovery | The SWC can decide to re-send the signals. |

### 60. CAN 传输协议错误 during transmission
*原文标题：CAN Transport Protocol error during transmission*

This use case is a functionality of the Transport Protocol, and is defined in the functional behavior of the CANTP module. It is mentioned here for completeness of the use cases where a CAN frame fails to be transmitted. The analysis below only takes into account a timeout error in the CANTP protocol, but the behavior will be the same for other busses or other transport protocol errors.

### 61. Summary

Note: In the figure above, the DCM represents the CANTP user. Other users of CANTP should react similarly (they will receive the indication of failures, and are responsible for initiating a recovery). Another user could be a SWC, with the communication routed to AUTOSAR COM by the PDU Router, or a Complex Driver.

### 62. Roles of the 模块
*原文标题：Roles of the modules*

### 63. CANTP

| Detection | The CANTP module implement the CAN Transport Layer protocol, and is responsible to detect any timeout during a transmission. |
|---|---|
| Reaction | If a timeout is detected, the transmission is cancelled. The module is ready to process another transmission request. |
| Report | Any error is reported to the DET as a runtime error (event CANTP_E_TX_COM, CANTP_E_COM) Note: these events cannot be used during run-time to build a reaction for this error case because it does not differentiate different error cases or different communication channels.  The error is also reported to the user of the CANTP (for example, the DCM through the PDUR) with the PduR_CanTpTxConfirmation. |
| Recovery | N/A |

### 64. PDUR

| Detection | The PDUR is informed via the PduR_CanTpTxConfirmation API. (see  above) |
|---|---|
| Reaction | N/A |
| Report | The error is routed to the CANTP user (Dcm_TxConfirmation) |
| Recovery | N/A |

### 65. DCM

| Detection | The DCM is informed with the Dcm_TxConfirmation Result parameter (see  above). There is also an internal timeout handler for diagnostic sessions. |
|---|---|
| Reaction | Transmission resources (transmit buffer) are unlocked. And other error handling features (timeout in the DCM) are cancelled. |
| Report | The user is informed with the ConfirmationRespPend operation |
| Recovery | N/A |

Note: Other users of CANTP should provide a similar notification callout and should react similarly. This is for example the case of the AUTOSAR COM module.

### 66. CAN 传输协议错误 during reception
*原文标题：CAN Transport Protocol error during reception*

### 67. Summary

Note: In the figure above, the DCM represent the CANTP user. Other users of CANTP should react similarly (they will receive the indication of failures, and are responsible for initiating a recovery). Another user could be a SWC, with the communication routed to AUTOSAR COM by the PDU Router, or a Complex Driver.

### 68. Roles of the 模块
*原文标题：Roles of the modules*

### 69. CANTP

| Detection | The CANTP module implement the CAN Transport Layer protocol, and is responsible to detect any timeout during a reception. |
|---|---|
| Reaction | If a timeout is detected, the reception is cancelled. |
| Report | Any error is reported to the DET as a runtime error (event CANTP_E_RX_COM, CANTP_E_COM) Note: these events cannot be used to build a reaction for this error case because it does not differentiate different error cases or different communication channels.  The error is also reported to the user of the CANTP (for example, the DCM through the PDUR) with the PduR_CanTpRxIndication. |
| Recovery | N/A |

### 70. PDUR

| Detection | The PDUR is informed via the PduR_CanTpRxIndication API. (see  above) |
|---|---|
| Reaction | N/A |
| Report | The error is routed to the CANTP user (Dcm_RxIndication) |
| Recovery | N/A |

### 71. DCM

| Detection | The DCM is informed with the Dcm_RxIndication Result parameter. There is also an internal timeout handler for diagnostic sessions |
|---|---|
| Reaction | Reception resources (receive buffer) are unlocked. |
| Report | N/A |
| Recovery | N/A |

Note: Other users of CANTP should provide a similar notification callout and should react similarly. This is for example the case of the AUTOSAR COM module.

### 72. CANNM TX Deadline Monitoring

This use case is not really an error. It is a functionality of the Network Management, and is defined in the functional behavior of the CANNM module. It is mentioned here for completion of the use cases where a CAN frame fails to be transmitted.

### 73. Client / Server timeout

### 74. Summary

### 75. Roles of the 模块
*原文标题：Roles of the modules*

### 76. RTE

| Detection | If configured, the RTE is responsible for the detection of timeouts. (Note that there are some exception for local inter-ECU communication where timeout are not taken into account) |
|---|---|
| Reaction | N/A |
| Report | The RTE informs the SWC with a AsynchronousServerCallReturnsEvent, and provides the status with an Rte_Call or Rte_Result API. |
| Recovery | See |

### 77. SWC

| Detection | The SWC is notified by the RTE (DataSendCompletedEvent), the status of the transmission is returned with the Rte_Call or Rte_Result API. |
|---|---|
| Reaction | The SWC can decide to re-send the request, log or ignore the error. |
| Report | N/A |
| Recovery | The SWC can decide to re-send the request. |

### 78. NVRAM related 错误
*原文标题：NVRAM related errors*

### 79. 概述
*原文标题：Overview*

### 80. 错误处理 mechanisms
*原文标题：Error handling mechanisms*

On the lower levels of the NVRAM stack, mechanisms are implemented in the drivers to detect hardware access problems. Detection mechanisms are harmonized between EEPROM and Flash drivers. On the upper layers of the NVRAM stack (mainly in the NVRAM manager), mechanisms are implemented to detect data corruption, memory address corruption and loss of redundancy. All the recovery mechanisms for the detected errors in the NVRAM stack are handled by the NVRAM Manager. The error can be reported in polling or interrupt mode. The whole memory stack must be configured consistently with the usage done by SWC and BSW users.

### 81. 错误 list for NVRAM stack
*原文标题：Error list for NVRAM stack*

| Error | Description | Detection module | DEM error (reporter in bold) | Mitigator with BSW recovery actions |
|---|---|---|---|---|
| Driver Level Errors | < | < | < | < |
| The flash write job failed due to a hardware error. | FLS | FLS_E_WRITE_FAILED | NVM: \rightarrow Write Retry |  |
| The flash erase job failed due to a hardware error. | FLS | FLS_E_ERASE_FAILED | NVM: \rightarrow Write Retry if write processing involved |  |
| The flash read job failed due to a hardware error. | FLS | FLS_E_READ_FAILED | NVM: \rightarrow Read Retry \rightarrow Read Redundant Block \rightarrow Read ROM block |  |
| The flash compare job failed due to a hardware error. | FLS | FLS_E_COMPARE_FAILED | None |  |
| Expected hardware ID not matched during initialization of the driver. | FLS | FLS_E_UNEXPECTED_FLASH_ID | None |  |
| The EEPROM write job failed due to a hardware error. | EEP | EEP_E_WRITE_FAILED | NVM: \rightarrow Write Retry |  |
| The EEPROM erase job failed due to a hardware error. | EEP | EEP_E_ERASE_FAILED | NVM: \rightarrow Write Retry if write processing involved |  |
| The EEPROM read job failed due to a hardware error. |  |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 82. Mappings of EH mechanisms to NVRAM hardware failure modes

The following NVRAM hardware failure modes have been considered:

| ID | Short name | Description |
|---|---|---|
| FM01 | No access | The memory device cannot be accessed. |
| FM02 | Read corrupt data | Data read from the memory is corrupted i.e. not as intended. |
| FM03 | Read from incorrect address | The cells at the intended address are not read. The values from other cells are obtained instead. |
| FM04 | Write corrupt data | Data written into the memory is corrupted by the memory device i.e. stored data is not as intended. |
| FM05 | Write to incorrect address | The cells at the intended address are not written to. The values of other cells are overwritten instead. |

The tables below show error handling mechanisms relevant for each FM and a qualitative estimation of the efficiency of the mechanisms. The qualitative measure is defined by:

* A - Full coverage for the considered FM
* P - Partial coverage for the considered FM
* N - No coverage for the considered FM

| ID | Failure Mode | Description | Job Failure Detection | CRC Check | Static Block ID Check | Write Verification |
|---|---|---|---|---|---|---|
| FM01 | No access | The memory device cannot be accessed. |  |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 112 章（内容从略，见纯文本全文）

83. 驱动 level 错误
84. Flash write job 错误
85. Summary
86. Roles of the 模块
87. Flash controller
88. Flash 驱动
89. Flash Eeprom emulation
90. 存储抽象接口
91. NVRAM 管理器
92. Application 软件组件
93. Flash erase job 错误
94. Summary
95. Roles of the 模块
96. Flash controller
97. Flash 驱动
98. Flash Eeprom emulation
99. 存储抽象接口
100. NVRAM 管理器
101. Application 软件组件
102. Flash read job 错误
103. Summary
104. Roles of the 模块
105. Flash controller
106. Flash 驱动
107. Flash Eeprom emulation
108. 存储抽象接口
109. NVRAM 管理器
110. Application 软件组件
111. Flash compare job 错误
112. Summary
113. Roles of the 模块
114. Flash controller
115. Flash 驱动
116. Flash Eeprom emulation
117. External Flash Hardware ID Mismatch
118. Summary
119. Roles of the 模块
120. External Flash 驱动
121. Flash Eeprom emulation
122. 存储抽象接口
123. EEPROM write job 错误
124. Summary
125. Roles of the 模块
126. EEPROM controller
127. EEPROM 驱动
128. EEPROM 抽象
129. 存储抽象接口
130. NVRAM 管理器
131. Application 软件组件
132. EEPROM erase job 错误
133. Summary
134. Roles of the 模块
135. EEPROM controller
136. EEPROM 驱动
137. EEPROM 抽象
138. 存储抽象接口
139. NVRAM 管理器
140. Application 软件组件
141. EEPROM read job 错误
142. Summary
143. Roles of the 模块
144. EEPROM controller
145. EEPROM 驱动
146. EEPROM 抽象
147. 存储抽象接口
148. NVRAM 管理器
149. Application 软件组件
150. EEPROM compare job 错误
151. Summary
152. Roles of the 模块
153. EEPROM controller
154. EEPROM 驱动
155. EEPROM 抽象
156. EEPROM 抽象 / Flash Emulation level 错误
157. FEE consistency check 错误
158. Summary
159. Roles of the 模块
160. Flash Eeprom emulation
161. 存储抽象接口
162. NVRAM 管理器
163. Application 软件组件
164. EA consistency check 错误
165. Summary
166. Roles of the 模块
167. Eeprom 抽象
168. 存储抽象接口
169. NVRAM 管理器
170. Application 软件组件
171. NVRAM 管理器 level 错误
172. NVM CRC check
173. Summary
174. Roles of the 模块
175. NVRAM 管理器
176. NVM write verification 错误
177. Summary
178. Roles of the 模块
179. NVRAM 管理器
180. Static block check 错误
181. Summary
182. Roles of the 模块
183. NVRAM 管理器
184. Loss of redundancy
185. Summary
186. Roles of the 模块
187. NVRAM 管理器
188. Application 软件组件
189. NVM API request failure
190. Summary
191. Roles of the 模块
192. NVRAM 管理器
193. Application 软件组件
194. 附录
