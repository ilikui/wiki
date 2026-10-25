# Specification of Bus Mirroring (`BusMirroring`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 873 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_BusMirroring_873\AUTOSAR_CP_SWS_BusMirroring.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_BusMirroring_873\AUTOSAR_CP_SWS_BusMirroring.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_BusMirroring_873\zzgen\CP_SWS_BusMirroring.complete.txt`

## 文档简介

This specification describes the functionality, the API, and the configuration for the AUTOSAR Basic Software module Bus Mirroring.

The purpose of the Bus Mirroring module is the replication of the traffic and the state of internal buses to an external bus, such that a tester connected to that external bus can monitor internal buses for debugging purposes.

The monitored traffic can be configured by the tester using diagnostic commands to the intermediate ECUs (gateways, controllers of sub-buses). Using the diagnostics protocol ensures that mirroring cannot be enabled without passing security checks.

The terms Bus and Network are used as synonyms within this specification. In most AUTOSAR specifications, the term Network is preferred, and therefore it is used when referring to API parameters, to the configuration, or to the protocol layout. On the other hand, the module is called Bus Mirroring, and because of this the term Bus is used when the mirroring direction is considered, like in source bus or destination bus.

## 模块依赖

Besides the standard modules Default Error Tracer (DET), ECU State Manager (EcuM), and Basic Software Scheduler (SchM), which have interfaces to all BSW modules, the Bus Mirroring module has direct or indirect interfaces towards the CAN Interface (CanIf), the LIN Interface (LinIf), the FlexRay Interface (FrIf), the Socket Adaptor (SoAd), the PDU Router (PduR), the Synchronized Time-Base Manager (StbM), and the diagnostic application, which accesses either the service port API via the AUTOSAR Runtime Environment (RTE) or the Complex Drivers (CDD) API of the Bus Mirroring module.

The Bus Mirroring module includes header files of CanIf, LinIf, FrIf, PduR, DET, StbM, and the RTE.

## 章节详细内容

### 1. Known 限制 of the Current Document
*原文标题：Known Limitations of the Current Document*

Sequence diagrams and other diagrams have not yet been modeled in the BSW UML model, wherefore  is still empty.

### 2. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This specification describes the functionality, the API, and the configuration for the AUTOSAR Basic Software module Bus Mirroring.

The purpose of the Bus Mirroring module is the replication of the traffic and the state of internal buses to an external bus, such that a tester connected to that external bus can monitor internal buses for debugging purposes.

The monitored traffic can be configured by the tester using diagnostic commands to the intermediate ECUs (gateways, controllers of sub-buses). Using the diagnostics protocol ensures that mirroring cannot be enabled without passing security checks.

The terms Bus and Network are used as synonyms within this specification. In most AUTOSAR specifications, the term Network is preferred, and therefore it is used when referring to API parameters, to the configuration, or to the protocol layout. On the other hand, the module is called Bus Mirroring, and because of this the term Bus is used when the mirroring direction is considered, like in source bus or destination bus.

### 3. Acronyms, Abbreviations, and Terms

### 4. 定义 of Acronyms and abbreviations
*原文标题：Definition of Acronyms and abbreviations*

The table below contains all acronyms, abbreviations or initialisms that are component-specific and not available in the AUTOSAR glossary .

| Abbreviation | Description |
|---|---|
| CanIf | CAN Interface, abstracting from CAN drivers and transceivers, see |
| CDD | Complex Driver, any software that interfaces directly with AUTOSAR BSW modules, but is not defined by AUTOSAR, see  and |
| EcuM | ECU State Manager, mainly responsible for startup and shutdown of the ECU, see |
| FrIf | FlexRay Interface, abstracting from FlexRay drivers and transceivers, see |
| LinIf | LIN Interface, abstracting from LIN drivers and transceivers, see |
| LSduR | L-SDU Router, establishes communication between bus interface and other BSW modules, see |
| Mirror | Bus Mirroring module, this BSW module |
| PduR | PDU Router, establishes communication between BSW modules, see |
| SchM | Basic Software Schedule Manager, part of the RTE |
| SoAd | Socket Adaptor, serves as an interface for IP based communication, see |
| StbM | Synchronized Time-Base Manager, provides centralized synchronized time, see |

The table below contains all document-independant acronyms or abbreviations that are defined in the AUTOSAR glossary .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 定义 of Terms
*原文标题：Definition of Terms*

The table below contains all definitions of terms that are used in this document.

| Glossary Term | Explanation |
|---|---|
| Bus | A communication channel, synonymous to Network in this specification |
| Destination Bus | The Bus to which (serialized) PDUs are transmitted |
| Meta Data | Meta data transferred alongside a PDU, consisting of a set of meta data items |
| Meta Data Item | A single item of meta data of defined type and size |
| Network | A communication channel, synonymous to Bus in this specification |
| Network ID | A unique identifier for each Source Bus, by which it is represented on the Destination Bus |
| Source Bus | The Bus from which PDUs are received |

### 6. 相关文档
*原文标题：Related Documentation*

### 7. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 8. 相关规范
*原文标题：Related Specification*

AUTOSAR provides a General Specification on Basic Software Modules , which is also valid for the Bus Mirroring module.

Thus, the specification  shall be considered as additional and required specification for the Bus Mirroring module.

### 9. 约束与假设
*原文标题：Constraints and Assumptions*

### 10. 限制
*原文标题：Limitations*

The Bus Mirroring module cannot be used to influence the traffic on one of the buses configured as a source bus. To ensure this and to avoid loop-back of messages leading to bus overload, the generation tool shall ensure that no bus is connected to the Bus Mirroring module both as source bus and destination bus (see ).

The Bus Mirroring module is controlled by a diagnostic control application through the dedicated (service) API listed in . The control functionality is made accessible to a diagnostic tester by special diagnostic services, which are handled by the DCM and implemented by the diagnostic control application. The DCM provides the necessary security to exclude inadvertent activation of the Bus Mirroring. The Bus Mirroring module does not provide another control interface, and it does not receive control messages on the destination bus.

In general, the Bus Mirroring module does not support source buses that have a larger frame size or more additional information than the destination bus can carry, e.g. CAN XL to CAN FD, CAN FD to CAN, CAN to LIN, FlexRay to CAN or CAN FD, Ethernet to CAN, or Ethernet to FlexRay.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 适用的车型领域
*原文标题：Applicability to Car Domains*

The Bus Mirroring module can be used in all kinds of vehicles that feature external CAN and/or Ethernet connectors, e.g. a Diagnostic connector.

### 12. 对其他模块的依赖
*原文标题：Dependencies to Other Modules*

Besides the standard modules Default Error Tracer (DET), ECU State Manager (EcuM), and Basic Software Scheduler (SchM), which have interfaces to all BSW modules, the Bus Mirroring module has direct or indirect interfaces towards the CAN Interface (CanIf), the LIN Interface (LinIf), the FlexRay Interface (FrIf), the Socket Adaptor (SoAd), the PDU Router (PduR), the Synchronized Time-Base Manager (StbM), and the diagnostic application, which accesses either the service port API via the AUTOSAR Runtime Environment (RTE) or the Complex Drivers (CDD) API of the Bus Mirroring module.

The Bus Mirroring module includes header files of CanIf, LinIf, FrIf, PduR, DET, StbM, and the RTE.

### 13. 文件结构
*原文标题：File Structure*

This section explains the file structure of the Bus Mirroring module.

### 14. 代码文件结构
*原文标题：Code File Structure*

For details, refer to .

### 15. 头文件结构
*原文标题：Header File Structure*

Besides the files defined in , the Bus Mirroring module needs to include the files defined below.

  Upstream requirements:
⌈
The Bus Mirroring module shall include the header file CanIf.h if at least one MirrorSourceNetworkCan is configured.
⌋

  Upstream requirements:
⌈
The Bus Mirroring module shall include the header file LinIf.h if at least one MirrorSourceNetworkLin is configured.
⌋

  Upstream requirements:
⌈
The Bus Mirroring module shall include the header file FrIf.h if at least one MirrorSourceNetworkFlexRay is configured.
⌋

  Upstream requirements:
⌈
The Bus Mirroring module shall include the header file StbM.h if at least one MirrorDestNetworkFlexRay, MirrorDestNetworkCanXL, MirrorDestNetworkIp, or MirrorDestNetworkCdd is configured, or if at least one MirrorDestNetworkCanFD is configured where MirrorDestProtocolType is not set to `MIRROR_PT_NONE`.
⌋

### 16. 需求追踪
*原文标题：Requirements Tracing*

The following table references the requirements specified in  and  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| Basic SW module shall be able to shutdown |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |
| List possible error notifications |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| API handling in uninitialized state |  |  |
| A Main function of a un-initialized module shall return immediately |  |  |
| Classification of runtime errors |  |  |
| Modules called by generic modules shall satisfy all interfaces requested by the generic module |  |  |
| All Standardized Autosar Interfaces shall have unique requirement Id / number |  |  |
| Timing limits of main functions |  |  |
| Null pointer errors shall follow a naming rule |  |  |
| Invalid configuration set selection errors shall follow a naming rule |  |  |
| BSW Modules shall handle buffer alignments internally |  |  |
| Input parameters of scalar and enum types shall be passed as a value. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 功能规范
*原文标题：Functional Specification*

This chapter defines the behavior of the Bus Mirroring module. The API of the module is defined in , while the configuration is defined in .

### 18. 概述
*原文标题：Overview*

The Bus Mirroring module's task is the collection of frames from several source buses, which are then forwarded to a destination bus. The forwarding is strictly unidirectional to avoid message loops and to prevent intrusion scenarios.

  Upstream requirements:
⌈
The generation tool shall ensure that no ComMChannel is referenced both from a MirrorSourceNetwork and a MirrorDestNetwork.
⌋

The following figure shows how the Bus Mirroring is integrated in the AUTOSAR BSW communication stack:

The following mirroring scenarios are supported by the Bus Mirroring module:

* CAN and LIN \Rightarrow CAN (direct)
* CAN, CAN FD, and LIN \Rightarrow CAN FD (direct or serialized)
* CAN, CAN FD, LIN, and FlexRay \Rightarrow FlexRay (serialized)
* CAN, CAN FD, LIN, and FlexRay \Rightarrow CAN XL (serialized)
* CAN, CAN FD, LIN, and FlexRay \Rightarrow IP (serialized)
* CAN, CAN FD, LIN, and FlexRay \Rightarrow Proprietary (CDD) (serialized)

To avoid overloading the destination bus, the messages received on each source bus are filtered.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 模块处理
*原文标题：Module Handling*

This section contains description of auxiliary functionality of the Bus Mirroring module.

### 20. 初始化
*原文标题：Initialization*

The Bus Mirroring module is initialized via `Mirror_Init`, and de-initialized via `Mirror_DeInit`. Except for `Mirror_Init`, the API functions of the Bus Mirroring module may only be called after the module has been properly initialized.

  Upstream requirements: ,
⌈
A call to `Mirror_Init` initializes all internal variables and sets the Bus Mirroring module to the initialized state.
⌋

  Upstream requirements: ,
⌈
A call to `Mirror_DeInit` sets the Bus Mirroring module back to the uninitialized state.
⌋

  Upstream requirements: , ,
⌈
If development error reporting is enabled via MirrorDevErrorDetect, the Bus Mirroring module shall call `Det_ReportError` with the error code `MIRROR_E_UNINIT` when any API other than `Mirror_Init` is called in uninitialized state.
⌋

  Upstream requirements: ,
⌈
When `Mirror_Init` is called in initialized state, the Bus Mirroring module shall not re-initialize its internal variables. It shall instead call `Det_ReportError` with the error code `MIRROR_E_REINIT` if development error reporting is enabled (see MirrorDevErrorDetect).
⌋

### 21. 时序 Related Functionality
*原文标题：Timing Related Functionality*

To be able to measure times, the Bus Mirroring module is triggered cyclically via the `Mirror_MainFunction`.

  Upstream requirements:
⌈
The Bus Mirroring module shall use the `Mirror_MainFunction` for timing related purposes.
⌋

### 22. Selection of Active Source Buses

Upstream requirements:
⌈
Upon initialization, the Bus Mirroring module shall be inactive. No source bus is enabled.
⌋

To start the Bus Mirroring module, one of the configured source buses (see MirrorSourceNetwork) has to be activated. This will start collection of frames and status information from this source bus.

  Upstream requirements:
⌈
When a source bus is enabled using `Mirror_StartSourceNetwork`, frame and status acquisition from that bus shall be started, and the state of the source bus shall be reset such that it is reported directly after it has been updated for the first time.
⌋

  Upstream requirements:
⌈
When a source bus is disabled using `Mirror_StopSourceNetwork`, frame and status acquisition from that bus shall be stopped. Already collected frames shall still be transmitted to the destination bus.
⌋

To stop the mirroring, the application may call `Mirror_Offline` at any time.

  Upstream requirements:
⌈
When `Mirror_Offline` is called, all source buses shall be deactivated, the destination bus shall be reset to the MirrorInitialDestNetworkRef, all statically configured filters shall be disabled, and all other filters shall be removed.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Switching the Destination Bus

Upstream requirements:
⌈
Upon initialization, the destination bus (MirrorDestNetwork) referenced by MirrorInitialDestNetworkRef is selected.
⌋

Destination frames and status information will not be sent before the mirroring is started (see ).

  Upstream requirements:
⌈
When the destination bus is changed using `Mirror_SwitchDestNetwork`, all source buses shall be disabled, all statically configured filters shall be disabled, and all other filters shall be removed. Mirrored frames that are still waiting for transmission shall be discarded.
⌋

This ensures that the selection of information sent to a destination bus has to be chosen specifically for that bus type. Otherwise, switching to a different destination bus could easily overload that bus, especially if it is another internal bus.

The destination bus is reset when the mirroring is stopped (see ).

### 24. Controlling Frame Filters

Frame filters can be configured statically (see MirrorSourceCanFilter, MirrorSourceLinFilter, and MirrorSourceFlexRayFilter) or added dynamically at run-time separately for each source bus.

  Upstream requirements:
⌈
Upon initialization, all statically configured filters of the Bus Mirroring module are disabled, and no dynamic filters are available.
⌋

Statically configured filters can be explicitly activated and deactivated using `Mirror_SetStaticFilterState`. Dynamic filters can be added at run-time, using one of the bus specific `Mirror_Add`...Filter services (e.g. `Mirror_AddCanMaskFilter`), and removed again by calling `Mirror_RemoveFilter` with the filter ID returned by the `Mirror_Add`...Filter service. Filters are also deactivated/removed when mirroring is stopped (see ) or when the destination bus is changed (see ).

  Upstream requirements:
⌈
While a filter is active (statically configured and activated by `Mirror_SetStaticFilterState` or dynamically added using one of the bus specific `Mirror_Add`...Filter services), all frames from the corresponding source bus that match the filter shall be mirrored.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Access to Source Buses

The Bus Mirroring module supports CAN, CAN FD, LIN, and FlexRay as source buses. To acquire frames and state information of these buses, the Bus Mirroring module interacts with the corresponding bus interface modules. Reported frames are then filtered before they are mirrored to the destination bus.

### 26. Access to CAN and CAN FD

Throughout this section, the term CAN bus includes CAN FD buses. A CAN FD bus can transport both classic CAN and CAN FD frames. The Bus Mirroring module accesses the CAN bus through the CAN Interface module (CanIf). After the Bus Mirroring module starts the mirroring of a CAN bus, the CAN Interface module reports received and transmitted CAN and CAN FD frames to the Bus Mirroring module. The CAN bus state is polled cyclically from the `Mirror_MainFunction`.

### 27. CAN Source Bus Activation

After initialization, the CAN Interface module does not report any frames to the Bus Mirroring module.

  Upstream requirements:
⌈
When `Mirror_StartSourceNetwork` is called to start a CAN source bus, the Bus Mirroring module shall call `CanIf_EnableBusMirroring` with MirroringActive set to TRUE to start reporting of received and transmitted CAN frames from the corresponding CAN controller.
⌋

`Mirror_StartSourceNetwork` receives a ComMChannelId as network, while `CanIf_EnableBusMirroring` expects a CanIfCtrlId as ControllerId. The translation of the one to the other can be determined at generation time by following the references from the ComMChannelId to the CanIfCtrlId through the ECU configuration.

  Upstream requirements:
⌈
When `Mirror_StopSourceNetwork` is called to stop a CAN source bus, the Bus Mirroring module shall call `CanIf_EnableBusMirroring` with MirroringActive set to FALSE to stop reporting of received and transmitted CAN frames from the corresponding CAN controller.
⌋

### 28. CAN Frame Acquisition

The CAN Interface module reports both received and transmitted CAN (FD) frames with a call to `Mirror_ReportCanFrame`. Received frames are reported from the reception interrupt or task, while transmitted frames are reported from the transmission confirmation interrupt or task.

For each reported CAN (FD) frame, the CAN Interface module provides information about the receiving CAN controller, about the CAN ID, the CAN ID type (extended or standard), and the CAN frame type (CAN FD or CAN 2.0), and the length and the actual payload of the frame.

  Upstream requirements: ,
⌈
When `Mirror_ReportCanFrame` is called to report a received or transmitted CAN frame, the Bus Mirroring module shall match the canId containing the actual CAN ID, the ID type, and the frame type against all active statically configured and dynamically added filters of the corresponding source bus. If the CAN frame matches at least one filter, it is accepted by the Bus Mirroring module.
⌋

When mirroring to a (serialized) CAN FD, CAN XL, FlexRay, an IP, or a proprietary destination bus, the source bus is identified by a network ID, but `Mirror_ReportCanFrame` reports the controllerId.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. CAN Frame Filters

Upstream requirements:
⌈
A CAN mask filter statically configured as MirrorSourceCanFilterMask matches the reported canId, if this canId masked by the MirrorSourceCanFilterCanIdMask equals the MirrorSourceCanFilterCanIdCode.
⌋

  Upstream requirements:
⌈
A CAN mask filter dynamically added by a call to `Mirror_AddCanMaskFilter` matches the reported canId, if this canId masked by the mask equals the id.
⌋

  Upstream requirements:
⌈
A CAN range filter statically configured as MirrorSourceCanFilterRange matches the reported canId, if the value of this canId is greater than or equal to the MirrorSourceCanFilterLower and smaller than or equal to the MirrorSourceCanFilterUpper.
⌋

  Upstream requirements:
⌈
A CAN range filter dynamically added by a call to `Mirror_AddCanRangeFilter` matches the reported canId, if the value of this canId is greater than or equal to the lowerId and smaller than or equal to the upperId.
⌋

### 30. CAN Status Acquisition

Upstream requirements: ,
⌈
The Bus Mirroring module shall poll the status of each active CAN source bus by cyclically calling `CanIf_GetControllerMode` and `CanIf_GetTrcvMode` from the `Mirror_MainFunction`. If the returned ControllerModePtr is `CAN_CS_STARTED` and the returned TransceiverModePtr is `CANTRCV_TRCVMODE_NORMAL`, the reported CAN source bus state shall be set to online, otherwise to offline. If the bus is online, the Bus Mirroring module shall call `CanIf_GetControllerErrorState`, and if the returned ErrorStatePtr is `CAN_ERRORSTATE_PASSIVE` or `CAN_ERRORSTATE_BUSOFF`, the reported CAN source bus state shall be set to error passive or bus-off, respectively. Additionally, if the bus is online, the Bus Mirroring module shall also call `CanIf_GetControllerTxErrorCounter`, and add the returned TxErrorCounterPtr to the reported CAN source bus state.
⌋

The APIs `CanIf_GetControllerMode` and `CanIf_GetControllerErrorState` expect a ControllerId, and `CanIf_GetTrcvMode` expects a TransceiverId, but a network ID is required to report the status to the destination bus.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Access to LIN

The Bus Mirroring module accesses the LIN bus through the LIN Interface module (LinIf). After the Bus Mirroring module starts the mirroring of a LIN bus, the LIN Interface module reports received and transmitted LIN frames to the Bus Mirroring module. The LIN bus state is partially reported together with the LIN frames, and partially polled cyclically from the `Mirror_MainFunction`.

### 32. LIN Source Bus Activation

After initialization, the LIN Interface module does not report any frames to the Bus Mirroring module.

  Upstream requirements:
⌈
When `Mirror_StartSourceNetwork` is called to start a LIN source bus, the Bus Mirroring module shall call `LinIf_EnableBusMirroring` with MirroringActive set to TRUE to start reporting of received and transmitted LIN frames from that bus.
⌋

  Upstream requirements:
⌈
When `Mirror_StopSourceNetwork` is called to stop a LIN source bus, the Bus Mirroring module shall call `LinIf_EnableBusMirroring` with MirroringActive set to FALSE to stop reporting of received and transmitted LIN frames from that bus.
⌋

### 33. LIN Frame Acquisition

The LIN Interface module reports both received and transmitted LIN frames with a call to `Mirror_ReportLinFrame`. Received and transmitted frames are reported from the LIN schedule processing after the corresponding status check has been executed.

For each reported LIN frame, the LIN Interface module provides information about the source bus, about the protected ID (PID), the length, and the actual payload of the frame, and about the reception or transmission status.

  Upstream requirements: ,
⌈
When `Mirror_ReportLinFrame` is called to report a received or transmitted LIN frame, the Bus Mirroring module shall extract the frame ID from the reported pid and match it against all active statically configured and dynamically added filters of the corresponding source bus. If the LIN frame matches at least one filter, it is accepted by the Bus Mirroring module.
⌋

The frame ID of a LIN frame is calculated from the PID by removing the two most significant bits.

### 34. LIN Frame Filters

Upstream requirements:
⌈
A LIN mask filter statically configured as MirrorSourceLinFilterMask matches the reported frame ID, if this ID masked by the MirrorSourceLinFilterLinIdMask equals the MirrorSourceLinFilterLinIdCode.
⌋

  Upstream requirements:
⌈
A LIN mask filter dynamically added by a call to `Mirror_AddLinMaskFilter` matches the reported frame ID, if this ID masked by the mask equals the id.
⌋

  Upstream requirements:
⌈
A LIN range filter statically configured as MirrorSourceLinFilterRange matches the reported frame ID, if the value of this ID is greater than or equal to the MirrorSourceLinFilterLower and smaller than or equal to the MirrorSourceLinFilterUpper.
⌋

  Upstream requirements:
⌈
A LIN range filter dynamically added by a call to `Mirror_AddLinRangeFilter` matches the reported frame ID, if the value of this ID is greater than or equal to the lowerId and smaller than or equal to the upperId.
⌋

### 35. LIN Status Acquisition

Upstream requirements: ,
⌈
The Bus Mirroring module shall evaluate the status reported by `Mirror_ReportLinFrame`. If it is `LIN_TX_HEADER_ERROR`, `LIN_TX_ERROR`, `LIN_RX_ERROR`, or `LIN_RX_NO_RESPONSE`, the reported LIN source bus state shall be set to header transmission error, transmission error, reception error, or no response.
⌋

  Upstream requirements: ,
⌈
If a LIN transceiver is connected to the LIN source bus, the Bus Mirroring module shall poll the status of each active LIN source bus by cyclically calling `LinIf_GetTrcvMode` from the `Mirror_MainFunction`. If the returned TransceiverModePtr is `LINTRCV_TRCV_MODE_NORMAL`, or no LIN transceiver is connected, the reported LIN source bus state shall be set to online, otherwise to offline.
⌋

### 36. Access to FlexRay

The Bus Mirroring module accesses the FlexRay bus through the FlexRay Interface module (FrIf). After the Bus Mirroring module starts the mirroring of a FlexRay bus, the FlexRay Interface module reports received and transmitted FlexRay frames to the Bus Mirroring module. The FlexRay bus state is polled cyclically from the `Mirror_MainFunction`. A FlexRay source bus corresponds to a FlexRay cluster, which can be connected to several controllers.

### 37. FlexRay Source Bus Activation

After initialization, the FlexRay Interface module does not report any frames to the Bus Mirroring module.

  Upstream requirements:
⌈
When `Mirror_StartSourceNetwork` is called to start a FlexRay source bus, the Bus Mirroring module shall call `FrIf_EnableBusMirroring` with `FrIf_MirroringActive` set to TRUE to start reporting of received and transmitted FlexRay frames from the corresponding FlexRay cluster.
⌋

`Mirror_StartSourceNetwork` receives a ComMChannelId as network, while `FrIf_EnableBusMirroring` expects a FrIfClstIdx as `FrIf_ClstIdx`. The translation of the one to the other can be determined at generation time by following the references from the ComMChannelId to the the related FrIfClstIdx through the ECU configuration.

  Upstream requirements:
⌈
When `Mirror_StopSourceNetwork` is called to stop a FlexRay source bus, the Bus Mirroring module shall call `FrIf_EnableBusMirroring` with `FrIf_MirroringActive` set to FALSE to stop reporting of received and transmitted FlexRay frames from the corresponding FlexRay cluster.
⌋

### 38. FlexRay Frame Acquisition

The FlexRay Interface module reports both received and transmitted FlexRay frames with a call to `Mirror_ReportFlexRayFrame`. Received and transmitted frames are reported from the job list execution function or the transmit function of the FlexRay Interface.

For each reported FlexRay frame, the FlexRay Interface module provides information about the receiving FlexRay controller and about the slot ID and cycle, the length and the actual payload of the frame, and information about transmission conflicts.

  Upstream requirements: ,
⌈
When `Mirror_ReportFlexRayFrame` is called to report a received or transmitted FlexRay frame (txConflict is reported as FALSE), the Bus Mirroring module shall match the slotId and cycle against all active statically configured and dynamically added filters of the corresponding source bus. If the FlexRay frame matches at least one filter, it is accepted by the Bus Mirroring module.
⌋

On the destination bus, the source bus is identified by a network ID, but `Mirror_ReportFlexRayFrame` reports the controllerId.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. FlexRay Frame Filters

Upstream requirements:
⌈
A FlexRay filter statically configured as MirrorSourceFlexRayFilter matches the reported slotId and cycle if the slotId is greater than or equal to the MirrorSourceFlexRayFilterLowerSlot and smaller than or equal to the MirrorSourceFlexRayFilterUpperSlot and if the cycle modulo MirrorSourceFlexRayFilterCycleRepetition is greater than or equal to the MirrorSourceFlexRayFilterLowerBaseCycle and smaller than or equal to the MirrorSourceFlexRayFilterUpperBaseCycle.
⌋

  Upstream requirements:
⌈
A FlexRay filter dynamically added by a call to `Mirror_AddFlexRayFilter` matches the reported slotId and cycle if the slotId is greater than or equal to the lowerSlotId and smaller than or equal to the upperSlotId and if the cycle modulo cycleRepetition is greater than or equal to the lowerBaseCycle and smaller than or equal to the upperBaseCycle.
⌋

### 40. FlexRay Status Acquisition

Upstream requirements: ,
⌈
When `Mirror_ReportFlexRayFrame` is called to report a transmission conflict (txConflict is reported as TRUE), the Bus Mirroring module shall match the slotId and cycle against all active statically configured and dynamically added filters. If it matches at least one filter, the reported FlexRay source bus state for that frame shall be set to transmission conflict.
⌋

The callback `Mirror_ReportFlexRayFrame` reports a controllerId and the API `FrIf_GetPOCStatus` expects a `FrIf_CtrlIdx`, but a network ID is required to report the status to the destination bus. The translation of the one to the other can be determined at generation time by following the references from the FrIfCtrlIdx to the MirrorNetworkId through the ECU configuration via MirrorComMNetworkHandleRef.

  Upstream requirements: ,
⌈
When `Mirror_ReportFlexRayChannelStatus` is called to report the FlexRay channel state, the Bus Mirroring module shall compare the reported states with the previously reported states.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 187 章（内容从略，见纯文本全文）

41. Serialized Mirroring
42. 处理 of Destination Frames
43. Creation
44. Queueing
45. Transmission
46. Mirroring 协议
47. Header Layout
48. ProtocolVersion
49. SequenceNumber
50. HeaderTimestamp
51. DataLength
52. 数据 Item Layout
53. Timestamp
54. NetworkStateAvailable
55. FrameIDAvailable
56. PayloadAvailable
57. NetworkType
58. NetworkID
59. NetworkState
60. NetworkStateCAN
61. NetworkStateLIN
62. NetworkStateFlexRay
63. FrameID
64. FrameIDCAN
65. FrameIDLIN
66. FrameIDFlexRay
67. PayloadLength
68. Payload
69. Direct Mirroring
70. 处理 of Source Frames
71. ID 映射
72. ID 映射 on CAN
73. ID 映射 on LIN
74. Queuing
75. Transmission
76. Creation of Status Frames
77. Status 协议
78. Status Header Layout
79. SHProtocolVersion
80. Status Item Layout
81. SINetworkStateAvailable
82. SIFrameIDAvailable
83. SINetworkType
84. SINetworkID
85. SINetworkState
86. SIFrameID
87. 错误分类
88. Development 错误
89. Runtime 错误
90. Production 错误
91. Extended Production 错误
92. API 规范
93. API Parameter Checking
94. Imported 类型
95. 类型定义
96. Mirror_ConfigType
97. MIRROR_INVALID_NETWORK
98. 功能定义
99. Generic Functions
100. Mirror_Init
101. Mirror_DeInit
102. Filter 处理
103. Mirror_GetStaticFilterState
104. Mirror_SetStaticFilterState
105. Mirror_AddCanRangeFilter
106. Mirror_AddCanMaskFilter
107. Mirror_AddLinRangeFilter
108. Mirror_AddLinMaskFilter
109. Mirror_AddFlexRayFilter
110. Mirror_RemoveFilter
111. 状态处理
112. Mirror_IsMirrorActive
113. Mirror_Offline
114. Mirror_GetDestNetwork
115. Mirror_SwitchDestNetwork
116. Mirror_IsSourceNetworkStarted
117. Mirror_StartSourceNetwork
118. Mirror_StopSourceNetwork
119. 支持 Functions
120. Mirror_GetNetworkType
121. Mirror_GetNetworkId
122. Mirror_GetNetworkHandle
123. Callback 通知
124. Mirror_ReportCanFrame
125. Mirror_ReportLinFrame
126. Mirror_ReportFlexRayFrame
127. Mirror_ReportFlexRayChannelStatus
128. Mirror_TxConfirmation
129. Mirror_TriggerTransmit
130. Scheduled Functions
131. Mirror_MainFunction
132. Expected 接口
133. Mandatory 接口
134. Optional 接口
135. 服务接口
136. Implementation 数据类型
137. Mirror_NetworkType
138. Client-Server 接口
139. MirrorControl
140. Provided Ports
141. MirrorControl
142. 时序图
143. 配置规范
144. Containers and 配置 Parameters
145. Mirror
146. MirrorGeneral
147. MirrorMainFunction
148. MirrorConfigSet
149. MirrorSourceNetwork
150. MirrorSourceNetworkCan
151. MirrorSourceNetworkCanFD
152. MirrorSourceCanFilter
153. MirrorSourceCanFilterRange
154. MirrorSourceCanFilterMask
155. MirrorSourceCanSingleIdMapping
156. MirrorSourceCanMaskBasedIdMapping
157. MirrorSourceNetworkLin
158. MirrorSourceLinFilter
159. MirrorSourceLinFilterRange
160. MirrorSourceLinFilterMask
161. MirrorSourceLinToCanIdMapping
162. MirrorSourceNetworkFlexRay
163. MirrorSourceFlexRayFilter
164. MirrorDestNetwork
165. MirrorDestNetworkCan
166. MirrorDestPdu
167. MirrorDestNetworkCanFD
168. MirrorDestNetworkCanXL
169. MirrorDestNetworkFlexRay
170. MirrorDestPduFlexRay
171. MirrorDestNetworkIp
172. MirrorDestNetworkCdd
173. 配置 Constraints
174. CAN / CAN FD Destination Bus
175. FlexRay Destination Bus
176. Mirroring of Serialized Frames
177. 附录
178. 不适用需求
179. Change History of AUTOSAR Traceable Items
180. Traceable Item History of this Document According to AUTOSAR Release R26-11
181. Added 规范 Items in R26-11
182. Changed 规范 Items in R26-11
183. Deleted 规范 Items in R26-11
184. Added Constraints in R26-11
185. Changed Constraints in R26-11
186. Deleted Constraints in R26-11
187. Traceable Item History of this Document According to AUTOSAR Release R25-11
188. Added 规范 Items in R25-11
189. Changed 规范 Items in R25-11
190. Deleted 规范 Items in R25-11
191. Added Constraints in R25-11
192. Changed Constraints in R25-11
193. Deleted Constraints in R25-11
194. Traceable Item History of this Document According to AUTOSAR Release R24-11
195. Added 规范 Items in R24-11
196. Changed 规范 Items in R24-11
197. Deleted 规范 Items in R24-11
198. Added Constraints in R24-11
199. Changed Constraints in R24-11
200. Deleted Constraints in R24-11
201. Traceable Item History of this Document According to AUTOSAR Release R23-11
202. Added 规范 Items in R23-11
203. Changed 规范 Items in R23-11
204. Deleted 规范 Items in R23-11
205. Added Constraints in R23-11
206. Changed Constraints in R23-11
207. Deleted Constraints in R23-11
208. Traceable Item History of this Document According to AUTOSAR Release R22-11
209. Added 规范 Items in R22-11
210. Changed 规范 Items in R22-11
211. Deleted 规范 Items in R22-11
212. Traceable Item History of this Document According to AUTOSAR Release R21-11
213. Added 规范 Items in R21-11
214. Changed 规范 Items in R21-11
215. Deleted 规范 Items in R21-11
216. Traceable Item History of this Document According to AUTOSAR Release R20-11
217. Added 规范 Items in R20-11
218. Changed 规范 Items in R20-11
219. Deleted 规范 Items in R20-11
220. Traceable Item History of this Document According to AUTOSAR Release R19-11
221. Added 规范 Items in R19-11
222. Changed 规范 Items in R19-11
223. Deleted 规范 Items in R19-11
224. Traceable Item History of this Document According to AUTOSAR Release 4.4.0
225. Added 规范 Items in 4.4.0
226. Changed 规范 Items in 4.4.0
227. Deleted 规范 Items in 4.4.0
