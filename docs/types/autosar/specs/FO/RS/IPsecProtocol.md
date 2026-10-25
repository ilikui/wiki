# Requirements on IPsec Protocol (`IPsecProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 970 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_IPsecProtocol_970\AUTOSAR_FO_RS_IPsecProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_IPsecProtocol_970\AUTOSAR_FO_RS_IPsecProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_IPsecProtocol_970\zzgen\FO_RS_IPsecProtocol.complete.txt`

## 文档简介

This document defines requirements of IPsec in the AUTOSAR Foundation. The motivation is to ensure interoperability of IPsec within Adaptive platforms and between Adaptive and Classic configurations.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document defines requirements of IPsec in the AUTOSAR Foundation. The motivation is to ensure interoperability of IPsec within Adaptive platforms and between Adaptive and Classic configurations.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Autosar RS IPsec that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym | Description |
|---|---|
| AH | Authentication Header |
| DB | Database |
| ESP | Encapsulating Security Payload |
| ICV | Integrity Check Value |
| IKE | Internet Key Exchange |
| IKEv2 | Internet Key Exchange version 2 |
| IP | Internet Protocol |
| IPsec | Internet Protocol Security |
| PAD | Peer Authorization Database |
| PKI | Public Key Infrastructure |
| PSK | Pre-Shared Keys |
| RAM | Random Access Memory |
| SA | Security Association |
| SAD | Security Association Database |
| SPD | Security Policy Database |
| TCP/IP | Transmission Control Protocol / Internet Protocol |
| V2X | Vehicle to everything |

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the IPsecProtocol.

### 5. 功能概述
*原文标题：Functional Overview*

IPsec is a standard for authentication and encryption on the IP protocol layer 3. How it works in general and is intended to be used in AUTOSAR is described in the IPsec implementation explanatory .

In general, strongSwan  is used as reference. It is an open source implementation of IPsec. If there are any uncertainties about the IPsec protocol from the general RFCs describing it , , ,  or the requirements defined in this document, the strongSwan implementation can be checked for clarification.

### 6. 功能性需求
*原文标题：Functional Requirements*

IPsec shall be supported according to IETF RFC 4301
⌈
| Description: | IPsec shall be supported according to IETF RTF 4301. Limitation: all requirements related to tunnel mode are optional, e.g. section 5.1.2, 7.1 and 7.2 |
|---|---|
| Rationale: | To enable secured communication over IP |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IETF RFC 4301 |

⌋

 The IP Authentication Header (AH) shall be supported according to IETF RFC 4302
⌈
| Description: | The IP Authentication Header (AH) shall be implemented in the TCP/IP stack as stated in IETF RFC 4302. Limitation: Section 3.1.2, related to tunnel mode, may or may not be implemented |
|---|---|
| Rationale: | To enable secured communication over IP |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IETF RFC 4302 |

⌋

 IP Encapsulating Security Payload (ESP) shall be supported according to IETF RFC 4303
  Status: DRAFT
⌈
| Description: | The IP Encapsulating Security Payload (ESP) shall be implemented in the TCP/IP stack as stated in IETF RFC 4303. Limitation: Any section related to tunnel mode, may or may not be implemented, e.g. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. References

### 8. 附录
*原文标题：Appendix*

### 9. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 10. Traceable item history of this document according to AUTOSAR Release R25-11

### 11. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 12. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 13. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 14. Traceable item history of this document according to AUTOSAR Release R24-11

### 15. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 16. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 17. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

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
