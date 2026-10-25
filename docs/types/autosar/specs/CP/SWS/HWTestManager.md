# Specification of Hardware Test Manager on start up and shutdown (`HWTestManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 703 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_HWTestManager_703\AUTOSAR_CP_SWS_HWTestManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_HWTestManager_703\AUTOSAR_CP_SWS_HWTestManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_HWTestManager_703\zzgen\CP_SWS_HWTestManager.complete.txt`

## 文档简介

This specification describes the concept, interfaces and the configuration of the module Hardware Test Management start up and shutdown (HTMSS).

The module HTMSS  is a basic software module at the service layer of the standardized basic software architecture of AUTOSAR.

The HTMSS  module shall provide the test status/results for the application SWC usages.

The purpose of this module is to provide an infrastructure for integrating/transforming the microcontroller manufacturer specific start up and shutdown tests (e.g. BIST) test results/status within the AUTOSAR standard software platform.

The basic functionalities of this module includes collecting the test results/status from the MSTP, configure MSTP tests, start tests execution, provide the MSTP test status to EcuM module and application SWC to evaluate the test results for the system behavior.

The HTMSS  module integrates on the level of the AUTOSAR BSW service layer. Below figure shows the functional integration of the HTMSS  module in AUTOSAR software platform.

Note: MSTP wrapper is an intermediate module for accessing the MSTP module from an AR standardized module HTMSS. The MSTP wrapper can be implemented manually or can be generated/configured using AUTOSAR methodology/process.

The HTMSS module pre-integration requirements are:

* It shall be possible to run Microcontroller Specific Test Package (MSTP) startup and shutdown tests on the device under development
* The test results/status are available to the HTMSS module access
* It shall be possible to configure the MSTP start up and shutdown tests via HTMSS module

The role of HTMSS module in different phases of the standard AUTOSAR software execution platform is depicted below.

Note: The HTMSS concept may be considered for integration in AUTOSAR architecture to achieve safety goals for a safety relevant ECU, but it is NOT mandatory always.

Note: The HTMSS phases described below are for explaining the functionalities of HTMSS module in a typical AUTOSAR ECU software execution environment. These phases shall NOT be referred to the phases defined in EcuM .

* Before AUTOSAR OS  - This phase is delimited by the MCU reset to the call to StartOS() function. During this state there a wide range of possibilities for execution of various types of tests. The MCU periphery and AUTOSAR is not initialized at first, this provides potential opportunity for executing destructive tests, MCU built-in tests, fault injection tests etc. That phase is also use

## 模块依赖

The HTMSS has interfaces to some BSW Modules  and application SWC in the AUTOSAR architecture . Additionally HTMSS has interfaces with Microcontroller Specific Test Package (MSTP) outside the AUTOSAR architecture. However, the interactions with MSTP are implementation specific.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the concept, interfaces and the configuration of the module Hardware Test Management start up and shutdown (HTMSS).

The module HTMSS  is a basic software module at the service layer of the standardized basic software architecture of AUTOSAR.

The HTMSS  module shall provide the test status/results for the application SWC usages.

The purpose of this module is to provide an infrastructure for integrating/transforming the microcontroller manufacturer specific start up and shutdown tests (e.g. BIST) test results/status within the AUTOSAR standard software platform.

The basic functionalities of this module includes collecting the test results/status from the MSTP, configure MSTP tests, start tests execution, provide the MSTP test status to EcuM module and application SWC to evaluate the test results for the system behavior.

The HTMSS  module integrates on the level of the AUTOSAR BSW service layer. Below figure shows the functional integration of the HTMSS  module in AUTOSAR software platform.

Note: MSTP wrapper is an intermediate module for accessing the MSTP module from an AR standardized module HTMSS.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the HWTestManager module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| ADC | Analog to Digital converter |
| BIST | Built In Self Test |
| BSW | Basic Software |
| DET | Default error tracer |
| ECU | Electronic Control Unit |
| ECUM | Electronic Control Unit Manager |
| HTMSS | Hardware Test Management startup shutdown |
| MCU | Micro Controller Unit |
| MSTP | Microcontroller Specific Test Package |
| RTE | Run Time Environment |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for HWTestManager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for HWTestManager.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

This document is applicable for AUTOSAR release 4.3.0

### 7. 限制
*原文标题：Limitations*

The use of this module is optional and only in case where the provided functionality is required.

To integrate needed range of testing capabilities for specific solution, it has required that all affected modules need to implement interfaces with HTMSS.

Example: The MSTP (microcontroller specific test package) module from the semi manufacturer is a mandatory module for integrating the HTMSS module in AUTOSAR software platform

The start up/shutdown test configurations are up to the system integrator and based on the MSTP test configuration capabilities and features.

The module HTMSS shall interact with the assumed test module (MSTP) via a wrapper implementation (in this spec named as MSTP wrapper) using AR methodology/process.

The test results storage in NV memory and DEM error reporting requirements are out of scope from HTMSS module. Integrator shall manage these requirements at respective application SWC level, if needed.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

Each ECU is designed to provide predefined functionality in the context of given system architecture. Then it is of great importance that this ECU operates without failures, which in turn can be avoided or detected before they appear, by simple monitoring of expected faults. One strategy to check the operability of ECU is to execute destructive tests (during start up and shutdown of ECU) that check the given logic and conditions, and keep the results for further analysis. The HTMSS module depicts the need to address results from such tests on ECU, and to provide their status on request.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The HTMSS has interfaces to some BSW Modules  and application SWC in the AUTOSAR architecture . Additionally HTMSS has interfaces with Microcontroller Specific Test Package (MSTP) outside the AUTOSAR architecture. However, the interactions with MSTP are implementation specific.

### 10. EcuM

The ECU State Manager  shall access the HTMSS services to start the tests, and collect test results/status from the device under test.

The ECUM STARTUP phase and SHUTDOWN phase incorporates the main functionalities of HTMSS module in AUTOSAR software platform.

### 11. Application SWC

The application software component shall collect the HTMSS test results (via RTE ) for evaluations and then to determine the software behavior. Additionally, if needed the test results shall be stored in the non-volatile memory for later use.

### 12. RTE

Through the RTE  data exchange the test result/status are shared between the HTMSS module and the application software layer.

### 13. Dependencies with MSTP

The HTMSS  may access the MSTP module (could be a non-AR software module, being synchronous and/or asynchronous) to manage the below functionalities/ features within the AUTOSAR software platform.

* To configure the start up and shutdown tests configured in the HTMSS module
* To trigger the MSTP tests during the ECUM start up and shutdown phases
* To collect the test results and provide to application software for its usage

Note: HTMSS module shall interact with MSTP module through wrapper module/source code (named in this spec MSTP wrapper) configurated/generated using AUTOSAR methodology and process.

### 14. MCU

The HTMSS receives the reset reason from the MCU driver (e.g. reset caused by shutdown tests execution)

### 15. Default 错误 Tracer (Det)
*原文标题：Default Error Tracer (Det)*

If the DET is enabled, the HTMSS module informs the Default error tracer about the detected development errors.

### 16. 文件结构
*原文标题：File structure*

### 17. 代码文件结构
*原文标题：Code file structure*

Upstream requirements:
⌈
The code file structure shall contain one or more source files HTMSS_<xxx>.c, which contains the entire parts of the HTMSS code.
⌋

### 18. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support pre-compile configuration |  |  |
| All AUTOSAR Basic Software Modules shall provide at least a basic set of module files |  |  |
| The Basic Software Module specifications shall specify at least in the description which other modules they require |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| BSW Modules shall support post-build configuration |  |  |
| Null pointer errors shall follow a naming rule |  |  |
| The HTMSS shall allow configuration of start up and shutdown tests |  |  |
| The HTMSS shall allow the configuration of tests at individual hardware res |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 功能规范
*原文标题：Functional specification*

### 20. 通用行为
*原文标题：General behavior*

The basic functionalities of HTMSS can be divided into the following main groups:

* Initialization of HTMSS module
* Configure the MSTP tests based on HTMSS configuration (start up/shutdown)
* Interface for starting the MSTP tests (startup and shutdown)
* Provide the MSTP tests status to the other autosar modules (incl. appln SWC)

Note: The HTMSS shall not add any test functionality corresponding to MSTP tests. The tests implementation and execution is out of HTMSS scope.

### 21. Hardware Test 管理
*原文标题：Hardware Test Management*

### 22. Background & Rationale

The overall objective is to provide a fault status of the microcontroller operation by means of hardware test execution in safety-related systems, built on standard AUTOSAR platform.

The concept shall provide a facility to execute and log a predefined set of tests. Additionally shall support HW monitoring activities in the context of microcontroller in use, obtain tests results and propagate them to stakeholder software components in AUTOSAR environment.

The goal of HTMSS module is to standardize the accessible interfaces that can perform the microcontroller specific start up/shutdown tests outside the AUTOSAR environment and then to collect & evaluate the test results within AUTOSAR software execution context.

### 23. 需求
*原文标题：Requirements*

Upstream requirements:
⌈
The HTMSS shall be able to read the microcontroller specific start up and shutdown test results/status, on the requested hardware.
⌋

Note: It is the responsibility of user/integrator to evaluate the HTMSS provided start up and shutdown test results (i.e. in case of failure) and then to define the software reactions. The error hooks (start up & shutdown) shall evaluate the test results.

HINT: Integrator may have prioritised the tests handling the test results based on the criticality/relevance in the system/safety goals etc. In case of a critical error integrator shall decide to go back to reset state or shutdown sate.

  Upstream requirements:
⌈
The pre-compile time configuration parameters shall be checked statically (at least during compile time) for correctness.
⌋

  Upstream requirements:
⌈
In one configuration, there shall be more than one test per module for testing. These tests could be executed in parallel.
⌋

Note: The configuration parameter to handle above requirement shall be adapted in HTMSSConfigSet

  Upstream requirements:
⌈
It shall be possible to test the individual hardware resources (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. States of HTMSS 模块
*原文标题：States of HTMSS module*

Upstream requirements:
⌈
| State | Description |
|---|---|
| HTMSS_UINIT | HTMSS module uninitialized(default value before module initialization) |
| HTMSS_INIT | HTMSS module initialized |
| HTMSS_BUSY | The HTMSS requested tests are not completed/progressing/initiated |
| HTMSS_IDLE | HTMSS requested tests are completed/ NO pending tests are running |

⌋

### 25. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 26. Development 错误
*原文标题：Development Errors*

Definition of development errors in module HTMSS
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| A service was called prior to initialization | HTMSS_E_NOT_INIT | 0x01 |
| A null pointer was passed as an argument | HTMSS_E_NULL_POINTER | 0x02 |
| A parameter was invalid (unspecific) | HTMSS_E_PARAM_INVALID | 0x03 |
| Function called when test request is running | HTMSS_E_BUSY | 0x04 |

⌋

### 27. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 28. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 29. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 30. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 31. API 规范
*原文标题：API specification*

### 32. Imported 类型
*原文标题：Imported types*

In this chapter, all types included from the following files are listed:

The HTMSS shall use only the following imported types of other modules:

 Definition of imported datatypes of module HTMSS
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Mcu | Mcu.h | Mcu_ResetType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 33. 类型定义
*原文标题：Type definitions*

The following Data Types shall be used for the functions defined in this specification

### 34. HTMSS_TestCfgType

Definition of datatype `HTMSS_TestCfgType`
  Upstream requirements: ,
⌈
| Name | HTMSS_TestCfgType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Implementation specific | < |
| ^ | Type | - |
| ^ | Comment | The content of the configuration data structure is implementation specific. |
| Description | Configuration data structure of HTMSS module | < |
| Available via | HTMSS.h | < |

⌋

### 35. HTMSS_TestStatusType

Definition of datatype `HTMSS_TestStatusType`
  Upstream requirements: ,
⌈
| Name | HTMSS_TestStatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | HTMSS_STATUS_OK | - | Test status PASS |
| ^ | HTMSS_STATUS_NOK | - | Test status FAIL |
| ^ | HTMSS_STATUS_INVALID | - | Test status is Invalid |
| ^ | HTMSS_STATUS_UNINIT | - | Test status is not initialized |
| Description | HTMSS_TestStatusType describes status of test. | < | < |
| Available via | HTMSS.h | < | < |

⌋

### 36. HTMSS_TestGroupType

Definition of ImplementationDataType `HTMSS_TestGroupType`
  Upstream requirements: ,
⌈
| Name | HTMSS_TestGroupType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | HTMSS_STARTUP | - | Test to be executed at startup only |
| ^ | HTMSS_SHUTDOWN | - | Test to be executed at shutdown only |
| ^ | HTMSS_STARTUP_SHUTDOWN | - | Test to be executed at start up and shutdown |
| Description | HTMSS_ TestGroupType describes the test group type | < | < |
| Variation | - | < | < |
| Available via | HTMSS.h | < | < |

⌋

### 37. HTMSS_TestResultType

Definition of ImplementationDataType `HTMSS_TestResultType`
  Upstream requirements: ,
⌈
| Name | HTMSS_TestResultType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | TestResult | < |
| ^ | Type | uint8 |
| ^ | Comment | The test result (e.g. pass, fail, invalid) |
| ^ | TestSignature | < |
| ^ | Type | uint8 |
| ^ | Comment | The identifier of the tested resource |
| Description | It describes the current test result | < |
| Variation | - | < |
| Available via | HTMSS.h | < |

⌋

### 38. 功能定义
*原文标题：Function definitions*

The following sections specify the provided API functions of the HTMSS module.

### 39. HTMSS_Init

Definition of API function `HTMSS_Init`
  Upstream requirements: ,
⌈
| Service Name | HTMSS_Init | < |
|---|---|---|
| Syntax | void HTMSS_Init ( |  |

  const `HTMSS_TestCfgType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to configuration set in Variant PB (Variant PC requires a NULL_PTR). |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the HTMSS module | < |
| Available via | HTMSS.h | < |

⌋

  Upstream requirements:
⌈
In case of Variant PB: The function `HTMSS_Init` shall initialize the HTMSS module and according to the configuration set referenced by ConfigPtr.
⌋

  Upstream requirements: ,
⌈
In case of Variant PC: The function `HTMSS_Init` shall initialize the HTMSS according to the pre-compile configuration set.
⌋

  Upstream requirements: ,
⌈
The service `HTMSS_Init` shall initialize the global variables and data structures of the HTMSS including flags and buffers.
⌋

  Upstream requirements: ,
⌈
The function `HTMSS_Init` shall initialize MSTP module and configure the MSTP tests.
⌋

  Upstream requirements:
⌈
The HTMSS is not functional until this function has been called.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. HTMSS_StartTest

Definition of API function `HTMSS_StartTest`
  Upstream requirements:
⌈
| Service Name | HTMSS_StartTest | < |
|---|---|---|
| Syntax | Std_ReturnType HTMSS_StartTest ( |  |

  `HTMSS_TestGroupType` GrpId
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | GrpId | The test group type (e.g. start up or shut down) |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | Standard return from function execution |
| Description | Starts the MSTP configured tests | < |
| Available via | HTMSS.h | < |

⌋

  Upstream requirements:
⌈
The function `HTMSS_StartTest` shall trigger the MSTP test operation on the requested hardware. If this is successful, E_OK shall be returned.
⌋

  Upstream requirements:
⌈
The function `HTMSS_StartTest` shall set the HTMSS state to `HTMSS_BUSY`, if the MSTP status confirm that, test trigger is successful.
⌋

  Upstream requirements:
⌈
The function `HTMSS_StartTest` shall handle the start up and shutdown test requests for the device under test.

Hint: The interface between HTMSS and the MSTP module is implementation specific. Because the semi manufacturer may define the method of interacting with MSTP module for the device.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. HTMSS_GetTestStatus

Definition of API function `HTMSS_GetTestStatus`
  Upstream requirements: ,
⌈
| Service Name | HTMSS_GetTestStatus | < |
|---|---|---|
| Syntax | HTMSS_TestStatusType HTMSS_GetTestStatus ( |  |

  `HTMSS_TestGroupType` GrpId,
  `HTMSS_TestResultType`* RequestTestResultPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | GrpId | The test group type (e.g. start up or shutdown) |
| Parameters (inout) | None | < |
| Parameters (out) | RequestTestResultPtr | Pointer to store the request result |
| Return value | HTMSS_TestStatusType | - |
| Description | Returns current test status on requested test | < |
| Available via | HTMSS.h | < |

⌋

  Upstream requirements:
⌈
The function `HTMSS_GetTestStatus` shall collect the test status from the MSTP and store the read data in the out parameter RequestTestResultPtr, if OUT parameter is not a `NULL_PTR` and return `HTMSS_TestStatusType` with test status result.
⌋

  Upstream requirements:
⌈
If the OUT parameter is `NULL_PTR`, the function `HTMSS_GetTestStatus` shall NOT update the OUT parameter but shall return `HTMSS_TestStatusType` with the test status result.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. HTMSS_GetVersionInfo

Definition of API function `HTMSS_GetVersionInfo`
⌈
| Service Name | HTMSS_GetVersionInfo | < |
|---|---|---|
| Syntax | void HTMSS_GetVersionInfo ( |  |

  `Std_VersionInfoType`* versioninfo
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | versioninfo | Pointer to where to store the version information of this module. |
| Return value | None | < |
| Description | - | < |
| Available via | HTMSS.h | < |

⌋

### 43. Callback 通知
*原文标题：Callback notifications*

None

### 44. Scheduled functions

None

### 45. Expected 接口
*原文标题：Expected interfaces*

In this chapter, all interfaces required from other modules are listed.

### 46. Mandatory 接口
*原文标题：Mandatory Interfaces*

This chapter defines all interfaces, which are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module HTMSS
  Upstream requirements:
⌈
| API Function | Header File | Description |
|---|---|---|
| Mcu_GetResetReason | Mcu.h | The service reads the reset type from the hardware, if supported. |

⌋

### 47. Optional 接口
*原文标题：Optional Interfaces*

This chapter defines all interfaces, which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module HTMSS
⌈
| API Function | Header File | Description |
|---|---|---|
| Det_ReportError | Det.h | Service to report development errors. |

⌋

### 48. Configurable 接口
*原文标题：Configurable interfaces*

There are no configurable interfaces.

### 49. 服务接口
*原文标题：Service Interfaces*

This chapter formally specifies the corresponding AUTOSAR service in terms of the SWC template. The interface described here is used to generate the RTE between application software and the HTMSS module.

### 50. Client server 接口 - GetTestStatus
*原文标题：Client server interface - GetTestStatus*

Definition of ClientServerInterface GetTestStatus
  Upstream requirements:
⌈
| Name | GetTestStatus | < | < |
|---|---|---|---|
| Comment | - | < | < |
| IsService | true | < | < |
| Variation | - | < | < |
| Possible Errors | 0 | HTMSS_STATUS_OK | Test status PASS |
| ^ | 0 | HTMSS_STATUS_NOK | Test status FAIL |
| ^ | 0 | HTMSS_STATUS_UNINIT | Test status is not initialized |
| ^ | 0 | HTMSS_STATUS_INVALID | Test status is Invalid |

| Operation | GetTestStatus | < |
|---|---|---|
| Comment | Returns current test status on requested test | < |
| Relates to | HTMSS_GetTestStatus | < |
| Variation | - | < |
| Parameters | GrpId | < |
| ^ | Type | HTMSS_TestGroupType |
| ^ | Direction | IN |
| ^ | Comment | The test group type (e.g. start up or shutdown) |
| ^ | Variation | - |
| ^ | RequestTestResultPtr | < |
| ^ | Type | HTMSS_TestResultType |
| ^ | Direction | OUT |
| ^ | Comment | Pointer to provide Test results along with Test |
| ^ | Variation | - |
| Possible Errors | HTMSS_STATUS_OK HTMSS_STATUS_NOK HTMSS_STATUS_INVALID HTMSS_STATUS_UNINIT | < |

⌋

 Definition of Port GetTestStatus required by module HTMSS
⌈
| Name | GetTestStatus | < | < |
|---|---|---|---|
| Kind | RequiredPort | Interface | GetTestStatus |
| Description | - | < | < |
| Variation | - | < | < |

⌋

### 51. Callout 定义
*原文标题：Callout Definitions*

Callouts are code fragments that must be added to the HTMSS module during ECU integration. The content of most callouts is hand-written code. The HTMSS module configuration tool generates a default implementation for some callouts which is edited manually by the integrator. Conceptually, these callouts belong to the ECU integration code.

Note: The error hook is an integration code to control the ECU processing in case of any tests failure.It may be a critical error for the system under development, so the integrator can react to the test failure (e.g. reset, halt, safe state)

### 52. HTMSS_StartupTestErrorHook

Definition of API function `HTMSS_StartupTestErrorHook`
  Upstream requirements:
⌈
| Service Name | HTMSS_StartupTestErrorHook | < |
|---|---|---|
| Syntax | void HTMSS_StartupTestErrorHook ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | The ECU State Manager will call the error hook if the HTMSS provided startup test results have a failure. In this situation, the integrator has to control the CPU processing based on the system requirements, i.e. reset, safe state etc... | < |
| Available via |  | < |

⌋

### 53. HTMSS_ShutdownTestErrorHook

Definition of callout function `HTMSS_ShutdownTestErrorHook`
  Upstream requirements:
⌈
| Service Name | HTMSS_ShutdownTestErrorHook | < |
|---|---|---|
| Syntax | void HTMSS_ShutdownTestErrorHook ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | The ECU State Manager will call the error hook if the HTMSS provided shutdown test results have a failure. In this situation, the integrator has to control the CPU processing based on the system requirements, i.e. reset, safe state etc... | < |
| Available via | HTMSS.h | < |

⌋

### 54. 时序图
*原文标题：Sequence diagrams*

### 55. HTMSS 初始化的Sequence diagram 示例
*原文标题：Sequence diagram example of HTMSS Initialization*

### 56. 启动 test execution的Sequence diagram 示例
*原文标题：Sequence diagram example of startup test execution*

### 57. 关机 test execution的Sequence diagram 示例
*原文标题：Sequence diagram example of shutdown test execution*

### 58. Sequence diagram 示例处理 the last 关机 test results immediately after the ECU reset raised by MSTP 模块
*原文标题：Sequence diagram example handling the last shutdown test results immediately after the ECU reset raised by MSTP module*

### 59. collecting the 关机 test results的Sequence diagram 示例
*原文标题：Sequence diagram example of collecting the shutdown test results*

### 60. ECU 关机 when HTMSS is integrated in the 系统的Sequence diagram 示例
*原文标题：Sequence diagram example of ECU shutdown when HTMSS is integrated in the system*

### 61. Sequence diagram 示例 of application SWC collecting the test results
*原文标题：Sequence diagram example of application SWC collecting the test results*

### 62. 配置规范
*原文标题：Configuration specification*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters are described in the Chapters below.

### 63. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. However, the content of this chapter is, intended to provide as an example for reference purposes.

The actual implementation is up to the specification user.

### 64. HTMSS

Definition of EcucModuleDef HTMSS
  Status: OBSOLETE
⌈
| Module Name | HTMSS |
|---|---|
| Description | Configuration of the Hardware Test Management start up and shutdown (HTMSS) module. |
| Post-Build Variant Support | false |
| Supported Config Variants | VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| HTMSSConfigSet | 1..* | This is the base container that contains the configuration parameters & sub containers of HTMSS module. |

Tags: atp.Status=obsolete
| HTMSSGeneral | 1 | This container holds the general parameters of the HTMSS module. |
|---|---|---|

Tags: atp.Status=obsolete
⌋

### 65. HTMSSGeneral

Definition of EcucParamConfContainerDef HTMSSGeneral
  Status: OBSOLETE
⌈
| Container Name | HTMSSGeneral | < | < |
|---|---|---|---|
| Parent Container | HTMSS | < | < |
| Upstream mapping defined | - | < | < |
| Description | This container holds the general parameters of the HTMSS module. |  |  |

| Tags: atp.Status=obsolete | < | < |  |
|---|---|---|---|
| Multiplicity | 1 | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| HTMSSDevErrorDetect | 1 |  |

No Included Containers
⌋

 Definition of EcucBooleanParamDef HTMSSDevErrorDetect
  Status: OBSOLETE
⌈
| Parameter Name | HTMSSDevErrorDetect | < | < |
|---|---|---|---|
| Parent Container | HTMSSGeneral | < | < |
| Upstream mapping defined | - | < | < |
| Description | Switch for enabling the DET. |  |  |

| Tags: atp.Status=obsolete | < | < |  |
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

### 66. HTMSSConfigSet

Definition of EcucParamConfContainerDef HTMSSConfigSet
  Status: OBSOLETE
⌈
| Container Name | HTMSSConfigSet | < | < |
|---|---|---|---|
| Parent Container | HTMSS | < | < |
| Upstream mapping defined | - | < | < |
| Description | This is the base container that contains the configuration parameters & sub containers of HTMSS module. |  |  |

| Tags: atp.Status=obsolete | < | < |  |
|---|---|---|---|
| Multiplicity | 1..* | < | < |
| Configuration Parameters | < | < | < |

No Included Parameters

No Included Containers
⌋

### 67. 发布信息
*原文标题：Published Information*

For details refer to .

### 68. 附录
*原文标题：Appendix*

### 69. 不适用需求
*原文标题：Not applicable requirements*

, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,

These requirements are not applicable to this specification.

### 70. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 71. Traceable item history of this document according to AUTOSAR Release R24-25

### 72. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 73. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

### 74. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none
