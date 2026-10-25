# Specification of Network Management Interface (`NetworkManagementInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 228 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_NetworkManagementInterface_228\AUTOSAR_CP_SWS_NetworkManagementInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_NetworkManagementInterface_228\AUTOSAR_CP_SWS_NetworkManagementInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_NetworkManagementInterface_228\zzgen\CP_SWS_NetworkManagementInterface.complete.txt`

## 文档简介

This document describes the concept, interfaces and configuration of the Network Management Interface module.

The Network Management Interface is an adaptation layer between the AUTOSAR Communication Manager and the AUTOSAR bus specific network management modules (e.g. CAN Network Management and FlexRay Network Management). This is also referred to as Basic functionality.

Additionally, this document describes the following optional features:

* interoperability between several networks connected to the same (coordinator) ECU that run AUTOSAR NM, where "interoperability" means that these networks can be put to sleep synchronously. This is also referred to as NM Coordinator functionality.
* Partial Network Cluster (PNC) handling, including handling of PNC timers and handling of synchronized PNC shutdown requests. If Partial Network is enabled, AUTOSAR NM aggregates all internal PNC requests (notified by ComM), all external PNC requests (notified by the <Bus>Nm's) and manage the PNC timers of each notified PNC. Additionally, if using the synchronized PNC shutdown functionality, AUTOSAR NM collect all synchronized PNC shutdown requests (notified by ComM) and control the PNC shutdown handling. For transmission of PN shutdown messages the AUTOSAR NM indicate the <Bus>Nm to fetch the aggregated PN shutdown requests. On reception of PN shutdown message the AUTOSAR NM acts as an interface layer between <Bus>Nm's and ComM. It forwards requests from <Bus>Nm's to ComM. Handling of PNC timer and handling of synchronized PNC shutdown requests are also referred to as Partial Network functionality.

Support of the NM Coordinator functionality and Partial Network functionality are optional. A Network Management Interface implementation can either support only Basic functionality or one of the following combinations:

* Basic functionality and NM Coordinator functionality.
* Basic functionality and Partial Network functionality.

The Network Management Interface is constructed to support generic lower layer modules that follow a fixed set of requirement for bus specific NM modules. This will allow third parties to offer support for OEM specific or legacy NM protocols such as direct OSEK NM.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document describes the concept, interfaces and configuration of the Network Management Interface module.

The Network Management Interface is an adaptation layer between the AUTOSAR Communication Manager and the AUTOSAR bus specific network management modules (e.g. CAN Network Management and FlexRay Network Management). This is also referred to as Basic functionality.

Additionally, this document describes the following optional features:

* interoperability between several networks connected to the same (coordinator) ECU that run AUTOSAR NM, where "interoperability" means that these networks can be put to sleep synchronously. This is also referred to as NM Coordinator functionality.
* Partial Network Cluster (PNC) handling, including handling of PNC timers and handling of synchronized PNC shutdown requests. If Partial Network is enabled, AUTOSAR NM aggregates all internal PNC requests (notified by ComM), all external PNC requests (notified by the <Bus>Nm's) and manage the PNC timers of each notified PNC.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations and terms relevant to the Network Management Interface module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| CanIf | CAN Interface module |
| CanNm | CAN Network Management module |
| ComM | Communication Manager module |
| EcuM | ECU State Manager module |
| Nm | Generic Network Management Interface module, this ist the abreviation used for this module throughout this specification |
| CBV | Control Bit Vector in NM-message |
| PNC | Partial network cluster |

| Terms: | Definition: |
|---|---|
| Bus-Sleep Mode | Network mode where all interconnected communication controllers are in the sleep mode. |
| NM-Channel | Logical channel associated with the NM-cluster |
| NM-Cluster | Set of NM nodes coordinated with the use of the NM algorithm. |
| NM-Coordinator | A functionality of the Nm which allows coordination of network sleep for multiple NM Channels. |
| NM-Message | Packet of information exchanged for purposes of the NM algorithm. |
| NM-Timeout | Timeout in the NM algorithm that initiates transition into Bus-Sleep Mode. |
| NM User Data | Supplementary application specific piece of data that is attached to every NM message sent on the bus. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for the Generic Network Management Interface.

Thus, the specification SWS BSW General shall be considered as additional and required specification for the Generic Network Management Interface.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

# The Generic Network Management Interface can only be applied to communication systems that support broadcast communication and 'bus-sleep mode'.
# There is only one instance of the Generic Network Management Interface layer for all NM-Clusters. This instance manages all channels where a NM is used.
# The Generic Network Management Interface shall only include the common modes, definitions and return values of different bus specific NM layers.
# The Generic Network Management Interface shall only include the common modes, definitions and return values of different bus specific NM layers.
# If 10BASE-T1S is used in combination with PLCA media access, then Nm Coordinator functionality are not supported.

  Note: Consequently, the configuration parameter NmCoordinatorSupportEnabled shall be set to false.
# NM Coordination functionality in combination with Partial Network functionality and vice versa is not supported.

Figure  shows a typical example of the AUTOSAR NM stack.

### 8. Specific 限制 of the current release
*原文标题：Specific limitations of the current release*

The following limitations reflect desired functionality that has yet not been implemented or agreed upon, but might be added for future releases:

* No support of a back-up coordinator ECU (fault tolerance).

Also; explicit support for OSEK NM has been completely removed from this specification as of AUTOSAR Release 4.0. OSEK NM can still be supported by extending the CanNm or by introducing a Complex Driver (CDD) on <Bus>Nm level as a generic BusNm. Supporting the OSEK NM through a CDD is not specified by AUTOSAR.

### 9. Applicability to automotive domains

The AUTOSAR NM Interface is generic and provides flexible configuration; it is independent of the underlying communication system and can be applied to any automotive domain under limitations provided above.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 11. 接口 to 模块
*原文标题：Interfaces to modules*

Figure  shows the interfaces provided to and required from other modules in the AUTOSAR BSW.

### 12. ComM, CanNm, J1939Nm, FrNm, UdpNm, generic bus specific NM layers and CDD

The Generic Network Management Interface module (Nm) provides services to the Communication Manager (ComM) and uses services of the bus specific Network Management modules:

* CAN Network Management ()
* FlexRay Network Management ()
* Ethernet Network Management ().
* J1939 Network Management ().

For Buses which do not need to provide Network Management Information on the bus like for example a LIN-bus the Bus-Type can be configured as "local Nm". With respect to callbacks, the Nm provides notification callbacks to the bus specific Network Management modules and calls the notification callbacks provided by the ComM.

In addition to the official AUTOSAR NM-modules above, Nm also support generic bus specific NM layers (<Bus>Nm). Any component which implements the required provided interfaces and uses the provided callback functions of Nm can be used as a bus specific NM. See  for the prerequisites for a generic bus specific NM.

Rationale: Nm is specified to support generic bus specific NM layers by adding generic lower layer modules as Complex Drivers.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 错误处理模块
*原文标题：Error handling modules*

Nm reports development errors to the Default Error Tracer according to .

### 14. BSW Scheduler

In case of the NM Coordinator functionality and depending on the configuration, the Nm will need cyclic invocation of it's main scheduling function in order to evaluate and detect when timers have expired.

### 15. 文件结构
*原文标题：File structure*

### 16. 代码文件结构
*原文标题：Code file structure*

Upstream requirements: , ,
⌈
The code file structure shall not be defined within this specification completely. At this point it shall be pointed out that the code-file structure shall include the following files named:
⌋

### 17. 头文件结构
*原文标题：Header file structure*

Upstream requirements: , , ,
⌈
The following header files shall be included by the Nm Interface module:

* `Std_Types`.h (for AUTOSAR standard types ) Note: `Platform_Types`.h (for platform specific types) is indirectly included via AUTOSAR standard types.
* `ComM_Nm`.h (for Communication Manager callback functions)
* `BswM_Nm`.h (If the BswM is used for CarWakeup-functionalitiy)
⌋

  Upstream requirements: , ,
⌈
The Nm Interface shall optionally include the header file of Default Error Tracer (depending on the pre-processor switch NmDevErrorDetect, see `ECUC_Nm_00203`).

* Det.h for service of the Default Error Tracer.
⌋

### 18. 需求 traceability
*原文标题：Requirements traceability*

The following tables references the requirements specified in  as well as  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Nm shall be applicable to different types of communication systems which are in the scope of AUTOSAR and support a bus sleep mode. |  |  |
| Nm shall provide services to coordinate shutdown of Nm-clusters independently of each other |  |  |
| It shall be possible to trigger the startup of all Nodes at any Point in Time |  |  |
| Nm shall provide a service to request to keep the bus awake and a service to cancel this request. |  |  |
| Nm shall put the communication controller into sleep mode if there is no bus communication |  |  |
| The Nm shall provide the current state of Nm |  |  |
| Nm shall inform application when Nm state changes occur. |  |  |
| The Nm interface shall signal to the application that all other ECUs are ready to sleep. |  |  |
| There shall be a deterministic time from the point where all nodes agree to go to bus sleep to the point where bus is switched off. |  |  |
| The timing of Nm shall be configurable. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 功能规范
*原文标题：Functional specification*

The NM Interface functionality consists of three parts:

* The Base functionality necessary to run, together with the bus specific NM modules, AUTOSAR NM on an ECU.
* The NM Coordinator functionality used by gateway ECUs to synchronously shut down one ore more busses.
* The Partial Network functionality is devided in 2 sub parts:

  * The handling of PNC requests (filtering, aggregation and monitoring) is used by any ECU which is member of an Partial Network.
  * The PNC timer handling is used by any ECU which is member of an Partial Network.
  * The synchronized PNC shutdown functionality used by PNC gateway ECUs in the role of a top-level PNC coordinator or intermediate PNC coordinator to synchronously shutdown particular PNCs across the PN topology.

### 20. Base functionality

The Generic Network Management Interface module (Nm) shall act as a bus-independent adaptation layer between the bus-specific Network Management modules (such as CanNm, J1939Nm, FrNm and UdpNm) and the Communication Manager module (ComM).

Note: The Nm does not provide interface functions beyond those specified in this document. The Nm will provide an interface to the ComM, that does not contain specific knowledge about the type of the underlying busses, and that nevertheless is sufficient to accomplish the necessary network management functions. The algorithm handled by the Nm is bus independent.

Note: It is also required that other service layer modules access network management functions exclusively via Nm and that no bypasses to bus specific NM functions exist

  Upstream requirements: ,
⌈
The Nm shall convert generic function calls from the ComM to bus specific functions of the bus specific NM layer.
⌋

  Upstream requirements: ,
⌈
The Nm shall convert callback functions called by the bus specific NM layers to generic callbacks to the ComM.
⌋

  Upstream requirements:
⌈
The Base functionality of Nm may be implemented completely or partly using macros.
⌋

### 21. NM Coordinator functionality

NM Coordinator functionality is a functionality of Nm that uses a coordination algorithm to coordinate the shutdown of NM on all, or one or more independent subsets of the busses that the ECU is connected to. Dependent on configuration, the coordination algorithm can be configured to achieve different levels of synchronization of the shutdown.

An ECU using an NM that actively performs the NM Coordinator functionality is commonly referred to as an NM Coordinator. However, in this specification this term is synonymous with the NM Coordinator functionality when used in requirements.

Note: Consider that certain bus types have different nomenclature on the terms Network, Channel, Cluster.

  Upstream requirements:
⌈
If the NM Coordinator functionality is configured, the configuration parameter NmCycletimeMainFunction shall be configured (see ).
⌋

Note: The NM Coordinator may use this to calculate the timeout status of internal timers.

### 22. Applicability of the NM Coordinator functionality

Upstream requirements:
⌈
The coordination algorithm shall be able to handle a topology where several coordinated busses are connected to one NM Coordinator.
⌋

  Upstream requirements:
⌈
The NM-Coordinator shall support two or more NM-Coordinators connected to the same NM Cluster.
⌋

  Upstream requirements: ,
⌈
The NM Coordinator shall be able to coordinate busses running the official AUTOSAR bus specific NMs as well as all other generic bus NMs implementing the required functionality, callbacks and interfaces.
⌋

Note: The required functionality, callbacks and interfaces are specified in . Coordinator Support for J1939Nm is not needed as the J1939Nm does not support shutdown handling.

  Upstream requirements:
⌈
The NM Interface configuration shall provide the parameter NmCoordinatorSupportEnabled to define if the support of the NM Coordinator functionality is present or not.
⌋

  Upstream requirements:
⌈
It shall be possible to configure multiple NM coordination clusters that shall be coordinated independently.
⌋

  Upstream requirements: , ,
⌈
Each bus shall belong to zero or one NM coordination cluster.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Keeping coordinated busses alive

Upstream requirements:
⌈
As long as the node implementing the NM Coordinator is not ready to go to sleep on at least one of the busses in a coordination cluster (i.e. that it has actively requested the network), the NM Coordinator shall ensure that the network is requested on all currently active busses in that coordination cluster.
⌋

  Upstream requirements:
⌈
As long as at least one bus in the coordination cluster is not ready to sleep (i.e. because another node than the NM Coordinator is requesting that bus), the NM Coordinator shall still ensure that the network is requested on all currently active busses in that coordination cluster even if the local ECU itself is ready to go to sleep on all busses of that coordination cluster.
⌋

Rationale: The bus specific NMs will indicate to Nm if the bus is ready to go to sleep or not by calling the callbacks `Nm_RemoteSleepIndication` and `Nm_RemoteSleepCancellation`. The local ECU will indicate if it is ready to go to sleep or not on a network using the API functions `Nm_NetworkRelease` and `Nm_NetworkRequest`.

Rationale: The Nm requests the network on a bus by calling the bus specific NM function <Bus>`Nm_NetworkRequest`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 关机 of coordinated busses
*原文标题：Shutdown of coordinated busses*

The level of synchronization achievable is dependent on the configuration. See ,  shows an overview of the coordination algorithm. As described in Section 7.2.1, the coordination algorithm and coordinated shutdown shall be applied independently per NM coordination cluster.

Note: There is no limitation where the actions performed by the coordination algorithm shall take place. This can be done either by the Nm main function ( `Nm_MainFunction` ) or module indication / callbacks.

  Upstream requirements: , ,
⌈
When all networks of a coordination cluster are either ready to go to sleep or already in "bus-sleep mode" the NM Coordinator shall start the coordinated shutdown on all awake networks. The NM Coordinator shall evaluate continuously if the coordinated shutdown can be started.
⌋

Rationale: Evaluation of shutdown conditions can be also done in other API calls then the main function. The evaluation can be segmented then to check only the specific conditions affected by the API calls there, hence it is not necessary to re-evaluate all conditions in every main processing period and every API call.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Coordination of nested sub-busses

To support the coordination of nested sub-busses the Nm-Coordinators need be configured to build up a coordination hierarchy. The top most NM Coordinator has only actively coordinated channels (NmActiveCoordinator == TRUE) per coordination cluster. This NM Coordinator has to initiate the coordinated shutdown for all other coordinators. An nested NM Coordinator receive his shutdown indication information from his passively configured channel (NmActiveCoordinator == FALSE) and provides this information to following NM Coordinators via his actively coordinated channels ( NmActiveCoordinator == TRUE).

The  will explain this as an example.

The exemplary topology shown in  has the following coordination approach. GW 1 have configured the channel onto Network 1 and Network 2 as actively coordinating channels. Where GW 2 is configured with Network 2 connection as passively coordinated channel, but with actively coordinated channel on Network 3. GW 3 than needs to be configured on Network 3 as passively coordinated channel but as actively coordinated channel for his connection to the Network 4.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Calculation of 关机 timers
*原文标题：Calculation of shutdown timers*

The coordination algorithm is quite flexible since the level of synchronization achievable depends on the configuration of switches and timers. Depending on which event or point in time that is the goal to synchronize on, the configuration shall be done differently. This Chapter contains guide on how to achieve three different levels of synchronization. It is up to the configuration to follow these guidelines or to achieve a separate order of synchronization by choosing his/her own particular configuration. Therefore, this Section will not contain any requirement, only recommendations.

Note that absolute synchronization will never be possible to achieve. The jitter factors that determine the preciseness of the synchronization involve the processing period of the Nm, the exactness of the timers and the busload for non-deterministic busses. Correctly configured, the Use Cases described below will give the best possible synchronization that is achievable considering these circumstances.

Previous version of the NM Coordinator included the possibility for the coordinator algorithm to delay the start of the coordinated shutdown "a number of rounds".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 同步 Use Case 1 - Synchronous command
*原文标题：Synchronization Use Case 1 - Synchronous command*

This Use Case focuses on how to synchronize the point in time where the different networks are released. This results in the fastest possible total shutdown of all networks, but with the downside that the networks will not enter "bus-sleep mode" at the same time.

Rationale: One example of this Use Case is when several CAN networks shall be kept alive as long as any CAN-node is requesting one of the networks; but when all nodes are ready to go to sleep it does not matter if "bus-sleep mode" is entered at the same time for the different networks.

Since the Use Case does not consider any cyclic behavior of the networks, the synchronization parameter NmSynchronizingNetwork shall be set to FALSE for all networks and no bus specific NM shall be configured to invoke the `Nm_SynchronizationPoint` callback. To achieve the fastest possible shutdown, the shutdown timer parameter NmGlobalCoordinatorTime needs to be set to 0.0.

### 28. 同步 Use Case 2 - Synchronous initiation
*原文标题：Synchronization Use Case 2 - Synchronous initiation*

This Use Case is an extension of Use Case 1, but here consideration is taken to the fact that for some networks the request to release the network will only be acted upon at specific points in time. This Use Case will command a simultaneous shutdown like in Use Case 1, but will wait until a point in time suitable for the synchronizing network.

Rationale: One example of this Use Case is when one FlexRay network and several CAN networks where the time when all networks are active shall be maximized, but the networks shall still be put to sleep as fast as possible.

Since this Use Case shall consider the cyclic behavior of a selected network, one of the networks shall have its synchronization parameter NmSynchronizingNetwork set to TRUE while the other networks shall have this parameter set to FALSE. The synchronizing network's bus specific NM shall also be configured to invoke the `Nm_SynchronizationPoint` callback at suitable points in time where the shutdown shall be initiated. To achieve the fastest possible shutdown, the shutdown timer parameter NmGlobalCoordinatorTime needs to be set to 0.0.

### 29. 同步 Use Case 3 - Synchronous 网络休眠
*原文标题：Synchronization Use Case 3 - Synchronous network sleep*

This Use Case will focus on synchronizing the point in time where the different networks enters "bus-sleep mode". It will wait for indication from a synchronizing network, and then delay the network releases of all networks based on timing values so that the transition from "network mode" (or "prepare bus-sleep mode") into "bus-sleep mode" is as synchronized as possible.

Rationale: One example of this Use Case is when one FlexRay network and several CAN networks shall stop communicating at the same time.

Since this Use Case shall consider the cyclic behavior of a selected network, of the networks - preferably the cyclic one - shall have its synchronization parameter NmSynchronizingNetwork set to TRUE while the other networks shall have this parameter set to FALSE. The synchronizing network's bus specific NM shall also be configured to invoke the `Nm_SynchronizationPoint` callback at suitable points in time where the shutdown shall be initiated.

To calculate the shutdown timer `TSHUTDOWN_CHANNEL` of each network, specific knowledge of each networks timing behavior must be obtained.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 示例
*原文标题：Examples*

In the first case ( ), the synchronizing network holds the largest `TSHUTDOWN_CHANNEL`, which will therefore equal the NmGlobalCoordinatorTime. For the synchronizing network, the shutdown delay timer will be NmGlobalCoordinatorTime - `TSHUTDOWN_CHANNEL`, which is zero, but then a small amount of time is added to make sure that the Nm will wait to release the network between the two synchronization points. For the Non-cyclic network, the shutdown delay timer will simply be NmGlobalCoordinatorTime - `TSHUTDOWN_CHANNEL`.

In the second case ( ), the non-cyclic network takes very long time to shut down and therefore holds the largest `TSHUTDOWN_CHANNEL`. The NmGlobalCoordinatorTime has now been obtained by taking the synchronizing network's (slightly shorter) `TSHUTDOWN_CHANNEL` adding `TSYNCHRONIZATION_INDICATION` once to this value.

For the synchronizing network, the shutdown timer will be NmGlobalCoordinatorTime - `TSHUTDOWN_CHANNEL`, with a small amount of time added to make sure that the Nm will wait to release the network between the two synchronization points. For the Non-cyclic network, the shutdown timer will simply be NmGlobalCoordinatorTime - `TSHUTDOWN_CHANNEL`.

### 31. the coordinated 关机的唤醒 and abortion
*原文标题：Wakeup and abortion of the coordinated shutdown*

Nm is not responsible for normal wakeup of the node or the networks this will be done by the COM Manager (ComM).

### 32. External 网络唤醒
*原文标题：External network wakeup*

For both Basic functionality and NM Coordination functionality, Nm will forward wakeup indications from the networks (indicated by the bus specific NMs calling the callback `Nm_NetworkStartIndication`) to the ComM by calling `ComM_Nm_NetworkStartIndication`(). ComM will then call `Nm_PassiveStartUp`, which will be forwarded by Nm to the corresponding interface of the bus specific NM. Processing of wake-up events for channels in bus-sleep (related to transceiver and controller state) will be handled by EcuM and ComM. No interaction of the Nm apply here. Nm will get the network request from ComM as statet above, depending on the wake-up validation and the respective communication needs.

  Upstream requirements:
⌈
If the ComM calls `Nm_PassiveStartUp`() for a network that is part of a coordinated cluster of networks, the Nm coordinator functionality shall treat this call as if the ComM had called `Nm_NetworkRequest`(). In case BusNmType is not set to `NM_BUSNM_LOCALNM` the Nm shall forward a call of <Bus>`Nm_NetworkRequest` to the lower layer and accordingly, the network shall be counted as requested by the NM coordinator.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Coordinated 唤醒
*原文标题：Coordinated wakeup*

Depending on the configuration, ComM can start multiple networks based on the indication from one network. It is recommended to configure the ComM to automatically start all network of a NM Coordination Cluster if one of the networks indicates network start, but this is not always necessary. Since the wakeup of network is outside the scope of Nm, this is independent of if the NM Coordination functionality is used or not.

### 34. Abortion of the coordinated 关机
*原文标题：Abortion of the coordinated shutdown*

If the NM Coordination functionality is activated and coordinated shutdown has been initiated on an NM Coordination Cluster, dependent on the coordinator algorithm configuration it might take time before each included bus is actually released. If any node on one of the coordinated buses changes its state and starts requesting the network before all networks are released, race conditions can occur in the coordination algorithm. This can happen in four ways:

# A node on a network that has not yet been released and is still in 'network mode' starts requesting the network again. This will be detected by the bus specific NM which will inform Nm by calling `Nm_RemoteSleepCancellation`.
# A node on a network that has already been released and has indicated "prepare bus-sleep mode" but not "bus-sleep mode" starts requesting the network again. This will be detected by the bus specific NM that will automatically change state to "network mode" and inform Nm by calling `Nm_NetworkMode`.
# The ComM requests the network on any of the networks in the NM Coordination Cluster.
# The coordinator which actively coordinates this network sends Nm message with cleared Ready-Sleep Bit.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Partial 网络 functionality
*原文标题：Partial Network functionality*

An overview regarding the partial network cluster functionality can be found in document Guide to Mode Management

### 36. PNC bit vector filter algorithm

The intention of the PNC bit vector filter algorithm is to include all PNC requests that are relevant for the ECU for the PNC handling and to exclude all received PNC requests that are not relevant for the ECU. Additionally the filter algorithm is used to qualify relevant PNC request for transmission. PNC requests which are qualified to be relevant (re-)start the corresponding PNC timer.

In order to distinguish between PNC requests that are relevant for the ECU and PNC requests that are not relevant, the NM evaluates the PNC bit vector received by the <Bus>Nm (passive PNC requests, initiated remotely by another ECU in the network) and it evaluates the PNC bit vector transmitted by ComM (active request, initiated by a local application). Every bit of the PNC bit vector represents one PNC.

PNCs are statically configured. One PNC denotes the participation of an ECU to a specific partial network cluster (PNC).

  Upstream requirements: ,
⌈
The PNC bit vector filter algorithm shall evaluate the bytes of the given PNC bit vector in the context of `Nm_PncBitVectorRxIndication`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Aggregation of PNC requests

### 38. Aggregation of internal and external Partial 网络 Cluster
*原文标题：Aggregation of internal and external Partial Network Cluster*

Upstream requirements: ,
⌈
If NmPnEiraCalcEnabled is set to TRUE, then Nm shall provide the possibility to store external and internal requested PNCs combined over all NM-channels where NmPnEnabled is set to TRUE. At initialization the values of all PNCs within EIRA shall be set to 0 (PNC released).
⌋

  Upstream requirements: ,
⌈
If

* NmPnEiraCalcEnabled is TRUE
* and a PNC bit vector is received via `Nm_PncBitVectorRxIndication`(<Nm-channel>, <PNC bit vector of external PNC requests>) or `Nm_ForwardSynchronizedPncShutdown`(<NM-channel>, <PNC bit vector PNCs indicated for a synchronized shutdown>)
* and PNCs are requested within this message (bits set to 1)
* and the requested PNCs are set to 1 within the configured PN filter mask

then NM shall store the request information (value 1) for these PNCs as "PNC requested".
⌋

  Upstream requirements: ,
⌈
If

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 130 章（内容从略，见纯文本全文）

39. Aggregation of external Partial 网络 Cluster
40. EIRA / ERA 状态 and PNC reset timer 处理
41. Synchronized PNC 关机 functionality
42. Prerequisites of bus specific 网络管理模块
43. Prerequisites for 基础 functionality
44. Prerequisites for NM Coordinator functionality
45. Prerequisites of Partial 网络 functionality
46. Prerequisite for aggregation of PNC requests
47. Prerequisites for synchronized PNC 关机 functionality
48. 配置 of global parameters for bus specific networks
49. NM_BUSNM_LOCALNM
50. Multicore Distribution
51. Additional Functionality
52. Nm_CarWakeUpIndication
53. Nm_StateChangeNotification
54. 错误分类
55. Development 错误
56. Runtime 错误
57. Production 错误
58. Extended Production 错误
59. API 规范
60. Imported 类型
61. 类型定义
62. Nm_ModeType
63. Nm_StateType
64. Nm_BusNmType
65. Nm_ConfigType
66. 功能定义
67. Standard 服务 provided by NM 接口
68. Nm_Init
69. Nm_PassiveStartUp
70. Nm_NetworkRequest
71. Nm_NetworkRelease
72. Communication 控制服务 provided by NM 接口
73. Nm_DisableCommunication
74. Nm_EnableCommunication
75. Partial 网络服务 provided by NM 接口
76. Nm_RequestSynchronizedPncShutdown
77. Nm_UpdateIRA
78. Extra 服务 provided by NM 接口
79. Nm_SetUserData
80. Nm_GetUserData
81. Nm_GetPduData
82. Nm_RepeatMessageRequest
83. Nm_GetNodeIdentifier
84. Nm_GetLocalNodeIdentifier
85. Nm_CheckRemoteSleepIndication
86. Nm_GetState
87. Nm_PnLearningRequest
88. Call-back 通知
89. Standard Call-back 通知
90. Nm_NetworkStartIndication
91. Nm_NetworkMode
92. Nm_BusSleepMode
93. Nm_PrepareBusSleepMode
94. Nm_SynchronizeMode
95. Nm_RemoteSleepIndication
96. Nm_RemoteSleepCancellation
97. Nm_SynchronizationPoint
98. Nm_CoordReadyToSleepIndication
99. Nm_CoordReadyToSleepCancellation
100. Nm_ForwardSynchronizedPncShutdown
101. Nm_PncBitVectorRxIndication
102. Nm_PncBitVectorTxIndication
103. Nm_PncBitVectorTxConfirmation
104. Extra Call-back 通知
105. Nm_PduRxIndication
106. Nm_StateChangeNotification
107. Nm_RepeatMessageIndication
108. Nm_TxTimeoutException
109. Nm_CarWakeUpIndication
110. Scheduled functions
111. Nm_MainFunction
112. Expected 接口
113. Mandatory 接口
114. Optional 接口
115. Configurable 接口
116. NmCarWakeUpCallout
117. Version Check
118. 时序图
119. 基础 functionality
120. Seq of NM Coordinator functionality
121. Sequence of Partial 网络 functionality
122. 配置规范
123. How to read this chapter
124. 配置 parameters
125. Nm
126. Global configurable parameters
127. NmGlobalConfig
128. NmGlobalConstants
129. NmGlobalProperties
130. NmGlobalFeatures
131. Channel configurable parameters
132. NmChannelConfig
133. NmPnFilterMaskByte
134. NmBusType
135. NmGenericBusNmConfig
136. NmStandardBusNmConfig
137. 发布信息
138. 附录
139. 不适用需求
140. Change history of AUTOSAR traceable items
141. Traceable item history of this document according to AUTOSAR Release R22-11
142. Added 规范 Items in R22-11
143. Changed 规范 Items in R22-11
144. Deleted 规范 Items in R22-11
145. Added Constraints in R22-11
146. Changed Constraints in R22-11
147. Deleted Constraints in R22-11
148. Traceable item history of this document according to AUTOSAR Release R23-11
149. Added 规范 Items in R23-11
150. Changed 规范 Items in R23-11
151. Deleted 规范 Items in R23-11
152. Added Constraints in R23-11
153. Changed Constraints in R23-11
154. Deleted Constraints in R23-11
155. Traceable item history of this document according to AUTOSAR Release R24-11
156. Added Constraints in R24-11
157. Changed Constraints in R24-11
158. Deleted Constraints in R24-11
159. Added 规范 Items in R24-11
160. Changed 规范 Items in R24-11
161. Deleted 规范 Items in R24-11
162. Traceable item history of this document according to AUTOSAR Release R25-11
163. Added Constraints in R25-11
164. Changed Constraints in R25-11
165. Deleted Constraints in R25-11
166. Added 规范 Items in R25-11
167. Changed 规范 Items in R25-11
168. Deleted 规范 Items in R25-11
