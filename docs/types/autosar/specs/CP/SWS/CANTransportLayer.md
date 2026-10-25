# Specification of CAN Transport Layer (`CANTransportLayer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 014 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CANTransportLayer_014\AUTOSAR_CP_SWS_CANTransportLayer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CANTransportLayer_014\AUTOSAR_CP_SWS_CANTransportLayer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CANTransportLayer_014\zzgen\CP_SWS_CANTransportLayer.complete.txt`

## 文档简介

This specification defines the functionality, API and the configuration of the AUTOSAR Basic Software module CAN Transport Layer (CanTp).

CanTp is the module between the PDU Router and the L-SDU Router module (see Figure ). The main purpose of the CAN TP module is to segment and reassemble CAN I-PDUs longer than 8 bytes or longer than 64 bytes in case of CAN FD.

The PDU Router deploys AUTOSAR COM and DCM I-PDUs onto different communication protocols. The routing through a network system type (e.g. CAN, LIN and FlexRay) depends on the I-PDU identifier. The PDU Router also determines if a transport protocol has to be used or not. Lastly, this module carries out gateway functionality, when there is no rate conversion.

L-SDU Router Module (LSduR) provides equal mechanisms to access a CAN bus channel regardless of its location (\muC internal/external). From the location of CAN controllers (on chip / onboard), it extracts the ECU hardware layout and the number of CAN drivers. Because CanTp only handles transport protocol frames (i.e. SF, FF, CF and FC PDUs), depending on the N-PDU ID, the L-SDU Router module has to forward an I-PDU to CanTp or PduR.

According to AUTOSAR basic software architecture, CanTp provides services for:

* Segmentation of data in transmit direction
* Reassembling of data in receive direction
* Control of data flow
* Detection of errors in segmentation sessions
* Transmit cancellation
* Receive cancellation

It is an AUTOSAR decision to base basic software module specifications on existing standards, thus this AUTOSAR CAN Transport Layer specification is based on the international standard ISO 15765, which is the most used standard in the automotive domain.

ISO 15765 (containing four sections) describes two applicable CAN Transport Layer specifications: ISO 15765-2 for OEM enhanced diagnostics  and ISO 15765-4 for OBD diagnostics . Concerning the transport layer, ISO 15765-4 (the section of ISO 15765 which also covers the data link layer and physical layer) is in accordance with ISO 15765-2 with some restrictions/additions. In order that there is no incompatibility problem between ISO 15765-2 and ISO 15765-4, differences will be solved by the CAN Transport Layer configuration.

Although CAN transport protocol is mainly used for vehicle diagnostic systems, it has also been developed to deal with requirements from other CAN based systems requiring a transport layer protocol.

## 模块依赖

This section sets out relations between the CanTp and other AUTOSAR basic software modules. It contains short descriptions of some AUTOSAR basic concepts, configuration information and services, which are required by the CanTp from other modules.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification defines the functionality, API and the configuration of the AUTOSAR Basic Software module CAN Transport Layer (CanTp).

CanTp is the module between the PDU Router and the L-SDU Router module (see Figure ). The main purpose of the CAN TP module is to segment and reassemble CAN I-PDUs longer than 8 bytes or longer than 64 bytes in case of CAN FD.

The PDU Router deploys AUTOSAR COM and DCM I-PDUs onto different communication protocols. The routing through a network system type (e.g. CAN, LIN and FlexRay) depends on the I-PDU identifier. The PDU Router also determines if a transport protocol has to be used or not. Lastly, this module carries out gateway functionality, when there is no rate conversion.

L-SDU Router Module (LSduR) provides equal mechanisms to access a CAN bus channel regardless of its location (\muC internal/external). From the location of CAN controllers (on chip / onboard), it extracts the ECU hardware layout and the number of CAN drivers. Because CanTp only handles transport protocol frames (i.e. SF, FF, CF and FC PDUs), depending on the N-PDU ID, the L-SDU Router module has to forward an I-PDU to CanTp or PduR.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the CAN Transport Layer module that are not included in the .

The prefix notation used in this document, is as follows:

| Prefix: | Description: |
|---|---|
| I- | Relative to AUTOSAR COM Interaction Layer |
| L- | Relative to the L-SDU Router module which is equivalent to the Logical Link Control (the upper part of the Data Link Layer - the lower part is called Media Access Control) |
| N- | Relative to the CAN Transport Layer which is equivalent to the OSI Network Layer. |

All acronyms and abbreviations, which are specific to the CAN Transport Layer and are therefore not contained in the AUTOSAR glossary, are described in the following:

| Acronym: | Description: |
|---|---|
| CAN L-SDU | This is the SDU of the L-SDU Router module. It is similar to CAN N-PDU but from the L-SDU Router module point of view. |
| CAN LSduId | This is the unique identifier of a SDU within the L-SDU Router module. It is used for referencing L-SDU's routing properties. |

Consequently, in order to interact with the L-SDU Router module through its API, an upper layer uses CAN LSduId to refer to a CAN L-SDU Info Structure.
| CAN N-PDU | This is the PDU of the CAN Transport Layer. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules (see ), which is also valid for CAN Transport Layer. Thus, the specification SWS BSW General  shall be considered as additional and required specification for CAN Transport Layer.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

The AUTOSAR architecture defines communication system specific transport layers (CanTp, LinTp including LinIf, FlexRayTp). Thus the CAN Transport Layer only covers CAN transport protocol specifics.

The CAN Transport Layer has an interface to a single underlying L-SDU Router module and a single upper PDU Router module.

According to the AUTOSAR release plan, this CAN Transport Layer specification has the following restriction:

* CAN Transport Layer runs only in an event triggered mode

### 8. Applicability in automotive domain

The CAN Transport Layer can be used for all domains whenever the CAN communication system is connected to the appropriate ECU.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section sets out relations between the CanTp and other AUTOSAR basic software modules. It contains short descriptions of some AUTOSAR basic concepts, configuration information and services, which are required by the CanTp from other modules.

### 10. AUTOSAR 架构基础概念
*原文标题：AUTOSAR architecture basic concepts*

### 11. CAN 传输 Layer connection(s)
*原文标题：CAN Transport Layer connection(s)*

In the AUTOSAR architecture final release, transport protocol facilities will be used to transport both diagnostic (e.g. OBD and UDS protocols) and AUTOSAR COM I-PDUs. Therefore, the CanTp module is able to deal with multiple connections simultaneously (i.e. multiple segmentation sessions in parallel).

The maximum number of simultaneous connections is statically configured. This configuration has an important impact on complexity and resource consumption (CPU, ROM and RAM) of the code generated, because resources (e.g. Rx and Tx state machines, variables used to work on N-PCI data and so on) have to be reserved for each simultaneous access.

To allow the user to choose which I-PDUs could be received (or sent) simultaneously, each N-SDU identifier will be internally routed through a configured CanTp "connection channel". Since a "connection channel" is not accessible externally, all necessary information (see Chapter ) to transfer an N-SDU will be linked to the N-SDU identifier (e.g. "connection channel" number, timeouts, addressing format, and so on).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. CAN 传输 Layer interactions
*原文标题：CAN Transport Layer interactions*

The figure below shows the interactions between CanTp, PduR and LSduR modules.

The CanTp's upper interface offers the PduR module global access, to transmit and receive data. This access is achieved by CAN N-SDU identifier (CAN NSduId). CAN NSduId refers to a constant data structure which consists of attributes describing CAN N-SDU. Each CAN N-SDU specific data structure may contain attributes such as: type of N-SDU (Tx or Rx), its addressing format, L-SDU identifier of this message or other attributes that are useful for implementation.

### 13. Processing 模式
*原文标题：Processing mode*

The AUTOSAR communication stack supports both polling and event triggering mode. Therefore, each communication layer can receive information from its lower layer and propagate information to its upper layer by different mechanisms.

In the case of the CAN Transport Layer, only the event triggering mode is supported.

### 14. 数据 consistency
*原文标题：Data consistency*

To optimize the communication stack, AUTOSAR limits the CAN Transport Layer buffering capacity. Therefore, the CanTp copies N-SDU payload directly from the upper layer (DCM, COM or PDU Router - in the case of 1:1 TP routing) to the CAN driver and vice-versa. Thus to guarantee data consistency, the upper layer will observe the following rules:

* At transmission time, the N-SDU data payload will remain unchanged, from transmit request until transmit confirmation has been received
* At reception time, the N-SDU data access will be locked, from start of reception until the reception indication has been received.

### 15. Static 配置
*原文标题：Static configuration*

At runtime the CAN Transport module must have all information required to manage transport connection. Therefore, the following properties should be statically configured:

* Number of CAN N-SDU
* Unique identifier of each CAN N-SDU
* Communication direction of each CAN N-SDU (Tx or Rx)
* Addressing format of each connection (normal, extended, mixed 11bit, normal fixed, or mixed 29 bit) and, depending on the addressing format, additionally:

  * Normal: none
  * Extended: N_TA
  * Mixed 11 bit: N_AE
  * Normal fixed: N_TA, N_SA
  * Mixed 29 bit: N_TA, N_SA, N_AE

The static addressing information may be omitted for generic connections that use N-SDUs with MetaData.

* Addressing format of each connection (normal, extended or mixed) and, in the case of extended addressing format, the N_TA value or in case of mixed addressing format the N_AE value.
* Associated CAN L-SDU identifier of each CAN N-SDU identifier and if necessary (multiple frame segmentation session) the CAN L-SDU identifier used to transmit the CAN FC N-PDU
* Classic CAN frames and CAN FD frames

The configuration of the CAN Transport Layer can be performed during compilation or post-build (See Chapter ).

### 16. PDU Router 服务
*原文标题：PDU Router services*

The CAN Transport Layer uses callback functions of the PDU Router to copy transmit data and to confirm transmission, to initiate reception, copy received data and to indicate reception of a message:

* `PduR_CanTpRxIndication`
* `PduR_CanTpStartOfReception`
* `PduR_CanTpCopyRxData`
* `PduR_CanTpCopyTxData`
* `PduR_CanTpTxConfirmation`

For more information about these functions, refer to the PDU Router module specification .

### 17. L-SDU Router 服务
*原文标题：L-SDU Router services*

The CAN Transport Layer uses the following services of the L-SDU Router module to transmit CAN N-PDUs:

* `LSduR_CanTpTransmit`

For more information about this function, refer to the L-SDU Router module specification .

### 18. 文件结构
*原文标题：File structure*

### 19. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 20. 头文件结构
*原文标题：Header file structure*

AUTOSAR specifies that an ECU can be created from modules provided as object code, source code (generated or not) and even mixed.

The decision to provide a module as object code or source code is based on a compromise between IP protection, test coverage, code efficiency and configurability at system generation time. Thus depending on the configurability requirements of the OEM, suppliers may deliver the CanTp module as object code, generated code or source code.

### 21. Version check

⌈
Version number macros can be used for checking and reading out the software version of a software module, during compile-time and run-time.
⌋

### 22. 设计 Rules
*原文标题：Design Rules*

For details refer to ,  and .

### 23. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Basic SW security events |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Reporting of production relevant error status |  |  |
| All type definitions of target and compiler specific scope shall be placed and organized in a single type header |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| API handling in uninitialized state |  |  |
| Init functions shall have a pointer to a configuration structure as |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 功能规范
*原文标题：Functional specification*

This section provides a description of the CAN Transport Layer functionality. It explains the services provided to the upper and lower layers and the internal behavior of the CAN Transport Layer.

The CanTp module offers services for segmentation, transmission with flow control, and reassembly of messages. Its main purpose is to transmit and receive messages that may or may not fit into a single CAN frame. Messages that do not fit into a single CAN frame are segmented into multiple parts, such that each can be transmitted in a single CAN frame.

While reading this document, it is necessary to bear in mind, that this module will follow the recommendations ISO 15765-2 (OEM enhanced diagnostics ) and should be able to fulfill ISO 15765-4 (Requirements for emissions-related systems ).

  Upstream requirements:
⌈
If a recommendation of ISO 15765-2 is not explicitly excluded in the SWS, the CanTp module shall follow this recommendation.
⌋

For further descriptions of SF, FF, CF and FC frames, network layer timing parameters, and further functionalities of CAN Transport Layer please refer to the ISO 15765-2 specification .

ISO 15765-4 is a particular case of ISO-15765-2.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 服务 provided to 上层 layer
*原文标题：Services provided to upper layer*

The service interface of the CanTp module can be divided into the following main categories:

* Initialization and shutdown
* Communication services

The following paragraphs describe the functionality of each services category.

### 26. 初始化 and 关机
*原文标题：Initialization and shutdown*

⌈
The CanTp module shall have two internal states, `CANTP_OFF` and `CANTP_ON`.
⌋

⌈
The CanTp module shall be in the `CANTP_OFF` state after power up.
⌋

⌈
In the state `CANTP_OFF`, the CanTp shall allow an update of the postbuild configuration.
⌋

  Upstream requirements:
⌈
The CanTp module shall change to the internal state `CANTP_ON` when the CanTp has been successfully initialized with `CanTp_Init`().
⌋

⌈
The CanTp module shall perform segmentation and reassembly tasks only when the CanTp is in the `CANTP_ON` state.
⌋

  Upstream requirements:
⌈
The function `CanTp_Init` shall initialize all global variables of the module and sets all transport protocol connections in a sub-state of `CANTP_ON`, in which neither segmented transmission nor segmented reception are in progress (Rx thread in state `CANTP_RX_WAIT` and Tx thread in state `CANTP_TX_WAIT`).
⌋

  Upstream requirements:
⌈
If development error detection for the CanTp module is enabled the CanTp module shall raise an error (`CANTP_E_UNINIT`) when the PDU Router or the L-SDU Router module tries to use any function before the function `CanTp_Init` has been called.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 发送请求
*原文标题：Transmit request*

The transmit operation, `CanTp_Transmit`(), will allow upper layers to ask for data transfer using CAN transport protocol facilities (segmentation, extended addressing format and so on).

⌈
After the transmit request was accepted, the CanTp module shall notify its upper layer if the N-SDU transfer is fully processed (successfully or not).
⌋

### 28. Transmit cancellation

The transmit cancellation feature allows the upper layer to cancel a transmission in progress.

Use case: Cancel a diagnostic transmission due to the reception of another diagnostic protocol with higher priority.

⌈
This feature shall be (de)activated by static configuration (parameter CanTpTc).
⌋

⌈
Transmit Cancellation is triggered by the call of `CanTp_CancelTransmit`().
⌋

⌈
After the call of the service `CanTp_CancelTransmit`(), the transfer on this connection shall be aborted.
⌋

Note: The Api `PduR_CanTpTxConfirmation`() shall be called after a transmit cancellation with value E_NOT_OK. (see also )

Note that if a transfer is in progress, that will generate a time-out error on the receiver side.

### 29. 服务 provided to the 下层 layer
*原文标题：Services provided to the lower layer*

According to the AUTOSAR specification of the communication stack, the CAN Transport Layer provides the following two callback functions to the L-SDU Router module: `CanTp_TxConfirmation`() and `CanTp_RxIndication`().

### 30. 发送确认
*原文标题：Transmit confirmation*

The LSduR module shall call the transmit confirmation function to notify the CAN Transport Layer that a CAN frame transmission, requested by the CanTp, has been performed successfully or not. The L-PDU identifier is associated with the call in order to identify the corresponding transmission.

⌈
When the transmit confirmation is not received after a maximum time (equal to N_As), the CanTp module shall abort the corresponding session. The N-PDU remains unavailable to other concurrent sessions until the TxConfirmation is received, successful or not.
⌋

⌈
For confirmation calls, the CanTp module shall provide the function `CanTp_TxConfirmation`().
⌋

⌈
CanTp shall abort the corrensponding session, when `CanTp_TxConfirmation`() is called with the result E_NOT_OK.
⌋

### 31. Reception indication

The LSduR module shall call the reception indication function to notify the CanTp module that a new CAN N-PDU frame (i.e. a transport protocol frame) has been received.

The reception indication can be performed in ISR context.

⌈
For reception indication, the CanTp module shall provide `CanTp_RxIndication`().
⌋

### 32. Pending Tx N-SDUs

In case that multiple Tx N-SDUs are being requested for transmission while the associated channel is busy, the CanTp module will be able to assign a pending state ('wait' state) to the requested N-SDUs. They will be sent as soon as the associated channel is free, in an order that is implementation defined (i.e FIFO, based on N-SDU id...). This feature is enabled/disabled by the CanTpPendingTxNSduSupport parameter.

 Transmission Request Queue for TP Channels
⌈
If a connection channel is assigned to multiple N-SDUs, then resources are shared between different N-SDUs, and the CAN Transport Layer will mark the transmission N-SDUs as pending, if no free connection channels are available, and if CanTpPendingTxNSduSupport is enabled.
⌋

Note: If a N-SDU is marked as pending, the CanTp module shall send it as soon as there is a free associated connection channel.

 Transmission Request Queue for TP Channels
⌈
When `CanTp_Transmit` is called for a N-SDU with MetaData and the connection channel is in use, the received MetaData of the N-SDU shall be stored until the connection channel becomes available.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Internal 行为
*原文标题：Internal behavior*

The internal operation of the CAN Transport Layer provides basic mechanisms in order to perform the main purpose of this module, which is to transfer messages in a single CAN frame or in multiple CAN frames.

The entire behavior of the CAN Transport Layer will be event triggered, so that CanTp can processes transfer of N-SDU (respectively L-SDU) coming from the PDU Router (respectively the L-SDU Router module) directly.

### 34. N-SDU Reception

⌈
When receiving an SF or an FF N-PDU, the CanTp module shall notify the upper layer (PDU Router) about this reception using the `PduR_CanTpStartOfReception` function.
⌋

Note: The upper layer will reserve and lock a buffer for reception of the N-SDU.

⌈
CanTp shall provide the content of the FF/SF to PduR using the parameter TpSduInfoPtr of `PduR_CanTpStartOfReception`().
⌋

  Upstream requirements:
⌈
The received data link layer data length (`RX_DL`) shall be derived from the first received payload length of the CAN frame/PDU (`CAN_DL`) as follows:

* For `CAN_DL` values less than or equal to eight bytes the `RX_DL` value shall be eight.
* For `CAN_DL` values greater than eight bytes the `RX_DL` value equals the `CAN_DL` value.
⌋

Note: ISO frame overview table:

⌈
When `CanTp_RxIndication` is called for a SF or FF N-PDU with MetaData (indicating a generic connection), the CanTp module shall store the addressing information contained in the MetaData of the PDU and use this information for the initiation of the connection to the upper layer, for transmission of FC N-PDUs and for identification of CF N-PDUs. The addressing information in the MetaData depends on the addressing format:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. N-SDU Transmission

As described in chapter , the upper layer asks for the transmission of a N-SDU by calling `CanTp_Transmit`(). The parameters of `CanTp_Transmit`() describe the CAN NSduId and the full Tx N-SDU length to be sent .

⌈
For specific connections that do not use MetaData, the function `CanTp_Transmit` shall only use the full SduLength information and shall not use the available N-SDU data buffer in order to prepare Single Frame or First Frame PCI.
⌋

⌈
When `CanTp_Transmit` is called for an N-SDU with MetaData, the CanTp module shall store the addressing information contained in the MetaData of the N-SDU and use this information for transmission of SF, FF, and CF N-PDUs and for identification of FC N-PDUs. The addressing information in the MetaData depends on the addressing format:

* Normal: none
* Extended: N_TA
* Mixed 11 bit: N_AE
* Normal fixed: N_SA, N_TA
* Mixed 29 bit: N_SA, N_TA, N_AE.
⌋

⌈
When calling `LSduR_CanTpTransmit`() for an SF, FF, or CF of a generic connection (N-PDU with MetaData), the CanTp module shall provide the stored addressing information via MetaData of the N-PDU. The addressing information in the MetaData depends on the addressing format:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Buffer strategy

Because CanTp has no buffering capability, the N-SDU payload, which is to be transmitted, is not copied internally and the N-PDU received is not reassembled internally.

The CAN Transport Layer works directly on the memory area of the upper layers (e.g. PduR, DCM, or COM). To access these memory areas, the CAN Transport Layer uses the `PduR_CanTpCopyTxData`() or `PduR_CanTpCopyRxData`() functions.

Thus, to guarantee data consistency, the upper layer should lock this memory area until an indication occurs.

When a transmit buffer is locked, the upper layer must not write data inside the buffer area.

When a receiving buffer is locked the CAN Transport Layer does not guarantee data consistency of the buffer. The upper layer should neither read nor write data in the buffer area.

It is assumed that upper layer module has locked the buffer when it returns a status `BUFREQ_OK` to a `PduR_CanTpStartOfReception`() call or when `CanTp_Transmit`() returns E_OK and shall keep the buffer locked until a confirmation or indication (`PduR_CanTpTxConfirmation`() or `PduR_CanTpRxIndication`() call) occurs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. 协议 parameter setting 服务
*原文标题：Protocol parameter setting services*

⌈
The CanTp module shall support optional primitives (proposed in ISO 15765-2 specification) for the dynamic setting of some transport protocol internal parameters (STmin and BS) by application.

The BS value is only a maximum value. For reasons of buffer length, the CAN Transport Layer can adapt the BS value within the limit of the configured maximum value.
⌋

### 38. Tx and Rx 数据 flow
*原文标题：Tx and Rx data flow*

The following figures show examples of an un-segmented message transmission and a segmented one.

Flow control is used to adjust the sender to the capabilities of the receiver. The main usage of this transport protocol is peer-to-peer communication (i.e. 1 to 1 communication - physical addressing ).

⌈
The CanTp module shall provide 1 to n communication (i.e. functional addressing ), in the form of functionality to SF N-PDUs (and only SF N-SDU).
⌋

The configuration tool shall check whether it is only SF N-PDUs that have been configured with a functional addressing property.

⌈
If a multiple segmented session occurs (on both receiver and sender side) with a handle whose communication type is functional, the CanTp module shall reject the request and report the runtime error code `CANTP_E_INVALID_TATYPE` to the Default Error Tracer.
⌋

### 39. Relationship between CAN NSduId and CAN LSduId

This chapter describes the connection that exists between CAN NSduId and CAN LSduId, in order to make transmission and reception of transport protocol data units possible.

  Upstream requirements: , , ,
⌈
A CAN NSduId shall only be linked to one CAN LSduId that is used to transmit SF, FF, FC and CF frames.
⌋

⌈
However, if the message is configured to use an extended or a mixed addressing format, the CanTp module must fill the first byte of each transmitted segment (SF, FF and CF) with the N_TA (in case of extended addressing) or N_AE (in case of mixed addressing) value. Therefore a CAN NSduId may also be related to a N_TA or N_AE value.
⌋

⌈
FC protocol data units give receivers the possibility of controlling senders' data flow by authorizing or delaying transmission of subsequent CF N-PDUs.
⌋

⌈
For extended addressing format, the first data byte of the FC also contains the N_TA value or a unique combination of N_TA and N_TAtype value. For mixed addressing format, the first data byte of the FC contains the N_AE value.
⌋

⌈
Thus the CAN LSduId of a FC frame combined with its N_TA value (e.g. the N_AI) or with N_AE value shall only identify one CAN NSduId.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Concurrent connection

The CAN Transport Layer is able to manage several connections simultaneously (e.g. a UDS and an OBD request can be received at the same time).

  Upstream requirements:
⌈
The CanTp module shall support several connections simultaneously.
⌋

  Upstream requirements:
⌈
It shall be possible to configure concurrent connections in the CanTp module.
⌋

⌈
The connection channels are only destined for CAN TP internal use, so they are not accessible externally.
⌋

⌈
All the necessary information (Channel number, Timing parameter \dots{}) is configured inside the CAN Transport Layer module.
⌋

  Upstream requirements:
⌈
Each N-SDU is statically linked to one connection channel. This connection channel represents an internal path, for the transmission or receiving of the N-SDU. A connection channel is attached to one or more N-SDU.
⌋

  Upstream requirements:
⌈
Each connection channel is independent of the other connection channels. This means that a connection channel uses its own resources, such as internal buffer, timer, or state machine.
⌋

⌈
The CanTp module shall route the N-SDU through the correctly configured connection channel.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. N-PDU padding

To guarantee complete compatibility with all upper layer requirements concerning the frame data length (e.g. OBD requires data length to always be set to 8 bytes, however UDS does not), the padding activation is configurable at pre-compile time per N-SDU by using either CanTpRxPaddingActivation for a Rx N-SDU or CanTpTxPaddingActivation for a Tx N-SDU.

  Upstream requirements:
⌈
In both padding and no padding modes, the CanTp module shall only transfer used data bytes to the upper layer.
⌋

  Upstream requirements:
⌈
The value used for padding bytes is configurable via configuration parameter `CANTP_PADDING_BYTE` (see CanTpPaddingByte).
⌋

  Upstream requirements:
⌈
If frames with a payload <= 8 (either CAN 2.0 frames or small CAN FD frames) are used for a Rx N-SDU and CanTpRxPaddingActivation is equal to `CANTP_ON`, then CanTp shall only accept SF Rx N-PDUs or last CF Rx N-PDUs, belonging to that N-SDU, with a length of eight bytes (i.e. PduInfoPtr.SduLength = 8).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. 处理 of unexpected N-PDU arrival
*原文标题：Handling of unexpected N-PDU arrival*

The behavior of the CAN Transport Layer on unexpected N-PDU arrival is greatly dependent on the communication direction type of the processing N-SDU.

  Upstream requirements:
⌈
If unexpected frames are received, the CanTp module shall behave according to the table below. This table specifies the N-PDU handling considering the current CanTp internal status (CanTp status).
⌋

It must be understood, that the received N-PDU contains the same address information (N_AI) as the reception or transmission, which may be in progress at the time the N_PDU is received.

| CanTp | Reception of | < | < | < | < |
|---|---|---|---|---|---|
| status | SF N-PDU | FF N-PDU | CF N-PDU | FC N-PDU | Unknown N-PDU |

Segmented

Transmit

in

| progress | If a reception is in progress process it according to the cell below, otherwise process the SF N-PDU as the start of a new reception | If a reception is in progress process it according to the cell below, otherwise process the FF N-PDU as the start of a new reception | If a reception is in progress process it according to the cell below, otherwise ignore it. | If awaited, process the FC N-PDU, otherwise ignore it. | Ignore |
|---|---|---|---|---|---|

Segmented

Receive

in

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. 错误分类
*原文标题：Error Classification*

This section describes how the CanTp module has to manage the several error classes that may occur during the life cycle of this basic software.

  Upstream requirements:
⌈
On errors and exceptions, the CanTp module shall not modify its current module state (see Figure 3: CAN Transport Layer life cycle) but shall simply report the error event.
⌋

⌈
In case of production error, the Diagnostic Event Manager module (via the Function Inhibition Manager) will perform the appropriate action (e.g. status modification of the calling module).
⌋

### 其余 79 章（内容从略，见纯文本全文）

44. Development 错误
45. Runtime 错误
46. Production 错误
47. Extended Production 错误
48. 安全事件
49. API 规范
50. Imported 类型
51. 类型定义
52. CanTp_ConfigType
53. 功能定义
54. CanTp_Init
55. CanTp_Shutdown
56. CanTp_Transmit
57. CanTp_CancelTransmit
58. CanTp_CancelReceive
59. CanTp_ChangeParameter
60. CanTp_ReadParameter
61. Main 功能
62. Callback 通知
63. CanTp_RxIndication
64. CanTp_TxConfirmation
65. Expected 接口
66. Mandatory 接口
67. Optional 接口
68. 时序图
69. SF N-SDU received and no buffer available.
70. Assumptions
71. Sequence diagram
72. Transition 描述
73. Successful SF N-PDU reception
74. Assumptions
75. Sequence diagram
76. Transition 描述
77. Transmit request of SF N-SDU
78. Assumptions
79. Sequence diagram
80. Transition 描述
81. Transmit request of larger N-SDU
82. Assumptions
83. Sequence diagram
84. Transition 描述
85. Large N-SDU Reception
86. Assumptions
87. Sequence diagram
88. Transition 描述
89. 配置规范
90. How to read this chapter
91. Containers and 配置 parameters
92. CanTp
93. CanTpConfig
94. CanTpGeneral
95. CanTpDemEventParameterRefs
96. CanTpEnableSecurityEventRefs
97. CanTpChannel
98. CanTpRxNSdu
99. CanTpTxFcNPdu
100. CanTpRxNPdu
101. CanTpTxNSdu
102. CanTpTxNPdu
103. CanTpRxFcNPdu
104. CanTpNTa
105. CanTpNSa
106. CanTpNAe
107. 发布信息
108. 附录
109. 不适用需求
110. Change history of AUTOSAR traceable items
111. Traceable item history of this document according to AUTOSAR Release R23-11
112. Added 规范 Items in R23-11
113. Changed 规范 Items in R23-11
114. Deleted 规范 Items in R23-11
115. Traceable item history of this document according to AUTOSAR Release R24-11
116. Added 规范 Items in R24-11
117. Changed 规范 Items in R24-11
118. Deleted 规范 Items in R24-11
119. Traceable item history of this document according to AUTOSAR Release R25-11
120. Added 规范 Items in R25-11
121. Changed 规范 Items in R25-11
122. Deleted 规范 Items in R25-11
