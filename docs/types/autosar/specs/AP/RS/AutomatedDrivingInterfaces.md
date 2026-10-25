# Requirements on Automated Driving Interfaces (`AutomatedDrivingInterfaces`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 911 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_AutomatedDrivingInterfaces_911\AUTOSAR_AP_RS_AutomatedDrivingInterfaces.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_AutomatedDrivingInterfaces_911\AUTOSAR_AP_RS_AutomatedDrivingInterfaces.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_AutomatedDrivingInterfaces_911\zzgen\AP_RS_AutomatedDrivingInterfaces.complete.txt`

## 文档简介

This document specifies requirements of the AUTOSAR Adaptive Platform on the Sensor Interface. The motivation of Sensor interfaces is to specify the service interfaces based on the defintion in the ISO 23150 .

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements of the AUTOSAR Adaptive Platform on the Sensor Interface. The motivation of Sensor interfaces is to specify the service interfaces based on the defintion in the ISO 23150 .

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| AD | Automated Driving |
| ADI | Automated Driving Interfaces |
| AEB | Autonomous Emergency Braking |
| HiL | Hardware in the Loop |
| ISO | International Organization for Standardization |
| LIDAR | LIght Detection And Ranging |
| MiL | Model in the Loop |
| OEM | Original Equipment Manufacturer |
| OSI | Open Simulation Interface |
| RADAR | RAdio Detection And Ranging |
| SAE | Society of Automotive Engineers |
| USS | UltraSonic Sensor |
| XiL | ... in the Loop |

| Terms: | Description: |
|---|---|
| V2X | Vehicle-to-X-Communication is the generic term for various communication technologies in automotive, including vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication. The information is either transmitted directly between vehicles, between vehicle and roadside infrastructure or by using existing mobile networks. |

The acronyms/abbreviations and terms not provided in tables above are included in the AUTOSAR Glossary .

### 4. 约束与假设
*原文标题：Constraints and assumptions*

No content.

### 5. 功能概述
*原文标题：Functional Overview*

A key point to meet the challenges of developing automated driving functions, especially SAE J3016 automation level 3-5, is standardization: There is a huge potential in reducing development and validation costs by standardizing subsections of the complex hardware and software setup for automated driving functions. Sensors for detecting the vehicle environment and its connected environmental models are considered major enablers for automated driving. The current focus is on the standardization of sensor interfaces that serve as an input to environmental models or data fusion algorithms which in turn serve as the input for automated driving functions equal or greater than SAE level 3. Specifically, the focus is on interfaces for on-board sensors that can independently perceive their environment for performing safety critical tasks, e.g. camera, radar, lidar and ultrasonic sensors. This includes the actual measurement data as well as dynamically changing sensor performance values such as the currently estimated detection range. Other information sources like V2X and maps are considered as potential extensions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 需求规范
*原文标题：Requirements Specification*

### 7. Sensor 类型
*原文标题：Sensor Types*

The ADI shall support the camera sensor technology for on-board sensors
  Status: DRAFT
⌈
| Description: | The automated driving interface shall support the camera sensor types defined by ISO-23150 in the domain of automated driving. |
|---|---|
| Rationale: | Camera sensor technology is used for most automated driving functions and fusion algorithm development based on Adaptive Platform shall be supported with a standardized interface to different camera types. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Access camera sensor signals using the ADI for e.g. automated emergency brake. |
| Supporting Material: | ISO-23150 |

⌋

 The ADI shall support the lidar sensor technology for on-board sensors
  Status: DRAFT
⌈
| Description: | The automated driving interface shall support the lidar sensor types defined by ISO-23150 in the domain of automated driving. |
|---|---|
| Rationale: | Lidar sensor technology is used for automated driving functions and fusion algorithm development based on Adaptive Platform shall be supported with a standardized interface to different lidar types. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Access lidar sensor signals using the ADI for e.g. creation of environmental maps. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Sensor 接口
*原文标题：Sensor Interface*

The ADI shall provide interfaces which enable exchangeability of service compatible AUTOSAR Adaptive applications without changing the rest of the system.
  Status: DRAFT
⌈
| Description: | Exchange of sensors as well as updating of data fusion application should be possible without adapting the application binaries on the respective target. Binaries include compiled code, but not calibration data, e.g. opening angle, range min/max. All these criteria as described above are supported by the AUTOSAR services concept. |
|---|---|
| Rationale: | Rationale should be based on stakeholder view: Supplier: does not want to have engineering efforts on his side while supplying a sensor to an OEM. OEM: Does not want to have migration / interoperability efforts when switching sensors. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Exchange of a sensor by another sensor with the same capabilities or specification. Replacement of data fusion or sensor application by new version (e.g. by over-the-air update). |
| Supporting Material: | ISO-23150 |

⌋

 The ADI shall enable use cases with different resource limitations.
  Status: DRAFT
⌈
| Description: | The ADI shall respect resource limits (e.g. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Replay of recorded sensor 数据
*原文标题：Replay of recorded sensor data*

A network of AUTOSAR Adaptive applications using the sensor interfaces should be able to run with replayed recorded sensor data.
  Status: DRAFT
⌈
| Description: | For validation and debugging purposes a network of applications shall be stimulated with recorded sensor data and the same sensor configuration. The output is the result of a computation chain of the connected applications. For validation and debugging purposes the recorded data should be self-consistent. |
|---|---|
| Rationale: | An application using the sensor interfaces should be able to support recorded sensor data with the same ADI configuration (interfaces, repetition rate etc.) as used for recording. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Validation of data fusion applications. |
| Supporting Material: | ISO-23150 |

⌋

 A network of applications using the sensor interfaces should be able to support recorded sensor data from any arbitrary time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. References

### 11. 附录
*原文标题：Appendix*

### 12. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 13. Traceable item history of this document according to AUTOSAR Release R25-11

### 14. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 15. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 16. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 17. Traceable item history of this document according to AUTOSAR Release R24-11

### 18. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 19. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 20. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 21. Traceable item history of this document according to AUTOSAR Release R23-11

### 22. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 23. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 24. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 25. Traceable item history of this document according to AUTOSAR Release R22-11

### 26. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

none

### 27. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| The ADI shall support the camera sensor technology for on-board sensors |  |
| The ADI shall support the lidar sensor technology for on-board sensors |  |
| The ADI shall support the radar sensor technology for on-board sensors |  |
| The ADI shall support the ultrasonic sensor technology for on-board sensors |  |
| The ADI shall support the ISO-23150 interfaces and ISO-23150 interface signals |  |
| The ADI shall interpret the ISO-23150 compliant to AUTOSAR |  |
| The ADI shall be aligned with the semantics of the corresponding elements in the ISO-23150 . |  |

### 28. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none
