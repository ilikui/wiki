# Specification of Module XCP (`XCP`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 412 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_XCP_412\AUTOSAR_CP_SWS_XCP.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_XCP_412\AUTOSAR_CP_SWS_XCP.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_XCP_412\zzgen\CP_SWS_XCP.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module XCP

XCP is a protocol description (ASAM standard) between a master (tool) and a slave (device), which provides the following basic features:

* Synchronous data acquisition (measurement)
* Synchronous data stimulation (for rapid prototyping)
* Online memory calibration (read / write access)
* Calibration data page initialization and switching
* Flash Programming for ECU development purposes
* Every feature is optional and the access can be restricted
* Various communications busses are supported

XCP was designed according to the following principles:

* Minimal Slave resource consumption (RAM, ROM, runtime)
* Efficient communication
* Simple Slave implementation

## 模块依赖

This section describes the relations to other modules and files within the AUTOSAR basic software architecture. It contains brief descriptions of configuration information and services, which are required by the XCP module from other modules.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module XCP

XCP is a protocol description (ASAM standard) between a master (tool) and a slave (device), which provides the following basic features:

* Synchronous data acquisition (measurement)
* Synchronous data stimulation (for rapid prototyping)
* Online memory calibration (read / write access)
* Calibration data page initialization and switching
* Flash Programming for ECU development purposes
* Every feature is optional and the access can be restricted
* Various communications busses are supported

XCP was designed according to the following principles:

* Minimal Slave resource consumption (RAM, ROM, runtime)
* Efficient communication
* Simple Slave implementation

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the XCP that are not included in the .

| Acronym: | Description: |
|---|---|
| AUTOSAR | AUTomotive Open System ARchitecture |
| A2L | File Extension for an ASAM 2MC Language File |
| ASAM | Association for Standardization of Automation and Measuring Systems |
| BSW | Basic Software |
| CAN | Controller Area Network |
| CanIf | CAN Interface |
| CTO | Command Transfer Object |
| DAQ | Data AcQuisition, Data AcQuisition Packet |
| DTO | Data Transfer Object |
| ECU | Electronic Control Unit |
| FrIf | FlexRay Interface |
| LPDU | Data Link Layer PDU |
| MCD | Measurement Calibration and Diagnostics |
| MISRA | Motor Industry Software Reliability Association |
| ODT | Object Descriptor Table |
| PDU | Protocol Data Unit |
| RAM | Random Access Memory |
| ROM | Read Only Memory |
| SchM | Schedule Manager |
| SVN | Subversion |
| SRS | Software Requirements Specification |
| STIM | Data Stimulation packet |
| SW | Software |
| SWS | Software Specification |
| TCP/IP | Transfer Control Protocol / Internet Protocol |
| TS | Time Stamp |
| UDP/IP | User Datagram Protocol / Internet Protocol |
| URL | Uniform Resource Locator |
| XCP | Universal Calibration Protocol |
| XML | Extensible Markup Language |
| ISR | Interrupt Service Routine |
| DET | Default Err |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for XCP.

Thus, the specification SWS BSW General shall be considered as additional and required specification for XCP.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

The following XCP features are currently out of scope:

* The `SET_DAQ_ID` command according to the XCP CAN Transport Layer Specification is not part of the AUTOSAR XCP module
* Currently, the AUTOSAR RTE does not offer APIs for direct communication with XCP
* For further details concerning the supported feature set, please refer to
* NAX is only configurable through the ASAM configuration file A2L.

Please note:

For the communications bus LIN, no ASAM XCP is specified.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

n/a

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section describes the relations to other modules and files within the AUTOSAR basic software architecture. It contains brief descriptions of configuration information and services, which are required by the XCP module from other modules.

### 10. AUTOSAR RTE (BSW Scheduler)

The BSW Scheduler calls the main functions of the Xcp, which are necessary for the cyclic processes of the Xcp.

### 11. AUTOSAR PDU Routing 模块 (PduR)
*原文标题：AUTOSAR PDU Routing module (PduR)*

The PDU Routing module (PduR)  is the lower layer module of the XCP module for the data flow. Please note: The Linklayer Sdu Routing Module (LSduR)  is the lower layer of the PduR. XCP data are excanged via the PduR and LSduR with the according Bus interfaces.

### 12. AUTOSAR FlexRay 接口
*原文标题：AUTOSAR FlexRay Interface*

The FlexRay Interface is used to transmit and receive XCP PDUs via FlexRay.

### 13. AUTOSAR CAN 接口
*原文标题：AUTOSAR CAN Interface*

The CAN Interface is used to transmit and receive XCP PDUs via CAN.

### 14. AUTOSAR SocketAdaptor

The SocketAdaptor is used to transmit and receive XCP PDUs via Ethernet.

### 15. AUTOSAR RTE

The RTE is used for copying calibration parameters from ROM/FLASH to RAM and to use the double pointered method.

### 16. AUTOSAR OS

In order to be able to use the time stamped feature of XCP, an AUTOSAR OS Counter is used.

### 17. AUTOSAR 诊断 Event 管理器
*原文标题：AUTOSAR Diagnostic Event Manager*

In order to be able to report production errors, the XCP has to have access to the Diagnostic Event Manager.

### 18. AUTOSAR Default 错误 Tracer
*原文标题：AUTOSAR Default Error Tracer*

In order to be able to report default errors, the XCP has to have access to the error hook of the Default Error Tracer.

### 19. 文件结构
*原文标题：File structure*

### 20. 代码文件结构
*原文标题：Code file structure*

Upstream requirements: , , ,
⌈
The code file structure shall not be defined within this specification completely. At this point it shall be pointed out that the code-file structure shall include the following files named:

* Xcp.c - general source code file of the module XCP
* `Xcp_Cfg`.c - for pre-compile time configurable parameters
* `Xcp_Lcfg`.c - for link time configurable parameters and
* `Xcp_PBcfg`.c - for post build time configurable parameters.
⌋

These files shall contain all link time and post-build time configurable parameters.

### 21. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| Error values naming convention |  |  |
| BSW Modules shall support link-time configuration |  |  |
| BSW Modules shall support pre-compile configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide at least a basic set of module files |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| Configuration parameters being stored in memory shall be placed into separate c-files |  |  |
| The Basic Software Modul |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 功能规范
*原文标题：Functional specification*

The specification of the module XCP shall define all parameters and interfaces, which are required to use the ASAM XCP protocol specification within an AUTOSAR environment.

 Location of the XCP module in the AUTOSAR communication stack
  Status: DRAFT
  Replaces:
  Upstream requirements:
⌈
The AUTOSAR XCP Module and the bus specific Interfaces shall be located above the AUTOSAR PDU Routing module (PduR) .
⌋

  Upstream requirements:
⌈
For transmitting and receiving of XCP messages, unique PDU-IDs shall be used.
⌋

 XcpRxPdu and XcpTxPdu constraint for keeping the local buffer
  Status: DRAFT
  Upstream requirements:
⌈
Each XcpRxPdu and XcpTxPdu shall refer to global PDU that has KeepLocalPduBuffer set to FALSE.
⌋

  Upstream requirements:
⌈
The AUTOSAR XCP Module shall support the ASAM XCP Specification Version 1.1, except for XCP on CAN where ASAM XCP Specification Version 1.2 shall be supported.
⌋

  Upstream requirements:
⌈
The AUTOSAR XCP Module shall support the basic feature "Synchronous data acquisition (measurement) ". Please refer to
⌋

  Upstream requirements:
⌈
The AUTOSAR XCP Module shall support the feature "Dynamic DAQ Configuration". according to
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. XCP on CAN

Upstream requirements:
⌈
The AUTOSAR XCP Module shall support the CAN communications bus according to
⌋

 Use APIs of PduR for exchanging data via CAN
  Status: DRAFT
  Replaces:
  Upstream requirements:
⌈
XCP data sent and received via CAN, the PDUs shall be transmitted and received using the transmit and receive APIs provided by the AUTOSAR PDU Routing module (PduR) .
⌋

Note: AUTOSAR PDU Routing module (PduR)  and AUTOSAR BSW Linklayer Sdu Routing Module (LSduR) route the XCP data as PDU to the AUTOSAR BSW CAN Interface: XCP -> PduR -> LSduR -> CanIf

Please refer to  for more details.

  Upstream requirements:
⌈
For sending and receiving XCP data via CAN, at least two different CAN identifiers have to be configured to be used by XCP.
⌋

⌈
Performance information shall be exchanged between the XCP master and XCP slave using the parameters according to
⌋

⌈
The XCP Module shall support the `GET_SLAVE_ID` command according to
⌋

### 24. XCP on FlexRay

Upstream requirements:
⌈
The AUTOSAR XCP Module shall support the FlexRay communications bus according to
⌋

 Use APIs of PduR for exchanging data via FlexRay
  Status: DRAFT
  Replaces:
  Upstream requirements:
⌈
XCP data sent and received via FlexRay, the PDUs shall be transmitted and received using the transmit and receive APIs provided by the AUTOSAR PDU Routing module (PduR) .
⌋

Note: AUTOSAR PDU Routing module (PduR)  and AUTOSAR BSW Linklayer Sdu Routing Module (LSduR) route the XCP data as PDU to the AUTOSAR BSW FlexRay Interface: XCP -> PduR -> LSduR -> FrIf

Please refer to  for more details.

⌈
All XCP on FlexRay LPDUs always are event driven. Please refer to Chapter 1.1.2 "FlexRay Frame Type" of
⌋

⌈
The hardware buffers (of the FlexRay Communication Controller) XCP uses for data transmission and reception are assigned exclusively to the XCP module.
⌋

Note:

This restriction prevents disturbances of ongoing FlexRay communication.

⌈
The usage of FlexRay Communication Controller's hardware buffers shall be configured by the corresponding parameters according to
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. XCP on Ethernet

Upstream requirements:
⌈
The AUTOSAR XCP Module shall support the Ethernet communications bus according to
⌋

 Use APIs of PduR for exchanging data via Ethernet (i.e. TcpIp)
  Status: DRAFT
  Replaces:
  Upstream requirements:
⌈
XCP data sent and received via Ethernet, the PDUs have to be transmitted and received using the transmitting and receive APIs provided by the AUTOSAR PDU Router according to .
⌋

Note: AUTOSAR PDU Routing module (PduR)  and AUTOSAR BSW Linklayer Sdu Routing Module (LSduR) route the XCP data as PDU to the AUTOSAR BSW Ethernet Interface: XCP -> PduR -> SoAd -> TcpIp -> LSduR -> EthIf

Please refer to  for more details.

⌈
The AUTOSAR XCP slave connected by Ethernet and TCP/IP or UDP/IP is addressed by its IP Address and Port number.
⌋

⌈
The AUTOSAR XCP slave only accepts one connection at the time.
⌋

⌈
If the socket is closed while in XCP connected state, the slave device will perform an XCP disconnect, which means that all data acquisition will be stopped.
⌋

⌈
The addressing scheme is defined according to
⌋

.

⌈
The header and tail of an XCP on Ethernet message have to be set according to
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 通用需求
*原文标题：General Requirements*

Upstream requirements:
⌈
Link-time and post-build-time configuration data shall be implemented as read-only data structures. Link-time configuration data shall be immediately referenced by the implementation, the start-address of post-build-time configuration data shall be passed during module initialization
⌋

  Upstream requirements: ,
⌈
The XCP module shall support pre-compile time, link-time and post-build-time configuration.
⌋

### 27. 错误分类
*原文标题：Error Classification*

Upstream requirements:
⌈
The error values and EventIds are named in capital letters according to the scheme `XCP_E_`<NAME>, where NAME describes the error/EventId and may consist of several words separated by underscores.
⌋

### 28. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Xcp
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Module not initialized | XCP_E_UNINIT | 0x02 |
| API call with wrong PDU ID | CP_E_INVALID_PDUID | 0x03 |
| Initialization of XCP failed | XCP_E_INIT_FAILED | 0x04 |
| Null pointer has been passed as an argument | XCP_E_PARAM_POINTER | 0x12 |

⌋

### 29. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 30. Transient Faults

There are no transient faults.

### 31. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 32. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 33. 版本检查
*原文标题：Version checking*

For details refer to .

### 34. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 35. API 规范
*原文标题：API specification*

### 36. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following modules are listed:

 Definition of imported datatypes of module Xcp
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Comtype | ComStack_Types.h | NetworkHandleType |
| ^ | ComStack_Types.h | PduIdType |
| ^ | ComStack_Types.h | PduInfoType |
| ^ | ComStack_Types.h | PduLengthType |
| Fr | Fr_GeneralTypes.h | Fr_ChannelType |
| NvM | Rte_NvM_Type.h | NvM_BlockIdType |
| Os | Os.h | CounterType |
| ^ | Os.h | StatusType |
| ^ | Os.h | TickRefType |
| ^ | Os.h | TickType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 37. 类型定义
*原文标题：Type definitions*

### 38. Xcp_ConfigType

Definition of datatype `Xcp_ConfigType`
⌈
| Name | Xcp_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | The content of the initialization data structure is implementation specific |
| Description | This is the type of the data structure containing the initialization data for XCP. | < |
| Available via | Xcp.h | < |

⌋

### 39. Xcp_Transmission 模式类型
*原文标题：Xcp_Transmission Mode Type*

Definition of datatype `Xcp_TransmissionModeType`
⌈
| Name | Xcp_TransmissionModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | XCP_TX_OFF | 0x00 | Transmission Disabled |
| ^ | XCP_TX_ON | 0x01 | Transmission Enabled |
| Description | Handles the enabling and disabling of the transmission mode | < | < |
| Available via | Xcp.h | < | < |

⌋

### 40. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 41. Xcp_Init

Definition of API function `Xcp_Init`
  Upstream requirements: , , , ,
⌈
| Service Name | Xcp_Init | < |
|---|---|---|
| Syntax | void Xcp_Init ( |  |

  const `Xcp_ConfigType`* `Xcp_ConfigPtr`
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | Xcp_ConfigPtr | Pointer to a selected configuration structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | void | - |
| Description | This service initializes interfaces and variables of the AUTOSAR XCP layer. | < |
| Available via | Xcp.h | < |

⌋

⌈
The function `Xcp_Init` shall internally store the configuration address to enable subsequent API calls to access the configuration
⌋

### 42. Xcp_SetTransmissionMode

Definition of callback function `Xcp_SetTransmissionMode`
⌈
| Service Name | Xcp_SetTransmissionMode | < |
|---|---|---|
| Syntax | void Xcp_SetTransmissionMode ( |  |

  NetworkHandleType Channel,
  `Xcp_TransmissionModeType` Mode
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | Channel | The Network channel for the used bus communication |
| ^ | Mode | Enabled or disabled Transmission mode Parameters |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This API is used to turn on and off of the TX capabilities of used communication bus channel in XCP module. | < |
| Available via | Xcp.h | < |

⌋

⌈
The XCP module shall provide this service only if `XCP_SUPPRESS_TX_SUPPORT` (see ) equals TRUE.
⌋

⌈
If `Xcp_SetTransmissionMode`(Channel, Mode) is called and parameter Mode equals `XCP_TX_OFF`, all TxPDUs which are assigned to Channel shall not be transmitted.
⌋

Note: It could be derived from <Bus>If configuration and the global PDU parameter, to which specific communication channel the PDU is assigned to.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Xcp_RxIndication

Definition of callback function `Xcp_RxIndication`
⌈
| Service Name | Xcp_RxIndication | < |
|---|---|---|
| Syntax | void Xcp_RxIndication ( |  |

  PduIdType RxPduId,
  const PduInfoType* PduInfoPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x42 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different PduIds. Non reentrant for the same PduId. | < |
| Parameters (in) | RxPduId | ID of the received PDU. |
| ^ | PduInfoPtr | Contains the length (SduLength) of the received PDU, a pointer to a buffer (SduDataPtr) containing the PDU, and the MetaData related to this PDU. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Indication of a received PDU from a lower layer communication interface module. | < |
| Available via | Xcp.h | < |

⌋

The callback function `Xcp_RxIndication` is called by the Bus Interfaces, Ethernet Socket Adaptor or CDD and is implemented by the Xcp module.

 Development error handling in context of `Xcp_RxIndication`
  Status: DRAFT
  Replaces:
⌈
The callback function `Xcp_RxIndication` shall inform the DET, if development error detection is enabled (`XCP_DEV_ERROR_DETECT` is set to TRUE) and if function call has failed because of the following reasons:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Xcp_TxConfirmation

Definition of callback function `Xcp_TxConfirmation`
⌈
| Service Name | Xcp_TxConfirmation | < |
|---|---|---|
| Syntax | void Xcp_TxConfirmation ( |  |

  PduIdType TxPduId,
  `Std_ReturnType` result
| ) | < |  |
|---|---|---|
| Service ID | 0x40 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different PduIds. Non reentrant for the same PduId. | < |
| Parameters (in) | TxPduId | ID of the PDU that has been transmitted. |
| ^ | result | E_OK: The PDU was transmitted. E_NOT_OK: Transmission of the PDU failed. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | The lower layer communication interface module confirms the transmission of a PDU, or the failure to transmit a PDU. | < |
| Available via | Xcp.h | < |

⌋

Note:

The callback function `Xcp_TxConfirmation` is called by the Bus Interfaces, Ethernet Socket Adaptor or CDD and is implemented by the Xcp module.

 Development error handling in context of `Xcp_TxConfirmation`
  Status: DRAFT
  Replaces:
⌈
If development error detection for the XCP module is enabled: if the function `Xcp_TxConfirmation` is called before the XCP was initialized successfully, the function `Xcp_TxConfirmation` shall raise the development error `XCP_E_UNINIT` and return.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Xcp_TriggerTransmit

Definition of callback function `Xcp_TriggerTransmit`
⌈
| Service Name | Xcp_TriggerTransmit | < |
|---|---|---|
| Syntax | Std_ReturnType Xcp_TriggerTransmit ( |  |

  PduIdType TxPduId,
  PduInfoType* PduInfoPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x41 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different PduIds. Non reentrant for the same PduId. | < |
| Parameters (in) | TxPduId | ID of the SDU that is requested to be transmitted. |
| Parameters (inout) | PduInfoPtr | Contains a pointer to a buffer (SduDataPtr) to where the SDU data shall be copied, and the available buffer size in SduLengh. On return, the service will indicate the length of the copied SDU data in SduLength. |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: SDU has been copied and SduLength indicates the number of copied bytes. E_NOT_OK: No SDU data has been copied. PduInfoPtr must not be used since it may contain a NULL pointer or point to invalid data. |
| Description | Within this API, the upper layer module (called module) shall check whether the available data fits into the buffer size reported by PduInfoPtr->SduLength. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Scheduled functions

The functions are called directly by Basic Software Scheduler. The following functions shall have no return value and no parameter. All functions shall be non reentrant.

### 47. Xcp_MainFunction

Definition of scheduled function `Xcp_MainFunction`
  Upstream requirements: , ,
⌈
| Service Name | Xcp_MainFunction | < |
|---|---|---|
| Syntax | void Xcp_MainFunction ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Description | Scheduled function of the XCP module | < |
| Available via | SchM_Xcp.h | < |

⌋

⌈
The XCP Main Function shall be called cyclically.
⌋

### 48. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 49. Mandatory 接口
*原文标题：Mandatory interfaces*

Definition of mandatory interfaces required by module Xcp
⌈
| API Function | Header File | Description |
|---|---|---|
| There are no mandatory interfaces. | < | < |

⌋

### 50. Optional 接口
*原文标题：Optional interfaces*

Definition of optional interfaces requested by module Xcp
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |
| FrIf_DisableLPdu | FrIf.h | Wraps the FlexRay Driver Function Fr_DisableLPdu. It disables the hardware resource of an LPdu for transmission/reception. |
| FrIf_ReconfigLPdu | FrIf.h | Calls the FlexRay Driver's API Fr_ReconfigLPdu. The enum value "FR_CHANNEL_AB" shall not be used. |
| GetCounterValue | Os.h | This service reads the current count value of a counter (returning either the hardware timer ticks if counter is driven by hardware or the software ticks when user drives counter). |
| GetElapsedValue | Os.h | This service gets the number of ticks between the current tick value and a previously read tick value. |
| NvM_ReadBlock | NvM.h | Service to copy the data of the NV block to its corresponding RAM block. |
| NvM_WriteBlock | NvM.h | Service to copy the data of the RAM block to its corresponding NV block. |
| PduR_XcpTransmit | PduR_Xcp.h | Requests transmission of a PDU. |

⌋

### 51. Callout 接口
*原文标题：Callout interfaces*

No callout interfaces.

### 52. Configurable 接口
*原文标题：Configurable interfaces*

In this chapter, all interfaces are listed where the target function could be configured. The target function is usually a call-back function. The names of these kind of interfaces is not fixed because they are configurable.

The XCP module offers configurable interfaces to be used by Complex Driver(s).

### 53. 时序图
*原文标题：Sequence diagrams*

### 54. XCP on FlexRay

### 55. Xcp on FlexRay Transmit

### 56. Xcp on FlexRay Receive Indication

### 57. XCP on CAN

### 58. Xcp on CAN Transmit

### 59. Xcp on CAN Receive Indication

### 60. XCP on Ethernet

### 61. Xcp on Ethernet Transmit

### 62. Xcp on Ethernet Receive Indication

### 63. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification Chapter  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave Chapter  in the specification to guarantee comprehension.

Chapter  specifies the structure (containers) and the parameters of the module XCP.

Chapter  specifies published information of the module XCP.

### 64. How to read this chapter

For details refer to .

### 65. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters describe Chapter  and Chapter .

  Upstream requirements:
⌈
The listed configuration items can be derived from a network description database, which is based on the EcuConfigurationTemplate. The configuration tool shall extract all information to configure the XCP.
⌋

  Upstream requirements:
⌈
The configuration tool must check the consistency of the configuration at configuration time.
⌋

  Upstream requirements:
⌈
Configuration rules and constraints for plausibility checks shall be performed during configuration time, wherever possible.
⌋

  Upstream requirements:
⌈
These dependencies between FlexRay Interface and FlexRay Driver configuration must be provided at configuration time by the configuration tools.
⌋

### 66. Xcp

Definition of EcucModuleDef Xcp
⌈
| Module Name | Xcp |
|---|---|
| Description | Configuration of the XCP module |
| Post-Build Variant Support | true |
| Supported Config Variants | VARIANT-POST-BUILD, VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| XcpConfig | 1 | This container contains the configuration parameters and sub containers of the AUTOSAR Xcp module. |
| XcpGeneral | 1 | This container contains the general configuration parameters of the XCP. |

⌋

### 67. XcpGeneral

Definition of EcucParamConfContainerDef XcpGeneral
⌈
| Container Name | XcpGeneral | < | < |
|---|---|---|---|
| Parent Container | Xcp | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container contains the general configuration parameters of the XCP. | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| XcpDaqConfigType | 1 |  |
| XcpDaqCount | 1 |  |
| XcpDevErrorDetect | 1 |  |
| XcpFlashProgrammingEnabled | 1 |  |
| XcpIdentificationFieldType | 1 |  |
| XcpMainFunctionPeriod | 1 |  |
| XcpMaxCto | 1 |  |
| XcpMaxDto | 1 |  |
| XcpMaxEventChannel | 1 |  |
| XcpMinDaq | 1 |  |
| XcpOdtCount | 1 |  |
| XcpOdtEntriesCount | 1 |  |
| XcpOdtEntrySizeDaq | 1 |  |
| XcpOdtEntrySizeStim | 1 |  |
| XcpOnCanEnabled | 1 |  |
| XcpOnCddEnabled | 1 |  |
| XcpOnEthernetEnabled | 1 |  |
| XcpOnFlexRayEnabled | 1 |  |
| XcpPrescalerSupported | 1 |  |
| XcpSuppressTxSupport | 1 |  |
| XcpTimestampTicks | 1 |  |
| XcpTimestampType | 1 |  |
| XcpTimestampUnit | 1 |  |
| XcpCounterRef | 1 |  |
| XcpNvRamBlockIdRef | 0..1 |  |

No Included Containers
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 68. XcpConfig

Definition of EcucParamConfContainerDef XcpConfig
⌈
| Container Name | XcpConfig | < | < |
|---|---|---|---|
| Parent Container | Xcp | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container contains the configuration parameters and sub containers of the AUTOSAR Xcp module. | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

No Included Parameters

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| XcpCommunicationChannel | 0..* | This container represents the configuration of the communication channel of XCP. |
| XcpDaqList | 1..* | This container contains the configuration of the DAQs. |
| XcpEventChannel | 1..* | This container contains the configuration of event channels on the XCP slave. |
| XcpPageSwitching | 0..1 | This container represents configuration of the page switching feature. |
| XcpPdu | 1..* | Contains PDU information. A PDU may be either a transmission PDU or a reception PDU. |

⌋

### 69. XcpDaqList

Definition of EcucParamConfContainerDef XcpDaqList
⌈
| Container Name | XcpDaqList | < | < |
|---|---|---|---|
| Parent Container | XcpConfig | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container contains the configuration of the DAQs. | < | < |
| Multiplicity | 1..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| XcpDaqListNumber | 1 |  |
| XcpDaqListType | 1 |  |
| XcpMaxOdt | 1 |  |
| XcpMaxOdtEntries | 1 |  |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| XcpDto | 0..* | This container collects data transfer object specific parameters for the DAQ list. |
| XcpOdt | 0..* | This container contains ODT-specific parameter for the DAQ list. |

⌋

 Definition of EcucIntegerParamDef XcpDaqListNumber
⌈
| Parameter Name | XcpDaqListNumber | < | < |
|---|---|---|---|
| Parent Container | XcpDaqList | < | < |
| Upstream mapping defined | - | < | < |
| Description | Index number of the DAQ list | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucIntegerParamDef (Symbolic Name generated for this parameter) | < | < |
| Range | 0 .. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 37 章（内容从略，见纯文本全文）

70. XcpDto
71. XcpOdt
72. XcpOdtEntry
73. XcpEventChannel
74. XcpPdu
75. XcpRxPdu
76. XcpTxPdu
77. XcpCommunicationChannel
78. XcpPageSwitching
79. XcpSegment
80. XcpPage
81. 发布信息
82. 附录
83. 不适用需求
84. Change history of AUTOSAR traceable items
85. Traceable item history of this document according to AUTOSAR Release R22-11
86. Added 规范 Items in R22-11
87. Changed 规范 Items in R22-11
88. Deleted 规范 Items in R22-11
89. Traceable item history of this document according to AUTOSAR Release R23-11
90. Added 规范 Items in R23-11
91. Changed 规范 Items in R23-11
92. Deleted 规范 Items in R23-11
93. Traceable item history of this document according to AUTOSAR Release R24-11
94. Added 规范 Items in R24-11
95. Changed 规范 Items in R24-11
96. Deleted 规范 Items in R24-11
97. Added Constraints in R24-11
98. Changed Constraints in R24-11
99. Deleted Constraints in R24-11
100. Traceable item history of this document according to AUTOSAR Release R25-11
101. Added 规范 Items in R25-11
102. Changed 规范 Items in R25-11
103. Deleted 规范 Items in R25-11
104. Added Constraints in R25-11
105. Changed Constraints in R25-11
106. Deleted Constraints in R25-11
