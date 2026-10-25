# Specification of VDP Communication Module Remote (`VDPCMRemote`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1139 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_VDPCMRemote_1139\AUTOSAR_CP_SWS_VDPCMRemote.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_VDPCMRemote_1139\AUTOSAR_CP_SWS_VDPCMRemote.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_VDPCMRemote_1139\zzgen\CP_SWS_VDPCMRemote.complete.txt`

## 文档简介

This specification describes the functionality, the API and the configuration for the AUTOSAR Basic Software module VDP-CM Remote.].

The VDP-CM Remote implements the remote ECU side of the Vehicle Data Protocol (VDP) as specified in .

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

There are no limitations.

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, the API and the configuration for the AUTOSAR Basic Software module VDP-CM Remote.].

The VDP-CM Remote implements the remote ECU side of the Vehicle Data Protocol (VDP) as specified in .

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the VDP-CM Remote module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| CM | Communication Module |
| DCA | Data Class Adapter |
| DP | Data point |
| VDP | Vehicle Data Protocol |
| VdpCmR | Technical name of the module VDP-CM Remote |

### 4. 定义 of terms
*原文标题：Definition of terms*

| Terms: | Description: |
|---|---|
| Data point | A data point refers to a data resource inside the vehicle with a well-defined semantic that can be collected (e.g. vehicle speed). |
| Data point sample | A data point sample refers to the value of a data point acquired at a specific point in time (e.g. vehicle speed at 12 am). |
| DCA Remote | A DCA Remote refers to a Data Class Adapter Remote. The Data Class Adapter Remotes are directly connected to a CM Remote and can directly access data points on the other side. They can be realized e.g. by integrator code, AUTOSAR Complex Device Drivers or a specific SWC. |
| VDP Slot ID | The VDP Slot ID refers to a dynamically associated ID to an abstract data point during the lifetime of a data collection task. The dynamic association is part of the protocol VDP and is established using the add dynamic configuration command. |

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for VDP-CM Remote.

Furthermore, since the VDP-CM Remote implements VDP, the specifications  and  are valid for the VDP-CM Remote.

Thus, the previously mentioned specifications shall be considered as additional and required specification for VDP-CM Remote.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

None

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

See introduction

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 12. PduR

In order to receive and transmit VDP messages on the communication bus, the VDP-CM Remote module interacts with the PDU Router .

### 13. StbM

In order to get a synchronized time value (Local Time Base derived from Global Time Base), the StbM module  is used.

### 14. NvM

In order to load and store dynamic configurations, the NvM module  can optionally be used.

### 15. Det

In order to be able to report development errors and to forward this information through DET to the communication bus, the VDP-CM Remote module interacts with the DET module . However, the interaction with DET is optional.

### 16. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| Multi-Version Support |  |  |
| VDP Dynamic Configuration of Data Points |  |  |
| VDP Different Modes for Data Sampling |  |  |
| VDP Different Modes for Data Transmission |  |  |
| Detection of Missing Data on the Central ECU |  |  |
| VDP Temporary Interruption of Data Sampling |  |  |
| VDP Efficient Representation of Meta Data |  |  |
| VDP Error Handling |  |  |
| VDP Control Sequence Enforcement |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support link-time configuration |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named accordi |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 功能规范
*原文标题：Functional specification*

### 18. 初始化
*原文标题：Initialization*

Initialization
  Upstream requirements:
⌈
A call to `VdpCmR_Init` initializes all internal variables and sets the VdpCmR module to the initialized state.
⌋

### 19. Communication with PduR

Communication configuration
  Upstream requirements: ,
⌈
The VdpCmR shall use the content of VdpCmRCsl to configure its communication and security layer.
⌋

 Unsecure and secure PDU reception
  Upstream requirements: ,
⌈
The VdpCmR shall receive PDUs that are transmitted unsecured (mandatory) as well as secured (optional, defined project specific).
⌋

 Rx PDU configuration
  Upstream requirements: ,
⌈
The VdpCmR shall use the general purpose PDU defined by container VdpCmRCslRxPdu for reception from the PduR.
⌋

In case of secured transmission are the PDUs already processed by SecOC and only the unsecured PDU part is passed from the PduR to VdpCmR. So the VdpCmR does not see any difference between secured and unsecured PDUs at reception.

 Unsecure and secure PDU transmission
  Upstream requirements: ,
⌈
The VdpCmR shall be able to transmit PDUs unsecured (mandatory) as well as secured (optional, defined project specific).
⌋

 Unsecured Tx PDU configuration
  Upstream requirements: ,
⌈
The VdpCmR shall use the general purpose PDU defined by the mandatory container VdpCmRCslTxPdu for transmitting unsecured PDUs using the PduR.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Processing of VDP Messages

The VdpCmR module receives VDP messages from the PduR via the Rx Data Path. These messages control VdpCmR as well as the connected DCA Remotes (realized as separate CDD in AUTOSAR).

 Incoming Messages
  Upstream requirements: ,
⌈
The VdpCmR shall provide the functionality to receive VDP messages from one other ECU via the PduR module.
⌋

 Receive buffer
  Upstream requirements: ,
⌈
The VdpCmR shall use a receive buffer of size VdpCmRRxBufferSize to store received VDP messages.
⌋

 Receive StartOfReception
  Upstream requirements: ,
⌈
The VdpCmR shall return the receive buffer to the PduR when this calls `VdpCmR_StartOfReception` (see Figure ).
⌋

 Receive CopyRxData
  Upstream requirements: ,
⌈
The VdpCmR shall copy the passed receive data into its receive buffer when the PduR calls `VdpCmR_CopyRxData`.
⌋

 Receive TpRxIndication
  Upstream requirements: ,
⌈
The VdpCmR shall trigger processing the receive buffer in the next call to `VdpCmR_MainFunction` when the PduR calls `VdpCmR_TpRxIndication`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. DCA 配置
*原文标题：DCA Configuration*

The VdpCmR interacts with the DCA Remotes, i.e. it configures them and collects the data provided by them.

 DCA Remote count
  Upstream requirements:
⌈
The VdpCmR shall communicate with the DCA Remotes configured inside container VdpCmRDcaRemotes. The number of the containers VdpCmRDcaRemote inside VdpCmRDcaRemotes define the number of DCA Remotes.
⌋

 DCA Remote names
  Upstream requirements:
⌈
The VdpCmR shall use the API of a DCA Remote to communicate with it as described in chapter . The prefix of the function names <DcaRemote>_functionXXX (like <DcaRemote>_AddDpDCfg) is configured through the name of the enclosing container VdpCmRDcaRemote, the <DcaRemote> shall be replaced by this.
⌋

 DCA Remote ID mapping
  Upstream requirements:
⌈
The VdpCmR shall realize a mapping between a DCA Remote ID and the corresponding DCA Remote by the configuration parameter VdpCmRDcaRemoteId that is contained inside the VdpCmRDcaRemote container. This allows calling the correct DCA Remote function when receiving a VDP message from the PduR containing just a DCA Remote ID.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Add dynamic 配置
*原文标题：Add dynamic configuration*

If no payload was given in the request, the VdpCmR can respond almost immediately, previously caring about two error cases (a missing TCT or an already set TCT) as described in the protocol specification.

 Add Dynamic Configuration - only cyclic transmission
  Upstream requirements: , , ,
⌈
On reception of an add dynamic configuration request (CT = 0) with the flag T_CYCLIC, the VdpCmR shall validate that no cyclic transmission is currently configured and then start transmitting data messages regularly if TCT was given in the extended header.

In case, the request has no further payload, the VdpCmR shall immediately respond with an acknowledge.
⌋

The following requirements specify the behavior of the VdpCmR module in interaction with the DCA Remotes.

 Add Dynamic Configuration - DCA remote dynamic configuration
  Upstream requirements: , , ,
⌈
In case the payload of the add dynamic configuration request (CT = 0) is not empty, the VdpCmR shall iterate over all `DCA_REM_DCFG` and for each `DCA_REM_DCFG` it shall perform the following steps to distribute the information to the correct DCA Remote

# Find the DCA Remote which is indexed by the given DCA Remote ID.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Remove dynamic 配置
*原文标题：Remove dynamic configuration*

Remove Dynamic Configuration Request
  Upstream requirements: , , ,
⌈
The module VdpCmR shall verify the combinations of the flags (T_CYCLIC), (GLOBAL) and (DCA) together with the payload on validity and react on invalid combinations with an error according to the protocol specification.
⌋

 Remove Dynamic Configuration Request - cyclic
  Upstream requirements: , ,
⌈
In case the (T_CYCLIC) flag is set, VdpCmR shall remove its internal cyclic transmission settings.
⌋

 Remove Dynamic Configuration Request - VDP Slot ID
  Upstream requirements: , ,
⌈
In case no flag or the (T_CYCLIC) flag is set, VdpCmR shall iterate through the `VDP_SLOT_IDs` contained in the payload, find the corresponding DCA Remote and call <DcaRemote>_DeleteDpDCfg with the `VDP_SLOT_ID`.
⌋

 Remove Dynamic Configuration Request - Global
  Upstream requirements: , ,
⌈
In case the (GLOBAL) flag is set, VdpCmR shall call <DcaRemote>_DeleteAllDpDCfgs for all existing DCAs.
⌋

 Remove Dynamic Configuration Request - DCA
  Upstream requirements: , ,
⌈
In case the (DCA) flag is set, VdpCmR shall iterate through the DCAs contained inside the payload and call <DcaRemote>_DeleteAllDpDCfgs for each.
⌋

### 24. Activation

Activation state
  Upstream requirements: , ,
⌈
The module VdpCmR shall activate the sampling in case the activation state (ACT) is set to 1 inside the activation request message or deactivate the sampling otherwise.
⌋

 Activation request payload
  Upstream requirements: , , ,
⌈
The module VdpCmR shall decode all `VDP_SLOT_IDs` contained DDLE encoded inside the control message payload.
⌋

 Activation at remote DCA
  Upstream requirements: , , ,
⌈
On reception of an activation request (CT = 2) with payload, the VdpCmR shall iterate through the provided `VDP_SLOT_IDs` and

# validate the `VDP_SLOT_ID`, and
# if successful, call the API <DcaRemote>_SetDpActivationState on the according DCA Remote with the `VDP_SLOT_ID` and the activation state (ACT) of the message as parameter.
⌋

 Activation request - Validation in VdpCmR
  Upstream requirements: ,
⌈
If the validation of a `VDP_SLOT_ID` in the processing of the activation request was not successful, the VdpCmR shall append to the payload of the response the suitable error code EC (one of the ones allowed in the protocol specification for the activation response) and the concerned `VDP_SLOT_ID`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Trigger

Trigger request - Transmission
  Upstream requirements: , ,
⌈
On reception of a trigger request (CT = 3) with `TX_TRIG` = 1, the VdpCmR shall request sending the data message buffer in the next call to `VdpCmR_MainFunction`.

If no payload is contained, the VdpCmR shall respond immediately with an acknowledge (ACK = 1) with no payload.
⌋

The payload in trigger requests is optional. If contained the processing shall be done according to the following requirement.

 Trigger request - Sampling
  Upstream requirements: , ,
⌈
On reception of a trigger request (CT = 3) with payload, the VdpCmR shall iterate through the provided `VDP_SLOT_IDs` and

# validate the `VDP_SLOT_ID`, and
# if successful, call the API <DcaRemote>_TriggerDpOneTimeSampling on the according DCA Remote with the `VDP_SLOT_ID` as parameter.
⌋

In the previous requirement, it is not required that the sampling must occur immediately during the API call to <DcaRemote>_TriggerDpOneTimeSampling. It is allowed for the DCA Remote to sample later in e.g. the next main function cycle.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Submission of 数据 Point Samples
*原文标题：Submission of Data Point Samples*

When a DCA Remote calls `VdpCmR_AddSample`, the VdpCmR stores the provided data suitably inside its data message buffer of configuration parameter size VdpCmRTxBufferSize. Beyond this, the function contains no further functionality unless the transmission is configured to be "on sample" for this specific data point.

 Adding data point samples
  Upstream requirements: ,
⌈
The VdpCmR shall be able to receive data point samples with the service `VdpCmR_AddSample`.

If all parameters are valid, the VdpCmR shall then add a new Data Point Sample Information (DPSI) with the vdpslotid from the API call in the `VDP_SLOT_ID` of the DPSI to the data message buffer.

When this is successful, the VdpCmR shall return E_OK.
⌋

 Adding too big sample
  Upstream requirements:
⌈
The VdpCmR shall return E_NOT_OK if a data message is passed by `VdpCmR_AddSample` that is bigger than VdpCmRMaxDataLen.
⌋

Argument invalidity to `VdpCmR_AddSample` is mostly explained in .

 Get current timestamp
  Upstream requirements: ,
⌈
When `VdpCmR_AddSample` is called, VdpCmR shall retrieve the current timestamp by `StbM_GetCurrentTime` and time base identifier VdpCmRStbMSynchronizedTimeBaseRef.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 错误处理
*原文标题：Error handling*

Most potential errors reported to the DCA Remote are sufficiently specified in . In particular a non-successful call to `VdpCmR_AddSample` may be answered by `VDPCMR_E_BUFFER_FULL`, which shall also be used when the module internal data message buffer is full and needs to be transmitted before the call to `VdpCmR_AddSample` can be successful.

 AddSample Buffer full
  Upstream requirements: , ,
⌈
The VdpCmR shall always reserve space in the data message buffer to append an asynchronous error `ASYNC_ERR` which indicates that the data message buffer is full, i.e. (EC) = 0x74. If the remaining buffer space is not sufficient to store the next DPSI for the data sample provided with `VdpCmR_AddSample`, the VdpCmR shall append the previously mentioned asynchronous error to the data message buffer and request sending it in the next call to `VdpCmR_MainFunction`.

The `VdpCmR_AddSample` shall then return `VDPCMR_E_BUFFER_FULL`.
⌋

 Maximum timestamp length
  Upstream requirements: ,
⌈
The VdpCmR shall limit the size of DDLE encoded timestamps to configuration parameter VdpCmRMaxRelTimestampLen.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Submission of Asynchronous 错误
*原文标题：Submission of Asynchronous Errors*

When a DCA Remote calls `VdpCmR_AddAsyncError`, the VdpCmR adds an asynchronous error to the data message buffer. These errors are transmitted within the data frame as a specific type of the data point information. In general, this function is similar to `VdpCmR_AddSample` except that instead of a data point error information is contained.

 Adding asynchronous errors
  Upstream requirements: ,
⌈
The VdpCmR shall be able to receive asynchronous error information with the service `VdpCmR_AddAsyncError`.

If all parameters are valid, the VdpCmR shall add a new Asynchronous Error Information (`ASYNC_ERR`) with the `VDP_SLOT_ID` set to the vdpslotid from the API call to the data message buffer.

When this is successful, the VdpCmR shall return E_OK
⌋

Argument invalidity to `VdpCmR_AddAsyncError` is mostly explained in .

 Error Information
  Upstream requirements:
⌈
When `VdpCmR_AddAsyncError` is called, the error information length `ERR_LEN` in the `ASYNC_ERR` shall be set to the value of errorInfoLen and errorInfoLen bytes shall be read from ptrErrorInfo and inserted into the `ERR_INFO` field of `ASYNC_ERR`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 错误处理
*原文标题：Error handling*

Most potential errors reported to the DCA Remote are sufficiently specified in . In particular a non-successful call to `VdpCmR_AddAsyncError` may be answered by `VDPCMR_E_BUFFER_FULL`, which shall also be used when the module internal data message buffer is full and needs to be transmitted before the call to `VdpCmR_AddAsyncError` can be successful.

 AddAsyncError Buffer full
  Upstream requirements:
⌈
The VdpCmR shall always reserve space in the next outgoing data message buffer to append an asynchronous error `ASYNC_ERR` which indicates that the buffer is full, i.e. (EC) = 0x74. If the remaining buffer space is not sufficient to store the next `ASYNC_ERR` for the error provided with `VdpCmR_AddAsyncError`, the VdpCmR shall append the previously mentioned asynchronous error to the data message buffer and request sending it in the next call to `VdpCmR_MainFunction`.

The `VdpCmR_AddAsyncError` shall then return `VDPCMR_E_BUFFER_FULL`.
⌋

### 30. Transmission of 数据 Messages
*原文标题：Transmission of Data Messages*

This section describes the transmission of data messages, which is only executed in `VdpCmR_MainFunction`. See also  in the previous section for an explanation how the transmission mode on-sampling shall be realized.

 Cyclic call `VdpCmR_MainFunction`
  Upstream requirements:
⌈
The VdpCmR function `VdpCmR_MainFunction` shall be called cyclic with the configured period VdpCmRMainFunctionPeriod.
⌋

 Cyclic transmission
  Upstream requirements:
⌈
In case the transmission mode cyclic is set, the VdpCmR shall validate on call of `VdpCmR_MainFunction`, whether the cycle time is expired. If so, VdpCmR shall request sending the data message in this call of `VdpCmR_MainFunction`.
⌋

 Buffer threshold exceeded
  Upstream requirements:
⌈
When `VdpCmR_MainFunction` is called, the VdpCmR shall check whether a compile time configured threshold (VdpCmRTxAutoTransmissionThreshold) of the data message buffer is already filled with data point samples. If so, VdpCmR shall request sending the data message buffer in this call of `VdpCmR_MainFunction`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 持久化 of Dynamic Configurations
*原文标题：Persistency of Dynamic Configurations*

VdpCmR might persist the Dynamic Configuration of data points to be able to start immediately with data collection after start-up, e.g. after a reset. It will not persist collected data.

 Persistency
  Upstream requirements:
⌈
The VdpCmR shall be able to conditionally persist the `DP_DCFG` in the NvM.
⌋

 NvM Block Descriptor
  Upstream requirements:
⌈
The NvM block descriptor referenced by ECUC parameter VdpCmRNvmBlockDescriptor, shall be a block processed during `NvM_ReadBlock`, `NvM_WriteBlock`, `NvM_GetErrorStatus` or `NvM_SetRamBlockStatus`.
⌋

 NvM Block Name
  Upstream requirements:
⌈
The supported NvM block name shall be `VdpCmR_NvmRomBlockData`.
⌋

 Read Persistent Data
  Upstream requirements:
⌈
The VdpCmR shall use the function `NvM_ReadBlock` to read the persistent VdpCmR data block from the NvM.
⌋

 Write Persistent Data
  Upstream requirements:
⌈
The VdpCmR shall use the function `NvM_WriteBlock` to write the persistent VdpCmR data block to the NvM.
⌋

 Get Persistent Data Error Status
  Upstream requirements:
⌈
The VdpCmR shall use the function `NvM_GetErrorStatus` to get the NvM block dependent status and error information.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 错误分类
*原文标题：Error Classification*

Section "Error Handling" of the document  "General Specification of Basic Software Modules" describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 33. Development 错误
*原文标题：Development Errors*

Definition of development errors in module VdpCmR
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Component is uninitialized | VDPCMR_E_UNINIT | 0x1 |
| Passed argument was invalid | VDPCMR_E_ARG_INVALID | 0x2 |
| Length of data exceeds pre-configured data length | VDPCMR_E_DATA_LEN_EXCEEDED | 0x3 |

⌋

 VdpCmR Error Not Initialized
  Upstream requirements: ,
⌈
If development error detection is enabled for the VdpCmR module, any function call of the public API except `VdpCmR_Init` shall report the DET error `VDPCMR_E_UNINIT` when VdpCmR is not yet initialized.
⌋

 VdpCmR Error Invalid Argument
  Upstream requirements: ,
⌈
If development error detection is enabled for the VdpCmR module, any function call of the public API shall report the DET error `VDPCMR_E_ARG_INVALID` when VdpCmR is called with an invalid argument, e.g. a NULL pointer.
⌋

 VdpCmR Error Data Length Exceeded
  Upstream requirements: ,
⌈
If development error detection is enabled for the VdpCmR module, any call of `VdpCmR_AddSample` shall report the DET error `VDPCMR_E_DATA_LEN_EXCEEDED` when the passed data is bigger than the pre-configured data length VdpCmRMaxDataLen.
⌋

### 34. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 35. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 36. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 37. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 38. API 规范
*原文标题：API specification*

### 39. Imported 类型
*原文标题：Imported types*

In this chapter all types included by the VdpCmR are listed together with the file and the defining module.

 Definition of imported datatypes of module VdpCmR
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
| NvM | Rte_NvM_Type.h | NvM_BlockIdType |
| ^ | Rte_NvM_Type.h | NvM_RequestResultType |
| StbM | Rte_StbM_Type.h | StbM_SynchronizedTimeBaseType |
| ^ | Rte_StbM_Type.h | StbM_TimeBaseStatusType |
| ^ | Rte_StbM_Type.h | StbM_TimeStampType |
| ^ | Rte_StbM_Type.h | StbM_TimeTupleType |
| ^ | Rte_StbM_Type.h | StbM_UserDataType |
| ^ | StbM.h | StbM_VirtualLocalTimeType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 40. 类型定义
*原文标题：Type definitions*

### 41. VdpCmR_ReturnType

Definition of `Std_ReturnType`-extension for module VdpCmR
  Upstream requirements:
⌈
| Range | VDPCMR_DCA_E_UNKNOWN_VDP_SLOT_ID | 0x02 | Unknown VDP Slot ID. |
|---|---|---|---|
| ^ | VDPCMR_DCA_E_VDP_SLOT_ID_ALREADY_IN_USE | 0x03 | VDP Slot ID already in use. |
| ^ | VDPCMR_DCA_E_SAMPLING_ERROR | 0x04 | Sampling of the data point has failed. |
| ^ | VDPCMR_DCA_E_INVALID_DCA_REM_DP_DCFG | 0x05 | The provided DCA_REM_DP_DCFG is invalid. |
| ^ | VDPCMR_DCA_E_DUPLICATE_DCA_REM_DP_DCFG | 0x06 | The provided DCA_REM_DP_DCFG is already submitted. |
| ^ | VDPCMR_DCA_E_DP_LIMIT_REACHED | 0x07 | The maximum amount of configurable data points for this DCA Remote is reached. |
| ^ | VDPCMR_DCA_E_SAMPLING_MODE_CYCLIC_NOT_SUPPORTED | 0x08 | Sampling Mode Cyclic not supported. |
| ^ | VDPCMR_DCA_E_SAMPLING_MODE_ON_CHANGE_NOT_SUPPORTED | 0x09 | Sampling mode on change not supported. |
| ^ | VDPCMR_DCA_E_SAMPLING_MODE_CYCLIC_AND_ON_CHANGE_NOT_SUPPORTED | 0x0A | Sampling mode cyclic and on change not supported. |
| ^ | VDPCMR_DCA_E_CUSTOM_ERROR_0 | 0x40 | First of 48 custom errors, can be defined from the implementer of the DCA. |
| ^ | VDPCMR_DCA_E_CUSTOM_ERROR_47 | 0x6F | Last of 48 custom errors, can be defined from the implementer of the DCA. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. VdpCmR_ConfigType

Definition of datatype `VdpCmR_ConfigType`
  Upstream requirements: , , ,
⌈
| Name | VdpCmR_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Implementation specific | < |
| ^ | Type | - |
| ^ | Comment | The content of the initialization data structure is implementation specific. |
| Description | This is the type of the data structure containing the initialization data for VdpCmR. | < |
| Available via | VdpCmR.h | < |

⌋

Since this type is used for compliance purposes only (meaning that `VdpCmR_Init` will now have a pointer to this type as parameter, based on `SWS_BSW_00050`) it will be left to the developer to choose how to implement it, considering it has no use for the VdpCmR module in any way.

### 43. DCA Remote 类型
*原文标题：DCA Remote Types*

This chapter contains the type definitions needed for the interaction of the VdpCmR with the DCA Remotes.

### 44. VdpCmR_Dca_DpActiveStateEnumType

Definition of datatype `VdpCmR_Dca_DpActiveStateEnumType`
  Upstream requirements:
⌈
| Name | VdpCmR_Dca_DpActiveStateEnumType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | VDPCMR_DCA_DP_INACTIVE | 0x00 | Data point shall currently not be sampled automatically. |
| ^ | VDPCMR_DCA_DP_ACTIVE | 0x01 | Data point shall currently be sampled automatically. |
| Description | This enumeration contains the possible activation states of a data point. | < | < |
| Available via | VdpCmR_Externals.h | < | < |

⌋

### 45. VdpCmR_Dca_SamplingModeEnumType

Definition of datatype `VdpCmR_Dca_SamplingModeEnumType`
  Upstream requirements:
⌈
| Name | VdpCmR_Dca_SamplingModeEnumType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | VDPCMR_DCA_SAMPLING_MODE_ON_REQUEST | 0x00 | Data is sampled through trigger requests (on-request). |
| ^ | VDPCMR_DCA_SAMPLING_MODE_CYCLIC | 0x01 | Data is sampled cyclically or on-request. |
| ^ | VDPCMR_DCA_SAMPLING_MODE_ON_CHANGE | 0x02 | Data is sampled on-change or on-request. |
| ^ | VDPCMR_DCA_SAMPLING_MODE_CYCLIC_OR_ON_CHANGE | 0x03 | Data is sampled cyclically, on-change or on-request. |
| Description | This enumeration contains the possible sampling modes of a DCA Remote. | < | < |
| Available via | VdpCmR_Externals.h | < | < |

⌋

### 46. VdpCmR_Dca_VdpSlotIdDpDCfgPairType

Definition of datatype `VdpCmR_Dca_VdpSlotIdDpDCfgPairType`
  Upstream requirements:
⌈
| Name | VdpCmR_Dca_VdpSlotIdDpDCfgPairType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | DcaRemDpDCfg | < |
| ^ | Type | uint8* |
| ^ | Comment | Pointer to the dynamic configuration for this data point. |
| ^ | DcaRemDpDCfgLen | < |
| ^ | Type | uint16 |
| ^ | Comment | Length of the content in DcaRemDpDCfg |
| ^ | SamplingCycleTime | < |
| ^ | Type | uint16 |
| ^ | Comment | Cycle time in milliseconds |
| ^ | ActiveState | < |
| ^ | Type | VdpCmR_Dca_DpActiveStateEnumType |
| ^ | Comment | Initial activation state of the data point. |
| ^ | SamplingMode | < |
| ^ | Type | VdpCmR_Dca_SamplingModeEnumType |
| ^ | Comment | Indicates how the sampling mode shall be acquired. |
| ^ | VdpSlotId | < |
| ^ | Type | uint16 |
| ^ | Comment | VdpSlotId on which the samples can be submitted and with which activation and triggers can be set. |
| Description | Aggregates all necessary information to configure the sampling of the data point in the DCA Remote together with the VdpSlotId. | < |
| Available via | VdpCmR_Externals.h | < |

⌋

### 47. 功能定义
*原文标题：Function definitions*

### 48. VdpCmR_Init

Definition of API function `VdpCmR_Init`
  Upstream requirements: , , ,
⌈
| Service Name | VdpCmR_Init | < |
|---|---|---|
| Syntax | void VdpCmR_Init ( |  |

  const `VdpCmR_ConfigType`* configPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | configPtr | Pointer to the selected configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the component internal tables and sets up internal buffers. |  |

| Note: in case a reference to an Nv block is configured, the NvM needs to be initialized before the VdpCmR is initialized. | < |  |
|---|---|---|
| Available via | VdpCmR.h | < |

⌋

 VdpCmR ConfigPtr at Init
  Upstream requirements:
⌈
The Configuration pointer ConfigPtr is currently not used and shall therefore be set to the `NULL_PTR` value when calling the `VdpCmR_Init` API.
⌋

### 其余 49 章（内容从略，见纯文本全文）

49. API for DCA Remote
50. VdpCmR_AddSample
51. VdpCmR_AddAsyncError
52. Callback 通知
53. API for PduR
54. VdpCmR_StartOfReception
55. VdpCmR_CopyRxData
56. VdpCmR_TpRxIndication
57. VdpCmR_CopyTxData
58. VdpCmR_TpTxConfirmation
59. Scheduled functions
60. VdpCmR_MainFunction
61. Expected 接口
62. Mandatory 接口
63. Optional 接口
64. Configurable 接口
65. <DcaRemote>_AddDpDCfg
66. <DcaRemote>_SetDpActivationState
67. <DcaRemote>_TriggerDpOneTimeSampling
68. <DcaRemote>_DeleteDpDCfg
69. <DcaRemote>_DeleteAllDpDCfgs
70. 服务接口
71. 时序图
72. 配置规范
73. How to read this chapter
74. Containers and 配置 parameters
75. VdpCmR
76. VdpCmRGeneral
77. VdpCmRDcaRemotes
78. VdpCmRCsl
79. 发布信息
80. 附录
81. Mentioned Class Tables
82. 不适用需求
83. Change history of AUTOSAR traceable items
84. Traceable item history of this document according to AUTOSAR Release R25-11
85. Added 规范 Items in R25-11
86. Changed 规范 Items in R25-11
87. Deleted 规范 Items in R25-11
88. Added Constraints in R25-11
89. Changed Constraints in R25-11
90. Deleted Constraints in R25-11
91. Traceable item history of this document according to AUTOSAR Release R26-11
92. Added 规范 Items in R26-11
93. Changed 规范 Items in R26-11
94. Deleted 规范 Items in R26-11
95. Added Constraints in R26-11
96. Changed Constraints in R26-11
97. Deleted Constraints in R26-11
