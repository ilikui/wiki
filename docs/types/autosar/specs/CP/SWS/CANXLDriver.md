# Specification for CAN XL Driver (`CANXLDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1014 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CANXLDriver_1014\AUTOSAR_CP_SWS_CANXLDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CANXLDriver_1014\AUTOSAR_CP_SWS_CANXLDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CANXLDriver_1014\zzgen\CP_SWS_CANXLDriver.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module CAN XL Driver.

The base for this document are  and . It is assumed that the reader is familiar with these specifications. This document will not describe CAN XL functionality again.

The CAN XL Driver is part of the lowest layer, performs the hardware access and offers a hardware independent API to the upper layer. The two upper layers that have access to the CAN XL Driver are the CanIf and EthIf modules.

The CAN XL Driver is an extension of the CAN Driver module so this document shall only provide information and specifications which extends the existing CAN stack. Some general information is given for a better understanding.

The CAN XL Driver provides services for initiating transmissions and calls the callback functions of the CanIf and EthIf modules for notifying events, independently from the hardware.

Furthermore, it provides services to control CAN XL Controller specific hardware including e.g. the transmission and reception of generic CAN XL frames.

## 模块依赖

The CAN XL Driver module extends the CAN Driver  and has interfaces towards the , , the  and the .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module CAN XL Driver.

The base for this document are  and . It is assumed that the reader is familiar with these specifications. This document will not describe CAN XL functionality again.

The CAN XL Driver is part of the lowest layer, performs the hardware access and offers a hardware independent API to the upper layer. The two upper layers that have access to the CAN XL Driver are the CanIf and EthIf modules.

The CAN XL Driver is an extension of the CAN Driver module so this document shall only provide information and specifications which extends the existing CAN stack. Some general information is given for a better understanding.

The CAN XL Driver provides services for initiating transmissions and calls the callback functions of the CanIf and EthIf modules for notifying events, independently from the hardware.

Furthermore, it provides services to control CAN XL Controller specific hardware including e.g. the transmission and reception of generic CAN XL frames.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the CAN XL Driver module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| XLFF | XL Frame Format |
| SDU type | service data unit type |
| retransmit counter | Feature of some CAN XL controllers that allows to send a CAN frame multiple times in a row in case the ACK slot is not set on the bus. The counter gives the maximum number of transmissions. |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for CAN XL Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for CAN XL Driver.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

The constraints and assumptions of the CAN XL Driver are the same as for the CAN Driver module.

It is assumed, that all CAN XL Hardware supports out of the box both ingress and egress timestamping. Should this not be available, then it needs to be emulated in software.

### 7. 限制
*原文标题：Limitations*

In  there are several SDU Types specified which shall not directly supported by the AUTOSAR CAN XL stack. The solely directly in AUTOSAR communication stack supported SDU Types are as following:

# 01h (content based CAN XL frames)
# 03h (tunneled CAN 2.0/FD frames)
# 05h (mapped tunneled 802.3 Ethernet frames)

Any other types like 02h (node addressing) and 04h (unmapped tunneled 802.3 Ethernet frames) shall not be directly supported. They still can be used with CDD, for details refer to `CanXL_Write`() and `CanIf_XLRxIndication`() API.

Furthermore, future extensions making use of SEC bit of CAN XL Frame header like Security and Multi-PDU are currently in development and therefore not supported yet.

### 8. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The CAN XL Driver module extends the CAN Driver  and has interfaces towards the , , the  and the .

### 9. 文件结构
*原文标题：File Structure*

This section explains the file structure of the CAN XL Driver module.

### 10. 代码文件结构
*原文标题：Code File Structure*

For details, refer to the section 5.1.6 "Code file structure" in .

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  as well as  and link to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Shared code shall be reentrant |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The CAN Driver shall offer a reception indication service. |  |  |
| The CAN Driver shall provide a transmission confirmation service |  |  |
| The CAN Driver shall support CAN XL |  |  |
| Ethernet Driver hardware supported data transfer |  |  |
| Ethernet Driver transmission requests with direct data provision |  |  |
| Ethernet Driver transmission requests with indirect data provision |  |  |

### 12. 功能规范
*原文标题：Functional specification*

### 13. 初始化
*原文标题：Initialization*

Upstream requirements:
⌈
The `Can_Init`() shall be extended by all functionality necessary to properly initialize the CAN XL Driver.
⌋

### 14. 状态处理
*原文标题：State Handling*

### 15. Communication Request

State handling is performed individually per bus, for native CAN by CanSM and for tunneled Ethernet via CAN XL by EthSM. The EthIf does directly communicate with CAN XL Driver and CAN XL Transceivers as lower layer.

The actual physical bus state is only controlled by the CAN stack. The CAN XL Transceiver indicates the physical bus state through LinkState polling to the Ethernet stack, independently of the Ethernet controller mode.

The Ethernet controller mode is stored by the CAN XL Driver, and returned on request.

  Upstream requirements:
⌈
The Ethernet controller mode shall initially be set to `ETH_MODE_DOWN`.
⌋

  Upstream requirements:
⌈
The controller mode requested by the Ethernet stack via `CanXL_SetControllerMode`() shall have no effect on the CAN XL controller hardware. The new mode shall be solely stored.
⌋

  Upstream requirements:
⌈
`CanXL_GetControllerMode`() shall return the stored mode.
⌋

  Upstream requirements:
⌈
When the Ethernet controller mode changes, the CAN XL Driver shall report this change via `EthIf_CtrlModeIndication`().
⌋

### 16. BusOff 处理
*原文标题：BusOff Handling*

There always needs to be a CAN Stack configured even in case no native CAN communication is used and BusOff Handling is performed as defined in CAN Driver.

  Upstream requirements:
⌈
Changes of the bus error state shall be notified to CAN XL Transceiver by a call to `CanIf_XLReportErrorState`().
⌋

The parameter Transceiver of `CanIf_XLReportErrorState`() can be obtained by linking the CanXLController via CanIfCtrlCfg and CanSMManagerNetwork to CanIfTrcvCfg. All buffers of the affected CAN XL controller are flushed within CAN XL Driver if a BusOff occurs.

  Upstream requirements:
⌈
In case an Ethernet stack is configured, also the buffers containing frames for Ethernet shall be flushed and `EthIf_TxConfirmation`() shall be called with result E_NOT_OK at the event of a BusOff.
⌋

EthIf is polling its hardware if the current mode and link state match the requested mode and link state. A BusOff event is returned by CAN XL Transceiver to EthIf by reporting link down in context of `CanXLTrcv_GetLinkState`(). Furthermore, the link status which is present in the EthIf does not differentiate between error active and error passive state, they both are reported as link up.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. BusOff 处理 without 错误 signaling
*原文标题：BusOff Handling without error signaling*

In case transceiver mode switching is used, error signaling must be turned off for currently existing transceivers. Without error signaling, there also won't be any busoff handling by the controller hardware itself. Therefore, in this case, there shall be a simple implementation in CAN XL Driver to still perform babbling protection.

  Upstream requirements:
⌈
If error signaling is disabled, a basic CAN busoff handling with TEC (Transmission Error Counter) and REC (Reception Error Counter) shall be emulated in software.
⌋

The following example shows how this handling would typically look like:

TEC is normally a counter initialized with 0 saturating in range of 0 to 256, and REC is a counter initialized with 0 saturating in range of 0 to 128. The retransmit counter is turned off completely or at least configured to a very low value.

There would be a state machine following this basic rule set:

* When a frame is transmitted but no ACK slot was set on the bus, TEC shall be increased by 8. TEC shall not be increased beyond 128 before at least one frame has been received on the bus since the last startup or bus-off recovery.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Wake Up

Basic wakeup handling does not change.

  Upstream requirements:
⌈
There shall be no differentiation with regards to SDU-Type of the received frame triggering wakeup; any frame received by CAN XL Driver shall notify a CAN wakeup.
⌋

`EcuM_SetWakeupEvent`() is solely called for Can. It is never notified for Ethernet, the CAN XL Transceiver indicates the physical bus state through LinkState polling to the Ethernet stack instead.

### 19. Reception 处理
*原文标题：Reception Handling*

Upstream requirements:
⌈
All used reception queues for CAN XL frames shall be mapped individually to CAN XL HRHs.
⌋

Reception queues will also be used for CAN 2.0 and CAN FD frames mapped to CAN HRHs.

The reception mechanism of SDU Type shall be extended for XLFF, e.g. in polling mode `Can_MainFunction_Read`() shall be extended. See chapter "L-PDU reception" of CAN Driver for details.

  Upstream requirements:
⌈
On L-PDU reception of XLFF, first any configured filtering shall be performed before other functionality is performed.
⌋

  Upstream requirements: ,
⌈
On L-PDU reception of XLFF, if SDU Type equals 05h (mapped tunneled 802.3 Ethernet frames) the CAN XL Driver shall extract payload and addressing information from the received frame and pass them to `EthIf_RxIndication`(); otherwise it shall pass the received frame directly to `CanIf_XLRxIndication`().
⌋

Depending on available filtering on hardware support, there might be multiple reception queues available to filter received frames into.

As this is highly hardware vendor specific, there shall be no details given here beyond following:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Transmission 处理
*原文标题：Transmission Handling*

As CAN XL is designed to scale from small to big systems and the payload range goes up to 2048 bytes, the specific hardware implementations may differ.

The use of CAN XL HTH is similar to CAN HTHs. See chapter "L-PDU transmission" of CAN Driver for details.

The CAN HTH is used for mapping to logical transmission objects. Depending on available hardware features these might map to separate message objects or hardware supported queues.

  Upstream requirements:
⌈
All used transmission queues for CAN XL frames shall be mapped individually to CAN XL HTHs.
⌋

CAN XL transmission queues could also have a size of one and therefore correspond to traditional CAN hardware objects. Transmission queues for CAN 2.0 and CAN FD frames will be mapped similarly to CAN HTHs.

As the availability and behavior of hardware supported queues is is highly hardware vendor specific, there shall be no details given here. It is the responsibility of the CAN XL Driver vendor to document how the different CAN XL HTH behave. For same hardware there might be several mappings implemented depending of the specific needs of the system.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules. Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 22. Development 错误
*原文标题：Development Errors*

Definition of development errors in module CanXL
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API Service called with wrong parameter | CANXL_E_PARAM_POINTER | 0x01 |
| API Service called with wrong parameter | CANXL_E_PARAM_HANDLE | 0x02 |
| API Service called with wrong parameter | CANXL_E_PARAM_DATA_LENGTH | 0x03 |
| API Service called with wrong parameter | CANXL_E_PARAM_CONTROLLER | 0x04 |
| API Service used without initialization | CANXL_E_UNINIT | 0x05 |
| Invalid parameter | CANXL_E_INV_PARAM | 0x10 |
| Invalid mode | CANXL_E_INV_MODE | 0x11 |
| Invalid clock unit index | CANXL_E_INV_CLKUNIT_IDX | 0x12 |

⌋

### 23. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module CanXL
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Invalid data | CANXL_E_INV_DATA | 0x12 |

⌋

### 24. Production 错误
*原文标题：Production Errors*

There are no addtional production errors.

### 25. Extended Production 错误
*原文标题：Extended Production Errors*

There are no addtional extended production errors.

### 26. API 规范
*原文标题：API specification*

Please note, that the CAN XL Driver uses the MSN Can for parts that are shared with the  and the MSN CanXL for extensions defined in this document. Deviating from `SRS_BSW_00101` and `SRS_BSW_00407`, the CAN XL Driver does not provide separate Init and GetVersionInfo APIs with the MSN CanXL. Following `SWS_MemMap_00022`, memory sections associated with APIs defined in this document will use the MSN CanXL, and also symbolic name values referring to containers defined in this document will use the MSN CanXL to follow `TPS_ECUC_02108`.

### 27. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module CanXL
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Can | Can_GeneralTypes.h | Can_ErrorStateType |
| ^ | Can_GeneralTypes.h | Can_HwHandleType |
| Comtype | ComStack_Types.h | BufReq_ReturnType |
| ^ | ComStack_Types.h | ListElemStructType (draft) |
| ^ | ComStack_Types.h | PduIdType |
| ^ | ComStack_Types.h | PduInfoType |
| ^ | ComStack_Types.h | PduLengthType |
| ^ | ComStack_Types.h | TimeStampQualType (draft) |
| ^ | ComStack_Types.h | TimeStampType (draft) |
| ^ | ComStack_Types.h | TimeTupleType (draft) |
| Eth | Eth_GeneralTypes.h | Eth_BufIdxType |
| ^ | Eth_GeneralTypes.h | Eth_CounterType |
| ^ | Eth_GeneralTypes.h | Eth_FilterActionType |
| ^ | Eth_GeneralTypes.h | Eth_FrameType |
| ^ | Eth_GeneralTypes.h | Eth_ModeType |
| ^ | Eth_GeneralTypes.h | Eth_RxStatsType |
| ^ | Eth_GeneralTypes.h | Eth_RxStatusType |
| ^ | Eth_GeneralTypes.h | Eth_TxErrorCounterValuesType |
| ^ | Eth_GeneralTypes.h | Eth_TxStatsType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 28. 类型定义
*原文标题：Type definitions*

### 29. CanXL_Params

Definition of datatype `CanXL_Params`
⌈
| Name | CanXL_Params | < |
|---|---|---|
| Kind | Structure | < |
| Elements | PriorityId | < |
| ^ | Type | uint16 |
| ^ | Comment | Priority ID of a CAN XL message. |
| ^ | Vcid | < |
| ^ | Type | uint16 |
| ^ | Comment | VCID of a CAN XL message. |
| ^ | SduType | < |
| ^ | Type | uint8 |
| ^ | Comment | SDU type of a CAN XL message. |
| ^ | AcceptanceField | < |
| ^ | Type | uint32 |
| ^ | Comment | Acceptance field of a CAN XL message. |
| ^ | Sec | < |
| ^ | Type | uint8 |
| ^ | Comment | Simple extended content field of a CAN XL message. |
| Description | Contains CAN XL specific information. | < |
| Available via | Can_GeneralTypes.h | < |

⌋

### 30. CanXL_PduType

Definition of datatype `CanXL_PduType`
⌈
| Name | CanXL_PduType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | swPduHandle | < |
| ^ | Type | PduIdType |
| ^ | Comment | Contains the PDU ID. |
| ^ | length | < |
| ^ | Type | uint16 |
| ^ | Comment | Length of the data. |
| ^ | sdu | < |
| ^ | Type | uint8* |
| ^ | Comment | SDU data pointer. |
| ^ | XLParams | < |
| ^ | Type | CanXL_Params* |
| ^ | Comment | Pointer to CAN XL params. |
| Description | This type extends the classical Can_PduType with a larger PDU length, the CanXL_Params and a sec to indicate simple or extended content. | < |
| Available via | Can_GeneralTypes.h | < |

⌋

### 31. CanXL_HwType

Definition of datatype `CanXL_HwType`
⌈
| Name | CanXL_HwType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | XLParams | < |
| ^ | Type | CanXL_Params* |
| ^ | Comment | Pointer to CAN XL params. |
| ^ | ControllerId | < |
| ^ | Type | uint8 |
| ^ | Comment | ControllerId provided by CanIf, identifies the corresponding CAN XL controller. |
| ^ | Hoh | < |
| ^ | Type | Can_HwHandleType |
| ^ | Comment | ID of the corresponding CAN XL Hardware Object Range. |
| Description | This type defines a data structure which provides a CAN XL Hardware Object Handle including its corresponding CAN Controller and therefore CanDrv as well as the specific CAN XL parameters. | < |
| Available via | Can_GeneralTypes.h | < |

⌋

### 32. 功能定义
*原文标题：Function definitions*

### 33. CanXL_EnableEgressTimeStamp

Definition of API function `CanXL_EnableEgressTimeStamp`
⌈
| Service Name | CanXL_EnableEgressTimeStamp | < |
|---|---|---|
| Syntax | void CanXL_EnableEgressTimeStamp ( |  |

  uint8 CtrlIdx,
  `Eth_BufIdxType` BufIdx
| ) | < |  |
|---|---|---|
| Service ID | 0x17 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CtrlIdx | Index of the addresses controller. |
| ^ | BufIdx | Index of the message buffer, where Application expects egress time stamping |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Activates egress time stamping on a dedicated message object. Some HW does store once the egress time stamp marker and some HW needs it always before transmission. There will be no "disable" functionality, due to the fact, that the message type is always "time stamped" by network design. | < |
| Available via | CanXL.h | < |

⌋

Note: This API is derived from Ethernet Driver (). For better understanding of the API's original intention you may check  and . It is called by the AUTOSAR Ethernet Interface to achieve compatible CAN XL agnostic behavior.

⌈
The service `CanXL_EnableEgressTimeStamp`() has no functionality and shall return without performing any action.
⌋

### 34. CanXL_GetControllerMode

Definition of API function `CanXL_GetControllerMode`
⌈
| Service Name | CanXL_GetControllerMode | < |
|---|---|---|
| Syntax | Std_ReturnType CanXL_GetControllerMode ( |  |

  uint8 CtrlIdx,
  `Eth_ModeType`* CtrlModePtr
| ) | < |  |
|---|---|---|
| Service ID | 0x1b | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CtrlIdx | Index of the controller within the context of the Driver |
| Parameters (inout) | None | < |
| Parameters (out) | CtrlModePtr | ETH_MODE_DOWN: the Rx/Tx communication of the controller is disabled |

`ETH_MODE_ACTIVE`: the Rx/Tx communication of the controller is enabled
| Return value | Std_ReturnType | E_OK: success E_NOT_OK: controller mode could not be obtained |
|---|---|---|
| Description | Obtains the communication state of the indexed controller | < |
| Available via | CanXL.h | < |

⌋

Note: This API is derived from Ethernet Driver (). For better understanding of the API's original intention you may check  and .

⌈
The function shall read the current communication state of the indexed controller.
⌋

The current communication state is set as described in  and .

⌈
If development error detection is enabled: `CanXL_GetControllerMode`() shall check the parameter CtrlIdx for being valid.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. CanXL_GetCounterValues

Definition of API function `CanXL_GetCounterValues`
⌈
| Service Name | CanXL_GetCounterValues | < |
|---|---|---|
| Syntax | Std_ReturnType CanXL_GetCounterValues ( |  |

  uint8 CtrlIdx,
  `Eth_CounterType`* CounterPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x14 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CtrlIdx | Index of the controller within the context of the Driver |
| Parameters (inout) | None | < |
| Parameters (out) | CounterPtr | counter values according to IETF RFC 1757, RFC 1643 and RFC 2233. |
| Return value | Std_ReturnType | E_OK: success E_NOT_OK: counter values read failure |
| Description | Reads a list with drop counter values of the corresponding controller. The meaning of these values is described at Eth_CounterType. | < |
| Available via | CanXL.h | < |

⌋

Note: This API is derived from Ethernet Driver (). For better understanding of the API's original intention you may check  and . It is called by the AUTOSAR Ethernet Interface to achieve compatible CAN XL agnostic behavior.

⌈
The service `CanXL_GetCounterValues`() has no functionality and shall always return E_NOT_OK without performing any action.
⌋

### 36. CanXL_GetCurrentTimeTuple

Definition of API function `CanXL_GetCurrentTimeTuple`
  Status: DRAFT
⌈
| Service Name | CanXL_GetCurrentTimeTuple (draft) | < |
|---|---|---|
| Syntax | Std_ReturnType CanXL_GetCurrentTimeTuple ( |  |

  uint8 CtrlIdx,
  uint8 ClkUnitIdx,
  TimeTupleType currentTimeTuplePtr
| ) | < |  |
|---|---|---|
| Service ID | 0x22 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CtrlIdx | Index of the addressed controller |
| ^ | ClkUnitIdx | Index of the addressed clock unit to provide the time tuple |
| Parameters (inout) | None | < |
| Parameters (out) | currentTimeTuplePtr | Current time provided as time tuple |
| Return value | Std_ReturnType | E_OK: Current time successfully provided E_NOT_OK:Current time not available |
| Description | Reads the time tuple of the current time of the timestamp clock and the current time of the PHC in an atomic operation. If no PHC is supported, the PHC value will be a copy of the timestamp clock value. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | CanXL.h | < |

⌋

Note: This API is derived from Ethernet Driver (). For better understanding of the API's original intention you may check  and .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. CanXL_GetEgressTimeStamp

Definition of API function `CanXL_GetEgressTimeStamp`
⌈
| Service Name | CanXL_GetEgressTimeStamp | < |
|---|---|---|
| Syntax | Std_ReturnType CanXL_GetEgressTimeStamp ( |  |

  uint8 CtrlIdx,
  `Eth_BufIdxType` BufIdx,
  TimeStampQualType* timeQualPtr,
  TimeStampType* timeStampPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x18 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CtrlIdx | Index of the addresses controller. |
| ^ | BufIdx | Index of the message buffer, where Application expects egress time stamping |
| Parameters (inout) | None | < |
| Parameters (out) | timeQualPtr | quality of HW time stamp, e.g. based on current drift |
| ^ | timeStampPtr | current time stamp |
| Return value | Std_ReturnType | E_OK: success E_NOT_OK: failed to read time stamp. |
| Description | Reads back the egress time stamp on a dedicated message object. It must be called within the TxConfirmation() function. | < |
| Available via | CanXL.h | < |

⌋

Note: This API is derived from Ethernet Driver (). For better understanding of the API's original intention you may check  and .

⌈
If development error detection is enabled: the function shall check the parameter CtrlIdx for being valid.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. CanXL_GetIngressTimeStamp

Definition of API function `CanXL_GetIngressTimeStamp`
⌈
| Service Name | CanXL_GetIngressTimeStamp | < |
|---|---|---|
| Syntax | Std_ReturnType CanXL_GetIngressTimeStamp ( |  |

  uint8 CtrlIdx,
  const uint8* DataPtr,
  TimeStampQualType* timeQualPtr,
  TimeStampType* timeStampPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x19 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CtrlIdx | Index of the addresses controller. |
| ^ | DataPtr | Pointer to the message buffer, where Application expects ingress time stamping |
| Parameters (inout) | None | < |
| Parameters (out) | timeQualPtr | quality of HW time stamp, e.g. based on current drift |
| ^ | timeStampPtr | current time stamp |
| Return value | Std_ReturnType | E_OK: success E_NOT_OK: failed to read time stamp. |
| Description | Reads back the ingress time stamp on a dedicated message object. It must be called within the RxIndication() function. | < |
| Available via | CanXL.h | < |

⌋

Note: This API is derived from Ethernet Driver (). For better understanding of the API's original intention you may check  and .

⌈
If development error detection is enabled: the function shall check the parameter CtrlIdx for being valid.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. CanXL_GetPhysAddr

Definition of API function `CanXL_GetPhysAddr`
⌈
| Service Name | CanXL_GetPhysAddr | < |
|---|---|---|
| Syntax | void CanXL_GetPhysAddr ( |  |

  uint8 CtrlIdx,
  uint8* PhysAddrPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x25 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CtrlIdx | Index of the controller within the context of the Driver |
| Parameters (inout) | None | < |
| Parameters (out) | PhysAddrPtr | Physical source address (MAC address) in network byte order. |
| Return value | void | None |
| Description | Obtains the physical source address used by the indexed controller | < |
| Available via | CanXL.h | < |

⌋

Note: This API is derived from Ethernet Driver (). For better understanding of the API's original intention you may check  and .

⌈
The function shall read the source address used by the indexed controller (see CanXLEthPhysAddress).
⌋

⌈
If development error detection is enabled: the function shall check the parameter CtrlIdx for being valid. If the check fails, the function shall raise the development error `CANXL_E_PARAM_CONTROLLER`.
⌋

⌈
If development error detection is enabled: the function shall check the parameter PhysAddrPtr for being valid.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. CanXL_GetRxStats

Definition of API function `CanXL_GetRxStats`
⌈
| Service Name | CanXL_GetRxStats | < |
|---|---|---|
| Syntax | Std_ReturnType CanXL_GetRxStats ( |  |

  uint8 CtrlIdx,
  `Eth_RxStatsType`* RxStats
| ) | < |  |
|---|---|---|
| Service ID | 0x15 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CtrlIdx | Index of the controller within the context of the Driver |
| Parameters (inout) | None | < |
| Parameters (out) | RxStats | List of values according to IETF RFC 2819 (Remote Network Monitoring Management Information Base) |
| Return value | Std_ReturnType | E_OK: success E_NOT_OK: drop counter could not be obtained |
| Description | Returns the following list according to IETF RFC2819, where the maximal possible value shall denote an invalid value, e.g. if this counter is not available: 1. etherStatsDropEvents 2. etherStatsOctets 3. etherStatsPkts 4. etherStatsBroadcastPkts 5. etherStatsMulticastPkts 6. etherStatsCrcAlignErrors 7. etherStatsUndersizePkts 8. etherStatsOversizePkts 9. etherStatsFragments 10. etherStatsJabbers 11. etherStatsCollisions 12. etherStatsPkts64Octets 13. etherStatsPkts65to127Octets 14. etherStatsPkts128to255Octets 15. etherStatsPkts256to511Octets 16. etherStatsPkts512to1023Octets 17. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. CanXL_GetTxErrorCounterValues

Definition of API function `CanXL_GetTxErrorCounterValues`
⌈
| Service Name | CanXL_GetTxErrorCounterValues | < |
|---|---|---|
| Syntax | Std_ReturnType CanXL_GetTxErrorCounterValues ( |  |

  uint8 CtrlIdx,
  `Eth_TxErrorCounterValuesType`* TxErrorCounterValues
| ) | < |  |
|---|---|---|
| Service ID | 0x1d | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CtrlIdx | Index of the controller within the context of the Driver |
| Parameters (inout) | None | < |
| Parameters (out) | TxErrorCounterValues | List of values to read statistic error counter values for transmission. |
| Return value | Std_ReturnType | E_OK: success, E_NOTOK: Tx-statistics could not be obtained |
| Description | Returns the list of Transmission Error Counters out of IETF RFC1213 and RFC1643 defined with Eth_TxErrorCounterValuesType, where the maximal possible value shall denote an invalid value, e.g. this counter is not available. | < |
| Available via | CanXL.h | < |

⌋

Note: This API is derived from Ethernet Driver (). For better understanding of the API's original intention you may check  and . It is called by the AUTOSAR Ethernet Interface to achieve compatible CAN XL agnostic behavior.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 61 章（内容从略，见纯文本全文）

42. CanXL_GetTxStats
43. CanXL_ProvideTxBuffer
44. CanXL_ReleaseRxBuffer
45. CanXL_Receive
46. CanXL_SetControllerMode
47. CanXL_SetPhysAddr
48. CanXL_Transmit
49. CanXL_ImmediateTransmit
50. CanXL_TxConfirmation
51. CanXL_UpdatePhysAddrFilter
52. CanXL_Write
53. Callback 通知
54. Scheduled functions
55. Expected 接口
56. Mandatory 接口
57. Optional 接口
58. Configurable 接口
59. 时序图
60. 配置规范
61. How to read this chapter
62. Containers and 配置 parameters
63. CanXLGeneral
64. CanXLController
65. CanXLEthEgressFifo
66. CanXLEthIngressFifo
67. CanXLBaudrateConfig
68. CanXLHardwareObject
69. CanXLHwFilter
70. 配置 Hints
71. 发布信息
72. 附录
73. 不适用需求
74. Change History
75. Change History of this document according to AUTOSAR Release R22-11
76. Added 规范 Items in R22-11
77. Changed 规范 Items in R22-11
78. Deleted 规范 Items in R22-11
79. Added Constraints in R22-11
80. Changed Constraints in R22-11
81. Deleted Constraints in R22-11
82. Change History of this document according to AUTOSAR Release R23-11
83. Added 规范 Items in R23-11
84. Changed 规范 Items in R23-11
85. Deleted 规范 Items in R23-11
86. Added Constraints in R23-11
87. Changed Constraints in R23-11
88. Deleted Constraints in R23-11
89. Change History of this document according to AUTOSAR Release R24-11
90. Added 规范 Items in R24-11
91. Changed 规范 Items in R24-11
92. Deleted 规范 Items in R24-11
93. Added Constraints in R24-11
94. Changed Constraints in R24-11
95. Deleted Constraints in R24-11
96. Change History of this document according to AUTOSAR Release R25-11
97. Added 规范 Items in R25-11
98. Changed 规范 Items in R25-11
99. Deleted 规范 Items in R25-11
100. Added Constraints in R25-11
101. Changed Constraints in R25-11
102. Deleted Constraints in R25-11
