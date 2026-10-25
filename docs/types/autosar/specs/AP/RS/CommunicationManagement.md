# Requirements on Communication Management (`CommunicationManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 716 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_CommunicationManagement_716\AUTOSAR_AP_RS_CommunicationManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_CommunicationManagement_716\AUTOSAR_AP_RS_CommunicationManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_CommunicationManagement_716\zzgen\AP_RS_CommunicationManagement.complete.txt`

## 文档简介

This document specifies requirements on Communication Management of the AUTOSAR Adaptive Platform.

## 章节详细内容

### 1. 范围 of document
*原文标题：Scope of document*

This document specifies requirements on Communication Management of the AUTOSAR Adaptive Platform.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 需求指南
*原文标题：Requirements Guidelines*

### 4. 需求 quality
*原文标题：Requirements quality*

### 5. 需求 identification
*原文标题：Requirements identification*

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* SHOULD: This word, or the adjective "RECOMMENDED", means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 需求 status
*原文标题：Requirements status*

No content

### 7. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes terms, acronyms and abbreviations relevant to `AP_RS_CommunicationManagement` that are not included in the AUTOSAR Glossary .

| Terms: | Description: |
|---|---|
| Fully qualified service ID | A fully qualified name of a service used as a system-wide unique identifier, e.g. 'com.someOEM.adas.collisionwarner'. |
| Data ID | A unique identifier of an instance of data transmitted. In case of events, this maps to a specific instance of an event. |
| Event | It is a notification mechanism that is used by the Service Skeleton to inform the Service Proxy that a specific condition or state change occurred. The notification includes the data related to the event. Events are sent to a Service Proxy only of it is subscribed to the Event. |
| Trigger | It is a notification mechanism that is used by the Service Skeleton to inform the Service Proxy that a specific condition or state change occurred. The notification does not include any data. Triggers are sent to a Service Proxy only of it is subscribed to the Trigger. |

### 8. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Communication Management.

### 9. 功能概述
*原文标题：Functional overview*

The AUTOSAR Adaptive Platform Communication Management provides services for the network and protocol independent communication between applications. This document therefore includes requirements on

* Communication between applications

  * Signature of the communication API
  * Behavior of the communication API
  * On-wire protocol for inter-ECU and inter-machine data communication to classic and adaptive platform
* Service discovery

  * Scope
  * Service registry
  * On-wire protocol for inter-ECU and inter-machine service discovery
* Configuration of middleware for communication aspects (register services)

The AUTOSAR Adaptive Platform Communication Management provides requirements for the safety mechanisms related to the communication, precisely for the E2E supervision. They are defined in .

### 10. 功能性需求
*原文标题：Functional Requirements*

### 11. 通用需求
*原文标题：General requirements*

The Communication Management shall provide a standardized header file structure for each service.
  Status: DRAFT
⌈
| Description: | The Communication Management shall provide a standardized header file structure for each service. The application uses the standardized header files which are independent of the underlying actual Communication Management implementation. |
|---|---|
| Rationale: | The application code shall be reusable for different AUTOSAR Adaptive platform implementations. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The application developers implement their code against the standardized header files. |
| Supporting Material: | - |

⌋

 The service header files shall define the namespace for the respective service.
  Status: DRAFT
⌈
| Description: | The service header files shall define the namespace for the respective service to uniquely identify each service instance. |
|---|---|
| Rationale: | The application code shall be reusable for different AUTOSAR Adaptive platform implementations and for different vehicle lines. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | To avoid conflicts with other applications and other services each service shall have its own namespace. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Service-oriented communication

### 13. Communication between applications

The Communication Management shall transform Fully Qualified Service IDs to communication protocol specific Service IDs
⌈
| Description: | The Communication Management shall transform Fully Qualified Service IDs to communication protocol specific Service IDs. Fully Qualified Service IDs are used within the application code by the developer and need to be defined to enable cooperation of services of different vendors. Communication protocol specific Service IDs may be used within the messages on the network and may be needed if the communication protocol service ID space was not designed for Fully Qualified Service IDs. |
|---|---|
| Rationale: | Binary of application shall be unaware of communication protocol specific Service IDs. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | One platform is used in multiple vehicle lines but the service IDs are different for the platform in the two vehicle lines. Communication Binding still uses Fully Qualified Service IDs. Communication Management transforms Fully Qualified to SOME/IP Service IDs. |
| Supporting Material: | see Adaptive Platform Scenarios |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 服务 discovery
*原文标题：Service discovery*

Communication Management shall provide an interface to offer services
⌈
| Description: | Application developers shall be able to offer services provided by their application for usage by other applications. |
|---|---|
| Rationale: | To support communication a mechanism is needed to offer provided services to other applications, which are able to use them. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Application "A" offers a wall clock service to other applications. |
| Supporting Material: | - |

⌋

 Service Communication - Uniqueness of offered service
  Status: DRAFT
⌈
| Description: | The Communication Management shall check the offered service for uniqueness (i.e., a service with the same ServiceIdentifier and InstanceIdentifier was already previously offered). Uniqueness shall be applied locally and, if possible, on system/vehicle-wide level using a Fully Qualified Service ID for identification purposes. |
|---|---|
| Rationale: | To support communication a mechanism is needed to offer provided services to other applications, which are able to use them. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Application "A" offers a wall clock service to other applications. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Static 服务 Connection
*原文标题：Static Service Connection*

Static Service Connection
⌈
| Description: | AUTOSAR shall support Static service connection for selected/standardized bindings. Additional information: |
|---|---|

* Can be pre-configured (not discovered dynamically at runtime).
* Explicitly defined by AUTOSAR
| Rationale: | Compatibility to Classic platform. Performance, safety and cyber security improvements for service connect. |
|---|---|

Applies To:
| Dependencies: | Address info of service provider needs to exist. Service provider needs to be available |
|---|---|
| Use Case: | Statically configured connection to services. |
| Supporting Material: | - |

⌋

### 16. Communication

### 17. Events and triggers

Communication Management shall provide an API to send events and triggers to other applications
⌈
| Description: | Application developers shall be able to provide data in form of events or triggers to other applications. |
|---|---|
| Rationale: | After offering a service, it shall be possible to send events of the respective service to all subscribed applications. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Application "A" sends the power on event upon turning the key in the ignition lock. |
| Supporting Material: | - |

⌋

 The Communication Management shall protect the transmission of events using E2E protocol. The E2E Protection has to be executed behind the event API.
  Status: DRAFT
  Upstream requirements:
⌈
| Description: | Application developers shall be able to have an E2E-protected event-based communication, regardless of the bus used. |
|---|---|
| Rationale: | It shall be ensured that communication failure modes introduced by the communication bus (on the E2E-protected serialized data) which are detectable by the E2E protocol are detected by Communication Management. Note: It depends on the used communication type (periodic/ non-periodic) and the application which failure modes are to be detected. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Methods

Communication Management shall provide an interface to provide methods to other applications
⌈
| Description: | Application developers shall be able to provide methods which can be called by other applications. |
|---|---|
| Rationale: | After offering a service, it shall be possible for other applications to call methods of the service and get the respective result. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Application "A" calls the "getCurrentTime" method of the wall clock service provided by application "B". |

Supporting Material:
⌋

 Communication Management shall provide an interface to call methods of other applications synchronously
⌈
| Description: | Application developers shall be able to synchronously call methods provided by other applications. It is required that the result is available when the method call returns. |
|---|---|
| Rationale: | After finding a service, it shall be possible for an application to call a method of the service as a synchronous service call: the calling application wants to wait for the completion of the service method execution and have the result available before continuing. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Fields

Communication Management shall provide an interface which aggregates methods to receive a notification on a changed field value as well as explicitly getting and setting the field value
  Status: DRAFT
⌈
| Description: | The interface shall aggregate the methods to receive a notification that the field value has changed, explicitly get the field value and explicitly set the field value. It shall also be possible to aggregate any non-empty subset of these methods. |
|---|---|
| Rationale: | To access properties held in a central location it is necessary to be able to query and modify the value as well as get notifications on change of the value. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The consumers of sensor data would like to know the update rate of the sensor data and want to be able to change this value if they have different requirements. |
| Supporting Material: | - |

⌋

 Communication Management shall trigger the application on reception of a notification on field value change
  Status: DRAFT
⌈
| Description: | Application developers shall be able to let the platform trigger the application when a new notification on field value change has been received from another application. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Raw 数据 Streaming Communication
*原文标题：Raw Data Streaming Communication*

The Communication Management shall provide an API to support reading and writing raw data streams that has no datatype information
⌈
| Description: | The Communication Management shall provide an API to support reading and writing raw data streams that has no datatype information. |
|---|---|
| Rationale: | A separate API is needed, since using SOME/IP services for raw data streams requires typed data and serialization, which introduces unnecessary overhead. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Exchanging binary data between an ECU running adaptive applications and sensors in a car. |
| Supporting Material: | - |

⌋

 Application developers shall be able to send and receive raw binary data streams independent of the underlying network protocol
⌈
| Description: | Application developers shall be able to send and receive raw binary data streams independent of the underlying network protocol |
|---|---|
| Rationale: | The application API for Raw Data Streams shall be static. The network protocol and configuration shall only be handled in the deployment information. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Sensors using different network protocols can be changed without updating the application code. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Security

Secure communication shall be transmitted using secure channels
  Status: DRAFT
⌈
| Description: | Communication that is subject to specific security requirements shall be transmitted using a secure channel. |
|---|---|
| Rationale: | Provide secure communication means. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Nodes may need to communicate over a secure channel. |
| Supporting Material: | - |

⌋

 Secure channels shall be configurable
  Status: DRAFT
⌈
| Description: | Secure channels can be realized using various technologies. Therefore the kind and the parameters of a specific secure channel shall be configurable. |
|---|---|
| Rationale: | Enable modeling system security |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Nodes may host several services having different protection requirements thus requiring appropriate secure communication channels. |
| Supporting Material: | - |

⌋

 The assignment of communication to specific secure channels shall be configurable
  Status: DRAFT
⌈
| Description: | Secure channels can be realized using various technologies. Therefore, an application may be deployed in projects supporting different kinds of secure channels. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Non-Functional 需求
*原文标题：Non-Functional Requirements*

There is no non-functional requirement.

### 23. References

### 24. 附录
*原文标题：Appendix*

### 25. Change history of AUTOSAR traceable items

### 26. Traceable item history of this document according to AUTOSAR Release R25-11

### 27. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 28. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| Communication Management shall provide an interface to subscribe to a specific event or trigger provided by an instance of a certain service |  |
| Communication Management shall provide an interface to stop the subscription to an event or a trigger of a service instance |  |
| Communication Management shall provide a means to monitor the state of the subscription to an event or a trigger |  |
| Communication Management shall provide an API to send events and triggers to other applications |  |
| Communication Management shall provide an API to the application to poll received events and triggers |  |
| Communication Management shall trigger the application on reception of an event or a trigger |  |
| Service Oriented Communication realization with configured protocol |  |
| Communication Management shall queue received events and triggers |  |

### 29. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 30. Traceable item history of this document according to AUTOSAR Release R24-11

### 31. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| Support of IEEE1722 Stream ACF Message handling |  |
| Support of IEEE1722 Stream handling |  |

### 32. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 33. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

| Number | Heading |
|---|---|
| Creation of CommunicationGroups |  |
| Provide origin of information |  |

### 34. Traceable item history of this document according to AUTOSAR Release R23-11

### 35. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 36. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| Creation of CommunicationGroups |  |
| Provide origin of information |  |

### 37. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
