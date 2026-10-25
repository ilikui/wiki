# Specification of PDU Router (`PDURouter`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 035 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_PDURouter_035\AUTOSAR_CP_SWS_PDURouter.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_PDURouter_035\AUTOSAR_CP_SWS_PDURouter.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_PDURouter_035\zzgen\CP_SWS_PDURouter.complete.txt`

## 文档简介

This specification describes the functionality and APIs of the AUTOSAR PDU Router (PduR) module.

The PDU Router module provides services for routing I-PDUs (Interaction Layer Protocol Data Units) using the following module types:

* Communication interface modules, that use the <Provider:Up> or <Provider:Lo> APIs, e.g. Com, IPduM, CanNm, FrNm, LSduR;
* Transport Protocol modules, that use the <Provider:UpTp> or <Provider:LoTp> APIs, e.g. J1939Tp, CanTp, FrTp, LinTp (part of LinIf connected via LSduR), Com, Dcm.

The routing of I-PDUs is performed based on statically defined I-PDU identifiers. No I-PDU is routed dynamically during run-time, e.g. dependent on its payload.

The location of related modules can be "upper" (e.g. Dlt, Dcm, Com, IpduM) and/or "lower" (CanIf, FrIf, LinTp, IpduM, CanNm, FrNm). Note that the IpduM is listed as an upper and a lower module because it has two different roles (lower: communication between Com module and IpduM module, upper: communication between IpduM module and lower layer communication interface module).

The PDU Router module is based on a generic approach of interfaced modules. The module that is interfaced is configured in the PDU Router module configuration. The listed modules in parenthesis in the previous paragraph are just examples, and not an exhaustive list. The PDU Router can be easily configured to support other upper and lower layer modules. This approach also allows to integrate Complex Device Drivers (CDDs) as upper or lower layer modules of the PDU Router.

The list of users of the PDU Router module is not fixed. The most common combination of upper and lower layer pairs is listed below:

* Diagnostic Communication Manager (Dcm) and Transport Protocol modules,
* Com and Communication Interface modules, Transport Protocol modules or I-PDU Multiplexer,
* I-PDU Multiplexer and Communication Interface modules.

## 模块依赖

The PDU Router module depends on the APIs and capabilities of the used communication hardware abstraction layer modules and the used communication service layer modules. Basically the API functions required by the PDU Router module are:

Communication Interface modules:

* <Lo>_Transmit (e.g. `CanIf_Transmit`, `FrIf_Transmit`, `LinIf_Transmit`)
* <Lo>_CancelTransmit (e.g. `FrIf_CancelTransmit`)

Transport Protocol Modules:

* <LoTp>_Transmit (e.g. `CanTp_Transmit`, `FrTp_Transmit`, `LinTp_Transmit`)
* <LoTp>_CancelTransmit (e.g. `CanTp_CancelTransmit`, `FrTp_CancelTransmit`)
* <LoTp>_CancelReceive (e.g. `CanTp_CancelReceive`, `FrTp_CancelReceive`)

Upper layer modules which use Transport Protocol modules:

* <Up>_StartOfReception (e.g. `Dcm_StartOfReception`)
* <Up>_CopyRxData (e.g. `Dcm_CopyRxData`)
* <Up>_CopyTxData (e.g. `Dcm_CopyTxData`)
* <Up>_TpRxIndication (e.g. `Dcm_TpRxIndication`)
* <Up>_TpTxConfirmation (e.g. `Dcm_TpTxConfirmation`)

Upper layer modules which process I-PDUs originating from Communication Interface modules:

* <Up>_RxIndication (e.g. `Com_RxIndication`),
* <Up>_TxConfirmation (e.g. `Com_TxConfirmation`),
* <Up>_TriggerTransmit (e.g. `Com_TriggerTransmit`)

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality and APIs of the AUTOSAR PDU Router (PduR) module.

The PDU Router module provides services for routing I-PDUs (Interaction Layer Protocol Data Units) using the following module types:

* Communication interface modules, that use the <Provider:Up> or <Provider:Lo> APIs, e.g. Com, IPduM, CanNm, FrNm, LSduR;
* Transport Protocol modules, that use the <Provider:UpTp> or <Provider:LoTp> APIs, e.g. J1939Tp, CanTp, FrTp, LinTp (part of LinIf connected via LSduR), Com, Dcm.

The routing of I-PDUs is performed based on statically defined I-PDU identifiers. No I-PDU is routed dynamically during run-time, e.g. dependent on its payload.

The location of related modules can be "upper" (e.g. Dlt, Dcm, Com, IpduM) and/or "lower" (CanIf, FrIf, LinTp, IpduM, CanNm, FrNm). Note that the IpduM is listed as an upper and a lower module because it has two different roles (lower: communication between Com module and IpduM module, upper: communication between IpduM module and lower layer communication interface module).

The PDU Router module is based on a generic approach of interfaced modules.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. AUTOSAR 架构
*原文标题：AUTOSAR architecture*

The PDU Router module is a central module in the AUTOSAR communication structure .  gives an overview of the AUTOSAR communication structure.

### 3. PDU Router 模块功能概述
*原文标题：PDU Router module function overview*

The PDU Router module is part of the AUTOSAR Basic SW, and is mandatory instantiated in every AUTOSAR ECU.

The detailed PDU Router module structure is shown in .

The PDU Router module mainly consists of two parts:

* The PDU Router routing paths: static routing paths describing the routing attributes for each I-PDU to be routed. The routing paths can be (if supported) updated post-build loadable in the programming state of the ECU or selected when initializing the PDU Router by post-build selectable (see section ).
* The PDU Router Engine: the actual code performing routing actions according to the PDU Router routing paths. The PDU Router Engine has to deal with:

  * Routing the I-PDU from source(s) to destination(s),
  * Translating the source I-PDU ID to the destination I-PDU ID (e.g. `PduR_ComTransmit` to `CanIf_Transmit`, `PduR_CanIfTxConfirmation` to `Com_TxConfirmation`).

### 4. I-PDU 处理
*原文标题：I-PDU handling*

I-PDUs are identified by static I-PDU IDs. The PDU Router module determines the destination of an I-PDU by using the I-PDU ID in a static configuration table. I-PDUs are used for the data exchange of the modules directly above the PDU Router module, e.g. the Com module and Dcm module. The routing operation of the PDU Router module does not modify the I-PDU, it simply forwards the I-PDU to the destination module. In case of TP gatewaying, forwarding the I-PDU to the destinaiton(s) may start before the full I-PDU is received ("on-the-fly gatewaying").

The I-PDU ID is set in the configuration that also implements the API. This will allow an efficient implementation of look-up tables in each module receiving an I-PDU ID (e.g. the PDU Router module's configuration contains the I-PDU ID for the `PduR_CanIfTxConfirmation`, while CanIf module's configuration contains the I-PDU ID for the `CanIf_Transmit`).

The following list summarizes the routing capabilities of PduR:

# I-PDU Forwarding

  * Transmission from upper layer

    * Communication Interface

      * Singlecast (1:1) an I-PDU from a local module to a communication interface module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The following acronyms and abbreviations have a local scope and are therefore not contained in the AUTOSAR glossary.

| Acronym: | Description: |
|---|---|
| data provision | Provision of data to interface modules. |

# direct data provision: data to be transmitted are provided directly at the transmit request. The destination Communication Interface may behave in two ways, either copy the data directly or defer the copy to a trigger transmit.
# trigger transmit data provision: data to be transmitted are not provided at the transmit request, but will be retrieved by the Communication Interface module via a callback function.
| FIFO buffering | Buffer concept, which uses first in first out strategy. |
|---|---|
| last-is-best buffering | Buffering strategy where the latest value overwrites the last value. |
| Lower Layer Modules (Lo) | Modules below the PDU Router. This layer may include CAN, LIN, FlexRay, Ethernet Communication Interface modules and the respective TP modules. |
| multicast operation (Lo) | Simultaneous transmission of PDUs to a group of receivers, i.e. 1:n routing. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 相关文档
*原文标题：Related documentation*

### 7. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 8. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for PDU Router.

Thus, the specification SWS BSW General shall be considered as additional and required specification for PDU Router.

### 9. 约束与假设
*原文标题：Constraints and assumptions*

### 10. 限制
*原文标题：Limitations*

The PDU Router module does not:

* have mechanisms for signal extraction or conversion,
* have mechanisms for data integrity checking (like checksums),
* change or modify the I-PDU,
* make any PDU payload dependent routing decisions,
* support routing between TP modules and Communication Interface modules or vice versa,
* support routing of I-PDUs between Communication Interface modules with rate conversion. (This functionality will be supported in cooperation with an upper layer module, e.g. the Com module).

### 11. 限制 on supported functionality
*原文标题：Limitations on supported functionality*

The PDU Router module supports fan-out of I-PDUs transmitted from a local module (e.g. Com module) to more than one destinations. There are some limitations if the I-PDU shall be transmitted to more than one destination (fan-out 1:n; n>1), because the upper layer module is not aware how many destinations there are:

* The PDU Router reports E_OK for a Transmit request from an upper layer if at least one destination lower layer reports E_OK.
* The PDU Router gives a TxConfirmation to the upper layer when it receives the last TxConfirmation from destination lower layer.
* The PDU Router returns E_OK for a CancelTransmit requested from the upper layer only if all destination lower layers return E_OK.

If the I-PDU fan-out is performed by the PDU Router, this has further consequences for the Com as upper layer module:

* Update bits will not work.
* The TxConfirmation of the Communication Interface API will be handled in the way that the local module (e.g. Com module) will be informed when the last destination has confirmed the transmission. This means that deadline monitoring is made with respect to the last TxConfirmation (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 适用的车型领域
*原文标题：Applicability to car domains*

The PDU Router is used in all ECUs where communication is necessary.

The PDU Router module has not been specified to work with MOST communication network. Thus the applicability to multimedia and telematic car domains may be limited.

### 13. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The PDU Router module depends on the APIs and capabilities of the used communication hardware abstraction layer modules and the used communication service layer modules. Basically the API functions required by the PDU Router module are:

Communication Interface modules:

* <Lo>_Transmit (e.g. `CanIf_Transmit`, `FrIf_Transmit`, `LinIf_Transmit`)
* <Lo>_CancelTransmit (e.g. `FrIf_CancelTransmit`)

Transport Protocol Modules:

* <LoTp>_Transmit (e.g. `CanTp_Transmit`, `FrTp_Transmit`, `LinTp_Transmit`)
* <LoTp>_CancelTransmit (e.g. `CanTp_CancelTransmit`, `FrTp_CancelTransmit`)
* <LoTp>_CancelReceive (e.g. `CanTp_CancelReceive`, `FrTp_CancelReceive`)

Upper layer modules which use Transport Protocol modules:

* <Up>_StartOfReception (e.g. `Dcm_StartOfReception`)
* <Up>_CopyRxData (e.g. `Dcm_CopyRxData`)
* <Up>_CopyTxData (e.g. `Dcm_CopyTxData`)
* <Up>_TpRxIndication (e.g. `Dcm_TpRxIndication`)
* <Up>_TpTxConfirmation (e.g. `Dcm_TpTxConfirmation`)

Upper layer modules which process I-PDUs originating from Communication Interface modules:

* <Up>_RxIndication (e.g. `Com_RxIndication`),
* <Up>_TxConfirmation (e.g. `Com_TxConfirmation`),
* <Up>_TriggerTransmit (e.g. `Com_TriggerTransmit`)

### 14. 文件结构
*原文标题：File structure*

### 15. 代码文件结构
*原文标题：Code file structure*

For details refer to the Chapter 5.1.6 "Code file structure" in .

The code file structure is not defined within this specification completely. However to allow integration to other modules the following structure is needed.

### 16. 头文件结构
*原文标题：Header file structure*

Upstream requirements:
⌈
The PDU Router module shall provide the functions used by the different modules in separate header files.
⌋

Example: If CanIf, CanTp and FrIf are used then the PDU Router module shall provide `PduR_CanIf`.h, `PduR_CanTp`.h and `PduR_FrIf`.h.

  Upstream requirements:
⌈
The PduR implementation shall include Det.h.
⌋

  Upstream requirements:
⌈
All PDU Router header files shall contain a software and specification version number.
⌋

This structure allows the separation between platform, compiler and implementation specific definitions and declarations from general definitions as well as the separation of source code and configuration.

### 17. Version check

For details refer to .

### 18. 需求追踪
*原文标题：Requirements Tracing*

The following table reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All software modules shall provide version and identification information |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| Data types naming convention |  |  |
| API naming convention |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Status values naming convention |  |  |
| Classification of development errors |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 功能规范
*原文标题：Functional Specification*

The PDU Router module is an I-PDU transfer unit placed above Communication Interface and Transport Protocol modules (lower layer modules) and below Com and Dcm (upper layer modules), see .

Beside the PDU Router module there is the I-PDU Multiplexer (IpduM) module  that provides support for multiplexed I-PDUs. The IpduM has to be considered as an upper layer module when it calls the PDU Router module to Transmit multiplexed I-PDUs or when it is called by the PDU Router module for the RxIndication or TxConfirmation of multiplexed I-PDUs or to provide data via TriggerTransmit. In case the IpduM calls the PDU Router module to forward a TxConfirmation or an RxIndication to an upper layer (e.g. Com) or when it is called by the PDU Router module to update an I-PDU belonging to a multiplexed I-PDU it has to be considered as lower layer module.

From the ECU point of view, the PDU Router module can perform three different classes of operations:

* PDU Reception to local module(s):

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. I-PDU 处理
*原文标题：I-PDU handling*

Upstream requirements:
⌈
The PDU Router module shall transfer an I-PDU without modification in a consistent manner from the source module to the destination module(s).
⌋

An I-PDU is identified by the I-PDU ID and/or the symbolic name (i.e. the SymbolicNameValue of the container of the I-PDU ). For post-build the I-PDU ID is required because the I-PDU must be identified after the PDU Router module is compiled. If the PDU Router module is pre-compile (i.e. in source code) the symbolic names may be used, see .

Each BSW module that handles I-PDUs and provides an API for I-PDUs must contain a list of I-PDU IDs . This means that each called module will have a look-up table identifying the I-PDU.

Example: The Com module calls `PduR_ComTransmit` (here the PDU Router module configuration contains the I-PDU ID), the PDU Router module will call `CanIf_Transmit` (here the CanIf module configuration contains the I-PDU ID), the CanIf will call `PduR_CanIfTxConfirmation` (here the PDU Router module configuration contains the I-PDU ID), and PDU Router module will call `Com_TxConfirmation` (here the Com module configuration contains the I-PDU ID).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 缓冲 concept
*原文标题：Buffering concept*

PduR shall be able to buffer I-PDUs. A routing path is expected to buffer I-PDUs when its related PduRQueueDepth is set. As of today, I-PDU buffering is applicable only for gatewayed I-PDUs and for fan-in reception from multiple comunication interface modules to a local module. Buffering is mandatory in the following cases:

* IF gateway destinations having trigger transmit data provision,
* TP gateways.

In the following chapter the term "FIFO" or "FIFO queue" is used as a synomym for the I-PDU buffer of the PduR. The following subsections explains the type of buffers, their configuration possibilities and relation to routhing paths.

### 22. 类型 of buffers
*原文标题：Type of buffers*

Buffers can be defined by PduRBuffer container. There are two types of buffers from routhing paths' assingment point of view. PduRBuffer which are not referred by any PduRRoutingPath are called global buffers, while the ones which are referred by at least one PduRRoutingPath are the dedicated buffers. Global buffers can be occupied by any PduRRoutingPaths, while dedicated buffers can be occupied only by the PduRRoutingPaths by which they are referred to via PduRDestBufferRef.

The main reason for having dedicated buffers is that functional diagnostic requests and especially OBD request have a very high priority and must not be delayed by buffer allocation strategies that occur because of the lack of memory.

  Upstream requirements: ,
⌈
When an I-PDU needs to get buffered, and the required size is not larger than the configured PduRPduMaxLength of at least one of the free dedicated buffers (PduRBuffer referenced by PduRDestBufferRef), the PduR shall use that dedicated buffer with respect to PduRQueueDepth.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 缓冲 strategies
*原文标题：Buffering strategies*

The type of buffering strategy is deteremined by the value of PduRQueueDepth configuration parameter. This parameter specifies the maximum number of PduRBuffers a routing path can occupy simoultanously: PduRBuffers can be taken from the dedicated buffers and form the global buffers (for buffer types see  Section). Since a PduRBuffer can hold zero or one I-PDU, PduRQueueDepth implicitly specifies the number of I-PDUs a routing path can buffer.

If the value of PduRQueueDepth is greater than 1, FIFO queue buffering is available. The FIFO has states, and these states may change when various PduR APIs are being called from different contexes. E.g., a PduR_<SrcLo>RxIndication call could be interrupted by a PduR_<DstLo>TxConfirmation call. Thus, there is a need to protect those concurrent calls.

  Upstream requirements: ,
⌈
If PduRQueueDepth is configured to a value greater than 1, the I-PDU buffer shall have a first in - first out (FIFO) behavior.
⌋

  Upstream requirements: ,
⌈
In case of FIFO buffering, when a new I-PDU needs to get buffered, and the FIFO queue is not empty then the new I-PDU shall be copied as latest entry.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Buffer sharing

On configuration level, it is possible for a PduRBuffer to be referred by multiple PduRDestBufferRefs. Such PduRBuffer can be occupied by any of the referrer PduRRoutingPaths as dedicated buffer, but during runtime, at a specific moment, it can be occupied by only one PduRRoutingPath.

### 25. 缓冲 in case of fan-in and multicast routings
*原文标题：Buffering in case of fan-in and multicast routings*

In case of N:1 (fan-in) and 1:N (multicast) routing, PduRQueueingStrategy parameter determines whether Routing Paths referring to the same source or destination use a shared common queue, or whether each source/destination has its own dedicated queue with the following rules:

* Fan-in: all PduRRoutingPaths shall have their PduRQueueingStrategy set to `PDUR_COMMON_QUEUE`.
* Multicast: PduRQueueingStrategy can either be `PDUR_COMMON_QUEUE` or `PDUR_DEDICATED_QUEUE`.

 PduRQueueingStrategy setting constraint for fan-in/fan-out PduRRoutingPaths that share the same source or destination.
⌈
In case of a fan-in or fan-out operation, all PduRRoutingPaths that refer to the same source or destination shall have the same PduRQueueingStrategy setting.
⌋

 Constraint for setting PduRQueueingStrategy for PduRRoutingPath destinations in a fan-in operation.
⌈
In case of a fan-in operation, all PduRRoutingPaths that refer to the same destination shall have the PduRQueueingStrategy set to `PDUR_COMMON_QUEUE`.
⌋

 PduRQueueingStrategy constraint for PduRDestBufferRef setting.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. I-PDU Reception to 上层 layer 模块(s)
*原文标题：I-PDU Reception to upper layer module(s)*

The receive operation of the PDU Router module is always finalized by an RxIndication (PduR_<User:Lo>RxIndication or PduR_<User:LoTp>RxIndication) from a lower layer module (Communication Interface or Transport Protocol module). The RxIndication function is originated from the lower layer either in the context of a cyclic function after polling a communication driver or in the context of an interrupt.

### 27. Communication 接口
*原文标题：Communication Interface*

The source Communication Interface module indicates a received I-PDU by calling PduR_<User:Lo>RxIndication. The I-PDU may have multiple local destination modules configured by the routing path.

  Upstream requirements: ,
⌈
The PDU Router module shall provide 1:n routing for an I-PDU received from a Communication Interface module and routed to one or more upper layer module(s).
⌋

Example: An I-PDU is received on CanIf and forwarded to Com.

Note: An I-PDU may be received by one or more upper layer modules in the same time as gatewayed to one or more Communication Interface destinations, see .

  Upstream requirements:
⌈
When the PduR_<User:Lo>RxIndication is called the PDU Router module shall call <Up>_RxIndication for each destination upper layer module.
⌋

  Upstream requirements:
⌈
If an I-PDU received by a local module is directly forwarded, the PDU Router shall not check the length of the I-PDU.
⌋

Since the PDU Router module will not buffer this I-PDU it does not have to reject I-PDU that are longer/shorter than configured.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 传输协议
*原文标题：Transport Protocol*

The standard use case for reception of I-PDU through Transport Protocol is only one upper layer module configured per routing path.

In case of multiple Software Clusters, this I-PDU may also be received by several upper layer modules.

Example: A functional addressed request is received from the CanTp module (residing in the Host Software Cluster) and routed to two Dcm module instances (residingin different Application Software Clusters on the same partition as the Host Software Cluster).

In case source and destination reside on different partitions the inter-partition routing principles described in section  need to be taken in account.

### 29. 1：1 routing for an I-PDU received from a source 传输协议模块
*原文标题：1:1 routing for an I-PDU received from a source transport protocol module*

In case of a Transport Protocol module the PDU Router module is first notified with a start of reception notification when receiving a first frame (FF) or Single Frame (SF). This call is be forwarded to the related upper layer module by calling <Up>_StartOfReception. The payload of each segment (N-PDU) is to be copied in the upper layer destination module within the subsequent <Up>_CopyRxData calls. After reception of the last N-PDU the Transport Protocol module will indicate the PDU Router module that the complete I-PDU has been received and the PDU Router module will forward this indication to the related upper layer module by calling <Up>_TpRxIndication.

  Upstream requirements:
⌈
The PDU Router module shall provide 1:1 routing for an I-PDU received from a source Transport Protocol module and routed to one upper layer destination module.
⌋

Example: A functional addressed request (in a SF) is received from the CanTp module and routed to the Dcm module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 1：n forwarding for an I-PDU received from a source 传输协议模块
*原文标题：1:n forwarding for an I-PDU received from a source transport protocol module*

Upstream requirements:
⌈
The PDU Router module shall provide 1:n forwarding for an IPDU received from a source Transport Protocol module and routed to several upper layer destination modules.
⌋

If the I-PDU is received by more than one local upper layer modules, the forwarding to these upper layers is handled similar to direct Transport Protocol gatewaying. The PduR buffers 1:n forwarding PDUs in dedicated buffers (PduRBuffers) configured via PduRDestBufferRef and informs the upper layers in the context of RxIndication.

  Upstream requirements:
⌈
When a successful RxIndication is received by PduR from the lower layer, the module shall initiate a reception session for each configured upper layer destination: <UpTp>_StartOfReception, <UpTp>_CopyRxData, and <UpTp>_RxIndication will be called in this order.
⌋

  Upstream requirements: , , ,
⌈
In case of several local destinations, the PduR shall perform the error handling individually for each destination.
⌋

The other destinations should not be affected by the error of one destination upper layer module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 处理 I-PDUs with unknown length
*原文标题：Handling I-PDUs with unknown length*

The PduR is able to handle unknown length I-PDUs (i.e. streaming type of data) using the TP API. The definition of unknown length is indicated by TpSduLength=0.

  Upstream requirements: ,
⌈
In a local receive situation, when PduR_<User:LoTp>StartOfReception is called with TpSduLength=0, PduR shall call <Up>_StartOfReception with TpSduLength=0.
⌋

### 32. I-PDU Transmission from 上层 layer 模块(s)
*原文标题：I-PDU Transmission from upper layer module(s)*

The transmit operations of the lower layer destination modules are always asynchronous. This means that a transmission service request returns immediately after the I-PDU has been passed by the PDU Router module to the lower layer destination(s). If the PDU Router module is notified by lower layer destination modules via PduR_<User:Lo>TxConfirmation (Communication Interface) or PduR_<User:LoTp>TxConfirmation (Transport Protocol) after successful or failed transmission of the I-PDU, the PDU Router module will forward this confirmation to the upper layer module via <Up>_TxConfirmation (Communication Interface) or <Up>_TpTxConfirmation (Transport Protocol).

The transmit operation of the PDU Router module is triggered by a PDU Transmit request from an upper layer source module and the PDU Router forwards the request to lower layer destination(s).

  Upstream requirements: ,
⌈
The I-PDU shall not be buffered in the PDU Router module in case of PDU transmission from an upper layer source module.
⌋

### 33. Multicast

The multicast feature is separated to an own section since there are issues using this feature as described in Section .

Further requirements that are directly handled by the PDU Router module:

  Upstream requirements:
⌈
If the provided I-PDU ID represents a group of PDUs (multicast transmit request) and at least one of the forwarded transmit requests returns successfully, the function PduR_<User:Up>Transmit shall return E_OK.
⌋

Note that Communication Interfaces returning with E_OK will transmit their data either directly or via trigger transmit.

The other Transport Protocol modules may return E_NOT_OK, and therefore these modules will not call the PduR_<User:LoTp>CopyTxData. Since the upper layer source module has been informed that at least one transmission was successful, at least one Transport Protocol module will call PduR_<User:LoTp>CopyTxData.

  Upstream requirements: ,
⌈
If there are more than one lower layer destination modules in a transmission request (1:n, n>1), all of these modules must either be Communication Interface modules or Transport Protocol modules. Not a mix of them.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Communication 接口
*原文标题：Communication Interface*

There are three ways that I-PDUs can be transmitted on Communication Interface:

# Direct data provision - where the upper layer module is calling the PduR_<User:Up>Transmit function, the PDU Router module forwards the call to <Lo>_Transmit and the data is copied by the lower Communication Interface module in the call.
# Direct data provision - where the lower Communication Interface module requests transmission of an I-PDU by using the PduR_<User:Lo>TriggerTransmit, and PDU Router module forwards the call to <Up>_TriggerTransmit and the data is copied to the destination's buffer by the upper layer module.
# Where the upper layer module calls the PduR_<User:Up>Transmit function, the PDU Router module forwards the call to <Lo>_Transmit and the data is not copied by the lower module (Communication Interface module). The data will later be requested by the lower layer using PduR_<User:Lo>TriggerTransmit.

The confirmation of the transmission of the I-PDU is the same for the direct and trigger transmit data provision:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Trigger transmit 数据 provision
*原文标题：Trigger transmit data provision*

The upper layer module must be informed whether it has to reset the update-bits.

  Upstream requirements: ,
⌈
The PDU Router module shall forward a PduR_<User:Lo>TriggerTransmit request by the Communication Interface lower layer module to the upper layer module by calling <Up>_TriggerTransmit.
⌋

  Upstream requirements:
⌈
The PDU Router module shall copy the return value from the <Up>_TriggerTransmit to the lower layer module.
⌋

### 36. 错误处理
*原文标题：Error handling*

For errors occurred using singlecast or multicast over Communication Interface modules, no specific error handling is done. Errors in return values are forwarded to the upper layer source module.

### 37. 传输协议
*原文标题：Transport Protocol*

Transmitting I-PDU using Transport Protocol has two flavors, singlecast and multicast. A singlecast (1:1) transmission consists of one upper layer source module and one lower layer Transport Protocol destination module. A multicast (1:n, n>1) transmission consists of more than one lower layer Transport Protocol destination module. The PDU Router module will not check if the transmission request contains a single N-PDU (SF) or multiple N-PDU (FF, CF, \ldots{}).

Initiation of transmission of I-PDU is made by a PduR_<User:Up>Transmit request by an upper layer source module. The PduR will forward the request to one or more lower layer Transport Protocol destination modules using <Lo>_Transmit according to the routing paths. Note that the <Lo>_Transmit may or may not contain data.

The destination module(s) will request data by calling the PduR_<User:LoTp>CopyTxData. Retransmission (if supported by the Transport Protocol) of data is made by the RetryInfoType parameter. Finalizing the transmission the destination module(s) calls the PduR_<User:LoTp>TxConfirmation, which is forwarded to the upper layer source module.

The multicast TP transmission is described in chapter .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Multicast transmission

This subsection contains specific requirements for the multicast transmission of I-PDU using Transport Protocol modules.

Since the 1:n, n>1 routing is made in the PDU Router module the PDU Router module must request the same data several times from the upper layer source module. Also the confirmation of the multicast must be handled specifically.

As the upper layer shall copy the same data several times, the PDU Router will use the RetryInfoPtr  in order to query the same data several times. The RetryInfoPtr contains a state type called TpDataState .

Therefore the transport protocol destinations do not set the TpDataState to `TP_DATARETRY`.

  Upstream requirements:
⌈
When PduR_<User:LoTp>CopyTxData is called with a TpDataState set to `TP_DATARETRY` for a multicast TP transmission type routing path, PduR shall return E_NOT_OK.
⌋

The multicast transmission of N-PDUs is performed in a lock-step mode, where the slowest destination dictates the rate of transmission. The use-case behind the multicast multiframe transmission is the broadcast of J1939Tp BAM messages (messages like DM1 or CommandedAddress have more than 8 Bytes and need to be broadcast to several destinations).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 147 章（内容从略，见纯文本全文）

39. 错误处理
40. 处理 I-PDUs with unknown length
41. I-PDU Gatewaying
42. Communication 接口
43. Buffered gatewaying
44. Immediate gatewaying
45. 传输协议
46. Direct gatewaying
47. On-the-fly gatewaying
48. Forwarding to 上层 layers
49. 错误处理
50. Communication 接口
51. 传输协议
52. Cancel transmission
53. Cancel reception
54. Zero Copy Operation
55. Zero Cost Operation
56. 状态管理
57. Routing path groups
58. PduRRoutingPathGroup 定义
59. 初始化 of PduRRoutingPathGroups
60. Switching of PduRRoutingPathGroups
61. Complex 驱动 Interaction
62. 错误分类
63. Development 错误
64. Runtime 错误
65. Production 错误
66. Extended Production 错误
67. API parameter checking
68. Multicore Distribution
69. Intra-partition Routing Path
70. Inter-partition Routing Path
71. 上层 layer 模块 interaction
72. 下层 layer Communication 接口模块 interaction
73. 下层 layer 传输协议模块 interaction
74. Communication 接口 Gatewaying
75. 传输协议 Gatewaying
76. API 规范
77. Imported 类型
78. 类型定义
79. PduR_PBConfigType
80. PduR_PBConfigIdType
81. PduR_RoutingPathGroupIdType
82. PduR_StateType
83. 功能定义
84. 通用 functions provided by the PDU Router
85. PduR_Init
86. PduR_GetConfigurationId
87. PduR_EnableRouting
88. PduR_DisableRouting
89. Configurable 接口定义 for interaction with 上层 layer 模块
90. PduR_<User：Up>Transmit
91. PduR_<User：Up>CancelTransmit
92. PduR_<User：Up>CancelReceive
93. PduR_<User：Up>ReleaseRxBuffer
94. Configurable 接口定义 for 下层 layer communication 接口模块 interaction
95. PduR_<User：Lo>RxIndication
96. PduR_<User：Lo>TxConfirmation
97. PduR_<User：Lo>TriggerTransmit
98. Configurable 接口定义 for 下层 layer 传输协议模块 interaction
99. PduR_<User：LoTp>CopyRxData
100. PduR_<User：LoTp>RxIndication
101. PduR_<User：LoTp>StartOfReception
102. PduR_<User：LoTp>CopyTxData
103. PduR_<User：LoTp>TxConfirmation
104. Scheduled functions
105. Expected 接口
106. Mandatory 接口
107. Optional 接口
108. 时序图
109. I-PDU Reception
110. CanIf 模块 I-PDU reception
111. FrIf 模块 I-PDU reception
112. LinIf 模块 I-PDU reception
113. CanTp 模块 I-PDU reception
114. I-PDU transmission
115. CanIf 模块 I-PDU transmission
116. FrIf 模块 I-PDU transmission
117. LinIf 模块 I-PDU transmission
118. CanTp 模块 I-PDU transmission
119. Multicast I-PDU transmission on 传输协议模块
120. Gateway of I-PDU
121. Gateway between two CanIfs
122. Gateway from CAN to FlexRay
123. Gateway from CAN to LIN
124. Gateway from CAN to CAN and received by the COM 模块
125. Singlecast Gateway TP I-PDU
126. Multicast Gateway TP I-PDU with Forwarding to 上层 Layer
127. Gateway Single Frame TP I-PDU with Forwarding to 上层 Layer
128. Gateway Broadcast Announce Message of J1939Tp
129. 配置规范
130. How to read this chapter
131. Variants
132. Containers and 配置 parameters
133. PduR
134. PduRDemEventParameterRefs
135. PduRBswModules
136. PduRGeneral
137. PduRRoutingPathGroup
138. PduRRoutingPaths
139. PduRRoutingPath
140. PduRDestPdu
141. PduRSrcPdu
142. PduRDefaultValue
143. PduRDefaultValueElement
144. PduRBuffer
145. 发布信息
146. PDU Router 模块设计 notes
147. 配置 parameter considerations
148. Generic 接口 concept
149. 示例结构 of Routing tables
150. Single and Multicast transmission via communication 接口模块
151. Reception and gatewaying via communication 接口模块
152. 配置 generator
153. CanIf and Com routing path 示例
154. Post-build considerations
155. 附录
156. 不适用需求
157. Change history of AUTOSAR traceable items
158. Traceable item history of this document according to AUTOSAR Release R22-11
159. Added 规范 Items in R22-11
160. Changed 规范 Items in R22-11
161. Deleted 规范 Items in R22-11
162. Added Constraints in R22-11
163. Changed Constraints in R22-11
164. Deleted Constraints in R22-11
165. Traceable item history of this document according to AUTOSAR Release R23-11
166. Added 规范 Items in R23-11
167. Changed 规范 Items in R23-11
168. Deleted 规范 Items in R23-11
169. Added Constraints in R23-11
170. Changed Constraints in R23-11
171. Deleted Constraints in R23-11
172. Traceable item history of this document according to AUTOSAR Release R24-11
173. Added Constraints in R24-11
174. Changed Constraints in R24-11
175. Deleted Constraints in R24-11
176. Added 规范 Items in R24-11
177. Changed 规范 Items in R24-11
178. Deleted 规范 Items in R24-11
179. Traceable item history of this document according to AUTOSAR Release R25-11
180. Added Constraints in R25-11
181. Changed Constraints in R25-11
182. Deleted Constraints in R25-11
183. Added 规范 Items in R25-11
184. Changed 规范 Items in R25-11
185. Deleted 规范 Items in R25-11
