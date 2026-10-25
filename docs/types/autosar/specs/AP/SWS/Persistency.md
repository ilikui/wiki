# Specification of Persistency (`Persistency`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 858 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_Persistency_858\AUTOSAR_AP_SWS_Persistency.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_Persistency_858\AUTOSAR_AP_SWS_Persistency.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_Persistency_858\zzgen\AP_SWS_Persistency.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the Functional Cluster Persistency.

The Persistency Functional Cluster will be referenced as Persistency in the remainder of this document.

Persistency offers mechanisms to Adaptive Applications and other Functional Clusters to store information in the non-volatile memory of a machine. The data is available over boot and ignition cycles.

The Persistency will typically be implemented as a library that runs within a Process of an Adaptive Application, with the rights of that Process.

To avoid redundancy in the specification, in the remainder of this document, Adaptive Applications and Functional Clusters that use Persistency will be called Persistency users, while the term Adaptive Application will also be used to denote a Functional Cluster implemented as a Daemon, which is handled similarly to an Adaptive Application.

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and Functional Overview*

This specification describes the functionality, API and the configuration for the Functional Cluster Persistency.

The Persistency Functional Cluster will be referenced as Persistency in the remainder of this document.

Persistency offers mechanisms to Adaptive Applications and other Functional Clusters to store information in the non-volatile memory of a machine. The data is available over boot and ignition cycles.

The Persistency will typically be implemented as a library that runs within a Process of an Adaptive Application, with the rights of that Process.

To avoid redundancy in the specification, in the remainder of this document, Adaptive Applications and Functional Clusters that use Persistency will be called Persistency users, while the term Adaptive Application will also be used to denote a Functional Cluster implemented as a Daemon, which is handled similarly to an Adaptive Application.

### 2. 定义 of Acronyms and Abbreviations
*原文标题：Definition of Acronyms and Abbreviations*

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The table below contains all acronyms, abbreviations or initialisms that are component-specific and not available in the AUTOSAR glossary .

| Abbreviation | Description |
|---|---|
| FS | File Storage |
| KVS | Key-Value Storage |

The table below contains all document-independant acronyms or abbreviations that are defined in the AUTOSAR glossary .

| Acronym/ Abbreviation | Description |
|---|---|
| MAC | Message Authentication Code |

### 4. 定义 of Terms
*原文标题：Definition of Terms*

The table below contains all definitions of terms that are used in this document.

| Term | Description |
|---|---|
| Adaptive Application | Refers to the Adaptive Application defined in , or to a Functional Cluster implemented as a Daemon. |
| Adaptive Platform | Refers to the AUTOSAR Adaptive Platform defined in . |
| Adaptive Platform Foundation | Refers to the Adaptive Platform Foundation defined in . |
| Application Design | Refers to the Application Design defined in . Besides the Application Design, Persistency only uses the Target Configuration defined in . |
| Contract Version | This version identifies the structural layout of Persistency. The contract version is expected to change when storages are added, removed, or renamed, when their access mode changes, or when the available data types of a Key-Value Storage or the data types of storage elements change. |
| Daemon | Refers to a Functional Cluster implemented as a Daemon. |
| Element | Refers to either a key-value pair of a Key-Value Storage or a file of a File Storage. Used in the specification where something applies to all kinds of storage elements. |
| File | A binary or text file to be stored in a File Storage. |

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

The  between model elements in the  and the APMC model elements described in  is in some places misleading due to limitations of the document tooling, e.g. PersistencyFile.ElementUpdateStrategy.DELETE should actually only map to PersistencyElementLevelUpdateStrategyEnum.delete and not also to PersistencyCollectionLevelUpdateStrategyEnum.delete.

### 10. Assumptions about the Implementation of 持久化
*原文标题：Assumptions about the Implementation of Persistency*

Persistency can be implemented with different internal architectures, and at the same time, Persistency users expect a well defined behavior that is independent of the actual implementation of Persistency. Therefore, the specification in this document needs to be sufficiently generic to cover the underlying differences. As usual in AUTOSAR Adaptive, the actual implementation is not defined by the specification and is therefore entirely up to the vendor of Persistency.

The following subsections list some of the possible implementations of Persistency.

### 11. 库 Only
*原文标题：Library Only*

In this scenario, Persistency consists solely of a library. The Application Design is used to configure the compilation of the library, while the Target Configuration is transferred to a configuration file that is read by Persistency at run-time.

There is still some freedom regarding the storage of metadata and actual data, and regarding the points in time when elements of a storage are checked regarding redundancy or authenticity or when they are decrypted. E.g. the whole File Storage could be checked when it is opened or the single files could be checked when they are opened afterwards.

### 12. Using a Central Daemon

In this scenario, the Persistency library connects in the background to a daemon via some IPC mechanism. The Application Design influences again the compilation of the library part and the Target Configuration is transferred to configuration files for the library part and possibly also the daemon.

An implementer has the same freedom regarding data storage, encryption, and checks for redundancy and authenticity as in the last scenario. But an additional challenge is that the communication channel between library and daemon can be lost at any time, resulting in additional potential errors.

### 13. Based on a 文件系统
*原文标题：Based on a File System*

Both a library and a daemon can access a storage using the file system services of the operating system. In this case, because AUTOSAR Adaptive is based on POSIX, the file systems will be mounted with specific options that are out of control of the Persistency implementation, but influence the point in time when written data actually appears on the disc. These are further detailed in . Without following these advices, it might not be possible to guarantee synchronous behavior for calls like ara::per::KeyValueStorage::SyncToStorage or ara::per::WriteAccessor::SyncToFile.

### 14. Direct Access to Storage Hardware

Independently of whether a daemon is used or not, Persistency can be implemented to access hardware devices like flash memory directly. These devices have the intrinsic problem that the signal that can be read from each memory cell is reduced over time, mainly influenced by the number of write accesses. In the end, the cell will produce arbitrary values on each read access.

Unfortunately, the distribution of write accesses in typical systems is very uneven. Some parameters might be updated a few times a second, while some code may stay untouched for the whole life time of the ECU. To avoid early read errors, wear leveling should be deployed, such that frequent updates of single data elements are distributed over the whole memory area.

On the other hand, most operating systems include a file system or at least a flash driver that takes care of wear leveling, such that a typical implementation of the Persistency will not have to care about the wear leveling. This use case is therefore not described in any detail in this specification.

### 15. 对其他功能集群的依赖
*原文标题：Dependencies to Other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 16. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

 shows the Key-Value Storage interfaces provided by Persistency to other Functional Clusters within the AUTOSAR Adaptive Platform.

 shows the File Storage interfaces provided by Persistency to other Functional Clusters within the AUTOSAR Adaptive Platform.

 lists the interfaces provided to other Functional Clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| KeyValueStorageOperations | Remote Persistency | Used to access an underlying KeyValueStorage. |
| FileStorage | Diagnostic Management | Used to store associated data of diagnostic trouble codes (e.g., freeze frames). |
| ^ | Update and Configuration Management | Used to store files of received software packages. |
| ^ | Vehicle Update and Configuration Management | Used to store files of received vehicle packages. |
| KeyValueStorage | Diagnostic Management | Used to store properties of diagnostic trouble codes and diagnostic sessions. |
| ^ | Remote Persistency | Used to access an underlying KeyValueStorage. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

 shows the interfaces required by Persistency from other Functional Clusters within the AUTOSAR Adaptive Platform.

 lists the interfaces required from other Functional Clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Cryptography | CryptoStack | Used to ensure confidentiality and integrity of the persisted data. |
| Log and Trace | Logger | Used to provide information about errors and internal states and actions of Persistency. |

### 18. 持久化 Specifics
*原文标题：Persistency Specifics*

The Persistency is (at least partially) compiled as part of an Executable of an Adaptive Application, and therefore also executed as part of a Process, which creates an implicit dependency on the Execution Management (see ).

### 19. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in the  and the , and links to the fulfillments of these. Please note that if column "Satisfied by" is empty for a specific requirement, this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Public namespaces |  |  |
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Enumerator and constant names |  |  |
| Usage of ara::core types |  |  |
| Error reporting |  |  |
| Public types defined by functional clusters shall be designed to allow implementation without dynamic memory allocation |  |  |
| noexcept behavior of class destructors |  |  |
| Avoidance of shared ownership |  |  |
| Usage of string types |  |  |
| Connecting run-time interface with model |  |  |
| Return type of synchronous function calls |  |  |
| Usage of "final specifier" |  |  |
| Usage of out parameters |  |  |
| Use 32-bit integral types by default |  |  |
| Availability of a named constructor |  |  |
| Availability of special member functions |  |  |
| Classes whose construction requires interaction by the ARA framework |  |  |
| Classes that are created with an InstanceSpecifier as an argument are not copyable, but |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 功能规范
*原文标题：Functional Specification*

### 21. 持久化的The 架构
*原文标题：The Architecture of Persistency*

The Persistency offers two different mechanisms to access persistent memory: Key-Value Storages offer access to a set of keys with associated values (similar to a database), while File Storages offer access to a set of files (similar to a directory of a file system).

The typical usage of the Persistency within an Adaptive Application is depicted in . As shown there, an Adaptive Application can use a combination of multiple Key-Value Storages and multiple File Storages. Of course, the same applies to other Functional Clusters using Persistency.

Persistency can also be used directly by other Functional Clusters without involvement of the Adaptive Application. The library part of these Functional Clusters will use dedicated Target Configuration information of Persistency, while Daemons of Functional Clusters can be modeled similarly to Adaptive Applications.

### 22. 持久化的配置
*原文标题：Configuration of Persistency*

The usage of Persistency by an Adaptive Application is modeled in the Application Design as RPortPrototypes of the AdaptiveApplicationSwComponentTypes of an Executable which are typed by a PersistencyKeyValueStorageInterface or PersistencyFileStorageInterface. The Target Configuration (see ) is based on Persistency and is relevant both for Adaptive Applications and when the Persistency is accessed directly by another Functional Cluster.

The API specification holds the classes ara::per::KeyValueStorage and ara::per::FileStorage for access to a Key-Value Storage or a File Storage, respectively. The global functions of these classes receive either the identifier (the fully qualified shortName path) of an RPortPrototype typed by a PersistencyInterface, or the shortName path of a PersistencyKeyValueStorage or PersistencyFileStorage. These identifiers are then used as an ara::core::InstanceSpecifier input parameter (see ara::per::OpenKeyValueStorage and ara::per::OpenFileStorage). Depending on the RPortPrototype.requiredComSpec.accessMode or on the value of PersistencyCommon.FunctionalClusterPersistencyAccess, the Key-Value Storage or File Storage will be accessible as:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 配置 of Key-Value Storages
*原文标题：Configuration of Key-Value Storages*

Every Key-Value Storage is represented by a PersistencyKeyValueStorage in the Target Configuration, and, if accessed by the application, in addition by an RPortPrototype typed by a PersistencyKeyValueStorageInterface in the Application Design for the respective AdaptiveApplicationSwComponentType. Every Key-Value Storage can hold multiple key-value pairs. Key-value pairs can be added and removed at run-time by the Persistency user using the Persistency API (see ara::per::KeyValueStorage::SetValue and ara::per::KeyValueStorage::RemoveKey).

A Key-Value Storage with predefined key-value pairs can be deployed with default data during installation or update of an Adaptive Application. This operation is (indirectly) triggered by the Update and Configuration Management  during installation or update using the Target Configuration information and data provided by the software package of the Adaptive Application. See .

### 24. 文件 Storages的配置
*原文标题：Configuration of File Storages*

Every File Storage is represented by a PersistencyFileStorage in the Target Configuration, and, if accessed by the application, in addition by an RPortPrototype typed by a PersistencyFileStorageInterface in the application design for the respective AdaptiveApplicationSwComponentType. Every File Storage can hold multiple files as described in . Similar to the key-value pairs mentioned above, files can be created and deleted at run-time by the Persistency user using the Persistency API (see ara::per::FileStorage::OpenFileReadWrite / ara::per::FileStorage::OpenFileReadWrite / ara::per::FileStorage::OpenFileReadWrite, ara::per::FileStorage::OpenFileWriteOnly / ara::per::FileStorage::OpenFileWriteOnly / ara::per::FileStorage::OpenFileWriteOnly, and ara::per::FileStorage::DeleteFile).

A File Storage with predefined files with initial content can be deployed during installation or update. This operation is also (indirectly) triggered by the Update and Configuration Management . All needed Target Configuration information and files come with the software package of the Adaptive Application. See .

### 25. 持久化的通用 Features
*原文标题：General Features of Persistency*

Upstream requirements:
⌈
All specified classes within the Persistency shall reside within the C++ namespace ara::per.
⌋

### 26. 错误处理
*原文标题：Error Handling*

Error handling in Persistency is aligned with the guidelines described in . To this end, the Persistency has to implement a set of standard classes and APIs, which are described in this section.

  Upstream requirements:
⌈
Persistency shall use the error codes defined in ara::per::PerErrc to report problems to the calling Persistency user via ara::core::Result. Vendors of Persistency may add their own errors to ara::per::PerErrc, using codes above 255.
⌋

ara::per::PerErrc belongs to the ara::per::PerErrorDomain, which can be used by a Persistency user to classify returned errors.

  Upstream requirements:
⌈
ara::per::GetPerDomain shall return the global ara::per::PerErrorDomain object.
⌋

To create its own Persistency error codes, the Persistency user may use ara::per::MakeErrorCode.

  Upstream requirements:
⌈
ara::per::MakeErrorCode shall return an ara::core::ErrorCode when called with an error code from ara::per::PerErrc.
⌋

  Upstream requirements:
⌈
ara::per::PerErrorDomain::Name shall return the NUL-terminated string "Per".
⌋

  Upstream requirements:
⌈
ara::per::PerErrorDomain::Message shall return the error message associated with the passed ara::core::ErrorCode.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 通用错误的处理
*原文标题：Handling of General Errors*

Upstream requirements:
⌈
When a function or method of Persistency encounters a problem with the hardware or the underlaying operating system services during the access to a storage or an element of a storage, Persistency shall return the error kPhysicalStorageFailure.
⌋

When kPhysicalStorageFailure occurs, the Persistency user cannot access the affected storage any more. Depending on the system, a reboot might restore the access.

  Upstream requirements:
⌈
When a method of Persistency would modify the underlying storage, but the storage is configured as read-only, Persistency shall return the error kIllegalWriteAccess.
⌋

 Reporting kIllegalWriteAccess for write-only-once storages
  Upstream requirements:
⌈
When a method of Persistency would modify an existing element, but the storage is configured as write-only-once, Persistency shall return the error kIllegalWriteAccess.
⌋

  Upstream requirements:
⌈
When a function of Persistency is called with an ara::core::InstanceSpecifier that is not available in the Target Configuration, Persistency shall return the error kStorageNotFound.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Parallel Access to Persistent 数据
*原文标题：Parallel Access to Persistent Data*

According to , the persistent data is local to one Process. Therefore, Persistency will never share persistent data between two (or more) Processes, even of the same Executable. The background of this decision is that Persistency should not provide an additional communication path for Adaptive Applications besides the mechanisms provided by the Functional Cluster Communication Management (e.g. using ara::com).

  Upstream requirements:
⌈
Persistent data shall always be local to one Process.
⌋

If persistent data needs to be accessed by multiple Processes (of the same or different Adaptive Applications), it is the duty of the application designer to provide Service Interfaces for communication.

Persistency is, on the other hand, prepared to handle concurrent access from multiple threads of the same Adaptive Application, running in the context of the same Process. To create shared access to a Key-Value Storage or File Storage, either the ara::per::SharedHandle returned by ara::per::OpenKeyValueStorage and ara::per::OpenFileStorage can be passed on (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Security 概念
*原文标题：Security Concepts*

The Persistency supports protection of the authenticity and confidentiality of data stored in a Key-Value Storage or File Storage. Which kind of protection is applied and the used algorithms are decided during Target Configuration. The Persistency user is not aware of this fact.

If confidentiality of data shall be protected, a storage or an element of a storage are encrypted after the creation of the storage and when the storage is saved, and are decrypted when a storage is opened. Therefore, only encrypted data is stored persistently. In case of a read-only storage, encryption is done only once during installation, decryption is done every time the storage is opened. In case of a write-only-once storage, pre-installed elements are encrypted once during installation, and also all other elements are encrypted only once when they are created, while decryption is done every time the storage is opened.

If authenticity of data shall be protected, a message authentication code (MAC) is generated after the creation of a storage and when the storage is saved, and verified when the storage is opened. Therefore, unauthorized modifications to the storage can be detected.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Redundancy 概念
*原文标题：Redundancy Concepts*

The Persistency shall take care of the integrity of the stored data, both for safety purposes and to prevent data loss. This can be achieved by calculating CRCs or hash values of the stored data, and by creating redundant copies. All these measures effectively create some redundancy for the stored data. The concrete measures to be taken are configurable: The application designer can use PersistencyInterface.redundancy to request redundancy (by setting it to redundant or redundantPerElement), or use PersistencyInterface.redundancyHandling to preselect the actual measures to be taken. In the Target Configuration, the integrator can define the actual measures taken to ensure data integrity using PersistencyRedundancyHandlings. If PersistencyInterface.redundancyHandling is configured, the integrator shall use it as a guidance, but may also choose other, more appropriate measures based on superior knowledge of the final system.

  Upstream requirements: , ,
⌈
The Persistency shall store redundant information for every storage represented by PersistencyKeyValueStorage or PersistencyFileStorage where PersistencyRedundancyHandling is configured.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Redundancy 类型
*原文标题：Redundancy Types*

The type of redundancy that is applied by the Persistency is defined by the set of PersistencyRedundancyHandlings that are configured for a storage. The level to which redundancy is applied is defined by the possible values of the PersistencyRedundancyHandling.PersistencyRedundancyHandlingScope, which are `SCOPE_STORAGE` and `SCOPE_ELEMENT` for a Key-Value Storage and its key-value pairs, or a File Storage and its files, respectively.

  Upstream requirements: , ,
⌈
In case a PersistencyRedundancyHandling contains PersistencyRedundancyChecksum that in turn contains PersistencyRedundancyCrc, the Persistency shall calculate a CRC value when persisting the storage or an element of the storage (depending on PersistencyRedundancyHandling.PersistencyRedundancyHandlingScope), and shall use this CRC to check the storage or the element when it is read back.
⌋

  Upstream requirements: , ,
⌈
Persistency shall calculate the CRC value using the algorithm defined by PersistencyRedundancyChecksum.RedundancyChecksumAlgorithmFamily with the bit width defined by PersistencyRedundancyChecksum.RedundancyChecksumLength.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Installation and Update of Persistent 数据
*原文标题：Installation and Update of Persistent Data*

The Update and Configuration Management  handles the life cycle of Adaptive Applications with the following phases:

* Installation of new software
* Update of already installed software
* Finalization of updated software after the update succeeded
* Roll-back of updated software after the update failed
* Removal of installed software

For all these phases, persistent data needs to be handled alongside the Adaptive Application. The Adaptive Application may trigger this handling explicitly by calling ara::per::UpdatePersistency during the verification phase that follows the installation or update, or rely on the Persistency to do this implicitly when persistent data is accessed (ara::per::OpenKeyValueStorage/ara::per::OpenFileStorage). In both cases, the Persistency will compare a previously stored contract version and Target Configuration version against the contract version and Target Configuration version of the current Target Configuration, and perform the required action.

Persistency stores information about already installed storages together with version information in a central location.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Installation of Persistent 数据
*原文标题：Installation of Persistent Data*

Upstream requirements: ,
⌈
When a storage is opened by the Persistency user, the Persistency shall check for the existence of any persistent data of this Process. If no persistent data is found, the Persistency shall initialize the persistent data.
⌋

Initialization of persistent data is described in  and .

To be able to update Persistency with changed redundancy, Persistency stores the information about the used redundancy measures within the metadata of each storage. The same applies to the used keys and algorithms for encryption and authentication.

  Upstream requirements: , ,
⌈
When a new storage is installed, Persistency shall store the information about the used redundancy in the metadata of the storage.
⌋

  Upstream requirements: , ,
⌈
When a new storage is installed, Persistency shall store the information about keys and algorithms used for encryption and authentication in the metadata of the storage.
⌋

### 34. Installation of Key-Value Storage

Creation of Key-Value Storages for the Adaptive Application during Installation
  Upstream requirements: ,
⌈
Persistency shall create a Key-Value Storage for each RPortPrototype typed by a PersistencyKeyValueStorageInterface that is found in the Application Design of a newly installed Adaptive Application.
⌋

 Creation of Key-Value Storages for other Functional Clusters during Installation
  Upstream requirements: ,
⌈
Persistency shall create a Key-Value Storage for each PersistencyKeyValueStorage without PersistencyCommon.PortPrototypeInstanceRef that is found in the Target Configuration of a newly installed Adaptive Application.
⌋

The Key-Value Storages created by  are identified at run-time by the shortName path of the RPortPrototype, passed as ara::core::InstanceSpecifier to ara::per::OpenKeyValueStorage.

  Upstream requirements: ,
⌈
Persistency shall create an entry in the Key-Value Storage for each PersistencyKeyValueStorageInterface.dataElement and PersistencyKeyValuePair that is found in the Target Configuration of a newly installed or updated Adaptive Application, and for which the update strategy is not delete/DELETE.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Installation of 文件 Storage
*原文标题：Installation of File Storage*

Creation of File Storages for the Adaptive Application during Installation
  Upstream requirements: ,
⌈
Persistency shall create a File Storage for each RPortPrototype typed by a PersistencyFileStorageInterface that is found in the Application Design of a newly installed Adaptive Application.
⌋

 Creation of File Storages for other Functional Clusters during Installation
  Upstream requirements: ,
⌈
Persistency shall create a File Storage for each PersistencyFileStorage without PersistencyCommon.PortPrototypeInstanceRef that is found in the Target Configuration of a newly installed Adaptive Application.
⌋

The File Storages created by  are identified at run-time by the shortName path of the RPortPrototype, passed as ara::core::InstanceSpecifier to ara::per::OpenFileStorage.

  Upstream requirements: ,
⌈
Persistency shall create a file in the File Storage for each PersistencyFileStorageInterface.fileElement and PersistencyFile that is found in the Target Configuration of a newly installed or updated Adaptive Application, and for which the update strategy is not delete/DELETE.
⌋

The files within a File Storage are identified by their file name.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 186 章（内容从略，见纯文本全文）

36. Update of Persistent 数据
37. Update of Key-Value Storage
38. Update of 文件 Storage
39. Finalization of Persistent 数据 after Successful Update
40. Roll-Back of Persistent 数据 after Failed Update
41. Removal of Persistent 数据
42. Resource 管理概念
43. Key-Value Storage specific Features
44. Supported 数据类型 in Key-Value Storages
45. 文件 Storage specific Features
46. Access to Additional Information about Files
47. 功能性 Cluster Life-Cycle
48. 启动
49. 关机
50. Reporting
51. 安全事件
52. Log Messages
53. Log Messages with Details for all Reported 错误
54. Log Messages for Reported Redundancy Loss
55. Log Messages for Potentially Unexpected 行为
56. Log Messages for 状态 Changes
57. Log Messages for Storage Access
58. Log Messages for 同步
59. Log Messages for Information about Updates
60. Violation Messages
61. CalledWhileUnititialized
62. Production 错误
63. PER_E_HARDWARE
64. PER_E_INTEGRITY_FAILED
65. PER_E_LOSS_OF_REDUNDANCY
66. API 规范
67. PortInterface to API Class Binding
68. 持久化的通用 Features
69. ara：：核类型
70. Header：ara/per/file_accessor.h
71. Non-Member 类型
72. Class：FileAccessor
73. Public Member Functions
74. Special Member Functions
75. Member Functions
76. Header：ara/per/file_storage.h
77. Non-Member 类型
78. Non-Member Functions
79. Other
80. Struct：FileInfo
81. Public Member Variables
82. Class：FileStorage
83. Public Member Functions
84. Special Member Functions
85. Member Functions
86. Header：ara/per/key_value_storage.h
87. Non-Member Functions
88. Other
89. Class：KeyValueStorage
90. Public Member Functions
91. Special Member Functions
92. Member Functions
93. Header：ara/per/per_error_domain.h
94. Non-Member 类型
95. Non-Member Functions
96. Other
97. Class：PerErrorDomain
98. Public Member 类型
99. Public Member Functions
100. Special Member Functions
101. Member Functions
102. Class：PerException
103. Public Member Functions
104. Constructors
105. Header：ara/per/read_accessor.h
106. Class：ReadAccessor
107. Public Member Functions
108. Special Member Functions
109. Member Functions
110. Header：ara/per/read_write_accessor.h
111. Class：ReadWriteAccessor
112. Public Member Functions
113. Special Member Functions
114. Header：ara/per/recovery.h
115. Non-Member 类型
116. Non-Member Functions
117. Other
118. Header：ara/per/shared_handle.h
119. Class：SharedHandle
120. Public Member Functions
121. Special Member Functions
122. Member Functions
123. Header：ara/per/unique_handle.h
124. Class：UniqueHandle
125. Public Member Functions
126. Special Member Functions
127. Member Functions
128. Header：ara/per/update.h
129. Non-Member Functions
130. Other
131. Header：ara/per/write_accessor.h
132. Class：WriteAccessor
133. Public Member Functions
134. Special Member Functions
135. Member Functions
136. 服务接口
137. 配置
138. 配置规范
139. 通用配置
140. 文件 Storage
141. Key-Value Storage
142. Common 配置
143. CryptoKeySlot 配置
144. Logging
145. Redundancy
146. Correspondence Table
147. Default Values
148. Semantic Constraints
149. 附录
150. Mentioned 清单 Elements
151. Mentioned APMC Elements
152. Demands and Constraints on Base 软件 (normative)
153. Based on a 文件系统
154. Direct Access to Storage Hardware
155. Platform Extension 接口 (normative)
156. Not Implemented 需求
157. Change History of AUTOSAR Traceable Items
158. Traceable Item History of this Document According to AUTOSAR Release R26-11
159. Added 规范 Items in R26-11
160. Changed 规范 Items in R26-11
161. Deleted 规范 Items in R26-11
162. Added Constraints in R26-11
163. Changed Constraints in R26-11
164. Deleted Constraints in R26-11
165. Traceable Item History of this Document According to AUTOSAR Release R25-11
166. Added 规范 Items in R25-11
167. Changed 规范 Items in R25-11
168. Deleted 规范 Items in R25-11
169. Added Constraints in R25-11
170. Changed Constraints in R25-11
171. Deleted Constraints in R25-11
172. Traceable Item History of this Document According to AUTOSAR Release R24-11
173. Added 规范 Items in R24-11
174. Changed 规范 Items in R24-11
175. Deleted 规范 Items in R24-11
176. Added Constraints in R24-11
177. Changed Constraints in R24-11
178. Deleted Constraints in R24-11
179. Traceable Item History of this Document According to AUTOSAR Release R23-11
180. Added 规范 Items in R23-11
181. Changed 规范 Items in R23-11
182. Deleted 规范 Items in R23-11
183. Added Constraints in R23-11
184. Changed Constraints in R23-11
185. Deleted Constraints in R23-11
186. Traceable Item History of this Document According to AUTOSAR Release R22-11
187. Added 规范 Items in R22-11
188. Changed 规范 Items in R22-11
189. Deleted 规范 Items in R22-11
190. Traceable Item History of this Document According to AUTOSAR Release R21-11
191. Added 规范 Items in R21-11
192. Changed 规范 Items in R21-11
193. Deleted 规范 Items in R21-11
194. Traceable Item History of this Document According to AUTOSAR Release R20-11
195. Added 规范 Items in R20-11
196. Changed 规范 Items in R20-11
197. Deleted 规范 Items in R20-11
198. Traceable Item History of this Document According to AUTOSAR Release R19-11
199. Added 规范 Items in R19-11
200. Changed 规范 Items in R19-11
201. Deleted 规范 Items in R19-11
202. Traceable Item History of this Document According to AUTOSAR Release 19-03
203. Added 规范 Items in 19-03
204. Changed 规范 Items in 19-03
205. Deleted 规范 Items in 19-03
206. Traceable Item History of this Document According to AUTOSAR Release 18-10
207. Added 规范 Items in 18-10
208. Changed 规范 Items in 18-10
209. Deleted 规范 Items in 18-10
210. Traceable Item History of this Document According to AUTOSAR Release 18-03
211. Added 规范 Items in 18-03
212. Changed 规范 Items in 18-03
213. Deleted 规范 Items in 18-03
214. Traceable Item History of this Document According to AUTOSAR Release 17-10
215. Added 规范 Items in 17-10
216. Changed 规范 Items in 17-10
217. Deleted 规范 Items in 17-10
218. Traceable Item History of this Document According to AUTOSAR Release 17-03
219. Added 规范 Items in 17-03
220. Changed 规范 Items in 17-03
221. Deleted 规范 Items in 17-03
