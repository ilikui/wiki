# Specification of CAN Driver (`CANDriver`)

> [返回本类索引](index.md)

| 属性     | 值                                           |
| -------- | -------------------------------------------- |
| 平台     | CP                                           |
| 类别     | SWS — 软件模块规范（Software Specification） |
| UID      | 011                                          |
| 规范版本 | R26-11                                       |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CANDriver_011\AUTOSAR_CP_SWS_CANDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CANDriver_011\AUTOSAR_CP_SWS_CANDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CANDriver_011\zzgen\CP_SWS_CANDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module CAN Driver (called "Can module" in this document). The Can module is part of the lowest layer, performs the hardware access and offers a hardware independent API to the upper layer. The only upper layer that has access to the Can module is the CanIf module (see also ). The Can module provides services for initiating transmissions and calls the callback functions of the CanIf module for notifying events, independently from the hardware. Furthermore, it provides services to control the behavior and state of the CAN controllers that are belonging to the same CAN Hardware Unit. Several CAN controllers can be controlled by a single Can module as long as they belong to the same CAN Hardware Unit. For a closer description of CAN controller and CAN Hardware Unit see chapter Acronyms and abbreviations and a diagram in .

## 章节详细内容

### 1. 简介与功能概述

_原文标题：Introduction and functional Overview_

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module CAN Driver (called "Can module" in this document). The Can module is part of the lowest layer, performs the hardware access and offers a hardware independent API to the upper layer. The only upper layer that has access to the Can module is the CanIf module (see also ). The Can module provides services for initiating transmissions and calls the callback functions of the CanIf module for notifying events, independently from the hardware. Furthermore, it provides services to control the behavior and state of the CAN controllers that are belonging to the same CAN Hardware Unit. Several CAN controllers can be controlled by a single Can module as long as they belong to the same CAN Hardware Unit. For a closer description of CAN controller and CAN Hardware Unit see chapter Acronyms and abbreviations and a diagram in .

### 2. 缩略语

_原文标题：Acronyms and Abbreviations_

| Abbreviation / Acronym:        | Description:                                                                                                                                                                                                                                    |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CAN controller                 | A CAN controller serves exactly one physical channel.                                                                                                                                                                                           |
| CAN Hardware Unit              | A CAN Hardware Unit may consists of one or multiple CAN controllers of the same type and one or multiple CAN RAM areas. The CAN Hardware Unit is either on-chip, or an external device. The CAN Hardware Unit is represented by one CAN driver. |
| CAN L-PDU                      | Data Link Layer Protocol Data Unit. Consists of Identifier, Data Length and Data (SDU). (see)                                                                                                                                                   |
| CAN L-SDU                      | Data Link Layer Service Data Unit. Data that is transported inside the L-PDU. (see)                                                                                                                                                             |
| DLC                            | Data Length Code (part of CAN message describes the SDU length)                                                                                                                                                                                 |
| Hardware Object                | A CAN hardware object is defined as a PDU buffer inside the CAN RAM of the CAN hardware unit / CAN controller. A Hardware Object is defined as L-PDU buffer inside the CAN RAM of the CAN Hardware Unit.                                        |
| Hardware Receive Handle (HRH)  | The Hardware Receive Handle (HRH) is defined and provided by the CAN Driver. Each HRH typically represents just one hardware object. The HRH can be used to optimize software filtering.                                                        |
| Hardware Transmit Handle (HTH) | The Hardware Transmit Handle (HTH) is defined and provided by the CAN Driver.                                                                                                                                                                   |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Priority Inversion

"If only a single transmit buffer is used inner priority inversion may occur. Because of low priority a message stored in the buffer waits until the "traffic on the bus calms down". During the waiting time this message could prevent a message of higher priority generated by the same microcontroller from being transmitted over the bus."

"The problem of outer priority inversion may occur in some CAN implementations. Let us assume that a CAN node wishes to transmit a package of consecutive messages with high priority, which are stored in different message buffers. If the interframe space between these messages on the CAN network is longer than the minimum space defined by the CAN standard, a second node is able to start the transmission of a lower priority message. The minimum interframe space is determined by the Intermission field, which consists of 3 recessive bits. A message, pending during the transmission of another message, is started during the Bus Idle period, at the earliest in the bit following the Intermission field.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. CAN Hardware Unit

The CAN Hardware Unit combines one or several CAN controllers, which may be located on-chip or as external standalone devices of the same type, with common or separate Hardware Objects. Following figure shows a CAN Hardware Unit consisting of two CAN controllers connected to two Physical Channels:

### 5. 相关文档

_原文标题：Related Documentation_

### 6. 相关规范

_原文标题：Related specification_

AUTOSAR provides a General Specification on Basic Software modules (SWS BSW General), which is also valid for CAN Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for CAN Driver.

### 7. 约束与假设

_原文标题：Constraints and assumptions_

### 8. 限制

_原文标题：Limitations_

A CAN controller always corresponds to one physical channel. It is allowed to connect physical channels on bus side. Regardless the CanIf module will treat the concerned CAN controllers separately. A few CAN hardware units support the possibility to combine several CAN controllers by using the CAN RAM, to extend the number of message objects for one CAN controller. These combined CAN controller are handled as one controller by the Can module. The Can module does not support CAN remote frames.

Upstream requirements:
⌈
The Can module shall not transmit messages triggered by remote transmission requests.
⌋

Upstream requirements:
⌈
The Can module shall initialize the CAN HW to ignore any remote transmission requests.
⌋

### 9. 适用的车型领域

_原文标题：Applicability to car domains_

The Can module can be used for any application, where the CAN protocol is used.

### 10. 对其他模块的依赖

_原文标题：Dependencies to other modules_

### 11. Static 配置

_原文标题：Static Configuration_

The configuration elements described in Chapter can be referenced by other BSW modules for their configuration.

### 12. 驱动服务

_原文标题：Driver Services_

Upstream requirements:
⌈
If the CAN controller is on-chip, the Can module shall not use any service of other drivers.
⌋

Upstream requirements:
⌈
The function `Can_Init` shall initialize all on-chip hardware resources that are used by the CAN controller. The only exception to this is the digital I/O pin configuration (of pins used by CAN), which is done by the port driver.
⌋

⌈
The Mcu module (SPAL see ) shall configure register settings that are 'shared' with other modules.
⌋

Implementation hint: The Mcu module shall be initialized before initializing the Can module.

Upstream requirements:
⌈
If an off-chip CAN controller is used, the Can module shall use services of other MCAL drivers (e.g. SPI).
⌋

Implementation hint: If the Can module uses services of other MCAL drivers (e.g. SPI), it must be ensured that these drivers are up and running before initializing the Can module. The sequence of initialization of different drivers is partly specified in .

⌈
The Can module shall use the synchronous APIs of the underlying MCAL drivers and shall not provide callback functions that can be called by the MCAL drivers.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 系统服务

_原文标题：System Services_

⌈
In special hardware cases, the Can module shall poll for events of the hardware.
⌋

⌈
The Can module shall use the OsCounter provided by the system service for timeout detection in case the hardware does not react in the expected time (hardware malfunction) to prevent endless loops.
⌋

Implementation hint: The blocking time of the Can module function that is waiting for hardware reaction shall be shorter than the CAN main function (i.e. `Can_MainFunction_Read`) trigger period, because the CAN main functions can't be used for that purpose.

### 14. Can 模块 Users

_原文标题：Can module Users_

Upstream requirements:
⌈
The Can module interacts among other modules (eg. Default Error Tracer (DET), Ecu State Manager (ECUM)) with the CanIf module in a direct way. This document never specifies the actual origin of a request or the actual destination of a notification. The driver only sees the CanIf module as origin and destination.
⌋

### 15. 文件结构

_原文标题：File Structure_

⌈
`Can_GeneralTypes`.h shall contain all types and constants that are shared among the AUTOSAR CAN modules Can, CanIf and CanTrcv.
⌋

### 16. 需求追踪

_原文标题：Requirements Tracing_

| Requirement                                                                                                                         | Description | Satisfied by |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| Basic SW security events                                                                                                            |             |              |
| Modules of the \muC Abstraction Layer (MCAL) may not have hard coded horizontal interfaces                                          |             |              |
| All Basic SW Modules written in C language shall conform to the MISRA C 2025 Standard.                                              |             |              |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function                  |             |              |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration                                                  |             |              |
| The Implementation of interrupt service routines shall be done by the Operating System, complex drivers or modules                  |             |              |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks                  |             |              |
| AUTOSAR Basic Software Modules shall be compiler and platform independent                                                           |             |              |
| AUTOSAR Basic Software Modules shall not define global data in their header files, but in the C file                                |             |              |
| All AUTOSAR Basic Software Modules shall indicate all global data with read-only purposes by explicitly assigning the const keyword |             |              |
| Shared code shall be reentrant                                                                                                      |             |              |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity                                                   |             |              |
| It shall be allowed to use macros instead of                                                                                        |             |              |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 功能规范

_原文标题：Functional Specification_

On L-PDU transmission, the Can module writes the L-PDU in an appropriate buffer inside the CAN controller hardware. See chapter 7.5 for closer description of L-PDU transmission. On L-PDU reception, the Can module calls the RX indication callback function with ID, Data Length and pointer to L-SDU as parameter. See chapter 7.6 for closer description of L-PDU reception. The Can module provides an interface that serves as periodical processing function, and which must be called by the Basic Software Scheduler module periodically. Furthermore, the Can module provides services to control the state of the CAN controllers. Bus-off and Wake-up events are notified by means of callback functions. The Can module is a Basic Software Module that accesses hardware resources. Therefore, it is designed to fulfill the requirements for Basic Software Modules specified in `AUTOSAR_SRS_SPAL` (see ).

Upstream requirements: ,
⌈
The Can module shall implement the interrupt service routines for all CAN Hardware Unit interrupts that are needed.
⌋

⌈
The Can module shall disable all unused interrupts in the CAN controller.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 驱动范围

_原文标题：Driver Scope_

One Can module provides access to one CAN Hardware Unit that may consist of several CAN controllers.

Upstream requirements:
⌈
For CAN Hardware Units of different type, different Can modules shall be implemented.
⌋

⌈
In case several CAN Hardware Units (of same or different vendor) are implemented in one ECU the function names, and global variables of the Can modules shall be implemented such that no two functions with the same name are generated.
⌋

The naming convention is as follows:

<Can module name>_<vendorID>_<Vendor specific API name><driver abbreviation>()

specifies the naming convention.

⌈
The naming conventions shall be used only in that case, if multiple different CAN controller types on one ECU have to be supported.
⌋

⌈
If only one controller type is used, the original naming conventions without any driver abbreviation extensions are sufficient.
⌋

See for description how several Can modules are handled by the CanIf module.

### 19. 驱动状态 Machine

_原文标题：Driver State Machine_

The Can module has a very simple state machine, with the two states `CAN_UNINIT` and `CAN_READY`. shows the state machine.

Upstream requirements:
⌈
After power-up/reset, the Can module shall be in the state `CAN_UNINIT`.
⌋

Upstream requirements: ,
⌈
The function `Can_Init` shall change the module state to `CAN_READY`, after initializing all controllers inside the HW Unit.
⌋

Upstream requirements: ,
⌈
The function `Can_Init` shall initialize all CAN controllers according to their configuration.
⌋

Each CAN controller must then be started separately by calling the function `Can_SetControllerMode`(`CAN_CS_STARTED`). Implementation hint: Hardware register settings that have impact on all CAN controllers inside the HW Unit can only be set in the function `Can_Init`. Implementation hint: The ECU State Manager module shall call `Can_Init` at most once during runtime.

Upstream requirements:
⌈
The function `Can_DeInit` shall change the module state to `CAN_UNINIT` before de-initializing all controllers inside the HW unit
⌋

Refer to .

### 20. CAN Controller 状态 Machine

_原文标题：CAN Controller State Machine_

Each CAN controller has complex state machines implemented in hardware. For simplification, the number of states is reduced to the following four basic states in this description: UNINIT, STOPPED, STARTED and SLEEP. Any CAN hardware access is encapsulated by functions of the Can module, but the Can module does not memorize the state changes. The Can module offers the services `Can_Init`, `Can_SetBaudrate` and `Can_SetControllerMode`. These services perform the necessary register settings that cause the required change of the hardware CAN controller state. There are two possibilities for triggering state changes by external events:

- Bus-off event
- HW wakeup event

These events are indicated either by an interrupt or by a status bit that is polled in the `Can_MainFunction_BusOff` or `Can_MainFunction_Wakeup`. The Can module does the register settings that are necessary to fulfill the required behavior (i.e. no hardware recovery in case of bus off). Then it notifies the CanIf module with the corresponding callback function. The software state is then changed inside this callback function.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. CAN Controller 状态描述

_原文标题：CAN Controller State Description_

This chapter describes the required hardware behavior for the different controller states.

CAN controller state UNINIT

The CAN controller is not initialized. All registers belonging to the CAN module are in reset state, CAN interrupts are disabled. The CAN Controller is not participating on the CAN bus.

CAN controller state STOPPED

In this state the CAN Controller is initialized but does not participate on the bus. In addition, error frames and acknowledges must not be sent. (Example: For many controllers entering an 'initialization'-mode causes the controller to be stopped.)

CAN controller state STARTED

The controller is in a normal operation mode with complete functionality, which means it participates in the network. For many controllers leaving the 'initialization'-mode causes the controller to be started.

CAN controller state SLEEP

The hardware settings only differ from state STOPPED for CAN hardware that support a sleep mode (wake-up over CAN bus directly supported by CAN hardware).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. CAN Controller 状态 Transitions

_原文标题：CAN Controller State Transitions_

A state transition is triggered by software with the function `Can_SetControllerMode` with the required transition as parameter. A successful state transition triggered by software is notified by the callback function (`CanIf_ControllerModeIndication`). The monitoring whether the requested state is achieved is part of an upper layer module and is not part of the Can module. Some transitions are triggered by events on the bus (hardware). These transitions cause a notification by means of a callback function. The behavior for invalid transitions in production code is undefined. shows all valid state transitions.

### 23. 状态 transition caused by 功能 Can_Init

_原文标题：State transition caused by function Can_Init_

- UNINIT -> STOPPED (for all controllers in HW unit)
- software triggered by the function call `Can_Init`
- does configuration for all CAN controllers inside HW Unit

All control registers are set according to the static configuration.

⌈
The function `Can_Init` shall set all CAN controllers in the state STOPPED.
⌋

When the function `Can_Init` is entered and the Can module is not in state `CAN_UNINIT` or the CAN controllers are not in state UNINIT, it shall raise the error `CAN_E_TRANSITION` (Compare to and ).

### 24. 状态 transition caused by 功能 Can_SetBaudrate

_原文标题：State transition caused by function Can_SetBaudrate_

_[-] STOPPED -> STOPPED; SLEEP -> SLEEP; STARTED -> STARTED
_[-] software triggered by the function call `Can_SetBaudrate` \*[-] changes the CAN controller configuration

CAN controller registers are set according to the static configurations.

⌈
If the call of `Can_SetBaudrate`() would cause a re-initialization of the CAN Controller and the CAN Controller is not in state STOPPED, it shall return E_NOT_OK.
⌋

⌈
If re-initialization is necessary the function `Can_SetBaudrate` shall maintain the CAN controller in the state STOPPED.
⌋

⌈
If re-initialization is necessary the function `Can_SetBaudrate` shall ensure that any settings that will cause the CAN controller to participate in the network are not set.
⌋

### 25. 状态 transition caused by 功能 Can_SetControllerMode

_原文标题：State transition caused by function Can_SetControllerMode_

The software can trigger a CAN controller state transition with the function `Can_SetControllerMode`. Depending on the CAN hardware, a change of a register setting to transition to a new CAN controller state may take over only after a delay. The Can module notifies the upper layer (`CanIf_ControllerModeIndication`) after a successful state transition about the new state. The monitoring whether the requested state is achieved is part of an upper layer module and is not part of the Can module.

⌈
The function `Can_MainFunction_Wakeup` shall poll a flag of the CAN status register until the flag signals that the change takes effect and notify the upper layer with function `CanIf_ControllerModeIndication` about a successful state transition referring to the corresponding CAN controller with the abstract CanIf ControllerId.
⌋

⌈
The function `Can_SetControllerMode` shall use the system service GetCounterValue for timeout monitoring to avoid blocking functions.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 状态 transition caused by Hardware Events

_原文标题：State transition caused by Hardware Events_

State transition caused by Hardware Wakeup (triggered by wake-up event from CAN bus)

- SLEEP -> STOPPED
- triggered by incoming L-PDUs
- The ECU Statemanager module is notified with the function `EcuM_CheckWakeup`

This state transition will only occur when sleep mode is supported by hardware.

⌈
On hardware wakeup (triggered by a wake-up event from CAN bus), the CAN controller shall transition into the state STOPPED.
⌋

Upstream requirements: , ,
⌈
On hardware wakeup (triggered by a wake-up event from CAN bus), the Can module shall call the function `EcuM_CheckWakeup` either in interrupt context or in the context of `Can_MainFunction_Wakeup`.
⌋

⌈
The Can module shall not further process the L-PDU that caused a wake-up.
⌋

Upstream requirements:
⌈
In case of a CAN bus wake-up during sleep transition, the function `Can_SetControllerMode`(`CAN_CS_STOPPED`) shall return E_NOT_OK.
⌋

State transition caused by Bus-Off (triggered by state change of CAN controller)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 状态 transition caused by 功能 Can_DeInit

_原文标题：State transition caused by function Can_DeInit_

_[-] STOPPED -> UNINIT; SLEEP -> UNINIT (for all controllers in HW unit)
_[-] software triggered by the function call `Can_DeInit` \*[-] prepares all CAN controllers inside HW Unit to be re-configured

Upstream requirements: ,
⌈
The function `Can_DeInit` shall set all CAN controllers in the state UNINIT
⌋

When the function `Can_DeInit` is entered and the Can module is not in state `CAN_READY` or any of the CAN controllers is in state STARTED, it shall raise the error `CAN_E_TRANSITION` (Refer to and ).

### 28. Can 模块/Controller 初始化

_原文标题：Can module/Controller Initialization_

The ECU State Manager module shall initialize the Can module during startup phase by calling the function `Can_Init` before using any other functions of the Can module.

Upstream requirements:
⌈
The function `Can_Init` shall initialize: static variables, including flags, Common setting for the complete CAN HW unit, CAN controller specific settings for each CAN controller
⌋

Upstream requirements:
⌈
`Can_Init` shall not change registers of CAN controller Hardware resources that are not used.
⌋

The Can module shall apply the following rules regarding initialization of controller registers:

Upstream requirements:
⌈

- If the hardware allows for only one usage of the register, the Can module implementing that functionality is responsible initializing the register.
- If the register can affect several hardware modules and if it is an I/O register it shall be initialized by the PORT driver.
- If the register can affect several hardware modules and if it is not an I/O register it shall be initialized by the MCU driver.
- One-time writable registers that require initialization directly after reset shall be initialized by the startup code.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. L-PDU transmission

On L-PDU transmission, the Can module converts the L-PDU contents ID and Data Length to a hardware specific format (if necessary) and triggers the transmission.

Upstream requirements:
⌈
Data mapping by CAN to memory is defined in a way that the CAN data byte which is sent out first is array element 0, the CAN data byte which is sent out last is array element 7 or 63 in case of CAN FD.
⌋

⌈
If the presentation inside the CAN Hardware buffer differs from AUTOSAR definition, the Can module must provide an adapted SDU-Buffer for the upper layers.
⌋

Upstream requirements:
⌈
Several TX hardware objects with unique HTHs may be configured. The CanIf module provides the HTH as parameter of the TX request. See Figure 7.3 for a possible configuration.
⌋

⌈
The function `Can_Write` shall store the swPduHandle that is given inside the parameter PduInfo until the Can module calls the `CanIf_TxConfirmation` for this request where the swPduHandle is given as parameter.
⌋

The feature of is used to reduce time for searching in the CanIf module implementation.

Upstream requirements:
⌈
The Can module shall call `CanIf_TxConfirmation` to indicate a successful transmission.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Priority Inversion

Multiplexed transmission can be used to avoid outer/inner priority inversion (see chapter ).

Upstream requirements:
⌈
| The Can module shall allow that the functionality "Multiplexed Transmission" is statically configurable (ON | OFF) at pre-compile time. |
|---|---|

⌋

Upstream requirements:
⌈
Several transmit hardware objects (defined by "CanHwObjectCount") shall be assigned by one HTH to represent one transmit entity to the upper layer.
⌋

Upstream requirements:
⌈
The Can module shall support multiplexed transmission mechanisms for devices where either

- Multiple transmit hardware objects, which are grouped to a transmit entity can be filled over the same register set, and the microcontroller stores the L-PDU into a free buffer autonomously, or
- The Hardware provides registers or functions to identify a free transmit hardware object within a transmit entity.
  ⌋

  Upstream requirements:
  ⌈
  The Can module shall support multiplexed transmission for devices, which send L-PDUs in order of L-PDU priority.
  ⌋

Note: Ordering of L-PDUs by priority avoids inner priority inversion of the L-PDUs assigned to a Basic-CAN configured for multiplexed transmission.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Transmit 数据 Consistency

_原文标题：Transmit Data Consistency_

No content.

### 32. L-PDU reception

Upstream requirements:
⌈
On L-PDU reception, the Can module shall call the RX indication callback function `CanIf_RxIndication` with ID, Hoh, abstract CanIf ControllerId in parameter Mailbox, and the Data Length and pointer to the L-SDU buffer in parameter PduInfoPtr.
⌋

⌈
In case of an Extended CAN frame, the Can module shall convert the ID to a standardized format since the Upper layer (CANIF) does not know whether the received CAN frame is a Standard CAN frame or Extended CAN frame. In case of an Extended CAN frame, MSB of a received CAN frame ID needs to be made as '1' to mark the received CAN frame as Extended.
⌋

Upstream requirements:
⌈
The RX-interrupt service routine of the corresponding HW resource or the function `Can_MainFunction_Read` in case of polling mode shall call the callback function `CanIf_RxIndication`.
⌋

Upstream requirements:
⌈
Data mapping by CAN to memory is defined in a way that the CAN data byte which is received first is array element 0, the CAN data byte which is received last is array element 7 or 63 in case of CAN FD.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Receive 数据 Consistency

_原文标题：Receive Data Consistency_

To prevent loss of received messages, some controllers support a FIFO built from a set of hardware objects, while on other controllers it is possible to configure another hardware object with the same properties that works as a shadow buffer and steps in when the main object is busy.

⌈
The CAN driver shall support controllers which implement a hardware FIFO. The size of the FIFO is configured via "CanHwObjectCount".
⌋

⌈
Controllers that do not support a hardware FIFO often provide the capabilities to implement a shadow buffer mechanism, where additional hardware objects take over when the primary hardware object is busy. The number of hardware objects is configured via "CanHwObjectCount".
⌋

⌈
The Can module shall copy the L-SDU in a shadow buffer after reception, if the RX buffer cannot be protected (locked) by CAN Hardware against overwriting by a newly received message.
⌋

⌈
The Can module shall copy the L-SDU in a shadow buffer, if the CAN Hardware is not globally accessible.
⌋

The complete RX processing (including copying to destination layer, e.g. COM) is done in the context of the RX interrupt or in the context of the `Can_MainFunction_Read`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 唤醒 Concept

_原文标题：Wakeup Concept_

The Can module handles wakeups that can be detected by the Can controller itself and not via the Can transceiver. There are two possible scenarios: wakeup by interrupt and wakeup by polling. For wakeup by interrupt, an ISR of the Can module is called when the hardware detects the wakeup.

Upstream requirements: , ,
⌈
If the ISR for wakeup events is called, it shall call `EcuM_CheckWakeup` in turn. The parameter passed to `EcuM_CheckWakeup` shall be the ID of the wakeup source referenced by the CanWakeupSourceRef configuration parameter.
⌋

The ECU State Manager will then set up the MCU and call the Can module back via the Can Interface, resulting in a call to `Can_CheckWakeup`. When wakeup events are detected by polling, the ECU State Manager will cyclically call `Can_CheckWakeup` via the Can Interface as before. In both cases, `Can_CheckWakeup` will check if there was a wakeup detected by a Can controller and return the result. The CAN driver will then inform the ECU State Manager of the wakeup event via `EcuM_SetWakeupEvent`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. CAN Controller with selective 唤醒 functionality

_原文标题：CAN Controller with selective wakeup functionality_

This section describes requirements for CAN controller with selective wakeup functionality. Partial Networking is a state in a CAN system where some nodes are in low power mode while other nodes are communicating. This reduces the power consumption by the entire network. Nodes in the low-power modes are woken up by predefined wakeup frames. CAN Controller which support selective wakeup can be woken up by predefined wakeup frames.

⌈
If selective wakeup is supported by the CAN controller hardware, it shall be indicated with the configuration parameter CanHwPnSupport.
⌋

⌈
If selective wakeup is supported, CAN controller shall be configured to wake up on a particular CAN frame or a group of CAN frames using the parameters CanPnFrameCanId, CanPnFrameCanIdMask and CanPnFrameDataMask.
⌋

For API `Can_SetCanPnFrameDataMask`
⌈
If selective wakeup is supported, `Can_SetCanPnFrameDataMask` is called and Length parameter matches configuration parameter CanPnFrameDlc, CAN controller shall be re-configured to wake up on a accordingly configured CAN frames (see ) and data mask provided with DataMaskArrayPtr.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 108 章（内容从略，见纯文本全文）

36. 通知 concept
37. Reentrancy issues
38. Hardware Timestamping
39. 错误分类
40. Development 错误
41. Runtime 错误
42. Production 错误
43. Extended Production 错误
44. Return Value
45. CAN FD 支持
46. CAN XL Extension
47. Reporting of CAN 错误类型
48. API 规范
49. Imported 类型
50. 类型定义
51. Can_ConfigType
52. Can_PduType
53. Can_IdType
54. Can_HwHandleType
55. Can_HwType
56. Extension to Std_ReturnType
57. Can_ErrorStateType
58. Can_ControllerStateType
59. Can_ErrorType
60. Can_TimeStampType
61. 功能定义
62. 服务 affecting the complete hardware unit
63. Can_Init
64. Can_DeInit
65. 服务 affecting one single CAN Controller
66. Can_SetBaudrate
67. Can_SetControllerMode
68. Can_DisableControllerInterrupts
69. Can_EnableControllerInterrupts
70. Can_CheckWakeup
71. Can_GetControllerErrorState
72. Can_GetControllerMode
73. Can_GetControllerRxErrorCounter
74. Can_GetControllerTxErrorCounter
75. Can_GetCurrentTime
76. Can_EnableEgressTimeStamp
77. Can_GetEgressTimeStamp
78. Can_GetIngressTimeStamp
79. Can_SetCanPnFrameDataMask
80. 服务 affecting a Hardware 句柄
81. Can_Write
82. Call-back 通知
83. Call-out 功能
84. Enabling/Disabling 唤醒通知
85. Scheduled functions
86.
87. Can_MainFunction_Write
88. Can_MainFunction_Read
89. Can_MainFunction_BusOff
90. Can_MainFunction_Wakeup
91. Can_MainFunction_Mode
92. Expected 接口
93. Mandatory 接口
94. Optional 接口
95. Configurable 接口
96. 时序图
97. Interaction between Can and CanIf 模块
98. 唤醒 sequence
99. 配置规范
100.  How to read this chapter
101.  Containers and 配置 parameters
102.  Can
103.  CanGeneral
104.  CanController
105.  CanControllerBaudrateConfig
106.  CanControllerFdBaudrateConfig
107.  CanPartialNetwork
108.  CanPnFrameDataMaskSpec
109.  CanHardwareObject
110.  CanHwFilter
111.  CanConfigSet
112.  CanMainFunctionRWPeriods
113.  CanXLGeneral
114.  CanXLController
115.  CanXLHardwareObject
116.  CanXLHwFilter
117.  CanXLBaudrateConfig
118.  CanXLEthEgressFifo
119.  CanXLEthIngressFifo
120.  不适用需求
121.  附录
122.  Change history of AUTOSAR traceable items
123.  Traceable item history of this document according to AUTOSAR Release R24-11
124.  Added Constraints in R24-11
125.  Changed Constraints in R24-11
126.  Deleted Constraints in R24-11
127.  Added 规范 Items in R24-11
128.  Changed 规范 Items in R24-11
129.  Deleted 规范 Items in R24-11
130.  Traceable item history of this document according to AUTOSAR Release R25-11
131.  Added Constraints in R25-11
132.  Changed Constraints in R25-11
133.  Deleted Constraints in R25-11
134.  Added 规范 Items in R25-11
135.  Changed 规范 Items in R25-11
136.  Deleted 规范 Items in R25-11
137.  Traceable item history of this document according to AUTOSAR Release R26-11
138.  Added 规范 Items in R26-11
139.  Changed 规范 Items in R26-11
140.  Deleted 规范 Items in R26-11
141.  Added Constraints in R26-11
142.  Changed Constraints in R26-11
143.  Deleted Constraints in R26-11
