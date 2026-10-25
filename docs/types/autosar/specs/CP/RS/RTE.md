# Requirements on Runtime Environment (`RTE`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 083 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_RTE_083\AUTOSAR_CP_RS_RTE.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_RTE_083\AUTOSAR_CP_RS_RTE.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_RTE_083\zzgen\CP_RS_RTE.complete.txt`

## 文档简介

The goal of AUTOSAR and of this document is to define the requirements and behavior of the AUTOSAR Run-time environment.

It is not within the remit of AUTOSAR to consider how the RTE is implemented but however all requirements and behavioral specifications are reviewed internally to ensure that at least one feasible implementations is possible.

## 章节详细内容

### 1. 范围 of this document
*原文标题：Scope of this document*

The goal of AUTOSAR and of this document is to define the requirements and behavior of the AUTOSAR Run-time environment.

It is not within the remit of AUTOSAR to consider how the RTE is implemented but however all requirements and behavioral specifications are reviewed internally to ensure that at least one feasible implementations is possible.

### 2. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 功能概述
*原文标题：Functional Overview*

The Run-Time Environment (RTE) is at the heart of the AUTOSAR ECU architecture. The RTE is the realization (for a particular ECU) of the interfaces of the AUTOSAR Virtual Function Bus (VFB) and thus provides the infrastructure services for communication between Application Software Components as well as facilitating access to basic software components including the OS.

Application Software Components contain system software that is CPU and location independent. This means that, subject to constraints imposed by the system designer, an Application Software Component can be mapped to any available ECU during system configuration. The RTE is responsible for ensuring that components can communicate and that the system continues to function as expected wherever the components are mapped.

The RTE encompasses both the variable elements of the system infrastructure that arise from the different mappings of components to ECUs as well as standardized RTE services. The RTE is generated and/or configured for each ECU to ensure that the RTE is optimal for the ECU.

### 4. 需求 on RTE
*原文标题：Requirements on RTE*

### 5. 功能性需求
*原文标题：Functional Requirements*

### 6. Interaction with AUTOSAR OS

The requirements in this section all concern how the RTE interacts with the AUTOSAR OS. The AUTOSAR ECU architecture defines all interactions to occur over a standardized interface.

 Access to OS
⌈
| Description: | The RTE shall abstract the features of Os from AUTOSAR Software Components. Only the access to the service interface of the RTE shall be available for AUTOSAR Software Components directly. |
|---|---|
| Rationale: | The Application Software Components are intended to be Os independent and therefore should not access any particular Os function directly, except for the service interface. For example, the RTE uses task-based functionality (tasks, resources, events, .) to provide Runnable Entity functionality to the application. The existence of OS tasks is not made visible to the application. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | The Os offers a standardized interface. This interface is accessed by Software Components only via the RTE API and hence access is controlled by the RTE. The Os offers a service interface. This is directly accessible by the Software Components. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Interaction with AUTOSAR COM

The requirements in this section all concern how the RTE interacts with the AUTOSAR COM. The AUTOSAR ECU architecture defines all interaction to occur over a standardized interface.

 Signal initial values
⌈
| Description: | The RTE generator shall ensure that signals for which an INIT_VALUE is specified are initialized. |
|---|---|
| Rationale: | Data can be read before COM or Efficient COM for large data has provided a first value and applications should be prevented from reading uninitialized data. |

Applies To:
| Dependencies: | The INVALIDATE attribute can be used in conjunction with an INIT_VALUE to indicate to an Application Software Component that no data has been received since COM or Efficient COM for large data or the RTE started. The INVALIDATE attribute shall be initialized too. |
|---|---|
| Use Case: | - |
| Supporting Material: | Specification of the Virtual Functional Bus |

⌋

 Communication timeouts
⌈
| Description: | The RTE generator shall include run-time checks for monitoring timeouts specified in the ECU Configuration for blocking communication. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Interaction with Application 软件 Components
*原文标题：Interaction with Application Software Components*

Includes Application Software Components, sensor components and actuator components.

 Support for multiple Application Software Component instances.
⌈
| Description: | The RTE shall support multiple instances of the same Application/Sensor/Actuator Software Component type mapped to the same ECU. |
|---|---|
| Rationale: | Repetition of the same Application Software Component type on an ECU to promote component reuse. |

Applies To:
| Dependencies: | Name space - rules for "instantiating" an application / sensor / actuator have to be defined. |
|---|---|
| Use Case: | * Having one Application Software Component type for the window lifter which is instantiated four times in a vehicle. |

* Homogenous SW redundancy is a basic/simple solution for increasing fault tolerance.
| Supporting Material: | Software Component Template |
|---|---|

⌋

 Multiple instantiated AUTOSAR software components delivered as binary code shall share code
⌈
| Description: | The RTE generator shall implement multiple instantiations (delivered as binary code) of the AUTOSAR software component type (on the same ECU) through sharing the same Application Software Component code for all instances. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Interaction with 基础软件 Components
*原文标题：Interaction with Basic Software Components*

Support for port-defined argument values
⌈
| Description: | The mechanism of "port-defined argument values", as defined in the AUTOSAR Software Component Template , has to be supported. |
|---|---|
| Rationale: | To allow the interaction of Application Software Components with the infrastructural basic software. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Access of a SW-C to the NVRAM Manager. |
| Supporting Material: | AUTOSAR Software Component Template |

⌋

 Interaction with call-backs
⌈
| Description: | The RTE shall not suspend execution while executing a call-back. |
|---|---|
| Rationale: | Blocking COM (e.g. in a call-back) could prevent reception of data and therefore lead to data loss. |

Applies To:
| Dependencies: | - decoupling of interrupts. |
|---|---|
| Use Case: | - |
| Supporting Material: | If the RTE cannot process (e.g. pass the information to a Runnable Entity) the call-back immediately then the information must be queued and processed at a later point. A call-back is not the same as activation of a Runnable Entity. |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Generation of the BSW Scheduler

Cyclic time based scheduling of BSW Schedulable Entities
⌈
| Description: | The RTE shall support to the cyclic time based scheduling of BSW Schedulable Entities. |
|---|---|
| Rationale: | Many BSW Modules rely on the cyclic time based call of their Schedulable Entities in order to fulfill their functionality. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Call of the function "Com_MainFunctionTx" to achieve periodic sending of IPdus. |
| Supporting Material: | - |

⌋

 Activation Offset of BSW Schedulable Entities
⌈
| Description: | The RTE shall allow the definition of an Activation Offset of BSW Schedulable Entities. |
|---|---|
| Rationale: | In order to allow optimizations in the scheduling the RTE has to handle the activation offset information from a task shared reference point for time trigger BSW Schedulable Entities. |

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | Mapping of BSW Schedulable Entities with different periods in the same task |
| Supporting Material: | - |

⌋

 Mode Switches for BSW Modules
⌈
| Description: | The RTE shall support Mode Switches for BSW modules. BSW Schedulable Entities are scheduled dependent on modes or are activated by entering and exiting a mode. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 支持 for Measurement and Calibration
*原文标题：Support for Measurement and Calibration*

Support for Measurement
⌈
| Description: | The RTE generator shall create code allowing read out of ECU internal communication data and variable contents. Responsibility of RTE is to supply RAM locations where the measurement data can be read by other SW (e.g. Basic SW, external measurement tools). This read out might be asynchronous to all RTE actions. The RTE is not responsible to deliver the measurement values to ECU external instances. |
|---|---|
| Rationale: | Measurement is needed to get knowledge about ECU internal behavior when ECU is running. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Monitor SWC internal signals (e.g.InterRunnableVariables), VFB communication or mode states. |
| Supporting Material: | Software Component Template |

⌋

 Support for Calibration
⌈
| Description: | RTE and BSW Scheduler shall support calibration process of ECUs. RTE and BSW Scheduler are not responsible to make parameter or interpolation curve/map modifications by itself but must support calibration data emulation. RTE and BSW Scheduler are neither responsible to handle exchange of calibration parameter values nor for communication with ECU external instances. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 通用需求
*原文标题：General Requirements*

Per-ECU RTE customization
⌈
| Description: | The RTE shall be customizable (generated and/or configured) for each ECU. The RTE generator should avoid, where possible, the use of generic functions and should, instead, favor functions that are configured/generated to specifically implement the required communication patterns. |
|---|---|
| Rationale: | Generic functions are considered to be too computationally expensive since the function needs to dynamically determine what actions to perform (e.g. switch on parameters). In contrast, statically configured/generated functions know implicitly what needs to be done and therefore avoid these costs and are therefore considered necessary for the production of optimal systems. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | An ECU with two or more micro-controllers can be configured using either shared memory (and hence a single OS, single basic software set, etc) or with separate memory (multiple OSs, multiple basic software sets, etc.). In the first case there is only a single ECU according to the AUTOSAR ECU architecture and therefore only one RTE. In the second case there are multiple, independent, ECUs and therefore multiple RTEs. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. VFB 追踪
*原文标题：VFB Tracing*

The RTE generator shall support "trace" builds
⌈
| Description: | If the RTE provides means for tracing which cost additional RAM and/or ROM and/or RUNTIME in the ECU. It shall be possible to switch these features off statically during RTE generation. |
|---|---|
| Rationale: | Allow monitoring of VFB communication and runtime behavior. |

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | DLT, Debugging |
| Supporting Material: | VFB90, VFB_C10 |

⌋

 Standardized VFB tracing interface
⌈
| Description: | In 'trace' build the RTE implementation shall provide a standardized interface to make data values and events available to VFB tracing tools. When in 'trace' build the RTE generator inserts hook calls at interesting points (e.g. API invocation, interactions with COM, task start, Runnable Entity start, etc). |
|---|---|
| Rationale: | By defining a standardized VFB tracing interface tool vendors can adapt existing trace tools quickly - this will promote the adoption of AUTOSAR ECUs. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | VFB Specification (VFB90); VFB Specification V1.03, Sect. 4.4.3, p. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Application 软件组件初始化 and Finalization
*原文标题：Application Software Component Initialization and Finalization*

Initialization and finalization of components
⌈
| Description: | The RTE shall support initialization and finalization of Application Software Components. The term "initialization of a component" refers to the phase of a software components life cycle which will be executed before entering the normal operational mode, normally in order to set up an appropriate environment for executing the application. The term "finalization of a component" refers to the phase of a software components life cycle which will be executed after the normal operational mode, normally in order to reset the operational environment to a determined state. |
|---|---|
| Rationale: | The general ECU life-cycle is characterized by transitions from inoperational states to run states and back to the inoperational states of the ECUStateManager. When in run states the OS scheduler is responsible for the ECUs schedule and Runnable Entities will be executed with respect to the OS scheduler. In all other states the ECUStateManager is responsible for schedule of the ECU, but Runnable Entities can only be executed in synchronous and sequential way. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. API

Compiler independent API
⌈
| Description: | The RTE API (for a particular programming language) shall be compiler and platform independent. |
|---|---|
| Rationale: | There shall be no need to change an Application Software Component source-code when the component is moved between ECUs and/or the compiler is changed. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | In addition the RTE should, ideally, also be retargetable (i.e. portable) with minimum effort. This is explicitly not stated as an RTE requirement since it is a statement about RTE implementation and not RTE behavior. |

⌋

 Typing of RTE API.
⌈
| Description: | For parameters which are typed by an AUTOSAR data type the RTE API shall either use data types related to the whole AUTOSAR data type or data types related to the used Base Type. The kind of API is defined in the SWC-Description and is part of the contract phase input. |
|---|---|
| Rationale: | Dependent from the SWCs implementation either usage of Base Type related types (comprising only the "C" implementation aspect) or full AUTOSAR data type related types (comprising the semantic of the data type as well) is more advantageous. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. C/C++ API

Software Module Header File generation
⌈
| Description: | The RTE Generator shall create exactly one software module header file to be explicitly included in each C/C++ application or basic software component type that defines that component's RTE API. There may be a hierarchy of include files implicitly included. |
|---|---|
| Rationale: | Required to define API mapping and to perform optimizations and monitoring targeted for specific components. The software component header file is generated and can therefore include component specific information, including task header files for zero-overhead access to OS facilities. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | AUTOSAR design flow. This requirement does not preclude a component including its own header files. |

⌋

### 17. 初始化 and Finalization Operation
*原文标题：Initialization and Finalization Operation*

Requirements for component finalization are considered above .

 RTE Initialization and finalization
⌈
| Description: | The RTE generator shall provide mechanisms to initialize and finalize the RTE in two steps: Step 1: set all initial values of the communication and mode machine instances start the schedule of BSW modules treat the communication with application SW-Cs like unconnected remote communication Step2: start the schedule and communication of all application SW-Cs The RTE startup shall support the startup of SW-C and BSW modules mapped to different OS applications, specifically different cores and memory partitions. |
|---|---|
| Rationale: | Support the initialization of the BSW Scheduler and the RTE. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Initialize the mode management and the scheduling of BSW before initializing and executing the Application SW-Components. |
| Supporting Material: | - |

⌋

### 18. 分区 Restarting and Termination
*原文标题：Partition Restarting and Termination*

Inter-partition communication consistency
⌈
| Description: | When two SWCs communicate, if one SWC is on a terminated partition (resp. a partition being restarted), it should behave for the initiating SWC as if it was mapped on a shutdown remote ECU (resp. an ECU being restarted). The RTE may provide the feedback with a timeout error immediately. |
|---|---|
| Rationale: | Servers on terminated partitions will not answer and server calls should result in timeouts for the clients. Servers' feedback should be dropped if the client is terminated or has been restarted since it sent the request. Received data during a restart should be discarded and init values should be proposed to the SWCs. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Avoid transmission of potentially inconsistent data. Avoid inconsistent feedback to clients (sequence number needed). |
| Supporting Material: | - |

⌋

### 19. Fault Operation

Errors are directly reported to invoking Software Component (see ).

### 20. RTE Implementation Plug-Ins

Modular Runtime Environment
⌈
| Description: | The RTE shall support to split the implementation of the VFB functionality between RTE Generator and so called Rte Implementation Plug-Ins. Thereby two different specialization of Rte Implementation Plug-Ins shall be supported: |
|---|---|

* Local Software Cluster Communication Plug-Ins generally take care about the implementation of preemption and concurrency locks, protection of data accesses, and implicit communication buffering inside a Software Cluster.
* Cross Software Cluster Communication Plug-Ins generally handling the communication towards a non-software-cluster-local communication partner.
| Rationale: | Runtime and memory optimization of semaphore mechanisms in complex scheduling scenarios. |
|---|---|

Non AUTOSAR standardized buffering schema, e.g. LET

Cross Software Cluster Communication
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 RTE Implementation Plug-Ins for explicit communication
⌈
| Description: | The RTE shall support to implement for explicit communication following sub functionality |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Non-Functional 需求
*原文标题：Non-Functional Requirements*

### 22. 通用需求
*原文标题：General Requirements*

AUTOSAR methodology
⌈
| Description: | The RTE generator shall operate according to the AUTOSAR methodology. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | AUTOSAR Methodology |

⌋

 RTE is the communication infrastructure
⌈
| Description: | All communication between Application Software Components and between Application Software Components and basic software components shall occur, at least conceptually, via the RTE. Note that communication between modules within the basic software and to shared libraries does NOT occur through the RTE. This is a basic requirement and ensures that the RTE controls all communication involving Application Software Components. This requirement is not intended to prevent the RTE generator providing optimizations that bypass the RTE such as optimizing client-server to direct function call. |
|---|---|
| Rationale: | AUTOSAR ECU architecture |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | VFB Specification This requirement applies regardless of whether communication is done by COM, by the RTE directly or if the RTE generator optimizes the generated RTE to bypasses the RTE completely for certain communication paths. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 24. Traceable item history of this document according to AUTOSAR Release R25-11

### 25. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| RTE Reporting Data Element Invalidation Errors to DEM |  |
| RTE Proxy for Cyclic Reception Handling |  |
| RTE Last Valid Value as Error Alternative |  |
| RTE Support for Debounce Counter Values for Infrastructure and Value Qualifier |  |

### 26. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| Software Sharing |  |
| RTE Implementation Plug-Ins for Software Sharing |  |

### 27. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

| Number | Heading |
|---|---|
| RTE Overheads |  |
| Vendor mode |  |

### 28. Traceable item history of this document according to AUTOSAR Release R24-11

### 29. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 30. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 31. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 32. Traceable item history of this document according to AUTOSAR Release R23-11

### 33. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 34. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| Modular Runtime Environment |  |
| RTE Implementation Plug-Ins for parameter communication |  |
| RTE Implementation Plug-Ins for mode communication |  |

### 35. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

| Number | Heading |
|---|---|
| No activation of Runnable Entities in terminated or restarting partitions |  |
| Callout for partition termination notification |  |
| Callout for partition restart request |  |

### 36. Traceable item history of this document according to AUTOSAR Release R22-11

### 37. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

none

### 38. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| Contract Phase with Variant Handling support |  |
| Support the selection of a signal provider |  |
| Support N to M communication patterns while unresolved variations are affecting these communications |  |

### 39. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

| Number | Heading |
|---|---|
| Support "Specification of Compiler Abstraction" |  |
