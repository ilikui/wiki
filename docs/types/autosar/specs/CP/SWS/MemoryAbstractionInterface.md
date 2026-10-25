# Specification of Memory Abstraction Interface (`MemoryAbstractionInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 285 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_MemoryAbstractionInterface_285\AUTOSAR_CP_SWS_MemoryAbstractionInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_MemoryAbstractionInterface_285\AUTOSAR_CP_SWS_MemoryAbstractionInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_MemoryAbstractionInterface_285\zzgen\CP_SWS_MemoryAbstractionInterface.complete.txt`

## 文档简介

This specification describes the functionality, API and configuration of the AUTOSAR Basic Software Module "Memory Abstraction Interface" (MemIf). This module allows the  NVRAM manager to access several memory abstraction modules (FEE or EA modules) (see Figure ).

The Memory Abstraction Interface (MemIf) shall abstract from the number of underlying  FEE or  EA modules and provide upper layers with a virtual segmentation on a uniform linear address space.

## 模块依赖

No content.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and configuration of the AUTOSAR Basic Software Module "Memory Abstraction Interface" (MemIf). This module allows the  NVRAM manager to access several memory abstraction modules (FEE or EA modules) (see Figure ).

The Memory Abstraction Interface (MemIf) shall abstract from the number of underlying  FEE or  EA modules and provide upper layers with a virtual segmentation on a uniform linear address space.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the MemIf module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| EA | EEPROM Abstraction |
| EEPROM | Electrically Erasable and Programmable ROM (Read Only Memory) |
| FEE | Flash EEPROM Emulation |
| LSB | Least significant bit / byte (depending on context). Here it's bit. |
| Mem | AUTOSAR Basic Software Module Memory Driver |
| MemAcc | AUTOSAR Basic Software Module Memory Access |
| MemIf | Memory Abstraction Interface |
| MSB | Most significant bit / byte (depending on context). Here it's bit. |
| NvM | NVRAM Manager |
| NVRAM | Non-volatile RAM (Random Access Memory) |
| Address area | Contiguous memory area in the logical address space. Typically, multiple physical memory sectors are combined to one logical address area. |
| Fast Mode | E.g. during startup / shutdown the underlying driver may be switched into fast mode in order to allow for fast reading / writing in those phases. Note: Whether this is possible depends on the implementation of the driver and the capabilities of the underlying device. Whether it is done depends on the configuration of the NVRAM manager and thus on the needs of a specific project. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Memory Abstraction Interface.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Memory Abstraction Interface.

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

No content.

### 10. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| Classification of development errors |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The Basic Software Module specifications shall specify at least in the description which other modules they require |  |  |
| List possible error notifications |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| Parameters shall have a type |  |  |
| No description |  |  |
| The FEE and EA modules shall provide a write service that operates only on complete configured logical blocks |  |  |
| The Memory Abstraction Interface shall provide uniform access to the API services of the underlying memory abstraction modules |  |  |
| The Memory Abstraction Interface shall allow the selection of an underlying memory abstractio |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能规范
*原文标题：Functional specification*

### 12. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 13. Development 错误
*原文标题：Development Errors*

Definition of development errors in module MemIf
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called with wrong device index parameter | MEMIF_E_PARAM_DEVICE | 0x01 |
| API service called with NULL pointer argument | MEMIF_E_PARAM_POINTER | 0x02 |

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

### 19. Standard 类型
*原文标题：Standard types*

In this chapter, all types included from the following modules are listed:

 Definition of imported datatypes of module MemIf
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 20. 类型定义
*原文标题：Type definitions*

Upstream requirements:
⌈
The types specified in this chapter shall not be changed or extended for a specific memory abstraction module or hardware platform.
⌋

  Upstream requirements:
⌈
The data type for the memory device index shall be uint8. The lowest value to be used for this device index shall be 0. The allowed range of indices thus shall be 0..`MEMIF_NUMBER_OF_DEVICES`-1.
⌋

### 21. MemIf_StatusType

Definition of datatype `MemIf_StatusType`
  Upstream requirements:
⌈
| Name | MemIf_StatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MEMIF_UNINIT | - | The underlying abstraction module or device driver has not been initialized (yet). |
| ^ | MEMIF_IDLE | - | The underlying abstraction module or device driver is currently idle. |
| ^ | MEMIF_BUSY | - | The underlying abstraction module or device driver is currently busy. |
| ^ | MEMIF_BUSY_INTERNAL | - | The underlying abstraction module is busy with internal management operations. The underlying device driver can be busy or idle. |
| Description | Denotes the current status of the underlying abstraction module and device drive. | < | < |
| Available via | MemIf.h | < | < |

⌋

### 22. MemIf_JobResultType

Definition of datatype `MemIf_JobResultType`
  Upstream requirements:
⌈
| Name | MemIf_JobResultType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MEMIF_JOB_OK | - | The job has been finished successfully. |
| ^ | MEMIF_JOB_FAILED | - | The job has not been finished successfully. |
| ^ | MEMIF_JOB_PENDING | - | The job has not yet been finished. |
| ^ | MEMIF_JOB_CANCELED | - | The job has been canceled. |
| ^ | MEMIF_BLOCK_INCONSISTENT | - | 1. The requested block is inconsistent, it may contain corrupted data. 2. Block is NOT found. |
| ^ | MEMIF_BLOCK_INVALID | - | The requested block has been marked as invalid, the requested operation can not be performed. |
| Description | Denotes the result of the last job. | < | < |
| Available via | MemIf.h | < | < |

⌋

### 23. 功能定义
*原文标题：Function definitions*

Upstream requirements: ,
⌈
The API specified in this chapter shall be mapped to the API of the underlying memory abstraction modules. For functional behavior refer to the specification of those modules respectively to that of the underlying memory drivers.
⌋

  Upstream requirements: ,
⌈
The parameter DeviceIndex shall be used for selection of memory abstraction modules (and thus memory devices). If only one memory abstraction module is configured, the parameter DeviceIndex shall be ignored.
⌋

  Upstream requirements: ,
⌈
If only one memory abstraction module is configured, the Memory Abstraction Interface shall be implemented as a set of macros mapping the Memory Abstraction Interface API to the API of the corresponding memory abstraction module.
⌋

Example:

#define `MemIf_Write`(DeviceIndex, BlockNumber, DataPtr) \
            `Fee_Write`(BlockNumber, DataPtr)

  Upstream requirements: ,
⌈
If more than one memory abstraction module is configured, the Memory Abstraction Interface shall use efficient mechanisms to map the API calls to the appropriate memory abstraction module.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. MemIf_Read

Definition of API function `MemIf_Read`
  Upstream requirements: ,
⌈
| Service Name | MemIf_Read | < |
|---|---|---|
| Syntax | Std_ReturnType MemIf_Read ( |  |

  uint16 DeviceIndex,
  uint16 BlockNumber,
  uint16 BlockOffset,
  uint8* DataBufferPtr,
  uint16 Length
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | DeviceIndex | - |
| ^ | BlockNumber | - |
| ^ | BlockOffset | - |
| ^ | Length | - |
| Parameters (inout) | None | < |
| Parameters (out) | DataBufferPtr | - |
| Return value | Std_ReturnType | In case development error detection is enabled for the Memory Abstraction Interface and a development error is detected according to  the function shall return E_NOT_OK else it shall return the value of the called function of the underlying module. |
| Description | Invokes the "Read" function of the underlying memory abstraction module selected by the parameter DeviceIndex. | < |
| Available via | MemIf.h | < |

⌋

### 25. MemIf_Write

Definition of API function `MemIf_Write`
  Upstream requirements: ,
⌈
| Service Name | MemIf_Write | < |
|---|---|---|
| Syntax | Std_ReturnType MemIf_Write ( |  |

  uint16 DeviceIndex,
  uint16 BlockNumber,
  const uint8* DataBufferPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | DeviceIndex | - |
| ^ | BlockNumber | - |
| ^ | DataBufferPtr | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | In case development error detection is enabled for the Memory Abstraction Interface and a development error is detected according to  the function shall return E_NOT_OK else it shall return the value of the called function of the underlying module. |
| Description | Invokes the "Write" function of the underlying memory abstraction module selected by the parameter DeviceIndex. | < |
| Available via | MemIf.h | < |

⌋

### 26. MemIf_Cancel

Definition of API function `MemIf_Cancel`
  Upstream requirements: ,
⌈
| Service Name | MemIf_Cancel | < |
|---|---|---|
| Syntax | void MemIf_Cancel ( |  |

  uint16 DeviceIndex
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | DeviceIndex | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Invokes the "Cancel" function of the underlying memory abstraction module selected by the parameter DeviceIndex. | < |
| Available via | MemIf.h | < |

⌋

### 27. MemIf_GetStatus

Definition of API function `MemIf_GetStatus`
  Upstream requirements:
⌈
| Service Name | MemIf_GetStatus | < |
|---|---|---|
| Syntax | MemIf_StatusType MemIf_GetStatus ( |  |

  uint16 DeviceIndex
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | DeviceIndex | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | MemIf_StatusType | - |
| Description | Invokes the "GetStatus" function of the underlying memory abstraction module selected by the parameter DeviceIndex. | < |
| Available via | MemIf.h | < |

⌋

  Upstream requirements:
⌈
If the function `MemIf_GetStatus` is called with the device index denoting a broadcast to all configured devices (`MEMIF_BROADCAST_ID`), the Memory Abstraction Interface module shall call the "GetStatus" functions of all underlying devices in turn. It shall return the value

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. MemIf_GetJobResult

Definition of API function `MemIf_GetJobResult`
  Upstream requirements:
⌈
| Service Name | MemIf_GetJobResult | < |
|---|---|---|
| Syntax | MemIf_JobResultType MemIf_GetJobResult ( |  |

  uint16 DeviceIndex
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | DeviceIndex | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | MemIf_JobResultType | In case development error detection is enabled for the Memory Abstraction Interface and a development error is detected according to  the function shall return MEMIF_JOB_FAILED else it shall return the value of the called function of the underlying module. |
| Description | Invokes the "GetJobResult" function of the underlying memory abstraction module selected by the parameter DeviceIndex. | < |
| Available via | MemIf.h | < |

⌋

### 29. MemIf_InvalidateBlock

Definition of API function `MemIf_InvalidateBlock`
  Upstream requirements: ,
⌈
| Service Name | MemIf_InvalidateBlock | < |
|---|---|---|
| Syntax | Std_ReturnType MemIf_InvalidateBlock ( |  |

  uint16 DeviceIndex,
  uint16 BlockNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | DeviceIndex | - |
| ^ | BlockNumber | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | In case development error detection is enabled for the Memory Abstraction Interface and a development error is detected according to  the function shall return E_NOT_OK else it shall return the value of the called function of the underlying module. |
| Description | Invokes the "InvalidateBlock" function of the underlying memory abstraction module selected by the parameter DeviceIndex. | < |
| Available via | MemIf.h | < |

⌋

### 30. MemIf_GetVersionInfo

Definition of API function `MemIf_GetVersionInfo`
  Upstream requirements:
⌈
| Service Name | MemIf_GetVersionInfo | < |
|---|---|---|
| Syntax | void MemIf_GetVersionInfo ( |  |

  `Std_VersionInfoType`* VersionInfoPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | VersionInfoPtr | Pointer to standard version information structure. |
| Return value | None | < |
| Description | Returns version information. | < |
| Available via | MemIf.h | < |

⌋

### 31. MemIf_EraseImmediateBlock

Definition of API function `MemIf_EraseImmediateBlock`
  Upstream requirements: ,
⌈
| Service Name | MemIf_EraseImmediateBlock | < |
|---|---|---|
| Syntax | Std_ReturnType MemIf_EraseImmediateBlock ( |  |

  uint16 DeviceIndex,
  uint16 BlockNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | DeviceIndex | - |
| ^ | BlockNumber | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | In case development error detection is enabled for the Memory Abstraction Interface and a development error is detected according to  the function shall return E_NOT_OK else it shall return the value of the called function of the underlying module. |
| Description | Invokes the "EraseImmediateBlock" function of the underlying memory abstraction module selected by the parameter DeviceIndex. | < |
| Available via | MemIf.h | < |

⌋

### 32. Callback 通知
*原文标题：Callback notifications*

None, the NVRAM manager shall provide the callback routines for the underlying memory abstraction modules.

### 33. Scheduled functions

None, there are no asynchronous functions in this module.

### 34. Expected 接口
*原文标题：Expected interfaces*

### 35. Mandatory 接口
*原文标题：Mandatory Interfaces*

This chapter defines all interfaces which are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module MemIf
  Upstream requirements:
⌈
| API Function | Header File | Description |
|---|---|---|
| Ea_EraseImmediateBlock | Ea.h | Erases the block BlockNumber. |
| Ea_GetStatus | Ea.h | Service to return the Status. |
| Ea_InvalidateBlock | Ea.h | Invalidates the block BlockNumber. |
| Fee_EraseImmediateBlock | Fee.h | Service to erase a logical block. |
| Fee_GetStatus | Fee.h | Service to return the status. |
| Fee_InvalidateBlock | Fee.h | Service to invalidate a logical block. |

⌋

### 36. Optional 接口
*原文标题：Optional Interfaces*

This chapter defines all interfaces which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module MemIf
  Upstream requirements:
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |

⌋

### 37. Configurable 接口
*原文标题：Configurable interfaces*

In this chapter all interfaces are listed where the target function could be configured. The target function is usually a call-back function. The names of these kind of interfaces is not fixed because they are configurable.

There are no configurable interfaces for this module.

### 38. 时序图
*原文标题：Sequence diagrams*

Refer to the specifications of the memory abstraction modules.

### 39. 配置规范
*原文标题：Configuration specification*

### 40. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meaning of the parameters are described in Chapter  and Chapter .

### 41. MemIf

Definition of EcucModuleDef MemIf
⌈
| Module Name | MemIf |
|---|---|
| Description | Configuration of the MemIf (Memory Abstraction Interface) module. |
| Post-Build Variant Support | false |
| Supported Config Variants | VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| MemIfGeneral | 1 | Configuration of the memory abstraction interface (Memif) module. |

⌋

### 42. MemIfGeneral

Definition of EcucParamConfContainerDef MemIfGeneral
⌈
| Container Name | MemIfGeneral | < | < |
|---|---|---|---|
| Parent Container | MemIf | < | < |
| Upstream mapping defined | - | < | < |
| Description | Configuration of the memory abstraction interface (Memif) module. | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| MemIfDevErrorDetect | 1 |  |
| MemIfNumberOfDevices | 1 |  |

No Included Containers
⌋

 Definition of EcucBooleanParamDef MemIfDevErrorDetect
⌈
| Parameter Name | MemIfDevErrorDetect | < | < |
|---|---|---|---|
| Parent Container | MemIfGeneral | < | < |
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

### 43. 附录
*原文标题：Appendix*

### 44. Change history of AUTOSAR traceable items

### 45. Traceable item history of this document according to AUTOSAR Release R25-11

### 46. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 47. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 48. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 49. 不适用需求
*原文标题：Not applicable requirements*

Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
These requirements are not applicable to this specification.
⌋
