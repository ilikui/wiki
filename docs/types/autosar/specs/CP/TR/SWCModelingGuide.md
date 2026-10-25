# SW-C and System Modeling Guide (`SWCModelingGuide`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 207 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_SWCModelingGuide_207\AUTOSAR_CP_TR_SWCModelingGuide.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_SWCModelingGuide_207\AUTOSAR_CP_TR_SWCModelingGuide.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_SWCModelingGuide_207\zzgen\CP_TR_SWCModelingGuide.complete.txt`

## 章节详细内容

### 1. 相关文档
*原文标题：Related Documentation*

### 2. 范围
*原文标题：Scope*

The limits of my language mean the limits of my world. Ludwig Wittgenstein

This document gives guidelines and conventions on using the AUTOSAR model elements in order to build AUTOSAR systems. It does not contain guidelines for the AUTOSAR meta model. This is already covered by `AUTOSAR_TemplateModelingGuide`.pdf.

### 3. How to read this document

All rules are identified by an ID.

The ID starts with "`TR_SWMG_`" for the Modeling Rules followed by four digits (`TR_SWMG_xxxx`).

The ID starts with "`TR_SWNR_`" for the Naming Rules followed by four digits (`TR_SWNR_xxxx`).

The provided XML examples conform to the AUTOSAR metamodel.

### 4. Conventions used

In requirements, the following specific semantics are used (taken from Request for Comment RFC 2119 from the Internet Engineering Task Force IETF)

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 缩略语
*原文标题：Acronyms and Abbreviations*

* API: Application Programming Interface
* AR: AUTOSAR
* CAN: Controller Area Network
* ECU: Electronic Control Unit
* HMI: Human Machine Interface
* MISRA: Motor Industry Software Reliability Association
* RTE: Real Time Environment
* SW-C: Software Component
* WP: Work Package
* XML: eXtensible Markup Language

### 6. 需求 traceability
*原文标题：Requirements traceability*

Requirements against this document are exclusively stated in the corresponding requirements document .

The following table references the requirements specified in  and provides information about individual specification items that fulfill a given requirement.

| Requirement | Description | Satisfied by |
|---|---|---|
| Distinguish Standardized vs not standardized model elements of type ARElement |  |  |
| Name shall reflect the purpose of the model element |  |  |
| Easy creation of names |  |  |
| Model Elements names shall be self-explanatory |  |  |
| Distinguish model elements of different model element suppliers |  |  |
| Model Element Names shall follow semantic rules |  |  |
| Model Element Names are composed by arranging standardized keywords |  |  |
| Semantic of Model Element Names shall allow variable number of keywords |  |  |
| Length restriction for short names of Identifiable |  |  |
| Names shall allow to indicate if the value is a direct measurement or a conditioned value |  |  |
| Names shall follow the ISO 8855 for English naming. |  |  |
| Use English as Standard Language for Names. |  |  |
| No Architectural Information in Names |  |  |
| Usage of Unique Keywords |  |  |
| Avoid sequences of underscores characters. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 建模 Rules
*原文标题：Modeling Rules*

Compliance to Autosar Meta Model
  Upstream requirements: ,
⌈
Model shall be compliant to the Meta Model.
⌋

 Usage of AR Package concept for SW-Cs
  Upstream requirements: , ,
⌈
Use AR Package concept for SW-C to distinguish different providers of SW-C.
⌋

Ex: `Autosar_AISpecification`, Supplier1, Supplier2, OEM1

 Usage of AR Package category
  Upstream requirements: , ,
⌈
Use AR Package category to distinguish what is standardized, according to the provider of the ARPackage, from what is not.
⌋

See document  for AR Package categories classification.

 Separate packages for elements not defined by AUTOSAR partnership
  Upstream requirements: , , ,
⌈
Each element not defined by the AUTOSAR partnership, shall be included in a AR Package different from the one officially released by AUTOSAR, i.e. the AR Package ShortName shall be changed (e.g. SUPPLIER1) and the category may be changed or not according to AR packages category classification and stakeholder specific standard elements handling.
⌋

Recommendations:

- continuous Data Type resolution should be a power of two.

### 8. Reuse of 建模 element
*原文标题：Reuse of model element*

### 9. Reuse of one 接口 for 多 ports
*原文标题：Reuse of one interface for multiple ports*

The reuse of interfaces is encouraged.

Example:

The Temperature interface is used for the InsideTemperature port and OutsideTemperature port of a component type.

 Independence of Interfaces definition from variants
  Upstream requirements: , ,
⌈
Do not define different interfaces to implement variants. Define one interface that is independent on the variant and define several ports using this interface which are dependent on the variant.
⌋

Using one interface for multiple ports makes variant handling more understandable since the interfaces are not affected by the variant. Ports can be enabled or disabled depending on the selected variant.

Example:

Gasoline spark ignition engine management systems know the concept of a slow path and a fast path for torque intervention. Current diesel systems do not know this distinction.

The following modeling is not recommended:

* Define an interface TorqueInterventionSlow and an interface TorqueInterventionFast.
* Define a port TorqeInterventionSlow with the interface TorqueInterventionSlow and a port TorqueInterventionFast with the interface TorqueInterventionFast.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Reuse of one 数据类型 for 多接口
*原文标题：Reuse of one data type for multiple interfaces*

The reuse of data types is encouraged.

Example:

The Torque data type is used in the Data Elements of the interfaces MinimumTorqueAtClutch and MaximumTorqueAtClutch.

### 11. Use of 多 ComponentPrototypes
*原文标题：Use of multiple ComponentPrototypes*

If the same port P (either RPort or PPort) of multiple ComponentPrototypes A_(1..n) of the same ComponentType is connected to another ComponentPrototype B, the name of the ports should be constructed by concatenating the name of the connected ComponentPrototype A_(i) and the name of the connected port P.

It is recommended to do the concatenation by means of a preposition (see chapter ) in the following order:

<Port name>+<Preposition>+[<ComponentPrototype name>]

Example: The "Washer" ComponentType has an RPort "Activation". There are three ComponentPrototypes of this type: "WasherFront", "WasherRear", and "WasherHeadlamp". The WiperWasherManager ComponentType should have separate PPorts that are connected to the RPorts of the three ComponentPrototypes. These PPorts should have the names "ActivationOfWasherFront", "ActivationOfWasherRear", and "ActivationOfWasherHeadlamp".

### 12. Clustering

Clustering
  Upstream requirements: ,
⌈
Functional elements that belong together shall also be represented in the model together.
⌋

The AUTOSAR meta model provides several features to support clustering of model elements. For example, interfaces can contain multiple data elements, record data types and array data types can contain multiple elements. The use of structuring features improves the structure and comprehensibility of the model.

### 13. Clustering through Sender Receiver 接口
*原文标题：Clustering through Sender Receiver Interfaces*

If elements are clustered through Sender receiver Interfaces there is a choice between using three alternatives that have different behaviors and usually fit to different application scenarios:

A) Record data types,

* Elements of a record are transmitted atomically (in one block).
* Elements of record data types can have different data types.

B) Array data types

* Elements of arrays are transmitted atomically (in one block),
* All elements of an array have to use the same data type.

C) Interfaces with multiple data elements.

* The data elements of interfaces are transmitted separately.
* Data elements of interfaces can have different data types.

Examples for usage of these three alternatives are:

* To A): Use a record data type that includes the

  * Status and its value that belong together, e.g. for an actuator
  * Wheel dependent information that belong together,
  * Axle dependant information that belong together,
  * Value(s) and their derivation(s).
* To B): Use an array data type

  * Sending of dynamic configuration data, e.g. engine full-load curve, or retarder brake torque curve which may change when vehicle is driven, depending on temperature or altitude.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Future extensibility

It is often necessary to adapt and extend model elements to cope with new requirements.

Defining or standardizing elements named "Reserved" (or with other names indicating a project dependent solution) with undefined meaning as placeholders for future extensions would lead to non standardized elements when customization is performed at a project level.

 Placeholder model elements with undefined meaning not allowed
  Upstream requirements: ,
⌈
Placeholder model elements with undefined meaning are not allowed.
⌋

The following rules ensure forward compatibility of relevant model elements towards new AUTOSAR releases.

 Standardized Enumeration DataTypes names differentiation
  Upstream requirements:
⌈
If a new application requires the modification of any attribute (Enumeration Values, Enumeration Value Names) of a standardized enumeration data type, the existing data type shall not be changed, but a new enumeration data type shall be created. The name of the new data type shall differ from the name of the original data type only in the sequence number.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Naming Convention for AUTOSAR 建模 Elements
*原文标题：Naming Convention for AUTOSAR Model Elements*

This section contains naming conventions for AUTOSAR model elements.

This naming convention is applicable in any vehicle application domain of AUTOSAR.

 Scope of naming convention
  Upstream requirements: , ,
⌈
The naming convention applies to the following Model Elements:

* SwComponentTypes
* SwComponentPrototypes
* ApplicationDataTypes
* Units
* PhysicalDimensions
* PortInterfaces
* PortPrototypeBlueprints
* PortPrototypes
* DataPrototypes
* CompuMethods
* DataConstrs
* Keywords
⌋

The XML code which is shown in the document is compliant to the AUTOSAR schema xsd.

The Naming Convention defined in this document focus on defining rules for building contents of three main Autosar metamodel elements

* Attribute longName, derived from the abstract class MultilanguageReferrable
* Attribute shortName, derived from to the abstract class Referrable
* Keywords and keywords abbreviations

Attributes longName and shortName are common to all Autosar elements listed in . The concept of keyword abbreviation is rather closed to the keyword class definition  and will be discussed in chapter .

### 16. 通用 Rules for Long Names
*原文标题：General Rules for Long Names*

According to  Long Names (attribute longName) are targeted to humans readers and could be expressed in different languages. They contain the headline of the objects as single line text.

 Mandatory Long Names in Application Inerfaces context
  Upstream requirements: , ,
⌈
In the context of Application Interfaces Domain longName is a mandatory attribute even if its multiplicity is 0..1 in the Autosar MetaModel.
⌋

 Capital and lower letters in English Long Name construction
  Upstream requirements: , ,
⌈
In order to improve readability:

* Every first word of a long name shall start with a capital letter.
* Articles (e.g. "a", "the"), Prepositions (e.g. "at", "by", "to") and Conjunctions (e.g. "and", "or") shall be expressed by small letters.
* All other words in the text line shall start with a capital letter.
⌋

 Usage of spaces in Long Name construction
  Upstream requirements: , ,
⌈
The Usage of spaces between words shall be mandatory.
⌋

Additionally some specific recommendations are strongly suggested when dealing with long names constructions:

Usage of abbreviations:

* Abbreviations should be avoided as much as possible.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 通用 Rules for Short Names
*原文标题：General Rules for Short Names*

In this chapter and in the rest of the document from now on, the term "name" refers to "short name" only.

 The language for the names shall be English
  Upstream requirements: , , , ,
⌈
The language for the names shall be English.
⌋

A model element name shows up as a SHORT-NAME in XML in, for example:

<SHORT-NAME>MyName</SHORT-NAME>

According to the rules for AUTOSAR XML files the short name has the type AR:IDENTIFIER (see document ) and is restricted by the following regular expression: {0,127}

 Length of Short Names
  Upstream requirements: , , ,
⌈
A short name shall be between 1 and 128 characters long, shall begin with an alphabet, and shall consists of alphabets and numbers.
⌋

 Avoid usage of underscores at the end of Short Names
⌈
Trailing and multiple consecutive underscores should not be used. Rationale: Readability is decreased. In some programming languages they are used for special purpose, so this usage may be confusing.
⌋

Note that leading underscores cannot be used, as they are not allowed by the schema.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Relation between 建模 Level and the Implementation Level
*原文标题：Relation between Model Level and the Implementation Level*

This section describes the relation between the model level of AUTOSAR and the implementation level. A "model" in this chapter means an AUTOSAR model, i.e., an instance of the AUTOSAR meta model. "Implementation" means the realization of the model in a programming language, like C. For a more detailed explanation please refers to AUTOSAR Methodology document .

### 19. Length Restrictions

The RTE Specification  contains rules on how to map model-level names to generated names on implementation-level.

For example, an implementation-level name for a sender/receiver implicit write is created as follows:

`Rte_IWrite_`<runnable-entity-name>_<port-name>_<data-element-name>

This name is visible to the linker as an external identifier. MISRA  rule 1.4 requires that the significant part of such a name shall not exceed 31 chars. Since AUTOSAR decided to allow a deviation from this rule, the size of the generated name can exceed 31. Taking into account that each single name from the model cannot exceed 128 characters, the name given above could have as much as

10 + 1 + 128 + 1 +128 + 1 + 128 = 397 characters.

### 20. 数据类型
*原文标题：Data Types*

Data type names shall conform to C/C++ names for typedefs
  Upstream requirements: ,
⌈
Data type names in an AUTOSAR model shall conform to C/C++ names for typedefs (e.g. they shall not be C keywords).
⌋

.

### 21. RTE rules of name 映射
*原文标题：RTE rules of name mapping*

The following RTE requirements describe the mapping from modeling level to implementation level:

* `SWS_Rte_1153`
* `SWS_Rte_3837`

Such `SWS_Rte` rules define the sequence in which model element ShortNames are concatenated to obtain generated function names in the RTE C Code.

Example:

* ShortName of component type: Wshr
* ShortName of the component prototype: WshrFrnt
* ShortName of runnable entity: Monr
* ShortName of provide port: OutdT
* ShortName of sender-receiver interface of this port: T1
* ShortName the data element: Val

Examples of generated function names for rule `SWS_Rte_3837`:

`Rte_IRead_Monr_OutdT_Val`

`Rte_IRead_Wshr_Monr_OutdT_Val`

### 22. Components and Ports

The abstract SwComponentType cannot be instantiated, there can only be either a CompositionSwComponentType, a ParameterSwComponentType or a specialized inherited class of the AtomicSwComponentType class. See  for more details.

Such AtomicSwComponentTypes encapsulate the implementation of their functionality and behavior and merely expose well-defined connection points, called PortPrototypes, to the outside world.

CompositionSwComponentType, which are SwComponentTypes as well, may be aggregated in further CompositionSwComponentTypes, and their purpose is to allow existing software components aggregation.

In a CompositionSwComponentType the SwComponentTypes are occurring in specific roles which are called SwComponetPrototypes.

The figure above shows the scope of Components and Ports names.

SwComponentTypes names are local to an AR-Package therefore within an AR-Package there must not be two SwComponentTypes having the same name, i.e, the short-names shall be unique. This is explicitly required by RTE implementation since RTE generator rejects those configurations where multiple SwComponentTypes have the same short name (see  in  for more details)

The same applies for:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Sender Receiver 接口 and 数据 Elements
*原文标题：Sender Receiver Interfaces and Data Elements*

The figure above shows the scope of SenderReceiverInterfaces and Data Elements names.

Interface names are local to an AR-Package therefore within an AR-Package there must not be two Interfaces having the same name, i.e, the short-names shall be unique.

The same applies for Data Elements i.e. within an Interface, Data Element names shall be unique.

See document  for detailed information on name space provided by Sender Receiver Interfaces.

Data Element names will appear in the RTE APIs, see RTE specifications .

### 24. Client Server 接口, Operations, and Arguments
*原文标题：Client Server Interfaces, Operations, and Arguments*

The figure above shows the scope of ClientServerInterfaces, Operations, and Argument names.

Interface names are local to an AR-Package therefore within an AR-Package there must not be two Interfaces having the same name, i.e, the short-names shall be unique.

The same applies for:

* Operations within a ClientServerInterface.
* Arguments within an Operation.

See document  for detailed information on name space provided by Client Server Interfaces.

Data Element names will appear in the RTE APIs, see RTE specifications .

### 25. Usage of Keywords

Depending on its role in the component design, short names for component types, ports, port interfaces or data elements can make use of the predefined keywords and their abbreviations, which are described in more detail in . The advantage is, that this results in relatively short names with established meaning.

### 26. Keyword Composition Semantic Rules

According to  each keyword is described by the following attributes:

* shortName: represent the unique name of the keyword, it's not involved in name construction
* longName: represent the long form of the keyword
* desc: represent the definition of the keyword
* introduction: verbal description of the use case (not used at the moment)
* abbrName: specifies the abbreviated name of the keyword and it's used to build shortNames
* classification: describe the semantic field of the keyword (Mean-Environment-Device, Action-PhysicalType, Condition-Qualifier, Index, Preposition)

If not differently specified in the rest of the document the term keyword will refer to the longName of the keyword, while the abbreviated name could be referred as "abbrName attribute" or "keyword abbreviation" as well.

Example:

Definition of keyword describing the driver of a vehicle

longName : Driver

abbrName: Drvr

Usecases (shortName of ports using abbrName attribute): DrvrProf, DrvrDoorLockSt

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 建模 Elements
*原文标题：Model Elements*

The naming conventions apply to the ShortName (SHORT-NAME) attribute of the element. The element must be a specialization of Identifiable. The elements are referred to by their meta-model name. The names in brackets are the XML element names.

To come to a reasonable naming conventions, for each element the objectives of the convention are described first.

### 28. ARPackage (AR-PACKAGE)

An ARPackage creates a name space.]. In one system package names have to be unique. Packages can have sub-packages.

The following rules are defined for the standardized package structure:

*  ARPackage AUTOSAR
    Upstream requirements: , ,
  ⌈
  According to , below the root an ARPackage with LongName AUTOSAR and ShortName AUTOSAR shall be placed. Everything inside the top-level package AUTOSAR is released by the AUTOSAR partnership (see requirements `RS_SWMG_00001`, `RS_SWMG_00056`). The top-level package LongName and ShortName AUTOSAR is reserved by the AUTOSAR partnership and shall not be used elsewhere.
  ⌋
*  Packages contained into ARPackage AUTOSAR
    Upstream requirements: ,
  ⌈
  Within this ARPackage "AUTOSAR" the following packages are contained (ShortNames):

  AISpecification, `ApplicationDataTypes_Blueprint`, `CompuMethods_Blueprint`, `DataConstrs_Blueprint`, `PortInterfaces_Blueprint`, PortPrototypeBlueprints_Blueprint, `Collections_Blueprint`, `KeywordSets_Blueprint`, `ApplicationDataTypes_Example`, `BlueprintMappingSets_Example`, `CompuMethods_Example`, `DataConstrs_Example`, `PortInterfaces_Example`, `SwComponentTypes_Example`, PhysicalDimensions, Units, LifeCycleInfoSets, Systems.
  ⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. SenderReceiverInterface (SENDER-RECEIVER-INTERFACE)

Usage of sequence number in the Sender-Receiver Interfaces names
  Upstream requirements: ,
⌈
The interface name shall end with a sequence number to take into account the future evolution of interfaces.
⌋

The rule  for interfaces is similar to  for data types.

Example:

Recommendations:

A SenderReceiverInterface should be a reusable element. The name should be independent of its concrete usage by components and ports and should only reflect its general purpose.

To allow reuse, the communication path (the indication of source or destination of ports using the interface) should not be encoded in the interface name.

The following short names are bad examples for interface names:

YawRateStdByEsc

YawRateStdBySecCtrlrYawRate

The interface name in this example shall be "YawRate1" and reused by two ports whose names could be "YawRateStdByEsc" and "YawRateStdBySecCtrlrYawRate".

### 30. VariableDataPrototype (VARIABLE-DATA-PROTOTYPE)

Objectives:

* Should only be significant relative to the SenderReceiverInterface.
* Shall be a unique name per SenderReceiverInterface.

Rules:

*  Name reflecting data content
    Upstream requirements: ,
  ⌈
  The name shall reflect the content of the data. If no sensible name for the data element can be found and the interface is used to indicate a data transfer, it is recommended to use the name Val (abbreviation of Value).
  ⌋

Example:

*  Name reflecting operation
    Upstream requirements: ,
  ⌈
  If the data element prototype contains no value information, but an operation, the name shall reflect the operation that is driven by the data element prototype.
  ⌋

  Example: Cls (abbreviation of Close).

If no sensible name for the data element prototype can be found and the interface is used to indicate an operation, the name Oper (abbreviation of Operation) should be used.

*  Multiple data denoting same operations
    Upstream requirements: ,
  ⌈
  If the SenderReceiverInterface contains more than one data element prototype denoting the same operation, a "Mean-Environment-Device" keyword must be used to differentiate the operations.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. ApplicationDataType

The following classes are subclasses of the class ApplicationDataType in the AUTOSAR meta model. Therefore, the naming convention applies also to these classes:

ApplicationPrimitiveDataType (APPLICATION-PRIMITIVE-DATA-TYPE)

ApplicationRecordDataType (APPLICATION-RECORD-DATA-TYPE)

ApplicationArrayDataType (APPLICATION-ARRAY-DATA-TYPE)

Rules:

*  The name shall reflect the meaning of the type
    Upstream requirements: ,
  ⌈
  The name shall reflect the meaning of the type.
  ⌋
*  Usage of prefixes not allowed
    Upstream requirements: ,
  ⌈
  No prefixes, such as "t_" shall be used in the type name.
  ⌋
*  Information about array length not allowed in names
    Upstream requirements: ,
  ⌈
  No numbers shall be used in an ApplicationArrayDataType name to specify its length.
  ⌋
*  Usage of sequence number in the datatypes names
    Upstream requirements: ,
  ⌈
  The data type name shall end with a sequence number to take into account the future evolution. This rule shall also be applied to distinguish data types, which represent the same physical entity, but with different ranges or resolution i.e. names of such data types shall differ only for the sequence number.
  ⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. CompuMethod (COMPU-METHOD)

COMPU-METHOD shortnames elements fullfill naming convention rules.

Specific name patterns shall be followed in order to distinguish special use cases:

*  Generic CompuMethod per Unit for category IDENTICAL
    Upstream requirements: ,
  ⌈
  Generic CompuMethod per Unit for category IDENTICAL shall follow the following pattern: {shortName of Unit}Identcl (mandatory)
  ⌋
*  Generic CompuMethod per Unit for category LINEAR
    Upstream requirements: ,
  ⌈
  Generic CompuMethod per Unit for category LINEAR (to support reuse of CompuMethods for specific resolutions) shall follow the following pattern: {shortName of Unit}Lnr{sequence number} (mandatory after release 4.2.1 for new compuMethod creation)
  ⌋
*  Generic CompuMethod for category TEXTTABLE
    Upstream requirements: ,
  ⌈
  Generic CompuMethod for category TEXTTABLE (typically used for enumeration types) shall follow the following pattern: {shortName of the corresponding ApplicationDataType} (mandatory)
  ⌋

Examples:

# IDENTICAL CompuMethod (as it would be for float implementation, no compu scales required)

# LINEAR CompuMethod

# TEXTTABLE CompuMethod (for Enumeration datatype)

### 33. SwComponentType (COMPOSITION-SW-COMPONENT-TYPE)

The naming convention applies to the following subclasses of the class SwComponentType:

ApplicationSwComponentType

CompositionSwComponentType

SensorActuatorSwComponentType

ParameterSwComponentType

Objectives:

* Avoid name clashes within the package
* Classification of components
* Not for component prototypes (see )

Rules

*  Prefixes referring specific domains not allowed for SwComponentTypes
    Upstream requirements: ,
  ⌈
  Using a prefix to indicate the application domain (such as powertrain, body, chassis) of the SwComponentType is not allowed.
  ⌋

Recommendations:

* Use a noun or concatenation of nouns. Example SensorSpeed SnsrSpd
* The name should be understandable.

Examples

VehicleSpeed VehSpd

VehicleMotionDemand VehMtnDmd

WiperWasher WiprWshr

Example (to shorten the example, some lines have been removed):

### 34. 系统 (系统)
*原文标题：System (SYSTEM)*

Even if not in the scope of this document, it's important to know that the top level element of an AUTOSAR System Description is represented by the System element. The System description defines five major elements: Topology, Software, Communication, Mapping and Mapping, Constraints.

With respect to  and , in AUTOSAR, Software Components can either be atomic or may consist of a composition of other Software Components and CompositionSwComponentType. In order to assemble non-trivial applications from AUTOSAR components, such compositions can be built up hierarchically, until the outermost CompositionSwComponentType forms a kind of top-level composition.

The System element directly aggregates the root software composition, containing all software components in the System in a hierarchical structure.

This element is not required when the System description is used for a network-only use-case.

Moreover, for the purpose of this document the System element always references the highest level of SW Composition, called TopLv (Top Level), and can be modeled just once.

### 其余 27 章（内容从略，见纯文本全文）

35. SwComponentPrototype (SW-COMPONENT-PROTOTYPE)
36. PortPrototype (P-PORT-PROTOTYPE, R-PORT-PROTOTYPE)
37. Units (UNIT)
38. Physical Dimensions
39. Enumerations
40. ClientServerInterface (CLIENT-SERVER-INTERFACE)
41. ParameterInterface (PARAMETER-INTERFACE)
42. ParameterDataPrototype (PARAMETER-DATA-PROTOTYPE)
43. DataConstrs (DATA-CONSTRS)
44. Blueprintable Elements in Application 接口 Domain
45. PortPrototypeBlueprint (PORT-PROTOTYPE-BLUEPRINT)
46. Keywords
47. 指南 for Float Datatype representation at Application Level
48. 附录
49. AI 规范 Keyword Set
50. Change history of AUTOSAR traceable items
51. Traceable item history of this document according to AUTOSAR Release R25-11
52. Added Advisories in R25-11
53. Changed Advisories in R25-11
54. Deleted Advisories in R25-11
55. Added 规范 Items in R25-11
56. Changed 规范 Items in R25-11
57. Deleted 规范 Items in R25-11
58. Traceable item history of this document according to AUTOSAR Release R24-11
59. Added 规范 Items in R24-11
60. Changed 规范 Items in R24-11
61. Deleted 规范 Items in R24-11
