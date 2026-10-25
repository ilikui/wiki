# Specification of COM Based Transformer (`COMBasedTransformer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 662 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_COMBasedTransformer_662\AUTOSAR_CP_SWS_COMBasedTransformer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_COMBasedTransformer_662\AUTOSAR_CP_SWS_COMBasedTransformer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_COMBasedTransformer_662\zzgen\CP_SWS_COMBasedTransformer.complete.txt`

## 文档简介

The transformer feature provides functionality to chain arbitrary transformers when sending and receiving data in the RTE. The COM Based Transformer provides this functionality when the target bus system uses a fixed communication matrix with packed data representations.

## 模块依赖

The AUTOSAR RTE  has to exist to execute the COM Based Transformer.

The AUTOSAR COM configuration  of the data handled by the COM Based Transformer has to exists in order to allow the configuration of the COM Based Transformer.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The transformer feature provides functionality to chain arbitrary transformers when sending and receiving data in the RTE. The COM Based Transformer provides this functionality when the target bus system uses a fixed communication matrix with packed data representations.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

No specific terms have been introduced additionally to those already defined in .

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. Related standards and norms

Not applicable.

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Transformers , which is also valid for COM Based Transformer.

Thus, the specification SWS Transformer General shall be considered as additional and required specification for COM Based Transformer.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

For the COM Based Transformer all general transformer limitations (see ) apply.

Additionally the following restrictions apply for the COM Based Transformer:

  Upstream requirements:
⌈
The COM Based Transformer does not support Client-Server communication.
⌋

  Upstream requirements:
⌈
The COM Based Transformer does not support external trigger communication.
⌋

  Upstream requirements:
⌈
The COM Based Transformer only supports composite data types (i.e. Signal Groups from COM).
⌋

If the use-case occurs that a single primitive data element shall be handled by the COM Based Transformer (because there shall be a E2E protection performed after the serialization) the data element shall be wrapped in a structure. The structure would then just contain one entry, the signal group on COM level would also have the E2E parts included.

  Upstream requirements:
⌈
The COM Based Transformer only supports fix sized data types.
⌋

  Upstream requirements:
⌈
The COM Based Transformer only supports signal groups which are byte aligned.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The COM Based Transformer can be used for all domain applications when a fixed communication matrix is used.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The AUTOSAR RTE  has to exist to execute the COM Based Transformer.

The AUTOSAR COM configuration  of the data handled by the COM Based Transformer has to exists in order to allow the configuration of the COM Based Transformer.

### 11. 文件结构
*原文标题：File structure*

### 12. 代码文件结构
*原文标题：Code file structure*

The source code file structure is defined in the .

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following table references the features specified in  and  and links to the fulfillments of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| Classification of development errors |  |  |
| Each module shall provide version information |  |  |
| BSW Modules shall support post-build configuration |  |  |
| AUTOSAR Basic Software Modules shall apply a naming rule for enabling/disabling the existence of API(s) |  |  |
| Naming convention for type, macro and function |  |  |
| A fixed set of transformer classes shall exist |  |  |
| A transformer shall belong to a specific transformer class |  |  |
| The COM Based Transformer shall define the serialization of atomic and structured data elements into linear arrays based on a fixed data mapping |  |  |
| The COM Based Transformer shall take its configuration from the COM module |  |  |

### 14. 功能规范
*原文标题：Functional specification*

When a SWC initiates an inter-ECU communication which is configured to be transformed, the SWC hands the data over to the RTE. The RTE executes the configured transformer chain which contains - if the configuration demands this - the COM Based Transformer.

The COM Based Transformer on the sender side serializes the data of the SWC and brings them into a uint8-array representation based on the communication matrix description. The uint8-array representation is forwarded to the COM module to be placed inside the respective IPdu. The COM module may analyze (depending on the configuration of the Transmission Mode Selection - TMS) the provided uint8-array and trigger the respective transmission mode. The IPdu is sent via the communication stack over the bus to the receiver(s).

The RTE of the receiver side executes the transformer chain in the reverse order. The COM Based Transformer of the receiver deserializes the linear data back into the original data structure. These are handed over to the receiving SWC.

From the SWC's point of view it is totally transparent whether data are transformed or not.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. the COM Based 转换器的规范
*原文标题：Specification of the COM Based Transformer*

Serialization describes the way data is represented in protocol data units (PDUs) transported over a network. For the COM Based Transformer the serialization is defined by the communication matrix using the System Template . The communication matrix information is taken over to the Ecu configuration of the COM module.

  Upstream requirements: ,
⌈
The serialization is based on the Ecu configuration of the COM module and

* the Software Components PortPrototype,
* the dataElement list defined by the respective SenderReceiverInterface,
* the SenderReceiverToSignalGroupMapping,
* and the ISignalToIPduMapping for the SystemSignalGroup.
⌋

  Upstream requirements: ,
⌈
The COM Based transformer shall only be used as the top-most transformer (first) in a transformer chain.
⌋

The COM Based Transformer serializes structured data into a linear form. Therefore it can only be used as the first transformer on the sending side and the last transformer on the receiving side.

  Upstream requirements:
⌈
The COM Based transformer defined in this document shall be used as a transformer if

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 17. Development 错误
*原文标题：Development Errors*

Definition of development errors in module ComXf
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Error code if any API service is called before the transformer module was initialized with Init or after a call to DeInit. | <MIP>_E_UNINIT | 0x01 |
| Error code if an invalid configuration set was selected | <MIP>_E_INIT_FAILED | 0x02 |
| API service called with wrong parameter | <MIP>_E_PARAM | 0x03 |
| API service called with invalid pointer | <MIP>_E_PARAM_POINTER | 0x04 |

⌋

### 18. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 19. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 20. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 21. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 22. API 规范
*原文标题：API specification*

### 23. Imported 类型
*原文标题：Imported types*

In the Module Interlink Headers file which is imported by the COM Based Transformer, all ImplementationDataTypes known to the RTE are included. Using this mechanism, the COM Based Transformer knows all data types of data which shall be transformed.

 Definition of imported datatypes of module ComXf
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 24. 类型定义
*原文标题：Type definitions*

Definition of datatype `ComXf_ConfigType`
  Upstream requirements: ,
⌈
| Name | ComXf_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | This is the type of the data structure containing the initialization data for the transformer. | < |
| Available via | ComXf.h | < |

⌋

### 25. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module ComXf.

The COM Based Transformer provides the specific interfaces generally required by .

  Upstream requirements:
⌈
The COM Based Transformer shall only provide functions for transformers where the TransformationTechnology is referenced as the first reference in the list of ordered references transformerChain from a DataTransformation to a TransformationTechnology.
⌋

That means, only the first transformer in a transformer chain can be a COM Based Transformer because serializer transformer are in general only allowed to be the first transformer in a chain.

### 26. ComXf_<transformerId>

Definition of API function ComXf_<transformerId>
  Upstream requirements:
⌈
| Service Name | ComXf_<transformerId> | < |
|---|---|---|
| Syntax | uint8 ComXf_<transformerId> ( |  |

  uint8* buffer,
  uint32* bufferLength,
  <paramtype> dataElement
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | dataElement | Data element which shall be transformed |
| Parameters (inout) | None | < |
| Parameters (out) | buffer | Buffer allocated by the RTE, where the transformed data has to be stored by the transformer |
| ^ | bufferLength | Used length of the buffer |
| Return value | uint8 | 0x00 (E_OK): Serialization successful 0x81 (E_SER_GENERIC_ERROR): A generic error occurred |
| Description | This function transforms a Sender/Receiver communication using the serialization of COM Based Transformer. It takes the data element as input and outputs a uint8 array containing the serialized data. | < |
| Available via | ComXf.h | < |

⌋

where

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. ComXf_Inv_<transformerId>

Definition of API function `ComXf_Inv_`<transformerId>
  Upstream requirements:
⌈
| Service Name | ComXf_Inv_<transformerId> | < |
|---|---|---|
| Syntax | uint8 ComXf_Inv_<transformerId> ( |  |

  const uint8* buffer,
  uint32 bufferLength,
  <type>* dataElement
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | buffer | Buffer allocated by the RTE, where the still serialized data are stored by the Rte |
| ^ | bufferLength | Used length of the buffer |
| Parameters (inout) | dataElement | Data element which is the result of the transformation and contains the deserialized data element |
| Parameters (out) | None | < |
| Return value | uint8 | 0x00 (E_OK): Serialization successful 0x01 (E_NO_DATA): No data available which can be deserialized 0x81 (E_SER_GENERIC_ERROR): A generic error occurred |
| Description | This function deserializes a Sender/Receiver communication using the deserialization of COM Based Transformer. It takes the uint8 array containing the serialized data as input and outputs the original data element which will be passed to the Rte. | < |
| Available via | ComXf.h | < |

⌋

where

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. ComXf_Init

Definition of API function `ComXf_Init`
  Upstream requirements:
⌈
| Service Name | ComXf_Init | < |
|---|---|---|
| Syntax | void ComXf_Init ( |  |

  const `ComXf_ConfigType`* config
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | config | Pointer to the transformer's configuration data. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This service initializes the transformer for the further processing. | < |
| Available via | ComXf.h | < |

⌋

### 29. ComXf_DeInit

Definition of API function `ComXf_DeInit`
  Upstream requirements:
⌈
| Service Name | ComXf_DeInit | < |
|---|---|---|
| Syntax | void ComXf_DeInit ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This service deinitializes the transformer. | < |
| Available via | ComXf.h | < |

⌋

### 30. Scheduled functions

These functions are directly called by Basic Software Scheduler. The following functions shall have no return value and no parameter. All functions shall be non reentrant.

COM Based Transformer has no scheduled functions.

### 31. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 32. Mandatory 接口
*原文标题：Mandatory interfaces*

This section defines all interfaces, which are required to fulfill the core functionality of the module.

COM Based Transformer has no mandatory interfaces.

### 33. Optional 接口
*原文标题：Optional interfaces*

This section defines all interfaces, which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module ComXf
  Upstream requirements:
⌈
| API Function | Header File | Description |
|---|---|---|
| Dem_SetEventStatus | Dem.h | Called by SW-Cs or BSW modules to report monitor status information to the Dem. BSW modules calling Dem_SetEventStatus can safely ignore the return value. This API will be available only if ({Dem/DemConfigSet/DemEventParameter/DemEventReportingType} == STANDARD_REPORTING) |

⌋

### 34. Callout 接口
*原文标题：Callout interfaces*

COM Based Transformer has no callout interfaces.

### 35. Configurable 接口
*原文标题：Configurable interfaces*

In this section, all interfaces are listed where the target function could be configured. The target function is usually a callback function. The names of this kind of interfaces are not fixed because they are configurable.

COM Based Transformer has no configurable interfaces.

### 36. 服务接口
*原文标题：Service Interfaces*

The COM Based Transformer has no service interfaces.

### 37. 时序图
*原文标题：Sequence diagrams*

There are no sequence diagrams applicable to COM Based Transformer.

### 38. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification Chapter  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave Chapter  in the specification to guarantee comprehension.

Chapter  specifies the structure (containers) and the parameters of the module COM Based Transformer.

Chapter  specifies published information of the module ComXf.

### 39. How to read this chapter

For details refer to .

### 40. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters describe Chapter  and Chapter .

  Upstream requirements:
⌈
The COM Based Transformer is configured based on the COM module configuration .
⌋

Still, there is an EcuC necessary to map the implementation of the transformer. The EcuC defined in  shall be used.

  Upstream requirements:
⌈
The vendor specific module definition of the COM Based Transformer - based on the Xfrm configuration  - may be extended by the vendor to support the close interaction with the Com module .
⌋

  Upstream requirements:
⌈
The COM Based Transformer shall be configured to be postBuild when the configuration of the Com module  is postBuild for the respective ComSignalGroups.
⌋

  Upstream requirements: ,
⌈
The apiServicePrefix of the COM Based Transformer's EcuC shall be set to ComXf.
⌋

### 41. 发布信息
*原文标题：Published Information*

For details refer to .

### 42. 附录
*原文标题：Appendix*

### 43. 不适用需求
*原文标题：Not applicable requirements*

Requirements non-applicable to this Specification
  Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
These requirements are not applicable to this specification.
⌋

### 44. Referenced Meta Classes

For the sake of completeness, this chapter contains a set of class tables representing meta-classes mentioned in the context of this document but which are not contained directly in the scope of describing specific meta-model semantics.

| Class | DataTransformation | < | < | < |
|---|---|---|---|---|
| Note | A DataTransformation represents a transformer chain. It is an ordered list of transformers. | < | < | < |
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | DataTransformationSet.dataTransformation | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| dataTransformationKind | DataTransformationKindEnum | 0..1 | attr | This attribute controls the kind of DataTransformation to be applied. |
| executeDespiteDataUnavailability | Boolean | 0..1 | attr | Specifies whether the transformer chain is executed even if no input data are available. |
| transformerChain (ordered) | TransformationTechnology | * | ref | This attribute represents the definition of a chain of transformers that are supposed to be executed according to the order of being referenced from DataTransformation. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. History of Constraints and 规范 Items
*原文标题：History of Constraints and Specification Items*

### 46. Constraint History of this Document according to AUTOSAR R4.2.1

Initial document release.

### 47. Constraint History of this Document according to AUTOSAR R4.2.2

### 48. Added 规范 Items in 4.2.2
*原文标题：Added Specification Items in 4.2.2*

### 49. Changed 规范 Items in 4.2.2
*原文标题：Changed Specification Items in 4.2.2*

### 50. Deleted 规范 Items in 4.2.2
*原文标题：Deleted Specification Items in 4.2.2*

none

### 51. Constraint History of this Document according to AUTOSAR R4.3.0

### 52. Added 规范 Items in 4.3.0
*原文标题：Added Specification Items in 4.3.0*

### 53. Changed 规范 Items in 4.3.0
*原文标题：Changed Specification Items in 4.3.0*

### 54. Deleted 规范 Items in 4.3.0
*原文标题：Deleted Specification Items in 4.3.0*

none

### 55. Constraint History of this Document according to AUTOSAR R4.3.1

### 56. Added 规范 Items in 4.3.1
*原文标题：Added Specification Items in 4.3.1*

### 57. Changed 规范 Items in 4.3.1
*原文标题：Changed Specification Items in 4.3.1*

### 58. Deleted 规范 Items in 4.3.1
*原文标题：Deleted Specification Items in 4.3.1*

none

### 59. Constraint History of this Document according to AUTOSAR R4.4.0

### 60. Added 规范 Items in 4.4.0
*原文标题：Added Specification Items in 4.4.0*

none

### 61. Changed 规范 Items in 4.4.0
*原文标题：Changed Specification Items in 4.4.0*

### 62. Deleted 规范 Items in 4.4.0
*原文标题：Deleted Specification Items in 4.4.0*

### 63. Constraint History of this Document according to AUTOSAR R19-11

### 64. Added 规范 Items in 19-11
*原文标题：Added Specification Items in 19-11*

none

### 65. Changed 规范 Items in 19-11
*原文标题：Changed Specification Items in 19-11*

none

### 66. Deleted 规范 Items in 19-11
*原文标题：Deleted Specification Items in 19-11*

none

### 67. Constraint History of this Document according to AUTOSAR R20-11

### 68. Added 规范 Items in R20-11
*原文标题：Added Specification Items in R20-11*

none

### 69. Changed 规范 Items in R20-11
*原文标题：Changed Specification Items in R20-11*

none

### 70. Deleted 规范 Items in R20-11
*原文标题：Deleted Specification Items in R20-11*

none

### 71. Constraint History of this Document according to AUTOSAR R21-11

### 72. Added 规范 Items in R21-11
*原文标题：Added Specification Items in R21-11*

### 73. Changed 规范 Items in R21-11
*原文标题：Changed Specification Items in R21-11*

none

### 74. Deleted 规范 Items in R21-11
*原文标题：Deleted Specification Items in R21-11*

none

### 75. Constraint History of this Document according to AUTOSAR R22-11

### 76. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

none

### 77. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

none

### 78. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

none

### 79. Constraint History of this Document according to AUTOSAR R23-11

### 80. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 81. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

none

### 82. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 83. Constraint History of this Document according to AUTOSAR R24-11

### 84. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

| Number | Heading |
|---|---|
| Definition of imported datatypes of module ComXf |  |

### 85. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

| Number | Heading |
|---|---|
| Definition of API function ComXf_Init |  |
| Definition of API function ComXf_DeInit |  |

### 86. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

| Number | Heading |
|---|---|
| Definition of EcucForeignReferenceDef ComSystemTemplateSignalGroupRef |  |
| Definition of EcucForeignReferenceDef ComSystemTemplateSystemSignalRef |  |
| Definition of EcucIntegerParamDef ComTxIPduUnusedAreasDefault |  |
| Definition of EcucEnumerationParamDef ComIPduSignalProcessing |  |
| Definition of EcucEnumerationParamDef ComSignalType |  |
| Definition of EcucEnumerationParamDef ComSignalEndianness |  |
| Definition of EcucIntegerParamDef ComBitSize |  |
| Definition of EcucIntegerParamDef ComHandleId |  |
| Definition of EcucStringParamDef ComSignalInitValue |  |
| Definition of EcucIntegerParamDef ComIPduHandleId |  |
| Definition of EcucFloatParamDef ComMinimumDelayTime |  |
| Definition of EcucReferenceDef ComIPduGroupRef |  |
| Definition of EcucIntegerParamDef ComBitPosition |  |
| Definition of EcucParamConfContainerDef ComIPdu |  |
| Definition of EcucParamConfContainerDef ComSignalGroup |  |
| Definition of EcucFunctionNameDef ComIPduCallout |  |
| Definition of EcucStringParamDef ComSignalDataInvalidValue |  |
| Definition of EcucIntegerParamDef ComSignalLength |  |
| Definition of EcucEnumerationParamDef ComIPduDirection |  |
| Definition of EcucParamConfContainerDef ComTxIPdu |  |
| Definition of EcucReferenceDef ComIPdu |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 87. Constraint History of this Document according to AUTOSAR R25-11

### 88. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

| Number | Heading |
|---|---|
| Definition of optional interfaces requested by module ComXf |  |

### 89. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|
| Definition of API function ComXf_Inv_<transformerId> |  |
| Definition of imported datatypes of module ComXf |  |

### 90. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 91. Constraint History of this Document according to AUTOSAR R26-11

### 92. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 93. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

| Number | Heading |
|---|---|
| Definition of development errors in module ComXf |  |
| Definition of imported datatypes of module ComXf |  |

### 94. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

| Number | Heading |
|---|---|
| Definition of API function ComXf_GetVersionInfo |  |
