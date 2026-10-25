# Specification of GPT Driver (`GPTDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 030 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_GPTDriver_030\AUTOSAR_CP_SWS_GPTDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_GPTDriver_030\AUTOSAR_CP_SWS_GPTDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_GPTDriver_030\zzgen\CP_SWS_GPTDriver.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module GTP driver.

The GPT driver is part of the microcontroller abstraction layer (MCAL). It initializes and controls the internal General Purpose Timer(s) (GPT) of the microcontroller.

The GPT driver provides services and configuration parameters for

* Starting and stopping hardware timers
* Getting timer values
* Controlling time triggered interrupt notifications, if supported by hardware
* Controlling time triggered wakeup interrupts, if supported by hardware

The tick duration of a timer channel depends on channel specific settings (part of GPT driver) as well as on system clock and settings of the clock tree controlled by the MCU module. The tick duration is not limited by this specification.

Not all hardware timers must be controlled by the GPT module. Some timers may be controlled by AUTOSAR Operating System or Complex Drivers directly. The number of timer channels controlled by the GPT driver depends on hardware, implementation and system configuration.

Beside the possibility to configure individual timer channels with individual properties, some free running up counters - so-called GPT Predef Timers - are defined. These timers have predefined tick durations and predefined number of bits (physical time units and ranges). The GPT Predef Timers are used by the Time Service module.

The GPT driver only generates time bases. Further time based functionality on driver level is covered by other MCAL modules like:

* PWM Driver (driver for pulse width modulation)
* ICU Driver (driver for input capture unit)
* OCU Driver (driver for output compare unit)

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module GTP driver.

The GPT driver is part of the microcontroller abstraction layer (MCAL). It initializes and controls the internal General Purpose Timer(s) (GPT) of the microcontroller.

The GPT driver provides services and configuration parameters for

* Starting and stopping hardware timers
* Getting timer values
* Controlling time triggered interrupt notifications, if supported by hardware
* Controlling time triggered wakeup interrupts, if supported by hardware

The tick duration of a timer channel depends on channel specific settings (part of GPT driver) as well as on system clock and settings of the clock tree controlled by the MCU module. The tick duration is not limited by this specification.

Not all hardware timers must be controlled by the GPT module. Some timers may be controlled by AUTOSAR Operating System or Complex Drivers directly. The number of timer channels controlled by the GPT driver depends on hardware, implementation and system configuration.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the GPT driver module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| BSW | Basic Software |
| DET | Default Error Tracer |
| ECU | Electronic Control Unit |
| GPT | General Purpose Timer |
| ICU | Input Capture Unit |
| MCU | Micro Controller Unit |
| NOP, nop | Null Operation |
| OS | Operating System |

| Term: | Description: |
|---|---|
| Timer channel | Represents a logical timer entity assigned to a timer hardware |
| Target time | Time, something shall occur, when the value is reached. The behavior depends on the configuration and the enabled functionality. |
| Tick | Defines the timer resolution, the duration of a timer increment |
| GPT Predef Timer | A GPT Predef Timer is a free running up counter provided by the GPT driver. Which GPT Predef Timer(s) are available depends on hardware (clock, hardware timers, prescaler, width of timer register, ...) and configuration. A GPT Predef Timer has predefined physical time unit and range. |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for GPT driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for GPT driver.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. Assumptions

No assumptions.

### 8. 限制
*原文标题：Limitations*

No limitations.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 11. 模块 DET
*原文标题：Module DET*

In development mode the Error hook-function of module DET  will be called.

### 12. 模块 MCU
*原文标题：Module MCU*

The GPT depends on the system clock, prescaler(s) and PLL. Thus, changes of the system clock (e.g. PLL on PLL off) also affect the clock settings of the GPT hardware. Module GPT will not take care of settings which configure the clock, prescaler(s) and PLL in its init function. This has to be done by the MCU module .

Hence the conversions between time and ticks shall be part of an upper layer.

### 13. 模块 EcuM
*原文标题：Module EcuM*

The GPT driver reports the wakeup interrupts to the ECU State Manager  for further processing.

### 14. 文件结构
*原文标题：File structure*

The file structure is not defined within this specification completely. It depends on the implementation. The GPT driver shall provide at least the following files, if the conditions described are fulfilled:

  Upstream requirements:
⌈
`Gpt_Irq`.c shall include Gpt.h for the prototype declaration of the notification functions.
⌋

⌈
Gpt.c shall include Det.h in any case to be able to raise runtime error.
⌋

### 15. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The Implementation of interrupt service routines shall be done by the Operating System, complex drivers or modules |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| Data types naming convention |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Basic SW module shall be able to shutdown |  |  |
| All AUTOSAR standard types and constants shall be placed and organized in a standard type header file |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| Basic Software Modules shall report wake-up reasons |  |  |
| BSW Mod |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能规范
*原文标题：Functional specification*

The GPT driver provides services for starting and stopping timer channels (logical timer instances assigned to a timer hardware), individual for each channel by calling of:

* `Gpt_StartTimer`
* `Gpt_StopTimer`

The "target time" is passed as a parameter to `Gpt_StartTimer`. So, for each start of a timer channel, the target time can be set individually. The states and the state transitions of a timer channel are shown in

A timer channel can be configured in "one-shot mode" or in "continuous mode".

⌈
A timer channel starts counting at value zero.
⌋

⌈
If a timer channel is configured in "one-shot mode":

If the timer has reached the target time (timer value = target time), the timer shall stop automatically and maintain its timer value unchanged. The channel state shall change from "running" to "expired".
⌋

⌈
If a timer channel is configured in "continuous mode":

If the timer has reached the target time (timer value = target time), the timer shall continue running with the value "0" at next timer tick. So, the time interval of the recurrence is: target time + 1. This interval shall be independently of implementation, e.g. interrupt delays.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. GPT Predef Timers

Beside the possibility to configure individual timer channels with individual properties, some GPT Predef Timers are defined. The API specified for "GPT timer channels" can not be used for GPT Predef Timers.

 Types of GPT Predef Timers
  Upstream requirements:
⌈
A GPT Predef Timer is a free running up counter (user point of view). If the timer has reached the maximum value (max value = 2n -1, n=number of bits), the timer shall continue running with the value "0" at next timer tick.
⌋

  Upstream requirements:
⌈
| Name of GPT Predef Timer | Tick duration | Maximum tick value | Number of bits | Maximum time span (circa values) |
|---|---|---|---|---|
| GPT_PREDEF_TIMER_1US_16BIT | 1 μs | 65535 | 16 bit | 65 ms |
| GPT_PREDEF_TIMER_1US_24BIT | ^ | 16777215 | 24 bit | 16 s |
| GPT_PREDEF_TIMER_1US_32BIT | ^ | 4294967295 | 32 bit | 71 minutes |
| GPT_PREDEF_TIMER_100US_32BIT | 100 μs | 4294967295 | 32 bit | 4.9 days |

⌋

⌈
A GPT Predef Timer shall have a maximum tick tolerance of +/- 1 tick to ensure accuracy of time based functionality.
⌋

Which GPT Predef Timer(s) can be enabled depends on clock and available timer hardware (prescaler, width of timer register).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 版本检查
*原文标题：Version checking*

For details refer to .

### 19. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 20. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Gpt
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called without module initialization | GPT_E_UNINIT | 0x0A |
| API service for initialization called when already initialized | GPT_E_ALREADY_INITIALIZED | 0x0D |
| API error return code: Init function failed | GPT_E_INIT_FAILED | 0x0E |
| API parameter checking: invalid channel | GPT_E_PARAM_CHANNEL | 0x14 |
| API parameter checking: invalid value | GPT_E_PARAM_VALUE | 0x15 |
| API parameter checking: invalid pointer | GPT_E_PARAM_POINTER | 0x16 |
| API parameter checking: invalid Predef Timer | GPT_E_PARAM_PREDEF_TIMER | 0x17 |
| API parameter checking: invalid mode | GPT_E_PARAM_MODE | 0x1F |

⌋

### 21. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Gpt
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called when timer channel is still busy (running) | GPT_E_BUSY | 0x0B |
| API service called when driver is in wrong mode | GPT_E_MODE | 0x0C |

⌋

### 22. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 23. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 24. API 规范
*原文标题：API specification*

### 25. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Gpt
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| EcuM | EcuM.h | EcuM_WakeupSourceType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 26. 类型定义
*原文标题：Type definitions*

### 27. Gpt_ConfigType

Definition of datatype `Gpt_ConfigType`
  Upstream requirements: , , , , ,
⌈
| Name | Gpt_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | -- | < |
| ^ | Type | - |
| ^ | Comment | Implementation specific configuration data structure, see chapter 10 for configurable parameters. |
| Description | This is the type of the data structure including the configuration set required for initializing the GPT timer unit. | < |
| Available via | Gpt.h | < |

⌋

### 28. Gpt_ChannelType

Definition of datatype `Gpt_ChannelType`
  Upstream requirements:
⌈
| Name | Gpt_ChannelType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | Implementation specific. But not all values may be valid within this type. This type shall be chosen in order to have the most efficient implementation on a specific micro controller platform. |
| Description | Numeric ID of a GPT channel. | < | < |
| Available via | Gpt.h | < | < |

⌋

### 29. Gpt_ValueType

Definition of datatype `Gpt_ValueType`
  Upstream requirements: , ,
⌈
| Name | Gpt_ValueType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | The range of this type is μC dependent (width of the timer register) and has to be described by the supplier. |
| Description | Type for reading and setting the timer values (in number of ticks). | < | < |
| Available via | Gpt.h | < | < |

⌋

### 30. Gpt_ModeType

Definition of datatype `Gpt_ModeType`
  Upstream requirements: ,
⌈
| Name | Gpt_ModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | GPT_MODE_NORMAL | 0x00 | Normal operation mode of the GPT |
| ^ | GPT_MODE_SLEEP | 0x01 | Operation for reduced power operation mode. In sleep mode only wakeup capable channels are available. |
| Description | Modes of the GPT driver. | < | < |
| Available via | Gpt.h | < | < |

⌋

### 31. Gpt_PredefTimerType

Definition of datatype `Gpt_PredefTimerType`
  Upstream requirements:
⌈
| Name | Gpt_PredefTimerType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | GPT_PREDEF_TIMER_1US_16BIT | 0x00 | GPT Predef Timer with tick duration 1μs and range 16bit |
| ^ | GPT_PREDEF_TIMER_1US_24BIT | 0x01 | GPT Predef Timer with tick duration 1μs and range 24bit |
| ^ | GPT_PREDEF_TIMER_1US_32BIT | 0x02 | GPT Predef Timer with tick duration 1μs and range 32bit |
| ^ | GPT_PREDEF_TIMER_100US_32BIT | 0x03 | GPT Predef Timer with tick duration 100μs and range 32bit |
| Description | Type for GPT Predef Timers | < | < |
| Available via | Gpt.h | < | < |

⌋

### 32. 功能定义
*原文标题：Function definitions*

This is a list of functions provided for upper layer modules.

### 33. Gpt_GetVersionInfo

Definition of API function `Gpt_GetVersionInfo`
  Upstream requirements:
⌈
| Service Name | Gpt_GetVersionInfo | < |
|---|---|---|
| Syntax | void Gpt_GetVersionInfo ( |  |

  `Std_VersionInfoType`* VersionInfoPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | VersionInfoPtr | Pointer to where to store the version information of this module. |
| Return value | None | < |
| Description | Returns the version information of this module. | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements:
⌈
If development error detection is enabled for the GPT module:

If the parameter VersionInfoPtr is a null pointer, the function `Gpt_GetVersionInfo` shall raise the error `GPT_E_PARAM_POINTER`.
⌋

### 34. Gpt_Init

Definition of API function `Gpt_Init`
  Upstream requirements: , , , , , ,
⌈
| Service Name | Gpt_Init | < |
|---|---|---|
| Syntax | void Gpt_Init ( |  |

  const `Gpt_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to a selected configuration structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the GPT driver. | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Gpt_Init` shall initialize the hardware timer module according to a configuration set referenced by ConfigPtr.
⌋

⌈
The function `Gpt_Init` shall disable all interrupt notifications, controlled by the GPT driver.
⌋

  Upstream requirements:
⌈
The function `Gpt_Init` shall only initialize the configured resources. Resources that are not configured in the configuration file shall not be touched.
⌋

The following rules regarding initialization of controller registers shall apply to this driver implementation:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Gpt_DeInit

Definition of API function `Gpt_DeInit`
  Upstream requirements: , ,
⌈
| Service Name | Gpt_DeInit | < |
|---|---|---|
| Syntax | void Gpt_DeInit ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Deinitializes the GPT driver. | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements: , ,
⌈
The function `Gpt_DeInit` shall deinitialize the hardware used by the GPT driver (depending on configuration to the power on reset state. Values of registers which are not writeable are excluded. It's the responsibility of the hardware design that the state does not lead to undefined activities in the μC.
⌋

⌈
The function `Gpt_DeInit` shall disable all interrupt notifications and wakeup interrupts, controlled by the GPT driver.
⌋

  Upstream requirements:
⌈
The function `Gpt_DeInit` shall influence only the peripherals, which are allocated by the static configuration.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Gpt_GetTimeElapsed

Definition of API function `Gpt_GetTimeElapsed`
  Upstream requirements:
⌈
| Service Name | Gpt_GetTimeElapsed | < |
|---|---|---|
| Syntax | Gpt_ValueType Gpt_GetTimeElapsed ( |  |

  `Gpt_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Channel | Numeric identifier of the GPT channel. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Gpt_ValueType | Elapsed timer value (in number of ticks) |
| Description | Returns the time already elapsed. | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements:
⌈
The function `Gpt_GetTimeElapsed` shall return the time already elapsed. When the Channel is in mode "one-shot mode", this is the value relative to the point in time, the Channel has been started.
⌋

⌈
When the Channel is in mode "continuous mode", the return value of `Gpt_GetTimeElapsed` is the value relative to the last recurrence (target time reached) or to the start of the Channel before the first recurrence occurs.
⌋

⌈
If the function `Gpt_GetTimeElapsed` is called on a timer Channel in state "initialized" (Channel started never before), the function shall return the value "0".
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Gpt_GetTimeRemaining

Definition of API function `Gpt_GetTimeRemaining`
  Upstream requirements:
⌈
| Service Name | Gpt_GetTimeRemaining | < |
|---|---|---|
| Syntax | Gpt_ValueType Gpt_GetTimeRemaining ( |  |

  `Gpt_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Channel | Numeric identifier of the GPT channel. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Gpt_ValueType | Remaining timer value (in number of ticks) |
| Description | Returns the time remaining until the target time is reached. | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements:
⌈
The function `Gpt_GetTimeRemaining` shall return the timer value remaining until the target time will be reached next time. The remaining time is the "target time" minus the time already elapsed.
⌋

⌈
If the function `Gpt_GetTimeRemaining` is called on a timer Channel in state "initialized" (Channel started never before), the function shall return the value "0".
⌋

⌈
If the function `Gpt_GetTimeRemaining` is called on a timer Channel in state "stopped", the function shall return the remaining time value at the moment of stopping.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Gpt_StartTimer

Definition of API function `Gpt_StartTimer`
  Upstream requirements:
⌈
| Service Name | Gpt_StartTimer | < |
|---|---|---|
| Syntax | void Gpt_StartTimer ( |  |

  `Gpt_ChannelType` Channel,
  `Gpt_ValueType` Value
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (but not for the same timer channel) | < |
| Parameters (in) | Channel | Numeric identifier of the GPT channel. |
| ^ | Value | Target time in number of ticks. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Starts a timer channel. | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements:
⌈
The function `Gpt_StartTimer` shall start the selected timer Channel with a defined target time.
⌋

  Upstream requirements:
⌈
If configured and enabled, an interrupt notification or a wakeup interrupt occurs, when the target time is reached.
⌋

⌈
The function `Gpt_StartTimer` shall be reentrant, if the timer Channels used in concurrent calls are different.
⌋

⌈
The state of the selected timer Channel shall be changed to "running" if `Gpt_StartTimer` is called.
⌋

⌈
If development error detection is enabled for GPT module:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Gpt_StopTimer

Definition of API function `Gpt_StopTimer`
  Upstream requirements:
⌈
| Service Name | Gpt_StopTimer | < |
|---|---|---|
| Syntax | void Gpt_StopTimer ( |  |

  `Gpt_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (but not for the same timer channel) | < |
| Parameters (in) | Channel | Numeric identifier of the GPT channel. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Stops a timer channel. | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements:
⌈
The function `Gpt_StopTimer` shall stop the selected timer Channel.
⌋

⌈
The state of the selected timer Channel shall be changed to "stopped" if `Gpt_StopTimer` is called.
⌋

⌈
If development error detection is enabled for GPT module:

If the function `Gpt_StopTimer` is called on a Channel in state "initialized", "stopped" or "expired", the function shall not raise a development error.
⌋

⌈
If the function `Gpt_StopTimer` is called on a Channel in state "initialized", "stopped" or "expired", the function shall leave without any action (no change of the Channel state).
⌋

⌈
The function `Gpt_StopTimer` shall be reentrant, if the timer Channels used in concurrent calls are different.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Gpt_EnableNotification

Definition of API function `Gpt_EnableNotification`
  Upstream requirements:
⌈
| Service Name | Gpt_EnableNotification | < |
|---|---|---|
| Syntax | void Gpt_EnableNotification ( |  |

  `Gpt_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (but not for the same timer channel) | < |
| Parameters (in) | Channel | Numeric identifier of the GPT channel. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Enables the interrupt notification for a channel (relevant in normal mode). | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements: , ,
⌈
The function `Gpt_EnableNotification` shall enable the interrupt notification of the referenced Channel configured for notification (see also ). The function shall save an attribute like "notification enabled" of the Channel.
⌋

Comment: This attribute affects the interrupt notification always when the driver is in "normal mode". In "sleep mode" the attribute has no influence.

⌈
The function `Gpt_EnableNotification` shall be reentrant, if the timer Channels used in concurrent calls are different.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Gpt_DisableNotification

Definition of API function `Gpt_DisableNotification`
  Upstream requirements:
⌈
| Service Name | Gpt_DisableNotification | < |
|---|---|---|
| Syntax | void Gpt_DisableNotification ( |  |

  `Gpt_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (but not for the same timer channel) | < |
| Parameters (in) | Channel | Numeric identifier of the GPT channel. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Disables the interrupt notification for a channel (relevant in normal mode). | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements: , ,
⌈
The function `Gpt_DisableNotification` shall disable the interrupt notification of the referenced Channel configured for notification (see also ). The function shall save an attribute like "notification disabled" of the Channel.
⌋

Comment: This attribute affects the interrupt notification always when the driver is in "normal mode". In "sleep mode" the attribute has no influence.

⌈
The function `Gpt_DisableNotification` shall be reentrant, if the timer Channels used in concurrent calls are different.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Gpt_SetMode

Definition of API function `Gpt_SetMode`
  Upstream requirements: ,
⌈
| Service Name | Gpt_SetMode | < |
|---|---|---|
| Syntax | void Gpt_SetMode ( |  |

  `Gpt_ModeType` Mode
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | Mode | GPT_MODE_NORMAL: Normal operation mode of the GPT driver. |

`GPT_MODE_SLEEP`: Sleep mode of the GPT driver (wakeup capable).

See also `Gpt_ModeType`.
| Parameters (inout) | None | < |
|---|---|---|
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Sets the operation mode of the GPT. | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Gpt_SetMode` shall set the operation mode of the GPT driver to the given Mode parameter.
⌋

⌈
The function `Gpt_SetMode` is only available if the configuration parameter GptReportWakeupSource is enabled.
⌋

  Upstream requirements:
⌈
If the parameter Mode has the value `GPT_MODE_NORMAL`:

The function `Gpt_SetMode` shall enable the interrupt notification for all channels which are configured for notification and the notification is enabled (stored attribute) via the function `Gpt_EnableNotification` prior. All other interrupt notifications shall be disabled.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Gpt_DisableWakeup

Definition of API function `Gpt_DisableWakeup`
  Upstream requirements:
⌈
| Service Name | Gpt_DisableWakeup | < |
|---|---|---|
| Syntax | void Gpt_DisableWakeup ( |  |

  `Gpt_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x0a | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (but not for the same timer channel) | < |
| Parameters (in) | Channel | Numeric identifier of the GPT channel. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Disables the wakeup interrupt of a channel (relevant in sleep mode). | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements:
⌈
The function `Gpt_DisableWakeup` shall disable the wakeup interrupt of the referenced Channel configured for wakeup. The function shall save an attribute like "wakeup disabled" of the Channel.
⌋

Comment: This attribute affects the wakeup interrupt always when the driver is in "sleep mode". In "normal mode" the attribute has no influence.

⌈
The function `Gpt_DisableWakeup` is only feasible, if GptReportWakeupSource is statically configured available.
⌋

⌈
The function `Gpt_DisableWakeup` shall be reentrant, if the timer channels used in concurrent calls are different.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Gpt_EnableWakeup

Definition of API function `Gpt_EnableWakeup`
  Upstream requirements:
⌈
| Service Name | Gpt_EnableWakeup | < |
|---|---|---|
| Syntax | void Gpt_EnableWakeup ( |  |

  `Gpt_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x0b | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (but not for the same timer channel) | < |
| Parameters (in) | Channel | Numeric identifier of the GPT channel. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Enables the wakeup interrupt of a channel (relevant in sleep mode). | < |
| Available via | Gpt.h | < |

⌋

  Upstream requirements:
⌈
The function `Gpt_EnableWakeup` shall enable the wakeup interrupt of the referenced Channel configured for wakeup. The function shall save an attribute like "wakeup enabled" of the channel.
⌋

Comment: This attribute affects the wakeup interrupt always when the driver is in "sleep mode". In "normal mode" the attribute has no influence.

⌈
The function `Gpt_EnableWakeup` is only feasible, if GptReportWakeupSource is statically configured available.
⌋

⌈
The function `Gpt_EnableWakeup` shall be reentrant, if the timer Channels used in concurrent calls are different.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 48 章（内容从略，见纯文本全文）

45. Gpt_CheckWakeup
46. Gpt_GetPredefTimerValue
47. Callback 通知
48. Scheduled functions
49. Expected 接口
50. Mandatory 接口
51. Optional 接口
52. Configurable 接口
53. GPT 通知
54. 错误检测
55. 时序图
56. Gpt_Init
57. GPT continuous 模式
58. GPT one-shot 模式
59. Disable/Enable 通知
60. 唤醒
61. 配置规范
62. How to read this chapter
63. Containers and 配置 parameters
64. Gpt
65. GptDriverConfiguration
66. GptClockReferencePoint
67. GptChannelConfigSet
68. GptChannelConfiguration
69. GptWakeupConfiguration
70. GptConfigurationOfOptApiServices
71. 发布信息
72. 附录
73. 不适用需求
74. Change history of AUTOSAR traceable items
75. Change History of this document according to AUTOSAR Release R25-11
76. Added 规范 Items in R25-11
77. Changed 规范 Items in R25-11
78. Deleted 规范 Items in R25-11
79. Added Constraints in R25-11
80. Changed Constraints in R25-11
81. Deleted Constraints in R25-11
82. Change History of this document according to AUTOSAR Release R24-11
83. Added 规范 Items in R24-11
84. Changed 规范 Items in R24-11
85. Deleted 规范 Items in R24-11
86. Added Constraints in R24-11
87. Changed Constraints in R24-11
88. Deleted Constraints in R24-11
89. Change History of this document according to AUTOSAR Release R23-11
90. Added Constraints in R23-11
91. Changed Constraints in R23-11
92. Deleted Constraints in R23-11
