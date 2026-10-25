# Explanatory Document for Usage of AUTOSAR Run-Time Interface (`ARTI`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 896 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_ARTI_896\AUTOSAR_CP_EXP_ARTI.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_ARTI_896\AUTOSAR_CP_EXP_ARTI.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_ARTI_896\zzgen\CP_EXP_ARTI.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. Who should read this document?

This EXPlanatory document is intended to describe the steps which are necessary for OS Vendors, RTE Vendors, Debugger Vendors and Timing Tool Vendors to implement the necessary parts to support the ARTI Software Specification.

### 3. 目标
*原文标题：Objectives*

ARTI is a set of standards for debugging and tracing the run-time behavior of embedded systems. Its origin is in the automotive sector, specifically as a concept document developed for the AUTOSAR development partnership, but its scope is not limited to purely automotive systems.

ARTI aims to make it possible for tools from multiple different vendors to collect and exchange runtime data from embedded systems in a standardized way, and hence promote competition and innovation.

ARTI describes interfaces needed to support Static Debugging and Dynamic Tracing.

* typically involves having an in-circuit debugger connected to the embedded system. Whenever the debugger halts the execution of the system, you can inspect the system's state (registers, stack and data). Decoding the meaning of the state is not necessarily straightforward in any medium or large scale system. ARTI allows the software be described in terms of its architectural concepts and components, so that the debugger can display a much more meaningful representation of the system state. One example is that the debugger could show a list of the OS tasks in the system along with their state, priority and execution time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Summary of use-cases

The following two use-cases should provide an idea of what is expected by the ARTI to enable AUTOSAR aware debugging.

* A typical use-case is the debugging and stepping through the code execution during integration phase of an ECU. For the analysis of a failure in application software code it is always helpful to understand the OS context, meaning in which task has the error occurred.
* Continuous testing of real-time software timing on a single ECU is not consistently integrated into standard development workflows. In most cases, resource consumption is only measured statically, for example, memory usage. However, certain tests, especially those involving stimulation of the software through interactions with the vehicle environment, may sporadically fail without any obvious cause. If shifts in OS task scheduling or missed timing deadlines are not taken into account, the root cause of such failures often remains undetected. Therefore, tracing the dynamic run-time behavior of the software architecture becomes a crucial use case for the ARTI.

### 5. 定义 of acronyms and abbreviations
*原文标题：Definition of acronyms and abbreviations*

### 6. 缩略语
*原文标题：Acronyms and abbreviations*

The table below contains all acronyms, abbreviations or initialisms that are component-specific and not available in the AUTOSAR glossary .

| Abbreviation | Description |
|---|---|
| CAT1 | Category 1 Interrupt |
| CAT2 | Category 2 Interrupt |
| CPU | Central Processing Unit |
| MDF | ASAM Measurement Data Format |
| OLDA | Online Data Acquisition |
| ORTI | OSEK Run-Time Interface |
| TDF | ASAM Trace Data Format |

The table below contains all document-independant acronyms or abbreviations that are defined in the AUTOSAR glossary .

| Acronym/ Abbreviation | Description |
|---|---|
| ARTI | AUTOSAR Run-Time Interface |
| ARXML | AUTOSAR XML |
| ASAM | Association for Standardization of Automation and Measuring Systems |
| AUTOSAR | AUTomotive Open System Architecture |
| BSW | Basic Software |
| BSWMD | Basic Software Module Description |
| CAN | Controller Area Network |
| ECU | Electronic Control Unit |
| ID | IDentifier |
| ISR | Interrupt Service Routine |
| OS | Operating System |
| OSEK | Open Systems and their interfaces for Automotive Electronics |
| RTE | Run-Time Environment, provides the infrastructure services that enable communication to occur between AUTOSAR SWCs as well as acting as the means by which AUTOSAR SWCs access basic software modules including the OS and co |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 定义 of terms
*原文标题：Definition of terms*

The table below contains all definitions of terms that are used in this document.

| Terms | Description |
|---|---|
| Load | The load is the total share of time that a resource is used. |
| Runnable Entity | See AUTOSAR glossary . |
| Schedulable Entity | See AUTOSAR glossary . |
| Tracing | See AUTOSAR glossary . |
| Hook | See AUTOSAR glossary . |
| Debugging | See AUTOSAR glossary . |

### 8. 相关文档
*原文标题：Related documentation*

### 9. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 10. 相关规范
*原文标题：Related specification*

This document addresses the specification defined in . The ARTI specification focuses primarily on scheduling and run-time analysis, which has a direct impact on both  and .

An example implementation of ARTI is provided by the Timing Reference Platform, described in Appendix A of .

### 11. Run-Time 接口
*原文标题：Run-Time Interface*

Capturing the software architecture's dynamic run-time behavior is not easy. The effort to be spend to evaluate basic performance characteristics like CPU Load can be tremendously high, depending on the project. There are usually many parts in the tool chain involved which need to work together seamlessly in order to produce accurate and meaningful results.

In order to explain how the ARTI is trying to overcome those generally described problems it is necessary to have a look at the techniques which need to be used to get to the intended result.

### 12. Trace Techniques

For tools to capture the software's behavior at run-time, there are many ways to do so. Each one of them has its advantages and disadvantages. But basically to capture for a longer period the software's dynamic aspects, resources are necessary. Either ECU resources such as processing time or silicon resources such as trace interface and processor pins or even bus resources. The following sub chapters should provide a brief insight into the different trace techniques and therefore an understanding, why ARTI is approached in the way it is introduced later on.

### 13. Hardware 追踪
*原文标题：Hardware Tracing*

In Hardware Tracing the main challenge is to lift the information from hardware to system level. Meaning to interpret assembly and low level instructions as execution of an OS task or any other configuration and software architecture relevant artifacts. There are generally speaking two ways of tracing techniques with some minor silicon vendor and implementation specific differences. Program Flow Tracing (Instruction Trace) and Data Tracing.

* With this approach assembly instructions such as jump, branch or other (vendor dependent) set of instructions create an trace event which is multiplexed and stored on the on-chip buffer or directly streamed off the target. This technique provides a fine granular insight in the code executed on the target. This comes of course at the cost of high bandwidth interfaces or limited measurement time in the on chip case. Important for the ARTI approach is to know: with instruction trace the OS internal state variables can not be seen to the trace unit and therefore the states of OS tasks and ISRs can not be derived.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 软件追踪
*原文标题：Software Tracing*

Hardware Tracing requires that the microcontroller is equipped with an on-chip trace unit/logic. With software based tracing the events can be captured and stored on target in the on-chip memory. Usually in CPU idle, the data can be send off the ECU via the connected bus interfaces, like CAN or Ethernet. The approach is therefore quite similar to Data Tracing with instrumentation with the difference, that the interface to send the information off the chip is most probably a bus instead of a debug interface.

### 15. Static Debugging

One very important use-case for ECU development and integration is the debugging of the embedded software. For users to debug the software, information about the current running OS task or ISR can be pretty helpful. Therefore, the ARTI file provides information to the debugger about the relevant OS internal state variables.

### 16. OS Awareness

One already successful attempt to standardize the access for tracing tools to the OS internals for the OSEK platform is represented by the ORTI standard. Information about the OS task stack, current running OS task, current running ISR and the knowledge to decode the OS task state from the OS internals was stored in an .ORTI file. For AUTOSAR and especially multi-core projects the standard is not fitting anymore. With the merge from single-core OS to multi-core OS the tracking of OS task and ISR states became more complex. Expressions, Pointer handling and so on are difficult to trace during the code execution. Additionally the ORTI standard is not aware about RTE features. But most importantly: Software based tracing is not standardized within ORTI.

The objective of ARTI is to extend this OS awareness and make the debug, trace and other run-time tools aware of additional AUTOSAR modules such as RTE and SchM.

### 17. ARTI at a glance

The general idea of ARTI is more than to achieve simple "OS Awareness" for debuggers. Starting from a common understanding about scheduling state machines, with a common exchange format for debug and trace configuration. Additionally, exchanging run-time measurements up to their interpretation affects the standards  and . One of the ARTI goals is to achieve a standard to configure, gather and process as well as to evaluate vendor independent AUTOSAR projects run-time behavior. To achieve this workflow and standardization aims, also a trace exchange format has to be standardized as well as common timing parameters. The Timing Parameters and the trace format are covered by the  and  standards.

The following list describes the necessary steps to be taken for an ARTI workflow and their artifact files.

# ECU Configuration (ARXML) - AUTOSAR The ARTI ECU Configuration Parameters containers fulfill rather two purposes. For once they store the Trace/Debug Configuration of the AUTOSAR project. Aside of that, the gathering of all ARTI containers replaces the information provided by an ORTI file.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. OS

To achieve a vendor-independent interpretation of the run-time behavior of an AUTOSAR ECU, ARTI defines state machines. The transitions between these states indicate the OS scheduling at run-time. In other words, the state transitions can be understood as the implementation of the OS hooks. Each time an OS task is preempted by another task, for example, the ARTI hook macro indicates a OS task state transition. This has two advantages: software-based tracing can be used as well as Hardware Tracing, and the result is the same.

### 19. 状态建模
*原文标题：State Model*

The OS State Model, described in , is supported by ARTI. However, for a proper view with a timing tool, additional state information is necessary. Since there is no distinction between preempted, released, and activated OS task states in the standard model, an enhanced state machine is introduced. Depending on the features provided by the OS vendor, either the standard OS model can be used or the enhanced one for more detailed analysis. To distinguish between both state diagrams, the hook macro, and therefore the available state transitions, shall use a different state machine description (Class Name). The ARTI Class Name `AR_CP_OS_TASK` (see Figure ) is to be used for the standard OS task states, and `AR_CP_OSARTI_TASK` (see Figure ) for the enhanced state machine.

### 20. Hooks

The ARTI hook macros are intended to indicate the state transitions of a Schedulable Entity. By design, they are implemented to be macros rather than functions to minimize the computational overhead. The ARTI hook can be disabled in the affected BSW module. For example, all OS ARTI macros are enabled using the `OS_USE_ARTI` macro, which corresponds to the OS configuration parameter OsUseArti as defined in  (see Listing ).

The ARTI macro layout is intentionally generic, allowing users to define their own macros as needed. The values of all listed parameters are literal names, which can be used by the C preprocessor to create new macros or function calls by concatenating these values (see Listing  for an example). For all standardized scheduling state machines:

* Maps the macro to the corresponding state machine.
* Describes the state transition.
* Indicates the interrupt status during macro execution. Three modes are possible:

  * The hook implementer cannot disable interrupts and must provide appropriate post-processing in case of an interruption.
  * The macro is executed in a context where interrupts are locked.
  * The hook macro itself can disable interrupts.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. ECUC

The following section focuses on the EcuC representation of ARTI for the OS tracing use case. To configure and store the ARTI configuration for hook-based tracing, the following EcuC containers are necessary: ArtiValues and ArtiOs. The ArtiValues container stores the ID mapping for tasks and ISRs, as well as all available OS hook macros (see Figure ). The ArtiOs container stores all configured OS Tasks and references all enabled hook macros in the ArtiOsInstance EcucParamConf container (see Figure ).

Examples for this use case are available for the Arti EcucParamConfContainer in Listing  and for the ArtiOs EcucParamConfContainer in Listing .

### 22. RTE

ARTI uses the VFB Tracing Hooks as an own trace client. A detailed description on how to configure an ARTI compliant RTE specification is available in .

The RTE VFB trace client configuration is done in several steps in which the RTE generator and ARTI module are interacting. Configuration parameters are exchanged in the EcuC.

### 23. ECU 配置
*原文标题：ECU Configuration*

ARTI creates a VFB trace client called Arti and provides the configuration for the trace client using RTE's ECU Configuration Container RteVfbTraceClient. Within this container, a wish list of hook functions to be traced is generated using the EcuC Parameter RteVfbTraceFunction. Thereby, the following use cases can be distinguished:

* to enable trace of all BswSchedulableEntity hooks, RteVfbTraceFunction contains `Rte_Arti_SchM`
* to enable trace of all RunnableEntity hooks, RteVfbTraceFunction contains `Rte_Arti_Runnable`
* to enable trace of all RunnableEntity hooks of a specific component, RteVfbTraceFunction contains `Rte_Arti_Runnable_MyComponentType`, where MyComponentType is referring to a RteSwComponentType EcuC Container.
* to enable trace hooks of a specific RunnableEntity within a specific component, RteVfbTraceFunction contains `Rte_Arti_Runnable_MyComponentType_MyRunnable`, where MyComponentType is referring to a RteSwComponentType EcuC Container and MyRunnable to a RunnableEntity in the SWComponentTemplate.

### 24. BSW 模块描述模板
*原文标题：BSW Module Description Template*

Based on the configuration, the RTE generator creates the BswModuleEntrys containing the trace hooks. The functionPrototypeEmitter entry Arti identifies them as ARTI hooks. ARTI generates, then, the final trace client based on the BswModuleEntry's for the ARTI trace client. This results in the following changes:

* expansion of the BswInternalBehavior by a BswCalledEntity for each hook and assigning a common memory section to its code object via the referenced SwAddrMethod
* set of the correct implementation policy (MACRO, INLINE, or STANDARD) for the BswModuleEntry of each hook.
* addition of the header file with the function declarations of the hooks as a required artifact to the BswImplementation
* specification of the ResourceConsumption in the BswImplementation by adding a MemorySection that contains references to all BswCalledEntitys of the hooks as well as a prefix for the memory section's namespace in the code via SectionNamePrefix.

 started off with the ECU Configuration to enable the trace hook generation of all Runnable Entities the software component instance ConsumerComponent.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Hooks

As already mentioned above, ARTI also generates the header file containing definitions for VFB Tracing. These functions are, then, used for mapping the VFB trace hooks to the `ARTI_TRACE` macro. A possible implementation of the `ARTI_TRACE` macro will be discussed in detail later in Section .

 and continued in Example  is picked up. The following listing shows the header file containing the generated function definitions of the start and return hooks Rte_Arti_Runnable_ConsumerComponent_RE2_Start and Rte_Arti_Runnable_ConsumerComponent_RE2_Return, respectively for the Runnable Entity RE2 of the software component instance CustomerComponent.

  All that is left now it to use the ARTI macro within the generated VFB Tracing Hooks. An example of this is shown in Listing , where the start and return hooks of the Runnable Entity, which is assigned the ID 1, are implemented.

]

### 26. Comparison between ARTI and ORTI

ARTI can be imagined as a successor of ORTI. ARTI may contain all information of an ORTI file. The file format has been changed from the OSEK-based syntax of ORTI to the model-driven ARXML syntax in ARTI. Additionally, ARTI covers new elements such as event-based tracing with hooks and multi-core aspects.

### 27. 映射 from ORTI to ARTI
*原文标题：Mapping from ORTI to ARTI*

All the elements in an ORTI file can be mapped to ARTI. The objects in the implementation section of ORTI are mapped to the ARXML sub-containers named *Class (ARTI classes). The objects in the information section are mapped to ARXML sub-containers named *Instance (ARTI instances). ARTI classes are only needed if enumerations or mappings are declared. Thus, not all ORTI objects have related ARTI classes.  shows the mapping of the defined ORTI objects and its attributes to the ARTI elements.

| ORTI-attribute | < | < |
|---|---|---|
| * | Class: | ARTI-class |
| * | Instance: | ARTI-instance |
| OS.RUNNINGTASK | < | < |
| * | Class: | ArtiHardwareCoreClass.ArtiHardwareCoreClassCurrentTaskRef |
| * | Instance: | ArtiHardwareCoreInstance.ArtiHardwareCoreInstanceCurrentTaskRef |
| OS.RUNNINGTASKPRIORITY | < | < |
| * | Class: | ArtiHardwareCoreClass.ArtiHardwareCoreClassRunningTaskPriorityRef |
| * | Instance: | ArtiHardwareCoreInstance.ArtiHardwareCoreInstanceRunningTaskPriorityRef |
| OS.RUNNINGISR2 | < | < |
| * | Class: | ArtiHardwareCoreClass.ArtiHardwareCoreClassCurrentIsrRef |
| * | Instance: | ArtiHardwareCoreInstance.ArtiHardwareCoreInstanceCurrentIsrRef |
| OS.SERVICETRACE | < | < |
| * | Class: | ArtiOsClass.ArtiOsClassServiceTraceRef |
| * | Instance: | A |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 映射 Vendor Specific Objects and Attributes
*原文标题：Mapping Vendor Specific Objects and Attributes*

Vendor-specific objects are mapped to ArtiGenericComponentClass and ArtiGenericComponentInstance. These classes and instances are placed in the ARTI sub-container ArtiGeneric. Currently, there is only one exception namely that of modeled interrupts. In ARTI there is already an ArtiOsIsrClass and ArtiOsIsrInstance defined. So, vendor-specific objects in ORTI that are describing interrupts, are mapped to ArtiOsIsr*.

In contrast to ORTI, vendor-specific attributes cannot just be added to the related elements in ARTI. In ARTI, additional steps are necessary. At first, ArtiGenericComponents needs to be defined. These components contain all the vendor-specific attributes. Finally, these additional components have to be referred by the related ARTI instance and ARTI class. So, in case a vendor-specific enum attribute like vs_Enum_Task_Type has to be added to the ArtiOsTask*-object, then

* an ArtiGenericComponentClass has to be created. This class has to contain the parameter definition EnumTaskType as ArtiParameterTypeMap.
* an ArtiGenericComponentIntance referring the created ArtiGenericComponentClass has to be created. The instance fills the parameter EnumTaskType.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 示例 Configurations
*原文标题：Example Configurations*

The following two examples are intended to provide an example ARTI EcuC configuration for two use-cases.

### 30. Static Debugging

The ARTI ECU Configuration Parameter Container are intended to be configurable in such way that not all container parameters are necessary to be configured. The following listings show a minimal example how the three containers can be configured.

### 31. ARTI ECUConfiguration Parameters Container Arti

The ArtiValues container stores the available Os variables or expressions to track the OS task states.

### 32. ARTI ECUConfiguration Parameters Container ArtiHardware

The ArtiHardware container is necessary to describe all available cores for debugging. Additionally each core can reference the core depended CurrentRunningTask variable.

### 33. ARTI ECUConfiguration Parameters Container ArtiOs

The ArtiOs container in this simple example is just necessary to describe which OS task should be tracked for OS debugging in this example and references the task in the Os container. This is basically a duplication of information, but used to substitute the ORTI file.

### 34. OS Task 追踪
*原文标题：OS Task Tracing*

### 35. ARTI ECUConfiguration Parameters Container Arti

The Arti container stores the TypeMaps for TaskId and CoreId, as well as the available OS Hooks and their layout.

### 36. ARTI ECUConfiguration Parameters Container ArtiOs

The ArtiOs container in this simple example is just necessary to describe which OS task should be tracked for OS tracing in this example and references the task in the Os container. This is basically a duplication of information, but used to substitute the ORTI file.

### 37. 示例 Implementations
*原文标题：Example Implementations*

This chapter contains sample implementations of ARTI hook macros for typical scheduling tracing techniques or use-cases.

The ARTI hook macros provide the possibility to add tracing instrumentation to the AUTOSAR project with preserving freedom of implementation for tracing tool vendors. In addition to that the ARTI proposes also an standardized implementation for tracing tool vendors and users to lean on.

### 38. 示例 Hook Implementation for Hardware 追踪
*原文标题：Example Hook Implementation for Hardware Tracing*

The following ARTI hook implementation focuses on the Hardware Tracing use-case. Generally, this implementation example is designed to overcome certain obstacles for hardware trace users:

# Microcontroller specific limitation on traceable amount of cores
# Minimize runtime impact on the AUTOSAR project
# Minimize impact on the hardware trace interface
# Ease Hardware Tracing setup
# Freedom from Interference

The data trace instrumentation is therefore an microcontroller atomic variable in order to guarantee minimum overhead while writing to it without any data stability mechanism being necessary. Each write access to it signalizes a state transition in one of the scheduling objects. It captures therefore the CoreId, scheduling entity Id and the state transition. While the ARTI trace macro ensures the injection at the correct places into the BSW without adding additional runtime overhead. In order to guarantee Freedom from Interference to the AUTOSAR project it is recommended to link the ARTI trace variables to a global accessible memory which is intended for measurement techniques such as the Infineon AURIX TriCore OLDA memory or instrumentation data trace memory.

### 39. Common ARTI Header 文件
*原文标题：Common ARTI Header File*

The following two examples do use a common ARTI header file, in which the top-level `ARTI_TRACE`( ) macro is defined and expanded to module / class specific macros.

Listing  shows the code of the common ARTI header file.

### 40. OS Instrumentation

The ARTI hook macros can be enabled or disabled by the global parameter `OS_USE_ARTI`. This allows to switch off the OS feature also after code generation without any remaining impact on the AUTOSAR project.

The arti_os_trace variable layout encodes the ThreadId, which is the umbrella term in this case for OS tasks and CAT2 ISRs, the microcontroller CoreId, as well as the ARTI state transition to which the scheduling entity transits to. With that approach the same tracing variable can be used for task and ISR scheduling trace events. To ensure that the variable is in use, a validation bit is added. This helps to detect whether memory initialization accesses to the trace variable have triggered trace messages, to be determined as no valid state transition at startup measurements.

To identify the trace event and the respective hook called in the OS, the state transition enumerations for the trace variable are proposed to be kept in the following manor:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. RTE Instrumentation

As mentioned above in Chapter , ARTI uses the VFB Tracing Hooks as an own trace client. Listing  shows an example ARTI header file to be included or implemented by the RTE. It lists a subset of all necessary and available hooks to illustrate the instrumentation concept.

The arti_rte_trace variable (line 16) layout encodes the IDs of the Runnable Entity as well as of the affected processing core. As depicted in line 18 - 28, the lower Byte can be used for the CoreId and the higher Bytes for the identification of the Runnable Entity.

The actual implementation C-File in Listing  is only instantiating the data trace variable (line 8). The variable must be volatile to ensure that it is not going to be removed during compiler optimization since there is no consumer actually reading it. Additionally, the compiler pragma locating the variable at the project dependent trace memory shall illustrate this step to be considered for the project's linking phase.

### 42. 示例 for User Provided Category 1 Interrupt
*原文标题：Example for User Provided Category 1 Interrupt*

CAT1 Interrupts can be modeled and implemented using the standard AUTOSAR tool chain. But it is also possible and explicitly allowed to implement them directly in the application, without modeling them in the system description or EcuC. E.g., timer interrupts are often handled this way. In this case, an ARTI consuming tool would not be able to detect the run times of this CAT1 interrupt. To still allow measuring these interrupts, ARTI allows to manually add the required hooks and EcuC items, so that tracing tools can recognize the flow of CAT1 interrupts.

### 43. Instrumenting the CAT1 Interrupt With ARTI Hooks

To trace CAT1 interrupts, the entry and the exit of the interrupt routine should be instrumented with ARTI hooks of class `AR_CP_ARTI_CAT1ISR`. An example implementation could be:

In this example code:

* the short name of the OS is OsOS,
* the core that gets the timer interrupt is core 0 (__vector_table( 0 )), and
* the trace index for the CAT1 ISR, which is equal to the hardware interrupt vector 7 in this example (__interrupt( 7 )).

### 44. EcuC Representation of CAT1 ARTI Hooks

Manually implemented ARTI Hooks of CAT1 Interrupts need to be modeled manually and added to the EcuC description. A model within the EcuC container according to the example code shown above could look like this:

<ECUC-MODULE-CONFIGURATION-VALUES>
  <SHORT-NAME>Arti</SHORT-NAME>
  <DEFINITION-REF DEST="ECUC-MODULE-DEF">/AUTOSAR/EcucDefs/Arti</DEFINITION-REF>
  <CONTAINERS>
    <ECUC-CONTAINER-VALUE>
      <SHORT-NAME>ArtiOs</SHORT-NAME>
      <DEFINITION-REF DEST="ECUC-PARAM-CONF-CONTAINER-DEF">/AUTOSAR/EcucDefs/Arti/ArtiOs</DEFINITION-REF>
      <SUB-CONTAINERS>
        <ECUC-CONTAINER-VALUE>
          <SHORT-NAME>ArtiOsIsrClassCat1</SHORT-NAME>
          <DEFINITION-REF DEST="ECUC-PARAM-CONF-CONTAINER-DEF">/AUTOSAR/EcucDefs/Arti/ArtiOs/ArtiOsIsrClass</DEFINITION-REF>
        </ECUC-CONTAINER-VALUE>
        <ECUC-CONTAINER-VALUE>
          <SHORT-NAME>ArtiOsIsrCat1Timer</SHORT-NAME>
          <DEFINITION-REF DEST="ECUC-PARAM-CONF-CONTAINER-DEF">/AUTOSAR/EcucDefs/Arti/ArtiOs/ArtiOsIsrInstance</DEFINITION-REF>
          <PARAMETER-VALUES>
            <ECUC-TEXTUAL-PARAM-VALUE>
              <DEFINITION-REF DEST="ECUC-ENUMERATION-PARAM-DEF">/AUTOSAR/EcucDefs/Arti/ArtiOs/ArtiOsIsrInst

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 1 章（内容从略，见纯文本全文）

45. Outlook
