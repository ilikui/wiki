# Safety Requirements for AUTOSAR Adaptive Platform and AUTOSAR Classic Platform (`Safety`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 986 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_Safety_986\AUTOSAR_FO_RS_Safety.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_Safety_986\AUTOSAR_FO_RS_Safety.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_Safety_986\zzgen\FO_RS_Safety.complete.txt`

## 文档简介

This document specifies safety requirements on the AUTOSAR Platforms. It makes use of the intended functionality described in

* `AUTOSAR_AP_EXP_PlatformDesign`
* `AUTOSAR_CP_EXP_LayeredSoftwareArchitecture`
* `AUTOSAR_AP_EXP_SWArchitecture`.

The functional safety requirements are derived from the top level safety requirements and hazards mentioned in `AUTOSAR_EXP_SafetyOverview`.

This document contains a view on technical safety requirements of the AUTOSAR Functional Cluster, Services, and AUTOSAR Basic Software Modules. These requirements are extracted from the dedicated target requirement specifications and included in this document to give the reader the full overview in one document.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies safety requirements on the AUTOSAR Platforms. It makes use of the intended functionality described in

* `AUTOSAR_AP_EXP_PlatformDesign`
* `AUTOSAR_CP_EXP_LayeredSoftwareArchitecture`
* `AUTOSAR_AP_EXP_SWArchitecture`.

The functional safety requirements are derived from the top level safety requirements and hazards mentioned in `AUTOSAR_EXP_SafetyOverview`.

This document contains a view on technical safety requirements of the AUTOSAR Functional Cluster, Services, and AUTOSAR Basic Software Modules. These requirements are extracted from the dedicated target requirement specifications and included in this document to give the reader the full overview in one document.

### 2. No ASIL Ratings

The AUTOSAR consortium, especially the AUTOSAR Adaptive Platform Working Groups are only providing an architecture definition, descriptions of the functional blocks and a proof of concept implementation, it is not possible to assign an ASIL rating to any requirement within this scope as described in ISO26262.

### 3. How to Read This Document

This document contains functional safety requirements which are generic and do not mention specific solutions/components of AUTOSAR. The technical safety requirements are then derived from functional safety requirements, which mention the specific responsibilities of AUTOSAR components. Each requirement has its unique identifier starting with the prefix "`RS_SAF_`" (for "Safety Requirement").

Technical Safety Requirements are partly extracted from the dedicated target component requirement specification and will therefore not have the prefix "`RS_SAF_`". Not all technical requirements have been consolidated yet. The goal is to have all technical requirements being part of the target requirements specification and only included here to provide a complete safety requirement catalog.

### 4. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 5. Conventions used

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* SHOULD: This word, or the adjective "RECOMMENDED", means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Requirement Identifier Coding

The unique identifier for safety requirements shall consist of

* a document identifier
* an identifier to distinguish functional safety requirements and technical safety requirements
* an identifier to identify a target component (either a Functional Cluster in the AUTOSAR Adaptive Platform or a Basic Software Component in the AUTOSAR Classic Platform)
* a requirement number

The coding pattern used in this requirements specification is `RS_SAF_`<Z><YY><XX>, where

* is a single digit number, describing whether the requirement is a

  * safety goal or top level safety requirement functional safety requirement, where

    * is reserved
    * is a double digit number
  * functional safety requirement for the AUTOSAR Adaptive Platform, where

    * is reserved
    * is a double digit number
  * technical safety requirement for the AUTOSAR Adaptive Platform, where

    * is a double digit number, describing whether the requirement addresses

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to `RS_Safety` that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| EM | Execution Management |
| SM | State Management |
| PER | Persistency |
| CM | Communication Management |
| UCM | Update and Configuration Management |
| S2S | Signal to Service |
| SG | Safety Goal |
| TLSR | Top Level Safety Requirement |
| WDG | Watchdog |

### 8. 需求规范
*原文标题：Requirements Specification*

This chapter contains top level safety requirements for AUTOSAR in . Functional safety requirements in  are derived from these requirements. The sub-chapter  contains technical safety requirements which are derived from the functional safety requirements.

### 9. Top Level Safety 需求
*原文标题：Top Level Safety Requirements*

Safe Execution
⌈
| Description: | AUTOSAR shall provide supporting mechanisms to monitor the control flow and manage the execution order of multiple applications with mixed safety criticality. |
|---|---|
| Rationale: | To ensure freedom from interference with respect to timing  and data processing. |
| Applies To: | FO |

Dependencies:
Use Case:
| Supporting Material: | ISO26262 |
|---|---|

⌋

 Safe Configuration
⌈
| Description: | AUTOSAR shall provide mechanisms to support correct configuration during the entire driving cycle of the vehicle. |
|---|---|
| Rationale: | AUTOSAR needs to provide measures and mechanisms to keep the configuration consistent throughout the whole driving cycle of the vehicle. |
| Applies To: | FO |

Dependencies:
Use Case:
| Supporting Material: | ISO 26262 |
|---|---|

⌋

 Safe Update or Safe Upgrade
⌈
| Description: | AUTOSAR shall provide mechanisms to support correct update and upgrade of multiple platform and non-platform applications with mixed criticality. |
|---|---|
| Rationale: | AUTOSAR supports updatability during the life cycle of the machine and therefore the platform is responsible to ensure that these updates are performed correctly and safely. |
| Applies To: | FO |

Dependencies:
Use Case:
| Supporting Material: | ISO 26262 |
|---|---|

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 功能性 Safety 需求
*原文标题：Functional Safety Requirements*

AUTOSAR shall provide mechanisms to support safe initialization of application software.
  Upstream requirements: ,
⌈
| Description: | AUTOSAR shall provide mechanisms to support safe initialization of application software. |
|---|---|
| Rationale: | Safe initialization of the underlying hardware and the AUTOSAR Platforms and the application software is required to ensure the intended functionality. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | SUC_02 |
| Supporting Material: | - |

⌋

 AUTOSAR shall provide safety mechanisms for embedded middleware, application software and their respective configuration data.
  Upstream requirements: ,
⌈
| Description: | AUTOSAR shall provide safety mechanisms for embedded middleware, application software and their respective configuration data. |
|---|---|
| Rationale: | Due to the random hardware failures in the memory unit, the data integrity is required to be verified to ensure no loss of data has occurred over time during operation, stand-by or powered off and has not been tampered with. Note: Not with respect to cybersecurity. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | SUC_02, SUC_06 |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Technical Safety 需求
*原文标题：Technical Safety Requirements*

Some of the following requirements are extracted from the dedicated requirements specifications, the extracted requirements are not named `RS_SAF`. The source document is mentioned within the chapter. The requirements named `RS_SAF` are to be consolidated with the corresponding target specification, so that this chapter does not contain any own requirements in the upcoming releases anymore.

### 12. AUTOSAR Foundation

### 13. Health Monitoring (HM)

Health Monitoring shall provide an Alive Supervision (State: DRAFT; Upstream Requirements: )

| Description: | Health Monitoring shall check if the frequency of reaching a given Checkpoint in a Supervised Entity matches specified limits. |
|---|---|
| Rationale: | To detect if a periodic function is executed periodically according to specification/design. |
| AppliesTo: | AP, CP |
| Dependencies: | - |
| Use Case: | A safety critical application with alive supervision get stuck at some point in time during execution. HM detects that the supervised application is not alive. |
| Supporting Material: | - |

 Health Monitoring shall provide a Logical Supervision (State: DRAFT; Upstream Requirements: , , )

| Description: | Health Monitoring shall check if the sequence of Checkpoints in a Supervised Entity at runtime is the same as the one that is specified. This shall include: |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. AUTOSAR Adaptive Platform

### 15. 功能性 Cluster：Platform Health 管理 (PHM)
*原文标题：Functional Cluster: Platform Health Management (PHM)*

Platform Health Management at highest safety integrity level (State: DRAFT; Upstream Requirements: )

| Description: | Platform Health Management shall be implemented at least according the highest safety integrity level from any process that is supported on the platform. |
|---|---|
| Rationale: | Platform Health Management is responsible for ensuring part of the safe execution of safety relevant processes/applications, it should at least be developed with the highest ASIL as the process/application that is being executed. |
| Dependencies: | - |
| Use Case: | An ASIL C, B and QM application is running on the AUTOSAR Adaptive Platform. PHM shall supervise the ASIL C and B application, therefore PHM shall be implemented with an ASIL C. |
| Supporting Material: | - |

 If supervision of State Management fails then Platform Health Management shall trigger a watchdog reset. (State: DRAFT; Upstream Requirements: , , )

| Description: | If supervision of State Management fails then Platform Health Management shall trigger a watchdog reset. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能性 Cluster：Execution 管理 (EM)
*原文标题：Functional Cluster: Execution Management (EM)*

Execution Management shall set-up one process for the execution of each Modelled Process. (Upstream Requirements: )

| Description: | For each instance of an Executable, Execution Management shall allocate one POSIX process. Furthermore process specific properties (like priority, scheduling policy and access rights) shall be assigned based on the Execution Manifest. |
|---|---|
| Rationale: | Isolation of Executable instances from each other. |
| Dependencies: | - |
| Use Case: | Safety and security related applications require isolation. |
| Supporting Material: | - |

 Execution Management shall support the configuration of OS resource budgets for process and groups of processes. (Upstream Requirements: )

| Description: | Based on the Execution Manifest, Execution Management shall allocate OS resources to the Process. The allocation shall be possible for single Process and groups of Processes. |
|---|---|
| Rationale: | Real-time guarantees shall be defined |
| Dependencies: | - |
| Use Case: | Like cgroups (based on containers which contain one or more processes) and ulimit. |
| Supporting Material: | - |

 Execution Management shall support the binding of all threads of a given process to a specified set of processor cores.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 功能性 Cluster：状态管理 (SM)
*原文标题：Functional Cluster: State Management (SM)*

State Management shall be implemented at least according to the highest safety integrity level from any process that is managed by State Management. (Upstream Requirements: )

| Description: | State Management shall be implemented at least according to the highest safety integrity level from any process that is managed by State Management. |
|---|---|
| Rationale: | State Management manages state changes and recovery actions of all the processes and therefore needs to be developed and executed according to the same safety standards as the highest rated safety application managed by State Management in the system. |
| Dependencies: | - |
| Use Case: | An ASIL C, B and QM Application is running on the adaptive Platform. State Management shall manage the ASIL C, B and the QM application, therefore State Management shall be implemented with an ASIL C. |
| Supporting Material: | - |

 State Management shall coordinate recovery actions. (Upstream Requirements: , )

| Description: | State Management shall coordinate recovery actions. |
|---|---|
| Rationale: | State Management is a central functional cluster to which Platform Health Management reports supervision failures and State Management decides which recovery action (e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Operating 系统接口 (OSI)
*原文标题：Operating System Interface (OSI)*

The Operating System shall provide mechanisms for system memory budgeting. (Upstream Requirements: )

| Description: | The Operating System shall provide mechanisms to configure memory budgeting for each Process or for groups of Processes. |
|---|---|
| Rationale: | In order to ensure resource availability in the context of a multi-Process system, the system integrator/architect may require a set of tools to configure memory budgeting for each Process or for groups of Processes. |
| Dependencies: | - |
| Use Case: | security - protection against DoS attacks - resource starvation types. |
| Supporting Material: | - |

 The Operating System shall provide mechanisms for CPU time budgeting. (Upstream Requirements: )

| Description: | The Operating System shall provide mechanisms to configure resource budgeting in terms of CPU time for each Process or group of Processes. |
|---|---|
| Rationale: | In order to ensure schedulability in the context of a multi-Process system, the system integrator/architect may require a set of tools to configure CPU time allocated for each Process or for groups of Processes. |
| Dependencies: | - |
| Use Case: | security - protection against DoS attacks - resource starvation types. |
| Supporting Material: | - |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 功能性 Cluster：持久化 (PER)
*原文标题：Functional Cluster: Persistency (PER)*

Detection of Data Corruption (Upstream Requirements: )

| Description: | Persistency shall be able to detect data corruption in persistent memory. |
|---|---|

Additional Information:

The corruption may be caused by systematic or random failures. To be able to detect corrupted data, some redundancy is needed, which can be anything from a checksum to a full copy. Additionally, an adaptive application can register for receiving information about data corruption.

The actual mechanisms used for ensuring data consistency are subject to configuration.

 Recovery of Corrupted Data (Upstream Requirements: )

| Description: | Persistency shall be able to recover data that was corrupted. |
|---|---|

Additional Information:

To be able to recover corrupted data, a redundant copy of the data is needed. Additionally, an adaptive application can register for receiving information about data recovery.

The actual mechanisms and the granularity of redundancy are subject to configuration.

### 20. 功能性 Cluster：Communication 管理 (CM)
*原文标题：Functional Cluster: Communication Management (CM)*

The Communication Management shall protect the transmission of events using E2E protocol. The E2E Protection has to be executed behind the event API. (State: DRAFT; Upstream Requirements: )

| Description: | Application developers shall be able to have an E2E-protected event-based communication, regardless of the bus used. |
|---|---|
| Rationale: | It shall be ensured that communication failure modes introduced by the communication bus (on the E2E-protected serialized data) which are detectable by the E2E protocol are detected by Communication Management. Note: It depends on the used communication type (periodic/ non-periodic) and the application which failure modes are to be detected. |
| Dependencies: | - |
| Use Case: | Application "A" receives an E2E-protected speed (as a part of an event). In case of a corruption or a loss, this is detected by a periodic polling by application and by E2E checks (CRC and a stuck-at counter), reported by Communication Management by E2E result. As a result, the application could enforce the safe state of its function, e.g. refusing to open tail gate. |
| Supporting Material: |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 功能性 Cluster：Update and 配置管理 (UCM)
*原文标题：Functional Cluster: Update and Configuration Management (UCM)*

UCM Recovery Mechanism in case of Failed Activation (Upstream Requirements: )

| Description: | UCM shall assure that, in case of failed update process, the system will recover to the state it was before the update process started. |
|---|---|
| Rationale: | A failed update shall not result in a loss of desired functionality of the AUTOSAR Adaptive Platform. |
| Dependencies: |  |
| Use Case: | After a failed remote update the AUTOSAR Adaptive Platform recovers to the previous system state. |
| Supporting Material: | - |

 UCM Software Package Consistency Protection (Upstream Requirements: )

| Description: | UCM shall check the consistency of the received Software Package. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall make sure that the Software Package can be installed safely. |
| Dependencies: | - |
| Use Case: | To detect possible errors which might have occurred during creation of the Software Package, UCM shall check that provided Software Package meta-data and content match. |
| Supporting Material: | - |

 UCM Safe Recovery from Unexpected Interruption (Upstream Requirements: )

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. AUTOSAR ClassicPlatform

### 23. 基础软件：Watchdog 管理器 (WDGM)
*原文标题：Basic Software: Watchdog Manager (WDGM)*

Watchdog Manager inherits highest safety integrity level from Software Component.
  Upstream requirements:
⌈
| Description: | Watchdog Manager shall inherit at least the highest safety integrity level from any Software Component that is running on the platform. |
|---|---|
| Rationale: | Watchdog Manager is responsible for ensuring part of the safe execution of safety relevant software components/applications, it should at least be developed with the highest ASIL as the software component/application that is being supervised. |
| Applies To: | CP |
| Dependencies: | WdgIf, Wdg Drv |
| Use Case: | An ASIL C, B and QM Application is running on the Classic Platform. WdgM shall supervise the ASIL C and B application, therefore WdgM shall be implemented with an ASIL C. |
| Supporting Material: | - |

⌋

 Watchdog Manager monitors aliveness.
  Upstream requirements:
⌈
| Description: | Watchdog Manager shall monitor the aliveness of safety relevant software components/applications and modules. |
|---|---|
| Rationale: | Alive Supervision is one of the mechanisms of Watchdog Manager by which it monitors safety relevant software components/applications and modules. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 基础软件：Operating 系统 (OS)
*原文标题：Basic Software: Operating System (OS)*

Memory Protection of Applications
  Upstream requirements:
⌈
| Description: | The Operating System shall prevent applications from performing write accesses outside their assigned memory regions |
|---|---|
| Rationale: | To achieve freedom from interference it is necessary to prevent applications from adversely affecting other applications. Access to private memory which is reserved for applications shall be protected against un-allowed write accesses from other applications. |
| Applies To: | CP |
| Dependencies: | OSEK OS |
| Use Case: | A QM application and a ASIL application are executed on the same machine. OS prevents the QM application from changing the memory assigned to the safety critical application. |
| Supporting Material: | - |

⌋

 Timing Protection of Applications
  Upstream requirements:
⌈
| Description: | The Operating System shall not allow a timing fault in any application to propagate. A timing fault may be caused by |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. E2E Protection

E2E Protection with E2E Transformer and E2E Library
  Upstream requirements:
⌈
| Description: | Communication Service, E2E Transformer and E2E Library shall provide mechanisms for detection of errors during the exchange of information among software components, by considering all faults listed in the ISO standard (ISO 26262:6-2018 D.2.4). |
|---|---|

The Result of the E2E check needs to be published to the application.

If E2E Transformer is used RTE Interfaces need to be developed according to the same ASIL Level as the Application and data being transformed.
| Rationale: | This requirement is created initially to fulfill the goal of AUTOSAR in supporting the development of safety-related systems by offering safety measures and mechanisms. As users may build project-specific applications, it is only possible for AUTOSAR to provide the safe exchange of information. ISO 26262 is mentioned and to be followed, as it is the international standard for functional safety of E/E systems for automotive. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. References

### 27. 附录
*原文标题：Appendix*

### 28. Change history of AUTOSAR traceable items and 需求
*原文标题：Change history of AUTOSAR traceable items and requirements*

### 29. AUTOSAR Release R22-11

### 30. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

### 31. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

### 32. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

### 33. AUTOSAR Release R23-11

### 34. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 35. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

### 36. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

### 37. AUTOSAR Release R24-11

### 38. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 39. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 40. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 41. AUTOSAR Release R25-11

### 42. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 43. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

### 44. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
