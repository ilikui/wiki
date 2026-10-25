# Specification of Data Distribution Service for Classic Platform (`DataDistributionService`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1069 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_DataDistributionService_1069\AUTOSAR_CP_SWS_DataDistributionService.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_DataDistributionService_1069\AUTOSAR_CP_SWS_DataDistributionService.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_DataDistributionService_1069\zzgen\CP_SWS_DataDistributionService.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the Data Distribution Service AUTOSAR Basic Software module (Dds) .

## 模块依赖

This section describes the relations to other modules and files within the AUTOSAR basic software architecture. It contains brief descriptions of configuration information and services, which are required by the Dds module from other modules.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

None.

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the Data Distribution Service AUTOSAR Basic Software module (Dds) .

### 3. DDS 协议概述
*原文标题：DDS protocol overview*

The Data Distribution Service (DDS) is a middleware protocol and API standard from the Object Management Group (OMG).

A preliminary overview of DDS can be found into chapter 4 of `AUTOSAR_FO_RS_DataDistributionService`  or referring directly the OMG standard .

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

### 5. Acronyms

For acronyms and abbreviations that are not present in the table below, refer to .

| Acronym | Description |
|---|---|
| DdsXf | DDS Transformer |
| DW | Data Writer |
| DR | Data Reader |
| FSM | Finite State Machine |

### 6. Abbreviations

None.

### 7. 术语表
*原文标题：Glossary*

* DDS/non-DDS PDU: PDU containing/NOT containing DDS data (e.g., PDU listed/not listed into DdsAppDataTxPduCollection, DdsAppDataRxPduCollection, DdsDomainParticipantUnicastRtpsPduCollection, DdsDomainMulticastRtpsPduCollection, DdsDomainParticipantDpUnicastRtpsPduCollection, DdsDomainDpMulticastRtpsPduCollection containers).
* Service interface element: An atomic element belonging to a Service interface as defined in .
* Unused SoAdConnection: A SoAdConnection referencing a SoAdSocketRemoteAddress set according to . In this specification the statements "reset a SoAdConnection" and "set to unused a SoAdConnection" have the same meaning.
* Sample: In the DDS protocol, a sample is the fundamental unit of data communication. It comprises both the data payload and the associated metadata including timestamps and identifiers which are essential for ensuring accurate interpretation, proper synchronization, and timely delivery between publishers and subscribers. In the AUTOSAR Classic context, an instance of a VariableDataPrototype or an ClientServerOperation constitutes the payload of the aforementioned sample.

### 8. 相关文档
*原文标题：Related documentation*

### 9. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 10. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for the Dds.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Dds.

### 11. 约束与假设
*原文标题：Constraints and assumptions*

### 12. 约束与假设
*原文标题：Constraints and assumptions*

### 13. Assumptions

* DDS/non-DDS PDU concatenation. Concatenating DDS PDUs and non-DDS PDUs by IpduM is out of the scope of this concept.
* SoAdConnection status. Each used SoAdConnection is assumed to be open.

  Note. A SoAdConnection can be explicitly open via `SoAd_OpenSoCon` or can be automatically open by SoAd. Refer to SoAdSocketAutomaticSoConSetup parameter description in  for details.
* Application Tx PDU format in a bidirectional service interface elements. The DdsAppDataTxPdu format is expected to be defined according to the rules in .
* DdsDataWriter/DdsDataReader in service interface elements. The DdsDataWriter and DdsDataReader used by a service interface element instance can handle at most one application PDU, respectively in transmission and in reception (See , ).

### 14. 限制
*原文标题：Limitations*

* DDS/CAN Data gateway: Not supported
* Shared-memory communication: Not supported.
* Immediate transmission: Not supported.
* Immediate reception: Not supported.
* Dds Transmit, Dds Trigger Transmit APIs support: both functions `Dds_Transmit`, `Dds_TriggerTransmit` are always available, but only one of them must be used (e.g., `Dds_Transmit` is used instead of `Dds_TriggerTransmit` only if to be called by lower layer).
* Software Cluster Connection Layer (SwCluC): Not supported.
* Multicore Distribution: Dds module is assumed to be located and running in a single partition (no multiple sets of Tx/Rx main functions per partition).
* Communication use cases:  summarizes the supported Communication paths.
* Application service control (e.g BswM support): In the case of SOME/IP, service control is necessary to allow the application to manage ECU state changes, the availability of the communication channel, and event groups. In the case of Dds, the concept of an event group does not exist, but it could be extremely useful for managing other scenarios.
* `Dds_DeInit`: Not supported.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Constraints

* DDS-SOME/IP network interaction: Dds and SOME/IP share the same bus type, so some mechanism to assure they don't interfere would be provided. This mechanism will mostly consist on UDP port choice: SOME/IP and DDS shall never share reception port numbers.
* DDS-SOME/IP SoAd resource sharing: Shall not be mix of DDS and SOME/IP (or any other potential protocol) communication on the same socket connection. A socket (or a set of sockets) is reserved for DDS only.
* DDS/non-DDS PDU concatenation: DDS and SOME/IP shall not share the same socket connection. A socket (or a set of sockets) shall be reserved to DDS only.
* UDP Usage: According to the OMG specification , the UDP/IP PSM shall be used for inter-ecu communications.

### 16. 适用的车型领域
*原文标题：Applicability to car domains*

This module is applicable all domains where DDS communication is required and/or beneficial.

### 17. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section describes the relations to other modules and files within the AUTOSAR basic software architecture. It contains brief descriptions of configuration information and services, which are required by the Dds module from other modules.

### 18. RTE (BSW Scheduler)

The RTE BSW Scheduler  calls the main functions of the Dds, which are necessary for the cyclic processes of the Dds.

### 19. PDU Router

The Dds module uses the PduR  as middle layer module.

### 20. StbM

OMG Standard states that each RTPS message sent by the originating Participant can include a timestamp. ( 8.3.2.2). It may be used by the receiving application to estimate the time offset between the clocks of the sending and receiving Participants (for instance in `DESTINATION_ORDER` QoS policy handling). The `StbM_GetCurrentTime` API shall be used to guarantee the needed precision ( 8.3.5.8, 9.4.2.9).

### 21. Default 错误 Tracer
*原文标题：Default Error Tracer*

In order to be able to report development or runtime errors, the Dds module has to have access to the error hook of the Default Error Tracer .

### 22. Crypto 服务管理器
*原文标题：Crypto Service Manager*

In order to support Security capabilities (e.g., Key management, Message Authentication Code generation and verification), the Dds shall use the Crypto Service Module API : The Dds requires:

- the MAC-generate interface (`Csm_MacGenerate`) to generate MAC to be added to messages to be sent;

- the MAC-verify interface (`Csm_MacVerify`) to check MAC of received messages.

### 23. Cyclic Redundancy Check

In order to support Safety capabilities, Dds uses the CRC Library .

The Dds requires the `Crc_CalculateCRC32` or the `Crc_CalculateCRC64` APIs to calculate CRC to be added to messages to be sent or to be checked for received messages.

### 24. Socket Adaptor

The Socket Adaptor  hands over service requests between the Ethernet Stack and the Dds. Dds module interacts with SoAd updating remote endpoint information (IP address and port number) in predefined SoAdSocketConnection.

### 25. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

Requirements that are not fulfilled by this document are linked to .

| Requirement | Description | Satisfied by |
|---|---|---|
| DDS Compliance |  |  |
| DDS standard serialization rules |  |  |
| DDS payload serialization rules |  |  |
| DDS Quality of Service |  |  |
| The DDS AUTOSAR components receive unserialized data |  |  |
| Type Definition |  |  |
| Security mechanism |  |  |
| Safety mechanism |  |  |
| Publish |  |  |
| Subscribe |  |  |
| Transport protocol |  |  |
| RTPS message encapsulation |  |  |
| RTPS message decapsulation |  |  |
| DDS Event communication support |  |  |
| DDS Method communication support |  |  |
| DDS error handling of bi-directional method communication support |  |  |
| DDS shall support field communication with getters, setters and notification events. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 功能规范
*原文标题：Functional specification*

### 27. 概述
*原文标题：Overview*

The Dds module implements all the interface logic (Entity management, QoS, etc.) and the DDS-RTPS standard layer  for DDS communication.

The Dds module is a container that encapsulates the implementation of a full-fledged middleware in accordance with the OMG standards and defines an interface based on PDUs typical of the AUTOSAR Classic Platform. Due to its middleware nature, the application PDUs must essentially carry the data produced by the application unaltered, so that they can later be processed by the logic residing entirely within the module (See ).

It is composed by several functional aspects:

* RTPS protocol Serialization
* RTPS protocol Deserialization
* Data filtering
* Data reordering
* Data persistency
* Data re-transmission
* Security
* E2E protection
* Remote Procedure Call
* Participants, Endpoints and Service Instance discovery procedures.

### 28. Communication paths

Dds supports following AUTOSAR Classic Platform Communication Paths:

* Signal-based with SenderReceiverInterface
* Signal-based with ClientServerInterface
* Signal-based with TriggerInterface

Basically Dds consumes the application PDU and, according to the internal logic, can decide to produce and transmit a new RTPS PDU through the transport layer.

The DataWriter and DataReader represent internal functional blocks showing the mapping between a PDU and the related DDS middleware object (they are modeled in the ECUC by some DdsDataWriter/DdsDataReader). The RTPS processor represents the logic of module.

Considering the transmission direction, the application data is fed into the Dds Transformer, which simply copies the VariableDataPrototype and ClientServerOperation into a buffer that will serve as the content of the DdsRtpsDataTxPdu. In the reverse direction, the VariableDataPrototype and ClientServerOperation results are similarly extracted from the received PDU.

The TriggerInterface use case can be considered as a special case of the SenderReceiverInterface where the data is empty, so in this case the Dds Transformer is not used.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 服务 Oriented 架构
*原文标题：Service Oriented Architecture*

In AUTOSAR Classic Platform SOME/IP  is the protocol historically designed to handle SOA features. This specification introduces the DDS as a way to implement Service-Oriented communication; a brief introduction on SOA is described in .

DDS can realize the middleware for SOA applications implementing the different communication styles, Events, Methods and Fields, using three foundational AUTOSAR PortInterfaces:

* SenderReceiverInterface
* ClientServerInterface
* TriggerInterface

AUTOSAR Classic Platform introduces the service interface in .

Each service interface element instance is modeled with a VariableDataPrototype, a ClientServerOperation or a Trigger and it is uniquely identified with one or two ISignalIPdu.

| Service interface element | Represented by | Identified by |
|---|---|---|
| Event | VariableDataPrototype |  |

| in a SenderReceiverInterface | one ISignalIPdu |
|---|---|
| Request-Response Method | ClientServerOperation |

| in a ClientServerInterface | one ISignalIPdu for request and |
|---|---|

one ISignalIPdu for reply
Fire-Forget Method

| with arguments | VariableDataPrototype |
|---|---|

| in a SenderReceiverInterface | one ISignalIPdu |
|---|---|

Fire-Forget Method

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 服务接口 elements with Dds
*原文标题：Service interface elements with Dds*

In this specification, System template elements (DdsCpProvidedServiceInstance and DdsCpConsumedServiceInstance) and ECU configuration template elements (DdsProvidedServiceInstance and DdsConsumedServiceInstance) are derived from the Service Interface Collection concept, in order to model and configure Service Instances realising such Service Interfaces.

 shows the mappings of each service interface element with an object defined in the Dds ECU configuration model.

Two different sets of service interface elements are defined:

* Bidirectional: a Request-Response communication style is implemented between two ECUs
* Unidirectional: a one-way data sending communication style is used by an ECU toward another ECU.

| Service interface element | Represented by | Topics data types | Communication style |
|---|---|---|---|
| Event | DdsServiceEventSender |  |  |

| DdsServiceEventReceiver |  | Unidirectional |
|---|---|---|
| Request-Response Method | DdsServiceMethodsRequestReplyMethod |  |

| Bididirectional |
|---|

Fire-Forget Method

| with arguments | DdsServiceMethodsFireAndForgetMethod |  | Unidirectional |
|---|---|---|---|

Fire-Forget Method

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Bidirectional 服务接口 elements
*原文标题：Bidirectional service interface elements*

The Bidirectional service interface elements are the Request-Response methods and Getter/Setter operation Fields defined respectively in  and in .

They rely on the Remote Procedure Call protocol specified in  and in the  according to , , , .

In order to fullfill all the requirements in , the Dds requires that the format of a certain DdsAppDataTxPdu referenced by one of:

* DdsServiceMethodsRequestReplyMethod.DdsDataWriterRef
* DdsServiceFieldsFieldServerGetter.DdsDataWriterRef
* DdsServiceFieldsFieldServerSetter.DdsDataWriterRef
* DdsServiceFieldsFieldClientGetter.DdsDataWriterRef
* DdsServiceFieldsFieldClientSetter.DdsDataWriterRef

is defined according to , , as showed in .

This type of service element is based on the use of a ClientServerOperation and therefore on the management of the requestId field required to distinguish between different requests of the same service type, in accordance with the semantics defined by the .

The rules to do that are specified by , , , .

More functional details can be found in .

### 32. QoS 管理
*原文标题：QoS Management*

The Dds could support a subset (even empty) of QoS policies. There is no mandatory QoS to be implemented. It is vendor-specific which QoS policy is actually supported.

Each entity could define its own set of supported QoS policy, by static configuration.

### 33. TRANSPORT_PRIORITY QoS 映射
*原文标题：TRANSPORT_PRIORITY QoS mapping*

The DDS standard defines the `TRANSPORT_PRIORITY` QoS for a certain DataWriter. Its purpose is to allow the application to take advantage of transports capable of sending messages with different priorities (any value within the range of a 32-bit signed integer may be chosen; higher values indicate higher priority). In AUTOSAR CP the information closest to the concept of transport priority is the value of SoAdSocketFramePriority defined in SoAdSocketConnectionGroup parent object of the SoAd module. This specifies the priority of the Ethernet frame handled for all the SoAdSocketConnections owned by the related SoAdConnectionGroup.

Unfortunately there is no direct link between the application level of the Dds module (e.g., the upper layer PDU and the DdsDataWriter) and its transport level (e.g., the lower layer PDU).

In other words: the Dds module selects at runtime the lower layer PDU based on the configuration of the according DdsDataWriter. If any, the Dds module should select a DdsRtpsDataTxPdu that belongs to a SoAdSocketConnectionGroup configured with the needed SoAdSocketFramePriority.

Note.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Security Mechanisms

Opening up a communication path between AP and CP, and even between CP and non-AUTOSAR platforms, could involve security risks, so it may require the usage of some security mechanisms.

The Dds Module guarantees some security mechanism by the usage of DDS Security Specification . The usage of this specification is necessary to guarantee the interoperability with other DDS systems, both with AP (where DDS- Security is already in use) and in non-AUTOSAR systems. Implementing this specification, however, could be really resource consuming. In particular, to be used on a slow microcontroller, these features would need hardware acceleration. To overcome this issue, a subset of DDS-security functionalities which guarantee a minimum security level has been selected.

At this stage, implementing DDS-Security aims to guarantee message authentication, data integrity and group authentication. Security mechanism can be enabled or disabled at configuration time. If enabled, all security parameters must be statically configured at pre-compile time. For details on security parameters configuration, please refer to .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Safety Mechanisms

According to ISO 26262, there is a set of faults that can be considered on communication link between senders and receivers executed in different software partitions or ECUs.

The concept of end-to-end protection assumes that safety-related data exchange shall be protected at runtime against the effects of faults within the communication link.

The DDS Specification has intrinsic safety mechanisms (Counters, CRCs, QoS policies) that can be used to support a safety argument.

For a complete list of possible faults as defined in  to be addressed in the pursuit of functional safety, and the mechanisms DDS offers to support them, please refer to section 6.12 of  and .

### 36. Discovery mechanism

In this document, the term Dds Dynamic Discovery engine indicates the Dds's ability to obtain, at run-time, information about the presence of remote Participants, remote Endpoints, and their relationships in terms of service instances.

This can be done through the support of three different discovery mechanisms using unicast and multicast paradigms:

* Simple Participant Discovery Protocol (SPDP)
* Simple Endpoint Discovery Protocol (SEDP)
* Service Discovery protocol

The DDS protocol supports both unicast and multicast protocols for discovery traffic as well as user traffic .

Note. IP multicast in DDS user traffic Using IP multicast in DDS allows a single message to be sent simultaneously to multiple subscribers. This approach not only minimizes bandwidth usage and simplifies traffic management but also enhances scalability by eliminating the need for individual message transmissions, thereby reducing latency through concurrent data delivery. Additionally, when combined with DDS QoS settings, multicast optimizes network resources to maintain robust, high-performance communications even in complex or real-time automotive systems. A typical scenario.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Socket connections 控制
*原文标题：Socket connections control*

The interaction of Dds with the single connection occurs through the interface exported by SoAd to set the <IP address, port> pair. This makes sense for the single participant that must use SPDP or SEDP in accordance with the requirements  and .

The dynamic behavior is schematically represented by the finite state machine in . It describes the evolution of the connectivity status of a single SoAdConnection controlled by the Discovery engine.

* FsmState:Unused. The SoAdConnection cannot be used to send message, no remote address has been set.
* FsmState:Active. The SoAdConnection is configured with a valid remote IP address and port. It can be used to send message.
* FsmEvent:evRemoteParticipantDiscovered. A new remote Domain Participant has been discovered by the SPDP (a.k.a a new IP address and port are ready to be set in a connection) Each DdsDomainParticipant that wants to communicate with it must perform the following actions:

  * assign the pair <remote IP address, remote port> to an unused SoAdConnection identified by a specific SoConnId. Once assigned, the SoAdConnection becomes active.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. 通用需求
*原文标题：General Requirements*

Inside the same DDS Domain, topic names shall be unique according to "Section 2.2.1.2 Conceptual Outline" in .

 Topic name uniqueness
⌈
During the validation of the configuration, a validation error shall be raised if different DdsTopics within a DDS Domain share the same name.
⌋

### 39. Communication 需求
*原文标题：Communication requirements*

### 40. Serialization 需求
*原文标题：Serialization requirements*

DDS Data serialization
  Upstream requirements: , , , ,
⌈
The Dds shall perform the serialization of a DdsAppDataTxPdu into a DdsRtpsDataTxPdu or a DdsRtpsMulticastDataTxPdu. The PDU, which is used by the DdsDataWriter (either DdsRtpsDataTxPdu or DdsRtpsMulticastDataTxPdu), shall be selected at runtime according to the DDS middleware internal policies.
⌋

 DDS-RTPS compliance
  Upstream requirements: , , ,
⌈
Data produced into one of DdsRtpsDataTxPdu, DdsRtpsDpDataTxPdu, DdsRtpsMulticastDataTxPdu, DdsRtpsDpMulticastDataTxPdu shall be compliant with the DDS Wire Interoperability protocol (RTPS) defined in . To guarantee such compliance, the Dds module shall serialize the payload according to the DDS standard serialization rules defined in section 7.4.3.5 of above mentioned document ().
⌋

 DDS serialization of primitive types
  Upstream requirements: , ,
⌈
The Dds module shall serialize AUTOSAR primitive data types as described in , according to the standard serialization rules for the equivalent DDS `PRIMITIVE_TYPE` defined in section 7.2.2.2 of
⌋

Table  provides the equivalent DDS `PRIMITIVE_TYPEs` for the primitive AUTOSAR CP platform data types.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Deserialization 需求
*原文标题：Deserialization requirements*

DDS Data deserialization
  Upstream requirements: , , , ,
⌈
On receiving side, the Dds module shall deserialize a given DdsRtpsDataRxPdu according the DDS Wire Interoperability protocol () to an AUTOSAR compliant PDU. The DDS deserialized DdsRtpsDataRxPdu or DdsRtpsMulticastDataRxPdu is then provided as DdsAppDataRxPdu to upper layers.
⌋

### 42. Transmission Queue 管理
*原文标题：Transmission Queue management*

The Dds module shall provide a `Dds_Transmit` function so that the PduR is able to initiate the transmission of a upper layer DdsAppDataTxPdu. When called, the `Dds_Transmit` function saves the received PDU into the queue and then returns.

For `Dds_Transmit` API specific requirements refer to the specific API .

 Internal transmission queues
  Upstream requirements:
⌈
The Dds module shall manage an internal set of queues where incoming transmission upper layer PDUs shall be stored.
⌋

 Tx queues set processing order
  Upstream requirements:
⌈
The Transmission function (e.g., `Dds_MainFunction_Tx` shall establish the tx queues processing order based on the queue specific period. If some queue has the same period value, their mutual order is not defined.
⌋

 Tx queue processing rules
  Upstream requirements:
⌈
For each queue the Transmission function shall perform all the DDS Middleware processing (QoS management, safety and security tasks, se-rialization) on received data, according to the configurated processing algorithm.
⌋

The transmission queue shall have its own processing period. The queue specific period shall be a multiple of the DdsGeneral.DdsMainTxFunctionPeriod.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Transmission 需求
*原文标题：Transmission requirements*

The Dds module shall provide a `Dds_MainFunction_Tx` function to perform the actual DDS Middleware processing (and subsequent PDU transmission). For `Dds_MainFunction_Tx` specific requirements refer to the specific .

DDSI-RTPS  supports both UDP unicast and UDP multicast when sending RTPS messages. Also, they aren't mutually exclusive: just one or both can be used in the same domain according to the system's communications design constraints (network architecture, performance, safety, security, etc.). To support both unicast and multicast address, the SoAd shall be properly configured.

 Unicast transmission
⌈
During validation of the configuration, a validation error shall be raised if a DdsRtpsDataTxPdu or a DdsRtpsDpDataTxPdu belong to a SoAdSocketConnection configured with a multicast SoAdSocketRemoteIpAddress.
⌋

 Multicast transmission
⌈
During validation of the configuration, a validation error shall be raised if a DdsRtpsMulticastDataTxPdu or a DdsRtpsDpMulticastDataTxPdu belong to a SoAdSocketConnection configured with a unicast SoAdSocketRemoteIpAddress.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Reception Queue 管理
*原文标题：Reception Queue management*

Internal reception queues
  Upstream requirements:
⌈
The Dds module shall manage an internal set of queues where incoming reception lower layer PDUs shall be stored.
⌋

 Rx queues set processing order
  Upstream requirements:
⌈
The reception function (e.g., `Dds_MainFunction_Rx`) shall establish the Rx queues processing order based on the queue period. If some queue has the same DdsGeneral.DdsMainRxFunctionPeriod value, their mutual order is not defined.
⌋

 Rx queue processing rules
  Upstream requirements:
⌈
For each queue the reception function shall perform all the DDS Middleware operations (QoS management, safety and security tasks, de-serialization) on received data, according to the configurated processing algorithm.
⌋

The reception queue shall have its own processing period. The queue specific period shall be a multiple of the DdsGeneral.DdsMainRxFunctionPeriod.

 Rx queue processing algorithm
  Upstream requirements:
⌈
The order of the queue processing shall depend by the configurated algorithm:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Reception 需求
*原文标题：Reception requirements*

Every reception lower layer PDU which is received by the Ethernet Interface is given to the PDU Router by means of the SoAd. The PDU Router routes those PDUs to the Dds reception interface invoking the `Dds_RxIndication` callback.

For `Dds_RxIndication` API specific requirements refer to the specific API .

Similar to transmission, DDSI-RTPS  supports both UDP unicast and UDP multicast also when receiving RTPS messages. Also, they aren't mutually exclusive: just one or both can be used in the same domain according to the system's communications design constraints (network architecture, performance, safety, security, etc.).

To support both unicast and multicast address, the SoAd shall be properly configured.

 Unicast reception
⌈
During validation of the configuration, a validation error shall be raised if a DdsRtpsDataRxPdu or a DdsRtpsDpDataRxPdu belong to a SoAdSocketConnection configured with a multicast SoAdSocketRemoteIpAddress.
⌋

 Multicast reception
⌈
During validation of the configuration, a validation error shall be raised if a DdsRtpsMulticastDataRxPdu or a DdsRtpsDpMulticastDataRxPdu belong to a SoAdSocketConnection configured with a unicast SoAdSocketRemoteIpAddress.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. 时序需求
*原文标题：Timing requirements*

Processing timestamp
  Upstream requirements: ,
⌈
If needed, the DDS middleware shall obtain the timestamp by invoking the `StbM_GetCurrentTime` API. The Dds module shall call the API `Stbm_GetCurrentTime` with the configured time base reference (see DdsGeneral.DdsSynchronizedTimeBaseRef) to get the Timestamp needed for the RTPS packet.
⌋

 RTPS Timestamp
  Upstream requirements: ,
⌈
The Timestamp needed for the RTPS packet shall be provided by the `StbM_GetCurrentTime` StbM API. The Dds module shall call the API `Stbm_GetCurrentTime` with the configured time base reference (see DdsGeneral.DdsSynchronizedTimeBaseRef) to get the Timestamp needed for the RTPS packet.
⌋

Note: The AUTOSAR Dds module is not responsible to time stamp received or transmitted PDUs. The responsibility is bound to the DDS middleware.

### 47. 服务 Oriented 架构需求
*原文标题：Service Oriented Architecture requirements*

DdsDataWriter employed in a service interface element
⌈
If a certain DdsDataWriter is referenced by one of the following ECUC parameter:

* DdsServiceMethodsRequestReplyMethod.DdsDataWriterRef
* DdsServiceFieldsFieldServerGetter.DdsDataWriterRef
* DdsServiceFieldsFieldServerSetter.DdsDataWriterRef
* DdsServiceFieldsFieldClientGetter.DdsDataWriterRef
* DdsServiceFieldsFieldClientSetter.DdsDataWriterRef
* DdsServiceFieldsFieldNotifierSender.DdsDataWriterRef
* DdsServiceMethodsFireAndForgetMethod.DdsDataWriterRef
* DdsServiceEventSender.DdsDataWriterRef

then the upper multiplicity of DdsDataWriter.DdsDataWriterAppTxPduRef shall be 1.
⌋

 DdsDataReader employed in a service interface element
⌈
If a certain DdsDataReader is referenced by one of the following ECUC parameter:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 132 章（内容从略，见纯文本全文）

48. Bidirectional 服务接口 elements common 需求
49. Unidirectional 服务接口 elements common 需求
50. Events
51. Methods
52. Request and response Methods
53. Fire and Forget Methods with Arguments
54. Fire and Forget Methods without Arguments
55. Fields
56. Notifier
57. Getter and Setter
58. Dynamic discovery 需求
59. Security 需求
60. Safety 需求
61. 错误分类
62. Development 错误
63. Runtime 错误
64. Production 错误
65. Extended Production 错误
66. API 规范
67. Imported 类型
68. 类型定义
69. Dds_ConfigType
70. 功能定义
71. Dds_Init
72. Dds_Transmit
73. Callback 通知
74. Dds_RxIndication
75. Dds_TxConfirmation
76. Dds_TriggerTransmit
77. Scheduled functions
78. Dds_MainFunction_Rx
79. Dds_MainFunction_Tx
80. Expected 接口
81. Mandatory 接口
82. Optional 接口
83. Configurable 接口
84. 时序图
85. Transmission
86. Dds message transmission
87. Dds message transmission confirmation
88. Dds message trigger transmission
89. Reception
90. Dds received indication event
91. Discovery
92. Remote endpoint address setting
93. Setting SoAdConnection to unused
94. 配置规范
95. How to read this chapter
96. Containers and 配置 parameters
97. Dds
98. Dds 通用
99. Dds Config
100. DdsAppDataPduCollection
101. DdsAppDataTxPduCollection
102. DdsAppDataTxPdu
103. DdsAppDataRxPduCollection
104. DdsAppDataRxPdu
105. DdsQueueCollection
106. DdsRxQueueCollection
107. DdsRxQueue
108. DdsTxQueueCollection
109. DdsTxQueue
110. DdsDomainParticipantCollection
111. DdsDomainParticipant
112. DdsDomainParticipantUnicastRtpsPduCollection
113. DdsDomainParticipantDpUnicastRtpsPduCollection
114. DdsDomainParticipantQoS
115. DdsDomainParticipantCryptoInfo
116. DdsDataSender
117. DdsDataReceiver
118. DdsPublisher
119. DdsSubscriber
120. DdsTopic
121. DdsRemoteDomainParticipantCollection
122. DdsProvidedServiceInstance
123. DdsConsumedServiceInstance
124. DdsDomainMulticastRtpsCollection
125. DdsDomainDpMulticastRtpsPdusCollection
126. DdsQoSPolicies
127. DdsUserData
128. DdsTopicData
129. DdsGroupData
130. DdsDurability
131. DdsDurabilityService
132. DdsPresentation
133. DdsDeadline
134. DdsLatencyBudget
135. DdsOwnership
136. DdsOwnershipStrength
137. DdsLiveliness
138. DdsTimeBasedFilter
139. DdsPartition
140. DdsReliability
141. DdsTransportPriority
142. DdsLifespan
143. DdsDestinationOrder
144. DdsHistory
145. DdsResourceLimits
146. DdsEntityFactory
147. DdsWriterDataLifecycle
148. DdsReaderDataLifecycle
149. 发布信息
150. 附录
151. 不适用需求
152. Change history of AUTOSAR traceable items
153. Traceable item history of this document according to AUTOSAR Release R25-11
154. Added 规范 Items in R25-11
155. Changed 规范 Items in R25-11
156. Deleted 规范 Items in R25-11
157. Added Constraints in R25-11
158. Changed Constraints in R25-11
159. Deleted Constraints in R25-11
160. Traceable item history of this document according to AUTOSAR Release R26-11
161. Added 规范 Items in R26-11
162. Changed 规范 Items in R26-11
163. Deleted 规范 Items in R26-11
164. Added Constraints in R26-11
165. Changed Constraints in R26-11
166. Deleted Constraints in R26-11
167. Referenced Meta Classes
168. 服务接口 elements的Detailed 描述
169. Events
170. Methods
171. Request and Response Methods
172. Fire and Forget Method with Arguments
173. Fire and Forget Method without arguments
174. Fields
175. Bidirectional 服务接口 element 功能性 communication scheme
176. 示例
177. 传输 layer 配置
178. Discovery connections 配置
179. SOME/IP DDS mixed 架构
