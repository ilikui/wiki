# Requirements on Charging Manager (`ChargingManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 1096 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_ChargingManager_1096\AUTOSAR_CP_RS_ChargingManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_ChargingManager_1096\AUTOSAR_CP_RS_ChargingManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_ChargingManager_1096\zzgen\CP_RS_ChargingManager.complete.txt`

## 文档简介

This document specifies requirements on the Charging Manager module.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the Charging Manager module.

### 2. Conventions to be used

### 3. Document Conventions

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

The glossary below includes acronyms and abbreviations relevant to the ChrgM module that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| ChrgM | Charging Manager |
| V2GTp | Vehicle to Grid Transport Protocol |
| EXI | Efficient XML Interchange |
| EV | Electric Vehicle |
| EVSE | Electric Vehicle Supply Equipment |
| EVCC | Electric Vehicle Communication Controller |
| SECC | Supply Equipment Communication Controller |

### 5. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements of the Charging Manager.

### 6. 功能概述
*原文标题：Functional Overview*

The Charing Manager (ChrgM) is responsible for controlling the electric charging between the electric vehicle (EV) and the electric vehicle supply equipment (EVSE).

### 7. 功能性需求
*原文标题：Functional Requirements*

The ChrgM module shall initiate the process of IP address assignment.
  Status: DRAFT
⌈
| Description: | The ChrgM shall provide an API to be used by the EthSM to inform the ChrgM about the state of the data link. Once the data link has been established the ChrgM shall initiate the process of IP address assignment using the Socket Adaptor. |
|---|---|
| Rationale: |  |

Applies To:
| Dependencies: | and |
|---|---|
| Use Case: |  |
| Supporting Material: |  |

⌋

 The ChrgM module shall initiate the process of SECC Discovery Process (SDP).
  Status: DRAFT
⌈
| Description: | The ChrgM shall establish a UDP connection with the Socket Adaptor over which the SDP messages can be exchanged. |
|---|---|
| Rationale: |  |

Applies To:
| Dependencies: | and |
|---|---|
| Use Case: |  |
| Supporting Material: |  |

⌋

 The ChrgM shall establish a TCP-TLS session.
  Status: DRAFT
⌈
| Description: | The ChrgM shall establish a TCP-TLS connection using the Socket Adaptor. |
|---|---|
| Rationale: |  |

Applies To:
| Dependencies: | and |
|---|---|
| Use Case: |  |
| Supporting Material: |  |

⌋

 The ChrgM shall establish a V2G session.
  Status: DRAFT
⌈
| Description: | The ChrgM shall establish a V2G session during which the charging control messages shall be exchanged. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. References

### 9. 附录
*原文标题：Appendix*

### 10. 附录
*原文标题：Appendix*

No content.

### 11. Change history of AUTOSAR traceable items

### 12. Traceable item history of this document according to AUTOSAR Release R25-11

### 13. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 14. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 15. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 16. Traceable item history of this document according to AUTOSAR Release R24-11

### 17. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 18. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| The ChrgM module shall initiate the process of IP address assignment. |  |
| The ChrgM module shall initiate the process of SECC Discovery Process (SDP). |  |
| The ChrgM shall establish a TCP-TLS session. |  |

### 19. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 20. Traceable item history of this document according to AUTOSAR Release R23-11

### 21. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| The ChrgM module shall initiate the process of IP address assignment. |  |
| The ChrgM module shall initiate the process of SECC Discovery Process (SDP). |  |
| The ChrgM shall establish a TCP-TLS session. |  |
| The ChrgM shall establish a V2G session. |  |
| The ChrgM shall implement the EXI (efficient XML interchange). |  |
| The ChrgM shall provide security and authentication for V2G messages. |  |
| The ChrgM shall store, verify and update certificates. |  |
| The ChrgM shall implement the V2GTp (vehicle to grid transport protocol). |  |
| The ChrgM shall communicate with the RTE and CDDs. |  |
| The ChrgM shall provide timers for managing communication. |  |
| The ChrgM shall provide an error handling mechanism for V2G messages. |  |
| The ChrgM shall provide callback functions. |  |

### 22. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 23. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
