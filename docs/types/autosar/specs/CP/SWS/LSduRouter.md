# Specification of Linklayer Sdu Routing Module (`LSduRouter`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1094 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_LSduRouter_1094\AUTOSAR_CP_SWS_LSduRouter.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_LSduRouter_1094\AUTOSAR_CP_SWS_LSduRouter.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_LSduRouter_1094\zzgen\CP_SWS_LSduRouter.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module L-SDU Router. The L-SDU Router module provides services for routing L-SDUs (Link Layer Service Data Units) using the following module types:

* Communication interface modules, that use the <Provider:Up> or <Provider:Lo> APIs, e.g. EthIf, IEEE1722Tp;

The routing of L-SDUs is performed based on statically defined L-SDU identifiers. Thus, no L-SDU is routed dynamically during run-time, e.g. dependent on its payload.

The location of related modules can be "upper layer modules" (e.g. IEEE1722Tp) and/or "lower layer modules" (e.g. EthIf).

The L-SDU Router act as mandatory upper layer of all communication interface modules and as mandatory lower layer of all direct linked modules, e.g. PduR, <Bus>Nm, <Bus>Tp, <Bus>TSyn, XCPon<Bus>, TcpIp, Firewall, Busmirroring, SAEJ1939Nm, SAEJ1939Tp, V2XGeoNetworking module.

The L-SDU Router and PDU Router share similar functionality and therefore the configuration and implementation could result in one module.

The L-SDU Router can be easily configured to support other upper and lower layer modules. This approach also allows to integrate Complex Device Drivers (CDDs) as upper or lower layer modules of the L-SDU Router.

## 模块依赖

The L-SDU Router module depends on the APIs and capabilities of the used communication hardware abstraction layer modules and the used communication service layer modules. Basically the API functions required by the L-SDU Router module are:

Communication Interface modules:

* <Lo>_Transmit (e.g. `EthIf_Transmit`)

Upper layer modules which process I-PDUs originating from Communication Interface modules:

* <Up>_RxIndication (e.g. `IEEE1722Tp_RxIndication`),
* <Up>_TxConfirmation (e.g. `IEEE1722Tp_TxConfirmation`)

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

* No content

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module L-SDU Router. The L-SDU Router module provides services for routing L-SDUs (Link Layer Service Data Units) using the following module types:

* Communication interface modules, that use the <Provider:Up> or <Provider:Lo> APIs, e.g. EthIf, IEEE1722Tp;

The routing of L-SDUs is performed based on statically defined L-SDU identifiers. Thus, no L-SDU is routed dynamically during run-time, e.g. dependent on its payload.

The location of related modules can be "upper layer modules" (e.g. IEEE1722Tp) and/or "lower layer modules" (e.g. EthIf).

The L-SDU Router act as mandatory upper layer of all communication interface modules and as mandatory lower layer of all direct linked modules, e.g. PduR, <Bus>Nm, <Bus>Tp, <Bus>TSyn, XCPon<Bus>, TcpIp, Firewall, Busmirroring, SAEJ1939Nm, SAEJ1939Tp, V2XGeoNetworking module.

The L-SDU Router and PDU Router share similar functionality and therefore the configuration and implementation could result in one module.

The L-SDU Router can be easily configured to support other upper and lower layer modules.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. AUTOSAR 架构
*原文标题：AUTOSAR architecture*

The L-SDU Router act as central module in the AUTOSAR communication structure between the communication hardware abstraction layer and communication service layer.

 gives an overview of the AUTOSAR communication structure

### 4. L-SDU Router 模块功能概述
*原文标题：L-SDU Router module function overview*

The detailed L-SDU Router module structure is shown in .

The L-SDU Router module mainly consists of two parts:

* The L-SDU Router routing paths: static routing paths describing the routing attributes for each L-SDU to be routed. The routing paths can be (if supported) updated post-build loadable in the programming state of the ECU or selected when initializing the L-SDU Router by post-build selectable (see section ).
* The L-SDU Router Engine: the actual code performing routing actions according to the L-SDU Router routing paths. The L-SDU Router Engine has to deal with:

  * Routing L-SDU from source(s) to destination(s),
  * Translating the source L-SDU ID to the destination L-SDU ID (e.g. `LSduR_IEEE1722Tp_RxIndication` to `IEEE1722Tp_RxIndication`,

### 5. L-SDU 处理
*原文标题：L-SDU handling*

L-SDUs are identified by static L-SDU IDs. The L-SDU Router module determines the destination of an L-SDU by using the L-SDU ID in a static configuration table. L-SDUs are used for the data exchange of the modules directly above the L-SDU Router module, e.g. the IEEE1722Tp module. The routing operation of the L-SDU Router module does not modify the L-SDU, it simply forwards the L-SDU to the destination module.

The L-SDU ID is set in the configuration that also implements the API. This will allow an efficient implementation of look-up tables in each module receiving an L-SDU ID (e.g. the L-SDU Router module's configuration contains the L-SDU ID for the `LSduR_EthIfTxConfirmation`, while EthIf module's configuration contains the L-SDU ID for the `EthIf_Transmit`).

The following list summarizes the routing capabilities of LSduR:

# L-SDU Forwarding

  * Transmission from upper layer

    * Communication Interface

      * Singlecast (1:1) an L-SDU from a local module to a communication interface module.
      * Multicast (1:n) an L-SDU from a local module to communication interface modules.
  * Reception to upper layer

    * Communication Interface

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the LSduR module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| PDU | Protocol Data Unit. |
| I-PDU | Interaction Layer PDU. An I-PDU consists of data (buffer), length and I-PDU ID. |
| I-PDU ID | I-PDU Identifier. |
| L-PDU | Data Link Layer PDU. One or more I-PDUs are packed into one L-PDU. The L-PDU is bus specific, e.g. Ethernet frame. |
| L-PDU ID | L-PDU Identifier. |
| SDU | Service Data Unit. |
| L-SDU | Data link layer service data unit. An L-SDU consists of data(buffer), length, L-SDU ID and may L-PDU specific information transported via meta data. |
| L-SDU ID | L-SDU identifier |
| L-SDU Router | Module that transfers L-SDUs from one module to another module. The L-SDU Router module can be utilized for internal routing purposes. |
| Upper Layer Modules (Up) | Modules above the L-SDU Router. This layer includes e.g. PDU Router, IEEE1722Tp or TcpIp module. |
| Lower Layer Modules (Lo) | Module that transfers L-SDUs from one module to another module. The L-SDU Router module can be utilized for internal routing purposes, and in combination with PDU Router for gateway operations. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 相关文档
*原文标题：Related documentation*

### 8. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 9. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for LSduR.

Thus, the specification SWS BSW General shall be considered as additional and required specification for LSduR.

### 10. 约束与假设
*原文标题：Constraints and assumptions*

### 11. 限制
*原文标题：Limitations*

The L-SDU Router module does not:

* have mechanisms for signal extraction or conversion,
* have mechanisms for data integrity checking (like checksums),
* change or modify the L-SDU,
* make any L-SDU payload dependent routing decisions,
* support routing of I-PDUs between Communication Interface modules with rate conversion.

### 12. 限制 on supported functionality
*原文标题：Limitations on supported functionality*

The L-SDU Router module supports fan-out of L-SDUs transmitted from a local module (e.g. IEEE1722Tp) to more than one destinations. There are some limitations if the L-SDU shall be transmitted to more than one destination (fan-out 1:n; n>1), because the upper layer module is not aware how many destinations there are:

* The L-SDU Router reports E_OK for a Transmit request from an upper layer if at least one destination lower layer reports E_OK.
* The L-SDU Router gives a TxConfirmation to the upper layer when it receives the last TxConfirmation from destination lower layer.
* The L-SDU Router returns E_OK for a ReleaseRxBuffer requested from the upper layer only if all destination lower layers return E_OK.

If the L-SDU fan-out is performed by the L-SDU Router, this has further consequences for upper layer module (e.g. IEEE1722Tp module):

* The TxConfirmation of the Communication Interface API will be handled in the way that the local module (e.g. IEEE1722Tp module) will be informed when the last destination has confirmed the transmission.

Note that above limitations are not set as requirements since they do not concern functionality provided by the L-SDU router module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 适用的车型领域
*原文标题：Applicability to car domains*

The L-SDU Router is used in all ECUs where communication is necessary.

### 14. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The L-SDU Router module depends on the APIs and capabilities of the used communication hardware abstraction layer modules and the used communication service layer modules. Basically the API functions required by the L-SDU Router module are:

Communication Interface modules:

* <Lo>_Transmit (e.g. `EthIf_Transmit`)

Upper layer modules which process I-PDUs originating from Communication Interface modules:

* <Up>_RxIndication (e.g. `IEEE1722Tp_RxIndication`),
* <Up>_TxConfirmation (e.g. `IEEE1722Tp_TxConfirmation`)

### 15. 文件结构
*原文标题：File structure*

### 16. 代码文件结构
*原文标题：Code file structure*

For details refer to the Chapter 5.1.6 "Code file structure" in .

The code file structure is not defined within this specification completely. However to allow integration to other modules the following structure is needed.

### 17. 头文件结构
*原文标题：Header file structure*

Status: DRAFT
  Upstream requirements:
⌈
The L-SDU Router module shall provide the functions used by the different modules in separate header files.
⌋

Example: If EthIf is used then the L-SDU Router module shall provide `LSduR_EthIf`.h.

  Status: DRAFT
  Upstream requirements:
⌈
The L-SDU Router implementation shall include Det.h.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
All L-SDU Router header files shall contain a software and specification version number.
⌋

This structure allows the separation between platform, compiler and implementation specific definitions and declarations from general definitions as well as the separation of source code and configuration.

### 18. Version check

For details refer to .

### 19. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All software modules shall provide version and identification information |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Data types naming convention |  |  |
| API naming convention |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Status values naming convention |  |  |
| Classification of development errors |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 功能规范
*原文标题：Functional specification*

The L-SDU Router module is an L-SDU transfer unit placed above Communication Interface modules (lower layer module) and below the modules of of the Communication Services (upper layer module), see .

For example, the IEEE1722Tp module  support IEEE1722-stream related communication and resides in the Communication Service layer. The IEEE1722Tp module is the upper layer module, which request transmission by calling Transmit of the the L-SDU Router module. The L-SDU Router module forward reception of data by calling RxIndication or indicate transmission confirmation by calling TxConfirmation of the IEEE1722Tp module.

From the ECU point of view, the L-SDU Router module can perform two different classes of operations:

* PDU Reception to local module(s):

  * receive L-SDUs from one lower layer module and forward them to one or more upper layer modules,
* PDU Transmission from local module(s): transmit L-SDUs to one lower layer module on request of one upper layer module,

The combination of L-SDU Reception and L-SDU Gateway via the PduR is allowed. Example: The IEEE1722Tp module is receiving an L-SDU in the same time that it is gatewayed via the PduR to another lower layer module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. L-SDU 处理
*原文标题：L-SDU handling*

Status: DRAFT
  Upstream requirements:
⌈
The L-SDU Router module shall transfer an L-SDU without modification in a consistent manner from the source module to the destination module(s).
⌋

An L-SDU is identified by the L-SDU ID and/or the symbolic name (i.e. the SymbolicNameValue of the container of the PDU ). For post-build the L-SDU ID is required because the L-SDU must be identified after the L-SDU Router module is compiled. If the L-SDU Router module is pre-compile (i.e. in source code) the symbolic names may be used, see .

Each BSW module that handles L-SDUs and provides an API for L-SDUs must contain a list of L-SDU IDs . This means that each called module will have a look-up table identifying the PDU.

Example: The IEEE1722Tp module calls `LSduR_IEEE1722TpTransmit` (here the L-SDU Router module configuration contains the L-SDU ID), the L-SDU Router module will call `EthIf_Transmit` (here the EthIf module configuration contains the L-SDU ID), the EthIf will call `LSduR_EthIfTxConfirmation` (here the L-SDU Router module configuration contains the L-SDU ID), and L-SDU Router module will call `IEEE1722Tp_TxConfirmation` (here the IEEE1722Tp module configuration contains the L-SDU ID).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. L-SDU Reception to 上层 layer 模块
*原文标题：L-SDU Reception to upper layer module*

The receive operation of the L-SDU Router module is either finalized by an RxIndication (LSduR_<User:Lo>RxIndication) from a lower layer module (Communication Interface) or , if configured, by a call of ReleaseRxBuffer (LSduR_<User:Up>ReleaseRxBuffer) from the receiving upper layer module (e.g. IEEE1722 application) after RxIndication from a lower layer module has been called.

The RxIndication function is originated from the lower layer either in the context of a cyclic function after polling a communication driver or in the context of an interrupt.

The ReleaseRxBuffer function is originated from the upper layer either in context of the RxIndication or in the context context of a cyclic function after RxIndication has been called.

### 23. Communication 接口
*原文标题：Communication Interface*

The source Communication Interface module indicates a received L-SDU by calling LSduR_<User:Lo>RxIndication. The L-SDU may have multiple local destination modules configured by the routing path.

 Support of 1:n routing for an received L-SDU
  Status: DRAFT
  Upstream requirements: ,
⌈
The L-SDU Router module shall provide 1:n routing for an L-SDU received from a Communication Interface module and routed to one or more upper layer module(s).
⌋

Example: An L-SDU is received on EthIf and forwarded to IEEE1722Tp.

Note: A L-SDU may be received by one or more upper layer modules in the same time as gatewayed via the PduR to one or more Communication Interface destinations.

  Status: DRAFT
  Upstream requirements:
⌈
When the LSduR_<User:Lo>RxIndication is called the L-SDU Router module shall call <Up>_RxIndication for each destination upper layer module.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If an L-SDU received by a local module is directly forwarded, the L-SDU Router shall not check the length of the L-SDU.
⌋

Since the L-SDU Router module will not buffer this L-SDU it does not have to reject L-SDU that are longer/shorter than configured.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. L-SDU Transmission from 上层 layer 模块(s)
*原文标题：L-SDU Transmission from upper layer module(s)*

The transmit operations of the lower layer destination modules are always asynchronous. This means that a transmission service request returns immediately after the I-PDU has been passed by the L-SDU Router module to the lower layer destination(s). If the L-SDU Router module is notified by lower layer destination modules via LSduR_<User:Lo>TxConfirmation (Communication Interface) after successful or failed transmission of the L-SDU, the L-SDU Router module will forward this confirmation to the upper layer module via <Up>_TxConfirmation (Communication Interface).

The transmit operation of the L-SDU Router module is triggered by a L-SDU Transmit request from an upper layer source module and the L-SDU Router forwards the request to lower layer destination(s).

  Status: DRAFT
  Upstream requirements:
⌈
The L-SDU shall not be buffered in the L-SDU Router module in case of L-SDU transmission from an upper layer source module.
⌋

### 25. Multicast

The multicast feature is separated to an own section since there are issues using this feature as described in Section .

Further requirements that are directly handled by the L-SDU Router module:

 Handling of multicast transmission request
  Status: DRAFT
  Upstream requirements:
⌈
If the provided L-SDU ID represents a group of PDUs (multicast transmit request) and at least one of the forwarded transmit requests returns successfully, the function LSduR_<User:Up>Transmit shall return E_OK.
⌋

Note that Communication Interfaces returning with E_OK will transmit their data either directly or via trigger transmit.

 Handling of confirmation upon multicast transmission request
  Status: DRAFT
  Upstream requirements: ,
⌈
In case of a multicast (1:n, n>1) Communication Interface transmission, the L-SDU Router shall call the transmit confirmation API of the upper layer module when the last transmit confirmation from a Communication Interface module which supports transmit confirmation has been received.
⌋

Note: The above requirement even works if not all destinations provide TxConfirmations.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Communication 接口
*原文标题：Communication Interface*

There are four ways that L-SDUs can be transmitted on Communication Interface:

# Direct data provision - where the upper layer module is calling the LSduR_<User:Up>Transmit function, the L-SDU Router module forwards the call to <Lo>_Transmit and the data is copied by the lower Communication Interface module in the call.
# Trigger transmit provision - where the lower Communication Interface module requests transmission of an L-SDU by using the LSduR_<User:Lo>TriggerTransmit, and L-SDU Router module forwards the call to <Up>_TriggerTransmit and the data is copied to the destination's buffer by the upper layer module.
# Trigger transmit provision - Where the upper layer module calls the LSduR_<User:Up>Transmit function, the L-SDU Router module forwards the call to <Lo>_Transmit and the data is not copied by the lower module (Communication Interface module). The data will later be requested by the lower layer using LSduR_<User:Lo>TxConfirmation.

The confirmation of the transmission of the L-SDU is the same for the direct and trigger transmit data provision:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Trigger transmit 数据 provision
*原文标题：Trigger transmit data provision*

The upper layer module must be informed whether it has to reset the update-bits.

  Status: DRAFT
  Upstream requirements:
⌈
The L-SDU Router module shall forward a LSduR_<User:Lo>TriggerTransmit request by the Communication Interface lower layer module to the upper layer module by calling <Up>_TriggerTransmit.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
The L-SDU Router module shall copy the return value from the <Up>_TriggerTransmit to the lower layer module.
⌋

### 28. 错误处理
*原文标题：Error handling*

For errors occurred using singlecast or multicast over Communication Interface modules, no specific error handling is done. Errors in return values are forwarded to the upper layer source module.

### 29. Zero Cost Operation

Zero cost operation is an optimization that may be done where source and destination modules are single and in source code (one of the modules must be in source code otherwise the L-SDU Router must create glue-code for the function call). For example an ECU with a IEEE1722Tp module and a single Ethernet network, the `LSduR_IEEE1722Transmit` may directly call the `EthIf_Transmit` without any logic inside the L-SDU Router Module. The L-SDU Router becomes a macro layer.

This optimization is only possible where routing paths are of configuration class Pre-Compile.

  Status: DRAFT
  Upstream requirements:
⌈
If LSduRZeroCostOperation is set to true and all routing paths are of configuration class Pre-Compile; modules directly above or below the L-SDU Router may directly call each other without using LSduR module functions.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If LSduRZeroCostOperation is set to true and at least one routing path is not of configuration class Pre-Compile; the L-SDU Router module configuration generator shall report an error.
⌋

### 30. 状态管理
*原文标题：State Management*

The state machine of the L-SDU Router module is depicted in .

  Status: DRAFT
  Upstream requirements:
⌈
Only one instance of the state machine shall exist in the L-SDU Router module.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
The L-SDU Router module shall consist of two states, `LSDUR_UNINIT` and `LSDUR_ONLINE` as defined in `LSduR_StateType`
⌋

  Status: DRAFT
  Upstream requirements:
⌈
The L-SDU Router module shall be in the state `LSDUR_UNINIT` after power up the L-SDU Router module (i.e. before calling the `LSduR_Init` function).
⌋

  Status: DRAFT
  Upstream requirements:
⌈
The L-SDU Router module shall change to the state `LSDUR_ONLINE` when the L-SDU Router has successfully been initialized via the function `LSduR_Init`
⌋

  Status: DRAFT
  Upstream requirements: ,
⌈
The L-SDU Router module shall perform routing of L-SDUs according to the L-SDU Router routing tables only when it is in the online state `LSDUR_ONLINE`
⌋

  Status: DRAFT
  Upstream requirements: ,
⌈
The L-SDU Router module shall perform no routing when it is in the uninitialized state `LSDUR_UNINIT`
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Complex 驱动 Interaction
*原文标题：Complex Driver Interaction*

Besides the modules of the Communication Service layer (e.g. IEEE1722Tp module) and the modules of the Hardware Abstraction layer (e.g. EthIf module), Complex Drivers (CDD) are also possible as upper or lower layer modules for the LSduR.

Whether a CDD is an upper layer or a lower layer module for the LSduR is configurable via the LSduRUpperModule or LSduRLowerModule configuration parameters of the LSduRBswModules configuration.

A CDD can require Communication Interface API, depending on the configuration parameters LSduRCommunicationInterface (e.g. LSduRTransmit) of the LSduRBswModules configuration. The API functions provided by the LSduR for the CDD interaction contain the CDD's service prefix as specified by the apiServicePrefix configuration parameter, see .

The LSduR provides the unique transmit function LSduR_<Cdd>Transmit for each upper layer CDD. When a callout function of the LSduR is invoked from a lower layer module for a L-SDU that is transmitted or received by an upper layer CDD, the LSduR invokes the corresponding target function of the CDD.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 33. Multicore Distribution

The L-SDU Router module, in collaboration with the PDU Router module, is distributed over all partitions and acts as a central inter-partition dispatcher for any inter-partition (inter-core) routing path(s), mainly for gateway and multicast use cases.

For further explanations about the distribution principles, please see chapter "Com-Stack Distribution" within the .

 L-SDU Router module configuration generation consider the partition assignment
  Status: DRAFT
⌈
The L-SDU Router module configuration generator shall examine the partition assignment of each source/destination L-SDU of all routing path instances. The L-SDU Router module configuration generator shall consider the PDU Router module configuration to support an optimized multicore routing implementation.
⌋

Note: The generation of L-SDU Router and PDU Router module could result in one module, since both modules provide nearly the same functionality

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Intra-partition Routing Path

The intra-partition communication behavior should not be altered, even though there are upper and/or lower layers, which reside in different partitions.

 Support of trigger transmit for intra-partion routings
  Status: DRAFT
⌈
For routing paths with TriggerTransmit Transmission from an upper layer module the L-SDU Router shall accept intra-partition routings only.
⌋

### 35. Inter-partition Routing Path

This chapter describes, how the L-SDU Router module shall handle inter-partition routing paths. This means a destination PDU is mapped to a different ECUC partition than the corresponding source Pdu.

The LSduR need to perform the actual cross-partition communication with respect to data and call context.

Note: The  describes the ways how to solve a context switch in a multicore environment within its chapter "BSW Distribution in Multi-Core Systems".

### 36. 上层 layer 模块 interaction
*原文标题：Upper layer module interaction*

Interpretation of return value for transmission via inter-partion routing paths
  Status: DRAFT
⌈
For inter-partition routing paths, the return value of the function LSduR_<User:Up>Transmit shall reflect if the L-SDU Router module itself has accepted the transmit request or not.
⌋

 Execution of code per ECUC partition for transmission via inter-partion routing paths
  Status: DRAFT
⌈
For inter-partition routing paths, the call to the function LSduR_<User:Up>Transmit shall only execute code that is assigned to the same ECUC partition. The L-SDU Router module shall not call the <Provider:Lo>_Transmit in the call context of LSduR_<User:Up>Transmit. The L-SDU Router module shall call <Provider:Lo>_Transmit in the ECUC partition context of the <Provider:Lo> module (in fact of the ECUC partition defined via the EcucPduDefaultPartitionRef or the EcucPduDedicatedPartitionRef of the LSduRPathDestinationPduRef).
⌋

 Execution of code per ECUC partition for release reception buffer via inter-partion routing paths
  Status: DRAFT
⌈
For inter-partition routing paths, the call to the function LSduR_<User:Up>ReleaseRxBuffer shall only execute code that is assigned to the same ECUC partition.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. 下层 layer Communication 接口模块 interaction
*原文标题：Lower layer Communication Interface module interaction*

Execution of code per ECUC partition for reception via inter-partion routing paths
  Status: DRAFT
⌈
For inter-partition routing paths, the call to the function LSduR_<User:Lo>RxIndication shall only execute code that is assigned to the same ECUC partition. The L-SDU Router module shall not call the <Provider:Up>_RxIndication in the call context of LSduR_<User:Lo>RxIndication. L-SDU Router module shall call <Provider:Up>_RxIndication in the ECUC partition context of the <Provider:Up> module (in fact of the ECUC partition context defined via the EcucPduDefaultPartitionRef or the EcucPduDedicatedPartitionRef of the LSduRPathSourcePduRef).
⌋

 Execution of code per ECUC partition for transmission confirmation via inter-partion routing paths
  Status: DRAFT
⌈
For inter-partition routing paths, the call to the function LSduR_<User:Lo>TxConfirmation shall only execute code that is assigned to the same ECUC partition. The L-SDU Router module shall not call the <Provider:Up>_TxConfirmation in the call context of PduR_<User:Lo>TxConfirmation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Communication 接口 Gatewaying
*原文标题：Communication Interface Gatewaying*

Execution of code per ECUC partition for transmission, transmission confirmation and reception via an inter-partion routing path of interface gatewaying
  Status: DRAFT
⌈
For inter-partition routing paths, the call to the following functions shall only execute code that is assigned to the same ECUC partition:

* LSduR_<SrcLo>RxIndication,
* LSduR_<DstLo>TriggerTransmit,
* LSduR_<DstLo>TxConfirmation.

The L-SDU Router module shall not call the <DstLo>_Transmit in the call context of LSduR_<SrcLo>RxIndication. The L-SDU Router module call <DstLo>_Transmit in the ECUC partition context of the <DstLo> module (in fact of the ECUC partition context defined via the EcucPduDefaultPartitionRef or the EcucPduDedicatedPartitionRef of the LSduRPathDestinationPduRef).
⌋

### 39. API parameter checking

Status: DRAFT
  Upstream requirements: ,
⌈
If development error detection is enabled, a PDU identifier is not within the specified range, and the PDU identifier is configured to be used by the L-SDU Router module, the L-SDU Router module shall report the error `LSDUR_E_PDU_ID_INVALID` to the DET module, when LSduRDevErrorDetect is enabled.
⌋

### 40. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 41. Development 错误
*原文标题：Development Errors*

Definition of development errors in module LSduR
  Status: DRAFT
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Invalid configuration pointer | LSDUR_E_INIT_FAILED | 0x00 |
| API service (except LSduR_GetVersionInfo) used without module initialization or LSduR_Init called in any state other than LSDUR_UNINIT | LSDUR_E_UNINIT | 0x01 |
| Invalid PDU identifier | LSDUR_E_PDU_ID_INVALID | 0x02 |
| Null pointer has been passed as an argument | LSDUR_E_PARAM_POINTER | 0x03 |

⌋

### 其余 62 章（内容从略，见纯文本全文）

42. Runtime 错误
43. Production 错误
44. Extended Production 错误
45. API 规范
46. Imported 类型
47. 类型定义
48. LSduR_PBConfigType
49. LSduR_PBConfigIdType
50. LSduR_StateType
51. 功能定义
52. 通用 functions provided by the L-SDU Router
53. LSduR_Init
54. LSduR_GetVersionInfo
55. LSduR_GetConfigurationId
56. Configurable 接口定义 for interaction with 上层 layer 模块
57. LSduR_<User：Up>Transmit
58. LSduR_<User：Up>CancelTransmit
59. LSduR_<User：Up>ReleaseRxBuffer
60. Configurable 接口定义 for 下层 layer communication 接口模块 interaction
61. LSduR_<User：Lo>RxIndication
62. LSduR_<User：Lo>TxConfirmation
63. LSduR_<User：Lo>TriggerTransmit
64. Callback 通知
65. Scheduled functions
66. Expected 接口
67. Mandatory 接口
68. Optional 接口
69. 服务接口
70. 时序图
71. L-SDU transmission
72. L-SDU reception
73. 配置规范
74. How to read this chapter
75. Variants
76. Containers and 配置 parameters
77. LSduR
78. LSduRGeneral
79. LSduRConfig
80. LSduRPath
81. LSduRBswModules
82. 发布信息
83. 附录
84. 不适用需求
85. Change history of AUTOSAR traceable items
86. Traceable item history of this document according to AUTOSAR Release R23-11
87. Added 规范 Items in R23-11
88. Changed 规范 Items in R23-11
89. Deleted 规范 Items in R23-11
90. Traceable item history of this document according to AUTOSAR Release R24-11
91. Added 规范 Items in R24-11
92. Changed 规范 Items in R24-11
93. Deleted 规范 Items in R24-11
94. Added Constraints in R24-11
95. Changed Constraints in R24-11
96. Deleted Constraints in R24-11
97. Traceable item history of this document according to AUTOSAR Release R25-11
98. Added 规范 Items in R25-11
99. Changed 规范 Items in R25-11
100. Deleted 规范 Items in R25-11
101. Added Constraints in R25-11
102. Changed Constraints in R25-11
103. Deleted Constraints in R25-11
