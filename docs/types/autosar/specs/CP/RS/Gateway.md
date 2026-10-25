# Requirements on Gateway (`Gateway`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 006 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_Gateway_006\AUTOSAR_CP_RS_Gateway.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_Gateway_006\AUTOSAR_CP_RS_Gateway.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_Gateway_006\zzgen\CP_RS_Gateway.complete.txt`

## 文档简介

Scope of this document is the definition of the functional and non-functional requirements for the AUTOSAR PDU Router module, the AUTOSAR L-SDU Router module and the AUTOSAR Signal Gateway which is integral part of COM.

Other modules relevant for data communication in the AUTOSAR architecture, such as COM, DCM, driver and interface layers for CAN, LIN, FlexRay, Ethernet and other modules irrelevant for data communication, are not in the scope of this document.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

Scope of this document is the definition of the functional and non-functional requirements for the AUTOSAR PDU Router module, the AUTOSAR L-SDU Router module and the AUTOSAR Signal Gateway which is integral part of COM.

Other modules relevant for data communication in the AUTOSAR architecture, such as COM, DCM, driver and interface layers for CAN, LIN, FlexRay, Ethernet and other modules irrelevant for data communication, are not in the scope of this document.

### 2. How to read this document

Each requirement has its unique identifier starting with the prefix "BSW" (for "Basic Software"). For any review annotations, remarks or questions, please refer to this unique ID rather than chapter or page numbers!

### 3. Conventions used

* The representation of requirements in AUTOSAR documents follows the table specified in .
* In requirements, the following specific semantics are used.

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted . Note that the requirement level of the document in which they are used modifies the force of these words.

* SHALL: This word means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* MUST: This word, or the terms "REQUIRED" or "SHALL", mean that the definition is an absolute requirement of the specification.
* MUST NOT: This phrase, or the phrase "SHALL NOT", means that the definition is an absolute prohibition of the specification.
* SHOULD: This word, or the adjective "RECOMMENDED", mean that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求结构
*原文标题：Requirements structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

Functional Requirements:

* Configuration (which elements of the module need to be configurable)
* Initialization
* Normal Operation
* Shutdown Operation
* Fault Operation
* \ldots

Non-Functional Requirements:

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling, \ldots
* \ldots

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The following glossary defines acronyms and terms that are not defined by the AUTOSAR glossary.

| Abbreviation/Acronym | Description |
|---|---|
| Routing Configuration | Configuration data that controls the operation of the PDU Router, the L-SDU Router and Signal Gateway. The configuration data defines the destination for each PDU of the PDU Router, for each L-SDU of the L-SDU Router and each Signal of the signal gateway. The routing configuration should be encapsulated in a way that allows an update. |
| Gw | Abbreviation of signal based gateway. |
| Gatewaying-on-the-fly | PDU Gateway capability; routing between two TP modules where forwarding of data is started (when a specified threshold is reached) before all data have been received. |

### 6. 功能概述
*原文标题：Functional overview*

The AUTOSAR Gateway functionality consists of two parts:

* Gateway functionality on PDU level (pdu-based gateway), provided by the PDU Router module and gateway functionality on L-SDU level (LSdu-based gateway), provided by the L-SDU Router
* Gateway functionality on signal level (signal-based gateway), provided by the Signal Gateway, which is integral part of COM.

In addition to the gateway functionality on PDU level, the PDU Router also provides routing of PDUs up and down the communication stack, (e.g. between COM and communication interface modules (CAN, LIN, FlexRay), and similarly between DCM and transport protocol modules (CAN, LIN, FlexRay)) in addition connection to I-PDU multiplexer.

Please note: The L-SDU Router act as pass-through module between the Ethernet Interface and the IEEE1722Tp module. After R23-11 the L-SDU Router will be extended to act as mandatory upper layer of all communication interface modules and as mandatory lower layer of all direct linked modules: PduR, <Bus>Nm, <Bus>Tp, <Bus>TSyn, XCPon<Bus>

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. PDU Router

* Provides transport of PDUs between

  * communication interface layers, upper service layers, IPDUM and DDS;
  * TP modules and upper service layers;
  * different communication interface layers;
  * different TP modules

  initiated by a PDU routing trigger.
* PDU routing trigger may be generated by the CAN, LIN, or FlexRay interfaces, the corresponding TP modules, the service layers COM and DCM, IPDUM and DDS.
* The size of the Routing Configuration is ECU specific, and statically configurable (down to zero size if e.g. no PDU level gateway functionality is needed).
* Provides TP routing on-the-fly. This means that transfer of TP data is started before full TP data is buffered. The gateway therefore provides a buffer to the receiving TP module which is smaller than the overall data length. When this buffer is filled, the gateway starts transmitting these data on the destination bus. In parallel, the receiving TP module get another buffer. Then data are received on the receiving TP module and in parallel transmitted by the transmitting TP module.

### 8. Signal Gateway

* Provides mapping of signals or groups of signals (Complex Data Types), initiated by a signal routing trigger.
* Signal routing trigger is generated by COM core functionality.
* Signal Gateway uses packing/unpacking mechanisms and timeout handling mechanisms of COM.

### 9. L-SDU Router

* Provides transport of L-SDUs between

  * Ethernet communication interface layer and IEEE1722Tp;

  initiated by a L-SDU routing trigger.
* L-SDU routing trigger may be generated by Ethernet interface or by IEEE1722Tp.
* The size of the Routing Configuration is ECU specific, and statically configurable (down to zero size if e.g. no L-SDU level gateway functionality is needed).

### 10. 需求规范
*原文标题：Requirements Specification*

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. 通用 Gateway
*原文标题：General Gateway*

Gateway shall be only be reconfigured while the configuration table to be reconfigured is not in use
⌈
| Description: | Gateway can only be reconfigured while the configuration table to be reconfigured is not in use (e.g. during programming mode). Reconfiguration during normal operation (application running and configuration table is in use) shall not be possible. |
|---|---|
| Rationale: | Changes during normal operation are regarded as safety risk. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The Routing Configuration shall be updateable at post-build time
⌈
| Description: | The goal is to avoid re-compiling and re-loading of huge application binaries in case of minimal routing changes. |
|---|---|
| Rationale: | Changes during normal operation are regarded as safety risk. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | A PDU has to be routed to an additional path. |
| Supporting Material: | - |

⌋

 A Routing Configuration shall be identified by an unique ID number
⌈
| Description: | A Routing Configuration shall be identified by an unique ID number. This number shall be accessible. |
|---|---|
| Rationale: | Diagnostic device shall read the present configuration. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Signal Gateway

This chapter contains the requirements of the signal gateway. The signal gateway is an integral part of COM and not a separate module. The APIs are specified in the COM SWS document.

 The signal gateway shall provide a mechanism to route individual signals between I-PDUs in a 1:n fashion
⌈
| Description: | The signal gateway shall provide a mechanism to route individual signals between I-PDUs in a 1:n fashion. |
|---|---|
| Rationale: | Routing of AUTOSAR signals. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | * A received signal can be forwarded to different buses. |

* A received signal can be forwarded to one bus and to RTE.
* A TX signal from RTE can be forwarded to different buses.
* Combine signals of ECUs (e.g. error signals or display signals) to reduce the amount of received I-PDUs of an ECU (e.g. instrument panel cluster).
* Reduce the number of gateway sending I-PDUs (e.g. in case of multiple source I-PDUs with few transmission signals).
* Adaptation of different payload length of the connected buses.
| Supporting Material: | - |
|---|---|

⌋

 Signal Groups shall be routed
⌈
| Description: | The gateway shall provide a mechanism to route signal groups. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. PDU Router

PDU router shall route non-TP PDUs with transparency between layers
⌈
| Description: | PDU router shall route PDUs without any payload or rate modifications between local communication interface layers and local upper software layers. |
|---|---|

* If the communication bus is able to handle PDU's which are bigger or smaller then statically configured, the PDU shall be routed with the actual received length.
* If the communication bus or routing software is not able to handle a greater length, the PDU shall be cut.
* If the bus is not able to handle smaller length the PDU shall not be routed.
* A local receiver of the PDU (e.g. COM) shall always be able to handle a PDU with a smaller or bigger length.
| Rationale: | This layer allows the construction of a PDU based router and handles the distribution of PDUs between the communication interface layers and COM. The payload is not modified in any way. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | * Direct routing of PDUs without modification from any bus to COM and vice versa. |

* Direct routing of PDUs without modification from one communication interface bus to another communication interface bus.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. L-SDU Router

L-SDU Router transparent routing
⌈
| Description: | The L-SDU Router shall route L-SDUs without any payload or rate modifications between local communication interface layers and local upper software layers. |
|---|---|

* If the communication bus is able to handle L-SDUs which are greater or smaller than statically configured, then the L-SDU Router shall route the L-SDU with the actually received length.
* If the communication bus or routing software is not able to handle a greater length, then the L-SDU Router shall cut the L-SDU.
* If the communication bus is not able to handle smaller length, then the L-SDU Router shall not route the L-SDU.

Additional Information:

* A local receiver of the L-SDU (e.g. IEEE1722Tp) shall always be able to handle a L-SDU with a smaller or greater length.
| Rationale: | This layer allows the construction of a L-SDU based router and handles the distribution of L-SDUs between the communication interface layers and all direct linked upper layer modules (e.g. TcpIp, PDU router, <Bus>Nm's, <Bus>TSyn, <Bus>Xcp, <Bus>Tp, CDD). The payload is not modified in any way. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Non-Functional 需求
*原文标题：Non-Functional Requirements*

### 17. Signal Gateway

The signal gateway shall be scalable to zero size and zero resource usage when signal routing is not required
⌈
| Description: | The signal gateway shall be scalable to zero size and zero resource usage when signal routing is not required. |
|---|---|
| Rationale: | This layer is important for some ECU structures, but in other ECUs, no additional overhead shall be introduced. To achieve this without any software implementation changing, the software (the signal gateway) shall be scalable. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | It is required for ECUs with no gateway functionality (but the same software). |
| Supporting Material: | - |

⌋

 The timeout of a deadline monitored signal shall be ignored by the Signal Gateway
⌈
| Description: | The timeout of a signal, which is deadline monitored and to be routed, shall be ignored by the Signal Gateway. Only the related transmit signals, which are to be deadline monitored, and which are not of types n-times or direct, shall be configured to have update bits. (Behaviour of COM: After transmission of a signal equipped with an update bit, the update bit will be cleared by COM automatically.) |
|---|---|
| Rationale: | Timeout indication of the source signal for receiver. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. PDU Router

If the PDU Router is used to route PDUs between two communication interface modules, without incorporation of COM, the minimum send interval for transmission on a CAN target bus can not be guaranteed.

 The PDU Router resource usage shall be scalable to zero in case no PDU gateway
⌈
| Description: | The PDU Router resource usage (memory and runtime) shall be scalable to zero in case no PDU gateway, no I-PDUM and no multicast functionality is needed. |
|---|---|
| Rationale: | This layer is necessary for some ECU structures, but in ECUs with no gateway functionality no additional overhead shall be introduced. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | It is required for ECUs with no gateway functionality. |
| Supporting Material: | - |

⌋

 The PDU Router provides an interface (API) for usage by COM, to use the PDU Router functionality
⌈
| Description: | The PDU Router provides an interface for usage by COM, to use the PDU Router functionality. This API provides an interface for sending of non-TP PDUs. |
|---|---|
| Rationale: | An API is required, to use the functionality of the PDU Router. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | COM sends a non TP-PDU to be forwarded to an bus interface. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. L-SDU Router

L-SDU Router resource usage shall be scalable to zero
  Status: DRAFT
⌈
| Description: | The L-SDU Router resource usage shall be scalable to zero in case no L-SDU gateway and no multicast functionality is needed. |
|---|---|

Additional Information:

* resource usage: memory and runtime
| Rationale: | The L-SDU Router is necessary for some ECU structures, but in ECUs with no gateway functionality no additional overhead shall be introduced. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 L-SDU Router interface (API) for bus and network interfaces
⌈
| Description: | The L-SDU Router shall provide an interface for usage by bus and network interfaces. |
|---|---|

The API provided by the L-SDU Router shall support:

* Transmission of L-SDUs
* Reception Indication of L-SDUs
* Transmit Confirmation for L-SDUs
* TriggerTransmit call for L-SDUs
* ProvideTxBuffer call for L-SDUs
* ImmediateTransmit call for L-SDUs
* ReleaseRxBuffer indication call for L-SDUs

Additional Information:

The L-SDU Router provided bus and network interfaces are:

* Ethernet
| Rationale: | An API is required, to use the functionality of the L-SDU Router. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. References

### 21. Deliverables of AUTOSAR

### 22. Related standards and norms

ISO transport protocol specification http://www.iso.org

### 23. 附录
*原文标题：Appendix*

### 24. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 25. Traceable item history of this document according to AUTOSAR Release R22-11

### 26. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| The PDU Router provides an interface (API) for usage by Dds, to use the PDU Router functionality |  |

### 27. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 28. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 29. Added Constraints in R22-11

none

### 30. Changed Constraints in R22-11

none

### 31. Deleted Constraints in R22-11

none

### 32. Traceable item history of this document according to AUTOSAR Release R23-11

### 33. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| L-SDU Router transparent routing |  |
| L-SDU Router error handling for unknown PDU-ID |  |
| L-SDU Router error handling for local reception or transmission |  |
| L-SDU Router interface (API) for IEEE1722Tp |  |
| L-SDU Router interface (API) for bus and network interfaces |  |
| L-SDU Router resource usage shall be scalable to zero |  |
| L-SDU Router routing to more than one destination |  |

### 34. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| Static Routing Configuration shall be defined for gateways |  |
| The chronological order of different instances shall be preserved |  |

### 35. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 36. Traceable item history of this document according to AUTOSAR Release R24-11

### 37. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 38. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| Signal Gateway Error shall be handled with signal routing |  |
| Signal Gateway Error shall be handled with signal group routing |  |
| PDU Router error shall be provided for local reception or transmission |  |
| PDU Router error shall be provided in gateway case |  |
| PDU Router error shall be provided for FIFO handling |  |
| L-SDU Router error handling for unknown PDU-ID |  |
| L-SDU Router error handling for local reception or transmission |  |

### 39. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 40. Traceable item history of this document according to AUTOSAR Release R25-11

### 41. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 42. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 43. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
