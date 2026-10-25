# Requirements on SPI Handler/Driver (`SPIHandlerDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 077 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_SPIHandlerDriver_077\AUTOSAR_CP_RS_SPIHandlerDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_SPIHandlerDriver_077\AUTOSAR_CP_RS_SPIHandlerDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_SPIHandlerDriver_077\zzgen\CP_RS_SPIHandlerDriver.complete.txt`

## 文档简介

This document specifies requirements on the monolithic SPI Handler/Driver module including:

* Multiple SPI busses handling
* Synchronous SPI transmission
* Asynchronous SPI transmission

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on the monolithic SPI Handler/Driver module including:

* Multiple SPI busses handling
* Synchronous SPI transmission
* Asynchronous SPI transmission

### 2. Constraints

First scope for specification of requirements on basic software module is systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

### 3. Conventions to be used

### 4. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 需求结构
*原文标题：Requirements structure*

Each module specific chapter contains a short functional description of the Basic Software Module. Requirements of the same kind within each chapter are grouped under the following headlines (where applicable):

### 6. 功能性需求：
*原文标题：Functional Requirements:*

* Configuration (which elements of the module need to be configurable)
* Initialisation
* Normal Operation
* Shutdown Operation
* Fault Operation
* ...

### 7. Non-Functional 需求：
*原文标题：Non-Functional Requirements:*

* Timing Requirements
* Resource Usage
* Usability
* Output for other WPs (e.g. Description Templates, Tooling,...)
* ...

### 8. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to SPI Handler/Driver that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| CS | Chip Select |
| DIO | Digital Input Output |
| ECU | Electric Control Unit |
| DMA | Direct Memory Access |
| ICU | Input Capture Unit |
| MAL | Old name of Microcontroller Abstraction Layer (replaced by MCAL because 'MAL' is a french term meaning 'bad') |
| MCAL | MicroController Abstraction Layer |
| MCU | MicroController Unit |
| MISO | Master Input Slave Output |
| MMU | Memory Management Unit |
| MOSI | Master Output Slave Input |
| Master | A device controlling other devices (slaves, see below) |
| Slave | A device being completely controlled by a master device |
| NMI | Non Maskable Interrupt |
| OS | Operating System |
| PLL | Phase Locked Loop |
| PWM | Pulse Width Modulation |
| RX | Reception (in the context of bus communication) |
| SPAL | The name of this working group |
| SFR | Special Function Register |
| RTE | RunTime Environment |
| STD | Standard |
| REQ | Requirement |
| UNINIT | Uninitialized (= not initialized) |

As this is a document from professionals for professionals, all other terms/expressions are expected to be known.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the SPI Handler/Driver.

### 10. 功能概述
*原文标题：Functional Overview*

### 11. SPI Handler/驱动, common functionality
*原文标题：SPI Handler/Driver, common functionality*

A SPI bus is a master slave multi node bus system, the master sets a Chip Select (CS) to select a slave for data communication. The SPI (Serial Peripheral Interface) has a 4-wire synchronous serial interface. Data communication is enabled with a Chip Select wire (CS). Data is transmitted with a 3-wire interface consisting of wires for serial data input (MOSI), serial data output (MISO) and Serial ClocK (SCK).

The following SPI module provides channel based read, write and transfer access to different devices on SPI busses. A SPI channel represents data elements (8 to 16 data bits). These channels could be combined in sequence which shall not be interrupted (e.g. Daisy-Chain, EEPROM). Channels have a static configuration defining baud rate, chip select,... A SPI device is generally identified by the used SPI hardware unit and the associated chip select line. The module can operate only as SPI master.

The functional perimeter of this software module will be statically configurable to fit as far as possible to the real needs of each ECU. That means for instance synchronous, asynchronous or both SPI access could be present in the ECU.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Asynchronous SPI functionality

This part of the monolithic SPI Handler/Driver could be so-called driver and provides asynchronous read, write and transfer access to different devices on SPI busses and callback notifications. The access to the different SPI channels is priority controlled.

### 13. Synchronous SPI functionality

This part of the monolithic SPI Handler/Driver could be so-called driver and provides synchronous read and write access to different devices on SPI busses.

### 14. 功能性需求
*原文标题：Functional Requirements*

### 15. SPI Handler/驱动, common functionality
*原文标题：SPI Handler/Driver, common functionality*

### 16. 通用
*原文标题：General*

The SPI Handler/Driver shall be able to handle multiple busses of communication
⌈
| Description: | The SPI Handler/Driver shall be able to handle multiple busses of communication. Every device connected to SPI busses will be handled by channels.. |
|---|---|
| Rationale: | This will abstract the upper layers from the hardware, making reference to the information and not to the hardware. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The SPI Handler/Driver shall handle the chip select
⌈
| Description: | The SPI Handler/Driver shall handle the chip select. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The SPI Handler/Driver shall support all controller peripherals
⌈
| Description: | The SPI Handler/Driver shall support all controller peripherals, which are capable of performing the SPI functionality (data in/ data out/ clock + optional chip select signal and optional IRQn signal(s)). |
|---|---|
| Rationale: | HW encapsulation |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 配置
*原文标题：Configuration*

The SPI Handler/Driver shall allow the static configuration of all software and hardware properties related to SPI
⌈
| Description: | The SPI Handler/Driver shall allow the static configuration of all software and hardware properties related to SPI. The following list is a list of proposed properties: |
|---|---|

# assigned SPI HW Unit
# assigned chip select pin (it is possible to assign no pin)
# Chip select functionality on/off
# Chip select pin polarity high or low
# Chip select mode (normal mode or hold mode)
# Baud rate
# Timing between clock and chip select
# data width (1 up to 32 bits)
# transfer start LSB or MSB
# shift clock idle low or idle high
# data shift with leading or trailing edge
# MCU dependent properties for the channels
| Rationale: | Flexibility and Scalability |
|---|---|

Applies To:
| Dependencies: | , , |
|---|---|
| Use Case: | - |
| Supporting Material: | BMW Specification MCAL V1.0a, MAL40.1.1 |

⌋

 The SPI Handler/Driver shall allow linking consecutive SPI channels by static configuration
⌈
| Description: | The SPI Handler/Driver shall allow linking consecutive SPI channels by static configuration. |
|---|---|
| Rationale: | Allow to form streams of SPI communication. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Normal Operation

Data shall be accessible from each device individually
⌈
| Description: | The SPI Handler/Driver shall support access to transferred data (read /write) related to a certain HW device independent of the HW configuration |
|---|---|
| Rationale: | To ensure HW device abstraction, the transferred data shall be individually accessible by the corresponding HW device driver, independent of the HW configuration. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In case of daisy chained HW devices (different HW devices using same CS signal), the data related to each of the HW devices must be accessible individually. |
| Supporting Material: | - |

⌋

 Different timing and HW parameters shall be supported
⌈
| Description: | The SPI Handler/Driver shall support the configuration of the following parameters for each HW device: |
|---|---|

* Baud rate
* Chip select pin polarity high or low
* Timing between clock and chip select
* shift clock idle low or idle high
* data shift with leading or trailing edge
| Rationale: | Each connected HW device has different timing requirements |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Fault Operation

As the behaviour of the SPI bus is synchronous, no timeout detection is supported by the SPI Handler/Driver itself.

### 20. Asynchronous SPI functionality

For the asynchronous SPI Driver also the general SPI Handler/Driver requirements apply.

### 21. 配置
*原文标题：Configuration*

The SPI Handler/Driver shall allow the static configuration of the following options
⌈
| Description: | The SPI Handler/Driver shall allow the static configuration of the following options: |
|---|---|

* Buffer / FIFO usage
* MCU dependent properties for SPI HW unit
| Rationale: | Flexibility and Scalability |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Configuration of DMA buffering for SPI |
| Supporting Material: | BMW Specification MCAL V1.0a, MAL40.1.0 |

⌋

 The SPI Handler/Driver shall allow the static configuration of all software and hardware properties related to asynchronous SPI aspects
⌈
| Description: | The SPI Handler/Driver shall allow the static configuration of all software and hardware properties related to asynchronous SPI aspects. The following list is a list of proposed properties: |
|---|---|

* Priority: 4 levels
* Transmission end notification function
| Rationale: | Flexibility and Scalability |
|---|---|

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | 1: If a window watchdog and an EEPROM are connected to the SPI interface, the triggering of the watchdog shall have a higher priority than reading/writing streams from the external EEPROM. |

Other HW configurations may require different behavior and priorities.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Normal Operation

The SPI Handler/Driver shall call the statically configured notification function
⌈
| Description: | The SPI Handler/Driver shall call the statically configured notification function associated to : |
|---|---|

* A single SPI channel when its transmission has been performed,
* Linked SPI channels when their transmissions have been performed.
| Rationale: | Real time behavior, flexibility. |
|---|---|

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The SPI Handler/Driver shall provide an asynchronous read functionality
⌈
| Description: | The SPI Handler/Driver shall provide an asynchronous read functionality. This functionality shall read a data block with the passed length from the selected SPI device giving the following parameters to the driver: |
|---|---|

* Channel
* Address of data buffer where received data is written to
* Length of the data

This action shall be buffered and done when the driver is ready again.

The caller shall be informed about the end of the transaction with a notification as configured.
| Rationale: | To allow reading buffered data without blocking SPI transmissions. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Synchronous SPI functionality

For the synchronous SPI Driver also the general SPI Handler/Driver requirements apply.

### 24. Normal Operation

The SPI Handler/Driver shall provide a synchronous read functionality
⌈
| Description: | The SPI Handler/Driver shall provide a synchronous read functionality. This functionality shall allow the reading of a data block with the passed length from the selected SPI device giving the following parameters to the driver: |
|---|---|

* Channel
* Address of data buffer where received data is written to
* Length of the data

This action shall be done synchronously with the call of function.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Read data from an I/O Shift register on board device. |
| Supporting Material: | - |

⌋

 The SPI Handler/Driver shall provide a synchronous write functionality
⌈
| Description: | The SPI Handler/Driver shall provide a synchronous write functionality. This functionality shall allow the writing of a data block with the passed length to the selected SPI device giving the following parameters to the driver: |
|---|---|

* Channel
* Source address
* Length of the data

This action shall be done synchronously with the call of function.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Write data to an external EEPROM device. |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. References

### 26. 附录
*原文标题：Appendix*

### 27. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 28. Traceable item history of this document according to AUTOSAR Release R25-11

### 29. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 30. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 31. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
