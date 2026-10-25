# Requirements on FlexRay (`FlexRay`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 005 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_FlexRay_005\AUTOSAR_CP_RS_FlexRay.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_FlexRay_005\AUTOSAR_CP_RS_FlexRay.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_FlexRay_005\zzgen\CP_RS_FlexRay.complete.txt`

## 文档简介

The goal of this document is to define to what extent elements of the basic software have to be configurable and what preliminaries they have to comply with to meet the tailoring requirements.

As far as possible, the set of basic software elements should consist of already existing elements of modules of automotive software. Only in case of "good reasons" new elements of basic software should be part of the set.

If such the definition of these new elements is not part of this work package. Nevertheless the information about basic software elements additionally required has to be given to related work groups.

Constraints and restrictions

The first scope for specification of requirements on basic software modules is systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

Data transmission accesses to the FlexRay Interface while FlexRay Communication Controllers are out of sync or in shutdown state shall not return an error.

Redundancy (in the time or spatial domain) is not supported by the FlexRay Interface; redundancy has to be explicitly modeled on a higher BSW layer.

There are functional restrictions imposed by the FlexRay

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

The goal of this document is to define to what extent elements of the basic software have to be configurable and what preliminaries they have to comply with to meet the tailoring requirements.

As far as possible, the set of basic software elements should consist of already existing elements of modules of automotive software. Only in case of "good reasons" new elements of basic software should be part of the set.

If such the definition of these new elements is not part of this work package. Nevertheless the information about basic software elements additionally required has to be given to related work groups.

Constraints and restrictions

The first scope for specification of requirements on basic software modules is systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

Data transmission accesses to the FlexRay Interface while FlexRay Communication Controllers are out of sync or in shutdown state shall not return an error.

Redundancy (in the time or spatial domain) is not supported by the FlexRay Interface; redundancy has to be explicitly modeled on a higher BSW layer.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求结构
*原文标题：Requirements structure*

Each module-specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

### 5. 功能性需求：
*原文标题：Functional Requirements:*

* Configuration (Which elements of the module need to be configurable?)
* Initialization
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

### 6. Non-Functional 需求：
*原文标题：Non-Functional Requirements:*

* Timing Requirements
* Resource Usage
* Usability
* Dependencies on other SW modules (e.g. Description Templates, Tooling, ...)
* ...

Not each requirement in this SRS does necessarily map to exactly one API call of the respective AUTOSAR FlexRay SW module. It might be possible that one API call fulfills multiple requirements.

It might also be possible that some requirements address internal features of the AUTOSAR FlexRay SW modules and do not require an API call at all in order to be fulfilled.

Implementations of the AUTOSAR FlexRay SW modules used in safety-critical environments might only be allowed to fulfill a subset of the requirements described herein.

Apart from this safety-critical case, every requirement listed in this document is mandatory, i.e. each implementation of an AUTOSAR FlexRay SW module MUST fulfill all respective requirements in this document so if that SW module is being used with a hardware supporting the full feature set, the full functionality of the AUTOSAR FlexRay SW module is available.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to SRS FlexRay that are not included in the AUTOSAR Glossary .

| Acronym: | Description: |
|---|---|
| SW | Software |
| BSW | Basic Software |
| DEM | Diagnostic Event Manager BSW module |
| ComM | CommunicationManager BSW module |
| CC | (FlexRay) Communication Controller |

| Abbreviation: | Description: |
|---|---|
| i.e. | id est =  that is |
| e.g. | exempli gratia =  for example |

### 8. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the FlexRay.

### 9. 功能概述
*原文标题：Functional Overview*

### 10. Common 需求 (FlexRay 接口 and FlexRay 驱动)
*原文标题：Common Requirements (FlexRay Interface and FlexRay Driver)*

* Support of the FlexRay Protocol 2.1 specification
* Support of the FlexRay Protocol 3.0 specification, for details see chapter 6.1
* Abstraction of FlexRay specific features
* Abstraction of FlexRay Controller type specific features
* Support of at least 4 (possibly different) FlexRay Controllers per ECU with up to 2 Channels each and data rates up to 10 MBit/s
* Connect the communication interface to the specific FlexRay Controller
* Transmit and receive FlexRay Frames in the static and in the dynamic segment
* Support of multiple FlexRay Clusters
* Support of (with respect to the FlexRay global time) asynchronous and synchronous operation of the communication stack
* Packing and unpacking of multiple PDU into/out of one or more FlexRay Frames
* Interface: PDU-based API to upper software layer
* Single/multiple sender Cycle Multiplexing for scalable efficient bandwidth exploitation
* Configuration of the complete FlexRay system at system configuration time
* Run time reconfiguration of FlexRay Controllers
* Provision of basic network management functions: Transmit/detect wake-up patterns; start-up, shutdown, sleep mode, start and stop communication
* Provision of the FlexRay Con

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. FlexRay 接口
*原文标题：FlexRay Interface*

The FlexRay Interface shall provide a standardized interface to access the FlexRay Communication system/hardware. The FlexRay Interface shall be independent of the specific FlexRay CC(s) being used and its/their access through the FlexRay Driver(s). The FlexRay Interface shall give access to one or several FlexRay Drivers via one uniform interface.

### 12. FlexRay 驱动
*原文标题：FlexRay Driver*

The FlexRay Driver module shall offer to the FlexRay Interface Module, the user of the API, a uniform interface to access a number of FlexRay Communication Controllers, usually of the same type. The FlexRay Driver is a software layer which maps abstract functional requests to sequences of CC specific hardware accesses. The hardware implementation of a CC will be hidden from the FlexRay Interface; e. g. the number of transmit/receive buffers will not be visible outside a FlexRay Driver.

### 13. 传输 Layer FlexRay
*原文标题：Transport Layer FlexRay*

The FlexRay Transport Layer supports the protocol handling according ISO 10681-2.

Hence the FlexRay Transport Layer provides support for

* unsegmented unacknowledged 1:1 communication
* segmented unacknowledged 1:1 communication
* unsegmented acknowledged 1:1 communication
* segmented acknowledged 1:1 communication
* unsegmented unacknowledged 1:n communication

### 14. FlexRay Time 服务
*原文标题：FlexRay Time Service*

Provides FlexRay time services, synchronization to FlexRay global time, interrupt services based on FlexRay global time, and synchronization of FlexRay Clusters to external time references

### 15. FlexRay 收发器驱动
*原文标题：FlexRay Transceiver Driver*

The FlexRay Transceiver Driver is responsible to handle the FlexRay transceivers on an ECU according to the expected state of the bus specific NM.

The FlexRay Transceiver is a hardware device, which mainly transforms the logical 1/0 signals of the FlexRay Communication Controller's ports to the bus compliant electrical levels, currents and timings. Within an automotive environment, there is currently only one physical layer specified for FlexRay.

In addition, the transceivers are often able to detect electrical malfunctions like wiring issues, ground offsets or collisions. Depending on the interface, they are capable of flagging the detected errors by a single port pin or very detailed via SPI.

Some transceivers also support power supply control and wake-up via the bus. A lot of different wake-up/sleep and power supply concepts are available on the market with focus on the best cost-optimized solution for a given task.

Latest developments are so called System Basis Chips (SBC) where not only the FlexRay transceivers but also power-supply control and advanced watchdogs are implemented in one housing and are controlled via one interface (e.g. via SPI).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 收发器 Operation Modes
*原文标题：Transceiver Operation Modes*

Important transceiver operation modes are:

* Un-powered: Neither communication nor wake-up is possible
* Normal: Full communication is possible
* Read Only: Transmission is inhibited, reception is possible
* Standby: No communication is possible but ECU is still powered. In addition, a transition to Sleep is only valid from this mode. Wake-up by bus is possible, too.
* Sleep: No communication is possible and ECU may be un-powered. Wake-up by bus is possible, too.

### 17. 收发器错误 Status
*原文标题：Transceiver Error Status*

In parallel to the transceiver operation modes, the transceiver provides status information for the bus. The status is only relevant for operation mode Normal:

* Good: No error, bus physics work correctly without any drawbacks.
* Error: The transceiver has detected a serious error on the bus which does not allow further communication.

### 18. 收发器唤醒 Reason
*原文标题：Transceiver Wake-up Reason*

The transceiver driver is able to store the local view on who has requested the wake-up:

* Remote wake-up event: A remote wake-up event is the reception of at least two consecutive wake-up symbols via the bus.
* Local wake-up event: A pulse on the FlexRay Transceiver device's WAKE pin (if present) has caused the wake-up.
* Power on wake-up: The FlexRay Transceiver device has become sufficiently supplied after being not powered.
* No wake-up: No wake-up has been detected.

### 19. Remarks to the FlexRay 收发器驱动
*原文标题：Remarks to the FlexRay Transceiver Driver*

FlexRay Transceivers are very different in their behavior and supported features. The range starts with very simple FlexRay Transceivers, which are "always on", includes transceivers with support for advanced limp-home-handling and error detection and ends with so called system basis chips (SBC) which internally contain multiple FlexRay Transceivers, watchdog, voltage regulators and more.

The target of this document is to specify interfaces and behavior, which are applicable to most current and future FlexRay Transceivers on the market for nearly all use cases. The target is that the "user" of the transceiver functionality, typically the AUTOSAR CommunicationManager (ComM) and the AUTOSAR ECU State Manager (EcuM), are bus independent and therefore reusable.

It will not be possible to cover all possible combinations of FlexRay Transceivers with all conceivable power concepts within one AUTOSAR implementation.

### 20. Explicitly uncovered FlexRay 收发器 Functionality
*原文标题：Explicitly uncovered FlexRay Transceiver Functionality*

Some FlexRay Transceivers offer additional functionality to improve e.g. ECU self-test or enhanced error detection capability for diagnostics.

ECU self-test and enhanced error detection are not defined within AUTOSAR and requiring such functionality in general will lock out most currently used (and cheap) transceiver devices. Therefore, features like "ground shift detection", "selective wake-up", "slope control" and others are not supported within these requirements. A general and "open" API like IOControl() is not applicable (and accepted) within AUTOSAR due to portability and reuse.

### 21. 系统 Basis Chip and FlexRay 收发器驱动
*原文标题：System Basis Chip and FlexRay Transceiver Driver*

A system basis chip (SBC) contains, beside the FlexRay Transceivers, additional hardware related to power control and safety (e.g. multiple voltage regulators and a watchdog) and even more features (e.g. persistent memory).

In the AUTOSAR concept, a separate manager/driver/handler (in AUTOSAR called: Interface) is responsible for each identified hardware device. Therefore, the additional manager/driver/handler covers the functionality inside a SBC beside the transceiver driver (e.g. Watchdog Manager, non-volatile memory manager, power control driver, etc.). Due to the shared communication access and the (security-related) restrictions within this communication, independent handling of each SBC-sub-functionality will not be possible.

This will lead to the situation that either a SBC could not be used within an AUTOSAR compliant ECU or (the better solution) a specialized manager/driver/handler for the SBC functionality with all APIs of each single domain has to be used.

### 22. 功能性需求
*原文标题：Functional Requirements*

Compatibility overview on supported FlexRay CC features

| Feature | FlexRay 2.1 | FlexRay 3.0 |
|---|---|---|
| NM Vector update | supported | added: early update |
| WUDOP in SymbolWindow | N/A | not supported |
| POC: deferred ready | N/A | not supported |
| POC: deferred halt | N/A | supported |
| FIFO support | supported | supported |
| 2nd absolute timer | N/A | supported |
| Message ID filtering | supported | supported |
| TT-E, TT-M | N/A | supported |
| repetition cycle filtering values | 1,2,4,8,16,32,64 | 1,2,4,5,8,10,16,20,32,40,50,64 |
| Static slot multiplexing | N/A | supported |
| Baud rate | 10 | 2.5, 5, 10 |
| number of valid start-up frames | N/A | supported |

### 23. 通用需求
*原文标题：General requirements*

Synchronous SW Modules shall be supported
⌈
| Description: | The FlexRay-related BSW modules of the AUTOSAR communication stack shall support applications (or software modules) running synchronously to the FlexRay global time. |
|---|---|
| Rationale: | An application (or software module) running synchronously to the FlexRay global time (i.e. it is driven by the FlexRay global time) shall be able to efficiently communicate via FlexRay, since an application (or software module) running synchronously to the FlexRay global time allows an optimal adaptation of the data processing schedule to the schedule of the data transmission via FlexRay. The sychronisation point of a sw module with FR can be set on each Macrotick within the flexraycycle |

Applies To:
| Dependencies: | Support of Asynchronous SW Modules |
|---|---|
| Use Case: | For some applications (e.g. chassis function as regulator) it is advantageous to run the application synchronously to sensors and actuators connected to the FlexRay bus, hence to the FlexRay global time. It shall be possible to start an SW Module at a specific Flexray time within the Flexray cycle |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. FlexRay 接口
*原文标题：FlexRay Interface*

### 25. 通用 Requirement
*原文标题：General Requirement*

The FlexRay Interface shall provide a PDU-based data API to all upper layers.
⌈
| Description: | The FlexRay Interface shall provide a PDU-based data API to all upper layers. |
|---|---|
| Rationale: | A PDU-based data API is needed in order to fulfill  in an optimal way. |

In order to fulfill , the FlexRay Interface needs to abstract the synchronous features of the FlexRay protocol.

In order to fulfill , a FlexRay Slot-based API is not possible. On the other hand, a FlexRay Cell-based API needs a lot of resources (one local memory space per FlexRay Cell) and performance (e.g. for the identification of the most recently received value).

Moreover, in the static segment of the FlexRay Cycle, all FlexRay Cells always have the same length, independent of the Cell contents. To obtain an optimal use of the FlexRay bandwidth, the FlexRay Interface shall allow transferring PDUs with different transmission periods in the same FlexRay Cell.
Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | The following series-relevant example: |

An ECU sends the following PDUs using a 5ms Cycle:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 初始化
*原文标题：Initialization*

The local Memory Space shall be initialized
⌈
| Description: | The FlexRay Interface shall provide a software interface to initialize the local memory space used to store the PDU data and their corresponding properties. |
|---|---|
| Rationale: | The initialization of the local memory space is necessary to store the transferred data from the FlexRay Controller. |

Usually, variables (e.g. pointers) have to be initialized before they are being used during runtime.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 A FlexRay CC shall be initialized and configured
⌈
| Description: | The FlexRay Interface shall provide a software interface to initialize and configure a specific FlexRay CC. Thereby, the transmit/receive buffers and the low level parameters of the FlexRay CC shall be configured. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | , , |
|---|---|
| Use Case: | Initial configuration. |
| Supporting Material: | - |

⌋

 The configuration data shall be modifiable by a Flashing Process
⌈
| Description: | All configuration data of the FlexRay Interface defined at system configuration time shall be modifiable by a flashing process. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Start-up Operation

The FlexRay Interface shall provide a software interface to start-up a specific FlexRay CC
⌈
| Description: | The FlexRay Interface shall provide a software interface to start-up a specific FlexRay CC. |
|---|---|
| Rationale: | Start-up of a specific FlexRay Controller after proper configuration. |

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The FlexRay Interface shall provide a software interface to send a wake-up pattern on a channel or CC
⌈
| Description: | The FlexRay Interface shall provide a software interface to send a wake-up pattern on a specific FlexRay Channel of a specific FlexRay CC. |
|---|---|

The FlexRay Specification allows only a wake-up on one Channel at a time. However, the FlexRay Interface shall support the sending of a wake-up pattern on any one of the two FlexRay Channels.

The FlexRay Interface shall observe the restrictions set forth in the FlexRay Protocol Specification concerning reception of a wake-up pattern or a Frame header during own wake-up pattern sending attempts.
| Rationale: | Enable waking up a FlexRay Cluster. |
|---|---|

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: |  |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. FlexRay Specific Information

This section includes all the FlexRay-specific requirements.

 FlexRay CC POC Status shall be available
⌈
| Description: | The FlexRay Interface shall provide a software interface to get the CC POC status of a specific FlexRay CC. All information contained in the vPOC structure as defined in chapter "2.2.1.3 POC status" of the  shall be returned. |
|---|---|
| Rationale: | Software modules like Mode Manager, Network Management, or DCM might be interested in the FlexRay CC POC status. |

Applies To:
| Dependencies: | Get FlexRay CC POC Status |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The Operation Mode of a FlexRay Transceiver shall be set
⌈
| Description: | The FlexRay Interface shall provide a software interface to set the operation mode of a specific FlexRay Transceiver device. |
|---|---|

According to , at least these operation modes shall be supported:

* `BD_Normal`
* `BD_Standby`
* `BD_Receive_only`
* `BD_Sleep`
| Rationale: | Provide ComM with a possibility to set the operation mode of a specific FlexRay Transceiver device. |
|---|---|

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | - |
| Supporting Material: |  |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Normal Operation

PDUs received via the FlexRay communication system shall be retrieved
⌈
| Description: | The FlexRay Interface shall retrieve PDUs received via the FlexRay communication system and indicate the reception to the appropriate higher-layer BSW module, allowing this module to retrieve the PDU data. |
|---|---|

Depending on static/dynamic configuration of the FlexRay Interface, it might be possible that one FlexRay Frame contains more than one PDU. In this case, the FlexRay Interface shall disassemble the FlexRay Frame and indicate the reception of each PDU to the appropriate higher BSW module.

If the use of PDU-based update/valid information has been configured for a FlexRay Frame, the reception indication shall consider this information.
| Rationale: | As explained in the valid requirement, the FlexRay Interface API shall be PDU-based. The access via the PDU is the only possibility to access the FlexRay data. |
|---|---|

Applies To:
| Dependencies: | , , |
|---|---|
| Use Case: | An application needs to receive information from the FlexRay network. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 关机 Operation
*原文标题：Shutdown Operation*

A FlexRay CC Communication shall be aborted when wanted
⌈
| Description: | The FlexRay Interface shall provide a software interface to immediately abort the communication of a specific FlexRay CC by setting this FlexRay CC into the "HALT" state. Thus, the FlexRay CC will stop participating in the communication and lose synchronicity with the FlexRay global time. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | Abortion of FlexRay CC Communication |
|---|---|
| Use Case: | Error confinement |
| Supporting Material: | - |

⌋

 A FlexRay CC Communication shall be halted when wanted
⌈
| Description: | The FlexRay Interface shall provide a software interface to halt the communication of a specific FlexRay CC at the end of the current Communication Cycle by setting this FlexRay CC into the "HALT" state at the end of the current Communication Cycle. Thus, the FlexRay CC will stop participating in the communication and lose synchronicity with the FlexRay global time. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | Error confinement |
| Supporting Material: |  |

⌋

### 31. Fault Operation

The Error Informations shall be provided
⌈
| Description: | The FlexRay Interface shall provide the DEM with error-related information using the aggregated channel status that is only known to the FlexRay Interface. |
|---|---|
| Rationale: | Some error-related information is only known to the FlexRay Interface. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The following error-related information shall be derived using the using the aggregated channel status: |

* SyntaxError: Flag that reports a syntax error within a slot.
* ContentError: Flag that reports a content error within a slot.
* TxConflict: Flag that reports a transmission conflict within a slot.
* Bviolation: Flag that reports a boundary violation within a slot.
| Supporting Material: | - |
|---|---|

⌋

 The Error Information in Transmitted Frame shall be available
⌈
| Description: | The FlexRay Interface shall call API of  periodically that detects error information in transmitted frames. |
|---|---|

Pre-compile configuration parameter shall determine whether this functionality is activated.
| Rationale: | The FlexRay modules should provide information that only the modules can detect. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. FlexRay 驱动
*原文标题：FlexRay Driver*

### 33. Valid 需求
*原文标题：Valid Requirements*

Abstraction of FlexRay CC-specific Implementation shall be provided
⌈
| Description: | The FlexRay Driver shall provide an abstraction from the FlexRay CC-specific implementation as well as a generic FlexRay Driver API to the upper software layer (FlexRay Interface). |
|---|---|
| Rationale: | All FlexRay Drivers should provide the same API semantics/signature. |

Upper layers should not depend on the concrete implementation of specific features (e.g. optional features) of the CC. They need to be hardware-independent.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Several (different) FlexRay CCs (e.g. from different manufacturers) handled by one FlexRay Interface. |
| Supporting Material: | - |

⌋

 The FlexRay Driver shall be able to communicate with at least four FlexRay CCs of the same type
⌈
| Description: | The FlexRay Driver shall be able to communicate with at least four FlexRay CCs of the same type. The actual number of CCs operated by one FlexRay Driver shall be defined at system configuration time and shall be less or equal to the number of CCs this FlexRay Driver supports. |
|---|---|
| Rationale: | Future network topologies might demand more than one FlexRay CC on one ECU. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 配置
*原文标题：Configuration*

The configuration of the FlexRay Driver shall be defined at system configuration time.
⌈
| Description: | The configuration of the FlexRay Driver shall be defined at system configuration time, i.e. before the execution of the FlexRay Driver code. |
|---|---|
| Rationale: | The purpose of the FlexRay Driver is to carry out data processing that has been configured at system configuration time, i.e. before the execution of the FlexRay Driver code. It shall not decide or calculate during runtime any communication parameters like the assignment of Slots to ECU or the packaging of PDUs into FlexRay Frames. |

Applies To:
| Dependencies: | Configuration Modifiable by a Flashing Process |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The Driver shall be configure the CC's transmit/receive buffers
⌈
| Description: | The FlexRay Driver shall configure the FlexRay CC's transmit/receive buffers according to the configuration of the FlexRay Driver defined at system configuration time. |
|---|---|
| Rationale: | The FlexRay CC's transmit/receive buffers need to be configured before the FlexRay CC can be used for communication. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 初始化
*原文标题：Initialization*

Initialization of FlexRay CC shall be available
⌈
| Description: | The FlexRay Driver shall provide a software interface to initialize and configure a specific FlexRay CC. Thereby, the transmit/receive buffers and the low level parameters of the FlexRay CC shall be configured. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | , , |
|---|---|
| Use Case: | Initial configuration. |
| Supporting Material: | - |

⌋

 Initialization of the Low-Level Parameters shall be available
⌈
| Description: | The FlexRay Driver shall provide a software interface to initialize the FlexRay low-level parameters. The low-level parameters cover all the configurable parameters defined in the  and also the FlexRay CC-specific parameters or CC-specific services (e.g. concerning interrupts). |
|---|---|
| Rationale: | The initialization of the low-level parameters is necessary to communicate on the bus with a FlexRay Controller. The set of CC parameters is FlexRay CC-specific. |

Applies To:
| Dependencies: | Initialization of FlexRay CC |
|---|---|
| Use Case: | Initialization of the FlexRay communication system. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Start-up Operation

The FlexRay Driver shall provide a software interface to start-up a specific FlexRay CC
⌈
| Description: | The FlexRay Driver shall provide a software interface to start-up a specific FlexRay CC. |
|---|---|
| Rationale: | Start-up of a specific FlexRay Controller after proper configuration. |

Applies To:
| Dependencies: | , , |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 A Wake-Up Pattern shall be sent on a specific channel of a CC
⌈
| Description: | The FlexRay Driver shall provide a software interface to send a wake-up pattern on a specific FlexRay Channel of a specific FlexRay CC. |
|---|---|

The FlexRay Specification allows only a wake-up on one Channel at a time. However, the FlexRay Driver shall support the sending of a wake-up pattern on any one of the two FlexRay Channels.

The FlexRay Driver shall observe the restrictions set forth in the FlexRay Protocol Specification concerning reception of a wake-up pattern or a Frame header during own wake-up pattern sending attempts.
| Rationale: | Enable waking up a FlexRay Cluster. |
|---|---|

Applies To:
| Dependencies: | Sending of a Wake-Up Pattern |
|---|---|
| Use Case: | - |
| Supporting Material: |  |

⌋

### 其余 47 章（内容从略，见纯文本全文）

37. FlexRay Specific Information
38. Normal Operation
39. 关机 Operation
40. Fault Operation
41. 传输 Layer FlexRay
42. 配置
43. 初始化
44. Normal Operation
45. Fault Operation
46. FlexRay Time 服务
47. Valid 需求
48. 配置
49. Normal Operation
50. Fault Operation
51. FlexRay 收发器驱动
52. 配置
53. 初始化
54. Normal Operation
55. 关机 Operation
56. Fault Operation
57. Non-Functional 需求 (Qualities)
58. FlexRay 接口
59. 抽象需求
60. Resource Usage
61. 配置
62. 传输 Layer FlexRay
63. FlexRay 收发器驱动
64. 时序需求
65. References
66. 附录
67. Change history of AUTOSAR traceable items
68. Traceable item history of this document according to AUTOSAR Release R22-11
69. Added Traceables in R22-11
70. Changed Traceables in R22-11
71. Deleted Traceables in R22-11
72. Traceable item history of this document according to AUTOSAR Release R23-11
73. Added 需求 in R23-11
74. Changed 需求 in R23-11
75. Deleted 需求 in R23-11
76. Traceable item history of this document according to AUTOSAR Release R24-11
77. Added 需求 in R24-11
78. Changed 需求 in R24-11
79. Deleted 需求 in R24-11
80. Traceable item history of this document according to AUTOSAR Release R25-11
81. Added 需求 in R25-11
82. Changed 需求 in R25-11
83. Deleted 需求 in R25-11
