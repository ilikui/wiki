# ARXML Serialization Rules (`ARXMLSerializationRules`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 779 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TPS_ARXMLSerializationRules_779\AUTOSAR_FO_TPS_ARXMLSerializationRules.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TPS_ARXMLSerializationRules_779\AUTOSAR_FO_TPS_ARXMLSerializationRules.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TPS_ARXMLSerializationRules_779\zzgen\FO_TPS_ARXMLSerializationRules.complete.txt`

## 文档简介

This document specifies rules on how AUTOSAR models are serialized into AUTOSAR XML descriptions. The intention of this specification is to support the interoperability between AUTOSAR tools by specifying additional constraints on the AUTOSAR XML descriptions that go beyond the definition of the XML structure that is defined by the AUTOSAR XML schema. Benefits include:

* Comparison of AUTOSAR XML descriptions is simplified by defining a normalized representation that avoids meaningless differences such as indention, character encoding.
* Effort for tool implementation is reduced by restricting the amount of different flavors of XML. E.g. different namespace prefixes, character encoding, files names, etc.

AUTOSAR template specifications define the AUTOSAR Data Exchange Format. Figure  shows the relationship between the AUTOSAR ARXML Serialization Rules (this specification) and other template specifications:

* The AUTOSAR XML Schema Production Rules  and this document focus on the physical representation and the XML data format.
* The Software Component Template , System Template , ECU Configuration Template , etc. address the data structure and its semantics.

AUTOSAR formalizes and maintains the data structure and semantics of the AUTOSAR Data Exchange Format in the AUTOSAR Meta Model . The mapping between that meta model and the AUTOSAR XML Schema  is described in AUTOSAR XML Schema Production Rules  (see figure ).

An AUTOSAR Tool that produces an AUTOSAR XML Description has to serialize the AUTOSAR model in a way that it validates successfully against the AUTOSAR XML Schema. Additional constraints that go beyond XML Schema validation are described in this document.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document specifies rules on how AUTOSAR models are serialized into AUTOSAR XML descriptions. The intention of this specification is to support the interoperability between AUTOSAR tools by specifying additional constraints on the AUTOSAR XML descriptions that go beyond the definition of the XML structure that is defined by the AUTOSAR XML schema. Benefits include:

* Comparison of AUTOSAR XML descriptions is simplified by defining a normalized representation that avoids meaningless differences such as indention, character encoding.
* Effort for tool implementation is reduced by restricting the amount of different flavors of XML. E.g. different namespace prefixes, character encoding, files names, etc.

AUTOSAR template specifications define the AUTOSAR Data Exchange Format. Figure  shows the relationship between the AUTOSAR ARXML Serialization Rules (this specification) and other template specifications:

* The AUTOSAR XML Schema Production Rules  and this document focus on the physical representation and the XML data format.
* The Software Component Template , System Template , ECU Configuration Template , etc. address the data structure and its semantics.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. ARXML Serialization Rules

### 4. Physical Level

### 5. 文件 separation
*原文标题：File separation*

File separation
⌈
An AUTOSAR model may be shipped in several AUTOSAR XML description files.
⌋

### 6. 文件 names
*原文标题：File names*

File Name Extension: .arxml
⌈
AUTOSAR XML descriptions shall use the file extension ".arxml" (short for AUTOSAR XML).
⌋

 File Name Length
⌈
The maximum length of the filename is restricted to 255 characters.
⌋

### 7. 数据 Format
*原文标题：Data Format*

In order to support a direct comparison of AUTOSAR XML descriptions with a text comparison tool it is essential that the XML is generated in a reliable and standardized manner.

### 8. XML Character Encoding

UTF-8 Character Encoding
⌈
The character encoding of AUTOSAR XML descriptions shall be UTF-8. No other encodings are allowed.
⌋

 UTF-8 Encoding in XML Declaration
⌈
AUTOSAR XML descriptions shall start with an XML declaration that declares UTF-8 encoding.
⌋

 Avoid UTF BOM
⌈
AUTOSAR XML descriptions should NOT start with a "UTF Byte Order Mask" (BOM).
⌋

The byte order mask is a Unicode character that can be used at the start of a text stream in order to communicate information about:

* The fact that the stream is encoded in Unicode
* Which Unicode encoding is used (UTF-8, UTF-16, ...)
* The endianness of the Unicode encoding

According to  and  the character encoding of AUTOSAR XML descriptions shall be UTF-8 and this information shall be explicitly described in the XML declaration.

UTF-8 is agnostic of the endianness. Thus, using a BOM does not add additional information.

### 9. XML Version

XML Version 1.0
⌈
AUTOSAR XML descriptions shall conform to XML version 1.0 . No other XML version is allowed.
⌋

 XML Version 1.0 in XML Declaration
⌈
AUTOSAR XML descriptions shall start with an XML declaration that declares XML version 1.0 .
⌋

### 10. XML Comments and Processing Instructions

XML Comments
⌈
AUTOSAR XML descriptions may contain XML comments.
⌋

Note: XML comments do not contribute to the actual AUTOSAR model. AUTOSAR tools may silently ignore XML comments and do not need to serialize them again.

 XML Processing Instructions
⌈
An AUTOSAR XML description may contain XML processing instructions. and ]
⌋

Note: AUTOSAR tools may silently ignore XML Processing instructions and do not need to serialize them again.

### 11. XML Root Element

Traditionally, AUTOSAR has implemented a three-element version scheme consisting of major, minor, and patch version. Versions specified this way have been used in ARXML files as part of the definition of the xsi:schemaLocation, for example:

xsi:schemaLocation="http://autosar.org/schema/r4.0 AUTOSAR_4-3-0.xsd"

With the advent of the AUTOSAR adaptive platform, AUTOSAR decided to implement a different versioning scheme for the releases of the adaptive platform (the classic platform would just keep the existing approach to versioning).

This new version scheme for the adaptive platform consists of just two elements, the year and month of release.

The original approach was to simply use the two-element scheme of the adaptive releases also for the definition of the xsi:schemaLocation for ARXML files containing models for the adaptive platform.

xsi:schemaLocation="http://autosar.org/schema/r4.0 `AUTOSAR_2017`-03.xsd"

Over time, this approach would have created a hard-to-disentangle history of three-element and two-element values for xsi:schemaLocation and it would have been hard to guess which releases of the AUTOSAR XML Schema were actually backwards-compatible to a given ARXML file.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. XML Formatting / Indention

The formatting and indention that is specified in this section does not change the semantics of the AUTOSAR model.

The main purpose is the reduction of meaningless differences when comparing two AUTOSAR XML descriptions using textual diff tools. The XML description should be formatted as shown in .

 Formating of AUTOSAR XML Descriptions
⌈
| Applied to | Strategy | Description |
|---|---|---|
| default approach | NewLine: Element is a block of its own | NewLine means in particular: |

* indentation should be 2 characters per level
* the start tag of the element should be on a new line
* the XML attributes should be sorted alphabetically. If more than one XML attribute, each one should be on its own line
* the start should be indented according to the nesting level of XML tag
* the end tag should be on a new line and indented like the start tag
* the content should be indented one step more than the start tag
| Primitives (either modeled as UML-attribute or as aggregation of a primitive) | OneLine Element is displayed in one line | The element should start on a new line. The end tag should be in the same line as the start tag and the content of the element. |
|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 附录
*原文标题：Appendix*

### 14. Reference Material

The content of this appendix chapter is informative in nature and shall not be considered as normative content.

This chapter contains some relevant reference material for this specification.

### 15. Abbreviations

The following table contains a list of abbreviations used in the scope of this document along with the spelled-out meaning of each of the abbreviations.

| Abbreviation | Meaning |
|---|---|
| BOM | Byte Order Mark |
| UTF | Unicode Transformation Format |
| W3C | World Wide Web Consortium |
| XML | Extensible Markup Language |

### 16. Change history of AUTOSAR traceable items

The content of this appendix chapter is informative in nature and shall not be considered as normative content.

### 17. Traceable item history of this document according to AUTOSAR Release R4.3.0

### 18. Added 规范 Items
*原文标题：Added Specification Items*

| ID | Heading | Origin in R4.2.2 |
|---|---|---|
| File separation | Extends:  AUTOSAR tool SHALL support sets of files |  |
| File Name Extension: .arxml | Subset of:  Authoring tool SHALL support well defined serialization (incl. explanatory text) |  |
| File Name Length | Subset of: |  |
| UTF-8 Character Encoding | Replaces:  UTF-8 Character Encoding |  |
| UTF-8 Encoding in XML Declaration | Replaces:  UTF-8 Encoding in XML Declaration |  |
| Avoid UTF BOM | Replaces:  Avoid UTF BOM |  |
| XML version 1.0 | Subset of:  AUTOSAR tool SHALL support AUTOSAR XML descriptions |  |
| XML version 1.0 in XML Declaration | Subset of:  AUTOSAR tool SHALL support AUTOSAR XML descriptions |  |
| XML Comments | Subset of:  Authoring tool SHALL support well defined serialization (incl. explanatory text) |  |
| XML Processing Instructions | Subset of:  Authoring tool SHALL support well defined serialization (incl. explanatory text) |  |
| AUTOSAR XML Namespace | Supplements:  XML schema version, Subset of:  AUTOSAR namespace declaration |  |
| AUTOSAR Revision Declaration | Subset of:  Authoring tool SHALL support well defined serialization (incl. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Changed 规范 Items
*原文标题：Changed Specification Items*

none

### 20. Deleted 规范 Items
*原文标题：Deleted Specification Items*

none

### 21. Traceable item history of this document according to AUTOSAR Release R4.3.1

### 22. Added 规范 Items in R4.3.1
*原文标题：Added Specification Items in R4.3.1*

none

### 23. Changed 规范 Items in R4.3.1
*原文标题：Changed Specification Items in R4.3.1*

none

### 24. Deleted 规范 Items in R4.3.1
*原文标题：Deleted Specification Items in R4.3.1*

none

### 25. Added Constraints in R4.3.1

none

### 26. Changed Constraints in R4.3.1

none

### 27. Deleted Constraints in R4.3.1

none

### 28. Traceable item history of this document according to AUTOSAR Release R4.4.0

### 29. Added 规范 Items in R4.4.0
*原文标题：Added Specification Items in R4.4.0*

none

### 30. Changed 规范 Items in R4.4.0
*原文标题：Changed Specification Items in R4.4.0*

none

### 31. Deleted 规范 Items in R4.4.0
*原文标题：Deleted Specification Items in R4.4.0*

none

### 32. Added Constraints in R4.4.0

none

### 33. Changed Constraints in R4.4.0

none

### 34. Deleted Constraints in R4.4.0

none

### 35. Traceable item history of this document according to AUTOSAR Release R19-11

### 36. Added 规范 Items in R19-11
*原文标题：Added Specification Items in R19-11*

none

### 37. Changed 规范 Items in R19-11
*原文标题：Changed Specification Items in R19-11*

none

### 38. Deleted 规范 Items in R19-11
*原文标题：Deleted Specification Items in R19-11*

none

### 39. Added Constraints in R19-11

none

### 40. Changed Constraints in R19-11

none

### 41. Deleted Constraints in R19-11

none

### 42. Traceable item history of this document according to AUTOSAR Release R20-11

### 43. Added 规范 Items in R20-11
*原文标题：Added Specification Items in R20-11*

none

### 44. Changed 规范 Items in R20-11
*原文标题：Changed Specification Items in R20-11*

none

### 45. Deleted 规范 Items in R20-11
*原文标题：Deleted Specification Items in R20-11*

none

### 46. Added Constraints in R20-11

none

### 47. Changed Constraints in R20-11

none

### 48. Deleted Constraints in R20-11

none

### 49. Traceable item history of this document according to AUTOSAR Release R21-11

### 50. Added 规范 Items in R21-11
*原文标题：Added Specification Items in R21-11*

none

### 51. Changed 规范 Items in R21-11
*原文标题：Changed Specification Items in R21-11*

none

### 52. Deleted 规范 Items in R21-11
*原文标题：Deleted Specification Items in R21-11*

none

### 53. Added Constraints in R21-11

none

### 54. Changed Constraints in R21-11

none

### 55. Deleted Constraints in R21-11

none

### 56. Traceable item history of this document according to AUTOSAR Release R22-11

### 57. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

none

### 58. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

| Number | Heading |
|---|---|
| Sorting elements if their order is semantically meaningless |  |

### 59. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

none

### 60. Added Constraints in R22-11

none

### 61. Changed Constraints in R22-11

none

### 62. Deleted Constraints in R22-11

none

### 63. Traceable item history of this document according to AUTOSAR Release R23-11

### 64. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 65. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

| Number | Heading |
|---|---|
| Formating of AUTOSAR XML Descriptions |  |

### 66. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 67. Added Constraints in R23-11

none

### 68. Changed Constraints in R23-11

none

### 69. Deleted Constraints in R23-11

none

### 70. Added Advisories in R23-11

none

### 71. Changed Advisories in R23-11

none

### 72. Deleted Advisories in R23-11

none

### 73. Traceable item history of this document according to AUTOSAR Release R24-11

### 74. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 75. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 76. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 77. Added Constraints in R24-11

none

### 78. Changed Constraints in R24-11

none

### 79. Deleted Constraints in R24-11

none

### 80. Added Advisories in R24-11

none

### 81. Changed Advisories in R24-11

none

### 82. Deleted Advisories in R24-11

none

### 83. Traceable item history of this document according to AUTOSAR Release R25-11

### 84. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 85. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 86. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 87. Added Constraints in R25-11

none

### 88. Changed Constraints in R25-11

none

### 89. Deleted Constraints in R25-11

none

### 90. Added Advisories in R25-11

none

### 91. Changed Advisories in R25-11

none

### 92. Deleted Advisories in R25-11

none

### 93. Traceable item history of this document according to AUTOSAR Release R26-11

### 94. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 95. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

none

### 96. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

none

### 97. Added Constraints in R26-11

none

### 98. Changed Constraints in R26-11

none

### 99. Deleted Constraints in R26-11

none

### 100. Added Advisories in R26-11

none

### 101. Changed Advisories in R26-11

none

### 102. Deleted Advisories in R26-11

none

### 103. 术语表
*原文标题：Glossary*

The content of this appendix chapter is informative in nature and shall not be considered as normative content.

* This is a Work Product Definition that provides a description and definition for tangible work product types. Artifacts may be composed of other artifacts ().

  At a high level, an artifact is represented as a single conceptual file.
* This is a software tool which supports one or more tasks defined as AUTOSAR tasks in the methodology. Depending on the supported tasks, an AUTOSAR tool can act as an authoring tool, a converter tool, a processor tool or as a combination of those (see separate definitions).
* An AUTOSAR Tool used to create and modify AUTOSAR XML Descriptions. Example: System Description Editor.
* An AUTOSAR Tool used to create AUTOSAR XML files by converting information from other AUTOSAR XML files. Example: ECU Flattener
* This is the definition of parameters which can have values. One could say that the parameter values are Instances of the definitions. But in the meta model hierarchy of AUTOSAR, definitions are also instances of the meta model and therefore considered as a description.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 104. Mentioned Class Tables

For the sake of completeness, this chapter contains a set of class tables representing meta-classes mentioned in the context of this document but which are not contained directly in the scope of describing specific meta-model semantics.

| Class | AUTOSAR | < | < | < |
|---|---|---|---|---|
| Note | Root element of an AUTOSAR description, also the root element in corresponding XML documents. |  |  |  |

| Tags: xml.globalElement=true | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| adminData | AdminData | 0..1 | aggr | This represents the administrative data of an Autosar file. |

Stereotypes: atpSplitable Tags: atp.Splitkey=adminData xml.sequenceOffset=10
| arPackage | ARPackage | * | aggr | This is the top level package in an AUTOSAR model. |
|---|---|---|---|---|

Stereotypes: atpSplitable; atpVariation Tags: atp.Splitkey=arPackage.shortName, arPackage.variationPoint.shortLabel vh.latestBindingTime=blueprintDerivationTime xml.sequenceOffset=30
| fileInfoComment | FileInfoComment | 0..1 | aggr | This represents a possibility to provide a structured comment in an AUTOSAR file. |
|---|---|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。
