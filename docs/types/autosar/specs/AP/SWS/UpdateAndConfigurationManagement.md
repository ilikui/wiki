# Specification of Update and Configuration Management (`UpdateAndConfigurationManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 888 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_UpdateAndConfigurationManagement_888\AUTOSAR_AP_SWS_UpdateAndConfigurationManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_UpdateAndConfigurationManagement_888\AUTOSAR_AP_SWS_UpdateAndConfigurationManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_UpdateAndConfigurationManagement_888\zzgen\AP_SWS_UpdateAndConfigurationManagement.complete.txt`

## 文档简介

This software specification contains the functional description and interfaces of the functional cluster Update and Configuration Management which belongs to the AUTOSAR Adaptive Platform Services. Update and Configuration Management has the responsibility of installing, updating and removing software on an AUTOSAR Adaptive Platform in a safe and secure way while not sacrificing the dynamic nature of the AUTOSAR Adaptive Platform.

The Update and Configuration Management functional cluster is responsible for:

* Version reporting of the software present in the AUTOSAR Adaptive Platform
* Receiving and buffering software updates
* Checking that enough resources are available to ensure a software update
* Performing software updates and providing log messages and progress information
* Validating the outcome of a software update
* Providing rollback functionality to restore a known functional state in case of failure

In addition to updating and changing software on the AUTOSAR Adaptive Platform, the Update and Configuration Management is also responsible for updates and changes to the AUTOSAR Adaptive Platform itself, including all functional clusters, the underlying POSIX OS and its kernel with the responsibilities defined above.

In order to allow flexibility in how Update and Configuration Management is used, it will expose its functionality via ara::com service interfaces, not direct APIs. This ensures that the user of the functional cluster Update and Configuration Management does not have to be located on the same ECU.

## 模块依赖

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Update and Configuration Management to other Functional Clusters. Section  lists the interfaces required by Update and Configuration Management.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This software specification contains the functional description and interfaces of the functional cluster Update and Configuration Management which belongs to the AUTOSAR Adaptive Platform Services. Update and Configuration Management has the responsibility of installing, updating and removing software on an AUTOSAR Adaptive Platform in a safe and secure way while not sacrificing the dynamic nature of the AUTOSAR Adaptive Platform.

The Update and Configuration Management functional cluster is responsible for:

* Version reporting of the software present in the AUTOSAR Adaptive Platform
* Receiving and buffering software updates
* Checking that enough resources are available to ensure a software update
* Performing software updates and providing log messages and progress information
* Validating the outcome of a software update
* Providing rollback functionality to restore a known functional state in case of failure

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the UCM module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Application Error | Errors returned by UCM |
| Backend | Backend is a server hosting Software Packages |
| Boot options | Boot Manager Configuration |
| Dependency check | Verification method proving that all configured dependencies will be fulfilled after finishing the activation. |
| DM | AUTOSAR Adaptive Diagnostic Management |
| D-PDU API | Diagnostic Protocol Data Unit Application Programming Interface |
| Integrity check | Verification method proving there has not been any alteration of the artefact content |
| MDF | Module Description File |
| MVCI | Modular Vehicle Communication Interface |
| OTA Client | OTA Client is anAdaptive Application in communication with Backend Over The Air |
| RDF | Root Description File |
| UCM | Update and Configuration Management |
| VCI | Vehicle Communication Interface |
| Vehicle Driver Application | Vehicle Driver Application is an Adaptive Application in communication with Vehicle Driver Human to Machine Interface |
| V-UCM | V-UCM is distributing packages and coordinating an update campaign in a vehicle |
| update cycle | Refers to the recurring |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

See chapter .

### 6. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 已知限制
*原文标题：Known Limitations*

UCM is not responsible to initiate the update process. UCM realizes a service interface to achieve this operation. The user of this service interface is responsible to verify that the vehicle is in a updatable state before executing a software update procedure on demand. It is also in the responsibility of the user to communicate with other AUTOSAR Adaptive Platforms or AUTOSAR Classic Platforms within the vehicle.

The UCM receives a locally available software package for processing. The software package is usually downloaded from the OEM backend. The download of the software packages has to be done by another application, i.e. UCM does not manage the connection to the OEM backend. Prior to triggering their processing, the software packages have to be transferred to UCM by using the provided ara::com interface.

The UCM update process is designed to cover updates on use case with single AUTOSAR Adaptive Platform. UCM can update Adaptive Applications, the AUTOSAR Adaptive Platform itself, including all functional clusters and the underlying OS.

The UCM is not responsible for enforcing authentication and access control to the provided interfaces.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions to applicability.

### 10. 对其他功能集群的依赖
*原文标题：Dependencies to other functional clusters*

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Update and Configuration Management to other Functional Clusters. Section  lists the interfaces required by Update and Configuration Management.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

### 11. Provided 接口
*原文标题：Provided Interfaces*

Figure  shows interfaces provided by Update and Configuration Management to other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of interfaces provided to other Functional Clusters within the AUTOSAR Adaptive Platform.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| PackageManagement | Vehicle Update and Configuration Management | This interface is used to control different Update and Configuration Management instances and e.g., applications implementing the same interface located within the vehicle that act as an adapter to install software packages on third-party systems. Vehicle Update and Configuration Management is able to differentiate between the service instances by matching the result of GetId with an ID provided in a Software Package. |

### 12. Required 接口
*原文标题：Required Interfaces*

Figures , , and  show interfaces required by Update and Configuration Management from other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a complete list of required interfaces from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Cryptography | CryptoStack | This interface may be used e.g., to verify the integrity and authenticity of Software Packages. |
| Execution Management | ExecutionClient | This interface shall be used by the daemon process(es) inside Update and Configuration Management to report their execution state to Execution Management. |
| Log and Trace | Logger | Update and Configuration Management shall use this interface to log standardized messages. |
| Persistency | FileStorage | Used to store files of received software packages. |
| Persistency | KeyValueStorage | Used to store the internal state of Update and Configuration Management. |
| Platform Health Management | SupervisedEntity | This interface should be used to supervise the daemon process(es) of Update and Configuration Management. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 接口 to Adaptive 状态管理
*原文标题：Interfaces to Adaptive State Management*

UCM relies on State Management and its provided UpdateRequest Service Interface to perform the necessary Function Group state changes needed to activate the newly installed, updated or removed software.

Certain applications can conflict with the update process or the newly updated package, and they need to be stopped during the update process. This could be achieved by putting the machine to a safe Machine state, by activating a combination of suitable Function Groups and its states. It is the responsibility of the platform integrator to define this state or Function Groups. The Adaptive Application accessing the UCM, should make sure that the platform is switched to this state (using interfaces from State Management), before starting the update.

### 14. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| No description |  |  |
| Basic SW security events |  |  |
| State Management shall coordinate and control multiple sets of Applications. |  |  |
| UCM Software Install on AUTOSAR Adaptive Platform |  |  |
| UCM Version Information Reporting |  |  |
| UCM Software Update on AUTOSAR Adaptive Platform |  |  |
| UCM Software Removal on AUTOSAR Adaptive Platform |  |  |
| UCM Removal of Persistent Data Owned by Uninstalled Software |  |  |
| UCM Software Package Cryptographic Protection |  |  |
| UCM Dependency Check |  |  |
| UCM Recovery Mechanism in case of Failed Activation |  |  |
| UCM Download Status Reporting |  |  |
| UCM Pending Changes Reporting |  |  |
| UCM Software Package Consistency Protection |  |  |
| UCM Resource Availability Check |  |  |
| UCM Download Completion Check |  |  |
| UCM Processing Cleanup processing has finished |  |  |
| UCM Announcement of Software Changes |  |  |
| UCM Simultaneous Transfer of multiple Software Packages |  |  |
| UCM Cancellation of Update |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 功能规范
*原文标题：Functional specification*

### 16. 软件 Cluster lifecycle
*原文标题：Software Cluster lifecycle*

The state machine in Fig.  describes the life-cycle states of a Software Cluster. These states are reported with GetSwClusterChangeInfo method.

 Software Cluster life-cycle state kAdded
  Upstream requirements:
⌈
A Software Cluster state shall be kAdded after the Software Cluster is successfully processed with ProcessSwPackage method call on the AUTOSAR Adaptive Platform and if it was not previously present in the AUTOSAR Adaptive Platform and before activation is finished.
⌋

 Software Cluster life-cycle state transition from kAdded to kPresent
  Upstream requirements:
⌈
A Software Cluster state shall change from kAdded to kPresent after a successful activation of a newly added Software Cluster with Finish method call.
⌋

 Software Cluster life-cycle state kUpdating
  Upstream requirements:
⌈
A Software Cluster state shall be kUpdating after a successful processing of the updated Software Cluster with ProcessSwPackage method call and before activation is finished.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Technical 概述
*原文标题：Technical Overview*

One of the declared goals of AUTOSAR Adaptive Platform is the ability to flexibly update the software and its configuration through over-the-air updates. During the lifecycle of an AUTOSAR Adaptive Platform, UCM is responsible to perform software modifications on the machine and to retain consistency of the whole system.

The UCM Functional Cluster provides a service interface that exposes its functionality to retrieve AUTOSAR Adaptive Platform software information and consistently execute software updates. Since ara::com is used, the client using the UCM service interface can be located on the same AUTOSAR Adaptive Platform, but also remote clients are possible.

The service interface has been primarily designed with the goal to make it possible to use standard diagnostic services for downloading and installing software updates for the AUTOSAR Adaptive Platform. However, the methods and fields in the service interface are designed in such a way that they can be used in principle by any Adaptive Application. UCM does not impose any specific protocol on how data is transferred to the AUTOSAR Adaptive Platform and how package processing is controlled.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. UCM 诊断 Application
*原文标题：UCM Diagnostic Application*

| Diagnostic Application as UCM Client | Diagnostic Application as V-UCM Client |  |
|---|---|---|
| Purpose | Update standalone ECU/Machine without involvement of V-UCM | Update ECU/Machine as part of vehicle update through V-UCM |
| Flow | Diagnostic Tool -> Diagnostic Manager -> Diagnostic App -> UCM | Diagnostic Tool -> Diagnostic Manager ->Diagnostic App -> V-UCM |
| Instance | One instance per standalone Adaptive ECU/Machine | One instance per vehicle |
| Artifacts handled | Receives Software Packages | Receives Vehicle Packages and Software Packages |
| UCM API (Service) | Package Management | Vehicle Package Management |
| ECUs/Machines being updated | Adaptive only (incl. Classic Machines on Adaptive ECU, if needed) | Any ECU (Adaptive, Classic, Proprietary) |
| Implemented by | ECU Vendor and/or OEM | OEM |
| References | * Figure , Figure , Figure , Figure  in this document |  |

* Figure "Vehicle Update Architecture" in `AUTOSAR_EXP_PlatformDesign`
| * Figure "Interfaces of UCM" in AUTOSAR_EXP_SWArchitecture | * Figure "Example of V-UCM architecture overview within a vehicle" and Figure "Classic platform update with V-UCM and diagnostic tool" in  document, Figure  in this document |
|---|---|

### 19. 软件 Package 管理
*原文标题：Software Package Management*

As Software Packages are the starting point of any update performed by UCM the management of these is a essential part of the specification. Getting from transferred Software Packages to activated Software Clusters in an update cycle is done in three phases:

* Preparation phase: The phase in which Software Packages can be transferred from the UCM Client to the UCM and processed to alter (Install, Update or Remove) each relevant Software Cluster included in the actual update. For detailed informations see chapter .
* Activation phase: The critical phase of an update cycle in which the UCM performs dependency checks of the involved Software Clusters (compare chapter ) then the activation of Software Clusters and finally the verification of the installation, with the help of State Management, prior to finishing the update. For further informations see chapter .
* Cleanup phase: The phase in which the system is restored into a clean state with all unnecessary artifacts, like Software Packages, removed and prepared to be ready for the next update cycle. More information can be found in chapter .

### 20. 软件 Package
*原文标题：Software Package*

Software Package utilization
  Upstream requirements:
⌈
The unit for deployment that the UCM shall take as input is called Software Package, see . Each Software Package shall address a single SoftwareCluster.
⌋

A SoftwareCluster can act in two roles:

* 'Sub'-SoftwareCluster : It is a SoftwareCluster without diagnostic target address, containing processes, executables and further elements
* 'Root'-SoftwareCluster : It is a SoftwareCluster with a diagnostic target address that may reference several other 'Sub'-SoftwareClusters, which thus form a logical group.

A SoftwareCluster can be of the following categories expressed by the attribute SoftwareCluster.SoftwareClusterCategory:

* `APPLICATION_LAYER`: the SoftwareCluster can be removed by UCM.
* `PLATFORM_CORE`: the SoftwareCluster cannot be removed as it would break the system.
* PLATFORM: the SoftwareCluster is part of the platform software and can be removed.

 Software Cluster category
  Upstream requirements: ,
⌈
UCM shall not remove a SoftwareCluster where the corresponding SoftwareClusterDesign has attribute installationBehavior set to value cannotBeRemoved.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Content of a 软件 Package
*原文标题：Content of a Software Package*

Each Software Package addresses a single SoftwareCluster and contains manifests, executables and further data (depending on the role of the SoftwareCluster) as the example sketched in Figure .

A single Software Package is designed in a way that it could contain one or several executables of Adaptive Applications, kernel or firmware updates, or updated configuration and calibration data to be deployed on the AUTOSAR Adaptive Platform.

The Software Package manifest is recommended to be sent at the beginning in order for UCM to have early information of for instance memory usage or streaming.

An exemplary implementation of the adaptive workflow with Software Packages can be seen in chapter Methodology and Manifest in . For more details on the Software Package class, you can refer to SoftwarePackage.

 Software Cluster and version
  Upstream requirements:
⌈
SoftwareCluster's manifest shall include a name and a SoftwareClusterVersion following description of StrongRevisionLabelString.
⌋

 Semantic versioning
  Upstream requirements:
⌈
UCM shall compute SoftwareCluster dependency check comparing only MajorVersion and MinorVersion.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Applications Persisted 数据
*原文标题：Applications Persisted Data*

Updating and rolling back of persisted data is handled completely by the application using persistency without involvement of UCM. A detailed explanation can be found in the Persistency Specification . An exception here is the removal of persistent data after a SoftwareCluster is removed.

 Persistent data clean-up after Software Cluster removal
  Upstream requirements: , ,
⌈
UCM shall remove persistent data of a removed SoftwareCluster by using the information given in the application manifest, namely deploymentUri.uri and persistencyCentralStorageURI, in order to leave the AUTOSAR Adaptive Platform and the file system clean.
⌋

 Persistent data clean-up after Software Cluster update that removes a process
  Upstream requirements: , ,
⌈
UCM shall remove persistent data of a removed process by using the information given in the execution manifest, namely deploymentUri.uri and persistencyCentralStorageURI in order to leave the AUTOSAR Adaptive Platform and the file system clean.
⌋

Persistent data can include administrative and backup data.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Runtime dependencies

Processes within a SoftwareCluster can have functional dependencies toward other SoftwareClusters.

Dependencies are described in the SoftwareCluster metamodel, see . This dependency model allows to confirm for instance if there are missing or conflicting services within Machine or within the whole vehicle, or if required libraries located in another Software Cluster would be missing or conflicting with the being updated Software Cluster.

The rationale is, if UCM has to process several Software Packages, then execution dependencies may not be fulfilled at all times during the Software Packages process but must be fulfilled before changes can be activated.

At activation, UCM is starting a session with State Management (SM) which is requesting Execution Management (EM) to change states of FunctionGroups (Sequence diagram 10.4). Execution Management uses Execution Manifest which contains modelled execution dependencies. If those dependencies are not met at Verify state, Execution Management will report an error to State Management forwarding this error to UCM which will rollback.

### 24. Update 范围 and 状态管理
*原文标题：Update scope and State Management*

Software Package processed by UCM can contain Adaptive Applications, updates to AUTOSAR Adaptive Platform itself or to the underlying OS. Update type depends on the content of the Software Package.

 Update of Adaptive Application
  Upstream requirements:
⌈
UCM shall be able to update Adaptive Applications
⌋

 Update of Functional Clusters
  Upstream requirements:
⌈
UCM shall be able to update all Functional Clusters, including UCM itself.
⌋

 Update of Host
  Upstream requirements:
⌈
UCM shall be able to update the underlying OS hosting the AUTOSAR Adaptive Platform.
⌋

Definition of an updatable state with respect to the system setup is the OEM responsibility. Based on the system setup and the application, the system might need to be switched into a predefined state, to free resource to speed up the update, to block normal usage of software which might cause interruptions to update process and to block using functionality which might be interrupted by the update sequence.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Preparation Phase

The Preparation phase includes transferring and processing of Software Packages. It is possible to only transfer (see chapter ) and perform the processing of a Software Package (see chapter ) in a later point of time, or combine both steps and process directly from a stream, as described in chapter .

### 26. Transferring 软件 Packages
*原文标题：Transferring Software Packages*

In the Preparation phase, it is possible to transfer Software Packages decoupled from the processing. This section describes requirements for initiation of a data transfer, the data transmission and ending of the data transmission.

Each Software Package gets two states assigned as soon as the transfer has been started. The two states are defined by the TransferStateType and the ProcessingStateType. With the combination of both and the information returned from the method GetSwPackages a client of UCM has access to the current progress and status of a Software Package. The state machines in Fig.  are showing the lifecycle of a Software Package that is transferred to and processed by UCM. During this lifecycle, a Software Package is uniquely identified with an id that UCM provides to the client.

The UCM has the possibility to keep the Software Package in kTransferred state in case it failed the processing of the Software Package and retry later: transferring Software Package can be costly, for instance if it is authenticated, there could be no reason to delete it if the update has failed.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 错误处理 in TransferStart
*原文标题：Error handling in TransferStart*

TransferStart allocates resources for the client transfer.

 UCM insufficient memory
  Upstream requirements: , ,
⌈
TransferStart method shall raise the ApplicationError kMemoryInsufficient if the UCM buffer has not enough resources to store the corresponding Software Package.
⌋

### 28. 错误处理 in TransferData
*原文标题：Error handling in TransferData*

TransferData executes the following checks. It is recommended to follow the specified order.

 TransferData error handling order
  Upstream requirements: , ,
⌈
TransferData method shall check the following error conditions and return the respective error code.

#
#
#
#
#
#
#
#
#
#
#
#
#
⌋

 TransferData OperationNotPermitted
  Upstream requirements:
⌈
Calling TransferData after calling TransferExit for a specific TransferId shall raise the error ApplicationError kOperationNotPermitted
⌋

 TransferData InvalidTransferId
  Upstream requirements:
⌈
TransferData shall raise the error ApplicationError kTransferIdInvalid in case an invalid TransferId (An ID that was not initiated by TransferStart or marked invalid by DeleteTransfer) is sent by the client.
⌋

 TransferData IncorrectBlock
  Upstream requirements: ,
⌈
TransferData shall raise ApplicationError kBlockIncorrect upon receipt of a block counter value that is successfully transmitted to UCM before or upon receipt of an unexpected block counter value.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 错误处理 in TransferExit
*原文标题：Error handling in TransferExit*

TransferExit error handling order
  Upstream requirements: , ,
⌈
TransferExit method shall check the following error conditions and return the respective error code.

#
#
#
#
#
#
#
#
#
#
⌋

 Transfer sequence order
  Upstream requirements:
⌈
Calling TransferExit without calling TransferData at least once or after TransferExit is called for a specific TransferID, shall raise the ApplicationError kOperationNotPermitted.
⌋

 TransferExit InvalidTransferId
  Upstream requirements:
⌈
TransferExit shall raise the error ApplicationError kTransferIdInvalid in case an invalid TransferId is sent by the client.
⌋

 Insufficient amount of data transferred
  Upstream requirements: , ,
⌈
When TransferExit method is called, UCM shall check if all blocks of the Software Package have been transferred according to the size parameter of TransferStart. If not UCM shall return ApplicationError kDataInsufficient.
⌋

TransferExit checks if the Software Package archiving format is supported in accordance to  (kPackageFormatUnsupported).

TransferExit checks authentication in accordance to  (kAuthenticationFailed).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 错误处理 in DeleteTransfer
*原文标题：Error handling in DeleteTransfer*

DeleteTransfer error handling order
  Upstream requirements: , ,
⌈
DeleteTransfer method shall check the following error conditions and return the respective error code.

#
#
⌋

DeleteTransfer checks if the supplied parameter TransferId is valid.

 DeleteTransfer InvalidTransferId
  Upstream requirements:
⌈
DeleteTransfer shall raise the error ApplicationError kTransferIdInvalid in case an invalid TransferId is sent by the client.
⌋

 DeleteTransfer OperationNotPermitted
  Upstream requirements:
⌈
Calling DeleteTransfer during processing or during the processing stream shall raise the error ApplicationError kOperationNotPermitted.
⌋

### 31. Processing of 软件 Packages from a stream
*原文标题：Processing of Software Packages from a stream*

It is also possible to process a Software Package while the transfer is still ongoing. The following requirements apply for this use case.

 Processing from stream
  Upstream requirements: , , ,
⌈
The UCM may support calling ProcessSwPackage directly from stream without waiting to receive the Software Package completely.
⌋

 Processing from stream states
  Upstream requirements: ,
⌈
The UCM shall set the Transferring State to kTransferring and the Processing State to kProcessing if a Software Package is streamed.
⌋

 Cancelling streamed packages
  Upstream requirements: ,
⌈
When Cancel is called, UCM shall remove all temporary data of a streamed Software Package.
⌋

 Transferring while processing from stream
  Upstream requirements: ,
⌈
The Processing State of a Software Package (processingState) state shall remain in kProcessing when TransferData is called.
⌋

 Finishing transfer while processing from stream
  Upstream requirements: ,
⌈
The streamed Software Package TransferStateType shall be set to kTransferred and the Processing State shall be set to kProcessed when TransferExit is called and the Software Package is completely processed.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Processing 软件 Packages
*原文标题：Processing Software Packages*

In contrast to package transmission, only one Software Package can be processed at the same time to ensure consistency of the system. In the following, a software or package processing can involve any combination of an installation, update or removal of applications, configuration data, calibration data or manifests. It is up to the vendor-specific metadata inside a Software Package to describe the tasks UCM has to perform for its processing. For a removal, this might involve metadata describing which data needs to be deleted. Nevertheless, the communication sequence between the triggering application of the software modification and UCM is the same in any case. For an update of an existing application, the Software Package can contain only partial data, e.g. just an updated version of the execution manifest. Any UCM Client need to confirm that the UCM has its CurrentStatus UpdateStateType set to kPreparing state before starting an update cycle.

 Processing a Software Package
  Upstream requirements: ,
⌈
Calling ProcessSwPackage shall set the Processing State (processingState) to kProcessing until the processing is finished, which shall transition to kProcessed state.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 错误处理 during Processing 软件 Packages
*原文标题：Error handling during Processing Software Packages*

ProcessSwPackage error handling order
  Upstream requirements:
⌈
ProcessSwPackage method shall check the following error conditions and return the respective error code.

#
#
#
#
#
#
#
#
#
#
#
#
#
#
⌋

 ProcessSwPackage OperationNotPermitted
  Upstream requirements: ,
⌈
ProcessSwPackage shall raise the error ApplicationError kOperationNotPermitted in case the Update State (updateState) is not kPreparing.
⌋

 Sequential Software Package Processing
  Upstream requirements: , ,
⌈
Once method ProcessSwPackage has been called by a client, further calls to the same method shall be rejected with ApplicationError kServiceBusy as long as the processing is still ongoing.
⌋

 ProcessSwPackage InvalidTransferId
  Upstream requirements:
⌈
ProcessSwPackage shall raise the error ApplicationError kTransferIdInvalid in case an invalid TransferId is sent by the client.
⌋

ProcessSwPackage checks authentication in accordance to  (kAuthenticationFailed)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 174 章（内容从略，见纯文本全文）

34. 错误处理 for Cancel
35. 错误处理 for RevertProcessedSwPackages
36. Activation Phase
37. Activation
38. 错误处理 for Activate
39. Rollback
40. 错误处理 for Rollback
41. Boot options
42. Cleanup Phase
43. Cleanup
44. Status Reporting
45. Preparation phase of Package 管理
46. Activation phase of Package 管理
47. Cleaning up phase of Package 管理
48. Suspend and resume
49. Robustness against reset
50. Boot monitoring
51. History
52. Version Reporting
53. Securing 软件 Updates
54. 功能性 cluster lifecycle
55. 启动
56. 关机
57. Reporting
58. 安全事件
59. Log Messages
60. Standardized Logging
61. Violation Messages
62. Production 错误
63. UCM ROLLBACK FAILED
64. HISTORY RECORD FAILED
65. CANCEL FAILED
66. MISSING DEPENDENCIES
67. OLD VERSION PACKAGE
68. PREPAREUPDATE FAILED
69. PREPAREUPDATE Rejected
70. UPDATE SESSION FAILED
71. UPDATE SESSION REJECTED
72. VERIFICATION FAILED
73. VERIFICATION REJECTED
74. PREPAREROLLBACK FAILED
75. PREPAREROLLBACK REJECTED
76. CLEANUP FAILED
77. API 规范
78. 服务接口
79. 类型定义
80. UCMIdentifierType
81. UCMIdentifierAndVersionType
82. TransferIdType
83. SwPackageNameType
84. ProcessingStateType
85. TransferStateType
86. SwClusterNameType
87. StrongRevisionLabelString
88. SwNameVersionType
89. ProgressInformationType
90. ByteVectorType
91. SwPackageStateType
92. SwPackageInfoType
93. SwPackageInfoVectorType
94. SwClusterStateType
95. SwClusterInfoType
96. SwClusterInfoVectorType
97. CurrentStatusType
98. UpdateStateType
99. RunningStateType
100. ActionType
101. ResultType
102. HistoryType
103. HistoryVectorType
104. SwClusterManifestInfoType
105. DependencyType
106. DependencyVectorType
107. DependencyRoleType
108. LogicalOperationType
109. DependencyCompareConditionType
110. DependencyOperatorType
111. Provided 服务接口
112. Package 管理
113. Required 接口
114. 状态管理 Update Request
115. Application 错误
116. Application 错误 Domain
117. UCMErrorDomain
118. 配置
119. 配置规范
120. Ucm Subordinate 配置
121. 通用配置
122. SoftwareCluster
123. Relation to 诊断
124. ArtifactLocator
125. ArtifactChecksum
126. Correspondence Table
127. Default Values
128. Semantic Constraints
129. 时序图
130. Update process
131. 数据 transmission
132. Package processing
133. Activation
134. Failing activation
135. Failing rollback
136. V-UCM simplified vehicle update
137. 附录
138. Mentioned 清单 Elements
139. Mentioned APMC Elements from other 功能性 Clusters
140. Demands and constraints on Base 软件
141. 接口 to other 功能性 Clusters (informative)
142. 概述
143. 接口 Tables
144. UCM update 通知
145. Security Analysis of Installation and Update
146. Securing 软件 Package
147. Securing Calls to UCM
148. Suppressing Call to UCM
149. Resource Starvation
150. Zombie Sessions
151. History of Constraints and 规范 Items
152. Constraint and 规范 Item History of this document according to AUTOSAR Release R19-11.
153. Added 规范 Items in R19-11
154. Changed 规范 Items in R19-11
155. Deleted 规范 Items in R19-11
156. Added Constraints in R19-11
157. Changed Constraints in R19-11
158. Deleted Constraints in R19-11
159. Constraint and 规范 Item History of this document according to AUTOSAR Release R20-11.
160. Added 规范 Items in R20-11
161. Changed 规范 Items in R20-11
162. Deleted 规范 Items in R20-11
163. Added Constraints in R20-11
164. Changed Constraints in R20-11
165. Deleted Constraints in R20-11
166. Constraint and 规范 Item History of this document according to AUTOSAR Release R21-11.
167. Added 规范 Items in R21-11
168. Changed 规范 Items in R21-11
169. Deleted 规范 Items in R21-11
170. Added Constraints in R21-11
171. Changed Constraints in R21-11
172. Deleted Constraints in R21-11
173. Constraint and 规范 Item History of this document according to AUTOSAR Release R22-11.
174. Added 规范 Items in R22-11
175. Changed 规范 Items in R22-11
176. Deleted 规范 Items in R22-11
177. Added Constraints in R22-11
178. Changed Constraints in R22-11
179. Deleted Constraints in R22-11
180. Constraint and 规范 Item History of this document according to AUTOSAR Release R23-11.
181. Added 规范 Items in R23-11
182. Changed 规范 Items in R23-11
183. Deleted 规范 Items in R23-11
184. Added Constraints in R23-11
185. Changed Constraints in R23-11
186. Deleted Constraints in R23-11
187. Constraint and 规范 Item History of this document according to AUTOSAR Release R24-11.
188. Added 规范 Items in R24-11
189. Changed 规范 Items in R24-11
190. Deleted 规范 Items in R24-11
191. Added Constraints in R24-11
192. Changed Constraints in R24-11
193. Deleted Constraints in R24-11
194. Constraint and 规范 Item History of this document according to AUTOSAR Release R25-11.
195. Added 规范 Items in R25-11
196. Changed 规范 Items in R25-11
197. Deleted 规范 Items in R25-11
198. Added Constraints in R25-11
199. Changed Constraints in R25-11
200. Deleted Constraints in R25-11
201. Constraint and 规范 Item History of this document according to AUTOSAR Release R26-11.
202. Added 规范 Items in R26-11
203. Changed 规范 Items in R26-11
204. Deleted 规范 Items in R26-11
205. Added Constraints in R26-11
206. Changed Constraints in R26-11
207. Deleted Constraints in R26-11
