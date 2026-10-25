# Specification of Flash Test (`FlashTest`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 261 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_FlashTest_261\AUTOSAR_CP_SWS_FlashTest.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_FlashTest_261\AUTOSAR_CP_SWS_FlashTest.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_FlashTest_261\zzgen\CP_SWS_FlashTest.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Flash Test driver.

This Flash test module provides algorithm to test invariable memory. Invariable memory can be data/program flash, program SRAM, locked cache and is either embedded in the microcontroller or memory mapped connected to the microcontroller. For simplification the SW module is called Flash Test driver.

The test service can be executed at any time after MCU initialization and it is up to the user of the Flash Test Driver to choose the suitable test algorithm and the right execution place to fulfill the safety requirements of the system. The test service itself is dependant on the storage concept of the system. Therefore, the availability of different test algorithms is configurable.

The Flash Test driver is intended to be integrated in the overall safety concept and will not provide the required diagnostic coverage on its own.

## 模块依赖

The Flash Test module depends on the following modules:

* BSW scheduler is required to trigger main function in background mode

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Flash Test driver.

This Flash test module provides algorithm to test invariable memory. Invariable memory can be data/program flash, program SRAM, locked cache and is either embedded in the microcontroller or memory mapped connected to the microcontroller. For simplification the SW module is called Flash Test driver.

The test service can be executed at any time after MCU initialization and it is up to the user of the Flash Test Driver to choose the suitable test algorithm and the right execution place to fulfill the safety requirements of the system. The test service itself is dependant on the storage concept of the system. Therefore, the availability of different test algorithms is configurable.

The Flash Test driver is intended to be integrated in the overall safety concept and will not provide the required diagnostic coverage on its own.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

Acronyms and abbreviations that have a local scope are not contained in the AUTOSAR glossary. These appear in a local glossary below.

| Acronym: | Description: |
|---|---|
| BSW | BasicSoftWare |
| PC | PreCompile |
| PB | PostBuild |

| Abbreviation: | Description: |
|---|---|
| DEM | Diagnostic Event Manager. |
| DET | Default Error Tracer. |
| MCU | Micro Controller Unit. |
| PLL | Phase Locked Loop. |
| ISR | Interrupt Service Routine. |

The following table lists important Term and Definition, which are used within this document.

| Term: | Description: |
|---|---|
| Background test | Background test is called periodically by a scheduler, and is interruptible. The test is split up over many scheduled tasks. |
| Foreground test | Foreground test is called via users call. |
| Flash cell | Smallest entity to be addressed, in this case bytes shall be used |
| Invariable memory | Invariable memory can be program flash, program SRAM, locked cache and ROM |
| Test block | Defined memory area to be tested in foreground and background mode. |
| Test interval | Interval of a complete Flash test in background mode |
| Test time | Time for partial test defined within one scheduled task. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Flash Test.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Flash Test.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

During Flash Test operation, the Flash area under test shall not be modified.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The Flash Test module depends on the following modules:

* BSW scheduler is required to trigger main function in background mode

### 10. 文件结构
*原文标题：File structure*

### 11. 代码文件结构
*原文标题：Code file structure*

Note: Refer to `SWS_BSWGeneral` document .

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , , and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Basic SW module shall be able to shutdown |  |  |
| Classification of development errors |  |  |
| Reporting of production relevant error status |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| A Basic Software Module can return a module specific types |  |  |
| List possible error notifications |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| BSW Modules shall support multiple configuration sets |  |  |
| API handling in uninitialized state |  |  |
| No description |  |  |
| All production code error ID symbols are defined by the Dem mo |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能规范
*原文标题：Functional specification*

### 14. 通用行为
*原文标题：General behavior*

Upstream requirements:
⌈
The Flash test module provides test execution services in background and foreground mode.
⌋

⌈
The memory blocks to be tested shall be configurable for background and foreground mode separately.
⌋

  Upstream requirements:
⌈
In background mode the test blocks shall be tested in the same order they are configured in configuration structure. When all blocks are tested, one test interval is completed. In background testing the partial tests shall be triggered via `FlsTst_MainFunction` (see ).
⌋

⌈
The length of a partial test is defined by the number of tested cells, which shall be tested in one scheduled task. (see ). The required time for a partial test without interruption is defined as "Test time".
⌋

Note: The partial test can be interrupted by a higher priority task at any time, because the Flash test does not require atomic sequences. It is the responsibility of the user to ensure that the interruptible partial test is finished before the scheduler interval is started(See Figure ).

⌈
A background test shall be aborted or suspended via the API services `FlsTst_Abort`() or `FlsTst_Suspended`().

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 状态 Diagram
*原文标题：State Diagram*

The Flash test driver states in background mode are described in Figure . The described states are driver states in background operation mode.

  Upstream requirements:
⌈
Foreground tests are defined as synchronous tests which shall not be interrupted. The execution of Foreground tests is configurable (see ) and can be called after module initialization at any time.
⌋

### 16. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 17. Development 错误
*原文标题：Development Errors*

Definition of development errors in module FlsTst
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Failure within Flash Test execution state | FLSTST_E_STATE_FAILURE | 0x01 |
| API parameter out of specified range | FLSTST_E_PARAM_INVALID | 0x02 |
| API service used without module initialization | FLSTST_E_UNINIT | 0x03 |
| Flash Test module is already initialized | FLSTST_E_ALREADY_INITIALIZED | 0x04 |
| For Variant PB: Configuration pointer is a NULL pointer. For Variant PC: Configuration pointer is NOT a NULL pointer. | FLSTST_E_INIT_FAILED | 0x05 |
| Pointer is a NULL pointer | FLSTST_E_PARAM_POINTER | 0x06 |

⌋

### 18. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 19. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 20. Extended Production 错误
*原文标题：Extended Production Errors*

Failure detection in background mode.
  Upstream requirements:
⌈
| Diagnostic Event (Error Name) | FLSTST_E_FLSTST_FAILURE |
|---|---|
| Description | This Extended Production Error shall be issued in case a failure is detected in background mode within a test interval. |
| Failed condition | At least one block within a test interval in background mode is NOT OK (see ). |
| Passed condition | All blocks within a test interval in background mode are tested with the result OK.(see ). |

⌋

### 21. 初始化 Sequence
*原文标题：Initialization Sequence*

Upstream requirements:
⌈
The function `FlsTst_Init` shall be called first before calling any other Flash Test functions except the function `FlsTst_GetCurrentState`. If this sequence is not respected, the error code `FLSTST_E_UNINIT` shall be reported to the Default Error Tracer (if development error detection is enabled).
⌋

### 22. Version Check

Note: Refer to `SWS_BSWGeneral` document .

### 23. Debugging 支持
*原文标题：Debugging Support*

No requirement defined.

### 24. API 规范
*原文标题：API specification*

### 25. Imported 类型
*原文标题：Imported types*

This chapter lists data type definitions for the included variables and constants.

 Definition of imported datatypes of module FlsTst
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 26. 类型定义
*原文标题：Type definitions*

### 27. FlsTst_ConfigType

Definition of datatype `FlsTst_ConfigType`
  Upstream requirements: ,
⌈
| Name | FlsTst_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | implementation specific |
| Description | This type of external data structure shall contain the initialization data for the Flash Test. | < |
| Available via | FlsTst.h | < |

⌋

### 28. FlsTst_StateType

Definition of datatype `FlsTst_StateType`
  Upstream requirements:
⌈
| Name | FlsTst_StateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | FLSTST_UNINIT | 0x00 | The Flash Test is not initialized or not usable. |
| ^ | FLSTST_INIT | 0x01 | The Flash Test is initialized and ready to be started. |
| ^ | FLSTST_RUNNING | 0x02 | The Flash Test is currently running. |
| ^ | FLSTST_ABORTED | 0x03 | The Flash Test is aborted. |
| ^ | FLSTST_SUSPENDED | 0x04 | The Flash Test is waiting to be resumed or is waiting to start foreground mode test |
| Description | This is a state value returned by the API service FlsTst_GetCurrentState(). | < | < |
| Available via | FlsTst.h | < | < |

⌋

  Upstream requirements:
⌈
For the type `FlsTst_StateType`, the enumeration value `FLSTST_UNINIT` shall be the default value after a reset.
⌋

### 29. FlsTst_TestResultFgndType

Definition of datatype `FlsTst_TestResultFgndType`
⌈
| Name | FlsTst_TestResultFgndType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | FLSTST_NOT_TESTED | 0x00 | There is no result available. |
| ^ | FLSTST_OK | 0x01 | The last Flash Test has been tested with OK result. |
| ^ | FLSTST_NOT_OK | 0x02 | The last Flash Test has been tested with NOT_OK result. |
| Description | Return type of API service FlsTst_GetResultFgnd(). | < | < |
| Available via | FlsTst.h | < | < |

⌋

  Upstream requirements:
⌈
For the type `FlsTst_TestResultFgndType`, the enumeration value `FLSTST_NOT_TESTED` shall be the default value after a reset.
⌋

### 30. FlsTst_TestResultBgndType

Definition of datatype `FlsTst_TestResultBgndType`
  Upstream requirements:
⌈
| Name | FlsTst_TestResultBgndType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | 0..<FlsTstTestIntervalIdEndValue> | < |
| ^ | Type | uint8, uint16, uint32 |
| ^ | Comment | current value of FlsTstTestIntervalId, which is incremented by each new start of an test interval. |
| ^ | result | < |
| ^ | Type | FlsTst_TestResultType |
| ^ | Comment | - |
| Description | Return type of API service FlsTst_GetTestResultBgnd(). | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
For the type `FlsTst_TestResultBgndType`, the enumeration value `FLSTST_RESULT_NOT_TESTED` shall be the default value after a reset.
⌋

### 31. FlsTst_BlockIdFgndType

Definition of datatype `FlsTst_BlockIdFgndType`
⌈
| Name | FlsTst_BlockIdFgndType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | Basetype | Variation | < |
| ^ | uint16 | - | < |
| ^ | uint32 | - | < |
| ^ | uint8 | - | < |
| Range | 0..<FlsTstBlock NumberFgnd > -1 | - | The range is dependent on the number of Foreground Flash blocks defined in the configuration structure. The type shall be chosen depending on the MCU platform for best performance. |
| Description | This type specifies the identification (ID) for a Flash block to be tested in foreground mode, which is configured in the configuration structure. | < | < |
| Available via | FlsTst.h | < | < |

⌋

### 32. FlsTst_ErrorDetailsType

Definition of datatype `FlsTst_ErrorDetailsType`
⌈
| Name | FlsTst_ErrorDetailsType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | implementation specific |
| Description | This type shall specify implementation specific error information monitored in the Flash test module. | < |
| Available via | FlsTst.h | < |

⌋

### 33. FlsTst_TestSignatureFgndType

Definition of datatype `FlsTst_TestSignatureFgndType`
⌈
| Name | FlsTst_TestSignatureFgndType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | Implementation specific type |
| Description | Type for test signature in foreground mode | < |
| Available via | FlsTst.h | < |

⌋

### 34. FlsTst_TestSignatureBgndType

Definition of datatype `FlsTst_TestSignatureBgndType`
  Upstream requirements:
⌈
| Name | FlsTst_TestSignatureBgndType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | 0..<FlsTstTestIntervalIdEndValue> | < |
| ^ | Type | uint8, uint16, uint32 |
| ^ | Comment | current value of FlsTstTestIntervalId, which is incremented by each new start of an test interval. |
| ^ | Implementation specific | < |
| ^ | Type | uint8, uint16, uint32 |
| ^ | Comment | It represents the signature value of the last completed test interval. Value might be generated from several block signatures. |
| Description | Type for test signature in background mode. | < |
| Available via | FlsTst.h | < |

⌋

### 35. FlsTst_TestResultType

Definition of datatype `FlsTst_TestResultType`
⌈
| Name | FlsTst_TestResultType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | FLSTST_RESULT_NOT_TESTED | 0x00 | There is no test result available. |
| ^ | FLSTST_RESULT_OK | 0x01 | The last Flash Test interval has been tested with OK result |
| ^ | FLSTST_RESULT_NOT_OK | 0x02 | The last Flash Test interval has been tested with NOT-OK result. |
| Description | - | < | < |
| Available via | FlsTst.h | < | < |

⌋

### 36. 功能定义
*原文标题：Function definitions*

This is a list of functions provided for upper layer modules.

### 37. FlsTst_Init

Definition of API function `FlsTst_Init`
  Upstream requirements: ,
⌈
| Service Name | FlsTst_Init | < |
|---|---|---|
| Syntax | void FlsTst_Init ( |  |

  const `FlsTst_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to configuration set |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for Flash Test initialization. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_Init` shall initialize all Flash Test relevant registers and global variables and change the execution state to `FLSTST_INIT`.
⌋

  Upstream requirements:
⌈
The function `FlsTst_Init` shall only initialize the configured resources and shall not touch resources that are not configured in the configuration file.
⌋

  Upstream requirements: ,
⌈
If development error detection is enabled, calling the routine `FlsTst_Init` while the Flash Test driver is already initialized shall cause development error `FLSTST_E_ALREADY_INITIALIZED`. The function shall be left without any action.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. FlsTst_DeInit

Definition of API function `FlsTst_DeInit`
  Upstream requirements: ,
⌈
| Service Name | FlsTst_DeInit | < |
|---|---|---|
| Syntax | void FlsTst_DeInit ( |  |

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
| Description | Service for Flash Test De-Initialization. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_DeInit` shall de-initialize all Flash Test relevant registers and global variables that were initialized by `FlsTst_Init`.
⌋

  Upstream requirements:
⌈
The function `FlsTst_DeInit` shall set the Flash Test module state to `FLSTST_UNINIT`.
⌋

### 39. FlsTst_StartFgnd

Definition of API function `FlsTst_StartFgnd`
  Upstream requirements:
⌈
| Service Name | FlsTst_StartFgnd | < |
|---|---|---|
| Syntax | Std_ReturnType FlsTst_StartFgnd ( |  |

  `FlsTst_BlockIdFgndType` FgndBlockId
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | FgndBlockId | Number of the foreground test to be executed. This is dependent on configuration. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Foreground test processed E_NOT_OK: Foreground test not accepted |
| Description | Service for executing foreground Flash Test. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_StartFgnd` is only applicable for Foreground mode Flash Test operation.
⌋

  Upstream requirements:
⌈
The function `FlsTst_StartFgnd` shall be pre compile time configurable On/Off by the configuration parameter: `FlsTst_StartFgndApi`.
⌋

  Upstream requirements: , , ,
⌈
If development error detection is enabled and the parameter FgndBlockId is out of range, the DET error value `FLSTST_E_PARAM_INVALID` shall be raised and the function shall return without any action with return value E_NOT_OK.
⌋

### 40. FlsTst_Abort

Definition of API function `FlsTst_Abort`
  Upstream requirements:
⌈
| Service Name | FlsTst_Abort | < |
|---|---|---|
| Syntax | void FlsTst_Abort ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for aborting the Flash Test. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
This function shall abort Flash test background operation and set the state to `FLSTST_ABORTED`. When the `FlsTst_Abort` function is called, `FlsTst_MainFunction` shall finish the current atomic sequence it is running.
⌋

  Upstream requirements:
⌈
After an `FlsTst_Abort` call, `FlsTst_MainFunction` shall not begin testing again when called by the scheduler until after a complete re-initialization of the Flash test module.
⌋

### 41. FlsTst_Suspend

Definition of API function `FlsTst_Suspend`
  Upstream requirements:
⌈
| Service Name | FlsTst_Suspend | < |
|---|---|---|
| Syntax | void FlsTst_Suspend ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for suspending current operation of the Flash Test, until FlsTst_Resume is called. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_Suspend` is only applicable for Background mode Flash Test operation.
⌋

  Upstream requirements:
⌈
The function `FlsTst_Suspend` shall set the Flash Test execution state to `FLSTST_SUSPENDED` in case the execution state was `FLSTST_RUNNING` or `FLSTST_INIT`.
⌋

  Upstream requirements:
⌈
The function `FlsTst_Suspend` shall be pre compile time configurable On/Off by the configuration parameter: `FlsTst_SuspendResumeApi`.
⌋

### 42. FlsTst_Resume

Definition of API function `FlsTst_Resume`
  Upstream requirements:
⌈
| Service Name | FlsTst_Resume | < |
|---|---|---|
| Syntax | void FlsTst_Resume ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for continuing the Flash Test at the point it was suspended. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_Resume` shall change the execution state to `FLSTST_RUNNING` when commanded to continue and the current execution state is `FLSTST_SUSPENDED`.
⌋

  Upstream requirements: ,
⌈
If development error detection is enabled and the execution state of the Flash Test module is not `FLSTST_SUSPENDED`, the Flash Test module shall report the error value `FLSTST_E_STATE_FAILURE` to the DET, and then immediately return from the function.
⌋

  Upstream requirements:
⌈
The function `FlsTst_Resume` is only applicable for Background mode Flash Test operation.
⌋

  Upstream requirements: ,
⌈
The function `FlsTst_Resume` shall be pre compile time configurable On/Off by the configuration parameter: `FlsTst_SuspendResumeApi`.
⌋

### 43. FlsTst_GetCurrentState

Definition of API function `FlsTst_GetCurrentState`
  Upstream requirements: ,
⌈
| Service Name | FlsTst_GetCurrentState | < |
|---|---|---|
| Syntax | FlsTst_StateType FlsTst_GetCurrentState ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | FlsTst_StateType | FLSTST_UNINIT The Flash Test is not initialized or not usable. FLSTST_INIT The Flash Test is initialized and ready to be started. FLSTST_RUNNING The Flash Test is currently running. FLSTST_ABORTED The Flash Test is aborted. FLSTST_SUSPENDED The Flash Test is waiting to be resumed or is waiting to start forground mode test |
| Description | Service returns the current Flash Test exection state. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_GetCurrentState` shall return the current Flash Test execution state.
⌋

  Upstream requirements: ,
⌈
The function `FlsTst_GetCurrentState` shall be pre compile time configurable On/Off by the configuration parameter: `FlsTst_GetCurrentStateApi`.
⌋

### 44. FlsTst_GetTestResultBgnd

Definition of API function `FlsTst_GetTestResultBgnd`
  Upstream requirements: , ,
⌈
| Service Name | FlsTst_GetTestResultBgnd | < |
|---|---|---|
| Syntax | FlsTst_TestResultBgndType FlsTst_GetTestResultBgnd ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | FlsTst_TestResultBgndType | See type definition |
| Description | Service returns the Background Flash Test result. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_GetTestResultBgnd` shall return the Flash test result and Test Interval Id of the last background test.
⌋

  Upstream requirements: ,
⌈
The function `FlsTst_GetTestResultBgnd` shall be pre compile time configurable On/Off by the configuration parameter: `FlsTst_GetTestResultBgndApi`.
⌋

### 45. FlsTst_GetTestResultFgnd

Definition of API function `FlsTst_GetTestResultFgnd`
  Upstream requirements: , ,
⌈
| Service Name | FlsTst_GetTestResultFgnd | < |
|---|---|---|
| Syntax | FlsTst_TestResultFgndType FlsTst_GetTestResultFgnd ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x0f | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | FlsTst_TestResultFgndType | See type definition |
| Description | Service returns the Foreground Flash Test result. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_GetTestResultFgnd` shall return the Flash test result of the last foreground test.
⌋

  Upstream requirements: ,
⌈
The function `FlsTst_GetTestResultFgnd` shall be pre compile time configurable On/Off by the configuration parameter: `FlsTst_GetTestResultFgndApi`.
⌋

### 46. FlsTst_GetVersionInfo

Definition of API function `FlsTst_GetVersionInfo`
  Upstream requirements: ,
⌈
| Service Name | FlsTst_GetVersionInfo | < |
|---|---|---|
| Syntax | void FlsTst_GetVersionInfo ( |  |

  `Std_VersionInfoType`* versioninfo
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | versioninfo | Pointer to where to store the version information of this module. |
| Return value | None | < |
| Description | Service returns the version information of this module. | < |
| Available via | FlsTst.h | < |

⌋

### 47. FlsTst_GetTestSignatureBgnd

Definition of API function `FlsTst_GetTestSignatureBgnd`
  Upstream requirements: ,
⌈
| Service Name | FlsTst_GetTestSignatureBgnd | < |
|---|---|---|
| Syntax | FlsTst_TestSignatureBgndType FlsTst_GetTestSignatureBgnd ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | FlsTst_TestSignatureBgndType | See type definition |
| Description | Service returns the Flash Test result in background mode. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_GetTestSignatureBgnd` shall return the signature and Test Interval Id of the last background test.
⌋

  Upstream requirements: ,
⌈
The function `FlsTst_GetTestSignatureBgnd` shall be pre compile time configurable On/Off by the configuration parameter: `FlsTst_GetTestSignatureBgndApi`.
⌋

  Upstream requirements:
⌈
If no signature is available, the function `FlsTst_GetTestSignatureBgnd` shall return the default signature value "0x0".
⌋

### 48. FlsTst_GetTestSignatureFgnd

Definition of API function `FlsTst_GetTestSignatureFgnd`
  Upstream requirements: ,
⌈
| Service Name | FlsTst_GetTestSignatureFgnd | < |
|---|---|---|
| Syntax | FlsTst_TestSignatureFgndType FlsTst_GetTestSignatureFgnd ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x0a | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | FlsTst_TestSignatureFgndType | See type definition |
| Description | Service returns the Flash Test result in foreground mode. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_GetTestSignatureFgnd` shall return the signature of the last foreground test.
⌋

  Upstream requirements: ,
⌈
The function `FlsTst_GetTestSignatureFgnd` shall be pre compile time configurable On/Off by the configuration parameter: `FlsTst_GetTestSignatureFgndApi`.
⌋

  Upstream requirements:
⌈
If no signature is available, the function `FlsTst_GetTestSignatureFgnd` shall return the default signature value "0x0".
⌋

### 49. FlsTst_GetErrorDetails

Definition of API function `FlsTst_GetErrorDetails`
  Upstream requirements: , ,
⌈
| Service Name | FlsTst_GetErrorDetails | < |
|---|---|---|
| Syntax | FlsTst_ErrorDetailsType FlsTst_GetErrorDetails ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x0b | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | FlsTst_ErrorDetailsType | See type definition |
| Description | Service returns error detais monitored from the Flash module. | < |
| Available via | FlsTst.h | < |

⌋

  Upstream requirements:
⌈
The function `FlsTst_GetErrorDetails` shall return the error details monitored from the Flash Test driver.
⌋

  Upstream requirements: ,
⌈
The function `FlsTst_GetErrorDetails` shall be pre compile time configurable On/Off by the configuration parameter: `FlsTst_GetErrorDetailsApi`.
⌋

### 其余 40 章（内容从略，见纯文本全文）

50. FlsTst_TestEcc
51. Callback 通知
52. Scheduled functions
53. FlsTst_MainFunction
54. Expected 接口
55. Mandatory 接口
56. Optional 接口
57. Configurable 接口
58. FlsTst_TestCompleted 通知
59. 时序图
60. 初始化
61. De-initialization
62. Background Test
63. Test Result Calculation within Flash test 驱动
64. Test signature provided to caller
65. Suspend and Resume Background Testing
66. Foreground Task interrupts Background Task
67. 配置规范
68. 规范模板 for 配置 parameters
69. Containers and 配置 parameters
70. Variants
71. FlsTst
72. FlsTstConfigSet
73. FlsTstGeneral
74. FlsTstConfigurationOfOptApiServices
75. FlsTstDemEventParameterRefs
76. FlsTstBlockBgnd
77. FlsTstBlockFgnd
78. 发布信息
79. 附录
80. 不适用需求
81. Change history of AUTOSAR traceable items
82. Traceable item history of this document according to AUTOSAR Release R25-11
83. Added 规范 Items in R25-11
84. Changed 规范 Items in R25-11
85. Deleted 规范 Items in R25-11
86. Traceable item history of this document according to AUTOSAR Release R24-11
87. Added 规范 Items in R24-11
88. Changed 规范 Items in R24-11
89. Deleted 规范 Items in R24-11
