# Safety Use Case Example (`SafetyUseCase`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 641 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_SafetyUseCase_641\AUTOSAR_CP_EXP_SafetyUseCase.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_SafetyUseCase_641\AUTOSAR_CP_EXP_SafetyUseCase.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_SafetyUseCase_641\zzgen\CP_EXP_SafetyUseCase.complete.txt`

## 文档简介

This document shows major analysis steps of an exemplary system using AUTOSAR from a functional safety point of view. The example used within the following document bases upon the AUTOSAR guided tour example Front Light Management. Additional constraints were added whenever needed for analysis or concept discussion.

The present report intends to

* Build up a relevant use case in an AUTOSAR environment for a functional safety analysis.
* Provide an example to discuss and verify safety related concepts within AUTOSAR.
* Identify improvement potential with respect to functional safety aspects in the current AUTOSAR specifications and methodology.
* Propose improvements or additional concepts in AUTOSAR, required for safety architectures.
* Create input for the concept: "Safety Related Extension for Methodology and Templates".
* Provide a guideline for safety analyses on top of the AUTOSAR methodology.

The example is prepared in context of the ISO 26262 requirements, but is focused on the AUTOSAR relevant parts. Although it could be seen as a basic guideline for safety analysis on top of AUTOSAR methodology, it just touches the main topics roughly. Further details (e.g. a detailed list of software safety requirements or examples for safety analysis measures) could be added in a next development step.

This example covers aspects like

* The functional safety concept
* The technical safety concept on system level
* The technical safety concept on ECU level
* Safety aspects on AUTOSAR basic software level.

Note: Implementation constraints do not necessarily match with an existing implementation.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document shows major analysis steps of an exemplary system using AUTOSAR from a functional safety point of view. The example used within the following document bases upon the AUTOSAR guided tour example Front Light Management. Additional constraints were added whenever needed for analysis or concept discussion.

The present report intends to

* Build up a relevant use case in an AUTOSAR environment for a functional safety analysis.
* Provide an example to discuss and verify safety related concepts within AUTOSAR.
* Identify improvement potential with respect to functional safety aspects in the current AUTOSAR specifications and methodology.
* Propose improvements or additional concepts in AUTOSAR, required for safety architectures.
* Create input for the concept: "Safety Related Extension for Methodology and Templates".
* Provide a guideline for safety analyses on top of the AUTOSAR methodology.

The example is prepared in context of the ISO 26262 requirements, but is focused on the AUTOSAR relevant parts. Although it could be seen as a basic guideline for safety analysis on top of AUTOSAR methodology, it just touches the main topics roughly. Further details (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Item 描述
*原文标题：Item Description*

The item chosen for this example primarily equals the AUTOSAR guided tour example Front Light Management. Whenever additional definitions were needed, information supporting clarification of safety related topics was added.

The current example's scope focuses on a very limited functional part of the front light, namely the low beam feature. All other light functionalities e.g. parking orientation light, fog lights, etc. are excluded. In exception, daytime running lights are named as a possible fallback solution and therefore are integrated in the following figures. However, details of controlling day time running lights are not part of this example.

All vehicle level parts contributing to a Front Light Management will be considered here as "the system" (see ). This includes the Front Light Management ECU as well as relevant sensors, actuators, display and powering parts facilitating the Front Light Management.

### 3. 功能性行为
*原文标题：Functional Behavior*

The general feature of a low beam function is to illuminate the roadway in the dark. In addition the low beam informs other road users about a vehicle approaching. Activation/Deactivation conditions are summarized in the following table.

| Function | Operating Elements | Turn-on Conditions | Turn-off Conditions |
|---|---|---|---|
| Low Beam | Light switch (LS) | CL15 ON |  |

AND

| Light switch ON | Light switch OFF |
|---|---|

OR

CL15 OFF

The low beam can be turned on by a light switch while clamp 15 (CL15) is activated via Ignition Key. Any malfunction of low beam lights shall be indicated to the driver.

As additional function, the daytime running light is available as part of the Front Light Management system. Furthermore, all relevant normative regulations available for the low beam function are to be applied.

Based on this nominal function the following functions and associated functional requirements are derived:

# detection of low beam light request

  # The Front Light Manager shall evaluate the Ignition Key position.
  # The Front Light Manager shall read the LS switch position
# evaluation of low beam light request

  # The Front Light Manager shall evaluate the LS switch status.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Preliminary 架构
*原文标题：Preliminary Architecture*

The following figure shows the assumed system architecture including system elements like

* Front Light Management ECU
* Light Switch (LS)
* Ignition Key (via Body Controller)
* Power Supply
* Headlights, left and right
* Daytime Running Lights, left and right
* HMI

The technical interfacing of system elements with Front Light Management ECU is assumed as shown in  and .

| System Element | Interface to FLM ECU |
|---|---|
| Light switch position (LS) | DIO |
| Ignition Key position (CL15) (via Body Controller) | CAN interface |
| HMI | CAN interface |
| Head light control left | PWM |
| Head light control right | PWM |
| Daytime running lights (L&R) | PWM |
| Power Supply | Analog |

A communication focused view of the technical interfacing is shown in .

### 5. Assumptions and 限制 of Exemplary Safety Analysis
*原文标题：Assumptions and Limitations of Exemplary Safety Analysis*

As starting point for the example the following configuration of the system is assumed:

# Implementation of Front Light Management software on one ECU
# Activation of light via switch which provides one output that is a digital I/O.

  Note: Common types of this kind of light switch provide analogue or up to 4 digital outputs with a logic table to validate the status. The intention of this example is to show the data flow through the software architecture. Hardware diagnostics of sensors is not in focus.
# Emergency light functionality (in case of e.g. \muC operation failures) is provided by hardware and not intended to use AUTOSAR software parts.
# All memory (volatile and non-volatile) is protected against reversible transient faults. It is assumed that mechanisms like ECC are available.
# Hardware means for memory partitioning are available (e.g. MPU)
# The Front Light Management software is integrated on a system with BSW modules which do not comply with an ASIL rating according to ISO26262.
# The analysis of failure modes of the microcontroller is performed and safety measures are defined and implemented. This analysis is based on data provided by the supplier e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Safety Concept on Vehicle Level

The following chapter outlines the safety analysis on vehicle level and its result typically created by the OEM and partially provided to a supplier.

Note: This structure of safety analysis cannot be mapped 1 by 1 to the structure in ISO 26262 , since the norm does not include the different possible scopes of development, explicitly.

### 7. Outcome of Hazard Analysis and Risk Assessment

For this example, it is supposed the following hazard and attributes were identified as output of a hazard and risk assessment:

Hazard H1: Total loss of low beam (ASIL B)

This hazard potentially could cause the driver to lose control of the vehicle, leave the road and collide with environmental parts.

Exceptions and Boundary Conditions to H1:

* The loss of low beam is only to be seen as a risk in case of bad viewing conditions (night, fog, etc.).
* The loss of low beam on a curvy, unlighted rural road is evaluated as a most critical situation.
* The loss of only one low beam is not considered to be directly leading to a hazardous situation. However, it is a latent fault and will be included in the concept advisement.

ASIL: The ASIL B rating is based on the severity rate the exposure rate and the controllability identified during hazard analysis and risk assessment.

Safety Goal SG01: Prevent total loss of low beam

Safe State: Low beam activated

Fault Tolerance Time: 500 ms

(Loss of low beam during night drive with activated lights shall be considered.)

Note: Additional hazards could be assumed. However, to limit our example it is assumed to be the only relevant hazard.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Relevant Failure Modes

The safety goal SG01 can be violated through one or more of the following malfunctions (MF):

* MF01: Failure of the detection of the turn-on/ turn-off conditions of lights
* MF02: Failure of the evaluation and implementation of the light request function which is used to turn lights on
* MF03: Failure of the activated lights

### 9. 功能性 Safety Concept
*原文标题：Functional Safety Concept*

The outcome of the function description, the safety goal as well as the top level safety requirements, is a functional safety architecture that will be mapped to one particular vehicle architecture.

### 10. FunSafReq01-01：
*原文标题：FunSafReq01-01:*

FLM shall detect any valid turn on condition of low beam correctly. (ASIL B)

Relates to MF01: No LB after a "valid LB lights ON" request.

### 11. FunSafReq01-02：
*原文标题：FunSafReq01-02:*

FLM shall verify the validity for any LB lights request received and activate or deactivate the low beam accordingly. (ASIL B)

Relates to MF02: Switching lights off without receiving a "valid LB lights OFF" request

### 12. FunSafReq01-03：
*原文标题：FunSafReq01-03:*

FLM shall detect failures of the activated low beam and signal malfunctions to the driver. (ASIL B)

Relates to MF03: Failure of the activated lights

Note:

Valid LB lights ON request => "CL15 is ON & light switch changes from OFF to ON"

Valid LB lights OFF request => "light switch changes from ON to OFF"

### 13. Safety 需求 on Vehicle Level
*原文标题：Safety Requirements on Vehicle Level*

As part of the vehicle level safety analysis a warning and degradation concept is defined according to the available system architecture. The Technical Safety Requirements on vehicle level are derived from Functional Safety Requirements and assumptions of preliminary architecture (see ) and marked with SysSafReq IDs.

Note: The process of generating Technical Safety Requirements is not part of this document and therefore not described in the following. These vehicle level requirements are used for demonstration of the several requirements levels. They are neither completely analyzed nor mapped from a real implementation.

### 14. Warning and Degradation Concept

For the low beam lights the following 2-step degradation concept shall be implemented:

Normal Mode:

* See nominal function within item description (see ).

Degraded Mode Step 1 - loss of one low beam:

* The second low beam still fulfills its function.
* A warning shall be provided to the driver, indicating partial loss of low beam, while low beam is requested but not successfully activated (fault detected).

Degraded Mode Step 2 - loss of both low beams:

* Day time running lights shall be activated, whenever low beam is requested but not successfully activated (fault detected).
* A warning shall be provided to the driver, indicating loss of low beam and activation of daytime running lights, while low beam is requested.

Note: This kind of usage of day time running light as fallback is just used as an example to demonstrate a degraded function. This solution is probably not suitable under homologation aspects.

Note: Additional driver assistance functions could be activated in this mode to assist the driver, but this is not part of this example.

### 15. Technical Safety 需求 (on Vehicle Level)
*原文标题：Technical Safety Requirements (on Vehicle Level)*

The following technical safety requirements are derived within this exemplary analysis based on determination in :

### 16. SysSafReq01

The CAN connected Body Controller shall signal Ignition Key clamp 15 status via CAN bus message `CL15_01` (CAN-message: `CL15_01`, CAN signal: CL15ON (Boolean, '1' if clamp 15 is set to on, '0' if clamp 15 is set to off)). (ASIL B)

Note: CAN message details are defined in CAN DB (frequency, inhibit time, signal type) as part of the nominal function.

### 17. SysSafReq02

The light switch shall signal the state of the switch via digital HW line `HW_LB_OFF` (0=0V if lights on are requested, 1=5V if lights off are requested). (ASIL B)

### 18. SysSafReq03

Failures within the light switch shall lead to the digital HW line `HW_LB_OFF` set to 0. (ASIL B)

### 19. SysSafReq04

FLM ECU shall ensure that the limits (like voltage and PWM) to power the LB bulbs are kept, while FLM ECU detects that the condition for powering the bulbs is fulfilled (as defined as part of nominal function). (ASIL B)

### 20. SysSafReq05

While CL15ON==1, FLM ECU shall switch the light off only if `HW_LB_OFF` ==1 condition is true continuously for 20ms (CAN message: `CL15_01`; CAN signal: CL15ON Boolean, '1' if clamp 15 is set to on, '0' if clamp 15 is set to off). (ASIL B)

Note: The timing condition to wait for a stable condition for some milliseconds is included to de-bounce the signal value. The particular value of 20ms is taken as experts' experience. Another value could be used instead, as well.

### 21. SysSafReq06

FLM ECU shall detect circuit failures (bulbs, fuses, wiring-oc/sc) and signal them via CAN (CAN message: `LightStatus_01`, CAN signal: LBFailure (2 bit, 01 in case left LB fails, 10 in case right LB fails, 11 in case both LB fail)). (ASIL B)

### 22. SysSafReq07

FLM ECU shall activate both daytime running lights (DRL) if a failure of both LB bulbs is detected continuously for 200ms. (ASIL B)

Note: The FTT budget is allocated the following way: 200ms failure detection time + conservative 200ms time interval until halogen bulb reaches full intensity (failure reaction) + 100ms buffer = 500ms.

### 23. SysSafReq08

FLM ECU shall use independent circuits to power left and right bulbs such that no single fault can cause a total loss of low beam. (ASIL B)

### 24. SysSafReq09

HMI shall display bulb outage information according to the signal LBFailure received via CAN (CAN message: `LightStatus_01`, CAN signal: LBFailure (2 bit, 01 in case left LB fails, 10 in case right LB fails, 11 in case both LB fail)). (ASIL A)

Note: For this measure the FTT is not relevant since it is a measure against latent failures. A relevant time here can be calculated (diagnosis interval). The measure against a double bulb failure (where FTT is relevant) is the activation of the daytime running light. As a measure against latent faults the ASIL is reduced according to ISO 26262-4:2018(E) 6.4.2.5.

### 25. SysSafReq10

The data transmission via CAN between sender and receiver must be ensured for CAN message: `CL15_01` CAN signal: CL15ON Boolean, ('1' if clamp 15 is set to on, '0' if clamp 15 is set to off). (ASIL B)

Note: For this measure all relevant failure modes known for data exchange (see ISO26262 part 6) should be considered.

### 26. SysSafReq11

The data transmission via CAN between sender and receiver must be ensured for CAN message: `LightStatus_01`, CAN signal: LBFailure (2 bit, 01 in case left LB fails, 10 in case right LB fails, 11 in case both LB fail). (ASIL A)

Comment: For this measure all relevant failure modes known for data exchange (see ISO 26262-6) should be considered.

### 27. SysSafReq12

FLM ECU shall activate low beam lights if a communication fault regarding message `CL15_01` is detected continuously for 200ms.

Note: The FTT budget is allocated the following way: 200ms failure detection time + conservative 200ms time interval until halogen bulb reaches full intensity (failure reaction) + 100ms buffer = 500ms.

### 28. SysSafReq13

FLM ECU shall

* activate both daytime running lights (DRL) if a communication fault regarding message `LightStatus_01` is detected continuously for 200ms and
* provide a text message to the driver like 'Light system defect'.

### 29. Allocation of (功能性) 系统 Safety 需求
*原文标题：Allocation of (Functional) System Safety Requirements*

In the next step all system safety requirements need to be allocated to an architectural system element (see ).

### 30. Summary of Technical 系统 Safety 需求 (Vehicle Level)
*原文标题：Summary of Technical System Safety Requirements (Vehicle Level)*

The overall mapping of System Safety Requirements to Functional Safety Requirements (vehicle level) as well as the allocation to system elements is summarized in .

| ID | System Safety Requirement | Supports Functional Safety Req. IDs | ASIL | Item |
|---|---|---|---|---|
| SysSafReq01 | The Body Control Unit shall signal clamp 15 status via CAN bus message CL15_01 (CAN-message: CL15_01, CAN-Signal: CL15ON (Boolean, '1' if clamp 15 is set to on, '0' if clamp 15 is set to off)). |  |  |  |

| Note: CAN message details are defined in CAN DB (frequency, inhibit time, signal type) as part of the nominal function. | FunSafReq01-01 | ASIL B | BC-ECU |  |
|---|---|---|---|---|
| SysSafReq02 | The light switch shall signal the state of the switch via digital HW line HW_LB_OFF (0=0V if lights on are requested, 1=5V if lights off are requested). | FunSafReq01-01 | ASIL B | Light Switch |
| SysSafReq03 | Failures within the light switch shall lead to the digital HW line HW_LB_OFF set to 0. | FunSafReq01-02 | ASIL B | Light Switch |
| SysSafReq04 | FLM ECU shall ensure that the limits (voltage, PWM ) to power the LB bulbs are kept, while FLM ECU detects that condition for powering the bulbs is fulfilled (as defined as part of nominal function). |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Technical Safety Concept on FLM-ECU Level

The following chapter outlines the safety analysis on ECU level and its result typically created by a supplier.

### 32. Assumptions and 限制 on ECU Level
*原文标题：Assumptions and Limitations on ECU Level*

The safety concept on FLM-ECU level bases on the following assumptions:

# According to AUTOSAR methodology, BSW is running cyclically.
# HW signals are read cyclically and are available as client/server signals in RAM of the I/O hardware abstraction (HWA).
# Incoming CAN messages generate an interrupt.
# The ECU is waking up, running and going to sleep correctly (no focus here on mode management or state management).
# The necessary communication network is available, up and running correctly, (no focus here on COM management).
# The necessary BSW modules are triggered as required.
# RTE is used as medium for transmission of data and messages and does not perform any scaling (transformation of data).
# Daytime running lights are technically in the same way connected like head lights but on a separately dedicated SPI.

  Note: In this case a cross-wiring could help for diagnostics of broken wiring harness, if left headlight cable controls right side daytime running light and vice versa.

### 33. Safety Goals to be Fulfilled

The relevant safety goals are defined in .

### 34. Relevant 系统 Safety 需求
*原文标题：Relevant System Safety Requirements*

The relevant system safety requirements are listed in .

### 35. 概述 of Concept on ECU Level
*原文标题：Overview of Concept on ECU Level*

This block diagram shows the elements on ECU level involved in fulfilling the safety goal including the ASIL allocation to input, processing, output, and warning elements.

The functionality "Headlight" (ASIL B) is decomposed into two separate headlights (2x ASIL A(B)) to provide redundancy as shown in .

The assumption in the current example is: "a loss of set_pwm does not directly lead to "Total loss of low beam (H1)" Therefore the common SPI "bus" for controlling the headlights is QM rated.

"`Set_pwm`" is used to create a rectangular pulse wave whose pulse width is modulated to control headlights via smart high side driver (see  rightmost side)

Rationale:

# Startup self-diagnosis detects faults of the SPI connection with sufficient coverage with feedback to the driver (during stand still, before any hazardous driving situation).
# The "read back" path read_current_R and read_current_L provides feedback whether a light request was transferred successfully or not.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. 需求 on ECU Level
*原文标题：Requirements on ECU Level*

The following list summarizes safety requirements on ECU level. Based on these software requirements additional requirements on basic software modules have to be derived. This step is not provided in detail within this document.

The granularity of the derived SW requirements will stay very limited to keep the example understandable. Safety related software components shall be developed according to the highest ASIL rating of assigned requirements.

| ECU Safety Requirement ID | ECU Safety Requirement | Functional Block | Domain | ASIL | ECU Functionality | Related AUTOSAR Component | System Safety Requirement |
|---|---|---|---|---|---|---|---|
| The CAN message CAN BUS CAN_CL15 shall be received correctly. | Reading | ECU | B |  |  | SysSafReq05 |  |
| ECU01 | The correct reading of the (physical) CAN BUS CAN_CL15 shall be ensured. | Reading | HW | QM(B) | Reading Ign.-Key State | CAN-Transceiver/-Controller | SysSafReq05 |
| ECU02 | The correct transformation of CAN BUS CAN_CL15 to the logical CL15_01 message shall be ensured. | Reading | HW + SW driver | QM(B) | Reading Ign.-Key State | CAN-Transceiver/-Controller | SysSafReq05 |
| ECU03 | The correct routing of the CL15_01 message through the AUTOSAR BSW/RTE shall be ensured. |  |  |  |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. ECU Functionality

The following chapter is structured according to the functional blocks (see ), e.g. Reading Light Request, Reading Ignition Key State, etc. It describes signal interfacing at the boundary of the ECU, outlining how the input signals are transformed from the physical hardware input to the logical software input and from the logical software output to the hardware output.

### 38. Reading Light Switch 状态
*原文标题：Reading Light Switch State*

Physical input: `HW_LB_OFF`

(On HW level, it is currently realized as single digital input.)

Logical input: `LB_OFF`

Involved SW modules: DIO Driver/Handler, RTE, SwitchEvent (Sensor-SWC).

### 39. Reading Ignition Key 状态 (via Body Controller)
*原文标题：Reading Ignition Key State (via Body Controller)*

Physical input: CAN BUS `CAN_CL15`

Logical input: `CL15_01` (ASIL B)

Involved SW modules: CAN driver and interface, PDU Router, AUTOSAR COM, RTE, Light Request (Application SWC).

### 40. Activating Lights (physical)

### 41. Low Beam Lights

Physical outputs: `PWM_headlight` left, `PWM_headlight` right (QM)

(The high side drivers create the PWM signal according to the SPI request.)

Logical outputs: `Set_pwm`

Involved SW modules: HeadLight (Actuator-SWC control path), RTE, SPI-Driver/Handler

### 42. Daytime Running Lights

Physical outputs: Daytime running lights

Logical outputs: Not part of the example

Involved SW modules: Not part of the example

### 43. Monitoring Lights

Physical inputs: `HW_current` left, `HW_current` right (ASIL A(B)).

Logical inputs: `Read_current_L`, read_current_R

Involved SW modules: HeadLight (Actuator-SWC read back path), RTE, ADC-Driver/Handler.

### 44. Providing 驱动 Feedback
*原文标题：Providing Driver Feedback*

Physical output: CAN bus (ASIL A)

Note: This ASIL is allocated to the signal content only and not to the whole CAN bus or bus interface.

Logical output: LBFailure

Involved SW modules: CAN driver and interface, PDU Router, AUTOSAR COM, RTE, FLM (Application-SWC).

### 45. Controlling Lights (logical)

The logical part of controlling lights is covered by SW only. For details see SW architecture in . Logical input is provided according to the overview in  - .

Physical input: none

Physical output: none

Involved SW modules: Switch-Event (Sensor-SWC), LightRequest (Application-SWC), FLM (Application-SWC), Headlight (Actuator-SW-C) RTE

### 46. SW 架构 and SW Safety 需求
*原文标题：SW Architecture and SW Safety Requirements*

Two objectives shall be supported within this chapter: First it shall provide an overview of the abstract software system, including its main software components (SWCs) and the involved AUTOSAR BSW modules in a hierarchical structure (, ). This will include static aspects such as interfaces and data paths of all main software components as well as dynamic aspects such as process sequences and timing behavior, documented within a communication diagram (Figure 9).

Second, it will support the identification of the potential failure modes for each defined safety requirement on ECU level and how they can be detected by adequate safety measures. Finally, in case of already existing safety measures in AUTOSAR a reference will be provided.

### 47. 软件架构
*原文标题：Software Architecture*

The following picture shows the example of related software components integrated into a standard AUTOSAR architecture (see ).

FLM shall be integrated in an existing ECU with AUTOSAR SW architecture, using an AUTOSAR BSW-Stack.

It shall consist of 4 SW components:

* Sensor SWC (SwitchEvent)
* Application SWC (LightRequest)
* Application SWC (FLM)
* Actuator SWC (Headlight)

### 48. 软件 Components
*原文标题：Software Components*

The following software components are defined to provide the headlight function

# SwitchEvent

  # Sensor SWC:
  # event triggered, on request of LightRequest (Check Status `HW_LB_OFF`; `HW_LB_OFF_State`)
  # check_switch(): read `HW_LB_OFF` (Read `HW_LB_OFF`)
  # stores state of `HW_LB_OFF` (`HW_LB_OFF_State`)
# LightRequest

  # Application SWC
  # LightRequest: checks status of `HW_LB_OFF` (check_switch) (Check Status `HW_LB_OFF`; `HW_LB_OFF_State`)
  # reads relevant CAN signals of message `CL15_01` (Read `CAN_Signal` `CL15_01`; `CAN_Signal` `CL15_01`)
  # sends on demand a light request according to the nominal function table to "FLM" (LR Data)
# FLM (Front Light Manager)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. RTE Runtime Environment

The RTE is the realization of the interface of the AUTOSAR Virtual Function Bus (VFB). The RTE provides the infrastructure services that enable communication between AUTOSAR software-components as well as acting as the means by which AUTOSAR software-components access basic software modules including the OS and communication service.

### 50. AUTOSAR BSW 视图
*原文标题：AUTOSAR BSW View*

The following picture and description is focused on communication and signal flow from and to related software components.

### 51. 基础软件 Components
*原文标题：Basic Software Components*

The following basic software modules were identified as relevant with respect to the architecture and function of the example:

* COM Manager
* AUTOSAR COM
* CAN State Manager
* PDU Router
* CAN Interface
* CAN Driver
* CAN Transceiver Driver
* SPI Driver /Handler
* DIO and Port Driver /Handler
* ADC-Driver /Handler
* ECU State Manager
* BSW Manager
* AUTOSAR OS

### 52. BSW 功能的通用概述
*原文标题：General Overview of BSW Function*

The main functionality of AUTOSAR BSW modules which is used in this example is provided as a rough overview within the following subchapters.

Comment: BSW function is not described in detail and not complete. For further information please use the AUTOSAR specification.

### 53. COM 管理器
*原文标题：COM Manager*

The ComM module controls basic software modules relating to communication and not software components or runnable entities.

The ComM module collects the bus communication access requests from communication requestors and coordinates the bus communication access requests.

* The ComM module receives any communication request from SW-C
* The ComM module uses the API of the CAN State Manager module to request communication modes of CAN Network.

### 54. AUTOSAR COM

AUTOSAR COM is located between RTE and PDU-Router. It provides different features that affect the communication (e.g. packing/unpacking PDUs, data interface for RTE etc.)

* Monitors the received signals (signals timeout) filter mechanisms for incoming signals.

### 55. CAN 状态管理器
*原文标题：CAN State Manager*

The CAN State Manager module uses the API of the CAN Interface module to control the operating modes of the CAN Controllers and CAN Transceivers assigned to the CAN Networks.

The CAN State Manager module notifies the current communication mode of its CAN Networks to the Communication Manager (ComM) module.

### 56. PDU Router

The PDU Router module provides services for routing of I-PDUs using the following module types: Communication interface modules (e.g. Com, LinIf, CanIf, CanNm, FrIf and FrNm).

* Provides routing of PDUs between different abstract communication controllers and upper layers; Scale of the PDU Router is ECU specific (down to no size if e.g. only one communication controller exists); Provides transport protocol routing on-the-fly.

### 57. CAN 接口
*原文标题：CAN Interface*

The CAN Interface module is located between CAN Driver and upper communication service layer. It represents the interface to the services of the CAN Driver and the upper communication modules of the AUTOSAR COM stack.

### 58. CAN 驱动
*原文标题：CAN Driver*

The CAN Driver performs the hardware access and offers a hardware independent API to the upper layers. The only upper layer with access to CAN Driver is the CAN Interface.

* Initiates transmissions.
* Calls the functions of the CAN Interface module for notifying events.
* Controls the behavior and state of the CAN Controllers.

### 59. CAN 收发器驱动
*原文标题：CAN Transceiver Driver*

The CAN Transceiver driver abstracts the CAN Transceiver hardware.

* It offers a hardware independent interface to the higher layers.
* It abstracts from the ECU layout by using APIs of MCAL layer to access the CAN Transceiver hardware.

### 60. SPI 驱动 / SPI Handler
*原文标题：SPI Driver / SPI Handler*

The SPI Handler/Driver provides services for reading from and writing to devices connected via SPI busses.

* It provides access to SPI communication to several users (e.g. EEPROM, Watchdog, I/O ASICs).
* It also provides the required mechanism to configure the on chip SPI peripheral.

### 其余 42 章（内容从略，见纯文本全文）

61. DIO and Port 驱动 / Handler
62. ADC 驱动
63. ECU 状态管理器
64. BSW 管理器
65. Autosar OS
66. Failure Modes
67. HW Failure Modes
68. SW Failure Modes
69. 数据 Integrity
70. 数据 Exchange
71. 时序 & 控制 Flow
72. 数据 Processing
73. 软件 Aspects and Potential Failure Modes
74. Analysis of ECU02 - The correct transformation of CAN BUS CAN_CL15 to the logical CL15_01 message shall be ensured.
75. Analysis of ECU03 - The correct routing of the CL15_01 message through the AUTOSAR BSW/RTE shall be ensured. The signal CL15_01.CL15ON is to be extracted and provided to the application-SWCs properly.
76. Analysis of ECU27 - The transmission of CL15_01.CL15ON between sender and receiver must be ensured (ASIL B).
77. Analysis of ECU04 - The ECU shall detect any potential communication faults affecting the signal CL15ON that could lead to a violation of the safety goal.
78. Analysis of ECU06 - The correct reading of the HW_LB_OFF input shall be ensured.
79. Analysis of ECU07 - The correct 配置 of the HW_LB_OFF input port and pin shall be ensured.
80. Analysis of ECU08 - The correct transformation of the HW_LB_OFF input to the logical LB_OFF signal shall be ensured.
81. Analysis of ECU09 - The correct routing of LB_OFF through the AUTOSAR BSW/RTE shall be ensured.
82. Analysis of ECU10 - The ECU shall detect potential faults affecting LB_OFF that could lead to a violation of the safety goal.
83. Analysis of ECU12 - The Application-SWC shall determine the LB_OFF and CL15ON status as specified.
84. Analysis of ECU13 - The Application-SWC shall evaluate the light request conditions based on LB_OFF and CL15ON and their 时序 as specified.
85. Analysis of ECU14 - The Application-SWC shall set or reset the light on command (Lights_ON) based on the LB_OFF and CL15ON evaluation results or if any fault is detected - set the light on command, if a communication fault of CL15_01 message is detected continuously for more than 200ms or set the light on command, if a fault on LB_OFF is detected continuously for more than 200ms.
86. Analysis of ECU15 - The Application-SWC shall activate both daytime running lights (DRL_ON) if a failure of both LB bulbs is detected continuously for 200ms (read_current_L, read_current_R).
87. Analysis of ECU16 - The correct powering of the bulbs according to the Lightsreqest and the 规范 are to be signaled via set_pwm command.
88. Analysis of ECU 29 - The correct transformation of the logical PWM-l-Signal to the SPI BUS message shall be ensured.
89. Analysis of ECU17 - The correct routing of the set_pwm request to the uC SPI output shall be ensured.
90. Analysis of ECU20 - When the bulbs are powered, the Application-SWC shall evaluate the status of the bulbs.
91. Analysis of ECU30 - When the bulbs are powered, the Actuator-SWC shall read and provide the status of the bulbs (read_current_L, read_current_R).
92. Analysis of ECU21 - Detected faults shall be signaled via CAN BUS LBFailure.
93. Analysis of ECU23 - The Actuator-SWC shall initiate a diagnosis of each element of the bulb health measurement path and evaluate the results.
94. Analysis of ECU24 - The correct routing of bulb health measurement values read_current_L, read_current_R through the AUTOSAR BSW/RTE shall be ensured.
95. Analysis of ECU25 - The ADC-HW shall convert the measured current to read_current_L, read_current_R
96. Analysis of ECU26 - The correct 数据 exchange (时序 and content) between the SW-components shall be ensured.
97. Conclusion
98. Potential Safety Improvement for Future AUTOSAR Releases
99. Abbreviation/术语表
100. References
101. 输入文档与相关标准规范
102. Figures and Tables
