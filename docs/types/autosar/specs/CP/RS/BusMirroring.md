# Requirements on Bus Mirroring (`BusMirroring`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 874 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_BusMirroring_874\AUTOSAR_CP_RS_BusMirroring.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_BusMirroring_874\AUTOSAR_CP_RS_BusMirroring.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_BusMirroring_874\zzgen\CP_RS_BusMirroring.complete.txt`

## 文档简介

This document specifies requirements on the Bus Mirroring module (Mirror).

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the Bus Mirroring module (Mirror).

### 2. Conventions To Be Used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 需求指南
*原文标题：Requirements Guidelines*

There are no special guidelines for requirements for the Bus Mirroring.

### 4. 定义 of Acronyms and Abbreviations
*原文标题：Definition of Acronyms and Abbreviations*

### 5. 缩略语
*原文标题：Acronyms and Abbreviations*

This document does not define any specific acronyms or abbreviations. A general list of acronyms and abbreviations is available in the AUTOSAR glossary .

### 6. 定义 of Terms
*原文标题：Definition of Terms*

This document does not define any specific definitions. A general list of definitions is available in the AUTOSAR glossary .

### 7. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Bus Mirroring module.

### 8. 功能概述
*原文标题：Functional Overview*

Many communication buses in a vehicle are not directly accessible by a tester. The aim of the Bus Mirroring is to enable a tester to listen to the traffic on such internal communication buses.

To avoid flooding intermediate communication buses by traffic that needs to be re-routed over an internal bus, a filtering shall be configurable on each node involved in such a mirroring.

Testers connected via CAN (FD) shall receive unmodified CAN (FD) frames and LIN frames with special CAN IDs.

On intermediate CAN (FD) buses, the mirrored CAN (FD) and LIN frames shall be transmitted in the same way, possibly with re-mapped CAN IDs.

Testers connected via CAN XL or Ethernet shall receive a stream containing current time, identification, and content of CAN (FD), LIN, and FlexRay frames. Ethernet frames shall be mirrored using the Port Mirroring feature of Ethernet switches.

On intermediate CAN XL, FlexRay, Ethernet, and proprietary buses, the same stream encoding as on external Ethernet connections is used.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 功能性需求
*原文标题：Functional Requirements*

### 10. 配置
*原文标题：Configuration*

The source and destination buses shall be configurable
⌈
| Description: | The Bus Mirroring module shall support configuration of the source buses and the destination buses used for mirroring. A bus shall not be configurable both as source and destination bus. |
|---|---|
| Rationale: | Configuration of the buses participating in the mirroring. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Mirroring of CAN (FD)/LIN frames to CAN (FD), and of CAN (FD)/LIN/FlexRay frames to CAN XL/FlexRay/Ethernet/CDD. |
| Supporting Material: | Concept 634 "Bus Mirroring" |

⌋

 Frame filters shall be configurable
⌈
| Description: | The Bus Mirroring module shall support configuration of a set of static frame filters and a number of dynamically assignable frame filters. These filters shall be configurable separately for each source bus. The filters shall be inclusive - if no filter is active, no frames will be mirrored. |
|---|---|
| Rationale: | Reduce bus traffic on destination bus. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Adaptation to actual use case. |
| Supporting Material: | Concept 634 "Bus Mirroring" |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 初始化
*原文标题：Initialization*

The Bus Mirroring module shall provide an interface for module initialization
⌈
| Description: | The Bus Mirroring module shall provide an interface for initialization of all states and all global variables of the module. Before initialization, the Bus Mirroring module is inactive. |
|---|---|
| Rationale: | Basic functionality. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | ECU initialization. |
| Supporting Material: | Concept 634 "Bus Mirroring" |

⌋

### 12. Normal Operation

The Bus Mirroring module shall collect incoming frames
⌈
| Description: | The Bus Mirroring module shall provide interfaces for the collection of incoming CAN (FD), LIN, and FlexRay frames. |
|---|---|
| Rationale: | Access to frames from different bus types. |

Applies To:
| Dependencies: | Configuration of source buses, see . |
|---|---|
| Use Case: | Collect input frames. |
| Supporting Material: | Concept 634 "Bus Mirroring" |

⌋

 The Bus Mirroring module shall filter incoming frames
⌈
| Description: | The Bus Mirroring module shall select incoming frames based on filters. If no filter is active, no source frames shall be mirrored. If filters are active, source frames that match at least one filter shall be mirrored. |
|---|---|
| Rationale: | Reduce bus traffic on destination bus. |

Applies To:
| Dependencies: | Configuration of filters, see , and modification of filters, see . |
|---|---|
| Use Case: | Monitor timeout of the response to a transmitted request message. |
| Supporting Material: | Concept 634 "Bus Mirroring" |

⌋

 The Bus Mirroring module shall serialize incoming frames and bus states
⌈
| Description: | The Bus Mirroring module shall serialize incoming frames using a defined mirroring protocol. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

The Bus Mirroring currently does not have any non-functional requirements.

### 14. References

### 15. 附录
*原文标题：Appendix*

### 16. Change History of AUTOSAR Traceable Items

Please note that the lists in this chapter also include requirements that have been removed from the specification in a later version. These requirements do not appear as hyperlinks in the document.

### 17. Traceable Item History of this Document According to AUTOSAR Release R26-11

### 18. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

none

### 19. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

none

### 20. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

none

### 21. Traceable Item History of this Document According to AUTOSAR Release R25-11

### 22. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 23. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 24. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 25. Traceable Item History of this Document According to AUTOSAR Release R24-11

### 26. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 27. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

### 28. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 29. Traceable Item History of this Document According to AUTOSAR Release R23-11

### 30. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 31. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 32. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 33. Traceable Item History of this Document According to AUTOSAR Release R22-11

### 34. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

### 35. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

### 36. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 37. Traceable Item History of this Document According to AUTOSAR Release R21-11

### 38. Added 需求 in R21-11
*原文标题：Added Requirements in R21-11*

### 39. Changed 需求 in R21-11
*原文标题：Changed Requirements in R21-11*

none

### 40. Deleted 需求 in R21-11
*原文标题：Deleted Requirements in R21-11*

none

### 41. Traceable Item History of this Document According to AUTOSAR Release R20-11

### 42. Added 需求 in R20-11
*原文标题：Added Requirements in R20-11*

none

### 43. Changed 需求 in R20-11
*原文标题：Changed Requirements in R20-11*

none

### 44. Deleted 需求 in R20-11
*原文标题：Deleted Requirements in R20-11*

none

### 45. Traceable Item History of this Document According to AUTOSAR Release R19-11

### 46. Added 需求 in R19-11
*原文标题：Added Requirements in R19-11*

none

### 47. Changed 需求 in R19-11
*原文标题：Changed Requirements in R19-11*

none

### 48. Deleted 需求 in R19-11
*原文标题：Deleted Requirements in R19-11*

none

### 49. Traceable Item History of this Document According to AUTOSAR Release 4.4.0

### 50. Added 需求 in 4.4.0
*原文标题：Added Requirements in 4.4.0*

### 51. Changed 需求 in 4.4.0
*原文标题：Changed Requirements in 4.4.0*

none

### 52. Deleted 需求 in 4.4.0
*原文标题：Deleted Requirements in 4.4.0*

none
