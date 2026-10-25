# Specification of FlexRay ISO Transport Layer (`FlexRayISOTransportLayer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 589 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayISOTransportLayer_589\AUTOSAR_CP_SWS_FlexRayISOTransportLayer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayISOTransportLayer_589\AUTOSAR_CP_SWS_FlexRayISOTransportLayer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayISOTransportLayer_589\zzgen\CP_SWS_FlexRayISOTransportLayer.complete.txt`

## 文档简介

This specification describes the functionality, API, and the configuration of the AUTOSAR basic software module FlexRay Transport Protocol (FrTp).

According to the AUTOSAR layered software architecture  (see Figure ), the FlexRay Transport Protocol (FrTp) is placed between the PDU Router module and the L-SDU Router module. The main purpose of the FlexRay Transport Protocol is segmentation and reassembly of messages (I-PDUs) that do not fit in one of the assigned FlexRay L-PDUs.

Figure  depicts the different PDU names in AUTOSAR nomenclature and the signal dependencies between the different AUTOSAR modules.

The PDU Router deploys upper Layers (e.g. COM, DCM etc) I-PDUs onto different communication protocols. The routing through a network system type (e.g. FlexRay, CAN, LIN etc.) depends on the I-PDU identifier. The PDU Router also determines (by configuration) if a transport protocol shall be used or not. Finally, this module carries out gateway functionality, when there is no rate conversion.

Through the L-SDU Router  (LSduR) the FlexRay Interface  (FrIf) provides standardized mechanisms to access a FlexRay bus channel via a FlexRay Communication Controller regardless of its location (μC internal/external). Depending on the PDU ID, the L-SDU Router has to forward an N-PDU to FrTp or an I-PDU to PduR. The FrTp handles only transport protocol N-PDUs (i.e. SF, CF, LF and FC PDUs).

The main purpose of FlexRay Transport Protocol is to perform a transfer of a message (I-PDU) that e.g. might or might not fit in a single FlexRay L-PDU. I-PDUs that do not fit into a single FlexRay L-PDU are segmented into multiple parts, where each can be transmitted in a FlexRay L-PDU. According to AUTOSAR basic software architecture, the FlexRay Transport Protocol provides methods for

* Segmentation of data in transmit direction
* Reassembling of data in receive direction
* Control of data flow
* Error detection in segmentation sessions
* Transmit cancellation

It is an AUTOSAR decision to base basic software module specifications on existing standards, thus this AUTOSAR FlexRay Transport Layer specification is based on the international standard . This standard provides

* Transmission of a message with known message length
* Transmission of a message with unknown but finite message length
* Acknowledgement of transmission with retry mechanism

The FlexRay Transport Protocol supports 1:1 and 1:n connections.

The FlexRay Transport Protocol supports data transfers of up to

## 模块依赖

This section sets out relations between the FlexRay Transport Protocol (FrTp) and other AUTOSAR basic software modules. It contains brief descriptions of the services, which are required by the FrTp from other modules or which are required by other modules from the FrTp.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API, and the configuration of the AUTOSAR basic software module FlexRay Transport Protocol (FrTp).

According to the AUTOSAR layered software architecture  (see Figure ), the FlexRay Transport Protocol (FrTp) is placed between the PDU Router module and the L-SDU Router module. The main purpose of the FlexRay Transport Protocol is segmentation and reassembly of messages (I-PDUs) that do not fit in one of the assigned FlexRay L-PDUs.

Figure  depicts the different PDU names in AUTOSAR nomenclature and the signal dependencies between the different AUTOSAR modules.

The PDU Router deploys upper Layers (e.g. COM, DCM etc) I-PDUs onto different communication protocols. The routing through a network system type (e.g. FlexRay, CAN, LIN etc.) depends on the I-PDU identifier. The PDU Router also determines (by configuration) if a transport protocol shall be used or not. Finally, this module carries out gateway functionality, when there is no rate conversion.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The prefix notation used in this document, is as follows:

| Prefix: | Description: |
|---|---|
| I- | Relative to upper AUTOSAR Layer (e.g. COM, DCM etc.) |
| L- | Relative to the FlexRay Interface module. |
| N- | Relative to the FlexRay Transport Protocol Layer. |

The glossary below includes acronyms and abbreviations relevant to the FlexRay Transport Layer module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Fr L-SDU | This is the SDU of the FlexRay Interface module. It is similar to Fr N-PDU but from the FlexRay Interface module point of view. |
| Fr L-SduId | This is the unique identifier of a Fr-L-SDU within the FlexRay Interface. It is used for referencing L-SDU's routing properties. |
| Fr N-PDU | This is the PDU of the FlexRay Transport Layer. It contains address information, protocol control information and data (the whole Fr N-SDU or a part of it). |
| Fr N-SDU | This is the SDU of the FlexRay Transport Layer. In the AUTOSAR architecture, it is a set of data coming from the PDU Router. |
| Fr N-SduId | Unique N-SDU identifier within the FlexRay Transport Layer. It is used to reference N-SDU's routing properties. |
| I-PDU | This is the PDU of the upper AUTOSAR Layers modules (e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Flex Ray ISO Transport Layer.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Flex Ray ISO Transport Layer.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

The AUTOSAR architecture defines communication system specific transport protocol layers (FrTp, CanTp, LinTp etc.). Thus, the FlexRay Transport Protocol layer (FrTp) only covers FlexRay transport protocol specifics.

The FlexRay Transport Protocol has an interface to a single underlying Linklayer SDU Router and a single upper PDU Router.

All reported DTCs are set as tested (notTestedThisCycle = 0) with each start-up. This would result in a toggling DTC for permanent issues, increasing the Occurrence - and/or OperationCycle Counters (if configured) with each power cycle.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

The FlexRay module can always be used for applications if the FlexRay protocol was used.

### 9. Restriction to ISO 10681-2

The AUTOSAR FrTp module does not support  functionalities as listed below:

| Functionality: | Description: |
|---|---|
| Status monitoring | provides the functionality to monitor the status of an active data transfer. Thus, the ISO 10681-2 API provides the service primitives C_GetStatus.request and C_GetStatus.confirm. |
| Read Communication Parameter values | provides the functionality to read out current communication parameter values. Thus, the ISO 10681-2 API provides the service primitives C_GetParameters.request and C_GetParameters.confirm. |

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section sets out relations between the FlexRay Transport Protocol (FrTp) and other AUTOSAR basic software modules. It contains brief descriptions of the services, which are required by the FrTp from other modules or which are required by other modules from the FrTp.

### 11. FlexRay 传输 Layer interactions
*原文标题：FlexRay Transport Layer interactions*

The FrTp's upper interface offers the PduR module global access, to transmit and receive data (Fr N-SDU). FlexRay N-SDU identifiers (Fr N-SDU-ID) achieve this access. FlexRay N- SDU-ID refers to a constant data structure that consists of attributes describing FlexRay N-SDU. The figure below shows the interactions between FrTp, PduR and L-SDU Router modules.

### 12. PDU Router

The FrTp module requests different services primitives provided by the PDU Router module. The requested services primitives of the PDU-Router module are listed below. For further details please refer to chapter  and specification :

* By this API service primitive, the FrTp indicates the start of reception of a FrTp-I-PDU.
* By this API service primitive, the FrTp initiates the copy process of the received FrTp N-PDU payload data to a provided <Upper Layer> Rx buffer
* By this API service primitive, the FrTp indicates the completed (un)successful reception of an FrTp-I-PDU.
* By this API service primitive, the FrTp initiates the copy process of the FrTp N-PDU payload data from the provided <Upper Layer> Tx buffer
* By this API service primitive, the FrTp module confirms the (un)successful sending of the complete Fr N-SDU to the corresponding sender module (e.g. COM, DCM etc).

The following services primitives of the FrTp module are called by the PDU-Router:

* By this API service primitive, a upper layer initiates a I-PDU data transfer via PDU-Router
* By this API service primitive, sending of an Fr N-SDU is cancelled on sender site.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. L-SDU Router

The following services primitives of the L-SDU Router (LSduR) module are called by the FrTp:

* By this API service primitive, the transfer of an Fr N-PDU is initiated.

The following services primitives of the FrTp module are called by the L-SDU Router module:

* By this API service primitive, the L-SDU Router module indicates the reception of an FrTp frame (Fr N-PDU, not to be confused with a FlexRay frame) to the FrTp. The FrTp then processes this frame.
* By this API service primitive, the L-SDU Router module confirms the sending of the frame containing the Fr N-PDU with result (E_OK if the transmission was successful, E_NOT_OK if the transmission failed) over the FlexRay network.
* By this API service primitive, the L-SDU Router get access to the Fr N-PDU data.

### 14. ECU 状态管理器
*原文标题：ECU State Manager*

The following services primitives of the FrTp module are called by the ECU State Manager module ():

* By this API service primitive, the FrTp module is initialized.
* By this API service primitive, all active communication links are closed, resources are freed and the module is stopped.

### 15. Default 错误追踪
*原文标题：Default Error Tracing*

The following services primitives of the Default Error Tracing module are called by the FrTp module:

* `Det_ReportError`: By this API service primitive, the FrTp module reports development errors.

### 16. 文件结构
*原文标题：File structure*

### 17. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 18. 头文件结构
*原文标题：Header file structure*

Header shall contain all exported data
⌈
FrTp.h shall contain all data exported from the FrTp - API declarations, callbacks, extern types and global data.
⌋

### 19. 设计 rules
*原文标题：Design rules*

Compiler and Platform independance
⌈
The source code of the FrTp module shall be neither compiler (tool) nor platform (processor) dependent.
⌋

 Support of configuration updates
  Upstream requirements:
⌈
The FlexRay Transport Layer module architecture shall support configuration modification by a dedicated update process (e.g. flash reprogramming).
⌋

### 20. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Classification of production errors |  |  |
| The FlexRay Transport Layer shall be configured to be compliant with the ISO 10681-2 specification |  |  |
| Each N-SDU shall have a unique identifier |  |  |
| FlexRay Transport Layer's variables shall be initialized |  |  |
| A cancellation service of transmission shal be provided at any time |  |  |
| The FlexRay Transport Layer shall support the dynamic bandwidth control mechanism |  |  |
| The Configuration shall be modifiable by a Flashing Process |  |  |

### 21. 功能规范
*原文标题：Functional specification*

This section provides a description of the FlexRay Transport Protocol Layer functionality. It explains the services provided to the upper and lower layers and the internal behaviour of the FrTp Layer module.

The main purpose of the FlexRay Transport Protocol (FrTp) Layer is transferring messages (I-PDUs) that may or may not fit in a single FlexRay frame (L-PDU). The FrTp Layer module provides services for segmentation and reassembly of upper-layer messages (Fr N-SDUs). Hence FrTp module offers services for segmentation, transmission with flow control, and reassembly of messages.

While reading this document, it is necessary to bear in mind, that the Transport Protocol functionality (e.g. frame assembly, frame handling, error handling etc.) is according to .

 ISO-10681-2 protocoll shall be followed
  Upstream requirements: , ,
⌈
If no explicit recommendation or requirement is defined, the FrTp module shall follow the specification .
⌋

Transport protocol facilities will be used to transport AUTOSAR I-PDUs from different source modules (e.g. COM, DCM etc.). Therefore, the FrTp module is able to deal with multiple connections simultaneously (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. FrTp usage scenarios

As depict in , the FrTp module is usable within single Electronic Control Units (ECUs) as well as in Gateways. In both cases FrTp modules are responsible to handle communication via FlexRay but for gateway purpose some additional requirements have to be taken into account.

Note: Each time a special usage scenario has to be taken into account, a foot node is given within the document.

### 23. FrTp 行为 according to ISO10681-2
*原文标题：FrTp behaviour according to ISO10681-2*

This chapter gives a small overview about the Transport Protocol behaviour and data transmission szenarios according to . This chapter is only for a better understanding of the software solution to fullfill  and specifies no additional requirement.

### 24. 协议数据 Unit (PDU)
*原文标题：Protocol Data Unit (PDU)*

Different N-PDU format support
  Upstream requirements: , ,
⌈
The FrTp module shall support the Fr N-PDU formats as defined in .
⌋

### 25. Frame Sequence charts

This chapter describes the data transfer modes based on Transport Protocol Layer frame (N-PDU) sequences according to . This is only for a better understanding of the FrTp internal work and shall not be an additional specification. For a final implementation only the figures in  are relevant.

### 26. Unsegmented unacknowledged 数据 transfer with known message length
*原文标题：Unsegmented unacknowledged data transfer with known message length*

Support unsegmented unacknowledged data transfer with known message length
⌈
According to  the FrTp module shall support an unsegmented unacknowledged data transfer with known message length as depict in
⌋

 Frame sequence of an unsegmented unacknowledged data transfer with known message length
⌈

⌋

### 27. Unsegmented acknowledged 数据 transfer with known message length
*原文标题：Unsegmented acknowledged data transfer with known message length*

Support unsegmented acknowledged data transfer with known message length
⌈
According to  the FrTp module supports an unsegmented acknowledged data transfer with known message length as depict in
⌋

 Frame sequence of an unsegmented acknowledged data transfer with known message length
⌈

⌋

### 28. Segmented unacknowledged 数据 transfer with known message length
*原文标题：Segmented unacknowledged data transfer with known message length*

Support segmented unacknowledged data transfer with known message length
⌈
According to  the FrTp module shall support a segmented unacknowledged data transfer with known message length as depict in
⌋

 Frame sequence of a segmented unacknowledged data transfer with known message length
⌈

⌋

### 29. Segmented acknowledged 数据 transfer with known message length
*原文标题：Segmented acknowledged data transfer with known message length*

Support segmented acknowledged data transfer with known message length
⌈
According to  the FrTp module shall support a segmented acknowledged data transfer with known message length as depict in
⌋

 Frame sequence of a segmented acknowledged data transfer with known message length
⌈

⌋

### 30. Segmented unacknowledged 数据 transfer with unknown message length
*原文标题：Segmented unacknowledged data transfer with unknown message length*

Support segmented unacknowledged data transfer with unknown message length
⌈
According to  the FrTp module shall support a segmented unacknowledged data transfer with unknown message length as depict in
⌋

 Frame sequence of a segmented unacknowledged data transfer with unknown message length
⌈

⌋

### 31. Segmented acknowledged 数据 transfer with unknown message length
*原文标题：Segmented acknowledged data transfer with unknown message length*

Support segmented acknowledged data transfer with unknown message length
⌈
According to  the FrTp module shall support a segmented acknowledged data transfer with unknown message length as depict in
⌋

 Frame sequence of a segmented acknowledged data transfer with unknown message length
⌈

⌋

### 32. Limitation to ISO10681-2

The limitations to  are described in .

### 33. Internal 模块行为规范
*原文标题：Internal Module behaviour specification*

This chapter specifies the internal behaviour of the FlexRay Transport Layer module to fullfill the protocol behaviour according to .

### 34. 概述
*原文标题：Overview*

depicts an abstract overview of the FrTp layer module architecture.

 depicts a division between configuration parts and runtime parts. After the module is initialized it is able to transmit I-PDUs from an upper layer (PDUR) or receive N-PDUs from a lower layer (FrIf). Below there is a short describes of the different parts being involved in FrTp layer handling procedure.

| Term: | Description: |
|---|---|
| FrTpConnection | A connection is a configuration parameter set which includes all parameters to identify a connection link between different communication nodes uniquely. A connection has a fixed assignment between a sender node (representing by a source address), one or more receiver node(s) (representing by a target address), the upper Layer I-PDU source (representing by an I-PDU-ID). Additionally a connection has a reference to a set of N-PDUs (PDU-Pool) which are defined for sending data via FrTp. A reference to connection specific parameters (e.g. timings and timeouts etc.) is defined too. |
| FrTpConnectionControl | A connection configuration is a parameter set which includes configuration specific parameter (e.g. timings, timeouts, default parameters etc.). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 配置数据
*原文标题：Configuration data*

### 36. FrTpConnection

A connection identifies the sender and the receiver(s) of this particular communication link. An FrTp connection link is defined by

* a target address of the receiver node(s) and
* a source address of the sender node.

For the internal handling of different PDUs across the FlexRay communication stack the I-PDU-ID (N-SDU-ID) identifies the data link to upper layer's sender or receiver modules (see ).

Additionally a connection has a reference to a set of N-PDUs (FrTpTxPduPool) which are defined for sending data via this particular connection. A reference to connection specific parameters, e.g. timings and timeouts etc is defined too (FrTpConnection Config).

 FrTpConnection implementation
⌈
An FrTpConnection container shall implement all parameters.
⌋

 FrTpConnection required per connection link
⌈
For each connection link the FrTp module shall handle, a new instance of FrTpConnection container shall be created.
⌋

 Post-build support for connections
⌈
The FrTp module shall support a post build time configurable number of connections.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. FrTpTxPduPool

The FrTpTxPduPool contains a list of N-PDUs configured for sending FrTp N-PDUs. An FrTpTxPduPool could be referenced by different FrTpConnections but each FrTpConnection has exactly one reference to one FrTpTxPduPool. (see also ). The FrTpTxPduPools are necessary to support dynamic bandwidth assignment for connections.

 describes the dynamic bandwidth assignment in detail. At this position in specification only the term FrTpTxPduPool shall be introduced and some basic requirements to FrTpTxPduPools are specified.

 FrTpTxPduPool implementation
⌈
An FrTpTxPduPool container shall implement all parameters.
⌋

 Dependency FrTpTxPduPool container to FrTpConnection container
⌈
A single FrTpTxPduPool can be referenced by different FrTpConnections.
⌋

Note: Configuration of PDU Pools to limit bandwidth to an ECU is described in .

### 38. FrTpConnectionControl

An FrTpConnectionControl container contains all static (not runtime) parameters, which are necessary to control a connection e.g. initial timer values, timeout control values etc. Each FrTpConnection has an exclusive link to an FrTpConnectionControl container. FrTpConnections with equal control parameters can reference the same FrTpConnectionControl.

 FrTpConnectionControl implementation
⌈
An FrTpConnectionControl Container shall implement all parameters.
⌋

 Dependency FrTpConnectionControl container to FrTpConnection container
⌈
An FrTpConnectionControl container can be referenced by different FrTpConnections.
⌋

### 39. Runtime 数据
*原文标题：Runtime data*

As depicted in  also some runtime information are required. All runtime information are encapsulated in containers. This chapter defines all the runtime containers with the corresponding variables in that scope as it necessary to understand FrTp's work.

It's recommended to place all runtime data required for implementation into the global FrTpRuntime container too.

### 40. FrTpRuntime

| Module Name: | FrTpRuntime: |
|---|---|
| Module Description: | This container contains the runtime parameters / variables which are necessary to handle FlexRay Transport Protocol communication according to . |

| Included Containers | < | < |
|---|---|---|
| Container Name: | Multiplicity: | Scope / Dependency: |
| FrTp_Channel | 1..* | FrTp Channel: |

This container contains the runtime parameters / variables for an FrTpChannel.
| FrTp_ConCtrlRuntime | 1..* | FrTp Connection Control Runtime: |
|---|---|---|

This container contains the runtime parameters / variables to handle an FrTpConnection.
| FrTp_PduPoolRuntime | 1..* | FrTp Pdu Pool Runtime: |
|---|---|---|

This container contains the runtime parameters / variables to handle an FrTpPduPool.

### 41. FrTpChannel

As described above a channel is a runtime resource of the FrTp. A channel could be allocated to handle a connection. This chapter describes the relevant information of a channel without implementation specific information (e.g. types etc).

| Name: | FrTpChannel: |
|---|---|
| Description | This container contains the parameters and variables of a FlexRay channel |
| Container parameters and variables | < |

| Information: | Description: |
|---|---|
| FrTpChannelNumber | Number of that channel |
| FrTpTxChannelState | Current state of the Tx channel (idle = 0 or busy = 1) |
| FrTpTxConState | FrTp Tx Connection State: |

This parameter implements the current state of the Tx connection (Tx communication state machine according to  protocol handling).
| FrTpTxConRef | FrTp Tx Connection Reference: |
|---|---|

This is the reference (pointer to connection) to the current Tx FrTpConnection, the channel is currently processing.
| FrTpTxConTxPduPendingCounter | FrTp Tx Connection Tx Pdu Pending Counter: |
|---|---|

This counter counts the number of currently transmitted but not confirmed Fr N-PDUs of the active TxConnection (e.g. SF, CF, LF) This counter shall be incremented each time an FrTp Tx N-PDU is send by the FrTp.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Full Duplex and Half Duplex

Normally a Full Duplex channel supports concurrent transmission and reception of Fr N-PDUs at the same time for the same connection.  depicts a Full Duplex implementation.

On the other hand a Half Duplex channel supports only a data transfer for one direction. The fact that an Rx transmission has also to send a FlowControl or a Tx transmission has to receive a FlowControl is not similar to a full duplex connection.  depicts a half duplex `FrTp_Channel`, where either a Tx or a Rx Connection is processed.

The final functionality of FrTpChannels depends on implementation and therefore it is not specified in this document.

### 43. FrTpConnectionControlRuntime

This chapter describes the relevant information of Connection Control without implementation specific information (e.g. types etc).

| Name: | FrTpConCtrlRuntime: |
|---|---|
| Description: | FrTp Connection Control Runtime: |

This container contains the ConnectionControl runtime data.
| Container parameters and variables | < |
|---|---|

| Information: | Description: |
|---|---|
| FrTpSCexpRuntime | FRTP_SEPARATION_CYCLE_EXPONENT |

Runtime value of FrTpSCexp parameter. This parameter could be changed via API-Call "`FrTp_ChangeParameter`" and differs than from the configured default value.
| FrTpMaxNbrOfNPduPerCycleRuntime | FRTP_MAX_NUMBER_OF_NPDU_PER_CYCLE |
|---|---|

Runtime value of FrTpMaxNbrOfNPduPerCycle parameter. This parameter could be changed via API-Call `FrTp_ChangeParameter` and differs than from the configured default value.
| No included containers | < |
|---|---|

### 44. 初始化 and 关机
*原文标题：Initialization and shutdown*

FrTp module state definition
⌈
The FrTp module shall have two internal states, `FRTP_OFF` and `FRTP_ON`.
⌋

 FrTp state variable for initialization detection
⌈
The FrTp module shall implement a static status variable FrTpState to denote whether the FrTp module is initialized or not.
⌋

 FrTp state
⌈
The FrTpState shall be checked to detect whether FrTp module is initialized or not.
⌋

 Default state is OFF after power-up
⌈
The FrTp module shall be in the `FRTP_OFF` state after power up.
⌋

 Initialize state to ON after init has been called
⌈
The FrTp module shall change to the internal state `FRTP_ON` when the FrTp has been successfully initialized by the service primitive `FrTp_Init`.
⌋

 Processing of FrTp operations only after initialization
⌈
The FrTp module shall perform normal FrTp operation tasks (e.g. segmentation, reassembly etc.) only when the FrTp module is in the `FRTP_ON` state.
⌋

 Initialization service handling
  Upstream requirements:
⌈
The service primitive `FrTp_Init` shall initialize all global variables of the module and sets all transport protocol connections in a sub-state of `FRTP_ON`, in which neither transmissions nor receptions are in progress.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. 数据 Transfer Processing
*原文标题：Data Transfer Processing*

This chapter covers all topics of FrTp module data transfer processing if transmission of data (Fr N-SDU) is requested by an upper layer (e.g. COM, DCM etc.) via PduR module or if data (Fr N-PDUs) have been received via FrIf module indicated by LSduR. For a better understanding the different topics are encapsulated in several sub-clauses starting with the basic definition of data transfer and reception. Buffer handling is described within an additional chapter.

The FlexRay protocol stack supports two different buffer access modes for data transmission:

* Immediate Buffer Access Mode
* Decoupled Buffer Access Mode

Due to this fact there are two different sequences for data transfer processing.

### 46. Flags

The FrTp module uses several flags to signal internal states (see also sequence diagrams in ). This chapter describes the flags required for inter-module state handling.

### 47. TX_SDU_AVAILABLE

The `TX_SDU_AVAILABLE` flag is set by the service primitive `FrTp_Transmit` to indicate the N-SDU transmit request.

 A TX SDU available flag per channel
⌈
The `TX_SDU_AVAILABLE` flag shall exist for every channel.
⌋

 TX SDU available flag use case
⌈
The `TX_SDU_AVAILABLE` flag shall indicate an Fr N-SDU transmit request for a configured connection on an allocated channel.
⌋

Note: For detailed information about set and reset conditions and behaviour please refer to  and .

### 48. TX_SDU_UNKNOWN_MSG_LENGTH

The `TX_SDU_UNKNOWN_MSG_LENGTH` flag is set by the service primitive `FrTp_Transmit` to indicate the N-SDU transmit request with an unknown message length. Depending on the status of that flag the FrTp module will recall the service primitive `PduR_FrTpCopyTxData` several times until all data are transmitted.

 TX SDU unknown message length use case
⌈
The `TX_SDU_UNKNOWN_MSG_LENGTH` flag shall indicate an Fr N-SDU transmit request with unknown message length.
⌋

 A TX SDU unknown flag per channel
⌈
The `TX_SDU_UNKNOWN_MSG_LENGTH` flag shall exist for every channel.
⌋

Note: For detailed information about set and reset conditions and behaviour please refer to  and .

### 49. RX_PDU_AVAILABLE

The `RX_PDU_AVAILABLE` flag is set by the service primitive `FrTp_RxIndication` to indicate the reception of an N-PDU.

 A RX PDU available flag per RX N-PDU
⌈
The `RX_PDU_AVAILABLE` flag shall exist for every Fr N-PDU, which is configured to be received by the FrTp module.
⌋

Note: For detailed information about set and reset conditions and behaviour please refer to  and .

### 50. RX_ERROR

The `RX_ERROR` chapter 7.5.7.2.3.] flag is required in case transmission with acknowledgement and retry is configured. During a segmented data reception an error could occur but sending FlowControl is currently not possible. In that case the information about an error has to be stored until sending a FlowControl is allowed.

 A RX error flag per every FrTp channel
⌈
The `RX_ERROR` flag shall exist for every FrTpChannel.
⌋

 RX error flag use case
⌈
The `RX_ERROR` flag shall indicate that an error occurred during a segmented reception.
⌋

 RX error flag clearing
⌈
The `RX_ERROR` flag shall be cleared after the reaction (Retry, Negative Acknowledgement, abortion).
⌋

### 51. Transmit 数据
*原文标题：Transmit Data*

Usage of meta data information for address information
⌈
During transmission, the FrTp shall use addressing information provided by the upper layer via the meta data items `SOURCE_ADDRESS_16` and `TARGET_ADDRESS_16` as local address and remote address of the transmitted N-PDUs and to identify received flow control N-PDUs.
⌋

 Usage of configured address information in transmit request
⌈
If FrTpLa and/or FrTpRa are configured for a transmitted N-SDU, they are used even when the addressing information is the provided by the upper layer. If not, the address information in the N-PDUs shall be set according to the provided address information.
⌋

### 52. Transmit 数据 via 'Immediate Buffer Access' 模式
*原文标题：Transmit Data via 'Immediate Buffer Access' Mode*

This chapter defines a data transfer requested by an upper layer (e.g. COM, DCM etc.) via 'Immediate Buffer Access' Mode.

 depicts the internal processing for data transmission in principle depicts only the overview of data transmission for a single channel without further functionality (e.g. transmit cancellation) or internal behaviour (e.g. internal control data handling, return values, etc.). Also a schedule for data transfer in concurrent channels is not described here.] if "Immediate Buffer Access" mode is configured. Below there is a description of the different steps which are necessary to transmit data via FrTp.

### 53. Step 1 - 4

FrTp transmit initiation by upper layer
⌈
Sending Fr N-SDU data shall always be initiated by the service primitive call of `FrTp_Transmit`.
⌋

 Detection for transmission with unknown or known message length
⌈
The FrTp module shall evaluate the value of PduInfoType.SduLength:

* SduLength = 0: Transmission with unknown message length is requested
* SduLength \neq 0: Transmission with known message length is requested.
⌋

 Handling of TX SDU unknown message length flag
⌈
If support unknown message length is configured the FrTp module shall set the flag `TX_SDU_UNKNOWN_MSG_LENGTH` according to the result of .
⌋

 Handling of development error for unknown message length
⌈
The FRTP module shall raise an development error `FRTP_E_UMSG_LENGTH_ERROR` when

# a transmission with unknown message length is detected and
# support of unknown message legth is not configured and
# development error detection is enabled for the FrTp module.
⌋

The service primitive parameter TxPduId shall be used to select the correct connection. This shall be done by searching for the correct entry within the FrTpConnection container (FrTpConnection.FrTpTxSduId).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 97 章（内容从略，见纯文本全文）

54. Step 5 - 10
55. Step 11 - 12
56. Step 13 - 16
57. Step 17 - 21
58. Transmit 数据 via 'Decoupled Buffer Access' 模式
59. Step 01 - 10
60. Step 11 - 12
61. Step 13 - 23
62. 数据 Transfer with unknown message length
63. Segmentation condition for 数据 transfer
64. Receive 数据
65. Step 1 - 9
66. Step 10 - 14
67. Step 15
68. Step 16 - 17
69. Step 18 - 22
70. Receive with unknown message length
71. Buffer 处理
72. Buffer Access 模式
73. Dynamic Bandwidth Assignment
74. Transmit Cancellation
75. Transmit Cancellation for unsegmented 数据 transfer
76. Transmit Cancellation for segmented 数据 transfer
77. Change FrTp Parameter
78. 时序 parameter and timeout 行为
79. Counters
80. 错误分类
81. Development 错误
82. Runtime 错误
83. Production 错误
84. Extended Production 错误
85. 安全事件
86. API 规范
87. Imported 类型
88. 类型定义
89. FrTp_ConfigType
90. 功能定义
91. 初始化 and 关机
92. FrTp_Init
93. FrTp_Shutdown
94. Normal Operation
95. FrTp_Transmit
96. FrTp_CancelTransmit
97. FrTp_ChangeParameter
98. FrTp_CancelReceive
99. Callback 通知
100. FrTp_TriggerTransmit
101. FrTp_RxIndication
102. FrTp_TxConfirmation
103. Scheduled functions
104. FrTp_MainFunction
105. Expected 接口
106. Mandatory 接口
107. Optional 接口
108. Configurable 接口
109. 服务接口
110. 时序图
111. Sending of N-Pdus
112. Receiving of N-Pdus
113. 配置规范
114. How to read this chapter
115. Containers and 配置 parameters
116. FrTp
117. FrTpGeneral
118. FrTpMultipleConfig
119. FrTpConnection
120. FrTpTxSdu
121. FrTpRxSdu
122. FrTpConnectionControl
123. FrTpTxPduPool
124. FrTpRxPduPool
125. FrTpTxPdu
126. FrTpRxPdu
127. FrTpDemEventParameterRefs
128. 发布信息
129. 配置 dependencies and recommendation
130. Retry 行为
131. TP-Acknowledgement and Retry
132. 时序 and Timeout Parameters
133. Bandwidth 控制配置
134. BandwidthControl by FlowControl Parameter in combination with Hardware FIFO buffer mechanisms
135. BandwidthControl by FlowControl Parameter
136. BandwidthControl via different PDU Pools
137. BandwidthControl via non-overlapping Tx-Pdu-Pools
138. BandwidthControl via overlapping Tx-Pdu-Pools
139. 配置需求 on the FlexRay 接口
140. 附录
141. Change history of AUTOSAR traceable items
142. Traceable item history of this document according to AUTOSAR Release R25-11
143. Added 规范 Items in R26-11
144. Changed 规范 Items in R26-11
145. Deleted 规范 Items in R26-11
146. Traceable item history of this document according to AUTOSAR Release R25-11
147. Added 规范 Items in R25-11
148. Changed 规范 Items in R25-11
149. Deleted 规范 Items in R25-11
150. 不适用需求
