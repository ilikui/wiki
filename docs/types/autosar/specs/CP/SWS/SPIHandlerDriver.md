# Specification of SPI Handler/Driver (`SPIHandlerDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 038 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SPIHandlerDriver_038\AUTOSAR_CP_SWS_SPIHandlerDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SPIHandlerDriver_038\AUTOSAR_CP_SWS_SPIHandlerDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SPIHandlerDriver_038\zzgen\CP_SWS_SPIHandlerDriver.complete.txt`

## 文档简介

The SPI Handler/Driver provides services for reading from and writing to devices connected via SPI busses. It provides access to SPI communication to several users (e.g. EEPROM, Watchdog, I/O ASICs). It also provides the required mechanism to configure the onchip SPI peripheral.

This specification describes the API for a monolithic SPI Handler/Driver. This software module includes handling and driving functionalities. Main objectives of this monolithic SPI Handler/Driver are to take the best of each microcontroller features and to allow implementation optimization depending on static configuration to fit as much as possible to ECU needs.

Hence, this specification defines selectable levels of functionalities and configurable features to allow the design of a high scalable module that exploits the peculiarities of the microcontroller.

To configure the SPI Handler/Driver these steps shall be followed:

* SPI Handler/Driver Level of Functionality shall be selected and optional features configured.
* SPI Channels shall be defined according to data usage, and they could be buffered inside the SPI Handler/Driver (IB) or provided by the user (EB).
* SPI Jobs shall be defined according to HW properties (CS), and they will contain a list of channels using those properties.
* As a final step, Sequences of Jobs shall be defined, in order to transmit data in a sorted way (priority sorted).

The SPI Handler/Driver can transmit data frames in asynchronous or synchronous way according to the API function called and the level of functionality selected.

The specification covers the Handler/Driver functionality combined in one single module. One is the SPI handling part that handles multiple access to busses that could be located in the ECU Abstraction layer. The other part is the SPI driver that accesses the microcontroller hardware directly that could be located in the Microcontroller Abstraction layer.

## 模块依赖

⌈
The SPI Handler/Driver module does not take care of setting the registers which configure the clock, prescaler(s) and PLL in its init function. This has to be done by the MCU module .
⌋

Note: SPI peripherals may depend on the system clock, prescaler(s) and PLL. Thus, any change of the system clock (e.g. PLL on / PLL off / clock dividers) may also affect the clock settings of the SPI hardware.

⌈
Depending on microcontrollers, the SPI peripheral could share registers with other peripherals. In this typical case, the SPI Handler/Driver has a relationship with MCU module  for initialising and de-initialising those registers.
⌋

⌈
If Chip Selects are done using microcontroller pins the SPI Handler/Driver has a relationship with PORT module . In this case, this specification assumes that these microcontroller pins are directly accessed by the SPI Handler/Driver module without using APIs of DIO module.

Anyhow, the SPI depends on ECU hardware design and for that reason it may depend on other modules.
⌋

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The SPI Handler/Driver provides services for reading from and writing to devices connected via SPI busses. It provides access to SPI communication to several users (e.g. EEPROM, Watchdog, I/O ASICs). It also provides the required mechanism to configure the onchip SPI peripheral.

This specification describes the API for a monolithic SPI Handler/Driver. This software module includes handling and driving functionalities. Main objectives of this monolithic SPI Handler/Driver are to take the best of each microcontroller features and to allow implementation optimization depending on static configuration to fit as much as possible to ECU needs.

Hence, this specification defines selectable levels of functionalities and configurable features to allow the design of a high scalable module that exploits the peculiarities of the microcontroller.

To configure the SPI Handler/Driver these steps shall be followed:

* SPI Handler/Driver Level of Functionality shall be selected and optional features configured.
* SPI Channels shall be defined according to data usage, and they could be buffered inside the SPI Handler/Driver (IB) or provided by the user (EB).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the SPI Handler/Driver module that are not included in the .

| Acronym: | Description: |
|---|---|
| DET | Default Error Tracer - module to which errors are reported. |
| DEM | Diagnostic Event Manager - module to which production relevant errors are reported. |
| SPI | Serial Peripheral Interface. It is exactly defined hereafter in this document. |
| CS | Chip Select |
| MISO | Master Input Slave Output |
| MOSI | Master Output Slave Input |

| Abbreviation: | Description: |
|---|---|
| EB | Externally buffered channels. Buffers containing data to transfer are outside the SPI Handler/Driver. |
| IB | Internally buffered channels. Buffers containing data to transfer are inside the SPI Handler/Driver. |
| ID | Identification Number of an element (Channel, Job, Sequence). |

| Definition: | Description: |
|---|---|
| Channel | A Channel is a software exchange medium for data that are defined with the same criteria: Config. Parameters, Number of Data elements with same size and data pointers (Source & Destination) or location. |
| Job | A Job is composed of one or several Channels with the same Chip Select (one chip select = one external device). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for SPI Handler/Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for SPI Handler/Driver.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

⌈
The SPI Handler/Driver handles only the Master mode.
⌋

⌈
The SPI Handler/Driver only supports full-duplex mode.
⌋

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

⌈
The SPI Handler/Driver module does not take care of setting the registers which configure the clock, prescaler(s) and PLL in its init function. This has to be done by the MCU module .
⌋

Note: SPI peripherals may depend on the system clock, prescaler(s) and PLL. Thus, any change of the system clock (e.g. PLL on / PLL off / clock dividers) may also affect the clock settings of the SPI hardware.

⌈
Depending on microcontrollers, the SPI peripheral could share registers with other peripherals. In this typical case, the SPI Handler/Driver has a relationship with MCU module  for initialising and de-initialising those registers.
⌋

⌈
If Chip Selects are done using microcontroller pins the SPI Handler/Driver has a relationship with PORT module . In this case, this specification assumes that these microcontroller pins are directly accessed by the SPI Handler/Driver module without using APIs of DIO module.

Anyhow, the SPI depends on ECU hardware design and for that reason it may depend on other modules.
⌋

### 10. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| Status values naming convention |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| Callback Function Return Types for AUTOSAR BSW |  |  |
| AUTOSAR Basic Software Modules callback functions are allowed to have parameters |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| List possible error notifications |  |  |
| BSW Modules shall support multiple configuration sets |  |  |
| API handling in uninitialized state |  |  |
| Classification of production errors |  |  |
| All drivers and handlers of the AUTOSAR Basic Software shall implement notification mechanisms of drivers and handl |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能规范
*原文标题：Functional specification*

The SPI (Serial Peripheral Interface) has a 4-wire synchronous serial interface. Data communication is enabled with a Chip select wire (CS). Data is transmitted with a 3-wire interface consisting of wires for serial data output (MOSI), serial data input (MISO) and serial clock (CLOCK).

### 12. Overall 视图 of functionalities and features
*原文标题：Overall view of functionalities and features*

This specification is based on previous specification experiences and also based on predominant identified use cases. The intention of this section is to summarize how the scalability of this monolithic SPI Handler/Driver allows getting a simple software module that fits simple needs up to a smart software module that fits enhanced needs.

This document specifies the following 3 Levels of Scalable Functionality for the SPI Handler/Driver:

* the communication is based on synchronous handling (using polling mechanism) and with a FIFO policy to handle multiple accesses. Buffer usage is configurable to optimize and/or to take advantage of HW capabilities.
* the communication is based on asynchronous behavior (using either interrupts or polling mechanism selectable during execution time) and with a Priority policy to handle multiple accesses. Buffer usage is configurable as for "Simple Synchronous" level.
* the communication is based on asynchronous behavior (using either interrupts or polling mechanism selectable during execution time), or synchronous handling, and with a Priority policy to handle multiple accesses. Buffer usage is configurable as for other levels.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 通用行为
*原文标题：General behaviour*

This chapter, on the one hand, introduces common behavior and configuration for all levels. On the other, it specifies the behavior of each level and also the allowed optional features.

  Upstream requirements:
⌈
The SPI Handler/Driver interface configuration shall be based on Channels, Jobs and Sequences as defined in this document.
⌋

  Upstream requirements: , ,
⌈
The SPI Handler/Driver shall support one or more Channels, Jobs and Sequences to drive all kind of SPI compatible HW devices.
⌋

⌈
Data transmissions shall be done according to Channels, Jobs and Sequences configuration parameters.
⌋

  Upstream requirements: , , ,
⌈
The Chip Select (CS) is attached to the Job definition.
⌋

⌈
Chip Select shall be handled during Job transmission and shall be released at the end of it. This Chip Select handling shall be done according to the Job configuration parameters.
⌋

⌈
It shall be possible to define if the Chip Select handling is managed autonomously by the HW peripheral, without explicit chip select control by the driver, or the SPI driver shall drive the chip select lines explicitly as DIO (see ).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Common configurable feature：Allowed Channel Buffers
*原文标题：Common configurable feature: Allowed Channel Buffers*

In order to allow taking advantages of all microcontroller capabilities but also to allow sending/receiving of data to/from a dedicated memory location, all levels have an optional feature with respect to the location of Channel Buffers.

Hence, two main kinds of channel buffering can be used by configuration:

* Internally buffered Channels (IB): The buffer to transmit/receive data is provided by the Handler/Driver.
* Externally buffered Channels (EB): The buffer to transmit/receive is provided by the user (statically and/or dynamically).

Both channel buffering methods may be used depending on the 3 use cases described below:

* Usage 0: the SPI Handler/Driver manages only Internal Buffers.
* Usage 1: the SPI Handler/Driver manages only External Buffers.
* Usage 2: the SPI Handler/Driver manages both buffers types.

  Upstream requirements:
⌈
The SpiChannelBuffersAllowed parameter shall be configured with one of the 3 authorized values (0, 1 or 2) according to the described usage.
⌋

⌈
The SpiChannelBuffersAllowed parameter shall be configured to select which Channel Buffers the SPI Handler/Driver manages.
⌋

### 15. 行为 of IB channels
*原文标题：Behaviour of IB channels*

The intention of Internal Buffer channels is to take advantage of microcontrollers including this feature by hardware. Otherwise, this feature should be simulated by software.

  Upstream requirements: ,
⌈
For the IB Channels, the Handler/Driver shall provide the buffering but it is not able to take care of the consistency of the data in the buffer during transmission. The size of the Channel buffer is fixed.
⌋

⌈
The channel data received shall be stored in 1 entry deep internal buffers by channel. The SPI Handler/Driver shall not take care of the overwriting of these "receive" buffers by another transmission on the same channel.
⌋

⌈
The channel data to be transmitted shall be copied in 1 entry deep internal buffers by channel.
⌋

⌈
The SPI Handler/Driver is not able to prevent the overwriting of these "transmit" buffers by users during transmissions.
⌋

⌈
The Handler/Driver shall provide separate buffer for receive and transmit to ensure that transmitted data are not overwritten by the receive data.
⌋

### 16. 行为 of EB channels
*原文标题：Behaviour of EB channels*

The intention of External Buffer channels is to reuse existing buffers that are located outside. That means the SPI Handler/Driver does not monitor them.

  Upstream requirements: , , , , , , ,
⌈
For EB Channels the application shall provide the buffering and shall take care of the consistency of the data in the buffer during transmission.
⌋

⌈
The size of the Channel buffer is either fixed or variable. A maximum size for the Channel buffer shall be defined by the configuration.
⌋

⌈
The buffer provided by the application for the SPI Handler Driver may have a different size.
⌋

### 17. 缓冲 channel usage
*原文标题：Buffering channel usage*

The following table provides information about the Channel characteristics:

| IB Channels | < |
|---|---|
| It provides ... | * A more abstracted concept (buffering mechanisms are hidden) |

* Actual and future optimal implementation taken profit of HW buffer facilities (Given size of 256 bytes covers nowadays requirements).
| Suggested use ... | * Daisy-chain implementation. |
|---|---|

* Small data transfer devices (up to 10 Bytes).
| EB Channels | < |
|---|---|
| It provides ... | * Efficient mechanism to support large stream communication. |

* Send constant data out of ROM tables and spare RAM size.
* Send various data tables each for a different device (highly complex ASICS with several integrated peripheral devices, also mixed signal types, could exceed IB HW buffer size).
| Suggested use ... | * Large streams communication. |
|---|---|

* EEPROM communication.
* Control of complex HW Chips.

Note: For each channel, the user configures the number of IB buffers (at least 1) if IB is selected for the current channel, or the maximum of data for EB buffers if EB is selected for the current channel.

### 18. LEVEL 0, Simple Synchronous 行为
*原文标题：LEVEL 0, Simple Synchronous behaviour*

The intention of this functionality level is to provide a Handler/Driver with a reduced set of services to handle only simple synchronous transmissions. This is often the case for ECU including simple SPI networks but also for ECU using high speed external devices.

A simple synchronous transmission means that the function calling the transmission service is blocked during the ongoing transmission until the transmission is finished.

⌈
The LEVEL 0 SPI Handler/Driver shall offer a synchronous transfer service for SPI busses.
⌋

⌈
For an SPI Handler/Driver operating in LEVEL 0, when there is no on going Sequence transmission, the SPI Handler/Driver shall be in the idle state `SPI_IDLE`.
⌋

⌈
This monolithic SPI Handler/Driver is able to handle one to n SPI buses according to the microcontroller used.
⌋

Then SPI buses are assigned to Jobs and not to Sequences. Consequently, Jobs, on different SPI buses, could belong to the same Sequence. Therefore:

⌈
The LEVEL 0 SPI Handler/Driver shall accept concurrent `Spi_SyncTransmit`(), if the sequences to be transmitted use different bus and parameter SpiSupportConcurrentSyncTransmit is enabled. This feature shall be disabled per default.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. LEVEL 1, 基础 Asynchronous 行为
*原文标题：LEVEL 1, Basic Asynchronous behavior*

The intention of this functionality level is to provide a Handler/Driver with a reduced set of services to handle asynchronous transmissions only. This is often the case for ECU with functions related to SPI networks having different priorities but also for ECU using low speed external devices.

An asynchronous transmission means that the user calling the transmission service is not blocked when the transmission is on-going. Furthermore, the user can be notified at the end of transmission.

Usually, depending on software design, asynchronous end transmission may be detected by polling or interrupt mechanisms. This level of functionality proposes both mechanisms that are selectable during execution time.

⌈
Both the polling mechanism and interrupt mechanism modes for SPI busses shall be selectable during execution time (see ).
⌋

  Upstream requirements: , ,
⌈
The LEVEL 1 SPI Handler/Driver shall offer an asynchronous transfer service for SPI buses. An asynchronous transmission means that the user calling the transmission service is not blocked when the transmission is on going.
⌋

⌈
The LEVEL 1 SPI Handler/Driver shall offer an asynchronous transfer service for SPI buses.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Asynchronous configurable feature：Interruptible Sequences
*原文标题：Asynchronous configurable feature: Interruptible Sequences*

In order to allow taking advantages of asynchronous transmission mechanism, level 1 and level 2 of this SPI Handler/Driver have an optional feature with respect to suspending the transmission of Sequences.

Hence two main kinds of sequences can be used by configuration:

* Non-Interruptible Sequences, every Sequence transmission started is not suspended by the Handler/Driver until the end of transmission.
* Mixed Sequences, according to its configuration, a Sequence transmission started may be suspended by the Handler/Driver between two of their consecutives Jobs.

  Upstream requirements:
⌈
The SPI Handler/Driver's environment shall configure the SpiInterruptibleSeqAllowed parameter (ON / OFF) in order to select which kind of Sequences the SPI Handler/Driver manages.
⌋

### 21. 行为 of Non-Interruptible Sequences
*原文标题：Behavior of Non-Interruptible Sequences*

The intention of the Non-Interruptible Sequences feature is to provide a simple software module based on a basic asynchronous mechanism, if only non blocking transmissions should be used.

  Upstream requirements:
⌈
Interruptible Sequences are not allowed within levels 1 and 2 of the SPI/Handler/Driver when the SpiInterruptibleSeqAllowed parameter is switched off (i.e. configured with value "OFF").
⌋

⌈
When the SPI Handler/Driver is configured not allowing interruptible Sequences, all Sequences declared are considered as Non-Interruptible Sequences.
⌋

⌈
When the SPI Handler/Driver is configured not allowing interruptible Sequences their dedicated parameter SpiInterruptibleSequence can be omitted or the FALSE value should be used as default.
⌋

  Upstream requirements:
⌈
According to  and  requirements, the SPI Handler/Driver is not allowed to suspend a Sequence transmission already started in favour of another Sequence.
⌋

### 22. 行为 of Mixed Sequences
*原文标题：Behavior of Mixed Sequences*

The intention of the Mixed Sequences feature is to provide a software module with specific asynchronous mechanisms, if, for instance, very long Sequences that could or should be suspended by others with higher priority are used.

  Upstream requirements:
⌈
Interruptible Sequences are allowed within levels 1 and 2 of SPI Handler/Driver when the SpiInterruptibleSeqAllowed parameter is switched on (i.e. configured with value "ON").
⌋

⌈
When the SPI Handler/Driver is configured allowing interruptible Sequences, all Sequences declared shall have their dedicated parameter SpiInterruptibleSequence (see ) to identify whether the Sequence can be suspended during transmission.
⌋

  Upstream requirements: ,
⌈
In case of a Sequence configured as Interruptible Sequence and according to  requirement, the SPI Handler/Driver is allowed to suspend an already started Sequence transmission in favour of another Sequence with a higher priority Job (see  & ). That means, at the end of a Job transmission (that belongs to the interruptible sequence) with another Sequence transmit request pending, the SPI Handler/Driver shall perform a rescheduling in order to elect the next Job to transmit.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. LEVEL 2, Enhanced 行为
*原文标题：LEVEL 2, Enhanced behaviour*

The intention of this functionality level is to provide a Handler/Driver with a complete set of services to handle synchronous and asynchronous transmissions. This could be the case for ECU with a lot of functions related to SPI networks having different priorities but also for ECU using external devices with different speeds.

Usually, depending on software design, asynchronous end transmission may be detected by polling or interrupt mechanisms. This level of functionality proposes both mechanisms that are selectable during execution time.

The requirements from LEVEL 0 apply to synchronous behaviour.

The requirements from LEVEL 1 apply to asynchronous behaviour.

⌈
The LEVEL 2 SPI Handler/Driver shall offer both an asynchronous transfer service and a synchronous transfer service for SPI buses.
⌋

⌈
In LEVEL 2 if there is no on going Sequence transmission, the SPI Handler/Driver shall be in idle state (`SPI_IDLE`).
⌋

### 24. 调度 Advices
*原文标题：Scheduling Advices*

For asynchronous levels, LEVEL 1 and LEVEL 2, the SPI Handler/Driver can call end notification functions at the end of a Job and/or Sequence transmission (see ). In a second time, in case of interruptible Sequences (that could be suspended), if another Sequence transmit request is pending, a rescheduling is also done by the SPI Handler/Driver in order to elect the next Job to transmit (see ).

⌈
For asynchronous levels, LEVEL 1 and LEVEL 2, the SPI Handler/Driver can call end notification functions at the end of a Job.
⌋

⌈
For asynchronous levels, LEVEL 1 and LEVEL 2, the SPI Handler/Driver can call end notification functions at the end of a Sequence transmission.
⌋

⌈
For asynchronous levels, LEVEL 1 and LEVEL 2 in case of interruptible Sequences, if another Sequence transmit request is pending, a rescheduling is also done by the SPI Handler/Driver in order to elect the next Job to transmit.
⌋

⌈
In case call end notification function and rescheduling are fully done by software, the order between these shall be first scheduling and then the call of end notification function executed.
⌋

### 25. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 26. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Spi
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called with wrong channel | SPI_E_PARAM_CHANNEL | 0x0A |
| API service called with wrong job | SPI_E_PARAM_JOB | 0x0B |
| API service called with wrong sequence | SPI_E_PARAM_SEQ | 0x0C |
| API service called with wrong lenghth for EB | SPI_E_PARAM_LENGTH | 0x0D |
| API service called with wrong hardware unit | SPI_E_PARAM_UNIT | 0x0E |
| APIs called with an unexpected value for the pointer | SPI_E_PARAM_POINTER | 0x10 |
| API service used without module initialization | SPI_E_UNINIT | 0x1A |
| API SPI_Init service called while the SPI driver has been already initialized | SPI_E_ALREADY_INITIALIZED | 0x4A |

⌋

### 27. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Spi
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API Spi_AsyncTransmit service called in a wrong order | SPI_E_SEQ_PENDING | 0x2A |
| API Spi_SyncTransmit service called at wrong time | SPI_E_SEQ_IN_PROCESS | 0x3A |

⌋

### 28. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 29. Extended Production 错误
*原文标题：Extended Production Errors*

### 30. SPI_E_HARDWARE_ERROR

A hardware error occurred during asynchronous or synchronous SPI transmit.
  Upstream requirements:
⌈
| Diagnostic Event (Error Name) | SPI_E_HARDWARE_ERROR |
|---|---|
| Description | This Extended Production Error shall be issued when any error bit inside the SPI hardware transmit status register is raised. |
| Failed condition | The SPI transmit status register information shall be reported to DEM as Dem_SetEventStatus (SPI_E_HARDWARE_ERROR, DEM_EVENT_STATUS_FAILED) when any error bit inside the SPI transmit status register is set.(). |
| Passed condition | The SPI transmit status register information shall be reported to DEM as Dem_SetEventStatus (SPI_E_HARDWARE_ERROR, DEM_EVENT_STATUS_PASSED) when no error bit inside the SPI transmit status register is set.(). |

⌋

⌈
When any error bit inside the SPI transmit status register is set, the SPI transmit status register information shall be reported to DEM as `Dem_SetEventStatus` (`SPI_E_HARDWARE_ERROR`, `DEM_EVENT_STATUS_FAILED`).
⌋

⌈
When no error bit inside the SPI transmit status register is set, the SPI transmit status register information shall be reported to DEM as `Dem_SetEventStatus` (`SPI_E_HARDWARE_ERROR`, `DEM_EVENT_STATUS_PASSED`).
⌋

### 31. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 32. API 规范
*原文标题：API specification*

### 33. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Spi
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 34. 类型定义
*原文标题：Type definitions*

### 35. Spi_ConfigType

Definition of datatype `Spi_ConfigType`
⌈
| Name | Spi_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Implementation Specific | < |
| ^ | Type | - |
| ^ | Comment | The contents of the initialization data structure are SPI specific. |
| Description | This type of the external data structure shall contain the initialization data for the SPI Handler/Driver. | < |
| Available via | Spi.h | < |

⌋

### 36. Spi_StatusType

Definition of datatype `Spi_StatusType`
  Upstream requirements: ,
⌈
| Name | Spi_StatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | SPI_UNINIT | 0x00 | The SPI Handler/Driver is not initialized or not usable. |
| ^ | SPI_IDLE | 0x01 | The SPI Handler/Driver is not currently transmitting any Job. |
| ^ | SPI_BUSY | 0x02 | The SPI Handler/Driver is performing a SPI Job (transmit). |
| Description | This type defines a range of specific status for SPI Handler/Driver. | < | < |
| Available via | Spi.h | < | < |

⌋

  Upstream requirements:
⌈
The type `Spi_StatusType` defines a range of specific status for SPI Handler/Driver. It informs about the SPI Handler/Driver status or specified SPI Hardware microcontroller peripheral.
⌋

⌈
The type `Spi_StatusType` can be obtained calling the API service `Spi_GetStatus`.
⌋

⌈
The type `Spi_StatusType` can be obtained calling the API service `Spi_GetHWUnitStatus`.
⌋

⌈
After reset, the type `Spi_StatusType` shall have the default value `SPI_UNINIT`.
⌋

⌈
API service `Spi_GetStatus` shall return `SPI_UNINIT` when the SPI Handler/Driver is not initialized or not usable.
⌋

⌈
API service `Spi_GetStatus` shall return `SPI_IDLE` when The SPI Handler/Driver is not currently transmitting any Job.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Spi_JobResultType

Definition of datatype `Spi_JobResultType`
⌈
| Name | Spi_JobResultType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | SPI_JOB_OK | 0x00 | The last transmission of the Job has been finished successfully. |
| ^ | SPI_JOB_PENDING | 0x01 | The SPI Handler/Driver is performing a SPI Job. The meaning of this status is equal to SPI_BUSY. |
| ^ | SPI_JOB_FAILED | 0x02 | The last transmission of the Job has failed. |
| ^ | SPI_JOB_QUEUED | 0x03 | An asynchronous transmit Job has been accepted, while actual transmission for this Job has not started yet. |
| Description | This type defines a range of specific Jobs status for SPI Handler/Driver. | < | < |
| Available via | Spi.h | < | < |

⌋

  Upstream requirements:
⌈
The type `Spi_JobResultType` defines a range of specific Jobs status for SPI Handler/Driver.
⌋

⌈
The type `Spi_JobResultType` it informs about a SPI Handler/Driver Job status and can be obtained calling the API service `Spi_GetJobResult` with the Job ID.
⌋

⌈
After reset, the type `Spi_JobResultType` shall have the default value `SPI_JOB_OK`.
⌋

⌈
The function `Spi_GetJobResult` shall return `SPI_JOB_OK` when the last transmission of the Job has been finished successfully.
⌋

### 38. Spi_SeqResultType

Definition of datatype `Spi_SeqResultType`
⌈
| Name | Spi_SeqResultType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | SPI_SEQ_OK | 0x00 | The last transmission of the Sequence has been finished successfully. |
| ^ | SPI_SEQ_PENDING | 0x01 | The SPI Handler/Driver is performing a SPI Sequence. The meaning of this status is equal to SPI_BUSY. |
| ^ | SPI_SEQ_FAILED | 0x02 | The last transmission of the Sequence has failed. |
| ^ | SPI_SEQ_CANCELED | 0x03 | The last transmission of the Sequence has been canceled by user. |
| Description | This type defines a range of specific Sequences status for SPI Handler/Driver. | < | < |
| Available via | Spi.h | < | < |

⌋

⌈
The type `Spi_SeqResultType` defines a range of specific Sequences status for SPI Handler/Driver and can be obtained calling the API service `Spi_GetSequenceResult`, it shall be provided for external use.
⌋

  Upstream requirements:
⌈
The type `Spi_SeqResultType` defines the range of specific Sequences status for SPI Handler/Driver.
⌋

⌈
The type `Spi_SeqResultType` defines about SPI Handler/Driver Sequence status and can be obtained calling the API service `Spi_GetSequenceResult` with the Sequence ID.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 79 章（内容从略，见纯文本全文）

39. Spi_DataBufferType
40. Spi_NumberOfDataType
41. Spi_ChannelType
42. Spi_JobType
43. Spi_SequenceType
44. Spi_HWUnitType
45. Spi_AsyncModeType
46. 功能定义
47. Spi_Init
48. Spi_DeInit
49. Spi_WriteIB
50. Spi_AsyncTransmit
51. Spi_ReadIB
52. Spi_SetupEB
53. Spi_GetStatus
54. Spi_GetJobResult
55. Spi_GetSequenceResult
56. Spi_GetVersionInfo
57. Spi_SyncTransmit
58. Spi_GetHWUnitStatus
59. Spi_Cancel
60. Spi_SetAsyncMode
61. Callback 通知
62. Scheduled functions
63. Spi_MainFunction_Handling
64. Expected 接口
65. Mandatory 接口
66. Optional 接口
67. Configurable 接口
68. Spi_JobEndNotification
69. Spi_SeqEndNotification
70. 错误检测
71. API parameter checking
72. SPI 状态 checking
73. SPI runtime checking
74. 时序图
75. 初始化
76. Modes transitions
77. Write/AsyncTransmit/Read (IB)
78. One Channel, one Job then one Sequence
79. Many Channels, one Job then one Sequence
80. Many Channels, many Jobs and one Sequence
81. Many Channels, many Jobs and many Sequences
82. Setup/AsyncTransmit (EB)
83. Variable Number of 数据 / Constant Number of 数据
84. One Channel, one Job then one Sequence
85. Many Channels, one Job then one Sequence
86. Many Channels, many Jobs and one Sequence
87. Many Channels, many Jobs and many Sequences
88. Mixed Jobs Transmission
89. LEVEL 0 SyncTransmit diagrams
90. Write/SyncTransmit/Read (IB)：Many Channels, many Jobs and one Sequence
91. Setup/SyncTransmit (EB)：Many Channels, many Jobs and one Sequence
92. 配置规范
93. How to read this chapter
94. Containers and 配置 parameters
95. Spi
96. SpiDemEventParameterRefs
97. SpiGeneral
98. SpiSequence
99. SpiChannel
100. SpiChannelList
101. SpiJob
102. SpiExternalDevice
103. SpiDriver
104. SpiPublishedInformation
105. 发布信息
106. 配置 concept
107. 附录
108. 不适用需求
109. 附录
110. Change history of AUTOSAR traceable items
111. Traceable item history of this document according to AUTOSAR Release R25-11
112. Added 规范 Items in R25-11
113. Changed 规范 Items in R25-11
114. Deleted 规范 Items in R25-11
115. Added Constraints in R25-11
116. Changed Constraints in R25-11
117. Deleted Constraints in R25-11
