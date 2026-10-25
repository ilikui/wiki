# Requirements on Mode Management (`ModeManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 069 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_ModeManagement_069\AUTOSAR_CP_RS_ModeManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_ModeManagement_069\AUTOSAR_CP_RS_ModeManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_ModeManagement_069\zzgen\CP_RS_ModeManagement.complete.txt`

## 文档简介

The goal of this document is to define the functional and non-functional requirements for all modules of the AUTOSAR mode management:

* ECU State Manager  (EcuM) which manages startup and shutdown of the ECU. This includes triggering the shutdown when all requests for run are released;
* Watchdog Manager  (WdgM) which collects the indications of aliveness and correct execution order from the independent applications and relays them to the hardware watchdog in a suitable way;
* Communication Manager  (ComM) which coordinates the communication of the independent applications.
* Basic Software Mode Manager (BswM) which organizes mode handling and mode related interaction of SW-Cs and the BSW modules.

All modules are needed if more than one independent software component resides on the ECU.

The location of these modules within the whole AUTOSAR ECU SW Architecture is defined in .

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

The goal of this document is to define the functional and non-functional requirements for all modules of the AUTOSAR mode management:

* ECU State Manager  (EcuM) which manages startup and shutdown of the ECU. This includes triggering the shutdown when all requests for run are released;
* Watchdog Manager  (WdgM) which collects the indications of aliveness and correct execution order from the independent applications and relays them to the hardware watchdog in a suitable way;
* Communication Manager  (ComM) which coordinates the communication of the independent applications.
* Basic Software Mode Manager (BswM) which organizes mode handling and mode related interaction of SW-Cs and the BSW modules.

All modules are needed if more than one independent software component resides on the ECU.

The location of these modules within the whole AUTOSAR ECU SW Architecture is defined in .

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Mode Management that are not included in the AUTOSAR Glossary .

| Acronym: | Description: |
|---|---|
| Active wake-up | Wake-up caused by the ECU e.g. by a sensor. |
| Alive indication | Indication that a supervised SW-C is alive - meaning active - provided from the SW-C itself to the Watchdog Manager . |
| Application | Applications are used synonymous to a SW-C. A SW-C may span several atomic SW-Cs. AUTOSAR provides the element of a "composition" to formally group several atomic SW-Cs of an application. A composition is used to structure the description and does not affect the generated code. |

Note: The atomic SW-Cs in a composition can still be mapped to different ECUs. Application Modes are therefore 'local' to an application but can be 'global' to several ECUs.
| Application Mode | An Application Mode is a mode that is not controlled and standardized by the Mode Managers in the BSW. The scope of an Application Mode is a limited number of SW-Cs that belongs to a logical Application. If a mode only affects one composition, it is an Application Mode. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Mode Management.

The Mode Management cluster is in charge of four Basic Software modules:

* the ECU State Manager , controlling the startup and shutdown phase of AUTOSAR BSW modules including startup and shutdown of the OS;
* the Communication Manager , in charge of the network resource management;
* the Watchdog Manager , responsible for triggering the watchdog based on the aliveness status and control flow status of application software.
* the Basic Software Mode Manager , responsible for supporting the mode handling.

In the following, requirements will be assigned to each of these modules.

### 5. ECU 状态管理
*原文标题：ECU State Management*

### 6. 功能概述
*原文标题：Functional Overview*

The ECU State Management handles basic activities related to

* ECU startup,
* ECU shutdown,
* ECU reset (including activation of the bootloader),
* ECU sleep,
* and ECU wake-up

 shows the high level state machine of the ECU State Management.

After basic initialization of the ECU has been completed, the ECU State Management switches to the normal operation state (UP state). While in normal operation state, the ECU State Management hands over control to the BSW Mode Management (refer to chapter ).

The ECU State Management will remain in that state until the BSW Mode Management indicates, that the ECU should go to sleep or should shutdown.

Applications would typically interface with the BSW Mode Management to request or release the ECU's normal operation mode, because the BSW Mode Management provides full flexibility with respect to BSW mode handling (refer to chapter ).

Alternatively, applications which do not need the flexibility offered by the BSW Mode Management may interface directly with the ECU State Management to request or release the ECU's normal operation mode.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Use Cases

The following use case diagram shows the typical use cases of the ECU State Management and the actors.

| Use Case Name | Use Case Description |
|---|---|
| Start up ECU | This use case is to |

* initialize the ECU HW and selected BSW in a configurable order
* and start the operating system
* and hand-over control to BSW Mode Management for initialization of the rest of the BSW and the application.
| Wake up ECU | This use case is to |
|---|---|

* validates the wake-up
* and initializes selected BSW
* and resumes execution of the operating system/scheduling
| Put ECU to sleep | This use case suspends the operating system/scheduling and puts the ECU HW to sleep |
|---|---|
| Shutdown ECU | This use case shuts down the ECU upon request, i.e., switches off or resets the ECU |
| Keep ECU fully operational (RUN state) | This use case keeps the ECU alive, while application requests are pending |
| Prepare ECU for shutdown (POST_RUN state) | This use case prepares the ECU for shutdown, if no application request is pending to keep it alive |
| Activate Bootloader | This use case is to activate the bootloader upon ECU reset |

### 8. 功能性需求
*原文标题：Functional Requirements*

### 9. Use case 1：Start up ECU
*原文标题：Use case 1: Start up ECU*

Initialization of Basic Software Modules
⌈
| Description: | When ECU is powered up or woken up, then the ECU State Management shall |
|---|---|

* initialize the ECU HW and selected BSW in a configurable order
* and start the operating system
* and hand-over control to BSW Mode Management for initialization of the rest of the BSW and the application.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 10. Use case 2：Wake up ECU
*原文标题：Use case 2: Wake up ECU*

Reason for Last Wake-up
⌈
| Description: | When requested by the BSW, then the ECU State Management shall provide the reason/source of the latest validated wake-up. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Validation of Wake-ups
⌈
| Description: | When wake-up event occurs in ECU HW, then the ECU State Management shall validate the wake-up event. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Handling of Valid Wake-ups
⌈
| Description: | When a valid wake-up event has been successfully validated, then the ECU State Management shall re-start the BSW. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 11. Use case 3：Put ECU to 休眠
*原文标题：Use case 3: Put ECU to sleep*

Switch to ECU Sleep Mode
⌈
| Description: | When supported by HW and the SLEEP state is entered, then the ECU State Management shall put the ECU to the selected sleep mode. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 12. Use case 4：关机 and reset ECU
*原文标题：Use case 4: Shutdown and reset ECU*

Shutdown ECU
⌈
| Description: | When the SHUTDOWN state is entered, then the ECU State Management shall shutdown the ECU. |
|---|---|

Additional Information:

A shutdown of the ECU includes:

* stop the operating system
* and de-initialize selected BSW in a configurable order
* and stop the ECU (e.g. MCU reset, watchdog reset).
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Synchronous Shutdown across Cores
⌈
| Description: | When SHUTDOWN state is entered, then the ECU State Management shall shutdown the ECU synchronously across all cores. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Reason for Last Shutdown
⌈
| Description: | When requested by application or the BSW, then the ECU State Management shall provide the reason for the latest shutdown. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 13. Use case 5：Keep ECU fully operational (RUN 状态)
*原文标题：Use case 5: Keep ECU fully operational (RUN state)*

Configure States RUN and `POST_RUN`
⌈
| Description: | The ECU State Management shall allow to enable or disable the states RUN and POST_RUN by configuration. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Enter RUN State after Start-up
⌈
| Description: | When the Start-up is finished, then the ECU State Management shall enter fully functional state (RUN state). |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Switch to RUN State
⌈
| Description: | If |
|---|---|

* ECU is in shutdown synchronization state (`POST_RUN` state)
* and a configurable user in the application requests to switch to fully functional state (RUN state),

then the ECU State Management shall enter fully functional state (RUN state).
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 14. Use case 6：Prepare ECU for 关机 (POST_RUN 状态)
*原文标题：Use case 6: Prepare ECU for Shutdown (POST_RUN State)*

Switch to `POST_RUN` state
⌈
| Description: | If |
|---|---|

* ECU is in fully functional state (RUN state)
* and no configurable user in the application requests to remain in that state,

then the ECU State Management shall enter synchronization state (`POST_RUN` state).
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Enter SHUTDOWN or SLEEP
⌈
| Description: | If |
|---|---|

* ECU is in shutdown synchronization state (`POST_RUN` state)
* and no user in the application requests to remain in that state any longer
* and no user in the application requests to enter the fully functional state,

then the ECU State Management shall shutdown the ECU (SHUTDOWN state) or enter SLEEP state.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Select Target Shutdown State
⌈
| Description: | The ECU State Management shall allow the BSW or the application to select target state after leaving the POST_RUN state (i.e., SHUTDOWN or SLEEP). |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 15. Use case 9：Activate Bootloader
*原文标题：Use case 9: Activate Bootloader*

Activate Bootloader
⌈
| Description: | When requested by application, then the ECU State Management shall switch to the Bootloader. |
|---|---|

Additional information:

Activating the bootloader is only intended for application SW related to diagnostics (boot management).
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 16. Common

Execute External Code on State Transitions
⌈
| Description: | The ECU State Management shall provide the ability to execute external, statically configured code at each transition between ECU states. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 State Changes are Global
⌈
| Description: | When a state change is requested, then the ECU State Management shall switch to the same new ECU state globally across all cores. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 17. Watchdog 管理器
*原文标题：Watchdog Manager*

### 18. 功能概述
*原文标题：Functional Overview*

The Watchdog Manager  is a basic software module of the standardized basic software architecture of AUTOSAR (service layer). It is intended to supervise the reliability of application execution with respect to timing constraints (temporal program flow monitoring) and with respect to the correct sequence of execution (logical program flow monitoring).

Derived from the layered architecture approach , a decoupling between application timing constraints and watchdog hardware timing constraints becomes possible. Based on this decoupling the Watchdog Manager  provides temporal program flow monitoring (alive-supervision) of several independent applications as well as logical program flow monitoring (the supervision of the correct execution order) while triggering the watchdog hardware.

The following features are provided by the Watchdog Manager :

* Supervision of multiple individual applications located on the ECU, having independent timing constraints and requiring a special supervision of runtime behaviour and aliveness.
* Logical supervision of safety-related tasks and periodic functions (main functions).
* Fault-reaction mechanism for each independent supervised entity.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 功能性需求
*原文标题：Functional Requirements*

### 20. 初始化
*原文标题：Initialization*

The Watchdog Manager shall provide an initialization service
  Status: OBSOLETE
⌈
| Description: | The Watchdog Manager  shall provide an initialization service. |
|---|---|

This service allows the selection of one of the statically configured Watchdog Manager  modes.
| Rationale: | Basic functionality. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 It shall be possible to prohibit the disabling of watchdog
  Status: OBSOLETE
⌈
| Description: | It shall be possible to configure, by means of a pre-processor switch, whether the Watchdog Manager  initialization service and the Watchdog Manager  mode selection service allow the disabling of the watchdog or not. |
|---|---|
| Rationale: | Avoid the presence of code sequences in a safety relevant ECU that disable the watchdog. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Usage within safety relevant systems. |
| Supporting Material: | - |

⌋

### 21. Normal Operation

The Watchdog Manager shall cyclically check the periodicity of the supervised entities
  Status: OBSOLETE
⌈
| Description: | The Watchdog Manager  shall cyclically check the periodicity of the supervised entities, in order to detect aliveness of application. |
|---|---|
| Rationale: | This requirement is needed by AUTOSAR Software Components requiring a special supervision of runtime behavior and aliveness. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The Watchdog Manager shall check the correct sequence of code execution in supervised entities
  Status: OBSOLETE
⌈
| Description: | The Watchdog Manager  shall check the correct sequence of code execution in supervised entities. |
|---|---|
| Rationale: | To enable to detect if a program runs in an incorrect sequence. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | SW-Cs and BSW modules call logical program flow monitoring in order to detect the deviation from the correct execution sequence. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 配置
*原文标题：Configuration*

The list of entities supervised by the Watchdog Manager shall be configurable at pre-compile time
  Status: OBSOLETE
⌈
| Description: | The list of entities supervised by the Watchdog Manager  shall be configurable at pre-compile time. The usage of additional configuration classes is not restricted |
|---|---|
| Rationale: | Application supervising. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 It shall be possible to configure all the transition relations
  Status: OBSOLETE
⌈
| Description: | It shall be possible to configure the transition relations for each supervised entity and global transitions between supervised entities. |
|---|---|
| Rationale: | There are two possibilities to establish logical supervision of the execution sequence: |

* One global transition relation for the whole ECU
* One transition relation for each supervised entity.

Both of the possibilities shall be supported.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Fault Operation

The Watchdog Manager shall report failure of temporal or program flow monitoring to DEM
  Status: OBSOLETE
⌈
| Description: | The Watchdog Manager  shall report to DEM the failure of temporal or program flow monitoring (When a failure is detected). |
|---|---|

The report to DEM shall be a configurable option of the Watchdog Manager .
| Rationale: | Error tracing, Diagnostics. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 24. Communication 管理器
*原文标题：Communication Manager*

### 25. 功能概述
*原文标题：Functional Overview*

The Communication Manager  collects and coordinates the communication access requests from communication requestors (users, see glossary).

The purpose of the Communication Manager  is:

* Simplifying the usage of the communication protocol stack for the user. This includes the starting and stopping physical channel communication and a simplified network management handling.
* Temporarily disabling sending of messages to prevent the ECU from (actively) waking up the physical channel(s).
* Controlling of more than one physical channels of an ECU by implementing a state machine for every physical channel.
* Requesting the appropriate communication state to the BusState Manager
* Simplifying the resource management by allocating all resources necessary for the requested communication mode.

In order to do so, the Communication Manager  defines "communication modes", indicating if a given physical channel is available for the application and how (send/receive; only receive, neither send nor receive).

Much more details about these functionalities can be found in the Communication Manager .

### 26. 功能性需求
*原文标题：Functional Requirements*

### 27. Normal Operation

The Communication Manager shall coordinate multiple communication requests
⌈
| Description: | The Communication Manager  shall coordinate multiple communication requests for multiple physical channels independently. The rule for coordination is that the highest requested communication mode is the target state of the physical channel (see SRS_ModeMgm_09083 for a brief description of the communication modes). |
|---|---|
| Rationale: | Main functionality of Communication Manager . A SW-C cannot know with which other SW-C it will share an ECU in a particular configuration. Coordination of communication requests has to be provided by BSW. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The communication manager shall arbitrate and coordinate requests from users on physical channel and users on PNCs
⌈
| Description: | The communication manager shall arbitrate and coordinate requests from users on physical channel and users on PNCs. |
|---|---|
| Rationale: | PNCs are virtual channel running on physical channels. More than one PNC can be located on a single physical channel and the communication mode of the channel has an effect on the PNCs running on it. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 配置
*原文标题：Configuration*

Relationship between users and physical channels shall be configurable at pre compile time
⌈
| Description: | Relationship between users and physical channels (which user communicates on which physical channel) are configurable at pre compile time. The usage of additional configuration classes is not restricted. |
|---|---|
| Rationale: | Necessary for physical channel independency; communication shall be only activated if communication is needed on this physical channel. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | Note: A possible solution is a 2D matrix with users as rows and physical channels as columns; an entry in this matrix links the user (row) with the corresponding physical channel (column). |

⌋

 It shall be possible to assign physical channels to the Communication Manager
⌈
| Description: | Physical channels, which should be handled by the Communication Manager , shall be assigned to the module by pre compile time configuration. The usage of additional configuration classes is not restricted. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 基础软件模式管理器
*原文标题：Basic Software Mode Manager*

### 30. 功能概述
*原文标题：Functional Overview*

The VFB  defines and the RTE  implements the concept of Mode Declaration Groups.

There can be multiple Mode Declaration Groups that are independent of each other. E.g. in Figure 1 the Mode Declaration Group is "`AMM_KeySwitch`" and the Modes in this group are "Off", "Accessory", "Ignition".

A Mode Declaration Group can not contain parallel Modes. Parallel Modes must be implemented by separate Mode Declaration Groups. E.g. diagnostic modes are independent of key switch modes, i.e., they go into a validMode Declaration Group "`AMM_Diagnostics`".

There is no hierarchy of Modes within a Mode Group. E.g. "`Diagnostics_On`" and "`Diagnostics_Off`" cannot have sub-modes.

### 31. 接口 between 模式 -Requester, -Manager and -User
*原文标题：Interfaces between Mode -Requester, -Manager and -User*

As defined above there are three roles that an SW-C or a BSW module can take: Mode Requester, Mode Manager, and Mode User.

The Mode Requester requests a Mode from a Mode Manager by sending some data via a port with a Mode Request interface. As shown in Figure 2, this port can be a Client or a Sender port, in case of a Mode Manager in the BSW even a C function call. This interface is not standardized.

The Mode Manager receives the incoming information via its Server or Receiver ports or C functions with Mode Request Interfaces, arbitrates the requests and decides upon a resulting mode. It uses a local Sender port with a Mode Switch Interface  to switch a Mode Declaration Group into the resulting mode.

To react upon mode changes, Mode Users have a local Receiver port where it receives Mode Switch Notifications. It can either read and evaluate the information directly or via its Software Component Description instruct the RTE  to start and stop some of its runnables.

Note that in all cases there may be multiple ports with Mode Request and Mode Switch Interfaces attached to the corresponding roles.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Relation of Modes

Every system contains modes at different levels of granularity. As shown in Figure 3, there are Vehicle Modes and several Applications with modes and ECUs with local BSW Modes.

But all these modes are not really independent: In reality, Modes at all levels influence each other.

Figure  shows the following relationships:

* Depending on Vehicle Modes, Applications may be active or inactive and thus be in different Application Modes.
* Vice versa, the operational state of certain Applications may cause Vehicle Mode changes.
* Depending on Vehicle and Application Modes, the BSW modes may change, e.g. the communication needs of an Application may cause a change in the BSW Mode of a communication network.
* Vice versa, BSW Modes may influence the Modes of Applications and even the whole vehicle, e.g. when a communication network is unavailable, Applications that depend on it may change into a Limp-Home Mode.

There are also cross-dependencies within all levels of Modes through mode relations. These get even more complicated because Applications can be distributed over several ECUs.

Figure  gives an impression of the resulting network of complex dependencies.

### 33. Use Cases

The following use case diagram shows the actors and their use cases.

| Use Case Name | Use Case Description |
|---|---|
| Switch General Modes | This use case allows the application or the BSW to arbitrate and switch to pre-defined (i.e., standardized) and user-defined modes in a generic way |
| Initialize BSW | This use case is triggered by the ECU State Management to initialize BSW beyond drivers and OS (which are initialized in scope of ECU state management) |
| Prepare BSW for Shutdown | This use case prepares BSW for shutdown, before control is handed over to ECU state management which actually shuts down the OS and the ECU |
| Set Communication Mode | This use case allows application and BSW to enable or disable network communication - or change the communication according to the current mode |
| Control Service Discovery | This use case allows the application to trigger a Service Discovery at any point in time - in case default behavior ("auto offer / auto subscribe") is not sufficient |

### 34. 功能性需求
*原文标题：Functional Requirements*

### 35. Use Case：Switch 通用 Modes
*原文标题：Use Case: Switch General Modes*

Mode Arbitration on Request
⌈
| Description: | When the BSW Mode Management receives a mode request from a mode requester, then the BSW Mode Management shall arbitrate the new mode. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Configuration of Mode Requesters
⌈
| Description: | The BSW Mode Management shall allow to register mode requester in/from application, BSW or CDD. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Configuration of Mode Arbitration Rules
⌈
| Description: | The BSW Mode Management shall allow to configure the rules for mode arbitration. |
|---|---|
| Rationale: | Each each project requires very specific rules for mode changes. Configuration allows to tailor the generic arbitration mechanism of the BSW Mode Management to the needs of a given project. |

Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Performing Mode Specific Actions
⌈
| Description: | When the BSW Mode Management has finished mode arbitration, then the BSW Mode Management shall |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Use Case：Initialize BSW
*原文标题：Use Case: Initialize BSW*

Initialize BSW
⌈
| Description: | When requested by BSW, then the BSW Mode Management shall initialize BSW modules and RTE. |
|---|---|

Additional Information:

* Typically ECU State Management initializes drivers, OS and BSW Mode Management before BSW Mode Management takes over
* RTE is initialized on each core
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 37. Use Case：Prepare BSW for 关机
*原文标题：Use Case: Prepare BSW for Shutdown*

Prepare BSW for Shutdown
⌈
| Description: | When requested by BSW or application, then the Basic SW Mode Management shall stop the RTE and prepare BSW modules for shutdown. |
|---|---|

Additional Information:

* BSW Mode Management only prepares for shutdown
* ECU State Management actually shuts off ECU or puts it to sleep
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 38. Use Case：Set Communication Modes
*原文标题：Use Case: Set Communication Modes*

Set Communication Modes
⌈
| Description: | When requested by reqistered mode users in application, CDD or BSW, then the Basic SW Mode Management shall request |
|---|---|

* to enable/disable communication
* or to change the communication mode

on supported networks.

Additional Information:

Communication on a network may also be partially startup or shutdown.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 39. Use Case：控制服务 Discovery
*原文标题：Use Case: Control Service Discovery*

Control Service Discovery
⌈
| Description: | When requested by application, then the Basic SW Mode Management shall allow |
|---|---|

* a server/provider of a service

  * to offer/ stop offering a service
  * and to query the service subscribers
* and a client/subscriber of a service

  * to subscribe to a service
  * and to query the subscription status.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 其余 24 章（内容从略，见纯文本全文）

40. References
41. 附录
42. History of 需求
43. Requirement History of this Document According to AUTOSAR Release R26-11
44. Added 需求 in R26-11
45. Changed 需求 in R26-11
46. Deleted 需求 in R26-11
47. Requirement History of this Document According to AUTOSAR Release R25-11
48. Added 需求 in R25-11
49. Changed 需求 in R25-11
50. Deleted 需求 in R25-11
51. Requirement History of this Document According to AUTOSAR Release R24-11
52. Added 需求 in R24-11
53. Changed 需求 in R24-11
54. Deleted 需求 in R24-11
55. Requirement History of this Document According to AUTOSAR Release R23-11
56. Added 需求 in R23-11
57. Changed 需求 in R23-11
58. Deleted 需求 in R23-11
59. Requirement History of this Document According to AUTOSAR Release R22-11
60. Added 需求 in R22-11
61. Changed 需求 in R22-11
62. Deleted 需求 in R22-11
63. Tracegroups
