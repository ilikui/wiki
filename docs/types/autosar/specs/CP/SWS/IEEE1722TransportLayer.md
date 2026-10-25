# Specification of IEEE1722 Transport Protocol Module (`IEEE1722TransportLayer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1093 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_IEEE1722TransportLayer_1093\AUTOSAR_CP_SWS_IEEE1722TransportLayer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_IEEE1722TransportLayer_1093\AUTOSAR_CP_SWS_IEEE1722TransportLayer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_IEEE1722TransportLayer_1093\zzgen\CP_SWS_IEEE1722TransportLayer.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module `CP_SWS_1722Tp`.

The purpose of the 1722Tp module is to provide the possibility to use the  standardized transport protocol for time-sensitive applications in a bridged local area network on classic platform in AUTOSAR. The transport protocol defines so-called "AVTP streams" to exchange data between time-sensitive applications. Basically, the source of a stream is called "stream data producer" (or "talker") and the destination is called "stream data consumer" (or "listener"). Most likely one end node in an Ethernet network hosts a stream data producer and one or multiple other end node(s) host a stream data consumer. AVTP streams carry an AVTPDU-header where a so-called "AVTP presentation time" is available. The AVTP presentation time enables the possibility to handle data synchronously across a local area network at multiple stream data consumers. The IEEE1722 transport protocol defines several AVTP subtypes. The IEEE1722Tp module supports a subset of the AVTP subtypes to cover the following use cases:

* audio and video streaming
* distribution of a generated clock rate of a so-called media clock
* encapsulation of bus frames (e.g. CAN frames, LIN frames) and transport via an AVTP stream across the network

The 1722Tp module provide the possibility to configure, to transmit and receive AVTP streams.

## 模块依赖

This section describes the relations to other modules and files within the AUTOSAR basic software architecture. It contains brief descriptions of configuration information, which are required by the IEEE1722Tp module from other modules.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

* IEEE1722Tp streams used for audio, video streaming, interaction with a media clock (clock reference format) and ACF-messages for CAN and LIN interact only with CDDs which act as stream data producer or stream data consumer. Exchange of data with AUTOSAR standardized BSW software modules (e.g. COM) is supported - RTE is not supported. This may be introduced after R24-11.

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module `CP_SWS_1722Tp`.

The purpose of the 1722Tp module is to provide the possibility to use the  standardized transport protocol for time-sensitive applications in a bridged local area network on classic platform in AUTOSAR. The transport protocol defines so-called "AVTP streams" to exchange data between time-sensitive applications. Basically, the source of a stream is called "stream data producer" (or "talker") and the destination is called "stream data consumer" (or "listener"). Most likely one end node in an Ethernet network hosts a stream data producer and one or multiple other end node(s) host a stream data consumer. AVTP streams carry an AVTPDU-header where a so-called "AVTP presentation time" is available. The AVTP presentation time enables the possibility to handle data synchronously across a local area network at multiple stream data consumers. The IEEE1722 transport protocol defines several AVTP subtypes. The IEEE1722Tp module supports a subset of the AVTP subtypes to cover the following use cases:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Acronyms, Abbreviations and 定义
*原文标题：Acronyms, Abbreviations and Definitions*

The glossary below includes acronyms and abbreviations relevant to the IEEE1722Tp module that are not included in the .

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| TSN | Time-Sensitve Networking |
| TSpec | Traffic Specification as defined by |
| AVTP | Audio/Video Transport Protocol as defined by |
| AVTPDU | Audio/Video Transport Protocol Data Unit as defined by |
| IIDC | Instrumentation and Industrial Digital Camera as defined by |
| 61883_IIDC | IEC 61883/IIDC format as defined by |
| AAF | AVTP Audio Format as defined by |
| RVF | Raw Video Format as defined by |
| CRF | Control Reference Format as defined by |
| TSCF | Time Sensitive Control Format as defined by |
| NTSCF | None Time Sensitive Control Format as defined by |
| ACF | AVTP Control Format as defined by |
| ACF_CAN | Controller Area Network (CAN)/CAN with Flexible Data-Rate (CAN FD) message as defined by |
| ACF_CAN_BRIEF | Abbreviated CAN/CAN FD message as defined by |
| ACF_LIN | LIN® message as defined by |
| gPTP | generalized Precision Time Protocol |
| LL-PDU | Lower Layer PDU, which is used to interact with a lower layer module |
| UL-PDU | Upper Layer PDU, which is used to interact with an uper layer module |
| MTU | Maximum transmission unit |

### 5. 定义
*原文标题：Definitions*

### 6. Stream

Definition: A "stream" represent multiple Ethernet frames which are grouped by similar frame attributes (e.g. MAC source address).

### 7. IEEE1722 stream

Definition: An "IEEE1722 stream" represents multiple Ethernet frames which have EtherType set to AVTP Ethertype (0x22F0) (see ) and carry an AVTPDU. A single IEEE1722 stream carries a system-wide unique IEEE1722 stream id.

### 8. IEEE1722 stream id

Definition: An "IEEE1722 stream id" represents a system-wide unique IEEE1722 stream id (see ) to identify a single stream. The stream id comprises a 48 bit MAC address and a 16 bit unsigned integer unique id. The unique id could be used to address specific TSN applications at a destination node.

### 9. AVTP stream

Definition: An "AVTP stream" has the same definition as IEEE1722 stream. It is just another term with the same meaning.

### 10. AVTPDU

Definition: An "AVTPDU" is defined by  and represents the data which is transported within an IEEE1722 tream. The AVTPDU consists of an AVTPDU-header and the AVTPDU-payload.

### 11. AVTPDU-header

Definition: An "AVTPDU-header" is defined by  and represents the first part of an AVTPDU. The first byte of the AVTPDU-header encode the format of the AVTPDU. Serveral formats are specified by  and called "AVTP stream data subtype" (e.g. AAF (AVTP Audio Format)). All AVTP stream data subtypes share the same layout according the first 12 bits. The first 12 bits are defined as AVTPDU-common-header. The remaing AVTPDU-header information could differ per subtype. A subset of the stream data subtypes share the same format for the remaing AVTP-header information. Therefore  define 3 different header formats which represent the remaing AVTP-header information: AVTPDU-common-stream-header, AVTPDU-common-control-header and AVTPDU-alternative-header. For example, an AAF-header denotes an AVTPDU of subtype "AVTP Audio format". The AAF-header uses the header fields of the AVTPDU-common-header and AVTPDU-common-stream-header.

### 12. AVTPDU-common-header

Definition: An "AVTPDU-common-header" is defined by  and represents the first 12 bits (subtype (8 bits), header specific (1 bit), version (3 bits) of a AVTPDU-header. The AVTPDU-common-header contains the basic fields that all formats of AVTP stream data subtypes share.

### 13. AVTPDU-common-stream-header

Definition: An "AVTPDU-common-stream-header" is defined by  and expands the AVTPDU-common-header used by a subset of AVTP stream data subtypes (e.g. 61883_IIDC, AAF, TSCF, RVF)

### 14. AVTPDU-common-control-header

Definition: An "AVTPDU-common-stream-header" is defined by  and expands the AVTPDU-common-header used by a subset of AVTP stream data subtypes (e.g. ADP)

### 15. AVTPDU-alternative-header

Definition: An "AVTPDU-alternative-header" is defined by  and used for AVTP stream data subtypes that do not exhibit the commonalities shared between formats that use the AVTPDU-common-stream-header or AVTPDU-common-control-headers. For example, CRF and NTSCF subtypes uses the AVTPDU-alternative-header.

### 16. AVTPDU-payload

Definition: An "AVTPDU-payload" is defined by  and represents the second part of an AVTPDU. The AVTPDU-payload carry data of subtype encoded in the AVTPDU-header. For example, an AAF-payload carry audio data (i.e. audio samples).

### 17. Stream 数据 producer
*原文标题：Stream data producer*

Definition: A "stream data producer" represent an end node in an Ethernet network which produces (continously) data. The data is transmitted via a stream and received by 1 or multiple end nodes (stream data consumer). Note: The term "talker" is synonymous with "stream data producer".

### 18. Stream 数据 consumer
*原文标题：Stream data consumer*

Definition: A "stream data consumer" represent an end node in an Ethernet network which consumes (continously) data. The data is received via a stream. Note: The term "listener" is synonymous with "stream data consumer".

### 19. AVTP presentation time

Definition: The "AVTP presentation time" is defined by  and represents the gPTP time at which designated data within an AVTPDU payload is transferred to a time-sensitive application of an stream data consumer. An AVTPDU-header of header format AVTPDU-common-stream-header carries the presentation time as "avtp_timestamp" according to . AVTP presentation time is calculated as "TavtpPresentationTime" = "TcurrentGlobalTime" + "TmaxTransitTime". Please note: presentation time does not cover format conversion time and processing time of the receiving time-sensitive application (see  figure 6 "Figure 6 - AVTP Timing Reference Planes").

### 20. Max transit time

Definition: "Max transit time" is defined by . The basic method to calculate an appropriate "Max Transit Time" is to take the worst-case transit time from the stream data producer (talker) to a stream data consumer (listener) and choose a max transit time that is greater than or equal to the largest worst-case transit time.

### 21. Media clock

Definition: "Media clock" is defined by  and represents an entity which generate a rate (e.g. precise hardware clock with an constant rate (e.g. 48kHz). The media clock is hosted by the media clock provider.

### 22. Media clock provider

Definition: A "media clock provider" is an end node in the network which hosts an media clock. The media clock provider transmit an IEEE1722 stream to 1 or multiple media clock consumer. The IEEE1722 stream is of subtype CRF (clock reference format) and contain several presentation timestamps which correlates to the media clock rate.

### 23. Media clock consumer

Definition: A "media clock consumer" is an end node in the network which receive a IEEE1722 stream of subtype CRF (clock reference format) from a media clock provider. The media clock consumer perform a recovery of its media clock (e.g. PLL) based on the received encapsulated data from the media clock provider.

### 24. ACF-stream

Definition: An "ACF-stream" represents an IEEE1722 stream of subtype TSCF (time-synchronous control format) or NTSCF(non-time-synchronous control format) which transport encapsulated bus frames as ACF-messages (e.g. `ACF_CAN`) within its AVTPDU-payload (ACF-payload).

### 25. ACF-message

Definition: An "ACF-message" is defined by ) and represents an encapsulated bus frame of a certain kind of bus type (e.g. CAN). The bus frame is encapsulate with an corresponding ACF-message type (e.g. `ACF_CAN`). The ACF-message consist of an ACF-message-header and an ACF-message-payload. Multipe ACF-messages of different ACF-message types could form an ACF-payload which is transported within the same ACF-stream.

### 26. ACF-message-header

Definition: An "ACF-message-header" represents the first part of an ACF-message. The first 7 bits represents the ACF-message type. Several ACF-message types are specified by  (e.g. `ACF_CAN`, `ACF_LIN`). The following 9 bits represents the lenght of the subsequential ACF-message-payload.

### 27. ACF-message-payload

Definition: An "ACF-message-payload" is defined by  and represents the second part of an ACF-message. The ACF-message-payload carry data of ACF-message type encoded in the ACF-message-header. For example, an `ACF_CAN`-payload carry an CAN2.0 frame.

### 28. 相关文档
*原文标题：Related documentation*

### 29. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 30. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for IEEE1722Tp.

Thus, the specification SWS BSW General shall be considered as additional and required specification for the IEEE1722Tp module.

### 31. 约束与假设
*原文标题：Constraints and assumptions*

### 32. 限制
*原文标题：Limitations*

The IEEE1722Tp module support a subset of the AVTP stream data subtypes specified by :

* audio and video streaming: AAF, RVF, 61883_IIDC
* distribution of a generated clock rate provided by a media clock: CRF
* transport of encapsulated bus frames (`ACF_CAN`, `ACF_CAN_BRIEF` and `ACF_LIN`) via an ACF-stream, where the time-synchronous TSCF or the non-time-synchronous NTSCF AVTP stream data subtype is used in the ACF-header.

The IEEE1722Tp module is responsible to forward 1722Tp streams from the lower layers to stream data consumers, and from stream data producer to the lower layers. The time synchronous handling of the transported data with respect to the given AVTP presentation time is in responsibility of the according stream data consumer. Thus, the IEEE1722Tp module cannot ensure time synchronous handling with the accuracy of the AVTP presentation time in units of nanoseconds.

An ACF-stream with ACF-header set to TSCF (time-synchronous control format) carries an AVTP presentation time. The AVTP presentation time is given in units of nanoseconds. The IEEE1722Tp module can only perform a forwarding of bus frames with a resolution accuracy of the main function period (e.g. 5 ms).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 适用的车型领域
*原文标题：Applicability to car domains*

The IEEE1722Tp module can be used in all kinds of vehicles that feature Ethernet network and use IEEE1722 streams.

### 34. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section describes the relations to other modules and files within the AUTOSAR basic software architecture. It contains brief descriptions of configuration information, which are required by the IEEE1722Tp module from other modules.

### 35. L-SDU router

The IEEE1722Tp module uses APIs of the L-SDU router  to interchange data (L-SDUs).

### 36. StbM

specifies an AVTP presentation time which is available in each of the defined AVTP stream data subtypes, except for NTSCF. Upon a transmission request for a IEEE1722 stream the AVTP presentation time is calculate by the IEEE1722Tp based on the current synchronized global time and the configured max transit time. The `StbM_GetCurrentTime`() API could be used to access the current synchronized global time

### 37. EthIf

specifies an AVTP presentation time which is available in each of the defined AVTP stream data subtypes, except for NTSCF. The IEEE1722Tp module need access to the current synchronized time as described in . An alternative to call `StbM_GetCurrentTime` API is to call `EthIf_GetCurrentTimeTuple`, which may support more accurate time, since it directly gets the current synchronized global time directly from the according hardware clock.

### 38. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| IEEE1722Tp module APIs for IEEE1722 streams |  |  |
| IEEE1722Tp module handling of IEEE1722 streams |  |  |
| IEEE1722Tp module media clock handling |  |  |
| IEEE1722Tp module stream activation and deactivation |  |  |
| IEEE1722Tp module immediate and deferred transmission request |  |  |
| IEEE1722Tp module immediate and deferred reception processing |  |  |
| IEEE1722Tp module encaspulates bus frames |  |  |
| IEEE1722Tp module collecting bus frames for transport |  |  |
| IEEE1722Tp module transmit trigger conditions for collected bus frames |  |  |
| IEEE1722Tp module bus frame forwarding |  |  |
| IEEE1722Tp module definition of IEEE1722 streaming |  |  |
| IEEE1722Tp module support of IEEE1722 AVTP stream data subtypes |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| API naming convention |  |  |
| Basic SW module shall be able to shutdown |  |  |
| All AUTOSAR Basic Software |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. 功能规范
*原文标题：Functional specification*

This chapter defines the behavior of the IEEE1722Tp module. The API of the module is defined in , while the configuration is defined in .

### 40. 概述
*原文标题：Overview*

The task of the IEEE1722Tp module is to process transmit requests and receive indications of IEEE1722Tp-related streams and forward particular AVTPDU-header information and payload via the LSduR to the according destination module(s). Additionally, the IEEE1722Tp module is able to tunnel different protocols via an ACF-message (e.g. CAN, LIN). Therefore a concatenation of multiple ACF-messages into one ACF-payload is possible. The ACF-payload shall be transmitted as an AVTP stream. A received ACF-stream is inspected by the IEEE1722Tp module and the concatinated ACF-messages of the ACF-payload are unpacked and forwarded via the LSduR to the according destination module(s).

The following figure shows how the IEEE1722Tp module is integrated in the AUTOSAR BSW communication stack:

The following scenarios are supported by the IEEE1722Tp module:

* Processing of transmission requests via the LSduR for configured IEEE1722 streams of AVTP stream data subtypes AAF, 61883_IIDC and RVF initiated by an stream data producer.
* Processing of reception indication for configured IEEE1722 streams of AVTP stream data subtypes AAF, 61883_IIDC and RVF.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 模块处理
*原文标题：Module Handling*

This section contains description of auxiliary functionality of the IEEE1722Tp module.

### 42. 初始化
*原文标题：Initialization*

The IEEE1722Tp module is initialized via `IEEE1722Tp_Init`, and de-initialized via `IEEE1722Tp_DeInit`. Except for `IEEE1722Tp_Init`, the API functions of the IEEE1722Tp module may only be called after the module has been properly initialized.

  Status: DRAFT
  Upstream requirements:
⌈
A call to `IEEE1722Tp_Init` shall perform the following actions:

* Initializes all internal variables.
* Flush all internal queues.
* Set all PDUs of all configured IEEE1722TpLowerLayerPduPools, IEEE1722TpUpperLayerTxPduPoolEntrys, and IEEE1722TpUpperLayerRxPduPoolEntrys to state `PDU_AVAILABLE`.
* Set all configured IEEE1722TpStreams to state `IEEE1722TP_STREAM_DEACTIVATED`
* Set the sequence number of each configured IEEE1722TpStream that carries a sequence number in its AVTPDU-header format to 00^(16).
* Set the IEEE1722Tp module to initialized state.
⌋

Note for : Refer to  for details on AVTPDU-common-header fields.

  Status: DRAFT
  Upstream requirements:
⌈
A call to `IEEE1722Tp_DeInit` sets the IEEE1722Tp module back to the uninitialized state.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. 状态处理
*原文标题：State handling*

### 44. 状态处理 of streams
*原文标题：State handling of streams*

Status: DRAFT
  Upstream requirements:
⌈
IEEE1722Tp module shall maintain for each stream of all configured IEEE1722TpStreams two states: state `IEEE1722TP_STREAM_ACTIVATED` and state `IEEE1722TP_STREAM_DEACTIVATED`
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If `IEEE1722Tp_ActivateStream` is called and the given StreamIndex refer to a IEEE1722TpStream which already is in state `IEEE1722TP_STREAM_ACTIVATED`, then the IEEE1722Tp module shall ignore the call and return with E_OK.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If `IEEE1722Tp_ActivateStream` is called and the given StreamIndex refer to a IEEE1722TpStream which is in state `IEEE1722TP_STREAM_DEACTIVATED`, then the IEEE1722Tp module shall set the state of this IEEE1722TpStream to `IEEE1722TP_STREAM_ACTIVATED` and return with E_OK.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If `IEEE1722Tp_DeactivateStream` is called and the given StreamIndex refer to a IEEE1722TpStream which already in state `IEEE1722TP_STREAM_DEACTIVATED`, then the IEEE1722Tp module shall ignore the call and return with E_OK.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. 状态处理 of PDUs
*原文标题：State handling of PDUs*

PDUs are used to transfer data across the layers in the AUTOSAR communication stack. The IEEEE1722Tp module provide the possibility to configure so-called "PDU-pools". Each IEEE1722TpStream references an IEEE1722TpLowerLayerPduPool to interchange data with the lower layers, and optionally it could aggregate either a set of IEEE1722TpUpperLayerTxPduPoolEntry or a set of IEEE1722TpUpperLayerRxPduPoolEntry to interchange data with the upper layers. The IEEE1722Tp module act as a pass-through module and is requested to transmit data via PDUs and indicated to receive data via PDUs. Independent of the interaction direction (either interaction with the upper layer or with the lower layer), the IEEE1722Tp module has to maintain the usage-state of PDUs from the according PDU-pool. Therefore PDUs have two states `PDU_IN_USE` or `PDU_AVAILABLE`.

Note: The definition of `PDU_IN_USE` or `PDU_AVAILABLE` represent only the functional behavior, but not the implementation, since the state of a PDU is kept locally and is not propagated to other modules. Therefore, no type definition for the PDU state is specified.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Global time related 处理
*原文标题：Global time related handling*

The IEEE1722Tp module need to know the current synchronized global time and its state. This is needed for several scenario, e.g.:

* determine the avtp timestamp for transmission
* determine the message timestamp for ACF-messages
* evaluate presentation time for ACF-messages received via an ACF-stream with IEEE1722TpStreamAcfHeaderType set to `TIME_SYNCHRONOUS`
* determine the state of the current synchronized time to set the tu (time uncertain) headerfield value

Note: The IEEE1722Tp module could retrieve the current synchronized global time either via a call of `EthIf_GetCurrentTimeTuple` or `StbM_GetCurrentTime`. See also  and

Each IEEE1722TpStream need to know from which global time source the current global synchronized time is retrieved. An IEEE1722TpStream could reference an StbMSynchronizedTimeBase via IEEE1722TpStbMSynchronizedTimeBaseRef. With this reference the IEEE1722Tp module derive the StbMSynchronizedTimeBaseIdentifier for call of `StbM_GetCurrentTime` or `StbM_GetTimeBaseStatus`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Communication

The IEEE1722Tp module communicate via transmit and reception APIs with other BSW modules. The communication processing is devided in transmission requests and reception indication. A simplified communication processing works as follow:

### 48. Transmission

* Arrival of transmission request
* Evaluate transmission request and internal states
* If transmission request evaluation is successful, perform internal communication processing and forward to LSduR
* If transmission request evaluation fails, abort internal communication processing and return with E_NOT_OK

### 49. Reception

* Arrival of reception indication
* Evaluate reception indication and internal states
* If reception evaluation is successful, perform internal communication processing and forward to LSduR
* If reception evaluation evaluation fail, abort internal communication processing and return

The IEEE1722Tp module uses meta data as specified in . Basically, the IEEE1722Tp module act as intermediate layer to transfer provided data to IEEE1722 streams, and to extract data from received IEEE1722 streams and to forward the extracted data to the upper layer (e.g. IEEE1722 related applications). The following communication scenarios have to be considered:

* UpperLayer-To-Stream-TxData: upper layer (e.g. audio CDD) forward data transmission via LSduR to IEEE1722Tp module. The IEEE1722Tp module create an IEEE1722 stream and forward transmssion request via LSduR to EthIf
* LowerLayer-To-Stream-TxData: lower layer <Bus>-frames (e.g. CAN) forward reception indication via LSduR to IEEE1722Tp module. IEEE1722Tp module create an ACF-message and add tjos ACF-message to an IEEE1722 stream.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 50. Transmission requests

Status: DRAFT
  Upstream requirements:
⌈
If a transmission request is indicated with a call of `IEEE1722Tp_Transmit` and the given TxPduId refer to a IEEE1722TpStream which is in state `IEEE1722TP_STREAM_DEACTIVATED`, then the IEEE1722Tp module shall reject the transmission request by returning with E_NOT_OK
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If a transmission request is indicated with a call of `IEEE1722Tp_Transmit` and the following conditions are true:

* the given TxPduId refer to a IEEE1722TpStream which is in state `IEEE1722TP_STREAM_ACTIVATED`
* the given TxPduId refer to a PDU with KeepLocalPduBuffer set to TRUE
* this IEEE1722TpStream has a IEEE1722TpStreamTxQueue configured and the queue has space to store a transmission request

then the IEEE1722Tp module shall store the transmission request (including TxPduId, PduInfoPtr) and return with E_OK. Otherwise report runtime error `IEEE1722TP_E_TX_QUEUE_OVERRUN` and return with E_NOT_OK.
⌋

  Status: DRAFT
  Upstream requirements: ,
⌈
If a transmission request is indicated with a call of `IEEE1722Tp_Transmit` and the following conditions are true:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. Internal transmission request processing

A transmission request is handled in the internal transmission request processing. The internal transmission request processing include the creation of an AVTPDU-header of the corresponding IEEE1722TpStreamSubtype. AVTPDU-header creation can be found in

The handling depends slightly if the internal transmission request processing is triggered immediately in the contex of `IEEE1722Tp_Transmit` or deferred in context of the `IEEE1722Tp_MainFunctionTx`.

  Status: DRAFT
  Upstream requirements:
⌈
If a transmission request is forwarded to the internal transmission request processing in context of `IEEE1722Tp_Transmit` and the processing is aborted, then the IEEE1722Tp module shall report runtime error `IEEE1722TP_E_TX_INTERNAL_PROCESSING_FAILED` and return with E_NOT_OK.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If the state of a IEEE1722TpStream transit from `IEEE1722TP_STREAM_ACTIVATED` to `IEEE1722TP_STREAM_DEACTIVATED` and this IEEE1722TpStream has a IEEE1722TpStreamTxQueue configured, then the IEEE1722Tp module shall call for each entry in the queue `LSduR_IEEE1722TpTxConfirmation` with TxPduId set to stored PduId and result set to E_NOT_OK, and flush the queue.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 52. Reception indications

Status: DRAFT
  Upstream requirements:
⌈
If a reception is indicated with a call of `IEEE1722Tp_RxIndication` and the given RxPduId refer to a IEEE1722TpStream which is in state `IEEE1722TP_STREAM_DEACTIVATED`, then the IEEE1722Tp module shall discard the reception indication silently.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If a reception is indicated with a call of `IEEE1722Tp_RxIndication` and the given RxPduId is not available in the configuration, then the IEEE1722Tp module shall shall discard the reception indication.
⌋

  Status: DRAFT
  Upstream requirements: ,
⌈
If a reception is indicated with a call of `IEEE1722Tp_RxIndication` and the following conditions are true:

* the given RxPduId refer to a IEEE1722TpStream which is in state `IEEE1722TP_STREAM_ACTIVATED`
* the given RxPduId refer to a PDU with KeepLocalPduBuffer set to TRUE
* this IEEE1722TpStream has an IEEE1722TpStreamRxQueue configured and the queue has space to store a reception indication

then the IEEE1722Tp module shall store the reception indication (including RxPduId and PduInfoPtr) and return.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 53. Internal reception indication processing

A reception indication is handled in the internal reception indication processing. The internal reception indication processing include the inspection of an AVTPDU-header of the corresponding IEEE1722TpStreamSubtype and the handling of the AVTPDU-payload. The inspection can be found in

  Status: DRAFT
  Upstream requirements:
⌈
If a reception indication is forwarded to the internal reception indication processing and the processing is aborted, then the IEEE1722Tp module shall report runtime error `IEEE1722TP_E_RX_INTERNAL_PROCESSING_FAILED` and if given RxPduId is associated with a PDU where KeepLocalPduBuffer is set to TRUE, call `LSduR_IEEE1722TpReleaseRxBuffer` with RxPduId set to the given RxPduId and return.
⌋

Note: `LSduR_IEEE1722TpReleaseRxBuffer` could be called in context of the `IEEE1722Tp_RxIndication`

  Status: DRAFT
  Upstream requirements:
⌈
If a reception indication is forwarded to the internal reception indication processing in context of `IEEE1722Tp_MainFunctionRx` and the internal processing is aborted or has successfully finished, then the IEEE1722Tp module shall remove the reception indication from the corresponding IEEE1722TpStreamRxQueue.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 54. Transmission confirmation

Status: DRAFT
  Upstream requirements:
⌈
If `IEEE1722Tp_TxConfirmation` is called with a TxPduId which is configured, then the IEEE1722Tp module shall forward the transmission confirmation to the upper layer by calling `LSduR_IEEE1722TpTxConfirmation` with the corresponding TxPduId and result set to the value received by `IEEE1722Tp_TxConfirmation`. Otherwise the IEEE1722Tp module shall silently discard the transmission confirmation and return.
⌋

### 其余 125 章（内容从略，见纯文本全文）

55. Release reception buffer
56. Mainfunction processing
57. Buffer 处理
58. ACF-stream 处理
59. ACF-message collection and transmission
60. L-SDU 处理 and forwarding
61. AVTPDU-header creation
62. Treatment of shared AVTPDU-header fields
63. AVTPDU-common-header fields
64. AVTPDU-common-stream-header fields
65. AVTPDU-alternative-header fields
66. 61883_IIDC-header fields
67. AAF-header fields
68. ACF-header fields
69. ACF-message creation
70. ACF_CAN message fields
71. ACF_CAN_BRIEF message fields
72. ACF_LIN message fields
73. CRF-header fields
74. RVF-header fields
75. AVTPDU-header inspection
76. Meta 数据处理
77. Meta 数据 item 类型
78. IEEE1722 common stream header
79. IEEE1722 IEC61883/IIDC specific stream header
80. IEEE1722 AAF specific stream header
81. IEEE1722 RVF stream header
82. IEEE1722 CRF stream header
83. IEEE1722 ACF stream (NTSCF/TSCF) header
84. IEEE1722 stream interaction with 下层 layer
85. 错误分类
86. Development 错误
87. Runtime 错误
88. Production 错误
89. Extended Production 错误
90. 安全事件
91. API 规范
92. API Parameter Checking
93. Imported 类型
94. 类型定义
95. IEEE1722Tp_ConfigType
96. IEEE1722Tp_StreamIndexType
97. IEEE1722Tp_StreamStateType
98. IEEE1722Tp_CommonStreamHeaderType
99. IEEE1722Tp_TxIec61883IidcType
100. IEEE1722Tp_RxIec61883IidcType
101. IEEE1722Tp_TxIec61883Type
102. IEEE1722Tp_RxIec61883Type
103. IEEE1722Tp_TxIec61883CipNoSphType
104. IEEE1722Tp_RxIec61883CipNoSphType
105. IEEE1722Tp_TxIec61883CipWithSphType
106. IEEE1722Tp_RxIec61883CipWithSphType
107. IEEE1722Tp_TxAafPcmType
108. IEEE1722Tp_RxAafPcmType
109. IEEE1722Tp_TxAafAes3Type
110. IEEE1722Tp_RxAafAes3Type
111. IEEE1722Tp_TxRvfType
112. IEEE1722Tp_RxRvfType
113. IEEE1722Tp_TxCrfType
114. IEEE1722Tp_RxCrfType
115. 功能定义
116. Generic Functions
117. IEEE1722Tp_Init
118. IEEE1722Tp_DeInit
119. 控制 Functions
120. IEEE1722Tp_ActivateStream
121. IEEE1722Tp_DeactivateStream
122. Communication Functions
123. IEEE1722Tp_Transmit
124. IEEE1722Tp_ReleaseRxBuffer
125. Callback 通知
126. IEEE1722Tp_TxConfirmation
127. IEEE1722Tp_RxIndication
128. Scheduled functions
129. IEEE1722Tp_MainFunctionTx
130. IEEE1722Tp_MainFunctionRx
131. Expected 接口
132. Mandatory 接口
133. Optional 接口
134. 服务接口
135. 时序图
136. IEEE1722 stream transmission
137. IEEE1722 stream reception
138. 配置规范
139. Containers and 配置 parameters
140. IEEE1722Tp
141. IEEE1722TpGeneral
142. IEEE1722TpConfig
143. IEEE1722Tp 下层 Layer Pdu 配置
144. IEEE1722Tp stream 配置
145. IEEE1722Tp 上层 Layer Pdu 配置
146. IEEE1722TpStreamTxQueue
147. IEEE1722TpStreamRxQueue
148. IEEE1722TpStreamSubtype
149. IEEE1722TpStreamCRF
150. IEEE1722TpStreamAAF
151. IEEE1722TpStreamIIDC
152. IEEE1722TpStreamRVF
153. IEEE1722TpStreamACF
154. IEEE1722TpStreamAcfCan
155. IEEE1722TpStreamAcfLin
156. 附录
157. 不适用需求
158. Change history of AUTOSAR traceable items
159. Traceable item history of this document according to AUTOSAR Release R24-11
160. Added Constraints in R24-11
161. Changed Constraints in R24-11
162. Deleted Constraints in R24-11
163. Added 规范 Items in R24-11
164. Changed 规范 Items in R24-11
165. Deleted 规范 Items in R24-11
166. Traceable item history of this document according to AUTOSAR Release R25-11
167. Added Constraints in R25-11
168. Changed Constraints in R25-11
169. Deleted Constraints in R25-11
170. Added 规范 Items in R25-11
171. Changed 规范 Items in R25-11
172. Deleted 规范 Items in R25-11
173. Traceable item history of this document according to AUTOSAR Release R26-11
174. Added Constraints in R26-11
175. Changed Constraints in R26-11
176. Deleted Constraints in R26-11
177. Added 规范 Items in R26-11
178. Changed 规范 Items in R26-11
179. Deleted 规范 Items in R26-11
