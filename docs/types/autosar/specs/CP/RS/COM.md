# Requirements on Communication (`COM`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 002 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_COM_002\AUTOSAR_CP_RS_COM.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_COM_002\AUTOSAR_CP_RS_COM.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_COM_002\zzgen\CP_RS_COM.complete.txt`

## 文档简介

The following specification is to define the functional and non-functional requirements on the module AUTOSAR COM.

This Software Requirement Specification (SRS) of AUTOSAR COM is based on the  and only defines add-ons to this ISO specification or different behavior.

The location of the AUTOSAR COM module within the whole AUTOSAR ECU SW Architecture is defined in .

The focus of this document is to specify:

* the behavior of the AUTOSAR COM
* the interfaces of the AUTOSAR COM
* the input of the generator and its configuration input
* the rules to check the consistency of the configuration input

The focus is NOT to specify:

* The editor and the rule checker for the input of the AUTOSAR COM module implementation. However the rule checker must use the rules for the configuration in/out defined by .

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

The following specification is to define the functional and non-functional requirements on the module AUTOSAR COM.

This Software Requirement Specification (SRS) of AUTOSAR COM is based on the  and only defines add-ons to this ISO specification or different behavior.

The location of the AUTOSAR COM module within the whole AUTOSAR ECU SW Architecture is defined in .

The focus of this document is to specify:

* the behavior of the AUTOSAR COM
* the interfaces of the AUTOSAR COM
* the input of the generator and its configuration input
* the rules to check the consistency of the configuration input

The focus is NOT to specify:

* The editor and the rule checker for the input of the AUTOSAR COM module implementation. However the rule checker must use the rules for the configuration in/out defined by .

### 2. Constraints

First scope for specification of requirements on basic software modules is systems which are not safety relevant. For this reason safety requirements are assigned to medium priority.

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

### 5. Requirement 结构
*原文标题：Requirement structure*

The requirement structure is defined in `TPS_STDT_00077`.

### 6. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to SRS COM that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| I-PDU | Interaction Layer Protocol Data Unit (assembled and disassembled in AUTOSAR COM), consists of one or more signals (see below and ). |
| I-PDU group | An I-PDU Group is an arbitrary collection of I-PDUs of the same direction (i.e. send or receive) in COM |
| LOM | Listen Only Mode |
| L-PDU | Data Link Layer Protocol Data Unit (assembled and disassembled in AUTOSAR Hardware Abstraction layer, see ). |
| signal | A signal in the AUTOSAR COM context is equal to a message in . |

An AUTOSAR signal is carried by one or more signals in COM. The transformation from an AUTOSAR signal to a signal in COM is carried out by the RTE. Typically the transformation preserves the syntax of the data. However, in the case of complex data types the transformation may change the syntax of the signal. Therefore a signal in AUTOSAR COM is not always the same as an AUTOSAR signal.
| signal group | A signal group refers to a set of signals that must always be kept together in a common I-PDU. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the AUTOSAR COM.

### 8. 功能概述
*原文标题：Functional Overview*

The AUTOSAR COM is located between RTE and the PDU Router.

Main-Features of AUTOSAR COM are:

* provision of signal oriented data interface for its users (e.g. RTE , SwCluCComProxy )
* communication transmission control (start/stop of I-PDU groups)
* sending of signals according to transmission type as specified in the VFB specification
* guarantee of minimum distances between transmission requests
* monitoring of receive signals (signals timeout)
* monitoring of transmit confirmations
* filter mechanisms for incoming signals
* different notification mechanisms
* provision of initialization-values and update-Indications
* endianness conversion + sign extension
* packing and unpacking of AUTOSAR signals to I-PDUs to be transmitted
* supporting large and dynamical length data types

### 9. 功能性需求
*原文标题：Functional Requirements*

### 10. 配置
*原文标题：Configuration*

The chapter Configuration deals with the configurable parameters / functionalities of the AUTOSAR COM.

This chapter deals only with general configuration requirements, the requirements for configuration of a single feature are defined within the requirement of the feature itself.

 AUTOSAR COM shall be configured by using XML as configuration language
⌈
| Description: | AUTOSAR COM shall be configured by using XML as configuration language as defined by ECU Configuration Template. |
|---|---|

It is up to the  to define the configuration parameters.
| Rationale: | Having a unique configuration language within AUTOSAR. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Configuration of AUTOSAR COM |
| Supporting Material: |  |

⌋

 AUTOSAR COM shall support multiple configuration stages
⌈
| Description: | AUTOSAR COM shall allow the configuration of communication at the following different stages: |
|---|---|

* Pre-Compile-Time
* Link Time
* Post-build-Time

  * Load-able Configuration
  * Multiple configuration sets

The configuration parameters must be organized in a way to be able to be changed in all the different stages, e.g. one OEM might select to configure pre-compile time while another will configure post-build time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 接口 between AUTOSAR COM and the 下层 layer (PDU-Router)
*原文标题：Interface between AUTOSAR COM and the lower layer (PDU-Router)*

leaves the interface between COM and the lower layers undefined. In AUTOSAR the only lower layer that COM interfaces to is the PDU Router. The interfaces refer to the definitions in . The requirements are derived from .

 AUTOSAR COM shall provide a receive indication function
⌈
| Description: | AUTOSAR COM shall provide a function that is called by the lower layer (PDU-Router) after an I-PDU has been received. |
|---|---|

The name of the function has to be `Com_RxIndication`.
| Rationale: | Basic functionality of a communication layer |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Receiving a PDU by the lower layer |
| Supporting Material: |  |

⌋

 AUTOSAR COM shall provide a transmit confirmation function
⌈
| Description: | AUTOSAR COM shall provide a function that is called by the lower layer (PDU-Router) after an I-PDU has been transmitted on the network. |
|---|---|

The name of the function has to be `Com_TxConfirmation`.
| Rationale: | Basic functionality of a communication layer |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Transmitting a PDU on the network. |
| Supporting Material: |  |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. CP 软件 Clusters
*原文标题：CP Software Clusters*

AUTOSAR COM shall support independent development of CP Software Clusters
⌈
| Description: | The AUTOSAR COM module supports independent and flexible implementation of CP Software Clusters. So it shall be possible to add/remove/change Signals without the need to rebuild the Software Cluster(s) in which they are used. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Change of Ids w.r.t Com(Signal)Groups in Host Software Clusters without rebuild of the Application Software Cluster. |
| Supporting Material: | - |

⌋

### 13. 通用需求
*原文标题：General Requirements*

AUTOSAR COM module shall be based on the functionality and APIs of ISO-17356-4
⌈
| Description: | The AUTOSAR COM module shall be based on the functionality and APIs specified in . Specifications not done there, respectively specifications of functionality different from that specified in the above mentioned document shall be defined in the AUTOSAR COM SRS and SWS specifications. |
|---|---|

Features of  which are not provided by the AUTOSAR COM module shall be defined in .
| Rationale: | This SRS is only an add-on to  as an existing standard. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | , |

⌋

 The AUTOSAR COM module shall support endianness conversion
⌈
| Description: | The AUTOSAR COM module shall support endianness conversion for the following data types: |
|---|---|

* uint16
* uint32
* uint64
* sint16
* sint32
* sint64
* float32
* float64
| Rationale: | ensure end to end data consistency |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | , |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 初始化
*原文标题：Initialization*

The AUTOSAR COM module shall fill unused areas/ bits within an I-PDU with a configurable value
⌈
| Description: | The AUTOSAR COM module shall fill unused areas/ bits within an I-PDU with a configurable value (e.g. 0xFF). |
|---|---|

This value shall be configurable per I-PDU.
| Rationale: | Limit impact of a wrong configuration, if a not used area of an I-PDU is wrongly assigned to a signal this can be detected by the application SW component. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | For error detection purposes, all data values must be filled with a defined value. |
| Supporting Material: | - |

⌋

### 15. Signal and I-PDU Transmission

This chapter deals with the add-ons to  related to signal and I-PDU transmission.

 The AUTOSAR COM module shall support multiple transmission modes
⌈
| Description: | The AUTOSAR COM module shall provide the transmission modes given in the following tabular for each I-PDU. It shows the transmission modes available and a short description of those transmission modes. |
|---|---|

* Periodic: Transmissions occur indefinitely with a fixed period between them.
* Direct / n-times: Event driven transmission with n-1 repetitions
* Mixed: Periodic transmission with direct/n-times transmissions in between
* None: No transmission
| Rationale: | These modes are commonly used by all existing automotive bus systems. |
|---|---|

Applies To:
| Dependencies: | , , |
|---|---|
| Use Case: | - |
| Supporting Material: | Transmission modes "periodic", "mixed" are the same as already defined in . See also Use Cases in . |

⌋

 The AUTOSAR COM module shall support defining two different transmission modes for each I-PDU
⌈
| Description: | The AUTOSAR COM module shall provide the possibility to define two different transmission modes for each I-PDU. This shall also include the situation where only the parameters of a transmission mode are changed, e.g. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Signal invalidation

The AUTOSAR COM module shall support invalidation of signals at sender side
⌈
| Description: | It shall be possible for the Com Users (RTE, SwCluCComProxy) on sender side to indicate that they are not able to provide a valid value (e.g. sensor is faulty). |
|---|---|

This shall be done by writing a per signal configurable invalid value (outside of the range of the valid values) into the I-PDU which is handled like a valid value in the further processing.

Therefore a special API shall be provided on the sender side AUTOSAR COM module.
| Rationale: | The AUTOSAR Software Component shall have (via the RTE and / or SwCluCComProxy) the opportunity to notify its environment about reduced functionality (e.g. sensor is faulty). |
|---|---|

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | See rationale, |

Starting a fail-safe routine if a sensor is broken.
| Supporting Material: | - |
|---|---|

⌋

 The AUTOSAR COM module shall support an optional notification when receiving invalidated data
⌈
| Description: | Receiver-side the AUTOSAR COM module shall provide two (configurable) options if a sender indicates that it is not able to provide a valid value |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. I-PDU Groups and 模式 Changes
*原文标题：I-PDU Groups and Mode Changes*

This chapter collects the requirements for the definition and starting / stopping of I-PDU groups.

 The AUTOSAR COM module shall define a data-structure allowing efficiently starting and stopping of I-PDU groups
⌈
| Description: | The AUTOSAR COM module shall define a data-structure that allows efficiently |
|---|---|

* starting and stopping of transmission and reception of multiple I-PDU groups
* enabling or disabling the reception deadline monitoring of multiple I-PDU groups

The maximum number of I-PDU groups within one ECU shall be compile time configurable.

Conceptually and per configuration it shall be allowed that one I-PDU group contains arbitrary other I-PDU groups containing I-PDUs of the same direction (i.e. send or receive).
| Rationale: | To allow efficient mode changes, especially with respect to the AMM/ VMM concept, it is required to change the state of multiple I-PDU groups within one function call to the AUTOSAR COM module. |
|---|---|

The arbitrary nesting of I-PDU groups is no problem, since this can be resolved by the configuration tool, thus that each I-PDU only has to store an I-PDU group vector that declares to which I-PDU group it belongs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Packing signals into I-PDUs

The AUTOSAR module shall handle complex data types as a consistent set of data
⌈
| Description: | It is required by AUTOSAR to handle complex data types as a consistent set of data. Therefore, it is necessary to pass the data elements from the RTE to the AUTOSAR COM module consistently. |
|---|---|
| Rationale: | AUTOSAR provides complex data types; those have to be sent and received atomically via RTE, COM, etc. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Complex AUTOSAR data types, data consistency of signal groups. |
| Supporting Material: | For guarantee data consistency of complex AUTOSAR data types, signal groups are introduced. For definition of signal group see . |

⌋

 AUTOSAR COM shall provide a uint8-array based API for signal groups
⌈
| Description: | AUTOSAR COM shall provide an API to pass the serialized uint8-array representation of a signal group to COM. |
|---|---|
| Rationale: | The AUTOSAR transformer chain provides means to serialize composite data into a uint8-array representation. This serialized uint8-array shall be passed as one entity to COM. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Large 数据类型的支持
*原文标题：Support of Large Data Types*

The AUTOSAR COM module shall support signals larger than the N-PDUs of the underlying busses. For these large signals also a dynamic length shall be supported. The requirements of this chapter define the support of these data types.

 AUTOSAR COM shall not support splitting of large signals into different I-PDUs
⌈
| Description: | Large signals supported by AUTOSAR COM shall never be split into different I-PDUs, but it shall be supported that an I-PDU can be split into different N-PDUs |
|---|---|
| Rationale: | The I-PDU shall be transported by the TP. The TP will work on N-PDU level, and therefore can fragment the I-DPU into a number of N-PDUs |

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | There is no use-case to have fragmentation on I-PDU level. |
| Supporting Material: | - |

⌋

 Dynamic length signals must be of type UINT8n
⌈
| Description: | AUTOSAR COM shall only support dynamic length signals of type UINT8. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Signal status information

The AUTOSAR COM module shall support to detect if a received signal or signal group was updated by the sender
⌈
| Description: | It shall be possible for the receiver to identify and indicate to the upper layer if a signal/ signal group has been updated by the sender. Whether this feature is provided shall be configurable per signal. |
|---|---|
| Rationale: | When multiple signals /signal groups are placed in the same I-PDU, and that I-PDU is sent more frequently than a signal/ signal group is update, the update bit provides a mechanism to detect only those signals/ signal groups that have changed values. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | Implementation proposal: An update bit is optionally attached to a signal/ signal group and can only be attached at configuration time. |

When COM is started all update bits in all I-PDUs are cleared.

In the sending ECU, when a signal/signal group is sent by the application, the update bit is set automatically by COM as part of the SendMessage() call.

In the sending ECU, once the call to the lower layers to transmit the ECU has completed, all update bits in the recently sent I-PDU are cleared.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Large 数据 Path的支持
*原文标题：Support of Large Data Path*

Support of Large Data Path
⌈
| Description: | In addition to basic functionality, AUTOSAR COM module shall provide an alternative Interaction Layer Mechanism. Large Data Path shall provide support of a reduced set of features targeting communication of large and dynamic data in a mainly event oriented way. |
|---|---|
| Rationale: | Efficiently support large and dynamic data. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Communication of data produced by serializers/transformers like for example Some/IP. |
| Supporting Material: | - |

⌋

 Large Data Path shall support Transport Protocol-like communication
⌈
| Description: | Large Data Path shall support reception/transmission via TP-APIs. |
|---|---|
| Rationale: | Support of communication via transport protocols. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Efficient communication via e.g. FrTp. Efficient communication of very large data not fitting in an Ethernet frame using TCP. |
| Supporting Material: | - |

⌋

 Large Data Path shall support Interface-like communication
⌈
| Description: | Large Data Path shall support reception/transmission via If-APIs. |
|---|---|
| Rationale: | Support of communication without transport protocols. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

None.

### 23. References

### 24. 附录
*原文标题：Appendix*

### 25. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyper-links in the document.

### 26. Traceable item history of this document according to AUTOSAR Release R24-11

### 27. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 28. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 29. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 30. Traceable item history of this document according to AUTOSAR Release R25-11

### 31. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| The AUTOSAR COM module shall report timeout errors to DEM |  |

### 32. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| AUTOSAR COM shall support multiple configuration stages |  |
| AUTOSAR COM shall be configured by using XML as configuration language |  |
| AUTOSAR COM shall provide a receive indication function |  |
| AUTOSAR COM shall provide a transmit confirmation function |  |
| AUTOSAR COM shall provide a function to request the transmit buffer data for lower layer triggered transmission |  |
| The AUTOSAR COM module shall support endianness conversion |  |
| AUTOSAR COM shall not support splitting of large signals into different I-PDUs |  |
| Dynamic length signals must be of type UINT8n |  |
| AUTOSAR COM shall use the TP to fragment and reassemble large signals |  |
| Support of Large Data Path |  |
| Large Data Path shall support Transport Protocol-like communication |  |
| Large Data Path shall support Interface-like communication |  |
| Large Data Path shall support Transmission Triggered by lower layer |  |
| AUTOSAR COM shall support independent development of CP Software Clusters |  |

### 33. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
