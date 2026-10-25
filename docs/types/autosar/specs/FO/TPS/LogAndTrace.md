# Log And Trace Template (`LogAndTrace`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 1024 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TPS_LogAndTrace_1024\AUTOSAR_FO_TPS_LogAndTrace.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TPS_LogAndTrace_1024\AUTOSAR_FO_TPS_LogAndTrace.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TPS_LogAndTrace_1024\zzgen\FO_TPS_LogAndTrace.complete.txt`

## 文档简介

The Log and Trace functionality (DLT) in AUTOSAR allows Classic Platform SW-Cs/Modules, Adaptive Platform Applications/Functional Clusters to forward log and trace information onto external Dlt Log Viewers if supported on the underlying platform.

The format of the DLT messages is described in more detail in the Log and Trace Protocol Specification .

Please note that the configuration of the source of log and trace messages (application or module that produces the logging information) is described in .

The ARXML format of DltMessages is described in . This format can be used in Classic Platform System Template  descriptions and Adaptive Platform Manifest  descriptions to define log and trace messages sent out by Classic Platform SW-Cs/Modules or Adaptive Platform Applications/Functional Clusters.

The description of the DltMessage is particularly important to support the Non-Verbose Mode of the Log And Trace Protocol. To reduce the amount of traffic on the bus, no meta data about the interpretation of the DltMessage is transmitted on the communications bus in the Non-Verbose Mode. Instead, the ARXML file that describes the DltMessage holds the information about the interpretation of the DltMessage.

The following figure shows the placement of the Log and Trace Extract in the AUTOSAR Methodology.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

The Log and Trace functionality (DLT) in AUTOSAR allows Classic Platform SW-Cs/Modules, Adaptive Platform Applications/Functional Clusters to forward log and trace information onto external Dlt Log Viewers if supported on the underlying platform.

The format of the DLT messages is described in more detail in the Log and Trace Protocol Specification .

Please note that the configuration of the source of log and trace messages (application or module that produces the logging information) is described in .

The ARXML format of DltMessages is described in . This format can be used in Classic Platform System Template  descriptions and Adaptive Platform Manifest  descriptions to define log and trace messages sent out by Classic Platform SW-Cs/Modules or Adaptive Platform Applications/Functional Clusters.

The description of the DltMessage is particularly important to support the Non-Verbose Mode of the Log And Trace Protocol. To reduce the amount of traffic on the bus, no meta data about the interpretation of the DltMessage is transmitted on the communications bus in the Non-Verbose Mode.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Dlt Ecu

This chapter describes the DltEcu that represents the Classic Platform "ECU" or Adaptive Platform "Machine" on which DltApplications are deployed that are generating DltMessages. The DltApplication and DltContext are used to identify the source of the log and trace message.

| Class | DltEcu | < | < | < |
|---|---|---|---|---|
| Note | This element represents an Ecu or Machine that produces logging and tracing information. |  |  |  |

| Tags: atp.recommendedPackage=DltEcus | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, UploadableDesignElement, UploadablePackageElement | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| application | DltApplication | * | aggr | Application on DltEcu that provides log or trace data. |

Stereotypes: atpSplitable; atpVariation Tags: atp.Splitkey=application.shortName, application.variationPoint.shortLabel vh.latestBindingTime=systemDesignTime
| ecuId | String | 0..1 | attr | This attribute defines the name of the ECU for use within the Dlt protocol. |
|---|---|---|---|---|

| Class | DltApplication | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the application from which the log and trace message originates. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Dlt Message

This chapter describes the modeling of DltMessages. Please note that some information of the Dlt message format that is described in  like the Message Info and the Number of Arguments can be derived from the DltMessage itself. Other parts in the Dlt message format represent the source of the log or trace messages (e.g. ecuId, applicationId, contextId) and this information can be derived from the DltEcu, the DltApplication that is aggregated by the DltEcu and the DltContext that is referenced by the DltApplication.

| Class | LogAndTraceMessageCollectionSet | < | < | < |
|---|---|---|---|---|
| Note | Collection of DltMessages |  |  |  |

| Tags: atp.recommendedPackage=LogAndTraceMessageCollectionSets | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, UploadableDesignElement, UploadablePackageElement | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| dltMessage | DltMessage | * | aggr | Collection of DltMessages in the DltMessageCollectionSet. |

Stereotypes: atpSplitable; atpVariation Tags: atp.Splitkey=dltMessage.shortName, dltMessage.variationPoint.shortLabel vh.latestBindingTime=systemDesignTime

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 附录
*原文标题：Appendix*

### 6. 示例
*原文标题：Examples*

The content of this appendix chapter is informative in nature and shall not be considered as normative content.

This chapter provides some examples for the modeling of model elements discussed in the scope of this document.

### 7. Position in Source 代码
*原文标题：Position in Source Code*

A DltMessage can provide information to the position in the source code (in this example: line 72 in demo.c) to which it is affiliated, see .

### 8. Predefined Text

The definition of a DltArgument that represents predefined text is depicted in the example in . Please note the value of attribute predefinedText.

### 9. 示例 of DLT Arguments for Temperature Measurement
*原文标题：Example of DLT Arguments for Temperature Measurement*

In this section, example definitions of DltArguments for the purpose of temperature measurement are discussed.

Of course, there is nothing special in the definition of DltArguments for temperature measurement, i.e., these examples could directly be mapped to other quantities.

### 10. Measurement without Unit

The definition of a DltArgument that represents a measurement without a unit is depicted in the example in . The indication that no unit shall be used in this case is provided by the reference to the Unit with the shortName set to "NoUnit".

The corresponding SwBaseType used for the DltArgumentProps in this example is depicted in .

### 11. Measurement with Reference to a Unit

The definition of a DltArgument that represents a measurement with a unit is depicted in the example in . The difference to the example presented in  is the reference to the Unit with the shortName set to "Kelvin".

The corresponding SwBaseType used for the DltArgument in this example is depicted in .

### 12. Measurement that describes the Temperature Distribution in a Room

The definition of a DltArgument that that describes the temperature distribution (as a three-dimensional array) in a room is depicted in the example in .

For this example, it is assumed that there are a number of probes distributed in a room for spatial temperature measurement:

* The number of probes in the in the distribution of the height of the room (z-coordinate) is 4.
* The number of probes in the in the distribution of the depth of the room (y-coordinate) is 5.
* The number of probes in the in the distribution of the width of the room (x-coordinate) is 6.

In other words, the DltArgument needs to carry 120 individual measurements in total.

### 13. 示例 of a DLT Argument that represents a String
*原文标题：Example of a DLT Argument that represents a String*

This chapter sketches the definition of a DltArgument that represents a string, in which case another reference to an SwBaseType in the role DltArgumentProps.networkRep.swTextProps is required.

Please note that the SwBaseType referenced in the role DltArgumentProps.networkRep.swTextProps intentionally does not define attribute baseTypeSize because its job is only to clarify the encoding of the string, which in this specific case is set to "UTF-8".

### 14. 示例 of a DLT Argument that represents an Enumeration
*原文标题：Example of a DLT Argument that represents an Enumeration*

This chapter sketches the definition of a DltArgument that represents an enumeration. The definition of the DltArgument can be found in .

The definition of an enumeration on this level requires a reference to a CompuMethod of category, which is sketched in .

### 15. Imposition Times of Constraints

The constraints formulated in this document have different actual imposition times which denote the steps in the workflow when the respective constraint has to be imposed.

Some imposition times "include" other imposition times, an example for this relation is discussed in the

The imposition times that are considered applicable in the scope of this document are listed in .

Please note that the imposition times are intentionally rendered as technical terms such that it is possible to link back from each constraint to the definition of the affected imposition time in .

| Imposition Time | Description | Motivation |
|---|---|---|
| IT_LogTrace | Log and Trace Extract is complete | This imposition time denotes the step in the workflow, where the Log and Trace Extract is about to be finished. |

### 16. History of Constraints and 规范 Items
*原文标题：History of Constraints and Specification Items*

The content of this appendix chapter is informative in nature and shall not be considered as normative content.

Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 17. Constraint and 规范 Item History of this document according to AUTOSAR Release R21-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release R21-11*

### 18. Added 规范 Items in R21-11
*原文标题：Added Specification Items in R21-11*

| Number | Heading |
|---|---|
| Log or trace message representation |  |
| DLT message |  |
| User data of the log or trace message |  |
| DltArgument kinds |  |
| predefined text DltArgument |  |
| assembled data DltArgument |  |
| Description of a String as networkRepresentation of a DltArgument |  |
| Standardized values of DltMessage.messageTypeInfo |  |
| Semantics of DltArgument.length |  |
| Semantics of DltArgument.length in case of a String |  |
| Description of DltArgument with one-dimensional Array type |  |
| Description of DltArgument with n-dimensional Array type |  |
| Description of DltArgument with Structure type |  |
| Semantics of DltArgument.optional |  |

### 19. Changed 规范 Items in R21-11
*原文标题：Changed Specification Items in R21-11*

none

### 20. Deleted 规范 Items in R21-11
*原文标题：Deleted Specification Items in R21-11*

none

### 21. Added Constraints in R21-11

| Number | Heading |
|---|---|
| Usage of DltArgument.networkRep |  |
| Existence of DltEcu.ecuId |  |
| Existence of DltApplication.context |  |
| Existence of DltApplication.applicationId |  |
| Existence of DltApplication.applicationDescription |  |
| Existence of DltContext.contextId |  |
| Existence of DltContext.contextDescription |  |
| Existence of DltContext.dltMessage |  |
| Existence of DltMessage.messageId |  |
| Restriction in usage of DltArgument.optional attribute |  |
| Restriction of baseTypeSize of a DltArgument |  |
| Datatype of an Array |  |
| CompuMethod in DltArgument.networkRepresentation |  |

### 22. Changed Constraints in R21-11

none

### 23. Deleted Constraints in R21-11

none

### 24. Constraint and 规范 Item History of this document according to AUTOSAR Release R22-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release R22-11*

### 25. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

none

### 26. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

none

### 27. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

none

### 28. Added Constraints in R22-11

| Number | Heading |
|---|---|
| Range of DltMessage.privacyLevel.privacyLevel |  |
| Range of PrivacyLevel.compuMethod |  |

### 29. Changed Constraints in R22-11

| Number | Heading |
|---|---|
| Allowed SwDataDefProps attributes for DltArgument.networkRepresentation |  |
| Restriction in usage of DltArgument.optional attribute |  |

### 30. Deleted Constraints in R22-11

none

### 31. Constraint and 规范 Item History of this document according to AUTOSAR Release R23-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release R23-11*

### 32. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 33. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

none

### 34. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 35. Added Constraints in R23-11

| Number | Heading |
|---|---|
| Allowed usage of attributes for description of payload data types |  |
| Allowed usage of attributes in case of a dltArgumentEntry |  |

### 36. Changed Constraints in R23-11

none

### 37. Deleted Constraints in R23-11

none

### 38. Constraint and 规范 Item History of this document according to AUTOSAR Release R24-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release R24-11*

### 39. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 40. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

| Number | Heading |
|---|---|
| Description of a String as networkRepresentation of a DltArgument |  |
| Semantics of DltArgument.length in case of a String |  |

### 41. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 42. Added Constraints in R24-11

none

### 43. Changed Constraints in R24-11

| Number | Heading |
|---|---|
| Allowed SwDataDefProps attributes for DltArgument.networkRepresentation |  |

### 44. Deleted Constraints in R24-11

none

### 45. Constraint and 规范 Item History of this document according to AUTOSAR Release R25-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release R25-11*

### 46. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

| Number | Heading |
|---|---|
| Semantics of DltArgumentProps |  |

### 47. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|
| assembled data DltArgument |  |
| Description of a String as networkRepresentation of a DltArgumentProps |  |
| Semantics of DltArgumentProps.length |  |
| Description of DltArgument with one-dimensional Array type |  |
| Description of DltArgument with n-dimensional Array type |  |
| Description of DltArgument with Structure type |  |

### 48. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 49. Added Constraints in R25-11

| Number | Heading |
|---|---|
| Mutually exclusive existence of DltArgument.optional and DltArgument.predefinedText attributes |  |
| DltArgument with predefinedText |  |

### 50. Changed Constraints in R25-11

| Number | Heading |
|---|---|
| Datatype of an Array |  |
| CompuMethod in DltArgumentProps.networkRepresentation |  |
| Allowed usage of attributes for description of payload data types |  |
| Allowed usage of attributes in case of a dltArgumentEntry |  |

### 51. Deleted Constraints in R25-11

| Number | Heading |
|---|---|
| Restriction in usage of DltArgument.optional attribute |  |

### 52. Constraint and 规范 Item History of this document according to AUTOSAR Release R26-11
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release R26-11*

### 53. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

| Number | Heading |
|---|---|
| variableLength DltArgument |  |
| optional DltArgument |  |

### 54. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

| Number | Heading |
|---|---|
| assembled data DltArgument |  |
| Description of a String as networkRep of a DltArgumentProps |  |
| Semantics of DltArgumentProps.length in case of a String |  |
| Description of DltArgument with one-dimensional Array type |  |
| Description of DltArgument with n-dimensional Array type |  |

### 55. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

none

### 56. Added Constraints in R26-11

| Number | Heading |
|---|---|
| DltArguments with variableLength or DltArgument.optional settings inside of a DltMessage |  |
| Setting of DltArgumentProps.variableLength to true |  |

### 57. Changed Constraints in R26-11

| Number | Heading |
|---|---|
| Allowed SwDataDefProps attributes for DltArgumentProps.networkRep |  |
| Restriction of baseTypeSize of a DltArgument |  |
| Datatype of an Array |  |
| CompuMethod in DltArgumentProps.networkRep |  |

### 58. Deleted Constraints in R26-11

none

### 59. Mentioned Class Tables

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
