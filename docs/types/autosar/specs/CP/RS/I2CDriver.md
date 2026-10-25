# Requirements on I2C Driver (`I2CDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 1100 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_I2CDriver_1100\AUTOSAR_CP_RS_I2CDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_I2CDriver_1100\AUTOSAR_CP_RS_I2CDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_I2CDriver_1100\zzgen\CP_RS_I2CDriver.complete.txt`

## 文档简介

This document specifies requirements on the I2C Driver module.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the I2C Driver module.

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

Functional Requirements:

* Configuration (which elements of the module need to be configurable)
* Initialization.
* Normal Operation.
* Shutdown Operation.
* Fault Operation.
* ...

Non-Functional Requirements:

* Timing Requirements.
* Resource Usage.
* Usability.
* Output for other WPs (e.g. Description Templates, Tooling, ...).
* ...

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to I2C Driver that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| Controller | A device controlling other devices (Targets). Further it initiates a transfer, generates clock signals and terminates a transfer. |

Formerly known as "Master".
| Rx | Reception (in the context of bus communication) |
|---|---|
| SCL | Serial Clock |
| SDA | Serial Data |
| Target | A device being addressed by a Controller device. |

Formerly known as "Slave".
| TX | Transmission (in the context of bus communication) |
|---|---|
| Sequence | A Sequence is a number of consecutive Jobs to transmit. |
| Job | A Job is a software exchange medium for data that are defined with the same criteria: Config. Parameters, Number of Data elements with the same size and data pointers. |
| Request Queue | A request queue queues only the tranmission request without the data itself. |
| active request | An active request is an ongoing transmission. |
| pending request | An pending request is an queued transmission request. |

### 6. 需求规范
*原文标题：Requirements Specification*

### 7. 功能概述
*原文标题：Functional Overview*

### 8. I2C 驱动, common functionality
*原文标题：I2C Driver, common functionality*

An I2C (Inter-Integrated Circuit) bus is a multi-node bus system, where the Controller initiates communication with a Target device. The I2C protocol uses a 2-wire interface for serial communication. Data transmission is facilitated through a Serial Data Line (SDA) and a Serial Clock Line (SCL).

The I2C module provides Job-based read write, and transfer access to various devices on the I2C bus. Jobs can be combined and transmitted in a sequential manner. These Sequences can potentially be sorted by priorities if implemented. They have a static configuration that specifies specific parameters.

In the I2C system, a device is typically identified by the I2C hardware unit being used and the associated device address. The module functions exclusively as an I2C Controller, controlling the data flow and addressing of devices on the bus.

### 9. Asynchronous I2C functionality

This part of the I2C Driver provides asynchronous read, write and transfer access to different devices on I2C busses and callback notifications. The access to the different I2C Sequences can be priority controlled.

### 10. Synchronous I2C functionality

This part of the I2C Driver provides synchronous read, write and transfer access to different devices on I2C busses.

### 11. 功能性需求
*原文标题：Functional Requirements*

### 12. External standard

I2C Driver Compliance with UM10204 I2C-Bus Specification
⌈
| Description: | The I2C driver shall be compliant with UM10204 I2C-bus specification and user manual Rev. 7.0 - 1 October 2021. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | https://www.nxp.com/docs/en/user-guide/UM10204.pdf |

⌋

### 13. 初始化
*原文标题：Initialization*

### 14. 配置
*原文标题：Configuration*

I2C Driver Transmission Setup
⌈
| Description: | The I2C driver shall provide a service to setup transmission relevant parameters such as buffers and the number of data elements. |
|---|---|
| Rationale: | To prepare a fault free transmission. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 15. Normal Operation

I2C Driver Data Transfer Speeds
⌈
| Description: | The I2C driver shall support the configuratiopn of the data transfer modes: |
|---|---|

* Standard-mode (Sm)
* Fast-mode (Fm)
* Fast-mode Plus (Fm+)
* High-speed mode (Hs-mode)
* Ultra Fast-mode (UFm)

Additional Information:

The configuration shall limit the data transfer modes supported by the Hardware.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 I2C Driver Multi Controller Mode
⌈
| Description: | The I2C Driver shall support the configuration of Multi Controler Mode. |
|---|---|
| Rationale: | To ensure that, if more than one controller simultaneously attempts to control the bus, only one of them is allowed to so that no message will be corrupted. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | As a clarifying example: Microcontroller A and microcontroller B want to put information on the bus at the same time. A produces a '1' and B produces a '0'. Now A stops sending due to arbitration loss and B can keep going. |
| Supporting Material: | - |

⌋

 I2C Driver 7-bit and 10-bit Bus Addressing Modes
⌈
| Description: | The I2C driver shall support both 7-bit and 10-bit bus addressing modes. |
|---|---|

Additional Information:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. References

### 17. 附录
*原文标题：Appendix*

### 18. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 19. Traceable item history of this document according to AUTOSAR Release R25-11

### 20. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 21. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 22. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 23. Traceable item history of this document according to AUTOSAR Release R24-11

### 24. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

### 25. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 26. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none
