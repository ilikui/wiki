# Adaptive Platform Machine Configuration (`MachineConfiguration`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 1112 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_TPS_MachineConfiguration_1112\AUTOSAR_AP_TPS_MachineConfiguration.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_TPS_MachineConfiguration_1112\AUTOSAR_AP_TPS_MachineConfiguration.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_TPS_MachineConfiguration_1112\zzgen\AP_TPS_MachineConfiguration.complete.txt`

## 文档简介

This document describes the structure of the configuration (M2-level) model applicable to the creation of target-configuration (as opposed to design-level) content on the AUTOSAR adaptive platform.

The M2 model described in this document provides the structural basis for the creation of target-configuration (M1) models for individual functional clusters.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document describes the structure of the configuration (M2-level) model applicable to the creation of target-configuration (as opposed to design-level) content on the AUTOSAR adaptive platform.

The M2 model described in this document provides the structural basis for the creation of target-configuration (M1) models for individual functional clusters.

### 2. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Conceptual Aspects

### 4. 设计 and Target 配置 Models
*原文标题：Design and Target Configuration Models*

If you look at AUTOSAR Models from a high vantage point, two kinds of models can be identified: design models and target-configuration models.

The purpose of this section is to give a rough intuition about the distinction between the two model flavors. It does not cover edge cases and messy details. While on first glance, this distinction is relatively obvious, there are also model elements that combine aspects of design and configuration. When looking at the details, the boundary is often blurry.

Please note that in the past, the term "deployment" was often used to refer to some aspects of "target-configuration". "Deployment", however, is heavily overloaded with many meanings.

To avoid confusion, it was decided to introduce the term "target-configuration". It refers to configuration whose scope is local to a target, like ECU Configuration (EcuC) for an EcuInstance on the AUTOSAR classic Platform, and Adaptive Platform Machine Configuration (APMC) for a Machine on the AUTOSAR adaptive Platform.

### 5. 设计建模
*原文标题：Design Model*

A rough criterion for identifying a model element as design-related, is whether or not the creation of the model element would typically be done in a System Designer role (usually related to the OEM scope).

Related to this point of view, is the question whether the model element contributes to making the overall system (beyond the scope of a single compute node) work.

In other words, a design-related model describes the external behavior, as in "the DEXT describes the external behavior of the Dcm/Dem/Fim (on the AUTOSAR classic Platform) or Dm (on the AUTOSAR adaptive Platform)".

Examples for this perspective would be: the baud-rate of a network, or the definition of a CAN Id, or an application interface that acts as a contract between the application layer and the functional clusters.

As a consequence, many design-related model elements can't be changed during the target-configuration phase, or else the system will break.

Another distinguishing characteristic of a design-related model element is that it is used to exchange information between different roles. For example between System Designer and Integrator, or between Application Developer and System Designer.

### 6. Target 配置 Models
*原文标题：Target Configuration Models*

The target-configuration model contains model elements whose scope is mostly local to a given compute node. Therefore, these elements are usually created during integration.

Some target-configuration-level model elements maintain a dedicated relation to design-level model elements, such that the target-configuration can only be considered complete, if the information from the design perspective is considered for the target-configuration.

There are also target-configuration elements that are directly derived from the content of a design-level model element. This strategy is heavily used on the AUTOSAR classic Platform.

It is not yet clarified whether it will also be relevant on the AUTOSAR adaptive Platform.

In contrast to the AUTOSAR classic Platform ECU Configuration model (EcuC), which often aims for a standalone model containing the complete information required to configure the BSW Stack, the APMC assumes that parts of the design model will be available on the target (usually not in ARXML format, but converted into a machine specific one).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 概述
*原文标题：Overview*

The big picture of the target-configuration configuration on the AUTOSAR adaptive Platform looks very similar to the configuration on the AUTOSAR classic Platform, as described by the TPS ECU Configuration .

The difference is that the approach on the AUTOSAR adaptive Platform is simpler because it is not constrained by some of the boundary conditions that apply for the AUTOSAR classic Platform.

For example, APMC does not have to provide support for code generation (e.g. symbolic names), because this is currently not standardized on AP. In addition, the application of variation (let alone post-build variation) is not yet clarified on AP.

From high above, the configuration model differs from the design model such that the design model is build based on the AUTOSAR meta-model  (also known as the M2 model), whereas the configuration model follows the specification of the configuration parameters that in turn is also based on the AUTOSAR meta-model, but one meta-level below (also known as the M1 model).

As depicted by , the difference between the M2 and the M1 model is that the M2 model is the source for the definition of (and serialization to) the XML schema .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Benefits of using an M1 model-based 配置 approach
*原文标题：Benefits of using an M1 model-based configuration approach*

In comparison to an equivalent implementation of the configuration model for the AUTOSAR adaptive Platform on the M2 level, the chosen approach comes with the following benefits:

* Much simpler model structure (easier to translate into vendor-specific target-configuration representations)
* Ability to define default values for specific configuration parameters
* Ability to create the model using the function-cluster-specific terminology
* Ability to define specific multiplicities (other than being restricted to 0..1 and 0..*)
* Ability to respond to changing requirements without having to wait for a schema change
* Ability to define vendor-specific extensions as first-class citizen
* Ability to respond to changing requirements without consideration of backwards compatibility on schema level
* Clear separation between the design-workflow and configuration-workflow

### 9. 建模 Strategies for deriving M1 建模 Content
*原文标题：Modeling Strategies for deriving M1 Model Content*

The configuration of the AUTOSAR adaptive Platform is not a stand-alone approach. Configuration models in many cases need to refer to model elements from the design model in order to provide the complete picture.

In principle, different modeling strategies for combining the information from design model elements with the information on configuration level could be conceived.

### 10. Only 设计 exists
*原文标题：Only Design exists*

In some rare cases, it is possible to take the configuration of a functional cluster entirely from the design model, i.e. no configuration model is required in the first place.

### 11. Fully derive 设计建模 to 配置建模
*原文标题：Fully derive Design Model to Configuration Model*

This modeling strategy is, to some extent, similar to the one described in , as its goal is to derive all relevant information from the design model into a respective representation in the configuration model.

After this derivation process completes, all relevant design information has become part of the configuration model. This means that the design model is no longer needed and technically might just as well be deleted.

This modeling strategy is very similar to the approach taken on the AUTOSAR classic Platform for the derivation of the configuration of the Com stack. While the derivation of the Com stack works very well, it has also been criticized for the amount of information duplication.

In other words, the configuration model tends to become big and complex if this modeling strategy is applied.

### 12. Partially derive 设计建模 to 配置建模
*原文标题：Partially derive Design Model to Configuration Model*

If the full derivation of the design model to the configuration model, as described in  is considered to produce too complex models, a possible alternative could be to just derive the design model partially and establish references to the still existing design model wherever these references can be modeled as flat references.

Consequently, the part of the design model that would require the creation of flat references does not make use of the AUTOSAR type-prototype pattern.

The alternative to using flat references would be the usage of instanceRefs. Again, the derivation of the configuration model from the design model is optional.

The core characteristics of this modeling strategy is the utilization of instanceRefs, which also means that this modeling strategy is targeting the part of the meta-model where the type-prototype pattern has been used to create the meta-model.

### 13. Only 配置 exists
*原文标题：Only Configuration exists*

This modeling strategy is based on the idea that there is no relevant design model, and all the configuration is exclusively done on the M1 level. Such a case is certainly special and does not represent a mainstream possibility.

### 14. Vendor Specific 功能性 Cluster 定义
*原文标题：Vendor Specific Functional Cluster Definition*

The Functional Cluster Definition that is standardized by AUTOSAR is the base for the configuration of the Functional Cluster. Out of the Standardized Functional Cluster Definition the Vendor-Specific Functional Cluster Definition can be derived.

Such a Vendor-Specific Functional Cluster Definition is allowed to define additional vendor-specific extensions (e.g. additional containers, parameters or references) with the same set of language elements as the Standardized Functional Cluster Definition.

This eases the development of tools and introduces the possibility to standardize vendor-specific parameters at a later point in time in AUTOSAR.

 ApmcFunctionalClusterDef categories
⌈
The category attribute of ApmcFunctionalClusterDef defines the kind of the Functional Cluster Definition:

* `STANDARDIZED_CLUSTER_DEFINITION` - Functional Cluster Definition that is standardized and released by AUTOSAR
* `VENDOR_SPECIFIC_CLUSTER_DEFINITION` - Vendor Specific Cluster Definition that refines a `STANDARDIZED_CLUSTER_DEFINITION` with vendor specific extensions
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Life Cycle 定义
*原文标题：Life Cycle definition*

AUTOSAR provides support for life cycle handling, defined in the Generic Structure Template . A standardized usage of this approach is defined in the Standardization Template .

For the definition of APMC Configuration Parameters there is support in the MetaModel to annotate the life cycle state of each ApmcDefinitionElement. For the annotation the following tagged value atp.Status can be used.

If a ApmcParamConfContainerDef defines the tag atp.Status, then the included aggregation of elements and containers are allowed to have the tag atp.Status set according to .

Within the table, a "1" represents an allowed combination and "0" represents a not-allowed combination.

 Matrix of allowed status value combinations of ApmcParamConfContainerDef and aggregations of ApmcParameterDef/ApmcReferenceDef/ApmcContainerDef
⌈
| Status of included aggregation | < | < | < |  |
|---|---|---|---|---|
| Status of ApmcParamConfContainerDef | draft | valid | obsolete | removed |
| draft | 1 | 0 | 1 | 1 |
| valid | 1 | 1 | 1 | 1 |
| obsolete | 0 | 0 | 1 | 1 |
| removed | 0 | 0 | 0 | 1 |

⌋

If an ApmcReferenceDef defines the tag atp.Status, then the target of this reference is allowed to use the tag atp.Status according to .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 概述
*原文标题：Overview*

This chapter provides a description of the configuration elements with a focus on the overview and general modeling strategy.

As already hinted, the modeling approach for the target-configuration is split into two parts:

* The "definition side" is used to define the structure of the configuration for specific parts of the target-configuration, e.g. the configuration of a specific functional cluster.
* The "value side" is used to create values for specific configuration items according to the structure defined in the "definition side".

In general, the structure of the configuration can be subdivided it two basic building blocks:

* containers,
* parameters and references.

Containers are used to group parameters, references and containers, thereby creating a nested configuration structure of arbitrary depth.

Parameters carry the relevant values that configure the specific parts of the Machine, respectively SoftwareCluster assembly. References point to other containers that are relevant for the respective configuration context.

### 17. 抽象结构
*原文标题：Abstract Structure*

Abstract relation between the "value side" and the "definition side"
⌈
The relation between the "value side" and the "definition side" is that the "value side" needs to follow the structure defined by the "definition side".

The concrete relation between a value and the corresponding definition is defined by a reference from the "value side" model element to the "definition side" model element.

This reference is established on an abstract level by the reference in the role ApmcAbstractValue.definition to ApmcAbstractDefinition. This reference is inherited to the respective corresponding sub-classes of ApmcAbstractValue and ApmcAbstractDefinition.
⌋

Please note that there is no 1:1 relation between an ApmcAbstractValue and an ApmcAbstractDefinition. It is possible to create a collection with an upper multiplicity greater than 1 within the APMC model and therefore the same ApmcAbstractDefinition may be referenced by more than one ApmcAbstractValue.

| Class | ApmcAbstractDefinition (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This abstract meta-class implements the "definition" side of the abstract structure for the machine configuration. |  |  |  |

This Class is only used by the AUTOSAR Adaptive Platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 定义 Side
*原文标题：Definition Side*

Root element on the "definition side"
⌈
Meta-class ApmcFunctionalClusterDef represents the root element of the target-configuration configuration on the "definition side".
⌋

 Semantics of ApmcDefinitionCollection
⌈
Meta-class ApmcDefinitionCollection acts (as the name already suggests) as a collector, such that model elements that need to refer to a number of different ApmcFunctionalClusterDefs can instead simply create one reference to the ApmcDefinitionCollection that in turn refers to the affected ApmcFunctionalClusterDefs in the role functionalCluster.
⌋

| Class | ApmcDefinitionCollection | < | < | < |
|---|---|---|---|---|
| Note | This class represents the entry point of the target-configuration on the "definition" side. |  |  |  |

Tags: atp.recommendedPackage=SoftwareClusterDefinitions

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, AtpBlueprint, AtpBlueprintable, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, UploadablePackageElement | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 定义 Elements
*原文标题：Definition Elements*

Meta-class ApmcDefinitionElement is used to inherit some essential and commonly used attributes to the various classes on the "definition side" of the target-configuration.

| Class | ApmcDefinitionElement (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This abstract class contributes basic properties to the modeling of classes on the "definition" side of the target-configuration. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject | < | < | < |
| Subclasses | ApmcContainerDef, ApmcContainerElementDef, ApmcFunctionalClusterDef | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| elementCreation | ApmcElementCreationEnum | 0..1 | attr | This attribute gives a hint about how (in terms of the AUTOSAR workflow) the model element comes into existence. |

Tags: xml.sequenceOffset=10
| lowerMultiplicity | PositiveInteger | 0..1 | attr | This attribute specifies the lower multiplicity of the respective model element. |
|---|---|---|---|---|

Tags: xml.sequenceOffset=30
| relatedTraceItem | Traceable | 0..1 | ref | This contains a sloppy reference to the formal ID of the element. |
|---|---|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Grouping of 配置 Elements
*原文标题：Grouping of Configuration Elements*

The container level within the configuration approach exists for several purposes (see also ):

* Provide a simple grouping mechanism for other model elements, see ApmcContainerElementDef, resp. the aggregation in the role ApmcParamConfContainerDef.element.
* Provide a way to create nested structures of such a grouping, see ApmcParamConfContainerDef.container.
* Provide the ability to become a target for references that create relation between containers on different nesting levels, see .
* Emulate "inheritance" by means of choice-containers, see ApmcChoiceContainerDef.

 Grouping of configuration items on the level of a container
⌈
The grouping of configuration items is implemented by means of the roles:

* ApmcParamConfContainerDef.element for the aggregation of "primitive" configuration items.
* ApmcParamConfContainerDef.container for the creation of nested levels of containers.
⌋

| Class | ApmcContainerDef (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This abstract meta-class represents a container on the "definition" side of the target-configuration. |  |  |  |

This Class is only used by the AUTOSAR Adaptive Platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Emulation of Inheritance

Semantics of a choice container
⌈
The existence of an ApmcChoiceContainerDef implements a structural alternative in the target-configuration. The behavior of the ApmcChoiceContainerDef has a similar effect as the creation of sub-classes on the M2 model.
⌋

The statement made by  is visualized in , in which the equivalent of an inheritance relation in the M2 model (left part of ) is created by means of the target-configuration M1 model (right part of ).

Consequently, the multiplicity of ApmcParamConfContainerDefs aggregated in the role ApmcChoiceContainerDef.choice is subject to restriction, see .

 Multiplicity of ApmcParamConfContainerDefs aggregated in the role ApmcChoiceContainerDef.choice
  Imposition time: `IT_CfgFcd`
⌈
The multiplicity of each ApmcParamConfContainerDef aggregated in the role ApmcChoiceContainerDef.choice shall be set to 0..1.
⌋

| Class | ApmcChoiceContainerDef | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to specify a choice-semantics on the container level (on the "definition" side of the target-configuration). |  |  |  |

The choice semantics can be utilized to emulate inheritance in the M1 model.

This Class is only used by the AUTOSAR Adaptive Platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Parameter

Definition of configuration parameter
⌈
A configuration parameter is used to adjust a specific atomic aspect of the target-configuration. Configuration parameters are available in different flavors, depending on the data type of the information they need to carry.

For this purpose, different data-type-specific subclasses of the abstract class ApmcParameterDef exist on the "definition side" to describe the definition of a parameter of a certain nature.

A Configuration parameter can only be defined in the context of a ApmcParamConfContainerDef.
⌋

The details are explained in .

The abstract meta-class ApmcParameterDef acts as a base class for the specific kinds of parameter definition.

| Class | ApmcParameterDef (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents a parameter on the "definition" side of the adaptive platform. The concrete nature of the parameter is clarified by a subclass. |  |  |  |

This Class is only used by the AUTOSAR Adaptive Platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Reference

Definition of reference
⌈
In the context of the target-configuration, references can be used to either create a semantical link between different parts of the target-configuration or to associate a part of the target-configuration with an element from the design model.
⌋

The details are explained in .

The abstract meta-class ApmcReferenceDef acts as a base class for the specific kinds of reference definition.

| Class | ApmcReferenceDef (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents a reference on the "definition" side of the adaptive platform. The concrete nature of the reference is clarified by a subclass. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, ApmcAbstractDefinition, ApmcConfigurationElementDef, ApmcContainerElementDef, ApmcDefinitionElement, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Subclasses | ApmcAbstractForeignReferenceDef, ApmcAbstractInstanceReferenceDef, ApmcChoiceContainerReferenceDef, ApmcContainerReferenceDef | < | < | < |
| Aggregated by | ApmcParamConfContainerDef.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| - | - | - | - | - |

### 24. Reference to Traceable Elements

Meta-class ApmcDefinitionElement provides the ability to create a reference to a traceable element. This is achieved by means of the role ApmcDefinitionElement.traceableElement.

The purpose of this reference is to allow for linking a specific ApmcDefinitionElement to the applicable SWS trace ID.

### 25. Value Side

The value side of the target-configuration is where the actual configuration values are provided. Each configuration value is required to refer to the accompanying definition such that tools

* can interpret the provided value correctly with respect to the definition of the value and
* can check whether the nature of the provided value matches the expectation set by the corresponding element on the definition side.

The concrete references from "value side" to "definition side" with the semantics of referring to the defining configuration element are

* ApmcFunctionalClusterValue.definition
* ApmcContainerValue.definition
* ApmcContainerElementValue.definition

This modeling aspect is depicted in .

 Existence of reference in the role ApmcFunctionalClusterValue.definition
  Imposition time: `IT_CfgFcd`
⌈
For each ApmcFunctionalClusterValue, the reference in the role definition shall exist.
⌋

 Existence of reference in the role ApmcContainerValue.definition
  Imposition time: `IT_CfgFcd`
⌈
For each ApmcContainerValue, the reference in the role definition shall exist.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Grouping of 配置 Values
*原文标题：Grouping of Configuration Values*

The definition of grouping and nested structures of configuration elements, as described on the "definition side" in  is reflected in the "value side" as well.

For this purpose, meta-class ApmcContainerValue has the ability to aggregate itself, see .

| Class | ApmcContainerValue | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents a container on the "value" side of the target-configuration. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, ApmcAbstractValue, ApmcIndexableValue, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | ApmcContainerValue.container, ApmcFunctionalClusterValue.container | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| container | ApmcContainerValue | * | aggr | This aggregation represents the collection of sub-containers of the enclosing container. By using this aggregation arbitrary nested structures of containers can be created. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Parameter

As explained in , configuration parameter can be defined in different flavors. These flavors are also represented on the value side, as subclasses of the abstract base class ApmcParameterValue.

Please find more information about the details in .

| Class | ApmcParameterValue (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents a parameter on the "value" side of the adaptive platform. The concrete nature of the parameter is clarified by a subclass. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, ApmcAbstractValue, ApmcContainerElementValue, ApmcIndexableValue, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Subclasses | ApmcAbstractRestrictedTextualParamValue, ApmcNumericalParamValue, ApmcTextualParamValue | < | < | < |
| Aggregated by | ApmcContainerValue.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| - | - | - | - | - |

### 28. Reference

References are also represented on the "value side" by means of abstract base class ApmcReferenceValue. Please find more information about the details in .

| Class | ApmcReferenceValue (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents a reference on the "value" side of the adaptive platform. The concrete nature of the reference is clarified by a subclass. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, ApmcAbstractValue, ApmcContainerElementValue, ApmcIndexableValue, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Subclasses | ApmcAbstractInstanceReferenceValue, ApmcAbstractReferenceValue, ApmcContainerReferenceValue | < | < | < |
| Aggregated by | ApmcContainerValue.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| - | - | - | - | - |

### 29. Details

This chapter provides a description of the configuration elements with a focus on the details.

### 30. 定义 Side
*原文标题：Definition Side*

This section contains a detailed description of configuration elements on the "definition side".

### 31. Parameter

The detailed definition of the modeling of parameter definitions is depicted in .

### 32. Enumeration Parameter

Definition of an enumeration-style parameter
⌈
The definition of an enumeration-style parameter is done by means of meta-classes ApmcEnumerationParamDef and ApmcEnumerationLiteralDef. The former class is used to model the enumeration itself, while the latter class is used to model the specific values that the enumeration can take.

The literals that the enumeration can take are aggregated in the role literal.
⌋

 Available choices of ApmcEnumerationParamDefs are defined by aggregated literals
⌈
To provide the available choices for the ApmcEnumerationParamDef the ApmcEnumerationLiteralDef is used. For each available choice there needs to be one literal defined.
⌋

 The shortName of an ApmcEnumerationLiteralDef is used to define the literal
⌈
For the text used to define the ApmcEnumerationLiteralDef no additional attribute is needed because the shortName inherited from Identifiable is used to define the literals.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 49 章（内容从略，见纯文本全文）

33. Boolean Parameter
34. Integer Parameter
35. Float Parameter
36. Unrestricted String Parameter
37. Restricted String Parameter
38. Reference
39. Reference to Container
40. Choice Reference to Container
41. Foreign Reference
42. Instance Reference
43. Value Side
44. Parameter
45. Numerical Parameter Value
46. Unrestricted Textual Parameter Value
47. Restricted Textual Parameter Value
48. Reference
49. 建模 Use Cases
50. 功能性 Cluster interacts with 功能性 Cluster
51. 附录
52. Reference Material
53. Terms and Abbreviations
54. Imposition Times of Constraints
55. 示例
56. Change History of AUTOSAR Traceable Items
57. Traceable item history of this document according to AUTOSAR Release R24-11
58. Added 规范 Items in R24-11
59. Changed 规范 Items in R24-11
60. Deleted 规范 Items in R24-11
61. Added Constraints in R24-11
62. Changed Constraints in R24-11
63. Deleted Constraints in R24-11
64. Traceable item history of this document according to AUTOSAR Release R25-11
65. Added 规范 Items in R25-11
66. Changed 规范 Items in R25-11
67. Deleted 规范 Items in R25-11
68. Added Constraints in R25-11
69. Changed Constraints in R25-11
70. Deleted Constraints in R25-11
71. Traceable item history of this document according to AUTOSAR Release R26-11
72. Added 规范 Items in R26-11
73. Changed 规范 Items in R26-11
74. Deleted 规范 Items in R26-11
75. Added Constraints in R26-11
76. Changed Constraints in R26-11
77. Deleted Constraints in R26-11
78. Added Advisories in R26-11
79. Changed Advisories in R26-11
80. Deleted Advisories in R26-11
81. Mentioned Class Tables
