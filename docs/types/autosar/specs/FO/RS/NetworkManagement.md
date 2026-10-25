# Requirements on AUTOSAR Network Management (`NetworkManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 927 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_NetworkManagement_927\AUTOSAR_FO_RS_NetworkManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_NetworkManagement_927\AUTOSAR_FO_RS_NetworkManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_NetworkManagement_927\zzgen\FO_RS_NetworkManagement.complete.txt`

## 文档简介

This document specifies requirements on the AUTOSAR Network Management.

The requirements apply on following functional entities:

* Network Management coordinating a particular Nm-cluster.
* Network Management bus specifics for a particular bus.
* Gateway and Interoperability of Network Management between Nm-clusters.

The communication system where Nm is applicable has to support a "bus sleep" mode. That means that the transceiver of the communication system can switch to a low power mode and can be switched again to full power mode by (specific) bus traffic and/or application.

## 模块依赖

The Network Management API shall be independent from the communication bus
⌈
| Description: | The Network Management API shall be independent from the communication bus i.e. equal for CAN and FlexRay. |
|---|---|
| Rationale: | Common, standardized interface to upper layers. |
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | Usage of Nm on different types of bus; only one interface independent of the underlying bus architecture. |
| Supporting Material: | - |

⌋

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the AUTOSAR Network Management.

The requirements apply on following functional entities:

* Network Management coordinating a particular Nm-cluster.
* Network Management bus specifics for a particular bus.
* Gateway and Interoperability of Network Management between Nm-clusters.

The communication system where Nm is applicable has to support a "bus sleep" mode. That means that the transceiver of the communication system can switch to a low power mode and can be switched again to full power mode by (specific) bus traffic and/or application.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym | Description |
|---|---|
| Nm | Network Management |
| PN | Partial Network |
| PNI | Partial Network Information |

| Term | Description |
|---|---|
| Nm Message | Refers to the payload transmitted on the bus. It contains the User Data as well as the Control Bit Vector and may contain the Source Node Identifier. |
| Nm Node | A ECU (electornic controll unit) which is connected to one or more Nm clusters |
| Nm cluster | Set of Nm nodes coordinated with the use of the Nm algorithm. |
| Nm instance | A Nm instance represents the current status of one Nm cluster inside one Nm node |

The acronyms/abbreviations and terms not provided in tables above are included in the AUTOSAR Glossary .

### 4. Use Cases

| ID | Name | Description |
|---|---|---|
| 0001 | Synchronous Shutdown | If there is no communication need in a Nm cluster, the Nm protocol ensures that all Nm nodes synchronously enter sleep mode. |
| 0002 | Sub-networks Synchronous Shutdown | Support the coordinated shutdown of multiple sub-networks. This can be considered as an extension of the synchronous shutdown use case with the objective of synchronously shutting down multiple Nm clusters. |
| 0003 | Keep Nm Cluster Awake | If at least one Nm node in a Nm cluster needs communication, the Nm protocol ensures that all required Nm nodes remain awake. |
| 0004 | Partial Network | Support of partial network by defining communication/function domains to allow for turning off network communication across multiple ECUs in case their provided functions are not required under certain conditions. Other ECUs can continue to communicate on the same bus channels. Additionally use Nm messages to communicate the request/release information of a partial network cluster between the participating ECUs. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 需求规范
*原文标题：Requirements Specification*

### 6. 功能性需求
*原文标题：Functional Requirements*

### 7. 配置
*原文标题：Configuration*

Specific features of the Network Management shall be configurable
⌈
| Description: | The following features of the Network Management shall be configurable: |
|---|---|

* Detection of present nodes -
* Notification that all other ECUs are (no more) ready to sleep (i.e. Remote Sleep Indication (Cancellation)) - ,
* Nm Coordination support -
* User data support - ,
* Bus load reduction -
* Sending node identifier -
* Receiving node identifier -
* Immediate Transmission Confirmation
* Configurable Role In Cluster Shutdown -
* Bus Keep Awake Services -
* Partial Networking extensions -
* Dynamic PNC Mapping -
* Synchronized PNC shutdown -
| Rationale: | Scalability |
|---|---|
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | Configuration of ECU SW |
| Supporting Material: | - |

⌋

### 8. 初始化
*原文标题：Initialization*

The Network Management algorithm shall allow any node to integrate into an already running Nm cluster
⌈
| Description: | The Network Management algorithm shall allow any node to integrate into an already running Nm cluster. |
|---|---|
| Rationale: | Integration of |

* Late nodes
* Nodes that have recovered from fault state
* Nodes that have been connected to a running vehicle network (e.g. by service)
| Applies To: | AP, CP |
|---|---|
| Dependencies: | - |
| Use Case: | See rationale |
| Supporting Material: | - |

⌋

 Nm shall not prohibit bus traffic with Nm not being initialized
⌈
| Description: | It shall be possible that software modules are enabled to access the communication system, independent of the presence of Nm (Nm initialized or not). |
|---|---|
| Rationale: | Initialization delays or errors of Nm shall not prohibit the communication of application software. |
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | ECU without Nm or Nm starts later (see rationale) |
| Supporting Material: | - |

⌋

### 9. Normal Operation

The Nm shall be applicable to different types of communication systems which are in the scope of AUTOSAR and support a bus sleep mode.
⌈
| Description: | Network management mechanisms for each supported protocol shall be realized using a limited number of predefined Nm states and Nm transitions. The events triggering the transitions between states and the actions taken on these transitions may be protocol specific. A bus sleep mode shall be supported for each protocol. Nm shall be executable on asynchronous communication systems (e.g. CAN) as well as on synchronous communication systems (e.g. FlexRay), and also on any other types of communication systems which are in the scope of AUTOSAR. |
|---|---|
| Rationale: | In today's cars, multiple different communication systems are implemented. For energy consumption, all ECUs have to be able to switch into a low power mode. Therefore, network management is necessary for all communication systems. To facilitate understanding, Nm shall be constructed from a common set of state definitions. |
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | ECU with CAN and FlexRay, Ethernet |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Fault Operation

Nm shall perform communication system error handling for errors that have impact on the Nm behavior.
⌈
| Description: | If bus errors of a specific bus on which Nm is running have impact on the Nm behavior, the error handling must be performed by Nm. |
|---|---|

Focus: bus errors, not protocol errors. Example: loss of Nm message is handled.
| Rationale: | Error handling |
|---|---|
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | Communication loss |
| Supporting Material: | - |

⌋

### 11. Nm Coordination

It shall be possible to group networks into Nm Coordination Clusters
⌈
| Description: | It shall be possible to group networks into Nm Coordination Clusters. Each bus specific Nm shall, by configuration, be part of 0 or 1 Nm Coordination Cluster. Nm shall provide functionality (Nm Coordination) to coordinate the different Nm modes (especially sleep and keep awake) on all networks in an Nm Coordination Cluster, by performing a synchronized shutdown on all included networks. The level of synchronization is determined by the configuration of the shutdown synchronization algorithm. Specifically, it shall be possible to perform Nm Coordination for each Nm Coordination Cluster separately and independently. |
|---|---|
| Rationale: | It shall be possible to perform coordinated and/or synchronized shutdown of multiple Nm clusters independently. |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | Nm Coordinator |
| Supporting Material: | - |

⌋

Note: The definitions of Nm Coordination Cluster, Nm Coordinator, Synchronize and Coordinate are available in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Partial Networking

Note: The definitions of Partial Networking is available in more details in .

 Nm Interfaces for Repeat Message Request
⌈
| Description: | The Nm shall use one bit in the Nm Control Bit Vector to signal receiving nodes to enter NmRepeatMessage state. Additional Information: There must be an interface to set the value of this bit in the <Bus>Nm and the Repeat Message Request bit and one to indicate the change of this bit during reception. This feature must be statically configurable (available or not). |
|---|---|
| Rationale: | - |
| Applies To: | CP |
| Dependencies: | , |
| Use Case: | Node detection, Dynamic PNC Mapping |
| Supporting Material: | - |

⌋

 CanNm shall support Partial Networking on CAN
⌈
| Description: | CanNm shall support Partial Networking on CAN. |
|---|---|
| Rationale: | It is necessary to implement complete partial network support on the bus protocol CAN, to reduce the power consumption of CAN communication domains. |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | The power consumption can be reduced by e.g |

* Shutting down of seat control functions
* Shutting down of park assistant functions
* Hazard flashers
* Shutting down of Electric Park Brake (EPB)
| Supporting Material: | - |
|---|---|

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Non-Functional 需求
*原文标题：Non-Functional Requirements*

### 14. Layout 需求
*原文标题：Layout Requirements*

Nm shall define a common layout of Nm messages.
⌈
| Description: | Nm protocol specifies the Nm message format to have a common understanding of the protocol, independently of the underlying physical layer of the communication system used. |
|---|---|
| Rationale: | Compatibility, interoperability, interpretation and creation of Nm messages. |
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | - |
| Supporting Material: | - |

⌋

### 15. 时序需求
*原文标题：Timing Requirements*

There shall be a deterministic time from the point where all nodes agree to go to bus sleep to the point where bus is switched off.
⌈
| Description: | The time required from the point in time when the Nm of each ECU agree on shutting down a communication system and the point in time when the communication system is really shutting down, has to be deterministic (guarantee of min time and max time). This time must be statically configurable per cluster. |
|---|---|
| Rationale: | Determinism of network behavior, guarantee of synchronized sleep-mode. |
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | See Rationale |
| Supporting Material: | - |

⌋

### 16. Resource Usage

Nm shall provide a mechanism to limit its bus load.
⌈
| Description: | Nm shall not exceed a specified upper limit of bus load. This bus load has to be specified. Example: 3% in normal operation, 6% Bus load peak. |
|---|---|
| Rationale: | Determinism |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | Avoid solution like in ISO 17356-5: Nm Specification: alive messages after bus wakeup |
| Supporting Material: | - |

⌋

 Nm shall support communication clusters of up to 64 ECUs
⌈
| Description: | Communication clusters of up to 64 ECUs / controllers shall be supported by Nm. |
|---|---|
| Rationale: | Flexibility |
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | See Rationale |
| Supporting Material: | - |

⌋

 On a properly configured node, Nm shall tolerate a loss of a predefined number of Nm messages
⌈
| Description: | On a properly configured node, Nm shall tolerate a loss of a predefined number of Nm messages. The limitations of the number of message losses have to be described in the specification. |
|---|---|
| Rationale: | Robustness: There shall be no need for Nm to receive every Nm message. A loss of one message (in case of bursts) shall have no impact on the Nm behaviour. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Hardware independency

The Network Management API shall be independent from the communication bus
⌈
| Description: | The Network Management API shall be independent from the communication bus i.e. equal for CAN and FlexRay. |
|---|---|
| Rationale: | Common, standardized interface to upper layers. |
| Applies To: | AP, CP |
| Dependencies: | - |
| Use Case: | Usage of Nm on different types of bus; only one interface independent of the underlying bus architecture. |
| Supporting Material: | - |

⌋

### 18. References

### 19. 附录
*原文标题：Appendix*

### 20. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 21. Traceable item history of this document according to AUTOSAR Release R22-11

### 22. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| Nm shall handle requests for synchronized PNC shutdown |  |
| <Bus>Nm shall transmit requests for synchronized PNC shutdown as NM-PDU |  |
| <Bus>Nm shall handle retransmission of NM-PDUs |  |
| Nm shall provide a confirmation API to indicate the transmission state PNC bit vector |  |

### 23. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| Nm shall not prohibit bus traffic with Nm not being initialized |  |
| The Nm shall be applicable to different types of communication systems which are in the scope of Autosar and support a bus sleep mode. |  |
| Nm shall provide services to coordinate shutdown of Nm-clusters independently of each other |  |
| It shall be possible to trigger the startup of all Nodes at any Point in Time |  |
| Nm shall provide a service to request to keep the bus awake and a service to cancel this request. |  |
| Nm shall put the communication controller into sleep mode if there is no bus communication |  |
| The Nm shall provide the current state of Nm |  |
| Nm shall inform application when Nm state changes occur. |  |
| The Nm interface shall signal to the application that all other ECUs are ready to sleep. |  |
| There shall be a deterministic time from the point where all nodes agree to go to bus sleep to the point where bus is switched off. |  |
| Nm shall perform communication system error handling for errors that have impact on the Nm behavior. |  |
| Nm shall provide a mechanism to limit its bus load. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

| Number | Heading |
|---|---|
| NM shall forward requests for synchronized PNC shutdown |  |
| <Bus>NM shall handle requests for synchronized PNC shutdown |  |

### 25. Added Constraints in R22-11

none

### 26. Changed Constraints in R22-11

none

### 27. Deleted Constraints in R22-11

none

### 28. Traceable item history of this document according to AUTOSAR Release R23-11

### 29. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 30. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 31. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 32. Added Constraints in R23-11

none

### 33. Changed Constraints in R23-11

none

### 34. Deleted Constraints in R23-11

none

### 35. Traceable item history of this document according to AUTOSAR Release R24-11

### 36. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 37. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 38. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 39. Traceable item history of this document according to AUTOSAR Release R25-11

### 40. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 41. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| Nm Control Bit Vector Containing PN Shutdown Request |  |
| Nm Forwarding PN Shutdown Message Indication |  |
| <Bus>Nm Propagation and Evaluation for Partial Networking Learning |  |
| <Bus>Nm PNC shutdown Propagation and Evaluation |  |
| Nm Interfaces for Repeat Message Request |  |

### 42. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
