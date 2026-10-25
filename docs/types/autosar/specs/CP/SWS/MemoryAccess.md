# Specification of Memory Access (`MemoryAccess`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1017 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_MemoryAccess_1017\AUTOSAR_CP_SWS_MemoryAccess.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_MemoryAccess_1017\AUTOSAR_CP_SWS_MemoryAccess.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_MemoryAccess_1017\zzgen\CP_SWS_MemoryAccess.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module Memory Access (MemAcc).

The Memory Access module provides access to different memory technology devices by an address-based API. The Memory Access module is always complemented by one or more Memory Driver (Mem). The Memory Access module is memory device technology agnostic and can be used with typical memory devices such as flash, EEPROM, RAM or phase change memory.

The Memory Access module and Memory Driver are located in the same layer of the AUTOSAR architecture as Fls and Eep Driver but split these modules into a hardware independent part (MemAcc) and a hardware dependent part (Mem).

Figure  shows an example architectural overview with different Memory Drivers and upper layers:

## 模块依赖

The MemAcc module has interfaces towards the Flash EEPROM Emulation (Fee), the EEPROM Abstraction (Ea), Bulk Nv Data Manager (BndM), Memory Drivers (Mem), the Default Error Tracer (DET) and, in case of a OTA software update client, also to Complex Device Drivers (CDD). The MemAcc module includes header files of DET and MemMap.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module Memory Access (MemAcc).

The Memory Access module provides access to different memory technology devices by an address-based API. The Memory Access module is always complemented by one or more Memory Driver (Mem). The Memory Access module is memory device technology agnostic and can be used with typical memory devices such as flash, EEPROM, RAM or phase change memory.

The Memory Access module and Memory Driver are located in the same layer of the AUTOSAR architecture as Fls and Eep Driver but split these modules into a hardware independent part (MemAcc) and a hardware dependent part (Mem).

Figure  shows an example architectural overview with different Memory Drivers and upper layers:

### 2. Supported Use-Cases

The combination of MemAcc module and Mem driver supports the following use cases:

* Block based non-volatile memory access for data storage using NvM and Fee or Ea
* OTA software update
* General address-based memory access, e.g. for BndM or flash bootloader usage

Combinations of these use cases are also supported.

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the MemAcc module that are not included in the .

| Abbreviation / Acronym | Description |
|---|---|
| BndM | Bulk Non-Volatile Data Manager |
| ECC | Error Correction Code |
| FOTA | Firmware Over The Air - remote firmware update using wireless communication |
| HSM | Hardware Security Module - dedicated security MCU core |
| OTA | Over The Air - general term for wireless communication between OEM backend and vehicle |
| RWW | Read While Write - capability of a memory device to perform a read operation in one memory bank while at the same time a write/erase operation takes place in another bank |
| SOTA | Software Over The Air - remote software update using wireless communication |

| Terms | Description |
|---|---|
| Address Area | Contiguous memory area in the logical address space Typically multiple physical memory sectors are combined to one logical address area. |
| Bank | Group of sector batches In case a memory technology is segmented in sectors, a bank is an instance of a sector batch group in which no read-while-write operation is permitted. In case of a flash memory device, this typically maps to an individual flash controller. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Physical Segmentation

Figure  gives an overview of the physical segmentation and the according technical terms:

### 5. 相关文档
*原文标题：Related Documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 7. 相关规范
*原文标题：Related Specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for MemAcc.

Thus, the specification SWS BSW General shall be considered as additional and required specification for MemAcc.

### 8. 约束与假设
*原文标题：Constraints and Assumptions*

To be able to control and coordinate the access of shared memory resources, all memory upper layers shall use the MemAcc module to access these shared memory resources. The only exception to this constraint are exclusive memory accesses at discrete points in time.

### 9. 限制
*原文标题：Limitations*

### 10. 通用限制
*原文标题：General Limitations*

The MemAcc module is targeted for address based memory access. File based access is not considered. Block based memory devices like NAND flash devices which require an explicit bad block management are out of scope of this specification.

### 11. 存储 Mapped Access
*原文标题：Memory Mapped Access*

It's not possible to perform a memory-mapped access on a shared memory resource while at the same time, the AUTOSAR memory stack performs an access on a shared memory resource. This restriction applies to memory devices like flash or EEPROM where the memory must be put into a special programming mode in which a concurrent read access is not possible. This restriction applies to internal and external shared memory devices and also affects hardware-based flash EEPROM emulations. In case a memory-mapped access is needed, MemAcc coordination must be implemented at the application level. The application must ensure that no concurrent access is performed on the shared memory.

### 12. 适用的车型领域
*原文标题：Applicability to Car Domains*

The MemAcc module can be used in any domain application that needs MemAcc to either store data or perform a software update.

### 13. 对其他模块的依赖
*原文标题：Dependencies to Other Modules*

The MemAcc module has interfaces towards the Flash EEPROM Emulation (Fee), the EEPROM Abstraction (Ea), Bulk Nv Data Manager (BndM), Memory Drivers (Mem), the Default Error Tracer (DET) and, in case of a OTA software update client, also to Complex Device Drivers (CDD). The MemAcc module includes header files of DET and MemMap.

### 14. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| Classification of development errors |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| API handling in uninitialized state |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| Interfaces which are provided exclusively for one module shall be separated into a dedicated header file |  |  |
| The FEE and EA modules shall allow the configuration of a required number of write cycles for each logical block |  |  |
| The FEE and EA modules shall provide a service that allows canceling |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 功能规范
*原文标题：Functional Specification*

This chapter defines the behavior of the MemAcc module. The API of the module is defined in chapter , while the configuration is defined in .

### 16. 概述
*原文标题：Overview*

The MemAcc module provides a memory device agnostic address-based memory access for different upper layers modules. It implements all high level functionality like job management, access coordination and allocation of Memory Driver access requests according to the physical segmentation as the Memory Drivers expect all memory accesses aligned to physical segments.

### 17. Key Aspects

* Access coordination of different upper layers like Fee, Ea and OTA software update client
* Memory technology device agnostic API supporting all kinds of memories including code memories
* Coordination of CPU cores like host- and HSM core
* Memory access job management
* Virtualization of memory areas to support mapping of non-contiguous areas as well as spanning areas across different memory devices
* Mapping of memory locations to memory devices
* Splitting of Memory Driver access requests according to physical segments like pages and sectors for flash memories

### 18. 功能性 Elements
*原文标题：Functional Elements*

### 19. 存储 Address Translation
*原文标题：Memory Address Translation*

The MemAcc module abstracts the physical memory addressing scheme of the Mem driver to the upper layer by means of a logical address space.

Figure  provides an overview of the memory address translation/mapping scheme:

  Upstream requirements:
⌈
All MemAcc services, i.e. erase, read and write, shall support access requests which cross memory device boundaries based on the logical/physical memory mapping.
⌋

### 20. 存储映射 Constraints
*原文标题：Memory Mapping Constraints*

Upstream requirements:
⌈
An address area shall only be assigned to one upper layer module.
⌋

  Upstream requirements:
⌈
Within a sub-address area, only a uniform sector size is allowed.
⌋

Note: A sub-address area maps to a sector batch.

  Upstream requirements:
⌈
Start address and length of address areas shall be aligned to the physical sectors.
⌋

Note: Start address and length of memory accesses have to be aligned to the physical segmentation.

### 21. 存储 Access Coordination
*原文标题：Memory Access Coordination*

Upstream requirements:
⌈
The MemAcc module shall coordinate conflicting memory accesses by multiple upper layers.
⌋

Note: Typically, code- and data flash share the same flash controller and therefore it's not possible to perform a write access at the same time. Since code- and data flash write access might happen at the same time for the software update use case, MemAcc needs to coordinate these accesses.

  Upstream requirements:
⌈
The MemAcc module shall only coordinate conflicting resource accesses. The access dependencies shall be configurable in the configuration tool.
⌋

Note: Only relevant resource conflicts shall be coordinated to prevent any performance impact.

  Upstream requirements:
⌈
The MemAcc module shall support multiple memory access requests from different upper layers for distinct memory areas at the same time. In case there is a hardware resource conflict, the memory stack shall still accept the access request and process it once the resource is free.
⌋

Note: The AUTOSAR BSW upper layers shall not have to deal with any retry mechanisms as this would affect every upper layer.

### 22. Job 管理
*原文标题：Job Management*

In general, all MemAcc services that need a significant amount of time to process an operation are defined as asynchronous services. Therefore, MemAcc job requests get only queued by the asynchronous services like `MemAcc_Read` and the processing of the queued jobs happen in the `MemAcc_MainFunction`.

  Upstream requirements:
⌈
The MemAcc module shall allow only one job request per address area.
⌋

Note: Simplification of job management since one address area can only have one upper layer and job request are typically requested sequentially from the upper layer.

  Upstream requirements:
⌈
Based on MemAccAddressAreaPriority, MemAcc shall prioritize memory access requests from AUTOSAR BSW upper layer modules.
⌋

Note: Writing crash non-volatile data shall have priority over background software update tasks.

  Upstream requirements:
⌈
The prioritization of memory operations shall use the `Mem_Suspend` and `Mem_Resume` service if the memory hardware supports this functionality. If the memory hardware does not support a suspend/resume functionality, the prioritization shall be implemented on a page/page burst, respectively sector/sector burst basis.
⌋

### 23. Job Processing

Upstream requirements:
⌈
If a job end notification function is configured by MemAccJobEndNotificationName, MemAcc shall notify the upper layer BSW module by calling the configured notification function.
⌋

Note: In case no notification function is configured, the upper layer BSW module has to poll the MemAcc job status.

  Upstream requirements:
⌈
If the MemAcc module is not able to process a job request, e.g. due to a pending request on the same address area or due to an invalid parameter, the job request shall be rejected by an E_NOT_OK return code.
⌋

### 24. Job Status

The MemAcc module provides the current job processing status information via the `MemAcc_GetJobStatus` service.

  Upstream requirements:
⌈
After initialization via the `MemAcc_Init` service, the job precessing status shall be set to `MEMACC_JOB_IDLE`.
⌋

  Upstream requirements:
⌈
In case the job processing was completed or no job is currently pending, the job processing status shall be set to `MEMACC_JOB_IDLE`.
⌋

  Upstream requirements:
⌈
Once a job request was accepted, the job processing status shall be set to `MEMACC_JOB_PENDING`.
⌋

### 25. Job Result

The results of the last MemAcc job is provided by the `MemAcc_GetJobResult` service. It can be used by upper layer modules to retrieve detailed information for fine-tuned fault handling.

  Upstream requirements:
⌈
After initialization via the `MemAcc_Init` service, the job result shall be set to `MEMACC_OK`.
⌋

  Upstream requirements:
⌈
In case the job processing was completed successfully, the job result shall be set to `MEMACC_OK`.
⌋

  Upstream requirements:
⌈
In case the job processing was completed but the results of the last MemAcc job didn't meet the expected result, e.g. a blank check operation was applied on a non-blank memory area, the job result shall be set to `MEMACC_INCONSISTENT`.
⌋

  Upstream requirements:
⌈
In case the last memory operation was completed but the ECC circuit corrected an ECC error, the job result shall be set to `MEMACC_ECC_CORRECTED`.
⌋

  Upstream requirements:
⌈
In case the last memory operation didn't complete due to an uncorrectable ECC error, the job result shall be set to `MEMACC_ECC_UNCORRECTED`.
⌋

  Upstream requirements:
⌈
In case the last memory operation was canceled, the job result shall be set to `MEMACC_CANCELED`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Hardware Specific 服务
*原文标题：Hardware Specific Services*

To support memory device specific services, the MemAcc module provides a generic API to call hardware specific Mem driver services - see `MemAcc_HwSpecificService`. Each Mem driver can have multiple hardware specific services which are selected by the hwServiceId parameter.

Note: By providing a generic API for hardware specific services, the MemAcc module can be kept hardware independent.

### 27. Performance Optimization

Some Mem drivers provide burst capabilities, i.e. instead of writing/erasing one smallest possible unit, several of these units are written/erased at once to increase the write/erase throughput. Depending on the hardware capabilities, a Mem driver might offer two burst modes:

* Erase multiple sectors
* Write multiple pages

  Upstream requirements:
⌈
If enabled by MemAccUseEraseBurst, MemAcc shall align and split the Mem driver erase requests according to the erase burst size of the Mem driver.
⌋

  Upstream requirements:
⌈
MemAcc shall split the Mem driver read requests according to the maximum read length defined by MemMaxRead if the length of the MemAcc read request is larger than the MemMaxRead value of the respective Mem driver.
⌋

  Upstream requirements:
⌈
If enabled by MemAccUseWriteBurst, MemAcc shall align and split the Mem driver write requests according to the write burst size of the Mem driver.
⌋

Note: Enabling burst mode also increases the latency when a job shall be processed with a higher priority. Therefore, system integrators have to consider the maximum latency when configuring the burst modes.

### 28. Generic Locking Mechanism

To support upper layers like the BndM, the MemAcc module provides a generic lock API which can be used to restrict the memory access by a certain Mem driver, e.g., if an upper layer wants to do a direct memory mapped access.

Figure  shows an example lock/unlock sequence.

Note: The application or upper layer module has to maintain the lock state and release the lock once the direct memory access was completed. For the sake of simplicity, nested locks are not supported.

### 29. Dynamic 存储驱动处理
*原文标题：Dynamic Memory Driver Handling*

For some safety-relevant use cases, it is not desirable for the Mem driver to be permanently available in an executable form, e.g. to prevent accidental overwriting of memory areas. For these use cases, the Mem driver is compiled as a separate binary which contains a function pointer table to expose the Mem driver service functions to the MemAcc module and the MemAcc module calls the Mem driver service functions indirectly using the Mem driver function pointer table.

### 30. Dynamic 存储驱动 Activation
*原文标题：Dynamic Memory Driver Activation*

For the dynamic memory driver activation, the upper layer module has to ensure that the Mem driver binary is available for execution, e.g. downloaded to RAM and initialized before any MemAcc job is requested for the according address area.

### 31. 服务 Invocation
*原文标题：Service Invocation*

Upstream requirements:
⌈
If MemInvocation (see ) is set to `DIRECT_STATIC`, MemAcc shall call the Mem driver service functions. Otherwise the MemAcc shall call the Mem driver service functions via the Mem driver function pointer table.
⌋

### 32. 模块处理
*原文标题：Module Handling*

### 33. 初始化
*原文标题：Initialization*

The MemAcc module is initialized via `MemAcc_Init`. Except for `MemAcc_Init`, the API functions of the MemAcc module may only be called after the module has been properly initialized. Depending on the MemInvocation (see ) attribute, MemAcc can also initialize the Mem driver's individual initialization functions.

Figure  shows the Mem driver initialization via MemAcc while figure  shows the Mem driver initialization via EcuM.

### 34. 调度
*原文标题：Scheduling*

Since most of the MemAcc module services are asynchronous services, the `MemAcc_MainFunction` needs to be cyclically triggered. Depending on the MemInvocation (see ) attribute, MemAcc can call all Mem main functions within `MemAcc_MainFunction`.

Note: In case Mem drivers shall be dynamically activated, the scheduling of the Mem driver main functions cannot be done via the SchM. Therefore, the MemAcc module has to take care of the main function triggering depending on the individual Mem driver state.

Figure  shows the Mem main function triggering via MemAcc while figure  shows the Mem main function triggering via SchM.

### 35. 通用设计 Rules
*原文标题：General Design Rules*

Upstream requirements:
⌈
The MemAcc module implementation shall be hardware independent.
⌋

Note: The MemAcc module will be used with different kinds of Mem drivers, e.g., for internal and external memory devices. Thus, MemAcc has to be completely hardware independent.

  Upstream requirements:
⌈
The MemAcc module implementation shall support multiple Mem drivers.
⌋

  Upstream requirements: , ,
⌈
The MemAcc module shall check static configuration parameters statically (at the latest during compile time) for correctness.
⌋

### 36. Retry Mechanism

Upstream requirements:
⌈
If MemAccNumberOfEraseRetries is set to a value > 0, MemAcc shall retry the Mem driver erase operation according to the configured value if the Mem driver erase operation resulted in `MEM_JOB_FAILED`.
⌋

  Upstream requirements:
⌈
If MemAccNumberOfWriteRetries is set to a value > 0, MemAcc shall retry the Mem driver write operation according to the configured value if the Mem driver write operation resulted in `MEM_JOB_FAILED`.
⌋

Note: Upper layers shall not have to deal with transient memory write/erase issues. The retry mechanism strongly depends on the underlying memory technology/devices types. Not all memory devices support a write retry.

### 37. Address Alignment

The MemAcc module does not perform any kind of buffer alignment. Therefore, the buffers provided by the upper layers need to consider already the alignment requirements defined by the MemAccBufferAlignmentValue attribute. MemAccBufferAlignmentValue must be configured to the least common multiple value needed by the underlying Mem drivers. The same applies to the write page requirements.

  Upstream requirements:
⌈
The MemAcc module shall split memory write access requests for the Mem driver layer according to page/page burst size defined by MemWritePageSize/MemWriteBurstSize.
⌋

Note: Mem driver expects request aligned to the physical write segmentation.

  Upstream requirements:
⌈
If the start address or the length of a memory write request does not match the physical write segmentation of the device defined by MemWritePageSize, `MemAcc_Write` shall reject such job requests with E_NOT_OK.
⌋

Note: Memory requests must be aligned to the physical memory segmentation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. 64-Bit 支持
*原文标题：64-Bit Support*

Upstream requirements:
⌈
The MemAcc module shall support address areas larger than 4GBytes, thus `MemAcc_AddressType` and `MemAcc_LengthType` shall be defined as a 64-Bit types in case the address area configuration of one address area exceeds 4GBytes.
⌋

  Upstream requirements:
⌈
If all address areas don't exceed 4GBytes, `MemAcc_AddressType` and `MemAcc_LengthType` shall be defined as a 32-Bit types.
⌋

Note: Avoid unnecessary overhead due to 64-Bit types.

### 39. 错误分类
*原文标题：Error Classification*

### 40. Development 错误
*原文标题：Development Errors*

Definition of development errors in module MemAcc
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called without module initialization | MEMACC_E_UNINIT | 0x01 |
| API service called with NULL pointer argument | MEMACC_E_PARAM_POINTER | 0x02 |
| API service called with wrong address area ID | MEMACC_E_PARAM_ADDRESS_AREA_ID | 0x03 |
| API service called with address and length not belonging to the passed address area ID | MEMACC_E_PARAM_ADDRESS_LENGTH | 0x04 |
| API service called with a hardware ID not belonging to the passed address area ID | MEMACC_E_PARAM_HW_ID | 0x05 |
| API service called for an address area ID with a pending job request | MEMACC_E_BUSY | 0x06 |
| Dynamic MEM driver activation failed due to inconsistent MEM driver binary | MEMACC_E_MEM_INIT_FAILED | 0x07 |

⌋

### 41. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 42. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 43. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 44. API 规范
*原文标题：API Specification*

### 45. Imported 类型
*原文标题：Imported Types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module MemAcc
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Mem | Mem.h | Mem_AddressType |
| ^ | Mem.h | Mem_ConfigType |
| ^ | Mem.h | Mem_DataType |
| ^ | Mem.h | Mem_HwServiceIdType |
| ^ | Mem.h | Mem_InstanceIdType |
| ^ | Mem.h | Mem_LengthType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 46. 类型定义
*原文标题：Type Definitions*

### 47. MemAcc_AddressAreaIdType

Definition of datatype `MemAcc_AddressAreaIdType`
  Upstream requirements:
⌈
| Name | MemAcc_AddressAreaIdType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint16 | < | < |
| Description | Unique address area ID type. | < | < |
| Available via | MemAcc_GeneralTypes.h | < | < |

⌋

### 48. MemAcc_AddressType

Definition of datatype `MemAcc_AddressType`
  Upstream requirements:
⌈
| Name | MemAcc_AddressType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | Basetype | Variation | < |
| ^ | uint32 | - | < |
| ^ | uint64 | - | < |
| Description | Logical memory address type. | < | < |
| Available via | MemAcc_GeneralTypes.h | < | < |

⌋

### 49. MemAcc_ConfigType

Definition of datatype `MemAcc_ConfigType`
  Upstream requirements:
⌈
| Name | MemAcc_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Description | Postbuild configuration structure type. | < |
| Available via | MemAcc.h | < |

⌋

### 50. MemAcc_DataType

Definition of datatype `MemAcc_DataType`
  Upstream requirements:
⌈
| Name | MemAcc_DataType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Description | General data type. | < | < |
| Available via | MemAcc_GeneralTypes.h | < | < |

⌋

### 51. MemAcc_JobResultType

Definition of datatype `MemAcc_JobResultType`
  Upstream requirements:
⌈
| Name | MemAcc_JobResultType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MEMACC_OK | 0x00 | The last MemAcc job was finished successfully |
| ^ | MEMACC_FAILED | 0x01 | The last MemAcc job resulted in an unspecific failure and the job was not completed |
| ^ | MEMACC_INCONSISTENT | 0x02 | The results of the last MemAcc job didn't meet the expected result, e.g. a blank check operation was applied on a non-blank memory area |
| ^ | MEMACC_CANCELED | 0x03 | The last MemAcc job was canceled |
| ^ | MEMACC_ECC_UNCORRECTED | 0x04 | The last memory operation returned an uncorrectable ECC error |
| ^ | MEMACC_ECC_CORRECTED | 0x05 | The last memory operation returned a correctable ECC error |
| ^ | MEMACC_MEM_SERVICE_NOT_AVAIL | 0x06 | The service requested is not available for this memory driver |
| Description | Asynchronous job result type. | < | < |
| Available via | MemAcc_GeneralTypes.h | < | < |

⌋

### 52. MemAcc_JobStatusType

Definition of datatype `MemAcc_JobStatusType`
  Upstream requirements:
⌈
| Name | MemAcc_JobStatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MEMACC_JOB_IDLE | 0x00 | Job processing was completed or no job currently pending |
| ^ | MEMACC_JOB_PENDING | 0x01 | A job is currently being processed |
| Description | Asynchronous job status type. | < | < |
| Available via | MemAcc_GeneralTypes.h | < | < |

⌋

### 53. MemAcc_JobType

Definition of datatype `MemAcc_JobType`
  Upstream requirements:
⌈
| Name | MemAcc_JobType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MEMACC_NO_JOB | 0x00 | No job currently pending |
| ^ | MEMACC_WRITE_JOB | 0x01 | Write job pending |
| ^ | MEMACC_READ_JOB | 0x02 | Read job pending |
| ^ | MEMACC_COMPARE_JOB | 0x03 | Compare job pending |
| ^ | MEMACC_ERASE_JOB | 0x04 | Erase job pending |
| ^ | MEMACC_MEMHWSPECIFIC_JOB | 0x05 | Hardware specific job pending |
| ^ | MEMACC_BLANKCHECK_JOB | 0x06 | Blank check job pending |
| ^ | MEMACC_REQUESTLOCK_JOB | 0x07 | Request lock job pending |
| Description | Type for asynchronous jobs. | < | < |
| Available via | MemAcc_GeneralTypes.h | < | < |

⌋

### 54. MemAcc_LengthType

Definition of datatype `MemAcc_LengthType`
  Upstream requirements:
⌈
| Name | MemAcc_LengthType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | Basetype | Variation | < |
| ^ | uint32 | - | < |
| ^ | uint64 | - | < |
| Description | Job length type. | < | < |
| Available via | MemAcc_GeneralTypes.h | < | < |

⌋

### 55. MemAcc_MemoryInfoType

Definition of datatype `MemAcc_MemoryInfoType`
  Upstream requirements:
⌈
| Name | MemAcc_MemoryInfoType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | LogicalStartAddress | < |
| ^ | Type | MemAcc_AddressType |
| ^ | Comment | Logical start address of sub address area |
| ^ | PhysicalStartAddress | < |
| ^ | Type | MemAcc_AddressType |
| ^ | Comment | Physical start address of sub address area |
| ^ | MaxOffset | < |
| ^ | Type | MemAcc_LengthType |
| ^ | Comment | Size of sub address area in bytes -1 |
| ^ | EraseSectorSize | < |
| ^ | Type | uint32 |
| ^ | Comment | Size of a sector in bytes |
| ^ | EraseSectorBurstSize | < |
| ^ | Type | uint32 |
| ^ | Comment | Size of a sector burst in bytes. Equals SectorSize in case burst is disabled |
| ^ | MinReadSize | < |
| ^ | Type | uint32 |
| ^ | Comment | Smallest readable unit in bytes |
| ^ | WritePageSize | < |
| ^ | Type | uint32 |
| ^ | Comment | Write size of a page in bytes |
| ^ | MaxReadSize | < |
| ^ | Type | uint32 |
| ^ | Comment | Largest readable unit in bytes |
| ^ | WritePageBurstSize | < |
| ^ | Type | uint32 |
| ^ | Comment | Size of a page burst in bytes. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 56. MemAcc_JobInfoType

Definition of datatype `MemAcc_JobInfoType`
  Upstream requirements:
⌈
| Name | MemAcc_JobInfoType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | LogicalAddress | < |
| ^ | Type | MemAcc_AddressType |
| ^ | Comment | Address of currently active address area request |
| ^ | Length | < |
| ^ | Type | MemAcc_LengthType |
| ^ | Comment | Length of the currently active address area request |
| ^ | HwId | < |
| ^ | Type | MemAcc_HwIdType |
| ^ | Comment | Referenced memory driver hardware identifier |
| ^ | MemInstanceId | < |
| ^ | Type | uint32 |
| ^ | Comment | Instance ID of the current memory request |
| ^ | MemAddress | < |
| ^ | Type | uint32 |
| ^ | Comment | Physical address of the current memory driver request |
| ^ | MemLength | < |
| ^ | Type | uint32 |
| ^ | Comment | Length of memory driver request |
| ^ | CurrentJob | < |
| ^ | Type | MemAcc_JobType |
| ^ | Comment | Currently active MemAcc job |
| ^ | MemResult | < |
| ^ | Type | MemAcc_MemJobResultType |
| ^ | Comment | Current or last Mem driver result |
| Description | This structure contains information the current processing state of the MemAcc module. | < |
| Available via | MemAcc_GeneralTypes.h | < |

⌋

### 其余 84 章（内容从略，见纯文本全文）

57. MemAcc_HwIdType
58. MemAcc_MemBinaryHeaderType
59. MemAcc_MemAddressType
60. MemAcc_MemConfigType
61. MemAcc_MemDataType
62. MemAcc_MemInstanceIdType
63. MemAcc_MemJobResultType
64. MemAcc_MemLengthType
65. MemAcc_MemHwServiceIdType
66. MemAcc_MemInitFuncType
67. MemAcc_MemDeInitFuncType
68. MemAcc_MemGetJobResultFuncType
69. MemAcc_MemSuspendFuncType
70. MemAcc_MemResumeFuncType
71. MemAcc_MemPropagateErrorFuncType
72. MemAcc_MemReadFuncType
73. MemAcc_MemWriteFuncType
74. MemAcc_MemEraseFuncType
75. MemAcc_MemBlankCheckFuncType
76. MemAcc_MemHwSpecificServiceFuncType
77. MemAcc_MemMainFuncType
78. MemAcc_ApplicationLockNotificationType
79. Extension of Std_ReturnType
80. 功能定义
81. Synchronous Functions
82. MemAcc_Init
83. MemAcc_DeInit
84. MemAcc_GetJobResult
85. MemAcc_GetJobStatus
86. MemAcc_GetMemoryInfo
87. MemAcc_GetProcessedLength
88. MemAcc_GetJobInfo
89. MemAcc_ActivateMem
90. MemAcc_DeactivateMem
91. MemAcc_ReleaseLock
92. Asynchronous Functions
93. MemAcc_Cancel
94. MemAcc_Read
95. MemAcc_Write
96. MemAcc_Erase
97. MemAcc_Compare
98. MemAcc_BlankCheck
99. MemAcc_HwSpecificService
100. MemAcc_RequestLock
101. Callback 通知
102. Scheduled Functions
103. MemAcc_MainFunction
104. Expected 接口
105. Mandatory 接口
106. Optional 接口
107. Configurable 接口
108. <AddressAreaJobEndNotification>
109. 服务接口
110. 时序图
111. Job 处理 with Result Polling
112. Job 处理 with Job End 通知
113. Mem 驱动初始化 by MemAcc
114. Mem 驱动初始化 by EcuM
115. Mem 驱动调度 by MemAcc
116. Mem 驱动调度 by SchM
117. Generic Lock Sequence
118. 配置规范
119. How to Read this Chapter
120. Containers and 配置 Parameters
121. MemAcc
122. MemAccAddressAreaConfiguration
123. MemAccSubAddressAreaConfiguration
124. MemAccSynchronizationGroupConfiguration
125. 发布信息
126. 附录
127. Change history of AUTOSAR traceable items
128. Traceable item history of this document according to AUTOSAR Release R25-11
129. Added 规范 Items in R25-11
130. Changed 规范 Items in R25-11
131. Deleted 规范 Items in R25-11
132. Traceable item history of this document according to AUTOSAR Release R24-11
133. Added 规范 Items in R24-11
134. Changed 规范 Items in R24-11
135. Deleted 规范 Items in R24-11
136. Traceable item history of this document according to AUTOSAR Release R23-11
137. Added 规范 Items in R23-11
138. Changed 规范 Items in R23-11
139. Deleted 规范 Items in R23-11
140. 不适用需求
