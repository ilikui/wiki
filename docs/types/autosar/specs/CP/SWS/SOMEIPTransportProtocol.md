# Specification on SOME/IP Transport Protocol (`SOMEIPTransportProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 809 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SOMEIPTransportProtocol_809\AUTOSAR_CP_SWS_SOMEIPTransportProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SOMEIPTransportProtocol_809\AUTOSAR_CP_SWS_SOMEIPTransportProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SOMEIPTransportProtocol_809\zzgen\CP_SWS_SOMEIPTransportProtocol.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module SOME/IP TP.

The task of the SOME/IP TP module is to segment SOME/IP packets, which do not fit into one single UDP packet. On the reception side, it re-assembles the received SOME/IP segments.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module SOME/IP TP.

The task of the SOME/IP TP module is to segment SOME/IP packets, which do not fit into one single UDP packet. On the reception side, it re-assembles the received SOME/IP segments.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the SOME/IP Transport Protocol module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| SOME/IP | Scalable service-Oriented MiddlewarE over IP |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for SOME/IP Transport Protocol.

Thus, the specification SWS BSW General shall be considered as additional and required specification for SOME/IP Transport Protocol.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

The SOME/IP TP is a simple protocol to segment SOME/IP messages. It does not implement retry mechanism nor does it reordering of received SOME/IP segments.

These limitations are intended to spare runtime and memory resources on receiver side. Nonetheless, this is a deviation from the AUTOSAR SOME/IP Protocol Specification (`PRS_SOMEIP_00747` to `PRS_SOMEIP_00754`).

The rational for these limitations is the typical use-case which is "streaming" of large SOME/IP messages.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

This module is applicable for SOME/IP communication.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. AUTOSAR PDU Router

The SOME/IP TP module uses the PduR for both directions, the transmission path, and the reception path.

### 11. AUTOSAR Default 错误 Tracer
*原文标题：AUTOSAR Default Error Tracer*

In order to be able to report development errors, the SOME/IP TP module has to have access to the error hook of the Default Error Tracer.

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| SOME/IP protocol shall support different transport protocols underneath |  |  |
| SOME/IP protocol shall support messages of different lengths |  |  |
| SOME/IP protocol shall define the header layout of messages |  |  |
| SOME/IP protocol shall support providing the length of a serialized data element in the payload |  |  |
| SOME/IP protocol shall provide support for segmented transmission of large data |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| API naming convention |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能规范
*原文标题：Functional specification*

The task of the SOME/IP TP module is to segment SOME/IP packets, which do not fit into one single UDP packet. On the reception side, it assembles the received SOME/IP segments.

The SOME/IP TP module interacts with the PDU Router for both directions, the transmission and the reception path.

### 14. 概述 of the SOME/IP header
*原文标题：Overview of the SOME/IP header*

This chapter describe the relevant parts of the SOME/IP header for the segmentation of SOME/IP messages.

The Message Type field of the SOME/IP header contains a bit, which marks the SOME/IP PDU as a segment of an original SOME/IP message. Every segmented SOME/IP message adds SOME/IP TP specific fields to the SOME/IP header.

These fields contain control information for the segmentation and the reassembly of original, large SOME/IP messages. How they are used is described in the following chapters.

Note: The Offset Field, the Reserved bits and the More Segment Flag are only present if the TP-Flag is set to '1'.

### 15. Message 类型 Field
*原文标题：Message Type Field*

The Message Type Field contains the TP-Flag, which marks this SOME/IP message as a SOME/IP segment of an original SOME/IP message.

| Message Type | < | < | < | < | < | < | < |  |
|---|---|---|---|---|---|---|---|---|
| bit offset | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 |
| Value | x | x | 0/1 | x | x | x | x | x |
| Name | ignore | ignore | TP-Flag | ignore | ignore | ignore | ignore | ignore |

### 16. Offset Field

The Offset Field  is located right after the Return Code field. It starts at bit offset 0, and ends at bit offset 27. The contained value increases after every transmitted/received segment according to the payload length of the previous transmitted/received SOME/IP segment.

The Offset Field contains the Offset Value in units of 16 bytes. (E.g.: If the Offset Field is set to 92, 1472 Payload bytes have been transmitted so far.) These two different terms are used in the remainder of this document.

Note: The payload length provided in the Offset Field does not include the bytes which are needed for the SOME/IP header.

### 17. Reserved Field

The Reserved Field  follows the Offset Field. It starts at bit offset 28 and ends at bit offset 30. These three bits are reserved and set to 0.

### 18. More Segments Flag

The More Segments Flag  indicates whether another segmented SOME/IP PDU will follow.

### 19. 示例
*原文标题：Example*

An original SOME/IP message of 5880 bytes payload has to be transmitted.

The Length field of this original SOME/IP message is set to 8 + 5880 bytes.

This original SOME/IP message will now be segmented into 5 consecutive SOME/IP segments. Every payload of these segments carries at most 1392 bytes in this example.

For these segments, the SOME/IP TP module adds additional TP fields (marked red). The Length field of the SOME/IP carries the overall length of the SOME/IP segment including 8 bytes for the Request ID, Protocol Version, Interface Version, Message Type and Return Code. Because of the added TP fields (4 bytes), this Length information is extended by 4 additional SOME/IP TP bytes.

The following table provides an overview of the relevant SOME/IP header settings for every SOME/IP segment:

| Length (Bytes) | Message Type | Offset Value | More Segment Flag |  |
|---|---|---|---|---|
| 1st segment | 8 + 4 + 1392 = 1404 | TP-Flag = '1' | 0 | 1 |
| 2nd segment | 8 + 4 + 1392 = 1404 | TP-Flag = '1' | 87 | 1 |
| 3rd segment | 8 + 4 + 1392 = 1404 | TP-Flag = '1' | 174 | 1 |
| 4th segment | 8 + 4 + 1392 = 1404 | TP-Flag = '1' | 261 | 1 |
| 5th segment | 8 + 4 + 312 = 324 | TP-Flag = '1' | 348 | 0 |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 模块处理
*原文标题：Module Handling*

This section contains description of auxiliary functionality of the SomeIpTp module.

### 21. 初始化
*原文标题：Initialization*

The SomeIpTp module is initialized via `SomeIpTp_Init`, and de-initialized via `SomeIpTp_DeInit`. Except for `SomeIpTp_Init`, the API functions of the SomeIpTp module may only be called after the module has been properly initialized.

 Call of `SomeIpTp_Init`
  Upstream requirements:
⌈
A call to `SomeIpTp_Init` shall perform the following actions:

* Initializes all internal variables.
* Flush all internal mappings and memory sections.
* Set all configured SomeIpTpRxNSdu of each SomeIpTpRxChannel and SomeIpTpTxNSdu of each SomeIpTpTxChannel to state `NSDU_AVAILABLE`.
* Set the SomeIpTp module to initialized state.
⌋

 Call of `SomeIpTp_DeInit`
  Upstream requirements:
⌈
A call to `SomeIpTp_DeInit` sets the SomeIpTp module back to the uninitialized state.
⌋

 Handling if `SomeIpTp_Init` is called in initialized state
  Upstream requirements: ,
⌈
When `SomeIpTp_Init` is called in initialized state, the SomeIpTp module shall not re-initialize its internal variables, flush internal mappings and memory sections or change the state of the configured N-PDUs. It shall instead call `Det_ReportError` with the error code `SOMEIPTP_E_REINIT` if development error reporting is enabled (see SomeIpTpDevErrorDetect).
⌋

### 22. 状态处理 of N-SDUs
*原文标题：State handling of N-SDUs*

The SomeIpTp module has to maintain the usage-state of each SomeIpTpRxNSdu and SomeIpTpTxNSdu which could be configured per SomeIpTpRxChannel or SomeIpTpTxChannel. Therefore each N-SDU has two states `NSDU_IN_USE` or `NSDU_AVAILABLE`.

Note: The definition of `NSDU_IN_USE` or `NSDU_AVAILABLE` represents only the functional behavior, but not the implementation, since the state of a N-SDU is kept locally and is not propagated to other modules. Therefore, no type definition for the N-SDU state is specified.

 Each N-SDU shall have a N-SDU state
  Upstream requirements:
⌈
The SomeIpTp module shall maintain an internal usage state for each N-SDU of all configured SomeIpTpRxNSdu and SomeIpTpTxNSdu at each SomeIpTpRxChannel and SomeIpTpTxChannel, indicating whether the N-SDU is available (`NSDU_AVAILABLE`) or is use (`NSDU_IN_USE`).
⌋

Note: Please note the terms `NSDU_AVAILABLE` and `NSDU_IN_USE` only describe the functional behavior and do not mandate a specific implementation or state representation.

### 23. Parallel processing of SOME/IP messages

The SomeIpTp module configuration represents the reception and transmission of SOME/IP messages as SomeIpTpRxChannel and SomeIpTpTxChannel. Each SOME/IP TP channel has exactly one N-PDU which is used for the interaction with the lower layer modules. Each SOME/IP channel need to have a least one N-SDU which is used for the interaction with the upper layer, but could also have multiple N-SDUs to support parallel processing of SOME/IP messages. The following parallel processing approaches are supported:

* parallel processing of SOME/IP messages that belong to different SomeIpTpRxChannels or SomeIpTpTxChannels
* parallel processing of SOME/IP messages that belong to the same SomeIpTpRxChannel or SomeIpTpTxChannel but have multiple upper layer N-SDUs configured (see SomeIpTpRxNSdu or SomeIpTpTxNSdu

A SOME/IP message is identified with the Message ID that is encoded in the first four bytes of the SOME/IP header. On reception of a SOME/IP message at the SoAd, the Message ID is extracted by the SoAd as Header ID (see SoAdRxPduHeaderId) to identify the corresponding SoAdSocketRouteDest.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Segmentation of SOME/IP messages (TX Path)

The following chapter describe the necessary activities of the SOME/IP TP module to segment SOME/IP messages.

### 25. Size of SOME/IP segments

Upstream requirements: ,
⌈
The SOME/IP TP module shall remember the PDU length separately for every PDU ID which is passed by the PduInfoPtr parameter of the `SomeIpTp_Transmit`() call.
⌋

Note: The SOME/IP TP module needs this information to calculate the payload size, the Offset Value, and the More Segments Flag for the SOME/IP segments which are going to be transmitted.

  Upstream requirements: , ,
⌈
The amount of generated SOME/IP segments shall be as little as possible.
⌋

Note: This means that the SOME/IP TP module shall try to always use the maximum allowed segmentation size.

  Upstream requirements:
⌈
The size of every segmented SOME/IP message shall consist of the sum of 12 bytes of SOME/IP header, and the Payload bytes itself.
⌋

  Upstream requirements: , ,
⌈
The SOME/IP TP module shall derive the maximum possible size of the segmented SOME/IP PDUs using the parameter SomeIpTpTxNPduRef.
⌋

  Upstream requirements: , ,
⌈
The SOME/IP TP module shall generate segmented SOME/IP PDUs not larger than the size derived from the parameter SomeIpTpTxNPduRef.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Header of SOME/IP segments

Every generated SOME/IP header for each SOME/IP segment is set to the following values:

The following fields are based on the received PDU of the upper layer:

* Request ID  -direct copy, see `SWS_SomeIpTp_00007`
* Protocol Version  - direct copy, see `SWS_SomeIpTp_00007`
* Interface Version  - direct copy, see `SWS_SomeIpTp_00007`
* Message Type  - calculated value, see `SWS_SomeIpTp_00008`
* Return Code  - direct copy, see `SWS_SomeIpTp_00007`

The following fields are added by the SOME/IP TP module:

* Offset  - calculated value, see `SWS_SomeIpTp_00011`
* Reserved bits  - statically set to '000', see `SWS_SomeIpTp_00012`
* More Segment Flag  - calculated value, see `SWS_SomeIpTp_00013`

  Upstream requirements:
⌈
The SOME/IP TP module shall store the Request ID, Protocol Version, Interface Version, Message Type, and the Return Code of the SOME/IP header for every PDU ID separately which is returned by the first call of `PduR_SomeIpTpCopyTxData`() triggered by the API call `SomeIpTp_Transmit`().
⌋

Note:

The SOME/IP header is contained in the first 8 bytes of the total length of the original SOME/IP PDU. The total length is provided via the API call `SomeIpTp_Transmit`().

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Sending of SOME/IP segments

Forward meta data if configured for transmission
  Upstream requirements: ,
⌈
If the API `SomeIpTp_Transmit` is called and the indicated PDU given via TxPduId refer to a SomeIpTpTxNPdu that has meta data configured, then the SOME/IP TP module shall forward the meta data.
⌋

  Upstream requirements:
⌈
If the API `SomeIpTp_Transmit`() is called, the SOME/IP TP module shall check for an ongoing segmentation for the provided PDU ID.
⌋

 Transmit request without active segmentation
  Upstream requirements:
⌈
If the API `SomeIpTp_Transmit` is called while no segmentation is ongoing for this PDU ID, the SOME/IP TP module shall perform the following steps in the following order:

* Remember the provided PDU length (provided PduInfoPtr).
* Derive the PDU ID which shall be used for every segmented SOME/IP PDU (see SomeIpTpTxNPduRef).
* Calculate the size of the SOME/IP for the first segment (considering header and payload).
* Set the corresponding SomeIpTpTxNSdu to state `NSDU_IN_USE`.
* Call the API `PduR_SomeIpTpTransmit`() from `SomeIpTp_MainFunctionTx`() using the derived PDU ID and the calculated PDU size and set the SduDataPtr to `NULL_PTR`.
⌋

Note:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Interruption of the disassembly process

Transmit request during ongoing segmentation
  Upstream requirements:
⌈
If the API `SomeIpTp_Transmit`() is called with a PDU ID which is currently used for an ongoing segmentation,

* E_NOT_OK shall be returned.
* The ongoing disassembly process for this PDU ID shall be canceled.
* The API `PduR_SomeIpTpTxConfirmation`()with result set to E_NOT_OK shall be called.
* Set the corresponding SomeIpTpTxNSdu to state `NSDU_AVAILABLE`, after `PduR_SomeIpTpTxConfirmation`() returns
* The API `Det_ReportRuntimeError`() shall be called with the runtime error code `SOMEIPTP_E_DISASSEMBLY_INTERRUPT`.
⌋

 Transmit API failure during segmentation
  Upstream requirements:
⌈
If `PduR_SomeIpTpTransmit`() returns something different than E_OK during the process of ongoing segmentation.

* The ongoing disassembly process for this PDU ID shall be canceled.
* The API `PduR_SomeIpTpTxConfirmation`() with result set to E_NOT_OK shall be called.
* Set the corresponding SomeIpTpTxNSdu to state `NSDU_AVAILABLE`, after `PduR_SomeIpTpTxConfirmation`() returns
* The API `Det_ReportRuntimeError`() shall be called with the runtime error code `SOMEIPTP_E_DISASSEMBLY_INTERRUPT`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Assembly of received SOME/IP messages (RX path)

Processing of SOME/IP messages with TP flag set to '0'
  Upstream requirements: ,
⌈
If `SomeIpTp_RxIndication` is called, the indicated PDU has TP Flag set to '0' and at least one SomeIpTpRxNSdu of the affected SomeIpTpRxChannel is in state `NSDU_AVAILABLE`, then the SomeIpTp module shall perform the following actions in the given order.

* set the corresponding SomeIpTpRxNSdu to state `NSDU_IN_USE`
* call `PduR_SomeIpTpStartOfReception`(), `PduR_SomeIpTpCopyRxData`(), and `PduR_SomeIpTpRxIndication`(), directly after each other providing the received indication
* set the corresponding SomeIpTpRxNSdu to state `NSDU_AVAILABLE`, after `PduR_SomeIpTpRxIndication`() returns
* return without processing any further reception handling (e.g. time out handling).
⌋

 Processing of SOME/IP messages when the SomeIpTpRxChannel is in state `NSDU_IN_USE`
⌈
If `SomeIpTp_RxIndication` is called, the indicated PDU has TP Flag set to '0' and if all configured SomeIpTpRxNSdus of the affected SomeIpTpRxChannel are in state `NSDU_IN_USE`, report a runtime error `SOMEIPTP_E_ALL_RX_NSDUS_IN_USE` and return.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. SOME/IP segment received with Offset 0

Upstream requirements:
⌈
If a SOME/IP segment is successfully received with Offset Field set to 0, the SOME/IP TP module shall store the values of the received SOME/IP header for each PDU ID per identified transmission source () separately.These values shall be used as reference values for the (expected) following consecutive receiving SOME/IP segments (i.e. with Offset Field set to > 0).
⌋

 First segment reception handling
  Upstream requirements:
⌈
If a SOME/IP segment is successfully received with Offset Field set to 0 via a configured SomeIpTpRxNPdu and at least one SomeIpTpRxNSdu of the affected SomeIpTpRxChannel is in state `NSDU_AVAILABLE`, then the SOME/IP TP module shall perform the following actions. Otherwise, if all configured SomeIpTpRxNSdus of the affected SomeIpTpRxChannel are in state `NSDU_IN_USE`, report a runtime error `SOMEIPTP_E_ALL_RX_NSDUS_IN_USE` and return:

* Start the Rx timeout time defined by SomeIpTpRxTimeoutTime.
* Set the corresponding SomeIpTpRxNSdu to state `NSDU_IN_USE`.
* Call the API `PduR_SomeIpTpStartOfReception`() with the PDU ID derived from the parameter SomeIpTpRxSduRef and the TpSduLength set to '0'.
⌋

Note:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. SOME/IP segment received with Offset> 0

Upstream requirements:
⌈
If a SOME/IP segment is successfully received with Offset Field> 0, the SOME/IP TP module shall compare the received SOME/IP header fields with the values of the stored SOME/IP header fields which has been received with the first segment (i.e. Offset was set to 0) for each PDU ID per identified transmission source ():

* Request ID
* Protocol Version
* Interface Version
* Message Type
* Return Code

If these values match restart the SomeIpTpRxTimeoutTime and continue with the assembly process.
⌋

  Upstream requirements:
⌈
The SOME/IP TP module shall store the number of Payload bytes for every PDU ID per identified transmission source () separately which has been passed to the upper layer.
⌋

  Upstream requirements:
⌈
The SOME/IP TP module shall compare the value of the Offset Field with the sum divided by 16 of copied Payload bytes since the first received SOME/IP segment (i.e. with Offset Field set to '0').

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Interruption of the assembly process

Handling if SomeIpTpRxTimeoutTime expires
  Upstream requirements: ,
⌈
If the Rx timeout time defined by SomeIpTpRxTimeoutTime of a SomeIpTpRxChannel expires,

* The current assembly process shall be interrupted as defined by `SWS_SomeIpTp_00054`.
* The API `Det_ReportRuntimeError`() shall be called with the runtime error code `SOMEIPTP_E_ASSEMBLY_INTERRUPT`.
⌋

 Handling if SOME/IP TP segment is received with Offset Value > 0, but no session for this PDU ID and its identified transmission source is running
  Upstream requirements: ,
⌈
If the API `SomeIpTp_RxIndication`() is called with the Offset Value is > 0 but no session for the given PDU ID and its identified transmission source (see ) is currently running,

* The received PDU shall be ignored
* The API `Det_ReportRuntimeError`() shall be called with the runtime error code `SOMEIPTP_E_INCONSISTENT_SEQUENCE`.
⌋

Note: This check identifies that at least the first segment has not been received.

 Handling if an assembly process is interrupted
  Upstream requirements:
⌈
If the SOME/IP TP module interrupts the assembly process because of a detected error, the SOME/IP TP module shall consider the following points:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 34. Development 错误
*原文标题：Development Errors*

Definition of development errors in module SomeIpTp
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| SOME/IP TP module not initialized | SOMEIPTP_E_UNINIT | 0x01 |
| Null pointer has been passed as an argument | SOMEIPTP_E_PARAM_POINTER | 0x02 |
| Unknown parameter has been passed | SOMEIPTP_E_PARAM | 0x03 |
| Invalid configuration set selection | SOMEIPTP_E_INIT_FAILED | 0x04 |
| SOME/IP TP module is already initialized | SOMEIPTP_E_REINIT | 0x05 |

⌋

### 35. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module SomeIpTp
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| The TP-Flag (of Message Type) was set to '0' | SOMEIPTP_E_MESSAGE_TYPE | 0x04 |
| Inconsistent subsequent segment received | SOMEIPTP_E_INCONSISTENT_SEQUENCE | 0x05 |
| Inconsistent header received | SOMEIPTP_E_INCONSISTENT_HEADER | 0x06 |
| Disassembly Interrupt due to the upper layer | SOMEIPTP_E_DISASSEMBLY_INTERRUPT | 0x07 |
| Assembly Interrupt due to the upper layer | SOMEIPTP_E_ASSEMBLY_INTERRUPT | 0x08 |
| All configured SomeIpTpRxNSdu of the affected SomeIpTpRxChannel are in state NSDU_IN_USE, while a further request is received. | SOMEIPTP_E_ALL_RX_NSDUS_IN_USE | 0x09 |

⌋

Note: In reference to run-time error "`SOMEIPTP_E_MESSAGE_TYPE`" no DET will be reported for unsegmented message and is passed to the upper layer without further handling.

### 36. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 37. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 38. API 规范
*原文标题：API specification*

### 39. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following modules are listed:

 Definition of imported datatypes of module SomeIpTp
  Upstream requirements:
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

### 40. 类型定义
*原文标题：Type definitions*

Definition of datatype `SomeIpTp_ConfigType`
  Upstream requirements:
⌈
| Name | SomeIpTp_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | This type shall contain at least all parameters that are post-build able according to chapter 10. | < |
| Available via | SomeIpTp.h | < |

⌋

### 41. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 42. SomeIpTp_Init

Definition of API function `SomeIpTp_Init`
  Upstream requirements:
⌈
| Service Name | SomeIpTp_Init | < |
|---|---|---|
| Syntax | void SomeIpTp_Init ( |  |

  const `SomeIpTp_ConfigType`* config
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | config | Base pointer to the configuration structure of the SOME/IP TP module. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the SOME/IP TP module. | < |
| Available via | SomeIpTp.h | < |

⌋

Note:

The AUTOSAR ECU StateManager calls this SOME/IP TP API service with the address of the static configuration structure of the module in parameter `SomeIpTp_ConfigPtr`.

### 43. SomeIpTp_DeInit

Definition of API function `SomeIpTp_DeInit`
⌈
| Service Name | SomeIpTp_DeInit | < |
|---|---|---|
| Syntax | void SomeIpTp_DeInit ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function resets the SomeIpTp module to the uninitialized state. | < |
| Available via | SomeIpTp.h | < |

⌋

### 44. SomeIpTp_Transmit

Definition of API function `SomeIpTp_Transmit`
  Upstream requirements:
⌈
| Service Name | SomeIpTp_Transmit | < |
|---|---|---|
| Syntax | Std_ReturnType SomeIpTp_Transmit ( |  |

  PduIdType TxPduId,
  const PduInfoType* PduInfoPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x49 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different PduIds. Non reentrant for the same PduId. | < |
| Parameters (in) | TxPduId | Identifier of the PDU to be transmitted |
| ^ | PduInfoPtr | Length of and pointer to the PDU data and pointer to MetaData. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Transmit request has been accepted. E_NOT_OK: Transmit request has not been accepted. |
| Description | Requests transmission of a PDU. | < |
| Available via | SomeIpTp.h | < |

⌋

  Upstream requirements:
⌈
If `SomeIpTp_Transmit`()is called before the SOME/IP TP module has been initialized with a call of `SomeIpTp_Init`(), the AP shall return with E_NOT_OK and stop the new session.
⌋

  Upstream requirements: ,
⌈
If parameter TxPduId of `SomeIpTp_Transmit`() has an invalid value and if development error detection is enabled (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. SomeIpTp_TriggerTransmit

Definition of callback function `SomeIpTp_TriggerTransmit`
  Upstream requirements:
⌈
| Service Name | SomeIpTp_TriggerTransmit | < |
|---|---|---|
| Syntax | Std_ReturnType SomeIpTp_TriggerTransmit ( |  |

  PduIdType TxPduId,
  PduInfoType* PduInfoPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x41 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different PduIds. Non reentrant for the same PduId. | < |
| Parameters (in) | TxPduId | ID of the SDU that is requested to be transmitted. |
| Parameters (inout) | PduInfoPtr | Contains a pointer to a buffer (SduDataPtr) to where the SDU data shall be copied, and the available buffer size in SduLengh. On return, the service will indicate the length of the copied SDU data in SduLength. |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: SDU has been copied and SduLength indicates the number of copied bytes. E_NOT_OK: No SDU data has been copied. PduInfoPtr must not be used since it may contain a NULL pointer or point to invalid data. |
| Description | Within this API, the upper layer module (called module) shall check whether the available data fits into the buffer size reported by PduInfoPtr->SduLength. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. SomeIpTp_RxIndication

Definition of callback function `SomeIpTp_RxIndication`
  Upstream requirements:
⌈
| Service Name | SomeIpTp_RxIndication | < |
|---|---|---|
| Syntax | void SomeIpTp_RxIndication ( |  |

  PduIdType RxPduId,
  const PduInfoType* PduInfoPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x42 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different PduIds. Non reentrant for the same PduId. | < |
| Parameters (in) | RxPduId | ID of the received PDU. |
| ^ | PduInfoPtr | Contains the length (SduLength) of the received PDU, a pointer to a buffer (SduDataPtr) containing the PDU, and the MetaData related to this PDU. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Indication of a received PDU from a lower layer communication interface module. | < |
| Available via | SomeIpTp.h | < |

⌋

### 其余 34 章（内容从略，见纯文本全文）

47. SomeIpTp_TxConfirmation
48. Scheduled functions
49. SomeIpTp_MainFunctionTx
50. SomeIpTp_MainFunctionRx
51. Expected 接口
52. Mandatory 接口
53. Optional 接口
54. Configurable 接口
55. 时序图
56. Reception
57. Transmission
58. 配置规范
59. How to read this chapter
60. Containers and 配置 parameters
61. SomeIpTp
62. SomeIpTpGeneral
63. SomeIpTpChannel
64. SomeIpTpTxChannel
65. SomeIpTpRxChannel
66. SomeIpTpRxNSdu
67. SomeIpTpRxNPdu
68. SomeIpTpTxNSdu
69. SomeIpTpTxNPdu
70. 发布信息
71. 附录
72. Change history of AUTOSAR traceable items
73. Traceable item history of this document according to AUTOSAR Release R26-11
74. Added 规范 Items in R26-11
75. Changed 规范 Items in R26-11
76. Deleted 规范 Items in R26-11
77. Traceable item history of this document according to AUTOSAR Release R25-11
78. Added 规范 Items in R25-11
79. Changed 规范 Items in R25-11
80. Deleted 规范 Items in R25-11
