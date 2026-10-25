# Explanation of Application Interfaces of Occupant and Pedestrian Safety Systems Domain (`AIOccupantAndPedestrianSafety`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 271 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_AIOccupantAndPedestrianSafety_271\AUTOSAR_CP_EXP_AIOccupantAndPedestrianSafety.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_AIOccupantAndPedestrianSafety_271\AUTOSAR_CP_EXP_AIOccupantAndPedestrianSafety.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_AIOccupantAndPedestrianSafety_271\zzgen\CP_EXP_AIOccupantAndPedestrianSafety.complete.txt`

## 文档简介

The field of Occupant and Pedestrian Safety aims at protecting both vehicle occupants as well as pedestrians in the eventuality of a crash. In this sense, "crash" is a rather broad term used to categorized situations in which the vehicle is either colliding with an obstacle (frontally, laterally, rear), or with a pedestrian frontally or even against the ground, as an example in case of a rollover situation.

The notion of "crash" or "accident" shapes the scope of OPS making it an event driven domain. For example, the event of a vehicle side collision with a light pole would trigger an SRS to deploy a lateral airbag to prevent the occupant being hit by a vehicle structure, like a door or the C-Pillar, which is under deformation due to the struck.

The event oriented nature of OPS systems make it suitable to model the domain as a chain of phases, each of which is entered after a determined event is triggered. The timeline in the next section aims at providing a graphical representation of the main OPS phases and their corresponding events.

## 章节详细内容

### 1. 目的 of this Document
*原文标题：Purpose of this Document*

This document provides background information such as design decisions that lead to the Application Interfaces definition standardized for the domain "Occupant and Pedestrian Safety Systems".

### 2. References

### 3. Terms and 概念的描述
*原文标题：Description of Terms and Concepts*

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| AB | Airbag |
| AI | Application Interface |
| COOP | Critical Out of Position |
| eCall | Emergency Call |
| HMI | Human Machine Interface |
| IF | Interface |
| OD | Occupant Detection |
| OOP | Out Of Position |
| OPS | Occupant and Pedestrian Safety |
| OPSS | OPS Systems |
| ORA | Occupant Restraint Activation |
| PCD | Pedestrian Crash Detection |
| PPA | Pedestrian Protection Actuator Activation |
| SBR | Seat Belt Reminder |
| SRS | Safety Restraint System |
| SWC | Software Component |
| SWCo | Software Composition |
| VCD | Vehicle Crash Detection |
| ROD | Rollover Crash Detection |
| POD | Pitchover Crash Detection |
| VH | Variant Handling concept |
| SP | Sensor Pool |
| AP | Actuator Pool |
| CS | Crash Status |
| ACC | Adaptive Cruise Controll |
| RSM | Restraint System Monitoring |
| VCP | Vehicle Crash Prediction |
| PCP | Pedestrian Crash Prediction |
| OPC | Occupant Pre Conditioning |
| RSP | Restraint System Pre conditioning |
| PPP | Pedestrian Protection system Pre conditioning |
| VCD | Vehicle Crash Detection |
| PCI | Post Crash Information |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 简介 into domain "Occupant and Pedestrian Safety"
*原文标题：Introduction into domain "Occupant and Pedestrian Safety"*

The field of Occupant and Pedestrian Safety aims at protecting both vehicle occupants as well as pedestrians in the eventuality of a crash. In this sense, "crash" is a rather broad term used to categorized situations in which the vehicle is either colliding with an obstacle (frontally, laterally, rear), or with a pedestrian frontally or even against the ground, as an example in case of a rollover situation.

The notion of "crash" or "accident" shapes the scope of OPS making it an event driven domain. For example, the event of a vehicle side collision with a light pole would trigger an SRS to deploy a lateral airbag to prevent the occupant being hit by a vehicle structure, like a door or the C-Pillar, which is under deformation due to the struck.

The event oriented nature of OPS systems make it suitable to model the domain as a chain of phases, each of which is entered after a determined event is triggered. The timeline in the next section aims at providing a graphical representation of the main OPS phases and their corresponding events.

### 6. OPS Phases (Event Timeline)

Figure  shows a time line where the most important OPS phases are summarized. A Sensor Signal curve is used representatively to depict different crash phases. Each of the OPS phases is modelled as consisting of two sub-phases which provide further detail about the vehicle situation regarding to a crash event situation.

This OPS phases are available for other domains to know in which phase of the event the vehicle is. A simple Post-Crash / Pre-crash classification is generally sufficent for other domains, however a more refine definition was proposed into previous version of Explenatory document.

Figure  provides the correspondances between thoses two definitions.

### 7. Pre-Crash Phase

The pre-Crash phases can be divided into more refined sub-phases:

Normal Driving: The Vehicle is in a condition with ignition ON (either in still stand or moving) and there is a very low probability of a crash. Sub-phases are:

* Normal driving: in this sub-state no significant probability of crash has been detected
* Normal driving with small risk of crash: in this sub-state there is a small probability for crash, but still the vehicle contact-based crash sensors have not detected the event. In this phase a minimum of crash risk is present, an example would be situations where a vehicle Stability Control mechanism is actuating.

Pre-Crash: The Vehicle is in a situation out of normal driving conditions, where there exists an indication that the probability of a crash is greater than a certain threshold. Reversible actuators are activated usually in this phase e.g. to bring occupants into a correct seating position for optimal protection by SRS in case of a following crash. Sub-phases are:

* Still avoidable crash: a pre-crash system has detected a hazard of collision but still evaluates a chance for avoiding a crash, e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Post-Crash Phases：
*原文标题：Post-Crash Phases:*

In-Crash: Determined collision In the In-Crash Determined collision situation usually the non-reversible actuators are activated. A crash event is further categorized according to its severity, which can range from light (e.g. activate the belt retractor) up to high (e.g. activate second stage of an airbag).

Post-Crash: This state is entered after an In-Crash situation that will be followed by:

* Return to normal driving conditions in case of light severity In-Crash events, thus providing the opportunity to handle multiple crash events
* Reaching Stand Still after an In-Crash situation
* After Restraint actuators have been activated

Sub-phases:

* Post-deployment: first actions are taken after a crash situation has been confirmed. Example actions could be the automatic unlocking of the vehicle doors
* Post-crash: the vehicle has reached again stand still, thus place Emergency Call

### 9. Domain 建模
*原文标题：Domain Modeling*

The scope of the present domain at hand is limited to the Passive Safety Functions.

Other functions, like those from Driver Assistance systems e.g. ACC or Active Safety systems like ESC are part of Chassis domain and not included here. However, information provided from those systems can be used within the OPSS domain.

Figure  provides a graphical representation of the OPSS Domain. The Domain Model takes into account on the one hand the event- driven nature as depicted in Figure  as well as the AUTOSAR categorization for SW Components "Application" (named here "Function"), "Sensor" and "Actuator".

### 10. Reference 系统
*原文标题：Reference System*

In order to ensure consistent interpretation of the Interface Elements for the OPSS Domain, a series of state of the art reference systems have been adopted. Following is a short summary of them.

### 11. Reference Coordinate 系统
*原文标题：Reference Coordinate System*

The coordinate reference system used in the OPSS is shown in Figure :

This Coordinate Reference System is of relative nature, as opposed to alternative fixed-point Coordinate Systems, like a Center of Gravity-based system. For OPS domain, the primary relevance is the ability to determine in the first place the direction of vehicle deformation, while on the second place its corresponding severity. For example, the direction of vehicle deformation in a Front Crash event would determine that the possible Restraint System Actuators to get activated are only the Belt Retractors and Airbags; while the severity of the impact, which can be measured in terms of vehicle deformation, would determine which concrete Belt Retractors and / or Airbags should be deployed.

### 12. Naming convention for Seat Positions

For the naming of the seat positions, e.g. for the purpose of the Seat Belt Reminder function, or for the interpretation of the Actuator Positions in the vehicle, the reference system depicted in Figure  has been adopted. The convention provides for a unique naming of the second and third seat rows in the vehicle, but allows some flexibility in the naming of the first row. The flexibility for the first row is required in the OPS Domain, as important functionalities are often to be coupled to the Driver or Passenger Side, and should always stay consistent with the corresponding occupant position in Right or Left Steering vehicles, like e.g. driver specific actuators; while other functionalities might be dependent on an absolute vehicle side, i.e. left or right, regardless of a vehicle being Right or Left Steering.

### 13. 架构概述
*原文标题：Architecture Overview*

In order to standardize Application Interfaces, the OPS Domain Model has been split into exemplary SW Compositions, following the principles as detailed above Figure ).

The SW Compositions from Figure  can be interconnected among each other as well as with other AUTOSAR Domains (e.g. Chassis Domain). An overview of these connections is depicted in Figure . The SWCo's with grey background are not included in the current standardization, but will be standardized in the future. A special case is the Occupant Detection SWCo, where some interfaces are already defined within this release while others will be standardized in the future.

### 14. Variant 处理
*原文标题：Variant Handling*

The OPS Autosar IF's as explained in this document represent the most typical applications of state of the art restraint systems. This does not imply that any OPS system implementing Autosar IF's will have exactly the same IF blueprint as any other system. In the practice there will be many variants reflecting the requirements posed to the implementation of the particular restraint system. In order to handle these variants, the Autosar metamodel provides a modelling concept that makes it feasible to model such diversity in the interface elements. Please refer to  for more information.

For OPS systems there are no fixed variants for the current release, but this might be extended or implemented in the future.

### 15. 软件 Compositions and Components的描述
*原文标题：Description of Software Compositions and Components*

Following is a detailed view of the SWCo depicted on Figure .

### 16. Sensor Pool (SWCo 001 SP)

The OPS Domain implements its detection function based on state of the art sensing technologies for the In-Crash functions and advanced sensing for the Normal Driving and Pre-Crash functions.

For In-Crash functions, the sensor technologies and its potential locations can be seen on Figure . The location naming adopted is valid for both left and right side steering wheel vehicles.

The Sensors are modelled as SWC's that belong to a Sensor Pool SW-Composition. For acceleration measuring sensors, following groups can be identified for standardization:

* Acceleration Internal: this is a group of sensors built-in into a Control Unit located typically in a well protected position in the interior of the vehicle, e.g. the vehicle tunnel (please refer to Figure ).

  * Acceleration Low Range: typical measuring range around +/-10g
  * Acceleration Mid Range: typical measuring range around +/-100g
  * Acceleration Central: this is the default type of sensors, with a typical measuring range around +/-200 g.
* Acceleration External: this is the group of sensors mounted in the periphery of the vehicle. They can be either mono axial or biaxial, e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Actuator Pool (SWCo 002 AP)

Actuators are restraint means aimed at either absorbing crash energy or limiting the free motion of the person during crash events. Depending on the functionality of the SWC, there will be different actuators employed. For example, for Pedestrian Protection, the actuators are external to the vehicle and take the form of airbags or other deformable elements, like a motor hood lifting device (please refer Figure ).

On Figure  it can be found an overview of common restraint actuators and their typical mounting location. The location naming adopted is valid for both left and right side steering wheel vehicles.

All actuators are optional, i.e. the actual actuator setup for a concrete Occupant and Pedestrian Protection Safety System is project-specific.

Depending on the actuator's physical capabilities, the respective activation interface is quite simple (e.g. Boolean for activation (yes/no)). For more complex restraint devices, there might be additional control signals e.g. special adjustment control interfaces for belt load limitation at predefined force levels or airbag inflation control interfaces based on volume or stiffness target values.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Crash Status (SWCo 003 CS)

Based on the OPS phases as described on  a crash event is modeled in a simplified way by means of sub-phases of crash activity. The CS SWCo is responsible for collecting the crash relevant information coming from the relevant sub systems of the vehicle and merging that information into an Autosar IF. The CS SWCo detailed here basically consists of a provider port with the following data:

| CrashSt1 Value | State | Possible action (example) |
|---|---|---|
| 1 | Pre-Crash | None |
| 2 | Post-Crash | Automatic door unlocking Emergency call Warning light |

Note: Previous version of Explanatory document was proposing a more refined definition. Figure , provides the correspondances between thoses two definitions.

This SWCo 003 CS will be part of a future release.

### 19. Seat Belt Reminder (SWCo 102 SBR)

The Seat Belt Reminder functionality is split into three components for the purpose of standardization. The logic behind the modularization is the representation of the functionality of warning when a passenger is not buckled, provided occupant detection is available for that seating position, as well as also informing whether the seat belt is buckled or not for the rest of the seating places (those without occupant detection). In addition, the SBR has a "Warn Control" component which takes care on conditioning the information for the Human Machine Interface elements for realization of the indication/warning functionality.

As can be seen in Figure , the SBR calculation and SBR belt state SWC's share a number of common interface signals. The main difference between these two SWC's, from the interface point of view, is the usage of Occupant Presence State for the SBR calculation for seats with Occupant Sensing Systems or SBR Belt State Sensing for seats without an Occupant Sensing System.

### 20. SWC Seat Belt Reminder Calculation

This SWC is responsible for the evaluation of the status of the Belt Lock in accordance with the information of Occupant Presence, as well as other conditions related to the vehicle motion state, e.g. warn only when the vehicle is being driven and a passenger is not belted.

### 21. SWC Seat Belt Reminder Belt 状态
*原文标题：SWC Seat Belt Reminder Belt State*

This SWC is responsible for detecting the Belt Lock state for seat places where no Occupant Presence information is available, as well as evaluating other conditions related to the vehicle motion state, e.g. display only when the vehicle is being driven and some seat positions have changed the buckle state.

### 22. SWC Seat Belt Reminder Warn 控制
*原文标题：SWC Seat Belt Reminder Warn Control*

This SWC is responsible for conditioning the information of the SBR SWCo's for Calculation and Belt State for the further usage in Human Machine Interface SWCo's.

### 23. Vehicle Crash 检测 (SWCo 301 VCD)
*原文标题：Vehicle Crash Detection (SWCo 301 VCD)*

The VCD SWCo has the main goal of detecting vehicle collision events arising on the collision directions:

* Front, e.g. Front Left, Front Middle, Front Right
* Rear, e.g. Rear Left, Rear Middle, Rear Right; and
* Lateral (Side), e.g. Left Middle, Right Forward, etc.

The crash detection function implemented by VCD bases mainly on the information delivered by the sensors of the Sensor Pool SWCo (please refer to chapter section ). In addition, VCD can receive and use further information delivered by other sources in the vehicle, typical case are Vehicle Dynamics signals made available by Chassis components like an Electronic Stability Control device, or Environmental Information like e.g. collision object angle delivered by a forward looking Driver Assistance System.

In order to detect a crash event, VCD provides at least one of the following interfaces:

* Crash Severity: this is an estimation of the intensity of a crash event, which depends on a number of factors, for example relative velocity between a vehicle and a crash partner, vehicle mass ratio between a vehicle and its crash partner, general crashworthiness behavior of the vehicle, among others.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Roll- and Pitch- over Crash 检测 (SWCo's 302 ROD, 303 POD)
*原文标题：Roll- and Pitch- over Crash Detection (SWCo's 302 ROD, 303 POD)*

The ROD and POD SWCo's are components that aim at the detection of strong rotatory events in which the vehicle turns itself around the X- (rollover) or Y- axis (pitchover).

The main input for the ROD and POD functions is the information delivered by sensors measuring the vehicle rotatory velocity, as summarized on Chapter . By means of this type of sensors, the SWCo will determine if a critical inclination angle will be reached and/or surpassed, which will result in the vehicle turning around the measurement axis. To support such determination, ROD and POD utilize additional sensors like low- and mid-g lateral and longitudinal acceleration sensors mounted on the vehicle center of gravity.

ROD and POD SWCo's provide information relative to the rotation situation, e.g. whether the vehicle turns left/right for rollover, or forward(downward) / backward(upward) for pitchover. See  for more details.

### 25. Occupant Restraint 系统 Activation (SWCo 304 ORA)
*原文标题：Occupant Restraint System Activation (SWCo 304 ORA)*

The ORA SWCo is responsible for the Deployment Strategy of the restraint systems in the vehicle, based in the first place on the information provided by the Crash Detection function VCD and the RollOver/PitchOver detection function (ROD/POD), and on the second place based on additional information, like Occupant Status information (e.g. buckled / not buckled) provided by an Occupant Detection SWCo (please refer to section ). Furthermore, ORA can also process external incoming information coming like Vehicle Dynamics information or Environmental Information delivered by other components in the vehicle, like e.g. Chassis or Driver Assistance Components.

The Deployment Strategy is composed of the elements:

* Decision on which concrete Actuators from the Actuator Pool (SWCo 002 AP) are to be activated (deployed), please refer to .
* Activation timing for the selected actuators, i.e. decision of the point of time at which a determined actuator should be deployed, as well as definition of the sequence of activation over time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Pedestrian Protection Crash 检测 (SWCo 305 PCD)
*原文标题：Pedestrian Protection Crash Detection (SWCo 305 PCD)*

The Pedestrian Crash Detection is done based on information delivered by state of the art sensors, which reside in the Sensor Pool SWco (please refer to chapter section ). The sensors are placed in several locations in the vehicle, as shown in Figure .

Following the same principle as the counterpart SWCo for Occupant Safety VCD, the PCD SWCo calculates at least one of the following interfaces:

* Pedestrian Crash Severity: this is an estimation of the intensity of a crash event, which depends on a number of factors, like velocity of the vehicle, vehicle mass, pedestrian crashworthiness behavior of the vehicle (e.g. stiff or soft Front End), among others.

  In general terms, the Crash Severity is a value that ranges from "Low" for crash events that imply low impact energy transferred by the vehicle to the Pedestrian, to "Very High" for those events that lead to a potential high injury of the Pedestrian.
* Pedestrian Crash Impact Location: this is an estimation of the geometrical region in the vehicle Front where the crash event takes place, e.g. from -100% to +100% covering the vehicle front.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Pedestrian Protection 系统 Activation (SWCo 306 PPA)
*原文标题：Pedestrian Protection System Activation (SWCo 306 PPA)*

The PPA SWCo has the task to implement the deployment strategy of the Pedestrian Protection Actuators based on the information provided by the PCD SWCo. Please refer to Figure  for an overview of the Pedestrian Actuator SWCo's.

Additional to the PCD information, the PPA SWCo can evaluate additional vehicle dynamic information, like longitudinal velocity.

### 28. Occupant 检测 (SWCo 101 OD)
*原文标题：Occupant Detection (SWCo 101 OD)*

The OD SWCo has the main goal of detecting the presence of an Occupant on a seat place in the vehicle. Furthermore, OD does a classification of the Occupant into one of several Presence Status, e.g. "Seat empty", "Child Seat", etc. Please refer to  for a complete list of Presence Status classification elements.

The occupant detection function performed by OD bases mainly on the information delivered by Occupant Presence Sensors, which are not in the scope neither of this explanatory document nor of the main AI Specification document. For the purpose of completeness, the OD SWCo was only partly modeled in the previously mentioned documents, in order to be able to provide a more complete view of the VCD and ORA SWCo's. Given this general limitation about the incompleteness of the modeling of the OD SWCo, its current purpose is to:

* Classify the Occupant of any seat in the vehicle into a class, e.g. "Child Seat Forward Face", "empty", "Adult 95% Person", etc;
* Determine the Occupant Weight on any seat in the vehicle;
* Determine the Occupant Out-of-Position seating position, e.g. Occupant in Critical Out of Position (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Additional Information

### 30. Detailed Explanation of the Sensor Pool Port Names

Following is a list of all Port Names of the Sensor Pool, please refer to Figure  and to

| SWC Name (Provider) | Sensor Port Name | Sensor Type | Sensing Direction | Location | Detailed Location |
|---|---|---|---|---|---|
| SnsrAOnBmpAtFrntLe | AOnBmpAtFrntLe1 | Acceleration | Longitudinal | Bumper | Front Left |
| SnsrAOnBmpAtFrntMidLe | AOnBmpAtFrntMidLe1 | Acceleration | Longitudinal | Bumper | Front Mid Left |
| SnsrAOnBmpAtFrntMid | AOnBmpAtFrntMid1 | Acceleration | Longitudinal | Bumper | Front Middle |
| SnsrAOnBmpAtFrntMidRi | AOnBmpAtFrntMidRi1 | Acceleration | Longitudinal | Bumper | Front Mid Right |
| SnsrAOnBmpAtFrntRi | AOnBmpAtFrntRi1 | Acceleration | Longitudinal | Bumper | Front Right |
| SnsrAAtFrntLe | ALgtAtFrntLe1 | Acceleration | Longitudinal | Front End | Front Left |
| SnsrAAtFrntMid | ALgtAtFrntMid1 | Acceleration | Longitudinal | Front End | Front Mid |
| SnsrAAtFrntRi | ALgtAtFrntRi1 | Acceleration | Longitudinal | Front End | Front Right |
| SnsrAOnDoorAtFrntLe | ALatOnDoorAtFrntLe1 | Acceleration | Lateral | Front Door | Left |
| SnsrAOnDoorAtFrntRi | ALatOnDoorAtFrntRi1 | Acceleration | Lateral | Front Door | Right |
| SnsrAOnDoorAtReLe | ALatOnDoorAtReLe1 | Acceleration | Lateral | Rear Door | Left |
| SnsrAOnDoorAtReRi | A |  |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Detailed Explanation of the Actuator Pool Port Names.

Following is a list of all Port Names of the Actuator Pool, please refer to Figure  and to

| Actuator Port Name | Interface Type | Actuator Type | Location | Detailed Location | Purpose |
|---|---|---|---|---|---|
| ActvtOfActrAtHoodForPedProtn | Activation | e.g. Motor Hood | Front End |  | Pedestrian Protection |
| ActvtOfActrAtApilLeForPedProtn | Activation | e.g. Airbag | A Pillar |  | Pedestrian Protection |
| ActvtOfActrAtApilRiForPedProtn | Activation | e.g. Airbag | A Pillar |  | Pedestrian Protection |
| ActvtOfActrAtRoofForPedProtn | Activation | e.g. Airbag | Roof |  | Pedestrian Protection |
| ActvtOfActrAtBmpForPedProtn | Activation | e.g. Airbag | Bumper |  | Pedestrian Protection |
| CtrlOfActrAtApilLeForPedProtn | Control | e.g. Motor Hood | Front End |  | Pedestrian Protection |
| CtrlOfActrAtApilLeForPedProtn | Control | e.g. Airbag | A Pillar |  | Pedestrian Protection |
| CtrlOfActrAtApilRiForPedProtn | Control | e.g. Airbag | A Pillar |  | Pedestrian Protection |
| CtrlOfActrAtRoofForPedProtn | Control | e.g. Airbag | Roof |  | Pedestrian Protection |
| CtrlOfActrAtBmpForPedProtn | Control | e.g. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 附录
*原文标题：Appendix*
