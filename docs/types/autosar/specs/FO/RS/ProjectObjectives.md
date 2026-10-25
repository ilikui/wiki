# Project Objectives (`ProjectObjectives`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 599 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_ProjectObjectives_599\AUTOSAR_FO_RS_ProjectObjectives.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_ProjectObjectives_599\AUTOSAR_FO_RS_ProjectObjectives.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_ProjectObjectives_599\zzgen\FO_RS_ProjectObjectives.complete.txt`

## 文档简介

Each AUTOSAR Partner has committed to the top level project objectives (PO) of AUTOSAR.

The project objectives are the top level requirements of the AUTOSAR standard and get further refined in order to get broken down into the specific technical requirements. For this purpose, the AUTOSAR Project Objectives are established as a fundamental base to derive these specific requirements.

The term AUTOSAR is used as a synonym of the development partnership and the technical product AUTomotive Open System ARchitecture.

## 章节详细内容

### 1. 范围 of the Document
*原文标题：Scope of the Document*

Each AUTOSAR Partner has committed to the top level project objectives (PO) of AUTOSAR.

The project objectives are the top level requirements of the AUTOSAR standard and get further refined in order to get broken down into the specific technical requirements. For this purpose, the AUTOSAR Project Objectives are established as a fundamental base to derive these specific requirements.

The term AUTOSAR is used as a synonym of the development partnership and the technical product AUTomotive Open System ARchitecture.

### 2. How to read this document

Each project objective has its unique identifier starting with the prefix "`RS_PO_`" (for "Requirements of Project Objectives"). For any review annotations, remarks or questions, please refer to this unique ID rather than chapter or page numbers.

### 3. Conventions used

In requirements, the following specific semantics are used (taken from Request for Comment RFC 2119  from the Internet Engineering Task Force IETF).

The representation of requirements in AUTOSAR documents follows the table specified in , .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. The AUTOSAR project 目标
*原文标题：The AUTOSAR project objectives*

This chapter describes the project objectives of AUTOSAR. They are used as the basis for further refinement into the AUTOSAR Main Requirements which drive the specific technical requirements to build the AUTOSAR standard. Besides these technical requirements, there are non-technical requirements, such as new business model etc., which are not considered in the project objectives.

### 5. [RS_PO_00001

AUTOSAR shall support the portability of software.]

 AUTOSAR shall support the portability of software.
⌈
| Description: | AUTOSAR shall enable OEMs and suppliers to deploy software across the vehicle network and to reuse software. |
|---|---|
| Rationale: | Deployment and reuse of software across the vehicle network allows overall system scaling and optimization. |

Redevelopment of software is expensive and error prone.
Applies To:
| Dependencies: | , , |
|---|---|
| Use Case: | Application software is reusable across different product lines and OEMs. |

Scaling and optimizing of vehicle networks by transferring application software.

Basic software is reusable across different ECUs and domains.
| Supporting Material: | - |
|---|---|

⌋

### 6. [RS_PO_00002

AUTOSAR shall support the scalability to different architectures and hardware variants.]

 AUTOSAR shall support the scalability to different architectures and hardware variants.
⌈
| Description: | AUTOSAR shall provide mechanisms to develop systems, which can be adapted to different vehicles, platforms and ECU hardware capabilities. |
|---|---|
| Rationale: | Software functions can be used in ECUs with different hardware characteristics. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Integration of an application on a different or updated hardware platform |

Development of an application which can be configured to be integrated on different vehicles.
| Supporting Material: | - |
|---|---|

⌋

### 7. [RS_PO_00003

AUTOSAR shall be domain agnostic.]

 AUTOSAR shall be domain agnostic.
⌈
| Description: | AUTOSAR shall be functional domain agnostic |
|---|---|
| Rationale: | A common architecture across the functional domains allows the relocation of software components across domains. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Applying the same software systems to multiple areas |
| Supporting Material: | - |

⌋

### 8. [RS_PO_00010

AUTOSAR shall support data exchange with non AUTOSAR systems.]

 AUTOSAR shall support data exchange with non AUTOSAR systems.
⌈
| Description: | AUTOSAR shall support data exchange with non AUTOSAR systems. |
|---|---|
| Rationale: | It increases the degree of freedom at generating the E/E system. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Communication of AUTOSAR ECUs with infotainment ECUs. |
| Supporting Material: | - |

⌋

### 9. [RS_PO_00004

AUTOSAR shall define an open architecture for automotive software.]

 AUTOSAR shall define an open architecture for automotive software.
⌈
| Description: | AUTOSAR shall define an open architecture for automotive software which can be maintained, adapted and extended. |
|---|---|
| Rationale: | Findings from the application of AUTOSAR require maintaining AUTOSAR. |

Future requirements will increase the necessity to further evolve AUTOSAR.

Only common functionality will be standardized by AUTOSAR. Therefore the architecture shall be extendable without comprising fundamental principles of the architecture.
Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | Adaption to new technologies e.g. from silicon industry and software industry, |

Integration of drivers for specific hardware.
| Supporting Material: | - |
|---|---|

⌋

### 10. [RS_PO_00005

AUTOSAR shall support the development of dependable systems.]

 AUTOSAR shall support the development of dependable systems.
⌈
| Description: | Dependable systems are characterized by the following attributes: |
|---|---|

* Availability: readiness for correct service
* Reliability: continuity of correct service
* Safety: absence of unreasonable risk
* Integrity: mechanisms to inhibit improper system alteration
* Maintainability: ability to undergo modifications and repairs
* Security: protecting automotive software systems from unauthorized access, use, disclosure, disruption, modification, perusal, inspection, recording or destruction

which shall be supported by AUTOSAR.
| Rationale: | Numerous functions in the automotive domain have requirements on functional safety and/or availability. |
|---|---|

Automotive systems are characterized by long product life cycles and short reaction times when the need for updates and upgrades comes up.
Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Software updates and upgrades. |

Exchange of hardware platforms.
| Supporting Material: | ISO 26262 , |
|---|---|

SOTIF ISO-PAS 21448 ,

SAE J3061,

ISO/SAE 21434

UN/ECE/TRANS/WP-29
⌋

### 11. [RS_PO_00007

AUTOSAR shall enable the collaboration between partners.]

 AUTOSAR shall enable the collaboration between partners.
⌈
| Description: | AUTOSAR shall enable the collaboration between partners by standardized data exchange formats and support the integration of basic software and application software from various partners on a single ECU via a middleware and across the vehicle network. |
|---|---|
| Rationale: | The automotive domain is characterized by collaborations between various partners. |

Coordination of e.g. interface and parameter definitions is an ongoing challenge in distributed development projects.

In many ECUs software from different suppliers has to be integrated.
Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Collaborations between partners (e.g. OEMs, System, Software, Hardware and Tool Suppliers). |
| Supporting Material: | - |

⌋

### 12. [RS_PO_00009

AUTOSAR shall support applicable international automotive standards and state-of-the-art technologies.]

 AUTOSAR shall support applicable international automotive standards and state-of-the-art technologies.
⌈
| Description: | AUTOSAR results shall be compliant to existing and applicable international automotive standards and state-of-the-art technologies. |
|---|---|
| Rationale: | Enable AUTOSAR to be used in todays and future systems. |

Support is required to ensure interoperability with existing standards.

AUTOSAR results should be compliant to relevant standards and applicable state-of-the-art-technologies.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Support of existing and future bus systems (CAN, FlexRay, etc.). |

Support of relevant ISO/SAE/IEC Standards and UN-ECE.
| Supporting Material: | - |
|---|---|

⌋

### 13. References

### 14. Change History

Please note that the lists in this chapter also include requirement items that have been removed from the specification in a later version. These requirement items do not appear as hyperlinks in the document.

### 15. Change History of this document according to AUTOSAR Release R25-11

### 16. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 17. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| AUTOSAR shall support the development of dependable systems. |  |

### 18. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 19. Change History of this document according to AUTOSAR Release R24-11

### 20. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 21. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 22. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 23. Change History of this document according to AUTOSAR Release R23-11

### 24. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| AUTOSAR shall support the portability of software. |  |
| AUTOSAR shall support the scalability to different architectures and hardware variants. |  |
| AUTOSAR shall be domain agnostic. |  |
| AUTOSAR shall define an open architecture for automotive software. |  |
| AUTOSAR shall support the development of dependable systems. |  |
| AUTOSAR shall enable the collaboration between partners. |  |
| AUTOSAR shall support applicable international automotive standards and state-of-the-art technologies. |  |
| AUTOSAR shall support data exchange with non AUTOSAR systems. |  |

### 25. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 26. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
