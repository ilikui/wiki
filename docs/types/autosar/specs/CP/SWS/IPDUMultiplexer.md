# Specification of I-PDU Multiplexer (`IPDUMultiplexer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 182 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_IPDUMultiplexer_182\AUTOSAR_CP_SWS_IPDUMultiplexer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_IPDUMultiplexer_182\AUTOSAR_CP_SWS_IPDUMultiplexer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_IPDUMultiplexer_182\zzgen\CP_SWS_IPDUMultiplexer.complete.txt`

## 文档简介

This specification describes the functionality, APIs and the configuration of the AUTOSAR Basic Software module I-PDU Multiplexer IpduM.

PDU multiplexing means using the same PCI (Protocol Control Information) of a PDU (Protocol Data Unit) with more than one unique layout of its SDU (Service Data Unit). A selector field is a piece of the SDU of the multiplexed PDU. It is used to distinguish the contents of the multiplexed PDUs from each other.

Multiplexing of PDUs is currently known from CAN, but is not restricted to this communication system.

On sender-side, the I-PDU Multiplexer module is responsible to combine appropriate I-PDUs from COM to new, multiplexed I-PDUs and send them back to the PDU Router. On receiver-side, it is responsible to interpret the content of multiplexed I-PDUs and provide COM with its appropriate separated I-PDUs taking into account the value of the selector field.

## 模块依赖

This chapter lists all the features from other modules that are used by the AUTOSAR IpduM and functionalities that are provided by AUTOSAR IpduM to other modules.

Because the IpduM module deals with PDUs that are either sourced or sunk by other modules, care must be taken that shared configuration items are consistent between the modules.

The IpduM is arranged next to the PDU Router in the layered architecture of AUTOSAR; see Figure .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, APIs and the configuration of the AUTOSAR Basic Software module I-PDU Multiplexer IpduM.

PDU multiplexing means using the same PCI (Protocol Control Information) of a PDU (Protocol Data Unit) with more than one unique layout of its SDU (Service Data Unit). A selector field is a piece of the SDU of the multiplexed PDU. It is used to distinguish the contents of the multiplexed PDUs from each other.

Multiplexing of PDUs is currently known from CAN, but is not restricted to this communication system.

On sender-side, the I-PDU Multiplexer module is responsible to combine appropriate I-PDUs from COM to new, multiplexed I-PDUs and send them back to the PDU Router. On receiver-side, it is responsible to interpret the content of multiplexed I-PDUs and provide COM with its appropriate separated I-PDUs taking into account the value of the selector field.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the I-PDU Multiplexer module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| COM I-PDU | I-PDU assembled in the COM module out of COM Signals |
| contained I-PDU | I-PDU assembled into or extracted from a Container PDU |
| Container PDU | PDU containing I-PDUs and headers |
| dynamic part | see |
| instance of an I-PDU | IpduM I-PDU with one specific layout and content |
| Instances of a Container | Instances of the same Container PDU |
| IpduM | I-PDU Multiplexer |
| IpduM I-PDU | I-PDU assembled in the IpduM module out of two COM I-PDUs |
| multiplexed I-PDU | see IpduM I-PDU |
| segment | The static or dynamic part may consist of more than one piece. These pieces are called segments. See also Chapter  and Figure . |
| selector field | see |
| signal | see |
| signal group | see |
| static part | see |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for I-PDU Multiplexer.

Thus, the specification SWS BSW General shall be considered as additional and required specification for I-PDU Multiplexer.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

For transmission of multiplexed I-PDUs, minimum delay time observation cannot be taken into account. For more details, see  and Chapter .

For transmission of container PDUs with static layout, minimum delay time cannot be ensured if two or more contained PDUs have each MDT configuration.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. Applicability to safety related environments

This document has been created in absence of a safety case and a safety plan. Thus, the direct results of this document can only be used within safety relevant systems after repeating certain process steps as required in the .

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This chapter lists all the features from other modules that are used by the AUTOSAR IpduM and functionalities that are provided by AUTOSAR IpduM to other modules.

Because the IpduM module deals with PDUs that are either sourced or sunk by other modules, care must be taken that shared configuration items are consistent between the modules.

The IpduM is arranged next to the PDU Router in the layered architecture of AUTOSAR; see Figure .

### 11. AUTOSAR OS

Upstream requirements:
⌈
The IpduM shall not directly access the AUTOSAR OS.
⌋

### 12. RTE (BSW Scheduler)

The RTE includes the BSW-Scheduler (see ).

The IpduM module relies on the BSW-scheduler calling `IpduM_MainFunctionRx` and `IpduM_MainFunctionTx` at a period as configured in IpduMMainRxTimeBase or IpduMMainTxTimeBase respectively.

### 13. PDU Router

The following summarizes the functionality IpduM needs from the PDU Router (for more details see Chapter ):

* indication of incoming multiplexed or contained I-PDUs
* sending interface for outgoing I-PDUs (Container or Multiplexed PDUs)
* confirmation of I-PDUs which went out

The following list summarizes the functionality provided by the IpduM module for the PDU Router module:

* indication interface for incoming I-PDUs, which are de-multiplexed and for incoming Container-PDUs, which are to be disassembled
* sending interface for to be multiplexed I-PDUs and I-PDUs, which are to be assembled into a Container PDU
* confirmation interface for transmitted I-PDUs

The configuration of the PDU Router module (e.g. look-up tables) must be such that the I-PDUs, which belong to multiplexed I-PDUs and represent a static or a dynamic part of a multiplexed I-PDU, are routed to the IpduM module.

The configuration of the PDU-Router module (e.g. look-up tables) must be such that the relevant I-PDUs are routed to IpduM. These are:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. COM

The configuration of the IpduM module relies on a corresponding configuration of the AUTOSAR COM module. For each multiplexed I-PDU, there need to be different I-PDUs for the static part and each layout of the dynamic part. For further information configured in the COM module, see Chapter  and especially Figure .

The IpduM further assumes that the correct selector field values are already contained in the COM's modules I-PDU representing the dynamic parts. See also .

The configuration of Container PDUs/ contained I-PDUs does not depend on the COM configuration.

### 15. 文件结构
*原文标题：File structure*

### 16. 代码文件结构
*原文标题：Code file structure*

This IpduM SWS does not define the code file structure completely.

### 17. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules shall be documented according to a common standard. |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support link-time configuration |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| BSW Modules shall support multiple configuration sets |  |  |
| API handling in uninitialized state |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| The BSW module description template shall provide means to model the defined trigger conditions of schedulable objects |  |  |
| Access to OS is restricted |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 功能规范
*原文标题：Functional specification*

### 19. 通用
*原文标题：General*

There are two different approaches of multiplexing several I-PDUs into one resulting PDU being transferred on the bus:

I-PDU Multiplexing means using the same I-PDU ID transferred from the PDU Router to the Communication Hardware Abstraction Layer with more than one unique layout of this I-PDU; see also .

Multiple PDU to Container Mapping means collecting several I-PDUs into one Container PDU. This Container PDU is then transferred via PduR as one (large) I-PDU. This way advantage of the larger frame sizes of newer bus systems can be taken, allowing an efficient usage of the bandwidth in combination with smaller I-PDU sizes (usually 8 bytes).

  Upstream requirements:
⌈
The IpduM shall be implemented so that no other modules depend on it and that it is be possible to build a system without the IpduM module if it is not needed.
⌋

### 20. I-PDU Multiplexing

### 21. 定义 and Layout
*原文标题：Definitions and Layout*

A multiplexed I-PDU consists of a static part and a dynamic part, where the static part consists of zero or more signals or signal groups. The dynamic part consists of the selector field and one or more signals or signal groups; see Figure .

The dynamic part of an I-PDU is comparable with a union of the programming language C. Depending on the value of the selector field inside the I-PDU, the actual layout of the I-PDU is selected.

The position of the static and the dynamic part are configurable per I-PDU. The static and the dynamic part can be subdivided into different segments.

Only one selector field can be defined for each multiplexed I-PDU. The value of the selector field defines how the content of the dynamic part of the I-PDU will be interpreted. The selector field has a configurable size between 1 and 16 contiguous bits and its position can be defined by configuration, see  and .

See Chapter  for an overview of the IpduM configuration. Chapter  defines the configuration rules.

Multiplexing of PDUs is originally known from CAN, but it is not restricted to this communication system.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 通用
*原文标题：General*

There is one COM I-PDU for the static part and one COM I-PDU for each layout of the dynamic part of one multiplexed IpduM I-PDU, so the IpduM combines at most two I-PDUs of COM.

  Upstream requirements:
⌈
The IpduM module shall not set the selector field.
⌋

The IpduM module relies on the configuration of the COM module. For each dynamic layout, an I-PDU needs to be configured in COM. Such I-PDUs already have to contain the correct selector field value. The selector field values in COM can be initialized by configuring them as signals that are initialized with an init value but are never written after initialization.

  Upstream requirements: ,
⌈
The IpduM shall respect the IpduMByteOrder when interpreting the selector field value.
⌋

For a detailed description of the transmission and reception of a multiplexed I-PDU see Chapter  and .

### 23. 初始化
*原文标题：Initialization*

The IpduM module provides an initialization function `IpduM_Init` defined in . This function initializes all internal global variables and the buffers of the IpduM I-PDUs. For more details, see Chapter .

The environment of the IpduM shall call `IpduM_Init` before calling any other function of the IpduM module.

The implementer has to ensure that `IPDUM_E_UNINIT` is returned in development mode in case an API function (except `IpduM_MainFunctionTx` and `IpduM_MainFunctionRx`) is called before the module is initialized.

For the I-PDU data transmission pathway through the IpduM module, a buffer is allocated inside the IpduM module. This buffer needs to be initialized because it might be transmitted before it has been fully populated with data by the COM module. The initialization data of this buffer is derived from the initial values of the COM module's configuration as follows:

#
    Upstream requirements:
  ⌈
  The IpduM shall initialize its internal transmit buffers with the configured pattern IpduMIPduUnusedAreasDefault.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Transmission

Inside COM, there are separated I-PDUs for the static part and one for each dynamic part of a multiplexed I-PDU.

The static part and the dynamic parts are treated in COM as separate I-PDUs with their own I-PDU IDs.

  Upstream requirements:
⌈
For a multiplexed I-PDU IpduM shall merge the corresponding two COM I-PDUs representing the associated static part and the last received dynamic part into one single IpduM I-PDU with a new unique I-PDU ID. IpduM shall send out this new IpduM I-PDU to the PDU Router module.
⌋

See also .

For details about the trigger of the transmission, see Chapter .

All control functionalities like deadline monitoring of the COM I-PDUs and update-bit evaluation are out of the scope of the IpduM and have to be done by the COM layer. For details about the timing-behavior of the new combined I-PDU see Chapter .

### 25. Transmission request

The IpduM module provides an `IpduM_Transmit` function so that the PDU Router is able to initiate the transmission of an I-PDU; see .

  Upstream requirements:
⌈
The function `IpduM_Transmit` shall assemble the multiplexed I-PDU, using the related static and dynamic part, and transmit it according to the trigger conditions/ modes as defined in  and .
⌋

As defined in Chapter , each outgoing I-PDU has an initial value so that, should an I-PDU be transmitted by the IpduM module before both static and dynamic parts have been sent from COM to the IpduM, a value defined by the configuration is transmitted.

  Upstream requirements:
⌈
As long as no transmission confirmation for the IpduM I-PDU is received (regardless of the result), the function `IpduM_Transmit` shall return E_NOT_OK for any new transmission request from the upper layer with a COM I-PDU belonging to the same IpduM I-PDU.
⌋

The IpduM module relies here on a configured transmission configuration in the lower layer.

In case a multiplexed I-PDU is only triggered for sending by either updating the dynamic or static part, the non-triggering part might be overwritten if updated multiple times between two transmissions.

### 26. Transmission trigger

The IpduM module receives the static and the dynamic part of a multiplexed I-PDU by separated two transmission requests as two single COM I-PDUs from the PDU Router module.

  Upstream requirements:
⌈
The IpduM module shall be configurable to send a transmission request for the new multiplexed I-PDU to the PDU Router because of the following trigger conditions/modes:

* receiving a static part
* receiving a dynamic part
* receiving a static or a dynamic part
* does not trigger transmission because of receiving anything of this I-PDU (IpduMTxTriggerMode None) in case of TriggerTransmit

For configuration, see .
⌋

The four trigger conditions/ modes defined by  allow controlling the transmission mode of the new assembled I-PDU by the transmission modes of the single I-PDUs sent by COM, see also .

Not all of four trigger conditions/ modes defined by  guarantee the minimum delay time between consecutive transmissions of different instances of multiplexed I-PDUs, because if the transmission is triggered by static and dynamic part or only by the dynamic part, COM does not take care for the minimum delay time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Just-In-Time update of parts

Sometimes it may be unwanted that the IpduM module not just sends out the locally stored parts, since these parts may contain outdated information e.g. update-bits. Therefore, the IpduM supports a per part configurable just-in-time update mechanism.

  Upstream requirements:
⌈
In case the transmission of a multiplexed I-PDU is triggered by the update of one part and IpduMJitUpdate is configured to true for the second part, the IpduM module shall update the second part via `PduR_IpduMTriggerTransmit` before the multiplexed I-PDU is sent out via `PduR_IpduMTransmit`.
⌋

  Upstream requirements:
⌈
In case the contents of a multiplexed I-PDU is requested via `IpduM_TriggerTransmit`, the IpduM module shall update all parts which have IpduMJitUpdate configured to true before returning the contents of the multiplexed I-PDU.
⌋

  Upstream requirements:
⌈
In case the IpduM shall update the dynamic part just-in-time, the latest dynamic part sent by the upper layer shall be updated or the dynamic part referenced by IpduMInitialDynamicPart if no dynamic part was sent before.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Transmission confirmation

Transmission confirmations are given to the IpduM module by the PDU Router according to the configuration of the I-PDUs in the PDU Router.

  Upstream requirements: ,
⌈
If the IpduM receives a TxConfirmation for a specific IpduM I-PDU, it shall translate this confirmation into the corresponding confirmations for the COM I-PDUs, which were contained in the last sent out multiplexed IpduM I-PDU.
⌋

Depending on the configuration of IpduMTxDynamicConfirmation and IpduMTxStaticConfirmation, the IpduM will pass zero, one or two confirmations towards COM for one send request. The number of confirmations given to the upper layer does not depend on the IpduMTxTriggerMode.

Examples:

* If neither IpduMTxDynamicConfirmation nor IpduMTxStaticConfirmation for the corresponding IpduMTxRequest is configured to true, no COM confirmation is generated.
* If IpduMTxStaticConfirmation is configured to true but and IpduMTxDynamicConfirmation is configured to false (or vice versa), then only one COM confirmation is generated.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Reception

Every I-PDU which is received by the Communication Hardware Abstraction (CAN Interface, Lin Interface, FlexRay Interface) is given to the PDU Router. The PDU Router routes multiplexed I-PDUs to the IpduM module. The IpduM module separately routes the static and dynamic parts of the multiplexed I-PDU to their destinations.

It is known at configuration-time which incoming I-PDU IDs correspond to multiplexed I-PDUs with a static part configured. The I-PDU ID is all that is necessary to work out if there is a static part present.

There are no requirements to handle or notify wrongly configured parts. Hence, if the received I-PDU contains segments not configured for reception on this ECU, they will be ignored silently. Furthermore, if an I-PDU is configured with a PduLength of 0, it will also be ignored silently, since no meaningful processing can be configured.

This situation might occur in a gateway setting, if a multiplexed I-PDU is always routed onto another bus by the PDU Router, but contains a signal in one dynamic part that must be passed to the application. In this case, the multiplexed PDU would have to be routed to the IpduM as well.

### 30. Metadata 处理
*原文标题：Metadata handling*

The requirements of this section only apply if IpduMMetaDataSupport is configured to true.

  Upstream requirements:
⌈
If IpduMTxTriggerMode is configured to a different value than NONE, the IpduM shall use the MetaData of the triggering part for sending of the multiplexed I-PDU.
⌋

  Upstream requirements:
⌈
If IpduMTxTriggerMode is configured to NONE, the IpduM shall use the MetaData of the last updated part for sending of the multiplexed I-PDU.
⌋

  Upstream requirements:
⌈
On receiver side the IpduM shall forward the received MetaData along with all demultiplexed parts.
⌋

### 31. Multiple-PDU-to-Container 处理
*原文标题：Multiple-PDU-to-Container handling*

IpduM supports a mapping of several I-PDUs to one Container PDU. Both contained and Container PDUs are regular PDUs from PduR's point of view. The Container layout can either be dynamically defined using headers in front of the contained I-PDUs or statically without headers but defined static positions for contained I-PDUs.

IpduM relies on PduR beeing configured to forward send-PDUs mapped to a Container-PDU and received Container-PDUs to IpduM.

### 32. Dynamic Container Layout

Status: DRAFT
  Upstream requirements:
⌈
Inside a dynamic Container PDU IpduM shall place the header of a contained I-PDU in front of the contained I-PDU.
⌋

See also Figure .

For dynamic Container PDUs, there is no configuration of the positions of contained I-PDUs inside the Container PDU, thus the position of an arbitrary contained I-PDU is determined by the length of payload (DLC) and headers of the preceding (added before) contained I-PDUs.

The number of I-PDUs contained in a Container PDU is limited by the maximum size of the Container PDU (PDULength of ECUC-PDU).

The following approaches regarding the order inside the Container I-PDU are possible:

* retained order (see  and ): the order of the contained I-PDUs inside the Container PDU will be retained. This way all contained I-PDUs are extracted in the same order as they have been put into the Container PDU.
* order by priority: the order of the contained I-PDUs inside the Container PDU is based on the configured priority.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Static Container Layout

To enable the static container layout, the IpduMContainerHeaderSize of the Container PDU has to be configured to `IPDUM_HEADERTYPE_NONE`.

  Status: DRAFT
  Upstream requirements:
⌈
If the IpduMContainerHeaderSize is set to `IPDUM_HEADERTYPE_NONE`, the IpduM module shall statically place the contained I-PDUs within the Container PDU according to their configured IpduMContainedPduOffset.
⌋

For the Static Container Layout only contained I-PDUs with IpduMContainedTxPduCollectionSemantics set to `IPDUM_COLLECT_LAST_IS_BEST` is supported (see ).

### 34. Transmission

The requirements within this section and its subsections apply to the transmission of Dynamic Containers and Static Containers. Deviations are explicitly mentioned.

### 35. Transmission request

IpduM collects transmission requests for contained I-PDUs from the upper layers per Container PDU. Along with a transmission request the IpduM has to provide a buffer for the corresponding contained I-PDUs based on the configuration:

* In case the Container PDU has IpduMContainedTxPduCollectionSemantics set to `IPDUM_COLLECT_QUEUED`, the IpduM stores the corresponding contained I-PDU internally.
* In case the Container PDU has IpduMContainedTxPduCollectionSemantics set to `IPDUM_COLLECT_LAST_IS_BEST`, the IpduM has to store transmission requests. If a Container PDU is transmitted, the IpduM fetching the data of the contained I-PDUs according to the transmission requests from the I-PDU buffer of the corresponding upper layer.

Independent of the buffer strategy, if a transmission request for a Contained I-PDU is indicated, the specification use the term that a "transmission request of a contained I-PDU is assigned to a Container PDU".

### 36. Transmission trigger condition

The trigger condition for a transmission of a Container PDU is influenced by several configurable transmission trigger and by transmission trigger which could occure on runtime:

* IpduMContainedTxPduTrigger: `IPDUM_TRIGGER_ALWAYS`, `IPDUM_TRIGGER_NEVER`
* IpduMContainerTxFirstContainedPduTrigger
* IpduMContainerTxSendTimeout
* IpduMContainedTxPduSendTimeout
* Only for Dynamic Container: IpduMContainerTxSizeThreshold
* Only for Dynamic Container: Exceed maximum size of the Container PDU
* Only for Static Container: All contained I-PDUs of the same Container PDU were updated (see )

The first occurence of a transmission trigger for an instance of a Container PDU triggers the transmission process. Any further occurence of a transmission trigger to that instance of Container PDU will not impact the transmission process.

 Behaviour for the occurence of multiple assigned transmission requests
  Upstream requirements:
⌈
If a Container PDU has been triggered for transmission, then any further transmission trigger for that instance of Container PDU shall be ignored.
⌋

The IpduM need to consider displacement of contained I-PDUs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Assembly of Container PDUs

Please note, "assembly of a Container PDU" is a generic phrase to describe the delivery of a Container PDU to the lower layer. If queueing is used (see chapter ), then the phrase denote to fetch an instance of a Container PDU from the internal queue. If last is best collection semantic is used (see ), then the phrase denotes to fetch the data from the according upper layer.

According to the evaluated trigger conditions, a Container PDU is triggered for transmission. The transmission process depends on the configuration (`IPDUM_DIRECT` or `IPDUM_TRIGGERTRANSMIT`):

* In case IpduMContainerTxTriggerMode is set to `IPDUM_DIRECT`, the Container PDU is assembled when the trigger condition result in a transmission of the Container PDU.
* In case IpduMContainerTxTriggerMode is set to `IPDUM_TRIGGERTRANSMIT`, the Container PDU is assembled when the lower layer indicate via `IpduM_TriggerTransmit` the readiness of the hardware to transmit the Container PDU.

Independent how the Container PDU is conveyed to the transmission hardware buffer, the trigger of a Container PDU result in a call of `PduR_IpduMTransmit`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Transmission confirmation

Upstream requirements:
⌈
The IpduM shall wait for the transmission confirmation (regardless of the result) of a Container PDU before invoking `PduR_IpduMTransmit` for the next instance of that Container PDU.
⌋

Note: The IpduM module relies here on a configured transmission confirmation for that Container PDU in the lower layer.

  Upstream requirements:
⌈
If the IpduM receives a transmission confirmation for a specific Container PDU, it shall translate this confirmation into the corresponding confirmations for those contained I-PDUs having IpduMContainedTxPduConfirmation set to TRUE and were contained in the last transmission of this specific Container PDU.

This shall result in multiple TxConfirmations, if the same contained I-PDU was present more than once in this transmitted specific Container PDU.
⌋

### 39. Queueing

For contained I-PDUs where the IpduMContainedTxPduCollectionSemantics set to `IPDUM_COLLECT_QUEUED` a queueing of Container PDUs can be used (see ). In this case more than one instance of a Container PDU has to be kept by the IpduM, up to IpduMContainerQueueSize instances can be stored in addition to the current instance. The current instance is one instance of the Container PDU that currently contained I-PDUs are being added to. After this instance has either been queued or copied to the lower layer, i.e. after a TriggerTransmit or Transmit API call depending on the configuration of IpduMContainerTxTriggerMode, no more contained I-PDUs can be added to this instance.

Note: Queued collection semantics guarantees that every instance/value of the contained I-PDU is visible on the wire.

  Upstream requirements:
⌈
If a PDU Container is queued for transmission, and IpduMContainerQueueSize is not set (or set to 1), IpduM shall call `PduR_IpduMTransmit`.
⌋

  Upstream requirements:
⌈
If a PDU Container is queued for transmission, and IpduMContainerQueueSize is > 1, IpduM shall store the Container PDU in a queue.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Last-is-Best collection semantics

For Container PDUs where the IpduMContainedTxPduCollectionSemantics is set to `IPDUM_COLLECT_LAST_IS_BEST` a queueing of Container PDUs is not supported (see ).

Note: As soon as a contained I-PDU is configured to use last-is-best semantics, the following points have to be considered:

* not necessarily all instances/values of this contained I-PDU are visible on the wire. This behaviour becomes worse if using FlexRay bus systems and the application scheduling are not synchronized with the FlexRay cycle. This could impact communication where sequence counters are used (e.g. E2E protected communication).
* Extended interrupt runtime has to be considered, if e.g. CAN to CAN routing is used and the routing is performed in the context of the receive interrupt, since this would include at least reception, forwarding of a PDU and assembly of a Container PDU.

  Upstream requirements:
⌈
For contained I-PDUs, with IpduMContainedTxPduCollectionSemantics set to `IPDUM_COLLECT_LAST_IS_BEST`, IpduM shall use `PduR_IpduMTriggerTransmit` to fetch the PDU data from its upper layer immediately before it transfers the container I-PDU to the lower layer.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 95 章（内容从略，见纯文本全文）

41. Transmission of Dynamic Containers
42. Queued collection semantics
43. Triggered Transmission and Last-is-Best semantics
44. Order and re-sorting
45. Transmission of Static Containers
46. Reception
47. Queueing
48. Reception of Dynamic Containers
49. Reception of Static Containers
50. Errorhandling
51. Metadata 处理
52. 基础软件 Distribution
53. 错误分类
54. Development 错误
55. Runtime 错误
56. Production 错误
57. Extended Production 错误
58. API 规范
59. Imported 类型
60. 类型定义
61. IpduM_ConfigType
62. 功能定义
63. IpduM_Init
64. IpduM_Transmit
65. IpduM_RxIndication
66. IpduM_TxConfirmation
67. IpduM_TriggerTransmit
68. Scheduled functions
69. Expected 接口
70. Mandatory 接口
71. Optional 接口
72. Callout 接口
73. Configurable 接口
74. 时序图
75. Transmission of a multiplexed I-PDU and Transmit confirmation
76. Transmission of a multiplexed I-PDU without Trigger
77. Reception of the multiplexed I-PDU
78. Trigger Transmit
79. 配置规范
80. How to read this chapter
81. Containers and 配置 parameters
82. 配置概述
83. IpduM
84. IpduMConfig
85. IpduMGeneral
86. IpduMTxPathway
87. IpduMTxRequest
88. IpduMTxDynamicPart
89. IpduMTxDynamicSegment
90. IpduMTxStaticPart
91. IpduMTxStaticSegment
92. IpduMTxSelectorField
93. IpduMRxPathway
94. IpduMRxIndication
95. IpduMRxDynamicPart
96. IpduMRxDynamicSegment
97. IpduMRxStaticPart
98. IpduMRxStaticSegment
99. IpduMRxSelectorField
100. IpduMContainerRxPdu
101. IpduMContainedRxPdu
102. IpduMContainerTxPdu
103. IpduMContainedTxPdu
104. IpduMMainFunctionRx
105. IpduMMainFunctionTx
106. 发布信息
107. 配置 Rules
108. Selector Field
109. Placement of static and dynamic parts
110. 多 PDU to Container 映射
111. Priority
112. 附录
113. 不适用需求
114. Change History of AUTOSAR Traceable Items
115. Traceable Item History of this Document According to AUTOSAR Release R25-11
116. Added 规范 Items in R25-11
117. Changed 规范 Items in R25-11
118. Deleted 规范 Items in R25-11
119. Added Constraints in R25-11
120. Changed Constraints in R25-11
121. Deleted Constraints in R25-11
122. Traceable Item History of this Document According to AUTOSAR Release R24-11
123. Added 规范 Items in R24-11
124. Changed 规范 Items in R24-11
125. Deleted 规范 Items in R24-11
126. Added Constraints in R24-11
127. Changed Constraints in R24-11
128. Deleted Constraints in R24-11
129. Traceable Item History of this Document According to AUTOSAR Release R23-11
130. Added 规范 Items in R23-11
131. Changed 规范 Items in R23-11
132. Deleted 规范 Items in R23-11
133. Added Constraints in R23-11
134. Changed Constraints in R23-11
135. Deleted Constraints in R23-11
