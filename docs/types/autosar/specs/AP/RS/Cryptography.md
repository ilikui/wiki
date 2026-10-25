# Requirements on Cryptography (`Cryptography`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 889 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_Cryptography_889\AUTOSAR_AP_RS_Cryptography.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_Cryptography_889\AUTOSAR_AP_RS_Cryptography.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_Cryptography_889\zzgen\AP_RS_Cryptography.complete.txt`

## 文档简介

This document specifies requirements on the Crypto Stack of the AUTOSAR Adaptive Platform.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the Crypto Stack of the AUTOSAR Adaptive Platform.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to `RS_Cryptography` that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| HSM | Hardware Software Module |
| PKI | Public Key Infrastructure |
| SHE | Secure Hardware Extension |
| TPM | Trusted Platform Module |

### 4. 需求规范
*原文标题：Requirements Specification*

### 5. 功能概述
*原文标题：Functional Overview*

The AUTOSAR Adaptive Platform provides functionality to perform cryptographic operations by using standardized interfaces and associated modeling.

### 6. 功能性需求
*原文标题：Functional Requirements*

The Crypto Stack shall conceal symmetric keys from the users
  Status: DRAFT
⌈
| Description: | There shall be no interfaces for the users to directly extract symmetric key values. Keys shall be addressed via identifiers by the users, preventing the key values disclosure. |
|---|---|
| Rationale: | If symmetric key values are available in the application at runtime it increases the risk of key compromise. If symmetric key values are stored in the application, centralized key management (e.g. renewal) is hard. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Keys are stored in HSMs and never exposed in plain text. |
| Supporting Material: | - |

⌋

 The Crypto Stack shall conceal asymmetric private keys from the users
  Status: DRAFT
⌈
| Description: | There shall be no interfaces for the users to directly extract asymmetric private key values. Keys shall be addressed via identifiers by the users, preventing the key values disclosure. |
|---|---|
| Rationale: | If asymmetric private key values are available in the application at runtime it increases the risk of key compromise. If asymmetric private key values are stored in the application, centralized key management (e.g. renewal) is hard. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Non-Functional 需求
*原文标题：Non-Functional Requirements*

The Crypto Stack API shall support an efficient mechanism of error states notification
  Status: DRAFT
⌈
| Description: | The Crypto Stack should deliver comprehensive information about an error state what was detected. This information should be enough to recognize the error conditions and make decision how to recover from the error state and continue execution. The delivering mechanism should be convenient for applications' developers and satisfy the Autosar AP C++14 Coding Guidelines. Note: The error states are not expected to be seen in normal program execution. |
|---|---|
| Rationale: | Basic functionality. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 8. References

### 9. 附录
*原文标题：Appendix*

### 10. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 11. Traceable item history of this document according to AUTOSAR Release R25-11

### 12. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 13. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 14. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

### 15. Traceable item history of this document according to AUTOSAR Release R24-11

### 16. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 17. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 18. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 19. Traceable item history of this document according to AUTOSAR Release R23-11

### 20. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 21. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 22. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
