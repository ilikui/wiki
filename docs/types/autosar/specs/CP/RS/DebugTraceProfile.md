# Requirements on Debugging, Tracing and Profiling support of AUTOSAR Components (`DebugTraceProfile`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 916 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_DebugTraceProfile_916\AUTOSAR_CP_RS_DebugTraceProfile.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_DebugTraceProfile_916\AUTOSAR_CP_RS_DebugTraceProfile.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_DebugTraceProfile_916\zzgen\CP_RS_DebugTraceProfile.complete.txt`

## 文档简介

This document refines the requirements specified in Foundation . It focuses on requirements special to the Classic Platform of AUTOSAR. See also chapter "Scope of Document" of .

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document refines the requirements specified in Foundation . It focuses on requirements special to the Classic Platform of AUTOSAR. See also chapter "Scope of Document" of .

### 2. Conventions used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

All acronyms and abbreviations relevant to `FO_RS_DebugTraceProfile` are included in the AUTOSAR Glossary .

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the ARTI extensions in Classic Platform.

### 5. 功能概述
*原文标题：Functional Overview*

This document refines the requirements specified in the Foundation . It focuses on requirements special to the Classic Platform of AUTOSAR. See also chapter "Functional Overview" of .

### 6. 功能性需求 on 追踪
*原文标题：Functional Requirements on Tracing*

AUTOSAR shall support recording timing events of application states
⌈
| Description: | AUTOSAR shall support the recording and tracing of application state changes. |
|---|---|
| Rationale: | Provide a standardized way to trace timing events on application state changes to ensure tool compatibility and compatibility to TIMEX. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Add a trace instrumentation to application state changes. |
| Supporting Material: | - |

⌋

 AUTOSAR shall support recording timing events of tasks
⌈
| Description: | AUTOSAR shall support the recording and tracing of task state changes. |
|---|---|
| Rationale: | Provide a standardized way to trace timing events on task state changes to ensure tool compatibility and compatibility to TIMEX. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Add a trace instrumentation to task state changes. |
| Supporting Material: | - |

⌋

 AUTOSAR shall support recording timing events of category 2 interrupt states
⌈
| Description: | AUTOSAR shall support the recording and tracing of category 2 interrupt state changes. |
|---|---|
| Rationale: | Provide a standardized way to trace timing events on category 2 interrupt state changes to ensure tool compatibility and compatibility to TIMEX. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 功能性需求 on ARTI 模板
*原文标题：Functional Requirements on ARTI Template*

This chapter defines the requirements on the ARTI template.

 The ARTI template shall support core specific ARTI additions
⌈
| Description: | The ARTI template shall define a mechanism to allow core specific ARTI parameters. |
|---|---|
| Rationale: | ARTI needs core specific evaluations. The Template shall define a "class" to define additional parameters to cores as well as an "instance" to define values of specific cores. The core instance shall include a reference to the core definition in the EcuC description. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Debuggers and Tracing tools need specific core related information to display and trace the core activity. |
| Supporting Material: | - |

⌋

 The ARTI template shall support a parameter for the current application
⌈
| Description: | The ARTI template shall define a parameter that contains the evaluation for the "current application" that is running on a specific core. |
|---|---|
| Rationale: | ARTI needs to know which application is running at a core at a specific time. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Debuggers and Tracing tools need to know the current application to display and trace the core activity. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 功能性需求 on ARTI 描述
*原文标题：Functional Requirements on ARTI Description*

This chapter defines the requirements on the ARTI description.

 The ARTI description shall include a core class definition.
⌈
| Description: | Additional parameters to a core are collected in a class definition, following the ARTI Template. |
|---|---|
| Rationale: | An ARTI consuming tool needs to know the layout of a core class used by this implementation. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Evaluating the form of display for cores. |
| Supporting Material: | - |

⌋

 The ARTI description for a core class shall include a "current task" reference to the interpret the parameter value
⌈
| Description: | A core class shall include a reference to a parameter definition that defines how a specific value of the "current task" parameter should be interpreted. |
|---|---|
| Rationale: | An ARTI consuming tool needs to know how to interpret the values for a "current task", used by this implementation. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Defining the display for "current task". |
| Supporting Material: | - |

⌋

 The ARTI description shall include instance definitions for all cores of the ECU.
⌈
| Description: | Additional parameter values to a core are collected in an instance definition, following the ARTI Template. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 功能性需求 regarding locating
*原文标题：Functional Requirements regarding locating*

The requirements in this section are related to how code is located in the ECU memory.

 Grouping of Traceables
⌈
| Description: | The locating process shall allow grouping of traceable functions to be located in the same memory region. |
|---|---|
| Rationale: | Many processors support instruction tracing ("program flow trace") without any software instrumentation. Tracing everything consumes high band-width and trace memory, whereas the user usually only is interested in a subset of functions. Most processors allow efficient tracing on a function level as long as the functions to trace are located in the same memory region (in which no other function must be located). Runnables and task bodies are implemented as functions, so by offering a way to group all functions of interest into memory regions of their own, AUTOSAR supports such efficient non-intrusive tracing. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 10. Default 错误 Tracer (DET)
*原文标题：Default Error Tracer (DET)*

A configurable list of error report receivers shall be provided
⌈
| Description: | The Default Error Tracer shall support a configurable list of functions for fan-out of received error reports. This list can be empty. |
|---|---|
| Rationale: | This implements the debugging concept in R4.0 (DocumentId 298). |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | Even development errors shall be captured by the Log and Trace functionality. Error Handling shall be enabled to react on development errors |
| Supporting Material: | - |

⌋

 Report errors shall contain a dedicated set of information
⌈
| Description: | Error reports, which the Default Error Tracer receives, shall consist of the ID of the reporting module, the ID of reporting instance, the ID of the API service in which the error has been detected and the error ID itself. |
|---|---|
| Rationale: | For optimal support of the error tracing some tracing information is necessary. |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | During software development phase a BSW module has been called using wrong parameters. Due to communication of some tracing information the location of the error source will be supported. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. References

### 12. 附录
*原文标题：Appendix*

### 13. Change history of AUTOSAR traceable items

### 14. Traceable item history of this document according to AUTOSAR Release R22-11

### 15. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| AUTOSAR shall support recording timing events of runnable entities. |  |
| AUTOSAR shall support recording timing events of schedulable entities. |  |
| AUTOSAR shall support recording events from the standardized VFB tracing interface. |  |
| AUTOSAR shall support tracing of entries and exits of BSW modules. |  |

### 16. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 17. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 18. Traceable item history of this document according to AUTOSAR Release R23-11

### 19. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 20. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 21. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 22. Traceable item history of this document according to AUTOSAR Release R24-11

### 23. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 24. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| Grouping of Traceables |  |

### 25. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

| Number | Heading |
|---|---|
| The Default Error Tracer shall provide an interface to receive transient fault reports |  |
| The Default Error Tracer shall forward received transient fault reports to configured integrator code |  |

### 26. Traceable item history of this document according to AUTOSAR Release R25-11

### 27. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 28. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 29. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
