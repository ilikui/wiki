# Explanation of Application Interfaces of the Powertrain Engine Domain (`AIPowertrain`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 269 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_AIPowertrain_269\AUTOSAR_CP_EXP_AIPowertrain.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_AIPowertrain_269\AUTOSAR_CP_EXP_AIPowertrain.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_AIPowertrain_269\zzgen\CP_EXP_AIPowertrain.complete.txt`

## 文档简介

This document explains design decisions that lead to the standardized applications interfaces relevant to the Powertrain Domain.

The sensor actuator pattern described in this document is not specific to the powertrain domain but can be applied to other domains too, e.g. the chassis domain.

NOTE: If any information in diagrams or text (or conclusions drawn from them) conflict with the information in  or  and this is not explicitly mentioned the information in  or , resp., should be regarded as definitive.

## 章节详细内容

### 1. 目的 of this Document
*原文标题：Purpose of this Document*

This document explains design decisions that lead to the standardized applications interfaces relevant to the Powertrain Domain.

The sensor actuator pattern described in this document is not specific to the powertrain domain but can be applied to other domains too, e.g. the chassis domain.

NOTE: If any information in diagrams or text (or conclusions drawn from them) conflict with the information in  or  and this is not explicitly mentioned the information in  or , resp., should be regarded as definitive.

### 2. 相关文档
*原文标题：Related Documentation*

### 3. Terms and 概念的描述
*原文标题：Description of Terms and Concepts*

### 4. Abbreviations

For abbreviations used in this document please refer to the keyword list in  (as .arxml).

Additionally, please also refer to  for explanation of commonly used terms and abbreviations within AUTOSAR.

### 5. Terminology - Torque within the Powertrain Domain

Sign definition for torque at clutch / torque at wheels: Positive value means that torque is transmitted from the engine to the drivetrain / from the powertrain to the wheels. Negative value means that torque is transmitted from the drivetrain to the engine / from the wheels to the powertrain. Zero means that no torque is transmitted between engine and drivetrain / between wheels and powertrain.

Ancillary torque losses: Ancillary torque losses are losses with influence on "torque at crankshaft reduced by ancillary losses" and "Torque at clutch" caused by e.g. alternator, airconditioning, power steering.

Consideration of the inertia in torque signals: Torque influence of inertia is not considered, viz. Torque effect caused by the inertia is not permitted to be considered additionally on engine side, viz.

* for an increasing engine speed, the indicated torque is not permitted to be increased by the torque which is necessary for the positive speed gradient,respectively

* for a decreasing engine speed, the indicated torque is not permitted to be decreased by the torque which is necessary for the negative speed gradient.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Terminology - Fast and Slow Torque Requests

Many torque request interfaces have the additional descriptors "Fast" or "Slow". These descriptors are relevant to gasoline spark ignition engines, whose torque output can be modified by means of throttle angle (and hence air mass) and ignition timing. In general, the torque output responds slowly to changes in throttle angle due to fluid dynamics in the manifold and cylinder head. The reaction to ignition timing changes is almost instantaneous, especially at higher engine speeds. "Fast" refers to the "immediate" / "instant" torque request, typically achieved by ignition timing. "Slow" refers to the longer term or "torque reserve" request, usually the input to throttle control. Note that a gasoline engine running at optimum ignition timing cannot increase torque quickly as the throttle is the only means for the increase. However, pre-emptively opening the throttle and running with retarded ignition to maintain the the original (lower) torque allows the torque to be increased quickly by ignition a short time in the future.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Typical combinations of signals for transmission shift intervention

Basically, there are two different possibilities to transmit a transmission torque at clutch request:

A) Torque request via one torque signal, which can transmit increasing and reducing torque requests Transmission: Request for Torque at Clutch for Shift Intervention in combination with a Request for implementation type, which defines if the request on the torque signal is an increasing or a reducing one, an absolute or a relative one Transmission: Implementation Type of Request for Torque at Clutch for Shift Intervention

or

B) Request via two torque signals and one signal for implementation type:

* One torque signal defines the "maximum torque", which reflects the upper limit of the allowed torque. This is used to request a reducing torque intervention, Transmission: Request for Maximum Torque at Clutch for Shift Intervention on Fast Path,
* The other torque signal defines the "minimum torque", which reflects the lower limit of the requested torque.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. AUTOSAR torque application 接口的概述
*原文标题：Overview of AUTOSAR torque application interfaces*

Legend: <shortName of Port> <longName of Port> Arrows represent the direction of the requirement (increase/ decrease of torque). Horizontal lines represent the target level of the requirement.

### 9. 架构概述
*原文标题：Architecture Overview*

The following figures give an overview of the domain or functional architecture. They not necessarily give a complete picture but show the most relevant interconnections and components.

### 10. Exemplary 软件 Components的描述
*原文标题：Description of Exemplary Software Components*

For being able to use and understand the standardized application interfaces a typical domain architecture was used as basis for demonstrating the signal flow. The components of this example domain architecture are described in the following.

### 11. Powertrain Coordinator - PTC (PtCoorr)

This composition includes all functions that coordinate the operation of the Powertrain, including: Powertrain operation mode - management of states of all actuators (e.g. combustion engine, clutch(es), transmission, electric motors, etc.), including engine start / stop management (conventional & hybrid Powertrains). Powertrain torque coordination - Torque coordination at Powertrain (PT) level, torque prioritisation, torque distribution for realization at at PT level, torque reserve request for the PTC, pre-coordination of driveability functions for hybrids, Powertrain driveability filters, determination of total Powertrain losses for torque calculation, wheel torque calculation (min, max, consolidated), torque at clutch calculation (min, max, consolidated), transformation of torque set point from wheel torque to torque at clutch, transformation of torque set point from torque at clutch to torque at crankshaft, control/coordination of auxiliary drivers/actuators.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Transmission 系统 (Trsm)
*原文标题：Transmission System (Trsm)*

This composition includes all functions of the transmission system, including: Transmission system coordination - Determines the torque and speed ratio over transmission, converter and differential, including the calculation of torque losses in the transmission system. Coordinates mechanical protection of the Drivetrain (gearbox, driveshafts, etc.), including calculation of torque limitation. For manual transmission, this function includes the determination of the current gear and clutch status. Transmission - Management of particular states in the transmission, including shift transition, driving off situation, creeping mode etc.. In case of shift transition, this functionality calculates torque requests to optimise the transition. Control of transmission actuators to adjust the gear to the target gear (or to adjust the gear ratio to the target gear ratio in case of CVT). Gear ratio means the theoretical / physical ratio belonging to each gear and not any actual measured value. Control of gearbox countershaft (low/higher range) actuators is not included. Calculates the torque gain of a hydrodynamic converter and the torque required to the converter input side in idle, etc.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Combustion Engine (CmbEng)

This composition includes all functions directly related to the operation and control of the vehicle's combustion engine. The following sections,  to  inclusive, define the components as a result of Combustion Engine functionality decomposition agreed to date.

### 14. Engine Speed and Position (EngSpdAndPosn)

Functions that provide all parameters linked to engine shaft position and speed, including the synchronisation on between crankshaft and camshaft. Crankshaft and camshaft signal acquisition. Calculation of the engine position. Calculation of the relative camshaft position for systems with variable valve timing and/or lift. Related diagnosis and plausibility checks.

### 15. Engine Torque 模式管理 (EngTqModMngt)
*原文标题：Engine Torque Mode Management (EngTqModMngt)*

Includes calculation of engine torque set point, realization of that set point (coordination of air / fuel / ignition, etc.), determination of consolidated engine torque, control of engine speed (idle / off-idle / limitation), and management of engine modes (including overall mode, modes for realization of engine start & stop, and combustion modes).

### 16. Combustion Engine：Miscellaneous (CmbEngMisc)
*原文标题：Combustion Engine: Miscellaneous (CmbEngMisc)*

Combustion Engine Misc gathers together miscellaneous engine interfaces. In general, these are common data required for correct operation of the engine (engine temperature, ambient air pressure and battery voltage) or required for fail-safe actions (crash status). The way in which these interfaces are used is not standardized. In future AUTOSAR releases, it is likely that these interfaces may be moved to different (more appropriate) provider or receiver components / compositions.

### 17. Combustion Engine：Timing- and Accuracy 需求 on the signal "Powertrain：Engine Speed Including Start Stop", necessary for transmission.
*原文标题：Combustion Engine: Timing- and Accuracy requirements on the signal "Powertrain: Engine Speed Including Start Stop", necessary for transmission.*

Additional requirements for timing and accuracy on the signal "Powertrain: Engine Speed Including Start Stop" during engine start and shut down:

Legend: Calculation of "Powertrain: Engine Speed Including Start Stop" on the engine side: Combination of "Engine speed based on last segment calculated every 10 ms" and "Engine speed based on last tooth calculated every 10 ms". For a high engine speed, greater than the upper hysteresis limit "a", signal "Powertrain: Engine Speed Including Start Stop" is "Engine speed based on last segment calculated every 10 ms". For a low engine speed, less than the lower hysteresis limit "b", the signal "Powertrain: Engine Speed Including Start Stop" is "Engine speed based on last tooth calculated every 10 ms".

The transition between a high engine speed and a low engine speed is defined by a hysteresis with an upper threshold "a" and a lower threshold "b". If the engine speed increases to a value greater than above "a", then the number of teeth used for the speed calculation is incremented up to segment length using a defined step width. The incrementation is done depending on the time after crossing "a".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Vehicle Motion relevant for Powertrain (VehMtnForPt)

This composition includes Powertrain functions related to vehicle motion. The following sections,  to  inclusive, define the components that have so far been agreed as part of this composition.

### 19. 驱动 Request (DrvReq)
*原文标题：Driver Request (DrvReq)*

Driver-specific conversion of accelerator pedal position to requested torque: determines the driver request related to the motion of the vehicle. For longitudinal motion, this functionality interprets the driver request as a torque request.

### 20. Accelerator Pedal Position (AccrPedlPosn)

The component calculates a percentage from the acquired position of the sensor and contains plausibility checks to ensure the information. Kick-down detection is included in this component.

### 21. Safety Vehicle Speed Limitation (VehSpdLimnForSfty)

Hard limitation of vehicle speed by engine torque reduction, without any comfort functionality.

### 22. Vehicle Motion (Powertrain)：Miscellaneous (VehMtnForPtMisc)
*原文标题：Vehicle Motion (Powertrain): Miscellaneous (VehMtnForPtMisc)*

VehMtnForPtMisc gathers together miscellaneous interfaces in the context of vehicle motion powertrain. The way in which these interfaces are used is not standardised. In future AUTOSAR releases, it is likely that these interfaces may be moved to different (more appropriate) provider or receiver components / compositions. It is even not excluded that they are moved to components that already exist.

VehMtnForPtMisc e.g. is used to close open interfaces in the case that it is committed that some component within vehicle motion powertrain will request or provide it but it is not yet decided which component or the component is missing.

### 23. Powertrain：Miscellaneous (PtMisc)
*原文标题：Powertrain: Miscellaneous (PtMisc)*

PtMisc gathers together miscellaneous powertrain interfaces. The way in which these interfaces are used is not standardised. In future AUTOSAR releases, it is likely that these interfaces may be moved to different (more appropriate) provider or receiver components / compositions. It is even not excluded that they are moved to components that already exist.

PtMisc e.g. is used to close open interfaces in the case that it is committed that some component within powertrain will request or provide it but it is not yet decided which component or the component is missing.

### 24. Electric Powertrain Domain 建模
*原文标题：Electric Powertrain Domain Model*

In addition to conventional powertrains, both electric powertrains and hybrid electric powertrains may be considered. To enable development of Application Interfaces for such powertrain topologies, the Electric Powertrain Domain Model is defined.

Electric powertrains may be battery electric powertrains or fuel cell hybrid electric powertrains, where the latter considers both a fuel cell system as well as an electric energy storage system such as a battery or super capacitor.

### 25. Electric Powertrain Coordinator

The Electric Powertrain Coordinator coordinates the power flow of the Fuel Cell System, Electric Storage System as well as Electric Motor Drive System.

### 26. Fuel Cell 系统
*原文标题：Fuel Cell System*

The Fuel Cell System consists of the Fuel Cell Stack and the Balance of Plant components. The Balance of Plant systems comprises the Air System, Hydrogen System, Electric System. In addition to these, the Thermal System are related for thermal management of the complete system.

### 27. Domain 建模 Fuel Cell Stack Coordinator
*原文标题：Domain Model Fuel Cell Stack Coordinator*

Based on the stack specific request for state and power from Multi Fuel Cell System Coordinator, the Fuel Cell Stack Coordinator calculates the fuel cell set points for all subsystems (Air, Hydrogen, Thermal, Electric) and coordinates the subsystems to realize them or carry out an appropriate failure reaction. In addition to monitor voltage, current as well as gas temperature and pressure in the stack, the stack coordinator models the gas diffusion, the humidity inside the stack, and provides stack specific status information to the System Coordinator.

### 28. Domain 建模 Air 系统
*原文标题：Domain Model Air System*

The Air System controls the air system actuators to provide the cathode lambda and cathode pressure as requested by stack coordinator. To limit the hydrogen concentration in exhaust, it always provided the exhaust mass flow needed.

### 29. Domain 建模 Hydrogen 系统
*原文标题：Domain Model Hydrogen System*

The Hydrogen System provides the hydrogen supply to the fuel cell stack with correct pressure and temperature. The hydrogen is re-circulated by a device controlled by this system.

### 30. Domain 建模 Electric 系统
*原文标题：Domain Model Electric System*

The Electric System provides the Fuel Cell System current set point based on the electric power request provided by the stack coordinator. The Electric System provides control of the power electronic device, usually a DC-to-DC converter that connects to the vehicle propulsion voltage system.

### 31. Domain 建模 Thermal 系统
*原文标题：Domain Model Thermal System*

The Domain model of Thermal System is responsible for controlling the operating setpoints of the fuel cell coordinator. This is linked to the Fuel Cell Stack Coordinator to ensure an efficient operation of the fuel cell system. This however can also be linked to other parts of the vehicle which are requiring thermal conditioning and affect the system status that is communicated back to the Fuel Cell Stack Coordinator.

### 32. Multi Fuel Cell 系统 Coordinator
*原文标题：Multi Fuel Cell System Coordinator*

The Multi Fuel Cell System Coordinator distributes the power request given by Electric Powertrain Coordinator among the connected stacks and collects the stack specific status information for feedback to the Electric Powertrain Coordinator.

### 33. Electric Energy Storage

The Electric Energy Storage provides electrical power according to the request from the Electric Powertrain Coordinator and collects the storage specific status information for feedback to the Electric Powertrain Coordinator. Due to the nature of the electric storage where the stored energy is typically in a chemical form where the process is reversible, which allows the electric energy to be provided to the electric powertrain, but also allows the storage of energy from the powertrain (e.g. by regenerative braking) as well as other means of charging.

### 34. Electric Motor Drive 系统
*原文标题：Electric Motor Drive System*

The Electric Motor Drive System allows the conversion of electrical energy into mechanical energy typically in the form of one or more Motor/Generators which are controlled by inverters. This inverter controls the amount of energy sent to the Motor/- Generator based on the requested power from the Electric Powertrain Coordinator and sends back the status of the Electric Motor Drive System.

### 35. Additional Information

### 36. Differences between SW-Cs and ECUs

The SW components defined in chapter  are not to be confused with an ECU's functionalities. For example, a combustion engine control ECU may contain the Combustion Engine SW-C plus other SW-Cs.

### 37. 功能性 safety
*原文标题：Functional safety*

Many Powertrain signals are safety-relevant, therefore The AUTOSAR RTE will provide reliable communication for these signals at the low level, and Diagnostics and safety concepts for these signals must be applied at the higher, functional level.

AUTOSAR does not provide a Safety Concept for Powertrain systems. This must be done at the project level. This means that the specified interfaces must be checked to fulfill the safety requirements on each specific project.

### 38. Powertrain Application 接口 - Decisions / Assumptions
*原文标题：Powertrain Application Interfaces - Decisions / Assumptions*

### 39. 范围
*原文标题：Scope*

In this document only passenger cars are considered.

### 40. PTC Composition (PtCoorr)

The PTC is not an atomic AUTOSAR SW-Component. In fact, its functionalities should be separated, into several sub-components. These sub-components will communicate with each other and with AUTOSAR SW-Components outside the PTC. The interfaces between the sub-components are not in the current scope, which is restricted to the definition of main interfaces between the non-PTC components and the PTC sub-components.

### 41. 定义 of overboost
*原文标题：Definition of overboost*

Overboost is a state in which the maximum torque which the combustion engine can deliver is increased for a limited period of time. Depending on the engine type, this could be realised, for example, as an increase in boost pressure on a turbocharged engine.

### 42. Coordination at the vehicle level

Coordination of vehicle energy (mechanical / electrical / thermal), vehicle operation modes, vehicle personalisation, etc., should be done at the vehicle level. This is not in the scope of the Powertrain Application Interfaces.

The composition VehMtnForPtMisc was added as an interim solution for some vehicle level issues relevant to the powertrain domain.

### 43. PTC Arbitration between 驱动 and Chassis torque requests
*原文标题：PTC Arbitration between Driver and Chassis torque requests*

The two figures below show how the VLC and Stability Control torques requests could be arbitrated with the Driver Request. This is just an example to illustrate the concept behind the powertrain torque request interfaces, it is not intended to standardise the arbitration behavior in the PTC.

### 44. Assumptions on 建模 style and naming aspects specific for powertrain domain
*原文标题：Assumptions on modeling style and naming aspects specific for powertrain domain*

AUTOSAR provides a guideline for modeling and naming of model elements ().

There are architectural design patterns like the sensor actuator design pattern described in  that also include modeling and naming aspects.

In this section only additional patterns and modeling styles followed are explained to get an overall understanding of the signals standardized for the powertrain domain.

Please note: Here standardized ports or port interfaces mean standardized port prototype blueprints or port interface blueprints .

| Kind of Modeling in general applied within powertrain domain, especially if the system modeling guideline  gives some freedom. | < |
|---|---|
| Kind of modeling or assumptions | Rationale |
| All SenderReceiverInterfaces standardized are assumed to be measurable. | In earlier versions the standard did not contain information about calibration and measurement. |

Since R4.0.3 all data types allow measurement by default (see generated .arxml ). So our implicit assumption that all signals are measurable is fulfilled.
| All ports are assumed to be optional. | Within our example components all ports are assumed to be optional. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。
