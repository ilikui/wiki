# Explanation of Application Interfaces of the Body and Comfort Domain (`AIBodyAndComfort`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 268 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_AIBodyAndComfort_268\AUTOSAR_CP_EXP_AIBodyAndComfort.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_AIBodyAndComfort_268\AUTOSAR_CP_EXP_AIBodyAndComfort.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_AIBodyAndComfort_268\zzgen\CP_EXP_AIBodyAndComfort.complete.txt`

## 文档简介

This document explains all design decisions that lead to the AI contents.

In case of inconsistencies between pictures and explanations in this document and the AI, the information in the AI has to be considered as prior.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document explains all design decisions that lead to the AI contents.

In case of inconsistencies between pictures and explanations in this document and the AI, the information in the AI has to be considered as prior.

### 2. Terms and 概念 of the Body- and Comfort Domain的描述
*原文标题：Description of Terms and Concepts of the Body- and Comfort Domain*

### 3. 目标
*原文标题：Objectives*

This design standard is the AUTOSAR-architecture (RTE-view) for Software Compositions described in chapter 4. It provides a decomposition into SW-Cs and a list of standardized interfaces related to each functionality (like Interior Lights).

This decomposition is limited in granularity to sensor components, adapter components, the core functionality and actuator components.

The intent is for the decomposition to get not to atomic SW-Cs but to "purchasable" SW-Cs (as long as these are not sensor/actuator SW-Cs they are realized as AUTOSAR compositions for formal reasons). These SW-Cs will be obtained as a unit so that all the internal (and hence not AUTOSAR standardized) interfaces are controlled by a single vendor, even if there are SW-Cs within the bought unit that reside on different ECUs. All interfaces between SW-Cs from different vendors should be standardized.

In addition, all ports are described, showing their AUTOSAR data qualities. Invalidation (where needed) is defined as in-band invalidation. Init values are specified where appropriate e.g. "off", "idle", "undefined", "unknown", ... Where standardization is in-appropriate, recommendations may be provided.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| ATWS | Anti-Theft Warning System |
| BBS | Battery Backed Sensor |
| CHLH | Coming Home/Leaving Home |
| CL | Central Locking |
| DC | Defrost Control |
| ECM | Engine Control Module |
| GBS | Glass Brake Sensor |
| HVAC | Heating, Ventilation and Air Conditioning |
| IMMO | Immobilizer |
| INCL | Inclination sensor |
| ISC | Interior Scanner |
| LED | Light-Emitting Diode |
| LHFD | Left Hand Front Door |
| LHRD | Left Hand Rear Door |
| PASE | Passive Entry |
| PATS | PATS: Passive Alarm Theft Sensor |
| RF | Radio Frequency |
| RHFD | Right Hand Front Door |
| RHRD | Right Hand Rear Door |
| RKE | Remote Keyless Entry |
| SA | Seat Adjustment |
| SC | Seat Climatization |

Additionally, please also refer to  for explanation of commonly used terms and abbreviations within AUTOSAR.

### 5. Decomposition 概述
*原文标题：Decomposition Overview*

This section gives an overview of the top level de-composition of the Body and Comfort Domain.

The function components from Body and Comfort domain are identified according to the controlled group of actuators (motors, bulbs and other special devices) and type of operations (car access, lighting, comfort, acoustic signalling and other indirect operations like Terminal clamp control or battery monitoring (future function)). These function components can be grouped also in different ways considering other criterias.

The defined subsystems do not always mean a strong link between the included function components. The subsystems are also linked between them by a set of interfaces. For example the Access subsystem is strongly linked with a part of the Visibility subsystem.

There is a considerable complexity of interconnections inside body domain but also a set of interfaces are provided and required from other domains.

### 6. 软件 Compositions and Components的描述
*原文标题：Description of Software Compositions and Components*

The following Software Compositions and Components were identified in the body- and comfort domain.

### 7. Wiper/Washer

The WiperWasher software component group controls the wiper and washer functionality of a car. WiperWasher receives driver wishes, senses the environment and controls the behaviour of the wipers and washers of a car.

Components related to WiperWasher are described in the following sections.

ExteriorLight provides information about the outside brightness for the Rain Sensing component.

TerminalClampControl and BatteryMonitor (future function) provide information about the current state of the vehicle.

Rain Sensing, consists of the Rain Sensor and an adaptor component that calculates the wiping requests, considering output from ExteriorLight and other environmental and vehicle-related information.

WasherFluidTank senses the Level of the Washer Fluid container(s), it is instantiated two times to represent the front and rear washer tank.

EnableDisableWiperWasher is an adaptation component that manages the enabling of wiper washer functionality according to vehicle specific needs.

HMI contains all sensor (and switch) components that detect the drivers demands related to WiperWasher.

WiperWasherManager provides the core functionality.

Washer is an actuator component.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Rain sensing

This section explains the SW-component rain sensing. The following figure gives insight into the decomposition of the SW-composition rain sensing.

Rain sensing can be split up to the basic RainSensor, which delivers some basic information about the detected rain that can be used to calculate / evaluate the need for automatic front wiping.

In the above figure this information is exchanged via the port RainAmountStatus(RainAmntSts). As this information is strongly dependent on the used technology, the type of the data-element is currently not binding.

AutoWipingEvaluator calculates / evaluates the request for automatic front wiping. It takes several additional environmental information into account, including temperature, brightness, speed, wiper/washer information.

### 9. Mirror Adjustment & Tinting

The mirror adjustment and tinting controls the manual and automatic adjustment of the exterior or interior mirrors of the car, respectively, the tinting level of the mirrors based on the outside brightness intensity.

The functionality has two independent decompositions, one for adjustment and one for tinting. The link between them is the mirror positions and it's movement status.

The functionality needs information from other body domain SW-Cs and also interdomain information.

### 10. Mirror Adjustment

Components related to MirrorAdjustment are bundled in several Blocks.

Inside MirrorAdjustManager the core functionality is implemented.

HMI contains the Mirror Manual Adjustment, detecting the user's demands for manual adjustment and the Mirror Auto Adjustment, the panel with the memory buttons. It detects the user's demands to store and recall mirror positions.

The Profile manager uses information from the key transponder, keyless access and remote key to generate the current driver profile identification.

The Remote key indicates a user request from the remote key and this may trigger the Auto adjust user request adapter to perform a store or recall.

The Keyless access indicates a user request from keyless access and this may trigger the Auto adjust user request adapter to perform a store or recall.

Inter domain encapsulates SW-Cs that exchange cross-domain information such as selected gear position, operational mode or energy management. Through Inter Domain Interfaces inter-domain status information is exchanged.

Central locking status is received from the Central Locking component.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Mirror Tinting

Components related to Mirror tinting are bundled in several Blocks.

Inside Tinting Manager the core functionality is implemented.

Based on the information of the Environment Sensing Component, the Tinting Value Manager Component calculates the desired tinting value using the outside brightness information.

The Inter domain, HMI and Mirror Adjustment Component provide information about the necessity of automatic tinting.

The Mirror Tinting Actuator executes the demands of the Tinting Manager and delivers TintingStatus information back to the Manager.

### 12. Interior Light

The InteriorLight software component group controls the interior light functionality of a car. InteriorLight receives driver wishes, senses the environment and controls the behavior of the interior light sources of a car.

Components related to InteriorLight are bundled in several Blocks. Arrows indicate data flows.

Remark: This decomposition  and  is used for explanation of standardized interfaces

### 13. InteriorLightManager

Inside InteriorLightManager the core functionality is implemented. Comments 'not further broken down' and "Non atomic SW-C" mean that this standardization does not describe it in a more precise level. During the implementation, this SW-C might be further decomposed

### 14. Body Sensors for Interior Light (HMI)

HMI contains all sensor components that detect the drivers demands related to interior light. Please note that "HMI" is used only for non-normative description.

For further decomposition see Figure , whereas usually several SW-C InteriorLightSensor exist. For Doorlocks please refer to Figure .

The purpose of the Sensor SW-C (HMI) is to ensure (as far as needed):

* filtering (debouncing) e.g. calculation of stable output values e.g. by debouncing
* conditioning e.g. calculation of average value
* plausibility check as basis for failure detection (implausible)
* failure detection (but no error-handling/ error-compensation) e.g. valid/not valid

Note: The HMI SW-C listed in Figure  are just a proposition to help the understanding.

### 15. CentralLocking (including Doorlocks) / Remote Key / PASE

Out of Doorlocks the information is generated whether the corresponding door is open or closed as well as information on mechanical door lock(s). For further details see also separate chapter Central Locking.

Driver requests to lock or unlock the car might also be provided by Remote Key. Interior light uses only exterior requests (i.e. issued outside of the car) and not internal requests (such as emergency locking requests).

Also there is information received from PASE in order to be able to switch on (off) interior lights when a person with PaseIdCard is near the car (leaves the car).

Note, that interior light may also use the actual door locking status for certain use cases (auto-relocking event starts interior light activity). Reflecting the lock state to the driver is not an intended feature of this standardized interior light.

### 16. Exterior Light

Other blocks like ExteriorLight provide some information as well as Environment Sensing (e.g. Light Sensor) which provides information about the outside brightness.

For further details on the above mentioned functionalities see also separate chapter Exterior Light.

### 17. Anti-Theft-System

One interfaces is provided also by this body and comfort functionalitiy. For further details on Anti-Theft-System see according chapter.

### 18. ProfileManager

It is supposed only a single source coordinates profile Ids from certain personalization sources (remote key, keyless etc.). The ProfileManager is NOT in scope of this document.

### 19. TerminalClampControl

The status of ignition key is provided by TerminalClampControl.

### 20. Inter-Domain 接口
*原文标题：Inter-Domain Interfaces*

Through Inter-Domain-Interfaces inter-domain status information is exchanged.

### 21. Battery Monitor (Future 功能)
*原文标题：Battery Monitor (Future function)*

Battery Monitor (futur function) provides information about Battery Voltage.

### 22. Actuators

(including HazardWarningSwitchIllumination): All interior light actuators are described by the LightSource components where  is a placeholder for individual light sources (e.g. CbnLiFrntCen as Cabinlight "Front-Middle") or a group of light sources (e.g. LiForReadingGroup). See next chapter for a list of possible effective names.

It might be decomposed into a light actuator type independent and a light actuator type dependent component, where light actuator types include conventional bulbs, LEDs or other decompositions, which allow the switching of lights on a more "generic" level.

The actuator also covers low level functionalities (e.g. measures to prevent flickering due to voltage variations) as well as over-/under voltage compensation. Also hardware dependencies are considered (e.g. is PWM possible for corresponding actuator). Status feedback is generated (only operational/defective; no detailed diagnosis). Actuator SW-Cs do not consider system restrictions (e.g. restrictions due to me-chanical reasons regarding activation of several actuators). This should be task of a separate Actuator-Adapter SW-C.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. List of interior light sources - groups of light sources

The list below defines individual light sources (like CbnLiFrntRi) as well as functional groups (e.g. CbnLiGroup) as well as virtual groups (see IntrLiGroup0..15):

CabinLights: CbnLiFrntRi (front_right), CbnLiFrntLe (front_left), CbnLiFrntCen (front_center e.g. in the middle), CbnLiMidRi (middle_right), CbnLiMidLe (middle_left), CbnLiMidCen (middle_center), CbnLiReRi (rear_right), CbnLiReLe (rear_left), CbnLiReCen (rear_center)

TrunkCompartmentLights: TrCmptmtLiCen (light_middle), TrCmptmtLiLoRi (lower_right), TrCmptmtLiLoLe (lower_left), TrCmptmtLiUpRi (upper_right), TrCmptmtLiUpLe (upper_left)

FootwellLights: FootwellLiFrntLe (front_left), FootwellLiFrntCen (front_middle), FootwellLiFrntRi (front_right), FootwellLiMidLe (middle_left), FootwellLiMidCen (middle_middle), FootwellLiMidRi (middle_right), FootwellLiReLe (rear_left), FootwellLiReCen (rear_middle), FootwellLiReRi (rear_right)

AshtrayLights: AshtrayLiFrntLe (front_left), AshtrayLiFrntCen (front_middle), AshtrayLiFrntRi (front_right), AshtrayLiMidLe (middle_left), AshtrayLiMidCen (middle_middle), AshtrayLiMidRi (middle_right), AshtrayLiReLe (rear_left), AshtrayLiReCen (rear_middle), AshtrayLiReRi (rear_right)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 范围定义 / possible future enhancements
*原文标题：Scope definition / possible future enhancements*

The intension of this chapter is to clarify what's considered in this standardization document. Also known deficiencies and/or possible future enhancements can be listed here.

### 25. Signal qualifiers：
*原文标题：Signal qualifiers:*

There is only inband invalidation used (see according definitions in AI). Please note that safe communication frame (e.g. measures related to safe transmission of data) are considered as implementation related and not scope of this document.

HINT: "inband invalidation" means that there is a special value "invalid" used additional to the "regular" enum-values (where invalidation is necessary). This is in order to minimize the bitsize of the according interfaces. Contrary to that "outband invalidation" would be useless for the according interfaces because a data element is supposed to be either invalid or to have a "valid" value.

### 26. 时序：
*原文标题：Timing:*

Scope of this document is VFB level. Thus no timing requirements neither on vehicle function level nor system / implementation level are under consideration.

### 27. Variant 处理：
*原文标题：Variant handling:*

Scope of this document is VFB level. Variant handling is regarded as project specific (e.g. implementation specific).

### 28. Seat Adjustment

The SeatAdjustment software component group controls the seat adjustment functionality of a car. SeatAdjustment receives driver wishes, senses the environment and controls the behavior of the SeatAdjustment actuators in a car.

### 29. Seat Configurations

The following table lists the allowed seat names that are defined for use in AUTOSAR systems. The table also shows the name text that should be used for constructing port and interface references in place of the place holder "".

| Seat Name | Reference Text |
|---|---|
| Driver Seat | DrvrSeat |
| Front Passenger Seat | PassSeat |
| Front Central Seat | SeatRowFirstMid |
| Left Middle Seat | SeatRowSecLe |
| Centre Middle Seat | SeatRowSecMid |
| Right Middle Seat | SeatRowSecRi |
| Left Rear Seat | SeatRowThrdLe |
| Centre Rear Seat | SeatRowThrdMid |
| Right Rear Seat | SeatRowThrdRi |

The following table lists the allowed axis names that are defined for use in AUTOSAR systems. The table also shows the name text that should be used for constructing port and interface references in place of the place holder "".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Seat Adjustment Decomposition

The Seat Adjustment sub-system is shown in Figure .

Software Components related to SeatAdjustment are described in the following text. Arrows indicate data flows.

The usage of placeholder in brackets [...] for some port names, means that for these ports there can be multiple instantiation; in particular:

* DoorLockFrnt can be instantiated to Driver door and Passenger door;
* DoorLockRe can be instantiated to Rear Left and Right doors.

Please note:

# individual signals per seat - e.g. see interface SeatAdjMan1:

  SW-C MmedTelmHmi (HMI) has one port per seat: PanAdjManOfDrvrSeat, PanAdjManOfPassSeat, ...

  each SW-C SeatAdjMgr has one port PanAdjMan

  e.g. MmedTelmHmi/PanAdjManOfDrvrSeat -> DrvrSeat/SeatAdjMgr/PanAdjMan, MmedTelmHmi/PanAdjManOfPassSeat -> PassSeat/SeatAdjMgr/PanAdjMan, ...
# individual signals per seat - e.g. see interface SeatMoveSts1:

  each SW-C SeatAdjMgr has one port SeatMoveSts

  each SW-C MgrOfSeatAdjAutReqByUsr has one port SeatMoveSts ATTENTION: There is an one-to-one connection between SW-C's SeatAdjMgr and MgrOfSeatAdjAutReqByUsr of EACH SEAT

  e.g. DrvrSeat/SeatAdjMgr/SeatMoveSts -> DrvrSeat/MgrOfDrvSeatAdjAutReqByUsr/SeatMoveSts,

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Body Sensors for Seat Adjustement (HMI)

HMI contains all sensor components that detect the drivers demands related to seat adjustement. Please note that "HMI" is used only for non-normative description.

MassgAdjReq1 enables the user to choose one or more massage programs from a massage control panel (e.g. a switchpack or touch screen menu) and inform the /SeatAdjustManager. There may be specific "massage actuators" in addition to the defined seat axis. These actuators are not named here.

MassgAdjSts1 provides status of the active massage functions back to the HMI to inform the user of the current mode of operation.

SeatAdjMan1 enables the user to activate the seat actuator using a manual movement control panel (e.g. a switchpack or touch screen menu) and inform the /SeatAdjustManager. This information additionally goes to the /ManagerOfSeatAdjustAutoRequestByUser so that manual operations can be used to over-ride memory adjustment operations.

SeatAdjAut1 indicates the user's demands to store and recall seat positions.

EntryReq1 detects the users demand for access to the rear seats. This may result in a front seat moving forward. This feature may also be known as auto glide.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Doors, KeylessAccess and RemoteKey

The Central Locking component provides information about operation of vehicle accesses (doors and locks) that might indicate a need to prepare seats for occupation. The ProfileManager uses information from the key transponder, keyless access and remote key to generate the current driver profile identification ProfPenSts1.

If the trigger_source (that is an input from the user to do somenthing) inside the interface LockgCenSts1 indicates a user request from the remote key or keyless entry, this may trigger the /ManagerOfSeatAdjustAutoRequestByUser to perform a store or recall.

The CentralLocking indicates a user request from central locking system and this may trigger the /ManagerOfSeatAdjustAutoRequestByUser to perform a store or recall.

The DoorSts1 indicates whether the door associated with the seat has been opened or closed and this can be used to trigger seat movements or to prevent movement (Note: for R4.0.3 DoorStsOfDrvrDoorLock, DoorStsOfPassDoorLock, DoorStsOfDoorLockReLe and DoorStsOfDoorLockReRi are received for each seat also if in a real SWC implementation only the related DoorSts is really used).

### 33. Inter-DomainInterfaces

Inter-DomainInterfaces encapsulates interfaces to SW-Cs that exchange cross-domain information such as vehicle speed, vehicle longitudinal and lateral accelerations, operational modes or energy management status. Inter-domain status information is exchanged through Inter-Domain-Interfaces.

### 34. AutoAdjustUserRequestManager

There is a /ManagerOfSeatAdjustAutoRequestByUser associated with each seat that requires seat adjustment.

The /ManagerOfSeatAdjustAutoRequestByUser combines and prioritizes all the information from above and requests seat movements and storing of memory positions.

### 35. SeatAxisActuatorAdapter

There is a //SeatAxisActuatorAdapter associated with each axis in every seat that requires seat adjustment control. //SeatAxisActuatorAdapter knows about the electrical and mechanical constraints of a single axis of the seat. It converts requests from the SeatAdjustManager into commands to a single axis (actuator). It compares the current position of the seat axis with the desired position.

### 36. SeatAxisActuator

There is a //SeatAxisActuator associated with each axis in every seat that requires seat adjustment control.

//SeatAxisActuator is the software representation of a mechanical actuator. It is able to move one axis of the seat in a certain direction. It also detects the position and speed of the axis.

### 37. SeatAxisMemoryAdapter

There is a //SeatAxisMemoryAdapter associated with each axis in every seat that requires seat adjustment control.

//SeatAxisMemoryAdapter is responsible for the actual memory position storage and recall. This may be local or global storage depending on the personalization control strategy.

### 38. SeatAdjustManager

Finally, the /SeatAdjustManager is the core of the seat adjustment implementation. There is a /SeatAdjustManager associated with each seat that requires seat adjustment. This component coordinates all the various requests and triggers into a specific control strategy for a seat. It also ensures that seat adjustment is carried out safely and in accordance with feature functional priorities and behaviors.

### 39. Personalization Issues

It is expected that seat adjustment can be personalized.

Known use cases for personalization of the seat adjustment functionality are, for example:

* Store the preferred seat position of the driver;
* Enable/disable certain seat adjustment functionality (e.g. easy entry).

### 40. 设计 Rationale
*原文标题：Design Rationale*

This design standard is the AUTOSAR-architecture for seat adjustment. It provides a decomposition into SW-Cs and a list of standardized interfaces related to seat adjustment.

The decomposition is limited in granularity to sensor components, adapter components, the core functionality and actuator components. It is not intended to focus only on event driven implementations and the standardization should be also open for "cyclic implementations" sending out information periodically (therefore some interfaces contain an "idle" value by intent).

Additionally, all ports are described together with AUTOSAR agreed data qualities. Invalidation (where needed) is defined as in-band invalidation. Init values are specified where appropriate e.g. "off", "idle", "undefined", "unknown" ... Where standardization is in-appropriate, recommendations may be provided.

The decomposition in this state is good enough to gather a common understanding of interfaces for standardization. A finer granularity would not provide greater ease of standardization, as noted during exterior light standardization.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Central Locking

The CentralLocking software component group controls the central locking functionality of a car. CentralLocking receives driver wishes, senses the environment and controls the behavior of the central locking sources of a car.

### 42. Central Locking Decomposition main 视图
*原文标题：Central Locking Decomposition main view*

Components related to CentralLocking are bundled in several blocks:

### 43. Notes related to CL decomposition：
*原文标题：Notes related to CL decomposition:*

The figure above gives only the main view of the decomposition. For better readability it has been chosen to provide in separate paragraphs the further decomposition of DoorLock SWCs and KeyPadMgr SWC detail of all the possible ports.

So, for a complete decomposition overview of this functionality, please refer also to the further decomposition of DoorLock SWCs and KeyPadMgr SWC ports details provided in the following paragraphs.

Please note that diagnostic interfaces are not part of the graphics.

The usage of placeholder in brackets [...] for some port names, means that for these ports there can be multiple instantiation; in particular:

*  can be instantiated to Driver door and Passenger door;
*  can be instantiated to Rear Left and Right doors.

Note: Rear Lid and BackLite Window have dedicated SWCs with single instantiation.

For the detailed usage of these placeholders, please refer to the further decomposition of DoorLock SWC provided in the following paragraphs.

### 44. Explanation of SW-Cs

### 45. CentralLockingMaster

Inside CentralLockingMaster the core functionality is implemented (not further broken down).

### 46. HMI

HMI contains all other sensor components that detect the drivers demands related to central locking. Please note that "HMI" is used only as non-normative description.

### 47. RemoteKey / Keyless Access

Driver requests to access the car might be provided by RemoteKey or Keyless Access System (including profile information for personalization).

### 48. DoorLock

Out of the doorlocks the information of the doorlock status is generated as well as information on mechanical keys.

Lock-commands as well as commands for pull aids and setting the child-protection-mechanism are also sent to the doors. Same applies for RearLid and Back-liteWindow. See also "mechanical decomposition door" and "mechanical events vs. standardized interfaces" (see below).

### 49. KeyPad 管理器
*原文标题：KeyPad Manager*

Out of the keypad the request to activate the CL-functionality for doors is generated as well as the request to separately activate rear lid.

KeyPad is a single SWC (that could be non-atomic) that provides dedicated ports for front doors, rear doors and rear lid (see figure ).

### 50. GloveBox / Tankflap

Other blocks like Glovebox and TankFlap provide status information and (partially) receive locking commands. There is no use case for engine-hood.

### 51. Intra-Domain-Interfaces

Through Intra-Domain-Interfaces intra-domain information is provided to other body and comfort systems (please note that scope of this section is only central locking).

Examples:

* Comfort open/close functionality is requested from windows as well as sunroof.
* Visual feedback is requested from Blink Master (see separate documentation for ExteriorLight).

### 52. Inter-Domain-Interfaces

Through Inter-Domain-Interfaces inter-domain status information is exchanged.

### 53. ProfileManager

It is supposed only a single source coordinates profile Ids from certain personalization sources (remote key, keyless etc.). The ProfileManager is NOT in scope of this section.

### 54. Further Issues concerning Central Locking

### 55. Personalization

It is supposed that the Central Locking Master is able to be personalizabled.

Known use cases for personalization of central locking functionality are for example:

* "Speedlock": lock all doors at (or above) a certain vehicle speed.
* Selective door opening: open only driver door or open all doors.
* Enable/disable certain central locking functionality (e.g. visual feedback).

### 56. Mechanical decomposition door

### 57. Mechanical actions vs. SWCs 接口 (door only)
*原文标题：Mechanical actions vs. SWCs interfaces (door only)*

The purpose is just to give an idea of relationship between a mechanical action made by the user (on one door) and its "codification" into corresponding signals towards/from the CL Manager passing through the "translation" made by Sensors/Actuators.

Note: This figure does not have punctual correspondence with the detailed decomposition of the functionality already explained in previous paragraphs, so also the Naming Convention is not applied: the names used have only the goal of giving easy comprehension of the information.

### 其余 83 章（内容从略，见纯文本全文）

58. Known Defects
59. Exterior Light
60. 概述 on Exterior Light
61. ExteriorLightManager
62. ExteriorLightAdapter
63. ExteriorLightActuator
64. Body Sensors for Exterior Light (HMI)
65. Other Functionalities
66. ExteriorLightManager
67. Remarks
68. BrakeLight 管理器
69. Flash 管理器
70. Use case descriptions
71. Blink 模式 transitions
72. 时序/同步
73. 时序 information of a blink sequence：
74. Trigger a limited number of sequences：
75. Trigger a continuous blink sequence：
76. Trigger on/off cycles by the Flash 管理器 directly：
77. 示例时序 Use Case
78. Miscellaneous
79. Autolight Adapter
80. Cornering Adapter
81. CHLH Adapter
82. ExteriorLight AdapterFront/Rear/Trailer
83. Exterior Light Actuator
84. Headlamp-Leveling 管理器
85. External 接口
86. ports to AUTOSAR-Services
87. Terminology 定义
88. List of light sources
89. Known Deficiencies
90. Antitheft Warning 系统
91. Alarm triggers
92. Alarm 系统 status indications
93. Alarm States
94. Panic Alarm
95. ATWS decomposition
96. Horn
97. Defrost 控制
98. 简介
99. Sensors and actuators 概述
100. Defrost 控制 Decomposition
101. Terminal Clamp 控制
102. Explanation of SW-Cs
103. Terminal Clamp 管理器
104. Mechanical Key Cylinder
105. SwitchPush
106. PASE
107. Remote Engine Starter
108. Interdomain Power 管理器, Powertrain
109. Operation 模式管理器
110. Use case descriptions
111. Mechanical Cylinder with Accessory
112. Mechanical Cylinder without Accessory
113. Push Start 系统
114. Remote Engine Start 系统
115. Immobilizer
116. Constraints/限制
117. Seat Climatization
118. 简介
119. Seat Climatization Decomposition
120. PASE (PASsive Entry)
121. 简介
122. PASE Decomposition
123. RKE (Remote Keyless Entry)
124. 简介
125. RKE Decomposition
126. KeyRemoteManager：
127. 密码服务
128. KeyDataManagement：
129. Radio Frequency Communication：
130. Convertible 控制
131. 简介
132. Convertible 控制 decomposition
133. BodySensors
134. 简介
135. BodySensors decomposition
136. KeyPad
137. Additional Information (Optional)
138. 相关文档
139. 输入文档与相关标准规范
140. 附录
