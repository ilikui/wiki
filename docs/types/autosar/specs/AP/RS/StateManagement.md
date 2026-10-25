# Requirements of State Management (`StateManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 909 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_StateManagement_909\AUTOSAR_AP_RS_StateManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_StateManagement_909\AUTOSAR_AP_RS_StateManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_StateManagement_909\zzgen\AP_RS_StateManagement.complete.txt`

## 文档简介

This document specifies requirements on State Management. State Management implements interfaces of State Manager on the AUTOSAR Adaptive Platform, because State Management is highly project specific and therefor to be implemented by the project itself.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on State Management. State Management implements interfaces of State Manager on the AUTOSAR Adaptive Platform, because State Management is highly project specific and therefor to be implemented by the project itself.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to this Document.

| Abbreviation / Acronym: | Description: |
|---|---|
| State Management | The element defining modes of operation for AUTOSAR Adaptive Platform. It allows flexible definition of functions which are active on the platform at any given time. |

The following technical terms used in this document are defined in the corresponding document mentioned in the table below.

| Abbreviation / Acronym: | Description: |
|---|---|
| Platform Health Management | see  Specification of Platform Health Management |
| Execution Management | see  Requirements on Execution Management |
| Function Group | see  Requirements on Execution Management |
| Function Group State | see  Requirements on Execution Management |
| Machine State | see  Requirements on Execution Management |
| Network Management | see  Specification of Network Management |
| Process | see  AUTOSAR Glossary |
| Adaptive Application | see  AUTOSAR Glossary |
| AUTOSAR Adaptive Platform | see  AUTOSAR Glossary |
| Executable | see  AUTOSAR Glossary |
| Functional Cluster | see  AUTOSAR Glossary |
| Machine | see  AUTOSAR Glossary |
| Manifest | see  AUTOSAR Glossary |
| Adaptive Platform Foundation | see  AUTOSAR Glossary |

Adaptive Platform

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the State Management.

### 5. 功能概述
*原文标题：Functional Overview*

This document specifies the requirements regarding the realization of the State Management on Adaptive Platform. Only the interfaces and abstract functionality will be defined, because State Management is highly project specific.

Execution Management, Platform Health Management and State Management are the main safety relevant functional clusters of the AUTOSAR Adaptive Platform. Consequently, their development may require certain processes to be followed - as recommended in ISO26262. A safety argumentation for the AUTOSAR Adaptive Platform, describing functional safety measures and use-cases is provided through Explanation of Safety Overview .

### 6. 功能性需求
*原文标题：Functional Requirements*

### 7. 状态管理
*原文标题：State Management*

State Management shall coordinate and control multiple sets of Applications.
⌈
| Description: | State Management shall allow to change the availability of Adaptive Applications based on internal decision and/or external requests. |
|---|---|
| Rationale: | State Management shall coordinate and control one or multiple sets of Adaptive Applications (Function Group State) and the platform (Machine State) itself so that the machine behaves as to fulfill the intended system design of a particular project. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Provide interface to influence State Managements internal states. |
| Supporting Material: | - |

⌋

 State Management shall provide standardized interfaces.
⌈
| Description: | State Management implementation shall be portable between different AUTOSAR Adaptive Platform compliant stacks. State Management shall only depend on the standardized interfaces when it interacts with other Functional Cluster. Therefor State Management shall provide interfaces over at least ara::com. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Virtualization 支持 / Hierarchical 状态管理
*原文标题：Virtualization support / Hierarchical State Management*

State Management shall provide an interface between State Management instances.
⌈
| Description: | State Management shall provide an interface between State Management instances used in a hierarchically manner. |
|---|---|
| Rationale: | In a virtualized/hierarchical environment several instances of State Management will be active. Instances with lower priority have to be controlled by instances with a higher priority |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | The components are possibly provided by different vendors, working on different microcontrollers or virtual machines. On each controller or (virtual) machine a separate instance of State Management might be used and it should be possible to operate these instances in a hierarchically manner. |
| Supporting Material: |  |

⌋

### 9. Calibration and variant 支持
*原文标题：Calibration and variant support*

State Management shall support variant handling based on calibration data.
⌈
| Description: | State Management shall evaluate calibration data. State Management should (or not) set Function Groups to specified Function Group State depending on read configuration data. |
|---|---|
| Rationale: |  |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | For different car lines, countries or regions different Function Groups will be allowed to be started. State Management evaluates this information from calibration data to enable only the wanted Function Groups. |
| Supporting Material: |  |

⌋

### 10. Dynamic communication paths

State Management shall establish communication paths dynamically.
⌈
| Description: | State Management shall be able to evaluate which communication channels are needed by Adaptive Applications and therefor by their corresponding Function Group. Opening and closing of these channels shall be done by requesting them from Network Management. |
|---|---|
| Rationale: |  |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Adaptive Applications as part of aFunction Group will have a need to use communication with other ones. Therefore State Management evaluates this information from configuration and requests Network Management to establish or shutdown the corresponding communication channel. |
| Supporting Material: |  |

⌋

 State Management shall control Applications depending on dynamic communication paths .
⌈
| Description: | State Management shall be able to evaluate which Adaptive Applications and therefor their corresponding Function Group are needed by establishing communication channels. starting and stopping of Adaptive Applications shall be done on request from Network Management. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Recovery actions

State Management shall coordinate recovery actions.
  Upstream requirements: ,
⌈
| Description: | State Management shall coordinate recovery actions. |
|---|---|
| Rationale: | State Management is a central functional cluster to which Platform Health Management reports supervision failures and State Management decides which recovery action (e.g. functional group state change, notification to a safe application or even ECU reset) should be triggered. |

Applies To:
| Dependencies: | PHM |
|---|---|
| Use Case: | PHM supervises a safety critical Adaptive Application. This application fails. PHM detects the issue and reports to State Management. State Management coordinates the error recovery actions. |
| Supporting Material: | - |

⌋

### 12. Non-Functional 需求
*原文标题：Non-Functional Requirements*

State Management shall be implemented at least according to the highest safety integrity level from any process that is managed by State Management.
  Upstream requirements:
⌈
| Description: | State Management shall be implemented at least according to the highest safety integrity level from any process that is managed by State Management. |
|---|---|
| Rationale: | State Management manages state changes and recovery actions of all the processes and therefore needs to be developed and executed according to the same safety standards as the highest rated safety application managed by State Management in the system. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | An ASIL C, B and QM Application is running on the adaptive Platform. State Management shall manage the ASIL C, B and the QM application, therefore State Management shall be implemented with an ASIL C. |
| Supporting Material: | - |

⌋

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
| State Management shall coordinate and control multiple sets of Applications. |  |
| State Management shall provide standardized interfaces. |  |
| State Management internal states. |  |
| State Management shall provide an interface between State Management instances. |  |
| State Management shall support variant handling based on calibration data. |  |
| State Management shall establish communication paths dynamically. |  |
| State Management shall control Applications depending on dynamic communication paths . |  |
| Coordination of System Sleep States |  |
| State Management shall be implemented at least according to the highest safety integrity level from any process that is managed by State Management. |  |
| State Management shall coordinate recovery actions. |  |

### 19. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

none

### 20. Traceable item history of this document according to AUTOSAR Release R25-11

### 21. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| Coordination of System Sleep States |  |

### 22. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| State Management shall coordinate and control multiple sets of Applications. |  |
| State Management shall provide standardized interfaces. |  |
| State Management internal states. |  |
| State Management shall provide an interface between State Management instances. |  |
| State Management shall support variant handling based on calibration data. |  |
| State Management shall establish communication paths dynamically. |  |
| State Management shall control Applications depending on dynamic communication paths . |  |
| State Management shall be implemented at least according to the highest safety integrity level from any process that is managed by State Management. |  |
| State Management shall coordinate recovery actions. |  |

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
| State Management shall coordinate and control multiple sets of Applications. |  |
| State Management shall provide standardized interfaces. |  |
| State Management shall provide an interface between State Management instances. |  |
| State Management shall establish communication paths dynamically. |  |
| State Management shall control Applications depending on dynamic communication paths . |  |
| State Management shall be implemented at least according to the highest safety integrity level from any process that is managed by State Management. |  |
| State Management shall coordinate recovery actions. |  |

### 27. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

| Number | Heading |
|---|---|
| State Management shall support ECU reset |  |

### 28. Traceable item history of this document according to AUTOSAR Release R23-11

### 29. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 30. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 31. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 32. Added Constraints in R23-11

none

### 33. Changed Constraints in R23-11

none

### 34. Deleted Constraints in R23-11

none

### 35. Traceable item history of this document according to AUTOSAR Release R22-11

### 36. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| State Management shall be implemented at least according to the highest safety integrity level from any process that is managed by State Management. |  |
| State Management shall coordinate recovery actions. |  |

### 37. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| State Management shall establish communication paths dynamically. |  |
| State Management shall control Adaptive Applications depending on dynamic communication paths . |  |

### 38. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

| Number | Heading |
|---|---|
| State Management shall support diagnostic reset cause |  |

### 39. Added Constraints in R22-11

none

### 40. Changed Constraints in R22-11

none

### 41. Deleted Constraints in R22-11

none

### 42. Traceable item history of this document according to AUTOSAR Release R21-11

### 43. Added 需求 "in R21-11"
*原文标题：Added Requirements "in R21-11"*

| Number | Heading |
|---|---|
| State Management shall coordinate and control multiple sets of Adaptive Applications. |  |
| State Management shall provide standardized interfaces. |  |
| State Management internal states. |  |
| State Management shall support ECU reset |  |
| State Management shall support diagnostic reset cause |  |
| State Management shall provide an interface between State Management instances. |  |
| State Management shall support variant handling based on calibration data. |  |
| State Management shall establish communication paths dynamically. |  |
| State Management shall control Adaptive Applications depending on dynamic communication paths . |  |

### 44. Changed 需求 "in R21-11"
*原文标题：Changed Requirements "in R21-11"*

none

### 45. Deleted 需求 "in R21-11"
*原文标题：Deleted Requirements "in R21-11"*

none

### 46. Added Constraints "in R21-11"

none

### 47. Changed Constraints "in R21-11"

none

### 48. Deleted Constraints "in R21-11"

none

### 49. Traceable item history of this document according to AUTOSAR Release R20-11

### 50. Added 需求 in R20-11
*原文标题：Added Requirements in R20-11*

| Number | Heading |
|---|---|
| State Management shall coordinate and control multiple sets of Adaptive Applications. |  |
| State Management shall provide standardized interfaces. |  |
| State Management internal states. |  |
| State Management shall support ECU reset |  |
| State Management shall support diagnostic reset cause |  |
| State Management shall provide an interface between State Management instances. |  |
| State Management shall support variant handling based on calibration data. |  |
| State Management shall establish communication paths dynamically. |  |
| State Management shall control Adaptive Applications depending on dynamic communication paths . |  |

### 51. Changed 需求 in R20-11
*原文标题：Changed Requirements in R20-11*

none

### 52. Deleted 需求 in R20-11
*原文标题：Deleted Requirements in R20-11*

none

### 53. Added Constraints in R20-11

none

### 54. Changed Constraints in R20-11

none

### 55. Deleted Constraints in R20-11

none

### 56. Traceable item history of this document according to AUTOSAR Release R19-11

### 57. Added 需求 in 19-11
*原文标题：Added Requirements in 19-11*

none

### 58. Changed 需求 in 19-11
*原文标题：Changed Requirements in 19-11*

| Number | Heading |
|---|---|
| State Management shall provide standardized interfaces. |  |
| State Management shall support variant handling based on calibration data. |  |
| State Management shall establish communication paths dynamically. |  |

### 59. Deleted 需求 in 19-11
*原文标题：Deleted Requirements in 19-11*

| Number | Heading |
|---|---|
| State Management shall support efficient resource usage. |  |

### 60. Added Constraints in 19-11

none

### 61. Changed Constraints in 19-11

none

### 62. Deleted Constraints in 19-11

none

### 63. Traceable item history of this document according to AUTOSAR Release R19-03

### 64. Added 需求 in 19-03
*原文标题：Added Requirements in 19-03*

| Number | Heading |
|---|---|
| State Management shall provide standardized interfaces. |  |
| State Management internal states. |  |
| State Management shall control Adaptive Applications depending on dynamic communication paths . |  |

### 65. Changed 需求 in 19-03
*原文标题：Changed Requirements in 19-03*

| Number | Heading |
|---|---|
| State Management shall coordinate and control multiple sets of Adaptive Applications. |  |
| State Management shall provide an interface between State Management instances. |  |
| State Management shall establish communication paths dynamically. |  |

### 66. Deleted 需求 in 19-03
*原文标题：Deleted Requirements in 19-03*

| Number | Heading |
|---|---|
| State Management shall support Component State change requests. |  |
| State Management shall provide the interface over ara::com. |  |

### 67. Added Constraints in 19-03

none

### 68. Changed Constraints in 19-03

none

### 69. Deleted Constraints in 19-03

none
