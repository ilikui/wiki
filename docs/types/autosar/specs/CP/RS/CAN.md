# Requirements on CAN (`CAN`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 001 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_CAN_001\AUTOSAR_CP_RS_CAN.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_CAN_001\AUTOSAR_CP_RS_CAN.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_CAN_001\zzgen\CP_RS_CAN.complete.txt`

## 文档简介

This document specifies the requirements for the following Basic Software Modules (module names in brackets):

* CAN Driver (Can)
* CAN Interface (CanIf)
* CAN State Manager (CanSM)
* CAN Transport Layer (CanTp)
* CAN Bus Transceiver Driver (CanTrcv)

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies the requirements for the following Basic Software Modules (module names in brackets):

* CAN Driver (Can)
* CAN Interface (CanIf)
* CAN State Manager (CanSM)
* CAN Transport Layer (CanTp)
* CAN Bus Transceiver Driver (CanTrcv)

### 2. How to read this document

Each requirement has its unique identifier starting with the prefix "BSW" (for "Basic Software"). For any review annotations, remarks or questions, please refer to this unique ID rather than chapter or page numbers!

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求结构
*原文标题：Requirements Structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

Functional Requirements:

* Configuration (which elements of the module need to be configurable)
* Initialization
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

Non-Functional Requirements:

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling,...)
* ...

### 5. 缩略语
*原文标题：Acronyms and Abbreviations*

| Acronym: | Description: |
|---|---|
| CAN Communication Matrix | Describes the complete CAN network: |

* Participating nodes
* Definition of all CAN PDUs (Identifier, DLC)
* Source and Sinks for PDUs

Format is defined in other AUTOSAR workpackage
| Physical Channel | A physical channel represents an interface to the CAN Network. Different physical channels of the CAN Hardware Unit may access different networks. |
|---|---|
| L-PDU | CAN (Data Link Layer) Protocol Data Unit. Consists of Identifier, DLC and Data (L-SDU). |
| L-SDU | CAN (Data Link Layer) Service Data Unit. Data that is transported inside the L-PDU. |
| Hardware Object | A Hardware Object is defined as message buffer inside the CAN RAM of the CAN Hardware Unit. Also often called Message Object |
| Hardware Object Handle | The hardware object handle (HOH) is defined and provided by the CAN Driver. |

Typically each HOH represents a hardware object.

The HOH is used as parameter by the CAN Interface Layer for transmit and read requests to the CAN Driver.
| L-PDU Handle | The L-PDU handle is defined and placed inside the CAN Interface Layer. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 功能概述
*原文标题：Functional Overview*

The CAN bus transceiver driver is responsible to handle the CAN transceivers on an ECU according to the expected state of the bus specific NM in relation to the current state of the whole ECU.

The transceiver is a hardware device, which mainly transforms the logical on/off signal values of the \muC ports to the bus compliant electrical levels, currents and timings. Within an automotive environment there are mainly three different CAN physics used. These physics are ISO11898 for high-speed CAN (up to 1Mbd), ISO11519 for low-speed CAN (up to 125kBd). Both are regarded in AUTOSAR, whereas SAE J2411 for single-wire CAN is not. CAN FD utilizes the same CAN physic as it is used for high-speed CAN but provide faster transmission rates.

In addition, the transceivers are often able to detect electrical malfunctions like wiring issues, ground offsets or transmission of too long dominant signals. Depending on the interface they flag the detected error summarized by a single port pin or very detailed via SPI.

Some transceivers also support power supply control and wakeup via the bus.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 需求规范
*原文标题：Requirements Specification*

### 8. Remarks to the CAN Bus 收发器驱动
*原文标题：Remarks to the CAN Bus Transceiver Driver*

CAN bus transceivers are very different in their behavior and supported features. The range starts with very simple CAN transceivers, which are "always on", includes transceivers with support for advanced limp home handling and error detection and ends with so called system basis chips (SBC) which contain internally multiple CAN bus transceivers, watchdog, voltage regulators and more. The size of transceiver data sheets is from few pages to more than 80 pages and the additional application notes for the devices are nearly countless.

The target of this document is to specify interfaces and behavior, which is applicable to most current and future CAN bus transceivers on the market for nearly all use cases. If it could be reached that at least the "user" of the bus transceiver functionality, typically the AUTOSAR NM and the AUTOSAR Communication Manager, are bus independent and therefore reusable, will be great.

It will not be possible to cover all possible combinations of bus transceivers with all conceivable power concepts within one AUTOSAR implementation.

### 9. Explicitly uncovered CAN Bus 收发器 functionality
*原文标题：Explicitly uncovered CAN Bus Transceiver functionality*

Some CAN bus transceivers offer additional functionality to improve e.g. ECU self test or enhanced error detection capability for diagnostics.

ECU self test and enhanced error detection are not defined within AUTOSAR and requiring such functionality in general will lock out most currently used (and cheap) transceiver devices. Therefore features like "ground shift detection", "selective wakeup", "slope control" and others are not supported within this requirement. A general and "open" API like IOControl() is not applicable (and accepted) within AUTOSAR due to portability and reuse.

### 10. 系统 Basis Chip and CAN Bus 收发器驱动
*原文标题：System Basis Chip and CAN Bus Transceiver Driver*

A system basis chip (SBC) contains beside the CAN bus transceivers additional hardware related to power control and safety (e.g. multiple voltage regulators and a watchdog) and even more features (e.g. persistent memory).

In the AUTOSAR concept, a separate manager/driver/handler (in AUTOSAR called: Interface) is responsible for each identified hardware device. Therefore additional manager/driver/handler covers the functionality inside a SBC beside the bus transceiver driver (e.g. Watchdog Manager, non-volatile memory manager, power control driver, ...). Due to the shared communication access and the (security-related) restrictions within this communication, independent handling of each SBC-sub-functionality will not be possible. This will lead to the situation that either a SBC could not be used within an AUTOSAR compliant ECU or (the better solution) a specialized manager/driver/handler for the SBC functionality with all APIs of each single domain has to be used.

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. CAN 驱动
*原文标题：CAN Driver*

The CAN Driver offers uniform interfaces for the above user of this layer, the CAN Interface. The CAN Driver hides the hardware specific properties of the related CAN Controller as far as possible and reasonable.

For a detailed functional description and interface definition see CAN Driver Specification ].

### 13. 配置
*原文标题：Configuration*

The Can Driver shall support Standard Identifier and Extended Identifier
⌈
| Description: | The CAN driver shall be able to operate with both standard and extended CAN Identifiers on one CAN Controller if supported by CAN Hardware. Each hardware object shall be statically and individually configurable for one of the both identifier types if supported by CAN Hardware. All L-PDUs sent and received over that CAN controller shall be conform this configuration. The CAN Driver shall support reception and transmission of L-PDUs with Standard and Extended ID, including both at the same time on one Hardware Object. The configuration parameters shall be allowed to be of types Pre-Compile-Time, Link-Time or Post-Build-Time |
|---|---|
| Rationale: | CAN Standard Coverage |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | CAN Standard allows Standard and Extended Identifier. Different projects might require the usage of Extended CAN IDs in addition to Standard CAN IDs due to the lack of remaining StandardCAN IDs. |
| Supporting Material: | - |

⌋

 The CAN driver shall allow the static configuration of the hardware reception filter
⌈
| Description: | HW supported filtering of receive L-PDUs shall be configurable. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 初始化
*原文标题：Initialization*

The CAN Driver shall implement an interface for initialization
⌈
| Description: | The CAN Driver shall implement an interface for initialization. This service shall initialize all module global variables and all Registers of the CAN Hardware Unit and its Controller(s). This function shall only be called once during startup |
|---|---|
| Rationale: | Basic functionality. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A CAN Hardware Unit has registers that must be set according the static configuration. Some register values belong to one single CAN controller some influence the complete unit |
| Supporting Material: |  |

⌋

 The CAN Driver shall support dynamic selection of configuration sets
⌈
| Description: | The CAN Driver shall support the dynamic selection of one static configuration set out of a list of configuration sets. This shall be done by a parameter passed via the initialization interface. Refer to CAN Driver SWS for a detailed view of parameters. To switch to another configuration set shall only be possible if the CAN driver's state machine is in STOPPED mode. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Normal Operation

The CAN Driver shall provide a service to enable/disable interrupts of the CAN Controller.
⌈
| Description: | The CAN Driver shall offer services for enabling and disabling all interrupts generated by a CAN controller |
|---|---|

* Disabling means: Disable all interrupts of the related CAN Controller
* Enabling means: Re-enable all interrupts which were disabled before
| Rationale: | Basic functionality, ensure data consistency |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Used to disable asynchronous interruptions by a CAN Driver event. |
| Supporting Material: | - |

⌋

 The CAN Driver shall guarantee data consistency of received L-PDUs
⌈
| Description: | The CAN Driver shall guarantee that the data inside a Hardware Object is not overwritten while it is copied |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A newly arrived message may overwrite the CAN Hardware buffer during the data is read out of the CAN Controller. This may lead to inconsistent data. Therefore the Driver shall ensure that inconsistent data is not copied. |
| Supporting Material: | - |

⌋

 The CAN Driver shall offer a reception indication service.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 关机 Operation
*原文标题：Shutdown Operation*

The CAN Driver shall implement an interface for de-initialization
⌈
| Description: | The CAN Driver shall implement an interface for de-initialization. This service shall de-initialize the CAN Hardware Unit and its Controller(s). |
|---|---|
| Rationale: | Basic Functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A CAN Hardware Unit shall be re-configured with a new configuration set without the need for an ECU reset. |
| Supporting Material: | - |

⌋

### 17. Fault Operation

CAN Driver shall provide a notification for bus-off state
⌈
| Description: | The CAN driver shall notify the CAN Interface if the CAN Controller goes in bus-off state. The notification is done by call of a static callback function implemented inside the CAN Interface. |
|---|---|
| Rationale: | Basic Functionality |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Any state transition is notified to the CAN Interface. The CAN Interface forwards this notification to the responsible layer. |
| Supporting Material: | - |

⌋

 The CAN driver shall not recover from bus-off automatically
⌈
| Description: | The bus-off recovery shall be software driven. If an automatic bus-off recovery is implemented in the hardware it has to be suppressed by software e.g. force CAN controller to reset state within the bus off interrupt service routine |
|---|---|
| Rationale: | Basic Functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A software-controlled recovery allows other nodes to communicate without the damaged node disturbing the bus for some time period |
| Supporting Material: | - |

⌋

### 18. CAN 接口 (Hardware 抽象)
*原文标题：CAN Interface (Hardware Abstraction)*

The CAN Interface provides standardized interfaces to provide the communication with the CAN bus system of an ECU. The APIs are independent from the specific CAN Controllers and Transceivers and their access through the responsible Driver layer. The CAN Interface is able to access one or more CAN Drivers and CAN Transceiver Drivers via one uniform interface.

For a detailed functional description and interface definition see CAN Interface Specification [].

### 19. 配置
*原文标题：Configuration*

The CAN Interface configuration shall be able to import information from CAN communication matrix.
⌈
| Description: | The static configuration of the CAN Interface shall be based on information from the CAN communication matrix. The following information shall be extracted from the CAN communication matrix: |
|---|---|

* Individual RX L-PDUs for each CAN Controller - identified by CAN ID
* RX L-PDU ranges for each CAN Controller
* All TX L-PDUs for each CAN Controller - identified by CAN ID
* TX L-PDU ranges for each CAN Controller
* Upper layer client for each L-PDU (-range)
* DLC for each L-PDU (-range)

The configuration parameters shall be allowed to be of types Pre-Compile, Link-Time or Post-Build
| Rationale: | Common Database for CAN Network |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The communication matrix is used to describe all messages in a network and their sender and receiver. This information can be taken to configure the software filter algorithm, the DLC check and the notifications for the CAN Interface. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 初始化
*原文标题：Initialization*

CAN The CAN Interface shall implement an interface for initialization
⌈
| Description: | The CAN Interface shall implement an interface for initialization. This service shall initialize all module global variables. |
|---|---|
| Rationale: | Basic functionality. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A CAN Interface has static variables that need to be initialized, before the CAN Interface can be used. |
| Supporting Material: | - |

⌋

 The CAN Interface shall support the selection of configuration sets
⌈
| Description: | The CAN Interface shall support the selection of one configuration set out of a list of different static configuration sets. This shall be done by a parameter passed via the initialization interface. This is typically done once during startup |
|---|---|
| Rationale: | Support of different configurations during runtime |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Another module (independently from CanIf) checks the startup conditions e.g. depending on the mounting position in the car, selects the appropriate configuration set. This is then passed to the CanIf. |
| Supporting Material: | - |

⌋

 The CAN Interface shall be initialized in a defined way.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Normal Operation

CanIf Forwarding of L-PDUs to L-SDU Router
⌈
| Description: | The CanIf shall forward L-PDUs to the L-SDU Router. |
|---|---|

Additional Information: The CanIf must have exactly one upper layer module which perform the PDU routing with frame specific information. Therefore a L-PDU must be split in frame specific information and payload. Frame specific information must be added to meta data and payload shall be assigned to the according PDU ID
| Rationale: | Basic functionality |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | * Provide access to received CAN data by different upper layers via the L-SDU Router |

* Support for IEEE1722 tunneling of CAN frames as Time Synchronous and Non-Time Synchronous Control Frames Format
| Supporting Material: |
|---|

⌋

 The appropriate higher communication stack shall be notified by the CAN Interface via the L-SDU Router about an occurred reception
⌈
| Description: | The CAN driver will indicate each successfully received L-PDU. The appropriate higher communication stack shall be notified by the CAN Interface via the L-SDU Router about an occurred reception. This routing of an indication event is the task of the L-SDU Router. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 关机 Operation
*原文标题：Shutdown Operation*

The CAN Interface shall implement an interface for de-initialization
⌈
| Description: | The CAN Interface shall implement an interface for de-initialization. This service shall put the module in a state that accepts a subsequent initialization call. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A CAN Stack shall be re-configured with a new configuration set without the need for an ECU reset. |
| Supporting Material: | - |

⌋

### 23. Fault Operation

The CAN Interface shall report bus-off state of a device to an upper layer
⌈
| Description: | When the CAN Interface detects a bus-off state (by CAN Driver state change notification) a notification call-back function shall be called that is implemented in CAN State Manager. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Any state transition is notified by the CAN Interface. The bus-off notification is typically handled by the CAN State Manager. |
| Supporting Material: | - |

⌋

### 24. CAN 状态管理器
*原文标题：CAN State Manager*

### 25. 配置
*原文标题：Configuration*

The CAN State Manager shall support a configurable BusOff recovery time
⌈
| Description: | The CAN State Manager shall control the BusOff recovery algorithm. The time between the CAN Controller detects a BusOff event and the restart of the communication shall configurable. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Delay of communication after BusOff detection to overcome temporay bus disturbance. |
| Supporting Material: | - |

⌋

### 26. 初始化
*原文标题：Initialization*

The CAN State Manager shall implement an interface for initialization.
⌈
| Description: | The CAN State Manager shall provide an interface to initialize the communication mode at power-on. The communication mode for initialisation shall be configurable. It shall be possible to start up with full communication mode, with silent communication mode or with no communication mode. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Different kinds of communication behaviours of ECUs after power-on (listen only until application needs full communication capability or immediate full communication capability). |
| Supporting Material: | - |

⌋

### 27. Normal Operation

The CAN State Manager shall control the assigned CAN Devices
⌈
| Description: | The CAN State Manager shall start and stop the CAN Devices and shall prepare them for sleep. |
|---|---|
| Rationale: | Complexity of CAN Interface is reduced |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Split of data and control flow |
| Supporting Material: | - |

⌋

 When full communication is requested, CanSm shall enable pass mode on the CanIf TX filter
⌈
| Description: | When full communication is requested, CanSm shall enable pass mode on the CanIf TX filter |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 CanSm shall provide the possibility to initiate clear and check wake-up flags in the transceiver
⌈
| Description: | CanSm shall provide the possibility to initiate clear and check wake-up flags in the transceiver |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 CanSm shall support a valid PN shutdown sequence
⌈
| Description: | CanSm shall support a validPN shutdown sequence (CAN CC STOP -> CAN TRCV STANBY -> CAN CC SLEEP) |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: |  |
| Supporting Material: | - |

⌋

### 28. 关机 Operation
*原文标题：Shutdown Operation*

The CAN State Manager shall implement an interface for de-initialization.
⌈
| Description: | The CAN State Manager shall implement an interface for de-initialization. This service shall put the module in a state that accepts a subsequent initialization call. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A CAN Stack shall be re-configured with a new configuration set without the need for an ECU reset. |
| Supporting Material: | - |

⌋

### 29. Fault Operation

The CAN State Manager shall contain a CAN BusOff recovery algorithm for each used CAN Controller
⌈
| Description: | The CAN State Manager shall control the CAN BusOff recovery by a algorithm. It shall report the production error "CAN BusOff" to the Diagnostic Event Manager. It shall report a specific "CAN BusOff"-production error for each configured CAN network, if recovery is not possible within a configurable time. |
|---|---|
| Rationale: | Network controller specific error and bus state management |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | See Rationale |
| Supporting Material: | - |

⌋

### 30. 传输 Layer CAN
*原文标题：Transport Layer CAN*

This chapter describes the requirements for the CAN Transport Layer [].

The AUTOSAR CAN Transport Layer generally bases on the ISO 15765-2 and ISO 15765-4 specifications.

### 31. 配置
*原文标题：Configuration*

The AUTOSAR CAN Transport Layer shall be statically configurable to support either single or multiple connections in an optimizing way
⌈
| Description: | The AUTOSAR CAN Transport Layer shall be statically configurable to support either single or multiple connections in an optimizing way. This configuration is done Pre-Compile-Time |
|---|---|
| Rationale: | When an ECU enables gateway capabilities, it must handle different message transmissions concurrently across distinct sub-networks. So the AUTOSAR Transport Layer allows concurrent connections. But, most ECU's will only need single connection for diagnostic, which has to be implemented in an optimizing way. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The use case is to provide both single and multiple connections in an optimizing way to save runtime and code size. |
| Supporting Material: | - |

⌋

 The CAN Transport Layer shall identify each N-SDU with a unique identifier.
⌈
| Description: | The CAN Transport Layer identifies each N-SDU with a unique identifier. So the upper layer can address a N-SDU without any assumption on the addressing mode configuration of the CAN-TP. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 初始化
*原文标题：Initialization*

The CAN Transport Layer shall implement an interface for initialization
⌈
| Description: | The CAN Transport Layer implements an interface for initialization. This service shall initialize all global variables of the module and set all transport protocol connections in a default state (Idle) |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Set Transport Layer software to a defined state |
| Supporting Material: | - |

⌋

 The CAN Transport Layer services shall not be operational before initializing the module
⌈
| Description: | Before using the transmission capabilities of the CAN Transport Layer, it shall be initialized. If it is not the case, the services have to return an error and a development error shall be reported |
|---|---|
| Rationale: | Basic functionality. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | To avoid usage of the module without a complete initialization this could cause the transmission of corrupted frames. |
| Supporting Material: | - |

⌋

### 33. Normal Operation

The AUTOSAR CAN Transport Layer shall support the ISO 15765-2 addressing formats
⌈
| Description: | The AUTOSAR CAN Transport Layer shall support the normal, extended, mixed 11 bit, mixed 29 bit and normal fixed addressing formats of ISO 15765-2. |
|---|---|
| Rationale: | Basic functionality. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In addition to the normal and extended addressing format, the mixed addressing mode is required for remote diagnostics in automotive area. |
| Supporting Material: | - |

⌋

 The CAN Transport Layer shall be compliant with the CAN Interface module notifications
⌈
| Description: | The CAN Transport Layer shall only implement the CAN Interface notification services concerning TP messages: |
|---|---|

* Reception notification
* Tx confirmation

Hint: BusOff management is handled by the CAN State Manager
| Rationale: | In AUTOSAR architecture, the CAN Transport Layer is placed between the PDU Router and the CAN Interface. |
|---|---|

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | The CAN Transport Layer has to support the notification services called by the CAN Interface. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. CAN Bus 收发器驱动
*原文标题：CAN Bus Transceiver Driver*

### 35. 配置
*原文标题：Configuration*

The bus transceiver driver package shall offer configuration parameters that are needed to configure the driver for a given bus and the supported notifications
⌈
| Description: | Typical parameters are: |
|---|---|

* Max. supported baudrate of each bus to enable the detection of configuration errors
* Wakeup by bus
* Transceiver control via SPI or port pin
* Call context of the notification functions (ISR, polling) to enable detection of necessary data consistency mechanisms during configuration time

Please refer to the corresponding software specification for a more detailed view
| Rationale: | Basic functionality for transceiver configuration. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The CAN bus transceiver driver shall support the configuration for more than one bus
⌈
| Description: | The driver shall be able to support multiple CAN busses on the ECU. It must be possible to configure the used transceiver type independently for each bus. This includes also mixed systems with e.g. two CANs using different bus physics. Only Pre-Compile-Time configuration shall be possible |
|---|---|

Transceiver handling depends strongly on the used device.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. 初始化
*原文标题：Initialization*

The bus transceiver driver shall provide an API to initialize the driver internally
⌈
| Description: | The driver must be initialized during the power-up/reset sequence of the ECU. Depending on the used drivers to control the transceivers (e.g. DIO, SPI), they must be already available and working when the transceiver driver is initialized. The wakeup reason has to be detected and stored during the execution of the driver initialization, too |
|---|---|
| Rationale: | Set bus transceivers and driver in a pre-defined and known state |

Applies To:
| Dependencies: | The bus transceiver driver setup information must provide the necessary configuration data to enable the generation tool to select the appropriate control mechanism (e.g. SPI, I/O ports) and to guarantee the correct allocation of the necessary communication resources and initialization sequences. |
|---|---|
| Use Case: | Basic functionality for transceiver control. |
| Supporting Material: | - |

⌋

 The bus transceiver driver shall support the selection of configuration sets
⌈
| Description: | The CAN Interface shall support the selection of one configuration set out of a list of different static configuration sets. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 22 章（内容从略，见纯文本全文）

37. Normal Operation
38. 关机 Operation
39. Fault Operation
40. Non-Functional 需求 (Qualities)
41. CAN 驱动
42. CAN 接口 (Hardware 抽象)
43. CAN 状态管理器
44. 传输 Layer CAN
45. CAN Bus 收发器驱动
46. 时序需求
47. CAN 驱动 and 接口 together
48. References
49. 附录
50. Change history of AUTOSAR traceable items
51. Traceable item history of this document according to AUTOSAR Release R25-11
52. Added 需求 in R25-11
53. Changed 需求 in R25-11
54. Deleted 需求 in R25-11
55. Traceable item history of this document according to AUTOSAR Release R24-11
56. Added 需求 in R24-11
57. Changed 需求 in R24-11
58. Deleted 需求 in R24-11
