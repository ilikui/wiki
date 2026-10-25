# Specification of LIN Driver (`LINDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 072 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_LINDriver_072\AUTOSAR_CP_SWS_LINDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_LINDriver_072\AUTOSAR_CP_SWS_LINDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_LINDriver_072\zzgen\CP_SWS_LINDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module LIN driver.

## 模块依赖

Module MCU

The hardware of the internal LIN hardware unit depends on the system clock, prescaler(s) and PLL. Hence, the length of the LIN bit timing depends on the clock settings made in module MCU.

The LIN driver module will not take care of setting the registers that configure the clock, prescaler(s) and PLL (e.g. switching on/off the PLL) in its init functions. The MCU module must do this.

Module Port

The Port driver configures the port pins used for the LIN driver as input or output. Hence, the Port driver has to be initialized prior to the use of LIN functions. Otherwise, LIN driver functions will exhibit undefined behavior.

Module DET

In development mode, the Lin module reports development error through the `Det_ReportError` function of module DET. (see )

Module DEM

The Lin module reports production errors to the Diagnostic Event Manager. (see )

OS

The LIN driver uses interrupts and therefore there is a dependency on the OS, which configures the interrupt sources.

LIN driver Users

The LIN Interface  is the only user of the LIN driver services.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module LIN driver.

### 2. 范围
*原文标题：Scope*

The base for this document is the ISO 17987 specifications . It is assumed that the reader is familiar with this specification. This document will not describe ISO 17987 LIN functionality again.

The LIN driver applies to ISO 17987 master and slave nodes. The LIN implementation in AUTOSAR deviates from the ISO 17987 specifications as described in this specification of LIN driver, but there will be no change in the behavior on the LIN bus. It is the intention to be able to reuse all existing LIN nodes together with the AUTOSAR LIN implementation (i.e. the LIN driver).

  Upstream requirements:
⌈
It is intended to support the complete range of LIN hardware from a simple SCI/UART to a complex LIN hardware controller. Using a SW-UART implementation is out of the scope.
⌋

For a closer description of the LIN hardware unit, see chapter .

### 3. Architectural 概述
*原文标题：Architectural overview*

The LIN driver is part of the microcontroller abstraction layer (MCAL), performs the hardware access and offers a hardware independent API to the upper layer. The only upper layer, which has access to the LIN driver, is the LIN Interface.

A LIN driver can support more than one channel. This means that the LIN driver can handle one or more LIN channels as long as they are belonging to the same LIN hardware unit.

In the example below three different LIN drivers are connected to the LIN interface. However, one LIN driver is the most common configuration.

### 4. Acronyms, abbreviations and 术语表
*原文标题：Acronyms, abbreviations and glossary*

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

Acronyms, abbreviations and definitions that have a local scope for the LIN driver and therefore are not contained in the  must appear here.

| Acronym: | Description: |
|---|---|
| PID | Protected ID (as defined by ) |
| PLL | Phase-Locked Loop |
| RX | Reception |
| SCI | Serial Communication Interface |
| SFR | Special Function Register |
| SPAL | Standard Peripheral Abstraction Layer |
| SRS | Software Requirement Specification |
| TX | Transmission |
| UART | Universal Asynchronous Receiver Transmitter |

| Abbreviation: | Description: |
|---|---|
| Id | Identifier |

### 6. 术语表
*原文标题：Glossary*

Besides AUTOSAR terminology this document also uses terms defined in the ISO 17987 specifications , e.g. LIN frame, header and message.

| Glossary: | Description: |
|---|---|
| enumeration | This can be in "C" programming language an enum or a #define. |
| LIN channel | The LIN channel entity interlinks the ECUs of a LIN cluster physically: An ECU is part of a LIN cluster if it contains one LIN controller that is connected to one LIN channel of the LIN cluster. An ECU is allowed to connect to a particular LIN cluster through one channel only. |
| LIN cluster | As defined by : "A cluster is the LIN bus wire plus all the nodes." |
| LIN controller | A dedicated LIN hardware with a build Frame processing state machine. A hardware which is capable to connect to several LIN clusters is treated as several LIN controllers. |
| LIN frame | As defined by : "All information is sent packed as frames; a frame consist of the header and a response." |
| LIN frame processor | Frame processing implies the complete LIN frame handling. Implementation could be achieved as software emulated solution or with a dedicated LIN controller. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. LIN hardware unit classification

The on-chip LIN hardware unit combines one or several LIN channels.

The following figure shows a classification of different LIN hardware types connected to multiple LIN physical channels:

### 8. 相关文档
*原文标题：Related documentation*

### 9. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 10. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for LIN Driver.

Thus, the specification `SWS_BSWGeneral` shall be considered as additional and required specification for LIN Driver.

### 11. 约束与假设
*原文标题：Constraints and assumptions*

### 12. 限制
*原文标题：Limitations*

Only one LIN channel of an ECU is allowed to connect to a particular LIN cluster. Unless there are unused (not connected) channels in the ECU, the number of LIN channels is equal to the number of LIN clusters.

### 13. 驱动范围
*原文标题：Driver scope*

Upstream requirements:
⌈
One LIN driver provides access to one LIN hardware unit type (simple UART or dedicated LIN hardware) that may consist of several LIN channels.
⌋

⌈
For different LIN hardware units a separate LIN driver needs to be implemented. It is up to the implementer to adapt the driver to the different instances of similar LIN channels.
⌋

⌈
In case several LIN driver instances (of same or different vendor) are implemented in one ECU the file names, API names, and published parameters must be modified such that no two definitions with the same name are generated. The name shall be extended according to  with a Vendor Id (needed to distinguish LIN drivers from different vendors) and a Vendor specific name (needed to distinguish different hardware units implemented by one Vendor): <Module abbreviation>_<Vendor Id>_<Vendor specific name>.
⌋

The LIN Interface is responsible for calling the correct function. The necessary information shall be given in an XML file during configuration. See  for description how the LIN Interface handles several LIN drivers.

### 14. 适用的车型领域
*原文标题：Applicability to car domains*

This specification is applicable to all car domains, where LIN is used.

### 15. 对其他模块的依赖
*原文标题：Dependencies to other modules*

Module MCU

The hardware of the internal LIN hardware unit depends on the system clock, prescaler(s) and PLL. Hence, the length of the LIN bit timing depends on the clock settings made in module MCU.

The LIN driver module will not take care of setting the registers that configure the clock, prescaler(s) and PLL (e.g. switching on/off the PLL) in its init functions. The MCU module must do this.

Module Port

The Port driver configures the port pins used for the LIN driver as input or output. Hence, the Port driver has to be initialized prior to the use of LIN functions. Otherwise, LIN driver functions will exhibit undefined behavior.

Module DET

In development mode, the Lin module reports development error through the `Det_ReportError` function of module DET. (see )

Module DEM

The Lin module reports production errors to the Diagnostic Event Manager. (see )

OS

The LIN driver uses interrupts and therefore there is a dependency on the OS, which configures the interrupt sources.

LIN driver Users

The LIN Interface  is the only user of the LIN driver services.

### 16. 文件结构
*原文标题：File structure*

### 17. 代码文件结构
*原文标题：Code file structure*

⌈
The code file structure shall not be defined within this specification.
⌋

### 18. 头文件结构
*原文标题：Header file structure*

Upstream requirements:
⌈
The file Lin.h only contains external declarations of constants, global data, type definitions and services that are specified in LIN driver SWS.
⌋

⌈
Constants, global data types and functions that are only used by LIN driver internally, are declared in Lin.c.
⌋

### 19. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| The Implementation of interrupt service routines shall be done by the Operating System, complex drivers or modules |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| All AUTOSAR Basic Software Modules shall only export information needed by other modules |  |  |
| AUTOSAR Basic Software Modules shall be compiler and platform independent |  |  |
| AUTOSAR Basic Software Modules shall not define global data in their header files, but in the C file |  |  |
| All AUTOSAR Basic Software Modules shall indicate all global data with read-only purposes by explicitly assigning the const keyword |  |  |
| All AUTOSAR Basic Software Modules shal |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 功能规范
*原文标题：Functional specification*

The LIN driver module is required to manage the hardware dependent aspects of communication via any LIN cluster attached to the node the driver resides in.

This includes accepting header data for transmission onto the bus, response frame data to transmit, the retrieval of header information and of response frame data intended for the node.

The need for sleep mode management of both the node and of the cluster exists. This implies the ability to detect and generate a 'wake-up' pulse as defined in the ISO 17987 specifications. If the underlying hardware supports a low-power mode then entering and exiting from that state is included.

### 21. 通用需求
*原文标题：General Requirements*

The Lin module is a Basic Software Module that has direct access to hardware resources.

  Upstream requirements: , ,
⌈
The Lin module shall conform to the ISO 17987 specifications . This applies to ISO 17987 LIN Master and Slave nodes.
⌋

  Upstream requirements: , ,
⌈
The Lin module shall fulfill all design and implementation guidelines as described in .
⌋

  Upstream requirements:
⌈
The Lin module shall implement the ISRs for all LIN hardware unit interrupts that are needed.
⌋

⌈
The Lin module shall ensure that all unused interrupts are disabled.
⌋

⌈
The Lin module shall reset the interrupt flag at the end of the ISR (if not done automatically by hardware).
⌋

The Lin module shall not configure the interrupt (i.e. priority) nor set the vector table entry.

### 22. Version Check

### 23. 需求
*原文标题：Requirements*

For details refer to .

### 24. LIN 驱动 and Channel 初始化
*原文标题：LIN driver and Channel Initialization*

### 25. Background & Rationale

Before communication can be started on a LIN bus, both the LIN driver and the relevant LIN channel must be initialized.

The driver initialization (see `Lin_Init`) handles all aspects of initialization that are of relevance to all channels present in the LIN hardware unit. This may include any static variables or hardware register settings common to all LIN channels that are available. Additionally each channel must also be initialized according to the configuration supplied. This will for example include (but is not limited to) the baud rate over the bus.

⌈
There must be at least one statically defined configuration set available for the LIN driver. When the EcuM invokes the initialization function, it has to provide a specific pointer to the configuration that it wishes to use.
⌋

### 26. 需求
*原文标题：Requirements*

The Lin module shall not initialize or configure LIN channels, which are not used.

The Lin module shall allow the environment to select between different static configuration data at runtime.

  Upstream requirements: , ,
⌈
The Lin module's configuration shall include a data communication rate set as defined by static configuration data.
⌋

  Upstream requirements: , ,
⌈
The Lin module's configuration data, intended for hardware registers, shall be stored as hardware specific data structures in ROM (see `Lin_ConfigType`).
⌋

⌈
Each LIN PID shall be associated with a checksum model (either 'enhanced' where the PID is included in the checksum, or 'classic' where only the response data is check-summed) (see `Lin_PduType`).
⌋

⌈
Each LIN PID shall be associated with a response data length in bytes (see `Lin_PduType`).
⌋

### 27. 状态 diagrams
*原文标题：State diagrams*

The LIN driver has a state machine that is shown in Figure .

| Module State | Meaning / Activities in the state |
|---|---|
| LIN_UNINIT | The state LIN_UNINIT means that the Lin module has not been initialized yet and cannot be used. |
| LIN_INIT | The LIN_INIT state indicates that the LIN driver has been initialized, making each available channel ready for service. |

| Channel State | Meaning / Activities in the state |
|---|---|
| LIN_CH_OPERATIONAL | The individual channel has been initialized (using at least one statically configured data set) and is able to participate in the LIN cluster. |
| LIN_CH_SLEEP | The detection of a 'wake-up' pulse is enabled. The LIN hardware is into a low power mode if such a mode is provided by the hardware. |

⌈
Reset -> `LIN_UNINIT`: After reset, the Lin module shall set its state to `LIN_UNINIT`.
⌋

⌈
`LIN_UNINIT` -> `LIN_INIT`: The Lin module shall transition from `LIN_UNINIT` to `LIN_INIT` when the function `Lin_Init` is called.
⌋

The LIN module's environment shall call the function `Lin_Init` only once during runtime.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Frame processing

### 29. Background & Rationale

A LIN frame is composed of two parts, the LIN header and the LIN response.

The LIN header is always transmitted by the LIN master node and indicates the start of frame, including the LIN PID. The LIN response is transmitted on the bus after the LIN header and can be transmitted by either the master or one of the slaves .

The driver must also be able to access data concerning the checksum model and data length for each LIN PID. LIN 2.0 and newer versions have a different checksum model compared to LIN 1.3, but the LIN master must be able to communicate with all slave node types (LIN 1.3, LIN 2.0, LIN 2.1, LIN 2.2 and ISO 17987). However, a LIN 1.3 master is not able to communicate with LIN 2.0 or newer slaves.

The checksum is a part of the response, and may or may not include the PID depending upon the checksum model for the PID in question. The LIN ID's 60 (0x3c) to 63 (0x3f) must always use the classic (response data only) checksum model .

The LIN driver module works with LIN frames as its basic building block. From the LIN driver module point of view, the frame handling significantly differs depending on the implemented node type:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 需求
*原文标题：Requirements*

### 31. LIN Master specific

Following requirements are only appicable for LIN master nodes.

⌈
The LIN driver shall interpret the supplied identifier as PID. The identifier is then transmitted as-supplied within the LIN header (see `Lin_SendFrame`).
⌋

  Upstream requirements:
⌈
The LIN driver shall be able to send a LIN header. This is composed of the break field, synch byte field, and protected identifier byte field as detailed in  (see `Lin_SendFrame`).
⌋

⌈
The LIN driver shall be able to send a LIN header and response.
⌋

⌈
The LIN driver shall start transmission of the new LIN header when `Lin_SendFrame` is called, even if an ongoing transmission may be still in progress or unsuccessfully completed.
⌋

Note: As a result of  ongoing frame transmission and receptions are terminated.

⌈
The function `Lin_GetStatus` shall return the status of the current frame transmission request for the channel.
⌋

  Upstream requirements: ,
⌈
The LIN driver shall make received data available to the LIN interface module. After successful reception of a whole LIN frame, the received data shall be prepared for function call of the LIN interface (see `Lin_GetStatus`).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. LIN Slave specific

Following requirements are only appicable for LIN Slave nodes.

  Upstream requirements:
⌈
The LIN driver shall be able to receive a LIN header at any time in `LIN_CH_OPERATIONAL` state. The header is composed of the break field, synch byte field, and protected identifier byte field as detailed in .
⌋

⌈
On LIN header reception, the LIN driver shall call the header indication callback function `LinIf_HeaderIndication` with PduPtr->Pid set to the received PID value and PduPtr->SduPtr set to the (hardware or shadow) buffer of the LIN driver, to which the slave response shall be written by the upper layer.
⌋

Note: If the LIN hardware unit provides the ID (frame identifier without parity bits) instead of the PID, the LIN driver is responsible to calculate the PID from the ID to comply with the callback interface.

⌈
If the LIN hardware unit cannot detect invalid PIDs, the LIN driver shall not evaluate the PID value (i.e. it shall not verify parity bits in software). The LIN driver shall provide the PID as-received to the LIN interface module.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Common

⌈
The LIN driver shall be able to calculate either a 'classic' or an 'enhanced' checksum depending upon the checksum model for the current LIN PDU.
⌋

⌈
If the LIN hardware unit cannot queue the bytes for transmission or reception (e.g. simple UART implementation), the LIN driver shall provide a temporary communication buffer.
⌋

⌈
The LIN driver shall initiate transmission without blocking, including the check of the next byte transmission only upon successful reception of the previous one (receive-back).
⌋

⌈
The LIN driver shall receive data without blocking.
⌋

### 34. 数据 Consistency
*原文标题：Data Consistency*

### 35. Transmit 数据 Consistency：
*原文标题：Transmit Data Consistency:*

Upstream requirements: ,
⌈
The LIN driver shall directly copy the data from the upper layer buffers.
⌋

⌈
For LIN Master nodes, the upper layer of the LIN Driver has to keep the buffer data consistent until return of function call.

For LIN Slave nodes, the upper layer of the LIN Driver has to keep the buffer data consistent until end of response transmission.
⌋

### 36. Receive 数据 Consistency：
*原文标题：Receive Data Consistency:*

Following is applicable for LIN master and LIN slave nodes:

For the LIN response reception the bytes of the SDU buffer shall be allocated in increasingly consecutive address order. The LIN frame data length information defines the minimum SDU buffer length.

  Upstream requirements:
⌈
The complete LIN frame receive processing (including copying to destination layer) can be implemented in an ISR. The received data shall be consistent until either next LIN frame has been received successfully or LIN channel state has changed.
⌋

As long as it is guaranteed that neither the ISRs nor `Lin_GetStatus` (Master only) can be interrupted by itself, the LIN hardware (or shadow) buffer is always consistent, because it is written and read in sequence in exactly one function that is never interrupted by itself.

### 37. Receive 数据 consistency (Master only)
*原文标题：Receive data consistency (Master only)*

⌈
The complete LIN frame receive processing (including copying to destination layer) can be implemented in the `Lin_GetStatus` function. The received data shall be consistent until either next LIN frame has been received successfully or LIN channel state has changed.
⌋

### 38. 数据 byte 映射
*原文标题：Data byte mapping*

⌈
Data mapping between memory and the LIN frame is defined in a way that the array element 0 is containing the LSB (the data byte to send/receive first) and the array element (n-1) is containing the MSB (the data byte to send/receive last).
⌋

### 39. 休眠 and 唤醒 functionality
*原文标题：Sleep and wake-up functionality*

There are two different possibilities to wake-up a LIN hardware channel:

# Internal (Top-Down) wake-up

  The upper layer requests a wake-up through a call to `Lin_Wakeup`.
# External (Bottom-Up) wake-up

  A bus wake-up event is detected and forwarded to the upper layer through the `Lin_CheckWakeup` API which has to be called by module LinIf. After a successful validation of the wake-up source, `Lin_WakeupInternal` is also called.

The selection of the wake-up modes is controlled by configuration parameter LinChannelWakeupSupport:

* Both internal and external wake-up modes are supported by a LIN hardware channel having LinChannelWakeupSupport = TRUE
* Only internal wake-up mode is supported by a LIN hardware channel having LinChannelWakeupSupport = FALSE.

### 40. Background & Rationale

Following is applicable for LIN master nodes only:

The LIN Master node can be awakened either by a wake-up signal generated by one of the slaves, or by a request from the higher layer (LIN interface) (see ). The LIN interface controls the message schedule table and so must be able to instruct the LIN driver to put the hardware unit to sleep, or to wake it up (see , ).

For this purpose, the LIN driver provides functions to put the LIN channel into its `LIN_CH_SLEEP` state (see `Lin_GoToSleep` / `Lin_GoToSleepInternal`).

Following is applicable for LIN slave nodes only:

The LIN slave can be awakened either by a wake-up signal generated by the master node or any other slave node on the same channel, or by a request from the higher layer (LIN interface) (see ).

The LIN Interface detects the conditions to enter sleep mode and instructs the LIN driver to put the hardware unit to sleep, or to wake it up (see , ).

For this purpose, the LIN driver provides a function to put the LIN channel into its `LIN_CH_SLEEP` state (see `Lin_GoToSleep` / `Lin_GoToSleepInternal`). Because the slave node cannot transmit a go-to-sleep-command, the function `Lin_GoToSleep` is not applicable for slave nodes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 需求
*原文标题：Requirements*

Upstream requirements:
⌈
When the LIN channel enters sleep mode, it shall perform the transition to low-power mode of the LIN hardware unit (if available) (see `Lin_GoToSleep` / `Lin_GoToSleepInternal`).
⌋

  Upstream requirements: ,
⌈
Each LIN channel shall be able to accept a sleep request independently of the other channel states (see `Lin_GoToSleep` / `Lin_GoToSleepInternal`).
⌋

⌈
When a LIN channel is in `LIN_CH_SLEEP` state and wake-up detection is supported by configuration parameter LinChannelWakeupSupport, the LIN hardware unit shall monitor the bus for a wake-up request on that channel.
⌋

⌈
`Lin_Wakeup`: If the LIN driver receives a wake-up request from the LIN interface, the requested channel shall send a wake-up pulse to the LIN bus. (see `Lin_Wakeup`)
⌋

⌈
`Lin_WakeupInternal`: If the LIN driver receives an internal wake-up request from the LIN interface, the requested channel shall send no wake-up pulse to the LIN bus. (see `Lin_WakeupInternal`)
⌋

For LIN Master nodes, the function `Lin_GetStatus` returns the current state of a given LIN channel.

### 42. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 43. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Lin
  Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service used without module initialization | LIN_E_UNINIT | 0x00 |
| API service used with an invalid or inactive channel parameter | LIN_E_INVALID_CHANNEL | 0x02 |
| API service called with invalid configuration pointer | LIN_E_INVALID_POINTER | 0x03 |
| Invalid state transition for the current state | LIN_E_STATE_TRANSITION | 0x04 |
| API service called with a NULL pointer | LIN_E_PARAM_POINTER | 0x05 |

⌋

### 44. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 45. Production 错误
*原文标题：Production Errors*

### 46. LIN_E_TIMEOUT

This error is reported when time out caused by hardware error occurs.
  Upstream requirements:
⌈
| Diagnostic Event (Error Name) | LIN_E_TIMEOUT |
|---|---|
| Description | If a change to the LIN hardware control registers results in the need to wait for a status change, this shall be protected by a configurable time out mechanism. If such a time out is detected the LIN_E_TIMEOUT error shall be raised. This situation should only arise in the event of a LIN hardware unit fault and should be communicated to the rest of the system. |
| Failed condition | A LIN hardware control register has changed and the configured time (see LinTimeoutDuration) has elapsed without a status change of the LIN Hardware. |
| Passed condition | A LIN hardware control register has changed and the status change is done within the configured time (see LinTimeoutDuration). |

⌋

⌈
The only production error that can be reported by the LIN driver is the `LIN_E_TIMEOUT` error.
⌋

### 47. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 48. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 49. API 规范
*原文标题：API specification*

### 50. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Lin
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Comtype | ComStack_Types.h | NetworkHandleType |
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| EcuM | EcuM.h | EcuM_WakeupSourceType |
| Icu | Icu.h | Icu_ChannelType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 51. 类型定义
*原文标题：Type definitions*

⌈
The content of `Lin_GeneralTypes`.h shall be protected by a `LIN_GENERAL_TYPES` define.
⌋

⌈
If different LIN drivers are used, only one instance of this file has to be included in the source tree. For implementation all `Lin_GeneralTypes`.h related types in the documents mentioned before shall be considered.
⌋

### 52. Lin_ConfigType

Definition of datatype `Lin_ConfigType`
⌈
| Name | Lin_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Hardware and Implementation dependent structure | < |
| ^ | Type | - |
| ^ | Comment | The contents of the initialization data structure are LIN hardware specific |
| Description | This is the type of the external data structure containing the overall initialization data for the LIN driver and the SFR settings affecting the LIN channels. A pointer to such a structure is provided to the LIN driver initialization routine for configuration of the driver, LIN hardware unit and LIN hardware channels. | < |
| Available via | Lin.h | < |

⌋

### 53. Lin_FramePidType

Definition of datatype `Lin_FramePidType`
⌈
| Name | Lin_FramePidType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | 0...0xFE | - | The LIN identifier (0...0x3F) together with its two parity bits. |
| Description | Represents all valid protected identifier used by Lin_SendFrame(). | < | < |
| Available via | Lin_GeneralTypes.h | < | < |

⌋

### 54. Lin_FrameCsModelType

Definition of datatype `Lin_FrameCsModelType`
⌈
| Name | Lin_FrameCsModelType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | LIN_ENHANCED_CS | 0x0 | Enhanced checksum model |
| ^ | LIN_CLASSIC_CS | 0x1 | Classic checksum model |
| Description | This type is used to specify the Checksum model to be used for the LIN Frame. | < | < |
| Available via | Lin_GeneralTypes.h | < | < |

⌋

### 55. Lin_FrameResponseType

Definition of datatype `Lin_FrameResponseType`
⌈
| Name | Lin_FrameResponseType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | LIN_FRAMERESPONSE_TX | 0x0 | Response is generated from this node |
| ^ | LIN_FRAMERESPONSE_RX | 0x1 | Response is generated from another node and is relevant for this node. |
| ^ | LIN_FRAMERESPONSE_IGNORE | 0x2 | Response is generated from another node and is irrelevant for this node |
| Description | This type is used to specify whether the frame processor is required to transmit the response part of the LIN frame. | < | < |
| Available via | Lin_GeneralTypes.h | < | < |

⌋

Note: For LIN master nodes, the mapping to the previous definition is as follows: `LIN_MASTER_RESPONSE` <-> `LIN_FRAMERESPONSE_TX` `LIN_SLAVE_RESPONSE` <-> `LIN_FRAMERESPONSE_RX` `LIN_SLAVE_TO_SLAVE` <-> `LIN_FRAMERESPONSE_IGNORE`

### 56. Lin_FrameDlType

Definition of datatype `Lin_FrameDlType`
⌈
| Name | Lin_FrameDlType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | 1...8 | - | Data length of a LIN Frame |
| Description | This type is used to specify the number of SDU data bytes to copy. | < | < |
| Available via | Lin_GeneralTypes.h | < | < |

⌋

### 其余 58 章（内容从略，见纯文本全文）

57. Lin_PduType
58. Lin_StatusType
59. Lin_SlaveErrorType
60. 功能定义
61. 服务 affecting the complete LIN hardware unit
62. Lin_Init
63. Lin_CheckWakeup
64. Lin_GetVersionInfo
65. 服务 affecting a single LIN channel
66. Lin_SendFrame
67. Lin_GoToSleep
68. Lin_GoToSleepInternal
69. Lin_Wakeup
70. Lin_WakeupInternal
71. Lin_GetStatus
72. Callback 通知
73. Scheduled functions
74. Expected 接口
75. Mandatory 接口
76. Optional 接口
77. Configurable 接口
78. 时序图
79. Receiving a LIN Frame
80. LIN Master
81. LIN Slave
82. 配置规范
83. How to read this chapter
84. Containers and 配置 parameters
85. Lin
86. LinGeneral
87. LinChannel
88. LinGlobalConfig
89. LinDemEventParameterRefs
90. 发布信息
91. 附录
92. 不适用需求
93. Change history of AUTOSAR traceable items
94. Traceable item history of this document according to AUTOSAR Release R25-11
95. Added Constraints in R25-11
96. Changed Constraints in R25-11
97. Deleted Constraints in R25-11
98. Added 规范 Items in R25-11
99. Changed 规范 Items in R25-11
100. Deleted 规范 Items in R25-11
101. Traceable item history of this document according to AUTOSAR Release R24-11
102. Added Constraints in R24-11
103. Changed Constraints in R24-11
104. Deleted Constraints in R24-11
105. Added 规范 Items in R24-11
106. Changed 规范 Items in R24-11
107. Deleted 规范 Items in R24-11
108. Traceable item history of this document according to AUTOSAR Release R23-11
109. Added Constraints in R23-11
110. Changed Constraints in R23-11
111. Deleted Constraints in R23-11
112. Added 规范 Items in R23-11
113. Changed 规范 Items in R23-11
114. Deleted 规范 Items in R23-11
