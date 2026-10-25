# Specification of a Diagnostic Communication Manager for SAE J1939 (`SAEJ1939DiagnosticCommunicationManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 610 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939DiagnosticCommunicationManager_610\AUTOSAR_CP_SWS_SAEJ1939DiagnosticCommunicationManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939DiagnosticCommunicationManager_610\AUTOSAR_CP_SWS_SAEJ1939DiagnosticCommunicationManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SAEJ1939DiagnosticCommunicationManager_610\zzgen\CP_SWS_SAEJ1939DiagnosticCommunicationManager.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module J1939 Diagnostic Communication Manager.

## 模块依赖

The  shows an overview of the neighboring modules of the J1939 Diagnostic Communication Manager.

The J1939 Diagnostic Communication Manager module (J1939Dcm) has direct interfaces and/or configuration dependencies towards the Diagnostic Event Manager (DEM), the PDU Router (PduR), the J1939 Request Manager (J1939Rm), the Basic Software Mode Manager (BswM), the ECU State Manager (EcuM), and the Default Error Tracer (DET), and also to application software components (SWC) via the AUTOSAR Runtime Environment (RTE and to Complex Drivers (CDD). Besides these, there are also indirect dependencies towards the Communication Manager (ComM), the J1939 Transport Layer (J1939Tp), and the CAN Interface (CanIf). See also .

The J1939 Diagnostic Communication Manager module includes header files of the Diagnostic Event Manager, the PDU Router, the Basic Software Mode Manager, the J1939 Request Manager, and the Default Error Tracer.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module J1939 Diagnostic Communication Manager.

### 2. 诊断 according to SAE J1939
*原文标题：Diagnostics according to SAE J1939*

SAE J1939-73 defines the message structures and behavior of so-called 'Diagnostic Messages' (DMs) which are used for diagnostic communication in SAE J1939 networks.

Beside the communication when the vehicle is being repaired, it is also used during vehicle operation to report immediate diagnostic information into the vehicle like periodically broadcasting active DTCs to the instrument cluster to communicate to the driver status of the vehicle using different lamp status.

### 3. Acronyms, Abbreviations, and Terms

### 4. 定义 of Acronyms and Abbreviations
*原文标题：Definition of Acronyms and Abbreviations*

The table below contains all acronyms, abbreviations or initialisms that are component-specific and not available in the AUTOSAR glossary .

| Abbreviation | Description |
|---|---|
| AC | SAE J1939 AddressClaimed PG (PGN = 0x0EE00), which contains the NAME and is used for the SAE J1939 address claiming, CannotClaimAddress when SA = 0xFE |
| ACK | SAE J1939 Acknowledgement PG (ACKM) with control byte set to 0, positive acknowledgement |
| ACKM | SAE J1939 Acknowledgement PG (PGN = 0x0E800) |
| BAM | Broadcast Announce Message, broadcast variant of SAE J1939 transport protocol |
| BswM | Basic Software Mode Manager, controlling modes of the whole BSW, see |
| CA | Controller Application, role of an ECU tied to one address, referred to as node in the remainder of this specification |
| CanIf | CAN Interface, abstracting from CAN drivers and transceivers, see |
| CDD | Complex Driver, any software that interfaces directly with AUTOSAR BSW modules, but is not defined by AUTOSAR, see  and |
| CMDT | Connection Mode Data Transfer, a.k.a. RTS/CTS, peer-to-peer variant of SAE J1939 transport protocol |
| ComM | Communication Manager, controlling the bus communication, see |
| DA | Destination Address, the address of the receiving CA of a PG. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 定义 of Terms
*原文标题：Definition of Terms*

The table below contains all definitions of terms that are used in this document.

| Glossary Term | Explanation |
|---|---|
| Basic Software module (BSW) | A module of the AUTOSAR stack below the RTE |
| Lamp Status | The Lamp Status contains information about the severity of active errors, transmitted as part of diagnostic messages |
| Meta Data | Meta data transferred alongside a PDU, consisting of a set of meta data items |
| Meta Data Item | A single item of meta data of defined type and size |
| Node | Synonym for the SAE J1939 CA |
| Parameter | A parameter is a signal of the SAE J1939 application layer. The Parameter definition includes defined scale, limits, offset, and physical unit. Parameters are uniquely identified by the SPN. |
| Parameter Group | A Parameter Group is a message of the SAE J1939 application layer. Each Parameter Group contains several Parameters (signals), and is uniquely identified by the PGN. |
| Parameter Group Number | Unique identifier (18 bits: EDP, DP, PDUF, PDUS) of an SAE J1939 Parameter Group that is contained in the payload of many SAE J1939 protocol messages and in the 29bit CAN identifier of SAE J1939 PGs. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 相关文档
*原文标题：Related Documentation*

### 7. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 8. 相关规范
*原文标题：Related Specifications*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for SAE J1939 Diagnostic Communication Manager.

Thus, the specification  shall be considered as additional and required specification for SAE J1939 Diagnostic Communication Manager.

### 9. 约束与假设
*原文标题：Constraints and Assumptions*

### 10. 限制
*原文标题：Limitations*

The J1939 Diagnostic Communication Manager implements only the subset of 'Diagnostic Messages' defined in .

The DM13 does not support "Suspend Signal" and "Suspend Duration".

NACK is not provided for received DMx messages that are not supported or not configured. This restriction mainly affects handling of DM07 and DM13.

### 11. Applicability to Automotive Domains

J1939 is developed by the SAE as a standard for heavy duty on-highway, farming, and construction vehicles. It is not applicable to passenger cars or light trucks. The J1939 Diagnostic Communication Manager will mainly be used in heavy duty on-highway vehicles.

### 12. 对其他模块的依赖
*原文标题：Dependencies to Other Modules*

The  shows an overview of the neighboring modules of the J1939 Diagnostic Communication Manager.

The J1939 Diagnostic Communication Manager module (J1939Dcm) has direct interfaces and/or configuration dependencies towards the Diagnostic Event Manager (DEM), the PDU Router (PduR), the J1939 Request Manager (J1939Rm), the Basic Software Mode Manager (BswM), the ECU State Manager (EcuM), and the Default Error Tracer (DET), and also to application software components (SWC) via the AUTOSAR Runtime Environment (RTE and to Complex Drivers (CDD). Besides these, there are also indirect dependencies towards the Communication Manager (ComM), the J1939 Transport Layer (J1939Tp), and the CAN Interface (CanIf). See also .

The J1939 Diagnostic Communication Manager module includes header files of the Diagnostic Event Manager, the PDU Router, the Basic Software Mode Manager, the J1939 Request Manager, and the Default Error Tracer.

### 13. 文件结构
*原文标题：File Structure*

### 14. 代码文件结构
*原文标题：Code File Structure*

For details, refer to the subsection 5.1.6 "Code file structure" of the .

### 15. 头文件结构
*原文标题：Header File Structure*

For details, refer to the subsection 5.1.7 "Header file structure" of the .

### 16. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  (Requirements on Diagnostics) and  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| The DEM module shall support DTCs according to SAE J1939 |  |  |
| Support a set of SAE J1939 DM-messages |  |  |
| Support for unsupported SAE J1939 DM-messages |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |

### 17. 功能规范
*原文标题：Functional Specification*

This chapter defines the behavior of the J1939 Diagnostic Communication Manager. The API of the module is defined in , while the configuration is defined in .

### 18. 概述
*原文标题：Overview*

The J1939 Diagnostic Communication Manager is responsible to process the diagnostic request messages and the sending of the appropriate response ACKM PGs.

### 19. Supported 诊断 Messages
*原文标题：Supported Diagnostic Messages*

Upstream requirements:
⌈
The J1939 Diagnostic Communication Manager shall support the diagnostic messages (DMx) shown in .
⌋

 Supported DMx Messages
  Upstream requirements:
⌈
| Name | PGN (Hexadecimal) | Size | Received | Transmitted | Description |
|---|---|---|---|---|---|
| DM01 | FECA | Var. | - | Cyclic 1s | Active Diagnostic Trouble Codes |
| DM02 | FECB | Var. | - | On Request | Previously Active Diagnostic Trouble Codes |
| DM03 | FECC | - | - | On Request | Diagnostic Data Clear/Reset for Previously Active DTCs |
| DM04 | FECD | Var. | - | On Request | Freeze Frame Parameters |
| DM05 | FECE | 8 | - | On Request | Diagnostic Readiness 1 |
| DM06 | FECF | Var. | - | On Request | Emission Related Pending DTCs |
| DM11 | FED3 | - | - | On Request | Diagnostic Data Clear/Reset for Active DTCs |
| DM12 | FED4 | Var. | - | On Request | Emissions Related Active DTCs |
| DM13 | DF00 | 8 | X | - | Stop Start Broadcast |
| DM19 | D300 | Var. | - | On Request | Calibration Information |
| DM20 | C200 | Var. | - | On Request | Monitor Performance Ratio SAE J1939-73 Revised SEP2006 |
| DM21 | C100 | 8 | - | On Request | Diagnostic Readiness 2 |
| DM23 | FDB5 | Var. | - | On Request | Previously Active Emission Related Faults |
| DM24 | FDB6 | Var. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 模块处理
*原文标题：Module Handling*

This section contains description of auxiliary functionality of the J1939 Diagnostic Communication Manager.

### 21. 初始化
*原文标题：Initialization*

The J1939 Diagnostic Communication Manager is initialized via `J1939Dcm_Init`, and de-initialized via `J1939Dcm_DeInit`. Except for `J1939Dcm_Init`, the API functions of the J1939 Diagnostic Communication Manager may only be called when the module has been properly initialized.

⌈
A call to `J1939Dcm_Init` initializes all internal variables and sets the J1939 Diagnostic Communication Manager to the initialized state.
⌋

⌈
A call to `J1939Dcm_DeInit` sets the J1939 Diagnostic Communication Manager back to the uninitialized state.
⌋

  Upstream requirements:
⌈
When `J1939Dcm_Init` is called in initialized state, the J1939 Diagnostic Communication Manager shall not re-initialize its internal variables. It shall instead call `Det_ReportError` with the error code `J1939DCM_E_REINIT` if DET reporting is enabled (see J1939DcmDevErrorDetect).
⌋

### 22. 错误处理
*原文标题：Error Handling*

Upstream requirements:
⌈
On errors and exceptions, the J1939Dcm module shall not modify its current module state but shall simply report the error event.
⌋

### 23. Message Processing

### 24. Reception of Requests

The J1939 Diagnostic Communication Manager receives most requests for the DMx PGs via `J1939Dcm_RequestIndication` from the J1939 Request Manager. Exceptions are the command messages (marked in "received" column in ).

⌈
The configured DMx messages in J1939Dcm shall match the J1939RmUserRequestPGN configured for a J1939RmDcmUser in J1939Rm.
⌋

  Upstream requirements:
⌈
If the configuration parameter J1939DcmDevErrorDetect is enabled, the function `J1939Dcm_RequestIndication` shall check if the requestedPgn parameter addresses a configured DMx message (J1939DcmDiagnosticMessageSupport and the corresponding PGN could be found in  in table column "PGN (Hexadecimal)"). In case of an error, the function `J1939Dcm_RequestIndication` shall return without any effect and shall report the error to the Default Error Tracer with the error code `J1939DCM_E_INVALID_PGN`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Failed Message Transmission

Upstream requirements:
⌈
When `PduR_J1939DcmTransmit` returns anything but E_OK, or when `J1939Dcm_TpTxConfirmation` or `J1939Dcm_TxConfirmation` reports E_NOT_OK, the J1939Dcm shall retry the failed transmission from the next main function up to J1939DcmMaxTransmitRetries times.
⌋

### 26. Termination of Message

⌈
For messages sent via TP ("Size" in the table in  is "variable"), the transmission is terminated when `J1939Dcm_TpTxConfirmation` is called after transmission of a requested message which has been accepted and processed according to , the J1939 Diagnostic Communication Manager shall then release the buffer of .
⌋

⌈
For messages sent via IF ("Size" in the table in  is 8), the transmission is terminated when `J1939Dcm_TxConfirmation` is called after transmission of a requested message which has been accepted and processed according to . The J1939 Diagnostic Communication Manager shall then release the buffer of .
⌋

### 27. Meta 数据的处理
*原文标题：Handling of Meta Data*

⌈
Meta data items of type `CAN_ID_32` contain the source address in the fourth (least significant) byte.
⌋

⌈
Meta data items of type `CAN_ID_32` contain the destination address in the third byte.
⌋

⌈
Meta data items of type `CAN_ID_32` contain the priority in the bits 2-4 of the first (most significant) byte, where bit 0 is the least significant bit of a byte.
⌋

### 28. Communication 状态处理
*原文标题：Communication State Handling*

In general, diagnostics is only active and available when the ECU is set to to online by J1939Nm. The J1939 Diagnostic Communication Manager provides an API that is used by the BSW Mode Manager (BswM) to notify the J1939 communication state.

⌈
During initialization via `J1939Dcm_Init`, the J1939 Diagnostic Communication Manager assumes the offline state.
⌋

⌈
A call to `J1939Dcm_SetState` sets the J1939 Diagnostic Communication Manager to online or offline state.
⌋

⌈
In the offline state, the J1939 Diagnostic Communication Manager shall not progress any periodic messages.
⌋

Note: The J1939Rm does not forward any request message to J1939Dcm when it assumes `J1939RM_STATE_OFFLINE`.

### 29. 模式 Dependent Request Execution
*原文标题：Mode Dependent Request Execution*

The execution of a request can be limited depending on mode condition. This enables the J1939Dcm to formalize environmental checks.

⌈
The J1939DcmModeRule shall evaluate all referenced J1939DcmModeConditions and/or nested J1939DcmModeRules either by a logical AND in case J1939DcmLogicalOperator is set to `J1939DCM_AND` or by a logical OR in case the J1939DcmLogicalOperator is set to `J1939DCM_OR`. In case only a single J1939DcmModeCondition or J1939DcmModeRule is referenced, the J1939DcmLogicalOperator shall not be present and therefore not be used.
⌋

⌈
J1939DcmModeCondition shall have either a J1939DcmBswModeRef or a J1939DcmSwcModeRef or a J1939DcmSwcSRDataElementRef as external reference.
⌋

⌈
The J1939DcmSwcModeRef and J1939DcmBswModeRef of J1939DcmModeConditions shall evaluate if the referenced Mode-Declaration is set in case of J1939DcmConditionType is set to `J1939DCM_EQUALS` or is not set in case of J1939DcmConditionType is set to `J1939DCM_EQUALS_NOT`.
⌋

⌈
The J1939DcmSwcSRDataElementRef of J1939DcmModeCondition shall be evaluated if the referenced data element (by J1939DcmDspExternalSRDataElementClass)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. J1939Dcm - DEM Interaction

Many diagnostic messages report DTC information from Diagnostic Event Manager. Most of these messages are structured identically, wherefore the same API sequences are used.

⌈
The J1939Dcm shall ensure that access to the DEM is strictly serialized, i.e. that only one DEM sequence is executed in parallel.
⌋

Note: This is implicitly achieved by locking the global buffer (see ) for all diagnostic messages apart from DM01, DM03, DM11, and DM35. Thus, the implementation must take care that DM01, DM03, DM11, and DM35 execution does not start while the global buffer is locked, and vice versa.

### 31. DTC Status

Filter Criteria for Diagnostic Messages
⌈
| Diagnostic message | < | Dem_J1939DcmSetDTCFilter Parameters | < | < |
|---|---|---|---|---|
| ^ | ^ | DTCStatusFilter | DTCKind | DTCOrigin |
| DM01 | Active Diagnostic Trouble Codes | DEM_J1939DTC_ACTIVE | DEM_DTC_KIND_ALL_DTCS | DEM_DTC_ORIGIN_PRIMARY_MEMORY |
| DM02 | Previously Active Diagnostic Trouble Codes | DEM_J1939DTC_PREVIOUSLY_ACTIVE | DEM_DTC_KIND_ALL_DTCS | DEM_DTC_ORIGIN_PRIMARY_MEMORY |
| DM06 | Emission Related Pending DTCs | DEM_J1939DTC_PENDING | DEM_DTC_KIND_EMISSION_REL_DTCS | DEM_DTC_ORIGIN_PRIMARY_MEMORY |
| DM12 | Emissions Related Active DTCs | DEM_J1939DTC_ACTIVE | DEM_DTC_KIND_EMISSION_REL_DTCS | DEM_DTC_ORIGIN_PRIMARY_MEMORY |
| DM23 | Previously Active Emission Related Faults | DEM_J1939DTC_PREVIOUSLY_ACTIVE | DEM_DTC_KIND_EMISSION_REL_DTCS | DEM_DTC_ORIGIN_PRIMARY_MEMORY |
| DM28 | Permanent DTCs | DEM_J1939DTC_PERMANENT | DEM_DTC_KIND_EMISSION_REL_DTCS | DEM_DTC_ORIGIN_PRIMARY_MEMORY |
| DM35 | Immediate Fault Status | DEM_J1939DTC_CURRENTLY_ACTIVE | DEM_DTC_KIND_ALL_DTCS | DEM_DTC_ORIGIN_PRIMARY_MEMORY |
| DM41 | DTCs - A, Pending | DEM_J1939DTC_PENDING | DEM_DTC_KIND_WWHOBD_CLASS_A | DEM_DTC_ORIGIN_PRIMARY_MEMORY |
| DM42 | DTCs - A, Confirmed and Active | DEM_J1939DTC_AC |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. FreezeFrame

⌈
On start of FreezeFrame sequence, the J1939 Diagnostic Communication Manager shall call the `Dem_J1939DcmSetFreezeFrameFilter` with the parameter FreezeFrameKind defined by the DMx message that triggered the sequence, as well as the assigned ClientId of the requested node.
⌋

⌈
In case the `Dem_J1939DcmSetFreezeFrameFilter` returns E_NOT_OK, the J1939 Diagnostic Communication Manager shall call `J1939Rm_SendAck` with parameter ackCode set to `J1939RM_ACK_NEGATIVE` to send a negative acknowledgement (NACK) (considering ).
⌋

### 33. FreezeFrameKind equals DEM_J1939DCM_FREEZEFRAME or DEM_J1939DCM_EXPANDED_FREEZEFRAME

This FreezeFrameKind is used by DM04 and DM25.

⌈
In case the `Dem_J1939DcmSetFreezeFrameFilter` returns E_OK and the FreezeFrameKind is set to `DEM_J1939DCM_FREEZEFRAME` or `DEM_J1939DCM_EXPANDED_FREEZEFRAME`, the J1939 Diagnostic Communication Manager shall continue the sequence by subsequent calling the `Dem_J1939DcmGetNextFreezeFrame`, till the returned value is `DEM_NO_SUCH_ELEMENT`.

The calls may spread over several calls of `J1939Dcm_MainFunction`.
⌋

⌈
If the returned value is E_OK and the FreezeFrameKind is set to `DEM_J1939DCM_FREEZEFRAME` or `DEM_J1939DCM_EXPANDED_FREEZEFRAME`, the parameters BufSize, DestBuffer, J1939DTC and OccurenceCounter shall be encoded into the response message layout according to SAE J1939-73.
⌋

⌈
The J1939 Diagnostic Communication Manager shall continue the sequence by subsequent calling the `Dem_J1939DcmGetNextFreezeFrame`, except the maximum sequence counter threshold per MainFunction is reached (see J1939DcmMaxFreezeFramesPerMainFunction) or the returned value is `DEM_PENDING`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. FreezeFrameKind equals DEM_J1939DCM_SPNS_IN_EXPANDED_FREEZEFRAME

This FreezeFrameKind is used by DM24.

⌈
In case the `Dem_J1939DcmSetFreezeFrameFilter` returns E_OK and the FreezeFrameKind is set to `DEM_J1939DCM_SPNS_IN_EXPANDED_FREEZEFRAME`, the J1939 Diagnostic Communication Manager shall continue the sequence by subsequent calling the `Dem_J1939DcmGetNextSPNInFreezeFrame`, till the returned value is `DEM_NO_SUCH_ELEMENT`.

The calls may spread over several calls of `J1939Dcm_MainFunction`.
⌋

⌈
If the returned value is E_OK and the FreezeFrameKind is set to `DEM_J1939DCM_SPNS_IN_EXPANDED_FREEZEFRAME`, the parameter SPNSupported and SPNDataLength shall be encoded into the response message layout according to SAE J1939-73 and the bit 1 "Supported in Expanded Freeze Frame" in "SPN support type" shall be set to 0.
⌋

⌈
In addition to  the bit 2 "Supported in Data Stream" in "SPN support type" shall be set to 0 in case the SPN is also contained in the list of configuration parameters J1939DcmSPNsInDataStream.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Ratio

⌈
On start of Ratio sequence, the J1939 Diagnostic Communication Manager shall call the `Dem_J1939DcmSetRatioFilter` with the assigned ClientId of the requested node.
⌋

⌈
In case the `Dem_J1939DcmSetRatioFilter` returns E_OK, the values in parameter IgnitionCycleCounter and OBDMonitoringConditionsEncountered shall be encoded into the response message layout according to SAE J1939-73.
⌋

⌈
In case the `Dem_J1939DcmSetRatioFilter` returns E_NOT_OK, the J1939 Diagnostic Communication Manager shall call `J1939Rm_SendAck` with parameter ackCode set to `J1939RM_ACK_NEGATIVE` to send a negative acknowledgement (NACK) (considering ).
⌋

⌈
The J1939 Diagnostic Communication Manager shall continue the sequence by subsequent calling the `Dem_J1939DcmGetNextFilteredRatio`, till the returned value is `DEM_NO_SUCH_ELEMENT`.

The calls may spread over several calls of `J1939Dcm_MainFunction`.
⌋

⌈
If the returned value is E_OK, the parameters SPN, Numerator, and Denominator shall be copied to the response message defined by the DMx message that triggered the sequence.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. 服务 Only DTCs
*原文标题：Service Only DTCs*

J1939 has the concept of "Service only DTCs". These DTCs are considered to be stored in any of the user defined fault memories of the DEM (`Dem_DTCOriginType` with `DEM_DTC_ORIGIN_USERDEFINED_MEMORY_`<Name>). All other DTCs are considered to be stored in the primary fault memory (`Dem_DTCOriginType` with `DEM_DTC_ORIGIN_PRIMARY_MEMORY`).

  Upstream requirements:
⌈
While processing DM53, DM54, or DM55, the J1939Dcm shall call the DEM APIs `Dem_J1939DcmClearDTC` and `Dem_J1939DcmSetDTCFilter` with the `Dem_DTCOriginType` corresponding to the DemUserDefinedMemory referenced by J1939DcmServiceOnlyDTCsMemoryDestinationRef.
⌋

J1939Dcm/DEM interaction in the J1939Dcm:

⌈
The J1939DcmServiceOnlyDTCsMemoryDestinationRef shall reference an event memory assigned to the DemEventMemorySet of the current J1939DcmDemClientRef.
⌋

### 37. 诊断 Messages
*原文标题：Diagnostic Messages*

### 38. Active 诊断 Trouble Codes (DM01)
*原文标题：Active Diagnostic Trouble Codes (DM01)*

The DM01 is used to broadcast periodically and on change the active DTCs and the summarized lamp status of this ECU.

⌈
On reception of request for DM01 (call of `J1939Dcm_RequestIndication` with parameter requestedPgn set according to table column "PGN (Hexadecimal)" in ), the J1939 Diagnostic Communication Manager shall lock the dedicated DM01 buffer (see ) and use the common "DTC status" sequence with the parameters DTCStatusFilter and DTCKind set according to the corresponding table columns in .
⌋

The common "DTC status" sequence is described in .

### 39. Periodic Collection and Transmission of the DM01 Message

⌈
The J1939 Diagnostic Communication Manager shall lock the dedicated DM01 buffer (see ), collect all active DTCs and the lamp status in this buffer according to SAE J1939-73, and transmit the DM01 message with a period of 1\,s as defined by , , , and .
⌋

⌈
The J1939Dcm shall provide a buffer in size of J1939DcmDM01BufferSize for the parallel DM01 processing to support .
⌋

⌈
When DEM calls `J1939Dcm_DemTriggerOnDTCStatus`, the DM01 message shall be transmitted (additionally to the regular periodic transmission) for the corresponding J1939DcmNmNodeRef of the reported ClientId for all configured channels, except `J1939Dcm_DemTriggerOnDTCStatus` for the same DTC is triggered more than once per second. The separate DM01 buffer (see ) shall be used.
⌋

Note: The exception prevents a too high busload.

⌈
The DM01 shall use for all configured DM01 messages (J1939DcmDmxSupport == `J1939DCM_DM01_SUPPORT`) on all nodes (J1939DcmNode) and on all channels (J1939DcmDiagnosticMessageSupportChannelRef) the common "DTC status" sequence with the parameters DTCStatusFilter and DTCKind set according to the corresponding table columns in .
⌋

The common "DTC status" sequence is described in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Previously Active 诊断 Trouble Codes (DM02)
*原文标题：Previously Active Diagnostic Trouble Codes (DM02)*

The DM02 message reports previously active DTCs.

⌈
On reception of request for DM02 (call of `J1939Dcm_RequestIndication` with parameter requestedPgn set according to table column "PGN (Hexadecimal)" in ) the J1939 Diagnostic Communication Manager shall use the common "DTC status" sequence with the parameters DTCStatusFilter and DTCKind set according to the corresponding table columns in .
⌋

The common "DTC status" sequence is described in .

⌈
The return values J1939DTC and OccurenceCounter shall be encoded into the DM02 layout according to SAE J1939-73.
⌋

### 41. 诊断数据 Clear/Reset for Previously Active DTCs (DM03)
*原文标题：Diagnostic Data Clear/Reset for Previously Active DTCs (DM03)*

The DM03 message clears previously active DTCs.

⌈
On reception of request for DM03 (call of `J1939Dcm_RequestIndication` with parameter requestedPgn set according to table column "PGN (Hexadecimal)" in ) the J1939 Diagnostic Communication Manager shall trigger `Dem_J1939DcmClearDTC` with parameter DTCTypeFilter set to `DEM_J1939DTC_CLEAR_PREVIOUSLY_ACTIVE`.
⌋

⌈
If the return value of the function `Dem_J1939DcmClearDTC` is `DEM_PENDING`, the J1939 Diagnostic Communication Manager shall retrigger `Dem_J1939DcmClearDTC` (with parameter DTCTypeFilter set to `DEM_J1939DTC_CLEAR_PREVIOUSLY_ACTIVE`) in the next call of `J1939Dcm_MainFunction`.
⌋

⌈
If the return value of the function `Dem_J1939DcmClearDTC` is E_OK, the J1939 Diagnostic Communication Manager shall send a positive acknowledgement (ACK) by `J1939Rm_SendAck` with parameter ackCode set to `J1939RM_ACK_POSITIVE`.
⌋

⌈
If return value `Std_ReturnType` is other than E_OK or `DEM_PENDING`, the J1939 Diagnostic Communication Manager shall send a negative acknowledgement (NACK) by `J1939Rm_SendAck` with parameter ackCode set to `J1939RM_ACK_NEGATIVE`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Freeze Frame Parameters (DM04)

The DM04 message reports the stored FreezeFrame(s).

⌈
On reception of request for DM04 (call of `J1939Dcm_RequestIndication` with parameter requestedPgn set according to table column "PGN (Hexadecimal)" in ) the J1939 Diagnostic Communication Manager shall use the common "FreezeFrame" sequence with the parameter FreezeFrameKind set to `DEM_J1939DCM_FREEZEFRAME`.
⌋

The common "FreezeFrame" sequence is described in .

### 43. 诊断 Readiness 1 (DM05)
*原文标题：Diagnostic Readiness 1 (DM05)*

The DM05 message reports the diagnostic readiness.

⌈
On reception of request for DM05 (call of `J1939Dcm_RequestIndication` with parameter requestedPgn set according to table column "PGN (Hexadecimal)" in ) the J1939 Diagnostic Communication Manager shall call `Dem_J1939DcmReadDiagnosticReadiness1` with the assigned ClientId of the requested node latest on next `J1939Dcm_MainFunction`.
⌋

⌈
If the return value of `Dem_J1939DcmReadDiagnosticReadiness1` is E_OK, the return parameter DataValue shall be encoded into the DM05 layout according to SAE J1939-73.

Afterwards `PduR_J1939DcmTransmit` with the PduId of the requested message shall be called with the destination address (via meta data) set according to the source address of the request, or to 0xFF when the destination address of the request was 0xFF.
⌋

⌈
If the return value of `Dem_J1939DcmReadDiagnosticReadiness1` is unequal E_OK, the J1939 Diagnostic Communication Manager shall call `J1939Rm_SendAck` with parameter ackCode set to `J1939RM_ACK_NEGATIVE` to send a negative acknowledgement (NACK) (considering ).
⌋

### 44. Emission Related Pending DTCs (DM06)

The DM06 message reports OBD-relevant pending DTCs.

⌈
On reception of request for DM06 (call of `J1939Dcm_RequestIndication` with parameter requestedPgn set according to table column "PGN (Hexadecimal)" in ) the J1939 Diagnostic Communication Manager shall use the common "DTC status" sequence with the parameters DTCStatusFilter and DTCKind set according to the corresponding table columns in .
⌋

The common "DTC status" sequence is described in .

⌈
The return values J1939DTC and OccurenceCounter shall be encoded into the DM06 layout according to SAE J1939-73.
⌋

### 45. 诊断数据 Clear/Reset for Active DTCs (DM11)
*原文标题：Diagnostic Data Clear/Reset for Active DTCs (DM11)*

The DM11 message should at least clear all applicable diagnostic data pertaining to active DTCs (further affected diagnostic data refer SAE J1939-73).

  Upstream requirements:
⌈
On reception of request for DM11 (call of `J1939Dcm_RequestIndication` with parameter requestedPgn set according to table column "PGN (Hexadecimal)" in ) the J1939 Diagnostic Communication Manager shall trigger `Dem_J1939DcmClearDTC` with parameter DTCTypeFilter set to `DEM_J1939DTC_CLEAR_ACTIVE`.
⌋

  Upstream requirements:
⌈
If return value of the function `Dem_J1939DcmClearDTC` is `DEM_PENDING`, the J1939 Diagnostic Communication Manager shall retrigger `Dem_J1939DcmClearDTC` (with parameter DTCTypeFilter set to `DEM_J1939DTC_CLEAR_ACTIVE`) in the next call of `J1939Dcm_MainFunction`.
⌋

⌈
If the return value of the function `Dem_J1939DcmClearDTC` is E_OK, the J1939 Diagnostic Communication Manager shall send a positive acknowledgement (ACK) by `J1939Rm_SendAck` with parameter ackCode set to `J1939RM_ACK_POSITIVE`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Emissions Related Active DTCs (DM12)

The DM12 message reports OBD-relevant active DTCs.

⌈
On reception of request for DM12 (call of `J1939Dcm_RequestIndication` with parameter requestedPgn set according to table column "PGN (Hexadecimal)" in ) the J1939 Diagnostic Communication Manager shall use the common "DTC status" sequence with the parameters DTCStatusFilter and DTCKind set according to the corresponding table columns in .
⌋

The common "DTC status" sequence is described in .

⌈
The return values J1939DTC and OccurenceCounter shall be encoded into the DM12 layout according to SAE J1939-73.
⌋

### 47. Stop Start Broadcast (DM13)

The DM13 message stops and starts the broadcast of messages to certain networks.

The following networks are available:

* J1587
* J1922
* J1939 Network #1, Primary vehicle network
* J1939 Network #2
* ISO 9141
* J1850
* Other, Manufacture Specified Port
* SAE J1939 Network #3
* Proprietary Network #1
* Proprietary Network #2
* J1939 Network #4

See also J1939DcmBusType.

⌈
The J1939Dcm shall maintain the broadcast status information of the DM13 command message. The initial value of the broadcast status information is the normal broadcasting mode for all networks.
⌋

⌈
On reception of DM13 command message via call of `J1939Dcm_RxIndication` with parameter RxPduId set to the configured J1939DcmRxPduId and the hold signal set to signal not available, the J1939 Diagnostic Communication Manager shall start timeout supervision and call `BswM_J1939DcmBroadcastStatus` with the updated broadcast status information; see also , , , and .
⌋

⌈
For network "Current Data Link", the corresponding ComMChannelId of received DM13 command message determines the network bit reported to BswM.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 109 章（内容从略，见纯文本全文）

48. Calibration Information (DM19)
49. Monitor Performance Ratio (DM20)
50. 诊断 Readiness 2 (DM21)
51. Previously Active Emission Related Faults (DM23)
52. SPN 支持 (DM24)
53. Expanded Freeze Frame (DM25)
54. 诊断 Readiness 3 (DM26)
55. Permanent DTCs (DM28)
56. Regulated DTC Counts (DM29)
57. DTC to Lamp Association (DM31)
58. Immediate Fault Status (DM35)
59. Harmonized Failure Classification DTC Reporting (DM41 - DM52)
60. Active 服务 Only DTCs (DM53)
61. Previously Active 服务 Only DTCs (DM54)
62. 诊断数据 Clear/Reset for all 服务 Only DTCs (DM55)
63. 错误分类
64. Development 错误
65. Runtime 错误
66. Production 错误
67. Extended Production 错误
68. API 规范
69. Imported 类型
70. 类型定义
71. J1939Dcm_ConfigType
72. J1939Dcm_StateType
73. 功能定义
74. J1939Dcm_Init
75. J1939Dcm_DeInit
76. J1939Dcm_SetState
77. J1939Dcm_GenericDMxTransmit
78. Callback 通知
79. J1939Dcm_RequestIndication
80. J1939Dcm_RxIndication
81. J1939Dcm_TxConfirmation
82. J1939Dcm_StartOfReception
83. J1939Dcm_CopyRxData
84. J1939Dcm_TpRxIndication
85. J1939Dcm_CopyTxData
86. J1939Dcm_TpTxConfirmation
87. Callback 通知 from DEM
88. J1939Dcm_DemTriggerOnDTCStatus
89. Scheduled Functions
90. J1939Dcm_MainFunction
91. Expected 接口
92. Mandatory 接口
93. Optional 接口
94. Configurable 接口
95. <GenericDMxRequestIndication>
96. <GenericDMxCopyTxData>
97. <GenericDMxTxConfirmation>
98. <GenericDMxStartOfReception>
99. <GenericDMxCopyRxData>
100. <GenericDMxRxIndication>
101. 服务接口
102. Implementation 数据类型
103. CalibrationIDArrayType
104. Client-Server-Interfaces
105. J1939Dcm_CalibrationInformation
106. Sender-Receiver-Interfaces
107. DataCondition
108. Ports
109. J1939Dcm_CalibrationInformation
110. DataCondition
111. ModeCondition
112. 时序图
113. 配置规范
114. Containers and 配置 Parameters
115. J1939Dcm
116. J1939DcmGeneral
117. J1939DcmConfigSet
118. J1939DcmChannel
119. J1939DcmNode
120. J1939DcmDiagnosticMessageSupport
121. J1939DcmRxPdu
122. J1939DcmTxPdu
123. J1939DcmProcessingConditions
124. J1939DcmModeRule
125. J1939DcmModeCondition
126. J1939DcmSwcSRDataElementValue
127. J1939DcmSwcSRDataElementPrimitive
128. J1939DcmSwcSRDataElementArray
129. J1939DcmSwcSRDataElementArrayElement
130. J1939DcmDspExternalSRDataElementClass
131. J1939DcmDataElementInstance
132. J1939DcmSubElementInDataElementInstance
133. 附录
134. 不适用需求
135. Change History of AUTOSAR Traceable Items
136. Traceable Item History of this Document According to AUTOSAR Release R26-11
137. Added 规范 Items in R26-11
138. Changed 规范 Items in R26-11
139. Deleted 规范 Items in R26-11
140. Added Constraints in R26-11
141. Changed Constraints in R26-11
142. Deleted Constraints in R26-11
143. Traceable Item History of this Document According to AUTOSAR Release R25-11
144. Added 规范 Items in R25-11
145. Changed 规范 Items in R25-11
146. Deleted 规范 Items in R25-11
147. Added Constraints in R25-11
148. Changed Constraints in R25-11
149. Deleted Constraints in R25-11
150. Traceable Item History of this Document According to AUTOSAR Release R24-11
151. Added 规范 Items in R24-11
152. Changed 规范 Items in R24-11
153. Deleted 规范 Items in R24-11
154. Added Constraints in R24-11
155. Changed Constraints in R24-11
156. Deleted Constraints in R24-11
