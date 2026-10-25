# Requirements on MACsec (`MACsec`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 1065 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_RS_MACsec_1065\AUTOSAR_FO_RS_MACsec.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_RS_MACsec_1065\AUTOSAR_FO_RS_MACsec.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_RS_MACsec_1065\zzgen\FO_RS_MACsec.complete.txt`

## 文档简介

This document specifies requirements on MACsec protocols in the AUTOSAR Foundation. The motivation is to specify the usage of:

* IEEE 802.1AE (also known as MACsec) protocol.
* MACsec Key Agreement protocol (standardized in IEEE 802.1X).

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies requirements on MACsec protocols in the AUTOSAR Foundation. The motivation is to specify the usage of:

* IEEE 802.1AE (also known as MACsec) protocol.
* MACsec Key Agreement protocol (standardized in IEEE 802.1X).

### 2. Conventions to be used

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 需求指南
*原文标题：Requirements Guidelines*

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

The glossary below includes acronyms and abbreviations relevant to this document that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| AN | Association Number |
| CA | Secure Connectivity Association |
| CAK | Secure Connectivity Association Key |
| DA | Destination Address |
| ICV | Integrity Check Value |
| KaY | MAC Security Key Agreement Entity |
| MACsec | Media Access Control Security |
| MKA | MACsec Key Agreement protocol (IEEE Std 802.1X) |
| MKPDU | MACsec Key Agreement Protocol Data Unit |
| MPDU | MACsec Protocol Data Unit |
| PAE | Port Access Entity |
| PN | Packet Number |
| SA | Secure Association or Source Address, as applicable |
| SAI | Secure Association Identifier |
| SAK | Secure Association Key |
| SC | Secure Channel |
| SCI | Secure Channel Identifier |
| SecTAG | MAC Security TAG |
| SecY | MAC Security Entity |
| SL | Short Length |
| SSCI | Short Secure Channel Identifier |

### 9. 定义
*原文标题：Definitions*

### 10. Ethernet port

Definition: An Ethernet port is a hardware entity providing the physical and logical interface for an ECU to connect to an Ethernet network. An Ethernet Port can be realized as a PHY port, an Ethernet switch port, or an Ethernet controller port. Optionally, an Ethernet Port may support hardware-based MACsec or hardware timestamping for Time Synchronization (IEEE 802.1AS).

### 11. Cipher suite

Definition: A cipher suite comprises a set of algorithms that support to secure network connections.

### 12. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the MACsec protocols.

### 13. 功能概述
*原文标题：Functional Overview*

IEEE 802.1AE (also known as MACsec) is a network security standard that operates at the medium access control layer and defines connectionless data confidentiality and integrity for media access independent protocols.

The 802.1AE standard specifies the implementation of MAC Security Entities (SecY), which are part of the stations attached to the same LAN, providing secure MAC service to the client. The standard defines:

* MACsec frame format, which is a valid Ethernet frame with a specific EtherType and includes the following additional fields:

  * Security Tag, which is an extension of the EtherType.
  * Message authentication code (ICV).
* Secure Connectivity Associations (CAs) that represent groups of stations connected via unidirectional Secure Channels.
* Security Associations (SAs) within each Secure Channel. Each association uses its own key (SAK). More than one association is permitted within the channel for the purpose of key change without traffic interruption (standard requires devices to support at least two).
* A default cipher suite of GCM-AES-128 (Galois/Counter Mode of Advanced Encryption Standard cipher with 128-bit key)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Motivation

AUTOSAR supports actually several protocols to establish a secure communication channel which provide data confidentiality, data integrity and data origin authentication over Ethernet (e.g. IPsec, TLS, SecOC).

The TLS protocol aims primarily to provide privacy and data integrity between two communication peers. If more than two communication peers need to exchange data in integrity protected way, for each peer connection an own TLS connection must be setup. TLS is application protocol independent; higher-level protocols can layer on top of TLS transparently. TLS needs for each application-based session an own setup connection, which leads to a resource overhead. Each session needs an own database entry for the negotiated key, the session status, and other organizational information.

To avoid the overhead introduced by the large number of required TLS connections it is possible to push the secure communication channel one level down, to the IP layer. To secure the IP layer IPsec was introduced. IPsec includes protocols for establishing mutual authentication between hosts at the beginning of a session and negotiation of cryptographic keys to use during the session.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 功能性 elements
*原文标题：Functional elements*

The standards related with MACsec ( and ) define the following functional elements:

* MAC Security Entities (SecYs): The SecY defines and identifies the authentic partners. A SecY implements the secure MAC Service to its clients. The MAC Security Entity is responsible of integrity protecting/validating and, if required, encrypt/decrypt to provide user data confidentiality. The SecY can be a SW or a HW implementation.
* Port Access Entities (PAEs): The PAE provides mutual authentication of participants belonging to a secure Connectivity Association (CA), and agrees the cryptographic keys and related parameters to meet the requirements of the SecY.
* MAC Security Key Agreement Entities (KaYs): The KaY is the responsible for MKA within the PAE, it serves to setup a Secure Channel via a key agreement and monitors it during its life cycle.
* Secure Channel (SC): Stores various configuration parameters, such as whether to perform replay protection, or whether to enable encryption.
* Secure Association (SA): Security relationship under a Secure Channel. Each SA supports a different key.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Authentication of participants

During the first phase of the MKA sequence, the MKA Entity (KaY) identifies other participants belonging to its configured CA. In the current version of this document, only pre shared keys authentication is supported and the participants possess fixed roles in the MKA sequence. The participants of the MKA communication will identify and authenticate each other based on the CKN and ICV of the MKPDUs exchanged. Once a participant can successfully identify and authenticate another participant belonging to the same CA, the member identifier of the other participant is included in its transmitted "Potential Peer List".

If a participant recognizes another one and it is listed in the others "Potential peer List", it will mark it as Live participant. The Member Identifier of the other participant will be included in the transmitted "Live Peer List".

### 17. Session negotiation

In the current version of this document, dynamic election of the Key Server member is not supported, and therefore each participant will currently configure in advance its role in the communication.

The participants can share the supported cipher suites by means of the "MACsec Cipher Suites Announcement". The participant with the Key Server role will select a cipher suite and generate and distribute a Secure Association Key accordingly.

Both participants shall communicate the readiness to transmit and receive MACsec protected PDUs with the "MACsec SAK Use" parameter set.

During the Secure Channel life time, it is possible to distribute new SAKs (and therefore create a new SA) without a communication interruption. The participants can also detect if the communication partner is alive.

In case a cipher suite with Extended Packet Number (XPN) is selected, additional parameter sets are exchanged during the Secure Channel life time to keep the channel information up-to-date.

### 18. Secure communication

After the identification, mutual authentication, distribution of keys, and installation of keys, the secure communication can start based on the parameters exchanged in the previous phases.

### 19. 功能性需求
*原文标题：Functional Requirements*

### 20. Standards to 支持
*原文标题：Standards to support*

MACsec Protocol support
  Status: DRAFT
⌈
| Description: | MACsec shall be supported as specified in |
|---|---|
| Rationale: | To enable secure communication over MAC |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1AE |

⌋

 MACsec Key Agreement Protocol support
  Status: DRAFT
⌈
| Description: | MACsec Key Agreement (MKA) shall be supported as specified in  The MKA version to use shall be version 3. |
|---|---|
| Rationale: | To enable secure communication over MAC |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1X |

⌋

### 21. Common 需求
*原文标题：Common Requirements*

Using MACsec on external communication links
  Status: DRAFT
⌈
| Description: | The implementation of MKA shall be able to send and receive MKA traffic as defined in . The implementation shall be able to monitor and configure MACsec operation following  on or through all selected external ports, i.e., ports connecting to other peers. The selection of ports to use MKA upon shall be realized via configuration. |
|---|---|
| Rationale: | Support of MACsec |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1AE, IEEE 802.1X |

⌋

 Configure which Ethernet ports use MACsec
  Status: DRAFT
⌈
| Description: | It shall be configurable which Ethernet port (e.g. PHY, Ethernet switch port or Ethernet controller) uses MACsec. |
|---|---|
| Rationale: | Allow to select which Ethernet ports are MACsec protected and which are unprotected. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | - |

⌋

 MACsec status control
  Status: DRAFT
⌈
| Description: | The implementation of MKA shall provide an option to control the MACsec state of the interfaces. Activation, deactivation of MACsec on a network interface. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 需求 on MACsec 协议
*原文标题：Requirements on MACsec Protocol*

Support of integrity and confidentiality
  Status: DRAFT
⌈
| Description: | The MACsec Entity (SW or HW) shall support "Integrity only" as well as "Integrity with Confidentiality" for all supported ciphers. |
|---|---|
| Rationale: | Configurable protection depending on needs. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | Integrity protection or confidentiality support for links. |
| Supporting Material: | IEEE 802.1AE |

⌋

 MAC Security TAG
  Status: DRAFT
⌈
| Description: | MACsec Entity (SW or HW) shall support MAC Security TAG (SecTAG) as defined in . The SecTAG shall convey: |
|---|---|

* TAG Control Information (TCI)
* Association Number (AN)
* Short Length (SL)
* Packet Number (PN)
* Secure Channel Identifier (SCI) - Optional
| Rationale: | Support of MACsec |
|---|---|
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1AE |

⌋

 MACsec EtherType
  Status: DRAFT
⌈
| Description: | MACsec Entity (SW or HW) shall support MACsec EtherType as defined in . |
|---|---|
| Rationale: | Support of MACsec |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1AE |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 需求 on MKA 协议
*原文标题：Requirements on MKA Protocol*

Support of MKA Packets
  Status: DRAFT
⌈
| Description: | The MKA implementation shall support the Port Access Entity EtherType and the MACsec Key Agreement (MKA) Packet Type as defined in . |
|---|---|
| Rationale: | Support of MKA |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1X |

⌋

 Pre-shared key support
  Status: DRAFT
⌈
| Description: | The MKA implementation shall support standardized authentication based on a Connectivity Association pre-shared key (CAK). |
|---|---|
| Rationale: | Support of MKA |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | Authentication of participants based on pre-shared keys. |
| Supporting Material: |  |

⌋

 Key selection via CKN
  Status: DRAFT
⌈
| Description: | It shall be possible to select the CAK and/or derived keys (i.e. ICK and KEK) using the CKN transported in MKA by the peer. |
|---|---|
| Rationale: | Authentication of participants based on pre-shared keys. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | Mutual authentication of participants. |
| Supporting Material: |  |

⌋

### 24. 密码服务 for MACsec and MKA
*原文标题：Cryptography for MACsec and MKA*

GCM-based cipher support
  Status: DRAFT
⌈
| Description: | The MACsec implementation shall support the GCM-based ciphers as defined in . |
|---|---|
| Rationale: | Support of MACsec |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1AE |

⌋

 Support of AES ciphers with at least 128 bits of key length
  Status: DRAFT
⌈
| Description: | The MACsec implementation shall support AES ciphers with at least 128 bits of key length. |
|---|---|
| Rationale: | Support of MACsec |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1AE |

⌋

 Support of AES ciphers with 256 bits of key length
  Status: DRAFT
⌈
| Description: | The MACsec implementation shall support AES ciphers with 256 bits of key length. |
|---|---|
| Rationale: | Support of MACsec |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1AE |

⌋

 Support of Key Encryption Key (KEK)
  Status: DRAFT
⌈
| Description: | The MKA implementation shall support a KEK per MKA instance. The KEK is derived from the Connectivity Association Key (CAK) by using the Key Derivation Function as defined in . |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 需求 for MACsec capable hardware
*原文标题：Requirements for MACsec capable hardware*

Interframe gap configuration of Ethernet controller
  Status: DRAFT
⌈
| Description: | Systems with MACsec implemented by an external physical layer chip shall allow adjusting the interframe gap, to accommodate the additional MACsec SecTAG (8-16 bytes) and ICV (16 bytes as specified in ). |
|---|---|
| Rationale: | Support of MACsec |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IEEE 802.1AE |

⌋

### 26. Additions to Standards

MACsec participants per link
  Status: DRAFT
⌈
| Description: | The MKA implementation shall assume exactly two participants per link. Therefore, having exactly one peer. |
|---|---|
| Rationale: | This requirement permits a KaY instance to immediately continue with the MKA sequence after detecting an successfully authenticating another participant in the link, avoiding start-up delays. |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | - |

⌋

 MKA SC establishment retry phase
  Status: DRAFT
⌈
| Description: | The MKA implementation shall support retry for the MKA sequence. If a KaY instance cannot successfully identify or successfully establish a SC with any participant in the Link, it should retry the MKA sequence following a per configuration parametrized retry base delay with Exponential Back-off until a retry cyclic delay in ms. (e.g. 20ms, 40ms, 80ms, 160ms, 320ms, 500ms, 500ms, ...). |
|---|---|
| Rationale: | Delayed start-up times of participants |
| Applies To: | CP, AP |
| Dependencies: | - |
| Use Case: | In-vehicle secure communication |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

No content.

### 28. References

### 29. Related standards and norms

### 30. IEEE

# IEEE 802.1AE-2018 Media Access Control (MAC) Security (v.2018)
# IEEE 802.1X-2020 Port-Based Network Access Control (v.2020)

### 31. 附录
*原文标题：Appendix*

### 32. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 33. Traceable item history of this document according to AUTOSAR Release R24-11

### 34. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 35. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 36. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 37. Traceable item history of this document according to AUTOSAR Release R25-11

### 38. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 39. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| Configure which Ethernet ports use MACsec |  |

### 40. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
