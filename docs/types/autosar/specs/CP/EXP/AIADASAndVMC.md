# Explanation of Application Interface of AD/ADAS vehicle motion control (`AIADASAndVMC`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 988 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_AIADASAndVMC_988\AUTOSAR_CP_EXP_AIADASAndVMC.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_AIADASAndVMC_988\AUTOSAR_CP_EXP_AIADASAndVMC.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_AIADASAndVMC_988\zzgen\CP_EXP_AIADASAndVMC.complete.txt`

## 文档简介

This document explains the pattern for architecture of the Vehicle Motion Control Interface and its software components, as well as the design decisions that leads to an update of the Application Interface within Chassis Domain, as depicted in Figure .

The scope of the vehicle control functions in this document is "Implementation of ADAS requirements" only. The document will focus on a recommended signal cascading architecture for ADAS function (particularly for ACC, AEB and LKA functions), for which new SW-Components will be created. For other chassis components, including vehicle stabilization controls (ABS/TCS, etc.), refer to .

The purpose of defining the architecture (functional structure, I/F) in this document is to improve customer convenience in function development and development efficiency in non-competitive areas by achieving the ease of function update/change, the ease of design and verification and the ease of mutual understanding.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document explains the pattern for architecture of the Vehicle Motion Control Interface and its software components, as well as the design decisions that leads to an update of the Application Interface within Chassis Domain, as depicted in Figure .

The scope of the vehicle control functions in this document is "Implementation of ADAS requirements" only. The document will focus on a recommended signal cascading architecture for ADAS function (particularly for ACC, AEB and LKA functions), for which new SW-Components will be created. For other chassis components, including vehicle stabilization controls (ABS/TCS, etc.), refer to .

The purpose of defining the architecture (functional structure, I/F) in this document is to improve customer convenience in function development and development efficiency in non-competitive areas by achieving the ease of function update/change, the ease of design and verification and the ease of mutual understanding.

### 2. Terms and 概念的描述
*原文标题：Description of Terms and Concepts*

This document refers to the formulation of unified Application Interfaces of the Domain Chassis in the frame of a specific pattern implementation of Advanced Driver Assistance Systems (ADAS) with a specific Vehicle Motion Control interface. The results of the Domain Chassis shall be aligned with the other domains, e.g. Body, Powertrain, Occupant and Pedestrian Safety. The Application Interface Table represents a good basis for this alignment and detection of conflicts.

### 3. Axis 系统
*原文标题：Axis System*

The standard coordinate system used by the Chassis Domain refers to the International Standard . Whether a fixed geometry point (e.g. near to the average Centre of Gravity (CoG) of all variants of a vehicle type) is used as a reference point for basic Centre of Gravity has to be decided on project level.

### 4. 定义
*原文标题：Definitions*

### 5. Centre of gravity of passenger car

The car's chassis-fixed coordinate system's origin lies in the middle of the Front Axle (FA) see Figure . The car's centre of gravity is defined as the origin of a chassis-free coordinate system that is positioned relative to the FA coordinate system. The orientations of both these coordinate systems' axes are defined as follows:

With the car moving forward:

* x is positive to the front of the car
* y is positive to the left of the car
* z is positive to the top of the car
* Roll is positive in a left-hand bend, when the car body tips to the right-hand side
* Pitch is positive when a car is braking and the car body tips forward
* Yaw is positive in a left-hand bend

### 6. Polar coordinate 系统
*原文标题：Polar coordinate system*

The polar coordinate system is defined as follows:

* With the vehicle moving forward, \phi is positive in the counter clockwise direction

### 7. Vehicle acceleration/propulsive force direction

Deceleration is expressed as negative value.

### 8. Cant direction

### 9. Steering wheel angle

### 10. Road Variables

### 11. Curvature request

Based on the desired trajectory from vehicle position, calculate corresponding curvature request.

Path curvature request is defined relative to the trajectory on a fixed point, which unless otherwise stated, is the CoG.

### 12. 定义 of the car surroundings
*原文标题：Definition of the car surroundings*

### 13. 缩略语
*原文标题：Acronyms and Abbreviations*

Please also refer to  for explanation of commonly used terms and abbreviations within AUTOSAR.

| Abbreviation / Acronym: | Description: |
|---|---|
| ABS | Antilock Braking System |
| ACC | Adaptive Cruise Control |
| ACL | Acceleration |
| ACT | Actuator |
| ADAS | Advance Driver Assistance System |
| AEB | Autonomous Emergency Braking |
| BAS | Brake Assist |
| BRK | Brake |
| BRWS | Basic Rear Wheel Steering |
| BSTS | Basic Steering Torque Superposition |
| BSAS | Basic Steering Angle Superposition |
| CBC | Cornering Brake Control |
| CoG | Centre of Gravity |
| DAS | Driver Assistance System |
| DTC | Regulation of the Drag Torque |
| EBD | Electronic Brake Force Distribution |
| ECU | Electronic Control Unit |
| EPB | Electronic Parking Brake |
| ESC | Electronic Stability Control |
| FA | Front Axle |
| HDC | Hill Decent Control |
| HHC | Hill Hold Control |
| HMI | Human Machine Interface |
| HW | Hardware |
| I/F | Interface |
| LKA | Lane Keep Assist |
| MGR | Manager |
| NVH | Noise, Vibration, Harshness |
| OEM | Original Equipment Manufacturer |
| PT | Powertrain |
| RA | Rear Axle |
| RSC | Roll Stability Control |
| SR | Situation Recognition |
| SSM | Stand Still Manager/Management |
| STR | Steering |
| SW | Software |
| SW-C | Software Component |
| TCS | Traction Control System |
| VFB | Virtual Function Bus |
| VGR | Variable Ge |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 通用 remarks
*原文标题：General remarks*

### 15. 限制
*原文标题：Limitations*

The logical architectures proposed do not restrict the development or products of companies or organizations participating in AUTOSAR.

### 16. Sensor signals

In ADAS, signals of different processing levels are handled for I/F definition.

* Raw signal: Raw sensor data without pre-processing
* Pre-processed signal: Pre-processed sensor data. Abstraction of sensor hardware
* Fused signal: Several sensor signals are processed to generate a fused signal

Raw signals (raw data) should not be used as standard I/F because they are hardware dependent.

### 17. 功能性 Safety
*原文标题：Functional Safety*

Most ADAS domain signals are considered as relevant to safety. It is assumed that in this document, reliable methods of communication are available. No specification of communication methods is provided in this document.

Dynamic design and safety concepts are not considered in this document. In order to prove that the discussed use cases are safety compliant (in accordance with the definition of , , etc.), studies across all applicable domains will be necessary, and these must be performed at the project level.

### 18. Assumption for ADAS Application

This document applies the architecture to three ADAS Applications (ACC, AEB, and LKA).

Assumptions for these three applications are shown below:

* ACC: Applies to all vehicle speed ranges including standstill condition.
* AEB: Does not include restarting after stopping.
* LKA: Applies to lane keeping assist functions on highways or motorways in ideal grip condition (e.g., low wheel slips, low accelerations, exact condition that qualify as "ideal grip" can be project specific if necessary).

### 19. 相关文档
*原文标题：Related Documentation*

is also used as a reference for this document.

### 20. 架构概述
*原文标题：Architecture Overview*

### 21. 功能性结构
*原文标题：Functional Structure*

This document defines the vehicle control functions for ADAS in four layers. (Thick bordered frame in Figure ).

# ADAS Application
# ADAS-MGR
# Vehicle-MGR
# Domain Actuators (+ related Domain Sensors)

A MGR layer is set for each ADAS and actuator system and the I/F between each layer is standardized in order to loosen the relationship between the ADAS Applications and Actuators, and reduce the effect that adding or changing functions for one element has on another. For example, the effect of adding or changing a function for the ADAS system can be absorbed in the ADAS-MGR layer. ADAS-MGR can communicate with Vehicle-MGR via the standardized I/F, which reduces the effects on subsequent functions. Also, it can make it easier to add and/or change actuators without drastically affecting the Vehicle-MGR; the reduction in interdependency can also simplify functional safety analysis of the system.

The whole ADAS architecture consists of the four layers above, ADAS Sensor layer and Fusion layer. Examples of ADAS Sensors include vision sensors (e.g., camera), radar, and LiDAR.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. ADAS Application

The functions of the ADAS Application are shown in Figure  and Table .

Function
Based on a driver assist request via a user interface, such as a switch and/or recognition sensor information, each ADAS Application requests as individual kinematic plan (longitudinal acceleration/deceleration, Curvature request, etc.) for complying with regulation as well as securing safety and/or comfort.
Each ADAS Application performs failure detection and function stop judgement, manages the internal state, and takes actions according to the internal state.
Each ADAS Application acts based on status of the ADAS Application selected by ADAS-MGR.

### 23. ADAS-MGR

The functions of the ADAS-MGR are shown in Figure  and Table .

Function
ADAS-MGR arbitrates individual requested kinematic plans from each ADAS Application and integrates ADAS kinematic plan for securing safety and/or comfort.
ADAS-MGR requests Vehicle-MGR for arbitration mode of the requested kinematic plan (including preparations for the kinematic plan) and driver operations.
ADAS-MGR judges the override by the drivers acceleration/braking/steering maneuver based on the vehicle state, and informs each ADAS Application of the results of arbitration of the kinematic plan request and the selected ADAS Application.
ADAS-MGR provides ADAS Application with judgement element info for its halt. At this time, information from various Sensors and Actuators that cause halt (e.g. seating sensor information, engine reliability information, etc.) is abstracted into information that does not depend on a specific system configuration (e.g. occupant state, drive system state, etc.), and is communicated to ADAS Applications.(* Supplementary explanation of this function is described in Chapter  Appendix A: Outage of ADAS Application)

### 24. Vehicle-MGR

The functions of the Vehicle-MGR are shown in Figure  and Table .

Function
Vehicle-MGR calculates/distributes the motion request (driving, braking, steering) for the Actuator system in order to realize the kinematic plan requested by ADAS-MGR.
Vehicle-MGR requests each Actuator for the arbitration mode between the motion request and driver operation request.
Vehicle-MGR informs ADAS-MGR of the vehicle status based on each Actuator system status and momentum sensing information that have been processed if needed.

### 25. Actuator

Table  shows a functional description of an Actuator system.

Function
Actuator system realizes vehicle motion request (driving, braking, steering) based on driver operation.
Actuator system realizes vehicle motion request (driving, braking, steering) from Vehicle-MGR.
Each Actuator system realizes vehicle motion request based on arbitration request from Vehicle-MGR.
Actuator system notifies Vehicle-MGR of ON/OFF information about driver operation (accelerator pedal, brake pedal, holding steering wheel).
Actuator system notifies Vehicle-MGR of status of Actuator system (driving, braking, steering).
Actuator system notifies Vehicle-MGR of information about vehicle momentum.

The Actuator system consists of following sub-systems.

a) Powertrain

b) Brake

c) Steering

### 26. 接口
*原文标题：Interface*

For details, please refer to Chapter  Appendix B: Interface list.

### 27. Scalability

Use cases of applying this architecture to ACC, AEB, and LKA are shown below. The I/F or functions to be used can be selected to enable the scalability of this architecture even when combining multiple ADAS Applications or adding Applications in the future.

### 28. ACC

Figure  shows a use case that uses ACC only.

### 29. AEB

Figure  shows a use case that uses AEB only.

### 30. LKA

Figure  shows a use case that uses LKA only.

### 31. the Chassis Domain 软件 Compositions and Components for VMC 架构 implementation的描述
*原文标题：Description of the Chassis Domain Software Compositions and Components for VMC Architecture implementation*

### 32. VMC 架构 as new SW-Components
*原文标题：VMC Architecture as new SW-Components*

The implementation of ADAS functionalities within the Chassis Domain was already introduced through the Application Interfaces (Figure  and Figure ).

In addition, as mentioned in the example of , several structures can be discussed to arrange the global architecture of the functional components, as in following example (Figure ):

The understanding of the VMC architecture should also be interpreted as another Chassis Domain structure, for which each layer of the VMC architecture can or cannot be composed of other existing Chassis Domain SW-Components.

The scope of this document is limited only to the definition of the interfaces between the SW-Components that comprise the VMC architecture: ADAS, AMG, VMG and (existing) Actuators/Sensors. Therefore, the content of each components is left up to project convenience and the way the existing SW-Components is integrated in VMC architecture is not defined in this document. However, in case the VMC architecture is implemented along the existing SW-Components in AI Chassis domain, it will be needed to:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 附录
*原文标题：Appendix*

### 34. 附录 A：Outage of ADAS Application
*原文标题：Appendix A: Outage of ADAS Application*

### 35. Premise

Various ADAS Applications are required to stop (or degenerate) its functionality in the event of an abnormality in the ADAS system or under situation that occupants cannot safely use the ADAS function, and so on. Since the stop judgment conditions and stop timing of ADAS Applications differ depending on each application, it is necessary to secure flexibility in application design. From this point of view, this document assumes that the stop judgment function of the ADAS Application is placed in each ADAS Application, and the information providing function that is the judgment material for the stop judgment is placed in the ADAS-MGR layer.

### 36. Classification of information regarding ADAS Application outages

Figure  shows an example of classification of information related to ADAS Application halt.

### 37. 接口 signal listed in 接口 list
*原文标题：Interface signal listed in Interface list*

The interface signals based on the classification examples in Figure  are shown in Interface list for those shown in Figure .

### 38. 接口 signals not covered by the 描述
*原文标题：Interface signals not covered by the description*

The Interface signals associated with the information classifications excluded from the Interface table in Figure  were judged that it was not appropriate to define the standard Interface signal in this Working Group. This is because they are out of scope of this document (see Chapter ) and ADAS Application's detail behavior differs depending on each OEM company in spite of the same ADAS Application (e.g., ACC, AEB, LKA). However, from the viewpoint of facilitating the addition and modification of functions, which is the aim of this document, it is recommended for OEM companies to define Interface signals based on the same viewpoint within OEM even for excluded information classifications. Below is an example of the definition of Interface signals based on the information classification of "Occupants state".

### 39. 附录 B：接口 list
*原文标题：Appendix B: Interface list*
