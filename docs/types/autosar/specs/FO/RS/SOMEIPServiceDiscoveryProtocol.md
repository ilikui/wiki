# Requirements on SOME/IP Service Discovery Protocol (`SOMEIPServiceDiscoveryProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 801 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_SOMEIPServiceDiscoveryProtocol_801\AUTOSAR_FO_RS_SOMEIPServiceDiscoveryProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_SOMEIPServiceDiscoveryProtocol_801\AUTOSAR_FO_RS_SOMEIPServiceDiscoveryProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_SOMEIPServiceDiscoveryProtocol_801\zzgen\FO_RS_SOMEIPServiceDiscoveryProtocol.complete.txt`

## 文档简介

The main tasks of Service Discovery is managing the availability (Find/Offer) of functional entities - called services - in the in-vehicle communication as well as managing the need for sending event messages to the network. This allows sending only event messages to receivers requiring them (Publish/Subscribe).

With Service Discovery different ECUs can offer Service Instances and find available Service Instances within the vehicle network. Service Instances are single implementations of a service that is defined by its service interface. An ECU can stop offering a Service Instance it was offering before. Later finds to such a service instance will remain unanswered. In the AUTOSAR context, a find is an operation to identify available Service Instances and their locations.

This document contains the requirements that shall be fulfilled by the SOME/IP Service Discovery protocol to offer this functionality based on SOME/IP communication mechanisms underneath.

## 章节详细内容

### 1. 范围 of this document
*原文标题：Scope of this document*

The main tasks of Service Discovery is managing the availability (Find/Offer) of functional entities - called services - in the in-vehicle communication as well as managing the need for sending event messages to the network. This allows sending only event messages to receivers requiring them (Publish/Subscribe).

With Service Discovery different ECUs can offer Service Instances and find available Service Instances within the vehicle network. Service Instances are single implementations of a service that is defined by its service interface. An ECU can stop offering a Service Instance it was offering before. Later finds to such a service instance will remain unanswered. In the AUTOSAR context, a find is an operation to identify available Service Instances and their locations.

This document contains the requirements that shall be fulfilled by the SOME/IP Service Discovery protocol to offer this functionality based on SOME/IP communication mechanisms underneath.

### 2. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the SOME/IP specification that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Client | The ECU using the service instance of a server shall be called client in the context of this service instance. |
| Event | A uni-directional data transmission that is only invoked on changes or cyclically and is sent from the producer of data to the consumers. |
| Eventgroup | A logical grouping of events and notification events of fields inside a service in order to allow subscription |
| Field | A field does represent a status and thus has a valid value at all times on which getter, setter and notifier act upon. |
| Finding a service instance | Sending a SOME/IP-SD message in order to find a needed service instance. |
| Getter | A Request/Response call that allows read access to a field. |
| Method | A method, procedure, function, or subroutine that is called/invoked. |
| Notification Event | An event message of the notifier of a field. |
| Notifier | Sends out event message with a new value on change of the value of the field. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求
*原文标题：Requirements*

### 5. 通用
*原文标题：General*

SOME/IP Service Discovery protocol shall provide functionality to discover services
⌈
| Description: | SOME/IP Service Discovery protocol shall provide functionality to discovery services and communication paths during runtime. |
|---|---|
| Rationale: | Service discovery in combination with service-based communication allows a communication which was not predefined during system design phase. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Communication between partners is not statically defined during system design phase. |
| Supporting Material: | - |

⌋

 SOME/IP Service Discovery Protocol shall be used on top of SOME/IP Protocol
⌈
| Description: | SOME/IP Service Discovery Protocol shall be used on top of SOME/IP Protocol to serialize and communicate service discovery related messages. |
|---|---|
| Rationale: | SOME/IP Service Discovery is specialized on SOME/IP based communication, common functionality needs only to be designed and implemented once. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Service discovery of SOME/IP services. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 服务 Offering and Finding
*原文标题：Service Offering and Finding*

SOME/IP Service Discovery Protocol shall support to find the location of service instances
⌈
| Description: | SOME/IP Service Discovery Protocol shall support to find the location of service instances within the local network. |
|---|---|
| Rationale: | Locations of services needs to be known to the communication partners. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Communicate with a service instance which location is unknown to the other party. |
| Supporting Material: | - |

⌋

 SOME/IP Service Discovery messages shall contain information how to contact the communication partner
⌈
| Description: | SOME/IP Service Discovery messages shall contain information how to contact the communication partner. This information how to talk with the communication partner shall be aware of the underlying transport protocol. |
|---|---|
| Rationale: | To establish communication with a remote partner endpoint information are needed, these depend on the used transport protocol. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Support IPv4 and IPv6 in parallel. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Event Subscriptions

SOME/IP Service Discovery Protocol shall support to subscribe to events
⌈
| Description: | SOME/IP Service Discovery Protocol shall support to subscribe to events which are provided by a service instance. |
|---|---|
| Rationale: | Service based event communication is based on a publish/subscribe pattern to control the communication. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Reception of events |
| Supporting Material: | - |

⌋

 SOME/IP Service Discovery Protocol shall support to deny subscriptions
⌈
| Description: | SOME/IP Service Discovery Protocol shall support to actively deny requested subscriptions to events. |
|---|---|
| Rationale: | If a publisher cannot provide the requested event to a requester, it is necessary to inform the subscriber about the rejection |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Prevention of overload of publisher |
| Supporting Material: | - |

⌋

 SOME/IP Service Discovery Protocol shall support to stop subscriptions to events
⌈
| Description: | SOME/IP Service Discovery Protocol shall support to actively stop a subscription of subscribed events. |
|---|---|
| Rationale: | When the data of an event is not needed any more by the receiver, the communication needs to be stopped. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 错误处理
*原文标题：Error Handling*

SOME/IP Service Discovery Protocol shall support reboot detection of service providers
⌈
| Description: | SOME/IP Service Discovery Protocol shall support a detection whether service provider were rebooted. |
|---|---|
| Rationale: | An ECU reboot can lead to lost internal state of a service provider and hence to data which do not fit the expectation of the subscriber. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Detection of ECU reboot |
| Supporting Material: | - |

⌋

 SOME/IP Service Discovery Protocol shall standardize error handling
⌈
| Description: | SOME/IP Service Discovery Protocol shall standardize error handling if unexpected situations occur. |
|---|---|
| Rationale: | Graceful error handling necessary if unexpected situations occur. The protocol needs to support this to give the applications the possibility to react on these. |
| Applies To: | FO |
| Dependencies: | - |
| Use Case: | Reaction to errors. |
| Supporting Material: | - |

⌋

 SOME/IP Service Discovery Protocol shall support TTL
⌈
| Description: | SOME/IP Service Discovery Protocol shall support TTL for service discovery functionality that can be subject for timely expiration, e.g service offers. |
|---|---|
| Rationale: | TTL prevents that service discovery states (e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. References

### 10. 附录
*原文标题：Appendix*

### 11. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

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

none

### 19. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 20. Traceable item history of this document according to AUTOSAR Release R23-11

### 21. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 22. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 23. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
