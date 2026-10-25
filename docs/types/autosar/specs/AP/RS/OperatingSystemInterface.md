# Requirements on Operating System Interface (`OperatingSystemInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 718 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_OperatingSystemInterface_718\AUTOSAR_AP_RS_OperatingSystemInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_OperatingSystemInterface_718\AUTOSAR_AP_RS_OperatingSystemInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_OperatingSystemInterface_718\zzgen\AP_RS_OperatingSystemInterface.complete.txt`

## 文档简介

This document specifies the requirements of AUTOSAR Adaptive Platform on the Operating System that is part of the Foundation in the AUTOSAR Adaptive Platform.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies the requirements of AUTOSAR Adaptive Platform on the Operating System that is part of the Foundation in the AUTOSAR Adaptive Platform.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

### 5. 需求 status
*原文标题：Requirements status*

There are no special requirement guidelines for this document.

### 6. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to this Document.

| Abbreviation / Acronym: | Description: |
|---|---|
| Operating System | Software responsible for managing Processes on a Machine and for providing an interface to hardware resources. |
| Operating System Interface (OSI) | The Functional Cluster within the AUTOSAR Adaptive Platform which specifies the Operating System interface used by Adaptive Applications and by the AUTOSAR Adaptive Platform itself. |

The following technical terms used in this document are defined in the corresponding document mentioned in the table below.

| Abbreviation / Acronym: | Description: |
|---|---|
| Execution Management | see  Requirements on Execution Management |
| Adaptive Application | see  AUTOSAR Glossary |
| AUTOSAR Adaptive Platform | see  AUTOSAR Glossary |
| Functional Cluster | see  AUTOSAR Glossary |
| Machine | see  AUTOSAR Glossary |
| Process | see  AUTOSAR Glossary |

### 7. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements for the selection of the Operating System for the AUTOSAR Adaptive Platform.

### 8. 功能概述
*原文标题：Functional Overview*

The Operating System is responsible for run-time resource management (including time) for all applications on and within the AUTOSAR Adaptive Platform. This includes not only the Adaptive Applications that run on top of ARA provided by AUTOSAR Adaptive Platform, but also the Functional Clusters that constitute the platform, which are also implemented as applications. The Operating System functions in cooperation with Execution Management which is responsible for platform initialization and the start-up / shut-down of applications.

Note that this Operating System Interface requirement specification contains two different categories. The first category contains the requirements that are directly needed by the Adaptive Applications. The other category contains the ones that are needed by the AUTOSAR Adaptive Platform to realize implementation of Functional Clusters, especially the required mechanisms are difficult or inefficient to be implemented by other software entity than the Operating System. The most notable such Functional Cluster requiring the various Operating System mechanisms is Execution Management.

### 9. 功能性需求
*原文标题：Functional Requirements*

### 10. Assumption of Use

This section describes execution environment of the AUTOSAR Adaptive Platform that is directly or indirectly used to run the Adaptive Applications. This execution environment is not requirements to the AUTOSAR Adaptive Platform in the strict sense, but rather assumptions on properties of Adaptive Application running on the AUTOSAR Adaptive Platform. These assumptions are used to motivate the further requirements, and provide hints for Adaptive Application developers to check if their use cases are covered in this specification document and which specific requirements are derived from those use cases.

The Operating System section defines requirements on the Operating System that Processes can consider fulfilled in order to achieve their function.

### 11. 通用需求
*原文标题：General Requirements*

This section describes APIs that should be exposed to Processes on the AUTOSAR Adaptive Platform that closely relates to the Operating System functionality. Some libraries in the system may be considered by a Developer to be part of the Operating System without strictly-speaking belonging to it, for example the C++ runtime libraries. For the purpose of this section, the Operating System kernel and its libraries are considered to be a single entity.

 POSIX PSE51 Compliance
⌈
| Description: | The minimal OS functionality provided by Adaptive AUTOSAR platform shall be as defined by POSIX PSE51 interface, according to the IEEE1003.13-2003 specification. |
|---|---|
| Rationale: | The defined functionality of the POSIX profile PSE51 defined by IEEE1003.13  is provided by various off-the-shelf Operating Systems. The PSE51 profile is intended for embedded systems, with a single multi-threaded Process, no file system, no user and group support and only selected options from more general IEEE1003.1 , which is the well-known POSIX standard. PSE51 offers functions for basic synchronized I/O, high-resolution timer, signals, semaphores, shared memory and threads. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Non-Functional 需求
*原文标题：Non-Functional Requirements*

No content.

### 13. References

### 14. 附录
*原文标题：Appendix*

### 15. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 16. Traceable item history of this document according to AUTOSAR Release R26-11

### 17. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

none

### 18. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

| Number | Heading |
|---|---|
| POSIX PSE51 Compliance |  |

### 19. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

| Number | Heading |
|---|---|
| The Operating System Interface shall support the reaction on Process-external stimuli from devices. |  |
| The Operating System Interface shall support the start of Execution Management. |  |
| The Operating System shall provide mechanisms for system memory budgeting. |  |
| The Operating System shall provide mechanisms for CPU time budgeting. |  |
| The Operating System should provide mechanisms for binding Processes to CPU cores. |  |
| The Operating System shall support authorized operating system object access for the software entities which are allowed to do so. |  |
| The Operating System shall provide multi-Process support for isolation of applications. |  |
| The Operating System shall provide the capability to share code and data in an implicit manner. |  |
| The Operating System shall allow Processes to access only required functionality. |  |
| The Operating System shall support error handling including unrecoverable errors. |  |
| The Operating System shall provide a mechanism to observe scheduling of CPU time to Task, Process |  |
| The Operating System shall provide a mechanism to export low-level scheduling and trace information to applications. |  |

### 20. Traceable item history of this document according to AUTOSAR Release R25-11

### 21. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 22. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| POSIX PSE51 Compliance |  |
| The Operating System Interface shall support C++. |  |
| The Operating System Interface shall support the reaction on Process-external stimuli from devices. |  |
| The Operating System Interface shall support the start of Execution Management. |  |
| The Operating System shall provide mechanisms for system memory budgeting. |  |
| The Operating System shall provide mechanisms for CPU time budgeting. |  |
| The Operating System should provide mechanisms for binding Processes to CPU cores. |  |
| The Operating System shall support authorized operating system object access for the software entities which are allowed to do so. |  |
| The Operating System shall provide multi-Process support for isolation of applications. |  |
| The Operating System shall provide the capability to share code and data in an implicit manner. |  |
| The Operating System shall allow Processes to access only required functionality. |  |
| The Operating System shall support error handling including unrecoverable errors. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 24. Traceable item history of this document according to AUTOSAR Release R24-11

### 25. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 26. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| POSIX PSE51 Compliance |  |
| The Operating System Interface shall support C++. |  |
| The Operating System Interface shall support the reaction on Process-external stimuli from devices. |  |
| The Operating System Interface shall support the start of Execution Management. |  |
| The Operating System shall provide mechanisms for system memory budgeting. |  |
| The Operating System shall provide mechanisms for CPU time budgeting. |  |
| The Operating System should provide mechanisms for binding Processes to CPU cores. |  |
| The Operating System shall support authorized operating system object access for the software entities which are allowed to do so. |  |
| The Operating System shall provide multi-Process support for isolation of applications. |  |
| The Operating System shall provide the capability to share code and data in an implicit manner. |  |
| The Operating System shall allow Processes to access only required functionality. |  |
| The Operating System shall support error handling including unrecoverable errors. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 28. Traceable item history of this document according to AUTOSAR Release R23-11

### 29. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| The Operating System shall provide a mechanism to observe scheduling of CPU time to tasks, processes. |  |
| The Operating System shall provide a mechanism to export low-level scheduling and trace information to applications. |  |

### 30. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| The Operating System shall provide mechanisms for system memory budgeting. |  |
| The Operating System shall provide mechanisms for CPU time budgeting. |  |
| The Operating System should provide mechanisms for binding processes to CPU cores. |  |
| The Operating System shall provide multi-process support for isolation of applications. |  |

### 31. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 32. Traceable item history of this document according to AUTOSAR Release R22-11

### 33. Added Advisories in R22-11

none

### 34. Changed Advisories in R22-11

none

### 35. Deleted Advisories in R22-11

none

### 36. Added Constraints in R22-11

none

### 37. Changed Constraints in R22-11

none

### 38. Deleted Constraints in R22-11

none

### 39. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

none

### 40. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| The Operating System Interface shall support C++. |  |
| The Operating System Interface shall support the reaction on process-external stimuli from devices. |  |

 |

### 41. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none
