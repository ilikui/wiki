# Application Interfaces User Guide (`AIUserGuide`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 442 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_AIUserGuide_442\AUTOSAR_CP_EXP_AIUserGuide.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_AIUserGuide_442\AUTOSAR_CP_EXP_AIUserGuide.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_AIUserGuide_442\zzgen\CP_EXP_AIUserGuide.complete.txt`

## 文档简介

The Application Interface Tool (AITool) is a user interface dedicated to manage all the data, which define the Application Interfaces (AI). The tool enables maintenance, validation, and generation of work product output. Input to the tool is data based on AUTOSAR defined methodology meta-model. The output of the tool is a collection of .arxml (AUTOSAR XML) files containing detailed information of all standardized application interfaces transferred to a commonly readable format, which can be the input for e.g. authoring tools at the development units of SW developing companies.

The AITool enables the manipulation of AI definitions in order to produce the outcome: the .arxml file for data exchange.

The AUTOSAR Software Component Template  tells us what can be modeled. The Standardization Template  explains and supports the Blueprint approach.

The Application Interface definitions apply the rules defined by AUTOSAR Software Component Modeling Guide .

All definitions are finally provided in the `AUTOSAR_CP_MOD_AISpecification`  and `AUTOSAR_CP_MOD_AISpecificationExamples` .

In order to standardize Application Interfaces a number of SW Components are described within the AI-Tool decomposed into bigger function groups (formerly called domains) and their main functions. Nevertheless, these components must be seen as examples only. They are necessary in order to specify the ports/port prototypes in a consistent way. Each Port/PortPrototype needs a connection to a Component to be specified in a proper way.

The structure within Figure  illustrates the decomposition of SoftwareCompositions using the AUTOSAR Software Component Template .

Note: The yellow block in the figure represents a Composition that is decomposed into other Compositions/Components. These Component Types and ComponentPrototypes are described within the same ArPackages (see blue blocks in the figure). A SwComponentPrototype implements the usage of a SwComponentType in a specific role.

SwComponentPrototypes are only used for implementing SwComponentTypes in a specific role, i.e. they are used to instantiate the SwComponentType.

Example: a SwComponentPrototype "LeftDoorControl" fulfills the role of implementing the SwComponentType "DoorControl" for the left door of a vehicle while the SwComponentPrototype "RightDoorControl" fulfills the role of the SwComponentType "DoorControl" for the right door.

The AI-Tool Explorer view contains so called ArPackages where different elements of a complete Appl

## 模块依赖

Figure  illustrates the dependencies in the XML generation process. Currently, the AI-Tool reflects the structure for multiple AUTOSAR Metamodel releases in one database, i.g. for R3.0 and R4.0. This common database is then used by the AI XML Generation, to generate XML descriptions for each supported release. This approach implies that not all data from the AI-Tool will be reflected in all generated XML files as only the valid definitions are taken into account. Data which was set to Not Valid or are in LifeCycle states MS0, MS1, MS2 and MS3 will not be available in the next generated XML files.

## 章节详细内容

### 1. 目的 of this document
*原文标题：Purpose of this document*

AUTOSAR Application Interfaces aims at the delivery of functionality through communicating Software-Components, which can be placed nearly arbitrarily on a network of ECUs. To ensure the interoperability of Software-Components from different sources (i.e. vendors), the interfaces of these should be unified.

The content collected in the `CP_MOD_AISpecification` and in `CP_MOD_AISpecificationExamples`  which are maintained via the AITool is the specification of interfaces of several automotive domains. The goal is to define and publish stable and widely accepted application interfaces.

This document aims at explaining all relevant details about the information structure used to collect the necessary information to define these standardized application interfaces, especially for users, who have to maintain the definitions in the AITool. Experienced users can skip the Chapter , AUTOSAR Methodology. Some sections contain extract from other AUTOSAR documents. In case of differences in the contents then the original AUTOSAR documents are valid.

### 2. Document 概述
*原文标题：Document Overview*

This document gives an overview of the methodological background of the application interfaces. It also gives an overview of the content of the Application Interface Specification (`CP_MOD_AISpecification`) and of `CP_MOD_AISpecificationExamples` (`CP_MOD_AISpecificationExamples`), collections of arxml-files containing the final output of the maintenance process which is supported by the AITool. It also describes the structure of the `CP_MOD_AISpecification` and explains how to handle it.

| Abbreviation / Acronym: | Description: |
|---|---|
| .ai, .ai-file | file maintained by the AI-Tool, collecting all information for process of the definition of Application Interfaces |
| .arxml | AUTOSAR Extensible Markup Language File |
| AI-Tool | Tool supporting the process of Application Interfaces definition |
| Jira | Tool for change request management |
| CPU | Central Processing Unit |
| ECU | Electronic Control Unit |
| Excel | Microsoft spreadsheet-application |
| MS | Milestone |
| RTE | Run-Time Environment |
| SPEM | Software Process Engineering meta-model |
| SVN | Subversion (version control system) |
| SW-C | Software Component |
| SWC | Software Component |
| SW | Software |
| VFB | Virtual Function Bus |
| WG | Working Group |
| XML | Extensible Markup Language |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related Documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 简介 to Application 接口
*原文标题：Introduction to Application Interfaces*

The Application Interface Tool (AITool) is a user interface dedicated to manage all the data, which define the Application Interfaces (AI). The tool enables maintenance, validation, and generation of work product output. Input to the tool is data based on AUTOSAR defined methodology meta-model. The output of the tool is a collection of .arxml (AUTOSAR XML) files containing detailed information of all standardized application interfaces transferred to a commonly readable format, which can be the input for e.g. authoring tools at the development units of SW developing companies.

The AITool enables the manipulation of AI definitions in order to produce the outcome: the .arxml file for data exchange.

The AUTOSAR Software Component Template  tells us what can be modeled. The Standardization Template  explains and supports the Blueprint approach.

The Application Interface definitions apply the rules defined by AUTOSAR Software Component Modeling Guide .

All definitions are finally provided in the `AUTOSAR_CP_MOD_AISpecification`  and `AUTOSAR_CP_MOD_AISpecificationExamples` .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. AUTOSAR Methodology

AUTOSAR requires a formal technical approach for some steps of system development. This approach is called the "AUTOSAR Methodology". The AUTOSAR Methodology is neither a complete process description nor a business model and "roles" and "responsibilities" are not defined in this methodology. Furthermore, it does not prescribe a precise order in which activities should be carried out. The methodology is a mere work-product flow: it defines the dependencies of activities on work-products.

During system design, the software components and the hardware have to be selected, and overall system constraints have to be identified. AUTOSAR intends to ease the formal description of these initial system design decisions via the information exchange format and the use of templates. Defining the System Configuration Input means to fill out or edit the appropriate templates. AUTOSAR methodology allows for a high degree of reuse in this context. In any case, this editing is assumed to be supported by editing tools. Here is a brief description of activities:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 概述 on available documents
*原文标题：Overview on available documents*

For detailed information, following documents are available.

### 8. 软件组件模板
*原文标题：Software Component Template*

This document  provides introductory description and rationale for the part of the AUTOSAR meta-model relevant for the definition of Software Components.

### 9. Standardization 模板
*原文标题：Standardization Template*

This document  is intended to support the delivery of standardized model elements by AUTOSAR. This document also refines the blueprint approach for standardization.

### 10. Generic 结构模板
*原文标题：Generic Structure Template*

This document  acts as a supplement for the formal definition provided by the AUTOSAR meta model. This document provides the introductory description and rationale for the parts of the AUTOSAR meta model relevant for all AUTOSAR templates.

### 11. AI 规范 and AI 规范示例
*原文标题：AI Specification and AI Specification Examples*

`AUTOSAR_CP_MOD_AISpecification` and `MOD_AISpecificationExamples` are the outputs of the standardization of Application Interfaces (, ). The outputs are delivered as a set of .arxml files.

### 12. 建模 Guide for Application 接口
*原文标题：Modeling Guide for Application Interfaces*

This document  gives guidelines and conventions on using the AUTOSAR model elements in order to build AUTOSAR systems. It does not contain guidelines for the AUTOSAR meta-model.

### 13. AUTOSAR Methodology

See above .

### 14. Explanation of Application 接口 for Domain Body Comfort
*原文标题：Explanation of Application Interfaces for Domain Body Comfort*

The document  explains design decisions and boundary conditions that lead to the Application Interfaces of the domain Body and Comfort.

### 15. Explanation of Application 接口 for Domain Powertrain
*原文标题：Explanation of Application Interfaces for Domain Powertrain*

The document  explains design decisions and boundary conditions that lead to the Application Interfaces of the domain Powertrain.

### 16. Explanation of Application 接口 for Domain Chassis
*原文标题：Explanation of Application Interfaces for Domain Chassis*

The document  explains design decisions and boundary conditions that lead to the Application Interfaces of the domain Chassis.

### 17. Explanation of Application 接口 for Domain Occupant and Pedestrian Safety
*原文标题：Explanation of Application Interfaces for Domain Occupant and Pedestrian Safety*

The document  explains design decisions and boundary conditions that lead to the Application Interfaces of the domain Occupant and pedestrian safety.

### 18. Explanation of Application 接口 for Domain Multimedia, Telematics, Human Machine 接口
*原文标题：Explanation of Application Interfaces for Domain Multimedia, Telematics, Human Machine Interface*

The document  explains design decisions and boundary conditions that lead to the Application Interfaces of the domain Multimedia, Telematics, Human Machine Interface.

### 19. Metamodel representation of the contents maintained by the AI-Tool

This section describes the relation between meta-model implementation (AUTOSAR Meta Model , ) and representation within the AI-Tool and the `AUTOSAR_CP_MOD_AISpecification`.

The AUTOSAR Meta Model conceptually is defined as 'M2' level, which describes the entities called Software Components and Ports. The relations between those entities as well as their semantics are part of this model.

### 20. Category of 建模 Elements
*原文标题：Category of Model Elements*

All Application Interface model elements are classified into different categories. These are:

* BLUEPRINT
* EXAMPLE
* STANDARD

### 21. Category STANDARD

All elements, which can be used as they are defined by just including them in the project, belong to the category STANDARD. These elements need no modifications before they are used in the projects.

Elements of category STANDARD are:

* LifeCycleInfoSets
* `PhysicalDimensions_obsolete`
* `Units_obsolete`

(The listed elements which are marked as obsolete are still generated during Release Build for Backward Compatibility (BWC) needs.)

### 22. Category BLUEPRINT

Blueprints are predefined model elements, which form the basis for further modeling. Blueprints are model elements from which other model elements can be derived by copying. These elements are not complete in all aspects. They act as a template for projects to create the real elements.

Elements of category BLUEPRINT are:

* Application Data Types ()
* Computation Methods ()
* Data Constraints ()
* Keyword Sets ()
* Port Interfaces ()
* Port Prototypes Blueprints ()
* Physical Dimensions (`AUTOSAR_MOD_PhysicalDimensions_Blueprint`)
* Units (`AUTOSAR_MOD_Units_Blueprint`)
* Collections ()

Rules for naming Prototypes derived from BLUEPRINTs AUTOSAR Standardization will use rules for creating ShortNames for prototypes derived from blueprints, i.e. the recommendation below is mandatory for AUTOSAR standardization work.

* Recommendation in case of single usage: <ShortName>
* Recommendation in case of multiple usage: <ShortName>{<Keyword>}0..n"
* The ShortName pattern for the derived model elements may follow a {anyName} pattern from the associated Blueprints

### 23. Category 示例
*原文标题：Category EXAMPLE*

Elements that are also reusable, but are also helpful for understanding are created as category EXAMPLE. These elements were created as help for the users to actually create their project specific implementations. They represent one out of many possible ways of implementation.

Elements of category EXAMPLE are:

* SwComponentTypes ()
* Application Data Types ()
* Blueprint Mapping Sets ()
* Computation Methods ()
* Data Constraints ()
* Port Interfaces ()
* SW Design Patterns ()

ApplicationDataTypes, CompuMethods, DataConstrs and PortInterfaces categorized as EXAMPLE are the derived elements from their blueprints elements.

### 24. Meta 建模 diagrams and their application in the AI-Tool 数据结构
*原文标题：Meta model diagrams and their application in the AI-Tool data structure*

This section describes the relationship between the AUTOSAR Meta-Model (`AUTOSAR_FO_MMOD_MetaModel` (M2)) diagrams and the AI-Tool contents to enable the development of application software-components. The following diagrams correspond to R24-11 of the AUTOSAR Meta-Model.

### 25. Composition

The purpose of an AUTOSAR CompositionSwComponentType is to allow the encapsulation of specific functionality by aggregating existing SoftwareComponentPrototypes which are instances of predefined SwComponentTypes. Since a CompositionSwComponentType is also a SwComponentType, it may be aggregated again in further CompositionSwComponentTypes. This recursive relation is formally expressed in Figure .

It is important to understand that while compositions allow for (sub-) system abstraction, they are solely an architectural element for the implementation of model scalability. They simply group existing software-components and thereby take away complexity when viewing or designing logical system architecture. In the AI-Tool Explorer View all SwComponentTypes found in AISpecification/`SwComponentTypes_Example` are defined as CompositionSwComponentTypes because even the simplest component here must contain at least one AtomicSwComponent describing the internal behavior of the SwComponent.

Meta Model Reference: M2::AUTOSARTemplates::SWComponentTemplate::Composition

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 多 Instantiation
*原文标题：Multiple Instantiation*

When designing a system it is often the case that elements in the runtime space share the same structure. A well-known example domain is object-oriented programming, where objects instantiated from the same class all have the same structure specified by that class. The ability to specify a structure once and then use it in multiple places in the design is called as multiple instantiation.

The same concept is used in the AI-Tool for the definition of SwComponentTypes (Classes) for multiple SwComponentPrototypes (Instances) which might exist in several CompositionSwComponentTypes.

In the example shown below (Figure ), the SwComponentPrototypes WshrFrnt, WshrRe and WshrHdlamp which are only existing as subcomponents of the CompositionSwComponentType WiperWashr are created via instantiation of the SwComponentType Wshr.

All the SwComponentPrototypes derived from the SwComponentType by instantiation will inherit the properties of the SwComponentType. In other words: if a SwComponentType is defined with 2 Provider PortPrototypes and 3 Receiver PortPrototypes then all the SwComponentPrototypes derived will have the same number of Provider and Receiver PortPrototypes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Blueprint 映射 & BlueprintMappingSet
*原文标题：Blueprint Mapping & BlueprintMappingSet*

Blueprint mapping acts as reference between the blueprint and the derived element. Blueprint mapping identifies the relationship between the blueprinted element and the actual blueprint. It also validates the derived element against the blueprint. Aggregation of these BlueprintMappings is a BlueprintMappingSet. The Figure below shows the BlueprintMapping and BlueprintMappingSet. In the AI-Tool, there the Blueprint Mapping is recorded automatically when a blueprinted element is derived from a Prototype element.

Meta Model Reference: M2::AUTOSARTemplates::CommonStructure::SoftwareComponentTemplate::Blueprints

`AUTOSAR_MOD_AISpecification` Reference: `AUTOSAR_CP_MOD_AISpecificationExamples`::`BlueprintMappingSets_Example`

AI-Tool Reference: BlueprintMappings are represented by the list of "Derived Elements", e.g. in the PortPrototypeBlueprint definition editor of the AI-Tool.

### 28. PortPrototypes

PortPrototypes also referred as Ports in some places are the well-defined connection points for communication between different software-components. A PortPrototype is either required type or provided type. A require-port (in technical terms: RPortPrototype) requires certain services or data, while a provider-port (or PPortPrototype) on the other hand provides those services or data.

Two SwComponentPrototypes are eventually connected by hooking up a PPortPrototype of one SwComponentPrototype to a compatible RPortPrototype of the other SwComponentPrototype.

### 29. PortPrototypeBlueprints

PortPrototypeBlueprint is an ARElement and acts as a blueprint for the creation of PortPrototypes. A user can pick a specific PortPrototypeBlueprint and create PortPrototype out of it.

PortPrototypeBlueprint is not related to the SwComponentType. The PortPrototypeBlueprints are not explicitly represented in the AI Table, they can be found as a separate package in the XML.

PortPrototypeBlueprints can be seen as a library, from which the user can choose a PortPrototypeBlueprint as a template to create PortProtoype. Consequently, the PortPrototypeBlueprints are just a collection of PortPrototypes without any architectural relation. As soon as a PortPrototypeBlueprint is attached to a SwComponentPrototype, it becomes a PortPrototype.

### 30. BlueprintMapping of PortPrototypeBlueprints

The process of creating a PortPrototype from the available PortPrototypeBlueprints is called BlueprintMapping. BlueprintMapping is demonstrated in Figure . The mapping between PortPrototypes and PortPrototypeBlueprints can be found in the BlueprintMappingSet "PortPrototypeBlueprintMappings" within the package "`BlueprintMappingSets_Example`".

Meta Model Reference: M2::AUTOSARTemplates::SWComponentTemplate::Ports

AI-Tool Reference: AI-Tool Project Explorer: ARPackage: PortPrototypeBlueprints_Blueprint AI-Tool Tabular View: Table Port Prototype Blueprints

`AUTOSAR_MOD_AISpecification` Reference: AUTOSAR_CP_MOD_AISpecification_PortPrototypeBlueprint_Blueprint `AUTOSAR_CP_MOD_AISpecificationExamples`

### 31. PortInterfaces

The PortInterface defines the kind of information transported between two PortPrototypes.

PortInterfaces are used to support a design-by-contract workflow, i.e. they provide a means to formally verify structural and dynamic compatibility between software-components. In other words, PortInterfaces represent a pivotal point in the AUTOSAR concept.

Meta Model Reference: M2::AUTOSARTemplates::SWComponentTemplate::PortInterface

AI-Tool Reference: AI-Tool Project Explorer: ARPackage: `PortInterfaces_Blueprint` ARPackage: `PortInterfaces_Example` AI-Tool Tabular View: Sender-Receiver Interface Blueprints Sender-Receiver Interface Examples Client-Server Interface Blueprints Client-Server Interface Examples

`AUTOSAR_CP_MOD_AISpecification` Reference: AUTOSAR_CP_MOD_AISpecification_PortInterface_Blueprint `AUTOSAR_CP_MOD_AISpecificationExamples`

BlueprintMapping is the process of creating PortInterfaces from the PortInterfaceBlueprints. This is demonstrated in Figure . The mappings between PortInterfaces and PortInterfaceBlueprints can be found in the BlueprintMappingSet " PortInterfaceBlueprintMappings" within the package "`BlueprintMappingSets_Example`".

### 32. Sender Receiver Communication

SenderReceiverInterfaces allow for the specification of the typically asynchronous communication pattern where a sender provides data that is required by one or more receivers. While the actual communication takes place via the respective PortPrototypes, a SenderReceiverInterface allows for formally describing what kind of information is sent and received.

A SenderReceiverInterface declares a number of data elements (VariableDataPrototype) to be sent and received. A SenderReceiverInterface focuses on the description of information items represented by VariableDataPrototypes. A VariableDataPrototype aggregated in the role of dataElement represents an atomic piece of information transmitted among PortPrototypes typed by a SenderReceiverInterface.

AI-Tool Reference: AI-Tool Project Explorer: `PortInterfaces_Blueprint` `PortInterfaces_Example` AI-Tool Tabular View: Sender-Receiver Interface Blueprints Sender-Receiver Interface Examples

Example: "TrlrSts1" is a SenderReceiver interface that has one data element "TrlrSts" of Type "Boolean".

### 33. ClientServer Communication

The underlying semantics of a client/server communication is that a client may initiate the execution of an operation by a server that supports the operation. The server executes the operation and immediately provides the client with the result (synchronous operation call) or else the client checks for the completion of the operation by itself (asynchronous operation call).

ClientServerInterface, therefore to some extent is a counterpart to the SenderReceiverInterface. Instead of defining pieces of information to be transferred among software-components, a ClientServerInterface defines a collection of ClientServerOperations.

As depicted in Figure , a ClientServerInterface is composed of ClientServerOperations, i.e. a ClientServerOperation cannot be reused in the context of a different ClientServerInterface. A ClientServerOperation consists of 0 to many ArgumentDataPrototypes. The latter may be

* passed to the operation
* passed to and returned from the operation
* Returned from the operation.

AI Tool Reference: AI-Tool Project Explorer: `PortInterfaces_Blueprint` `PortInterfaces_Example` AI-Tool Tabular View: Client-Server Interface Blueprints Client-Server Interface Examples

### 34. DataTypes

It is possible to describe data provided by a software component from the application as well as implementation point of view. The common concept behind this is expressed by the abstract meta-class AutosarDataType, from which an ApplicationDataType and an ImplementationDataType are derived. Figure  shows a summary of the basic meta-classes used for the definition of AutosarDataTypes.

An ApplicationDataType can be composed (in form of a record or an array) of elements, which themselves are typed by another ApplicationDataType. This is expressed by the meta-class ApplicationCompositeElementDataPrototype, which is shown in Figure  for completeness. An ImplementationDataType can be composed too, but in this case, no type/prototype concept has been applied.

### 35. ApplicationDataTypes

The abstract meta-class ApplicationDataType is further derived into an ApplicationPrimitiveDataType and an ApplicationCompositeDataType. Like any AutosarDataType, the primitive and composite types on application level are characterized by its category and its SwDataDefProps. For a given category, only a limited set of attributes of the SwDataDefProps make sense.

### 36. Application Primitive 数据类型
*原文标题：Application Primitive Data Types*

This chapter defines the primitive application data types that may be used for the data prototypes of PortInterfaces or composite application data types.

Meta Model Reference: M2::AUTOSARTemplates::SWComponentTemplate::DataType::DataTypes

AI-Tool Reference: AI-Tool Project Explorer: `ApplicationDataTypes_Blueprint` `ApplicationDataTypes_Example`

Example: In the above screen shot, a ContinuousValue DataType Perc8 is defined. The resolution, physical lower and upper limits as well as the offset and unit of this DataType are also shown in the screen shot.

AI-Tool Reference: AI-Tool Project Explorer: `ApplicationDataTypes_Blueprint` `ApplicationDataTypes_Example` AI-Tool Tabular View: Application Continuous Data Type Blueprints Application Continuous Data Type Examples

### 37. Application Primitive 数据类型 - Enumeration
*原文标题：Application Primitive Data Types - Enumeration*

This chapter defines the primitive application data types that may be used for the data prototypes of PortInterfaces or composite application data types. This type of data types can be used to describe the states of a state machine or boolean information.

Example: In the above screen shot, the Computation Method TrsmPosnGearLvr1 of an Enumeration DataType TrsmPosnGearLvr is defined. All permissible values of the Enumeration DataType are defined, here.

AI-Tool Reference: AI-Tool Project Explorer: `ApplicationDataTypes_Blueprint` `ApplicationDataTypes_Example` AI-Tool Tabular View: Application Enum Data Type Blueprints Application Enum Data Type Examples

### 38. Application Composite 数据类型
*原文标题：Application Composite Data Types*

The meta-classes ApplicationArrayDataType and ApplicationRecordDataType provide the means to define composite DataTypes. Such a composite DataType is required, if the application software wants to have access to the individual elements of the composite as well as to do operations with the whole composite, e.g. wants to communicate the complete record or array in a single transaction.

It is possible to use a combination of ApplicationArrayDataType and ApplicationRecordDataType, so that an ApplicationArrayDataType could be defined as ApplicationRecordElement of an ApplicationRecordDataType and in the same manner, an ApplicationRecordDataType could be used as the base type of an ApplicationArrayDataType. The creation of nested ApplicationComposite DataTypes is also possible.

### 39. ApplicationArrayDataType

An ApplicationArrayDataType may contain maxNumberOfElements of ApplicationArrayElements. Each of these ApplicationArrayElements must have the same type. When referring to an element of an array within the software-component descriptions, the element index runs from 0 to (maxNumberOfElements-1).

AI-Tool Reference: AI-Tool Project Explorer: `ApplicationDataTypes_Blueprint` `ApplicationDataTypes_Example` AI-Tool Tabular View: Application Array Data Type Blueprints Application Array Data Type Examples

Example: The standard variables of DataType array used in application component development are listed here for reference. Array DataType "TirePPerWhl1" contains 5 elements, each of DataType 'P1'.

### 40. ApplicationRecordDataType

A declaration of ApplicationRecordDataType describes a nonempty set of objects, each of which has a unique identifier with respect to the ApplicationRecordDataType and each has its own ApplicationDataType. The ShortName of each ApplicationRecordElement within the scope of an ApplicationRecordDataType must be unique.

AI-Tool Reference: AI-Tool Project Explorer: `ApplicationDataTypes_Blueprint` `ApplicationDataTypes_Example` AI-Tool Tabular View: Application Record Data Type Blueprints Application Record Data Type Examples

Example: The "IndcrTurnSeq1" ( see Figure ) is a record type variable to represent the turn indicator sequence. The record DataType 'IndcrTurnSeq1' contains 5 elements.

### 41. Physical Units

An important part of the semantics associated with a DataType is its physical dimension. Units are used to augment the value with additional information like m/s or liter. This is necessary for a correct interpretation of the physical value for input and output processes. The unit involves information about its physical dimensions.

The unit references one physical dimension. If the physical dimensions of two units are identical, a conversion between them is possible.

Meta Model Reference: M2::AUTOSARTemplates::SWComponentTemplate::DataType::Units

AI-Tool Reference: AI-Tool Project Explorer: PhysicalUnits::`PhysicalDimensions_Blueprint` PhysicalUnits::`Units_Blueprint` AI-Tool Tabular View: Physical Dimensions Units

### 42. Computation Methods

This meta-class represents the ability to express the relationship between a physical value and the mathematical representation.

Note that this is still independent of the technical implementation in data types. It only specifies the formula how the internal value corresponds to its physical pendant.

CompuMethods in general shall be reuseable and not fixed to a specific data type. CompuMethods can be referenced by any kind of datatype which need such described computational features; the reuse is strongly recommended and mandatory for float datatypes definition. The AI-Tool supports such cross referencing of parameters. For more information, Refer SW-C and System Modeling Guide .

### 43. 示例 of Linear Conversion
*原文标题：Example of Linear Conversion*

The following example illustrates how a linear conversion is specified using CompuMethod.

F_{} = 30_{} + 2_{} * x

<COMPU-METHOD>
    <SHORT-NAME>LinearExample</SHORT-NAME>
    <CATEGORY>LINEAR</CATEGORY>
    <UNIT-REF DEST="UNIT">kmh</UNIT-REF>
    <COMPU-INTERNAL-TO-PHYS>
      <COMPU-SCALES>
        <COMPU-SCALE>
          <COMPU-RATIONAL-COEFFS>
            <COMPU-NUMERATOR>
              <V>30</V>
              <V>2</V>
            </COMPU-NUMERATOR>
            <COMPU-DENOMINATOR>
              <V>1</V>
            </COMPU-DENOMINATOR>
          </COMPU-RATIONAL-COEFFS>
        </COMPU-SCALE>
      </COMPU-SCALES>
    </COMPU-INTERNAL-TO-PHYS>
  </COMPU-METHOD>

### 44. Keyword and KeywordSet

An important part of defining short names for component types, ports, PortInterfaces or data elements is to make use of the predefined keywords in AUTOSAR and their abbreviations. The advantage is, that this results in relatively short names with established meaning. The Keywords are aggregated under the category `KeywordSets_Blueprint`.

Meta Model Reference: M2::AUTOSARTemplates::StandardizationTemplate::Keyword, KeywordSet

AI-Tool Reference: AI-Tool Project Explorer: `KeywordSets_Blueprint` AI-Tool Tabular View: Table Keywords

`AUTOSAR_MOD_AISpecification` Reference: `AUTOSAR_MOD_AISpecification_KeywordSet_Blueprint`

If not differently specified in the rest of the document the term keyword will refer to the longName of the keyword, while the abbreviated name could be referred as "abbrName attribute" or "keyword abbreviation" as well.

The resulting xml outputs is as under:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Backward Compatibility

### 46. 简介
*原文标题：Introduction*

In course of the AUTOSAR standard development, it was recognised with newer releases that the standard was not compatible with its predecessor version. This in turn resulted in severe integration issues especially for configurations that intended to use certain modules from the updated version of the specification, see (.

Therefore, AUTOSAR introduced the Backward Compatibility requirement for new concepts to ensure smooth and error free operation of software with mixed versions of implementations.

Three use-cases induce three kinds of compatibility statements that will be provided by AUTOSAR- the respective document owners provide list of changes with analysis of impact on the three kinds of Backward Compatibility.

* Specification-wise backwards compatibility
* Bus backwards compatibility
* Application backwards compatibility

For the Application wise backward compatibility, it considers that set of modules of an AUTOSAR release that has an effect on the interaction of application software components.

Hence, the use case definition for Application Interfaces is derived to be:

Horizontal "application-compatibility" (only standardized Application Interfaces are regarded)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 62 章（内容从略，见纯文本全文）

47. Backward Compatibility 定义
48. Summary
49. Life Cycle States
50. 简介
51. Representation in Metamodel and .arxml
52. Milestones
53. Representation in AI-Tool
54. 视图 Concept in Application 接口 (Variant 处理)
55. 简介
56. Implementation in Application 接口 and Meta 建模 Representation
57. Application 接口定义 in the AI-Tool的数据结构
58. Main Views of the AI-Tool
59. Explorer 视图
60. Editor 视图
61. Working Panel 视图
62. 概述：Table AI 规范 in Tabular 视图
63. Application Array 数据类型
64. Application Primitive Continuous 数据类型
65. Rules and Recommendations for the usage of Float 数据
66. Application Primitive Enum 数据类型
67. Application Record 数据类型
68. Computation Methods
69. Computation Methods of 类型 IDENTICAL
70. Rules and Recommendations for the usage of Float 数据
71. Computation Methods of 类型 LINEAR
72. Computation Methods of 类型 TEXTTABLE
73. Computation Methods of 类型 BITFIELD_TEXTTABLE
74. Computation Methods of 类型 RAT_FUNC
75. Computation Methods of 类型 SCALE_LINEAR
76. Computation Methods of 类型 SCALE_LINEAR_AND_TEXTTABLE
77. Computation Methods of 类型 SCALE_RAT_FUNC
78. Computation Methods of 类型 SCALE_RATIONAL_AND_TEXTTABLE
79. Computation Methods of 类型 TAB_NOINTP
80. Port 接口
81. Client-Server 接口
82. Sender-Receiver 接口
83. 数据 Elements
84. 数据 Constraints
85. Keywords
86. Port Prototypes
87. SW Components
88. Physical Units
89. Physical Dimensions
90. Shortname
91. Longname
92. 描述
93. Exponents for the 7 SI-Base Quantities
94. Relationship between AI-Tool 数据 and .arxml Output
95. 概述
96. Dependencies of XML Generation
97. Contents of Generated XML
98. 文件 Distribution
99. Schema 结构
100. Common Elements
101. Package 结构
102. 结构 of Package AISpecification
103. 结构 of Package AISpecification_Examples
104. References
105. Instance References
106. 类型 References
107. Descriptions
108. 附录
