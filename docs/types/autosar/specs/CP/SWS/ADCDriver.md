# Specification of ADC Driver (`ADCDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 010 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_ADCDriver_010\AUTOSAR_CP_SWS_ADCDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_ADCDriver_010\AUTOSAR_CP_SWS_ADCDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_ADCDriver_010\zzgen\CP_SWS_ADCDriver.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration of the AUTOSAR Basic Software module ADC Driver. The ADC driver is targeting Successive Approximation ADC Hardware. Delta Sigma ADC conversion use cases are out of scope of this specification.

The ADC module initializes and controls the internal Analogue Digital Converter Unit(s) of the microcontroller. It provides services to start and stop a conversion respectively to enable and disable the trigger source for a conversion. Furthermore it provides services to enable and disable a notification mechanism and routines to query the status and result of a conversion.

The ADC module works on so called ADC Channel Groups, which are build from so called ADC Channels.An ADC Channel Group combines an analogue input pin (ADC Channel), the needed ADC circuitry itself and conversion result register into an entity that can be individually controlled and accessed via the ADC module.

## 模块依赖

Module MCU Driver

The Microcontroller Unit Driver (MCU Driver) is primarily responsible for initializing and controlling the chip's internal clock sources and clock prescalers. The clock frequency may affect:

* Trigger frequency
* Conversion time
* Sampling time

Module PORT driver

The PORT module shall configure the port pins used by the ADC module. Both analogue input pins and external trigger pins have to be considered.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration of the AUTOSAR Basic Software module ADC Driver. The ADC driver is targeting Successive Approximation ADC Hardware. Delta Sigma ADC conversion use cases are out of scope of this specification.

The ADC module initializes and controls the internal Analogue Digital Converter Unit(s) of the microcontroller. It provides services to start and stop a conversion respectively to enable and disable the trigger source for a conversion. Furthermore it provides services to enable and disable a notification mechanism and routines to query the status and result of a conversion.

The ADC module works on so called ADC Channel Groups, which are build from so called ADC Channels.An ADC Channel Group combines an analogue input pin (ADC Channel), the needed ADC circuitry itself and conversion result register into an entity that can be individually controlled and accessed via the ADC module.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |
| ADC | Analogue Digital Converter |
| MCU | Microcontroller Unit |
| API | Application Programming Interface |
| HW | Hardware |
| SW | Software |
| ADC HW Unit | Represents a microcontroller input electronic device that includes all parts necessary to perform an "analogue to digital conversion". |
| ADC Module | ADC Basic Software module ADC Driver, abbreviated also with ADC Driver |
| ADC Channel | Represents a logical ADC entity bound to one port pin. Multiple ADC entities can be mapped to the same port pin. |
| ADC Channel Group | A group of ADC channels linked to the same ADC hardware unit (e.g. one Sample&Hold and one A/D converter). |

The conversion of the whole group is triggered by one trigger source.
| ADC Result Buffer (ADC Streaming Buffer, ADC Stream Buffer) | The user of the ADC Driver has to provide a buffer for every group. This buffer can hold multiple samples of the same group channel if streaming access mode is selected. If single access mode is selected one sample of each group channel is held in the buffer. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for ADC Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for ADC Driver.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

Power State Control APIs are implementable only if the MCAL driver owns the

complete underlying HW peripheral i.e. the HW peripheral is not accessed by

other MCAL modules

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

Module MCU Driver

The Microcontroller Unit Driver (MCU Driver) is primarily responsible for initializing and controlling the chip's internal clock sources and clock prescalers. The clock frequency may affect:

* Trigger frequency
* Conversion time
* Sampling time

Module PORT driver

The PORT module shall configure the port pins used by the ADC module. Both analogue input pins and external trigger pins have to be considered.

### 10. 需求追踪
*原文标题：Requirements Tracing*

| Requirement | Description | Satisfied by |
|---|---|---|
| The ADC Driver shall allow a specific result access modes for each ADC Channel Group |  |  |
| The ADC driver shall mask out information bits from the conversion result not belonging to the ADC value |  |  |
| The ADC Driver shall provide a service for querying the status of an ADC Channel Group |  |  |
| If the ADC provides signed values, the ADC driver shall put the sign bit into the MSB of the return value |  |  |
| The ADC Driver shall support a specific basic static configurations per channel |  |  |
| The ADC Driver shall provide notification functions to inform the caller about the end of a conversion for a Channel Group |  |  |
| The ADC driver shall provide a service to enable and disable each notification function separately |  |  |
| The ADC driver shall provide services to start and stop the conversion of an ADC Channel Group for all conversion modes |  |  |
| The ADC Driver shall allow to group ADC channels that belong to the same ADC HW unit |  |  |
| The ADC driver shall provide (for streaming access mode) a service to identify most recent sample and number of available samples of a channel group |  |  |
| The ADC Driver shall allow for each ADC channel group the static co |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能规范
*原文标题：Functional specification*

### 12. 通用行为
*原文标题：General behavior*

### 13. Background & Rationale

The table below shows a list of possible desired functionalities of an ADC user and in which way they are provided by the ADC module. Furthermore the table also depicts a possible realization and the mapping of these functionalities to the capabilities of a commercial microcontroller (C16x).

| Desired Functionality | ADC Driver Function | Example: C16x Derivate Wording |
|---|---|---|
| Just one conversion result of a single channel. | Software triggered one-shot conversion where the converted group consists of exactly one channel. | Fixed channel, single conversion, software trigger. |
| Cyclic conversion of a single channel. | Hardware triggered one-shot conversion where the converted group consists of exactly one channel. | Fixed channel, single conversion, hardware trigger. |
| Repeated conversion of a single channel. | Continuous conversion where the converted group consists of exactly one channel. | Fixed channel,continuous conversion. |
| Just one conversion result of each channel within a group. | Software triggered one-shot conversion where the converted group consists of more than one channel. | Auto scan, single conversion, software trigger. |

Cyclic conversion of each channel within a group.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 需求
*原文标题：Requirements*

Upstream requirements:
⌈
The ADC module shall allow grouping of one or more ADC channels into so called ADC Channel groups.
⌋

  Upstream requirements:
⌈
The ADC module's configuration shall be such that an ADC Channel group contains at least one ADC Channel.
⌋

⌈
The ADC module's configuration shall be such that an ADC Channel group contains exactly one ADC Channel if the global limit checking feature is enabled and the channel specific limit checking is enabled for the ADC Channel.
⌋

  Upstream requirements:
⌈
The ADC module shall allow the assignment of an ADC channel to more than one group.
⌋

  Upstream requirements:
⌈
The ADC module's configuration shall be such that all channels contained in one ADC Channel group shall belong to the same ADC HW Unit.
⌋

The ADC module supports the following conversion modes:

*
  ⌈
  The ADC module shall support the conversion mode "One-shot Conversion" for all ADC Channel groups. One-shot conversion means that exactly one conversion is executed for each channel configured for the group being converted.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. ADC Buffer Access 模式示例
*原文标题：ADC Buffer Access Mode Example*

### 16. 示例：配置
*原文标题：Example: Configuration*

The example configuration consists of three ADC groups. Group 1 consists of 2 channels, group 2 and group 3 consist of one channel each. For group 1 and 2 the group access mode `ADC_ACCESS_MODE_STREAMING` is configured. The group access mode of group 3 is `ADC_ACCESS_MODE_SINGLE`. The ADC driver will store the conversion results of group 1-3 in three application buffers, accessed with three configured `ADC_RESULT_POINTER` :

`G1_ResultPtr`, `G2_ResultPtr` and `G3_ResultPtr`.

### 17. 示例：初始化
*原文标题：Example: Initialization*

The user has to provide application result buffers for the ADC group results. One buffer is required for each group. The buffer size depends on the number of group channels, the group access mode and from the number of streaming samples, if streaming access mode is selected. Before starting a group conversion, the user has to initialize the group result pointer using API function `Adc_SetupResultBuffer` which initializes the group result pointer to point to the specified application result buffer.

### 18. 示例：Adc_GetStreamLastPointer Usage
*原文标题：Example: Adc_GetStreamLastPointer Usage*

The ADC driver stores the conversion results of group G1, G2 and G3 in the according result buffer `G1_ResultBuffer`[], `G2_ResultBuffer`[] and `G3_ResultBuffer`[]. A direct access from the ADC API functions to the ADC hardware result register is not supported from the ADC driver.

The user provides three pointers `G1_SamplePtr`, `G2_SamplePtr` and `G3_SamplePtr`

which will point to the ADC application result buffer after calling `Adc_GetStreamLastPointer`.Precisely pointer `G1_SamplePtr` points, after calling `Adc_GetStreamLastPointer`, to the latest `G1_CH0` result of the latest completed conversion round (`G1_CH0` is the first channel in G1 group definition).The application result buffer layout is shown in Figure 2. The application result buffer of group 1 holds three times the streaming results of `G1_CH0` and then three times the streaming results of `G1_CH1`. Knowing the application result buffer layout, the user is able to access all group channel results of the latest conversion round. `G2_SamplePtr` and `G3_SamplePtr` are also aligned, after calling `Adc_GetStreamLastPointer`, to point to the latest result of the first group channel of the according group. Both groups have only one channel.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 示例：Adc_ReadGroup Usage
*原文标题：Example: Adc_ReadGroup Usage*

If the optional API function `Adc_ReadGroup` is enabled, the user has to provide additional buffers for the selected groups, which can hold the results of one group conversion round. Calling `Adc_ReadGroup` copies the latest results from the application result buffer to the application read group buffer. In the example, one application read buffer (`G2_G3_ReadBuffer`) is used for group G2 and G3.

### 20. Conversion processing and interaction

### 21. Background & Rationale

The following examples specify the order of channel conversion depending on group and conversion type:

* Example 1: Channel group containing channels  is configured in Continuous conversion mode. After finishing each scan, the notification (if enabled) is called. Then a new scan is started automatically.
* Example 2: Channel group containing channels  is configured in One-Shot conversion mode. After finishing the scan the notification (if enabled) is called.
* Example 3: Channel group containing channel  is configured in Continuous conversion mode. After finishing each scan the notification (if enabled) is called. Then a new scan is started automatically.
* Example 4: Channel group containing channel  is configured in One-Shot conversion mode. After finishing the scan the notification (if enabled) is called.

### 22. 需求
*原文标题：Requirements*

Upstream requirements:
⌈
The ADC module shall convert only one ADC Channel group per ADC HW Unit at a time. The ADC module shall not support the concurrent conversion of different (even exclusive) ADC Channel groups on the same ADC HW Unit.
⌋

Note: Concurrent conversion of ADC Channel groups on different ADC HW Units may be possible, depending on the capabilities of the hardware. Also concurrent conversion of individual channels within one channel group may be possible if supported by the hardware.

Note: If a channel shall be used in different conversion modes (e.g. continuous conversion mode during normal operation and one-shot conversion mode for a special conversion at a dedicated point in time), this channel shall be assigned to different groups configured with the respective conversion modes.

Note: In order to request the conversion of a channel shared between two groups, the ADC user has to stop the conversion of the first group containing the specified channel and then start the conversion of the second group containing the specified channel.

### 23. 状态 Diagrams
*原文标题：State Diagrams*

The ADC module has a state machine that is shown in the following figures. The states are group specific and not module specific. The diagrams show all possible configuration options for ADC groups. The state transitions depend on the ADC group configuration.

### 24. ADC 状态 Diagram for One-Shot/Continuous Group Conversion 模式
*原文标题：ADC State Diagram for One-Shot/Continuous Group Conversion Mode*

### 25. ADC 状态 Diagram for HW/SW Trigger in One-Shot Group Conversion 模式
*原文标题：ADC State Diagram for HW/SW Trigger in One-Shot Group Conversion Mode*

### 26. ADC 状态 Diagram for SW Trigger in Continuous Conversion 模式
*原文标题：ADC State Diagram for SW Trigger in Continuous Conversion Mode*

### 27. ADC 状态 Diagram for One-Shot Conversion 模式, 软件 Trigger Source, Single Access 模式
*原文标题：ADC State Diagram for One-Shot Conversion Mode, Software Trigger Source, Single Access Mode*

### 28. ADC 状态 Diagram for One-Shot Conversion, Hardware Trigger Source, Single Access 模式
*原文标题：ADC State Diagram for One-Shot Conversion, Hardware Trigger Source, Single Access Mode*

### 29. ADC 状态 Diagram for One-Shot Conversion 模式, Hardware Trigger Source, Linear and Circular Streaming Access 模式
*原文标题：ADC State Diagram for One-Shot Conversion Mode, Hardware Trigger Source, Linear and Circular Streaming Access Mode*

### 30. ADC 状态 Diagram for Continuous Conversion 模式, 软件 Trigger Source, Single Access 模式
*原文标题：ADC State Diagram for Continuous Conversion Mode, Software Trigger Source, Single Access Mode*

### 31. ADC 状态 Diagram for Continuous Conversion 模式, 软件 Trigger Source, Linear and Circular Streaming Access 模式
*原文标题：ADC State Diagram for Continuous Conversion Mode, Software Trigger Source, Linear and Circular Streaming Access Mode*

### 32. 支持 and 管理 of HW low power states
*原文标题：Support and management of HW low power states*

Some ADC HW Module allow to be set in some operation modes which reduce the power consumption, eventually at the cost of a slower reaction time, a lower performance or eventually complete unavailability. Each ADC module could support one or more low power operation modes, considering the Full Power Mode as always present and set per default at startup.

### 33. Background

The ADC Driver offers power state control APIs and a background elaboration mechanism to handle asynchronous power state change processes (i.e. power state changes which are not immediately complete as the they are requested, but need some longer operations).

It is assumed that all constraints deriving from ECU and SW architecture are already satisfied by the upper layers (Application, Mode Management in the service layer, IoHwAbstraction components dealing with peripheral control), thus the scope of control is limited to the ADC HW peripheral.

A check on the operation sequence is executed by the ADC Driver in order to avoid requesting a different power state before the previous request is still being processed or activating a power state when no preparation for the same has been requested.

The ADC module shall support power control capabilities as an optional function. This module neither mandates to use only power control enabled MCUs nor to configure the same. Rather it proposes a way to handle power states if this is supported by the suppliers.

### 34. 需求
*原文标题：Requirements*

⌈
The ADCDriver shall support power state changes and its APIs when the corresponding configuration parameter AdcLowPowerStatesSupport is set to TRUE.
⌋

⌈
If the parameter AdcLowPowerStatesSupport is enabled then the APIs `Adc_PreparePowerState`, `Adc_SetPowerState`, `Adc_GetCurrentPowerState`, `Adc_GetTargetPowerState` shall be generated and shall be used to manage and get informations on power state transitions.
⌋

⌈
The APIs `Adc_GetTargetPowerState` and `Adc_GetCurrentPowerState` shall be respectively used to gather information on the requested and the target ADC power states.
⌋

⌈
The API `Adc_PreparePowerState` shall be used to start a power state transition.
⌋

⌈
After preparation for a power state is achieved by API `Adc_PreparePowertState` then the API `Adc_SetPowerState` shall be used to achieve the requested power state of the ADC module.

In order to avoid incoherent power state conditions, some APIs (`Adc_SetPowerState`, `Adc_PreparePowerState`) have to be called in a given sequence, otherwise an error (if DET tracing is enabled) is stored and the action is interrupted. The ADC Driver keeps track of the call sequence.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.:

### 36. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Adc
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API is called prior to initialization. | ADC_E_UNINIT | 0x0A |
| API called while ADC is already initialized. | ADC_E_ALREADY_INITIALIZED | 0x0D |
| API called with incorrect buffer pointer. | ADC_E_PARAM_POINTER | 0x14 |
| API called with non existing group. | ADC_E_PARAM_GROUP | 0x15 |
| API called for a group configured for continuous conversion mode. | ADC_E_WRONG_CONV_MODE | 0x16 |
| API call not allowed according group configuration. | ADC_E_WRONG_TRIGG_SRC | 0x17 |
| API called and notification function pointer is NULL. | ADC_E_NOTIF_CAPABILITY | 0x18 |
| API called while result buffer pointer is not initialized. | ADE_E_BUFFER_UNINIT | 0x19 |
| API call with unsupported power state request. | ADE_E_POWER_STATE_NOT_SUPPORTED | 0x1B |
| ADC not prepared for requested target power state. | ADC_E_PERIPHERAL_NOT_PREPARED | 0x1D |

⌋

### 37. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Adc
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API is called while another conversion is already running, a HW trigger is already enabled, a request is already stored in the queue. | ADC_E_BUSY | 0x0B |
| API is called while group is in state ADC_IDLE or non enabled group. | ADC_E_IDLE | 0x0C |
| API called while one or more ADC groups are not in IDLE state. | ADC_E_NOT_DISENGAGED | 0x1A |
| Requested power state can not be reached. | ADC_E_TRANSITION_NOT_POSSIBLE | 0x1C |

⌋

### 38. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 39. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 40. API 规范
*原文标题：API specification*

### 41. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following modules are listed:

 Definition of imported datatypes of module Adc
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 42. 类型定义
*原文标题：Type definitions*

### 43. Adc_ConfigType

Definition of datatype `Adc_ConfigType`
⌈
| Name | Adc_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | -- | < |
| ^ | Type | - |
| ^ | Comment | Implementation specific configuration data structure. |
| Description | Data structure containing the set of configuration parameters required for initializing the ADC Driver and ADC HW Unit(s). | < |
| Available via | Adc.h | < |

⌋

### 44. Adc_ChannelType

Definition of datatype `Adc_ChannelType`
⌈
| Name | Adc_ChannelType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | The range of this type is μC specific and has to be described by the supplier. |
| Description | Numeric ID of an ADC channel. | < | < |
| Available via | Adc.h | < | < |

⌋

### 45. Adc_GroupType

Definition of datatype `Adc_GroupType`
⌈
| Name | Adc_GroupType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | The range of this type is μC specific and has to be described by the supplier. |
| Description | Numeric ID of an ADC channel group. | < | < |
| Available via | Adc.h | < | < |

⌋

### 46. Adc_ValueGroupType

Definition of datatype `Adc_ValueGroupType`
⌈
| Name | Adc_ValueGroupType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | int | < | < |
| Range | -- | - | Implementation specific. |
| Description | Type for reading the converted values of a channel group (raw, without further scaling, alignment according precompile switch ADC_RESULT_ALIGNMENT). | < | < |
| Available via | Adc.h | < | < |

⌋

The result values shall be stored in an integer buffer, i.e. an array of integers.

The following rules shall apply to the driver implementation:

*
    Upstream requirements:
  ⌈
  In single value access mode the result buffer shall have as many elements as channels belonging to the group. In this way each buffer element corresponds to a channel, in the order the channels are defined in the group.
  ⌋
*
    Upstream requirements:
  ⌈
  In streaming access mode the result buffer shall have m*n elements, where n is the number of channels belonging to the group, m the number of samples acquired per channel. In this way the first m elements belong to the first channel in the group, the second m elements to the second channel and so on.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Adc_PrescaleType

Definition of datatype `Adc_PrescaleType`
⌈
| Name | Adc_PrescaleType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | The range of this type is μC specific and has to be described by the supplier. |
| Description | Type of clock prescaler factor. (This is not an API type). | < | < |
| Available via | Adc.h | < | < |

⌋

### 48. Adc_ConversionTimeType

Definition of datatype `Adc_ConversionTimeType`
⌈
| Name | Adc_ConversionTimeType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | The range of this type is μC specific and has to be described by the supplier. |
| Description | Type of conversion time, i.e. the time during which the sampled analogue value is converted into digital representation. (This is not an API type). | < | < |
| Available via | Adc.h | < | < |

⌋

### 49. Adc_SamplingTimeType

Definition of datatype `Adc_SamplingTimeType`
⌈
| Name | Adc_SamplingTimeType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | The range of this type is μC specific and has to be described by the supplier. |
| Description | Type of sampling time, i.e. the time during which the value is sampled, (in clock-cycles). (This is not an API type). | < | < |
| Available via | Adc.h | < | < |

⌋

### 50. Adc_ResolutionType

Definition of datatype `Adc_ResolutionType`
⌈
| Name | Adc_ResolutionType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | -- | - | The range of this type is μC specific and has to be described by the supplier. |
| Description | Type of channel resolution in number of bits. (This is not an API type). | < | < |
| Available via | Adc.h | < | < |

⌋

### 51. Adc_StatusType

Definition of datatype `Adc_StatusType`
⌈
| Name | Adc_StatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ADC_IDLE | 0x00 | * The conversion of the specified group has not been started. |

* No result is available.
| ^ | ADC_BUSY | 0x01 | * The conversion of the specified group has been started and is still going on. |
|---|---|---|---|

* So far no result is available.
| ^ | ADC_COMPLETED | 0x02 | * A conversion round (which is not the final one) of the specified group has been finished. |
|---|---|---|---|

* A result is available for all channels of the group.
| ^ | ADC_STREAM_COMPLETED | 0x03 | * The result buffer is completely filled |
|---|---|---|---|

* For each channel of the selected group the number of samples to be acquired is available
| Description | Current status of the conversion of the requested ADC Channel group. | < | < |
|---|---|---|---|
| Available via | Adc.h | < | < |

⌋

### 52. Adc_TriggerSourceType

Definition of datatype `Adc_TriggerSourceType`
⌈
| Name | Adc_TriggerSourceType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ADC_TRIGG_SRC_SW | 0x00 | Group is triggered by a software API call. |
| ^ | ADC_TRIGG_SRC_HW | 0x01 | Group is triggered by a hardware event. |
| Description | Type for configuring the trigger source for an ADC Channel group. | < | < |
| Available via | Adc.h | < | < |

⌋

### 53. Adc_GroupConvModeType

Definition of datatype `Adc_GroupConvModeType`
⌈
| Name | Adc_GroupConvModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ADC_CONV_MODE_ONESHOT | 0x00 | Exactly one conversion of each channel in an ADC channel group is performed after the configured trigger event. In case of 'group trigger source software', a started One-Shot conversion can be stopped by a software API call. In case of 'group trigger source hardware', a started One-Shot conversion can be stopped by disabling the trigger event (if supported by hardware). |
| ^ | ADC_CONV_MODE_CONTINUOUS | 0x01 | Repeated conversions of each ADC channel in an ADC channel group are performed. 'Continuous conversion mode' is only available for 'group trigger source software'. A started 'Continuous conversion' can be stopped by a software API call. |
| Description | Type for configuring the conversion mode of an ADC Channel group. | < | < |
| Available via | Adc.h | < | < |

⌋

### 54. Adc_GroupPriorityType

Definition of datatype `Adc_GroupPriorityType`
⌈
| Name | Adc_GroupPriorityType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | 0..255 | - | - |
| Description | Priority level of the channel. Lowest priority is 0. | < | < |
| Available via | Adc.h | < | < |

⌋

### 55. Adc_GroupDefType

Definition of datatype `Adc_GroupDefType`
⌈
| Name | Adc_GroupDefType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | implementation_specific | < | < |
| Description | Type for assignment of channels to a channel group (this is not an API type). | < | < |
| Available via | Adc.h | < | < |

⌋

### 56. Adc_StreamNumSampleType

Definition of datatype `Adc_StreamNumSampleType`
⌈
| Name | Adc_StreamNumSampleType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | The range of this type is μC specific and has to be described by the supplier. |
| Description | Type for configuring the number of group conversions in streaming access mode (in single access mode, parameter is 1). | < | < |
| Available via | Adc.h | < | < |

⌋

### 57. Adc_StreamBufferModeType

Definition of datatype `Adc_StreamBufferModeType`
⌈
| Name | Adc_StreamBufferModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ADC_STREAM_BUFFER_LINEAR | 0x00 | The ADC Driver stops the conversion as soon as the stream buffer is full (number of samples reached). |
| ^ | ADC_STREAM_BUFFER_CIRCULAR | 0x01 | The ADC Driver continues the conversion even if the stream buffer is full (number of samples reached) by wrapping around the stream buffer itself. |
| Description | Type for configuring the streaming access mode buffer type. | < | < |
| Available via | Adc.h | < | < |

⌋

### 58. Adc_GroupAccessModeType

Definition of datatype `Adc_GroupAccessModeType`
⌈
| Name | Adc_GroupAccessModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ADC_ACCESS_MODE_SINGLE | 0x00 | Single value access mode. |
| ^ | ADC_ACCESS_MODE_STREAMING | 0x01 | Streaming access mode. |
| Description | Type for configuring the access mode to group conversion results. | < | < |
| Available via | Adc.h | < | < |

⌋

### 59. Adc_HwTriggerSignalType

Definition of datatype `Adc_HwTriggerSignalType`
⌈
| Name | Adc_HwTriggerSignalType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ADC_HW_TRIG_RISING_EDGE | 0x00 | React on the rising edge of the hardware trigger signal (only if supported by the ADC hardware). |
| ^ | ADC_HW_TRIG_FALLING_EDGE | 0x01 | React on the falling edge of the hardware trigger signal (only if supported by the ADC hardware). |
| ^ | ADC_HW_TRIG_BOTH_EDGES | 0x02 | React on both edges of the hardware trigger signal (only if supported by the ADC hardware). |
| Description | Type for configuring on which edge of the hardware trigger signal the driver should react, i.e. start the conversion (only if supported by the ADC hardware). | < | < |
| Available via | Adc.h | < | < |

⌋

### 60. Adc_HwTriggerTimerType

Definition of datatype `Adc_HwTriggerTimerType`
⌈
| Name | Adc_HwTriggerTimerType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint | < | < |
| Range | -- | - | The range of this type is μC specific and has to be described by the supplier. |
| Description | Type for the reload value of the ADC module embedded timer (only if supported by the ADC hardware). | < | < |
| Available via | Adc.h | < | < |

⌋

### 61. Adc_PriorityImplementationType

Definition of datatype `Adc_PriorityImplementationType`
⌈
| Name | Adc_PriorityImplementationType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ADC_PRIORITY_NONE | 0x00 | priority mechanism is not available |
| ^ | ADC_PRIORITY_HW | 0x01 | Hardware priority mechanism is available only |
| ^ | ADC_PRIORITY_HW_SW | 0x02 | Hardware and software priority mechanism is available |
| Description | Type for configuring the prioritization mechanism. | < | < |
| Available via | Adc.h | < | < |

⌋

### 其余 80 章（内容从略，见纯文本全文）

62. Adc_GroupReplacementType
63. Adc_ChannelRangeSelectType
64. Adc_ResultAlignmentType
65. Adc_PowerStateType
66. Adc_PowerStateRequestResultType
67. 功能定义
68. Adc_Init
69. Adc_SetupResultBuffer
70. Adc_DeInit
71. Adc_StartGroupConversion
72. Adc_StopGroupConversion
73. Adc_ReadGroup
74. Adc_EnableHardwareTrigger
75. Adc_DisableHardwareTrigger
76. Adc_EnableGroupNotification
77. Adc_DisableGroupNotification
78. Adc_GetGroupStatus
79. Adc_GetStreamLastPointer
80. Adc_GetVersionInfo
81. Adc_SetPowerState
82. Adc_GetCurrentPowerState
83. Adc_GetTargetPowerState
84. Adc_PreparePowerState
85. Callback 通知
86. Scheduled functions
87. Adc_Main_PowerTransitionManager
88. Expected 接口
89. Mandatory 接口
90. Optional 接口
91. Configurable 接口
92. IoHwAb_Adc_Notification<#groupID>
93. IoHwAb_Adc_NotifyReadyForPowerState<#模式>
94. 时序图
95. the ADC 驱动的初始化
96. De-Initialization of the ADC 驱动
97. 软件 triggered One-Shot conversion without 通知
98. 软件 triggered continuous conversion with 通知
99. Hardware triggered One-Shot conversion with 通知
100. HW Trigger- One-Shot conversion - Linear Streaming
101. No Priority Mechanism - No Queuing
102. No Priority Mechanism - SW Queuing
103. HW_SW Priority Mechanism - SW Queuing
104. HW Priority Mechanism - HW Queuing
105. HW_SW Priority Mechanism - HW/SW Queuing
106. 配置规范
107. How to read this chapter
108. Containers and 配置 parameters
109. Adc
110. AdcGeneral
111. AdcPowerStateConfig
112. AdcConfigSet
113. AdcChannel
114. AdcHwUnit
115. 发布信息
116. AdcPublishedInformation
117. 配置 of symbolic names
118. 附录
119. 不适用需求
120. Change history of AUTOSAR traceable items
121. Traceable item history of this document according to AUTOSAR Release R25-11.
122. Added 规范 Items in R25-11
123. Changed 规范 Items in R25-11
124. Deleted 规范 Items in R25-11
125. Added Constraints in R25-11
126. Changed Constraints in R25-11
127. Deleted Constraints in R25-11
128. 规范 Item History of this document compared to AUTOSAR R23-11.
129. Added 规范 Items in R24-11
130. Changed 规范 Items in R24-11
131. Deleted 规范 Items in R24-11
132. Added Constraints in R24-11
133. Changed Constraints in R24-11
134. Deleted Constraints in R24-11
135. 规范 Item History of this document compared to AUTOSAR R22-11.
136. Added 规范 Items in R23-11
137. Changed 规范 Items in R23-11
138. Deleted 规范 Items in R23-11
139. Added Constraints in R23-11
140. Changed Constraints in R23-11
141. Deleted Constraints in R23-11
