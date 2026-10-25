# Specification of Remote Persistency (`RemotePersistency`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1099 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_RemotePersistency_1099\AUTOSAR_AP_SWS_RemotePersistency.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_RemotePersistency_1099\AUTOSAR_AP_SWS_RemotePersistency.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_RemotePersistency_1099\zzgen\AP_SWS_RemotePersistency.complete.txt`

## 文档简介

This document is the software specification of the vehicle service functional cluster Remote Persistency.

Remote Persistency offers mechanisms to Adaptive Applications to store information in non-volatile memory, which may be located on a different ECU than the one the Adaptive Application is running on. The data is available over boot and ignition cycles, and may be accessed by multiple different Adaptive Applications.

The Remote Persistency will typically be implemented as a daemon which may run on any ECU, and exposes underlying services of Persistency through service interfaces, with access mediated by IAM. This daemon would be represented by a GenericModuleInstantiation with category equal to `REMOTE_PERSISTENCY`.

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This document is the software specification of the vehicle service functional cluster Remote Persistency.

Remote Persistency offers mechanisms to Adaptive Applications to store information in non-volatile memory, which may be located on a different ECU than the one the Adaptive Application is running on. The data is available over boot and ignition cycles, and may be accessed by multiple different Adaptive Applications.

The Remote Persistency will typically be implemented as a daemon which may run on any ECU, and exposes underlying services of Persistency through service interfaces, with access mediated by IAM. This daemon would be represented by a GenericModuleInstantiation with category equal to `REMOTE_PERSISTENCY`.

### 2. 定义 of Acronyms and Abbreviations
*原文标题：Definition of Acronyms and Abbreviations*

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The table below contains all acronyms, abbreviations or initialisms that are component-specific and not available in the AUTOSAR glossary .

| Abbreviation | Description |
|---|---|
| IAM | Identity and Access Management |
| RDI | Remote Data Item |
| UCM | Update and Configuration Management |

### 4. 定义 of Terms
*原文标题：Definition of Terms*

The table below contains all definitions of terms that are used in this document.

| Term | Description |
|---|---|
| Adaptive Application | Refers to the Adaptive Application defined in . |
| Communication Management | Functional cluster that provides communication services to Adaptive Applications. See also . |
| File Storage | A simple file system without support for nested directories. |
| Functional Cluster | Refers to the Functional Cluster defined in . |
| Identity and Access Management | A sub-component of the functional cluster Communication Management which restricts access to specific service interfaces. |
| Key-Value Pair | An element of a Key-Value Storage. |
| Key-Value Storage | A simple data base for storing Key-Value Pairs. |
| Persistency | Functional cluster that provides access to non-volatile storage as Key-Value Storage or File Storage. See also . |
| Remote Data Item | An item of data, which can contain any basic or configurable (potentially structured) C++ type. It is stored as a Key-Value Pair in a Key-Value Storage of Persistency and accessible via ara::com. |
| Remote Persistency | The software defined in this specification. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related Documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input Documents & Related Standards and Norms*

### 7. Further Applicable Specifications

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 8. 约束与假设
*原文标题：Constraints and Assumptions*

### 9. 已知限制
*原文标题：Known Limitations*

* The service interface of Remote Persistency (see ) is in a preliminary state. It is currently not available as a blueprint like the service interfaces of other functional clusters.
* Remote Persistency does not support access to files. The feature of File Storages of the underlaying Persistency is not supported.

### 10. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 11. Provided 接口
*原文标题：Provided Interfaces*

This functional cluster does not provide any interfaces towards other functional clusters.

### 12. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

 shows the interfaces required by Remote Persistency from other Functional Clusters within the AUTOSAR Adaptive Platform.

 lists the interfaces required from other Functional Clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Persistency | KeyValueStorageOperations | Used to access an underlying KeyValueStorage. |
| Persistency | KeyValueStorage | Used to access an underlying KeyValueStorage. |

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and the , and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement, this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Configurable Layout of Remote Data Items |  |  |
| Initialization and Shutdown |  |  |
| Access to Persisted Remote Data Items |  |  |
| Installation and Update of Remote Data Items |  |  |

### 14. 功能规范
*原文标题：Functional Specification*

### 15. Remote 持久化的架构
*原文标题：Architecture of Remote Persistency*

Remote Persistency integrates Key-Value Storages and service interfaces to provide persistent storage of data items.

Remote Persistency uses an internal Key-Value Storage for each provided service interface. Each data item is represented by a field and uses a Key-Value Pair of the corresponding Key-Value Storage to store the data. The methods and fields of the provided service interface of Remote Persistency are described in , while the configuration is defined in . The remainder of this section describes the used model elements of the .

### 16. Remote 持久化的配置
*原文标题：Configuration of Remote Persistency*

Similar to functional clusters that are implemented as a daemon, Remote Persistency is represented by a Process that is linked to the Executable containing the code of Remote Persistency, and which is mapped to a Machine and a NonOsModuleInstantiation by the ProcessToMachineMapping. Remote Persistency uses the derived GenericModuleInstantiation, with category equal to `REMOTE_PERSISTENCY`.

Each Key-Value Storage of Remote Persistency is configured as an RPortPrototype typed by a PersistencyKeyValueStorageInterface, and is exposed via a corresponding PPortPrototype typed by a ServiceInterface. The two interfaces need to be matching, which is ensured by the rules described in .

### 17. 持久化接口
*原文标题：Persistency Interfaces*

The design time configuration of a Key-Value Storage of Remote Persistency is represented by the PersistencyKeyValueStorageInterface, while the data items are represented by aggregated PersistencyDataElements, which in turn are AutosarDataPrototypes typed by an AutosarDataType. Initial values can be configured at design time using PersistencyDataRequiredComSpecs that are aggregated by the same RPortPrototype. Each PersistencyDataRequiredComSpec refers to the corresponding PersistencyDataElement and aggregates a ValueSpecification.

The deployment configuration of each designed Key-Value Storage is represented by a PersistencyKeyValueStorage, which is mapped to the design time configured RPortPrototype and Process via a PersistencyPortPrototypeToKeyValueStorageMapping. For single data items, the deployment configuration consists of a PersistencyKeyValuePair which is aggregated by the PersistencyKeyValueStorage. PersistencyDataElements and PersistencyKeyValuePairs are linked by their shortName. Initial values can be configured (overwriting the design time configuration) by a ValueSpecification aggregated by the PersistencyKeyValuePair.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Communication 接口
*原文标题：Communication Interfaces*

The design time configuration of Remote Persistency contains a service interface for each Key-Value Storage. The ServiceInterface needs to provide the fields and methods described in .

Service interfaces are accessible as RemotePersistencyPort typed by RemotePersistency.

Fields for pre-configured PersistencyDataElement are configured as Field where all options (hasGetter, hasSetter, hasNotifier) are enabled. The Field needs to be typed by the same AutosarDataType as the corresponding PersistencyDataElement. They are accessible as DataElement of type ElementDataType.

Methods are configured as ClientServerOperations. The methods GetValue and SetValue need to be created for each AutosarDataType that is used to type a PersistencyDataElement, where the parameters value/value are ArgumentDataPrototypes typed by these AutosarDataType.

### 19. Access 控制
*原文标题：Access Control*

Access to the service interfaces of Remote Persistency is controlled via IAM, which is configured with the help of ComGrants, specifically ComFieldGrants and ComMethodGrants.

A ComFieldGrant references a specific field represented by a ServiceFieldDeployment via ComFieldGrant.serviceDeployment, and restricts the possible access via the FieldAccessEnum aggregated as ComFieldGrant.role to the remote entities identified by ComFieldGrant.remoteSubject.

Similarly, a ComMethodGrant references a specific method represented by a ServiceMethodDeployment via ComMethodGrant.serviceDeployment, and restricts the possible access to the remote entities identified by ComMethodGrant.ComGrant.remoteSubject.

### 20. Access to Remote 数据 Items
*原文标题：Access to Remote Data Items*

### 21. Access by Fields

The most straight-forward approach to access data items of Remote Persistency is through the field DataElement provided by the service interface RemotePersistency for each pre-configured Key-Value Pair.

 Reading a Field
  Upstream requirements:
⌈
When the getter of DataElement is called, the Remote Persistency shall call ara::per::KeyValueStorage::GetValue of the corresponding Key-Value Storage with the shortName of the corresponding PersistencyDataElement. When ara::per::KeyValueStorage::GetValue returns successfully, the getter shall return the received value, otherwise it shall return the value configured as FieldSenderComSpec.initValue.
⌋

 Writing a Field
  Upstream requirements: ,
⌈
When the setter of DataElement is called, the Remote Persistency shall call ara::per::KeyValueStorage::SetValue of the corresponding Key-Value Storage with the shortName of the corresponding PersistencyDataElement, and then the Key-Value Storage shall be synchronized using ara::per::KeyValueStorage::SyncToStorage.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Access by Methods

Using the provided methods of the service interface RemotePersistency, an application can exert more control over its remote data items. SetValue and GetValue allow for accessing existing and creating new data items, while the other methods allow for managing the storage.

 Getting a List of all Keys
  Upstream requirements:
⌈
When GetAllKeys is called, the Remote Persistency shall call ara::per::KeyValueStorage::GetAllKeys of the corresponding Key-Value Storage and shall return the list of keys returned by this call.

When ara::per::KeyValueStorage::GetAllKeys fails with any error, GetAllKeys shall return kStorageFailure instead.
⌋

 Checking for the Existence of a Key
  Upstream requirements:
⌈
When KeyExists is called, the Remote Persistency shall call ara::per::KeyValueStorage::KeyExists of the corresponding Key-Value Storage and shall return the value returned by this call.

When ara::per::KeyValueStorage::KeyExists fails with any error, KeyExists shall return kStorageFailure instead.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Update of Remote 数据 Items
*原文标题：Update of Remote Data Items*

Remote Persistency knows two entirely different ways how remote data items can be updated: Through selected applications or through UCM.

Updates by applications are done using the setters of fields (DataElement) and the SetValue methods of the service interfaces (RemotePersistency), while Remote Persistency uses IAM to configure protection for the write access to the service interfaces, so that only selected applications can change remote data items.

Updates through UCM are possible for the whole SoftwarePackage that contains the Remote Persistency or only for the target configuration. Both approaches can update and introduce remote data items, but only the update of the whole SoftwarePackage can add or remove fields or data types. Please refer to chapter 7.2.5 of  and to  (see  for configuration updates) for details.

### 24. 功能性 cluster life-cycle
*原文标题：Functional cluster life-cycle*

This section defines behavior of this functional cluster during its life-cycle. Please note that there is a general behavior for ara::core::Initialize and ara::core::Deinitialize defined in  by  and .

### 25. 启动
*原文标题：Startup*

Upon startup, Remote Persistency initializes the functional clusters and all fields, and starts offering the field's events for subscription.

 Initialize Functional Clusters
  Upstream requirements:
⌈
Remote Persistency shall initialize the used functional clusters by calling ara::core::Initialize at process startup before creating any threads.
⌋

 Open Key-Value Storages, Initialize Fields, and Start Events
  Upstream requirements:
⌈
After fulfilling , Remote Persistency shall open all configured Key-Value Storages by calling ara::per::OpenKeyValueStorage with the corresponding ara::core::InstanceSpecifier, set all fields to the values stored in the configured Key-Value Storages, register the setters and getters of all fields, and start offering the service for each Key-Value Storage.

When ara::per::OpenKeyValueStorage returns an error for any Key-Value Storage, Remote Persistency shall try to recover this Key-Value Storage, and if that also fails, it shall not offer the service for this Key-Value Storage.
⌋

### 26. 关机
*原文标题：Shutdown*

Upon shutdown, Remote Persistency de-initializes the functional clusters and stops offering the field's events.

 Stop Events and Close Key-Value Storages
  Upstream requirements:
⌈
When shutting down, Remote Persistency shall first stop offering the events of all fields and then close all Key-Value Storages by destructing the ara::per::SharedHandles.
⌋

 Deinitialize Functional Clusters
  Upstream requirements:
⌈
When shutting down, Remote Persistency shall de-initialize the used functional clusters by calling ara::core::Deinitialize after fulfilling  and after joining all threads.
⌋

### 27. Daemon Crash

When Remote Persistency is restarted after a crash (typically by PHM), it shall initialize itself again according to  and .

### 28. Reporting

### 29. 安全事件
*原文标题：Security Events*

This functional cluster does not define any security events.

### 30. Log Messages

This functional cluster does not define any non-verbose log messages (i.e., modelled DLT messages).

### 31. Violation Messages

This functional cluster does not define any violation messages (i.e., DLT messages logged for Violations according to ). Please note that concrete implementations might implement Non-Standardized Violations (see also ).

### 32. Production 错误
*原文标题：Production Errors*

This functional cluster does not define any production errors (i.e., Diagnostic Events).

### 33. API 规范
*原文标题：API Specification*

This functional cluster does not define any APIs.

### 34. 服务接口
*原文标题：Service Interfaces*

This chapter lists the service interfaces provided or required by this functional cluster.

### 35. Implementation 数据类型
*原文标题：Implementation Data Types*

Remote Persistency does not define any local implementation data types, it only uses implementation data types defined in the target configuration for the stored Remote Data Items. It is expected that the same implementation data types are referenced by the PersistencyKeyValueStorageInterface and the ServiceInterface (see ).

 Definition of ImplementationDataType ElementDataType_{type}
  Upstream requirements:
⌈
| Name | ElementDataType_{type} | < | < | < |
|---|---|---|---|---|
| Namespace | ara::rper | < | < | < |
| Kind | AutosarDataType | < | < | < |
| Derived from | - | < | < | < |
| Description | Any type {type} defined in the AP SWS Platform Types  or a type configured as CppImplementationDataType or ApplicationDataType. | < | < | < |
| Variation | {type} represents the shortName of an AutosarDataType that is represented by this implementation data type. | < | < | < |

⌋

 Definition of ImplementationDataType KeyNameType
  Upstream requirements:
⌈
| Name | KeyNameType | < | < | < |
|---|---|---|---|---|
| Namespace | ara::rper | < | < | < |
| Kind | STRING | < | < | < |
| Derived from | - | < | < | < |
| Description | Key name | < | < | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Provided 服务接口
*原文标题：Provided Service Interfaces*

Remote Persistency provides one interface for each Key-Value Storage that is configured for the underlying Persistency. This interface contains one field for each Key-Value Pair defined for the Key-Value Storage, and a set of generic methods to access the storage.

### 37. Provided Ports

Definition of Port RemotePersistencyPort_{port} provided by functional cluster RPer
  Upstream requirements:
⌈
| Name | RemotePersistencyPort_{port} | < | < |
|---|---|---|---|
| Kind | ProvidedPort | Interface | RemotePersistency |
| Description | Provided Port of Remote Persistency for a specific Key-Value Storage. | < | < |
| Variation | {port} represents the shortName of an RPortPrototype that is typed by a PersistencyKeyValueStorageInterface. | < | < |

⌋

### 38. Sender-Receiver 接口
*原文标题：Sender-Receiver Interfaces*

Remote Persistency does not define any sender-receiver interfaces.

### 39. Client-Server 接口
*原文标题：Client-Server Interfaces*

Definition of ServiceInterface RemotePersistency_{storage}
  Upstream requirements:
⌈
| Name | RemotePersistency_{storage} | < |
|---|---|---|
| Namespace | ara::rper | < |
| Version | 1.0 | < |
| Fields | DataElement | < |
| Methods | * GetValue |  |

* SetValue
* GetAllKeys
* KeyExists
* RemoveKey
| * RemoveAllKeys | < |  |
|---|---|---|
| Variation | {storage} represents the shortName of a PersistencyKeyValueStorageInterface. | < |

⌋

 Definition of Field RemotePersistency.DataElement_{entry}
  Upstream requirements:
⌈
| Field | DataElement_{entry} |
|---|---|
| Description | Field for accessing the configured Key-Value Pair {entry} with a value of type ElementDataType. |
| Version | 1.0 |
| Type | ElementDataType |
| HasGetter | true |
| HasNotifier | true |
| HasSetter | true |
| Enclosing Service Interface | RemotePersistency |
| Variation | {entry} represents the shortName of a PersistencyDataElement of the PersistencyKeyValueStorageInterface associated with this service interface. |

⌋

 Definition of Method RemotePersistency.GetValue_{type}
  Upstream requirements:
⌈
| Method | GetValue_{type} | < |
|---|---|---|
| Description | Read the value of a data item of type ElementDataType. | < |
| Version | 1.0 | < |
| FireAndForget | false | < |
| Parameter | key | < |
| ^ | Description | Key name. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Required 服务接口
*原文标题：Required Service Interfaces*

Remote Persistency does not require service interfaces.

### 41. Application 错误
*原文标题：Application Errors*

Definition of Application Error Domain of functional cluster RPer
  Upstream requirements:
⌈
| Name | Code | Description |
|---|---|---|
| kDataTypeMismatch | 1 | The GetValue or SetValue method does not match the stored data type. |
| kKeyNotFound | 2 | The provided key cannot be not found in the Key-Value Storage. |
| kKeyPreconfigured | 3 | The provided key cannot be removed from the Key-Value Storage because it represents a field. |
| kOutOfStorageSpace | 4 | The available storage space was exceeded by the value provided via SetValue. |
| kStorageFailure | 5 | An error occurred when accessing the Key-Value Storage, e.g. physical or logical corruption or redundancy or cryptographic errors. |

⌋

### 42. 配置
*原文标题：Configuration*

The configuration model of this functional cluster is defined in . This chapter defines the default values for attributes and semantic constraints for elements specified in  that are part of the configuration model of this functional cluster.

Remote Persistency is described by a GenericModuleInstantiation that relates to an AdaptiveApplicationSwComponentType with at least one RPortPrototype typed by a PersistencyKeyValueStorageInterface and at least one PPortPrototype typed by a ServiceInterface.

### 43. Default Values

This functional cluster does not define any default values for attributes specified in .

### 44. Semantic Constraints

This section defines semantic constraints for elements specified in  that are part of the configuration model of this functional cluster.

 Synchronicity of Interface
⌈
For every Key-Value Storage (represented by an RPortPrototype typed by a PersistencyKeyValueStorageInterface in the application design for the respective AdaptiveApplicationSwComponentType), there shall be a corresponding ServiceInterface (represented by an PPortPrototype in the application design for the respective AdaptiveApplicationSwComponentType), and vice versa.
⌋

 Type of PersistencyInterface
⌈
The accessMode of all configured Key-Value Storages shall be set to readWrite.
⌋

 Synchronicity of Data Types
⌈
For every PersistencyDataElement aggregated as dataElement by PersistencyKeyValueStorageInterface that is typed by an AutosarDataType, there shall be a Field aggregated as field by the corresponding ServiceInterface that is typed by the same AutosarDataType, and vice versa.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. 附录
*原文标题：Appendix*

### 46. Mentioned 清单 Elements
*原文标题：Mentioned Manifest Elements*

This chapter contains the remaining set of meta-class tables which are not shown directly in the main body of this document.

This chapter is generated.

| Class | AbstractPersistencyRequireComSpec (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class acts as a bas-class of persistency-related ComSpec classes. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, RPortComSpec | < | < | < |
| Subclasses | PersistencyDataRequiredComSpec, PersistencyFileRequiredComSpec | < | < | < |
| Aggregated by | AbstractRequiredPortPrototype.requiredComSpec, PortPrototypeBlueprint.requiredComSpec | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| accessMode | PersistencyAccessEnum | 0..1 | attr | This attribute controls how persistent data can be accessed. |

| Class | AdaptiveApplicationSwComponentType | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to support the formal modeling of application software on the AUTOSAR adaptive platform. Consequently, it shall only be used on the AUTOSAR adaptive platform. |  |  |  |

Tags: atp.recommendedPackage=AdaptiveApplicationSwComponentTypes

This Class is only used by the AUTOSAR Adaptive Platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Demands and Constraints on Base 软件 (normative)
*原文标题：Demands and Constraints on Base Software (normative)*

This functional cluster defines no demands or constraints for the Base Software on which the AUTOSAR Adaptive Platform is running on (usually a POSIX-compatible operating system).

### 48. Platform Extension 接口 (normative)
*原文标题：Platform Extension Interfaces (normative)*

This functional cluster does not specify any Platform Extension Interfaces.

### 49. Not Implemented 需求
*原文标题：Not Implemented Requirements*

This chapter lists all functional requirements specified in the corresponding requirement specifications that are not implemented or violated by this specification and provides a rationale.

 Requirements Not Applicable to this Specification
  Upstream requirements: , , , ,
⌈
These requirements are not applicable to this specification.
⌋

 Access Control Requirement Not Applicable to this Specification
  Upstream requirements:
⌈
This requirement needs to be fulfilled by the configuration of IAM.
⌋

For details on the configuration of IAM see .

### 50. Change History of AUTOSAR Traceable Items

This chapter provides an overview of the history of constraints and specification items. Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 51. Traceable Item History of this Document According to AUTOSAR Release R26-11

### 52. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 53. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

none

### 54. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

none

### 55. Added Constraints in R26-11

none

### 56. Changed Constraints in R26-11

none

### 57. Deleted Constraints in R26-11

none

### 58. Traceable Item History of this Document According to AUTOSAR Release R25-11

### 59. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

### 60. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 61. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 62. Added Constraints in R25-11

### 63. Changed Constraints in R25-11

none

### 64. Deleted Constraints in R25-11

none
