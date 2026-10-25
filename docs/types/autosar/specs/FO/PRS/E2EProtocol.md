# E2E Protocol Specification (`E2EProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 849 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_E2EProtocol_849\AUTOSAR_FO_PRS_E2EProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_E2EProtocol_849\AUTOSAR_FO_PRS_E2EProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_E2EProtocol_849\zzgen\FO_PRS_E2EProtocol.complete.txt`

## 文档简介

The concept of E2E communication protection assumes that safety-related  data exchange shall be protected at runtime against the effects of faults on the communication link (see ). Faults detected between a sender and a receiver using E2E communication protection include systematic software faults, such as faults that are introduced on the lower communication layers of sender or receiver, and random hardware faults introduced by the MCU hardware, communication peripherals, transceivers, communication lines or other communication infrastructure.

Examples for such faults are random HW faults (e.g. corrupt registers of a CAN transceiver), interference (e.g. due to EMC), and systematic faults of the lower communication layers (e.g. RTE, IOC, COM and network stacks).

By using E2E communication protection mechanisms, faults in lower software and hardware layers can be detected and handled at runtime. The E2E Supervision provides mechanisms for E2E communication protection, adequate for safety-related communication having requirements up to ASIL D.

The algorithms of protection mechanisms are implemented in the E2E Supervision. The callers of the E2E Supervision are responsible for the correct usage of the E2E Supervision, in particular for providing correct parameters the E2E Supervision routines.

The E2E communication protection allows the following:

# It protects the safety-related data to be sent by adding control data,
# It verifies the safety-related data received using this control data, and
# It provides the check result to the receiver, which then has to handle it sufficiently.

To provide the appropriate solution addressing flexibility and standardization, AUTOSAR specifies a set of flexible E2E profiles that implement an appropriate combination of E2E communication protection mechanisms. Each specified E2E profile has a fixed set of mechanisms, as well as configuration options to configure the protocol header layout and status evaluation on the receiver side.

The E2E Supervision can be invoked from communication middleware e.g. from Adaptive Platform's ara::com, Classic Platform's RTE. It can be also invoked in a non-standardized way from other software, e.g. non-volatile memory managers, local IPCs, or intra-ECU bus stacks.

Appropriate usage of the E2E Supervision to fulfill the specific safety requirements for communication depends on several aspects. The specified profiles are capable, to a high probability, of detecting a large variety of com

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The concept of E2E communication protection assumes that safety-related  data exchange shall be protected at runtime against the effects of faults on the communication link (see ). Faults detected between a sender and a receiver using E2E communication protection include systematic software faults, such as faults that are introduced on the lower communication layers of sender or receiver, and random hardware faults introduced by the MCU hardware, communication peripherals, transceivers, communication lines or other communication infrastructure.

Examples for such faults are random HW faults (e.g. corrupt registers of a CAN transceiver), interference (e.g. due to EMC), and systematic faults of the lower communication layers (e.g. RTE, IOC, COM and network stacks).

By using E2E communication protection mechanisms, faults in lower software and hardware layers can be detected and handled at runtime. The E2E Supervision provides mechanisms for E2E communication protection, adequate for safety-related communication having requirements up to ASIL D.

The algorithms of protection mechanisms are implemented in the E2E Supervision.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Communication Management that are not included in the .

| , Abbreviation / Acronym: | Description: |
|---|---|
| Data ID | An identifier that uniquely identifies the message / data element / data. |
| Source ID | An identifier that uniquely identifies the source of the message / data element / data (i.e., in case different sources produce the same message / data element / data - like different clients invoking the same method at a server). |
| Repetition | The same message was received more than once. |
| Loss | A message was not received. |
| Delay | A message was received later than expected. |
| Insertion | Unexpected information or an extra message was inserted. |
| Masquerade | non-authentic information is accepted as authentic information by a receiver. |
| Incorrect addressing | information is accepted from an incorrect sender or by an incorrect receiver. |
| Corruption | A communication fault, which changes information. |
| Asymmetric information | Receivers do receive different information from the same sender. |
| Subset | Information from a sender received by only a subset of the receivers. |
| Blocking | Blocking access to a communication channel. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. Standards and Norms

# SAE-J1850 8-bit CRC
# CCITT-FALSE 16-bit CRC. Refer to:

  ITU-T Recommendation X.25 (10/96) (Previously ,,CCITT Recommendation") SERIES X: DATA NETWORKS AND OPEN SYSTEM COMMUNICATION Public data networks - Interfaces Interface between Data Terminal Equipment (DTE) and Data Circuit-terminating Equipment (DCE) for terminals operating in the packet mode and connected to public data networks by dedicated circuit

  Section 2.2.7.4 ,,Frame Check Sequence (FCS) field" and Appendix I ,,Examples of data link layer transmitted bit patterns by the DCE and the DTE" http://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-X.25-199610-I!!PDF-E&type=items
# IEEE 802.3 Ethernet 32-bit CRC
# "32-Bit Cyclic Redundancy Codes for Internet Applications"
# Collection and evaluation of CRC polynomials by Philip Koopman, Carnegie Mellon University https://users.ece.cmu.edu/~koopman/crc/

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

E2E communication protection is limited depending on the used type of communication. From E2E perspective the following types are distinguished:

* Signal based communication
* Service oriented communication with events
* Service oriented communication in Client/Server architecture
* Signal to Service Translation

In general, the behavior of the E2E protection mechanisms should be the same. However, some limitations exist depending on the communication type.

### 8. 限制 in 通用
*原文标题：Limitations in general*

* Communication errors which are detected at lower layer (e.g. by Ethernet FCS, IP header checksum, UDP checksum, SOME/IP header irregularities) will lead to discarding the related message. Thus, these messages might not reach the application at all.

### 9. 限制 in signal based communication
*原文标题：Limitations in signal based communication*

It is also called sender/receiver communication.

* E2E communication protection is limited to periodic or semi-periodic data communication paradigm, where the receiver has any expectancy on the regular reception of data and in case of communication loss/timeout or error, it performs an error handling.
* If one of E2E functions to protect (sender) or to check (receiver) is not called periodically, then some communication failure modes (loss, delay) may not be detected.
* If E2E protection is invoked at the level of data elements (e.g. from SW-Cs) and 1:N communication model is used and the data elements are sent using more than one IPDU, then all these I-PDUs shall have the same layout.
* Currently AUTOSAR does not provide the functionality to describe and handle more than one layout for the same data element (e.g. within the RTE) by using different protection mechanisms depending on Intra-ECU and Inter-ECU communication. Thus, for a 1:N sender-receiver relationship the user of E2E-protection is responsible to select one appropriate layout for the to be protected data elements. E.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 限制 in 服务 oriented communication with events
*原文标题：Limitations in service oriented communication with events*

It is also called event communication. (Note that here the name event is a bit confusing as a periodic communication is required. This is taken from the SOME/IP event.)

* E2E communication protection is limited to periodic or semi-periodic data communication paradigm, where the receiver has any expectancy on the regular reception of data and in case of communication loss/timeout or error, it performs an error handling.
* If one of the E2E functions to protect (sender) or to check (receiver) data is not called periodically, then some communication failure modes (loss, delay) may not be detected.

### 11. 限制 in 服务 oriented communication in Client/Server 架构
*原文标题：Limitations in service oriented communication in Client/Server architecture*

The specified E2E communication protection for methods is limited to

* Communication between N clients and one dedicated server (N:1); this means, an E2E protected service is provided by exactly one server per system. In other words, if E2E protection is invoked at the level of data elements, then N:1 multiplicity, implicit communication, and remaining communication models (in particular client-server model) are not supported.

The specified E2E communication protection for methods may not detect all communication failure modes:

* If method requests are not invoked periodically, then some communication failure modes (loss, delay) may not be detected for received requests at the server.
* For C/S communication the following use cases need to be considered:

  In case of using any PXX profile the defined E2E protection mechanisms assume no a priori knowledge at the server about the client that is requesting data (N:1 communication), communication failure modes (repetition, insertion) which are client specific may not be detected for received requests at the server.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Signal to 服务 Translation
*原文标题：Signal to Service Translation*

Signal to service translation is limited to translation between sender/receiver and service oriented communication with events.

### 13. 适用的车型领域
*原文标题：Applicability to car domains*

The E2E supervision is applicable for the realization of safety-related automotive systems implemented by various SW-Cs distributed across different ECUs in a vehicle, interacting via communication links. The Supervision may also be used for intra-ECU communication (e.g. between memory partitions, processes, OSes/VMs in the same microcontroller, between CPU cores or microcontrollers).

### 14. 需求追踪
*原文标题：Requirements Tracing*

| Requirement | Description | Satisfied by |
|---|---|---|
| Implementation of E2E protocol shall fulfill ISO 26262 |  |  |
| E2E protocol shall provide different E2E profiles |  |  |
| Each E2E profile shall use an appropriate subset of specific protection mechanisms |  |  |
| Each E2E profile shall define a set of protection mechanisms and its behavior |  |  |
| E2E Library shall call the CRC routines of CRC library |  |  |
| CRC used in a E2E profile shall be different than the CRC used by the underlying physical communication protocol |  |  |
| E2E protocol shall provide E2E Check status to the application |  |  |
| SW-Cs shall tolerate a number of invalid/corrupted received data elements |  |  |
| An E2E protection mechanism for inter-ECU communication of short to large data shall be provided |  |  |
| E2E protocol shall support protected periodic/mixed periodic communication |  |  |
| E2E protocol shall support protected non-periodic communication |  |  |
| E2E protocol shall support dynamic restart of communication peers |  |  |
| E2E protocol shall support variable length of transmitted data |  |  |
| E2E protocol shall provide a timeout detection mechanism |  |  |
| E2E protocol shall provide a detection mechanism for corrupted data |  |  |
| E2E protocol shall p |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 功能规范
*原文标题：Functional specification*

This chapter contains the specification of the internal functional behavior of the E2E supervision, this includes how the layout of the E2E-Header is defined, how the E2E-Header is created and how the E2E-Header is evaluated, and how the E2E-Statemachine is defined. For general introduction of the E2E supervision, see .

### 16. 概述 of communication protection
*原文标题：Overview of communication protection*

An important aspect of a communication protection mechanism is its standardization and its flexibility for different purposes. This is resolved by having a set of E2E Profiles, that define a combination of protection mechanisms, a message format, and a set of configuration parameters.

Moreover, some E2E Profiles have standard E2E variants. An E2E variant is simply a set of configuration options to be used with a given E2E Profile. For example, in E2E Profile 1, the positions of CRC and counter are configurable. The E2E variant 1A requires that CRC starts at bit 0 and counter starts at bit 8.

E2E communication protection works as follows:

* Sender: addition of control fields like CRC or counter to the transmitted data;
* Receiver: evaluation of the control fields from the received data, calculation of control fields (e.g. CRC calculation on the received data), comparison of calculated control fields with an expected/received content.

Each E2E Profile has a specific set of control fields with a specific functional behavior and with specific properties for the detection of communication faults.

### 17. 概述 of E2E Profiles
*原文标题：Overview of E2E Profiles*

The E2E Profiles provide a consistent set of data protection mechanisms, designed to protecting against the faults considered in the fault model.

Each E2E Profile provides an alternative way to protect the communication, by means of different algorithms. However, E2E Profiles have similar interfaces and behavior.

Each E2E Profile uses a subset of the following data protection mechanisms:

# A CRC, provided by CRC Supervision;
# A Sequence Counter incremented at every transmission request, the value is checked at receiver side for correct incrementation;
# An Alive Counter incremented at every transmission request, the value checked at the receiver side if it changes at all, but correct incrementation is not checked;
# A specific ID for every port data element sent over a port or a specific ID for every message-group (global to system, where the system may contain potentially several ECUs);

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 错误检测
*原文标题：Error detection*

Upstream requirements:
⌈
The internal Supervision mechanisms error detection and reporting shall be implemented according to the pre-defined E2E Profiles specified in this document.
⌋

  Upstream requirements:
⌈
The AUTOSAR E2E-Protocol shall use the error codes defined in .
⌋

 Error Codes
  Upstream requirements:
⌈
| Type or error or status | Related code |
|---|---|
| At least one pointer parameter is a NULL pointer | E2E_E_INPUTERR_NULL |
| At least one input parameter is erroneous, e.g. out of range | E2E_E_INPUTERR_WRONG |
| Function completed successfully | E2E_E_OK |

⌋

### 19. Common 类型 of E2E Profiles
*原文标题：Common Types of E2E Profiles*

Some E2E profile make use of common data types which are shared among the different profiles. - Those shared types are introduced in this section instead of the profile specific sections.

### 20. Profile Xm Message 类型 Enumeration
*原文标题：Profile Xm Message Type Enumeration*

Upstream requirements:
⌈
The MessageType argument of the `E2E_PXXmProtect`, `E2E_PXXmForward`, and `E2E_PXXmCheck` functions shall be set to one of the following enumeration values (see ).
⌋

 E2E Profile Xm Message Type Enumeration
  Upstream requirements:
⌈
| Name | Value | Description |
|---|---|---|
| STD_MESSAGETYPE_REQUEST | 0 | The type of the message is a request message which is sent from the client to the server. |
| STD_MESSAGETYPE_RESPONSE | 1 | The type of the message is a response message which is sent from the server to the client. |

⌋

### 21. Profile Xm Message Result Enumeration

Upstream requirements:
⌈
The MessageResult argument of the `E2E_PXXmProtect`, `E2E_PXXmForward`, and `E2E_PXXmCheck` functions shall be set to one of the following enumeration values (see ).
⌋

 E2E Profile Xm Message Result Enumeration
  Upstream requirements:
⌈
| Name | Value | Description |
|---|---|---|
| STD_MESSAGERESULT_OK | 0 | The type of the result in the response message is a normal (i.e., a non erroneus) result. This value is also used for the request messages, where the value of this field is fixed to this value. |
| STD_MESSAGERESULT_ERROR | 1 | The type of the result int the response message is an error (i.e., an erroneus) result. |

⌋

### 22. 通用 Functionality of an E2E-Profile
*原文标题：General Functionality of an E2E-Profile*

Each E2E-Profile provides the following 3 functionalities:

# Protect
# Forward
# Check

The 'protect' functionality, simply called the 'protect function' creates the E2E-Header and therefore protects the data to be sent over a communication medium.

The 'forward' functionality, simply called the 'forward function', is similar to the protect function and creates the header for the data to be transmitted but allows the additional replication of a received E2E-State. The main use-case for this function is Signal-Service-Translation where e.g. a E2E-protected signal is received, and the E2E-Status shall be replicated on the outgoing side.

The 'check' functionality, simply called the 'check function', evaluates the E2E-Header of the received message and checks for occurred communication faults. These faults are mirrored in the returned E2E-States.

In addition to the single E2E-Profiles a E2E-Statemachine evaluates the returned E2E-States over a longer period.

### 23. Functionality of the Counter

On the receiver side, by evaluating the counter of received data against the counter of previously received data, the following is detected:

# Repetition:

  a. no new data has arrived since last invocation of E2E Supervision check function,

  b. the data is repeated
# OK:

  a. counter is incremented by one (i.e. no data lost),

  b. counter is incremented more than by one, but still within allowed limits (i.e. some data lost),
# Error: a. counter is incremented more than allowed (i.e. too many data lost).

Case 1 corresponds to the failed alive counter check, and case 3 correspond to failed sequence counter check.

The above requirements are specified in more details by the UML diagrams in the following document sections.

### 24. Timeout 检测
*原文标题：Timeout detection*

The previously mentioned mechanisms (e.g. for Profile 5: CRC, Counter, Data ID) enable to check the validity of received data element, when the receiver is running independently from the data transmission, i.e. when receiver is not blocked waiting for Data Elements or respectively messages, but instead if the receiver reads the currently available data (i.e. checks if new data is available). Then, by means of the counter, the receiver can detect loss of communication and timeouts.

The attribute State->NewDataAvailable == FALSE means that the transmission medium (e.g RTE) reports that no new data element is available at the transmission medium. The attribute State->Status = `E2E_PXXSTATUS_REPEATED` means that the transmission medium (e.g. RTE) provided new valid data element, but this data element has the same counter as the previous valid data element. Both conditions represent an unavailability of valid data that was updated since the previous cycle.

### 25. Cyclic Redundancy Check

The Cyclic Redundancy Check, short CRC, is used to determine if bits flipped during the transmission of a message.

In contrast to errors indicated based on the evaluation of the counter - CRC-errors are unlikely to be a ,false alarm' (e.g. when using a good CRC-polynomial a detected CRC-error indicates that a data corruption occurred). Considering this fact, it is implausible that a stream of data without any detected CRC-errors contains a significant number of undetected corrupted data.

Due to this, a more stringent reaction upon CRC-errors is adequate. After detection of the first CRC-error on the subsequent data stream may contain a significant number of undetected corrupted data.

The maximum number of CRC-errors a receiver tolerates shall be limited, because the probability of receiving more than one undetected erroneous, within its error detection and qualification time interval, messages cannot be neglected. A wrong CRC indicates, that the integrity of the communication channel is affected.

The fault tolerance designed into the receiver (see `UC_E2E_00170`) may be exceeded as a possible consequence.

### 26. 规范 of E2E Profiles - Generalized Part
*原文标题：Specification of E2E Profiles - Generalized Part*

This chapter contains the part of the specification for E2E profiles that is used in more than one profile specification. The behavior of E2E profiles is described independently of a specific profile. Text and figures use placeholder like "XX" which are replaced by a profile-specific value or text. All profile-specific content, including these placeholders, is defined in the corresponding profile-specific sub-chapter. This chapter does not apply to method profiles. This chapter does only apply to profiles where the fields of DataID and Length are part of the profile header. The E2E mechanisms can detect the following faults or effects of faults:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Counter

In E2E Profiles the counter is initialized, incremented, reset and checked by E2E profile. The counter is not manipulated or used by the caller of the E2E Supervision.

  Upstream requirements:
⌈
In E2E Profiles, on the sender side, for the first transmission request of a data element the counter shall be initialized with 0 and shall be incremented by 1 for every subsequent send request. When the counter reaches the maximum value, then it shall restart with 0 for the next send request. The maximum value of the counter depends on the size of the counter It is 0xFF (8bit counter), 0xFF'FF (16bit counter) or 0xFF'FF'FF'FF (32 bit).
⌋

### 28. 数据 ID
*原文标题：Data ID*

The unique Data IDs are to verify the identity of each transmitted safety-related data element.

 Uniqueness of Data IDs
  Replaces:
  Upstream requirements:
⌈
In E2E profiles, the Data IDs should be globally unique within the network of communicating system (made of several ECUs each sending different data).
⌋

In case of usage of E2E Supervision for protecting data elements (i.e invocation from RTE), due to multiplicity of communication (1:1 or 1:N), a consumer of a data element expects only a specific data element, which is checked by E2E Supervision using Data ID.

In case of usage of E2E Supervision for protecting messages (i.e. invocation from COM), the receiver COM expects at a reception only a specific message, which is checked by E2E Supervision using Data ID.

### 29. Length

The Length field is introduced to support variable-size length - the Data [] array storing the serialized data can potentially have a different length in each cycle. The Length includes user data + E2E Header (CRC + Counter + Length + DataID).

### 30. CRC

E2E Profiles use CRC of different length depending on the length of the message to ensure a high detection rate and high Hamming Distance.

  Upstream requirements: ,
⌈
E2E Profiles shall use the CRC functions listed in chapters , , , , for calculating the CRC.
⌋

Note: The `Crc_CalculateCRC32P4`() is different from the 32 bit CRCs used by FlexRay, CAN and TCP/IP. It is also provided by different software modules (FlexRay, CAN and TCP/IP stack CRCs/checksums are provided by hardware support in Communication Controllers or by communication stack software, but not by CRC Supervision).

  Upstream requirements:
⌈
The CRC shall be calculated over the entire E2E header (excluding the CRC bytes) and over the user data.
⌋

### 31. Timeout 检测
*原文标题：Timeout detection*

The previously mentioned mechanisms (CRC, Counter, Data ID, Length) enable to check the validity of received data element, when the receiver is executed independently from the data transmission, i.e. when receiver is not blocked waiting for Data Elements or respectively messages, but instead if the receiver reads the currently available data (i.e. checks if new data is available). Then, by means of the counter, the receiver can detect loss of communication and timeouts.

### 32. Creation of E2E-Header

### 33. E2E_PXXProtect()

The function `E2E_PXXProtect`() performs the steps as specified by the following diagrams in this section.

  Upstream requirements:
⌈
The function `E2E_PXXProtect`() shall have the overall behavior as shown in .
⌋

  Upstream requirements:
⌈
The step "Verify inputs of the protect function" in `E2E_PXXProtect`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Compute offset" in `E2E_PXXProtect`(), `E2E_PXXForward`() and `E2E_PXXCheck`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Write Length" in `E2E_PXXProtect`() and `E2E_PXXForward`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Write Counter" in `E2E_PXXProtect`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Write DataID" in `E2E_PXXProtect`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Compute CRC" in `E2E_PXXProtect`(), `E2E_PXXForward`() and in `E2E_PXXCheck`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Write CRC" in `E2E_PXXProtect`() and `E2E_PXXForward`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Increment Counter" in `E2E_PXXProtect`() and `E2E_PXXForward`() shall behave as shown in .
⌋

### 34. E2E_PXXForward()

The `E2E_PXXForward`() function of an E2E profile is called by a SW-C to protect its application data and to forward an received E2E status for use cases like translation of signal based to service oriented communication. If the received E2E status equals `E2E_P_OK` the behavior of the function shall be the same like `E2E_PXXProtect`(). The function `E2E_PXXForward`() performs the steps as specified by the following diagrams in this section.

  Upstream requirements:
⌈
The function `E2E_PXXForward`() shall have the overall behavior as shown in .
⌋

Following steps are described in section

* "Compute Offset" see
* "Write Length" see
* "Compute CRC" see
* "Write CRC" see
* "Increment Counter" see

  Upstream requirements:
⌈
The step "Verify inputs of the forward function" in `E2E_PXXForward`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Write Counter" in `E2E_PXXForward`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Write DataID" in `E2E_PXXForward`() shall behave as shown in .
⌋

### 35. Evaluation of the E2E-Header

### 36. E2E_PXXCheck()

The function `E2E_PXXCheck`() performs the actions as specified by the following diagrams in this section and according to diagram .

  Upstream requirements:
⌈
The function `E2E_PXXCheck`() shall have the overall behavior as shown in .
⌋

Following steps are described in section

* "Compute Offset" see
* "Compute CRC" see

  Upstream requirements:
⌈
The step "Verify inputs of the check function" in `E2E_PXXCheck`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Read Length" in `E2E_PXXCheck`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Read Counter" in `E2E_PXXCheck`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Read DataID" in `E2E_PXXCheck`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Read CRC" in `E2E_PXXCheck`() shall behave as shown in .
⌋

  Upstream requirements:
⌈
The step "Do Checks" in `E2E_PXXCheck`() shall behave as shown in .
⌋

### 37. Get Header Info

`PXX_GetHeaderInfo`
  Upstream requirements:
⌈
The function `E2E_PXXGetHeaderInfo`() shall behave as shown in .
⌋

### 38. Profile 数据类型
*原文标题：Profile Data Types*

### 39. Profile Protect 状态类型
*原文标题：Profile Protect State Type*

Upstream requirements:
⌈
The `E2E_PXXProtect` and `E2E_PXXForward` functions 'state' shall have the members defined in .
⌋

 E2E Profile Protect State Type
  Upstream requirements:
⌈
| Name | Type | Description |
|---|---|---|
| Counter | Unsigned Integer | Counter to be used for protecting the next Data. The initial value is 0, which means that in the first cycle, Counter is 0. Each time E2E_PXXProtect() is called, it increments the counter up to the maximum value (0xFF for 8 bit counter, 0xFF'FF for a 16 bit counter and 0xFF'FF'FF'FF for a 32 bit counter). After the maximum value is reached, the next value is 0x0. The overflow is not reported to the caller. |

⌋

### 40. Profile Check Status 类型
*原文标题：Profile Check Status Type*

Upstream requirements:
⌈
The `E2E_PXXCheck` functions 'State' shall have the members defined in .
⌋

 E2E Profile XX Check State Type
  Upstream requirements:
⌈
| Name | Type | Description |
|---|---|---|
| Counter | Unsigned Integer | Counter of the data in previous cycle. |
| Status | Enumeration | Result of the verification of the Data in this cycle, determined by the Check function. |

⌋

### 41. Profile Check Status Enumeration

Upstream requirements:
⌈
The `E2E_PXXCheck` functions 'State->Status' enumeration type shall consist of the following enumeration values (see ).
⌋

 E2E Profile Check Status Enumeration
  Upstream requirements:
⌈
| Name | State Type | Description |
|---|---|---|
| E2E_PXXSTATUS_OK | OK | The checks of the Data in this cycle were successful (including counter check, which was incremented by 1). |
| E2E_PXXSTATUS_NONEWDATA | Error | The Check function has been invoked but no new Data is available since the last call, according to communication medium (e.g. RTE, COM). As a result, no E2E checks of Data have been consequently executed. This may be considered similar to E2E_PXXSTATUS_REPEATED. |
| E2E_PXXSTATUS_ERROR | Error | Error not related to counters occurred (e.g. wrong crc, wrong length, wrong options, wrong Data ID). |
| E2E_PXXSTATUS_REPEATED | Error | The checks of the Data in this cycle were successful, with the exception of the repetition. |
| E2E_PXXSTATUS_OKSOMELOST | OK | The checks of the Data in this cycle were successful (including counter check, which was incremented within the allowed configured delta). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 277 章（内容从略，见纯文本全文）

42. GetHeaderInfo 数据类型
43. 规范 of E2E Profiles for Methods - Generalized Part
44. Counter
45. 数据 ID
46. Length
47. CRC
48. Message 类型
49. Message Result
50. Source ID
51. Timeout 检测
52. Creation of the E2E header
53. E2E_PXXmProtect()
54. E2E_PXXmForward()
55. Evaluation of the E2E Header
56. E2E_PXXmSourceCheck()
57. E2E_PXXmSinkCheck()
58. Get Header Info
59. Profile 数据类型
60. Profile XXm Protect 状态类型
61. Profile XXm Check 状态类型
62. Profile XXm Check Status Enumeration
63. GetHeaderInfo 数据类型
64. 规范 of E2E Profile 1
65. Header Layout
66. Counter
67. 数据 ID
68. CRC calculation
69. Creation of E2E-Header
70. E2E_P01Protect
71. Calculate CRC
72. E2E_P01Forward
73. Evaluation of E2E- Header
74. E2E_P01Check
75. Profile 数据类型
76. Profile 1 Protect 状态类型
77. Profile 1 Check Status 类型
78. Profile 1 Check Status Enumeration
79. Profile 1 配置类型
80. E2E Profile 1 协议示例
81. DataIDMode set to E2E_P01_DATAID_ALT
82. DataIDMode set to E2E_P01_DATAID_LOW
83. DataIDMode set to E2E_P01_DATAID_NIBBLE
84. 规范 of E2E Profile 2
85. Header Layout
86. Counter
87. DataID
88. CRC
89. Creation of E2E-Header
90. E2E_P02Protect
91. E2E_P02Forward
92. Evaluation of the E2E-Check
93. E2E_P02Check
94. Profile 数据类型
95. Profile 2 Protect 状态类型
96. Profile 2 Check Status 类型
97. Profile 2 Check Status Enumeration
98. Profile 2 配置类型
99. E2E Profile 2 协议示例
100. 规范 of E2E Profile 4
101. Header Layout
102. Profile 4 配置类型
103. E2E Profile 4 协议示例
104. 规范 of E2E Profile 5
105. Header layout
106. Counter
107. 数据 ID
108. Length
109. CRC
110. Creation of the E2E-Header
111. E2E_P05Protect
112. E2E_P05Forward
113. Evaluation of the E2E-Header
114. E2E_P05Check
115. Profile 数据类型
116. Profile 5 Protect 状态类型
117. Profile 5 Check Status 类型
118. Profile 5 Check Status Enumeration
119. Profile 5 配置类型
120. E2E Profile 5 协议示例
121. 规范 of E2E Profile 6
122. Header layout
123. Counter
124. 数据 ID
125. Length
126. CRC
127. Creation of E2E-Header
128. E2E_P06Protect
129. E2E_P06Forward
130. Evaluation of E2E-Header
131. E2E_P06Check
132. Profile 数据类型
133. Profile 6 Protect 状态类型
134. Profile 6 Check Status 类型
135. Profile 6 Check Status Enumeration
136. Profile 6 配置类型
137. E2E Profile 6 协议示例
138. 规范 of E2E Profile 7
139. Header layout
140. Profile 7 配置类型
141. E2E Profile 7 协议示例
142. 规范 of E2E Profile 8
143. Header layout
144. Profile 8 配置类型
145. E2E Profile 8 协议示例
146. 规范 of E2E Profile 11
147. Header Layout
148. Counter
149. 数据 ID
150. Length
151. CRC
152. Creation of the E2E-Header
153. E2E_P11Protect
154. E2E_P11Forward
155. E2E_P11Check
156. Profile 11 数据类型
157. Profile 11 Protect 状态类型
158. Profile 11 Check Status 类型
159. Profile 11 Check Status Enumeration
160. Profile 11 配置类型
161. E2E Profile 11 协议示例
162. DataIDMode set to E2E_P11DATAID_NIBBLE
163. DataIDMode set to E2E_P11DATAID_NIBBLE, Offset set to 64
164. 规范 of E2E Profile 22
165. Header layout
166. Counter
167. 数据 ID
168. Length
169. CRC
170. Creation of E2E-Header
171. E2E_P22Protect
172. E2E_P22Forward
173. Evaluation of E2E-Header
174. E2E_P22Check
175. Profile 22 数据类型
176. Profile 22 配置类型
177. E2E Profile 22 协议示例
178. Offset set to 64
179. 规范 of E2E Profile 44
180. Header Layout
181. Profile 44 配置类型
182. E2E Profile 44 协议示例
183. 规范 of E2E Profile 76
184. Header Layout
185. Counter
186. Length
187. CRC
188. Creation of the E2E-Header
189. E2E_P76Protect
190. Evaluation of the E2E-Header
191. E2E_P76Check
192. Profile 数据类型
193. Profile 76 Protect 状态类型
194. Profile 76 Check 状态类型
195. Profile 76 Check Status Enumeration
196. Profile 76 配置类型
197. E2E Profile 76 协议示例
198. 规范 of E2E Profile 4m
199. Header Layout
200. Profile 4m 配置类型
201. E2E Profile 4m 协议示例
202. Request 示例
203. Response 示例
204. 错误 Response 示例
205. 规范 of E2E Profile 7m
206. Header Layout
207. Profile 7m 配置类型
208. E2E Profile 7m 协议示例
209. Request 示例
210. Response 示例
211. 错误 Response 示例
212. 规范 of E2E Profile 8m
213. Header Layout
214. Profile 8m 配置类型
215. E2E Profile 8m 协议示例
216. Request 示例
217. Response 示例
218. 错误 Response 示例
219. 规范 of E2E Profile 44m
220. Header Layout
221. Profile 44m 配置类型
222. E2E Profile 44m 协议示例
223. Request 示例
224. Response 示例
225. 错误 Response 示例
226. E2E 状态 machine的规范
227. the 状态 machine的概述
228. 状态 machine 规范
229. Transition from E2E_SM_NODATA
230. Transition from E2E_SM_INIT
231. Transition from E2E_SM_VALID
232. Transition from E2E_SM_INVALID
233. 状态 Machine 类型
234. E2E 状态 Machine 配置类型
235. E2E 状态 Machine 状态类型
236. E2E 状态 Machine Status Enumeration
237. Profile specific Check Status to 状态 Machine Check Status Mappings
238. FTTI and E2E Parameters
239. E2E API 规范
240. API of middleware to applications
241. API of E2E
242. 配置 Parameters
243. 通用 Constraints
244. E2E 状态 Machine Settings
245. 协议 usage and 指南
246. E2E and SOME/IP
247. Client-Server Communication
248. Periodic use of E2E check
249. 错误处理
250. Maximal lengths of 数据, communication buses
251. 功能性 Safety 需求
252. Message Layout
253. Alignment of signals to byte 限制
254. Unused bits
255. Byte order (Endianness)
256. 配置 constraints on 数据 IDs
257. 数据 IDs
258. Double 数据 ID 配置 of E2E Profile 1 and 11
259. Alternating 数据 ID 配置 of E2E Profile 1 and 11
260. Nibble 配置 of E2E Profile 1 and 11
261. 附录
262. Usage and generation of DataID Lists for E2E profile 2 and 22
263. 示例 A (persistent routing 错误)
264. Assumptions
265. Solution
266. 示例 B (forbidden 配置)
267. Conclusion
268. DataID List 示例
269. Change history of AUTOSAR traceable items
270. Traceable item history of this document according to AUTOSAR Release R19-11
271. Added Constraints
272. Changed Constraints
273. Deleted Constraints
274. Added 规范 Items
275. Changed 规范 Items
276. Deleted 规范 Items
277. Traceable item history of this document according to AUTOSAR Release R20-11
278. Added Constraints in R20-11
279. Changed Constraints in R20-11
280. Deleted Constraints in R20-11
281. Added 规范 Items in R20-11
282. Changed 规范 Items in R20-11
283. Deleted 规范 Items in R20-11
284. Traceable item history of this document according to AUTOSAR Release R21-11
285. Added Constraints in R21-11
286. Changed Constraints in R21-11
287. Deleted Constraints in R21-11
288. Added 规范 Items in R21-11
289. Changed 规范 Items in R21-11
290. Deleted 规范 Items in R21-11
291. Traceable item history of this document according to AUTOSAR Release R22-11
292. Added Constraints in R22-11
293. Changed Constraints in R22-11
294. Deleted Constraints in R22-11
295. Added 规范 Items in R22-11
296. Changed 规范 Items in R22-11
297. Deleted 规范 Items in R22-11
298. Traceable item history of this document according to AUTOSAR Release R23-11
299. Added Constraints in R23-11
300. Changed Constraints in R23-11
301. Deleted Constraints in R23-11
302. Added 规范 Items in R23-11
303. Changed 规范 Items in R23-11
304. Deleted 规范 Items in R23-11
305. Traceable item history of this document according to AUTOSAR Release R24-11
306. Added Constraints in R24-11
307. Changed Constraints in R24-11
308. Deleted Constraints in R24-11
309. Added 规范 Items in R24-11
310. Changed 规范 Items in R24-11
311. Deleted 规范 Items in R24-11
312. Traceable item history of this document according to AUTOSAR Release R25-11
313. Added Constraints in R25-11
314. Changed Constraints in R25-11
315. Deleted Constraints in R25-11
316. Added 规范 Items in R25-11
317. Changed 规范 Items in R25-11
318. Deleted 规范 Items in R25-11
