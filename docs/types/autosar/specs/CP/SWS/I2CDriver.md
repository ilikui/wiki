# Specification of I2C Driver (`I2CDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1101 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_I2CDriver_1101\AUTOSAR_CP_SWS_I2CDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_I2CDriver_1101\AUTOSAR_CP_SWS_I2CDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_I2CDriver_1101\zzgen\CP_SWS_I2CDriver.complete.txt`

## 文档简介

The I2C Driver provides services for reading from and writing to devices connected via I2C buses. It provides access to I2C communication to several Targets (e.g. EEPROM).

This specification describes the functionality, API and the configuration of the module I2C Driver.

The I2C Driver implements Controller mode and Target mode. The Driver offers a hardware independent API to the upper layer that can be used to configure the I2C and initiate synchronous and asynchronous data transfers. Hardware and software settings can be configured using an AUTOSAR standard configuration tool. The information required for an I2C data transfer will be configured in a data structure that will be sent as parameter to the API of the Driver. The Driver reports errors to the error manager as defined in AUTOSAR.

To configure the I2C Driver these steps shall be followed:

* I2C Jobs shall be defined according to data usage provided by the user (EB).
* I2C Sequences consisting of multiple Jobs shall be defined in order to transmit data in a sorted way.

The driver supports multi master mode.

## 模块依赖

The I2C Driver module does not take care of setting the registers which configure the clock, prescaler(s) and PLL in its init function. This has to be done by the MCU module .

Note: I2C peripherals may depend on the system clock, prescaler(s) and PLL. Thus, any change of the system clock (e.g. PLL on / PLL off / clock dividers) may also affect the clock settings of the I2C hardware.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The I2C Driver provides services for reading from and writing to devices connected via I2C buses. It provides access to I2C communication to several Targets (e.g. EEPROM).

This specification describes the functionality, API and the configuration of the module I2C Driver.

The I2C Driver implements Controller mode and Target mode. The Driver offers a hardware independent API to the upper layer that can be used to configure the I2C and initiate synchronous and asynchronous data transfers. Hardware and software settings can be configured using an AUTOSAR standard configuration tool. The information required for an I2C data transfer will be configured in a data structure that will be sent as parameter to the API of the Driver. The Driver reports errors to the error manager as defined in AUTOSAR.

To configure the I2C Driver these steps shall be followed:

* I2C Jobs shall be defined according to data usage provided by the user (EB).
* I2C Sequences consisting of multiple Jobs shall be defined in order to transmit data in a sorted way.

The driver supports multi master mode.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the I2C Driver module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Controller | A device controlling other devices (Targets). Further it initiates a transfer, generates clock signals and terminates a transfer. |

Formerly known as "Master".
| Rx | Reception (in the context of bus communication) |
|---|---|
| SCL | Serial Clock |
| SDA | Serial Data |
| Target | A device being addressed by a Controller device. |

Formerly known as "Slave".
| TX | Transmission (in the context of bus communication) |
|---|---|
| Sequence | A Sequence is a number of consecutive Jobs to transmit. |
| Job | A Job is a software exchange medium for data that are defined with the same criteria: Config. Parameters, Number of Data elements with the same size and data pointers. Jobs can be shared between different Sequences. |
| Request Queue | A request queue queues only the transmission request without the data itself. |
| active request | An active request is an ongoing transmission. |
| pending request | An pending request is a queued transmission request. |
| EB | Externally buffered Jobs. Buffers containing data to transfer are outside the I2C Driver. |

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. Related standards and norms

UM10204 - I2C-bus specification and user manual, NXP Semiconductors, 2021

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for I2C Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for I2C Driver.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

No Limitations.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The I2C Driver module does not take care of setting the registers which configure the clock, prescaler(s) and PLL in its init function. This has to be done by the MCU module .

Note: I2C peripherals may depend on the system clock, prescaler(s) and PLL. Thus, any change of the system clock (e.g. PLL on / PLL off / clock dividers) may also affect the clock settings of the I2C hardware.

### 11. 需求追踪
*原文标题：Requirements Tracing*

| Requirement | Description | Satisfied by |
|---|---|---|
| I2C Driver Transmission Setup |  |  |
| I2C Driver Data Transfer Speeds |  |  |
| I2C Driver Multi Controller Mode |  |  |
| I2C Driver 7-bit and 10-bit Bus Addressing Modes |  |  |
| I2C Driver Queuing Mechanism for Sequences |  |  |
| I2C Driver Support for Asynchronous, Interrupt Driven Transmit/ Read Operations |  |  |
| I2C Driver Support for Synchronous, Non-interrupt Driven Transmit/ Read Operations |  |  |
| I2C Driver Error Handling |  |  |
| I2C Target device support |  |  |
| Independent Treatment of Each Hardware Unit |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Basic SW module shall be able to shutdown |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| BSW Modules shall support multiple configuration sets |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| All drivers and handlers of the AUTOSAR Basic Software shall implement notification mechanisms of drivers and handlers |  |  |
| All driver modules shall implement an interface for initialization |  |  |
| All driver modules shall only initialize the co |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 功能规范
*原文标题：Functional specification*

### 13. Background & Rationale

The I2C Driver is widely used in the automotive industry. Due to the fact that there was no standard for I2C in AUTOSAR, each company developed its own I2C Driver. In consequence the individuality of their interfaces results in incompatibility with drivers from other manufacturers. For instance, drivers for external hardware that use an I2C Driver among themselves may not cooperate with the I2C Drivers of other companies upon delivery. This principle contradicts the AUTOSAR philosophy, which stands for manufacturer-independent components and aims to reduce the constant redevelopment of similar software components. For this reason, an AUTOSAR standard for I2C is beneficial.

### 14. Common 设计需求
*原文标题：Common design requirements*

Arbitration Detection and Handling in Multimaster I2C Mode
  Status: DRAFT
  Upstream requirements:
⌈
If I2CMultiMaster is set, the I2C driver shall implement arbitration detection and handling in compliance with the I2C specification for multimaster mode. During transmission, the master monitors the SDA line and detects if another master is transmitting a dominant bit (logic 0) while it attempts to transmit a recessive bit (logic 1). Upon losing arbitration, the master shall immediately cease transmission and release the bus.
⌋

 Clock Line Monitoring and Synchronization
  Status: DRAFT
  Upstream requirements:
⌈
If I2CMultiMaster is set, the I2C driver shall support clock synchronization by monitoring the SCL line during transmission and respecting clock stretching by other masters or slaves. If the SCL line is held low by another device, the master shall pause its transmission and wait until the line is released (goes high) before proceeding with the next clock cycle.
⌋

 Bus Idle Check Prior to Transmission
  Status: DRAFT
  Upstream requirements:
⌈
If I2CMultiMaster is set, the I2C driver shall verify that the I2C bus is idle before initiating any transmission.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 错误分类
*原文标题：Error Classification*

Chapter   describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 16. Development 错误
*原文标题：Development Errors*

Definition of development errors in module I2C
  Status: DRAFT
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called with wrong parameter | I2C_E_PARAM_JOB | 0x00 |
| API service called with wrong parameter | I2C_E_PARAM_SEQUENCE | 0x01 |
| API service called with an unexpected value for the pointer | I2C_E_PARAM_POINTER | 0x02 |
| API service used without module initialization (see  for more details) | I2C_E_UNINIT | 0x03 |
| API is called under wrong condition | I2C_E_WRONG_CONDITION | 0x04 |
| API is called with unexpected HW unit ID | I2C_E_PARAM_UNIT | 0x05 |

⌋

### 17. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module I2C
  Status: DRAFT
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Error is reported if NACK was received | I2C_E_NACK_RECEIVED | 0x00 |
| Error is reported if the master loses arbitration. This usually happens if the SDA is stuck low or high or another master has won the arbitration procedure. | I2C_E_ARBITRATION_FAILURE | 0x01 |
| Error is reported in case of FIFO overflow | I2C_E_FIFO_HANDLING | 0x02 |

⌋

 Error `I2C_E_FIFO_HANDLING`
  Status: DRAFT
  Upstream requirements:
⌈
In case the I2C hardware supports a FIFO, any FIFO related error shall be reported as Runtime Error as `I2C_E_FIFO_HANDLING`.
⌋

 Error `I2C_E_NACK_RECEIVED`
  Status: DRAFT
  Upstream requirements:
⌈
A NACK error shall be reported as Runtime Error `I2C_E_NACK_RECEIVED`.
⌋

 `I2C_E_ARBITRATION_FAILURE`
  Status: DRAFT
  Upstream requirements:
⌈
A loss in arbitration or the SCL line is stuck low or high it shall be reported as Runtime Error `I2C_E_ARBITRATION_FAILURE`.
⌋

Note: This usually happens if the SDA is stuck low or another Controller has won the arbitration procedure.

### 18. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 19. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 20. API 规范
*原文标题：API specification*

### 21. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module I2C
  Status: DRAFT
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |

⌋

### 22. 类型定义
*原文标题：Type definitions*

### 23. I2C_AddressType

Definition of datatype `I2C_AddressType`
  Status: DRAFT
⌈
| Name | I2C_AddressType (draft) | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint16 | < | < |
| Range | 0..1023 | - | See also I2CDeviceAddress |
| Description | Type to address a Target device which is accessed by the Controller. Values bigger than 0x7F (127) lead to Extended Addressing. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | I2c.h | < | < |

⌋

### 24. I2C_ChannelStatusType

Definition of datatype `I2C_ChannelStatusType`
⌈
| Name | I2C_ChannelStatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | I2C_IDLE | 0x01 | - |
| ^ | I2C_BUSY | 0x02 | - |
| Description | Type to define the range of specific status of I2C HW peripheral. | < | < |
| Available via | I2c.h | < | < |

⌋

### 25. I2C_ChannelType

Definition of datatype `I2C_ChannelType`
  Status: DRAFT
⌈
| Name | I2C_ChannelType (draft) | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Description | Specifies the identification (ID) for a I2C Hardware microcontroller peripheral (unit). |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | I2c.h | < | < |

⌋

### 26. I2C_ConfigType

Definition of datatype `I2C_ConfigType`
  Status: DRAFT
⌈
| Name | I2C_ConfigType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Implementation Specific | < |
| ^ | Type | - |
| ^ | Comment | The contents of the initialization data structure are I2C specific. |
| Description | This type of external data structure shall contain the initialization data for the I2C Driver. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | I2c.h | < |

⌋

### 27. I2C_JobType

Definition of datatype `I2C_JobType`
  Status: DRAFT
⌈
| Name | I2C_JobType (draft) | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Description | This is the type for a Job identifier. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | I2c.h | < | < |

⌋

### 28. I2C_NumberOfDataType

Definition of datatype `I2C_NumberOfDataType`
  Status: DRAFT
⌈
| Name | I2C_NumberOfDataType (draft) | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint16 | < | < |
| Description | Type to define the number of data elements to be sent and / or received during a transmission. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | I2c.h | < | < |

⌋

### 29. I2C_SequenceType

Definition of datatype `I2C_SequenceType`
  Status: DRAFT
⌈
| Name | I2C_SequenceType (draft) | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Description | This is the type for a Sequence identifier. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | I2c.h | < | < |

⌋

### 30. I2C_SequenceResultType

Definition of datatype `I2C_SequenceResultType`
  Status: DRAFT
⌈
| Name | I2C_SequenceResultType (draft) | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | I2C_SEQ_OK | 0x00 | The last transmission of the Sequence has been finished successfully. |
| ^ | I2C_SEQ_PENDING | 0x01 | The I2C Driver is performing an I2C Sequence. The meaning of this status is equal to I2C_BUSY. |
| ^ | I2C_SEQ_QUEUED | 0x02 | An I2C Sequence is queued and waiting to be transmitted. |
| ^ | I2C_SEQ_NACK | 0x03 | An I2C Sequence encountered a NACK signal. |
| ^ | I2C_SEQ_FAILED | 0x04 | The last transmission of the Sequence has failed. |
| Description | This type defines a range of specific Sequences status for the I2C Driver. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | I2c.h | < | < |

⌋

### 31. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 32. I2C_Init

Definition of API function `I2C_Init`
  Status: DRAFT
  Upstream requirements: ,
⌈
| Service Name | I2C_Init (draft) | < |
|---|---|---|
| Syntax | void I2C_Init ( |  |

  const `I2C_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to I2C Driver configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This service initializes the I2C Driver. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | I2c.h | < |

⌋

 Initialzation
  Status: DRAFT
  Upstream requirements: , , , , , , ,
⌈
The function `I2C_Init` shall

* initialize the I2C hardware for each I2CChannel using the I2CChannelBaseAddress and configure the I2CBaudRate accordingly.
* set the Sequences result to `I2C_SEQ_OK` for each I2CSequence.
⌋

A re-initialization of an I2C Driver by executing the `I2C_Init` function requires a deinitialization before by executing an `I2C_DeInit`.

### 33. I2C_DeInit

Definition of API function `I2C_DeInit`
  Status: DRAFT
  Upstream requirements:
⌈
| Service Name | I2C_DeInit (draft) | < |
|---|---|---|
| Syntax | void I2C_DeInit ( |  |

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
| Description | This service de-initializes the I2C Driver. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | I2c.h | < |

⌋

 Deinitialization
  Status: DRAFT
  Upstream requirements:
⌈
The function `I2C_DeInit` shall de-initialize the I2C peripheral(s) into a state such as Power On Reset.
⌋

Note: This will include a stop of any ongoing transfers.

 Development Error Detection
  Status: DRAFT
  Upstream requirements:
⌈
If development error detection is enabled (I2CDevErrorDetect == True), the function `I2C_DeInit` shall raise the development error `I2C_E_UNINIT` if the driver is not initialized.
⌋

### 34. I2C_SetupEB

Definition of API function `I2C_SetupEB`
  Status: DRAFT
  Upstream requirements:
⌈
| Service Name | I2C_SetupEB (draft) | < |
|---|---|---|
| Syntax | Std_ReturnType I2C_SetupEB ( |  |

  `I2C_JobType` JobId,
  `I2C_AddressType` NodeAddress,
  const uint8* TxDataBufferPtr,
  uint8* RxDataBufferPtr,
  `I2C_NumberOfDataType` Length
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | JobId | Job to be used in the transmission. |
| ^ | NodeAddress | Any other value then zero will override the statically configured node address. |
| ^ | TxDataBufferPtr | Pointer to the TX transmission data location. |
| ^ | RxDataBufferPtr | Pointer to the RX transmission data location. |
| ^ | Length | Length (number of data elements) of the data to be transmitted from TxDataBufferPtr and/or received from RxDataBufferPtr. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Success. E_NOT_OK: Request rejected, due to implementation defined errors. |
| Description | API shall setup the buffers and the length of data for the EB I2C Driver Job specified. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | I2c.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. I2C_AsyncTransmit

Definition of API function `I2C_AsyncTransmit`
  Status: DRAFT
  Upstream requirements: , ,
⌈
| Service Name | I2C_AsyncTransmit (draft) | < |
|---|---|---|
| Syntax | Std_ReturnType I2C_AsyncTransmit ( |  |

  `I2C_SequenceType` SequenceId
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | SequenceId | Sequence used for data exchange. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Success. E_NOT_OK: Request rejected. |
| Description | The service conducts an asynchronous data transmission according to the parameters provided to the I2C_SetupEB() service. The callback I2C_SeqEndNotification() is called, when the asynchronous operation has finished. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | I2c.h | < |

⌋

 No transmission is ongoing
  Status: DRAFT
  Upstream requirements: ,
⌈
When the function `I2C_AsyncTransmit` is called and no other Sequence on the same I2CChannel is in state `I2C_SEQ_PENDING`, the I2C Driver shall take over the given parameter set by `I2C_SetupEB`, initiate a transmission of Length bytes, set the sequence result to `I2C_SEQ_PENDING` and return E_OK.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. I2C_SyncTransmit

Definition of API function `I2C_SyncTransmit`
  Status: DRAFT
  Upstream requirements: ,
⌈
| Service Name | I2C_SyncTransmit (draft) | < |
|---|---|---|
| Syntax | Std_ReturnType I2C_SyncTransmit ( |  |

  `I2C_SequenceType` SequenceId
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | SequenceId | Sequence used for data exchange. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Success. E_NOT_OK: Request rejected. |
| Description | This service sends or receives data using a blocking mechanism according to the parameters provided to the I2C_SetupEB() service. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | I2c.h | < |

⌋

 No transmission is ongoing
  Status: DRAFT
  Upstream requirements: ,
⌈
When the function `I2C_SyncTransmit` is called and no other Sequence on the same I2CChannel is in state `I2C_SEQ_PENDING`, the I2C Driver shall take over the given parameter set by `I2C_SetupEB`, initiate a transmission of Length bytes, set the sequence result to `I2C_SEQ_PENDING` and return E_OK.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. I2C_GetSequenceResult

Definition of API function `I2C_GetSequenceResult`
  Status: DRAFT
  Upstream requirements: ,
⌈
| Service Name | I2C_GetSequenceResult (draft) | < |
|---|---|---|
| Syntax | I2C_SequenceResultType I2C_GetSequenceResult ( |  |

  `I2C_SequenceType` SequenceId
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | SequenceId | Sequence to query. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | I2C_SequenceResultType | Return the current status |
| Description | This service returns the current status of the given SequenceId. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | I2c.h | < |

⌋

 Sequence Result
  Status: DRAFT
  Upstream requirements: ,
⌈
`I2C_GetSequenceResult` function shall return

* `I2C_SEQ_OK` when the current transmission of the Sequence has been finished successfully.
* `I2C_SEQ_PENDING` when the I2C Driver is performing an I2C Sequence.
* `I2C_SEQ_FAILED` when the current transmission of the Sequence has failed.
* `I2C_SEQ_NACK` a NACK signal was encountered.
* `I2C_SEQ_QUEUED` when an I2C Sequence is queued and waiting to be transmitted.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. I2C_GetChannelStatus

Definition of API function `I2C_GetChannelStatus`
⌈
| Service Name | I2C_GetChannelStatus | < |
|---|---|---|
| Syntax | I2C_ChannelStatusType I2C_GetChannelStatus ( |  |

  `I2C_ChannelType` Channel
| ) | < |  |
|---|---|---|
| Service ID | 0x0B | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Channel | I2C hardware microcontroller peripheral (unit) ID. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | I2C_ChannelStatusType | I2C_IDLE: 0x01 I2C_BUSY: 0x02 |
| Description | This service returns the status of the specified I2C Hardware peripheral. | < |
| Available via | I2c.h | < |

⌋

 `I2C_GetChannelStatus`
  Status: DRAFT
  Upstream requirements: ,
⌈
`I2C_GetChannelStatus` shall return the status of specified I2C Hardware unit:

* `I2C_BUSY`, if given HW unit is busy in transmitting the sequences
* `I2C_IDLE`, if given HW unit is not transmitting any sequences
⌋

 Development Error Detection
  Status: DRAFT
  Upstream requirements:
⌈
If development error detection is enabled (I2CDevErrorDetect == True), the function `I2C_GetChannelStatus` shall raise the development error `I2C_E_PARAM_SEQUENCE` if Channel is invalid (i.e. is not configured in I2CChannel).
⌋

### 39. Scheduled functions

### 40. I2C_MainFunction

Definition of scheduled function `I2C_MainFunction`
  Status: DRAFT
⌈
| Service Name | I2C_MainFunction (draft) | < |
|---|---|---|
| Syntax | void I2C_MainFunction ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x10 | < |
| Description | Makes a target channel available for processing requests (addressing). When called, the target channel becomes available for starting incoming or outgoing transfers. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | I2c.h | < |

⌋

 Polling Mode
  Status: DRAFT
⌈
If I2CPollingMode is set to `I2C_CHANNEL_MODE_POLLING`, the I2C driver shall use the `I2C_MainFunction` to poll the hardware and not use interrupts.
⌋

### 41. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 42. Mandatory 接口
*原文标题：Mandatory interfaces*

The I2C Driver module requires some interfaces to fulfill its core functionality.

 Definition of mandatory interfaces required by module I2C
  Status: DRAFT
⌈
| API Function | Header File | Description |
|---|---|---|
| There are no mandatory interfaces. | < | < |

⌋

### 43. Optional 接口
*原文标题：Optional interfaces*

This section defines all interfaces, which are required to fulfill an optional functionality of the I2C Driver module.

 Definition of optional interfaces requested by module I2C
  Status: DRAFT
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportRuntimeError | Det.h | Service to report runtime errors. If a callout has been configured then this callout shall be called. |

⌋

### 44. Configurable 接口
*原文标题：Configurable interfaces*

In this section, all interfaces are listed where the target function could be configured. The target function is usually a callback function. The names of this kind of interfaces are not fixed because they are configurable.

### 45. I2C_SeqEndNotification

Definition of configurable interface (*`I2C_SeqEndNotification`)
  Status: DRAFT
  Upstream requirements:
⌈
| Service Name | (*I2C_SeqEndNotification) (draft) | < |
|---|---|---|
| Syntax | void (*I2C_SeqEndNotification) ( |  |

  `I2C_SequenceType` SequenceId,
  `I2C_SequenceResultType` Result
| ) | < |  |
|---|---|---|
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | SequenceId | Sequence which is finished. |
| ^ | Result | Status of currently executed sequence. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Callback routine provided by the user for each Sequence to notify the caller that a Sequence has been finished. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | I2c_Externals.h | < |

⌋

Note: This routine might be called on interrupt level, depending on the calling function.

### 46. 时序图
*原文标题：Sequence diagrams*

### 47. SetupEB/ AsyncTransmit

The following sequence diagram shows an example of the process of `I2C_SetupEB`/`I2C_AsyncTransmit` calls for one Sequence transmission composed of 3 Jobs. Write or Read accesses are "User Dependant". In the beginning the module is initialized and at the end again de-initialized.

### 48. SetupEB/ SyncTransmit

The following sequence diagram shows an example of the process of `I2C_SetupEB`/`I2C_SyncTransmit` calls for two Sequence transmissions composed of 2 Jobs each. Write or Read accesses are "User Dependant". In the beginning the module is initialized and at the end again de-initialized.

### 49. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification Chapter  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave Chapter  in the specification to guarantee comprehension.

Chapter  specifies the structure (containers) and the parameters of the module I2C driver.

Chapter  specifies published information of the module I2C driver.

### 50. How to read this chapter

For details refer to .

### 51. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters describe Chapter  and Chapter . Further hardware/ implementation specific parameters can be added if necessary.

### 52. I2C

Definition of EcucModuleDef I2C
  Status: DRAFT
⌈
| Module Name | I2C |
|---|---|
| Description | Configuration of the I2C (Inter-Integrated Circuit) module. |
| Post-Build Variant Support | true |
| Supported Config Variants | VARIANT-POST-BUILD, VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| I2CConfigSet | 1..* | The base for a multiple configuration set. |

Tags: atp.Status=draft
| I2CGeneral | 1 | General configuration parameters of the I2C. |
|---|---|---|

Tags: atp.Status=draft
⌋

 Partition mapping of I2C kernel
  Status: DRAFT
⌈
The ECUC partitions referenced by I2CKernelEcucPartitionRef shall be a subset of the ECUC partitions referenced by I2CEcucPartitionRef.
⌋

 I2C availability on partitions
  Status: DRAFT
⌈
If I2CEcucPartitionRef references one or more ECUC partitions, I2CKernelEcucPartitionRef shall have a multiplicity of one and reference one of these ECUC partitions as well.
⌋

### 53. I2CGeneral

Definition of EcucParamConfContainerDef I2CGeneral
  Status: DRAFT
⌈
| Container Name | I2CGeneral | < | < |
|---|---|---|---|
| Parent Container | I2C | < | < |
| Upstream mapping defined | - | < | < |
| Description | General configuration parameters of the I2C. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| I2CDevErrorDetect | 1 |  |
| I2CMainFunctionPeriod | 0..1 |  |
| I2CMaximumRetry | 1 |  |
| I2CMultiMaster | 1 |  |
| I2CEcucPartitionRef | 0..* |  |
| I2CKernelEcucPartitionRef | 0..1 |  |

No Included Containers
⌋

 Definition of EcucBooleanParamDef I2CDevErrorDetect
  Status: DRAFT
⌈
| Parameter Name | I2CDevErrorDetect | < | < |
|---|---|---|---|
| Parent Container | I2CGeneral | < | < |
| Upstream mapping defined | - | < | < |
| Description | This parameter switches the Development Error Detection and Notification ON or OFF. |  |  |

* True: Development error detection is enabled.
* False: Development error detection is disabled.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 26 章（内容从略，见纯文本全文）

54. I2CConfigSet
55. I2CChannel
56. I2CJob
57. I2CSequence
58. 发布信息
59. 附录
60. 不适用需求
61. Change history of AUTOSAR traceable items
62. Traceable item history of this document according to AUTOSAR Release R24-11
63. Added 规范 Items in R24-11
64. Changed 规范 Items in R24-11
65. Deleted 规范 Items in R24-11
66. Traceable item history of this document according to AUTOSAR Release R25-11
67. Added 规范 Items in R25-11
68. Changed 规范 Items in R25-11
69. Deleted 规范 Items in R25-11
70. Added Constraints in R25-11
71. Changed Constraints in R25-11
72. Deleted Constraints in R25-11
73. Traceable item history of this document according to AUTOSAR Release R26-11
74. Added 规范 Items in R26-11
75. Changed 规范 Items in R26-11
76. Deleted 规范 Items in R26-11
77. Added Constraints in R26-11
78. Changed Constraints in R26-11
79. Deleted Constraints in R26-11
