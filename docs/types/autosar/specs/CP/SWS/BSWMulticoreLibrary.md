# Specification of Basic Software Multicore Library (`BSWMulticoreLibrary`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 946 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_BSWMulticoreLibrary_946\AUTOSAR_CP_SWS_BSWMulticoreLibrary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_BSWMulticoreLibrary_946\AUTOSAR_CP_SWS_BSWMulticoreLibrary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_BSWMulticoreLibrary_946\zzgen\CP_SWS_BSWMulticoreLibrary.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration of the AUTOSAR library for atomic routines.

This library (Bmc) contains the following routines:

* flag test and set
* flag clear
* store
* load
* exchange
* compare and exchange
* fetch and add
* fetch and subtract
* fetch and or
* fetch and xor
* fetch and and
* thread fence

All routines are re-entrant and can be used by multiple runnables at the same time.

## 模块依赖

Upstream requirements:
⌈
The Bmc module shall provide the following files: C files Bmc_<name>.c used to implement the library. All C files shall be pre-fixed with 'Bmc_'. The header file Bmc.h provides all public function prototypes and types defined by the Bmc library specification.
⌋

Implementation and grouping of routines with respect to C files is recommended as per options below and there is no restriction to follow these proposals.

Option 1: <Name> can be a function name providing one C file per function, e.g.: `Bmc_FlagClear`.c etc.

Option 2: <Name> can be a common name of a group of functions: 2.1 Group by routine family: e.g.: `Bmc_Flag`.c, `Bmc_Fetch`.c 2.2 Group by other methods (individual grouping allowed)

Option 3: <Name> can be removed so that a single C file shall contain all Bmc functions, e.g.: Bmc.c. Using one of the above options gives certain flexibility of choosing suitable granularity with reduced number of C files. Linking only on-demand is also possible in case of some options.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration of the AUTOSAR library for atomic routines.

This library (Bmc) contains the following routines:

* flag test and set
* flag clear
* store
* load
* exchange
* compare and exchange
* fetch and add
* fetch and subtract
* fetch and or
* fetch and xor
* fetch and and
* thread fence

All routines are re-entrant and can be used by multiple runnables at the same time.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Bmc module that are not included in the .

| Abbreviation/Acronym: | Description: |
|---|---|
| Bmc | Basic Software Multicore Library |
| DET | Default Error Tracer |
| s16 | Mnemonic for sint16, specified in AUTOSAR_SWS_PlatformTypes |
| s32 | Mnemonic for sint32, specified in AUTOSAR_SWS_PlatformTypes |
| s64 | Mnemonic forsint64, specified in AUTOSAR_SWS_PlatformTypes |
| s8 | Mnemonic for sint8, specified in AUTOSAR_SWS_PlatformTypes |
| u16 | Mnemonic for uint16, specified in AUTOSAR_SWS_PlatformTypes |
| u32 | Mnemonic for uint32, specified in AUTOSAR_SWS_PlatformTypes |
| u64 | Mnemonic for uint64, specified in AUTOSAR_SWS_PlatformTypes |
| u8 | Mnemonic for uint8, specified in AUTOSAR_SWS_PlatformTypes |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for BSWMulticoreLibrary.

Thus, the specification SWS BSW General shall be considered as additional and required specification for BSWMulticoreLibrary.

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

Upstream requirements:
⌈
The Bmc module shall provide the following files: C files Bmc_<name>.c used to implement the library. All C files shall be pre-fixed with 'Bmc_'. The header file Bmc.h provides all public function prototypes and types defined by the Bmc library specification.
⌋

Implementation and grouping of routines with respect to C files is recommended as per options below and there is no restriction to follow these proposals.

Option 1: <Name> can be a function name providing one C file per function, e.g.: `Bmc_FlagClear`.c etc.

Option 2: <Name> can be a common name of a group of functions: 2.1 Group by routine family: e.g.: `Bmc_Flag`.c, `Bmc_Fetch`.c 2.2 Group by other methods (individual grouping allowed)

Option 3: <Name> can be removed so that a single C file shall contain all Bmc functions, e.g.: Bmc.c. Using one of the above options gives certain flexibility of choosing suitable granularity with reduced number of C files. Linking only on-demand is also possible in case of some options.

### 10. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| AUTOSAR Basic Software Modules shall be compiler and platform independent |  |  |
| All AUTOSAR standard types and constants shall be placed and organized in a standard type header file |  |  |
| All Basic Software Modules shall provide a readable module vendor identification |  |  |
| AUTOSAR shall provide a boolean type |  |  |
| All software modules shall provide a module identifier in the header file and in the module XML description file. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能规范
*原文标题：Functional specification*

### 12. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 13. Development 错误
*原文标题：Development Errors*

There are no development errors.

### 14. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 15. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 16. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 17. 初始化 and 关机
*原文标题：Initialization and Shutdown*

Upstream requirements:
⌈
The Bmc library shall not require an initialization phase. A Library function may be called at the very first step of ECU initialization, e.g. even by the OS or EcuM, thus the library shall be ready.
⌋

  Upstream requirements:
⌈
The Bmc library shall not require a shutdown operation phase.
⌋

### 18. Using 库 API
*原文标题：Using Library API*

Upstream requirements:
⌈
The Bmc API can be directly called from BSW modules or SWCs. No port definition is required. It is a pure function call.
⌋

  Upstream requirements:
⌈
Using a library should be documented. If a BSW module or a SWC uses a library, the developer should add an ImplementationDependencyOnArtifact in the BSW/SWC template. minVersion and maxVersion parameters correspond to the supplier version. In case of an AUTOSAR library, these parameters may be left empty because a SWC or BSW module may rely on a library behavior, not on a supplier implementation. However, the SWC or BSW modules shall be compatible with the AUTOSAR platform where they are integrated.
⌋

The user has to ensure that atomic data are allocated in a memory which allows atomic access. Hence it might be useful to use a vendor specific but unique {refinement} keyword in the memory allocation keyword (MAKW) or respective software addressing methods (SwAddrMethod) which can be used to derive according MemoryAllocation options for the purpose of mapping.

### 19. 库 Implementation
*原文标题：Library Implementation*

Upstream requirements:
⌈
The Bmc library shall be implemented in a way that the code can be shared among callers in different memory partitions.
⌋

  Upstream requirements:
⌈
Usage of macros should be avoided. The functions should be declared as functions or inline functions.
⌋

  Upstream requirements:
⌈
A library function shall not call any BSW modules functions, e.g. the DET. A library function can call other library functions because a library function shall be re-entrant. But other BSW modules functions may not be re-entrant.
⌋

  Upstream requirements:
⌈
The library, written in the C programming language, should conform to the MISRA C Standard. Please refer to `SWS_BSW_00115` for more details.
⌋

  Upstream requirements:
⌈
Each AUTOSAR library Module implementation <library>*.c and <library>*.h shall map their code to memory sections using the AUTOSAR memory mapping mechanism.
⌋

  Upstream requirements:
⌈
Each AUTOSAR library Module implementation <library>*.c that uses AUTOSAR integer data types and/or the standard return type, shall include the header file `Std_Types`.h.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. API 规范
*原文标题：API specification*

### 21. Imported 类型
*原文标题：Imported types*

In this chapter, all types included from the following files are listed.

 Definition of imported datatypes of module Bmc
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_VersionInfoType |

⌋

### 22. 类型定义
*原文标题：Type definitions*

Note: Most likely the Bmc AtomicTypes will be the native datatype of the microcontroller (e.g. uint32/sint32 for a 32 bit microcontroller).

### 23. Bmc_AtomicUType

Definition of datatype `Bmc_AtomicUType`
⌈
| Name | Bmc_AtomicUType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | - | - | The Bmc_AtomicUType shall always be mapped to a platform specific type where atomic operations can be realized by the respective HW platform, to ensure that all the operations performed on this type are lock-free |
| Description | The type shall be used for all unsigned data items, which are used for Bmc library functions. | < | < |
| Available via | Bmc.h | < | < |

⌋

### 24. Bmc_AtomicSType

Definition of datatype `Bmc_AtomicSType`
⌈
| Name | Bmc_AtomicSType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | sint | < | < |
| Range | - | - | The Bmc_AtomicSType shall always be mapped to a platform specific type where atomic operations can be realized by the respective HW platform, to ensure that all the operations performed on this type are lock-free |
| Description | The type shall be used for all signed data items, which are used for Bmc library functions. | < | < |
| Available via | Bmc.h | < | < |

⌋

### 25. Bmc_AtomicFlagType

Definition of datatype `Bmc_AtomicFlagType`
⌈
| Name | Bmc_AtomicFlagType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | Could be derived from C11 StdAtomic atomic_flag | < | < |
| Range | - | - | The Bmc_AtomicFlagType shall always be mapped to a platform specific type where atomic operations can be realized by the respective HW platform, to insure that all the operations performed on this type are lock-free |
| Description | The type shall be used for all Flag data items, which are used for Bmc library functions. | < | < |
| Available via | Bmc.h | < | < |

⌋

### 26. Macro 定义
*原文标题：Macro definitions*

No Macro definitions.

### 27. 功能定义
*原文标题：Function definitions*

Note: All atomic operations will provide sequentially consistent ordering (see https://en.cppreference.com/w/c/atomic/memory_order#Sequentially-consistent_ordering).

Note: All variables manipulated by atomic operations have to be created with the respective atomic type and not only typecasted in the API parameter. Otherwise correct functionality cannot be guaranteed.

### 28. Flag Routines

### 29. Bmc_FlagTestAndSet

Definition of API function `Bmc_FlagTestAndSet`
⌈
| Service Name | Bmc_FlagTestAndSet | < |
|---|---|---|
| Syntax | boolean Bmc_FlagTestAndSet ( |  |

  volatile `Bmc_AtomicFlagType`* Object
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | Object | Object |
| Parameters (out) | None | < |
| Return value | boolean | The value pointed to by Object immediately before the effects |
| Description | Atomically sets the value pointed to by Object to true. | < |
| Available via | Bmc.h | < |

⌋

⌈
The function `Bmc_FlagTestAndSet` atomically sets the value pointed to by Object to TRUE. It returns this value before the operation, i.e., TRUE, if it was already set and FALSE otherwise.
⌋

### 30. Bmc_FlagClear

Definition of API function `Bmc_FlagClear`
⌈
| Service Name | Bmc_FlagClear | < |
|---|---|---|
| Syntax | void Bmc_FlagClear ( |  |

  volatile `Bmc_AtomicFlagType`* Object
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | Object | Object |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Atomically sets the value pointed to by Object to false. | < |
| Available via | Bmc.h | < |

⌋

⌈
The function `Bmc_FlagClear` atomically sets the value pointed to by Object to FALSE.
⌋

### 31. Load and Store Routines

⌈
All load and store routines shall implicitly make use of the feature explicitly introduced by `Bmc_ThreadFence`.
⌋

### 32. Bmc_Load

Definition of API function `Bmc_Load_u`
⌈
| Service Name | Bmc_Load_u | < |
|---|---|---|
| Syntax | Bmc_AtomicUType Bmc_Load_u ( |  |

  const volatile `Bmc_AtomicUType`* Object
| ) | < |  |
|---|---|---|
| Service ID | 0x10 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | Object | - |
| Parameters (out) | None | < |
| Return value | Bmc_AtomicUType | The value pointed to by Object |
| Description | Atomically loads the value pointed to by Object and returns it. | < |
| Available via | Bmc.h | < |

⌋

### 33. Bmc_Store

Definition of API function `Bmc_Store_u`
⌈
| Service Name | Bmc_Store_u | < |
|---|---|---|
| Syntax | void Bmc_Store_u ( |  |

  volatile `Bmc_AtomicUType`* Object,
  `Bmc_AtomicUType` Desired
| ) | < |  |
|---|---|---|
| Service ID | 0x20 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Desired | Value to be stored |
| Parameters (inout) | Object | Object |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Atomically replaces the value pointed to by Object with the value of Desired. | < |
| Available via | Bmc.h | < |

⌋

### 34. Bmc_Exchange

Definition of API function `Bmc_Exchange_u`
⌈
| Service Name | Bmc_Exchange_u | < |
|---|---|---|
| Syntax | Bmc_AtomicUType Bmc_Exchange_u ( |  |

  volatile `Bmc_AtomicUType`* Object,
  `Bmc_AtomicUType` Desired
| ) | < |  |
|---|---|---|
| Service ID | 0x30 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Desired | Value to be stored |
| Parameters (inout) | Object | Object |
| Parameters (out) | None | < |
| Return value | Bmc_AtomicUType | The value pointed to by Object immediately before the effects |
| Description | Atomically replaces the value pointed to by Object with the value of Desired and returns the value pointed to by Object immediately before the effects. | < |
| Available via | Bmc.h | < |

⌋

### 35. Bmc_CompareExchange

Definition of API function `Bmc_CompareExchange_u`
⌈
| Service Name | Bmc_CompareExchange_u | < |
|---|---|---|
| Syntax | boolean Bmc_CompareExchange_u ( |  |

  volatile `Bmc_AtomicUType`* Object,
  `Bmc_AtomicUType`* Expected,
  `Bmc_AtomicUType` Desired
| ) | < |  |
|---|---|---|
| Service ID | 0x40 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Desired | Value to be stored |
| Parameters (inout) | Object | Object |
| ^ | Expected | Value to be stored |
| Parameters (out) | None | < |
| Return value | boolean | The result of the comparison |
| Description | Atomically compares the value pointed to by Object for equality with that in Expected, and if true, replaces the value pointed to by Object with Desired, and if false, updates the value in Expected with the value pointed to by Object. | < |
| Available via | Bmc.h | < |

⌋

### 36. Fetch Routines

⌈
All fetch routines shall implicitly make use of the feature explicitly introduced by `Bmc_ThreadFence`.
⌋

### 37. Bmc_FetchAdd

Definition of API function `Bmc_FetchAdd_u`
⌈
| Service Name | Bmc_FetchAdd_u | < |
|---|---|---|
| Syntax | Bmc_AtomicUType Bmc_FetchAdd_u ( |  |

  volatile `Bmc_AtomicUType`* Object,
  `Bmc_AtomicUType` Operand
| ) | < |  |
|---|---|---|
| Service ID | 0x50 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Operand | Value for the operation |
| Parameters (inout) | Object | Object |
| Parameters (out) | None | < |
| Return value | Bmc_AtomicUType | The value pointed to by Object immediately before the effects |
| Description | Atomically replaces the value pointed to by Object with the result of the addition applied to the value pointed to by Object and the given Operand. | < |
| Available via | Bmc.h | < |

⌋

### 38. Bmc_FetchSub

Definition of API function `Bmc_FetchSub_u`
⌈
| Service Name | Bmc_FetchSub_u | < |
|---|---|---|
| Syntax | Bmc_AtomicUType Bmc_FetchSub_u ( |  |

  volatile `Bmc_AtomicUType`* Object,
  `Bmc_AtomicUType` Operand
| ) | < |  |
|---|---|---|
| Service ID | 0x60 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Operand | Value for the operation |
| Parameters (inout) | Object | Object |
| Parameters (out) | None | < |
| Return value | Bmc_AtomicUType | The value pointed to by Object immediately before the effects |
| Description | Atomically replaces the value pointed to by Object with the result of the subtraction applied to the value pointed to by Object and the given Operand. | < |
| Available via | Bmc.h | < |

⌋

### 39. Bmc_FetchOr

Definition of API function `Bmc_FetchOr_u`
⌈
| Service Name | Bmc_FetchOr_u | < |
|---|---|---|
| Syntax | Bmc_AtomicUType Bmc_FetchOr_u ( |  |

  volatile `Bmc_AtomicUType`* Object,
  `Bmc_AtomicUType` Operand
| ) | < |  |
|---|---|---|
| Service ID | 0x70 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Operand | Value for the operation |
| Parameters (inout) | Object | Object |
| Parameters (out) | None | < |
| Return value | Bmc_AtomicUType | The value pointed to by Object immediately before the effects |
| Description | Atomically replaces the value pointed to by Object with the result of the or-operation applied to the value pointed to by Object and the given Operand. | < |
| Available via | Bmc.h | < |

⌋

### 40. Bmc_FetchXor

Definition of API function `Bmc_FetchXor_u`
⌈
| Service Name | Bmc_FetchXor_u | < |
|---|---|---|
| Syntax | Bmc_AtomicUType Bmc_FetchXor_u ( |  |

  volatile `Bmc_AtomicUType`* Object,
  `Bmc_AtomicUType` Operand
| ) | < |  |
|---|---|---|
| Service ID | 0x84 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Operand | Value for the operation |
| Parameters (inout) | Object | Object |
| Parameters (out) | None | < |
| Return value | Bmc_AtomicUType | The value pointed to by Object immediately before the effects |
| Description | Atomically replaces the value pointed to by Object with the result of the xor-operation applied to the value pointed to by Object and the given Operand. | < |
| Available via | Bmc.h | < |

⌋

### 41. Bmc_FetchAnd

Definition of API function `Bmc_FetchAnd_u`
⌈
| Service Name | Bmc_FetchAnd_u | < |
|---|---|---|
| Syntax | Bmc_AtomicUType Bmc_FetchAnd_u ( |  |

  volatile `Bmc_AtomicUType`* Object,
  `Bmc_AtomicUType` Operand
| ) | < |  |
|---|---|---|
| Service ID | 0x90 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | Object | Object |
| ^ | Operand | Value for the operation |
| Parameters (out) | None | < |
| Return value | Bmc_AtomicUType | The value pointed to by Object immediately before the effects |
| Description | Atomically replaces the value pointed to by Object with the result of the and-operation applied to the value pointed to by Object and the given Operand. | < |
| Available via | Bmc.h | < |

⌋

### 42. Fence Routines

### 43. Bmc_ThreadFence

Definition of API function `Bmc_ThreadFence`
⌈
| Service Name | Bmc_ThreadFence | < |
|---|---|---|
| Syntax | void Bmc_ThreadFence ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Creates a sequentially consistent acquire and release fence. |  |

| An acquire and release fence instruction prevents the memory reordering of any read or write which precedes it in program order with any read or write which follows it in program order. | < |  |
|---|---|---|
| Available via | Bmc.h | < |

⌋

⌈
The function `Bmc_ThreadFence` creates a sequentially consistent acquire and release fence.
⌋

Note: It may also serve as a compiler barrier which stops the compiler from moving instructions across it either way for optimization purposes. Any instruction that occurs in program order before this instruction will not be reordered after this instruction. Every instruction that occurs after this instruction will not be reordered before this instruction.

### 44. Version API

### 45. Bmc_GetVersionInfo

Definition of API function `Bmc_GetVersionInfo`
⌈
| Service Name | Bmc_GetVersionInfo | < |
|---|---|---|
| Syntax | void Bmc_GetVersionInfo ( |  |

  `Std_VersionInfoType`* Versioninfo
| ) | < |  |
|---|---|---|
| Service ID | 0xFF | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | Versioninfo | Pointer to where to store the version information of this module. Format according |
| Return value | None | < |
| Description | Returns the version information of this library. | < |
| Available via | Bmc.h | < |

⌋

  Upstream requirements: ,
⌈
If source code for caller and callee of `Bmc_GetVersionInfo` is available, the Bmc library should realize `Bmc_GetVersionInfo` as a macro defined in the module's header file.
⌋

### 46. Callback 通知
*原文标题：Callback notifications*

None.

### 47. Scheduled functions

The Bmc library does not have scheduled functions.

### 48. Expected 接口
*原文标题：Expected Interfaces*

In this section, all interfaces required from other modules are listed.

### 49. Mandatory 接口
*原文标题：Mandatory Interfaces*

This section defines all interfaces that are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module Bmc
⌈
| API Function | Header File | Description |
|---|---|---|
| There are no mandatory interfaces. | < | < |

⌋

### 50. Optional 接口
*原文标题：Optional Interfaces*

This section defines all interfaces that are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module Bmc
⌈
| API Function | Header File | Description |
|---|---|---|
| There are no optional interfaces. | < | < |

⌋

### 51. Configurable 接口
*原文标题：Configurable interfaces*

None.

### 52. 时序图
*原文标题：Sequence diagrams*

Not applicable.

### 53. 配置规范
*原文标题：Configuration specification*

### 54. 发布信息
*原文标题：Published Information*

Upstream requirements: , ,
⌈
The standardized common published parameters as required by  in the General Requirements on Basic Software Modules  shall be published within the header file of this module and need to be provided in the BSW Module Description. The according module abbreviation can be found in the List of Basic Software Modules.
⌋

Additional module-specific published parameters are listed below if applicable.

### 55. 配置 Option
*原文标题：Configuration Option*

Upstream requirements:
⌈
The Bmc library shall not have any configuration options that may affect the functional behavior of the routines. I.e. for a given set of input parameters, the outputs shall be always the same. For example, the returned value in case of error shall not be configurable.
⌋

However, a library vendor is allowed to add specific configuration options concerning library implementation, e.g. for resource consumption optimization.

### 56. 附录
*原文标题：Appendix*

### 57. History of Constraints and 规范 Items
*原文标题：History of Constraints and Specification Items*

Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 58. Constraint and 规范 Item History of this Document According to AUTOSAR Release R22-11
*原文标题：Constraint and Specification Item History of this Document According to AUTOSAR Release R22-11*

### 59. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

### 60. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

### 61. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

### 62. Constraint and 规范 Item History of this Document According to AUTOSAR Release R23-11
*原文标题：Constraint and Specification Item History of this Document According to AUTOSAR Release R23-11*

### 63. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

### 64. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

### 65. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 66. Constraint and 规范 Item History of this Document According to AUTOSAR Release R24-11
*原文标题：Constraint and Specification Item History of this Document According to AUTOSAR Release R24-11*

### 67. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 68. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

### 69. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 70. Constraint and 规范 Item History of this Document According to AUTOSAR Release R25-11
*原文标题：Constraint and Specification Item History of this Document According to AUTOSAR Release R25-11*

### 71. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 72. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

### 73. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

### 74. 不适用需求
*原文标题：Not applicable requirements*

Upstream requirements:
⌈
These requirements are not applicable to this specification.
⌋
