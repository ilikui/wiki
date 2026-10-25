# Specification of Basic Software Mode Manager (`BSWModeManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 313 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_BSWModeManager_313\AUTOSAR_CP_SWS_BSWModeManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_BSWModeManager_313\AUTOSAR_CP_SWS_BSWModeManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_BSWModeManager_313\zzgen\CP_SWS_BSWModeManager.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module BSW Mode Manager (BswM).

The BSW Mode Manager is the module that implements the part of the Vehicle Mode Management and Application Mode Management concept that resides in the BSW. Its responsibility is to arbitrate mode requests from application layer SW-Cs or other BSW modules based on simple rules, and perform actions based on the arbitration result.

## 模块依赖

The BSW Mode Manager has interfaces to many of the BSW Modules in the AUTOSAR architecture. The majority of these interfaces are however optional and are used based on the needs of each ECU.

The dependencies listed in this chapter are intended to give an overview of some possible interactions between the BswM and other modules. The interactions and modules listed herein should not be considered an exhaustive list of all possibilities.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module BSW Mode Manager (BswM).

The BSW Mode Manager is the module that implements the part of the Vehicle Mode Management and Application Mode Management concept that resides in the BSW. Its responsibility is to arbitrate mode requests from application layer SW-Cs or other BSW modules based on simple rules, and perform actions based on the arbitration result.

### 2. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym | Description |
|---|---|
| BSW | Basic Software |
| BswM | BSW Mode Manager |
| BSWMD | Basic Software Module Description |
| CDD | Complex Driver |
| Dem | Diagnostic Event Manager |
| Det | Default Error Tracer |
| ECU | Electronic Control Unit |
| RTE | Real Time Environment |
| SWC / SW-C | Software Component |
| SWCD | Software Component Description |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules (see ), which is also valid for BSW Mode Manager.

Thus, the specification  shall be considered as additional and required specification for BSW Mode Manager.

Information regarding the configuration and usage of the BSW Mode Manager is found in the auxillary document: Guide to Mode Management

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

Maximum one instance of the BSW Mode Manager may be used within a partition.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

The BSW Mode Manager is applicable to all car domains.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The BSW Mode Manager has interfaces to many of the BSW Modules in the AUTOSAR architecture. The majority of these interfaces are however optional and are used based on the needs of each ECU.

The dependencies listed in this chapter are intended to give an overview of some possible interactions between the BswM and other modules. The interactions and modules listed herein should not be considered an exhaustive list of all possibilities.

### 10. RTE

The BswM receives mode requests from the SW-Cs via the RTE. Mode Switch Notifications are also propagated to the SW-Cs via the RTE.

### 11. EcuM - Flex

EcuM Flex can indicate the state of its wakeup sources to BswM. When ECU Mode Handling is used, BswM can set the state of EcuM - Flex and receives status of certain modes based on the RUN Request Protocol.

### 12. ComM

Mode Switch Indications originating from the ComM go through the BswM for further propagation to the SW-Cs.

The BswM can request communication modes at the ComM by means of ComMUsers.

### 13. COM

The handling of I-PDU Groups in COM is performed by the BswM. As a part of I-PDU group start/stop, it is possible to have the included signal values reset to their corresponding initialization values.

BswM handles the enabling and disabling of deadline monitoring of signals in COM.

BswM can also trigger transmission of an I-PDU.

### 14. PduR

The BswM can enable and disable routing groups of I-PDUs in the PDU router.

### 15. CanSM

Mode Switch Indications originating from the CanSM go through the BswM for further propagation to the SW-Cs.

### 16. LinSM

BswM coordinates switching of LIN Schedule Tables in the LinSM with starting and stopping of the corresponding I-PDU groups in COM.

Mode Switch Indications originating from the LinSM go through the BswM for further propagation to the SW-Cs.

### 17. LinTp

The LIN Transport Protocol that is a part of LinIf requests modes from BswM to make sure that the correct LIN Schedule Table is active during LinTp operation.

### 18. FrSM

Mode Switch Indications originating from the FrSM go through the BswM for further propagation to the SW-Cs.

The usage of "Single Slot Mode" on FlexRay is controlled by the FrSM by request of BswM. The send capability of the FlexRay stack can be controlled by the BswM via FrSM by calling the API `FrSM_SetEcuPassive`.

### 19. EthSM

Mode Switch Indications originating from the EthSM go through the BswM for further propagation to the SW-Cs.

### 20. DCM

The DCM performs mode requests to the BswM based on the diagnostic requests it receives.

Example: DCM can request "Disable Normal Communication". During this mode BswM will turn off the corresponding I-PDU groups and NM PDUs.

### 21. J1939Dcm

The J1939Dcm reports communication state changes to the BswM for further propagation to the SW-Cs. BswM changes states of J1939Dcm via `J1939Dcm_SetState`.

### 22. J1939Nm

The J1939Nm provides a state indication via `BswM_J1939Nm_StateChangeNotification`.

### 23. J1939Rm

BswM changes states of J1939Rm via `J1939Rm_SetState`.

### 24. NM 接口
*原文标题：NM Interface*

BswM will use the `Nm_EnableCommunication` and `Nm_DisableCommunication` to control the NM communication based on the current mode.

Example: In "Disable Normal Communication" mode, the BswM needs to disable NM communication on the corresponding NM channel.

The Nm uses `BswM_Nm_CarWakeUpIndication` to indicate a CarWakeup.

### 25. NvM

The NvM module reports the state of its blocks to the BswM via "integration code" registered as NvM callbacks. BswM has actions causing the NvM to read and write all blocks during startup and shutdown.

### 26. OS

The features of OS that are required by BswM, are implementation specific.

### 27. Sd

The BswM receives status indications from Sd via several exported APIs (see chapter  for examples). These status indications from Sd can be configured as BswMModeRequestSources.

### 28. 文件结构
*原文标题：File structure*

The BswM may use interfaces in AUTOSAR BSW modules that are not explicitly defined within this specification.

### 29. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall provide configuration rules and constraints to enable plausibility checks |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| Data types naming convention |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Basic SW module shall be able to shutdown |  |  |
| BSW Modules shall support link-time configuration |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| The Basic Software Module specifications shall specify at least in the description which other modules they require |  |  |
| List possible |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 功能规范
*原文标题：Functional specification*

This chapter specifies the functional behavior of the BSW Mode Manager. The operation of the BSW Mode Manager basic functionality can be described as two different tasks: Mode Arbitration and Mode Control.

The Mode Arbitration part initiates mode switches resulting from rule-based arbitration of mode requests and mode indications received from SW-Cs or other BSW modules.

The Mode Control part performs the mode switches by execution of action lists containing mode switch operations of other BSW modules.

The BswM should be seen as a mode management framework module in which behavior is completely defined by its configuration.

There may be different ways of implementing the BswM, such as generation of the complete BswM based on the configuration, or as a rule interpreter that parses an encoded configuration at run time.

However, this specification does not intend to specify any implementation details of the BSW Mode Manager. Hence, any examples stated in this document describing design details should be treated as explanatory text and not as requirements.

### 31. 模式 Arbitration
*原文标题：Mode Arbitration*

The Mode Arbitration performed by the BswM is simple and rule-based. The rules used for mode arbitration are specified in the configuration of the BSW Mode Manager module.

The rules are composed of trivial Boolean expressions and the mode arbitration is thus expected to have a low runtime impact.

In order to know what action lists to execute, the BswM is required to detect changes in mode arbitration results from previous rule evaluation. How this is done, and the memory needed to store results, is implementation specific and not described in this document.

### 32. Arbitration Rules

A rule is a logical expression that is composed of a set of mode request conditions. The rules are evaluated when the input mode requests and mode indications are changed, or during the execution of the BswM main function. The result of the evaluation (True or False) is used to decide about execution of the corresponding mode control Action List.

### 33. 模式 Conditions and Logical Expressions.
*原文标题：Mode Conditions and Logical Expressions.*

The logical expression that comprises a mode arbitration rule can use different operators such as AND, OR, XOR, NOT and NAND. Each term in the expression corresponds to a mode request condition. If the mode condition references a BswMModeRequestPort, the condition will verify if a requested or indicated mode is EQUAL or `NOT_EQUAL` to a certain mode. If the condition references a BswMEventRequestPort, the condition will verify if the request port is SET or CLEAR. BswMEventRequestPort events requests differ from mode requests in that the requester sends no requested mode/value to the BswM and as such, there is no mode condition for the BswM to evaluate. Rather, there is only the reception of the event for the BswM to evaluate. When the requester sends/calls the event, then the BswMEventRequestPort will be in a SET state. The BswM can then later place the BswMEventRequestPort into a CLEAR state by executing a BswMClearEventRequest action. An example rule with two conditions is shown in Figure . The rules and the set of available logical operations are defined as a part of the ECU configuration described in chapter .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 模式 Arbitration的需求
*原文标题：Requirements of Mode Arbitration*

As mentioned above, the BswM accepts mode requests and mode indications as input for the mode arbitration. Mode requests normally originate from the application SW-Cs but may also originate from other BSW modules such as the DCM. Mode indications are always issued by other BSW modules, such as the different bus specific State Managers and the EcuM. In this document, the generic term mode arbitration request corresponds either to a mode indication or to a mode request.

  Upstream requirements:
⌈
The BswM shall perform mode arbitration based on incoming mode requests.
⌋

  Upstream requirements:
⌈
The BswM shall perform mode arbitration based on incoming mode indications.
⌋

  Upstream requirements:
⌈
The BswM shall perform mode arbitration based on event requests as well as the clearing of event requests.
⌋

Note: All mode arbitration requests (requests and indications) are handled in the same way by the BswM. They are configured by selection of the corresponding mode condition type in the BswMModeRequestSource configuration container.

  Upstream requirements:
⌈
The BswM shall perform mode arbitration using configured rules.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Immediate and Deferred Operation

There are two different ways to schedule the processing of the mode arbitration. It is either done immediately within the context of a mode request/indication, or deferred (cyclically) to the main function of the BswM.

An 'immediate' request is executed in the context of the caller. It is the responsibility of the system integrator to ensure that execution of the action list does not jeopardize system performance or consistency.

Especially, if the caller runs (or may run) in interrupt context, the restrictions concerning usage of system functions in interrupt context apply.

The difference between immediate and deferred operation is shown in the sequence diagrams in section  and .

  Upstream requirements:
⌈
A mode arbitration rule may contain any combination of immediate and deferred mode arbitration requests.
⌋

  Upstream requirements: ,
⌈
It shall be possible to configure the BswM to execute the mode arbitration immediately upon a mode arbitration request. This is configured by setting the BswMRequestProcessing configuration parameter (within the BswMModeRequestPort container) to `BSWM_IMMEDIATE`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Arbitration 行为 after 初始化
*原文标题：Arbitration Behavior after Initialization*

The behavior of the mode arbitration of BswM after initialization is controlled by the configuration container BswMModeInitValue. This parameter may be configured once for each BswMModeRequestPort in the configuration.

  Upstream requirements: ,
⌈
If the container BswMModeInitValue does not exist or the ModeRequest does not already have an initial value, the BswM shall treat the corresponding mode condition as undefined and not use it for mode arbitration until the corresponding mode arbitration request has been updated for the first time.
⌋

  Upstream requirements: ,
⌈
BswM shall only arbitrate rules that do not contain any undefined mode conditions within its logical expressions.
⌋

The initial value of each BswMModeRequestPort after initialization may be controlled by the configuration container BswMModeInitValue.

  Upstream requirements: , ,
⌈
In case BswMModeInitValue is defined the BswM shall initialize the corresponding BswMModeRequestSource with either the BswMBswModeInitValue or the BswMCompuScaleModeValue while the BswM is initialized.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. 模式控制
*原文标题：Mode Control*

The Mode Control part of BswM performs all required actions based on the results of the mode arbitration. This is done using Action Lists. An Action List is an ordered list of actions that the BswM executes when triggered by the Mode Arbitration.

The actions in an Action List can be of three types:

# Calls to other BSW modules or the RTE. A set of pre-defined actions are listed in .
# Links to other action lists to be included in the execution.
# Mode arbitration rules. These rules will be evaluated when the corresponding action list is executed. In this way, a hierarchy of rules is obtained.

The BswM is not required to store or react on any BSW module specific return values on its performed actions. Due to this, the different state managers in the BSW indicate their current state to the BswM to be used as input for the mode arbitration.

However, if an error (E_NOT_OK) is returned, the BswM can issue a Det Runtime Error and/or cancel the currently executing action list.

As shown in Figure , the BswM may contain multiple Action Lists, and a single Action List can hold multiple actions. To reduce the overall number of action lists, it shall be possible to cascade them.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. 模式 Processing Cycle
*原文标题：Mode Processing Cycle*

Figure  shows the minimal processing cycle for a Mode Request:

# The Mode Requester SW-C requests mode A through its Sender Port. The RTE distributes the request and the BswM receives it through its Receiver Port.
# The BswM evaluates its rules either as a result of a received mode arbitration request, or cyclically during the execution of the BswM main function.
# The corresponding Action List is executed according to the selected execution method (see section "Triggered and Conditional action lists").
# When executing the Action List, the BswM may issue one or several calls to the RTE Switch API  as actions to inform the affected SW-Cs about the arbitration result. Any SW-C, especially the mode requester can register to receive the mode switch indications.

  Note that the mode requester can only receive the mode switch indications from the local BswM; this is true also for requests that originate from a different ECU that is made by a local proxy SW-C.

### 39. 需求 on 模式控制
*原文标题：Requirements on Mode Control*

Upstream requirements: ,
⌈
The BswM shall perform mode control by means of action lists that are executed as a result of rule evaluation in the mode arbitration.
⌋

  Upstream requirements: ,
⌈
For each rule of the mode arbitration, BswM shall be able to execute different action lists based on if the rule evaluates to True or False.
⌋

  Upstream requirements:
⌈
An action list comprises a set of actions that BswM shall execute in an ordered manner.
⌋

  Upstream requirements:
⌈
An action list may contain links to other action lists that BswM shall include in the execution.
⌋

  Upstream requirements: ,
⌈
An action list may also include links to mode arbitration rules that BswM shall evaluate within the scope of the execution of the current action list.
⌋

  Upstream requirements:
⌈
If a rule is included in an action list as specified in , any action list execution resulting from that evaluation shall be executed by BswM before it continues to execute the original action list.
⌋

  Upstream requirements:
⌈
If cascaded action lists are used (i.e. using references to other rules or action lists) the action list structure may contain up to seven (7) hierarchic levels.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Triggered and Conditional action lists

There are two ways that an action list may be executed based on evaluation of rules. Either it is executed every time the rule is evaluated with the corresponding result, or only when the evaluation result has changed from the previous evaluation. The execution method for an action list is configured using the BswMActionListExecution parameter (within the BswMActionList container).

However, for a nested action list which is not directly referenced by rules, the BswMActionListExecution parameter (e.g. `BSWM_CONDITION` or `BSWM_TRIGGER`) has no meaning, and will have no effect on the way that the nested action list is executed. Such a nested action list (i.e. not directly referenced by rules) is accordingly executed whenever its parent action list is executed.

  Upstream requirements:
⌈
If a True action list is configured for triggered execution, the BswM shall only execute it when the evaluation of the corresponding rule changes from False to True.
⌋

  Upstream requirements:
⌈
If a False action list is configured for triggered execution the BswM shall only execute it when the evaluation of the corresponding rule changes from True to False.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Available Actions

The set of actions that are available to use in an action list is predefined. The reason for this is to ease ECU configuration and generation of BswM configuration code.

  Upstream requirements:
⌈
BswM shall be able to execute the predefined actions defined by configuration container BswMAvailableActions.
⌋

  Upstream requirements:
⌈
The BswM shall be able to call any function in the AUTOSAR BSW even though it is not among the standardized actions defined in BswMAvailableActions.
⌋

  Upstream requirements:
⌈
The BswM shall be able to call user defined functions.
⌋

  Upstream requirements:
⌈
The parameters of the user defined functions, and their values, shall be defined at ECU configuration time using the BswMUserCallout configuration container.
⌋

### 42. 模式控制 after 初始化的行为
*原文标题：Behavior of Mode Control after Initialization*

The behavior of the Mode Control after initialization of the BswM is configured by the BswMRuleInitState parameter (within the BswMRule container). It defines the "previous evaluation result" to be used when deciding on what action list to execute after the first evaluation of a rule after initialization. The configuration parameter BswMActionListExecution (within the BswMActionList container) also affects the action list execution after initialization.

 The BswM shall act according to what is stated in this table when a rule is evaluated for the first time after initialization. Note: The "true" and "false" action lists are optional for each rule.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Waiting Functionality

Sometimes it is necessary to delay specific actions or wait for further mode controls. For this reason a Timer handling was added to the BswM.

A Timer consists always of a BswMTimer as BswMModeRequestSource and corresponding actions (see BswMTimerControl) controlling this BswMTimer i.e. the timer can only be controlled in the context of the action BswMTimerControl -> BswMModeRequestSource/BswMTimer. The value of the BswMTimer (e.g. `BSWM_TIMER_STOPPED`, `BSWM_TIMER_STARTED`, `BSWM_TIMER_EXPIRED`) can be evaluated by other rules configured in the BswM, in order to trigger action lists. There is no external interface to control or manipulate the timer.

  Upstream requirements: ,
⌈
Each BswMTimer shall be stopped (`BSWM_TIMER_STOPPED`) during initialization.
⌋

  Upstream requirements:
⌈
The action BswMTimerAction `BSWM_TIMER_START` shall reload the referenced BswMTimer (via BswMTimerRef) with the corresponding timer value (refer BswMTimerValue) and change the mode of the timer to `BSWM_TIMER_STARTED`.
⌋

Note: The timer can only reload by the BswMTimerAction action (no automatic reload possible).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Multi 分区支持
*原文标题：Multi Partition Support*

For multiple BswM instances, each BswM instance will generate its own separate service component description based on its own config set. The integrator will need to allocate these separate service components to the corresponding partition.

 Partition Local Action Lists
  Upstream requirements:
⌈
BswM is present in each partition with a partition specific configuration (separate instance of BswMConfig per partition). The contained action lists are executed partition locally.
⌋

Regardless, it is possible to use any mode request on all BswM instances.

  Upstream requirements:
⌈
A BswMArbitration shall be executed independently of which BswM instance the BswMModeRequestPort or BswMEventRequestPort is issued.
⌋

  Upstream requirements:
⌈
In case the BswMModeRequestPort or BswMEventRequestPort is on another BswM instance than the BswMArbitration, the BswM shall execute the rule always in a DEFERRED manner as defined in  regardless of attribute BswMEventRequestProcessing or BswMRequestProcessing.
⌋

### 45. 错误分类
*原文标题：Error classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below

### 46. Development 错误
*原文标题：Development Errors*

Definition of development errors in module BswM
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| A service was called prior to initialization | BSWM_E_UNINIT | 0x01 |
| A requesting user was out of range | BSWM_E_REQ_USER_OUT_OF_RANGE | 0x04 |
| A requested mode was out of range | BSWM_E_REQ_MODE_OUT_OF_RANGE | 0x05 |
| The provided configuration is inconsistent | BSWM_E_PARAM_CONFIG | 0x06 |
| Invalid network handle in parameter list | BSWM_E_INVALID_NETWORK_HANDLE | 0x09 |
| Invalid handle in parameter list | BSWM_E_INVALID_HANDLE_ID | 0x10 |

⌋

 Development Errors for Invalid Network Handle
  Upstream requirements:
⌈
If the BswMDevErrorDetect switch is enabled, APIs provided by the BswM accepting a parameter of type NetworkHandleType or PNCHandleType, shall check if a valid handle is passed. If not, the API shall report `BSWM_E_INVALID_NETWORK_HANDLE` to the Default Error Tracer.
⌋

 Development Errors for Invalid Handle
  Upstream requirements:
⌈
If the BswMDevErrorDetect switch is enabled, APIs provided by the BswM accepting a parameter <*>HandleId, shall check if a valid HandleId is passed. If not, the API shall report `BSWM_E_INVALID_HANDLE_ID` to the Default Error Tracer.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module BswM
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| An action returned E_NOT_OK | BSWM_E_ACTION_FAILED | 0x80..0xFF (as configured in BswMReportFailRuntimeErrorId) |

⌋

  Upstream requirements:
⌈
If BswMReportFailRuntimeErrorId is configured for a BswMActionListItem, then the BswM shall report a `BSWM_E_ACTION_FAILED` Runtime Error to Det if the action returns E_NOT_OK. The ErrorId reported in the `BSWM_E_ACTION_FAILED` Runtime Error is given by the value configured in BswMReportFailRuntimeErrorId.
⌋

Since the calling context of the action depends on the configuration (e.g. DEFERRED or IMMEDIATE), the ApiId reported in the `BSWM_E_ACTION_FAILED` Runtime Error is not defined in this specification and may be implementation specific.

The `BSWM_E_ACTION_FAILED` Runtime Error represents a range of ErrorId values. The range of values is restricted to the values given in the table for Runtime Error Types.

  Upstream requirements:
⌈
The BswM shall reject configurations where a BswMReportFailRuntimeErrorId does not lie within the range of values given for `BSWM_E_ACTION_FAILED` in the Runtime Error Types table.
⌋

### 48. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 49. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 50. BswM 接口 and Ports
*原文标题：BswM Interfaces and Ports*

This chapter specifies the AUTOSAR Interfaces and Ports that are provided by the Basic Software Mode Manager. Note that ports on both sides of the RTE are required: The SW-C description of the Basic Software Mode Manager services will define the ports below the RTE. Each AUTOSAR SW-C, which uses the services, must contain service ports in its own SW-C description. These ports are typed with the same interfaces and have to be connected to the ports of the Basic Software Mode Manager, so that the RTE can generate the appropriate IDs and the required symbols.

SW-Cs request modes from the BSW Mode Manager. To that end, they provide a Sender Port that has a special Sender/Receiver Interface (Mode Request Interface) with one data element. The corresponding Receiver Port at the BSW Mode Manager is described in Chapter . The data element's type has the same values as the Mode Declarations in the Mode Declaration Group of the corresponding mode (since the ImplementationDataType of the data element is mapped to the ModeDeclaration Group).

The same SW-C that requests a mode may also be a mode user because it may also need to know the arbitration result of the BSW Mode Manager.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. 模式 Request Ports
*原文标题：Mode Request Ports*

The BSW Mode Manager must declare a Receiver Port with the interface defined in the context of the SW-C:

RequirePort AppModeRequestInterface modeRequestPort_{ArbName}_{ReqName};

To read the currently requested mode, the BSW Mode Manager implementation must call:

`Rte_Read_modeRequestPort_`{ArbName}_{ReqName}_requestedMode( &<variable> );

### 52. 模式 Switch Ports
*原文标题：Mode Switch Ports*

As with Mode Requests, the BSW Mode Manager only references the mode switch interfaces defined in the context of the corresponding SW-C Description in its Provide Ports for mode switches. For the above example the declaration for a mode switch is:

ProvidePort AppModeInterface modeSwitchPort_{ModConName}_{SwitchName};

The configuration parameter BswMModeSwitchInterfaceRef references this Mode Switch interface.

To switch the currently active mode, the BSW Mode Manager implementation must insert one of the following calls into its actions list:

`Rte_Switch_modeSwitchPort_`{ModConName}_{SwitchName}_currentMode( <new_mode> );

`SchM_Switch_modeSwitchPort_`{ModConName}_{SwitchName}_currentMode( <new_mode> );

### 其余 197 章（内容从略，见纯文本全文）

53. 模式 Switches的通知
54. 组件类型 and Internal 行为
55. Ethernet switch port group switching
56. 服务 Discovery 控制
57. 通用
58. Client 服务/Event Subscription Request
59. Client 服务/Event Subscription 状态通知
60. Server 服务 Offer Request
61. Server 服务/Event Subscription 状态通知
62. Connecting ports at 配置 time
63. API 规范
64. Imported 类型
65. 类型定义
66. BswM_ConfigType
67. BswM_ModeType
68. BswM_UserType
69. 功能定义
70. BswM_BswMPartitionRestarted
71. BswM_CanSM_CurrentState
72. BswM_ComM_CurrentMode
73. BswM_ComM_CurrentPNCMode
74. BswM_ComM_InitiateReset
75. BswM_Dcm_ApplicationUpdated
76. BswM_Dcm_CommunicationMode_CurrentState
77. BswM_Deinit
78. BswM_EcuM_CurrentState
79. BswM_EcuM_CurrentWakeup
80. BswM_EcuM_RequestedState
81. BswM_EthIf_PortGroupLinkStateChg
82. BswM_EthSM_CurrentState
83. BswM_FrSM_CurrentState
84. BswM_Init
85. BswM_J1939DcmBroadcastStatus
86. BswM_J1939Nm_StateChangeNotification
87. BswM_LinSM_CurrentSchedule
88. BswM_LinSM_CurrentState
89. BswM_LinTp_RequestMode
90. BswM_Nm_CarWakeUpIndication
91. BswM_Nm_StateChangeNotification
92. BswM_NvM_CurrentBlockMode
93. BswM_NvM_CurrentJobMode
94. BswM_RequestMode
95. BswM_Sd_ClientServiceCurrentState
96. BswM_Sd_ConsumedEventGroupCurrentState
97. BswM_Sd_EventHandlerCurrentState
98. BswM_SoAd_SoConModeChg
99. Call-back 通知
100. Scheduled functions
101. BswM_MainFunction
102. Expected 接口
103. Mandatory 接口
104. Optional 接口
105. 服务接口
106. 范围 of this Chapter
107. Ports
108. BswM_modeNotificationPort
109. BswM_modeRequestPort
110. BswM_modeSwitchPort
111. S/R Port BswM_ClientServiceRequest
112. S/R Port BswM_ServerServiceRequest
113. 模式 Switch Port BswM_ClientServiceSubscriptionState
114. 模式 Switch Port BswM_ServerServiceSubscriptionState
115. 模式 Declaration Groups
116. ModeDeclarationGroup MDG_ClientServiceSubscriptionState
117. ModeDeclarationGroup MDG_ServerServiceSubscriptionState
118. ModeSwitchInterfaces
119. ModeSwitchInterface ClientServiceSubscriptionState
120. ModeSwitchInterface ServerServiceSubscriptionState
121. S/R 接口
122. S/R 接口 ClientServiceRequest
123. S/R 接口 ServerServiceRequest
124. 类型
125. BswM_ClientModeRequestType
126. BswM_OfferModeType
127. API to Request Port Mappings
128. 时序图
129. Deferred operation of BswM
130. Immediate operation of BswM
131. 配置规范
132. How to read this chapter
133. Containers and 配置 parameters
134. BswM
135. BswMConfig
136. BswMArbitration
137. BswMLogicalExpression
138. BswMModeCondition
139. BswMConditionValue
140. BswMBswMode
141. BswMModeDeclaration
142. BswMEventRequestPort
143. BswMModeRequestPort
144. BswMModeInitValue
145. BswMCompuScaleModeValue
146. BswMEventRequestSource
147. BswMModeRequestSource
148. BswMBswModeNotification
149. BswMCanSMIndication
150. BswMComMIndication
151. BswMComMInitiateReset
152. BswMComMPncRequest
153. BswMDcmApplicationUpdatedIndication
154. BswMDcmComModeRequest
155. BswMEcuMIndication
156. BswMEcuMRUNRequestIndication
157. BswMEcuMWakeupSource
158. BswMEthIfPortGroupLinkStateChg
159. BswMEthSMIndication
160. BswMFrSMIndication
161. BswMGenericRequest
162. BswMJ1939DcmBroadcastStatus
163. BswMJ1939NmIndication
164. BswMLinSMIndication
165. BswMLinScheduleIndication
166. BswMLinTpModeRequest
167. BswMModeSwitchErrorEvent
168. BswMNmCarWakeUpIndication
169. BswMNmStateChangeNotification
170. BswMNvMJobModeIndication
171. BswMNvMRequest
172. BswMPartitionRestarted
173. BswMSdClientServiceCurrentState
174. BswMSdConsumedEventGroupCurrentState
175. BswMSdEventHandlerCurrentState
176. BswMSoAdSoConModeChg
177. BswMSwcModeNotification
178. BswMSwcModeRequest
179. BswMSwitchAckNotification
180. BswMTimer
181. BswMRule
182. BswMDataTypeMappingSets
183. BswMModeControl
184. BswMAction
185. BswMAvailableActions
186. BswMClearEventRequest
187. BswMComMAllowCom
188. BswMComMModeLimitation
189. BswMComMModeSwitch
190. BswMCoreHaltMode
191. BswMDeadlineMonitoringControl
192. BswMEcuMDriverInitListBswM
193. BswMEcuMGoDownHaltPoll
194. BswMEcuMSelectShutdownTarget
195. BswMEcuMStateSwitch
196. BswMEthIfStartAllPorts
197. BswMEthIfSwitchPortGroupRequestMode
198. BswMFrSMAllSlots
199. BswMIdsMBlockStateChangeRequest
200. BswMIdsMTransmissionStateChangeRequest
201. BswMJ1939DcmStateSwitch
202. BswMJ1939RmStateSwitch
203. BswMLinScheduleSwitch
204. BswMNMControl
205. BswMPduGroupSwitch
206. BswMPduRouterControl
207. BswMRteModeRequest
208. BswMRteStart
209. BswMRteStop
210. BswMRteSwitch
211. BswMSchMSwitch
212. BswMSdClientServiceModeRequest
213. BswMSdConsumedEventGroupModeRequest
214. BswMSdServerServiceModeRequest
215. BswMSdServiceGroupSwitch
216. BswMSetFirewallState
217. BswMSwitchIPduMode
218. BswMTimerControl
219. BswMTriggerIPduSend
220. BswMUserCallout
221. BswMActionList
222. BswMActionListItem
223. BswMRteModeRequestPort
224. BswMSwitchPort
225. BswMGeneral
226. BswMUserIncludeFiles
227. 发布信息
228. 附录
229. 不适用需求
230. Change history of AUTOSAR traceable items
231. Traceable item history of this document according to AUTOSAR Release R23-11
232. Added 规范 Items in R23-11
233. Changed 规范 Items in R23-11
234. Deleted 规范 Items in R23-11
235. Added Constraints in R23-11
236. Changed Constraints in R23-11
237. Deleted Constraints in R23-11
238. Added 规范 Items in R24-11
239. Changed 规范 Items in R24-11
240. Deleted 规范 Items in R24-11
241. Added Constraints in R24-11
242. Changed Constraints in R24-11
243. Deleted Constraints in R24-11
244. Added 规范 Items in R25-11
245. Changed 规范 Items in R25-11
246. Deleted 规范 Items in R25-11
247. Added Constraints in R25-11
248. Changed Constraints in R25-11
249. Deleted Constraints in R25-11
