# Specification of Platform Types for Adaptive Platform (`PlatformTypes`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 875 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_PlatformTypes_875\AUTOSAR_AP_SWS_PlatformTypes.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_PlatformTypes_875\AUTOSAR_AP_SWS_PlatformTypes.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_PlatformTypes_875\zzgen\AP_SWS_PlatformTypes.complete.txt`

## 文档简介

This document defines primitive CppImplementationDataTypes that can be used in ServiceInterface descriptions provided in ARXML as defined in `TPS_ManifestSpecification` .

The definition of common used CppImplementationDataTypes increases the portability of applications and prevents from re-defining the same types for each application.

## 模块依赖

This document is dependent on the language binding rules defined in Specification of Language Binding for modeled AP data types .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document defines primitive CppImplementationDataTypes that can be used in ServiceInterface descriptions provided in ARXML as defined in `TPS_ManifestSpecification` .

The definition of common used CppImplementationDataTypes increases the portability of applications and prevents from re-defining the same types for each application.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations used in this document that are not included in the .

| Terms: | Description: |
|---|---|
| 2's complement | method of signed number representation. |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

The TPS Manifest specification  defines the meta-model that is used for the description of primitive datatypes that are presented in this document.

The Specification of Language Binding for modeled AP data types  defines the language binding rules for model artifacts.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No limitations known.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions to applicability.

### 9. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This document is dependent on the language binding rules defined in Specification of Language Binding for modeled AP data types .

### 10. 需求追踪
*原文标题：Requirements Tracing*

Requirements against this document are exclusively stated in the corresponding requirements document .

The following table references the requirements specified in the corresponding requirements document and provides information about individual specification items that fulfill a given requirement.

| Requirement | Description | Satisfied by |
|---|---|---|
| Source Code Portability Support |  |  |

### 11. 功能规范
*原文标题：Functional specification*

### 12. Primitive ImplementationDataTypes and their 映射 to C++ datatypes
*原文标题：Primitive ImplementationDataTypes and their mapping to C++ datatypes*

This chapter describes diverse primitive StdCppImplementationDataTypes that are predefined by AUTOSAR for the usage in the Adaptive Platform and defines their mapping to C++ datatypes.

The mapping of a primitive StdCppImplementationDataType that is used in a ServiceInterface to a C++ datatype is defined in Specification of Language Binding for modeled AP data types .

Please note that  in  defines that interfaces of AUTOSAR Adaptive platform are designed to be compatible with C++14  but at the same time it is allowed to use newer C++ versions like C++17. In addition the Adaptive Core document  defines common classes and functionality that is used by multiple AUTOSAR functional clusters as part of their public interfaces.

### 13. Bool

primitive Implementation Data Type bool
  Upstream requirements:
⌈
The primitive Implementation Data Type bool is defined by the StdCppImplementationDataType with the category VALUE and the shortName bool.
⌋

The bool StdCppImplementationDataType will be mapped to the bool-type in C++, that is capable of holding one of the two values: true or false. Please note that in C++ sizeof(bool) is implementation-defined.

Please note that according to  if the typeEmitter is set to any value other than `TYPE_EMITTER_ARA`, the ARA generator shall not generate the corresponding data type definition.

### 14. Signed Integer

### 15. int8_t

primitive Implementation Data Type int8_t
  Upstream requirements:
⌈
The signed integer type of 8 bits is defined by the StdCppImplementationDataType with the category VALUE and the shortName int8_t.
⌋

The int8_t StdCppImplementationDataType will be mapped to int8_t of the C++ standard library with width of exactly 8 bit.

### 16. int16_t

primitive Implementation Data Type int16_t
  Upstream requirements:
⌈
The signed integer type of 16 bits is defined by the StdCppImplementationDataType with the category VALUE and the shortName int16_t.
⌋

The int16_t StdCppImplementationDataType will be mapped to int16_t of the C++ standard library with width of exactly 16 bit.

### 17. int32_t

primitive Implementation Data Type int32_t
  Upstream requirements:
⌈
The signed integer type of 32 bits is defined by the StdCppImplementationDataType with the category VALUE and the shortName int32_t.
⌋

The int32_t StdCppImplementationDataType will be mapped to int32_t of the C++ standard library with width of exactly 32 bit.

### 18. int64_t

primitive Implementation Data Type int64_t
  Upstream requirements:
⌈
The signed integer type of 64 bits is defined by the StdCppImplementationDataType with the category VALUE and the shortName int64_t.
⌋

The int64_t StdCppImplementationDataType will be mapped to int64_t of the C++ standard library with width of exactly 64 bit.

### 19. Unsigned Integer

### 20. uint8_t

primitive Implementation Data Type uint8_t
  Upstream requirements:
⌈
The unsigned integer type of 8 bits is defined by the StdCppImplementationDataType with the category VALUE and the shortName uint8_t.
⌋

The uint8_t StdCppImplementationDataType will be mapped to uint8_t of the C++ standard library with width of exactly 8 bit.

### 21. uint16_t

primitive Implementation Data Type uint16_t
  Upstream requirements:
⌈
The unsigned integer type of 16 bits is defined by the StdCppImplementationDataType with the category VALUE and the shortName uint16_t.
⌋

The uint16_t StdCppImplementationDataType will be mapped to uint16_t of the C++ standard library with width of exactly 16 bit.

### 22. uint32_t

primitive Implementation Data Type uint32_t
  Upstream requirements:
⌈
The unsigned integer type of 32 bits is defined by the StdCppImplementationDataType with the category VALUE and the shortName uint32_t.
⌋

The uint32_t StdCppImplementationDataType will be mapped to uint32_t of the C++ standard library with width of exactly 32 bit.

### 23. uint64_t

primitive Implementation Data Type uint64_t
  Upstream requirements:
⌈
The unsigned integer type of 64 bits is defined by the StdCppImplementationDataType with the category VALUE and the shortName uint64_t.
⌋

The uint64_t StdCppImplementationDataType will be mapped to uint64_t of the C++ standard library with width of exactly 64 bit.

### 24. Floating point 类型
*原文标题：Floating point types*

### 25. float

primitive Implementation Data Type float
  Upstream requirements:
⌈
The single precision floating point type is defined by the StdCppImplementationDataType with the category VALUE and the shortName float.
⌋

The float StdCppImplementationDataType will be mapped in C++ to float that is the 32 bit floating point type.

Please note that according to  if the typeEmitter is set to any value other than `TYPE_EMITTER_ARA`, the ARA generator shall not generate the corresponding data type definition.

### 26. double

primitive Implementation Data Type double
  Upstream requirements:
⌈
The double precision floating point type is defined by the StdCppImplementationDataType with the category VALUE and the shortName double.
⌋

The double StdCppImplementationDataType will be mapped in C++ to double that is the 64 bit floating point type.

Please note that according to  if the typeEmitter is set to any value other than `TYPE_EMITTER_ARA`, the ARA generator shall not generate the corresponding data type definition.

### 27. 附录
*原文标题：Appendix*

### 28. Mentioned 清单 Elements
*原文标题：Mentioned Manifest Elements*

For the sake of completeness, this chapter contains a set of class tables representing meta-classes mentioned in the context of this document but which are not contained directly in the scope of describing specific meta-model semantics.

| Class | CppImplementationDataType (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the way to specify a reusable data type definition taken as a the basis for a C++ language binding |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, AbstractImplementationDataType, AtpBlueprint, AtpBlueprintable, AtpClassifier, AtpType, AutosarDataType, CollectableElement, CppImplementationDataTypeContextTarget, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Subclasses | CustomCppImplementationDataType, StdCppImplementationDataType | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| arraySize | PositiveInteger | 0..1 | attr | This attribute can be used to specify the array size if the enclosing CppImplementationDataType has array semantics. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. History of 规范 Items
*原文标题：History of Specification Items*

### 30. Constraint and 规范 Item History of this document according to AUTOSAR Release 17-10
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release 17-10*

### 31. Added 规范 Items in 17-10
*原文标题：Added Specification Items in 17-10*

| Number | Heading |
|---|---|
| primitive Implementation Data Type sint8 |  |
| SwBaseType sint8 |  |
| Platform specific settings in SwBaseType sint8 |  |
| primitive Implementation Data Type sint16 |  |
| SwBaseType sint16 |  |
| Platform specific settings in SwBaseType sint16 |  |
| primitive Implementation Data Type sint32 |  |
| SwBaseType sint32 |  |
| Platform specific settings in SwBaseType sint32 |  |
| primitive Implementation Data Type sint64 |  |
| SwBaseType sint64 |  |
| Platform specific settings in SwBaseType sint64 |  |
| primitive Implementation Data Type sint8_least |  |
| SwBaseType sint8_least |  |
| Platform specific settings in SwBaseType sint8_least |  |
| primitive Implementation Data Type sint16_least |  |
| SwBaseType sint16_least |  |
| Platform specific settings in SwBaseType sint16_least |  |
| primitive Implementation Data Type sint32_least |  |
| SwBaseType sint32_least |  |
| Platform specific settings in SwBaseType sint32_least |  |
| primitive Implementation Data Type uint8 |  |
| SwBaseType uint8 |  |
| Platform specific settings in SwBaseType uint8 |  |
| primitive Implementation Data Type uint16 |  |
| SwBaseType uint16 |  |
| Platform specific settings in SwBaseType uint16 |  |
| primitive Implementation Data Type uint32 |  |
| SwBaseType uint32 |  |
| Platform specifi |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Changed 规范 Items in 17-10
*原文标题：Changed Specification Items in 17-10*

none

### 33. Deleted 规范 Items in 17-10
*原文标题：Deleted Specification Items in 17-10*

none

### 34. Constraint and 规范 Item History of this document according to AUTOSAR Release 18-03
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release 18-03*

### 35. Added 规范 Items in 18-03
*原文标题：Added Specification Items in 18-03*

none

### 36. Changed 规范 Items in 18-03
*原文标题：Changed Specification Items in 18-03*

| Number | Heading |
|---|---|
| Platform specific settings in SwBaseType sint8 |  |
| Platform specific settings in SwBaseType sint8_least |  |
| Platform specific settings in SwBaseType uint8 |  |
| Platform specific settings in SwBaseType uint8_least |  |

### 37. Deleted 规范 Items in 18-03
*原文标题：Deleted Specification Items in 18-03*

none

### 38. Constraint and 规范 Item History of this document according to AUTOSAR Release 18-10
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release 18-10*

### 39. Added 规范 Items in 18-10
*原文标题：Added Specification Items in 18-10*

none

### 40. Changed 规范 Items in 18-10
*原文标题：Changed Specification Items in 18-10*

| Number | Heading |
|---|---|
| primitive Implementation Data Type int8_t |  |
| primitive Implementation Data Type int16_t |  |
| primitive Implementation Data Type int32_t |  |
| primitive Implementation Data Type int64_t |  |
| primitive Implementation Data Type uint8_t |  |
| primitive Implementation Data Type uint16_t |  |
| primitive Implementation Data Type uint32_t |  |
| primitive Implementation Data Type uint64_t |  |
| primitive Implementation Data Type float |  |
| primitive Implementation Data Type double |  |
| primitive Implementation Data Type bool |  |

### 41. Deleted 规范 Items in 18-10
*原文标题：Deleted Specification Items in 18-10*

| Number | Heading |
|---|---|
| SwBaseType sint8 |  |
| Platform specific settings in SwBaseType sint8 |  |
| SwBaseType sint16 |  |
| Platform specific settings in SwBaseType sint16 |  |
| SwBaseType sint32 |  |
| Platform specific settings in SwBaseType sint32 |  |
| SwBaseType sint64 |  |
| Platform specific settings in SwBaseType sint64 |  |
| primitive Implementation Data Type sint8_least |  |
| SwBaseType sint8_least |  |
| Platform specific settings in SwBaseType sint8_least |  |
| primitive Implementation Data Type sint16_least |  |
| SwBaseType sint16_least |  |
| Platform specific settings in SwBaseType sint16_least |  |
| primitive Implementation Data Type sint32_least |  |
| SwBaseType sint32_least |  |
| Platform specific settings in SwBaseType sint32_least |  |
| SwBaseType uint8 |  |
| Platform specific settings in SwBaseType uint8 |  |
| SwBaseType uint16 |  |
| Platform specific settings in SwBaseType uint16 |  |
| SwBaseType uint32 |  |
| Platform specific settings in SwBaseType uint32 |  |
| SwBaseType uint64 |  |
| Platform specific settings in SwBaseType uint64 |  |
| primitive Implementation Data Type uint8_least |  |
| SwBaseType uint8_least |  |
| Platform specific settings in SwBaseType uint8_least |  |
| primitive Implementation Data Type uint16_least |  |
| SwBaseType uint16_least |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Constraint and 规范 Item History of this document according to AUTOSAR Release 19-03
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release 19-03*

### 43. Added 规范 Items in 19-03
*原文标题：Added Specification Items in 19-03*

none

### 44. Changed 规范 Items in 19-03
*原文标题：Changed Specification Items in 19-03*

none

### 45. Deleted 规范 Items in 19-03
*原文标题：Deleted Specification Items in 19-03*

none

### 46. Constraint and 规范 Item History of this document according to AUTOSAR R19-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR R19-11*

### 47. Added 规范 Items in R19-11
*原文标题：Added Specification Items in R19-11*

none

### 48. Changed 规范 Items in R19-11
*原文标题：Changed Specification Items in R19-11*

none

### 49. Deleted 规范 Items in R19-11
*原文标题：Deleted Specification Items in R19-11*

none

### 50. Constraint and 规范 Item History of this document according to AUTOSAR R20-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR R20-11*

### 51. Added 规范 Items in R20-11
*原文标题：Added Specification Items in R20-11*

none

### 52. Changed 规范 Items in R20-11
*原文标题：Changed Specification Items in R20-11*

none

### 53. Deleted 规范 Items in R20-11
*原文标题：Deleted Specification Items in R20-11*

none

### 54. Constraint and 规范 Item History of this document according to AUTOSAR R21-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR R21-11*

### 55. Added 规范 Items in R21-11
*原文标题：Added Specification Items in R21-11*

none

### 56. Changed 规范 Items in R21-11
*原文标题：Changed Specification Items in R21-11*

none

### 57. Deleted 规范 Items in R21-11
*原文标题：Deleted Specification Items in R21-11*

none

### 58. Constraint and 规范 Item History of this document according to AUTOSAR R22-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR R22-11*

### 59. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

none

### 60. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

none

### 61. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

none

### 62. Constraint and 规范 Item History of this document according to AUTOSAR R23-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR R23-11*

### 63. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 64. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

none

### 65. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 66. Constraint and 规范 Item History of this document according to AUTOSAR R24-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR R24-11*

### 67. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 68. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 69. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 70. Constraint and 规范 Item History of this document according to AUTOSAR R25-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR R25-11*

### 71. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 72. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 73. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none
