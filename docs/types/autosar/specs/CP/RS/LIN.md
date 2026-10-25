# Requirements on LIN (`LIN`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 042 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_LIN_042\AUTOSAR_CP_RS_LIN.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_LIN_042\AUTOSAR_CP_RS_LIN.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_LIN_042\zzgen\CP_RS_LIN.complete.txt`

## 文档简介

This document specifies the requirements for the following Basic Software Modules (module names in brackets):

* LIN Driver (Lin)
* LIN Transceiver Driver (LinTrcv)
* LIN Interface (LinIf)
* LIN Transport Layer (LinTp)

The intention is to reference as much as possible to the ISO 17987 specifications . The behavior covers LIN master nodes and LIN slave nodes. It is the goal to support LIN nodes already existing on the market (i.e. that conforms to the respective specification).

The reader of this document should know the LIN specifications.

Note: The ISO 17987 specifications cover ISO 14229-7  and the behavior of previous versions of LIN specifications: LIN 2.2, LIN 2.1, LIN 2.0 and LIN 1.3 by LIN Consortium. See Annex B of ISO 17987-3  for compatibility information.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies the requirements for the following Basic Software Modules (module names in brackets):

* LIN Driver (Lin)
* LIN Transceiver Driver (LinTrcv)
* LIN Interface (LinIf)
* LIN Transport Layer (LinTp)

The intention is to reference as much as possible to the ISO 17987 specifications . The behavior covers LIN master nodes and LIN slave nodes. It is the goal to support LIN nodes already existing on the market (i.e. that conforms to the respective specification).

The reader of this document should know the LIN specifications.

Note: The ISO 17987 specifications cover ISO 14229-7  and the behavior of previous versions of LIN specifications: LIN 2.2, LIN 2.1, LIN 2.0 and LIN 1.3 by LIN Consortium. See Annex B of ISO 17987-3  for compatibility information.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

The "Requirements on LIN" is divided into five sections.

* LIN General requirements
* LIN Interface
* LIN Driver
* LIN Transceiver Driver
* LIN Transport Layer (TP)

The subchapters are only applied, if they are needed. See following structure.

* Non-functional requirements
* Functional requirements
* Configuration
* Initialization
* Normal Operation
* Fault Operation
* Shutdown Operations

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Requirements on LIN that are not included in the AUTOSAR Glossary .

| Acronym: | Description: |
|---|---|
| LIN-PDU | LIN Protocol Data Unit is the LIN header and the LIN response, i.e. Break, synch, PID, Data (1-8) and checksum |

In the ISO 17987 specifications, this is called just frame. `LIN_PDU` is more precise and omits confusion.
| LIN-SDU | LIN Service Data Unit. The data-part of the LIN response. |
|---|---|
| Schedule Table | A Schedule Table determines the traffic on a LIN bus (one channel). One LIN bus could have more than one Schedule Table. |
| Schedule Table Handler | The Schedule Table Handler is placed at the LIN Interface of a LIN master node. It will initiate LIN-PDU's and confirm/indicate LIN-PDU's. It will be called by upper layers. |
| Schedule Table Manager | Keeps track of all available schedule and processes the active schedule table in a LIN master node. |
| LIN Driver | Module name Lin. Describes the Software Driver. |
| LIN Interface | Module name LinIf. LIN Interface, describes the ISO 17987 protocol communication stack. |
| Sleep-mode | In the ISO 17987 specifications the term stand-by and sleep-mode is used in similar manner. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Requirements of LIN.

### 7. 功能性需求
*原文标题：Functional Requirements*

### 8. LIN 通用
*原文标题：LIN General*

### 9. 通用需求
*原文标题：General Requirements*

The ISO 17987 specifications shall be reused as far as possible
⌈
| Description: | The following sections in the ISO 17987 specifications shall be reused |
|---|---|

ISO 17987-3 :

* Clause 5.2 Frame (handling of different types of LIN-PDUs, not the specific bytes of the LIN-PDU)
* Clause 5.3 Schedules tables
* Clause 5.4 Task Behaviour Model (handling of LIN-PDUs and errors. Not handling specific bytes in the LIN-PDU)
* Clause 5.5 Status Management
* Clause 6 Node Configuration and identification

ISO 17987-2 :

* Clause 5 Network Management
* Clause 7 Transport Layer Protocol
* Clause 9 Diagnostic communication requirements ( partly )

The diagnose classes II and III in AUTOSAR are optional and a precompiled option (see  ).

The Diagnostic Transport Protocol is also used by the node configuration and identification in the ISO 17987 specifications, so it is mandatory in AUTOSAR as a precompiled option.

The remaining chapters in the ISO 17987 specifications will not be reused as is. Refer to the corresponding LIN Driver and Interface sections for the exact details.

There are optional functionality in the ISO 17987 specifications (e.g. in the configuration):

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 初始化
*原文标题：Initialization*

The node configuration of LIN slaves shall only be done via defined schedule table(s) in master nodes.
⌈
| Description: | The AUTOSAR LIN should cover the "normal" behavior to do the configuration (assign IDs, NADs, \ldots) of LIN slaves. |
|---|---|

This shall avoid non LIN-conform configuration methods.
| Rationale: | This shall be part of the verification of the system design. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | LIN node configuration at bus start or after a node fault |
| Supporting Material: | ISO 17987 specifications |

⌋

### 11. Normal Operation

LIN-SDU shall be copied consistently for transfer
⌈
| Description: | The data from the upper layers needs to be copied consistently to the LIN Driver before transmission. |
|---|---|

The data from the LIN Driver shall be copied consistently to the upper layers after reception.

The consistent coping includes the payload (data) and the flags.
| Rationale: | Basic functionality. Guarantee 100% message LIN-SDU consistency for transmission and reception. |
|---|---|

Needed for every LIN-PDU transmission/reception on the LIN Bus.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 12. 关机 Operation
*原文标题：Shutdown Operation*

If a wakeup occurs during transition to sleep-mode, this channel shall go back to the running mode
⌈
| Description: | If a wakeup occurs during transition to sleep-mode, the affected channels shall go back to the running mode. The upper layer shall be notified. |
|---|---|

In detail:

If an upper layer wake-up is received during Stop:

Stop process should be completed, and network affected LIN cluster started afterwards.

If a bus wake-up is received during Stop:

Stop operation should be cancelled, and upper layer notified.
| Rationale: | Safe wakeup and sleep handling. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The following use-cases shall be detected for LIN master nodes: |

If the master is processing the go-to-sleep command and the upper layer requests a wakeup.

There is a time from the go-to-sleep command is transmitted on the bus until it is confirmed in the LIN Interface. During this time it is possible that a slave will transmit a wakeup-request

The following use-cases shall be detected for LIN slave:

If the slave is processing a sleep transition and a wakeup request is received.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Fault Operation

None

### 14. LIN 接口
*原文标题：LIN Interface*

### 15. 通用需求
*原文标题：General requirements*

It shall be compatible to LIN protocol specification
⌈
| Description: | The following parts and clauses of the ISO 17987 specifications shall be reused by the LIN Interface: |
|---|---|

ISO 17987-3 :

* Clause 5.2 Frame (handling of different types of LIN-PDUs, not the specific bytes of the LIN-PDU)
* Clause 5.3 Schedules tables
* Clause 5.4 Task Behaviour Model (handling of LIN-PDUs and errors. Not handling specific bytes in the LIN-PDU)
* Clause 5.5 Status Management

ISO 17987-2 :

* Clause 5 Network Management

The ISO 17987 specifications cover the behavior of previous versions of LIN specifications.

If a cluster uses slave nodes based on previous/non-ISO versions of the LIN specification, the LIN Master node has to support the behavior of this previous LIN protocol version.
| Rationale: | Basic LIN functionality |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | ISO 17987-2 |

ISO 17987-3
⌋

 One LIN Interface shall support one or more LIN Drivers.
⌈
| Description: | There shall only be one instance of the LIN Interface in each ECU. |
|---|---|

One ECU might contain more than one LIN channel. Thus the LIN Interface shall support one or more LIN Drivers.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 初始化
*原文标题：Initialization*

The LIN Interface shall support initialization of each LIN channel separately
⌈
| Description: | The LIN Interface shall support initialization of each LIN channel separately. |
|---|---|

The selection of at least one static configuration set shall be done by a parameter.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | If there are more than one LIN channels, than there exist more than one LDF-files. |
| Supporting Material: | Comparing with the ISO 17987 specifications' APIs, the LIN Interface init will do both work of l_ifc_init and l_sys_init |

⌋

 The LIN Interface shall support dynamic selection of configuration sets.
⌈
| Description: | The LIN Interface shall support the dynamic selection of at least one static configuration set by a parameter passed via the initialization interface. |
|---|---|

The selection of the appropriate configuration set itself as well as the way to incorporate the configuration sets into the ECU (Post-Build, Pre-Compile) is not affected by this requirement.
| Rationale: | Support of different configurations during runtime |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 17. Normal Operation

A Schedule Table Manager shall be available for LIN master nodes.
⌈
| Description: | This requirement is only applicable to LIN master nodes. |
|---|---|

The schedule table manager will keep schedule table to execute. The schedule table manager shall:

* Be able to receive requests from an upper layer which schedule table to execute
* Keep a list of schedule table
* Execute a schedule table once or continuously

One or more modules from an upper layer will create a sequence of schedule tables and request the schedule table manager to execute specific schedule tables. Priority handling is not handled inside LinStack.

The schedule table manager will only coordinate the running schedule table and schedule table requests.

There exist one memory space for the "continuously execution schedule table", it will be overwritten by a newer request.
| Rationale: | In the ISO 17987 specifications, the application interfaces directly to the LIN API. In AUTOSAR above modules shall be able to independently request a schedule table to be executed. Therefore the schedule table manager is a necessarily extension to the schedule table handler. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Example system start: |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 关机 Operation
*原文标题：Shutdown Operation*

There shall be an API call to set the LIN bus to sleep-mode.
⌈
| Description: | The LIN Interface shall provide an API to set the sleep state on each LIN bus independently of each other. |
|---|---|

LIN Master nodes send a go-to-sleep command when entering sleep state.
| Rationale: | Basic functionality |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | ISO 17987 specifications |

⌋

 The LIN Interface shall provide bus idle condition observation for slave nodes.
⌈
| Description: | This requirement is only applicable to LIN slave nodes. |
|---|---|

For LIN slave nodes, the LIN interface shall observe each LIN bus for communication. If no communication occurs for a configurable time, the LIN interface shall inform the upper layer about the sleep state of the LIN bus.
| Rationale: | Implementation of the LIN standard. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Basic functionality and support of LIN conformance test. |

If communication with the master node is not possible anymore, e.g. due to a defect master node or disturbed or broken bus line, the slave node shall transit to sleep state.
| Supporting Material: | ISO 17987-2  specification |
|---|---|

⌋

### 19. Fault Operation

none

### 20. LIN 驱动
*原文标题：LIN Driver*

### 21. 通用需求
*原文标题：General requirements*

It shall be compatible to LIN Datalinklayer
⌈
| Description: | The frame processor has to be emulated by LIN Driver if not already supported by hardware e.g. LIN Controller |
|---|---|

The Task Behavior Model (clause 5.4 in the ISO 17987-3 ) is part of the LIN Driver.

The ISO 17987 specifications cover the behavior of previous/non-ISO versions of LIN specifications.
| Rationale: | Basic LIN functionality |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A device driver using an UART will implement the complete Task Behavior Model. |

If a LIN Hardware (e.g. LIN controller) is used, parts of the Task Behavior Model runs in hardware
| Supporting Material: | ISO 17987-3 |
|---|---|

⌋

 The LIN Driver shall fulfill the general SPAL requirements for Basic Software Modules.
⌈
| Description: | The LIN Driver shall fulfill the general SPAL requirements for Software Modules as specified in AUTOSAR RS SPAL General |
|---|---|
| Rationale: | Re-use of requirements valid for all low level Drivers |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | LIN Driver is in the same layer as the SPAL Drivers (e.g.: SPI, ADC). Therefore the general SPAL requirements shall be fulfilled by the LIN Driver also, if applicable. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 初始化
*原文标题：Initialization*

The LIN Driver shall support the initialization of each LIN channel separately
⌈
| Description: | The LIN Driver shall support the initialization of each LIN channel separately. |
|---|---|

The selection of at least one static configuration set shall be done by a parameter.
| Rationale: | Hardware specific initialization of the UART, LIN controller. Initiation of variables used in the LIN driver. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | If there are e.g. 2 LIN channels than there are also 2 different configuration files. |
| Supporting Material: | - |

⌋

 The LIN Driver shall support dynamic selection of configuration sets.
⌈
| Description: | The LIN Driver shall support the dynamic selection of at least one static configuration set by a parameter passed via the initialization interface. |
|---|---|

The selection of the appropriate configuration set itself as well as the way to incorporate the configuration sets into the ECU (Post-Build, Pre-Compile) is not affected by this requirement.
| Rationale: | Support of different configurations during runtime |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 23. Normal Operation

The LIN Driver shall provide a notification for wake-up events
⌈
| Description: | The LIN Driver shall notify the LIN Interface in case of a wake-up interrupt. |
|---|---|

The corresponding callback function itself is implemented inside the LIN Interface.

This functionality shall only be implemented, if the LIN Hardware unit has a wake-up interrupt capability.

The wake-up interrupt shall only be enabled when the channel is in sleep-mode mode. Otherwise a SynchBreak will be considered as a wake-up request.
| Rationale: | Inform upper layer about the occurrence of a wake-up event |
|---|---|

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 One LIN driver shall be able to handle more than one LIN channel
⌈
| Description: | One LIN driver shall able to handle more than one LIN channel if the underlying hardware is equipped with more than one identical LIN controllers. |
|---|---|
| Rationale: | Portability |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | If an ECU uses two channels and it contains two identical UART hardware modules there is only one LIN driver interfacing both UARTs |
| Supporting Material: | - |

⌋

### 24. 关机 Operations
*原文标题：Shutdown Operations*

Transition to sleep-mode shall be handled
⌈
| Description: | After the LIN Driver is requested to be set to the sleep-mode by the appropriate function call it has to do as follows: |
|---|---|

* The LIN Driver shall activate sleep-mode as soon as possible after bus is idle.
* Master nodes: After successful transmission of the go-to-sleep-command the wakeup monitoring shall be activated.
* Slave nodes: After successful reception of the go-to-sleep-command or detection of the bus idle condition, the wakeup monitoring shall be activated.
* After wakeup monitoring is active the sleep mode shall be set and can be read out by LINif afterwards.

Each LIN channel shall be handled independently.
| Rationale: | Basic functionality |
|---|---|

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The LIN Driver shall be able to put the LIN hardware to a reduced power operation mode if needed
⌈
| Description: | When going to sleep-mode mode, the LIN Driver shall put the corresponding LIN hardware to a reduced power operation mode if supported by hardware. |
|---|---|

This command shall be possible to be activated for each channel independently.

This requirement does not conflict to .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Fault Operation

The LIN Driver shall provide a status for error events on the bus.
⌈
| Description: | The LIN driver shall provide an API that returns the errors detected in the LIN communication. When the call is made the error-flags shall be reset. |
|---|---|

Each LIN channel shall be capable to notify its errors separately to the LIN interface
| Rationale: | Bus error handling |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Similar to the l_ifc_read_status function (ISO/TR 17987-5 , clause 4.3.7.9) |

⌋

### 26. LIN 收发器驱动
*原文标题：LIN Transceiver Driver*

### 27. 通用需求
*原文标题：General Requirements*

None

### 28. 配置
*原文标题：Configuration*

The LIN Transceiver Driver shall support separate configuration parameters per bus
⌈
| Description: | The bus transceiver driver shall offer configuration parameters that are needed to configure the driver for a given bus and the supported notifications |
|---|---|

Typical parameters are:

- Wakeup by bus

- Transceiver control via SPI or port pin

- Call context of the notification functions (ISR, polling) to enable detection of necessary data consistency mechanisms during configuration time

Please refer to the corresponding software specification for a more detailed view
| Rationale: | Basic functionality for transceiver configuration. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The LIN transceiver driver shall support the configuration for more than one channel
⌈
| Description: | The driver shall be able to support multiple LIN busses on the ECU. |
|---|---|

It must be possible to configure the used transceiver type independently for each bus. Only Pre-Compile-Time configuration shall be possible

Transceiver handling depends strongly on the used device.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 初始化
*原文标题：Initialization*

The LIN Transceiver Driver shall provide an API for initialization.
⌈
| Description: | The bus transceiver driver shall provide an API to initialize the driver internally and set then all attached transceivers in their pre-selected operation modes |
|---|---|

The driver must be initialized during the power-up/reset sequence of the ECU.

Depending on the used drivers to control the transceivers (e.g. DIO, SPI), they must be already available and working when the transceiver driver is initialized.

The wakeup reason has to be detected and stored during the execution of the driver initialization, too
| Rationale: | Set bus transceivers and driver in a pre-defined and known state |
|---|---|

Applies To:
| Dependencies: |
|---|

The bus transceiver driver setup information must provide the necessary configuration data to enable the generation tool to select the appropriate control mechanism (e.g. SPI, I/O ports) and to guarantee the correct allocation of the necessary communication resources and initialization sequences.
| Use Case: | Basic functionality for transceiver control. |
|---|---|
| Supporting Material: | - |

⌋

### 30. Normal Operation

The bus transceiver driver API shall be synchronous.
⌈
| Description: | The bus transceiver driver API shall execute the requested action immediately and shall deliver the result state immediately to the caller. |
|---|---|

This will ease up the implementation of wakeup and sleep concepts within the AUTOSAR BSW stack
| Rationale: | Better usage of transceiver functionality in the complex AUTOSAR BSW environment. |
|---|---|

Applies To:
| Dependencies: | ECU state manager, NM. SPAL in case a transceiver is connected via SPI |
|---|---|
| Use Case: | Atomic transition to other operation mode; easier and better abstraction for upper layers like the ECU state manager or ComManager. |

Improved testability compared to asynchronous handling.
| Supporting Material: | - |
|---|---|

⌋

 The bus transceiver driver shall support an API to send the addressed transceiver into its Standby mode.
⌈
| Description: | Many transceivers support the transition to the Sleep mode only via the transition to Standby mode. In addition, some power concepts have the need to set the transceiver to Standby only instead of Sleep mode. |
|---|---|

Not all transceivers will support such a state.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. LIN 传输 Layer
*原文标题：LIN Transport Layer*

### 32. 配置
*原文标题：Configuration*

The value of LIN Transport protocol timeouts shall be statically configurable for each connection.
⌈
| Description: | All the defined timeout of the ISO 17987-2  are statically configurable for each connection. |
|---|---|

The configuration parameters shall be allowed to be of types Pre-Compile-Time, Link-Time or Post-Build-Time.
| Rationale: | To adapt the timeout value to the ECU application domain. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The communication constraints may be totally different between a diagnostics connection and an applicative one (e.g. display data). |
| Supporting Material: | ISO 17987-2 , clause 7.6.4. Similar to  for CAN TP. |

⌋

### 33. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 34. LIN 通用
*原文标题：LIN General*

None

### 35. LIN 接口
*原文标题：LIN Interface*

None

### 36. LIN 驱动
*原文标题：LIN Driver*

None

### 37. LIN 收发器驱动
*原文标题：LIN Transceiver Driver*

None

### 38. LIN 传输 Layer
*原文标题：LIN Transport Layer*

### 39. 通用需求
*原文标题：General requirements*

The AUTOSAR LIN Transport Layer shall be based on the Diagnostic Transport Layer for ISO 17987.
⌈
| Description: | If no requirement is explicitly added or excluded, the implementation of the AUTOSAR LIN Transport Layer shall follow the ISO 17987 specifications (clause 7 in the ISO 17987-2 ). |
|---|---|

The implementation of the LIN TP is a precompiled option.

LIN TP is not scalable. The ISO 17987 specifications cover ISO 14229-7  and the behavior of previous versions of LIN specifications (see Annex B of ISO 17987-3 ).
| Rationale: | Reuse of existing standards for AUTOSAR BSW. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The typical use-case is where a Diagnostic message is handoff from CAN to LIN through the CAN/LIN master gateway ECU. |
| Supporting Material: | ISO 17987-2 |

ISO 17987-3

ISO 14229-7
⌋

### 40. 初始化
*原文标题：Initialization*

The LIN Transport Layer shall provide an API for initialization.
⌈
| Description: | The LIN Transport Layer shall support an API for initialization. |
|---|---|

This service shall initialize all global variables of the module and set all transport protocol connections in a default state. If there is an ongoing TP session it shall be immediately stopped.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The LIN Transport Layer services shall not be operational before initializing the module.
⌈
| Description: | Before using the transmission capabilities of the LIN Transport Layer, It shall be initialized. If it is not the case, the services have to return an error. |
|---|---|
| Rationale: | To avoid usage of the module without a complete initialization this could cause the transmission of corrupted frames. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 41. Normal Operation

The AUTOSAR LIN Transport Layer shall support half-duplex physical connections.
⌈
| Description: | The LIN TP shall support the transmission/reception of one physical request/response at a time. The next transmission, e.g. for a response or a request to another slave, is scheduled only after the previous transmission has been finished. |
|---|---|
| Rationale: | To enable diagnostic communication with simple TP implementations. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A tester-tool connected to an ECU on the CAN bus sends a physical diagnostic request through a CAN/LIN-master ECU to a LIN slave ECU. When the request is finished the LIN slave ECU transmits a TP message with the response to the diagnostic request. |
| Supporting Material: | - |

⌋

 The AUTOSAR LIN Transport Layer shall support the transmission of functional requests at any time for master nodes.
⌈
| Description: | This requirement is only applicable to LIN master nodes. |
|---|---|

The LIN TP shall support the transmission of a functional request at any time.
| Rationale: | Implementation of the LIN standard. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Fault Operation

Errors shall be handled
⌈
| Description: | In case of reception of unexpected N_PDU it shall respect the behavior defined in clause 7.6.4 (unexpected arrival of N_PDU) of the ISO 17987-2 . For others errors, just aborts the segmentation session. |
|---|---|
| Rationale: | This is an extension to the LIN specification since it does not describe how to handle error situations occurred during transportation of a TP message. |

Applies To:
| Dependencies: | - |
|---|---|

Use Case:
| Supporting Material: | ISO 17987-2 , clause 7.6.4. |
|---|---|

⌋

### 43. References

Note: Non-ISO LIN specifications (LIN 2.2A and LIN 2.1 by LIN Consortium) are available at <https://www.lin-cia.org/standards/>, even after closure of the LIN Consortium.

### 44. 附录
*原文标题：Appendix*

### 45. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 46. Traceable item history of this document according to AUTOSAR Release R23-11

### 47. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 48. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 49. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 50. Traceable item history of this document according to AUTOSAR Release R24-11

### 51. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| LinIf Forwarding of L-PDUs to LSduR |  |
| Lin Driver API for Fetching L-PDU Message State |  |

### 52. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 53. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 54. Traceable item history of this document according to AUTOSAR Release R25-11

### 55. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 56. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 57. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
