# Specification of Software Cluster Connection module (`SoftwareClusterConnection`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 974 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SoftwareClusterConnection_974\AUTOSAR_CP_SWS_SoftwareClusterConnection.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SoftwareClusterConnection_974\AUTOSAR_CP_SWS_SoftwareClusterConnection.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SoftwareClusterConnection_974\zzgen\CP_SWS_SoftwareClusterConnection.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module Software Cluster Connection.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

* Not all VFB communication features are supported
* The Proxy Modules are not specified for all BSW Services
* No run-time separation is defined

Additional limitations are described in document

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module Software Cluster Connection.

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Requirements on Software Cluster Connection that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| SwCluC | Software Cluster Connection |

| Terms: | Description: |
|---|---|
| Software Cluster | A Software Cluster groups all AUTOSAR artifacts that are relevant to deploy software on a machine. The full definition is given in document |
| Software Cluster Connection | The Software Cluster Connection is the BSW module that provides the features to |

* connect the Binary Objects deployed on the same machine
* substitute not locally-available BSW modules in an Application Software Cluster, whose interfaces are required for the integrated SW, by so called Proxy Modules.
* implement the VFB communication features between Software Clusters together with RTE by means of an RTE Implementation Plug-In
| machine | A machine consists of a set of computing resources - such as microcontroller cores, memory or peripheral (e.g. communication) devices - and has the ability to execute software applications. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 相关文档
*原文标题：Related documentation*

### 5. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Software Cluster Connection.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Software Cluster Connection.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

### 9. Limited 支持 for VFB communication features and BSW 模块
*原文标题：Limited Support for VFB communication features and BSW modules*

The specification currently supports a limited number of BSW modules. Furthermore, for the supported BSW modules, the functionality and APIs available for Application Software Clusters is only subset of the overall functionality. In addition, the available VFB communication features are restricted.

The supported VFB features are listed in .

### 10. Limited 支持 for RTE Events in Application 软件 Clusters
*原文标题：Limited Support for RTE Events in Application Software Clusters*

Due to limitations in the specification of the Cross Software Cluster Communication Plug-Ins in Section  and in document , as well as limitations in the functionality of Dispatchers in Section  (scheduling via periodic TimingEvent), the functionality is specified for only a subset of RTEEvents in Application Software Clusters . These are:

* TimingEvent
* InitEvent
* BackgroundEvent
* ExternalTriggerOccurredEvent
* SwcModeSwitchEvent
* DataReceivedEvent
* AsynchronousServerCallReturnsEvent
* OperationInvokedEvent

For all other kinds of RTEEvents, such as:

* DataReceiveErrorEvent
* DataSendCompletedEvent
* DataWriteCompletedEvent
* InternalTriggerOccurredEvent
* OsTaskExecutionEvent
* SwcModeManagerErrorEvent
* TransformerHardErrorEvent

the implementation is undefined by AUTOSAR.

### 11. 适用的车型领域
*原文标题：Applicability to car domains*

The specification focus on larger ECUs centralizing software functionality - so called domain or zone controllers. It assumes that the software components which are mapped to different Software Clusters are rather loosely coupled w.r.t. to interfaces and time domain. The software components supposed to implement mainly control loop software - usually time driven but may also react on limited numbers of sporadic events. Further information can be found in document .

### 12. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 13. Binary 清单
*原文标题：Binary Manifest*

### 14. 头文件结构
*原文标题：Header File structure*

Upstream requirements:
⌈
The Binary Manifest of the Software Cluster Connection shall provide the header file `SwCluC_BManif`.h.
⌋

  Upstream requirements:
⌈
The header file `SwCluC_BManif`.h shall include all header files configured in SwCluCBManifHeaderIncludes in the containers SwCluCBManifProvideResourceEntryGroup and SwCluCBManifRequireResourceEntryGroup.
⌋

### 15. Cross Cluster Communication

The Cross Cluster Communication of the Software Cluster Connection depends on the RTE .

### 16. Proxy 模块
*原文标题：Proxy Modules*

The SwCluC module has following dependencies for its sub-functionalities in the Proxy Modules:

Each Low Proxy Module depends on its specific BSW module

* Os Low Proxy depends on OS
* NvM Low Proxy depends on NvM
* Com Low Proxy depends on Com
* Dcm Low Proxy depends on Dcm
* Dem Low Proxy depends on Dem
* FiM Low Proxy depends on FiM

### 17. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , `SRS_SoftwareClusterConnection` and , `SRS_BSWGeneral` and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| The scheduling strategy that is built inside the Basic Software Modules shall be compatible with the strategy used in the system |  |  |
| API naming convention |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| Classification of development errors |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 功能规范
*原文标题：Functional specification*

### 19. Binary 清单
*原文标题：Binary Manifest*

### 20. 概述
*原文标题：Overview*

With the concept of Software Clusters, the overall software of an AUTOSAR Classic Platform Architecture can be split into smaller units. In such a clustered AUTOSAR Classic Platform Architecture a resource is used to describes any capability which

* is needed to operate the software in Software Clusters

  AND
* which is provided by one Software Cluster for another Software Clusters

Please note as well document  with its description about CpSoftwareClusterResources.

Each Software Cluster is an independent build unit, and the result of the cluster-specific build processes are the Binary Objects. The Binary Manifests provide the means to connect the Binary Objects that are deployed on the same machine. Hence, the Binary Manifest is the well-defined interface of the Software Cluster's Binary Object.

The Binary Manifest provides any information, which is required to access a resource inside a Software Cluster, and to connect provided and required resources of Software Clusters. A resource, in this context, can be anything that is required to operate the software. For example, a sender receiver interface of the Software Cluster or a NV block.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. a Binary 清单的Logical 结构
*原文标题：Logical structure of a Binary Manifest*

The Figure  provides an overview of the conceptual elements of the Binary Manifest necessary for a fictional example resource.

The Binary Manifest provides the ability to connect required and provided resources of Software Clusters. Each resource is qualified by a set of meta data, e.g.

* the unique identifier of the resource
* the type of the resource (e.g. a sender receiver communication or connection of NV blocks)
* the nature, whether a resource is required or provided by this Software Cluster
* in case of required resources, whether it is mandatory for the operation of the Software Cluster
* guarding information (e.g. hash values) to ensure that only compatible resources are getting connected
* the number of stored handles, and where those handles can be found in the the according tables

Each type of resource is qualified by the number of handles, their purpose for the connection, and the order in which they are placed in the Binary Manifest. The handles hold the information, which the Software Cluster requesting a resource needs to access it in the providing Software Cluster.

A single handle can be

* a data pointer
* a function pointer
* a value

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 映射 between Logical 结构 and 配置结构
*原文标题：Mapping between Logical structure and Configuration structure*

The logical structure shown in Figure  is also reflected in the configuration structure of the Binary Manifest.

The set of handles, relevant to connect one type of resource, is defined in the SwCluCBManifResourceType. A Resource Type is characterized by a defined set of Provide Handles and Notifier Handles, with specific types in a well defined order.

Handles can optionally exist. This is useful for resources which do not always need the full set of handles in all feature configurations. For instance, sender receiver communication works with or without sendIndication. Spending always a new resource type id (SwCluCBManifResourceTypeId) is not appropriate due to the limited numberspace! But the Resource Provider and Resource Requester have to have the same mutual understanding of the optionality conditions and both have to see a matching configuration to determine the identical handle configuration for a particular CpSoftwareClusterResource.

This is the prerequisite to enable the connection between Software Clusters.

Optional handles are always added after the non-optional ones!

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. a Binary 清单的Implementation 结构
*原文标题：Implementation structure of a Binary Manifest*

Usually, in AUTOSAR the implementation of BSW modules is not standardized. But the various data tables of the Binary Manifest implement an interface to Software Cluster connector algorithms. Therefore, the implemented layout and semantic of the tables is standardized in this document. Furthermore, an abstract set of requirements for such connector algorithms is defined in section .

The Figure  provides an overview about the individual tables of the Binary Manifest, and their main relationships.

### 24. Implementation 概述
*原文标题：Implementation Overview*

Each Software Cluster's Binary Manifest has a central entry point, called the Binary Manifest Header. It contains the AUTOSAR standardized meta data of a Software Cluster, and pointers to the sub tables (and their columns, as explained below) of the Binary Manifest. It is specified in .

Each row in the Interface Descriptor Table stores the properties of a single resource. For instance, the global resource Id. To avoid alignment gaps and padding bytes, which could occur if multiple elements are put in a structure, the table is not stored as an array of such a structure. Instead, the individual properties are organized in separate arrays. The individual arrays of the Interface Descriptor Table are required to have exactly the same number of elements and the identical order. In other words, these arrays can be seen as the columns of the Interface Descriptor Table and the identical index denotes the table row. Each row describes one resource. It is specified in .

Each of these resources can now use a dedicated number of handles in the offered and / or subscribed handle tables.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 多 Notifier Sets 简介
*原文标题：Multiple Notifier Sets Introduction*

To support 1:n connections that require individual notifications of the requesters, the Binary Manifest supports the storage of multiple Notifier Handle Sets. In this case, the SubscribedInterfaceNoOfHandleSets field describes how many handles sets of other Software Clusters can be connected. Please note that the value 0 means that only a single connection is supported. 1..n means multiple connections are possible. If this is selected, the first handle entry is used to store the actual number of connected Software Clusters - similar to a dynamic length array. With this handling, it possible to preserve the `MULTIPLE_NOTIFIER_SETS` semantic for a Binary Manifest user, even if only at most one connection is supported.

It is also possible to connect interfaces that require more than one handle per connection. The number of handles per connection is not stored in the Binary Manifest, but if it is required, it can be calculated as (SubscribedInterfaceNoOfHandles -1) / SubscribedInterfaceNoOfHandleSets.

As an example, in figure , the resource with id 0x500 (marked blue) has 3 handle sets (the entry in the column SubscribedInterfaceNoOfHandleSets is set to 3).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Binary 清单 Header
*原文标题：Binary Manifest Header*

Upstream requirements: , , ,
⌈
The Binary Manifest of the Software Cluster Connection shall provide exactly one instance of the Binary Manifest Header

const `SwCluC_BManif_HeaderType` `SwCluC_BManif_Header` =
	{ <initialization> };
⌋

  Upstream requirements:
⌈
The header file `SwCluC_BManif`.h shall export the declaration of the Binary Manifest Header

extern const `SwCluC_BManif_HeaderType` `SwCluC_BManif_Header`;
⌋

  Upstream requirements: , , ,
⌈
The element Preamble of the Binary Manifest Header shall be set to the value 0x41524350464C4558.
⌋

Note: The purpose of the Preamble is to serve as an obvious marker of the Binary Manifest's begin in memory. In addition, the value is chosen so that byte and word order can be detected, when the Binary Manifest is read in a byte stream or from a Binary Object file.

  Upstream requirements: , , ,
⌈
The element ManifestMajorVersion of the Binary Manifest Header shall be set to the value 0x01.
⌋

  Upstream requirements: , , ,
⌈
The element ManifestMinorVersion of the Binary Manifest Header shall be set to the value 0x01.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 接口 Descriptor Table
*原文标题：Interface Descriptor Table*

Upstream requirements: , , , , , ,
⌈
If the SwCluCBManifDescriptorTreatment is set to `EMBED_DESCRIPTORS` the Binary Manifest of the Software Cluster Connection shall provide exactly one instance of the Interface Descriptor Table composed out of the following column arrays:

/* descriptor table column for resource properties  */
const `SwCluC_BManif_ResourcePropertiesType` SwCluC_BManif_ResourcePropertiesDescriptorColumn = { <initialization> };

/* descriptor table column for resource type Ids  */
const `SwCluC_BManif_ResourceTypeIdType` `SwCluC_BManif_ResourceTypeIdDescriptorColumn` = { <initialization> };

/* descriptor table column for global resource Ids  */
const `SwCluC_BManif_GlobalResourceIdType` `SwCluC_BManif_GlobalResourceIdDescriptorColumn` = { <initialization> };

/* descriptor table column for guard values */
const `SwCluC_BManif_ResourceGuardValueType` SwCluC_BManif_ResourceGuardValueDescriptorColumn = { <initialization> };

/* descriptor table column for offered interface table index */
const `SwCluC_BManif_TableIndexType` SwCluC_BManif_OfferedInterfaceIndexDescriptorColumn = { <initialization> };

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Offered 接口 Table
*原文标题：Offered Interface Table*

Upstream requirements: , ,
⌈
The Binary Manifest of the Software Cluster Connection shall provide exactly one instance of the Offered Interface Handle Column

const `SwCluC_BManif_HandleType` `SwCluC_BManif_OfferedInterfaceHandleColumn` = { <initialization> };
⌋

  Upstream requirements: , , ,
⌈
The Binary Manifest of the Software Cluster Connection shall allocate and initialize the number of handles in the Offered Interface according to .
⌋

### 29. Subscribed 接口 Table
*原文标题：Subscribed Interface Table*

Upstream requirements: , , , ,
⌈
The Binary Manifest of the Software Cluster Connection shall provide exactly one instance of the Subscribed Interface Default Handle Column

const `SwCluC_BManif_HandleType` SwCluC_BManif_SubscribedInterfaceDefaultHandleColumn = { <initialization> };
⌋

  Upstream requirements: , , ,
⌈
The Binary Manifest of the Software Cluster Connection shall allocate and initialize the number of handles in the Subscribed Interface Default Handle Column according to .
⌋

  Upstream requirements: , , ,
⌈
The Binary Manifest of the Software Cluster Connection shall provide exactly one instance of the Subscribed Interface Handle Column

const  `SwCluC_BManif_HandleType` `SwCluC_BManif_SubscribedInterfaceHandleColumn` = { <initialization> };
⌋

  Upstream requirements: , , ,
⌈
The Binary Manifest of the Software Cluster Connection shall allocate and initialize the number of handles in the Subscribed Interface Handle Column according to .
⌋

  Upstream requirements: , , , , ,
⌈
The Binary Manifest of the Software Cluster Connection shall provide exactly one instance of the Subscribed Interface Connected SwClusterId Column

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Administrative 数据
*原文标题：Administrative Data*

### 31. Immutable Tables Checksum

The Immutable Tables Checksum is built over all those constants of the Binary Manifest that are not changed by the Software Cluster connection step.

This includes

* the Binary Manifest Header
* all arrays of the Interface Descriptor Table
* all arrays of the Offered Interface
* the Subscribed Interface Default Handle Column

The checksum is created as part of the software build.

  Upstream requirements: ,
⌈
The Binary Manifest of the Software Cluster Connection shall provide exactly one instance of the Immutable Tables Checksum

const uint32 `SwCluC_BManif_ImmutableTablesChecksum` = <initialization>;
⌋

  Upstream requirements: ,
⌈
The Immutable Tables Checksum shall be set to the value of the configuration parameter SwCluCBManifImmutableTablesChecksum.
⌋

  Upstream requirements: ,
⌈
The Immutable Tables Checksum shall be calculated on the binary representation in memory of the immutable memory area (inclusive reserved memory space) in ascending order of memory address as CRC32 according to 32-bit Ethernet CRC Calculation as described in document .
⌋

### 32. Subscribed 接口 Validity Marker
*原文标题：Subscribed Interface Validity Marker*

The Subscribed Interface Validity Marker indicates that all subscribed tables are written after the Software Cluster connection step. It needs to be set to the valid value after the Software Cluster connection step. The invalid /valid values are not standardized, since those values need to be chosen according to the flash technology storing the Binary Manifest.

  Upstream requirements: ,
⌈
The Binary Manifest of the Software Cluster Connection shall provide exactly one instance of the Subscribed Interface Validity Marker

const uint32 `SwCluC_BManif_SubscribedInterfaceValidityMarker` = <initialization>;
⌋

  Upstream requirements: ,
⌈
Initially the Subscribed Interface Validity Marker shall be set to the value of the configuration parameter SwCluCBManifSubscribedInterfaceValidityMarker.
⌋

  Upstream requirements: ,
⌈
After a completed connection process, the Subscribed Interface Validity Marker shall be set to the value 0xFFA5A500.
⌋

### 33. 存储映射
*原文标题：Memory Mapping*

Upstream requirements: , ,
⌈
The Binary Manifest of the Software Cluster Connection shall use the <feature> = BMANIF according to  of document .
⌋

  Upstream requirements: , ,
⌈
The Binary Manifest of the Software Cluster Connection shall map the Binary Manifest Header to a constant, 32 bit aligned memory section named `CONST_IMMUTABLE_HEADER_32`.

The optional name part  shall be set according .
⌋

  Upstream requirements: , ,
⌈
The Binary Manifest of the Software Cluster Connection shall map the immutable columns of all tables to a constant, 32 bit aligned memory section named `CONST_IMMUTABLE_COLUMNS_32`.

The optional name part  shall be set according .

The immutable columns are:

* all columns of the Interface Descriptor Table
* Offered Interface Handle Column
* Subscribed Interface Default Handle Column
⌋

 = ...;

  ...

  const `SwCluC_BManif_HandleType` SwCluC_BManif_SubscribedInterfaceDefaultHandleColumn = ...;

  #define SWCLUC_BMANIF_STOP_SEC_CONST_IMMUTABLE_COLUMNS_ASIL_D_32
  #include "`SwCluC_MemMap`.h"
]

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Connecting 软件 Clusters
*原文标题：Connecting Software Clusters*

### 35. 概述
*原文标题：Overview*

The AUTOSAR Methodology supports two different approaches to connect the Binary Objects of the different Software Clusters.

* The Software Clusters are connected after the individual and unconnected Binary Objects are programmed on the target ECU, here called On-board.
* The Software Clusters are connected before the Binary Objects are programmed on the target ECU outside the target machine, here called Off-board.

In the On-board case, the On-board Software Cluster Connector is a software, which is executed on the target ECU during the reprogramming phase. After reprogramming one or more unconnected Binary Objects, the Software Cluster Connector stores the connection result into the modifiable area of the Subscribed Interface of the Binary Manifest.

Please note: The design of the Binary Manifest assumes that a connection phase might get aborted at any point in time (e.g. power loss), and a restart or recovery of the connection phase should be supported.

In the Off-board case, the Off-board Software Cluster Connector is a tool, which is used to read the files of the Binary Objects, and to store the result of the connection in files.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Connecting Resources

Upstream requirements: ,
⌈
The Software Cluster Connector shall connect a required resource with a provided resource, if all of the following conditions are fulfilled:

* the machine Id of the Software Cluster providing the resource and the machine Id of the Software Cluster(s) requesting the resource are identical
* the global resource Id of provided resource and required resource(s) are equal
* the global resource Id is not 0
* the resource type Id of provided resource and required resource is equal
* the guard value of provided resource and required resource is equal
* the number of Provide Handles of provided resource and required resource is equal
* the number of Notifier Handles of provided resource and required resource is equal
* in case Notifier Handles exist, the provided resource has a Notifier Handle Sets available for the required resource
⌋

Note: The global resource Id = 0 is reserved to indicate the absence of a valid Id. The Software Cluster Connector shall only connect if the global resource Id != 0.

### 37. the Substitution 软件 Cluster的处理
*原文标题：Handling of the Substitution Software Cluster*

The purpose of the Substitution Software Cluster is to temporarily overwrite the output of a Software Cluster for development purposes. For instance, if a sender receiver signal 'Y' of Software Cluster A does not have the right functional behavior, it is possible to add a Substitution Software Cluster which provides a fixed version of sender receiver signal 'Y'. The fixed version of sender receiver signal 'Y' is provided with the identical global resource Id. In such a case, all Software Clusters requiring the sender receiver signal 'Y' are getting connected to the Substitution Software Cluster instead of the original providing Software Cluster. If the Substitution Software Cluster additionally requires the sender receiver signal 'Y', it gets connected to the original providing Software Cluster. With this principle, it is possible to take the original version of the signal as a basis for the overwriting one.

The utilization of a Substitution Software Cluster is only intended for development purposes, and not supported in productive systems.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. 多 Notifier Sets
*原文标题：Multiple Notifier Sets*

Note: A provided resource can optionally have the ability to handle multiple notifier sets. In this case, the number of handle sets in the Interface Descriptor Table indicates how many handle sets the Software Cluster Connector can register at most. The first handle in the Subscribed Interface Handle Column provides the number of actual registered Notifier Handle Sets. The subsequent handles in the Subscribed Interface Handle Column are store N sets of handles in a consecutive order. The order of the different handle sets written by the Software Cluster Connector are determined by the Software Cluster Id.

  Upstream requirements:
⌈
In case the provided resource supports multiple Notifier Handle Sets, the Software Cluster Connector shall sort the Notifier Handle Sets in ascending order of Software Cluster Id of the according required resource(s), and place them in the Subscribed Interface Handle Column of the providing Software Cluster, starting at the second handle.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Unconnected Resources

Upstream requirements:
⌈
The Software Cluster Connector shall copy the Subscribed Interface Default Handle Column entries to the Subscribed Interface Handle Column, and set the related entries in the Subscribed Interface Connected SwClusterId Column to `SWCLUC_BMANIF_UNCONNECTED` for

* all Provide Handles of any required resources, for which no connect was applied

  AND
* all Notifier Handles of any provided resources, for which no connect was applied
⌋

### 40. Disabling of the On-board 软件 Cluster Connection
*原文标题：Disabling of the On-board Software Cluster Connection*

In general, it is possible that an ECU is equipped with an On-board Software Cluster Connector but this connector should not be used or shall only be used on specific machines.

One reason to do so is a configuration where the software on one machine requires a certification applied on the whole machine's software whereas the software on the other machine can be updated cluster-wise.

For example, such a configuration uses two machines on the same microcontroller, here called Machine A and Machine B.

Machine A needs a certification, which is only granted for the whole software on the machine. Nevertheless, the software is developed by multiple parties, with the means of Software Clusters. The Software Clusters still needs to be connected, which is done with the Off-board Software Cluster Connector before the certification is done.

For Machine B, this restriction does not apply. Here, the On-board Software Cluster Connector shall be used to do some in-field partial updates which requires a working On-board Software Cluster Connector.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 错误 during 软件 cluster connection
*原文标题：Errors during software cluster connection*

In some cases, the information inside the Binary Manifests might be incompatible with the cluster connector, be incomplete or inconsistent. For example, reading a Binary Manifest, which is structurally incompatible to the Software Cluster Connector's implementation, may have completely undefined results. This section lists a set of conditions that lead to an abort of the connection process.

The behavior of the system after an abort is currently not specified. The implementation of recovery mechanisms is advisable.

  Upstream requirements:
⌈
The Software Cluster Connector shall detect, if the ManifestMajorVersion and ManifestMinorVersion numbers given in the Binary Manifest Header are compatible to the Software Cluster Connector's implementation. In case of any incompatible version number, the connection process for this specific machine shall be aborted.
⌋

If the Software Cluster Ids are not unique on the same machine, the Subscribed Interface Connected SwClusterId Column cannot be set unambiguous:

  Upstream requirements:
⌈
The Software Cluster Connector shall detect, if the Software Cluster Ids of all Software Clusters belonging to same machine are not unique.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. 软件 Cluster Binary 清单 Descriptor
*原文标题：Software Cluster Binary Manifest Descriptor*

The Software Cluster Binary Manifest Descriptor describes the Binary Manifest in the Binary Object. This is mandatory for Off-board connection, but also supporting the On-board connection, since it enables to apply checks outside the target ECU.

  Upstream requirements: , ,
⌈
The Binary Manifest of the Software Cluster Connection shall provide one instance of the CpSoftwareClusterBinaryManifestDescriptor, which holds the description of the generated Binary Manifest. This includes

* the cpSoftwareCluster reference to the given CpSoftwareCluster
* the softwareClusterId of the given CpSoftwareCluster
* the metaDataFields for `IMMUTABLE_TABLES_CHECKSUM` and `SUBSCRIBED_INTERFACE_VALIDITY_MARKER`
* a provideResources for each Provide Resource Entry
* a requireResources for each Require Resource Entry
* a resourceDefinitions for each Resource Type
⌋

### 其余 637 章（内容从略，见纯文本全文）

43. 错误分类
44. Development 错误
45. Runtime 错误
46. Production 错误
47. Extended Production 错误
48. 软件 Cluster Base 配置 Check
49. Cross Cluster Communication
50. 概述
51. 通用需求
52. Cross 软件 Cluster Communication Plug-In
53. Cross Cluster Communication and Binary 清单
54. Guard value calculation for 数据 Communication Graphs
55. Guard value calculation for Client Server Communication Graphs
56. Guard value calculation for 模式 Communication Graphs
57. Guard value calculation for Trigger Communication Graphs
58. Guard value calculation for DataPrototypes
59. Cross Cluster Communication Base Socket
60. Cross Cluster Communication and McSupport 数据
61. Sender Receiver Communication
62. Restrictions on VFB communication features
63. 数据 Concistency
64. Transmission
65. Reception
66. NvData communication
67. Restrictions on VFB communication features
68. Client Server Communication
69. 通用
70. Timeout
71. 调度 of main functions
72. 缓冲
73. Response to Request 映射
74. Client Side
75. Server Side
76. Modes Communication
77. 通用 principles
78. 软件 Cluster providing a 模式
79. Host 软件 Cluster requiring a 模式
80. Application 软件 Cluster requiring a 模式
81. 初始化
82. Trigger Communication
83. 通用 principles
84. 软件 Cluster providing a trigger
85. Host 软件 Cluster requiring a trigger
86. Application 软件 Cluster requiring a trigger
87. Parameter Communication
88. 错误分类
89. Development 错误
90. Runtime 错误
91. Production 错误
92. Extended Production 错误
93. 初始化 of Xcc
94. Proxy 模块
95. 概述
96. 抽象 Proxy 模块 Pattern
97. 通用 Proxy functionality
98. 分区
99. Unconnected 服务 Resources
100. Ecu 配置 Principles
101. Proxy 模块 and Binary 清单
102. Proxy 模块 and Base Sockets
103. Specific Proxy 模块需求
104. OS Proxy
105. Enable OS Proxy Generation
106. 概述 OS Proxy functionality
107. 通用需求
108. OS High Proxy
109. OS Low Proxy
110. NvM Proxy
111. Enable NvM Proxy Generation
112. 通用 NvM Proxy functionality
113. 配置 ID check
114. NvM High Proxy
115. NvM Low Proxy
116. 错误检测
117. Com Proxy
118. 通用 Com Proxy functionality
119. Enable Com Proxy Generation
120. Com High Proxy
121. Com Low Proxy
122. ComSignals / ComSignalGroups based proxy 处理
123. 通用需求
124. Com High Proxy
125. Com Low Proxy
126. ComIPdu based proxy 处理
127. 通用需求
128. Com High Proxy
129. Callback Functions
130. Com Low Proxy
131. 错误检测
132. Dcm Proxy
133. Enable Dcm Proxy Generation
134. Dcm High Proxy
135. 诊断数据 proxy
136. Routine 控制 proxy
137. 服务 Request 通知 proxy
138. Dcm Low Proxy
139. 诊断数据 proxy
140. Routine 控制 proxy
141. 服务 Request 通知 proxy
142. 多分区
143. Dem Proxy
144. Enable Dem Proxy Generation
145. Dem High Proxy
146. Dem High Proxy C-API
147. Callback Functions
148. 服务 Ports
149. Binary 清单
150. unconnected 诊断 Events的处理
151. Dem Low Proxy
152. Binary 清单
153. unconnected 诊断 Events的处理
154. FiM Proxy
155. Enable FiM Proxy Generation
156. FiM High Proxy
157. FiM High Proxy C-API
158. 服务 Ports
159. unconnected 功能 Inhibition的处理
160. Binary 清单
161. FiM Low Proxy
162. Binary 清单
163. 错误分类
164. Development 错误
165. Runtime 错误
166. Production 错误
167. Extended Production 错误
168. Standardized 服务 Resources
169. 软件 Cluster Base 配置 Check
170. Cross Cluster Communication
171. OS Proxy
172. NvM Proxy
173. Com Proxy
174. Dcm Proxy
175. Dem Proxy
176. FiM Proxy
177. WdgM
178. Common Functions
179. 错误分类
180. Development 错误
181. API 规范
182. Imported 类型
183. 类型定义
184. Binary 清单
185. SwCluC_BManif_SwClusterIdType
186. SwCluC_BManif_MachineIdType
187. SwCluC_BManif_ConCtrlType
188. SwCluC_BManif_ResourcePropertiesType
189. SwCluC_BManif_ResourceTypeIdType
190. SwCluC_BManif_GlobalResourceIdType
191. SwCluC_BManif_ResourceGuardValueType
192. SwCluC_BManif_TableIndexType
193. SwCluC_BManif_HandleIndexType
194. SwCluC_BManif_VoidFncPtrType
195. SwCluC_BManif_HandleType
196. SwCluC_BManif_HeaderType
197. Cross Cluster Communication
198. ProxyModules
199. 功能定义
200. BinaryManifest
201. API Principles
202. Named versus indexed 句柄 access
203. Implementation aspects
204. SwCluC_BManif_GetHandle
205. SwCluC_BManif_GetHandle
206. SwCluC_BManif_GetConSwClusterId
207. SwCluC_BManif_GetConSwClusterId
208. SwCluC_BManif_GetNoOfHandleSets
209. SwCluC_BManif_GetNoOfHandleSets
210. SwCluC_BManif_GetValidityMarker
211. SWCLUC_BMANIF_NO_OF_ENTRIES
212. SWCLUC_BMANIF_NO_OF_NOTIFIER_SETS
213. Cross Cluster Communication
214. SwCluC_Xcc_Init1
215. SwCluC_Xcc_Init2
216. Proxy 模块
217. SwCluC_OsProxy_Init
218. SwCluC_NvMProxy_Init
219. SwCluC_NvMProxy_MultiBlockReadAllJobFinished
220. SwCluC_ComProxy_Init
221. SwCluC_DcmProxy_Init
222. SwCluC_DemProxy_Init
223. SwCluC_FiMProxy_Init
224. Common Functions
225. Callback 通知
226. Binary 清单
227. Cross Cluster Communication
228. Proxy 模块
229. Com Proxy
230. Callback APIs to 句柄 ComSignals / ComSignalGroups
231. SwCluC_ComProxy_CbkRxAck
232. SwCluC_ComProxy_CbkInv
233. SwCluC_ComProxy_CbkRxTOut
234. SwCluC_ComProxy_CbkTxAck
235. SwCluC_ComProxy_CbkTxErr
236. SwCluC_ComProxy_CbkTxTOut
237. Callback APIs to 句柄 ComIPdus
238. SwCluC_ComProxy_ComCbkCopyRxData
239. SwCluC_ComProxy_ComCbkCopyTxData
240. SwCluC_ComProxy_ComCbkRxIndication
241. SwCluC_ComProxy_ComCbkStartOfReception
242. SwCluC_ComProxy_ComCbkTpRxIndication
243. SwCluC_ComProxy_ComCbkTriggerTransmit
244. SwCluC_ComProxy_ComCbkTxConfirmation
245. SwCluC_ComProxy_ComCbkTpTxConfirmation
246. Scheduled functions
247. Binary 清单
248. Cross Cluster Communication Scheduled functions
249. SwCluC_Xcc_MainFunction
250. Proxy 模块 Scheduled functions
251. Expected 接口
252. Mandatory 接口
253. Binary 清单
254. Cross Cluster Communication
255. Proxy 模块
256. Optional 接口
257. Binary 清单
258. Cross Cluster Communication
259. Proxy 模块
260. Configurable 接口
261. Binary 清单
262. Cross Cluster Communication
263. Proxy 模块
264. 服务接口
265. Binary 清单
266. Cross Cluster Communication
267. Proxy 模块
268. 时序图
269. 配置规范
270. How to read this chapter
271. Containers and 配置 parameters
272. 模块配置
273. 通用配置 parameters
274. 软件 Cluster 定义
275. 软件 Cluster Base 配置 Check
276. Binary 清单
277. Provide Resource Entry Group
278. Provide Resource Entry
279. Require Resource Entry Group
280. Require Resource Entry
281. Resource 类型
282. Cross Cluster Communication
283. Cross Cluster Communication Base Socket
284. Cross Cluster Communication Rte Plug-in Props
285. Cross Cluster Communication Main 功能
286. Proxy 模块
287. NvM Proxy
288. NvM Base Socket
289. NvM Proxy NvBlock 配置
290. NvM Proxy 配置 ID Block 配置
291. Os Proxy
292. Os Proxy Base Socket 配置
293. Os Proxy OsApplication 配置
294. Os Proxy OsTask 配置
295. Os Proxy OsResorce 配置
296. Os Proxy OsSpinlock 配置
297. Os Proxy Task Dispatcher 配置
298. Os Proxy Task Dispatcher 时序 Event 配置
299. Os Proxy Task Dispatcher Background Event 配置
300. Os Proxy Task Dispatcher Init Event 配置
301. Os Proxy Task Dispatcher 模式 Switch Event 配置
302. Os Proxy Task Dispatcher External Trigger Occurred Event 配置
303. Os Proxy 功能 Dispatcher 配置
304. Com Proxy
305. Com Proxy Base Socket
306. Com User 模块配置
307. Com User IPdus
308. Com User Signals and Signal Groups
309. Com User Signals
310. Com User Signal Groups
311. Com User 回调
312. Dcm Proxy
313. Dcm Base Socket
314. Dcm Proxy 诊断数据
315. Dcm Proxy Routine 控制
316. Dcm Proxy 服务 Request 通知
317. Dem Proxy
318. Dem Base Socket
319. Dem Proxy 诊断 Event
320. FiM Proxy
321. FiM Base Socket
322. FiM Proxy FID
323. 发布信息
324. 附录
325. 不适用需求
326. Referenced Meta Classes
327. Referenced ECUC 配置 Parameters
328. EcuC
329. EcucPartition
330. Pdu
331. EcucPduDedicatedPartition
332. RTE
333. RteEventToTaskMapping
334. RteInitializationRunnableBatch
335. Os
336. OsAlarm
337. OsApplication
338. OsCounter
339. OsEvent
340. OsResource
341. OsScheduleTable
342. OsScheduleTableExpiryPoint
343. OsSpinlock
344. OsTask
345. NvM
346. NvMBlockDescriptor
347. NvMInitBlockCallback
348. NvMSingleBlockCallback
349. NvMCommon
350. Dcm
351. DcmDspDid
352. DcmDspDidInfo
353. DcmDspData
354. DcmDspDataInfo
355. DcmDspPidService01
356. DcmDspDidRead
357. DcmDspDidWrite
358. DcmDspDidControl
359. DcmDspRoutine
360. Dem
361. DemEventParameter
362. DemDataElementClass
363. FiM
364. FiMFID
365. Com
366. ComMainFunctionTx
367. ComMainFunctionRx
368. ComGroupSignal
369. ComIPdu
370. ComSignal
371. ComUserModule
372. ComUserUriDefSet
373. ComSignalGroup
374. WdgM
375. WdgMTransitionProxy
376. WdgMBaseSocket
377. Referenced C-API
378. RTE
379. RTE Lifecycle API Reference
380. Rte_Init
381. Rte_Start
382. RTE RIPS API Reference
383. Rte_Rips_DataIsUpdated
384. Rte_Rips_DRead
385. Rte_Rips_DataIsUpdated_EventActivation
386. Rte_Rips_Feedback
387. Rte_Rips_Invoke
388. Rte_Rips_InvocationHandler
389. Rte_Rips_Prm
390. Rte_Rips_Read
391. Rte_Rips_ReturnResult
392. Rte_Rips_Start
393. Rte_Rips_Stop
394. Rte_Rips_SchM_Deinit
395. Rte_Rips_SchM_Init
396. Rte_Rips_SwitchNotificationStatusType
397. Rte_Rips_Switch
398. Rte_Rips_DequeueModeSwitch
399. Rte_Rips_Trigger
400. Rte_Rips_Write
401. RTE API Reference
402. OS
403. NvM
404. NvM_CancelJobs
405. NvM_EraseNvBlock
406. NvM_GetDataIndex
407. NvM_GetErrorStatus
408. NvM_InvalidateNvBlock
409. NvM_ReadBlock
410. NvM_ReadPRAMBlock
411. NvM_RestoreBlockDefaults
412. NvM_RestorePRAMBlockDefaults
413. NvM_SetBlockProtection
414. NvM_SetDataIndex
415. NvM_SetRamBlockStatus
416. NvM_WriteBlock
417. NvM_WritePRAMBlock
418. NvM_SingleBlockCallbackFunction
419. NvM_InitBlockCallbackFunction
420. NvM_ReadRamBlockFromNvm
421. NvM_WriteRamBlockToNvm
422. NvM_ReadAll
423. NvM_WriteAll
424. Com
425. APIs to 句柄 ComSignals / ComSignalGroups
426. Com_SendSignal
427. Com_SendDynSignal
428. Com_SendSignalGroup
429. Com_SendSignalGroupArray
430. Com_SendSignalWithMetaData
431. Com_SendDynSignalWithMetaData
432. Com_SendSignalGroupWithMetaData
433. Com_SendSignalGroupArrayWithMetaData
434. Com_ReceiveSignal
435. Com_ReceiveDynSignal
436. Com_ReceiveSignalGroup
437. Com_ReceiveSignalGroupArray
438. Com_ReceiveSignalWithMetaData
439. Com_ReceiveDynSignalWithMetaData
440. Com_ReceiveSignalGroupWithMetaData
441. Com_ReceiveSignalGroupArrayWithMetaData
442. Com_InvalidateSignal
443. Com_InvalidateSignalGroup
444. ComUser_CbkRxAck
445. ComUser_CbkInv
446. ComUser_CbkRxTOut
447. ComUser_CbkTxAck
448. ComUser_CbkTxErr
449. ComUser_CbkTxTOut
450. APIs to 句柄 ComIPdus
451. Com_Transmit
452. ComUser_ComCbkTriggerTransmit
453. ComUser_ComCbkRxIndication
454. ComUser_ComCbkTxConfirmation
455. ComUser_ComCbkCopyRxData
456. ComUser_ComCbkStartOfReception
457. ComUser_ComCbkTpRxIndication
458. ComUser_ComCbkTpTxConfirmation
459. ComUser_ComCbkCopyTxData
460. Dcm
461. DataServices
462. ReadData
463. WriteData
464. ConditionCheckRead
465. ReadDataLength
466. GetScalingInformation
467. ReturnControlToECU
468. ResetToDefault
469. FreezeCurrentState
470. ShortTermAdjustment
471. RoutineServices
472. Xxx_Start Operation
473. Xxx_StartConfirmation Operation
474. Xxx_Stop Operation
475. Xxx_StopConfirmation Operation
476. Xxx_RequestResults Operation
477. Xxx_RequestResultsConfirmation Operation
478. ServiceRequestNotification
479. Indication
480. Confirmation
481. Dem
482. Dem_ClearPrestoredFreezeFrame
483. Dem_PrestoreFreezeFrame
484. Dem_ResetEventDebounceStatus
485. Dem_ResetEventStatus
486. Dem_SetEventDisabled
487. Dem_SetEventStatus
488. Dem_GetDTCOfEvent
489. Dem_GetDebouncingOfEvent
490. Dem_GetEventAvailable
491. Dem_GetEventExtendedDataRecordEx
492. Dem_GetEventFreezeFrameDataEx
493. Dem_GetEventUdsStatus
494. Dem_GetFaultDetectionCounter
495. Dem_GetMonitorStatus
496. Dem_SetEventStatusWithMonitorData
497. Dem_SetWIRStatus
498. <模块>_DemGetFaultDetectionCounter<ForEvent>
499. <模块>_DemInitMonitorFor<EventName>
500. <模块>_DemTriggerOnMonitorStatus
501. <模块>_DemClearEventAllowed<ForCondition>
502. <模块>_DemTriggerOnEventData
503. <模块>_DemTriggerOnEventUdsStatus
504. FiM
505. FiM_GetFunctionPermission
506. FiM_SetFunctionAvailable
507. Referenced 服务接口
508. Os
509. NvM
510. NvM_BlockIdType
511. NvM_BlockRequestType
512. NvM_InitBlockRequestType
513. NvM_RequestResultType
514. NvMService
515. NvMAdmin
516. NvMNotifyJobFinished
517. NvMNotifyInitBlock
518. NvMMirror
519. PS_{Block}
520. PAdmin_{Block}
521. PNJF_{Block}
522. PNIB_{Block}
523. PM_{Block}
524. Dcm
525. Implementation 数据类型
526. Dcm_OpStatusType
527. Dcm_ConfirmationStatusType
528. Dcm_NegativeResponseCodeType
529. Dcm_DataElementType_{数据}类型
530. Dcm_DataElementType_{数据}ArrayType
531. Dcm_DataElementType_{数据}PrimitiveType
532. Dcm_DataArrayTypeUint8_{数据}类型
533. {DID}_Struct_DataType
534. Dcm_RangeArray_{Range}类型
535. Dcm_ScalingInfoArray_{数据}类型
536. Dcm_RequestDataOut_{Routine}_{Signal}PrimitivType
537. Dcm_RequestDataIn_{Routine}_{Signal}PrimitiveType
538. Dcm_RequestDataOut_{Routine}_{Signal}类型
539. Dcm_RequestDataIn_{Routine}_{Signal}类型
540. Dcm_RequestDataOut_{Routine}_{Signal}ArrayType
541. Dcm_RequestDataIn_{Routine}_{Signal}ArrayType
542. Dcm_RequestFlexibleOutArrayData_{Routine}_{Signal}类型
543. Dcm_RequestFlexibleInArrayData_{Routine}_{Signal}类型
544. Dcm_StartDataIn_{Routine}_{Signal}PrimitivType
545. Dcm_StartDataIn_{Routine}_{Signal}类型
546. Dcm_StartDataIn_{Routine}_{Signal}ArrayType
547. Dcm_StartDataOut_{Routine}_{Signal}PrimitivType
548. Dcm_StartDataOut_{Routine}_{Signal}类型
549. Dcm_StartDataOut_{Routine}_{Signal}ArrayType
550. Dcm_StartFlexibleInArrayData_{Routine}_{Signal}类型
551. Dcm_StartFlexibleOutArrayData_{Routine}_{Signal}类型
552. Dcm_StopDataIn_{Routine}_{Signal}PrimitivType
553. Dcm_StopDataIn_{Routine}_{Signal}类型
554. Dcm_StopDataIn_{Routine}_{Signal}ArrayType
555. Dcm_StopDataOut_{Routine}_{Signal}PrimitivType
556. Dcm_StopDataOut_{Routine}_{Signal}类型
557. Dcm_StopDataOut_{Routine}_{Signal}ArrayType
558. Dcm_StopFlexibleInArrayData_{Routine}_{Signal}类型
559. Dcm_StopFlexibleOutArrayData_{Routine}_{Signal}类型
560. Dcm_KeyArray_{SecurityLevel}类型
561. Dcm_SeedArray_{SecurityLevel}类型
562. Dcm_SecurityAccessDataRecordArray_{SecurityLevel}类型
563. Dcm_RequestDataArrayType
564. Dcm_ControlMask_{DID}类型
565. Dcm_InputOutputControlParameterType
566. Dcm_IOOperationRequest_{DID}类型
567. Dcm_IOOperationResponseType
568. Dcm_ResponseDataArrayType
569. Dcm_ControlMask_{数据}ArrayType
570. Dcm_Cemr_{DID}类型
571. Sender-Receiver-Interfaces
572. DataServices_{DID}
573. DataServices_{数据}
574. IOControlRequest_{DID}
575. IOControlResponse_{DID}
576. NvDataInterface
577. DataServices_{DID}
578. Client-Server-Interfaces
579. DataServices_{数据}
580. RoutineServices_{RoutineName}
581. ServiceRequestNotification
582. Ports
583. DataServices_{DID} RPortProtoype
584. DataServices_{DID} PPortProtoype
585. DataServices_{DID} PRPortProtoype
586. DataServices_{数据} RPortProtoype
587. DataServices_{数据} RPortProtoype
588. DataServices_{数据} PPortProtoype
589. DataServices_{数据} PRPortProtoype
590. IOControlRequest_{DID}
591. IOControlResponse_{DID}
592. ServiceRequestManufacturerNotification_{Name}
593. ServiceRequestSupplierNotification_{Name}
594. RoutineServices_{RoutineName}
595. Dem
596. Implementation 数据类型
597. Dem_DebouncingStateType
598. Dem_DTCOriginType
599. Dem_EventIdType
600. Dem_EventStatusType
601. Dem_DebounceResetStatusType
602. Dem_DTCFormatType
603. Dem_InitMonitorReasonType
604. Dem_MaxDataValueType
605. Dem_MonitorDataType
606. Dem_MonitorStatusType
607. Dem_UdsStatusByteType
608. Client-Server-Interfaces
609. CallbackClearEventAllowed
610. CallbackEventDataChanged
611. CallbackEventUdsStatusChanged
612. CallbackGetFaultDetectCounter
613. CallbackInitMonitorForEvent
614. CallbackMonitorStatusChange
615. DiagnosticInfo
616. DiagnosticMonitor
617. DiagnosticMonitor_MonitorData
618. EventStatus
619. Ports
620. Event
621. DiagnosticMonitor_MonitorData
622. EventStatus
623. EventInfo
624. CBClrEvt
625. CBDataEvt
626. CBFaultDetectCtr
627. CBInitEvt
628. CBEventUdsStatusChanged
629. CBMonitorStatusChanged
630. FiM
631. Implementation 数据类型
632. FiM_FunctionIdType
633. Client-Server-Interfaces
634. FiM_FunctionInhibition
635. FiM_ControlFunctionAvailable
636. Ports
637. FiM_FunctionInhibition
638. FiM_ControlFunctionAvailable
639. Changes History
640. Changes in R20-11 compared to R19-11
641. Added 规范 Items in R20-11
642. Changed 规范 Items in R20-11
643. Deleted 规范 Items in R20-11
644. Changes in R21-11 compared to R20-11
645. Added 规范 Items in R21-11
646. Changed 规范 Items in R21-11
647. Deleted 规范 Items in R21-11
648. Changes in R22-11 compared to R21-11
649. Added 规范 Items in R22-11
650. Changed 规范 Items in R22-11
651. Deleted 规范 Items in R22-11
652. Changes in R23-11 compared to R22-11
653. Added 规范 Items in R23-11
654. Changed 规范 Items in R23-11
655. Deleted 规范 Items in R23-11
656. Added Constraints in R23-11
657. Changed Constraints in R23-11
658. Deleted Constraints in R23-11
659. Changes in R24-11 compared to R23-11
660. Added 规范 Items in R24-11
661. Changed 规范 Items in R24-11
662. Deleted 规范 Items in R24-11
663. Added Constraints in R24-11
664. Changed Constraints in R24-11
665. Deleted Constraints in R24-11
666. Changes in R25-11 compared to R24-11
667. Added 规范 Items in R25-11
668. Changed 规范 Items in R25-11
669. Deleted 规范 Items in R25-11
670. Added Constraints in R25-11
671. Changed Constraints in R25-11
672. Deleted Constraints in R25-11
673. Changes in R26-11 compared to R25-11
674. Added 规范 Items in R26-11
675. Changed 规范 Items in R26-11
676. Deleted 规范 Items in R26-11
677. Added Constraints in R26-11
678. Changed Constraints in R26-11
679. Deleted Constraints in R26-11
