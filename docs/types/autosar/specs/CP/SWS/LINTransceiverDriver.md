# Specification of LIN Transceiver Driver (`LINTransceiverDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 257 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_LINTransceiverDriver_257\AUTOSAR_CP_SWS_LINTransceiverDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_LINTransceiverDriver_257\AUTOSAR_CP_SWS_LINTransceiverDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_LINTransceiverDriver_257\zzgen\CP_SWS_LINTransceiverDriver.complete.txt`

## 文档简介

This specification specifies functionality, API and configuration of the module LIN transceiver driver. It is responsible to handle the LIN transceiver hardware on an ECU.

A LIN bus transceiver is a hardware device. It is the interface between LIN protocol controller and physical LIN bus. On one hand the transmit data stream of a LIN protocol controller is converted into LIN physical layer compliant bus signals. On the other hand LIN bus data streams are converted into protocol controller input signals. A LIN protocol controller is typically a microcontroller implementation.

Most LIN transceivers support power supply control and wakeup via the bus. A lot of different wakeup / sleep and power supply concepts are available on the market.

In addition so called system basis chips (SBC) are available. Beside LIN transceiver functionalities these devices provide additional features, e.g. detection of electrical malfunctions (e.g. short-circuit to dominant level (GND)), power supply control, advanced watchdogs, LIN transceiver, SPI etc.

## 模块依赖

| Module | Dependencies |
|---|---|
| LinIf | All LIN transceiver drivers are arranged below LinIf. |
| ComM | ComM steers LIN transceiver driver communication modes via LinIf. Independent steering of each single LIN transceiver channel is possible. |
| Det | Det gets development error information from LIN transceiver driver. |
| Dio | Dio module is used to access LIN transceiver hardware connected via ports. |
| EcuM | EcuM gets wakeup information from LIN transceiver driver via LinIf. |
| Icu | Icu module might perform LIN transceiver hardware interrupts. |
| Spi | Spi module is used to access LIN transceiver hardware connected via Spi. |

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies functionality, API and configuration of the module LIN transceiver driver. It is responsible to handle the LIN transceiver hardware on an ECU.

A LIN bus transceiver is a hardware device. It is the interface between LIN protocol controller and physical LIN bus. On one hand the transmit data stream of a LIN protocol controller is converted into LIN physical layer compliant bus signals. On the other hand LIN bus data streams are converted into protocol controller input signals. A LIN protocol controller is typically a microcontroller implementation.

Most LIN transceivers support power supply control and wakeup via the bus. A lot of different wakeup / sleep and power supply concepts are available on the market.

In addition so called system basis chips (SBC) are available. Beside LIN transceiver functionalities these devices provide additional features, e.g. detection of electrical malfunctions (e.g. short-circuit to dominant level (GND)), power supply control, advanced watchdogs, LIN transceiver, SPI etc.

### 2. Goal of LIN 收发器驱动
*原文标题：Goal of LIN transceiver driver*

The target of this document is to specify interfaces and behaviour, which are applicable to most current LIN transceiver hardware implementations.

  Upstream requirements:
⌈
The LIN transceiver driver abstracts the applied LIN transceiver hardware and covers hardware independent interfaces to the higher layers. It abstracts also from ECU layout by using APIs of MCAL layer to access LIN transceiver hardware.
⌋

### 3. Explicitly uncovered LIN 收发器 functionality
*原文标题：Explicitly uncovered LIN transceiver functionality*

Some LIN bus transceivers offer additional functionality like ECU self test or error detection capability for diagnostics.

ECU self test and error detection are not defined within AUTOSAR and requiring such functionality in general would lock out most currently used transceiver hardware chips. Therefore, features like "ground shift detection", "selective wakeup", "slope control" and others are not supported.

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the `SWS_LINTransceiverDriver` module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Channel | A channel is a software exchange medium for data that are defined with the same criteria. |
| EcuM | ECU State Manager |
| Frt | Free Running Timer |
| LinTrcv | LIN Transceiver Driver |
| n/a | Not applicable |
| SBC | System Basis Chip; a device, which integrates e.g. LIN and / or LIN transceiver, watchdog and power control. |
| SPAL | Standard Peripheral Abstraction Layer |
| SPI Channel | A channel is a software exchange medium for data that are defined with the same criteria: configuration parameters, number of data elements with same size and data pointers (source & destination) or location. See specification of SPI driver for more details. |
| SPI Job | A job is composed of one or several channels with the same chip select. A job is considered to be atomic and therefore cannot be interrupted. A job has also an assigned priority. See specification of SPI driver for more details. |
| SPI Sequence | A sequence is a number of consecutive jobs to be transmitted. A sequence depends on a static configuration. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for LIN Transceiver Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for LIN Transceiver Driver.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

The used APIs of underlying drivers like DIO or SPI shall be synchronous. Implementations of underlying drivers, which do not support synchronous behavior, cannot be used together with LIN transceiver driver.

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

This driver might be applicable in all car domains using LIN for communication.

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

| Module | Dependencies |
|---|---|
| LinIf | All LIN transceiver drivers are arranged below LinIf. |
| ComM | ComM steers LIN transceiver driver communication modes via LinIf. Independent steering of each single LIN transceiver channel is possible. |
| Det | Det gets development error information from LIN transceiver driver. |
| Dio | Dio module is used to access LIN transceiver hardware connected via ports. |
| EcuM | EcuM gets wakeup information from LIN transceiver driver via LinIf. |
| Icu | Icu module might perform LIN transceiver hardware interrupts. |
| Spi | Spi module is used to access LIN transceiver hardware connected via Spi. |

### 12. 文件结构
*原文标题：File structure*

### 13. Naming convention for 收发器驱动 implementation
*原文标题：Naming convention for transceiver driver implementation*

Upstream requirements:
⌈
In case different LIN transceiver hardware implementations are used in one ECU the function names of the different LIN transceiver drivers must be modified such that no two functions with the same names are generated. The names may be extended with a vendor ID or a type ID.
⌋

### 14. 代码文件结构
*原文标题：Code file structure*

For details, refer to the section "Code file structure" of the .

### 15. 头文件结构
*原文标题：Header file structure*

Upstream requirements: ,
⌈
The include file structure shall be as follows:

LinTrcv.c shall include Det.h (needed to notify about development errors) if development error detection for the module LinTrcv is enabled.

LinTrcv.c shall include Dio.h (DIO APIs needed to access Transceiver pins)

LinTrcv.c shall include Icu.h (if ICU APIs needed to perform LIN transceiver hardware interrupts)

LinTrcv.c shall include Spi.h (if the LIN bus transceiver driver use drivers for Spi to control the LIN bus transceiver hardware)

LinTrcv.c shall include Tm.h (needed for wait states for changing transceiver operation modes)
⌋

### 16. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The AUTOSAR Basic Software shall provide a hardware abstraction layer |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| API naming convention |  |  |
| Error values naming convention |  |  |
| A Naming seperation of different instances of BSW drivers shall be in place |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| Basic Software Modules shall report wake-up reasons |  |  |
| A Basic Software Module can return a module specific types |  |  |
| List possible error notifications |  |  |
| The BSW shall specify the configuratio |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 功能规范
*原文标题：Functional specification*

### 18. LIN 收发器驱动 operation modes
*原文标题：LIN transceiver driver operation modes*

Upstream requirements: ,
⌈
The LIN transceiver driver operation modes are described in the state diagram below.
⌋

The main idea behind this diagram is to support the majority of available LIN bus transceivers in a common model view. Depending on the LIN transceiver hardware, the model may have one or two states more than necessary for a given LIN transceiver hardware, but this will clearly decouple the ComM and EcuM from the used hardware.

Hint: There are several optional interfaces that might not be needed for current LIN transceiver hardware. E.g. the mode "`LINTRCV_TRCV_MODE_STANDBY`" might be only an internal state that is used for internal hardware transitions. Especially if functionality of "inhibit pin" is used to control the uC only the states "`LINTRCV_TRCV_MODE_SLEEP`" and "`LINTRCV_TRCV_MODE_NORMAL`" are of interest.

| State | Description |
|---|---|
| POWER_ON | MCU is fully powered. |
| NOT_ACTIVE | State of LIN transceiver hardware depend on ECU hardware and on Dio and Port driver configuration. LIN transceiver driver is not initialized and therefore not active. |
| ACTIVE | The function LinTrcv_Init was called. It carries LIN transceiver driver to active state. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. LIN 收发器 hardware operation modes
*原文标题：LIN transceiver hardware operation modes*

The LIN transceiver hardware may support more mode transitions than the software. The dependencies and the recommended implementations behaviour are explained in this chapter.

It is up to the implementation to decide which LIN transceiver hardware state is covered by which LIN transceiver driver software state. An implementation has to guarantee that whole functionality of described LIN transceiver driver is given by the implementation.

### 20. LIN 收发器唤醒类型
*原文标题：LIN transceiver wakeup types*

There are four different scenarios, which are often called wakeup:

# MCU is not powered, parts of ECU including LIN transceiver hardware are powered. The considered LIN transceiver hardware is in mode `LINTRCV_TRCV_MODE_SLEEP`. A wakeup event on LIN is detected by LIN transceiver hardware. LIN transceiver hardware causes powering of MCU (e.g. via pin "inhibit"). In terms of AUTOSAR this is kept as a cold start and not as a wakeup.
# MCU is in low power mode, parts of ECU including LIN transceiver hardware are powered. Depending on the hardware implementation the considered LIN transceiver hardware is either in mode `LINTRCV_TRCV_MODE_STANDBY` or `LINTRCV_TRCV_MODE_SLEEP`. A wakeup event on LIN is detected by LIN transceiver hardware. LIN transceiver hardware is informing MCU about wakeup. In terms of AUTOSAR this is kept as a wakeup of the LIN channel and of the MCU.
# MCU is in full power mode, at least parts of the ECU including LIN transceiver hardware are powered. Depending on the hardware implementation the considered LIN transceiver hardware is either in mode `LINTRCV_TRCV_MODE_STANDBY` or `LINTRCV_TRCV_MODE_SLEEP`. A wakeup event on LIN is detected by LIN transceiver hardware.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. LIN 收发器唤醒 modes
*原文标题：LIN transceiver wakeup modes*

Upstream requirements: ,
⌈
Wakeup notification must be supported by LIN Transceiver driver, therefore LIN transceiver driver covers 2 wakeup modes, internal wakeup by an upper layer or external wakeup by LIN channel.
⌋

# Internal wakeup: An internal wakeup is initiated by an upper layer, e.g. by calling `LinTrcv_Init` or `LinTrcv_SetOpMode`.
# External wakeup: Wakeup detected by LIN transceiver driver is forwarded to the upper layer through the API `LinTrcv_CheckWakeup` which has to be called by the LinIf.

Hint: WakeUp through ISR is not supported by the LIN Transceiver Driver but is only possible through ICU.

  Upstream requirements:
⌈
Selection of wakeup mode shall be done by configuration parameter LinTrcvWakeUpSupport.
⌋

  Upstream requirements:
⌈
Support of wakeup shall be switched on and off for each LIN transceiver channel individually by configuration parameter LinTrcvWakeupByBusUsed.
⌋

⌈
LinTrcv driver shall use the following APIs provided by ICU driver, to enable and disable the wakeup event notification:

* `Icu_EnableNotification`
* `Icu_DisableNotification`
⌋

⌈
LinTrcv driver shall enable the ICU channels when the transceiver transmits to standby mode (`LINTRCV_STANDBY`)
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 23. Development 错误
*原文标题：Development Errors*

There are no development errors.

 Definition of development errors in module LinTrcv
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API called with wrong parameter for LIN network | LINTRCV_E_INVALID_LIN_NETWORK | 0x01 |
| API called with null pointer parameter | LINTRCV_E_PARAM_POINTER | 0x02 |
| API service used without initialization | LINTRCV_E_UNINIT | 0x11 |
| API service called in wrong transceiver operation mode | LINTRCV_E_TRCV_NOT_SLEEP | 0x21 |
| API service called in wrong transceiver operation mode | LINTRCV_E_TRCV_NOT_NORMAL | 0x22 |
| API service called with invalid mode because optional transition is not enabled | LINTRCV_E_INVALID_TRCV_OPMODE | 0x25 |

⌋

### 24. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 25. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 26. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 27. Preconditions for 驱动初始化
*原文标题：Preconditions for driver initialization*

⌈
The LIN bus transceiver driver might use drivers for Dio or Spi to control the LIN bus transceiver hardware. Thus these drivers must be available and ready to operate before the LIN bus transceiver driver is initialized.
⌋

The LIN transceiver driver may have timing requirements for the initialization sequence and the access to the transceiver device, which must be fulfilled by these used underlying drivers.

The timing requirements might be that

* The call of the LIN bus transceiver driver initialization has to be performed very early after power up to be able to read all necessary information out of the transceiver hardware in time for all other users within the ECU.
* The runtime of the used underlying services is very short and synchronous to enable the driver to keep his own timing requirements limited by the used hardware device.
* The runtime of the driver may be enlarged, as some hardware devices have the need to have the port pin level valid for e.g. 50\mus before changing it again to reach a specific state, e.g. sleep.

### 28. Instance concept

Upstream requirements: ,
⌈
For each LIN transceiver hardware type an ECU has one LIN transceiver driver instance. One instance serves all LIN transceiver hardware of the same type.
⌋

### 29. Wait states

For changing operation modes, the LIN transceiver hardware may have to perform wait states.

⌈
The LIN Transceiver Driver shall use the Time service `Tm_BusyWait1us16bit` to realize the wait time for transceiver state changes.
⌋

### 30. API 规范
*原文标题：API specification*

### 31. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module LinTrcv
⌈
| Module | Header File | Imported Type |
|---|---|---|
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

### 32. 类型定义
*原文标题：Type definitions*

### 33. LinTrcv_ConfigType

Definition of datatype `LinTrcv_ConfigType`
  Upstream requirements:
⌈
| Name | LinTrcv_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | Configuration data structure of the LinTrcv module. | < |
| Available via | LinTrcv.h | < |

⌋

### 34. LinTrcv_TrcvModeType

Definition of datatype `LinTrcv_TrcvModeType`
⌈
| Name | LinTrcv_TrcvModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | LINTRCV_TRCV_MODE_NORMAL | - | Transceiver mode NORMAL |
| ^ | LINTRCV_TRCV_MODE_STANDBY | - | Transceiver mode STANDBY |
| ^ | LINTRCV_TRCV_MODE_SLEEP | - | Transceiver mode SLEEP |
| Description | Operating modes of the LIN Transceiver Driver | < | < |
| Available via | Lin_GeneralTypes.h | < | < |

⌋

### 35. LinTrcv_TrcvWakeupModeType

Definition of datatype `LinTrcv_TrcvWakeupModeType`
⌈
| Name | LinTrcv_TrcvWakeupModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | LINTRCV_WUMODE_ENABLE | - | The notification for wakeup events is enabled on the addressed network. |
| ^ | LINTRCV_WUMODE_DISABLE | - | The notification for wakeup events is disabled on the addressed network. |
| ^ | LINTRCV_WUMODE_CLEAR | - | A stored wakeup event is cleared on the addressed network. |
| Description | Wake up operating modes of the LIN Transceiver Driver. | < | < |
| Available via | Lin_GeneralTypes.h | < | < |

⌋

### 36. LinTrcv_TrcvWakeupReasonType

Definition of datatype `LinTrcv_TrcvWakeupReasonType`
⌈
| Name | LinTrcv_TrcvWakeupReasonType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | LINTRCV_WU_ERROR | - | Due to an error wake up reason was not detected. |
| ^ | LINTRCV_WU_NOT_SUPPORTED | - | The transceiver does not support any information for the wake up reason. |
| ^ | LINTRCV_WU_BY_BUS | - | The transceiver has detected, that the network has caused the wake up of the ECU. |
| ^ | LINTRCV_WU_BY_PIN | - | The transceiver has detected a wake-up event at one of the transceiver's pins (not at the LIN bus). |
| ^ | LINTRCV_WU_INTERNALLY | - | The transceiver has detected, that the network has been woken up by the ECU via a request to NORMAL mode. |
| ^ | LINTRCV_WU_RESET | - | The transceiver has detected, that the wake up is due to an ECU reset. |
| ^ | LINTRCV_WU_POWER_ON | - | The transceiver has detected, that the wake up is due to an ECU reset after power on. |
| Description | This type denotes the wake up reason detected by the LIN transceiver in detail. | < | < |
| Available via | Lin_GeneralTypes.h | < | < |

⌋

### 37. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 38. LinTrcv_Init

Definition of API function `LinTrcv_Init`
  Upstream requirements: , , ,
⌈
| Service Name | LinTrcv_Init | < |
|---|---|---|
| Syntax | void LinTrcv_Init ( |  |

  const `LinTrcv_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the selected configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the Lin Transceiver Driver module. | < |
| Available via | LinTrcv.h | < |

⌋

  Upstream requirements:
⌈
The Configuration pointer ConfigPtr shall always have a `NULL_PTR` value
⌋

The Configuration pointer ConfigPtr is currently not used and shall therefore be set `NULL_PTR` value.

⌈
The function `LinTrcv_Init` shall set the LIN transceiver hardware to the state `LINTRCV_TRCV_MODE_SLEEP`.
⌋

Caveats: The initialization sequence after reset (e.g. power up) is a critical phase for the LIN transceiver driver. The driver will use SPAL functionality (DIO) to access the transceiver hardware. Therefore all necessary BSW drivers must be initialized and usable before.

### 39. LinTrcv_SetOpMode

Definition of API function `LinTrcv_SetOpMode`
  Upstream requirements: , , , , ,
⌈
| Service Name | LinTrcv_SetOpMode | < |
|---|---|---|
| Syntax | Std_ReturnType LinTrcv_SetOpMode ( |  |

  uint8 LinNetwork,
  `LinTrcv_TrcvModeType` OpMode
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | LinNetwork | LIN network to wich API call has to be applied |
| ^ | OpMode | The parameter says to which operation mode the change shall be performed. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: will be returned if the transceiver state has been changed to the requested mode. |

E_NOT_OK: will be returned if the transceiver state change is not accepted or has failed or the parameter is out of the allowed range.
| Description | The internal state of the LIN transceiver driver is switched to mode given in the parameter OpMode. | < |
|---|---|---|
| Available via | LinTrcv.h | < |

⌋

⌈
The function `LinTrcv_SetOpMode` shall switch the internal state of channel LinNetwork to the value of the parameter OpMode which can be `LINTRCV_TRCV_MODE_NORMAL`, `LINTRCV_TRCV_MODE_STANDBY` or `LINTRCV_TRCV_MODE_SLEEP`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. LinTrcv_GetOpMode

Definition of API function `LinTrcv_GetOpMode`
  Upstream requirements: , ,
⌈
| Service Name | LinTrcv_GetOpMode | < |
|---|---|---|
| Syntax | Std_ReturnType LinTrcv_GetOpMode ( |  |

  uint8 LinNetwork,
  `LinTrcv_TrcvModeType`* OpMode
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | LinNetwork | LIN network to which API call has to be applied |
| Parameters (inout) | None | < |
| Parameters (out) | OpMode | Pointer to operation mode of the bus the API is applied to. |
| Return value | Std_ReturnType | E_OK: will be returned if the operation mode is detected |

E_NOT_OK: will be returned, if service request is failed due to operation mode is not detected.
| Description | API detects the actual software state of LIN transceiver driver. | < |
|---|---|---|
| Available via | LinTrcv.h | < |

⌋

⌈
The function `LinTrcv_GetOpMode` shall return the actual state of the LIN transceiver driver in the parameter OpMode.
⌋

⌈
If there is no / incorrect communication to the transceiver, the function `LinTrcv_GetOpMode` shall return E_NOT_OK.
⌋

⌈
If development error detection for the module LinTrcv is enabled:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. LinTrcv_GetBusWuReason

Definition of API function `LinTrcv_GetBusWuReason`
  Upstream requirements: , , ,
⌈
| Service Name | LinTrcv_GetBusWuReason | < |
|---|---|---|
| Syntax | Std_ReturnType LinTrcv_GetBusWuReason ( |  |

  uint8 LinNetwork,
  `LinTrcv_TrcvWakeupReasonType`* Reason
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | LinNetwork | LIN network to which API call has to be applied |
| Parameters (inout) | None | < |
| Parameters (out) | Reason | Pointer to wakeup reason of the bus the API is applied to. |
| Return value | Std_ReturnType | E_OK: will be returned if the wake up reason is detected |

E_NOT_OK: will be returned, if service request is failed due to wakeup reason is not detected.
| Description | This API provides the reason for the wakeup that the LIN transceiver has detected in the parameter "Reason". The ability to detect and differentiate the possible wakeup reasons depends strongly on the LIN transceiver hardware. | < |
|---|---|---|
| Available via | LinTrcv.h | < |

⌋

⌈
The function `LinTrcv_GetBusWuReason` shall return the reason for the wake up that the LIN transceiver has detected in the parameter Reason.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. LinTrcv_CheckWakeup

Definition of callback function `LinTrcv_CheckWakeup`
  Upstream requirements: , , ,
⌈
| Service Name | LinTrcv_CheckWakeup | < |
|---|---|---|
| Syntax | Std_ReturnType LinTrcv_CheckWakeup ( |  |

  uint8 LinNetwork
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | LinNetwork | LIN network to which API call has to be applied. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: API call has been accepted E_NOT_OK: API call has not been accepted |
| Description | Notifies the calling function if a wakeup is detected. | < |
| Available via | LinTrcv.h | < |

⌋

⌈
If development error detection for the module LinTrcv is enabled:

If called before the LinTrcv module has been initialized, the function `LinTrcv_CheckWakeup` shall report the development error `LINTRCV_E_UNINIT`.
⌋

⌈
If development error detection for the module LinTrcv is enabled:

If called with an invalid network number LinNetwork, the function `LinTrcv_CheckWakeup` shall report the development error `LINTRCV_E_INVALID_LIN_NETWORK`.
⌋

⌈
The function `LinTrcv_CheckWakeup` shall evaluate the wakeup on the addressed LIN network.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. LinTrcv_SetWakeupMode

Definition of API function `LinTrcv_SetWakeupMode`
⌈
| Service Name | LinTrcv_SetWakeupMode | < |
|---|---|---|
| Syntax | Std_ReturnType LinTrcv_SetWakeupMode ( |  |

  uint8 LINNetwork,
  `LinTrcv_TrcvWakeupModeType` TrcvWakupMode
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | non Reentrant | < |
| Parameters (in) | LINNetwork | LIN network to which API call has to be applied |
| ^ | TrcvWakupMode | Requested transceiver wakup reason. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK will be returned if the transceiver state has been changed to the requested mode. |

E_NOT_OK will be returned, if service request is failed due to wakeup mode is not set.
| Description | This API enables, disables and clears the notification for wakeup events on the addressed network. | < |
|---|---|---|
| Available via | LinTrcv.h | < |

⌋

⌈
Enabled: If the function `LinTrcv_SetWakeupMode` is called with TrcvWakupMode == `LINTRCV_WUMODE_ENABLE` and if the LinTrcv module has a stored wakeup event pending for the addressed bus, the LinTrcv module shall execute the notification within the API call or immediately after (depending on the implementation).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Scheduled functions

This chapter lists all functions provided by the LinTrcv module and called directly by the Basic Software Module Scheduler. There are no cyclical called functions provided by LIN Transceiver Driver.

### 45. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 46. Mandatory 接口
*原文标题：Mandatory interfaces*

This section defines all interfaces, which are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module LinTrcv
⌈
| API Function | Header File | Description |
|---|---|---|
| LinIf_WakeupConfirmation | LinIf.h | The LIN Driver or LIN Transceiver Driver will call this function to report the wake up source after the successful wakeup detection during CheckWakeup or after power on by bus. |

⌋

### 47. Optional 接口
*原文标题：Optional interfaces*

This chapter defines all interfaces which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module LinTrcv
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |
| Dio_ReadChannel | Dio.h | Returns the value of the specified DIO channel. |
| Dio_ReadChannelGroup | Dio.h | This Service reads a subset of the adjoining bits of a port. |
| Dio_ReadPort | Dio.h | Returns the level of all channels of that port. |
| Dio_WriteChannel | Dio.h | Service to set a level of a channel. |
| Dio_WriteChannelGroup | Dio.h | Service to set a subset of the adjoining bits of a port to a specified level. |
| Dio_WritePort | Dio.h | Service to set a value of the port. |
| EcuM_SetWakeupEvent | EcuM.h | Sets the wakeup event. |
| Icu_DisableNotification | Icu.h | This function disables the notification of a channel. |
| Icu_EnableNotification | Icu.h | This function enables the notification on the given channel. |
| Spi_GetStatus | Spi.h | Service returns the SPI Handler/Driver software module status. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 29 章（内容从略，见纯文本全文）

48. Configurable 接口
49. 时序图
50. 配置规范
51. How to read this chapter
52. Containers and 配置 parameters
53. Variants
54. LinTrcv
55. LinTrcvGeneral
56. LinTrcvChannel
57. LinTrcvAccess
58. LinTrcvDioAccess
59. LinTrcvDioChannelAccess
60. LinTrcvSpiSequence
61. 发布信息
62. 附录
63. 不适用需求
64. Change history of AUTOSAR traceable items
65. Traceable item history of this document according to AUTOSAR Release R24-11
66. Added 规范 Items in R24-11
67. Changed 规范 Items in R24-11
68. Deleted 规范 Items in R24-11
69. Traceable item history of this document according to AUTOSAR Release R25-11
70. Added 规范 Items in R25-11
71. Changed 规范 Items in R25-11
72. Deleted 规范 Items in R25-11
73. Traceable item history of this document according to AUTOSAR Release R26-11
74. Added 规范 Items in R26-11
75. Changed 规范 Items in R26-11
76. Deleted 规范 Items in R26-11
