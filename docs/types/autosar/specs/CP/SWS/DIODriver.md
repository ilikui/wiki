# Specification of DIO Driver (`DIODriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 020 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_DIODriver_020\AUTOSAR_CP_SWS_DIODriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_DIODriver_020\AUTOSAR_CP_SWS_DIODriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_DIODriver_020\zzgen\CP_SWS_DIODriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module DIO Driver.

This specification is applicable to drivers only for on chip DIO pins and ports.

The DIO Driver provides services for reading and writing to / from

* DIO Channels (Pins)
* DIO Ports
* DIO Channel Groups

The behaviour of those services is synchronous.

This module works on pins and ports which are configured by the PORT driver for this purpose. For this reason, there is no configuration and initialization of this port structure in the DIO Driver.

The diagram below identifies the DIO Driver functions, and the structure of the PORT Driver and DIO Driver within the MCAL software layer.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module DIO Driver.

This specification is applicable to drivers only for on chip DIO pins and ports.

The DIO Driver provides services for reading and writing to / from

* DIO Channels (Pins)
* DIO Ports
* DIO Channel Groups

The behaviour of those services is synchronous.

This module works on pins and ports which are configured by the PORT driver for this purpose. For this reason, there is no configuration and initialization of this port structure in the DIO Driver.

The diagram below identifies the DIO Driver functions, and the structure of the PORT Driver and DIO Driver within the MCAL software layer.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the DIO Driver module that are not included in the .

| Abbreviation / Acronym | Description |
|---|---|
| DIO channel | Represents a single general-purpose digital input / output pin |
| DIO port | Represents several DIO channels that are grouped by hardware (typically controlled by one hardware register). |

Example: Port A (8 bit) of Freescale HC08
| DIO channel group | Represents several adjoining DIO channels represented by a logical group. A DIO channel group shall belong to one DIO port. |
|---|---|

Example: Port pins 2..6 of an 8 bit port addressing a multiplexer
| Physical Level (Input) | Two states possible: LOW / HIGH. A bit value '0' represents a LOW, a bit value '1' represents a HIGH. |
|---|---|
| Physical Level (Output) | Two states possible: LOW / HIGH. A bit value '0' represents a LOW, a bit value '1' represents a HIGH. |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for DIO Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for DIO Driver.

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

### 10. Port 驱动模块
*原文标题：Port Driver Module*

Many ports and port pins are assigned by the PORT Driver Module to various functionalities as for example:

* General purpose I/O
* ADC
* SPI
* PWM

⌈
The Dio module shall not provide APIs for overall configuration and initialization of the port structure which is used in the Dio module. These actions are done by the PORT Driver Module.
⌋

⌈
The Dio module shall adapt its configuration and usage to the microcontroller and ECU.
⌋

⌈
The Dio module's user shall only use the Dio functions after the Port Driver has been initialized. Otherwise the Dio module will exhibit undefined behavior.
⌋

### 11. Default 错误 Tracer
*原文标题：Default Error Tracer*

Upstream requirements:
⌈
Dio.c shall include Det.h if detection of development error (DET) is enabled.
⌋

### 12. 需求追踪
*原文标题：Requirements Tracing*

This chapter refers to input requirements specified in the SRS documents (Software Requirements Specifications) that are applicable for this software module.

The table below lists links to specification items of the DIO driver SWS document, that satisfy the input requirements. Only functional requirements are referenced.

| Requirement | Description | Satisfied by |
|---|---|---|
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| BSW Modules shall support link-time configuration |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能规范
*原文标题：Functional specification*

### 14. 通用行为
*原文标题：General Behaviour*

### 15. Background & Rationale

The DIO Driver abstracts the access to the microcontroller's hardware pins. Furthermore, it allows the grouping of those pins.

### 16. 需求
*原文标题：Requirements*

The Dio SWS shall define functions allowing

* Port-
* Channel-
* Channel-group -

-based read and write access to the internal general purpose I/O ports.

  Upstream requirements: , , , , ,
⌈
The Dio module shall not buffer data when providing read and write services.

The Dio SWS shall define synchronous read / write services.
⌋

  Upstream requirements:
⌈
The Dio module's read and write services shall ensure for all services, that the data is consistent (Interruptible read-modify-write sequences are not allowed).
⌋

  Upstream requirements: , , , , ,
⌈
Values used by the DIO Driver for the software level of Channels are either `STD_HIGH` or `STD_LOW`.
⌋

  Upstream requirements: ,
⌈
A general-purpose digital IO pin represents a DIO channel.
⌋

  Upstream requirements: ,
⌈
The Port module shall configure a DIO channel as input or output ( and ).
⌋

  Upstream requirements: ,
⌈
In the DIO Driver, it shall be possible to group several DIO channels by hardware (typically controlled by one hardware register) to represent a DIO port.
⌋

Note: The single DIO channel levels inside a DIO port represent a bit in the DIO port value, depending on their position inside the port.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 初始化
*原文标题：Initialization*

### 18. Background & Rationale

Initialization of the hardware is done by the PORT Driver.

### 19. 需求
*原文标题：Requirements*

Upstream requirements: , , , ,
⌈
The Dio module shall not provide an interface for initialization of the hardware. The Port Driver performs this.
⌋

### 20. Runtime Reconfiguration

### 21. Background & Rationale

Runtime reconfiguration is provided by the PORT Driver.

### 22. 需求
*原文标题：Requirements*

Upstream requirements: , , , ,
⌈
The PORT driver shall provide the reconfiguration of the port pin direction during runtime.
⌋

### 23. DIO Write 服务
*原文标题：DIO Write Service*

### 24. Background & Rationale

The DIO Driver provides services to transfer data to the microcontroller's pins.

### 25. 需求
*原文标题：Requirements*

Upstream requirements:
⌈
The Dio module's write functions shall work on input and output channels.
⌋

  Upstream requirements:
⌈
If a Dio write function is used on an input channel, it shall have no effect on the physical output level.
⌋

  Upstream requirements:
⌈
If supported by hardware, the Dio module shall set / clear the output data latch of an input channel so that the required level is output from the pin when the port driver configures the pin as a DIO output pin.
⌋

  Upstream requirements:
⌈
If development errors are enabled and an error occurred, the Dio module's write functions shall NOT process the write command.
⌋

### 26. DIO Channel Write 服务
*原文标题：DIO Channel Write Service*

Upstream requirements:
⌈
The `Dio_WriteChannel` function shall set the level of a single DIO channel to `STD_HIGH` or `STD_LOW`.
⌋

### 27. DIO Port Write 服务
*原文标题：DIO Port Write Service*

Upstream requirements:
⌈
The `Dio_WritePort` function shall simultaneously set the levels of all output channels. A bit value '0' sets the corresponding channel to physical `STD_LOW`, a bit value '1' sets the corresponding channel to physical `STD_HIGH`.
⌋

  Upstream requirements:
⌈
The `Dio_WritePort` function shall ensure that the functionality of the input channels of that port is not affected.
⌋

### 28. DIO Channel Group Write 服务
*原文标题：DIO Channel Group Write Service*

Upstream requirements:
⌈
The `Dio_WriteChannelGroup` function shall simultaneously set an adjoining subset of DIO channels (channel group). A bit value '0' sets the corresponding channel to physical `STD_LOW`, a bit value '1' sets the corresponding channel to physical `STD_HIGH`.
⌋

### 29. DIO Masked Port Write 服务
*原文标题：DIO Masked Port Write Service*

Upstream requirements:
⌈
The `Dio_MaskedWritePort` function shall simultaneously set the levels of the selected output channels.

Mask argument specifies which bits are selected: a bit value '0' means the corresponding channel is not selected, a bit value '1' means the corresponding channel is selected.

Level argument specifies the physical levels: a bit value '0' sets the corresponding channel to physical `STD_LOW`, a bit value '1' sets the corresponding channel to physical `STD_HIGH`.
⌋

  Upstream requirements:
⌈
The `Dio_MaskedWritePort` function shall ensure that the functionality of the input channels of that port is not affected.
⌋

### 30. DIO Read 服务
*原文标题：DIO Read Service*

### 31. Background & Rationale

The DIO Driver provides services to transfer data from the microcontroller's pins.

### 32. 需求
*原文标题：Requirements*

Upstream requirements:
⌈
The Dio module's read functions shall work on input and output channels.
⌋

### 33. DIO Channel Read 服务
*原文标题：DIO Channel Read Service*

Upstream requirements:
⌈
The `Dio_ReadChannel` function shall read the level of a single DIO channel.
⌋

### 34. DIO Port Read 服务
*原文标题：DIO Port Read Service*

Upstream requirements:
⌈
The `Dio_ReadPort` function shall read the levels of all channels of one port. A bit value '0' indicates that the corresponding channel is physical `STD_LOW`, a bit value '1' indicates that the corresponding channel is physical `STD_HIGH`.
⌋

### 35. DIO Channel Group Read 服务
*原文标题：DIO Channel Group Read Service*

Upstream requirements:
⌈
The `Dio_ReadChannelGroup` function shall read the levels of a DIO channel group. A bit value '0' indicates that the corresponding channel is physical `STD_LOW`, a bit value '1' indicates that the corresponding channel is physical `STD_HIGH`.
⌋

### 36. DIO Readback of Output Pins

Upstream requirements:
⌈
If the microcontroller supports the direct read-back of a pin value, the Dio module's read functions shall provide the real pin level, when they are used on a channel which is configured as an output channel.
⌋

  Upstream requirements:
⌈
If the microcontroller does not support the direct read-back of a pin value, the Dio module's read functions shall provide the value of the output register, when they are used on a channel which is configured as an output channel.
⌋

### 37. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 38. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Dio
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Invalid channel requested | DIO_E_PARAM_INVALID_CHANNEL_ID | 0x0A |
| Invalid port requested | DIO_E_PARAM_INVALID_PORT_ID | 0x14 |
| Invalid channel group requested | DIO_E_PARAM_INVALID_GROUP | 0x1F |
| API service called with a NULL pointer | DIO_E_PARAM_POINTER | 0x20 |

⌋

### 39. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 40. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 41. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 42. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 43. API 规范
*原文标题：API specification*

### 44. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following modules are listed:

 Definition of imported datatypes of module Dio
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |

⌋

### 45. 类型定义
*原文标题：Type definitions*

⌈
The port width within the types defined for the DIO Driver shall be the size of the largest port on the MCU which may be accessed by the DIO Driver.
⌋

### 46. Dio_ChannelType

Definition of datatype `Dio_ChannelType`
⌈
| Name | Dio_ChannelType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | This is implementation specific but not all values may be valid within the type. | - | Shall cover all available DIO channels |
| Description | Numeric ID of a DIO channel. | < | < |
| Available via | Dio.h | < | < |

⌋

⌈
The mapping of the ID is implementation specific but not configurable.
⌋

  Upstream requirements: ,
⌈
For parameter values of type `Dio_ChannelType`, the Dio's user shall use the symbolic names provided by the configuration description.

Furthermore,  applies to the type `Dio_ChannelType`.
⌋

### 47. Dio_PortType

Definition of datatype `Dio_PortType`
⌈
| Name | Dio_PortType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 0..<number of ports> | - | Shall cover all available DIO Ports. |
| Description | Numeric ID of a DIO port. | < | < |
| Available via | Dio.h | < | < |

⌋

⌈
The mapping of ID is implementation specific but not configurable.
⌋

  Upstream requirements: ,
⌈
For parameter values of type `Dio_PortType`, the user shall use the symbolic names provided by the configuration description.

Furthermore,  applies to the type `Dio_PortType`.
⌋

### 48. Dio_ChannelGroupType

Definition of datatype `Dio_ChannelGroupType`
  Upstream requirements: ,
⌈
| Name | Dio_ChannelGroupType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | mask | < |
| ^ | Type | uint8/16/32 |
| ^ | Comment | This element mask which defines the positions of the channel group. |
| ^ | offset | < |
| ^ | Type | uint8 |
| ^ | Comment | This element shall be the position of the Channel Group on the port, counted from the LSB. |
| ^ | port | < |
| ^ | Type | Dio_PortType |
| ^ | Comment | This shall be the port on which the Channel group is defined. |
| Description | Type for the definition of a channel group, which consists of several adjoining channels within a port. | < |
| Available via | Dio.h | < |

⌋

  Upstream requirements: ,
⌈
For parameter values of type `Dio_ChannelGroupType`, the user shall use the symbolic names provided by the configuration description.

Furthermore,  applies to the type `Dio_ChannelGroupType`.
⌋

### 49. Dio_LevelType

Definition of datatype `Dio_LevelType`
⌈
| Name | Dio_LevelType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Description | These are the possible levels a DIO channel can have (input or output). The symbols STD_LOW (Physical state 0V) and STD_HIGH (Physical state 5V or 3.3V) shall be reused from Std_Types.h. | < | < |
| Available via | Dio.h | < | < |

⌋

### 50. Dio_PortLevelType

Definition of datatype `Dio_PortLevelType`
⌈
| Name | Dio_PortLevelType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | 0...xxx | - | If the μC owns ports of different port widths (e.g. 4, 8,16...Bit) Dio_PortLevelType inherits the size of the largest port |
| Description | If the μC owns ports of different port widths (e.g. 4, 8,16...Bit) Dio_PortLevelType inherits the size of the largest port. | < | < |
| Available via | Dio.h | < | < |

⌋

⌈
`Dio_PortLevelType` is the type for the value of a DIO port.

Furthermore,  applies to the type `Dio_PortLevelType`.
⌋

### 51. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 52. Dio_ReadChannel

Definition of API function `Dio_ReadChannel`
⌈
| Service Name | Dio_ReadChannel | < |
|---|---|---|
| Syntax | Dio_LevelType Dio_ReadChannel ( |  |

  `Dio_ChannelType` ChannelId
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ChannelId | ID of DIO channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Dio_LevelType | STD_HIGH The physical level of the corresponding Pin is STD_HIGH STD_LOW The physical level of the corresponding Pin is STD_LOW |
| Description | Returns the value of the specified DIO channel. | < |
| Available via | Dio.h | < |

⌋

  Upstream requirements:
⌈
The `Dio_ReadChannel` function shall return the value of the specified DIO channel.

Regarding the return value of the `Dio_ReadChannel` function, the requirements  and  are applicable.

Furthermore, the requirements  and  are applicable to the `Dio_ReadChannel` function.
⌋

  Upstream requirements: ,
⌈
If development error detection is enabled, the services `Dio_ReadChannel`, `Dio_WriteChannel` and `Dio_FlipChannel` shall check the "ChannelId" parameter to be valid within the current configuration.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 53. Dio_WriteChannel

Definition of API function `Dio_WriteChannel`
⌈
| Service Name | Dio_WriteChannel | < |
|---|---|---|
| Syntax | void Dio_WriteChannel ( |  |

  `Dio_ChannelType` ChannelId,
  `Dio_LevelType` Level
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ChannelId | ID of DIO channel |
| ^ | Level | Value to be written |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to set a level of a channel. | < |
| Available via | Dio.h | < |

⌋

  Upstream requirements:
⌈
If the specified channel is configured as an output channel, the `Dio_WriteChannel` function shall set the specified Level for the specified channel.
⌋

  Upstream requirements:
⌈
If the specified channel is configured as an input channel, the `Dio_WriteChannel` function shall have no influence on the physical output.
⌋

  Upstream requirements:
⌈
If the specified channel is configured as an input channel, the `Dio_WriteChannel` function shall have no influence on the result of the next Read-Service.

Furthermore, the requirements ,  and  are applicable to the `Dio_WriteChannel` function.
⌋

### 54. Dio_ReadPort

Definition of API function `Dio_ReadPort`
⌈
| Service Name | Dio_ReadPort | < |
|---|---|---|
| Syntax | Dio_PortLevelType Dio_ReadPort ( |  |

  `Dio_PortType` PortId
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | PortId | ID of DIO Port |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Dio_PortLevelType | Level of all channels of that port |
| Description | Returns the level of all channels of that port. | < |
| Available via | Dio.h | < |

⌋

  Upstream requirements:
⌈
The `Dio_ReadPort` function shall return the level of all channels of that port.
⌋

  Upstream requirements:
⌈
When reading a port which is smaller than the `Dio_PortLevelType` using the `Dio_ReadPort` function (see ), the function shall set the bits corresponding to undefined port pins to 0.

Furthermore, the requirements  and  are applicable to the `Dio_ReadPort` function.
⌋

  Upstream requirements: ,
⌈
If development error detection is enabled, the functions `Dio_ReadPort`, `Dio_WritePort` and `Dio_MaskedWritePort` shall check the "PortId" parameter to be valid within the current configuration.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 55. Dio_WritePort

Definition of API function `Dio_WritePort`
⌈
| Service Name | Dio_WritePort | < |
|---|---|---|
| Syntax | void Dio_WritePort ( |  |

  `Dio_PortType` PortId,
  `Dio_PortLevelType` Level
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | PortId | ID of DIO Port |
| ^ | Level | Value to be written |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to set a value of the port. | < |
| Available via | Dio.h | < |

⌋

  Upstream requirements:
⌈
The `Dio_WritePort` function shall set the specified value for the specified port.
⌋

  Upstream requirements:
⌈
When the `Dio_WritePort` function is called, DIO Channels that are configured as input shall remain unchanged.
⌋

  Upstream requirements:
⌈
When writing a port which is smaller than the `Dio_PortLevelType` using the `Dio_WritePort` function (see ), the function shall ignore the MSB.
⌋

  Upstream requirements:
⌈
The `Dio_WritePort` function shall have no effect on channels within this port which are configured as input channels.

Furthermore, the requirements ,  and  are applicable to the `Dio_WritePort` function.
⌋

### 56. Dio_ReadChannelGroup

Definition of API function `Dio_ReadChannelGroup`
⌈
| Service Name | Dio_ReadChannelGroup | < |
|---|---|---|
| Syntax | Dio_PortLevelType Dio_ReadChannelGroup ( |  |

  const `Dio_ChannelGroupType`* ChannelGroupIdPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ChannelGroupIdPtr | Pointer to ChannelGroup |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Dio_PortLevelType | Level of a subset of the adjoining bits of a port |
| Description | This Service reads a subset of the adjoining bits of a port. | < |
| Available via | Dio.h | < |

⌋

  Upstream requirements:
⌈
The `Dio_ReadChannelGroup` function shall read a subset of the adjoining bits of a port (channel group).
⌋

  Upstream requirements:
⌈
The `Dio_ReadChannelGroup` function shall do the masking of the channel group.
⌋

  Upstream requirements:
⌈
The `Dio_ReadChannelGroup` function shall do the shifting so that the values read by the function are aligned to the LSB.

Furthermore, the requirements , , ,  and  are applicable to the `Dio_ReadChannelGroup` function.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 57. Dio_WriteChannelGroup

Definition of API function `Dio_WriteChannelGroup`
⌈
| Service Name | Dio_WriteChannelGroup | < |
|---|---|---|
| Syntax | void Dio_WriteChannelGroup ( |  |

  const `Dio_ChannelGroupType`* ChannelGroupIdPtr,
  `Dio_PortLevelType` Level
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ChannelGroupIdPtr | Pointer to ChannelGroup |
| ^ | Level | Value to be written |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to set a subset of the adjoining bits of a port to a specified level. | < |
| Available via | Dio.h | < |

⌋

  Upstream requirements:
⌈
The `Dio_WriteChannelGroup` function shall set a subset of the adjoining bits of a port (channel group) to a specified level.
⌋

  Upstream requirements:
⌈
The `Dio_WriteChannelGroup` shall not change the remaining channels of the port and channels which are configured as input.
⌋

  Upstream requirements:
⌈
The `Dio_WriteChannelGroup` function shall do the masking of the channel group.
⌋

  Upstream requirements:
⌈
The function `Dio_WriteChannelGroup` shall do the shifting so that the values written by the function are aligned to the LSB.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 58. Dio_FlipChannel

Definition of API function `Dio_FlipChannel`
⌈
| Service Name | Dio_FlipChannel | < |
|---|---|---|
| Syntax | Dio_LevelType Dio_FlipChannel ( |  |

  `Dio_ChannelType` ChannelId
| ) | < |  |
|---|---|---|
| Service ID | 0x11 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ChannelId | ID of DIO channel |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Dio_LevelType | STD_HIGH: The physical level of the corresponding Pin is STD_HIGH. STD_LOW: The physical level of the corresponding Pin is STD_LOW. |
| Description | Service to flip (change from 1 to 0 or from 0 to 1) the level of a channel and return the level of the channel after flip. | < |
| Available via | Dio.h | < |

⌋

  Upstream requirements:
⌈
If the specified channel is configured as an output channel, the `Dio_FlipChannel` function shall read level of the channel (requirements  and  are applicable) and invert it, then write the inverted level to the channel. The return value shall be the inverted level of the specified channel.
⌋

  Upstream requirements:
⌈
If the specified channel is configured as an input channel, the `Dio_FlipChannel` function shall have no influence on the physical output.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 59. Dio_MaskedWritePort

Definition of API function `Dio_MaskedWritePort`
⌈
| Service Name | Dio_MaskedWritePort | < |
|---|---|---|
| Syntax | void Dio_MaskedWritePort ( |  |

  `Dio_PortType` PortId,
  `Dio_PortLevelType` Level,
  `Dio_PortLevelType` Mask
| ) | < |  |
|---|---|---|
| Service ID | 0x13 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | PortId | ID of DIO Port |
| ^ | Level | Value to be written |
| ^ | Mask | Channels to be masked in the port |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to set the value of a given port with required mask. | < |
| Available via | Dio.h | < |

⌋

  Upstream requirements:
⌈
The `Dio_MaskedWritePort` function shall set the specified value for the channels in the specified port if the corresponding bit in Mask is '1'.
⌋

  Upstream requirements:
⌈
When the `Dio_MaskedWritePort` function is called, DIO Channels that are configured as input shall remain unchanged.
⌋

  Upstream requirements:
⌈
When writing a port which is smaller than the `Dio_PortLevelType` using the `Dio_MaskedWritePort` function (see ), the function shall ignore the MSB.
⌋

### 60. Scheduled functions

This chapter lists all functions called directly by the Basic Software Module Scheduler.

The Dio module has no scheduled functions.

### 61. Expected 接口
*原文标题：Expected interfaces*

This chapter lists all functions the Dio module requires from other modules.

### 62. Mandatory 接口
*原文标题：Mandatory Interfaces*

None

### 63. Optional 接口
*原文标题：Optional Interfaces*

This chapter defines all interfaces which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module Dio
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |

⌋

### 64. 时序图
*原文标题：Sequence diagrams*

The diagrams below show the sequences when calling the `Dio_ReadChannel` and `Dio_WriteChannel` service, they show normal operation mode. Since all other services which are defined in Chapter  have exactly the same synchronous behavior concerning, there are intentionally no further sequence diagrams in this document.

### 65. Read a value from a digital I/O

### 66. Write a value to a digital I/O

### 67. 配置规范
*原文标题：Configuration specification*

This chapter defines configuration parameters and their clustering into containers.

### 68. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters.

⌈
The DIO module shall reject configurations with partition mappings which are not supported by the implementation.
⌋

### 69. Variants

Upstream requirements:
⌈
At least one of the following variants has to be supported by implementation: VARIANT-PRE-COMPILE, VARIANT-LINK-TIME.
⌋

### 70. Dio

Definition of EcucModuleDef Dio
⌈
| Module Name | Dio |
|---|---|
| Description | Configuration of the Dio (Digital IO) module. |
| Post-Build Variant Support | false |
| Supported Config Variants | VARIANT-LINK-TIME, VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| DioConfig | 1 | This container contains the configuration parameters and sub containers of the AUTOSAR DIO module. |
| DioGeneral | 1 | General DIO module configuration parameters. |

⌋

### 71. DioGeneral

Definition of EcucParamConfContainerDef DioGeneral
⌈
| Container Name | DioGeneral | < | < |
|---|---|---|---|
| Parent Container | Dio | < | < |
| Upstream mapping defined | - | < | < |
| Description | General DIO module configuration parameters. | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| DioDevErrorDetect | 1 |  |
| DioFlipChannelApi | 1 |  |
| DioMaskedWritePortApi | 1 |  |
| DioEcucPartitionRef | 0..* |  |

No Included Containers
⌋

 Definition of EcucBooleanParamDef DioDevErrorDetect
⌈
| Parameter Name | DioDevErrorDetect | < | < |
|---|---|---|---|
| Parent Container | DioGeneral | < | < |
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

### 72. DioPort

Definition of EcucParamConfContainerDef DioPort
⌈
| Container Name | DioPort | < | < |
|---|---|---|---|
| Parent Container | DioConfig | < | < |
| Upstream mapping defined | - | < | < |
| Description | Configuration of individual DIO ports, consisting of channels and possible channel groups. Note that this container definition does not explicitly define a symbolic name parameter. Instead, the container's short name will be used in the Ecu Configuration Description to specify the symbolic name of the port. | < | < |
| Multiplicity | 1..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| DioPortId | 1 |  |
| DioPortEcucPartitionRef | 0..* |  |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| DioChannel | 0..* | Configuration of an individual DIO channel. |
| DioChannelGroup | 0..* | Definition and configuration of DIO channel groups. A channel group represents several adjoining DIO channels represented by a logical group. Note that this container definition does not explicitly define a symbolic name parameter. Instead, the container's short name will be used in the Ecu Configuration Description to specify the symbolic name of the channel group. |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 19 章（内容从略，见纯文本全文）

73. DioChannel
74. DioChannelGroup
75. DioConfig
76. 发布信息
77. 附录
78. 不适用需求
79. Change history of AUTOSAR traceable items
80. Traceable item history of this document according to AUTOSAR Release R24-11
81. Added 规范 Items in R24-11
82. Changed 规范 Items in R24-11
83. Deleted 规范 Items in R24-11
84. Traceable item history of this document according to AUTOSAR Release R25-11
85. Added 规范 Items in R25-11
86. Changed 规范 Items in R25-11
87. Deleted 规范 Items in R25-11
88. Traceable item history of this document according to AUTOSAR Release R26-11
89. Added 规范 Items in R26-11
90. Changed 规范 Items in R26-11
91. Deleted 规范 Items in R26-11
