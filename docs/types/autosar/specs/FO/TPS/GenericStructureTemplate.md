# Generic Structure Template (`GenericStructureTemplate`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 202 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TPS_GenericStructureTemplate_202\AUTOSAR_FO_TPS_GenericStructureTemplate.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TPS_GenericStructureTemplate_202\AUTOSAR_FO_TPS_GenericStructureTemplate.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TPS_GenericStructureTemplate_202\zzgen\FO_TPS_GenericStructureTemplate.complete.txt`

## 文档简介

This document contains the specification of the AUTOSAR Generic Structure Template. Actually, it has been created as a supplement to the formal definition provided by the AUTOSAR meta-model . In other words, this document in addition to the formal specification provides introductory description and rationale for the parts of the AUTOSAR meta-model relevant for almost all AUTOSAR templates.

Nevertheless, the core part of the specification is directly based on the content of the AUTOSAR meta-model. Therefore, this document contains a summary of the main concepts of the AUTOSAR meta-model, see chapters  and .

This document provides reference information and is not intended to be read in a sequence. Nevertheless it contains as major aspects:

# Chapter  explains the top level structure which is common to all AUTOSAR templates.
# Mechanisms used to design AUTOSAR templates:

  # Chapter  describes an essential aspects of the AUTOSAR Template UML profile which are necessary to understand the AUTOSAR template documents.
  # Chapter  describes general template classes which are collected similar to the standard library of a compiler.
  # Chapter  explains abstract classes with abstract relationships. These structures implement particular concepts applicable to all AUTOSAR templates. These concepts are applied by specializing these abstract classes and in particular specializing the abstract relationships.
  # Chapter  explains in general the approach to apply by model transformation (as for example used for Variant handling).
# Some specific applications of design mechanisms in the meta-model

  # Chapter  describes the implementation of variant handling within AUTOSAR templates based on meta-modeling patterns (as described in ).
  # Chapter  describes the implementation of splitable elements within AUTOSAR M2 models. The corresponding AUTOSAR M1 model view is explained in ).
  # Chapter  describes the documentation support.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document contains the specification of the AUTOSAR Generic Structure Template. Actually, it has been created as a supplement to the formal definition provided by the AUTOSAR meta-model . In other words, this document in addition to the formal specification provides introductory description and rationale for the parts of the AUTOSAR meta-model relevant for almost all AUTOSAR templates.

Nevertheless, the core part of the specification is directly based on the content of the AUTOSAR meta-model. Therefore, this document contains a summary of the main concepts of the AUTOSAR meta-model, see chapters  and .

This document provides reference information and is not intended to be read in a sequence. Nevertheless it contains as major aspects:

# Chapter  explains the top level structure which is common to all AUTOSAR templates.
# Mechanisms used to design AUTOSAR templates:

  # Chapter  describes an essential aspects of the AUTOSAR Template UML profile which are necessary to understand the AUTOSAR template documents.
  # Chapter  describes general template classes which are collected similar to the standard library of a compiler.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 范围
*原文标题：Scope*

The scope of this document covers information which is required to understand the AUTOSAR templates and the core mechanisms used to define these templates.

Aspects of UML modeling required to perform the template Modeling tasks are out of the scope of this document.

### 3. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Methodology for Defining Formal Templates

Figure  illustrates the overall methodology used to define formal templates using System Template as an example. A precise and concise model of the information that needs to be captured in AUTOSAR XML files is provided in

The following documents describe the various aspects of the methodology:

# The template document (in this example System Template) describes the information that can be captured in the template, independently from the mapping of this model on XML-technology. It contains an elaborate description of the semantics (the precise meaning) of all the information that can be captured within the relevant parts of the AUTOSAR meta-model.
# The model called M2 Templates in the AUTOSAR meta-model  contains the structure of the AUTOSAR templates modeled in UML. The model is annotated using notes which are also represented as class tables in the template documents.
# The document called Generic Structure Template (this document) is represented e.g. as predefined Classes in the meta-model which are incorporated in the generated schema.
# The Template UML Profile and Modeling Guide describes the basic concepts that were applied when creating content of the meta-model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Organization of the Meta-Model

Figure  sketches the overall structure of the meta-model, which formally defines the vocabulary required to describe AUTOSAR software-components. As the diagram points out, other template specifications (e.g. ECU Resource Template  and System Template ) also use the same modeling approach in order to define an overall consistent model of AUTOSAR software description.

The dashed arrows in the diagram describe dependencies in terms of import-relationships between the packages within the meta-model. For example, the package SWComponentTemplate imports meta-classes defined in the packages GenericStructure (described in this document) and ECUResourceTemplate .

For clarification, please note that the package GenericStructure contains some fundamental infrastructure meta-classes and common patterns. As these are used by all other template specification the dependency associations are not depicted in the diagram for the sake of clarity.

### 6. Usage of UML in AUTOSAR Templates

The AUTOSAR meta-model is defined as an UML model. Therefore basic knowledge of UML is required to understand the AUTOSAR template documents.

### 7. UML Diagrams

The diagrams in the AUTOSAR Template documents are consistent with UML 2.0. The underlying model (the AUTOSAR meta-model) is assumed to be complete even though certain elements might not be shown in a particular diagram to simplify understanding. Nevertheless the class tables show all relevant information.

The coloring of the diagrams is usually explained in the surrounding text. But in general the meta-classes in light green color are those which are taken from ASAM/MSR.

Representation of instance refs is shown in Figure  (see ).

### 8. The AUTOSAR meta-model hierarchy

The complete meta-model hierarchy for AUTOSAR templates is shown in figure . Unlike the classical four-layer architecture used by OMG, five meta levels are shown. Starting at the lowest, most concrete meta level those are:

* M0: AUTOSAR objects This is the realization of an AUTOSAR system at work: For example a real ECUs executing a software image containing for instance the windshield wiper control software.
* M1: AUTOSAR models Models on this meta level are built by the AUTOSAR developers. They may define a software component called "windshield wiper" with a certain set of ports that is connected to another software component and so on. On this level all artifacts required to describe an AUTOSAR system are detailed, including re-usable types as well as specific instances of such types.

  The AUTOSAR software is loaded in to individual ECUs for individual vehicles. This loading means that the M1 Model is instantiated.

  Note that such an AUTOSAR model can be represented using various formats ranging from XML, to C even to PDF.
* M2: AUTOSAR meta-model On this meta level the vocabulary for AUTOSAR templates is defined.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Stereotypes

The AUTOSAR Template Profile uses the following stereotypes:

*  atpAbstract>> applicable to relations (associations, aggregations)
  ⌈
  This indicates that the relationship is abstract. There needs to be specialized relation in every concrete subclass redefining the abstract relation. This stereotype is there to provide a better visualization in the diagrams. The fact that the relation is abstract is modeled by defining the role as "derived" in the model. It is also indicated by a "/" in front of the role name in the diagrams.

  Relations of atpAbstract>> exist only in the superclass and are not inherited to subclasses. They need to be redefined in the subclasses.
  ⌋
*  atpDerived>> applicable to relations (associations, aggregations)
  ⌈
  This indicates that the relationship exists in the subclasses by inheritance. It further indicates that in M1 models the relation is calculated (derived) from other information.

  There are two types of calculation:

  * general indicates that the value is calculated by a method which is described in the note of the abstract relation. For example the atpBase is calculated as the container of the first atpContextElement.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Mixed Content (<<atpMixed>>, <<atpMixedString>>)

If a meta-class has several attributes (which may include aggregations or references), there are cases in which the "serialized" representation (like XML) in the M1 model adds semantics to the actual order and to the number of occurrences of the attribute instances. It may be also be required, that the same attribute appears in multiple instances (in M1) which are mixed with other attribute instances. This situation cannot be expressed in UML in a simple way.

In addition, if a model requires to describe documentation-like information, it often will need to mix formal content and text. An example of such a model is a an embedded link in HTML: markup of formal information bits is mixed into regular text, as shown in the following example:

[...]meet <a href="/wiki/Runtime" title="Runtime">runtime</a> requirements
of automotive devices[...]

This example illustrates that the "mixed content" feature is is well known in the XML world, where it is called mixed content.

 Basic Features of Mixed Content
⌈
The following list indicates the features of mixed content from a modeling point of view. Within a mixed content instance

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. StructuredComment Elements (<<atpStructuredComment>>)

AUTOSAR supports StructuredComment to provide auxiliary information with the goal to create a comment.

 atpStructuredComment>>
⌈
Elements marked as atpStructuredComment>> contain information that have no semantics in the model and may be ignored on model level.
⌋

 Interaction of atpStructuredComment>> and atpSplitable>>
⌈
When merging multiple physical files according to splitable elements all elements marked as atpStructuredComment>> and all child elements may be ignored.
⌋

The listing  illustrates the use of atpStructuredComment>> by providing information about the generating tool and its version.

| Class | FileInfoComment | < | < | < |
|---|---|---|---|---|
| Note | This class supports StructuredComment to provide auxiliary information with the goal to create a comment. | < | < | < |
| Base | ARObject | < | < | < |
| Aggregated by | AUTOSAR.fileInfoComment | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| sdg | Sdg | * | aggr | This property allows to keep special data which is not represented by the standard model. It can be utilized to keep e.g. tool specific data. |

### 12. UML Tags

The AUTOSAR Template Profile uses the following UML tags. Note that only those tags are mentioned here which directly influence the semantic content of the meta-model.

 UML tags are attached to the target end of relations if suitable
⌈
Unless specified differently with the particular UML tag, UML tags are attached to the target end of a relation (association, aggregation). For Dependency and Generalization UML tags are associated with the connector itself (to overcome limitation of UML tool (EA) used in AUTOSAR).
⌋

*  atp.recommendedPackage
  ⌈
  This tag provides a recommended package name for objects of the given meta-class. Thereby it provides a value for {kind}. Usually it is the name of the meta-class to which the tag is attached. Note that

  * this tag is propagated to subclasses
  * this tag only applies to subclasses of PackageableElement
  ⌋

  The value for {kind} is described in Chapter .

  Possible values are the manifests defined in , e.g. Machine Manifest, Execution Manifest, Service Instance Manifest.
*  atp.Splitkey
  ⌈
  This specifies the identifying key of atpSplitable>> relations. The tag specifies a comma separated list of the attributes defined in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Life Cycle Tags

Tags to denote life cycle information
⌈
AUTOSAR denotes the status with respect to life cycle on entities in UML model by tags with the name atp.Status*.
⌋

*  atp.Status
  ⌈
  This tag allows to specify the current state of a meta-model entity with respect to its life cycle. It is applicable to classes, aggregations, associations and attributes.

  The following values are supported:

  * This indicates that the related entity is a valid part of the document.
  * This indicates that the related entity is introduced newly in the meta-model but still experimental. This information is published but is subject to be changed without backward compatibility management.
  * This shall be used for a related entity that is not yet valid but shall still be recognized by the AUTOSAR BWC checker for the XML schema. Any BWC-incompatible change of the related entity shall be reported by the BWC checker.
  * This indicates that the related entity is obsolete and kept in the meta-model for compatibility reasons. If this tag is set, the note shall express the recommended alternative solution.
  * This indicates that the related entity is still in the meta-model for whatever reason (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Document Production 控制 Tags
*原文标题：Document Production Control Tags*

AUTOSAR specifies a means to control the appearance of platform specific content in specification documents. The semantics of these restrictions are explained further:

* on documentation level
* on modeling level

The means, is meta-model artifact specific and explained further in:

* meta-model classes, connectors and attributes
* meta-model diagrams
* meta-model descriptions

 Standards restriction on document level
⌈
The usage of a standards restriction controls the appearance of model elements in generated document artifacts within the scope of the mentioned standard. If a standards restriction is applied to a model element then this model element shall appear only in the generated artifacts of the standards identified by the values of the restriction.
⌋

 Implications of a standards restriction on modelling level
⌈
Model elements whose visibility is excluded from a respective platform due to  are also implicitly excluded from any further semantical meaning in a model even if they are visibly present in a model.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Variant 处理 Tags
*原文标题：Variant Handling Tags*

Tags to denote Variant Handling Properties
⌈
UML- Tags with the name vh.* relate to the variant handling.
⌋

*  vh.latestBindingTime
  ⌈
  This tag controls the binding time of variant handling.
  ⌋

  For more details, see chapter  .
*  vh.variationPointApplicable
  ⌈
  Setting this tag to "false" identifies "Ghost Variation Points".
  ⌋

  For more information on "Ghost Variation Points", see chapter  .

### 16. Schema Production 配置 Tags
*原文标题：Schema Production Configuration Tags*

UML-tags for Configuration of XML schema production
⌈
UML-Tags with the name xml.* relate to the XML serialization of AUTOSAR models. They basically do not influence the semantics of an M1 model, but ensure that the XML serialization can be controlled by the meta-model.

They also provide means to tweak the schema such that backwards compatibility of the schema can be ensured while the meta-model evolves.

For more details how to apply these tags and about the impact of these tags, refer to .
⌋

*  xml.xsd.* etc.
  ⌈
  These tags allow to define details of primitive types by using XSD restrictions. Even if it is specified by means of a technology specific definition it applies to the meta-model independently of the storage technology.
  ⌋
*  xml.xsd.customType
  ⌈
  This tag is applicable to a primitive>>. It specifies the name of the xsd:simpleType which represents the primitive type.
  ⌋
*  xml.attribute
  ⌈
  determines if the UML-attribute is serialized as an XML attribute. This tag allows to control the XML serialization and is not relevant for the semantics of an M1 model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Administrative UML Tags

Adminstrative UML Tags
⌈
For document administration of the meta-model, the UML tags with the name pattern admin.* are applied to a particular package (for example M2::AUTOSAR Templates::ReadMe). If this package is referenced in the configuration files of the "Meta-Model Tool" (MMT) the values are forwarded to the generated artifacts ( e.g. `MMOD_XMLSchema` or `MOD_ECUConfigurationParameters`).

In addition to the UML tags the disclaimer for the generated artifacts is taken from the package note of this package.
⌋

The following UML tags apply:

*  admin.documentClassification
  ⌈
  Denotes the classification of the meta-model (Standard resp. Auxiliary)
  ⌋
*  admin.documentIdentificationNo
  ⌈
  This represents the AUTOSAR document number.
  ⌋
*  admin.documentOwner
  ⌈
  This denotes the maintainer of the meta-model.
  ⌋
*  admin.documentResponsibility
  ⌈
  This denotes the responsible authority of the meta-model.
  ⌋
*  admin.documentStatus
  ⌈
  This denotes the status of the meta-model.
  ⌋
*  admin.documentTitle
  ⌈
  This denotes the title assigned to the meta-model.
  ⌋
*  admin.documentVersion
  ⌈
  This denotes the official version of the meta-model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Upstream 映射规范 Tags
*原文标题：Upstream Mapping Specification Tags*

Tags to specify Upstream Mapping
⌈
UML-Tags with the name map.* relate to the description of upstream mapping. Upstream mapping describes how M1 entities created later in the methodology (downstream) relate (map) to entities created earlier (upstream).
⌋

*  map.template
  ⌈
  * This denotes the list of applicable upstream M2 "template", in which the mapping will be listed.
  * The format is a comma separated list of one or more "templates". White-space around the values ("templates") in the list is not significant.
  * Each "template" follows . In particular it is the document name (abbreviation) specified in  (e.g. SWCT).
  * Example: map.template=`TPS_SWCT`,`TPS_DEXT`
  ⌋
*  map.param
  ⌈
  * This denotes the list of applicable upstream M2 elements, to which the M1 param shall be mapped.
  * The format is a comma separated list of one or more "node paths". White-space around the values ("node paths") in the list is not significant.
  * Each "node path" is the fully qualified meta-model node path to the corresponding M2 element.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Schema Tags

The following tags are generated into the schema by the MMT:

*  mmt.qualifiedName
  ⌈
  * The value of mmt.qualifiedName represents the unique name of the corresponding element in the meta-model. It can be composed by several unique names separated by a dot.
  * Example: mmt.qualifiedName="ComponentInSystemInstanceRef. contextComposition".
  ⌋
*  mmt.packagePath
  ⌈
  * The value of mmt.packagePath represents the complete path of the composed package path starting below the AUTOSAR Templates package. The package levels are separated by "::".
  * Example: mmt.packagePath="SWComponentTemplate::Components".
  ⌋
*  pureMM.maxOccurs, pureMM.minOccurs
  ⌈
  * The values of pureMM.maxOccurs and pureMM.minOccurs are derived from the lower and upper multiplicity of the corresponding element in the meta-model.
  * Example: pureMM.maxOccurs="1", pureMM.minOccurs="0"
  ⌋
*  pureMM.isOrdered
  ⌈
  * The value of pureMM.isOrdered is derived from the property ordered (true or false) of the multiplicity of the corresponding element in the meta-model.
  * Example: pureMM.isOrdered="true" of mmt.qualifiedName="AdminData.docRevision".
  ⌋

### 20. AUTOSAR Top Level 结构
*原文标题：AUTOSAR Top Level Structure*

AUTOSAR uses a common top level structure for all AUTOSAR templates. This approach leaves maximum flexibility to design the artifacts in the AUTOSAR methodology. Figure  illustrates the AUTOSAR top level structure.

 Top-Level Structure of an AUTOSAR Model
⌈
The meta-class AUTOSAR is the root of all templates. AUTOSAR contains multiple ARPackages as arPackage.
⌋

Due to the role of the meta-class AUTOSAR as the root of all templates and therefore also of the corresponding XML documents, this singular role of AUTOSAR is also distinguished by assigning the tag xml.globalElement, see also .

ARPackage can be arbitrarily nested. These packages contain PackageableElements which represent particular autonomous entities of AUTOSAR templates. The most prominent specialization of this is ARElement (see Chapter ).

Note that all AUTOSAR meta-classes inherit from ARObject (see Chapter ).

 AUTOSAR top level AdminData
⌈
The top level structure also contains AdminData which specifies two major aspects of an AUTOSAR artifact:

* change management information specified as DocRevision
* language status of the document
⌋

For more details see Chapter ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Identifying M1 elements in packages

Packages are used to organize AUTOSAR M1 models. AUTOSAR GBR itself publishes M1 models as part of the released standard. In order to clearly identifying such model elements, the following rules apply:

*  Package Structure for AUTOSAR delivered Models
  ⌈
  Model elements standardized by AUTOSAR and delivered as ARXML live in a top-level Package of which the shortName is AUTOSAR.

  This means that data elements which are defined by an OEM or supplier should not live in a top level package named AUTOSAR.
  ⌋

   Pattern for AUTOSAR delivered Models
  ⌈
  The package structure of AUTOSAR delivered models follow the pattern:

  /AUTOSAR
    /{reservedName}                                  - identify the spec
      /{atp.recommendedPackage} - identify the kind
                                                     -         of object
  ⌋

  Note that AUTOSAR typically delivers Blueprints. For more details see .

  An example structure is

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. The role of ARPackage, ARElement and Identifiable et. al.

The AUTOSAR meta-model uses some abstract classes which represent various abilities with respect of model organization. A synopsis of the same is provided in Figure .

About Referrable:

* Referrable is an abstract meta-class which has a shortName acting as a target for references. Referrable is mainly used for reference targets with a small footprint such as Sdg. Referrable is specialized in SingleLanguageReferrable/MultilanguageReferrables.
* Specialization s of SingleLanguageReferrable are applicable as elements which are embedded in a text which is already part of a multilingual object (so called inline elements as described in Chapter ).
* Specializations of MultilanguageReferrables apply to multilingual objects which should have a relatively small footprint such as DefList, Traceable.

About Describable:

* Describable is an abstract meta-class which represents the ability to provide a description but not being Referrable or Identifiable. It is mentioned here for completeness.

About Identifiable:

* Identifiable is an abstract class which inherits from MultilanguageReferrable. This is used to identify the essential objects in an AUTOSAR model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 通用模板 Classes
*原文标题：General Template Classes*

The nature of the general template classes given below is similar to the standard library of a compiler: a set of predefined structures and elements to be used in an AUTOSAR template model.

### 24. ARObject - Common Attributes for all Classes

ARObject
⌈
ARObject is one meta-class which is inherited by all other meta-classes.
⌋

The related pattern is shown in Figure .

see also ARObject

### 25. Packages in AUTOSAR

AUTOSAR M1 models can be organized as a number of packages, represented by class ARPackage. It allows allows to put together the model elements, e.g. in form of an OEM or project specific package containing entities like a windshield wiper software component.

The self aggregation (role arPackage) shows that packages may in fact contain other packages. Besides those, a package may contain an arbitrary number of elements, represented by the abstract class ARElement. Such an AUTOSAR element is an entity for which it makes sense to be defined in its own semantic context (stand-alone). An example for such an ARElement is the definition of a reusable software component type. On the other hand a parameter of an operation does not make sense to be defined stand-alone since its semantics is defined within and therefore highly dependent on the enclosing context: the operation.

 The purpose of a ARPackage
⌈
The purpose of ARPackage is to

* organize AUTOSAR M1 models and establish a name space for the elements in the package (as all Identifiables do)
* define the basis for relative references
⌋

For details about relative references, see chapter .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Referrable and Identifiable

The main direct abstract base classes of Identifiable are Referrable and MultilanguageReferrable.

 Main Purpose of Referrable
⌈
The abstract base class Referrable represents the ability to be the target of a reference. Such references can be simply links in a documentation or association contributing to the data model of an AUTOSAR system.
⌋

The essential attribute of Referrable is the shortName.

*  Purpose of shortName
  ⌈
  The shortName (provided by Referrable) unambiguously identifies the object within the context given by the first ancestor Identifiable.
  ⌋

The essential attribute of MultilanguageReferrable is the longName.

*  Purpose of longName
  ⌈
  longName (provided by MultilanguageReferrable) which contains the headline of the object as single line of text. The content longName is targeted to human readers. Therefore the long name can be described in different languages.
  ⌋

It is important to understand the big picture of the properties of Identifiable.

 Main Purpose of Identifiable
⌈
The abstract base class Identifiable extends the Referrable with descriptive and administrative features.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Name spaces and uniqueness of shortName

The shortName in Referrable contributes to the identification of specializations of Referrable, in particular Identifiable.

 Name Space established by Identifiable
⌈
Identifiable thereby establishes a name space in which the contained Identifiables respectively Referrables can unambiguously identified by their shortName. In some cases there are meta-classes derived from Identifiable that aggregate meta-classes that are not derived from Identifiable but they aggregate in turn a meta-class that is derived from Referrable. In other words, there are cases where Identifiables are aggregated only indirectly.

Anyhow the rules for interpreting the established name space apply in this case as well. In particular, for a given instance of Referrable, the name space is established by the nearest ancestor (not only parent) element which is an Identifiable. This expressed by the phrase "within a given Identifiable" in .
⌋

 Referrable does not establish Name Space
⌈
Note that Referrable does not establish a name space. Beyond Identifiable there is no use case where Referrable aggregates another Referrable.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Absolute ShortName-path

ShortName paths are composed of sequences of shortNames separated by '/'. The following rules apply to shortName paths used in AUTOSAR:

 Absolute shortName-path
⌈
An absolute shortName-path is created by iterating over the model elements on the containment relation from root element to the given element and

# the shortName of each element shall be prepended by a slash (thereby creating a so-called prepended shortName),
# concatenate all prepended shortNames in the given order.
⌋

An absolute path can be converted to a relative one by means of the following steps:

* remove the leading part of the absolute shortName-path that is identical to the absolute shortName-path referenced by the base attribute
* remove the leading slash from the remaining shortName-path.

 Reference to model element using an absolute shortName-path
⌈
For a reference to model element using an absolute shortName-path, the optional base attribute is not needed and shall be ignored.
⌋

### 其余 352 章（内容从略，见纯文本全文）

29. Relative ShortName-path
30. Reference Base
31. 简介
32. Reference Base Attributes
33. Hierarchical Reference Bases
34. Administrative 数据
35. Special 数据 - 建模 Extension Mechanism
36. 简介
37. Special 数据
38. Special 数据定义
39. 建模 Restriction 类型
40. Restriction of Simple Primitive Values
41. Restriction of Multiplicities
42. Restriction of use of Variation
43. Primitive 类型
44. Formula Language
45. Applying Formula Language
46. Formula Language 定义
47. Operators in arithmetic expressions
48. Operators in conditional expressions
49. Mathematical functions in arithmetic expressions
50. Implementation details of a Formula Processor
51. Resulting 数据类型 of Formula Expressions
52. 示例 for the Formula Language expressions
53. Formula Language for post-build variability
54. Motivation
55. 定义 of the Formula Language
56. Deviations from the full Formula Language
57. String Literal
58. 定义 of Variants
59. Usage of the Formula Language
60. Derivation of EcuC
61. Evaluation of the Formula Expression on the Target
62. Generation of equivalent C-Code
63. 错误处理
64. AUTOSAR 建模 Query Language (ARMQL)
65. Applying ARMQL
66. LET Block
67. Expressions
68. FOR Block
69. WHERE Block
70. ARMQL 定义
71. Grammar
72. 类型 and Values
73. LET Block
74. FOR Block
75. Alternating LET and FOR Blocks
76. WHERE Block
77. Predefined Functions and Objects
78. Type-Predicates
79. ECUC Value Access
80. 建模 Value Access
81. Non-Strict Evaluation in every parameter
82. Scoping and Visibility Rules
83. 示例 for scoping and visibility
84. Blueprint Derivation and Variable Interpolation
85. EngineeringObject
86. Annotations
87. MultidimensionalTime
88. TagWithOptionalValue
89. Imposition Time
90. 简介
91. 定义 of an imposition time
92. Application of an imposition time
93. ApplicabilityInfoSet
94. ApplicabilityInfo
95. AbstractStructure
96. Reusable Structural Hierarchies
97. Motivation
98. 类型, Prototypes and 结构 elements
99. Instance Refs
100. Any Instance Refs
101. Meta-modeling Patterns and 建模 Transformation
102. Notation for Pattern Application
103. Pattern 规范
104. 建模 Transformations applied in the Meta-Model
105. Implementing <<primitive>>s
106. Implementing Associations as References
107. Destination 类型
108. <<atpObject>>ARObject
109. Variant 处理
110. 简介
111. A Quick 概述
112. Variant 处理 and Methodology
113. How Variant 处理 is implemented in the meta-model
114. Not every element in the meta-model may be variant
115. Variation Points are optional, even for variant elements
116. A note on Binding Times
117. A note on the impact of Variant 处理 on the XML Schema
118. Patterns are independent of each other
119. A note on multiplicities in the Variant 处理 Patterns
120. A note on the application of the variant 处理 patterns
121. Aggregation Pattern for Variation Points
122. 描述
123. Binding Time
124. Multiplicity of {PartClass}
125. XML Representation
126. Notes and Restrictions
127. Association Pattern for Variation Points
128. 描述
129. Binding Time
130. Multiplicity of {ReferencedClass}RefConditional
131. XML Representation
132. Notes and Restrictions
133. Attribute Value Pattern for Variation Points
134. 描述
135. AttributeValueVariationPoint
136. {类型}ValueVariationPoint
137. Binding Time
138. Multiplicity of AttributeValueVariationPoint
139. XML Representation
140. Notes and Restrictions
141. Property Set Pattern for Variation Points
142. 示例
143. 描述
144. <<atpVariation>> Applied Directly to a Property Set Class
145. <<atpVariation>> Applied to Superclass of a Property Set Class
146. Constraints
147. Binding Time
148. Multiplicity of Attributes and aggregated elements
149. XML Representation
150. Comparison with Other Patterns
151. Combining the attribute value pattern and the property set patterns
152. VariationPoint
153. The 结构 of class VariationPoint
154. shortLabel in VariationPoint
155. sdg in VariationPoint
156. (Latest) Binding Time
157. PreBuild Variation Points
158. PostBuild Variation Points
159. 系统 Constants
160. Application of Formulas in Variation Points
161. Combining PreBuild and PostBuild Variation Points
162. Notes and Restrictions
163. Using Variation Points for Blueprinting
164. When is a variation point a Blueprint variation point?
165. BlueprintDerivationTime
166. Which AUTOSAR 建模 elements can be blueprint variation points?
167. Evaluated Variants
168. Motivation
169. 示例
170. Beyond the 示例
171. Use Cases covered in the 示例
172. 描述
173. evaluatedElement
174. approvalStatus
175. includedVariant
176. Consistency
177. XML 示例 for EvaluatedVariantSet
178. Classtables
179. Choosing Variants
180. What is a Variant?
181. Valid Variants
182. 示例
183. 示例 for Aggregation Pattern
184. 示例 for Association Pattern
185. 示例 for Attribute Value Pattern
186. 示例 for Property Set Pattern
187. Splitable Elements
188. 简介
189. Distribution in 多 Physical Files (M2 level)
190. Merging of Splitable Elements from Partial Models (M1 level)
191. Documentation 支持
192. 简介
193. Documentation Block
194. Paragraph
195. Verbatim
196. Lists in Documentation
197. Class tables for List
198. Class tables for LabeledList
199. Class tables for DefList
200. Figures in Documentation
201. Formula in Documentation
202. Notes in Documentation
203. 支持 for Traceability in Documentation
204. Mixed Content and Inline Text 建模 Element
205. Standalone Documentation
206. Documentation's Context
207. Chapter
208. Tables in Documentation
209. Topics in Documentation
210. Parameter tables
211. Document production
212. Including generated documentation parts
213. 处理多 Languages in an AUTOSAR Artifact
214. Document Views
215. The Build Action 清单
216. 简介
217. BuildActionManifest 概述
218. BuildAction
219. BuildActionIoElement
220. BuildActionEnvironment
221. BuildActionEntity
222. Usage of Special 数据
223. 示例
224. 约束与假设
225. Roles and Rights
226. Life Cycle 支持
227. 简介
228. 定义 of a life cycle
229. Application of a life cycle
230. LifeCycleInfoSet
231. LifeCycleInfo
232. Propagation of LifeCycleState
233. Collections and Collectable Elements
234. 映射 Views
235. 附录
236. 术语表
237. Reference Material
238. Imposition Times of Constraints
239. Variation Points in the 范围 of this Document
240. Splitable Elements in this 模板
241. Mentioned Class Tables
242. Change history of AUTOSAR traceable items
243. Traceable item history of this document according to AUTOSAR Release R4.0.1
244. Added Constraints
245. Traceable item history of this document according to AUTOSAR Release R4.0.2
246. Added Constraints
247. Changed Constraints
248. Traceable item history of this document according to AUTOSAR Release R4.0.3
249. Added Constraints
250. Changed Constraints
251. Traceable item history of this document according to AUTOSAR Release R4.1.1
252. Added Constraints
253. Changed Constraints
254. Deleted Constraints
255. Added 规范 Items
256. Changed 规范 Items
257. Deleted 规范 Items
258. Traceable item history of this document according to AUTOSAR Release R4.1.2
259. Added 规范 Items from 4.1.1 to 4.1.2
260. Changed 规范 Items from 4.1.1 to 4.1.2
261. Deleted 规范 Items from 4.1.1 to 4.1.2
262. Added Constraints from 4.1.1 to 4.1.2
263. Changed Constraints from 4.1.1 to 4.1.2
264. Deleted Constraints from 4.1.1 to 4.1.2
265. Traceable item history of this document according to AUTOSAR Release R4.1.3
266. Added 规范 Items in 4.1.3
267. Changed 规范 Items in 4.1.3
268. Deleted 规范 Items in 4.1.3
269. Added Constraints in 4.1.3
270. Changed Constraints in 4.1.3
271. Deleted Constraints in 4.1.3
272. Traceable item history of this document according to AUTOSAR Release R4.2.1
273. Added 规范 Items in 4.2.1
274. Changed 规范 Items in 4.2.1
275. Deleted 规范 Items in 4.2.1
276. Added Constraints in 4.2.1
277. Changed Constraints in 4.2.1
278. Deleted Constraints in 4.2.1
279. Traceable item history of this document according to AUTOSAR Release R4.2.2
280. Added 规范 Items in 4.2.2
281. Changed 规范 Items in 4.2.2
282. Deleted 规范 Items in 4.2.2
283. Added Constraints in 4.2.2
284. Changed Constraints in 4.2.2
285. Deleted Constraints in 4.2.2
286. Traceable item history of this document according to AUTOSAR Release R4.3.0
287. Added 规范 Items in 4.3.0
288. Changed 规范 Items in 4.3.0
289. Deleted 规范 Items in 4.3.0
290. Added Constraints in 4.3.0
291. Changed Constraints in 4.3.0
292. Deleted Constraints in 4.3.0
293. Traceable item history of this document according to AUTOSAR Release R4.3.1
294. Added 规范 Items in 4.3.1
295. Changed 规范 Items in 4.3.1
296. Deleted 规范 Items in 4.3.1
297. Added Constraints in 4.3.1
298. Changed Constraints in 4.3.1
299. Deleted Constraints in 4.3.1
300. Traceable item history of this document according to AUTOSAR Release R4.4.0
301. Added 规范 Items in 4.4.0
302. Changed 规范 Items in 4.4.0
303. Deleted 规范 Items in 4.4.0
304. Added Constraints in 4.4.0
305. Changed Constraints in 4.4.0
306. Deleted Constraints in 4.4.0
307. Traceable item history of this document according to AUTOSAR Release R19-11
308. Added 规范 Items in 19-11
309. Changed 规范 Items in 19-11
310. Deleted 规范 Items in 19-11
311. Added Constraints in 19-11
312. Changed Constraints in 19-11
313. Deleted Constraints in 19-11
314. Traceable item history of this document according to AUTOSAR Release R20-11
315. Added 规范 Items in R20-11
316. Changed 规范 Items in R20-11
317. Deleted 规范 Items in R20-11
318. Added Constraints in R20-11
319. Changed Constraints in R20-11
320. Deleted Constraints in R20-11
321. Traceable item history of this document according to AUTOSAR Release R21-11
322. Added 规范 Items in R21-11
323. Changed 规范 Items in R21-11
324. Deleted 规范 Items in R21-11
325. Added Constraints in R21-11
326. Changed Constraints in R21-11
327. Deleted Constraints in R21-11
328. Traceable item history of this document according to AUTOSAR Release R22-11
329. Added 规范 Items in R22-11
330. Changed 规范 Items in R22-11
331. Deleted 规范 Items in R22-11
332. Added Constraints in R22-11
333. Changed Constraints in R22-11
334. Deleted Constraints in R22-11
335. Traceable item history of this document according to AUTOSAR Release R23-11
336. Added 规范 Items in R23-11
337. Changed 规范 Items in R23-11
338. Deleted 规范 Items in R23-11
339. Added Constraints in R23-11
340. Changed Constraints in R23-11
341. Deleted Constraints in R23-11
342. Traceable item history of this document according to AUTOSAR Release R24-11
343. Added 规范 Items in R24-11
344. Changed 规范 Items in R24-11
345. Deleted 规范 Items in R24-11
346. Added Constraints in R24-11
347. Changed Constraints in R24-11
348. Deleted Constraints in R24-11
349. Traceable item history of this document according to AUTOSAR Release R25-11
350. Added 规范 Items in R25-11
351. Changed 规范 Items in R25-11
352. Deleted 规范 Items in R25-11
353. Added Constraints in R25-11
354. Changed Constraints in R25-11
355. Deleted Constraints in R25-11
356. Added Advisories in R25-11
357. Changed Advisories in R25-11
358. Deleted Advisories in R25-11
359. Traceable item history of this document according to AUTOSAR Release R26-11
360. Added 规范 Items in R26-11
361. Changed 规范 Items in R26-11
362. Deleted 规范 Items in R26-11
363. Added Constraints in R26-11
364. Changed Constraints in R26-11
365. Deleted Constraints in R26-11
366. Added Advisories in R26-11
367. Changed Advisories in R26-11
368. Deleted Advisories in R26-11
369. 示例
370. ShortLabels in VariationPoints
371. Identifiables with identical shortNames
372. Splitable in use
373. 简介示例
374. Splitkey for aggregation with 上层 multiplicity 1
375. Splitkey for Association
376. ECUC Parameter
377. Without Identity
378. Repetition of non-splitable attributes
379. Reference Base in use
380. 简介示例
