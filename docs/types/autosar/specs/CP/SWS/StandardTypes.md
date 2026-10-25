# Specification of Standard Types (`StandardTypes`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 049 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_StandardTypes_049\AUTOSAR_CP_SWS_StandardTypes.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_StandardTypes_049\AUTOSAR_CP_SWS_StandardTypes.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_StandardTypes_049\zzgen\CP_SWS_StandardTypes.complete.txt`

## 文档简介

This document specifies the AUTOSAR standard types header file. It contains all types that are used across several modules of the basic software and that are platform and compiler independent.

It is strongly recommended that those standard types files are unique within the AUTOSAR community to guarantee unique types and to avoid types changes when changing from supplier A to B.

## 模块依赖

There are no dependencies to other modules, but the standard types header requires the header of the platform types.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies the AUTOSAR standard types header file. It contains all types that are used across several modules of the basic software and that are platform and compiler independent.

It is strongly recommended that those standard types files are unique within the AUTOSAR community to guarantee unique types and to avoid types changes when changing from supplier A to B.

### 2. 缩略语
*原文标题：Acronyms and abbreviations*

All acronyms and abbreviations of this specification are contained in the AUTOSAR glossary .

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Standard Types.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Standard Types.

Further specification:

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No limitations.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

Many symbols defined in this specification (like OK, `NOT_OK`, ON, OFF) are already defined and used within legacy software. These conflicts ('redefinition of existing symbol') are expected, but neglected, because of the following reasons:

AUTOSAR has to maintain network compatibility with legacy ECUs, but no software architecture compatibility with legacy software. Many types are defined and used exactly in the same way that legacy software does. Legacy software can keep on using the symbols, only the definitions have to be removed and taken from this file instead.

### 9. 软件架构
*原文标题：Software Architecture*

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

There are no dependencies to other modules, but the standard types header requires the header of the platform types.

### 11. 文件结构
*原文标题：File structure*

The include structures differ between BSW modules which are part of the COM-stack and other modules. BSW modules which are considered part of the COM stack shall include the `ComStack_Types`.h other modules shall include `Std_Types`.h

As the types of `Std_Types`.h are based on `Platform_Types`.h, it includes this header to be self contained.

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in SRS BSW General  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| The AUTOSAR Basic Software shall provide a microcontroller abstraction layer which provides a standardized interface to higher software layers |  |  |
| Data types naming convention |  |  |
| All AUTOSAR standard types and constants shall be placed and organized in a standard type header file |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| Naming convention for type, macro and function |  |  |
| Null pointer errors shall follow a naming rule |  |  |
| A transformer shall provide fixed interfaces |  |  |
| A transformer shall support error handling |  |  |
| A transformer shall specify its output format |  |  |
| A fixed set of transformer classes shall exist |  |  |
| Each transformer class shall provide a fixed set of abstract errors |  |  |
| A transformer shall belong to a speci |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能规范
*原文标题：Functional specification*

### 14. 通用 issues
*原文标题：General issues*

Upstream requirements:
⌈
It is not allowed to add any project or supplier specific extension to this file. Any extension invalidates the AUTOSAR conformity.
⌋

### 15. 错误分类
*原文标题：Error Classification*

The Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

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

### 20. API 规范
*原文标题：API specification*

### 21. 类型定义
*原文标题：Type definitions*

### 22. Std_ReturnType

Definition of datatype `Std_ReturnType`
  Upstream requirements:
⌈
| Name | Std_ReturnType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | E_OK | 0 | see |
| ^ | E_NOT_OK | 1 | see |
| ^ | 0x02-0x3F | 2 | Available to user specific errors |
| Description | This type can be used as standard API return type which is shared between the RTE and the BSW modules. It shall be defined as follows: |  |  |

| typedef uint8 Std_ReturnType; | < | < |  |
|---|---|---|---|
| Available via | Std_Types.h | < | < |

⌋

  Upstream requirements: ,
⌈
The `Std_ReturnType` shall normally be used with value E_OK or E_NOT_OK. If those return values are not sufficient user specific values can be defined by using the 6 least specific bits.

For the naming of the user defined values the module prefix shall be used as requested in `SRS_BSW_00441`

Layout of the `Std_ReturnType` shall be as stated in the RTE specification. Bit 7 and Bit 8 are reserved and defined by the RTE specification.
⌋

### 23. Std_TransformerError

The data type `Std_TransformerError` is a struct which contains the error code and the transformer class to which the error belongs.

The data type `Std_TransformerError` shall be defined as follows:

 Definition of datatype `Std_TransformerError`
  Upstream requirements:
⌈
| Name | Std_TransformerError | < |
|---|---|---|
| Kind | Structure | < |
| Elements | errorCode | < |
| ^ | Type | Std_TransformerErrorCode |
| ^ | Comment | The specific meaning of the values of Std_TransformerErrorCode is to be seen for the specific transformer chain for which the data type represents the transformer error. |
| ^ | transformerClass | < |
| ^ | Type | Std_TransformerClass |
| ^ | Comment | - |
| Description | Std_TransformerError represents a transformer error in the context of a certain transformer chain. | < |
| Available via | Std_Types.h | < |

⌋

The values are specified for each transformer class in .

 Definition of datatype `Std_TransformerErrorCode`
  Upstream requirements: ,
⌈
| Name | Std_TransformerErrorCode | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | - | - | The values are specified for each transformer class in ASWS_TransformerGeneral. |
| Description | The type of the Std_TransformerError. | < | < |
| Available via | Std_Types.h | < | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Std_TransformerForwardCode

The data type `Std_TransformerForwardCode` represents a forwarded transformer code in the context of a certain transformer chain (see ).

The specific meaning of the values of `Std_TransformerForwardCode` is always to be seen for the specific transformer chain for which the data type represents the transformer status.

The underlying data type of the type `Std_TransformerForwardCode` shall be uint8:

 Definition of datatype `Std_TransformerForwardCode`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | Std_TransformerForwardCode (draft) | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | STD_E_FORWARDCODE_OK | 0x00 | No specific error to be injected. |
| ^ | STD_E_FORWARDCODE_STATUS_REP | 0x01 | Repeat the last used sequence number. |
| ^ | STD_E_FORWARDCODE_STATUS_SEQ | 0x02 | Generate a deliberately wrong CRC. |
| ^ | STD_E_FORWARDCODE_STATUS_ERR | 0x03 | Use a wrong sequence number. |
| Description | - |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | Std_Types.h | < | < |

⌋

### 25. Std_MessageTypeType

Definition of datatype `Std_MessageTypeType`
  Upstream requirements:
⌈
| Name | Std_MessageTypeType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | STD_MESSAGETYPE_REQUEST | 0x00 | Message type for a request message |
| ^ | STD_MESSAGETYPE_RESPONSE | 0x01 | Message type for a response message |
| ^ | 0x02-0x3F | 0x02 | reserverd for future message type |
| Description | This type is used to encode the different type of messages. - Currently this encoding is limited to the distinction between requests and responses in C/S communication. | < | < |
| Available via | Std_Types.h | < | < |

⌋

  Upstream requirements:
⌈
The `Std_MessageTypeType` shall be used ot encode the different types of messages exchanged in AUTOSAR. - Currently this encoding is limited to the distinction between requests and responses in C/S communication.
⌋

Note: In future AUTOSAR release, the literals for this type may be extended with additional message types.

### 26. Std_MessageResultType

Definition of datatype `Std_MessageResultType`
  Upstream requirements:
⌈
| Name | Std_MessageResultType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | STD_MESSAGERESULT_OK | 0x00 | STD_MESSAGERESULT_OK |
| ^ | STD_MESSAGERESULT_ERROR | 0x01 | Messageresult for an ERROR response |
| ^ | 0x02-0x3F | 0x02 | reserverd for future message results |
| Description | This type is used to encode different types of results for response messages. - Currently this encoding is limited to the distinction between OK and ERROR responses. | < | < |
| Available via | Std_Types.h | < | < |

⌋

  Upstream requirements:
⌈
The `Std_MessageResultType` shall be used ot encode the different types of results for response messages. - Currently this encoding is limited to the distinction between OK and ERROR responses.
⌋

Note: In future AUTOSAR release, the literals for this type may be extended with additional result types.

### 27. Std_ExtractProtocolHeaderFieldsType

Definition of datatype `Std_ExtractProtocolHeaderFieldsType`
  Upstream requirements:
⌈
| Name | Std_ExtractProtocolHeaderFieldsType | < |
|---|---|---|
| Kind | Function Pointer | < |
| Syntax | Std_ReturnType (*Std_ExtractProtocolHeaderFieldsType) ( |  |

  const uint8* buffer,
  uint32 bufferLength,
  `Std_MessageTypeType`* messageType,
  `Std_MessageResultType`* messageResult
| ) | < |  |
|---|---|---|
| Parameters (in) | buffer | Buffer allocated by the RTE, where the transformed data has to be stored by the transformer |
| ^ | bufferLength | Length of the buffer |
| Parameters (inout) | None | < |
| Parameters (out) | messageType | Canonical representation of the message type (extracted from the transformers protocol header). |
| ^ | messageResult | Canonical representation of the message result type (extracted from the transformers protocol header). |
| Return value | Std_ReturnType | - |
| Description | Type for the function pointer to extract the relevant protocol header fields of the message and the type of the message result of a transformer. - At the time being, this is limited to the types used for C/S communication (i.e., REQUEST and RESPONSE and OK and ERROR). | < |
| Available via | Std_Types.h | < |

⌋

### 28. Symbol 定义
*原文标题：Symbol definitions*

### 29. E_OK, E_NOT_OK

Definition of datatype E_OK, E_NOT_OK
  Upstream requirements:
⌈
| Name | E_OK, E_NOT_OK | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | E_OK | 0x00u | - |
| ^ | E_NOT_OK | 0x01u | - |
| Description | Because E_OK is already defined within OSEK, the symbol E_OK has to be shared. To avoid name clashes and redefinition problems, the symbols have to be defined in the following way (approved within implementation): |  |  |

#ifndef STATUSTYPEDEFINED #define STATUSTYPEDEFINED #define E_OK 0x00u

typedef unsigned char StatusType; /* OSEK compliance */ #endif

| #define E_NOT_OK 0x01u | < | < |  |
|---|---|---|---|
| Available via | Std_Types.h | < | < |

⌋

### 30. STD_HIGH, STD_LOW

Definition of datatype `STD_HIGH`, `STD_LOW`
  Upstream requirements:
⌈
| Name | STD_HIGH, STD_LOW | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | STD_LOW | 0x00u | - |
| ^ | STD_HIGH | 0x01u | - |
| Description | The symbols STD_HIGH and STD_LOW shall be defined as follows: |  |  |

| #define STD_HIGH 0x01u /* Physical state 5V or 3.3V */ #define STD_LOW 0x00u /* Physical state 0V */ | < | < |  |
|---|---|---|---|
| Available via | Std_Types.h | < | < |

⌋

### 31. STD_ACTIVE, STD_IDLE

Definition of datatype `STD_ACTIVE`, `STD_IDLE`
  Upstream requirements:
⌈
| Name | STD_ACTIVE, STD_IDLE | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | STD_IDLE | 0x00u | - |
| ^ | STD_ACTIVE | 0x01u | - |
| Description | The symbols STD_ACTIVE and STD_IDLE shall be defined as follows: |  |  |

| #define STD_ACTIVE 0x01u /* Logical state active */ #define STD_IDLE 0x00u /* Logical state idle */ | < | < |  |
|---|---|---|---|
| Available via | Std_Types.h | < | < |

⌋

### 32. STD_ON, STD_OFF

Definition of datatype `STD_ON`, `STD_OFF`
  Upstream requirements:
⌈
| Name | STD_ON, STD_OFF | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | STD_OFF | 0x00u | - |
| ^ | STD_ON | 0x01u | - |
| Description | The symbols STD_ON and STD_OFF shall be defined as follows: |  |  |

| #define STD_ON 0x01u #define STD_OFF 0x00u | < | < |  |
|---|---|---|---|
| Available via | Std_Types.h | < | < |

⌋

### 33. NULL_PTR

Definition of datatype `NULL_PTR`
  Upstream requirements:
⌈
| Name | NULL_PTR |
|---|---|
| Kind | Pointer |
| Type | void* |
| Description | The implementation shall provide the NULL_PTR define with a void pointer to zero definition. |

((void *)0)
| Available via | Std_Types.h |
|---|---|

⌋

### 34. 功能定义
*原文标题：Function definitions*

Not applicable.

### 35. 时序图
*原文标题：Sequence diagrams*

Not applicable.

### 36. 配置规范
*原文标题：Configuration specification*

Not applicable.

### 37. 附录
*原文标题：Appendix*

### 38. 不适用需求
*原文标题：Not applicable requirements*

Upstream requirements: , , , , , , , , , , , , , , ,
⌈
The standard types only provide a header file with types and symbols. It does not provide code nor require any other BSW module.
⌋

  Upstream requirements: , , , , , , , , , , , , , , , , , , , , ,
⌈
The standard types does not require nor has any configuration.
⌋

  Upstream requirements: , , , , , , , , , , , , , ,
⌈
The standard types does not provide any kind of error handling.
⌋

  Upstream requirements:
⌈
The standard types does not support security events.
⌋

  Upstream requirements: , , , , ,
⌈
These requirements are not applicable to this specification.
⌋

### 39. History of 需求
*原文标题：History of Requirements*

Please note that the lists in this chapter also include requirements that have been removed from the specification in a later version. These requirements do not appear as hyperlinks in the document.

### 40. Requirement History of this Document According to AUTOSAR Release R22-11

### 41. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

### 42. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

### 43. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

### 44. Requirement History of this Document According to AUTOSAR Release R23-11

### 45. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 46. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

### 47. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 48. Requirement History of this Document According to AUTOSAR Release R24-11

### 49. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 50. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 51. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 52. Requirement History of this Document According to AUTOSAR Release R25-11

### 53. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 54. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

### 55. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

### 56. Requirement History of this Document According to AUTOSAR Release R26-11

### 57. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 58. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

none

### 59. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*
