# Basic Software Module Description Template (`BSWModuleDescriptionTemplate`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 089 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TPS_BSWModuleDescriptionTemplate_089\AUTOSAR_CP_TPS_BSWModuleDescriptionTemplate.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TPS_BSWModuleDescriptionTemplate_089\AUTOSAR_CP_TPS_BSWModuleDescriptionTemplate.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TPS_BSWModuleDescriptionTemplate_089\zzgen\CP_TPS_BSWModuleDescriptionTemplate.complete.txt`

## 文档简介

This chapter explains, how the implementation details of AUTOSAR Software Components and Basic Software can be described. While AUTOSAR contains various component types, only Atomic Software Components and Basic Software Modules possess an Implementation. In the meta model this means that Implementation can be provided for AtomicSwComponentType or its derived classes and BswModuleDescription only.

On the other hand, compositions simply structure and encapsulate their contained components in a hierarchical manner, without adding any implementation relevant behavior or functionality. So they cannot be implemented directly. Instead, the leaf components in such a composition tree which by definition are again atomic, are implemented.

## 模块依赖

It is important to note that via BswModuleDependency the module description that owns the dependency refers to model elements which are also referred by the description of the module it depends on. This holds especially for instances of BswModuleEntry but also for other ARElements like data types referred from there. In order to avoid inconsistencies, one should put such mutually used M1 elements under a well defined location in terms of ARPackages.

Rules for the package location of standardized M1 model elements are given in . As a consequence we can state:

 Location of standardized BswModuleEntry-s
⌈
Instances of standardized BswModuleEntrys defined for an AUTOSAR module {reservedName} shall be located under a package AUTOSAR_{reservedName}/BswModuleEntrys/
⌋

for example

`AUTOSAR_Can`/BswModuleEntrys/`Can_SetControllerMode`

 Reference to standardized BswModuleEntry-s
⌈
If a BSWMD refers to a standardized BswModuleEntry via implementedEntry or expectedEntry it shall also use the path AUTOSAR_{reservedName}/BswModuleEntrys/ thus indicating that it relies on the AUTOSAR compliant implementation of the referred API functions.
⌋

It is highly recommended to follow an analog pattern (but not starting with AUTOSAR) for the package names of non-standardized ARElements too. If a BSWMD refers in its dependency to a path like

<vendor_specific_prefix>_{reservedName}/BswModuleEntrys/

for example

`VendorX_Can`/BswModuleEntrys/`Can_SpecialFunction`

this would indicate that the BSWMD relies on a vendor specific function resp. callback of the referred module (for example Can).

In addition, the value of targetModuleRef should be set to

`VendorX_Can`/BswModuleDescriptions/Can

In this example, we would instead of Can use a non-standardized module name if the referred module is a Complex Driver. In this case, the module name would be equal to the BswModuleDescription.shortName of the BSWMD of that Complex Driver.

## 章节详细内容

### 1. 通用 Information
*原文标题：General Information*

### 2. Document 范围
*原文标题：Document Scope*

This is the documentation of the template for the Basic Software Module Description (BSWMDT).

The BSWMD is a formal notation of all information belonging to a certain BSW artifact (BSW module or BSW cluster) in addition to the implementation of that artifact. There are several possible use cases for such a description, see  for details.

The BSWMDT - the template to be used for the BSWMD - is the standardized format which has to be used for this description in AUTOSAR. The template is represented in UML as part of the overall AUTOSAR meta-model and is part of the XML schema generated out of this meta-model. This document describes all the elements which belong to this template. These elements are maintained in two different packages of the AUTOSAR meta-model:

* The package BswModuleTemplate contains all elements which are used exclusively by the BSWMDT.
* Some elements of the BSWMDT, for example for the description of implementation aspects and resource consumption, are used also within the Software Component Template (SWCT). These elements belong to the CommonStructure package of the meta-model and are also described within this document.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Input Documents

The following input documents have been used to develop the BSWMDT:

* Generic Structure Template
* General Requirements on Basic Software Modules
* AUTOSAR Methodology
* AUTOSAR Glossary
* Software Component Template
* System Template
* XML Schema Production Rules

### 4. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Use Cases and 建模 Approach
*原文标题：Use Cases and Modeling Approach*

### 6. Use Cases

There are several possible use cases for the BSWMDT. The following uses cases can be applied for BSW modules (ICC3 conformance class) or for BSW clusters (ICC2 conformance class) and for libraries. For convenience we often use the word "module" in this document as a synonym for all three types of artifacts.

A library can be seen as a special kind of module which provides services to be used within the basic or application software and which are accessed via direct function calls. Thus the following use cases can also be applied to a library.

The main difference between a library and a "normal" BSW module is, that library services can directly be called from application SWCs without going via the RTE. As a consequence, there will be certain restrictions on the model elements which can be used for libraries, e.g. a library should not have scheduled functions. However, these restrictions are currently not formalized.

* The BSWMDT can be used to specify a BSW module or cluster (or a set of those) in terms of interfaces and dependencies before it is actually implemented. Details of the internal behavior and implementation are not filled out for this use case.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Three Layer Approach

The meta-model of the BSWMDT consists of three abstraction layers similar to the SWCT. This approach allows for a better reuse of the more abstract parts of the description. An overview is shown in Figure .

The upper layer, the BswModuleDescription, contains the specification of all the provided and required interfaces including the dependencies to other modules.

The middle layer, the BswInternalBehavior, contains a model of some basic activity inside the module. This model defines the requirements of the module for the configuration of the OS and the BSW Scheduler.

There may be several different instances of BswInternalBehavior based on the same BswModuleDescription (even on the same CPU, for example several drivers adhering to the same BswModuleDescription).

The term "behavior" has been chosen in analogy to a similar term in the SWCT. Note that it is restricted only to the scheduling behavior here and does not describe the algorithmic behavior of the module or cluster.

The bottom layer, the BswImplementation contains information on the individual code. Again, there may be several instances of BswImplementation for the same BswInternalBehavior.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Several Implementations of the same BSW 模块 or BSW Cluster
*原文标题：Several Implementations of the same BSW Module or BSW Cluster*

According to the three layer approach, the meta-class BswModuleDescription and an aggregated BswInternalBehavior describe a type of a BSW module or cluster, for which different implementations may exist which are represented by different BswImplementations (note that the name of the meta-class BswModuleDescription is misleading here, because this meta-class does not contain the complete description of a module or cluster).

In case the different implementations of a BSW module or cluster are compiled for different CPUs, the corresponding BSWMDs can be treated as separate artifacts which may share the BswModuleDescription and/or BswInternalBehavior.

In case the implementations are compiled for the same CPU, i.e. are integrated on the same ECU and same address space (for example CAN drivers for several CAN channels), their BSWMDs still should share the BswModuleDescription and (in case it is equal) the BswInternalBehavior, but there has to be a mechanism to ensure, that the globally visible C symbols derived from the BswModuleDescription and BswInternalBehavior are unique. This is handled with infixes defined in the implementation part of the BSWMDT (see chapters  and ).

### 9. Relation to SwComponentType

Some BSW modules or clusters not only have interfaces to other BSW modules or clusters, but have also more abstract interfaces accessed from Application SW-Cs via the RTE. These BSW modules or clusters can be AUTOSAR Services, part of the ECU Abstraction, or Complex Drivers.

The more abstract interfaces required here are called AUTOSAR Interfaces (see  and ).

These AUTOSAR Interfaces are described by means of the Software Component Template (SWCT), they consist of ports, port interfaces and their further detailing. The root classes of the SWCT used to describe these elements for BSW modules are ServiceSwComponentType, EcuAbstractionSwComponentType and ComplexDeviceDriverSwComponentType (see ) which all are derived from AtomicSwComponentType.

In addition, the function calls from the RTE into these BSW module shall be modeled as RunnableEntity-s which are also contained in the SWCT. The root class of the SWCT used to describe the RunnableEntity-s (and a few other things) is called SwcInternalBehavior.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. BSW 模块描述概述
*原文标题：BSW Module Description Overview*

Figure  and the following class table show all the relations of the BSWMDT top layer, the BswModuleDescription.

 Usage of {reservedName} for BswModuleDescription.shortName
⌈
For a standardized module of ICC3 conformance class the BswModuleDescription.shortName shall be chosen identical to the {reservedName} (resp. library abbreviation) defined in .
⌋

In addition, the BswModuleDescription contains an attribute moduleId:

 BSW module identifier
  Imposition time: `IT_BswMD`
⌈
BswModuleDescription.moduleId shall refer to the identifier of the standardized AUTOSAR modules according to , if applicable. Otherwise (e.g. for ICC2 clusters) the identifier shall either be empty or chosen differently from the ones given in .
⌋

 Usage of module identifier and category
⌈
In any case, this identifier in the BSWMD shall be used to document the relation of an artifact to the standard and thus is a useful information for the conformance test. In addition to this, the generic category attribute (inherited from Identifiable) shall be used for a general classification of a BswModuleDescription as shown in the following table. This allows to check for constraints.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. BSW 接口
*原文标题：BSW Interface*

This chapter describes the meta-model elements which are used to define the interface level of a BSW module: The description of implementedEntry-s, expectedEntry-s, declaration of mode groups, declaration of triggers, dependencies from other modules and the interfaces for inter-partition communication.

### 12. BSW 模块 Entry
*原文标题：BSW Module Entry*

BswModuleEntry
⌈
The meta-class BswModuleEntry is used to model the signature of a C-function call
⌋

See figure  for more details.

The attributes of meta-class BswModuleEntry are shown in the following table. The attribute serviceId is used to identify the C-function and thus is an important information for an AUTOSAR conformance test.

 BSW service identifier
  Imposition time: `IT_BswMD`
⌈
For Standardized Interfaces, this identifier is defined in the AUTOSAR Software Specification (SWS) of the module. In case the C-function prototype represented by the entry is not standardized, it still can be used optionally, but its value shall differ from the standardized ones.
⌋

 Usage of functionPrototypeEmitter
⌈
If attribute functionPrototypeEmitter is set to "RTE", the RTE shall generate the function prototypes in the Module Interlink Header File. If the attribute is set to any other value or does not exist, the BSW module shall generate and provide the prototype in its header file(s).
⌋

| Class | BswModuleEntry | < | < | < |
|---|---|---|---|---|
| Note | This class represents a single API entry (C-function prototype) into the BSW module or cluster. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. BSW 模式 Declaration
*原文标题：BSW Mode Declaration*

Usage of BswModuleDescription.providedModeGroup
⌈
With the optional attribute providedModeGroup a BSW module can declare one or more ModeDeclarationGroupPrototypes, each defining a set of modes (mode group) which is used to control the activity of other BSW modules. Those other modules which require to be controlled by the mode group, shall declare a compatible ModeDeclarationGroupPrototype as attribute requiredModeGroup.
⌋

For more information see figure .

For the compatibility of ModeDeclarationGroupPrototypes see  . These declarations allow for the appropriate API generation and coordination of mode switches by the BSW Scheduler. Note that the configuration of the BSW Scheduler actually determines which provided mode group is connected to which required one. This makes the specification of the individual module independent of the overall BSW setup.

A ModeDeclarationGroupPrototype is based on a type definition by meta-class ModeDeclarationGroup.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. BSW Trigger Declaration

Usage of Trigger in BSW
⌈
With the optional attribute releasedTrigger a BSW module can declare that it releases one or more Triggers which are used to trigger events across BSW modules. Other modules which want to react on such a trigger, shall declare a compatible Trigger as attribute requiredTrigger (for the compatibility of Triggers refer to  ). These declarations together with the associated event model allow for the appropriate API generation and coordination by the BSW Scheduler.
⌋

For details see chapter .

Note that the configuration of the BSW Scheduler actually determines which released trigger is connected to which required one. This makes the specification of the individual module independent of the overall BSW setup.

| Class | Trigger | < | < | < |
|---|---|---|---|---|
| Note | A trigger which is provided (i.e. released) or required (i.e. used to activate something) in the given context. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. BSW 模块 Dependency
*原文标题：BSW Module Dependency*

### 16. 通用
*原文标题：General*

Figure  and the following table show the details of class BswModuleDependency. This class represents the expectations of one BSW module or cluster on another BSW module or cluster.

It should be noted, that in order to define a dependency it is not required to have a complete model of the the targeted BswModuleDescription. This allows to maintain each BSWMD separately. Nonetheless, the target module needs to be identified by the attribute BswModuleDependency.targetModuleId and/or the «atpUriDef» reference BswModuleDependency.targetModuleRef. Of course, if both attributes are used their values shall be consistent.

Because the module identifier is not always sufficient to identify the target module (e.g. Complex Drivers all have the same module ID), the usage of targetModuleRef is recommended.

A module cannot state a dependency to itself:

 bswModuleDependency shall refer to a different module
  Imposition time: `IT_BswMD`
⌈
* BswModuleDescription.bswModuleDependency.targetModuleId (if given) shall differ from BswModuleDescription.moduleId. This does not hold if the value is 254 (used for IO Hardware Abstraction modules) or 255 (used for Complex Driver modules).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Dependency and Packages

It is important to note that via BswModuleDependency the module description that owns the dependency refers to model elements which are also referred by the description of the module it depends on. This holds especially for instances of BswModuleEntry but also for other ARElements like data types referred from there. In order to avoid inconsistencies, one should put such mutually used M1 elements under a well defined location in terms of ARPackages.

Rules for the package location of standardized M1 model elements are given in . As a consequence we can state:

 Location of standardized BswModuleEntry-s
⌈
Instances of standardized BswModuleEntrys defined for an AUTOSAR module {reservedName} shall be located under a package AUTOSAR_{reservedName}/BswModuleEntrys/
⌋

for example

`AUTOSAR_Can`/BswModuleEntrys/`Can_SetControllerMode`

 Reference to standardized BswModuleEntry-s
⌈
If a BSWMD refers to a standardized BswModuleEntry via implementedEntry or expectedEntry it shall also use the path AUTOSAR_{reservedName}/BswModuleEntrys/ thus indicating that it relies on the AUTOSAR compliant implementation of the referred API functions.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Dependency：示例 and Constraints
*原文标题：Dependency: Examples and Constraints*

Note that expectedEntry-s do also include calls in interrupt context. An example could be as follows:

Consider we want to describe the callback-dependencies of an external EEPROM driver module from the (standardized) AUTOSAR SPI module. Consider the SPI driver offers an outgoing callback "EndJobNotification" always called in interrupt context. To describe the dependency we would have to create an instance BswModuleDescription.bswModuleDependency and do the following assignments:

* bswModuleDependency.targetModuleId = module identifier of the SPI driver (alternatively, we could use bswModuleDependency.targetModuleRef)

Figure  shows another example for an M1 model of a dependency between two hypothetical BSW modules. The dependency includes one regular function implemented by the lower layer module "Any" (which could stand for an MCAL module) and two callbacks implemented by the upper layer Module "MyComplexDriver".

Note that the model of the outgoing callbacks can (in general) only be completed at configuration time, because the number and names of the BswModuleEntrys used as callbacks might be unknown at the time the BSWMD of the lower level module is delivered.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. BswModuleEntry Relationship Set

The BswEntryRelationshipSet describes a collection of BswEntryRelationships. A BswEntryRelationship describes a relationship between two BswModuleEntrys and the type of relationship. This is typically used to express that a concrete BswModuleEntry is derived from an abstract BswModuleEntry. In this case the bswEntryRelationshipType is set to derivedFrom, the BswEntryRelationship.from references the abstract BswModuleEntry and the BswEntryRelationship.to references the concrete BswModuleEntry.

| Class | BswEntryRelationshipSet | < | < | < |
|---|---|---|---|---|
| Note | Describes a set of relationships between two BswModuleEntrys. |  |  |  |

Tags: atp.recommendedPackage=BswEntryRelationshipSets

| This Class is only used by the AUTOSAR Classic Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, AtpBlueprint, AtpBlueprintable, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| bswEntryRelationship | BswEntryRelationship | * | aggr | Relationship between two BswModuleEntrys. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. BSW Inter-Partition 接口
*原文标题：BSW Inter-Partition Interface*

### 21. 概述
*原文标题：Overview*

AUTOSAR BSW has the ability to communicate across partition boundaries which includes communication across processor core boundaries.

While this is in general possible over the RTE by using Ports and Software Components (e.g. Complex Drivers) on top of the BSW modules, there exist more efficient mechanisms of doing this with the help of "glue code" provided by the BSW Scheduler part of the RTE. See  for a detailed guideline.

These mechanisms follow the Client-Server communication pattern or the Sender-Receiver communication pattern of the VFB - see  - but cannot be used for inter-ECU communication.

The required meta-model part is shown in Figure .

### 22. Client-Server

| Class | BswModuleClientServerEntry | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents a single API entry into the BSW module or cluster that has the ability to be called in client-server fashion via the BSW Scheduler. |  |  |  |

In this regard it is more special than BswModuleEntry and can be seen as a wrapper around the BswModuleEntry to which it refers (property encapsulatedEntry).

| Tags: atp.recommendedPackage=BswModuleEntrys | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, Referrable | < | < | < |
| Aggregated by | BswModuleDescription.providedClientServerEntry, BswModuleDescription.requiredClientServerEntry | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| encapsulatedEntry | BswModuleEntry | 0..1 | ref | The underlying BswModuleEntry. |

Tags: xml.sequenceOffset=5

This Attribute is only used by the AUTOSAR Classic Platform.
| isReentrant | Boolean | 0..1 | attr | Reentrancy from the viewpoint of clients invoking the service via the BSW Scheduler: |
|---|---|---|---|---|

* true: Enables the service to be invoked again, before the service has finished.

* false: It is prohibited to invoke the service again before is has finished.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Sender-Receiver

Declaration of providedData and requiredData
⌈
With the optional attribute providedData a BSW module can declare that it provides a VariableDataPrototype that can be used in the sender role for sender-server communication across partition boundaries. The receiver module (which may be a different or the same module) shall declare a compatible VariableDataPrototype as attribute requiredData (for the compatibility of VariableDataPrototypes refer to  ). These declarations together with the associated event model and ECU configuration allow for the appropriate API generation and coordination by the BSW Scheduler.
⌋

For details see chapter .

 Constraints for providedData and requiredData
  Imposition time: `IT_BswMD`
⌈
Sender-Receiver communication in BSW is restricted to the pattern of so-called explicit communication (in the same way as described for software components in ) with queued behavior. This leads to some constraints for the VariableDataPrototype referred in the role BswModuleDescription.providedData or BswModuleDescription.requiredData:

* It shall not have an initValue.
* Its swDataDefProps.swImplPolicy shall be set to queued.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Count Value Sets

### 25. Background

When a high number of software components are integrated on an ECU the allocation of the RTE communication buffers (e.g. for implicit communication) or allocation of specific functions is getting a crucial performance factor. With the knowledge how often RTE API is invoked and consequential how often accesses to data are executed it is possible to optimize the implementation. For instance buffers with a high access frequency are put to a memory with low latency.

### 26. AccessCountSets

The meta-class AccessCountSet provides a collection of count values how often an implementation invokes RTE / SchM APIs provided for certain AbstractAccessPoint of a specific ExecutableEntity.

| Class | AccessCountSet | < | < | < |
|---|---|---|---|---|
| Note | This meta-class provides a set of count values evaluated according to the rules of a specific countProfile. | < | < | < |
| Base | ARObject | < | < | < |
| Aggregated by | ResourceConsumption.accessCountSet | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| accessCount | AccessCount | * | aggr | Count value for a AbstractAccessPoint. |

Stereotypes: atpSplitable; atpVariation Tags: atp.Splitkey=accessCount, accessCount.variationPoint.shortLabel vh.latestBindingTime=preCompileTime
| countProfile | NameToken | 0..1 | attr | This attribute defines the name of the count profile used to determine the AccessCount.value numbers. |
|---|---|---|---|---|

 Existence of attribute AccessCountSet.countProfile
  Imposition time: `IT_BswMD`
⌈
For each AccessCountSet, the attribute countProfile shall exist.
⌋

| Class | AccessCount | < | < | < |
|---|---|---|---|---|
| Note | This meta-class provides one count value for a AbstractAccessPoint. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 定义 of countProfile：DISTINGUISH_SINGULAR_ACCESSES
*原文标题：Definition of countProfile: DISTINGUISH_SINGULAR_ACCESSES*

The purpose of the countProfile `DISTINGUISH_SINGULAR_ACCESSES` is to determine on one hand the typical frequentness of RTE API invocation supporting the adjustment of the memory allocation. On the other hand it shall be information rich enough to provide precise information about the maximum number of access to data via implicit communication pattern which can also be used to optimize the memory allocation or even to question the existence of buffers at all. The AccessCountSets provide a collection of count values how often an implementation invokes RTE / SchM APIs provided for certain AbstractAccessPoint of a specific ExecutableEntity. In case of implicit communication accesses to data the RTE API may return data references to the location in memory where the data can be accessed. For that kind of AbstractAccessPoint the counting of the API invocations would not be sufficient but rather the number of implemented access to composite data elements via the data reference is important.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Structuring of AccessCountSets

In general the detailed usage how AccessCountSets are used to structure a M1 model is not standardized. Nevertheless this section provides some hints how it might be applied for different use cases. Regardless how the AccessCountSets are sub-structured in detail a valid AUTOSAR model can only provide at most one value according a specific countProfile for a particular AbstractAccessPoint. Otherwise the count values would be ambiguous since multiple values would be stated for one kind of access.

 AccessCount.value needs to be unambiguous
  Imposition time: `IT_BswMD`
⌈
AUTOSAR model shall define at most one AccessCount.value per countProfile for a specific AbstractAccessPoint.
⌋

 Structuring according ExecutableEntitys
⌈
The meta-class AccessCountSet should be used to group the AccessCount.values for one particular ExecutableEntity.
⌋

 Structuring according Variants
⌈
The meta-class AccessCountSet should be used to group the AccessCount.values which are valid for one particular variant of the software. The grouping might be used if the AccessCount.values are evaluated by code parsing since the parsing might be done for a specific variant of the C-implementation.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. BSW 行为
*原文标题：BSW Behavior*

### 30. BSW 行为概述
*原文标题：BSW Behavior Overview*

Figure  and the following class table show the attributes and description of class BswInternalBehavior. Since several attributes on this level are the same for BSW modules and SWCs, these are aggregated by the abstract class InternalBehavior which is shown in the same figure and in a separate class table.

The following subsections give a more detailed explanation of the various attributes.

| Class | InternalBehavior (abstract) | < | < | < |
|---|---|---|---|---|
| Note | Common base class (abstract) for the internal behavior of both software components and basic software modules/clusters. | < | < | < |
| Base | ARObject, AtpClassifier, AtpFeature, AtpStructureElement, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Subclasses | BswInternalBehavior, SwcInternalBehavior | < | < | < |
| Aggregated by | AtpClassifier.atpFeature | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| constantMemory | ParameterDataPrototype | * | aggr | Describes a read only memory object containing characteristic value(s) implemented by this InternalBehavior. |

The shortName of ParameterDataPrototype has to be equal to the ''C' identifier of the described constant.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. BSW 模块 Entity
*原文标题：BSW Module Entity*

### 32. 概述
*原文标题：Overview*

Figure  and the next class tables shows the attributes of BswModuleEntity, its base class ExecutableEntity and its specializations for called, scheduled and interrupt entities. These attributes are mainly required to configure the BSW Scheduler.

It is important to understand the difference between BswModuleEntity and BswModuleEntry: The first one describes properties of a code fragment whereas the second one describes only the interface (i.e. the signature) used to invoke a code fragment.

 Executable entity in BSW
⌈
The abstract meta-class ExecutableEntity is not specific for the Basic Software, it is imported from the CommonStructure package of the meta-model and is defined as follows:
⌋

| Class | ExecutableEntity (abstract) | < | < | < |
|---|---|---|---|---|
| Note | Abstraction of executable code. | < | < | < |
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Subclasses | BswModuleEntity, RunnableEntity | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| activationReason | ExecutableEntityActivationReason | * | aggr | If the ExecutableEntity provides at least one activationReason element the RTE resp. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 256 章（内容从略，见纯文本全文）

33. BSW 模块 Entity Attributes
34. BSW 模块 Entity Constraints
35. BswCalledEntity
36. BswSchedulableEntity
37. BswInterruptEntity
38. BSW 模块 Call Point
39. 概述
40. Direct Call Points
41. Client-Server Call Points
42. BSW Sender-Receiver 数据 Access
43. BSW Exclusive Areas
44. BSW Scheduler Name Prefix
45. BSW Event
46. 概述
47. 时序 and Background Events
48. Trigger Events
49. 模式 Events
50. BSW Events for Client-Server Communication
51. BSW Events for Sender-Receiver Communication
52. Activation Reason of a BSW 模块 Entity
53. BSW Communication Policy
54. BSW Local 数据
55. 同步 with a Corresponding SWC
56. BSW 行为 Distributed over 分区
57. BSW API Options
58. BSW Implementation
59. 概述
60. 配置 Parameter 定义 and Values as Part of a BSWMD
61. Implementation
62. 简介
63. Implementation 描述概述
64. Assertions and 需求
65. Implementation of a 软件组件
66. Linking to 代码
67. Dependencies
68. Compiler
69. Linker
70. Build Action 清单
71. ResourceConsumption
72. Static and Dynamic Resources
73. Resource consumption 概述
74. Static 存储 Needs
75. 通用
76. 存储 Sections
77. Dynamic 存储 Needs
78. 通用
79. Stack
80. Heap
81. Execution Time
82. 通用
83. Preliminaries
84. 范围
85. Assertions Versus 需求
86. In 范围
87. Out of 范围
88. Background
89. Dependency of the Execution Time on Hardware
90. Dependency on Hardware 状态
91. Dependency on Logical Context
92. Dependency on External 代码
93. Description-Model for the Execution Time
94. an Execution-Time 描述的Detailed 结构
95. ExecutionTime References an "ECU"
96. ExecutionTime Includes a HW-Configuration
97. ExecutionTime Includes a MemorySectionLocation
98. ExecutionTime Includes a SoftwareContext
99. Dependency on External Libraries
100. Several Qualities of Execution Times
101. AnalyzedExecutionTime
102. MeasuredExecutionTime
103. SimulatedExecutionTime
104. RoughEstimateOfExecutionTime
105. Measurement and Calibration 支持
106. 概述 on McSupportData
107. Attributes for McSupportData
108. Calibration 数据的支持 for 软件 Emulation
109. 支持 for 功能性建模 of Measurement and Calibration
110. 支持 for Structuring of Measurement and Calibration
111. McSupportData for Rapid Prototyping
112. Rapid Prototyping 支持数据
113. Rapid Prototyping 支持 for 软件 components or 基础软件模块
114. Differentiation of execution contexts
115. BSW Variant 处理
116. BSW 接口 Variation Points
117. BSW 行为 Variation Points
118. BSW Implementation Variation Points
119. BSW 服务 Needs
120. 概述
121. Specific 服务 Needs
122. NvM 服务 Dependencies
123. Nvm Use Case：Permanent RAM Block
124. Nvm Use Case：Temporary RAM Block
125. Nvm Use Case：RAM Block with explicit 同步
126. 诊断服务 Dependency
127. 功能 Inhibition Needs
128. 功能 Inhibition 管理器服务 use Case：read 功能 permission
129. 功能 Inhibition 管理器服务 use Case：react on suppressed or unavailable events
130. 诊断 Event Needs
131. Dem 服务 Use Case：诊断 monitor, debouncing by Dem
132. Dem 服务 Use Case：基础软件模块 implements a Hardware 关机
133. Dem 服务 Use Case：基础软件模块 checks whether an event is suppressed
134. 诊断 Communication Needs
135. Dcm 服务 Use Case：read/write current values by BswModuleEntrys
136. Dcm 服务 Use Case：start/stop or request routine results
137. Dcm 服务 Use Case：IO 控制
138. Dcm 服务 Use Case：Access to 协议, session and security Information
139. Dcm 服务 Use Case：Seed / Key 处理 for security level access and the optional security attempt counter 处理
140. Dcm 服务 Use Case：Upload and download of 数据
141. OBD 服务 Needs
142. OBD 服务 Use Case：Read value via OBD 服务
143. OBD 服务 Use Case：Read vehicle information via OBD 服务
144. Watchdog 服务 Dependencies
145. Watchdog 服务 use Case：Local Supervision
146. Watchdog 服务 use Case：控制 global supervision or get global supervision status
147. ECU 状态管理器服务 Needs
148. EcuM Flex Use Case：select 关机 Target
149. EcuM Flex Use Case：select Boot Target
150. EcuM Flex Use Case：use Alarm Clock
151. 基础软件 Production 错误
152. 错误 Tracer Needs
153. Default 错误 Tracer 服务 use Case：report failure
154. 附录
155. Reference Material
156. Abbreviations
157. Imposition Times of Constraints
158. 术语表
159. Constraint and 规范 History
160. Constraint History of this Document according to AUTOSAR R4.0.1
161. Changed Constraints in R4.0.1
162. Added Constraints in R4.0.1
163. Deleted Constraints
164. Constraint History of this Document according to AUTOSAR R4.0.2
165. Changed Constraints in R4.0.2
166. Added Constraints in R4.0.2
167. Deleted Constraints in R4.0.2
168. Constraint History of this Document according to AUTOSAR R4.0.3
169. Changed Constraints in R4.0.3
170. Added 规范 Items in R4.0.3
171. Added Constraints in R4.0.3
172. Deleted Constraints in R4.0.3
173. Constraint History of this Document according to AUTOSAR R4.1.1
174. Changed 规范 Items in R4.1.1
175. Changed Constraints in R4.1.1
176. Added 规范 Items in R4.1.1
177. Added Constraints in R4.1.1
178. Deleted 规范 Items in R4.1.1
179. Deleted Constraints in R4.1.1
180. Constraint History of this Document according to AUTOSAR R4.2.1
181. Changed Constraints in R4.2.1
182. Added Constraints in R4.2.1
183. Deleted Constraints in R4.2.1
184. Changed 规范 Items in R4.2.1
185. Added 规范 Items in R4.2.1
186. Deleted 规范 Items in R4.2.1
187. Constraint History of this Document according to AUTOSAR R4.2.2
188. Added 规范 Items in 4.2.2
189. Changed 规范 Items in 4.2.2
190. Deleted 规范 Items in 4.2.2
191. Added Constraints in 4.2.2
192. Changed Constraints in 4.2.2
193. Deleted Constraints in 4.2.2
194. Constraint History of this Document according to AUTOSAR R4.3.0
195. Added 规范 Items in 4.3.0
196. Changed 规范 Items in 4.3.0
197. Deleted 规范 Items in 4.3.0
198. Added Constraints in 4.3.0
199. Changed Constraints in 4.3.0
200. Deleted Constraints in 4.3.0
201. Constraint History of this Document according to AUTOSAR R4.3.1
202. Added 规范 Items in 4.3.1
203. Changed 规范 Items in 4.3.1
204. Deleted 规范 Items in 4.3.1
205. Added Constraints in 4.3.1
206. Changed Constraints in 4.3.1
207. Deleted Constraints in 4.3.1
208. Constraint History of this Document according to AUTOSAR R4.4.0
209. Added 规范 Items in 4.4.0
210. Changed 规范 Items in 4.4.0
211. Deleted 规范 Items in 4.4.0
212. Added Constraints in 4.4.0
213. Changed Constraints in 4.4.0
214. Deleted Constraints in 4.4.0
215. Constraint History of this Document according to AUTOSAR R19-11
216. Added 规范 Items in 19-11
217. Changed 规范 Items in 19-11
218. Deleted 规范 Items in 19-11
219. Added Constraints in 19-11
220. Changed Constraints in 19-11
221. Deleted Constraints in 19-11
222. Constraint History of this Document according to AUTOSAR R20-11
223. Added 规范 Items in R20-11
224. Changed 规范 Items in R20-11
225. Deleted 规范 Items in R20-11
226. Added Constraints in R20-11
227. Changed Constraints in R20-11
228. Deleted Constraints in R20-11
229. Constraint History of this Document according to AUTOSAR R21-11
230. Added 规范 Items in R21-11
231. Changed 规范 Items in R21-11
232. Deleted 规范 Items in R21-11
233. Added Constraints in R21-11
234. Changed Constraints in R21-11
235. Deleted Constraints in R21-11
236. Constraint History of this Document according to AUTOSAR R22-11
237. Added 规范 Items in R22-11
238. Changed 规范 Items in R22-11
239. Deleted 规范 Items in R22-11
240. Added Constraints in R22-11
241. Changed Constraints in R22-11
242. Deleted Constraints in R22-11
243. Constraint History of this Document according to AUTOSAR R23-11
244. Added 规范 Items in R23-11
245. Changed 规范 Items in R23-11
246. Deleted 规范 Items in R23-11
247. Added Constraints in R23-11
248. Changed Constraints in R23-11
249. Deleted Constraints in R23-11
250. Spec Item and Constraint History of this Document according to AUTOSAR R24-11
251. Added 规范 Items in R24-11
252. Changed 规范 Items in R24-11
253. Deleted 规范 Items in R24-11
254. Added Constraints in R24-11
255. Changed Constraints in R24-11
256. Deleted Constraints in R24-11
257. Spec Item and Constraint History of this Document according to AUTOSAR R25-11
258. Added 规范 Items in R25-11
259. Changed 规范 Items in R25-11
260. Deleted 规范 Items in R25-11
261. Added Constraints in R25-11
262. Changed Constraints in R25-11
263. Deleted Constraints in R25-11
264. Spec Item and Constraint History of this Document according to AUTOSAR R26-11
265. Added 规范 Items in R26-11
266. Changed 规范 Items in R26-11
267. Deleted 规范 Items in R26-11
268. Added Constraints in R26-11
269. Changed Constraints in R26-11
270. Deleted Constraints in R26-11
271. Mentioned Class Tables
272. 建模 of InstanceRef
273. 简介
274. 建模
275. Upstream 映射
276. 简介
277. ComM
278. Dcm
279. Dem
280. EcuC
281. FiM
282. NvM
283. Rte
284. StbM
285. WdgM
286. Xfrm
287. Splitable Elements in the 范围 of this Document
288. Variation Points in the 范围 of this Document
