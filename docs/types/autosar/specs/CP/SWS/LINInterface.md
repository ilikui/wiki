# Specification of LIN Interface (`LINInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 073 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_LINInterface_073\AUTOSAR_CP_SWS_LINInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_LINInterface_073\AUTOSAR_CP_SWS_LINInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_LINInterface_073\zzgen\CP_SWS_LINInterface.complete.txt`

## 文档简介

This document specifies the functionality, API and the configuration of the AUTOSAR Basic Software module LIN Interface (LinIf) and the LIN Transport Protocol (LIN TP, LinTp). The LIN TP is a part of the LIN Interface.

The wake-up functionality is covered within the LIN Interface, LIN Driver and LIN Transceiver Driver.

This document is based on the ISO 17987 specifications . It is assumed that the reader is familiar with the specifications. This document will not describe ISO 17987 LIN functionality again.

The LIN Interface module applies to ISO 17987 master and slave nodes (compatible with LIN 2.2  and LIN 2.1  master nodes). The LIN implementation in AUTOSAR deviates from the ISO 17987 specifications as described in this document but there will be no change in the behavior on the LIN bus. It is the intention to be able to reuse all existing LIN nodes together with the AUTOSAR LIN implementation (i.e. the LIN Interface).

The LIN Interface module (LinIf) is designed to be hardware independent. The interfaces to upper (L-SDU Router for LinIf part and PDU Router for LinTp part) and lower (LIN Driver) modules are well defined.

The LIN Interface may handle more than one LIN Driver. A LIN Driver can support more than one channel. This means that the LIN Driver can handle one or more LIN channels.

## 模块依赖

This chapter describes the relations to other modules within the basic software. It describes the services that are used from these modules.

To be able for the LIN Interface module to operate, the following modules are interfaced:

* Default Error Tracer - Det
* ECU State Manager - EcuM
* PDU Router - PduR
* L-SDU Router - LSduR
* LIN State Manager - LinSM
* BSW Mode Manager - BswM
* AUTOSAR COM - Com
* LIN Driver - Lin
* LIN Transceiver Driver - LinTrcv

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies the functionality, API and the configuration of the AUTOSAR Basic Software module LIN Interface (LinIf) and the LIN Transport Protocol (LIN TP, LinTp). The LIN TP is a part of the LIN Interface.

The wake-up functionality is covered within the LIN Interface, LIN Driver and LIN Transceiver Driver.

This document is based on the ISO 17987 specifications . It is assumed that the reader is familiar with the specifications. This document will not describe ISO 17987 LIN functionality again.

The LIN Interface module applies to ISO 17987 master and slave nodes (compatible with LIN 2.2  and LIN 2.1  master nodes). The LIN implementation in AUTOSAR deviates from the ISO 17987 specifications as described in this document but there will be no change in the behavior on the LIN bus. It is the intention to be able to reuse all existing LIN nodes together with the AUTOSAR LIN implementation (i.e. the LIN Interface).

The LIN Interface module (LinIf) is designed to be hardware independent. The interfaces to upper (L-SDU Router for LinIf part and PDU Router for LinTp part) and lower (LIN Driver) modules are well defined.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Architectural 概述
*原文标题：Architectural overview*

According to the Layered Software Architecture , the LIN Interface is located within the BSW architecture as shown below (). In this example, the LIN Interface is connected to two LIN Drivers. However, one LIN Driver is the most common configuration.

### 3. 功能概述
*原文标题：Functional overview*

The LIN Interface is responsible for providing ISO 17987 LIN functionality. This means:

* Executing the currently selected schedule for each LIN bus the ECU is connected to, as a master node (transmitting headers and transmitting / receiving responses).
* Switching schedule tables of master nodes when requested by the upper layer(s).
* Accepting frame transmit requests from the upper layers and transmit the data as response within the appropriate LIN frame.
* Providing frame receive notification for the upper layer when the corresponding response is received within the appropriate frame.
* Go-to-sleep and wake-up services.
* Error handling.
* Diagnostic Transport Layer services.
* Node configuration and identification services of slave nodes.

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

In addition to the acronyms and abbreviations found in the ISO 17987 LIN specifications , the following acronyms and abbreviations (that are not included in the ) are used throughout this document. Some terms already defined in the ISO 17987 specifications have also been defined here in order to provide more clarification, especially for terms used very often in this document.

| Abbreviation / Acronym: | Description: |
|---|---|
| CF | Consecutive Frame in LIN TP |
| FF | First Frame in LIN TP |
| ID | Identifier |
| LDF | LIN Description File |
| LIN TP (LinTp ) | LIN Transport Protocol (Part of the LIN Interface) |
| MRF | Master Request Frame |
| NAD | Node Address. Each slave in LIN must have a unique NAD. |
| NC | Node Configuration |
| N_As | Time for transmission of the LIN frame (any N-PDU) on the sender side (see ISO 17987-2 ). |
| N_Cr | Time until reception of the next Consecutive Frame N-PDU (see ISO 17987-2 ). |
| N_Cs | Time until transmission of the next Consecutive Frame N-PDU (see ISO 17987-2 ). |
| P2 | Time between reception of the last frame of a diagnostic request on the LIN bus and the slave node being able to provide data for a response. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules  (SWS BSW General), which is also valid for LIN Interface.

Thus, the specification SWS BSW General shall be considered as additional and required specification for LIN Interface.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

The LIN Interface module can be used as a LIN master or a LIN slave in a LIN cluster. There is only one instance of the LIN Interface in each ECU. If the underlying LIN Driver supports multiple channels, the LIN Interface acts on more than one cluster.

It's assumed that all connected LIN ECUs can receive a wakeup frame when they are already operational (as the LIN ECU starts with `LINIF_CHANNEL_SLEEP` state).

The LIN Interface module does not support

* ConditionalChangeNAD (SID 0xB3, defined in the LIN 2.1 specification ; obsolete in ISO 17987-3 )
* DataDump (SID 0xB4, optional in ISO 17987-3)

Note: Until LIN 2.2A, ConditionalChangeNAD was defined without definition on negative response, and it was set to obsolete in ISO 17987-3 without any definition of response behavior. Therefore, both ISO 17987 and LIN specifications do not define the response behavior when ConditionalChangeNAD is not supported. However, it is presumed that the clarification "A negative response shall never be sent by the slave node." for AssignNAD in ISO 17987-3 is also applicable to ConditionalChangeNAD.

For slave nodes, the LIN Interface module does not support

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

This specification is applicable to all car domains where LIN is used.

### 11. Clarification about other LIN standards

J2602  and LIN 2.1  are other standard manifestations of ISO 17987 . These alternate standards are predecessors of ISO 17987 and share the concepts of ISO 17987.

An ISO 17987 node is compatible with a LIN 2.1 node (see ISO 17987-3, annex B.2.3).

AUTOSAR LinIf supports the above standards as far as they are identical to ISO 17987.

For legacy reasons, existing slave nodes based on older LIN standards than ISO 17987 (LIN 1.3, LIN 2.0, LIN 2.1 and LIN2.2) are supported as far as the standard is identical to ISO 17987.

### 12. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This chapter describes the relations to other modules within the basic software. It describes the services that are used from these modules.

To be able for the LIN Interface module to operate, the following modules are interfaced:

* Default Error Tracer - Det
* ECU State Manager - EcuM
* PDU Router - PduR
* L-SDU Router - LSduR
* LIN State Manager - LinSM
* BSW Mode Manager - BswM
* AUTOSAR COM - Com
* LIN Driver - Lin
* LIN Transceiver Driver - LinTrcv

### 13. 上层
*原文标题：Upper layers*

### 14. L-SDU Router and CDD

The LIN Interface (except LinTp part) connects to the L-SDU Router  and/or alternative modules above (e.g. Complex Driver) for transmission and reception of frames. It is assumed that these modules are responsible for the copying of the data of the frames for reception and transmission.

### 15. PDU Router

In case of LinTp part, the PDU Router is the only module above and handles the TP messages buffers either as complete or fragmented messages.

### 16. Bus Mirroring

The LIN Interface also connects to the Bus Mirroring module . The content of all received and transmitted LIN frames will be reported, if mirroring is enabled. TP messages are not reported to the Bus Mirroring module.

### 17. LIN 状态管理器
*原文标题：LIN State Manager*

The LIN Interface connects to the LIN state manager  which is responsible for the control flow of the whole LIN stack. Therefore, it has the following purposes regarding the LIN Interface:

* For master nodes, the state manager forwards a schedule table request to the LIN Interface.
* The state manager requests the transmission of the wake-up and, for master nodes, the sleep command.

### 18. BSW 模式管理器
*原文标题：BSW Mode Manager*

LIN TP that is a part of LIN Interface connects to BSW Mode Manager  for requesting the schedule table change when upper layer requests the LIN TP operation.

### 19. AUTOSAR COM

The LIN Interface used as LIN slave connects to the COM  to update the value of the response_error signal.

### 20. 下层
*原文标题：Lower layers*

### 21. LIN 驱动
*原文标题：LIN Driver*

The LIN Interface requires the services of the underlying LIN Driver specified by .

The LIN Interface assumes the following primitives to be provided by the LIN Driver:

* Transmission of the header and response part of a frame (`Lin_SendFrame`) for LIN master nodes. It is assumed that this primitive also tells the direction of the frame response (transmit, receive or Slave-to-slave communication).
* Transmission of the go-to-sleep command (`Lin_GoToSleep`) for LIN master nodes.
* Setting a LIN channel to state `LIN_CH_SLEEP` without transmitting a go-to-sleep command (`Lin_GoToSleepInternal`).
* Transmission of the wake-up command (`Lin_Wakeup`).
* Setting a LIN channel to state `LIN_CH_OPERATIONAL` without transmitting a wakeup command (`Lin_WakeupInternal`).
* Query of transmission status and reception of the response part of a frame (`Lin_GetStatus`) for LIN master nodes. The following cases are distinguished:

  * Successful reception/transmission.
  * No reception.
  * Erroneous reception/transmission (framing error, bit error, checksum error).
  * Ongoing reception - at least one response byte has been received, but the checksum byte has not been received.
  * Ongoing transmission.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. LIN 收发器驱动
*原文标题：LIN Transceiver Driver*

Optionally, the LIN Interface requires the services of the underlying LIN Transceiver Driver specified by .

The LIN Interface maps the following services for all underlying LIN Transceiver Drivers to one unique interface.

* Unique LIN Transceiver Driver mode request and read services to manage the operation modes of each underlying LIN transceiver device.
* Read service for LIN transceiver wake up reason support.
* Mode request service to enable/disable/clear wake up event state of each used LIN transceiver.

The LIN Interface does not use or access the LIN hardware or assume information about it any way other than what the LIN Transceiver Driver provides through the function calls to the LIN Transceiver Driver listed above.

### 23. 文件结构
*原文标题：File structure*

### 24. 头文件结构
*原文标题：Header file structure*

This section describes the header files that will be included by the LIN Interface and possible other modules.

 Include the header file of LSduR for LinIf
  Status: DRAFT
⌈
The LIN Interface shall include the defined include files of all upper layer BSW modules it is connected to, e.g. in case of connection to the L-SDU Router the file `LSduR_LinIf`.h (see ).
⌋

⌈
The LIN Interface shall include the file `PduR_LinTp`.h, if the LIN TP is enabled (configuration parameter LinIfTpSupported).
⌋

⌈
The LIN Interface shall include the file LinTrcv.h, if the configuration parameter LinIfTrcvDriverSupported is set to TRUE.
⌋

⌈
The LIN Interface shall include the header file(s) of the CDD(s) for callback declaration. The names of the header files are configurable via configuration parameter LinIfPublicCddHeaderFile.
⌋

⌈
The LIN Interface shall include the header file Mirror.h if Bus Mirroring is enabled (configuration parameter LinIfBusMirroringSupported).
⌋

### 25. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , and links to the fulfillment of these. Requirements that are not fulfilled by this document are linked to .

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| The AUTOSAR SW Components shall provide information about their dependency from faults, signal qualities, driver demands |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| Error values naming convention |  |  |
| All AUTOSAR Basic Software Modules shall avoid the duplication of code |  |  |
| Status values naming convention |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support link-time configuration |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the de |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 功能规范
*原文标题：Functional specification*

It is not required to reinvent the requirements already specified in the ISO 17987 specifications . However, there are specific details for AUTOSAR and parts that need to be specified since they are not specified enough or are missing. Specification of these parts will be made here.

The LIN Interface shall support the behavior of master and slave in the ISO 17987 specifications. The following requirements are the base requirements and the rest of the requirements in this chapter are refinements of these base requirements.

  Upstream requirements:
⌈
The LIN Interface shall support the behavior of the master and slave in the ISO 17987 specifications.
⌋

The requirement above basically means that the communication from a ISO 17987 node and the LIN Interface node will be equal.

⌈
The LIN Interface shall realize the LIN behavior so that existing LIN nodes can be reused.
⌋

  Upstream requirements:
⌈
The LIN Interface shall be able to handle one or more LIN channels.
⌋

### 27. Frame Transfer

All the functionality of the Protocol Specification in the ISO 17987 specifications  is used. Some parts of the specification need some clarification and additional requirements to suite the LIN Interface.

### 28. Frame 类型
*原文标题：Frame types*

The following requirements apply to the different frame types that are specified in the ISO 17987 specifications . The existing frame types are:

* Unconditional frame ()
* Event-triggered frame ()
* Sporadic frame ()
* Diagnostic frames MRF and SRF ()
* Reserved frames ()

The actual transmission/reception of the different frames is detailed in the  and .

### 29. Unconditional frame

This is the normal frame type that is used in LIN clusters. Its transportation on the bus strictly follows the schedule table.

### 30. Event-triggered frame

Event-triggered frames are used to enable sporadic transmission from slaves. The normal usage for this type of frame is in non-time-critical functions.

The requirements differentiates between master and slaves nodes depending on the realized node type.

### 31. Event-triggered frame in master nodes

This section is only applicable to LIN master nodes.

Since more than one slave may respond to an Event-triggered frame header, a collision may occur. The transmitting slaves shall detect this and withdraw from communication.

⌈
If a collision occurs in an Event-triggered frame response, then the LIN Interface shall switch to the corresponding collision resolving schedule table.
⌋

⌈
The LIN Interface shall switch to the given collision resolving schedule table at the end of the current frame slot after a collision has been detected.
⌋

⌈
The collision resolving schedule table is given by the LIN Interface configuration (configuration parameter LinIfCollisionResolvingRef).
⌋

### 32. Event-triggered frame in slave nodes

This section is only applicable to LIN slave nodes.

Upper layers decide the transmission of the response of an Event-triggered frame. Therefore, an API call must be available to set the Event-triggered frame response pending for transmission.

⌈
The LIN Interface shall maintain a flag to keep the transfer state of each Event-triggered frame response (defined in the ISO 17987 specifications ).
⌋

The first data byte of the Unconditional frame response allocated to an Event-triggered frame is reserved for the PID of the Unconditional frame.

⌈
If the header of an Event-triggered frame is received and the associated response is pending, the LIN Interface shall transmit the PID of the Unconditional frame in the first byte of the response data. The payload of the Unconditional frame response shall be transmitted in the following bytes.
⌋

⌈
The LIN Interface shall clear the pending flag of an Event-triggered frame response once it has been transmitted successfully. This applies also to the case if the response is successfully transmitted as an Unconditional frame.
⌋

### 33. Sporadic frame (Master only)

This section is only applicable to LIN master nodes. From a LIN slave point of view, a received Sporadic frame does not differ from a received Unconditional frame.

The ISO 17987 specifications  define a Sporadic frame. A more precise definition of the Sporadic frames is needed here:

* Sporadic slot - This is a placeholder for the Sporadic frames. The reason to name it "slot" is that it has no LIN frame ID.
* Sporadic frame - This is one of the Unconditional frame that are attached to a Sporadic slot.

⌈
The master shall be the only allowed transmitter of a Sporadic frame (defined in the ISO 17987 specifications).
⌋

⌈
Only a Sporadic frame shall allocate a Sporadic slot (defined in the ISO 17987 specifications).
⌋

Upper layers decide the transmission of a Sporadic frame. Therefore, an API call must be available to set the Sporadic frame pending for transmission.

⌈
The LIN Interface shall flag the specific Sporadic frame (defined in the ISO 17987 specifications) for transfer.
⌋

⌈
The LIN Interface shall transmit the specific Sporadic frame (defined in the ISO 17987 specifications) in the associated Sporadic slot according to the priority of the Sporadic frames.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 诊断 Frames MRF and SRF
*原文标题：Diagnostic Frames MRF and SRF*

The Master Request Frame (MRF) and Slave Response Frame (SRF) are frames with a fixed ID that are used for transportation of ISO 17987 node configuration services and TP messages.

### 35. 诊断 Frames MRF and SRF (Master only)
*原文标题：Diagnostic Frames MRF and SRF (Master only)*

The ISO 17987 specifications  are vague in specifying when MRF and SRF are to be transported and when the corresponding schedule entry is due. The LIN Interface processes the schedule (Schedule Table Manager) and therefore knows when a TP transmission is ongoing. Therefore, the following requirement can be stated:

⌈
The LIN Interface shall send an MRF if there is an ongoing TP transmission, when a schedule entry is due, and there is data to be sent.
⌋

Note that also the node configuration mechanism uses the MRF but above requirement does only apply when the MRF is encountered in the schedule table. The node configuration shall have special schedule entries as seen below.

For the slave response frame, the master node sends only the header. Generally, it is always sent because the master cannot know whether the slave has anything to send in the response part of the frame. An exception to that is the case when the master node wishes to prevent reception of such a frame during a TP frame sequence because there is no buffer to store them.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Reserved frames

The LIN Interface module does not support transmission of Reserved frames.

Note: The ISO 17987 specifications  do not allow Reserved frames (not allowed since LIN 2.1 ).

### 37. Frame reception

### 38. Frame reception in master nodes

This section is only applicable to LIN master nodes.

The LIN master controls the schedules and therefore initiates all frames on the bus.

The requirements in this section are applicable to all received frame types that are received by the master if scheduled and pending for transportation (e.g. a schedule entry with an SRF can be silent or pending for transportation).

### 39. Header

⌈
The LIN Interface shall call the function `Lin_SendFrame` of the LIN Driver module when a new schedule entry for a frame reception is due.
⌋

### 40. Response

The LIN Driver will automatically be set to reception state after the header is transmitted.

### 41. Status check

⌈
The LIN Interface shall determine the status of the LIN Driver module by calling the function `Lin_GetStatus` earliest after the maximum frame length and latest when the next schedule entry is due.
⌋

It is up to the LIN Interface module's implementer to find an efficient way to determine the status check of the LIN Driver. The normal implementation would be that the status is checked within each `LinIf_MainFunction_`<LinIfChannel.ShortName> function call after the maximum frame length has passed. In this case, the frame transmission is still going on (busy). Therefore the status determination shall be checked again within the next `LinIf_MainFunction_`<LinIfChannel.ShortName> function call (if the current `LinIf_MainFunction_`<LinIfChannel.ShortName> does not start a new frame, of course).

The  shows an example of how the frame transmission is initiated and confirmed on the bus.

When the status from the function `Lin_GetStatus` is returned and a frame is received, the following interpretation for different types of frames takes place:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Frame reception in slave nodes

This section is only applicable to LIN slave nodes.

The LIN slave has no knowledge about the scheduling of the LIN master, it solely reacts to received LIN headers reported by the LIN Driver with the header indication callback function `LinIf_HeaderIndication`.

The requirements in this section are applicable to all frame types that are received by the slave. An exception is the MRF for which only the header handling in  applies, but the response handling is described in  and .

### 43. Header

⌈
If the PID of a received header is evaluated and belongs to a configured receive frame, before returning from the callback `LinIf_HeaderIndication` the LIN Interface shall set the PduPtr->Cs and PduPtr->Dl to the configured values and shall set the PduPtr->Drc to `LIN_FRAMERESPONSE_RX`.
⌋

### 44. Response

The completion of each response reception is notified to the LIN Interface. The LIN Driver indicates a successfully received response to the LIN Interface with the response indication callback function `LinIf_RxIndication` and an unsuccessful response with the error indication callback function `LinIf_LinErrorIndication`.

 Invocation of `LSduR_LinIfRxIndication` for Response in slave nodes
  Status: DRAFT
⌈
If the function `LinIf_RxIndication` is called, the LIN Interface shall invoke `LSduR_LinIfRxIndication` with the received data and payload length.
⌋

⌈
If Bus Mirroring is enabled globally (configuration parameter LinIfBusMirroringSupported) and has been activated with a call to `LinIf_EnableBusMirroring`() for a LIN channel, the LIN Interface shall call `Mirror_ReportLinFrame`() each time `LinIf_RxIndication` is called on that channel, with status code `LIN_RX_OK` and a pointer to the received data.
⌋

⌈
If the function `LinIf_LinErrorIndication` is called, the LIN Interface shall consider the response as lost. Therefore, the LIN Interface shall report the runtime error code `LINIF_E_RESPONSE` to the Default Error Tracer unless the error code of `LinIf_LinErrorIndication` is `LIN_ERR_HEADER`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Frame transmission

### 46. Frame transmission in master nodes

This section is only applicable to LIN master nodes.

A LIN frame is transmitted in the `LinIf_MainFunction_`<LinIfChannel.ShortName> when a new schedule entry is due.

The requirements in this section are applicable to all frame types that are transmitted by the master if scheduled and pending for transportation (e.g. an Unconditional frame that is scheduled is always pending for transportation, a Sporadic frame slot may be pending for transportation or silent).

### 47. Header and response

Invocation of `LSduR_LinIfTriggerTransmit` in master nodes
  Status: DRAFT
⌈
The LIN Interface shall call the function `LSduR_LinIfTriggerTransmit` with the PduInfoPtr pointer containing data buffer (SduDataPtr) and buffer length (SduLength) to get the data part of the frame (data in the LIN frame response) when a schedule entry for a frame transmission is due.
⌋

 Invocation of `Lin_SendFrame` after successful invocation of `LSduR_LinIfTriggerTransmit` in master nodes
  Status: DRAFT
⌈
After getting the data part of the frame (when the function `LSduR_LinIfTriggerTransmit` returns E_OK), the LIN Interface shall call the LIN Driver module's function `Lin_SendFrame` to provide the LIN Driver a pointer to the data part.
⌋

 Behavior after failed invocation of `LSduR_LinIfTriggerTransmit` in master nodes
  Status: DRAFT
⌈
When the function `LSduR_LinIfTriggerTransmit` returns E_NOT_OK, the LIN Interface shall not transmit the Sporadic frame or Unconditional frame for which the data was requested.
⌋

### 48. Status check

⌈
If Bus Mirroring is enabled globally (configuration parameter LinIfBusMirroringSupported) and has been activated with a call to `LinIf_EnableBusMirroring`() for a LIN channel, the LIN Interface shall call `Mirror_ReportLinFrame`() each time after reading the LIN Driver's status for a Tx slot on that channel, providing the transmitted data when the status is `LIN_TX_OK`, and otherwise a NULL pointer.
⌋

 Limitation on invocation of `LSduR_LinIfTxConfirmation` in master nodes
  Status: DRAFT
⌈
If the return code of the function `Lin_GetStatus` is `LIN_TX_OK`, the LIN Interface shall issue a `LSduR_LinIfTxConfirmation` callback with result E_OK.
⌋

 Invocation of `LSduR_LinIfTxConfirmation` at error or busy conditions in master nodes
  Status: DRAFT
⌈
If the return code of the function `Lin_GetStatus` is `LIN_TX_ERROR` or `LIN_TX_BUSY`, the LIN Interface shall issue a `LSduR_LinIfTxConfirmation` callback with result E_NOT_OK.
⌋

⌈
If the return code of the function `Lin_GetStatus` is `LIN_TX_ERROR` and any LIN frame transmission is attempted, the LIN Interface shall consider the transmitted frame as lost and report the runtime error code `LINIF_E_RESPONSE` to the Default Error Tracer.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. Frame transmission in slave nodes

This section is only applicable to LIN slave nodes.

The LIN slave has no knowledge about the scheduling, it solely reacts to received LIN headers reported by the LIN Driver with the header indication callback function `LinIf_HeaderIndication`.

The requirements in this section are applicable to all frame types that are transmitted by the slave. An exception is the SRF for which only the requirements  and  of this section apply, but the remaining handling is described in  and . Event-triggered frames have also a special handling as described in .

### 50. Header

Invocation of `LSduR_LinIfTriggerTransmit` after Header indication in slave nodes
  Status: DRAFT
⌈
If `LinIf_HeaderIndication` is called and the PID is evaluated and determined as a transmit frame, the LIN Interface shall call the function `LSduR_LinIfTriggerTransmit` with the PduInfoPtr->SduDataPtr set to the buffer provided as PduPtr->SduPtr and PduInfoPtr->SduLength set to the configured length to get the data part of the frame (data in the LIN frame response).
⌋

If the frame type is an Event-triggered frame, see also .

 Handling of Cs, Dl and Drc in slave nodes
  Status: DRAFT
⌈
After getting the data part of the frame (when the function `LSduR_LinIfTriggerTransmit` returns E_OK or the SRF data is provided by node configuration handler or transport protocol), before returning from the callback `LinIf_HeaderIndication`, the LIN Interface shall set the PduPtr->Cs and PduPtr->Dl to the configured values and shall set the PduPtr->Drc to `LIN_FRAMERESPONSE_TX`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. Response

The completion of each response transmission is notified to the LIN Interface. The LIN Driver confirms a successfully transmitted response to the LIN Interface with the response confirmation callback function `LinIf_TxConfirmation` and an unsuccessful response with the error indication callback function `LinIf_LinErrorIndication`.

 Invocation of `LSduR_LinIfTxConfirmation` after `LinIf_TxConfirmation` in slave nodes
  Status: DRAFT
⌈
If the function `LinIf_TxConfirmation` is called, the LIN Interface shall issue a `LSduR_LinIfTxConfirmation` callback with result E_OK.
⌋

⌈
If the function `LinIf_TxConfirmation` is called and the transmitted frame contains the response_error signal, the LIN Interface shall clear the response_error signal.
⌋

If the frame type is an Event-triggered frame or Unconditional frame, consider also .

⌈
If `LinIf_HeaderIndication` is called while the confirmation of a response transmission is expected, the LIN Interface shall consider the transmitted frame as lost. Therefore, the LIN Interface shall report the runtime error code `LINIF_E_RESPONSE` to the Default Error Tracer. Afterwards, the received LIN Header shall be processed.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 187 章（内容从略，见纯文本全文）

52. Slave-to-slave communication (Master only)
53. Header
54. Response
55. Status check
56. Irrelevant communication (Slave only)
57. Schedules (Master only)
58. 调度 table 管理器
59. Main 功能
60. 网络管理
61. Node 管理
62. LIN 接口 state-machine
63. LIN channel sub-state-machine
64. Go to 休眠 process
65. Go to 休眠 process in master nodes
66. Go to 休眠 process in slave nodes
67. Reception of go-to-sleep command
68. Bus idle
69. 休眠模式 transition
70. Wake up process
71. Wake up process in master nodes
72. 唤醒 during 休眠 transition in master nodes
73. Wake up process in slave nodes
74. 唤醒 during 休眠 transition in slave nodes
75. Status 管理
76. response_error signal (Slave only)
77. 诊断 and Node 配置
78. Node 配置 in master nodes
79. Node 配置服务
80. Node 配置 in 调度 Table
81. Node 配置 in slave nodes
82. Node 建模
83. Node 配置服务
84. 诊断 Frame Dispatcher
85. Node 配置 Handler
86. Node 配置错误
87. 诊断 - 传输协议
88. 调度 requests in master nodes
89. State-machine
90. LIN TP transmission
91. LIN TP transmission 错误
92. Transmission 错误处理 common for master and slave nodes
93. Transmission 错误处理 for master nodes
94. Transmission 错误处理 for slave nodes
95. LIN TP reception
96. Unavailability of receive buffer
97. Unavailability of receive buffer common for master and slave nodes
98. Unavailability of receive buffer for master nodes
99. Unavailability of receive buffer for slave nodes
100. LIN TP reception 错误
101. LIN TP reception 错误 common for master and slave nodes
102. LIN TP reception 错误 for master nodes
103. LIN TP reception 错误 for slave nodes
104. 处理多 channels and drivers
105. 多 channels
106. 多 LIN drivers
107. 多 LIN 收发器 drivers
108. 错误分类
109. Development 错误
110. Runtime 错误
111. Production 错误
112. Extended Production 错误
113. LINTP_E_LINTPNAS_TIMEOUT_OCCURRED
114. LINTP_E_LINTPNCS_TIMEOUT_OCCURRED
115. LINTP_E_LINTPNCR_TIMEOUT_OCCURRED
116. LINTP_E_SWAPPED_CONSECUTIVE_FRAMES_RECEIVED
117. LINTP_E_DROPPED_CONSECUTIVE_FRAMES_DETECTED
118. LINIF_E_SCHEDULE_TABLE_SWITCH_REQUEST_NOT_ACCEPTED
119. API 规范
120. Imported 类型
121. Standard 类型
122. 类型定义
123. LinIf_SchHandleType
124. LinIf_ConfigType
125. LinTp_ConfigType
126. LinTp_Mode
127. LIN 接口 API
128. LinIf_Init
129. LinIf_Transmit
130. LinIf_ScheduleRequest
131. LinIf_GotoSleep
132. LinIf_Wakeup
133. LinIf_SetTrcvMode
134. LinIf_GetTrcvMode
135. LinIf_GetTrcvWakeupReason
136. LinIf_SetTrcvWakeupMode
137. LinIf_GetPIDTable
138. LinIf_SetPIDTable
139. LinIf_GetConfiguredNAD
140. LinIf_SetConfiguredNAD
141. LinTp_Init
142. LinTp_Transmit
143. LinTp_Shutdown
144. LinTp_ChangeParameter
145. LinIf_CheckWakeup
146. LinIf_EnableBusMirroring
147. Callback 通知
148. LinIf_WakeupConfirmation
149. LinIf_HeaderIndication
150. LinIf_RxIndication
151. LinIf_TxConfirmation
152. LinIf_LinErrorIndication
153. Scheduled functions
154. LinIf_MainFunction_<LinIfChannel.ShortName>
155. Expected 接口
156. Mandatory 接口
157. Optional 接口
158. Configurable 接口
159. <User>_ScheduleRequestConfirmation
160. <User>_GotoSleepConfirmation
161. <User>_WakeupConfirmation
162. <User>_GotoSleepIndication
163. Callout 定义
164. <User_ResponseErrorSignalChanged>
165. <User_SaveConfigurationRequest>
166. 时序图
167. Frame Transmission
168. Frame transmission in master nodes
169. Frame transmission in slave nodes
170. Frame Reception
171. Frame reception in master nodes
172. Frame reception in slave nodes
173. Slave-to-slave / Irrelevant communication
174. Slave-to-slave communication in master nodes
175. Irrelevant communication in slave nodes
176. Sporadic frame (Master only)
177. Event-triggered frame
178. Event-triggered frame in master nodes
179. With no answer
180. With answer (No collision)
181. With collision
182. Event-triggered frame in slave nodes
183. 传输协议 message transmission
184. 传输协议 message reception
185. Go to 休眠 process
186. Go to 休眠 process in master nodes
187. Go to 休眠 process in slave nodes
188. Wake up request
189. Internal 唤醒
190. 配置规范
191. How to read this chapter
192. Containers and 配置 parameters
193. 配置 Tool
194. LinIf 配置
195. LinIf
196. LinIfGlobalConfig
197. LinIfGeneral
198. LinIfChannel
199. LinIfNodeType
200. LinIfFrame
201. LinIfFixedFrameSdu
202. LinIfFixedFrameSduByte
203. LinIfPduDirection
204. LinIfSubstitutionFrames
205. LinIfRxPdu
206. LinIfTxPdu
207. LinIfScheduleTable
208. LinIfEntry
209. LinIfMaster
210. LinIfSlave
211. LinIfNodeConfigurationIdentification
212. LinIfSlaveToSlavePdu
213. LinIfInternalPdu
214. LinIfTransceiverDrvConfig
215. LIN 传输 Layer 配置
216. LinTp
217. LinTpGeneral
218. LinTpGlobalConfig
219. LinTpChannelConfig
220. LinTpDemEventParameterRefs
221. LinTpRxNSdu
222. LinTpTxNSdu
223. 发布信息
224. 附录
225. 不适用需求
226. Change history of AUTOSAR traceable items
227. Traceable item history of this document according to AUTOSAR Release R24-11
228. Added 规范 Items in R24-11
229. Changed 规范 Items in R24-11
230. Deleted 规范 Items in R24-11
231. Traceable item history of this document according to AUTOSAR Release R25-11
232. Added 规范 Items in R25-11
233. Changed 规范 Items in R25-11
234. Deleted 规范 Items in R25-11
235. Traceable item history of this document according to AUTOSAR Release R26-11
236. Added 规范 Items in R26-11
237. Changed 规范 Items in R26-11
238. Deleted 规范 Items in R26-11
