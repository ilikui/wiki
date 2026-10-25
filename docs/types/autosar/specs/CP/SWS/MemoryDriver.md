# Specification of Memory Driver (`MemoryDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1018 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_MemoryDriver_1018\AUTOSAR_CP_SWS_MemoryDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_MemoryDriver_1018\AUTOSAR_CP_SWS_MemoryDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_MemoryDriver_1018\zzgen\CP_SWS_MemoryDriver.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module Memory Driver (Mem).

The Memory Driver provides the basic services for accessing different kinds of memory devices like reading, writing, erasing and blank checking.

Although flash memory is still the most common non-volatile memory technology, the Memory Driver specification considers all relevant memory device technologies like EEPROM, phase change memory (PCM) and ferro electric RAM. To harmonize the memory access for the upper layers, the Memory Driver specification also covers access of RAM. Aside from microcontroller internal memory devices, the Memory Device specification can also be applied to external memory devices attached, e.g. via a serial peripheral interface.

In contrast to the Flash and EEPROM Driver specification, the Memory Driver specification explicitly covers also code memory access to support new use cases like background OTA software update which require code memory access.

Figure  shows an example architectural overview with different Memory Drivers and upper layers:

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module Memory Driver (Mem).

The Memory Driver provides the basic services for accessing different kinds of memory devices like reading, writing, erasing and blank checking.

Although flash memory is still the most common non-volatile memory technology, the Memory Driver specification considers all relevant memory device technologies like EEPROM, phase change memory (PCM) and ferro electric RAM. To harmonize the memory access for the upper layers, the Memory Driver specification also covers access of RAM. Aside from microcontroller internal memory devices, the Memory Device specification can also be applied to external memory devices attached, e.g. via a serial peripheral interface.

In contrast to the Flash and EEPROM Driver specification, the Memory Driver specification explicitly covers also code memory access to support new use cases like background OTA software update which require code memory access.

Figure  shows an example architectural overview with different Memory Drivers and upper layers:

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Mem driver that are not included in the .

| Abbreviation / Acronym | Description |
|---|---|
| ABI | Application Binary Interface |
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

### 3. Physical Segmentation

Figure  gives an overview of the physical segmentation and the according technical terms:

### 4. 相关文档
*原文标题：Related Documentation*

### 5. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 6. 相关规范
*原文标题：Related Specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Mem driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Mem driver.

### 7. 约束与假设
*原文标题：Constraints and Assumptions*

The following constraints apply for the Mem driver:

* The Mem driver only works on physical segments, i.e. pages/page bursts and sectors/sector bursts for flash memory.
* The Mem driver expects any requests to be aligned to the physical segmentation, i.e. pages and sectors for flash memory.

Due to this constraints, Mem drivers can only be used in combination with the Memory Access Module.

### 8. 限制
*原文标题：Limitations*

### 9. 通用限制
*原文标题：General Limitations*

Block based memory devices like NAND flash devices are out of scope of this specification.

### 10. Implementation 限制
*原文标题：Implementation Limitations*

The following implementation limitations apply for the Mem driver:

* The Mem driver does not provide any strategy for write accesses smaller than the physical segmentation, i.e. pages and sectors for flash memory since it does not use any internal buffers.
* The Mem driver does not provide mechanisms for providing data integrity (e.g. checksums, redundant storage, etc.).
* The size of Mem driver service requests is limited to 32-Bits to avoid a resource overhead for 32-Bit microcontroller.

### 11. 存储 Test Capabilities
*原文标题：Memory Test Capabilities*

The Mem driver does not provide any general APIs for performing background memory tests since the memory test capabilities are very hardware dependent. To implement memory tests, the Mem driver's hardware specific request service API can be used.

### 12. 适用的车型领域
*原文标题：Applicability to Car Domains*

The Mem driver can be used in any domain application that needs memory access to either store data or perform a software update.

### 13. 对其他模块的依赖
*原文标题：Dependencies to Other Modules*

### 14. SPI 驱动
*原文标题：SPI Driver*

Typically, external memory devices are connected via a serial bus like SPI (serial peripheral interface). To access such devices, a driver for the SPI peripheral in the microcontroller is needed to access the external memory device. Depending on the implementation of the Mem driver, the SPI driver might be part of the Mem driver or the Mem driver uses an existing MCAL SPI handler/driver.

### 15. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in ,  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All software modules shall provide version and identification information |  |  |
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| The scheduling strategy that is built inside the Basic Software Modules shall be compatible with the strategy used in the system |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| List possible error notifications |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| Interfaces which are provided exclusively for one module shall be separated into a dedicated header file |  |  |
| The FEE and EA modules shall provide a service that allows canceling an ongoing asynchronous operation |  |  |
| MemAcc module shall allow |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能规范
*原文标题：Functional Specification*

This chapter defines the behavior of the Mem driver. The API of the module is defined in chapter , while the configuration is defined in .

### 17. 概述
*原文标题：Overview*

The Mem driver's task is the low level memory access based on the physical segmentation of the underlying memory device technology.

The API of the Mem driver is memory device technology independent and thus provides a memory device agnostic interface to the Memory Access Module upper layer.

All high level functionality like cross-segment operations are handled by the Memory Access Module to keep the complexity and the footprint of the Mem drivers as small as possible.

### 18. Key Aspects

* Harmonized, memory device agnostic upper layer interface
* Support of code memories
* Multi instance support
* Dynamic activation of Mem drivers
* 64-Bit device support
* Support of optional memory services
* Generic interface for providing memory device specific services

### 19. 功能性 Elements
*原文标题：Functional Elements*

### 20. Job 管理
*原文标题：Job Management*

Upstream requirements:
⌈
A Mem driver instance shall allow only one job request at a time.
⌋

Note: Since the MemAcc module takes care about the job management of the upper layer, there is no need to implement a job queue in the Mem driver.

  Upstream requirements:
⌈
If the Mem driver is not able to process a job request, e.g. due to a pending request or due to an invalid parameter, the job request shall be rejected by an E_NOT_OK return code.
⌋

  Upstream requirements:
⌈
All job requests triggered by asynchronous Mem driver services shall be executed within the `Mem_MainFunction`.
⌋

  Upstream requirements:
⌈
If the memory hardware provides ECC information, the Mem driver shall check for uncorrectable ECC errors and set the job result code to `MEM_ECC_UNCORRECTED` and abort the current job processing.
⌋

### 21. Job Status/Job Results

The Mem driver provides the `Mem_GetJobResult` service to retrieve the current job processing status as well as the result of the last processed job. Once a new job is processed, the result of the last processed job gets overwritten by the current status/result.

  Upstream requirements:
⌈
The Mem driver shall keep track of the job processing and the result of the last processed job.
⌋

  Upstream requirements:
⌈
Once a job request is accepted, the job processing status shall be set to `MEM_JOB_PENDING`.
⌋

  Upstream requirements:
⌈
After a job was successfully processed, the job processing status shall be set to `MEM_JOB_OK`.
⌋

  Upstream requirements:
⌈
In case a pending job was not able to complete, the job processing status shall be set to `MEM_JOB_FAILED`.
⌋

  Upstream requirements:
⌈
In case the job processing was completed but the results of the last Mem job didn't meet the expected result, e.g. a blank check operation was applied on a non-blank memory area, the job result shall be set to `MEM_INCONSISTENT`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Job Suspend/Resume

To reduce delays for prioritizing memory accesses, the Mem driver provides services for suspending/resuming memory operations.

  Upstream requirements:
⌈
In case a memory device provides a hardware-based suspend/resume mechanism, the Mem driver shall utilize the hardware capabilities to implement the `Mem_Suspend` and `Mem_Resume` services. If no hardware suspend/resume support is available, the `Mem_Suspend` and `Mem_Resume` services shall return E_MEM_SERVICE_NOT_AVAIL.
⌋

Note: For the hardware-based suspend/resume operation, it is expected, that the suspend/resume operation is completely handled by the memory hardware (no persistance of any state information needed in software, etc.) and there is no restriction regarding the intermediate operation that is issued while the device is in suspend state. If the hardware does not provide such features, prioritization is only possible based on the physical memory segmentation.

### 23. Hardware Specific 服务
*原文标题：Hardware Specific Services*

To support memory device specific services, Mem driver implementations can provide hardware specific services. Figure  shows a typical use case for using a hardware specific service to implement a hardware specific error handling.

  Upstream requirements:
⌈
All hardware specific routines shall be accessed by the `Mem_HwSpecificService`() service.
⌋

### 24. Multi 存储 Device Instance 支持
*原文标题：Multi Memory Device Instance Support*

Upstream requirements:
⌈
The Mem driver implementation shall support multiple instances of the same memory device.
⌋

Note: For the OTA software update use case, multiple memory devices of the same type are used to expand the memory resources.

### 25. Dynamic 驱动 Activation
*原文标题：Dynamic Driver Activation*

To support use cases where the Mem driver shall not be permanently available, i.e. to prevent accidental overwriting of memory areas, the Mem driver shall provide measures that allow dynamic activation or download of Mem drivers.

There are two options to support this use case:

* Download of a Mem driver binary image into RAM
* Copy/decrypt a Mem driver ROM binary image into RAM

Both options require that the Mem driver is compiled as a separate binary. In case the Mem driver binary is part of the application image, the Mem driver binary image should to be encrypted, e.g. by a XOR operation and only be decrypted in RAM if the Mem driver shall be activated. The download or decryption operation of the Mem driver must be implemented as a CDD and is not covered by this specification.

To provide interoperability of different Mem driver implementations, the Mem drivers need to build according to standardized binary image format. The Mem driver binary image format is defined in chapter .

  Upstream requirements:
⌈
If built as a separate image, the Mem driver shall be completely self contained, i.e. it must not call any library or any other external functions.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 服务 Invocation
*原文标题：Service Invocation*

Upstream requirements: ,
⌈
The Mem driver shall provide two ways for the service function invocation:

* Direct service invocation
* Indirect service invocation by a function pointer table
⌋

Note: Some use cases like OTA background software update might require dynamic Mem driver activation using the indirect service invocation while simple use cases like NVM data storage want to use direct service invocation.

### 27. Direct Invocation

In case the Mem driver service functions are directly invoked, the Mem driver is linked with the application software and the Mem driver service functions are directly called by the MemAcc module.

### 28. Indirect Invocation

The indirect service invocation is needed for the dynamic driver activation feature described in chapter .

### 29. Binary Image Format

This chapter specifies the Mem driver binary image format. The binary image format is split into five parts:

* Header, containing management information
* Service function pointer table
* Service function implementation
* Delimiter

Figure  shows an overview of the Mem driver binary image:

  Upstream requirements:
⌈
Since Mem drivers are always hardware/CPU specific, the byte order of data fields and address information within the Mem driver binary shall follow the standard CPU byte order.
⌋

Note: Avoid unnecessary address/data format conversions.

### 30. Header

Upstream requirements: ,
⌈
The header part of the Mem driver binary shall follow the structure defined in . The size of the address information depends on the configured `MemAcc_AddressType` (see  - 32 or 64 bit).
⌋

  Upstream requirements: ,
⌈
| Offset | Size | Name | Description |
|---|---|---|---|
| 0 | 8 | Unique ID | Mem driver unique identifier - used to validate Mem driver version information, etc. |
| 8 | 8 | Flags | Flags used for additional development error detection. |
| 16 | 4/8 | Header address | Start address of Mem driver image header - used to verify consistency of Mem driver RAM buffer/ROM image location. |
| 20/24 | 4/8 | Delimiter address | Address of Mem driver binary image delimiter pattern - used to validate if the binary is complete. |

⌋

### 31. Unique ID

Upstream requirements: ,
⌈
The unique identifier is used for unique identification of Mem drivers. The format of the unique identifier shall follow the structure defined in .
⌋

  Upstream requirements: ,
⌈
| Offset | Size | Name | Description |
|---|---|---|---|
| 0 | 2 | ABI version | BCD-encoded Mem driver binary interface version. Any change of the interface version will also require an update of the MemAcc module. |
| 2 | 2 | Vendor ID | Standard AUTOSAR vendor identification. |
| 4 | 4 | Driver ID | Vendor specific driver identification. |

⌋

  Upstream requirements: ,
⌈
The ABI version of a Mem driver following this specification shall be 0001.
⌋

### 32. Header Address

Upstream requirements: ,
⌈
The header address is used for development error checks to verify the consistency of the linked Mem driver binary image with the location of the RAM buffer which is used for execution of the Mem driver. In case of a relocatable/position independent Mem driver binary, the header address shall be set to zero, otherwise, the header address shall hold the physical start address of the Mem driver binary.
⌋

### 33. Flags

Upstream requirements: ,
⌈
The flag part of the Mem driver header is a bit-field which holds additional information for develop error checks.

The format of the flag bit-field shall follow the structure defined in .
⌋

  Upstream requirements: ,
⌈
| Offset | Size | Name | Description |
|---|---|---|---|
| 0 | 1 | Relocatable binary | If this bit is set, the Mem driver binary is relocatable and no address consistency checks can be done. |
| 1 | 31 | Reserved | Reserved by this specification - shall be 0. |
| 32 | 32 | Vendor specific | Vendor specific flags. |

⌋

### 34. Delimiter Address

Upstream requirements: ,
⌈
The delimiter address part of the Mem driver header is used for development error checks to verify that the Mem driver binary is complete by checking the delimiter pattern linked to the end of the Mem driver binary. In case of a relocatable/position independent Mem driver binary, the delimiter address shall be set to zero, otherwise, the delimiter address shall hold the physical address of the delimiter pattern.
⌋

### 35. 服务功能 Pointer Table
*原文标题：Service Function Pointer Table*

Upstream requirements: ,
⌈
The function pointer table is a standardized structure used to reference the Mem driver service functions.

The format of function pointer table shall follow the structure defined in .
⌋

  Upstream requirements: ,
⌈
| Entry | Name | Description |
|---|---|---|
| 1 | Init service pointer | Function pointer to Mem driver Init service. |
| 2 | DeInit service pointer | Function pointer to Mem driver DeInit service. |
| 3 | MainFunction service pointer | Function pointer to Mem driver MainFunction service. |
| 4 | GetJobResult service pointer | Function pointer to Mem driver GetJobResult service. |
| 5 | Read service pointer | Function pointer to Mem driver Read service. |
| 6 | Write service pointer | Function pointer to Mem driver Write service. |
| 7 | Erase service pointer | Function pointer to Mem driver Erase service. |
| 8 | PropagateError service pointer | Function pointer to Mem driver PropagateError service. |
| 9 | BlankCheck service pointer | Function pointer to Mem driver BlankCheck service. |
| 10 | Suspend service pointer | Function pointer to Mem driver Suspend service. |
| 11 | Resume service pointer | Function pointer to Mem driver Resume service. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Delimiter

The delimiter field marks the end of the Mem driver binary image. The format of the delimiter field shall follow the unique identifier defined in paragraph .

  Upstream requirements: ,
⌈
The value of the delimiter field shall be the ones' complement of the unique identifier value.
⌋

### 37. Optional 服务
*原文标题：Optional Services*

Since not all Mem driver services are relevant for all memory device technologies, the Mem driver provides mechanisms to indicate to the MemAcc module which services are available.

Independent, if a service is relevant, the Mem driver shall provide all standard services as defined in chapter .

  Upstream requirements:
⌈
In case a service is not relevant for a specific memory device technology, the service shall always return E_MEM_SERVICE_NOT_AVAIL.
⌋

### 38. 模块处理
*原文标题：Module Handling*

### 39. 初始化
*原文标题：Initialization*

The Mem driver is initialized via `Mem_Init`. Except for `Mem_GetVersionInfo`, `Mem_MainFunction` and `Mem_Init`, the API functions of the Mem driver may only be called after the module has been properly initialized.

### 40. 调度
*原文标题：Scheduling*

Since most of the Mem driver services are asynchronous services, the `Mem_MainFunction` needs to be cyclically triggered. Since Mem driver don't need to measure times or do any timing supervision, there is no need to call the `Mem_MainFunction` with a fixed cycle.

### 41. ECC 处理
*原文标题：ECC Handling*

Handling ECC errors is very hardware specific but typically a non-maskable interrupt is triggered by the ECC circuit. Dealing with ECC errors has to be done on a system level as the error reaction needs to be handled on system level as well.

To propagate memory ECC errors to the upper layer, the Mem driver provides the `Mem_PropagateError` API which can be called by the system ECC error handler to forward ECC errors.

Figure  shows an example ECC handling sequence to illustrate the usage of the `Mem_PropagateError` API.

### 42. 通用设计 Rules
*原文标题：General Design Rules*

Upstream requirements: , ,
⌈
The Mem driver shall check static configuration parameters statically (at the latest during compile time) for correctness.
⌋

⌈
The Mem driver shall not verify the result of a write or erase operation.
⌋

Note: Consistency checks shall be implemented by the upper layers, e.g., by reading back the data or performing an explicit blank check.

### 43. Address Alignment

Upstream requirements:
⌈
The Mem driver shall not perform any sort of address or length alignment in case physical segmentation needs to be considered, e.g. for flash memory.
⌋

Note: The MemAcc module takes care about alignment/splitting Mem service requests according to the configure physical segmentation.

### 44. 64-Bit 支持
*原文标题：64-Bit Support*

Upstream requirements:
⌈
The Mem driver shall inherit the size of `Mem_AddressType` from `MemAcc_AddressType` (see ) to support memories larger than 4GBytes.
⌋

Note: This requirement applies for all Mem drivers, independent if the physical memory size is less than 4GBytes.

  Upstream requirements:
⌈
If the maximum physical memory size of a device does not exceed 4GBytes, the Mem driver shall perform an explicit cast and work internally with a 32-Bit address type.
⌋

Note: Avoid resource overhead on 32-Bit microcontroller.

### 45. 错误分类
*原文标题：Error Classification*

### 46. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Mem
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called without module initialization | MEM_E_UNINIT | 0x01 |
| API service called with NULL pointer | MEM_E_PARAM_POINTER | 0x02 |
| API service called with an invalid address | MEM_E_PARAM_ADDRESS | 0x03 |
| API service called with an invalid length | MEM_E_PARAM_LENGTH | 0x04 |
| API service called with an invalid driver instance ID | MEM_E_PARAM_INSTANCE_ID | 0x05 |
| API service called while a job request is still in progress | MEM_E_JOB_PENDING | 0x06 |

⌋

### 47. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

Note: Simplify system design by just having one fault handling mechanism.

### 48. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 49. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 50. API 规范
*原文标题：API Specification*

Upstream requirements: , , ,
⌈
The Mem driver API names, type definitions and file naming scheme shall follow the standard AUTOSAR BSW Module implementation prefix with vendorId and vendorApiInfix.
⌋

### 51. Imported 类型
*原文标题：Imported Types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Mem
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| MemAcc | MemAcc_GeneralTypes.h | MemAcc_AddressType |
| ^ | MemAcc_GeneralTypes.h | MemAcc_MemJobResultType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 52. 类型定义
*原文标题：Type Definitions*

### 53. Mem_AddressType

Definition of datatype `Mem_AddressType`
  Upstream requirements:
⌈
| Name | Mem_AddressType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | MemAcc_AddressType | < | < |
| Description | Physical memory device address type | < | < |
| Available via | Mem.h | < | < |

⌋

### 54. Mem_ConfigType

Definition of datatype `Mem_ConfigType`
  Upstream requirements:
⌈
| Name | Mem_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Description | Postbuild configuration structure type | < |
| Available via | Mem.h | < |

⌋

### 55. Mem_DataType

Definition of datatype `Mem_DataType`
  Upstream requirements:
⌈
| Name | Mem_DataType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Description | Read data user buffer type | < | < |
| Available via | Mem.h | < | < |

⌋

### 56. Mem_InstanceIdType

Definition of datatype `Mem_InstanceIdType`
  Upstream requirements:
⌈
| Name | Mem_InstanceIdType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint32 | < | < |
| Description | Memory driver instance ID type | < | < |
| Available via | Mem.h | < | < |

⌋

### 57. Mem_LengthType

Definition of datatype `Mem_LengthType`
  Upstream requirements:
⌈
| Name | Mem_LengthType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint32 | < | < |
| Description | Physical memory device length type | < | < |
| Available via | Mem.h | < | < |

⌋

### 58. Mem_HwServiceIdType

Definition of datatype `Mem_HwServiceIdType`
  Upstream requirements:
⌈
| Name | Mem_HwServiceIdType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint32 | < | < |
| Description | Hardware specific service request identifier type | < | < |
| Available via | Mem.h | < | < |

⌋

### 59. 功能定义
*原文标题：Function Definitions*

### 60. Synchronous Functions

### 61. Mem_Init

Definition of API function `Mem_Init`
  Upstream requirements:
⌈
| Service Name | Mem_Init | < |
|---|---|---|
| Syntax | void Mem_Init ( |  |

  const `Mem_ConfigType`* configPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | configPtr | Pointer to the configuration data structure - since Mem driver is a precompile module this parameter is typically not used. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initialization function - initializes all variables and sets the module state to initialized. | < |
| Available via | Mem.h | < |

⌋

  Upstream requirements: ,
⌈
The service `Mem_Init` shall initialize the Mem driver internal states and set the Mem driver job processing state to `MEM_JOB_OK`.
⌋

  Upstream requirements:
⌈
If development error detection is enabled by MemDevErrorDetect, the service `Mem_Init` shall raise the development error `MEM_E_PARAM_POINTER` if the configPtr argument is not a NULL pointer.
⌋

Note: The configuration pointer configPtr is currently not used and shall therefore be set to a NULL pointer value.

### 62. Mem_DeInit

Definition of API function `Mem_DeInit`
  Upstream requirements:
⌈
| Service Name | Mem_DeInit | < |
|---|---|---|
| Syntax | void Mem_DeInit ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x0b | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | De-initialize module. If there is still an access job pending, it is immediately terminated (using hardware cancel operation) and the Mem driver module state is set to unitialized. Therefore, Mem must be re-initialized before it will accept any new job requests after this service is processed. | < |
| Available via | Mem.h | < |

⌋

  Upstream requirements:
⌈
The service `Mem_DeInit` shall cancel any ongoing flash operations in the hardware and de-initialize the Mem driver internal states.
⌋

### 63. Mem_GetVersionInfo

Definition of API function `Mem_GetVersionInfo`
  Upstream requirements:
⌈
| Service Name | Mem_GetVersionInfo | < |
|---|---|---|
| Syntax | void Mem_GetVersionInfo ( |  |

  `Std_VersionInfoType`* versionInfoPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | versionInfoPtr | Pointer to standard version information structure. |
| Return value | None | < |
| Description | Service to return the version information of the Mem module. | < |
| Available via | Mem.h | < |

⌋

  Upstream requirements:
⌈
If development error detection is enabled by MemDevErrorDetect, the service `Mem_GetVersionInfo` shall raise the development error `MEM_E_PARAM_POINTER` if the versionInfoPtr argument is a NULL pointer.
⌋

### 64. Mem_GetJobResult

Definition of API function `Mem_GetJobResult`
  Upstream requirements:
⌈
| Service Name | Mem_GetJobResult | < |
|---|---|---|
| Syntax | MemAcc_MemJobResultType Mem_GetJobResult ( |  |

  `Mem_InstanceIdType` instanceId
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | instanceId | ID of the related memory driver instance. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | MemAcc_MemJobResultType | Most recent job result. |
| Description | Service to return results of the most recent job. | < |
| Available via | Mem.h | < |

⌋

  Upstream requirements:
⌈
If development error detection is enabled by MemDevErrorDetect, the service `Mem_GetJobResult` shall check that the provided instanceId is consistent with the configuration. If this check fails, `Mem_GetJobResult` shall raise the development error `MEM_E_PARAM_INSTANCE_ID`.
⌋

### 其余 40 章（内容从略，见纯文本全文）

65. Mem_Suspend
66. Mem_Resume
67. Mem_PropagateError
68. Asynchronous Functions
69. Mem_Read
70. Mem_Write
71. Mem_Erase
72. Mem_BlankCheck
73. Mem_HwSpecificService
74. Callback 通知
75. Scheduled Functions
76. Mem_MainFunction
77. Expected 接口
78. Mandatory 接口
79. Optional 接口
80. Configurable 接口
81. 时序图
82. Hardware Specific 错误处理
83. ECC 处理示例 Sequence
84. 配置规范
85. How to Read this Chapter
86. Containers and 配置 Parameters
87. Mem
88. MemInstance
89. 发布信息
90. 附录
91. Change history of AUTOSAR traceable items
92. Traceable item history of this document according to AUTOSAR Release R25-11
93. Added 规范 Items in R25-11
94. Changed 规范 Items in R25-11
95. Deleted 规范 Items in R25-11
96. Traceable item history of this document according to AUTOSAR Release R24-11
97. Added 规范 Items in R24-11
98. Changed 规范 Items in R24-11
99. Deleted 规范 Items in R24-11
100. Traceable item history of this document according to AUTOSAR Release R23-11
101. Added 规范 Items in R23-11
102. Changed 规范 Items in R23-11
103. Deleted 规范 Items in R23-11
104. 不适用需求
