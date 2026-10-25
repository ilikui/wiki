# Specification of Network Management for SAE J1939 (`SAEJ1939NetworkManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 612 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939NetworkManagement_612\AUTOSAR_CP_SWS_SAEJ1939NetworkManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939NetworkManagement_612\AUTOSAR_CP_SWS_SAEJ1939NetworkManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939NetworkManagement_612\zzgen\CP_SWS_SAEJ1939NetworkManagement.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module J1939 Network Management.

## 模块依赖

The  shows an overview of the neighboring modules of the J1939 Network Management.

The J1939 Network Management module (J1939Nm) has direct interfaces and/or configuration dependencies towards the L-SDU Router (LSduR), CAN Interface (CanIf), the J1939 Request Manager (J1939Rm), the Network Management Interface (Nm), the Basic Software Mode Manager (BswM), the Diagnostic Event Manager (DEM), and the Default Error Tracer (DET), and also to Complex Drivers (CDD). Besides these, there are also indirect dependencies towards the Communication Manager (ComM).

The J1939 Network Management module includes header files of the L-SDU Router, the Network Management Interface, the J1939 Request Manager, the Diagnostic Event Manager, and the Default Error Tracer.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module J1939 Network Management.

### 2. 网络管理 According to SAE J1939
*原文标题：Network Management According to SAE J1939*

In contrast to other AUTOSAR network management approaches, the task of J1939 Network Management is not to handle sleep and wake-up of ECUs, but to assign a unique address to each ECU.

This is achieved by sending the AddressClaimed (AC, 0x0EE00) parameter group (PG) at start-up, which announces the desired address. If another ECU claims the same address, and has higher priority, the ECU has to go silent after sending the CannotClaimAddress parameter group (AC with null address 0xFE as source address). The AddressClaimed PG must also be sent upon request.

### 3. J1939 网络管理 BSW 模块
*原文标题：J1939 Network Management BSW Module*

The J1939 Network Management module (J1939Nm) handles received and transmitted AddressClaimed (AC) PGs. It supports transmission of AC on start-up, after a contending AC received from another node, and on request (triggered by the J1939 Request Manager).

Besides this, the J1939 Network Management module also ensures that the ECU does not send any messages during startup or after address loss.

### 4. 术语表, Acronyms, and Abbreviations
*原文标题：Glossary, Acronyms, and Abbreviations*

The glossary below includes terms and acronyms and abbreviations relevant to the SAE J1939 Network Management module that are not included in the .

| Glossary Term | Explanation |
|---|---|
| Meta Data | Meta data transferred alongside a PDU, consisting of a set of meta data items |
| Meta Data Item | A single item of meta data of defined type and size |
| Node | Synonym for the SAE J1939 CA |
| NodeChannel | The connection of a node to one channel |
| Parameter | A parameter is a signal of the SAE J1939 application layer. The Parameter definition includes defined scale, limits, offset, and physical unit. Parameters are uniquely identified by the SPN. |
| Parameter Group | A Parameter Group is a message of the SAE J1939 application layer. Each Parameter Group contains several Parameters (signals), and is uniquely identified by the PGN. |
| Parameter Group Number | Unique identifier (18 bits: EDP, DP, PDUF, PDUS) of an SAE J1939 Parameter Group that is contained in the payload of many SAE J1939 protocol messages and in the 29bit CAN identifier of SAE J1939 PGs. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related Documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 7. 相关规范
*原文标题：Related Specifications*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for SAE J1939 Network Management.

Thus, the specification  shall be considered as additional and required specification for SAE J1939 Network Management.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

The J1939 Network Management module does not support all features defined in SAE J1939-81, especially:

* Changing the address of a node after reception of CommandedAddress or after an address loss.
* Changing the NAME of a node using the Name Management protocol.
* Detection of address violations by messages other than AddressClaimed.

### 10. 适用的车型领域
*原文标题：Applicability to Car Domains*

J1939 is developed by the SAE as a standard for heavy-duty on-highway, farming, and construction vehicles. It is not applicable to passenger cars or light trucks.

### 11. 对其他模块的依赖
*原文标题：Dependencies to Other Modules*

The  shows an overview of the neighboring modules of the J1939 Network Management.

The J1939 Network Management module (J1939Nm) has direct interfaces and/or configuration dependencies towards the L-SDU Router (LSduR), CAN Interface (CanIf), the J1939 Request Manager (J1939Rm), the Network Management Interface (Nm), the Basic Software Mode Manager (BswM), the Diagnostic Event Manager (DEM), and the Default Error Tracer (DET), and also to Complex Drivers (CDD). Besides these, there are also indirect dependencies towards the Communication Manager (ComM).

The J1939 Network Management module includes header files of the L-SDU Router, the Network Management Interface, the J1939 Request Manager, the Diagnostic Event Manager, and the Default Error Tracer.

### 12. 文件结构
*原文标题：File Structure*

### 13. 代码文件结构
*原文标题：Code File Structure*

For details, refer to .

### 14. 头文件结构
*原文标题：Header File Structure*

For details, refer to .

### 15. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  (Requirements on BSW Modules for SAE J1939) and  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |
| List possible error notifications |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| API handling in uninitialized state |  |  |
| Classification of extended production errors |  |  |
| Fault detection and healing of production errors and extended production errors |  |  |
| Execution frequency of production error detection |  |  |
| Do not cause dead-locks on detection of production errors - the ability to heal from previously detected production errors |  |  |
| Avoid detection of two production errors with the same root cause. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能规范
*原文标题：Functional Specification*

This chapter defines the behavior of the J1939 Network Management module. The API of the module is defined in , while the configuration is defined in chapter .

### 17. 概述
*原文标题：Overview*

The J1939 Network Management module supports transmission and reception of AddressClaimed PGs, and handling of requests for the AddressClaimed PG. It also ensures that the ECU does not send messages during the initial address claiming phase or after the ECU sent a CannotClaimAddress PG because it lost its address to a contending address claim.

### 18. 模块处理
*原文标题：Module Handling*

This section contains description of auxiliary functionality of the J1939 Network Management module.

### 19. 初始化
*原文标题：Initialization*

The J1939 Network Management module is initialized via `J1939Nm_Init`, and de-initialized via `J1939Nm_DeInit`. Except for `J1939Nm_Init`, the API functions of the J1939 Network Management module may only be called after the module has been properly initialized.

  Upstream requirements: ,
⌈
A call to `J1939Nm_Init` initializes all internal variables and sets the J1939 Network Management module to the initialized state.
⌋

  Upstream requirements:
⌈
A call to `J1939Nm_DeInit` sets the J1939 Network Management module back to the uninitialized state.
⌋

  Upstream requirements: ,
⌈
When `J1939Nm_Init` is called in initialized state, the J1939 Network Management module shall not re-initialize its internal variables. It shall instead call `Det_ReportError` with the error code `J1939NM_E_REINIT` if development error detection is enabled via J1939NmDevErrorDetect.
⌋

### 20. 时序 Related Functionality
*原文标题：Timing Related Functionality*

To be able to measure times, the J1939 Network Management module is triggered cyclically via the `J1939Nm_MainFunction`.

  Upstream requirements:
⌈
The J1939 Network Management module shall use the `J1939Nm_MainFunction` for timing related purposes.
⌋

The recovery after a bus off must be delayed by a random time to avoid repeating bus offs when two nodes try to claim the same address. This random delay is also required when sending a CannotClaimAddress PG after a contending address claim or after a request for the AddressClaimed PG.

  Upstream requirements:
⌈
The J1939Nm shall calculate a random number for delaying bus off recovery and transmission of a CannotClaimAddress PG. The calculation shall use the NAME of a node as seed.
⌋

  Upstream requirements:
⌈
When `J1939Nm_GetBusOffDelay` is called, J1939Nm shall return a random number based on the NAMEs of all nodes attached to the reported channel. This random number gives the delay time, based on the tick time configured via J1939NmBusOffDelayTickPeriod.
⌋

### 21. 网络管理 States of the J1939Nm
*原文标题：Network Management States of the J1939Nm*

While the NM Interface handles network management states on channel level, the J1939 Network Management module needs a finer granularity, because several nodes can be attached to each channel. The connection of a node to one channel is called NodeChannel hereafter.

The following picture shows the internal NM related states of the J1939 Network Management module for one of its NodeChannels (i.e. one channel of a single node), and the transitions between these states:

The J1939 Network Management module reports state changes to the NM Interface and to the Basic Software Mode Manager.

While the states reported to the NM Interface are accumulated states of all NodeChannels of a CAN channel, the J1939 Network Management module reports states to the BswM separately for each NodeChannel.

### 22. ECU 启动
*原文标题：ECU Startup*

The J1939 Network Management module starts all NodeChannels in 'SleepMode' (corresponding to `NM_MODE_BUS_SLEEP`). The CAN channels will be switched to 'NetworkMode' (corresponding to `NM_MODE_NETWORK`) immediately afterwards by a network request issued from the ComM via NM Interface.

  Upstream requirements:
⌈
During initialization via `J1939Nm_Init`, the J1939 Network Management module shall silently assume the 'SleepMode' for all NodeChannels.
⌋

  Upstream requirements:
⌈
A call to `J1939Nm_NetworkRequest` shall set all NodeChannels of the reported channel to 'NetworkMode'. The J1939 Network Management module shall notify this mode change to the NM Interface via `Nm_NetworkMode`, and shall trigger transmission of an AddressClaimed PG for each NodeChannel where J1939NmChannelUsesAddressArbitration is enabled.
⌋

The transmission of the AddressClaimed PG is described in detail in .

When entering the network mode, the behavior of the J1939 Network Management module depends on the configuration parameter J1939NmNodeStartUpDelay.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Address Loss

When a node of the J1939 Network Management module loses its claimed address on one of its channels (see ), it will switch that NodeChannel to the sub state 'AcLost' of state 'Offline', notifying the NM Interface and the BswM of this state change and sending a CannotClaimAddress PG for the losing node on that channel (see ).

  Upstream requirements:
⌈
When a NodeChannel loses its address in 'NetworkMode', it shall switch to the sub state 'AcLost' of state 'Offline' and, after a delay calculated according to , trigger transmission of a CannotClaimAddress PG.
⌋

  Upstream requirements:
⌈
When a NodeChannel switches from state 'NormalOperation' to the sub state 'AcLost' of state 'Offline', the J1939 Network Management module shall notify the Basic Software Mode Manager via `BswM_J1939Nm_StateChangeNotification`(`NM_STATE_OFFLINE`).
⌋

  Upstream requirements:
⌈
When the last NodeChannel of a channel changes its state to 'Offline', the J1939 Network Management module shall report this state change immediately to the NM Interface via `Nm_StateChangeNotification`(`NM_STATE_OFFLINE`).
⌋

### 24. ECU 关机
*原文标题：ECU Shutdown*

To shut down the network, ComM calls the `Nm_NetworkRelease` API of the NM Interface, which in turn calls `J1939Nm_NetworkRelease`. The J1939 Network Management module will then switch to 'SleepMode', and notify this to the NM Interface.

  Upstream requirements:
⌈
A call to `J1939Nm_NetworkRelease` shall set all NodeChannels of the reported channel to 'SleepMode'. The J1939 Network Management module shall notify this mode change to the NM Interface via `Nm_BusSleepMode`, and shall report a state change to 'SleepMode' to the NM Interface via `Nm_StateChangeNotification`(`NM_STATE_BUS_SLEEP`) and to BswM via `BswM_J1939Nm_StateChangeNotification`(`NM_STATE_BUS_SLEEP`).
⌋

### 25. Transmission of AddressClaimed

For each NodeChannel, the J1939 Network Management module needs to ensure that a contending AddressClaimed PG or a request for AddressClaimed is answered by at least one AddressClaimed PG. If an AddressClaimed PG is still pending for that NodeChannel, but now a CannotClaimAddress PG must be sent, it suffices to send the CannotClaimAddress. Therefore, a single buffer per NodeChannel that stores only the last transmission request is sufficient.

For the transmission of both the AddressClaimed and the CannotClaimAddress PG, the J1939 Network Management module uses just one PDU per channel with variable source address contained in the meta data of the PDU.

  Upstream requirements: , ,
⌈
When the J1939 Network Management module needs to send an AddressClaimed (or CannotClaimAddress) PG, and no previous transmission is pending, it shall directly forward the corresponding PDU to the CAN Interface via `LSduR_J1939NmTransmit`.
⌋

  Upstream requirements: , , ,
⌈
The J1939 Network Management module shall use a meta data item of type `CAN_ID_32` to provide the source address of transmitted AddressClaimed and CannotClaimAddress PGs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Reception of AddressClaimed

The source address of received AddressClaimed PGs must be immediately compared to the source addresses of all NodeChannels attached to the same channel (see J1939NmNodePreferredAddress). If any of these matches, the payload of the received PG must be compared to the configured NAME for the matching source address (see J1939NmNodeNameXxx), and depending on the relative priority, the J1939 Network Management module must send an AddressClaimed or a CannotClaimAddress PG. The priority is determined by the numerical value of the NAME.

To be able to identify the source address, the PDU associated with the AddressClaimed PG shall have a variable source address contained in the meta data of the PDU. In addition, the priority needs to be ignored for this PDU.

  Upstream requirements: ,
⌈
The J1939 Network Management module shall use a meta data item of type `CAN_ID_32` to determine the source address of received AddressClaimed and CannotClaimAddress PGs. The source address resides in the last (least significant) byte of the meta data item.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Request for AddressClaimed

When the J1939 Network Management module receives a request for the AddressClaimed PGN from the J1939 Request Manager, it will answer either with an AddressClaimed or with a CannotClaimAddress PG, depending on the current state (see below).

Independent of the request being global or specific, the transmitted PG is always global.

  Upstream requirements:
⌈
A call to `J1939Nm_RequestIndication` shall trigger transmission of an AddressClaimed PG when the addressed NodeChannel is in state 'NormalOperation' or sub state 'Claiming' of state 'Offline'.
⌋

  Upstream requirements:
⌈
A call to `J1939Nm_RequestIndication` shall trigger transmission of a CannotClaimAddress PG after a delay calculated according to  when the addressed NodeChannel is in sub state 'AcLost' of state 'Offline'.
⌋

The `J1939Nm_RequestIndication` will never be triggered in state 'SleepMode', because then no CAN messages can be received.

### 28. Address Coordination

The J1939 Network Management module is able to coordinate the addresses of different J1939 channels connected to a gateway, so that routed messages have valid addresses on every bus on which they appear.

There are two basic strategies:

# Several J1939 channels form one common address space. In this scenario, the J1939 Network Management module replicates all AddressClaimed messages appearing on one of the networks on all other networks of the same address space. Nodes connected via the gateway perform a direct arbitration of addresses.
# Selected nodes of one channel appear also on one or more other channels. In this scenario, the J1939 Network Management module claims the addresses of configured external nodes. Address arbitration is performed between the gateway and the nodes on one channel.

A single gateway can combine both strategies for different sets of channels. The main difference of the strategies is that addresses are not shared in the second strategy, and therefore more than 254 nodes can be present within one system.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, this section specifies particular errors arranged in the respective subsections below.

### 30. Development 错误
*原文标题：Development Errors*

Definition of development errors in module J1939Nm
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| An API was called while the module was uninitialized | J1939NM_E_UNINIT | 0x01 |
| The Init API was called twice | J1939NM_E_REINIT | 0x02 |
| J1939Nm_Init was called with an invalid configuration pointer | J1939NM_E_INIT_FAILED | 0x03 |
| An API service was called with a NULL pointer | J1939NM_E_PARAM_POINTER | 0x10 |
| An API service was called with a wrong ID | J1939NM_E_INVALID_PDU_SDU_ID | 0x11 |
| An API service was called with wrong network handle | J1939NM_E_INVALID_NETWORK_ID | 0x12 |
| An API was called with an unsupported PGN | J1939NM_E_INVALID_PGN | 0x13 |
| An API was called with an illegal priority | J1939NM_E_INVALID_PRIO | 0x14 |
| An API was called with an illegal node address | J1939NM_E_INVALID_ADDRESS | 0x15 |
| An API was called with an illegal node ID | J1939NM_E_INVALID_NODE | 0x16 |

⌋

### 31. Runtime 错误
*原文标题：Runtime Errors*

Runtime errors have not yet been classified.

### 32. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 33. Extended Production 错误
*原文标题：Extended Production Errors*

Extended production errors are handled as events of the Diagnostic Event Manager. The event IDs are defined in the following tables, while the actual values are assigned externally by the configuration of the Diagnostic Event Manager, and are included in the J1939 Network Management module via Dem.h.

 The desired address could not be claimed.
  Upstream requirements: , , , , , ,
⌈
| Diagnostic Event (Error Name) | J1939NM_E_ADDRESS_LOST |
|---|---|
| Description | During start-up of the ECU, all J1939Nm nodes need to send an address claim to the bus and wait for acceptance of the claimed address. If another ECU claims the same address and has a higher priority, the ECU loses its address and stops communication. This is a critical problem, because J1939Nm was not specified for networks where this can happen. |
| Failed condition | When address claiming failed, because an AddressClaimed message with higher priority was received (see []), the J1939 Network Management module shall report the extended production error J1939NM_E_ADDRESS_LOST with event status DEM_EVENT_STATUS_PREFAILED to DEM. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. API 规范
*原文标题：API Specification*

### 35. API Parameter Checking

The J1939 Network Management module performs parameter checks for all called APIs. It reports the development error `J1939NM_E_INVALID_PDU_SDU_ID` when a check of a PDU/SDU ID fails, `J1939NM_E_INVALID_NETWORK_ID` when a check of a network handle fails, and `J1939NM_E_PARAM_POINTER` when a call provides a NULL pointer.

  Upstream requirements:
⌈
If development error detection is enabled via J1939NmDevErrorDetect, the J1939 Network Management module shall check PduIdType parameters (SDU/PDU IDs) of its API functions against the configured IDs, and shall report the development error `J1939NM_E_INVALID_PDU_SDU_ID` when an unknown ID is provided by the call.
⌋

  Upstream requirements:
⌈
If development error detection is enabled via J1939NmDevErrorDetect, the J1939 Network Management module shall check NetworkHandleType parameters (network handles) of its API functions against the referenced network handles of ComM, and shall report the development error `J1939NM_E_INVALID_NETWORK_ID` when an unknown handle is provided by the call.
⌋

`J1939NM_E_PARAM_POINTER` shall be reported as specified in  by .

### 36. Imported 类型
*原文标题：Imported Types*

In this section, all types used by the J1939 Network Management module are listed together with the defining module:

 Definition of imported datatypes of module J1939Nm
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Comtype | ComStack_Types.h | NetworkHandleType |
| ^ | ComStack_Types.h | PduIdType |
| ^ | ComStack_Types.h | PduInfoType |
| ^ | ComStack_Types.h | PduLengthType |
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| J1939Rm | Rte_J1939Rm_Type.h | J1939Rm_ExtIdInfoType |
| ^ | Rte_J1939Rm_Type.h | J1939Rm_ExtIdType |
| Nm | NmStack_types.h | Nm_ModeType |
| ^ | NmStack_types.h | Nm_StateType |
| Std | Std_Types.h | Std_ReturnType |

⌋

The types that are declared in `ComStack_Types`.h (Module Comtype) are defined in , the types declared in `Std_Types`.h (Module Std) are defined in , and the types declared in `NmStack_types`.h (Module Nm) are declared in .

### 37. 类型定义
*原文标题：Type Definitions*

### 38. J1939Nm_ConfigType

Definition of datatype `J1939Nm_ConfigType`
⌈
| Name | J1939Nm_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | This is the base type for the configuration of the J1939 Network Management module. |  |

A pointer to an instance of this structure will be used in the initialization of the J1939 Network Management module.

| The content of this structure is defined in chapter 10 Configuration specification. | < |  |
|---|---|---|
| Available via | J1939Nm.h | < |

⌋

### 39. 功能定义
*原文标题：Function Definitions*

This is a list of functions provided for upper layer modules.

### 40. J1939Nm_Init

Definition of API function `J1939Nm_Init`
  Upstream requirements:
⌈
| Service Name | J1939Nm_Init | < |
|---|---|---|
| Syntax | void J1939Nm_Init ( |  |

  const `J1939Nm_ConfigType`* configPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | configPtr | Pointer to selected configuration structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function initializes the J1939 Network Management module. | < |
| Available via | J1939Nm.h | < |

⌋

See  for details.

See  for parameter checks.

`J1939NM_E_INIT_FAILED` shall be reported as specified in  by .

### 41. J1939Nm_DeInit

Definition of API function `J1939Nm_DeInit`
  Upstream requirements:
⌈
| Service Name | J1939Nm_DeInit | < |
|---|---|---|
| Syntax | void J1939Nm_DeInit ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function resets the J1939 Network Management module to the uninitialized state. | < |
| Available via | J1939Nm.h | < |

⌋

See  for details.

### 42. J1939Nm_NetworkRequest

Definition of API function `J1939Nm_NetworkRequest`
  Upstream requirements:
⌈
| Service Name | J1939Nm_NetworkRequest | < |
|---|---|---|
| Syntax | Std_ReturnType J1939Nm_NetworkRequest ( |  |

  NetworkHandleType nmChannelHandle
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (but not for the same NM-Channel) | < |
| Parameters (in) | nmChannelHandle | Identification of the NM-channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: No error E_NOT_OK: Requesting of network has failed |
| Description | Request the network, since ECU needs to communicate on the bus. | < |
| Available via | J1939Nm.h | < |

⌋

See  for details.

See  for error handling and  for parameter checks.

### 43. J1939Nm_NetworkRelease

Definition of API function `J1939Nm_NetworkRelease`
  Upstream requirements:
⌈
| Service Name | J1939Nm_NetworkRelease | < |
|---|---|---|
| Syntax | Std_ReturnType J1939Nm_NetworkRelease ( |  |

  NetworkHandleType nmChannelHandle
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant (but not for the same NM-Channel) | < |
| Parameters (in) | nmChannelHandle | Identification of the NM-channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: No error E_NOT_OK: Releasing of network has failed |
| Description | Release the network, since ECU doesn't have to communicate on the bus. | < |
| Available via | J1939Nm.h | < |

⌋

See  for details.

See  for error handling and  for parameter checks.

### 44. J1939Nm_GetState

Definition of API function `J1939Nm_GetState`
⌈
| Service Name | J1939Nm_GetState | < |
|---|---|---|
| Syntax | Std_ReturnType J1939Nm_GetState ( |  |

  NetworkHandleType NetworkHandle,
  `Nm_StateType`* nmStatePtr,
  `Nm_ModeType`* nmModePtr
| ) | < |  |
|---|---|---|
| Service ID | 0x0d | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | NetworkHandle | Identification of the NM-channel |
| Parameters (inout) | None | < |
| Parameters (out) | nmStatePtr | Pointer where state of the network management shall be copied to. |
| ^ | nmModePtr | Pointer where the mode of the network management shall be copied to. |
| Return value | Std_ReturnType | E_OK: No error E_NOT_OK: Getting of NM state has failed |
| Description | Returns the state and the mode of the network management. | < |
| Available via | J1939Nm.h | < |

⌋

See  for error handling and  for parameter checks.

### 45. J1939Nm_GetBusOffDelay

Definition of API function `J1939Nm_GetBusOffDelay`
⌈
| Service Name | J1939Nm_GetBusOffDelay | < |
|---|---|---|
| Syntax | void J1939Nm_GetBusOffDelay ( |  |

  NetworkHandleType network,
  uint8* delayCyclesPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x10 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different networks | < |
| Parameters (in) | network | CAN network where a BusOff occurred. |
| Parameters (inout) | None | < |
| Parameters (out) | delayCyclesPtr | Number of CanSM base cycles to wait after a BusOff occurred. In case the returned value is CANSM_BUSOFF_CONFIGURED, use configured L1/L2 timing. |
| Return value | None | < |
| Description | This callout function returns the number of CanSM base cycles to wait after a BusOff occurred. | < |
| Available via | J1939Nm.h | < |

⌋

See  for error handling and  for parameter checks.

### 46. J1939Nm_PassiveStartUp

Definition of API function `J1939Nm_PassiveStartUp`
⌈
| Service Name | J1939Nm_PassiveStartUp | < |
|---|---|---|
| Syntax | Std_ReturnType J1939Nm_PassiveStartUp ( |  |

  NetworkHandleType nmChannelHandle
| ) | < |  |
|---|---|---|
| Service ID | 0x0f | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (but not for the same NM-Channel) | < |
| Parameters (in) | nmChannelHandle | Identification of the NM-channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: No error E_NOT_OK: Passive startup of network management has failed |
| Description | Passive startup of the NM. It triggers the transition from Bus-Sleep Mode to the Network Mode without requesting the network. | < |
| Available via | J1939Nm.h | < |

⌋

This API is just a dummy to satisfy NM Interface linkage. It shall always return E_NOT_OK.

See  for error handling and  for parameter checks.

### 其余 47 章（内容从略，见纯文本全文）

47. Callback 通知
48. J1939Nm_RxIndication
49. J1939Nm_TxConfirmation
50. J1939Nm_RequestIndication
51. Scheduled Functions
52. J1939Nm_MainFunction
53. Expected 接口
54. Mandatory 接口
55. Optional 接口
56. Configurable 接口
57. <User_AddressClaimedIndication>
58. 时序图
59. Transmission of AddressClaimed
60. Reception of AddressClaimed
61. Request for AddressClaimed
62. 配置规范
63. Containers and 配置 Parameters
64. J1939Nm
65. J1939NmGeneral
66. J1939NmConfigSet
67. J1939NmSharedAddressSpace
68. J1939NmChannel
69. J1939NmTxPdu
70. J1939NmRxPdu
71. J1939NmNodeSpecificDemEventParameterRefs
72. J1939NmNode
73. J1939NmExternalNode
74. NM 接口的配置
75. 附录
76. 不适用需求
77. Change History of AUTOSAR Traceable Items
78. Traceable Item History of this Document According to AUTOSAR Release R26-11
79. Added 规范 Items in R26-11
80. Changed 规范 Items in R26-11
81. Deleted 规范 Items in R26-11
82. Traceable Item History of this Document According to AUTOSAR Release R25-11
83. Added 规范 Items in R25-11
84. Changed 规范 Items in R25-11
85. Deleted 规范 Items in R25-11
86. Traceable Item History of this Document According to AUTOSAR Release R24-11
87. Added 规范 Items in R24-11
88. Changed 规范 Items in R24-11
89. Deleted 规范 Items in R24-11
90. Traceable Item History of this Document According to AUTOSAR Release R23-11
91. Added 规范 Items in R23-11
92. Changed 规范 Items in R23-11
93. Deleted 规范 Items in R23-11
