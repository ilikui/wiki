# Explanation of Application Interfaces of the Chassis Domain (`AIChassis`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 270 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_AIChassis_270\AUTOSAR_CP_EXP_AIChassis.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_AIChassis_270\AUTOSAR_CP_EXP_AIChassis.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_AIChassis_270\zzgen\CP_EXP_AIChassis.complete.txt`

## 文档简介

This document explains all design decisions that lead to the Application Interface Table  contents relevant to the Chassis Domain.

## 章节详细内容

### 1. 目的 of this Document
*原文标题：Purpose of this Document*

This document explains all design decisions that lead to the Application Interface Table  contents relevant to the Chassis Domain.

### 2. terms and 概念的描述
*原文标题：Description of terms and concepts*

This document refers to the formulation of unified Application Inter-faces of the Domain Chassis. The goal is to define and publish functional catalogues of all unified interfaces and functions. This includes interfaces for passenger cars and trucks and also covers driver assistance systems (DAS). The results of the Domain Chassis shall be aligned with the other domains, e.g. Body, Powertrain, Occupant and Pedestrian Safety. The Application Interface Table represents a good basis for this alignment and detection of conflicts.

### 3. Axis 系统
*原文标题：Axis System*

The standard coordinate system used by the Chassis Domain refers to the International Standard ISO 8855 .

Whether a fixed geometry point (e.g. near to the average Centre of Gravity (CoG) of all variants of a vehicle type) is used as a reference point for basic Centre of Gravity has to be decided on project level.

### 4. 定义
*原文标题：Definitions*

### 5. Methodology for Optimization of 接口定义 in the Chassis Domain
*原文标题：Methodology for Optimization of Interface Definition in the Chassis Domain*

### 6. Intended optimization

Harmonize the use of keywords in names & descriptions for:

* indication, state, request, mode, consolidate, target, confirmation, demand, command, information, ..
* and how to differentiate 'fault', 'failure', 'error', ' state' and 'mode'

### 7. 概述 of realization possibilities for "flow" and "状态"
*原文标题：Overview of realization possibilities for "flow" and "state"*

### 8. 控制 Flow versus Signal Flow
*原文标题：Control Flow versus Signal Flow*

### 9. 定义 / Explanations
*原文标题：Definitions / Explanations*

### 10. 状态
*原文标题：State*

* The present status of a system or entity:
* State (physics) (list of 8 definitions), particularly in thermodynamics, statistical physics, and dynamical systems and chaos theory
* State (computer science), a unique configuration of information in a program or machine

### 11. Modus

* a "working mode", set by commutation via diagnosis, driver or other Example: suspension => Comfort or Sport Modes

* an adjustment of a procedure : can be sometimes considered as request Example: reset of TPMS function => it's more a request than a mode

### 12. 模式
*原文标题：Mode*

* Kind, manner of s.th.

### 13. Indication

* A signal that informs external systems of a relevant state of the system providing the signal. In general, the final destination of the signal is expected to be the driver or other operator.

### 14. Target

* Set point, set value that an automatic control system, will aim to reach

### 15. Request

* Default wording for the target value of a controller

### 16. Meaning of "active"：
*原文标题：Meaning of "active":*

* it is on => leave as "active"

### 17. Meaning of "intervention"：
*原文标题：Meaning of "intervention":*

* active intervention at the moment => changed to "intervention" (to be used when a function can be on, but not intervening) Keyword: Intv

### 18. Fault：
*原文标题：Fault:*

* cause / reason
* ISO/WD 26262-1 : A fault is the cause of an error; it can either be systematic or random. NOTE Do not use: defect, mistake.

### 19. Failure：
*原文标题：Failure:*

* means doesn't work, but is not necessarily the reason
* ISO/WD 26262-1 : A failure is the inability (of a component or system) to perform a required function.

### 20. 错误：
*原文标题：Error:*

* temporary / permanent, same as failure
* ISO/WD 26262-1 : An error is the discrepancy between a computed, observed or measured value or condition and the specified correct value.

Decision:

* Use failure or fault instead of error based on the definition above
* Differentiation from State? => Failure is a state!

### 21. Naming consistency rules

### 22. Rules to optimize descriptions (for ports, PortInterfaces & 数据 Elements, -Types)
*原文标题：Rules to optimize descriptions (for ports, PortInterfaces & Data Elements, -Types)*

* Start with a Noun (avoid words "information, indicates, ...")
* It must be consistent with the LongName (e.g. if "Mode" is in the LongName it should also be in the description)
* Neither sending nor receiving components should be named (like SSM, ESC). The purpose can be named (e.g. for display to ..)
* Positive example taken from AI Table: LongName: Steering Control Tuning Request Description: Driver's requested steering controller tune As opposed to (bad example): Indicates HMI's request for controller tune to "Steer"- SWC.

### 23. Centre of gravity of passenger car

The car's chassis-fixed coordinate system's origin lies in the middle of the Front Axle (FA) see Figure . The car's centre of gravity is defined as the origin of a chassis-free coordinate-system that is positioned relative to the FA co-ordinate system. The orientations of both these co-ordinate systems' axes are defined as follows:

With the car moving forward:

* x is positive to the front of the car.
* y is positive to the left of the car.
* z is positive to the top of the car.
* Roll is positive in a left-hand bend, when the car body tips to the right-hand side.
* Pitch is positive when a car is braking and the car body tips forward.
* Yaw is positive in a left-hand bend.

### 24. 定义 of the car surroundings (e.g. Used for ACC)
*原文标题：Definition of the car surroundings (e.g. Used for ACC)*

The car's surrounding for ACC and predicted course are defined as Figure  and Figure .

The Object list for ACC is defined in the following table.

| Record Type Name | Long Name | Description | Name | Comment |
|---|---|---|---|---|
| ObjData1 | ObjectData | Cluster of object attributes detected by surroundings sensors. This information is used e.g. for Adaptive Cruise Control (ACC), but is not limited to this use case only | DplLgt | <Core> Distance between the sensor and the object. |
| ^ | ^ | ^ | DplLat | <Core> Lateral distance between the center of the sensor and the object. |
| ^ | ^ | ^ | SpdLgtRel | <Core> Longitudinal speed difference between the ego vehicle and the object. |
| ^ | ^ | ^ | DynPpty | <Core> Status which indicates the dynamic property of the object (e.g. stationary,moving, etc). |

Standing: has never been detected moving.

Stopped: has been detected moving, but is stationary now.

Moving: object has absolute speed in any direction.

The definition is made according to the earth-fixed axis system as defined in ISO 8855 .
| ^ | ^ | ^ | StOfObjMeasd | <Core> Status which indicates whether the object was measured in current cycle, or only tracked. |
|---|---|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation: | Description: |
|---|---|
| ABS | Antilock Braking System |
| ACC | Adaptive Cruise Control |
| BAS | Brake Assist |
| BRWS | Basic Rear Wheel Steering |
| BSTS | Basic Steering Torque Superposition |
| BSAS | Basic Steering Angle Superposition |
| CBC | Cornering Brake Control |
| CoG | Center of Gravity |
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
| NVH | Noise, Vibration, Harshness |
| OEM | Original Equipment Manufacturer |
| RA | Rear Axle |
| RSC | Roll Stability Control |
| SR | Situation Recognition |
| SSM | Stand Still Manager/Management |
| SW | Software |
| SW-C | Software Component |
| TCS | Transaction Control System |
| VFB | Virtual Function Bus |
| VGR | Variable Gear Ratio |
| VLC | Vehicle Longitudinal Control |
| VM | Vehicle Model |
| YRC | Yaw Rate Control |

### 26. References

### 27. 通用 remarks
*原文标题：General remarks*

The definitions of SW-Composition and SW-Component are given in .

### 28. Differences between SW-Components and ECUs

The SW-Components defined below are not to be misunderstood with ECU functionalities.

For example, an ESC ECU may contain the Esc SW-Component and other components like Ssm SW-Component, SteervehStabyCtrl SW-Component, etc.

### 29. 功能性 safety
*原文标题：Functional safety*

* Most of the chassis domain signals are considered as safety relevant. It is assumed that in AUTOSAR, reliable methods of communication are available. No specification of reliable communication is done in the Chassis Domain.
* Note that these values are meant as minimum requirements, i.e. optimization within the communication layer is possible.
* Diagnostics, timing, and safety concepts haven't been considered yet in the Chassis Domain. In order to prove that the discussed use cases are safety compliant (in accordance to the definition of the upcoming ISO 26262), a joint discussion across all application domains will be necessary in the future.
* There is no safety concept provided for active chassis systems. This has to be done on project level. This means that the specified interfaces have to be checked to fulfil the safety requirements on each specific project.

### 30. Concept of core-, conditional- and optional- ports

Within the Chassis Domain, port attributes "core", "cond" and "opt" have been defined, which indicate whether a provider or receiver port is seen today to be more a core or optional interface for the SW-C or its usage is depending on additional conditions. As all interfaces can be used in different configurations and there is no mandatory usage of single interfaces (see also chapter ), this is for information purpose only. The attribute is given in the EXCEL version of the Application Interface Table . This attribute is not used from all Application SW domains and will not appear in the ARXML-File of the Application Interfaces. The values of the port attribute are:

* Core provider and receiver ports
* Conditional provider and receiver ports
* Optional provider and receiver ports

This definition is not consistent with the document `AUTOSAR_Powertrain_AI_Explanation`. Information concerning Core/Cond/optional attributes in the Application Interface Table  shall be ignored in the R4.0.

### 31. Concept of sensors

In the Chassis Domain, a concept of different signal processing levels has been defined for the chassis Application Interface definitions.

Remark1: Chassis Domain used only sender receiver interfaces for sensors.

Remark2: Complex device drivers can also be used to transmit sensor signals.

### 32. internal 状态 sensors
*原文标题：internal state sensors*

* Raw signal Raw sensor data w/o preprocessing. Not to be used as an interface since these raw signals are hardware dependent. For example YawRate and PitchRate.

* Base signal Pre-processed sensor data. Model-free. Abstraction of sensor hardware. For example YawRate and PitchRate.

* Standard signal Derived from Base signal(s) according to open AUTOSAR specification (Filtering, offset compensation, model-based plausibility check, etc.). The SW-Compositions should provide standard signals from their sensor information to other SW- Compositions in order to avoid duplication of signal processing algorithms. Please refer to the Application Interface Table  for definition of standard signals. For example YawRate and PitchRate.

* Fused signal Several sensor signals are processed to derive the fused signal. For example vehicle speed or body side slip.

### 33. Surrounding sensors

Only fused signals are standardized. This value is related to the physical output of any used sensors. For example Object list.

### 34. 限制
*原文标题：Limitations*

There are some fundamental limitations. These limitations can be listed as follows:

* The objective of the Application Interface Table  is not to make any software architecture proposal. Any architecture shown on any of the AUTOSAR documents are only used for clarification and have to be treated as "not binding".
* Interfaces are defined on vehicle related physical values like torques or forces, and not on actuator specific interfaces like current or PWM (Pulse Width Modulation) duty cycle.

### 35. 架构概述
*原文标题：Architecture Overview*

In the following, a rough explanation of the Chassis Domain is given in the context of the other AUTOSAR Application Domains - Body Electronics, Powertrain, Occupant and Pedestrian Safety and Multimedia, Telematics and HMI.

The task of Chassis Domain is focused on data description of functional domain Chassis within the AUTOSAR Application Layer.

The SW-Components of the Chassis Domain are shown. These SW-Components may communicate between each other or with other domains, like Body Electronics, Powertrain, Occupant and Pedestrian Safety, HMI, or the basic software. In order to define the Application Interfaces independently of their physical implementation, the Virtual Function Bus (VFB) serves as an abstraction of the AUTOSAR Software Components' interconnections, see .

An example of a Chassis Domain structure built from these SW-Components is given in Figure . Based on this structure, the Application Interfaces for single SW-Components have been defined. This structure is an example among many other possible structures. Therefore, this structure is intended to be scalable and different configurations can be derived from this structure.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. the Chassis Domain 软件 Compositions and Components的描述
*原文标题：Description of the Chassis Domain Software Compositions and Components*

The Chassis Domain contains the following SW-Compositions and Components:

| SW-Composition | Component |
|---|---|
| CrsCtrlAndAcc | Cruise Control and Adaptive Cruise Control |
| Esc | Electronic Stability Control (formerly known as 'ESP') |
| Ssm | Stand-still Manager |
| Epb | Electronic Parking Brake |
| Vlc | Vehicle Longitudinal Control |
| Rsc | Roll-Stability Control |
| Steer | Steering System |
| SteerDrvrAsscSys | Steering Driver Assistance System (DAS) |
| SteerVehStabyCtrl | Steering Vehicle Stabilizing Control |
| Susp | Suspension System |
| TirePMon | Tire Pressure Monitoring System |
| DtTqDistbn | Drivetrain Torque Distribution (formerly known as 'AWD') |
| SurrndgsSnsr | Surroundings Sensor |
| ChassisSnsr | Chassis Sensor |
| PrkgAid | Parking Aid |

### 37. 软件 Composition CrsCtrlAndAcc (Cruise 控制 and Adaptive Cruise 控制)
*原文标题：Software Composition CrsCtrlAndAcc (Cruise Control and Adaptive Cruise Control)*

The SW-Composition CrsCtrlAndAcc controls the vehicle velocity and distance to vehicles or other obstacles in front of the vehicle down to and from a reference speed until standstill. The used sensor signals can for instance be derived out of a sensor (e.g. radar, lidar or camera). The output of CrsCtrlAndAcc SW-Composition is acceleration command values to Vlc SW-C (ACC definition as in ISO 15622). Stand-alone free cruise control (without follow control) is also considered in the CrsCtrlAndAcc SW-Composition for the current AUTOSAR release. It is located in CrsCtrlAndAcc SW-Composition in the Chassis Domain rather than within the Powertrain Domain.

In the current AUTOSAR release, the essential SW-Component which provides information relevant to preceding traffic participants to SW-Composition CrsCtrlAndAcc is the SW-C SurrndgsSnsr, see section .

CrsCtrlAndAcc SW-Composition is decomposed into SW-Components:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. AccSnsrDataFusion (ACC Sensor 数据 Fusion)
*原文标题：AccSnsrDataFusion (ACC Sensor Data Fusion)*

This SW-Component has a task to carry out multiple sensor fusion which consolidates all the input information from the SW-C SurrndgsSnsr if several surroundings sensors are involved.

### 39. AccObjTarSeln (ACC Object Target Selection)

The SW-C AccObjTarSeln has the role to select ACC relevant target object(s) and their attributes, which are necessary to control vehicle velocity and the distance to the vehicle in front of the sensing vehicle. Note that ACC relevant target can be several objects. The tasks of this SW-C consist of, for example:

* Determination of ACC relevant attributes (e.g. Lane probability)
* Determination of ACC relevant object(s)

### 40. CrsCtrlFree (Free Cruise 控制)
*原文标题：CrsCtrlFree (Free Cruise Control)*

The SW-C CrsCtrlFree has the role to calculate the target control value of vehicle acceleration according to the set speed provided by the HMI. The task of this SW-C is, e.g.:

* Determination of target acceleration for free cruise control

In the case of the ACC feature, the output of this SW-Component goes to the SW-C FolwCtrlAndAArbn, and is arbitrated. In the case of the stand-alone free cruise control feature, the output of this component directly goes to the SW-C Vlc (Vehicle Longitudinal Control).

### 41. FolwCtrlAndAArbn (Follow 控制 and Acceleration Arbitration)
*原文标题：FolwCtrlAndAArbn (Follow Control and Acceleration Arbitration)*

The SW-C FolwCtrlAndAArbn has the role to calculate target control value of vehicle acceleration according to the behaviour of ACC relevant object(s) in front of the sensing vehicle. The other role is to arbitrate the target acceleration values, which are provided from the following control functionality and from the free cruise control functionality. The tasks to be done in this SW-Component are, for example:

* Determination of target acceleration for follow control and standstill
* Arbitration of the follow control and free cruise control

Note that arbitration between control and driver intervention is handled by the SW-C Vlc.

### 42. CrsCtrlAndAccStCtrl (Cruise 控制 and ACC 状态 Machine)
*原文标题：CrsCtrlAndAccStCtrl (Cruise Control and ACC State Machine)*

The SW-C CrsCtrlAndAccStCtrl has the role to determine the system control mode, which includes system activation status and HMI related information. Since the functionality of this SW-Component may depend on each OEM, AUTOSAR does not standardize its functionality and interfaces beyond the ones defined in the ISO standard 15622. The functionality includes diagnostics or failure detection of the system. The tasks of this SW-C consist of, for example:

* Interpretation of driver input through instruments
* Determination of state machine
* Diagnostics

### 43. CrsCtrlAndAccObsvrForVehSt (Cruise 控制 and ACC Vehicle 状态 Observer)
*原文标题：CrsCtrlAndAccObsvrForVehSt (Cruise Control and ACC Vehicle State Observer)*

The SW-C CrsCtrlAndAccObsvrForVehSt has a role to provide information relevant to the own vehicle behaviour. The tasks of this SW-Component consist of, e.g.:

* Prediction of vehicle course based on yaw rate signal
* Calculation of ACC specific vehicle dynamics data (e.g. yaw rate, vehicle longitudinal speed, and so on)

Note that the predicted vehicle course may be corrected by the SW-C SurrndgsSnsr or the SW-C AccSnsrDataFusion in order to achieve better accuracy with object information.

### 44. 软件组件 Esc (Electronic Stability 控制)
*原文标题：Software Component Esc (Electronic Stability Control)*

The SW-C Esc controls the stability of vehicle motion on the ground plane, by controlling the wheels' longitudinal slip, vehicle yaw rate and vehicle side slip. The used sensor signals among others can for instance be derived out of a sensor cluster, delivering for example yaw rate and lateral acceleration.

In the current AUTOSAR release the SW-C Esc controls applied wheel individual braking forces and/or the total powertrain torque.

The SW-C Esc is comprised of at least the following sub-functions, as also shown in:

* ABS Antilock Braking System
* TCS Traction Control System
* EBD Electronic Brake Force Distribution
* DTC Regulation of the Drag Torque (all of these four controlling the longitudinal slip)
* YRC Yaw Rate Control
* VM Vehicle Model
* SR Situation Recognition
* actuator related driver assistance functions (due to performance, NVH reasons) e.g.

  * BAS Brake Assist
  * HDC Hill Decent Control
  * HHC Hill Hold Control
  * CBC Cornering Brake Control
  * ...
* arbitration of the ESC-internal controllers and inputs to the actuator SW
* the actuator SW (HW driver)

### 45. 软件组件 Ssm (Stand Still 管理器)
*原文标题：Software Component Ssm (Stand Still Manager)*

The SW-Component Ssm manages stand still and supports driver during drive off. It also keeps the vehicle parked (long term, e.g. without a driver in the car, ignition off) and decelerates vehicle under driver request. To achieve this, it relies on the Esc SW-C (service brake) and the Epb SW-C (Parking Brake) by sending them braking requests.

The motivation to create this Ssm SW-C comes from the fact that on vehicles, these "SSM functions" may be included either in the ESC ECU or the EPB ECU.

### 46. 软件组件 Epb (Electronic Parking Brake)
*原文标题：Software Component Epb (Electronic Parking Brake)*

The SW-C Epb controls the parking brake actuator. Its functions are:

* Realizing the requests from Ssm by controlling the EPB actuator.
* Interpretation of the driver's wish for the Chassis Domain when pushing the EPB button.

Current market implementations of the SW-C Epb are comprised of 3 main versions:

EPB stand-alone: EPB does not work in conjunction with ESC; minimal number of interfaces are used to avoid conflicts.

EPB master-ESC slave: the EPB unit controls the ESC as an actuator.

ESC master-EPB slave: the ESC controls the EPB actuator; some backup modes are implemented at EPB Actuator unit in case of ESC fault.

The AUTOSAR definition of EPB/ESC interfaces supports all 3 variants.

Table  shows an overview of features that can be realized by typical EPB configurations. All conclusions derived from the following table that are inconsistent with the Application Interface Table  content should not be considered. This table is just presented here as an illustration.

| Feature | Feature Description | Configuration | < | < |
|---|---|---|---|---|
| ^ | ^ | I | II | III |
| ^ | ^ | EPB/ESC Cooperation | EPB stand-alone |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. 软件组件 Vlc (Vehicle Longitudinal 控制)
*原文标题：Software Component Vlc (Vehicle Longitudinal Control)*

In the current release, the SW-C Vlc gets the longitudinal acceleration command from the SW-C CrsCtrlAndAcc and distributes torque-commands to the powertrain and/or brake-system to achieve this longitudinal acceleration command.

### 48. 软件组件 Rsc (Roll Stability 控制)
*原文标题：Software Component Rsc (Roll Stability Control)*

The goal of the Rsc SW-C is to prevent rollover of the vehicle. For that, it controls the vehicle roll motion, i.e. control of body roll angle, by reducing the lateral forces at the tyres' contact patches. The reduction of these forces can be realized by requesting brake torques from the Esc SW-C and/or by requesting a powertrain torque from the Powertrain Domain via the Esc SW-C.

### 49. 软件组件 Steer (Steering 系统)
*原文标题：Software Component Steer (Steering System)*

The three main functions of the Steer SW-C (each one of them to be achieved by a specific actuator) are:

* Basic Steering Torque Superposition (BSTS): It provides steer torque to support the driver in steering manoeuvres. This is the assistance torque, i.e. power steer assist or torque overlay function.
* Basic Steering Angle Superposition (BSAS): It provides additional front steer angle to the driver's steering wheel angle to support the driver in steering manoeuvres. This comprises VGR function (Variable Gear Ratio) and "Lead Lag" compensation functions.
* Basic Rear Wheel Steering (BRWS): It generates rear road wheel steer angles to support the driver in steering manoeuvres.

The conversion between pinion angle and the road wheel angle is part of this Steer SW-C. This road wheel angle is provided to other SW-Cs, e.g. Esc SW- C. The Steer SW-C receives requests (either angle or torque requests) from high level steering functions described below. The Steer SW-C arbitrates and dispatches the requests to the different steering actuators, as shown in Figure .

A possible physical implementation of this architecture can be seen in Figure  below.

### 50. 软件组件 SteerDrvrAsscSys (Steering 驱动 Assistance 系统)
*原文标题：Software Component SteerDrvrAsscSys (Steering Driver Assistance System)*

In the current release, the SteerDrvrAsscSys SW-C is a place-holder for high- level vehicle comfort functions which send requests to the Steer SW-C. The nature of these requests (angle or torque) depends on the steering system(s) onboard the vehicle.

Examples of these high-level steering driver assistance system functions are:

* Lane Keeping
* Parking Aid
* Haptic Feedback Request

### 51. 软件组件 SteerVehStabyCtrl (Steering Vehicle Stabilizing 控制)
*原文标题：Software Component SteerVehStabyCtrl (Steering Vehicle Stabilizing Control)*

In the current release, the SW-C SteerVehStabyCtrl is an additional function to the ESC stabilizing system, which acts on the active steering actuators

* superposition steering angle actuator (front and/or rear axle)
* superposition steering torque actuator (front axle)

The intention is to improve the vehicle stability in a more comfortable way than the ESC internal YRC in special driving situations:

* Oversteering support
* Split-\mu braking support

Because the functionality in detail depends on the actuator capabilities, which differ from superposition steering angle and torque actuators, the following descriptions of the use cases is organized according to the used actuators.

### 52. Superposition steering angle actuation

The intention of using superposition steering angle actuator is to improve the vehicle stability in a more comfortable way than the ESC internal YRC by reducing the driver workload in stabilizing the vehicle in special driving situations:

* Oversteering support:

  * The oversteering control function computes a steering angle request for automatic countersteering, when it detects an oversteering situation.
  * The function stabilizes the vehicle according to the driver intend and the physical limitations by using the superposition steering angle device.
  * An oversteering situation is detected from the difference between target yaw rate and measured yaw rate.
  * Since steering interventions are more comfortable for the driver, they can be started earlier than brake interventions by ESC and unstable driving situations are controlled easier. This is done as unperceivable to the driver as possible and with a minimized loss of velocity.
* Split-\mu support

  * When braking or accelerating on a road with friction differences between left and right side (split-\mu), an unwanted yaw torque is generated by the unequal wheel forces.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 53. Superposition steering torque actuation

The intention of using superposition steering torque actuation is to improve the vehicle stability in a more comfortable way than the ESC internal YRC and increase the safety feeling of the driver especially in special driving situations:

* Over steering

  * The over steering control function computes a steering torque command to support the driver in counter steering, when it detects an over steering situation. An over steering situation is detected e.g. from the difference between target yaw rate and measured yaw rate.
  * Since steering interventions are more comfortable for the driver, they can be started earlier than brake interventions and unstable driving situations are controlled more sophisticated.
* Split-\mu support

  * When braking or acceleration on a road with friction differences between left and right side (split-\mu), the driver has to counter steer against the yaw torque generated by the unequal wheel forces. The split-\mu control function computes a steering torque request to support the driver in counter steering.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 54. 软件组件 Susp (Suspension 系统)
*原文标题：Software Component Susp (Suspension System)*

The SW-C Susp controls besides others:

* The vehicle body ride height (level control)
* The vehicle body pitch during braking and acceleration
* The vehicle body roll during cornering and straight ahead driving
* Ride control and wheel force control on uneven roads via suspension
* Roll behaviour via suspension

The different suspension actuators onboard could be:

* Semi-active dampers
* Switchable dampers
* Active stabilizers
* Switchable stabilizers (Semi-active stabilizers)
* Switchable springs
* Body level actuator

For describing the use case Suspension, a unique methodology was established: a feature versus technology matrix, see Table . Figure  gives an overview of the SW-C Susp.

| semi-active/switchable damper | active/switchable stabilizer | Switchable spring Body level actuator (only body height control) |  |
|---|---|---|---|
| body ride height control | no | no | partly |
| ride control & wheel force control | yes | no | partly |
| body pitch control | yes | no | yes |
| body roll control | yes | yes | yes |

### 55. 软件组件 TirePMon (Tire Pressure Monitoring)
*原文标题：Software Component TirePMon (Tire Pressure Monitoring)*

The goal of the SW-C TirePMon is to monitor and identify a significant loss of tire pressure. Two different methods are known:

* Direct measuring systems measure the tire-pressure and temperature with a built-in tire or rim sensor and transfer the information via RF transmission to the receiver.
* Indirect measuring systems calculate the tire-pressure based on wheel- speed information. The detailed description that follows covers only the indirect systems.

Physical principals of indirect measuring systems:

* Circumference based method: The tire pressure is a function of the changing circumference.

  * Compares the current circumference of each wheel with a learned default value
  * Detection of pressure loss at 1,2 or 3 wheels
  * 30% drop in tire pressure leads to an increase in wheel speed of 0.2% to 0.5%.
* Frequency based method: The tire pressure is a function of the tire resonance frequency.

  * Compares the "resonance frequency" (typically around 42 Hz) of each wheel with a learned default value
  * Detection of simultaneous pressure loss at all wheels
* Combinations of these physical principles are also possible.

There are two main operation modes:

* Calibration

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 11 章（内容从略，见纯文本全文）

56. 软件组件 DtTqDistbn (Drivetrain Torque Distribution)
57. Hang-on Coupling
58. Active Differentials
59. Torque Vectoring Device
60. 软件组件 SurrndgsSnsr (Surroundings Sensor)
61. 软件组件 ChassisSnsr (Chassis Sensor)
62. 软件组件 PrkgAid (Parking Aid)
63. Outlook
64. Chassis Domain 结构
65. Scalability
66. 附录
