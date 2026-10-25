# Specification of MACsec Key Agreement (`MACsecKeyAgreement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1066 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_MACsecKeyAgreement_1066\AUTOSAR_CP_SWS_MACsecKeyAgreement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_MACsecKeyAgreement_1066\AUTOSAR_CP_SWS_MACsecKeyAgreement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_MACsecKeyAgreement_1066\zzgen\CP_SWS_MACsecKeyAgreement.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module MKA.

## 模块依赖

The MACsec Key Agreement (MKA) Module has interfaces with the following modules:

# EthIf \rightarrow To configure, control, and monitor the MACsec Entity (per SW or HW).
# CSM:

  * Protect outgoing MKA messages and validate incoming MKA messages.
  * Generate, encrypt, and decrypt session keys (SAKs).
# LSduR:

  * forward MKPDUs from the MKA module to the EthIf
  * forward MKPDUs from the EthIf to the MKA module

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module MKA.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the MKA module that are not included in the .

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
| TLV | Tag-Length-Value |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides

* a General Specification on Basic Software modules , which is also valid for MKA.
* a MACsec Requirements Specification  which is also valid for MKA.

Thus, the specification  shall be considered as additional and required specification for MKA.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

This document does not cover the integration neither requirements of the MACsec protocol as it is an IEEE published standard .

The AUTOSAR MACsec implementation currently has the following limitations:

* Only participants authentication based on Connectivity Association pre-shared keys (CAKs) is supported. (EAP-TLS, EAP-IKEv2, and other variants are not supported).
* Only MACsec between direct peers is supported (e.g. Point-to-Point configurations).
* Point-to-Multipoint configurations are not supported.
* In-service upgrades with EAPoL-MKA frames are not supported.
* Temporary suspension of MKA operation is not supported.
* MACsec Cipher Suites is the only currently supported EAPoL-Announcement TLV. The following EAPoL Announcements are currently not required:

  * Access Information \rightarrow TLV Type 111
  * Key Management Domain \rightarrow TLV Type 113
  * NID \rightarrow TLV Type 114
* Dynamic Key Server election based on Key Server priority is not supported (Roles are set per configuration and fixed).
* The following MKPDU Parameter sets are currently not required:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

Automotive systems require quicker start-up times for the devices connected to the on-board network, hence the protocol convergence time must be tuned accordingly.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The MACsec Key Agreement (MKA) Module has interfaces with the following modules:

# EthIf \rightarrow To configure, control, and monitor the MACsec Entity (per SW or HW).
# CSM:

  * Protect outgoing MKA messages and validate incoming MKA messages.
  * Generate, encrypt, and decrypt session keys (SAKs).
# LSduR:

  * forward MKPDUs from the MKA module to the EthIf
  * forward MKPDUs from the EthIf to the MKA module

### 10. Connection to Linklayer Sdu Routing 模块 (LSduR)
*原文标题：Connection to Linklayer Sdu Routing Module (LSduR)*

The MKA module and the LSduR are connected in order to route transmission and reception MKA messages.

### 11. Connection to Ethernet 接口 (EthIf)
*原文标题：Connection to Ethernet Interface (EthIf)*

The MKA module and the EthIf are connected in order to:

* Provide MACsec specific parameters to the lower layers.
* Orchestrate the Link-Up and Link-Down signaling of the interfaces for upper layers (i.e. through the EthSM).

In case an Ethernet Interface is MACsec protected, it will use a specific MKA module instance to configure the MACsec Entities (HW or SW) for transmission and reception.

In case the MACsec protected Ethernet Interface is required to be ACTIVE by the EthSM, after the signaling of the physical Link-up from the specific transceiver or Switch port(`ETH_MODE_ACTIVE`), the EthIf will delegate the establishment of at least one Secure Channel with the communication peers, to the referred MKA instance. Once the MACsec Secure Channel is established and both participants can successfully receive and transmit, the Ethernet Interface will signal the Link-Up to the upper layers (e.g. through the Ethernet State Manager).

During the lifetime of the established SCs, the MKA module will maintain them alive by communicating with the MACsec Entities through the Ethernet Interface module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Indirect connection to EthDriver, EthSwitchDriver and EthTransceiverDriver

In case the MACsec Entity is offloaded to a HW device, the MKA module is indirectly connected to the EthDriver, EthSwitchDriver, and EthTranceiverDriver through the EthInterface. This connection is needed in order to establish, configure, and manage the needed MACsec Secure Channels. There are functions in the interface of the EthDriver, EthSwitchDriver and EthTransceiverDriver for that purpose.

Establishing a Secure Channel is done via the MACsec Key Agreement protocol, the MKA module will handle all protocol steps. These specific protocol datagrams are setup and organized by the MKA module. Thus, the MKA module provides via the existing function call the datagram to the Ethernet Interface, which then sends the datagram to the communication peer. This behavior is handled via a specific pair EtherType and message type, and is set via the interface. With this EtherType, the Ethernet Interface will handle the datagram on Rx and Tx trace.

### 13. Connection to Crypto 服务管理器 (CSM)
*原文标题：Connection to Crypto Service Manager (CSM)*

The MKA module requires a connection to the cryptographic BSW modules of AUTOSAR. This allows the MKA module to derive and use the needed keys and to interact with the cryptographic algorithms as specified in  and .

For cryptographic usage, the MKA module needs following support from the BSW crypto:

* KDF (as described in  chapter 6.2.1) to derive ICK and KEK from CAK.
* AES-CMAC, which uses AES CMAC with 128bits, using ICK to generate and validate MKA message ICVs.
* A function to generate random data (for SAK and Member Identifier).
* AES-KEYWRAP based on  to encrypt keys for transmission.

### 14. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in the documents listed in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| MACsec Protocol support |  |  |
| MACsec Key Agreement Protocol support |  |  |
| Using MACsec on external communication links |  |  |
| Configure which Ethernet ports use MACsec |  |  |
| MACsec status control |  |  |
| MACsec support for Adaptive AUTOSAR Platform |  |  |
| Configuration of unprotected traffic (for Hardware-based MACsec) |  |  |
| MACsec Security Events |  |  |
| Support of integrity and confidentiality |  |  |
| MAC Security TAG |  |  |
| MACsec EtherType |  |  |
| Support of Extended Packet Number (XPN) |  |  |
| Secure Channel Identifier (SCI) |  |  |
| Secure Data |  |  |
| Integrity Check Value (ICV) |  |  |
| Protect function in software solution |  |  |
| Validation function in software solution |  |  |
| Support of MKA Packets |  |  |
| Pre-shared key support |  |  |
| Key selection via CKN |  |  |
| Support of AES ciphers with at least 128 bits of key length |  |  |
| Support of AES ciphers with 256 bits of key length |  |  |
| Support of Key Encryption |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 功能规范
*原文标题：Functional specification*

### 16. Background and rationale

A detailed description of the MACsec and MACsec Key Agreement protocols is included in .

### 17. Motivation

The aim of this document is to specify how to integrate the MKA Module in the Software Layered Architecture of the AUTOSAR Classic Platform.

The purpose of the MACsec Key Agreement Module is to provide a method for discovering MACsec peers and negotiate the security keys needed to secure the link. The MKA Module is responsible for:

* Generating (outgoing) and processing (incoming) MKPDUs.
* Identify and authenticate other partners belonging to the same Connectivity Association (CA).
* Configure and supply the parameters and cryptographic data to the MACsec Entity (per SW or HW) for the respective Secure Channel and Secure Associations established.
* Keep the established Secure Channel (SC) and Secure Association (SA) information updated.
* Refresh keys for an specific Secure Channel to allow exchanging Secure Association Keys (SAKs) without disrupting the communication channel.

The MKA module supports:

* The configuration, initialization, and maintenance of Port Access Entities (PAEs).
* The configuration, initialization, shutdown, and maintenance of MKA Entities (KaYs) which belong to an specific PAE.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 功能性 components
*原文标题：Functional components*

### 19. Port Access Entity (PAE)

In the  standard the Port Access Entity (PAE) describes the (SW) entity that controls an Ethernet port. This includes allowing traffic to flow or not to flow but also controlling the MACsec functionality based on the MACsec Key Agreement protocol (MKA).

 defines port based authentication over EAP and, as a particular use case, the MACsec Key Agreement protocol over EAP. In the current version of this document, authentication over EAP is not supported and therefore only authentication based on pre-shared CA Keys (CAKs) is relevant.

The PAE will take care of orchestrating the initialization and shutdown of MKA instances (defined in next section) and setting the status (enabled/disabled) of the physical or virtual controlled port based on the feedback provided by the underlying KaYs.

For a better understanding of the PAE structure, refer to  chapter 12.

### 20. MACsec Key Agreement Entity (KaY)

Each PAE can have one or multiple MACsec Key Agreement participants (KaY participants) depending on the CKNs assigned to the Port Access Entity. Each KaY is responsible of recognizing peers which belong to the same CA, distribute and/or install SAKs, and keep the MACsec information up to date during the SC lifetime. The KaY handles the MKA protocol behavior, including the generation and process of MKPDUs, the control of the cipher suites to use and, the maintenance of the MACsec related parameters of the MACsec Entity (SecY), including Keys (SAKs).

### 21. 通用需求
*原文标题：General Requirements*

Status: DRAFT
  Upstream requirements: , , , , , ,
⌈
The MKA Module shall implement the EAP-MKA protocol version 3 as specified in  chapter 9 and AUTOSAR Foundation .
⌋

Note: The MKA Module should be modeled as described in  chapter 12. For the excluded parts please refer to .

  Status: DRAFT
  Upstream requirements: , ,
⌈
The MKA Module shall support 1 to n independent Port Access Entities (PAEs) running at the same time through different ports.
⌋

Note: Each physical (Switch port or transceiver) or virtual (MACsec per SW) port will support 0 (No MACsec) or 1 PAE.

  Status: DRAFT
  Upstream requirements: , ,
⌈
The MKA Module shall support configuring 1 to n CKNs in an specific Port Access Entity (PAE). Each configured CKN will start a parallel MACsec participant entity (i.e. MkaKayParticipant) through the mentioned PAE. Repeated CKNs shall be treated as one for an specific PAE.
⌋

Note: It is recommended to implement a configuration check to avoid duplicated CKNs referred under the same MkaKay instance.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 限制
*原文标题：Limitations*

An overview of non-supported features can be found in .

### 23. 限制 on MKA Entity
*原文标题：Limitations on MKA Entity*

Status: DRAFT
  Upstream requirements: ,
⌈
The MKA Module may support authentication based on EAP as detailed in  chapter 8.
⌋

Note: Authentication based on EAP is not required as the mutual authentication of participants is achieved based on pre-shared Keys.

  Status: DRAFT
  Upstream requirements:
⌈
The MKA Module shall support only one MKA Participant (MkaKayParticipant) to success per port (i.e. per PAE MkaPaeInstance). If one KaY participant is able to correctly establish a SC, the other started participants (MkaKayParticipant) of the same PAE shall give up.
⌋

Note: As specified in , a PAE instance can initiate 1 to n MKA participant instances (MkaKayParticipant) but only one of them shall succeed configuring a Secure Channel in the port (Point-to-Multipoint architecture is not supported).

### 24. Cryptographic 需求
*原文标题：Cryptographic requirements*

Status: DRAFT
⌈
The MKA Module shall support the following Cipher suites to be configured in the MACsec Entity (either per SW or HW):

* GCM-AES-128
* GCM-AES-256
* GCM-AES-XPN-128
* GCM-AES-XPN-256
⌋

Note: The MKA Module shall support announcing and configuring the listed ciphers (MkaMacSecCipherSuite). Detailed information can be found in  Figure 11-12 and  chapter 14.3.

  Status: DRAFT
⌈
The MKA Module shall support configuring 1 to 4 cipher suites per MkaCryptoAlgoConfig, each of them with an unique MkaMacSecCipherSuitePrio. The MkaMacSecCipherSuitePrio shall accept the value 1 to 4, being 1 the higher priority and 4 the lowest priority.
⌋

Note: The MkaMacSecCipherSuitePrio parameter shall be used by a MkaKayParticipant with MkaRole = `MKA_KEY_SERVER` to select the cipher suite to use for MACsec with the other participant within the common cipher suites supported (shared with the EAPoL-MKA-Announcement "MACsec cipher suites").

The cryptographic operations like the derivation of MACsec keys and authentication based on CAK pre-shared keys should be delegated to the CSM Module.

Note: For detailed information, refer to  chapter 9.3.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. MKPDU 处理
*原文标题：MKPDU handling*

The MKA module need to process and to generate MKPDUs to communicate with its direct link partner. Generated MKPDUs are used for outgoing traffic and processed MKPDUs are handled for incoming traffic. Within the AUTOSAR communication stack, MKPDUs are transmitted and received via PDUs. The MKA module has per MkaPaeInstance one MkaPaeRxPdu and one MkaPaeTxPdu configured. The MkaPaeTxPdu is used to transmit and the MkaPaeRxPdu is used to receive MKPDUs. The PDUs are routed via the LSduR to the EthIf module and vice versa. MKPDUs are transferred on the data line (either with or without VLAN tag) as traffic that is not MACsec protected, i.e. bypassing the MACsec operation of the protected Ethernet port (e.g. PHY). Therefore, the configuration of the LSduR and EthIf need to consider that the MkaPaeRxPdus and the MkaPaeTxPdus are connected to PDUs via the LSduR that refer to an EthIfController where the configuration of the corresponding lower layer driver (e.g. EthTrcv) has a bypass configuration (e.g. EthTrcvMacSecBypassEtherType), i.e. this EthIfController allow MACsec unprotected traffic.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Communication with MACsec Entity (SecY)

The MKA Module, and particularly a specific MKA Entity (KaY) running over a PAE, shall initialize and maintain a Secure Channel for MACsec over an specific MACsec Entity (SecY). Once a Secure Channel is established for MACsec, multiple Secure Associations could be created and maintained. Each single Secure Associations has its own SAK. The MKA module is responsible to create SAKs and share it with the SecYs participating the same Connectivity Association. The mentioned MACsec Entity can be a SW implementation of MACsec in lower layers or a HW implementation in a Phy, Ethernet Switches or Ethernet Controllers.

The following APIs are used to establish a Secure Channel and to establish Secure Associations. Please refer to  and to  of this document for more details:

* APIs to establish a Secure Channel, if MACsec processing is performed by an PHY:

  * `EthIf_MacSecInitRxSc`
  * `EthIf_MacSecUpdateSecY`
  * `Mka_MacSecUpdateSecYNotification`
* APIs to establish a Secure Channel, if MACsec processing is performed by an Ethernet switch port:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Configurable 行为 of MKA
*原文标题：Configurable behavior of MKA*

Status: DRAFT
  Upstream requirements:
⌈
The status and behavior of a specific MkaPaeInstance shall be configurable per initial configuration.
⌋

Note: In case the proposal from  chapter 12.5 is used, the variable useEAP is currently not supported (that means, the value shall be per default set to Never).

 MkaPaeInstance shall either reference an EthIfController or an EthSwtPort
  Status: DRAFT
  Upstream requirements:
⌈
A MkaPaeInstance shall either reference an EthIfController or an EthSwtPort. All other configurations shall be rejected as invalid.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
It shall be possible to set the configuration of a specific PAE dynamically through the MKA module API. The change shall apply in the next power cycle. If a configuration parameter (e.g. through `Mka_SetPaePermissiveMode`, `Mka_SetCknStatus`, or `Mka_SetEnable`) is changed by means of the API, the original per configuration set value shall be ignored and the in NVRAM persisted value shall be used from the next power cycle onwards.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. MKA 行为
*原文标题：MKA behavior*

Trigger to configure a MACsec protected port if link state changes to ACTIVE
  Status: DRAFT
  Upstream requirements:
⌈
If `Mka_LinkStateChange` is called with TransceiverLinkState set to `ETHTRCV_LINK_STATE_ACTIVE`, then the MKA module shall trigger the configuration of a MACsec protected port that corresponds to the MkaPaeInstance identified with the given MkaPaeIdx by immediately starting the MKA sequence(s) via the configured MkaPaeTxPdu and MkaPaeRxPdu of this MkaPaeInstance.
⌋

 Signal a successful finalization of a configuration for a MACsec protected port
  Status: DRAFT
  Upstream requirements:
⌈
If the configuration of a MACsec protected port has been successfully finalized, then the MKA module shall immediately perform either one of the following conditions:

* If the MkaPaeInstance that corresponds to the MACsec protected port references an EthIfController via MkaEthIfControllerRef, then call `EthIf_MacSecOperational` with CtrlIdx set to this EthIfController and with MacSecOperational set to TRUE.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. MKA 错误处理
*原文标题：MKA Error Handling*

To ease complexity of the implementation, the MKA module may heal certain extended production errors automatically at start-up.

  Status: DRAFT
  Upstream requirements:
⌈
If one or more CAKs referenced by MkaCryptoCknCakKeyRef is/are not initialized, `MKA_E_KEY_NOT_PRESENT_INSTANCE` shall be set to "Fail".
⌋

Note: Also see CSM Return Code `CRYPTO_E_KEY_NOT_AVAILABLE`.

  Status: DRAFT
  Upstream requirements: ,
⌈
If the verification of the ICV of MKPDUs or the unwrapping of keys fails for one or more CKNs because of a wrong key, `MKA_E_KEY_MISMATCH_INSTANCE` shall be set to "Fail".
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If the MKA peer only supports incompatible cipher suites, `MKA_E_ALGO_MISMATCH_INSTANCE` shall be set to "Fail".
⌋

  Status: DRAFT
  Upstream requirements: ,
⌈
`MKA_E_TIMEOUT_INSTANCE`, `MKA_E_KEY_NOT_PRESENT_INSTANCE`, `MKA_E_KEY_MISMATCH_INSTANCE`, and `MKA_E_ALGO_MISMATCH_INSTANCE` shall be healed (set to "Pass"), when the error condition is not applicable anymore.
⌋

Note: If an implementer chooses to not implement , the mentioned errors shall be healed on start-up of the MKA module.

### 30. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 31. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Mka
  Status: DRAFT
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| MKA Component initiated with null configuration | MKA_E_CFG_NULL_PTR | 0x01 |
| API called with invalid parameter value. | MKA_E_INVALID_PARAMETER | 0x04 |
| API called with a NULL pointer. | MKA_E_PARAM_POINTER | 0x05 |
| API called prior module is initialized. | MKA_E_UNINIT | 0x06 |

⌋

### 32. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 33. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 34. Extended Production 错误
*原文标题：Extended Production Errors*

### 35. MKA_E_TIMEOUT_INSTANCE

MKA timeout while negotiating with remote peer.
  Upstream requirements: ,
⌈
| Diagnostic Event (Error Name) | MKA_E_TIMEOUT_INSTANCE |
|---|---|
| Description | In case MkaOnFailPermissiveMode == MKA_PERMISSIVE_MODE_TIMEOUT and MkaOnFailPermissiveModeTimeout is overflowed, the error will be set. |
| Failed condition | If the PAE instance's MkaOnFailPermissiveMode == TIMEOUT and MkaOnFailPermissiveModeTimeout is overflowed, the error will be set. |
| Passed condition | If the PAE instance's MkaOnFailPermissiveMode == NEVER or If the PAE instance's MkaOnFailPermissiveMode == TIMEOUT, and the MkaKay could establish a transmission and reception SC with a peer before MkaOnFailPermissiveModeTimeout is reached, the error is not set. |

⌋

### 36. MKA_E_KEY_NOT_PRESENT_INSTANCE

Necessary keys not present to initiate MKA negotiation.
  Upstream requirements: ,
⌈
| Diagnostic Event (Error Name) | MKA_E_KEY_NOT_PRESENT_INSTANCE |
|---|---|
| Description | Pre-shared keys (i.e. CAK, ICK or KEK) to start the MKA sequence are not present in at least one of the active configured Kay Participants. |
| Failed condition | The pre-shared keys of an active MkaKayParticipant are not present. |
| Passed condition | All Kay participants have the needed pre-shared keys present. |

⌋

### 37. MKA_E_KEY_MISMATCH_INSTANCE

MKA negotiation failed due to key mismatch with remote peer (MKPDUs ICV mismatch).
  Upstream requirements: ,
⌈
| Diagnostic Event (Error Name) | MKA_E_KEY_MISMATCH_INSTANCE |
|---|---|
| Description | Triggered in case MKPDU cannot be validated for received MKPDUs which distribute a matching CKN. |
| Failed condition | A received MKPDU with matching CKN cannot be successfully validated. |
| Passed condition | All received MKPDUs with matching CKN are successfully validated. |

⌋

### 38. MKA_E_ALGO_MISMATCH_INSTANCE

MKA negotiation failed due to incompatible cipher suite with remote peer.
  Upstream requirements: ,
⌈
| Diagnostic Event (Error Name) | MKA_E_ALGO_MISMATCH_INSTANCE |
|---|---|
| Description | Triggered in case the participants in the MKA communication do not support any MACsec cipher suite in common and therefore cannot distribute neither install a valid SAK. |
| Failed condition | The KaY participants of a communication (local and remote) do not support a common MACsec cipher suite. |
| Passed condition | The KaY participants of a communication (local and remote) support one or more common MACsec cipher suites. |

⌋

### 39. 安全事件
*原文标题：Security Events*

Security event report
  Upstream requirements: ,
⌈
If security event reporting has been enabled for the MKA module (MkaEnableSecurityEventReporting = true) the security events shall be reported to the IdsM via the interfaces defined in
⌋

 Security events for Mka
  Upstream requirements:
⌈
| Name | Description | ID |
|---|---|---|
| SEV_MKA_AUTHENTICATION_FAILURE | Event triggered when the authentication during the MKA communication has failed (wrong CKN/CAK). | 78 |
| SEV_MKA_TIMEOUT | Event triggered when the timeout for the MKA communication has expired. | 79 |
| SEV_MKA_PORT_NOT_ENABLED | Event triggered when the indicated port for the MKA communication is not enable. | 80 |
| SEV_MKA_CIPHER_SUITE_NOT_SUPPORTED | Event triggered when there is no Cipher Suite supported. | 81 |
| SEV_MKA_PORT_NUMBER_CHANGE | Event triggered when during the MKA communication the port number has changed. | 82 |

⌋

 Security event context data definition: `SEV_MKA_AUTHENTICATION_FAILURE`
  Upstream requirements:
⌈
| SEV Name | SEV_MKA_AUTHENTICATION_FAILURE | < |
|---|---|---|
| ID | 78 | < |
| Description | Event triggered when the authentication during the MKA communication has failed (wrong CKN/CAK). |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. API 规范
*原文标题：API specification*

### 41. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Mka
  Status: DRAFT
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Comtype | ComStack_Types.h | PduIdType |
| ^ | ComStack_Types.h | PduInfoType |
| ^ | ComStack_Types.h | PduLengthType |
| Csm | Rte_Csm_Type.h | Crypto_OperationModeType |
| ^ | Rte_Csm_Type.h | Crypto_VerifyResultType |
| Dem | Rte_Dem_Type.h | Dem_EventIdType |
| ^ | Rte_Dem_Type.h | Dem_EventStatusType |
| Eth | Eth_GeneralTypes.h | Eth_FilterActionType |
| EthSwt | Eth_GeneralTypes.h | EthSwt_MgmtInfoType |
| EthTrcv | Eth_GeneralTypes.h | EthTrcv_LinkStateType |
| NvM | Rte_NvM_Type.h | NvM_BlockIdType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 42. 类型定义
*原文标题：Type definitions*

### 43. Mka_MacSecConfigType

Definition of datatype `Mka_MacSecConfigType`
  Status: DRAFT
⌈
| Name | Mka_MacSecConfigType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | ProtectFrames | < |
| ^ | Type | boolean |
| ^ | Comment | Indicates status if the MACsec protection of the frames is active or not |
| ^ | ReplayProtect | < |
| ^ | Type | boolean |
| ^ | Comment | Indicates status if replay protection is enable or disable |
| ^ | ReplayWindow | < |
| ^ | Type | uint32 |
| ^ | Comment | If ReplayProtect is enable, indicates the used replay protect window |
| ^ | ValidateFrames | < |
| ^ | Type | Mka_ValidateFramesType |
| ^ | Comment | Status of the validation of the frames. See Mka_ValidateFramesType for possible values |
| ^ | CurrentCipherSuite | < |
| ^ | Type | uint64 |
| ^ | Comment | Indicates which cipher suite is used in the SecY to update. The Cipher Suite Identifiers are defined in Table 14-1 of . |
| ^ | ConfidentialityOffset | < |
| ^ | Type | Mka_ConfidentialityOffsetType |
| ^ | Comment | Set the Confidentiality Offset. See Mka_ConfidentialityOffsetType for possible values |
| ^ | ControlledPortEnabled | < |
| ^ | Type | boolean |
| ^ | Comment | Status if the controlled port is enabled or disabled |
| Description | Structure to configure a referred SecY |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Mka_ValidateFramesType

Definition of datatype `Mka_ValidateFramesType`
  Status: DRAFT
⌈
| Name | Mka_ValidateFramesType (draft) | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MKA_VALIDATE_DISABLED | 0 | Disable validation, remove SecTAGs and ICVs (if present) from received frames. |
| ^ | MKA_VALIDATE_CHECKED | 1 | Enable validation, do not discard invalid frames |
| ^ | MKA_VALIDATE_STRICT | 2 | Enable validation and discard invalid frames |
| Description | Controls validation of received frames |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | Mka.h | < | < |

⌋

### 45. Mka_ConfidentialityOffsetType

Definition of datatype `Mka_ConfidentialityOffsetType`
  Status: DRAFT
⌈
| Name | Mka_ConfidentialityOffsetType (draft) | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MKA_CONFIDENTIALITY_NONE | 0 | Confidentiality protection disabled |
| ^ | MKA_CONFIDENTIALITY_OFFSET_0 | 1 | Zero initial octets of each user data without confidentiality protection |
| ^ | MKA_CONFIDENTIALITY_OFFSET_30 | 2 | 30 initial octets of each user data without confidentiality protection |
| ^ | MKA_CONFIDENTIALITY_OFFSET_50 | 3 | 50 initial octets of each user data without confidentiality protection |
| Description | Indicates the offset in case of integrity with confidentiality |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | Mka.h | < | < |

⌋

### 其余 81 章（内容从略，见纯文本全文）

46. Mka_Stats_Tx_SecYType
47. Mka_Stats_Rx_SecYType
48. Mka_Stats_Tx_ScType
49. Mka_Stats_Rx_ScType
50. Mka_SakKeyPtrType
51. Mka_PermissiveModeType
52. Mka_Stats_SecYType
53. Mka_PaeStatusType
54. Mka_MkaStatusType
55. Mka_ConfigType
56. 功能定义
57. Mka_Init
58. Mka_GetVersionInfo
59. Mka_SetCknStatus
60. Mka_GetCknStatus
61. Mka_SetEnable
62. Mka_GetEnable
63. Mka_GetPaeStatus
64. Mka_SetPaePermissiveMode
65. Mka_StartPae
66. Mka_GetMacSecStatistics
67. Mka_LinkStateChange
68. Callback 通知
69. Mka_GetMacSecStatisticsNotification
70. Mka_RxIndication
71. Mka_TxConfirmation
72. Mka_MacSecUpdateSecYNotification
73. Mka_MacSecAddTxSaNotification
74. Mka_MacSecAddRxSaNotification
75. Scheduled functions
76. Mka_MainFunction
77. Expected 接口
78. Mandatory 接口
79. Optional 接口
80. Configurable 接口
81. 服务接口
82. 时序图
83. Communication 初始化 with MACsec
84. Communication 初始化 with MACsec and Switch
85. MKA exchange - KeyServer
86. MKA exchange - Peer
87. 配置规范
88. How to read this chapter
89. Containers and 配置 parameters
90. Mka
91. MkaGeneral
92. MkaPaeConfiguration
93. MkaCryptoAlgoConfig
94. MkaCipherSuites
95. MkaPaeInstance
96. MkaPaeRxPdu
97. MkaPaeTxPdu
98. MkaKay
99. MkaKayParticipant
100. MkaKayDemEventParameterRefs
101. MkaSecurityEventRefs
102. 发布信息
103. 附录
104. 不适用需求
105. Change history of AUTOSAR traceable items
106. Traceable item history of this document according to AUTOSAR Release R23-11
107. Added 规范 Items in R23-11
108. Changed 规范 Items in R23-11
109. Deleted 规范 Items in R23-11
110. Added Constraints in R23-11
111. Changed Constraints in R23-11
112. Deleted Constraints in R23-11
113. Traceable item history of this document according to AUTOSAR Release R24-11
114. Added Constraints in R24-11
115. Changed Constraints in R24-11
116. Deleted Constraints in R24-11
117. Added 规范 Items in R24-11
118. Changed 规范 Items in R24-11
119. Deleted 规范 Items in R24-11
120. Traceable item history of this document according to AUTOSAR Release R25-11
121. Added Constraints in R25-11
122. Changed Constraints in R25-11
123. Deleted Constraints in R25-11
124. Added 规范 Items in R25-11
125. Changed 规范 Items in R25-11
126. Deleted 规范 Items in R25-11
