# Specification of Bit Handling Library (`BFXLibrary`)

> [返回本类索引](index.md)

| 属性     | 值                                           |
| -------- | -------------------------------------------- |
| 平台     | CP                                           |
| 类别     | SWS — 软件模块规范（Software Specification） |
| UID      | 399                                          |
| 规范版本 | R25-11                                       |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_BFXLibrary_399\AUTOSAR_CP_SWS_BFXLibrary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_BFXLibrary_399\AUTOSAR_CP_SWS_BFXLibrary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_BFXLibrary_399\zzgen\CP_SWS_BFXLibrary.complete.txt`

## 文档简介

AUTOSAR Library routines are the part of system services in AUTOSAR architecture and below figure shows position of AUTOSAR library in layered architecture.

Bfx routines specification specifies the functionality and API of the AUTOSAR library for bit functionality dedicated to fixed-point arithmetic routines.

All Bfx routines are re-entrant and can handle several simultaneous requests from different users.

## 模块依赖

The Bfx Library has no dependency to other modules.

## 章节详细内容

### 1. 简介与功能概述

_原文标题：Introduction and functional overview_

AUTOSAR Library routines are the part of system services in AUTOSAR architecture and below figure shows position of AUTOSAR library in layered architecture.

Bfx routines specification specifies the functionality and API of the AUTOSAR library for bit functionality dedicated to fixed-point arithmetic routines.

All Bfx routines are re-entrant and can handle several simultaneous requests from different users.

### 2. 缩略语

_原文标题：Acronyms and Abbreviations_

The glossary below includes acronyms and abbreviations relevant to the Bfx Library that are not included in the .

| Abbreviation / Acronym: | Description:                                      |
| ----------------------- | ------------------------------------------------- |
| Bfx                     | Short name for Bitfield functions for fixed point |

### 3. 相关文档

_原文标题：Related documentation_

### 4. 输入文档与相关标准规范

_原文标题：Input documents & related standards and norms_

### 5. 相关规范

_原文标题：Related specification_

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Bfx Library.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Bfx Library.

### 6. 约束与假设

_原文标题：Constraints and assumptions_

### 7. 限制

_原文标题：Limitations_

No limitations

### 8. 适用的车型领域

_原文标题：Applicability to car domains_

No restrictions

### 9. 对其他模块的依赖

_原文标题：Dependencies to other modules_

The Bfx Library has no dependency to other modules.

### 10. 文件结构

_原文标题：File structure_

An implementation of the Bfx Library shall follow the naming rules for files outined in .

### 11. 需求追踪

_原文标题：Requirements Tracing_

The following tables reference the requirements specified in and and links to the fulfillment of these.

| Requirement                                                                                                  | Description | Satisfied by |
| ------------------------------------------------------------------------------------------------------------ | ----------- | ------------ |
| Each library shall provide one header file with its public interface                                         |             |              |
| All library functions shall be re-entrant                                                                    |             |              |
| All function names and type names shall start with "Library short name\_"                                    |             |              |
| It shall be possible to configure the microcontroller so that the library code is shared between all callers |             |              |
| Usage of macros should be avoided                                                                            |             |              |
| A library function may only call library functions                                                           |             |              |

### 12. 功能规范

_原文标题：Functional specification_

### 13. 初始化 and 关机

_原文标题：Initialization and shutdown_

The Bfx Library does not provide a Init() function nor requires an initialization phase.

A function of the Bfx library may be called at the very first step of ECU initialization, e.g. even by the OS or EcuM, thus the library shall be ready. The only assumption of the Bfx Library regarding their context is that it assumes a completed C startup.

Also the Bfx Library does not require a shutdown operation phase.

### 14. Using 库 API

_原文标题：Using Library API_

The Bfx Library functions (APIs) can be directly called from BSW modules or SWC.

Using a library should be documented. If a BSW module or a SWC uses the Bfx Library, the developer should add an Implementation-DependencyOnArtifact in the BSW/SWC template.

### 15. 库 implementation

_原文标题：Library implementation_

Upstream requirements:
⌈
The Bfx library shall be implemented in a way that the code can be shared among callers in different memory partitions.
⌋

Upstream requirements:
⌈
Usage of C macros shall be avoided in the context of Bfx Library. The library functions shall be declared as function or as inline function.
⌋

This means that the routine shall not be realized as C macro (i.e. not using a #define).

Upstream requirements:
⌈
A Bfx Library function shall not call any BSW module functions, e.g. the DET. A library function can call any other library functions since all library functions are re-entrant.
⌋

⌈
All Bfx Library functions shall avoid handling user faults and values outside specified range. Providing input values which are outside the specified range results in undefined behavior.
⌋

Note: Example of such undefined behavior is calling `Bfx_SetBit_u8u8` with a value of 8 (or higher) as bit position argument.

### 16. 错误分类

_原文标题：Error Classification_

Chapter describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of four error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 17. Development 错误

_原文标题：Development Errors_

There are no development errors.

### 18. Runtime 错误

_原文标题：Runtime Errors_

There are no runtime errors

### 19. Production 错误

_原文标题：Production Errors_

There are no production errors.

### 20. Extended Production 错误

_原文标题：Extended Production Errors_

There are no extended production errors.

### 21. API 规范

_原文标题：API specification_

### 22. Imported 类型

_原文标题：Imported types_

Definition of imported datatypes of module Bfx
⌈
| Module | Header File | Imported Type |
|---|---|---|
| There are no imported types. | < | < |

⌋

It is observed that since the sizes of the integer types provided by the C language are implementation-defined, the range of values that may be represented within each of the integer types will vary between CPU architectures and their compilers.

Thus, in order to improve the portability of the software, the types are defined in are used. The following mnemonic(s) are used in the library routine names to express the variablity.

Note: The naming convention for the API's with boolean return type/parameter type is given as \_u8 which shall be interpreted as boolean. If there is no boolean data type present in the return type/parameter type then \_u8 shall be interpreted as \_uint8 only.

| Size            | Platform Type | Mnemonic |
| --------------- | ------------- | -------- |
| unsigned 8-Bit  | boolean       | u8       |
| signed 8-Bit    | sint8         | s8       |
| signed 16-Bit   | sint16        | s16      |
| signed 32-Bit   | sint32        | s32      |
| signed 64-Bit   | sint64        | s64      |
| unsigned 8-Bit  | uint8         | u8       |
| unsigned 16-Bit | uint16        | u16      |
| unsigned 32-Bit | uint32        | u32      |
| unsigned 64-Bit | uint64        | u64      |

The ranges of these types can be found in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 类型定义

_原文标题：Type definitions_

None

### 24. Comment about functions optimized for target

The functions described in this library may be realized as regular functions or as inline functions.

### 25. Bit functions 定义

_原文标题：Bit functions definitions_

### 26. Bfx_SetBit

Definition of API function `Bfx_SetBit_`<TypeMn>u8
⌈
| Service Name | Bfx*SetBit*<TypeMn>u8 | < |
|---|---|---|
| Syntax | void Bfx*SetBit*<TypeMn>u8 ( | |

<Type>\* Data,
uint8 BitPn
| ) | < | |
|---|---|---|
| Service ID | 0x01 to 0x04 (see SWS_Bfx_00008) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | BitPn | Bit position |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall set the logical status of input data as '1' at the requested bit position. | < |
| Available via | Bfx.h | < |

⌋

Expected functionality:

| *Data = *Data | (0x01 BitPn) |
| ------------- | ------------ |

Example:

Data = 10001010b;
`Bfx_SetBit_u8u8`(&Data, 2);

The Data will be updated to 10001110b

List of `Bfx_SetBit` functions
⌈
| Service ID | Function prototype | Valid values for parameter BitPn |
|---|---|---|
| 0x01 | void Bfx_SetBit_u8u8(uint8*, uint8) | 0,1,2,..,7 |
| 0x02 | void Bfx_SetBit_u16u8(uint16*, uint8) | 0,1,2,..,15 |
| 0x03 | void Bfx_SetBit_u32u8(uint32*, uint8) | 0,1,2,..,31 |
| 0x04 | void Bfx_SetBit_u64u8(uint64*, uint8) | 0,1,2,..,63 |

⌋

### 27. Bfx_ClrBit

Definition of API function `Bfx_ClrBit_`<TypeMn>u8
⌈
| Service Name | Bfx*ClrBit*<TypeMn>u8 | < |
|---|---|---|
| Syntax | void Bfx*ClrBit*<TypeMn>u8 ( | |

<Type>\* Data,
uint8 BitPn
| ) | < | |
|---|---|---|
| Service ID | 0x06 to 0x09 (see SWS_Bfx_00015) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | BitPn | Bit position |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall clear the logical status of the input data to '0' at the requested bit position. | < |
| Available via | Bfx.h | < |

⌋

Expected functionality:

*Data = (*Data & ~(0x01 BitPn))

Example:

Data = 10001010b;
`Bfx_ClrBit_u8u8`(&Data, 1);

The Data will be updated to 10001000b

List of `Bfx_ClrBit` functions
⌈
| Service ID | Function prototype | Valid values for parameter BitPn |
|---|---|---|
| 0x06 | void Bfx_ClrBit_u8u8(uint8*, uint8) | 0,1,2,..,7 |
| 0x07 | void Bfx_ClrBit_u16u8(uint16*, uint8) | 0,1,2,..,15 |
| 0x08 | void Bfx_ClrBit_u32u8(uint32*, uint8) | 0,1,2,..,31 |
| 0x09 | void Bfx_ClrBit_u64u8(uint64*, uint8) | 0,1,2,..,63 |

⌋

### 28. Bfx_GetBit

Definition of API function `Bfx_GetBit_`<TypeMn>u8*u8
⌈
| Service Name | Bfx_GetBit*<TypeMn>u8*u8 | < |
|---|---|---|
| Syntax | boolean Bfx_GetBit*<TypeMn>u8_u8 ( | |

<Type> Data,
uint8 BitPn
| ) | < | |
|---|---|---|
| Service ID | 0x0A to 0x0D (see SWS_Bfx_00020) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Data | Input data |
| ^ | BitPn | Bit position |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | boolean | Bit Status |
| Description | This function shall return the logical status of the input data for the requested bit position. | < |
| Available via | Bfx.h | < |

⌋

Expected functionality:

if ((Data & (0x01 BitPn)) != 0)
return TRUE;
else
return FALSE;

Example:

result = `Bfx_GetBit_u8u8`(10001010b, 1);

The result will be TRUE.

List of `Bfx_GetBit` functions
⌈
| Service ID | Function prototype | Valid values for parameter BitPn |
|---|---|---|
| 0x0A | boolean Bfx_GetBit_u8u8_u8(uint8,uint8) | 0,1,2,..,7 |
| 0x0B | boolean Bfx_GetBit_u16u8_u8(uint16,uint8) | 0,1,2,..,15 |
| 0x0C | boolean Bfx_GetBit_u32u8_u8(uint32,uint8) | 0,1,2,..,31 |
| 0x0D | boolean Bfx_GetBit_u64u8_u8(uint64,uint8) | 0,1,2,..,63 |

⌋

### 29. Bfx_SetBits

Definition of API function `Bfx_SetBits_`<TypeMn>u8u8u8
⌈
| Service Name | Bfx*SetBits*<TypeMn>u8u8u8 | < |
|---|---|---|
| Syntax | void Bfx*SetBits*<TypeMn>u8u8u8 ( | |

<Type>\* Data,
uint8 BitStartPn,
uint8 BitLn,
uint8 Status
| ) | < | |
|---|---|---|
| Service ID | 0x20 to 0x23 (see SWS_Bfx_00025) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | BitStartPn | Start bit position |
| ^ | BitLn | Bit field length |
| ^ | Status | Status value, valid values are 0 and 1. |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall set the input data as '1' or '0' as per 'Status' value starting from 'BitStartPn' for the length 'BitLn'. | < |
| Available via | Bfx.h | < |

⌋

Example:

Data = 1110100000000111b;
`Bfx_SetBits_u16u8u8u8`(&Data, 5, 5, 1);

Before the `Bfx_SetBits_u16u8u8u8` function call Data contains this value:

The yellow fields mark those area which will be updated by the call (starting at bit position 5 and containing 5 bits). After the call the Data contains 1110101111100111b.

Another example setting bits to '0':

Value = 1110100000000111b;
`Bfx_SetBits_u16u8u8u8`(&Value, 0, 8, 0);
/_ Value is now 1110100000000000 _/

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Bfx_GetBits

Definition of API function `Bfx_GetBits_`<TypeMn>u8u8*<TypeMn>
⌈
| Service Name | Bfx_GetBits*<TypeMn>u8u8*<TypeMn> | < |
|---|---|---|
| Syntax | <Type> Bfx_GetBits*<TypeMn>u8u8\_<TypeMn> ( | |

<Type> Data,
uint8 BitStartPn,
uint8 BitLn
| ) | < | |
|---|---|---|
| Service ID | 0x26 to 0x29 (see SWS_Bfx_00034) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Data | Input data |
| ^ | BitStartPn | Start bit position |
| ^ | BitLn | Bit field length |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <Type> | Bit field sequence |
| Description | This function shall return the Bits of the input data starting from 'BitStartPn' for the length of 'BitLn'. | < |
| Available via | Bfx.h | < |

⌋

Example:

result = `Bfx_GetBits_u16u8u8_u16`(1110100000000111b, 9, 5);

The result will be 0000000000010100b.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Bfx_SetBitMask

Definition of API function `Bfx_SetBitMask_`<TypeMn><TypeMn>
⌈
| Service Name | Bfx*SetBitMask*<TypeMn><TypeMn> | < |
|---|---|---|
| Syntax | void Bfx*SetBitMask*<TypeMn><TypeMn> ( | |

<Type>\* Data,
<Type> Mask
| ) | < | |
|---|---|---|
| Service ID | 0x2A to 0x2D (see SWS_Bfx_00038) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Mask | Mask used to set bits |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall set the data to logical status '1' as per the corresponding Mask bits when set to value 1 and remaining bits will retain their original values. | < |
| Available via | Bfx.h | < |

⌋

Expected functionality:

| *Data = *Data | Mask |
| ------------- | ---- |

List of `Bfx_SetBitMask` functions
⌈
| Service ID | Function prototype |
|---|---|
| 0x2A | void Bfx_SetBitMask_u8u8(uint8*, uint8) |
| 0x2B | void Bfx_SetBitMask_u16u16(uint16*, uint16) |
| 0x2C | void Bfx_SetBitMask_u32u32(uint32*, uint32) |
| 0x2D | void Bfx_SetBitMask_u64u64(uint64*, uint64) |

⌋

### 32. Bfx_ClrBitMask

Definition of API function `Bfx_ClrBitMask_`<TypeMn><TypeMn>
⌈
| Service Name | Bfx*ClrBitMask*<TypeMn><TypeMn> | < |
|---|---|---|
| Syntax | void Bfx*ClrBitMask*<TypeMn><TypeMn> ( | |

<Type>\* Data,
<Type> Mask
| ) | < | |
|---|---|---|
| Service ID | 0x30 to 0x33 (see SWS_Bfx_00045) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Mask | Mask value |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall clear the logical status to '0' for the input data for all the bit positions as per the mask. | < |
| Available via | Bfx.h | < |

⌋

⌈
This function shall clear the data to logical status '0' as per the corresponding mask bits value when set to 1. The remaining bits shall retain their original values.
⌋

Expected functionality:

*Data = *Data & ~Mask

List of `Bfx_ClrBitMask` functions
⌈
| Service ID | Function prototype |
|---|---|
| 0x30 | void Bfx_ClrBitMask_u8u8(uint8*, uint8) |
| 0x31 | void Bfx_ClrBitMask_u16u16(uint16*, uint16) |
| 0x32 | void Bfx_ClrBitMask_u32u32(uint32*, uint32) |
| 0x33 | void Bfx_ClrBitMask_u64u64(uint64*, uint64) |

⌋

### 33. Bfx_TstBitMask

Definition of API function `Bfx_TstBitMask_`<TypeMn><TypeMn>_u8
⌈
| Service Name | Bfx_TstBitMask_<TypeMn><TypeMn>_u8 | < |
|---|---|---|
| Syntax | boolean Bfx_TstBitMask_<TypeMn><TypeMn>\_u8 ( | |

<Type> Data,
<Type> Mask
| ) | < | |
|---|---|---|
| Service ID | 0x36 to 0x39 (see SWS_Bfx_00050) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Data | Input data |
| ^ | Mask | Mask value |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | boolean | Value |
| Description | This function shall return TRUE, if all bits defined in Mask value are set in the input Data value. In all other cases this function shall return FALSE. | < |
| Available via | Bfx.h | < |

⌋

Expected functionality:

if ((Data & Mask) == Mask)
return TRUE;
else
return FALSE;

Example:

result = `Bfx_TstBitMask_u8u8_u8`(10010011b,10010000b);

The result will be TRUE.

List of `Bfx_TstBitMask` functions
⌈
| Service ID | Function prototype |
|---|---|
| 0x36 | boolean Bfx_TstBitMask_u8u8_u8(uint8,uint8) |
| 0x37 | boolean Bfx_TstBitMask_u16u16_u8(uint16,uint16) |
| 0x38 | boolean Bfx_TstBitMask_u32u32_u8(uint32,uint32) |
| 0x39 | boolean Bfx_TstBitMask_u64u64_u8(uint64,uint64) |

⌋

### 34. Bfx_TstBitLnMask

Definition of API function `Bfx_TstBitLnMask_`<TypeMn><TypeMn>_u8
⌈
| Service Name | Bfx_TstBitLnMask_<TypeMn><TypeMn>_u8 | < |
|---|---|---|
| Syntax | boolean Bfx_TstBitLnMask_<TypeMn><TypeMn>\_u8 ( | |

<Type> Data,
<Type> Mask
| ) | < | |
|---|---|---|
| Service ID | 0x3A to 0x3D (see SWS_Bfx_00055) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Data | Input data |
| ^ | Mask | Mask value |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | boolean | Data |
| Description | This function makes a test on the input data and if at least one bit is set amongst the bits set in the mask, then the function shall return TRUE, otherwise it shall return FALSE. | < |
| Available via | Bfx.h | < |

⌋

Example:

result = `Bfx_TstBitLnMask_u8u8_u8`(10010011b,10000111b);

The result will be TRUE.

List of `Bfx_TstBitLnMask` functions
⌈
| Service ID | Function prototype |
|---|---|
| 0x3A | boolean Bfx_TstBitLnMask_u8u8_u8(uint8,uint8) |
| 0x3B | boolean Bfx_TstBitLnMask_u16u16_u8(uint16,uint16) |
| 0x3C | boolean Bfx_TstBitLnMask_u32u32_u8(uint32,uint32) |
| 0x3D | boolean Bfx_TstBitLnMask_u64u64_u8(uint64,uint64) |

⌋

### 35. Bfx_TstParityEven

Definition of API function `Bfx_TstParityEven_`<TypeMn>_u8
⌈
| Service Name | Bfx_TstParityEven_<TypeMn>_u8 | < |
|---|---|---|
| Syntax | boolean Bfx_TstParityEven_<TypeMn>\_u8 ( | |

<Type> Data
| ) | < | |
|---|---|---|
| Service ID | 0x40 to 0x43 (see SWS_Bfx_00060) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Data | Input Data |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | boolean | Status |
| Description | This function tests the number of bits set to 1. If this number is even, it shall return TRUE, otherwise it returns FALSE. | < |
| Available via | Bfx.h | < |

⌋

Examples when `Bfx_TstParityEven` returns TRUE:

result_a = `Bfx_TstParityEven_u8_u8`(10010011b);
result_b = `Bfx_TstParityEven_u16_u8`(0);
/_ result_a == result_b == TRUE _/

The following example calls return FALSE:

result_c = `Bfx_TstParityEven_u8_u8`(11100011b);
result_d = `Bfx_TstParityEven_u16_u8`(1);
result_e = `Bfx_TstParityEven_u16_u8`(1001111100101010b);
/_ result_c == result_d == result_e == FALSE _/

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Bfx_ToggleBits

Definition of API function `Bfx_ToggleBits_`<TypeMn>
⌈
| Service Name | Bfx*ToggleBits*<TypeMn> | < |
|---|---|---|
| Syntax | void Bfx*ToggleBits*<TypeMn> ( | |

<Type>\* Data
| ) | < | |
|---|---|---|
| Service ID | 0x46 to 0x49 (see SWS_Bfx_00065) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | Data | Pointer to input data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function toggles all the bits of data (1's Complement Data). | < |
| Available via | Bfx.h | < |

⌋

Example:

data = 10010011b;
`Bfx_ToggleBits_u8`(&data);

The data will be 01101100b.

List of `Bfx_ToggleBits` functions
⌈
| Service ID | Function prototype |
|---|---|
| 0x46 | void Bfx_ToggleBits_u8(uint8*) |
| 0x47 | void Bfx_ToggleBits_u16(uint16*) |
| 0x48 | void Bfx_ToggleBits_u32(uint32*) |
| 0x49 | void Bfx_ToggleBits_u64(uint64*) |

⌋

### 37. Bfx_ToggleBitMask

Definition of API function `Bfx_ToggleBitMask_`<TypeMn><TypeMn>
⌈
| Service Name | Bfx*ToggleBitMask*<TypeMn><TypeMn> | < |
|---|---|---|
| Syntax | void Bfx*ToggleBitMask*<TypeMn><TypeMn> ( | |

<Type>\* Data,
<Type> Mask
| ) | < | |
|---|---|---|
| Service ID | 0x4A to 0x4D (see SWS_Bfx_00069) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Mask | Mask |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function toggles the bits of data when the corresponding bit of the mask is enabled and set to 1. | < |
| Available via | Bfx.h | < |

⌋

Example:

data = 11110000b;
`Bfx_ToggleBitMask_u8u8`(&data, 00111100b);

The data will be 11001100b.

List of `Bfx_ToggleBitMask` functions
⌈
| Service ID | Function prototype |
|---|---|
| 0x4A | void Bfx_ToggleBitMask_u8u8(uint8*, uint8) |
| 0x4B | void Bfx_ToggleBitMask_u16u16(uint16*, uint16) |
| 0x4C | void Bfx_ToggleBitMask_u32u32(uint32*, uint32) |
| 0x4D | void Bfx_ToggleBitMask_u64u64(uint64*, uint64) |

⌋

### 38. Bfx_ShiftBitRt

Definition of API function `Bfx_ShiftBitRt_`<TypeMn>u8
⌈
| Service Name | Bfx*ShiftBitRt*<TypeMn>u8 | < |
|---|---|---|
| Syntax | void Bfx*ShiftBitRt*<TypeMn>u8 ( | |

<Type>\* Data,
uint8 ShiftCnt
| ) | < | |
|---|---|---|
| Service ID | 0x50 to 0x53 (see SWS_Bfx_00075) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ShiftCnt | Shift right count |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall shift data to the right by ShiftCnt. The most significant bit (left-most bit) is replaced by a '0' bit and the least significant bit (right-most bit) is discarded for every single bit shift cycle. | < |
| Available via | Bfx.h | < |

⌋

Example:

data = 10010011b;
`Bfx_ShiftBitRt_u8u8`(&data,3);

The data will be 00010010b.

List of `Bfx_ShiftBitRt` functions
⌈
| Service ID | Function prototype | Maximum value of ShiftCnt |
|---|---|---|
| 0x50 | void Bfx_ShiftBitRt_u8u8(uint8*, uint8) | 7 |
| 0x51 | void Bfx_ShiftBitRt_u16u8(uint16*, uint8) | 15 |
| 0x52 | void Bfx_ShiftBitRt_u32u8(uint32*, uint8) | 31 |
| 0x53 | void Bfx_ShiftBitRt_u64u8(uint64*, uint8) | 63 |

⌋

### 39. Bfx_ShiftBitLt

Definition of API function `Bfx_ShiftBitLt_`<TypeMn>u8
⌈
| Service Name | Bfx*ShiftBitLt*<TypeMn>u8 | < |
|---|---|---|
| Syntax | void Bfx*ShiftBitLt*<TypeMn>u8 ( | |

<Type>\* Data,
uint8 ShiftCnt
| ) | < | |
|---|---|---|
| Service ID | 0x56 to 0x59 (see SWS_Bfx_00080) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ShiftCnt | Shift left count |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall shift data to the left by ShiftCnt. The least significant bit (right-most bit) is replaced by a '0' bit and the most significant bit (left-most bit) is discarded for every single bit shift cycle. | < |
| Available via | Bfx.h | < |

⌋

Example:

data = 10010011b;
`Bfx_ShiftBitLt_u8u8`(&data,3);

The data will be 10011000b.

List of `Bfx_ShiftBitLt` functions
⌈
| Service ID | Function prototype | Maximum value of ShiftCnt |
|---|---|---|
| 0x56 | void Bfx_ShiftBitLt_u8u8(uint8*, uint8) | 7 |
| 0x57 | void Bfx_ShiftBitLt_u16u8(uint16*, uint8) | 15 |
| 0x58 | void Bfx_ShiftBitLt_u32u8(uint32*, uint8) | 31 |
| 0x59 | void Bfx_ShiftBitLt_u64u8(uint64*, uint8) | 63 |

⌋

### 40. Bfx_RotBitRt

Definition of API function `Bfx_RotBitRt_`<TypeMn>u8
⌈
| Service Name | Bfx*RotBitRt*<TypeMn>u8 | < |
|---|---|---|
| Syntax | void Bfx*RotBitRt*<TypeMn>u8 ( | |

<Type>\* Data,
uint8 ShiftCnt
| ) | < | |
|---|---|---|
| Service ID | 0x5A to 0x5D (see SWS_Bfx_00090) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ShiftCnt | Shift count |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall rotate data to the right by ShiftCnt. The least significant bit is rotated to the most significant bit location for every single bit shift cycle. | < |
| Available via | Bfx.h | < |

⌋

Examples:

data_a = 00010111b;
`Bfx_RotBitRt_u8u8`(&data,1);
data_b = 00010111b;
`Bfx_RotBitRt_u8u8`(&data,3);

The data_a will be 10001011b and data_b will be 11100010b.

List of `Bfx_RotBitRt` functions
⌈
| Service ID | Function prototype | Maximum value of ShiftCnt |
|---|---|---|
| 0x5A | void Bfx_RotBitRt_u8u8(uint8*, uint8) | 7 |
| 0x5B | void Bfx_RotBitRt_u16u8(uint16*, uint8) | 15 |
| 0x5C | void Bfx_RotBitRt_u32u8(uint32*, uint8) | 31 |
| 0x5D | void Bfx_RotBitRt_u64u8(uint64*, uint8) | 63 |

⌋

### 41. Bfx_RotBitLt

Definition of API function `Bfx_RotBitLt_`<TypeMn>u8
⌈
| Service Name | Bfx*RotBitLt*<TypeMn>u8 | < |
|---|---|---|
| Syntax | void Bfx*RotBitLt*<TypeMn>u8 ( | |

<Type>\* Data,
uint8 ShiftCnt
| ) | < | |
|---|---|---|
| Service ID | 0x60 to 0x63 (see SWS_Bfx_00098) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ShiftCnt | Shift count |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall rotate data to the left by ShiftCnt. The most significant bit is rotated to the least significant bit location for every single bit shift cycle. | < |
| Available via | Bfx.h | < |

⌋

Examples:

data_a = 10110111b;
`Bfx_RotBitLt_u8u8`(&data,1);
data_b = 10110111b;
`Bfx_RotBitLt_u8u8`(&data,3);

The data_a will be 01101111b and data_b will be 10111101b.

List of `Bfx_RotBitLt` functions
⌈
| Sevice ID | Function prototype | Maximum value of ShiftCnt |
|---|---|---|
| 0x60 | void Bfx_RotBitLt_u8u8(uint8*, uint8) | 7 |
| 0x61 | void Bfx_RotBitLt_u16u8(uint16*, uint8) | 15 |
| 0x62 | void Bfx_RotBitLt_u32u8(uint32*, uint8) | 31 |
| 0x63 | void Bfx_RotBitLt_u64u8(uint64*, uint8) | 63 |

⌋

### 42. Bfx_CopyBit

Definition of API function `Bfx_CopyBit_`<TypeMn>u8<TypeMn>u8
⌈
| Service Name | Bfx*CopyBit*<TypeMn>u8<TypeMn>u8 | < |
|---|---|---|
| Syntax | void Bfx*CopyBit*<TypeMn>u8<TypeMn>u8 ( | |

<Type>\* DestinationData,
uint8 DestinationPosition,
<Type> SourceData,
uint8 SourcePosition
| ) | < | |
|---|---|---|
| Service ID | 0x66 to 0x69 (see SWS_Bfx_00108) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | DestinationPosition | Destination position |
| ^ | SourceData | Source data |
| ^ | SourcePosition | Source position |
| Parameters (inout) | DestinationData | Pointer to destination data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall copy a bit from source data from bit position to destination data at bit position. | < |
| Available via | Bfx.h | < |

⌋

Example:

DestinationData = 10100001b;
`Bfx_CopyBit_u8u8u8u8`(&DestinationData, 6, 11011010, 1);

The DestinationData will have 11100001b.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Bfx_PutBits

Definition of API function `Bfx_PutBits_`<TypeMn>u8u8<TypeMn>
⌈
| Service Name | Bfx*PutBits*<TypeMn>u8u8<TypeMn> | < |
|---|---|---|
| Syntax | void Bfx*PutBits*<TypeMn>u8u8<TypeMn> ( | |

<Type>\* Data,
uint8 BitStartPn,
uint8 BitLn,
<Type> Pattern
| ) | < | |
|---|---|---|
| Service ID | 0x70 to 0x73 (see SWS_Bfx_00112) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | BitStartPn | Start bit position |
| ^ | BitLn | Bit field length |
| ^ | Pattern | Pattern to be set |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall put bits as mentioned in Pattern to the input Data from the specified bit position. | < |
| Available via | Bfx.h | < |

⌋

Example:

Data = 11110000b;
`Bfx_PutBits_u8u8u8u8`(&Data, 1, 3, 00000011b);

The Data will have 11110110b.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Bfx_PutBitsMask

Definition of API function `Bfx_PutBitsMask_`<TypeMn><TypeMn><TypeMn>
⌈
| Service Name | Bfx*PutBitsMask*<TypeMn><TypeMn><TypeMn> | < |
|---|---|---|
| Syntax | void Bfx*PutBitsMask*<TypeMn><TypeMn><TypeMn> ( | |

<Type>\* Data,
<Type> Pattern,
<Type> Mask
| ) | < | |
|---|---|---|
| Service ID | 0x80 to 0x83 (see SWS_Bfx_00124) | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Pattern | Pattern to be set |
| ^ | Mask | Mask value |
| Parameters (inout) | Data | Pointer to data |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function shall put all bits defined in Pattern and for which the corresponding Mask bit is set to 1 in the input Data. | < |
| Available via | Bfx.h | < |

⌋

Example:

data = 11100000b;
`Bfx_PutBitsMask_u8u8u8`(&data, 11001101b, 00001111b);

The data will contain 11101101b.

List of `Bfx_PutBitsMask` functions
⌈
| Service ID | Function prototype |
|---|---|
| 0x80 | void Bfx_PutBitsMask_u8u8u8(uint8*, uint8, uint8) |
| 0x81 | void Bfx_PutBitsMask_u16u16u16(uint16*, uint16, uint16) |
| 0x82 | void Bfx_PutBitsMask_u32u32u32(uint32*, uint32, uint32) |
| 0x83 | void Bfx_PutBitsMask_u64u64u64(uint64*, uint64, uint64) |

⌋

### 其余 32 章（内容从略，见纯文本全文）

45. Bfx_PutBit
46. Bfx_ShiftBitSat
47. Bfx_CountLeadingOnes
48. Bfx_CountLeadingSigns
49. Bfx_CountLeadingZeros
50. Callback 通知
51. Scheduled functions
52. Expected 接口
53. Mandatory 接口
54. Optional 接口
55. Configurable 接口
56. 服务接口
57. 时序图
58. 配置规范
59. How to read this chapter
60. Containers and 配置 parameters
61. 发布信息
62. 附录
63. 不适用需求
64. History of 规范 Items
65. 规范 Item History of this document compared to AUTOSAR R24-11
66. Added 规范 Items in R25-11
67. Changed 规范 Items in R25-11
68. Deleted 规范 Items in R25-11
69. 规范 Item History of this document compared to AUTOSAR R23-11
70. Added 规范 Items in R24-11
71. Changed 规范 Items in R24-11
72. Deleted 规范 Items in R24-11
73. 规范 Item History of this document compared to AUTOSAR R22-11
74. Added 规范 Items in R23-11
75. Changed 规范 Items in R23-11
76. Deleted 规范 Items in R23-11
