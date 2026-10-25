# Requirements on Vehicle Update and Configuration Management (`VehicleUpdateAndConfigurationManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 1097 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_VehicleUpdateAndConfigurationManagement_1097\AUTOSAR_AP_RS_VehicleUpdateAndConfigurationManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_VehicleUpdateAndConfigurationManagement_1097\AUTOSAR_AP_RS_VehicleUpdateAndConfigurationManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_VehicleUpdateAndConfigurationManagement_1097\zzgen\AP_RS_VehicleUpdateAndConfigurationManagement.complete.txt`

## 文档简介

This document specifies the requirements of the AUTOSAR Adaptive Platform on the Vehicle Update and Configuration Management (V-UCM). The motivation of V-UCM is to provide a standardized way to coordinate within a vehicle the installation, update and removal of software safely and securely.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies the requirements of the AUTOSAR Adaptive Platform on the Vehicle Update and Configuration Management (V-UCM). The motivation of V-UCM is to provide a standardized way to coordinate within a vehicle the installation, update and removal of software safely and securely.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

No content.

### 5. 需求 quality
*原文标题：Requirements quality*

No content.

### 6. 需求 identification
*原文标题：Requirements identification*

No content.

### 7. 需求 status
*原文标题：Requirements status*

No content.

### 8. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the V-UCM module that are not included in the AUTOSAR TR Glossary.

| Abbreviation / Acronym: | Description: |
|---|---|
| UCM | Update and Configuration Management |
| V-UCM | V-UCM is distributing packages and coordinating an update campaign in a vehicle |
| Backend | Backend is a server hosting Software Packages |

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
| Vehicle State Manager | see  AUTOSAR Glossary |

### 9. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the AUTOSAR_AP_RS_VehicleUpdateAndConfigurationManagement.

### 10. 功能概述
*原文标题：Functional Overview*

One of the declared goals of the AUTOSAR Adaptive Platform is the ability to flexibly update the software and its configuration through local ("tester-based") or remote ("over-the-air") updates. V-UCM provides services for updating the software and its configuration in a vehicle. V-UCM is coordinating an update campaign within the vehicle. Therefore this document includes requirements on the following functionalities:

* Interact with Backend to:

  * Identify Software Clusters that could be updated, installed or removed
  * Authenticate Vehicle Package
  * Confirm dependencies between Software Clusters within vehicle before starting campaign
  * Inform Backend of needed Software Packages, receives them and dispatch them to targeted ECUs
* Interact with Vehicle State Manager:

  * Inform which safety conditions that have to be applied according to Vehicle Package
  * Share the computed vehicle state to other Applications or Functional Clusters involved in the update campaign
* Interact with Human Driver about update campaign:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. 功能性 Cluster 初始化
*原文标题：Functional Cluster initialization*

V-UCM Initialization
⌈
| Description: | V-UCM shall be initialized before starting to provide any services. |
|---|---|
| Rationale: | Calling APIs from uninitialized Functional Clusters that depend on prior initialization cannot be performed properly and may lead to undefined behavior. Therefore the API is only offered after internal initialization is completed. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Startup of functional cluster |
| Supporting Material: | - |

⌋

### 13. V-UCM

V-UCM Driver Interaction
⌈
| Description: | V-UCM shall notify the driver about the intended actions of the campaign and act according to the driver's feedback. |
|---|---|
| Rationale: | In order to make sure a vehicle update is performed in a state where the vehicle can safely perform the update if required, driver interaction, acknowledgment and action are needed. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Update of safety critical application in a vehicle |
| Supporting Material: | - |

⌋

 V-UCM Interaction with UCMs
⌈
| Description: | V-UCM shall interact with all UCMs in the vehicle using platform communication services. |
|---|---|
| Rationale: | In order for V-UCM to distribute received Software Packages, it needs to discover the other UCMs that could perform any modifications within the vehicle. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Complete vehicle Electronic Control Units update |
| Supporting Material: | - |

⌋

### 14. Update coordination and safety

V-UCM Software Update Campaign Orchestration
⌈
| Description: | The V-UCM shall orchestrate an update campaign according to the Vehicle Package manifest. |
|---|---|

Additional Information:

* Vehicle package manifest: received as an input from the Backend.
* Orchestrate an update campaign: coordinate the sequence and conditions of the update campaign.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Vehicle update |
| Supporting Material: | - |

⌋

 V-UCM Cross-ECU Updates
  Upstream requirements:
⌈
| Description: | V-UCM shall coordinate the distribution and processing of Software Packagess in several ECUs. |
|---|---|
| Rationale: | There could be dependencies between Machines or ECUs that shall be resolved by a central entity in the vehicle and that require specific processing or activation ordering |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Complete vehicle Electronic Control Units update |
| Supporting Material: | - |

⌋

 V-UCM Safe Software Modification
  Upstream requirements:
⌈
| Description: | V-UCM shall ensure that it is only modifying safety-relevant Software Packages when the vehicle is in a safe state. |
|---|---|

Additional Information:

* Modify Software Packagess: updating, removing or installing.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Versions reporting

V-UCM Version Information
⌈
| Description: | The V-UCM shall provide functionality to retrieve version information describing the software installed in a complete vehicle. |
|---|---|
| Rationale: | AUTOSAR Adaptive Platform shall support keeping software up-to-date through vehicle's lifecycle. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Retrieve version information of the installed software to determine which software needs to be installed, updated or removed. |
| Supporting Material: | - |

⌋

### 16. History, progress and status

V-UCM Action History
⌈
| Description: | V-UCM shall record action history of campaigns and aggregate all UCMs' histories. |
|---|---|
| Rationale: | Keeping history can be needed for Legal reasons or to help troubleshoot failing updates. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 V-UCM Update Status Reporting
⌈
| Description: | When V-UCM is performing an update campaign, then V-UCM shall report the update campaign status to the Backend. |
|---|---|

Additional Information:

* Performing an update campaign: includes OTA update.
| Rationale: | If a vehicle update is failing, it is important to know which UCM and at what state any failure occurred. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Vehicle update |
| Supporting Material: | - |

⌋

### 17. 校验
*原文标题：Validation*

V-UCM Vehicle Packages Validation
⌈
| Description: | V-UCM shall prevent processing of compromised Vehicle Packages by verifying integrity and authenticity using strong and state of the art cryptographic techniques. |
|---|---|
| Rationale: | A Vehicle Package may be subject to attacks during an OTA transmission. Authentication and consistency check of Vehicle Package prevents any changes to the Adaptive Platform from a malicious package. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 18. Standardization of Log and Trace Messages

V-UCM Trace Points
⌈
| Description: | V-UCM shall support standardized trace points during the update campaign process. |
|---|---|
| Rationale: | Providing standardized trace points during update campaign provides information of the ongoing events during different phases of campaign like vehicle package transfer, software package transfer, package processing and campaign result. |

Applies To:
| Dependencies: | ara::log |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 19. Non-Functional 需求
*原文标题：Non-Functional Requirements*

No content.

### 20. References

### 21. 附录
*原文标题：Appendix*

### 22. 附录
*原文标题：Appendix*

No content.

### 23. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 24. Traceable item history of this document according to AUTOSAR Release R23-11

### 25. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

| Number | Heading |
|---|---|
| V-UCM shall support reporting version information of a complete vehicle |  |
| V-UCM shall record all V-UCM's action history |  |
| V-UCM shall coordinate software update in a vehicle across multiple Electronic Control Units |  |
| V-UCM shall use platform communication services for interacting with UCMs |  |
| V-UCM shall ensure it is safe to perform any modification to the vehicle |  |
| V-UCM shall interact with driver |  |
| V-UCM shall prevent processing of compromised Vehicle Packages |  |
| V-UCM shall provide an interface to read the state of an update campaign |  |
| V-UCM shall orchestrate a software update campaign according to the Vehicle Package's Manifest |  |
| V-UCM initialization |  |

### 26. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 27. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 28. Traceable item history of this document according to AUTOSAR Release R24-11

### 29. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| UCM shall support standardized trace points |  |

### 30. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 31. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 32. Traceable item history of this document according to AUTOSAR Release R25-11

### 33. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 34. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 35. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 36. Traceable item history of this document according to AUTOSAR Release R26-11

### 37. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

none

### 38. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

none

### 39. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

none
