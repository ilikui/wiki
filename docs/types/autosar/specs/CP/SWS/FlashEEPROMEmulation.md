# Specification of Flash EEPROM Emulation (`FlashEEPROMEmulation`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 286 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_FlashEEPROMEmulation_286\AUTOSAR_CP_SWS_FlashEEPROMEmulation.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_FlashEEPROMEmulation_286\AUTOSAR_CP_SWS_FlashEEPROMEmulation.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_FlashEEPROMEmulation_286\zzgen\CP_SWS_FlashEEPROMEmulation.complete.txt`

## 文档简介

This specification describes the functionality, API and configuration of the Flash EEPROM Emulation Module.

The Flash EEPROM Emulation (FEE) shall abstract from the device specific addressing scheme and segmentation and provide the upper layers with a virtual addressing scheme and segmentation as well as a "virtually" unlimited number of erase cycles.

## 模块依赖

This module depends on the capabilities of the underlying flash driver as well as the configuration of the NVRAM manager.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and configuration of the Flash EEPROM Emulation Module.

The Flash EEPROM Emulation (FEE) shall abstract from the device specific addressing scheme and segmentation and provide the upper layers with a virtual addressing scheme and segmentation as well as a "virtually" unlimited number of erase cycles.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Fee module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| EA | EEPROM Abstraction |
| Address Area | Contiguous memory area in the logical address space typically multiple physical memory sectors are combined to one logical address area. |
| EEPROM | Electrically Erasable and Programmable ROM (Read Only Memory) |
| FEE | Flash EEPROM Emulation |
| LSB | Least significant bit / byte (depending on context). Here, "bit" is meant. |
| Mem | Memory Driver |
| MemAcc | Memory Access |
| MemIf | Memory Abstraction Interface |
| MSB | Most significant bit / byte (depending on context). Here, "bit" is meant. |
| NvM | NVRAM Manager |
| NVRAM | Non-volatile RAM (Random Access Memory) |
| NVRAM block | Management unit as seen by the NVRAM Manager |
| (Logical) block | Smallest writable / erasable unit as seen by the modules user. Consists of one or more virtual pages. |
| Virtual page | May consist of one or several physical pages to ease handling of logical blocks and address calculation. |
| Internal residue | Unused space at the end of the last virtual page if the configured block size isn't an integer multiple of the virtual page size (see Figure ). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Flash EEPROM Emulation.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Flash EEPROM Emulation.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No limitations.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This module depends on the capabilities of the underlying flash driver as well as the configuration of the NVRAM manager.

### 10. 需求追踪
*原文标题：Requirements Tracing*

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| Classification of development errors |  |  |
| Callback Function Return Types for AUTOSAR BSW |  |  |
| AUTOSAR Basic Software Modules callback functions are allowed to have parameters |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| The Basic Software Module specifications shall specify at least in the description which other modules they require |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| Parameters shall have a type |  |  |
| API handling in uninitialized state |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| Classification of runtime errors |  |  |
| BSW Modules shall handle buffer alignments internally |  |  |
| The FEE and EA modules shall allow the configuration of the al |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能规范
*原文标题：Functional specification*

### 12. 通用行为
*原文标题：General behavior*

### 13. Addressing scheme and segmentation

The Flash EEPROM Emulation (FEE) module provides upper layers with a 32bit virtual linear address space and uniform segmentation scheme. This virtual 32bit addresses shall consist of

* a 16bit block number - allowing a (theoretical) number of 65536 logical blocks
* a 16bit block offset - allowing a (theoretical) block size of 64KByte per block

The 16bit block number represents a configurable (virtual) paging mechanism. The values for this address alignment can be derived from that of the underlying flash driver and device. This virtual paging shall be configurable via the parameter FeeVirtualPageSize.

  Upstream requirements: ,
⌈
The configuration of the Fee module shall be such that the virtual page size (defined in FeeVirtualPageSize) is an integer multiple of the physical page size, i.e. it is not allowed to configure a smaller virtual page than the actual physical page size.
⌋

Note: This specification requirement allows the physical start address of a logical block to be calculated rather than making a lookup table necessary for the address mapping.

Example:

The size of a virtual page is configured to be eight bytes, thus the address alignment is eight bytes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Address calculation

Upstream requirements:
⌈
Depending on the implementation of the FEE module and the exact address format used, the functions of the FEE module shall combine the 16bit block number and 16bit address offset to derive the physical flash address needed for the underlying flash driver.
⌋

Note: The exact address format needed by the underlying flash driver and therefore the mechanism how to derive the physical flash address from the given 16bit block number and 16bit address offset depends on the flash device and the implementation of this module and shall therefore not be standardized.

  Upstream requirements:
⌈
Only those bits of the 16bit block number, that do not denote a specific dataset or redundant copy shall be used for address calculation.
⌋

Note: Since this information is needed by the NVRAM manager, the number of bits to encode this can be configured for the NVRAM manager with the parameter `NVM_DATASET_SELECTION_BITS`.

Example:

Dataset information is configured to be encoded in the four LSB's of the 16bit block number (allowing for a maximum of 16 datasets per NVRAM block and a total of 4094 NVRAM blocks).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Limitation of erase cycles

Upstream requirements: ,
⌈
The configuration of the FEE module shall define the expected number of erase/write cycles for each logical block in the configuration parameter FeeNumberOfWriteCycles.
⌋

  Upstream requirements: ,
⌈
If the underlying flash device or device driver does not provide at least the configured number of erase/write cycles per physical memory cell, the FEE module shall provide mechanisms to spread the write access such that the physical device is not overstressed. This shall also apply to all management data used internally by the FEE module.
⌋

Example:

The logical block number 1 is configured for an expected 500.000 write cycles, the underlying flash device and device driver are only specified for 100.000 erase cycles. In this case, the FEE module has to provide (at least) five separate memory areas and alternate the access between those areas internally so that each physical memory location is only erased for a maximum of the specified 100.000 cycles.

### 16. 处理 of "immediate" 数据
*原文标题：Handling of "immediate" data*

Upstream requirements:
⌈
Blocks containing immediate data have to be written instantaneously, i.e. the FEE module has to ensure that it can write such blocks without the need to erase the corresponding memory area (e.g. by using pre-erased memory) and that the write request is not delayed by currently running module internal management operations.
⌋

Note: An ongoing lower priority read / erase / write or compare job shall be canceled by the NVRAM manager before immediate data is written. The FEE module has only to ensure that this write request can be performed immediately.

Note: A running operation on the hardware (e.g. writing one page or erasing one sector) can usually not be aborted once it has been started. The maximum time of the longest hardware operation thus has to be accepted as delay even for immediate data.

Example:

Three blocks with 10 bytes each have been configured for immediate data. The FEE module / configuration tool reserves these 30 bytes (plus the implementation specific overhead per block / page if needed) for use by this immediate data only. That is, this memory area shall not be used for storage of other data blocks.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Managing block correctness information

Upstream requirements:
⌈
The FEE module shall manage for each block the information, whether this block is correct (i.e. "not corrupted") from the point of view of the FEE module or not. This information shall only concern the internal handling of the block, not the block's contents.
⌋

  Upstream requirements:
⌈
When a block write operation is started, the FEE module shall mark the corresponding block as "corrupted".
⌋

  Upstream requirements:
⌈
Upon the successful end of the block write operation, the block shall be marked as "not corrupted" (again).
⌋

Note: This internal management information should not be mixed up with the validity information of a block which can be manipulated by using the `Fee_InvalidateBlock` service, i.e. the FEE shall be able to distinguish between a corrupted block and a block that has been deliberately invalidated by the upper layer.

### 18. Buffer Alignment

Upstream requirements:
⌈
The Fee shall align internal buffers to the value of FeeBufferAlignmentValue
⌋

  Upstream requirements:
⌈
The Fee shall align read request to the value of FeeMinimumReadPageSize
⌋

### 19. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 20. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Fee
  Upstream requirements: , , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called when module was not initialized | FEE_E_UNINIT | 0x01 |
| API service called with invalid block number | FEE_E_INVALID_BLOCK_NO | 0x02 |
| API service called with invalid block offset | FEE_E_INVALID_BLOCK_OFS | 0x03 |
| API service called with invalid data pointer | FEE_E_PARAM_POINTER | 0x04 |
| API service called with invalid length information | FEE_E_INVALID_BLOCK_LEN | 0x05 |

⌋

### 21. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Fee
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called while module is busy processing a user request | FEE_E_BUSY | 0x06 |
| Fee_Cancel called while no job was pending. | FEE_E_INVALID_CANCEL | 0x08 |

⌋

### 22. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 23. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 24. API 规范
*原文标题：API specification*

### 25. Imported 类型
*原文标题：Imported types*

Definition of imported datatypes of module Fee
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| MemAcc | MemAcc_GeneralTypes.h | MemAcc_AddressAreaIdType |
| ^ | MemAcc_GeneralTypes.h | MemAcc_AddressType |
| ^ | MemAcc_GeneralTypes.h | MemAcc_DataType |
| ^ | MemAcc_GeneralTypes.h | MemAcc_JobResultType |
| ^ | MemAcc_GeneralTypes.h | MemAcc_LengthType |
| MemIf | MemIf.h | MemIf_JobResultType |
| ^ | MemIf.h | MemIf_StatusType |
| Std | Std_Types.h | Std_ReturnType |

⌋

  Upstream requirements:
⌈
The types mentioned in  shall not be changed or extended for a specific FEE module or hardware platform.
⌋

### 26. 类型定义
*原文标题：Type definitions*

Definition of datatype `Fee_ConfigType`
  Upstream requirements:
⌈
| Name | Fee_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | Configuration data structure of the Fee module. | < |
| Available via | Fee.h | < |

⌋

### 27. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 28. Fee_Init

Definition of API function `Fee_Init`
  Upstream requirements:
⌈
| Service Name | Fee_Init | < |
|---|---|---|
| Syntax | void Fee_Init ( |  |

  const `Fee_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the selected configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to initialize the FEE module. | < |
| Available via | Fee.h | < |

⌋

 Fee init module status change
  Upstream requirements:
⌈
The function `Fee_Init` shall set the module status from `MEMIF_UNINIT` to `MEMIF_BUSY_INTERNAL` once it starts the module's initialization.
⌋

Note: The completion of `Fee_Init` does not imply that the Fee module can process jobs immediately. There might be some pending internal management operations. This will be determined and handled transparently by `Fee_MainFunction`.

Note: The FEE module's environment shall not call the function `Fee_Init` during a running operation of the FEE module.

### 29. Fee_Read

Definition of API function `Fee_Read`
  Upstream requirements:
⌈
| Service Name | Fee_Read | < |
|---|---|---|
| Syntax | Std_ReturnType Fee_Read ( |  |

  uint16 BlockNumber,
  uint16 BlockOffset,
  uint8* DataBufferPtr,
  uint16 Length
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockNumber | Number of logical block, also denoting start address of that block in flash memory. |
| ^ | BlockOffset | Read address offset inside the block |
| ^ | Length | Number of bytes to read |
| Parameters (inout) | None | < |
| Parameters (out) | DataBufferPtr | Pointer to data buffer |
| Return value | Std_ReturnType | E_OK: The requested job has been accepted by the module. E_NOT_OK: The requested job has not been accepted by the module. |
| Description | Service to initiate a read job. | < |
| Available via | Fee.h | < |

⌋

  Upstream requirements:
⌈
The function `Fee_Read` shall take the block start address and offset and calculate the corresponding memory read address.
⌋

Note: The address offset and length parameter can take any value within the given types range. This allows reading of an arbitrary number of bytes from an arbitrary start address inside a logical block.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Fee_Write

Definition of API function `Fee_Write`
  Upstream requirements:
⌈
| Service Name | Fee_Write | < |
|---|---|---|
| Syntax | Std_ReturnType Fee_Write ( |  |

  uint16 BlockNumber,
  const uint8* DataBufferPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockNumber | Number of logical block, also denoting start address of that block in EEPROM. |
| ^ | DataBufferPtr | Pointer to data buffer |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: The requested job has been accepted by the module. E_NOT_OK: The requested job has not been accepted by the module. |
| Description | Service to initiate a write job. | < |
| Available via | Fee.h | < |

⌋

  Upstream requirements:
⌈
The function `Fee_Write` shall take the block start address and calculate the corresponding memory write address. The block address offset shall be fixed to zero.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Fee_Cancel

Definition of API function `Fee_Cancel`
  Upstream requirements:
⌈
| Service Name | Fee_Cancel | < |
|---|---|---|
| Syntax | void Fee_Cancel ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to call the cancel function of the underlying flash driver. | < |
| Available via | Fee.h | < |

⌋

  Upstream requirements:
⌈
If development error detection is enabled for the module: the function `Fee_Cancel` shall check if the module state is `MEMIF_UNINIT`. If this is the case the function `Fee_Cancel` shall raise the development error `FEE_E_UNINIT`.
⌋

  Upstream requirements:
⌈
If the current module status is `MEMIF_BUSY` (i.e. the request to cancel a pending job is accepted by the function `Fee_Cancel`), the function `Fee_Cancel` shall call the cancel function of the underlying flash driver.
⌋

  Upstream requirements:
⌈
If the current module status is `MEMIF_BUSY` (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Fee_GetStatus

Definition of API function `Fee_GetStatus`
  Upstream requirements:
⌈
| Service Name | Fee_GetStatus | < |
|---|---|---|
| Syntax | MemIf_StatusType Fee_GetStatus ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | MemIf_StatusType | MEMIF_UNINIT: The FEE module has not been initialized. MEMIF_IDLE: The FEE module is currently idle. MEMIF_BUSY: The FEE module is currently busy. MEMIF_BUSY_INTERNAL: The FEE module is busy with internal management operations. |
| Description | Service to return the status. | < |
| Available via | Fee.h | < |

⌋

  Upstream requirements:
⌈
The function `Fee_GetStatus` shall return `MEMIF_UNINIT` if the module has not (yet) been initialized.
⌋

  Upstream requirements:
⌈
The function `Fee_GetStatus` shall return `MEMIF_IDLE` if the module is neither processing a request from the upper layer nor is it doing an internal management operation.
⌋

  Upstream requirements:
⌈
The function `Fee_GetStatus` shall return `MEMIF_BUSY` if it is currently processing a request from the upper layer.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Fee_GetJobResult

Definition of API function `Fee_GetJobResult`
  Upstream requirements:
⌈
| Service Name | Fee_GetJobResult | < |
|---|---|---|
| Syntax | MemIf_JobResultType Fee_GetJobResult ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | MemIf_JobResultType | MEMIF_JOB_OK: The last job has been finished successfully. MEMIF_JOB_PENDING: The last job is waiting for execution or currently being executed. MEMIF_JOB_CANCELED: The last job has been canceled (which means it failed). MEMIF_JOB_FAILED: The last job has not been finished successfully (it failed). MEMIF_BLOCK_INCONSISTENT: The requested block is inconsistent, it may contain corrupted data. MEMIF_BLOCK_INVALID: The requested block has been invalidated, the requested read operation can not be performed. |
| Description | Service to query the result of the last accepted job issued by the upper layer software. | < |
| Available via | Fee.h | < |

⌋

  Upstream requirements:
⌈
The function `Fee_GetJobResult` shall return `MEMIF_JOB_OK` if the last job has been finished successfully.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Fee_InvalidateBlock

Definition of API function `Fee_InvalidateBlock`
  Upstream requirements:
⌈
| Service Name | Fee_InvalidateBlock | < |
|---|---|---|
| Syntax | Std_ReturnType Fee_InvalidateBlock ( |  |

  uint16 BlockNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockNumber | Number of logical block, also denoting start address of that block in flash memory. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: The requested job has been accepted by the module. E_NOT_OK: The requested job has not been accepted by the module. |
| Description | Service to invalidate a logical block. | < |
| Available via | Fee.h | < |

⌋

  Upstream requirements:
⌈
The function `Fee_InvalidateBlock` shall take the block number and calculate the corresponding memory block address.
⌋

  Upstream requirements:
⌈
The function `Fee_InvalidateBlock` shall invalidate the requested block BlockNumber by calling the erase function of the underlying device driver and / or by changing some module internal management information accordingly.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Fee_EraseImmediateBlock

Definition of API function `Fee_EraseImmediateBlock`
  Upstream requirements:
⌈
| Service Name | Fee_EraseImmediateBlock | < |
|---|---|---|
| Syntax | Std_ReturnType Fee_EraseImmediateBlock ( |  |

  uint16 BlockNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockNumber | Number of logical block, also denoting start address of that block in EEPROM. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: The requested job has been accepted by the module. E_NOT_OK: The requested job has not been accepted by the module. |
| Description | Service to erase a logical block. | < |
| Available via | Fee.h | < |

⌋

Note: The function `Fee_EraseImmediateBlock` shall only be called by e.g. diagnostic or similar system service to pre-erase the area for immediate data if necessary.

  Upstream requirements:
⌈
The function `Fee_EraseImmediateBlock` shall take the block number and calculate the corresponding memory block address.
⌋

  Upstream requirements:
⌈
The function `Fee_EraseImmediateBlock` shall ensure that the FEE module can write immediate data.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Fee_JobEndNotification

Definition of callback function `Fee_JobEndNotification`
  Upstream requirements: ,
⌈
| Service Name | Fee_JobEndNotification | < |
|---|---|---|
| Syntax | void Fee_JobEndNotification ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x10 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to report to this module the successful end of an asynchronous operation. | < |
| Available via | Fee.h | < |

⌋

The underlying flash driver shall call the function `Fee_JobEndNotification` to report the successful end of an asynchronous operation.

Note: Depending on the implementation of the modules making up the NV memory stack, callback routines provided by the FEE module may be called on interrupt level. The implementation of the FEE module therefore has to make sure that the runtime of those routines is reasonably short, i.e. since callbacks may be propagated upward through several software layers. Whether callback routines are allowable / feasible on interrupt level depends on the project specific needs (reaction time) and limitations (runtime in interrupt context).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Scheduled functions

These functions are directly called by the Basic Software Scheduler. The following functions shall have no return value and no parameter. All functions shall be non re-entrant.

### 38. Fee_MainFunction

Definition of scheduled function `Fee_MainFunction`
  Upstream requirements:
⌈
| Service Name | Fee_MainFunction | < |
|---|---|---|
| Syntax | void Fee_MainFunction ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x12 | < |
| Description | Service to handle the requested read / write / erase jobs and the internal management operations. | < |
| Available via | SchM_Fee.h | < |

⌋

 Main function module status change
  Upstream requirements:
⌈
In case there are no internal management operations needed or the internal management operations are done, the function `Fee_MainFunction` shall set the module status from `MEMIF_BUSY_INTERNAL` to `MEMIF_IDLE`.
⌋

Note: handling of internal management operations can take more than 1 call of the `Fee_MainFunction`.

  Upstream requirements: , , , ,
⌈
The function `Fee_MainFunction` shall asynchronously handle the read / write / erase / invalidate jobs requested by the upper layer and internal management operations.
⌋

  Upstream requirements:
⌈
The function `Fee_MainFunction` shall check, whether the block requested for reading has been invalidated by the upper layer module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 40. Mandatory 接口
*原文标题：Mandatory Interfaces*

This chapter defines all interfaces which are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module Fee
  Upstream requirements:
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportRuntimeError | Det.h | Service to report runtime errors. If a callout has been configured then this callout shall be called. |
| MemAcc_Cancel | MemAcc.h | Triggers a cancel operation of the pending job for the address area referenced by the addressAreaId. Cancelling affects only jobs in pending state. For any other states, the request will be ignored. |
| MemAcc_Compare | MemAcc.h | Triggers a job to compare the passed data to the memory content of the provided address area. The job terminates, if all bytes matched or a difference was detected. The result of this service can be retrieved using the MemAcc_GetJobResult() API. If the compare operation determined a mismatch, the result code is MEMACC_INCONSISTENT. |
| MemAcc_Erase | MemAcc.h | Triggers an erase job of the given area. |

Triggers an erase job of the given area defined by targetAddress and length. The result of this service can be retrieved using the `Mem_GetJobResult` API.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Optional 接口
*原文标题：Optional Interfaces*

This chapter defines all interfaces which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module Fee
  Upstream requirements:
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |
| MemAcc_BlankCheck | MemAcc.h | Checks if the passed address space is blank, i.e. erased and writeable. The result of this service can be retrieved using the MemAcc_GetJobResult API. If the address area defined by targetAddress and length is blank, the result is MEMACC_OK, otherwise the result is MEMACC_INCONSISTENT. |

⌋

### 42. Configurable 接口
*原文标题：Configurable interfaces*

In this chapter all interfaces are listed where the target function could be configured. The target function is usually a callback function. The names of this kind of interfaces are not fixed because they are configurable.

Note: Depending on the implementation of the modules making up the NV memory stack, callback routines invoked by the FEE module may be called on interrupt level. The implementor of the module providing these routines therefore has to make sure that their runtime is reasonably short, i.e. since callbacks may be propagated upward through several software layers. Whether callback routines are allowable / feasible on interrupt level depends on the project specific needs (reaction time) and limitations (runtime in interrupt context). Therefore system design has to make sure that the configuration of the involved modules meets those requirements.

  Upstream requirements:
⌈
The FEE module shall call the function defined in the configuration parameter FeeNvmJobEndNotification upon successful end of an asynchronous operation and after performing all necessary internal management operations:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 26 章（内容从略，见纯文本全文）

43. 时序图
44. Fee_Init
45. Fee_Write
46. Fee_Cancel
47. 配置规范
48. Containers and 配置 parameters
49. Fee
50. FeeGeneral
51. FeeBlockConfiguration
52. 发布信息
53. FeePublishedInformation
54. 附录
55. 不适用需求
56. Change history of AUTOSAR traceable items
57. Traceable item history of this document according to AUTOSAR Release R26-11
58. Added 规范 Items in R26-11
59. Changed 规范 Items in R26-11
60. Deleted 规范 Items in R26-11
61. Traceable item history of this document according to AUTOSAR Release R25-11
62. Added 规范 Items in R25-11
63. Changed 规范 Items in R25-11
64. Deleted 规范 Items in R25-11
65. Traceable item history of this document according to AUTOSAR Release R24-11
66. Added 规范 Items in R24-11
67. Changed 规范 Items in R24-11
68. Deleted 规范 Items in R24-11
