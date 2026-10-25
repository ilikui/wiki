# Specification of Port Driver (`PortDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 040 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_PortDriver_040\AUTOSAR_CP_SWS_PortDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_PortDriver_040\AUTOSAR_CP_SWS_PortDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_PortDriver_040\zzgen\CP_SWS_PortDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module PORT Driver.

This driver specification is applicable for on-chip ports and port pins.

This module shall provide the service for initializing the whole PORT structure of the microcontroller. Many ports and port pins can be assigned to various functionalities, e.g.

* General purpose I/O
* ADC
* SPI
* SCI
* PWM
* CAN
* LIN
* etc

For this reason, there shall be an overall configuration and initialization of this port structure. The configuration and mode of these port pins is microcontroller and ECU dependent.

Port initialisation data shall be written to each port as efficiently as possible.

This PORT driver module shall complete the overall configuration and initialisation of the port structure which is used in the DIO driver module. Therefore, the DIO driver works on pins and ports which are configured by the PORT driver.

The PORT driver shall be initialised prior to use of the DIO functions. Otherwise DIO functions will exhibit undefined behaviour.

The diagram below identifies the PORT driver functions, and the structure of the PORT driver and DIO driver within the MCAL software layer .

| Driver: | Name for a Port Pin: | Name for Subset of Adjacent pins on one port: | Name for a whole port: |
|---|---|---|---|
| DIO Driver | Channel | Channel Group | Port |
| PORT Driver | Port pin | - | Port |

## 模块依赖

Other driver modules may be dependent on the PORT driver depending on the available functionality of individual port pins on an MCU. For example, an MCU pin may be configurable as a DIO or SPI pin. Therefore, the DIO and/or the SPI driver modules may be dependent on the PORT module to configure the pin for the desired functionality.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module PORT Driver.

This driver specification is applicable for on-chip ports and port pins.

This module shall provide the service for initializing the whole PORT structure of the microcontroller. Many ports and port pins can be assigned to various functionalities, e.g.

* General purpose I/O
* ADC
* SPI
* SCI
* PWM
* CAN
* LIN
* etc

For this reason, there shall be an overall configuration and initialization of this port structure. The configuration and mode of these port pins is microcontroller and ECU dependent.

Port initialisation data shall be written to each port as efficiently as possible.

This PORT driver module shall complete the overall configuration and initialisation of the port structure which is used in the DIO driver module. Therefore, the DIO driver works on pins and ports which are configured by the PORT driver.

The PORT driver shall be initialised prior to use of the DIO functions. Otherwise DIO functions will exhibit undefined behaviour.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and abbreviations*

The following table summarizes the expressions used within the PORT driver.

| Abbreviation / Acronym: | Description: |
|---|---|
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |
| MCU | MicroController Unit |
| Port Pin | Represents a single configurable input or output pin on an MCU device. |
| Port | Represents a whole configurable port on an MCU device. |
| Physical Level (Input) | Two states are possible: LOW/HIGH |
| Physical Level (Output) | Two states are possible: LOW/HIGH |

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. Related standards and norms

# EC 7498-1 The Basic Model, IEC Norm, 1994

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Port Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Port Driver.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

Limitations for the PORT driver are specified as followed:

* It is the user's responsibility to ensure that the same Port/Port pin is not being accessed in parallel by different entities in the same system, e.g. by two tasks configuring the same port or two tasks configuring the same pin, or two tasks configuring different pins on the same port.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

Other driver modules may be dependent on the PORT driver depending on the available functionality of individual port pins on an MCU. For example, an MCU pin may be configurable as a DIO or SPI pin. Therefore, the DIO and/or the SPI driver modules may be dependent on the PORT module to configure the pin for the desired functionality.

### 11. 文件结构
*原文标题：File structure*

### 12. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 13. 需求 traceability
*原文标题：Requirements traceability*

This chapter refers to the input requirements specified in the SRS documents (Software Requirements Specifications , , ) that are applicable for this software module.

The table below lists the specification items of the PORT driver SWS document that satisfy the input requirements. Only functional requirements are referenced.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| Classification of development errors |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| List possible error notifications |  |  |
| BSW Modules shall support post-build configuration |  |  |
| API handling in uninitialized state |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| The Port driver shall allow the static configuration of the following options for each port |  |  |
| Ports and port pins that are n |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

### 15. 通用行为
*原文标题：General Behaviour*

### 16. Background & Rationale

Upstream requirements:
⌈
The PORT Driver module shall initialize the whole port structure of the microcontroller.
⌋

Note: Defining the order in which the ports and port pins are configured is the task of the configuration tool.

### 17. 需求
*原文标题：Requirements*

### 18. 配置 of Port Pin Properties
*原文标题：Configuration of Port Pin Properties*

Upstream requirements: ,
⌈
The PORT Driver module shall allow the configuration of different functionality for each port and port pin, e.g. ADC, SPI, DIO etc.
⌋

The configuration of the port (i.e. whole port or single port pin) is microcontroller dependent.

  Upstream requirements:
⌈
The PORT Driver module shall provide additional configurations for the MCU port/port pins:

* Pin direction (input/output)
* Pin level initial value
* Pin direction changeable during runtime (yes/no).
* Port mode changeable during runtime.
⌋

⌈
The PORT Driver module shall provide a number of optional configurations for the MCU ports and port pins (if supported by hardware):

* Slew rate control
* Activation of internal pull-ups
* Input Thresholds
* Pin driven mode (push-pull / open drain).
* Type of Readback support (pin level, output register value).
⌋

⌈
The PORT Driver module shall not provide the facility to configure pin level inversion. The default value shall be set (i.e. not inverted).
⌋

Note: The IO Hardware Abstraction layer shall carry out level inversion.

### 19. Switch port pin direction

⌈
For the port pins configured as changeable using the configuration tool, the PORT driver shall allow the user to change the direction of port pins during runtime.
⌋

  Upstream requirements:
⌈
If the MCU port control hardware provides an output latch for setting the output level on a port pin, switching the port pin direction shall not alter the level set in this output latch.
⌋

### 20. Refresh port direction

⌈
For refreshing of the port on the microcontroller, the PORT driver shall allow the user to refresh the direction of those port pins whose direction is set by configuration and cannot be changed dynamically.
⌋

### 21. 配置 of unused Ports and Port Pins
*原文标题：Configuration of unused Ports and Port Pins*

Upstream requirements:
⌈
The PORT Driver module shall configure all ports and port pins that are not used (neither as GPIO nor special purpose IO) to be set to a defined state by the PORT Driver module configuration.
⌋

### 22. 配置 of symbolic names
*原文标题：Configuration of symbolic names*

Upstream requirements:
⌈
The user of the PORT Driver module shall configure the symbolic names of the port pins of the MCU.
⌋

⌈
These symbolic names for the individual port pins (e.g. `PORT_A_PIN_0`) shall be defined in the configuration tool.
⌋

⌈
The PORT Driver module's implementer shall publish the symbolic names through the file Port.h
⌋

### 23. Atomicity of port access

⌈
The PORT Driver module shall provide atomic access to all ports and port pins.
⌋

Note:

An atomic access is a non interruptible access to Microcontroller registers by the use of either atomic instructions or the usage of an exclusive area (interrupt disabling for example) provided by the basic software scheduler module.

### 24. Version Check

### 25. Background and Rationale

The integration of incompatible files shall be avoided. Minimum implementation is the version check of the header file inside the .c file (version numbers of .c and .h files shall be identical).

### 26. 需求
*原文标题：Requirements*

The Port module shall avoid the integration of incompatible files by the following pre-processor checks:

For details refer to .

### 27. 错误分类
*原文标题：Error classification*

Definition of development errors in module Port
  Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Invalid Port Pin ID requested | PORT_E_PARAM_PIN | 0x0A |
| Port Pin not configured as changeable | PORT_E_DIRECTION_UNCHANGEABLE | 0x0B |
| API Port_Init service called with wrong parameter | PORT_E_INIT_FAILED | 0x0C |
| API Port_SetPinMode service called when mode is unchangeable. | PORT_E_PARAM_INVALID_MODE | 0x0D |
| API Port_SetPinMode service called when mode is unchangeable. | PORT_E_MODE_UNCHANGEABLE | 0x0E |
| API service called without module initialization | PORT_E_UNINIT | 0x0F |
| APIs called with a Null Pointer | PORT_E_PARAM_POINTER | 0x10 |
| Invalid Direction is requested | PORT_E_PARAM_INVALID_DIRECTION | 0x11 |

⌋

### 28. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 29. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 30. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 31. API Parameter checking

Upstream requirements:
⌈
If development error detection is enabled the Port Driver module shall check the function parameters in the order in which they are passed and skip further parameter checking if one check fails.

Example: For the function `Port_SetPinDirection`, the first parameter to be passed is the pin ID. This parameter shall identify the relevant port pin of the MCU's port. The second parameter passed corresponds to the direction to change on the port pin.
⌋

  Upstream requirements: ,
⌈
If development error detection is enabled and the Port Driver module has detected an error, the desired functionality shall be skipped and the requested service shall return without any action.
⌋

See table below for a list of the Det errors reported by each function.

| Function: | Error Condition: | Related error code: |
|---|---|---|
| Port_SetPinDirection | Incorrect Port Pin ID passed | PORT_E_PARAM_PIN |
| ^ | Port Pin not configured as changeable | PORT_E_DIRECTION_UNCHANGEABLE |
| ^ | Incorrect Direction is passed | PORT_E_PARAM_INVALID_DIRECTION |
| Port_Init | Port_Init service called with wrong parameter. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. API 规范
*原文标题：API specification*

### 33. Imported 类型
*原文标题：Imported types*

In this chapter, all types included from the following modules are listed:

 Definition of imported datatypes of module Port
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |

⌋

### 34. 类型定义
*原文标题：Type definitions*

### 35. Port_ConfigType

Definition of datatype `Port_ConfigType`
⌈
| Name | Port_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Hardware Dependent Structure | < |
| ^ | Type | - |
| ^ | Comment | The contents of the initialization data structure are specific to the microcontroller. |
| Description | Type of the external data structure containing the initialization data for this module. | < |
| Available via | Port.h | < |

⌋

### 36. Port_PinType

Definition of datatype `Port_PinType`
⌈
| Name | Port_PinType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 0 - <number of port pins:> | - | Shall cover all available port pins. The type should be chosen for the specific MCU platform (best performance). |
| Description | Data type for the symbolic name of a port pin. | < | < |
| Available via | Port.h | < | < |

⌋

⌈
The type `Port_PinType` shall be used for the symbolic name of a Port Pin.
⌋

⌈
The type `Port_PinType` shall be uint8, uint16 or uint32 based on the specific MCU platform.
⌋

Note: The user shall use the symbolic names provided by the configuration tool.

### 37. Port_PinDirectionType

Definition of datatype `Port_PinDirectionType`
⌈
| Name | Port_PinDirectionType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | PORT_PIN_IN | 0x00 | Sets port pin as input. |
| ^ | PORT_PIN_OUT | 0x01 | Sets port pin as output. |
| Description | Possible directions of a port pin. | < | < |
| Available via | Port.h | < | < |

⌋

### 38. Port_PinModeType

Definition of datatype `Port_PinModeType`
⌈
| Name | Port_PinModeType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | Implementation specific | - | As several port pin modes shall be configurable on one pin, the range shall be determined by the implementation. |
| Description | Different port pin modes. | < | < |
| Available via | Port.h | < | < |

⌋

⌈
A port pin shall be configurable with a number of port pin modes (type `Port_PinModeType`).
⌋

⌈
The type `Port_PinModeType` shall be used with the function call `Port_SetPinMode`.
⌋

⌈
The type `Port_PinModeType` shall be uint8, uint16 or uint32.
⌋

### 39. 功能定义
*原文标题：Function definitions*

This chapter contains all the APIs provided by the module.

This is a list of functions provided for upper layer modules.

### 40. Port_Init

Definition of API function `Port_Init`
  Upstream requirements:
⌈
| Service Name | Port_Init | < |
|---|---|---|
| Syntax | void Port_Init ( |  |

  const `Port_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the Port Driver module. | < |
| Available via | Port.h | < |

⌋

  Upstream requirements: , , , ,
⌈
The function `Port_Init` shall initialize ALL ports and port pins with the configuration set pointed to by the parameter ConfigPtr.
⌋

⌈
The Port Driver module's environment shall call the function `Port_Init` first in order to initialize the port for use.
⌋

⌈
If `Port_Init` function is not called first, then no operation can occur on the MCU ports and port pins.
⌋

  Upstream requirements: , ,
⌈
The function `Port_Init` shall initialize all configured resources.
⌋

The function `Port_Init` shall apply the following rules regarding initialisation of controller registers.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Port_SetPinDirection

Definition of API function `Port_SetPinDirection`
⌈
| Service Name | Port_SetPinDirection | < |
|---|---|---|
| Syntax | void Port_SetPinDirection ( |  |

  `Port_PinType` Pin,
  `Port_PinDirectionType` Direction
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Pin | Port Pin ID number |
| ^ | Direction | Port Pin Direction |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Sets the port pin direction | < |
| Available via | Port.h | < |

⌋

  Upstream requirements:
⌈
The function `Port_SetPinDirection` shall set the port pin direction during runtime.
⌋

⌈
The function `Port_SetPinDirection` shall be re-entrant if accessing different pins independent of a port.
⌋

  Upstream requirements:
⌈
The function `Port_SetPinDirection` shall only be available to the user if the pre-compile parameter PortSetPinDirectionApi is set to TRUE. If set to FALSE, the function `Port_SetPinDirection` is not available.
⌋

Configuration of `Port_SetPinDirection`: All ports and port pins shall be configured by the configuration tool. See PORT117.

### 42. Port_RefreshPortDirection

Definition of API function `Port_RefreshPortDirection`
⌈
| Service Name | Port_RefreshPortDirection | < |
|---|---|---|
| Syntax | void Port_RefreshPortDirection ( |  |

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
| Description | Refreshes port direction. | < |
| Available via | Port.h | < |

⌋

  Upstream requirements:
⌈
The function `Port_RefreshPortDirection` shall refresh the direction of all configured ports to the configured direction (PortPinDirection).
⌋

  Upstream requirements:
⌈
The function `Port_RefreshPortDirection` shall exclude those port pins from refreshing that are configured as 'pin direction changeable during runtime'.
⌋

The configuration tool shall provide names for each configured port pin.

### 43. Port_SetPinMode

Definition of API function `Port_SetPinMode`
⌈
| Service Name | Port_SetPinMode | < |
|---|---|---|
| Syntax | void Port_SetPinMode ( |  |

  `Port_PinType` Pin,
  `Port_PinModeType` Mode
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Pin | Port Pin ID number |
| ^ | Mode | New Port Pin mode to be set on port pin. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Sets the port pin mode. | < |
| Available via | Port.h | < |

⌋

⌈
The function `Port_SetPinMode` shall set the port pin mode of the referenced pin during runtime.
⌋

⌈
The function `Port_SetPinMode` shall be re-entrant if accessing different pins, independent of a port.
⌋

⌈
If Det is enabled, the function `Port_SetPinMode` shall report

`PORT_E_MODE_UNCHANGEABLE` error and return without any other action, if the parameter PortPinModeChangeable is set to FALSE.
⌋

Configuration of `Port_SetPinMode`: All ports and port pins shall be configured by the configuration tool. See PORT117.

There are no callback notifications from the PORT driver. The callback notifications are implemented in another module (ICU Driver and/or complex drivers).

### 44. Scheduled functions

There are no scheduled functions within the PORT Driver.

### 45. Expected 接口
*原文标题：Expected Interfaces*

In this chapter, all interfaces required from other modules are listed.

### 46. Mandatory 接口
*原文标题：Mandatory Interfaces*

None

### 47. Optional 接口
*原文标题：Optional Interfaces*

This chapter defines all interfaces which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module Port
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |

⌋

### 48. Configurable 接口
*原文标题：Configurable Interfaces*

None

### 49. 时序图
*原文标题：Sequence diagrams*

### 50. Overall 配置 of Ports
*原文标题：Overall Configuration of Ports*

### 51. Set the direction of a Port Pin

### 52. Refresh the direction of all Port Pins

### 53. Change the 模式 of a Port Pin
*原文标题：Change the mode of a Port Pin*

### 54. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification Chapter  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave Chapter  in the specification to guarantee comprehension.

Section  specifies the structure (containers) and the parameters of the module PORT

Section  specifies published information of the module PORT.

### 55. How to read this chapter

For details refer to .

### 56. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters describe Chapters  and Chapter .

⌈
The PORT module shall reject configurations with partition mappings which are not supported by the implementation.
⌋

### 57. PortConfigSet

Definition of EcucParamConfContainerDef PortConfigSet
⌈
| Container Name | PortConfigSet | < | < |
|---|---|---|---|
| Parent Container | Port | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container contains the configuration parameters and sub containers of the AUTOSAR Port module. | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

No Included Parameters

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| PortContainer | 1..* | Container collecting the PortPins. |

⌋

### 58. Port

Definition of EcucModuleDef Port
⌈
| Module Name | Port |
|---|---|
| Description | Configuration of the Port module. |
| Post-Build Variant Support | true |
| Supported Config Variants | VARIANT-POST-BUILD, VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| PortConfigSet | 1 | This container contains the configuration parameters and sub containers of the AUTOSAR Port module. |
| PortGeneral | 1 | Module wide configuration parameters of the PORT driver. |

⌋

### 59. PortContainer

Definition of EcucParamConfContainerDef PortContainer
⌈
| Container Name | PortContainer | < | < |
|---|---|---|---|
| Parent Container | PortConfigSet | < | < |
| Upstream mapping defined | - | < | < |
| Description | Container collecting the PortPins. | < | < |
| Multiplicity | 1..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| PortNumberOfPortPins | 1 |  |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| PortPin | 1..* | Configuration of the individual port pins. |

⌋

 Definition of EcucIntegerParamDef PortNumberOfPortPins
⌈
| Parameter Name | PortNumberOfPortPins | < | < |
|---|---|---|---|
| Parent Container | PortContainer | < | < |
| Upstream mapping defined | - | < | < |
| Description | The number of specified PortPins in this PortContainer. | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucIntegerParamDef | < | < |
| Range | 1 .. 65535 |  | < |
| Default value | - | < | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Dependency |  | < | < |

⌋

### 60. PortGeneral

Definition of EcucParamConfContainerDef PortGeneral
⌈
| Container Name | PortGeneral | < | < |
|---|---|---|---|
| Parent Container | Port | < | < |
| Upstream mapping defined | - | < | < |
| Description | Module wide configuration parameters of the PORT driver. | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| PortDevErrorDetect | 1 |  |
| PortSetPinDirectionApi | 1 |  |
| PortSetPinModeApi | 1 |  |
| PortEcucPartitionRef | 0..* |  |

No Included Containers
⌋

 Definition of EcucBooleanParamDef PortDevErrorDetect
⌈
| Parameter Name | PortDevErrorDetect | < | < |
|---|---|---|---|
| Parent Container | PortGeneral | < | < |
| Upstream mapping defined | - | < | < |
| Description | Switches the development error detection and notification on or off. |  |  |

* true: detection and notification is enabled.
| * false: detection and notification is disabled. | < | < |  |
|---|---|---|---|
| Multiplicity | 1 | < | < |
| Type | EcucBooleanParamDef | < | < |
| Default value | false | < | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Dependency |  | < | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 61. PortPin

Definition of EcucParamConfContainerDef PortPin
⌈
| Container Name | PortPin | < | < |
|---|---|---|---|
| Parent Container | PortContainer | < | < |
| Upstream mapping defined | - | < | < |
| Description | Configuration of the individual port pins. | < | < |
| Multiplicity | 1..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| PortPinDirection | 1 |  |
| PortPinDirectionChangeable | 1 |  |
| PortPinId | 1 |  |
| PortPinInitialMode | 1 |  |
| PortPinLevelValue | 1 |  |
| PortPinMode | 1..* |  |
| PortPinModeChangeable | 1 |  |
| PortPinEcucPartitionRef | 0..* |  |

No Included Containers
⌋

 Definition of EcucEnumerationParamDef PortPinDirection
⌈
| Parameter Name | PortPinDirection | < | < |
|---|---|---|---|
| Parent Container | PortPin | < | < |
| Upstream mapping defined | - | < | < |
| Description | The initial direction of the pin (IN or OUT). If the direction is not changeable, the value configured here is fixed. |  |  |

The direction must match the pin mode. E.g. a pin used for an ADC must be configured to be an in port.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 62. Constraints

⌈
The ECUC partitions referenced by PortPinEcucPartitionRef shall be a subset of the ECUC partitions referenced by PortEcucPartitionRef.
⌋

⌈
If PortEcucPartitionRef references one or more ECUC partitions, PortPinEcucPartitionRef shall have a multiplicity of greater than zero and reference one or several of these ECUC partitions as well.
⌋

### 63. 发布信息
*原文标题：Published Information*

For details refer to .

### 64. 附录
*原文标题：Appendix*

### 65. 不适用需求
*原文标题：Not applicable requirements*

Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
These requirements are not applicable to this specification.
⌋

### 66. Change history of AUTOSAR traceable items

### 67. Traceable item history of this document according to AUTOSAR Release R23-11

### 68. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 69. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

| Number | Heading |
|---|---|
| Definition of imported datatypes of module Port |  |
| Definition of optional interfaces in module Port |  |
| Definition of datatype Port_ConfigType |  |
| Definition of datatype Port_PinType |  |
| Definition of datatype Port_PinModeType |  |

 |

### 70. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 71. Added Constraints in R23-11

none

### 72. Changed Constraints in R23-11

none

### 73. Deleted Constraints in R23-11

none

### 74. Traceable item history of this document according to AUTOSAR Release R24-11

### 75. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 76. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 77. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 78. Added Constraints in R24-11

none

### 79. Changed Constraints in R24-11

none

### 80. Deleted Constraints in R24-11

none

### 81. Traceable item history of this document according to AUTOSAR Release R25-11

### 82. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 83. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|
| Definition of EcucParamConfContainerDef PortGeneral |  |
| Definition of EcucParamConfContainerDef PortPin |  |
| Definition of EcucParamConfContainerDef PortConfigSet |  |
| Definition of EcucParamConfContainerDef PortContainer |  |
| Definition of EcucBooleanParamDef PortDevErrorDetect |  |
| Definition of EcucIntegerParamDef PortNumberOfPortPins |  |
| Definition of EcucEnumerationParamDef PortPinDirection |  |
| Definition of EcucBooleanParamDef PortPinDirectionChangeable |  |
| Definition of EcucIntegerParamDef PortPinId |  |
| Definition of EcucEnumerationParamDef PortPinInitialMode |  |
| Definition of EcucEnumerationParamDef PortPinLevelValue |  |
| Definition of EcucEnumerationParamDef PortPinMode |  |
| Definition of EcucBooleanParamDef PortSetPinDirectionApi |  |
| Definition of EcucBooleanParamDef PortSetPinModeApi |  |
| Definition of EcucBooleanParamDef PortVersionInfoApi |  |
| Definition of EcucBooleanParamDef PortPinModeChangeable |  |
| Definition of EcucModuleDef Port |  |
| Definition of EcucReferenceDef PortEcucPartitionRef |  |
| Definition of EcucReferenceDef PortPinEcucPartitionRef |  |
| Definition of development errors in module Port |  |

 |
| Definition of datatype Port_ConfigType |
|---|
| Definition of datatype Port_Pi |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 84. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

| Number | Heading |
|---|---|

 |
 |

### 85. Added Constraints in R25-11

none

### 86. Changed Constraints in R25-11

none

### 87. Deleted Constraints in R25-11

none

### 88. Traceable item history of this document according to AUTOSAR Release R26-11

### 89. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 90. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

| Number | Heading |
|---|---|
| Definition of EcucParamConfContainerDef PortGeneral |  |
| Definition of EcucParamConfContainerDef PortPin |  |
| Definition of EcucParamConfContainerDef PortConfigSet |  |
| Definition of EcucParamConfContainerDef PortContainer |  |
| Definition of EcucBooleanParamDef PortDevErrorDetect |  |
| Definition of EcucIntegerParamDef PortNumberOfPortPins |  |
| Definition of EcucEnumerationParamDef PortPinDirection |  |
| Definition of EcucBooleanParamDef PortPinDirectionChangeable |  |
| Definition of EcucIntegerParamDef PortPinId |  |
| Definition of EcucEnumerationParamDef PortPinInitialMode |  |
| Definition of EcucEnumerationParamDef PortPinLevelValue |  |
| Definition of EcucEnumerationParamDef PortPinMode |  |
| Definition of EcucBooleanParamDef PortSetPinDirectionApi |  |
| Definition of EcucBooleanParamDef PortSetPinModeApi |  |
| Definition of EcucBooleanParamDef PortPinModeChangeable |  |
| Definition of EcucModuleDef Port |  |
| Definition of EcucReferenceDef PortEcucPartitionRef |  |
| Definition of EcucReferenceDef PortPinEcucPartitionRef |  |
| Definition of imported datatypes of module Port |  |

### 91. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

| Number | Heading |
|---|---|
| Definition of EcucBooleanParamDef PortVersionInfoApi |  |
| Definition of API function Port_GetVersionInfo |  |

 |

### 92. Added Constraints in R26-11

none

### 93. Changed Constraints in R26-11

none

### 94. Deleted Constraints in R26-11

none
