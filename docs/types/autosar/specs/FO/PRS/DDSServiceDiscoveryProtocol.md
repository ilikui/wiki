# Specification of DDS Service Discovery Protocol (`DDSServiceDiscoveryProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 1111 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_DDSServiceDiscoveryProtocol_1111\AUTOSAR_FO_PRS_DDSServiceDiscoveryProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_DDSServiceDiscoveryProtocol_1111\AUTOSAR_FO_PRS_DDSServiceDiscoveryProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_DDSServiceDiscoveryProtocol_1111\zzgen\FO_PRS_DDSServiceDiscoveryProtocol.complete.txt`

## 文档简介

This protocol specification details the OMG® DDS® data types, QoS policies, sequences and semantics of the AUTOSAR Protocol for Service Discovery over DDS.

AUTOSAR platforms employ, among others, the Service-Oriented Architecture (SOA) communications paradigm. In SOA systems, Service Interfaces cohesively grouping Elements of various kinds are provided, required or both as Service Instances by Applications.

In this context, OMG® DDS®, as enabled by the Classic Platform Dds Basic Software Module and the Adaptive Platform DDS Network Binding, can be used to advertise and discover Service Instances.

## 模块依赖

The protocols described in this document rely, indirectly, upon the following OMG® DDS® protocol standards:

* DDS Wire Interoperability protocol (DDSI-RTPS) defined in
* DDS-XTYPES Minimal Programming Interface and Network Interoperability Profiles defined in

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

This protocol specification details the OMG® DDS® data types, QoS policies, sequences and semantics of the AUTOSAR Protocol for Service Discovery over DDS.

AUTOSAR platforms employ, among others, the Service-Oriented Architecture (SOA) communications paradigm. In SOA systems, Service Interfaces cohesively grouping Elements of various kinds are provided, required or both as Service Instances by Applications.

In this context, OMG® DDS®, as enabled by the Classic Platform Dds Basic Software Module and the Adaptive Platform DDS Network Binding, can be used to advertise and discover Service Instances.

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

This protocol defines how the OMG® DDS® middleware standard can be employed to advertise and discover Service Instances.

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

This protocol applies to DDS Service Instance advertisement and discovery in:

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
| UC_001 | Provide a Service | An Application offers, and publishes samples of, an Instance of a Service Interface to other Applications in the network. |
| UC_002 | Require a Servive | An Application attempts discovery of an Instance of a Service Interface, possibly offered by other Applications in the network. |
| UC_003 | Consume a Service | An Application binds against a discovered Instance of a Service Interface, offered by other Applications in the network. |
| UC_004 | Flexible communication paths | A developer wants to design his applications without knowing who will receive the data or who is sending the desired data. Dynamic Service Discovery enables dynamic creation of communication paths during run-time. |

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
| DDS Quality of Service |  |  |
| Type Definition |  |  |
| Customization |  |  |
| Publish |  |  |
| Subscribe |  |  |

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
*原文标题：Protocol Specification*

### 20. 简介
*原文标题：Introduction*

In AUTOSAR, two distinct Service Discovery Protocols are configured by <DDSServiceInstanceDiscoveryType>, and specified in the following sections:

* The DomainParticipant QoS -based discovery protocol that leverages the `USER_DATA` QoS policy of DDS DomainParticipant Entities, assigning a purpose-specific format string to it as described in  below. This approach is fast and nimble, since no additional DDS Entities beyond Domain Participants need to be created to exercise discovery of Service Instances.
* The Topic -based discovery protocol that employs a purpose-specific Topic of a well-defined type to distribute Service Instance announcements in a publish-subscribe, instance-based fashion, as descriped in  below. This protocol, although more resource-demanding (DDS Entities down to a single DataWriter need to be created for advertising, same for a DataReader in discovery), enhances interoperability and enables advanced DDS features such as persistence, routing and durability.

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

### 26. 服务 Discovery via Domain Participant USER_DATA QoS policy
*原文标题：Service Discovery via Domain Participant USER_DATA QoS policy*

### 27. 服务 Instance Advertising
*原文标题：Service Instance Advertising*

To advertise a Service Instance, the following operations have to be performed:

*  Assigning a DDS DomainParticipant Entity to a Service Instance.
*  Adding the Service Interface Identifier, Service Instance Identifier, and Service Interface Contract Versions to the DDS DomainParticipant's `USER_DATA` QoS policy.

 Assigning a DDS DomainParticipant Entity to a Service Instance
  Status: DRAFT
  Upstream requirements: ,
⌈
One or more Service Instances enter a particular DDS Domain, as configured by <DDSServiceInstanceDomainID>, through DDS DomainParticipant Entities. Different Service Instances in the same address space and DDS Domain may share the same DDS DomainParticipant Entity, as long as they use the same DDS QoS Profile, as configured by <DDSServiceInstanceQosProfile>.

Before creating a new DDS DomainParticipant Entity, existing DDS DomainParticipant Entities in the current process that match the configuration criteria specified above shall be looked up.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 服务 Instance Discovery
*原文标题：Service Instance Discovery*

When instructed to discover Service Instances, the following operations have to be performed:

*  Finding a DDS DomainParticipant Entity suitable for performing client-side operations.
*  Discovering remote Service Instances in DDS DomainParticipant Entities.

 Finding a DDS DomainParticipant Entity suitable for performing client-side operations
  Status: DRAFT
  Upstream requirements: , ,
⌈
A DDS DomainParticipant Entity capable of discovering and communicating with other DDS DomainParticipant Entities shall be assigned for Service Instance Discovery:

* If an existing DDS DomainParticipant Entity exists in the same address space matching configured DDS Domain ID (<DDSServiceInstanceDomainID>) and QoS profile (<DDSServiceInstanceQosProfile>), it may be reused.
* A new DDS DomainParticipant Entity shall be created otherwise.

Please refer to  for additional details on creating/assigning DDS DomainParticipant Entity.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 服务 Discovery via Topic
*原文标题：Service Discovery via Topic*

### 30. 服务 Instance Advertising
*原文标题：Service Instance Advertising*

To advertise a Service Instance, the following operations have to be performed:

*  Assigning a DDS DomainParticipant Entity to a Service Instance.
*  Publishing the Service Interface Identifier, Service Instance Identifier, Service Interface Contract Versions and Resource Identifier Type over the ara.com://services/discovery DDS Topic.

 Assigning a DDS DomainParticipant Entity to a Service Instance
  Status: DRAFT
  Upstream requirements: , , ,
⌈
One or more Service Instances enter a particular DDS Domain, as configured by <DDSServiceInstanceDomainID>, through DDS DomainParticipant Entities. Different Service Instances in the same address space and DDS Domain may share the same DDS DomainParticipant Entity, as long as they use the same DDS QoS Profile, as configured by <DDSServiceInstanceQosProfile>.

Before creating a new DDS DomainParticipant Entity, existing DDS DomainParticipant Entities in the current process that match the configuration criteria specified above shall be looked up.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 服务 Instance Discovery
*原文标题：Service Instance Discovery*

When instructed to find remote Service Instances, the following operations have to be performed:

*  Finding a DDS DomainParticipant Entity suitable for performing client-side operations.
*  Discovering remote Service Instances in DDS DomainParticipant Entities.

 Finding a DDS DomainParticipant Entity suitable for performing client-side operations
  Status: DRAFT
  Upstream requirements: , ,
⌈
A DDS DomainParticipant Entity capable of discovering and communicating with other DDS DomainParticipant Entities shall be assigned for Service Instance Discovery:

* If an existing DDS DomainParticipant Entity exists in the same address space matching configured DDS Domain ID (<DDSServiceInstanceDomainID>) and QoS profile (<DDSServiceInstanceQosProfile>), it may be reused.
* A new DDS DomainParticipant Entity shall be created otherwise.

Please refer to  for additional details on creating/assigning DDS DomainParticipant Entity.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 配置 parameters
*原文标题：Configuration parameters*

This chapter lists all parameters the DDS Service Discovery protocol uses.

### 33. 服务 Discovery
*原文标题：Service Discovery*

| DDS Protocol Parameter | Description | AP Config | CP Config |
|---|---|---|---|
| <DDSServiceInterfaceID> | ID of the DDS Service Interface | DdsServiceInterfaceDeployment.serviceInterfaceId | - |
| <DDSServiceInstanceID> | ID of the DDS Service Instance | DdsProvidedServiceInstance.serviceInstanceId and DdsRequiredServiceInstance.requiredServiceInstanceId | - |
| <DDSServiceInstanceDomainID> | ID of the DDS Domain where a DDS Service Instance operates | DdsProvidedServiceInstance.domainId and DdsRequiredServiceInstance.domainId | - |
| <DDSInterfaceMajorVersion> | Major Version of the DDS Service Interface | ServiceInterface.majorVersion | - |
| <DDSInterfaceMinorVersion> | Minor Version of the DDS Service Interface | ServiceInterface.minorVersion | - |
| <DDSServiceInstanceQosProfile> | QoS Profile for all Methods and Field Methods within a specific DDS Service Instance | DdsRequiredServiceInstance.qosProfile | - |
| <DDSServiceInstanceDiscoveryType> | Discovery mechanism for DDS Service Instance | DdsProvidedServiceInstance.discoveryType and DdsRequiredServiceInstance.discoveryType | - |
| <DDSServiceInstanceRessourceIdentifierType> | Resource Identification scheme for DDS Service Instance | DdsProvidedServiceInstance.resource |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 协议 usage and 指南
*原文标题：Protocol usage and guidelines*

This section is intentionally left empty.

### 35. 附录
*原文标题：Appendix*

### 36. 附录
*原文标题：Appendix*

This section is intentionally left empty.

### 37. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 38. Traceable item history of this document according to AUTOSAR Release R25-11

### 39. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 40. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 41. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 42. Traceable item history of this document according to AUTOSAR Release R24-11

### 43. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

| Number | Heading |
|---|---|
| Assigning a DDS DomainParticipant Entity to a Service Instance |  |
| Adding Service Interface Identifier, Service Instance Identifier, and Service Interface Contract Versions to the DDS DomainParticipant's USER_DATA QoS Policy |  |
| Stoping advertisement of a Service Instance |  |
| Finding a DDS DomainParticipant Entity suitable for performing client-side operations |  |
| Discovering remote Service Instances in DDS DomainParticipant Entities |  |
| Defining a DDS BuiltinParticipantListener |  |
| Binding a BuiltinParticipantListener to a DDS DomainParticipant Entity |  |
| Unbinding a BuiltinParticipantListener from a DDS DomainParticipant Entity |  |
| Assigning a DDS DomainParticipant Entity to a Service Instance |  |
| Advertising Service Interface Identifier, Service Instance Identifier, and ServiceInterface Contract Versions and Resource Identifier Type over the ara.com://services/discovery DDS Topic |  |
| Stopping advertisement of a Service Instance |  |
| Finding a DDS DomainParticipant Entity suitable for performing client-side operations |  |
| Discovering remote Service Instances through the ara.com://services/discovery topic |  |
| Stopping asyncrhonous discovery of e Service Instances in DDS Doma |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 45. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none
