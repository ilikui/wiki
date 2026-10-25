# Specification of Abstract Platform (`AbstractPlatformSpecification`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 947 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TPS_AbstractPlatformSpecification_947\AUTOSAR_FO_TPS_AbstractPlatformSpecification.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TPS_AbstractPlatformSpecification_947\AUTOSAR_FO_TPS_AbstractPlatformSpecification.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TPS_AbstractPlatformSpecification_947\zzgen\FO_TPS_AbstractPlatformSpecification.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. 文档结构
*原文标题：Document Structure*

This document contains the specification of the design of an AUTOSAR abstract platform (XP). Due to the specification being abstract of the AUTOSAR adaptive platform (AP) and AUTOSAR classic platform (CP), it is released as part of the AUTOSAR foundation (FO).

The document is structured in the following way:

Section  (this chapter) documents the terms, abbreviations, conventions; scope and limitations in the specification and requirement tracing.

Section  provides a description of the big picture, sets the background reasons and motivation for the specification and usage principles for intended stakeholders. Additionally, the general modeling approach and modeling decisions are described.

Section  dives into the design aspects of an abstract platform. The modeling is described along with constraints and specification items. The sub-sections detail the methodology, the modeling of the VFB elements and the data types.

Section  annotation and traceability of requirements.

Section  example ARXML listings and models.

### 3. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求追踪
*原文标题：Requirements Tracing*

None.

### 5. 范围 and 限制
*原文标题：Scope and Limitations*

In the AUTOSAR timeline, the XP specification was added after the CP and AP. It is also independent of the existing CP/APs, and for that reason, it is released as part of the AUTOSAR Foundation.

The XP uses the terms: VFB and VFB++. The AUTOSAR VFB is conceptually described in . While that document resides in the CP, the general principles in  also apply to AP and XP. In particular the idea of a VFB level view applies in modeling terms to the set of those meta-model artifacts i.e. components, ports, interfaces, connectors used to describe the functional inter-ECU communications. This is independent of whether the platform under discussion is signal based, service based or abstract.

An XP VFB++ description is a purely software functional design description. It is independent of topology and deployment and thus does not describe these.

An XP description has its technical borders. The basis of an XP description shall be an AUTOSAR System description. This fits together with general methodology of AUTOSAR to root the description of an AUTOSAR system in an own description, see .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Concept

### 7. Background

The existing AUTOSAR meta-model provides a means to comprehensively design and deploy applications on CP ECUs and AP Machines. Depending on the intended chosen platform for concrete deployment, the feature/function design model is (intentionally) tightly coupled to the choice of platform.

A system designer is drawn in advance into a concrete decision whether to design and deploy on AP or CP or indeed non-AUTOSAR platform. The design choices become therefore biased by the intended deployment platform.

An system designer at an early software design stage may not necessarily care about for example what type of concrete component shall implement the function, or, which type of concrete interface provides the required data.

Rather the designer just wants to model the interaction between the functional software blocks and specify the basics: i.e. signal names, the directional flow of the data (providers/consumers) and the physical data types. Further refinement of the design will be done in a downstream stage, i.e. separation of concerns.

In methodology terms, this dovetails quite neatly to the whole design approach of AUTOSAR - whereby typically a staged approach to design is used.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Usage

### 9. 通用
*原文标题：General*

The specification aims to provide a system description of a functional model. It further allows requirement annotation and general traceability of model elements including requirements and functional elements. The abstract description may provide a higher level view of a system, to help a system designers "step back" from early decisions about deployment, or indeed whether to defer that decision to a downstream design stage or to a supplier(s).

While the principal use-cases are founded for AP and CP, it is not (by design) intended to be exclusive to those platforms. Usage with other automotive or non-automotive domains should also be possible as shown in Figure .

Standardized Non-AUTOSAR systems have their own domain-specific models/IDLs and it is not within the scope of the XP to try to determine what these domain-specific models/IDLs are - or indeed, whether they should be accommodated in the scope of the XP. Rather, the intention is that through domain-specific tooling some form of model-to-model translation/derivation can be done from an XP description to a non-AUTOSAR model.

### 10. AUTOSAR Specific

There is not a hard modeling dependency between an XP and a AP/CP platform view in the sense that the concrete level depends on the abstract. The methodological approach does not forbid a system designer bypassing entirely an XP model and designing only in an AP/CP model to achieve the desired result.

Nevertheless, with the support of tooling and tracing, it should be similarly entirely possible to create an XP out of an AP/CP description.

An example scenario is shown in Figure . An abstract platform model with several levels of compositions of XSCs of different flavors, is derived to parallel AP/CP models. In this case a split of the XP model is shown, but in general, any number of permutations could be possible include a full derivation to either platform.

### 11. 建模 Approach
*原文标题：Modeling Approach*

### 12. Meta-Model Choice

If the goal is to allow an abstract design, it could be argued that the chosen M2 model should also be abstract (of AUTOSAR). However, while the abstract design should be open to designers of non-AUTOSAR platforms to utilize, the primary focus is usage within the AUTOSAR domain i.e. AP/CP.

For that reason, the argumentation of using the AUTOSAR Meta-Model  as the basis for the M2 level modeling approach is solidified. The XP is designed using the AUTOSAR meta-model, but should not restrict usage of abstract designs to AUTOSAR.

### 13. Bottom-up vs Top-down

Based on the assumption of the meta-model choice in , the next point is how to approach the creation of an abstract platform model. In very general terms, there are two possible approaches: bottom-up and top-down. Note: AUTOSAR supports tracing between models with dedicated meta-model artifacts in .

### 14. Top-down

If an XP model is created top-down, the VFB++ functional interactions are modeled using a green fields approach - this abstract model is then traced through to the creation of a new concrete model.

If the concrete model shall be an AUTOSAR model this involves deriving the VFB++ view to the VFB view in the respective AP/CP. If the concrete model is a non-AUTOSAR model it is in the domain of the non-AUTOSAR model to define this.

While this approach offers more freedom to design, there is a risk of specifying an XP which, in the end, is too distant from the needs of the existing platforms. The more likely approach therefore is to favor the bottom-up method.

### 15. Bottom-up

If an XP model is created by bottom-up, an existing concrete platform model is taken as the basis for the content. This in practice means that this form of XP description is immediately more valid than the former approach because it already has a basis in a concrete platform model. This approach would also allow for an automated creation of an XP description.

If the concrete model is an AP and CP model, the existing VFB view in the AP/CP platforms should be abstracted upstream to create the XP VFB++ model. If the concrete model is a non-AUTOSAR model it is in the domain of the non-AUTOSAR model to define this.

With this approach, the XP design is better guaranteed to fit well with the existing platforms.

### 16. Meta-class selection

Having decided on the general approach for the design of the XP, the next question is which approach to use regarding meta-class selection, i.e. re-use existing meta-classes or create new meta-classes.

While the AP and CP are based on different architecture principles, they mostly share the same modeling principles on VFB level and thus the VFB modeling. The approach is therefore to examine the VFB level model in both platforms as a primary basis and the non-AUTOSAR platforms as a secondary basis.

The existing AUTOSAR meta-model, especially the specification of the AUTOSAR Software-Component Template  already provides a good basis to comprehensively design a software component model. The principles therein may also be found in other more generic non-AUTOSAR component models.

It may be that any given identical meta-class may be used in any of the XP, AP or CP platforms. This approach is similar to that used when designing the AP meta-model, and similarly, it is necessary to either extend meta-classes with XP specifics and constrain them to the XP ().

### 17. 抽象 Platform
*原文标题：Abstract Platform*

### 18. Methodology

### 19. 概述
*原文标题：Overview*

An abstract platform system description provides the possibility to achieve a higher-level software view on the system. An architect can decide during design time which type of downstream AUTOSAR system description to use.

A level of architectural freedom through abstraction is attained by formally describing the functional interactions on a component model level, but without fixing details of any downstream implementation platform.

 Principle of an abstract platform system description
  Status: DRAFT
⌈
An abstract platform system description allows a platform independent specification of the functional interactions of inter-connected software components.
⌋

 VFB level modeling of an abstract platform
  Status: DRAFT
⌈
An abstract platform description uses those VFB level elements in the AUTOSAR meta-model as the basis for modeling.
⌋

 Agnosticism of deployment aspects
  Status: DRAFT
⌈
An abstract platform is agnostic of deployment aspects.
⌋

AUTOSAR CP/AP models are still the basis for platform specific software design and should remain independent of an XP. To preserve the separation of concerns, it should be avoided that AUTOSAR CP/AP models use XP artifacts.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 系统建模
*原文标题：System Model*

### 21. 概述
*原文标题：Overview*

As per existing system descriptions in AP and CP, an XP needs its own system description to distinguish XP content from other types of system descriptions/extracts. The basis for all AUTOSAR system descriptions/extracts is the meta-class System and as with other AUTOSAR system descriptions, the category shall be used to identify the content.

 System category for a system description with Abstract Platform content
  Status: DRAFT
⌈
The System element that contains design artifacts that are relevant for an Abstract Platform shall have the category:

* `ABSTRACT_PLATFORM_SYSTEM_DESCRIPTION`.
⌋

See  for an example ARXML listing.

### 22. Root Composition

As with other types of Systems in AP and CP, the RootSwCompositionPrototype in an XP references a CompositionSwComponentType as the root composition. With reference to , this has the semantics of just a plain old composition.

| Class | System | < | < | < |
|---|---|---|---|---|
| Note | The top level element of the Abstract Platform System Description. |  |  |  |

| Tags: atp.recommendedPackage=Systems | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, AtpClassifier, AtpFeature, AtpStructureElement, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, UploadableDesignElement, UploadablePackageElement | < | < | < |
| Aggregated by | ARPackage.element, AtpClassifier.atpFeature | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| mapping | SystemMapping | * | aggr | Stereotypes: atpSplitable; atpVariation Tags: atp.Splitkey=mapping.shortName, mapping.variationPoint.shortLabel vh.latestBindingTime=postBuild |
| systemComSpecDefinition | SystemComSpecDefinitionSet | * | ref | Reference to the set of ComSpec definitions that are used for inter-ECU communication in the System. |
| systemVersion | RevisionLabelString | 0..1 | attr | Version number of the System Description. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 软件组件建模
*原文标题：Software Component Model*

### 24. 概述
*原文标题：Overview*

The XP software component model follows generally the aspects laid out in . The principles of reusability of SWCs and the type-prototype pattern are applicable in an XP, albeit in most cases, with a more restrictive view than the concrete platforms. An example of this more restrictive view is in the permitted types of software components shown later.

Another feature taken over from  is the ability to specify a hierarchy of SWCs of arbitrary complexity. In contrast to the CP software component model which specifies precise atomic SWC types with precise use cases in mind; the XP relaxes this kind of precision and targets a more generic typing of SWCs.

The XP SWC model allows a component design which does not force any intended downstream usage to the designer, but nevertheless allows a limited set of indicators  to identify the intended usage of the component.

### 25. 组件 Compositions
*原文标题：Component Compositions*

This  is no different than in AP and CP which handle encapsulation of SWCs the same. The modeling principles of compositions and encapsulation are suitably explained in  and  and do not need to be further detailed here.

 Recursive component definition in an abstract platform
  Status: DRAFT
⌈
An abstract component design allows recursive depth-wise definition of components.
⌋

### 26. SwComponentPrototypes

The meta-class CompositionSwComponentType aggregates SwComponentPrototype in the role component which facilitates the modeling of an arbitrary nesting of components of SwComponentTypes. However, the XP only utilizes CompositionSwComponentTypes as the contained type.

 Typing of SwComponentPrototypes used in a CompositionSwComponentType in an abstract platform
  Status: DRAFT
⌈
The SwComponentPrototype.type aggregated in a CompositionSwComponentType shall be CompositionSwComponentType in an abstract platform.
⌋

### 27. 组件类型
*原文标题：Component Types*

In an XP, an designer should have the freedom to design a VFB++ hierarchical SWC model in a rather free-floating manner. The SWCs can be described by utilizing a subset of intended component types.

The approach is to allow a modeling of a generic type of component, CompositionSwComponentType as the generic component type. In other words, an abstract platform component is not bound to a specific use case. The CompositionSwComponentType inherits from the category attribute from Identifiable which means it can be assigned a subset of a categorys to specify the functional intent of the component.

Since CompositionSwComponentType is used in this way instead of a designated AtomicSwComponentType, it means CompositionSwComponentType is used all the way down the component hierarchy tree. To distinguish between the cases where a CompositionSwComponentType is designated as an actual plain composite software component, or as a 'quasi' atomic software component the category is restricted depending on the intent.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Connectors

While support for modeling of port connectors in an XP entirely makes sense for certain downstream architectures, in others it doesn't. Especially for SOA based platforms it can be argued that they are superfluous - SOA middlewares typically only create the "connection" when the provided service is "found" during run time after the other side has initiated a search.

 Modeling of connectors in an abstract platform
  Status: DRAFT
⌈
The XP allows modeling of connectors, but defers their concrete application to a downstream platform.
⌋

In other words, the XP is agnostic of the concrete platform, but to facilitate a usage of connectors in a concrete platform where they have real semantics, it does not prohibit their use.

The XP therefore takes over the modeling of connectors from .

### 29. Port Groups

Port grouping is fairly standard in component models, though it is really at the discretion of the model itself what the semantic meaning of a port group is. Several scenarios are possible such as limiting inclusion of discrete ports in discrete groups or allowing discrete ports to be mapped into different groups. Some models define an abstract port group as being a composition which may be further decomposed in a downstream platform.

 Grouping of ports in an abstract platform
  Status: DRAFT
⌈
Assigning discrete ports to zero or more port groups shall be possible in an abstract platform.
⌋

### 30. Port 接口
*原文标题：Port Interfaces*

### 31. 概述
*原文标题：Overview*

The XP follows the same general principles laid down in . The XP restricts the model to disallow that the same port is read/write.

 Prototyping of ports in an abstract platform
  Status: DRAFT
⌈
An abstract platform port is either in the role of requirer or provider but not both.
⌋

### 32. Port 接口
*原文标题：Port Interfaces*

The XP does not mandate for specific types of PortInterfaces. Whereas in CP/AP, the respective VFB models in each, specify specific types of PortInterfaces for an intended functional usage, e.g.: AP ServiceInterface is intended for a SOA based deployment, the XP opts for an interface type which could be applied generically.

The XP does allow to provide some further semantics to a ApplicationInterface to indicate an intended usage for a certain port via ApplicationInterface.category. This serves as a hint which may be optionally considered when deriving (if it has a semantic meaning on the downstream platform), even though the ApplicationInterface itself does convey anything relating to the functional usage or underlying signaling architecture between ports .

 Generic typing of interfaces in an abstract platform
  Status: DRAFT
⌈
The abstract platform does not semantically bind types of PortInterfaces to a particular functional usage.
⌋

 Agnosticism of abstract platform interfaces to middleware deployments
  Status: DRAFT
⌈
An abstract platform interface is agnostic of both architecture and any middleware deployment options.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Elements of Application 接口
*原文标题：Elements of Application Interface*

The make-up of a ApplicationInterface borrows from the approach taken in the AP ServiceInterface to allow flexibility as to the choice of how data is exchanged.

It is possible that a downstream platform only supports atomic interface types, in this case, during derivation, the individual elements of a ApplicationInterface must be mapped to discrete atomic interfaces. Obviously, this may have an impact on ports which would then need to be created or alternatively some facade pattern employed.

 Elements of a ApplicationInterface
  Status: DRAFT
⌈
A ApplicationInterface allows the following forms of data exchange:

* ClientServerOperation aggregated in the role command.
* VariableDataPrototype aggregated in the role indication.
* Field aggregated in the role attribute.
⌋

 Semantics of a ApplicationInterface.command
  Status: DRAFT
⌈
A command is a RPC with optional function arguments, called by the requirer (client) and executed on the side of the provider (server).
⌋

 Semantics of a ApplicationInterface.indication
  Status: DRAFT
⌈
An indication is a plain block of data that shall be updated (indicated) by the provider (server).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 数据类型
*原文标题：Data Types*

### 35. 概述
*原文标题：Overview*

The XP partially takes over the AUTOSAR data typing model and principles defined in . With reference to  and the table "Abstraction Levels for Describing Data", only the Application Data Level shall be used.

The XP is concerned with a modeling of high-level data types and attributes of data types like the physical meaning of a data type. XP data types are not concerned with implementation or platform level data types; it is expected that these are fully in the domain of a concrete platform.

 Allowed data types in an abstract platform
  Status: DRAFT
⌈
The abstract platform allows deferral of data typing or explicit data typing using:

* integrals in the form of ApplicationDataType.category=VALUE
* structures in the form of ApplicationDataType.category=STRUCTURE
* arrays in the form of ApplicationDataType.category=ARRAY
* strings in the form of ApplicationDataType.category=STRING
* booleans in the form of ApplicationDataType.category=BOOLEAN
⌋

 Exclusion of implementation level data types
  Status: DRAFT
⌈
The abstract platform does not support modeling of ImplementationDataType.
⌋

### 36. Properties of 数据定义
*原文标题：Properties of Data Definitions*

The properties of data definitions from  also apply in XP. However, due to the reduced subset of supported categorys of ApplicationDataTypes (see ), the list of SwDataDefProps attributes is therefore also constrained respectively.

The semantic meaning of those attributes defined in  is specified in .

 Supported SwDataDefProps applicable to ApplicationDataTypes exclusive to the abstract platform
  Status: DRAFT
  Imposition time: `IT_Apsd`
⌈
| Attributes of SwDataDefProps | Root Elem. | < | < | < | Attribute Existence per Category | < | < | < | < |
|---|---|---|---|---|---|---|---|---|---|
| ApplicationDataType | ApplicationDeferredDataType | ApplicationRecordElement | ApplicationArrayElement | VALUE | STRUCTURE | ARRAY | STRING | BOOLEAN |  |
| annotation | x | x | x | x | * | * | * | * | * |
| compuMethod | x |  |  |  | 0..1 |  |  |  | 0..1 |
| dataConstr.dataConstrRule.physConstrs | x |  | x | x | 0..1 |  | 0..1 |  | 0..1 |
| dataConstr.dataConstrRule.internalConstrs | x |  | x | x | d/c |  | d/c |  | d/c |
| displayFormat | x |  | x | x | 0..1 |  | 0..1 | 0..1 | 0..1 |
| invalidValue | x |  |  |  | 0..1 |  |  | 0..1 | 0..1 |
| swTextProps | x |  |  |  |  |  |  | 1 |  |
| unit | x |  |  |  | 0..1 |  |  | 0..1 | 0..1 |
| Other Attributes below the Root Element | < | < | < |  |  |  |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. 数据类型 Categories
*原文标题：Data Type Categories*

The basis for allowed application data types in an XP are those application data types cited in AUTOSAR Software-Component Template  - but not all categorys of ApplicationDataType are supported in XP.

 Applicable categorys for data types in an abstract platform
  Status: DRAFT
  Imposition time: `IT_Apsd`
⌈
| Category | Applicable to ... | < | < | < | < | < | < | Description |
|---|---|---|---|---|---|---|---|---|
| ApplicationDataType | ApplicationDeferredDataType | ApplicationArrayDataType | ApplicationRecordDataType | ApplicationPrimitiveDataType | ApplicationRecordElement | ApplicationArrayElement |  |  |
| VALUE |  |  |  |  | x | x | x | Contains a single value. |
| STRUCTURE |  |  |  | x |  | x | x | Holds one or several further elements which can have different AutosarDataTypes. |
| STRING |  |  |  |  | x | x | x | Contains a single value interpreted as a text string (note that it appears as a single value for the application domain). |
| ARRAY |  |  | x |  |  | x | x | A fixed-sized array of sub-elements of the same type. |
| BOOLEAN |  |  |  |  | x | x | x | Contains a single boolean (true/false) state. |

⌋

| Class | ApplicationDataType (abstract) | < | < | < |
|---|---|---|---|---|
| Note | ApplicationDataType defines a data type from the application point of view. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Application 数据类型
*原文标题：Application Data Types*

The XP is targeting a platform independent design of data exchange between SWCs (applications). To keep to the underlying goal of remaining independent of concrete platform implementation details, a description of the used data types in the XP is therefore naturally limited to application data types.

The AUTOSAR data type model starts with AutosarDataType. The meta-class AutosarDataType inherits from Identifiable which provides the identifying attributes needed: longName, shortName. The category is then used to identify the underlying category of application level data type.

### 39. Sub-classes of ApplicationDataType

The XP supports the sub-classes in the table in . Partially those sub-classes are re-used from  and are thus defined there. The sub-classes defined purely by the XP are detailed here.

 Sub-classes of ApplicationDataType
  Status: DRAFT
⌈
In an abstract platform, the abstract meta-class ApplicationDataType is sub-classed into:

* ApplicationDeferredDataType
⌋

These XP specific sub-classes are detailed in the following sections.

### 40. Deferred 数据类型
*原文标题：Deferred Data Type*

Due to the fact that a data type may not yet be known in the XP, or shall be defined later in the design in a downstream stage, XP typing can be deferred with the proviso that it shall be concretely defined during derivation to a concrete platform or mapping to a implementation data type.

This is done using the XP exclusive type called ApplicationDeferredDataType. Fully usable in an XP, together with their properties ().

 Deferral of the category of data type in an abstract platform
  Status: DRAFT
⌈
The abstract platform provides a non-committal data type ApplicationDeferredDataType to allow deferral of an actual data type to a later stage.
⌋

 Semantics of an ApplicationDeferredDataType
  Status: DRAFT
⌈
An ApplicationDeferredDataType represents a placeholder, Identifiable within a model, but having no actual applicable category of data type.
⌋

As mentioned previously in , AUTOSAR ApplicationDataTypes are assigned a category value from . The ApplicationDeferredDataType however is an exception to this rule since it has no concrete type yet.

It is therefore necessary to exclude any assignment of categorys of type in a model .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 类型追踪
*原文标题：Type Tracing*

As mentioned previously, the XP is not concerned with those data types below the level of ApplicationDataTypes. Data type tracing between an XP and a concrete platform model must be done on the same level - in the context of AUTOSAR, that means tracing only between ApplicationDataTypes in XP/CP/AP as shown in Figure .

Any usage of XP ApplicationDataTypes in a CP or AP is not allowed (Figure  left). Any indirect tracing between XP ApplicationDataTypes and either CP AbstractImplementationDataTypes or AP AbstractImplementationDataTypes is not supported (Figure  right).

 Data type tracing between abstract and concrete platform models
  Status: DRAFT
⌈
Tracing of data types between abstract and concrete platform models is solely on the level of ApplicationDataTypes.
⌋

For a model based example view on tracing see chapter . The remainder of this section details any aspects to consider when tracing (deriving/abstracting) XP specific sub-classes of ApplicationDataTypes (listed by sub-chapter here).

### 其余 64 章（内容从略，见纯文本全文）

42. Deferred 数据类型
43. 需求
44. 概述
45. 附录
46. Reference Material
47. Terms and Abbreviations
48. Imposition Times
49. Mentioned Class Tables
50. 示例
51. 示例 ARXML for a 系统
52. 示例 ARXML for 软件 Components
53. 数据类型追踪
54. Splitable Elements in the 范围 of this Document
55. Variation Points in the 范围 of this Document
56. Change History
57. Change History of this document according to AUTOSAR Release R19-11
58. Added 规范 Items in R19-11
59. Changed 规范 Items in R19-11
60. Deleted 规范 Items in R19-11
61. Added Constraints in R19-11
62. Changed Constraints in R19-11
63. Deleted Constraints in R19-11
64. Change History of this document according to AUTOSAR Release R20-11
65. Added 规范 Items in R20-11
66. Changed 规范 Items in R20-11
67. Deleted 规范 Items in R20-11
68. Added Constraints in R20-11
69. Changed Constraints in R20-11
70. Deleted Constraints in R20-11
71. Change History of this document according to AUTOSAR Release R21-11
72. Added 规范 Items in R21-11
73. Changed 规范 Items in R21-11
74. Deleted 规范 Items in R21-11
75. Added Constraints in R21-11
76. Changed Constraints in R21-11
77. Deleted Constraints in R21-11
78. Change History of this document according to AUTOSAR Release R22-11
79. Added 规范 Items in R22-11
80. Changed 规范 Items in R22-11
81. Deleted 规范 Items in R22-11
82. Added Constraints in R22-11
83. Changed Constraints in R22-11
84. Deleted Constraints in R22-11
85. Change History of this document according to AUTOSAR Release R23-11
86. Added 规范 Items in R23-11
87. Changed 规范 Items in R23-11
88. Deleted 规范 Items in R23-11
89. Added Constraints in R23-11
90. Changed Constraints in R23-11
91. Deleted Constraints in R23-11
92. Change History of this document according to AUTOSAR Release R24-11
93. Added 规范 Items in R24-11
94. Changed 规范 Items in R24-11
95. Deleted 规范 Items in R24-11
96. Added Constraints in R24-11
97. Changed Constraints in R24-11
98. Deleted Constraints in R24-11
99. Change History of this document according to AUTOSAR Release R25-11
100. Added 规范 Items in R25-11
101. Changed 规范 Items in R25-11
102. Deleted 规范 Items in R25-11
103. Added Constraints in R25-11
104. Changed Constraints in R25-11
105. Deleted Constraints in R25-11
