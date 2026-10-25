# Specification of Default Error Tracer (`DefaultErrorTracer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 017 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_DefaultErrorTracer_017\AUTOSAR_CP_SWS_DefaultErrorTracer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_DefaultErrorTracer_017\AUTOSAR_CP_SWS_DefaultErrorTracer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_DefaultErrorTracer_017\zzgen\CP_SWS_DefaultErrorTracer.complete.txt`

## 文档简介

This specification describes the API of the Default Error Tracer. All detected development and runtime errors in the Basic Software are reported to this module. The API parameters allow for tracing source and kind of error:

* Module in which error has been detected
* Function in which error has been detected
* Type of error

The functionality behind the API of this module is not in scope of this specification. It is up to the software developer and software integrator to choose the optimal strategy for his specific application and testing environment. Possible functionalities could be:

* Set debugger breakpoint within error reporting API
* Count reported errors
* Handle the runtime errors by using default values
* Log calls and passed parameters in RAM buffer
* Send reported errors via communication interface to external logger

Note: The software requirements of the Default Error Tracer are specified in the SRS Diagnostics document.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the API of the Default Error Tracer. All detected development and runtime errors in the Basic Software are reported to this module. The API parameters allow for tracing source and kind of error:

* Module in which error has been detected
* Function in which error has been detected
* Type of error

The functionality behind the API of this module is not in scope of this specification. It is up to the software developer and software integrator to choose the optimal strategy for his specific application and testing environment. Possible functionalities could be:

* Set debugger breakpoint within error reporting API
* Count reported errors
* Handle the runtime errors by using default values
* Log calls and passed parameters in RAM buffer
* Send reported errors via communication interface to external logger

Note: The software requirements of the Default Error Tracer are specified in the SRS Diagnostics document.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Default Error Tracer module that are not included in the .

DET: Default Error Tracer.

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Default Error Tracer.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Default Error Tracer.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

This specification does not define the functionality behind the error reporting API.

Memory protection mechanisms of the operating system are not taken into account.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. 文件结构
*原文标题：File structure*

Upstream requirements:
⌈
Det.h includes all user relevant information for the tracing of errors reported via its services.
⌋

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| API naming convention |  |  |
| Shared code shall be reentrant |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support pre-compile configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide at least a basic set of module files |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| The Basic Software Module specifications shall specify at least in the description which other |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 功能规范
*原文标题：Functional specification*

The Default Error Tracer provides functionality to support error detection and tracing of errors during the development and runtime of Software Components and other Basic Software Modules. For this purpose the Default Error Tracer receives and evaluates error messages from these components and modules.

Due to the always specific (non generic!) requirements regarding functionality in error cases there is no explicit specification of the DET implementation, except:

* Configurable lists of error hooks will be executed in case of an error report.
* Interfaces will be provided to report errors, allow optional error recovery after reset,and to handle optional error recovery information.

### 13. 初始化
*原文标题：Initialization*

Upstream requirements:
⌈
The DET shall provide the initialization function `Det_Init` (see ).
⌋

  Upstream requirements:
⌈
Each call of the `Det_Init` function shall be used to set the Default Error Tracer to a defined initial status (e.g. by removing optional error recovery information).
⌋

Note:  is not testable without knowledge about the non specified functionality and the probably used optional error recovery information.

Note: The usage and meaning of error recovery information is optional and not specified.

  Upstream requirements:
⌈
The Default Error Tracer shall provide the function `Det_Start` (see ).
⌋

Note: The Default Error Tracer's environment can use the function `Det_Start` to trigger the Default Error Tracer module for instance (if needed) in case of completed NVRAM initialization for persistent error storage.

Note: In case the Default Error Tracer does not require a startup call the `Det_Start` function can be empty.

Note: The integrator can decide by configuration of the EcuM, when `Det_Init` will be called.

Note: The integrator can decide by configuration of the EcuM or ModeM, when and whether `Det_Start` will be called.

### 14. 错误 Hooks
*原文标题：Error Hooks*

To support debugging and error tracing during development and runtime, the Default Error Tracer provides functionality for notification of received error reports. Therefore so called error hooks are configurable. The error hooks will be used to forward error notifications. If at least one error hook has been configured, the Default Error Tracer will notify each received error report by calling the configured error hook(s).

Configuration of error hooks is done by the AUTOSAR configuration methods described in chapter .

  Upstream requirements: ,
⌈
Each `Error_Hook` shall be called with the same set of parameters as the corresponding functions `Det_ReportError` and `Det_ReportRuntimeError`. The configured callout functions are ECU configurations, see DetErrorHook, DetReportRuntimeErrorCallout.
⌋

### 15. 错误 Reporting
*原文标题：Error Reporting*

Upstream requirements:
⌈
If the Default Error Tracer has not been initialized before `Det_ReportRuntimeError` reporting function is called, the function shall return immediately without any other action (no `Error_Hook` shall be used, no implementer specific function shall be performed and no error shall be reported).
⌋

  Upstream requirements:
⌈
If the Default Error Tracer has not been initialized before `Det_ReportError` is called, the execution shall stop. (no `Error_Hook` shall be used, no implementer specific function shall be performed and no error shall be reported).
⌋

  Upstream requirements:
⌈
The error report functions `Det_ReportError` and `Det_ReportRuntimeError` shall call immediately all configured `Error_Hooks` (see DetReportRuntimeErrorCallout ).
⌋

  Upstream requirements: ,
⌈
The Default Error Tracer shall execute the corresponding list of configured DetErrorHook (refer to DetErrorHook) in the order given by the configuration.
⌋

  Upstream requirements:
⌈
Optional implementation specific functionality shall only be performed after all configured `Error_Hooks` (see DetReportRuntimeErrorCallout and `ECUC_Det_0011`) have been called.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 错误分类
*原文标题：Error Classification*

The Default Error Tracer has the following AUTOSAR errors:

* Development errors, see Section
* Runtime errors: not applicable
* Production errors: not applicable
* Extended production errors: not applicable

The call of default error functions will cause calls to all configured callout functions see parameter DetErrorHook and DetReportRuntimeErrorCallout

  Upstream requirements:
⌈
The calls of `Det_ReportError` shall invoke all callback functions configured in DetErrorHook (see parameter DetErrorHook).
⌋

  Upstream requirements:
⌈
The calls of `Det_ReportRuntimeError` shall invoke all callback functions configured in DetReportRuntimeErrorCallout.
⌋

### 17. Development 错误
*原文标题：Development Errors*

DET cannot report development errors.

### 18. Runtime 错误
*原文标题：Runtime Errors*

DET cannot report runtime errors.

### 19. Production 错误
*原文标题：Production Errors*

There are no production errors in DET.

### 20. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors in DET.

### 21. API 规范
*原文标题：API specification*

The specification of the default error tracer API is provided here.

### 22. Imported 类型
*原文标题：Imported types*

This section lists all imported types used by the API. Even if the DET does not require new types, some RTE or Component types can be used within the configuration of the hook functions. Therefore the DET also has the standardized include structure (see `SRS_BSW_00447`) for modules with service interfaces.

 Definition of imported datatypes of module Det
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |

⌋

### 23. 类型定义
*原文标题：Type definitions*

### 24. Det_ConfigType

Definition of datatype `Det_ConfigType`
  Upstream requirements:
⌈
| Name | Det_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | Configuration data structure of the Det module. | < |
| Available via | Det.h | < |

⌋

### 25. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 26. Det_Init

Definition of API function `Det_Init`
  Upstream requirements: , ,
⌈
| Service Name | Det_Init | < |
|---|---|---|
| Syntax | void Det_Init ( |  |

  const `Det_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the selected configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to initialize the Default Error Tracer. | < |
| Available via | Det.h | < |

⌋

### 27. Det_Start

Definition of API function `Det_Start`
  Upstream requirements:
⌈
| Service Name | Det_Start | < |
|---|---|---|
| Syntax | void Det_Start ( |  |

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
| Description | Service to start the Default Error Tracer. | < |
| Available via | Det.h | < |

⌋

### 28. Det_ReportError

Definition of API function `Det_ReportError`
  Upstream requirements:
⌈
| Service Name | Det_ReportError | < |
|---|---|---|
| Syntax | Std_ReturnType Det_ReportError ( |  |

  uint16 ModuleId,
  uint8 InstanceId,
  uint8 ApiId,
  uint8 ErrorId
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ModuleId | Module ID of calling module. |
| ^ | InstanceId | The identifier of the index based instance of a module, starting from 0, If the module is a single instance module it shall pass 0 as the InstanceId. |
| ^ | ApiId | ID of API service in which error is detected (defined in SWS of calling module) |
| ^ | ErrorId | ID of detected development error (defined in SWS of calling module). |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | never returns a value, but has a return type for compatibility with services and hooks |
| Description | Service to report development errors. | < |
| Available via | Det.h | < |

⌋

Note: `Det_ReportError` may be callable in interrupt context.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Det_ReportRuntimeError

Definition of API function `Det_ReportRuntimeError`
  Upstream requirements:
⌈
| Service Name | Det_ReportRuntimeError | < |
|---|---|---|
| Syntax | Std_ReturnType Det_ReportRuntimeError ( |  |

  uint16 ModuleId,
  uint8 InstanceId,
  uint8 ApiId,
  uint8 ErrorId
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ModuleId | Module ID of calling module. |
| ^ | InstanceId | The identifier of the index based instance of a module, starting from 0, If the module is a single instance module it shall pass 0 as the InstanceId. |
| ^ | ApiId | ID of API service in which error is detected (defined in SWS of calling module) |
| ^ | ErrorId | ID of detected runtime error (defined in SWS of calling module). |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | returns always E_OK (is required for services) |
| Description | Service to report runtime errors. If a callout has been configured then this callout shall be called. | < |
| Available via | Det.h | < |

⌋

### 30. Expected 接口
*原文标题：Expected Interfaces*

This chapter specifies all required interfaces of other modules.

### 31. Mandatory 接口
*原文标题：Mandatory Interfaces*

There are no mandatory expected interfaces.

### 32. Optional 接口
*原文标题：Optional Interfaces*

This chapter defines the interfaces that are required to fulfill an optional functionality of the Default Error Tracer.

 Definition of optional interfaces requested by module Det
  Upstream requirements: ,
⌈
| API Function | Header File | Description |
|---|---|---|
| There are no optional interfaces. | < | < |

⌋

### 33. Configurable 接口
*原文标题：Configurable Interfaces*

Upstream requirements:
⌈
if callout functions are configured, they should have the same signatures as the corresponding functions. If several callouts are defined for the same service they should have the same ID.
⌋

If `Det_ReportError` function is called, all configured callout functions shall be called (see ). `User_ErrorHooks` functions should have the Service ID 0x10.

 Definition of configurable interface <`User_Error_Hooks`>
  Upstream requirements:
⌈
| Service Name | <User_Error_Hooks> | < |
|---|---|---|
| Syntax | Std_ReturnType <User_Error_Hooks> ( |  |

  uint16 ModuleId,
  uint8 InstanceId,
  uint8 ApiId,
  uint8 ErrorId
| ) | < |  |
|---|---|---|
| Service ID | 0x10 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | ModuleId | Module ID of calling module. |
| ^ | InstanceId | The identifier of the index based instance of a module, starting from 0, If the module is a single instance module it shall pass 0 as the InstanceId. |
| ^ | ApiId | ID of API service in which error is detected (defined in SWS of calling module) |
| ^ | ErrorId | ID of detected development error (defined in SWS of calling module). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 服务接口
*原文标题：Service Interfaces*

### 35. the Ports and Port 接口的规范
*原文标题：Specification of the Ports and Port Interfaces*

This chapter specifies the ports and port interfaces which are needed in order to operate the Default Error Tracer functionality over the VFB.

Each AUTOSAR SW-C which uses the service must contain "service ports" in its own SW-C description which will be typed by the same interfaces and which has to be connected to the ports of the Default Error Tracer, so that the RTE, the appropriate IDs and the required symbols can be generated.

### 36. 通用 Approach
*原文标题：General Approach*

The client-server paradigm is used since more than one parameter has to be transferred.

In order to reuse the C API already defined in the Default Error Tracer BSW module, the Default Error Tracer services uses the same argument names as in the C API, even though the names can not directly be mapped into the SW-C world. "Module ID" can preferably be interpreted as either a component or runnable entity but this is the decision of the implementer of the SW-C.

The Default Error Tracer services need a "Module ID" as first argument for the C-function.

In order to keep the client code independent from the configuration of number of clients, the "Module IDs" are not passed from the clients to Default Error Tracer but are modeled as "port defined argument values" of the Provide ports on the Default Error Tracer side. As a consequence, the "Module IDs" will not show up as arguments in the operation of the client-server interface. As a further consequence for this approach, there will be separate ports for each "Module ID" both on the client side as well as on the server side.

The Module ID type is of range 0...65535.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. 数据类型
*原文标题：Data Types*

No separate data types provided for service interfaces.

### 38. Port 接口
*原文标题：Port Interface*

Definition of ClientServerInterface DETService
  Upstream requirements:
⌈
| Name | DETService | < | < |
|---|---|---|---|
| Comment | Service of Default Error Tracer | < | < |
| IsService | true | < | < |
| Variation | - | < | < |
| Possible Errors | 0 | E_OK | Operation successful |

| Operation | ReportError | < |
|---|---|---|
| Comment | calls Det_ReportError with the Module ID of the port | < |
| Relates to | Det_ReportError | < |
| Variation | - | < |
| Parameters | ApiId | < |
| ^ | Type | uint8 |
| ^ | Direction | IN |
| ^ | Comment | ID of API service in which error is detected (defined in SWS of calling module). |
| ^ | Variation | - |
| ^ | ErrorId | < |
| ^ | Type | uint8 |
| ^ | Direction | IN |
| ^ | Comment | ID of detected development error (defined in SWS of calling module). |
| ^ | Variation | - |
| Possible Errors | E_OK | < |

| Operation | ReportRuntimeError | < |
|---|---|---|
| Comment | calls ReportRuntimeError with the Module ID of the port | < |
| Relates to | Det_ReportRuntimeError | < |
| Variation | - | < |
| Parameters | ApiId | < |
| ^ | Type | uint8 |
| ^ | Direction | IN |
| ^ | Comment | ID of API service in which error is detected (defined in SWS of calling module). |
| ^ | Variation | - |
| ^ | ErrorId | < |
| ^ | Type | uint8 |
| ^ | Direction | IN |
| ^ | Comment | ID of detected runtime error (defined in SWS of calling module). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. the 服务的定义
*原文标题：Definition of the Service*

The DET shall provide the following Port for each configured SWC module with the given name.

 Definition of Port Det_{Name}_{Instance} provided by module Det
  Upstream requirements:
⌈
| Name | Det_{Name}_{Instance} | < | < |
|---|---|---|---|
| Kind | ProvidedPort | Interface | DETService |
| Description | - | < | < |
| Port Defined Argument Value(s) | Type | uint16 | < |
| ^ | Value | {ModuleId} | < |
| ^ | Type | uint8 | < |
| ^ | Value | {InstanceId} | < |
| Variation | FOR |  |  |

   module : ECV.subEltList("Det/DetConfigSet/DetModule");
   instance : module.subEltList("DetModuleInstance");
LET
   Name = module.shortname();
   Instance = instance.shortname();
   ModuleId = module.subElt("DetModuleId").value();
| InstanceId = instance.subElt("DetInstanceId").value(); | < | < |
|---|---|---|

⌋

### 40. 时序图
*原文标题：Sequence diagrams*

### 41. 初始化
*原文标题：Initialization*

### 42. 错误 Reporting
*原文标题：Error Reporting*

There are different scenarios: one for each error class (DevelopmentError, RuntimeError) and one for each configuration: no hooks configured, at least one hook configured.

### 43. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification Chapter  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave Chapter  in the specification to guarantee comprehension.

Chapter  specifies the structure (containers) and the parameters of the module Default Error Tracer.

Chapter  specifies published information of the module Default Error Tracer.

### 44. How to read this chapter

For details refer to .

### 45. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The Parameters of DET are described in the following sub-sections.

### 46. Det

Definition of EcucModuleDef Det
⌈
| Module Name | Det |
|---|---|
| Description | Det configuration includes the functions to be called at notification. |
| Post-Build Variant Support | false |
| Supported Config Variants | VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| DetConfigSet | 0..1 | Configuration set container for Det. |
| DetGeneral | 0..1 | Generic configuration parameters of the Det module. |
| DetNotification | 0..1 | Configuration of the notification functions. |

⌋

### 47. DetGeneral

Definition of EcucParamConfContainerDef DetGeneral
⌈
| Container Name | DetGeneral | < | < |
|---|---|---|---|
| Parent Container | Det | < | < |
| Upstream mapping defined | - | < | < |
| Description | Generic configuration parameters of the Det module. | < | < |
| Multiplicity | 0..1 | < | < |
| Post-Build Variant Multiplicity | false | < | < |
| Multiplicity Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Configuration Parameters | < | < | < |

No Included Parameters

No Included Containers
⌋

### 48. DetNotification

Definition of EcucParamConfContainerDef DetNotification
⌈
| Container Name | DetNotification | < | < |
|---|---|---|---|
| Parent Container | Det | < | < |
| Upstream mapping defined | - | < | < |
| Description | Configuration of the notification functions. | < | < |
| Multiplicity | 0..1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| DetErrorHook | 0..* |  |
| DetReportRuntimeErrorCallout | 0..* |  |

No Included Containers
⌋

 Definition of EcucFunctionNameDef DetErrorHook
⌈
| Parameter Name | DetErrorHook | < | < |
|---|---|---|---|
| Parent Container | DetNotification | < | < |
| Upstream mapping defined | - | < | < |
| Description | Optional list of functions to be called by the Default Error Tracer in context of each call of Det_ReportError. |  |  |

The type of these functions shall be identical the type of `Det_ReportError` itself: `Std_ReturnType` (*f)(uint16, uint8, uint8, uint8).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 49. DetConfigSet

Definition of EcucParamConfContainerDef DetConfigSet
⌈
| Container Name | DetConfigSet | < | < |
|---|---|---|---|
| Parent Container | Det | < | < |
| Upstream mapping defined | - | < | < |
| Description | Configuration set container for Det. | < | < |
| Multiplicity | 0..1 | < | < |
| Configuration Parameters | < | < | < |

No Included Parameters

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| DetModule | 0..* | This container describes a non BSW module that is using the Det via Service Interface. |

⌋

### 50. DetModule

Definition of EcucParamConfContainerDef DetModule
⌈
| Container Name | DetModule | < | < |
|---|---|---|---|
| Parent Container | DetConfigSet | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container describes a non BSW module that is using the Det via Service Interface. | < | < |
| Multiplicity | 0..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| DetModuleId | 1 |  |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| DetModuleInstance | 1..* | Describes the Instance used for the according Service Port. It shall be used to differentiate software component instances when multiple instantiation is used. |

⌋

 Definition of EcucIntegerParamDef DetModuleId
⌈
| Parameter Name | DetModuleId | < | < |
|---|---|---|---|
| Parent Container | DetModule | < | < |
| Upstream mapping defined | - | < | < |
| Description | Unique identifier of the error reporting component. When reporting errors to the DET, a symbolic name derived from the moduleID has to be used to identify the reporter. | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucIntegerParamDef (Symbolic Name generated for this parameter) | < | < |
| Range | 4096 .. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. DetModuleInstance

Definition of EcucParamConfContainerDef DetModuleInstance
⌈
| Container Name | DetModuleInstance | < | < |
|---|---|---|---|
| Parent Container | DetModule | < | < |
| Upstream mapping defined | - | < | < |
| Description | Describes the Instance used for the according Service Port. It shall be used to differentiate software component instances when multiple instantiation is used. | < | < |
| Multiplicity | 1..* | < | < |
| Post-Build Variant Multiplicity | true | < | < |
| Multiplicity Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| DetInstanceId | 1 |  |

No Included Containers
⌋

 Definition of EcucIntegerParamDef DetInstanceId
⌈
| Parameter Name | DetInstanceId | < | < |
|---|---|---|---|
| Parent Container | DetModuleInstance | < | < |
| Upstream mapping defined | - | < | < |
| Description | Describes the InstanceId used for the according Service Port. |  |  |

It shall be used to differentiate software component instances when multiple instantiation is used.

| Else it shall be set to 0. | < | < |  |
|---|---|---|---|
| Multiplicity | 1 | < | < |
| Type | EcucIntegerParamDef | < | < |
| Range | 0 .. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 52. 发布信息
*原文标题：Published Information*

Additional module-specific published parameters are listed below if applicable.

### 53. 发布信息
*原文标题：Published Information*

For details refer to .

### 54. 附录
*原文标题：Appendix*

### 55. 不适用需求
*原文标题：Not applicable requirements*

Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
These requirements are not applicable to this specification.
⌋

  Upstream requirements: , , , ,
⌈
Det does not support this error type.
⌋

  Upstream requirements: , , , ,
⌈
Det does not report security events.
⌋

### 56. History of 需求
*原文标题：History of Requirements*

Please note that the lists in this chapter also include requirements that have been removed from the specification in a later version. These requirements do not appear as hyperlinks in the document.

### 57. Requirement History of this Document According to AUTOSAR Release R22-11

### 58. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

### 59. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

### 60. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

### 61. Requirement History of this Document According to AUTOSAR Release R23-11

### 62. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

none

### 63. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

none

### 64. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 65. Requirement History of this Document According to AUTOSAR Release R24-11

### 66. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 67. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

### 68. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

### 69. Requirement History of this Document According to AUTOSAR Release R25-11

### 70. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 71. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

### 72. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

### 73. Requirement History of this Document According to AUTOSAR Release R26-11

### 74. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 75. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

### 76. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*
