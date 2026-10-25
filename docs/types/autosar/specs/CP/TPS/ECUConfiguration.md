# Specification of ECU Configuration (`ECUConfiguration`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 087 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TPS_ECUConfiguration_087\AUTOSAR_CP_TPS_ECUConfiguration.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TPS_ECUConfiguration_087\AUTOSAR_CP_TPS_ECUConfiguration.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TPS_ECUConfiguration_087\zzgen\CP_TPS_ECUConfiguration.complete.txt`

## 文档简介

According to the AUTOSAR Methodology (see figure ) the configuration process is a major part of the ECU software integration that is represented by the activity Intergrate Software for ECU.

The configuration process of an ECU starts with the splitting of the System Description into several descriptions, whereas each contains all information about one single ECU. In figure  the artifact System Description is hidden in the activity Develop System. The creation of an Ecu Extract is described in detail in the System Template specification .

The Ecu Extract and the BSW Module Delivered Bundle are the inputs for the ECU configuration step. This is also visible in figure  where the ECU configuration is described by the activities Prepare ECU Configuration and Configure BSW and RTE.

A detailed description about these activities is given in the AUTOSAR Methodology .

Within the ECU Configuration process each single module of the AUTOSAR Architecture can be configured for the special needs of this ECU. Because of a quite complex AUTOSAR Architecture, modules and interdependencies between the modules, tool-support is required: AUTOSAR ECU Configuration Editor(s).

The tool strategy and tooling details for the ECU Configuration are out of scope of this specification. Nevertheless tools need the knowledge about ECU Configuration Parameters and their constraints such as configuration class, value range, multiplicities etc. This description is the input for the tools. The description of configuration parameters is called ECU Configuration Parameter Definition and described in detail in this specification (chapter ).

To make sure that all tools are using the same output-format within the configured values of the parameters, the ECU Configuration Values is also part of this specification and described in detail later (chapter ). The ECU Configuration Values may be on one hand the input format for other configuration tools (within a tool-chain of several configuration editors) and on the other hand it is the basis of generators. The configured parameters are generated into ECU executables. This is the last step of the configuration process and again out of scope of this specification.

## 模块依赖

ECUC Parameter Values can be calculated from other parameter values that are available in other sections of the ECU Configuration. Such derived configuration parameters are described in detail in chapter . But also the existence of a ECUC Container, Parameter and Reference definition elements can depend on the setting of ECUC Parameter Values. Such it is for example possible to define parameters that are only considered if a specific switch parameter is set to a certain value. Otherwise these parameters are ignored.

 EcucConditionFormula.ecucQuery always required
  Imposition time: CP:`IT_EcucDef`
⌈
The attribute EcucConditionFormula.ecucQuery shall always be defined.
⌋

 EcucConditionFormula.ecucQueryString always required
  Imposition time: CP:`IT_EcucDef`
⌈
The attribute EcucConditionFormula.ecucQueryString shall always be defined.
⌋

To allow the description of such existence dependencies the EcucDefinitionElement and the EcucEnumerationLiteralDef aggregate the EcucConditionSpecification. The EcucConditionSpecification aggregates an EcucConditionFormula or a informal Calculation Formula (MlFormula). If the EcucConditionFormula evaluates to true the parameter definition/literal definition shall be processed as specified. Otherwise the parameter definition/literal definition shall be ignored. The informal Calculation Formula (MlFormula) can be used for the same purpose. But here, the rules how the condition is evaluated are not defined.

An EcucQuery to the ECU Configuration Values serves as an argument for the EcucConditionFormula. Due the atpMixedString nature of the EcucConditionFormula several EcucQueries can be defined within an EcucConditionFormula.

An EcucQuery is Identifiable and aggregates one EcucQueryExpression. The EcucQueryExpression outputs the result as a numerical value. The EcucQueryExpression syntax is described in chapter .

| Class | EcucConditionSpecification | < | < | < |
|---|---|---|---|---|
| Note | Allows to define existence dependencies based on the value of parameter v |  |  |  |

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

According to the AUTOSAR Methodology (see figure ) the configuration process is a major part of the ECU software integration that is represented by the activity Intergrate Software for ECU.

The configuration process of an ECU starts with the splitting of the System Description into several descriptions, whereas each contains all information about one single ECU. In figure  the artifact System Description is hidden in the activity Develop System. The creation of an Ecu Extract is described in detail in the System Template specification .

The Ecu Extract and the BSW Module Delivered Bundle are the inputs for the ECU configuration step. This is also visible in figure  where the ECU configuration is described by the activities Prepare ECU Configuration and Configure BSW and RTE.

A detailed description about these activities is given in the AUTOSAR Methodology .

Within the ECU Configuration process each single module of the AUTOSAR Architecture can be configured for the special needs of this ECU. Because of a quite complex AUTOSAR Architecture, modules and interdependencies between the modules, tool-support is required: AUTOSAR ECU Configuration Editor(s).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 配置 Meta-model
*原文标题：Configuration Meta-model*

### 4. 简介
*原文标题：Introduction*

AUTOSAR exchange formats are specified using a meta-model based approach. The meta-model for the configuration of ECU artifacts uses an universal description language so that it is possible to specify different kinds of configuration aspects. This is important as it is possible to describe AUTOSAR-standardized and vendor-specific ECU Configuration Parameters with the same set of language elements. This eases the development of tools and introduces the possibility to standardize vendor-specific ECU Configuration Parameters at a later point in time.

In general the configuration language uses containers and actual parameters. Containers are used to group corresponding parameters. Parameters hold the relevant values that configure the specific parts of an ECU. Due to the flexibility that has to be achieved by the configuration language the configuration description is divided into two parts:

* ECU Configuration Parameter Definition
* ECU Configuration Values

A detailed description of these two parts and their relationships is presented in the following sections.

### 5. ECU 配置模板结构
*原文标题：ECU Configuration Template Structure*

In this section the relationships between the different AUTOSAR templates involved in the ECU Configuration are introduced. A template is defining the structure and possible content of an actual description. The concept is open to be implemented in several possible ways, in AUTOSAR XML files have been chosen to be used for the exchange formats. If XML files are used there is no conceptual limit in the number of files making up the description. All the contributing files are virtually merged to build the actual description.

The goal of the ECU Configuration Value Template is to specify an exchange format for the ECU Configuration Values of one ECU. The actual output of ECU Configuration editors is stored in the ECU Configuration Values, which might be one or several XML files. But the ECU Configuration editors need to know how the content of an ECU Configuration Values should be structured (which parameters are available in which container) and what kind of restrictions are to be respected (e.g. the ECU Configuration Parameter is an integer value in the range between 0 and 255). This is specified in the ECU Configuration Parameter Definition which is also an XML file.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. ECU 配置 Parameter 定义 Meta-model
*原文标题：ECU Configuration Parameter Definition Meta-model*

As the name implies, the ECU Configuration Parameter Definition (sometimes abbreviated as ParamDef) defines the existence of ECU Configuration Parameters, their types and their attributes. The two major building blocks for the specification of ECU Configuration Parameter Definitions are containers and parameters/references. With the ability to establish relationships between containers and parameters and the means to specify references, the definition of parameters has enough power for the needs of the ECU Configuration. These and similar model elements, which form the ECU Configuration Parameter Definition Meta-model, are introduced in the following subsections.

### 7. ECU 配置 Parameter 定义 top-level 结构
*原文标题：ECU Configuration Parameter Definition top-level structure*

The definition of each Software Module's. The approach of Ecu configuration may be applied to non-standardized AUTOSAR Software modules (Application Software Component or Complex Driver) using the Vendor Specific Module Definition.] configuration has at the top level the structure shown in figure . For an overview of the complete ECU Configuration top level structure please refer to chapter .

 Generic structure of all AUTOSAR templates
⌈
The generic structure of all AUTOSAR templates is described in detail in the AUTOSAR Generic Structure Template .
⌋

 Standardized Module Definition package structure
⌈
The Standardized Module Definition (StMD) as delivered by AUTOSAR  shall be provided inside the package structure /AUTOSAR/EcucDefs/.
⌋

 Sorting of ECU Configuration Parameter Definitions
⌈
ECU Configuration Parameter Definitions shall be sorted alphabetically.
⌋

 EcucDefinitionCollection class
⌈
First ECU Configuration specific class is the EcucDefinitionCollection which inherits from ARElement. Through this inheritance the EcucDefinitionCollection can be part of an AUTOSAR ARPackage and thus part of an AUTOSAR description.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Usage of the Admin 数据
*原文标题：Usage of the Admin Data*

AdminData is an attribute of Identifiable  and can be used to set administrative information for an element (e.g. version information). Such administrative information can be set for the whole ECU Configuration Parameter Definition XML file and for each module definition.

 AdminData field in ECU Configuration Parameter Definition XML file
⌈
An AdminData field is required at the beginning of every ECU Configuration Parameter Definition XML file (regardless whether it is the StMD or the VSMD file) to allow the setting of AdminData for the whole XML File.
⌋

 shows how AdminData can be used for the whole ECU Configuration Parameter Definition file. For the files provided by AUTOSAR the AdminData shall be filled out with the AUTOSAR release information (Release and Revision number). For the files provided by Vendor the AdminData shall be filled out with the Vendor release information.

 Usage of AdminData on EcucModuleDef is mandatory
⌈
For each module definition, the revision of the StMD shall be provided. For the VSMD the AUTOSAR release version and the vendor's own version information shall be provided. The usage of AdminData on EcucModuleDef is mandatory.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Life Cycle 定义
*原文标题：Life Cycle definition*

AUTOSAR provides support for life cycle handling, defined in the Generic Structure Template . A standardized usage of this approach is defined in the Standardization Template .

For the definition of ECU Configuration Parameters there is support in the Meta-Model to annotate the life cycle state of each EcucDefinitionElement. For the annotation the tag atp.Status can be used. In an Ecu Configuration Parameter Definition, this information is transported in a LifeCycleInfoSet, see .

If a EcucParamConfContainerDef in the StMD has the atp.Status set to a value then the included aggregation of parameters, references and subContainers are allowed to have the atp.Status set according to .

There "1" means allowed and "0" means not allowed combination. Please note that the  is only valid for the StMD and not for the VSMD.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Documentation 支持
*原文标题：Documentation Support*

AUTOSAR provides support for integrated and well-structured documentation. More details about the AUTOSAR Documentation Support concept can be found in the AUTOSAR Generic Structure Template .

The documentation can be specified within in the following levels:

* a single paragraph can be inserted in any Identifiable element using the desc element.
* a documentation block is available in any Identifiable element as introduction. This type of documentation is typically used to capture a short introduction about the role of an element or respectively how it is built.
* a standalone documentation structured into multiple chapters is also offered in AUTOSAR. It is provided as Documentation which is an ARElement of its own rights allowing for a reference to the documents context.

It is possible to split the container and parameter notes in the ECU Configuration Parameter Definition XML file into a desc and an introduction field. The desc field contains a brief description about the element and the introduction field contains the documentation about how the element is built and used.

In the past, this split was done in the StMD.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. ECU 配置模块定义
*原文标题：ECU Configuration Module Definition*

EcucModuleDef class
⌈
The class EcucModuleDef is defining the ECU Configuration Parameters of one Software Module. It is inheriting from ARElement, so each individual EcucModuleDef needs to have a unique name within its enclosing ARPackage.
⌋

 Number of instances of a BSW module in the ECU Configuration Values
⌈
The EcucModuleDef is using the EcucDefinitionElement attributes to specify how many instances of that specific module are allowed in the ECU Configuration Values (see  for more details).
⌋

| Class | EcucModuleDef | < | < | < |
|---|---|---|---|---|
| Note | Used as the top-level element for configuration definition for Software Modules, including BSW and RTE as well as ECU Infrastructure. |  |  |  |

Tags: atp.recommendedPackage=EcucDefs

| This Class is only used by the AUTOSAR Classic Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, AtpBlueprint, AtpBlueprintable, AtpDefinition, CollectableElement, EcucDefinitionElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Container 定义
*原文标题：Container Definition*

There are two specializations of a container definition. The abstract class EcucContainerDef is used to gather the common features (see figure ).

| Class | EcucContainerDef (abstract) | < | < | < |
|---|---|---|---|---|
| Note | Base class used to gather common attributes of configuration container definitions. |  |  |  |

| This Class is only used by the AUTOSAR Classic Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, AtpDefinition, EcucDefinitionElement, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Subclasses | EcucChoiceContainerDef, EcucParamConfContainerDef | < | < | < |
| Aggregated by | EcucDestinationUriPolicy.container, EcucModuleDef.container, EcucParamConfContainerDef.subContainer | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| destinationUri | EcucDestinationUriDef | * | ref | Several destinationUris can be defined for an EcucContainerDef. With such destinationUris an EcucContainerDef is applicable for several EcucUriReferenceDefs. |

Stereotypes: atpUriDef
| multiplicityConfigClass | EcucMultiplicityConfigurationClass | * | aggr | Specifies which MultiplicityConfigurationClass this container is available for which ConfigurationVariant. |
|---|---|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Choice Container 定义
*原文标题：Choice Container Definition*

EcucChoiceContainerDef class
⌈
The EcucChoiceContainerDef can be used to specify that certain containers might occur exclusively in the ECU Configuration Values. In the ECU Configuration Parameter Definition, the potential containers are specified as part of the EcucChoiceContainerDef, and the constraint is that in the actual ECU Configuration Values only some of those specified containers will actually be present.
⌋

| Class | EcucChoiceContainerDef | < | < | < |
|---|---|---|---|---|
| Note | Used to define configuration containers that provide a choice between several EcucParamConfContainerDef. But in the actual ECU Configuration Values only one instance from the choice list will be present. |  |  |  |

| This Class is only used by the AUTOSAR Classic Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, AtpDefinition, EcucContainerDef, EcucDefinitionElement, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | EcucDestinationUriPolicy.container, EcucModuleDef.container, EcucParamConfContainerDef.subContainer | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| choice | EcucParamConfContainerDef | * | aggr | The choices available in a EcucChoiceContainerDef. |

Stereotypes: atpSplitable Tags: atp.Splitkey=choice.shortName

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Common 配置 Elements
*原文标题：Common Configuration Elements*

Configuration Containers, Parameters and References have some common attributes which are described in this section.

### 15. Variant 处理
*原文标题：Variant Handling*

Variant Handling has been introduced to AUTOSAR in a generic way. The major specification can be found in the AUTOSAR Generic Structure Template . Every element which is subject to variability shall have the stereotype «atpVariation» set.

Variant Handling is used in both areas of ECU Configuration, the ECU Configuration Parameter Definition and ECU Configuration Values. In this specification the semantics of variant handling are specified at the actual location where they occur individually.

### 16. 配置 Multiplicity
*原文标题：Configuration Multiplicity*

Number of occurrences of containers, parameters and references in the ECU Configuration Values
⌈
To be able to specify how often a specific configuration element (container, parameter or reference) may occur in the ECU Configuration Values, the class EcucDefinitionElement is introduced. With the two attributes lowerMultiplicity and upperMultiplicity the minimum and maximum occurrence of the configuration element is specified.
⌋

 Countably infinite number of containers, parameters and references in the ECU Configuration Values
⌈
To express a countable infinite number of occurrences of this element, the upperMultiplicityInfinite element shall exist and shall be set to true.
⌋

 Existence of upperMultiplicityInfinite and upperMultiplicity is mutually exclusive
  Imposition time: CP:`IT_EcucDef`
⌈
The existence of the elements upperMultiplicityInfinite and upperMultiplicity shall be mutually exclusive.
⌋

 Variable lower and upper multiplicity in ECU Configuration Parameter definition
⌈
The attributes lowerMultiplicity, upperMultiplicity and upperMultiplicityInfinite are subject to variant handling. The values can be computed using the variant handling mechanism.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Common 配置 Attributes
*原文标题：Common Configuration Attributes*

Several attributes are available on both, parameters and references. These common attributes are shown in figure .

 EcucDefinitionElement.lowerMultiplicity always required
  Imposition time: CP:`IT_EcucDef`
⌈
The attribute EcucDefinitionElement.lowerMultiplicity shall always be defined.
⌋

 EcucDefinitionElement.upperMultiplicity or EcucDefinitionElement.upperMultiplicityInfinite required
  Imposition time: CP:`IT_EcucDef`
⌈
Exactly one of the attributes EcucDefinitionElement.upperMultiplicity or EcucDefinitionElement.upperMultiplicityInfinite shall be defined.
⌋

 EcucCommonAttributes.origin always required
  Imposition time: CP:`IT_EcucDef`
⌈
The attribute EcucCommonAttributes.origin shall always be defined.
⌋

 EcucParameterDef.symbolicNameValue always required
  Imposition time: CP:`IT_EcucDef`
⌈
The attribute EcucParameterDef.symbolicNameValue shall always be defined.
⌋

 EcucAbstractConfigurationClass.configClass always required
  Imposition time: CP:`IT_EcucDef`
⌈
The attribute EcucAbstractConfigurationClass.configClass.
⌋

 EcucAbstractConfigurationClass.configVariant always required
  Imposition time: CP:`IT_EcucDef`
⌈
The attribute EcucAbstractConfigurationClass.configVariant.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Parameter Origin

Origin information in parameter and reference definitions
  Imposition time: CP:`IT_EcucDef`
⌈
Each instance of the subclass of EcucCommonAttributes or EcucContainerDef shall provide a value for the origin attribute and this attribute shall be either:

* '`AUTOSAR_ECUC`' - in case that the parameter definition is standardized by AUTOSAR
* vendor specific value - in case that the parameter definition is vendor specific. For vendor specific origins no rules are defined by AUTOSAR and the vendor is free to choose the value (e.g. '`VendorXYZ_v1`.3').
⌋

In  two parameters are defined, one which belongs to the AUTOSAR standard and one which is introduced by the module vendor in a specific version of his own ECU Configuration tools.

### 19. Value and Multiplicity 配置 Classes
*原文标题：Value and Multiplicity Configuration Classes*

Configuration class of parameter and reference definitions
⌈
Supported configuration classes in the StMD and the VSMD are:
⌋

*  Configuration class "PubilishedInformation"
  ⌈
  PublishedInformation
  ⌋
*  Configuration class "PreCompile"
  ⌈
  PreCompile
  ⌋
*  Configuration class "Link"
  ⌈
  Link
  ⌋
*  Configuration class "PostBuild"
  ⌈
  PostBuild
  ⌋

The element PublishedInformation is used to specify the fact that certain information is fixed even before the pre-compile stage.

 Usage of PublishedInformation configuration class
⌈
If PublishedInformation is selected as configuration class it has to be the same for all configuration variants.
⌋

 Supported configuration variants in the StMD and the VSMD
⌈
The supported configuration variants in the StMD and the VSMD are:
⌋

*  StMD Configuration variant "VariantPreCompile"
  ⌈
  VariantPreCompile
  ⌋
*  StMD Configuration variant "VariantLinkTime"
  ⌈
  VariantLinkTime
  ⌋
*  StMD Configuration variant "VariantPostBuild"
  ⌈
  VariantPostBuild
  ⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Value and Multiplicity Variant Values in Different Post-Build Variants

Different values of EcucCommonAttributess instances in different post-build variants
⌈
The postBuildVariantValue attribute of EcucCommonAttributes specifies if a different value of this EcucCommonAttributes may exist in different post-build variants. true means yes, false means no.
⌋

 Different number of EcucCommonAttributess instances in different post-build variants
⌈
The postBuildVariantMultiplicity attribute of EcucCommonAttributes specifies if a different number of instances of this EcucCommonAttributes may exist in different post-build variants. true means yes, false means no.
⌋

 Applicability of postBuildVariantMultiplicity attribute
  Imposition time: CP:`IT_EcucDef`
⌈
The postBuildVariantMultiplicity attribute is applicable only to EcucCommonAttributes which have upperMultiplicity greater than lowerMultiplicity.
⌋

The  above shows how the postBuildVariantValue and the postBuildVariantMultiplicity is provided in the XML file. The integer configuration parameter SignalSize shall be implemented with both values true.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Parameter 定义
*原文标题：Parameter Definition*

Definition of parameters within a EcucParamConfContainerDef
⌈
Parameters are defined within a EcucParamConfContainerDef using an aggregation with the role name parameter at the parameter side.
⌋

 Parameter types
⌈
The possible parameter types are specified using one of the specialized classes derived from EcucParameterDef. The EcucParameterDef does inherit from Identifiable, EcucCommonAttributes and EcucDefinitionElement.
⌋

The available parameter types are shown in figure .

 EcucModuleDef that relies on EcucCommonAttributes with valueConfigClass set to Link/PostBuild of another EcucModuleDef
⌈
If one EcucModuleDef relies on the EcucCommonAttributes (parameters and references) with valueConfigClass.configClass set to Link/PostBuild of another EcucModuleDef, the values of these EcucCommonAttributes can only be changed at Link/PostBuild time if the corresponding EcucModuleConfigurationValues of the using EcucModuleDef has the implementationConfigVariant set to VariantLinkTime/VariantPostBuild, respectively.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Boolean 类型
*原文标题：Boolean Type*

EcucBooleanParamDef properties
⌈
With the EcucBooleanParamDef parameter a 'true' or 'false' parameter can be specified. The only additional attribute is the defaultValue which may be specified while defining the parameter.
⌋

 Possible values for EcucBooleanParamDef parameters
⌈
The alternative representation of 'true' and 'false' are '1' and '0' which allows the usage of a numerical representation of the value in order to be computed in the variant handling.
⌋

This parameter can also be used for other 'boolean'-type configuration parameters with the semantic of:

* ON / OFF
* ENABLE / DISABLE
* 1 / 0

even if the ECU Configuration Values are restricted as described in .

Please note that the representation of an boolean parameter value or an attribute which supports atpVariation>> as true / false already requires the processing of the BooleanLiteral true /false by the formula processor.

On the ECU Configuration Values side, boolean parameter values are represented as EcucNumericalParamValues (see chapter ). The attribute "value" in the EcucNumericalParamValue supports atpVariation>> and therefore the BooleanLiteral true /false is supported by the formula language as well.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Integer 类型
*原文标题：Integer Type*

EcucIntegerParamDef properties
⌈
With the EcucIntegerParamDef parameter a signed/unsigned whole number can be specified. With the additional attributes min and max, the range of this parameters values in the ECU Configuration Values can be limited. Also the defaultValue can be specified.
⌋

 Variable default value in EcucIntegerParamDef
⌈
The attribute defaultValue of EcucIntegerParamDef is subject to variant handling. The value can be computed using the variant handling mechanism.
⌋

 Variable min, max values in EcucIntegerParamDef
⌈
The attributes min and max of EcucIntegerParamDef are subject to variant handling. The values can be computed using the variant handling mechanism.
⌋

The value range of the EcucIntegerParamDef has two use-cases, signed and unsigned, which both have to fit in a 64-bit number space.

 Signed EcucIntegerParamDef value range
⌈
If a signed value is represented the min value can be down to -9223372036854775808 and the max value can be up to 9223372036854775807.
⌋

 Unsigned EcucIntegerParamDef value range
⌈
If an unsigned value is represented the min value can be down to 0 and the max value can be up to 18446744073709551615 (in hex 0xFFFFFFFFFFFFFFFF).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Float 类型
*原文标题：Float Type*

EcucFloatParamDef properties
⌈
To be able to specify parameters with floating number values the EcucFloatParamDef can be used. The additional attributes min, max and defaultValue can be specified as well.
⌋

 Variable default value in EcucFloatParamDef
⌈
The attribute defaultValue of EcucFloatParamDef is subject to variant handling. The value can be computed using the variant handling mechanism.
⌋

 Variable min, max values in EcucFloatParamDef
⌈
The attributes min and max of EcucFloatParamDef are subject to variant handling. The values can be computed using the variant handling mechanism.
⌋

 Min and max values in EcucFloatParamDef
⌈
The max value shall be equal or bigger than the min value and the min value shall be equal or less than the max value.
⌋

 Special float values
⌈
The notation of the special float values "Not a Number" and positive/negative "infinity" shall be:

* NaN
* INF
* -INF
⌋

 INF and -INF allowed as defaultValue in EcucFloatParamDef
⌈
The special float values INF and -INF are allowed to be specified as defaultValue of EcucFloatParamDef
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. String Parameter

Subclasses of EcucAbstractStringParamDef
⌈
The subclasses of the class EcucAbstractStringParamDef provide means to specify strings in the ECU Configuration Values. Additionally an optional defaultValue can be provided.
⌋

 Variable default value in EcucAbstractStringParamDef
⌈
The attribute defaultValue of EcucAbstractStringParamDef and its subclasses is subject to variant handling. The value can be computed using the variant handling mechanism.
⌋

 Regular expression
⌈
The regular expression is provided according to the Generic Structure Template .
⌋

| Class | «atpVariation» EcucAbstractStringParamDef (abstract) | < | < | < |
|---|---|---|---|---|
| Note | Abstract class that is used to collect the common properties for StringParamDefs, LinkerSymbolDef, FunctionNameDef and MultilineStringParamDefs. |  |  |  |

Tags: vh.latestBindingTime=codeGenerationTime

This Class is only used by the AUTOSAR Classic Platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Linker Symbol Parameter

EcucLinkerSymbolDef properties
⌈
When a parameter represents a linker symbol in the configured software the EcucLinkerSymbolDef shall be used. The actual values of the symbol defined will be specified by the implementing software and are not subject to configuration.
⌋

 Programming language identifier limitations
⌈
The restriction on the defaultValue and the value of a EcucLinkerSymbolDef and its subclass are the common programming language identifier limitations: start with a letter or a special character (sc) followed by upper- and lower-case letters, digits and special characters:

| identifier := (letter | sc) ( letter | digit | sc )* |
|---|---|---|---|

where letter is  or , sc is ( _ \mid . \mid $ \mid % ) and digit is .
⌋

 Restriction on the length of EcucLinkerSymbolDef values and defaultValue
⌈
The restriction on the length of the default value and the value of a EcucLinkerSymbolDef is set to 255 characters.
⌋

The class EcucLinkerSymbolDef does not introduce any additional attributes.

The EcucLinkerSymbolDef in fact represents the C-compiler symbol which later is translated into a linker symbol. With this element the usage of the external declaration of symbols (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 212 章（内容从略，见纯文本全文）

27. 功能 Name Parameter
28. Enumeration Parameter
29. Enumeration Literal 定义
30. AddInfo
31. References in Parameter 定义
32. Reference
33. Choice Reference
34. Foreign Reference
35. Instance Reference
36. Symbolic Name Reference
37. Uri Reference
38. 概述
39. The reference EcucContainerDef.destinationUri
40. An Analogy
41. Detailed 描述 of URI-based References
42. Derived Parameter 规范
43. Derived Parameter Calculation Formula
44. Restrictions on 配置 Class of Derived Parameters
45. Existence dependence of ECUC Parameter 定义 elements
46. 校验 conditions
47. 多 aggregation of full container trees that include references
48. ECU 配置 Value Meta-model
49. ECU 配置 Value Top-Level 结构
50. 模块 Configurations
51. Splitable ModuleConfiguration
52. Parameter Container 描述
53. Choice Containers
54. Parameter Values
55. Textual Parameter Value
56. 示例 of EcucTextualParamValue
57. Numerical Parameter Value
58. 示例 of EcucNumericalParamValue
59. AddInfo Parameter Value
60. References in the ECU 配置 Meta-model
61. Instance Reference Values
62. Representation of Symbolic Names
63. Invalid 配置 due to symbolic name values
64. Rules for references in the ECUC 配置 Values
65. Derived Parameters in ECU 配置 Values
66. Using Variant 处理 to Cope with Several Binding Times in the ECU 配置 Values
67. ECU 配置 using Variant 处理的示例
68. ECU 配置 Parameter 定义 SWS implications
69. Formalization aspects
70. ECU 配置 Parameter 定义 table
71. AUTOSAR Stack 概述
72. Virtual 模块 EcuC
73. Hardware 描述
74. 分区的定义
75. PostBuild Variants
76. Variation Resolver 描述
77. UnitGroup Assignment
78. Bus to 分区映射
79. 定义 of Pdus
80. Pdu Meta-Data
81. COM-Stack 配置
82. 句柄 IDs
83. 句柄 ID concept
84. 句柄 IDs的定义
85. Agreement on 句柄 IDs
86. 句柄 IDs with symbolic names
87. 配置示例 for the Pdu Router
88. Tx from Com to CanIf
89. Rx from CanIf to Com
90. Gateway from CanIf to FrIf
91. Communication Channel IDs
92. Pdu Local Buffer 配置
93. CDD 模块
94. Pdu Router
95. L-Sdu Router
96. COM 接口模块
97. Communication 管理器
98. Generic 网络管理
99. Socket Adaptor
100. J1939Rm
101. Global Time 同步
102. EcuM 配置 to initialize post-build capable BSW 模块
103. Optional reporting of Production 错误 and Extended Production 错误
104. Converting time parameters of main functions to ticks
105. Clock Tree 配置
106. Rules to follow in different 配置 activities
107. Deriving vendor specific 模块定义 from standardized 模块定义
108. Rules for building the Base ECU 配置
109. Rules for navigating in ECU 配置 Artifacts
110. Post-build Time Consistency
111. Impact of ServiceNeeds on ECU 配置
112. 附录
113. Reference Material
114. Abbreviations
115. Imposition Times of Constraints
116. Possible Implementations for the 配置 Steps
117. Alternative Approaches (Informative)
118. Alternative 配置 Editor Approaches
119. Custom Editors
120. Generic Tools
121. Tools Framework
122. Alternative Generation Approaches
123. 术语表
124. Change History
125. Change History for release R4.0.1
126. Renamed Meta-Model Elements for AUTOSAR Release 4.0
127. Deleted SWS Items
128. Changed SWS Items
129. Added SWS Items
130. Change History for release R4.0.2
131. Changed SWS Items
132. Added SWS Items
133. Change History for release R4.0.2
134. Deleted SWS Items
135. Changed SWS Items
136. Added SWS Items
137. Added Constraints
138. Change History for release R4.1.1
139. Deleted SWS Items
140. Changed SWS Items
141. Added SWS Items
142. Added Constraints
143. Change History for release R4.1.2
144. Deleted SWS Items
145. Changed SWS Items
146. Added SWS Items
147. Change History for release R4.1.3
148. Deleted SWS Items
149. Changed SWS Items
150. Added SWS Items
151. Added Constraints
152. Change History for release R4.2.1
153. Added 规范 Items in 4.2.1
154. Changed 规范 Items in 4.2.1
155. Deleted 规范 Items in 4.2.1
156. Added Constraints in 4.2.1
157. Changed Constraints in 4.2.1
158. Deleted Constraints in 4.2.1
159. Change History for release R4.2.2
160. Added 规范 Items in 4.2.2
161. Changed 规范 Items in 4.2.2
162. Deleted 规范 Items in 4.2.2
163. Added Constraints in 4.2.2
164. Changed Constraints in 4.2.2
165. Deleted Constraints in 4.2.2
166. Change History for release AUTOSAR R4.3.0
167. Added 规范 Items in 4.3.0
168. Changed 规范 Items in 4.3.0
169. Deleted 规范 Items in 4.3.0
170. Added Constraints in 4.3.0
171. Changed Constraints in 4.3.0
172. Deleted Constraints in 4.3.0
173. Change History for release R4.3.1
174. Added 规范 Items in 4.3.1
175. Changed 规范 Items in 4.3.1
176. Deleted 规范 Items in 4.3.1
177. Added Constraints in 4.3.1
178. Changed Constraints in 4.3.1
179. Deleted Constraints in 4.3.1
180. Change History for release R4.4.0
181. Added 规范 Items in 4.4.0
182. Changed 规范 Items in 4.4.0
183. Deleted 规范 Items in 4.4.0
184. Added Constraints in 4.4.0
185. Changed Constraints in 4.4.0
186. Deleted Constraints in 4.4.0
187. Change History for release R19-11
188. Added 规范 Items in 19-11
189. Changed 规范 Items in 19-11
190. Deleted 规范 Items in 19-11
191. Added Constraints in 19-11
192. Changed Constraints in 19-11
193. Deleted Constraints in 19-11
194. Change History for release R20-11
195. Added 规范 Items in R20-11
196. Changed 规范 Items in R20-11
197. Deleted 规范 Items in R20-11
198. Added Constraints in R20-11
199. Changed Constraints in R20-11
200. Deleted Constraints in R20-11
201. Change History for release R21-11
202. Added 规范 Items in R21-11
203. Changed 规范 Items in R21-11
204. Deleted 规范 Items in R21-11
205. Added Constraints in R21-11
206. Changed Constraints in R21-11
207. Deleted Constraints in R21-11
208. Change History for release R22-11
209. Added 规范 Items in R22-11
210. Changed 规范 Items in R22-11
211. Deleted 规范 Items in R22-11
212. Added Constraints in R22-11
213. Changed Constraints in R22-11
214. Deleted Constraints in R22-11
215. Change History for release R23-11
216. Added 规范 Items in R23-11
217. Changed 规范 Items in R23-11
218. Deleted 规范 Items in R23-11
219. Added Constraints in R23-11
220. Changed Constraints in R23-11
221. Deleted Constraints in R23-11
222. Change History for release R24-11
223. Added 规范 Items in R24-11
224. Changed 规范 Items in R24-11
225. Deleted 规范 Items in R24-11
226. Added Constraints in R24-11
227. Changed Constraints in R24-11
228. Deleted Constraints in R24-11
229. Change History for release R25-11
230. Added 规范 Items in R25-11
231. Changed 规范 Items in R25-11
232. Deleted 规范 Items in R25-11
233. Added Constraints in R25-11
234. Changed Constraints in R25-11
235. Deleted Constraints in R25-11
236. Mentioned Class Tables
237. Splitable Elements in the 范围 of this Document
238. Variation Points in the 范围 of this Document
