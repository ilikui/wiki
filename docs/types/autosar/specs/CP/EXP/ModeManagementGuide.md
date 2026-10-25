# Guide to Mode Management (`ModeManagementGuide`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 440 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_ModeManagementGuide_440\AUTOSAR_CP_EXP_ModeManagementGuide.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_ModeManagementGuide_440\AUTOSAR_CP_EXP_ModeManagementGuide.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_ModeManagementGuide_440\zzgen\CP_EXP_ModeManagementGuide.complete.txt`

## 文档简介

This document is a general introduction to AUTOSAR mode management for the Release 4.0.3 onwards. Its main purpose is to give users as well as developers of AUTOSAR an detailed overview of the different aspects of AUTOSAR mode management based on examples, which are explained in context. The code listings in this document together form the configuration of a sample ECU.

Chapter  explains the basic mode management concepts e.g. modes in general, how mode switches are implemented, roles of mode managers and mode users etc. It secondly gives an introduction to Application Mode management and the dependencies to Basic Software Mode management, which are closely related.

The Basic Software Modemanager is the central mode management module in AUTOSAR R4.0. It is configurable to a high degree. How this configuration can be achieved is the topic of chapter .

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document is a general introduction to AUTOSAR mode management for the Release 4.0.3 onwards. Its main purpose is to give users as well as developers of AUTOSAR an detailed overview of the different aspects of AUTOSAR mode management based on examples, which are explained in context. The code listings in this document together form the configuration of a sample ECU.

Chapter  explains the basic mode management concepts e.g. modes in general, how mode switches are implemented, roles of mode managers and mode users etc. It secondly gives an introduction to Application Mode management and the dependencies to Basic Software Mode management, which are closely related.

The Basic Software Modemanager is the central mode management module in AUTOSAR R4.0. It is configurable to a high degree. How this configuration can be achieved is the topic of chapter .

### 2. 后续工作
*原文标题：Further Work*

Due to complexity and broad scope of this topic there are still some uses cases which are not yet described here in full detail. These issues will be enhanced in further releases.

* ECUs as Gateways
* Communication management for FlexRay
* Communication management for Ethernet
* Communication management for Lin (including schedule table switching)
* DCM Routing path groups
* BSWM configuration for multicore ECUs

### 3. 总体机制与概念
*原文标题：Overall mechanisms and concepts*

This chapter gives an overview of the concept of modes and a short definition of states in AUTOSAR. Defintions of the terms mode and state can be found in chapter  A mode can be seen as the current state of an ECU wide, global variable, which is maintained by the RTE respectively the Schedule Manager. The possible assignments of a mode are defined in ModeDeclarationGroups, which are defined in the AUTOSAR Software Component Template . Modes can be used for different purposes. First of all modes are used to synchronize Software Components and Basic Software Modules. Via modes specified triggers can be enabled and disabled, and consequently the activation of ExecutableEntitys can be prevented. Also ExecutableEntitys can be triggered explicitely during a Mode Switch. On the other hand mode switches can explicitly trigger executable entities during transition from one mode to another. For example the RTE can activate an OnEntry ExecutableEntity to initialize a certain resource before entering a specific mode. In this mode the triggers of this ExecutableEntity are activated.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Declaration of modes

The Software Component Template  defines a generic mechanism for describing modes in AUTOSAR. Modes are defined via ModeDeclarations. A ModeDeclaration represents a possible assignment of the current state of a global variable. E.g in ECU state management there may exist the ModeDeclarations STARTUP, RUN, `POST_RUN`, SLEEP.

A ModeDeclarationGroup groups several ModeDeclarations in a similar way as an enumeration groups literals. In the given example this could be the ModeDeclarationGroup ECUMODE. For each ModeDeclarationGroup an InitialMode has to be defined, which is assigned to the variable at startup. Figure  shows an excerpt of the AUTOSAR Metamodel  with the relationships of ModeDeclarations, ModeDeclarationGroups and ExecutableEntitys.

### 5. 模式 managers and 模式 users
*原文标题：Mode managers and mode users*

In mode management there are two parties involved: Mode managers and mode users. Responsible for switching modes are Mode managers, which are the only instances able to change the value of the global variable. A mode manager is either a Software Component, which provides a ModeRequestPort or a Basic Software Module, which either provides also a ModeRequestPort in its Software Component Description or a ModeDeclarationGroup in its Basic Software Module Description. Mode users are informed of Mode switches via well-defined mechanisms and have the possibility to read the currently active mode at any time. If a Mode user wants to change into a different mode it can request a Mode switch from the corresponding Mode manager.

### 6. Modes in the RTE

The AUTOSAR Runtime Environment implements the concept of modes. For this purposes it creates for each ModeDeclarationGroupPrototype of an Atomic Software Component a so called ModeMachineInstance. A ModeMachineInstance is a state machine whose states are defined by the ModeDeclarations of the respective ModeDeclarationGroup.

Figure  depicts the interaction of ModeDeclarationGroupPrototypes Mode managers and Mode users. Note that the mode switch ports of the mode users are not directly connected to the corresponding PPortPrototypes of the mode managers but instead are connected to the mode machine instances of the RTE. This is important to understand the mechanism of mode switching inside the RTE.

Previous versions of the Basic Software Modules especially the ECU state manager module have differentiated between ECU states and ECU modes. ECU modes were longer lasting operational ECU states that were visible to applications i.e. starting up, shutting down, going to sleep and waking up. The ECU Manager states were generally continuous sequences of ECU Manager module operations terminated by waiting until external conditions were fulfilled.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Modes in the 基础软件 Scheduler
*原文标题：Modes in the Basic Software Scheduler*

The Basic Software Scheduler provides for Basic Software Modules a similar mechanism for mode communication as the RTE provides it for Software Components. If a Basic Software Module provides a ModeDeclarationGroupPrototype as providedModeGroup in its Basic Software Module Description the Basic Software Scheduler instatiates a ModeMachineInstance. Consequently for this Basic Software Module a `SchM_Switch` API is provided, which enables this module to initiate a Mode switch. Mode users have to reference the ModeDeclarationGroupPrototype as requiredModeGroup and will get a `SchM_Mode` API to read the mode, which is currently active. Mode requests between Basic Software Modules can be comunicated directly via function calls, as Basic Software Modules.

Another possibility for a Basic Software Module acting as a Mode user to get informed about mode switches, is to register a BSW Module Entry, which is triggered by a Mode Switch Event (see also ).

### 8. Communication of modes

The Software Component Template differs the following distinctive types of mode communication between Mode managers and Mode users.

* Mode Switch: A Mode Switch is the communication of a current mode transition from one mode to another. Mode Switches are always initiated by Mode Managers.
* Mode Request: A Mode Request is the request of a mode user to the Mode Manager to enter a certain mode. Note that it is not guaranteed that the Mode Manager will enter this mode. Moreover he has to arbitrate all requests from the Mode Users and decide which mode he will enter.

Furthermore, the concept of Mode Proxies and information about communication of modes on multi core ECUs is given.

### 9. 模式 switch
*原文标题：Mode switch*

As every other communication between Software Components or between Software Components and Basic Software Modules, Modes are communicated via PortPrototypes. Each PortPrototype has to be typed by a PortInterface. In case of mode communication there exist so called mode switch interfaces, which are PortInterfaces. These are shown in Figure . Each ModeSwitchInterface has exactly one ModeDeclarationGroupPrototype which consists of multiple ModeDeclarations. Any ModeDeclaration represents one mode of the ModeDeclarationGroup. One of these is defined as the initial mode.

These Mode switches are necessary because Software Components need to be capable of reacting to state changes initiated by a ModeManager. Depending on the configuration there are two mechanisms available how a Software Component can react on a mode change.

# A ModeSwitchEvent can trigger a OnExtry, OnTransition or OnEntry-Runnable.
# An RTEEvent can be disabled in a certain mode and consequently prevent the execution of accordant ExecutableEntities.

### 10. 模式 request
*原文标题：Mode request*

Mode requests are distributed on the way from the mode requester (Mode Arbitration SWC or a generic SWC) to the mode manager. The mode managers on each ECU then have to decide and initiate the local mode switch. Thus the arbitration result is communicated only locally on each ECU using RTE mode switch mechanism.

For mode requests, the communication of modes works slightly differently as for mode switches: without ModeDeclarationGroups.

The request of modes is done via standard SenderReceiverInterfaces. Contrarily to ModeSwitchInterfaces the requested mode is not given by a ModeDeclarationGroup but by a VariableDataPrototype that has to contain an enumeration. This enumeration consists of a set which contains the modes that can be requested.

Mode requests can be distributed in the whole system. For application and vehicle modes, the requests of the mode requester have to be distributed to all affected ECUs. This implies a 1:n-connection between the mode requester and the mode Managers. In AUTOSAR this is only possible with Sender-Receiver Communication. The mode manager only requires the information about the requested mode and not the mode switch from the mode requester.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 模式 proxies
*原文标题：Mode proxies*

Currently AUTOSAR has a constraint that only local software components are allowed to communicate with ServiceComponents. So it is not possible that a SoftwareComponent can request modes from a remote e.g Basic Software Mode Manager. To overcome this limitation so called ServiceProxySwComponentType were introduced in AUTOSAR Release 4.0. Figure  depicts this concept.

For the application software and the RTE a ServiceProxySoftwareComponentType behaves like a "normal" AtomicSwComponentType, but it is actually a proxy for an AUTOSAR Service. This means that on the one side it has to communicate over service ports with the ECU-local ServiceSwComponentType it represents. On the other side it has to offer the corresponding PortPrototypes to the ApplicationSwComponentTypes. In the meta-model, the ServiceProxySwComponentType does not differ from an ApplicationSwComponentType except by its class. It is up to the implementer to meet the restrictions imposed by the semantics as a proxy.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 模式 communication on multi 核 ECUs
*原文标题：Mode communication on multi core ECUs*

The RTE is able to synchronize ModeMachineInstances over different partitions of an ECU. This enables configurations where one ModeDeclarationGroupPrototype of a provide port is connected to ModeDeclarationGroupPrototypes of require ports from more than one partition. Consequently the ModeUsers of a ModeDeclarationGroupPrototype can be distributed on several partitions.

According to  a ModeMachineInstance executes a sequence of 10 steps during a mode transition:

# Activation of mode disablings
# Wait until ExecutableEntities which are impacted by ModeDisablingDependencys of the next mode are terminated
# Execution of OnExit ExecutableEntities
# Wait until all OnExit ExecutableEntities are terminated
# Execution of OnTransition ExecutableEntities
# Wait until all OnTransition ExecutableEntities are terminated
# Execution of OnEntry ExecutableEntities
# Wait until all OnEntry ExecutableEntities are terminated
# Deactivation of mode disabling of the previous and activation of the mode disabling of the current mode
# Triggering of ModeSwitchAckEvents

The steps 1 to 9 can be executed in parallel on each CPU core, respectively for the mode users distributed on the corresponding core.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. the 基础软件 Modemanager的配置
*原文标题：Configuration of the Basic Software Modemanager*

The BSW Mode Manager is the module that implements the part of the Vehicle Mode Management and Application Mode Management concept that resides in the BSW. Its responsibility is to arbitrate mode requests from application layer Software Components or other Basic Software Modules based on rules, and perform actions based on the arbitration result.

From an functional point view the BswM is responsible to put the Basic Software in a state so that the Basic Software can run properly and meet the functional requirements.

The configuration of the BswM is very project- and ECU- specific. Therefore it can not be standardized by AUTOSAR. Nevertheless it is expected that a BswM implementation behaves in specific situations in a certain way . This chapter starts with an introduction on the general concept of the BswM, which is more or less a execution environment for rules described by the user. Afterwards typical scenarios in the lifecycle of an ECU are described and examples are given how the BswM could be configured.

### 14. Process how to configure and integrate a BswM

The configuration and integration of a BswM into an ECU project consists of the same steps as for other Basic Software Modules. Nevertheless it is described for a better understanding of the next steps. In general the following actions have to be taken:

# Create a ECUC configuration of the module. For the BswM this configuration contains:

  # the necessary ModeRequestSources,
  # the provided ModeSwitchPorts,
  # a description of the Rules and ActionLists.
# The configuration is used as input for the module generator, which creates

  # a SoftwareComponentDescription of the AUTOSAR Interface,
  # the implementation of the module.
# The last step is to integrate the Module into the ECU by connecting the ports of the Software Components with the corresponding ports of the BswM.

### 15. Semantics of BswM 配置：接口 and behavioral aspects
*原文标题：Semantics of BswM Configuration: Interfaces and behavioral aspects*

In general the BswM can be seen as a state machine, which is defined by its interface and a behavioral description. The input actions of this state machine are mode requests. Each mode request is described in the ECU configuration of the BswM as a BswMModeRequestSource. These mode requests can be of different types (C-API calls, mode requests via RTE, mode notifications via RTE, etc.) but internally they are treated in the same way.

If a mode is requested the internal mirror of this BswMModeRequestSource is updated and depending on the configuration a rule evaluation is triggered, which results in the execution of predefined action lists. Action lists group Actions. Typically an action is a triggering of a mode switch in the RTE or Schedule Manager, but there are also predefined actions which change the status of some Basic Software Module.

### 16. 接口 of the BswM
*原文标题：Interface of the BswM*

The interface is defined by the BswMModeRequestSource and the BswMActionListItem containers.

### 17. 模式 Requests
*原文标题：Mode Requests*

BswMModeRequestSource is a ChoiceContainer, which can be of the following kinds:

# C-APIs, which are defined in the specification of the BswM. BasicSoftwareModules can directly call C-APIs from the BswM, who will translate them internally into a ModeRequest. For example a call to the API

  `BswM_CanSM_CurrentState`(
  	NetworkHandleType Network,
  	`CanSM_BswMCurrentStateType` CurrentState
  )

  is to be mapped to different ModeRequestPorts depending on the parameter Network, which identifies the channel on which the event occurred. The parameter CurrentState then contains the mode which is requested. The mode requests, which are defined by the standardized interface of the BswM are described in more detailed in
# RPorts typed by a SenderReceiverInterface. BswMSwcModeRequest: For each container of this type the BswM has to create a corresponding RPort in its Service Component Description.
# RPorts typed by a ModeSwitchInterface. BswMSwcModeNotification: For each container of this type the BswM has to create a corresponding RPort in its Service Component Description.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Available Actions

BswMActionListItems can be of the following kinds:

# C-APIs from other BswM Modules, which are called directly during the execution of an ActionList.

  * BswMComMAllowCom
  * BswMComMModeLimitation
  * BswMComMModeSwitch
  * BswMDeadlineMonitoringControl
  * BswMEcuMGoDown
  * BswMEcuMSelectShutdownTarget
  * BswMEcuMStateSwitch
  * BswMJ1939Rm
  * BswMLinScheduleSwitch
  * BswMNMControl
  * BswMPduGroupSwitch
  * BswMPduRouterControl
  * BswMRteSwitch
  * BswMSchMSwitch
  * BswMSwitchIPduMode
  * BswMTriggerIPduSend
  * BswMUserCallout
# PPorts typed by a ModeSwitchInterface. BswMSwitchPort: For each container of this type the BswM has to create a corresponding PPort in its Service Component Description if a certain configuration condition is met (see BswM SWS).
# ModeDeclarationGroupPrototypes SwitchPort: For each container of this type the BswM has to create a corresponding ModeDeclarationGroupPrototype in the role providedModeGroup in its Basic Software Module Description if a certain configuration condition is met (see BswM SWS). In this case the BswM also acts as a mode manager, but the ModeMachineInstance is maintained by the Schedule Manager.

### 19. the 接口 in pseudo 代码的定义
*原文标题：Definition of the interface in pseudo code*

The following paragraphs define the interface of the BswM in pseudo code.

### 20. 模式 switch and 模式 request 接口
*原文标题：Mode switch and mode request interfaces*

An example of the BswM configuration of ModeSwitchInterfaces is shown in Listing . There is a ModeDeclarationGroup and a ModeSwitchInterface created. The ModeSwitchInterface uses the defined ModeDeclarationGroup as prototype where exampleModes is the short name of the ModeSwitchInterface.

A configuration of a mode request interface that corresponds to the ModeSwitchInterface of Listing  is shown as example in Listing . Out of this BswM configuration an Arxml description will be created which includes the mode declarations and interfaces. An excerpt of that arxml is shown in .

Every mode request to the BswM has to be mapped to an restricted set of values, which allows the integrator the define the arbitration rules.

### 21. ModeRequestPorts defined by the standardized 接口 of the BswM
*原文标题：ModeRequestPorts defined by the standardized interface of the BswM*

In the BswM configuration, the mode request sources have to be defined. The ModeRequestPort are mapped to APIs as defined in the BswM.

### 22. Configurable ModeRequestPorts

Besides the interface, which is defined by the standardized interface of the BswM, additional mode request ports can be defined via the configuration parameters.

E.g it is necessary for the interaction with applications, that an application software component at least notifies the BswM about it's current state. This can be achieved by definition of a ModeRequestPort as shown in Listing . The BswM will than create a corresponding RPort typed by a SenderReceiverInterface.

Note that the reference to a ModeDeclarationGroupPrototype can be misleading. The meaning is that the BswM creates a SenderReceiverInterface containing a VariableDataPrototype. The SwDataDefProps of this VariableDataPrototype refer to a CompuMethod, which defines an enumeration corresponding die to the referred ModeDeclarationGroupPrototype.

Listing  shows the declaration of a mode notification port. Note that in contrast to  the BswM will generate a RPort typed by a ModeSwitchInterface in this case. The BswM then gets informed via a ModeSwitchNotification if the mode manager initiates a mode switch.

Listing  shows the declaration of a mode notification port.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Configurable ModeSwitchPorts

The BswM can send mode switches through a configured BswMSwitchPort. For a configured BswMSwitchPort the BswM may generate a PPortPrototype, a providedModeGroups.ModeDeclarationGroupPrototype or both of them, depending on the configuration (see BswM SWS).  shows an example for a BswMSwitchPort.

### 24. the BswM 行为的配置
*原文标题：Configuration of the BswM behavior*

The behavior of the BswM is specified via rules and action lists. A rule is a logical expression, which combines the current values of ModeRequestTypeMaps. The evaluation of each rule either results in the execution of its true or false action lists.

The ModeControlContainer contains these ActionLists. An ActionList can consist of a set of atomic actions, other "nested" ActionLists or it can reference (nested) rules which are then evaluated in the context of this Actionlist.

The following example shows a simple rule, which activates the IPDU Groups of a dedicated CAN channel. According to this rule, the BswM has to provide a ModeRequestPort of type CanSMIndication named `Can1_Indication`. This is a ModeRequest from a basic software module in this case from the Can State manager. In code this ModeRequestPorts corresponds to the API `BswM_CanSM_CurrentState` as described in  in . The source parameter identifies the network to which this ModeRequestSourcePort belongs to. It's up to the configuration tool of the BswM to allocate the right parameters for the API corresponding to the referenced ECUC Container.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. ECU 状态管理
*原文标题：ECU state management*

During startup and shutdown the task of the BswM is to initialize all basic software modules in a similar way as it is done by the ECUM in older AUTOSAR releases. To achieve this the following ModeDeclarationGroup is defined, which indicates the overall state of the ECU to application software components and is used for internal rule arbitration.

The initial mode of this ModeDeclarationGroup is `ECU_STARTUP_ONE`.

### 26. ECU 模式处理
*原文标题：ECU Mode Handling*

ECU Mode Handling is introduced with AUTOSAR 4.2.1 in BSW modules ECU State Manager with flexible state machine and BSW Mode Manager. ECU State Manager provides a common interface to SW-Cs to request and release the Modes RUN and `POST_RUN`.

The ECU State Manager (EcuM) does not contain an own state machine. It shall receive state notifications from BswM and propagate these to the RTE.

The following API is provided for ECU Mode Handling:

* Via this interface EcuM notifies BswM about the current Mode of ECU Mode.
* modeGroup `EcuM_StateType` {`ECUM_STATE_STARTUP`, `ECUM_STATE_APP_RUN`, `ECUM_STATE_APP_POST_RUN`, `ECUM_STATE_SHUTDOWN`, `ECUM_STATE_SLEEP`}
* Set by EcuM using the interface `BswM_EcuM_CurrentState`(). This state is set by EcuM when the RTE has given its feedback.
* Set by EcuM using the interface `BswM_EcuM_RequestedState`() depending on the result of the RUN Request Protocol.
* Set by EcuM using the interface `BswM_EcuM_RequestedState`() depending on the result of the RUN Request Protocol.

The following BswM rules show an example regarding the interaction between EcuM and BswM for ECU Mode Handling. Note that the following BswM rules are not sufficient for a complete system.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 启动
*原文标题：Startup*

The Mode STARTUP is applied during startup of RTE. After all drivers are initialized, the RUN Mode is set:

### 28. Running

When all EcuM users have released the RUN Mode, EcuM sets the RUNRequested Mode to RELEASED.

SWCs can request RUN Mode during `POST_RUN`. The following BswM rule switches back to RUN Mode in case at least one EcuM user has requested the RUN Mode.

### 29. 关机 and 休眠
*原文标题：Shutdown and Sleep*

The BswM rules below illustrate only the switch to SLEEP Mode.

Note that further BswM rules are needed for a complete running system.

### 30. Default States Of Ecu 模式处理
*原文标题：Default States Of Ecu Mode Handling*

This chapter describes a setup to use software components, which are designed to work with the "ECU State Manager (EcuM) with fixed state machine" which is not a part of current AUTOSAR specifications anymore. Anyhow this approach is still widely used and benefits from standard interfaces (e.g. RUN request protocol). This means that a setup based on EcuM with flexible state machines and the BswM is described which implements the behavior of the EcuM with a fixed state machine.

An overview of the architectural solution is shown in Figure . To use software components, which are designed to work with the "ECU State Manager with fixed state machine" the option "ECU Mode Handling" has to be activated. A so called Compatibility SWC is not necessary to realize this behavior.

Figure  depicts the behavioral aspects of the proposal. The small boxes represent the states of fixed EcuM. The green boxes mark the phases of the EcuM flexible. Application software will only notice changes during the UP phase.

The result is that all states of the fixed EcuM in the UP phase have to be emulated using the BswM and the software component introduced for this scenario.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 示例 for BswM 配置
*原文标题：Example for BswM Configuration*

The system designer has to make sure that all pre- and post-conditions are met when setting a state of the ECU State Manager. As the EcuM shall remain flexible, there is no validation of the sequence the states are switched by BswM. When the sequence of states shall be compatible to the sequence of EcuMFixed, the system designer has to realize this behavior by BswM rules.

### 32. 启动
*原文标题：Startup*

During startup phase the same BSW modules shall be initialized as the fixed EcuM does. This is implemented via BswM rules which are executed after initialization of EcuM and initialize these modules. The modules which are already initialized by flexible EcuM are omitted by BswM.

The changed BswM rules can be seen in Listing .

### 33. 关机
*原文标题：Shutdown*

For that shutdown mechanism the BswM configuration of Listing  is responsible. The listed rules coordinate the post-run phase, deinitialize the modules and put the ECU into shut down or sleep. These rules execute the same callouts `EcuM_On`<Mode>() as it would happen with a fixed EcuM.

### 34. 唤醒
*原文标题：Wakeup*

The functionality for correct wakeup from sleep mode has to be fully configured in the BswM. But as it does not need any adjustments for backward compatibility, there are no modifications to be done.

### 35. 启动
*原文标题：Startup*

The ECUM starts the operating system and afterwards its post OS sequence starts the Schedule Manager (`SchM_Start`()), initializes the BswM (`BswM_Init`()) and afterwards finishes the initilization of the SchM (`SchM_Init`() and `SchM_StartTiming`()). The BswM after its initialization has to take care, that all necessary init routines of the basic software modules are called and that the RTE is started (First `Rte_Start`(), then `Rte_Init`() and at last `Rte_StartTiming`()).

In this scenario it is expected that the BswM has the following ModeDeclarationGroup. The purpose of this modeGroup is to track the current state/mode of the ECU similar to the states of the ECU State manager in previous AUTOSAR releases.

Rule InitBlockII specifies the initialization of basic drivers to access the NVRAM and initiates `NvM_ReadAll`. As the EcuMode source has the processing attribute set to DEFERRED this rule will be evaluated every time the main function of the BswM is called. After the first run it sets the EcuMode to `ECU_STARTUP_TWO` so that the action list will never be invoked again.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Run

As the BswM is a highly flexible module it depends to a high extend to the integrator, how it is determined if an ECU shall shut down or not. Many different variants are conceivable. This document proposes an approach, which is quite similar to the concept of the ECUM in AUTOSAR R3.1. The general concept is, that a ECU keeps running as long as at least one application software component requests the run state.

The information if an application can be shut down in a certain mode has to be provided by the software component developer. Example  shows a simplified rule for an ECU with one software component. If switches its mode to INACTIVE the BswM initiates the shutdown sequence.

### 其余 31 章（内容从略，见纯文本全文）

37. 关机
38. 休眠
39. 唤醒
40. 通信管理
41. 启动 and 关机
42. Partial 网络 Cluster
43. Aggregation of internal and external Partial 网络 Cluster
44. Aggregation of external Partial 网络 Cluster
45. Synchronized PNC 关机
46. 调度 of main functions
47. I-PDU Group Switching
48. Channel related I-PDU Group 处理
49. PNC related I-PDU Group 处理
50. J1939 Networkmanagement
51. J1939 诊断模式管理
52. LIN 调度 Table Switch
53. Ethernet switch port group switching
54. Ethernet switch port group switching with 唤醒 request
55. PduR routing path group switching
56. 服务 Discovery 控制
57. 诊断
58. 诊断 Session 控制
59. ECU Reset
60. Rapid Power 关机
61. Communciation 控制诊断服务
62. 控制 DTC Setting
63. Roe Status
64. BswM to BswM interaction on multicore ECUs
65. Multi 分区支持
66. 缩略语
67. Technical Terms
