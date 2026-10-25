# Specification of CAN XL Transceiver Driver (`CANXLTransceiverDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1015 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CANXLTransceiverDriver_1015\AUTOSAR_CP_SWS_CANXLTransceiverDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CANXLTransceiverDriver_1015\AUTOSAR_CP_SWS_CANXLTransceiverDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CANXLTransceiverDriver_1015\zzgen\CP_SWS_CANXLTransceiverDriver.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module CAN XL Transceiver Driver. The CAN XL Transceiver Driver is an extension of the CAN Transceiver Driver so this document shall only provide information and specifications which differ from the CAN Transceiver Driver. Some general information is given for a better understanding.

## 模块依赖

The CAN XL Transceiver Driver module extends the CAN Transceiver Driver  and has interfaces towards the , , the  and the .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module CAN XL Transceiver Driver. The CAN XL Transceiver Driver is an extension of the CAN Transceiver Driver so this document shall only provide information and specifications which differ from the CAN Transceiver Driver. Some general information is given for a better understanding.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The CAN XL Transceiver Driver does not define any local acronyms or abbreviations that are not included in the .

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for CAN XL Transceiver Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for CAN XL Transceiver Driver.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

The constraints and assumptions of the CAN XL Transceiver Driver are the same as for the CAN Transceiver Driver module.

### 7. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The CAN XL Transceiver Driver module extends the CAN Transceiver Driver  and has interfaces towards the , , the  and the .

### 8. 文件结构
*原文标题：File Structure*

This section explains the file structure of the CAN XL Transceiver Driver module.

### 9. 代码文件结构
*原文标题：Code File Structure*

For details, refer to the section 5.1.6 "Code file structure" in .

### 10. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  as well as  and link to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| API naming convention |  |  |
| Error values naming convention |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| List possible error notifications |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| API handling in uninitialized state |  |  |
| CAN Bus Transceiver driver API shall be synchronous |  |  |
| The CAN bus transceiver driver shall support the configuration for more than one bus |  |  |
| The Ethernet Transceiver Driver shall provide access to the link state. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能规范
*原文标题：Functional specification*

The following section only describes additional CAN XL Transceiver specific 'Functional specifications'. The Specification of CAN Transceiver Driver  is the base of this CanXLTransceiverDriver 'extension'.

For a description of the specific functional behavior of CAN XL refer to the Specification of the CanXLDriver

### 12. 初始化
*原文标题：Initialization*

Upstream requirements: ,
⌈
The `CanTrcv_Init`() shall be extended by all functionality necessary to initialize the CanXLTransceiverDriver.
⌋

### 13. Communication 状态处理
*原文标题：Communication state handling*

The operation mode of each CAN XL Transceiver is controlled only via the CAN stack over `CanTrcv_SetOpMode`() as described in the Specification of CAN Transceiver Driver . Any transceiver mode request over the Ethernet stack has no influence on the actual operation mode of a CAN XL Transceiver. The corresponding APIs are only required so that the CanXLTransceiverDriver is compatible with the Ethernet stack. In order to inform the Ethernet stack whether a communication via the CAN bus is possible or not, the link state known in the Ethernet stack is reused. The current link state consists of the CAN XL Transceiver operation mode (`CANTRCV_TRCVMODE_NORMAL`, `CANTRCV_TRCVMODE_STANDBY` or `CANTRCV_TRCVMODE_SLEEP`), the status (`CAN_ERRORSTATE_ACTIVE`, `CAN_ERRORSTATE_PASSIVE` or `CAN_ERRORSTATE_BUSOFF`) of the corresponding physical CAN bus and the requested link state (`ETHTRCV_LINK_STATE_DOWN` or `ETHTRCV_LINK_STATE_ACTIVE`) from the Ethernet stack.

The Ethernet transceiver mode is stored by the CAN XL Transceiver Driver, and returned on request. See  and  for the behavior of `CanXLTrcv_SetTransceiverMode`() and `CanXLTrcv_GetTransceiverMode`().

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Wake up 处理
*原文标题：Wake up handling*

The wake up handling for each CAN XL Transceiver is only performed via the CAN stack as described in the Specification of CAN Transceiver Driver . The Ethernet stack is neither part of the wake up handling nor is it informed about a occurred wake up event. The power saving state of a CAN XL Transceiver is indicated to the Ethernet stack as `ETHTRCV_LINK_STATE_DOWN` (refer to ). After a successful wake up sequence the Ethernet stack can be informed over the link state (refer to ) that a communication via the CAN bus is possible again.

  Upstream requirements:
⌈
The `CanXLTrcv_CheckWakeup` shall not actively participate in the wake up handling of the CAN XL transceiver.
⌋

### 15. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules. Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 16. Development 错误
*原文标题：Development Errors*

Definition of development errors in module CanXLTrcv
  Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API called with wrong parameter for the CAN transceiver | CANXLTRCV_E_INVALID_TRANSCEIVER | 0x01 |
| API called with null pointer parameter | CANXLTRCV_E_PARAM_POINTER | 0x02 |
| API service used without initialization | CANXLTRCV_E_UNINIT | 0x11 |
| Invalid error state | CANXLTRCV_E_INVALID_ERROR_STATE | 0x30 |
| Invalid link state | CANXLTRCV_E_INVALID_LINK_STATE | 0x31 |

⌋

### 17. Runtime 错误
*原文标题：Runtime Errors*

There are no addtitional runtime errors.

### 18. Production 错误
*原文标题：Production Errors*

There are no addtitional production errors.

### 19. Extended Production 错误
*原文标题：Extended Production Errors*

There are no addtitional extended production errors.

### 20. API 规范
*原文标题：API specification*

Please note, that the CAN XL Transceiver Driver uses the MSN CanTrcv for parts that are shared with the  and the MSN CanXLTrcv for extensions defined in this document. Deviating from `SRS_BSW_00101` and `SRS_BSW_00407`, the CAN XL Transceiver Driver does not provide separate Init and GetVersionInfo APIs with the MSN CanXL. Following `SWS_MemMap_00022`, memory sections associated with APIs defined in this document will use the MSN CanXL, and also symbolic name values referring to containers defined in this document will use the MSN CanXL to follow `TPS_ECUC_02108`.

### 21. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module CanXLTrcv
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Can | Can_GeneralTypes.h | Can_ErrorStateType |
| Eth | Eth_GeneralTypes.h | Eth_ModeType |
| EthTrcv | Eth_GeneralTypes.h | EthTrcv_LinkStateType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 22. 类型定义
*原文标题：Type definitions*

There are no additional type definitions.

### 23. 功能定义
*原文标题：Function definitions*

### 24. CanXLTrcv_ReportErrorState

Definition of API function `CanXLTrcv_ReportErrorState`
  Upstream requirements: , , , , ,
⌈
| Service Name | CanXLTrcv_ReportErrorState | < |
|---|---|---|
| Syntax | Std_ReturnType CanXLTrcv_ReportErrorState ( |  |

  uint8 Transceiver,
  `Can_ErrorStateType` ErrorState
| ) | < |  |
|---|---|---|
| Service ID | 0x30 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | Transceiver | CAN transceiver to which API call has to be applied |
| ^ | ErrorState | New error state of the corresponding CAN controller |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Report was successful E_NOT_OK: Call was rejected |
| Description | Reports each change of the CAN error state. | < |
| Available via | CanXLTrcv.h | < |

⌋

Note: The service `CanXLTrcv_ReportErrorState`() is implemented in CanXLTransceiverDriver and called by CanXLDriver via CanIf after each change of the CAN error state at the corresponding CAN XL controller.

⌈
The CAN error state shall be stored for each CAN XL Transceiver in the CanXLTransceiverDriver and shall be updated at each call of the `CanXLTrcv_ReportErrorState`().
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. CanXLTrcv_TransceiverLinkStateRequest

Definition of API function `CanXLTrcv_TransceiverLinkStateRequest`
  Upstream requirements: , , ,
⌈
| Service Name | CanXLTrcv_TransceiverLinkStateRequest | < |
|---|---|---|
| Syntax | Std_ReturnType CanXLTrcv_TransceiverLinkStateRequest ( |  |

  uint8 TrcvIdx,
  `EthTrcv_LinkStateType` LinkState
| ) | < |  |
|---|---|---|
| Service ID | 0x31 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different TrcvIdx. Non reentrant for the same TrcvIdx. | < |
| Parameters (in) | TrcvIdx | Index of the transceiver within the context of the Transceiver Driver |
| ^ | LinkState | The link state of a physical connection. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: The request has been accepted E_NOT_OK: The request has not been accepted |
| Description | Request the given link state for the given transceiver | < |
| Available via | CanXLTrcv.h | < |

⌋

Note: This API is derived from Ethernet Transceiver Driver (). For better understanding of the API's original intention you may check  and .

⌈
The requested link state shall be stored for each CAN XL Transceiver in the CanXLTransceiverDriver and shall be updated at each call of `CanXLTrcv_TransceiverLinkStateRequest`().
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. CanXLTrcv_SetTransceiverMode

Definition of API function `CanXLTrcv_SetTransceiverMode`
  Upstream requirements: , , ,
⌈
| Service Name | CanXLTrcv_SetTransceiverMode | < |
|---|---|---|
| Syntax | Std_ReturnType CanXLTrcv_SetTransceiverMode ( |  |

  uint8 TrcvIdx,
  `Eth_ModeType` TrcvMode
| ) | < |  |
|---|---|---|
| Service ID | 0xa8 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different TrcvIdx. Non reentrant for the same TrcvIdx. | < |
| Parameters (in) | TrcvIdx | Index of the transceiver |
| ^ | TrcvMode | ETH_MODE_DOWN: disable the transceiver |

`ETH_MODE_ACTIVE`: enable the transceiver

`ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST`: enable the transceiver and request to trigger a wake-up on the network, if the used PHY support such a feature. E.g. used for PHYs compliant to OA TC10
| Parameters (inout) | None | < |
|---|---|---|
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Service accepted E_NOT_OK: Service denied |
| Description | Enables / disables the indexed transceiver | < |
| Available via | CanXLTrcv.h | < |

⌋

Note: This API is derived from Ethernet Transceiver Driver (). For better understanding of the API's original intention you may check  and .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. CanXLTrcv_GetTransceiverMode

Definition of API function `CanXLTrcv_GetTransceiverMode`
  Upstream requirements: , , ,
⌈
| Service Name | CanXLTrcv_GetTransceiverMode | < |
|---|---|---|
| Syntax | Std_ReturnType CanXLTrcv_GetTransceiverMode ( |  |

  uint8 TrcvIdx,
  `Eth_ModeType`* TrcvModePtr
| ) | < |  |
|---|---|---|
| Service ID | 0x33 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different TrcvIdx. Non reentrant for the same TrcvIdx. | < |
| Parameters (in) | TrcvIdx | Index of the transceiver within the context of the Transceiver Driver |
| Parameters (inout) | None | < |
| Parameters (out) | TrcvModePtr | ETH_MODE_DOWN: the transceiver is disabled |

`ETH_MODE_ACTIVE`: the transceiver is enable
| Return value | Std_ReturnType | E_OK: success E_NOT_OK: transceiver could not be initialized |
|---|---|---|
| Description | Obtains the state of the indexed transceiver | < |
| Available via | CanXLTrcv.h | < |

⌋

Note: This API is derived from Ethernet Transceiver Driver (). For better understanding of the API's original intention you may check  and .

⌈
The function shall return the stored requested transceiver mode in CanXLTransceiverDriver for the corresponding transceiver.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. CanXLTrcv_GetLinkState

Definition of API function `CanXLTrcv_GetLinkState`
  Upstream requirements: , , , ,
⌈
| Service Name | CanXLTrcv_GetLinkState | < |
|---|---|---|
| Syntax | Std_ReturnType CanXLTrcv_GetLinkState ( |  |

  uint8 TrcvIdx,
  `EthTrcv_LinkStateType`* LinkStatePtr
| ) | < |  |
|---|---|---|
| Service ID | 0x34 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different TrcvIdx. Non reentrant for the same TrcvIdx. | < |
| Parameters (in) | TrcvIdx | Index of the transceiver within the context of the Transceiver Driver |
| Parameters (inout) | None | < |
| Parameters (out) | LinkStatePtr | ETHTRCV_LINK_STATE_DOWN: transceiver is disconnected ETHTRCV_LINK_STATE_ACTIVE: transceiver is connected |
| Return value | Std_ReturnType | E_OK: success E_NOT_OK: transceiver could not be initialized |
| Description | Obtains the link state of the indexed transceiver | < |
| Available via | CanXLTrcv.h | < |

⌋

Note: This API is derived from Ethernet Transceiver Driver (). For better understanding of the API's original intention you may check  and .

⌈
If development error detection is enabled: the function shall check that the service `CanTrcv_Init`() was previously called. If the check fails, the function shall raise the development error `CANXLTRCV_E_UNINIT`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. CanXLTrcv_CheckWakeup

Definition of API function `CanXLTrcv_CheckWakeup`
  Upstream requirements: , , , ,
⌈
| Service Name | CanXLTrcv_CheckWakeup | < |
|---|---|---|
| Syntax | Std_ReturnType CanXLTrcv_CheckWakeup ( |  |

  uint8 TrcvIdx
| ) | < |  |
|---|---|---|
| Service ID | 0x35 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | TrcvIdx | Index of the transceiver within the context of the Transceiver Driver |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: The function has been successfully executed E_NOT_OK: The function could not be successfully executed |
| Description | Service is called by EthIf in case a wake-up interrupt is detected. | < |
| Available via | CanXLTrcv.h | < |

⌋

Note: This API is derived from Ethernet Transceiver Driver (). For better understanding of the API's original intention you may check  and .

⌈
This function shall have no functional behaviour and return E_OK.
⌋

⌈
If development error detection is enabled: The function `CanXLTrcv_CheckWakeup`() shall check that the service `CanTrcv_Init` was previously called. If the check fails, the function shall raise the development error `CANXLTRCV_E_UNINIT`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Callback 通知
*原文标题：Callback notifications*

### 31. Scheduled functions

These functions are directly called by Basic Software Scheduler. The following functions shall have no return value and no parameter. All functions shall be non reentrant.

### 32. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 33. Mandatory 接口
*原文标题：Mandatory interfaces*

The CAN XL Transceiver Driver does not specify any mandatory interfaces.

### 34. Optional 接口
*原文标题：Optional interfaces*

This section defines all interfaces, which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module CanXLTrcv
⌈
| API Function | Header File | Description |
|---|---|---|
| EthIf_TrcvModeIndication | EthIf.h | Called asynchronously when a mode change has been read out. If the function is triggered by previous call of EthTrcv_SetTransceiverMode it can directly be called within the trigger function. |

⌋

### 35. Configurable 接口
*原文标题：Configurable interfaces*

The CAN XL Transceiver Driver does not specify any configurable interfaces.

### 36. 时序图
*原文标题：Sequence diagrams*

### 37. CanXL BusOff 处理 for Ethernet
*原文标题：CanXL BusOff handling for Ethernet*

### 38. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification Chapter  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave Chapter  in the specification to guarantee comprehension.

Chapter  specifies the structure (containers) and the parameters of the module CAN XL Transceiver Driver.

Chapter  specifies published information of the module CAN XL Tranceiver Driver.

### 39. How to read this chapter

For details refer to .

### 40. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters describe Chapter  and Chapter .

### 41. CanXLTrcvChannel

Definition of EcucParamConfContainerDef CanXLTrcvChannel
⌈
| Container Name | CanXLTrcvChannel | < | < |
|---|---|---|---|
| Parent Container | CanTrcvChannel | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container is specified in the SWS CAN XL Transceiver Driver and represents a CAN XL transceiver channel. If this container is present, the CAN transceiver will provide the extended CanXLTrcv API. | < | < |
| Multiplicity | 0..1 | < | < |
| Post-Build Variant Multiplicity | false | < | < |
| Multiplicity Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| CanXLTrcvEthEcucPartitionRef | 0..1 |  |

No Included Containers
⌋

 Definition of EcucReferenceDef CanXLTrcvEthEcucPartitionRef
⌈
| Parameter Name | CanXLTrcvEthEcucPartitionRef | < | < |
|---|---|---|---|
| Parent Container | CanXLTrcvChannel | < | < |
| Upstream mapping defined | - | < | < |
| Description | Maps the Ethernet Interface access to the CAN XL transceiver channel to zero or one ECUC partitions. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. 发布信息
*原文标题：Published Information*

For details refer to .

### 43. 附录
*原文标题：Appendix*

### 44. 不适用需求
*原文标题：Not applicable requirements*

⌈
These requirements are not applicable to this specification.
⌋

### 45. Change History

Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 46. Change History of this document according to AUTOSAR Release R22-11

### 47. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

| Number | Heading |
|---|---|

 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
| Definition of API function CanXLTrcv_ReportErrorState |
|---|
| Definiton of development errors in module CanXLTrcv |
| Definition of optional interfaces in module CanXLTrcv |
| Definition of imported datatypes of module CanXLTrcv |
| Definition of API function CanXLTrcv_CheckWakeup |
| Definition of API function CanXLTrcv_GetLinkState |
| Definition of API function CanXLTrcv_GetTransceiverMode |
| Definition of API function CanXLTrcv_SetTransceiverMode |
| Definition of API function CanXLTrcv_TransceiverLinkStateRequest |

 |

### 48. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

none

### 49. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

none

### 50. Change History of this document according to AUTOSAR Release R23-11

### 51. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 52. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

none

### 53. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 54. Change History of this document according to AUTOSAR Release R24-11

### 55. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 56. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

| Number | Heading |
|---|---|
| Definition of API function CanXLTrcv_ReportErrorState |  |
| Definition of API function CanXLTrcv_CheckWakeup |  |
| Definition of API function CanXLTrcv_GetLinkState |  |
| Definition of API function CanXLTrcv_GetTransceiverMode |  |
| Definition of API function CanXLTrcv_SetTransceiverMode |  |
| Definition of API function CanXLTrcv_TransceiverLinkStateRequest |  |

### 57. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 58. Change History of this document according to AUTOSAR Release R25-11

### 59. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 60. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|
| Definition of API function CanXLTrcv_SetTransceiverMode |  |
| Definition of EcucParamConfContainerDef CanXLTrcvChannel |  |
| Definition of EcucReferenceDef CanXLTrcvEthEcucPartitionRef |  |

### 61. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none
