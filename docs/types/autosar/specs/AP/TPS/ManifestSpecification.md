# Specification of Manifest (`ManifestSpecification`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 713 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_TPS_ManifestSpecification_713\AUTOSAR_AP_TPS_ManifestSpecification.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_TPS_ManifestSpecification_713\AUTOSAR_AP_TPS_ManifestSpecification.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_TPS_ManifestSpecification_713\zzgen\AP_TPS_ManifestSpecification.complete.txt`

## 文档简介

This document contains the specification of the so-called the Manifest on the AUTOSAR adaptive platform. A description of the overall modeling approach can be found in . A reference to the definition of the term service is given in .

The term Manifest is used in this specification in the meaning of a formal specification of configuration content. Please find a more detailed description of the term and the implications for the AUTOSAR adaptive platform in .

Over time, the manifest-related content in this document will be replaced step-by-step by a target configuration model based on the so-called APMC-Approach. Please find more details about the modeling approach implemented by APMC in the

Please note that the content of the document (despite the name) extends to the description of design elements necessary to develop software for the AUTOSAR adaptive platform.

The design-related modeling mainly is focused on the development of application software on the AUTOSAR adaptive platform as well as the connection between application and diagnostics and is described in detail in ,  and .

On the AUTOSAR adaptive platform, these chapters represent a counterpart/extension to the  and the  on the AUTOSAR classic platform. This means that certain parts of the mentioned documents on the AUTOSAR classic platform are also applicable to the AUTOSAR adaptive platform.

This relation is explicitly marked in the definition of imposition time of constraints defined in the mentioned documents.

 contains a description of the concrete Machine Design, which represents a counterpart to some sections of the  on the AUTOSAR classic platform.

, in particular, describes the big picture of AUTOSAR classic platform and AUTOSAR adaptive platform communicating via service-oriented communication.

 supports the design-related section of this document with a description of how installable sub-systems are described on the design level.

 concludes the design-related part by explaining how signal-based communication can be transformed into service-oriented communication and vice versa in order to participate in the communication between ECUs on the AUTOSAR classic platform.

 starts the target-configuration part of the document. It represents that counterpart to  on target-configuration level and describes the content of the so-called execution manifest.

 describes the options for configuring a machine by means of a manifest.

 contains a string of sub-sections that explain the manifest

## 模块依赖

The modeling of a dependency among SoftwareClusterDesigns is formulated by meta-class SoftwareClusterDependencyFormula.

 Semantics of meta-class SoftwareClusterDependencyFormula
⌈
Meta-class SoftwareClusterDependencyFormula allows for the definition of a formal condition that can be taken to decide about the dependency to or the conflict with a SoftwareCluster.

The modeling of SoftwareClusterDependencyFormula allows for the definition of nested conditions. The attribute operator is applied on the results of the evaluation of the parts.
⌋

| Class | SoftwareClusterDependencyFormula | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to define a dependency among SoftwareClusters. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, SoftwareClusterDependencyFormulaPart | < | < | < |
| Aggregated by | SoftwareClusterDependencyFormula.part, SoftwareClusterDesign.conflictsTo, SoftwareClusterDesign.dependsOn | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| operator | SoftwareClusterDependencyLogicalOperatorEnum | 0..1 | attr | This logical operator can be used to relate the results of different SoftwareClusterDependencyParts. |
| part (ordered) | SoftwareClusterDependencyFormulaPart | * | aggr | This aggregation represents the ordered collection of the parts of the SoftwareClusterDependencyFormula. |

| Enumeration | SoftwareClusterDependencyLogicalOperatorEnum |
|---|---|
| Note | This enumeration provides a set of operators to be used in a SoftwareClusterDependencyFormula. |

This Enumeration is only used by the AUTOSAR Adaptive Platform.
| Aggregated by | SoftwareClusterDependencyFormula.operator |
|---|---|
| Literal | Description |
| logicalAnd | logical and |

Tags: atp.EnumerationLiteralIndex=0
| logicalOr | logical or |
|---|---|

Tags: atp.EnumerationLiteralIndex=1

 Semantics of meta-class SoftwareClusterDependencyFormulaPart
⌈
Meta-class SoftwareClusterDependencyFormulaPart represents a part of a SoftwareClusterDependencyFormula. The order of the parts of a SoftwareClusterDependencyFormula is s

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document contains the specification of the so-called the Manifest on the AUTOSAR adaptive platform. A description of the overall modeling approach can be found in . A reference to the definition of the term service is given in .

The term Manifest is used in this specification in the meaning of a formal specification of configuration content. Please find a more detailed description of the term and the implications for the AUTOSAR adaptive platform in .

Over time, the manifest-related content in this document will be replaced step-by-step by a target configuration model based on the so-called APMC-Approach. Please find more details about the modeling approach implemented by APMC in the

Please note that the content of the document (despite the name) extends to the description of design elements necessary to develop software for the AUTOSAR adaptive platform.

The design-related modeling mainly is focused on the development of application software on the AUTOSAR adaptive platform as well as the connection between application and diagnostics and is described in detail in ,  and .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 建模 Approach
*原文标题：Modeling Approach*

### 3. 通用 Considerations
*原文标题：General Considerations*

The AUTOSAR adaptive platform has been introduced when the AUTOSAR classic platform was already a stable and well-established standard in the automotive domain.

And yet, the AUTOSAR adaptive platform is no successor of the AUTOSAR classic platform. Both platforms complement each other for specific use cases that can be better implemented by one or the other platform.

In this situation, two possible approaches for modeling on the AUTOSAR adaptive platform could have been taken:

* The AUTOSAR adaptive platform is based on different principles than the AUTOSAR classic platform, and hence the modeling approach could also decouple from the canon of the AUTOSAR classic platform as much as possible to advertise the fact that the two platforms have different purposes.

  Consequentially, even if specific model elements have clear counterparts in the respective other platform, use a different terminology to not confuse the users of both platforms.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 诊断配置的建模
*原文标题：Modeling of Diagnostic Configuration*

The configuration of the "external behavior" of the AUTOSAR diagnostic stack is done by means of the so-called Diagnostic Extract. The Diagnostic Extract in general extends to both the AUTOSAR classic platform and the AUTOSAR adaptive platform.

In particular, some parts of the Diagnostic Extract apply only for the AUTOSAR classic platform, some parts are shared between the AUTOSAR classic platform and the AUTOSAR adaptive platform, and some parts apply only for the AUTOSAR adaptive platform.

The parts that are specific to the AUTOSAR classic platform, and the parts that apply to both the AUTOSAR classic platform and the AUTOSAR adaptive platform are documented in the deliverable .

For technical reasons, the parts that apply to the AUTOSAR adaptive platform cannot be included in the document  and are consequently documented in this document, "TPS Manifest Specification".

The parts about the configuration of Diagnostic Management, as described in this document, fit seamlessly into the same modeling framework that is used on the AUTOSAR classic platform. This means that the specific parts for the AUTOSAR adaptive platform utilize the shared parts that are described in the .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. The Term 服务
*原文标题：The Term Service*

It is essential to keep in mind that the term service is frequently used within this document in particular and the AUTOSAR adaptive platform in general.

This usage has its reasons despite the fact that the meaning of the term service on the AUTOSAR adaptive platform collides with other meanings used within AUTOSAR.

In summary, the following meaning of the term service exist in the scope of AUTOSAR:

* The Term service is used in the  to denote the highest layer of the AUTOSAR software architecture that interacts with the application. In this context, model elements like ServiceSwComponentType, SwcServiceDependency, ServiceNeeds, or PortInterface.isService have been created on the AUTOSAR classic platform.
* The term service is used to express that information is related or required in a workshop where a car is serviced. In this context, service-only diagnostic trouble codes (DTC) are defined.
* The term service is used to describe the handling of diagnostic services, e.g. UDS service ReadDataByIdentifier, for the communication between a diagnostic tester and a diagnostic stack on an (AUTOSAR) ECU.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. About Tables

There is a number of tables in this document that describe the applicability or multiplicity of model elements. These tables contain empty cells, which represent a "not applicable" meaning. Model elements that correspond to an empty cell shall not exist in the context described by the respective table cell.

If the value of a table cell shall indicate that that either the existence or multiplicity of the represented model element shall be ignored anyway, the table cell gets the content "d/c" for "don't care". This means that if the respective model element exists, it shall be ignored in the downstream processing of the model.

### 8. Big Picture of 清单定义
*原文标题：Big Picture of Manifest Definition*

### 9. 设计 vs. Target 配置
*原文标题：Design vs. Target Configuration*

### 10. Preface

This document underwent a change in terminology. Previously, the term "Deployment" was used to identify modeling or workflow steps that relate to the creation of model elements that are mostly local to a given compute node. Therefore, these elements are usually created during integration.

In other words, the purpose of all these "deployment-related" steps and modeling elements is to create a configuration of the target on which the code is executed at run-time.

In this context, the usage of the term "deployment" is considered to broad and lacking focus on the real task. In contrast, the usage of the term "target-configuration" is considered the better and more precise alternative. To provide a service to the reader, the text in this document has been updated to reflect the new terminology wherever reasonable.

Model elements, on the other hand, have not been renamed to achieve conformance with the updated terminology. The existing M2-based target-configuration model that is described in this document is subject to be replaced by an M1-based APMC-Model anyway and therefore a costly update of the M2 model is not considered worth the hassle.

### 11. 概述
*原文标题：Overview*

Despite the name, this document contains the description of model elements that are clearly bound to a design workflow and model elements that have a strong relation to the target configuration aspect.

Model elements discussed in this document are either related to design or target configuration, there is no overlap between the two groups, but it could happen that design model elements are required in a concrete model for target configuration mode elements to make sense.

As mentioned before, some target configuration model element may need one or more references to design model elements and the design model elements need to be uploaded to the target platform for the sake of completing the semantics of the target configuration model.

Please note that a design model element does not automatically become a target configuration model element just because it is required to be uploaded to a target platform.

### 12. Relation between 设计 and Target 配置 Models
*原文标题：Relation between Design and Target Configuration Models*

Please note that in many cases the part of the meta-model related to target configuration reflects a similar modeling in the design domain, e.g. the definition of E2E profile parameters.

There is currently no clearly defined preference about how the relation between design and target configuration may impact a concrete development project. The following scenarios for the example of E2E properties might occur:

Some model elements described in this document that are part of the content that gets uploaded to the target platform have direct counterparts on the design level.

One example for such a relation is the definition of ProcessDesign and Process. In these cases it would be easier to draw the line between design and target configuration aspects of the model.

There are cases where the mere existence of a reference into the design model is already representing valuable information. References that expose this capability are decorated with the stereotype atpUriDef>>.

Specifically, it is possible for the software on the platform to derive the value of an InstanceSpecifier from the content of an instanceRef decorated with atpUriDef>>.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 结构 of the document
*原文标题：Structure of the document*

The structure of the document maps to the division between design and target configuration such that the design aspect is mostly described in , , , , , and .

In contrast, , , , , , and  focus on target configuration-related content.

### 14. About 清单
*原文标题：About Manifest*

This chapter shall clarify the definition of the term Manifest in the context of the AUTOSAR adaptive platform.

 Definition of the term Manifest
⌈
A Manifest represents a piece of AUTOSAR model description that is created to support the configuration of an AUTOSAR adaptive platform product and which is uploaded to the AUTOSAR adaptive platform product, potentially in combination with other artifacts (like binary files) that contain executable code to which the Manifest applies.
⌋

It is important to stress the fact that the usage of a Manifest is indeed strictly limited to the AUTOSAR adaptive platform and that there is no use case to port the concept to the AUTOSAR classic platform.

### 15. Serialization Format

One aspect that the definition of a Manifest has in common with other AUTOSAR model content is the standardized serialization format.

 Serialization format of the Manifest in AUTOSAR
⌈
The standardized serialization format of Manifest content in AUTOSAR is ARXML.

Consequently, Manifest model content can be validated against the AUTOSAR XML Schema.
⌋

An important consequence of  is that there is no limitation to just one "manifest file" a.k.a. "the manifest".

Content may be distributed among several physical files according to the rules given in the specification of the .

 Serialization format of Manifest content on a machine
⌈
The serialization format used to actually upload a manifest on a machine may be freely chosen by a platform supplier.

However, the content and semantics of the original ARXML Manifest needs to be fully preserved.
⌋

It can be expected that in many cases the best option for the upload of the Manifest will still be ARXML because a custom format obviously has to support the full complexity of the Manifest meta-model.

Please note that the meta-model foresees the existence of references from manifest-related meta-classes to design-related meta-classes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 范围
*原文标题：Scope*

As mentioned before, the usage of a Manifest is limited to the AUTOSAR adaptive platform. This does not mean, however, that all ARXML produced in a development project that targets the AUTOSAR adaptive platform is automatically considered a Manifest.

In fact, the AUTOSAR adaptive platform is usually not exclusively used in a vehicle project.

A typical vehicle will most likely be also equipped with a number of ECUs developed on the AUTOSAR classic platform and the system design for the entire vehicle will therefore have to cover both ECUs built on top of the AUTOSAR classic platform and those created on top of the AUTOSAR adaptive platform.

### 17. Manifests described in this Document

In principle, the term Manifest could be defined such that there is conceptually just one "manifest" and every target configuration aspect would be handled in this context.

This does not seem appropriate because it became apparent that manifest-related model-elements exist that are relevant in entirely different phases of a typical development project.

This aspect is taken as the main motivation to subdivide the definition of the term Manifest in five different partitions:

* This kind of Manifest is used to specify the target configuration-related information of applications running on the AUTOSAR adaptive platform.

  An Execution Manifest is bundled with the actual executable code in order to support the integration of the executable code onto the machine.

  Please find more information regarding this topic in .
* This kind of Manifest is used to specify how service-oriented communication is configured in terms of the requirements of the underlying transport protocols.

  A Service Instance Manifest is bundled with the actual executable code that implements the respective usage of service-oriented communication.

  Please find more information regarding this topic in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 应用设计
*原文标题：Application Design*

### 19. 概述
*原文标题：Overview*

This chapter describes all design-related modeling that applies to the creation of application software on the AUTOSAR adaptive platform.

There are also some extensions of existing modeling used on the AUTOSAR classic platform specifically for the usage on the AUTOSAR adaptive platform, e.g. the introduction of new values of the attribute category.

In particular, this section of the document focuses on the following aspects:

* Definition of application structure, consisting of SwComponentType for the AUTOSAR adaptive platform (), Executable as the design-level representation of the smallest executable unit (), as well as Description of how to front-load the configuration of a Process by means of ProcessDesign, see .
* Definition of data types specifically for the AUTOSAR adaptive platform (), including the handling of optional elements in data structures, see .
* Configuration of transformation properties ().
* Description of the design-level IAM configuration by means of the GrantDesign, see .
* Description of the support for intrusion detection ().
* Description of the design of cryptographic solutions ().

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Application 结构
*原文标题：Application Structure*

### 21. 软件组件
*原文标题：Software Component*

In principle, it would be possible to directly take over the definition of e.g. ApplicationSwComponentType for the usage on the AUTOSAR adaptive platform.

However, this would complicate the formulation of constraints regarding the existence of model elements (for example: data types, as explained in ) that are exclusive to the AUTOSAR adaptive platform.

Therefore, the AdaptiveApplicationSwComponentType is defined as a representation of software-components on the AUTOSAR adaptive platform.

The Existence of the AdaptiveApplicationSwComponentType allows for a convenient way (see ) to lock out most kinds of software-component defined for the AUTOSAR classic platform from the usage on the AUTOSAR adaptive platform.

The clarification of the opposite direction (i.e. an erroneous use of an AdaptiveApplicationSwComponentType) is less obvious.

In other words, it may be possible to use an AdaptiveApplicationSwComponentType within a System as some sort of overall design model for software on both the AUTOSAR classic platform and the AUTOSAR adaptive platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Executable

### 23. 概述
*原文标题：Overview*

An Executable represents an executable program in the AUTOSAR meta-model. An explanation of the semantics of the attributes of Executable can be found in the following sub-sections.

| Class | Executable | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents an executable program. |  |  |  |

Tags: atp.recommendedPackage=Executables

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, AtpClassifier, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, UploadableDesignElement, UploadablePackageElement | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| implementationProps | ExecutableImplementationProps | * | aggr | This aggregation contains the collection of implementation-specific properties necessary to properly build the enclosing Executable. |
| minimumTimerGranularity | TimeValue | 0..1 | attr | This attribute describes the minimum timer resolution (TimeValue of one tick) that is required by the Executable. |
| reportingBehavior | ExecutionStateReportingBehaviorEnum | 0..1 | attr | this attribute controls the execution state reporting behavior of the enclosing Executable. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Category

Standardized values of attribute Executable.category
  Imposition time: `IT_BefAraApiGen`
⌈
The following values for attribute Executable.category are standardized by AUTOSAR:

* `PLATFORM_LEVEL`: the Executable represents software on the platform level (i.e. conceptually located on the level of the middleware).
* `APPLICATION_LEVEL`: the Executable represents software on the application level (i.e. conceptually located above the middleware).
⌋

### 25. Root 软件组件 Prototype
*原文标题：Root Software Component Prototype*

Root element for a hierarchical software-component
⌈
Executable aggregates meta-class RootSwComponentPrototype in the role rootSwComponentPrototype to provide a root element for an arbitrarily nested hierarchy of software-components represented by the reference RootSwComponentPrototype.applicationType.
⌋

Please note that the aggregation of RootSwComponentPrototype by Executable is the basis for the applicability of an instanceRef>> reference into the hierarchy of software-components that represent the functionality of the Executable.

This modeling approach is similar to the modeling of a System on the AUTOSAR classic platform.

 Optionality of Executable.rootSwComponentPrototype
⌈
The aggregation Executable.rootSwComponentPrototype has been made optional in order to support the implementation of platform modules that do not utilize any service oriented communication and don't require any further formalization.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Reporting 行为
*原文标题：Reporting Behavior*

Semantics of Executable.reportingBehavior
⌈
Attribute Executable.reportingBehavior shall be used to control the reporting of the execution state of the enclosing Executable to the Execution Management. If the attribute does not exist, the Executable shall report its execution state to the Execution Management.
⌋

| Enumeration | ExecutionStateReportingBehaviorEnum |
|---|---|
| Note | This enumeration provides options for controlling of how an Executable reports its execution state to the Execution Management |

This Enumeration is only used by the AUTOSAR Adaptive Platform.
| Aggregated by | Executable.reportingBehavior |
|---|---|
| Literal | Description |
| doesNotReportExecutionState | The Executable shall not report its execution state to the Execution Management. |

Tags: atp.EnumerationLiteralIndex=1
| reportsExecutionState | The Executable shall report its execution state to the Execution Management. |
|---|---|

Tags: atp.EnumerationLiteralIndex=0

### 27. Implementation Props

Semantics of ExecutableImplementationProps
⌈
If an Executable is built for a specific purpose inside the AUTOSAR adaptive platform, i.e. the implementation of a functional cluster, then it may be necessary to add configurations that need to be considered at compile time, e.g. whether the implementation of the logging functional cluster needs access to resources provided by the synchronized time base functional cluster.

The configuration of such implementation-specific properties can be done by means of the Executable.implementationProps, specifically by a sub-class of ExecutableImplementationProps.
⌋

| Class | ExecutableImplementationProps (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This abstract class has the ability to act as a base class for classes that detail out the implementation-specific properties of an Executable. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, Describable | < | < | < |
| Subclasses | ExecutableLoggingImplementationProps | < | < | < |
| Aggregated by | Executable.implementationProps | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| - | - | - | - | - |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Logging

Semantics of ExecutableLoggingImplementationProps
⌈
The implementation properties of an Executable that is implementing (a part of) the logging functional cluster can be configured using the ExecutableLoggingImplementationProps.
⌋

 Restriction for the existence of ExecutableLoggingImplementationProps
  Imposition time: `IT_BefAraApiGen`
⌈
The aggregation of ExecutableLoggingImplementationProps in the role Executable.implementationProps is only allowed for an Executable where attribute category is set to the value `PLATFORM_LEVEL`.
⌋

| Class | ExecutableLoggingImplementationProps | < | < | < |
|---|---|---|---|---|
| Note | This meta-class contains configuration relevant for the implementation of an Executable used in the context of the LogAndTraceInstantiation. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, Describable, ExecutableImplementationProps | < | < | < |
| Aggregated by | Executable.implementationProps | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| usesTimeBaseResource | Boolean | 0..1 | attr | This attribute indicates that the implementation of the enclosing Executable is required to access resources provided by the synchronized time base functional cluster. |

### 29. TraceSwitchConfig

Semantics of TraceSwitchConfig
⌈
The TraceSwitchConfig element maps a DltMessage that is referenced in the role traceMessage in the context of an Executable to a trace switch type defined by the TraceSwitchConfig.traceSwitch attribute that in turn decides how the DltMessage is routed.
⌋

Please note that the TraceSwitchConfig is used by the compile time configuration of ARTI trace. The TraceSwitchConfig is not required for normal logging. If TraceSwitchConfig does not exist for a dedicated DltMessage, then the DltMessage is forwarded to the logger.

| Class | TraceSwitchConfig | < | < | < |
|---|---|---|---|---|
| Note | This class maps a DltMessage to a trace switch type. |  |  |  |

Tags: atp.recommendedPackage=TraceSwitchConfigs

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| executable | Executable | 0..1 | ref | Executable that defines the context of the trace switch. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Interaction Endpoint for Application

The interaction of software-components with the outside world can take several forms, e.g. service-oriented communication or the interaction with a persistent data storage.

A formal representation of the interaction needs to be described as an anchor point for adding various additional configuration attributes that make sense in this context but would not make sense in the context of a PortInterface.

There is a model element that already has a long-standing tradition in the AUTOSAR meta-model for exactly the described purpose: the PortPrototype.

The following sub-chapters discuss the interaction by means of PortPrototypes with software "outside" a given software-component with the focus on different kinds of interaction that require different ways to further contribute model elements for configuration.

### 31. Service-oriented Communication

The service-oriented communication by means of PortPrototypes does not support the concept of a communication endpoint that is both required and provided at the same time. This motivates the existence of .

 No support for PRPortPrototype
  Imposition time: `IT_BefAraApiGen`
⌈
A ServiceInterface shall not be referenced by a PRPortPrototype in the role providedRequiredInterface.
⌋

 Representation of provided service
⌈
A provided service shall be modeled by means of a PPortPrototype that is typed by a ServiceInterface.
⌋

 Representation of required service
⌈
A required service shall be modeled by means of an RPortPrototype that is typed by a ServiceInterface.
⌋

For more background regarding the rationale of , please refer to .

Please note that the utilization of service discovery on the AUTOSAR adaptive platform means that opposite communication ends are by design not known upfront.

As a consequence, it is in general not possible to use AssemblySwConnectors to model a pre-defined relation between two communication endpoints modeled as PortPrototypes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Port Prototype Props

As mentioned before, in some cases a qualification of the semantics of PortPrototypes is necessary. For this purpose, AUTOSAR typically defines a props class of some kind. The same approach applies in this situation as well.

In particular, PortPrototype aggregates the abstract meta-class PortPrototypeProps, that in turn starts an inheritance tree of derived meta-classes that have the ability to qualify sub-classes of PortPrototype accordingly.

| Class | PortPrototypeProps (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to define a further qualification of semantics of sub-classes of PortPrototype. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject | < | < | < |
| Subclasses | RPortPrototypeProps | < | < | < |
| Aggregated by | PortPrototype.portPrototypeProps | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| - | - | - | - | - |

 Restriction of aggregation of PortPrototypeProps to the Adaptive Platform
  Imposition time: `IT_BefAraApiGen`
⌈
The aggregation of PortPrototypeProps is only supported in the context of a SwComponentType that is (transitively) referenced by rootSwComponentPrototype.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 721 章（内容从略，见纯文本全文）

33. Port Prototype ComSpec
34. Port Prototypes typed by 服务接口
35. Receiver ComSpec
36. Sender ComSpec
37. Client ComSpec
38. Server ComSpec
39. Communication 行为 to be implemented by the Application 软件
40. Transmission ComSpec Props
41. Transmission triggered by Element of composite 数据类型
42. Port Prototypes typed by 持久化数据接口
43. Port Prototypes typed by 持久化文件接口
44. Process 设计
45. 数据类型
46. 概述
47. ApplicationDataType
48. String 数据类型
49. Associative 映射数据类型
50. Attributes of SwDataDefProps
51. CppImplementationDataType
52. 概述
53. Attributes of SwDataDefProps
54. Primitive 数据类型
55. String 数据类型
56. Array 数据类型
57. Vector 数据类型
58. Struct 数据类型
59. Enumeration 数据类型
60. 映射数据类型
61. Variant 数据类型
62. Bitfield 数据类型
63. Compatibility of ApplicationDataType and CppImplementationDataType
64. Optional Members in complex 数据 Structures
65. Background
66. 定义 of Optionality
67. Usage of constant Values
68. Serialization Of 数据
69. Default Values for Serialization Properties
70. Individual 定义 of Serialization Properties
71. Assignment of TLV properties
72. Assignment of TLV 数据 IDs
73. Assignment of Wire 类型 Selection
74. Identity and Access 管理
75. Com Grant 设计
76. Remote access 控制
77. Remote Subject in the Case of TLS
78. Remote Subject in the Case of IPsec
79. Remote Subject in the Case of IP Communication
80. Remote Subject in the Case of SecOC Communication
81. Intrusion 检测设计
82. Relation to Crypto 系统设计
83. Application Port 接口设计
84. 概述
85. 服务接口
86. 概述
87. Event
88. Trigger
89. Field
90. Method
91. Fire and Forget Method
92. Versioning of ServiceInterfaces
93. Versioning driven by 传输 layer
94. Namespace
95. 错误处理
96. 服务接口数据类型映射
97. 服务接口映射
98. 服务接口 Element 映射
99. 概述
100. 服务接口 Event 映射
101. 服务接口 Trigger 映射
102. 服务接口 Field 映射
103. 服务接口 Method 映射
104. 状态管理接口
105. 概述
106. 状态管理接口 for 通知
107. 状态管理接口 for Triggers
108. 状态管理接口 for 错误
109. Execution 管理接口
110. 状态 Client 接口
111. 持久化接口
112. 概述
113. The big Picture
114. 持久化接口的建模
115. Redundancy 处理
116. Update 处理
117. 持久化 Key Value Storage 接口
118. 持久化文件 Storage 接口
119. Time 同步接口
120. Platform Health 管理接口
121. 概述
122. Supervised Entities and Checkpoints
123. Recovery 通知 to 状态管理
124. 诊断接口
125. 概述
126. 诊断接口 for UDS
127. 诊断 Routine 接口
128. 数据 Identifier的接口 to 数据 Identifier and Element
129. Security Level 接口
130. 服务校验接口
131. Generic UDS 接口
132. 诊断接口 for Upload and Download
133. 接口 to 支持 managing the EcuReset
134. 诊断 Authentication 接口
135. 诊断 External Authentication 接口
136. 诊断 Communication 控制接口
137. 诊断 Request 文件 Transfer 接口
138. 诊断接口 for Fault 存储
139. 接口 for providing 数据 to Extended 数据 Record
140. 接口 to 诊断 Events
141. 接口 to 诊断 Condition
142. 接口 for 多诊断 Resources
143. 接口 for 多诊断 Events
144. 接口 for 多诊断 Conditions
145. Indicator 接口
146. Operation Cycle 接口
147. 诊断接口 for SOVD
148. 概述
149. Port 接口 for SOVD Client Authorization
150. Port 接口 for SOVD Proximity Challenge
151. Port 接口 for SOVD Bulk 数据
152. Port 接口 for SOVD 服务校验
153. Port 接口 for SOVD Update
154. Port 接口 for SOVD 配置
155. Port 接口 for SOVD Operation
156. Port 接口 for SOVD Content Access
157. 诊断接口 for DoIP
158. Crypto 接口
159. Interaction with Crypto 软件
160. Crypto Key Slot 接口
161. Crypto Certificate 接口
162. Crypto Certificate Group 接口
163. Crypto Provider 接口
164. Raw 数据 Stream 接口
165. Intrusion 检测接口
166. Security Event Report 接口
167. Intrusion 检测 Timestamp Provider 接口
168. Intrusion 检测 Context Provider 接口
169. Intrusion 检测 Reporting 模式 Provider 接口
170. Intrusion 检测 Qualified Events Receiver 接口
171. Log And Trace 接口
172. Firewall 接口
173. 网络管理接口
174. Suspend to RAM 接口
175. 诊断设计
176. Extensions to the 诊断 Common Props
177. 诊断 SOVD Props
178. 诊断 Address
179. 诊断 Authentication 配置
180. 诊断映射
181. 概述
182. 多诊断 Resources to a PortPrototype的映射
183. Fault-Memory-related 诊断映射
184. 诊断 Monitor to Port 映射
185. 多诊断 Monitor to Port 映射
186. 诊断 Event to Port 映射
187. 多诊断 Event to Port 映射
188. 诊断 Operation Cycle to Port 映射
189. 诊断 Enable Condition to Port 映射
190. 诊断 Clear Condition to Port 映射
191. 多诊断 Condition to Port 映射
192. 诊断 Indicator to Port 映射
193. 诊断存储 Destination to Port 映射
194. 诊断 Extended 数据 Record Port 映射
195. UDS-related 诊断映射
196. 诊断 Security to Port 映射
197. 诊断数据 Identifier to Port 映射
198. 诊断 Generic UDS 服务 Handler to Port 映射
199. 诊断 Generic 映射
200. 诊断服务校验映射
201. 诊断 Authentication 映射
202. 诊断 External Authentication 映射
203. SOVD-related 诊断映射
204. 诊断 SOVD Proximity Challenge 映射
205. 诊断 SOVD Authorization Port 映射
206. 诊断 SOVD Bulk 数据 Port 映射
207. 诊断 SOVD Update Port 映射
208. 诊断 SOVD 服务校验 Port 映射
209. 诊断 SOVD 配置 Port 映射
210. 诊断 SOVD 数据 Port 映射
211. 诊断 SOVD Operation Port 映射
212. 诊断 SOVD 配置 to SOVD Content 映射
213. DoIP-related 诊断映射
214. 诊断 DoIP 映射
215. 诊断 DoIP Group Identification 映射
216. 诊断 DoIP Activation Line 映射
217. 诊断 DoIP Entity Identification 映射
218. 诊断 DoIP Power 模式映射
219. 诊断 DoIP custom Payload 映射
220. 诊断 DoIP custom Payload Rx 映射
221. 诊断 DoIP custom Payload Tx 映射
222. 诊断 Clear Condition
223. Security Access
224. 诊断 Provided 数据映射
225. Usage of 诊断 Environmental 数据 Element Condition
226. SOVD 配置 Elements
227. SOVD 服务 Instance
228. 概述
229. SOVD Log
230. SOVD Update
231. SOVD Fault 存储 Access
232. 诊断 SOVD 数据
233. SOVD Operation
234. SOVD Method
235. SOVD Lock
236. SOVD Content
237. 概述
238. SOVD Composite Content
239. SOVD Primitive Content
240. Environmental 数据 Condition to SOVD Content Element
241. SOVD Snapshots
242. 诊断 Miscellanea
243. Machine 设计
244. 概述
245. Processor
246. 概述
247. 核 Affinity
248. 功能性 Cluster 设计
249. DoIp 功能性 Cluster 设计
250. Machine 设计的网络设计 aspects
251. 服务 Discovery 配置
252. SOME/IP 服务 Discovery 配置
253. TcpIp stack 配置 properties
254. 系统设计
255. 概述
256. Communication 系统结构的规范
257. 网络 connection
258. 支持 of 10BASE-T1S 网络 Topologies
259. 支持 of Ethernet tunneling through CAN XL
260. IP 配置 properties
261. TCP and UDP 配置 properties
262. ICMP 配置 properties
263. Securing Communication with IPsec
264. MACsec
265. Partial 网络
266. Application 软件系统结构的规范
267. 服务 oriented Communication between Classic and Adaptive platform的建模
268. Method 映射
269. Event 映射
270. FieldMapping
271. Fire And Forget Method 映射
272. Crypto 系统设计
273. Process 设计 to Machine 设计映射
274. Ethernet Synchronized Time 设计
275. Sub-System 设计
276. 概述
277. 软件 Cluster 设计
278. Relevance of 软件 Cluster 设计 for 诊断
279. 软件 Cluster Dependency
280. 概述
281. a 软件 Cluster Dependency的建模
282. 软件 Cluster 设计的Provided and required 服务
283. 服务 to Executables的映射
284. Signal-based Communication
285. 概述
286. Signal-based Prerequisites
287. Message Header for IP based 传输
288. Message Identification for IEEE1722 ACF based 传输
289. Signal-based Deployment
290. Signal/服务 Translation 映射
291. 处理 of ISignalGroups
292. Direction of Signal/服务 Translation 映射
293. SignalBasedEvent 映射
294. SignalBasedTrigger 映射
295. SignalBasedField 映射
296. SignalBased Fire and Forget Method 映射
297. 服务 Discovery and Static Communication 配置
298. 服务 discovery 控制
299. 服务控制 right after translation start
300. related 服务 instance的服务控制 due to availability
301. Signal-service-translation
302. Service-signal-translation
303. Static Communication 配置
304. Static Communication 配置 for the Server
305. Static Communication 配置 for the Client
306. Translation 行为
307. ServiceInterface Representation of Translation 数据
308. Optional Elements in the Case signal-service-translation
309. Optional Elements in the Case service-signal-translation
310. Event and update-bit Semantics
311. 数据过滤
312. Translation from one Source
313. Translation from several Sources
314. Signal-Service-Translation to several Targets
315. Translation pass-through Composition
316. Expected Features of Classic Platform
317. Processing Order
318. Reception 数据 Filter
319. Reception of Invalid Signal
320. Update Bit 处理
321. Transfer Properties and Transmission Modes for Service-Signal-Translation
322. Deadline Monitoring
323. Signal and IPdu Transmission
324. IPdu Multiplexing
325. End-to-End considerations
326. Safety
327. Signal-service-translation
328. Service-signal-translation
329. Security
330. Restrictions on Classic Platform SecOC
331. Link between Classic Platform SecOC and CryptoKeySlot
332. 执行清单
333. 概述
334. Process
335. Process relates to Executable
336. Process States
337. 启动配置
338. State-dependent 启动配置
339. Process Attributes
340. 调度
341. Process Arguments
342. Association with Resource Group
343. Execution Dependency
344. Assignment of Processes to 功能 Group states
345. Resource Consumption Boundaries
346. 错误 and Termination 行为
347. 功能 Groups
348. Semantics of 功能 Group
349. Reporting of Security Events
350. 机器清单
351. Machine
352. Environment Variable
353. Process To Machine 映射
354. 通用建模 Approach
355. 核 Affinity
356. Default Start-up and Termination Timeout
357. Platform 模块 Development
358. OS 模块配置
359. 持久化 Target-Configuration
360. 概述
361. Redundancy 处理
362. Update 处理
363. Size 处理
364. Security 处理
365. Preference Rules
366. Target-Configuration of Persistent Key-Value Storage
367. Target-Configuration of 文件 Storage
368. Platform Health 管理 Target-Configuration
369. 概述
370. Relation between 设计 and Target-Configuration
371. Supervision Target-Configuration
372. Global supervision
373. Supervision 模式
374. Supervision 模式 condition
375. NoSupervision 定义
376. AliveSupervision 定义
377. AliveSupervision of self-terminating processes
378. CheckpointTransition 定义
379. LogicalSupervision 定义
380. DeadlineSupervision 定义
381. NoCheckpointSupervision 定义
382. Supervision Recovery 通知 Target-Configuration
383. Recovery 通知
384. Time 同步 Target-Configuration
385. 概述
386. Time 同步功能性 Cluster 配置
387. Time Base
388. Synchronized Time Base
389. Persistent Time Base Value Storage
390. Time Base to Port Prototype 映射
391. DoIP 配置
392. Log and Trace 模块配置
393. Log and Trace Target-Configuration
394. Relation between 设计 and Target-Configuration
395. 网络管理配置
396. UDP 网络管理
397. Relation between Application 软件 and 网络句柄
398. Relation between 功能 Group states and 网络句柄
399. UdpNm 配置 constraints
400. CAN XL 网络管理
401. 更新与配置管理
402. 概述
403. Retry Strategy
404. UCM Master 模块 Instantiation
405. UCM Subordinate 模块 Instantiation
406. CM 配置
407. Com Grant Target-Configuration
408. Com Field Grant Target-Configuration
409. Com Method Grant Target-Configuration
410. Com Event Grant Target 配置
411. Com Trigger Grant Target-Configuration
412. Com Offer 服务 Grant Target-Configuration
413. Remote Access 控制
414. Crypto Target-Configuration
415. Crypto Provider
416. Crypto Key Slot
417. Crypto Key Slot to Port Prototype 映射
418. Crypto Key Slot to Client Port Prototype 映射
419. Crypto Certificate
420. Crypto Certificate Group
421. Relation to Crypto 系统设计
422. IdsM Target-Configuration
423. IdsM Instantiation
424. Time Stamps for Security Events via Time-Base Resource
425. 映射 to Timestamp Provider
426. 映射 to Context Provider
427. 映射 to Reporting 模式 Provider
428. 映射 to Qualified Event Receiver
429. Target-Configuration for Security Events
430. Service-oriented Vehicle 诊断
431. 概述
432. SOVD Server
433. SOVD Gateway
434. Firewall Target-Configuration
435. Firewall Rules on Datalink Layer
436. Firewall Rules on 网络 Layer
437. Firewall Rules on 传输 Layer
438. Firewall Rules via Byte Pattern
439. Firewall Deep Packet Inspection of SOME/IP SD and SOME/IP Messages
440. Firewall Deep Packet Inspection of DoIP Messages
441. Firewall Deep Packet Inspection of DDS Messages
442. 状态管理 Target-Configuration
443. 概述
444. Requests to 状态管理
445. Trigger Requests to 状态管理
446. 错误 Requests to 状态管理
447. 通知 from 状态管理
448. Rules
449. 概述
450. Trigger Rules
451. 错误 Rules
452. Action Items
453. 状态 Machine Action Item
454. Sync Action Item
455. 功能 Group Action Item
456. 网络管理 Action Item
457. 休眠 Action Item
458. Suspend to RAM Action Item
459. 状态 Client
460. 错误处理 inside 状态管理
461. Request 功能 Group 状态
462. Suspend to RAM
463. Suspend to RAM 模块 Instantiation
464. Suspend to RAM 模块 Satellite 映射
465. Suspend to RAM 模块 Hub 映射
466. Generic 诊断 TransportInstantiation
467. Ethernet Endpoint 配置 for Platform 模块
468. 服务实例清单
469. ApplicationEndpoint
470. VLAN Priority
471. 服务接口 Deployment
472. SOME/IP 服务接口 Deployment
473. DDS 服务接口 Deployment
474. User Defined 服务接口 Deployment
475. 服务 Instance Target-Configuration
476. SOME/IP 服务 Instance Deployment
477. Provided 服务 Instance
478. IP 配置
479. TP 配置
480. 服务 Discovery Server 配置
481. Provided Event Group
482. ProvidedSomeipServiceInstance related event and method properties
483. Required 服务 Instance
484. IP 配置
485. TP 配置
486. 服务 Discovery Client 配置
487. Required Event Group
488. RequiredSomeipServiceInstance related method call properties
489. Provided 服务 Instance with static remote peers
490. Required 服务 Instance with static remote peers
491. DDS 服务 Instance Deployment
492. Provided DDS 服务 Instance
493. Required DDS 服务 Instance
494. DDS 服务 Instance to Machine 映射
495. User Defined 服务 Instance Deployment
496. 服务 Deployment Relations
497. End To EndProtection
498. Secure Communication
499. Secure Communication over TLS
500. Secure Communication over SecOC
501. Secure Communication over DDS
502. Raw 数据 Stream 清单
503. Raw 数据 Stream Deployment
504. Raw 数据 Stream 映射
505. Raw 数据 Streams over Ethernet using IP based 协议
506. Ethernet Raw 数据 Stream Client 映射
507. Ethernet Raw 数据 Stream Server 映射
508. Raw 数据 Streams over Ethernet using MAC Layer 协议
509. Raw 数据 Streams over Ethernet using IEEE1722 协议
510. Raw 数据 Streams for 控制 Messages over Ethernet using IEEE1722 ACF 协议
511. Cross-Functional Cluster interaction
512. Com Certificate To Crypto Certificate 映射
513. Com Key To Crypto Key Slot 映射
514. Com SecOc To Crypto Key Slot 映射
515. 持久化 Deployment To Crypto Key Slot 映射
516. 持久化 Deployment Element To Crypto Key Slot 映射
517. 持久化 Deployment To Dlt Log Sink 映射
518. 功能性 Cluster To Dlt Log Sink 映射
519. Ucm To Time Base Resource 映射
520. 功能性 Cluster Interacts With 持久化 Deployment 映射
521. Adaptive 模块 Instantiation to Security Event 定义映射
522. 状态管理 interacts with 网络管理 and vice versa
523. 状态管理 interacts with 网络管理
524. 网络管理 interacts with 状态管理
525. 功能性 Cluster reports Production 错误
526. 软件 Distribution
527. 概述
528. Uploadable Package Element
529. 软件 Cluster
530. 软件 Cluster 通用建模
531. Relevance of 软件 Cluster for 诊断
532. 诊断 Props
533. Relation to the 诊断 Contribution Set
534. 诊断服务校验
535. Contract between 软件 Cluster and 软件 Cluster 设计
536. References between 软件 Clusters
537. 软件 Cluster Artifact Checksum
538. 软件 Cluster Artifact Locator
539. 软件 Package
540. Vehicle Package
541. 概述
542. VehicleRolloutStep
543. UcmStep
544. SoftwarePackageStep
545. Interoperability between Classic Platform and Adaptive Platform
546. Usage of major Version in the SOME/IP 网络 binding
547. 附录
548. Reference Material
549. Terms and Abbreviations
550. Imposition Times of Constraints
551. 示例
552. 数据类型
553. 映射数据类型的定义
554. String 数据类型的定义
555. String 数据类型的定义
556. Vector 数据类型的定义
557. Struct 数据类型的定义
558. Enumeration 数据类型的定义
559. 映射数据类型的定义
560. Variant 数据类型的定义
561. Scenarios to define a Vector
562. Service-oriented Communication
563. Radar and Camera ServiceInterface 示例
564. 服务接口映射
565. 服务接口 Element 映射
566. 服务接口 Event 映射
567. 服务接口 Field 映射
568. 服务接口 Method 映射
569. 服务 Instance Deployment
570. 服务 Instance Deployment by 服务接口映射
571. 服务 Instance Deployment by 服务接口 Element 映射
572. 服务 Instance 映射
573. SOME/IP 服务 Instance 映射
574. User-Defined 服务 Instance 映射
575. 定义 of VLAN Priority
576. Static 配置 of remote Peers
577. Provided 服务 Instance with remote Peers
578. Required 服务 Instance with remote Peers
579. 执行管理
580. 启动配置的定义
581. 持久化
582. Persistent 数据的定义
583. Persistent 文件的定义
584. Interaction with the PHM
585. Relation between Instance Specifier and Instance Ref
586. Phm Application 设计示例
587. Phm 配置示例
588. 状态管理
589. Consideration of User Perspective
590. Scenario for Trigger
591. Scenario for 错误
592. Crypto
593. Relation between a Crypto Certificate and a Crypto Key Slot
594. 机器清单
595. Distributed 定义 of Environment Variables
596. Ethernet Raw 数据 Stream 配置
597. Preamble
598. Fully formalized 建模示例
599. Only Client is formalized
600. Only Server is formalized
601. Signal/服务 Translation
602. Signal/服务映射
603. 映射 Event to Signal
604. 映射 Field to Signal
605. Signal/服务 Translation 行为
606. Optional 结构 Element in the context of Signal/服务 Translation
607. Optional 结构 Element in the context of 服务/Signal Translation
608. Translation from different Sources
609. Signal/服务 Translation from different Sources
610. ServiceSignalTranslation from different Sources
611. Translation to different Targets
612. 软件 Cluster 设计
613. Dependencies among 软件 Cluster Designs
614. Usage of SoftwarePackageStep
615. Usage of transfer and process
616. Miscellaneous 示例
617. Relation of ApApplicationError and ApApplicationErrorDomain
618. Custom 建模 Extension
619. 概述
620. Custom Attribute 定义
621. Custom Primitive Attribute 定义
622. Custom Complex Attribute 定义
623. Custom Foreign Reference 定义
624. Custom Subclass 配置
625. Custom Constraints
626. 定义 of Reference from SdgClass to SdgClass
627. 通用建模
628. Reference to a DataPrototype in a PortInterface
629. Reference to the inside of an ApplicationDataType
630. Reference to the inside of a CppImplementationDataType
631. Reference to a AutosarDataPrototype in an Executable
632. Reference to a Trigger in an Executable
633. Reference to a PortPrototype in an Executable
634. 建模 of a Method in an Executable
635. 建模 of Diagnostic-related InstanceRefs
636. 建模 of PHM-related InstanceRefs
637. 建模 of Time-related InstanceRefs
638. 建模 of Persistency-related InstanceRefs
639. 建模 of SoftwareClusterDesign-related InstanceRefs
640. 建模 of State-Management-related InstanceRefs
641. 建模 of Intrusion-Detection-related InstanceRefs
642. 建模 of Crypto-related InstanceRefs
643. Firewall InstanceRef
644. Mentioned Class Tables
645. Change History of AUTOSAR Traceable Items
646. Traceable item history of this document according to AUTOSAR Release R17-03 (original version)
647. Created Constraints in R17-03
648. Created 规范 Items in R17-03
649. Traceable item history of this document according to AUTOSAR Release R17-10
650. Added 规范 Items in R17-10
651. Changed 规范 Items in R17-10
652. Deleted 规范 Items in R17-10
653. Added Constraints in R17-10
654. Changed Constraints in R17-10
655. Deleted Constraints in R17-10
656. Traceable item history of this document according to AUTOSAR Release R18-03
657. Added 规范 Items in R18-03
658. Changed 规范 Items in R18-03
659. Deleted 规范 Items in R18-03
660. Added Constraints in R18-03
661. Changed Constraints in R18-03
662. Deleted Constraints in R18-03
663. Traceable item history of this document according to AUTOSAR Release R18-10
664. Added 规范 Items in R18-10
665. Changed 规范 Items in R18-10
666. Deleted 规范 Items in R18-10
667. Added Constraints in R18-10
668. Changed Constraints in R18-10
669. Deleted Constraints in R18-10
670. Traceable item history of this document according to AUTOSAR Release R19-03
671. Added 规范 Items in R19-03
672. Changed 规范 Items in R19-03
673. Deleted 规范 Items in R19-03
674. Added Constraints in R19-03
675. Changed Constraints in R19-03
676. Deleted Constraints in R19-03
677. Traceable item history of this document according to AUTOSAR Release R19-11
678. Added 规范 Items in R19-11
679. Changed 规范 Items in R19-11
680. Deleted 规范 Items in R19-11
681. Added Constraints in R19-11
682. Changed Constraints in R19-11
683. Deleted Constraints in R19-11
684. Traceable item history of this document according to AUTOSAR Release R20-11
685. Added 规范 Items in R20-11
686. Changed 规范 Items in R20-11
687. Deleted 规范 Items in R20-11
688. Added Constraints in R20-11
689. Changed Constraints in R20-11
690. Deleted Constraints in R20-11
691. Traceable item history of this document according to AUTOSAR Release R21-11
692. Added 规范 Items in R21-11
693. Changed 规范 Items in R21-11
694. Deleted 规范 Items in R21-11
695. Added Constraints in R21-11
696. Changed Constraints in R21-11
697. Deleted Constraints in R21-11
698. Traceable item history of this document according to AUTOSAR Release R22-11
699. Added 规范 Items in R22-11
700. Changed 规范 Items in R22-11
701. Deleted 规范 Items in R22-11
702. Added Constraints in R22-11
703. Changed Constraints in R22-11
704. Deleted Constraints in R22-11
705. Added Advisories in R22-11
706. Changed Advisories in R22-11
707. Deleted Advisories in R22-11
708. Traceable item history of this document according to AUTOSAR Release R23-11
709. Added 规范 Items in R23-11
710. Changed 规范 Items in R23-11
711. Deleted 规范 Items in R23-11
712. Added Constraints in R23-11
713. Changed Constraints in R23-11
714. Deleted Constraints in R23-11
715. Added Advisories in R23-11
716. Changed Advisories in R23-11
717. Deleted Advisories in R23-11
718. Traceable item history of this document according to AUTOSAR Release R24-11
719. Added 规范 Items in R24-11
720. Changed 规范 Items in R24-11
721. Deleted 规范 Items in R24-11
722. Added Constraints in R24-11
723. Changed Constraints in R24-11
724. Deleted Constraints in R24-11
725. Added Advisories in R24-11
726. Changed Advisories in R24-11
727. Deleted Advisories in R24-11
728. Traceable item history of this document according to AUTOSAR Release R25-11
729. Added 规范 Items in R25-11
730. Changed 规范 Items in R25-11
731. Deleted 规范 Items in R25-11
732. Added Constraints in R25-11
733. Changed Constraints in R25-11
734. Deleted Constraints in R25-11
735. Added Advisories in R25-11
736. Changed Advisories in R25-11
737. Deleted Advisories in R25-11
738. Traceable item history of this document according to AUTOSAR Release R26-11
739. Added 规范 Items in R26-11
740. Changed 规范 Items in R26-11
741. Deleted 规范 Items in R26-11
742. Added Constraints in R26-11
743. Changed Constraints in R26-11
744. Deleted Constraints in R26-11
745. Added Advisories in R26-11
746. Changed Advisories in R26-11
747. Deleted Advisories in R26-11
748. Splitable Elements in the 范围 of this Document
749. Variation Points in the 范围 of this Document
750. Upstream 映射
751. 简介
752. CryptoInstantiation
753. 持久化
