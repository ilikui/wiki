# Specification of Fixed Point Interpolation Library (`IFXLibrary`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 396 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_IFXLibrary_396\AUTOSAR_CP_SWS_IFXLibrary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_IFXLibrary_396\AUTOSAR_CP_SWS_IFXLibrary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_IFXLibrary_396\zzgen\CP_SWS_IFXLibrary.complete.txt`

## 文档简介

AUTOSAR Library routines are the part of system services in AUTOSAR architecture and below figure shows position of AUTOSAR library in layered architecture.

Ifx routines specification specifies the functionality, API and the configuration of the AUTOSAR library dedicated to interpolation routines for fixed point values.

The interpolation library contains the following routines:

* Distributed data point search and interpolation
* Integrated data point search and interpolation

All routines are re-entrant and can be used by multiple applications at the same time.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

AUTOSAR Library routines are the part of system services in AUTOSAR architecture and below figure shows position of AUTOSAR library in layered architecture.

Ifx routines specification specifies the functionality, API and the configuration of the AUTOSAR library dedicated to interpolation routines for fixed point values.

The interpolation library contains the following routines:

* Distributed data point search and interpolation
* Integrated data point search and interpolation

All routines are re-entrant and can be used by multiple applications at the same time.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the IFX Library module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Cur | Curve for Interpolation |
| DET | Default Error Tracer |
| DPSearch | Data point search |
| DPResult | Data point result |
| Ifx | Interpolation Fixed point |
| IpoCur | Interpolation of curve used for distributed search and interpolation |
| LkUpCur | Curve look-up used for distributed search and interpolation |
| IpoMap | Interpolation of map used for distributed search and interpolation |
| LkUpMap | Map look-up used for distributed search and interpolation |
| IntIpoCur | Integrated interpolation of curve |
| IntLkUpCur | Integrated curve look-up |
| IntIpoFixCur | Integrated interpolation of fixed curve |
| IntLkUpFixCur | Integrated fixed curve look-up |
| IntIpoFixICur | Integrated interpolation of fixed interval curve |
| IntLkUpFixICur | Integrated fixed interval curve look-up |
| IntIpoMap | Integrated interpolation of map |
| IntLkUpMap | Integrated map look-up |
| IntIpoFixMap | Integrated interpolation of fixed map |
| IntLkUpFixMap | Integrated fixed map look-up |
| IntIpoFixIMap | Integrated interpolation of fixed interval map |
| IntLkUpFixIMap | Integrated fixed interval map look |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for IFX Library.

Thus, the specification SWS BSW General shall be considered as additional and required specification for IFX Library.

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

### 10. 文件结构
*原文标题：File structure*

⌈
The Ifx module shall provide the following files:

* C files, Ifx_<name>.c used to implement the library. All C files shall be prefixed with 'Ifx_'.

Implementation & grouping of routines with respect to C files is recommended as per below options and there is no restriction to follow the same.

Option 1 : <Name> can be function name providing one C file per function,

eg.: `Ifx_IntIpoMap_u16u8_u8`.c etc.

Option 2 : <Name> can have common name of group of functions:

* 2.1 Group by object family:

  eg.:`Ifx_IpoMap`.c, `Ifx_IpoCur`.c, `Ifx_DPSearch`.c
* 2.2 Group by routine family:

  eg.: `Ifx_IpoMap`.c, `Ifx_IntIpoMap`.c, `Ifx_IpoCur`.c etc.
* 2.3 Group by method family:

  eg.: `Ifx_Ipo`.c, `Ifx_IntIpo`.c, `Ifx_Lkup`.c, `Ifx_IntLkup`.c, etc.
* 2.4 Group by architecture:

  eg.: `Ifx_IpoMap8`.c, `Ifx_IpoMap16`.c
* 2.5 Group by other methods: (individual grouping allowed)

Option 3 : <Name> can be removed so that single C file shall contain all Ifx functions, eg.: Ifx.c.

Using above options gives certain flexibility of choosing suitable granularity with reduced number of C files. Linking only on-demand is also possible in case of some options.
⌋

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules written in C language shall conform to the MISRA C 2025 Standard. |  |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| AUTOSAR Basic Software Modules shall be compiler and platform independent |  |  |
| All AUTOSAR standard types and constants shall be placed and organized in a standard type header file |  |  |
| All Basic Software Modules shall provide a readable module vendor identification |  |  |
| AUTOSAR shall provide a boolean type |  |  |
| All software modules shall provide a module identifier in the header file and in the module XML description file. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 功能规范
*原文标题：Functional specification*

### 13. 错误分类
*原文标题：Error Classification*

⌈
Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.
⌋

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 14. Development 错误
*原文标题：Development Errors*

There are no development errors.

### 15. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 16. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 17. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 18. 初始化 and 关机
*原文标题：Initialization and shutdown*

Upstream requirements:
⌈
Ifx library shall not require initialization phase. A Library function may be called at the very first step of ECU initialization, e.g. even by the OS or EcuM, thus the library shall be ready.
⌋

  Upstream requirements:
⌈
Ifx library shall not require a shutdown operation phase.
⌋

### 19. Using 库 API
*原文标题：Using Library API*

Ifx API can be directly called from BSW modules or SWC. No port definition is required. It is a pure function call.

The statement 'Ifx.h' shall be placed by the developer or an application code generator but not by the RTE generator

Using a library should be documented. if a BSW module or a SWC uses a Library, the developer should add an Implementation-DependencyOnArtifact in the BSW/SWC template.

minVersion and maxVersion parameters correspond to the supplier version. In case of AUTOSAR library, these parameters may be left empty because a SWC or BSW module may rely on a library behaviour, not on a supplier implementation. However, the SWC or BSW modules shall be compatible with the AUTOSAR platform where they are integrated.

### 20. 库 implementation
*原文标题：library implementation*

Upstream requirements:
⌈
The Ifx library shall be implemented in a way that the code can be shared among callers in different memory partitions.
⌋

  Upstream requirements:
⌈
Usage of macros should be avoided. The function should be declared as function or inline function. Macro #define should not be used.
⌋

  Upstream requirements:
⌈
A library function can call other library functions because all library functions shall be re-entrant. A library function shall not call any BSW modules functions, e.g. the DET.
⌋

  Upstream requirements:
⌈
The library, written in C programming language, should conform to the MISRA C Standard.

Please refer to `SWS_BSW_00115` for more details.
⌋

  Upstream requirements:
⌈
Each AUTOSAR library Module implementation <library>*.c and

<library>*.h shall map their code to memory sections using the AUTOSAR memory mapping mechanism.
⌋

  Upstream requirements:
⌈
Each AUTOSAR library Module implementation <library>*.c, that uses AUTOSAR integer data types and/or the standard return, shall include the header file `Std_Types`.h.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. API 规范
*原文标题：API specification*

### 22. Imported 类型
*原文标题：Imported types*

In this chapter, all types included from the following modules are listed :

 Definition of imported datatypes of module Ifx
⌈
| Module | Header File | Imported Type |
|---|---|---|
| There are no imported types. | < | < |

⌋

It is observed that since the sizes of the integer types provided by the C language are implementation-defined, the range of values that may be represented within each of the integer types will vary between implementations.

Thus, in order to improve the portability of the software these types are defined in `Platform_Types`.h . The following mnemonic are used in the library routine names.

| Size | Platform Type | Mnemonic | Range |
|---|---|---|---|
| unsigned 8-Bit | boolean | NA | [ TRUE, FALSE ] |
| signed 8-Bit | sint8 | s8 | [ -128, 127 ] |
| signed 16-Bit | sint16 | s16 | [ -32768, 32767 ] |
| signed 32-Bit | sint32 | s32 | [ -2147483648, 2147483647 ] |
| unsigned 8-Bit | uint8 | u8 | [ 0, 255 ] |
| unsigned 16-Bit | uint16 | u16 | [ 0, 65535 ] |
| unsigned 32-Bit | uint32 | u32 | [ 0, 4294967295 ] |

As a convention in the rest of the document:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 类型定义
*原文标题：Type definitions*

Structure definition :

 Definition of datatype `Ifx_DPResultU16_Type`
⌈
| Name | Ifx_DPResultU16_Type | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Index | < |
| ^ | Type | uint16 |
| ^ | Comment | Data point index |
| ^ | Ratio | < |
| ^ | Type | uint16 |
| ^ | Comment | Data point ratio |
| Description | Structure used for data point search for index and ratio | < |
| Available via | Ifx.h | < |

⌋

⌈
Ratio shall have resolution of 2^(-16)
⌋

⌈
Ratio shall be rounded towards zero
⌋

⌈
`Ifx_DPResultU16_Type` structure shall not be read/write/modified by the user directly. Only Ifx routines shall have access to this structure.
⌋

### 24. Comment about rounding

Two types of rounding can be applied:

Results are 'rounded off', it means:

* 0 <= X < 0.5 rounded to 0
* 0.5 <= X < 1 rounded to 1
* -0.5 < X <= 0 rounded to 0
* -1 < X <= -0.5 rounded to -1

Results are rounded towards zero.

* 0 <= X < 1 rounded to 0
* -1 < X <= 0 rounded to 0

### 25. Comment about routines optimization

### 26. Target optimization

The routines described in this library may be realized as regular routines or inline functions. For ROM optimization purposes, it is recommended that the c routines be realized as individual source files so they may be linked in on an as-needed basis.

For example, depending on the target, two types of optimization can be done:

* 00302

  Some routines can be replaced by another routine using integer promotion
* Some routines can be replaced by the combination of a limiting routine and a routine with a different signature.

### 27. Optimization for routine numbers

Many routines can be omitted by exchanging 'X' and 'Y' data types. With this method, reduction in total number of routines is possible in case of Map interpolation routines. This optimization of routine numbers is done based on below mentioned rules.

* Rule 1: Bigger data type of 'X' and 'Y' comes first . (16 Bit before 8 Bit)
* Rule 2: unsigned before signed (u16 before s16)
* Order: u32, s32, u16, s16, u8, s8

In this case, below routine can be replaced as :

`Ifx_IntIpoMap_s8u16_u16`

With

`Ifx_IntIpoMap_u16s8_u16`

Note: swapped inputs need another map value order in memory, see record layout section

### 28. Interpolation routines 定义
*原文标题：Interpolation routines definitions*

Interpolation between two given points is calculated as shown below.

where: X is the input value

x0 = data point before X

x1 = data point after X

y0 = value at x0

y1 = value at x1

Quantization error is by design and shall not be compensated in implementation.

There are two interpolation methods.

* Linear interpolation
* Lookup interpolation

Above figure differentiates linear and lookup integration method. Linear method interpolates result considering two data points, whereas lookup interpolation returns entry data point.

Data point arrays can be grouped as one array or one structure for all elements as shown below.

one array for all elements :

uint8 `Curve_u8` []={5,0,10,26,36,64,1,12,17,11,6};

one structure for all elements :

struct

{ sint16 N = 5;

uint8 X[] ={0,10,26,36,64};

uint8 Y[] ={1,12,17,11,6};

} `Curve_u8`;

where, number of samples = 5

X axis distribution = 0 to 64

Y axis distribution = 1 to 6

Interpolation routines accepts arguments separately to support above scenarios. Routine call example is given below for array and structure grouping respectively.

Example :

uint8 `Ifx_IntIpoCur_u8_u8` (15, `Curve_u8`, &`Curve_u8`, &`Curve_u8`);

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Distributed 数据 point search and interpolation
*原文标题：Distributed data point search and interpolation*

In this interpolation method data point search (e.g. index and ratio) is calculated using routine `Ifx_DPSearch_`<InTypeMn> which returns result structure `Ifx_DPResultU16_Type`. It contains index and ratio information. This result can be used by curve interpolation, curve look-up interpolation, map interpolation and map look-up interpolation.

### 30. 数据 Point Search
*原文标题：Data Point Search*

Definition of API function `Ifx_DPSearch_`<InTypeMn>
⌈
| Service Name | Ifx_DPSearch_<InTypeMn> | < |
|---|---|---|
| Syntax | void Ifx_DPSearch_<InTypeMn> ( |  |

  `Ifx_DPResultU16_Type`* dpResult,
  <InType> Xin,
  <InType> N,
  const <InType>* X_array
| ) | < |  |
|---|---|---|
| Service ID | 0x0001 to 0x0004 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Xin | Input value |
| ^ | N | Number of samples |
| ^ | X_array | Pointer to the X axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | dpResult | Pointer to the result structure |
| Return value | None | < |
| Description | Ifx_DPSearch_<InTypeMn> routine searches the position of input Xin within the given distribution array X_array, and returns index and ratio necessary for interpolation. | < |
| Available via | Ifx.h | < |

⌋

⌈
If (X_array <= Xin <= X_array), then returned Index shall be the lowest index.

dpResult ->Index = index- dpResult ->Ratio = (Xin - X_array) / (X_array  - X_array )
⌋

⌈
If the input value matches with one of the distribution array values, then return the respective index and ratio = 0.

If (Xin == X_array), then

dpResult ->Index = index

dpResult ->Ratio = 0
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Curve interpolation

Definition of API function `Ifx_IpoCur_`<OutTypeMn>
⌈
| Service Name | Ifx_IpoCur_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_IpoCur_<OutTypeMn> ( |  |

  const `Ifx_DPResultU16_Type`* dpResult,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x0005 to 0x0008 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResult | Data point search result |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the Interpolation |
| Description | Based on searched index and ratio information, this routine calculates and returns interpolation for curve. | < |
| Available via | Ifx.h | < |

⌋

⌈
index = dpResult->Index

if dPResult->Ratio == 0

Result = `Val_array`

else

Result = `Val_array` + (`Val_array` - `Val_array`) * dpResult->Ratio

Note:

In case of missing HW support the Software solution mentioned below could also be used to avoid 64-bit arithmetic operation.

if (`Val_array` <= `Val_array`) then

Result = `Val_array` + (`Val_array` - `Val_array`) * dpResult->Ratio

if (`Val_array` > `Val_array`) then

Result = `Val_array` - (`Val_array` - `Val_array`) * dpResult->Ratio
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Curve look-up

Definition of API function `Ifx_LkUpCur_`<OutTypeMn>
⌈
| Service Name | Ifx_LkUpCur_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_LkUpCur_<OutTypeMn> ( |  |

  const `Ifx_DPResultU16_Type`* dpResult,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x000A to 0x000D | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResult | Data point search result |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Entry point of the result array |
| Description | Based on searched index and ratio information, this routine calculates and returns entry point of the result array. | < |
| Available via | Ifx.h | < |

⌋

⌈
Result = `Val_array`
⌋

⌈
Do not call this routine until you have searched the axis using the `Ifx_DPSearch` routine. Only then it is ensured that the search result (`Ifx_DPResultU16_Type`) contains valid data and is not used uninitialized.
⌋

⌈
Here is the list of implemented routines.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 映射 interpolation
*原文标题：Map interpolation*

Definition of API function `Ifx_IpoMap_`<OutTypeMn>
⌈
| Service Name | Ifx_IpoMap_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_IpoMap_<OutTypeMn> ( |  |

  const `Ifx_DPResultU16_Type`* dpResultX,
  const `Ifx_DPResultU16_Type`* dpResultY,
  uint16 num_value,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x0010 to 0x0013 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResultX | Data point search result for x axis |
| ^ | dpResultY | Data point search result for y axis |
| ^ | num_value | Number of y axis points |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the Interpolation |
| Description | Based on searched indices and ratios information using the relevant Ifx_DPSearch routine, this routine calculates and returns the interpolation result for map. | < |
| Available via | Ifx.h | < |

⌋

⌈
Based on searched indices and ratios information using the relevant `Ifx_DPSearch` routine, this routine calculates and returns the interpolation result for map.

BaseIndex = dpResultX->Index * num_value + dpResultY->Index

if (dpResultX->Ratio == 0)

if (dpResultY->Ratio == 0)

Result = `Val_array`

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 映射 look-up
*原文标题：Map look-up*

Definition of API function `Ifx_LkUpMap_`<OutTypeMn>
⌈
| Service Name | Ifx_LkUpMap_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_LkUpMap_<OutTypeMn> ( |  |

  const `Ifx_DPResultU16_Type`* dpResultX,
  const `Ifx_DPResultU16_Type`* dpResultY,
  uint16 num_value,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x0015 to 0x0018 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResultX | Data point search result for x axis |
| ^ | dpResultY | Data point search result for y axis |
| ^ | num_value | Number of y axis points |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Entry point of the result array |
| Description | Based on searched index and ratio information, this routine calculates and returns entry value of the result distribution array. | < |
| Available via | Ifx.h | < |

⌋

⌈
BaseIndex = dpResultX->Index * num_value + dpResultY->Index
⌋

⌈
if(dpResultX->Ratio < 0.5 && dpResultY->Ratio < 0.5) then

return `Val_array`

if(dpResultX->Ratio \geq 0.5 && dpResultY->Ratio < 0.5) then

return `Val_array`

if(dpResultX->Ratio < 0.5 && dpResultY->Ratio \geq 0.5) then

return `Val_array`

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 映射 look-up without rounding
*原文标题：Map look-up without rounding*

Definition of API function `Ifx_LkUpBaseMap_`<OutTypeMn>
⌈
| Service Name | Ifx_LkUpBaseMap_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_LkUpBaseMap_<OutTypeMn> ( |  |

  const `Ifx_DPResultU16_Type`* dpResultX,
  const `Ifx_DPResultU16_Type`* dpResultY,
  uint16 num_value,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x00A5 to 0x00A8 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResultX | Data point search result for x axis |
| ^ | dpResultY | Data point search result for y axis |
| ^ | num_value | Number of y axis points |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Entry point of the result array |
| Description | Based on searched index and ratio information, this routine calculates and returns entry value of the result distribution array. | < |
| Available via | Ifx.h | < |

⌋

⌈
BaseIndex = dpResultX->Index * num_value + dpResultY->Index
⌋

⌈
Return Value = `Val_array`
⌋

⌈
Do not call this routine until you have searched the axis using the `Ifx_DPSearch` routine. Only then it is ensured that the search result (`Ifx_DPResultU16_Type`) contains valid data and is not used uninitialized.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Integrated 数据 point search and interpolation
*原文标题：Integrated data point search and interpolation*

In this method of interpolation, single routine does data point search (e.g. Index and ratio) and interpolation for curve, map or look-up table.

### 37. Integrated curve interpolation

Definition of API function `Ifx_IntIpoCur_`<InTypeMn>_<OutTypeMn>
⌈
| Service Name | Ifx_IntIpoCur_<InTypeMn>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_IntIpoCur_<InTypeMn>_<OutTypeMn> ( |  |

  <InType> Xin,
  <InType> N,
  const <InType>* X_array,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x001A to 0x0029 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Xin | Input value |
| ^ | N | Number of samples |
| ^ | X_array | Pointer to the X axis distribution array |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the Interpolation |
| Description | This routine calculates interpolation of a curve at position Xin using below equation. | < |
| Available via | Ifx.h | < |

⌋

⌈
If (X_array < Xin < X_array), then

index = lowest index for which (Xin < X_array).

RatioX = (Xin - X_array) / (X_array  - X_array )

Result = `Val_array` + (`Val_array` - `Val_array`)*RatioX
⌋

⌈
Input value matches with one of the distribution array value then result shall be respective Y array element indicated by index.

If (Xin == X_array) then,

Result = `Val_array`
⌋

⌈
If (Xin < X_array) then,

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Integrated curve look-up

Definition of API function `Ifx_IntLkUpCur_`<InTypeMn>_<OutTypeMn>
⌈
| Service Name | Ifx_IntLkUpCur_<InTypeMn>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_IntLkUpCur_<InTypeMn>_<OutTypeMn> ( |  |

  <InType> Xin,
  <InType> N,
  const <InType>* X_array,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x0030 to 0x003F | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Xin | Input value |
| ^ | N | Number of samples |
| ^ | X_array | Pointer to the X axis distribution array |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Entry point of the result array |
| Description | This routine returns respective entry value of the result at position Xin based on below equations. | < |
| Available via | Ifx.h | < |

⌋

⌈
If (X_array < Xin < X_array), then

index = lowest index for which (Xin < X_array).

Result = `Val_array`
⌋

⌈
Input value matches with one of the distribution array value then result shall be respective Y array element indicated by index.

If (Xin == X_array) then,

Result = `Val_array`
⌋

⌈
If (Xin < X_array) then,

Result = `Val_array`
⌋

⌈
If (Xin > X_array) then,

Result = `Val_array`
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Integrated fix-curve interpolation

Definition of API function `Ifx_IntIpoFixCur_`<InTypeMn>_<OutTypeMn>
⌈
| Service Name | Ifx_IntIpoFixCur_<InTypeMn>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_IntIpoFixCur_<InTypeMn>_<OutTypeMn> ( |  |

  <InType> Xin,
  <InType> N,
  const <InType>* `Val_array`,
  <InType> Offset,
  <InType> Shift
| ) | < |  |
|---|---|---|
| Service ID | 0x0040 to 0x0043 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Xin | Input value |
| ^ | N | Number of samples |
| ^ | Val_array | Pointer to the result axis distribution array |
| ^ | Offset | Offset of the first sampling value for X-axis |
| ^ | Shift | 'Shift' is the power of 2, (2^Shift) represents X-axis distribution point interval |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the Interpolation |
| Description | This routine calculates interpolation of a curve at position Xin using below equations. | < |
| Available via | Ifx.h | < |

⌋

⌈
X axis distribution points shall be calculated based on Offset and Shift values.

X_array  = Offset + index * 2Shift

If Offset = 10, Shift = 2 and N = 5 then,

X_array = {10, 14, 18, 22, 26}
⌋

⌈
If (X_array < Xin < X_array), then

index = lowest index for which (Xin < X_array).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Integrated fix-curve look up

Definition of API function `Ifx_IntLkUpFixCur_`<InTypeMn>_<OutTypeMn>
⌈
| Service Name | Ifx_IntLkUpFixCur_<InTypeMn>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_IntLkUpFixCur_<InTypeMn>_<OutTypeMn> ( |  |

  <InType> Xin,
  <InType> N,
  const <InType>* `Val_array`,
  <InType> Offset,
  <InType> Shift
| ) | < |  |
|---|---|---|
| Service ID | 0x0045 to 0x0048 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Xin | Input value |
| ^ | N | Number of samples |
| ^ | Val_array | Pointer to the result axis distribution array |
| ^ | Offset | Offset of the first sampling value for X-axis |
| ^ | Shift | 'Shift' is the power of 2, (2^Shift) represents X-axis distribution point interval |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Entry point of the result array |
| Description | This routine returns respective entry value of the result distribution array at position Xin based on below equations. | < |
| Available via | Ifx.h | < |

⌋

⌈
X axis distribution points shall be calculated based on Offset and Shift values.

X_array  = Offset + index * 2Shift

If Offset = 10, Shift = 2 and N = 5 then,

X_array = {10, 14, 18, 22, 26}
⌋

⌈
If (X_array < Xin < X_array), then

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Integrated fix- I curve interpolation

Definition of API function `Ifx_IntIpoFixICur_`<InTypeMn>_<OutTypeMn>
⌈
| Service Name | Ifx_IntIpoFixICur_<InTypeMn>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Ifx_IntIpoFixICur_<InTypeMn>_<OutTypeMn> ( |  |

  <InType> Xin,
  <InType> N,
  const <InType>* `Val_array`,
  <InType> Offset,
  <InType> Interval
| ) | < |  |
|---|---|---|
| Service ID | 0x004A to 0x004D | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Xin | Input value |
| ^ | N | Number of samples |
| ^ | Val_array | Pointer to the result axis distribution array |
| ^ | Offset | Offset of the first sampling value for X-axis |
| ^ | Interval | represents X-axis distribution point fix interval |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the Interpolation |
| Description | This routine calculates interpolation of a curve at position Xin using below equations. | < |
| Available via | Ifx.h | < |

⌋

⌈
X axis distribution points shall be calculated based on Offset and Interval values.

X_array  = offset + index * Interval

If Offset = 5, Interval = 12 and N = 5 then,

X_array = {5, 17, 29, 41, 53}
⌋

⌈
If (X_array < Xin < X_array), then

index = lowest index for which (Xin < X_array).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 41 章（内容从略，见纯文本全文）

42. Integrated fix- I curve look up
43. Integrated 映射 interpolation
44. Integrated 映射 look-up
45. Integrated 映射 look-up without rounding
46. Integrated fix- 映射 interpolation
47. Integrated fix- 映射 look up
48. Integrated fix- 映射 look up without rounding
49. Integrated fix- I 映射 interpolation
50. Integrated fix- I 映射 look up
51. Integrated fix- I 映射 look up without rounding
52. Cuboid 3D interpolation
53. Record layouts for interpolation routines
54. Record layouts for 映射 values
55. Record layout 定义
56. 示例 of use of functions
57. Callback 通知
58. Scheduled functions
59. Expected 接口
60. Mandatory 接口
61. Optional 接口
62. Configurable 接口
63. 时序图
64. 配置规范
65. How to read this chapter
66. Containers and 配置 parameters
67. 发布信息
68. 附录
69. 不适用需求
70. Change history of AUTOSAR traceable items
71. Traceable item history of this document according to AUTOSAR Release R25-11
72. Added 规范 Items in R25-11
73. Changed 规范 Items in R25-11
74. Deleted 规范 Items in R25-11
75. Traceable item history of this document according to AUTOSAR Release R24-11
76. Added 规范 Items in R24-11
77. Changed 规范 Items in R24-11
78. Deleted 规范 Items in R24-11
79. Traceable item history of this document according to AUTOSAR Release R23-11
80. Added 规范 Items in R23-11
81. Changed 规范 Items in R23-11
82. Deleted 规范 Items in R23-11
