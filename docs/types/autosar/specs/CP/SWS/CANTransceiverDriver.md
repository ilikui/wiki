# Specification of CAN Transceiver Driver (`CANTransceiverDriver`)

> [返回本类索引](index.md)

| 属性     | 值                                           |
| -------- | -------------------------------------------- |
| 平台     | CP                                           |
| 类别     | SWS — 软件模块规范（Software Specification） |
| UID      | 071                                          |
| 规范版本 | R26-11                                       |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CANTransceiverDriver_071\AUTOSAR_CP_SWS_CANTransceiverDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CANTransceiverDriver_071\AUTOSAR_CP_SWS_CANTransceiverDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CANTransceiverDriver_071\zzgen\CP_SWS_CANTransceiverDriver.complete.txt`

## 文档简介

This specification describes the functionality, APIs and configuration of CAN Transceiver Driver module. The CAN Transceiver Driver module is responsible for handling the CAN transceiver hardware chips on an ECU.

The CAN Transceiver is a hardware device, which adapts the signal levels that are used on the CAN bus to the logical (digital) signal levels recognised by a microcontroller.

In addition, the transceivers are able to detect electrical malfunctions like wiring issues, ground offsets or transmission of long dominant signals. Depending on the interfacing with the microcontroller, they flag the detected error summarized by a single port pin or very detailed by SPI.

Some transceivers support power supply control and wake up via the CAN bus. Different wake up/sleep and power supply concepts are usual on the market.

Within the automotive environment, there are mainly three different CAN bus physics used. These are ISO11898 for high-speed CAN (up to 1Mbits/s), ISO11519 for low-speed CAN (up to 125Kbits/s) and SAE J2411 for single-wire CAN.

Latest developments include System Basis Chips (SBCs) where power supply control and advanced watchdogs are implemented in addition to CAN. These are enclosed in one housing and controlled through single interface (e.g. via SPI).

## 模块依赖

| Module | Dependencies                                                                                                            |
| ------ | ----------------------------------------------------------------------------------------------------------------------- |
| CanIf  | All CAN transceiver drivers are arranged below CanIf.                                                                   |
| ComM   | ComM steers CAN transceiver driver communication modes via CanIf. Each CAN transceiver driver is steered independently. |
| DET    | DET gets development error information from CAN transceiver driver.                                                     |
| DEM    | DEM gets production error information from CAN transceiver driver.                                                      |
| DIO    | DIO module is used to access CAN transceiver device connected via ports.                                                |
| EcuM   | EcuM gets information about wake up events from CAN transceiver driver via CanIf.                                       |
| SPI    | SPI module is used to access CAN transceiver device connected via SPI.                                                  |

## 章节详细内容

### 1. 简介

_原文标题：Introduction_

This specification describes the functionality, APIs and configuration of CAN Transceiver Driver module. The CAN Transceiver Driver module is responsible for handling the CAN transceiver hardware chips on an ECU.

The CAN Transceiver is a hardware device, which adapts the signal levels that are used on the CAN bus to the logical (digital) signal levels recognised by a microcontroller.

In addition, the transceivers are able to detect electrical malfunctions like wiring issues, ground offsets or transmission of long dominant signals. Depending on the interfacing with the microcontroller, they flag the detected error summarized by a single port pin or very detailed by SPI.

Some transceivers support power supply control and wake up via the CAN bus. Different wake up/sleep and power supply concepts are usual on the market.

Within the automotive environment, there are mainly three different CAN bus physics used. These are ISO11898 for high-speed CAN (up to 1Mbits/s), ISO11519 for low-speed CAN (up to 125Kbits/s) and SAE J2411 for single-wire CAN.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Goal of CAN 收发器驱动

_原文标题：Goal of CAN Transceiver Driver_

The target of this document is to specify the interfaces and behavior which are applicable to most current and future CAN transceiver devices.

The CAN transceiver driver abstracts the CAN transceiver hardware. It offers a hardware independent interface to the higher layers. It abstracts from the ECU layout by using APIs of MCAL layer to access the CAN transceiver hardware.

### 3. Explicitly uncovered CAN 收发器 functionality

_原文标题：Explicitly uncovered CAN transceiver functionality_

Some CAN bus transceivers offer additional functionality, for example, ECU self test or error detection capability for diagnostics.

ECU self test and error detection are not defined within AUTOSAR and requiring such functionality would lock out most currently used transceiver hardware chips. Therefore, features like "ground shift detection", "selective wake up", "slope control" are not supported.

### 4. Single wire CAN transceivers according SAE J2411

Single wire CAN according SAE J2411 is not supported by AUTOSAR.

### 5. 缩略语

_原文标题：Acronyms and Abbreviations_

The glossary below includes acronyms and abbreviations relevant to the CAN Transceiver Driver module that are not included in the .

| Abbreviation: | Description:                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| ComM          | Communication Manager                                                                                      |
| DEM           | Diagnostic Event Manager                                                                                   |
| DET           | Default Error Tracer                                                                                       |
| DIO           | Digital Input Output (SPAL module)                                                                         |
| EB            | Externally Buffered channels. Buffers containing data to transfer are outside the SPI Handler/Driver.      |
| EcuM          | ECU State Manager                                                                                          |
| IB            | Internally Buffered channels. Buffers containing data to transfer are inside the SPI Handler/Driver.       |
| ISR           | Interrupt Service Routine                                                                                  |
| MCAL          | The MCAL, Microcontroller Abstraction Layer, is defined in AUTOSAR Layered Software Architecture           |
| Port          | Port module (SPAL module)                                                                                  |
| n/a           | Not Applicable                                                                                             |
| SBC           | System Basis Chip; a device, which integrates e.g. CAN and/or LIN transceiver, watchdog and power control. |
| SPAL          | Standard Peripheral Abstraction Layer                                                                      |

SPI

| Channel | A channel is a software exchange medium for data that are defined with the same criteria: configuration parameters, number of data elements with same size and data pointers (source & destination) or location. See specification of SPI driver for more details. |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

SPI

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 相关文档

_原文标题：Related documentation_

### 7. 输入文档与相关标准规范

_原文标题：Input documents & related standards and norms_

### 8. 相关规范

_原文标题：Related specification_

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for CAN Transceiver Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for CAN Transceiver Driver.

### 9. 约束与假设

_原文标题：Constraints and assumptions_

### 10. 限制

_原文标题：Limitations_

Upstream requirements:
⌈
The CAN bus transceiver hardware shall provide the functionality and an interface which can be mapped to the operation mode model of the AUTOSAR CAN transceiver driver.
⌋

See also Chapter [].

### 11. 适用的车型领域

_原文标题：Applicability to car domains_

This driver might be applicable in all car domains using CAN for communication.

### 12. 对其他模块的依赖

_原文标题：Dependencies to other modules_

| Module | Dependencies                                                                                                            |
| ------ | ----------------------------------------------------------------------------------------------------------------------- |
| CanIf  | All CAN transceiver drivers are arranged below CanIf.                                                                   |
| ComM   | ComM steers CAN transceiver driver communication modes via CanIf. Each CAN transceiver driver is steered independently. |
| DET    | DET gets development error information from CAN transceiver driver.                                                     |
| DEM    | DEM gets production error information from CAN transceiver driver.                                                      |
| DIO    | DIO module is used to access CAN transceiver device connected via ports.                                                |
| EcuM   | EcuM gets information about wake up events from CAN transceiver driver via CanIf.                                       |
| SPI    | SPI module is used to access CAN transceiver device connected via SPI.                                                  |

### 13. 文件结构

_原文标题：File structure_

### 14. 代码文件结构

_原文标题：Code file structure_

Upstream requirements:
⌈
The naming convention prescribed by AUTOSAR is applied to all files of the CanTrcv module.
⌋

⌈
| File name | Requirements | Description |
|---|---|---|
| CanTrcv.c | SWS_CanTrcv_00069 | The implementation general c file. It does not contain interrupt routines. |
| CanTrcv.h | SWS_CanTrcv_00052 | It contains only information relevant for other BSW modules (API). Differences in API depending in configuration are encapsulated. |

⌋

### 15. 需求 Tracability

_原文标题：Requirements Tracability_

| Requirement                                                                                                                      | Description | Satisfied by |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------ |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function               |             |              |
| Configuration files of AUTOSAR Basic SW module shall be readable for human beings                                                |             |              |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time         |             |              |
| The scheduling strategy that is built inside the Basic Software Modules shall be compatible with the strategy used in the system |             |              |
| Unique Name of Basic Software Modules                                                                                            |             |              |
| API naming convention                                                                                                            |             |              |
| Error values naming convention                                                                                                   |             |              |
| All Basic Software Modules shall strictly separate error and status information                                                  |             |              |
| Basic SW module shall be able to shutdown                                                                                        |             |              |
| Classification of development errors                                                                                             |             |              |
| Reporting of production relevant error status                                                                                    |             |              |
| The unit of time for specification and configuration of Basic SW modules shall be preferably in physical time unit               |             |              |
| A Naming seperation of different instances of BSW drivers shall be in place                                                      |             |              |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors.          |             |              |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能规范

_原文标题：Functional specification_

### 17. CAN 收发器驱动 operation modes

_原文标题：CAN transceiver driver operation modes_

Upstream requirements: , ,
⌈
The CanTrcv module shall implement the state diagram shown below, independently for each configured transceiver.
⌋

The main idea intended by this diagram, is to support a lot of up to now available CAN bus transceivers in a generic view. Depending on the CAN transceiver hardware, the model may have one or two states more than necessary for a given CAN transceiver hardware but this will clearly decouple the ComM and EcuM from the used hardware.

⌈
The function `CanTrcv_Init` causes a state change to either `CANTRCV_TRCVMODE_SLEEP` or `CANTRCV_TRCVMODE` \_STANDBY. This depends on the configuration and is independently configurable for each transceiver.
⌋

| State      | Description                                                                                                                                                             |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POWER_ON   | ECU is fully powered.                                                                                                                                                   |
| NOT_ACTIVE | State of CAN transceiver hardware depends on ECU hardware and on Dio and Port driver configuration. CAN transceiver driver is not initialized and therefore not active. |
| ACTIVE     | The function CanTrcv_Init has been called. It carries CAN transceiver driver to active state.                                                                           |

Depending on configuration CAN transceiver driver enters the state `CANTRCV_TRCVMODE_SLEEP` or `CANTRCV_TRCVMODE_STANDBY`.
| CANTRCV_TRCVMODE_NORMAL | Full bus communication. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Operation 模式 switching

_原文标题：Operation mode switching_

A mode switch is requested with a call to the function `CanTrcv_SetOpMode`.

⌈
A mode switch request to the current mode is allowed and shall not lead to an error, even if DET is enabled.
⌋

⌈
The CanTrcv module shall invoke the callback function `CanIf_TrcvModeIndication`, for each mode switch request with call to `CanTrcv_SetOpMode`, after the requested mode has been reached referring to the corresponding CAN transceiver with the abstract CanIf TransceiverId. See see .
⌋

### 19. CAN 收发器 hardware operation modes

_原文标题：CAN transceiver hardware operation modes_

The CAN transceiver hardware may support more mode transitions than shown in the state diagram above. The dependencies and the recommended implementations behaviour are explained in this chapter.

It is implementation specific to decide which CAN transceiver hardware state is covered by which CAN transceiver driver software state. An implementation has to guarantee that the whole functionality of the described CAN transceiver driver software state is realized by the implementation.

### 20. 示例 for temporary "Go-To-Sleep" 模式

_原文标题：Example for temporary "Go-To-Sleep" mode_

The mode often referred to as "Go-to-sleep" is a temporary mode when switching from Normal to Sleep. The driver encapsulates such a temporary mode within one of the CAN transceiver driver software states. In addition, the CAN transceiver driver switches first from Normal to Standby and then with an additional API call from Standby to Sleep.

### 21. 示例 for "PowerOn/ListenOnly" 模式

_原文标题：Example for "PowerOn/ListenOnly" mode_

The mode often referred to as "PowerOn" or "ListenOnly" is a mode where the CAN transceiver hardware is only able to receive messages but not able to send messages. Also, transmission of the acknowledge bit during reception of a message is suppressed. This mode is not supported because it is outside of the CAN standard and not supported by all CAN transceiver hardware chips.

### 22. CAN 收发器 wake up 类型

_原文标题：CAN transceiver wake up types_

There are three different scenarios which are often called wake up:

### 23. Scenario 1：

_原文标题：Scenario 1:_

- MCU is not powered.
- Parts of ECU including CAN transceiver hardware are powered.
- The considered CAN transceiver is in SLEEP mode.
- A wake up event on CAN bus is detected by CAN transceiver hardware.
- The CAN transceiver hardware causes powering of MCU.

In terms of AUTOSAR, this is kept as a cold start and NOT as a wake up.

### 24. Scenario 2：

_原文标题：Scenario 2:_

- MCU is in low power mode.
- Parts of ECU including CAN transceiver hardware are powered.
- The considered CAN transceiver is in STANDBY mode.
- A wake up event on CAN bus is detected by CAN transceiver hardware.
- The CAN transceiver hardware causes a SW interrupt for waking up.

In terms of AUTOSAR, this is kept as a wake up of the CAN channel and of the MCU.

### 25. Scenario 3：

_原文标题：Scenario 3:_

- MCU is in full power mode.
- At least parts of ECU including CAN transceiver hardware are powered.
- The considered CAN transceiver is in STANDBY mode.
- A wake up event on CAN is detected by CAN transceiver hardware.
- The CAN transceiver hardware either causes a SW interrupt for waking up or is polled cyclically for wake up events.

In terms of AUTOSAR, this is kept as a wake up of the CAN channel.

### 26. Enabling/Disabling 唤醒通知

_原文标题：Enabling/Disabling wakeup notification_

⌈
CanTrcv driver shall use the following APIs provided by ICU driver, to enable and disable the wakeup event notification:

- `Icu_EnableNotification`
- `Icu_DisableNotification`

CanTrcv driver shall enable/disable ICU channels only if reference is configured for the parameter CanTrcvIcuChannelRef.
⌋

CanTrcv driver shall ensure the following to avoid the loss of wakeup events:

⌈
It shall enable the ICU channels when the transceiver transitions to the Standby mode (`CANTRCV_STANDBY`).
⌋

⌈
It shall disable the ICU channels when the transceiver transitions to the Normal mode (`CANTRCV_NORMAL`).
⌋

### 27. CAN 收发器 wake up modes

_原文标题：CAN transceiver wake up modes_

CAN transceiver driver offers two wake up modes:

Upstream requirements: , , , , , , , , ,
⌈
`NOT_SUPPORTED` mode
⌋

In mode `NOT_SUPPORTED`, no wake ups are generated by CAN transceiver driver. This mode is supported by all CAN transceiver hardware types.

Upstream requirements: , , , , , , , , ,
⌈
POLLING mode
⌋

In mode POLLING, wake ups generated by CAN transceiver driver may cause CAN channel wake ups. In this mode, no MCU wake ups are possible. This mode presumes a support by used CAN transceiver hardware type. Wake up mode POLLING requires function `CanTrcv_CheckWakeup` and main function `CanTrcv_MainFunction` to be present in source code.

The main function `CanTrcv_MainFunction` shall be called by BSW scheduler and `CanTrcv_CheckWakeup` by CanIf.

The selection of the wake up mode is done by the configuration parameter CanTrcvWakeUpSupport. The support of wake ups may be switched on and off for each CAN transceiver individually by the configuration parameter CanTrcvWakeupByBusUsed.

Note: In both modes the function `CanTrcv_CheckWakeup` shall be present, but the functionality shall be based on the configured wakeup mode (`NOT_SUPPORTED` OR POLLING).

Implementation Hint:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 错误分类

_原文标题：Error Classification_

Chapter describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 29. Development 错误

_原文标题：Development Errors_

Definition of development errors in module CanTrcv
Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API called with wrong parameter for the CAN transceiver | CANTRCV_E_INVALID_TRANSCEIVER | 0x01 |
| API called with null pointer parameter | CANTRCV_E_PARAM_POINTER | 0x02 |
| API service used without initialization | CANTRCV_E_UNINIT | 0x11 |
| API service called in wrong transceiver operation mode (STANDBY expected) | CANTRCV_E_TRCV_NOT_STANDBY | 0x21 |
| API service called in wrong transceiver operation mode (NORMAL expected) | CANTRCV_E_TRCV_NOT_NORMAL | 0x22 |
| API service called with invalid parameter for TrcvWakeupMode | CANTRCV_E_PARAM_TRCV_WAKEUP_MODE | 0x23 |
| API service called with invalid parameter for OpMode | CANTRCV_E_PARAM_TRCV_OPMODE | 0x24 |
| Module initialization has failed, e.g. CanTrcv_Init() called with an invalid pointer in postbuild. | CANTRCV_E_INIT_FAILED | 0x27 |

⌋

### 30. Runtime 错误

_原文标题：Runtime Errors_

Definition of runtime errors in module CanTrcv
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| No/incorrect communication to transceiver. | CANTRCV_E_NO_TRCV_CONTROL | 0x26 |

⌋

### 31. Production 错误

_原文标题：Production Errors_

There are no production errors.

### 32. Extended Production 错误

_原文标题：Extended Production Errors_

A CAN bus error occured during communication
Upstream requirements: ,
⌈
| Diagnostic Event (Error Name) | CANTRCV_E_BUS_ERROR |
|---|---|
| Description | This Extended Production Error shall be issued when a bus failure is detected by the transceiver during the CAN communication. |
| Failed condition | When the flag corresponding to bus failure is set, Dem_SetEventStatus shall be reported with parameters EventId as CANTRCV_E_BUS_ERROR and EventStatus as DEM_EVENT_STATUS_FAILED., |
| Passed condition | When the flag corresponding to bus failure is not set, Dem_SetEventStatus shall be reported with parameters EventId as CANTRCV_E_BUS_ERROR and EventStatus as DEM_EVENT_STATUS_PASSED., |

⌋

⌈
The extended production error `CANTRCV_E_BUS_ERROR` (value assigned by DEM) shall be detectable by the CAN tranceiver module when Bus Error (BUSERR) flag is set, depending on whether it is configured and supported by hardware.
⌋

### 33. Preconditions for 驱动初始化

_原文标题：Preconditions for driver initialization_

Upstream requirements:
⌈
The environment of the CanTrcv module shall make sure that all necessary BSW drivers (used by the CanTrcv module) have been initialized and are usable before `CanTrcv_Init` is called.
⌋

The CAN bus transceiver driver uses drivers for Spi and Dio to control the CAN bus transceiver hardware. Thus, these drivers must be available and ready to operate before the CAN bus transceiver driver is initialized.

The CAN transceiver driver may have timing requirements for the initialization sequence and the access to the transceiver device which must be fulfilled by these used underlying drivers.

The timing requirements might be that

# The call of the CAN bus transceiver driver initialization has to be performed very early after power up to be able to read all necessary information out of the transceiver hardware in time for all other users within the ECU.

# The runtime of the used underlying services is very short and synchronous to enable the driver to keep his own timing requirements limited by the used hardware device.

# The runtime of the driver may be enlarged due to some hardware devices configuring the port pin level to be valid for e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Instance concept

Upstream requirements: , ,
⌈
For each different CAN transceiver hardware type, an ECU has one CAN transceiver driver instance. One instance serves all CAN transceiver hardware of same type.
⌋

### 35. Wait states

For changing operation modes, the CAN transceiver hardware may have to perform wait states.

⌈
The CAN Tranceiver Driver shall use the Time service `Tm_BusyWait1us16bit` to realize the wait time for transceiver state changes.
⌋

### 36. Transceivers with selective 唤醒 functionality

_原文标题：Transceivers with selective wakeup functionality_

This section describes requirements for CAN transceivers with selective wakeup functionality.

Partial Networking is a state in a CAN system where some nodes are in low power mode while other nodes are communicating. This reduces the power consumption by the entire network. Nodes in the low-power modes are woken up by pre-defined wakeup frames.

Transceivers which support selective wakeup can be woken up by Wake Up Frame/ Frames (WUF), in addition to the wakeup by Wake Up Pattern (WUP) offered by normal transceivers.

⌈
If selective wakeup is supported by the transceiver hardware, it shall be indicated with the configuration parameter CanTrcvHwPnSupport.
⌋

⌈
The configuration container for selective wakeup functionality (CanTrcvPartialNetwork) and for the following APIs:

- `CanTrcv_GetTrcvSystemData`,
- `CanTrcv_ClearTrcvWufFlag`,
- `CanTrcv_ReadTrcvTimeoutFlag`,
- `CanTrcv_ClearTrcvTimeoutFlag`,
- `CanTrcv_ReadTrcvSilenceFlag` and
- `CanTrcv_CheckWakeFlag`

shall exist only if CanTrcvHwPnSupport = TRUE.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. CAN XL Extension

The CAN XL Transceiver Driver is implemented as an extension for the existing CAN Transceiver Driver (see ), non CAN XL hardware will still use basic CAN Transceiver Driver implementation.

The CAN XL Transceiver Driver is an extension of CAN Transceiver Driver and introduces an additional API to support Ethernet interface and provides a mode interface to CAN XL Transceiver Driver (see for further details).

### 38. 安全事件

_原文标题：Security Events_

The module does not report security events.

### 39. API 规范

_原文标题：API specification_

### 40. Imported 类型

_原文标题：Imported types_

In this chapter all types included from the following files are listed.

Definition of imported datatypes of module CanTrcv
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Dio | Dio.h | Dio_ChannelGroupType |
| ^ | Dio.h | Dio_ChannelType |
| ^ | Dio.h | Dio_LevelType |
| ^ | Dio.h | Dio_PortLevelType |
| ^ | Dio.h | Dio_PortType |
| EcuM | EcuM.h | EcuM_WakeupSourceType |
| Icu | Icu.h | Icu_ChannelType |
| Spi | Spi.h | Spi_ChannelType |
| ^ | Spi.h | Spi_DataBufferType |
| ^ | Spi.h | Spi_NumberOfDataType |
| ^ | Spi.h | Spi_SequenceType |
| ^ | Spi.h | Spi_StatusType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 41. 类型定义

_原文标题：Type definitions_

Definition of datatype `CanTrcv_ConfigType`
⌈
| Name | CanTrcv_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | This is the type of the external data structure containing the overall initialization data for the CAN transceiver driver and settings affecting all transceivers. Furthermore it contains pointers to transceiver configuration structures. The contents of the initialization data structure are CAN transceiver hardware specific. | < |
| Available via | CanTrcv.h | < |

⌋

Definition of datatype `CanTrcv_PNActivationType`
⌈
| Name | CanTrcv_PNActivationType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | PN_ENABLED | - | PN wakeup functionality in CanTrcv is enabled. |
| ^ | PN_DISABLED | - | PN wakeup functionality in CanTrcv is disabled. |
| Description | Datatype used for describing whether PN wakeup functionality in CanTrcv is enabled or disabled. | < | < |
| Available via | CanTrcv.h | < | < |

⌋

Definition of datatype `CanTrcv_TrcvFlagStateType`
⌈
| Name | CanTrcv_TrcvFlagStateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | CANTRCV_FLAG_SET | - | The flag is set in the transceiver hardware. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. 功能定义

_原文标题：Function definitions_

### 43. CanTrcv_Init

Definition of API function `CanTrcv_Init`
Upstream requirements: , , , , , , , , , ,
⌈
| Service Name | CanTrcv_Init | < |
|---|---|---|
| Syntax | void CanTrcv_Init ( | |

const `CanTrcv_ConfigType`\* ConfigPtr
| ) | < | |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to driver configuration. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the CanTrcv module. | < |
| Available via | CanTrcv.h | < |

⌋

⌈
The function `CanTrcv_Init` shall initialize all the connected CAN transceivers based on their initialization sequences and configuration (provided by parameter ConfigPtr). Meanwhile, it shall support the configuration sequence of the AUTOSAR stack also.
⌋

Note that in the time span between power up and the call to `CanTrcv_Init`, the CAN transceiver hardware may be in a different state. This depends on hardware and SPAL driver configuration.

The initialization sequence after reset (e.g. power up) is a critical phase for the CAN transceiver driver.

This API shall store the wake up event, if any, during initialization time.

See also requirement .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. CanTrcv_SetOpMode

Definition of API function `CanTrcv_SetOpMode`
Upstream requirements: , , , , , , , , , , ,
⌈
| Service Name | CanTrcv_SetOpMode | < |
|---|---|---|
| Syntax | Std_ReturnType CanTrcv_SetOpMode ( | |

uint8 Transceiver,
`CanTrcv_TrcvModeType` OpMode
| ) | < | |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different transceivers | < |
| Parameters (in) | Transceiver | CAN transceiver to which API call has to be applied. |
| ^ | OpMode | This parameter contains the desired operating mode |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: will be returned if the request for transceiver mode change has been accepted. E_NOT_OK: will be returned if the request for transceiver mode change has not been accepted or any parameter is out of the allowed range. |
| Description | Sets the mode of the Transceiver to the value OpMode. | < |
| Available via | CanTrcv.h | < |

⌋

⌈
The function `CanTrcv_SetOpMode` shall switch the internal state of Transceiver to the value of the parameter OpMode, which can be `CANTRCV_TRCVMODE_NORMAL`, `CANTRCV_TRCVMODE_STANDBY` or `CANTRCV_TRCVMODE_SLEEP`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. CanTrcv_GetOpMode

Definition of API function `CanTrcv_GetOpMode`
Upstream requirements: , , , , , , , ,
⌈
| Service Name | CanTrcv_GetOpMode | < |
|---|---|---|
| Syntax | Std_ReturnType CanTrcv_GetOpMode ( | |

uint8 Transceiver,
`CanTrcv_TrcvModeType`\* OpMode
| ) | < | |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Transceiver | CAN transceiver to which API call has to be applied. |
| Parameters (inout) | None | < |
| Parameters (out) | OpMode | Pointer to operation mode of the bus the API is applied to. |
| Return value | Std_ReturnType | E_OK: will be returned if the operation mode was detected. E_NOT_OK: will be returned if the operation mode was not detected. |
| Description | Gets the mode of the Transceiver and returns it in OpMode. | < |
| Available via | CanTrcv.h | < |

⌋

⌈
The function `CanTrcv_GetOpMode` shall collect the actual state of the CAN transceiver driver in the out parameter OpMode.
⌋

See function `CanTrcv_Init` for the provided state after the CAN transceiver driver initialization till the first operation mode change request.

The number of supported busses is statically set in the configuration phase.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. CanTrcv_GetBusWuReason

Definition of API function `CanTrcv_GetBusWuReason`
Upstream requirements: , , , , , , , , , , ,
⌈
| Service Name | CanTrcv_GetBusWuReason | < |
|---|---|---|
| Syntax | Std_ReturnType CanTrcv_GetBusWuReason ( | |

uint8 Transceiver,
`CanTrcv_TrcvWakeupReasonType`\* reason
| ) | < | |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Transceiver | CAN transceiver to which API call has to be applied. |
| Parameters (inout) | None | < |
| Parameters (out) | reason | Pointer to wake up reason of the bus the API is applied to. |
| Return value | Std_ReturnType | E_OK: will be returned if the transceiver wakeup reason was provided. E_NOT_OK: will be returned if no wake up reason is available or if the service request failed due to development errors. |
| Description | Gets the wakeup reason for the Transceiver and returns it in parameter Reason. | < |
| Available via | CanTrcv.h | < |

⌋

⌈
The function `CanTrcv_GetBusWuReason` shall collect the reason for the wake up that the CAN transceiver has detected in the parameter Reason.
⌋

The ability to detect and differentiate the possible wake up reasons depends strongly on the CAN transceiver hardware.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. CanTrcv\_ SetWakeupMode

Definition of API function `CanTrcv_SetWakeupMode`
Upstream requirements: , , , , , , ,
⌈
| Service Name | CanTrcv_SetWakeupMode | < |
|---|---|---|
| Syntax | Std_ReturnType CanTrcv_SetWakeupMode ( | |

uint8 Transceiver,
`CanTrcv_TrcvWakeupModeType` TrcvWakeupMode
| ) | < | |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different transceivers | < |
| Parameters (in) | Transceiver | CAN transceiver to which API call has to be applied. |
| ^ | TrcvWakeupMode | Requested transceiver wakeup mode |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Will be returned, if the wakeup state has been changed to the requested mode. E_NOT_OK: Will be returned, if the wakeup state change has failed or the parameter is out of the allowed range. The previous state has not been changed. |
| Description | Enables, disables or clears wake-up events of the Transceiver according to TrcvWakeupMode. | < |
| Available via | CanTrcv.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. CanTrcv_GetTrcvSystemData

Definition of API function `CanTrcv_GetTrcvSystemData`
⌈
| Service Name | CanTrcv_GetTrcvSystemData | < |
|---|---|---|
| Syntax | Std_ReturnType CanTrcv_GetTrcvSystemData ( | |

uint8 Transceiver,
uint32\* TrcvSysData
| ) | < | |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | Transceiver | CAN transceiver ID. |
| Parameters (inout) | None | < |
| Parameters (out) | TrcvSysData | Configuration/Status data of the transceiver. |
| Return value | Std_ReturnType | E_OK: will be returned if the transceiver status is successfully read. E_NOT_OK: will be returned if the transceiver status data is not available or a development error occurs. |
| Description | Reads the transceiver configuration/status data and returns it through parameter TrcvSysData. This API shall exist only if CanTrcvHwPnSupport = TRUE. | < |
| Available via | CanTrcv.h | < |

⌋

⌈
The function `CanTrcv_GetTrcvSystemData` shall read the configuration/status of the CAN Transceiver and store the read data in the out parameter TrcvSysData. If this is successful, E_OK shall be returned.

Hint: This API can be invoked through diagnostic services or during initialization to determine the transceiver status and its availability.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 68 章（内容从略，见纯文本全文）

49. CanTrcv_ClearTrcvWufFlag
50. CanTrcv_ReadTrcvTimeoutFlag
51. CanTrcv_ClearTrcvTimeoutFlag
52. CanTrcv_ReadTrcvSilenceFlag
53. CanTrcv_CheckWakeup
54. CanTrcv_SetPNActivationState
55. CanTrcv_CheckWakeFlag
56. CanTrcv_DeInit
57. Scheduled functions
58. CanTrcv_MainFunction
59. CanTrcv_MainFunctionDiagnostics
60. Callback 通知
61. Expected 接口
62. Mandatory 接口
63. Optional 接口
64. Configurable 接口
65. 时序图
66. Wake up with valid 校验
67. Interaction with DIO 模块
68. De-Initialization (SPI Synchronous)
69. De-Initialization (SPI Asynchronous)
70. 配置规范
71. How to read this chapter
72. Containers and 配置 parameters
73. CanTrcv
74. CanTrcvGeneral
75. CanTrcvConfigSet
76. CanTrcvChannel
77. CanTrcvAccess
78. CanTrcvDioAccess
79. CanTrcvDioChannelAccess
80. CanTrcvSpiAccess
81. CanTrcvSpiSequence
82. CanTrcvDemEventParameterRefs
83. CanTrcvPartialNetwork
84. CanTrcvPnFrameDataMaskSpec
85. 发布信息
86. 附录
87. 不适用需求
88. Change History
89. Change History of this document according to AUTOSAR Release R23-11
90. Added 规范 Items in R23-11
91. Changed 规范 Items in R23-11
92. Deleted 规范 Items in R23-11
93. Added Constraints in R23-11
94. Changed Constraints in R23-11
95. Deleted Constraints in R23-11
96. Change History of this document according to AUTOSAR Release R24-11
97. Added 规范 Items in R24-11
98. Changed 规范 Items in R24-11
99. Deleted 规范 Items in R24-11
100.  Added Constraints in R24-11
101.  Changed Constraints in R24-11
102.  Deleted Constraints in R24-11
103.  Change History of this document according to AUTOSAR Release R25-11
104.  Added 规范 Items in R25-11
105.  Changed 规范 Items in R25-11
106.  Deleted 规范 Items in R25-11
107.  Added Constraints in R25-11
108.  Changed Constraints in R25-11
109.  Deleted Constraints in R25-11
110.  Change History of this document according to AUTOSAR Release R26-11
111.  Added 规范 Items in R26-11
112.  Changed 规范 Items in R26-11
113.  Deleted 规范 Items in R26-11
114.  Added Constraints in R26-11
115.  Changed Constraints in R26-11
116.  Deleted Constraints in R26-11
