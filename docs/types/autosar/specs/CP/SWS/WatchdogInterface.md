# Specification of Watchdog Interface (`WatchdogInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 041 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_WatchdogInterface_041\AUTOSAR_CP_SWS_WatchdogInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_WatchdogInterface_041\AUTOSAR_CP_SWS_WatchdogInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_WatchdogInterface_041\zzgen\CP_SWS_WatchdogInterface.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration of the AUTOSAR Basic Software module Watchdog Interface.

In case of more than one watchdog device and watchdog driver (e.g. both an internal software watchdog and an external hardware watchdog) being used on an ECU, this module allows the watchdog manager (or any other client of the watchdog) to select the correct watchdog driver - and thus the watchdog device - while retaining the API and functionality of the underlying driver.

The Watchdog Interface is part of the Onboard Device Abstraction Layer .

  Upstream requirements: , ,
⌈
The Watchdog Interface provides uniform access to services of the underlying watchdog drivers like mode switching and setting trigger conditions
⌋

## 模块依赖

The Watchdog Interface is part of the ECU Abstraction Layer. It allows the upper layer, especially the watchdog manager, to uniformly access one or more watchdog drivers. The implementation of the Watchdog Interface therefore depends on the number of watchdog drivers below.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration of the AUTOSAR Basic Software module Watchdog Interface.

In case of more than one watchdog device and watchdog driver (e.g. both an internal software watchdog and an external hardware watchdog) being used on an ECU, this module allows the watchdog manager (or any other client of the watchdog) to select the correct watchdog driver - and thus the watchdog device - while retaining the API and functionality of the underlying driver.

The Watchdog Interface is part of the Onboard Device Abstraction Layer .

  Upstream requirements: , ,
⌈
The Watchdog Interface provides uniform access to services of the underlying watchdog drivers like mode switching and setting trigger conditions
⌋

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

Note: For this module there are no local acronyms and abbreviations. All used acronyms and abbreviations should be contained in the .

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Watchdog Interface.

Thus, the specification  shall be considered as additional and required specification for Watchdog Interface.

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

The Watchdog Interface is part of the ECU Abstraction Layer. It allows the upper layer, especially the watchdog manager, to uniformly access one or more watchdog drivers. The implementation of the Watchdog Interface therefore depends on the number of watchdog drivers below.

### 10. 文件结构
*原文标题：File structure*

### 11. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 12. Version check

For details refer to .

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| Classification of development errors |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

### 15. 通用行为
*原文标题：General behavior*

Upstream requirements: ,
⌈
The Watchdog Interface shall not add functionality to the watchdog drivers. Also the Watchdog Interface does not abstract from watchdog properties like toggle or window mode, timeout periods etc. that is it does not hide any features of the underlying watchdog driver and watchdog hardware.
⌋

### 16. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 17. Development 错误
*原文标题：Development Errors*

Definition of development errors in module WdgIf
  Upstream requirements: , , , , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called with wrong device index parameter | WDGIF_E_PARAM_DEVICE | 0x01 |
| NULL pointer checking | WDGIF_E_PARAM_POINTER | 0x03 |

⌋

  Upstream requirements: , , ,
⌈
If more than one watchdog driver is configured and the development error detection is enabled for this module, the parameter DeviceIndex shall be checked for being an existing device within the module's services. Detected errors shall be reported to the Default Error Tracer (DET) with the error code `WDGIF_E_PARAM_DEVICE` and the called service shall not be executed.
⌋

### 18. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 19. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 20. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 21. API 规范
*原文标题：API specification*

### 22. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following modules are listed:

 Definition of imported datatypes of module WdgIf
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |

⌋

### 23. 类型定义
*原文标题：Type definitions*

Note: The implementer of the Watchdog Interface shall not change or extend the type definitions of the Watchdog Interface for a specific watchdog device or platform.

### 24. WdgIf_ModeType

Definition of datatype `WdgIf_ModeType`
  Upstream requirements:
⌈
| Name | WdgIf_ModeType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | WDGIF_OFF_MODE | - | In this mode, the watchdog driver is disabled (switched off). |
| ^ | WDGIF_SLOW_MODE | - | In this mode, the watchdog driver is set up for a long timeout period (slow triggering). |
| ^ | WDGIF_FAST_MODE | - | In this mode, the watchdog driver is set up for a short timeout period (fast triggering). |
| Description | Mode type of the WdgIf module | < | < |
| Available via | WdgIf.h | < | < |

⌋

  Upstream requirements:
⌈
The `WdgIf_ModeType` values shall be passed as parameters to the watchdog drivers mode switching function (`Wdg_SetMode`).
⌋

Note: The hardware specific settings behind these modes are given in the watchdog drivers configuration set.

### 25. 功能定义
*原文标题：Function definitions*

Upstream requirements: , ,
⌈
The Watchdog Interface shall map the APIs specified in this chapter to the API of the underlying drivers. For functional behavior refer to the specification of the watchdog driver
⌋

  Upstream requirements:
⌈
The Watchdog Interface shall use the parameter DeviceIndex for selection of watchdog drivers. If only one watchdog driver is configured, the parameter DeviceIndex shall be ignored.
⌋

  Upstream requirements:
⌈
The data type for the watchdog device index shall be uint8. DeviceIndex shall provide a zero-based consecutive index.
⌋

  Upstream requirements:
⌈
If only one watchdog driver is configured, the Watchdog Interface shall cause no runtime overhead when mapping the Watchdog Interface API to the API of the corresponding Watchdog Driver.
⌋

Implementation hint: This could be done by using macros as for example

#define `WdgIf_SetMode`(DeviceIndex, WdgMode) \
        `Wdg_SetMode`(WdgMode)

  Upstream requirements:
⌈
If more than one watchdog driver is configured, the Watchdog Interface shall use efficient mechanisms to map the API calls to the appropriate watchdog driver.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. WdgIf_SetMode

Definition of API function `WdgIf_SetMode`
  Upstream requirements:
⌈
| Service Name | WdgIf_SetMode | < |
|---|---|---|
| Syntax | Std_ReturnType WdgIf_SetMode ( |  |

  uint8 DeviceIndex,
  `WdgIf_ModeType` WdgMode
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | DeviceIndex | Identifies the Watchdog Driver instance. |
| ^ | WdgMode | The watchdog driver mode (see Watchdog Driver). |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | - |
| Description | Map the service WdgIf_SetMode to the service Wdg_SetMode of the corresponding Watchdog Driver. | < |
| Available via | WdgIf.h | < |

⌋

  Upstream requirements:
⌈
`WdgIf_SetMode` shall return the value which it gets from the service `Wdg_SetMode` of the corresponding Watchdog Driver.
⌋

Possible content of the return value is specified by the Watchdog Driver, see .

### 27. WdgIf_SetTriggerCondition

Definition of API function `WdgIf_SetTriggerCondition`
  Upstream requirements:
⌈
| Service Name | WdgIf_SetTriggerCondition | < |
|---|---|---|
| Syntax | void WdgIf_SetTriggerCondition ( |  |

  uint8 DeviceIndex,
  uint16 Timeout
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | DeviceIndex | Identifies the Watchdog Driver instance. |
| ^ | Timeout | Timeout value (milliseconds) for setting the trigger counter. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Map the service WdgIf_SetTriggerCondition to the service Wdg_SetTriggerCondition of the corresponding Watchdog Driver. | < |
| Available via | WdgIf.h | < |

⌋

### 28. Callback 通知
*原文标题：Callback notifications*

This module does not provide any callback functions.

### 29. Scheduled functions

This module does not need any scheduled functions.

### 30. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 31. Mandatory 接口
*原文标题：Mandatory interfaces*

This chapter defines all interfaces which are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module WdgIf
  Upstream requirements:
⌈
| API Function | Header File | Description |
|---|---|---|
| Wdg_SetMode | Wdg.h | Switches the watchdog into the mode Mode. |
| Wdg_SetTriggerCondition | Wdg.h | Sets the timeout value for the trigger counter. |

⌋

### 32. Optional 接口
*原文标题：Optional interfaces*

This chapter defines all interfaces which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module WdgIf
  Upstream requirements:
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |

⌋

### 33. Configurable 接口
*原文标题：Configurable interfaces*

There are no configurable interfaces for this module.

### 34. 时序图
*原文标题：Sequence diagrams*

Refer to specification of watchdog driver .

### 35. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification Chapter  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave Chapter  in the specification to guarantee comprehension.

Chapter  specifies the structure (containers) and the parameters of the module WdgIf.

Chapter  specifies published information of the module WdgIf.

### 36. How to read this chapter

For details refer to .

### 37. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters are described in Chapter  and Chapter .

### 38. WdgIf

Definition of EcucModuleDef WdgIf
⌈
| Module Name | WdgIf |
|---|---|
| Description | Configuration of the WdgIf (Watchdog Interface) module. |
| Post-Build Variant Support | false |
| Supported Config Variants | VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| WdgIfDevice | 1..* | It contains the information for the selection of a particular Watchdog device in case multiple Watchdog drivers are connected. |
| WdgIfGeneral | 1 | This container collects all generic watchdog interface parameters. |

⌋

### 39. WdgIfGeneral

Definition of EcucParamConfContainerDef WdgIfGeneral
⌈
| Container Name | WdgIfGeneral | < | < |
|---|---|---|---|
| Parent Container | WdgIf | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container collects all generic watchdog interface parameters. | < | < |
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| WdgIfDevErrorDetect | 1 |  |

No Included Containers
⌋

 Definition of EcucBooleanParamDef WdgIfDevErrorDetect
⌈
| Parameter Name | WdgIfDevErrorDetect | < | < |
|---|---|---|---|
| Parent Container | WdgIfGeneral | < | < |
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

### 40. WdgIfDevice

Definition of EcucParamConfContainerDef WdgIfDevice
⌈
| Container Name | WdgIfDevice | < | < |
|---|---|---|---|
| Parent Container | WdgIf | < | < |
| Upstream mapping defined | - | < | < |
| Description | It contains the information for the selection of a particular Watchdog device in case multiple Watchdog drivers are connected. | < | < |
| Multiplicity | 1..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| WdgIfDeviceIndex | 1 |  |
| WdgIfDriverRef | 1 |  |

No Included Containers
⌋

 Definition of EcucIntegerParamDef WdgIfDeviceIndex
⌈
| Parameter Name | WdgIfDeviceIndex | < | < |
|---|---|---|---|
| Parent Container | WdgIfDevice | < | < |
| Upstream mapping defined | - | < | < |
| Description | Represents the watchdog interface ID so that it can be referenced by the watchdog manager. | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucIntegerParamDef (Symbolic Name generated for this parameter) | < | < |
| Range | 0 .. 255 |  | < |
| Default value | - | < | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Dependency |  | < | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 发布信息
*原文标题：Published Information*

For details refer to .

### 42. 附录
*原文标题：Appendix*

### 43. 不适用需求
*原文标题：Not applicable requirements*

Upstream requirements: , , , , ,
⌈
These requirements are not applicable to this specification.
⌋

### 44. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 45. Traceable item history of this document according to AUTOSAR Release R24-11

### 46. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 47. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 48. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 49. Traceable item history of this document according to AUTOSAR Release R25-11

### 50. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 51. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 52. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none
