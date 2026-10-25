# Specification of EEPROM Abstraction (`EEPROMAbstraction`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 287 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_EEPROMAbstraction_287\AUTOSAR_CP_SWS_EEPROMAbstraction.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_EEPROMAbstraction_287\AUTOSAR_CP_SWS_EEPROMAbstraction.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_EEPROMAbstraction_287\zzgen\CP_SWS_EEPROMAbstraction.complete.txt`

## 文档简介

This specification describes the functionality, API and configuration of the EEPROM Abstraction Layer (see Figure ).

The EEPROM Abstraction (EA) abstracts from the device specific addressing scheme and segmentation and provides the upper layers with a virtual addressing scheme and segmentation as well as a "virtually" unlimited number of erase cycles.

## 模块依赖

This module depends on the capabilities of the underlying EEPROM driver as well as the configuration of the NVRAM manager.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and configuration of the EEPROM Abstraction Layer (see Figure ).

The EEPROM Abstraction (EA) abstracts from the device specific addressing scheme and segmentation and provides the upper layers with a virtual addressing scheme and segmentation as well as a "virtually" unlimited number of erase cycles.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

Acronyms and abbreviations which have a local scope and therefore are not contained in the AUTOSAR glossary must appear in a local glossary.

| Abbreviation / Acronym: | Description: |
|---|---|
| Address Area | Contiguous memory area in the logical address space |

Typically multiple physical memory sectors are combined to one

logical address area.
| EA | EEPROM Abstraction |
|---|---|
| EEPROM | Electrically Erasable and Programmable ROM (Read Only Memory) |
| FEE | Flash EEPROM Emulation |
| LSB | Least significant bit / byte (depending on context). Here it's bit. |
| Mem | Memory Driver |
| MemAcc | Memory Access |
| MemIf | Memory Abstraction Interface |
| MSB | Most significant bit / byte (depending on context). Here it's bit. |
| NvM | NVRAM Manager |
| NVRAM | Non-volatile RAM (Random Access Memory) |
| NVRAM block | Management unit as seen by the NVRAM Manager |
| (Logical) block | Smallest writable / erasable unit as seen by the modules user. Consists of one or more virtual pages. |
| Virtual page | May consist of one or several physical pages to ease handling of logical blocks and address calculation. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for EEEPROM Abstraction.

Thus, the specification SWS BSW General shall be considered as additional and required specification for EEEPROM Abstraction.

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

This module depends on the capabilities of the underlying EEPROM driver as well as the configuration of the NVRAM manager.

### 10. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and , and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| List possible error notifications |  |  |
| Parameters shall have a type |  |  |
| API handling in uninitialized state |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| The FEE and EA modules shall allow the configuration of the alignment of the start and end addresses of logical blocks |  |  |
| The FEE and EA modules shall allow the configuration of a required number of write cycles for each logical block |  |  |
| The FEE and EA modules shall provide upper layer modules with a virtual 32bit address space |  |  |
| The start address for a block er |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能规范
*原文标题：Functional specification*

### 12. 通用行为
*原文标题：General behavior*

Upstream requirements:
⌈
The EEPROM Abstraction (EA) shall only accept one job at a time, i.e. the module shall not provide a queue for pending jobs (that's the job of the NVRAM Manager).
⌋

Note: Since the NvM is the only caller for this module and in order to keep this module reasonably small, the modules functions shall not check, whether the module is currently busy or not. It is the responsibility of the NvM to serialize the pending jobs and only start a new job after the previous one has been finished or canceled.

### 13. Addressing scheme and segmentation

The EEPROM Abstraction (EA) provides upper layers with a 32bit virtual linear address space and uniform segmentation scheme. This virtual 32bit addresses consists of

* a 16bit block number - allowing a (theoretical) number of 65536 logical blocks
* a 16bit block offset - allowing a (theoretical) block size of 64Kbyte per block

The 16bit block number represents a configurable (virtual) paging mechanism. The values for this address alignment can be derived from that of the underlying EEPROM driver and device. This virtual paging is configurable via the parameter `EA_VIRTUAL_PAGE_SIZE`.

  Upstream requirements: ,
⌈
The configuration of the Ea module shall be such that the virtual page size (defined in `EA_VIRTUAL_PAGE_SIZE`) is an integer multiple of the physical page size, i.e. it is not allowed to configure a smaller virtual page than the actual physical page size.
⌋

Example:

The size of a virtual page is configured to be eight bytes, thus the address alignment is eight bytes. The logical block with block number 1 is placed at physical address x. The logical block with the block number 2 then would be placed at x+8, block number 3 would be placed at x+16.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Address calculation

Upstream requirements:
⌈
Depending on the implementation of the EA module and the exact address format used, the functions of the EA module shall combine the 16bit block number and 16bit block offset to derive the physical EEPROM address needed for the underlying EEPROM driver.
⌋

Note: The exact address format needed by the underlying EEPROM driver and therefore the mechanism how to derive the physical EEPROM address from the given 16bit block number and 16bit block offset depends on the EEPROM device and the implementation of the EEPROM device driver and can therefore not be specified in this document.

  Upstream requirements:
⌈
Only those bits of the 16bit block number, that do not denote a specific dataset or redundant copy shall be used for address calculation.
⌋

Note: Since this information is needed by the NVRAM manager, the number of bits to encode this can be configured for the NVRAM manager with the parameter `NVM_DATASET_SELECTION_BITS`.

Example: Dataset information is configured to be encoded in the four LSB's of the 16bit block number (allowing for a maximum of 16 datasets per NVRAM block and a total of 4094 NVRAM blocks).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Limitation of erase / write cycles

Upstream requirements:
⌈
The configuration of the Ea module shall define the expected number of erase/write cycles for each logical block in the configuration parameter EaNumberOfWriteCycles.
⌋

  Upstream requirements:
⌈
If the underlying EEPROM device or device driver does not provide at least the configured number of erase/write cycles per physical memory cell (given in the parameter EepAllowedWriteCycles), the EA module shall provide mechanisms to spread the erase/ write access such that the physical device is not overstressed. This shall also apply to all management data used internally by the EA module.
⌋

Example: The logical block number 1 is configured for an expected 500.000 write cycles, the underlying EEPROM device and device driver are only specified for 100.000 erase cycles. In this case the EA module has to provide (at least) five separate memory areas and alternate the access between those areas internally, so that each physical memory location is only erased for a maximum of the specified 100.000 cycles.

### 16. 处理 of "immediate" 数据
*原文标题：Handling of "immediate" data*

Blocks, containing immediate data, have to be written instantaneously, i.e. such blocks shall be writable without the need, to first erase the corresponding memory area (e.g. by using pre-erased memory). An ongoing lower priority read / erase / write or compare job shall be canceled by the NVRAM manager before immediate data is written.

Note: A running operation on the hardware (e.g. writing one page or erasing one sector) can usually not be aborted once it has been started. The maximum time of the longest hardware operation thus has to be accepted as delay even for immediate data.

Example: Three blocks with 10 bytes each have been configured for immediate data. The EA module / configuration tool reserves these 30 bytes (plus the implementation specific overhead per block / page if needed) for use by this immediate data only. That is this memory area shall not be used for storage of other data blocks.

Now, the NVRAM manager has requested the EA module to write a data block of 100 bytes. While this block is being written a situation occurs that one (or several) of the immediate data blocks need to be written.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Managing block consistency information

Upstream requirements:
⌈
The Ea module shall manage for each block the information, whether this block is "correct" from the point of view of the EA module or not. This consistency information shall only concern the internal handling of the block, not the block's contents.
⌋

  Upstream requirements:
⌈
When a block write operation is started the EA module shall mark the corresponding block as inconsistent . Upon the successful end of the block write operation, the EA module shall mark the block as consistent (again).
⌋

Note: This internal management information should not be mixed up with the validity information of a block which can be manipulated by using the `Ea_InvalidateBlock` service, i.e. the EA module shall be able to distinguish between an inconsistent block and a block that has been deliberately invalidated by the upper layer.

### 18. Buffer Alignment

⌈
The Ea shall align internal buffers to the EaBufferAlignmentValueRef.
⌋

⌈
The Ea shall align read request to the EaMinimumReadPageSize.
⌋

### 19. 错误分类
*原文标题：Error Classification*

### 20. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Ea
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called while module is not (yet) initialized | EA_E_UNINIT | 0x01 |
| API service called with invalid block number | EA_E_INVALID_BLOCK_NO | 0x02 |
| API service called with invalid block offset | EA_E_INVALID_BLOCK_OFS | 0x03 |
| API service called with invalid pointer argument | EA_E_PARAM_POINTER | 0x04 |
| API service called with invalid block length information | EA_E_INVALID_BLOCK_LEN | 0x05 |

⌋

### 21. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Ea
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called while module is busy | EA_E_BUSY | 0x06 |
| Ea_Cancel called while no job was pending | EA_E_INVALID_CANCEL | 0x08 |

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

Definition of imported datatypes of module Ea
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
The types mentioned in `SWS_Ea_00083` shall not be changed or extended for a specific EA module or hardware platform.
⌋

### 26. 类型定义
*原文标题：Type definitions*

Definition of datatype `Ea_ConfigType`
  Upstream requirements:
⌈
| Name | Ea_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | Configuration data structure of the Ea module. | < |
| Available via | Ea.h | < |

⌋

### 27. 功能定义
*原文标题：Function definitions*

### 28. Ea_Init

Definition of API function `Ea_Init`
  Upstream requirements:
⌈
| Service Name | Ea_Init | < |
|---|---|---|
| Syntax | void Ea_Init ( |  |

  const `Ea_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the selected configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the EEPROM abstraction module. | < |
| Available via | Ea.h | < |

⌋

  Upstream requirements:
⌈
The configuration pointer ConfigPtr shall always have a `NULL_PTR` value.
⌋

Note: the Configuration pointer ConfigPtr is currently not used and shall therefore be set `NULL_PTR` value.

  Upstream requirements:
⌈
The function `Ea_Init` shall shall set the module state from `MEMIF_UNINIT` to `MEMIF_BUSY_INTERNAL` once it starts the module's initialization.
⌋

  Upstream requirements:
⌈
If initialization is finished within `Ea_Init`, the function `Ea_Init` shall set the module state from `MEMIF_BUSY_INTERNAL` to `MEMIF_IDLE` once initialization has been successfully finished.
⌋

Note: The Ea module's environment shall not call the function `Ea_Init` during a running operation of the EA module.

### 29. Ea_Read

Definition of API function `Ea_Read`
  Upstream requirements:
⌈
| Service Name | Ea_Read | < |
|---|---|---|
| Syntax | Std_ReturnType Ea_Read ( |  |

  uint16 BlockNumber,
  uint16 BlockOffset,
  uint8* DataBufferPtr,
  uint16 Length
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockNumber | Number of logical block, also denoting start address of that block in EEPROM. |
| ^ | BlockOffset | Read address offset inside the block |
| ^ | Length | Number of bytes to read |
| Parameters (inout) | None | < |
| Parameters (out) | DataBufferPtr | Pointer to data buffer |
| Return value | Std_ReturnType | E_OK: The requested job has been accepted by the module. E_NOT_OK: The requested job has not been accepted by the EA module. |
| Description | Reads Length bytes of block Blocknumber at offset BlockOffset into the buffer DataBufferPtr. | < |
| Available via | Ea.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Ea_Read` shall take the block number and offset and calculate the corresponding memory read address.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Ea_Write

Definition of API function `Ea_Write`
  Upstream requirements:
⌈
| Service Name | Ea_Write | < |
|---|---|---|
| Syntax | Std_ReturnType Ea_Write ( |  |

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
| Return value | Std_ReturnType | E_OK: The requested job has been accepted by the module. E_NOT_OK: The requested job has not been accepted by the EA module. |
| Description | Writes the contents of the DataBufferPtr to the block BlockNumber. | < |
| Available via | Ea.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Ea_Write` shall take the block number and calculate the corresponding memory write address. The block offset shall be fixed to zero for this address calculation.
⌋

  Upstream requirements:
⌈
The function `Ea_Write` shall set the length parameter for the write job to the length configured for this logical block.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Ea_Cancel

Definition of API function `Ea_Cancel`
  Upstream requirements:
⌈
| Service Name | Ea_Cancel | < |
|---|---|---|
| Syntax | void Ea_Cancel ( |  |

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
| Description | Cancels the ongoing asynchronous operation. | < |
| Available via | Ea.h | < |

⌋

  Upstream requirements:
⌈
If development error detection for the module EA is enabled: the function `Ea_Cancel` shall check if the module state is `MEMIF_UNINIT`. If this is the case, the function `Ea_Cancel` shall raise the development error `EA_E_UNINIT` and return to the caller without changing any internal variables.
⌋

  Upstream requirements:
⌈
If the current module status is `MEMIF_BUSY` (i.e. the request to cancel a pending job is accepted by the function `Ea_Cancel`), the function `Ea_Cancel` shall call the cancel function of the underlying EEPROM driver.
⌋

  Upstream requirements:
⌈
If the current module status is `MEMIF_BUSY` (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Ea_GetStatus

Definition of API function `Ea_GetStatus`
⌈
| Service Name | Ea_GetStatus | < |
|---|---|---|
| Syntax | MemIf_StatusType Ea_GetStatus ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | MemIf_StatusType | MEMIF_UNINIT: The EA module has not been initialized (yet). MEMIF_IDLE: The EA module is currently idle. MEMIF_BUSY: The EA module is currently busy. MEMIF_BUSY_INTERNAL: The EA module is currently busy with internal management operations. |
| Description | Service to return the Status. | < |
| Available via | Ea.h | < |

⌋

⌈
The function `Ea_GetStatus` shall return `MEMIF_UNINIT` if the module has not (yet) been initialized.
⌋

⌈
The function `Ea_GetStatus` shall return `MEMIF_IDLE` if the module is neither processing a request from the upper layer nor is it doing an internal management operation.
⌋

⌈
The function `Ea_GetStatus` shall return `MEMIF_BUSY` if it is currently processing a request from the upper layer.
⌋

⌈
The function `Ea_GetStatus` shall return `MEMIF_BUSY_INTERNAL`, if an internal management operation is currently ongoing.
⌋

Note: Internal management operation may e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Ea_GetJobResult

Definition of API function `Ea_GetJobResult`
⌈
| Service Name | Ea_GetJobResult | < |
|---|---|---|
| Syntax | MemIf_JobResultType Ea_GetJobResult ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | MemIf_JobResultType | MEMIF_JOB_OK: The last job has been finished successfully. MEMIF_JOB_PENDING: The last job is waiting for execution or currently being executed. MEMIF_JOB_CANCELED: The last job has been canceled (which means it failed). MEMIF_JOB_FAILED: The last job was not finished successfully (it failed). MEMIF_BLOCK_INCONSISTENT: The requested block is inconsistent, it may contain corrupted data. MEMIF_BLOCK_INVALID: The requested block has been invalidated, the requested operation can not be performed. |
| Description | Service to return the JobResult. | < |
| Available via | Ea.h | < |

⌋

  Upstream requirements:
⌈
If development error detection for the module EA is enabled: the function `Ea_GetJobResult` shall check if the module state is `MEMIF_UNINIT`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Ea_InvalidateBlock

Definition of API function `Ea_InvalidateBlock`
  Upstream requirements:
⌈
| Service Name | Ea_InvalidateBlock | < |
|---|---|---|
| Syntax | Std_ReturnType Ea_InvalidateBlock ( |  |

  uint16 BlockNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockNumber | Number of logical block, also denoting start address of that block in EEPROM. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: The requested job has been accepted by the module. E_NOT_OK - only if DET is enabled: The requested job has not been accepted by the EA module. |
| Description | Invalidates the block BlockNumber. | < |
| Available via | Ea.h | < |

⌋

  Upstream requirements:
⌈
The function `Ea_InvalidateBlock` shall take the block number and calculate the corresponding memory block address.
⌋

  Upstream requirements:
⌈
Depending on implementation, the function `Ea_InvalidateBlock` shall invalidate the block <BlockNumber> by either calling the erase function of the underlying device driver or changing some module internal management information accordingly.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Ea_EraseImmediateBlock

Definition of API function `Ea_EraseImmediateBlock`
  Upstream requirements:
⌈
| Service Name | Ea_EraseImmediateBlock | < |
|---|---|---|
| Syntax | Std_ReturnType Ea_EraseImmediateBlock ( |  |

  uint16 BlockNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | BlockNumber | Number of logical block, also denoting start address of that block in EEPROM. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: The requested job has been accepted by the module. E_NOT_OK - only if DET is enabled: The requested job has not been accepted by the EA module. |
| Description | Erases the block BlockNumber. | < |
| Available via | Ea.h | < |

⌋

Note: The function `Ea_EraseImmediateBlock` shall only be called by e.g. diagnostic or similar system services to pre-erase the area for immediate data if necessary.

  Upstream requirements: ,
⌈
The function `Ea_EraseImmediateBlock` shall take the block number and calculate the corresponding memory block address. The block offset shall be fixed to zero for this address calculation.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Callback 通知
*原文标题：Callback notifications*

This chaper lists all functions provided by the Ea module to lower layer modules.

Note: Depending on the implementation of the modules making up the NV memory stack, callback routines provided by the EA module may be called on interrupt level. The implementation of the EA module therefore has to make sure that the runtime of those routines is reasonably short, i.e. since callbacks may be propagated upward through several software layers. Whether callback routines are allowable / feasible on interrupt level depends on the project specific needs (reaction time) and limitations (runtime in interrupt context). Therefore system design has to make sure that the configuration of the involved modules meets those requirements.

### 37. Ea_JobEndNotification

Definition of callback function `Ea_JobEndNotification`
⌈
| Service Name | Ea_JobEndNotification | < |
|---|---|---|
| Syntax | void Ea_JobEndNotification ( |  |

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
| Available via | Ea.h | < |

⌋

The underlying EEPROM driver shall call the function `Ea_JobEndNotification` to report the successful end of an asynchronous operation.

⌈
If the job result is currently `MEMIF_JOB_PENDING`, the function `Ea_JobEndNotification` shall set the job result to `MEMIF_JOB_OK`, else it shall leave the job result untouched.
⌋

⌈
The function `Ea_JobEndNotification` shall perform any necessary block management operations and shall call the corresponding callback routine of the upper layer module (`Ea_NvMJobEndNotification`).
⌋

⌈
The function `Ea_JobEndNotification` shall perform any necessary block management and error handling operations and shall call the corresponding callback routine of the upper layer module (`Ea_NvMJobErrorNotification`).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Scheduled functions

These functions are directly called by the Basic Software Scheduler. The following functions shall have no return value and no parameter. All functions shall be non re-entrant.

### 39. Ea_MainFunction

Definition of scheduled function `Ea_MainFunction`
  Upstream requirements:
⌈
| Service Name | Ea_MainFunction | < |
|---|---|---|
| Syntax | void Ea_MainFunction ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x12 | < |
| Description | Service to handle the requested jobs and the internal management operations. | < |
| Available via | SchM_Ea.h | < |

⌋

Note: The cycle time for the function `Ea_MainFunction` should be the same as that configured for the underlying EEPROM driver.

  Upstream requirements:
⌈
If the module initialization (started in the function `Ea_Init`) is completed in the module's main function, the function `Ea_MainFunction` shall set the module status from `MEMIF_BUSY_INTERNAL` to `MEMIF_IDLE` once initialization of the module has been successfully finished.
⌋

⌈
The function `Ea_MainFunction` shall asynchronously handle the read / write / erase / invalidate jobs requested by the upper layer and internal management operations.
⌋

  Upstream requirements:
⌈
The function `Ea_MainFunction` shall check, whether the block requested for reading has been invalidated by the upper layer module. If so, the function `Ea_MainFunction` shall set the job result to `MEMIF_BLOCK_INVALID` and call the job error notification function if configured.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 41. Mandatory 接口
*原文标题：Mandatory Interfaces*

This chapter defines all interfaces which are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module Ea
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportRuntimeError | Det.h | Service to report runtime errors. If a callout has been configured then this callout shall be called. |
| MemAcc_Cancel | MemAcc.h | Triggers a cancel operation of the pending job for the address area referenced by the addressAreaId. Cancelling affects only jobs in pending state. For any other states, the request will be ignored. |
| MemAcc_Erase | MemAcc.h | Triggers an erase job of the given area. |

Triggers an erase job of the given area defined by targetAddress and length. The result of this service can be retrieved using the `Mem_GetJobResult` API. If the erase operation was successful, the result of the job is `MEM_JOB_OK`. If the erase operation failed, e.g. due to a hardware issue, the result of the job is `MEM_JOB_FAILED`.
| MemAcc_GetJobResult | MemAcc.h | Returns the consolidated job result of the address area referenced by addressAreaId. |
|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Optional 接口
*原文标题：Optional Interfaces*

This chapter defines all interfaces which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module Ea
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |

⌋

### 其余 23 章（内容从略，见纯文本全文）

43. Configurable 接口
44. 时序图
45. Ea_Init
46. Ea_Write
47. Ea_Cancel
48. 配置规范
49. Containers and 配置 parameters
50. Ea
51. EaGeneral
52. EaBlockConfiguration
53. 发布信息
54. EaPublishedInformation
55. 附录
56. 不适用需求
57. Change history of AUTOSAR traceable items
58. Traceable item history of this document according to AUTOSAR Release R25-11
59. Added 规范 Items in R25-11
60. Changed 规范 Items in R25-11
61. Deleted 规范 Items in R25-11
62. Traceable item history of this document according to AUTOSAR Release R24-11
63. Added 规范 Items in R24-11
64. Changed 规范 Items in R24-11
65. Deleted 规范 Items in R24-11
