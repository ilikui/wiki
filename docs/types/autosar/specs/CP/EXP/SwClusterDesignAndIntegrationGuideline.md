# Explanation of Software Cluster Design And Integration Guideline for Classic Platform (`SwClusterDesignAndIntegrationGuideline`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 975 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_SwClusterDesignAndIntegrationGuideline_975\AUTOSAR_CP_EXP_SwClusterDesignAndIntegrationGuideline.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_SwClusterDesignAndIntegrationGuideline_975\AUTOSAR_CP_EXP_SwClusterDesignAndIntegrationGuideline.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_SwClusterDesignAndIntegrationGuideline_975\zzgen\CP_EXP_SwClusterDesignAndIntegrationGuideline.complete.txt`

## 文档简介

This explanatory provides additional information to Software Clusters of the AUTOSAR Standard.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This explanatory provides additional information to Software Clusters of the AUTOSAR Standard.

### 2. 目标
*原文标题：Objectives*

The goal of this document is to

* provide an overview about the technical approach Software Clusters
* explain the utilization of Software Clusters in AUTOSAR Classic Platform
* lists design and feature restrictions
* provide some examples

### 3. 范围
*原文标题：Scope*

This document discusses only Software Clusters in the AUTOSAR Classic Platform!

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Requirements on Software Cluster Connection that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| SwCluC | Software Cluster Connection |

| Terms: | Description: |
|---|---|
| Software Cluster | A Software Cluster groups all AUTOSAR artifacts that are relevant to deploy software on a machine. The full definition is given in document |
| Software Cluster Connection | The Software Cluster Connection is the BSW module that provides the features to |

* connect the Binary Objects deployed on the same machine
* substitute not locally-available BSW modules in an Application Software Cluster, whose interfaces are required for the integrated SW, by so called Proxy Modules.
* implement the VFB communication features between Software Clusters together with RTE with the means of an RTE Implementation Plug-In
| machine | A machine consists of a set of computing resources - such as microcontroller cores, memory or peripheral (e.g. communication) devices - and has the ability to execute software applications. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related Documentation*

### 6. 软件 Clusters in Classic Platform
*原文标题：Software Clusters in Classic Platform*

### 7. 软件 Clusters in a nutshell
*原文标题：Software Clusters in a nutshell*

This section provides a compact overview about the general solution approach. Please apologize that further details are only given in the section where the detailed solutions are elaborated.

The approach of Software Clusters in the AUTOSAR Classic Platform, is considering the fact that several ECUs have an inner structure, which is crucial for the SW system. This is illustrated in figure , which shows the conceptual meta model:

The topology of a vehicle has several ECUs. One ECU can have 1 to N microcontrollers. Since microprocessors are in scope of AUTOSAR Adaptive Platform, they are not considered here. On one micro controller, 1 to N Machines are hosted. In case of N > 1, those are virtual and share the resources of the micro controller. Furthermore, each Machine owns one BSW Stack, e.g. from AUTOSAR perspective it is an instance of a Classic Platform Architecture!

This is considered as state of the art, even if the AUTOSAR Methodology might not be able to describe all details of such setups - not to mention that hypervisors are not standardized by AUTOSAR.

With Software Clusters, the overall software of a Classic Platform Architecture is split into independent parts.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 设计 Philosophy, Goals and Non-Goals
*原文标题：Design Philosophy, Goals and Non-Goals*

The goal of Software Clusters is to provide flexibility for design and implementation of an AUTOSAR system and, by modularization, make it possible to localize the impact of a change in one cluster. Some architectural changes can be introduced step wise, and certain implementation changes no longer require a rebuild of the complete software. It is explicitly not the goal, to support every possible usecase and solve every possible problem, or to reinvent the Adaptive Platform.

While Software Clusters make it possible to reduce the rate of change, it is still possible to rebuild every Software Cluster, including the Host Software Cluster. Some usecases will be solved only partially by this concept (or not at all), and still require a change to the BSW and a rebuild of the Host Software Cluster. The features in this concept will make changes to the BSW easier, so it might even be that the Host Software Cluster is rebuilt more often than before. But instead of rare, large changes to the BSW, the concept enables frequent, smaller changes.

### 9. Relation to EcucPartitions

The Software Cluster concept targets microcontrollers, which typically are very resource constrained. Therefore, it is important that this concept adds as little overhead as possible. Simply put: you only pay for what you use, but you also only get what you pay for. The relation between Software Clusters and EcucPartitions is one area where this is evident.

EcucPartitions offer the possibility to separate functions. Since they are implemented using OsApplications, separation of memory accesses and of runtime behavior can be achieved to a certain degree. On the other hand, the execution of multiple OsApplications also causes a relatively large overhead, requiring task switches (which can take hundreds of processor cycles) and additional administrative overhead (depending on the current and next task, it might be required to change the execution level, reconfigure the MPU, etc.). With a growing number of EcucPartitions, this overhead can become significant. Therefore, it is possible to reuse one EcucPartition in multiple Software Clusters.

At the same time, a system designer wants to combine functions from different EcucPartitions inside one cluster.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Assumption on the applicable target ECUs

Clustering a Classic Platform architecture shall work with state-of-the-art micro controllers. This means on one hand that enough resources especially w.r.t. RAM, ROM and CPU-Cores and their calculation power exist. This might also imply a 32-bit architecture or higher.

On the other hand, a utilization of the concepts and features on today's existing platforms are in scope, supporting various optimizations. For instance, a general software separation of Software Clusters by hardware features should be avoided since this usually uses rare resources of micro controller.

Targets with Memory Management Units are out of scope or at least are not especially considered by the standardized solution.

### 11. Assumption on safety mechanisms

The AUTOSAR CP Architecture assumes that communication local to an ECU utilizing RAM is safe. Therefore, the communication between Software Clusters on the same machine is also considered as safe. Integrity of machine local communication is ensured by the usage of partitions (with memory protection) and sufficiently reliable hardware (ECC RAM, suitable FID rates, etc.)

This means spatial and temporal separation of software needs to be implemented on the target microcontroller, based on the already introduced concept of partitions in the AUTOSAR Classic Platform architecture. This concept does not introduce additional methods to ensure such separation.

### 12. Assumption on the to-be-clustered SW 系统
*原文标题：Assumption on the to-be-clustered SW system*

Note: The numbers given in this chapter shall only express the rough magnitude to indicate a certain complexity. This framework was used in the concept development to prioritize sub-features, optimization capabilities, and to discuss acceptable restrictions of the solution. Nevertheless, in case of accepted restrictions, those will be part as constrains to the elaborated specifications.

The Software Components, which are mapped to different Software Clusters, shall aim for loose coupling.

'In computing and systems design, a loosely coupled system is one in which each of its components has, or makes use of, little or no knowledge of the definitions of other separate components. Subareas include the coupling of classes, interfaces, data, and services.' (See Wikipedia 'Loose coupling is the opposite of tight coupling.')

The concept assumes that the number of interfaces across Software Clusters is much smaller than the total number of interfaces between Software Components. This could be condensed into some rough estimate that the interface data of Software Clusters should be at least a factor of 10 smaller than the internal data flow (approx. 3k/machine).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Assigning 存储 to 软件 Clusters
*原文标题：Assigning Memory to Software Clusters*

Typically, the overall memory of microcontrollers is composed out of different memory types each serving for a specific purpose (e.g. RAM, FLASH program ROM, FLASH data ROM)). In addition, a specific segment of a memory type may have different performance for different use cases (e.g. access speed might be different for different microcontroller cores.) Splitting a monolithic CP software architecture into individual buildable units requires that each Software Cluster provider has a clear notion which memory can be used for which purpose. Since microcontrollers typically do not support memory virtualization, it is not only required to agree on the amount of memory, but also on the specific address ranges.

The suggested methodology works as following:

The machine architect splits the overall memory into logical memory slots and belonging directions for which purpose such memory slot can be used. Those directions correspond to the physical properties of such memory slots (e.g. .RAM or FLASH) but also to the software partitioning (e.g. spatial separation by MPU), functional grouping (e.g. memory of calibration data set) and performance goals.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Assigning Run-time to 软件 Clusters
*原文标题：Assigning Run-time to Software Clusters*

First of all, please be aware that the use case 'freedom from unintended side effects' in a clustered system is different from 'freedom from interference' as a safety goal of ISO26262 . The safety considerations usually assume first a design for coexistence and later apply measures to avoid interference, or at least to have a safe detection and failure reaction in case of interference.

With the native means of an AUTOSAR OS, it is almost impossible to create a schedule, which guarantees a complete 'freedom from unintended side effects' between various software sub systems. In a pure priority-based scheduling, it is always possible to occupy more calculation time on a given priority level, than is acceptable for other functionalities on the same or a lower priority. This can only be strictly avoided, by assigning a distinct set of OS Tasks on a dedicated core to each software sub system, which very likely is not affordable in terms of resources.

Consequently, managing a distributed development with Software Clusters requires the upfront design of an overall schedule, and the management of calculation time budgets in such a schedule.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 服务 Oriented Communication in 软件 Clusters
*原文标题：Service Oriented Communication in Software Clusters*

Changing requirements or general software rework may require a Software Cluster to offer- and or consume additional or different SomeIPEvents or SomeIPMethods. In contrast to conventional signal based communication, the PDUs which contain the serialized SomeIPEvents / SomeIPMethod-arguments respectively return values are actively controlled by mode management. This means that only after requesting a service, the PDU is actually transported from- and to the application SW-C via the BSW stack. Changes in the set of SomeIPEvents or SomeIPMethods that a Software Cluster provides or consumes hence require changes in the mode management. When it is not possible or desirable to build a new version of the Host Software Cluster, changes can also brought in by a mix of pre-prepared configuration elements and post-build configuration of the Host Software Cluster. Since the general pattern in mode management is identical for all service oriented communication, parts can be re-used. Configuration elements that have to be created already during initial configuration(pre-compile) are:

* A set of wildcard BswMModeRequest- and BswMSwitchPort for new SomeIPEvents or SomeIPMethods.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 设计 hints for clustered systems
*原文标题：Design hints for clustered systems*

Since the Software Cluster concept builds on existing technologies and concepts, introducing them adds only few additional design considerations.

If a cross cluster interface cannot be connected, the RTE method call (for example `Rte_IRead`) will return `RTE_E_UNCONNECTED` and the output value will be the ComSpec.initValue (for example NonqueuedSenderComSpec.initValue).

The notion that required ports might not be connected, already exists in systems that do not use Software Clusters. However, in some domains, this behavior is not used and some developers might assume that the interfaces they require are always present. It is therefore important to evaluate the impact of unconnected interfaces on those Software Components, who participate in cross cluster communication.

There are three ways, in which this can affect a Software Component:

# The SW-C is not affected, if the input value is the init value. In this case, the SW-C can be used as-is. Example: the init value is a reserved value with neutral behavior.
# The SW-C can function with the input value, but has to distinguish between the init value and other values.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 模式管理 in a clustered AUTOSAR ECU
*原文标题：Mode Management in a clustered AUTOSAR ECU*

The current version of the AUTOSAR BSW module, SwCluC, currently lacks a dedicated specifcation of an EcuM or BswM proxy module. Nonetheless, the specification encompasses features that enable mode communication across Software Cluster boundaries. Consequently, mode requests initiated by Application Software Clusters targeting the Host Software Cluster can be realized through the existing sender-receiver communication feature. (See ). Conversely, the modes facilitated by the BSW Mode Manager can be relayed to Application Software Clusters using the mode communication functionality. (See )

This process may necessitate manual intervention by an ECU integrator to connect modeRequestPorts and modeNotificationPorts effectively. Given that mode switch ports can potentially influence the ECU's scheduling, a thorough analysis by the ECU integrator is imperative prior to integrating additional modes into the BswM configuration. For example, if mode switches are used to schedule runnables, supplementary OS tasks and dispatchers might be required.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 软件 Clusters 示例
*原文标题：Software Clusters Example*

### 19. the 示例系统的概述
*原文标题：Overview of the example system*

The figure below shows an example of system model which consists of 2 Software Clusters.

The ARXML for this example is given in the listings in the Section .

The example consists of 2 Software Compositions:

* `Compo_AHB`, with 3 Software Components: Anton, Hugo and Bernd
* `Compo_Host`, with 2 Software Components: Claus and Celine

Each of them have Providing and Requiring Ports, some of which are connected on Top-Level view.

There are 2 Software Clusters:

* `SwClu_AHB`, which contains `Compo_AHB`
* `SwClu_Host`, which contains `Compo_Host`

They are described separately, based on the neccessary System Elements. Of course, in a real system, a cluster would usually contain several Software Compositions.

### 20. 接口
*原文标题：Interfaces*

As shown in figure , the 2 Software Clusters have the following interfaces:

* `IF_Celine`; ports connected from `SwClu_Host` to `SwClu_AHB`
* `IF_Bernd`; ports connected from `SwClu_AHB` to `SwClu_Host`
* `IF_Hugo`; open requiring port on `SwClu_Host`
* `IF_Anton`; open providing port on `SwClu_AHB`

Figure  also shows the relevant service dependencies, through which a properly configured Host Software Cluster and its operating system can run the Software Cluster AHB.

### 21. Os Proxy 配置
*原文标题：Os Proxy configuration*

For the required Os Services, the proxy pattern for Os is used. Figure  shows the configuration for the Os High and Low Proxy.

In that example, the host configuration consists of 2 OsTasks: `OsTask_50ms` and `OsTask_10ms`. The 10ms task is split into two phases, leading to 3 SwCluCOsProxyOsTasks: `OsProxyOsT_10ms_Ph1`, `OsProxyOsT_10ms_Ph2`, `OsProxyOsT_50ms`. In the Host Software Cluster, each of the SwCluCOsProxyOsTasks has a so called Dispatcher. For each dispatcher, a Runnable and an RTEEvent is generated, which has to be scheduled in the host's OsTask. The event triggers the runnable, which will call the corresponding task body in the Application Software Cluster via the binary manifest.

In the Application Software Cluster AHB, there is a local implementation for the Os, following the Os High Proxy pattern. There are 3 SwCluCOsProxyOsTask: `OsProxyOsT_10ms_Ph1`, `OsProxyOsT_10ms_Ph2` and `OsProxyOsT_50ms`. Each of them has a corresponding Os task: `OsTask_10ms_Ph1`, `OsTask_10ms_Ph2`, `OsTask_50ms`. The matching timing events, from the Software Component's TimingEvents, are mapped to these proxy tasks.

Figure  does not show the `OsBaseSocket_AHB` and `OsBaseConfigCheck_AHB`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 软件 Clusters的示例 Extract
*原文标题：Example Extract of Software Clusters*

Based on the example system Model, it is possible to generate a cluster extract of the two Software Clusters `SwClu_Host` and `SwClu_AHB`. Through this step, the system will be split into two separate parts:

Similar to the EcuExtract mechanism, each Software Cluster will be extracted from the system, and described on its own. In addition to that, the dependencies are referenced from the common RessourcePool. The main parts of such an extract are:

* Software Components
* Software Compositions
* Toplevel Root Composition
* Software Clusters
* COM-Resources
* CpSoftwareClusterServiceResource
* Service-Needs

with their corresponding mappings. The first three items are already present for an EcuExtract, while the rest is specific to Software Clusters.

This concept uses the analogy to the EcuExtract mechanism, as the task is basically the same. The aim was that it should be possible to reuse the currently available tools and toolchains for configuration and generation, with only minor changes.

In the example model, you can find ARXML-examples for each Software Cluster.

### 23. 示例配置 of ECUC
*原文标题：Example Configuration of ECUC*

To enable the generation and implementation of the service layer of a Software Cluster, also new ECU Configuration elements (EcuC) are introduced with this concept. In this example, the configuration describes the settings of the Os High Proxy and the BinaryManifest, as well as the attributes of the Software Clusters itself. Such attributes could be: the type of the Software Clusters, its connection settings, or settings needed by the build environment, like compiler flags. It also configures the Software Cluster Communications Layer, e.g. whether or not it is implementated via RIPS-plugin.

### 24. ECUC 配置 of Os High Proxy
*原文标题：ECUC Configuration of Os High Proxy*

The example ARXMLs show a basic configuration of the Os High Proxy, which consists of the Os Task configuration for the proxy-tasks `OsTask_10ms_Ph1`, `OsTask_10ms_Ph2` and `OsTask_50ms`, and their settings for Priority, Period, Schedule and Activation. Also, an OsApplication "Core1QM" is configured there, to define the same context for both tasks.

### 25. 文件概述
*原文标题：File overview*

To ease the creation and maintenance of the example, the model is split into several files. In addition, this file split is used to compose the mode to the different steps in the methodology. The table describes which files have to be used to get the complete model of a methodology step.

| Component Models | Resource Pool | ECU_SYSTEM_DESCRIPTION | SW_CLUSTER_SYSTEM_DESCRIPTION Host | SW_CLUSTER_SYSTEM_DESCRIPTION AHB | ECU configuration AHB |
|---|---|---|---|---|---|
| PlatformBase_Types.arxml | x |  | x | x | x |
| Platform_Types.arxml | x |  | x | x | x |
| DOC_SwCluC_SwcAnton_SWCD.arxml | x |  | x | x | x |
| DOC_SwCluC_SwcBernd_SWCD.arxml | x |  | x | x | x |
| DOC_SwCluC_SwcHugo_SWCD.arxml | x |  | x | x | x |
| DOC_SwCluC_SwcCeline_SWCD.arxml | x |  | x | x | x |
| DOC_SwCluC_SwcClaus_SWCD.arxml | x |  | x | x | x |
| DOC_SwCluC_SwcCompoAHB_SWCD.arxml | x |  | x | x | x |
| DOC_SwCluC_SwcCompoHost_SWCD.arxml | x |  | x | x | x |
| DOC_SwCluC_Sys_TopLvl_SWCD.arxml | x |  | x | x | x |
| DOC_SwCluC_Sys_SwClusters.arxml |  |  | x | x | x |
| DOC_SwCluC_Sys_Descr_TopLvl.arxml |  |  | x |  |  |
| DOC_SwCluC_Sys_HWT.arxml |  |  | x | x | x |
| DOC_SwCluC_Sys_ResPoolCommunicationResources.arxml |  | x | x | x | x |

`DOC_SwCluC_Sys_Res`

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. From 建模 to 代码
*原文标题：From model to code*

This section shall illustrate how the AUTOSAR model of a Software Cluster is handled over the different methodology steps, and finally processed in the code.

### 27. Rte and RIPS

As previously described, three Software Components are integrated in the Software Cluster AHB:

* SwcAnton (`DOC_SwCluC_SwcAnton_SWCD`.arxml)
* SwcBernd (`DOC_SwCluC_SwcBernd_SWCD`.arxml)
* SwcHugo (`DOC_SwCluC_SwcHugo_SWCD`.arxml)

All are instantiated in the CompositionSwComponentType SwcCompoAHB (`DOC_SwCluC_SwcCompoAHB_SWCD`.arxml ) that is used to describe the application software of AHB. A CpSoftwareCluster.swComponentAssignment exists for `SwClu_AHB` (`DOC_SwCluC_Sys_SwClusters`.arxml).

From these Software Components, three dataElements in the ports

* `RP_Celine`, dataElement Celine
* `PP_Bernd`, dataElement Bernd
* `PP_Anton`, dataElement Anton

are delegated by SwcCompoAHB.

For each dataElement, a CpSoftwareClusterCommunicationResource (`DOC_SwCluC_Sys_ResPoolServiceResources`.arxml) describes the Software Cluster related properties.

In the `ECU_SYSTEM_DESCRIPTION` `System_TopLvl` (`DOC_SwCluC_Sys_Descr_TopLvl`.arxml), the according dataElement instances are mapped via a PortElementToCommunicationResourceMapping. In the `ECU_SYSTEM_DESCRIPTION` `System_TopLvl`, the mapping is consistently defined at the PPortPrototype side, if a PPortPrototype is available in a Data Communication Graph.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Binary 清单
*原文标题：Binary Manifest*

To save some space, PROVIDED is abbreaviated as PRO, REQUIRED as REQ, OsProxyOsTask and OsProxyOsT as OsPT, mandatory as MAND, Global ResourceId as GID

### 29. 接口 Descriptor Table of Cluster_AHB
*原文标题：Interface Descriptor Table of Cluster_AHB*

=
  {
    0x80,  /* PRO (Anton),  N/A, S/R, GID = 0xDA1A0001 */
    0x80,  /* PRO (Bernd),  N/A, S/R, GID = 0xDA1A0002 */
    0x00,  /* REQ (Celine), N/A, S/R, GID = 0xDA1A0003 */
    0x40,  /* REQ (`OsPT_10ms_Ph1`), MAND, OsPT, GID = 0x05000005 */
    0x40,  /* REQ (`OsPT_10ms_Ph2`), MAND, OsPT, GID = 0x05000004 */
    0x40,  /* REQ (`OsPT_50ms`), MAND, OsPT, GID = 0x05000003 */
  };

  /* descriptor table column for resource type Ids */
  const `SwCluC_BManif_ResourceTypeIdType` `SwCluC_BManif_ResourceTypeIdDescriptorColumn` =
  {
    0x01u, /* PRO (Anton),  N/A, S/R, GID = 0xDA1A0001 */
    0x01u, /* PRO (Bernd),  N/A, S/R, GID = 0xDA1A0002 */
    0x01u, /* REQ (Celine), N/A, S/R, GID = 0xDA1A0003 */
    0x03u, /* REQ (`OsPT_10ms_Ph1`), MAND, OsPT, GID = 0x05000005 */
    0x03u, /* REQ (`OsPT_10ms_Ph2`), MAND, OsPT, GID = 0x05000004 */
    0x03u, /* REQ (`OsPT_50ms`), MAND, OsPT, GID = 0x05000003 */
  };

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Offered 接口 Table of Cluster_AHB
*原文标题：Offered Interface Table of Cluster_AHB*

=
  {
    { .dptr = (void *) &`SwCluC_Xcc_Buffer_Anton` },  /* PRO (Anton),  N/A, S/R, GID = 0xDA1A0001 */
    { .dptr = (void *) &`SwCluC_Xcc_Buffer_Bernd` },  /* PRO (Bernd),  N/A, S/R, GID = 0xDA1A0002 */
    { .fptr = (`SwCluC_BManif_VoidFncPtrType`) `OsTask_10ms_Ph1` },  /* REQ (`OsPT_10ms_Ph1`), MANDATORY, OsPT, GID = 0x05000005 */
    { .fptr = (`SwCluC_BManif_VoidFncPtrType`) `OsTask_10ms_Ph2` },  /* REQ (`OsPT_10ms_Ph2`), MANDATORY, OsPT, GID = 0x05000004 */
    { .fptr = (`SwCluC_BManif_VoidFncPtrType`) `OsTask_50ms` }   /* REQ (`OsPT_50ms`), MANDATORY, OsPT, GID = 0x05000003 */
  };
]

In the Offered Interface Table, the data buffers for Anton and Bernd are offered for other Software Clusters.

Note that the binary manifest entry for the SwCluCOsProxyOsTask points to the OsTask body generated by the Rte in the Application Software Cluster. The Dispatcher Runnable in the Host Software Cluster uses the binary manifest to directly call the OsTask in the Application Software Cluster.

### 31. Subscribed 接口 Table of Cluster_AHB
*原文标题：Subscribed Interface Table of Cluster_AHB*

=
  {
    { .dptr = (void *) &`SwCluC_Xcc_Default_Celine` },  /* REQ (Celine), N/A, S/R, GID = 0xDA1A0003 */
  };

  const `SwCluC_BManif_HandleType` `SwCluC_BManif_SubscribedInterfaceHandleColumn` =
  {
    { .dptr = (void *) &`SwCluC_Xcc_Default_Celine` },  /* REQ (Celine), N/A, S/R, GID = 0xDA1A0003 */
  };

  const `SwCluC_BManif_SwClusterIdType` SwCluC_BManif_SubscribedInterfaceConnectedSwClusterIdColumn =
  {
    `SWCLUC_BMANIF_SWCL_ID_UNCONNECTED`,  /* REQ (Celine), N/A, S/R, GID = 0xDA1A0003 */
  };
]

In the Subscribed Interface Table, the default data instance for Celine is set. This ensures that the inital value is read, in case no connection to another Software Cluster is possible.

### 32. SwCluCOsProxyMaxNumberOfCallee - using one OsProxyOsTask to 调度多 clusters
*原文标题：SwCluCOsProxyMaxNumberOfCallee - using one OsProxyOsTask to schedule multiple clusters*

The examples so far showed a single cluster. If there is more than one cluster, there is a choice in the Os Proxy configuration: It's possible to either configure a separate SwCluCOsProxyOsTask for each cluster, or to share one SwCluCOsProxyOsTask between multiple clusters. Note that it's not possible to call the same cluster twice from one host SwCluCOsProxyOsTask / Dispatcher Runnable. So in the previous example, it's not possible to use a single 10ms SwCluCOsProxyOsTask in the host and call the two 10ms phases in `Cluster_AHB`.

When multiple clusters are called from a single Dispatcher Runnable, the order in which the clusters are called is fixed. It depends on the order of handles in the table, which are sorted by Software Cluster Id (see ). Configuring separate SwCluCOsProxyOsTasks requires more configuration, but allows for a fully flexible scheduling. If a configuration requires additional flexibility that results in a task that is split into phases, then it's likely that such a configuration will use separate SwCluCOsProxyOsTasks for these task phases, and have SwCluCOsProxyMaxNumberOfCallee set to 1 (or not set).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 限制 and Restrictions
*原文标题：Limitations and Restrictions*

### 34. Out of 范围 topics
*原文标题：Out of scope topics*

### 35. Securing the Binary Objects

Securing the Binary Objects against unauthorized modification (e.g. signature checks during flash).

Rationale: This is not in scope of CP platform in general.

### 36. Standardization of hypervisor solutions

Standardization of hypervisor solutions to implement multiple machines one micro controller.

Rationale: There are already existing solutions on the market.

### 37. Mere build time optimization

The concept does not target projects that just want to do build time optimization. While it is possible to use the concept to reuse already built parts and thereby reduce build times, it is not designed with this usecase in mind. The scenario that a local integration just uses Software Clusters as independent build units, but keeps the full static and dynamic dependencies between them, is not considered.

The build time reduction will be accompanied by some overhead in memory consumption and runtime, since the concept has to solve the additional requirements for a distributed and independent development and integration. If the flexibility introduced by Software Clusters is not required, and the goal is just to reuse parts of a build, other solutions can be designed that have less (or maybe even no) overhead at run time.

To summarize: Using the concept in this way is possible, but not recommended.

### 38. Easy deactivation of 软件 Clusters
*原文标题：Easy deactivation of Software Clusters*

The solution of AUTOASR to support Software Clusters in the Classic Platform is not designed in a way that clustering can be disabled, or that a clustered system can easily be turned back into a non-clustered system. Simply put: there is no off switch.

Rationale: This is not possible since separate build units support:

* different lib versions
* separate name spaces for compiler / linker
* multi instances of regular BSW modules (e.g. Dem/Dcm/Fim)

If such benefits are used, a simple fall back to a common large-scale integration is technically not possible.

Example: If a project uses different versions of a library in different clusters, the project can no longer be compiled and linked as a single build unit, since the single definition rule is violated. If such a project were to be turned back into an unclustered system, it would first be neccessary to consolidate the different library versions to a single version.

Nonetheless, by setting the bit `SWCLUC_BMANIF_DISABLE_ON_ECU_CONNECTION`, defined in , on the Host Software Cluster, it is possible to freeze the Software Cluster Connection for all clusters. After setting the bit, it is no longer possible to flash single clusters.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 83 章（内容从略，见纯文本全文）

39. Utilization of RTE features
40. Constraints on feasible decoupling
41. 基础软件集成 in an Application 软件 Cluster
42. 功能性 restrictions
43. Flashing and Compatibility
44. Severe incompatibilities
45. Severe Connection 错误
46. 附录
47. 示例 listings
48. 软件组件描述
49. DOC_SwCluC_SwcAnton_SWCD.arxml
50. DOC_SwCluC_SwcBernd_SWCD.arxml
51. DOC_SwCluC_SwcHugo_SWCD.arxml
52. DOC_SwCluC_SwcCeline_SWCD.arxml
53. DOC_SwCluC_SwcClaus_SWCD.arxml
54. 系统描述
55. DOC_SwCluC_SwcCompoAHB_SWCD.arxml
56. DOC_SwCluC_SwcCompoHost_SWCD.arxml
57. DOC_SwCluC_Sys_TopLvl_SWCD.arxml
58. DOC_SwCluC_Sys_SwClusters.arxml
59. DOC_SwCluC_Sys_Descr_TopLvl.arxml
60. DOC_SwCluC_Sys_HWT.arxml
61. DOC_SwCluC_Sys_ResPoolCommunicationResources.arxml
62. DOC_SwCluC_Sys_ResPoolServiceResources.arxml
63. DOC_SwCluC_Sys_ResPoolServiceResourceNeeds.arxml
64. DOC_SwCluC_Sys_Extr_Host.arxml
65. DOC_SwCluC_Sys_Extr_TopLvl_SWCD_Host.arxml
66. DOC_SwCluC_Sys_Extr_AHB.arxml
67. DOC_SwCluC_Sys_Extr_TopLvl_SWCD_AHB.arxml
68. EcuConfiguration
69. DOC_SwCluC_Ecuc_EcuC_AHB.arxml
70. DOC_SwCluC_Ecuc_Os_AHB.arxml
71. DOC_SwCluC_Ecuc_Os_Host.arxml
72. DOC_SwCluC_Ecuc_SwCluC_AHB.arxml
73. DOC_SwCluC_Ecuc_SwCluC_Host.arxml
74. Referenced Meta Classes
75. Referenced ECUC 配置 Parameters
76. BswM
77. BswMRule
78. BswMLogicalExpression
79. BswMModeRequestPort
80. BswMActionList
81. BswMAction
82. BswMSwitchPort
83. MemMap
84. MemMapAddressingModeSet
85. EcucPartition
86. Os
87. OsAlarm
88. OsApplication
89. OsCounter
90. OsEvent
91. OsScheduleTable
92. OsScheduleTableExpiryPoint
93. OsTask
94. Referenced C-API
95. RTE
96. RTE Lifecycle API Reference
97. Rte_Init
98. Rte_Start
99. RTE RIPS API Reference
100. Rte_Rips_DataIsUpdated
101. Rte_Rips_DRead
102. Rte_Rips_DataIsUpdated_EventActivation
103. Rte_Rips_Feedback
104. Rte_Rips_Invoke
105. Rte_Rips_InvocationHandler
106. Rte_Rips_Prm
107. Rte_Rips_Read
108. Rte_Rips_ReturnResult
109. Rte_Rips_Start
110. Rte_Rips_Stop
111. Rte_Rips_SchM_Deinit
112. Rte_Rips_SchM_Init
113. Rte_Rips_SwitchNotificationStatusType
114. Rte_Rips_Switch
115. Rte_Rips_DequeueModeSwitch
116. Rte_Rips_Trigger
117. Rte_Rips_Write
118. RTE API Reference
119. OS
120. OS API Reference
121. SwCluC_BManif_GetHandle
