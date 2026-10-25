# Specification of Watchdog Driver (`WatchdogDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 039 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_WatchdogDriver_039\AUTOSAR_CP_SWS_WatchdogDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_WatchdogDriver_039\AUTOSAR_CP_SWS_WatchdogDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_WatchdogDriver_039\zzgen\CP_SWS_WatchdogDriver.complete.txt`

## 文档简介

This document specifies the functionality, API and the configuration of the AUTOSAR Basic Software module watchdog driver (Wdg).

This module provides services for initialization, changing the operation mode and setting the trigger condition (timeout).

The functional requirements and the functional scope are the same for both internal and external watchdog drivers. Hence the API is semantically identical.

An internal watchdog driver belongs to the Microcontroller Abstraction Layer (MCAL), whereas an external watchdog driver belongs to the Onboard Device Abstraction Layer. Therefore, an external watchdog driver needs other drivers (in MCAL) in order to access the microcontroller hardware.

## 模块依赖

A Wdg module for an internal (on-chip) watchdog accesses the microcontroller hardware directly and is located in the Microcontroller Abstraction layer.

A Wdg module for an external watchdog uses other modules (e.g. SPI) to access the external watchdog device. Such a Wdg module is located in the Onboard Device Abstraction Layer (see ).

⌈
The Wdg module for an external watchdog driver shall have source code that is independent of the microcontroller platform.
⌋

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies the functionality, API and the configuration of the AUTOSAR Basic Software module watchdog driver (Wdg).

This module provides services for initialization, changing the operation mode and setting the trigger condition (timeout).

The functional requirements and the functional scope are the same for both internal and external watchdog drivers. Hence the API is semantically identical.

An internal watchdog driver belongs to the Microcontroller Abstraction Layer (MCAL), whereas an external watchdog driver belongs to the Onboard Device Abstraction Layer. Therefore, an external watchdog driver needs other drivers (in MCAL) in order to access the microcontroller hardware.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Watchdog Driver module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| WDG | Watchdog (module specific prefix) |

Definitions needed for understanding of the concepts

| Definition: | Description: |
|---|---|
| Off-Mode | The watchdog hardware is disabled / shut down. |

This might be necessary in order to shut down the complete ECU and not get cyclic resets from a still running external watchdog.

This mode might not be allowed for safety critical systems. In this case, the Wdg module has to be configured to prevent switching to this mode.
| Slow-Mode | Triggering the watchdog hardware can be done with a long timeout period. |
|---|---|

This mode can e.g. be used during system startup / initialization phase. E.g. the watchdog hardware is configured for toggle mode (no constraints on the point in time at which the triggering is done) and a timeout period of 20 milliseconds.
| Fast-Mode | Triggering the watchdog hardware has to be done with a short timeout period. |
|---|---|

This mode can e.g. be used during normal operations of the ECU. E.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Watchdog Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Watchdog Driver.

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

A Wdg module for an internal (on-chip) watchdog accesses the microcontroller hardware directly and is located in the Microcontroller Abstraction layer.

A Wdg module for an external watchdog uses other modules (e.g. SPI) to access the external watchdog device. Such a Wdg module is located in the Onboard Device Abstraction Layer (see ).

⌈
The Wdg module for an external watchdog driver shall have source code that is independent of the microcontroller platform.
⌋

### 10. 文件结构
*原文标题：File structure*

### 11. 代码文件结构
*原文标题：Code file structure*

Upstream requirements: , ,
⌈
The code file structure shall not be defined within this specification completely. At this point it shall be pointed out that the code-file structure shall include the following files (as far as required; for name expansion see `SWS_Wdg_00169`):

* `Wdg_Lcfg`.c - for link time configurable parameters
* `Wdg_PBcfg`.c - for post build time configurable parameters

In case an internal watchdog servicing is implemented as interrupt routine, code-file structure shall include `Wdg_Irq`.c for holding the interrupt frames.

These files shall contain all link time and post-build time configurable parameters.
⌋

Note: These names are required by `SRS_BSW_00314` and `SRS_BSW_00346`

  Upstream requirements:
⌈
If more than one watchdog driver instance exists on an ECU (namely an external and an internal one) the implementer shall provide unique code file names by expanding the names according to `SRS_BSW_00347`.
⌋

### 12. 头文件结构
*原文标题：Header file structure*

Upstream requirements:
⌈
If more than one watchdog driver instance exists on an ECU (namely an external and an internal one) the implementer shall provide unique header file names by expanding the names according to `SRS_BSW_00347`.
⌋

Note:

In case of multiple watchdog driver instances, the Event Id symbols for production errors defined in this specification (see `SWS_Wdg_00010` and `ECUC_Wdg_00148`) might be expanded in the configuration of the DEM in order to make them unique.

### 13. Version check

For details refer to .

### 14. 系统 clock
*原文标题：System clock*

If the hardware of the internal watchdog depends on the system clock, changes to the system clock (e.g. PLL on PLL off) may also affect the clock settings of the watchdog hardware.

### 15. Onboard communication handlers

A Wdg module for an external watchdog device depends on the API and capabilities of the used onboard communication handlers or drivers (e.g. SPI handler).

### 16. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| All internal driver modules shall separate the interrupt frame definition from the service routine |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| Status values naming convention |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| The unit of time for specification and configuration of Basic SW modules shall be preferably in physical time unit |  |  |
| Al |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 功能规范
*原文标题：Functional specification*

### 18. 通用设计 rules
*原文标题：General design rules*

Upstream requirements: ,
⌈
The Wdg module shall statically check the configuration parameters (at the latest during compile time) for correctness.
⌋

  Upstream requirements: ,
⌈
The Wdg module shall not implement an interface for de-initialization/shutdown. If the watchdog supports a de-initialization/shutdown and the environment allows the usage of this feature, the de-initialization/shutdown shall be achieved by calling the `Wdg_SetMode` routine with OFF mode parameter.
⌋

Rationale: Some watchdogs do not support the de-initialization/shutdown functionality and in some environments this feature must not be used (e.g. in safety critical systems).

  Upstream requirements: ,
⌈
If interrupts have to be disabled in order to ensure data consistency or correct functionality of this module (e.g. while switching the watchdog mode or during the watchdog trigger routine), this shall be done by using the corresponding BSW Scheduler functionality if possible (this means definition of an exclusive area). The internal watchdog driver (because it belongs to MCAL) may also directly disable interrupts - see `SRS_BSW_00429`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. External watchdog 驱动
*原文标题：External watchdog driver*

Upstream requirements:
⌈
To access the external watchdog hardware, the corresponding Wdg module instance shall use the functionality and API of the corresponding handler or driver, e.g. the SPI handler or DIO driver.
⌋

Note:

The routine servicing an external watchdog may be implemented by usage of an own internal hardware timer to be independent from other peripherals or by using a GPT driver callback.

Hint: An external watchdog driver is part of the Onboard Device Abstraction Layer (see ), which excludes direct hardware access.

This architectural discrepancy will be resolved in an upcoming release.

  Upstream requirements:
⌈
A Wdg module for an external watchdog shall satisfy the same functional requirements and offer the same functional scope as a Wdg module for an internal watchdog. Hence their respective APIs are semantically identical.
⌋

  Upstream requirements:
⌈
The Wdg module shall add all parameters required for accessing the external watchdog hardware, e.g. the used SPI channel or DIO port, to the module's published parameters and to the module's configuration parameters.
⌋

### 20. Internal watchdog 驱动
*原文标题：Internal watchdog driver*

⌈
To access the internal watchdog hardware, the corresponding Wdg module instance shall access the hardware for watchdog servicing directly.
⌋

Hint: An internal watchdog driver is part of the Microcontroller Abstraction Layer (see ), which allows direct hardware access.

Note:

The routine servicing an internal watchdog may be implemented by usage of an internal hardware timer to be independent from other peripherals or by using a GPT driver callback."

If the watchdog servicing routine is implemented as an interrupt routine (i.e. as a cat1 or cat2 interrupt routine and not via the GPT), it shall be described in the Basic Software Module Description and the implementation shall follow the requirements for interrupt handling as given by  and  (`SRS_BSW_00427`, `SRS_BSW_00325`, `SRS_BSW_00439`, `SRS_BSW_00314`, `SRS_BSW_00429`, `SRS_SPAL_12129`).

### 21. Triggering concept to 支持 windowed watchdogs
*原文标题：Triggering concept to support windowed watchdogs*

In former versions of this specification, the watchdog servicing routine was called from an upper layer of the software which made it difficult to guarantee timing constraints namely for windowed watchdog conditions. This concept has been changed leading to the requirements explained in this chapter.

The basic idea of this concept is to decouple the timing for servicing the watchdog hardware from the logical control.

The time base for triggering the watchdog may be provided by means of hardware. This ensures minimum timing jitter. Servicing of the watchdog hardware directly from a timer ISR ensures minimum latencies."

These two conditions - minimum jitter and latencies - ensure that the time window of a windowed watchdog can be met.

The Wdg Driver expects, that the logical control of the watchdog (whether the watchdog shall be triggered or not) shall be the responsibility of the environment, e.g. the Wdg Manager, so that the basic concepts of the Wdg Manager (alive supervision) shall remain unchanged.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 23. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Wdg
  Upstream requirements: , , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service used in wrong context (e.g. module not initialized). | WDG_E_DRIVER_STATE | 0x10 |
| API service called with wrong / inconsistent parameter(s) | WDG_E_PARAM_MODE | 0x11 |
| API service called with wrong / inconsistent parameter(s) | WDG_E_PARAM_CONFIG | 0x12 |
| The passed timeout value is higher than the maximum timeout value | WDG_E_PARAM_TIMEOUT | 0x13 |
| API is called with wrong pointer value (e.g. NULL pointer) | WDG_E_PARAM_POINTER | 0x14 |
| Invalid configuration set selection | WDG_E_INIT_FAILED | 0x15 |

⌋

### 24. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 25. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 26. Extended Production 错误
*原文标题：Extended Production Errors*

⌈
| Error Name: | WDG_E_MODE_FAILED | < |
|---|---|---|
| Short Description: | Setting watchdog mode failed | < |
| Long Description: | Setting a watchdog mode failed (during initialization or mode switch). | < |
| Detection Criteria: | Fail | Setting watchdog mode failed (see SWS_Wdg_00180) |
| ^ | Pass | Setting watchdog mode not failed (see SWS_Wdg_00181) |
| Secondary Parameters: | N/A | < |
| Time Required: | N/A | < |
| Monitor Frequency | Depends on upper layer | < |

⌋

  Upstream requirements: , , ,
⌈
The extended production error `WDG_E_MODE_FAILED` shall be reported with FAILED when setting of the watchdog mode failed.
⌋

  Upstream requirements: , , ,
⌈
The extended production error `WDG_E_MODE_FAILED` shall be reported with PASSED when setting of the watchdog mode not failed.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. API 规范
*原文标题：API specification*

Upstream requirements:
⌈
If more than one watchdog driver instance exits on an ECU (namely an external and an internal one) the API names and instance specific type names specified in this chapter shall be made unique by expansion according to `SRS_BSW_00347`.
⌋

### 28. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following modules are listed:

 Definition of imported datatypes of module Wdg
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Std | Std_Types.h | Std_ReturnType |
| WdgIf | WdgIf.h | WdgIf_ModeType |

⌋

### 29. 类型定义
*原文标题：Type definitions*

### 30. Wdg_ConfigType

Definition of datatype `Wdg_ConfigType`
  Upstream requirements:
⌈
| Name | Wdg_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Hardware dependent structure | < |
| ^ | Type | - |
| ^ | Comment | Structure to hold the watchdog driver configuration set. |
| Description | Used for pointers to structures holding configuration data provided to the Wdg module initialization routine for configuration of the module and watchdog hardware. | < |
| Available via | Wdg.h | < |

⌋

### 31. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 32. Wdg_Init

Definition of API function `Wdg_Init`
  Upstream requirements: ,
⌈
| Service Name | Wdg_Init | < |
|---|---|---|
| Syntax | void Wdg_Init ( |  |

  const `Wdg_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the module. | < |
| Available via | Wdg.h | < |

⌋

  Upstream requirements: , ,
⌈
The `Wdg_Init` function shall initialize the Wdg module and the watchdog hardware, i.e. it shall set the default watchdog mode and timeout period as provided in the configuration set.
⌋

Note:

Via post-build configuration, the user can choose the configuration set to be used with the `Wdg_Init` function from a limited number of statically configured sets (see also `SRS_BSW_00314`).

  Upstream requirements: , , ,
⌈
The `Wdg_Init` function shall initialize all global variables of the Wdg module and set the default watchdog mode and initial timeout period
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Wdg_SetMode

Definition of API function `Wdg_SetMode`
⌈
| Service Name | Wdg_SetMode | < |
|---|---|---|
| Syntax | Std_ReturnType Wdg_SetMode ( |  |

  `WdgIf_ModeType` Mode
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | Mode | One of the following statically configured modes: 1. WDGIF_OFF_MODE 2. WDGIF_SLOW_MODE 3. WDGIF_FAST_MODE |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Service executed without errors. E_NOT_OK: Service executed with errors. |
| Description | Switches the watchdog into the mode Mode. | < |
| Available via | Wdg.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Wdg_SetMode` shall switch the watchdog driver from the current watchdog mode into the mode given by the argument Mode. This means: By choosing one of a limited number of statically configured settings (e.g. toggle or window watchdog, different timeout periods) the Wdg module and the watchdog hardware are switched to one of the following three different modes:

* `WDGIF_OFF_MODE`
* `WDGIF_SLOW_MODE`
* `WDGIF_FAST_MODE`
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Wdg_SetTriggerCondition

Definition of API function `Wdg_SetTriggerCondition`
  Upstream requirements:
⌈
| Service Name | Wdg_SetTriggerCondition | < |
|---|---|---|
| Syntax | void Wdg_SetTriggerCondition ( |  |

  uint16 timeout
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | timeout | Timeout value (milliseconds) for setting the trigger counter. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Sets the timeout value for the trigger counter. | < |
| Available via | Wdg.h | < |

⌋

⌈
The function `Wdg_SetTriggerCondition` shall reset the watchdog timeout counter according to the timeout value passed.
⌋

⌈
The timeout value passed shall be interpreted as 'milliseconds'. The conversion from milliseconds to the corresponding counter value shall be done internally by the Wdg module.
⌋

⌈
The current watchdog mode shall be taken into account when calculating the counter value from the timeout parameter.
⌋

⌈
This function shall also allow to set "0" as the time frame for triggering which will result in an (almost) immediate stop of the watchdog triggering and an (almost) instantaneous watchdog reset of the ECU.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Callback 通知
*原文标题：Callback notifications*

The Wdg module has no callback notifications.

### 36. Scheduled functions

This chapter lists all functions provided by the Wdg module and called directly by the Basic Software Module Scheduler.

The Wdg module has no scheduled functions.

### 37. Expected 接口
*原文标题：Expected interfaces*

This chapter lists all functions that the Wdg module requires from other modules.

### 38. Mandatory 接口
*原文标题：Mandatory interfaces*

This module does not require any mandatory interfaces.

### 39. Optional 接口
*原文标题：Optional interfaces*

This chapter lists all interfaces which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module Wdg
⌈
| API Function | Header File | Description |
|---|---|---|
| Dem_SetEventStatus | Dem.h | Called by SW-Cs or BSW modules to report monitor status information to the Dem. BSW modules calling Dem_SetEventStatus can safely ignore the return value. This API will be available only if ({Dem/DemConfigSet/DemEventParameter/DemEventReportingType} == STANDARD_REPORTING) |
| Det_ReportError | Det.h | Service to report development errors. |

⌋

In addition to the functions listed above, further functions might be used to access the external watchdog over Dio or Spi.

### 40. Configurable 接口
*原文标题：Configurable interfaces*

This module does not require any configurable interfaces.

### 41. 时序图
*原文标题：Sequence diagrams*

### 42. Watchdog 初始化, setting trigger condition and 模式.
*原文标题：Watchdog initialization, setting trigger condition and mode.*

The diagram shows the sequence to initialize the Wdg module, to set the trigger condition and to change the watchdog mode. Note that this is only an example. Especially, another "client" module than the Watchdog Manager (WdgM) could set the trigger condition.

### 43. 数据 exchange between watchdog 驱动 and hardware
*原文标题：Data exchange between watchdog driver and hardware*

The diagram shows the sequence to trigger the watchdog hardware when the WDG servicing routine is implemented as an interrupt routine. Note that this is only an example and the triggering routine is implementation specific. For an external watchdog, the watchdog hardware cannot be accessed directly, but only via drivers of the MCAL layer, like SPI or DIO.

### 44. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification Chapter  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave Chapter  in the specification to guarantee comprehension.

Chapter  specifies the structure (containers) and the parameters of the module Wdg.

Chapter  specifies published information of the module Wdg.

### 45. How to read this chapter

For details refer to .

### 46. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters describe Chapter  and Chapter .

### 47. Wdg

Definition of EcucParamConfContainerDef WdgSettingsConfig
⌈
| Container Name | WdgSettingsConfig | < | < |
|---|---|---|---|
| Parent Container | Wdg | < | < |
| Upstream mapping defined | - | < | < |
| Description | Configuration items for the different watchdog settings, including those for external watchdog hardware. |  |  |

| Note: All postbuild parameters are handled via this container. | < | < |  |
|---|---|---|---|
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| WdgDefaultMode | 1 |  |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| WdgExternalConfiguration | 0..1 | Configuration items for an external watchdog hardware |
| WdgSettingsFast | 1 | Hardware dependent settings for the watchdog driver's "fast" mode. |
| WdgSettingsOff | 1 | Hardware dependent settings for the watchdog driver's "off" mode. |
| WdgSettingsSlow | 1 | Hardware dependent settings for the watchdog driver's "slow" mode. |

⌋

 Definition of EcucEnumerationParamDef WdgDefaultMode
⌈
| Parameter Name | WdgDefaultMode | < | < |
|---|---|---|---|
| Parent Container | WdgSettingsConfig | < | < |
| Upstream mapping defined | - | < | < |
| Description | Default mode for watchdog driver initialization. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. WdgSettingsFast

Definition of EcucParamConfContainerDef WdgExternalConfiguration
⌈
| Container Name | WdgExternalConfiguration | < | < |
|---|---|---|---|
| Parent Container | WdgSettingsConfig | < | < |
| Upstream mapping defined | - | < | < |
| Description | Configuration items for an external watchdog hardware | < | < |
| Multiplicity | 0..1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| WdgExternalContainerRef | 0..1 |  |

No Included Containers
⌋

 Definition of EcucChoiceReferenceDef WdgExternalContainerRef
⌈
| Parameter Name | WdgExternalContainerRef | < | < |
|---|---|---|---|
| Parent Container | WdgExternalConfiguration | < | < |
| Upstream mapping defined | - | < | < |
| Description | Reference to either |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. 发布信息
*原文标题：Published Information*

For details refer to .

### 50. WdgPublishedInformation

Definition of EcucParamConfContainerDef WdgPublishedInformation
⌈
| Container Name | WdgPublishedInformation | < | < |
|---|---|---|---|
| Parent Container | Wdg | < | < |
| Upstream mapping defined | - | < | < |
| Description | Container holding all Wdg specific published information parameters | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| WdgTriggerMode | 1 |  |

No Included Containers
⌋

 Definition of EcucEnumerationParamDef WdgTriggerMode
⌈
| Parameter Name | WdgTriggerMode | < | < |
|---|---|---|---|
| Parent Container | WdgPublishedInformation | < | < |
| Upstream mapping defined | - | < | < |
| Description | Watchdog trigger mode (toggle/window/both) | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucEnumerationParamDef | < | < |
| Range | WDG_BOTH | - | < |
| ^ | WDG_TOGGLE | - | < |
| ^ | WDG_WINDOW | - | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Published Information | X | All Variants |
| Dependency |  | < | < |

⌋

WdgTriggerMode is only published for information purposes; this parameter is not used to configure the Watchdog Driver or the modules using the Watchdog Driver.

### 51. 附录
*原文标题：Appendix*

### 52. 不适用需求
*原文标题：Not applicable requirements*

Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
These requirements are not applicable to this specification.
⌋

### 53. Change history of AUTOSAR traceable items

### 54. Traceable item history of this document according to AUTOSAR Release R26-11

### 55. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 56. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

| Number | Heading |
|---|---|
| Definition of imported datatypes of module Wdg |  |

### 57. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

| Number | Heading |
|---|---|
| Definition of EcucBooleanParamDef WdgVersionInfoApi |  |
| Definition of API function Wdg_GetVersionInfo |  |

 |

### 58. Traceable item history of this document according to AUTOSAR Release R24-11

### 59. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 60. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|

 |
| Definition of API function Wdg_SetMode |
|---|
| Definition of datatype Wdg_ConfigType |

### 61. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 62. Traceable item history of this document according to AUTOSAR Release R24-11

### 63. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 64. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

| Number | Heading |
|---|---|
| Definition of EcucChoiceReferenceDef WdgExternalContainerRef |  |

### 65. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 66. Traceable item history of this document according to AUTOSAR Release R23-11

### 67. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

| Number | Heading |
|---|---|

 |

### 68. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

| Number | Heading |
|---|---|

 |
 |
 |
 |
 |
 |
 |
 |

### 69. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

| Number | Heading |
|---|---|

 |

### 70. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 71. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

| Number | Heading |
|---|---|
| Definition of imported datatypes of module Wdg |  |
| Definition of API function Wdg_SetMode |  |
| Definition of optional interfaces in module Wdg |  |
| Definition of datatype Wdg_ConfigType |  |

### 72. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none
