# Specification of FlexRay Interface (`FlexRayInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 027 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayInterface_027\AUTOSAR_CP_SWS_FlexRayInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayInterface_027\AUTOSAR_CP_SWS_FlexRayInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_FlexRayInterface_027\zzgen\CP_SWS_FlexRayInterface.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module "FlexRay Interface".

In the AUTOSAR Layered Software Architecture Layered Software Architecture, the FlexRay Interface belongs to the ECU Abstraction Layer, or more precisely, to the Communication Hardware Abstraction. This indicates the main task of the FlexRay Interface:

Provide to upper layers an abstract interface to the FlexRay Communication System. At least as far as data transmission (i.e. data sending and reception) is concerned, this interface shall be uniform for all bus systems in Autosar (FlexRay, CAN, LIN). Thus, the upper layer (Communication Services like PDU Router, Transport Protocol, and Network Management and others) may access all underlying bus systems for data transmission in a uniform manner. The configuration of the FlexRay Interface however is bus-specific, since it takes into account the specific features of the communication system.

The FlexRay Interface does not directly access the FlexRay hardware (FlexRay Communication Controller and FlexRay Transceiver), but by means of one or more hardware-specific Driver modules.

In order to access the FlexRay Communication Controller(s), the FlexRay Interface uses one or multiple FlexRay Driver modules, which abstract the specific features and interfaces (CHI) of the respective FlexRay Communication Controller(s).

Likewise, in order to access the FlexRay Transceiver(s), the FlexRay Interface shall use one or multiple FlexRay Transceiver Driver module(s), which abstract the specific features and interfaces of the respective FlexRay Transceiver(s)

Therefore, the FlexRay Interface executable code (however, not the configuration used during runtime) shall be completely independent of the FlexRay Communication Controller(s) and the FlexRay Transceiver(s).

Note: The FlexRay Interface is specified in a way that allows for object code delivery of the code module, following the "one-fits-all" principle, i.e. the entire configuration of the FlexRay Interface can be carried out without modifying any source code. Thus, the configuration of the FlexRay Interface can be carried out largely without detailed knowledge of the underlying hardware.

The FlexRay Interface provides to upper layer AUTOSAR BSW modules the following groups of functions:

* initialization
* data transmission (sending and reception)
* start/halt/abort communication
* FlexRay specific functions (e.g. send wake-up pat

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module "FlexRay Interface".

In the AUTOSAR Layered Software Architecture Layered Software Architecture, the FlexRay Interface belongs to the ECU Abstraction Layer, or more precisely, to the Communication Hardware Abstraction. This indicates the main task of the FlexRay Interface:

Provide to upper layers an abstract interface to the FlexRay Communication System. At least as far as data transmission (i.e. data sending and reception) is concerned, this interface shall be uniform for all bus systems in Autosar (FlexRay, CAN, LIN). Thus, the upper layer (Communication Services like PDU Router, Transport Protocol, and Network Management and others) may access all underlying bus systems for data transmission in a uniform manner. The configuration of the FlexRay Interface however is bus-specific, since it takes into account the specific features of the communication system.

The FlexRay Interface does not directly access the FlexRay hardware (FlexRay Communication Controller and FlexRay Transceiver), but by means of one or more hardware-specific Driver modules.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 通用 Hints
*原文标题：General Hints*

In general, the FlexRay Interface has no knowledge of the origin of a PDU passed to it in an API service call.

Therefore, throughout this document, the term "PDU" is being used for PDUs originating from or sent to:

* AUTOSAR Com (I-PDU) via the PDU-Router, or
* AUTOSAR FlexRay TP (N-PDU), or
* AUTOSAR FlexRay NM
* AUTOSAR XCP

In addition to the above-mentioned AUTOSAR BSW modules, the FrIf shall, with the functionality described within the specification in hand, also support other non-AUTOSAR upper layer software modules (Complex Drivers), provided that these modules interact with the FrIf in the same manner as the upper layer AUTOSAR BSW modules.

Throughout this document, several scenarios for changing configuration data are mentioned. They are being used as follows:

* "pre compile time" = carried out before compiling the code of the FlexRay Interface, since the code generation depends on this setting.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to this document that are not included in the AUTOSAR Glossary :

| Acronym: | Description: |
|---|---|
| BSW | (AUTOSAR) Basic Software |
| CAS | Collision Avoidance Symbol |
| CC | (FlexRay) Communication Controller |
| CDD | Complex Driver |
| CHI | Controller Host Interface of a FlexRay CC |
| COM | Communication (AUTOSAR BSW module) |
| ComM | Communication Manager (AUTOSAR BSW module) |
| DEM | Diagnostic Event Manager (AUTOSAR BSW module) |
| DET | Default Error Tracer (AUTOSAR BSW module) |
| FrIf | FlexRay Interface (AUTOSAR BSW module) |
| FrNm | FlexRay Network Management (AUTOSAR BSW module) |
| FrTp | FlexRay Transport Layer (AUTOSAR BSW module) |
| ISR | Interrupt Service Routine |
| LSduR | Data link layer service data unit Router (AUTOSAR BSW module) |
| MCG | Module Configuration Generator |
| PduR | PDU Router (AUTOSAR BSW module) |
| POC | Protocol Operation Control |
| WUDOP | Wake-Up During Operation |
| WUP | Wake-Up Pattern |
| WUS | Wake-Up Symbol |
| System Designer | The person responsible for the configuration of all system parameters that do not influence the executable code itself (i.e. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 相关文档
*原文标题：Related documentation*

### 5. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for FrIf.

Thus, the specification SWS BSW General shall be considered as additional and required specification for FrIf.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

The FlexRay BSW modules are only able to handle a single thread of execution per Cluster. The execution for a particular Cluster must not be pre-empted by itself for the same Cluster. The same applies to the execution of the FlexRay Job List Execution Function.

It is not possible to transmit signals, PDUs, and/or L-SDUs, which exceed the available buffer size of the used FlexRay CC during normal operation. Longer signals, PDUs, and/or L-SDUs have to be transmitted using the FlexRay Transport Protocol.

Note: The FlexRay Interface does not make any PDU payload-dependent routing decisions.

Note: In order for the AUTOSAR FlexRay BSW (FrIf and FlexRay Driver) modules to be able to control a FlexRay CC, this CC must allow for configuring its transmit/receive buffers to support the Cycle Counter Filter Criterion / (Support of Slot/Cycle Muliplexing)

For 2.1 FlexRay Hardware, the following Cycle Counter Filtering is possible

Cycle Number = (B + n * 2R)mod64

with exactly one tuple of values for B and 2R, where:

* Base Cycle B \in
* Cycle Repetition 2R ; R \in
* Variable n = 0 ... 63
* B < 2R

For 3.0 FlexRay Hardware, the Cycle Counter Filtering shall be possible as described in

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The FlexRay BSW Stack can be used wherever high data rates and fault tolerant communication (in conjunction with AUTOSAR COM) are required. Of course, it can also be used for less-demanding use cases, i.e. for low data rates or non-fault-tolerant communication. Furthermore, it enables the synchronized operation of several ECUs within a car.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 11. AUTOSAR Operating 系统
*原文标题：AUTOSAR Operating System*

Upstream requirements:
⌈
There is one dedicated FlexRay Job List Execution Function for each FlexRay Cluster.
⌋

  Upstream requirements:
⌈
The FlexRay Interface module shall execute the Flexray Job List Execution Function.
⌋

Note: It is up to the implementer whether the FlexRay Job List Execution Functions run in a task context or in an ISR.

### 12. All 上层 Layer AUTOSAR BSW 模块
*原文标题：All Upper Layer AUTOSAR BSW Modules*

Upstream requirements:
⌈
The calling of the FlexRay Job List Execution Function by the FlexRay Interface module synchronously to the FlexRay Global Time shall ensure that both the indication (to an upper layer BSW module) of received data and the request (to an upper layer BSW module) for data to be sent occur synchronously to the FlexRay Global Time.
⌋

  Upstream requirements:
⌈
The FlexRay Interface module shall ensure data consistency in its buffers.
⌋

Rationale for : If the respective upper layer BSW module does not operate synchronously to the FlexRay Global Time, these occurrences are asynchronous to the code execution of this BSW module.

### 13. AUTOSAR LSdu-Router

The FrIf module declares and calls some callback functions of the LSdu-Router in order to confirm transmission and notify reception of L-SDUs.

### 14. AUTOSAR FlexRay 网络管理
*原文标题：AUTOSAR FlexRay Network Management*

The FrIf module declares and calls some callback functions of the FlexRay Network Management in order to confirm transmission and notify reception of PDUs.

### 15. AUTOSAR FlexRay 传输协议
*原文标题：AUTOSAR FlexRay Transport Protocol*

The FrIf module declares and calls some callback functions of the FlexRay Transport Protocol in order to confirm transmission and notify reception of PDUs.

### 16. AUTOSAR Bus Mirroring

The FrIf module calls a callback function of the Bus Mirroring module in order to report received and transmitted frames, which in turn calls some service functions of the FrIf module to acquire the network state.

### 17. AUTOSAR FlexRay 驱动
*原文标题：AUTOSAR FlexRay Driver*

The FrIf module has a tight relation to the FlexRay Driver since many of the FlexRay-related services offered by the FrIf module to upper layer BSW modules are actually carried out by the FlexRay Driver BSW module. For those services, the FrIf module mainly performs only an abstraction of the communication hardware specific information (e.g. the topology of the FlexRay Communication System) and then calls the respective FlexRay Driver with the appropriate parameters.

The FlexRay Driver module has to be the only BSW module which has to run necessarily synchronous to the FlexRay Interface.

### 18. AUTOSAR FlexRay 收发器驱动
*原文标题：AUTOSAR FlexRay Transceiver Driver*

The FrIf module has a tight relation to the FlexRay Transceiver Driver since calls of API services of the FlexRay Transceiver Driver are also routed through the FrIf module in order to abstract the communication hardware specific information (e.g. the topology of the FlexRay Communication System).

### 19. 文件结构
*原文标题：File Structure*

### 20. 头文件结构
*原文标题：Header File Structure*

Please refer to the chapter "Header file structure" in .

  Upstream requirements:
⌈
The FrIf module source code file(s) shall include `SchM_FrIf`.h if data consistency mechanisms of the BSW scheduler are required as described in .
⌋

  Upstream requirements:
⌈
The header file FrIf.h shall contain a software and specification version number.
⌋

  Upstream requirements:
⌈
Mirror.h contains the declaration of the API service the Bus Mirroring module offers to the FlexRay Interface. This header is only included if Bus Mirroring is enabled (see FrIfBusMirroringSupport).
⌋

### 21. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules shall perform a pre-processor check of the versions of all imported include files |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The AUTOSAR Basic Software shall provide a hardware abstraction layer |  |  |
| The AUTOSAR SW Components shall provide information about their dependency from faults, signal qualities, driver demands |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| Machine readable module description |  |  |
| Basic SW module shall be able to shutdown |  |  |
| It shall be possible to create an AUTOSAR ECU out of modules provided as source code and modules provided as object code, even mixed |  |  |
| BSW Modules shall |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 功能规范
*原文标题：Functional specification*

### 23. FlexRay BSW Stack

As part of the AUTOSAR Layered Software Architecture according to , the FlexRay BSW modules also form a layered software stack.  depicts the basic structure of this FlexRay BSW stack. The FrIf module accesses several CCs using the FlexRay Driver layer, which can be made up of several FlexRay Drivers modules. The FlexRay Transceivers are not shown in this figure; however, the structure that applies to the FlexRay Drivers and the FlexRay CCs analogously applies to the FlexRay Transceiver Drivers and the FlexRay Transceivers.

### 24. Indexing Scheme

### 25. Principle

Most of the FrIf module's API services used for accessing the numerous (hardware and software) resources  map to corresponding API services of the underlying FlexRay Driver(s), or FlexRay Transceiver Driver(s), respectively.

In order to select those resources spread over the various entities  accessed via the FrIf module, the FlexRay-related AUTOSAR BSW modules use an indexing scheme that is exemplarily described in  and .

Definition ControllerIndex: The ConctrollerIndex is an abstract, unique, zero-based consecutive index to achieve the abstraction of the FlexRay Communication Controllers, independent of their type, location, and access method.

Definition ClusterIndex: The ClusterIndex is an abstract, unique, zero-based consecutive index to achieve the abstraction of the FlexRay Clusters, independent of their type, location, and access method.

Definition ChannelIndex: The ChannelIndex has either the value `FR_CHANNEL_A` or `FR_CHANNEL_B`. In combination with the ControlerIndex, the corresponding FlexRay Transceiver is identified.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Supported Indexed Resources

Upstream requirements:
⌈
It shall be possible that the FrIf module can be configured to support at least four (possibly different) FlexRay Drivers to access the FlexRay Communication Controllers.
⌋

  Upstream requirements:
⌈
It shall be possible that the FrIf module can be configured using the parameter `FRIF_CTRL_IDX` to support at least four (possibly different) FlexRay CCs.
⌋

  Upstream requirements:
⌈
It shall be possible that the FrIf module can be configured to support one of both or both FlexRay Channels as specified in .
⌋

  Upstream requirements:
⌈
It shall be possible that the FrIf module can be configured using the parameter `FRIF_CLST_IDX` to support at least four FlexRay Clusters.
⌋

  Upstream requirements:
⌈
It shall be possible that the FrIf module can be configured using the parameter `FRIF_ABS_TIMER_IDX` to support at least one absolute timer per FlexRay CCs.
⌋

### 27. FlexRay 接口状态 Machine
*原文标题：FlexRay Interface State Machine*

⌈
In order to allow to control the communication operations of the FlexRay system, the FrIf module shall implement a behavior, which is defined using a simple state machine (one per FlexRay cluster), called FlexRay Interface State Machine
⌋

| State | Description |
|---|---|
| FRIF_STATE_OFFLINE | No communication services are executed (see  for details) |
| FRIF_STATE_ONLINE | All communication services (reception, transmission, transmission confirmation) are executed (see  for details). |

  Upstream requirements:
⌈
During initialization of the FrIf by executing `FrIf_Init`() the `FrIf_State` for each cluster shall be initialized with state '`FRIF_STATE_OFFLINE`'.

The transitions are requested by an API service `FrIf_SetState`() which takes the Cluster to process on and the Transistion name to invoke.
⌋

⌈
If the FrIf module's environment calls the function `FrIf_SetState` with parameter `FrIf_StateTransition` = `FRIF_GOTO_ONLINE` and if the current state for the requested cluster is `FRIF_STATE_OFFLINE`, the FrIf module shall take the current state of the requested cluster to `FRIF_STATE_ONLINE`.".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. FlexRay 接口 Main 功能
*原文标题：FlexRay Interface Main Function*

The FlexRay Interface Main Function needs to be called cyclically from a task body provided by the BSW Scheduler with a calling period (`FRIF_MAINFUNCTION_PERIOD`) depending on the FlexRay Cycle length and configurable at system configuration time.

Since the Cycle length of each Cluster is independent, the desired calling period of the FlexRay Interface Main Function might differ from Cluster to Cluster, except for "Transmission with Immediate Buffer Access".

  Upstream requirements:
⌈
The FrIf module shall provide one dedicated FlexRay Interface Main Function for each FlexRay Cluster that is controlled by that FrIf module.
⌋

  Upstream requirements:
⌈
The API names of the FlexRay Interface Main Functions shall obey the following pattern:

`FrIf_MainFunction_`<FrIfCluster.ShortName> where FrIfCluster.ShortName is the Short Name of the corresponding FrIfCluster.
⌋

⌈
The Main Function monitors and controls the continuous execution of the FlexRay Job List Execution Function including the (re)synchronization if the current FlexRay Interface State Machine is `FRIF_STATE_ONLINE`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Implementation 需求
*原文标题：Implementation Requirements*

⌈
The FlexRay Interface executable code (however, not the configuration used during runtime) shall be completely independent of the FlexRay Communication Controller(s) and the FlexRay Transceiver(s).
⌋

  Upstream requirements: ,
⌈
The FrIf module shall support pre-compile time, link-time and post-build-time configuration.
⌋

⌈
The FrIf module shall implement link-time and post-build-time configuration data as read-only data structures.
⌋

⌈
The FrIf module shall immediately reference link-time configuration data by the implementation,
⌋

  Upstream requirements:
⌈
The FrIf module shall implement the API functions specified by the FrIf SWS as real C code functions and shall not implement the API functions as macros.
⌋

Note:The rationale of `SWS_FrIf_05078` is to allow object code module integration.

⌈
The FrIf module shall pad transmitted PDUs that are located on a FrIf L-Sdu where FrIfAllowDynamicLSduLength is set to false, if the size is smaller than the configured size of the PDU. Padding shall be done with the configured FrIfUnusedBitValue.
⌋

### 30. 配置描述
*原文标题：Configuration description*

Upstream requirements: , ,
⌈
The FrIf module shall provide an XML file that contains the data which is required for the SW identification (it shall contain the vendor identification, module ID and software version information), configuration and integration process. This file should describe vendor specific configuration parameters as well as it should contain recommended configuration parameter values.

The description of the configuration and initialization data itself is not part of this specification but very implementation specific.
⌋

### 31. 数据 Communication via FlexRay
*原文标题：Data Communication via FlexRay*

FlexRay in general is a deterministic time-driven communication system.

Each datum that should be transmitted or received has to be scheduled at system configuration time.

This even holds true for data that - from the application's point of view - are considered event-driven.

Note: When looking only at specific instances of the AUTOSAR FlexRay software modules running on a specific ECU it is not possible to "anticipate" the exact point in time when a certain FlexRay frame is being sent (or received, respectively) in the Dynamic Segment of the FlexRay Cycle.

  Upstream requirements:
⌈
The FrIf module shall define the resources (e.g. a buffer in the FlexRay Communication Controller or FlexRay Driver) needed for data transmission (or reception, respectively) at system configuration time specifically for data transmission (or reception, respectively).
⌋

Note: There is no true spontaneous event-driven data communication on FlexRay. Even application data that occur at unpredictable points in time (i.e. "event-driven"), and that should be transmitted via FlexRay, have to be scheduled for transmission at system configuration time.

### 32. PDU Packing, PDU update bits, and Frame Construction Plans

In accordance with basic AUTOSAR rules, the API services that the FrIf module provides to upper layer BSW modules for data transmission and data reception are PDU-based.

⌈
The FrIf module shall be capable of packing multiple PDUs into one FlexRay Frame.
⌋

Rationale for `SWS_FrIf_05121`: Bus-independent AUTOSAR PDUs have a maximal length of 8 bytes, but according to  a FlexRay Frame can contain as many as 254 bytes of payload data.

Note: It is also allowed to define PDUs which are larger than 8 bytes. Please be aware that PDUs greater than 8 bytes are not bus independent any more!

⌈
The FrIf module shall take the information on how to pack PDUs into FlexRay Frames from the so-called Frame Construction Plans. The rules defining how to pack PDUs into FlexRay Frames are defined at system configuration time
⌋

⌈
The Frame Construction Plan shall be stored in the static configuration of the FrIf module (configuration parameter FrIfFrameStructure, see FrIf05370).
⌋

⌈
If multiple PDUs are packed into a single FlexRay Frame and if the FrIf module recognizes the update of at least one of the contained PDUs, then the FrIf module shall transmit this FlexRay Frame.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Dynamic PDU length

⌈
In case the parameter 'FrIfAllowDynamicLSduLength' (see FrIf06049) is set to true for the associated frame triggering, the FrIf module passes the actual used L-PDU length to the driver (`Fr_TransmitTxLPdu`()), taking into account the following parameters for each PDU:

- the position of the PDU within the L-PDU

- the position of the update-bit information (if configured)

If FrIfImmediate equals TRUE, the actual length of the respective PDU shall be as passed via `FrIf_Transmit`().

If FrIfImmediate equals FALSE, the actual length of the respective PDU shall be as passed via `LSduR_FrIfTriggerTransmit`().
⌋

Note: If FrIfAllowDynamicLSduLength is set to false, the FrIf module just passes the length information according to the frame construction plan to the FlexRay driver.

⌈
The FrIf shall only indicate PDUs in received areas (PDU offset <= actual L-PDU length) to upper layer(s).
⌋

### 34. AlwaysTransmit

Note: According to , a FlexRay CC might only support the so-called "continuous transmission mode" where a message is transmitted continuously until the host explicitly invalidates the transmit buffer. If such a FlexRay CC is being used for transmission, and the receiving FrIf should still be able to determine which of the PDUs in a received FlexRay Frame have actually been updated by an upper layer BSW module on the transmitter side, a special mechanism is needed in the transmitting FrIf, called AlwaysTransmit (configuration parameter FrIfAlwaysTransmit, see `ECUC_FrIf_06050`). If AlwaysTransmit is enabled for an L-PDU that is transmitted using the Communication Operation `DECOUPLED_TRANSMISSION`, the FlexRay Driver's API service `Fr_TransmitTxLPdu`() is always called for this L-PDU, independent from any PDUs in this L-PDU having been updated by an upper layer BSW module. This enables resetting the PDU update bits in the FlexRay CC's transmit buffer, even if none of the PDUs in the FlexRay Frame have actually been updated by an upper layer BSW module, and thus ensures the correct interpretation of the received Frame contents by the receiving FrIf.

Note: Since:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Realization of the Time-Driven FlexRay 调度
*原文标题：Realization of the Time-Driven FlexRay Schedule*

According to , a FlexRay CC is not required to provide mechanisms in hardware to ensure asynchronous access to its transmit and receive buffers e.g. by providing shadow buffers that may be accessed asynchronously by the AUTOSAR FlexRay software modules.

⌈
The FrIf module shall call all functions accessing the transmit and receive buffers (i.e. performing data transmission or reception, respectively) synchronously (i.e. synchronized to the FlexRay Global Time)
⌋

Rationale for `SWS_FrIf_05130`: The access of FrIf module functions to transmit and receive buffers only at well-defined points in time  avoids concurrent access to the buffers by the hardware and the software.

Note: In order to provide this necessary synchronicity, the FrIf module defines for each Cluster a FlexRay Job List .

The Cluster's FlexRay Job List is executed by its Job List Execution Function (see ) using an absolute timer  of a FlexRay CC connected to the respective Cluster.

### 36. FlexRay Job List

⌈
Definition: A FlexRay Job List is a list of (maybe different) Communication Jobs sorted according to their respective execution start time.

Each Communication Job  contains the following properties:

* Job start time by means of

  * FlexRay Communication Cycle
  * Macrotick Offset within the Communication Cycle .
* A list of Communication Operations  sorted according to a configurable Communication operation index . The sorting order defines the order of execution of the Communication Operations within a FlexRay Communication Job.
⌋

⌈
The FrIf module shall call the respective Cluster's FlexRay Job List Execution Function to execute each FlexRay Communication Job at the execution start time assigned to that Communication Job
⌋

⌈
The FrIf module shall process the actions determined by the Communication Operations assigned to each FlexRay Communication Job

Each Communication Operation (see FrIf05369) contains the following properties:

* Communication Operation Index , which determines the execution order of the Communication Operations.
* Communication Action , which specifies the actual action to perform

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. FlexRay Job List Execution 功能
*原文标题：FlexRay Job List Execution Function*

Since the Communication Schedule of each FlexRay Cluster is independent, there is one dedicated FlexRay Job List and one dedicated FlexRay Job List Execution Function for each FlexRay Cluster that is controlled by the FlexRay Interface.

The Copy Operation into/from the FlexRay CCs are scheduled within the FlexRay JobLists' communication operations

⌈
The API names of the FlexRay Job List Execution Functions shall obey the following pattern:

`FrIf_JobListExec_`<FrIfCluster.ShortName> where FrIfCluster.ShortName is the Short Name of the corresponding FrIfCluster.
⌋

⌈
The FlexRay Job List Execution Function shall execute the Cluster's FlexRay Job List Jobs synchronously to the Cluster's global time (i.e. at well-defined points in time).
⌋

⌈
Upon invocation, the FlexRay Job List Execution Function shall perform the following steps:

# Retrieve the FlexRay Global Time from the FlexRay CC providing the Cluster's absolute timer interrupt.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Communication Operations

This chapter describes each Communication Operation that is executed within the Job List Execution Function.

### 39. TransmitWithDecoupledBufferAccess

Upstream requirements:
⌈
The FrIf module shall be capable of Transmit Request queuing by using the TrigTxCounter.
⌋

Note: Only the amount of transmit requests are stored, not the data itself.

  Upstream requirements:
⌈
If the related CC is in `FrIf_State` `FRIF_STATE_ONLINE` for a Communication Operation `DECOUPLED_TRANSMISSION`, then the Job List Execution Function shall execute this Communication Operation. Otherwise, the Job List Execution Function shall ignore this Communication Operation.
⌋

⌈
For a Communication Operation `DECOUPLED_TRANSMISSION` the Job List Execution Function shall perform the following steps

# Iterate over all PDUs contained in the FrIfFrameStructure (see FrIf05370) of the associated frame triggering of this Communication Operation and

  # Check whether TrigTxCounter is > 0 or FrIfNoneMode == true for the PDU. If not, clear the update-bit for this PDU  and proceed with the next PDU, otherwise continue with the following steps:

    # Decrement TrigTxCounter only if TrigTxCounter > 0. If the value of TrigTxCounter = 0, do not decrement.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. ProvideTxConfirmation

This Communication Operation provides a Tx confirmation and optionally checks the occurrence of a Tx conflict.

⌈
If the related CC is in `FrIf_State` `FRIF_STATE_ONLINE` for a Communication Operation `TX_CONFIRMATION`, then the Job List Execution Function shall execute this Communication Operation. Otherwise, the Job List Execution Function shall ignore this Communication Operation.
⌋

⌈
"For a Communication Operation `TX_CONFIRMATION` the Job List Execution Function shall perform the following steps:

# Call the FlexRay Driver's API function `Fr_CheckTxLPduStatus`():

  * `Fr_CtrlIdx` is derived according to the indexing scheme described in chapter of indexing
  * `Fr_LPduIdx` is set to the configured L-PDU buffer index  associated with the Communication Operation.
  * `Fr_SlotAssignmentPtr` is set to a temporary slot assignment buffer if Bus Mirroring is enabled globally (see FrIfBusMirroringSupport), otherwise to the `NULL_PTR`.
# If the transmission was performed (output parameter *`Fr_TxLPduStatusPtr` is set to `FR_TRANSMITTED`) then iterate over all PDUs contained in the FrIfFrameStructure (see FrIf05370) of the associated frame triggering.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. ReceiveAndStore

⌈
If the related CC is in `FrIf_State` `FRIF_STATE_ONLINE` for a Communication Operation `RECEIVE_AND_STORE`, then the Job List Execution Function shall execute this Communication Operation. Otherwise, the Job List Execution Function shall ignore this Communication Operation.
⌋

⌈
For a Communication Operation `RECEIVE_AND_STORE` the Job List Execution Function shall perform the following steps:

# Call the FlexRay Driver's API function `Fr_ReceiveRxLPdu`():

  # `Fr_CtrlIdx` is derived according to the indexing scheme described in chapter of indexing.
  # `Fr_LPduIdx` is set to the configured L-PDU index  associated with the Communication Operation.
  # `Fr_LSduPtr` is set to a temporary buffer.
  # `Fr_SlotAssignmentPtr` is set to a temporary slot assignment buffer if Bus Mirroring is enabled globally (see FrIfBusMirroringSupport), otherwise to the `NULL_PTR`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 123 章（内容从略，见纯文本全文）

42. ProvideRxIndication
43. ReceiveAndIndicate
44. PREPARE_LPDU
45. FREE_OP_A
46. FREE_OP_B
47. Transmission with Immediate Buffer Access
48. 错误分类
49. Development 错误
50. Runtime 错误
51. Production 错误
52. Extended Production 错误
53. API 规范
54. Imported 类型
55. 类型定义
56. FrIf_ConfigType
57. FrIf_StateType
58. FrIf_StateTransitionType
59. 功能定义
60. FrIf_Init
61. FrIf_ControllerInit
62. FrIf_SetAbsoluteTimer
63. FrIf_EnableAbsoluteTimerIRQ
64. FrIf_AckAbsoluteTimerIRQ
65. FrIf_StartCommunication
66. FrIf_HaltCommunication
67. FrIf_AbortCommunication
68. FrIf_GetState
69. FrIf_SetState
70. FrIf_SetWakeupChannel
71. FrIf_SendWUP
72. FrIf_GetPOCStatus
73. FrIf_GetGlobalTime
74. FrIf_AllowColdstart
75. FrIf_GetMacroticksPerCycle
76. FrIf_GetMacrotickDuration
77. FrIf_Transmit
78. FrIf_SetTransceiverMode
79. FrIf_GetTransceiverMode
80. FrIf_GetTransceiverWUReason
81. FrIf_ClearTransceiverWakeup
82. FrIf_CancelAbsoluteTimer
83. FrIf_GetAbsoluteTimerIRQStatus
84. FrIf_DisableAbsoluteTimerIRQ
85. FrIf_GetCycleLength
86. Optional 功能定义
87. FrIf_AllSlots
88. FrIf_GetChannelStatus
89. FrIf_GetClockCorrection
90. FrIf_GetSyncFrameList
91. FrIf_GetNumOfStartupFrames
92. FrIf_GetWakeupRxStatus
93. FrIf_CancelTransmit
94. FrIf_DisableLPdu
95. FrIf_GetTransceiverError
96. FrIf_EnableTransceiverBranch
97. FrIf_DisableTransceiverBranch
98. FrIf_ReconfigLPdu
99. FrIf_GetNmVector
100. FrIf_GetVersionInfo
101. FrIf_ReadCCConfig
102. FrIf_EnableBusMirroring
103. Interrupt 服务 Routines
104. FrIf_JobListExec_<FrIfCluster.ShortName>
105. Callback 通知
106. FrIf_CheckWakeupByTransceiver
107. Scheduled functions
108. FrIf_MainFunction_<FrIfCluster.ShortName>
109. Expected 接口
110. Mandatory 接口
111. Optional 接口
112. Configurable 接口
113. <Free_Op_A>
114. <Free_Op_B>
115. <UL_TxConflictNotification>
116. 时序图
117. 数据 Transmission
118. TransmitWithImmediateBufferAccess
119. TransmitWithDecoupledBufferAccess
120. ProvideTxConfirmation
121. 数据 Reception
122. ReceiveAndIndicate
123. ReceiveAndStore
124. ProvideRxIndication
125. Cancel Transmission
126. Prepare LPDU
127. 配置规范
128. How to read this chapter
129. Containers and 配置 parameters
130. FrIf
131. FrIfGeneral
132. FrIfCluster
133. FrIfController
134. FrIfTransceiver
135. FrIfLPdu
136. FrIfFrameTriggering
137. FrIfJobList
138. FrIfJob
139. FrIfCommunicationOperation
140. FrIfFrameStructure
141. FrIfPdusInFrame
142. FrIfPdu
143. FrIfTxPdu
144. FrIfRxPdu
145. FrIfPduDirection
146. FrIfConfig
147. FrIfClusterDemEventParameterRefs
148. FrIfFrameTriggeringDemEventParameterRefs
149. 发布信息
150. 附录
151. 不适用需求
152. Change history of AUTOSAR traceable items
153. Traceable item history of this document according to AUTOSAR Release R23-11
154. Added 规范 Items in R23-11
155. Changed 规范 Items in R23-11
156. Deleted 规范 Items in R23-11
157. Traceable item history of this document according to AUTOSAR Release R24-11
158. Added 规范 Items in R24-11
159. Changed 规范 Items in R24-11
160. Deleted 规范 Items in R24-11
161. Traceable item history of this document according to AUTOSAR Release R25-11
162. Added 规范 Items in R25-11
163. Changed 规范 Items in R25-11
164. Deleted 规范 Items in R25-11
