# Specification of Bulk NvData Manager (`BulkNvDataManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 949 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_BulkNvDataManager_949\AUTOSAR_CP_SWS_BulkNvDataManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_BulkNvDataManager_949\AUTOSAR_CP_SWS_BulkNvDataManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_BulkNvDataManager_949\zzgen\CP_SWS_BulkNvDataManager.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module BulkNvDataManager.

The demand of non-volatile bulk data is increasing for use-case like variant-coding . Such data is used frequently, but rarely updated. The BulkNvDataManager offers in contrast to the NvM an API to read the data directly from flash memory. In consequence a RAM mirror is avoided, but the writing of the data is more complex.

## 模块依赖

This module depends on the capabilities of the underlying flash driver.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module BulkNvDataManager.

The demand of non-volatile bulk data is increasing for use-case like variant-coding . Such data is used frequently, but rarely updated. The BulkNvDataManager offers in contrast to the NvM an API to read the data directly from flash memory. In consequence a RAM mirror is avoided, but the writing of the data is more complex.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the BulkNvDataManager that are not included in the .

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for BulkNvDataManager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for BulkNvDataManager.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

The synchronization of a potential parallel access (e.g. FlashEEPROMEmulation) to the underlying flash driver is not part of this AUTOSAR release.

Currently only PFlash writing with A/B Sector switch, present in high end microcontrollers, is supported. This limits the applicability of BndM to architectures supporting this feature.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No content.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This module depends on the capabilities of the underlying flash driver.

### 10. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in <`CITATIONS_OF_CONTRIBUTED_DOCUMENTS`> and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Update of constant parameters through diagnostics |  |  |

### 11. 功能规范
*原文标题：Functional specification*

In general the concept how the BulkNvDataManager will manage its flash memory is vendor-specific.

The base idea is to have an A/B switching of the data blocks. This means the complete Bulk NvData will be stored in partition A. When the writing is started (`BndM_WriteStart`) the B partition needs to be erased. The updated blocks (`BndM_WriteBlock`) will be written to partition B. The finalization (`BndM_WriteFinalize`) will finally make partition B consistent (e.g. by coping the not updated blocks over to partition B) and switch the active partition to B (further calls to `BndM_GetBlockPtr` will point to the data in the partition B). Nevertheless the vendor solution could consider alternative solutions like an update through a FlashBootloader.

  Upstream requirements:
⌈
The BndM shall manage its BndM blocks (BndMBlockDescriptor) in the direct accessible memory (i.e. via pointer).
⌋

  Upstream requirements:
⌈
A call of `BndM_GetBlockPtr` shall deliver the base pointer to the corresponding BndM block (BndMBlockDescriptor) in the currently active partition.
⌋

  Upstream requirements:
⌈
A call of `BndM_WriteStart` shall trigger the preparation of the 2nd (free) partition.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 13. Development 错误
*原文标题：Development Errors*

Definition of development errors in module BndM
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called with wrong parameter | BNDM_E_PARAM | 0x01 |
| API called in wrong sequence | BNDM_E_WRONG_SEQUENCE | 0x02 |

⌋

### 14. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 15. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 16. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 17. API 规范
*原文标题：API specification*

### 18. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module BndM
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 19. 类型定义
*原文标题：Type definitions*

### 20. BndM_ConfigType

Definition of datatype `BndM_ConfigType`
⌈
| Name | BndM_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | This type of the external data structure shall contain the post build initialization data for the BndM. | < |
| Available via | bndm.h | < |

⌋

### 21. BndM_BlockIdType

Definition of datatype `BndM_BlockIdType`
⌈
| Name | BndM_BlockIdType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint16 | < | < |
| Range | 0..65535 | - | - |
| Description | Unique identification of an bulk nv block. The BndM_BlockId is assigned by the BndM. | < | < |
| Available via | bndm.h | < | < |

⌋

### 22. BndM_Block<BlockId.Shortname>类型
*原文标题：BndM_Block<BlockId.Shortname>Type*

Definition of datatype `BndM_Block`{BlockId.Shortname}Type
⌈
| Name | BndM_Block{BlockId.Shortname}Type | < |
|---|---|---|
| Kind | Structure | < |
| Description | The elements of this structure data type is the C-structured representation of the configured ImplementationDataPrototype. | < |
| Available via | bndm_externals.h | < |

⌋

### 23. BndM_Result

Definition of datatype `BndM_ResultType`
⌈
| Name | BndM_ResultType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | E_OK | 0x00 | Result of the asynchronous job finish notifications |
| ^ | E_NOT_OK | 0x01 | - |
| Description | Result of the asynchronous job finish notifications | < | < |
| Available via | bndm.h | < | < |

⌋

### 24. 功能定义
*原文标题：Function definitions*

### 25. BndM_Init

Definition of API function `BndM_Init`
⌈
| Service Name | BndM_Init | < |
|---|---|---|
| Syntax | void BndM_Init ( |  |

  const `BndM_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the configuration set in VARIANT-POST-BUILD. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes or reinitializes this module. | < |
| Available via | BndM.h | < |

⌋

### 26. BndM_GetVersionInfo

Definition of API function `BndM_GetVersionInfo`
⌈
| Service Name | BndM_GetVersionInfo | < |
|---|---|---|
| Syntax | void BndM_GetVersionInfo ( |  |

  `Std_VersionInfoType`* versioninfo
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | versioninfo | Pointer to where to store the version information of this module. |
| Return value | None | < |
| Description | Returns the version information of this module. API Availability: This API will be available only if (ecuc BndM/BndMGeneral.BndMVersionInfoApi) == true) | < |
| Available via | BndM.h | < |

⌋

### 27. BndM_GetBlockPtr

Definition of API function `BndM_GetBlockPtr_`<BlockId.Shortname>
⌈
| Service Name | BndM_GetBlockPtr_<BlockId.Shortname> | < |
|---|---|---|
| Syntax | Std_ReturnType BndM_GetBlockPtr_<BlockId.Shortname> ( |  |

  `BndM_BlockIdType` BlockId,
  `BndM_Block`{BlockId.Shortname}Type** `BndM_BlockPtr`
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant Returns an pointer to the structure in flash | < |
| Parameters (in) | BlockId | BlockId |
| Parameters (inout) | None | < |
| Parameters (out) | BndM_BlockPtr | * BndM_BlockPtr |
| Return value | Std_ReturnType | - |
| Description | - | < |
| Available via | BndM_Externals.h | < |

⌋

### 28. BndM_WriteStart

Definition of API function `BndM_WriteStart`
⌈
| Service Name | BndM_WriteStart | < |
|---|---|---|
| Syntax | Std_ReturnType BndM_WriteStart ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK The preparation request is accepted. E_NOT_OK The preparation request is rejected. |
| Description | Will trigger the start of writing phase. The finish of asynchronous processing will trigger the callback xxx_BndMWriteStartFinish including the result of this operation | < |
| Available via | BndM.h | < |

⌋

Note: It is up to the stack-vendor what can run in parallel while the writing to BndM is possible or not (e.g. FEE might not work anymore).

### 29. BndM_WriteBlock

Definition of API function `BndM_WriteBlock_`<BlockId.Shortname>
⌈
| Service Name | BndM_WriteBlock_<BlockId.Shortname> | < |
|---|---|---|
| Syntax | Std_ReturnType BndM_WriteBlock_<BlockId.Shortname> ( |  |

  `BndM_BlockIdType` BlockId,
  const `BndM_Block`{BlockId.Shortname}Type* `BndM_SrcPtr`
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockId | - |
| ^ | BndM_SrcPtr | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK The write request is accepted. E_NOT_OK The write request is rejected. |
| Description | Will persist the data in flash, that it can later directly accessed via BndM_GetBlockPtr API. The writing take a while and is finished after the successful callback xxx_BndMWriteBlockFinish | < |
| Available via | BndM_Externals.h | < |

⌋

Note: `BndM_WriteStart` needs to be called in advance

### 30. BndM_WriteFinalize

Definition of API function `BndM_WriteFinalize`
⌈
| Service Name | BndM_WriteFinalize | < |
|---|---|---|
| Syntax | Std_ReturnType BndM_WriteFinalize ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant Finalize the writing. After the successful callback xxx_BndMWriteFinalizeFinish the finalization is finished (i.e. the new stored data is available). | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK The finalization request is accepted. E_NOT_OK The finalization request is rejected. |
| Description | Will trigger the finalization of writing phase. The finish of asynchronous processing will trigger the callback xxx_BndMWriteFinalizeFinish including the result of this operation. | < |
| Available via | BndM.h | < |

⌋

### 31. BndM_WriteCancel

Definition of API function `BndM_WriteCancel`
⌈
| Service Name | BndM_WriteCancel | < |
|---|---|---|
| Syntax | void BndM_WriteCancel ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Cancels the writing | < |
| Available via | BndM.h | < |

⌋

### 32. Callback 通知
*原文标题：Callback notifications*

This is a list of functions provided for FLS module.

### 33. BndM_JobEndNotification

Definition of callback function `BndM_JobEndNotification`
⌈
| Service Name | BndM_JobEndNotification | < |
|---|---|---|
| Syntax | void BndM_JobEndNotification ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This callback function is called when a FLS job has been finished with positive result. | < |
| Available via | BndM.h | < |

⌋

### 34. BndM_JobErrorNotification

Definition of callback function `BndM_JobErrorNotification`
⌈
| Service Name | BndM_JobErrorNotification | < |
|---|---|---|
| Syntax | void BndM_JobErrorNotification ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This callback function is called when a FLS job has been canceled or finished with negative result. | < |
| Available via | BndM.h | < |

⌋

### 35. Scheduled functions

These functions are directly called by Basic Software Scheduler. The following functions shall have no return value and no parameter. All functions shall be non re-entrant.

### 36. BndM_MainFunction

Definition of scheduled function `BndM_MainFunction`
⌈
| Service Name | BndM_MainFunction | < |
|---|---|---|
| Syntax | void BndM_MainFunction ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x55 | < |
| Description | Schedule function for the background processing. | < |
| Available via | SchM_BndM.h | < |

⌋

### 37. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 38. Mandatory 接口
*原文标题：Mandatory interfaces*

Definition of mandatory interfaces required by module BndM
⌈
| API Function | Header File | Description |
|---|---|---|
| There are no mandatory interfaces. | < | < |

⌋

Note: This section defines all interfaces, which are required to fulfill the core functionality of the module.

### 39. Optional 接口
*原文标题：Optional interfaces*

This section defines all interfaces, which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module BndM
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportRuntimeError | Det.h | Service to report runtime errors. If a callout has been configured then this callout shall be called. |

⌋

### 40. Configurable 接口
*原文标题：Configurable interfaces*

In this section, all interfaces are listed where the target function could be configured. The target function is usually a callback function. The names of this kind of interfaces are not fixed because they are configurable.

### 41. xxx_BndMWriteStartFinish

Definition of callout function `Xxx_BndMWriteStartFinish`
⌈
| Service Name | Xxx_BndMWriteStartFinish | < |
|---|---|---|
| Syntax | void Xxx_BndMWriteStartFinish ( |  |

  `BndM_BlockIdType` BlockId,
  `BndM_ResultType` result
| ) | < |  |
|---|---|---|
| Service ID | 0x56 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockId | - |
| ^ | result | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This callback function is called when BndM_WriteStart is finished. | < |
| Available via | BndM_Externals.h | < |

⌋

### 42. xxx_BndMWriteBlockFinish

Definition of callout function `Xxx_BndMWriteBlockFinish`
⌈
| Service Name | Xxx_BndMWriteBlockFinish | < |
|---|---|---|
| Syntax | void Xxx_BndMWriteBlockFinish ( |  |

  `BndM_BlockIdType` BlockId,
  `BndM_ResultType` result
| ) | < |  |
|---|---|---|
| Service ID | 0x57 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockId | - |
| ^ | result | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This callback function is called when BndM_WriteBlock is finished. | < |
| Available via | BndM_Externals.h | < |

⌋

### 43. xxx_BndMWriteFinalizeFinish

Definition of callout function `Xxx_BndMWriteFinalizeFinish`
⌈
| Service Name | Xxx_BndMWriteFinalizeFinish | < |
|---|---|---|
| Syntax | void Xxx_BndMWriteFinalizeFinish ( |  |

  `BndM_BlockIdType` BlockId,
  `BndM_ResultType` result
| ) | < |  |
|---|---|---|
| Service ID | 0x58 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockId | - |
| ^ | result | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This callback function is called when BndM_WriteFinalize is finished. | < |
| Available via | BndM_Externals.h | < |

⌋

### 44. 服务接口
*原文标题：Service Interfaces*

The BndM does not have service interfaces.

### 45. 时序图
*原文标题：Sequence diagrams*

No content.

### 46. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification Chapter  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave Chapter  in the specification to guarantee comprehension.

Chapter  specifies the structure (containers) and the parameters of the module BndM.

Chapter  specifies published information of the module BndM.

### 47. How to read this chapter

For details refer to .

### 48. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters describe Chapter  and Chapter .

### 49. BndM

Definition of EcucModuleDef BndM
⌈
| Module Name | BndM |
|---|---|
| Description | Configuration of the BulkNvDataManager module. |
| Post-Build Variant Support | false |
| Supported Config Variants | VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| BndMBlockDescriptor | 0..* | Each container defines a Bulk NV Block which can be individually accessed. |
| BndMCallbackBlock | 0..* | This container contains the block-specific callbacks. |
| BndMCallbackGeneral | 0..1 | This container contains the general callbacks |
| BndMGeneral | 1 | Container for common configuration options. |

⌋

### 50. BndMGeneral

Definition of EcucParamConfContainerDef BndMGeneral
⌈
| Container Name | BndMGeneral | < | < |
|---|---|---|---|
| Parent Container | BndM | < | < |
| Upstream mapping defined | - | < | < |
| Description | Container for common configuration options. | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| BndMDevErrorDetect | 1 |  |
| BndMMainFunctionPeriod | 1 |  |

No Included Containers
⌋

 Definition of EcucBooleanParamDef BndMDevErrorDetect
⌈
| Parameter Name | BndMDevErrorDetect | < | < |
|---|---|---|---|
| Parent Container | BndMGeneral | < | < |
| Upstream mapping defined | - | < | < |
| Description | Switches the development error detection and notification on or off. |  |  |

* true: detection and notification is enabled.
| * false: detection and notification is disabled. | < | < |  |
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

### 51. BndMBlockDescriptor

Definition of EcucParamConfContainerDef BndMBlockDescriptor
⌈
| Container Name | BndMBlockDescriptor | < | < |
|---|---|---|---|
| Parent Container | BndM | < | < |
| Upstream mapping defined | - | < | < |
| Description | Each container defines a Bulk NV Block which can be individually accessed. | < | < |
| Multiplicity | 0..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| BndMBlockIdentifier | 1 |  |
| BndMBlockDescriptor | 1 |  |
| BndMCallbackRef | 0..1 |  |

No Included Containers
⌋

 Definition of EcucIntegerParamDef BndMBlockIdentifier
⌈
| Parameter Name | BndMBlockIdentifier | < | < |
|---|---|---|---|
| Parent Container | BndMBlockDescriptor | < | < |
| Upstream mapping defined | - | < | < |
| Description | Unique identification of the block. | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucIntegerParamDef (Symbolic Name generated for this parameter) | < | < |
| Range | 0 .. 65535 |  | < |
| Default value | - | < | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Dependency |  | < | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 52. BndMCallbackBlock

Definition of EcucParamConfContainerDef BndMCallbackBlock
⌈
| Container Name | BndMCallbackBlock | < | < |
|---|---|---|---|
| Parent Container | BndM | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container contains the block-specific callbacks. | < | < |
| Multiplicity | 0..* | < | < |
| Post-Build Variant Multiplicity | false | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| BndMWriteBlockFinishFnc | 1 |  |

No Included Containers
⌋

 Definition of EcucFunctionNameDef BndMWriteBlockFinishFnc
⌈
| Parameter Name | BndMWriteBlockFinishFnc | < | < |
|---|---|---|---|
| Parent Container | BndMCallbackBlock | < | < |
| Upstream mapping defined | - | < | < |
| Description | Callback function for the WriteBlockFinish callback. | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucFunctionNameDef | < | < |
| Default value | - | < | < |
| Regular Expression | - | < | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Dependency |  | < | < |

⌋

### 53. BndMCallbackGeneral

Definition of EcucParamConfContainerDef BndMCallbackGeneral
⌈
| Container Name | BndMCallbackGeneral | < | < |
|---|---|---|---|
| Parent Container | BndM | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container contains the general callbacks | < | < |
| Multiplicity | 0..1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| BndMWriteFinalizeFinishFnc | 1 |  |
| BndMWriteStartFinishFnc | 1 |  |

No Included Containers
⌋

 Definition of EcucFunctionNameDef BndMWriteFinalizeFinishFnc
⌈
| Parameter Name | BndMWriteFinalizeFinishFnc | < | < |
|---|---|---|---|
| Parent Container | BndMCallbackGeneral | < | < |
| Upstream mapping defined | - | < | < |
| Description | Callback function for the WriteFinalizeFinish callback. | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucFunctionNameDef | < | < |
| Default value | - | < | < |
| Regular Expression | - | < | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Dependency |  | < | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 54. 发布信息
*原文标题：Published Information*

For details refer to .

### 55. 附录
*原文标题：Appendix*

### 56. Change history of AUTOSAR traceable items

### 57. Traceable item history of this document according to AUTOSAR Release R25-11

### 58. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 59. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|
| Definition of EcucParamConfContainerDef BndMBlockDescriptor |  |
| Definition of imported datatypes of module BndM |  |
| Definition of optional interfaces requested by module BndM |  |

### 60. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

| Number | Heading |
|---|---|
| Definition of EcucReferenceDef BndMDeviceIndex |  |

### 61. Traceable item history of this document according to AUTOSAR Release R24-11

### 62. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 63. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 64. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 65. 不适用需求
*原文标题：Not applicable requirements*

⌈
These requirements are not applicable to this specification.
⌋
