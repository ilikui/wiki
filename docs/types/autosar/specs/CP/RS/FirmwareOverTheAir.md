# Requirements on Firmware Over-The-Air (`FirmwareOverTheAir`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 944 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_FirmwareOverTheAir_944\AUTOSAR_CP_RS_FirmwareOverTheAir.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_FirmwareOverTheAir_944\AUTOSAR_CP_RS_FirmwareOverTheAir.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_FirmwareOverTheAir_944\zzgen\CP_RS_FirmwareOverTheAir.complete.txt`

## 文档简介

This document specifies requirements on the AUTOSAR FOTA (Firmware-Over-The-Air) Target module realized as CDDs.

The FOTA Master mentioned in this document is analogous to the UCM-Master, which is planned to be specified in upcoming AUTOSAR releases.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the AUTOSAR FOTA (Firmware-Over-The-Air) Target module realized as CDDs.

The FOTA Master mentioned in this document is analogous to the UCM-Master, which is planned to be specified in upcoming AUTOSAR releases.

### 2. How to read this document

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to  that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| FOTA | (AUTOSAR) Firmware Over The Air |

### 4. 需求规范
*原文标题：Requirements Specification*

The following tasks of the entire FOTA procedure shall be allocated to the FOTA Target ECU:

* Realization of FOTA related diagnostics communication services
* Guarding of the FOTA sequence, which is usually implementer specific
* Buffering of received data chunks and appropriate packetizing of those to meet the requirements of the memory stack, especially with respect to minimum page size of the used flash
* Providing data chunks to memory stack and reporting the result of write access to diagnostic communication manager (Dcm), which finally provides a diagnsotic response to previously received request
* Realization of update interruption and resuming, i.e. finding the last possible point to proceed with an update and, if possible, not to restart entirely.
* Triggering ECU-internal rollback mechanisms to recover ECU's previous image based on request from FOTA Master

### 5. 功能概述
*原文标题：Functional Overview*

No content.

### 6. 功能性需求
*原文标题：Functional Requirements*

### 7. 需求 on FOTA Target ECUs
*原文标题：Requirements on FOTA Target ECUs*

capabilities of FOTA Target ECU for background installation
⌈
| Description: | FOTA Target ECU shall be capable to install, i.e. receive and store, a new SW image while the current image on the ECU is executed in its normal operating mode. |
|---|---|
| Rationale: | Reduce the vehicle downtime caused by an update. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Dependent on the image size, vehicle bus topology and other environmental factors, like ECU and system HW capabilities, the transfer of data from a FOTA Master ECU to FOTA Target ECUs as well as storage of those data in the FOTA Target ECU can take a long time. Realizing these steps in the normal operational mode, i.e. while driving, will significantly reduce the time, where the vehicle is blocked or functions not available due to an ongoing update. |
| Supporting Material: | Note: for the activation of new image the vehicle shall be still put into a safe-state, e.g. standstill, engine off etc. |

⌋

 Capabilities of FOTA Target ECU for rollback
⌈
| Description: | FOTA Target ECUs shall be capable to internally recover the SW image, being active before last (FOTA) activation. This may happen on a trigger by the FOTA Master instance. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 需求 on FOTA Handler (CDD)
*原文标题：Requirements on FOTA Handler (CDD)*

Implementation of a FOTA Handler on FOTA Target ECUs
⌈
| Description: | The FOTA Handler is a SW implementation on FOTA Target ECUs, which shall be realized as a complex device driver (CDD). |
|---|---|
| Rationale: | Since the FOTA Handler module will interface the memory stack as well as the DCM and potential application SW, it is realized as CDD in order to keep the "layered-SW-architecuter" approach of AUTOSAR |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | The FOTA Handler provides over-the-air update capability to an ECU according to FOTA requirements and mechanisms, as long as all mentioned memory prerequisites can be fulfilled. |
| Supporting Material: |  |

⌋

 Data processing and forwarding to the memory stack on the FOTA Target ECU
⌈
| Description: | FOTA Handler shall be able to receive software chunks of different length, process them internally and provide them to the memory stack, which is finally writing the data to dedicated memory location. |
|---|---|
| Rationale: | The amount of received data can differ from the amount, that can be written directly into the memory, e.g. the received data doesn't fit to the page size requirements of the used flash driver instance. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 存储 Stack 需求
*原文标题：Memory Stack Requirements*

Note: The term memory stack shall substitute the memory driver (FlashDriver) and memory management modules (e.g. Fee) regardless if they are realized as internal or external driver, since no decisions on architectural solutions have been made yet.

 Provide interfaces to the memory stack
⌈
| Description: | The memory stack shall provide interfaces to be used by the FOTA Handler module to program the new image data to the flash memory. |
|---|---|
| Rationale: | Transfer of FOTA chunk data from the FOTA Handler module to the memory stack. The definition of the interfaces to the memory stack are not yet specified and therefore not listed in this document. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | In order to finally write the received data from the FOTA image chunk to the low-level memory stack (flash procedure). |
| Supporting Material: |  |

⌋

 Memory stack shall handle the targeted types of a flash device(s)
⌈
| Description: | The memory stack shall handle the different types of flash devices used in a FOTA procedure. |
|---|---|
| Rationale: | Ensure standardized access to different types of flash devices. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 需求 on FOTA 系统
*原文标题：Requirements on FOTA system*

Rollback to previous software triggered by FOTA Master ECU
⌈
| Description: | The FOTA Handler module shall be able to initiate and manage the restore of the previously active software in case of errors during the activation procedure on behalf of the FOTA master instance. |
|---|---|
| Rationale: | The FOTA Target ECU self triggered rollback provides more reliability and downtime reduction. As multiple FOTA Target ECUs can be requested to execute a rollback at once, it reduces the overall vehicle downtime due to rollback parallelization. Note: The realization of the final rollback procedure within a FOTA Target ECU is project specific and therefore implementation specific. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | In case of an error during or after activation of the new software, there are reliable measures in place to prevent bricked ECUs caused by those failed update. |
| Supporting Material: |  |

⌋

 FOTA Master ECU triggered Rollback
⌈
| Description: | The FOTA Target ECU shall be able to execute a rollback instruction received from FOTA Master ECU. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

No content.

### 12. References

### 13. 附录
*原文标题：Appendix*

### 14. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 15. Traceable item history of this document according to AUTOSAR Release R25-11

### 16. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 17. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 18. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 19. Traceable item history of this document according to AUTOSAR Release R24-11

### 20. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 21. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 22. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 23. Traceable item history of this document according to AUTOSAR Release R23-11

### 24. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 25. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 26. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 27. Traceable item history of this document according to AUTOSAR Release R22-11

### 28. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

none

### 29. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 30. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none
