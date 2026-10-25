# Specification of a Transport Layer for SAE J1939 (`SAEJ1939TransportLayer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 425 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939TransportLayer_425\AUTOSAR_CP_SWS_SAEJ1939TransportLayer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939TransportLayer_425\AUTOSAR_CP_SWS_SAEJ1939TransportLayer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939TransportLayer_425\zzgen\CP_SWS_SAEJ1939TransportLayer.complete.txt`

## 文档简介

This specification describes the functionality, the API, and the configuration of the AUTOSAR Basic Software module J1939Tp, which implements a transport layer for AUTOSAR which is compatible to SAE J1939. The terms J1939Tp and SAE J1939 Transport Layer module are used synonymously in this document.

SAE J1939 has a broad acceptance in the truck domain, and consists of several documents describing the layers of the communication protocol from the physical layer to diagnostics and the application layer. SAE J1939-21 describes the data link and transport layer, which includes two transport protocol variants:

BAM (Broadcast Announce Message) for broadcast messages, and

CMDT (Connection Mode Data Transfer) for point-to-point connections.

This specification defines how the transport protocol of SAE J1939-21 can be implemented in the AUTOSAR architecture. It only describes those parts of the implementation that are relevant to the AUTOSAR architecture. Protocol specific details like exact timings are not part of this specification. Therefore, to be able to implement the SAE J1939 Transport Layer module, the reader of this specification needs to read also the original SAE J1939-21 specification document.

The module J1939Tp interfaces to the PDU Router and the CAN Interface (via the L-SDU Router), as shown in the following figure:

The purpose of J1939Tp is to segment and reassemble J1939 PGNs (N-SDUs) that are longer than 8 bytes. The segmented messages are sent and received via the L-SDU Router.

The PDU Router (PduR) deploys AUTOSAR COM and DCM I-PDUs onto different communication protocols (e.g. CAN or J1939, segmented via transport layer or directly). At run-time, the PduR decides where to route I-PDUs based on the I-PDU (L-SDU or N-SDU) identifier. In the same way, the LSduR uses the L-SDU (I-PDU or N-PDU) identifier to decide whether a received message must be processed by one of the available transport layer modules or may be forwarded directly to the PduR.

J1939Tp supports fixed and variable size N-SDUs (I-PDUs) with more than 8 bytes. I-PDUs that do not exceed 8 bytes are exchanged directly between PduR and CanIf via LSduR.

Fixed size N-SDUs are always segmented by the J1939Tp, while variable size N-SDUs are only segmented when they exceed 8 bytes. J1939Tp forwards variable size N-SDUs with an actual size of 8bytes or less and a configured maximum size of more than 8 bytes directly to the LSduR. The transport protocol variant (BAM or CMDT) is chosen

## 模块依赖

The  shows an overview of the neighboring modules of the SAE J1939 Transport Layer.

Besides the standard modules Default Error Tracer (DET), ECU State Manager (EcuM), and Basic Software Scheduler (SchM), which have interfaces to all BSW modules, J1939Tp only interacts with the PDU Router (PduR) and the L-SDU Router (LSduR), and indirectly with the CAN Interface (CanIf). The interfaces of J1939Tp are similar to the interfaces of CAN Transport Layer (CanTp).

The figure below shows the interactions between J1939Tp, PduR, and CanIf, omitting LSduR, CAN Driver, and potential upper layers, which are not relevant to understand these interactions.

The J1939Tp's upper interface offers the PduR module access to transmitted and received N-SDUs corresponding to J1939 PGs with a maximum length of more than 8 bytes of data.

J1939 PGs with a maximum length of 8 bytes or less are exchanged directly between PduR and CanIf via LSduR.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This specification describes the functionality, the API, and the configuration of the AUTOSAR Basic Software module J1939Tp, which implements a transport layer for AUTOSAR which is compatible to SAE J1939. The terms J1939Tp and SAE J1939 Transport Layer module are used synonymously in this document.

SAE J1939 has a broad acceptance in the truck domain, and consists of several documents describing the layers of the communication protocol from the physical layer to diagnostics and the application layer. SAE J1939-21 describes the data link and transport layer, which includes two transport protocol variants:

BAM (Broadcast Announce Message) for broadcast messages, and

CMDT (Connection Mode Data Transfer) for point-to-point connections.

This specification defines how the transport protocol of SAE J1939-21 can be implemented in the AUTOSAR architecture. It only describes those parts of the implementation that are relevant to the AUTOSAR architecture. Protocol specific details like exact timings are not part of this specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Acronyms, Abbreviations, and Terms

### 3. 定义 of Acronyms and abbreviations
*原文标题：Definition of Acronyms and abbreviations*

The table below contains all acronyms, abbreviations or initialisms that are component-specific and not available in the AUTOSAR glossary .

| Abbreviation | Description |
|---|---|
| AC | SAE J1939 AddressClaimed PG (PGN = 0x0EE00), which contains the NAME and is used for the SAE J1939 address claiming, CannotClaimAddress when SA = 0xFE |
| BAM | Broadcast Announce Message, broadcast variant of SAE J1939 transport protocol |
| CA | Controller Application, role of an ECU tied to one address |
| Can | CAN Driver, abstracting from CAN controller hardware, see |
| CanIf | CAN Interface, abstracting from CAN drivers and transceivers, see |
| CanTp | CAN Transport Layer, see |
| CMDT | Connection Mode Data Transfer, a.k.a. RTS/CTS, peer-to-peer variant of SAE J1939 transport protocol |
| DA | Destination Address, the address of the receiving CA of a PG. Part of the 29 bit CAN identifier of SAE J1939 PGs. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 定义 of Terms
*原文标题：Definition of Terms*

The table below contains all definitions of terms that are used in this document.

| Glossary Term | Explanation |
|---|---|
| Meta Data | Meta data transferred alongside a PDU, consisting of a set of meta data items |
| Meta Data Item | A single item of meta data of defined type and size |
| Parameter | A parameter is a signal of the SAE J1939 application layer. The Parameter definition includes defined scale, limits, offset, and physical unit. Parameters are uniquely identified by the SPN. |
| Parameter Group | A Parameter Group is a message of the SAE J1939 application layer. Each Parameter Group contains several Parameters (signals), and is uniquely identified by the PGN. |
| Parameter Group Number | Unique identifier (18 bits: EDP, DP, PDUF, PDUS) of an SAE J1939 Parameter Group that is contained in the payload of many SAE J1939 protocol messages and in the 29bit CAN identifier of SAE J1939 PGs. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related Documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 7. 相关规范
*原文标题：Related Specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for SAE J1939 Transport Layer.

Thus, the specification  shall be considered as additional and required specification for SAE J1939 Transport Layer.

### 8. 约束与假设
*原文标题：Constraints and Assumptions*

### 9. 限制
*原文标题：Limitations*

The AUTOSAR architecture contains several communication system specific transport layers (J1939Tp, CanTp, FrTp, etc.). All of these modules need to have identical APIs, with the exception of API functions for which the PduR has separate configuration abilities.

The J1939Tp module does not implement the TriggerTransmit API, because it is only needed for time triggered bus architectures.

### 10. Applicability to Automotive Domains

The SAE J1939 Transport Layer supports the implementation of ECUs that are designed to operate in a J1939 network.

### 11. 对其他模块的依赖
*原文标题：Dependencies to Other Modules*

The  shows an overview of the neighboring modules of the SAE J1939 Transport Layer.

Besides the standard modules Default Error Tracer (DET), ECU State Manager (EcuM), and Basic Software Scheduler (SchM), which have interfaces to all BSW modules, J1939Tp only interacts with the PDU Router (PduR) and the L-SDU Router (LSduR), and indirectly with the CAN Interface (CanIf). The interfaces of J1939Tp are similar to the interfaces of CAN Transport Layer (CanTp).

The figure below shows the interactions between J1939Tp, PduR, and CanIf, omitting LSduR, CAN Driver, and potential upper layers, which are not relevant to understand these interactions.

The J1939Tp's upper interface offers the PduR module access to transmitted and received N-SDUs corresponding to J1939 PGs with a maximum length of more than 8 bytes of data.

J1939 PGs with a maximum length of 8 bytes or less are exchanged directly between PduR and CanIf via LSduR.

### 12. 文件结构
*原文标题：File Structure*

AUTOSAR specifies that an ECU can be created from modules provided as object code, source code (generated or static), or both.

The decision to provide a module as object code or source code is based on a compromise between IP protection, test coverage, code efficiency and configurability at system generation time. Depending on the configurability requirements of the OEM, suppliers may deliver the J1939Tp module as object code or source code.

The file hierarchy defined in this section allows the separation of platform, compiler, and implementation specific definitions and declarations from general definitions, as well as the separation of source code and configuration.

### 13. 代码文件结构
*原文标题：Code File Structure*

For details, refer to .

⌈
Internally used data types and functions shall be defined locally in the implementation source files.
⌋

This prevents visibility of these symbols outside of the J1939Tp module.

### 14. 头文件结构
*原文标题：Header File Structure*

For details, refer to .

### 15. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  (Requirements on BSW Modules for SAE J1939) and  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| For each callback function it shall be specified if it is called from interrupt context or not |  |  |
| Status values naming convention |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| Callback Function Return Types for AUTOSAR BSW |  |  |
| AUTOSAR Basic Software Modules callback functions are all |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能规范
*原文标题：Functional Specification*

This chapter describes the functionality of the SAE J1939 Transport Layer. It explains the services provided to the upper and lower layers and the internal behavior of J1939Tp.

### 17. 基础 Principles of SAE J1939
*原文标题：Basic Principles of SAE J1939*

The SAE J1939 standard defines a set of Parameter Groups (PGs), each containing signals with defined content and semantics. The following information is provided for each PG:

* Payload length type: maximal number of bytes, fixed or variable size.
* Parameter Group Number (PGN): 18 bit value containing the following fields:

  * 2 bit data page information (EDP and DP)
  * 8 bit PDU Format (PDUF)
  * 8 bit PDU Specific (PDUS)

PGNs with PDU Format < 240 (PDU1 format) identify point-to-point messages, while PGNs with PDU Format >= 240 (PDU2 format) identify broadcast messages. The PDU Specific field is only relevant for broadcast messages (PDU2 format); it is always zero for point-to-point messages (PDU1 format).

J1939 uses 29-bit CAN identifiers to identify each message. The CAN identifier contains a 3-bit-priority, the PGN, the Source Address (SA), and the Destination Address (DA, only for point-to-point messages).

Usually, an ECU has just one node address, which is used as DA in received messages and as SA in transmitted messages. However, a single ECU can also implement several different J1939 nodes at once, each with its own node address.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 基础 Functionality of J1939Tp
*原文标题：Basic Functionality of J1939Tp*

This section describes aspects of the functionality of J1939Tp that are not related to neighboring modules.

  Upstream requirements:
⌈
On errors and exceptions, the J1939Tp module shall not modify its current module state but shall simply report the error event.
⌋

See  for the J1939Tp module states.

To assure a unique PDU Router handling of all J1939 PGs which is independent of the Payload Length type (variable or fixed), the J1939Tp is used for the transmission of all Parameter Groups that are longer than 8 Bytes, independent of their length being fixed or variable.

This means that PGs with variable length that have a configured maximum size of more than 8 bytes but do not exceed 8 bytes at run-time shall be transported using J1939Tp even though no segmentation is necessary and a direct transmission from PDU Router to CAN Interface via L-SDU Router would be possible.

  Upstream requirements: ,
⌈
The SAE J1939 Transport Layer shall implement the following two J1939 transport protocol variants defined in SAE J1939-21:

* BAM for broadcast transmission
* CMDT for point-to-point transmission
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 初始化 and 关机
*原文标题：Initialization and Shutdown*

The following figure summarizes all the requirements concerning initialization and shut down:

  Upstream requirements: , ,
⌈
The J1939Tp module shall have two global states, `J1939TP_ON` and `J1939TP_OFF`.
⌋

  Upstream requirements: ,
⌈
The J1939Tp module shall be in the `J1939TP_OFF` state after power up.
⌋

In the state `J1939TP_OFF`, the J1939Tp allows for an update of the post build configuration.

  Upstream requirements: , ,
⌈
The J1939Tp module shall perform segmentation and reassembly tasks only when the J1939Tp is in the `J1939TP_ON` state.
⌋

  Upstream requirements:
⌈
The global state (see ) shall be used to check if the module has been initialized before calling an API.
⌋

### 20. Communication with the 下层 Layer
*原文标题：Communication with the Lower Layer*

Upstream requirements:
⌈
All service interfaces provided to the lower layer shall be independent of the internal communication configuration and implementation of the J1939Tp.
⌋

⌈
J1939Tp shall send the transport frames TP.CM and TP.DT and direct frames using the service function `LSduR_J1939TpTransmit`().
⌋

### 21. Transmission Confirmation

The transmission confirmation `J1939Tp_TxConfirmation`() is called by CanIf via LSduR to notify J1939Tp of successful or failed transmission of an N-PDU.

⌈
When `J1939Tp_TxConfirmation`() is called with result E_NOT_OK, the J1939Tp module shall abort the corresponding session.
⌋

For transmitting sessions, the session abort is defined in , while  defines the behavior in case of a receiving session. The J1939Tp shall not try to send an abort frame (as defined by ) in this case.

### 22. Reception Indication

The J1939Tp module shall provide a `J1939Tp_RxIndication`() API to allow the CanIf to notify via the LSduR that a new N-PDU has been received (see ).

CanIf shall perform the Reception Indication according to its configuration (i.e. in ISR context if configured so).

### 23. Internal 行为
*原文标题：Internal Behavior*

### 24. Session 处理
*原文标题：Session Handling*

### 25. Close Transmission

⌈
When the transport transmission session is successfully completed, the J1939Tp module shall call a notification service of the upper layer, `PduR_J1939TpTxConfirmation`(), with the result E_OK, to notify that the N-SDU transfer is successfully processed.
⌋

### 26. Abort Transmission

⌈
An Abort Transmission feature shall indicate the upper layer that the transmission of a given N-SDU has been aborted. It uses the callback function `PduR_J1939TpTxConfirmation`() with E_NOT_OK.
⌋

### 27. Close Reception

⌈
A close connection feature shall indicate the upper layer that the transport reception session is completed. It uses the `PduR_J1939TpRxIndication`() with E_OK to indicate that the N-SDU reception is successfully processed.
⌋

### 28. Abort Reception

⌈
An Abort Reception feature shall indicate the upper layer that the reception of a given N-SDU has been aborted. It uses the `PduR_J1939TpRxIndication`() with state E_NOT_OK.
⌋

### 29. Abort CMDT Connection

⌈
An Abort CMDT Connection feature shall indicate to the other ECU participating in the concerned connection that the current CMDT session (transmission or reception) cannot be completed successfully. A TP.`Conn_Abort` abort message shall be transmitted to the other ECU via CAN as specified by SAE J1939-21.
⌋

Sending a TP.`Conn_Abort` is necessary every time an error happens after TP.`CM_CTS` has been successfully sent or received, and is advisable already after transmission or reception of TP.`CM_RTS`. The connection abort reason of the TP.`Conn_Abort` shall be set according to SAE J1939-21.

### 30. N-SDU Reception

Reception of an N-SDU is always initiated by the reception of a TP.CM message. In case of CMDT, this is a TP.`CM_RTS`, in case of BAM a TP.`CM_BAM`.

⌈
Depending on the control byte of the initializing TP.CM frame (TP.`CM_BAM` or TP.`CM_RTS`), the J1939Tp module shall use the variant BAM or CMDT of the J1939 transport protocol to handle the data reception.
⌋

⌈
When receiving an N-PDU containing a TP.`CM_BAM` or a TP.`CM_RTS` the J1939Tp module shall first notify the upper layer (PDU Router) before processing the frame reassembly. It uses the `PduR_J1939TpStartOfReception`() function with the following parameters:

* the Identifier of the corresponding N-SDU,
* depending on the configured meta data items: the SA, DA and Priority,
* the total Data Length (after reassembly) and
* a pointer to a location where the upper layer stores its currently available buffer size.
⌋

⌈
After the reception of an N-PDU containing a TP.DT frame, the function `PduR_J1939TpCopyRxData`() shall be called with the following parameters:

* the Identifier of the corresponding N-SDU,
* info with max. 7 bytes of data,
* a pointer to a location where the upper layer stores its currently available buffer size.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. N-SDU Transmission

The upper layer (PDU Router) asks for the transmission of an N-SDU by calling `J1939Tp_Transmit`(). The parameters of `J1939Tp_Transmit`() describe the Identifier of the N-SDU (TxPduId) and a reference to a PduInfoType that indicates the full length of the N-SDU to transmit (full Tx N-SDU data length) and a pointer to the payload N-SDU, which may contain meta data with SA, DA and Priority depending on the meta data configuration of the N-SDU.

⌈
When configured, the transport protocol variant (BAM/CMDT, see J1939TpTxProtocolType) and the SA/DA (see J1939TpTxSa/J1939TpTxDa) shall be used for transmission. For N-SDUs with meta data, these parameters are optional. If SA or DA is not configured, the value provided via the meta data shall be used. If the transport protocol is not configured, it shall be chosen based on the actual DA: BAM when DA is 0xFF, CMDT otherwise.
⌋

⌈
The function `J1939Tp_Transmit`() shall use the TxPduId and the SduLength provided in the PduInfoType structure. It shall not use the payload of N-SDUs, only the contained meta data.
⌋

⌈
After a transmission request from the upper layer, the J1939Tp module shall initiate the transmission by sending:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 数据 Flow on the CAN Bus
*原文标题：Data Flow on the CAN Bus*

### 33. 数据 Flow using Direct Transmission
*原文标题：Data Flow using Direct Transmission*

The following figure shows an example of direct message transmission between two ECUs using J1939Tp. This is the only case of transmission of a J1939Tp N-SDU using no TP.CM or TP.DT frame. The SA is always included in the CAN identifier. Depending on the PDU Format of the PGN, the CAN Identifier might contain the DA.

### 34. 数据 Flow using CMDT
*原文标题：Data Flow using CMDT*

The following figure shows an example of segmented message transmission between two ECUs using CMDT as transport protocol variant. The CMDT transport protocol variant is used for peer-to-peer communication (i.e. 1 to 1 communication, like physical addressing in UDS diagnostics). In the example, the transmitted PG has a total length of 16 bytes, which corresponds to 3 blocks of 7 bytes.

The J1939 transport protocol uses the initial sequence of RTS and CTS to determine the number of packets per block.

⌈
If J1939TpTxDynamicBlockCalculation is enabled, after `J1939Tp_Transmit`() has been called, the J1939Tp shall call `PduR_J1939TpCopyTxData`() once with info->SduLength set to 0 and retry set to `NULL_PTR` to obtain the available amount of data via availableDataPtr.
⌋

⌈
If J1939TpTxDynamicBlockCalculation and J1939TpTxMaxPacketsPerBlock are enabled, the J1939Tp shall compare the available amount of data returned by `PduR_J1939TpCopyTxData`() to J1939TpTxMaxPacketsPerBlock and use use the smaller of these two values to calculate the maximum number of packets field of the TP.`CM_RTS` message.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 数据 Flow using BAM
*原文标题：Data Flow using BAM*

Upstream requirements:
⌈
J1939Tp shall implement the BAM related timing constraints (50ms or J1939TpTxBamTiming, Tr, T1) as described in SAE J1939-21. They supervise the BAM data flow.
⌋

⌈
If a timeout occurs during the BAM reception, the J1939Tp module shall abort the reception session as specified in .
⌋

⌈
After a sequence error, J1939Tp shall abort BAM connections as specified in .
⌋

The following figure shows an example of segmented message transmission between two ECUs using BAM as transport protocol variant according to SAE J1939-21. The BAM transport protocol variant is used for a broadcast communication (i.e. 1 to n communication, like functional addressing in UDS diagnostics). In the example, the transmitted PG has a total length of 3 blocks of 7 bytes that have to be successively transmitted.

### 36. N-SDU Buffer 管理
*原文标题：N-SDU Buffer Management*

J1939Tp shall have no internal PDU buffers. It requests data for sending directly from the upper layers via `PduR_J1939TpCopyTxData`() and provides received data directly to the upper layers via `PduR_J1939TpCopyRxData`().

To guarantee data consistency, the complete buffer of the upper layers must be locked during the whole data transmission or reception.

Data transmission is initialized when the PduR calls `J1939Tp_Transmit`() and is active after J1939Tp executed this call successfully until J1939Tp calls `PduR_J1939TpTxConfirmation`():

Data reception is initialized when J1939Tp calls `PduR_J1939TpStartOfReception`() and is active after the PduR executed this call successfully until J1939Tp calls `PduR_J1939TpRxIndication`():

### 37. Relationship between N-SDU and N-PDU in J1939Tp

This subsection describes the relation that exists between an N-SDU and the set of N-PDUs that is required to transport the N-SDU data, as shown in the following figure.

The N-PDUs as well as the N-SDU may use meta data. In that case, the N-SDU stands for a certain PGN, and the N-PDUs stand for TP.CM, TP.DT, and direct PG, regardless of source and/or destination addresses.

⌈
During reception, the N-SDU is identified by a combination of the PGN included in the payload of TP.CM and, when the N-SDU has no meta data, from the addressing information implicitly encoded in the NPduIds or explicitly provided via the meta data of the N-PDUs.
⌋

⌈
During transmission, the relevant set of N-PDUs is identified by the configured SA/DA of N-SDUs without meta data, or by the SA/DA explicitly provided in the meta data by the upper layer.
⌋

### 38. Concurrent Connections

Connections only concern internal J1939Tp purposes. They are transparent for the upper and lower layers of J1939Tp but influence the handling of J1939Tp.

A J1939Tp connection is characterized by its direction (Receiving /Sending) and its type (BAM / CMDT / Direct). A J1939Tp connection of type BAM or CMDT uses the following transport related frames:

* control (TP.CM)
* data (TP.DT)

The CAN identifier corresponding to those transport specific frames is the same for all J1939 PGs longer than 8 bytes that are

* sent from a given SA in the case of BAM, or
* sent from a given SA to a given DA in the case of CMDT.

This constrains the possibility for J1939Tp to process concurrent connections.

⌈
The J1939Tp shall be able to handle connections in parallel for all N-SDUs that do not interfere in the usage of TP.DT frames with the same SA and DA. For channels with defined SA/DA and protocol type, only one TP connection and one direct connection for each PG can be open at any time. For channels with variable SA/DA, the maximum number of parallel connections is limited by the number of N-SDUs assigned to this channel.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. N-PDU Padding

⌈
The SAE J1939 Transport Layer module shall send TP.DT frames always with 8 bytes according to SAE J1939-21.
⌋

  Upstream requirements:
⌈
According to SAE J1939-21, all unused data bytes within the last TP.DT frame or the direct frame shall be set to 0xFF (SNA).
⌋

### 40. 处理 of Unexpected N-PDU Arrivals
*原文标题：Handling of Unexpected N-PDU Arrivals*

Upstream requirements:
⌈
The J1939Tp shall ignore unexpected N-PDUs that do not correspond to a currently active connection.
⌋

⌈
If J1939TpTxRetrySupport is disabled, when a TP.`CM_CTS` is received while TP.DT messages are being transmitted, J1939Tp shall abort the connection as specified in  and in  with connection abort reason 4 (CTS messages received when data transfer is in progress).
⌋

⌈
When a TP.`CM_RTS` is received for a currently active connection, the J1939Tp shall stop this connection as specified in  and start a new connection as described in .
⌋

### 41. API Parameter Checking

`J1939TP_E_PARAM_POINTER` shall be reported as specified in  by .

  Upstream requirements: ,
⌈
If development error detection for the J1939Tp is enabled via J1939TpDevErrorDetect, all APIs using a SDU- or PDU-Identifier shall check the input Identifier and raise the development error `J1939TP_E_INVALID_PDU_SDU_ID` in case the API has been called for a not configured PDU or SDU.
⌋

### 42. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, this section specifies particular errors arranged in the respective subsections below.

### 43. Development 错误
*原文标题：Development Errors*

Definition of development errors in module J1939Tp
  Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service used in state J1939TP_OFF | J1939TP_E_UNINIT | 0x01 |
| J1939Tp_Init() called in state J1939TP_ON. | J1939TP_E_REINIT | 0x02 |
| J1939Tp_Init() was called with an invalid configuration pointer | J1939TP_E_INIT_FAILED | 0x03 |
| API service called with null pointer. | J1939TP_E_PARAM_POINTER | 0x10 |
| API service called with wrong ID. | J1939TP_E_INVALID_PDU_SDU_ID | 0x11 |

⌋

### 44. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module J1939Tp
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Timeout occurred on receiver side after reception of an intermediate TP.DT frame of a block. | J1939TP_E_TIMEOUT_T1 | 0x30 |
| Timeout occurred on receiver side after transmission of a TP.CM/CTS frame. | J1939TP_E_TIMEOUT_T2 | 0x31 |
| Timeout occurred on transmitter side after transmission of the last TP.DT frame of a block. | J1939TP_E_TIMEOUT_T3 | 0x32 |
| Timeout occurred on transmitter side after reception of a TP.CM/CTS(0) frame. | J1939TP_E_TIMEOUT_T4 | 0x33 |
| Timeout occurred on transmitter or receiver side while trying to send the next TP.DT or TP.CM frame. | J1939TP_E_TIMEOUT_TR | 0x34 |
| Timeout occurred on receiver side while trying to send the next TP.CM/CTS frame after a TP.CM/CTS(0) frame. | J1939TP_E_TIMEOUT_TH | 0x35 |
| Invalid value for "total message size" in received TP.CM/RTS frame. | J1939TP_E_INVALID_TMS | 0x40 |
| Value for "total number of packets" in received TP.CM/RTS frame does not match the "total message size". | J1939TP_E_INVALID_TNOP | 0x41 |

Invalid value for "maximum number of packets" in received TP.CM/RTS frame.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 46. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 47. API 规范
*原文标题：API Specification*

### 48. Imported 类型
*原文标题：Imported Types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module J1939Tp
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Comtype | ComStack_Types.h | BufReq_ReturnType |
| ^ | ComStack_Types.h | PduIdType |
| ^ | ComStack_Types.h | PduInfoType |
| ^ | ComStack_Types.h | PduLengthType |
| ^ | ComStack_Types.h | RetryInfoType |
| ^ | ComStack_Types.h | TpDataStateType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 49. 类型定义
*原文标题：Type Definitions*

### 50. J1939Tp_ConfigType

Definition of datatype `J1939Tp_ConfigType`
⌈
| Name | J1939Tp_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | The content of the initialization data structure is implementation specific. |
| Description | Data structure containing post-build configuration data of J1939-TP. | < |
| Available via | J1939Tp.h | < |

⌋

The `J1939Tp_ConfigType` defines a structure that contains configuration parameters J1939Tp uses at run time. It is provided as an argument to `J1939Tp_Init`().

### 51. 功能定义
*原文标题：Function Definitions*

This section defines a list of functions provided for upper layer modules.

### 52. J1939Tp_Init

Definition of API function `J1939Tp_Init`
  Upstream requirements: ,
⌈
| Service Name | J1939Tp_Init | < |
|---|---|---|
| Syntax | void J1939Tp_Init ( |  |

  const `J1939Tp_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to configuration data structure. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function initializes the J1939Tp module. | < |
| Available via | J1939Tp.h | < |

⌋

After power up, J1939Tp is in a state called `J1939TP_OFF`. In this state, J1939Tp is not yet configured, and therefore cannot perform any communication task. The J1939Tp module's environment (usually the ECU Manager) will call `J1939Tp_Init`() before using the J1939Tp module for further processing.

  Upstream requirements:
⌈
The function `J1939Tp_Init`() shall initialize all global variables of the module and reset all transport protocol connections.
⌋

⌈
`J1939Tp_Init`() shall change to the internal state `J1939TP_ON` after successful initialization.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 53. J1939Tp_Shutdown

Definition of API function `J1939Tp_Shutdown`
  Upstream requirements:
⌈
| Service Name | J1939Tp_Shutdown | < |
|---|---|---|
| Syntax | void J1939Tp_Shutdown ( |  |

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
| Description | This function is used to shutdown the J1939Tp module. | < |
| Available via | J1939Tp.h | < |

⌋

To close down communication, the state handling (usually the ECU Manager) calls `J1939Tp_Shutdown`().

⌈
`J1939Tp_Shutdown`() shall close all pending transport protocol connections, free all resources and set the J1939Tp module into the global state `J1939TP_OFF` state.
⌋

⌈
`J1939Tp_Shutdown`() shall not raise a notification about the pending frame transmission or reception.
⌋

### 其余 52 章（内容从略，见纯文本全文）

54. J1939Tp_Transmit
55. J1939Tp_CancelTransmit
56. J1939Tp_CancelReceive
57. J1939Tp_RxIndication
58. J1939Tp_TxConfirmation
59. Scheduled Functions
60. J1939Tp_MainFunction
61. Expected 接口
62. Mandatory 接口
63. Optional 接口
64. 时序图
65. Reception of Direct PG
66. Reception via BAM
67. Reception via CMDT
68. Transmission of Direct PG
69. Transmission via BAM
70. Transmission via CMDT
71. 处理 of Retry during CMDT Transmission
72. 配置规范
73. Containers and 配置 Parameters
74. J1939Tp
75. J1939TpGeneral
76. J1939TpConfiguration
77. J1939TpRxChannel
78. J1939TpRxCmNPdu
79. J1939TpRxDtNPdu
80. J1939TpRxPg
81. J1939TpRxDirectNPdu
82. J1939TpRxNSdu
83. J1939TpTxFcNPdu
84. J1939TpTxChannel
85. J1939TpRxFcNPdu
86. J1939TpTxCmNPdu
87. J1939TpTxDtNPdu
88. J1939TpTxPg
89. J1939TpTxDirectNPdu
90. J1939TpTxNSdu
91. 附录
92. 不适用需求
93. Change History of AUTOSAR Traceable Items
94. Traceable Item History of this Document According to AUTOSAR Release R26-11
95. Added 规范 Items in R26-11
96. Changed 规范 Items in R26-11
97. Deleted 规范 Items in R26-11
98. Traceable Item History of this Document According to AUTOSAR Release R25-11
99. Added 规范 Items in R25-11
100. Changed 规范 Items in R25-11
101. Deleted 规范 Items in R25-11
102. Traceable Item History of this Document According to AUTOSAR Release R24-11
103. Added 规范 Items in R24-11
104. Changed 规范 Items in R24-11
105. Deleted 规范 Items in R24-11
