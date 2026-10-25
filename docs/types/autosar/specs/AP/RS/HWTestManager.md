# Requirements on HWTestManager (`HWTestManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 1130 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_HWTestManager_1130\AUTOSAR_AP_RS_HWTestManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_HWTestManager_1130\AUTOSAR_AP_RS_HWTestManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_HWTestManager_1130\zzgen\AP_RS_HWTestManager.complete.txt`

## 文档简介

This document specifies requirements on the function component AP Hardware Test Manager of the AUTOSAR Adaptive Platform. The motivation is to provide a standardized and portable way to utilize hardware test manage API for safe and efficient autonomous driving.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the function component AP Hardware Test Manager of the AUTOSAR Adaptive Platform. The motivation is to provide a standardized and portable way to utilize hardware test manage API for safe and efficient autonomous driving.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

The requirements for the functional component AP Hadware Test Manager should consider AUTOSAR Safety Requirements .

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms, abbreviations and terms relevant to the current document that are not included in the AUTOSAR TR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| HTM | Hardware Test Manager |
| STL | Software Test Library |
| FTTI | Fault Tolerant Time Interval |
| WCET | Worst Case Execution Time |

| Term: | Description: |
|---|---|
| Test Pattern | A predefined set of inputs and operations used to verify hardware functionality |
| Hardware Health Status | The current operational state and condition of hardware components |
| Test Report | A detailed record of test execution results and hardware status information |

### 6. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Hardware Test Manager (HTM) functional component. The HTM provides standardized mechanisms for managing hardware tests, including test pattern execution, result handling, and hardware status monitoring.

### 7. 功能概述
*原文标题：Functional Overview*

The AUTOSAR Adaptive Platform HTM provides APIs for Adaptive Applications and other functional clusters of the AUTOSAR Adaptive Platform. The HTM is responsible for the following core aspects:

* Managing the execution of hardware test patterns through standardized interfaces

  * Support one-shot and periodic test execution
  * Control test execution lifecycle (start, stop)
* Processing and reporting test results

  * Collect test execution results
  * Provide interfaces for applications to access test results
* Monitoring hardware operational status

  * Track hardware status during test execution
  * Report hardware health information to applications
* Providing basic configuration capabilities

  * Configure test execution parameters
  * Manage test scheduling options

The HTM functional cluster focuses on providing essential functionality for hardware test management while maintaining simplicity and reliability in its first release.

### 8. 功能性需求
*原文标题：Functional Requirements*

Hardware Test Execution
⌈
| Description: | The HTM shall provide APIs for scheduling and executing sets of test patterns on hardware device (e.g., CPU, GPU, AI/C, I/O). |
|---|---|
| Rationale: | This requirement ensures that the HTM can initiate and manage the execution of hardware tests, enabling the detection of potential faults and ensuring system reliability. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Test Pattern Management
⌈
| Description: | The HTM shall provide interfaces for registering, retrieving, and managing test patterns and test cases (e.g., software self-test library). |
|---|---|
| Rationale: | This requirement allows the HTM to maintain a repository of available test patterns and cases, facilitating their selection and execution as needed. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Hardware Resource Management
⌈
| Description: | The HTM shall provide mechanisms to limit and control hardware resource (e.g., CPU, memory) usage based on system safety needs (e.g., FTTI, WCET) and machine manifest configurations. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Non-Functional 需求
*原文标题：Non-Functional Requirements*

The HTM currently does not have any non-functional requirements.

### 10. References

### 11. 附录
*原文标题：Appendix*

### 12. 附录
*原文标题：Appendix*

There is no content.

### 13. Trace Groups

The requirements in this document are divided into trace groups according to the following table.

| Defined Trace Groups | < |
|---|---|
| Identifier | Included Requirements |
| No Trace Groups defined | < |

### 14. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 15. Traceable item history of this document according to AUTOSAR Release Rxy-mm

### 16. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| Hardware Test Execution |  |
| Test Pattern Management |  |
| Hardware Resource Management |  |
| Test Result Handling |  |
| Test Abstraction and Standardization |  |
| Test Execution Control |  |
| Hardware Health Monitoring |  |
| Runtime Configuration |  |

### 17. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 18. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
