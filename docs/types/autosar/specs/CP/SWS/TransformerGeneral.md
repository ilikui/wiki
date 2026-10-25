# General Specification of Transformers (`TransformerGeneral`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 658 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_TransformerGeneral_658\AUTOSAR_CP_SWS_TransformerGeneral.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_TransformerGeneral_658\AUTOSAR_CP_SWS_TransformerGeneral.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_TransformerGeneral_658\zzgen\CP_SWS_TransformerGeneral.complete.txt`

## 文档简介

Transformer enable AUTOSAR systems to use a data transformation mechanism to linearize and transform data.

Transformers can be concatenated to transformer chains which are executed by the RTE for intra-ECU and inter-ECU communcation that is configured to be transformed.

A transformer provides well defined function signatures per each communication relation (port based and signal based), which is marked for transformation. The function signature depends on the transmitted data elements (Client/Server operation signature or Sender/Receiver interface signature) only. The output of a transformer will be always a linear byte array.

A more powerful system can chain multiple transformers where the input of the first transformer in the chain gets the data from the RTE. Each following transformer uses the output of the preceding transformer as input. All transformers following the first one then have generic signature with just a byte array as IN and OUT parameter. Such an architecture could be used to design systems, where you can flexibly add functionality like safety or security protection to a serialized stream.

## 模块依赖

There are not dependencies to AUTOSAR SWS modules.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

Transformer enable AUTOSAR systems to use a data transformation mechanism to linearize and transform data.

Transformers can be concatenated to transformer chains which are executed by the RTE for intra-ECU and inter-ECU communcation that is configured to be transformed.

A transformer provides well defined function signatures per each communication relation (port based and signal based), which is marked for transformation. The function signature depends on the transmitted data elements (Client/Server operation signature or Sender/Receiver interface signature) only. The output of a transformer will be always a linear byte array.

A more powerful system can chain multiple transformers where the input of the first transformer in the chain gets the data from the RTE. Each following transformer uses the output of the preceding transformer as input. All transformers following the first one then have generic signature with just a byte array as IN and OUT parameter. Such an architecture could be used to design systems, where you can flexibly add functionality like safety or security protection to a serialized stream.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

There are no acronyms and abbreviations relevant to this document that are not included in the .

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. Related standards and norms

Not applicable.

### 6. 相关规范
*原文标题：Related specification*

Not applicable.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

Both data transformation and communication itself are very extensive fields and can get quite complex because a lot of use cases and scenarios are theoretically possible. Because these have a big impact on the functionality of transformer (especially in the RTE), this diversity makes it necessary to impose a few restrictions and assumptions to the transformers.

If the transformation targets primarily the serialization of large complex data elements,it is most efficient when the transformation is used for communication over busses with large PDU sizes (e.g. Ethernet). If busses with small PDU size are used (e.g CAN), the byte array produced by the serializer would have to be spanned over multiple PDUs which is possible but inefficient.

Subject to transformation are the data elements (VariableDataPrototypes) of ports typed with SenderReceiverInterfaces, the operations (ClientServerOperations) of ports typed with ClientServerInterfaces and non-queued external trigger events of ports typed with TriggerInterfaces with swImplPolicy not set to queued.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

There are not dependencies to AUTOSAR SWS modules.

### 11. 文件结构
*原文标题：File structure*

### 12. 代码文件结构
*原文标题：Code file structure*

The code file structure of transformers is defined by the  as all transformers are BSW modules. Deviations are specified in the SWS documents of the specific transformers.

### 13. 头文件结构
*原文标题：Header file structure*

The header file structure of transformers is defined by the  as all transformers are BSW modules. Deviations are specified in the SWS documents of the specific transformers.

### 14. 需求追踪
*原文标题：Requirements Tracing*

The following table references the SRS requirements which are fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support post-build configuration |  |  |
| Naming convention for type, macro and function |  |  |
| Classification of extended production errors |  |  |
| Fault detection and healing of production errors and extended production errors |  |  |
| A transformer shall work on data given by the Rte |  |  |
| A transformer shall provide fixed interfaces |  |  |
| A Transformer shall support in-place and copy buffering |  |  |
| A transformer shall support error handling |  |  |
| A transformer shall be able to deal with more data than expected |  |  |
| A Transformer shall support concurrent execution |  |  |
| A deserializer transformer shall support extraction of data |  |  |
| A transformer shall specify its output format |  |  |
| Each transformer class shall provide a fixed set of abstract errors |  |  |
| A transformer shall belong to a specific transformer class |  |  |

### 15. 功能规范
*原文标题：Functional Specification*

A transformers takes data from the RTE, works on them and returns the output back to the RTE. It can both serialize/linearize data (transform them from a structured into a linear form) and transform (modify or extend linear data) them (e.g add a checksum).

Transformers are BSW modules in the Communication Service Cluster which provides communication services to the RTE. The transformers are executed by the RTE when the RTE needs the service which a transformer provides.

A transformer is no library because transformers can hold an internal state but they can work as well stateless.

  Upstream requirements:
⌈
Transformers shall be stateful only, if the dedicated transformer functionality requires maintaining a transformer state.
⌋

Please note that stateful transformers cannot be used like a library.

It is possible to connect a set of transformers together into a transformer chain. The RTE coordinates the execution of the transformer chain and calls the transformers of the chain exactly in the specified order. Using that mechanism, intra-ECU and inter-ECU communcation is transformed if configured accordingly. This configuration is done in the .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Buffer 处理
*原文标题：Buffer Handling*

A transformer will usually work on the data and/or generate some protocol information which are stored in a header and/or footer of the output. Therefore it needs a place to write the result to. Transformers can work with two buffer handling modes: In-place buffer and out-of-place buffer. Which one is used is determined by the configuration in the  and influences the transformer's interface.

  Upstream requirements:
⌈
A transformer which uses in-place buffering shall use the input buffer also as output buffer. (See  and )
⌋

In this case, the transformation function takes just one buffer pointer argument

  Upstream requirements:
⌈
A transformer which uses out-of-place buffering shall work with two buffers: One for the input to the transformer and one for its output.
⌋

  Upstream requirements:
⌈
A transformer which uses out-of-place buffering shall not alter the data of the input buffer.
⌋

The Rte allocates the buffers that are used by the transformers. It calculates the needed buffer size which is needed in worst case for the output. Details for buffer computation are given in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 转换器 Classes
*原文标题：Transformer Classes*

Different kinds of transformers exist which fulfill totally different functionality. Hence the transformers are categorized into classes.

A transformer class shall contain all transformers which provide similar functionality. At most one transformer of each transformer class shall be allowed per transformer chain.

Currently, the following transformer classes are defined:

* Serializer
* Safety
* Security
* Custom

Further transformer classes might be specified in future AUTOSAR releases.

### 18. Serializer

A serializer transformer accepts complex data (either a Sender/Receiver data element or a Client/Server operation with its arguments) or no data (Trigger communication) from the RTE and provides the resulting byte array as an ISignal or part of IPdu, which is finally transmitted to the receiver by the COM stack.

  Upstream requirements:
⌈
A serializer shall take data elements (complex or atomic) and serialize them into a linear representation (byte array).
⌋

  Upstream requirements:
⌈
The serialization algorithm shall be defined for all possible complex data input.
⌋

So called "old-world" variable-size array data types are not supported by serializer transformers, only "new-world" variable-size array data types can be transformed. For details, refer to  (), ,  and .

  Upstream requirements: ,
⌈
A deserializer transformer (serializer transformer on receiver side) shall be able to return all or a subset of the deserialized data to the RTE.
⌋

### 19. Safety

A safety transformer protects the communication against unintentional modifications to ensure a safe data transmission.

  Upstream requirements:
⌈
A safety transformer shall protect the inter-ECU communication of safety related SWCs.
⌋

  Upstream requirements:
⌈
A safety transformer shall ensure the correct order of data transmissions.
⌋

  Upstream requirements:
⌈
A safety transformer shall ensure the correct content of data transmissions.
⌋

This could be done for example by adding sequence counters and checksums which fulfill the safety requirements.

### 20. Security

A security transformer protects the communication against intentional modifications to ensure security of the bus communication.

  Upstream requirements:
⌈
A security transformer shall protect the inter-ECU communication of security related SWCs.
⌋

  Upstream requirements:
⌈
A security transformer shall ensure the authenticity of data transmissions.
⌋

  Upstream requirements:
⌈
A security transformer shall ensure the integrity of data transmissions.
⌋

  Upstream requirements:
⌈
A security transformer shall ensure the freshness of data transmissions.
⌋

This could be done for example by adding sequence counters and checksums which fulfill the security requirements.

### 21. Custom

Custom transformers are not specified by AUTOSAR but can be specified by any party in the development workflow to implement a transformer which is not standardized.

Custom transformers can be implemented as CDDs.

### 22. 错误处理
*原文标题：Error Handling*

The transformers return errors to the RTE which coordinates the further execution and the notifications of errors up to the SWC.

  Upstream requirements:
⌈
Transformers shall return errors to the RTE as return codes.
⌋

The RTE decides on the return codes whether to continue the execution of the transformer chain or abort.

There exist two different kinds of transformer errors: Soft Errors and Hard Errors. If a transformer returns a soft error, the Rte continues with the execution of the transformer chain. If a transformer returns a hard error,the Rte aborts the execution of the transformer chain because the error was so severe that there are no meaningful data for the next transformer in the chain.

The value range of errors is divided:

* 0x00: Success
* 0x01 - 0x7F: Soft Errors
* 0x80 - 0xFF: Hard Errors

  Upstream requirements:
⌈
If a transformer cannot generate a valid output, it shall return a hard error.
⌋

  Upstream requirements:
⌈
If a transformer returns a hard error, it shall leave the output buffer unchanged
⌋

  Upstream requirements:
⌈
If a transformer produces an output but wants to signal warning to the SWC, it shall return a soft error.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 错误 of Serializer Transformers
*原文标题：Errors of Serializer Transformers*

Errors of serializer transformers
  Upstream requirements:
⌈
| Error Name | Error Code | Error Type | Description |
|---|---|---|---|
| E_OK | 0x00 | - | Serialization was successful. |
| E_NO_DATA | 0x01 | Soft | No data available which can be deserialized. |
| E_SER_PAYLOAD_LENGTH_EXCEEDED | 0x40 | Soft | The payload length is greater than the expected length of an array. |
| Reserved | 0x80 | Hard | This is reserved to avoid number clashes for autonomous error reactions. |
| E_SER_GENERIC_ERROR | 0x81 | Hard | A generic not precisely detailed error occured. |
| Reserved | 0x82 - 0x86 | Hard | These are reserved to be compliant with SOME/IP which defines errors with these values that don't relate to serialization and thus can't be created by a transformer. |
| E_SER_WRONG_PROTOCOL_VERSION | 0x87 | Hard | The version of the receiving transformer didn't match the sending transformer. |
| E_SER_WRONG_INTERFACE_VERSION | 0x88 | Hard | Interface version of serialized data is not supported. |
| E_SER_MALFORMED_MESSAGE | 0x89 | Hard | The received message is malformed. The transformer is not able to produce an output. |
| E_SER_WRONG_MESSAGE_TYPE | 0x8a | Hard | The received message type was not expected. |

⌋

### 24. 错误 of Safety Transformers
*原文标题：Errors of Safety Transformers*

Errors of safety transformers
  Upstream requirements:
⌈
| Error Name | Error Code | Error Type | Description |
|---|---|---|---|
| E_OK | 0x00 | - | The communication is safe. |
| E_SAFETY_VALID_REP | 0x01 | Soft | The data are valid according to safety, although data with a repeated counter were received. |
| E_SAFETY_VALID_SEQ | 0x02 | Soft | The data are valid according to safety, although a counter jump occurred. |
| E_SAFETY_VALID_ERR | 0x03 | Soft | The data are valid according to safety, although the check itself failed. |
| E_SAFETY_VALID_NND | 0x05 | Soft | Communication is valid according to safety, but no new data received. |
| E_SAFETY_NODATA_OK | 0x20 | Soft | No data are available since initialization of transformer. |
| E_SAFETY_NODATA_REP | 0x21 | Soft | No data are available since initialization of transformer because a repeated counter was received. |
| E_SAFETY_NODATA_SEQ | 0x22 | Soft | No data are available since initialization of transformer and a counter jump occurred. |
| E_SAFETY_NODATA_ERR | 0x23 | Soft | No data are available since initialization of transformer. Therefore the check failed. |
| E_SAFETY_NODATA_NND | 0x25 | Soft | No data are available since initialization of transformer. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 错误 of Security Transformers
*原文标题：Errors of Security Transformers*

Errors of security transformers
  Upstream requirements:
⌈
| Error Name | Error Code | Error Type | Description |
|---|---|---|---|
| E_OK | 0x00 | - | The communication is secure. |
| E_SEC_NOT_AUTH | 0x01 | Soft | The data was not authenticated correctly. |
| E_SEC_NOT_FRESH | 0x02 | Soft | The data was not fresh. |

⌋

### 26. 错误 of Custom Transformers
*原文标题：Errors of Custom Transformers*

Errors of custom transformers
  Upstream requirements:
⌈
| Error Name | Error Code | Error Type | Description |
|---|---|---|---|
| E_OK | 0x00 | - | No error occured. |
| 0x01 - 0x7F | Soft | A transformer specific soft error occured. |  |
| 0x80 - 0xFF | Hard | A transformer specific hard error occured. |  |

⌋

### 27. 错误分类
*原文标题：Error Classification*

### 28. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Xfrm
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Error code if any API service is called before the transformer module was initialized with Init or after a call to DeInit | <MIP>_E_UNINIT | 0x01 |
| Error code if an invalid configuration set was selected | <MIP>_E_INIT_FAILED | 0x02 |
| API service called with wrong parameter | <MIP>_E_PARAM | 0x03 |
| API service called with invalid pointer | <MIP>_E_PARAM_POINTER | 0x04 |

⌋

where MIP is the Module Implementation Prefix of the transformer as defined in  totally written in uppercase.

### 29. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 30. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 31. Extended Production 错误
*原文标题：Extended Production Errors*

This chapter list and specifies the Extended Production Errors for transformers.

### 32. XFRM_E_MALFORMED_MESSAGE

Extended Production Errors of transformer
  Upstream requirements: ,
⌈
| Error Name: | XFRM_E_MALFORMED_MESSAGE | < |
|---|---|---|
| Short Description: | Transformer not able to produce output due to malformed message content. | < |
| Long Description: | The data handed over to the transformer was malformed. The transformer was not able to produce an output based on the input because it was malformed. | < |
| Detection Criteria: | Fail | The format of the transformer's input doesn't conform to the specification of the specific transformer. |
| ^ | Pass | The format of the transformer's input conforms to the specification of the specific transformer. |
| Secondary Parameters: | N/A | < |
| Time Required: | N/A | < |
| Monitor Frequency: | On every execution of transformer. | < |

⌋

  Upstream requirements: ,
⌈
The Extended Production Error `XFRM_E_MALFORMED_MESSAGE` shall exist for every transformer which has `XFRM_E_MALFORMED_MESSAGE` set.
⌋

### 33. 错误通知
*原文标题：Error Notification*

Defined in .

### 34. API 规范
*原文标题：API specification*

### 35. Imported 类型
*原文标题：Imported types*

Upstream requirements:
⌈
A transformer shall use the ImplementationDataTypes defined by RTE in the transformer's Module Interlink Types Header file.
⌋

Module Interlink Types Header file, see .

A transformer shall further use the types defined in the following table.

 Definition of imported datatypes of module Xfrm
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Rte | SchM_<Mip>.h | Rte_Cs_TransactionHandleType |
| Std | Std_Types.h | Std_ExtractProtocolHeaderFieldsType |
| ^ | Std_Types.h | Std_MessageResultType |
| ^ | Std_Types.h | Std_MessageTypeType |
| ^ | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_TransformerForwardCode (draft) |

⌋

### 36. 类型定义
*原文标题：Type definitions*

Definition of datatype {Mip}_ConfigType
  Upstream requirements: ,
⌈
| Name | {Mip}_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | This is the type of the data structure containing the initialization data for the transformer. | < |
| Available via | <Mip>.h | < |

⌋

### 37. 功能定义
*原文标题：Function definitions*

This section defines the generic interfaces of all transformers. These are detailed by the specifications of the specific transformer modules.

  Upstream requirements:
⌈
The name pattern transformerId should be used for the APIs which belong to the BswModuleEntry referenced from a XfrmImplementationMapping:

* Com_<ComSignalName> if no XfrmVariableDataPrototypeInstanceRef exists in the XfrmImplementationMapping and XfrmISignalRef is used in XfrmSignal and the data is sent/received using Com module and ComIPduLargeData of the ComIPdu containing the ComSignal of the referenced ISignal is not set to TRUE.
* Com_<ComSignalGroupName> if no XfrmVariableDataPrototypeInstanceRef exists in the XfrmImplementationMapping and XfrmISignalGroupRef is used in XfrmSignal and the data is sent/received using Com module and ComIPduLargeData of the ComIPdu containing the ComSignalGroup of the referenced ISignalGroup is not set to TRUE.
* Com_<ComIPduName> if no XfrmVariableDataPrototypeInstanceRef exists in the XfrmImplementationMapping and the data is sent/received using Com module and ComIPduLargeData of the ComIPdu is set to TRUE.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. <Mip>_ExtractProtocolHeaderFields

Definition of API function <Mip>_ExtractProtocolHeaderFields
  Upstream requirements:
⌈
| Service Name | <Mip>_ExtractProtocolHeaderFields | < |
|---|---|---|
| Syntax | Std_ReturnType <Mip>_ExtractProtocolHeaderFields ( |  |

  const uint8* buffer,
  uint32 bufferLength,
  `Std_MessageTypeType`* messageType,
  `Std_MessageResultType`* messageResult
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | buffer | Buffer allocated by the RTE, where the transformed data has to be stored by the transformer |
| ^ | bufferLength | Length of the buffer |
| Parameters (inout) | None | < |
| Parameters (out) | messageType | Canonical representation of the message type (extracted from the transformers protocol header). |
| ^ | messageResult | Canonical representation of the message result type (extracted from the transformers protocol header). |
| Return value | Std_ReturnType | E_OK: Relevant protocol header fields have been extracted successfully. E_NOT_OK: An error occurred during parsing of the protocol header. |
| Description | Function to extract the relevant protocol header fields of the message and the type of the message result of a transformer. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. <Mip>_<transformerId>

Definition of API function <Mip>_<transformerId>
  Upstream requirements:
⌈
| Service Name | <Mip>_<transformerId> | < |
|---|---|---|
| Syntax | uint8 <Mip>_<transformerId> ( |  |

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
| Return value | uint8 | 0x00 (E_OK): Transformation successful 0x01 - 0xff: Specific errors |
| Description | This function is the interface of the first transformer in a transformer chain of Sender/Receiver communication. |  |

| The length of the transformed data shall be calculated by the transformer during runtime and returned in the OUT parameter bufferLength. It may be smaller than the maximum buffer size used by the RTE for buffer allocation. | < |  |
|---|---|---|
| Available via | <Mip>.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. <Mip>_Inv_<transformerId>

Definition of API function <Mip>_Inv_<transformerId>
  Upstream requirements:
⌈
| Service Name | <Mip>_Inv_<transformerId> | < |
|---|---|---|
| Syntax | uint8 <Mip>_Inv_<transformerId> ( |  |

  const uint8* buffer,
  uint32 bufferLength,
  <type>* dataElement
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | buffer | Buffer allocated by the RTE, where the still serialized data are stored by the Rte. If executeDespiteDataUnavailability is set to true and the RTE cannot provide data as input to the transformer, it will hand over a NULL pointer to the transformer. |
| ^ | bufferLength | Used length of the buffer. If executeDespiteDataUnavailability is set to true and the RTE cannot provide data as input to the transformer, the length will be equal to 0. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. <Mip>_Init

Definition of API function <Mip>_Init
  Upstream requirements: ,
⌈
| Service Name | <Mip>_Init | < |
|---|---|---|
| Syntax | void <Mip>_Init ( |  |

  const {Mip}_ConfigType* config
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
| Available via | <Mip>.h | < |

⌋

 Variable prototype parts of
  Upstream requirements:
⌈
The function <Mip>_Init specified in  shall use the following rules to derive its variable prototype parts:

* Mip is the Module Implementation Prefix of the transformer as defined in
⌋

### 42. <Mip>_DeInit

Definition of API function <Mip>_DeInit
  Upstream requirements:
⌈
| Service Name | <Mip>_DeInit | < |
|---|---|---|
| Syntax | void <Mip>_DeInit ( |  |

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
| Available via | <Mip>.h | < |

⌋

 Variable prototype parts of
  Upstream requirements:
⌈
The function <Mip>_DeInit specified in  shall use the following rules to derive its variable prototype parts:

* Mip is the Module Implementation Prefix of the transformer as defined in
⌋

### 43. Callback 通知
*原文标题：Callback notifications*

There are no callback notifications.

### 44. Scheduled functions

Transformers have no scheduled functions applicable for all transformers.

### 45. Expected 接口
*原文标题：Expected interfaces*

There are no expected interfaces.

### 46. 时序图
*原文标题：Sequence diagrams*

There are no sequence diagrams

### 47. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave  in the specification to guarantee comprehension.

Sectin  specifies the structure (containers) and the parameters of transformers.

Transformer are configured on system level in  and on software component level in . Out of this information, a basic EcuC of the transformer can be generated.

### 48. How to read this chapter

For details refer to the

### 49. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters for a general transformer configuration. The detailed meanings of the parameters describe   and  .

Specific transformers use this EcuC and fill it with their contents. The EcuC should be created automatically based on the information of DataTransformationSet because the generator of a transformer has all necessary information.

 Definition of EcucModuleDef Xfrm
⌈
| Module Name | Xfrm |
|---|---|
| Description | Configuration of the Xfrm module. |
| Post-Build Variant Support | false |
| Supported Config Variants | VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| XfrmGeneral | 1 | Contains the general configuration parameters of the module. |
| XfrmImplementationMapping | 1..* | For each transformer (TransformationTechnology) in a transformer chain (DataTransformation) which is applied to an ISignal it is necessary to specify the BswModuleEntry which implements it. This is the container to hold these mappings. |

⌋

### 50. XfrmGeneral

Definition of EcucParamConfContainerDef XfrmGeneral
⌈
| Container Name | XfrmGeneral | < | < |
|---|---|---|---|
| Parent Container | Xfrm | < | < |
| Upstream mapping defined | - | < | < |
| Description | Contains the general configuration parameters of the module. | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| XfrmDevErrorDetect | 1 |  |
| XfrmInstanceId | 1 |  |

No Included Containers
⌋

 Definition of EcucBooleanParamDef XfrmDevErrorDetect
⌈
| Parameter Name | XfrmDevErrorDetect | < | < |
|---|---|---|---|
| Parent Container | XfrmGeneral | < | < |
| Upstream mapping defined | - | < | < |
| Description | Switches the development error detection and notification on or off. |  |  |

* true: detection and notification is enabled.
| * false: detection and notification is disabled. | < | < |  |
|---|---|---|---|
| Multiplicity | 1 | < | < |
| Type | EcucBooleanParamDef | < | < |
| Default value | false | < | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Dependency |  | < | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. XfrmImplementationMapping

Definition of EcucParamConfContainerDef XfrmImplementationMapping
⌈
| Container Name | XfrmImplementationMapping | < | < |
|---|---|---|---|
| Parent Container | Xfrm | < | < |
| Upstream mapping defined | - | < | < |
| Description | For each transformer (TransformationTechnology) in a transformer chain (DataTransformation) which is applied to an ISignal it is necessary to specify the BswModuleEntry which implements it. This is the container to hold these mappings. | < | < |
| Multiplicity | 1..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| XfrmTransformerClassExtractProtocolHeaderFields | 0..1 |  |
| XfrmInvTransformerBswModuleEntryRef | 0..1 |  |
| XfrmTransformationTechnologyRef | 1 |  |
| XfrmTransformerBswModuleEntryRef | 0..1 |  |
| XfrmVariableDataPrototypeInstanceRef | 0..1 |  |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| XfrmDemEventParameterRefs | 0..1 | Container for the references to DemEventParameter elements which shall be invoked using the API Dem_SetEventStatus in case the corresponding error occurs. The EventId is taken from the referenced DemEventParameter's DemEventId symbolic value. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 31 章（内容从略，见纯文本全文）

52. XfrmSignal
53. XfrmDemEventParameterRefs
54. 附录
55. Referenced Meta Classes
56. Change history of AUTOSAR traceable items
57. Traceable item history of this document according to AUTOSAR Release R23-11
58. Added 规范 Items in R23-11
59. Changed 规范 Items in R23-11
60. Deleted 规范 Items in R23-11
61. Traceable item history of this document according to AUTOSAR Release R24-11
62. Added 规范 Items in R24-11
63. Changed 规范 Items in R24-11
64. Deleted 规范 Items in R24-11
65. Added Constraints in R24-11
66. Changed Constraints in R24-11
67. Deleted Constraints in R24-11
68. Traceable item history of this document according to AUTOSAR Release R25-11
69. Added 规范 Items in R25-11
70. Changed 规范 Items in R25-11
71. Deleted 规范 Items in R25-11
72. Added Constraints in R25-11
73. Changed Constraints in R25-11
74. Deleted Constraints in R25-11
75. Traceable item history of this document according to AUTOSAR Release R26-11
76. Added 规范 Items in R26-11
77. Changed 规范 Items in R26-11
78. Deleted 规范 Items in R26-11
79. Added Constraints in R26-11
80. Changed Constraints in R26-11
81. Deleted Constraints in R26-11
82. 不适用需求
