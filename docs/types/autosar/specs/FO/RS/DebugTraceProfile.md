# Requirements on Debugging, Tracing and Profiling support of AUTOSAR Components (`DebugTraceProfile`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 915 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_DebugTraceProfile_915\AUTOSAR_FO_RS_DebugTraceProfile.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_DebugTraceProfile_915\AUTOSAR_FO_RS_DebugTraceProfile.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_DebugTraceProfile_915\zzgen\FO_RS_DebugTraceProfile.complete.txt`

## 文档简介

Debugging and tracing enables efficient development, integration, optimization and verification of ECU software. For analyzing several aspects - especially timing aspects - it becomes essential to link the debugging and tracing data to the scheduling of an ECU. Knowledge about tasks, interrupts and runnables, in other words: awareness of the operating system ("OS awareness"), is required.

A good interaction of the tool chain provides complete round-trip engineering from model down to hardware and back - covering several software levels and several phases of the V-model.

The objective of ARTI ("AUTOSAR Run-Time Interface") is an interface description, that allows debugging and tracing of AUTOSAR systems with a flexible awareness supporting different views, such as OS, BSW, RTE, model, user-data and user-defined.

In particular, the interface shall enable tools to perform:

* Debugging
* Tracing
* Timing Measurement
* Profiling

The main focus of this requirements document is the format of the ARTI hooks and the exported ARTI description.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

Debugging and tracing enables efficient development, integration, optimization and verification of ECU software. For analyzing several aspects - especially timing aspects - it becomes essential to link the debugging and tracing data to the scheduling of an ECU. Knowledge about tasks, interrupts and runnables, in other words: awareness of the operating system ("OS awareness"), is required.

A good interaction of the tool chain provides complete round-trip engineering from model down to hardware and back - covering several software levels and several phases of the V-model.

The objective of ARTI ("AUTOSAR Run-Time Interface") is an interface description, that allows debugging and tracing of AUTOSAR systems with a flexible awareness supporting different views, such as OS, BSW, RTE, model, user-data and user-defined.

In particular, the interface shall enable tools to perform:

* Debugging
* Tracing
* Timing Measurement
* Profiling

The main focus of this requirements document is the format of the ARTI hooks and the exported ARTI description.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

Not applicable.

### 5. 需求 quality
*原文标题：Requirements quality*

Not applicable.

### 6. 需求 identification
*原文标题：Requirements identification*

Not applicable.

### 7. 需求 status
*原文标题：Requirements status*

Not applicable.

### 8. 缩略语
*原文标题：Acronyms and abbreviations*

All acronyms and abbreviations relevant to `FO_RS_DebugTraceProfile` are included in the AUTOSAR Glossary .

### 9. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define ARTI.

### 10. 功能概述
*原文标题：Functional Overview*

The tools that generate AUTOSAR modules (e.g. OS, RTE, etc.) have to emit internal information about this module. The information shall allow to debug and trace the behavior of this module. Additional tools will collect all ARTI information of an ECU and allow selecting specific items to trace and create tracing hook files for a specific trace channel (e.g. internal buffer, hardware trace buffers, etc.). The build environment creates the final application, which then can be used in the ECU. Debugging and tracing tools can read in the ARTI information and are "AUTOSAR" aware, giving additional debugging and tracing features to the developer.

ARTI is supposed to work with debug information created by the compilers. This means each module that supports ARTI needs to be compiled with debug information, and the ARTI information has to use the symbol names created by the compiler.

ARTI introduces hooks. In order to use them, they shall be incorporated into the module's code. Either they are put therein statically, or they have to be configured.

ARTI consists of these functional elements:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能性需求 on ARTI 模板
*原文标题：Functional Requirements on ARTI Template*

The requirements in this section all concern how the ARTI template shall be defined.

 The ARTI Description shall be the root for the whole ARTI information of an ECU
⌈
| Description: | The ARTI Template shall be the backbone for all information regarding ARTI of a particular ECU. |
|---|---|
| Rationale: | To access Run-Time information of an ECU, a tool needs to have one reference to look for the information. All further detailed information can be found by following the contents of this reference. Note that this requirement does not imply that all relevant information is copied into the template. References to elements in other templates may be included to avoid redundant elements in the model. |

Applies To:
| Dependencies: | ARTI tools need to be able to read other templates (esp. ECU), too, if these are referenced by the ARTI description. |
|---|---|
| Use Case: | The ARTI Template includes specifications on how to model generic classes and instances, without changing the template, allowing to specify the access to any arbitrary object of the ECU. The template includes references to other templates and components to be able to use this information, too. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 功能性需求 on ARTI 描述
*原文标题：Functional Requirements on ARTI Description*

The requirements in this section all concern how the ARTI description shall be defined.

 The ARTI description shall follow the ARTI Template.
⌈
| Description: | All information concerning ARTI shall be collected in the ARTI description, following the ARTI Template. |
|---|---|
| Rationale: | To access Run-Time information of an ECU, a tool needs to know how to read the information. By strictly following the template, the tool is able to extract all necessary information without further user interaction. |

Applies To:
| Dependencies: | ARTI tools need to be able to read and understand the ARTI Template and possibly other templates (e.g. ECU). |
|---|---|
| Use Case: | Using the ARTI description, an ARTI tool is able to detect, visualize and measure arbitrary objects of an ECU. |
| Supporting Material: | - |

⌋

 The ARTI description shall include all class definitions of generic objects.
⌈
| Description: | All generic (arbitrary) objects that should be processed by an ARTI consuming tool shall be defined in a class definition, following the ARTI Template. |
|---|---|
| Rationale: | An ARTI consuming tool needs to know the layout of all generic objects used by the module. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能性需求 on ARTI Hooks
*原文标题：Functional Requirements on ARTI Hooks*

The requirements in this section all concern how ARTI hooks shall be used and defined.

 ARTI Hooks shall be implemented with minimal intrusion
⌈
| Description: | ARTI Hooks shall be implemented in source code with as minimal intrusion as possible. |
|---|---|
| Rationale: | ARTI Hooks will be extended by an ARTI consuming tool, possibly adding extra code that affects the run-time of the application. This intrusion should be kept as minimal as possible, e.g. by using "C" macros for implementation of the ARTI Hooks. |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | Hooks may be implemented as "C" macros. This allows easily to expand the macros to "nothing", causing no intrusion or side effects at all. An ARTI consuming tool may choose to extend the macro to supply information to this tool. |
| Supporting Material: | - |

⌋

 ARTI Hooks shall follow a fixed format
⌈
| Description: | ARTI Hooks shall follow a fixed format. |
|---|---|
| Rationale: | To allow an ARTI consuming tool to expand the ARTI Hooks it is beneficially if these follow a common format. |
| Applies To: | CP |
| Dependencies: | RS_ARTIFO_00014 |
| Use Case: | Hooks may be implemented as "C" macros. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

No content.

### 15. References

### 16. 附录
*原文标题：Appendix*

### 17. Change history of AUTOSAR traceable items

### 18. Traceable item history of this document according to AUTOSAR Release R22-11

### 19. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

none

### 20. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| ARTI Hooks shall be implemented with minimal intrusion |  |
| ARTI Hooks shall follow a fixed format |  |
| ARTI Hooks shall provide information about the calling context |  |
| ARTI Hooks shall provide the name of the class they belong to |  |
| ARTI Hooks shall provide the name of the event |  |
| ARTI Hooks shall provide parameters for the event |  |

### 21. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 22. Traceable item history of this document according to AUTOSAR Release R23-11

### 23. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 24. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| ARTI Hooks shall be implemented with minimal intrusion |  |
| ARTI Hooks shall follow a fixed format |  |
| ARTI Hooks shall provide information about the calling context |  |
| ARTI Hooks shall provide the name of the class they belong to |  |
| ARTI Hooks shall provide the name of the event |  |
| ARTI Hooks shall provide parameters for the event |  |

### 25. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 26. Traceable item history of this document according to AUTOSAR Release R24-11

### 27. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 28. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 29. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 30. Traceable item history of this document according to AUTOSAR Release R25-11

### 31. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 32. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 33. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
