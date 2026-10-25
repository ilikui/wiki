# Requirements on Time Synchronization (`TimeSync`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 906 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_TimeSync_906\AUTOSAR_FO_RS_TimeSync.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_TimeSync_906\AUTOSAR_FO_RS_TimeSync.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_TimeSync_906\zzgen\FO_RS_TimeSync.complete.txt`

## 文档简介

The purpose of this document is to define the functional and non-functional requirements of the Time Synchronization Protocol.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

The purpose of this document is to define the functional and non-functional requirements of the Time Synchronization Protocol.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

In scope of this document the IDs in the range of `RS_TS_00xxx` are used for common requirements (refer to section ) and the IDs in the range of `RS_TS_20xxx` are used for bus specific requirements (refer to sections , , ).

### 3. Acronyms, Abbreviations and 定义
*原文标题：Acronyms, Abbreviations and Definitions*

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Time Synchronization that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| CRC | Cyclic Redundancy Checksum |
| FV | Freshness Value |
| FVM | Freshness Value Manager |
| Pdelay | Propagation / path delay as given in IEEE 802.1AS |
| Pdelay_Req | Propagation / path delay request message |
| Pdelay_Resp | Propagation / path delay response message |
| Pdelay_Resp_Follow_Up | Propagation / path delay Follow-Up message |
| Timesync | Time Synchronization |
| Sync | Time synchronization message (Sync) |
| TS | Time Syncronisation |
| TSP | Time Synchronization Provider |

### 5. 定义
*原文标题：Definitions*

### 6. Clock

Definition: A Clock refers to the unit conformed by the combination of a Time Base (either synchronized against an external source or not) and a hardware capable of changing cyclically the electric state of its output (e.g. toggling between two different voltage levels). The frequency of such electric state changes can be adjustable. This hardware could be e.g. part of a microcontroller, or an external electronic component. Likewise the Synchronized Time Base information can be acquired from an external source like a RTC, GPS, Ethernet, etc.

Therefore when talking about a Clock we may refer to either its quality (e.g. rate, accuracy, etc.) or to the Time Base it holds (e.g. time information relative to the Global Position, daylight, etc.) depending on the context that holds the term.

### 7. Global Time Master

Definition: A Global Time Master is the global owner and origin for a certain Time Base and on the top of the Time Base hierarchy for that Time Base.

### 8. Time Base

Definition: A Time Base is a unique time entity characterized by:

* Progression of time, which denotes how time progresses, i.e. the rate (which in turn is derived from a local quartz oscillator) and absolute changes of the time value at certain point in times (e.g. effects of offset correction in NTP).
* Ownership, which denotes who is the owner of the Time Base. A distributed NTP Time Base e.g. has multiple owners and the progression of time with respect to rate and offset corrections is a result of involving a subset of NTP nodes.
* Reference to the physical world, i.e. whether the Time Base is a relative Time Base counting local operation time of an ECU HW or representing an absolute time like UTC. A Time Base can have more than one reference, e.g. it can be a relative time which, in combination with an offset value, also represents an absolute time.

Examples of Time Bases in vehicles are:

* Absolute, which is based on a GNSS time.
* Relative, which represents the accumulated overall operating time of a vehicle, i.e. this Time Base does not start with a value of zero whenever the vehicle starts operating.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Synchronized Time Base

Definition: A Synchronized Time Base is a Time Base existing at a processing entity (actor / processor / node of a distributed system) that is synchronized with Time Bases at different processing entities. A Synchronized Time Base can be achieved by time protocols or time agreement protocols that derive the Synchronized Time Base in a defined way from one or more physical Time Bases (e.g. Network Time Protocol (NTP) or Flexray time agreement protocol). The synchronization will apply to the clock rate and optionally also to the Time Base absolute value.

The synchronization will apply to the clock absolute value and optionally apply also to the clock rate. A Synchronized Time Base allows synchronized action of the processing units. Synchronized Time Bases are often called "Global Time".

More than one Synchronized Time Base can exist at one processing unit, e.g. a NTP node will have the Synchronized Time Base retrieved from NTP in the network cluster but might also have a Synchronized Time Base derived from the time provided by a UTC time server (which is based on a set of atomic clocks).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Offset Time Base

Definition: An Offset Time Base is a Time Base existing at a processing entity (actor / processor / node of a distributed system). An Offset Time Base depends on one particular Synchronized Time Base, therefore it is synchronized with the same Time Base Source as its underlying TBR.

An Offset Time Base holds an offset value relative to the Time Base of its underlying Synchronized TBR. Therefore, it provides to the Application a time base with a value of its underlying Synchronized TBR plus the Offset value it holds. Since an Offset Time Base receives its time value from the same TSP as its underlying Synchronized TBR, it will present the same rate deviation and correction properties.

Note: Offset Time Bases are no longer supported by AUTOSAR.

### 11. Time Base Provider

Definition: A Time Base Provider is the role that a TSP module takes for a given Time Base. Therefore a TSP module can contain one or more Time Base providers. Time Base providers are either of type importer or exporter, whereas an importer acts as Time Slave and an exporter acts as Time Master. A Time Gateway consists of one Time Base importer and one or more Time Base exporters for a given Time Base. In order to limit the terminology, importers are denoted as slaves and exporters are denoted as masters.

### 12. Time Communication Port

Definition: A Time Communication Port is a physical communication interface (in Classic Platform coverable by the item: Physical Connector) at an ECU HW which is used to transport time information.

### 13. Time Domain

Definition: A Time Domain denotes which components (e.g. nodes, communication systems) are linked to a certain Time Base. A Time Domain can contain zero or more Time Sub-Domains. If the timing hierarchy of a Time Domain contains no Time Gateways, i.e. all nodes are connected to the same bus system, then there is no dedicated Time Sub-Domain which otherwise would be equal to the Time Domain itself.

### 14. Time Gateway

Definition: A Time Gateway is a set of entities where one entity is acting as Time Slave for a certain Time Base. The other (one or more) entities are acting as Time Masters which are distributing this Time Base to sets of Time Slaves. A Timesync ECU can contain multiple Time Gateways. A Time Gateway can be connected to different types of bus systems (e.g. the slave side could be connected to CAN whereas the master side could be connected to Ethernet).

### 15. Time Hierarchy

Definition: The Time Hierarchy describes how a certain Time Base is distributed, starting at the Global Time Master and being distributed across various Time Gateways (if present) to various Time Slaves.

### 16. Time Master

Definition: A Time Master is an entity which is the master for a certain Time Base and which propagates this Time Base to a set of Time Slaves within a certain segment of a communication network, being a source for this Time Base.

If a Time Master is also the owner of the Time Base then he is the Global Time Master. A Time Gateway typically consists of one Time Slave and one or more Time Masters. When mapping time entities to real ECUs it has to be noted, that an ECU HW could be Time Master (or even Global Time Master) for one Time Base and Time Slave for another Time Base.

Special case "Pure Local Time Master":

A Pure Local Time Master is an entity which is the master of a Pure Local Time Base and which therefore does not propagate this Time Base to any Time Slave.

### 17. Time Slave

Definition: A Time Slave is an entity, which is the recipient for a certain Time Base within a certain segment of a communication network, being a consumer for this Time Base.

### 18. Time Sub-domain

Definition: A Time Sub-Domain denotes which components (e.g. nodes) are linked to a certain Time Base, whereas the scope is limited to one communication bus.

### 19. Timesync ECU

Definition: A Timesync ECU is an ECU HW which is part of a Time Domain by containing one or more Time Slaves or Time Masters.

### 20. TSP 模块 / Timesync 模块
*原文标题：TSP Module / Timesync Module*

Definition: TSP Modules (Timesync over <BUS> modules) are bus specific modules to receive or transmit time information on bus systems by applying bus specific mechanisms. A TSP module can serve multiple communication buses of the same type.

### 21. Virtual Local Time

Definition: The Virtual Local Time is a time which is driven by the OS counter or a hardware clock and which in turn drives a Synchronized Time Base. The associated Synchronized Time Base has an offset to the Virtual Local Time. For Time Slaves there is usually also a deviation in rate caused by different clock drifts of the HW reference clocks used by Time Master and Time Slave.

The term Virtual Local Time describes a Time Base whose time progresses monotonously without jumps.

Virtual Local Time Bases are necessary for interpolating:

* local instances of Synchronized Time Bases (in either Master or Slave)
* Pure Local Time Bases

In addition, Virtual Local Time Bases can be used to measure timespans, i.e., for rate correction measurement intervals or timeouts.

Virtual Local Time Bases are based on a hardware clock and can be derived from various sources:

* OS counter
* GPT counter
* Ethernet freerunning counter (used for ingress and egress timestamping)

It is possible to use different Virtual Local Time Bases in parallel.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Time Correction

Definition:Time Correction in Time Slaves is the process of adjusting the value of the local instance of the Time Base to the value of the Global Time Base. In Time Masters, Time Correction is the process of eliminating the deviation of an Offset Clock compared to its corresponding Synchronized Time Base. Time Correction can be divided into Rate Correction, which corrects rate deviations and Offset Correction, which corrects absolute time deviations. Offset Correction can be furthermore divided into (Offset Correction By) Jump Correction or (Offset Correction By) Rate Adaption.

Note:

* Rate Deviation: This means that the time progresses at different rates in the local instance of the Time Base and the Global Time Base. Such deviations can occur if, for example, the local hardware reference clock is driven by a crystal whose frequency is off due to manufacturing tolerances and/or thermal effects.
* Time Offset: This means that the local instance of the Time Base and the Global Time Base are not synchronized precisely.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Rate Correction

Definition: Rate Correction corrects the rate-deviation of a local hardware reference clock towards the rate of the Global Time Master's clock. This correction is done by a multiplicative correction factor which is used in addition to the clock's preconfigured rate. Rate Correction determines the correction factor in the scope of a measurement. This correction factor is however not fixed but updated after each successful measurement.

The working principle of Rate Correction is not to adjust the local hardware reference clock in order to let it progress with the correct rate. Instead Rate Correction only corrects the values of the local instance of the Time Base on-the-fly when they are read.

### 24. Offset Correction

Definition:Offset Correction corrects absolute time deviations (offsets). Depending on the magnitude of the offset and the configuration of StbM, this correction is either performed by Jump Correction or Rate Adaption. Offset Correction is independent from Rate Correction. It is performed each time the local instance of the Time Base is synchronized to its Global Time Base.

### 25. Jump Correction

Definition:Jump Correction corrects absolute time offsets in a single step by adding the offset to the local instance of the Time Base (which is equivalent to taking over the value of the Global Time Base).

### 26. Rate Adaption

Definition:Rate Adaption corrects time offsets gradually within a predefined timespan. Hereto, Rate Adaption switches the rate of the local instance of the Time Base temporarily to a different value. This rate is chosen to completely eliminate the offset within the preconfigured timespan.

Like Rate Correction, Rate Adaption does not adjust the local instance of the Time Base (including hardware reference clock). It merely corrects the clock values on-the-fly when they are read.

Note: Rate Adaption and Rate Correction use a similar mechanism. They are however completely independent from each other, i.e. Rate Adaptation may be performed upon Rate Correction without causing interference.

### 27. Use Cases

This chapter describes the use cases which can be realized by an environment of an ECU HW which implements the Time Synchronization Protocol.

| ID | Name | Description |
|---|---|---|
| 0001 | Pdelay measurement | Measuring of delays between Ethernet messages |
| 0002 | Time Synchronization | Time synchronization of different time bases. |

### 28. 需求规范
*原文标题：Requirements Specification*

### 29. 功能概述
*原文标题：Functional Overview*

The Time Synchronization Implementation provides means like network time protocols or time agreement protocols to synchronize its local Time Bases to Time Bases on other nodes.

Modules and applications can consume the time information provided and managed by the Time Synchronization Implemention by reading the time information. Modules and applications, when required to provide time information, can update the Time Base maintained by the Time Synchronization Implementation.

This specification contains time synchronization requirements for classic and adaptive platform. The classic platform splits the implementation of Time Synchronization into 3 bus protocol specific Time Synchronization Provider (TSP) modules (SWS Time Synchronization over Ethernet, over CAN and over FlexRay) and one module, which manages the Time Bases (SWS Synchronized Time-Base Manager). The adaptive platform defines only one module for Time Synchronization (SWS TimeSync), which also includes the Time Synchronization Provider (TSP) part.

### 30. 功能性需求
*原文标题：Functional Requirements*

### 31. Common 需求
*原文标题：Common Requirements*

The Implementation of Time Synchronization shall maintain its own Time Base independently of the acting role.
⌈
| Description: | The Implementation of Time Synchronization shall always maintain the Time Base, by using different HW clock references (i.e. OS counter, GPT, Ethernet HW clock, etc.). The configuration depends on the capabilities of the HW and whether specific Role of the Implementation of Time Synchronization is enabled / disabled. |
|---|---|
| Rationale: | Time Base is managed by only one instance within the Global Time cluster. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | - |
| Supporting Material: | - |

⌋

 The TS shall initialize the Local Time Base with a configurable startup value
⌈
| Description: | The TS shall initialize the Local Time Base with a configurable startup value |
|---|---|
| Rationale: | Start up with a known default value. |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: | - |
| Supporting Material: | - |

⌋

 The Implementation of Time Synchronization shall initialize the Global Time Base with a configurable startup value.
⌈
| Description: | The Implementation of Time Synchronization shall allow configuration of the initialization value of the Global Time Base. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Time 同步 over Ethernet
*原文标题：Time Synchronization over Ethernet*

The Timesync over Ethernet module shall trigger Time Base Synchronization transmission
⌈
| Description: | If configured as Time Master for a time base the Timesync over Ethernet module shall support two ways to trigger the transmission of the Time Synchronization protocol sequence: |
|---|---|

* Cyclic triggering
* Immediate triggering on demand
| Rationale: | Time Synchronization protocol. |
|---|---|
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: |  |
| Supporting Material: | - |

⌋

 The Timesync over Ethernet module shall support IEEE 802.1AS as well as AUTOSAR extensions
⌈
| Description: | The Timesync over Ethernet module shall support IEEE 802.1AS , chapter 11 in terms of Sync, Follow_Up (time synchronization) and Pdelay_Req, Pdelay_Resp, Pdelay_Resp_Follow_Up (delay measurement) as well as AUTOSAR extensions belonging to the Addressing scheme and message format. |
|---|---|
| Rationale: | Time Synchronization protocol. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: |  |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Time 同步 over CAN
*原文标题：Time Synchronization over CAN*

The Timesync over CAN module shall trigger Time Base Synchronization transmission
⌈
| Description: | If configured as Time Master for a Time Base the Timesync over CAN module shall support two ways to trigger the transmission of the Time Synchronization protocol sequence: |
|---|---|

* Cyclic triggering
* Immediate triggering on demand
| Rationale: | Time Synchronization protocol. |
|---|---|
| Applies To: | CP |
| Dependencies: | - |
| Use Case: |  |
| Supporting Material: | - |

⌋

 The Timesync over CAN module shall provide the Time Base after reception of a valid Timesync/TS messages
⌈
| Description: | If configured as Time Slave, the Timesync over CAN module shall provide the Time Base after reception of valid Timesync/TS mesages. This Time Base is forwarded to the Implementation of Time Synchronization to update the Local Time Base. |
|---|---|
| Rationale: | Synchronization of Local Time Base to Global Time Base |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: |  |
| Supporting Material: | - |

⌋

 The Timesync over CAN module shall support means to protect the Time synchronization protocol
⌈
| Description: | The Timesync over CAN module shall support means (e.g. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Time 同步 over FlexRay
*原文标题：Time Synchronization over FlexRay*

The Timesync over FlexRay module shall trigger Time Base Synchronization transmission
⌈
| Description: | If configured as Time Master for a Time Base the Timesync over FlexRay module shall support two ways to trigger the transmission of the Time Synchronization protocol sequence: |
|---|---|

* Cyclic triggering
* Immediate triggering on demand
| Rationale: | Time Synchronization protocol. |
|---|---|
| Applies To: | CP |
| Dependencies: | - |
| Use Case: |  |
| Supporting Material: | - |

⌋

 The Timesync over FlexRay module shall provide a Time Base after reception of a valid protocol information
⌈
| Description: | If configured as Time Slave, the Timesync over FlexRay module shall provide a Time Base after reception of a valid protocol information (SYNC message). This Time Base is forwarded to the Implementation of Time Synchronization to update the Local Time Base. |
|---|---|
| Rationale: | Synchronization of Local Time Base to Global Time Base |
| Applies To: | CP |
| Dependencies: | - |
| Use Case: |  |
| Supporting Material: | - |

⌋

 The Timesync over FlexRay module shall support means to protect the Time Synchronization protocol
⌈
| Description: | The Timesync over FlexRay module shall support means (e.g. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

The TS shall provide a bus independent customer interface
⌈
| Description: | The TS shall provide a bus independent customer interface and time format. The resolution of the received Time Base might vary depending on the origin bus. In such cases, the TS adjusts the time value property. |
|---|---|

If the ECU HW is configured as Time Master, reading the Time Base value is furthermore possible.
| Rationale: | Hide bus / physical layer specific details to decouple applicaiton / customers from the lower layers. |
|---|---|
| Applies To: | CP, AP |
| Dependencies: | The TSP modules will do the conversion to a bus independent time format. |
| Use Case: |  |
| Supporting Material: | - |

⌋

### 36. References

### 37. 附录
*原文标题：Appendix*

### 38. Change History

Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 39. Change History of this document according to AUTOSAR Release R24-11

### 40. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 41. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| The Implementation of Time Synchronization shall allow customers to read User Data propagated via the TSP modules. |  |
| The Implementation of Time Synchronization shall allow customers to set User Data propagated via the TSP modules. |  |
| The configuration of the Time Synchronization implementation shall allow the interaction with different types of customers |  |
| The implementation of Time Synchronization shall provide Freshness Value (FV) to TSP modules required to secure the time information |  |
| The Timesync over CAN module shall support classic CAN and CAN FD |  |
| The Timesync over Ethernet module shall support means to secure the Time Synchronization protocol |  |
| The Timesync over CAN module shall support means to secure the Time Synchronization protocol |  |
| The Timesync over FlexRay module shall support means to secure the Time Synchronization protocol |  |

### 42. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

| Number | Heading |
|---|---|
| The Implementation of Time Synchronization shall allow customers and TSP modules to read the offset value of an Offset Time Base |  |
| The Implementation of Time Synchronization shall allow the customers and TSP modules to set the offset value of an Offset Master Time Base |  |
| The Timesync over CAN module shall use the time measurement and synchronization protocol to transmit and receive an offset value |  |
| The Timesync over FlexRay module shall use the time measurement and synchronization protocol to transmit and receive an offset value |  |
| The Timesync over Ethernet module shall use the Time Synchronization protocol for Synchronized Time Bases to transmit and receive Offset Time Bases |  |

### 43. Change History of this document according to AUTOSAR Release R25-11

### 44. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 45. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| The Implementation of Time Synchronization shall maintain its own Time Base independently of the acting role. |  |
| The TS shall initialize the Local Time Base with a configurable startup value |  |
| The Implementation of Time Synchronization shall initialize the Global Time Base with a configurable startup value. |  |
| The Implementation of Time Synchronization shall allow customers to have access to the Synchronized Time Base |  |
| The Implementation of Time Synchronization shall provide time information to TSP modules |  |
| The Implementation of Time Synchronization shall synchronize the Time Base of a Time Slave, on reception of a Time Master value |  |
| The Implementation of Time Synchronization shall continuously maintain its Time Bases based on a Time Base reference clock |  |
| The Implementation of Time Synchronization shall maintain the synchronization status of a Time Base |  |
| The Implementation of Time Synchronization shall allow customer on master side to set the Global Time |  |
| The Implementation of Time Synchronization shall allow customers on master side to trigger time transmission by the TSP module |  |
| The Implementation of Time Synchronization shall allow customers to |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 47. Change History of this document according to AUTOSAR Release R26-11

### 48. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

none

### 49. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

none

### 50. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

none
