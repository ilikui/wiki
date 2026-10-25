# Specification of Ethernet Transceiver Driver (`EthernetTransceiverDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 431 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_EthernetTransceiverDriver_431\AUTOSAR_CP_SWS_EthernetTransceiverDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_EthernetTransceiverDriver_431\AUTOSAR_CP_SWS_EthernetTransceiverDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_EthernetTransceiverDriver_431\zzgen\CP_SWS_EthernetTransceiverDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Ethernet Transceiver Driver.

In the AUTOSAR Layered Software Architecture, the Ethernet Transceiver Driver belongs to the Microcontroller Abstraction Layer, or more precisely, to the Communication Drivers.

This indicates the main task of the Ethernet Transceiver Driver:

Provide to the upper layer (Ethernet Interface, see SWS Ethernet Interface ) a hardware independent interface comprising multiple equal transceivers. This interface shall be uniform for all transceivers. Thus, the upper layer (Ethernet Interface) may access the underlying bus system in a uniform manner. The configuration of the Ethernet Transceiver Driver however is bus specific, since it takes into account the specific features of the communication transceiver.

A single Ethernet Transceiver Driver module supports only one type of transceiver hardware, but several transceivers of the same type. The Ethernet Transceiver Driver's prefix requires a unique namespace. The Ethernet Interface can access different Ethernet controller types using different Ethernet Transceiver Drivers using this prefix. The decision which driver to use to access a particular transceiver is a configuration parameter of the Ethernet Interface.

Figure  depicts the lower part of the Ethernet stack. One Ethernet Interface accesses several transceivers using one or several Ethernet Transceiver Drivers.

Note: The Ethernet Transceiver Driver is specified in a way that allows for object code delivery of the code module, following the "one-fits-all" principle, i.e. the entire configuration of the Ethernet Interface can be carried out without modifying any source code. Thus, the configuration of the Ethernet Transceiver Driver can be carried out largely without detailed knowledge of the Ethernet Transceiver Driver software.

## 模块依赖

This chapter lists the modules interacting with the Ethernet Transceiver Driver module.

Modules that use Ethernet Transceiver Driver module (calls between drivers are abstracted by the EthIf):

* Ethernet Interface (EthIf)
* Ethernet Switch Driver (EthSwt) for configuring the PHY related to a port and access the PHY registers.

Modules used by the Ethernet Transceiver Driver module:

* Ethernet Controller Driver (Eth) for transceiver access via Media Independent Interface (MII).

Dependencies to other Modules:

* On certain systems the transceiver might share resources with other components (e.g. the MCU, Port), and may depend on their configuration. If those resources are within scope of the other modules (e.g. PLL configuration, memory mapping, etc.) the Ethernet Transceiver Driver module does not take care of configuring those components but requires their preceding initialization.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

Currently, chapter  does not describe the versions of dependent modules. Thus, a version check will extend the chapter.

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Ethernet Transceiver Driver.

In the AUTOSAR Layered Software Architecture, the Ethernet Transceiver Driver belongs to the Microcontroller Abstraction Layer, or more precisely, to the Communication Drivers.

This indicates the main task of the Ethernet Transceiver Driver:

Provide to the upper layer (Ethernet Interface, see SWS Ethernet Interface ) a hardware independent interface comprising multiple equal transceivers. This interface shall be uniform for all transceivers. Thus, the upper layer (Ethernet Interface) may access the underlying bus system in a uniform manner. The configuration of the Ethernet Transceiver Driver however is bus specific, since it takes into account the specific features of the communication transceiver.

A single Ethernet Transceiver Driver module supports only one type of transceiver hardware, but several transceivers of the same type. The Ethernet Transceiver Driver's prefix requires a unique namespace. The Ethernet Interface can access different Ethernet controller types using different Ethernet Transceiver Drivers using this prefix.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Ethernet Transceiver Driver module that are not included in the AUTOSAR glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| EC | Ethernet controller |
| ET | Ethernet transceiver |
| Eth | Ethernet Controller Driver (AUTOSAR BSW module) |
| EthIf | Ethernet Interface (AUTOSAR BSW module) |
| EthTrcv | Ethernet Transceiver Driver (AUTOSAR BSW module) |
| MCG | Module Configuration Generator |
| MII | Media Independent Interface (standardized Interface provided by Ethernet controllers to access Ethernet transceivers, see IEEE 802.3 -2006) |
| PLCA | Physical Layer Collision Avoidance |
| P2P | Point-to-Point |
| TO | Transmit Opportunity |
| OA TC10 | Open Alliance TC10 (see ) |

### 4. 相关文档
*原文标题：Related documentation*

### 5. Input documents

### 6. Related standards and norms

IEC 7498-1 The Basic Model, IEC Norm, 1994

 IEEE 802.3-2006

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Ethernet Transceiver Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Ethernet Transceiver Driver.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

The Ethernet Transceiver Driver module is only able to handle a single thread of execution. The execution must not be pre-empted by itself.

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

The Ethernet BSW stack is intended to be used wherever high data rates are required but no hard real-time is required. Of course, it can also be used for less-demanding use cases, i.e. for low data rates.

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This chapter lists the modules interacting with the Ethernet Transceiver Driver module.

Modules that use Ethernet Transceiver Driver module (calls between drivers are abstracted by the EthIf):

* Ethernet Interface (EthIf)
* Ethernet Switch Driver (EthSwt) for configuring the PHY related to a port and access the PHY registers.

Modules used by the Ethernet Transceiver Driver module:

* Ethernet Controller Driver (Eth) for transceiver access via Media Independent Interface (MII).

Dependencies to other Modules:

* On certain systems the transceiver might share resources with other components (e.g. the MCU, Port), and may depend on their configuration. If those resources are within scope of the other modules (e.g. PLL configuration, memory mapping, etc.) the Ethernet Transceiver Driver module does not take care of configuring those components but requires their preceding initialization.

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in `SRS_Ethernet`  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| MACsec Key Agreement Protocol support |  |  |
| Configure which Ethernet ports use MACsec |  |  |
| Configuration of unprotected traffic (for Hardware-based MACsec) |  |  |
| Classification of production errors |  |  |
| The Ethernet Transceiver Driver shall provide hardware configuration and initialization. |  |  |
| The Ethernet Transceiver Driver shall provide access to the link state. |  |  |
| The Ethernet Transceiver Driver shall support access to the wake up reason. |  |  |
| The Ethernet Transceiver Driver shall be able to wake-up an Ethernet network. |  |  |
| The Ethernet Transceiver Driver shall provide access to standardized hardware features |  |  |
| The Ethernet Transceiver Driver shall provide 10BASE-T1S support |  |  |
| The Ethernet Transceiver Driver shall support a controlled link shutdown (sleep request) |  |  |
| The Ethernet Transceiver Driver shall be able to react on sleep request received from the network. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能规范
*原文标题：Functional specification*

### 14. Ethernet BSW stack

As part of the AUTOSAR Layered Software Architecture according to Figure , the Ethernet BSW modules also form a layered software stack. Figure  depicts the basic structure of this Ethernet BSW stack. The EthIf module accesses several transceivers using the Ethernet Transceiver Driver layer, which can be made up of several Ethernet Transceiver Drivers modules.

### 15. Indexing scheme

Users of the Ethernet Transceiver Driver identify transceiver resources using an indexing scheme as depicted in Figure .

⌈
The Ethernet Transceiver Driver is using a zero-based index to abstract the access for upper software layers. The parameter EthTrcvCtrlIdx  within configuration corresponds to parameter TrcvIdx used in the APIs.
⌋

### 16. 需求
*原文标题：Requirements*

This chapter lists requirements that shall be fulfilled by Ethernet Transceiver Driver module implementations.

The Ethernet Interface module environment comprises all modules which are calling interfaces of the Ethernet Interface module.

⌈
The Ethernet Transceiver Driver module shall support pre-compile time, link time and post-build time configuration.
⌋

⌈
The header file EthTrcv.h shall include a software and specification version number.
⌋

⌈
The Ethernet Transceiver Driver module shall perform a consistency check between code files and header files based on pre-process-checking the version numbers of related code files and header files.
⌋

⌈
In case development error detection is enabled for the Ethernet Transceiver Driver module: The Ethernet Transceiver Driver module shall check API parameters for validity and report detected errors to the DET.
⌋

DET API functions are specified in SWS Default Error Tracer .

⌈
The Ethernet Transceiver Driver module shall implement the API functions specified by the Ethernet Transceiver Driver SWS as real C-code functions and shall not implement the API as macros for object code deliveries.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 配置描述
*原文标题：Configuration description*

⌈
The Ethernet Transceiver Driver module shall provide an XML file that contains the data, which is required for the SW identification (it shall contain the vendor identification, module ID and software version information), configuration and integration process. This file should describe vendor specific configuration parameters as well as it should contain recommended configuration parameter values.
⌋

⌈
The MCG shall read the ECU configuration description of the Ethernet Driver module(s). Ethernet Driver related configuration data is contained in the Ethernet Driver module configuration description.
⌋

⌈
The MCG shall ensure the consistency of the generated configuration data.
⌋

⌈
The configuration of the Ethernet Transceiver Driver module shall be calculated at ECU configuration time. None of the communication parameters shall be calculated at runtime.
⌋

⌈
The start address of post-build time configuration data shall be passed during module initialization.
⌋

Note: For more details regarding the initialization please refer to section

An assignment of those configuration classes to configuration parameters can be found in chapter .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 唤醒支持
*原文标题：Wake-up support*

Upstream requirements:
⌈
The Ethernet Transceiver driver shall support wake up detection depending on the configuration parameter EthTrcvWakeUpSupport either not at all (`ETHTRCV_WAKEUP_NOT_SUPPORTED`) or by interrupt (`ETHTRCV_WAKEUP_BY_INTERRUPT`) or by asynchronous check (`ETHTRCV_WAKEUP_BY_ASYNCHRONOUS_CHECK`) or by polling (`ETHTRCV_WAKEUP_BY_POLLING`).
⌋

Note: If the Ethernet Transceiver driver detects a wakeup it will map the wake-up reason provided by the Ethernet hardware (PHY) to wake-up events defined by EcuM. The Ethernet Transceiver driver will support the following scenarios:

* Sleeping ECU and sleeping network -> wake up detection via `EthTrcv_Init` (called during Power On)
* Awake ECU and sleeping network -> wake up detection via `EthTrcv_MainFunction` or wake up interrupt handler (checked by EcuM within CheckWakeup)

⌈
If the EthTrcv is requested with `ETH_MODE_DOWN` (e.g. low power mode), the Ethernet Transceiver driver shall enable the corresponding ICU channel (see EthTrcvIcuChannelRef) by calling `Icu_EnableNotification` if configured.
⌋

⌈
If the EthTrcv is requested with `ETH_MODE_ACTIVE` (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 唤醒 and 休眠 on dataline
*原文标题：Wake-up and Sleep on dataline*

AUTOSAR supports OA TC10 compliant Ethernet hardware (PHY) (see ). Such PHYs have the capability to transmit wake-up and sleep signals on the dataline. Wake-up on dataline will bring the connected communication partners from a low-power sleep mode to a normal mode. Sleep on dataline will bring the connected communication partners from a normal mode to a low-power mode in a synchronized manner.

The Ethernet Transceiver driver is requested to trigger a wake-up on the network if the upper layer requests `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST`.

The Ethernet transceiver driver is requested to trigger a sleep on the network if the upper layer requests `ETH_MODE_DOWN`.

A wake-up on the network could be propagated to neighboring PHYs according to the configuration.

Therefore, the configuration contains particular parameter to configure the behaviour regarding the forwarding of a received wake-up:

* Forward a locally received wake-up from a neighboring PHY to the network (EthTrcvWakeupForwardLocalEnabled);
* Forward a received wake-up from the network to the neighboring PHY. (EthTrcvWakeupForwardRemoteEnabled).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. PLCA 支持
*原文标题：PLCA support*

Physical Layer Collision Avoidance (PLCA) media access control specified by IEEE (IEEE 802.3cg - 2019 ) allows several nodes to share the same medium.

This media access control mode is meant to be used in half-duplex and requires to be supported by the HW. This feature supported by specific HW (i.e. 10BASE-T1S) can be deactivated and in that case CSMA/CD is used for multidrop topologies. In this case, autonegociation is configured the same way as the others Ethernet PHY types.

### 21. MACsec 支持
*原文标题：MACsec support*

Handling if `EthTrcv_MacSecInitRxSc` is called and EthTrcvMacSecEnabled is available and set to TRUE
  Status: DRAFT
  Upstream requirements:
⌈
If `EthTrcv_MacSecInitRxSc` is called and EthTrcvMacSecEnabled is available and set to TRUE of the EthTrcvConfig identified with the given TrcvIdx, then the EthTrcv driver shall configure a receive secure channel with the secure channel id given with RxSci at the PHY that corresponds to the given TrcvIdx and return with E_OK.
⌋

 Handling if `EthTrcv_MacSecInitRxSc` is called and EthTrcvMacSecEnabled is set to FALSE or the configuration parameter is not available
  Status: DRAFT
  Upstream requirements:
⌈
If `EthTrcv_MacSecInitRxSc` is called and EthTrcvMacSecEnabled is set to FALSE or the configuration parameter is not available at the EthTrcvConfig identified with the given TrcvIdx, then the EthTrcv driver shall return with E_NOT_OK.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. cable 诊断的处理
*原文标题：Handling of cable diagnostic*

Cable diagnostic measurement is triggered by calling `EthTrcv_RunCableDiagnostic`. The current state of the cable diagnostic measurement is polled by calling `EthTrcv_GetCableDiagnosticsResult`. If `EthTrcv_GetCableDiagnosticsResult` return with other value then `ETHTRCV_CABLEDIAG_PENDING`, then the cable diagnostic has finished.

It is up to the caller to re-trigger cable diagnostic again, if the measurement failed by returning `ETHTRCV_CABLEDIAG_ERROR`.

⌈
If `EthTrcv_RunPortCableDiagnostic` is called, EthTrcv has to ensure that the Ethernet hardware (PHY) is in a state to run the cable diagnostic by considering at least the following points:

* the corresponding Ethernet transceiver is in state `ETH_MODE_ACTIVE`
* the corresponding Ethernet transceiver is in state `ETHTRCV_LINK_STATE_DOWN`

If all pre conditions are fullfilled to run the cable diagnostic measurement, EthTrcv shall trigger the cable diagnostic measurement and set the state internally to `ETHTRCV_CABLEDIAG_PENDING` of the affected Ethernet transceiver.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 24. Development 错误
*原文标题：Development Errors*

Definition of development errors in module EthTrcv
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Invalid transceiver index | ETHTRCV_E_INV_TRCV_IDX | 0x01 |
| EthTrcv module was not initialized | ETHTRCV_E_UNINIT | 0x02 |
| Invalid pointer in parameter list | ETHTRCV_E_PARAM_POINTER | 0x03 |

⌋

### 25. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module EthTrcv
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Failure or incorrect communication mode | ETHTRCV_E_MDI_COMMUNICATION | 0x04 |

⌋

### 26. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 27. Extended Production 错误
*原文标题：Extended Production Errors*

Extended production errors are handled as events of the Diagnostic Event Manager. The event IDs are defined in the following tables, while the actual values are assigned externally by the configuration of the Diagnostic Event Manager, and are included in the module via Dem.h.

 Ethernet Transceiver Access Failure.
  Upstream requirements:
⌈
| Diagnostic Event (Error Name) | ETHTRCV_E_ACCESS |
|---|---|
| Description | Monitors the access to the Ethernet Transceiver. |
| Failed condition | When access to the Ethernet Transceiver fails the module shall report the extended production error with event status DEM_EVENT_STATUS_PREFAILED to DEM. |
| Passed condition | When access to the Ethernet Transceiver succeds the module shall report the extended production error with event status DEM_EVENT_STATUS_PREPASSED to DEM. |

⌋

### 28. API 规范
*原文标题：API specification*

### 29. Imported 类型
*原文标题：Imported types*

This chapter lists all types included from the following modules:

 Definition of imported datatypes of module EthTrcv
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| EcuM | EcuM.h | EcuM_WakeupSourceType |
| Eth | Eth_GeneralTypes.h | Eth_ModeType |
| Icu | Icu.h | Icu_ChannelType |
| Mka | Mka.h | Mka_ConfidentialityOffsetType (draft) |
| ^ | Mka.h | Mka_MacSecConfigType (draft) |
| ^ | Mka.h | Mka_SakKeyPtrType (draft) |
| ^ | Mka.h | Mka_Stats_Rx_ScType (draft) |
| ^ | Mka.h | Mka_Stats_Rx_SecYType (draft) |
| ^ | Mka.h | Mka_Stats_SecYType (draft) |
| ^ | Mka.h | Mka_Stats_Tx_ScType (draft) |
| ^ | Mka.h | Mka_Stats_Tx_SecYType (draft) |
| ^ | Mka.h | Mka_ValidateFramesType (draft) |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 30. 类型定义
*原文标题：Type definitions*

### 31. EthTrcv_ConfigType

Definition of datatype `EthTrcv_ConfigType`
⌈
| Name | EthTrcv_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Description | Implementation specific structure of the post build configuration | < |
| Available via | EthTrcv.h | < |

⌋

### 32. EthTrcv_LinkStateType

Definition of datatype `EthTrcv_LinkStateType`
⌈
| Name | EthTrcv_LinkStateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_LINK_STATE_DOWN | 0x00 | No physical Ethernet connection established |
| ^ | ETHTRCV_LINK_STATE_ACTIVE | 0x01 | Physical Ethernet connection established |
| Description | This type defines the Ethernet link state. The link state changes after an Ethernet cable gets plugged in and the transceivers on both ends negotiated the transmission parameters (i.e. baud rate and duplex mode) | < | < |
| Available via | Eth_GeneralTypes.h | < | < |

⌋

### 33. EthTrcv_StateType

Definition of datatype `EthTrcv_StateType`
⌈
| Name | EthTrcv_StateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_STATE_UNINIT | 0x00 | Driver is not yet configured |
| ^ | ETHTRCV_STATE_INIT | 0x01 | Driver is configured |
| Description | Status supervision used for Development Error Detection. The state shall be available for debugging. | < | < |
| Available via | Eth_GeneralTypes.h | < | < |

⌋

### 34. EthTrcv_BaudRateType

Definition of datatype `EthTrcv_BaudRateType`
⌈
| Name | EthTrcv_BaudRateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_BAUD_RATE_10MBIT | 0x00 | 10MBIT Ethernet connection |
| ^ | ETHTRCV_BAUD_RATE_100MBIT | 0x01 | 100MBIT Ethernet connection |
| ^ | ETHTRCV_BAUD_RATE_1000MBIT | 0x02 | 1000MBIT Ethernet connection |
| ^ | ETHTRCV_BAUD_RATE_2500MBIT | 0x03 | 2500MBIT Ethernet Connection |
| Description | This type defines the Ethernet baud rate. The baud rate gets either negotiated between the connected transceivers or has to be configured. | < | < |
| Available via | Eth_GeneralTypes.h | < | < |

⌋

### 35. EthTrcv_DuplexModeType

Definition of datatype `EthTrcv_DuplexModeType`
⌈
| Name | EthTrcv_DuplexModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_DUPLEX_MODE_HALF | 0x00 | Half duplex Ethernet connection |
| ^ | ETHTRCV_DUPLEX_MODE_FULL | 0x01 | Full duplex Ethernet connection |
| Description | This type defines the Ethernet duplex mode. The duplex mode gets either negotiated between the connected transceivers or has to be configured. | < | < |
| Available via | Eth_GeneralTypes.h | < | < |

⌋

### 36. EthTrcv_ WakeupModeType

Definition of datatype `EthTrcv_WakeupReasonType`
  Upstream requirements:
⌈
| Name | EthTrcv_WakeupReasonType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_WUR_NONE | 0x00 | No wake up reason detected. |
| ^ | ETHTRCV_WUR_GENERAL | 0x01 | General wake up detected, no distinct reason supported by hardware. |
| ^ | ETHTRCV_WUR_INTERNAL | 0x03 | Internal wake up detected. Available if supported by hardware. |
| ^ | ETHTRCV_WUR_RESET | 0x04 | Reset wake up detected. Available if supported by hardware. |
| ^ | ETHTRCV_WUR_POWER_ON | 0x05 | Power on wake up detected. Available if supported by hardware. |
| ^ | ETHTRCV_WUR_PIN | 0x06 | Pin wake up detected. Available if supported by hardware. |
| ^ | ETHTRCV_WUR_SYSERR | 0x07 | System error wake up detected. Available if supported by hardware. |
| ^ | ETHTRCV_WUR_WODL_WUP | 0x08 | Wake-up on data line (WUP = wake up pulse) detected while link is down of the corresponding Ethernet hardware (e.g. PHY). Only available if EthTrcvWakeupSleepOnDatalineEnabled is set to TRUE. |
| ^ | ETHTRCV_WUR_WODL_WUR | 0x09 | Wake-up on data line (WUR = wake up request) detected while link is active of the used Ethernet hardware (e.g. PHY). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. EthTrcv_ PhyTestModeType

Definition of datatype `EthTrcv_PhyTestModeType`
  Upstream requirements:
⌈
| Name | EthTrcv_PhyTestModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_PHYTESTMODE_NONE | 0x00 | normal operation |
| ^ | ETHTRCV_PHYTESTMODE_1 | 0x01 | test transmitter droop |
| ^ | ETHTRCV_PHYTESTMODE_2 | 0x02 | test master timing jitter |
| ^ | ETHTRCV_PHYTESTMODE_3 | 0x03 | test slave timing jitter |
| ^ | ETHTRCV_PHYTESTMODE_4 | 0x04 | test transmitter distortion |
| ^ | ETHTRCV_PHYTESTMODE_5 | 0x05 | test power spectral density (PSD) mask |
| Description | Describes the possible PHY test modes | < | < |
| Available via | Eth_GeneralTypes.h | < | < |

⌋

### 38. EthTrcv_ PhyLoopbackModeType

Definition of datatype `EthTrcv_PhyLoopbackModeType`
  Upstream requirements:
⌈
| Name | EthTrcv_PhyLoopbackModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_PHYLOOPBACK_NONE | 0x00 | normal operation |
| ^ | ETHTRCV_PHYLOOPBACK_INTERNAL | 0x01 | internal loopback |
| ^ | ETHTRCV_PHYLOOPBACK_EXTERNAL | 0x02 | external loopback |
| ^ | ETHTRCV_PHYLOOPBACK_REMOTE | 0x03 | remote loopback |
| Description | Describes the possible PHY loopback modes | < | < |
| Available via | Eth_GeneralTypes.h | < | < |

⌋

### 39. EthTrcv_ PhyTxModeType

Definition of datatype `EthTrcv_PhyTxModeType`
  Upstream requirements:
⌈
| Name | EthTrcv_PhyTxModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_PHYTXMODE_NORMAL | 0x00 | normal operation |
| ^ | ETHTRCV_PHYTXMODE_TX_OFF | 0x01 | transmitter disabled |
| ^ | ETHTRCV_PHYTXMODE_SCRAMBLER_OFF | 0x02 | scrambler disabled |
| Description | Describes the possible PHY transmit modes | < | < |
| Available via | Eth_GeneralTypes.h | < | < |

⌋

### 40. EthTrcv_ CableDiagResultType

Definition of datatype `EthTrcv_CableDiagResultType`
  Upstream requirements:
⌈
| Name | EthTrcv_CableDiagResultType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_CABLEDIAG_OK | 0x00 | Cable diagnostic ok |
| ^ | ETHTRCV_CABLEDIAG_ERROR | 0x01 | Cable diagnostic failed |
| ^ | ETHTRCV_CABLEDIAG_SHORT | 0x02 | Short circuit detected |
| ^ | ETHTRCV_CABLEDIAG_OPEN | 0x03 | Open circuit detected |
| ^ | ETHTRCV_CABLEDIAG_PENDING | 0x04 | cable diagnostic is still running |
| ^ | ETHTRCV_CABLEDIAG_WRONG_POLARITY | 0x05 | cable diagnostics has detected wrong polarity of the "Ethernet physical+" or "Ethernet physical-" lines |
| Description | Describes the results of the cable diagnostics. | < | < |
| Available via | Eth_GeneralTypes.h | < | < |

⌋

### 41. EthTrcv_MacMethodType

Definition of datatype `EthTrcv_MacMethodType`
  Status: DRAFT
⌈
| Name | EthTrcv_MacMethodType (draft) | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ETHTRCV_MAC_TYPE_CSMA_CD | 0x00 | Carrier sence multiple access with collision detection |
| ^ | ETHTRCV_MAC_TYPE_PLCA | 0x01 | Physical layer collision avoidance |
| Description | This type defines the media access control type in half duplex. If ETHTRCV_MAC_TYPE_PLCA is configured, PLCA is supported and the parameters listed in  have to be configured. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | Eth_GeneralTypes.h | < | < |

⌋

### 42. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 43. EthTrcv_Init

Definition of API function `EthTrcv_Init`
⌈
| Service Name | EthTrcv_Init | < |
|---|---|---|
| Syntax | void EthTrcv_Init ( |  |

  const `EthTrcv_ConfigType`* CfgPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | CfgPtr | Points to the implementation specific structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the Ethernet Transceiver Driver | < |
| Available via | EthTrcv.h | < |

⌋

  Status: DRAFT
  Upstream requirements:
⌈
The function shall store the access to the configuration structure for subsequent API calls.
⌋

  Upstream requirements:
⌈
The function shall consider at least the following initialization sequence for the Ethernet hardware (PHY):

* check for wake-up reasons according to
* initialize the PHY according to
* ensure that the PHY resides in a defined hardware state according to  and .
⌋

  Upstream requirements:
⌈
The function shall check for wake-up reasons and propagate the corresponding wake-up source (see EthTrcvWakeupMap configuration ) to the EcuM by calling `EcuM_SetWakeupEvent`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. 初始化 of OA TC10 PHYs
*原文标题：Initialization of OA TC10 PHYs*

Upstream requirements:
⌈
If EthTrcvWakeupSleepOnDatalineEnabled is configured and no wake-up reason was detected, then the Ethernet Transceiver driver shall ensure within the call of `EthTrcv_Init` that the Ethernet hardware (PHY) resides in the OA TC10  specified sleep mode
⌋

  Upstream requirements:
⌈
If EthTrcvWakeupSleepOnDatalineEnabled is set to TRUE and a wake-up reason was detected which relates to OA TC10  compatible Ethernet hardware (PHY), then the Ethernet hardware state (e.g. normal mode) shall be kept, since a wake-up arrived and the corresponding delay timer with EthTrcvSleepModeExecutionDelay shall be started.
⌋

Note:

* OA TC10 related wake-up reasons are `ETHTRCV_WUR_WODL_WUP`, `ETHTRCV_WUR_WODL_WUR` and `ETHTRCV_WUR_TRANSFER`.
* If a wake-up was detected, the propagation of the wake-up to the upperlayers may need some processing time. A timer to delay a sleep execution is used to prevent the Ethernet hardware (PHY) to immediately execute a sleep request while the forwarding of the wake-up to all affected upperlayers (EcuM, EthSM, EthIf) has not finished yet.

### 45. PHYs with MACsec 支持的初始化
*原文标题：Initialization of PHYs with MACsec support*

Initialize PHYs with MACsec support, where MACsec functionality is enabled
  Upstream requirements: ,
⌈
If `EthTrcv_Init` is called, then the EthTrcv driver shall initialize the Ethernet hardware (PHY) per EthTrcvConfig and consider the following configuration parameter if available, where EthTrcvMacSecEnabled is set to TRUE:

* initialize the Ethernet hardware (PHY) with all configured EthTrcvMacSecBypassEtherTypes to bypass MACsec handling for all Ethernet frames, that carrying one of the configured EtherTypes
* initialize the Ethernet hardware (PHY) with all configured EthTrcvMacSecBypassVlans to bypass MACsec handling for all Ethernet frames, that carrying one of the configured VLAN-IDs
* initialize the Ethernet hardware (PHY) with all configured EthTrcvMacSecBypassDestinationMacAddresses to bypass MACsec handling for all Ethernet frames, that carrying one of the configured destination MAC addresses
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. EthTrcv_SetTransceiverMode

Definition of API function `EthTrcv_SetTransceiverMode`
  Upstream requirements:
⌈
| Service Name | EthTrcv_SetTransceiverMode | < |
|---|---|---|
| Syntax | Std_ReturnType EthTrcv_SetTransceiverMode ( |  |

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
| Available via | EthTrcv.h | < |

⌋

⌈
If `EthTrcv_SetTransceiverMode`() is called and the internal cable diagnostic state is equal to `ETHTRCV_CABLEDIAG_PENDING`, the Ethernet Transceiver driver shall store the mode request per EthTrcv (TrcvIdx).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 95 章（内容从略，见纯文本全文）

47. ETH_MODE_DOWN request
48. ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST or ETH_MODE_ACTIVE request
49. 错误处理
50. EthTrcv_GetTransceiverMode
51. EthTrcv_GetBusWuReason
52. EthTrcv_CheckWakeup
53. EthTrcv_StartAutoNegotiation
54. EthTrcv_TransceiverLinkStateRequest
55. Point to point 网络 topology
56. Bus topology
57. EthTrcv_GetLinkState
58. Point to point 网络 topology
59. Bus topology
60. EthTrcv_GetBaudRate
61. EthTrcv_GetDuplexMode
62. EthTrcv_SetPhyTestMode
63. EthTrcv_SetPhyLoopbackMode
64. EthTrcv_GetPhySignalQuality
65. EthTrcv_SetPhyTxMode
66. EthTrcv_ RunCableDiagnostic
67. EthTrcv_GetCableDiagnosticsResult
68. EthTrcv_GetPhyIdentifier
69. EthTrcv_GetMacMethod
70. EthTrcv_MacSecUpdateSecY
71. EthTrcv_MacSecInitRxSc
72. EthTrcv_MacSecResetRxSc
73. EthTrcv_MacSecAddTxSa
74. EthTrcv_MacSecUpdateTxSa
75. EthTrcv_MacSecDeleteTxSa
76. EthTrcv_MacSecAddRxSa
77. EthTrcv_MacSecUpdateRxSa
78. EthTrcv_MacSecDeleteRxSa
79. EthTrcv_MacSecGetTxSaNextPn
80. EthTrcv_MacSecGetMacSecStatistics
81. EthTrcv_MacSecSetControlledPortEnabled
82. Scheduled functions
83. EthTrcv_MainFunction
84. EthTrcv_MainFunctionMacSec
85. Expected 接口
86. Mandatory 接口
87. Optional 接口
88. Configurable 接口
89. InterruptServiceRoutines
90. 时序图
91. 配置规范
92. How to read this chapter
93. Containers and 配置 parameters
94. EthTrcv
95. EthTrcvConfigSet
96. EthTrcvConfig
97. EthTrcvDemEventParameterRefs
98. EthTrcvMgmtInterface
99. EthTrcvMiiInterface
100. EthTrcvSwitchInterface
101. EthTrcvWakeupMap
102. EthTrcvGeneral
103. 发布信息
104. 附录
105. 不适用需求
106. Change history of AUTOSAR traceable items
107. Traceable item history of this document according to AUTOSAR Release R25-11
108. Added 规范 Items in R25-11
109. Changed 规范 Items in R25-11
110. Deleted 规范 Items in R25-11
111. Added Constraints in R25-11
112. Changed Constraints in R25-11
113. Deleted Constraints in R25-11
114. Traceable item history of this document according to AUTOSAR Release R24-11
115. Added 规范 Items in R24-11
116. Changed 规范 Items in R24-11
117. Deleted 规范 Items in R24-11
118. Added Constraints in R24-11
119. Changed Constraints in R24-11
120. Deleted Constraints in R24-11
121. Traceable item history of this document according to AUTOSAR Release R23-11
122. Added 规范 Items in R23-11
123. Changed 规范 Items in R23-11
124. Deleted 规范 Items in R23-11
125. Added Constraints in R23-11
126. Changed Constraints in R23-11
127. Deleted Constraints in R23-11
128. Traceable item history of this document according to AUTOSAR Release R22-11
129. Added 规范 Items in R22-11
130. Changed 规范 Items in R22-11
131. Deleted 规范 Items in R22-11
132. Added Constraints in R22-11
133. Changed Constraints in R22-11
134. Deleted Constraints in R22-11
135. Traceable item history of this document according to AUTOSAR Release R21-11
136. Added 规范 Items "in R21-11"
137. Changed 规范 Items "in R21-11"
138. Deleted 规范 Items "in R21-11"
139. Added Constraints "in R21-11"
140. Changed Constraints "in R21-11"
141. Deleted Constraints "in R21-11"
