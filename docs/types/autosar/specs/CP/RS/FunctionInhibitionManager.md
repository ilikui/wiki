# Requirements on Function Inhibition Manager (`FunctionInhibitionManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 081 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_FunctionInhibitionManager_081\AUTOSAR_CP_RS_FunctionInhibitionManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_FunctionInhibitionManager_081\AUTOSAR_CP_RS_FunctionInhibitionManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_FunctionInhibitionManager_081\zzgen\CP_RS_FunctionInhibitionManager.complete.txt`

## 文档简介

The goal of AUTOSAR in particular working on the Function Inhibition Manager and this document is to define requirements on the functionality of the FIM. The focus is on the scope of the FIM but also the distinctions to other control mechanisms in AUTOSAR, such as RTE, and also to what extent elements of it have to be configurable and what preliminaries they shall comply with to meet the tailoring requirements.

If such the definition of these new elements is not part of this work package. Nevertheless the information about basic software elements additionally required shall be given to related work groups.

Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For implementation of the basic software modules in safety relevant systems, it shall be checked if additional requirements are necessary.

## 章节详细内容

### 1. 范围 of document
*原文标题：Scope of document*

The goal of AUTOSAR in particular working on the Function Inhibition Manager and this document is to define requirements on the functionality of the FIM. The focus is on the scope of the FIM but also the distinctions to other control mechanisms in AUTOSAR, such as RTE, and also to what extent elements of it have to be configurable and what preliminaries they shall comply with to meet the tailoring requirements.

If such the definition of these new elements is not part of this work package. Nevertheless the information about basic software elements additionally required shall be given to related work groups.

Constraints

First scope for specification of requirements on basic software modules are systems which are not safety relevant. For implementation of the basic software modules in safety relevant systems, it shall be checked if additional requirements are necessary.

### 2. How to read this document

Each requirement has its unique identifier starting with the prefix "BSW" (for "Basic Software"). For any review annotations, remarks or questions please refer to this unique ID rather than chapter or page numbers!

### 3. Conventions used

* The representation of requirements in AUTOSAR documents follows the table specified in .
* In requirements, the following specific semantics are used (taken from Request for Comment RFC 2119 from the Internet Engineering Task Force IETF)

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求结构
*原文标题：Requirements structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

Functional Requirements:

* Configuration (which elements of the module need to be configurable)
* Initialization
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

Non-Functional Requirements:

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling,...)
* ...

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| Activity state | The activity state is the status of a software component being executed. The activity state results from the permission state as a precondition and also physical enable conditions. It is not calculated by the FIM and not available as a status variable. It could only be derived from local information within a software component. |
| API | Application Programming Interface |
| BSW | Basic Software |
| DEM | Diagnostic Event Manager |
| ECU | Electronic Control Unit |
| EOL | End Of Line |
| ESD | Electro Static Disturbance |
| ESP | Electronic Stability Program |
| FID | Function Identifier |
| FIM | Function Inhibition Manager |
| Functionality | Functionality comprises User-visible and User-non-visible functional aspects of a system (see ). |

In addition to that - in the FIM context - a functionality can be built up of the contents of one, several or parts of runnable entities with the same set of permission / inhibit conditions. By means of the FIM, the inhibition of these functionalities can be configured and even modified by calibration. Each functionality is represented by a unique function ID.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Requirement 规范
*原文标题：Requirement Specification*

### 7. 功能概述
*原文标题：Functional Overview*

The Function Inhibition Manager is responsible for providing a control mechanism for software components and the functionality therein. In this context, a functionality can be built up of the contents of one, several or parts of runnable entities with the same set of permission / inhibit conditions. By means of the FIM, the inhibiting of these functionalities can be configured and even modified by calibration. Therefore, the adaptation of a functionality into a new system context with modified physical boundary conditions and influences is significantly enhanced.

A functionality in the sense of the FIM and a runnable entity are different and independent types of classifications. Runnable entities are mainly featured by their scheduling requirements. In contrast to that, functionalities are classified by their inhibit conditions. The services of the FIM focus on applications in the SW-Cs, however, they are not limited to them. Functionalities of the BSW can also use the FIM services.

Note, there is no functional relationship between RTE and FIM.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 功能性需求
*原文标题：Functional Requirements*

### 9. 配置
*原文标题：Configuration*

### 10. [SRS_Fim_04701

The Functionalities supervised by the FIM shall be defined by static configuration]

 The Functionalities supervised by the FIM shall be defined by static configuration
⌈
| Description: | The set of functionalities which should be supervised by the Function Inhibition Manager (FIM) shall be defined by static configuration. |
|---|---|
| Rationale: | Only functionalities being supervised via FID can make use of the FIM functionality/services (configurable permission state). The FIM has to deal with the FIDs of the functionalities to provide the automatic checking-mechanism for permission of execution on the demanded sections. |

Applies To:
Dependencies:
| Use Case: | The number of FIDs to be handled by the FIM strongly depends on the application. Therefore, the list of FIDs shall be defined by configuration. |
|---|---|
| Supporting Material: | - |

⌋

### 11. [SRS_Fim_04702

The FIM shall support different inhibit options]

 The FIM shall support different inhibit options
⌈
| Description: | The FIM shall support different inhibit options. The possible inhibit options are based on Dem_EventStatusExtendedType (TestFailed, Passed, ...) being provided by the DEM. The FIM shall at least support inhibition due to event state "failed". The exchange of information between DEM and FIM is ensured by forwarding the extended event status. The reactions of the FIM can only be based on that. |
|---|---|
| Rationale: | The most common reaction upon detected failure is to deactivate affected functionalities. Therefore, the FIM shall support inhibit due to "failed". |

Applies To:
Dependencies:
| Use Case: | If an important sensor fails, e.g. adaptation functionality shall be stopped in order to prevent wrong adaptation values. |
|---|---|
| Supporting Material: | AUTOSAR_SWS_DEM |

⌋

### 12. [SRS_Fim_04719

Mechanism for summarized diagnostic event states shall be provided]

 Mechanism for summarized diagnostic event states shall be provided
⌈
| Description: | The FIM shall provide a mechanism to handle summarized diagnostic event states. By a summarized diagnostic event state the calculation of a combined fault out of several individual faults in the software component is meant. However, it is not outlined whether this requirement shall be achieved by means of configuration process or by implementation in the FIM. |
|---|---|
| Rationale: | Easier calibration, robust against changes in the diagnostic package and reduced resources. |

Applies To:
Dependencies:
| Use Case: | All faults that indicate a failed sensor. |
|---|---|
| Supporting Material: | - |

⌋

### 13. [SRS_Fim_04706

Individual configuration of inhibit conditions of functionalities shall be available]

 Individual configuration of inhibit conditions of functionalities shall be available
⌈
| Description: | The FIM shall be configured per FID to relate events to it in a flexible way. The event - FID (inhibit) relation shall be changeable by calibration within configured limits, e.g. number of FIDs, supported inhibit masks, etc. Note, that summarized events could also be considered here ( Mechanism for summarized diagnostic event states shall be provided). |
|---|---|
| Rationale: | The result of a fault is the reduction of available functionality. This must be configured by the related information of faults and SW-components. |

Applies To:
Dependencies:
| Use Case: | Fault of oxygen sensor will lead to the reporting of a respective event and then to a reduced functionality of the catalyst diagnostics. |
|---|---|
| Supporting Material: | - |

⌋

### 14. 初始化
*原文标题：Initialization*

### 15. [SRS_Fim_04712

The permission states at start up shall be initialized]

 The permission states at start up shall be initialized
⌈
| Description: | Based on all restored event status information (not only events stored in the fault memory) of the DEM, the FIM needs to compute the permission state for all FIDs at the initialization. |
|---|---|
| Rationale: | Necessity for the FIM to get notified of events which may affect the permission of FIDs. |

Applies To:
Dependencies:
| Use Case: | - |
|---|---|
| Supporting Material: | - |

⌋

### 16. Normal Operation

### 17. [SRS_Fim_04700

Information about the FID state]

 Information about the FID state
⌈
| Description: | The FIM shall provide interfaces to SW-components and/or BSW modules (e.g. IUMPR calculation in the DEM) so that they are able to query their permission status or getting informed about changes in the permission status. |
|---|---|
| Rationale: | Other BSW modules and software components shall be independent from the implementation of the FIM. The only relevant information is the permission status. |

Applies To:
Dependencies:
| Use Case: | An application will exeucte a certain control logic only in case the system is in a state where the execution of the functionality itself allows it. If one ore more diagnostic monitor results are in an error state, the function itself shall not be executed anymore. The Fim decouples the combination of one ore more diagnostic monitor results from the dependency to a function that is implemented in an SWC or BSW module. Examples are: |
|---|---|

* The catalyst monitoring function shall not be executed if the oxygen sensor was detected as failed. If the catalyst monitoring function is controlled via FID the reported malfunction of the sensor shall cause the FID to be inhibited.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. [SRS_Fim_04709

The permission state shall be evaluated before executing functionalities]

 The permission state shall be evaluated before executing functionalities
⌈
| Description: | A functionality which is under supervision of the Function Inhibition Manager by using an FID shall query the FIM for its permission. If the FID is released, the functionality may be executed if all other enable conditions are met. On the other hand, if the FID is inhibited, the functionality must not be executed. |
|---|---|
| Rationale: | Main functionality |

Applies To:
Dependencies:
| Use Case: | A functionality which is inactive must be prevented from executing. Since specification of FIM aims at notification mechanism, the permission is queried within the application SW. There, all enable conditions need to be checked. |
|---|---|
| Supporting Material: | - |

⌋

### 19. [SRS_Fim_04713

Methods for the computation of permission states shall be provided]

 Methods for the computation of permission states shall be provided
⌈
| Description: | The FIM shall provide methods for the computation of permission status of an individual FID. The permission status yields from the diagnostic event states related to the FID. These event states are reported to the DEM and then forwarded to the FIM (SRS_Fim_04700 |
|---|---|
| Rationale: | The focus of this requirement is on providing the methods for the computation of the permission state. It shall not be explicitly required to store the permission state of an FID or to compute it upon request for permission. |

Applies To:
Dependencies:
| Use Case: | Suppose FID_alpha shall be inhibited by event_1 or event_2, hence the permission state of FID_alpha depends on the status of event_1 and event_2. Upon request of permission of FID_alpha the states of event_1 and event_2 could be evaluated. Alternatively, the status information of FID_alpha could be provided which is updated whenever event_1 or event_2 is changed. |
|---|---|
| Supporting Material: | - |

⌋

### 20. [SRS_Fim_04717

The permission states shall be updated]

 The permission states shall be updated
⌈
| Description: | The FIM shall provide an API to the DEM in order to get informed about relevant status changes of reported events. Then, the status of the relevant FIDs can be updated. |
|---|---|
| Rationale: | Necessity for the FIM to get notified of events which may affect the permission of FIDs. |

Applies To:
Dependencies:
| Use Case: | - |
|---|---|
| Supporting Material: | - |

⌋

### 21. [SRS_Fim_04723

The FIM shall provide a boolean configuration option per FID.]

 The FIM shall provide a boolean configuration option per FID.
⌈
| Description: | The FIM shall provide a boolean configuration option per FID. |
|---|---|
| Rationale: | Rationale: Use case-specific configuration of functionality, only required functionality may be executed in ECU. |

Applies To:
Dependencies:
| Use Case: | Use Case: Variant coding. |
|---|---|
| Supporting Material: | - |

⌋

### 22. [SRS_Fim_04721

OBD Functionalities shall be supported]

 OBD Functionalities shall be supported
⌈
| Description: | For OBD, the in-use-performance on monitors needs to be tracked. For that purpose, records are generated by the DEM. In order to consider the impact of inhibiting faults on the monitors, the FIM shall provide access on its configuration data to the DEM. |
|---|---|
| Rationale: | DEM needs access to inhibit relations for the handling of IUMPR data. |

Applies To:
Dependencies:
| Use Case: | - |
|---|---|
| Supporting Material: | - |

⌋

### 23. [SRS_Fim_04724

Mechanism shall be provided to track the events that cause function inhibitions.]

 The FIM shall provide a mechanism to track the events that cause function inhibitions.
⌈
| Description: | The FIM shall provide a mechanism to track and store the specific diagnostic events that cause the inhibition of a functionality (FID). The FIM shall record these inhibiting events in the order they are detected by the FIM. The maximum number of tracked events per FID shall be statically configurable. |
|---|---|
| Rationale: | To support tracking analysis and central error management in complex vehicle architectures, it is necessary to identify the exact triggering event among multiple possible inhibit conditions. This prevents ambiguity when multiple configured faults are active simultaneously. |

Applies To:
Dependencies:
| Use Case: | A functionality (FID) is inhibited by one of several possible sensor faults (Events). A central error management application or a diagnostic tester want to identify the exact x-event that triggered the FID's inhibition. As an example: |
|---|---|

* ECU 1 has five DTCs, all mapped to one FID that controls an outgoing signal.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 关机 Operation
*原文标题：ShutDown Operation*

No requirement

### 25. Fault Operation

No requirement

### 26. Non-Functional 需求
*原文标题：Non-Functional Requirements*

### 27. 时序需求
*原文标题：Timing Requirements*

No requirements

### 28. Resource Usage

No special requirement. Usage depends on implementation and hardware.

### 29. References

### 30. Deliverables of AUTOSAR

### 31. Related standards and norms

### 32. ITEA-EAST

D1.5-General Architecture; ITEA/EAST-EEA, Version 1.0; chapter 3, page 72 et seq.

 D2.1-Embedded Basic Software Structure Requirements; ITEA/EAST-EEA, Version 1.0 or higher

 D2.2-Description of existing solutions; ITEA/EAST-EEA, Version 1.0 or higher.

### 33. 附录
*原文标题：Appendix*

### 34. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 35. Traceable item history of this document according to AUTOSAR Release R26-11

### 36. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

| Number | Heading |
|---|---|
| The FIM shall provide a mechanism to track the events that cause function inhibitions. |  |

### 37. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

none

### 38. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

none

### 39. Traceable item history of this document according to AUTOSAR Release R25-11

### 40. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 41. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 42. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 43. Traceable item history of this document according to AUTOSAR Release R24-11

### 44. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 45. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| Information about the FID state |  |

### 46. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 47. Traceable item history of this document according to AUTOSAR Release R23-11

### 48. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 49. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 50. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 51. Traceable item history of this document according to AUTOSAR Release R22-11

### 52. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

none

### 53. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| An Interface for querying the FID permission status shall be provided |  |
| The Functionalities supervised by the FIM shall be defined by static configuration |  |
| The FIM shall support different inhibit options |  |
| Individual configuration of inhibit conditions of functionalities shall be available |  |
| The permission state shall be evaluated before executing functionalities |  |
| The permission states at start up shall be initialized |  |
| Methods for the computation of permission states shall be provided |  |
| The permission states shall be updated |  |
| Mechanism for summarized diagnostic event states shall be provided |  |
| OBD Functionalities shall be supported |  |
| The FIM shall provide a boolean configuration option per FID. |  |

### 54. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none
