# Specification of NVRAM Manager (`NVRAMManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 033 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_NVRAMManager_033\AUTOSAR_CP_SWS_NVRAMManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_NVRAMManager_033\AUTOSAR_CP_SWS_NVRAMManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_NVRAMManager_033\zzgen\CP_SWS_NVRAMManager.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration of the AUTOSAR Basic Software module NVRAM Manager (NvM).

The NvM module shall provide services to ensure the data storage and maintenance of NV (non volatile) data according to their individual requirements in an automotive environment. The NvM module shall be able to administrate the NV data of an EEPROM and/or a FLASH EEPROM emulation device.

The NvM module shall provide the required synchronous/asynchronous services for the management and the maintenance of NV data (init/read/write/control).

The relationship between the different blocks can be visualized in the following picture:

-

## 模块依赖

This section describes the relations to other modules within the basic software.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration of the AUTOSAR Basic Software module NVRAM Manager (NvM).

The NvM module shall provide services to ensure the data storage and maintenance of NV (non volatile) data according to their individual requirements in an automotive environment. The NvM module shall be able to administrate the NV data of an EEPROM and/or a FLASH EEPROM emulation device.

The NvM module shall provide the required synchronous/asynchronous services for the management and the maintenance of NV data (init/read/write/control).

The relationship between the different blocks can be visualized in the following picture:

-

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the NvM module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| * Basic Storage Object | * A "Basic Storage Object" is the smallest entity of a "NVRAM block". Several "Basic Storage Objects" can be used to build a NVRAM Block. A "Basic Storage Object" can reside in different memory locations (RAM/ROM/NV memory). |
| * NVRAM Block | * The "NVRAM Block" is the entire structure, which is needed to administrate and to store a block of NV data. |
| * NV data | * The data to be stored in Non-Volatile memory. |
| * Block Management Type | * Type of the NVRAM Block. It depends on the (configurable) individual composition of a NVRAM Block in chunks of different mandatory/optional Basic Storage Objects and the subsequent handling of this NVRAM block. |
| * RAM Block | * The "RAM Block" is a "Basic Storage Object". It represents the part of a "NVRAM Block" which resides in the RAM. |

* See
| * ROM Block | * The "ROM Block" is a "Basic Storage Object". It represents the part of a "NVRAM Block" which resides in the ROM. The "ROM Block" is an optional part of a "NVRAM Block". |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for NVRAMManager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for NVRAMManager.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

Limitations are given mainly by the finite number of "Block Management Types" and their individual treatment of NV data. These limits can be reduced by an enhanced user defined management information, which can be stored as a structured part of the real NV data. In this case the user defined management information has to be interpreted and handled by the application at least.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. Conflicts

The NvM can be configured to use functionality from other modules or integrator code. Examples include the en/decryption of block data using Csm or the compression of block data. It is the responsibility of the integrator to ensure that:

* the required functionality is available at the time NvM uses it (e.g. the called Csm is already initialized ; needed main functions in called modules are executed; ...)
* the required time is available (e.g. cryptographic algorithms may need some time and therefore the read/write functionality of the NvM may take much longer for blocks which need an en/decryption)

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section describes the relations to other modules within the basic software.

### 11. 文件结构
*原文标题：File structure*

### 12. 头文件结构
*原文标题：Header file structure*

The include file structure shall be as follows:

⌈
NvM module shall include NvM.h, Dem.h, MemIf.h.
⌋

⌈
Only NvM.h shall be included by the upper layer.
⌋

### 13. 存储抽象模块
*原文标题：Memory abstraction modules*

The memory abstraction modules abstract the NvM module from the subordinated drivers which are hardware dependent ]. The memory abstraction modules provide a runtime translation of each block access initiated by the NvM module to select the corresponding driver functions which are unique for all configured EEPROM or FLASH storage devices. The memory abstraction module is chosen via the NVRAM block device ID which is configured for each NVRAM block. NvM access the memory abstraction modules through memory abstraction interface module, MemIf. , , ]

### 14. CRC 模块
*原文标题：CRC module*

The NvM module uses CRC generation routines (8/16/32 bit) to check and to generate CRC for NVRAM blocks as a configurable option. The CRC routines have to be provided externally ].]

### 15. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The scheduling strategy that is built inside the Basic Software Modules shall be compatible with the strategy used in the system |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| For each callback function it shall be specified if it is called from interrupt context or not |  |  |
| Classification of development errors |  |  |
| AUTOSAR Basic Software Modules callback functions are allowed to have parameters |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| The Basic Software Module specifications shall specify which other configuration files from ot |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能规范
*原文标题：Functional specification*

### 17. 基础架构指南
*原文标题：Basic architecture guidelines*

### 18. Layer 结构
*原文标题：Layer structure*

The figure below shows the communication interaction of module NvM.

### 19. Addressing scheme for the 存储 hardware 抽象
*原文标题：Addressing scheme for the memory hardware abstraction*

Upstream requirements: , , , , ,
⌈
The Memory Abstraction Interface, the underlying Flash EEPROM Emulation and EEPROM Abstraction Layer provide the NvM module with a virtual linear 32bit address space which is composed of a 16bit block number and a 16bit block address offset.
⌋

Hint: According to , the NvM module allows for a (theoretical) maximum of 65536 logical blocks, each logical block having a (theoretical) maximum size of 64 Kbytes.

  Upstream requirements: , , , ,
⌈
The NvM module shall further subdivide the 16bit Fee/Ea block number into the following parts:

* NV block base number (`NVM_NV_BLOCK_BASE_NUMBER`) with a bit width of (16 -`NVM_DATASET_SELECTION_BITS`)
* Data index with a bit width of (`NVM_DATASET_SELECTION_BITS`)
⌋

⌈
Handling/addressing of redundant NVRAM blocks shall be done towards the memory hardware abstraction in the same way like for dataset NVRAM blocks, i.e. the redundant NV blocks shall be managed by usage of the configuration parameter NvMDatasetSelectionBits.
⌋

  Upstream requirements:
⌈
The NV block base number (`NVM_NV_BLOCK_BASE_NUMBER`) shall be located in the most significant bits of the Fee/Ea block number.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 示例
*原文标题：Examples*

To clarify the previously described addressing scheme which is used for NVRAM manager \leftrightarrow memory hardware abstraction interaction, the following examples shall help to understand the correlations between the configuration parameters NvMNvBlockBaseNumber, NvMDatasetSelectionBits on NVRAM manager side and `EA_BLOCK_NUMBER` / `FEE_BLOCK_NUMBER` on memory hardware abstraction side (see ).

For the given examples A and B a simple formula is used:

FEE/`EA_BLOCK_NUMBER` = (NvMNvBlockBaseNumber  NvMDatasetSelectionBits) + DataIndex.

Example A:

* The configuration parameter NvMDatasetSelectionBits is configured to be 2. This leads to the result that 14 bits are available as range for the configuration parameter NvMNvBlockBaseNumber.
* Range of NvMNvBlockBaseNumber: 0x1..0x3FFE
* Range of data index: 0x0..0x3(=2^NvMDatasetSelectionBits-1)
* Range of `FEE_BLOCK_NUMBER`/`EA_BLOCK_NUMBER`: 0x4..0xFFFB

With this configuration the FEE/`EA_BLOCK_NUMBER` computes using the formula mentioned before should look like in the examples below:

For a native NVRAM block with NvMNvBlockBaseNumber = 2:

* NV block is accessed with FEE/`EA_BLOCK_NUMBER` = 8

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 基础 storage objects
*原文标题：Basic storage objects*

### 22. NV block

⌈
The NV block is a basic storage object and represents a memory area consisting of NV user data and (optionally) a CRC value and (optionally) a NV block header.
⌋

Note: This figure does not show the physical memory layout of an NV block. Only the logical clustering is shown.

### 23. RAM block

⌈
The RAM block is a basic storage object and represents an area in RAM consisting of user data and (optionally) a CRC value and (optionally) a NV block header.
⌋

⌈
Restrictions on CRC usage on RAM blocks. CRC is only available if the corresponding NV block(s) also have a CRC. CRC has to be of the same type as that of the corresponding NV block(s).
⌋

Note: For more information on Crc configuration, see chapter .

⌈
The user data area of a RAM block can reside in a different RAM address location (global data section) than the state of the RAM block.
⌋

⌈
The data area of a RAM block shall be accessible from NVRAM Manager and from the application side (data passing from/to the corresponding NV block).
⌋

Note: This figure does not show the physical memory layout of a RAM block. Only the logical clustering is shown.

As the NvM module doesn't support alignment, this could be managed by configuration, i.e. the block length could be enlarged by adding padding to meet alignment requirements.

⌈
The RAM block data shall contain the permanently or temporarily assigned user data.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. ROM block

⌈
The ROM block is a basic storage object, resides in the ROM (FLASH) and is used to provide default data in case of an empty or damaged NV block.
⌋

### 25. Administrative block

⌈
The Administrative block shall be located in RAM and shall contain a block index which is used in association with Dataset NV blocks. Additionally, attribute/error/status information of the corresponding NVRAM block shall be contained.
⌋

⌈
The NvM module shall use state information of the permanent RAM block or of the RAM mirror in the NvM module in case of explicit syncronization (invalid/valid) to determine the validity of the permanent RAM block user data.
⌋

  Upstream requirements:
⌈
The RAM block state "invalid" indicates that the data area of the respective RAM block is invalid. The RAM block state "valid" indicates that the data area of the respective RAM block is valid.
⌋

⌈
The value of "invalid" shall be represented by all other values except "valid".
⌋

⌈
The Administrative block shall be invisible for the application and is used exclusively by the NvM module for security and administrative purposes of the RAM block and the NVRAM block itself.
⌋

⌈
The NvM module shall use an attribute field to manage the NV block write protection in order to protect/unprotect a NV block data field.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. NV Block Header

⌈
The NV Block header shall be included first in the NV Block, if the mechanism Static Block ID is enabled.
⌋

### 27. Block 管理类型
*原文标题：Block management types*

### 28. Block 管理类型概述
*原文标题：Block management types overview*

⌈
The following types of NVRAM storage shall be supported by the NvM module implementation:

* `NVM_BLOCK_NATIVE`
* `NVM_BLOCK_REDUNDANT`
* `NVM_BLOCK_DATASET`
⌋

⌈
`NVM_BLOCK_NATIVE` type of NVRAM storage shall consist of the following basic storage objects:

* NV Blocks: 1
* RAM Blocks: 1
* ROM Blocks: 0..1
* Administrative Blocks:1
⌋

⌈
`NVM_BLOCK_REDUNDANT` type of NVRAM storage shall consist of the following basic storage objects:

* NV Blocks: 2
* RAM Blocks: 1
* ROM Blocks: 0..1
* Administrative Blocks:1
⌋

⌈
`NVM_BLOCK_DATASET` type of NVRAM storage shall consist of the following basic storage objects:

* NV Blocks: 1..(m<256)*
* RAM Blocks: 1
* ROM Blocks: 0..n
* Administrative Blocks:1
* * The number of possible datasets depends on the configuration parameter NvMDatasetSelectionBits.
⌋

### 29. NVRAM block 结构
*原文标题：NVRAM block structure*

⌈
The NVRAM block shall consist of the mandatory basic storage objects NV block, RAM block and Administrative block.
⌋

⌈
The basic storage object ROM block is optional.
⌋

⌈
The composition of any NVRAM block is fixed during configuration by the corresponding NVRAM block descriptor.
⌋

⌈
All address offsets are given relatively to the start addresses of RAM or ROM in the NVRAM block descriptor. The start address is assumed to be zero.
⌋

Hint: A device specific base address or offset will be added by the respective device driver if needed.

For details of the NVRAM block descriptor see chapter .

### 30. NVRAM block descriptor table

⌈
A single NVRAM block to deal with will be selected via the NvM module API by providing a subsequently assigned Block ID.
⌋

⌈
All structures related to the NVRAM block descriptor table and their addresses in ROM (FLASH) have to be generated during configuration of the NvM module.
⌋

### 31. Native NVRAM block

The Native NVRAM block is the simplest block management type. It allows storage to/retrieval from NV memory with a minimum of overhead.

⌈
The Native NVRAM block consists of a single NV block, RAM block and Administrative block.
⌋

### 32. Redundant NVRAM block

In addition to the Native NVRAM block, the Redundant NVRAM block provides enhanced fault tolerance, reliability and availability. It increases resistance against data corruption.

⌈
The Redundant NVRAM block consists of two NV blocks, a RAM block and an Administrative block.
⌋

The following figure reflects the internal structure of a redundant NV block:

Note: This figure does not show the physical NV memory layout of a redundant NVRAM block. Only the logical clustering is shown.

⌈
In case one NV Block associated with a Redundant NVRAM block is deemed invalid (e.g. during read), an attempt shall be made to recover the NV Block using data from the incorrupt NV Block.
⌋

⌈
In case the recovery fails then this shall be reported to the DEM using the code `NVM_E_LOSS_OF_REDUNDANCY`.
⌋

Note: "Recovery" denotes the re-establishment of redundancy. This usually means writing the recovered data back to the NV Block.

### 33. Dataset NVRAM block

The Dataset NVRAM block is an array of equally sized data blocks (NV/ROM). The application can at one time access exactly one of these elements.

⌈
The Dataset NVRAM block consists of multiple NV user data, (optionally) CRC areas, (optional) NV block headers, a RAM block and an Administrative block.
⌋

⌈
The index position of the dataset is noticed via a separated field in the corresponding Administrative block.
⌋

⌈
The NvM module shall be able to read all assigned NV blocks.
⌋

⌈
The NvM module shall only be able to write to all assigned NV blocks if (and only if) write protection is disabled.
⌋

⌈
If the basic storage object ROM block is selected as optional part, the index range which normally selects a dataset is extended to the ROM to make it possible to select a ROM block instead of a NV block. The index covers all NV/ROM blocks which may build up the NVRAM Dataset block.
⌋

⌈
The NvM module shall be able to only read optional ROM blocks (default datasets).
⌋

⌈
The NvM module shall treat a write to a ROM block like a write to a protected NV block.
⌋

⌈
The total number of configured datasets (NV+ROM blocks) shall be in the range of 1..255.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. NVRAM 管理器 API 配置 classes
*原文标题：NVRAM Manager API configuration classes*

⌈
To have the possibility to adapt the NvM module to limited hardware resources, three different API configuration classes shall be defined:

* API configuration class 3: All specified API calls are available. A maximum of functionality is supported.
* API configuration class 2: An intermediate set of API calls is available.
* API configuration class 1: Especially for matching systems with very limited hardware resources this API configuration class offers only a minimum set of API calls which are required in any case.
⌋

⌈
API configuration class 3 shall consist of the following API:

* Type 1:
* `NvM_SetDataIndex`(...)
* `NvM_GetDataIndex`(...)
* `NvM_SetBlockProtection`(...)
* `NvM_GetErrorStatus`(...)
* `NvM_SetRamBlockStatus`(...)
* Type 2:
* `NvM_ReadBlock`(...)
* `NvM_WriteBlock`(...)
* `NvM_RestoreBlockDefaults`(...)
* `NvM_EraseNvBlock`(...)
* `NvM_InvalidateNvBlock`(...)
* `NvM_CancelJobs`(...)
* `NvM_ReadPRAMBlock`(...)
* `NvM_WritePRAMBlock`(...)
* `NvM_RestorePRAMBlockDefaults`(...)
* Type 3:
* `NvM_ReadAll`(...)
* `NvM_WriteAll`(...)
* `NvM_CancelWriteAll`(...)
* `NvM_ValidateAll`(...)
* `NvM_FirstInitAll`(...)
* Type 4:
* `NvM_Init`(...)
⌋

⌈
API configuration class 2 shall consist of the following API:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Scan order / priority scheme

Upstream requirements:
⌈
The NvM module shall support a priority based job processing.
⌋

  Upstream requirements:
⌈
By configuration parameter NvMJobPrioritization priority based job processing shall be enabled/disabled.
⌋

Note: For more information on parameter NvMJobPrioritization, see chapter .

  Upstream requirements:
⌈
In case of priority based job processing order, the NvM module shall use two queues, one for immediate write jobs (crash data) another for all other jobs (including immediate read/erase jobs).
⌋

⌈
If priority based job processing is disabled via configuration, the NvM module shall not support immediate write jobs. In this case, the NvM module processes all jobs in FCFS order.
⌋

⌈
The job queue length for multi block requests originating from any of the `NvM_ReadAll`, `NvM_ValidateAll`, `NvM_FirstInitAll` and `NvM_WriteAll` APIs shall be one (only one multi block job is queued).
⌋

⌈
The NvM module shall not interrupt jobs originating from the `NvM_ReadAll` request by other requests.
⌋

Note: The only exception to the rule given in ,  is a write job with immediate priority which shall preempt the running read / write job .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. 通用行为
*原文标题：General behavior*

### 37. 功能性需求
*原文标题：Functional requirements*

⌈
For each asynchronous request, a notification of the caller after completion of the job shall be a configurable option.
⌋

  Upstream requirements:
⌈
The NvM module shall provide a callback interface .
⌋

Hint: The NvM module's environment shall access the non-volatile memory via the NvM module only. It shall not be allowed for any module (except for the NvM module) to access the non-volatile memory directly.

⌈
The NvM module only provides an implicit way of accessing blocks in the NVRAM and in the shared memory (RAM). This means, the NvM module copies one or more blocks from NVRAM to the RAM and the other way round.
⌋

⌈
The application accesses the RAM data directly, with respect to given restrictions (e.g. synchronization).
⌋

⌈
The NvM module shall queue all asynchronous "single block" read/write/control requests if the block with its specific ID is not already queued or currently in progress (multitasking restrictions).
⌋

⌈
The NvM module shall accept multiple asynchronous "single block" requests as long as no queue overflow occurs.
⌋

⌈
The highest priority request shall be fetched from the queues by the NvM module and processed in a serialized order.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. 设计 notes
*原文标题：Design notes*

### 39. NVRAM 管理器启动
*原文标题：NVRAM manager startup*

⌈
`NvM_Init` shall be invoked by the BSW Mode Manager exclusively.
⌋

⌈
Due to strong constraints concerning the ECU startup time, the `NvM_Init` request shall not contain the initialization of the configured NVRAM blocks.
⌋

  Upstream requirements:
⌈
The `NvM_Init` request shall not be responsible to trigger the initialization of underlying drivers and memory hardware abstraction. This shall also be handled by the BSW Mode Manager.
⌋

⌈
The initialization of the RAM data blocks shall be done by another request, namely `NvM_ReadAll`.
⌋

`NvM_ReadAll` shall be called exclusively by BSW Mode Manager.

⌈
Software components which use the NvM module shall be responsible for checking global error/status information resulting from the NvM module startup. The BSW Mode Manager shall use polling by using `NvM_GetErrorStatus`  (reserved block ID 0) or callback notification (configurable option `NvM_MultiBlockCallback`) to derive global error/status information resulting from startup. If polling is used, the end of the NVRAM startup procedure shall be detected by the global error/status `NVM_REQ_OK` or `NVM_REQ_NOT_OK` (during startup `NVM_REQ_PENDING`).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. NVRAM 管理器关机
*原文标题：NVRAM manager shutdown*

⌈
The basic shutdown procedure shall be done by the request `NvM_WriteAll` .
⌋

Hint: `NvM_WriteAll` shall be invoked by the BSW Mode Manager.

### 41. (Quasi) parallel write access to the NvM 模块
*原文标题：(Quasi) parallel write access to the NvM module*

Upstream requirements: ,
⌈
The NvM module shall receive the requests via an asynchronous interface using a queuing mechanism. The NvM module shall process all requests serially depending on their priority.
⌋

### 42. NVRAM block consistency check

Upstream requirements: ,
⌈
The NvM module shall provide implicit techniques to check the data consistency of NVRAM blocks , .
⌋

  Upstream requirements:
⌈
The data consistency check of a NVRAM block shall be done by CRC recalculations of its corresponding NV block(s).
⌋

  Upstream requirements: ,
⌈
The implicit way of a data consistency check shall be provided by configurable options of the internal functions. The implicit consistency check shall be configurable for each NVRAM block and depends on the configurable parameters NvMBlockUseCrc and NvMCalcRamBlockCrc.
⌋

Note: For more information on NvMBlockUseCrc and NvMCalcRamBlockCrc, see chapter .

⌈
NvMBlockUseCrc should be enabled for NVRAM blocks where NvMWriteBlockOnce = TRUE. NvMBlockWriteProt should be disabled for NVRAM blocks where NvMWriteBlockOnce = TRUE, to enable the user to write data to the NVRAM block in case of CRC check is failed.
⌋

⌈
Depending on the configurable parameters NvMBlockUseCrc and NvMCalcRamBlockCrc, NvM module shall allocate memory for the largest CRC used.
⌋

Hint: NvM users should not know anything about CRC memory (e.g. size, location) for their data in a RAM block.

### 43. 错误 recovery
*原文标题：Error recovery*

⌈
The NvM module shall provide techniques for error recovery. The error recovery depends on the NVRAM block management type .
⌋

⌈
The NvM module shall provide error recovery on read for every kind of NVRAM block management type by loading of default values.
⌋

⌈
The NvM module shall provide error recovery on read for NVRAM blocks of block management type `NVM_BLOCK_REDUNDANT` by loading the RAM block with default values.
⌋

⌈
The NvM module shall provide error recovery on write by performing write retries regardless of the NVRAM block management type.
⌋

⌈
The NvM module shall provide read error recovery on startup for all NVRAM blocks with configured RAM block CRC in case of RAM block revalidation failure.
⌋

### 44. Recovery of a RAM block with ROM 数据
*原文标题：Recovery of a RAM block with ROM data*

Upstream requirements: ,
⌈
The NvM module shall provide implicit and explicit recovery techniques to restore ROM data to its corresponding RAM block in case of unrecoverable data inconsistency of a NV block , , .
⌋

### 45. Implicit recovery of a RAM block with ROM default 数据
*原文标题：Implicit recovery of a RAM block with ROM default data*

Upstream requirements:
⌈
The data content of the corresponding NV block shall remain unmodified during the implicit recovery.
⌋

⌈
The implicit recovery shall not be provided during startup (part of `NvM_ReadAll`), neither by `NvM_ReadBlock` nor by `NvM_ReadPRAMBlock` for each NVRAM block when no default data is configured (by the parameter NvMRomBlockDataAddress or NvMInitBlockCallback).
⌋

⌈
The implicit recovery shall not be provided during startup (part of `NvM_ReadAll`), neither by `NvM_ReadBlock` nor by `NvM_ReadPRAMBlock` for each NVRAM block for the following conditions:

* The default data is configured (by the parameter NvMRomBlockDataAddress or the parameter NvMInitBlockCallback).
* The permanent RAM block or the content of the RAM mirror in the NvM module ( in case of explicit synchronization) state is valid and CRC (data) is consistent.
⌋

⌈
The implicit recovery shall not be provided during startup (part of `NvM_ReadAll`), neither by `NvM_ReadBlock` nor by `NvM_ReadPRAMBlock` for each NVRAM block for the following conditions:

* The default data is configured (by the parameter NvMRomBlockDataAddress or the parameter NvMInitBlockCallback).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Explicit recovery of a RAM block with ROM default 数据
*原文标题：Explicit recovery of a RAM block with ROM default data*

⌈
For explicit recovery with ROM block data the NvM module shall provide functions `NvM_RestoreBlockDefaults` and `NvM_RestorePRAMBlockDefaults`  to restore ROM data to its corresponding RAM block.
⌋

⌈
The function `NvM_RestoreBlockDefaults` and `NvM_RestorePRAMBlockDefaults` shall remain unmodified the data content of the corresponding NV block.

Hint: The function `NvM_RestoreBlockDefaults` or `NvM_RestorePRAMBlockDefaults` shall be used by the application to restore ROM data to the corresponding RAM block every time it is needed.
⌋

### 47. 检测 of an incomplete write operation to a NV block
*原文标题：Detection of an incomplete write operation to a NV block*

Upstream requirements:
⌈
The detection of an incomplete write operation to a NV block is out of scope of the NvM module. This is handled and detected by the memory hardware abstraction. The NvM module expects to get information from the memory hardware abstraction if a referenced NV block is invalid or inconsistent and cannot be read when requested. SW-Cs may use `NvM_InvalidateNvBlock` to prevent lower layers from delivering old data.
⌋

### 48. Termination of a single block request

⌈
All asynchronous requests provided by the NvM module (except for `NvM_CancelWriteAll`) shall indicate their result in the designated error/status field of the corresponding Administrative block .
⌋

⌈
The optional configuration parameter NvMSingleBlockCallback configures the notification via callback on the termination of an asynchronous block request (and for `NvM_ReadAll`).
⌋

Note 1: In communication with application SW-C, the ECUC configuration parameter NvMSingleBlockCallback (`ECUC_NvM_00506`) should be configured to the corresponding `Rte_call_`<p>_<o> API.

Note 2: For more information on NvMSingleBlockCallback, see chapter .

### 49. Termination of a multi block request

⌈
The NvM module shall use a separate variable to store the result of an asynchronous multi block request (`NvM_ReadAll`, `NvM_WriteAll` including `NvM_CancelWriteAll`, `NvM_ValidateAll`).
⌋

⌈
The function `NvM_GetErrorStatus`  shall return the most recent error/status information of an asynchronous multi block request (including `NvM_CancelWriteAll`) in conjunction with a reserved block ID value of 0.
⌋

⌈
The result of a multi block request shall represent only a common error/status information.
⌋

⌈
The multi block requests provided by the NvM module shall indicate their detailed error/status information in the designated error/status field of each affected Administrative block.
⌋

⌈
The optional configuration parameter NvMMultiBlockCallback configures the notification via callback on the termination of an asynchronous multi block request.
⌋

Note: For more information on NvMMultiBlockCallback, see chapter .

### 50. 通用处理 of asynchronous requests/ job processing
*原文标题：General handling of asynchronous requests/ job processing*

⌈
Every time when CRC calculation is processed within a request, the NvM module shall calculate the CRC in multiple steps if the referenced NVRAM block length exceeds the number of bytes configured by the parameter NvMCrcNumOfBytes.
⌋

⌈
For CRC calculation, the NvM module shall use initial values which are published by the CRC module.
⌋

⌈
Multiple concurrent single block requests shall be queueable.
⌋

⌈
The NvM module shall interrupt asynchronous request/job processing in favor of jobs with immediate priority (crash data).
⌋

⌈
If the invocation of an asynchronous function on the NvM module leads to a job queue overflow, the function shall return with E_NOT_OK.
⌋

⌈
On successful enqueuing a request, the NvM module shall set the request result of the corresponding NVRAM block to `NVM_REQ_PENDING`.
⌋

⌈
If the NvM module has successfully processed a job, it shall return `NVM_REQ_OK` as request result.
⌋

### 其余 144 章（内容从略，见纯文本全文）

51. NVRAM block write protection
52. RAM block 数据的校验 and modification
53. The VALID / UNCHANGED 状态
54. The VALID / CHANGED 状态
55. The INVALID / UNCHANGED 状态
56. Communication and implicit 同步 between application and NVRAM 管理器
57. User 指南 for Write requests (NvM_WriteBlock or NvM_WritePRAMBlock)
58. User 指南 for Read requests (NvM_ReadBlock or NvM_ReadPRAMBlock)
59. User 指南 for Restore default requests (NvM_RestoreBlockDefaults and NvM_RestorePRAMBlockDefaults)
60. User 指南 for Multi-block read requests (NvM_ReadAll)
61. User 指南 for Multi-block write requests (NvM_WriteAll)
62. User 指南 for Cancel Operation (NvM_CancelWriteAll)
63. User 指南 for modification of administrative blocks
64. Normal and extended runtime preparation of NVRAM blocks
65. Communication and explicit 同步 between application and NVRAM 管理器
66. Write requests (NvM_WriteBlock or NvM_WritePRAMBlock)
67. Read requests (NvM_ReadBlock or NvM_ReadPRAMBlock)
68. Multi block read requests (NvM_ReadAll)
69. Multi block write requests (NvM_WriteAll)
70. Static Block ID Check
71. Read Retry
72. Write Verification
73. Comparing NV 数据 in NvM
74. NvM and BswM interaction
75. Block Compression
76. Block Ciphering
77. 错误分类
78. Development 错误
79. Runtime 错误
80. Production 错误
81. NVM_E_LOSS_OF_REDUNDANCY
82. API 规范
83. Imported 类型
84. 类型定义
85. NvM_ConfigType
86. NvM_MultiBlockRequestType
87. 功能定义
88. Synchronous requests
89. NvM_Init
90. NvM_SetDataIndex
91. NvM_GetDataIndex
92. NvM_SetBlockProtection
93. NvM_GetErrorStatus
94. NvM_GetVersionInfo
95. NvM_SetRamBlockStatus
96. NvM_CancelJobs
97. Asynchronous single block requests
98. NvM_ReadBlock
99. NvM_WriteBlock
100. NvM_RestoreBlockDefaults
101. NvM_EraseNvBlock
102. NvM_InvalidateNvBlock
103. NvM_ReadPRAMBlock
104. NvM_WritePRAMBlock
105. NvM_RestorePRAMBlockDefaults
106. Asynchronous multi block requests
107. NvM_ReadAll
108. NvM_WriteAll
109. NvM_CancelWriteAll
110. NvM_ValidateAll
111. NvM_FirstInitAll
112. Callback 通知
113. NVRAM 管理器 job end 通知 without 错误
114. NVRAM 管理器 job end 通知 with 错误
115. Scheduled functions
116. Expected 接口
117. Mandatory 接口
118. Optional 接口
119. Configurable 接口
120. Single block job end 通知
121. Multi block job end 通知
122. Callback 功能 for block 初始化
123. Callback 功能 for RAM to NvM copy
124. Callback 功能 for NvM to RAM copy
125. API 概述
126. 服务接口
127. Client-Server-Interfaces
128. NvM_Admin
129. NvM_Mirror
130. NvM_NotifyInitBlock
131. NvM_NotifyJobFinished
132. NvM_Service
133. Implementation 数据类型
134. ImplementationDataType NvM_RequestResultType
135. ImplementationDataType NvM_BlockIdType
136. ImplementationDataType NvM_InitBlockRequestType
137. ImplementationDataType NvM_BlockRequestType
138. Ports
139. NvM_PAdmin_{Block}
140. NvM_PM_{Block}
141. NvM_PNIB_{Block}
142. NvM_PNJF_{Block}
143. NvM_PS_{Block}
144. 时序图
145. Synchronous calls
146. NvM_Init
147. NvM_SetDataIndex
148. NvM_GetDataIndex
149. NvM_SetBlockProtection
150. NvM_GetErrorStatus
151. NvM_GetVersionInfo
152. Asynchronous calls
153. Asynchronous call with polling
154. Asynchronous call with callback
155. Cancellation of a Multi Block Request
156. BswM Interraction
157. 配置规范
158. How to read this chapter
159. Containers and 配置 parameters
160. NvM
161. NvMCommon
162. NvMBlockDescriptor
163. NvMInitBlockCallback
164. NvMSingleBlockCallback
165. NvMTargetBlockReference
166. NvMEaRef
167. NvMFeeRef
168. NvmDemEventParameterRefs
169. NvMBlockCiphering
170. 发布信息
171. 附录
172. 不适用需求
173. Change history of AUTOSAR traceable items
174. Traceable item history of this document according to AUTOSAR Release R25-11
175. Added 规范 Items in R25-11
176. Changed 规范 Items in R25-11
177. Deleted 规范 Items in R25-11
178. Added Constraints in R25-11
179. Changed Constraints in R25-11
180. Deleted Constraints in R25-11
181. Traceable item history of this document according to AUTOSAR Release R24-11
182. Added 规范 Items in R24-11
183. Changed 规范 Items in R24-11
184. Deleted 规范 Items in R24-11
185. Added Constraints in R24-11
186. Changed Constraints in R24-11
187. Deleted Constraints in R24-11
188. Traceable item history of this document according to AUTOSAR Release R23-11
189. Added 规范 Items in R23-11
190. Changed 规范 Items in R23-11
191. Deleted 规范 Items in R23-11
192. Added Constraints in R23-11
193. Changed Constraints in R23-11
194. Deleted Constraints in R23-11
