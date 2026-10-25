# Specification of DDS Service Communication Protocol (`DDSCommunicationProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 1110 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_DDSCommunicationProtocol_1110\AUTOSAR_FO_PRS_DDSCommunicationProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_DDSCommunicationProtocol_1110\AUTOSAR_FO_PRS_DDSCommunicationProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_DDSCommunicationProtocol_1110\zzgen\FO_PRS_DDSCommunicationProtocol.complete.txt`

## 文档简介

This protocol specification details the OMG® DDS® data types, QoS policies, sequences and semantics of the AUTOSAR Protocol for Service-Oriented Communication over DDS.

AUTOSAR platforms employ, among others, the Service-Oriented Architecture (SOA) communications paradigm. In SOA systems, Service Interfaces cohesively grouping Elements of various kinds are provided, required or both as Service Instances by Applications.

In this context, OMG® DDS®, as enabled by the Classic Platform Dds Basic Software Module and the Adaptive Platform DDS Network Binding, can be used to exercise Service-Oriented Communication between Applications providing (offering) Service Instances and Applications requiring (consuming) them.

## 模块依赖

The protocols described in this document rely, indirectly, upon the following OMG® DDS® protocol standards:

* DDS Wire Interoperability protocol (DDSI-RTPS) defined in
* DDS-XTYPES Minimal Programming Interface and Network Interoperability Profiles defined in

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

This protocol specification details the OMG® DDS® data types, QoS policies, sequences and semantics of the AUTOSAR Protocol for Service-Oriented Communication over DDS.

AUTOSAR platforms employ, among others, the Service-Oriented Architecture (SOA) communications paradigm. In SOA systems, Service Interfaces cohesively grouping Elements of various kinds are provided, required or both as Service Instances by Applications.

In this context, OMG® DDS®, as enabled by the Classic Platform Dds Basic Software Module and the Adaptive Platform DDS Network Binding, can be used to exercise Service-Oriented Communication between Applications providing (offering) Service Instances and Applications requiring (consuming) them.

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

This protocol defines how the OMG® DDS® middleware standard can be employed to exercise Service-Oriented Communication between Applications providing (offering) Service Instances and Applications requiring (consuming) them.

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

This protocol applies to DDS Service-Oriented Communication in:

* The AUTOSAR Classic Platform
* The AUTOSAR Adaptive Platform
* Non-AUTOSAR platforms targeting AUTOSAR interoperability

### 4. 约束与假设
*原文标题：Constraints and assumptions*

The following constraints and assumptions apply to the present document:

* The OMG® DDS® family of standards already define wire protocols, data type description formats, QoS policies and APIs
* Conversely, in this document "protocols" are described in terms of OMG® DDS® API interactions, QoS policies configuration and data type definitions involved in Service Interface advertisement and discovery processes

### 5. 限制
*原文标题：Limitations*

Not applicable.

### 6. Dependencies

### 7. Dependencies to other 协议 layers
*原文标题：Dependencies to other protocol layers*

The protocols described in this document rely, indirectly, upon the following OMG® DDS® protocol standards:

* DDS Wire Interoperability protocol (DDSI-RTPS) defined in
* DDS-XTYPES Minimal Programming Interface and Network Interoperability Profiles defined in

### 8. Dependencies to other standards and norms

The protocols described in this document target the following OMG® DDS® standards and profiles:

* DDS Minimum Profile defined in
* DDS Wire Interoperability protocol (DDSI-RTPS) defined in
* DDS-XTYPES Minimal Programming Interface and Network Interoperability Profiles defined in

### 9. Dependencies to the Application Layer

Not applicable.

### 10. Use Cases

| ID | Name | Description |
|---|---|---|
| UC_001 | Provide event-based communication | An Application offers, and publishes samples of, an Event of a Service Interface to other Applications in the network. |
| UC_002 | Require event-based communication | An Application subscribes to, and receives samples of, an Event of a Service Interface, possibly offered by other Applications in the network. |
| UC_003 | Provide trigger-based communication | An Application offers, and publishes samples of, a Trigger of a Service Interface to other Applications in the network. |
| UC_004 | Require trigger-based communication | An Application subscribes to, and receives samples of, a Trigger of a Service Interface, possibly offered by other Applications in the network. |
| UC_005 | Provide method-based communication | An Application offers, by publishing/receiving samples of, a Method of a Service Interface to other Applications in the network. |
| UC_006 | Require method-based communication | An Application calls, by publishing/receiving samples of, a Method of a Service Interface, possibly offered by other Applications in the network. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 相关文档
*原文标题：Related documentation*

### 12. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 13. 相关规范
*原文标题：Related specification*

Not applicable.

### 14. 协议需求
*原文标题：Protocol Requirements*

Implementation of this protocol requires an OMG® DDS® middleware implementation supporting:

* DDS Minimum Profile defined in
* DDS Wire Interoperability protocol (DDSI-RTPS) defined in
* DDS-XTYPES Minimal Programming Interface and Network Interoperability Profiles defined in

### 15. 需求 Traceability
*原文标题：Requirements Traceability*

| Requirement | Description | Satisfied by |
|---|---|---|
| DDS Compliance |  |  |
| DDS standard serialization rules |  |  |
| DDS Quality of Service |  |  |
| Type Definition |  |  |
| Customization |  |  |
| Safety mechanism |  |  |
| Publish |  |  |
| Subscribe |  |  |
| Service Oriented Communication realization with configured protocol |  |  |
| Communication Management shall provide an interface to call methods of other applications synchronously |  |  |
| Communication Management shall provide an interface to call service methods asynchronously |  |  |
| Communication Management shall trigger the set method of the application which provides the field |  |  |
| Communication Management shall trigger the get method of the application which provides the field |  |  |

### 16. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 17. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| OMG | Object Management Group |
| QoS | Quality of Service |
| DDSI | Data Distribution Service Interoperability |
| RTPS | Real-Time Publish-Subscribe |
| XTYPES | eXtensible Types |

### 18. 定义 of terms
*原文标题：Definition of terms*

| Terms: | Description: |
|---|---|
| Entity | The base class for all other DDS Entities. |
| DomainParticipant | Represents the participation of the application on a communication plane that isolates applications running on the same set of physical computers from each other. |
| Topic | Reprepsents the most basic description of the data to be published and subscribed. |
| Publisher | Provides the actual dissemination of publications. |
| DataWriter | Provides the application functionality to set the value of the data to be published under a given Topic. |
| Subscriber | Provides the actual reception of the data resulting from its subscriptions. |
| DataReader | Provides the application with (1) functionality to declare the data it wishes to receive (i.e., make a subscription) and (2) to access the data received by the attached Subscriber. |
| QoS Profile | Grouping of QoS Policy values applicable to one or more DDS Entities. |

### 19. 协议规范
*原文标题：Protocol specification*

### 20. 简介
*原文标题：Introduction*

In the scope of the Service-Oriented Discovery protocol protocol three distinct Resource Identification Mechanisms can be configured, defining how Service Interfaces and their individual Instances (the "Resources") are uniquely instantiated and addressable with a particular DDS Domain:

* The Partition -based mechanism, where DDS Publisher and Subscriber Entity PARTITION QoS policy is leveraged to isolate each Service Instance and their consumers into a uniquely named DDS Partition. De-facto choice in:

  * DDS DomainParticipant QoS -based discovery protocol.

  But also available in:

  * DDS Topic -based discovery protocol.
* The DDS Topic Prefix -based mechanism, where unique Service Instance Identifiers are included in all the DDS Topic names conforming the Service Interface. Available in:

  * DDS Topic -based discovery protocol.
* The Instance -based mechanism, where in-band (i.e. included in AUTOSAR DDS Data Types) unique Service Instance Identifier Fields are used to uniquely identify different Service Instances. Available in:

  * DDS Topic -based discovery protocol.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Message format

Message format is defined by the OMG® DDSI-RTPS standard ().

### 22. Message 类型
*原文标题：Message types*

Message types are defined by the OMG® DDSI-RTPS standard ().

### 23. 服务 / Commands
*原文标题：Services / Commands*

Not applicable.

### 24. Sequences (下层 layer)
*原文标题：Sequences (lower layer)*

Sequences are defined by the OMG® DDS® standard ().

### 25. 错误 messages
*原文标题：Error messages*

Error messages are defined by the OMG® DDSI-RTPS standard ().

### 26. 处理 Events
*原文标题：Handling Events*

Mapping Events to DDS Topics
  Status: DRAFT
  Upstream requirements: , , ,
⌈
Every Event of a ServiceInterface shall be mapped to a DDS Topic. This DDS Topic shall be configured as follows:

* The DDS Topic name shall be derived according to the following rules:

  * If the Service Instance has been advertised with the <DDSServiceInstanceResourceIdentifierType> attribute set to `SERVICE_INSTANCE_RESOURCE_PARTITION` or `SERVICE_INSTANCE_RESOURCE_INSTANCE_ID`, then the DDS Topic name shall be set to ara.com://services/<svcId>/<svcMajVersion>.<svcMinVersion>/<eventTopicName>
  * Additionally, if the provided or consumed Service Instance has been advertised with the <DDSServiceInstanceResourceIdentifierType> attribute set to `SERVICE_INSTANCE_RESOURCE_PARTITION`, then samples of this DDS Topic shall be sent and received via DDS DataWriters and DataReaders whose respective parent DDS Publisher and Subscriber objects include the following partition in the PARTITION QoS policy: ara.com://services/<svcId>/<svcInId>
  * Finally, if the provided or consumed Service Instance has been advertised with the <DDSServiceInstanceResourceIdentifierType> attribute set to `SERVICE_INSTANCE_TOPIC_PREFIX`, then

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 处理 Triggers
*原文标题：Handling Triggers*

Mapping Triggers to DDS Topics
  Status: DRAFT
  Upstream requirements: , , ,
⌈
Every Trigger of a ServiceInterface to a DDS Topic. This DDS Topic shall be configured as follows:

* The DDS Topic name shall be derived according to the following rules:

  * If the Service Instance has been advertised with the <DDSServiceInstanceResourceIdentifierType> attribute set to `SERVICE_INSTANCE_RESOURCE_PARTITION` or `SERVICE_INSTANCE_RESOURCE_INSTANCE_ID`, then the DDS Topic name shall be set to ara.com://services/<svcId>/<svcMajVersion>.<svcMinVersion>/<triggerTopicName>
  * Additionally, if the provided or consumed Service Instance has been advertised with the <DDSServiceInstanceResourceIdentifierType> attribute set to `SERVICE_INSTANCE_RESOURCE_PARTITION`, then samples of this DDS Topic shall be sent and received via DDS DataWriters and DataReaders whose respective parent DDS Publisher and Subscriber objects include the following partition in the PARTITION QoS policy: ara.com://services/<svcId>/<svcInId>
  * Finally, if the provided or consumed Service Instance has been advertised with the <DDSServiceInstanceResourceIdentifierType> attribute set to `SERVICE_INSTANCE_TOPIC_PREFIX`, then the topic

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 处理 Method Calls
*原文标题：Handling Method Calls*

The RPC over DDS Specification (DDS-RPC)  introduces the concept of DDS Services. These Services provide the mechanisms required to define and implement methods that can be invoked remotely by DDS "client" applications using the building blocks of the DDS data-centric publish-subscribe middleware . In this section, we specify how to handle service-oriented method calls over DDS by defining the appropriate mapping between ara::com service Methods and DDS service methods.

 Mapping Methods to DDS Topics
  Status: DRAFT
  Upstream requirements: , ,
⌈
Every Service Interface containing one or more Methods shall have an associated set of DDS Topics enabling Service Instances to offer those Methods, and to enable client applications to invoke them.

DDS Topics shall be constructed according to the Basic Service Mapping Profile of the RPC over DDS specification , which assigns two DDS Topics to every DDS Service: a Request DDS Topic and a Reply Topic. Thus, every Service Interface containing one or more Methods shall prompt the creation of two equivalent DDS Topics.

The equivalent DDS Request Topic shall be configured as follows:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 处理 Fields
*原文标题：Handling Fields*

Mapping Field Notifiers to DDS Topics
  Status: DRAFT
  Upstream requirements: , ,
⌈
Every Field Notifier of a ServiceInterface shall be mapped to a DDS Topic. This DDS Topic shall be configured as follows:

* The DDS Topic name shall be derived according to the following rules:

  * If the Service Instance has been advertised with the <DDSServiceInstanceResourceIdentifierType> attribute set to `SERVICE_INSTANCE_RESOURCE_PARTITION` or `SERVICE_INSTANCE_RESOURCE_INSTANCE_ID`, then the DDS Topic name shall be set to ara.com://services/<svcId>/<svcMajVersion>.<svcMinVersion>/<fieldTopicName>
  * Additionally, if the provided or consumed Service Instance has been advertised with the <DDSServiceInstanceResourceIdentifierType> attribute set to `SERVICE_INSTANCE_RESOURCE_PARTITION`, then samples of this DDS Topic shall be sent and received via DDS DataWriters and DataReaders whose respective parent DDS Publisher and Subscriber objects include the following partition in the PARTITION QoS policy: ara.com://services/<svcId>/<svcInId>
  * Finally, if the provided or consumed Service Instance has been advertised with the <DDSServiceInstanceResourceIdentifierType> attribute set to `SERVICE_INSTANCE_TO`

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Serialization of Payload

The present section outlines generic data type mappings, which AUTOSAR platforms then specialize for their own native type system.

 DDS standard serialization rules
  Status: DRAFT
  Upstream requirements: ,
⌈
The serialization of the payload shall be done according to the DDS standard serialization rules defined in section 7.4.3.5 of .
⌋

### 31. 基础数据类型
*原文标题：Basic Data Types*

DDS serialization of primitive data types
  Status: DRAFT
  Upstream requirements: , ,
⌈
Primitive data types shall be serialized according to the standard serialization rules for the equivalent `PRIMITIVE_TYPE` defined in section 7.4.3.5 of , as mapped by .
⌋

 Mapping of DDS primitive data types
  Status: DRAFT
  Upstream requirements: , ,
⌈
| Type | DDS Type | Remark |
|---|---|---|
| Boolean | Boolean |  |
| Unsigned 8-bit integer | Byte | Shall be encoded as a Byte type (opaque 8-bit type). |
| Unsigned 16-bit integer | UInt16 |  |
| Unsigned 32-bit integer | UInt32 |  |
| Unsigned 64-bit integer | UInt64 |  |
| Signed 8-bit integer | Byte | Shall be encoded as a Byte type (opaque 8-bit type). |
| Signed 16-bit integer | Int16 |  |
| Signed 32-bit integer | Int32 |  |
| Signed 64-bit integer | Int64 |  |
| 32-bit floating-point decimal | Float32 |  |
| 64-bit floating-point decimal | Float64 |  |

⌋

### 32. Enumeration 数据类型
*原文标题：Enumeration Data Types*

DDS serialization of enumeration data types
  Status: DRAFT
  Upstream requirements: , ,
⌈
Enumeration data types shall be serialized according to the standard serialization rules for `ENUM_TYPE` defined in section 7.4.3.5 of .

The bit bound of the `ENUM_TYPE` shall be set to the size of the enumeration's underlying basic data type in bits.
⌋

### 33. Structured 数据类型 (structs)
*原文标题：Structured Data Types (structs)*

DDS serialization of structure data types
  Status: DRAFT
  Upstream requirements: , ,
⌈
Structure data types (also known as records) shall be serialized according to the standard serialization rules for `STRUCT_TYPE` defined in section 7.4.3.5 of .

Optional members of the structure shall be marked as optional as specified in section 7.2.2.4.4.5 of .
⌋

### 34. Strings

DDS serialization of string types
  Status: DRAFT
  Upstream requirements: , ,
⌈
String data types shall be serialized according to the standard serialization rules for `STRING_TYPE` defined in section 7.4.3.5 of .
⌋

 Encoding Format and Endianness of Strings in DDS
  Status: DRAFT
  Upstream requirements: , ,
⌈
Section 7.4.1.1.2 of  specifies the standard character encoding format for `STRING_TYPE`: UTF-8. The serialized version shall not include a Byte Order Mark (BOM), as byte order information is already available in the RTPS Encapsulation Identifier and the XCDR serialization format .
⌋

### 35. Vectors and Arrays

DDS serialization of vector types
  Status: DRAFT
  Upstream requirements: , ,
⌈
Vector (also known as variable-length contiguous sequence) types shall be serialized according to the standard serialization rules for `SEQUENCE_TYPE` defined in section 7.4.3.5 of .

DDS Communication Protocol implementations shall serialize vector types with more than one dimension, as nested DDS sequences.
⌋

 DDS serialization of array types
  Status: DRAFT
  Upstream requirements: , ,
⌈
Array (also known as fixed-length contiguous sequence) types shall be serialized according to the standard serialization rules for `ARRAY_TYPE` defined in section 7.4.3.5 of .
⌋

### 36. Associative Maps

DDS serialization of dictionary types
  Status: DRAFT
  Upstream requirements: , ,
⌈
Dictionary (also known as associative map) types shall be serialized according to the standard serialization rules for `MAP_TYPE` defined in section 7.4.3.5 of .
⌋

### 37. Variant

DDS serialization of variant types
  Status: DRAFT
  Upstream requirements: , ,
⌈
Variant types shall be serialized according to the standard serialization rules for `UNION_TYPE` defined in section 7.4.3.5 of .
⌋

### 38. End-to-end communication protection

The present DDS Communication Protocol is defined in terms of standard DDS types, QoS policies and APIs. Hence, End-to-end communication protection as described for other protocols doesn't apply, because API calls can't be checksummed or payloaded the same way serialized messages are.

By no means does this imply that DDS is exempt from E2E protection assurances, they are simply provided by the DDS middleware. Different kinds of faults defined in  (derived from ISO-26262-6:2011, annex D.2.4) and their corresponding DDS/RTPS protection mechanism are described by the following items.

 Repetition or Insertion of Information
  Status: DRAFT
  Upstream requirements:
⌈
Submessage 64-bit sequence number, as defined in  section 8.3.5.4 "SequenceNumber", and additional SequenceNumber-typed fields in section 8.3.7 "RTPS Submessages" shall be used to guarantee safety mechanisms against Repetition or Insertion of Information faults.

Those mechanisms can be useful only to detect losses at receiver side; if detection is required also to sender side, the RELIABILITY DDS QoS policy (defined in , section 2.2.3.14 "RELIABILITY") shall be used in conjuction.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. 配置 parameters
*原文标题：Configuration parameters*

This chapter lists all parameters the DDS Communication protocol uses.

### 40. 服务 Oriented Communication
*原文标题：Service Oriented Communication*

| DDS Protocol Parameter | Description | AP Config | CP Config |
|---|---|---|---|
| <DDSServiceInterfaceID> | ID of the DDS Service Interface | DdsServiceInterfaceDeployment.serviceInterfaceId | - |
| <DDSServiceInstanceID> | ID of the DDS Service Instance | DdsProvidedServiceInstance.serviceInstanceId and DdsRequiredServiceInstance.requiredServiceInstanceId | - |
| <DDSInterfaceMajorVersion> | Major Version of the DDS Service Interface | ServiceInterface.majorVersion | - |
| <DDSInterfaceMinorVersion> | Minor Version of the DDS Service Interface | ServiceInterface.minorVersion | - |
| <DDSServiceInstanceRessourceIdentifierType> | Resource Identification scheme for DDS Service Instance | DdsProvidedServiceInstance.resourceIdentifierType | - |
| <DDSEventTopicName> | Suffix of the DDS Topic name for an Event within a DDS Service Interface | DdsEventDeployment.topicName | - |
| <DDSServiceInstanceEventQoSProfile> | QoS Profile for an Event within a specific DDS Service Instance | DdsQosProps.qosProfile | - |
| <DDSTriggerTopicName> | Suffix of the DDS Topic name for an Trigger within a DDS Service Interface | DdsEventDeployment.topicName | - |
| <DDSServiceInstanceTriggerQoSProfile> | QoS Profile for an Trigger within a specific DDS Serv |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 协议 usage and 指南
*原文标题：Protocol usage and guidelines*

This section is intentionally left empty.

### 42. 附录
*原文标题：Appendix*

### 43. 附录
*原文标题：Appendix*

This section is intentionally left empty.

### 44. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 45. Traceable item history of this document according to AUTOSAR Release R25-11

### 46. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 47. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 48. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 49. Traceable item history of this document according to AUTOSAR Release R24-11

### 50. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

| Number | Heading |
|---|---|
| Mapping Events to DDS Topics |  |
| DDS Topic data type definition |  |
| Sending an Event sample |  |
| Subscribing to an Event |  |
| Creating a DDS DataReader for Event subscription |  |
| Defining a DDS DataReader Listener for a subscribed Event |  |
| Unsubscribing from an Event |  |
| Obtaining subscription state from an Event |  |
| Retrieving new data samples from an Event |  |
| Requesting number of free sample slots from an Event |  |
| Registering an Event reception handler |  |
| Unregistering an Event reception handler |  |
| Registering an Event subscription state change handler |  |
| Unregistering an Event subscription state change handler |  |
| Mapping Triggers to DDS Topics |  |
| DDS Topic data type definition |  |
| Sending a Trigger sample |  |
| Subscribing to a Trigger |  |
| Creating a DDS DataReader for Trigger subscription |  |
| Defining a DDS DataReader Listener for a subscribed Trigger |  |
| Unsubscribing from an Trigger |  |
| Obtaining subscription state from a Trigger |  |
| Retrieving new notification from a Trigger |  |
| Registering a Trigger reception handler |  |
| Unregistering a Trigger reception handler |  |
| Registering a Trigger subscription state change handler |  |
| Unregistering a Trigger subscription state change h |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 52. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none
