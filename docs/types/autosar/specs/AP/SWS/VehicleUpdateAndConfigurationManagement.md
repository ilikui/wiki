# Specification of Vehicle Update and Configuration Management (`VehicleUpdateAndConfigurationManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1090 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_VehicleUpdateAndConfigurationManagement_1090\AUTOSAR_AP_SWS_VehicleUpdateAndConfigurationManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_VehicleUpdateAndConfigurationManagement_1090\AUTOSAR_AP_SWS_VehicleUpdateAndConfigurationManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_VehicleUpdateAndConfigurationManagement_1090\zzgen\AP_SWS_VehicleUpdateAndConfigurationManagement.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR functional cluster Vehicle Update and Configuration Management which belongs to the AUTOSAR Adaptive Platform Services. One of the declared goals of the AUTOSAR Adaptive Platform is the ability to flexibly update the software and its configuration through local ("tester-based") or remote ("over-the-air") updates. V-UCM provides services for updating the software and its configuration in a vehicle. V-UCM is coordinating an update campaign within the vehicle. Therefore this document includes requirements on the following functionalities:

* Interact with Backend to:

  * Identify Software Clusters that could be updated, installed or removed
  * Authenticate Vehicle Package
  * Confirm dependencies between Software Clusters within vehicle before starting campaign
  * Inform Backend of needed Software Packages, receives them and dispatch them to targeted ECUs
* Interact with Vehicle State Manager:

  * Inform which safety conditions that have to be applied according to Vehicle Package
  * Share the computed vehicle state to other Applications or Functional Clusters involved in the update campaign
* Interact with Human Driver about update campaign:

  * Provides campaign state to trigger interaction with Human during update campaign
  * Get vehicle modification approval or consent from Human when configured in Vehicle Package
* Provide information of installed software in vehicle
* Provide information of update campaigns history
* Recovery in case of failure

## 模块依赖

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Vehicle Update and Configuration Management to other Functional Clusters. Section  lists the interfaces required by Vehicle Update and Configuration Management.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR functional cluster Vehicle Update and Configuration Management which belongs to the AUTOSAR Adaptive Platform Services. One of the declared goals of the AUTOSAR Adaptive Platform is the ability to flexibly update the software and its configuration through local ("tester-based") or remote ("over-the-air") updates. V-UCM provides services for updating the software and its configuration in a vehicle. V-UCM is coordinating an update campaign within the vehicle. Therefore this document includes requirements on the following functionalities:

* Interact with Backend to:

  * Identify Software Clusters that could be updated, installed or removed
  * Authenticate Vehicle Package
  * Confirm dependencies between Software Clusters within vehicle before starting campaign
  * Inform Backend of needed Software Packages, receives them and dispatch them to targeted ECUs
* Interact with Vehicle State Manager:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the V-UCM module that are not included in the AUTOSAR TR Glossary.

| Abbreviation / Acronym: | Description: |
|---|---|
| DM | AUTOSAR Adaptive Diagnostic Management |
| UCM | Update and Configuration Management |
| V-UCM | V-UCM is distributing packages and coordinating an update campaign in a vehicle (former name was UCM Master) |
| Backend | Backend is a server hosting Software Packages |
| OTA Client | OTA Client is an Adaptive Application in communication with Backend Over The Air |
| Vehicle Driver Application | Vehicle Driver Application is an Adaptive Application in communication with Vehicle Driver Human to Machine Interface |
| Application Error | Errors returned by UCM |
| Boot options | Boot Manager Configuration |
| VCI | Vehicle Communication Interface |
| MVCI | Modular Vehicle Communication Interface |
| D-PDU API | Diagnostic Protocol Data Unit Application Programming Interface |
| RDF | Root Description File |
| MDF | Module Description File |
| integrity check | verification method proving there has not been any alteration of the artefact content |
| dependency check | verification method proving that all configured dependencies in vehicle will be fulfilled before tr |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 已知限制
*原文标题：Known limitations*

No limitations

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions to applicability.

### 9. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Vehicle Update and Configuration Management to other Functional Clusters. Section  lists the interfaces required by Vehicle Update and Configuration Management.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

### 10. Provided 接口
*原文标题：Provided Interfaces*

| Interface | Functional Cluster | Purpose |
|---|---|---|
| No provided interfaces | < | < |

### 11. Required 接口
*原文标题：Required Interfaces*

Figures  and  show the interfaces required by Vehicle Update and Configuration Management from other Functional Clusters within the AUTOSAR Adaptive Platform.

Figure  shows the interfaces required by Vehicle Update and Configuration Management from Update and Configuration Management.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Cryptography | CryptoStack | This interface may be used e.g., to verify the integrity and authenticity of Vehicle Packages. |
| Execution Management | ExecutionClient | This interface shall be used by the daemon process(es) inside Vehicle Update and Configuration Management to report their execution state to Execution Management. |
| Log and Trace | Logger | Vehicle Update and Configuration Management shall use this interface to log standardized messages. |
| Persistency | FileStorage | Used to store files of received vehicle packages. |
| Persistency | KeyValueStorage | Used to store the internal state of Vehicle Update and Configuration Management. |
| Time Synchronization | SynchronizedTimeBaseConsumer | Vehicle Update and Configuration Management shall use this interface to get latest timestamp. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| UCM Resource Availability Check |  |  |
| V-UCM Version Information |  |  |
| V-UCM Action History |  |  |
| V-UCM Cross-ECU Updates |  |  |
| V-UCM Interaction with UCMs |  |  |
| V-UCM Safe Software Modification |  |  |
| V-UCM Driver Interaction |  |  |
| V-UCM Vehicle Packages Validation |  |  |
| V-UCM Update Status Reporting |  |  |
| V-UCM Software Update Campaign Orchestration |  |  |
| V-UCM Initialization |  |  |
| V-UCM Trace Points |  |  |

### 13. 功能规范
*原文标题：Functional specification*

### 14. 功能性 cluster life-cycle
*原文标题：Functional cluster life-cycle*

V-UCM internal state persistency
  Upstream requirements: ,
⌈
V-UCM shall persist its state to be able to resume on-going update campaign after an intended or unintended reboot.
⌋

### 15. 启动
*原文标题：Startup*

V-UCM initialization
  Upstream requirements:
⌈
V-UCM shall offer its services only after its internal initialization has been completed, and then report kRunning state.
⌋

This requirement prevents calling V-UCM API while internal initialization is on-going. The concrete initialization tasks are implementation specific.

### 16. 关机
*原文标题：Shutdown*

No specific requirements for V-UCM's shutdown

### 17. Technical 概述
*原文标题：Technical Overview*

V-UCM objective is to provide a standard Adaptive Autosar solution to safely and securely update a complete vehicle Over The Air or by a Diagnostic Tester.

V-UCM receives packages from Backend or Diagnostic tool (through Diagnostic Application), parses and interprets the Vehicle Package, transfers or streams Software Packages to suitable targets (UCM or Flashing Adapter) and orchestrates the processing, activations and eventual rollbacks. All these actions are what is called a campaign which V-UCM is coordinating. The UCM of the machines in the same network of a V-UCM, candidates target of a campaign, are referred to as UCMs.

The V-UCM could be considered as a set of add-on features that could enrich any UCM instance. Therefore, as per the UCM APIs, the V-UCM APIs are part of the AUTOSAR Adaptive Platform Services. UCM and V-UCM have separate service instances.

The OTA Client establishes a communication between Backend and V-UCM so that they can exchange information of the installed Software Clusters in the vehicle and the Software Clusters available in the Backend.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. V-UCM 通用行为
*原文标题：V-UCM general behavior*

The V-UCM acts as a client of the service interface offered by the UCM, already specified in UCM. However, the V-UCM also offers three different service interfaces to OTA Client, Vehicle Driver interface and Vehicle State Manager respectively. V-UCM aggregates UCMs states and can report its status field to a Backend through its OTA Client.

A V-UCM receives a Vehicle Package and transfers or streams Software Package(s) to the UCMs for an AUTOSAR Adaptive Platform Software Cluster update. A Vehicle Package contains instructions for orchestrating updates between ECUs. The V-UCM provides information about ECUs in the vehicle, installed software and update campaign resolution.

 V-UCM checks states of UCMs
  Upstream requirements:
⌈
A V-UCM shall check the status of its UCMs involved in the campaign as described in the Vehicle Package are all at kPreparing update state (UpdateStateType) of the UCMs CurrentStatus field before transitioning from kVehiclePackageTransferring to kSoftwarePackage_Transferring and before transitioning to kProcessing.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. UCM identification

For V-UCM to distribute Software Packages to other UCMs, V-UCM has to identify UCMs in vehicle. This identification could be at boot or later but at least before any communication with Backend are engaged. Each UCM has a unique identifier in Vehicle Package UcmInstantiationGeneral.UcmIdentifier called identifier to help V-UCM transferring packages to targeted UCMs. To get such identifier, V-UCM will perform first a service discovery through ara::com to get all UCMs service instances available. Then V-UCM will call GetId method for each UCMs returning each corresponding UcmInstantiationGeneral.UcmIdentifier.

If an ECU hosting a UCM is replaced physically, it will register its services to the registry at boot up and V-UCM will be able to communicate with UCM(s).

 V-UCM is discovering UCMs in vehicle
  Upstream requirements:
⌈
V-UCM shall continuously look for UCM service instances (use of StartFindService() call).
⌋

If a V-UCM is failing, another inactive V-UCM could be used or activated by OTA Client.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. V-UCM 软件 Packages transfer or streaming
*原文标题：V-UCM Software Packages transfer or streaming*

V-UCM has generally same transfer API as UCM in order to simplify implementation and reuse code as much as possible (could be shared library between UCM and V-UCM).

It is necessary to distinguish Vehicle Package (V-UCM specific) from Software Packages transfer.

 TransferVehiclePackage InsufficientMemory
  Upstream requirements:
⌈
TransferVehiclePackage method shall raise the ApplicationError kMemoryInsufficient if the UCM buffer has not enough resources to process the corresponding Vehicle Package.
⌋

 TransferVehiclePackage kBusyWithCampaign
  Upstream requirements:
⌈
TransferVehiclePackage method shall return the ApplicationError kBusyWithCampaign, if V-UCM is not at kIdle state
⌋

A diagnostic tester can interfere with the V-UCM, which often results in a campaign constantly failing. Therefore, V-UCM allows new campaigns to be temporarily blocked to avoid this type of situation.

 Packages transferring sequence
  Upstream requirements:
⌈
TransferStart method shall raise the ApplicationError kPackageUnexpected if the Software Package name parameter was not a value of the RequestedPackage field.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. V-UCM retry strategy

When V-UCM or OTA Client calls TransferData method and it raises ApplicationError kBlockInconsistent, V-UCM or OTA Client can retry the TransferData method again later for the same block. This behaviour is configured by VucmBlockInconsistent.UcmRetryStrategy.

 Retry Strategy for BlockInconsistent
  Upstream requirements:
⌈
When TransferData returns ApplicationError kBlockInconsistent more than UcmRetryStrategy.MaximumNumberOfRetries within UcmRetryStrategy.RetryIntervalTime, then V-UCM shall cancel the active campaign by transitioning to kCancelling state and delete the failing package.
⌋

If no retry strategy is needed, the maximum number of attempts can be specified as 0 in VucmBlockInconsistent.UcmRetryStrategy.

When V-UCM calls ProcessSwPackage method and it raises ApplicationError kServiceBusy, V-UCM can retry the ProcessSwPackage method again later for the same package. This behaviour is configured by VucmServiceBusy.UcmRetryStrategy.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Adaptive Applications interacting with V-UCM

In order to have interoperability between several vendors platforms, Adaptive Applications interacting with V-UCM via ara::com like OTA Client, Vehicle State Manager or Vehicle Driver Interface have their APIs specified. However, their detailed behaviours are out of scope for this specification document.

### 23. OTA Client

OTA Client is an Adaptive Application that sets communication channel between Backend and V-UCM. The communication between Backend and OTA Client is abstracted and details like protocol are out of scope for this specification document. OTA Client should make sure Backend is providing the right information and packages to the vehicle by identifying the vehicle, by for instance sending VIN to Backend.

OTA Client uses the V-UCM as a service provider via ara::com. Since transferring Vehicle Packages and Software Packages from Backend to V-UCM is OTA Client's responsibility, OTA Client should be able to accommodate any proprietary communication protocol used between OTA Client and Backend and convert it into ara::com transport protocol. OTA Client should support UCM Software Packages transfer or streaming as specified in , it should then provide at least the following functionality:

* Comply to the requirements of  in the context of package transfer between OTA Client and V-UCM.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Vehicle 驱动接口
*原文标题：Vehicle Driver Interface*

Vehicle driver interface could be required by legal constrains or communication cost consideration. To support mandatory safety and security critical updates, driver interaction can be used for:

* Requesting transfer, processing or activation permission from vehicle driver
* Notifying vehicle driver of safety and security measures he has to apply to the vehicle in order to proceed to next step into the update campaign

 Interaction of V-UCM with Vehicle Driver
⌈
When vehicle driver accepts the campaign, Vehicle Driver Application shall call Approve method of VehicleDriverApplicationInterface to inform V-UCM of the vehicle driver's decision.
⌋

The Vehicle Driver Interface Adaptive Application could adapt its notification content related to safety by subscribing to the V-UCM's VehicleConditionCollection field.

 V-UCM VehicleConditionCollection field
  Upstream requirements: ,
⌈
V-UCM shall provide to vehicle driver interface the VehicleConditionCollection field containing the required safety condition for the campaign as configured in SafetyCondition.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Vehicle 状态管理器
*原文标题：Vehicle State Manager*

Vehicle State Manager is collecting states from the several vehicle ECUs and informs V-UCM when the safety state computed based on the safety policy referred in the Vehicle Package is changing. If the safety policy is not met, the V-UCM can for instance:

* Inform vehicle driver that the safety conditions are not met to continue the update
* Based on vehicle package configuration, pause the update until policy is met or cancel campaign

 V-UCM configured behavior when vehicle safety is not met
  Upstream requirements:
⌈
When a safety condition is not met, V-UCM shall wait in case VehicleRolloutStep.ViolatedSafetyConditionBehavior is set to `WAIT_FOR_VEHICLE_SAFE_STATE` or cancel the campaign when VehicleRolloutStep.ViolatedSafetyConditionBehavior is set to `CANCEL_CAMPAIGN`.
⌋

 V-UCM provides a safety interface
  Upstream requirements:
⌈
V-UCM shall set the VehicleConditionCollection field taking the value from SafetyCondition attribute for each VehicleRolloutStep of the VehiclePackage.
⌋

Vehicle State Manager Adaptive Application can inform any vehicle state changes by calling PublishSafetyState method.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Flashing Adapter

Flashing Adapter is an application that is used in the case V-UCM is updating a AUTOSAR Classic Platform or any platform that can be flashed using diagnostic. It contains OEM specific diagnostic sequences and communicates via ara::com with the V-UCM and the AUTOSAR Adaptive Platform, and uses an implementation of diagnostic protocol data unit application programming interface (D-PDU API) to communicate with Classic ECUs over the Vehicle Bus.

Flashing Adapter contains the needed logic to put the AUTOSAR Classic Platform ECUs into the right update mode in order to avoid any timeout issues during update.

The data transfer from Flashing Adapter to the target ECU via diagnostic communication can be subject to interruptions if communication on a higher priority protocol occurs, e.g. OBD services. In that case the Flashing Adapter can use a project specific strategy to detect the interruption, retry the transfer from the beginning, and decide whether to notify or not the client about the transfer interruption.

 Flashing Adapter provided interface
⌈
Flashing Adapter shall provide the same ara::com service interface as UCM ( of ).
⌋

### 27. UCM 诊断 Application
*原文标题：UCM Diagnostic Application*

| Diagnostic Application as UCM Client | Diagnostic Application as V-UCM Client |  |
|---|---|---|
| Purpose | Update standalone ECU/Machine without involvement of V-UCM | Update ECU/Machine as part of vehicle update through V-UCM |
| Flow | Diagnostic Tool -> Diagnostic Manager -> Diagnostic App -> UCM | Diagnostic Tool -> Diagnostic Manager ->Diagnostic App -> V-UCM |
| Instance | One instance per standalone Adaptive ECU/Machine | One instance per vehicle |
| Artifacts handled | Receives Software Packages | Receives Vehicle Packages and Software Packages |
| UCM API (Service) | Package Management | Vehicle Package Management |
| ECUs/Machines being updated | Adaptive only (incl. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Non Adaptive Platform update

The interface provided by the AUTOSAR Adaptive Platform in order to update non AUTOSAR Platform complies with the subset of ISO 22900-2:2017 (D-PDU API) requirements. As this standard's coverage is wide, it is allowed to implement a reduced API that is needed to update for instance a AUTOSAR Classic Platform.

The implementation of the D-PDU API is processing binary data from the Flashing Adapter and do all of the required session, transport and network layer handling to send and receive the data on the physical vehicle bus with respect to the underlying protocols. The reason of using ISO 22900-2:2017 is to ensure that the specific Flashing Adapter from any vehicle or tool manufacturer can operate on a common software interface and can easily exchange MVCI (Modular Vehicle Communication Interface) protocol module implementations.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. D-PDU API implementation 支持
*原文标题：D-PDU API implementation support*

Supported physical layers by D-PDU API implementation
  Upstream requirements:
⌈
`ISO_11898_2_DWCAN` (Dual Wire CAN), `ISO_11898_3_DWFTCAN` (Dual Wire CAN Fault tolerant), `SAE_J2411_SWCAN` (Single Wire CAN) and `IEEE_802_3`(Ethernet) physical layers shall be supported if their respective physical vehicle bus is available inside the ECU
⌋

All other physical layers present in D-PDU API are optional.

 Supported application layers by D-PDU API implementation
  Upstream requirements:
⌈
`ISO_15765_3` (Unified diagnostic services, UDS on CAN, ISO withdrawn UDS), `ISO_14229_3` (Unified diagnostic services on CAN implementation, UDSonCAN) and `ISO_14229_5` (Unified diagnostic services on Internet Protocol implementation, UDSonIP) application layers shall be supported if their respective application layer is available inside the ECU.
⌋

All other application layers present in D-PDU API are optional.

 Supported protocols by D-PDU API implementation
  Upstream requirements:
⌈
ISO UDS on CAN with Application layer `ISO_15765_3`, ISO UDS on CAN with Application layer `ISO_14229_3` (UDSonCAN) and ISO UDS on DoIP with Application layer `ISO_14229_5` (UDSonIP) protocols shall be supported.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Not required D-PDU API 概念
*原文标题：Not required D-PDU API concepts*

Dynamic Link Libraries for Windows operating system are not required. The Windows installation process out of ISO 22900-2:2017(E) chapter 8.7.2 is not applicable to the AUTOSAR Adaptive Platform which is using POSIX Operating System.

A D-PDU API implementation can be split at OSI-Layer 4 into a D-PDU API implementation on OSI-Layer 5 and the VCI-Module on OSI-Layers 3 and 4.

The D-PDU API implementation does not use the D-PDU API root description file (RDF) as only one D-PDU API implementation is required for UCM within an AUTOSAR Adaptive Platform.

The only instance of the D-PDU API within a Software Cluster can be statically linked with the Flashing Adapter.

The D-PDU API implementation does not have to implement a protocol description file.

The supported protocol module types are fixed in the UCM use case.

The Flashing Adapter can operate the D-PDU API without using symbolic names and IDs during runtime. If the use case excludes frequent changes to the MDFs, simple Flashing Adapter can even hardcode (e.g. in a header file) all necessary IDs and operate the D-PDU API without symbolic names.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Not required D-PDU API functions

PDULockResource() and PDUUnlockResource() are used to lock and unlock exclusive access to a ComLogicalLink in case of parallel usage of the D-PDU API implementation by multiple applications on the same physical communication link. Flashing of a Classic ECU always requires some exclusive access and should be handled in the AUTOSAR Adaptive Platform itself.

The D-PDU API implementation does not have to implement the parameter `PDU_IOCTL_RESET`

 PDUIoCtl(`PDU_IOCTL_RESET`)
  Upstream requirements:
⌈
The call of PDUIoCtl(`PDU_IOCTL_RESET`) shall return the error code `PDU_ERR_ID_NOT_SUPPORTED`, if `PDU_IOCTL_RESET` is not implemented.
⌋

 PDUIoCtl(`PDU_IOCTL_START_MSG_FILTER`), PDUIoCtl(`PDU_IOCTL_CLEAR_MSG_FILTER`), PDUIoCtl(`PDU_IOCTL_STOP_MSG_FILTER`)
  Upstream requirements:
⌈
The call of PDUIoCtl() with any of the parameters `PDU_IOCTL_START_MSG`, `PDU_IOCTL_CLEAR_MSG_FILTER`, `PDU_IOCTL_SEND_BREAK` shall return the error code `PDU_ERR_ID_NOT_SUPPORTED`.
⌋

The parameters `PDU_IOCTL_START_MSG`, `PDU_IOCTL_CLEAR_MSG_FILTER` and `PDU_IOCTL_CLEAR_MSG_FILTER` are intended for the PassThru-Mode for comprimitives and therefore an implementation is not required for the Flashing Adapter.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Classic platform update with V-UCM and 诊断 tool
*原文标题：Classic platform update with V-UCM and diagnostic tool*

The Diagnostic Manager connects the Diagnostic tool to the Adaptive Platform. The diagnostic application is acting like an OTA Client and uses the V-UCM services to push Vehicle Packages and Software Packages.

Note that this approach allows to update through Diagnostic Tool not only Classic ECU, but also Adaptive or Proprietary/Legacy Machines.

### 33. Status reporting

V-UCM supports a mechanism to provide the state of an update campaign typically to OTA Client, Vehicle Driver Application and Vehicle State Manager.

Diagrams  and  do not include behaviour after reset ( for more details)

 Sequential orchestration of campaigns
  Upstream requirements:
⌈
V-UCM shall orchestrate at most a single campaign at any one time.
⌋

 TransferState field
  Upstream requirements:
⌈
| VPM::CampaignStateType | VPM::TransferState |
|---|---|
| kIdle | kIdle |
| kSyncing | kSyncing |
| kVehiclePackageTransferring | kTransferring |
| kSoftwarePackage_Transferring | kTransferring |
| kProcessing | kUpdating |
| kActivating | kUpdating |
| kVehicleChecking | kUpdating |
| kRollingBackFailed | kRollingBackFailed |
| kCancelling | kCancelling |

⌋

 CampaignState field
  Upstream requirements:
⌈
V-UCM shall provide the state of a campaign over the CampaignState field of the V-UCM VehicleDriverApplicationInterface and VehicleStateManagerInterface.
⌋

There is an overview of the campaign state machine in Fig.  detailing V-UCM campaign states and transitions.

### 34. States

Initial state
  Upstream requirements:
⌈
V-UCM shall have kIdle default state.
⌋

 Trigger on kSoftwarePackage_Transferring state
  Upstream requirements: ,
⌈
On transition to kSoftwarePackage_Transferring state and if all UCMs part of the campaign are in kPreparing state, V-UCM shall start or resume transferring (TransferStart and TransferData as well as TransferExit if no streaming required) the software packages to the UCMs according to the campaign orchestration.
⌋

 Trigger on kProcessing state
  Upstream requirements: ,
⌈
On transition to kProcessing state, V-UCM shall call ProcessSwPackage method to UCMs to start or resume processing the software packages ready for processing according to the campaign orchestration.
⌋

 Transferring of software packages on kProcessing state
  Upstream requirements: ,
⌈
If V-UCM is in kProcessing state, V-UCM shall transfer Software Packages to the UCMs according to the campaign orchestration.
⌋

 Trigger on kActivating state
  Upstream requirements: ,
⌈
On transition to kActivating state, V-UCM shall ask UCMs to activate the software with Activate method call according to the campaign orchestration as configured in the VehiclePackage.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. States Transitions

Transition from kIdle state to kSyncing state
  Upstream requirements: ,
⌈
If V-UCM is in kIdle state for CampaignState field, V-UCM shall enter the kSyncing state for CampaignState on a request to GetSwClusterInfo or SwPackageInventory.
⌋

 Transition from kSyncing state to kIdle state
  Upstream requirements:
⌈
If V-UCM is in kSyncing state for CampaignState field, V-UCM shall enter the kIdle state on completion of GetSwClusterInfo or SwPackageInventory.
⌋

 Transition from kIdle state to kVehiclePackageTransferring
  Upstream requirements:
⌈
If V-UCM is in kIdle state for CampaignState field, V-UCM shall enter the kVehiclePackageTransferring state on successful completion of TransferVehiclePackage.
⌋

 Transition from kVehiclePackageTransferring state
  Upstream requirements: ,
⌈
If V-UCM is in kVehiclePackageTransferring state for CampaignState field, V-UCM shall enter the kCancelling state for CampaignState on unsuccessful completion of TransferExit (Vehicle Package) or successful completion of DeleteTransfer (Vehicle Package) or non recoverable error of TransferData.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Campaign cancelling

CancelCampaign method could be used at garage to unlock a blocked update. Details on action by V-UCM, like cleaning up the several UCMs, changing AUTOSAR Adaptive Platform states, etc. are implementation specific.

In case an update campaign was cancelled, a new update campaign could use again the already transferred Software Packages. V-UCM could list transferred Software Packages by calling the UCMs with GetSwPackages.

 Cancellation of an update campaign shall be possible
  Upstream requirements: ,
⌈
Method CancelCampaign from V-UCM shall trigger a campaign cancel from kVehiclePackageTransferring, kSoftwarePackage_Transferring, kProcessing, kActivating, kVehicleChecking states by transitioning to state kCancelling.
⌋

 New campaign disabling
  Upstream requirements:
⌈
V-UCM shall remain in kIdle or kSyncing when a CancelCampaign method has been called with disableCampaign parameter set to True. The V-UCM remains in this state (even across multiple power-down/reboot cycles) until CancelCampaign method is invoked again with the disableCampaign parameter set with false
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Campaign Reporting

After campaign is finished (finish method has been sent to all UCMs), V-UCM should report to Backend server status of the vehicle, with for instance updated information of Software Clusters present in vehicle.

 Method to read History Report
  Upstream requirements:
⌈
V-UCM shall provide a method GetCampaignHistory to retrieve all actions that have been performed by V-UCM when exiting state kUpdating from a specific time window.
⌋

 Content of History Report
  Upstream requirements:
⌈
V-UCM shall save the point in time when TransferVehiclePackage method is called and the point in time when kIdle state is entered from any state except kSyncing based on UcmInstantiationGeneral.TimeBaseResourceForeignRef and the campaign result in CampaignHistoryType.
⌋

The elements of UCMHistoryVectorType  are not sorted.

 Keep history of Driver notification during campaign
  Upstream requirements:
⌈
If all VehicleDriverNotification.ApprovalRequired values are false in the campaign when V-UCM is recording campaign history, V-UCM shall unset driverNotified attribute otherwise set it.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 99 章（内容从略，见纯文本全文）

38. Content of Vehicle Package
39. Vehicle update security and confidentiality
40. Reporting
41. 安全事件
42. Log Messages
43. Standardized Logging
44. Violation Messages
45. Production 错误
46. API 规范
47. 服务接口
48. 类型定义
49. CampaignHistoryType
50. CampaignHistoryVectorType
51. CampaignResultType
52. VUCMResolutionVectorType
53. VUCMResolutionType
54. UCMStepErrorVectorType
55. UCMStepErrorType
56. SoftwarePackageStepType
57. UCMHistoryType
58. UCMHistoryVectorType
59. CampaignStateType
60. CampaignStateProgressInfoType
61. TransferStateType
62. SafetyConditionType
63. VehicleConditionCollectionType
64. VehicleConditionType
65. SafetyStateType
66. SwNameVersionVectorType
67. VehicleUCMInfo
68. UCMIdentifiersAndVersionsType
69. SwPackageDescType
70. SwPackageDescVectorType
71. VehiclePackageDescriptionType
72. Provided 服务接口
73. Vehicle Package 管理
74. Vehicle 驱动 Application 接口
75. Vehicle 状态管理器
76. Required 接口
77. Application 错误
78. Application 错误 Domain
79. UCMErrorDomain
80. 配置
81. Containers and 配置 parameters
82. VUCM Instantiation
83. 软件 Package
84. Vehicle Package
85. Correspondence Table
86. Default Values
87. Semantic Constraints
88. 附录
89. Mentioned 清单 Elements
90. Platform Extension API (normative)
91. 接口 to other 功能性 Clusters (informative)
92. 概述
93. Packages distribution within vehicle detailed sequence 示例
94. Collect information of present 软件 Clusters in vehicle
95. Action computation
96. Pull package from Backend into vehicle
97. Push package from backend into vehicle
98. Packages transfer from backend into targeted UCM
99. Package processing
100. Package activation
101. Package rollback
102. Campaign reporting
103. Security Analysis of Installation and Update
104. Securing Vehicle Package
105. Securing Calls to V-UCM
106. Suppressing Call to V-UCM
107. Resource Starvation
108. Demonstrator 示例
109. Change history of AUTOSAR traceable items
110. Traceable item history of this document according to AUTOSAR Release R23-11
111. Added 规范 Items in R23-11
112. Changed 规范 Items in R23-11
113. Deleted 规范 Items in R23-11
114. Added Constraints in R23-11
115. Changed Constraints in R23-11
116. Deleted Constraints in R23-11
117. Traceable item history of this document according to AUTOSAR Release R24-11
118. Added 规范 Items in R24-11
119. Changed 规范 Items in R24-11
120. Deleted 规范 Items in R24-11
121. Added Constraints in R24-11
122. Changed Constraints in R24-11
123. Deleted Constraints in R24-11
124. Traceable item history of this document according to AUTOSAR Release R25-11
125. Added 规范 Items in R25-11
126. Changed 规范 Items in R25-11
127. Deleted 规范 Items in R25-11
128. Added Constraints in R25-11
129. Changed Constraints in R25-11
130. Deleted Constraints in R25-11
131. Added 规范 Items in R26-11
132. Changed 规范 Items in R26-11
133. Deleted 规范 Items in R26-11
134. Added Constraints in R26-11
135. Changed Constraints in R26-11
136. Deleted Constraints in R26-11
