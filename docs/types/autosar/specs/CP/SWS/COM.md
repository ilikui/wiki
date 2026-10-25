# Specification of Communication (`COM`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 015 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_COM_015\AUTOSAR_CP_SWS_COM.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_COM_015\AUTOSAR_CP_SWS_COM.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_COM_015\zzgen\CP_SWS_COM.complete.txt`

## 文档简介

This specification is the AUTOSAR COM module Software Specification. It is based on the AUTOSAR COM SRS . It specifies how the requirements of the AUTOSAR COM SRS shall be realized. That means that the functionality and the API of the AUTOSAR COM module are described in this document.

Within the AUTOSAR Layered Architecture the AUTOSAR COM module is placed between its users (e.g. RTE, SwCluC) and the PDU Router, see .

The AUTOSAR COM module is derived from . For details, see Chapter . The AUTOSAR COM module provides signal gateway functionality. For details, see Chapter .

Main Features:

* Provision of signal oriented data interface for the users (e.g. RTE, SwCluC)
* Packing of AUTOSAR signals to I-PDUs to be transmitted
* Unpacking of received I-PDUs and provision of received signals to the users (e.g. RTE, SwCluC)
* Routing of signals from received I-PDUs into I-PDUs to become transmitted
* Routing of signal groups from received I-PDUs into I-PDUs to become transmitted
* Communication transmission control (start / stop of I-PDU groups)
* Replications of send requests
* Guarantee of minimum distances between transmit I-PDUs
* Monitoring of receive signals (signals timeout)
* Filter mechanisms for incoming signals
* Different notification mechanisms
* Provision of init values and update indications
* Byte order conversion
* Sign extension
* Support of two different transmission modes per I-PDU
* Signal based gateway
* Support of large and dynamic length data types

## 模块依赖

This chapter lists all the features from other modules that are used by the AUTOSAR COM module and functionalities that are provided by the AUTOSAR COM module to other modules. For the placement of the AUTOSAR COM module in the communication stack, see Figure .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification is the AUTOSAR COM module Software Specification. It is based on the AUTOSAR COM SRS . It specifies how the requirements of the AUTOSAR COM SRS shall be realized. That means that the functionality and the API of the AUTOSAR COM module are described in this document.

Within the AUTOSAR Layered Architecture the AUTOSAR COM module is placed between its users (e.g. RTE, SwCluC) and the PDU Router, see .

The AUTOSAR COM module is derived from . For details, see Chapter . The AUTOSAR COM module provides signal gateway functionality. For details, see Chapter .

Main Features:

* Provision of signal oriented data interface for the users (e.g. RTE, SwCluC)
* Packing of AUTOSAR signals to I-PDUs to be transmitted
* Unpacking of received I-PDUs and provision of received signals to the users (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Acronyms, Abbreviations, and 定义
*原文标题：Acronyms, Abbreviations, and Definitions*

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the COM module that are not included in the .

| Acronym | Description |
|---|---|
| AUTOSAR COM | The AUTOSAR COM module is derived from . For details, see Chapter . |
| DM | Deadline Monitoring, for details see Chapter |
| I-PDU | Interaction Layer Protocol Data Unit. An I-PDU carries signals, it is defined in . |
| L-PDU | Data Link Layer Protocol Data Unit. In AUTOSAR, the Data Link Layer is equivalent to the Communication Hardware Abstraction and Microcontroller Abstraction Layer. |
| MDT | A detailed description of the Minimum Delay Timer (MDT) can be found in . See also Chapter . |
| PDU Router | The PDU Router is a module transferring I-PDUs from one module to another module. The PDU Router can be utilized for gateway operations and for internal routing purposes. |
| SDU | Service Data Unit. For a description see  and . |
| TM | Transmission Mode |
| TMC | Transmission Mode Condition, see Chapter |
| TMS | Transmission Mode Selector, see Chapter |

### 4. 定义
*原文标题：Definitions*

| Term | Description |
|---|---|
| Confirmation | With a Confirmation, the PDU Router reports that a request by the AUTOSAR COM module has been completed successfully. It is a reaction to a request of COM. E.g. when a PDU has been successfully transmitted. |
| Data Invalid Value | Value sent by the AUTOSAR COM module to indicate that the sender side AUTOSAR Software Component is not able to provide a valid value. |
| Dynamic Length Signal | A dynamic length signal is a signal which length can vary at run-time. |
| Dynamic Length I-PDU | A dynamic length I-PDU is an I-PDU containing a dynamic length signal. It length varies depending on the length of the included dynamic length signal. |
| Group signal | A group signal is a signal that is contained in a signal group. |
| Indication | An Indication is asynchronous information from PDU Router to COM, e.g. to acknowledge that something has been received. |
| Init Value | I-PDUs and signals are set to the Init Value by the AUTOSAR COM module after start-up. This value is used until it is overwritten. |
| I-PDU group | An I-PDU Group is an arbitrary collection of I-PDUs of the same direction (i.e. send or receive) in the COM module. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for COM.

Thus, the specification SWS BSW General shall be considered as additional and required specification for COM.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

The AUTOSAR COM module is based on . Nevertheless not all features of  are included and some features are different. See  for a list of not included features.

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This chapter lists all the features from other modules that are used by the AUTOSAR COM module and functionalities that are provided by the AUTOSAR COM module to other modules. For the placement of the AUTOSAR COM module in the communication stack, see Figure .

### 12. PDU Router

The AUTOSAR COM module uses the union of both sets of PDU Router's upper layer module APIs. That is the APIs for upper layer modules that uses TP and the APIs for upper layer modules that do not use TP. This is necessary since the AUTOSAR COM module transports I-PDUs either unfragmented via simple L-PDUs or fragmented via TP.

The following summarizes the functionality of the AUTOSAR COM module needs from the underlying layer PDU Router:

* Indication of incoming I-PDUs
* Sending interface for outgoing I-PDUs including the confirmation if an I-PDU has been sent by the communication controller
* Trigger interface to enable the PDU Router to cause a transmission from the AUTOSAR COM module
* Buffer handling for TP communication

Chapter  and Chapter  include a detailed description of the interfaces to the PDU Router. For further information, see .

### 13. Com Users

### 14. Runtime Environment (RTE)

The RTE uses the capabilities of the AUTOSAR COM module to send and receive signals. In AUTOSAR, the RTE is the higher layer above the AUTOSAR COM module. For further information, see .

### 15. SwCluC

SwCluC establishes inter-Software Cluster connection for exchanging (both providing and consuming) signals and signal groups. The Com users in Application Software Clusters can access the signals and signal groups via the SwCluC Com High Proxy. In the Host Software Cluster the SwCluC Com Low Proxy has the interface to the COM module.

Hence, the SwCluC Com Low Proxy provides callbacks for Signal- and Signal Group reception and transmission. It can also invoke the COM APIs for Signal reception and transmission. The existence of the SwCluC callbacks is configuration dependent. For further information, see .

### 16. 诊断 Event 管理器 (DEM)
*原文标题：Diagnostic Event Manager (DEM)*

The AUTOSAR COM module reports timeout status of signals and signal groups. For further information, see .

### 17. Default 错误 Tracer (DET)
*原文标题：Default Error Tracer (DET)*

The DET provides services to report development and runtime errors, see Chapter  and .

### 18. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , , and  and links to the fulfillment of these. Requirements that are not fulfilled by this document are linked to .

| Requirement | Description | Satisfied by |
|---|---|---|
| Basic SW security events |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| Shared code shall be reentrant |  |  |
| Error values naming convention |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| Status values naming convention |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support link-time configuration |  |  |
| All AUTOSAR standard types and constants shall be placed and organized in a standard type header file |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| Callback Function Return Types for AUTOSAR BSW |  |  |
| AUTOSAR Basic Software Modules callback functions are allowed to have parameters |  |  |
| All AUTOSAR Basic Software Modules shall not return specifi |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 功能规范
*原文标题：Functional specification*

### 20. 通用功能
*原文标题：General Functionality*

### 21. AUTOSAR COM basis

The ISO 17356-4 is the functional basis of the AUTOSAR COM module. In this document, it is referenced as .

  Upstream requirements:
⌈
The AUTOSAR COM module shall implement all the functionality and all the APIs of  except the features and APIs mentioned in .
⌋

  Upstream requirements:
⌈
If this AUTOSAR COM specification defines functionality in a different way compared to definitions in , the AUTOSAR COM module shall implement the functionality defined in this AUTOSAR COM specification.
⌋

  Upstream requirements:
⌈
The AUTOSAR COM module shall in addition implement all those features, that are defined in this AUTOSAR COM specification and that are not part of .
⌋

  Upstream requirements:
⌈
The AUTOSAR COM module may implement the following features of . If they are implemented in a specific AUTOSAR COM module, the configuration shall disable them by default. This also applies for all other additional features a specific implementation may provide.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Signal Values

The signals sent by the AUTOSAR COM module respectively received by the AUTOSAR COM module could have the values defined in Table .

| Signal value | Remark |
|---|---|
| init value | See Chapter  for details. |
| data invalid value | See Chapter  for details. |
| <value> | This is the normal case: A valid value after initialization phase, which is sent by the AUTOSAR COM module respectively, received by AUTOSAR COM module. |

### 23. Endianness Conversion and Sign Extension

Upstream requirements: ,
⌈
The AUTOSAR COM module shall support the following data types:

* boolean
* uint8
* uint16
* uint32
* uint64
* sint8
* sint16
* sint32
* sint64
* uint8
* float32
* float64

The type uint8 is mapped to either ComSignalType UINT8_N or `UINT8_DYN`.
⌋

  Upstream requirements:
⌈
The AUTOSAR COM module shall support endianness conversion for all supported signed and unsigned integer data types (see ).
⌋

  Upstream requirements:
⌈
The AUTOSAR COM module shall treat non-integer data types (e.g. uint8 or float32) either like integer data types of the matching size or leave their contents uninterpreted in case their ComSignalEndianness is configured to OPAQUE.
⌋

  Upstream requirements:
⌈
The AUTOSAR COM module shall interpret opaque data as uint8 and shall always map it to an n-bytes sized signal.
⌋

For opaque data endianness, conversion has to be configured to OPAQUE (see ComSignalEndianness).

  Upstream requirements:
⌈
The AUTOSAR COM module shall extend the endianness conversion defined in Clause 3.4 (Byte order conversion and message interpretation) of  to signed data types.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 过滤
*原文标题：Filtering*

Upstream requirements:
⌈
The AUTOSAR COM module shall evaluate each filtering condition to either true or false.
⌋

  Upstream requirements:
⌈
The AUTOSAR COM module shall filter out signals only at receiver side.
⌋

  Upstream requirements:
⌈
The AUTOSAR COM module shall use filtering mechanisms on sender side for Transmission Mode Conditions (TMC) but it shall not filter out signals on sender side.
⌋

For Transmission Mode Selection (TMS) see Chapters  and .

The AUTOSAR COM module only provides the following ComFilterAlgorithm of that which are defined in :

* ALWAYS
* NEVER
* `MASKED_NEW_EQUALS_X`
* `MASKED_NEW_DIFFERS_X`
* `MASKED_NEW_DIFFERS_MASKED_OLD`
* `NEW_IS_WITHIN`
* `NEW_IS_OUTSIDE`
* `ONE_EVERY_N`

To reduce complexity the AUTOSAR COM module does not support all filters defined in . The not supported filters are either obsolete or special cases of other filters. For example, the filter `NEW_IS_DIFFERENT` is a special case of `MASKED_NEW_DIFFERS_MASKED_OLD` with a fully set mask.

  Upstream requirements:
⌈
The AUTOSAR COM module shall support all filter mechanisms listed in ComFilterAlgorithm, considering the exceptions defined in  and .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Signal Gateway

The AUTOSAR COM module provides an integrated Signal Gateway for forwarding signals and group signals in a 1:n manner.

The routing relations are be statically configured via the ComGwMapping configuration container.

As shown in Figure  and Figure , the integrated Signal Gateway acts as a receiver for all signals or group signals which are configured as a source for gatewayed signals.

After the Signal Gateway received signal or group signals for routing, it acts immediately as a sender for these signals or group signals respectively. This is shown in Figure  and Figure . The signal processing does not differ if the integrated Signal Gateway forwards a signal / group signal or if a Software Component sends it.

Since the gateway relations are statically configured, an optimized Signal Gateway might skip some processing stages for concrete configurations. For example, the endianness conversion is not necessary in certain cases. Of course, such optimizations should not lead to any different logical behavior or different representations on the target bus. Optimizations may only be introduced to increase the Signal Gateway's performance.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Normal Operation

### 27. Start-Up 行为
*原文标题：Start-Up Behavior*

This chapter describes the actions that will be performed during `Com_Init`.

  Upstream requirements:
⌈
The AUTOSAR COM module shall initialize each I-PDU during execution of `Com_Init`, firstly byte wise with the ComTxIPduUnusedAreasDefault value and then bit wise according to initial values (ComSignalInitValue) of the contained signals and the update-bits (see ).
⌋

### 28. Preconditions

The C initialization code, also known as start-up code, initializes global and static variables with the initial values. It must be executed before any call of an AUTOSAR COM module's service.

### 29. 初始化
*原文标题：Initialization*

Upstream requirements:
⌈
The AUTOSAR COM module's initialization function `Com_Init` shall initialize all internal data that is not yet initialized by the start-up code e.g. C-structs.
⌋

This initialization chapter is not complete. Details about initialization of some AUTOSAR COM module's features are described within the different feature chapters.

### 30. 初始化 of Not Used Areas of an I-PDU
*原文标题：Initialization of Not Used Areas of an I-PDU*

Upstream requirements: ,
⌈
The AUTOSAR COM module shall fill not used areas within an I-PDU with a value determined by configuration parameter ComTxIPduUnusedAreasDefault e.g. 0xFF.
⌋

### 31. 初始化 of Signals and Update-Bits
*原文标题：Initialization of Signals and Update-Bits*

Upstream requirements:
⌈
The AUTOSAR COM module shall initialize each signal of n-bit sized signal type on sender and receiver side with the lower n-bits of its configuration parameter ComSignalInitValue.
⌋

The configured ComSignalInitValue is also used for the initialization of the signal in the related I-PDU; see .

The ComSignalInitValue of a signal can be identical to its ComSignalDataInvalidValue. These can be different for each signal.

  Upstream requirements: , ,
⌈
The AUTOSAR COM module shall clear all update-bits during initialization. See also .
⌋

### 32. 初始化 of I-PDU Groups
*原文标题：Initialization of I-PDU Groups*

Upstream requirements:
⌈
By default, all I-PDU groups shall be in the state stopped and they shall not be started automatically by a call to `Com_Init`.
⌋

### 33. De-Initialization

The AUTOSAR COM module provides the API function `Com_DeInit` for de-initialization of the COM layer. This means, after de-initialization of the layer, no communication via the AUTOSAR COM module is possible and all started I-PDU groups are stopped, see also .

### 34. Communication Modes

This chapter defines the signal flow in the AUTOSAR COM module. It further defines the different transmission modes provided by the AUTOSAR COM module. Chapter  defines a mechanism to switch between two transmission modes for one I-PDU. The replication of signals is defined in Chapter .

Exemplary communication use cases that the AUTOSAR COM module can deal with are shown in Chapter .

### 35. Transfer Properties and I-PDU Transmission 模式
*原文标题：Transfer Properties and I-PDU Transmission Mode*

### 36. Signals

The AUTOSAR COM module supports several transfer properties for signals and several transmission modes for I-PDUs. The definitions in this chapters are based on and are to be completed with the definitions in Clause 3.3.3 (Transfer properties for external communication) of .

  Upstream requirements:
⌈
At any send request of a signal with ComTransferProperty TRIGGERED assigned to an I-PDU with ComTxModeMode DIRECT or MIXED, the AUTOSAR COM module shall immediately (within the next main function at the latest) initiate ComTxModeNumberOfRepetitions plus one transmissions of the assigned I-PDU.
⌋

  Upstream requirements:
⌈
At any send request of a signal with ComTransferProperty `TRIGGERED_WITHOUT_REPETITION` assigned to an I-PDU with ComTxModeMode DIRECT or MIXED, the AUTOSAR COM module shall immediately (within the next main function at the latest) initiate one transmission of the assigned I-PDU.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Signal Groups

In AUTOSAR COM also signal groups and group signals may have a transfer property, defining in combination with the transmission mode, if the I-PDU is sent out in case of an update of a signal group or group signal, respectively.

  Upstream requirements:
⌈
At any send request of a signal group with ComTransferProperty TRIGGERED assigned to an I-PDU with ComTxModeMode DIRECT or MIXED, the AUTOSAR COM module shall immediately (within the next main function at the latest) initiate ComTxModeNumberOfRepetitions plus one transmissions of the assigned I-PDU.
⌋

  Upstream requirements:
⌈
At any send request of a signal group with ComTransferProperty `TRIGGERED_WITHOUT_REPETITION` assigned to an I-PDU with ComTxModeMode DIRECT or MIXED, the AUTOSAR COM module shall initiate one transmission of the assigned I-PDU within the next main function at the latest.
⌋

  Upstream requirements:
⌈
Regarding signal groups with ComTransferProperty `TRIGGERED_ON_CHANGE` which do not contain any signals that have an own ComGroupSignalTransferProperty configured:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Selection of the Transmission 模式 for one specific I-PDU
*原文标题：Selection of the Transmission Mode for one specific I-PDU*

I-PDUs carry signals. Because an I-PDU can contain more than one signal, in the following, a method is defined to derive the I-PDU's transmission mode from the state of the signals that are contained in one specific I-PDU.

The AUTOSAR COM module allows configuring statically two different transmission modes for each I-PDU (see ). The transmission mode of an I-PDU that is valid at a specific point in time is selected using only the values of the signals that are mapped to this I-PDU.

The signals of one I-PDU that contribute to the selection of one of the two transmission modes as well as the conditions used for the selection of the transmission mode are configured statically, see .

For the selection of the transmission mode, the AUTOSAR COM module treats group signals like normal signals.

  Upstream requirements:
⌈
For the evaluation of a TMS, the AUTOSAR COM module shall take all those (group) signals into account whose configuration include a configured ComFilter container. See included containers of ComSignal and ComGroupSignal.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Signal Flow and Transmission 模式 Selection
*原文标题：Signal Flow and Transmission Mode Selection*

After a send request from the user (e.g. RTE or SwCluC) for a specific signal, the signal is written to the appropriate I-PDU buffer as defined by configuration, and the selection of the transmission mode of the I-PDUs is done according to Chapter .

Figure  shows the signal flow (Conditions are the same as Filters in ):

### 40. Replication of Signal Transmission Requests

The number of repetitions of transmission requests in the ComTxModeMode DIRECT or MIXED for a send request by the user (e.g. RTE or SwCluC) is defined by configuration parameter ComTxModeNumberOfRepetitions.

  Upstream requirements:
⌈
If ComRetryFailedTransmitRequests is set to false and an I-PDU with ComTxModeMode DIRECT or MIXED and ComTxModeNumberOfRepetitions set to 0 is triggered for sending, the AUTOSAR COM module shall invoke `PduR_ComTransmit` for this I-PDU just once, independently of the result of the confirmation.
⌋

Configuring ComTxModeNumberOfRepetitions to 0 imitates the original direct transmission mode of .

  Upstream requirements:
⌈
If a new send request is received from the user (e.g. RTE or SwCluC) while sending n transmissions belonging together (e.g. after the 3^(rd) of 5 repetitions, see ) the AUTOSAR COM module shall cancel the remaining transmission repetitions and start processing the new request within the next main function at the latest.
⌋

See also Use case .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Retry Failed Transmission Requests

Upstream requirements:
⌈
If ComRetryFailedTransmitRequests is set to true and ComIPduLargeData is set to false, the return value of `PduR_ComTransmit` shall be evaluated. If the return value of `PduR_ComTransmit` is not equal to E_OK, the AUTOSAR COM Module shall invoke `PduR_ComTransmit` for the not sent I-PDU again within the next `Com_MainFunctionTx`.
⌋

In case of retry, if the I-PDU is updated in between, the new data will be sent. Large Data Path avoids I-PDU buffering in COM, therefore retry is not possible in that case.

 may lead to multiple retries for the same failed transmission request.  is not affected by transmission mode changes.  has no influence on a potential repetition period. Any repetitions will occur as if no retry had taken place.

  Upstream requirements:
⌈
The AUTOSAR COM module shall start the transmission deadline monitoring independently of possible retries. Subsequent retries shall not affect transmission deadline monitoring.
⌋

  Upstream requirements:
⌈
If ComRetryFailedTransmitRequests is set to true and a transmission deadline monitoring timeout occurs for an I-PDU, the AUTOSAR COM module shall expire any pending transmission request for this I-PDU.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Signal Invalidation

The AUTOSAR COM module provides the possibility for the sender to indicate that it is not able to provide a valid value for a corresponding signal, for example in case a sensor is faulty. The AUTOSAR COM module allows defining a ComSignalDataInvalidValue during configuration.

### 43. Transmission of an Invalidated Signal

Upstream requirements:
⌈
By a call to `Com_InvalidateSignal`, the AUTOSAR COM module shall perform internally a `Com_SendSignal` with the configured ComSignalDataInvalidValue.
⌋

The ComTransferProperty and the transmission mode determine the transmission of the ComSignalDataInvalidValue on the bus. The internally performed `Com_SendSignal` with the data invalid value leads to data invalid value to be used as current value for filters and TMS.

The data invalid values are configured per ComGroupSignal.

The VFB defines only one attribute for a complex data type. Therefore, the best mapping of an invalidated complex data type to an invalidated signal group is to invalidate all group signals of a signal group. Therefore, the user (e.g. RTE or SwCluC) can also request to invalidate the complete signal group by a call to `Com_InvalidateSignalGroup`.

### 44. Reception of an Invalidated Signal

Upstream requirements:
⌈
If the configured ComSignalDataInvalidValue is received for a signal and the ComDataInvalidAction is configured to NOTIFY for this signal, the AUTOSAR COM module shall notify the users (e.g. RTE, SwCluC) via the configured <`ComUser_CbkInv`> function. In this case, no other signal processing like filtering or the normal signal indication shall take place.
⌋

The reception deadline monitoring timer is also restarted in case of receiving an invalid signal or signal group, see .

  Upstream requirements: ,
⌈
If the configured ComSignalDataInvalidValue is received for a signal and the ComDataInvalidAction is configured to REPLACE for this signal, the AUTOSAR COM module shall replace the signal's value by its configured ComSignalInitValue. After the replacement, the normal signal processing like filtering and notification shall take place as if the ComSignalInitValue would have been received instead of the ComSignalDataInvalidValue.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. 处理 of I-PDUs
*原文标题：Handling of I-PDUs*

### 46. I-PDU Group 定义
*原文标题：I-PDU Group Definitions*

For an I-PDU group the following rules apply:

# An I-PDU can belong to any I-PDU group.
# An I-PDU is active (started) if it belongs to a started I-PDU group (see ) or it does not belong to any I-PDU group and it was started implicitly (see ).
# The maximum number of I-PDU groups is pre-compile configurable.
# I-PDU groups may contain only I-PDUs of the same direction (i.e. send or receive), see .

Rules 1 and 3 are supported by the COM configuration. The maximum number of supported I-PDU groups can be configured via ComSupportedIPduGroups.

  Upstream requirements:
⌈
An I-PDU is active (started) if at least one I-PDU group is active (started) it belongs to.
⌋

For the AUTOSAR COM module, the nesting of I-PDU groups is purely conceptual and must be resolved by an appropriate configuration and / or usage of the AUTOSAR COM module.

For example, if an I-PDU "BUS1 RX Function1" belongs to I-PDU group "BUS1 RX" and I-PDU group "BUS1 RX" is included in I-PDU group "BUS1" then I-PDU "BUS1 RX Function1" must also be included in I-PDU group "BUS1". Such dependencies need to be resolved at configuration time.

Once again, the COM module does not know or handle any grouping of I-PDUs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Starting of I-PDU Groups

By default all I-PDU groups are stopped, see . A call to `Com_IpduGroupStart` starts an I-PDU group if it was previously stopped.

  Upstream requirements:
⌈
If an I-PDU is started by `Com_IpduGroupStart`, the AUTOSAR COM module shall permit to transmit / receive its signals and signal groups.
⌋

See also Table .

  Upstream requirements:
⌈
If an I-PDU is started by `Com_IpduGroupStart`, the AUTOSAR COM module shall always initialize the following attributes of this I-PDU:

# ComMinimumDelayTime of I-PDUs in transmission mode DIRECT or MIXED
# restart all reception deadline monitoring timers for all signals with a non-zero configured ComFirstTimeout
# cancel all transmission deadline monitoring timers and use ComFirstTimeout (if configured) as value when a transmission timer is started the first time after the I-PDU activation
# all included update-bits shall be cleared
# reset OCCURRENCE of filters with ComFilterAlgorithm `ONE_EVERY_N`
⌋

If I-PDU is already started through another I-PDU group then `Com_IpduGroupStart` does not change I-PDU state therefore no action is necessary.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. Stopping of I-PDU Groups

A call to `Com_IpduGroupStop` stops an I-PDU group, if it was previously started.

In order to disable the transmission of an I-PDU, all I-PDU groups containing this I-PDU needs to be stopped. Hence, to implement listen-only-mode, all I-PDU groups containing transmission I-PDUs needs to be stopped. Receiving of I-PDUs may also be stopped.

  Upstream requirements:
⌈
By a call to the functions: `Com_SendSignal`, `Com_SendSignalGroup`, or `Com_InvalidateSignal`, the AUTOSAR COM module shall update the values of its internal buffers even for stopped I-PDUs.
⌋

See also Table .

If a signal written to a stopped I-PDU would trigger the transmission of this I-PDU if it were not stopped, then this trigger is not stored. After re-starting the corresponding I-PDU group, such an old trigger does not lead to an immediate transmission of the I-PDU.

  Upstream requirements:
⌈
If an I-PDU is stopped by `Com_IpduGroupStop`, the AUTOSAR COM module shall cancel any remaining transmission requests for this I-PDU. This includes cancelling any potential retries with respect to ComRetryFailedTransmitRequests.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. Signal Indication (Unpacking of I-PDUs)

In order to support both interrupt-driven and polled systems, it can be configured when the signal indication takes place. There are two configurable signal indication modes IMMEDIATE and DEFERRED configurable via ComIPduSignalProcessing.

  Upstream requirements:
⌈
If ComIPduSignalProcessing for an I-PDU is configured to IMMEDIATE, the AUTOSAR COM module shall invoke the configured <`ComUser_CbkRxAck`> for the included signals and signal groups within the `Com_RxIndication`, or `Com_TpRxIndication` function respectively.
⌋

  Upstream requirements:
⌈
If ComIPduSignalProcessing for an I-PDU is configured to DEFERRED, the AUTOSAR COM module shall first copy the relevant data (e.g. configured ComSignal) of the received I-PDU within the `Com_RxIndication` function or the related TP reception functions respectively from the PduR into COM. Then the AUTOSAR COM module shall invoke the configured <`ComUser_CbkRxAck`> for the included signals and signal groups asynchronously during the next call to `Com_MainFunctionRx`.
⌋

For signals with dynamic length, the AUTOSAR COM has to consider the configured length according to ComSignalLength for the buffer allocation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 200 章（内容从略，见纯文本全文）

50. Minimum Delay Timer (MDT)
51. Deadline Monitoring
52. Reception Deadline Monitoring
53. En-/Disable Reception Deadline Monitoring
54. Transmission Deadline Monitoring
55. Transmission Deadline Monitoring with N-Times Transmission 模式
56. 通知处理
57. Signal Groups - Complex 数据类型
58. 初始化
59. Transmission
60. Reception
61. 通知
62. Attributes of a Signal Group
63. UINT8-array based access to signal groups
64. 基础 functionality
65. 初始化
66. Transmission
67. Reception
68. Large 数据类型
69. Transmission of Large Signals / I-PDUs
70. Reception of Large Signals / I-PDUs
71. Large 数据 Path 支持
72. Overall
73. Transmission
74. IF
75. TP
76. Reception
77. IF
78. TP
79. Dynamic Length Signals
80. Transmission of Dynamic Length Signals / I-PDUs
81. Reception of Dynamic Length Signals / I-PDUs
82. MetaData 处理
83. 接口 between AUTOSAR COM 模块 and the PDU Router
84. Update-Bits
85. Sender Side
86. Receiver Side
87. Signal Gateway
88. Dealing with Signals
89. Dealing with Group Signals
90. Routing of Out-Timed Signals and Signal Groups
91. 处理 of Update-Bits
92. Decoupling Signal Gateway
93. 错误分类
94. Development 错误
95. Runtime 错误
96. Production 错误
97. Extended Production 错误
98. AUTOSAR COM 模块's Interaction 建模
99. Multicore Distribution
100. 软件 Cluster Connection Layer (SwCluC)
101. 安全事件
102. API 规范
103. Imported 类型
104. 类型定义
105. Com_StatusType
106. Com_SignalIdType
107. Com_SignalGroupIdType
108. Com_IpduGroupIdType
109. Com_ConfigType
110. 功能定义
111. Return Codes
112. Start-Up and 控制服务
113. Com_Init
114. Com_DeInit
115. Com_IpduGroupStart
116. Com_IpduGroupStop
117. Com_EnableReceptionDM
118. Com_DisableReceptionDM
119. Com_GetStatus
120. Communication 服务
121. Com_SendSignal
122. Com_SendDynSignal
123. Com_ReceiveSignal
124. Com_ReceiveDynSignal
125. Com_SendSignalGroup
126. Com_ReceiveSignalGroup
127. Com_SendSignalGroupArray
128. Com_ReceiveSignalGroupArray
129. Com_ReceiveSignalWithMetaData
130. Com_ReceiveDynSignalWithMetaData
131. Com_ReceiveSignalGroupWithMetaData
132. Com_ReceiveSignalGroupArrayWithMetaData
133. Com_SendSignalWithMetaData
134. Com_SendDynSignalWithMetaData
135. Com_SendSignalGroupWithMetaData
136. Com_SendSignalGroupArrayWithMetaData
137. Com_InvalidateSignal
138. Com_InvalidateSignalGroup
139. Com_TriggerIPDUSend
140. Com_TriggerIPDUSendWithMetaData
141. Com_SwitchIpduTxMode
142. Com_Transmit
143. Com_TriggerTransmit
144. Com_RxIndication
145. Com_TpRxIndication
146. Com_TxConfirmation
147. Com_TpTxConfirmation
148. Com_StartOfReception
149. Com_CopyRxData
150. Com_CopyTxData
151. Scheduled functions
152. Com_MainFunctionRx
153. Com_MainFunctionTx
154. Com_MainFunctionRouteSignals
155. Expected 接口
156. Mandatory 接口
157. Optional 接口
158. Configurable 接口
159. 时序图
160. 接口 between the AUTOSAR COM 模块 and the PDU Router
161. Confirmation 处理 between the PDU Router, the AUTOSAR COM 模块 and the RTE
162. Indication 处理 between the PDU Router, the AUTOSAR COM 模块 and the RTE
163. Large 数据 Path Transmission
164. TP API
165. IF API
166. TriggerTransmit
167. Large 数据 Path Reception
168. TP API
169. IF API
170. 配置规范
171. How to read this chapter
172. Containers and 配置 parameters
173. the AUTOSAR COM 模块的配置
174. Com
175. ComGeneral
176. ComSecurityEventRefs
177. ComConfig
178. ComMainFunctionRx
179. ComMainFunctionTx
180. ComMainFunctionRouteSignals
181. ComFilter
182. ComIPdu
183. ComMetaDataDefaultItem
184. ComTxIPdu
185. ComIPduGroup
186. ComSignal
187. ComDemEventParameterRefs
188. ComSignalGroup
189. ComGroupSignal
190. ComTxMode
191. ComTxModeTrue
192. ComTxModeFalse
193. ComGwMapping
194. ComGwSource
195. ComGwSourceDescription
196. ComGwDestination
197. ComGwDestinationDescription
198. ComGwSignal
199. ComUserModule
200. ComUserUriDefSet
201. ComUserModuleCnf
202. ComUserIPdu
203. ComUserSignal
204. ComUserSignalGroup
205. ComUserCallback
206. 配置 Rules
207. Signal 配置
208. Signal Group 配置
209. Transmission 模式配置
210. Signal Gateway 配置
211. Filter 配置
212. Large 数据 Path 配置
213. Dynamic Length I-PDU 配置
214. Meta 数据配置
215. I-PDU Group 配置
216. 配置 of Com Users
217. ECUC 分区 Specific Com User
218. ECUC 分区 Unspecific Com User
219. Relation to SwCluC Com Proxy
220. 发布信息
221. 附录
222. 不适用需求
223. 附录
224. Use Case 1
225. Use Case 2
226. Use Case 3
227. Use Case 4
228. Use Case 5
229. Use Case 6
230. Use Case 7
231. Change history of AUTOSAR traceable items
232. Traceable item history of this document according to AUTOSAR Release R24-11
233. Added 规范 Items in R24-11
234. Changed 规范 Items in R24-11
235. Deleted 规范 Items in R24-11
236. Traceable item history of this document according to AUTOSAR Release R25-11
237. Added 规范 Items in R25-11
238. Changed 规范 Items in R25-11
239. Deleted 规范 Items in R25-11
240. Added Constraints in R25-11
241. Changed Constraints in R25-11
242. Deleted Constraints in R25-11
243. Traceable item history of this document according to AUTOSAR Release R26-11
244. Added 规范 Items in R26-11
245. Changed 规范 Items in R26-11
246. Deleted 规范 Items in R26-11
247. Added Constraints in R26-11
248. Changed Constraints in R26-11
249. Deleted Constraints in R26-11
