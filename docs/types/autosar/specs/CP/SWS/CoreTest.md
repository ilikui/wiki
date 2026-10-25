# Specification of Core Test (`CoreTest`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 259 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CoreTest_259\AUTOSAR_CP_SWS_CoreTest.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CoreTest_259\AUTOSAR_CP_SWS_CoreTest.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CoreTest_259\zzgen\CP_SWS_CoreTest.complete.txt`

## 文档简介

This specification specifies the functionality, API and configuration of the AUTOSAR Basic Software module called Core Test Driver. This specification is applicable to drivers for all kind of cores regardless if the driver is executing during power-on situations of an ECU or during ECU application runtime.

The Core Test Driver provides services for configuring, starting, polling, terminating and notifying the application about Core Test results. It also provides services for returning test results in a predefined way. Furthermore it provides several tests to verify dedicated core functionality like e.g. general purpose registers or Arithmetical and Logical Unit (ALU). It is assumed that every tested core hardware functionality can be exclusively accessed for testing purposes. It is up to the user of Core Test Driver API to choose suitable test combination and a scheduled execution order to fulfill the safety requirements of the system. The behaviour of those services is asynchronous or synchronous.

A Core Test driver accesses the microcontroller core directly without any intermediate software layers and is located in the Microcontroller Abstraction Layer (MCAL).

## 模块依赖

The CoreTest module depends on the following modules:

* BSW scheduler is required to trigger main function in background mode

The Core Test library module and/or source code module is dependent on the microcontroller platform and therefore on the silicon manufacturers hardware implementation and even on a silicon revision.

The Core Test library module and/or source code module is dependent on an actively working core clock domain.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and configuration of the AUTOSAR Basic Software module called Core Test Driver. This specification is applicable to drivers for all kind of cores regardless if the driver is executing during power-on situations of an ECU or during ECU application runtime.

The Core Test Driver provides services for configuring, starting, polling, terminating and notifying the application about Core Test results. It also provides services for returning test results in a predefined way. Furthermore it provides several tests to verify dedicated core functionality like e.g. general purpose registers or Arithmetical and Logical Unit (ALU). It is assumed that every tested core hardware functionality can be exclusively accessed for testing purposes. It is up to the user of Core Test Driver API to choose suitable test combination and a scheduled execution order to fulfill the safety requirements of the system. The behaviour of those services is asynchronous or synchronous.

A Core Test driver accesses the microcontroller core directly without any intermediate software layers and is located in the Microcontroller Abstraction Layer (MCAL).

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the CoreTest module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| MCAL | Microcomputer Abstraction Layer |
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |
| CPU | Central Processing Unit |
| MPU | Memory Protection Unit |
| L1 | 1^(st) level memory |
| L2 | 2^(nd) level memory |
| MCU | Microcontroller Unit |
| BIST | Built in Self Test |
| IRQ | Interrupt Request |
| Core | A CPU plus closely located functional resources |
| CSUM/Checksum/signature | A numerical representation of the result of a test execution. |
| Background test | Background test is called periodically by a SW-scheduler/RTOS. |
| Foreground test | A foreground test is a synchronous test and shall not be interrupted. It is called via user application calls. |
| 'Golden (Ref.) Value' | Reference value used for comparison (e.g. Checksum/Signature) to a previously computed test result value. |
| 'Good Case' | The execution finished without reporting an error |
| Atomic sequence/ atomic piece | An atomic sequence is a piece of test which shall not be interrupted. |
| External device | A physical external entity; e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for CoreTest.

Thus, the specification SWS BSW General shall be considered as additional and required specification for CoreTest.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

A Core test module implementation might be limited to be executed during power-up/start-up time where core resources are not shared among different active AUTOSAR related software tasks or hardware-entities (e.g. IRQ-controller, DMA, Cache, MMU/MPU and MemoryIF)

-OR-

might be limited to test resources which are not shared during runtime software execution (e.g. ALU and CPU-registers). This is overall automotive system architecture dependent and cannot be covered in a MCAL Core Test SWS specification.

There must be a managing entity or architecture available who manages tasks like 'hardware-resource-access-managing' due to the inability of a MCAL-driver to handle such tasks on its own.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. Applicability to safety related environments

This module can be used within safety related systems if the upper layer software provides mechanisms to handle the Core Test API results by:

* Checksum/signature protection
* Checking Core Test code integrity before using it
* Redundant storage of Checksum/signature
* External decision execution of Core Test results

and the Core Test module implementation is embedded into a system safety architecture concept.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The CoreTest module depends on the following modules:

* BSW scheduler is required to trigger main function in background mode

The Core Test library module and/or source code module is dependent on the microcontroller platform and therefore on the silicon manufacturers hardware implementation and even on a silicon revision.

The Core Test library module and/or source code module is dependent on an actively working core clock domain.

### 11. 文件结构
*原文标题：File structure*

### 12. 代码文件结构
*原文标题：Code file structure*

Upstream requirements: ,
⌈
The Core Test module shall provide interrupt service routines for test purposes only.
⌋

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in ,  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The Implementation of interrupt service routines shall be done by the Operating System, complex drivers or modules |  |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Error values naming convention |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| Reporting of production relevant error status |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

### 15. 通用行为
*原文标题：General Behavior*

Upstream requirements:
⌈
Core Test shall provide a procedure to test all CPU registers.
⌋

  Upstream requirements:
⌈
The Core Test shall provide an Interrupt Controller and Exception detection test. Especially the detection of an interrupt itself and a branch to a valid interrupt service address shall be part of the test. It is regardless if the test is triggered by software exceptions or by a dedicated hardware unit built in silicon.
⌋

  Upstream requirements:
⌈
The Core Test shall provide an Arithmetic and Logical Unit (ALU) test.
⌋

  Upstream requirements:
⌈
The Core Test shall provide an address generation test.
⌋

  Upstream requirements:
⌈
The Core Test shall provide a core memory interface test. This explicitly excludes tests on memory locations themselves which are connected external to a core itself or reside internal in a core.
⌋

Note: Details of the required tests to be executed are provided in the corresponding HW documentation e.g. HW safety manual.

  Upstream requirements:
⌈
The Core Test shall provide a memory protection unit test (MPU). This is valid even if a Memory Management Unit (MMU) executes MPU functionality.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Background & Rationale

As described in , the Core Test is focused on testing the core, which includes the CPU and locally coupled units like e.g. MMU/MPU and Interrupt controller.

Due to complexity of a core implementation, a very deep knowledge of the core structure is a prerequisite to implement a Core Test. Therefore, it is assumed that a silicon manufacturer is the right entity to implement a Core Test by using an AUTOSAR API and provides the test as a library to user or application implementer.

Furthermore, it is assumed that a Core Test implementation may rarely be given away as a plain source code module from the silicon manufacturer to avoid IP draining.

### 17. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

  Upstream requirements:
⌈
Except faults detected inside the CPU itself (e.g.ALU, MAC, etc.), which cannot be reliably reported by software. The errors that cannot be reliably reported by the `Dem_SetEventStatus` API shall be documented by the implementer.
⌋

### 18. Development 错误
*原文标题：Development Errors*

Definition of development errors in module CorTst
  Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| A particular API is called in an unexpected state | CORTST_E_STATUS_FAILURE | 0x01 |
| API service called with wrong parameter range | CORTST_E_PARAM_INVALID | 0x11 |
| API called without Core Test initialization | CORTST_E_UNINIT | 0x20 |
| API service CorTst_Init() called again without a CorTst_DeInit() inbetween | CORTST_E_ALREADY_INITIALIZED | 0x23 |
| API service called with a NULL pointer for CorTst_GetCurrentStatus() | CORTST_E_PARAM_POINTER | 0x24 |

⌋

### 19. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 20. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 21. Extended Production 错误
*原文标题：Extended Production Errors*

### 22. CORTST_E_CORE_FAILURE

Core failure during tests
  Upstream requirements: , , , , ,
⌈
| Diagnostic Event (Error Name) | CORTST_E_CORE_FAILURE |
|---|---|
| Description | This error indicates that the CorTst module detected a failure in a core. |
| Failed condition | PREFAILED is reported when CorTst_Start or CorTst_MainFunction detect a core failure. See  and . |
| Passed condition | PREPASSED is reported when CorTst_Start or CorTst_MainFunction could complete a core test without detecting an error. See  and . |

⌋

### 23. 通用需求
*原文标题：General Requirements*

⌈
Due to the fact that Core Test is a MCAL driver module with no knowledge about the hardware/software system architecture, the tested entities and resources (e.g. ALU) shall be exclusively available prior start of test execution during runtime.
⌋

⌈
The Core Test implementer shall give an indication on the fault coverage achievements of a Core Test implementation.
⌋

  Upstream requirements:
⌈
The Core Test shall be nondestructive to the tested entity. If Core Test modifies an entity setup, values, settings or selections on its own, it has to restore previous entity status before returning to calling service.
⌋

### 24. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 25. API 规范
*原文标题：API specification*

### 26. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module CorTst
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 27. 类型定义
*原文标题：Type definitions*

### 28. CorTst_ConfigType

Definition of datatype `CorTst_ConfigType`
  Upstream requirements:
⌈
| Name | CorTst_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | Configuration data structure of the CorTst module. | < |
| Available via | CorTst.h | < |

⌋

### 29. CorTst_CsumSignatureType

Definition of datatype `CorTst_CsumSignatureType`
  Upstream requirements:
⌈
| Name | CorTst_CsumSignatureType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | Basetype | Variation | < |
| ^ | uint16 | - | < |
| ^ | uint32 | - | < |
| Range | 16..32 bit | - | Size depends on target platform. |
| Description | This is the type of the Core Test return value if a checksum/signature is returned from API to the caller of the API. | < | < |
| Available via | CorTst.h | < | < |

⌋

### 30. CorTst_CsumSignatureBgndType

Definition of datatype `CorTst_CsumSignatureBgndType`
  Upstream requirements:
⌈
| Name | CorTst_CsumSignatureBgndType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specifc | < |
| ^ | Type | uint8, uint16, uint 32 |
| ^ | Comment | Implementation specific type |
| ^ | 0..<CorTstTestIntervalId EndValue> | < |
| ^ | Type | uint8, uint16, uint32 |
| ^ | Comment | value of CorTstTestIntervalId, which is incremented by each start of a test interval. |
| Description | Type for test signature in background mode | < |
| Available via | CorTst.h | < |

⌋

### 31. CorTst_ErrOkType

Definition of datatype `CorTst_ErrOkType`
  Upstream requirements:
⌈
| Name | CorTst_ErrOkType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | 0..<CorTstTestIntervalId EndValue> | < |
| ^ | Type | uint8, uint16, uint32 |
| ^ | Comment | value of CorTstTestIntervalId, which is incremented by each start of a test interval. |
| ^ | returnvalue | < |
| ^ | Type | CorTst_ResultType |
| ^ | Comment | CORTST_E_NOT_OK The Core Test detected at least one single test errors. CORTST_E_OKAY The Core test passed without errors. CORTST_E_NOT_TESTED There is no Core Test result available (default) |
| Description | This is the type of the Core Test test return if a status is retuned from API to the caller of the API. | < |
| Available via | CorTst.h | < |

⌋

⌈
For the type `CorTst_ErrOkType`, the enumeration value `CORTST_E_NOT_TESTED` shall be the default value after a reset. CorTstTestIntervalId shall have value zero per default.
⌋

### 32. CorTst_ResultType

Definition of datatype `CorTst_ResultType`
  Upstream requirements:
⌈
| Name | CorTst_ResultType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | CORTST_E_NOT_OK | 0x00 | The Core Test detected at least one single test errors. |
| ^ | CORTST_E_OKAY | 0x01 | The Core test passed without errors. |
| ^ | CORTST_E_NOT_TESTED | 0x02 | There is no Core Test result available (default) |
| Description | This is the type of the Core Test test return if a status is retuned from API to the caller of the API. | < | < |
| Available via | CorTst.h | < | < |

⌋

### 33. CorTst_StateType

Definition of datatype `CorTst_StateType`
  Upstream requirements:
⌈
| Name | CorTst_StateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | CORTST_ABORT | 0x00 | The Core Test has been cancelled by API CorTst_Abort(). |
| ^ | CORTST_INIT | 0x01 | The Core Test is initialized and can be started. |
| ^ | CORTST_UNINIT | 0x02 | The Core Test can be initialized. |
| ^ | CORTST_RUNNING_BGND | 0x03 | The Core Test is currently executed |
| Description | This is a status value returned by the API CorTst_GetState(). | < | < |
| Available via | CorTst.h | < | < |

⌋

### 34. CorTst_TestIdFgndType

Definition of datatype `CorTst_TestIdFgndType`
  Upstream requirements:
⌈
| Name | CorTst_TestIdFgndType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | Basetype | Variation | < |
| ^ | uint16 | - | < |
| ^ | uint32 | - | < |
| ^ | uint8 | - | < |
| Range | 8..32 bit | - | Size depends on target platform. |
| Description | This is the type of the parameter (Id) used for a specific foreground test configuration to run. (The Id shall be used in the call to the API CorTst_Start(CorTst_TestIdFgndType TestId)). | < | < |
| Available via | CorTst.h | < | < |

⌋

### 35. 功能定义
*原文标题：Function definitions*

This is a list of functions provided for calling services and upper layer modules.

### 36. CorTst_Init

Definition of API function `CorTst_Init`
  Upstream requirements: , , ,
⌈
| Service Name | CorTst_Init | < |
|---|---|---|
| Syntax | void CorTst_Init ( |  |

  const `CorTst_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the selected configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for initialization and change of state of the Core Test | < |
| Available via | CorTst.h | < |

⌋

  Upstream requirements:
⌈
The configuration pointer ConfigPtr shall always have `NULL_PTR` value.
⌋

Note: The configuration pointer ConfigPtr is currently not used and shall therefore be set `NULL_PTR` value.

  Upstream requirements: ,
⌈
The function `CorTst_Init` shall initialize all CorTst relevant data structures, global variables, registers and special test hardware (if existing) with appropriate values used for core test.
⌋

  Upstream requirements: ,
⌈
The function `CorTst_Init` shall only initialize the configured resources and shall not touch resources that are not configured in the configuration file.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. CorTst_DeInit

Definition of API function `CorTst_DeInit`
  Upstream requirements: ,
⌈
| Service Name | CorTst_DeInit | < |
|---|---|---|
| Syntax | void CorTst_DeInit ( |  |

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
| Description | Service to change from CORTST_ABORT or CORTST_INIT to CORTST_UNINIT state | < |
| Available via | CorTst.h | < |

⌋

  Upstream requirements:
⌈
The function API `CorTst_DeInit` shall initialize all data structures, global variables, registers and special test hardware (if existing) with the default values after running the startup software (variable/structures) or power-on (HW-default).
⌋

⌈
If in state `CORTST_INIT`: The state shall be changed from `CORTST_INIT` to `CORTST_UNINIT` state.
⌋

⌈
If in state `CORTST_ABORT`: The state shall be changed from `CORTST_ABORT` to `CORTST_UNINIT` state.
⌋

⌈
If the DET is enabled and the status of the CORE Test module is `CORTST_RUNNING_BGND`, the function `CorTst_DeInit` shall report the error value `CORTST_E_STATUS_FAILURE` to the DET, and then immediately return.
⌋

### 38. CorTst_Abort

Definition of API function `CorTst_Abort`
  Upstream requirements:
⌈
| Service Name | CorTst_Abort | < |
|---|---|---|
| Syntax | void CorTst_Abort ( |  |

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
| Description | Service to change from CORTST_INIT to CORTST_ABORT state | < |
| Available via | CorTst.h | < |

⌋

⌈
If the current state is `CORTST_INIT` the state shall be changed from `CORTST_INIT` to `CORTST_ABORT` state.
⌋

⌈
If the current state is `CORTST_RUNNING_BGND` the state shall be changed from `CORTST_RUNNING_BGND` to `CORTST_ABORT` state.
⌋

  Upstream requirements:
⌈
When the `CorTst_Abort` function is called, `CorTst_MainFunction` shall finish the current atomic sequence it is executing plus shall provide already finished atomic test sequence results, before changing from `CORTST_RUNNING_BGND` to `CORTST_ABORT` state.
⌋

⌈
After a call to `CorTst_Abort`, `CorTst_MainFunction` shall not begin testing again when called by the scheduler before a complete re-initialization of the Core test module takes place by calling `CorTst_DeInit` and `CorTst_Init` again.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. CorTst_GetState

Definition of API function `CorTst_GetState`
  Upstream requirements:
⌈
| Service Name | CorTst_GetState | < |
|---|---|---|
| Syntax | CorTst_StateType CorTst_GetState ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | CorTst_StateType | See type definition |
| Description | Service for Core Test to immediately return status on currently executed Core Test. | < |
| Available via | CorTst.h | < |

⌋

  Upstream requirements:
⌈
The function `CorTst_GetState` shall return the current Core Test execution state regardless which state is currently executed. It is allowed to call this function in any execution state.
⌋

### 40. CorTst_GetCurrentStatus

Definition of API function `CorTst_GetCurrentStatus`
  Upstream requirements:
⌈
| Service Name | CorTst_GetCurrentStatus | < |
|---|---|---|
| Syntax | void CorTst_GetCurrentStatus ( |  |

  `CorTst_ErrOkType`* ErrOk
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | ErrOk | See type definition |
| Return value | None | < |
| Description | Service for Core Test to get indicator of the last executed Core Test result | < |
| Available via | CorTst.h | < |

⌋

  Upstream requirements:
⌈
The function `CorTst_GetCurrentStatus` shall return the result of the last completed Core Test run plus it shall return the Test Interval Id of the last background test.
⌋

⌈
The function `CorTst_GetCurrentStatus` shall return `CORTST_E_NOT_TESTED` per default if no result is available.
⌋

### 41. CorTst_GetSignature

Definition of API function `CorTst_GetSignature`
  Upstream requirements: ,
⌈
| Service Name | CorTst_GetSignature | < |
|---|---|---|
| Syntax | CorTst_CsumSignatureBgndType CorTst_GetSignature ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | CorTst_CsumSignatureBgndType | Implementation specific |
| Description | Service to get signature of the last executed Core Test in background mode. | < |
| Available via | CorTst.h | < |

⌋

  Upstream requirements:
⌈
The function `CorTst_GetSignature` shall return currently pending Core Test result signature and Core Test Interval Id of the last completed test run in background mode.
⌋

⌈
The function `CorTst_GetSignature` shall return value zero per default as signature until a first initial Core Test run has successfully been executed which will provide a first valid signature representation.
⌋

### 42. CorTst_GetFgndSignature

Definition of API function `CorTst_GetFgndSignature`
  Upstream requirements: ,
⌈
| Service Name | CorTst_GetFgndSignature | < |
|---|---|---|
| Syntax | CorTst_CsumSignatureType CorTst_GetFgndSignature ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | CorTst_CsumSignatureType | Implementation specific |
| Description | Service to get signature of the last executed Core Test in foreground mode. | < |
| Available via | CorTst.h | < |

⌋

  Upstream requirements:
⌈
The function `CorTst_GetFgndSignature` shall return Core Test result signature type as Core Test result of the last completed test run in foreground mode.
⌋

⌈
The function `CorTst_GetFgndSignature` shall return value zero per default as signature until a first initial Core Test run has successfully been executed which will provide first valid signature representation.
⌋

### 43. CorTst_Start

Definition of API function `CorTst_Start`
  Upstream requirements: , ,
⌈
| Service Name | CorTst_Start | < |
|---|---|---|
| Syntax | Std_ReturnType CorTst_Start ( |  |

  `CorTst_TestIdFgndType` TestId
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | TestId | Id of the foreground test configuration to be executed. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Foreground test processed E_NOT_OK: Foreground test not accepted |
| Description | Service for executing foreground Core Test. | < |
| Available via | CorTst.h | < |

⌋

⌈
The function `CorTst_Start` is only applicable for Foreground mode Core Test operation.
⌋

⌈
If the execution state is `CORTST_RUNNING_BGND` while this function API is called, the function shall return without any action and the return value shall be E_OK.
⌋

  Upstream requirements: , , , ,
⌈
In case an error occurs during test, the `CorTst_Start` function shall report the extended production error `CORTST_E_CORE_FAILURE` (see ) as `DEM_EVENT_STATUS_PREFAILED` to the DEM if the core can still report errors reliably by software.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Callback 通知
*原文标题：Callback notifications*

Since Core Test module is a MCAL driver module, it does not provide any call-back functions for lower layered modules.

### 45. Scheduled functions

These functions are directly called by Basic Software Scheduler. The following functions shall have no return value and no parameter. All functions shall be non reentrant.

 Definition of scheduled function `CorTst_MainFunction`
  Upstream requirements: , ,
⌈
| Service Name | CorTst_MainFunction | < |
|---|---|---|
| Syntax | void CorTst_MainFunction ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x0b | < |
| Description | Cyclically called by scheduler to perform processing of Core Test. | < |
| Available via | SchM_CorTst.h | < |

⌋

⌈
The function `CorTst_MainFunction` shall set state to `CORTST_INIT`, if all work within a Core Test interval has been finished.
⌋

⌈
The function `CorTst_MainFunction` shall set state to `CORTST_INIT`, if no work within a Core Test needs to be done.
⌋

⌈
If the CoreTest module is in the state `CORTST_INIT`, a call to the API `CorTst_MainFunction` shall change the state of the module to `CORTST_RUNNING_BGND`.
⌋

⌈
`CorTst_MainFunction` shall test all selected core hardware entities as configured in .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 47. Mandatory 接口
*原文标题：Mandatory interfaces*

Note: This section defines all interfaces, which are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module CorTst
  Upstream requirements:
⌈
| API Function | Header File | Description |
|---|---|---|
| Dem_SetEventStatus | Dem.h | Called by SW-Cs or BSW modules to report monitor status information to the Dem. BSW modules calling Dem_SetEventStatus can safely ignore the return value. This API will be available only if ({Dem/DemConfigSet/DemEventParameter/DemEventReportingType} == STANDARD_REPORTING) |

⌋

### 48. Optional 接口
*原文标题：Optional interfaces*

This section defines all interfaces, which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module CorTst
  Upstream requirements: ,
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |

⌋

### 49. Configurable 接口
*原文标题：Configurable interfaces*

In this section, all interfaces are listed where the target function could be configured. The target function is usually a callback function. The names of this kind of interfaces are not fixed because they are configurable.

 Definition of API function `CorTst_TestCompletedNotification`
  Upstream requirements: , ,
⌈
| Service Name | CorTst_TestCompletedNotification | < |
|---|---|---|
| Syntax | void CorTst_TestCompletedNotification ( |  |

  `CorTst_ErrOkType` ResultOfLastCorTstRun
| ) | < |  |
|---|---|---|
| Service ID | 0x0c | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ResultOfLastCorTstRun | CORTST_E_OKAY Last Core Test execution successfully finished with no errors |

`CORTST_E_NOT_OK` Last Core Test execution finished with errors.
| Parameters (inout) | None | < |
|---|---|---|
| Parameters (out) | None | < |
| Return value | None | < |
| Description | The function CorTst_TestCompletedNotification shall be called every time when a complete test cycle has been executed. | < |
| Available via | CorTst.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 28 章（内容从略，见纯文本全文）

50. 时序图
51. 初始化
52. Deinitialization
53. Background Test
54. Test Result Calculation within 核 Test 模块
55. 核 Test Signature provided to Calling Entity
56. 配置规范
57. How to read this chapter
58. Containers and 配置 parameters
59. CorTst
60. CorTstGeneral
61. CorTstSelect
62. CorTstBackgroundConfigSet
63. CorTstForegroundConfigSet
64. CorTstConfigApiServices
65. CorTstDemEventParameterRefs
66. 发布信息
67. 附录
68. 不适用需求
69. Change history of AUTOSAR traceable items
70. Traceable item history of this document according to AUTOSAR Release R25-11
71. Added 规范 Items in R25-11
72. Changed 规范 Items in R25-11
73. Deleted 规范 Items in R25-11
74. Traceable item history from AUTOSAR R25-11 to AUTOSAR R26-11
75. Added 规范 Items in R26-11
76. Changed 规范 Items in R26-11
77. Deleted 规范 Items in R26-11
