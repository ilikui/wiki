# Requirements on Software Cluster Connection module (`SoftwareClusterConnection`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 973 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_SoftwareClusterConnection_973\AUTOSAR_CP_RS_SoftwareClusterConnection.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_SoftwareClusterConnection_973\AUTOSAR_CP_RS_SoftwareClusterConnection.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_SoftwareClusterConnection_973\zzgen\CP_RS_SoftwareClusterConnection.complete.txt`

## 文档简介

The goal of AUTOSAR and of this document is to define the requirements on the software clusters connection in the Classic Platform.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

The goal of AUTOSAR and of this document is to define the requirements on the software clusters connection in the Classic Platform.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

As described in section  the Software Cluster Connection has several logical sub-units which is expressed by the different nouns in the requirements.

* Binary Manifest
* Cross Cluster Communication
* Proxy Module

  * High Proxy Module
  * Low Proxy Module

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to Requirements on Software Cluster Connection that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| SwCluC | Software Cluster Connection |

| Terms: | Description: |
|---|---|
| Communication Graph | The sum of all AbstractAccessPoints to elements of PortInterfaces, instantiated in PortPrototypes which are connected to each other; or the sum of all accesses from BswModuleEntitys to interface elements in a BswModuleDescriptions connected to each other. |
| binary-identical | Bit for Bit identical |
| Binary Object | A set of files which contains the binary executable code and data. This binary executable code and data will not be modified again before programming it on the target ECU. |
| Software Cluster | A Software Cluster groups all AUTOSAR artifacts that are relevant to deploy software on a machine. The full definition is given in document |
| Binary Manifest | The Binary Manifest is the well-defined interface of the Software Cluster's Binary Object providing the meta information of a resources and information - so called handles - to access such a resource. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Software Cluster Connection.

### 7. 功能概述
*原文标题：Functional Overview*

The overall software of a Classic Platform Architecture can be split into Software Clusters. Each Software Cluster is an independent Build Unit and the result of the cluster specific build processes are the Binary Objects. The Software Cluster Connection provides the ability to

* connect the Binary Objects deployed on the same machine
* substitute not locally available BSW modules in an Application Software Cluster, which interfaces are required for the integrated SW, by so called Proxy Modules.
* implement the VFB communication features between Software Clusters together with RTE with the means of an RTE Implementation Plug-In

### 8. 功能性需求
*原文标题：Functional Requirements*

### 9. 需求 on Binary 清单
*原文标题：Requirements on Binary Manifest*

This section contains the requirements on the Binary Manifest enabling the connection of software clusters on the basis of Binary Objects.

 Easy target machine interpretation
⌈
| Description: | The Binary Manifest of the Software Cluster Connection shall be interpretable on the target machine with low resource consumption (ROM, RAM, runtime) |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Connect Binary Objects after reprogramming of a single Software Cluster on the target machine, which is a micro controller with limited resources. |
| Supporting Material: | - |

⌋

 Standardized persistence in memory
⌈
| Description: | The Binary Manifest of the Software Cluster Connection shall have a standardized persistence in memory. |
|---|---|
| Rationale: | Support utilization of Software Cluster Connector tools and implementations from different vendors. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 需求 on Cross 软件 Cluster Communication
*原文标题：Requirements on Cross Software Cluster Communication*

This section contains the requirements on the Cross Software Cluster Communication enabling the VFB communication between Software Clusters.

 Cross Software Cluster Communication Plug-Ins
⌈
| Description: | The Cross Software Cluster Communication of the Software Cluster Connection shall implement the APIs and functionality of a Cross Software Cluster Communication Plug-In |
|---|---|
| Rationale: | The cross cluster communication is implemented by another vendor than the RTE |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 '1:n' Sender-receiver communication
⌈
| Description: | The Cross Software Cluster Communication of the Software Cluster Connection shall support '1:n' sender-receiver communication. |
|---|---|
| Rationale: | VFB Specification requires support for single-sender-multiple-receiver ('1:n') |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 'n:1' Sender-receiver communication
⌈
| Description: | The Cross Software Cluster Communication of the Software Cluster Connection shall support 'n:1' sender-receiver communication. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 需求 on Proxy 模块
*原文标题：Requirements on Proxy Modules*

This section contains the requirements on the Proxy Modules enabling the substitution of BSW modules in Application Software Clusters and the connection to the real BSW module in the Host Software Cluster.

 Standardized AUTOSAR Interfaces for software components
⌈
| Description: | The High Proxy Module of the Software Cluster Connection shall implement the Standardized AUTOSAR Interfaces of the according AUTOSAR Service substituted by the proxy. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Provide Standardized AUTOSAR Interfaces for software components |
| Supporting Material: | - |

⌋

 Standardized Interfaces for local BSW modules
⌈
| Description: | The High Proxy Module of the Software Cluster Connection shall implement the Standardized Interfaces of the BSW module substituted by the proxy which are relevant for modules in higher layers or same layer. Interfaces for initialization and de-initialization are excluded since those can be implemented for the Software Cluster Connection commonly. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | Provide Standardized Interfaces for a subset of local BSW modules in a software cluster |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 需求 on 工作流集成
*原文标题：Requirements on workflow integration*

A2L Generation Support
⌈
| Description: | The Software Cluster Connection shall support the generation of output information in order to support the later generation of a complete A2L file. |
|---|---|
| Rationale: | In case Software Cluster Connection is allocating the variables which shall be measurable or constants which shall be calibratable, the information about the allocated variables/constants shall be exported for further usage by subsequent tools. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Make default values calibratable via measurement tools. |
| Supporting Material: | - |

⌋

### 13. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

No content.

### 14. References

### 15. 附录
*原文标题：Appendix*

### 16. Change history of AUTOSAR traceable items

Please note that the document was intialy created in R20-11.

### 17. Traceable item history of this document according to AUTOSAR Release R21-11

### 18. Traceable item history of this document according to AUTOSAR Release R22-11

### 19. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

### 20. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

### 21. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

none

### 22. Added Constraints in R22-11

none

### 23. Changed Constraints in R22-11

none

### 24. Deleted Constraints in R22-11

none

### 25. Traceable item history of this document according to AUTOSAR Release R23-11

### 26. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

### 27. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

### 28. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 29. Traceable item history of this document according to AUTOSAR Release R24-11

### 30. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 31. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 32. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 33. Traceable item history of this document according to AUTOSAR Release R25-11

### 34. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 35. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 36. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*
