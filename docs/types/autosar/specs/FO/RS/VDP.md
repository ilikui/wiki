# Requirements on Vehicle Data Protocol (`VDP`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 1118 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_VDP_1118\AUTOSAR_FO_RS_VDP.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_VDP_1118\AUTOSAR_FO_RS_VDP.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_VDP_1118\zzgen\FO_RS_VDP.complete.txt`

## 文档简介

This document specifies the requirements on the Vehicle Data Protocol (VDP).

VDP aims at adressing the need for distributing data collection tasks from a central data collection unit on an HPC to remote ECUs (in particular Classic Platform ECUs) as depicted in figure . The remote ECUs are assumed to have local access to the required data. This distribution requires independent adaptations of used sampling and transmission modes and hence a systematic decoupling of those. This and related requirements are listed in this document.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies the requirements on the Vehicle Data Protocol (VDP).

VDP aims at adressing the need for distributing data collection tasks from a central data collection unit on an HPC to remote ECUs (in particular Classic Platform ECUs) as depicted in figure . The remote ECUs are assumed to have local access to the required data. This distribution requires independent adaptations of used sampling and transmission modes and hence a systematic decoupling of those. This and related requirements are listed in this document.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to `FO_RS_VDP` that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| VDP | Vehicle Data Protocol |
| Remote ECU | A remote ECU is the owner of the data resource wherein a functional cluster can have local access for retrieving this data. |
| Central ECU | A central ECU is the location of a vehicle central data collection unit, which aggregates all data from the remote ECUs provided with VDP. |
| HPC | High performance computer or high performance computing machine |
| Data point | A data point refers to a data resource inside the vehicle with a well-defined semantic that can be collected (e.g. vehicle speed). |
| Data point sample | A data point sample refers to the value of a data point acquired at a specific point in time (e.g. vehicle speed at 12 am). |

### 5. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the `RS_VDP`.

### 6. 功能概述
*原文标题：Functional Overview*

VDP aims at addressing the need for dynamic adaptation of data sampling and transmission modes and the set of retrieved data after production of vehicles, as summarized in the use case below.

| ID | Name | Description |
|---|---|---|
| UC_VDP_00001 | Dynamic In-Vehicle Data Collection | The dynamic collection of data from ECUs in the vehicle. Therein it shall support both data following a push semantic (notifications, event-based) as well as data following a pull semantic (get-APIs). The transmission may happen immediately after sampling, but it may also be delayed until a transmission trigger condition is fulfilled. |

### 7. 功能性需求
*原文标题：Functional Requirements*

Multi-Version Support
⌈
| Description: | VDP shall support multiple protocol versions to distinguish network message versions. |
|---|---|
| Rationale: | - |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | - |
| Supporting Material: | - |

⌋

 VDP Dynamic Configuration of Data Points
⌈
| Description: | VDP shall support dynamic configuration of data points at a remote ECU. |
|---|---|

Additional Information:

This means in particular that the relevant data can be described by structured information which can be processed by the remote unit. The structured description must be assigned by the protocol to a dynamic identifier.
| Rationale: | The aim is to allow for a more flexible selection of data points to be sampled while reducing the process overload of introducing static descriptions into the remote ECUs. |
|---|---|
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | - |
| Supporting Material: | - |

⌋

 VDP Different Modes for Data Sampling
⌈
| Description: | VDP shall support different modes for data sampling in context of dynamically configured data points. The sampling modes VDP shall support are: |
|---|---|

* Cyclic: The data point shall be sampled cyclically with a dynamically configured frequency.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. References

### 9. 附录
*原文标题：Appendix*

### 10. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 11. Traceable item history of this document according to AUTOSAR Release R24-11

### 12. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| Multi-Version Support |  |
| VDP Dynamic Configuration of Data Points |  |
| VDP Different Modes for Data Sampling |  |
| VDP Different Modes for Data Transmission |  |
| Detection of Missing Data on the Central ECU |  |
| VDP Temporary Interruption of Data Sampling |  |
| VDP Efficient Representation of Meta Data |  |
| VDP Error Handling |  |
| VDP Control Sequence Enforcement |  |

### 13. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 14. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 15. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 16. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 17. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
