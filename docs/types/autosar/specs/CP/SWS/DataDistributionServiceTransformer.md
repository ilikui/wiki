# Specification of Data Distribution Service Transformer (`DataDistributionServiceTransformer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1140 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_DataDistributionServiceTransformer_1140\AUTOSAR_CP_SWS_DataDistributionServiceTransformer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_DataDistributionServiceTransformer_1140\AUTOSAR_CP_SWS_DataDistributionServiceTransformer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_DataDistributionServiceTransformer_1140\zzgen\CP_SWS_DataDistributionServiceTransformer.complete.txt`

## 文档简介

This specification describes the functionality, API, and the configuration of Data Distribution Service Transformer in the context of AUTOSAR Classic Platform.

The role of the DDS Transformer is to copy input data elements (VariableDataPrototype) and operations (ClientServerOperations) from the application layer into a buffer provided by the RTE. And vice versa, the DDS transformer has to copy received data to data elements of the buffer provided by the application.

Those procedures are referred in this document as Marshalling and Unmarshalling of VariableDataPrototypes and ClientServerOperations.

DDS Transformer is stateless, no status information needs to be stored.

The DDS Transformer, unlike SOME/IP , does not implement a network protocol. Its role is to encode and decode the information exchanged between the RTE and the Dds via a buffer, within the same ECU (see ).

## 模块依赖

The AUTOSAR RTE  has to exist to execute the transformer.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

None.

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API, and the configuration of Data Distribution Service Transformer in the context of AUTOSAR Classic Platform.

The role of the DDS Transformer is to copy input data elements (VariableDataPrototype) and operations (ClientServerOperations) from the application layer into a buffer provided by the RTE. And vice versa, the DDS transformer has to copy received data to data elements of the buffer provided by the application.

Those procedures are referred in this document as Marshalling and Unmarshalling of VariableDataPrototypes and ClientServerOperations.

DDS Transformer is stateless, no status information needs to be stored.

The DDS Transformer, unlike SOME/IP , does not implement a network protocol. Its role is to encode and decode the information exchanged between the RTE and the Dds via a buffer, within the same ECU (see ).

### 3. Acronyms, Abbreviations and 定义
*原文标题：Acronyms, Abbreviations and Definitions*

The glossary below includes acronyms, abbreviations and definitions relevant to the DDS Transformer module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Dds | Data Distribution Service Basic software module (i.e the DDS middleware implementation in AUTOSAR CP) |
| DdsXf | Data Distribution Service Transformer, DDS Transformer |

| Definition: | Description: |
|---|---|
| TransactionHandle | See SWS_Rte_08732 in |

### 4. 相关文档
*原文标题：Related documentation*

### 5. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 6. 约束与假设
*原文标题：Constraints and assumptions*

The DDS Transformer can be used for all domain applications when SenderReceiverInterface or ClientServerInterface communication is used.

TriggerInterface typed data structure consists of an ISignal with length equal to zero and DdsXf provides an infrastructure header only for ClientServerInterface. For this reason, DDS Transformer does not support the TriggerInterface and `DdsXf_ExtractProtocolHeaderFields` function.

### 7. 限制
*原文标题：Limitations*

For the DDS Transformer all general transformer limitations  apply.

### 8. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The AUTOSAR RTE  has to exist to execute the transformer.

### 9. 文件结构
*原文标题：File structure*

The source code file structure is defined in the .

### 10. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and in  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| Classification of development errors |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The Basic Software Module specifications shall specify which other configuration files from other modules they use at least in the description |  |  |
| List possible error notifications |  |  |
| Parameters shall have a type |  |  |
| BSW Modules shall support post-build configuration |  |  |
| Software which is not part of the SW-C shall report error events only after the Dem is fully operational. |  |  |
| Pre-de-bouncing of error status information is done within the Dem |  |  |
| Modules should have separate main processing functions for read/receive and write/transmit data path |  |  |
| All Standardized Autosar Interfaces shall have unique requirement Id / number |  |  |
| Input parameters of scalar and enum types shall be passed as a value. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能规范
*原文标题：Functional specification*

shows the AUTOSAR Classic Platform communication stack where the DDS Transformer is used together with the Dds in a ClientServerInterface application example on server side.

When a SW-C initiates an inter-ECU communication which is configured to be transformed, the SW-C hands the data over to the RTE. The RTE executes the configured transformer chain which contains the DDS Transformer.

First, the RTE executes the application sample through DdsXf, which creates a copy of the SW-C data (note: the data is copied into a memory buffer provided by the RTE) and sends it as a PDU to Dds. Subsequently, Dds extracts the data from the PDU, serializes it, and packages it into one or more DDS-RTPS message PDUs. Finally, the PDU is sent to the network stack (SoAd, TcpIp, etc.).

The DDS Transformer on the receiver side copies the data back from the received PDU into the original data structure in a symmetrical way. These are handed over to the receiving SW-C. From the SW-C's point of view, it is totally transparent whether data are transformed or not. It provides also a subset of the transformer errors specified for this transformer class and supports only out-of-place buffer handling.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 转换器 infrastructure header
*原文标题：Transformer infrastructure header*

DDS Transformer infrastructure header parameters are additional information the DDS Transformer adds into the provided buffer in ClientServerInterface context only.

This information is used by the Dds to support the Request-Response Method feature implemented by the DDS middleware as described in .

 Infrastructure header definition
  Upstream requirements:
⌈
DdsXf infrastructure header shall be defined as follow:

* requestId

  * clientId
  * sequenceCounter
* reserved
* returnValue
⌋

 reserved parameter of infrastructure header
⌈
The reserved parameter of the infrastructure header data structure shall be set to 0.
⌋

The complete memory layout of the transformed buffer is showed in .

### 13. Marshalling of Parameters and 数据 Structures
*原文标题：Marshalling of Parameters and Data Structures*

Marshalling of primitive data types
  Upstream requirements:
⌈
The DdsXf shall perform a raw copy of the source AUTOSAR primitive data types into the provided memory buffer.
⌋

 Marshalling of ImplementationDataType of category ARRAY
  Upstream requirements:
⌈
The DdsXf shall perform a raw copy of the source ImplementationDataType of category ARRAY into the provided memory buffer.
⌋

 Marshalling of ImplementationDataType of category STRUCTURE
  Upstream requirements:
⌈
The DdsXf shall perform a raw copy of the source ImplementationDataType of category STRUCTURE into the provided memory buffer.
⌋

 Marshalling of ImplementationDataType of category `TYPE_REFERENCE`
  Upstream requirements:
⌈
The DdsXf shall perform a raw copy of the source ImplementationDataType of category `TYPE_REFERENCE` into the provided memory buffer.
⌋

Note. Data type defined according to  is also referred as "Redefinition Implementation Data Type" as stated by .

 Marshalling of UNION data type
⌈
ImplementationDataType of category UNION is not managed by the Dds Transformer. The DDS Transformer BSW configuration validation shall fail in case a data type is typed with ImplementationDataType containing a union.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Unmarshalling of Parameters and 数据 Structures
*原文标题：Unmarshalling of Parameters and Data Structures*

Unmarshalling of primitive data types
  Upstream requirements:
⌈
The DdsXf shall retrieve an AUTOSAR primitive data type from a source memory buffer representing the same AUTOSAR primitive data type created according to
⌋

 Unmarshalling of ImplementationDataType of category ARRAY
  Upstream requirements:
⌈
The DdsXf shall retrieve an ImplementationDataType of category ARRAY from a source memory buffer created according to
⌋

 Unmarshalling of ImplementationDataType of category STRUCTURE
  Upstream requirements:
⌈
The DdsXf shall retrieve an ImplementationDataType of category STRUCTURE from a source buffer memory created according to
⌋

 Unmarshalling of ImplementationDataType of category `TYPE_REFERENCE`
  Upstream requirements:
⌈
The DdsXf shall retrieve an ImplementationDataType of category `TYPE_REFERENCE` from a source memory buffer created according to
⌋

### 15. 错误分类
*原文标题：Error Classification*

Section "Error Handling" of the document  "General Specification of Basic Software Modules" describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 16. Development 错误
*原文标题：Development Errors*

Definition of development errors in module DdsXf
  Upstream requirements: ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Error code if any API service is called before the transformer module was initialized with Init or after a call to DeInit. | DDSXF_E_UNINIT | 0x01 |
| Error code if an invalid configuration set was selected | DDSXF_E_INIT_FAILED | 0x02 |
| API service called with wrong parameter | DDSXF_E_PARAM | 0x03 |
| API service called with invalid pointer | DDSXF_E_PARAM_POINTER | 0x04 |

⌋

### 17. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 18. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 19. Extended Production 错误
*原文标题：Extended Production Errors*

All Extended Production Errors valid for DDS Transformer are specified in

### 20. API 规范
*原文标题：API specification*

### 21. Imported 类型
*原文标题：Imported types*

There are no imported types from other modules beyond those specified in .

In the Module Interlink Headers file which is imported by the DDS Transformer, all ImplementationDataTypes known to the RTE are included. Using this mechanism, the DDS Transformer knows all data types of data which shall be transformed.

 Definition of imported datatypes of module DdsXf
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Rte | SchM_<Mip>.h | Rte_Cs_TransactionHandleType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 22. 类型定义
*原文标题：Type definitions*

Definition of datatype `DdsXf_ConfigType`
  Upstream requirements:
⌈
| Name | DdsXf_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | This is the type of the data structure containing the initialization data for the transformer. | < |
| Available via | DdsXf.h | < |

⌋

### 23. 功能定义
*原文标题：Function definitions*

The DDS Transformer provides a subset of the specific interfaces generally required by .

 DDS Transformer shall define DdsTransformationDescription
  Upstream requirements:
⌈
The DDS Transformer shall only provide functions for transformers where the TransformationTechnology aggregates a DdsTransformationDescription in the role transformationDescription.
⌋

### 24. SenderReceiverInterface API

### 25. DdsXf_<transformerId>

Definition of API function DdsXf_<transformerId>
  Upstream requirements: , , , , , , , , , , , ,
⌈
| Service Name | DdsXf_<transformerId> | < |
|---|---|---|
| Syntax | uint8 DdsXf_<transformerId> ( |  |

  uint8* buffer,
  uint32* bufferLength,
  <paramtype> dataElement
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | dataElement | Data element which shall be transformed |
| Parameters (inout) | None | < |
| Parameters (out) | buffer | Buffer allocated by the RTE, where the transformed data has to be stored by the transformer |
| ^ | bufferLength | Used length of the buffer |
| Return value | uint8 | 0x00 (E_OK): Marshalling successful |
| Description | This function transforms a Sender/Receiver communication using the marshalling procedure of Dds. It takes the data element as input and outputs a uint8 array containing the marshalled data. The length of the marshalled data shall be calculated by the transformer during runtime and returned in the OUT-parameter bufferLength. It may be smaller than the maximum buffer size used by the RTE for buffer allocation. | < |
| Available via | DdsXf.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. DdsXf_Inv_<transformerId>

Definition of API function `DdsXf_Inv_`<transformerId>
  Upstream requirements: , , , , , , , , , , , ,
⌈
| Service Name | DdsXf_Inv_<transformerId> | < |
|---|---|---|
| Syntax | uint8 DdsXf_Inv_<transformerId> ( |  |

  const uint8* buffer,
  uint32 bufferLength,
  <type>* dataElement
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | buffer | Buffer allocated by the RTE, where the still marshalled data are stored by the Rte |
| ^ | bufferLength | Used length of the buffer |
| Parameters (inout) | None | < |
| Parameters (out) | dataElement | Data element which is the result of the transformation and contains the unmarshalled data element |
| Return value | uint8 | 0x00 (E_OK): Unmarshalling successful 0x01 (E_NO_DATA): No data available which can be unmarshalled 0x89 (E_SER_MALFORMED_MESSAGE): The received message is malformed. The transformer is not able to produce an output. |
| Description | This function unmarshalls a Sender/Receiver communication using the unmarshalling procedure of Dds. It takes the uint8 array containing the marshalled data as input and outputs the original data element which will be passed to the RTE. | < |
| Available via | DdsXf.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. ClientServerInterface API

### 28. DdsXf_<transformerId>

Definition of API function DdsXf_<transformerId>
  Upstream requirements:
⌈
| Service Name | DdsXf_<transformerId> | < |
|---|---|---|
| Syntax | uint8 DdsXf_<transformerId> ( |  |

  const `Rte_Cs_TransactionHandleType`* TransactionHandle,
  uint8* buffer,
  uint32* bufferLength,
  `Std_ReturnType` returnValue,
  <paramtype> data_1,
  <paramtype> data_n
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | TransactionHandle | Transaction handle according to  (clientId and sequenceCounter) needed to differentiate between multiple requests. |
| ^ | returnValue | Return value from server side for transmission to the calling client. This argument is only available for marshallers of the response of a Client/Server communication if |

* the ClientServerOperation has at least one PossibleError

defined or

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. DdsXf_Inv_<transformerId>

Definition of API function `DdsXf_Inv_`<transformerId>
  Upstream requirements:
⌈
| Service Name | DdsXf_Inv_<transformerId> | < |
|---|---|---|
| Syntax | uint8 DdsXf_Inv_<transformerId> ( |  |

  `Rte_Cs_TransactionHandleType`* TransactionHandle,
  const uint8* buffer,
  uint32* bufferLength,
  `Std_ReturnType` returnValue,
  <type>* data_1,
  <type>* data_n
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | buffer | Buffer allocated by the RTE, where the still marshalled data are stored by the Rte |
| ^ | bufferLength | Used length of the buffer |
| Parameters (inout) | None | < |
| Parameters (out) | TransactionHandle | Transaction handle according to  (clientId and sequenceCounter) needed to differentiate between multiple requests. |
| ^ | returnValue | Return value from server side for transmission to the calling client. This argument is only available for marshallers of the response of a Client/Server communication if |

* the ClientServerOperation has at least one PossibleError

defined or

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Callback 通知
*原文标题：Callback notifications*

DDS Transformer has no callbacks functions.

### 31. Scheduled functions

DDS Transformer has no scheduled functions

### 32. Expected 接口
*原文标题：Expected interfaces*

There are no expected interfaces.

### 33. 时序图
*原文标题：Sequence diagrams*

There are no sequence diagrams.

### 34. 配置规范
*原文标题：Configuration specification*

There is no module specific configuration available to the Dds. The EcuC defined in  shall be used.

### 35. How to read this chapter

For details refer to the chapter 10.1 "Introduction to configuration specification" in .

### 36. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

This specification does not have any configuration parameters.

### 37. 发布信息
*原文标题：Published Information*

For details refer to the chapter 10.3 "Published Information" in .

### 38. 附录
*原文标题：Appendix*

### 39. 不适用需求
*原文标题：Not applicable requirements*

Not applicable requirements
  Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
This item lists all the not applicable requirements for this specification.
⌋

### 40. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include requirements that have been removed from the specification in a later version. These requirements do not appear as hyperlinks in the document.

### 41. Change History R25-11

### 42. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

### 43. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 44. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 45. Added Constraints in R25-11

### 46. Changed Constraints in R25-11

none

### 47. Deleted Constraints in R25-11

none

### 48. Change History R26-11

### 49. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 50. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

### 51. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

### 52. Added Constraints in R26-11

none

### 53. Changed Constraints in R26-11

none

### 54. Deleted Constraints in R26-11

none

### 55. Referenced Meta Classes

For the sake of completeness, this chapter contains a set of class tables representing meta-classes mentioned in the context of this document but which are not contained directly in the scope of describing specific meta-model semantics.

| Class | ClientServerInterface | < | < | < |
|---|---|---|---|---|
| Note | A client/server interface declares a number of operations that can be invoked on a server by a client. |  |  |  |

| Tags: atp.recommendedPackage=PortInterfaces | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, AtpBlueprint, AtpBlueprintable, AtpClassifier, AtpType, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, PortInterface, Referrable | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| operation | ClientServerOperation | * | aggr | ClientServerOperation(s) of this ClientServerInterface. |

Stereotypes: atpSplitable; atpVariation Tags: atp.Splitkey=operation.shortName, operation.variationPoint.shortLabel vh.latestBindingTime=blueprintDerivationTime

This Attribute is only used by the AUTOSAR Classic Platform.
| possibleError | ApplicationError | * | aggr | Application errors that are defined as part of this interface. |
|---|---|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。
