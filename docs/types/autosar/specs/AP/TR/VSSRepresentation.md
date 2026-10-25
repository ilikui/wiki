# Technical Report on VSS Representation (`VSSRepresentation`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 1117 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_TR_VSSRepresentation_1117\AUTOSAR_AP_TR_VSSRepresentation.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_TR_VSSRepresentation_1117\AUTOSAR_AP_TR_VSSRepresentation.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_TR_VSSRepresentation_1117\zzgen\AP_TR_VSSRepresentation.complete.txt`

## 文档简介

AUTOSAR is concerned with providing an automotive base layer catering to automotive application domains.

For an elaborate introduction please consult the explanatory document that covers the reasoning and systematic introduction into the topic.

This document is a technical report how AUTOSAR may be utilized to incorporate the Vehicle Signal Specification into AUTOSAR Applications.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

AUTOSAR is concerned with providing an automotive base layer catering to automotive application domains.

For an elaborate introduction please consult the explanatory document that covers the reasoning and systematic introduction into the topic.

This document is a technical report how AUTOSAR may be utilized to incorporate the Vehicle Signal Specification into AUTOSAR Applications.

### 2. 目标
*原文标题：Objectives*

The specific goals are achieved by providing a unified import into AUTOSAR ARXML that is referred to as VSS Representation. It thus describes an opinionated view on how a VSS catalog is represented in AUTOSAR. This provides consumers with a unified VSS Representation that is beneficial to applications or system components since they have a stable data representation to work with. By incorporating an open standard catalog in AUTOSAR consumers may profit from reduced complexity due to reduced implementation variance across industry while utilizing the existing AUTOSAR technology stack.

See figure  which outlines the resulting logical model elements.

The technical report is geared towards the AUTOSAR Adaptive Platform but may not be limited to it. AUTOSAR Classic Platform may be a viable target as well but is yet to be defined.

### 3. Methodology

The following figure outlines the methodology how a VSS defined catalog and VSS import to ARXML may be utilized to provide an Automotive API based on ARA::COM.

Starting from the standard VSS catalog an OEM may modify the data catalog and provide additional information that should be provided through the Automotive API. An OEM should be aware that if changes are made in a modifying way, general Automotive API breakage occurs. Removing branches or specific signals may be applicable, if the API Implementation provides runtime errors for absent items.

The VSS importer provides a default service interface definition based on the VSS branch structure. It adopts a specific structure that caters to the VISS semantics and aids in implementing and providing the values correctly.

The defined Automotive API Gateway Stub in  allows to have a defined stable endpoint accessible from outside the AUTOSAR ecosystem and maintains the internal flexibility within the AUTOSAR ecosystem to map signals and services by AUTOSAR means.

### 4. 范围
*原文标题：Scope*

The scope of the document is to provide a unified VSS import. It does not define how a VSS representation is mapped internally to the onboard network as this is subject to OEM specifics.

### 5. 限制
*原文标题：Limitations*

Default values in VSS are currently associated with an instance type. They are currently unsupported by the VSS Representation.

In VSS there is a mechanism to aggregate several nodes to a single branch. As this mechanism is regarded as legacy to the newer struct mechanism, the VSS Representation does not support it.

### 6. 术语与缩略语定义
*原文标题：Definition of Terms and Acronyms*

| Terms: | Description: |
|---|---|
| VSS | Vehicle Signal Specification defining both a data modelling language and a standard signal catalog |
| VSS Standard Catalog | The VSS defined standard public catalog containing a set of structured defined vehicle signals |
| VSS Importer | The entity converting VSS entites to ARXML entities |
| Vehicle Information Signal Service | An VSS based Automotive API realization over HTTP, MQTT, and Websocket Transports |
| AUTOSAR Adaptive Platform | see  AUTOSAR Glossary |
| AUTOSAR Classic Platform | see  AUTOSAR Glossary |
| Adaptive Platform Foundation | see  AUTOSAR Glossary |
| Adaptive Application | see  AUTOSAR Glossary |
| VSS Representation | The result of an VSS imporrt described by this document |

### 7. 相关文档
*原文标题：Related Documentation*

### 8. VSS 数据 Catalog Representation
*原文标题：VSS Data Catalog Representation*

In the following sections the following notation is being used to define model elements.

| AR Element | This entry defines the AUTOSAR metaclass the VSS element is mapped to. Moreover, a name for the target element is introduced in order to refer to the result of the mapping in further entries or rules. |
|---|---|
| AR Container | This entry specifies the AUTOSAR element that contains the target element defined in the entry above by its name. |
| Attributes | This entry defines the attributes and cross references of the target element. |
| Condition | In this entry a condition for the mapping can be given. If the condition is false the VSS element does not generate a target element in the AUTOSAR representation. |

### 9. Package Structures

### 10. Root Package Structures

The recommended AUTOSAR package structure is providing interoperability between AUTOSAR tree structures and the VSS Catalog. It maintains type references that are based on package structure naming.

Refer to the Identifier class for naming restrictions of ARPackage shortnames.

 Catalog VSS
  Status: DRAFT
⌈
| AR Element | ARPackage Catalogs |
|---|---|
| AR Container | AUTOSAR |
| Attributes | shortName = "Catalogs" |

| AR Element | ARPackage VSS |
|---|---|
| AR Container | Catalogs |
| Attributes | shortName = "VSS" |

| AR Element | ARPackage ApplicationDataTypes |
|---|---|
| AR Container | VSS |
| Attributes | shortName = "ApplicationDataTypes" |

| AR Element | ARPackage CppImplementationDataTypes |
|---|---|
| AR Container | VSS |
| Attributes | shortName = "CppImplementationDataTypes" |

| AR Element | ARPackage CompuMethods |
|---|---|
| AR Container | VSS |
| Attributes | shortName = "CompuMethods" |

| AR Element | ARPackage Units |
|---|---|
| AR Container | VSS |
| Attributes | shortName = "Units" |

⌋

The example  outlines the recommended root package structure shown in ARXML.

### 11. Versioning

Versioning must consider the modelling available in the specific VSS version and the VSS standard catalog contents.

Since the catalog version of the standard catalog is a modelling artifact of VSS it is represented in ARXML through mapping. In case support of multiple VSS catalog versions is required the parent package of the catalog may be suffixed with the version number and underscore. As a consequence references to updated catalogs items may be kept stable for updated catalogs and only added or removed items may require updates or references to older catalogs.

 Package VSS Versions
  Status: DRAFT
⌈
| AR Element | ARPackage Version |
|---|---|
| AR Container | VSS |
| Attributes | shortName = "Version_4_2" |
| Condition | - |

⌋

The modelling artifacts supported in this technical report are based on VSS version 4.2.

### 12. VSS Branch Package 结构
*原文标题：VSS Branch Package Structure*

VSS branches are used to logically access vehicle sensors, actuators, or attributes. The VSS Importer preserves that access structure through ARPackages.

VSS Branches in general refer to single physical vehicle entities. For specific cases multiple of the physical entities exist in the vehicle. Examples are tires or doors which may be instantiated multiple times.

In order to honor AUTOSAR Mapping philosophy branch instances shall not be modelled at the type level.

 VSS Branch Mapping for Types as ARPackage Structure
  Status: DRAFT
⌈
For each VSS Branch that has no instance property there is an ARPackage. All child VSS Branches are child ARPackages in AUTOSAR. This scheme applies to he ARPackages ApplicationDataTypes, ImplementationDataTypes, and CompuMethods.
⌋

The example  showcases the VSS Branch Mapping Structure.

### 13. Primitive 类型
*原文标题：Primitive Types*

The following section outlines the mapping between VSS and AUTOSAR ApplicationPrimitiveDataType and their respective properties and StdCppImplementationDataTypes.

### 14. Numeric 类型
*原文标题：Numeric Types*

The numerical base types have no ApplicationPrimitiveDataType representation.

The following table outlines the Mappings to the AUTOSAR Adaptive Platform Implementation Types.

If StdCppImplementationDataTypes are generated by the VSS Importer the platform shall reference StdCppImplementationDataTypes of the standard platform types according to the following table. These types reside in ARPackage /AUTOSAR/StdTypes.

 VSS Primitive Implementation Data Types
  Status: DRAFT
⌈
| VSS Data Type: | AUTOSAR StdCppImplementationDataType: |
|---|---|
| uint8 | uint8_t |
| uint16 | uint16_t |
| uint32 | uint32_t |
| uint64 | uint64_t |
| int8 | int8_t |
| int16 | int16_t |
| int32 | int32_t |
| int64 | int64_t |
| boolean | bool |
| float | float |
| double | double |

⌋

### 15. String 类型
*原文标题：String Type*

VSS is unicode encoded but leaves open if UTF-8 or UTF-16 is utilized.

 VSS Primitive String Type
  Status: DRAFT
⌈
The VSS Importer shall create UTF-8 encoded Strings. The encoding is not modelled. UTF-16 is currently unsupported.
⌋

### 16. Primitive Sensors, Actuators, and Attributes

Application Data Type
  Status: DRAFT
⌈
For each Sensor, Actuator and Attribute that refers to a primitive data type the VSS Importer shall create an ApplicationDataType. It shall be placed into the respective ARPackage that reflects the VSS non instance branch.
⌋

 Application Data Type Name
  Status: DRAFT
⌈
VSS Importer shall set the ApplicationDataType short name equal to the VSS name.
⌋

 StdCppImplementationDataType
  Status: DRAFT
⌈
If StdCppImplementationDataTypes are imported for each Sensor, Actuator and Attribute that refers to a primitive data type the VSS Importer shall create an StdCppImplementationDataType. It shall be placed into the respective ARPackage that reflects the VSS non instance branch.
⌋

 StdCppImplementationDataType Name
  Status: DRAFT
⌈
If StdCppImplementationDataTypes are imported the VSS Importer shall set the StdCppImplementationDataType short name equal to the VSS name.
⌋

Importing StdCppImplementationDataType is optional for two reasons. VSS outlines that the implementation representation may be different in the programming language or on the wire from what is defined in the catalog.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 数据 Constraints on Primitive Values
*原文标题：Data Constraints on Primitive Values*

The AUTOSAR type model allows the definition of Data Constraints. They may further be reused by referencing Data Constraints from multiple AUTOSAR Application Data Types. From the type perspective the constraint is tied to the application data type. To simplify VSS importer implementations data constraint reuse is discouraged for data types that formulate specific data restrictions. Data constraint reuse is allowed only for primitive types.

 Data Constraint per Data Type
  Status: DRAFT
⌈
For each ApplicationDataType the VSS Importer shall create a separate PhysConstrs data constraint.
⌋

 Data Constraint Limits
  Status: DRAFT
⌈
For the VSS node attributes min and max VSS Importer shall create lower and upper limits. The interval type is "CLOSED" for the Lower and Upper limit.
⌋

 Data Constraint Location
  Status: DRAFT
⌈
The VSS Importer shall create Data Constraints in the same ARPackage as the ApplicationDataType
⌋

 Data Constraint Naming
  Status: DRAFT
⌈
The VSS Importer shall set the data constraint short name to be identical to the ApplicationDataType with the suffix "DC".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Complex 类型
*原文标题：Complex Types*

### 19. Arrays

Application Array Data Type
  Status: DRAFT
⌈
For each VSS node of type Sensor, Actuator and Attribute that has an array type the VSS Importer shall create an ApplicationArrayDataType with its category is set to ARRAY.
⌋

 Application Array Name
  Status: DRAFT
⌈
The VSS Importer shall set ApplicationArrayDataType short name to the VSS node name suffixed with "Array".
⌋

 Application Array Element Data Type
  Status: DRAFT
⌈
For each VSS node of type Sensor, Actuator and Attribute that has an array type the VSS Importer shall create an ApplicationDataType.
⌋

 Application Array Element Name
  Status: DRAFT
⌈
The VSS Importer shall set ApplicationDataType short name to the VSS node name.
⌋

 Application Array Data Type Reference
  Status: DRAFT
⌈
The VSS Importer shall create a type reference from the array to the corresponding ApplicationDataType element. This may be a ApplicationPrimitiveDataType, an ApplicationArrayDataType or an ApplicationRecordDataType.
⌋

 Application Array Size Handling
  Status: DRAFT
⌈
The VSS Importer shall set the property ArraySizeSemantics to

FIXED-SIZE

if the VSS leaf defines the arraysize property and

VARIABLE-SIZE

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Struct 类型
*原文标题：Struct Types*

Application Record Data Type
  Status: DRAFT
⌈
For each VSS node of type struct VSS Importer shall create an ApplicationRecordDataType. The category is set to STRUCTURE.
⌋

 Application Record Name
  Status: DRAFT
⌈
The VSS Importer shall set ApplicationRecordDataType shortname to the VSS node name.
⌋

 Application Record Element Type
  Status: DRAFT
⌈
For each VSS node of type struct VSS Importer shall create an ApplicationRecordElement. The category is set to "VALUE".
⌋

 Application Record Element Type Reference
  Status: DRAFT
⌈
The VSS Importer shall resolve VSS primitive data type properties to ApplicationPrimitiveDataTypes in the type reference. The VSS Importer shall reference properties of the VSS struct data type to the correspondig ApplicationRecordDataType in the type reference.
⌋

See example  for modelling of structs with ApplicationDataTypes.

 C++ Implementation Struct Data Type
  Status: DRAFT
⌈
If StdCppImplementationDataTypes are imported the VSS Importer shall create a StdCppImplementationDataType. The category is set to "STRUCTURE".
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Units

Units define standards for expressing and comparing measures relating to physical quantities.

VSS defines a set of units within specified unit files which abbreviations open for extension and modification. AUTOSAR on its behalf defines blueprint for Units.

Both specifications have Units in common but also define additional Units.

VSS mentions that the default catalog defines default units, but APIs may deviate from that setting.

AUTOSAR supports that philosophy through ApplicationDataTypes. ApplicationDataTypes reference units. CompuMethods convert values from ApplicationDataType to StdCppImplementationDataTypes and vice versa on the modelling level. This may convert a speed available in km/h in VSS and on AUTOSAR ApplicationDataType to m/s on StdCppImplementationDataType.

 Common Unit Mapping
  Status: DRAFT
⌈
For VSS Units that equal semantically the AUTOSAR counterpart the VSS Importer shall not import the respective units.
⌋

Example of matching VSS and AUTOSAR Units are

* mm
* km
* km/h
* l

 VSS Units
  Status: DRAFT
⌈
VSS Units that have no representation in AUTOSAR shall be imported.
⌋

Example of Units that are defined in AUTOSAR but not in VSS

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Documentation

For each primitive, array, struct and struct element VSS node documentation the VSS Importer shall create respective documentation structures in ApplicationPrimitiveDataType ApplicationArrayDataType ApplicationRecordDataType ApplicationRecordElement The VSS Importer shall create a MultiLanguageOverviewParagraph. The VSS Importer shall create a LOverviewParagraph. The VSS Importer shall create a MixedContentForOverviewParagraph for the VSS description. If there is no comment in VSS a MixedContentForOverviewParagraph shall not be created. The VSS Importer shall create a DocumentationBlock for the VSS comment. If there is a comment in the VSS node, the VSS Importer shall create a Note for the VSS comment. The contents of the comment shall be set by the the VSS Importer to the contents of the VSS node comment.

 VSS Description Base Structure
  Status: DRAFT
⌈
| AR Element | MultiLanguageOverviewParagraph |
|---|---|
| AR Container | ApplicationDataType |

⌋

 VSS Description Base Structure
  Status: DRAFT
⌈
| AR Element | LOverviewParagraph |
|---|---|
| AR Container | MultiLanguageOverviewParagraph |

⌋

 VSS Description
  Status: DRAFT
⌈
| AR Element | MixedContentForOverviewParagraph |
|---|---|
| AR Container | LOverviewParagraph |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Custom VSS Key Values

VSS allows the definition of custom key value pairs through overlays for nodes. It is desirable to maintain that information in AUTOSAR ARXML since it may encode relevant information.

 VSS Key and Value Base Structure
  Status: DRAFT
⌈
If a VSS node contains at least one key value pair, the VSS Importer shall create an AdminData model element on the ApplicationDataType representing the VSS node. The VSS Importer shall create a Special Data Group Sdg setting the gid attribute to VSS.
⌋

 VSS Key and Value modelling
  Status: DRAFT
⌈
For each overlay key and value pair the VSS Importer shall create a Sd. The VSS Importer shall set the gid attribute to the VSS node overlay key and the value attribute to the VSS node overlay value.
⌋

The example  outlines a key value pair representation in ARXML.

### 24. VISS 服务接口 Catalog
*原文标题：VISS Service Interfaces Catalog*

### 25. 服务 Package Structures
*原文标题：Service Package Structures*

### 26. 服务 Package Structures
*原文标题：Service Package Structures*

The recommended AUTOSAR package structure is as follows.

Refer to the Identifier class for naming restrictions of ARPackage short names.

 AutomotiveAPI
  Status: DRAFT
⌈
| AR Element | ARPackage AutomotiveAPI |
|---|---|
| AR Container | AUTOSAR |
| Attributes | shortName = "AutomotiveAPI" |

| AR Element | ARPackage VISS |
|---|---|
| AR Container | AutomotiveAPI |
| Attributes | shortName = "VISS" |

| AR Element | ARPackage ServiceInterfaces |
|---|---|
| AR Container | VISS |
| Attributes | shortName = "ServiceInterfaces" |

| AR Element | ARPackage ServiceInterfaces |
|---|---|
| AR Container | VISS |
| Attributes | shortName = "ServiceInterfaces" |

| AR Element | ARPackage AutomotiveAPIGateway |
|---|---|
| AR Container | AutomotiveAPI |
| Attributes | shortName = "Gateway" |

| AR Element | ARPackage ServiceInstances |
|---|---|
| AR Container | Gateway |
| Attributes | shortName = "ServiceInstances" |

| AR Element | ARPackage ServiceInstanceMappings |
|---|---|
| AR Container | Gateway |
| Attributes | shortName = "ServiceInstanceMappings" |

| AR Element | ARPackage SWC |
|---|---|
| AR Container | Gateway |
| Attributes | shortName = "SWC" |

⌋

VSS does not define service interfaces. The tree formed by branches provides logical grouping that can be utilized to form service interfaces.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. VISS 服务接口
*原文标题：VISS Service Interfaces*

The goal is therefore to provide an API that realizes a Declarative Service Interface to fulfill the automotive gateway use case. Other use cases may or may not make use of this API style depending on their needs.

ARA::COM does not provide a declarative semantic in a single access primitive. However by a combination of several ARA::COM access primitives the declarative behavior can be established. Utilizing more than one access primitive yields the benefit to be more explicit when mapping primitives to in vehicle accesses. A drawback is that more authoring is required as a consequence.

In order to realize the declarative semantics a field is utilized for data getting and notification. A method is used for setting the data value declaratively.

 Service Interfaces
  Status: DRAFT
⌈
The VSS Importer shall produce a ServiceInterface for each VSS branch that is not an instance.
⌋

Be aware that VSS aggregate:true does not have semantics in the VSS Representation and shall not produce a struct of the contained elements.

 Data Retrieval
  Status: DRAFT
⌈
The VSS Importer shall produce a Field for each VSS Sensor, Actuator and Attribute.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. VISS 建模 Extension
*原文标题：VISS Model Extension*

To model the VISS communication UserDefined model artifacts are utilized. In order to distinguish between other UserDefined model artifacts a qualification that the UserDefined model artifacts are indeed VISS is required.

See example  for an example of a model extension for VISS.

This model extension is utilized in the following sections to create the necessary artifacts.

### 29. VISS 服务接口 Deployments
*原文标题：VISS Service Interface Deployments*

VISS/VSS Service Deployments
  Status: DRAFT
⌈
For each VSS based Service the VSS Importer shall create an UserDefinedServiceInterfaceDeployment. It shall reference the VSS associated ServiceInterface through a ServiceInterfaceARRef
⌋

 User Defined VISS Service Instance
  Status: DRAFT
⌈
For each UserDefinedServiceInterfaceDeployment that reflects a VSS derived service interface the VSS Importer shall create an AdminData. Each AdminData shall contain a Special Data Group Sdg with the gid suffixed by ProvidedVISSBinindServiceInstanceExtension. The SpecialDataGroup shall contain a Special Data Group Sdg with Gid set to userDefinedVISSBinding. This in turn shall contain a Special Data Group Sdg with Gid set to ProvidedVISSBindingServiceInstance. This in turn shall contain a Special Data Sd with Gid vssInstancePath and the value set to the VSS instance path in dot notation.
⌋

See example  for an example of VISS specific UserDefinedServiceInterfaceDeployments.

 VISS/VSS Field Deployments
  Status: DRAFT
⌈
For each VSS based Service Field the VSS Importer shall create an UserDefinedFieldDeployment that references the associated field.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Provided 服务 Instance
*原文标题：Provided Service Instance*

Provided Service Instance Package Structure
  Status: DRAFT
⌈
For each VSS Branch the VSS Importer shall create an ARPackage. All child VSS Branches are child ARPackages in AUTOSAR. The modelling of ProvidedVISSServiceInstance packages differs from the data type modelling since instances of branches are modelled as additional ARPackages.
⌋

 Provided Service Instance
  Status: DRAFT
⌈
For each VSS node instance that reflects a VSS derived service interface the VSS Importer shall produce a ProvidedUserDefinedServiceInstance. The short name shall be equal to the service name. The ProvidedUserDefinedServiceInstance parent ARPackage shall be set by the VSS Importer to the branch instance ARPackage. The VSS Importer shall reference the corresponding VISS service interface deployment through the serviceInterfaceDeployment property.
⌋

See example  for an example of VISS specific UserDefinedServiceInterfaceDeployments.

 Provided Service Instance VSS Path
  Status: DRAFT
⌈
The VSS Importer shall set the vssInstancePath property of ProvidedUserDefinedServiceInstance of the model extension to the fully qualified VSS instance path.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Automotive API Gateway

This section outlines the modelling portions of the Automotive API Gateway.

The goal is to provide a well-defined framework and abstraction on the application layer for mapping standard defined VSS/VISS interfaces and application data types to OEM provided vehicle internal interfaces and application data types. Its purpose is to hide transport implementation details in order to ease the mapping steps.

The Automotive API Gateway provides an AUTOSAR compliant interface to provide VSS through VISS. Implementors must implement the provided skeletons. They may provide custom logic through Adaptive Applications to obtain VSS defined values to external entities, or they may utilize declarative approaches that utilize ARXML to describe the mapping of data entities.

### 32. Gateway 软件组件
*原文标题：Gateway Software Component*

The gateway software component models all VSS/VISS related provided ports per default. Providing the internal required ports are subject to an integration step. The VSS Representation does not generate required ports.

In case the gateway software component provides the whole catalog a single software component may suffice. However, there may be use cases where providing multiple gateways is reasonable for isolation purposes.

 Gateway Software Component
  Status: DRAFT
⌈
The VSS Importer shall produce one or more CompositionSwComponentType for the gateway. Producing one or more CompositionSwComponentType is import specific and may be determined by implementation specific import configuration.
⌋

 Provided Ports Prototype
  Status: DRAFT
⌈
The VSS Importer shall produce a PPortPrototype for each ProvidedUserDefinedServiceInstance. Producing one or more PPortPrototype for one or more gateway software component is import specific and may be determined by implementation specific import configuration.
⌋

 Provided Ports Prototype Short Name
  Status: DRAFT
⌈
The PPortPrototype short name shall be the VSS instance path where '.' is to be replaced with underscores.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 附录
*原文标题：Appendix*

### 34. 附录
*原文标题：Appendix*

### 35. Mentioned 清单 Elements
*原文标题：Mentioned Manifest Elements*

This section contains the Manifest Elements mentioned in this documentation. It also contains a set of class tables representing meta-classes mentioned in the context of this document but which are not contained directly in the scope of describing specific meta-model semantics.

| Class | ARPackage | < | < | < |
|---|---|---|---|---|
| Note | AUTOSAR package, allowing to create top level packages to structure the contained ARElements. |  |  |  |

ARPackages are open sets. This means that in a file based description system multiple files can be used to partially describe the contents of a package.

| This is an extended version of MSR's SW-SYSTEM. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, AtpBlueprint, AtpBlueprintable, CollectableElement, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | ARPackage.arPackage, AUTOSAR.arPackage | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| arPackage | ARPackage | * | aggr | This represents a sub package within an ARPackage, thus allowing for an unlimited package hierarchy. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. 示例 (informative)
*原文标题：Examples (informative)*

### 37. Root Package 结构
*原文标题：Root Package Structure*

This example outlines to recommended root package structure

Vehicle:
  type: branch
  description: High-level vehicle data.

Vehicle.Cabin:
  type: branch
  description: Cabin data.

Vehicle.Cabin.Door:
  type: branch
  description: Door data.

This example shows the use of multiple catalog versions.

This example outlines the resulting ARXML Package Structure

### 38. Primitive 类型 Modelling (informative)
*原文标题：Primitive Type Modelling (informative)*

This example outlines the modelling for DataTypeMapping.

This example outlines the namespace modelling for StdCppImplementationDataType.

### 39. C++ Keywords

The following items are currently C++ keywords:

* alignas (C++11)
* alignof (C++11)
* and
* and_eq
* asm
* atomic_cancel (TM TS)
* atomic_commit (TM TS)
* atomic_noexcept (TM TS)
* "auto"
* "bitand"
* bitor
* bool
* break
* case
* catch
* char
* char8_t (C++20)
* char16_t (C++11)
* char32_t (C++11)
* class
* compl
* concept (C++20)
* const
* consteval (C++20)
* constexpr (C++11)
* constinit (C++20)
* const_cast
* continue
* co_await (C++20)
* co_return (C++20)
* co_yield (C++20)
* decltype (C++11)
* default
* delete
* do
* double
* dynamic_cast
* else
* enum
* explicit
* export
* extern
* false
* float
* for
* friend
* goto
* if
* inline
* int
* long
* mutable
* namespace
* new
* noexcept (C++11)
* not
* not_eq
* nullptr (C++11)
* operator
* or
* or_eq
* private
* protected
* public
* reflexpr
* register
* reinterpret_cast
* requires (C++20)
* return
* short
* signed
* sizeof
* static
* static_assert (C++11)
* static_cast
* struct
* switch
* synchronized
* template
* this
* thread_local (C++11)
* throw
* true
* try
* typedef
* typeid
* typename
* union
* unsigned
* using
* virtual
* void
* volatile
* wchar_t
* while
* xor
* xor_eq

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 16 章（内容从略，见纯文本全文）

40. Complex 类型 Modelling
41. Variable Size Arrays
42. Fixed Size Arrays
43. Struct 类型
44. VISS Specific 建模 Extension
45. User Defined VISS 服务 Deployments
46. Provided 服务 Instances
47. Change History of AUTOSAR Traceable Items
48. Traceable item history of this document according to AUTOSAR Release R25-11
49. Added 规范 Items in R25-11
50. Changed 规范 Items in R25-11
51. Deleted 规范 Items in R25-11
52. Traceable item history of this document according to AUTOSAR Release R24-11
53. Added 规范 Items in R24-11
54. Changed 规范 Items in R24-11
55. Deleted 规范 Items in R24-11
