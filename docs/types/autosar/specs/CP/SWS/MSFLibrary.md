# Specification of MSFLibrary (`MSFLibrary`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1085 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_MSFLibrary_1085\AUTOSAR_CP_SWS_MSFLibrary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_MSFLibrary_1085\AUTOSAR_CP_SWS_MSFLibrary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_MSFLibrary_1085\zzgen\CP_SWS_MSFLibrary.complete.txt`

## 文档简介

This specification defines the functionality and the API of the AUTOSAR Memory Specific Function Library (Msf).

The functionallity provided by this specification is similar to existing standard functions which are provided by C environments (see ). AUTOSAR provides this specification in order to harmonize existing similar functions and to not depend on the existing <string.h> provided by compiler vendors.

## 模块依赖

No dependencies to other modules.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification defines the functionality and the API of the AUTOSAR Memory Specific Function Library (Msf).

The functionallity provided by this specification is similar to existing standard functions which are provided by C environments (see ). AUTOSAR provides this specification in order to harmonize existing similar functions and to not depend on the existing <string.h> provided by compiler vendors.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Msf module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Msf | Memory Standard Functions |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which applies also to BSW modules and (in parts) to libraries.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No limitations

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

No dependencies to other modules.

### 10. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|

### 11. 功能规范
*原文标题：Functional specification*

### 12. API 行为
*原文标题：API behavior*

The library provides various runtime optimized memory handling functions.

The following functions shall be replacements for the ones of the C standard library (see ) <string.h>:

Memory block copy function: string.h/memcpy -> `Msf_MemCopy`

Memory block copy function for overlapping memory regions: string.h/memmove -> `Msf_MemMove`

Memory filling function: string.h/memset -> `Msf_MemSet_TypeMn`

Additionally there is an optimized memcopy for 32bit aligned areas:

`Msf_MemCopyAligned_u32`

### 13. 初始化 and 关机
*原文标题：Initialization and shutdown*

As Msf is a library no initialization is required. There is also no shutdown functionality.

### 14. Using 库 API
*原文标题：Using Library API*

Msf API can be directly called from BSW modules or SWC. No port definition is required. It is a pure function call.

Using a library shall be documented. If a BSW module or a SWC uses a Library, the developer shall add an Implementation.DependencyOnArtifact in the BSWMDT/SWCT.

### 15. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

As libraries do not depend on other BSW modules, they do not report errors.

### 16. Development 错误
*原文标题：Development Errors*

There are no development errors.

### 17. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 18. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 19. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 20. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 21. API 规范
*原文标题：API specification*

### 22. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Msf
  Status: DRAFT
⌈
| Module | Header File | Imported Type |
|---|---|---|
| There are no imported types. | < | < |

⌋

It is observed that since the sizes of the integer types provided by the C language are implementation-defined, the range of values that may be represented within each of the integer types will vary between implementations.

Thus, in order to improve the portability of the software, these types are defined in . The following mnemonic are used in the library routine names.

Note:

The naming convention for the API's with boolean return type/parameter type is given as _u8 which shall be interpreted as _b. (Boolean)

If there is no boolean data type present in the return type/parameter type then _u8 shall be interpreted as _u8 only.

| Size | Platform Type | Mnemonic |
|---|---|---|
| unsigned 8-Bit | boolean | u8 |
| signed 8-Bit | sint8 | s8 |
| signed 16-Bit | sint16 | s16 |
| signed 32-Bit | sint32 | s32 |
| unsigned 8-Bit | uint8 | u8 |
| unsigned 16-Bit | uint16 | u16 |
| unsigned 32-Bit | uint32 | u32 |

As a convention in the rest of the document:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 类型定义
*原文标题：Type definitions*

None

### 24. 功能定义
*原文标题：Function definitions*

### 25. 通用 available functions
*原文标题：General available functions*

This chapter contains all APIs which are provided by the module via Msf.h

### 26. 存储 Copy Routine
*原文标题：Memory Copy Routine*

Definition of API function `Msf_MemCopy`
  Status: DRAFT
⌈
| Service Name | Msf_MemCopy (draft) | < |
|---|---|---|
| Syntax | void* Msf_MemCopy ( |  |

  void* Dest,
  const void* Src,
  uint32 NrOfBytes
| ) | < |  |
|---|---|---|
| Service ID | 0x0100 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Src | Pointer to source input data |
| ^ | NrOfBytes | Block size |
| Parameters (inout) | None | < |
| Parameters (out) | Dest | Pointer to destination data |
| Return value | void* | Copy of Dest address |
| Description | Copies the values of NrOfBytes bytes from the location pointed to by source Src directly to the memory block pointed to by destination Dest. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | Msf.h | < |

⌋

The underlying type of the objects pointed to by both the source and destination pointers are irrelevant for this function. The result is a binary copy of the data. For faster copy operation of 32 bit aligned 32 bit double words use

`Msf_MemCopyAligned_u32`.

 Array size restrictions
  Status: DRAFT
⌈
To avoid undefined behavior, the size of the arrays pointed to by both the destination and source parameters shall be at least NrOfBytes bytes and shall not overlap. This applies to `Msf_MemCopy` and `Msf_MemCopyAligned_u32`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Aligned 存储 Copy Routine
*原文标题：Aligned Memory Copy Routine*

Definition of API function `Msf_MemCopyAligned_u32`
  Status: DRAFT
⌈
| Service Name | Msf_MemCopyAligned_u32 (draft) | < |
|---|---|---|
| Syntax | uint32* Msf_MemCopyAligned_u32 ( |  |

  uint32* Dest,
  const uint32* Src,
  uint32 NrOfDWords
| ) | < |  |
|---|---|---|
| Service ID | 0x0101 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Src | Pointer to source input data |
| ^ | NrOfDWords | Number of 32 bit double word elements |
| Parameters (inout) | None | < |
| Parameters (out) | Dest | Pointer to destination data |
| Return value | uint32* | Pointer to destination data |
| Description | Copies the values of NrOfElements 32 bit words from the location pointed to by source pointer Src directly to the memory block pointed to by destination pointer Dest. The source and data memory addresses shall be aligned according to the data type. Source and destination data region shall not overlap. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | Msf.h | < |

⌋

The source and data memory addresses shall be aligned to 32 bit boundaries. The function shall not perform any run-in for unaligned pointer access. Use `Msf_MemCopy` for data, which are not aligned to 32 bit or have 8 or 16 bit word width.

Please also consider .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 存储 Move Routine
*原文标题：Memory Move Routine*

Definition of API function `Msf_MemMove`
  Status: DRAFT
⌈
| Service Name | Msf_MemMove (draft) | < |
|---|---|---|
| Syntax | void* Msf_MemMove ( |  |

  void* Dest,
  const void* Src,
  uint32 NrOfBytes
| ) | < |  |
|---|---|---|
| Service ID | 0x30 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Src | Pointer to source input data |
| ^ | NrOfBytes | Block size |
| Parameters (inout) | None | < |
| Parameters (out) | Dest | Pointer to destination data |
| Return value | void* | Copy of Dest address |
| Description | Copies the values of NrOfBytes bytes from the location pointed to by source pointer Src directly to the memory block pointed to by destination pointer Dest. Copying takes place as if an intermediate buffer were used, allowing the destination and source to overlap. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | Msf.h | < |

⌋

The underlying type of the objects pointed to by both the source and destination pointers are irrelevant for this function. The result is a binary copy of the data. The function implementation shall copy without any temporary buffer. If the destination address is greater than the source address, the copy loop direction is from right to left, otherwise from left to right.

### 29. 存储 Filling Routine
*原文标题：Memory Filling Routine*

Definition of API function `Msf_MemSet_`<TypeMn>
  Status: DRAFT
⌈
| Service Name | Msf_MemSet_<TypeMn> (draft) | < |
|---|---|---|
| Syntax | <Type>* Msf_MemSet_<TypeMn> ( |  |

  <Type>* Dest,
  <Type> Pattern,
  uint32 NrOfElements
| ) | < |  |
|---|---|---|
| Service ID | 0x40 to 0x42 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Pattern | Fill pattern |
| ^ | NrOfElements | Number of elements |
| Parameters (inout) | None | < |
| Parameters (out) | Dest | Pointer to destination data |
| Return value | <Type>* | Pointer to destination data |
| Description | Sets the first NrOfElements words with the API type <Type> of the block of memory pointed by Dest to the specified value. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | Msf.h | < |

⌋

List of functions:

| Function ID | Function prototype |
|---|---|
| 0x40 | uint8 *Msf_MemSet_u8(uint8 *Dest, uint8 Pattern, uint32 NrOfElements) |
| 0x41 | uint16 *Msf_MemSet_u16(uint16 *Dest, uint16 Pattern, uint32 NrOfElements) |
| 0x42 | uint32 *Msf_MemSet_u32(uint32 *Dest, uint32 Pattern, uint32 NrOfElements) |

### 30. Functions provided for Msf

This chapter contains all APIs which are provided to Msf via the private module header.

### 31. Scheduled functions

None

### 32. Expected 接口
*原文标题：Expected interfaces*

None

### 33. Mandatory 接口
*原文标题：Mandatory interfaces*

Definition of mandatory interfaces required by module Msf
  Status: DRAFT
⌈
| API Function | Header File | Description |
|---|---|---|
| There are no mandatory interfaces. | < | < |

⌋

### 34. Optional 接口
*原文标题：Optional interfaces*

Definition of optional interfaces requested by module Msf
  Status: DRAFT
⌈
| API Function | Header File | Description |
|---|---|---|
| There are no optional interfaces. | < | < |

⌋

### 35. Callout 接口
*原文标题：Callout interfaces*

None

### 36. Configurable 接口
*原文标题：Configurable interfaces*

None

### 37. 时序图
*原文标题：Sequence diagrams*

None

### 38. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. As libraries do not have a configuration this chapter is empty.

### 39. 附录
*原文标题：Appendix*

### 40. 不适用需求
*原文标题：Not applicable requirements*

Status: DRAFT
  Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
The uptraces of this spec item are not applicable to this specification.
⌋

### 41. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 42. Traceable item history of this document according to AUTOSAR Release R24-11

### 43. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

| Number | Heading |
|---|---|
| Definition of API function Msf_MemCopy |  |
| Definition of API function Msf_MemCopyAligned_u32 |  |
| Definition of API function Msf_MemMove |  |
| Definition of API function Msf_MemSet_<TypeMn> |  |
| Definition of API function Msf_GetVersionInfo |  |
| Definition of imported datatypes of module Msf |  |
| Definition of mandatory interfaces required by module Msf |  |
| Definition of optional interfaces requested by module Msf |  |

### 44. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 45. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 46. Added Constraints in R24-11

| Number | Heading |
|---|---|
| Array size restrictions |  |

### 47. Changed Constraints in R24-11

none

### 48. Deleted Constraints in R24-11

none

### 49. Traceable item history of this document according to AUTOSAR Release R25-11

### 50. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 51. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 52. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 53. Added Constraints in R25-11

none

### 54. Changed Constraints in R25-11

none

### 55. Deleted Constraints in R25-11

none

### 56. Traceable item history of this document according to AUTOSAR Release R26-11

### 57. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 58. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

| Number | Heading |
|---|---|
| Definition of imported datatypes of module Msf |  |

### 59. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

| Number | Heading |
|---|---|
| Definition of API function Msf_GetVersionInfo |  |

### 60. Added Constraints in R26-11

none

### 61. Changed Constraints in R26-11

none

### 62. Deleted Constraints in R26-11

none
