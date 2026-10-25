# Specification of MCU Driver (`MCUDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 031 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_MCUDriver_031\AUTOSAR_CP_SWS_MCUDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_MCUDriver_031\AUTOSAR_CP_SWS_MCUDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_MCUDriver_031\zzgen\CP_SWS_MCUDriver.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module MCU . The MCU driver provides services for basic microcontroller initialization, power down functionality, reset and microcontroller specific functions required by other MCAL software modules. The initialization services allow a flexible and application related MCU initialization in addition to the start-up code (see figure below). The start-up code is very MCU specific. The provided start-up code description in this document is for guidance and implies functionality which has to be taken into account before standardized MCU initialization is able to start.

The MCU driver accesses the microcontroller hardware directly and is located in the Microcontroller Abstraction Layer (MCAL).

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module MCU . The MCU driver provides services for basic microcontroller initialization, power down functionality, reset and microcontroller specific functions required by other MCAL software modules. The initialization services allow a flexible and application related MCU initialization in addition to the start-up code (see figure below). The start-up code is very MCU specific. The provided start-up code description in this document is for guidance and implies functionality which has to be taken into account before standardized MCU initialization is able to start.

The MCU driver accesses the microcontroller hardware directly and is located in the Microcontroller Abstraction Layer (MCAL).

### 2. MCU 驱动 Features：
*原文标题：MCU driver Features:*

* Initialization of MCU clock, PLL, clock prescalers and MCU clock distribution
* Initialization of RAM sections
* Activation of μC reduced power modes
* Activation of a μC reset
* Provides a service to get the reset reason from hardware

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the MCU Driver that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| μC | Microcontroller |
| MCU | Micro Controller Unit |
| SFR | Special Function Register (MCU register) |
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |

### 4. 相关文档
*原文标题：Related documentation*

### 5. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for MCU Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for MCU Driver.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

In general the activation and configuration of MCU reduced power mode is not mandatory within AUTOSAR standardization.

Enabling/disabling of the ECU or μC power supply is not the task of the MCU driver. This is to be handled by the upper layer.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 11. Start-up 代码
*原文标题：Start-up code*

Before the MCU driver can be initialized, a basic initialization of the MCU has to be executed. This MCU specific initialization is typically executed in a start-up code.

The start-up code of the MCU shall be executed after power up and any kind of microcontroller reset. It shall perform very basic and microcontroller specific start-up initialization and shall be kept short because the MCU clock and PLL are not yet initialized. The start-up code shall cover MCU specific initialization which is not part of other MCU services or other MCAL drivers. The following description summarizes the basic functionality to be included in the start-up code. It is listed for guidance because some functionality might not be supported in all MCU's.

The start-up code shall initialize the base addresses for interrupt and trap vector tables. These base addresses are provided as configuration parameters or linker/locator setting.

The start-up code shall initialize the interrupt stack pointer if an interrupt stack is supported by the MCU. The interrupt stack pointer base address and the stack size are provided as configuration parameter or linker/locator setting.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 文件结构
*原文标题：File structure*

### 13. 代码文件结构
*原文标题：Code file structure*

Note: The code file structure shall not be defined within this specification.

### 14. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| Error values naming convention |  |  |
| Classification of development errors |  |  |
| API handling in uninitialized state |  |  |
| Classification of production errors |  |  |

### 15. 功能规范
*原文标题：Functional specification*

### 16. 通用行为
*原文标题：General Behavior*

### 17. Background and Rationale

The MCU driver provides MCU services for Clock and RAM initialization. In the MCU configuration set, the MCU specific settings for the Clock (i.e. PLL setting) and RAM (i.e. section base address and size) shall be configured.

### 18. 需求
*原文标题：Requirements*

### 19. Reset

⌈
The MCU module shall provide a service to provide software triggering of a hardware reset.
⌋

Note: Only an authorized user shall be able to call this reset service function.

⌈
The MCU module shall provide services to get the reset reason of the last reset if the hardware supports such a feature.
⌋

Note: In an ECU, there are several sources which can cause a reset. Depending on the reset reason, several application scenarios might be necessary after re-initialization of the MCU.

### 20. Clock

⌈
Mcu shall provide a service to enable and set the MCU clock (i.e. Cpu clock, Peripheral Clock, Prescalers, Multipliers have to be configured in the MCU).
⌋

Note: All the available peripheral clocks have to be made available to the other BSW modules via the McuClockReferencePoint container.

### 21. MCU 模式服务
*原文标题：MCU Mode service*

⌈
The MCU module shall provide a service to activate MCU reduced power modes.
⌋

The service, which activates the reduced power mode, shall allow access to power modes available in the μC hardware.

⌈
The number of modes and the configuration is MCU dependent and shall be configured in the configuration set of the MCU module.
⌋

Note: The activation of MCU reduced power modes might influence the PLL, the internal oscillator, the CPU clock, μC peripheral clock and the power supply for core and peripherals.

In typical operation, MCU reduced power mode will be entered and exited frequently during ECU runtime. In this case, wake-up is performed when it is activated in one of the MCAL modules.

The upper layer is responsible for activating MCU normal operation (condition before execution of MCU power mode) or to switch off μC power supply.

For some MCU mode configuration, the MCU is able to wake up only via hardware reset.

### 22. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

⌈
The MCU driver follows the standardized AUTOSAR concept to report production errors. The provided callback routines are specified in the Diagnostic Event Manager (DEM) specification (see ).
⌋

⌈
Production Errors shall not be used as the return value of the called function.
⌋

### 23. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Mcu
  Upstream requirements: ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called with wrong parameter | MCU_E_PARAM_CONFIG | 0x0A |
| API service called with wrong parameter | MCU_E_PARAM_CLOCK | 0x0B |
| API service called with wrong parameter | MCU_E_PARAM_MODE | 0x0C |
| API service called with wrong parameter | MCU_E_PARAM_RAMSECTION | 0x0D |
| API service called with wrong parameter | MCU_E_PLL_NOT_LOCKED | 0x0E |
| API service called with wrong parameter | MCU_E_UNINIT | 0x0F |
| API service called with wrong parameter | MCU_E_PARAM_POINTER | 0x10 |
| API service called with wrong parameter | MCU_E_INIT_FAILED | 0x11 |

⌋

### 24. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 25. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 26. Extended Production 错误
*原文标题：Extended Production Errors*

| Type or error | Related error code | Value |
|---|---|---|
| Clock source failure | MCU_E_CLOCK_FAILURE | Assigned by DEM |

⌈
If clock failure notification is enabled in the configuration set and a clock source failure error occurs, the error code `MCU_E_CLOCK_FAILURE` shall be reported (see also ).
⌋

If the clock failure is detected with other HW mechanisms e.g. the generation of a trap, this notification shall be disabled and the failure reporting shall be done outside the MCU driver.

### 27. MCU_E_CLOCK_FAILURE

Clock source failure.
  Upstream requirements:
⌈
| Diagnostic Event (Error Name) | MCU_E_CLOCK_FAILURE |
|---|---|
| Description | If clock failure notification is enabled in the configuration set and a clock source failure error occurs, the error code MCU_E_CLOCK_FAILURE shall be reported. |
| Failed condition | Fail criteria for MCU_E_CLOCK_FAILURE: a clock source failure occurs. |
| Passed condition | Pass criteria for MCU_E_CLOCK_FAILURE: no clock source failure occurs. |

⌋

⌈
Fail criteria for `MCU_E_CLOCK_FAILURE`: a clock source failure occurs
⌋

⌈
Pass criteria for `MCU_E_CLOCK_FAILURE`: no clock source failure occurs
⌋

### 28. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 29. API 规范
*原文标题：API specification*

### 30. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Mcu
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 31. 类型定义
*原文标题：Type definitions*

### 32. Mcu_ConfigType

Definition of datatype `Mcu_ConfigType`
⌈
| Name | Mcu_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Hardware dependent structure | < |
| ^ | Type | - |
| ^ | Comment | A structure to hold the MCU driver configuration. |
| Description | A pointer to such a structure is provided to the MCU initialization routines for configuration. | < |
| Available via | Mcu.h | < |

⌋

### 33. Mcu_PllStatusType

Definition of datatype `Mcu_PllStatusType`
⌈
| Name | Mcu_PllStatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MCU_PLL_LOCKED | 0x00 | PLL is locked |
| ^ | MCU_PLL_UNLOCKED | 0x01 | PLL is unlocked |
| ^ | MCU_PLL_STATUS_UNDEFINED | 0x02 | PLL Status is unknown |
| Description | This is a status value returned by the function Mcu_GetPllStatus of the MCU module. | < | < |
| Available via | Mcu.h | < | < |

⌋

⌈
The type `Mcu_PllStatusType` is the type of the return value of the function `Mcu_GetPllStatus`.
⌋

⌈
The type of `Mcu_PllStatusType` is an enumeration with the following values: `MCU_PLL_LOCKED`, `MCU_PLL_UNLOCKED`, `MCU_PLL_STATUS_UNDEFINED`.
⌋

### 34. Mcu_ClockType

Definition of datatype `Mcu_ClockType`
⌈
| Name | Mcu_ClockType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 0..<number of clock settings>- 1 | - | The range is dependent on the number of different clock settings provided in the configuration structure. The type shall be chosen depending on MCU platform for best performance. |
| Description | Specifies the identification (ID) for a clock setting, which is configured in the configuration structure | < | < |
| Available via | Mcu.h | < | < |

⌋

⌈
The type `Mcu_ClockType` defines the identification (ID) for clock setting configured via the configuration structure.
⌋

⌈
The type shall be uint8, uint16 or uint32, depending on μC platform.
⌋

### 35. Mcu_ResetType

Definition of datatype `Mcu_ResetType`
⌈
| Name | Mcu_ResetType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MCU_POWER_ON_RESET | 0x00 | Power On Reset (default) |
| ^ | MCU_WATCHDOG_RESET | 0x01 | Internal Watchdog Timer Reset |
| ^ | MCU_SW_RESET | 0x02 | Software Reset |
| ^ | MCU_RESET_UNDEFINED | 0x03 | Reset is undefined |
| Description | This is the type of the reset enumerator containing the subset of reset types. It is not required that all reset types are supported by hardware. | < | < |
| Available via | Mcu.h | < | < |

⌋

⌈
The type `Mcu_ResetType`, represents the different reset that a specified MCU can have.
⌋

⌈
The MCU module shall provide at least the values `MCU_POWER_ON_RESET` and `MCU_RESET_UNDEFINED` for the enumeration `Mcu_ResetType`.
⌋

Note: Additional reset types of `Mcu_ResetType` may be added depending on MCU.

### 36. Mcu_RawResetType

Definition of datatype `Mcu_RawResetType`
⌈
| Name | Mcu_RawResetType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | MCU dependent register value | - | The type shall be chosen depending on MCU platform for best performance. |
| Description | This type specifies the reset reason in raw register format read from a reset status register. | < | < |
| Available via | Mcu.h | < | < |

⌋

⌈
The type `Mcu_RawResetType` specifies the reset reason in raw register format, read from a reset status register.
⌋

⌈
The type shall be uint8, uint16 or uint32 based on best performance.
⌋

### 37. Mcu_ModeType

Definition of datatype `Mcu_ModeType`
⌈
| Name | Mcu_ModeType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 0..<number of MCU modes>-1 | - | The range is dependent on the number of MCU modes provided in the configuration structure. The type shall be chosen depending on MCU platform for best performance. |
| Description | This type specifies the identification (ID) for a MCU mode, which is configured in the configuration structure. | < | < |
| Available via | Mcu.h | < | < |

⌋

⌈
The `Mcu_ModeType` specifies the identification (ID) for a MCU mode, configured via configuration structure.
⌋

⌈
The type shall be uint8, uint16 or uint32.
⌋

### 38. Mcu_RamSectionType

Definition of datatype `Mcu_RamSectionType`
⌈
| Name | Mcu_RamSectionType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 0..< number of RAM sections>-1 | - | The range is dependent on the number of RAM sections provided in the configuration structure. The type shall be chosen depending on MCU platform for best performance. |
| Description | This type specifies the identification (ID) for a RAM section, which is configured in the configuration structure. | < | < |
| Available via | Mcu.h | < | < |

⌋

⌈
The `Mcu_RamSectionType` specifies the identification (ID) for a RAM section, configured via the configuration structure.
⌋

⌈
The type shall be uint8, uint16 or uint32, based on best performance.
⌋

### 39. Mcu_RamStateType

Definition of datatype `Mcu_RamStateType`
⌈
| Name | Mcu_RamStateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MCU_RAMSTATE_INVALID | 0x00 | Ram content is not valid or unknown (default). |
| ^ | MCU_RAMSTATE_VALID | 0x01 | Ram content is valid: |
| Description | This is the Ram State data type returned by the function Mcu_GetRamState of the Mcu module. It is not required that all RAM state types are supported by the hardware. | < | < |
| Available via | Mcu.h | < | < |

⌋

### 40. 功能定义
*原文标题：Function definitions*

This is a list of functions provided for upper layer modules.

### 41. Mcu_Init

Definition of API function `Mcu_Init`
⌈
| Service Name | Mcu_Init | < |
|---|---|---|
| Syntax | void Mcu_Init ( |  |

  const `Mcu_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to MCU driver configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This service initializes the MCU driver. | < |
| Available via | Mcu.h | < |

⌋

  Upstream requirements: ,
⌈
The function `Mcu_Init` shall initialize the MCU module, i.e. make the configuration settings for power down, clock and RAM sections visible within the MCU module.
⌋

Note: After the execution of the function `Mcu_Init`, the configuration data are accessible and can be used by the MCU module functions as, e.g., `Mcu_InitRamSection`.

The MCU module's implementer shall apply the following rules regarding initialization of controller registers within the function `Mcu_Init`:

#
  ⌈
  If the hardware allows for only one usage of the register, the driver module implementing that functionality is responsible for initializing the register.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Mcu_InitRamSection

Definition of API function `Mcu_InitRamSection`
⌈
| Service Name | Mcu_InitRamSection | < |
|---|---|---|
| Syntax | Std_ReturnType Mcu_InitRamSection ( |  |

  `Mcu_RamSectionType` RamSection
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | RamSection | Selects RAM memory section provided in configuration set |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: command has been accepted E_NOT_OK: command has not been accepted e.g. due to parameter error |
| Description | This service initializes the RAM section wise. | < |
| Available via | Mcu.h | < |

⌋

⌈
The function `Mcu_InitRamSection` shall fill the memory from address McuRamSectionBaseAddress up to address McuRamSectionBaseAddress + McuRamSectionSize-1 with the byte-value contained in McuRamDefaultValue and by writing at once a number of bytes defined by McuRamSectionWriteSize, where McuRamSectionBaseAddress, McuRamSectionSize, McuRamDefaultValue and McuRamSectionWriteSize are the values of the configuration parameters for each RamSection.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Mcu_InitClock

Definition of API function `Mcu_InitClock`
⌈
| Service Name | Mcu_InitClock | < |
|---|---|---|
| Syntax | Std_ReturnType Mcu_InitClock ( |  |

  `Mcu_ClockType` ClockSetting
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ClockSetting | Clock setting |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Command has been accepted E_NOT_OK: Command has not been accepted |
| Description | This service initializes the PLL and other MCU specific clock options. | < |
| Available via | Mcu.h | < |

⌋

⌈
The function `Mcu_InitClock` shall initialize the PLL and other MCU specific clock options. The clock configuration parameters are provided via the configuration structure.
⌋

⌈
The function `Mcu_InitClock` shall start the PLL lock procedure (if PLL shall be initialized) and shall return without waiting until the PLL is locked.
⌋

⌈
The MCU module's environment shall only call the function `Mcu_InitClock` after the MCU module has been initialized using the function `Mcu_Init`.
⌋

⌈
The function `Mcu_InitClock` shall be disabled if the parameter McuInitClock is set to FALSE.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Mcu_DistributePllClock

Definition of API function `Mcu_DistributePllClock`
⌈
| Service Name | Mcu_DistributePllClock | < |
|---|---|---|
| Syntax | Std_ReturnType Mcu_DistributePllClock ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Command has been accepted E_NOT_OK: Command has not been accepted |
| Description | This service activates the PLL clock to the MCU clock distribution. | < |
| Available via | Mcu.h | < |

⌋

⌈
The function `Mcu_DistributePllClock` shall activate the PLL clock to the MCU clock distribution.
⌋

⌈
The function `Mcu_DistributePllClock` shall remove the current clock source (for example internal oscillator clock) from MCU clock distribution.
⌋

The MCU module's environment shall only call the function `Mcu_DistributePllClock` after the status of the PLL has been detected as locked by the function `Mcu_GetPllStatus`.

⌈
The function `Mcu_DistributePllClock` shall return without affecting the MCU hardware if the PLL clock has been automatically activated by the MCU hardware.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Mcu_GetPllStatus

Definition of API function `Mcu_GetPllStatus`
⌈
| Service Name | Mcu_GetPllStatus | < |
|---|---|---|
| Syntax | Mcu_PllStatusType Mcu_GetPllStatus ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Mcu_PllStatusType | PLL Status |
| Description | This service provides the lock status of the PLL. | < |
| Available via | Mcu.h | < |

⌋

⌈
The function `Mcu_GetPllStatus` shall return the lock status of the PLL.
⌋

⌈
The function `Mcu_GetPllStatus` shall return `MCU_PLL_STATUS_UNDEFINED` if this function is called prior to calling of the function `Mcu_Init`.
⌋

⌈
The function `Mcu_GetPllStatus` shall also return `MCU_PLL_STATUS_UNDEFINED` if the pre-compile parameter McuNoPll is set to TRUE (see also ).
⌋

### 46. Mcu_GetResetReason

Definition of API function `Mcu_GetResetReason`
⌈
| Service Name | Mcu_GetResetReason | < |
|---|---|---|
| Syntax | Mcu_ResetType Mcu_GetResetReason ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Mcu_ResetType | - |
| Description | The service reads the reset type from the hardware, if supported. | < |
| Available via | Mcu.h | < |

⌋

 :
⌈
The function `Mcu_GetResetReason` shall read the reset reason from the hardware and return this reason if supported by the hardware. If the hardware does not support the hardware detection of the reset reason, the return value from the function `Mcu_GetResetReason` shall always be `MCU_POWER_ON_RESET`.
⌋

⌈
The function `Mcu_GetResetReason` shall return `MCU_RESET_UNDEFINED` if this function is called prior to calling of the function `Mcu_Init`, and if supported by the hardware.
⌋

The User should ensure that the reset reason is cleared once it has been read out to avoid multiple reset reasons.

Note: In case of multiple calls to this function the return value should always be the same.

### 47. Mcu_GetResetRawValue

Definition of API function `Mcu_GetResetRawValue`
⌈
| Service Name | Mcu_GetResetRawValue | < |
|---|---|---|
| Syntax | Mcu_RawResetType Mcu_GetResetRawValue ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Mcu_RawResetType | Reset raw value |
| Description | The service reads the reset type from the hardware register, if supported. | < |
| Available via | Mcu.h | < |

⌋

⌈
The function `Mcu_GetResetRawValue` shall return an implementation specific value which does not correspond to a valid value of the reset status register and is not equal to 0 if this function is called prior to calling of the function `Mcu_Init`, and if supported by the hardware.
⌋

⌈
The function `Mcu_GetResetRawValue` shall read the reset raw value from the hardware register if the hardware supports this. If the hardware does not have a reset status register, the return value shall be 0x0.
⌋

The User should ensure that the reset reason is cleared once it has been read out to avoid multiple reset reasons.

Note: In case of multiple calls to this function the return value should always be the same.

### 48. Mcu_PerformReset

Definition of API function `Mcu_PerformReset`
⌈
| Service Name | Mcu_PerformReset | < |
|---|---|---|
| Syntax | void Mcu_PerformReset ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | The service performs a microcontroller reset. | < |
| Available via | Mcu.h | < |

⌋

⌈
The function `Mcu_PerformReset` shall perform a microcontroller reset by using the hardware feature of the microcontroller.
⌋

⌈
The function `Mcu_PerformReset` shall perform the reset type which is configured in the configuration set.
⌋

⌈
The MCU module's environment shall only call the function `Mcu_PerformReset` after the MCU module has been initialized by the function `Mcu_Init`.
⌋

⌈
The function `Mcu_PerformReset` is only available if the pre-compile parameter McuPerformResetApi is set to TRUE. If set to FALSE, the function `Mcu_PerformReset` is not applicable.).
⌋

### 49. Mcu_SetMode

Definition of API function `Mcu_SetMode`
⌈
| Service Name | Mcu_SetMode | < |
|---|---|---|
| Syntax | void Mcu_SetMode ( |  |

  `Mcu_ModeType` McuMode
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | McuMode | Set different MCU power modes configured in the configuration set |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This service activates the MCU power modes. | < |
| Available via | Mcu.h | < |

⌋

⌈
The function `Mcu_SetMode` shall set the MCU power mode. In case of CPU power down mode, the function `Mcu_SetMode` returns after it has performed a wake-up.
⌋

⌈
The MCU module's environment shall only call the function `Mcu_SetMode` after the MCU module has been initialized by the function `Mcu_Init`.
⌋

Note: The environment of the function `Mcu_SetMode` has to ensure that the ECU is ready for reduced power mode activation.

Note: The API `Mcu_SetMode` assumes that all interrupts are disabled prior the call of the API by the calling instance. The implementation has to take care that no wakeup interrupt event is lost.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 50. Mcu_GetVersionInfo

Definition of API function `Mcu_GetVersionInfo`
⌈
| Service Name | Mcu_GetVersionInfo | < |
|---|---|---|
| Syntax | void Mcu_GetVersionInfo ( |  |

  `Std_VersionInfoType`* versioninfo
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | versioninfo | Pointer to where to store the version information of this module. |
| Return value | None | < |
| Description | This service returns the version information of this module. | < |
| Available via | Mcu.h | < |

⌋

### 51. Mcu_GetRamState

Definition of API function `Mcu_GetRamState`
  Upstream requirements:
⌈
| Service Name | Mcu_GetRamState | < |
|---|---|---|
| Syntax | Mcu_RamStateType Mcu_GetRamState ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x0a | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Mcu_RamStateType | Status of the Ram Content |
| Description | This service provides the actual status of the microcontroller Ram. (if supported) | < |
| Available via | Mcu.h | < |

⌋

Note: Some microcontrollers offer the functionality to check if the Ram Status is valid after a reset. The function `Mcu_GetRamState` can be used for this reason.

⌈
The MCU module's environment shall call this function only if the MCU module has been already initialized using the function `Mcu_Init`.
⌋

⌈
The function `Mcu_GetRamState` shall be available to the user if the pre-compile parameter McuGetRamStateApi is set to TRUE. Instead, if the former parameter is set to FALSE, this function shall be disabled (e.g. the hardware does not support this functionality).
⌋

### 其余 32 章（内容从略，见纯文本全文）

52. Callback 通知
53. Scheduled functions
54. Expected 接口
55. Mandatory 接口
56. Optional 接口
57. 服务接口
58. API parameter checking
59. 时序图
60. 示例 Sequence for Mcu 初始化服务
61. Mcu_GetResetReason
62. Mcu_GetResetRawValue
63. Mcu_PerformReset
64. 配置规范
65. How to read this chapter
66. Containers and 配置 parameters
67. Mcu
68. McuGeneralConfiguration
69. McuClockSettingConfig
70. McuModuleConfiguration
71. McuDemEventParameterRefs
72. McuModeSettingConf
73. McuRamSectorSettingConf
74. McuClockReferencePoint
75. McuPublishedInformation
76. McuResetReasonConf
77. 发布信息
78. 附录
79. Change history of AUTOSAR traceable items
80. Traceable item history of this document according to AUTOSAR Release R25-11
81. Added 规范 Items in R25-11
82. Changed 规范 Items in R25-11
83. Deleted 规范 Items in R25-11
