# Specification of Ethernet Interface (`EthernetInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 417 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_EthernetInterface_417\AUTOSAR_CP_SWS_EthernetInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_EthernetInterface_417\AUTOSAR_CP_SWS_EthernetInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_EthernetInterface_417\zzgen\CP_SWS_EthernetInterface.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Ethernet Interface.

In the AUTOSAR Layered Software Architecture , the Ethernet Interface belongs to the ECU Abstraction Layer, or more precisely, to the Communication Hardware Abstraction.

This indicates the main task of the Ethernet Interface:

Provide to upper layers a hardware independent interface to the Ethernet Communication System comprising multiple different wired or wireless Ethernet controllers and transceivers. This interface shall be uniform for all Ethernet controllers and transceivers. Thus, the upper layers (TCP/IP , EthSM , CDD) may access the underlying bus system in a uniform manner.

The Ethernet Interface does not directly access the Ethernet hardware (Ethernet Communication Controller and Ethernet Transceiver) but by means of one or more hardware-specific driver modules.

⌈
In order to access the Ethernet controller(s), the Ethernet Interface shall use one or multiple Ethernet Driver modules, which abstract the specific features and interfaces of the respective Ethernet controller(s).
⌋

⌈
In order to access the Ethernet transceiver(s), the Ethernet Interface shall use one or multiple Ethernet Transceiver Driver modules, which abstract the specific features and interfaces of the respective Ethernet transceiver(s).
⌋

⌈
In order to access the Ethernet switch(es), the Ethernet Interface shall use one or multiple Ethernet Switch Driver modules, which abstract the specific features and interfaces of the respective Ethernet switch(es).
⌋

⌈
Therefore, the Ethernet Interface executable code (however, not the configuration used during runtime) shall be completely independent of the Ethernet Communication Controller(s).
⌋

Note: The Ethernet Interface is specified in a way that allows for object code delivery of the code module, following the "one-fits-all" principle, i.e. the entire configuration of the Ethernet Interface can be carried out without modifying any source code. Thus, the configuration of the Ethernet Interface can be carried out largely without detailed knowledge of the underlying hardware.

## 模块依赖

This chapter lists the modules interacting with the Ethernet Interface module.

Modules that use Ethernet Interface module:

* Ethernet Communication Stack (TCP/IP Stack )
* Ethernet State Manager (EthSM)

Dependencies to other Modules:

* The Ethernet Interface module doesn't take care of configuring Ethernet Driver  but requires its preceding initialization and configuration.
* The Ethernet Interface module doesn't take care of configuring Ethernet Transceiver Driver  but requires its preceding initialization and configuration.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

Currently, chapter  Dependencies to other modules does not describe the versions of dependent modules. Thus, a version check will extend the chapter.

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Ethernet Interface.

In the AUTOSAR Layered Software Architecture , the Ethernet Interface belongs to the ECU Abstraction Layer, or more precisely, to the Communication Hardware Abstraction.

This indicates the main task of the Ethernet Interface:

Provide to upper layers a hardware independent interface to the Ethernet Communication System comprising multiple different wired or wireless Ethernet controllers and transceivers. This interface shall be uniform for all Ethernet controllers and transceivers. Thus, the upper layers (TCP/IP , EthSM , CDD) may access the underlying bus system in a uniform manner.

The Ethernet Interface does not directly access the Ethernet hardware (Ethernet Communication Controller and Ethernet Transceiver) but by means of one or more hardware-specific driver modules.

⌈
In order to access the Ethernet controller(s), the Ethernet Interface shall use one or multiple Ethernet Driver modules, which abstract the specific features and interfaces of the respective Ethernet controller(s).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Ethernet Interface module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| CBR | Channel Busy Ratio |
| CIT | Channel Idle Time |
| Eth | Ethernet Controller Driver (AUTOSAR BSW module) |
| EthIf | Ethernet Interface (AUTOSAR BSW module) |
| EthSM | Ethernet State Manager (AUTOSAR BSW module) |
| EthTrcv | Ethernet Transceiver Driver (AUTOSAR BSW module) |
| IP | Internet Protocol |
| MCG | Module Configuration Generator |
| MII | Media Independent Interface (standardized Interface provided by Ethernet controllers to access Ethernet transceivers) |
| RSSI | Received Signal Strength Indicator |
| TCP | Transmission Control Protocol |
| TCP/IP Stack | Ethernet communication stack |
| VLAN | Virtual Local Area Network |
| WEth | Wireless Ethernet Driver |
| WEthTrcv | Wireless Ethernet Transceiver Driver |
| OA TC10 | Open Alliance TC10 Specification |

### 4. 相关文档
*原文标题：Related documentation*

### 5. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Ethernet Interface.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Ethernet Interface.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

The Ethernet Interface is conceptually able to access:

* one or more Ethernet Driver
* one or more Ethernet Transceiver Driver
* one or more Ethernet Switch Driver

AUTOSAR supports for MACsec in hardware a hardware topology where the Ethernet controller has direct access to the destination hardware via one type of hardware management interface (e.g. MDIO). Thus, AUTOSAR supports MACsec in hardware only where the affected hardware is directly reachable by the Ethernet controller. Or in other words, AUTOSAR does not support a hardware topology where control commands to the destination hardware needs to be transferred across multiple management interfaces of a different type (e.g. MDIO to SPI and vs.). For example, if an Ethernet controller connects an Ethernet switch via SPI and the Ethernet switch connects external PHYs via MDIO, then the following constrains need to be respected:

* MACsec support performed by the Ethernet controller is supported
* MACsec support performed by the Ethernet switch port is supported
* MACsec support performed by the external PHY connected to the Ethernet switch is not supported

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The Ethernet BSW stack is intended to be used wherever high data rates are required but no hard real-time is required. Of course, it can also be used for less-demanding use cases, i.e. for low data rates.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This chapter lists the modules interacting with the Ethernet Interface module.

Modules that use Ethernet Interface module:

* Ethernet Communication Stack (TCP/IP Stack )
* Ethernet State Manager (EthSM)

Dependencies to other Modules:

* The Ethernet Interface module doesn't take care of configuring Ethernet Driver  but requires its preceding initialization and configuration.
* The Ethernet Interface module doesn't take care of configuring Ethernet Transceiver Driver  but requires its preceding initialization and configuration.

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Hardware-Accelerated Filtering Support |  |  |
| MACsec Protocol support |  |  |
| MACsec Key Agreement Protocol support |  |  |
| Configure which Ethernet ports use MACsec |  |  |
| Configuration of unprotected traffic (for Software-based MACsec) |  |  |
| MACsec Security Events |  |  |
| Support of integrity and confidentiality |  |  |
| MAC Security TAG |  |  |
| MACsec EtherType |  |  |
| Support of Extended Packet Number (XPN) |  |  |
| Secure Channel Identifier (SCI) |  |  |
| Secure Data |  |  |
| Integrity Check Value (ICV) |  |  |
| Protect function in software solution |  |  |
| Validation function in software solution |  |  |
| Support of MKA Packets |  |  |
| List of minimal supported cipher suites |  |  |
| Validation function for ICVs |  |  |
| Generation function for ICVs |  |  |
| Basic SW security events |  |  |
| The AUTOSAR SW Components shall provide information about their dependency from faults, signal qualities, driver demands |  |  |
| Optional functionality of a Basic- |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 功能规范
*原文标题：Functional specification*

### 13. Ethernet BSW stack

As part of the AUTOSAR Layered Software Architecture , the Ethernet BSW modules also form a layered software stack. Figure  depicts the basic structure of this Ethernet BSW stack. The Ethernet Interface module accesses several Ethernet controllers using the Ethernet Driver layer, which can be made up of several Ethernet Drivers modules.

### 14. Indexing scheme for Ethernet controller

In case CAN XL is used as physical medium, the configuration will contain an EthIfEthCanXLCtrlRef instead of an EthIfEthCtrlRef and an EthIfCanXLTrcvRef instead of an EthIfEthTrcvRef. In this case, APIs denoted as <EthDrv>_Xxx will be called as `CanXL_Xxx`, otherwise as `Eth_Xxx`, and likewise APIs denoted as <EthTrcv>_Yyy will be called as `CanXLTrcv_Yyy`, otherwise `EthTrcv_Yyy`.

Users of the Ethernet Interface identify Ethernet controller resources using an indexing scheme as depicted in Figure .

⌈
The Ethernet Interface is using an index (EthIfCtrlIdx) to abstract the access to VLANs from the underlying communication system compromised of Ethernet Controller and Ethernet Transceiver.

Therefore the Ethernet Interface shall implement a mapping from Ethernet Interface controllers (EthIfCtrlIdx) to respective hardware ressource controllers (EthCtrlId + EthTrcvId).
⌋

### 15. Indexing scheme for Ethernet switches

Since the EthIf is not concerned with the individual EthSwtPorts which belong to the individual EthSwtes there is no indexing scheme for EthSwtPorts required in the EthIf. Any BSW module which interacts with EthSwtPorts can directly refer to the ECU configuration of the EthSwtPort for the indexing.

⌈
The EthIf shall dispatch all accesses by the EthIfSwitchIdx index to the respective EthSwt driver module with the EthSwtIdx value
⌋

### 16. 初始化
*原文标题：Initialization*

The EthIf module is initialized via `EthIf_Init`. Except for `EthIf_Init` and any EthIf scheduled function (e.g. `EthIf_MainFunctionTx`), the API functions of the EthIf module may only be called after the module has been properly initialized.

 DET error reporting of `ETHIF_E_UNINIT`
  Upstream requirements: , ,
⌈
If development error reporting is enabled via EthIfDevErrorDetect, the EthIf module shall call `Det_ReportError` with the error code `ETHIF_E_UNINIT` when any API other than `EthIf_Init`, or any EthIf scheduled function (e.g. `EthIf_MainFunctionTx`) is called in uninitialized state.
⌋

### 17. Ethernet 接口 main 功能
*原文标题：Ethernet Interface main function*

⌈
The Ethernet Interface shall implement main functions to be used for frame transmission confirmation and frame reception in polling mode with a calling period configurable at system configuration time.
⌋

### 18. 需求
*原文标题：Requirements*

This chapter lists requirements that shall be fulfilled by Ethernet Interface module implementations.

The Ethernet Interface module environment comprises all modules which are calling interfaces of the Ethernet Interface module.

⌈
The Ethernet Interface module shall support pre-compile time, link time and post-build time configuration.
⌋

⌈
The header file EthIf.h shall include a software and specification version number.
⌋

⌈
The Ethernet Interface module shall perform a consistency check between code files and header files based on pre-process-checking the version numbers of related code files and header files.
⌋

DET API functions are specified in .

⌈
The Ethernet Interface module shall implement the API functions specified by the Ethernet Interface SWS as real C-code functions and shall not implement the API as macros for object code deliveries.
⌋

⌈
None of the Ethernet Interface module header files shall define global variables.
⌋

### 19. 配置描述
*原文标题：Configuration description*

⌈
The Ethernet Interface module shall provide an XML file that contains the data, which is required for the SW identification (it shall contain the vendor identification, module ID and software version information), configuration and integration process. This file should describe vendor specific configuration parameters as well as it should contain recommended configuration parameter values.
⌋

⌈
The MCG shall read the ECU configuration description of the Ethernet Driver and the Ethernet Interface module(s). While cluster related configuration parameters are contained in the Ethernet Interface module configuration description, Ethernet Driver related configuration data is contained in the Ethernet Driver module configuration description. The Ethernet Interface module specific configuration tool shall read both ECU module descriptions to derive the configuration data for all Ethernet Drivers mapped to the Ethernet Interface module.
⌋

⌈
The MCG shall ensure the consistency of the generated configuration data.
⌋

⌈
The configuration of the Ethernet Interface module shall be configured at ECU configuration time. None of the communication parameters shall be configured at runtime.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. VLAN 支持
*原文标题：VLAN support*

⌈
The Ethernet Interface shall support Virtual Local Area Networks (VLAN).
⌋

⌈
The Ethernet Interface shall encapsulate Virtual Local Area Networks (VLAN) into virtual controllers (Ethernet Interface controller) representing a dedicated VLAN.

All BSW modules above the Ethernet Interface shall interact based on those virtual controllers.

The Ethernet Driver and Transceiver deal only with real controllers and are not aware of the existence of virtual controllers.

Caveat: the virtual controller represents the untagged VLAN if no VLAN ID is set.
⌋

⌈
The Ethernet Interface shall use the buffers provided by the Ethernet Driver for VLAN support. If Can XL is used the Ethernet Interface shall use the buffers provided by the Can XL Driver.
⌋

### 21. Wake up 支持
*原文标题：Wake up support*

The Ethernet Interface supports wake up depending on the parameter EthIfWakeUpSupport.

Note: Enabling wake-up support in EthIf makes only sense if the underlying EthTrcv supports also wake up.

### 22. Ethernet Switch 管理支持
*原文标题：Ethernet Switch Management support*

Forward a call of `EthIf_GetRxMgmtObject` via `EthSwt_GetRxMgmtObject` to EthSwt
  Upstream requirements:
⌈
If `EthIf_GetRxMgmtObject` is called and the given PduId refer to an EthIfFrameRxPdu which is in state `PDU_IN_USE`, then EthIf shall forward the call to the Ethernet Switch via `EthSwt_GetRxMgmtObject` by considering the following points. Otherwise return with E_NOT_OK:

* set the CtrlIdx to the index of the EthIfController, where this EthIfFrameRxPdu is associated with
* set the DataPtr to PduInfo.SduDataPtr, which belongs to the given PduId in the context of this call
* set the MgmtObjectPtr to the given MgmtObjectPtr
⌋

 Forward a call of `EthIf_GetTxMgmtObject` via `EthSwt_GetTxMgmtObject` to EthSwt
  Upstream requirements:
⌈
If `EthIf_GetTxMgmtObject` is called and the given PduId refer to an EthIfFrameTxPdu which is in state `PDU_IN_USE`, then EthIf shall forward the call to the Ethernet Switch via `EthSwt_GetTxMgmtObject` by considering the following points. Otherwise return with E_NOT_OK:

* set the CtrlIdx to the index of the EthIfController, where this EthIfFrameRxPdu is associated with
* set the MgmtObjectPtr to the given MgmtObjectPtr
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 处理 of maintained Ethernet hardware
*原文标题：Handling of maintained Ethernet hardware*

The Ethernet Interface handle the maintained Ethernet hardware due to its configuration:

* EthIfPhysController (representing physical Ethernet controller)
* EthIfController (representing virtual Ethernet controller to support VLANs)
* EthIfTransceiver (representing PHYs)
* EthIfSwitch (representation of an Ethernet switch)
* EthIfSwitchPortGroups (representing groups of EthSwtPorts)

At least one EthIfPhysController should be present in the configuration to interact with the Ethernet driver. EthIfController represent the connection between the physical Ethernet controller and used Ethernet hardware to communicate on and Ethernet network. This could be either an EthIfTransceiver or an EthIfSwitch or an EthIfSwitchPortGroup. If an upper layer wants to control the communication on a particular Ethernet network, it calls the corresponding EthIfController via `EthIf_SetControllerMode`. The Ethernet Interface handle a communication request, such that it takes care to forward the request to the corresponding Ethernet hardware:

* EthIfTransceiver
* EthIfSwitch
* EthIfSwitchPortGroup with reference of type "control"

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. EthIfSwitchPortGroup 处理
*原文标题：EthIfSwitchPortGroup handling*

The Ethernet Interface supports the grouping of Ethernet switch ports (EthIfSwitchPortGroup). The request (either ACTIVE or DOWN) will be handled and rated by the Ethernet Interface. The Ethernet Interface has to decide either to put the EthifSwitchPotGroup to DOWN or ACTIVE state. ACTIVE-request for EthIfSwitchPortGroup will always overrule DOWN-request for EthIfSwitchPortGroups. If a DOWN-request for an EthIfSwitchPortGroup is ready for execution, the EthIf will check the EthSwtPorts which are referenced by the EthIfSwitchPortGroup and decide if the EthSwtPort can be set to DOWN state. If this is valid, the EthSwtPort is set to DOWN state after the configured switch off delay timer has expired.

Note: Further requirements for switching of EthIfSwitchPortGroups are available in chapter  and .

### 25. Switching of EthIfController and the corresponding Ethernet hardware

Switching of an EthIfController is triggered via a call of `EthIf_SetControllerMode`. Switching of an EthIfController implicitly include the switching of the corresponding Ethernet hardware (PHY, Ethernet switch, Ethernet switch port). The Ethernet Interface interact with the lower layer via asynchronous callback notification (e.g. `EthIf_TrcvModeIndication`). The chapter describe the interaction of the APIs used to switch the EthIfController and the corresponding Ethernet hardware.

Note:

# A call of the `EthIf_SetControllerMode` causes an asynchronous indication by calling `EthIf_CtrlModeIndication`, if the mode of the referenced EthIfPhysController has changed.
# The requirements assume that Ethernet Controller (EthIfPhysControllerIdx) and the referenced Ethernet hardware (e.g. PHY, Ethernet Switch) are controlled independent from each other. For example, if `ETH_MODE_ACTIVE` or `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST` has been requested and Ethernet Controller Driver of the affected Ethernet Controller (EthIfPhysControllerIdx) has NOT indicated `ETH_MODE_ACTIVE` yet, then those requests can be forwarded directly to the corresponding lower layers of the referenced Ethernet hardware.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Link 状态处理
*原文标题：Link state handling*

The Ethernet Interface needs to supervise the link state of the maintained Ethernet hardware entities (e.g. PHY or Ethernet switch port). The link state is used by the Ethernet Interface for several tasks, e.g. forward link state changes to the upper layer. The link state is polled by the Ethernet Interface in context of a scheduled function (e.g. `EthIf_MainFunctionState`) by calling the according API to retrieve the link state (e.g. <EthTrcv>_GetLinkState). Thereby the Ethernet Interface need to consider the configuration:

* If an EthIfController references an EthIfTransceiver, then the link state of the corresponding Ethernet hardware entity (PHY) is supervised
* If an EthIfController references an EthIfSwitch, then the link state of the corresponding Ethernet hardware entities (i.e. Ethernet switch ports) addressed with EthIfSwitch are supervised
* If an EthIfController references an EthIfSwitchPortGroup, then the link state of the corresponding Ethernet hardware entities (i.e. Ethernet switch ports) that belong to the according EthSwtConfig are supervised

The Ethernet Interface needs to store the current link state per supervised Ethernet hardware entity (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Link 状态 accumulation of EthIfSwitchPortGroup
*原文标题：Link state accumulation of EthIfSwitchPortGroup*

The Ethernet Interface needs to supervise the current link state of the EthIfSwitchPortGroups. The link state for an EthIfSwitchPortGroup is computed over all link states of the EthSwtPorts which are referenced by the EthIfSwitchPortGroup. The execution of the computation is called "link state accumulation" and the result is called "accumulated link state". The accumulated link state of the EthIfSwitchPortGroup represents the current link state of the EthIfSwitchPortGroup. The current accumulated link state of EthIfSwitchPortGroups is used to qualify the reporting towards the relevant upper layers. Please refer to the description at chapter  for more details. The link state accumulation uses the link state of each EthSwtPort. Thereby EthIf needs to distinguish between the link state of MACsec protected EthSwtPorts and unprotected EthSwtPorts.

 Derivation of the EthSwtPort link state used for the link state accumulation
  Status: DRAFT
  Upstream requirements: ,
⌈
EthIf shall consider the following rules for the link state derivation per EthSwtPort as prerequisite for the link state accumulation:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Additional Ethernet switch port 处理
*原文标题：Additional Ethernet switch port handling*

The following additional Ethernet switch port handling has been introduced to support a use case for a passive wake up of an ECU where all Ethernet switch ports of the corresponding Ethernet switches shall be switched on immediately. E.g. after a wakeup occurred. Afterwards it is checked if a PN request is received via NM frames within EthIfPortStartupActiveTime. If a PN request is received, then the corresponding EthIfSwitchPortGroups are requested with `ETH_MODE_ACTIVE` and corresponding Ethernet switch ports stay active. All Ethernet switch ports where the corresponding EthIfSwitchPortGroups are not requested (due to no according PN request received within EthIfPortStartupActiveTime) are switched off.

⌈
If `EthIf_StartAllPorts` has been called, then EthIf shall forward the call to the following functions in the given order to all EthSwtPorts of all configured EthIfSwitches:

# Call `EthSwt_SetSwitchPortMode` with `ETH_MODE_ACTIVE`, if the current mode is `ETH_MODE_DOWN`.
# Call `EthSwt_PortLinkStateRequest` with `ETHTRCV_LINK_STATE_ACTIVE`, if the current link state is `ETHTRCV_LINK_STATE_DOWN`

and start a timer with EthIfPortStartupActiveTime for all these ports.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Communication 控制
*原文标题：Communication control*

The Ethernet Interface has to provide a kind of communication control to support the so-called "silent communication". Silent communication is used for mode management to support a communication mode where the transmission path for a particular EthIfController is disabled, while the reception path is still enabled (see `COMM_SILENT_COMMUNICATION`). Disabling of the transmission path is exclusively introduced in the Ethernet Interface and has no impact on the used Ethernet hardware.

  Upstream requirements:
⌈
If `EthIf_SetControllerMode` is called for an EthIfController with `ETH_MODE_ACTIVE_TX_OFFLINE` and the latest accepted controller mode for this EthIfController is `ETH_MODE_ACTIVE` or `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST`, then `ETH_MODE_ACTIVE_TX_OFFLINE` shall be stored as current controller mode. Otherwise the requested controller mode shall be rejected and function shall return with E_NOT_OK.
⌋

Note: The transmission related API (see ) will only forward transmission requests, if the stored communication mode is `ETH_MODE_ACTIVE` or `ETH_MODE_ACTIVE_WITH_WAKEUP_REQUEST`.

### 30. Communication

The Ethernet Interface support a PDU-based communication approach to transfer data from the lower layer to the upper layer and vice versa. The EthIf module interchange PDUs with the upper layers (e.g. ) via the . This approach interchanges frame-specific information via specific PDUs. The APIs carries PduId and PduInfoPtr. PduId identifies the according PDU. PduInfoPtr contains SduDataPtr, which addresses the location of buffer where data is provided and SduDataLength which denotes the length of the provided data. Optionally, meta data can be used to transfer additional frame specific information (see )

PDUs are configured in PDU pools. Multiple PDU pools could be configured per EthIfFrameType. The PDU pools are organized in EthIfFrameRxPools and EthIfFrameTxPools. A EthIfFrameRxPool could contain multiple EthIfFrameRxPdus and a EthIfFrameTxPool multiple EthIfFrameTxPdus. A PDU pool could reference a specific EthIfController, i.e. the PDU pool is utilized for communication via this specific EthIfController. Such PDU pools are called "fixed" PDU pools. Fixed PDU pools are used per EthIfFrameType and EthIfController.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Reception

If EthIf is indicated via a call of `EthIf_RxIndication` to receive an Ethernet frame, then EthIf need to check if the frame type of the received Ethernet frame matches to a configured EthIfFrameType. If a match is identified and the referencing EthIfFrameConfig of the matching EthIfFrameType have an EthIfFrameRxPool configured, then EthIf has to search for an available EthIfFrameRxPdu. If a EthIfFrameRxPdu is available, then this EthIfFrameRxPdu is used to perform the receive processing.

The reception is indicated and forwarded to the destination upper layer. The destination upper layer receive an indication and perform a reception processing. Optionally, if the reception processing is finalized, the upper layer could explicitly indicate to release the EthIfFrameRxPdu with a call of `EthIf_ReleaseRxBuffer`. This behaviour is configurable and used to support hardware supported data transfer (e.g. via DMA) from the lower layer buffers to the upper layers destination receive buffer. As long as the asynchronous data transfer is not finalized, the EthCtrlConfigIngressQueue element is locked, and consequently also the used EthIfFrameRxPdu.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Transmission

If EthIf is requested via a call of `EthIf_Transmit` to transmit a PDU, then EthIf need to check the availability of EthIfFrameTxPdu addressed with the given TxPduId. For an available EthIfFrameTxPdu, EthIf transform the given PduInfoPtr together with the given meta data to a frame-based API call towards the Eth driver. Whereat, the EthIf module need to consider the data provision of the upper layer. The EthIf module support transmission requests with "indirect data provision" and with "direct data provision":

* Indirect data provision: If `EthIf_Transmit` is called with PduInfoPtr.SduDataPtr set to `NULL_PTR`, then the EthIf allocate a queue element at an egress queue with a call to <EthDrv>_ProvideTxBuffer, call the TriggerTransmit function from the upper layer via `LSduR_EthIfTriggerTransmit` and call afterwards <EthDrv>_Transmit to trigger the transmission of the data stored in the allocated egress queue element.
* direct data provision: If `EthIf_Transmit` is called with PduInfoPtr.SduDataPtr set to data pointer, then the EthIf prepare the data and forward the call directly to the Eth driver via a call of <EthDrv>_ImmediateTransmit

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Transmission confirmation

Status: DRAFT
  Upstream requirements: ,
⌈
If `EthIf_TxConfirmation` is called and the following conditions are true:

* the given BufIdx and CtrlIdx refer to a EthIfFrameTxPdu (given in previous call of <EthDrv>_ImmediateTransmit as TxHandleId or given with previous call of <EthDrv>_Transmit as BufIdx
* the affected EthIfFrameTxPdu is in state `PDU_IN_USE`

then the EthIf shall perform the following action, otherwise abort transmission processing and return:

* set the affected PDU of EthIfFrameTxPdu to state `PDU_AVAILABLE`
* call `LSduR_EthIfTxConfirmation` with TxPduId set to PDU-ID referenced EthIfFrameTxPdu
⌋

 Polling mode to trigger transmission confirmation
⌈
In each call of `EthIf_MainFunctionTx` the component shall call <EthDrv>_TxConfirmation for all Ethernet Controller Drivers.
⌋

Note: The Ethernet Interface expects that each Ethernet Controller Driver issues confirmations for all transmitted frames using the call-back function `EthIf_TxConfirmation`.

### 34. 状态处理 of PDUs
*原文标题：State handling of PDUs*

The EthIf module has to maintain the usage-state of PDUs from the according PDU-pool. Therefore PDUs have two states `PDU_IN_USE` or `PDU_AVAILABLE`.

Note: The definition of `PDU_IN_USE` or `PDU_AVAILABLE` represents only the functional behavior, but not the implementation, since the state of a PDU is kept locally and is not propagated to other modules. Therefore, no type definition for the PDU state is specified.

  Status: DRAFT
  Upstream requirements: ,
⌈
The EthIf module shall maintain for each PDU of all configured EthIfFrameRxPdus and EthIfFrameTxPdus two states: state `PDU_AVAILABLE` and state `PDU_IN_USE`
⌋

  Status: DRAFT
  Upstream requirements: ,
⌈
If the EthIf module is requested to transmit data or is indicated to receive data, or if transmission confirmation or release reception buffer is indicated, then the EthIf module shall check the state of the PDU according the given PDU-ID:

* If the PDU of the given PDU-ID is in state `PDU_AVAILABLE` and requested to be transmitted or indicated to be received, then the EthIf module shall set the state of this PDU to `PDU_IN_USE`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 251 章（内容从略，见纯文本全文）

35. Meta 数据处理
36. Meta 数据类型
37. Ingress queue 处理
38. Global Time 支持
39. Wireless Ethernet 支持
40. MACsec 支持
41. MACsec 支持 in 软件
42. Firewall 支持
43. Call forwarding to the switch
44. 安全事件
45. 错误分类
46. Development 错误
47. Runtime 错误
48. Production 错误
49. Extended Production 错误
50. API 规范
51. API Parameter Checking
52. Imported 类型
53. 类型定义
54. EthIf_ConfigType
55. EthIf_SwitchPortGroupIdxType
56. EthIf_MeasurementIdxType
57. EthIf_SignalQualityResultType
58. 功能定义
59. 驱动
60. EthIf_SetControllerMode
61. EthIf_GetControllerMode
62. EthIf_ReadMii
63. EthIf_WriteMii
64. EthIf_ReadMmd
65. EthIf_WriteMmd
66. EthIf_GetPhysAddr
67. EthIf_SetPhysAddr
68. EthIf_UpdatePhysAddrFilter
69. EthIf_GetPortMacAddr
70. EthIf_GetPortMacAddrVlan
71. EthIf_GetArlTable
72. EthIf_Transmit
73. EthIf_EthGetSpiStatus
74. EthIf_ReleaseRxBuffer
75. Firewall
76. EthIf_GetStreamStatistics
77. EthIf_SetStreamState
78. 通用
79. EthIf_Init
80. EthIf_GetCtrlIdxList
81. EthIf_GetVlanId
82. EthIf_GetAndResetMeasurementData
83. EthIf_VerifyConfig
84. EthIf_SetForwardingMode
85. EthIf_ClearTrcvSignalQuality
86. EthIf_ClearSwitchPortSignalQuality
87. MacSec
88. EthIf_SwitchMacSecUpdateSecY
89. EthIf_MacSecUpdateSecY
90. EthIf_SwitchMacSecInitRxSc
91. EthIf_MacSecInitRxSc
92. EthIf_SwitchMacSecResetRxSc
93. EthIf_MacSecResetRxSc
94. EthIf_SwitchMacSecAddTxSa
95. EthIf_MacSecAddTxSa
96. EthIf_SwitchMacSecUpdateTxSa
97. EthIf_MacSecUpdateTxSa
98. EthIf_SwitchMacSecDeleteTxSa
99. EthIf_MacSecDeleteTxSa
100. EthIf_SwitchMacSecAddRxSa
101. EthIf_MacSecAddRxSa
102. EthIf_SwitchMacSecUpdateRxSa
103. EthIf_MacSecUpdateRxSa
104. EthIf_SwitchMacSecDeleteRxSa
105. EthIf_MacSecDeleteRxSa
106. EthIf_SwitchMacSecGetTxSaNextPn
107. EthIf_MacSecGetTxSaNextPn
108. EthIf_SwitchMacSecGetMacSecStatistics
109. EthIf_MacSecGetMacSecStatistics
110. EthIf_SwitchMacSecOperational
111. EthIf_MacSecOperational
112. EthIf_SwitchMacSecSetControlledPortEnabled
113. EthIf_MacSecSetControlledPortEnabled
114. Switch 驱动
115. EthIf_GetSwitchPortMode
116. EthIf_GetSwitchPortWakeupReason
117. EthIf_StoreConfiguration
118. EthIf_ResetConfiguration
119. EthIf_SwitchPortGroupRequestMode
120. EthIf_StartAllPorts
121. EthIf_SetSwitchMgmtInfo
122. EthIf_GetRxMgmtObject
123. EthIf_GetTxMgmtObject
124. EthIf_SwtEthRxProcessFrame
125. EthIf_SwtEthRxFinishedIndication
126. EthIf_SwtEthTxPrepareFrame
127. EthIf_SwtEthTxAdaptBufferLength
128. EthIf_SwtEthTxProcessFrame
129. EthIf_SwtEthTxFinishedIndication
130. EthIf_GetSwitchPortSignalQuality
131. EthIf_SwitchPortGetLinkState
132. EthIf_SwitchPortGetBaudRate
133. EthIf_SwitchPortGetDuplexMode
134. EthIf_SwitchPortReadTrcvRegister
135. EthIf_SwitchPortWriteTrcvRegister
136. EthIf_SwitchPortReadMmd
137. EthIf_SwitchPortWriteMmd
138. EthIf_SwitchPortGetCounterValues
139. EthIf_SwitchPortGetRxStats
140. EthIf_SwitchPortGetTxStats
141. EthIf_SwitchPortGetTxErrorCounterValues
142. EthIf_SwitchPortGetMacLearningMode
143. EthIf_GetSwitchPortIdentifier
144. EthIf_GetSwitchIdentifier
145. EthIf_WritePortMirrorConfiguration
146. EthIf_ReadPortMirrorConfiguration
147. EthIf_DeletePortMirrorConfiguration
148. EthIf_GetPortMirrorState
149. EthIf_SetPortMirrorState
150. EthIf_SetPortTestMode
151. EthIf_SetPortLoopbackMode
152. EthIf_SetPortTxMode
153. EthIf_GetPortCableDiagnosticsResult
154. EthIf_RunPortCableDiagnostic
155. EthIf_SwitchGetCfgDataRaw
156. EthIf_SwitchGetCfgDataInfo
157. EthIf_SwitchPortGetMaxQueueBufferFillLevel
158. TimeSync
159. EthIf_SwitchEnableTimeStamping
160. EthIf_GetCurrentTimeTuple
161. EthIf_EnableEgressTimeStamp
162. EthIf_GetEgressTimeStamp
163. EthIf_SetPhcTime
164. EthIf_SetPhcCorrection
165. EthIf_GetPhcTime
166. EthIf_SetPpsSignalMode
167. 收发器驱动
168. EthIf_CheckWakeup
169. EthIf_GetPhyWakeupReason
170. EthIf_GetTrcvSignalQuality
171. EthIf_SetPhyTestMode
172. EthIf_SetPhyLoopbackMode
173. EthIf_SetPhyTxMode
174. EthIf_GetCableDiagnosticsResult
175. EthIf_GetPhyIdentifier
176. EthIf_GetTransceiverMode
177. EthIf_SetTransceiverMode
178. EthIf_StartAutoNegotiation
179. EthIf_TransceiverGetLinkState
180. EthIf_TransceiverGetBaudRate
181. EthIf_TransceiverGetDuplexMode
182. EthIf_RunCableDiagnostic
183. EthIf_TransceiverGetMacMethod
184. Wireless(CC2x)
185. EthIf_GetBufWRxParams
186. EthIf_GetBufWTxParams
187. EthIf_SetBufWTxParams
188. EthIf_SetRadioParams
189. EthIf_SetChanRxParams
190. EthIf_SetChanTxParams
191. EthIf_GetChanRxParams
192. Callback 通知
193. EthIf_RxIndication
194. EthIf_TxConfirmation
195. EthIf_CtrlModeIndication
196. EthIf_TrcvModeIndication
197. EthIf_SwitchPortModeIndication
198. EthIf_SleepIndication
199. EthIf_StreamStateIndication
200. EthIf_StreamStatisticsIndication
201. EthIf_SwitchMacSecGetMacSecStatisticsNotification
202. EthIf_MacSecGetMacSecStatisticsNotification
203. EthIf_SwitchMacSecUpdateSecYNotification
204. EthIf_MacSecUpdateSecYNotification
205. EthIf_SwitchMacSecAddTxSaNotification
206. EthIf_MacSecAddTxSaNotification
207. EthIf_SwitchMacSecAddRxSaNotification
208. EthIf_MacSecAddRxSaNotification
209. EthIf_EthMacSecUpdateSecYNotification
210. EthIf_EthMacSecAddRxSaNotification
211. EthIf_EthMacSecAddTxSaNotification
212. EthIf_EthMacSecGetMacSecStatisticsNotification
213. Scheduled functions
214. EthIf_MainFunctionRx
215. EthIf_MainFunctionRx_<IngressQueueProcessing ShortName>
216. EthIf_MainFunctionTx
217. EthIf_MainFunctionState
218. Expected 接口
219. Mandatory 接口
220. Optional 接口
221. Configurable 接口
222. 时序图
223. 初始化
224. Communication 初始化
225. Switch 初始化
226. 数据 Transmission
227. 数据 Reception
228. Link 状态 Change
229. Link 状态 Change without Port Groups
230. Link 状态 Change with Port Groups
231. Link 状态 Change with Port Groups and Partial 网络 Cluster
232. Switch 管理支持
233. 配置规范
234. How to read this chapter
235. Containers and 配置 parameters
236. EthIf
237. EthIfGeneral
238. EthIfConfigSet
239. EthIfController
240. EthIfFrameConfig
241. EthIfFrameRxPool
242. EthIfFrameRxPdu
243. EthIfFrameTxPool
244. EthIfFrameTxPdu
245. EthIfPhysController
246. EthIfPhysCtrlRxMainFunctionIngressQueueProcessing
247. EthIfClkUnit
248. EthIfSwitch
249. EthIfSwitchPortGroup
250. EthIfTransceiver
251. EthIfTrcvLinkStateChgConfig
252. EthIfSecurityEventRefs
253. 配置 constraints
254. 发布信息
255. 附录
256. 不适用需求
257. Change History
258. Change History of this document according to AUTOSAR Release R25-11
259. Added Constraints in R25-11
260. Changed Constraints in R25-11
261. Deleted Constraints in R25-11
262. Added 规范 Items in R25-11
263. Changed 规范 Items in R25-11
264. Deleted 规范 Items in R25-11
265. Change History of this document according to AUTOSAR Release R24-11
266. Added Constraints in R24-11
267. Changed Constraints in R24-11
268. Deleted Constraints in R24-11
269. Added 规范 Items in R24-11
270. Changed 规范 Items in R24-11
271. Deleted 规范 Items in R24-11
272. Change History of this document according to AUTOSAR Release R23-11
273. Added 规范 Items in R23-11
274. Changed 规范 Items in R23-11
275. Deleted 规范 Items in R23-11
276. Added Constraints in R23-11
277. Changed Constraints in R23-11
278. Deleted Constraints in R23-11
279. Change History of this document according to AUTOSAR Release R22-11
280. Added 规范 Items in R22-11
281. Changed 规范 Items in R22-11
282. Deleted 规范 Items in R22-11
283. Added Constraints in R22-11
284. Changed Constraints in R22-11
285. Deleted Constraints in R22-11
