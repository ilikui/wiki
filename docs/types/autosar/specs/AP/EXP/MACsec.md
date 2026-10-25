# Explanation of MACsec and MKA Protocols implementation and configuration guidelines (`MACsec`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 1067 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_EXP_MACsec_1067\AUTOSAR_AP_EXP_MACsec.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_EXP_MACsec_1067\AUTOSAR_AP_EXP_MACsec.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_EXP_MACsec_1067\zzgen\AP_EXP_MACsec.complete.txt`

## 文档简介

This explanatory provides additional information to MACsec and MKA of the AUTOSAR Standard.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This explanatory provides additional information to MACsec and MKA of the AUTOSAR Standard.

### 2. 目标
*原文标题：Objectives*

The objective of this document is to provide additional information and description of the MACsec and MKA protocols with the focus in AUTOSAR Adaptive Platform.

### 3. 范围
*原文标题：Scope*

This document provides guidelines for MACsec integration in the AUTOSAR Adaptive Platform.

### 4. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

The glossary below includes acronyms and abbreviations relevant to the MKA module that are not included in the .

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| AN | Association Number |
| CA | Secure Connectivity Association |
| CAK | Secure Connectivity Association Key |
| CKN | Connectivity Association Key Name |
| DA | Destination Address |
| EAP | Extensible Authentication Protocol |
| ICV | Integrity Check Value |
| KaY | MAC Security Key Agreement Entity |
| MACsec | Media Access Control Security |
| MKA | MACsec Key Agreement protocol (IEEE Std 802.1X) |
| MKPDU | MACsec Key Agreement Protocol Data Unit |
| MPDU | MACsec Protocol Data Unit |
| PAE | Port Access Entity |
| PN | Packet Number |
| PSK | Pre-shared Key |
| SA | Secure Association or Source Address, as applicable |
| SAI | Secure Association Identifier |
| SAK | Secure Association Key |
| SC | Secure Channel |
| SCI | Secure Channel Identifier |
| SecTAG | MAC Security TAG |
| SecY | MAC Security Entity |
| SL | Short Length |
| SSCI | Short Secure Channel Identifier |
| TLV | Tag-Length-Value |

### 6. 相关文档
*原文标题：Related Documentation*

### 7. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

MACsec Requirements Specification  which is also valid for MKA.

### 8. The basics of MACsec 协议
*原文标题：The basics of MACsec Protocol*

### 9. MACsec 协议 - 网络 security standard
*原文标题：MACsec protocol - network security standard*

MACsec is a network security standard that operates at the Media Access Control (MAC) layer (Layer 2) and defines connectionless data confidentiality and integrity for media access independent protocols. MACsec stands for Media Access Control Security and it is defined and specified on the IEEE 802.1AE standard (). It is a point-to-point (P2P) protection mechanism, which provides secure communication for Ethernet Networks, specifically protects communication channels within the vehicle network.

MACsec provides:

* Security solutions on the lowest media independent layer (Layer 2 or MAC Layer).
* Integrity protection. The layer 2 payload and MAC addresses of each frame are integrity protected.
* Confidentiality. Whenever configured, the layer 2 payload of each frame on the wire is encrypted.
* Advantages of using MACsec:

  * Confidentiality.
  * Flexibility.
  * Network intelligence.
  * Scalability.
  * Performance of the communication peer which includes MACsec protection is better than with other security protocols.
* Ensures data integrity, data origin authentication and the option of encryption mechanisms.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. MACsec Key Agreement 协议 (MKA)
*原文标题：MACsec Key Agreement protocol (MKA)*

The purpose of the MACsec Key Agreement (MKA) protocol is to provide a mechanism to discover MACsec peers and negotiate the security keys required to secure the link. There are two mechanisms defined within the 802.1X standard for the generation of key material for the use with MKA:

* Pre-shared Keys (PSK).
* The master session key which is a product of a successful Extensible Authentication Protocol (EAP) authentication. (More information on the )

The current MACsec implementation guidelines rely on PSK, due to the much better performance in start-up times. That means the CAK, and its respective CKN, shall be pre-installed on the communication participants on advance.

The following drawing shows the corresponding sequence related to the MKA protocol:

The participants present in the MKA communication, according to , are:

* Supplicant, also known as client.
* Authenticator.
* Authentication Server.

In general, for automotive applications the Authenticator and the Authentication Server are preferred to be implemented in the same controller, named Key Server, and with the following advantages associated:

* Avoids extra communication with an onboard/internet external server.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Objective of MACsec

The objective of MACsec protocol implementation in AUTOSAR Adaptive Platform is providing secure communication links in the in-vehicle Ethernet network. Implementing MACsec in AUTOSAR Adaptive Platform provides options for securing communication between nodes with confidentiality, integrity or both guaranteed.

### 12. Primary recommendations

### 13. Prerequisites

MACsec is a security protocol in Layer 2, which means, it is fully dependent on Ethernet functionality, but also the system shall include a MKA Daemon for the establishment of the Secure Channels between nodes.

### 14. Implementation of MACsec in AUTOSAR AP stack

The AUTOSAR's Adaptive Platform does not specify any operating system for an Electronic Control Unit (ECU) and as of that, implementing state-of-the-art MACsec functionality along with best practices, is a shared responsability of the stack vendor and the stack integrator.

This goal can be achieved without engaging any higher network stack level, i.e. communication channel established with MACsec would be fully transparent for AUTOSAR Adaptive Platform Communication Management functional cluster, thus for Adaptive Applications as well.

The following picture outlines the design of the AUTOSAR Adaptive stack. The only part of the functionality, which is included in the Specification of Manifest , is the "MKA config". This is only an example, based on Linux architecture and might require some modifications for other operating systems.

If a Host has the architecture of the previous drawing, the following actions happen until the Host sends the first MACsec protected frame.

* Kernel startup: the physical interfaces are detected and the driver is initialized.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Operating 系统's kernel using MKA 模块
*原文标题：Operating System's kernel using MKA Module*

As mentioned above, MACsec requires the usage of the OS Ethernet components, usually located in the kernel area. MKA Module shall be called from the different modules of the Kernel, related to the Ethernet communication, for the implementation of the MKA and MACsec functionalities.

### 16. MKA 模块
*原文标题：MKA Module*

In order to make MACsec operative, a MACsec Key Exchange Agreement (MKA) module is needed. Typically, it would not be a part of the kernel space and require a separated implementation and integration. For the Host OS, MKA as defined in  shall be implemented. For the MKA Daemon a configuration file is needed, to set the bypass rules, the MACsec ports, the list of CKNs, \ldots .

MKA module needs to be initialized during the OS boot time in order to assure that all necessary security associations are established before the node starts communication through the MACsec protected Ethernet channels.

### 17. Detailed features 描述 for MACsec implementation
*原文标题：Detailed features description for MACsec implementation*

While integrating MACsec in AUTOSAR Adaptive Platform, the following features shall be included in the implementation. That ensures compatibility and superior security posture. The  document shall be consulted for detailed requirements.

* MACsec is supported based on the following standards:

  * MACsec standard (Media Access Control Security) \rightarrow
  * MACsec Key Agreement protocol (MKA) for the exchange of secret keys used in MACsec \rightarrow
  * AUTOSAR requirements on MACsec \rightarrow

* Following common features are fulfilled:

  * Using MACsec on external communication links.
  * Configure which Ethernet ports use MACsec.
  * The implementation of MKA provides an option to control and monitor the MACsec state of the interfaces. Activation, deactivation and readout of MACsec status on a network interface.
  * The Adaptive AUTOSAR Platform's Operating System provides mechanisms to configure the MACsec related resources.
  * Configuration of unprotected traffic is provided.
  * Monitoring of the MACsec channels status and statistics.

* The MACsec implementation supports the following features regarding the MACsec protocol:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Further guidance

### 19. Backward compatibility

Electronic Control Units with MACsec support shall allow integration into vehicles, in which their communication partners do not support MACsec.

Configuration options for MACsec communication for specific peers shall be available.

### 20. MACsec bypass rules

The ECU shall support that certain Ethernet Types or VLAN IDs can be bypassed, that means for the corresponding communication there is no MACsec protection, neither integrity nor confidentiality.

### 21. Supplementary information

The above mentioned requirements should not be regarded as exhaustive, and the final implementation does not need to be restricted to them.

In particular, documentation specific to software packets picked out for integration with the operating system stack should be taken into consideration.
