# Requirements on SW-C and System Modeling (`SWCModeling`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 267 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_SWCModeling_267\AUTOSAR_CP_RS_SWCModeling.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_SWCModeling_267\AUTOSAR_CP_RS_SWCModeling.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_SWCModeling_267\zzgen\CP_RS_SWCModeling.complete.txt`

## 文档简介

This document defines general rules and formats for requirements specification within AUTOSAR. It shall be used as a basis for each requirements document.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document defines general rules and formats for requirements specification within AUTOSAR. It shall be used as a basis for each requirements document.

### 2. Terminology

Identifiable: any model element that can have a set of attributes. Please refer to the AUTOSAR Meta Model for further and detailed explanation of this term ("Instances of this class can be referred to by their identifier (while adhering to namespace borders))". Use this term instead of "element" , "data name", etc. unless a requirement is applicable to a specific Meta Model Identifiable such as Port, Data Type, etc..

ARElement: As defined into AUTOSAR Meta Model: "An element that can be defined stand-alone, i.e. without being part of another element (except for packages of course).

Opposed to packages, the elements are closed sets, i.e. that in a file based description, one ARElement needs to be described completely and cannot be extended or completed by another file".

ARPackage: As defined into AUTOSAR Meta Model: "AUTOSAR package, allowing to create top level packages to structure the contained ARElements.

ARPackages are open sets, which means that in a file based description system, multiple files can be used to partially describe the contents of a package.

This is an extended version of MSR's SW-SYSTEM".

### 3. Conventions to be used

### 4. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to SW-C and System Modeling that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| AR | AUTOSAR |
| ECU | Electronic Control Unit |
| HMI | Human Machine Interface |
| MISRA | Motor Industry Software Reliability Association |
| RTE | Real Time Environment |
| SW-C | Software Component |
| WP | Work Package |

### 6. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the SWCModeling.

### 7. Naming Convention 需求
*原文标题：Naming Convention Requirements*

### 8. [RS_SWMG_00001

Distinguish Standardized vs not standardized model elements of type ARElement]

 Distinguish Standardized vs not standardized model elements of type ARElement
⌈
| Description: | The naming convention shall provide an attribute to distinguish between standardized and non standardized AUTOSAR model elements of type ARElement. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Model elements are specified in the documents AUTOSAR SW-C Template, ECU-Resource Template, and System Template. Possible implementation of this requirement will be: |

* prefix of the model element name
* suffix of the model element name
* packages for standardized components (not applicable to Ports) this can be a solution to the requirement.
⌋

### 9. [RS_SWMG_00002

Name shall reflect the purpose of the model element]

 Name shall reflect the purpose of the model element
⌈
| Description: | The naming convention should allow to define names that give at a glance an idea of the purpose of the element. |
|---|---|
| Rationale: | It is necessary to avoid the creation of identical names for elements having a different purpose. For example data flow property (such as Request and Status) is needed to differentiate names that otherwise would be equal. |

Applies To:
| Dependencies: | Easy creation of names |
|---|---|
| Use Case: | Identify whether an interface and/or data element is a command, a status, a request, a value, etc.. |

Example:

PGearEngaged and PGearRequest
| Supporting Material: | Source : Internal document of Body Domain, AUTOSAR_CentralLocking_ApplicationInterfaces.doc: |
|---|---|

Semantic of keywords (e.g. "operation") in the interface/ data element names:

* Cmd(command) do/activate something (e. g. from Master to Actuator)
* Req(request) demand to do/activate something (e. g. from Sensor to Master)
* Sta(status) get functional status information
* Hmi user request (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. [RS_SWMG_00005

Easy creation of names]

 Easy creation of names
⌈
| Description: | - |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Possible solution: Model Element Names are composed by arranging predefined keywords in a predefined order. This will lead to definition of a set of predefined keywords but may conflict with the high number of required keywords/catchwords and the need to keep names short for use cases in function development, documentation calibration and to support compiler specification |

⌋

### 11. [RS_SWMG_00006

Model Elements names shall be self-explanatory]

 Model Elements names shall be self-explanatory
⌈
| Description: | - |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | E.g. data-element, ports, interfaces, composition, etc. |
| Supporting Material: | - |

⌋

### 12. [RS_SWMG_00007

Distinguish model elements of different model element suppliers]

 Distinguish model elements of different model element suppliers
⌈
| Description: | The Modeling Guide should define an attribute to distinguish between model elements of different model element suppliers. This is only applicable for non standardized model elements |
|---|---|
| Rationale: | Avoid merge conflicts if software component descriptions of different suppliers are joined to a system model. Brand responsibly. |

Applies To:
| Dependencies: | If solved by Naming Convention: Not applicable for ModeDeclarationGroupPrototype, DataElementPrototype, CalprmElementPrototype, OperationPrototype, ArgumentPrototype due to the required uniformity of names as precondition for connectability of ports |
|---|---|
| Use Case: | Usage of non standardized elements within an AUTOSAR package. If errors appear it is request to trace the SW-C supplier responsible for that. |
| Supporting Material: | Could either be done by naming convention or by usage of other model elements like AdminData. |

⌋

### 13. [RS_SWMG_00010

Model Element Names shall follow semantic rules]

 Model Element Names shall follow semantic rules
⌈
| Description: | - |
|---|---|
| Rationale: | By doing so, the compliancy to the naming convention would be verifiable by name checkers or name creator tools. |

Applies To:
| Dependencies: | Easy creation of names |
|---|---|

 Easy lookup of names in databases
| Use Case: | - |
|---|---|
| Supporting Material: | Modeling Guide, AI Specification |

⌋

### 14. [RS_SWMG_00011

Model Element Names are composed by arranging standardized keywords]

 Model Element Names are composed by arranging standardized keywords
⌈
| Description: | - |
|---|---|
| Rationale: | By doing so, the compliancy to the naming convention would be verifiable by name checkers or name creator tools. Names length restriction can lead to not comprehensible names if keyword and acronyms are not standardized. |

Applies To:
| Dependencies: | Easy creation of names |
|---|---|

 Usage of Unique Keywords
| Use Case: | - |
|---|---|
| Supporting Material: | Modeling Guide, AI Specification |

⌋

### 15. [RS_SWMG_00012

Semantic of Model Element Names shall allow variable number of keywords]

 Semantic of Model Element Names shall allow variable number of keywords
⌈
| Description: | The number of composed keyword shall be dependent from the need of explanation. |
|---|---|
| Rationale: | Created names shall be simple as possible but complex as required. |

Applies To:
| Dependencies: | Easy creation of names |
|---|---|

 Model Element Names shall follow semantic rules

 Usage of Unique Keywords
| Use Case: | - |
|---|---|
| Supporting Material: | Modeling Guide |

An example of solution:

`Eng_tqCluReqDrvSlow` -> Engine Torque at Clutch Slow Request

Veh_v -> Vehicle Speed
⌋

### 16. [RS_SWMG_00014

Length restriction for short names of Identifiable]

 Length restriction for short names of Identifiable
⌈
| Description: | Short Names of Identifiable shall be restricted to total length of 128 characters. |
|---|---|
| Rationale: | Short Names partly used for the creation of C Language Names. These created names shall have a predictable maximum length to avoid tool problems. (Even if this length will greater than MISRA guideline recommendation it shall not be infinite.) |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | A rule restricting the number of characters to 128 is already present in the MetaModel. {0-127} |

⌋

### 17. [RS_SWMG_00016

Names shall allow to indicate if the value is a direct measurement or a conditioned value]

 Names shall allow to indicate if the value is a direct measurement or a conditioned value
⌈
| Description: | Names should indicate if the value is measured from sensors (maybe of-set compensated and/or filtered) or calculated/estimated from a set of information or model based. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Sensor SW-C outputting a measured physical value and feeding it to another SW-C in charge of filtering it. In this case the names of data elements, ports, and interface would differ only for a keyword, and the data type could be the same. |
| Supporting Material: | Possible solution: use a dedicated keyword in the name semantic to indicate such information. |

⌋

### 18. [RS_SWMG_00017

Names shall follow the ISO 8855 for English naming.]

 Names shall follow the ISO 8855 for English naming.
⌈
| Description: | This standard defines the principle terms of vehicle dynamics applicable (not only) to passenger cars. Definitions are provided in more than one language, only definition in English shall be followed. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | Use English as Standard Language for Names. |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 19. [RS_SWMG_00030

Use English as Standard Language for Names.]

 Use English as Standard Language for Names.
⌈
| Description: | English language shall be used for names and acronyms. |
|---|---|
| Rationale: | Internationality and common understanding of names and keywords. |

Applies To:
| Dependencies: | Names shall follow the ISO 8855 for English naming. |
|---|---|
| Use Case: | Designers of different nationality will come up with the same solution while defining new names. |
| Supporting Material: | Naming Convention 1.0 from Powertrain Domain §1.4 |

⌋

### 20. [RS_SWMG_00031

No Architectural Information in Names]

 No Architectural Information in Names
⌈
| Description: | No definition of architectural or implementation information shall be present into names. |
|---|---|
| Rationale: | To increase the re-usability and decrease the maintenance of standard elements. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Creating different composition of components without changing any element name. |
| Supporting Material: | Naming Convention 1.0 from Powertrain Domain §1.4 |

⌋

### 21. [RS_SWMG_00034

Usage of Unique Keywords]

 Usage of Unique Keywords
⌈
| Description: | Keywords used to compose Names shall be unique. Double or multiple meaning of keywords is possible unless violation of semantic rules is detected. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | Model Element Names shall follow semantic rules |
|---|---|

 Model Element Names are composed by arranging standardized keywords
| Use Case: | Automated checking of Names with respect to conformance will be possible. |
|---|---|
| Supporting Material: | Naming Convention 1.0 from Powertrain Domain §1.4 |

⌋

### 22. [RS_SWMG_00039

Avoid usage of Trailing underscores]

 Avoid usage of Trailing underscores
⌈
| Description: | Names shall not end with an underscore  character. |
|---|---|
| Rationale: | AUTOSAR tool such as RTE generates the name with the "_" to indicate the information flow path across the AR layer. This will facilitate the better understanding for tool generated names and also with limitation to number of characters in the name |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Naming Convention 1.0 from Powertrain Domain §2 |

⌋

### 23. [RS_SWMG_00040

Avoid sequences of underscores characters.]

 Avoid sequences of underscores characters.
⌈
| Description: | Avoid sequences of underscore characters directly after each other . |
|---|---|
| Rationale: | Waste of characters space. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Naming Convention 1.0 from Powertrain Domain §2 |

⌋

### 24. [RS_SWMG_00041

Do not rely on uppercase/lowercase difference only.]

 Do not rely on uppercase/lowercase difference only.
⌈
| Description: | Avoid distinguish Names only from uppercase/lowercase format |
|---|---|
| Rationale: | Human user can easily mix up names that differ only for capitalization |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Naming Convention 1.0 from Powertrain Domain §2 |

⌋

### 25. [RS_SWMG_00048

Easy lookup of names in databases]

 Easy lookup of names in databases
⌈
| Description: | - |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Easy creation of names |

⌋

### 26. [RS_SWMG_00049

Support Identifiable already present in the MasterTable]

 Support Identifiable already present in the MasterTable
⌈
| Description: | All model element types that are used in the Master Table such as SenderReceiver interfaces, DataElements, DataTypes, Unit, Component Types, etc. shall be supported by the Modelling Rules. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | AI Specification is a place-holder for Identifiable that are listed in that file |

⌋

### 27. [RS_SWMG_00054

Provide guidelines how to resolve name conflicts]

 Provide guidelines how to resolve name conflicts
⌈
| Description: | The modelling guide should provide guidelines how to resolve name conflicts between related elements. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | One possible implementation of this requirement is the use of prefixes. To define a PrimitiveTypeWithSemantics a CompuMethod definition is also necessary. Using the prefix solution, the names could look like: |

PrimitiveTypeWithSemantic : Veh_v used for vehicle speed

CompuMethode: `Compu_Veh_v` used for vehicle speed data type

Interface `If_Veh_v` Interface for vehicle speed

The prefix solution has the disadvantage of increasing the length of the names and could lead to a violation of .

Another possible solution is the use of sub packages.
⌋

### 28. [RS_SWMG_00059

There shall be a single set of keywords]

 There shall be a single set of keywords
⌈
| Description: | The modelling guide shall provide a list of standardized keywords |
|---|---|
| Rationale: | To ensure uniqueness of the naming convention all keywords shall be collected in one keyword list |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | A possible solution is to use a separate document as development work-product for keywords and include the finalized list of keywords only when a milestone of the Modelling Guide document is needed. This would save the Modelling Guide from frequent iterations resulting from discussions and evolutions of the keyword list. |

⌋

### 29. [RS_SWMG_00060

Applicability of Naming Convention]

 Applicability of Naming Convention
⌈
| Description: | Naming convention must be applicable to all vehicle application domains |
|---|---|

of AUTOSAR
| Rationale: | # In open environments where arbitrary parties are willing to cooperate all parties shall use the same naming convention. |
|---|---|

# If dedicated naming conventions for specific domains or parties would be supported, the acceptance of the conventions would be very low. Many parties would argue, that they need a specific convention for their area.
Applies To:
| Dependencies: | Name shall reflect the purpose of the model element, |
|---|---|

 Easy creation of names,

 Model Elements names shall be self-explanatory,

 Usage of Unique Keywords
| Use Case: | - |
|---|---|
| Supporting Material: | The global acceptance of the universal naming conventions will take time but should not limit the claim of the standard. |

⌋

### 30. [RS_SWMG_00061

Naming convention shall be unique]

 Naming convention shall be unique
⌈
| Description: | Naming conventions must state clear and deterministic rules for the creation of names such that names can be uniquely determined from signal characteristics. |
|---|---|
| Rationale: | # Support distributed development |

# Avoid definition of redundant signals since different developers will create names by application of the same rules.
# Avoid misuse of signals.
# Enable consistency checks and tool-based processing of names.
# Enhance readability since all developers / users of the names develop the same mindset.
Applies To:
| Dependencies: | Name shall reflect the purpose of the model element, |
|---|---|

 Model Elements names shall be self-explanatory,

 Model Element Names shall follow semantic rules,

 Model Element Names are composed by arranging standardized keywords

 Names shall allow to indicate if the value is a direct measurement or a conditioned value

 No Architectural Information in Names

 Usage of Unique Keywords

 Provide guidelines how to resolve name conflicts

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. [RS_SWMG_00062

Naming Convention shall rule Short Names and Long Names construction.]

 Naming Convention shall rule Short Names and Long Names construction.
⌈
| Description: | Naming conventions shall rule short names and long names construction through a clear set of rules and recommendations. |
|---|---|
| Rationale: | To support clear and understandable short names and long names constructions and encourage elements reusage in AI domain. |

Applies To:
| Dependencies: | Name shall reflect the purpose of the model element, |
|---|---|

 Model Elements names shall be self-explanatory creation of names,

 Model Elements names shall be self-explanatory,

 Model Element Names shall follow semantic rules,

 Model Element Names are composed by arranging standardized keywords

 Semantic of Model Element Names shall allow variable number of keywords

 Names shall allow to indicate if the value is a direct measurement or a conditioned value

 Usage of Unique Keywords

 Support Identifiable already present in the Master Table

 Provide guidelines how to resolve name conflicts

 There shall be a single set of keywords

 Applicability of Naming Convention

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 建模需求
*原文标题：Modeling Requirements*

### 33. [RS_SWMG_00052

Definition of Package Structure]

 Definition of Package Structure
⌈
| Description: | The Modelling Guide shall specify the Package structure used for standardized AUTOSAR Elements |
|---|---|
| Rationale: | Model Exchange without path conflicts if standardized M1 AUTOSAR model elements are used. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The modelling guide should specify the packages for DataTypes, SenderReceiverInterfaces, etc. that are used in the specification of the Functional Interfaces |
| Supporting Material: | - |

⌋

### 34. [RS_SWMG_00053

Model shall be compliant to the Meta Model]

 Model shall be compliant to the Meta Model
⌈
| Description: | The AUTOSAR Meta Model defines the structure of AUTOSAR models. Since the MasterTable contains the data to describe the specification of every Domain in the Application Interfaces, it has to be kept consistent with the Meta Model. |
|---|---|

All model elements attributes shall be used like the Meta Model defines it.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Meta Model |

⌋

### 35. [RS_SWMG_00055

Continuous Data Type resolution should be a power of two]

 Continuous Data Type resolution should be a power of two
⌈
| Description: | Continuous Data Type resolution should be a power of two, either as a magnitude or inverse. |
|---|---|
| Rationale: | For cost reasons, in a majority of the commercially available processors on the market today there is no hardware support for floating-point arithmetic. To avoid or limit software emulation of such feature, that would lead to software execution overhead, fixed-point (integer) mathematics is commonly used. |

A large portion of processors do not even have hardware support for integer multiplication. By assigning to fixed point (integer) numbers a resolution expressed by a power of two, software emulation of multiplication and divide is reduced only to those operation functionally needed by the algorithm.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In a SWC algorithm, apply a gain having a resolution of 0.001/lsb to a variable of type UInt16 having a resolution of 0,004/lsb, to obtain a result having the same resolution. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. [RS_SWMG_00056

Standardized model elements shall not contain non standardized elements]

 Standardized model elements shall not contain non standardized elements
⌈
| Description: | Standardized model elements shall not contain non standardized elements. |
|---|---|
| Rationale: | To avoid confusion it is necessary that an element is completely standardized, even not partially. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | A proposed solution to the conflict is the following: |

* Define a new non standardized composition type that contains the standardized component type and additional non standardized components.
* Interfaces of such composition can be all ports of the standardized component type plus the additional non standardized ports.
⌋

### 37. [RS_SWMG_00057

Modeling Guide shall support the AUTOSAR methodology]

 Modeling Guide shall support the AUTOSAR methodology
⌈
| Description: | Modelling Guide shall give guidelines that re-usability of model elements shall be exploited as much as possible. |
|---|---|
| Rationale: | By exploiting the full possibilities of the AUTOSAR methodology, conflicts due to inconsistencies will be less probable, unnecessary redundancies will be removed, maintenance of the data will be improved. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Defining Data Elements of different Interface with the same Data Type, if the same range and resolution is used. |
| Supporting Material: | AUTOSAR Meta Model. |

⌋

### 38. References

### 39. 附录
*原文标题：Appendix*

### 40. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 41. Traceable item history of this document according to AUTOSAR Release R25-11

### 42. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 43. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 44. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 45. Traceable item history of this document according to AUTOSAR Release R24-11

### 46. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 47. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 48. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 49. Traceable item history of this document according to AUTOSAR Release R23-11

### 50. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 51. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 52. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
