# Requirements on I-PDU Multiplexer (`IPDUMultiplexer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 181 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_IPDUMultiplexer_181\AUTOSAR_CP_RS_IPDUMultiplexer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_IPDUMultiplexer_181\AUTOSAR_CP_RS_IPDUMultiplexer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_IPDUMultiplexer_181\zzgen\CP_RS_IPDUMultiplexer.complete.txt`

## 文档简介

The goal of this document is to define the functional and non-functional requirements on the AUTOSAR I-PDU-Multiplexer module (IPduM).

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

The goal of this document is to define the functional and non-functional requirements on the AUTOSAR I-PDU-Multiplexer module (IPduM).

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

The glossary below includes acronyms and abbreviations relevant to I-PDU Multiplexer that are not included in the AUTOSAR Glossary .

| Acronym: | Description: |
|---|---|
| contained I-PDU | I-PDU being transported inside a Container I-PDU |
| Container I-PDU | I-PDU serving as the Container collecting several I-PDUs to be transported together (e.g. in one frame) |
| dynamic part | According to the value of the selector field some parts of the I-PDU have a different layout. These parts of the I-PDU that can contain different signals are called dynamic part. The dynamic part must not necessarily be contiguous. |
| Multi-PDU-to-Container Mapping | Multi-PDU-to-Container Mapping means using the same Container I-PDU with more than one contained I-PDU. To be able to recognize each I-PDU at reception a header containing an ID and the length is placed in front of each contained I-PDU. |
| multiplexed I-PDU | I-PDU multiplexing means using the same PCI of an I-PDU with more than one unique layout of its SDU. A selector field is a part of the SDU of the multiplexed I-PDU. It is used to distinguish the different layouts of the multiplexed I-PDUs from each other |
| PCI | "Protocol Control Information" |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the I-PDU Multiplexer.

### 5. 功能概述
*原文标题：Functional Overview*

The AUTOSAR IPduM is placed next to the PduR-Module within the AUTOSAR layered architecture.

I-PDU multiplexing means using the same PCI of an I-PDU with more than one unique layout of its SDU. A selector field is a part of the SDU of the multiplexed I-PDU. It is used to distinguish the different layouts of the multiplexed I-PDUs from each other.

Multiplexing of I-PDUs is currently known from CAN, but is not restricted to this communication system.

The I-PDU Multiplexer Module is responsible to combine appropriate I-PDUs received from COM via IPDU-router to new, multiplexed I-PDUs sent back to the I-PDU Router on sender-side. On receiver-side it is responsible to interpret the content of multiplexed I-PDUs and provide COM via IPDU-router with its appropriate separated I-PDUs by taking into account the value of the selector field.

### 6. 功能性需求
*原文标题：Functional Requirements*

### 7. 配置
*原文标题：Configuration*

For a multiplexed I-PDU there shall be exactly one selector field
⌈
| Description: | For a multiplexed I-PDU there shall be exactly one selector field. |
|---|---|
| Rationale: | reduce complexity |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The size in bits of the selector field shall be configurable
⌈
| Description: | The size in bits of the selector field shall be configurable in a range of one bit and 16 bits. |
|---|---|
| Rationale: | The size of the selector field should be according to the number of different states of the multiplexer required. Typically a four-bit selector field is sufficient. |

Applies To:
| Dependencies: | SRS_IpduM_02803 |
|---|---|
| Use Case: | A four-way multiplexing requires two bits |
| Supporting Material: | - |

⌋

 The position of the selector field within the PDU shall be configurable
⌈
| Description: | The position of the selector field within the PDU shall be configurable. The configuration shall follow the following rules: |
|---|---|

* contiguous bits
* static size
| Rationale: | Downwards compatibility. Do not change layout of static signals when turning an I-PDU into a multiplexed I-PDU. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 初始化
*原文标题：Initialization*

The initial values of the static part shall be derived from the COM configuration
⌈
| Description: | The initial values of the static part shall be derived from the COM configuration. The initial value of the dynamic part shall be derived from the COM configuration regarding the initial value of the selector field. |
|---|---|
| Rationale: | Reuse of existing COM functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

Note:

The selector field is initialized like a normal COM signal within the dynamic part.

### 9. I-PDU Multiplexing

The three parts of each multiplexed I-PDU must not necessarily be contiguous
⌈
| Description: | Each multiplexed I-PDU consists of three different parts. These parts must not necessarily be contiguous. |
|---|---|

# selector field
# dynamic part
# static part (optional, see `SRS_IpduM_02808`)

For signals within these parts the normal signal placing rules apply, as defined in `AUTOSAR_SWS_COM` .
| Rationale: | Backwards compatibility to current solutions. |
|---|---|

Applies To:
| Dependencies: | SRS_IpduM_02804 |
|---|---|
| Use Case: | This behaviour is currently used in Volkswagen ECUs. |

Example:

S1

* SF is the selector field
* The dynamic part consists of two subparts D1 and D2

  D1 and D2 contain different signals according to the selector field value (see next table)
* The static part consists of three subparts S1, S2 and S3.

  S1, S2 and S3 contain signals which are not multiplexed

For each dynamic subpart a different signal layout may be configured. Then different signals shall be sent out according to the selector field value.

Example (m1, m2, ... is a signal within the dynamic part of a I-PDU):

selector field value

0

1

2

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Dynamic I-PDU to Container 映射
*原文标题：Dynamic I-PDU to Container Mapping*

Dynamic I-PDU Mapping
⌈
| Description: | One or more I-PDUs shall be mappable to a Container-PDU. If an I-PDU is mapped to a Container, it shall be subject to the Multi-PDU-to-Container Mapping. |
|---|---|
| Rationale: | Mapping multiple PDUs to one frame reduces bus load by improving usage of enhanced bandwidth. |

Applies To:
| Dependencies: | A Container-PDU shall either support static or dynamic mapping (see SRS_IpduM_02825) but no mixture. |
|---|---|
| Use Case: | Efficient transmission of small PDUs of high bandwidth busses |
| Supporting Material: | - |

⌋

 The temporal order of I-PDUs shall be preserved
⌈
| Description: | The temporal order in which the I-PDUs are extracted from a Container PDU and passed to upper layer shall be the same as they have been passed to IpduM on Transmission side. |
|---|---|
| Rationale: | Multi-PDU-to-Container Mapping shall have no effect on the order, thus avoiding problems e.g. with sequence counters |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Temporal order of instances of the same I-PDU must not be changed |
| Supporting Material: | - |

⌋

 Two different Header Sizes shall be supported
⌈
| Description: | The Multi-PDU-to-Container Mapping shall support headers of 64 bits and 32 bits. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Static I-PDU to Container 映射
*原文标题：Static I-PDU to Container Mapping*

Static I-PDU Mapping
  Status: DRAFT
⌈
| Description: | Multiple I-PDUs shall be mappable to a static position into a Container-PDU. If an I-PDU is mapped statically to a Container it is always transported in the same position of the Container-PDU. |
|---|---|
| Rationale: | Support scenarios of Container Mapping where no header shall be used to reduce bandwidth in case always all contained PDU shall be sent. |

Applies To:
| Dependencies: | A Container-PDU shall either support static or dynamic mapping (see SRS_IpduM_02820) but no mixture. |
|---|---|
| Use Case: | Efficient transmission of small PDUs of high bandwidth busses |
| Supporting Material: | - |

⌋

### 12. Transmission trigger condition

Handling of transmission trigger condition
⌈
| Description: | Transmission trigger conditions of a Container-PDU shall be coordinated by the IpduM |
|---|---|
| Rationale: | Support clarity regarding the dependency of transmission trigger conditions and the expected behaviour if multiple transmission trigger conditions are assigned to the same Container-PDU |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 13. 关机 Operation
*原文标题：Shutdown Operation*

Actual no special shutdown operations are required.

### 14. Fault Operation

Actual no special fault operations are required.

### 15. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 16. 时序需求 / Resource Usage
*原文标题：Timing Requirements / Resource Usage*

The I-PDU Multiplexer module shall be designed in a way that it does not produce any additional runtime
⌈
| Description: | The I-PDU Multiplexer module shall be designed in a way that it does not produce any additional runtime compared to normal COM signal processing. To reach this goal it may be required to make I-PDU multiplexing a pre-compile time option. This assumption can be made if necessary. |
|---|---|
| Rationale: | Do not put additional load on systems that do not require I-PDU-multiplexing. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | DC and Volvo do not plan to use I-PDU-multiplexing |
| Supporting Material: | - |

⌋

### 17. 需求 to other 模块
*原文标题：Requirements to other modules*

### 18. 配置 of PduR
*原文标题：Configuration of PduR*

The PduR shall be configured to send parts of multiplexed I-PDUs to the IPduM on sender side
⌈
| Description: | The PduR shall be configured to send parts of multiplexed I-PDUs to the IPduM after they were received from COM on sender side. |
|---|---|
| Rationale: | Implementation of I-PDU multiplexing next to PduR. |

Applies To:
| Dependencies: | SRS_IpduM_02811, SRS_IpduM_02814, SRS_IpduM_02816 |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The PduR shall be configured to send confirmations related to multiplexed I-PDUs to IPduM after receiving them from the lower layer
⌈
| Description: | The PduR shall be configured to send confirmations related to multiplexed I-PDUs to IPduM after receiving them from the lower layer. |
|---|---|
| Rationale: | Implementation of I-PDU multiplexing next to PduR. |

Applies To:
| Dependencies: | SRS_IpduM_02814, SRS_IpduM_02816, SRS_IpduM_02818 |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The PduR shall be configured to send multiplexed I-PDUs for de-multiplexing to the IPduM after they were received from the lower layer
⌈
| Description: | The PduR shall be configured to send multiplexed I-PDUs for de-multiplexing to the IPduM after they were received from the lower layer. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. References

### 20. 附录
*原文标题：Appendix*

### 21. Change History of AUTOSAR Traceable Items

Please note that the lists in this chapter also include requirements that have been removed from the specification in a later version. These requirements do not appear as hyperlinks in the document.

### 22. Traceable Item History of this Document According to AUTOSAR Release 22-11

### 23. Added Advisories in R22-11

none

### 24. Changed Advisories in R22-11

none

### 25. Deleted Advisories in R22-11

none

### 26. Added Constraints in R22-11

none

### 27. Changed Constraints in R22-11

none

### 28. Deleted Constraints in R22-11

none

### 29. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| For a multiplexed I-PDU there shall be exactly one selector field |  |
| The size in bits of the selector field shall be configurable |  |
| The position of the selector field within the PDU shall be configurable |  |
| It shall be possible not to assign a SDU layout to the unused selector field values |  |
| For each used selector field value a dynamic and static layout shall be configurable |  |
| The three parts of each multiplexed I-PDU must not necessarily be contiguous |  |
| The I-PDU Multiplexer module shall be designed in a way that it does not produce any additional runtime |  |
| It shall be possible that the static part of a I-PDU is zero bits long |  |
| The initial values of the static part shall be derived from the COM configuration |  |
| The PduR shall be configured to send parts of multiplexed I-PDUs to the IPduM on sender side |  |
| There shall be three different triggering conditions configurable that define when the combined multiplexed I-PDUs are sent to the lower layer |  |
| The PduR shall be configured to send multiplexed I-PDUs for de-multiplexing to the IPduM after they were received from the lower layer |  |
| The PduR shall be configured to send confirmations related to multiplex |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 31. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 32. Traceable Item History of this Document According to AUTOSAR Release 23-11

### 33. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 34. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| For a multiplexed I-PDU there shall be exactly one selector field |  |
| The size in bits of the selector field shall be configurable |  |
| The position of the selector field within the PDU shall be configurable |  |
| It shall be possible not to assign a SDU layout to the unused selector field values |  |
| For each used selector field value a dynamic and static layout shall be configurable |  |
| The three parts of each multiplexed I-PDU must not necessarily be contiguous |  |
| The I-PDU Multiplexer module shall be designed in a way that it does not produce any additional runtime |  |
| It shall be possible that the static part of a I-PDU is zero bits long |  |
| The initial values of the static part shall be derived from the COM configuration |  |
| The PduR shall be configured to send parts of multiplexed I-PDUs to the IPduM on sender side |  |
| There shall be three different triggering conditions configurable that define when the combined multiplexed I-PDUs are sent to the lower layer |  |
| The PduR shall be configured to send multiplexed I-PDUs for de-multiplexing to the IPduM after they were received from the lower layer |  |
| The PduR shall be configured to send confirmations related to multiplex |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 36. Traceable Item History of this Document According to AUTOSAR Release R24-11

### 37. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 38. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 39. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 40. Traceable Item History of this Document According to AUTOSAR Release R25-11

### 41. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| Handling of transmission trigger condition |  |

### 42. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 43. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
