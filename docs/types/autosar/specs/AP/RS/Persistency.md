# Requirements on Persistency (`Persistency`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 857 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_Persistency_857\AUTOSAR_AP_RS_Persistency.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_Persistency_857\AUTOSAR_AP_RS_Persistency.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_Persistency_857\zzgen\AP_RS_Persistency.complete.txt`

## 文档简介

This document specifies the requirements of Adaptive Applications to the functional cluster Persistency of the AUTOSAR Adaptive Platform. The motivation is to provide a standardized and portable way to store and write data persistently.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies the requirements of Adaptive Applications to the functional cluster Persistency of the AUTOSAR Adaptive Platform. The motivation is to provide a standardized and portable way to store and write data persistently.

### 2. Conventions to be Used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 需求指南
*原文标题：Requirements Guidelines*

There are no special guidelines for requirements for the functional cluster Persistency.

### 4. 定义 of Acronyms and Abbreviations
*原文标题：Definition of Acronyms and Abbreviations*

### 5. 缩略语
*原文标题：Acronyms and Abbreviations*

This document does not define any specific acronyms or abbreviations. A general list of acronyms and abbreviations is available in the AUTOSAR glossary .

### 6. 定义 of Terms
*原文标题：Definition of Terms*

This document does not define any specific definitions. A general list of definitions is available in the AUTOSAR glossary .

### 7. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the functional clusters Persistency and Remote Persistency.

The functional cluster Persistency will be referenced as "Persistency" in the remainder of this document, and the same simplification is used for the functional cluster Remote Persistency.

### 8. 持久化
*原文标题：Persistency*

### 9. 功能概述
*原文标题：Functional Overview*

The AUTOSAR Adaptive Platform Persistency provides services for Adaptive Applications and other functional clusters of the AUTOSAR Adaptive Platform. The AUTOSAR Adaptive Platform Persistency is responsible for all aspects which regard the storage/retrieval of data, and therefore it has to deal with:

* Persistently storing data over boot and ignition cycles.
* Accessing data which has been stored persistently.
* Using a unique identifier to access data.
* Reading and writing data from/to files.
* Encryption of persistent data.
* Error detection and correction of stored data.
* Monitoring storage space.

### 10. 功能性需求
*原文标题：Functional Requirements*

Persistency shall fulfill the following functional requirements.

### 11. Persistent 数据的配置
*原文标题：Configuration of Persistent Data*

Configurable Layout of Persistent Data
⌈
| Description: | Persistency shall support the configuration of the available key-value storages and file storages. |
|---|---|

Additional Information:

This configuration includes mandatory parts like the identifiers and location of the storages, and may also include optional parts like pre-configured storage elements (key-value pairs and their data types, and files) as well as redundancy, encryption, and additional information about necessary updates.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 12. Storage of Persistent 数据
*原文标题：Storage of Persistent Data*

Initialization and Shutdown
⌈
| Description: | Persistency shall support central initialization and shutdown. |
|---|---|

Additional Information:

Application developers control the life cycle of all functional clusters using a central mechanism. This mechanism helps Persistency to prepare and clean up its environment in order to ensure a reliable behavior. E.g. the available storages need to be read from the manifest before any storage can be accessed. And before shutdown, all data of Persistency needs to be persisted.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Storage of Persistent Data
⌈
| Description: | Persistency shall support persistent storage of data of an Adaptive Application or of another Functional Cluster. |
|---|---|

Additional Information:

There are different possibilities for an implementation of Persistency to store data. Persistency could use a file system, in which case it does not have full control over the actual storage on the physical device.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Secure Storage of Persistent 数据
*原文标题：Secure Storage of Persistent Data*

Encryption and Decryption
⌈
| Description: | Persistency shall support encryption and decryption of persistent data. |
|---|---|

Additional Information:

The encryption and decryption are not visible to the adaptive application or the functional cluster using Persistency.

The algorithm and key are subject to configuration.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Authentication
⌈
| Description: | Persistency shall support authentication of persistent data. |
|---|---|

Additional Information:

Persistency shall provide a standardized way to authenticate persistent data and check authenticity of persistent data using a MAC.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 14. Safe Storage of Persistent 数据
*原文标题：Safe Storage of Persistent Data*

Detection of Data Corruption
  Upstream requirements:
⌈
| Description: | Persistency shall be able to detect data corruption in persistent memory. |
|---|---|

Additional Information:

The corruption may be caused by systematic or random failures. To be able to detect corrupted data, some redundancy is needed, which can be anything from a checksum to a full copy. Additionally, an adaptive application can register for receiving information about data corruption.

The actual mechanisms used for ensuring data consistency are subject to configuration.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Recovery of Corrupted Data
  Upstream requirements:
⌈
| Description: | Persistency shall be able to recover data that was corrupted. |
|---|---|

Additional Information:

To be able to recover corrupted data, a redundant copy of the data is needed. Additionally, an adaptive application can register for receiving information about data recovery.

The actual mechanisms and the granularity of redundancy are subject to configuration.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 15. Installation, Update, Roll-back, and Clean-Up of Persistent 数据
*原文标题：Installation, Update, Roll-back, and Clean-Up of Persistent Data*

Installation
⌈
| Description: | Persistency shall support installation of persistent data. |
|---|---|

Additional Information:

Persistent storages can be installed with pre-configured values for keys in a key-value storage and pre-configured files in a file storage. The pre-configured data is provided by the manifest.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Update
⌈
| Description: | Persistency shall support updates of persistent data. |
|---|---|

Additional Information:

Persistent storages can be updated, including values in a key-value storage and files in a file storage. The update strategy and updated data is provided by the manifest.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Rollback
⌈
| Description: | Persistency shall support rollback of persistent data. |
|---|---|

Additional Information:

Persistent storages can be reset to the previous content in case an update failed. Downgrade to a previous version is not supported.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Cleanup
⌈
| Description: | Persistency shall support cleanup after an update of persistent data. |
|---|---|

Additional Information:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Resource 处理 for Persistent 数据
*原文标题：Resource handling for Persistent Data*

Storage Quota
⌈
| Description: | Persistency shall be able to limit the amount of storage used by persistent data. |
|---|---|

Additional Information:

The storage space allocated by persistent data is monitored continuously, similar to a file system quota.
| Rationale: | Reliable access to data storages. |
|---|---|

Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Storage Size
⌈
| Description: | Persistency shall be able to report the amount of currently used storage. |
|---|---|

Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 17. Non-Functional 需求
*原文标题：Non-Functional Requirements*

Persistency currently does not have any non-functional requirements.

### 18. Remote 持久化
*原文标题：Remote Persistency*

### 19. 功能概述
*原文标题：Functional Overview*

The Remote Persistency provides global storage services for Adaptive Applications of the AUTOSAR Adaptive Platform via service interfaces. It is responsible for the following functionality:

* Accessing data items from different Adaptive Applications.
* Storing data items over boot and ignition cycles.
* Updating data items via UCM or service interfaces.
* Accessing information about stored data items.

### 20. 功能性需求
*原文标题：Functional Requirements*

Remote Persistency shall fulfill the following functional requirements. Please note that the functionality of Remote Persistency is based on the functional clusters Communication Management and Persistency, and the following requirements therefore assume the availability of the functionality of these two functional clusters.

### 21. Remote 数据 Items的配置
*原文标题：Configuration of Remote Data Items*

Configurable Layout of Remote Data Items
⌈
| Description: | Remote Persistency shall support the configuration of a set of remote data items and corresponding storages. |
|---|---|

Additional Information:

This configuration includes service interfaces to access the storages from applications, and Persistency interfaces for the underlying key-value storages with pre-defined key-value pairs.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

### 22. Storage of Remote 数据 Items
*原文标题：Storage of Remote Data Items*

Initialization and Shutdown
⌈
| Description: | Remote Persistency shall support initialization and shutdown. |
|---|---|

Additional Information:

As a daemon, Remote Persistency is started and stopped according to the configuration of run levels by the Execution Management. This mechanism helps Remote Persistency to prepare and clean up its environment in order to ensure a reliable behavior. E.g. the available storages need to be opened before they are accessed via the service interface. And before shutdown, all data of Remote Persistency needs to be persisted.
Rationale:
Applies To:
Dependencies:
Use Case:
Supporting Material:
⌋

 Access to Persisted Remote Data Items
⌈
| Description: | Remote Persistency shall support central persistent storage of data items of Adaptive Applications. |
|---|---|

Additional Information:

Remote Persistency links service interfaces for access to remote data items to a storage based on the Key-Value Storage of Persistency.
| Rationale: | Applications need to access and share data items that are updated independently and stored persistently. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Non-Functional 需求
*原文标题：Non-Functional Requirements*

The Remote Persistency currently does not have any non-functional requirements.

### 24. 需求追踪
*原文标题：Requirements Tracing*

The following table references the requirements specified in the , and links to the fulfillments of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| AUTOSAR shall provide mechanisms to prevent unintended alteration of data. |  |  |
| AUTOSAR shall support data recovery mechanisms. |  |  |

### 25. References

### 26. 附录
*原文标题：Appendix*

### 27. History of 需求
*原文标题：History of Requirements*

Please note that the lists in this chapter also include requirements that have been removed from the specification in a later version. These requirements do not appear as hyperlinks in the document.

### 28. Requirement History of this Document According to AUTOSAR Release R26-11

### 29. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

none

### 30. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

none

### 31. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

none

### 32. Requirement History of this Document According to AUTOSAR Release R25-11

### 33. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

### 34. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 35. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 36. Requirement History of this Document According to AUTOSAR Release R24-11

### 37. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 38. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 39. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 40. Requirement History of this Document According to AUTOSAR Release R23-11

### 41. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

### 42. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

### 43. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 44. Requirement History of this Document According to AUTOSAR Release R22-11

### 45. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

### 46. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

none

### 47. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 48. Requirement History of this Document According to AUTOSAR Release R21-11

### 49. Added 需求 in R21-11
*原文标题：Added Requirements in R21-11*

### 50. Changed 需求 in R21-11
*原文标题：Changed Requirements in R21-11*

### 51. Deleted 需求 in R21-11
*原文标题：Deleted Requirements in R21-11*

### 52. Requirement History of this Document According to AUTOSAR Release R20-11

### 53. Added 需求 in R20-11
*原文标题：Added Requirements in R20-11*

none

### 54. Changed 需求 in R20-11
*原文标题：Changed Requirements in R20-11*

### 55. Deleted 需求 in R20-11
*原文标题：Deleted Requirements in R20-11*

none

### 56. Requirement History of this Document According to AUTOSAR Release R19-11

### 57. Added 需求 in R19-11
*原文标题：Added Requirements in R19-11*

### 58. Changed 需求 in R19-11
*原文标题：Changed Requirements in R19-11*

none

### 59. Deleted 需求 in R19-11
*原文标题：Deleted Requirements in R19-11*

none

### 60. Requirement History of this Document According to AUTOSAR Release 19-03

### 61. Added 需求 in 19-03
*原文标题：Added Requirements in 19-03*

none

### 62. Changed 需求 in 19-03
*原文标题：Changed Requirements in 19-03*

### 63. Deleted 需求 in 19-03
*原文标题：Deleted Requirements in 19-03*

### 64. Requirement History of this Document According to AUTOSAR Release 18-10

### 65. Added 需求 in 18-10
*原文标题：Added Requirements in 18-10*

### 66. Changed 需求 in 18-10
*原文标题：Changed Requirements in 18-10*

none

### 67. Deleted 需求 in 18-10
*原文标题：Deleted Requirements in 18-10*

none

### 68. Requirement History of this Document According to AUTOSAR Release 18-03

### 69. Added 需求 in 18-03
*原文标题：Added Requirements in 18-03*

### 70. Changed 需求 in 18-03
*原文标题：Changed Requirements in 18-03*

### 71. Deleted 需求 in 18-03
*原文标题：Deleted Requirements in 18-03*

### 72. Requirement History of this Document According to AUTOSAR Release 17-10

### 73. Added 需求 in 17-10
*原文标题：Added Requirements in 17-10*

### 74. Changed 需求 in 17-10
*原文标题：Changed Requirements in 17-10*

### 75. Deleted 需求 in 17-10
*原文标题：Deleted Requirements in 17-10*

none

### 76. Requirement History of this Document According to AUTOSAR Release 17-03

### 77. Added 需求 in 17-03
*原文标题：Added Requirements in 17-03*

### 78. Changed 需求 in 17-03
*原文标题：Changed Requirements in 17-03*

none

### 79. Deleted 需求 in 17-03
*原文标题：Deleted Requirements in 17-03*

none

### 80. 不适用需求
*原文标题：Not Applicable Requirements*

Upstream requirements: , , ,
⌈
These requirements are not applicable to this specification.
⌋
