# Requirements on E2E (`E2E`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 847 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_E2E_847\AUTOSAR_FO_RS_E2E.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_E2E_847\AUTOSAR_FO_RS_E2E.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_E2E_847\zzgen\FO_RS_E2E.complete.txt`

## 文档简介

This document specifies requirements on the E2E protocol. The E2E protocol defines abstract mechanisms to provide End-to-End communication protection according to requirements of ISO 26262:2018 (all parts) . These mechanisms shall allow safe data transmission of safety-related data for all integrity levels defined by  over a non-safety-related communication path. This document covers the protocol part only and therefore the End-to-End path just partly.

These requirements shall be used as a basis for the specification of detailed E2E mechanisms and their usage in AUTOSAR implementations.

Note: The document contains well known requirements from classic platform documents and brings in new requirements for the adaptive platform as far as foreseen. Use cases for E2E protection in adaptive platform are under elaboration. More details on the relevant use cases will be added within next version of this document.

This is a draft specification to indicate the intended scope and direction of discussion to the AUTOSAR development community. This specification has seen less quality measures, less discussions among partners and may, generally, be in a less mature state.

## 章节详细内容

### 1. 范围 of this document
*原文标题：Scope of this document*

This document specifies requirements on the E2E protocol. The E2E protocol defines abstract mechanisms to provide End-to-End communication protection according to requirements of ISO 26262:2018 (all parts) . These mechanisms shall allow safe data transmission of safety-related data for all integrity levels defined by  over a non-safety-related communication path. This document covers the protocol part only and therefore the End-to-End path just partly.

These requirements shall be used as a basis for the specification of detailed E2E mechanisms and their usage in AUTOSAR implementations.

Note: The document contains well known requirements from classic platform documents and brings in new requirements for the adaptive platform as far as foreseen. Use cases for E2E protection in adaptive platform are under elaboration. More details on the relevant use cases will be added within next version of this document.

This is a draft specification to indicate the intended scope and direction of discussion to the AUTOSAR development community. This specification has seen less quality measures, less discussions among partners and may, generally, be in a less mature state.

### 2. How to read this document

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to `AUTOSAR_RS_E2E` that are not included in the AUTOSAR glossary .

| Acronym / Abbreviation: | Description: |
|---|---|
| E2E | End-to-End. |
| E2E Profile | A set of combined E2E measures as efficient solution for a particular communication stack. |
| BER | Bit Error Rate - a rate of corrupted bits in a byte stream, e.g. 1e-5. |

### 4. 功能概述
*原文标题：Functional Overview*

Safety-related automotive systems often use a safe data transmission to protect communication between components (as required by ISO 26262:2018 (all parts) ), which means that:

# Communication errors shall be prevented (e.g. by means of appropriate software architecture and by means of verification).
# If error prevention alone is insufficient (e.g. for inter-ECU communication), then

  * the errors shall be detected at runtime to a sufficient degree (cf. diagnostic coverage, safe failure fraction) and
  * the rate of undetected dangerous errors shall be below some allowed limit (cf. residual error rate, probability of dangerous failure per hour or probability of dangerous failure on demand).

### 5. 功能性 safety and communication
*原文标题：Functional safety and communication*

With respect to the exchange of information in safety-related systems, the mechanisms for the in-time detection of causes for faults, or effects of faults as listed below, can be used to design suitable safety concepts, e.g. to achieve freedom from interference between system elements sharing a common communication infrastructure (see ISO 26262-6:2018, annex D.2.4).

| Type of communication fault | Description |
|---|---|
| Repetition of information | A type of communication fault, where information is received more than once. |
| Loss of information | A type of communication fault, where information or parts of information are removed from a stream of transmitted information. |
| Delay of information | A type of communication fault, where information is received later than expected. |
| Insertion of information | A type of communication fault, where additional information is inserted into a stream of transmitted information. |
| Masquerading | A type of communication fault, where non-authentic information is accepted as authentic information by a receiver. |
| Incorrect addressing | A type of communication fault, where information is accepted from an incorrect sender or by an incorrect receiver. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Sources of faults in E2E communication

E2E communication protection aims to detect and mitigate the causes for or effects of communication faults arising from:

# Software faults,
# Random hardware faults,
# Transient faults

These three sources are described in the sections below.

### 7. 软件 faults
*原文标题：Software faults*

Software like, communication stack modules and RTE, may contain faults, which are of a systematic nature. Systematic faults may occur in any stage of the system's life cycle including specification, design, manufacturing, operation, and maintenance, and they will always appear when the circumstances (e.g. trigger conditions for the root-cause) are the same. The consequences of software faults can be failures of the communication, like interruption of sending of data, overrun of the receiver (e.g. buffer overflow), or underrun of the sender (e.g. buffer empty). To prevent (or to handle) resulting failures the appropriate technical measures to detect and handle such faults (e.g. program flow monitoring or E2E supervision) have to be considered.

### 8. Random hardware faults

A random hardware fault is typically the result of electrical overload, degradation, aging or exposure to external influences (e.g. environmental stress) of hardware parts. A random hardware fault cannot be avoided completely, but its probability can be evaluated and appropriate technical measures can be implemented (e.g. diagnostics).

### 9. Transient faults

Transient faults typically result from external influences or environmental stress, this includes influences like EMI, ESD, humidity, corrosion, temperature or mechanical stress (e.g. vibration).

### 10. Safe End-to-End communication in AUTOSAR

To provide a safe End-to-End communication, a solution shall be integrated within the AUTOSAR methodology which does require no or a minimal amount of additional non-standard code like wrappers.

The functionality of End-to-End communication protection is to be supported by the E2E protocol.

The E2E protocol provides

* Mechanisms to detect a subset of communication faults listed in 4.1. The relevant communication faults depend on the type of communication (e.g. periodic, non-periodic, sender/receiver, etc.).
* The definition of profiles 1, 2, 4, 5, 6, 7, 11 and 22 including check and protect functions for one single data transfer. The appropriate profile is to be selected according to the used physical bus layer and the size of the transferred data.
* An optional state machine describing the logical algorithm of E2E monitoring and state handling for a number of data transfers between two dedicated communication partners independent of the used profile.

Note: Additional architectural measures may be necessary to ensure safe operation of the E2E protocol implementation.

### 11. E2E protection 概念
*原文标题：E2E protection concepts*

An E2E protection concept is more than just adding adequate safety mechanisms to data elements (e.g. using E2E Profile 1 or 2). To ensure the integrity of a communication channel with the required safety integrity level acc. to ISO 26262 the E2E protection concept needs to consider the safety-related properties of the data transmitted via a bus network that requires protection. Basic principles to implement an E2E protection concept that focuses on correctness, consistency, completeness, timeliness and the detection of non-availability of data are provided in this chapter.

Note: For an E2E protection concept that focuses on ensuring the availability of data, an implementation of the communication channel with a sufficient fault tolerance is needed (e.g. using independent redundant channels).

Note: The usage of redundant communication channels may create a need for additional safety mechanisms (e.g. to ensure the consistency of the data streams when transmitted independently).

Typical basic principles for effective E2E protection concepts are:

# The infrastructure used for data transmission (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Integrity of a communication channel

To determine the integrity of communication and to distinguish if the received data are valid the consumer of the data (e.g. receiver) can:

* evaluate each received protected message separately and
* monitor all evaluation results of a number of protected data received within a determined time interval for error detection and qualification t_{EDQ} up to the data received at last.

To implement the monitoring function the consumer of the protected data (e.g. receiver) creates a history of the received data. Valid received data are stored with a history as follows:

* Generation 0 is the latest (up to date) received valid data
* Generation 1 is the second-latest received valid data
* Generation 2 is the third-latest received valid data
* etc.

To do so, each recently received valid message is stored as Generation 0 having a reference value indicating its age set to 0. Every time the consumer of the protected data (e.g. receiver) checks for reception of new data it increments the age of its already received data by 1. Stored data can be used as basis for a safety related functionality provided by the consumer of the protected data (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 需求追踪
*原文标题：Requirements tracing*

The following table references the features and links to the fulfillments of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| E2E Protection with E2E Transformer and E2E Library |  |  |
| Allow integrators to configure safety mechanisms to detect communication faults |  |  |

### 14. 需求规范
*原文标题：Requirements Specification*

### 15. 功能性需求
*原文标题：Functional Requirements*

### 16. Supported communication models and features

E2E protocol is defined to support different types of message-based communication. Signal-based communication:

* periodic/mixed periodic sender/receiver communication

Service-oriented communication:

* periodic/mixed periodic event-based communication
* non-periodic method-based communication (client-server communication)

 E2E protocol shall support protected periodic/mixed periodic communication
⌈
| Description: | The E2E protocol shall support protected periodic communication. |
|---|---|

This includes the following periodicity:

* periodic
* mixed periodic
| Rationale: | E2E mechanism for message-oriented communication |
|---|---|
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | * Sender/receiver communication in CP, e.g. the following use cases |

  * Receiver being invoked independently from sender
  * Receiver being invoked on arrival of data
  * Mixed: Receiver being invoked when data arrives and independently.)
* Events implement message-oriented communication in AP service interfaces.
| Supporting Material: | - |
|---|---|

⌋

 E2E protocol shall support protected non-periodic communication
⌈
| Description: | This E2E protocol shall support protected non-periodic communication. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. E2E detected faults

E2E protocol is defined to cover a number of faults described in 4.1. However, it depends on the type of communication which kind of faults can be detected, e.g. for non-periodic event-based communication loss of communication data cannot be detected by E2E protocol mechanisms.

 E2E protocol shall provide a timeout detection mechanism
  Upstream requirements:
⌈
| Description: | E2E protocol shall provide a configurable mechanism to detect timeouts and delayed data during periodic communication. |
|---|---|
| Rationale: | This mechanism can be used to detect loss and delay of communication data, as requested by ISO 26262-6:2018 , annex D.2.4. |
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | * Detection of lost or delayed messages in periodic sender/receiver communication |

* Detection of lost or delayed events in periodic service-oriented communication
| Supporting Material: | - |
|---|---|

⌋

Note: A timeout detection mechanism to identify lost or delayed method responses in non-periodic method communication cannot be provided by an E2E protocol specification. This kind of mechanism has to be specified and implemented either by the application itself or as part of communication management functionality.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. E2E Algorithms and Profiles

E2E protocol is defined to cover various sizes of exchanged data and different types of physical bus medium. Therefore, a number of E2E profiles are created. Each E2E profile provides a set of E2E measures as required in 6.1.2.

 E2E protocol shall provide different E2E profiles
  Upstream requirements:
⌈
| Description: | E2E protocol shall provide E2E profiles, where each E2E profile completely defines a particular safety protocol (including header structure, behavior as state machine, error handling etc). Each E2E profile shall be an efficient solution for a particular communication stack used underneath (which are either FlexRay, CAN, CAN FD, LIN or Ethernet), used data length and data frequency, and the required integrity level (see ) of the exchanged data. Note: Each communication stack (e.g. FlexRay) has different BER, which depends on, for example: |
|---|---|

* Bit error rate on channel
* FIT values of HW
* Number of ECUs
* Topology (e.g. CAN->Gateway->FR)
* Open/closed transmission system

The profiles are supposed to cover typical combinations of above factors.
| Rationale: | Interoperability of safety-related communication partners, usage of QM communication system. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Safety applicability and overall safety assumptions

Implementation of E2E protocol shall fulfill ISO 26262
⌈
| Description: | The E2E protocol shall be implemented according to ISO 26262 . |
|---|---|
| Rationale: | E2E communication protection is state-of-art in automotive safety-related series products. |
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | Communication between applications of main chassis ECU and power steering ECU. |
| Supporting Material: | - |

⌋

### 20. E2E 转换器
*原文标题：E2E Transformer*

The E2E Transformer is invoked via RTE and it is placed between the RTE and E2E Library. It is responsible for the configuration and state management of the E2E protection.

 An E2E Transformer shall be provided
  Upstream requirements:
⌈
| Description: | An E2E Transformer shall be provided which can be invoked via RTE and is placed between the caller (RTE) and E2E Library. It shall be responsible for the configuration and state management of the E2E protection and it shall provide a protection for messages serialized by at least Some/IP and COM-based transformer. |
|---|---|
| Rationale: | The whole complexity of the configuration and management of E2E Library stays within the E2E Transformer. Thanks to this, E2E protection can be realized without additional integrator code. |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | Communication between main chassis ECU SW-C and power steering ECU SW-C. Some/IP is a serialization protocol for Ethernet. COM-based transformers are typically used in CAN, FlexRay, CanFD |
| Supporting Material: | - |

⌋

### 21. E2E 库
*原文标题：E2E Library*

The E2E Library provides a set of safety protocols, in a form of library functions invoked by SW-Cs. It provides:

# E2E profiles 1, 2, 4, 5, 6, 7, 11, 22.
# E2E state machine

Note: Each communication stack (e.g. FlexRay) has different error rates which depend on for example:

* Bit error rate on channel
* FIT values of HW
* Number of ECUs
* Topology (e.g. CAN->Gateway->FR)
* Open/closed transmission system
* Frequency of safety related messages

The profiles, based on proven-in-use solutions, are supposed to cover typical combinations of above factors.

 E2E Library shall call the CRC routines of CRC library
⌈
| Description: | E2E Library shall not provide CRC routine implementations. Instead, it shall call the CRC routines of CRC library (document UID 016). |
|---|---|
| Rationale: | Reuse of existing AUTOSAR functionality |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | CRC8 of CRC library to be used in one of the profiles for protecting CAN communication. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Moved 需求
*原文标题：Moved Requirements*

The following requirements were moved from the document Requirements on E2E Communication Protection (UID 651, SRS) with release R19-11 of AUTOSAR Classic Platform and Foundation. Please find a mapping between old and new requirement IDs in the table below.

| Old requirement ID | New requirement ID |
|---|---|
| SRS_E2E_08540 |  |
| SRS_E2E_08538 |  |
| SRS_E2E_08528 |  |
| SRS_E2E_08527 |  |
| SRS_E2E_08529 |  |
| SRS_E2E_08530 |  |
| SRS_E2E_08531 |  |
| SRS_E2E_08533 |  |
| SRS_E2E_08534 |  |
| SRS_E2E_08536 | RS_E2E_08536 |
| SRS_E2E_08537 |  |
| SRS_E2E_08539 |  |

### 23. References

### 24. 附录
*原文标题：Appendix*

### 25. Changehistory of AUTOSAR traceable items

### 26. Traceable item history of this document according to AUTOSAR Release R25-11

### 27. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 28. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

### 29. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 30. Traceable item history of this document according to AUTOSAR Release R24-11

### 31. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 32. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

### 33. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none
