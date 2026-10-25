# Requirements on Secure Onboard Communication (`SecureOnboardCommunication`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 653 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_SecureOnboardCommunication_653\AUTOSAR_FO_RS_SecureOnboardCommunication.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_SecureOnboardCommunication_653\AUTOSAR_FO_RS_SecureOnboardCommunication.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_SecureOnboardCommunication_653\zzgen\FO_RS_SecureOnboardCommunication.complete.txt`

## 文档简介

This document lists the requirements applicable to the design of the SecOC module of AUTOSAR.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document lists the requirements applicable to the design of the SecOC module of AUTOSAR.

### 2. Conventions to be used

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

The glossary below includes acronyms and abbreviations relevant to SecureOnboardCommunication that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| MAC | Message Authentication Code |
| SecOC | Secure Onboard Communication |
| NVM | Non volatile memory |
| Authentic I-PDU | An Authentic I-PDU is an arbitrary AUTOSAR I-PDU that is completely secured during network transmission by means of the Secured I-PDU |
| Secured I-PDU | A Secured I-PDU is an AUTOSAR I-PDU that contains Payload of an Authentic I-PDU supplemented by additional Authentication Information. |

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the SecureOnboardCommunication.

### 5. 功能概述
*原文标题：Functional Overview*

The purpose of the secure on-board Communication (SecOC) module is to provide an AUTOSAR BSW Module to transmit secured data between two or more peers exchanging information over an automotive embedded network.

### 6. 功能性需求
*原文标题：Functional Requirements*

### 7. 配置
*原文标题：Configuration*

Selection of Authentic I-PDU
⌈
| Description: | It shall be configurable, which Authentic I-PDU is to be secured. |
|---|---|
| Rationale: | It is necessary to be able to select and configure the Authentic I-PDUs that need to be secured. |
| Applies To: | FO, CP |
| Dependencies: |  |
| Use Case: | The SecOC configurator selects the PDU IDs that refer to I-PDUs that shall be secured. He/she adds security related configuration data so that a specific level of security is realized. |
| Supporting Material: | - |

⌋

 Range of verification retry by the receiver
⌈
| Description: | The range of verification retry with self-updated freshness information shall be configurable. |
|---|---|
| Rationale: | When the receiver is allowed to perform verification retry over a given message with self-updated freshness information, it is necessary to be able to configure the number of retries which are acceptable to match with the desired robustness of the SecOC module. |
| Applies To: | FO, CP |
| Dependencies: |  |
| Use Case: | The security expert and the system designer configure the number of verification retries that are acceptable from a security perspective. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 初始化
*原文标题：Initialisation*

Initialisation of security information
⌈
| Description: | The SecOC module's security configuration shall get initialised at module start-up. |
|---|---|
| Rationale: | The SecOC module needs security configuration information (Key-IDs, Freshness Values) to perform its operations. Therefore, this information shall get recovered and configured before it starts its processing operation. |
| Applies To: | FO, CP |
| Dependencies: | , , |
| Use Case: | The SecOC loads the ID of the PDUs, the authorized authentication retry counter and the properties that are used for the processing of its incoming communications from upper and lower layers. |
| Supporting Material: | - |

⌋

### 9. Normal operations

Capability to transmit data and authentication information separately
⌈
| Description: | SecOC shall support transmitting the Authentic I-PDU and its Authenticator in separate messages. |
|---|---|
| Rationale: | It may not be possible to secure a message by appending additional data for several reasons, requiring it so be sent separately. |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | * The data to be authenticated takes up too much space inside the transmitted messages to add an authenticator of acceptable length |

* A preexisting message needs to be secured for some receivers but for others
* A preexisting message needs to be secured but not all receivers can be updated to support the modified message's content
| Supporting Material: | - |
|---|---|

⌋

 Properly match up data and authentication information when verifying
⌈
| Description: | SecOC shall ensure that an Authentic I-PDU is verified using the correct Authenticator when transmitting them in separate messages. |
|---|---|
| Rationale: | When an Authentic I-PDU and its authenticator are transmitted in separate messages then either message may be lost during transmission. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 支持 for end-to-end and point-to-point protection
*原文标题：Support for end-to-end and point-to-point protection*

If data is not directly transmitted over a direct connection or bus system but rather over several hops or via a gateway, there are two modes of protection which both shall be supported by the SecOC module: end-to-end and point-to-point protection. End point of communication is defined by an ECU and not by a SWC.

* Definition of point to point secured communication: In a point-to-point scheme the communications are secured between each single peer of the network transmitting the data, so that in case of multiple hops, an authentication is performed several times (i.e. on each sender of the transmission) path and a verification is performed several times (i.e. on each receiver of the transmission path).
* Definition of end to end secured communication: In an end-to-end scheme the communications are secured between the sender and the receiver(s) regardless of the intermediate hops. Authentication is performed once at the sender side and verification is performed once at the receiver(s) side.

 Support for end-to-end and point-to-point protection
⌈
| Description: | Support for end-to-end and point-to-point protection. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 关机 Operation
*原文标题：Shutdown Operation*

Security operational information persistency
⌈
| Description: | The SecOC module shall provide a secured persistency mechanism in NVM of security information that is used for its normal operation before the shutdown operation is finished. |
|---|---|
| Rationale: | Security information like freshness counter can be reused when the SecOC module is shutdown to avoid resynchronization of SecOC modules at each restart. |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | Security information before the shutdown is reused after the restart of the module. |
| Supporting Material: | - |

⌋

### 12. Fault Operation

Transmitted PDU authentication failure handling
⌈
| Description: | Upon authentication failure of an authentic I-PDU, the unsecured PDU shall not get sent or it shall be sent with a default authentication information. |
|---|---|
| Rationale: | It shall be in the responsibility of the system designer if the same functional reactivity that is associated to the transmission failure of a given PDU shall remain applicable to its transmission failure when it is secured. When building an Authenticator fails,It shall be possible to decide not to send the PDU or to send an unsecure PDU. |
| Applies To: | FO, CP |
| Dependencies: | - |
| Use Case: | It shall be possible to decide if authentication failure leads to a communication error or not. |
| Supporting Material: | - |

⌋

 Received PDU verification failure handling
⌈
| Description: | Upon verification failure of a received secured PDU, the authentic PDU shall not get propagated to any other module and a notification shall be provided. |
|---|---|
| Rationale: | Signal data contained in a secured PDU which resulted in failed verification shall not be used for further processing since the signal data is considered to be manipulated. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 14. 时序需求
*原文标题：Timing Requirements*

Authentication and verification processing time
⌈
| Description: | Authentication and verification processing shall be performed in a timely fashion so that the real time critical signals do not get affected. |
|---|---|
| Rationale: | Transmission and reception of time critical signals between the running applications of two or more peers shall not get penalised by the additional processing of their underlying communication software layers such that the signals are finally rejected. |

It is necessary that when time critical signals transmitted and received through a Secured I-PDU, the additional processing required by the SecOC module remains under a value that is predictable and compatible with the time constraints of the concerned signals.
| Applies To: | FO, CP |
|---|---|
| Dependencies: |  |
| Use Case: | A legitimate authenticated message is verified and passed to the receiving SWC within the expected timeframe without experiencing signal monitoring errors. |
| Supporting Material: | - |

⌋

### 15. References

### 16. 附录
*原文标题：Appendix*

### 17. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 18. Traceable item history of this document according to AUTOSAR Release R25-11

### 19. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

### 20. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

### 21. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 22. Traceable item history of this document according to AUTOSAR Release R24-11

### 23. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

### 24. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 25. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none
