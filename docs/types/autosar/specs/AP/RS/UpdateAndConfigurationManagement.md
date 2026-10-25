# Requirements on Update and Configuration Management (`UpdateAndConfigurationManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 887 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_UpdateAndConfigurationManagement_887\AUTOSAR_AP_RS_UpdateAndConfigurationManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_UpdateAndConfigurationManagement_887\AUTOSAR_AP_RS_UpdateAndConfigurationManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_UpdateAndConfigurationManagement_887\zzgen\AP_RS_UpdateAndConfigurationManagement.complete.txt`

## 文档简介

This document specifies requirements of the AUTOSAR Adaptive Platform on the Update and Configuration Management (UCM). The motivation of UCM is to provide a standardized way to install, update and uninstall software on the adaptive platform safely and securely.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements of the AUTOSAR Adaptive Platform on the Update and Configuration Management (UCM). The motivation of UCM is to provide a standardized way to install, update and uninstall software on the adaptive platform safely and securely.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the UCM module that are not included in the AUTOSAR TR Glossary.

| Abbreviation / Acronym: | Description: |
|---|---|
| UCM | Update and Configuration Management |
| UCM Master | UCM Master is distributing packages and coordinating an update campaign in a vehicle |
| Backend | Backend is a server hosting Software Packages |
| Platform Health Manager | The Platform Health Manager functional cluster performs health monitoring on the AUTOSAR Adaptive Platform |

Below acronyms and abbreviations relevant for this document are included in the AUTOSAR TR Glossary. This is to avoid duplicate definition of the technical term. And to refer to the correct document.

| Term | Description: |
|---|---|
| Adaptive Application | see AUTOSAR TR Glossary |
| AUTOSAR Adaptive Platform | see AUTOSAR TR Glossary |
| Functional Cluster | see AUTOSAR TR Glossary |
| Service | see AUTOSAR TR Glossary |
| Electronic Control Unit | see AUTOSAR TR Glossary |
| Machine | see AUTOSAR TR Glossary |
| Manifest | see AUTOSAR TR Glossary |
| Software Package | see AUTOSAR TR Glossary |
| Software Cluster | see AUTOSAR TR Glossary |
| Vehicle Package | see AUTOSAR TR Glossary |

### 4. 约束与假设
*原文标题：Constraints and assumptions*

This chapter lists known limitations of UCM in terms of unimplemented requirements. The intent is to provide an indication how the AUTOSAR Adaptive Platform will evolve in future releases.

The functionality described above is subject to modification and will be considered for inclusion in a future release of this document.

### 5. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the `AUTOSAR_RS_UpdateAndConfigurationManagement`.

### 6. 功能概述
*原文标题：Functional Overview*

One of the declared goals of AUTOSAR Adaptive Platform is the ability to flexibly update the software and its configuration through local ("tester-based") or remote ("over-the-air") updates. UCM provides services for updating the software and its configuration running on AUTOSAR Adaptive Platform. UCM is responsible for updates of Adaptive Applications and changes to the AUTOSAR Adaptive Platform itself, including all functional clusters and the underlying OS. Therefore this document includes requirements on the following functionalities:

* Installation of new software:

  * Install software
  * Install persistent data for the software
* Update of already installed software:

  * Update software
  * Update persistent data for the software
* Uninstallation of installed software:

  * Remove software
  * Remove data created by the software
* Providing information of installed software:

  * Names of installed software
  * Versions of installed software
* Security and safety of the update process

  * Authenticity and integrity validation
  * Software dependency check
  * Recovery of software after failure during update process

### 7. 功能性需求
*原文标题：Functional Requirements*

### 8. 功能性 Cluster 初始化
*原文标题：Functional Cluster initialization*

UCM Initialization
⌈
| Description: | UCM shall be intialized before offering any services. |
|---|---|
| Rationale: | Calling APIs from uninitialized Functional Clusters that depend on prior initialization cannot be performed properly and may lead to undefined behavior. Therefore the API is only offered after internal initialization is completed. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Startup of functional cluster. |
| Supporting Material: | - |

⌋

### 9. Versions reporting

UCM Version Information Reporting
⌈
| Description: | UCM shall provide functionality to retrieve version information describing the software installed on AUTOSAR Adaptive Platform. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall support keeping software up-to-date through vehicle's lifecycle. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Retrieve version information of the installed software to determine which software needs to be installed, updated or removed. |
| Supporting Material: | - |

⌋

 UCM Download Status Reporting
⌈
| Description: | UCM shall provide functionality to retrieve information describing the software downloaded, but not activated on AUTOSAR Adaptive Platform |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall support downloading data and continuing it after re-establishing a lost connection. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Retrieve list of downloaded packages to know which data still needs to be downloaded and which has been already downloaded and can now be installed. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 数据管理
*原文标题：Data management*

UCM Resource Availability Check
⌈
| Description: | UCM shall assure that it has enough resources to receive, process and store the Software Package and associated data. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall protect itself from resource starvation. Resources may be for example memory, CPU time or network sockets. The resource check only covers the installation process. It is the responsibility of the integrator creating the Software Package to ensure enough resources for actual execution are available on the AUTOSAR Adaptive Platform (e.g. RAM, CPU time). |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Deny further transfers if no more resources for additional clients are available. |
| Supporting Material: | - |

⌋

 UCM Download Completion Check
⌈
| Description: | UCM shall verify if the size of the received data is the same as the allocated amount stated in the download request in order to ensure the download was successful. |
|---|---|
| Rationale: | UCM shall make sure complete Software Package was transferred. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | UCM shall assure that same amount of data has been transferred as was reserved in the downloaded request. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 数据 transfer
*原文标题：Data transfer*

UCM Download of Software Packages
⌈
| Description: | UCM shall receive the Software Package from a Client. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall support receiving updates using the ara::com service interface only. Therefore no local, e.g. file-based transfer shall be used. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Receive Software Package(s) from a DSA(Diagnostic Service Application). |
| Supporting Material: | - |

⌋

 UCM Simultaneous Transfer of multiple Software Packages
⌈
| Description: | UCM shall support simultaneous transfers of multiple Software Packages. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall support multiple update sources. Therefore several clients shall be able to transfer Software Packages to UCM simultaneously. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Receive Software Package(s) from a DSA(Diagnostic Service Application). |
| Supporting Material: | - |

⌋

### 12. 软件 updates
*原文标题：Software updates*

UCM Software Install on AUTOSAR Adaptive Platform
⌈
| Description: | UCM shall provide functionality to install new software on the AUTOSAR Adaptive Platform. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall support keeping software up-to-date and to introduce new features through out vehicles life cycle. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Introduce new functionality with new Adaptive Application or replace old functionality by replacing old Adaptive Application with new Adaptive Application. |
| Supporting Material: | - |

⌋

 UCM Functional Cluster Update
⌈
| Description: | UCM shall provide functionality to update the AUTOSAR Adaptive Platform. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall support keeping the AUTOSAR Adaptive Platform up-to-date and to introduce fixes to the AUTOSAR Adaptive Platform software. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Updating the AUTOSAR Adaptive Platform with latest features and fixes. |
| Supporting Material: | - |

⌋

 UCM Operating System Update
⌈
| Description: | UCM shall provide functionality to update the Operating System hosting the AUTOSAR Adaptive Platform. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. History, progress and status

UCM Progress Reporting
⌈
| Description: | UCM shall provide an interface to read progress of the update. |
|---|---|
| Rationale: |  |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Provide progress information in order to indicate to the user of the off-board tester that ongoing update is alive and progressing. |
| Supporting Material: | During a UCM operation the user would like to have an idea of how long will it take to complete the operation and if an error occurs. |

⌋

 UCM State Reporting
⌈
| Description: | UCM shall provide an interface to read the status of UCM. |
|---|---|
| Rationale: | UCM shall provide its state to clients which can then react on changing states. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | One client is installing packages, another client has to wait until the state allows the next operation. |
| Supporting Material: | - |

⌋

 UCM Action History
⌈
| Description: | UCM shall provide an interface to return UCM's action history. |
|---|---|
| Rationale: | UCM shall provide its action history to help AUTOSAR Adaptive Platform troubleshooting. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In order to investigate the lifecycle of the Adaptive Platform an interface for extracting UCM's action history has to be provided. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 校验
*原文标题：Validation*

UCM Software Package Cryptographic Protection
⌈
| Description: | UCM shall only allow installation of authenticated Software Packages on the Adaptive Platform. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall ensure that Software Packages are unmodified and come from trusted origins. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Protection of AUTOSAR Adaptive Platform from hacking attempts from untrusted origin. |
| Supporting Material: | - |

⌋

 UCM Software Package Consistency Protection
  Upstream requirements:
⌈
| Description: | UCM shall check the consistency of the received Software Package. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall make sure that the Software Package can be installed safely. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | To detect possible errors which might have occurred during creation of the Software Package, UCM shall check that provided Software Package meta-data and content match. |
| Supporting Material: | - |

⌋

 UCM Dependency Check
⌈
| Description: | UCM shall check dependencies configured for a Software Package. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall make sure that the dependencies of the considered package are fulfilled. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Standardization of Log and Trace Messages

UCM Trace Points
⌈
| Description: | UCM shall support standardized trace points during the update process. |
|---|---|
| Rationale: | Providing standardized trace points during update process provides information of the ongoing events during different phases of update like transfer, processing, and activation. |

Applies To:
| Dependencies: | ara::log |
|---|---|
| Use Case: | Tracing of different phases during update. |
| Supporting Material: | - |

⌋

### 16. References

### 17. 附录
*原文标题：Appendix*

### 18. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 19. Traceable item history of this document according to AUTOSAR Release R23-11

### 20. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| UCM shall report production errors |  |

### 21. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 22. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

| Number | Heading |
|---|---|
| UCM Master shall support reporting version information of a complete vehicle |  |
| UCM Master shall record all UCM Master's action history |  |
| UCM Master shall coordinate software update in a vehicle across multiple Electronic Control Units |  |
| UCM Master shall use platform communication services for interacting with UCM subordinates |  |
| UCM Master shall ensure it is safe to perform any modification to the vehicle |  |
| UCM Master shall interact with driver |  |
| UCM Master shall prevent processing of compromised Vehicle Packages |  |
| UCM Master shall provide an interface to read the state of an update campaign |  |
| UCM Master shall orchestrate a software update campaign according to the Vehicle Package's Manifest |  |

### 23. Traceable item history of this document according to AUTOSAR Release R24-11

### 24. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| UCM shall support standardized trace points |  |
| UCM Support for Update Suspend and Resume. |  |

### 25. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 26. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 27. Traceable item history of this document according to AUTOSAR Release R25-11

### 28. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 29. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 30. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 31. Traceable item history of this document according to AUTOSAR Release R26-11

### 32. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

none

### 33. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

none

### 34. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

none
