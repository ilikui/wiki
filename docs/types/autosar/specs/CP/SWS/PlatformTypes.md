# Specification of Platform Types for Classic Platform (`PlatformTypes`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 048 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_PlatformTypes_048\AUTOSAR_CP_SWS_PlatformTypes.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_PlatformTypes_048\AUTOSAR_CP_SWS_PlatformTypes.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_PlatformTypes_048\zzgen\CP_SWS_PlatformTypes.complete.txt`

## 文档简介

This document specifies the AUTOSAR platform types header file. It contains all platform dependent types and symbols. Those types must be abstracted in order to become platform and compiler independent.

It is required that all platform types files are unique within the AUTOSAR community to guarantee unique types per platform and to avoid type changes when moving a software module from platform A to B.

## 模块依赖

None.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies the AUTOSAR platform types header file. It contains all platform dependent types and symbols. Those types must be abstracted in order to become platform and compiler independent.

It is required that all platform types files are unique within the AUTOSAR community to guarantee unique types per platform and to avoid type changes when moving a software module from platform A to B.

### 2. 定义 and Abbreviations
*原文标题：Definitions and Abbreviations*

Acronyms and abbreviations that have a local scope are not contained in the AUTOSAR glossary . These must appear in a local glossary.

### 3. 定义
*原文标题：Definitions*

| Term | Description |
|---|---|
| Rollover mechanism | The following example sequence is called 'rollover': |

* An unsigned char has the value of 255.
* It is incremented by 1.
* The result is 0.

### 4. Abbreviations

| Abbreviation | Description |
|---|---|
| int | Integer |

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules (see ), which is also valid for Platform Types. Thus, the specification "General Specification on Basic Software modules"  shall be considered as additional and required specification for Platform Types.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

No limitations.

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 11. Applicability to safety related environments

The AUTOSAR boolean type may be used if the correct usage (see ) is proven by a formal code review or a static analysis by a validated static analysis tool.

The optimized AUTOSAR integer data types (*_least) may be used if the correct usage (see chapter ) is proven by a formal code review or a static analysis by a validated static analysis tool.

### 12. 对其他模块的依赖
*原文标题：Dependencies to other modules*

None.

### 13. 文件结构
*原文标题：File structure*

### 14. 代码文件结构
*原文标题：Code file structure*

None

### 15. 头文件结构
*原文标题：Header file structure*

Two header file structures are applicable. One is depending on communication related basic software modules and the second is depending on non-communication related basic software modules.

### 16. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in General Requirements on Basic Software Modules  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The AUTOSAR Basic Software shall provide a microcontroller abstraction layer which provides a standardized interface to higher software layers |  |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| All type definitions of target and compiler specific scope shall be placed and organized in a single type header |  |  |
| AUTOSAR shall provide a boolean type |  |  |

### 17. 功能规范
*原文标题：Functional specification*

### 18. 通用 issues
*原文标题：General issues*

Upstream requirements:
⌈
All platform specific abstracted AUTOSAR data types and symbols shall be defined in the `Platform_Types`.h header file. It is not allowed to add any extension to this file. Any extension invalidates the AUTOSAR conformity.
⌋

### 19. CPU 类型
*原文标题：CPU Type*

Upstream requirements:
⌈
For each platform the register width of the CPU used shall be indicated by defining `CPU_TYPE`.
⌋

  Upstream requirements:
⌈
According to the register width of the CPU used, `CPU_TYPE` shall be assigned to one of the symbols `CPU_TYPE_8`, `CPU_TYPE_16`, `CPU_TYPE_32` or `CPU_TYPE_64`.
⌋

### 20. Endianess

The pattern for bit, byte and word ordering in native types, such as integers, is called endianess.

  Upstream requirements:
⌈
For each platform the appropriate bit order on register level shall be indicated in the platform types header file using the symbol `CPU_BIT_ORDER`.
⌋

  Upstream requirements:
⌈
For each platform the appropriate byte order on memory level shall be indicated in the platform types header file using the symbol `CPU_BYTE_ORDER`.
⌋

### 21. Bit Ordering (Register)

Upstream requirements:
⌈
In case of Big Endian bit ordering `CPU_BIT_ORDER` shall be assigned to `MSB_FIRST` in the platform types header file.
⌋

  Upstream requirements:
⌈
In case of Little Endian bit ordering `CPU_BIT_ORDER` shall be assigned to `LSB_FIRST` in the platform types header file.
⌋

Important Note:

The naming convention Bit0, Bit1, etc. and the bit's significance within a byte, word, etc. are different topics and shall not be mixed. The counting scheme of bits in Motorola \muC-architecture's (Big Endian Bit Order) starts with Bit0 indicating the Most Significant Bit, whereas all other \muC using Little Endian Bit Order assign Bit0 to be the Least Significant Bit!

The MSB in an accumulator is always stored as the left-most bit regardless of the CPU type. Hence, Big and Little Endianess bit orders imply different bit-naming conventions.

### 22. Byte Ordering (存储)
*原文标题：Byte Ordering (Memory)*

Upstream requirements:
⌈
In case of Big Endian byte ordering `CPU_BYTE_ORDER` shall be assigned to `HIGH_BYTE_FIRST` in the platform types header file.
⌋

| Address | Data | Order |
|---|---|---|
| n | Byte1 | Most Significant Byte (HIGH_BYTE_FIRST) |
| n+1 | Byte0 | Least Significant Byte |

  Upstream requirements:
⌈
In case of Little Endian byte ordering `CPU_BYTE_ORDER` shall be assigned to `LOW_BYTE_FIRST` in the platform types header file.
⌋

| Address | Data | Order |
|---|---|---|
| n | Byte0 | Least Significant Byte (LOW_BYTE_FIRST) |
| n+1 | Byte1 | Most Significant Byte |

Naming convention for illustration: The Most Significant Byte within a 16 bit wide data is named Byte1. The Least Significant Byte within a 16 bit wide data is named Byte0.

Important Note: The naming convention Byte0 and Byte1 is not unique and may be different in the manufacturer's reference documentation for a particular \muC.

### 23. Optimized integer 数据类型
*原文标题：Optimized integer data types*

For details refer to the chapter "AUTOSAR Integer Data Types" of the document "General Requirements on Basic Software Modules" .

Examples of usage:

* Loop counters (e.g. maximum loop count = 124 \Rightarrow use uint8_least
* Switch case arguments (e.g. maximum number of states = 17 \Rightarrow use uint8_least

### 24. Boolean 数据类型
*原文标题：Boolean data type*

Upstream requirements:
⌈
The standard AUTOSAR type boolean shall be implemented using the C99 build-in type _Bool.
⌋

Notes:

* According to , chapter 6.2.5 (page 33), line 2, an object declared as type _Bool is large enough to store the values 0 and 1. Thus, the exact size of an object of type boolean is NOT defined by AUTOSAR anymore.
* To avoid MISRA violations caused by the definition of TRUE and FALSE as signed integers, TRUE and FALSE shall be defined in `Platform_Types`.h using logical expressions that evaluate to the same values as "true" and "false" as defined by stdbool.h. This allows the usage of TRUE and FALSE in C-code, pre-processor statements and also avoids MISRA violations. The corresponding "boolean" implementation data type shall use the values 1 (TRUE) and 0 (FALSE) for the definition of dataConstr and CompuMethod as those can only be defined with scalar values (e.g. for A2L generation usage).

  Upstream requirements:
⌈
The standard AUTOSAR type boolean shall only be used in conjunction with the standard symbols TRUE and FALSE. For value assignments of variables of type boolean no arithmetic or logical operators (+, ++, -, --, *, /, %, , >>, ~, &) must be used.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 错误分类
*原文标题：Error classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 26. Development 错误
*原文标题：Development Errors*

There are no development errors.

### 27. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 28. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 29. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 30. API 规范
*原文标题：API specification*

### 31. Imported 类型
*原文标题：Imported types*

Not applicable.

### 32. 类型定义
*原文标题：Type definitions*

⌈
Concerning the signed integer types, AUTOSAR supports for compiler and target implementation only 2 complement arithmetic. This directly impacts the chosen ranges for these types.
⌋

### 33. boolean

Definition of ImplementationDataType boolean
  Upstream requirements:
⌈
| Name | boolean | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | FALSE | 0 | - |
| ^ | TRUE | 1 | - |
| Description | This standard AUTOSAR type shall only be used together with the definitions TRUE and FALSE. | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

See  for implementation and usage.

### 34. uint8

Definition of ImplementationDataType uint8
  Upstream requirements:
⌈
| Name | uint8 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | UINT8_MIN | 0 | Minimum possible uint8 value |
| ^ | UINT8_MAX | 255 | Maximum possible uint8 value |
| Description | This standard AUTOSAR type shall be of 8 bit unsigned. | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 35. uint16

Definition of ImplementationDataType uint16
  Upstream requirements:
⌈
| Name | uint16 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | UINT16_MIN | 0 | Minimum possible uint16 value |
| ^ | UINT16_MAX | 65535 | Maximum possible uint16 value |
| Description | This standard AUTOSAR type shall be of 16 bit unsigned. | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 36. uint32

Definition of ImplementationDataType uint32
  Upstream requirements:
⌈
| Name | uint32 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | UINT32_MIN | 0 | Minimum possible uint32 value |
| ^ | UINT32_MAX | 4294967295 | Maximum possible uint32 value |
| Description | This standard AUTOSAR type shall be 32 bit unsigned. | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 37. uint64

Definition of ImplementationDataType uint64
  Upstream requirements:
⌈
| Name | uint64 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | UINT64_MIN | 0 | Minimum possible uint64 value |
| ^ | UINT64_MAX | 18446744073709551615 | Maximum possible uint64 value |
| Description | This standard AUTOSAR type shall be 64 bit unsigned. | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 38. sint8

Definition of ImplementationDataType sint8
  Upstream requirements:
⌈
| Name | sint8 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | SINT8_MIN | -128 | Minimum possible sint8 value |
| ^ | SINT8_MAX | 127 | Maximum possible sint8 value |
| Description | This standard AUTOSAR type shall be of 8 bit signed. | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 39. sint16

Definition of ImplementationDataType sint16
  Upstream requirements:
⌈
| Name | sint16 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | SINT16_MIN | -32768 | Minimum possible sint16 value |
| ^ | SINT16_MAX | 32767 | Maximum possible sint16 value |
| Description | This standard AUTOSAR type shall be of 16 bit signed. | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 40. sint32

Definition of ImplementationDataType sint32
  Upstream requirements:
⌈
| Name | sint32 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | SINT32_MIN | -2147483648 | Minimum possible sint32 value |
| ^ | SINT32_MAX | 2147483647 | Maximum possible sint32 value |
| Description | This standard AUTOSAR type shall be 32 bit signed. | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 41. sint64

Definition of ImplementationDataType sint64
  Upstream requirements:
⌈
| Name | sint64 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | SINT64_MIN | -9223372036854775808 | Minimum possible sint64 value |
| ^ | SINT64_MAX | 9223372036854775807 | Maximum possible sint64 value |
| Description | This standard AUTOSAR type shall be 64 bit signed. | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 42. uint8_least

Definition of datatype uint8_least
  Upstream requirements:
⌈
| Name | uint8_least | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | At least 0..255 | - | 0x00..0xFF |
| Description | This optimized AUTOSAR type shall be at least 8 bit unsigned. | < | < |
| Available via | Platform_Types.h | < | < |

⌋

See chapter  for implementation and usage.

### 43. uint16_least

Definition of datatype uint16_least
  Upstream requirements:
⌈
| Name | uint16_least | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | At least 0..65535 | - | 0x0000..0xFFFF |
| Description | This optimized AUTOSAR type shall be at least 16 bit unsigned. | < | < |
| Available via | Platform_Types.h | < | < |

⌋

See chapter  for implementation and usage.

### 44. uint32_least

Definition of datatype uint32_least
  Upstream requirements:
⌈
| Name | uint32_least | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | At least 0..4294967295 | - | 0x00000000..0xFFFFFFFF |
| Description | This optimized AUTOSAR type shall be at least 32 bit unsigned. | < | < |
| Available via | Platform_Types.h | < | < |

⌋

See chapter  for implementation and usage.

### 45. sint8_least

Definition of datatype sint8_least
  Upstream requirements:
⌈
| Name | sint8_least | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | sint | < | < |
| Range | At least -128..+127 | - | 0x80..0x7F |
| Description | This optimized AUTOSAR type shall be at least 8 bit signed. | < | < |
| Available via | Platform_Types.h | < | < |

⌋

See chapter  for implementation and usage.

### 46. sint16_least

Definition of datatype sint16_least
  Upstream requirements:
⌈
| Name | sint16_least | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | sint | < | < |
| Range | At least -32768..+32767 | - | 0x8000..0x7FFF |
| Description | This optimized AUTOSAR type shall be at least 16 bit signed. | < | < |
| Available via | Platform_Types.h | < | < |

⌋

See chapter  for implementation and usage.

### 47. sint32_least

Definition of datatype sint32_least
  Upstream requirements:
⌈
| Name | sint32_least | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | sint | < | < |
| Range | At least -2147483648..+2147483647 | - | 0x80000000..0x7FFFFFFF |
| Description | This optimized AUTOSAR type shall be at least 32 bit signed. | < | < |
| Available via | Platform_Types.h | < | < |

⌋

See chapter  for implementation and usage.

### 48. float32

Definition of ImplementationDataType float32
  Upstream requirements:
⌈
| Name | float32 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | FLOAT32_MIN | 1.17549435e-38 | Smallest positive value of float32 |
| ^ | FLOAT32_MAX | 3.40282347e+38 | Largest value of float32 |
| ^ | FLOAT32_EPSILON | 1.19209290e-07 | Smallest increment between two values of float32 |
| Description | This standard AUTOSAR type shall follow the 32-bit binary interchange format according to IEEE 754-2008 with encoding parameters specified in chapter 3.6, table 3.5, column "binary32". | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 49. float64

Definition of ImplementationDataType float64
  Upstream requirements:
⌈
| Name | float64 | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Range | FLOAT64_MIN | 2.2250738585072014e-308 | Smallest positive value of float64 |
| ^ | FLOAT64_MAX | 1.7976931348623157e+308 | Largest value of float64 |
| ^ | FLOAT64_EPSILON | 2.2204460492503131e-16 | Smallest increment between two values of float64 |
| Description | This standard AUTOSAR type shall follow the 64-bit binary interchange format according to IEEE 754-2008 with encoding parameters specified in chapter 3.6, table 3.5, column "binary64". | < | < |
| Variation | - | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 50. VoidPtr

Definition of ImplementationDataType VoidPtr
  Upstream requirements:
⌈
| Name | VoidPtr |
|---|---|
| Kind | Pointer |
| Type | void* |
| Description | This standard AUTOSAR type shall be a void pointer |

Note: This type shall be used for buffers that contain data returned to the caller.
| Variation | - |
|---|---|
| Available via | Platform_Types.h |

⌋

### 51. ConstVoidPtr

Definition of ImplementationDataType ConstVoidPtr
  Upstream requirements:
⌈
| Name | ConstVoidPtr |
|---|---|
| Kind | Const Pointer |
| Type | const void* |
| Description | This standard AUTOSAR type shall be a void pointer to const. |

Note: This type shall be used for buffers that are passed to the callee.
| Variation | - |
|---|---|
| Available via | Platform_Types.h |

⌋

### 52. Symbol 定义
*原文标题：Symbol definitions*

### 53. CPU_TYPE

Definition of datatype `CPU_TYPE`
  Upstream requirements:
⌈
| Name | CPU_TYPE | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | CPU_TYPE_8 | - | Indicating a 8 bit processor |
| ^ | CPU_TYPE_16 | - | Indicating a 16 bit processor |
| ^ | CPU_TYPE_32 | - | Indicating a 32 bit processor |
| ^ | CPU_TYPE_64 | - | Indicating a 64 bit processor |
| Description | This symbol shall be defined as #define having one of the values CPU_TYPE_8, CPU_TYPE_16, CPU_TYPE_32 or CPU_TYPE_64 according to the platform. | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 54. CPU_BIT_ORDER

Definition of datatype `CPU_BIT_ORDER`
  Upstream requirements:
⌈
| Name | CPU_BIT_ORDER | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MSB_FIRST | - | The most significant bit is the first bit of the bit sequence. |
| ^ | LSB_FIRST | - | The least significant bit is the first bit of the bit sequence. |
| Description | This symbol shall be defined as #define having one of the values MSB_FIRST or LSB_FIRST according to the platform. | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 55. CPU_BYTE_ORDER

Definition of datatype `CPU_BYTE_ORDER`
  Upstream requirements:
⌈
| Name | CPU_BYTE_ORDER | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | HIGH_BYTE_FIRST | - | Within uint16, the high byte is located before the low byte. |
| ^ | LOW_BYTE_FIRST | - | Within uint16, the low byte is located before the high byte. |
| Description | This symbol shall be defined as #define having one of the values HIGH_BYTE_FIRST or LOW_BYTE_FIRST according to the platform. | < | < |
| Available via | Platform_Types.h | < | < |

⌋

### 56. TRUE, FALSE

Definition of datatype `TRUE_FALSE`
⌈
| Name | TRUE_FALSE | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | FALSE | 0 | - |
| ^ | TRUE | 1 | - |
| Description | The symbols TRUE and FALSE shall be defined as follows: |  |  |

#ifndef TRUE #define TRUE (1 == 1) #endif

| #ifndef FALSE #define FALSE (1 == 0) #endif | < | < |  |
|---|---|---|---|
| Available via | Platform_Types.h | < | < |

⌋

⌈
In case of in-built compiler support of the symbols, redefinitions shall be avoided using a conditional check.
⌋

⌈
These symbols shall only be used in conjunction with the boolean type defined in `Platform_Types`.h.
⌋

### 57. 功能定义
*原文标题：Function definitions*

Not applicable.

### 58. Scheduled functions

Not applicable.

### 59. Expected 接口
*原文标题：Expected Interfaces*

Not applicable.

### 60. 服务接口
*原文标题：Service Interfaces*

Not applicable.

### 61. 时序图
*原文标题：Sequence diagrams*

Not applicable.

### 62. 配置规范
*原文标题：Configuration specification*

### 63. Published parameters

For details refer to .

### 64. 附录
*原文标题：Appendix*

### 65. 不适用需求
*原文标题：Not applicable requirements*

Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
These requirements are not applicable to this specification.
⌋

### 66. Change history of AUTOSAR traceable items

### 67. Traceable item history of this document according to AUTOSAR Release R22-11

### 68. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

### 69. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

### 70. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

### 71. Traceable item history of this document according to AUTOSAR Release R23-11

### 72. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 73. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

none

### 74. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 75. Traceable item history of this document according to AUTOSAR Release R24-11

### 76. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 77. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 78. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 79. Traceable item history of this document according to AUTOSAR Release R25-11

### 80. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 81. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 82. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 83. Traceable item history of this document according to AUTOSAR Release R26-11

### 84. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 85. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

### 86. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

none
