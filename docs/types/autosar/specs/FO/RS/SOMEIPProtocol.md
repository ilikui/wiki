# Requirements on SOME/IP Protocol (`SOMEIPProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 800 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_SOMEIPProtocol_800\AUTOSAR_FO_RS_SOMEIPProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_SOMEIPProtocol_800\AUTOSAR_FO_RS_SOMEIPProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_SOMEIPProtocol_800\zzgen\FO_RS_SOMEIPProtocol.complete.txt`

## 文档简介

This document specifies the requirements of the Scalable service-Oriented MiddlewarE over IP (SOME/IP) protocol - an automotive/embedded protocol and the underlying serialization / wire format which can be used for request/response and event-based communication.

The basic motivation to specify "yet another RPC-Mechanism" instead of using an existing infrastructure/technology is the goal to have a technology that:

* Is compatible through as many use-cases and communication partners as possible
* Provides the features required by automotive use-cases
* Is scalable from tiny to large platforms
* Can be implemented on different operating system (i.e. AUTOSAR, GENIVI, and OSEK) and even embedded devices without operating system

## 章节详细内容

### 1. 范围 of this document
*原文标题：Scope of this document*

This document specifies the requirements of the Scalable service-Oriented MiddlewarE over IP (SOME/IP) protocol - an automotive/embedded protocol and the underlying serialization / wire format which can be used for request/response and event-based communication.

The basic motivation to specify "yet another RPC-Mechanism" instead of using an existing infrastructure/technology is the goal to have a technology that:

* Is compatible through as many use-cases and communication partners as possible
* Provides the features required by automotive use-cases
* Is scalable from tiny to large platforms
* Can be implemented on different operating system (i.e. AUTOSAR, GENIVI, and OSEK) and even embedded devices without operating system

### 2. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The tables below contain terms, acronyms and abbreviations relevant to the SOME/IP specification. Further terms can be found in .

| Term | Description |
|---|---|
| Event | A uni-directional data transmission that is only invoked on changes or cyclically and is sent from the producer of data to the consumers. |
| Eventgroup | A logical grouping of events and notification events of fields inside a service in order to allow subscription. |
| Field | A field does represent a status and thus has an valid value at all times on which getter, setter and notifier act upon. |
| Getter | A Request/Response call that allows read access to a field. |
| Method | A method, procedure, function, or subroutine that is called/invoked. |
| Notification Event | An event message of the notifier of a field. |
| Notifier | Sends out event message with a new value on change of the value of the field. |
| Remote Procedure Call (RPC) | A method call from one ECU to another that is transmitted using messages. |
| Service | A logical combination of zero or more methods, zero or more events, and zero or more fields. |
| Service Instance | Implementation of a service, which can exist more than once in the vehicle and more than once on an ECU. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求
*原文标题：Requirements*

### 5. 通用
*原文标题：General*

SOME/IP protocol shall provide service-based communication
⌈
| Description: | SOME/IP protocol shall provide service-based communication where communication paths are established during runtime. |
|---|---|
| Rationale: | Service-based communication allows a communication which was not predefined during system design phase. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Communication between partners is not statically defined during system design phase. |
| Supporting Material: | - |

⌋

 SOME/IP protocol shall provide support of multiple versions of the protocol
⌈
| Description: | SOME/IP protocol shall provide support of multiple versions of the protocol to distinguish the version of the messages on the network. |
|---|---|
| Rationale: | A version is needed to be able to distinguish SOME/IP messages of different versions with different structure in header or payload. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Backward incompatible extension and modifications of SOME/IP where both the old and the new protocol are used within the same network. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 服务
*原文标题：Services*

SOME/IP protocol shall identify services using unique identifiers
⌈
| Description: | SOME/IP protocol shall identify services using vehicle-wide unique identifiers |
|---|---|
| Rationale: | It is necessary to distinguish services vehicle wide. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Discovery of a specific service. |
| Supporting Material: | - |

⌋

 SOME/IP protocol shall support multiple instances of a service
⌈
| Description: | SOME/IP protocol shall support multiple instances of a service for services which provide the same functionality. |
|---|---|
| Rationale: | One system design might provide one service with multiple instances, another system design might define multiple services with one instance each. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | The same service is provided by multiple parties in the vehicle to enable fail-over-handling which enables the subscribers to switch to another service instance if the provider of one service instance suffers a failure. |
| Supporting Material: | - |

⌋

 SOME/IP protocol shall support combining multiple RPC methods, events and fields in one service
⌈
| Description: | SOME/IP protocol shall support combining multiple RPC methods, events and fields in one service. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. On Wire Representation

SOME/IP protocol shall define the header layout of messages
⌈
| Description: | SOME/IP protocol shall define the header layout of messages for a respective version. |
|---|---|
| Rationale: | The layout of the header needs to be understood by the communication partners. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Communication between different parties. |
| Supporting Material: | - |

⌋

 SOME/IP protocol shall specify the serialization algorithm for data
⌈
| Description: | SOME/IP protocol shall specify the serialization algorithm for data to convert the machine-specific memory representation to a common network-representation. |
|---|---|
| Rationale: | The memory representation of data heavily depends on processor architecture and compiler settings which differ between the machine in the vehicle. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Communication of payload between communication partners using different processor architectures. |
| Supporting Material: | - |

⌋

 SOME/IP protocol shall specify how data in the payload are aligned
⌈
| Description: | SOME/IP protocol shall specify how data in the payload are aligned. This includes the start of primitive data types and gaps between them. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. References

### 9. 附录
*原文标题：Appendix*

### 10. Change history of AUTOSAR traceable items

### 11. Traceable item history of this document according to AUTOSAR Release R25-11

### 12. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 13. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| SOME/IP protocol shall provide service-based communication |  |
| SOME/IP protocol shall provide support of multiple versions of a service interface |  |
| SOME/IP protocol shall support event communication |  |
| SOME/IP protocol shall support different strategies for event communication |  |
| SOME/IP protocol shall support uni-directional RPC communication |  |
| SOME/IP protocol shall support bi-directional RPC communication |  |
| SOME/IP protocol shall support error handling of RPC communication |  |
| SOME/IP protocol shall support field communication |  |
| SOME/IP protocol shall support different transport protocols underneath |  |
| SOME/IP protocol shall support messages of different lengths |  |
| SOME/IP protocol shall support session handling |  |
| SOME/IP protocol shall support handling of protocol errors on receiver side |  |
| SOME/IP protocol shall support multiple instances of a service |  |
| SOME/IP protocol shall support combining multiple RPC methods, events and fields in one service |  |
| SOME/IP protocol shall support grouping events into eventgroups |  |
| SOME/IP protocol shall support grouping fields in eventgroups |  |
| SOME/IP protocol shall identify services using unique identifiers |  |
| SOME/ |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

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
