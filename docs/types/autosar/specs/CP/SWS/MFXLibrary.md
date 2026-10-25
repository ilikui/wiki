# Specification of Fixed Point Math Library (`MFXLibrary`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 394 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_MFXLibrary_394\AUTOSAR_CP_SWS_MFXLibrary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_MFXLibrary_394\AUTOSAR_CP_SWS_MFXLibrary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_MFXLibrary_394\zzgen\CP_SWS_MFXLibrary.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR library dedicated to arithmetic routines for fixed point values.

This mathematical library (MFX) contains the following routines :

* Addition
* Subtraction
* Absolute value
* Absolute value of differences
* Multiplication
* Division
* Combination of multiplication and division
* Combination of multiplication and shift right
* Combination of division and shift left
* Modulo
* Limitation

Some of these functions are proposed too for 2n Scaled Integers :

* Addition
* Subtraction
* Absolute value
* Absolute value of differences
* Multiplication
* Division
* Conversion (specific to 2n Scaled Integers)

All routines are re-entrant and can be used by multiple runnables at the same time.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR library dedicated to arithmetic routines for fixed point values.

This mathematical library (MFX) contains the following routines :

* Addition
* Subtraction
* Absolute value
* Absolute value of differences
* Multiplication
* Division
* Combination of multiplication and division
* Combination of multiplication and shift right
* Combination of division and shift left
* Modulo
* Limitation

Some of these functions are proposed too for 2n Scaled Integers :

* Addition
* Subtraction
* Absolute value
* Absolute value of differences
* Multiplication
* Division
* Conversion (specific to 2n Scaled Integers)

All routines are re-entrant and can be used by multiple runnables at the same time.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the MFXLibrary module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Abs | Absolute value |
| AbsDiff | Absolute value of a difference |
| Add | Addition |
| AR | Autosar |
| DET | Default Error Tracer |
| Div | Division |
| DivShLeft | Combination of division and shift left |
| Limit | Limitation routine |
| Max | Maximum |
| MFX/Mfx | Math - Fixed Point library |
| Min | Minimum |
| Minmax | Limitation with only one value for min and max |
| Mod | Modulo routine |
| Mul | Multiplication |
| MulDiv | Combination of multiplication and division |
| MulShRight | Combination of multiplication and shift right |
| s16 | Mnemonic for the sint16, specified in AUTOSAR_SWS_PlatformTypes |
| s32 | Mnemonic for the sint32, specified in AUTOSAR_SWS_PlatformTypes |
| s8 | Mnemonic for the sint8, specified in AUTOSAR_SWS_PlatformTypes |
| Sub | Subtraction |
| u16 | Mnemonic for the uint16, specified in AUTOSAR_SWS_PlatformTypes |
| u32 | Mnemonic for the uint32, specified in AUTOSAR_SWS_PlatformTypes |
| u8 | Mnemonic for the uint8, specified in AUTOSAR_SWS_PlatformTypes |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for MFXLibrary.

Thus, the specification SWS BSW General shall be considered as additional and required specification for MFXLibrary.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

* No requirements on Service library can be implemented in multiple ways. Many small routines can be combined into one implementation file. For bigger routines, one file shall contain one routine implementation. Generally one routine per object file is recommended from linker optimization point of view. For Bit handling routines more routines can contribute to form one object file. This kind of grouping is not achieved in Release 4.0, Rev001 and will be addressed in Release 4.0, Rev002.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. 文件结构
*原文标题：File structure*

Upstream requirements:
⌈
The MFX module shall provide the following files:

* C files, Mfx_<name>.c used to implement the library. All C files shall be prefixed with 'Mfx'.
⌋

Implementation & grouping of routines with respect to C files is recommended as per below options and there is no restriction to follow the same.

Option 1 : <Name> can be function name providing one C file per function,

eg.: `Mfx_Add_u8u8_u8`.c etc.

Option 2 : <Name> can have common name of group of functions:

* 2.1 Group by object family:

  eg.: `Mfx_NomMath`.c, `Mfx_ScaledMath`.c
* 2.2 Group by routine family:

  eg.: `Mfx_Add`.c
* 2.3 Group by method family: if it makes sense
* 2.4 Group by architecture:

  eg.: `Mfx_Add8`.c
* 2.5 Group by other methods: (individual grouping allowed)

Option 3 : <Name> can be removed so that single C file shall contain all MFX functions, eg.: Mfx.c.

Using above options gives certain flexibility of choosing suitable granularity with reduced number of C files. Linking only on-demand is also possible in case of some options.

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

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
*原文标题：Error classification*

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
*原文标题：Production Error*

There are no production errors.

### 17. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 18. 初始化 and 关机
*原文标题：Initialization and shutdown*

Upstream requirements:
⌈
MFX library shall not require initialization phase. A Library function may be called at the very first step of ECU initialization, e.g. even by the OS or EcuM, thus the library shall be ready.
⌋

  Upstream requirements:
⌈
MFX library shall not require a shutdown operation phase.
⌋

### 19. Using 库 API
*原文标题：Using Library API*

Upstream requirements:
⌈
MFX API can be directly called from BSW modules or SWC. No port definition is required. It is a pure function call.
⌋

  Upstream requirements:
⌈
Using a library should be documented. if a BSW module or a SWC uses a Library, the developer should add an Implementation-DependencyOnArtifact in the BSW/SWC template.

minVersion and maxVersion parameters correspond to the supplier version. In case of AUTOSAR library, these parameters may be left empty because a SWC or BSW module may rely on a library behaviour, not on a supplier implementation. However, the SWC or BSW modules shall be compatible with the AUTOSAR platform where they are integrated.
⌋

### 20. 库 implementation
*原文标题：Library implementation*

Upstream requirements:
⌈
The MFX library shall be implemented in a way that the code can be shared among callers in different memory partitions.
⌋

  Upstream requirements:
⌈
Usage of macros should be avoided. The function should be declared as function or inline function. Macro #define should not be used.
⌋

  Upstream requirements:
⌈
A library function shall not call any BSW modules functions, e.g. the DET. A library function can call other library functions. Because a library function shall be re-entrant. But other BSW modules functions may not be re-entrant.
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

Definition of imported datatypes of module Mfx
⌈
| Module | Header File | Imported Type |
|---|---|---|
| There are no imported types. | < | < |

⌋

In this chapter, all types included from the following modules are listed:

| Module | Imported Type |
|---|---|
| Std_Types.h | sint8, uint8, sint16, uint16, sint32, uint32 |

It is observed that since the sizes of the integer types provided by the C language are implementation-defined, the range of values that may be represented within each of the integer types will vary between implementations.

Thus, in order to improve the portability of the software, these types are defined in `Platform_Types`.h .The following mnemonics are used in the library routine names.

| Size | Platform Type | Mnemonic |
|---|---|---|
| signed 8-Bit | sint8 | s8 |
| signed 16-Bit | sint16 | s16 |
| signed 32-Bit | sint32 | s32 |
| unsigned 8-Bit | uint8 | u8 |
| unsigned 16-Bit | uint16 | u16 |
| unsigned 32-Bit | uint32 | u32 |

As described in , the ranges for each of the base types are shown in Table 2.

| Base Type | Range |
|---|---|
| uint8 | [ 0, 255 ] |
| sint8 | [ -128, 127 ] |
| uint16 | [ 0, 65535 ] |
| sint16 | [ -32768, 32767 ] |
| uint32 | [ 0, 4294967295 ] |
| sint32 | [ -2147483648, 2147483647 ] |

As a convention in the rest of the document:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 类型定义
*原文标题：Type definitions*

None.

### 24. Comment about rounding

Two types of rounding can be applied:

Results are "rounded off", it means:

* 0 <= X < 0.5 rounded to 0
* 0.5 <= X < 1 rounded to 1
* -0.5 < X <= 0 rounded to 0
* -1 < X <= -0.5 rounded to -1

Results are rounded towards zero:

* 0 <= X < 1 rounded to 0
* -1 < X <= 0 rounded to 0

### 25. Comment about routines optimization

### 26. Optimized with constants

For optimization purpose, in some routines, it is mandatory that an argument of the function "must be constant".

The requirement is that the expression must be fully evaluated at compile time. It may be a constant literal, macro, or arithmetic expression that can be computed at compile time. It may not contain a variable or function call.

For example, the parameters for the radix points are constant expressions so that they may be eliminated after the pre-process phase of compilation. When implemented properly as an inline function or macro, the calculations for the number of shifts necessary are done at compile time, not at run time. There is a ROM/throughput penalty when constant expressions are not used.

### 27. Mathematical routines 定义
*原文标题：Mathematical routines definitions*

### 28. Additions

Definition of API function `Mfx_Add_`<InTypeMn1><InTypeMn2>_<OutTypeMn>
⌈
| Service Name | Mfx_Add_<InTypeMn1><InTypeMn2>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_Add_<InTypeMn1><InTypeMn2>_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value
| ) | < |  |
|---|---|---|
| Service ID | 0x0001 to 0x0024 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| ^ | y_value | Second argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | This routine makes an addition between the two arguments. | < |
| Available via | Mfx.h | < |

⌋

⌈
This routine makes an addition between the two arguments:

Return-value = x_value + y_value
⌋

⌈
Return-value shall be saturated to boundary values in the event of negative or positive overflow.
⌋

⌈
Here is the list of implemented functions.
⌋

| Function ID | Function prototype |
|---|---|
| 0x001 | uint8 Mfx_Add_u8u8_u8( uint8 , uint8); |
| 0x002 | uint8 Mfx_Add_u8s8_u8( uint8 , sint8); |
| 0x003 | sint8 Mfx_Add_u8s8_s8( uint8 , sint8); |
| 0x004 | uint8 Mfx_Add_s8s8_u8( sint8 , sint8); |
| 0x005 | sint8 Mfx_Add_s8s8_s8( sint8 , sint8); |
| 0x006 | uint16 Mfx_Add_u16u16_u16( uint16 , uint16); |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Subtractions

Definition of API function `Mfx_Sub_`<InTypeMn1><InTypeMn2>_<OutTypeMn>
⌈
| Service Name | Mfx_Sub_<InTypeMn1><InTypeMn2>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_Sub_<InTypeMn1><InTypeMn2>_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value
| ) | < |  |
|---|---|---|
| Service ID | 0x0025 to 0x0054 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| ^ | y_value | Second argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | This routine makes a subtraction between the two arguments. | < |
| Available via | Mfx.h | < |

⌋

⌈
This routine makes a subtraction between the two arguments:

Return-value = x_value - y_value
⌋

⌈
Return-value shall be saturated to boundary values in the event of negative or positive overflow.
⌋

⌈
Here is the list of implemented functions.
⌋

| Function ID | Function prototype |
|---|---|
| 0x025 | uint8 Mfx_Sub_u8u8_u8( uint8 , uint8); |
| 0x026 | sint8 Mfx_Sub_u8u8_s8( uint8 , uint8); |
| 0x027 | uint8 Mfx_Sub_u8s8_u8( uint8 , sint8); |
| 0x028 | sint8 Mfx_Sub_s8u8_s8( sint8 , uint8); |
| 0x029 | sint8 Mfx_Sub_s8s8_s8( sint8 , sint8); |
| 0x02A | uint8 Mfx_Sub_u16u16_u8( uint16 , uint16); |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Absolute value

Definition of API function `Mfx_Abs_`<InTypeMn1>_<OutTypeMn>
⌈
| Service Name | Mfx_Abs_<InTypeMn1>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_Abs_<InTypeMn1>_<OutTypeMn> ( |  |

  <InType1> x_value
| ) | < |  |
|---|---|---|
| Service ID | 0x0055 to 0x005E | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | This routine computes the absolute value of a signed value. | < |
| Available via | Mfx.h | < |

⌋

⌈
This routine computes the absolute value of a signed value:

| Return-value = | x_value |
|---|---|

⌋

⌈
Return-value shall be saturated to boundary values in the event of negative or positive overflow.
⌋

⌈
Here is the list of implemented functions.
⌋

| Function ID | Function prototype |
|---|---|
| 0x055 | uint8 Mfx_Abs_s8_u8( sint8 ); |
| 0x056 | sint8 Mfx_Abs_s8_s8( sint8 ); |
| 0x057 | uint8 Mfx_Abs_s32_u8( sint32 ); |
| 0x058 | uint16 Mfx_Abs_s16_u16( sint16 ); |
| 0x059 | sint16 Mfx_Abs_s16_s16( sint16 ); |
| 0x05A | sint16 Mfx_Abs_s32_s16( sint32 ); |
| 0x05B | uint32 Mfx_Abs_s32_u32( sint32 ); |
| 0x05C | sint32 Mfx_Abs_s32_s32( sint32 ); |
| 0x05D | sint8 Mfx_Abs_s32_s8( sint32 ); |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Absolute value of a difference

Definition of API function `Mfx_AbsDiff_`<InTypeMn1><InTypeMn2>_<OutTypeMn>
⌈
| Service Name | Mfx_AbsDiff_<InTypeMn1><InTypeMn2>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_AbsDiff_<InTypeMn1><InTypeMn2>_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value
| ) | < |  |
|---|---|---|
| Service ID | 0x005F to 0x0082 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| ^ | y_value | Second argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | This routine computes the absolute value of a difference between 2 values. | < |
| Available via | Mfx.h | < |

⌋

⌈
This routine computes the absolute value of a difference between 2 values:

| Return-value = | x_value - y_value |
|---|---|

⌋

⌈
Return-value shall be saturated to boundary values in the event of overflow.
⌋

⌈
Here is the list of implemented functions.
⌋

| Function ID | Function prototype |
|---|---|
| 0x05F | uint8 Mfx_AbsDiff_u8u8_u8( uint8 , uint8); |
| 0x060 | uint16 Mfx_AbsDiff_u16u16_u16( uint16 , uint16); |
| 0x061 | uint8 Mfx_AbsDiff_s16s16_u8( sint16 , sint16); |
| 0x062 | uint16 Mfx_AbsDiff_s16s16_u16( sint16 , sint16); |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Multiplications

Definition of API function `Mfx_Mul_`<InTypeMn1><InTypeMn2>_<OutTypeMn>
⌈
| Service Name | Mfx_Mul_<InTypeMn1><InTypeMn2>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_Mul_<InTypeMn1><InTypeMn2>_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value
| ) | < |  |
|---|---|---|
| Service ID | 0x0083 to 0x00A7 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| ^ | y_value | Second argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | This routine makes a multiplication between the two arguments. | < |
| Available via | Mfx.h | < |

⌋

⌈
This routine makes a multiplication between the two arguments:

Return-value = x_value * y_value
⌋

⌈
Return-value shall be saturated to boundary values in the event of negative or positive overflow.
⌋

⌈
Here is the list of implemented functions.
⌋

| Function ID | Function prototype |
|---|---|
| 0x083 | uint8 Mfx_Mul_u8u8_u8( uint8 , uint8); |
| 0x084 | uint8 Mfx_Mul_s8s8_u8( sint8 , sint8); |
| 0x085 | sint8 Mfx_Mul_s8s8_s8( sint8 , sint8); |
| 0x086 | uint16 Mfx_Mul_u16u16_u16( uint16 , uint16); |
| 0x087 | uint16 Mfx_Mul_s16s16_u16( sint16 , sint16); |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Divisions rounded towards 0

Definition of API function `Mfx_Div_`<InTypeMn1><InTypeMn2>_<OutTypeMn>
⌈
| Service Name | Mfx_Div_<InTypeMn1><InTypeMn2>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_Div_<InTypeMn1><InTypeMn2>_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value
| ) | < |  |
|---|---|---|
| Service ID | 0x00A8 to 0x00D7 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| ^ | y_value | Second argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | These routines make a division between the two arguments. | < |
| Available via | Mfx.h | < |

⌋

⌈
These routines make a division between the two arguments:

Return-value = x_value / y_value
⌋

⌈
Return-value shall be saturated to boundary values in the event of negative or positive overflow.
⌋

⌈
The result after division by zero is defined by:

* If x_value \geq 0 then the function returns the maximum value of the output type

* If x_value < 0 then the function returns the minimum value of the output type
⌋

⌈
The result is rounded towards 0.
⌋

⌈
Here is the list of implemented functions.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Divisions rounded off

Definition of API function `Mfx_RDiv_`<InTypeMn1><InTypeMn2>_<OutTypeMn>
⌈
| Service Name | Mfx_RDiv_<InTypeMn1><InTypeMn2>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_RDiv_<InTypeMn1><InTypeMn2>_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value
| ) | < |  |
|---|---|---|
| Service ID | 0x00D8 to 0x0107 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| ^ | y_value | Second argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | These routines make a division between the two arguments. | < |
| Available via | Mfx.h | < |

⌋

⌈
These routines make a division between the two arguments:

Return-value = x_value / y_value
⌋

⌈
Return-value shall be saturated to boundary values in the event of negative or positive overflow.
⌋

⌈
The result after division by zero is defined by:

* If x_value \geq 0 then the function returns the maximum value of the output type

* If x_value < 0 then the function returns the minimum value of the output type
⌋

⌈
The result is rounded off.
⌋

⌈
Here is the list of implemented functions.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Combinations of multiplication and division rounded towards 0

Definition of API function `Mfx_MulDiv_`<InTypeMn1><InTypeMn2><InTypeMn3>_<OutTypeMn>
⌈
| Service Name | Mfx_MulDiv_<InTypeMn1><InTypeMn2><InTypeMn3>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_MulDiv_<InTypeMn1><InTypeMn2><InTypeMn3>_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value,
  <InType3> z_value
| ) | < |  |
|---|---|---|
| Service ID | 0x0108 to 0x0121 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| ^ | y_value | Second argument |
| ^ | z_value | Third argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | These routines make a multiplication between the two arguments and a division by the third argument. | < |
| Available via | Mfx.h | < |

⌋

⌈
These routines make a multiplication between the two arguments and a division by the third argument:

Return-value = x_value * y_value / z_value
⌋

⌈
Return-value shall be saturated to boundary values in the event of negative or positive overflow.
⌋

⌈
The result after division by zero is defined by:

* If x_value*y_value \geq 0 then the function returns the maximum value of the output type

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Combinations of multiplication and division rounded off

Definition of API function `Mfx_RMulDiv_`<InTypeMn1><InTypeMn2><InTypeMn3>_<OutTypeMn>
⌈
| Service Name | Mfx_RMulDiv_<InTypeMn1><InTypeMn2><InTypeMn3>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_RMulDiv_<InTypeMn1><InTypeMn2><InTypeMn3>_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value,
  <InType3> z_value
| ) | < |  |
|---|---|---|
| Service ID | 0x0122 to 0x013B | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| ^ | y_value | Second argument |
| ^ | z_value | Third argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | These routines make a multiplication between the two arguments and a division by the third argument. | < |
| Available via | Mfx.h | < |

⌋

⌈
These routines make a multiplication between the two arguments and a division by the third argument:

Return-value = x_value * y_value / z_value
⌋

⌈
Return-value shall be saturated to boundary values in the event of negative or positive overflow.
⌋

⌈
The result after division by zero is defined by:

* If x_value*y_value \geq 0 then the function returns the maximum value of the output type

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Combinations of multiplication and shift right

Definition of API function `Mfx_MulShRight_`<InTypeMn1><InTypeMn2>_<OutTypeMn>
⌈
| Service Name | Mfx_MulShRight_<InTypeMn1><InTypeMn2>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_MulShRight_<InTypeMn1><InTypeMn2>_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value,
  uint8 shift
| ) | < |  |
|---|---|---|
| Service ID | 0x013C to 0x0151 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First factor |
| ^ | y_value | Second factor |
| ^ | shift | Shift left of the fixed point result. Must be a constant expression. Maximum shift according to |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result of the calculation |
| Description | This routine makes a multiplication between the two arguments and applies a shift right defined by the third argument. | < |
| Available via | Mfx.h | < |

⌋

⌈
This routine makes a multiplication between the two arguments and applies a shift right defined by the third argument:

Return-value = (x_value * y_value) >> shift
⌋

⌈
We precise that for the shift right of a negative number, we always keep the bit of sign.
⌋

⌈
Return-value shall be saturated to boundary values in the event of negative or positive overflow.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Combinations of division and shift left

Definition of API function `Mfx_DivShLeft_`<InTypeMn1><InTypeMn2>u8_<OutTypeMn>
⌈
| Service Name | Mfx_DivShLeft_<InTypeMn1><InTypeMn2>u8_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Mfx_DivShLeft_<InTypeMn1><InTypeMn2>u8_<OutTypeMn> ( |  |

  <InType1> x_value,
  <InType2> y_value,
  uint8 shift
| ) | < |  |
|---|---|---|
| Service ID | 0x0152 to 0x016E | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | Numerator |
| ^ | y_value | Denominator |
| ^ | shift | Shift left of the fixed point result. Must be a constant expression. Maximum shift according to . |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Quotient result |
| Description | This routine applies a shift left defined by the third argument to the first argument, and then makes a division by the second argument. | < |
| Available via | Mfx.h | < |

⌋

⌈
This routine applies a shift left defined by the third argument to the first argument, and then makes a division by the second argument:

Return-value = (x_value  shift) / y_value
⌋

⌈
We precise that for the shift left of a negative number, we always keep the bit of sign.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Modulo

Definition of API function `Mfx_Mod_`<TypeMn>
⌈
| Service Name | Mfx_Mod_<TypeMn> | < |
|---|---|---|
| Syntax | <Type> Mfx_Mod_<TypeMn> ( |  |

  <Type> x_value,
  <Type> y_value
| ) | < |  |
|---|---|---|
| Service ID | 0x016F to 0x0178 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | First argument |
| ^ | y_value | Second argument |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <Type> | Result of the calculation |
| Description | This routine returns the remainder of the division x_value / y_value if y_value is not zero. | < |
| Available via | Mfx.h | < |

⌋

⌈
If y_value is zero, the result is zero.
⌋

⌈
In other cases, Return-value = x_value mod y_value
⌋

⌈
The sign of the remainder is the same than the sign of x_value.
⌋

⌈
Here is the list of implemented functions.
⌋

| Function ID | Function prototype |
|---|---|
| 0x16F | uint8 Mfx_Mod_u8( uint8 , uint8); |
| 0x170 | sint8 Mfx_Mod_s8( sint8 , sint8); |
| 0x171 | uint16 Mfx_Mod_u16( uint16 , uint16); |
| 0x172 | sint16 Mfx_Mod_s16( sint16 , sint16); |
| 0x173 | uint32 Mfx_Mod_u32( uint32 , uint32); |
| 0x174 | sint32 Mfx_Mod_s32( sint32 , sint32); |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Limiting

Definition of API function `Mfx_Limit_`<TypeMn>
⌈
| Service Name | Mfx_Limit_<TypeMn> | < |
|---|---|---|
| Syntax | <Type> Mfx_Limit_<TypeMn> ( |  |

  <Type> value,
  <Type> min_value,
  <Type> max_value
| ) | < |  |
|---|---|---|
| Service ID | 0x0179 to 0x017E | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | value | input value. |
| ^ | min_value | Lower Bound. min_value shall not be strictly greater than max_value. |
| ^ | max_value | Upper Bound. max_value shall not be strictly lower than min_value. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <Type> | Result of the calculation |
| Description | This routine limits the input value between Lower Bound and Upper Bound. | < |
| Available via | Mfx.h | < |

⌋

⌈
Return-value = min_value if value < min_value
⌋

⌈
Return-value = max_value if value > max_value
⌋

⌈
Return-value = value in the other cases
⌋

⌈
Here is the list of implemented functions.
⌋

| Function ID | Function prototype |
|---|---|
| 0x179 | uint8 Mfx_Limit_u8( uint8 , uint8, uint8); |
| 0x17A | sint8 Mfx_Limit_s8( sint8 , sint8, sint8); |
| 0x17B | uint16 Mfx_Limit_u16( uint16 , uint16, uint16); |
| 0x17C | sint16 Mfx_Limit_s16( sint16 , sint16, sint16); |
| 0x17D | uint32 Mfx_Limit_u32( uint32 , uint32, uint32); |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 59 章（内容从略，见纯文本全文）

41. 限制 with only one value for minimum and maximum
42. Minimum and maximum
43. Signum 功能
44. 2n Scaled Integer Math Functions
45. Conversion
46. 16-Bit to 8-Bit 2n Scaled Integer Conversion
47. 8-Bit to 16-Bit 2n Scaled Integer Conversion
48. 32-Bit to 16-Bit 2n Scaled Integer Conversion
49. 16-Bit to 32-Bit 2n Scaled Integer Conversion
50. Multiplication
51. 16-Bit Multiplication of 2n Scaled Integer
52. 32-Bit Multiplication of 2n Scaled Integer
53. Division
54. 16-Bit Division of 2n Scaled Integer
55. 32-Bit Division of 2n Scaled Integer
56. Addition
57. 16-Bit Addition of 2n Scaled Integer
58. 32-Bit Addition of 2n Scaled Integer
59. Subtraction
60. 16-Bit Subtraction of 2n Scaled Integer
61. 32-Bit Subtraction of 2n Scaled Integer
62. Absolute Difference of 2n Scaled Integer
63. Absolute Value
64. 16-Bit Absolute Value of 2n Scaled Integer
65. 32-Bit Absolute Value of 2n Scaled Integer
66. 示例 of use of functions
67. Combinations of multiplication and shift right
68. Combinations of division and shift left
69. Callback 通知
70. Scheduled functions
71. Expected 接口
72. Mandatory 接口
73. Optional 接口
74. Configurable 接口
75. 服务接口
76. 时序图
77. 配置规范
78. How to read this chapter
79. Containers and 配置 parameters
80. 发布信息
81. 附录
82. 不适用需求
83. Change history of AUTOSAR traceable items
84. Traceable item history of this document according to AUTOSAR Release R23-11
85. Added 规范 Items in R23-11
86. Changed 规范 Items in R23-11
87. Deleted 规范 Items in R23-11
88. Traceable item history of this document according to AUTOSAR Release R24-11
89. Added 规范 Items in R24-11
90. Changed 规范 Items in R24-11
91. Deleted 规范 Items in R24-11
92. Traceable item history of this document according to AUTOSAR Release R25-11
93. Added 规范 Items in R25-11
94. Changed 规范 Items in R25-11
95. Deleted 规范 Items in R25-11
96. Traceable item history of this document according to AUTOSAR Release R26-11
97. Added 规范 Items in R26-11
98. Changed 规范 Items in R26-11
99. Deleted 规范 Items in R26-11
