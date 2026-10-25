# Specification of SOME/IP Transformer (`SOMEIPTransformer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 660 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SOMEIPTransformer_660\AUTOSAR_CP_SWS_SOMEIPTransformer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SOMEIPTransformer_660\AUTOSAR_CP_SWS_SOMEIPTransformer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SOMEIPTransformer_660\zzgen\CP_SWS_SOMEIPTransformer.complete.txt`

## 文档简介

This document specifies the Scalable service-Oriented MiddlewarE over IP (SOME/IP) Transformer. This is a transformer which linearizes data with the SOME/IP on-the-wire format and specifies an automotive/embedded mechanism for Client/Server communication.

The only valid abbreviation is SOME/IP. Other abbreviations (e.g. Some/IP) are wrong and shall not be used.

The basic motivation to specify "yet another Client/Server and Sender/Receiver mechanism" instead of using an existing infrastructure/technology is the goal to have a technology that:

* Fulfills the hard requirements regarding resource consumption in an embedded world
* Is compatible through as many use-cases and communication partners as possible
* Provides the features required by automotive use-cases
* Is scalable from tiny to large platforms
* Can be implemented on different operating system (i.e. AUTOSAR, GENIVI, and OSEK) and even embedded devices without operating system

## 模块依赖

The AUTOSAR RTE  has to exist to execute the transformer.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies the Scalable service-Oriented MiddlewarE over IP (SOME/IP) Transformer. This is a transformer which linearizes data with the SOME/IP on-the-wire format and specifies an automotive/embedded mechanism for Client/Server communication.

The only valid abbreviation is SOME/IP. Other abbreviations (e.g. Some/IP) are wrong and shall not be used.

The basic motivation to specify "yet another Client/Server and Sender/Receiver mechanism" instead of using an existing infrastructure/technology is the goal to have a technology that:

* Fulfills the hard requirements regarding resource consumption in an embedded world
* Is compatible through as many use-cases and communication partners as possible
* Provides the features required by automotive use-cases
* Is scalable from tiny to large platforms
* Can be implemented on different operating system (i.e. AUTOSAR, GENIVI, and OSEK) and even embedded devices without operating system

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the SOME/IP Transformer that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Client-Service-Instance-Entry | The configuration and required data of a service instance another ECU offers shall be called Client-Service-Instance-Entry at the ECU using this service (Client). |
| Field | a field represents a status and thus has a valid value at all times on which getter, setter and notifier act upon. |
| Finding a service instance | to send a SOME/IP-SD message in order to find a needed service instance. |
| Getter | a Request/Response call that allows read access to a field. |
| Method | a method, procedure, function, or subroutine that is called/invoked. |
| Notifier | sends out event message with a new value on change of the value of the field. |
| Request | a message of the client to the server invoking a method. |
| Response | a message of the server to the client transporting results of a method invocation. |
| SD | Service Discovery(see) |
| Service | a logical combination of zero or more methods, zero or more events, and zero or more fields. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. Related standards and norms

Not applicable.

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Transformers , which is also valid for SOME/IP Transformer.

Thus, the specification SWS Transformer General shall be considered as additional and required specification for SOME/IP Transformer.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

For the SOME/IP Transformer all general transformer limitations (see ) apply.

The SOME/IP transformer doesn't implement the whole SOME/IP protocol:

* a part is implemented by
* a part is implemented by
* a part is currently not implemented in AUTOSAR. This is documented in Appendix
* The processing order of header fields in AUTOSAR CP deviates from the processing order defined in  (also Figure 4.21: Message Validation and Error Handling in SOME/IP). This deviation is caused by the layered architecture of AUTOSAR CP.

 Value of length field
⌈
In accordance with , 2^(8*sizeof(data type of length field)) shall be larger than the number of elements given by the size indicator multiplied by the size in bytes of each element (i.e., 1 for UTF-8 and 2 for UTF-16) and increased by the size in bytes required by the BOM.
⌋

 Serialization based on the network representation
⌈
Serialization based on the network representation according to  is currently not supported in combination with structured datatypes and arguments with identifier and optional members, strings, dynamic length arrays / variable size arrays, and unions / variants and shall therefore not be used in those combinations.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The SOME/IP Transformer can be used for all domain applications when SOME/IP Sender/Receiver or Client/Server communication is used.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The AUTOSAR RTE  has to exist to execute the transformer.

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
| Modules of the \muC Abstraction Layer (MCAL) may not have hard coded horizontal interfaces |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| The AUTOSAR Basic Software shall provide a microcontroller abstraction layer which provides a standardized interface to higher software layers |  |  |
| The AUTOSAR Basic Software shall provide a hardware abstraction layer |  |  |
| The AUTOSAR SW Components shall provide information about their dependency from faults, signal qualities, driver demands |  |  |
| API naming convention |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support pre-compile configuration |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

When a SWC initiates an inter-ECU communication which is configured to be transformed, the SWC hands the data over to the RTE. The RTE executes the configured transformer chain which contains the SOME/IP Transformer (A transformer chain may contain also other transformers but this is omitted in this overview for simplicity).

The SOME/IP Transformer on the sender side serializes the data of the SWC and brings them into an linear form. The serialized data are sent via the communication stack over the bus to the receiver(s). The RTE of the receiver executes the transformer chain in the reverse order. The SOME/IP transformer of the receiver deserializes the linear data back into the original data structure. These are handed over to the receiving SWC.

From the SWC's point of view it is totally transparent whether data are transformed or not.

The SOME/IP transformer is a transformer of the class Serializer. It serializes structured data into a linear form. Therefore it can only be used as the first transformer on the sending side and the last transformer on the receiving side (in execution order).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 规范 of the SOME/IP on-wire format
*原文标题：Specification of the SOME/IP on-wire format*

Serialization describes the way data is represented in protocol data units (PDUs) transported over an automotive in-vehicle network.

### 16. Message Length 限制
*原文标题：Message Length Limitations*

The usage of TCP allows for larger streams of data to transport SOME/IP header and payload. However, current transport protocols for CAN and FlexRay limit messages to 4095 Bytes. When compatibility to those has to be achieved, SOME/IP messages including the SOME/IP header shall not exceed 4095 Bytes.

### 17. Endianness

The byte order of the SOME/IP header fields is defined as network byte order by .

The byte order of additional fields in the SOME/IP payload is defined as network byte order by .

  Upstream requirements: ,
⌈
The byte order of the parameters inside the payload shall be defined by byteOrder of SOMEIPTransformationDescription. If byteOrder of SOMEIPTransformationDescription is not configured explicitly, the default value defined for `BYTE_ORDER` in  shall be used.
⌋

### 18. Message format

Upstream requirements: ,
⌈
For interoperability reasons the message format layout shall be identical for all implementations of SOME/IP and is described as follows:

# Message ID (Service ID / Method ID)
# Length
# Additional information:

  # Protocol Version
  # Interface Version
  # Message Type
  # Return Code
# Payload

The fields are presented in transmission order; i.e. the fields on the top are transmitted first. In the following sections the different message format fields and their usage is being described.
⌋

Note: Layout is also shown in Figure .

Figure  shows the complete SOME/IP message format. The SOME/IP transformer only implements the lower part (all except Message ID and Length).

  Upstream requirements:
⌈
The SOME/IP transformer shall implement all fields of the header except Message ID and Length.
⌋

Rationale: Message-ID and Length are not covered since this allows the AUTOSAR Socket Adaptor header mode to work.

These are added by other modules in the AUTOSAR BSW. Nonetheless they are contained in Figure  to show the whole on-wire-format.

### 19. Request ID [32 bit

]

  Upstream requirements:
⌈
The Request ID field shall be 32 bit long.
⌋

The Request ID shall be the unique identifier for the calling client inside the ECU. Its values are chosen by the RTE and handed over to the SOME/IP transformer.

 Request ID construction by Client ID and Session ID
  Upstream requirements:
⌈
| Client ID | Session ID |
|---|---|

⌋

Both are chosen by RTE and handed over to the transformer as `Rte_Cs_TransactionHandleType`.

  Upstream requirements:
⌈
The clientId inside the `Rte_Cs_TransactionHandleType` handed over from RTE shall be used for the value of the Client ID.
⌋

  Upstream requirements:
⌈
The sequenceCounter inside the `Rte_Cs_TransactionHandleType` handed over from RTE shall be used for the value of the Session ID.
⌋

For details of `Rte_Cs_TransactionHandleType` see .

The Request ID allows a client to differentiate multiple calls to the same method. Therefore, the Request ID has to be unique for a single client and server combination only. When generating a response message, the server has to copy the Request ID from the request to the response message. This allows the client to map a response to the issued request even with more than one request outstanding.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 协议 Version [8 bit
*原文标题：Protocol Version [8 bit*

]

  Upstream requirements:
⌈
The Protocol Version field shall be 8 bit long.
⌋

  Upstream requirements:
⌈
The Protocol Version field shall contain the SOME/IP protocol version.
⌋

  Upstream requirements:
⌈
The Protocol Version shall be set to 0x01.
⌋

### 21. 接口 Version [8 bit
*原文标题：Interface Version [8 bit*

]

  Upstream requirements:
⌈
The Interface Version field shall be 8 bit long.
⌋

  Upstream requirements:
⌈
The Interface Version field shall contain the Version of the Service Interface.
⌋

Rationale: This is required to catch mismatches in Service definitions and allows debugging tools to identify the Service Interface used, if version is used.

Note: The Version of the corresponding Service Discovery service has to match the version of the Service Interface, i.e. SdServerServiceMajorVersion and/or SdClientServiceMajorVersion has to match the used SOMEIPTransformationDescription.interfaceVersion and/or SOMEIPTransformationISignalProps.interfaceVersion (see ).

### 22. Message 类型 [8 bit
*原文标题：Message Type [8 bit*

]

  Upstream requirements:
⌈
The Message Type field shall be 8 bit long.
⌋

The Message Type field is used to differentiate different types of messages.

 Message TYPE field values
  Upstream requirements:
⌈
| Number | Value | Description |  |  |  |
|---|---|---|---|---|---|
| 0x00 |  |  | REQUEST |  | A request expecting a response (even void) |
| 0x01 |  |  | REQUEST_NO_RETURN |  | A fire&forget request |
| 0x02 |  |  | NOTIFICATION |  | A request of a notification expecting no response |
| 0x80 |  |  | RESPONSE |  | The response message |
| 0x81 |  |  | ERROR |  | The response containing an error |

⌋

Refer to  with the note and text below it, that describes the use or the need of each of the above mentioned message types.

### 23. Return 代码 [8 bit
*原文标题：Return Code [8 bit*

]

  Upstream requirements:
⌈
The Return Code field shall be 8 bit long.
⌋

  Upstream requirements:
⌈
The Return Code field shall be used to signal whether a request has been successfully processed.
⌋

For simplification of the header layout, every message transports the field Return Code.

The Return Codes are specified in detail in .

  Upstream requirements:
⌈
Messages of Type REQUEST, `REQUEST_NO_RETURN`, and Notification have to set the Return Code to 0x00 (E_OK).
⌋

 Allowed Return Codes for specific message types
  Upstream requirements:
⌈
| Message Type | Allowed Return Codes |
|---|---|
| REQUEST | N/A, set to 0x00 (E_OK) |
| REQUEST_NO_RETURN | N/A, set to 0x00 (E_OK) |
| NOTIFICATION | N/A, set to 0x00 (E_OK) |
| RESPONSE | See Return Codes in . |

⌋

### 24. Payload [variable size

]

  Upstream requirements:
⌈
The Payload field shall have variable size.
⌋

  Upstream requirements:
⌈
The Payload field shall contain the transported data.
⌋

The serialization of the data will be specified in the following section.

### 25. Serialization of Parameters and 数据 Structures
*原文标题：Serialization of Parameters and Data Structures*

Upstream requirements:
⌈
The serialization shall be based on the SenderReceiverInterface or ClientServerInterface of the data.
⌋

  Upstream requirements:
⌈
After the serialized data of a variable data length DataPrototype a padding for alignment purposes shall be added for the configured alignment (see  and ) if the variable data length DataPrototype is not the last element in the serialized data stream. This requirement does not apply for the serialization of extensible structs and methods.
⌋

Note: See also chapter .

  Upstream requirements:
⌈
If SOMEIPTransformationProps.alignment is set for a variable data length data element, the value of SOMEIPTransformationProps.alignment defines the alignment. This requirement does not apply for the serialization of extensible structs and methods .
⌋

Note: See also chapter .

  Upstream requirements:
⌈
If SOMEIPTransformationProps.alignment is not set for a variable data length data element, the value of SOMEIPTransformationDescription.alignment defines the alignment. This requirement does not apply for the serialization of extensible structs and methods.
⌋

Note: See also chapter .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 基础 Datatypes
*原文标题：Basic Datatypes*

Supported SwBaseTypes for serialization
  Upstream requirements: ,
⌈
| Type | Description | Size | Remark |
|---|---|---|---|
| boolean | TRUE/FALSE value | 8 | FALSE (0), TRUE (1) |
| uint8 | unsigned Integer | 8 |  |
| uint16 | unsigned Integer | 16 |  |
| uint32 | unsigned Integer | 32 |  |
| uint64 | unsigned Integer | 64 |  |
| sint8 | signed Integer | 8 |  |
| sint16 | signed Integer | 16 |  |
| sint32 | signed Integer | 32 |  |
| sint64 | signed Integer | 64 |  |
| float32 | floating point number | 32 | IEEE 754 binary32 (Single Precision) |
| float64 | floating point number | 64 | IEEE 754 binary64 (Double Precision) |

⌋

Note: The SwBaseTypes are defined in  and according to  placed in the package /`AUTOSAR_Platform`/BaseTypes (e.g., /`AUTOSAR_Platform`/BaseTypes/uint32).

The Byte Order is specified common for all parameters by byteOrder of SOMEIPTransformationDescription. See chapter .

### 27. Structured Datatypes (structs)

Upstream requirements:
⌈
A struct shall be serialized in order of depth-first traversal.
⌋

The transformer doesn't automatically align parameters of a struct.

Insert reserved/padding elements into the AUTOSAR data type if needed for alignment, since the SOME/IP implementation shall not automatically add such padding.

So if for example a struct includes a uint8 and a uint32, they are just written sequentially into the buffer. This means that there is no padding between the uint8 and the first byte of the uint32; therefore, the uint32 might not be aligned. So the system designer has to consider to add padding elements to the data type to achieve the required alignment or set it globally.

Warning about unaligned structs or similar shall not be done in the implementation but only in the tool chain used to generate the implementation.

Messages of legacy busses like CAN and FlexRay are usually not aligned. Warnings can be turned off or be ignored in such cases.

The SOME/IP transformer does not automatically insert dummy/padding elements.

SOME/IP allows to add a length field of 8, 16 or 32 bit in front of structs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Structured Datatypes and Arguments with Identifier and optional Members

Please note that the content of this chapter has draft character

To achieve enhanced forward and backward compatibility, an additional Data ID can be added in front of struct members or method arguments. The receiver then can skip unknown members/arguments, i.e. where the Data ID is unknown. New members/arguments can be added at arbitrary positions when Data IDs are transferred in the serialized byte stream.

Structs are modeled in the Software Component Template using an ImplementationDataType of category STRUCTURE and members are represented by ImplementationDataTypeElements. Method arguments are represented by ArgumentDataPrototypes. Refer to  for more details.

The assignment of Data IDs is modeled in the System Template in the context of SOMEIPTransformationISignalProps. Refer to  for more details.

Moreover, the usage of Data IDs allows describing structs with optional members. To serialize data with optional members, the transformer has to know which optional members are available or not. This is stored in a bitfield which is contained inside the ImplementationDataType. This availabilityBitfield is realized as array of uint8.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Strings

Upstream requirements:
⌈
Strings shall be encoded using Unicode and terminated with a

"\textbackslash0"-character

for both fixed-length and dynamic-length strings. Unused space shall be filled using "\0".
⌋

 Default for baseTypeEncoding
  Upstream requirements:
⌈
If baseTypeDefinition.baseTypeEncoding is not configured explicitly, then the default value for `STRING_ENCODING` as defined in  shall be used.
⌋

  Upstream requirements:
⌈
Different Unicode encoding shall be supported including UTF-8, UTF-16BE, and UTF-16LE. Since these encoding have a dynamic length of bytes per character, the maximum length in bytes is up to four times the length of characters in UTF-8 plus 1 Byte for the termination with a "\0" or up to four times the length of the characters in UTF-16 plus 2 Bytes for a "\0". UTF-8 character can be up to 4 bytes and an UTF-16 character can be up to 4 bytes.
⌋

In the following an example is provided in accordance with  and  :

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Strings (fixed length)

The length of the string (this includes the "\0") in Bytes is specified in the data type definition.

 Recognition of UTF-8 Fixed Length Strings
  Upstream requirements:
⌈
An UTF-8 Fixed Length String shall be detected if an ApplicationPrimitiveDataType and an ImplementationDataType with the following pattern are used:

* ApplicationPrimitiveDataType

  * with category equal to STRING
  * ApplicationPrimitiveDataType.swDataDefProps.swTextProps.baseType refers to a BaseType with baseTypeDefinition.baseTypeEncoding equal to UTF-8
* ImplementationDataType

  * with category ARRAY
  * that contains exactly one ImplementationDataTypeElement that boils down to a uint8 ImplementationDataType:

    * ImplementationDataTypeElement.arraySize is set to a value
    * ImplementationDataTypeElement.arraySizeSemantics is set to fixedSize
⌋

 Recognition of UTF-16 Fixed Length Strings
  Upstream requirements:
⌈
An UTF-16 Fixed Length String shall be detected if an ApplicationPrimitiveDataType and an ImplementationDataType with the following pattern are used:

* ApplicationPrimitiveDataType

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Strings (dynamic length)

Strings with dynamic length can be realized in an AUTOSAR system as an array with dynamic length that transports the single characters.

 Recognition of UTF-8 Variable Length Strings
  Upstream requirements:
⌈
An UTF-8 Variable Length String shall be detected if an ApplicationPrimitiveDataType and an ImplementationDataType with the following pattern are used:

* ApplicationPrimitiveDataType

  * with category equal to STRING
  * ApplicationPrimitiveDataType.swDataDefProps.swTextProps.baseType refers to a BaseType with baseTypeDefinition.baseTypeEncoding equal to UTF-8
* ImplementationDataType The ImplementationDataType shall be defined according to  as a STRUCTURE that contains exactly two ImplementationDataTypeElements and shall follow the rules defined by :

  * one ImplementationDataTypeElement represents the Size Indicator and has the category equal to `TYPE_REFERENCE` which points to a uint8, uint16 or uint32 ImplementationDataType
  * one ImplementationDataTypeElement has the category equal to ARRAY and contains exactly one ImplementationDataTypeElement that boils down to a uint8 ImplementationDataType
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Arrays (fixed length)

Upstream requirements:
⌈
The length of fixed length arrays is defined by the datatype definition.
⌋

They can be seen as repeated elements. In chapter  dynamic length arrays are shown, which can be also used. Fixed length arrays are easier for use in very small devices. Dynamic length arrays might need more resources on the ECU using them.

SOME/IP allows to add a length field of 8, 16 or 32 bit in front of arrays. The length field of an array describes the number of bytes of the array. This allows extensible arrays which allow better migration of interfaces.

  Upstream requirements:
⌈
If attribute sizeOfArrayLengthFields of SOMEIPTransformationISignalProps is set to a value greater 0, a length field shall be inserted in front of every serialized array.
⌋

Note:  also applies to nested arrays which means that additionally every nested fixed-size array has its own length field.

  Upstream requirements:
⌈
If attribute sizeOfArrayLengthField of SOMEIPTransformationProps is set to a value greater 0, a length field shall be inserted in front of the serialized array for which the SOMEIPTransformationProps is defined. (See )
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. One-dimensional

The one-dimensional arrays with fixed length n carry exactly n elements of the same type. The layout is shown in Figure .

  Upstream requirements:
⌈
A one-dimensional array with fixed length shall be serialized by concatenating the array elements in order.
⌋

### 34. Multidimensional

Upstream requirements:
⌈
The serialization of multidimensional arrays shall happen in row-major order(in-memory layout of multidimensional arrays in the C programming language)
⌋

Consult  for Arrays.

### 35. Optional Parameters / Optional Elements

Optional Elements can be encoded as array with 0 to 1 elements. For the serialization of arrays with dynamic length see Chapter .

### 36. Dynamic Length Arrays / Variable Size Arrays

Variable size arrays are implemented in AUTOSAR as structs with two members

* a size indicator which is an integer and holds the number of valid elements in the array
* the array with variable size

In SOME/IP variable size arrays are implemented in a similar manner. Only the size indicator is replaced by a length indicator.

* a length indicator which is an integer and holds the length (in bytes) of the following variable size array
* the array which contains the valid elements of the variable size array

In AUTOSAR also so called "old-world" variable-size array data types exist which don't have a size indicator. These are not supported by data transformation in general and hence also not supported by the SOME/IP transformer. For details, refer to  (), ,  and .

  Upstream requirements:
⌈
A variable size array embedded in a structure which also contains a size indicator shall be serialized as the concatenation of the following elements:

* the length indicator which holds the length (in bytes) of the following variable size array
* the array which contains the valid elements of the variable size array

where

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Bitfield

Upstream requirements:
⌈
Bitfields shall be transported as-is based on the underlying SwBaseType uint8/uint16/uint32/uint64 according to . No further modification or interpretation shall be done by the SOME/IP transformer.
⌋

### 38. Union / Variant

A union (also called variant) is a parameter that can contain different types of elements. For example, if one defines a union of type uint8 and type uint16, the union shall carry an element of uint8 or uint16.

The union serialization will only be triggered if the pattern defined in  applies.

  Upstream requirements:
⌈
A union shall be detected if an ImplementationDataType with the following pattern (named wrapped union data type) is used: ImplementationDataType with category STRUCTURE that contains exactly two ImplementationDataTypeElements:

* memberSelector: ImplementationDataTypeElement which represents the type field that boils down to a uint8, uint16 or uint32 ImplementationDataType
* payload: ImplementationDataTypeElement of category UNION which represents the actual union
⌋

When using different types of elements the alignment of subsequent parameters may be distorted. To resolve this, padding might be needed.

 Default serialization layout of unions in SOME/IP
  Upstream requirements:
⌈
Length field (optional)
Type field
Element including padding
⌋

SOME/IP allows to add a length field of 8, 16 or 32 bit in front of unions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. 示例：Union of uint8/uint16 both padded to 32 bit
*原文标题：Example: Union of uint8/uint16 both padded to 32 bit*

In this example a length of the length field is specified as 32 bits. The union shall support a uint8 and a uint16 as elements. Both are padded to the 32 bit boundary (length=4 Bytes).

A uint8 will be serialized like this:

| Length = 4 Bytes | < | < | < |
|---|---|---|---|
| Type = 1 | < | < | < |
| uint8 | Padding 0x00 | Padding 0x00 | Padding 0x00 |

A uint16 will be serialized like this:

| Length = 4 Bytes | < | < |
|---|---|---|
| Type = 2 | < | < |
| uint16 | Padding 0x00 | Padding 0x00 |

### 40. De-serialization of Parameters and 数据 Structures
*原文标题：De-serialization of Parameters and Data Structures*

The de-serialization process need to inspect the payload (serialized byte stream) of the received SOME/IP message. Thereby the de-serialization process need to identify the elements within the received byte stream and compare the identified elements with the configured data type(s) of the corresponding service interface (please note, the data type is derived from the interface specification, which defines the exact position of all data structures in a PDU). The possibility to identify elements in a dedicated SOME/IP serialized byte stream depend on the interface specification and the serialization properties. The serialization properties define among others:

* if structured data types are serialized with a length field in front
* if tag-length-value are used for encoding, which include data ids and the possibility specify optional data members

The de-serialization process of a SOME/IP messages need to consider the received message length and deal with a message length which may be larger than expected according the interface specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Structured Datatypes (structs)

Upstream requirements:
⌈
If the length is greater than the expected length of a struct (as specified in the data type definition) a deserializing SOME/IP transformer shall only interpret the expected data and skip the unexpected.
⌋

To determine the start of the next expected data following the skipped unexpected part, the SOME/IP transformer can use the supplied length information.

### 其余 76 章（内容从略，见纯文本全文）

42. Structured Datatypes and Arguments with Identifier and optional Members
43. Strings
44. Strings (fixed length)
45. Strings (dynamic length)
46. Arrays (fixed length)
47. Dynamic Length Arrays / Variable Size Arrays
48. Bitfield
49. Union / Variant
50. 协议规范
51. Client/Server Communication
52. Sender/Receiver Communication
53. External Trigger Events
54. 错误处理
55. Return 代码
56. Communication 错误的Communication 错误 and 处理
57. Application based 错误处理
58. 错误分类
59. Development 错误
60. Runtime 错误
61. Production 错误
62. Extended Production 错误
63. API 规范
64. Imported 类型
65. 类型定义
66. 功能定义
67. SomeIpXf_ExtractProtocolHeaderFields
68. SomeIpXf_<transformerId>
69. SomeIpXf_Inv_<transformerId>
70. SomeIpXf_Init
71. SomeIpXf_DeInit
72. Scheduled functions
73. Expected 接口
74. Mandatory 接口
75. Optional 接口
76. 时序图
77. 配置规范
78. 附录
79. Change History
80. Change History R26-11
81. Added 规范 Items in R26-11
82. Changed 规范 Items in R26-11
83. Deleted 规范 Items in R26-11
84. Added Constraints in R26-11
85. Changed Constraints in R26-11
86. Deleted Constraints in R26-11
87. Change History R25-11
88. Added 规范 Items in R25-11
89. Changed 规范 Items in R25-11
90. Deleted 规范 Items in R25-11
91. Added Constraints in R25-11
92. Changed Constraints in R25-11
93. Deleted Constraints in R25-11
94. Change History R24-11
95. Added 规范 Items in R24-11
96. Changed 规范 Items in R24-11
97. Deleted 规范 Items in R24-11
98. Added Constraints in R24-11
99. Changed Constraints in R24-11
100. Deleted Constraints in R24-11
101. Change History R23-11
102. Added 规范 Items in R23-11
103. Changed 规范 Items in R23-11
104. Deleted 规范 Items in R23-11
105. Added Constraints in R23-11
106. Changed Constraints in R23-11
107. Deleted Constraints in R23-11
108. Change History R22-11
109. Added 规范 Items in R22-11
110. Changed 规范 Items in R22-11
111. Deleted 规范 Items in R22-11
112. Referenced Meta Classes
113. Features of SOME/IP not supported by AUTOSAR SOME/IP 转换器
114. 示例
115. Serialization of a Client/Server Operation
116. Client
117. Server
