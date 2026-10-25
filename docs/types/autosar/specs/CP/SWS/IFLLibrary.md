# Specification of Floating Point Interpolation Library (`IFLLibrary`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 398 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_IFLLibrary_398\AUTOSAR_CP_SWS_IFLLibrary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_IFLLibrary_398\AUTOSAR_CP_SWS_IFLLibrary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_IFLLibrary_398\zzgen\CP_SWS_IFLLibrary.complete.txt`

## 文档简介

AUTOSAR Library routines are the part of system services in AUTOSAR architecture and below figure shows position of AUTOSAR library in layered architecture.

This specification specifies the functionality, API and the configuration of the AUTOSAR library dedicated to interpolation and lookup routines for floating point values.

The interpolation library contains the following routines:

* Distributed data point search and interpolation
* Integrated data point search and interpolation

All routines are re-entrant. They may be used by multiple runnables at the same time.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

AUTOSAR Library routines are the part of system services in AUTOSAR architecture and below figure shows position of AUTOSAR library in layered architecture.

This specification specifies the functionality, API and the configuration of the AUTOSAR library dedicated to interpolation and lookup routines for floating point values.

The interpolation library contains the following routines:

* Distributed data point search and interpolation
* Integrated data point search and interpolation

All routines are re-entrant. They may be used by multiple runnables at the same time.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

Acronyms and abbreviations, which have a local scope and therefore are not contained in the AUTOSAR glossary, must appear in a local glossary.

| Abbreviation / Acronym | Description |
|---|---|
| DET | Default Error Tracer |
| ROM | Read only memory |
| hex | Hexadecimal |
| Rev | Revision |
| f32 | Mnemonic for the float32, specified in AUTOSAR_SWS_PlatformTypes |
| IFL | Interpolation Floating point Library |
| Mn | Mnemonic |
| Lib | Library |
| s16 | Mnemonic for the sint16, specified in AUTOSAR_SWS_PlatformTypes |
| s32 | Mnemonic for the sint32, specified in AUTOSAR_SWS_PlatformTypes |
| s8 | Mnemonic for the sint8, specified in AUTOSAR_SWS_PlatformTypes |
| u16 | Mnemonic for the uint16, specified in AUTOSAR_SWS_PlatformTypes |
| u32 | Mnemonic for the uint32, specified in AUTOSAR_SWS_PlatformTypes |
| u8 | Mnemonic for the uint8, specified in AUTOSAR_SWS_PlatformTypes |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for IFL Library.

Thus, the specification SWS BSW General shall be considered as additional and required specification for IFL Library.

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
The Ifl module shall provide the following files:

* C files, Ifl_<name>.c used to implement the library. All C files shall be prefixed with 'Ifl_'.

Implementation & grouping of routines with respect to C files is recommended as per below options and there is no restriction to follow the same.

Option 1 : <Name> can be function name providing one C file per function,

eg.: `Ifl_IntIpoMap_f32f32_f32`.c etc.

Option 2 : <Name> can have common name of group of functions:

* 2.1 Group by object family: eg.:`Ifl_IpoCur`.c, `Ifl_DPSearch`.c
* 2.2 Group by routine family: eg.: `Ifl_IpoMap`.c
* 2.3 Group by method family: eg.: `Ifl_Ipo`.c etc.
* 2.4 Group by other methods: (individual grouping allowed)

Option 3 : <Name> can be removed so that single C file shall contain all Ifl functions, eg.: Ifl.c.

Using above options gives certain flexibility of choosing suitable granularity with reduced number of C files. Linking only on-demand is also possible in case of some options.
⌋

### 11. 需求追踪
*原文标题：Requirements Tracing*

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

### 18. 错误检测
*原文标题：Error detection*

Upstream requirements:
⌈
Error detection: Function should check at runtime (both in production and development code) the value of input parameters, especially cases where erroneous value can bring to fatal error or unpredictable result, if they have the values allowed by the function specification. All the error cases shall be listed in SWS and the function should return a specified value (in SWS) that is not configurable. This value is dependant of the function and the error case so it is determined case by case.

If values passed to the routines are not valid and out of the function specification, then such error are not detected.
⌋

E.g. If passed value > 32 for a bit-position

or a negative number of samples of an axis distribution is passed to a routine.

### 19. 错误通知
*原文标题：Error notification*

Upstream requirements:
⌈
The functions shall not call the DET for error notification.
⌋

### 20. 初始化 and 关机
*原文标题：Initialization and shutdown*

Upstream requirements:
⌈
Ifl library shall not require initialization phase. A Library function may be called at the very first step of ECU initialization, e.g. even by the OS or EcuM, thus the library shall be ready.
⌋

  Upstream requirements:
⌈
Ifl library shall not require a shutdown operation phase.
⌋

### 21. Using 库 API
*原文标题：Using Library API*

Ifl API can be directly called from BSW modules or SWC. No port definition is required. It is a pure function call.

The statement 'Ifl.h' shall be placed by the developer or an application code generator but not by the RTE generator

Using a library should be documented. if a BSW module or a SWC uses a Library, the developer should add an Implementation-DependencyOnArtifact in the BSW/SWC template.

minVersion and maxVersion parameters correspond to the supplier version. In case of AUTOSAR library, these parameters may be left empty because a SWC or BSW module may rely on a library behaviour, not on a supplier implementation. However, the SWC or BSW modules shall be compatible with the AUTOSAR platform where they are integrated.

### 22. 库 implementation
*原文标题：Library implementation*

Upstream requirements:
⌈
The Ifl library shall be implemented in a way that the code can be shared among callers in different memory partitions.
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

### 23. API 规范
*原文标题：API specification*

### 24. Imported 类型
*原文标题：Imported types*

In this chapter, all types included from the following modules are listed:

| Module file | Imported Type |
|---|---|
| Std_Types.h | sint8, uint8, sint16, uint16, sint32, uint32, float32 |

It is observed that since the sizes of the integer types provided by the C language are implementation-defined, the range of values that may be represented within each of the integer types will vary between implementations.

Thus in order to improve the portability of the software these types are defined in `Platform_Types`.h . The following mnemonic are used in the library routine names.

| Size | Platform Type | Mnemonic | Range |
|---|---|---|---|
| unsigned 8-Bit | boolean | NA | [ TRUE, FALSE ] |
| signed 8-Bit | sint8 | s8 | [ -128, 127 ] |
| signed 16-Bit | sint16 | s16 | [ -32768, 32767 ] |
| signed 32-Bit | sint32 | s32 | [ -2147483648, 2147483647 ] |
| unsigned 8-Bit | uint8 | u8 | [ 0, 255 ] |
| unsigned 16-Bit | uint16 | u16 | [ 0, 65535 ] |
| unsigned 32-Bit | uint32 | u32 | [ 0, 4294967295 ] |
| 32-Bit | float32 | f32 | [-3.4028235E38, 3.4028235E38] |

As a convention in the rest of the document:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 类型定义
*原文标题：Type definitions*

Structure definition:

 Definition of datatype `Ifl_DPResultF32_Type`
⌈
| Name | Ifl_DPResultF32_Type | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Index | < |
| ^ | Type | uint32 |
| ^ | Comment | Data point index |
| ^ | Ratio | < |
| ^ | Type | float32 |
| ^ | Comment | Data point ratio |
| Description | Structure used for data point search for index and ratio | < |
| Available via | Ifl.h | < |

⌋

⌈
`Ifl_DPResultF32_Type` structure shall not be read/write/modified by the user directly. Only Ifl routines shall have access to this structure.
⌋

### 26. Comment about rounding

Two types of rounding can be applied:

Results are 'rounded off', it means:

* 0 <= X < 0.5 rounded to 0
* 0.5 <= X < 1 rounded to 1
* -0.5 < X <= 0 rounded to 0
* -1 < X <= -0.5 rounded to -1

Results are rounded towards zero.

* 0 <= X < 1 rounded to 0
* -1 < X <= 0 rounded to 0

### 27. Comment about routines optimized for target

The routines described in this library may be realized as regular routines or inline functions. For ROM optimization purposes, it is recommended that the c routines be realized as individual source files so they may be linked in on an as-needed basis.

For example, depending on the target, two types of optimization can be done:

* Some routines can be replaced by another routine using integer promotion.
* Some routines can be replaced by the combination of a limiting routine and a routine with a different signature.

### 28. Interpolation routines 定义
*原文标题：Interpolation routines definitions*

Interpolation between two given points is calculated as shown below.

result = y_0+(y_1-y_0)\cdot \frac{x-x_0}{x_1-x_0}

where: x is the input value

x_0= data point before x

x_1= data point after x

y_0= value at x_0

y_1= value at x_1

Data point arrays can be grouped as one array or one structure for all elements as shown below.

one array for all elements :

float32 `Curve_f32` []={5,0.0,10.0,26.0,36.0,64.0,1.0,12.0,17.0,11.0,6.0};

one structure for all elements :

struct

{ uint32 N = 5;

float32 X[] ={0.0,10.0,26.0,36.0,64.0};

float32 Y[] ={1.0,12.0,17.0,11.0,6.0};

} `Curve_f32`;

where, number of samples = 5

X axis distribution = 0.0 to 64.0

Y axis distribution = 1.0 to 6.0

Interpolation routines accepts arguments separately to support above scenarios. Routine call example is given below for array and structure grouping respectively.

Example :

float32 `Ifl_IntIpoCur_f32_f32` (15, `Curve_f32`, &`Curve_f32`, &`Curve_f32`);

float32 `Ifl_IntIpoCur_f32_f32` (15, `Curve_f32`.N, &`Curve_f32`.X, &`Curve_f32`.Y);

Interpolation can be calculated in two ways as shown below:

1. Distributed data point search and interpolation

2. Integrated data point search and interpolation

### 29. Distributed 数据 point search and interpolation
*原文标题：Distributed data point search and interpolation*

In this interpolation method data point search (e.g. index and ratio) is calculated using routine `Ifl_DPSearch_f32` which returns result structure `Ifl_DPResultF32_Type`. It contains index and ratio information. This result can be used by curve interpolation and map interpolation.

### 30. 数据 Point Search
*原文标题：Data Point Search*

Definition of API function `Ifl_DPSearch_f32`
⌈
| Service Name | Ifl_DPSearch_f32 | < |
|---|---|---|
| Syntax | void Ifl_DPSearch_f32 ( |  |

  `Ifl_DPResultF32_Type`* dpResult,
  float32 Xin,
  uint32 N,
  const float32* X_array
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Xin | Input value |
| ^ | N | Number of samples |
| ^ | X_array | Pointer to distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | dpResult | Pointer to the result structure |
| Return value | None | < |
| Description | This routine searches the position of input Xin within the given distribution array X_array, and returns index and ratio necessary for interpolation. | < |
| Available via | Ifl.h | < |

⌋

⌈
Returned Index shall be the lowest index for which (X_array < Xin < X_array).

If (X_array <=Xin <= X_array), then returned Index shall be the lowest index.

dpResult ->Index = index

dpResult ->Ratio = (Xin - X_array) / (X_array  - X_array )
⌋

Example:

For a given array float32 X[] ={0.0,10.0,26.0,36.0,64.0}:

If Xin = 20.0 then

dpResult ->Index = 1

dpResult ->Ratio = (20.0 - 10.0) / (26.0 - 10.0) = 0.625

⌈
If the input value matches with one of the distribution array values, then

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Curve interpolation

Definition of API function `Ifl_IpoCur_f32`
⌈
| Service Name | Ifl_IpoCur_f32 | < |
|---|---|---|
| Syntax | float32 Ifl_IpoCur_f32 ( |  |

  const `Ifl_DPResultF32_Type`* dpResult,
  const float32* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResult | Data point search result |
| ^ | Val_array | Pointer to the result distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | float32 | Result of the Interpolation |
| Description | Based on searched index and ratio information, this routine calculates and returns interpolation for curve. | < |
| Available via | Ifl.h | < |

⌋

⌈
index = dPResult->Index

if dPResult->Ratio == 0.0

Result = `Val_array`

else

Result = `Val_array` + (`Val_array` - `Val_array`) * dpResult->Ratio
⌋

⌈
Do not call this routine until you have searched the axis using the `Ifl_DPSearch` routine. Only then it is ensured that the search result (`Ifl_DPResultF32_Type`) contains valid data and is not used uninitialized.
⌋

### 32. 映射 interpolation
*原文标题：Map interpolation*

Definition of API function `Ifl_IpoMap_f32`
⌈
| Service Name | Ifl_IpoMap_f32 | < |
|---|---|---|
| Syntax | float32 Ifl_IpoMap_f32 ( |  |

  const `Ifl_DPResultF32_Type`* dpResultX,
  const `Ifl_DPResultF32_Type`* dpResultY,
  uint32 num_value,
  const float32* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResultX | Data point search result for x axis |
| ^ | dpResultY | Data point search result for y axis |
| ^ | num_value | Number of y axis points |
| ^ | Val_array | Pointer to result distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | float32 | Result of the Interpolation |
| Description | Based on searched indices and ratios information using the Ifl_DPSearch_f32 routine, this routine calculates and returns the interpolation result for map. | < |
| Available via | Ifl.h | < |

⌋

⌈
Based on searched indices and ratios information using the `Ifl_DPSearch_f32` routine, this routine calculates and returns the interpolation result for map.

BaseIndex = dpResultX->Index * num_value + dpResultY->Index

if (dpResultX->Ratio == 0)

if (dpResultY->Ratio == 0)

Result = `Val_array`

else

LowerY = `Val_array`

UpperY = `Val_array`

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Single point interpolation

Definition of API function `Ifl_Interpolate_f32`
⌈
| Service Name | Ifl_Interpolate_f32 | < |
|---|---|---|
| Syntax | float32 Ifl_Interpolate_f32 ( |  |

  float32 Value1,
  float32 Value2,
  float32 Coef
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Value1 | First value to be used in the interpolation. |
| ^ | Value2 | Second value to be used in the interpolation. |
| ^ | Coef | Interpolation coefficient. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | float32 | Iterpolated value |
| Description | Returns the result of the linear interpolation (Result), determined according to the following equation. | < |
| Available via | Ifl.h | < |

⌋

⌈
Result = Value1 + (Coef * (Value2 - Value1))
⌋

### 34. Integrated 数据 point search and interpolation
*原文标题：Integrated data point search and interpolation*

In this method of interpolation, single routine does data point search (e.g. Index and ratio) and interpolation for curve, map.

### 35. Integrated curve interpolation

Definition of API function `Ifl_IntIpoCur_f32_f32`
⌈
| Service Name | Ifl_IntIpoCur_f32_f32 | < |
|---|---|---|
| Syntax | float32 Ifl_IntIpoCur_f32_f32 ( |  |

  float32 X_in,
  uint32 N,
  const float32* X_array,
  const float32* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x10 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | X_in | Input value |
| ^ | N | Number of samples |
| ^ | X_array | Pointer to X distribution |
| ^ | Val_array | Pointer to Y values |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | float32 | Result of the Interpolation |
| Description | This routine calculates interpolation of a curve at position Xin using below equa-tion. | < |
| Available via | Ifl.h | < |

⌋

⌈
index = minimum value of integer index if (X_array < Xin < X_array)

RatioX = (Xin - X_array) / (X_array  - X_array )

Result = `Val_array` + (`Val_array` - `Val_array`)*RatioX
⌋

⌈
If the input value matches with one of the distribution array values, then result will be the respective Y array element indicated by the index.

If (Xin == X_array),

Result = `Val_array`
⌋

⌈
If Xin < X_array, then

Result = `Val_array`
⌋

⌈
If Xin > X_array, then

Result = `Val_array`
⌋

⌈
The minimum value of N shall be 1
⌋

### 36. Integrated 映射 interpolation
*原文标题：Integrated map interpolation*

Definition of API function `Ifl_IntIpoMap_f32f32_f32`
⌈
| Service Name | Ifl_IntIpoMap_f32f32_f32 | < |
|---|---|---|
| Syntax | float32 Ifl_IntIpoMap_f32f32_f32 ( |  |

  float32 Xin,
  float32 Yin,
  uint32 Nx,
  uint32 Ny,
  const float32* X_array,
  const float32* Y_array,
  const float32* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x11 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Xin | Input value for X axis |
| ^ | Yin | Input value for Y axis |
| ^ | Nx | Number of X axis intervals |
| ^ | Ny | Number of Y axis intervals |
| ^ | X_array | Pointer to the X axis distribution array |
| ^ | Y_array | Pointer to the Y axis distribution array |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | float32 | Result of the Map Interpolation |
| Description | This routine calculates Interpolation of a map at position X and Y using below equations. | < |
| Available via | Ifl.h | < |

⌋

⌈
indexX = minimum value of index if (X_array < Xin < X_array)

indexY = minimum value of index if (Y_array < Yin < Y_array)

RatioX = (Xin - X_array) / (X_array  - X_array )

RatioY = (Yin - Y_array) / (Y_array  - Y_array )

BaseIndex = IndexX * Ny + indexY

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Cuboid 3D interpolation

Definition of API function `Ifl_IpoCub_f32`
  Upstream requirements: , ,
⌈
| Service Name | Ifl_IpoCub_f32 | < |
|---|---|---|
| Syntax | float32 Ifl_IpoCub_f32 ( |  |

  const `Ifl_DPResultF32_Type`* dpResultX,
  const `Ifl_DPResultF32_Type`* dpResultY,
  const `Ifl_DPResultF32_Type`* dpResultZ,
  uint16 num_x,
  uint16 num_y,
  const float32* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x12 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResultX | Data point search result for X axis |
| ^ | dpResultY | Data point search result for Y axis |
| ^ | dpResultZ | Data point search result for Z axis |
| ^ | num_x | Number of X axis points |
| ^ | num_y | Number of Y axis points |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | float32 | Result of the interpolation |
| Description | Based on searched indices and ratios information using the relevant Ifl_DPSearch_f32 routine, this routine calculates and returns the interpolation result for a 3D cuboid. | < |
| Available via | Ifl.h | < |

⌋

⌈
Based on searched indices and ratios information using the `Ifl_DPSearch_f32` routine, this routine calculates and returns the interpolation result for 3D cuboids.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Mixed 类型 interpolation of integer curve
*原文标题：Mixed type interpolation of integer curve*

Definition of API function `Ifl_IpoCur_`<InTypeMn>_f32
  Upstream requirements: , ,
⌈
| Service Name | Ifl_IpoCur_<InTypeMn>_f32 | < |
|---|---|---|
| Syntax | float32 Ifl_IpoCur_<InTypeMn>_f32 ( |  |

  const `Ifl_DPResultF32_Type`* dpResult,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x13 to 0x16 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResult | Data point search result |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | float32 | Result of the interpolation |
| Description | Based on searched indices and ratios information using the relevant Ifl_DPSearch_f32 routine, this routine calculates and returns the interpolation result for a curve. | < |
| Available via | Ifl.h | < |

⌋

⌈
index=dpResult->Index

if dpResult->Ratio==0.0

Result=`Val_array`

else

Result=`Val_array` + (`Val_array`- `Val_array`) * dpResult->Ratio
⌋

Here is the list of implemented routines:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. integer 映射的Mixed 类型 interpolation
*原文标题：Mixed type interpolation of integer map*

Definition of API function `Ifl_IpoMap_`<InTypeMn>_f32
  Upstream requirements: , ,
⌈
| Service Name | Ifl_IpoMap_<InTypeMn>_f32 | < |
|---|---|---|
| Syntax | float32 Ifl_IpoMap_<InTypeMn>_f32 ( |  |

  const `Ifl_DPResultF32_Type`* dpResultX,
  const `Ifl_DPResultF32_Type`* dpResultY,
  uint32 num_value,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x18 to 0x1b | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResultX | Data point search result for X axis |
| ^ | dpResultY | Data point search result for Y axis |
| ^ | num_value | Number of Y axis points |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | float32 | Result of the interpolation |
| Description | Based on searched indices and ratios information using the relevant Ifl_DPSearch_f32 routine, this routine calculates and returns the interpolation result for a map. | < |
| Available via | Ifl.h | < |

⌋

⌈
Based on searched indices and ratios information using the `Ifl_DPSearch_f32` routine, this routine calculates and returns the interpolation result for map.

BaseIndex = dpResultX->Index * num_value + dpResultY->Index

if (dpResultX->Ratio == 0.0)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Mixed 类型 interpolation of integer 3D Cuboid
*原文标题：Mixed type interpolation of integer 3D Cuboid*

Definition of API function `Ifl_IpoCub_`<InTypeMn>_f32
  Upstream requirements: , ,
⌈
| Service Name | Ifl_IpoCub_<InTypeMn>_f32 | < |
|---|---|---|
| Syntax | float32 Ifl_IpoCub_<InTypeMn>_f32 ( |  |

  const `Ifl_DPResultF32_Type`* dpResultX,
  const `Ifl_DPResultF32_Type`* dpResultY,
  const `Ifl_DPResultF32_Type`* dpResultZ,
  uint16 num_x,
  uint16 num_y,
  const <InType>* `Val_array`
| ) | < |  |
|---|---|---|
| Service ID | 0x1C to 0x1F | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dpResultX | Data point search result for X axis |
| ^ | dpResultY | Data point search result for Y axis |
| ^ | dpResultZ | Data point search result for Z axis |
| ^ | num_x | Number of X axis points |
| ^ | num_y | Number of Y axis points |
| ^ | Val_array | Pointer to the result axis distribution array |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | float32 | Result of the interpolation |
| Description | Based on searched indices and ratios information using the relevant Ifl_DPSearch_f32 routine, this routine calculates and returns the interpolation result for a 3D cuboid. | < |
| Available via | Ifl.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Record layouts for interpolation routines

Record layout specifies calibration data serialization in the ECU memory which describes the shape of the characteristics. Single record layout can be referred by multiple instances of interpolation ParameterDataPrototype. Record layouts can be nested particular values refer to the particular property of the object. With different properties of record layouts it is possible to specify complex objects.

### 42. Record layout for 映射 values
*原文标题：Record layout for map values*

Due to optimization, the orientation of map values in memory is different depending on the usage of the inputs. See section 8.4.2.

1. If the "X" and "Y" inputs are not swapped then, values "Val" of maps have to be in `COLUMN_DIR` order.

2. If the "X" and "Y" inputs are swapped then, values "Val" of maps have to be in `ROW_DIR` order.

According to ASAM standard , `COLUMN_DIR` and `ROW_DIR` are formats of storing map values (Val[]) and more information can be found in ASAM standard.

The "Z" input of cuboids is the third dimension and selects the slice X / Y or Y / X - 2D maps.

Example for cuboids order:

2x2x2 cuboid representation in memory

Example: cub =

`COLUMN_DIR` order :

Slice 1:

Slice 2:

### 43. Record layout 定义
*原文标题：Record layout definitions*

Below table specifies record layouts supported for interpolation routines.

⌈
| Record layout Name | Element1 | Element2 | Element3 | Element4 | Element5 |
|---|---|---|---|---|---|
| Distr_f32 | uint32 N | float32 X[] |  |  |  |
| Curve_f32 | float32 Val[] |  |  |  |  |
| Map_f32 | float32 Val[] |  |  |  |  |
| Cub_f32 | float32 Val[] |  |  |  |  |
| IntCurve_f32_f32 | uint32 N | float32 X[] | float32 Val[] |  |  |
| IntMap_f32f32_f32 | uint32 Nx | uint32 Ny | float32 X[] | float32 Y[] | float32 Val[] |

⌋

Remark:

All combinations have to be defined in `IFL_RecordLayout_Blueprint`, `AUTOSAR_MOD_IFL_RecordLayout_Blueprint`.arxml

### 44. 示例 of use of functions
*原文标题：Examples of use of functions*

None

### 45. Callback 通知
*原文标题：Callback notifications*

None.

### 46. Scheduled routines

The Ifl library does not have scheduled routines.

### 47. Expected 接口
*原文标题：Expected interfaces*

None.

### 48. Mandatory 接口
*原文标题：Mandatory interfaces*

None.

### 49. Optional 接口
*原文标题：Optional interfaces*

None.

### 50. Configurable 接口
*原文标题：Configurable interfaces*

None.

### 51. 时序图
*原文标题：Sequence diagrams*

Not applicable.

### 52. 配置规范
*原文标题：Configuration specification*

### 53. 发布信息
*原文标题：Published Information*

Upstream requirements: , ,
⌈
The standardized common published parameters as required by `SRS_BSW_00402` in the General Requirements on Basic Software Modules  shall be published within the header file of this module and need to be provided in the BSW Module Description. The according module abbreviation can be found in the List of Basic Software Modules .
⌋

Additional module-specific published parameters are listed below if applicable.

### 54. 配置 option
*原文标题：Configuration option*

Upstream requirements:
⌈
The Ifl library shall not have any configuration options that may affect the functional behavior of the routines. I.e. for a given set of input parameters, the outputs shall be always the same. For example, the returned value in case of error shall not be configurable.
⌋

However, a library vendor is allowed to add specific configuration options concerning library implementation, e.g. for resources consumption optimization.

### 其余 15 章（内容从略，见纯文本全文）

55. 附录
56. 不适用需求
57. Change history of AUTOSAR traceable items
58. Traceable item history of this document according to AUTOSAR Release R23-11
59. Added 规范 Items in R23-11
60. Changed 规范 Items in R23-11
61. Deleted 规范 Items in R23-11
62. Traceable item history of this document according to AUTOSAR Release R24-11
63. Added 规范 Items in R24-11
64. Changed 规范 Items in R24-11
65. Deleted 规范 Items in R24-11
66. Traceable item history of this document according to AUTOSAR Release R25-11
67. Added 规范 Items in R25-11
68. Changed 规范 Items in R25-11
69. Deleted 规范 Items in R25-11
