# Specification of OCU Driver (`OCUDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 615 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_OCUDriver_615\AUTOSAR_CP_SWS_OCUDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_OCUDriver_615\AUTOSAR_CP_SWS_OCUDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_OCUDriver_615\zzgen\CP_SWS_OCUDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module OCU driver.

Each OCU software channel is linked to a hardware OCU peripheral which belongs to the microcontroller. An output pin can be optionally attached to this channel.

The driver provides functions for initialization and control of the microcontroller internal OCU functionality (Output Compare Unit). The OCU driver allows comparing and acting automatically when the value of a counter matches a defined threshold.The OCU driver provides services and configuration parameters for:

* Starting and stopping a comparison process
* Setting comparison threshold
* Enabling and disabling notification mechanisms
* Getting counter values
* Changing output pin states
* Triggering some hardware resources (ADC, DMA) if available.

The tick duration of a channel counter depends on the channel specific settings (part of OCU driver) as well as on the system clock and settings of the clock tree controlled by the MCU module. The tick duration is not limited by this specification.

Some microcontrollers don't have a dedicated OCU hardware cell, but instead a generic timer module that can be configured to provide the OCU functionality and other timer functionalities as well. This specification does not assume the hardware architecture. Instead; it defines parameters and APIs so that they can be implemented on any suitable hardware architecture. The picture below shows a typical representation of an OCU channel.

The 'output' is the action that is actually done upon compare match.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module OCU driver.

Each OCU software channel is linked to a hardware OCU peripheral which belongs to the microcontroller. An output pin can be optionally attached to this channel.

The driver provides functions for initialization and control of the microcontroller internal OCU functionality (Output Compare Unit). The OCU driver allows comparing and acting automatically when the value of a counter matches a defined threshold.The OCU driver provides services and configuration parameters for:

* Starting and stopping a comparison process
* Setting comparison threshold
* Enabling and disabling notification mechanisms
* Getting counter values
* Changing output pin states
* Triggering some hardware resources (ADC, DMA) if available.

The tick duration of a channel counter depends on the channel specific settings (part of OCU driver) as well as on the system clock and settings of the clock tree controlled by the MCU module. The tick duration is not limited by this specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the OCU Driver module that are not included in the .

Acronyms and abbreviations that have a local scope appear in the glossary below. Those that have a global scope are contained in the AUTOSAR glossary.

| Acronym/Abbreviation | Description |
|---|---|
| OCU | Output Compare Unit |
| DMA | Direct Memory Access |
| SPAL | Standard Peripheral Abstraction Layer |

| Term definition: | Description: |
|---|---|
| OCU channel | Represents a logical entity composed of a free running counter a comparison threshold and the action that is done as a result of the comparison process. |
| Compare threshold. | Target value that is compared with the content of the counter each time the counter is increased by one unit. |
| Free running counter | A counter that runs from a minimum (respectively a maxium) to a maximum (respectively a minimum) value and restarts automatically from the minimum (respectively a maximum) after reaching the maximum (respectively the minimum) value. |
| Reference Interval | Interval (in ticks) given by the caller of the Ocu_SetAbsolutThreshold API, and used as base to compute the return information. |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for OCU Driver.

Thus, General Specification on Basic Software modules  shall be considered as additional and required specification for OCU Driver.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. Assumptions

### 8. Clock

The driver does not support dynamic changes of the clock.

Since the system clock is fully managed by the MCU module, any dynamic change in the system clock settings will impact this module.

The module does not run in the sleep mode.

### 9. Resources

The allocation of resources is made exclusively by SW or HW to avoid shared resource issues.

e.g: usage of the API `Ocu_SetPinState`. This API cannot be called to change the state of a pin for a channel that is in the RUNNING state, otherwise there might be a conflict between the state set automatically by the hardware upon compre match and the one set by the API.

### 10. Counting and comparing

Our assumption is that the hardware that will operate this driver has the following counter abstraction model (example for an eight-bit counter).

Minimum value is 0

Maximum value is 255

The counter is reloaded with 0 when it exceeds the maximum value. That means it has 256 count steps.

Due to the quantization of counting, two different cases are possible when comparing the content of the counter with the threshold. The comparaison can occur when entering a state of the counter or while exiting from a state, as shown in the picture below

The expected behavior of this driver is to have the comparison done on entering the state represented by the threshold.

### 11. 限制
*原文标题：Limitations*

No limitations.

### 12. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 13. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 14. 模块 DET
*原文标题：Module DET*

If development error detection is enabled for the OCU driver, then the driver shall raise errors to the Default Error Tracer (DET) whenever a development error is encountered by this module.

### 15. 模块 DEM
*原文标题：Module DEM*

The OCU driver shall report production errors to the Diagnostic Event Manager (DEM).

### 16. 模块 MCU 驱动
*原文标题：Module MCU Driver*

The Microcontroller Unit Driver (MCU Driver) is primarily responsible for initializing and controlling the chip internal clock sources and clock prescalers. The OCU depends on the system clock. Thus, changes of the system clock (e.g. PLL on PLL off) also affect the clock settings of the OCU hardware.

The MCU driver will set global prescalers, and the OCU clock.The OCU driver will not take care of setting the registers that configure the global clock, global prescalers and PLL in its initialization function. This has to be done by the MCU module. The OCU driver only configures local (OCU peripheral specific) resources.

Document `AUTOSAR_TPS_ECUConfiguration`  contains the chapter '4.8 Clock Tree Configuration', which details the mechanism to deliver reference clock signals to peripherals.

### 17. 模块 PORT
*原文标题：Module PORT*

The configuration of port pins used for the OCU as outputs is done by the PORT driver. Hence the PORT driver has to be initialized prior to the use of OCU functions.

### 18. 文件结构
*原文标题：File structure*

### 19. 代码文件结构
*原文标题：Code file structure*

Upstream requirements: , ,
⌈
The code file structure shall not be defined completely within this specification. At this point it shall be pointed out that the code-file structure shall include the following files

- `Ocu_Lcfg`.c - for link time configurable parameters and

- `Ocu_PBcfg`.c - for post build time configurable parameters.

These files shall contain all link time and post-build time configurable parameters.
⌋

### 20. 头文件结构
*原文标题：Header file structure*

Upstream requirements: , ,
⌈
Ocu.c shall include Ocu.h and Det.h.
⌋

### 21. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in <`CITATIONS_OF_CONTRIBUTED_DOCUMENTS`> and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All software modules shall provide version and identification information |  |  |
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| Shared code shall be reentrant |  |  |
| All internal driver modules shall separate the interrupt frame definition from the service routine |  |  |
| Each AUTOSAR Basic Software Module file shall provide version numbers in the header file |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 功能规范
*原文标题：Functional specification*

### 23. 通用行为
*原文标题：General behavior*

The OCU channel is composed of two main elements: a free running counter and a compare threshold. These elements act together to generate actions required by the user.The free running counter can be provided by hardaware or software whereas the threshold is a value set by the user. It is then compared with the current content of the counter each time the counter is increased by one unit.

The driver compares both values each time the counter is increased by one unit. In case of equality, two different types of action can be done:

-report the information to the upper layer through a notification function.

-act on a configured output pin

The OCU driver provides the following services for managing a channel:

* Starting a channel
* Stopping a channel
* Setting the comparison threshold value
* Enabling and disabling a notification function for a channel
* Getting counter values
* Changing output pin states

The states and the state transitions of an output compare channel are shown in the figure below.

An Ocu channel has a simple state diagram with the states shown above. All the channels of the driver are initialized at once with the API `Ocu_Init`().

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Version check

### 25. Background & Rationale

The integration of incompatible files is to be avoided. Minimum implementation is the version check of the header file inside the .c file (version numbers of .c and .h files must be identical).

  Upstream requirements:
⌈
The OCU driver shall perform Inter Module Checks to avoid integration of incompatible files.The imported included files shall be checked by preprocessing directives.

The following version numbers shall be verified:

- <MODULENAME>_AR_RELEASE_MAJOR_VERSION

- <MODULENAME>_AR_RELEASE_MINOR_VERSION

Where <MODULENAME> is the module short name of the other (external) modules, which provide header files included by the OCU driver.

If the values are not identical to the expected values, an error shall be reported.
⌋

### 26. Time Unit Ticks

### 27. Background & Rationale

To get times out of register values it is necessary to know the oscillator frequency, prescalers and some other settings of the whole system clock. Since these settings are made in MCU and/or in other modules it is not possible to calculate such times.

Hence the conversions between time and ticks shall be part of an upper layer.

### 28. 需求
*原文标题：Requirements*

Upstream requirements:
⌈
All time units used within the API services of the OCU driver shall be of the unit ticks.
⌋

### 29. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

  Upstream requirements: , , , , ,
⌈
The following errors shall be detectable by the OCU driver depending on its build version (development / production mode).
⌋

### 30. Development 错误
*原文标题：Development Errors*

Upstream requirements:
⌈
Development error values are of type uint8.
⌋

 Definition of development errors in module Ocu
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API services other than Ocu_init() used without module initialization | OCU_E_UNINIT | 0x02 |
| API service used with an invalid channel Identifier. | OCU_E_PARAM_INVALID_CHANNEL | 0x03 |
| API Ocu_SetPinState() called with an invalid pin state or when the channel is in the RUNNING state. | OCU_E_PARAM_INVALID_STATE | 0x04 |
| API Ocu_SetPinAction() called with an invalid pin action. | OCU_E_PARAM_INVALID_ACTION | 0x05 |
| Usage of Ocu_DisableNotification() or Ocu_EnableNotification() on a channel where a NULL pointer is configured as the notification function. | OCU_E_NO_VALID_NOTIF | 0x06 |
| API Ocu_Init() called while the OCU driver has already been initialized | OCU_E_ALREADY_INITIALIZED | 0x07 |
| Ocu_SetPinState() or Ocu_SetPinAction() called for a channel that doesn't have an associated output pin. | OCU_E_PARAM_NO_PIN | 0x0A |
| OCU initialization has been failed, e.g. selected configuration set doesn't exist. | OCU_E_INIT_FAILED | 0x0B |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Ocu
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API Ocu_StartChannel() called on a channel that is in state RUNNING | OCU_E_BUSY | 0x09 |

⌋

### 32. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 33. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 34. 错误检测
*原文标题：Error Detection*

Upstream requirements: ,
⌈
The detection of development errors is configurable (ON / OFF) at pre-compile time. The switch OcuDevErrorDetectApi shall activate or deactivate the detection of all development errors.
⌋

  Upstream requirements: , ,
⌈
If the switch OcuDevErrorDetectApi is enabled, then API parameter checking is enabled. The detailed description of the detected errors can be found in chapter Error classification and chapter API specification.
⌋

  Upstream requirements:
⌈
The detection of production errors cannot be switched off.
⌋

### 35. 错误通知
*原文标题：Error Notification*

Upstream requirements:
⌈
Detected development errors shall be reported with the service `Det_ReportError` of the Default Error Tracer (DET) if the pre-processor switch OcuDevErrorDetectApi is set.
⌋

### 36. Debug 支持
*原文标题：Debug Support*

⌈
Each variable that shall be accessible by AUTOSAR Debugging, shall be defined as global variable.
⌋

  Upstream requirements:
⌈
All type definitions of variables which shall be debugged shall be accessible by the header file Ocu.h.
⌋

⌈
The declaration of variables in the header file shall be such that it is possible to calculate the size of the variables by C-"sizeof".
⌋

⌈
Variables available for debugging shall be described in the respective OCU driver Description.
⌋

### 37. API 规范
*原文标题：API specification*

### 38. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Ocu
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |

⌋

### 39. 类型定义
*原文标题：Type definitions*

### 40. Ocu_ChannelType

Definition of datatype `Ocu_ChannelType`
  Upstream requirements:
⌈
| Name | Ocu_ChannelType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 8 / 16 / 32 bits | - | This is implementation specific but not all values may be valid within the type. This type shall be chosen in order to have the most efficient implementation on a specific microcontroller platform. |
| Description | Numeric identifier of an OCU channel. | < | < |
| Available via | Ocu.h | < | < |

⌋

### 41. Ocu_ValueType

Definition of datatype `Ocu_ValueType`
  Upstream requirements:
⌈
| Name | Ocu_ValueType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 8 / 16 / 32 bits | - | This is implementation specific but not all values may be valid within the type. This type shall be chosen in order to have the most efficient implementation on a specific microcontroller platform. |
| Description | Type for reading the counter and writing the threshold values (in number of ticks). | < | < |
| Available via | Ocu.h | < | < |

⌋

### 42. Ocu_PinStateType

Definition of datatype `Ocu_PinStateType`
  Upstream requirements:
⌈
| Name | Ocu_PinStateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | OCU_HIGH | 0x00 | The pin associated to an OCU channel is in high state. |
| ^ | OCU_LOW | 0x01 | The pin associated to an OCU channel is in low state. |
| Description | Output state of the pin linked to an OCU channel. | < | < |
| Available via | Ocu.h | < | < |

⌋

### 43. Ocu_PinActionType

Definition of datatype `Ocu_PinActionType`
  Upstream requirements:
⌈
| Name | Ocu_PinActionType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | OCU_SET_HIGH | 0x00 | The channel pin will be set HIGH upon compare match. |
| ^ | OCU_SET_LOW | 0x01 | The channel pin will be set LOW upon compare match. |
| ^ | OCU_TOGGLE | 0x02 | The channel pin will be set to the opposite of its current level HIGH upon compare match. |
| ^ | OCU_DISABLE | 0x03 | The channel pin will remain at its current level upon compare match. |
| Description | Automatic action (by hardware) to be performed on a pin attached to an OCU channel. | < | < |
| Available via | Ocu.h | < | < |

⌋

### 44. Ocu_ConfigType

Definition of datatype `Ocu_ConfigType`
  Upstream requirements: , , ,
⌈
| Name | Ocu_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Hardware dependent | < |
| ^ | Type | - |
| ^ | Comment | The contents of the initialization data structure are hardware specific. |
| Description | This is the type of the data structure containing the initialization data for the OCU driver. | < |
| Available via | Ocu.h | < |

⌋

### 45. Ocu_ReturnType

Definition of datatype `Ocu_ReturnType`
  Upstream requirements:
⌈
| Name | Ocu_ReturnType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | OCU_CM_IN_REF_INTERVAL | 0x00 | The compare match will occur inside the current Reference Interval. |
| ^ | OCU_CM_OUT_REF_INTERVAL | 0x01 | The compare match will not occur inside the current Reference Interval. |
| Description | Return information after setting a new threshold value. | < | < |
| Available via | Ocu.h | < | < |

⌋

### 46. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 47. Ocu_Init

Definition of API function `Ocu_Init`
  Upstream requirements: , , ,
⌈
| Service Name | Ocu_Init | < |
|---|---|---|
| Syntax | void Ocu_Init ( |  |

  const `Ocu_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the configuration set |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for OCU initialization. | < |
| Available via | Ocu.h | < |

⌋

  Upstream requirements: , , ,
⌈
The function `Ocu_Init` shall initialize all internals variables and the used Ocu structure of the microcontroller according to a configuration set referenced by ConfigPtr.
⌋

Note: All the channels are initialized at once by the API `Ocu_Init`. There's no API to individually initialize each channel.

  Upstream requirements:
⌈
If a free-running counter of the OCU cell can be used by another timer module then the Ocu driver must not start nor stop the free-running counter.
⌋

  Upstream requirements:
⌈
The API `Ocu_Init` shall start all free-running counters, which are exclusively used by this driver.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. Ocu_DeInit

Definition of API function `Ocu_DeInit`
  Upstream requirements:
⌈
| Service Name | Ocu_DeInit | < |
|---|---|---|
| Syntax | void Ocu_DeInit ( |  |

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
| Description | This function de-initializes the OCU module. | < |
| Available via | Ocu.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Ocu_DeInit` shall deinitialize the OCU variables and registers that were initialized by `Ocu_Init` to a state comparable to their power on reset state. Values of registers which are not writeable are excluded.
⌋

Note: It's the responsibility of the hardware design that the state does not lead to undefined activities in the \muC.

  Upstream requirements:
⌈
The function `Ocu_DeInit` shall disable all used interrupts and notifications.
⌋

  Upstream requirements:
⌈
The function `Ocu_DeInit` shall influence only the peripherals which are allocated by static configuration and/or the runtime configuration set passed by the previous call of `Ocu_Init`().
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. Ocu_StartChannel

Definition of API function `Ocu_StartChannel`
  Upstream requirements:
⌈
| Service Name | Ocu_StartChannel | < |
|---|---|---|
| Syntax | Std_ReturnType Ocu_StartChannel ( |  |

  `Ocu_ChannelType` ChannelNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the OCU |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK Channel was started E_NOT_OK Channel was not started |
| Description | Service to start an OCU channel. | < |
| Available via | Ocu.h | < |

⌋

  Upstream requirements:
⌈
The function `Ocu_StartChannel` shall start an OCU channel by allowing all compare match configured actions to be performed.
⌋

  Upstream requirements:
⌈
The function `Ocu_StartChannel` shall be reentrant if it is called for different channels.
⌋

⌈
The state of the selected channel shall be set to "RUNNING" If the function `Ocu_StartChannel` has been successfully performed.
⌋

  Upstream requirements: ,
⌈
If the function `Ocu_StartChannel` is called on a channel in the state "RUNNING", then the function shall raise the error `OCU_E_BUSY` and return without any action.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 50. Ocu_StopChannel

Definition of API function `Ocu_StopChannel`
  Upstream requirements:
⌈
| Service Name | Ocu_StopChannel | < |
|---|---|---|
| Syntax | void Ocu_StopChannel ( |  |

  `Ocu_ChannelType` ChannelNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the OCU |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to stop an OCU channel. | < |
| Available via | Ocu.h | < |

⌋

  Upstream requirements:
⌈
The function `Ocu_StopChannel` shall stop an OCU channel by halting compare match configured actions for this channel.
⌋

  Upstream requirements:
⌈
The function `Ocu_StopChannel` shall not stop the free-running counter associated with a channel.
⌋

Note: This is due to the fact that a free-running counter can be associated with more than one Ocu channel. Therefore, stopping that counter will harm the operation of the other channel(s).

  Upstream requirements:
⌈
The function `Ocu_StopChannel` shall be reentrant if it is called for different channels.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. Ocu_SetPinState

Definition of API function `Ocu_SetPinState`
  Upstream requirements:
⌈
| Service Name | Ocu_SetPinState | < |
|---|---|---|
| Syntax | void Ocu_SetPinState ( |  |

  `Ocu_ChannelType` ChannelNumber,
  `Ocu_PinStateType` PinState
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the OCU |
| ^ | PinState | OCU_LOW, OCU_HIGH |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to set immediately the level of the pin associated to an OCU channel. | < |
| Available via | Ocu.h | < |

⌋

  Upstream requirements:
⌈
The function `Ocu_SetPinState` shall set the pin associated with the channel to the level indicated by "PinState".
⌋

  Upstream requirements:
⌈
The fuction `Ocu_SetPinState` shall be reentrant if it is called for different channels.
⌋

⌈
The function `Ocu_SetPinState` shall be used only if the channel is not in the RUNNING state.
⌋

Note: The previous requirerment also means that it shall be possible to alter the state of a STOPPED channel by this API.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 52. Ocu_SetPinAction

Definition of API function `Ocu_SetPinAction`
  Upstream requirements:
⌈
| Service Name | Ocu_SetPinAction | < |
|---|---|---|
| Syntax | void Ocu_SetPinAction ( |  |

  `Ocu_ChannelType` ChannelNumber,
  `Ocu_PinActionType` PinAction
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the OCU |
| ^ | PinAction | OCU_SET_LOW, OCU_SET_HIGH, OCU_TOGGLE, OCU_DISABLE |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to indicate the driver what shall be done automatically by hardware (if supported) upon compare match. | < |
| Available via | Ocu.h | < |

⌋

  Upstream requirements:
⌈
The function `Ocu_SetPinAction` shall set the action to be performed by hardware automatically, at the next compare match in the corresponding OCU channel.
⌋

  Upstream requirements:
⌈
The fuction OCU `Ocu_SetPinAction` shall be reentrant if it is called for different channels.
⌋

  Upstream requirements:
⌈
The function `Ocu_SetPinAction` shall be pre compile time configurable by the configuration parameter: OcuSetPinActionApi {`OCU_SET_PIN_ACTION_API`}.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 53. Ocu_GetCounter

Definition of API function `Ocu_GetCounter`
  Upstream requirements:
⌈
| Service Name | Ocu_GetCounter | < |
|---|---|---|
| Syntax | Ocu_ValueType Ocu_GetCounter ( |  |

  `Ocu_ChannelType` ChannelNumber
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the OCU channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Ocu_ValueType | Content of the counter in ticks |
| Description | Service to read the current value of the counter. | < |
| Available via | Ocu.h | < |

⌋

  Upstream requirements:
⌈
The function `Ocu_GetCounter` shall read and return the value of the counter of the channel indicated by ChannelNumber.
⌋

  Upstream requirements:
⌈
The function `Ocu_GetCounter` shall be re-entrant.
⌋

  Upstream requirements:
⌈
The function `Ocu_GetCounter` shall be pre compile time configurable by the configuration parameter: OcuGetCounterApi {`OCU_GET_COUNTER_API`}.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 54. Ocu_SetAbsoluteThreshold

Definition of API function `Ocu_SetAbsoluteThreshold`
  Upstream requirements:
⌈
| Service Name | Ocu_SetAbsoluteThreshold | < |
|---|---|---|
| Syntax | Ocu_ReturnType Ocu_SetAbsoluteThreshold ( |  |

  `Ocu_ChannelType` ChannelNumber,
  `Ocu_ValueType` ReferenceValue,
  `Ocu_ValueType` AbsoluteValue
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the OCU channel |
| ^ | ReferenceValue | Value given by the upper layer and used as a base to determine whether to call the notification before the function exits or not. |
| ^ | AbsoluteValue | Value to compare with the content of the counter. This value is in ticks. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Ocu_ReturnType | Tells the caller whether the compare match will occur (or has already occured) during the current Refence Interval, as a result of setting the new threshold value. |
| Description | Service to set the value of the channel threshold using an absolute input data. | < |
| Available via | Ocu.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 55. Ocu_SetRelativeThreshold

Definition of API function `Ocu_SetRelativeThreshold`
  Upstream requirements:
⌈
| Service Name | Ocu_SetRelativeThreshold | < |
|---|---|---|
| Syntax | Ocu_ReturnType Ocu_SetRelativeThreshold ( |  |

  `Ocu_ChannelType` ChannelNumber,
  `Ocu_ValueType` RelativeValue
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different channel numbers | < |
| Parameters (in) | ChannelNumber | Numeric identifier of the OCU channel |
| ^ | RelativeValue | Value to use for computing the new threshold. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Ocu_ReturnType | Tells the caller whether the compare match will occur (or has already occured) during the current Refence Interval, as a result of setting the new threshold value. |
| Description | Service to set the value of the channel threshold relative to the current value of the counter. | < |
| Available via | Ocu.h | < |

⌋

The behaviour of this API is as follows.

* On entry, the API reads the counter value (ReadValue). Then the new threshold value is computed and written according to the following formula:

NewThresholdValue = ReadValue + RelativeValue.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 58 章（内容从略，见纯文本全文）

56. Ocu_DisableNotification
57. Ocu_EnableNotification
58. Scheduled functions
59. Expected 接口
60. Mandatory 接口
61. Optional 接口
62. Configurable 接口
63. 时序图
64. 初始化
65. De-initialization
66. Using the Ocu 通知
67. Ocu_SetPinState
68. Ocu_SetPinAction
69. Setting a new compare threshold
70. 配置规范
71. How to read this chapter
72. 配置 and 配置 parameters
73. Containers
74. 规范模板 for 配置 parameters
75. Containers and 配置 parameters
76. Ocu
77. OcuGeneral
78. OcuConfigurationOfOptionalApis
79. OcuConfigSet
80. OcuChannel
81. OcuHWSpecificSettings
82. 发布信息
83. 附录
84. 不适用需求
85. Change history of AUTOSAR traceable items
86. Traceable item history of this document according to AUTOSAR Release R26-11
87. Added 规范 Items in R26-11
88. Changed 规范 Items in R26-11
89. Deleted 规范 Items in R26-11
90. Added Constraints in R26-11
91. Changed Constraints in R26-11
92. Deleted Constraints in R26-11
93. Traceable item history of this document according to AUTOSAR Release R25-11
94. Added 规范 Items in R25-11
95. Changed 规范 Items in R25-11
96. Deleted 规范 Items in R25-11
97. Added Constraints in R25-11
98. Changed Constraints in R25-11
99. Deleted Constraints in R25-11
100. Traceable item history of this document according to AUTOSAR Release R24-11
101. Added 规范 Items in R24-11
102. Changed 规范 Items in R24-11
103. Deleted 规范 Items in R24-11
104. Added Constraints in R24-11
105. Changed Constraints in R24-11
106. Deleted Constraints in R24-11
107. Traceable item history of this document according to AUTOSAR Release R23-11
108. Added 规范 Items in R23-11
109. Changed 规范 Items in R23-11
110. Deleted 规范 Items in R23-11
111. Added Constraints in R23-11
112. Changed Constraints in R23-11
113. Deleted Constraints in R23-11
