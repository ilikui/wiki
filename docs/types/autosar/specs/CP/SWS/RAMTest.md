# Specification of RAM Test (`RAMTest`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 076 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_RAMTest_076\AUTOSAR_CP_SWS_RAMTest.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_RAMTest_076\AUTOSAR_CP_SWS_RAMTest.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_RAMTest_076\zzgen\CP_SWS_RAMTest.complete.txt`

## 文档简介

This document specifies the functionality, API and configuration of the AUTOSAR Basic Software module "RAM Test".

The RAM Test is a test of the physical health of the RAM cells. It is not intended to test the contents of the RAM. RAM used for registers is also tested.

Within this document, a RAM cell is understood as the unit of memory, which can be individually addressed by the processor. Thus the cell size in bits is for example 16 for a 16-bit processor.

Different algorithms exist to test RAM. They target different sets of fault models, achieve different coverages, result in different runtimes and are either destructive or non-destructive. Coverage also depends on the underlying physical RAM architecture. ISO 26262 only establishes a distinction between three basic coverage levels Low (60%), Medium (90%) and High (99%) . This basic distinction is also used in the AUTOSAR specification.

An ECU safety analysis must be performed to determine which RAM Test diagnostic coverage rate (Low, Medium or High) is required. Appropriate RAM Test algorithms and further configuration parameters are then selected at compile time. At run time, the application software may choose between the compiled algorithms (and between further parameters).

A RAM Test may be called synchronously by the test environment (hereafter called "foreground test") or may be called in a cyclic manner by an OS task or other cyclic calling method (hereafter called "background test"). The test environment may select test parameters, start and stop the test, and get status reports. Development errors are reported to the Default Error Tracer (DET) and production errors are reported to the Diagnostic Event Manager (DEM).

The RamTst module consists of a `RamTst_MainFunction` for background testing, the APIs for foreground testing, several configuration and status APIs (Application Programming Interface), and several configuration containers.

| TEST FUNCTION APIs | DEFINITION |
|---|---|
| RamTst_Init | Prepare resources for testing as necessary. Initialize the test execution state as necessary. Proceed to "test stopped" state after initialization is complete. |
| RamTst_DeInit | Reset all used registers to reset values, and release all used resources. |
| RamTst_Allow | Permit the RamTst_MainFunction to perform testing at its next scheduled call. |
| RamTst_Stop | Prohibit the RamTst_MainFunction from performing tests at its next scheduled call. When RamTst_Stop is called, testing stops after the current atomic sequence. T |

## 模块依赖

An actual selected parameter set for a RAM test basically consists of a set of RAM bocks and a test algorithm.

The available parameter sets for the RAM blocks and test algorithms must be configured at pre-compile time. The software responsible for monitoring the RAM state of health must then select an appropriate parameter set, (it can also switch between several ones at runtime), according to the results of the ECU safety analysis.

Within each parameter set, the detailed definition of the blocks to be tested, e.g. their start/end address, must be configured at pre-compile or link time. Further parameters controlling the details of the test are explained later in the document (see ).

If the test environment calls a RAM Test API to test all or part of the RAM immediately (in the foreground), then the test environment is responsible to mask interrupts as desired or to call the test in a particular situation, where the tested blocks are not accessed by other modules.

For background testing, the ECU State Manager or the BSW Scheduler must schedule the RAM Test main function. The number of cells tested in one cycle is set as a default at pre-compile or link time based upon the needs of the scheduler. This size may be changed during runtime to accommodate a change in the schedule. In addition, the parameter set used for the background test may be switched during runtime, so that e.g. certain critical blocks can be tested in certain ECU states with higher coverage than in other ECU states or uncritical blocks can be excluded from tests in certain ECU states.

In development mode the error-hook function of module DET will be called.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies the functionality, API and configuration of the AUTOSAR Basic Software module "RAM Test".

The RAM Test is a test of the physical health of the RAM cells. It is not intended to test the contents of the RAM. RAM used for registers is also tested.

Within this document, a RAM cell is understood as the unit of memory, which can be individually addressed by the processor. Thus the cell size in bits is for example 16 for a 16-bit processor.

Different algorithms exist to test RAM. They target different sets of fault models, achieve different coverages, result in different runtimes and are either destructive or non-destructive. Coverage also depends on the underlying physical RAM architecture. ISO 26262 only establishes a distinction between three basic coverage levels Low (60%), Medium (90%) and High (99%) . This basic distinction is also used in the AUTOSAR specification.

An ECU safety analysis must be performed to determine which RAM Test diagnostic coverage rate (Low, Medium or High) is required. Appropriate RAM Test algorithms and further configuration parameters are then selected at compile time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. RamTstNumberOfTestedCells

The RamTstNumberOfTestedCells default is set by configuration (pre-compile or link) in the RamTstAlgParams container and applies to every block defined within an algorithm, but can be different for each RamTstAlgParams, thus can be different for different algorithms or for different parameter sets for the same algorithm. RamTstNumberOfTestedCells can be changed during runtime using the API `RamTst_ChangeNumberOfTestedCells`. This capability, for example, could be used to reduce the duration of the RAM test task before running some other high-bandwidth task in order to prevent task overruns. Such a situation could occur when unusual conditions in a vehicle cause a normally dormant special algorithm to become active.

RamTstNumberOfTestedCells is only applicable to background testing.

RamTstNumberOfTestedCells may not exceed RamTstMaxNumberOfTestedCells.

The absolute maximum size of RamTstNumberOfTestedCells for a given RamTstAlgParams container is defined and documented by the implementer. This maximum should be equal to the sum of the block sizes as defined by the block descriptions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. RamTst_MainFunction

A background test is performed by the scheduler periodically calling the `RamTst_MainFunction` to test a RamTstNumberOfTestedCells of memory using the selected algorithm, until the entire defined area of RAM is tested. This `RamTst_MainFunction` can be interrupted at the end of each atomic sequence during a scheduled call.

`RamTst_MainFunction`:

* Is made up of one or more atomic (i.e. uninterruptable) pieces of code. The number of cells that can be tested in one atomic sequence is considered as implementation specific, thus it is not determined by any (standardized) configuration parameter. However, it is expected that at least RamTstMinNumberOfTestedCells are completely tested during one atomic sequence. It should be noted, that in general the detection of coupling faults between cells is limited to those cells which are tested together in the same atomic sequence.
* At the end of each atomic piece, internal flags are checked to see if an OS task has changed any parameter of the state chart, and to respond to question-type APIs.
* Knows inherently:

  * which algorithm it is using;
  * which memory blocks must be tested for this algorithm,
  * start and end addresses of each block;

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. RamTst_RunFullTest, RamTst_RunPartialTest

"Full" and "Partial" refers to full or partial memory, and not the full or partial set of algorithms over the memory space. The test is performed over the specified memory area using only one algorithm. The desired parameter set (which includes the algorithm) is selected by calling the API `RamTst_SelectAlgParams` before calling the foreground test API.

Note that due to the possibility of testing larger memory areas without interruption the fault coverage of foreground tests is in general better than of background test for the same algorithm.

### 5. RamTst_RunFullTest API：
*原文标题：RamTst_RunFullTest API:*

The user calls `RamTst_RunFullTest` with no arguments (the test parameter set is selected before). This test is normally used for a full RAM check at system startup or shutdown.

Sequence:

* `RamTst_Stop`
* `RamTst_SelectAlgParams` to chose the desired parameter set
* `RamTst_RunFullTest`

### 6. RamTst_RunPartialTest API：
*原文标题：RamTst_RunPartialTest API:*

The user calls `RamTst_RunPartialTest` with one argument specifying the desired block to be tested. This test is used for example to check a specified memory section immediately before using that memory. This capability is to enable a system safety concept.

Sequence:

* `RamTst_Stop`
* `RamTst_SelectAlgParams` to chose the desired parameter set
* `RamTst_RunPartialTest` (ChosenBlock)

or if background test shall continue afterwards:

* `RamTst_Suspend`
* `RamTst_RunPartialTest` (ChosenBlock)

### 7. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| API | Application Programming Interface |
| CRC | Cyclic Redundancy Check |
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |
| DMA | Direct Memory Access |
| ECC | Error Correction Code |
| NMI | Non Maskable Interrupt |
| RAM | Random Access Memory |

### 8. 定义
*原文标题：Definitions*

Note: These definition are copied from the `AUTOSAR_FO_TR_Glossary`.pdf

Synchronous: A communication is synchronous when the calling software entity is blocked until the called operation is evaluated. The calling software entity continues its operation by getting the result. Synchronous communication between distributed functional units has to be implemented as remote procedure call.

Asynchronous: Asynchronous communication does not block the sending software entity. The sending software entity continues its operation without getting a response from the communication partner(s). There could be an acknowledgement by the communication system about the sending of the information. A later response to the sending software entity is possible.

### 9. 相关文档
*原文标题：Related documentation*

### 10. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 11. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for RAM Test.

Thus, the specification SWS BSW General shall be considered as additional and required specification for RAM Test.

### 12. 约束与假设
*原文标题：Constraints and assumptions*

Note: To achieve ISO 26262 compliance, the software implementation must be according to the requirements of ISO 26262 for the required safety integrity level (ASIL A, ASIL B, ASIL C or ASIL D) of the safety goals of the system.

### 13. 限制
*原文标题：Limitations*

⌈
During the execution of a RAM test algorithm, no other software shall be allowed to modify the RAM area under test.
⌋

In case of background test, the testing code shall be implemented in small atomic pieces in order to accomplish this.

In case of foreground test, it is assumed that the test environment provides the conditions for exclusive access to the tested RAM area.

The rationale behind this requirement is the incapability of the RAM test module to ensure data consistency (e.g. during an NMI, or during a DMA transfer).

⌈
The implementer shall provide integration hints for each algorithm, e.g. "do not use in parallel with a DMA".
⌋

When testing shared memory in a multi-core system it might not be possible to get exclusive access to more than one memory cell via interrupt locking. In this case, the usage of a test configuration for shared memory blocks must be restricted to foreground tests and to specific ECU states, see  Related Documentation and  for additional information.

In a multi-core system, disabling the interrupts does not guarantee atomicity for more than a single memory access.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Full RAM Test

A full test shall be executed when only a single core is running. In a Master-Slave system, this is possible during the initial boot phase while only the master core is active. Additionally full tests can be performed during ECU sleep mode. This allows the EcuM to delay the sleep state of one of the cores to perform a RAM tests on that core.

Full RAM tests shall be allowed whenever atomicity across cores can be guaranteed, known moments are,

# Before the master core has activated any other core.
# When all cores except one have entered sleep mode.

### 15. Partial RAM Test

During normal operation, the memory is split into non-shared and shared parts. The integrator has to specify for each `ALGORITHM_ID` the memory areas on which the algorithm works. A non-shared area is owned by a specific core and can be tested by the code running on that core as in the single core case. Lack of atomicity in MC causes problems for shared memory.

### 16. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 17. 对其他模块的依赖
*原文标题：Dependencies to other modules*

An actual selected parameter set for a RAM test basically consists of a set of RAM bocks and a test algorithm.

The available parameter sets for the RAM blocks and test algorithms must be configured at pre-compile time. The software responsible for monitoring the RAM state of health must then select an appropriate parameter set, (it can also switch between several ones at runtime), according to the results of the ECU safety analysis.

Within each parameter set, the detailed definition of the blocks to be tested, e.g. their start/end address, must be configured at pre-compile or link time. Further parameters controlling the details of the test are explained later in the document (see ).

If the test environment calls a RAM Test API to test all or part of the RAM immediately (in the foreground), then the test environment is responsible to mask interrupts as desired or to call the test in a particular situation, where the tested blocks are not accessed by other modules.

For background testing, the ECU State Manager or the BSW Scheduler must schedule the RAM Test main function.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All internal driver modules shall separate the interrupt frame definition from the service routine |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| The runtime of interrupt service routines and functions that are running in interrupt context shall be kept short |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| Classification of development errors |  |  |
| Reporting of production relevant error status |  |  |
| BSW Modules shall support link-time configuration |  |  |
| BSW Modules shall support pre-compile configuration |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| List possible error notifications |  |  |
| Each module shall provide version information |  |  |
| API handling in uni |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 功能规范
*原文标题：Functional specification*

### 20. 需求
*原文标题：Requirements*

⌈
The RAM Test module shall provide the background RAM test as an asynchronous service.
⌋

⌈
The RAM Test module shall provide the foreground RAM test as an synchronous service.
⌋

  Upstream requirements:
⌈
The configuration process for the RAM Test module shall allow the selection of a subset of different RAM Test algorithms during pre-compile time.
⌋

This subset is to be chosen from the different RAM Test algorithms as specified in , , , .

  Upstream requirements:
⌈
If non-destructive RAM Test is chosen, the RAM Test module shall save the RAM area to be tested before the module modifies it. The RAM Test module shall execute the complete procedure (saving, changing, restoring) without interruption.
⌋

Note: "Saving" and "restoring" does not necessarily mean explicit copying actions. If the test algorithm is "transparent" it restores the original content in the tested cells after the test without needing additional memory for saving.

  Upstream requirements: ,
⌈
For both the destructive and non-destructive options, the RAM Test module shall ensure that the test algorithm does not overwrite the RAM Test internal variables.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 22. Development 错误
*原文标题：Development Errors*

Definition of development errors in module RamTst
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| A particular API is called in an unexpected state (see also: , , , , , , , ) | RAMTST_E_STATUS_FAILURE | 0x01 |
| API parameter out of specified range (see also: , , , ) | RAMTST_E_OUT_OF_RANGE | 0x02 |
| API service used without module initialization (see also: ) | RAMTST_E_UNINIT | 0x03 |
| API service called with a NULL pointer (see also: ) | RAMTST_E_PARAM_POINTER | 0x04 |

⌋

⌈
The function `RamTst_Init` shall be called first before calling any other RAM test functions. If this sequence is not respected, the error code `RAMTST_E_UNINIT` shall be reported to the Default Error Tracer (if development error detection is enabled).
⌋

⌈
Additional errors that are detected because of specific implementation and/or specific hardware properties shall be added in the RAM Test device specific implementation specification. The classification and enumeration shall be compatible to the errors listed above in .
⌋

### 23. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 24. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 25. Extended Production 错误
*原文标题：Extended Production Errors*

Upstream requirements:
⌈
Production errors shall be reported to Diagnostic Event Manager (DEM) via the `Dem_SetEventStatus` API.
⌋

 RAM failure during test.
  Upstream requirements: ,
⌈
| Diagnostic Event (Error Name) | RAMTST_MAIN_RAM_FAILURE |
|---|---|
| Description | The function RamTst_MainFunction shall update the overall test result status and error is updated based on the current status of RamTstAlgParams.See: . |
| Failed condition | If test result of at least one block is RAMTST_RESULT_NOT_OK. See . |
| Passed condition | If test result of all the blocks is RAMTST_RESULT_OK. See . |

⌋

⌈
RAM test for `RamTst_MainFunction` function shall Fail if test result of at least one block is `RAMTST_RESULT_NOT_OK`.
⌋

⌈
RAM test for `RamTst_MainFunction` function shall Pass if test result of all the blocks is `RAMTST_RESULT_OK`.
⌋

 RAM failure during test.
  Upstream requirements: ,
⌈
| Diagnostic Event (Error Name) | RAMTST_RUNFL_RAM_FAILURE |
|---|---|
| Description | The function RamTst_RunFullTest shall update the overall test result status and error is updated based on the current status of RamTstAlgParams. See: . |
| Failed condition | If test result of at least one block is RAMTST_RESULT_NOT_OK. See . |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 通用 Test 行为
*原文标题：General Test Behavior*

This sections contains detailed specifications items which hold for the foreground test and the background test as well.

Both foreground of background tests are controlled by the currently selected parameter set RamTstAlgParams which defines the test algorithm, the set of memory blocks to be tested and several attributes controlling the behavior of the test.

Note that the same test algorithm can be used as part of several different RamTstAlgParams, that none of the RamTstAlgParams must necessarily contain all memory blocks and that (in general) for foreground and background tests different RamTstAlgParams can be selected. This allows for a flexible approach of usings the tests differently in specific ECU modes or for different types of memory.

  Upstream requirements:
⌈
If the configuration parameter RamTstTestPolicy for a block is set to `RAMTEST_NON_DESTRUCTIVE`, the test algorithm shall restore the original memory content of the tested cells of this block after the test (given that no error is detected).
⌋

Hint: For a transparent test algorithm, this behavior is automatically fulfilled without additional overhead.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. API 规范
*原文标题：API specification*

### 28. Imported 类型
*原文标题：Imported types*

This chapter lists data type definitions for the included variables and constants.

 Definition of imported datatypes of module RamTst
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 29. 类型定义
*原文标题：Type definitions*

### 30. RamTst_ConfigType

Definition of datatype `RamTst_ConfigType`
  Upstream requirements:
⌈
| Name | RamTst_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | - |
| Description | Configuration data structure of the RamTst module. | < |
| Available via | RamTst.h | < |

⌋

### 31. RamTst_ExecutionStatusType

Definition of datatype `RamTst_ExecutionStatusType`
⌈
| Name | RamTst_ExecutionStatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | RAMTST_EXECUTION_UNINIT | 0x00 | The RAM Test is not initialized or not usable. |
| ^ | RAMTST_EXECUTION_STOPPED | 0x01 | The RAM Test is stopped and ready to be started in foreground or to be allowed in background. |
| ^ | RAMTST_EXECUTION_RUNNING | 0x02 | The RAM Test is currently running. |
| ^ | RAMTST_EXECUTION_SUSPENDED | 0x03 | The background RAM Test is waiting to be resumed. |
| Description | This is a status value returned by the API service RamTst_GetExecutionStatus(). | < | < |
| Available via | RamTst.h | < | < |

⌋

  Upstream requirements:
⌈
For the type `RamTst_ExecutionStatusType`, the enumeration value `RAMTST_EXECUTION_UNINIT` shall be the default value after a reset.
⌋

### 32. RamTst_TestResultType

Definition of datatype `RamTst_TestResultType`
⌈
| Name | RamTst_TestResultType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | RAMTST_RESULT_NOT_TESTED | 0x00 | The RAM Test is not executed. |
| ^ | RAMTST_RESULT_OK | 0x01 | The RAM Test has been tested with OK result |
| ^ | RAMTST_RESULT_NOT_OK | 0x02 | The RAM Test has been tested with NOT-OK result. |
| ^ | RAMTST_RESULT_UNDEFINED | 0x03 | The RAM Test is currently running. |
| Description | This is a status value returned by the API service RamTst_GetTestResult(). | < | < |
| Available via | RamTst.h | < | < |

⌋

⌈
For the type `RamTst_TestResultType` (of the overall test result), the enumeration value `RAMTST_RESULT_NOT_TESTED` shall be the default value after a reset.
⌋

For more details on the usage of this status see chapter .

### 33. RamTst_AlgParamsIdType

Definition of datatype `RamTst_AlgParamsIdType`
⌈
| Name | RamTst_AlgParamsIdType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | 0...255 | - | - |
| Description | Data type used to identify a set of configuration parameters for a test algorithm. | < | < |
| Available via | RamTst.h | < | < |

⌋

⌈
For the type `RamTst_AlgParamsIdType`, the value 0 shall indicate, that no test parameters (and thus no test algorithm) is selected. This shall be the default value of the corresponding variable after reset.
⌋

### 34. RamTst_AlgorithmType

Definition of datatype `RamTst_AlgorithmType`
⌈
| Name | RamTst_AlgorithmType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | RAMTST_ALGORITHM_UNDEFINED | 0x00 | Undefined algorithm (uninitialized value) |
| ^ | RAMTST_CHECKERBOARD_TEST | 0x01 | Checkerboard test algorithm |
| ^ | RAMTST_MARCH_TEST | 0x02 | March test algorithm |
| ^ | RAMTST_WALK_PATH_TEST | 0x03 | Walk path test algorithm |
| ^ | RAMTST_GALPAT_TEST | 0x04 | Galpat test algorithm |
| ^ | RAMTST_TRANSP_GALPAT_TEST | 0x05 | Transparent Galpat test algorithm |
| ^ | RAMTST_ABRAHAM_TEST | 0x06 | Abraham test algorithm |
| Description | This is a value returned by the API service RamTst_GetTestAlgorithm(). | < | < |
| Available via | RamTst.h | < | < |

⌋

⌈
For the type `RamTst_AlgorithmType`, the enumeration value `RAMTST_ALGORITHM_UNDEFINED` shall be the default value after reset.
⌋

  Upstream requirements:
⌈
The type `RamTst_AlgorithmType` shall contain only the enumerations of the algorithms selected at pre-compile time.
⌋

Note that if vendor specific algorithms were defined (see ), the enumeration fields of `RamTst_AlgorithmType` should be extended accordingly by the implementer (or by a code generator).

### 35. RamTst_NumberOfTestedCellsType

Definition of datatype `RamTst_NumberOfTestedCellsType`
⌈
| Name | RamTst_NumberOfTestedCellsType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint32 | < | < |
| Range | 1...(2^32-1) | - | - |
| Description | Data type of number of tested RAM cells | < | < |
| Available via | RamTst.h | < | < |

⌋

### 36. RamTst_NumberOfBlocksType

Definition of datatype `RamTst_NumberOfBlocksType`
⌈
| Name | RamTst_NumberOfBlocksType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint16 | < | < |
| Range | 1...65535 | - | - |
| Description | Data type used to identify or count RAM blocks given in the test configuration parameters. | < | < |
| Available via | RamTst.h | < | < |

⌋

### 37. 功能定义
*原文标题：Function definitions*

This is a list of functions provided for upper layer modules.

### 38. RamTst_Init

Definition of API function `RamTst_Init`
  Upstream requirements: ,
⌈
| Service Name | RamTst_Init | < |
|---|---|---|
| Syntax | void RamTst_Init ( |  |

  const `RamTst_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the selected configuration set. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for RAM Test initialization. | < |
| Available via | RamTst.h | < |

⌋

  Upstream requirements:
⌈
The Configuration pointer ConfigPtr shall always have a `NULL_PTR` value.
⌋

The Configuration pointer ConfigPtr is currently not used and shall therefore be set `NULL_PTR` value.

Note: See also  in .

  Upstream requirements: ,
⌈
The function `RamTst_Init` shall initialize all RAM Test relevant registers and global variables and change the execution status to `RAMTST_EXECUTION_STOPPED`. The test is initialized to use the default test parameter set (RamTstDefaultAlgParamsId) as configured by its RamTstAlgParams container.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. RamTst_DeInit

Definition of API function `RamTst_DeInit`
  Upstream requirements:
⌈
| Service Name | RamTst_DeInit | < |
|---|---|---|
| Syntax | void RamTst_DeInit ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x0c | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for RAM Test deinitialization. | < |
| Available via | RamTst.h | < |

⌋

⌈
The function `RamTst_DeInit` shall deinitialize all RAM Test relevant registers and global variables that were initialized by `RamTst_Init` and change the execution status to `RAMTST_EXECUTION_UNINIT`.
⌋

If the RAM Test is in the `RAMTST_EXECUTION_UNINIT` state after a `RamTst_DeInit` call, a call to any RamTst Module function (except `RamTst_Init`) may result in unknown software behavior.

### 40. RamTst_Stop

Definition of API function `RamTst_Stop`
⌈
| Service Name | RamTst_Stop | < |
|---|---|---|
| Syntax | void RamTst_Stop ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for stopping the RAM Test. | < |
| Available via | RamTst.h | < |

⌋

⌈
When the `RamTst_Stop` function is called, `RamTst_MainFunction` shall still finish the current atomic sequence (if it is executing), and afterward the status shall be set to `RAMTST_EXECUTION_STOPPED`. The test result is retained, but test parameters and loop data are not.
⌋

⌈
After a `RamTst_Stop` call, `RamTst_MainFunction` shall not begin testing again when called by the scheduler until after a `RamTst_Allow` call.
⌋

  Upstream requirements: ,
⌈
If the DET is enabled and the execution status of the RAM Test is not `RAMTST_EXECUTION_RUNNING` or `RAMTST_EXECUTION_SUSPENDED`, the function `RamTst_Stop` shall report the error value `RAMTST_E_STATUS_FAILURE` to the DET, and then immediately return.
⌋

The `RamTst_Stop` API can be enabled or disabled by the configuration parameter RamTstStopApi within the container RamTstCommon.

### 41. RamTst_Allow

Definition of API function `RamTst_Allow`
⌈
| Service Name | RamTst_Allow | < |
|---|---|---|
| Syntax | void RamTst_Allow ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for continuing the RAM Test after calling 'RamTst_Stop. | < |
| Available via | RamTst.h | < |

⌋

⌈
The function `RamTst_Allow` shall permit the `RamTst_MainFunction` to perform testing at its next scheduled call, if it had been stopped. Therefore, it shall change the execution status to `RAMTST_EXECUTION_RUNNING`, if it has been `RAMTST_EXECUTION_STOPPED`. The test shall be continued with the default test parameter set (RamTstDefaultAlgParamsId) as configured by its RamTstAlgParams container.
⌋

  Upstream requirements:
⌈
If DET is enabled and the execution status is not `RAMTST_EXECUTION_STOPPED`, the function `RamTst_Allow` shall report the error value `RAMTST_E_STATUS_FAILURE` to the DET, and then immediately return.
⌋

The `RamTst_Allow` API can be enabled or disabled by the configuration parameter RamTstAllowApi within the container RamTstCommon.

### 42. RamTst_Suspend

Definition of API function `RamTst_Suspend`
⌈
| Service Name | RamTst_Suspend | < |
|---|---|---|
| Syntax | void RamTst_Suspend ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x0d | < |
| Sync/Async | Asynchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service for suspending current operation of background RAM Test, until RESUME is called. | < |
| Available via | RamTst.h | < |

⌋

⌈
The function `RamTst_Suspend` shall temporarily prohibit the `RamTst_MainFunction` from performing tests at its next scheduled call. When `RamTst_Suspend` is called and the execution status is `RAMTST_EXECUTION_RUNNING`, testing stops after the current atomic sequence, test result and current test states are retained and the execution status is changed to `RAMTST_EXECUTION_SUSPENDED`.
⌋

  Upstream requirements:
⌈
If DET is enabled and the execution status is not `RAMTST_EXECUTION_RUNNING`, the function `RamTst_Suspend` shall report the error value `RAMTST_E_STATUS_FAILURE` to the DET, and then immediately return.
⌋

The `RamTst_Suspend` API can be enabled or disabled by the configuration parameter RamTstSuspendApi within the container RamTstCommon.

### 其余 55 章（内容从略，见纯文本全文）

43. RamTst_Resume
44. RamTst_GetExecutionStatus
45. RamTst_GetTestResult
46. RamTst_GetTestResultPerBlock
47. RamTst_GetVersionInfo
48. RamTst_GetAlgParams
49. RamTst_GetTestAlgorithm
50. RamTst_GetNumberOfTestedCells
51. RamTst _SelectAlgParams
52. RamTst_ChangeNumberOfTestedCells
53. RamTst_RunFullTest
54. RamTst_RunPartialTest
55. Callback 通知
56. Scheduled functions
57. RamTst_MainFunction
58. Expected 接口
59. Mandatory 接口
60. Optional 接口
61. Configurable 接口
62. RamTst_TestCompletedNotification
63. RamTst_ErrorNotification
64. 时序图
65. RamTst_MainFunction (示例)
66. RamTst_ChangeNumberOfTestedCells
67. RamTst_SelectAlgParams
68. RamTst_GetAlgParams
69. RamTst_GetExecutionStatus
70. RamTst_GetTestResult
71. RamTst_GetTestResultPerBlock
72. RamTst_GetTestAlgorithm
73. RamTst_GetNumberOfTestedCells
74. 配置规范
75. How to read this chapter
76. Containers and 配置 parameters
77. Variants
78. RamTst
79. RamTstDemEventParameterRefs
80. RamTstCommon
81. RamTstAlgorithms
82. RamTstConfigParams
83. RamTstAlgParams
84. RamTstBlockParams
85. 发布信息
86. RamTstPublishedInformation
87. Implementation Specific Information and Parameters
88. 附录
89. 不适用需求
90. Change history of AUTOSAR traceable items
91. Traceable item history of this document according to AUTOSAR Release R25-11
92. Added 规范 Items in R25-11
93. Changed 规范 Items in R25-11
94. Deleted 规范 Items in R25-11
95. Added Constraints in R25-11
96. Changed Constraints in R25-11
97. Deleted Constraints in R25-11
