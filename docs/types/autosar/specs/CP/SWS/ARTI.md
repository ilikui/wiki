# Specification of AUTOSAR Run-Time Interface (`ARTI`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 923 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_ARTI_923\AUTOSAR_CP_SWS_ARTI.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_ARTI_923\AUTOSAR_CP_SWS_ARTI.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_ARTI_923\zzgen\CP_SWS_ARTI.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Run-Time Interface ("ARTI") for debugging and tracing AUTOSAR modules.

ARTI defines an interface between build tools and debugging/tracing tools. The debugging/tracing tools shall then forward tracing information to trace/timing analysis tools. The interface shall ease and speed up the debugging, tracing and verification of system behavior as well as round-trip engineering.

Debugging and tracing enables efficient development, integration, optimization and verification of ECU software. For analyzing several aspects - especially timing aspects - it becomes essential to link the debugging and tracing data to the scheduling of an ECU. Knowledge about Tasks, Interrupts and Runnable Entities, in other words: awareness of the operating system ("OS awareness"), is required.

A good interaction of the tool chain provides complete round-trip engineering from model down to hardware and back - covering several software levels and several phases of the V-model.

ARTI shall especially provide

* Support of "OS Awareness", for example examination of OS specific tasks, threads etc.
* Support of distributes systems and multi-core
* Support of other AUTOSAR modules (e.g. RTE in CP or ARA in AP)
* Support of instrumentation-based tracing and measurement solutions
* Support of TIMEX

The data flow of the tools and the interfaces of ARTI are depicted in figure .

For some important definitions please read also chapter 1 of `RS_FoundationDebugTraceProfile`.

To implement the features, ARTI uses a similar approach that the former OSEK-ORTI had, but extends this to current requirements. The tools that generate AUTOSAR modules (e.g. OS, RTE, etc.) have to extend the ECU configuration with internal information about this module and emit the extended configuration as a separate file ("ARTI file"). The information therein shall allow to debug and trace the behavior of this module. Additional tools will collect all ARTI files of an ECU and allow selecting specific items to trace and create tracing hook files for a specific trace channel (e.g. internal buffer, hardware trace buffers, etc.). The build environment creates the final application, which then can be used in the ECU. Debugging and tracing tools can read in the ARTI files and are "AUTOSAR aware", giving additional debugging and tracing features to the developer. These tools can export a trace file, which in turn can be used in trace analy

## 模块依赖

ARTI depends on OS and RTE module, which refine the ARTI description and hooks for their purposes.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Run-Time Interface ("ARTI") for debugging and tracing AUTOSAR modules.

ARTI defines an interface between build tools and debugging/tracing tools. The debugging/tracing tools shall then forward tracing information to trace/timing analysis tools. The interface shall ease and speed up the debugging, tracing and verification of system behavior as well as round-trip engineering.

Debugging and tracing enables efficient development, integration, optimization and verification of ECU software. For analyzing several aspects - especially timing aspects - it becomes essential to link the debugging and tracing data to the scheduling of an ECU. Knowledge about Tasks, Interrupts and Runnable Entities, in other words: awareness of the operating system ("OS awareness"), is required.

A good interaction of the tool chain provides complete round-trip engineering from model down to hardware and back - covering several software levels and several phases of the V-model.

ARTI shall especially provide

* Support of "OS Awareness", for example examination of OS specific tasks, threads etc.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the ARTI module that are not included in the .

| Abbreviation/Acronym | Description |
|---|---|
| ORTI | "OSEK Run Time Interface", an OSEK specification (in its version 2.2) that defines how debuggers can access OSEK OS internal information. |

| Term | Description |
|---|---|
| Interrupt | See AUTOSAR glossary . |
| Runnable Entity | See AUTOSAR glossary . |
| Task | See AUTOSAR glossary . |
| Debugging | "Debugging" refers to halting a system, either as a whole or in parts, for the purpose of |

* inspecting the contents of the system in a frozen state
* single stepping, setting breakpoints, starting and stopping in C or Assembly code
| Tracing | "Tracing" refers to collecting run-time information over a certain period of time |
|---|---|

* either as a pure software solution, or with hardware assistance
* may include processor instruction trace, OS scheduling trace, and/or pure data trace
* including time-stamping for further timing analysis
| Timing Measurement | "Timing Measurement" refers to capturing of timing information |
|---|---|

* by instrumentation, e.g. via Pre-/PostTaskHooks or other hooks or callouts or
* by dedicated hardware support, e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

Not applicable yet.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

The ARTI concept expects to get an own ARTI module description from each module to be debugged, traced or profiled, e.g. OS and RTE. This allows mixing modules with ARTI support with those without ARTI support. However, as ARTI contains internal information, the implementers of the modules have to provide the ARTI file.

### 7. 限制
*原文标题：Limitations*

ARTI is supposed to work with debug information created by the compilers. This means each module that supports ARTI needs to be compiled with debug information, and the ARTI file has to use the symbol names created by the compiler.

ARTI introduces new hooks. In order to use them, they shall be incorporated into the module's C code. Either they are put therein statically, or they are put therein dynamically by a generator as configured.

Tracing internal events is very time critical. ARTI focuses on the solutions with the least impact on timing (in some cases with no timing overhead at all), but this depends on the hardware capabilities of the ECU and the tools. ARTI provides examples that describe the possibilities for tracing, depending on the available hardware and software capabilities (see Appendix B).

### 8. 对其他模块的依赖
*原文标题：Dependencies to other modules*

ARTI depends on OS and RTE module, which refine the ARTI description and hooks for their purposes.

### 9. 需求追踪
*原文标题：Requirements Tracing*

The following table references the requirements specified in `RS_ClassicPlatformDebugTraceProfile` and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| Classification of development errors |  |  |
| Reporting of production relevant error status |  |  |

### 10. 功能规范
*原文标题：Functional specification*

ARTI consists of these functional elements:

* ARTI module description
* ARTI hook implementations

The "ARTI Module Description" is intended to be emitted as an ARXML file. Additional files, such as the "project ARTI file" or "ARTI trace file" may be stored in another file format, whereas this format is beyond AUTOSAR and defined elsewhere.

ARTI is not a traditional software module that creates code and changes the system behavior. Instead ARTI is explicitly designed to not affect the overall system behavior. Especially the generation and export of the ARTI module description is intended to not influence the module that generates the ARTI export; ARTI should export information that is already internally available. The exported information will then be post-processed and used by further debugging and tracing tools. However, it might be necessary to introduce some special variables or functions to be able to generate requested information. While this causes some slight impact to the code, it is again the intention not to change the overall behavior of the module using ARTI.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. ARTI 模块描述
*原文标题：ARTI Module Description*

An "ARTI Module Description" is an ARXML file that contains detailed information about a specific module (e.g. OS, RTE, etc.). In particular, this is:

* Constants A Constant defines a constant value that is specific to this application or environment. E.g. the number of CPUs used in an ECU could be defined as a constant. Constants are used by a debugger to know about the configuration, or to display the value in a convenient way. Constants are referred to by an object information (see "Object Information" below). and are only meaningful in the context of an object. A Constant is represented by the container ArtiConstant (see chapter ).
* Expressions An Expression defines how a specific value can be accessed on the target by a debugger to display the current state of the application. Expressions are like C expressions but limited so that they can be evaluated statically. Hence, Expressions allow only accesses to global variables, and only unary, binary and ternary operators are allowed. Especially accesses to local variables and calls to functions are not allowed. See Appendix  for a full syntax specification of Expressions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. ARTI Hook Implementation

The ARTI hook implementations are generated by a tool that consumes the ARTI description files. They are mainly represented by these files:

* Arti.h This file contains the `ARTI_TRACE` macro implementation. The `ARTI_TRACE` macro implementation may expand to a module dependent macro.
* <Mip>_Arti.h This file contains all module dependent macros that are used in the modules supporting ARTI to instrument certain events. It may also contain the implementation of the macro, or may refer to an implementation in Arti.c. <Mip>_Arti.h shall include Arti.h in front of any module specific macro definitions.
* Arti.c This file contains the implementation of the API (see chapter ) and the actual implementation of each macro, if it is not empty or not implemented in the <Mip>_Arti.h file.

All events that are not active will be mapped to an empty macro definition. All events that are active will be expanded to the implementation of the instrumentation. The actual implementation depends on the hardware and software capabilities of the tracing tool. Thus, it depends on the used tracing tool, how the macros are implemented.

Example for the OS module:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. ARTI OS Implementation

ARTI support for OS is specified in  and . It is related to the application note described in .

### 14. ARTI RTE VFB Trace Client

The ARTI RTE VFB trace client is designed to adapt the VFB tracing mechanism to the ARTI trace. The VFB tracing mechanism provides hooks including parameters for tracing while ARTI trace focuses on minimal intrusive trace using the `ARTI_TRACE` macro.

The ARTI basic software module implements a trace client of the VFB tracing (see ).

It configures the RTE to generate the hooks for the trace client. These hooks will be mapped to the `ARTI_TRACE` macro with dedicated ARTI trace classes and events.

This mapping is defined in .

Restriction: ARTI supports only a subset of the RTE VFB trace client hooks. Thus the  "AUTOSAR shall support recording events from the standardized VFB tracing interface" is not completely fulfilled and specified. ARTI only supports:

* `Rte_Arti_Runnable_`<cts>_<reName>_Start
* `Rte_Arti_Runnable_`<cts>_<reName>_Return
* `Rte_Arti_`<api>Hook_<cts>_<ap>_Start
* `Rte_Arti_`<api>Hook_<cts>_<ap>_Return
* `SchM_Arti_Schedulable_`<bsnp>_[<vi>_<ai>_]<entityName>_Start
* `SchM_Arti_Schedulable_`<bsnp>_[<vi>_<ai>_]<entityName>_Return

### 15. RTE VFB Trace Client 配置
*原文标题：RTE VFB Trace Client Configuration*

The RTE VFB trace client configuration is done in several steps where RTE generator and ARTI module are interacting. Configuration parameters are exchanged in the EcuC.

# RTE configuration provides /AUTOSAR/EcucDefs/Rte/RteSwComponentInstance after RTE configuration
# ARTI creates an own VFB trace client called "Arti" and provides the configuration for the trace client using its own /AUTOSAR/EcucDefs/Rte/RteGeneration/RteVfbTraceClient. Within this container all the /AUTOSAR/EcucDefs/Rte/RteGeneration/RteVfbTraceClient/RteVfbTraceFunction (see `AUTOSAR_SWS_RTE` RteVfbTraceFunction) are listed for which the ARTI module requests the hooks to be generated. Here ARTI fills out the value and thus generates a 'wishlist' of tracing a certain hook function. Examples:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 17. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Arti
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Initialization of ARTI module failed | ARTI_E_INIT_FAILED | 0x01 |
| API parameter checking: invalid pointer | ARTI_E_PARAM_POINTER | 0x02 |

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

 Definition of imported datatypes of module Arti
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| There are no imported types. | < | < |

⌋

### 23. 类型定义
*原文标题：Type definitions*

ARTI does not add any type definitions.

### 24. Symbol 定义
*原文标题：Symbol definitions*

### 25. ARTI_STOPWATCH_FLAT, ARTI_STOPWATCH_NESTED

To support diverse profiling scenarios, the specification mandates a mechanism to distinguish between flat and nested measurement modes. This allows the user to explicitly define whether the timing analysis should account for the depth of calls (e.g., recursive algorithms) or treat the interval as a single continuous block.

 Definition of datatype `ARTI_STOPWATCH_FLAT`, `ARTI_STOPWATCH_NESTED`
⌈
| Name | ARTI_STOPWATCH_FLAT, ARTI_STOPWATCH_NESTED | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | ARTI_STOPWATCH_FLAT | 0x00u | The stopwatch ignores nesting. |
| ^ | ARTI_STOPWATCH_NESTED | 0x01u | The stopwatch considers nesting. |
| Description | This value defines how the start and stop event of a stopwatch is evaluated. The symbols ARTI_STOPWATCH_FLAT and ARTI_STOPWATCH_NESTED shall be defined as follows: |  |  |

# define `ARTI_STOPWATCH_FLAT` 0x00u
| # define ARTI_STOPWATCH_NESTED 0x01u | < | < |  |
|---|---|---|---|
| Available via | Arti.h | < | < |

⌋

### 26. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

### 27. Arti_Init

Definition of API function `Arti_Init`
  Upstream requirements:
⌈
| Service Name | Arti_Init | < |
|---|---|---|
| Syntax | void Arti_Init ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Service to initialize the ARTI module | < |
| Available via | Arti.h | < |

⌋

The implementation of `Arti_Init` shall be provided by the tool vendor, that implements ARTI hooks.

  Upstream requirements: ,
⌈
If the initialization fails, the function `Arti_Init` shall raise the error `ARTI_E_INIT_FAILED`.
⌋

See .

### 28. Scheduled functions

ARTI does not have any functions directly called by Basic Software Scheduler.

### 29. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 30. Common 目标 for ARTI Instrumentation
*原文标题：Common Objectives for ARTI Instrumentation*

The ARTI tracing and measurement interfaces are designed to ensure consistent, low-overhead system analysis:

* A primary objective across all ARTI interfaces is to establish a standardized mechanism for instrumentation. This ensures that trace data and timing metrics can be consistently interpreted by diverse external debugging, profiling, and timing analysis tools. By mandating a standardized format, ARTI eliminates the need for developers to rely on proprietary or ad-hoc recording methods.
* Multiple interfaces support user-defined instrumentation, allowing developers to manually insert standardized hooks to trace arbitrary time intervals, values, or specific logic paths.
* To ensure instrumentation does not degrade ECU timing or stability, ARTI hooks utilize a fixed format implemented via C-style macros. This design allows the trace points to be easily expanded by consuming tools or completely removed during normal operation, causing no intrusion or runtime overhead.

### 31. Mandatory 接口
*原文标题：Mandatory interfaces*

### 32. ARTI 追踪 Macro
*原文标题：ARTI Tracing Macro*

The implementation utilizes C-style macros rather than standard function calls. This approach allows trace points to be efficiently expanded or removed from the binary, a deviation from standard coding rules explicitly permitted for performance-critical sections.

 ARTI Tracing Macro Parameters
⌈
ARTI tracing macros shall accept a set of parameters that define the semantics of the macros.
⌋

The ARTI tracing macros are used by all modules with ARTI trace capabilities, therefore ARTI based instrumentation can easily be disabled on a global level.

 ARTI Tracing Macro Format (single event)
⌈
If the event to trace accepts one single event parameter, then ARTI shall use a single event parameter version.
⌋

`ARTI_TRACE`(_contextName, _className, _instanceName, instanceParameter, _eventName, eventParameter)

If there are more event parameters specified, then use the multiple event parameter version specified in chapter .

Note: While MISRA-C rules may advise to not to use function-like macros, the usage of a macro is intentionally specified here to improve runtime behavior. See also .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. ARTI 追踪 Macro with 多 Parameters
*原文标题：ARTI Tracing Macro with Multiple Parameters*

If an events accepts more than one parameter, all the specifications in chapter  apply, except the following items.

 ARTI Tracing Macro Format (multiple events)
⌈
If the event to trace accepts more than one parameters, then ARTI shall use the multiple event parameter version.
⌋

`ARTI_TRACE_N`(_contextName, _className, _instanceName, instanceParameter, _eventName, numEventParameters, ...)

The event parameters' meaning are described in the following.

* An integer value that defines how many parameters are given in the eventParameterList.
*[...(ellipsis)] A comma separated list of event parameters. The event parameters are specified in the ArtiHook configuration container by referencing to an appropriate BswModuleEntry (see chapter ).

The macro layout allows a macro definition to concatenate the macro parameters to more specific and efficient macros. Here is a possible implementation of the generic `ARTI_TRACE_N` macro:

Examples using the above macro expansion:

### 34. Optional 接口
*原文标题：Optional interfaces*

This section defines all interfaces, which are required to fulfill an optional functionality of the module.

### 35. ARTI Generic Stopwatch

The Generic Stopwatch supports the tracing of arbitrary time intervals defined by distinct Start and Stop events. Developers can manually insert these standardized hooks around specific algorithms to measure their execution duration precisely.

 Define `USER_STOPWATCH`
⌈
ARTI shall define a trace class for tracing of arbitrary intervals between a start and a stop event called `USER_STOPWATCH`.
⌋

A stopwatch can be used to time between two user defined points in an application. The user can put the corresponding `ARTI_TRACE` macro calls of the class `USER_STOPWATCH` anywhere in the code. An arbitrary number of stopwatches are supported by using different instance names (_instanceName). Please note that the trace tool provider might put limits on the number of active stopwatches.

The generic stopwatch provides a flat tracing (ignoring recurrent start/stop events and the task context) and a nested tracing (considering nested start/stop events and the task context).

Nested Stopwatch:

A trace tool tracing a stopwatch shall consider nesting, if the instanceParameter is set to `ARTI_STOPWATCH_NESTED`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. ARTI Generic Dataflow Stopwatch

The Generic Dataflow Stopwatch analyzes the dataflow and temporal validity of variables within the system. It fulfills the need to trace arbitrary intervals defined by a single Start event (a data write) and multiple subsequent Stop events (data reads) to calculate critical metrics like minimum and maximum data age.

 Define `USER_DATAFLOW_STOPWATCH`
⌈
ARTI shall define a trace class for tracing of arbitrary intervals between a start and several stop events, with the aim to provide insides to a dataflow, called `USER_DATAFLOW_STOPWATCH`.
⌋

A dataflow stopwatch can be used to time between write and read accesses to a given variable. The user can put the corresponding `ARTI_TRACE` macro calls of the class `USER_DATAFLOW_STOPWATCH` anywhere in the code. An arbitrary number of dataflow stopwatches are supported by using different instance names (_instanceName). Please note that the trace tool provider might put limits on the number of active dataflow stopwatches.

The trace tool shall at least consider the time between the last Write event, the first Read and the last Read event in a given sequence and doesn't need to consider nested Write and Read events. E.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. ARTI Generic Datapoint

The Generic Datapoint interface traces arbitrary values at specific, user-selected points within the application code, to capture the instantaneous state of variables or logic paths during runtime.

 Define `USER_DATAPOINT`
⌈
ARTI shall define a trace class for tracing of arbitrary values, called `USER_DATAPOINT`.
⌋

A datapoint provides the possibility to record different values at user defined locations in the code. The user can put the corresponding `ARTI_TRACE` macro calls of the class `USER_DATAPOINT` anywhere in the code. An arbitrary number of data points are supported by using different instance names (_instanceName). Please note that the trace tool provider might put limits on the number of active data points. There are predefined event names (_eventName) for different data types as defined by AUTOSAR (see `AUTOSAR_SWS_PlatformTypes`, e.g. UINT32) this information might be used by the trace tool for optimized storage and visualization.

 Macro `USER_DATAPOINT`
⌈
ARTI macros of the class `USER_DATAPOINT` shall compile the following template:
⌋

`ARTI_TRACE`(_contextName, _className, _instanceName, instanceParameter, _eventName, eventParameter);

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. ARTI Category 1 Interrupts

This interface records and traces hardware-level interrupts that operate outside the management of the operating system. By defining specific trace classes, it enables the accurate measurement of execution times and state transitions for high-priority interrupt routines.

 Define `AR_CP_ARTI_CAT1ISR`
⌈
ARTI shall define a trace class for tracing of category 1 interrupts, called `AR_CP_ARTI_CAT1ISR`.
⌋

ARTI needs to trace all states of category 1 interrupts and all its state transitions. For some timing parameters (e.g. the interrupt pending time), the simple interrupt start/stop is not enough. Tools evaluating the timings need to reconstruct a more complex state diagram by calculating the transitions from history. To be compatible to standard software, `AR_CP_ARTI_CAT1ISR` refers to this state model, knowing that tools need to postprocess the event flow to get all relevant information. However, if an OS implementation can provide a more detailed state diagram, ARTI allows to define more events that won't need postprocessing and allow earlier synchronization of the trace if it is truncated (limited trace buffers). This state diagram is then handled with the class `AR_CP_ARTIEXT_CAT1ISR`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. ARTI RTE VFB Trace Client

This client establishes a standardized VFB tracing interface within the Run-Time Environment. It maps high-level RTE hooks, such as the start and return of Executable Entities, and RTE API calls, directly to `ARTI_TRACE` macros. To comply with compile-time configurability, unused or disabled VFB hooks are mapped to empty statements (`AR_CP_VOID`).

 Generate RTE VFB Trace Client
⌈
The ARTI module shall generate an RTE VFB trace client that implements the Runnable Entity Trace Events  and BSW Schedulable Entities Trace Events .
⌋

 Define `AR_CP_RTE_RUNNABLE`
⌈
The Runnable Entity Trace Events shall be mapped to the ARTI Trace Class `AR_CP_RTE_RUNNABLE`.
⌋

 Define `AR_CP_RTE_API`
⌈
The RTE API Trace Events shall be mapped to the ARTI Trace Class `AR_CP_RTE_API`.
⌋

 Define `AR_CP_SCHM_SCHEDULABLE`
⌈
The BSW Schedulable Entity Trace Events shall be mapped to the ARTI Trace Class `AR_CP_SCHM_SCHEDULABLE`.
⌋

* `AR_CP_RTE_RUNNABLE`

  * `Rte_Arti_Runnable_`<cts>_<reName>_Start
  * `Rte_Arti_Runnable_`<cts>_<reName>_Return
* `AR_CP_RTE_API`

  * `Rte_Arti_`<api>Hook_<cts>_<ap>_Start
  * `Rte_Arti_`<api>Hook_<cts>_<ap>_Return
  * `Rte_Arti_`<api>Hook_<cts>_<ap>_Terminate
* `AR_CP_SCHM_SCHEDULABLE`

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Trace Class - AR_CP_RTE_RUNNABLE

Macro `AR_CP_RTE_RUNNABLE`
⌈
ARTI macros of the class `AR_CP_RTE_RUNNABLE` shall compile the following template:
⌋

* Invocation

  #define `Rte_Arti_Runnable_`<cts>_<reName>_Start( \
      ) \
      `ARTI_TRACE`(_contextName, \
                 `AR_CP_RTE_RUNNABLE`, \
                 shortNameOf(<cts>), \
| 0, \ |
|---|

                 `RteRunnable_Start`, idOf(<reName>))
* Termination

  #define `Rte_Arti_Runnable_`<cts>_<reName>_Return( \
      ) \
      `ARTI_TRACE`(_contextName, \
                 `AR_CP_RTE_RUNNABLE`, \
                 shortNameOf(<cts>), \
| 0, \ |
|---|

                 `RteRunnable_Return`, idOf(<reName>))

*[<cts>] Specifies the component type that is emitted by the RTE. For each component type the mapping is created.
*[<reName>] is the name of the Runnable Entity. For each name the mapping is created.
* is a hint of the ARTI module the extract use the short name of the element in question.
* is a function of the ARTI module to create an 32-bit ID out of an element. This mapping will also be stored in a type map within ArtiValues and will be referenced by the hook descriptions.
*[[] ] are optional parameters issued by the RTE.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Trace Class - AR_CP_SCHM_SCHEDULABLE

Macro `AR_CP_SCHM_SCHEDULABLE`
⌈
ARTI macros of the class `AR_CP_SCHM_SCHEDULABLE` shall compile the following template:
⌋

* Invocation

  #define `SchM_Arti_Schedulable_`<bsnp>_[<vi>_<ai>_]<entityName>_Start() \
      `ARTI_TRACE`(_contextName, \
                 `AR_CP_SCHM_SCHEDULABLE`, \
                 <bsnp>, \
| idOf([<vi>_<ai>]) | 0, \ |
|---|---|

                 `SchMSchedulable_Start`, \
                 idOf(<entityName>))
* Termination

  #define `SchM_Arti_Schedulable_`<bsnp>_[<vi>_<ai>_]<entityName>_Return() \
      `ARTI_TRACE`(_contextName, \
                 `AR_CP_SCHM_SCHEDULABLE`, \
                 <bsnp>, \
| idOf([<vi>_<ai>]) | 0, \ |
|---|---|

                 `SchMSchedulable_Return`, \
                 idOf(<entityName>))

As defined in the RTE specification:

*[<bsnp>] specifies the Basic Software Name Prefix
*[<vi>] is the Vendor ID of the basic software module
*[<ai>] is the Vendor API infix of the basic software module
*[<entityName>] is the name of the BSW Schedulable Entity or Callable Entity

* is a function of the ARTI module to create an 32-bit ID out of an element.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Trace Class - AR_CP_RTE_API

Macro `AR_CP_RTE_API`
⌈
ARTI macros of the class `AR_CP_RTE_API` shall compile the following template:
⌋

* Start

  #define `Rte_Arti_`<api>Hook_<cts>_<ap>_Start( \
      , param...) \
      `ARTI_TRACE_N`(USER, \
                   `AR_CP_RTE_API`, \
                   shortNameOf(<cts>), \
| <instance_ptr | 0>, \ |
|---|---|

                   <api>_Start, \
                   numberOf(param...) + 1, \
                   idOf(<ap>), \
                   <param...>)
* Return

  #define `Rte_Arti_`<api>Hook_<cts>_<ap>_Return( \
      , param...) \
      `ARTI_TRACE_N`(USER, \
                   `AR_CP_RTE_API`, \
                   shortNameOf(<cts>), \
| <instance_ptr | 0>, \ |
|---|---|

                   <api>_Return, \
                   numberOf(param...) + 1, \
                   idOf(<ap>), \
                   <param...>)
* Terminate

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Trace Class - AR_CP_VOID

Macro `AR_CP_VOID`
⌈
ARTI shall provide a macro of the class `AR_CP_VOID` that compiles to nothing.
⌋

`AR_CP_VOID` is used to map VFB tracing hooks that are not used by ARTI. Expanding `ARTI_TRACE` with trace class `AR_CP_VOID` should result in empty statement that results in no code at all.

| Parameter | Type | Description |
|---|---|---|
| _contextName | Token, literal text | see  this should be USER for AR_CP_VOID. |
| _className | Token, literal text | AR_CP_VOID |
| _instanceName | Token, literal text | Not used, set to "" |
| instanceParameter | uint32 | Not used, should be set to 0 |
| _eventName | Token, literal text | Not used, set to "" |
| eventParameter | uint32 | Not used, should be set to 0 |

### 44. ARTI BSW 模块接口
*原文标题：ARTI BSW Module Interface*

This interface provides a standardized mechanism for recording and tracing the entry and exit events of Basic Software modules. By defining a specific trace class, it correlates BSW execution time with application behavior, contributing to a fully standardized tracing interface.

 Define `AR_CP_BSW_API`
⌈
ARTI shall define a trace class for tracing entries and exits of BSW modules, called `AR_CP_BSW_API`.
⌋

To allow tracing of BSW modules, the entry and exit points of BSW modules should be populated with `ARTI_TRACE` macros.

 Macro `AR_CP_BSW_API`
⌈
ARTI macros of the class `AR_CP_BSW_API` shall compile the following template:
⌋

`ARTI_TRACE_N`(_contextName, \
             `AR_CP_BSW_API`, \
             <moduleImplementationPrefix>, \
             0, \
| Bsw_<Start | Return>, \ |
|---|---|

             numberOf(param...) + 1, \
             idOf(<service>), \
             <param...>)

*[<moduleImplementationPrefix>] represents a module, formed as specified in  .
* specifies the number of parameters following in the parantheses. This number can be determined by the referenced BswModuleEntry.arguments.
* represents the service ID as specified in the function definition of the BSW module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 57 章（内容从略，见纯文本全文）

45. Callout 接口
46. Configurable 接口
47. 服务接口
48. 时序图
49. 配置规范
50. How to read this chapter
51. ARTI Parameters
52. ARTI Generic Container
53. ArtiGenericComponentClass
54. ArtiGenericComponentInstance
55. ARTI Hardware Container
56. ARTI Os Container
57. ARTI Rte Container
58. ArtiRteRunnableClass
59. ArtiRteRunnableInstance
60. ArtiRteSchedulableClass
61. ArtiRteSchedulableInstance
62. ArtiRteVfbTraceHooks
63. ARTI Values Container
64. ArtiConstant
65. ArtiExpression
66. ArtiHook
67. ArtiObjectClassParameter
68. ArtiObjectInstanceParameter
69. ArtiParameterTypeMap
70. ArtiStates
71. 发布信息
72. 附录
73. 不适用需求
74. 示例
75. ARTI Instrumentation
76. ARTI Tool Binding (Arti.h)
77. ARTI OS Instrumentation
78. ARTI User 代码
79. ARXML Representation of Instrumentation
80. Expression Syntax
81. Change history of AUTOSAR traceable items
82. Traceable item history of this document according to AUTOSAR Release R22-11
83. Added 规范 Items in R22-11
84. Changed 规范 Items in R22-11
85. Deleted 规范 Items in R22-11
86. Traceable item history of this document according to AUTOSAR Release R23-11
87. Added 规范 Items in R23-11
88. Changed 规范 Items in R23-11
89. Deleted 规范 Items in R23-11
90. Traceable item history of this document according to AUTOSAR Release R24-11
91. Added 规范 Items in R24-11
92. Changed 规范 Items in R24-11
93. Deleted 规范 Items in R24-11
94. Traceable item history of this document according to AUTOSAR Release R25-11
95. Added 规范 Items in R25-11
96. Changed 规范 Items in R25-11
97. Deleted 规范 Items in R25-11
98. Traceable item history of this document according to AUTOSAR Release R26-11
99. Added 规范 Items in R26-11
100. Changed 规范 Items in R26-11
101. Deleted 规范 Items in R26-11
