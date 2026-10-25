# Specification of a Functional Safety Communication Protocol Handler for SAE J1939 (`SAEJ1939FunctionalSafetyCommProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1106 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939FunctionalSafetyCommProtocol_1106\AUTOSAR_CP_SWS_SAEJ1939FunctionalSafetyCommProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939FunctionalSafetyCommProtocol_1106\AUTOSAR_CP_SWS_SAEJ1939FunctionalSafetyCommProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939FunctionalSafetyCommProtocol_1106\zzgen\CP_SWS_SAEJ1939FunctionalSafetyCommProtocol.complete.txt`

## 文档简介

This specification describes the functionality, API, and the configuration of the AUTOSAR Basic Software Module SAE J1939 Functional Safety Communication Protocol.

This module provides services for initialization, Safety Data Group (SDG) operations, Safety Header Message/Safety Data Message processing, time supervision between producer and consumer application SWCs, and error management per SAE J1939-76 specification.

Please note: Throughout this specification, the abbreviation SDG refers to an SAE J1939-76 Safety Data Group in the remainder of this document, please don't confuse this abbreviation with the special data group described in the .

The SAE J1939 Functional Safety Communication Protocol belongs to the service layer and its location is shown in .

The E2E `PROFILE_76` has been introduced for E2E protection of J1939 messages. A description of this new profile is provided in the E2E Protocol.

## 模块依赖

The  shows an overview of the neighboring modules of the SAE J1939 Functional Safety Communication Protocol.

The SAE J1939 Functional Safety Communication Protocol module (J1939Fscp) has direct interfaces and/or configuration dependencies towards the PDU Router (PduR) and the Default Error Tracer (DET). Besides these, there are also indirect dependencies towards the Communication (COM) and the CAN Interface (CanIf).

The SAE J1939 Functional Safety Communication Protocol module includes header files of the PDU Router and the Default Error Tracer.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This specification describes the functionality, API, and the configuration of the AUTOSAR Basic Software Module SAE J1939 Functional Safety Communication Protocol.

This module provides services for initialization, Safety Data Group (SDG) operations, Safety Header Message/Safety Data Message processing, time supervision between producer and consumer application SWCs, and error management per SAE J1939-76 specification.

Please note: Throughout this specification, the abbreviation SDG refers to an SAE J1939-76 Safety Data Group in the remainder of this document, please don't confuse this abbreviation with the special data group described in the .

The SAE J1939 Functional Safety Communication Protocol belongs to the service layer and its location is shown in .

The E2E `PROFILE_76` has been introduced for E2E protection of J1939 messages. A description of this new profile is provided in the E2E Protocol.

### 2. 功能性 Safety Communication 协议
*原文标题：Functional Safety Communication Protocol*

### 3. 功能性 Safety for Non-Segmented SAE J1939 Messages
*原文标题：Functional Safety for Non-Segmented SAE J1939 Messages*

SAE J1939-76 defines a message that allows applications to satisfy functional safety requirements depending on the level of functional safety needed. This message is the Safety Header Message (SHM, PGN = 0x0E00), and it is paired with an ordinary SAE J1939 message that requires functional safety coverage, referred to as the Safety Data Message (SDM). The SDM can have at maximum 8 bytes of data. The SHM includes the sequence number, CRC, and enough information from the CAN ID to associate it with the SDM. Together, the SHM and SDM are referred to as the Safety Data Group (SDG).

The transmission of the SHM precedes the transmission of the associated SDM. The SDM must be transmitted within a specified duration (SRVT) of the transmission of the associated SHM. Network nodes that receive the SDG will validate the data in the SHM before using the data in the SDM. Network nodes that are not interested in checking the functional safety for the SDM can ignore the SHM and still process the SDM.

The SDM message corresponds to the J1939ProtectedIPdu in the , which contains the payload of the specific PGN that requires protection.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 示例 1
*原文标题：Example 1*

The PGN F004 (EEC1) defines the following signals:

| Byte # | SP Label | SP Length (bits) |
|---|---|---|
| 1 | Engine Torque Mode | 4 |
| ^ | Actual Engine - Percent Torque (Fractional) | 4 |
| 2 | Driver's Demand Engine - Percent Torque | 8 |
| 3 | Actual Engine - Percent Torque | 8 |
| 4-5 | Engine Speed | 16 |
| 6 | Source Address of Controlling Device for Engine Control | 8 |
| 7 | Engine Starter Mode | 4 |
| ^ | reserved | 4 |
| 8 | Engine Demand - Percent Torque | 8 |

### 5. SAE J1939 功能性 Safety 协议 BSW 模块
*原文标题：SAE J1939 Functional Safety Protocol BSW Module*

The SAE J1939 Functional Safety Communication Protocol handles transmitting and receiving SDGs (both SHMs and SDMs). For transmitted messages that require functional safety protection, the SAE J1939 Functional Safety Communication Protocol determines the values of the data fields in the SHM for the associated SDM. For received SDGs, the SAE J1939 Functional Safety Communication Protocol validates the data fields in the SHM of a received SDG and reports the status to the data fields in the SDM. In other words, the module splits the SDG during transmission and combines the SHM and SDM during reception.

### 6. SAE J1939 Terminology

The terminology of J1939 differs noticeably from the usual AUTOSAR terminology. For consistency reasons, this introduction used the terms of the J1939 specification, while the remainder of this specification will use terms that are more common within AUTOSAR:

* 'I-PDU' replaces 'parameter group'
* 'ISignalIPdu' describes the data of the SDG (SHM + SDM)
* 'J1939ProtectedIPdu' describes the data of the SDM
* 'ISignalGroup' describes the set of parameters that need to be protected
* 'ISignal' describes a single parameter

### 7. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes terms and acronyms and abbreviations relevant to the SAE J1939 Functional Safety Communication Protocol module that are not included in the .

| Acronym / Abbreviation | Description |
|---|---|
| BSW | Basic Software (module) |
| CAN ID | CAN identifier according to  with 11 or 29 bits, the latter being defined by  to consist of Priority, EDP, DP, PDUF, PDUS/DA, and SA. |
| CanIf | CAN Interface, see |
| COM | Communication module, see |
| ComXf | COM Based Transformer, see |
| CRC | Cyclic Redundancy Check, a very common check sum |
| CrcLib | CRC Library, see |
| DA | Destination Address, part of the 29 bit CAN identifier of SAE J1939 messages |
| DEM | Diagnostic Event Manager, stores DTCs containing diagnostic events and test results, and associated information, see |
| DET | Default Error Tracer, supports development and runtime error reporting, see |
| DP | Data Page, the most significant bit (MSB) of the 18 bit PGN |
| E2E | End-to-End protection, a safety concept which can be used to achieve higher (A)SIL levels |
| E2ELib | E2E Library, see |
| E2EProtocol | E2E Protocol, see |
| E2EXf | E2E Transformer, see |
| EcuM | ECU State Manager, see |
| EDP | Extended Data Page, the second bit (after MSB) of the 18 bit PGN |

J1939Fsc

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 相关文档
*原文标题：Related Documentation*

### 9. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 10. 相关规范
*原文标题：Related Specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for SAE J1939 Functional Safety Communication Protocol.

Thus, the specification  shall be considered as additional and required specification for SAE J1939 Functional Safety Communication Protocol.

### 11. 约束与假设
*原文标题：Constraints and Assumptions*

### 12. 限制
*原文标题：Limitations*

The SAE J1939 Functional Safety Communication Protocol is specified in accordance with SAE J1939-76, which is able to satisfy the functional safety standards IEC 61508-2:2010 (up to SIL 3) and the industrial safety communication standard IEC 61784-3:2016. It is up to the system designer to perform the analysis and determine if the SAE J1939 Functional Safety Communication Protocol, the E2E protection layers and their integration into the AUTOSAR architecture satisfy the functional safety goals. Some limitations are described in sections 4.3 "Limitations" and 4.4 "SAE J1939 PG Constraints" of SAE J1939-76.

Please note that due to the architecture of AUTOSAR, the SAE J1939 Functional Safety Communication Protocol can only detect a subset of the IEC 61784-3 Communication Errors listed in table A1 in appendix A.1 "Qualitative Analysis" of SAE J1939-76. The majority of the communication errors are detected by the E2E protection layers, and only these can be reported directly to the application alongside the data as overlayed errors.

The following communication errors are detected directly by the SAE J1939 Functional Safety Communication Protocol:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 适用的车型领域
*原文标题：Applicability to Car Domains*

J1939 is developed by the SAE as a standard for heavy-duty on-highway, farming, and construction vehicles. It is not used in passenger cars.

### 14. 对其他模块的依赖
*原文标题：Dependencies to Other Modules*

The  shows an overview of the neighboring modules of the SAE J1939 Functional Safety Communication Protocol.

The SAE J1939 Functional Safety Communication Protocol module (J1939Fscp) has direct interfaces and/or configuration dependencies towards the PDU Router (PduR) and the Default Error Tracer (DET). Besides these, there are also indirect dependencies towards the Communication (COM) and the CAN Interface (CanIf).

The SAE J1939 Functional Safety Communication Protocol module includes header files of the PDU Router and the Default Error Tracer.

### 15. 文件结构
*原文标题：File Structure*

### 16. 代码文件结构
*原文标题：Code File Structure*

For details, refer to .

### 17. 头文件结构
*原文标题：Header File Structure*

For details, refer to .

### 18. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  (Requirements on BSW Modules for SAE J1939) and  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Error values naming convention |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| List possible error notifications |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| Naming convention for type, macro and function |  |  |
| Classification of runtime errors |  |  |
| Timing limits of main functions |  |  |
| J1939 Modules shall support MetaData |  |  |
| SDG Transmission |  |  |
| SDG Reception |  |  |
| Transmission Timeout Monitoring |  |  |
| Reception Timeout Monitoring |  |  |
| Ignoring unknown SHMs |  |  |
| SDG with Invalid Length |  |  |
| SRVT Timeout during Transmission |  |  |
| SRVT Timeout during Reception |  |  |
| Reception of Consecutive SHMs |  |  |
| Reception of Consecutive SDMs |  |  |

### 19. 功能规范
*原文标题：Functional Specification*

This chapter defines the behavior of the J1939 Functional Safety Communication Protocol module (J1939Fscp). The API of the module is defined in , while the configuration is defined in .

### 20. 概述
*原文标题：Overview*

The J1939Fscp is responsible for processing the transmission request from the application (through COM and PduR) of the SDG (derived from an ISignalIPdu), extract the SHM (automatically derived) and SDM (derived from the J1939ProtectedIPdu), and ensure these PDUs are transmitted within the correct time separation (SRVT) between SHM and SDM, per SAE J1939-76. The transmission path is shown in .

Prior the transmission of the SHM and SDM messages, E2E protection calculations are performed by the E2E Library. The J1939Fscp uses the result from the E2E Library and makes sure the SHM is properly formatted and passed to the lower layers.

Similarly, on the reception side, the J1939Fscp receives the SHM and SDM, assembles the SDG, and passes it to the upper layers for further processing. The reception path is shown in .

The SDG exchanged with the upper layers contains the protection data for the SHM followed by the PGN data for the the SDM (see ). The protection data contains exactly 5 bytes, consisting of 1 byte for the sequence number followed by 4 bytes of the CRC in little endian byte order. The PGN data contains the data provided by the application, and may consist of 1 to 8 bytes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 模块处理
*原文标题：Module Handling*

This section contains description of auxiliary functionality of the J1939Fscp.

### 22. 初始化
*原文标题：Initialization*

The J1939Fscp is initialized via `J1939Fscp_Init`, and de-initialized via `J1939Fscp_DeInit`. Except for `J1939Fscp_Init`, the API functions of the J1939Fscp may only be called after the module has been properly initialized.

 Module Initialization
  Status: DRAFT
  Upstream requirements:
⌈
A call to `J1939Fscp_Init` initializes all internal variables and sets the J1939Fscp to the initialized state.
⌋

 Module Shutdown
  Status: DRAFT
  Upstream requirements:
⌈
A call to `J1939Fscp_DeInit` sets the J1939Fscp back to the uninitialized state.
⌋

 Re-initialization
  Status: DRAFT
  Upstream requirements:
⌈
When `J1939Fscp_Init` is called in initialized state, the J1939Fscp shall not re-initialize its internal variables. It shall instead call `Det_ReportError` with the error code `J1939FSCP_E_REINIT` if DET reporting is enabled (see J1939FscpDevErrorDetect).
⌋

### 23. 时序 Related Functionality
*原文标题：Timing Related Functionality*

To be able to measure times, the J1939Fscp is triggered cyclically via the `J1939Fscp_MainFunction`.

 Main Function Usage
  Status: DRAFT
  Upstream requirements: ,
⌈
The J1939Fscp shall use the `J1939Fscp_MainFunction` for timing related purposes.
⌋

### 24. Message 处理
*原文标题：Message Handling*

### 25. Message Transmission

The PduR calls `J1939Fscp_Transmit` to initiate the transmission of each SDG. After transmission of the corresponding SHM and SDM, the J1939Fscp reports the failure or success back to PduR with `PduR_J1939FscpTxConfirmation`. See also  and .

 SDG Decomposition and SHM Transmission
  Status: DRAFT
  Upstream requirements:
⌈
When `J1939Fscp_Transmit` is called, the J1939Fscp shall split the provided SDG data into the SHM parts and the SDM. The SDM data shall be stored, while the SHM shall be constructed as described in . Finally, the J1939Fscp shall call `PduR_J1939FscpTransmit` to transmit the SHM.
⌋

 SHM Composition: CAN ID
  Status: DRAFT
  Upstream requirements: ,
⌈
The J1939Fscp shall construct the SHM from the SDG data provided via `J1939Fscp_Transmit` and the CAN ID parts that are reflected in the SHM layout. The CAN ID parts shall be taken from the CanIfTxPduCfg.CanIfTxPduCanId that is referenced indirectly via the global PDU by J1939FscpSdmTxPduRef, and from the MetaDataItem of type `CAN_ID_32`, if parts of the CanIfTxPduCanId are declared as variable by a CanIfTxPduCfg.CanIfTxPduCanIdMask.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Message Reception

The PduR calls `J1939Fscp_RxIndication` to notify J1939Fscp of the reception of SHM and SDM PDUs. See also  and .

 SHM Reception
  Status: DRAFT
  Upstream requirements: , ,
⌈
When `J1939Fscp_RxIndication` is called for an SHM, the J1939Fscp shall compare the received SDG PGN against the configured SDMs. If a suitable SDM is found, the J1939Fscp shall store the SA and DA (the latter only if the PGN is of type PDU1), the CRC and the sequence number, and start the SRVT timer with J1939FscpRxSrvt.
⌋

Please refer to  section 6.1 "Safety Header Message Definition" for the layout of the SHM.

 SDM Reception
  Status: DRAFT
  Upstream requirements: ,
⌈
When `J1939Fscp_RxIndication` is called for an SDM that matches the data stored from a previous SHM reception, the J1939Fscp shall stop the SRVT timer, assemble the SDG data as described in , and call `PduR_J1939FscpRxIndication` to forward the SDG to the PduR.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 时序 Supervision
*原文标题：Timing Supervision*

J1939Fscp monitors the SRVT on transmission and reception side, the effects are described in the corresponding sections above.

 SRVT Timeout Monitoring
  Status: DRAFT
  Upstream requirements: , ,
⌈
The J1939Fscp shall use `J1939Fscp_MainFunction` that is triggered with the configured J1939FscpMainFunctionPeriod to monitor the maximum time separation (SRVT) between the SHM and SDM messages in accordance with the SAE J1939-76 specification.
⌋

### 28. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, this section specifies particular errors arranged in the respective subsections below.

### 29. Development 错误
*原文标题：Development Errors*

Definition of development errors in module J1939Fscp
  Status: DRAFT
  Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| An API was called while the module was uninitialized | J1939FSCP_E_UNINIT | 0x01 |
| J1939Fscp_Init was called twice | J1939FSCP_E_REINIT | 0x02 |
| J1939Fscp_Init was called with an invalid configuration pointer | J1939FSCP_E_INIT_FAILED | 0x03 |
| An API service was called with a NULL pointer | J1939FSCP_E_PARAM_POINTER | 0x04 |
| An API service was called with a wrong PDU ID | J1939FSCP_E_INVALID_PDU_SDU_ID | 0x05 |
| An API service was called with a wrong PDU length | J1939FSCP_E_INVALID_SIZE | 0x06 |

⌋

### 30. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module J1939Fscp
  Status: DRAFT
  Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| An SHM message was received with an unknown PGN | J1939FSCP_E_UNKNOWN_PGN | 0x01 |
| Two consecutive SDM PDUs were received with no SHM PDU in between | J1939FSCP_E_NO_SHM_RECEIVED | 0x02 |
| Two consecutive SHM PDUs were received with no SDM PDU in between | J1939FSCP_E_NO_SDM_RECEIVED | 0x03 |
| SRVT of SDG reception has timed out | J1939FSCP_E_TIMEOUT_RX_SRVT | 0x04 |
| SRVT of SDG transmission has timed out | J1939FSCP_E_TIMEOUT_TX_SRVT | 0x05 |

⌋

### 31. Production 错误
*原文标题：Production Errors*

The J1939Fscp module does not define production errors.

### 32. Extended Production 错误
*原文标题：Extended Production Errors*

The J1939Fscp module does not define extended production errors.

### 33. 安全事件
*原文标题：Security Events*

The J1939Fscp module does not report security events.

### 34. API 规范
*原文标题：API Specification*

### 35. API Parameter Checking

The J1939Fscp performs parameter checks for all called APIs. It reports the development error `J1939FSCP_E_INVALID_PDU_SDU_ID` when a check of a PDU/SDU ID fails and `J1939FSCP_E_PARAM_POINTER` when a call provides a NULL pointer.

 Invalid PDU IDs
  Status: DRAFT
  Upstream requirements:
⌈
If development error detection is enabled via J1939FscpDevErrorDetect, the J1939Fscp shall check PduIdType parameters of its API functions against the configured IDs, and shall report the development error `J1939FSCP_E_INVALID_PDU_SDU_ID` when an unknown ID is provided by the call.
⌋

`J1939FSCP_E_PARAM_POINTER` shall be reported as specified in  by .

`J1939FSCP_E_UNINIT` shall be reported as specified in  by .

### 36. Imported 类型
*原文标题：Imported Types*

In this section, all types used by the J1939Fscp are listed together with the defining module:

 Definition of imported datatypes of module J1939Fscp
  Status: DRAFT
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Comtype | ComStack_Types.h | PduIdType |
| ^ | ComStack_Types.h | PduInfoType |
| ^ | ComStack_Types.h | PduLengthType |
| Std | Std_Types.h | Std_ReturnType |

⌋

The types that are declared in `ComStack_Types`.h are defined in , while the types declared in `Std_Types`.h are defined in .

### 37. 类型定义
*原文标题：Type Definitions*

### 38. J1939Fscp_ConfigType

Definition of datatype `J1939Fscp_ConfigType`
  Status: DRAFT
⌈
| Name | J1939Fscp_ConfigType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | This is the base type for the configuration of the J1939 Functional Safety Communication Protocol. |  |

A pointer to an instance of this structure will be used in the initialization of the J1939 Functional Safety Communication Protocol.

The content of this structure is not standardized and depends on the configuration of the module. See chapter 10 Configuration.

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | J1939Fscp.h | < |

⌋

### 39. 功能定义
*原文标题：Function Definitions*

This is a list of functions provided for upper layer modules.

### 40. J1939Fscp_Init

Definition of API function `J1939Fscp_Init`
  Status: DRAFT
⌈
| Service Name | J1939Fscp_Init (draft) | < |
|---|---|---|
| Syntax | void J1939Fscp_Init ( |  |

  const `J1939Fscp_ConfigType`* configPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | configPtr | Pointer to selected configuration structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function initializes the J1939 Functional Safety Communication Protocol. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | J1939Fscp.h | < |

⌋

See  for details.

See  for parameter checks.

`J1939FSCP_E_INIT_FAILED` shall be reported as specified in  by .

### 41. J1939Fscp_DeInit

Definition of API function `J1939Fscp_DeInit`
  Status: DRAFT
⌈
| Service Name | J1939Fscp_DeInit (draft) | < |
|---|---|---|
| Syntax | void J1939Fscp_DeInit ( |  |

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
| Description | This function resets the J1939 Functional Safety Communication Protocol to the uninitialized state. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | J1939Fscp.h | < |

⌋

See  for details.

### 42. J1939Fscp_Transmit

Definition of API function `J1939Fscp_Transmit`
  Status: DRAFT
⌈
| Service Name | J1939Fscp_Transmit (draft) | < |
|---|---|---|
| Syntax | Std_ReturnType J1939Fscp_Transmit ( |  |

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
| Description | Requests transmission of a PDU. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | J1939Fscp.h | < |

⌋

See  for details.

See  for parameter checks.

 Invalid PDU length
  Status: DRAFT
  Upstream requirements: , ,
⌈
If development error detection is enabled via J1939FscpDevErrorDetect, the J1939Fscp shall check that PduInfoPtr->SduLength does not exceed 13 and matches the configured length of the SDM, and otherwise report the development error `J1939FSCP_E_INVALID_SIZE`.
⌋

### 43. J1939Fscp_RxIndication

Definition of callback function `J1939Fscp_RxIndication`
  Status: DRAFT
⌈
| Service Name | J1939Fscp_RxIndication (draft) | < |
|---|---|---|
| Syntax | void J1939Fscp_RxIndication ( |  |

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
| Description | Indication of a received PDU from a lower layer communication interface module. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | J1939Fscp.h | < |

⌋

See  for details.

See  for error handling and  for parameter checks.

### 44. J1939Fscp_TxConfirmation

Definition of callback function `J1939Fscp_TxConfirmation`
  Status: DRAFT
⌈
| Service Name | J1939Fscp_TxConfirmation (draft) | < |
|---|---|---|
| Syntax | void J1939Fscp_TxConfirmation ( |  |

  PduIdType TxPduId,
  `Std_ReturnType` result
| ) | < |  |
|---|---|---|
| Service ID | 0x40 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different PduIds. Non reentrant for the same PduId. | < |
| Parameters (in) | TxPduId | ID of the PDU that has been transmitted. |
| ^ | result | E_OK: The PDU was transmitted. E_NOT_OK: Transmission of the PDU failed. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | The lower layer communication interface module confirms the transmission of a PDU, or the failure to transmit a PDU. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | J1939Fscp.h | < |

⌋

See  for details.

See  for error handling and  for parameter checks.

### 45. Scheduled Functions

This function is directly called by the Basic Software Scheduler (SchM).

### 46. J1939Fscp_MainFunction

Definition of scheduled function `J1939Fscp_MainFunction`
  Status: DRAFT
⌈
| Service Name | J1939Fscp_MainFunction (draft) | < |
|---|---|---|
| Syntax | void J1939Fscp_MainFunction ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Description | Main function of the J1939 Functional Safety Communication Protocol. Used for scheduling purposes and timeout supervision. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | SchM_J1939Fscp.h | < |

⌋

 Main Function Period
  Status: DRAFT
  Upstream requirements:
⌈
The frequency of invocations of `J1939Fscp_MainFunction` is determined by the configuration parameter J1939FscpMainFunctionPeriod.
⌋

See  for details.

### 47. Expected 接口
*原文标题：Expected Interfaces*

In this section all interfaces required from other modules are listed.

### 48. Mandatory 接口
*原文标题：Mandatory Interfaces*

This section defines all interfaces that are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module J1939Fscp
  Status: DRAFT
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportRuntimeError | Det.h | Service to report runtime errors. If a callout has been configured then this callout shall be called. |

⌋

### 49. Optional 接口
*原文标题：Optional Interfaces*

This section defines all interfaces that are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module J1939Fscp
  Status: DRAFT
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |
| PduR_J1939FscpRxIndication | PduR_J1939Fscp.h | Indication of a received PDU from a lower layer communication interface module. |
| PduR_J1939FscpTransmit | PduR_J1939Fscp.h | Requests transmission of a PDU. |
| PduR_J1939FscpTxConfirmation | PduR_J1939Fscp.h | The lower layer communication interface module confirms the transmission of a PDU, or the failure to transmit a PDU. |

⌋

### 50. 时序图
*原文标题：Sequence Diagrams*

### 51. Message Transmission

### 52. Message Reception

### 53. Signal Group Transformation

### 54. 配置规范
*原文标题：Configuration Specification*

In general, this chapter defines configuration parameters and their clustering into containers. For general information about the definition of containers and parameters, refer to . For details about published information of the J1939Fscp, refer to .

The  specifies the structure (containers) and the parameters of the module J1939Fscp.  specifies some constraints on the configuration.

### 55. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following subsections summarize all configuration parameters of the J1939Fscp. The detailed meaning of the parameters is described in chapters  and .

Some of these containers and parameters are derived from classes and attributes of the , which also contains the rules for these derivations.

The following pictures show an overview of the configuration parameters available for J1939Fscp.

### 56. J1939Fscp

Definition of EcucModuleDef J1939Fscp
  Status: DRAFT
⌈
| Module Name | J1939Fscp |
|---|---|
| Description | The J1939 Functional Safety Communication Protocol covers the handling of SHM and SDM messages for E2E protected communication according to SAE J1939-76. |
| Supported Config Variants | VARIANT-LINK-TIME, VARIANT-POST-BUILD, VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| J1939FscpConfigSet | 1 | Configuration parameters and sub containers of the J1939Fscp module. |

Tags: atp.Status=draft
| J1939FscpGeneral | 1 | General configuration parameters of the J1939Fscp module. |
|---|---|---|

Tags: atp.Status=draft
⌋

### 57. J1939FscpGeneral

Definition of EcucParamConfContainerDef J1939FscpGeneral
  Status: DRAFT
⌈
| Container Name | J1939FscpGeneral | < | < |
|---|---|---|---|
| Parent Container | J1939Fscp | < | < |
| Upstream mapping defined | - | < | < |
| Description | General configuration parameters of the J1939Fscp module. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| J1939FscpDevErrorDetect | 1 |  |
| J1939FscpMainFunctionPeriod | 1 |  |

No Included Containers
⌋

 Definition of EcucBooleanParamDef J1939FscpDevErrorDetect
  Status: DRAFT
⌈
| Parameter Name | J1939FscpDevErrorDetect | < | < |
|---|---|---|---|
| Parent Container | J1939FscpGeneral | < | < |
| Upstream mapping defined | - | < | < |
| Description | Enables/disables the development error detection. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Multiplicity | 1 | < | < |
| Type | EcucBooleanParamDef | < | < |
| Default value | false | < | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Dependency |  | < | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 36 章（内容从略，见纯文本全文）

58. J1939FscpConfigSet
59. J1939FscpRxChannel
60. J1939FscpRxPg
61. J1939FscpSdgRxPdu
62. J1939FscpSdmRxPdu
63. J1939FscpShmRxPdu
64. J1939FscpTxChannel
65. J1939FscpTxPg
66. J1939FscpSdgTxPdu
67. J1939FscpSdmTxPdu
68. J1939FscpShmTxPdu
69. 配置 Constraints
70. 附录
71. 不适用需求
72. Change History of AUTOSAR Traceable Items
73. Traceable Item History of this Document According to AUTOSAR Release R26-11
74. Added 规范 Items in R26-11
75. Changed 规范 Items in R26-11
76. Deleted 规范 Items in R26-11
77. Added Constraints in R26-11
78. Changed Constraints in R26-11
79. Deleted Constraints in R26-11
80. Traceable Item History of this Document According to AUTOSAR Release R25-11
81. Added 规范 Items in R25-11
82. Changed 规范 Items in R25-11
83. Deleted 规范 Items in R25-11
84. Added Constraints in R25-11
85. Changed Constraints in R25-11
86. Deleted Constraints in R25-11
87. Traceable Item History of this Document According to AUTOSAR Release R24-11
88. Added 规范 Items in R24-11
89. Changed 规范 Items in R24-11
90. Deleted 规范 Items in R24-11
91. Added Constraints in R24-11
92. Changed Constraints in R24-11
93. Deleted Constraints in R24-11
