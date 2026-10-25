# Requirements on Intrusion Detection System (`IntrusionDetectionSystem`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 976 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_IntrusionDetectionSystem_976\AUTOSAR_FO_RS_IntrusionDetectionSystem.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_IntrusionDetectionSystem_976\AUTOSAR_FO_RS_IntrusionDetectionSystem.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_IntrusionDetectionSystem_976\zzgen\FO_RS_IntrusionDetectionSystem.complete.txt`

## 文档简介

This document specifies requirements for the AUTOSAR Intrusion Detection System (IDS) . The following section gives an overview of the elements of the IDS and in which AUTOSAR document the element is described.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements for the AUTOSAR Intrusion Detection System (IDS) . The following section gives an overview of the elements of the IDS and in which AUTOSAR document the element is described.

### 2. 通用架构 of a distributed onboard IDS
*原文标题：General Architecture of a distributed onboard IDS*

An onboard IDS according to the AUTOSAR standard consists of the following elements:

* Security Sensors
* Intrusion Detection System Manager (IdsM)
* Security Event Memory (Sem)
* Intrusion Detection System Reporter (IdsR)

 shows the principle architecture of the distributed onboard IDS.

The elements of the onboard IDS are briefly described in the following sections.

### 3. Security Sensors and Security Events

AUTOSAR BSW modules, CDD and SWC can act as Security Sensors. Security sensors report Security Events (SEv) to the IdsM. AUTOSAR standardizes a subset of Security Event Types which can be reported by the AUTOSAR BSW. Each BSW SWS lists the Security Event Types which are reported by the respective module as described in SWS BSW General . An overview of the Security Event Types which are standardized by AUTOSAR is available via the General Definition Security Events .

SWC and CDD can also report custom Security Event Types which are not standardized in AUTOSAR. The properties of Security Event Types which are reported by specific ECUs can be specified by using the Security Extract (SecXT)  .

### 4. Intrusion 检测系统管理器
*原文标题：Intrusion Detection System Manager*

The IdsM buffers the reported security events. Furthermore the IdsM applies a set of consecutive filters to the reported SEv. A set of consecutive filters is called a Filter Chain. If SEv pass their Filter Chain they are regarded as Qualified Security Events (QSEv). Depending on the configuration the IdsM can

* pass the QSEv to a Security Event Memory (Sem) to persist it on the local ECU.
* and/or serialize the QSEv and transmit it to the IdsR.

In this document the system requirements of the IdsM are specified. The SWS IdsM CP  specifies the software requirements for the Classic Platform IdsM. The SWS IdsM AP  specifies the software requirements for the Adaptive Platform IdsM.

### 5. Intrusion 检测系统 Reporter
*原文标题：Intrusion Detection System Reporter*

The Intrusion Detection System Reporter (IdsR) receives the QSEv from the IdsM instances of the different ECUs. The communication protocol between the IdsM instances and the IdsR is specified in the IdsM protocol specification . The IdsR should typically further enrich the received data e.g. with geo-position. Depending on the needs of the OEM the data can be propagated to a SOC for further analysis in a SIEM solution. A specification of the IdsR is not provided by AUTOSAR.

### 6. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 7. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to this document that are not included in the AUTOSAR Glossary .

### 8. Acronyms

| Acronym | Description: |
|---|---|
| Filter Chain | A set of consecutive filters which is applied to Security Events- |
| Intrusion Detection System | An Intrusion Detection System is a security control which detects and processes security events. |
| Intrusion Detection System Manager | The Intrusion Detection System Manager handles security events reported by security sensors. |
| Intrusion Detection System Reporter | The Intrusion Detection System Reporter handles qualified security events received from Idsm instances. |
| Security Extract | The Security Extract specifies which security events are handled by IdsM instances and their configuration parameters. |
| Security Event Type | A security event type can be identified by its security event type ID. Instances of security event types are called security events and share the same security event type ID. |
| Security Events | Onboard Security Events are instances of security event types which are reported by BSW or SWC to the IdsM. |
| Security Event Memory | A user defined diagnostic event memory which is independent from the primary diagnostic event memory. |
| Security Sensors | BSW or SWC which report security events to the Idsm. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Abbreviations

| Abbreviation | Description: |
|---|---|
| IDS | Intrusion Detection System |
| IdsM | Intrusion Detection System Manager |
| IdsR | Intrusion Detection System Reporter |
| SecXT | Security Extract |
| SEv | Security Event |
| QSEv | Qualified Security Event |
| Sem | Security Event Memory |
| SIEM | Security Incident and Event Management |
| SOC | Security Operation Centre |

### 10. 需求规范
*原文标题：Requirements Specification*

The following use cases drive the requirements for the onboard IDS.

* UC1: Collect data about security events (SEv)
* UC2: Filter qualified onboard security events (QSEv) from security event data
* UC3: Locally store QSEv records
* UC4: Forward QSEv to ECU with SOC connection
* UC5: Provide access to locally stored QSEv records
* UC6: Re-configure qualification parameters during operation
* UC7: Update IdsM configuration
* UC8: Protect IdsM configuration
* UC9: Protect IdsM data in transit and in rest

The use case IDs are referenced from the following requirements.

 shows an abstract functional architecture of the IDS. The principal allocation of the functional elements refers to both the CP and AP although the actual technical architecture differs as outlined in the respective SWS. The figure shows the overall functional elements of the IDS and which functional elements are covered by the IdsM.

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. 初始化
*原文标题：Initialization*

Initialization of the IdsM
⌈
| Description: | The IdsM qualification rules shall get initialized at start-up |
|---|---|
| Rationale: | The IdsM needs configuration information to perform its operation. Therefore, this information shall get recovered from NVM and initialized before it starts its processing operation. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC8 |
| Supporting Material: | - |

⌋

### 13. Reporting of SEv

Provide Interface for reporting SEv
⌈
| Description: | The IdsM shall provide interfaces for reporting SEv. The interfaces shall allow to report the following SEv properties: |
|---|---|

* Security event type: Uniquely identifies the security event type
* Context data: Optional data which can be used to analyze the security event in the SOC.
* Timestamp: Optional timestamp provided by the sensor.
* Count: Optional count provided by the sensor.
| Rationale: | Security events can be reported by basic software, complex device drivers and application software to the IdsM. |
|---|---|
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC1 |
| Supporting Material: | - |

⌋

### 14. 缓冲 of reported Sev
*原文标题：Buffering of reported Sev*

IdsM shall buffer reported SEv for callers
⌈
| Description: | The IdsM shall buffer reported SEv for callers |
|---|---|
| Rationale: | The IdsM shall buffer the SEv and context data for the SEv sensors until the data is completely processed by the IdsM. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC1 |
| Supporting Material: | - |

⌋

### 15. Qualification of SEv

### 16. Reporting 模式
*原文标题：Reporting Mode*

Configure reporting mode per Security Event Type and IdsM instance
⌈
| Description: | The IdsM shall support to configure the reporting mode for each Security Event Type handled by an IdsM instance. The reporting mode shall include options to (a) turn off processing of SEvs, (b) discard context data, and (c) bypass subsequent filters. |
|---|---|
| Rationale: | The reporting mode allows to control whether the event is of interest at all and whether it should be further processed. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC2 |
| Supporting Material: | - |

⌋

| Reporting Mode Level | Related Behavior |
|---|---|
| OFF | IdsM shall discard the SEv without further processing. |
| BRIEF | If the SEv has been reported including context data, IdsM shall shall discard the context data from further processing, transmission, and storage. |
| DETAILED | If the SEv has been reported including context data, IdsM shall keep the context data for potential transmission or persisting of the QSEv. |
| BRIEF_BYPASSING_FILTERS | IdsM shall report or persist the SEv without context data without further application of any filter chain. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Filter Chains

Provide configurable filter chains for qualifying SEv
⌈
| Description: | The IdsM shall support the qualification of SEv by applying a configurable chain of filters to the reported SEv. One configured sequence of filters is called Filter Chain. |
|---|---|
| Rationale: | Not always a single SEv shall be directly handled as a qualified security event. Depending on project specific security analysis one or more filters can be applied to the reported SEv.If an SEv passes all filters of the applied filter chain, the event is qualified (i.e., it is a QSEv). The event will then be transmitted and/or persisted. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC2 |
| Supporting Material: | - |

⌋

 Provide multiple filter chains
⌈
| Description: | The IdsM shall support the creation of multiple Filter Chains and the individual assignment of each SEv of a given Security Event Types to a specific filter chain per IdsM instance. |
|---|---|
| Rationale: | Different Security Event definitions may require different filter chains. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC2 |
| Supporting Material: | - |

⌋

### 18. Machine 状态 Filter
*原文标题：Machine State Filter*

Support machine state filter
⌈
| Description: | The IdsM shall support the ECU/machine state depended handling of SEvs. |
|---|---|
| Rationale: | Certain event definitions may be relevant only in certain states and should be ignored in other states. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC2 |
| Supporting Material: | - |

⌋

### 19. Sampling Filter

Support sampling filter
⌈
| Description: | The IdsM shall support the sampling of SEvs. |
|---|---|
| Rationale: | The data rate for security events that can occur with a very high frequency can be reduced. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC2 |
| Supporting Material: | - |

⌋

### 20. Aggregation Filter

Support Aggregation filter
⌈
| Description: | The IdsM shall support to aggregate multiple SEvs into one QSEv that indicates how often the aggregated SEv occured. |
|---|---|
| Rationale: | Aggregation of events can reduce resource consumption for SEvs occurring at a high frequency, while maintaining information on the total number of event occurrences. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC2 |
| Supporting Material: | - |

⌋

### 21. Threshold Filter

Support Threshold filter
⌈
| Description: | The IdsM shall support to forward SEvs only, if they occurred more frequently than a configurable threshold within a configurable interval. |
|---|---|
| Rationale: | SEvs may be triggered on a regular basis by normal operation which should not be reported, however, a deviation from the normal frequency might indicate an incident that should be reported. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC2 |
| Supporting Material: | - |

⌋

### 22. Timestamping of Events

Event Timestamps
⌈
| Description: | IdsM shall provide mechanisms to add timestamps to SEvs |
|---|---|
| Rationale: | Analysis of events may require the time of occurrence of events. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC1 |
| Supporting Material: | - |

⌋

 Timestamp Sources
⌈
| Description: | IdsM shall provide mechanisms to let application or sensor software provide timestamps. |
|---|---|
| Rationale: | Project specific applications or sensors may provide more accurate timestamps |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC1 |
| Supporting Material: | - |

⌋

### 23. Propagation of QSEv to the IdsR

The IdsM shall allow to transmit QSEv to the IdsR
⌈
| Description: | IdsM shall allow to transmit the QSEv and context data by using an IDS protocol  which is independent from the underlying bus technology. |
|---|---|
| Rationale: | QSEv are reported by ECUs which can be connected to the rest of the E/E-Architecture with a variety of bus systems. The IdsR can relay events to the SOC. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC4 |
| Supporting Material: | - |

⌋

### 24. Persisting of QSEv

Persist QSEv records
⌈
| Description: | The IdsM shall be able to locally persist QSEvs via a user defined diagnostic memory. The user defined diagnostic memory shall be separate from the main diagnostic memory to allow separate access control and protection of the NVM block which is used to store the QSEv records. (Such a user defined diagnostic memory is also called a Security Event Memory) The following properties of a QSEv shall be persisted: |
|---|---|

* IDS Protocol header which indicates the protocol version and the used protocol options
* Identifier for the instance of the IdsM
* Identifier for the instance of the sensor module
* Identifier for the SEv which was qualified
* Counter which indicates how often the SEv was reported before it was qualified
* Time stamp (optional) which indicates the point in time when the SEv was qualified
* Context data (optional) which provides additional information which can be evaluated in the an SOC, by a diagnostic tester, or by any other security analysis instance which has access rights.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 配置
*原文标题：Configuration*

Configuration of SEv
⌈
| Description: | It shall be configurable which SEv are reported to the IdsM. |
|---|---|
| Rationale: | Depending on a project specific security analysis some SEv are regarded as relevant while other SEv are not regarded as relevant. In order to avoid unnecessary calls to the IdsM by the sensor modules this property shall be configurable per security event type per IdsM instance. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC1 |
| Supporting Material: | - |

⌋

 Configuration of qualification filters for SEv
⌈
| Description: | It shall be configurable which qualification filters are applied to a SEv by the IdsM |
|---|---|
| Rationale: | Depending on a project specific security analysis different qualification filters need to be applied to qualify different SEv types. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC1 |
| Supporting Material: | - |

⌋

 Configuration of persistency handling for QSEv
⌈
| Description: | It shall be configurable if QSEv shall be locally persisted |
|---|---|
| Rationale: | Depending on a project specific security analysis and the available ressources (e.g. NVM) decisions about persisting QSEv will be taken. The respective properties (e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Re-Configuration

Reconfiguration during run-time
⌈
| Description: | Support re-configuration of reporting mode during runtime |
|---|---|
| Rationale: | It shall be possible to change the reporting mode of SEv during runtime. The IdsM shall provide an interface which can be used e.g. by diagnostic routines. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | - |
| Supporting Material: | - |

⌋

### 27. Update of IdsM 配置
*原文标题：Update of IdsM Configuration*

Replacement of complete filter chain configurations
  Status: OBSOLETE
⌈
| Description: | The IdsM shall allow to replace complete filter chain configurations. |
|---|---|
| Rationale: | In situations like end of line programming, ECU initialization in a workshop, or rollout of new updates via OTA it shall be possible to replace complete filter chain configurations |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC7 |
| Supporting Material: | The actual replacement/update can be a standard SW update of a logical block performed by FBL or OTA. |

⌋

### 28. Security related 需求
*原文标题：Security related requirements*

### 29. 基础软件 Security Event 类型
*原文标题：Basic Software Security Event Types*

Basic SW security events
⌈
| Description: | Basic software modules which are regarded as security relevant, shall report security events to the IdsM. |
|---|---|
| Rationale: | Whether basic software modules are regarded as security relevant is discussed and decided by a dedicated AUTOSAR working group. Specification of security event types is done based on the needs of the involved AUTOSAR members. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC1 |
| Supporting Material: | - |

⌋

### 30. IdsM Security Event 类型
*原文标题：IdsM Security Event Types*

IdsM Security Events
⌈
| Description: | The IdsM shall report IdsM specific security events in the following situations: |
|---|---|

* If the IdsM traffic limitation was exceeded
* If the IdsM context buffers are exhausted
* If the IdsM event buffers are exhausted
| Rationale: | The IdsM shall provide means to support his own security events |
|---|---|
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC1 |
| Supporting Material: | - |

⌋

### 31. End2End Authenticity of transmitted QSEvs

Authenticity of QSEvs
⌈
| Description: | IdsM shall support authenticating QSEvs including all optional data (e.g., context data, timestamp). |
|---|---|
| Rationale: | Authenticity of events can be ensured. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC9 |
| Supporting Material: | - |

⌋

### 32. Authenticity of stored QSEv records

Support detection of manipulation of QSEv records
⌈
| Description: | The memory stack shall be able to optionally detect manipulation of persisted QSEv records. If a manipulation of QSEv records was detected, the memory stack shall raise a security event. |
|---|---|
| Rationale: | Depending on the security analysis of the OEM it may be required to detect manipulation of QSEv records. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC7 |
| Supporting Material: | - |

⌋

### 33. Availability

Limit event rate and traffic
⌈
| Description: | IdsM shall support limiting the rate of QSEvs transmitted to the IdsR and the bandwidth consumed by these transmissions. |
|---|---|
| Rationale: | Limit network bus load caused by IDS. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | UC9 |
| Supporting Material: | - |

⌋

### 34. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

No content

### 35. References

### 36. 附录
*原文标题：Appendix*

### 37. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 38. Traceable item history of this document according to AUTOSAR Release R25-11

### 39. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 40. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| Initialization of the IdsM |  |
| IdsM shall buffer reported SEv for callers |  |
| Persist QSEv records |  |
| Authenticity of QSEvs |  |
| Configuration of SEv |  |
| Configuration of persistency handling for QSEv |  |
| Configuration of propagation handling for QSEv |  |
| Reconfiguration during run-time |  |
| Replacement of complete filter chain configurations |  |
| IdsM Security Events |  |

### 41. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
