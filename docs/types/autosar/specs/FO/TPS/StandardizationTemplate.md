# Standardization Template (`StandardizationTemplate`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 535 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TPS_StandardizationTemplate_535\AUTOSAR_FO_TPS_StandardizationTemplate.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TPS_StandardizationTemplate_535\AUTOSAR_FO_TPS_StandardizationTemplate.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TPS_StandardizationTemplate_535\zzgen\FO_TPS_StandardizationTemplate.complete.txt`

## 文档简介

The document describes aspects related to published AUTOSAR documents. The types of documents and their relation; how to read them; the usage of the AUTOSAR meta-model for AUTOSAR documentation and in particular tracing in AUTOSAR documents.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

The document describes aspects related to published AUTOSAR documents. The types of documents and their relation; how to read them; the usage of the AUTOSAR meta-model for AUTOSAR documentation and in particular tracing in AUTOSAR documents.

### 2. AUTOSAR document conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Documentation 建模
*原文标题：Documentation model*

### 4. Document meta-data

The table in  lists the meta-data for any given AUTOSAR document, the Example column shows the meta-data for this document.

 AUTOSAR document meta-data
⌈
| Meta-data attribute | Mnemonic | Usage | Example |
|---|---|---|---|
| Document category (full) | doc-cat-full | Document category - full name | Template Specification |
| Document category (abbr) | doc-cat-abbr | Document category - abbreviated name | TPS |
| Document PDF name | doc-file-name | Document published .pdf file name | AUTOSAR_FO_TPS_StandardizationTemplate |
| Document identifier | doc-id | Document unique identifier | 535 |
| Document standard (full) | doc-std-full | AUTOSAR standard - full name. If unspecified, the "Part of AUTOSAR Standard" meta-data applies implicitly | Foundation |
| Document standard (abbr) | doc-std-abbr | Abbreviated form of doc-std-full. As per StandardNameEnum. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Document status

The table in  lists the visible status' of an AUTOSAR document. Further to the status on document level, the traceable items inside a document shall have their own status (see ) orthogonal to that.

 AUTOSAR document publishing status
⌈
| Document status | Availability | Note |
|---|---|---|
| published | The document is part of the AUTOSAR standard. | The traceable items may have draft, valid or obsolete status. |
| obsolete | The document is part of the AUTOSAR standard but will be removed in a future release. | A document may stay obsolete for one or more releases. It is "technically" frozen until it will be removed from AUTOSAR completely. The traceable items have obsolete status. |

⌋

### 6. Document categories

The table in  lists the different categories of documents published by AUTOSAR and their purpose.

 AUTOSAR document categories
⌈
| Document category (abbr) | Document category (full) | General purpose | Detailed purpose |
|---|---|---|---|
| Software related | < | < | < |
| RS | Requirement specification | Specification of requirements | Composed requirements intended to be decomposed into SWS/PRS requirements. |
| ASWS | Abstract software specification | Specification of platform software (abstract) | Platform independent description of SWS aspects. |
| SWS | Software specification | Specification of platform software (concrete) | Either: |

* Concretely describes the behavior, configuration and API of an AUTOSAR middleware (CP: BSW module, AP: Functional Cluster)
* Describes generic language binding aspects independent of an AUTOSAR middleware
| PRS | Protocol specification | Specification of protocol | Describes an AUTOSAR provided protocol. The protocol is typically implemented by an SWS or by a non-AUTOSAR software to inter-operate with an AUTOSAR platform. |
|---|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Document relational views

Documents are published in one of the given standard contexts. Figure  shows the placement of an AUTOSAR document category in a respective standard.

In  it is shown the high-level relation between the AUTOSAR document types.

In general the relations are:

* «implements»: a PRS, SWS implement requirements from a RS; an SWS implements specification items from a PRS
* «elaborates»: a TR, EXP further explain or further extend technical content from another specification
* «instantiates»: an (M1) MOD instantiates a (M2) TPS (model) (see )

Tracing relations between documents are elaborated in chapter .

### 8. Document list

The table in  lists the suite of documents published by AUTOSAR.

| Document standard (abbr) | Document category (abbr) | Document title | Document name (full) | Document name (abbr) |
|---|---|---|---|---|
| AP | EXP | Design guidelines for using parallel processing technologies on Adaptive Platform | ParallelProcessingGuidelines |  |
| AP | EXP | Explanation of ARA Applications in Rust | ARARustApplications |  |
| AP | EXP | Explanation of Adaptive Platform Design | PlatformDesign |  |
| AP | EXP | Explanation of Adaptive Platform Software Architecture | SWArchitecture |  |
| AP | EXP | Explanation of Automotive API | AutomotiveAPI |  |
| AP | EXP | Explanation of IPsec Implementation Guidelines | IPsecImplementationGuidelines |  |
| AP | EXP | Explanation of Identity and Access Management | IdentityAndAccessManagement |  |
| AP | EXP | Explanation of MACsec and MKA Protocols implementation and configuration guidelines | MACsec |  |
| AP | EXP | Explanation of Safe API for hardware accelerators | SafeHardwareAccelerationAPI |  |
| AP | EXP | Explanation of Sensor Interfaces | SensorInterfaces |  |
| AP | EXP | Explanation of Service-Oriented Vehicle Diagnostics | SOVD |  |
| AP | EXP | Explanation of ara::com API | ARAComAPI |  |
| AP | EXP | Guidelines for using Ad |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Standardized naming of published files

Standardized naming convention for published AUTOSAR files
⌈
Files publicly released by AUTOSAR shall have the naming convention: AUTOSAR_{doc-std-abbr}_{doc-cat-abbr}_{doc-name-full}
⌋

### 10. Standardized ARPackage.shortNames

Selected M1 ARXML models published by AUTOSAR use well-known ARPackage.shortNames. As stated in  and , the top-level (level-0) ARPackage=AUTOSAR is fixed, i.e. '/AUTOSAR'.

Further, directly under the top-level ARPackage, the next level ARPackage (level-1) has also reserved a subset of ARPackage.shortNames for specific usages. These are listed in .

Examples using the "Absolute shortName-path" notation from () would be:

* '/AUTOSAR/GenDef'
* '/AUTOSAR/Documents'

 AUTOSAR reserved level-1 ARPackage.shortNames
⌈
| Level-1 shortName | Purpose | Usage |
|---|---|---|
| Documents | Top-level namespace of all AUTOSAR documents | - |
| AISpecification | Model defining AUTOSAR application interfaces from varying CP_EXP_AI... |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Traceable items

AUTOSAR documents utilize an editorial notation called a traceable item or traceables which emphasize certain specification texts with a identified degree of importance to the user and which shall be change-tracked over each AUTOSAR release.

Each traceable item must have a unique identifier: e.g. `TPS_STDT_xxxxx` and a subset of conditional meta-data fields and contains a body of specification text between a \lceil and \rfloor.

### 12. Meta-data fields

AUTOSAR traceable item meta-data fields and their usage rules
⌈
| "Use instead" | "Replaces" | "Previous identifiers" | "Imposition time" | "Status" | "Upstream requirements" |
|---|---|---|---|---|---|
| Purpose | # The "Use instead" field lists 1 or more forwarding traceable items which supersede this traceable item |  |  |  |  |
| # It enables users to better track the new IDs, if this traceable item has been assigned a new ID over successive releases | # The "Replaces" field lists 1 or more traceable items that this traceable item supersedes |  |  |  |  |

# It enables users to better track the previous IDs, if this traceable item has had a different ID in past releases
| # It lists only the immediate predecessors to this ID (as opposed to "Previous identifiers" which lists all) | # The "Previous identifiers" field lists 1 or more traceable item IDs that this traceable item has previously had |
|---|---|

# It enables users to better track the previous IDs, if this traceable item has been assigned a new ID over successive releases
| # It lists the entire rename history of this ID | # The "Imposition time" is the workflow stage when a CONSTRAINT_ITEM/ADVISORY_ITEM shall be imposed/actioned by a tool |
|---|---|

# They are pre-defined by AUTOSAR in  and generally exp

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Item categories

### 14. 规范 Item
*原文标题：Specification Item*

Representation of specification items in AUTOSAR documents
⌈
AUTOSAR specification items are represented using the structure with the following attributes:

* The headline consists of an Id (shortName) which shall be written inside squared brackets and shall follow .
* After the Id the LifeCycleState follows in curly brackets. The allowed values are VALID, DRAFT and OBSOLETE and shall follow . If there is no LifeCycleState information stated then the state is VALID.
* After the LifeCycleState an optional specification item title (longName) should be stated to improve human readability.
* The next line starts with an opening half bracket and the content of the specification item follows. The end of it shall be marked by the closing half bracket.
* After the closing half bracket an opening round bracket indicates the comma separated list of requirements which are fulfilled by this specification item. The end of it shall be marked by the closing round bracket. If no up traces are available the round brackets shall be written with empty content.
* The specification items shall describe the semantics and syntax of models.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 建模 Constraint
*原文标题：Model Constraint*

Representation of constraint items in AUTOSAR template documents
⌈
AUTOSAR constraint items in template documents are represented using the structure with the following attributes:

* The constraint Identifier shortName is comprised of:

  * a string prefix: "constr_"
  * a numerical suffix: 4-5 digits long
  * the leading digit of the numerical suffix shall be \geq 1

  On documentation level, this shall be rendered inside [] brackets. The numerical suffix is globally unique.
* After the Id the LifeCycleState follows in curly brackets. The allowed values are VALID, DRAFT and OBSOLETE and shall follow . If there is no LifeCycleState information stated then the state is VALID.
* After the LifeCycleState the constraint title (longName) follows.
* The constraint content shall be written inside the opening and closing half bracket.
* The constraint items shall further restrict the validity of models.
* An optional constraint ImpositionTime ()
⌋

### 16. 软件 Constraint
*原文标题：Software Constraint*

Representation of constraint items in AUTOSAR non template documents
⌈
AUTOSAR constraint items in AUTOSAR non template documents are represented using the structure with the following attributes:

* The headline consists of an Id (shortName) which shall be written inside squared brackets and shall follow .
* After the Id the LifeCycleState follows in curly brackets. The allowed values are VALID, DRAFT and OBSOLETE and shall follow . If there is no LifeCycleState information stated then the state is VALID.
* After the LifeCycleState the constraint title (longName) follows.
* The constraint content shall be written inside the opening and closing half bracket.
* This Id is independent of a non-specialized Id, i.e. `SWS_XXX_12345` != `SWS_XXX_CONSTR_12345`
⌋

In a constraint according to , the term "shall" shall be used inside the content to underline the mandatory intention of the item.

 `SPECIFICATION_ITEMs` with constraint semantics
⌈
`SPECIFICATION_ITEMs` which express a constraint semantic may use the infix special="CONSTR" (see ). This infix is permitted only in an ASWS or SWS, in other document types this is forbidden
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 建模 Advisory
*原文标题：Model Advisory*

Representation of advisory items in AUTOSAR template documents
⌈
AUTOSAR advisory items in template documents are represented with the following format:

* The advisory Identifier shortName is comprised of:

  * a string prefix: "advisory_"
  * a numerical suffix: 5 digits long

  On documentation level, this shall be rendered inside [] brackets. The numerical suffix is globally unique.
* After the Identifier the LifeCycleState follows in curly brackets. The allowed values are VALID, DRAFT and OBSOLETE and shall follow . If there is no LifeCycleState information stated then the state is VALID.
* After the LifeCycleState the advisory title longName follows.
* The advisory content shall be written inside the opening (ceil) and closing (floor) symbols.
⌋

In an advisory item according to , the term "should" shall be used inside the content to underline the advisory intention of the item.

### 18. Imposition Time of a 建模 Constraint/建模 Advisory
*原文标题：Imposition Time of a Model Constraint/Model Advisory*

The timing of when precisely an AUTOSAR tool should enforce a model constraint/advisory is in some cases clear and in other cases conditional. For that reason AUTOSAR constraints/advisories may contain an additional ImpositionTime attribute to stipulate the latest point in time in a workflow when the constraint/advisory shall be applied. Since AUTOSAR defines separate methodology workflows for the Classic Platform and Adaptive Platform, the respective ImpositionTimes are in general also platform dependent.

 Semantics of an ImpositionTime
  Status: DRAFT
⌈
An AUTOSAR model constraint/advisory contains an ImpositionTime, which specifies the latest point in the methodology workflow when the respective constraint/advisory shall be imposed on a model.
⌋

 Application of an ImpositionTime
  Status: DRAFT
⌈
A constraint/advisory may be enforced before the ImpositionTime but shall be enforced no later than the respective point in the workflow.
⌋

 Semantics of an unspecified ImpositionTime
  Status: DRAFT
⌈
An AUTOSAR model constraint/advisory with no ImpositionTime, implies "at an arbitrary point in the workflow".
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Requirement

Representation of requirements in AUTOSAR documents
⌈
AUTOSAR requirements are represented using the structure of  where the following attributes are presented as a table:

* The headline shall contain the Id (shortName), the LifeCycleState and a unique short text (longName) of the requirement.
* The LifeCycleState shall be one of "valid" or "obsolete", see .
* The description of requirement contains of a complete English sentence using the sentence pattern  including one of the keywords from . Additional information: needed to understand the requirement, can be added to the description.
* The rationale can be used to justify or rationalize the requirement.
* Use case can be used to describe the use case of the requirement.
* Applies to shall contain a comma separated tag list with one of the following values from StandardNameEnum.
* Dependencies may contain references to other requirements in this document which this requirement depends on.
* Supporting material can be used for documenting references to other documents or models that support the implementation of this requirement.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Phrasing convention

In case no data is available for a dedicated field in a requirement table, it may be empty. The description of a requirement follows a dedicated sentence pattern.

<Optional Condition> -> <Subject> -> <Shall> -> <Statement>

 Sentence pattern
⌈
The sentence pattern is built up by:

* <Optional Condition>: A condition under which the <Statement> shall be true. The condition starts with either if or when and ends with then. Where when identifies an event. I.e. the point in time when the condition becomes true. In natural language you could use "as soon as" to express the same. If in contrast identifies a static condition which is independent from time. For static conditions you may add else (optionally) after the <Statement> to express an alternative requirement by appending it as an additional sentence following the pattern.
* <Subject>: The item that is to fulfill the <Statement>. Remark: The subject typically represents your subject under development, a property or a part of it. It is highly recommended to maintain an overview of the subjects you are specifying in the introductory section of your specification document.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Applicability of 需求
*原文标题：Applicability of Requirements*

AUTOSAR Requirements may be written such that they may, or may not, be implementable in a single platform or cross-platform.

* If the placement of a Requirement is in AUTOSAR platform=CP or platform=AP the scope is "known" to be restricted to the respective platform
* If the placement of a Requirement is in AUTOSAR platform=FO, it is ambiguous which platform it is applicable to. It must therefore be decorated with the appliesTo attribute to explicitly state the platform scope of the Requirement

### 22. Meta-classes supporting Traceable Items

Support bottom up tracing
⌈
Standardization Template supports bottom up tracing between these levels by the meta-class Traceable. This allows to represent traceable entities and to establish traces between those. These entities reside within a DocumentationBlock. One prominent place is DocumentationBlock.trace in particular within Identifiable.introduction.
⌋

The abstract class Traceable is specialized, targeting differing usages in the next sections.

 Traceable shall not be nested
⌈
Due to the intended atomicity of requirements respectively specification items, Traceable shall not be nested.
⌋

### 23. StructuredReq

StructuredReq
⌈
This represents a structured requirement as it is used within AUTOSAR RS documents.
⌋

### 24. TraceableText/TraceableTable

Standardized categorys of TraceableText and TraceableTable
⌈
* `CONSTRAINT_ITEM`: represents a Traceable with constraint semantics. It is similar to a specification item but represents issues that may be validated automatically e.g. by a tool.
* `ADVISORY_ITEM`: represents a Traceable with advisory semantics. It is similar to a constraint item but represents the characteristic of a WARNING rather than an ERROR.
* `REQUIREMENT_ITEM`: represents a requirement in a requirement specification.
* `SPECIFICATION_ITEM`: represents an AUTOSAR item of specification. Such an item is a requirement for the implementation of the software specification.
⌋

 Characteristics of TraceableText
⌈
TraceableText should could also have been divided in one TraceableText per item.] be:

* identifiable: TraceableText shall be identified by a unique shortName (see ). This is automatically fulfilled by applying the AUTOSAR meta-model and schema.
* specific: TraceableText should be written such that the content is unambiguous and comprehensive - even if this would not result in an elegant writing style.
* atomic: One TraceableText should cover one particular issue.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 追踪 levels
*原文标题：Tracing levels*

AUTOSAR permits that `SPECIFICATION_ITEMs` may trace upwards to a Requirement as shown in . Identifiers of traceable items are explained in .

Notes:

* TPS documents: up-tracing is not permitted
* TR and EXP documents: up-tracing is optional

### 26. 追踪 groups
*原文标题：Tracing groups*

AUTOSAR supports the logical assignment of Requirements into groups, either on the level of:

* a singular StructuredReq
* all StructuredReqs in a document chapter

to one or more Trace Groups (TGs).

 Standardized naming convention for trace groups
⌈
Trace groups shall follow the naming convention: TG_<rs-abbr>_<name> where:

* <rs-abbr> = is an abbrName from
* <name> = used to further sub-divide the trace group, e.g. if the trace group targets a specific SWS it can be derived from <rs-abbr>, with the following caveats:

  * <name>="Functional" is forbidden
  * <name>="NonFunctional" needs no further refinement (no traces from SWS/PRS/ASWS to such requirements)
⌋

Examples:

* `TG_AP_NonFunctional`: Trace group of "non-functional" requirements in . Note: In this instance the "AP" part of the name corresponds to the <rs-abbr> of )
* `TG_BSW`: Trace group of all requirements in
* `TG_BSW_NonFunctional`: Trace group of all non-functional requirements in

### 27. Life Cycle of AUTOSAR 定义
*原文标题：Life Cycle of AUTOSAR definitions*

In order to support evolution and backward compatibility of the standardized model elements like port prototype blueprints, port interfaces, keyword abbreviations, SW-Cs (in ASW) or of the API of a BSW module etc., AUTOSAR supports life cycles. The meta-model and the details of the application of this meta-model is specified in chapter "Life Cycle Support" of .

 Life Cycle Support
⌈
The Standardization template is able to express information about the state of the blueprints by references from within a LifeCycleInfoSet.
⌋

 Applied Life Cycle Information Sets on AUTOSAR provided Models (M1)
⌈
The following LifeCycleStates are applied for AUTOSAR provided model elements:

* VALID: This indicates that the related entity is a valid part of the document. This is the default.
* DRAFT: This indicates that the related entity is introduced newly in the model but still experimental. This information is published but is subject to be changed without backward compatibility management.
* OBSOLETE: This indicates that the related entity is obsolete and kept in the model for compatibility reasons. If this tag is set, the note shall express the recommended alternative solution.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Life Cycle 状态 vs 追踪 Levels
*原文标题：Life Cycle State vs Tracing Levels*

Permitted LifeCycleState combinations in a requirement uptrace
⌈
| Trace to: TraceableText.category=REQUIREMENT_ITEM | < | < | < |  |
|---|---|---|---|---|
| Trace from: | DRAFT | VALID | OBSOLETE | REMOVED |
| DRAFT | 1 | 1 |  |  |
| VALID | x | 1 |  |  |
| OBSOLETE | 1 | 1 | 1 |  |
| REMOVED | 1 | 1 | 1 | 1 |
| Legend: | < | < | < | < |
| x) A "not applicable" requirement - as per  with LifeCycleState==VALID may uptrace to LifeCycleState==DRAFT 1) Permitted | < | < | < | < |

⌋

### 29. Blueprints

### 30. The Principles of Blueprints

The Principles of Blueprints
⌈
This chapter describes the support of the AUTOSAR meta-model for the pre-definition of model elements taken as the basis for further modeling. These pre-definitions are called blueprints.
⌋

For example, an authoring tool provides the such predefined PortInterface as a kind of toolbox from which the definitions can be copied to a project.

Figure  illustrates the use case. The blueprint is on one hand used as an input to derive objects (DeriveFromBlueprint) and later also used to validate the derived objects. As an example the figure shows that the application interfaces are used to derive VFB interfaces (namely PortInterfaces).

### 31. 抽象 pattern for Blueprints
*原文标题：Abstract pattern for Blueprints*

The blueprint approach is represented by the abstract blueprint structure as shown in figure . It is based on three entities:

* Blueprint, represented by AtpBlueprint, acts as the pre-definition of the element. Basically it follows the same structure as the derived elements.

  But there might be additional elements to support the fact that it is a blueprint. An example for this is that PortPrototypeBlueprint also specifies initValues which is not the case for PortPrototype which get their initial values from appropriate ComSpecs.
* Blueprinted Element, represented by AtpBlueprintable, acts as the element which was derived from the Blueprint. These elements are derived from blueprints mainly by copy and refine. This "refine" may add further attribute values, update shortName etc. The details of possible refinements are specified for each blueprint individually.

  Note that the subsequent processing of blueprinted elements (e.g. RTE generation) does not refer to the blueprints anymore.
* Blueprint Mapping, represented by AtpBlueprintMapping, acts as a reference between blueprints and their derived elements. The main purpose of this blueprint mapping is to

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 映射 of Blueprints to blueprinted Elements
*原文标题：Mapping of Blueprints to blueprinted Elements*

In many cases it will be necessary to identify the relationship of a blueprinted element (e.g. PortPrototype) to the corresponding blueprint (e.g. PortPrototypeBlueprint) after the blueprinted element has been created according to the blueprint.

For this purpose it would theoretically be possible to establish a reference from AtpBlueprintable to AtpBlueprint that identifies the pair of related model artifacts. However, this kind of information is relevant only in a narrow scope and does - as mentioned before - not impact the downstream model handling.

Therefore, a AtpBlueprintMapping is introduced which refers to both AtpBlueprintable and AtpBlueprint (see figure ). The AtpBlueprintMapping is in turn aggregated at a container for the creation of blueprint mappings, the BlueprintMappingSet.

In previous AUTOSAR Releases a specialization of AtpBlueprintMapping was created for each particular meta class eligible for blueprinting. This has been replaced by one particular specialization (BlueprintMapping).

 Blueprintmapping shall map appropriate elements
⌈
BlueprintMapping shall map elements which represent a valid pair of blueprint / derived object.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 通用 Rules for Compliance of blueprint and blueprinted element
*原文标题：General Rules for Compliance of blueprint and blueprinted element*

Compliance with Blueprints
⌈
Constraints  and  apply in general for the compliance of blueprints with the derived objects.
⌋

 Derived objects shall match the blueprints
⌈
Unless specified explicitly otherwise, the attributes of the blueprint shall appear in the derived objects. As an exception namePattern and blueprintValue may not be copied.
⌋

 Derived objects may have more attributes than the blueprints
⌈
Unless specified explicitly otherwise, derived objects may have more attributes than the blueprints. Such attributes can be

* additional values if the upper multiplicity of the attribute in the meta-model is greater than 1
* those specified by the related templates but not specified in the blueprint
⌋

 Compatibility of longName, desc and introduction of blueprint and blueprinted element
⌈
Elements derived from blueprints are allowed to:

* change longName
* change desc
* change introduction
⌋

Note that  includes the ability to add text in a further language.

Note that introduction should not be used to describe the derivation of objects from the blueprint. See  for details.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Applicable name patterns to define attributes when deriving objects from blueprints

Applying namePattern
⌈
When deriving an element from a blueprint it is often the case that a particular pattern shall be used to determine the shortName respectively the symbol of the object. This use case is supported by the attribute namePattern in Identifier respectively CIdentifier.
⌋

| Primitive | Identifier | < | < | < |
|---|---|---|---|---|
| Note | An Identifier is a string with a number of constraints on its appearance, satisfying the requirements typical programming languages define for their Identifiers. |  |  |  |

This datatype represents a string, that can be used as a c-Identifier.

It shall start with a letter, may consist of letters, digits and underscores.

| Tags: xml.xsd.customType=IDENTIFIER xml.xsd.maxLength=128 xml.xsd.pattern=* xml.xsd.type=string | < | < | < |  |
|---|---|---|---|---|
| Attribute | Type | Mult. | Kind | Note |
| blueprintValue | String | 0..1 | attr | This represents a description that documents how the value shall be defined when deriving objects from the blueprint. |

Tags: atp.Status=draft xml.attribute=true
| namePattern | String | 0..1 | attr | This attribute represents a pattern which shall be used to define the value of the identifier if the identifier in question is part of a blueprint. |
|---|---|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 117 章（内容从略，见纯文本全文）

35. Blueprint Formula
36. Ecu 配置 Parameters and Blueprints
37. Blueprints defined in AUTOSAR Meta 建模
38. Blueprinting AccessControl
39. Blueprinting AliasNameSet
40. Blueprinting ApplicationDataType
41. Blueprinting ARPackage
42. Blueprinting BswModuleDescription
43. Blueprinting BswModuleEntry
44. Blueprinting BswEntryRelationshipSet
45. Blueprinting BuildActionManifest
46. Blueprinting CompuMethod
47. Blueprinting ConsistencyNeeds
48. Blueprinting DataConstr
49. Blueprinting DataTypeMappingSet
50. Blueprinting EcucDefinitionCollection
51. Blueprinting EcucModuleDef
52. Blueprinting FlatMap
53. Blueprinting ImplementationDataType
54. Blueprinting KeywordSet
55. Blueprinting LifeCycleStateDefinitionGroups and LifeCycleStates
56. Blueprinting ModeDeclarationGroup
57. Blueprinting PortPrototype
58. Blueprinting PortInterface
59. Blueprinting PortInterfaceMapping and PortInterfaceMappingSet
60. Blueprinting SwBaseType
61. Blueprinting SwComponentType
62. Blueprinting SwAddrMethods
63. Blueprinting VfbTiming
64. 示例
65. Blueprinting ClientServerInterfaceToBswModuleEntryBlueprintMapping
66. Deriving from AUTOSAR-provided Blueprints
67. Keywords
68. 附录
69. 示例
70. 示例 Blueprints
71. Blueprints of PortInterfaceMapping
72. Blueprints of VfbTiming
73. 示例 Keyword ARXMLs
74. 示例 ARXML for Keywords
75. 示例 ARXML for Stem Relation of Keywords
76. 示例 for BlueprintPolicyNotModifiable
77. 示例 for BlueprintPolicyList
78. 示例 for BlueprintPolicySingle
79. Mentioned Class Tables
80. Variation Points in this 模板
81. Change History
82. Change History of this document according to AUTOSAR release R4.3.1
83. Added 规范 Items in 4.3.1
84. Changed 规范 Items in 4.3.1
85. Deleted 规范 Items in 4.3.1
86. Added Constraints in 4.3.1
87. Changed Constraints in 4.3.1
88. Deleted Constraints in 4.3.1
89. Change History of this document according to AUTOSAR release R4.4.0
90. Added 规范 Items in 4.4.0
91. Changed 规范 Items in 4.4.0
92. Deleted 规范 Items in 4.4.0
93. Added Constraints in 4.4.0
94. Changed Constraints in 4.4.0
95. Deleted Constraints in 4.4.0
96. Change History of this document according to AUTOSAR release R19-11
97. Added 规范 Items in 19-11
98. Changed 规范 Items in 19-11
99. Deleted 规范 Items in 19-11
100. Added Constraints in 19-11
101. Changed Constraints in 19-11
102. Deleted Constraints in 19-11
103. Change History of this document according to AUTOSAR release R20-11
104. Added 规范 Items in R20-11
105. Changed 规范 Items in R20-11
106. Deleted 规范 Items in R20-11
107. Added Constraints in R20-11
108. Changed Constraints in R20-11
109. Deleted Constraints in R20-11
110. Change History of this document according to AUTOSAR release R21-11
111. Added 规范 Items in R21-11
112. Changed 规范 Items in R21-11
113. Deleted 规范 Items in R21-11
114. Added Constraints in R21-11
115. Changed Constraints in R21-11
116. Deleted Constraints in R21-11
117. Change History of this document according to AUTOSAR release R22-11
118. Added 规范 Items in R22-11
119. Changed 规范 Items in R22-11
120. Deleted 规范 Items in R22-11
121. Added Constraints in R22-11
122. Changed Constraints in R22-11
123. Deleted Constraints in R22-11
124. Change History of this document according to AUTOSAR release R23-11
125. Added 规范 Items in R23-11
126. Changed 规范 Items in R23-11
127. Deleted 规范 Items in R23-11
128. Added Constraints in R23-11
129. Changed Constraints in R23-11
130. Deleted Constraints in R23-11
131. Change History of this document according to AUTOSAR release R24-11
132. Added 规范 Items in R24-11
133. Changed 规范 Items in R24-11
134. Deleted 规范 Items in R24-11
135. Added Constraints in R24-11
136. Changed Constraints in R24-11
137. Deleted Constraints in R24-11
138. Change History of this document according to AUTOSAR release R25-11
139. Added 规范 Items in R25-11
140. Changed 规范 Items in R25-11
141. Deleted 规范 Items in R25-11
142. Added Constraints in R25-11
143. Changed Constraints in R25-11
144. Deleted Constraints in R25-11
145. Change History of this document according to AUTOSAR release R26-11
146. Added 规范 Items in R26-11
147. Changed 规范 Items in R26-11
148. Deleted 规范 Items in R26-11
149. Added Constraints in R26-11
150. Changed Constraints in R26-11
151. Deleted Constraints in R26-11
