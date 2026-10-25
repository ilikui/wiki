# Specification of ICU Driver (`ICUDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 023 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_ICUDriver_023\AUTOSAR_CP_SWS_ICUDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_ICUDriver_023\AUTOSAR_CP_SWS_ICUDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_ICUDriver_023\zzgen\CP_SWS_ICUDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and configuration of the AUTOSAR Basic Software module ICU driver.

The ICU driver is a module using the input capture unit (ICU) for demodulation of a PWM signal, counting pulses, measuring of frequency and duty cycle, generating simple interrupts and also wakeup interrupts.

The ICU driver provides services for

* Signal edge notification
* Controlling wakeup interrupts
* Periodic signal time measurement
* Edge time stamping, usable for the acquisition of non-periodic signals
* Edge counting

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and configuration of the AUTOSAR Basic Software module ICU driver.

The ICU driver is a module using the input capture unit (ICU) for demodulation of a PWM signal, counting pulses, measuring of frequency and duty cycle, generating simple interrupts and also wakeup interrupts.

The ICU driver provides services for

* Signal edge notification
* Controlling wakeup interrupts
* Periodic signal time measurement
* Edge time stamping, usable for the acquisition of non-periodic signals
* Edge counting

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the ICU driver module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Active Time | This depends on the starting edge of the signal to be captured. |

* Start edge = falling edge => Active Time = Low Time
* Start edge = rising edge => Active Time = High Time
* Start edge = both edges => Active Time = High Time (if rising edge occurs initially)
* Start edge = both edges => Active Time = Low Time (if falling edge occurs initially)
| DEM | Diagnostic Event Manager |
|---|---|
| DET | Default Error Tracer |
| EcuM | ECU State Manager |
| Enumeration | This can be in "C" programming language an enum or a #define. |
| ICU | Input Capture Unit (not Intensive Care Unit) |
| ICU Channel | Represents a logical ICU entity bound to one input signal and the hardware resources for the configured measurement mode. |
| ICU State | Logical input state of an ICU Channel. |

It can be `ICU_ACTIVE` or `ICU_IDLE`.
| ICU_ACTIVE | Input state of an ICU Channel, an activation edge has been detected. |
|---|---|
| ICU_IDLE | Input state of an ICU Channel, no activation edge has been detected since the last call of Icu_GetInputState() or Icu_Init(). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for ICU driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for ICU driver.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No limitations.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. 模块 DET (Default 错误 Tracer)
*原文标题：Module DET (Default Error Tracer)*

The detailed description of the detected errors can be found in chapter  and chapter .

### 11. 模块 MCU
*原文标题：Module MCU*

The ICU driver depends on the system clock, prescaler(s) and PLL. Hence the length of an ICU timer tick depends on the clock settings made in the module MCU.

The ICU driver will not take care of setting the registers which configure the global clock, global prescaler(s) and PLL in its Init function. This has to be done by the MCU module. The ICU driver only configures local (ICU peripheral specific) clocks, prescalers and so on.

### 12. OS (Operating 系统)
*原文标题：OS (Operating System)*

The ICU driver uses interrupts and therefore there is a dependency on the OS  which configures the interrupt sources. It will provide the call-back functions only.

The ICU driver will not take care of setting the registers for interrupt association in its Init function. The overall assignment and activation of the interrupt system is done by the Operating System.

### 13. 模块 PORT
*原文标题：Module PORT*

The configuration of port pins used for the ICU as inputs is done by the PORT driver . Hence the PORT driver has to be initialized prior to the use of ICU functions. Otherwise ICU functions will exhibit undefined behaviour.

### 14. 模块 EcuM
*原文标题：Module EcuM*

⌈
The ICU driver will do the reporting of wakeup interrupts to the EcuM.
⌋

### 15. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Basic SW module shall be able to shutdown |  |  |
| BSW Modules shall support link-time configuration |  |  |
| Callback Function Return Types for AUTOSAR BSW |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The Basic Software Module specifications shall specify at least in the description which other modules they require |  |  |
| BSW Modules shall support post-build configuration |  |  |
| BSW Modules shall support multiple configuration sets |  |  |
| API handling in uninitialized state |  |  |
| Compiler switches shall have defined v |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能规范
*原文标题：Functional specification*

### 17. 通用行为
*原文标题：General behavior*

### 18. Background & Rationale

To ensure data consistency re-entrant code shall be provided.

### 19. 需求
*原文标题：Requirements*

⌈
The Icu module functions for different channel numbers shall be re-entrant, except for:

* `Icu_Init`
* `Icu_DeInit`
* `Icu_SetMode`
* `Icu_GetVersionInfo`
⌋

⌈
The Icu module's environment shall check the integrity if several calls for the same ICU channel are used during runtime in different tasks or ISRs.
⌋

⌈
The Icu module shall not check the integrity if several calls for the same ICU channel are used during runtime in different tasks or ISRs.
⌋

⌈
The Icu module has 2 modes:

* `ICU_MODE_NORMAL`
* `ICU_MODE_SLEEP`
⌋

  Upstream requirements:
⌈
In `ICU_MODE_NORMAL` mode all notifications are available as configured by service `Icu_SetActivationCondition` or IcuDefaultStartEdge.
⌋

⌈
In `ICU_MODE_NORMAL` mode all notifications are available as selected by the `Icu_DisableNotification` and `Icu_EnableNotification` services before or after the call of `Icu_SetMode`.
⌋

  Upstream requirements:
⌈
In `ICU_MODE_SLEEP` mode only those wakeup events are available which are configured as wakeup capable, enabled via `Icu_EnableWakeup` after `Icu_Init` and which are not disabled via service `Icu_DisableWakeup`
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Time Unit Ticks

### 21. Background & Rationale

To get times out of register values it is necessary to know the oscillator frequency, prescalers and so on. Since these settings are made in the MCU module and/or in other modules it is not possible to calculate such times.

Hence the conversions between time and ticks shall be part of an upper layer.

### 22. 需求
*原文标题：Requirements*

All time units used within the API services of the ICU driver are unit ticks.

### 23. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 24. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Icu
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API IS called with invalid pointer. | ICU_E_PARAM_POINTER | 0x0A |
| API service used with an invalid channel identifier or channel was not configured for the functionality of the calling API. | ICU_E_PARAM_CHANNEL | 0x0B |
| API service used with an invalid or not feasible activation. | ICU_E_PARAM_ACTIVATION | 0x0C |
| Init function failed. | ICU_E_INIT_FAILED | 0x0D |
| API service used with an invalid buffer size. | ICU_E_PARAM_BUFFER_SIZE | 0x0E |
| API service Icu_SetMode used with an invalid mode. | ICU_E_PARAM_MODE | 0x0F |
| API service used without module initialization. | ICU_E_UNINIT | 0x14 |
| API service Icu_SetMode is called while a running operation. | ICU_E_BUSY_OPERATION | 0x16 |
| API Icu_Init service is called and when the ICU driver and the Hardware are already initialized. | ICU_E_ALREADY_INITIALIZED | 0x17 |
| API Icu_StartTimeStamp is called and the parameter NotifyInterval is invalid (e.g."0", NotifyInterval < 1) | ICU_E_PARAM_NOTIFY_INTERVAL | 0x18 |
| API Icu_GetVersionInfo is called and the parameter versioninfo is is invalid ( e.g. NULL ) | ICU_E_PARAM_VINFO | 0x19 |

⌋

### 25. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Icu
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service Icu_StopTimestamp called on a channel which was not started or already stopped | ICU_E_NOT_STARTED | 0x15 |

⌋

### 26. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 27. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 28. API 规范
*原文标题：API specification*

### 29. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following modules are listed:

 Definition of imported datatypes of module Icu
⌈
| Module | Header File | Imported Type |
|---|---|---|
| EcuM | EcuM.h | EcuM_WakeupSourceType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 30. 类型定义
*原文标题：Type definitions*

### 31. Icu_ModeType

Definition of datatype `Icu_ModeType`
⌈
| Name | Icu_ModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ICU_MODE_NORMAL | 0x00 | Normal operation, all used interrupts are enabled according to the notification requests. |
| ^ | ICU_MODE_SLEEP | 0x01 | Reduced power operation. In sleep mode only those notifications are available which are configured as wakeup capable. |
| Description | Allow enabling / disabling of all interrupts which are not required for the ECU wakeup. | < | < |
| Available via | Icu.h | < | < |

⌋

### 32. Icu_ChannelType

Definition of datatype `Icu_ChannelType`
⌈
| Name | Icu_ChannelType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | This is implementation specific but not all values may be valid within the type. This type shall be chosen in order to have the most efficient implementation on a specific microcontroller platform. |
| Description | Numeric identifier of an ICU channel | < | < |
| Available via | Icu.h | < | < |

⌋

### 33. Icu_InputStateType

Definition of datatype `Icu_InputStateType`
⌈
| Name | Icu_InputStateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ICU_ACTIVE | 0x00 | An activation edge has been detected |
| ^ | ICU_IDLE | 0x01 | No activation edge has been detected since the last call of Icu_GetInputState() or Icu_Init(). |
| Description | Input state of an ICU channel | < | < |
| Available via | Icu.h | < | < |

⌋

### 34. Icu_ConfigType

Definition of datatype `Icu_ConfigType`
⌈
| Name | Icu_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | -- | < |
| ^ | Type | - |
| ^ | Comment | Hardware and implementation dependent structure. The contents of the initialization data structure are microcontroller specific. |
| Description | This type contains initialization data. | < |
| Available via | Icu.h | < |

⌋

⌈
If in the definition for each Channel within the `Icu_ConfigType` the channel is configured as wakeup capable then the function called for validation of wakeup reason shall be `EcuM_CheckWakeup`.
⌋

### 35. Icu_ActivationType

Definition of datatype `Icu_ActivationType`
⌈
| Name | Icu_ActivationType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ICU_RISING_EDGE | 0x00 | An appropriate action shall be executed when a rising edge occurs on the ICU input signal. |
| ^ | ICU_FALLING_EDGE | 0x01 | An appropriate action shall be executed when a falling edge occurs on the ICU input signal. |
| ^ | ICU_BOTH_EDGES | 0x02 | An appropriate action shall be executed when either a rising or falling edge occur on the ICU input signal. |
| Description | Definition of the type of activation of an ICU channel. | < | < |
| Available via | Icu.h | < | < |

⌋

### 36. Icu_ValueType

Definition of datatype `Icu_ValueType`
⌈
| Name | Icu_ValueType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 0 ... <width of the timer register> | - | Implementation specific. This type shall be chosen in order to have the most efficient implementation on a specific microcontroller platform. |
| Description | Width of the buffer for timestamp ticks and measured elapsed timeticks. | < | < |
| Available via | Icu.h | < | < |

⌋

### 37. Icu_DutyCycleType

Definition of datatype `Icu_DutyCycleType`
⌈
| Name | Icu_DutyCycleType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | ActiveTime | < |
| ^ | Type | Icu_ValueType |
| ^ | Comment | This shall be the coherent active-time measured on a channel |
| ^ | PeriodTime | < |
| ^ | Type | Icu_ValueType |
| ^ | Comment | This shall be the coherent period-time measured on a channel |
| Description | Type which shall contain the values, needed for calculating duty cycles. | < |
| Available via | Icu.h | < |

⌋

### 38. Icu_IndexType

Definition of datatype `Icu_IndexType`
⌈
| Name | Icu_IndexType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | Implementation specific. This type shall be chosen in order to have the most efficient implementation on a specific microcontroller platform. |
| Description | Type, to abstract the return value of the service Icu_GetTimestampIndex().Since circular buffer handling is supported and Icu_GetTimestampIndex can return '0' as a legally true value ( not as an error according to ICU107 and ICU135), Icu_IndexType may be implemented to have values 1..xyz. | < | < |
| Available via | Icu.h | < | < |

⌋

### 39. Icu_EdgeNumberType

Definition of datatype `Icu_EdgeNumberType`
⌈
| Name | Icu_EdgeNumberType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | Implementation specific. This type shall be chosen in order to have the most efficient implementation on a specific microcontroller platform. |
| Description | Type, to abstract the return value of the service Icu_GetEdgeNumbers(). | < | < |
| Available via | Icu.h | < | < |

⌋

### 40. Icu_MeasurementModeType

Definition of datatype `Icu_MeasurementModeType`
⌈
| Name | Icu_MeasurementModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ICU_MODE_SIGNAL_EDGE_DETECT | 0x00 | Mode for detecting edges |
| ^ | ICU_MODE_SIGNAL_MEASUREMENT | 0x01 | Mode for measuring different times between various configurable edges |
| ^ | ICU_MODE_TIMESTAMP | 0x02 | Mode for capturing timer values on configurable edges |
| ^ | ICU_MODE_EDGE_COUNTER | 0x03 | Mode for counting edges on configurable edges |
| Description | Definition of the measurement mode type | < | < |
| Available via | Icu.h | < | < |

⌋

### 41. Icu_SignalMeasurementPropertyType

Definition of datatype `Icu_SignalMeasurementPropertyType`
⌈
| Name | Icu_SignalMeasurementPropertyType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ICU_LOW_TIME | 0x00 | The channel is configured for reading the elapsed Signal Low Time |
| ^ | ICU_HIGH_TIME | 0x01 | The channel is configured for reading the elapsed Signal High Time |
| ^ | ICU_PERIOD_TIME | 0x02 | The channel is configured for reading the elapsed Signal Period Time |
| ^ | ICU_DUTY_CYCLE | 0x03 | The channel is configured to read values which are needed for calculating the duty cycle (coherent Active and Period Time). |
| Description | Definition of the measurement property type | < | < |
| Available via | Icu.h | < | < |

⌋

### 42. Icu_TimestampBufferType

Definition of datatype `Icu_TimestampBufferType`
⌈
| Name | Icu_TimestampBufferType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ICU_LINEAR_BUFFER | 0x00 | The buffer will just be filled once |
| ^ | ICU_CIRCULAR_BUFFER | 0x01 | After reaching the end of the buffer, the driver restarts at the beginning of the buffer |
| Description | Definition of the timestamp measurement property type | < | < |
| Available via | Icu.h | < | < |

⌋

### 43. 功能定义
*原文标题：Function definitions*

This is a list of functions provided for upper layer modules.

### 44. Icu_Init

Definition of API function `Icu_Init`
⌈
| Service Name | Icu_Init | < |
|---|---|---|
| Syntax | void Icu_Init ( |  |

  const `Icu_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to a selected configuration structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function initializes the driver. | < |
| Available via | Icu.h | < |

⌋

⌈
The function `Icu_Init` shall be non re-entrant.
⌋

⌈
The function `Icu_Init` initializes the driver.
⌋

  Upstream requirements: , , , , ,
⌈
The function `Icu_Init` shall initialize all relevant registers of the configured hardware with the values of the structure referenced by the parameter ConfigPtr.
⌋

The following rules regarding initialization of controller registers shall apply to this driver implementation:

*
    Upstream requirements:
  ⌈
  If the hardware allows for only one usage of the register, the driver module implementing that functionality is responsible for initializing the register.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Icu_DeInit

Definition of API function `Icu_DeInit`
⌈
| Service Name | Icu_DeInit | < |
|---|---|---|
| Syntax | void Icu_DeInit ( |  |

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
| Description | This function de-initializes the ICU module. | < |
| Available via | Icu.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Icu_DeInit` shall set the state of the peripherals used by configuration as the same after power on reset.
⌋

⌈
Values of registers which are not writeable are excluded from setting the state by the function `Icu_DeInit`.
⌋

⌈
The function `Icu_DeInit` shall influence only the peripherals which are allocated by static configuration and/or the runtime configuration set passed by the previous call of `Icu_Init`.
⌋

  Upstream requirements: ,
⌈
The function `Icu_DeInit` shall disable all used interrupts and notifications.
⌋

⌈
The Icu module's environment shall not call `Icu_DeInit` during a running operation (e.g. timestamp measurement or edge counting)
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Icu_SetMode

Definition of API function `Icu_SetMode`
⌈
| Service Name | Icu_SetMode | < |
|---|---|---|
| Syntax | void Icu_SetMode ( |  |

  `Icu_ModeType` Mode
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | Mode | ICU_MODE_NORMAL: Normal operation, all used interrupts are enabled according to the notification requests. ICU_MODE_SLEEP: Reduced power mode. In sleep mode only those notifications are available which are configured as wakeup capable. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function sets the ICU mode. | < |
| Available via | Icu.h | < |

⌋

  Upstream requirements: , ,
⌈
The function `Icu_SetMode` shall set the operation mode to the given mode parameter. The function `Icu_SetMode` shall set the operation mode to the given mode parameter. This function influences the functionality of the ICU channels. Therefore the mode switching of the module shall be compatible to the overall state of the ECU.
⌋

⌈
The function `Icu_SetMode` shall be non re-entrant.

This function influences the functionality of the ICU channels. Therefore the mode switching of the module shall be compatible to the overall state of the ECU.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Icu_DisableWakeup

Definition of API function `Icu_DisableWakeup`
⌈
| Service Name | Icu_DisableWakeup | < |
|---|---|---|
| Syntax | void Icu_DisableWakeup ( |  |

  `Icu_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (limited according to ICU050) | < |
| Parameters (in) | Channel | Numeric identifier of the ICU channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function disables the wakeup capability of a single ICU channel. | < |
| Available via | Icu.h | < |

⌋

  Upstream requirements:
⌈
The function `Icu_DisableWakeup` shall disable the wakeup capability of a single ICU channel.
⌋

⌈
The function `Icu_DisableWakeup` shall disable the wakeup capability of a single ICU channel only for ICU channels configured statically as wakeup capable true.
⌋

⌈
The function `Icu_DisableWakeup` shall be re-entrant.
⌋

  Upstream requirements: ,
⌈
The function `Icu_DisableWakeup` shall be pre compile time configurable by the configuration parameter IcuDisableWakeupApi.
⌋

⌈
The function `Icu_DisableWakeup` shall be configurable ON/OFF by the configuration parameter IcuDisableWakeupApi.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. Icu_EnableWakeup

Definition of API function `Icu_EnableWakeup`
⌈
| Service Name | Icu_EnableWakeup | < |
|---|---|---|
| Syntax | void Icu_EnableWakeup ( |  |

  `Icu_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (limited according to ICU050) | < |
| Parameters (in) | Channel | Numeric identifier of the ICU channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function (re-)enables the wakeup capability of the given ICU channel. | < |
| Available via | Icu.h | < |

⌋

⌈
The function `Icu_EnableWakeup` shall be re-entrant.
⌋

  Upstream requirements:
⌈
The function `Icu_EnableWakeup` shall re-enable the wakeup capability of a single ICU channel for the following ICU mode selection(s). This service is only feasible for ICU channels configured as wakeup capable true.

To make the selection effective a call of the function `Icu_SetMode`, requesting the mode `ICU_MODE_SLEEP` is required.
⌋

  Upstream requirements: ,
⌈
The function `Icu_EnableWakeup` shall be pre compile time configurable by configuration parameter IcuEnableWakeupApi.
⌋

⌈
The function `Icu_EnableWakeup` shall be configurable ON/OFF by configuration parameter IcuEnableWakeupApi.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. Icu_CheckWakeup

Definition of API function `Icu_CheckWakeup`
⌈
| Service Name | Icu_CheckWakeup | < |
|---|---|---|
| Syntax | void Icu_CheckWakeup ( |  |

  `EcuM_WakeupSourceType` WakeupSource
| ) | < |  |
|---|---|---|
| Service ID | 0x15 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (limited according to ICU050) | < |
| Parameters (in) | WakeupSource | Informatin on wakeup source to be checked. The associated ICU channel can be determined from configuration data. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Checks if a wakeup capable ICU channel is the source for a wakeup event and calls the ECU state manager service EcuM_SetWakeupEvent in case of a valid ICU channel wakeup event. | < |
| Available via | Icu.h | < |

⌋

⌈
The function `Icu_CheckWakeup` shall check if a wakeup capable ICU channel is the source for a wakeup event and call `EcuM_SetWakeupEvent` to indicate a valid timer wakeup event to the ECU State Manager.
⌋

⌈
The function `Icu_CheckWakeup` is only feasible, if IcuReportWakeupSource is statically configured available.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 50. Icu_SetActivationCondition

Definition of API function `Icu_SetActivationCondition`
⌈
| Service Name | Icu_SetActivationCondition | < |
|---|---|---|
| Syntax | void Icu_SetActivationCondition ( |  |

  `Icu_ChannelType` Channel,
  `Icu_ActivationType` Activation
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (limited according to ICU050) | < |
| Parameters (in) | Channel | Numeric identifier of the ICU channel |
| ^ | Activation | Type of activation (if supported by hardware) |

* `ICU_RISING_EDGE`
* `ICU_FALLING_EDGE`
* `ICU_BOTH_EDGES`
| Parameters (inout) | None | < |
|---|---|---|
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function sets the activation-edge for the given channel. | < |
| Available via | Icu.h | < |

⌋

  Upstream requirements:
⌈
The function `Icu_SetActivationCondition` shall set the activation-edge according to Activation parameter for the given channel. This service shall support channels which are configured for the following `Icu_MeasurementModeType`:

* `ICU_MODE_SIGNAL_EDGE_DETECT`
* `ICU_MODE_TIMESTAMP`
* `ICU_MODE_EDGE_COUNTER`
⌋

⌈
The function `Icu_SetActivationCondition` shall reset the state for the given channel to `ICU_IDLE`.
⌋

⌈
The function `Icu_SetActivationCondition` shall be re-entrant.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. Icu_DisableNotification

Definition of API function `Icu_DisableNotification`
⌈
| Service Name | Icu_DisableNotification | < |
|---|---|---|
| Syntax | void Icu_DisableNotification ( |  |

  `Icu_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (limited according to ICU050) | < |
| Parameters (in) | Channel | Numeric identifier of the ICU channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function disables the notification of a channel. | < |
| Available via | Icu.h | < |

⌋

  Upstream requirements:
⌈
The function `Icu_DisableNotification` shall disable the notification on the given channel.
⌋

⌈
The function `Icu_DisableNotification` shall be re-entrant.
⌋

⌈
If development error detection is enabled the function `Icu_DisableNotification` shall check the parameter Channel and shall raise the error `ICU_E_PARAM_CHANNEL` if Channel is invalid (invalid identifier).
⌋

  Upstream requirements: ,
⌈
If development error detection for the Icu module is enabled: This function shall raise development error `ICU_E_UNINIT` when the function `Icu_Init` has not been called.
⌋

### 52. Icu_EnableNotification

Definition of API function `Icu_EnableNotification`
⌈
| Service Name | Icu_EnableNotification | < |
|---|---|---|
| Syntax | void Icu_EnableNotification ( |  |

  `Icu_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant (limited according to ICU050) | < |
| Parameters (in) | Channel | Numeric identifier of the ICU channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function enables the notification on the given channel. | < |
| Available via | Icu.h | < |

⌋

  Upstream requirements:
⌈
The function `Icu_EnableNotification` shall enable the notification on the given channel.
⌋

⌈
The function `Icu_EnableNotification` shall be re-entrant.
⌋

⌈
If development error detection is enabled the function `Icu_EnableNotification` shall check the parameter Channel and shall raise the error `ICU_E_PARAM_CHANNEL` if Channel is invalid (invalid identifier).
⌋

  Upstream requirements: ,
⌈
If development error detection for the Icu module is enabled: This function shall raise development error `ICU_E_UNINIT` when the function `Icu_Init` has not been called.
⌋

### 其余 60 章（内容从略，见纯文本全文）

53. Icu_GetInputState
54. Icu_StartTimestamp
55. Icu_StopTimestamp
56. Icu_GetTimestampIndex
57. Icu_ResetEdgeCount
58. Icu_EnableEdgeCount
59. Icu_EnableEdgeDetection
60. Icu_DisableEdgeDetection
61. Icu_DisableEdgeCount
62. Icu_GetEdgeNumbers
63. Icu_StartSignalMeasurement
64. Icu_StopSignalMeasurement
65. Icu_GetTimeElapsed
66. Icu_GetDutyCycleValues
67. Icu_GetVersionInfo
68. Icu_DisableNotificationAsync
69. Icu_EnableNotificationAsync
70. Callback 通知
71. Scheduled functions
72. Expected 接口
73. Mandatory 接口
74. Optional 接口
75. Configurable 接口
76. 时序图
77. Icu_Init
78. Icu_DeInit
79. Check 唤醒 Events
80. Icu_SetMode
81. Icu_DisableWakeup
82. Icu_EnableWakeup
83. Icu_SetActivationCondition
84. Icu_DisableNotification
85. Icu_EnableNotification
86. Icu_GetInputState
87. Icu Timestamping
88. Icu Edge Counting
89. Icu_GetTimeElapsed
90. Icu_GetDutyCycleValues
91. Icu_DisableNotificationAsync
92. Icu_SignalNotification and Icu_GetInputState
93. Icu_EnableNotificationAsync
94. 配置规范
95. How to read this chapter
96. Containers and 配置 parameters
97. Icu
98. IcuGeneral
99. IcuOptionalApis
100. IcuChannel
101. IcuSignalEdgeDetection
102. 发布信息
103. 附录
104. 不适用需求
105. Change history of AUTOSAR traceable items
106. Traceable item history of this document according to AUTOSAR Release R25-11
107. Added 规范 Items in R25-11
108. Changed 规范 Items in R25-11
109. Deleted 规范 Items in R25-11
110. Added Constraints in R25-11
111. Changed Constraints in R25-11
112. Deleted Constraints in R25-11
