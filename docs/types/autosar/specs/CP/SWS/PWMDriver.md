# Specification of PWM Driver (`PWMDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 037 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_PWMDriver_037\AUTOSAR_CP_SWS_PWMDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_PWMDriver_037\AUTOSAR_CP_SWS_PWMDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_PWMDriver_037\zzgen\CP_SWS_PWMDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module PWM driver.

Each PWM channel is linked to a hardware PWM which belongs to the microcontroller. The type of the PWM signal (for example center Align, left Align, Etc.. ) is not defined within this specification and is left up to the implementation.

The driver provides functions for initialization and control of the microcontroller internal PWM stage (pulse width modulation). The PWM module generates pulses with variable pulse width. It allows the selection of the duty cycle and the signal period time.

## 模块依赖

The PWM depends on the system clock. Thus, changes of the system clock (e.g. PLL on to PLL off) also affect the clock settings of the PWM hardware.

The PWM Driver depends on the following modules:

* PORT Driver : To set the port pin functionality. PWM141
* MCU Driver : To set prescaler, system clock and PLL. PWM142
* DET : Default Error Tracer in Development mode. PWM143

See also document , which details the mechanism to deliver reference clock signals to peripherals.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module PWM driver.

Each PWM channel is linked to a hardware PWM which belongs to the microcontroller. The type of the PWM signal (for example center Align, left Align, Etc.. ) is not defined within this specification and is left up to the implementation.

The driver provides functions for initialization and control of the microcontroller internal PWM stage (pulse width modulation). The PWM module generates pulses with variable pulse width. It allows the selection of the duty cycle and the signal period time.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the PWM Driver module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| PWM Channel | Numeric identifier linked to a hardware PWM. |
| PWM Output State | Defines the output state for a PWM signal. It could be: |

* High.
* Low.
| PWM Idle State | The idle state represents the output state of the PWM channel after the call of Pwm_SetOutputToIdle or Pwm_DeInit. |
|---|---|
| PWM Polarity | Defines the starting output state of each PWM channel. |
| PWM Duty cycle | Defines a percentage of the starting level (could be high or low) related to the period. |
| PWM period | Defines the period of the PWM signal. |
| PWM | Pulse Width Modulation. |
| DEM | Diagnostic Event Manager. |
| DET | Default Error Tracer. |
| MCU | Microcontroller Unit. |
| PLL | Phase Locked Loop. |
| ISR | Interrupt Service Routine. |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for PWM Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for PWM Driver.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

Upstream requirements:
⌈
The Pwm SWS does not cover PWM emulation on general purpose I/O.
⌋

* Power State Control APIs are implementable only if the MCAL driver owns the complete underlying HW peripheral i.e. the HW peripheral is not accessed by other MCAL modules.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The PWM depends on the system clock. Thus, changes of the system clock (e.g. PLL on to PLL off) also affect the clock settings of the PWM hardware.

The PWM Driver depends on the following modules:

* PORT Driver : To set the port pin functionality. PWM141
* MCU Driver : To set prescaler, system clock and PLL. PWM142
* DET : Default Error Tracer in Development mode. PWM143

See also document , which details the mechanism to deliver reference clock signals to peripherals.

### 10. 文件结构
*原文标题：File structure*

### 11. 代码文件结构
*原文标题：Code file structure*

Upstream requirements: ,
⌈
The Pwm SWS shall not define the code file structure.
⌋

### 12. 头文件结构
*原文标题：Header file structure*

⌈
Pwm.c shall include Pwm.h, Det.h and .
⌋

⌈
`Pwm_Irq`.c shall include Pwm.h.
⌋

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , , and , and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All internal driver modules shall separate the interrupt frame definition from the service routine |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| The unit of time for specification and configuration of Basic SW modules shall be preferably in physical time unit |  |  |
| All AUTOSAR Basic Software Modules shall provide at least a basic set of module files |  |  |
| List possible error notifications |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| API handling in uninitialized state |  |  |

 |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

### 15. 通用行为
*原文标题：General behavior*

⌈
All functions from the PWM module except `Pwm_Init`, `Pwm_DeInit` and `Pwm_GetVersionInfo` shall be re-entrant for different PWM channel numbers.

In order to keep a simple module implementation, no check of  must be performed by the module.
⌋

⌈
The Pwm module's user shall ensure the integrity if several function calls are made during run time in different tasks or ISRs for the same PWM channel.
⌋

### 16. Time Unit Ticks

### 17. Background & Rationale

To get times out of register values it is necessary to know the oscillator frequency, prescalers and so on. Since these settings are made in MCU and/or in other modules it is not possible to calculate such times.

Hence the conversions between time and ticks shall be part of an upper layer.

### 18. 需求
*原文标题：Requirements*

Upstream requirements:
⌈
All time units used within the API services of the PWM module shall be of the unit ticks.
⌋

### 19. 支持 and 管理 of HW low power states
*原文标题：Support and management of HW low power states*

Some PWM HW Module allow to be set in some operation modes which reduce the power consumption, eventually at the cost of a slower reaction time, a lower performance or eventually complete unavailability. Each PWM module could support one or more low power operation modes, considering the Full Power Mode as always present and set per default at startup.

### 20. Background

The PWM Driver offers power state control APIs and a background elaboration mechanism to handle asynchronous power state change processes (i.e. power state changes which are not immediately complete as the they are requested, but need some longer operations).

It is assumed that all constraints deriving from ECU and SW architecture are already satisfied by the upper layers (Application, Mode Management in the service layer, IoHwAbstraction components dealing with peripheral control), thus the scope of control is limited to the PWM HW peripheral.

A check on the operation sequence is executed by the PWM Driver in order to avoid requesting a different power state before the previous request is still being processed or activating a power state when no preparation for the same has been requested.

The PWM module shall support power control capabilities as an optional function. This module neither mandates to use only power control enabled MCUs nor to configure the same. Rather it proposes a way to handle power states if this is supported by the suppliers.

### 21. 需求
*原文标题：Requirements*

⌈
The PwmDriver shall support power state changes and its APIs when the corresponding configuration parameter PwmLowPowerStatesSupport is set to TRUE.
⌋

⌈
If the parameter PwmLowPowerStatesSupport is enabled then the APIs `Pwm_PreparePowerState`, `Pwm_SetPowerState`, `Pwm_GetCurrentPowerState`, `Pwm_GetTargetPowerState` shall be generated and shall be used to manage and get informations on power state transitions.
⌋

⌈
The APIs `Pwm_GetTargetPowerState` and `Pwm_GetCurrentPowerState` shall be respectively used to gather information on the requested and the target Pwm power states.
⌋

⌈
The API `Pwm_PreparePowerState` shall be used to start a power state transition.
⌋

⌈
After preparation for a power state is achieved by () then the API `Pwm_SetPowerState` shall be used to achieve the requested power state of the Pwm module.

In order to avoid incoherent power state conditions, some APIs (`Pwm_SetPowerState`, `Pwm_PreparePowerState`) have to be called in a given sequence, otherwise an error (if DET tracing is enabled) is stored and the action is interrupted. The Pwm Driver keeps track of the call sequence.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Duty Cycle Resolution and scaling

Upstream requirements:
⌈
The width of the duty cycle parameter is 16 Bits.
⌋

  Upstream requirements:
⌈
The Pwm module shall comply with the following scaling scheme for the duty cycle:

* 0x0000 means 0%.
* 0x8000 means 100%. 0x8000 gives the highest resolution while allowing 100% duty cycle to be represented with a 16 bit value.

As an implementation guide, the following source code example is given:

AbsoluteDutyCycle = ((uint32)AbsolutePeriodTime * RelativeDutyCycle) >> 15;
⌋

### 23. Version check

For details refer to .

### 24. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 25. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Pwm
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API Pwm_Init service called with wrong parameter | PWM_E_INIT_FAILED | 0x10 |
| API service used without module initialization | PWM_E_UNINIT | 0x11 |
| API service used with an invalid channel Identifier | PWM_E_PARAM_CHANNEL | 0x12 |
| Usage of unauthorized PWM service on PWM channel configured a fixed period | PWM_E_PERIOD_UNCHANGEABLE | 0x13 |
| API Pwm_Init service called while the PWM driver has already been initialised | PWM_E_ALREADY_INITIALIZED | 0x14 |
| API Pwm_GetVersionInfo is called with a NULL parameter. | PWM_E_PARAM_POINTER | 0x15 |
| The requested power state is not supported by the PWM module. | PWM_E_POWER_STATE_NOT_SUPPORTED | 0x17 |
| The requested power state is not reachable from the current one | PWM_E_TRANSITION_NOT_POSSIBLE | 0x18 |
| API Pwm_SetPowerState has been called without having called the API Pwm_PreparePowerState before. | PWM_E_PERIPHERAL_NOT_PREPARED | 0x19 |

⌋

  Upstream requirements: , ,
⌈
The PWM Driver module shall report the development error `PWM_E_UNINIT`, when API service is used without module initialization.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Pwm
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API Pwm_SetPowerState is called while the PWM module is still in use. | PWM_E_NOT_DISENGAGED | 0x16 |

⌋

⌈
The API shall report the runtime error `PWM_E_NOT_DISENGAGED` in case this API is called when one or more HW channels (where applicable) are in a state different than IDLE (or similar non-operational states) and/or there are still notification registered for the HW module channels.
⌋

### 27. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 28. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 29. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 30. API 规范
*原文标题：API specification*

### 31. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Pwm
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 32. 类型定义
*原文标题：Type definitions*

### 33. Pwm_ChannelType

Definition of datatype `Pwm_ChannelType`
⌈
| Name | Pwm_ChannelType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 8..32 bit | - | This is implementation specific but not all values may be valid within the type. This type shall be chosen in order to have the most efficient implementation on a specific microcontroller platform. |
| Description | Numeric identifier of a PWM channel. | < | < |
| Available via | Pwm.h | < | < |

⌋

### 34. Pwm_PeriodType

Definition of datatype `Pwm_PeriodType`
⌈
| Name | Pwm_PeriodType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 8..32 bit | - | Implementation specific. This type shall be chosen in order to have the most efficient implementation on a specific microcontroller platform. |
| Description | Definition of the period of a PWM channel. | < | < |
| Available via | Pwm.h | < | < |

⌋

### 35. Pwm_OutputStateType

Definition of datatype `Pwm_OutputStateType`
⌈
| Name | Pwm_OutputStateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | PWM_HIGH | 0x00 | The PWM channel is in high state. |
| ^ | PWM_LOW | 0x01 | The PWM channel is in low state. |
| Description | Output state of a PWM channel. | < | < |
| Available via | Pwm.h | < | < |

⌋

### 36. Pwm_EdgeNotificationType

Definition of datatype `Pwm_EdgeNotificationType`
⌈
| Name | Pwm_EdgeNotificationType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | PWM_RISING_EDGE | 0x00 | Notification will be called when a rising edge occurs on the PWM output signal. |
| ^ | PWM_FALLING_EDGE | 0x01 | Notification will be called when a falling edge occurs on the PWM output signal. |
| ^ | PWM_BOTH_EDGES | 0x02 | Notification will be called when either a rising edge or falling edge occur on the PWM output signal. |
| Description | Definition of the type of edge notification of a PWM channel. | < | < |
| Available via | Pwm.h | < | < |

⌋

### 37. Pwm_ChannelClassType

Definition of datatype `Pwm_ChannelClassType`
⌈
| Name | Pwm_ChannelClassType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | PWM_VARIABLE_PERIOD | 0x00 | The PWM channel has a variable period. The duty cycle and the period can be changed. |
| ^ | PWM_FIXED_PERIOD | 0x01 | The PWM channel has a fixed period. Only the duty cycle can be changed. |
| ^ | PWM_FIXED_PERIOD_SHIFTED | 0x02 | The PWM channel has a fixed shifted period. Impossible to change it ( only if supported by hardware) |
| Description | Defines the class of a PWM channel | < | < |
| Available via | Pwm.h | < | < |

⌋

### 38. Pwm_ConfigType

Definition of datatype `Pwm_ConfigType`
⌈
| Name | Pwm_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Hardware dependent structure. | < |
| ^ | Type | - |
| ^ | Comment | The contents of the initialization data structure are hardware specific. |
| Description | This is the type of data structure containing the initialization data for the PWM driver. | < |
| Available via | Pwm.h | < |

⌋

### 39. Pwm_PowerStateRequestResultType

Definition of datatype `Pwm_PowerStateRequestResultType`
⌈
| Name | Pwm_PowerStateRequestResultType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | PWM_SERVICE_ACCEPTED | 0x00 | Power state change executed. |
| ^ | PWM_NOT_INIT | 0x01 | PWM Module not initialized. |
| ^ | PWM_SEQUENCE_ERROR | 0x02 | Wrong API call sequence. |
| ^ | PWM_HW_FAILURE | 0x03 | The HW module has a failure which prevents it to enter the required power state. |
| ^ | PWM_POWER_STATE_NOT_SUPP | 0x04 | PWM Module does not support the requested power state. |
| ^ | PWM_TRANS_NOT_POSSIBLE | 0x05 | PWM Module cannot transition directly from the current power state to the requested power state or the HW peripheral is still busy. |
| Description | Result of the requests related to power state transitions. | < | < |
| Available via | Pwm.h | < | < |

⌋

### 40. Pwm_PowerStateType

Definition of datatype `Pwm_PowerStateType`
  Upstream requirements: ,
⌈
| Name | Pwm_PowerStateType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | PWM_FULL_POWER | 0x00 | Full Power |
| ^ | 1..255 | 0x01..0xFF | power modes with decreasing power consumptions. |
| Description | Power state currently active or set as target power state. | < | < |
| Available via | Pwm.h | < | < |

⌋

### 41. Mandatory parameters：
*原文标题：Mandatory parameters:*

* Assigned HW channel
* Default value for period
* Default value for duty cycle
* Polarity (high or low)
* Idle state high or low
* Channel class:

  * Fixed period
  * Fixed period, shifted (if supported by hardware)
  * Variable period

### 42. Optional parameters (if supported by hardware)：
*原文标题：Optional parameters (if supported by hardware):*

* Channel phase shift
* Reference channel for phase shift
* Microcontroller specific channel properties

### 43. 功能定义
*原文标题：Function definitions*

### 44. Pwm_Init

Definition of API function `Pwm_Init`
⌈
| Service Name | Pwm_Init | < |
|---|---|---|
| Syntax | void Pwm_Init ( |  |

  const `Pwm_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to configuration set |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for PWM initialization. | < |
| Available via | Pwm.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Pwm_Init` shall initialize all internals variables and the used PWM structure of the microcontroller according to the parameters specified in ConfigPtr.
⌋

  Upstream requirements: ,
⌈
The function `Pwm_Init` shall only initialize the configured resources and shall not touch resources that are not configured in the configuration file.
⌋

  Upstream requirements:
⌈
The function `Pwm_Init` shall start all PWM channels with the configured default values.
⌋

If the duty cycle parameter equals:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Pwm_DeInit

Definition of API function `Pwm_DeInit`
⌈
| Service Name | Pwm_DeInit | < |
|---|---|---|
| Syntax | void Pwm_DeInit ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for PWM De-Initialization. | < |
| Available via | Pwm.h | < |

⌋

  Upstream requirements: , ,
⌈
The function `Pwm_DeInit` shall de-initialize the PWM module.
⌋

  Upstream requirements:
⌈
The function `Pwm_DeInit` shall set the state of the PWM output signals to the idle state.
⌋

  Upstream requirements:
⌈
The function `Pwm_DeInit` shall disable PWM interrupts and PWM signal edge notifications.
⌋

  Upstream requirements:
⌈
The function `Pwm_DeInit` shall be pre compile time configurable On/Off by the configuration parameter: PwmDeInitApi.
⌋

  Upstream requirements:
⌈
The function `Pwm_DeInit` shall be configurable On/Off by the configuration parameter PwmDeInitApi {`PWM_DE_INIT_API`}.

Regarding error detection, the requirements , , and  are applicable to the function `Pwm_DeInit`.
⌋

### 46. Pwm_SetDutyCycle

Definition of API function `Pwm_SetDutyCycle`
⌈
| Service Name | Pwm_SetDutyCycle | < |
|---|---|---|
| Syntax | void Pwm_SetDutyCycle ( |  |

  `Pwm_ChannelType` ChannelNumber,
  uint16 DutyCycle
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the PWM |
| ^ | DutyCycle | Min=0x0000 Max=0x8000 |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service sets the duty cycle of the PWM channel. | < |
| Available via | Pwm.h | < |

⌋

  Upstream requirements:
⌈
The function `Pwm_SetDutyCycle` shall set the duty cycle of the PWM channel.
⌋

⌈
When the requested duty cycle is either 0% or 100%, the function

`Pwm_SetDutyCycle` shall set the PWM output state to either `PWM_HIGH` or `PWM_LOW`, with regard to both the configured polarity parameter and the requested duty cycle.

Thus for 0% requested Duty Cycle the output will be the inverse of the configured polarity parameter, and for 100% Duty Cycle the output will be equal to the configured polarity parameter.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Pwm_SetPeriodAndDuty

Definition of API function `Pwm_SetPeriodAndDuty`
⌈
| Service Name | Pwm_SetPeriodAndDuty | < |
|---|---|---|
| Syntax | void Pwm_SetPeriodAndDuty ( |  |

  `Pwm_ChannelType` ChannelNumber,
  `Pwm_PeriodType` Period,
  uint16 DutyCycle
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the PWM |
| ^ | Period | Period of the PWM signal |
| ^ | DutyCycle | Min=0x0000 Max=0x8000 |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service sets the period and the duty cycle of a PWM channel | < |
| Available via | Pwm.h | < |

⌋

  Upstream requirements:
⌈
The function `Pwm_SetPeriodAndDuty` shall set the period and the duty cycle of a PWM channel.
⌋

⌈
The function `Pwm_SetPeriodAndDuty` shall update the period always at the end of the current period if supported by the implementation and configured with PwmPeriodUpdatedEndperiod.
⌋

⌈
When updating the PWM period and duty, the driver shall repress any spikes on the PWM output signal.
⌋

The PWM duty cycle parameter is necessary to maintain the consistency between frequency and duty cycle.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. Pwm_SetOutputToIdle

Definition of API function `Pwm_SetOutputToIdle`
⌈
| Service Name | Pwm_SetOutputToIdle | < |
|---|---|---|
| Syntax | void Pwm_SetOutputToIdle ( |  |

  `Pwm_ChannelType` ChannelNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the PWM |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service sets the PWM output to the configured Idle state. | < |
| Available via | Pwm.h | < |

⌋

  Upstream requirements:
⌈
The function `Pwm_SetOutputToIdle` shall set immediately the PWM output to the configured Idle state.
⌋

Regarding error detection, the requirements , ,  and  are applicable to the function `Pwm_SetOutputToIdle`.

  Upstream requirements:
⌈
The function `Pwm_SetOutputToIdle` shall be pre compile time configurable On/Off by the configuration parameter: PwmSetOutputToIdle.
⌋

  Upstream requirements:
⌈
The function `Pwm_SetOutputToIdle` shall be configurable On/Off by the configuration parameter: PwmSetOutputToIdle {`PWM_SET_OUTPUT_TO_IDLE_API`}.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. Pwm_GetOutputState

Definition of API function `Pwm_GetOutputState`
⌈
| Service Name | Pwm_GetOutputState | < |
|---|---|---|
| Syntax | Pwm_OutputStateType Pwm_GetOutputState ( |  |

  `Pwm_ChannelType` ChannelNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the PWM |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Pwm_OutputStateType | PWM_HIGH The PWM output state is high PWM_LOW The PWM output state is low |
| Description | Service to read the internal state of the PWM output signal. | < |
| Available via | Pwm.h | < |

⌋

  Upstream requirements:
⌈
The function `Pwm_GetOutputState` shall read the internal state of the PWM output signal and return it as defined in the diagram below.

Regarding error detection, the requirements , ,  and  are applicable to the function `Pwm_GetOutputState`.
⌋

  Upstream requirements:
⌈
The function `Pwm_GetOutputState` shall be pre compile time configurable On/Off using the configuration parameter: PwmGetOutputState.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 50. Pwm_DisableNotification

Definition of API function `Pwm_DisableNotification`
⌈
| Service Name | Pwm_DisableNotification | < |
|---|---|---|
| Syntax | void Pwm_DisableNotification ( |  |

  `Pwm_ChannelType` ChannelNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the PWM |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to disable the PWM signal edge notification. | < |
| Available via | Pwm.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Pwm_DisableNotification` shall disable the PWM signal edge notification.
⌋

⌈
The function `Pwm_DisableNotification` shall be pre compile time configurable On/Off using the configuration parameter: PwmNotificationSupported.
⌋

⌈
The function `Pwm_DisableNotification` shall be configurable On/Off by the configuration parameter: PwmNotificationSupported {`PWM_NOTIFICATION_SUPPORTED`}.

Regarding error detection, the requirements , ,  and  are applicable to the function `Pwm_DisableNotification`.
⌋

### 51. Pwm_EnableNotification

Definition of API function `Pwm_EnableNotification`
⌈
| Service Name | Pwm_EnableNotification | < |
|---|---|---|
| Syntax | void Pwm_EnableNotification ( |  |

  `Pwm_ChannelType` ChannelNumber,
  `Pwm_EdgeNotificationType` Notification
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the PWM |
| ^ | Notification | Type of notification PWM_RISING_EDGE or PWM_FALLING_EDGE or PWM_BOTH_EDGES |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to enable the PWM signal edge notification according to notification parameter. | < |
| Available via | Pwm.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Pwm_EnableNotification` shall enable the PWM signal edge notification according to notification parameter.
⌋

⌈
The function `Pwm_EnableNotification` shall cancel pending interrupts.
⌋

⌈
The function `Pwm_EnableNotification` shall be pre compile time configurable On/Off using the configuration parameter: PwmNotificationSupported.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 52. Pwm_SetPowerState

Definition of API function `Pwm_SetPowerState`
⌈
| Service Name | Pwm_SetPowerState | < |
|---|---|---|
| Syntax | Std_ReturnType Pwm_SetPowerState ( |  |

  `Pwm_PowerStateRequestResultType`* Result
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | Result | If the API returns E_OK: PWM_SERVICE_ACCEPTED:Power state change executed. |

If the API returns E_NOT_OK: `PWM_NOT_INIT`: PWM Module not initialized. `PWM_SEQUENCE_ERROR`: wrong API call sequence. `PWM_HW_FAILURE`: the HW module has a failure which prevents it to enter the required power state.
| Return value | Std_ReturnType | E_OK: Power Mode changed E_NOT_OK: request rejected |
|---|---|---|
| Description | This API configures the Pwm module so that it enters the already prepared power state, chosen between a predefined set of configured ones. | < |
| Available via | Pwm.h | < |

⌋

⌈
The API configures the HW in order to enter the given Power State. All preliminary actions to enable this transition (e.g. setting all channels in IDLE status, de-registering of all notifications and so on) must already have been taken by the responsible SWCs (e.g. IoHwAbs).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 53. Pwm_GetCurrentPowerState

Definition of API function `Pwm_GetCurrentPowerState`
⌈
| Service Name | Pwm_GetCurrentPowerState | < |
|---|---|---|
| Syntax | Std_ReturnType Pwm_GetCurrentPowerState ( |  |

  `Pwm_PowerStateType`* CurrentPowerState,
  `Pwm_PowerStateRequestResultType`* Result
| ) | < |  |
|---|---|---|
| Service ID | 0x0a | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | CurrentPowerState | The current power mode of the PWM HW Unit is returned in this parameter |
| ^ | Result | If the API returns E_OK: PWM_SERVICE_ACCEPTED: Current power mode was returned. |

If the API returns E_NOT_OK: `PWM_NOT_INIT`: PWM Module not initialized.
| Return value | Std_ReturnType | E_OK: Mode could be read E_NOT_OK: Service is rejected |
|---|---|---|
| Description | This API returns the current power state of the PWM HW unit. | < |
| Available via | Pwm.h | < |

⌋

⌈
The API returns the power state of the HW unit.
⌋

In case development error reporting is activated:

⌈
The API shall report the development error `PWM_E_UNINIT` in case this API is called before having initialized the HW unit.
⌋

### 其余 40 章（内容从略，见纯文本全文）

54. Pwm_GetTargetPowerState
55. Pwm_PreparePowerState
56. Pwm_GetVersionInfo
57. Callback 通知
58. Scheduled functions
59. Pwm_Main_PowerTransitionManager
60. Expected 接口
61. Mandatory 接口
62. Optional 接口
63. Configurable 接口
64. 服务接口
65. API parameter checking
66. 时序图
67. 初始化
68. De-initialization
69. Setting the duty cycle
70. Setting the period and the duty
71. Setting the PWM output to idle
72. Getting the PWM Output 状态
73. Using the PWM 通知
74. 配置规范
75. How to read this chapter
76. Containers and 配置 parameters
77. Pwm
78. PwmGeneral
79. PwmPowerStateConfig
80. PwmChannel
81. PwmChannelConfigSet
82. PwmConfigurationOfOptApiServices
83. 发布信息
84. 附录
85. 不适用需求
86. Change history of AUTOSAR traceable items
87. Traceable item history of this document according to AUTOSAR Release R25-11
88. Added 规范 Items in R25-11
89. Changed 规范 Items in R25-11
90. Deleted 规范 Items in R25-11
91. Added Constraints in R25-11
92. Changed Constraints in R25-11
93. Deleted Constraints in R25-11
