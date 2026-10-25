# Specification of Function Inhibition Manager (`FunctionInhibitionManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 082 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_FunctionInhibitionManager_082\AUTOSAR_CP_SWS_FunctionInhibitionManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_FunctionInhibitionManager_082\AUTOSAR_CP_SWS_FunctionInhibitionManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_FunctionInhibitionManager_082\zzgen\CP_SWS_FunctionInhibitionManager.complete.txt`

## 文档简介

The Function Inhibition Manager is responsible for providing a control mechanism for software components and the functionality therein. In this context, a functionality can be built up of the contents of one, several or parts of runnable entities with the same set of permission / inhibit conditions. By means of the FiM, inhibiting ( deactivation of application function) these functionalities can be configured and even modified during runtime (post-built configuration).

Functionality and runnable entity are different and independent types of classifications. Runnable entities are mainly characterized by their scheduling requirements. In contrast to that, functionalities are classified by their inhibit conditions. The services of the FiM focus on functionalities in SW-Cs, however, they are not limited to them. Functionalities of the BSW can also use the FiM services.

The functionalities are assigned to an identifier (FID - function identifier) along with the inhibit conditions for that particular identifier. The functionalities poll for the permission state of their respective FIDs before execution. If an inhibit condition comes true for a particular identifier, the corresponding functionality shall not be executed anymore.

The FiM is closely related to the Dem since diagnostic events and their status information are supported as inhibit conditions. Hence, functionality which needs to be stopped in case of a failure, e.g. of a certain sensor, can be represented by a particular identifier. If the failure is detected and the event is reported to the Dem, the FiM then inhibits the FID and therefore the corresponding functionality.

In order to handle the relation of functionality and linked events, the identifier and inhibit conditions of the functionality have been introduced into the SW-C template (equivalence for BSW) and during configuration, data structures are built up to deal with the sensitiveness of the identifiers against certain events.

Software components can be integrated into a new environment as a collection of events which can be configured without big effort. Furthermore, system analysis is supported when questions as, for example, "Which functionality is inhibited if a particular event is detected?" arise. The data basis of the FiM serves as documentation of the configured relations between events and the SW-C to be inhibited.

In AUTOSAR, the RTE deals with SW-C in terms of their interfaces and scheduling requirements. In contrast to that

## 模块依赖

Upstream requirements:
⌈
The AUTOSAR Function Inhibition Manager (FiM) has interfaces and dependencies on the Diagnostic Event Manager (Dem), the Software Components (SW-C) with FID interface, the ECU State Manager, the RTE and the BSW modules supposed to be inhibited by the FiM.
⌋

* The Diagnostic Event Manager (Dem) is in charge of handling detected malfunctions denoted as events and reported by monitoring functions. The Dem informs and updates the Function Inhibition Manager (FiM) upon changes of the monitor status in order to stop or release functionalities according to assigned dependencies.
* SW-Components (SW-C) with FID interface query for permission to execute functionality identified by an FID at the FiM. The FIDs have to be provided by the SW components.
* ECU State manager is responsible for the basic initialization and de-initialization of BSW-components.
* BSW module(s) that are supposed to be inhibited by the FiM shall use the FiM interface to ask for permission. Therefore, the affected BSW modules have to provide the corresponding configuration data (EventID - FID - Inhibition mask relation) at configuration time realized by using a template similar to the SW-component template. The interface handling for BSW modules corresponds to the interface handling for SW-components.
* The RTE implements scheduling mechanisms for BSW, e.g. assigns priority and memory protection to each BSW module used in an ECU.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The Function Inhibition Manager is responsible for providing a control mechanism for software components and the functionality therein. In this context, a functionality can be built up of the contents of one, several or parts of runnable entities with the same set of permission / inhibit conditions. By means of the FiM, inhibiting ( deactivation of application function) these functionalities can be configured and even modified during runtime (post-built configuration).

Functionality and runnable entity are different and independent types of classifications. Runnable entities are mainly characterized by their scheduling requirements. In contrast to that, functionalities are classified by their inhibit conditions. The services of the FiM focus on functionalities in SW-Cs, however, they are not limited to them. Functionalities of the BSW can also use the FiM services.

The functionalities are assigned to an identifier (FID - function identifier) along with the inhibit conditions for that particular identifier. The functionalities poll for the permission state of their respective FIDs before execution.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| Activity state | The activity state is the status of a software component being executed. The activity state results from the permission state as a precondition and physical enable condition, too. It is not calculated by the FiM and not available as a status variable. It can only be derived from local information within a software component. For further details, see chapter . |
| API | Application Programming Interface |
| BSW | Basic Software |
| Dem | Diagnostic Event Manager |
| ECU | Electronic Control Unit |
| FID | Function Identifier |
| FiM | Function Inhibition Manager |
| Functionality | Functionality comprises User-visible and User-non-visible functional aspects of a system (see ). |

In addition to that - in the FiM context - a functionality can be built up of the contents of one, several or parts of runnable entities with the same set of permission / inhibit conditions. By means of the FiM, the inhibition of these functionalities can be configured and even modified by calibration. Each functionality is represented by a unique FunctionId.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. Related standards and norms

IEC 7498-1 The Basic Model, IEC Norm, 1994

 D1.5-General Architecture; ITEA/EAST-EEA, Version 1.0; chapter 3, page 72 et seq.

 D2.1-Embedded Basic Software Structure Requirements; ITEA/EAST-EEA, Version 1.0 or higher

 D2.2-Description of existing solutions; ITEA/EAST-EEA, Version 1.0 or higher.

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Function Inhibition Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Function Inhibition Manager.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

Upstream requirements:
⌈
FID numbers shall be unique per FiM.
⌋

Since communication between software components and basic software is limited to one ECU, the FiM can only control FIDs being located on the same ECU. Note that the RTE does currently not support communication between basic software and software components located on different ECUs.

### 8. 限制
*原文标题：Limitations*

Timing constrains have to be considered for the whole system. Note that the process and response times strongly depend on the implementation of the FiM module. Hence, if there are explicit needs for faster responses of the FiM than the cycle (time slice of the task) these needs have to be considered by the FiM implementation specifically by the affected application. Special measures have to be implemented by the FiM which are not explicitly specified in this AUTOSAR document, since here, the implementation is - on purpose - not prescribed.

  Upstream requirements:
⌈
The FiM shall compute the permission of a FID independently of the state of other FIDs.
⌋

Interdependencies between FIDs are not supported by the FiM. That means an FID does not influence another FID.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The FiM is designed to fulfill the design demands for ECUs with respect to a central handling of reactions of the system upon detected malfunctions, e.g. open circuit or shortcut. Therefore, the immediate domain of applicability of the FiM is currently body, chassis and powertrain ECUs. However, there is no reason that the FiM cannot be used in implementations of ECUs for other car domains as, for example, infotainment.

One major constraint is that the FiM alone will NOT be able to handle SW-Components that are:

1. time critical - They might be too slow for local reconfigurations (fast backup reaction in case of e.g. invalid signals).

2. physically interactive - They might not be sufficiently flexible.

3. safety critical - They might not have sufficient software integrity.

### 10. Dependencies on other 模块
*原文标题：Dependencies on other modules*

Upstream requirements:
⌈
The AUTOSAR Function Inhibition Manager (FiM) has interfaces and dependencies on the Diagnostic Event Manager (Dem), the Software Components (SW-C) with FID interface, the ECU State Manager, the RTE and the BSW modules supposed to be inhibited by the FiM.
⌋

* The Diagnostic Event Manager (Dem) is in charge of handling detected malfunctions denoted as events and reported by monitoring functions. The Dem informs and updates the Function Inhibition Manager (FiM) upon changes of the monitor status in order to stop or release functionalities according to assigned dependencies.
* SW-Components (SW-C) with FID interface query for permission to execute functionality identified by an FID at the FiM. The FIDs have to be provided by the SW components.
* ECU State manager is responsible for the basic initialization and de-initialization of BSW-components.
* BSW module(s) that are supposed to be inhibited by the FiM shall use the FiM interface to ask for permission.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 需求
*原文标题：Requirements*

There are three sources of requirements for this specification:

* The requirements for the functionality of the FiM service are specified in . In order to model the VFB view of the Service, the chapter on AUTOSAR Services of the VFB specification  has to be considered as an additional requirement.
* For the formal description of the SW-C attributes  gives the requirements.

### 12. Use Cases

On each ECU, typically one instance of the FiM Service and several Atomic Software Component instances using this Service are employed. The Atomic Software Components are named "clients" further on in this document.

Additionally, there are parts of the basic software, which either control the FiM Manager (e.g. the ECUState Manager for initialization and shutdown) or need to query the FiM for execution permission themselves.

### 13. 需求 traceability
*原文标题：Requirements traceability*

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The scheduling strategy that is built inside the Basic Software Modules shall be compatible with the strategy used in the system |  |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| Data types naming convention |  |  |
| API naming convention |  |  |
| Shared code shall be reentrant |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support link-time configuration |  |  |
| BSW Modules shall support pre-compile configuration |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| A Basic Software Module can return a module specific types |  |  |
| The Basic Software Module specifications shall specify which other configuration files from othe |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

### 15. Background & Rationale

The Function Inhibition Manager allows querying the permission / inhibition status of software components and the functionality therein. In the FiM context an FID (FID - function identifier) identifies an application functionality along with the inhibit conditions for that particular identifier. The functionalities poll for the permission state of their FID before execution. If an inhibit condition applies for a particular identifier, the corresponding functionality is not allowed to be executed anymore. By means of the FiM, the inhibition of these functionalities can be configured and even modified by calibration. Dem events and their status information are supported as inhibit conditions.

In order to handle the relation of functionality and associated affecting events, the identifier (FID) and inhibit conditions (events) of the functionality are included in the SW component template (equivalence for BSW). During configuration of the FiM, data structures (i.e. an inhibit matrix) are built up to deal with the sensitiveness of the identifiers against certain events.

### 16. 需求
*原文标题：Requirements*

### 17. FiM 核 variables
*原文标题：FiM core variables*

### 18. 定义 of '诊断 Event'
*原文标题：Definition of 'Diagnostic Event'*

A 'Diagnostic Event' is an identifier provided by the Dem to a specific diagnostic monitor function to report an error.

See `AUTOSAR_SWS_DiagnosticEventManager` document for further details .

### 19. 定义 of 'Monitor Status'
*原文标题：Definition of 'Monitor Status'*

A 'monitor status' is the status calculated by the Dem according to the reported values of monitor functions. Possible values are defined by `Dem_MonitorStatusType`.

See `AUTOSAR_SWS_DiagnosticEventManager` document for further details .

### 20. 定义 of 'Monitored 组件'
*原文标题：Definition of 'Monitored Component'*

A 'Monitored Component' is an identifier provided by the Dem to a specific monitored component (hardware component or signal). The FAILED status of a 'monitored component' represents the result of all assigned monitoring functions and inherited failure information from other DemComponents.

See `AUTOSAR_SWS_DiagnosticEventManager` document for further details .

### 21. 定义 of 'Summarized Event'
*原文标题：Definition of 'Summarized Event'*

Upstream requirements:
⌈
The FiM configuration shall support summarizing events. A summarized event consists of multiple single diagnostic events.
⌋

During the configuration process, these single events can be combined to a summarized event (`ECUC_FiM_00037`). A summarized event simplifies dealing with the multiple events that are associated with or represented by the particular summarized event. For simplicity, this particular summarized event can be used as an inhibit condition in the SW-C templates.

  Upstream requirements:
⌈
The FiM shall also be able to process the inhibit conditions of all FIDs associated to one summarized event if one of the Dem Events associated to this summarized event is reported to the FiM.
⌋

Hence, the particular summarized event is just a representative of multiple diagnostic events (ref.). A use case for summarized events is for example the combination of all error conditions that indicate a failed sensor:

A sensor X has multiple diagnostics, e.g. short cut ground, battery and open circuit: X_SCG, X_SCB and X_OC. The functions FID_0, FID_1, ..., FID_N are to be inhibited in case of this fault.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 定义 of '功能 Identifier'
*原文标题：Definition of 'Function Identifier'*

The Fim implements the calculation of function permissions. Object to those calculations are SW-Components or logical units, which receive the information "Permission granted" / "permission denied".

To address those components, these have to be configured in FIM and a Function Identifier is assigned to address them via interfaces.

  Upstream requirements:
⌈
The configuration process shall guarantee that FunctionIds are unique per FiM. Two distinct functionalities with different dependencies on events shall never have the same FunctionId (see also ).
⌋

  Upstream requirements:
⌈
The FiM module's environment shall use the FunctionId to directly point to the associated functionality information (permission status etc.)
⌋

The flow of information starts with the API call of the Dem providing changes of the event information. This information is processed and dependencies to FIDs are evaluated. Finally, the permission state of the FIDs is accessed via API through the RTE (Figure ).

The permission state of each FID is calculated based on the EventIds assigned to a specific FID. Afterwards, the calculated permission states of each FID (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 定义 of '功能 Identifier permission 状态'
*原文标题：Definition of 'Function Identifier permission state'*

Upstream requirements: ,
⌈
The FID permission state contains the information whether a functionality represented by its FID can be executed. If the permission state == TRUE, the functionality associated with the FID is permitted to be executed. If the permission state == FALSE, the functionality associated with the FID is not allowed to be executed.
⌋

The permission state is based on events reported by the Dem. Therefore, the permission state does not directly consider physical conditions (e.g. temperature, engine speed...) but those conditions reported to the Dem (e.g. sensor defect).

Additionally to the permission state as prerequisite, the activity state (is the function active or not) includes physical enable conditions representing whether the functionality is indeed executed or not, i.e. is active or not.

As stated above, one possible implementation is to provide the permission state in status variables. An alternative is to compute the permission on the query based on the underlying dependencies.

Hint: If the permission states are stored in status variables, they are unique values per FID. SW-components access the status via `FiM_GetFunctionPermission`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. FiM 核 functionalities
*原文标题：FiM core functionalities*

### 25. 初始化
*原文标题：Initialization*

Upstream requirements:
⌈
The function `FiM_DemInit` shall compute the permission state for all FIDs.
⌋

  Upstream requirements:
⌈
The function `FiM_DemInit` shall access the EventId states via the function `Dem_GetMonitorStatus` and the component information via `Dem_GetComponentFailed`.
⌋

 Initial FID state information callback
  Upstream requirements:
⌈
If the FiM initializes an initial FID state as defined in  and the container FiMCallbackFIDStatusChanged is configured for this FiMFID, the FiM shall call the CBFidStatusChanged callback with `FiM_FidStatusChangeType` set to INIT and Permission set to the new initialized FID state.

The FiM will trigger the CBFidStatusChanged when the FID is initialized or the FiD states. The callback may be called at a time the destination component is yet not finalized by it's init function. It is up to the component to handle calls of CBFidStatusChanged at any time.
⌋

  Upstream requirements: ,
⌈
If Dem events status information is used, the FiM module shall compute the permission states for all FIDs at its initialization based on all restored monitor status information (not only events stored in the fault memory) of the Dem.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. FiM 数据结构
*原文标题：FiM Data Structure*

Upstream requirements: , ,
⌈
The configuration process of the FiM shall create data structures within the FiM module to store the inhibit relations (EventID - FID - applicable mask).
⌋

A configurable number of EventIds and inhibition masks are assigned to one FID. The number of EventIds and inhibit masks per FID have to match so that for each configured event, a corresponding inhibit mask exists.

The inhibition mask contains the inhibition conditions for a FID provided that the associated EventIds have a certain status (`Dem_UdsStatusByteType`). These masks define which states of an event the FID is sensitive to. However, the mask does not only address certain bits according to the `Dem_UdsStatusByteType`, it rather selects an algorithm to calculate the boolean inhibition condition from the `Dem_UdsStatusByteType`.

The implementation of the FiM data structure cannot be prescribed. A possible implementation of the inhibit matrix could be a block of calibration values for each inhibit source (=EventId). That means for each EventId a list of FIDs and masks is available that shall be inhibited by this EventId.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Interaction between Dem and 功能 Inhibition 管理器 (FiM)
*原文标题：Interaction between Dem and Function Inhibition Manager (FiM)*

Upstream requirements:
⌈
The purpose of the FiM module is to provide services to control (permit / inhibit) functionality within SW-Cs based on Dem events being supported as inhibit conditions.
⌋

  Upstream requirements:
⌈
The Function Inhibition Manager shall use the FID - EventIDs - inhibition masks relations provided by the software components to determine the permission state for all configured FIDs.
⌋

Upon changes in the monitor status of a reported event, the Dem informs the FiM about the monitor status change via the API function `FiM_DemTriggerOnMonitorStatus`, if DemTriggerFiMReports is enabled.

On being informed about a monitor status change, the Fim uses the Api `Dem_GetMonitorStatus` to recalculate the function inhibitions.

1. Note: From the function point of view, synchronous update of inhibit / release conditions can be made either within or outside of `FiM_MainFunction` API.

As mentioned in chapter , the implementation of the FiM highly depends on requirements (e.g. timing requirements) derived from applications. If an application requires fast reaction times the FiM has to provide FID information sufficiently fast to allow triggering limp-home functionality.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Interaction between SW-Components and 功能 Inhibition 管理器 (FiM)
*原文标题：Interaction between SW-Components and Function Inhibition Manager (FiM)*

Upstream requirements:
⌈
The configuration engineer shall provide at compile time the inhibit conditions for each FID required for handling the dependencies of functionalities and events in the FiM module.
⌋

Note, that modifications by calibration shall be possible. The configuration mechanism of the FiM using SW-component template contents shall consider these requirements.

First, the FID needs to be introduced and allocated. Furthermore, for each FID a list of events plus associated mask causing the inhibition of the FID shall be provided by the SW-component. Chapter  introduces how the SW-component template considers these configuration requirements.

During the configuration process, the data structures are built up. Depending on the implementation this could, e.g. be a mapping of an event onto all affected FIDs or alternatively vice versa, a mapping of a FID onto all events affecting it.

Controlling implies that within the implemented functionality, the permission of a FID is queried via AUTOSAR service.

  Upstream requirements:
⌈
The FiM module shall ensure an immediate control of functionality by synchronously responding to an incoming permission query.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Application 示例 for FiM usage
*原文标题：Application example for FiM usage*

* The configuration of the FiM actually establishes the relationship between the EventId and the assigned FunctionId(s)
* The required information is:

  * For each FunctionId: How does the status of the FunctionId depend on the status of one/several EventIds?

    * The mask determines the relationship between the EventId status and the inhibit status of the FunctionId.
    * The row result is 'OR'ed to come up with the overall result for one FunctionId if it depends on several EventIds.

### 30. OBD-Functionality

### 31. In-Use-Monitor Performance Ratio (IUMPR) 支持
*原文标题：In-Use-Monitor Performance Ratio (IUMPR) Support*

In order to track the behavior of diagnostic functions in every day usage, in particular the capability to find malfunctions, the regulations require the tracking of this performance in relation to a standardized driving profile. This is called "In-Use Monitor Performance Ratio" (IUMPR) defined as the number of times a fault could have been found (=numerator) divided by the number of times the standardized driving profile has been fulfilled (=denominator). The relevant data recording is allocated in the Dem based on FIDs and EventIDs.

Thus, based on the FiM configuration of the referenced FIDs it can be evaluated whether a Ratio Id specific data record needs to be stopped. In particular, IUMPR tracking shall be stopped as long as the entry remains visible in service $07.

The Dem may use the FiM configuration for its IUMPR calculation or by call of `FiM_GetFunctionPermission` of a dedicated FID.

Note: The FiM does not provide special OBDII functionality but uses already existing mechanisms for OBDII.

### 32. 错误分类
*原文标题：Error classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 33. Development 错误
*原文标题：Development Errors*

Definition of development errors in module FiM
  Upstream requirements: , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API function called before the FiM module has been full initialized or after the FiM module has been shut down | FIM_E_UNINIT | 0x01 |
| FiM_GetFunctionPermission called with wrong FID | FIM_E_FID_OUT_OF_RANGE | 0x02 |
| Dem calls FiM with invalid EventId | FIM_E_EVENTID_OUT_OF_RANGE | 0x03 |
| API is invoked with NULL Pointer. | FIM_E_PARAM_POINTER | 0x04 |
| Invalid configuration set selection | FIM_E_INIT_FAILED | 0x05 |

⌋

### 34. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 35. Production 错误
*原文标题：Production Errors*

There are no productions errors.

### 36. Extended Production 错误
*原文标题：Extended Production Errors*

There are no Extended Production Errors.

### 37. 配置 Constraints
*原文标题：Configuration Constraints*

⌈
For each configured FiMInhibitionConfiguration, at least one of FiMInhSumRef or FiMInhEventRef or FiMInhComponentRef shall be configured.
⌋

 Parameter FiMEventUpdateTriggeredByDem
⌈
For event inhibition tracking to be enabled (FiMInhibitionTrackingDepth > 0), the configuration parameter FiMEventUpdateTriggeredByDem shall be configured to TRUE.
⌋

 Multiple inhibition masks
⌈
For event inhibition tracking to be enabled (FiMInhibitionTrackingDepth > 0), configuring multiple inhibition masks for the same combination `Dem_EventId` and `FiM_FunctionId` is strictly prohibited.
⌋

### 38. API 规范
*原文标题：API specification*

### 39. Imported 类型
*原文标题：Imported types*

In this chapter, all types included from the following files are listed:

 Definition of imported datatypes of module FiM
  Upstream requirements: ,
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Dem | Dem.h | Dem_ComponentIdType |
| ^ | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_MonitorStatusType |
| Std | Std_Types.h | Std_ReturnType |

⌋

### 40. 类型定义
*原文标题：Type definitions*

### 41. FiM_ConfigType

Definition of datatype `FiM_ConfigType`
  Upstream requirements: ,
⌈
| Name | FiM_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | -- | < |
| ^ | Type | - |
| ^ | Comment | implementation specific |
| Description | This type defines a data structure for the post build parameters of the FIM. At initialization the FIM gets a pointer to a structure of this type to get access to its configuration data, which is necessary for initializsation. | < |
| Available via | FiM.h | < |

⌋

### 42. 功能定义
*原文标题：Function definitions*

This is a list of functions provided for upper layer modules.

### 43. 接口 ECUState 管理器 <-> FiM
*原文标题：Interface ECUState Manager <-> FiM*

### 44. FiM_Init

Definition of API function `FiM_Init`
  Upstream requirements: , ,
⌈
| Service Name | FiM_Init | < |
|---|---|---|
| Syntax | void FiM_Init ( |  |

  const `FiM_ConfigType`* FiMConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | FiMConfigPtr | - |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This service initializes the FIM. | < |
| Available via | FiM.h | < |

⌋

Note: see Chapter

  Upstream requirements: ,
⌈
If development error detection is turned on the FiM module shall report an error to the DET if it has not successfully completed the initialization and has detected not permitted access.
⌋

  Upstream requirements: ,
⌈
A static status variable denoting if the FiM is initialized shall be initialized with value 0 before any APIs of the FiM is called.

`FiM_Init` shall set the static status variable to a value not equal to 0.
⌋

In order to restore the permission states quickly, it is recommended that the Dem provides direct access to monitor status information if Dem and FiM are implemented as a cluster.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. 接口 SW-Components <-> FiM
*原文标题：Interface SW-Components <-> FiM*

### 46. FiM_GetFunctionPermission

Definition of API function `FiM_GetFunctionPermission`
  Upstream requirements: , , ,
⌈
| Service Name | FiM_GetFunctionPermission | < |
|---|---|---|
| Syntax | Std_ReturnType FiM_GetFunctionPermission ( |  |

  `FiM_FunctionIdType` FID,
  boolean* Permission
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | FID | Identification of a functionality by assigned FID. The FunctionId is configured in the FIM. |

Min.: 1 (0: Indication of no functionality) Max.: Result of configuration of FIDs in FIM (Max is either 255 or 65535)
| Parameters (inout) | None | < |
|---|---|---|
| Parameters (out) | Permission | TRUE: FID has permission to run FALSE: FID has no permission to run, i.e. shall not be executed |
| Return value | Std_ReturnType | E_OK: The request is accepted E_NOT_OK: The request is not accepted, ie. initialization of FIM not completed |
| Description | This service reports the permission state to the functionality. | < |
| Available via | FiM.h | < |

⌋

  Upstream requirements:
⌈
The SW Components and the BSW shall use the function `FiM_GetFunctionPermission` to query for the permission to execute a certain functionality represented by the respective FID.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. FiM_ SetFunctionAvailable

Definition of API function `FiM_SetFunctionAvailable`
  Upstream requirements:
⌈
| Service Name | FiM_SetFunctionAvailable | < |
|---|---|---|
| Syntax | Std_ReturnType FiM_SetFunctionAvailable ( |  |

  `FiM_FunctionIdType` FID,
  boolean Availability
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | FID | Identification of a functionality by assigned FID. |
| ^ | Availability | The permission of the requested FID: TRUE: Function is available. FALSE: Function is not available. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: The request is accepted E_NOT_OK: Request is not accepted (e.g. invalid FID is given) |
| Description | This service sets the availability of a function. The function is only available if FiMAvailabilitySupport is configured as True. | < |
| Available via | FiM.h | < |

⌋

### 48. FiM_GetInhibitingEvents

Definition of API function `FiM_GetInhibitingEvents`
  Upstream requirements:
⌈
| Service Name | FiM_GetInhibitingEvents | < |
|---|---|---|
| Syntax | Std_ReturnType FiM_GetInhibitingEvents ( |  |

  `FiM_FunctionIdType` FID,
  `FiM_EventIdArrayType`* EventIdBuffer
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant for different FID, non-reentrant for same FID | < |
| Variation | ({ecuc(FiM/FiMGeneral/FiMInhibitionTrackingDepth)} > 0) | < |
| Parameters (in) | FID | Identification of the Functionality by assigned ID. |
| Parameters (inout) | None | < |
| Parameters (out) | EventIdBuffer | Pointer to an array where the FiM will write the stored inhibiting Event IDs. |
| Return value | Std_ReturnType | E_OK: The request was successful. E_NOT_OK: The request failed (e.g., FIM not initalized, provided buffer not enough, invalid FID or null pointers). |
| Description | This service retrieves the list of Dem Event IDs that are currently causing the specified FID to be inhibited. | < |
| Available via | FiM.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 68 章（内容从略，见纯文本全文）

49. 接口 Dem <-> FiM
50. FiM_DemTriggerOnMonitorStatus
51. FiM_ DemTriggerOnComponentStatus
52. FiM_DemInit
53. Call-back 通知
54. CBFidStatusChanged
55. Scheduled functions
56. FiM_MainFunction
57. Expected 接口
58. Mandatory 接口
59. Optional 接口
60. 服务接口
61. Client-Server-Interfaces
62. FunctionInhibition
63. ControlFunctionAvailable
64. FunctionInhibitionCallback
65. Implementation 数据类型
66. FiM_FunctionIdType
67. FiM_EventIdArrayType
68. FiM_FidStatusChangeType
69. Ports
70. Internal 行为
71. 时序图
72. 初始化 sequence of FiM
73. FiM_DemTriggerOnMonitorStatus
74. 配置规范
75. How to read this chapter
76. Containers and 配置 parameters
77. FiM
78. FiMGeneral
79. FiMConfigSet
80. FiMFID
81. FiMInhibitionConfiguration
82. FiMSummaryEvent
83. FiMCallbackFIDStatusChanged
84. 发布信息
85. 附录
86. 不适用需求
87. Change history of AUTOSAR traceable items
88. Traceable item history of this document according to AUTOSAR Release R26-11
89. Added 规范 Items in R26-11
90. Changed 规范 Items in R26-11
91. Deleted 规范 Items in R26-11
92. Added Constraints in R26-11
93. Changed Constraints in R26-11
94. Deleted Constraints in R26-11
95. Traceable item history of this document according to AUTOSAR Release R25-11
96. Added 规范 Items in R25-11
97. Changed 规范 Items in R25-11
98. Deleted 规范 Items in R25-11
99. Added Constraints in R25-11
100. Changed Constraints in R25-11
101. Deleted Constraints in R25-11
102. Traceable item history of this document according to AUTOSAR Release R24-11
103. Added 规范 Items in R24-11
104. Changed 规范 Items in R24-11
105. Deleted 规范 Items in R24-11
106. Added Constraints in R24-11
107. Changed Constraints in R24-11
108. Deleted Constraints in R24-11
109. Traceable item history of this document according to AUTOSAR Release R23-11
110. Added 规范 Items in R23-11
111. Changed 规范 Items in R23-11
112. Deleted 规范 Items in R23-11
113. Traceable item history of this document according to AUTOSAR Release R22-11
114. Added 规范 Items in R22-11
115. Changed 规范 Items in R22-11
116. Deleted 规范 Items in R22-11
