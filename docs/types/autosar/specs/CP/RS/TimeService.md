# Requirements on Time Service (`TimeService`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 623 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_TimeService_623\AUTOSAR_CP_RS_TimeService.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_TimeService_623\AUTOSAR_CP_RS_TimeService.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_TimeService_623\zzgen\CP_RS_TimeService.complete.txt`

## 文档简介

This specification defines requirements of the BSW module Time Service.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This specification defines requirements of the BSW module Time Service.

### 2. Constraints

First scope for specification of requirements on basic software modules is systems which are not safety relevant. For implementation of the basic software modules in safety relevant systems, it shall be checked if additional requirements are necessary.

### 3. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Time Service that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| GPT Predef Timer | A GPT Predef Timer is a free running up counter provided by the GPT driver. Which GPT Predef Timer(s) are available depends on hardware (clock, hardware timers, prescaler, width of timer register, ...) and configuration. A GPT Predef Timer has predefined physical time unit and range. |
| Time Service Predef Timer | A Time Service Predef Timer is a free running up counter with predefined physical time unit and range. The hardware timer functionality is based on the corresponding GPT Predef Timer. For each Predef Timer a set of API services is provided by the Time Service module. The user can instantiate any timers (only limited by available memory) and can use the instances completely independently of each other. |
| Timer instance | A timer instance is a data object of an API data type. |
| Reference time | The reference time is a time value stored for each timer instance. |

### 5. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Time Service.

### 6. 功能概述
*原文标题：Functional Overview*

The Time Service module is part of the Services Layer. The module provides services for time based functionality. Use cases are:

* Time measurement
* Time based state machine
* Timeout supervision
* Busy waiting

Several "timer types" - so called "Time Service Predef Timers" - are available, if supported by hardware and enabled by configuration.

Each Predef Timer has a predefined tick duration (physical time unit) and a predefined number of bits (physical range). By this, compatibility of time based functionality is ensured for all platforms which support the required Time Service Predef Timers.

The Time Service Predef Timers are based on so-called "GPT Predef Timers", which are free running hardware timers, provided by the GPT driver.

All services are called by user ("polling mode"). Notifications are not supported.

The Time Service module does not use and distribute all features of the GPT driver. The Time Service module is not the top of a "Timer Stack".

### 7. 功能性需求
*原文标题：Functional Requirements*

### 8. 通用
*原文标题：General*

Different types of Predef Timers shall be supported by the Time Service module
⌈
| Description: | The following types of Predef Timers shall be supported by the Time Service module: |
|---|---|

* Timer 1\mus16bit
* Timer 1\mus24bit
* Timer 1\mus32bit
* Timer 100\mus32bit
| Rationale: | 1\mus: high resolution timer. |
|---|---|

16bit timer: To support 16bit hardware timers.

24bit timer: To support 24bit hardware timers.

32bit timer: To support 32bit hardware timers.

100\mus32bit timer: covers automotive use cases (time span 4.9 days)
Applies To:
| Dependencies: | Specification and configuration of time |
|---|---|
| Use Case: | Time measurement, time based state machine, timeout supervision, busy waiting |
| Supporting Material: | - |

⌋

 The GPT Predef Timers shall be used as time base for the Predef Timers of the Time Service module
⌈
| Description: | The GPT Predef Timers shall be used as time base for the Predef Timers of the Time Service module. |
|---|---|
| Rationale: | The Time Service module has to use a driver module for hardware access |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Read current timer value |
| Supporting Material: | - |

⌋

### 9. 配置
*原文标题：Configuration*

The Time Service module shall make it possible to configure which Predef Timers are enabled
⌈
| Description: | The Time Service module shall make it possible to configure which Predef Timers are enabled. |
|---|---|

For each enabled Predef Timer a set of API services shall be available:

* Reset timer
* Get time span
* Shift timer
* Synchronize timer
* Busy waiting, only for 1\mus timers
| Rationale: | To disable Predef Timers if not needed or related GPT Predef Timers not available. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 10. 初始化
*原文标题：Initialization*

No content

### 11. Normal Operation

The Time Service module shall provide a synchronous service to reset a timer instance
⌈
| Description: | The Time Service module shall provide a synchronous service for each enabled Predef Timer, to reset a timer instance. By this service a reference time is set, which is needed for further services. The service shall have the following parameter: |
|---|---|

* Pointer to a timer instance defined by the user
| Rationale: | Basic functionality. |
|---|---|

Due to performance reasons, this service is required for each Predef Timer. A pointer is used (instead of an identifier) for referencing a timer instance to avoid user dependent configuration of module Time Service. So, the service can be used flexibly just like a library service.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Time measurement, time based state machine, timeout supervision, busy waiting |
| Supporting Material: | - |

⌋

 The Time Service module shall provide a synchronous service to get the time span
⌈
| Description: | The Time Service module shall provide a synchronous service for each enabled Predefined Timer, to get the time span. The time span is the time difference between the reference time and the current point in time. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. References

### 13. 附录
*原文标题：Appendix*

### 14. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 15. Traceable item history of this document according to AUTOSAR Release R25-11

### 16. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 17. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 18. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 19. Traceable item history of this document according to AUTOSAR Release R24-11

### 20. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 21. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 22. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 23. Traceable item history of this document according to AUTOSAR Release R23-11

### 24. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| Different types of Predef Timers shall be supported by the Time Service module |  |
| The GPT Predef Timers shall be used as time base for the Predef Timers of the Time Service module |  |
| The Time Service module shall make it possible to configure which Predef Timers are enabled |  |
| The Time Service module shall provide a synchronous service to reset a timer instance |  |
| The Time Service module shall provide a synchronous service to get the time span |  |
| The Time Service module shall provide a synchronous service to shift the reference time of a timer instance |  |
| The Time Service module shall provide a synchronous service to synchronize two timer instances |  |
| The Time Service module shall provide a synchronous service with tick duration 1\mus to perform busy waiting by polling |  |

### 25. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 26. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 27. Traceable item history of this document according to AUTOSAR Release R22-11

### 28. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| Different types of Predef Timers shall be supported by the Time Service module |  |
| The GPT Predef Timers shall be used as time base for the Predef Timers of the Time Service module |  |
| The Time Service module shall make it possible to configure which Predef Timers are enabled |  |
| The Time Service module shall provide a synchronous service to reset a timer instance |  |
| The Time Service module shall provide a synchronous service to get the time span |  |
| The Time Service module shall provide a synchronous service to shift the reference time of a timer instance |  |
| The Time Service module shall provide a synchronous service to synchronize two timer instances |  |
| The Time Service module shall provide a synchronous service with tick duration 1\mus to perform busy waiting by polling |  |

### 29. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 30. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none
