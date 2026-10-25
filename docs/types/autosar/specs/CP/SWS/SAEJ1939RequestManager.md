# Specification of a Request Manager for SAE J1939 (`SAEJ1939RequestManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 611 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939RequestManager_611\AUTOSAR_CP_SWS_SAEJ1939RequestManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939RequestManager_611\AUTOSAR_CP_SWS_SAEJ1939RequestManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939RequestManager_611\zzgen\CP_SWS_SAEJ1939RequestManager.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module SAE J1939 Request Manager.

## 模块依赖

The  shows an overview of the neighboring modules of the SAE J1939 Request Manager.

The SAE J1939 Request Manager (J1939Rm) has direct interfaces towards COM, the PDU Router (PduR), the SAE J1939 Network Management module (J1939Nm), the SAE J1939 Diagnostic Communication Manager (J1939Dcm), and the Default Error Tracer (DET), and also to application software components (SW-Cs) via the AUTOSAR Runtime Environment (RTE) and Complex Drivers (CDD). Besides these, there are also indirect dependencies towards the CAN Interface (CanIf) and the Communication Manager (ComM).

The SAE J1939 Request Manager includes header files of COM, J1939Nm, J1939Dcm, PduR, DET, CDDs, and the RTE.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module SAE J1939 Request Manager.

### 2. Request 管理 according to SAE J1939
*原文标题：Request Management according to SAE J1939*

J1939 defines a special parameter group (PG) called Request (RQST, PGN = 0x0EA00), which may be used to request transmission of any other parameter group (see SAE J1939-21). The Request parameter group just contains the PGN of the requested parameter group.

Depending on the destination address used by the Request PG, the response must be sent directly to the requesting ECU, or to all ECUs. For short parameter groups with PDU1 format, the destination address is set accordingly, for large parameter groups the suitable transport protocol mode (BAM or CMDT of J1939Tp) is used.

Depending on the requested parameter group and the destination address of the Request PG, ECUs answer either with the requested parameter group, with the special Acknowledgement parameter group (ACKM, PGN = 0x0E800), or not at all.

Finally, J1939 defines that the response to a Request will be expected within 1.25s after the Request was sent. The responding node is required to answer within 200ms.

Besides the Request PG, J1939 also defines a Request2 PG (RQST2, PGN = 0x0C900). The behavior of this PG is identical to that of the Request PG, with the following extensions:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. SAE J1939 Request 管理器 BSW 模块
*原文标题：SAE J1939 Request Manager BSW Module*

The SAE J1939 Request Manager (J1939Rm) handles received and transmitted Request, Request2, and Acknowledgement PGs. It natively supports handling of incoming requests for the AddressClaimed PG and is configurable to support incoming requests for diagnostic and other J1939 PGNs. Unknown incoming requests are answered with a negative Acknowledgement PG if they address a specific destination address.

The J1939Rm also supports transmission of requests and timeout supervision for the resulting PG or acknowledgement.

### 4. J1939 Terminology

The terminology of J1939 differs noticeably from the usual AUTOSAR terminology. For consistency reasons, this introduction used the terms of the J1939 specification, while the remainder of this specification will use terms that are more common within AUTOSAR:

* I-PDU replaces parameter group

### 5. 术语表, Acronyms, and Abbreviations
*原文标题：Glossary, Acronyms, and Abbreviations*

The glossary below includes terms and acronyms and abbreviations relevant to the SAE J1939 Request Manager module that are not included in the .

| Glossary Term | Explanation |
|---|---|
| Extended Identifier Bytes | These bytes represent multiplexor values in a multiplexed message which is requested via RQST2 |
| Meta Data | Meta data transferred alongside a PDU, consisting of a set of meta data items |
| Meta Data Item | A single item of meta data of defined type and size |
| Parameter | A parameter is a signal of the SAE J1939 application layer. The Parameter definition includes defined scale, limits, offset, and physical unit. Parameters are uniquely identified by the SPN. |
| Parameter Group | A Parameter Group is a message of the SAE J1939 application layer. Each Parameter Group contains several Parameters (signals), and is uniquely identified by the PGN. |
| Parameter Group Number | Unique identifier (18 bits: EDP, DP, PDUF, PDUS) of an SAE J1939 Parameter Group that is contained in the payload of many SAE J1939 protocol messages and in the 29bit CAN identifier of SAE J1939 PGs. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 相关文档
*原文标题：Related documentation*

### 7. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 8. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for SAE J1939 Request Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for SAE J1939 Request Manager.

### 9. 约束与假设
*原文标题：Constraints and assumptions*

### 10. 限制
*原文标题：Limitations*

The SAE J1939 Request Manager only implements Request, Request2, and Acknowledgement PGs. It does not provide support for the Transfer PG.

### 11. 适用的车型领域
*原文标题：Applicability to car domains*

J1939 is developed by the SAE as a standard for heavy-duty on-highway, farming, and construction vehicles. It is not applicable to passenger cars or light trucks.

### 12. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The  shows an overview of the neighboring modules of the SAE J1939 Request Manager.

The SAE J1939 Request Manager (J1939Rm) has direct interfaces towards COM, the PDU Router (PduR), the SAE J1939 Network Management module (J1939Nm), the SAE J1939 Diagnostic Communication Manager (J1939Dcm), and the Default Error Tracer (DET), and also to application software components (SW-Cs) via the AUTOSAR Runtime Environment (RTE) and Complex Drivers (CDD). Besides these, there are also indirect dependencies towards the CAN Interface (CanIf) and the Communication Manager (ComM).

The SAE J1939 Request Manager includes header files of COM, J1939Nm, J1939Dcm, PduR, DET, CDDs, and the RTE.

### 13. 文件结构
*原文标题：File structure*

### 14. 代码文件结构
*原文标题：Code file structure*

For details, refer to .

### 15. 头文件结构
*原文标题：Header file structure*

Besides the files defined in , the SAE J1939 Request Manager needs to include the files defined below.

  Upstream requirements:
⌈
J1939Rm shall include the header file Com.h if at least one J1939RmComUser is configured.
⌋

  Upstream requirements:
⌈
J1939Rm shall include the header file J1939Nm.h if at least one J1939RmNmUser is configured.
⌋

  Upstream requirements:
⌈
J1939Rm shall include the header file J1939Dcm.h if at least one J1939RmDcmUser is configured.
⌋

  Upstream requirements:
⌈
J1939Rm shall include a header file named <apiServicePrefix>_J1939Rm.h for every configured J1939RmCddUser.
⌋

Please note: Complex driver (CDD) APIs use the module prefix configured by the apiServicePrefix of the CDD's module description file.

### 16. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 功能规范
*原文标题：Functional specification*

This chapter defines the behavior of the SAE J1939 Request Manager. The API of the module is defined in chapter , while the configuration is defined in chapter .

### 18. 概述
*原文标题：Overview*

On one side, the SAE J1939 Request Manager is responsible for routing incoming RQST and RQST2 PGs to the correct destination, and to provide an infrastructure for sending responding ACKM PGs.

On the other side, the SAE J1939 Request Manager also provides an infrastructure to send RQST and RQST2 PGs, and to supervise timeout of the response(s), including but not limited to ACKM PGs.

The SAE J1939 Request Manager uses meta data items of type `CAN_ID_32` of the received and transmitted ACKM and RQST PGs to access the source address, the destination address, and the priority which are encoded in the CAN ID.

  Upstream requirements:
⌈
Meta data items of type `CAN_ID_32` contain the source address in the fourth (least significant) byte.
⌋

  Upstream requirements:
⌈
Meta data items of type `CAN_ID_32` contain the destination address in the third byte.
⌋

  Upstream requirements:
⌈
Meta data items of type `CAN_ID_32` contain the priority in the bits 2-4 of the first (most significant) byte, where bit 0 is the least significant bit of a byte.
⌋

### 19. 模块处理
*原文标题：Module Handling*

This section contains description of auxiliary functionality of the SAE J1939 Request Manager.

### 20. 初始化
*原文标题：Initialization*

The SAE J1939 Request Manager is initialized via `J1939Rm_Init`, and de-initialized via `J1939Rm_DeInit`. Except for `J1939Rm_Init`, the API functions of the SAE J1939 Request Manager may only be called after the module has been properly initialized.

  Upstream requirements:
⌈
A call to `J1939Rm_Init` initializes all internal variables and sets the SAE J1939 Request Manager to the initialized state.
⌋

  Upstream requirements:
⌈
A call to `J1939Rm_DeInit` sets the SAE J1939 Request Manager back to the uninitialized state.
⌋

  Upstream requirements: ,
⌈
When `J1939Rm_Init` is called in initialized state, the SAE J1939 Request Manager shall not re-initialize its internal variables. It shall instead call `Det_ReportError` with the error code `J1939RM_E_REINIT` if development error detection is enabled (see J1939RmDevErrorDetect).
⌋

### 21. 时序 Related Functionality
*原文标题：Timing Related Functionality*

To be able to measure times, the SAE J1939 Request Manager is triggered cyclically via the `J1939Rm_MainFunction`.

  Upstream requirements:
⌈
The SAE J1939 Request Manager shall use the `J1939Rm_MainFunction` for timing related purposes.
⌋

### 22. Communication 状态处理
*原文标题：Communication State Handling*

In general, request handling is only active when the ECU is online (see SAE J1939 Network Management for details). The exceptions to this rule are received and transmitted requests for the AddressClaimed PG, which must be possible in all cases. The SAE J1939 Request Manager provides an API that is used by the BSW Mode Manager (BswM) to notify the J1939 communication state.

  Upstream requirements:
⌈
During initialization via `J1939Rm_Init`, the SAE J1939 Request Manager assumes the offline state for all nodes on all channels.
⌋

⌈
A call to `J1939Rm_SetState` sets the state of a node's channel to online or offline.
⌋

⌈
In the offline state, the SAE J1939 Request Manager only processes requests for the AddressClaimed PG, while timeout supervision and acknowledgement handling are completely disabled.
⌋

### 23. Reception of Requests

The SAE J1939 Request Manager receives request PGs (RQST and RQST2) via `J1939Rm_RxIndication` from the CAN Interface. The SAE J1939 Request Manager shall use the meta data item type `CAN_ID_32` to be able to identify the sender, the destination address, and the priority of the request.

  Upstream requirements: ,
⌈
The SAE J1939 Request Manager shall use a meta data item of type `CAN_ID_32` to determine the source address, destination address, and priority of received request PGs.
⌋

  Upstream requirements:
⌈
The SAE J1939 Request Manager shall only accept requests addressed to the whole network (global DA), or to one of the configured addresses of the ECU (see J1939RmNmNodeRef).
⌋

Requests for the AddressClaimed PG (AC, PGN = 0x0EE00) always go to the SAE J1939 Network Management module. Requests for the DMx PGs (DM01 to DM60) always go to the SAE J1939 Diagnostic Communication Manager, the destination of these and other PGNs is configured via J1939RmUserRequestPGN.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Request Forwarding

Forwarding to other BSW modules is done via the generic callout function `User_RequestIndication`. Forwarding to SW-C uses a dedicated service port function with the same signature as the `User_RequestIndication`.

  Upstream requirements:
⌈
When `J1939Rm_RxIndication` is called by the PDU Router to indicate reception of a request, and the requested PGN is configured via J1939RmUserRequestPGN to trigger either the SAE J1939 Diagnostic Communication Manager or a CDD, the SAE J1939 Request Manager shall call the corresponding `User_RequestIndication`.
⌋

  Upstream requirements:
⌈
When `J1939Rm_RxIndication` is called by the PDU Router to indicate reception of a request, and the requested PGN is AddressClaimed (AC, 0x0EE00), the SAE J1939 Request Manager shall call `J1939Nm_RequestIndication`.
⌋

  Upstream requirements:
⌈
When `J1939Rm_RxIndication` is called by the PDU Router to indicate reception of a request, and the requested PGN is configured via J1939RmUserRequestPGN to be forwarded to the RTE, the SAE J1939 Request Manager shall call the corresponding service port function.
⌋

### 25. Request 处理 via COM
*原文标题：Request Handling via COM*

If COM is configured as destination for the request of a certain PGN, the SAE J1939 Request Manager will prepare the meta data, and request COM to send the PDU with the meta data provided via `Com_TriggerIPDUSendWithMetaData`. This sequence is shown in Figure .

  Upstream requirements:
⌈
When `J1939Rm_RxIndication` is called by the PDU Router to indicate reception of a request, and the requested PGN is configured via J1939RmComIPduPGN to be handled via COM, and when the extended identifier bytes of an RQST2 match the multiplexor values of a multiplexed message, the SAE J1939 Request Manager shall prepare the meta data from the given information and provide it to COM via `Com_TriggerIPDUSendWithMetaData` together with the PduId of the transmitted COM I-PDU referenced by J1939RmComIPduRef.
⌋

### 26. Request of Unknown PGNs

The SAE J1939 Request Manager shall respond to requests for unknown PGNs with a NACK, but only when the request was sent to a specific destination address.

  Upstream requirements: ,
⌈
When `J1939Rm_RxIndication` is called by the PDU Router to indicate reception of a request, and the requested PGN or the requested extended identifier bytes are not configured, and the destination address is not the broadcast address, the SAE J1939 Request Manager shall call `PduR_J1939RmTransmit` to send a negative acknowledgement (NACK).
⌋

### 27. Transmission of Acknowledgements

For unknown PGNs, the SAE J1939 Request Manager transmits a negative acknowledgement by itself (see section  above). Modules that receive requests from the SAE J1939 Request Manager may use the API `J1939Rm_SendAck` to transmit the acknowledgement variants defined by the J1939 standard (see section 5.4.4 in ).

The Acknowledgement PG is supposed to have a fixed destination address (0xFF), configured via CanIfTxPduCanId in the CAN Interface. The SAE J1939 Request Manager shall use the meta data item type `CAN_ID_32` so that it can modify the priority and source address.

  Upstream requirements:
⌈
When a BSW module, a CDD, or an SW-C (via service port and RTE) calls `J1939Rm_SendAck`, the SAE J1939 Request Manager shall call `PduR_J1939RmTransmit` to send the required acknowledgement.
⌋

  Upstream requirements: ,
⌈
The SAE J1939 Request Manager shall use a meta data item of type `CAN_ID_32` to provide the source address and priority of transmitted Acknowledgement PGs.
⌋

There is only one I-PDU available to send Acknowledgement PGs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Transmission of Requests

As stated in section , the SAE J1939 Request Manager also supports transmission of requests, reception of responding acknowledgements, and timeout supervision for the responses.

To trigger the transmission of a request, the SAE J1939 Request Manager provides the API `J1939Rm_SendRequest`.

The SAE J1939 Request Manager shall use the meta data item type `CAN_ID_32` to be able to set the priority and the source and destination address freely. The CAN Interface must be configured such that the PDUF and data page bits are fixed, while the remaining bits of the CAN ID are variable.

  Upstream requirements:
⌈
When a BSW module, a CDD, or an SW-C (via service port and RTE) calls `J1939Rm_SendRequest`, the SAE J1939 Request Manager shall call `PduR_J1939RmTransmit` to send the request.
⌋

  Upstream requirements:
⌈
When no extended identifier bytes are provided with `J1939Rm_SendRequest`, J1939Rm shall send an RQST PG. When one or more extended identifier bytes are provided, an RQST2 PG shall be sent.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Reception of Acknowledgements

The SAE J1939 Request Manager receives Acknowledgement PGs (ACKM) via `J1939Rm_RxIndication` from the CAN Interface. The SAE J1939 Request Manager shall use the meta data item type `CAN_ID_32` to be able to identify the priority and the sender of the acknowledgement.

  Upstream requirements: ,
⌈
The SAE J1939 Request Manager shall use a meta data item of type `CAN_ID_32` to determine the source address and priority of received Acknowledgement PGs.
⌋

  Upstream requirements:
⌈
The SAE J1939 Request Manager shall only accept acknowledgements where the AddressAcknowledged is set to one of the configured addresses of the ECU (see J1939RmNmNodeRef).
⌋

The scheduling of received Acknowledgement PGs is configured similarly to the Request PG, see section , but the destinations are restricted to CDD and Application, because the J1939Nm and the J1939Dcm currently do not need to request any information from other ECUs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Timeout Supervision

The SAE J1939 specification SAE J1939-21 defines a maximum delay of 200ms for the answer to a request. This delay is not supervised by the SAE J1939 Request Manager. On the other hand, the timeout of 1.25s for the reception of the answer to a request will be supervised by the SAE J1939 Request Manager, if configured accordingly via J1939RmUserTimeoutSupervision. In that case, when the request is transmitted, the timer is started and the request data is stored as described in .

  Upstream requirements:
⌈
If timeout supervision is enabled for the caller of `J1939Rm_SendRequest` via J1939RmUserTimeoutSupervision, and the parameter checkTimeout is TRUE, and the destination address is not the broadcast address (0xFF): The SAE J1939 Request Manager shall start timeout supervision.
⌋

  Upstream requirements:
⌈
When an acknowledgement matching the request is received, when `J1939Rm_CheckReceivedComIPdu` is called which matches the request, or when a CDD or an application SW-C calls `J1939Rm_CancelRequestTimeout`, the timeout supervision of the request is stopped.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Routing of Requests and Acknowledgements

Depending on the configuration of J1939NmSharedAddressSpace and J1939NmExternalNodeGatewayedChannelRef referring to J1939NmChannels that reference the same ComMChannels as the J1939RmChannels, the Request, Request2, and Acknowledgement PGs need to be routed from one J1939RmChannel to another.

  Upstream requirements:
⌈
If J1939RmGatewaySupport is enabled, and a J1939RmChannel is linked to another J1939RmChannel via a J1939NmSharedAddressSpace: All Request, Request2, and Acknowledgement PGs that are received on the first J1939RmChannel shall be forwarded to the second J1939RmChannel.
⌋

Note: The complete path between two J1939RmChannels linked via a J1939NmSharedAddressSpace is:

J1939RmChannel \rightarrow J1939RmComMNetworkHandleRef \rightarrow ComMChannel \leftarrow J1939NmComMNetworkHandleRef \leftarrow J1939NmChannel \leftarrow J1939NmSharedChannelRef \leftarrow J1939NmSharedAddressSpace \rightarrow J1939NmSharedChannelRef \rightarrow J1939NmChannel \rightarrow J1939NmComMNetworkHandleRef \rightarrow ComMChannel \leftarrow J1939RmComMNetworkHandleRef \leftarrow J1939RmChannel

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, this section specifies particular errors arranged in the respective subsections below.

### 33. Development 错误
*原文标题：Development Errors*

Definition of development errors in module J1939Rm
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| An API was called while the module was uninitialized | J1939RM_E_UNINIT | 0x01 |
| The Init API was called twice | J1939RM_E_REINIT | 0x02 |
| J1939Rm_Init was called with an invalid configuration pointer | J1939RM_E_INIT_FAILED | 0x03 |
| An API service was called with a NULL pointer | J1939RM_E_PARAM_POINTER | 0x10 |
| An API service was called with a wrong ID | J1939RM_E_INVALID_PDU_SDU_ID | 0x11 |
| An API service was called with wrong network handle | J1939RM_E_INVALID_NETWORK_ID | 0x12 |
| The API J1939Rm_SetState was called with a wrong state | J1939RM_E_INVALID_STATE | 0x13 |
| An API was called with an illegal user ID | J1939RM_E_INVALID_USER | 0x14 |
| An API was called with an unknown or illegal PGN | J1939RM_E_INVALID_PGN | 0x15 |
| An API was called with an illegal priority | J1939RM_E_INVALID_PRIO | 0x16 |
| An API was called with an illegal node address | J1939RM_E_INVALID_ADDRESS | 0x17 |
| An API was called with an illegal Boolean option | J1939RM_E_INVALID_OPTION | 0x18 |
| An API was called with an illegal AckCode | J1939RM_E_INVALID_ACK_CODE | 0x19 |
| An API was called with an illegal node ID | J1939RM_E_INVALID |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Runtime 错误
*原文标题：Runtime Errors*

Runtime errors have not yet been classified.

### 35. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 36. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 37. API 规范
*原文标题：API specification*

### 38. API Parameter Checking

The SAE J1939 Request Manager performs parameter checks for all called APIs. It reports the development error `J1939RM_E_PARAM_POINTER` when a call provides a NULL pointer, `J1939RM_E_INVALID_PDU_SDU_ID` when a check of a PDU ID fails, `J1939RM_E_INVALID_NETWORK_ID` when a check of a network handle fails, and `J1939RM_E_INVALID_NODE_ID` when a check of a node handle fails.

`J1939RM_E_PARAM_POINTER` is expected to be reported as specified in  by .

  Upstream requirements:
⌈
If development error detection is enabled via J1939RmDevErrorDetect, the SAE J1939 Request Manager shall check PduIdType parameters (PDU IDs) of its API functions against the configured IDs, and shall report the development error `J1939RM_E_INVALID_PDU_SDU_ID` when an unknown ID is provided by the call.
⌋

  Upstream requirements:
⌈
If development error detection is enabled via J1939RmDevErrorDetect, the SAE J1939 Request Manager shall check NetworkHandleType parameters (network handles) of its API functions against the referenced network handles of ComM, and shall report the development error `J1939RM_E_INVALID_NETWORK_ID` when an unknown handle is provided by the call.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Imported 类型
*原文标题：Imported types*

In this section, all types used by the SAE J1939 Request Manager are listed together with the defining module:

 Definition of imported datatypes of module J1939Rm
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Comtype | ComStack_Types.h | NetworkHandleType |
| ^ | ComStack_Types.h | PduIdType |
| ^ | ComStack_Types.h | PduInfoType |
| ^ | ComStack_Types.h | PduLengthType |
| Std | Std_Types.h | Std_ReturnType |

⌋

The types that are declared in `ComStack_Types`.h are defined in , while the types declared in `Std_Types`.h are defined in .

### 40. 类型定义
*原文标题：Type definitions*

### 41. J1939Rm_ConfigType

Definition of datatype `J1939Rm_ConfigType`
⌈
| Name | J1939Rm_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | This is the base type for the configuration of the J1939 Request Manager. |  |

A pointer to an instance of this structure will be used in the initialization of the J1939 Request Manager.

| The content of this structure is defined in chapter 10 Configuration specification. | < |  |
|---|---|---|
| Available via | J1939Rm.h | < |

⌋

### 42. J1939Rm_StateType

Definition of datatype `J1939Rm_StateType`
⌈
| Name | J1939Rm_StateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | J1939RM_STATE_OFFLINE | 0x00 | Only Request for AC |
| ^ | J1939RM_STATE_ONLINE | 0x01 | Normal communication |
| Description | This type represents the communication state of the J1939 Request Manager. | < | < |
| Available via | J1939Rm.h | < | < |

⌋

### 43. 功能定义
*原文标题：Function definitions*

This is a list of functions provided for upper layer modules.

### 44. J1939Rm_Init

Definition of API function `J1939Rm_Init`
  Upstream requirements:
⌈
| Service Name | J1939Rm_Init | < |
|---|---|---|
| Syntax | void J1939Rm_Init ( |  |

  const `J1939Rm_ConfigType`* configPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | configPtr | Pointer to selected configuration structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function initializes the J1939 Request Manager. | < |
| Available via | J1939Rm.h | < |

⌋

See section  for details.

See section  for parameter checks.

`J1939RM_E_INIT_FAILED` is expected to be reported as specified in  by .

### 45. J1939Rm_DeInit

Definition of API function `J1939Rm_DeInit`
  Upstream requirements:
⌈
| Service Name | J1939Rm_DeInit | < |
|---|---|---|
| Syntax | void J1939Rm_DeInit ( |  |

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
| Description | This function resets the J1939 Request Manager to the uninitialized state. | < |
| Available via | J1939Rm.h | < |

⌋

See section  for details.

### 46. J1939Rm_SetState

Definition of API function `J1939Rm_SetState`
⌈
| Service Name | J1939Rm_SetState | < |
|---|---|---|
| Syntax | Std_ReturnType J1939Rm_SetState ( |  |

  NetworkHandleType channel,
  uint8 node,
  `J1939Rm_StateType` newState
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | channel | Channel for which the state shall be changed. |
| ^ | node | Node for which the state shall be changed. |
| ^ | newState | New state the J1939Rm shall enter, see definition of J1939Rm_StateType for available states. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: New communication state was set E_NOT_OK: Communication state was not changed due to wrong value in NewState or wrong initialization state of the module. |
| Description | Changes the communication state of J1939Rm to offline (only Request for AC supported) or online. | < |
| Available via | J1939Rm.h | < |

⌋

  Upstream requirements:
⌈
The SAE J1939 Request Manager shall reject the state change by returning E_NOT_OK when the newState is not in the valid range. If development error detection is enabled via J1939RmDevErrorDetect, the development error `J1939RM_E_INVALID_STATE` shall be reported.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. J1939Rm_SendRequest

Definition of API function `J1939Rm_SendRequest`
  Upstream requirements:
⌈
| Service Name | J1939Rm_SendRequest | < |
|---|---|---|
| Syntax | Std_ReturnType J1939Rm_SendRequest ( |  |

  uint8 userId,
  NetworkHandleType channel,
  uint32 requestedPgn,
  const `J1939Rm_ExtIdInfoType`* extIdInfo,
  uint8 destAddress,
  uint8 priority,
  boolean checkTimeout
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | userId | Identification of the calling module. |
| ^ | channel | Channel on which the request shall be sent. |
| ^ | requestedPgn | PGN of the requested PG. |
| ^ | extIdInfo | Extended identifier bytes. J1939RM_EXTID_NONE is assumed if a NULL pointer is provided. |
| ^ | destAddress | Address of the destination node or 0xFF for broadcast. |
| ^ | priority | Priority of the Request PG. |
| ^ | checkTimeout | TRUE: Timeout supervision will be performed FALSE: No timeout supervision will be started |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Transmission request is accepted E_NOT_OK: Transmission request is not accepted |
| Description | Requests transmission of a Request or Request2 PG. | < |
| Available via | J1939Rm.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 90 章（内容从略，见纯文本全文）

48. J1939Rm_CancelRequestTimeout
49. J1939Rm_SendAck
50. J1939Rm_CheckReceivedComIPdu
51. Callback 通知
52. J1939Rm_RxIndication
53. J1939Rm_TxConfirmation
54. Scheduled functions
55. J1939Rm_MainFunction
56. Expected 接口
57. Mandatory 接口
58. Optional 接口
59. Configurable 接口
60. <User>_RequestIndication
61. <User>_AckIndication
62. <User>_RequestTimeoutIndication
63. 服务接口
64. Provided 服务 Ports
65. J1939Rm_SendAck
66. J1939Rm_SendRequest
67. J1939Rm_CancelRequestTimeout
68. Required 服务 Ports
69. J1939Rm_AckIndication
70. J1939Rm_RequestIndication
71. J1939Rm_RequestTimeoutIndication
72. Client-Server 接口
73. AppSendAck
74. AppSendRequest
75. AppCancelRequestTimeout
76. AppAckIndication
77. AppRequestIndication
78. AppRequestTimeoutIndication
79. Implementation 数据类型
80. J1939Rm_AckCode
81. J1939Rm_ExtIdType
82. J1939Rm_ExtIdInfoType
83. 时序图
84. Reception of Request PG
85. Transmission of Acknowledgement PG
86. 处理 of Request for a COM Pdu
87. Request for a 诊断 Pdu的处理
88. Transmission of Request PG
89. Reception of Acknowledgement PG
90. Monitoring of Request Timeout
91. 配置规范
92. Containers and 配置 parameters
93. J1939Rm
94. J1939RmGeneral
95. J1939RmConfigSet
96. J1939RmChannel
97. J1939RmAckmRxPdu
98. J1939RmAckmTxPdu
99. J1939RmRqstRxPdu
100. J1939RmRqstTxPdu
101. J1939RmRqst2RxPdu
102. J1939RmRqst2TxPdu
103. J1939RmNode
104. J1939RmUser
105. J1939RmNmUser
106. J1939RmDcmUser
107. J1939RmCddUser
108. J1939RmRteUser
109. J1939RmComUser
110. J1939RmComIPdu
111. 附录
112. 不适用需求
113. Change History of AUTOSAR Traceable Items
114. Traceable Item History of this Document According to AUTOSAR Release R26-11
115. Added 规范 Items in R26-11
116. Changed 规范 Items in R26-11
117. Deleted 规范 Items in R26-11
118. Traceable Item History of this Document According to AUTOSAR Release R25-11
119. Added 规范 Items in R25-11
120. Changed 规范 Items in R25-11
121. Deleted 规范 Items in R25-11
122. Traceable Item History of this Document According to AUTOSAR Release R24-11
123. Added 规范 Items in R24-11
124. Changed 规范 Items in R24-11
125. Deleted 规范 Items in R24-11
126. Traceable Item History of this Document According to AUTOSAR Release R23-11
127. Added 规范 Items in R23-11
128. Changed 规范 Items in R23-11
129. Deleted 规范 Items in R23-11
130. Traceable Item History of this Document According to AUTOSAR Release R22-11
131. Added 规范 Items in R22-11
132. Changed 规范 Items in R22-11
133. Deleted 规范 Items in R22-11
134. Traceable Item History of this Document According to AUTOSAR Release R21-11
135. Added 规范 Items in R21-11
136. Changed 规范 Items in R21-11
137. Deleted 规范 Items in R21-11
