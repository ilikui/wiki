# Specification of Diagnostic Event Manager (`DiagnosticEventManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 019 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticEventManager_019\AUTOSAR_CP_SWS_DiagnosticEventManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticEventManager_019\AUTOSAR_CP_SWS_DiagnosticEventManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticEventManager_019\zzgen\CP_SWS_DiagnosticEventManager.complete.txt`

## 文档简介

The service component Diagnostic Event Manager (Dem) is responsible for processing and storing diagnostic events (errors) and associated data. Further, the Dem provides fault information to the Dcm (e.g. read all stored DTCs from the event memory). The Dem offers interfaces to the application layer and to other BSW modules.

The basic target of the Dem specification document is to define the ability for a common approach of a "diagnostic fault memory" for automotive manufacturers and component suppliers

This specification defines the functionality, API and the configuration of the AUTOSAR basic software module Diagnostic Event Manager (Dem). Parts of the internal behavior are manufacturer specific and described in the Limitations chapter.

## 模块依赖

The AUTOSAR Diagnostic Event Manager (Dem) has interfaces and dependencies to the following Basic software modules and Software Components:

* The Function Inhibition Manager (FiM) (refer to ) stands for the evaluation and assignment of events to the required actions for Software Components (e.g. inhibition of specific "Monitors"). The Dem informs and updates the Function Inhibition Manager (FiM) upon changes of the monitor status in order to stop or release function entities according to assigned dependencies.
* The Diagnostic Communication Manager (Dcm) (refer to ) is in charge of the UDS and SAE J1979 communication path and execution of diagnostic service resulting in the processing of diagnostic requests from an external tester or onboard test system. It forwards requests coming from an external diagnostic scan tool and is further responsible for assembly of response messages (DTC, status information, etc.) which will be transferred to the external diagnostic scan tool afterwards.
* The Diagnostic Communication Manager for J1939 (J1939Dcm) (refer to ) is in charge of the SAE J1939-73 diagnostics communication protocol.
* Software-Components (SW-C) and Basic Software (BSW) modules can access the Dem to update and/or retrieve current monitor status and UDS status information. SW-Cs and BSW modules can retrieve data from the Dem e.g. to turn the indicator lamps on or off. The monitor is a sub-component of a SW-C / BSW module.
* Data Provider SW-Cs and/or BSW modules will provide data (i.e. event related data) required by the Dem, for example, to be able to create event memory entries.
* The NVRAM Manager (NvM) (refer to ) provides mechanisms to store data blocks in NVRAM. NVRAM blocks (maximum size is a matter of configuration) are assigned to the Dem and used by the Dem to achieve permanent storage of UDS status information and associated data (e.g. over power-on reset).
* The ECU State Manager (EcuM) is responsible for the basic initialization and de-initializati

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The service component Diagnostic Event Manager (Dem) is responsible for processing and storing diagnostic events (errors) and associated data. Further, the Dem provides fault information to the Dcm (e.g. read all stored DTCs from the event memory). The Dem offers interfaces to the application layer and to other BSW modules.

The basic target of the Dem specification document is to define the ability for a common approach of a "diagnostic fault memory" for automotive manufacturers and component suppliers

This specification defines the functionality, API and the configuration of the AUTOSAR basic software module Diagnostic Event Manager (Dem). Parts of the internal behavior are manufacturer specific and described in the Limitations chapter.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Dem module that are not included in the .

### 3. Acronyms

| Acronym | Description |
|---|---|
| Activation Mode 1 | Absence of malfunction - The MIL shall blink for one flash. |
| Activation Mode 2 | "on-demand-MI" - The MIL shall show blink for two flashes if the OBD system would command an on-demand-MI according to the discriminatory display strategy. |
| Activation Mode 3 | "short-MI" - The MIL shall blink for three flashes if the OBD system would command a short-MI according to the discriminatory display strategy. |
| Activation Mode 4 | "continuous-MI" - The MIL shall remain continuously ON ("continuous-MI") if the OBD system would command a continuous-MI according to the discriminatory display strategy. |
| Aging | Unlearning/deleting of a no longer failed event/DTC after a defined number of operation cycles from event memory. |
| Aging Counter | The "Aging Counter" or "Aging Cycle Counter" or "DTC Aging Counter" specifies the counter which is used to perform Aging. It counts the number of operation cycles until an event/DTC is removed from event memory. |
| Class B1 counter | Number of engine hours during which a Class B1 malfunction has been Confirmed and TestFailed. |
| Combined DTC | Normal DTC, but referenced by multiple events reported by several monitors (e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Abbreviations

| Abbreviation | Description |
|---|---|
| API | Application Programming Interface |
| BSW | Basic Software |
| CDD | Complex Device Driver |
| CRC | Cyclic Redundancy Check |
| Dcm | Diagnostic Communication Manager |
| Dem | Diagnostic Event Manager |
| Det | Default Error Tracer |
| DID | Data Identifier |
| DTC | Diagnostic Trouble Code |
| DTR | Diagnostic Test Result |
| DYC | OBD Term: Driving Cycle (OBD Term) |
| ECU | Electronic Control Unit |
| EcuM | Electronic Control Unit Manager |
| FDC | Fault Detection Counter |
| Fim | Function Inhibition Manager |
| FMI | Failure Mode Indicator (SAE J1939) |
| FTB | Failure Type Byte |
| HW | Hardware |
| ID | Identification/Identifier |
| ISO | International Standardization Organization |
| IUMPR | In Use Monitoring Performance Ratio (OBD Term) |
| J1939Dcm | SAEJ1939 Diagnostic Communication Manager |
| MIL | Malfunction Indicator Light (SAE J1979) or Lamp (SAE J1939) |
| NVRAM | Non volatile RAM |
| OBD | On-Board-Diagnostics |
| OC | Occurrence Count (SAE J1939) |
| OEM | Original Equipment Manufacturer (Automotive Manufacturer) |
| OS | Operating System |
| PID | Parameter Identification (SAE J1587 or SAE J1979) |
| PTO | Power Take Off |
| RAM | Random Access Memory |
| ROM | Read-only Memory |
| RTE | Runtime Environment |
| SPN | Suspect Parameter Number (SAE J1939) |

S

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Diagnostic Event Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Diagnostic Event Manager.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

Some of the synchronous API calls defined within the Dem might take variable time to complete. Thus, this variable time must be considered in the system configuration.

  Upstream requirements:
⌈
There shall only be one Dem module available per ECU.
⌋

The Dem can have multiple different sections of event memory. The mapping of a DTC to the respective section is done with the parameter DTC Origin. A specific ECU's Dem is only accessible by software components located inside the same ECU.

### 9. 限制
*原文标题：Limitations*

Timing constrains have to be considered for the whole ECU. If there are explicit needs for faster responses from the Dem than the Dem basic cycle time, special measures have to be implemented, that are not specified in this AUTOSAR document. This is especially the case in ECUs with many events.

The handling of infrastructure errors reported by the RTE during Dem <=> SW-C interactions is missing from the SWS and might have to be taken into account by implementers if they need it.

The Dem is able to support additional event memories (permanent memory and used defined memory), but the specific event memory processing is not defined in detail.

Some details on the interaction between Dem and specific emission-related SW-C are not specified in this specification, since they are dependent on the SW-C implementation. The following functionality is not defined:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

The Dem is designed to fulfill the design demands for ECUs with OBD requirements as well as for ECUs without OBD requirements. The immediate domains of applicability are currently body, chassis and powertrain ECUs. However, there is no reason why the Dem cannot be used to implement ECUs for other car domains like infotainment.

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The AUTOSAR Diagnostic Event Manager (Dem) has interfaces and dependencies to the following Basic software modules and Software Components:

* The Function Inhibition Manager (FiM) (refer to ) stands for the evaluation and assignment of events to the required actions for Software Components (e.g. inhibition of specific "Monitors"). The Dem informs and updates the Function Inhibition Manager (FiM) upon changes of the monitor status in order to stop or release function entities according to assigned dependencies.
* The Diagnostic Communication Manager (Dcm) (refer to ) is in charge of the UDS and SAE J1979 communication path and execution of diagnostic service resulting in the processing of diagnostic requests from an external tester or onboard test system. It forwards requests coming from an external diagnostic scan tool and is further responsible for assembly of response messages (DTC, status information, etc.) which will be transferred to the external diagnostic scan tool afterwards.
* The Diagnostic Communication Manager for J1939 (J1939Dcm) (refer to ) is in charge of the SAE J1939-73 diagnostics communication protocol.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 文件结构
*原文标题：File structure*

### 13. 代码文件结构
*原文标题：Code file structure*

For details refer to , including subchapters.

### 14. 头文件结构
*原文标题：Header file structure*

The symbolic names (refer to `TPS_ECUC_02108`) are generated for configuration containers containing an identifier parameter, like event Id symbols, operation cycles, indicators, enable/storage conditions, etc.

Note, that also SW-C event Ids are published especially for complex device drivers, which may access on the status of specific SW-C events. SW-Cs use different ports to distinguish between different events.

### 15. 集成 Hints
*原文标题：Integration Hints*

Due to cross-module communication it is recommend to map the Dem and J1939Dcm to the same Task to have for the RTE the correct call-context configured. There might be other BSW vendor-specific solutions possible allowing a more flexible mapping (e.g. by describing this cross-module communication in the BSW internal-behavior or by a similar mechanism with the Dcm <-> Dem interaction).

### 16. 需求 traceability
*原文标题：Requirements traceability*

The following table references the requirements specified in  as well as  and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Diagnostic event (fault) management shall be established as Basic SW Module |  |  |
| Access and handle specific data elements and data element groups if requested by an external scan tool |  |  |
| Notify the Function Inhibition Manager (FIM) upon changes of the event status in order to process them according to the SW components dependencies |  |  |
| Classification of events for series production, OBD and expert usage |  |  |
| Ability to access different event memories |  |  |
| Provide the diagnostic status information according to ISO 14229-1 |  |  |
| The diagnostic in AUTOSAR shall support event specific debounce counters to improve signal quality internally (According to ISO 14229-1 Appendix D) |  |  |
| Process events according to their defined importance like priority and/or severity |  |  |
| Uses standard mechanisms provided by persistency modules |  |  |
| Memory overflow indication |  |  |
| Event memory management |  |  |
| Provide defensive behavior |  |  |
| Provide an interface to retrieve the number of event memory entries |  |  |
| SAE J1939 lamp status |  |  |
| SAE J19 |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 功能规范
*原文标题：Functional specification*

The Diagnostic Event Manager (Dem) handles and stores the events detected by diagnostic monitors in both Software Components (SW-Cs) and Basic software (BSW) modules. The stored event information is available via an interface to other BSW modules or SW-Cs.

DemGeneral contains the global part of the configuration and DemConfigSet contains the multiple configuration part.

### 18. 启动行为
*原文标题：Startup behavior*

Upstream requirements:
⌈
The Dem module shall distinguish between a pre-initialization mode and a full-initialized mode (operation mode).
⌋

  Upstream requirements:
⌈
The function `Dem_PreInit` shall initialize the internal states of the Dem module necessary to process events and reset debounce counters reported by SW-C or BSW modules by using `Dem_SetEventStatus` and `Dem_ResetEventDebounceStatus`.
⌋

The function `Dem_PreInit` is called by the ECU State Manager during the startup phase of the ECU before the NVRAM Manager is initialized. The BSW modules can start reporting of related events via `Dem_SetEventStatus` (refer to ).

The function `Dem_Init` (refer also to ) is called during the startup phase of the ECU, after the NVRAM Manager has finished the restore of NVRAM data. SW-Components including monitors are initialized afterwards. The function `Dem_Init` is also used to reinitialize the Dem module after the `Dem_Shutdown` was called.

Caveats of `Dem_Init`: The Dem module is not functional until the Dem module's environment has called the function `Dem_Init`.

### 19. Monitor re-initialization

The primary initialization of the monitors in the application is done via `Rte_Start`. The initialization of the event-specific part of the monitor can be triggered by the Dem.

  Upstream requirements:
⌈
The Dem module shall provide the interface InitMonitorForEvent to trigger the initalization of a diagnostic monitor (refer also to ).
⌋

For details see also chapter .

The function parameter InitMonitorReason indicates the reason / trigger of initialization.

Note: The Dem module does not evaluate the return value (e.g. if other than E_OK) of this callback function.

Note: The configuration container DemCallbackInitMForE is used to specify the related port or c-callback per event.

  Upstream requirements:
⌈
A call to `Dem_RestartOperationCycle` shall re-initialize the diagnostic monitors of all related events by calling their respective callbacks InitMonitorForEvent with parameter InitMonitorReason set to `DEM_INIT_MONITOR_RESTART`.
⌋

  Upstream requirements:
⌈
The `Dem_ClearDTC` API shall trigger the callback function InitMonitorForEvent of the related event(s) in case of clearing the event(s). The InitMonitorReason parameter shall be set to `DEM_INIT_MONITOR_CLEAR`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 诊断 event 定义
*原文标题：Diagnostic event definition*

A 'Diagnostic Event' defines the atomic unit that can be handled by the Dem module. The status of a 'Diagnostic Event' represents the result of a monitor (refer to chapter ). The Dem receives the result of a monitor from SW-C via the RTE or other BSW modules.

The Dem module uses the EventId to manage the status of the 'Diagnostic Event' of a system and performs the required actions for individual test results, e.g. stores the freeze frame.

  Upstream requirements:
⌈
The Dem module shall represent each Diagnostic Event by an EventId and the related EventName.
⌋

All monitors and BSW modules use the EventId as a symbolic EventName. The Dem configuration tool replaces the symbolic names by numbers.

  Upstream requirements:
⌈
The EventId and the related EventName shall be unique per Dem module represented by the ECU configuration (refer to ).
⌋

The Dem is not designed to be able to handle the case where more than one monitor shares a single EventId.

The Dem module uses an internal monitor status to store the status of reported events. To the Dcm the UDS status is reported

The Dem module supports several event-specific configuration parameters as shown in the following figures.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Event priority

Event priority is defined as a ranking of events based upon level of importance. It is used to determine which fault entries may be removed from the event memory in case the number of stored events exceeds the maximum number of memory entries (event memory is full).

  Upstream requirements: ,
⌈
Each supported event shall have a priority assigned to it (refer to parameter DemDTCPriority in DemDTCAttributes).
⌋

  Upstream requirements: ,
⌈
A priority value of 1 shall be the highest priority. Larger priority value shall define lower importance.
⌋

### 22. Event occurrence

Upstream requirements:
⌈
The Dem module shall provide an occurrence counter per event memory entry.
⌋

  Upstream requirements:
⌈
The Dem module shall initialize the occurrence counter with the value one if the related event is entered in the respective event memory.
⌋

  Upstream requirements:
⌈
If the configuration parameter DemOccurrenceCounterProcessing is set to `DEM_PROCESS_OCCCTR_TF` (refer to DemPrimaryMemory or DemUserDefinedMemory), the Dem module shall increment the occurrence counter by one, triggered by each UDS status bit 0 (TestFailed) transition from 0 to 1, if the related event is already stored in the event memory.
⌋

  Upstream requirements:
⌈
If the configuration parameter DemOccurrenceCounterProcessing is set to `DEM_PROCESS_OCCCTR_CDTC` (refer to DemPrimaryMemory or DemUserDefinedMemory), the Dem module shall increment the occurrence counter by one, triggered by each UDS status bit 0 transition from 0 to 1, if the related event is already stored in the event memory and the UDS status bit 3 is equal to 1.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Event kind

There are two different types of events:

* BSW-related events (reported via C-API - `Dem_SetEventStatus`)
* SW-C-related events (reported via RTE operation - SetEventStatus)

This kind is configurable per event (refer to DemEventKind in DemEventParameter).

This is necessary because BSW-events may be reported prior to full Dem initialization and need to be buffered (refer to chapter ).

### 24. Event destination

The configuration parameter DemMemoryDestinationRef (refer to DemDTCAttributes) defines the dedicated storage location(s) of the event and its related data (refer to chapter ).

The "permanent event memory" assignment is implicitly derived from the related DTC kind (refer to chapter ). Emission-related events are automatically assigned to the permanent event memory, since the storage of an event as "permanent DTC" is dynamically derived from its current status (handling is described in chapter ). In this context the term "permanent" relates to an attribute of emission-related events and does not relate only to persistent storage via NvM, which is done for each event memory type anyway.

The definition and use of the different memory types is OEM specific.

For the Dcm-Dem interface the parameter DTCOrigin is used to distinguish between the different memory areas. The intention is to allow specific operations on the different memory areas (primary, user defined and permanent).

 Limitations on DemMemoryDestinationRef
⌈
A DTC can only reference the event memories via DemMemoryDestinationRef to the event memories of the same DemEventMemorySet.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 诊断 monitor 定义
*原文标题：Diagnostic monitor definition*

A diagnostic monitor is a routine entity determining the proper functionality of a component. This monitoring function identifies a specific fault type (e.g. short to ground, open load, etc.) for a monitoring path. A monitoring path represents the physical system or a circuit, that is being monitored (e.g. sensor input). Each monitoring path is associated with exactly one diagnostic event.

If the monitor debounces on its own, the reporting API is called only after a qualified result (passed or failed) is available. A report is necessary at least if the result changes. However, usually it is computationally more efficient for the monitor to always call the Dem and should therefore be preferred. Hence, it is implementation specific for the Dem to deal with reports of unchanged results.

If the monitor uses the Dem-internal debouncing mechanism (refer to chapter ), the reporting API is called whenever the code with the functional check is executed.

### 26. Event dependencies

The priority of events within the assigned DemComponent and furthermore the dependency relation between the DemComponents is used for filtering the storage of error reports to the failure memory.

⌈
Whenever an event reports FAILED, it shall be considered as CONSECUTIVE FAULT, if any other event with higher priority at the same DemComponent already is FAILED.
⌋

⌈
Whenever an event reports FAILED, it shall be considered as CONSECUTIVE FAULT, if any parent DemComponent is FAILED.
⌋

⌈
The Dem shall allow to ignore the priority of events of a DemComponentIgnoresPriority). In this case, the event shall only be considered as CONSECUTIVE FAULT if any parent component is FAILED (other events FAILED status at the same component shall be ignored).]
⌋

⌈
If a reported failure is not considered as consecutive fault, it shall be considered as CAUSAL FAULT. Causal faults shall be handled normally.
⌋

⌈
If a reported failure is not considered as consecutive fault and it has configured a DemCausalityDelayTime, it shall be considered as PRELIMINARY-CAUSAL FAULT.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 组件 availability
*原文标题：Component availability*

⌈
The Dem shall support the availability of DemComponent. Components which are not available shall be treated as if they are not included in the system (e.g. `Dem_GetComponentFailed` will return E_NOT_OK).
⌋

⌈
The interface `Dem_SetComponentAvailable` shall be available to set the availability state of a component.
⌋

⌈
With setting a DemComponent to not available, all assigned events shall also be set as not available.
⌋

⌈
After startup all DemComponents shall be available.
⌋

⌈
If a DemComponent is set to 'not available' via `Dem_SetComponentAvailable`, the Dem shall treat all the dependent components (children) as if they are set as 'not available'.
⌋

⌈
If a DemComponent is set to 'not available' via `Dem_SetComponentAvailable`, the Dem shall set all assigned events to 'not available', including the events of all child nodes. The behavior for the events will be analogous to setting each event individually to 'not available' (e.g. setting the event status).
⌋

⌈
If a DemComponent is set to 'not available' via `Dem_SetComponentAvailable` and any individual event assigned to it (see ) is already failed, the individual event will be kept as 'available'.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 诊断 trouble 代码定义
*原文标题：Diagnostic trouble code definition*

A 'Diagnostic trouble code' defines a unique identifier (shown to the diagnostic tester) mapped to a 'Diagnostic event' of the Dem module. The Dem provides the status of 'Diagnostic trouble codes' to the Dcm module (refer to chapter ).

### 29. DTC kind

No content.

### 30. DTC format

⌈
The Dem module shall support DTC formats for DemDTC according to:

* ISO-14229-1
* SAE J2012 OBD DTC (aka 2-byte DTC)
* SAE J1939-73
* ISO 11992-4
* SAE J2012 WWH-OBD DTC (aka 3-byte DTC)
⌋

The configuration parameter DemTypeOfDTCSupported is used to specify one of the supported DTC formats defined in  of the ECU (refer to `Dem_GetTranslationType`). This is required to determine the DTC format value to be reported for ISO-14229-1 service Read DTC Information (0x19).

  Upstream requirements:
⌈
The Dem module shall support different DTC numbers for UDS, OBD, and J1939 DTCs based on separate configuration parameters (refer to parameters DemDTC and DemObdDTC in DemConfigSet).
⌋

For DTCs multiple combinations of the supported DTC formats (UDS, OBD, OBD3Byte and J1939) are possible. The Dem internally handles one of the two OBD format in combination with UDS and J1939 DTCs.

Some manufacturers don't want to fully change to SAE J1979-2 support with UDS and will only support the J1979-2 functionality on the limited UDS subset defined by J1979-2, wherefore the feature OBD UDS DTC separation was added.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. DTC groups

In addition to single DTC values, groups of DTCs can be configured (refer to DemGroupOfDTC), as defined by ISO 14229-1  - Annex D.1. Each DTC group has its own DTC group value assigned (which must be unique to any other DTC and DTC group value). When requesting operations on DTC groups (like ClearDTC and Disable/Enable DTC), the DTCGroup is selected by the DTC value.

⌈
The DemGroupOfDTC shall represent the values of the DTC Group boundaries.
⌋

Note: A group with the global boundaries 0x000100 and 0xfffe00 does not need to be configured, as the group ALL is automatically defined.

⌈
All the DTCs in the range between the dtc-code of the requested group and the next higher dtcgroup-code shall be treated as belonging to the group.
⌋

Note: DTC groups are relevant for the diagnostic service ClearDiagnosticInformation (0x14, refer to `Dem_ClearDTC`).

⌈
The Dem shall support the predefined DTC group GroupOfAllDTCs (0xFFFFFF) within the parameter DTC of `Dem_SelectDTC`.
⌋

⌈
The Dem shall support the predefined DTC group emission related DTCs for WWH-OBD and J1979-2 (0xFFFF33) within the parameter DTC of `Dem_SelectDTC` if WWH-OBD or J1979-2 is supported.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. DTC severity

The DTC severity is used to provide information regarding the importance of the specific events according to ISO-14229-1, Annex D.3 "DTC severity and class definition". The DemDTCSeverity is only available for UDS DTCs.

  Upstream requirements:
⌈
If the API `Dem_GetSeverityOfDTC` or `Dem_GetNextFilteredDTCAndSeverity` is called and for the selected DTC a severity value in DemDTCSeverity is configured, the Dem shall set the value configured in DemDTCSeverity as DTCSeverity.
⌋

  Upstream requirements:
⌈
If the API `Dem_GetSeverityOfDTC` or `Dem_GetNextFilteredDTCAndSeverity` is called and for the selected DTC no severity value in DemDTCSeverity is configured, the Dem shall set `DEM_SEVERITY_NO_SEVERITY` as DTCSeverity.
⌋

### 33. 功能性 unit
*原文标题：Functional unit*

Upstream requirements:
⌈
If the API `Dem_GetFunctionalUnitOfDTC` is called and for the selected DTC a functional unit value in DemDTCFunctionalUnit is configured, the Dem shall set the value configured in DemDTCFunctionalUnit in the out parameter DTCFunctionalUnit.
⌋

  Upstream requirements:
⌈
If the API `Dem_GetFunctionalUnitOfDTC` is called and for the selected DTC no functional unit in DemDTCFunctionalUnit is configured, the Dem shall set a value of 0x00 in the out parameter DTCFunctionalUnit.
⌋

### 34. DTC significance

There are two different significance levels of DTCs:

* fault: classifies a failure, which relates to the component/ECU itself (and requires for example a repair action)
* occurrence: classifies an issue, which indicates additional information concerning insufficient system behavior (and relates for example to a condition out of the ECU's control)

This significance level is configurable per event (refer to DemDTCSignificance in DemDTCAttributes) and can be mapped as a data element (refer to `DEM_SIGNIFICANCE`).

### 35. Suppress DTC output

This chapter describes the dynamic suppression of events/ DTCs during runtime via API call. A suppressed DTC behaves in a way that it is not visible for the tester but can be processed continuously by the diagnostic monitor.

An exemplary use-case could be that the decision to hide a DTC in a certain market is done by the SW-C at runtime.

The configuration parameter DemSuppressionSupport (refer to DemGeneral) controls the availability of the DTC suppression functionality

  Upstream requirements:
⌈
The Dem shall suppress a DTC if all related events of this DTC are not available.
⌋

For details see chapter .

If there is a one to one relationship between DTC and event, the DTC is suppressed if the related event is not available. If the DTC is a combined DTC, the DTC is suppressed if all combined events are not available.

Concerning output and query functions, suppressed DTCs are treated as if they are not configured in the system.

 Behavior of DTC query functions for suppressed DTCs
  Upstream requirements:
⌈
In case any of the following APIs is called

* `Dem_GetStatusOfDTC`
* `Dem_GetSeverityOfDTC`
* `Dem_GetFunctionalUnitOfDTC`
* `Dem_ClearDTC`

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Availability of events (visibility and computation)

This chapter describes a method to mark events as not available without removing them from the actual configuration. An event which is not available is treated as if it was not included in the Dem configuration.

An exemplary use-case could be that a control unit and its software support different kind of hardware to be controlled. Hardware variants vary in certain parts being available or not available. Still the same control unit and software shall be applied.

# One calibration set is generated per hardware variant. The application engineers set up a post-build configuration to make sure the software behaves correctly for the hardware. For certain parts not included in a hardware variant, this means that related Events need to be shut down, suppressed. These events shall behave completely neutral, never set their LastFailed, not cause limp-home modes, not be visible to garage services.

  => ECUC parameter DemEventAvailableInVariant set to TRUE (enabled) or FALSE (disabled)
# One calibration covers multiple hardware variants.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Monitored 组件定义
*原文标题：Monitored Component Definition*

A monitored component is a part of the system, which is relevant for being checked for proper operation. Malfunctions of the component need to be reported and documented. For this, usually one or multiple monitorings are defined and assigned to the component.

Furthermore the status of such components is relevant and used for influencing the system behavior (status of components may be used in Fim) and error documentation (filtering of consecutive failure entries).

The Dem allows to explicitly define the monitored components as DemComponent, defining the relation between events and components and finally allows to define the relation in-between the components.

### 其余 521 章（内容从略，见纯文本全文）

38. 定义 of components and dependencies
39. Operation cycle 管理
40. Operation Cycle Counters
41. Cycles since last failed
42. Cycles since first failed
43. Failed cycles
44. Event 存储描述
45. Event status 管理
46. Status bit 支持
47. Monitor status and UDS status update
48. Status bit transitions
49. Active/Passive status
50. 通知 of status bit changes
51. Event 存储管理
52. Event retention
53. Clearing event 存储 entries
54. Event 存储 overflow indication
55. Event displacement
56. Reporting order of event 存储 entries
57. Debouncing of 诊断 events
58. Counter based debounce algorithm
59. Time based debounce algorithm
60. Monitor internal debounce algorithm
61. Debounce algorithm 初始化 and reset conditions
62. Fault 检测 counter retrieval
63. Fault 检测 counter reporting
64. Fault confirmation
65. Method for grouping of association of events for OBD 目的
66. Event Combination
67. Combination On Storage
68. Combination On Retrieval
69. Enable and storage conditions of 诊断 events
70. Event related 数据
71. Storage of freeze frame 数据
72. Pre-storage of freeze frame 数据
73. Storage of extended 数据
74. Event related 数据的配置
75. 数据 changes的通知
76. Aging of 诊断 events
77. Healing of 诊断 events
78. Warning indicator 处理
79. User controlled WarningIndicatorRequested-bit
80. 处理 of the warning indicator lamp (MIL)
81. 通知 and Set of the warning indicator status
82. BSW 错误处理
83. OBD-specific functionality
84. 通用概述 and restrictions
85. PIDs provided by Dem
86. Centralized PID $21 / $31 / $4D / $4E 处理
87. PID $21 处理
88. Readiness status
89. In-Use-Monitor Performance Ratio (IUMPR) 支持
90. OBD for light duty (OBD2)
91. 服务 $01 Read Current Powertrain 诊断数据
92. 服务 $02 Read Powertrain Freeze Frame 数据
93. 服务 $03 - Read Emission-Related Powertrain 诊断 Trouble Codes
94. 服务 $04 - Clear Reset Emission-Related 诊断 Information
95. 服务 $06 - 支持 of central DTR 处理
96. DTR visibility
97. 服务 $07 - Read emission-related 诊断 trouble codes detected during during current or last completed driving cycle
98. Read Emission-Related 诊断 Trouble Codes with Permanent Status
99. MIL 处理
100. UDS based OBD protocols
101. DTC WWHOBD class
102. 服务 $19 42 - Read WWH-OBD DTC By Mask Record
103. 服务 $14 FFFF33 - Clear Emission Related DTCs
104. WWH-OBD
105. Continuous-MI counter
106. Cumulative Continuous-MI counter (Master ECU)
107. Class B1 counter
108. Activation 模式
109. Activation 模式 Escalation
110. Activation 模式 Deescalation/ Healing
111. Freeze Frame 0x00
112. Extended 数据 Record 0x90
113. Aging
114. OBDonUDS
115. Legislated FreezeFrame storage for OBDonUDS
116. J1939 specific functionality
117. Read DTC
118. Composite Malfunction Indicator Lamp Status
119. Composite Red Stop Lamp Status
120. Composite Amber Warning Lamp Status
121. Composite Protect Lamp Status
122. DTC 数据 acqusition
123. Clear DTCs
124. DM31
125. Malfunction Indicator Lamp
126. Red Stop Lamp
127. Amber Warning Lamp
128. Protect Lamp
129. J1939 lamp status
130. FreezeFrame
131. SPNs in ExpandedFreezeFrame
132. 诊断 Readiness
133. Monitor Performance Ratio
134. Interaction with other 软件模块
135. Interaction with 软件 Components (SW-C)
136. Interaction with 诊断 Clients
137. Parallel event 存储 access
138. Accessing 诊断 fault 存储
139. Access DTCs and Status Information
140. Access event related 数据
141. Clear 诊断 information
142. 控制 DTC setting
143. Asynchronous Dcm operations
144. Interaction with J1939 诊断管理器 (J1939)
145. Interaction with 功能 Inhibition 管理器 (FIM)
146. Interaction with NVRAM 管理器 (NvM)
147. Initialize NvM 数据
148. Interaction with Default 错误 Tracer (Det)
149. Required 数据 by the Dem 模块
150. Scaling information on 服务接口
151. Version check
152. 错误分类
153. Development 错误
154. Runtime 错误
155. Production 错误
156. Extended Production 错误
157. API 规范
158. Imported 类型
159. 类型定义
160. Dem 数据类型
161. Dem_ComponentIdType
162. Dem_ConfigType
163. Dem_EventIdType
164. Dem_EventStatusType
165. Dem_DebouncingStateType
166. Dem_DebounceResetStatusType
167. Dem_UdsStatusByteType
168. Dem_IndicatorStatusType
169. Dem_MonitorDataType
170. Dem_MonitorStatusType
171. Dem_DTCKindType
172. Dem_DTCFormatType
173. Dem_DTCOriginType
174. Dem_DTCRequestType
175. Dem_DTCTranslationFormatType
176. Dem_DTCSeverityType
177. Dem_RatioIdType
178. Dem_DTRControlType
179. Dem_InitMonitorReasonType
180. Dem_IumprDenomCondIdType
181. Dem_IumprDenomCondStatusType
182. Dem_J1939DcmDTCStatusFilterType
183. Dem_J1939DcmSetClearFilterType
184. Dem_J1939DcmSetFreezeFrameFilterType
185. Dem_J1939DcmLampStatusType
186. Dem_J1939DcmDiagnosticReadiness1Type
187. Dem_J1939DcmDiagnosticReadiness2Type
188. Dem_J1939DcmDiagnosticReadiness3Type
189. Dem_EventOBDReadinessGroupType
190. Extension to Std ReturnType
191. 功能定义
192. Dem_GetVersionInfo
193. 接口 ECU 状态管理器 <=> Dem
194. Dem_PreInit
195. Dem_Init
196. Dem_Shutdown
197. 接口 BSW 模块 / SW-Components <=> Dem
198. Dem_ClearDTC
199. Dem_ClearPrestoredFreezeFrame
200. Dem_GetComponentFailed
201. Dem_GetDTCSelectionResult
202. Dem_GetDTCSelectionResultForClearDTC
203. Dem_GetEventUdsStatus
204. Dem_GetMonitorStatus
205. Dem_GetDebouncingOfEvent
206. Dem_GetDTCOfEvent
207. Dem_GetDTCSuppression
208. Dem_GetEventAvailable
209. Dem_GetFaultDetectionCounter
210. Dem_GetIndicatorStatus
211. Dem_GetEventFreezeFrameDataEx
212. Dem_GetEventExtendedDataRecordEx
213. Dem_GetEventMemoryOverflow
214. Dem_GetNumberOfEventMemoryEntries
215. Dem_ResetEventDebounceStatus
216. Dem_ResetEventStatus
217. Dem_ResetMonitorStatus
218. Dem_RestartOperationCycle
219. Dem_PrestoreFreezeFrame
220. Dem_SelectDTC
221. Dem_SetComponentAvailable
222. Dem_SetDTCSuppression
223. Dem_SetEnableCondition
224. Dem_SetEventAvailable
225. Dem_SetEventConfirmationThresholdCounter
226. Dem_SetEventStatus
227. Dem_SetEventStatusWithMonitorData
228. Dem_SetStorageCondition
229. Dem_SetWIRStatus
230. Dem_InitAllNvmBlocks
231. Dem_InitAllNvmBlocksGetResult
232. 接口 Dcm <=> Dem
233. Access DTCs and Status Information
234. Dem_GetTranslationType
235. Dem_GetDTCStatusAvailabilityMask
236. Dem_GetStatusOfDTC
237. Dem_GetSeverityOfDTC
238. Dem_GetFunctionalUnitOfDTC
239. Dem_SetDTCFilter
240. Dem_GetNumberOfFilteredDTC
241. Dem_GetNextFilteredDTC
242. Dem_GetNextFilteredDTCAndFDC
243. Dem_GetNextFilteredDTCAndSeverity
244. Dem_SetFreezeFrameRecordFilter
245. Dem_GetNextFilteredRecord
246. Dem_GetDTCByOccurrenceTime
247. Dem_SetDTCFilterByExtendedDataRecordNumber
248. Dem_SetDTCFilterByReadinessGroup
249. Access extended 数据 records and FreezeFrame 数据
250. Dem_DisableDTCRecordUpdate
251. Dem_EnableDTCRecordUpdate
252. Dem_GetSizeOfExtendedDataRecordSelection
253. Dem_GetSizeOfFreezeFrameSelection
254. Dem_GetNextExtendedDataRecord
255. Dem_GetNextFreezeFrameData
256. Dem_SelectExtendedDataRecord
257. Dem_SelectFreezeFrameData
258. Dem_GetNumberOfFreezeFrameRecords
259. DTC storage
260. Dem_DisableDTCSetting
261. Dem_EnableDTCSetting
262. OBD-specific Dcm <=> Dem 接口
263. Dem_DcmGetInfoTypeValue08
264. Dem_DcmGetInfoTypeValue0B
265. Dem_DcmReadDataOfPID01
266. Dem_DcmReadDataOfPID1C
267. Dem_DcmReadDataOfPID21
268. Dem_DcmReadDataOfPID30
269. Dem_DcmReadDataOfPID31
270. Dem_DcmReadDataOfPID41
271. Dem_DcmReadDataOfPID4D
272. Dem_DcmReadDataOfPID4E
273. Dem_DcmReadDataOfPID91
274. Dem_DcmReadDataOfOBDFreezeFrame
275. Dem_DcmGetDTCOfOBDFreezeFrame
276. Dem_DcmGetAvailableOBDMIDs
277. Dem_DcmGetNumTIDsOfOBDMID
278. Dem_DcmGetDTRData
279. Dem_DcmGetInfoTypeValue79
280. Dem_DcmReadDataOfPIDF501
281. 接口 J1939Dcm <=> Dem
282. Access DTCs and Status Information
283. Dem_J1939DcmSetDTCFilter
284. Dem_J1939DcmGetNumberOfFilteredDTC
285. Dem_J1939DcmGetNextFilteredDTC
286. Dem_J1939DcmFirstDTCwithLampStatus
287. Dem_J1939DcmGetNextDTCwithLampStatus
288. DTC storage
289. Dem_J1939DcmClearDTC
290. Dem_J1939DcmSetFreezeFrameFilter
291. Dem_J1939DcmGetNextFreezeFrame
292. Dem_J1939DcmGetNextSPNInFreezeFrame
293. Reporting
294. Dem_J1939DcmSetRatioFilter
295. Dem_J1939DcmGetNextFilteredRatio
296. Dem_J1939DcmReadDiagnosticReadiness1
297. Dem_J1939DcmReadDiagnosticReadiness2
298. Dem_J1939DcmReadDiagnosticReadiness3
299. OBD-specific 接口
300. Dem_SetEventDisabled
301. Dem_RepIUMPRFaultDetect
302. Dem_SetIUMPRDenCondition
303. Dem_GetIUMPRDenCondition
304. Dem_RepIUMPRDenRelease
305. Dem_SetPtoStatus
306. Dem_ReadDataOfPID01
307. Dem_GetDataOfPID21
308. Dem_SetDataOfPID21
309. Dem_SetDataOfPID31
310. Dem_SetDataOfPID4D
311. Dem_SetDataOfPID4E
312. Dem_GetCycleQualified
313. Dem_SetCycleQualified
314. Dem_GetDTCSeverityAvailabilityMask
315. Dem_GetB1Counter
316. Dem_SetDTR
317. Expected 接口
318. Mandatory 接口
319. Optional 接口
320. Configurable 接口
321. 接口 BSW 模块 / SW-Components <=> Dem
322. InitMonitorForEvent
323. DemTriggerOnComponentStatus
324. ClearDtcNotification
325. DemGeneralTriggerOnMonitorStatus
326. DemGeneralTriggerOnEventUdsStatus
327. DemTriggerOnEventUdsStatus
328. DemTriggerOnDTCStatus
329. DemTriggerOnMonitorStatus
330. EventDataChanged
331. ClearEventAllowed
332. ReadDataElement
333. GetFaultDetectionCounter
334. Scheduled functions
335. Dem_MainFunction
336. Runnable Entity MainFunction
337. 服务接口
338. Implementation 数据类型
339. Dem_DataType
340. Dem_DataPrimitiveType
341. Dem_DataArrayType
342. Dem_DTCOriginType
343. Dem_DebouncingStateType
344. Dem_DebounceResetStatusType
345. Dem_DTRControlType
346. Dem_EventIdType
347. Dem_EventStatusType
348. Dem_DTCFormatType
349. Dem_InitMonitorReasonType
350. Dem_IumprDenomCondIdType
351. Dem_IumprDenomCondStatusType
352. Dem_MaxDataValueType
353. Dem_MonitorDataType
354. Dem_MonitorStatusType
355. Dem_IndicatorStatusType
356. Dem_PID21valueType
357. Dem_PID31valueType
358. Dem_RatioIdType
359. Dem_UdsStatusByteType
360. Dem_PID4DvalueType
361. Dem_PID4EvalueType
362. Sender-Receiver-Interfaces
363. DataServices_{数据}
364. Client-Server-Interfaces
365. CallbackClearEventAllowed
366. CallbackComponentStatusChanged
367. CallbackDTCStatusChange
368. CallbackEventDataChanged
369. CallbackEventUdsStatusChanged
370. CallbackGetFaultDetectCounter
371. CallbackInitMonitorForEvent
372. CallbackMonitorStatusChange
373. ClearDtcNotification
374. ClearDTC
375. DTCSuppression
376. DataServices_{数据}
377. DTRCentralReport
378. DiagnosticInfo
379. DiagnosticMonitor
380. DiagnosticMonitor_MonitorData
381. EnableCondition
382. EventAvailable
383. EventFailureCycleCounterThreshold
384. EvMemOverflowIndication
385. EventStatus
386. GeneralCallbackEventDataChanged
387. GeneralCallbackEventUdsStatusChanged
388. GeneralCallbackMonitorStatusChanged
389. GeneralDiagnosticInfo
390. GetDataOfPID21
391. IndicatorStatus
392. IUMPRDenominator
393. IUMPRDenominatorCondition
394. IUMPRNumerator
395. OperationCycle
396. PowerTakeOff
397. SetDataOfPID21
398. SetDataOfPID31
399. SetDataOfPID4D
400. SetDataOfPID4E
401. StorageCondition
402. Ports
403. CBClrEvt
404. CBDataEvt
405. CBFaultDetectCtr
406. CBInitEvt
407. CBStatusDTC
408. CBEventUdsStatusChanged
409. CBMonitorStatusChanged
410. CBStatusComp
411. ClearDTC
412. ClearDtcNotification
413. ControlDTCSuppression
414. EventAvailable
415. ControlEventFailureCycleCounterThreshold
416. DataServices_{数据}
417. DTR
418. EnableCond
419. Event
420. DiagnosticMonitor_MonitorData
421. EventStatus
422. EventInfo
423. GeneralCBDataEvt
424. GeneralCBMonitorStatusChanged
425. GeneralCBStatusEvt
426. GeneralEvtInfo
427. IndStatus
428. IUMPRDenominator
429. IUMPRDenominatorCondition
430. IUMPRNumerator
431. OpCycle
432. OverflowIndPrimaryMemory
433. OverflowIndUserDefinedMemory
434. PowerTakeOffStatus
435. GetDataOfPID21
436. SetDataOfPID21
437. SetDataOfPID31
438. SetDataOfPID4D
439. SetDataOfPID4E
440. StorageCond
441. 时序图
442. ControlDTCSetting
443. Dem_ClearDTC
444. Dem_GetDTCByOccurrenceTime
445. Dem_GetNextExtendedDataRecord
446. Dem_DcmGetStatusOfDTC
447. Retrieving freeze frames
448. GetOBDFaultInformation
449. J1939DcmGetNextFilteredDTC
450. ReportDTCByStatusMask
451. FiM_DemTriggerOnEventStatus
452. ProcessEvent (示例)
453. Retrieving DTCs based on supported extended 数据 records
454. Retrieving DTCs assigned to a DTC readiness group
455. Retrieving stored snapshot records for all DTCs
456. 配置规范
457. How to read this chapter
458. Containers and 配置 parameters
459. Dem
460. 通用
461. DemGeneral
462. DemConfigSet
463. DemClient
464. DemDTCAttributes
465. DemEventParameter
466. DemMultiEventTriggering
467. DemComponent
468. DemDTC
469. DemGroupOfDTC
470. DemOperationCycle
471. DemIndicator
472. DemIndicatorAttribute
473. DemNvRamBlockId
474. OBD
475. DemGeneralOBD
476. DemObdDTC
477. DemRatio
478. DemDtrs
479. DemDtr
480. DemPidClass
481. DemPidDataElement
482. J1939
483. DemGeneralJ19139
484. DemJ1939FreezeFrameClass
485. DemSPNClass
486. Conditions
487. DemEnableCondition
488. DemEnableConditionGroup
489. DemStorageCondition
490. DemStorageConditionGroup
491. Event 存储
492. DemEventMemorySet
493. DemPrimaryMemory
494. DemUserDefinedMemory
495. Debouncing
496. DemDebounceAlgorithmClass
497. DemDebounceCounterBased
498. DemDebounceCounterBasedClass
499. DemDebounceTimeBased
500. DemDebounceTimeBasedClass
501. DemDebounceMonitorInternal
502. 回调
503. DemCallbackClearEventAllowed
504. DemCallbackDTCStatusChanged
505. DemCallbackJ1939DTCStatusChanged
506. DemCallbackOBDDTCStatusChanged
507. DemCallbackGetFDC
508. DemCallbackEventDataChanged
509. DemCallbackEventUdsStatusChanged
510. DemCallbackMonitorStatusChanged
511. DemCallbackInitMForE
512. DemClearDTCNotification
513. Event related 数据
514. DemFreezeFrameClass
515. DemFreezeFrameRecordClass
516. DemFreezeFrameRecNumClass
517. DemExtendedDataClass
518. DemExtendedDataRecordClass
519. 数据 elements
520. DemDataElementClass
521. DemDataElementInstance
522. DemDidClass
523. DemInternalDataElementClass
524. DemExternalCSDataElementClass
525. DemExternalSRDataElementClass
526. DemSRDataElementClass
527. DemSubElementInDataElementInstance
528. DemSubElementInImplDataElementInstance
529. DemDiagnosisScaling
530. DemAlternativeDataInterface
531. DemAlternativeDiagnosticDataElement
532. DemAlternativeDataType
533. DemTextTableMapping
534. 发布信息
535. 附录
536. 不适用需求
537. Change history of AUTOSAR traceable items
538. Traceable item history of this document according to AUTOSAR Release R25-11
539. Added 规范 Items in R25-11
540. Changed 规范 Items in R25-11
541. Deleted 规范 Items in R25-11
542. Added Constraints in R25-11
543. Changed Constraints in R25-11
544. Deleted Constraints in R25-11
545. Traceable item history of this document according to AUTOSAR Release R24-11
546. Added 规范 Items in R24-11
547. Changed 规范 Items in R24-11
548. Deleted 规范 Items in R24-11
549. Added Constraints in R24-11
550. Changed Constraints in R24-11
551. Deleted Constraints in R24-11
552. Traceable item history of this document according to AUTOSAR Release R23-11
553. Added 规范 Items in R23-11
554. Changed 规范 Items in R23-11
555. Deleted 规范 Items in R23-11
556. Added Constraints in R23-11
557. Changed Constraints in R23-11
558. Deleted Constraints in R23-11
