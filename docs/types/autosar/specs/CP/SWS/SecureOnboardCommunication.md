# Specification of Secure Onboard Communication (`SecureOnboardCommunication`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 654 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SecureOnboardCommunication_654\AUTOSAR_CP_SWS_SecureOnboardCommunication.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SecureOnboardCommunication_654\AUTOSAR_CP_SWS_SecureOnboardCommunication.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SecureOnboardCommunication_654\zzgen\CP_SWS_SecureOnboardCommunication.complete.txt`

## 文档简介

This specification is the AUTOSAR Secure Onboard Communication (SecOC) module Software Specification. It is based on AUTOSAR SecOC  and specifies how the requirements of the AUTOSAR SecOC SRS shall be realized. It describes the basic security features, the functionality and the API of the AUTOSAR SecOC module.

The SecOC module aims for resource-efficient and practicable authentication mechanisms for critical data on the level of PDUs. The authentication mechanisms shall be seamlessly integrated with the current AUTOSAR communication systems. The impact with respect to resource consumption should be as small as possible in order to allow protection as add-on for legacy systems. The specification is based on the assumption that mainly symmetric authentication approaches with message authentication codes (MACs) are used. They achieve the same level of security with much smaller keys than asymmetric approaches and can be implemented compactly and efficiently in software and in hardware. However, the specification provides the necessary level of abstraction so that both, symmetric approaches as well as asymmetric authentication approaches can be used.

The SecOC module integrates on the level of the AUTOSAR PduR. Figure  shows the integration of the SecOC module as part of the Autosar communication stack.

In this setting,PduR is responsible to route incoming and outgoing security related I-PDUs to the SecOC module. The SecOC module shall then add or process the security relevant information and shall propagate the results in the form of an I-PDU back to the PduR. PduR is then responsible to further route the I-PDUs.Moreover, the SecOC module makes use of the cryptographic services provided by the CSM and interacts with the Rte to allow key and counter management. The SecOC module shall support all kind of communication paradigms and principles that are supported by PduR, especially Multicast communications, Transport Protocols and the PduR Gateway. The following sections provide a detailed specification of SecOC interfaces, functionality and configuration.

## 模块依赖

This chapter lists all the features from other modules that are used by the AUTOSAR SecOC module and functionalities that are provided by the AUTOSAR SecOC module to other modules. Because the SecOC module deals with I-PDUs that are either sourced or sunk by other modules, care should be taken that shared configuration items are consistent between the modules.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification is the AUTOSAR Secure Onboard Communication (SecOC) module Software Specification. It is based on AUTOSAR SecOC  and specifies how the requirements of the AUTOSAR SecOC SRS shall be realized. It describes the basic security features, the functionality and the API of the AUTOSAR SecOC module.

The SecOC module aims for resource-efficient and practicable authentication mechanisms for critical data on the level of PDUs. The authentication mechanisms shall be seamlessly integrated with the current AUTOSAR communication systems. The impact with respect to resource consumption should be as small as possible in order to allow protection as add-on for legacy systems. The specification is based on the assumption that mainly symmetric authentication approaches with message authentication codes (MACs) are used. They achieve the same level of security with much smaller keys than asymmetric approaches and can be implemented compactly and efficiently in software and in hardware. However, the specification provides the necessary level of abstraction so that both, symmetric approaches as well as asymmetric authentication approaches can be used.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Acronyms, abbreviations and 定义
*原文标题：Acronyms, abbreviations and definitions*

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the SecOC module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| CSM | The AUTOSAR Crypto Service Manager |
| SecOC | Secure Onboard Communication |
| MAC | Message Authentication Code |
| FV | Freshness Value |
| FM | Freshness Manager |

### 4. 定义
*原文标题：Definitions*

For this document the definitions of data integrity, authentication, entity authentication, data origin, message authentication and transaction authentication from  are used:

| Term: | Description: |
|---|---|
| Authentic I-PDU | An Authentic I-PDU is an arbitrary AUTOSAR I-PDU the content of which is secured during network transmission by means of the Secured I-PDU. |

The secured content comprises the complete I-PDU or a part of the I-PDU.
| Authentication | Authentication is a service related to identification. This function applies to both entities and information itself. Two parties entering into a communication should identify each other. Information delivered over a channel should be authenticated as to origin, date of origin, data content, time sent, etc. For these reasons, this aspect of cryptography is usually subdivided into two major classes: entity authentication and data origin authentication. Data origin authentication implicitly provides data integrity (for if a message is modified, the source has changed). |
|---|---|
| Authentication Information | The Authentication Information consists of a Freshness Value (or a part thereof) and an Authenticator (or a part thereof). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for the SecOC module.

Thus, the specification SWS BSW General shall be considered as additional and required specification for the SecOC module.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

This document is applicable for AUTOSAR release 4.3.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The SecOC module is used in all ECUs where secure communication is necessary.

The SecOC module has not been specified to work with MOST and LIN communication networks. With MOST not being specifically supported, the applicability to multimedia and telematic car domains may be limited.

### 10. SomeIpTp constraints

The SecOC module can only be used to secure the whole SomeIpTp message and cannot be used to secure individual segments of a SomeIpTp message.

Following module sequence on transmission side is allowed:

SecOC -> PduR -> SomeIpTp

Following module sequence on transmission side is not allowed:

SomeIpTp -> PduR -> SecOC

The main constraints why the SecOC cannot be used to secure SomeIpTp individual message segments are:

* The SomeIpTp requires a call of `SomeIpTp_TriggerTransmit` to create the SomIpTp header. The SecOC does not support the data provision via TriggerTransmit from the upper layer.
* In case of SOME/IP protocol, the SOME/IP message id can not be protected by SecOC, because it is stripped before SecOC is invoked.

Other constraints:

* SOME/IP-SD can not be protected.
* Gatewaying-on-the-fly is not supported by SecOC.

Available alternatives for securing SOME/IP messages:

* IPsec (Unicast only) Multicast is not supported, see chapter 4.1 of `AUTOSAR_CP_SWS_TcpIp`.pdf. However, possible candidates involving asymmetric cryptography are:

  * GDOI (RFC 6407)
  * MIKEY (RFC 3830)
* MACsec
* TLS over TCP (Unicast only)
* DTLS over UDP (Unicast only)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This chapter lists all the features from other modules that are used by the AUTOSAR SecOC module and functionalities that are provided by the AUTOSAR SecOC module to other modules. Because the SecOC module deals with I-PDUs that are either sourced or sunk by other modules, care should be taken that shared configuration items are consistent between the modules.

### 12. Dependencies to PduR

The SecOC module depends on the API and capabilities of the PduR. It provides the upper and lower layer API functions required by the PDU Router, namely

* the API of the communication interface modules,
* the API of the Transport Protocol Modules,
* the API of the upper layer modules which use transport protocol modules,
* the API of the upper layer modules which process I-PDUs originating from communication interface modules.

To serve the PduR with the results of the security processing, the SecOC module requires the respective API function of the PduR.

### 13. Dependencies to CSM

The SecOC module depends on cryptographic algorithms that are provided in AUTOSAR by the CSM module. The SecOC module requires API functions to generate and verify Cryptographic Signatures or Message Authentication Codes, namely

* the MAC-generate interface (`Csm_MacGenerate`),
* the MAC-verify interface (`Csm_MacVerify`),
* the Signature-generate interface (`Csm_SignatureGenerate`),
* the Signature-verify interface (`Csm_SignatureVerify`),

### 14. Dependencies to the RTE

The SecOC module provides an API with management functions. This API contains the following API functions that are provided as Service Interfaces by the RTE.

* VerificationStatus
* `SecOC_VerifyStatusOverride`.
* VerificationStatusIndication

The API functions are specified in more detail in Section .

The Rte includes the BSW-Scheduler. The SecOC module relies on the BSW-scheduler calling the functions `SecOC_MainFunctionRx` and `SecOC_MainFunctionTx` at a period as configured in SecOCMainFunctionPeriodRx and SecOCMainFunctionPeriodTx.

### 15. Dependencies to Dem

The SecOC module depends on the `Dem_SetEventStatus` API of the Dem. It needs to notify the Dem module with successful and unsuccessful verification of security.

### 16. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Basic SW security events |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Classification of development errors |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| Callback Function Return Types for AUTOSAR BSW |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be nam |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 功能规范
*原文标题：Functional specification*

Authentication and integrity protection of sensitive data is necessary to protect correct and safe functionality of the vehicle systems - this ensures that received data comes from the right ECU and has the correct value.

The SecOC module aims for resource-efficient and practicable authentication mechanisms of sensitive data on the level of PDUs. The approach proposed in this specification generally supports the use of symmetric and asymmetric methods for authenticity and integrity protection. Both methods roughly aim at the same goal and show major similarities in the concept, but there are also some differences due to differing technical properties of the underlying primitives. In addition, the commonly used terms for Authenticator are different. In general, the term Message Authentication Code (MAC) is used for symmetric approaches while the term signature or digital signature refers to asymmetric approaches having different properties and constraints.

In order to ease presentation and improve legibility, the following approach is taken: The subsequent section describes the technical approach using symmetric mechanisms in some detail.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 规范 of the security solution
*原文标题：Specification of the security solution*

The SecOC module as described in this document provides functionality necessary to verify the authenticity and freshness of PDU based communication between ECUs within the vehicle architecture. The approach requires both the sending ECU and the receiving ECU to implement a SecOC module. Both SecOC modules are integrated providing the upper and lower layer PduR APIs on the sender and receiver side. The SecOC modules on both sides generally interact with the PduR module.

To provide message freshness, the SecOC module on the sending and receiving side get freshness from an external Freshness Manager for each uniquely identifiable Secured I-PDU, i.e. for each secured communication link.

On the sender side, the SecOC module creates a Secured I-PDU by adding authentication information to the outgoing Authentic I-PDU. The authentication information comprises of an Authenticator (e.g. Message Authentication Code) and optionally a Freshness Value. Regardless if the Freshness Value is or is not included in the Secure I-PDU payload, the Freshness Value is considered during generation of the Authenticator.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 基础 entities of the security solution
*原文标题：Basic entities of the security solution*

### 20. Authentic I-PDU and Secured I-PDU

The term Authentic I-PDU refers to an AUTOSAR I-PDU that requires protection against unauthorized manipulation and replay attacks.

The payload of a Secured I-PDU consists of the Authentic I-PDU and an Authenticator (e.g. Message Authentication Code). The payload of a Secured I-PDU may optionally include the Freshness Value used to create the Authenticator (e.g. MAC). The order in which the contents are structured in the Secured I-PDU is compliant with .

The length of the Authentic I-PDU, the Freshness Value and the Authenticator within a Secured I-PDU may vary from one uniquely indefinable Secured I-PDU to another.

The Authenticator (e.g. MAC) refers to a unique authentication data string generated using a Key, Data Identifier of the Secured I-PDU, Authentic Payload, and Freshness Value. The Authenticator provides a high level of confidence that the data in an Authentic I-PDU is generated by a legitimate source and is provided to the receiving ECU at the time in which it is intended for.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 数据 covered by Authenticator
*原文标题：Data covered by Authenticator*

The data, on which the Authenticator is calculated, consists of the Data Identifier of the Secured I-PDU (parameter SecOCDataId), Authentic I-PDU data, and the Complete Freshness Value. These are concatenated together respectively to make up the bit array that is passed into the authentication algorithm for Authenticator generation/verification.

| DataToAuthenticator = Data Identifier | secured part of the Authentic I-PDU | Complete Freshness Value |
|---|---|---|

| Note: " | " denotes concatenation |
|---|---|

### 22. Freshness Values

Each Secured I-PDU is configured with at least one Freshness Value. The Freshness Value refers to a monotonic counter that is used to ensure freshness of the Secured I-PDU. Such a monotonic counter could be realized by means of individual message counters, called Freshness Counter, or by a time stamp value called Freshness Timestamp. Freshness Values are to be derived from a Freshness Manager.

  Upstream requirements: ,
⌈
If the parameter SecOCFreshnessValueTruncLength is configured to a smaller length than the actual freshness value, SecOC shall include only the least significant bits of the freshness value up to SecOCFreshnessValueTruncLength within the secured I-PDU.

If the parameter SecOCFreshnessValueTruncLength is configured to 0, the freshness value shall not be included in the secured I-PDU.
⌋

Note: The larger number of bits of the complete Freshness Value included in the authenticated message payload results in a larger window where the receiver remains synchronized with the transmitters Freshness Value without executing a synchronization strategy.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Authentication of I-PDUs

Upstream requirements:
⌈
The creation of a Secured I-PDU and thus the authentication of an Authentic I-PDUconsists of the following six steps:

# Prepare Secured I-PDU
# Construct Data for Authenticator
# Generate Authenticator
# Construct Secured I-PDU
# Increment Freshness Counter
# Broadcast Secured I-PDU
⌋

  Upstream requirements:
⌈
The SecOC module shall prepare the Secured I-PDU. During preparation,SecOC shall allocate the necessary buffers to hold the intermediate and final results of the authentication process.
⌋

  Upstream requirements:
⌈
The SecOC module shall construct the DataToAuthenticator, i.e. the data that is used to calculate the Authenticator. DataToAuthenticator is formed by concatenating the full 16 bit representation of the Data Id (parameter SecOCDataId), the secured part of the Authentic I-PDU and the complete Freshness Value corresponding to SecOCFreshnessValueId in the given order. The Data Id and the Freshness Value shall be encoded in Big Endian byte order for that purpose.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Verification of I-PDUs

Upstream requirements:
⌈
The verification of a Secured I-PDU consists of the following six steps:

* Parse Authentic I-PDU, Freshness Value and Authenticator
* Get Freshness Value from Freshness Manager
* Construct Data to Authentication
* Verify Authentication Information
* Send Confirmation to Freshness Manager
* Pass Authentic I-PDU to upper layer
⌋

  Upstream requirements: ,
⌈
If SecOCRxSecuredPduCollection is used then SecOC shall not perform any verification until it has received both the Authentic I-PDU and Cryptographic I-PDU which make up the Secured I-PDU. Only after both have been received SecOC shall attempt to verify the resulting Secure I-PDU. If `SecOC_VerifyStatusOverride` is used, the verification result and I-PDU are handled according to overrideStatus value.
⌋

Note: This applies to all instances when a Secured I-PDU is received by SecOC from the PduR, which happens in parts as described above when SecOCRxSecuredPduCollection is used. There is no further distinction made throughout this document to avoid duplication and clutter.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Successful verification of I-PDUs

Upstream requirements:
⌈
If the verification of a Secured I-PDU was successful or the status override was set accordingly, the SecOC module shall pass the Authentic I-PDU to the upper layer communication modules using the lower layer interfaces of the PduR.
⌋

### 26. Adaptation in case of asymmetric approach

Although this document consequently uses the terms and concepts from symmetric cryptography, the SecOC module can be configured to use both,symmetric as well as asymmetric cryptographic algorithms.In case of an asymmetric approach using digital signatures instead of the MAC-approach described throughout the whole document, some adaptations have to be made:

# Instead of a shared secret between sender and (all) receivers, a key pair consisting of public key and secret key is used. The secret (or private) key is used by the sender to generate the signature, the corresponding public keys is used by (all) receiver(s) to verify the signature. The private key must not be feasibly computable from the public key and it shall not be assessable by the receivers.
# In order to verify a message, the receiver needs access to the complete signature /output of the signature generation algorithm. Therefore, a truncation of the signature as proposed in the MAC case is NOT possible. The parameter SecOCAuthInfoTruncLength has to be set to the complete length of the signature.
# The signature verification uses a different algorithm then the signature generation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Relationship to PduR

The SecOC module is arranged next to the PDU-Router in the layered architecture of AUTOSAR; see Figure .

  Upstream requirements:
⌈
The SecOC module shall be implemented so that no other modules depend on it and that it is possible to build a system without the SecOC module if it is not needed.
⌋

  Upstream requirements:
⌈
SecOC shall ensure that MetaData received in an authentic PDU will be present unchanged in the corresponding secured PDU, and vice versa.
⌋

### 28. 初始化
*原文标题：Initialization*

The SecOC module provides an initialization function (`SecOC_Init`) as defined in . This function initializes all internal global variables and the buffers to store the SecOC I-PDUs and all intermediate results. The environment of the SecOC shall call `SecOC_Init` before calling any other function of the SecOC module. The implementer has to ensure that `SECOC_E_UNINIT` is returned in development mode in case an API function is called before the module is initialized.

For the I-PDU data transmission pathway through the SecOC module, a buffer is allocated inside the SecOC module. This buffer needs to be initialized because it might be transmitted before it has been fully populated with data by the upper layer of lower layer communication modules.

  Upstream requirements:
⌈
Within `SecOC_Init`, the module shall initialize all internal global variables and the buffers of the SecOC I-PDUs.
⌋

  Upstream requirements:
⌈
The AUTOSAR SecOC module shall fill not used areas of a transmitted Secured or a transmitted Cryptographic Pdu with a value determined by configuration parameter SecOCTxPduUnusedAreasDefault () e.g. 0xFF.
⌋

### 29. Authentication of outgoing PDUs

The term authentication describes the creation of a Secured I-PDU by adding Authentication Information to an Authentic I-PDU. This process is described in general terms in Section . This section refines the general description with respect to requirements arising from the integration with the PduR module considering different bus interfaces and transport protocols. In general, the interaction with the PduR module and the authentication of Authentic I-PDUs are organized according to the following scheme:

# For each transmission request of an Authentic I-PDU, the upper layer communication module shall call the PduR module through PduR_<User:Up>Transmit.
| # The PduR routes this request to the SecOC module and calls SecOC_IfTransmit | SecOC_TpTransmit. |
|---|---|

# The SecOC module copies the Authentic I-PDU to its own memory and returns.
# During the next scheduled call of its main function, the SecOC module creates the Secured I-PDU by calculating the Authentication Information and initiates the transmission of the Secured I-PDU by notifying the respective lower layer module via the PduR module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Authentication during direct transmission

| For transmission of an Authentic I-PDU using bus interfaces that allow ad-hoc transmission (e.g. CanIf), the PDU Router module triggers the transmit operation of the SecOC module for an Authentic I-PDU. In this case, the SecOC module prepares the creation of a Secured I-PDU on basis of the Authentic I-PDU by allocating internal buffer capacities and by copying the Authentic I-PDU to a local buffer location. Afterwards it returns from SecOC_IfTransmit | SecOC_TpTransmit. |
|---|---|

  Upstream requirements:
⌈
The SecOC module shall allocate internal buffer capacities to store the Authentic I-PDU and the Authentication Information in a consecutive memory location.
⌋

The actual creation of the Secured I-PDU is processed during the next subsequent call of the scheduled main function. This includes calculating the Authentication Information according to  and adding the Authentication Information (i.e. the Authenticator and the possibly truncated Freshness Value) consecutively to the buffer location directly behind the Authentic I-PDU. Thereafter, SecOC module triggers the transmission of the Secured I-PDU to the destination lower layer module by calling `PduR_SecOCTransmit` at the PduR.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Authentication during triggered transmission

For transmission of an Authentic I-PDU using bus interfaces that allow triggered transmission (e.g. FrIf), the upper layer is configured in such a way that it calls the PduR module like it normally does for a direct transmission. Thus, the upper layer module immediately provides access to the Authentic I-PDU by providing the required buffer information through PduR_<User:Up>Transmit. The PduR forwards this transmission request to the SecOC module by calling `SecOC_IfTransmit`. Before the SecOC can provide data to the lower layer through the triggered transmission interface at least one previous call of `SecOC_IfTransmit` is required. If `SecOC_TriggerTransmit` is called and no data can be provided E_NOT_OK is returned.

Note: Authentication for triggered transmission is only supported, if the upper layer initiates the transmission by explicitly calling PduR_<User:Up>Transmit in before. Triggered transmission in mode AlwaysTransmit shall not be used.

In turn, the SecOC module allocates sufficient buffer capacities to store the Authentic I-PDU, the Secured I-PDU and all intermediate data of the authentication process.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Authentication during 传输协议 transmission
*原文标题：Authentication during transport protocol transmission*

| For transmission of an Authentic I-PDU using transport protocol transmission (e.g. CanTP, FrTp), the PDU Router module triggers the transmit operation of the SecOC module for an Authentic I-PDU.In this case, the SecOC module prepares the creation of a Secured I-PDU on basis of the Authentic I-PDU by allocation internal buffer capacities and by copying the Authentic I-PDU to a local buffer location. Afterwards it returns from SecOC_IfTransmit | SecOC_TpTransmit. |
|---|---|

The actual creation of the Secured I-PDU is processed during the next following call of the scheduled main function. This includes calculating the Authentication Information according to  and adding the Authentication Information(i.e. the Authenticator and the possibly truncated Freshness Value) consecutively to the buffer location directly behind the Authentic I-PDU.

  Upstream requirements: , ,
⌈
In case SecOCPduType is configured to `SECOC_TPPDU`, then function `SecOC_TpTransmit` shall trigger the transmit operation for an Authentic I-PDU.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 错误处理 and cancellation of transmission
*原文标题：Error handling and cancellation of transmission*

Upstream requirements:
⌈
| If the upper layer module requests a cancellation of an ongoing transmission of the Authentic I-PDU by calling SecOC_IfCancelTransmit | SecOC_TpCancelTransmit, the SecOC module shall immediately inform the lower layer transport protocol module to cancel the ongoing transmission of the Secured I-PDU, stop all internal actions related to the Authentic I-PDU, and free all related buffers. |
|---|---|

⌋

  Upstream requirements:
⌈
When `PduR_SecOCTransmit` returns anything but E_OK, the SecOC shall retry the failed transmission from the next main function up to SecOCMaxTransmitRetries times.
⌋

  Upstream requirements:
⌈
If the lower layer transport protocol module reports an error during transmission of a Secured I-PDU using the return value E_NOT_OK, the SecOC module shall not perform any error handling other than skipping the confirmation of the transmission request for the corresponding Authentic I-PDU to the upper layer module.
⌋

  Upstream requirements: ,
⌈
If the CSM module reports a recoverable error during authentication of an Authentic I-PDU, the SecOC module shall not provide a Secured I-PDU to the lower layer.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Verification of incoming PDUs

The term verification describes the process of comparing the Authentication Information contained in a Secured I-PDU with the Authentication Information calculated on basis of the local Data Identifier, the local Freshness Value and the Authentic I-PDU contained in the Secured I-PDU.

The process of verifying incoming Secured I-PDUs is described in general terms in Section . This section refines the general description with respect to requirements arising from the integration with the PduR module considering different bus interfaces and transport protocols. The overall interaction with the PduR module and the verification of Secured I-PDUs is organized as described in the following scheme:

# For each indication of an incoming Secured I-PDU from a lower layer bus interface or transport protocol module, the SecOC module takes the role of an upper layer communication module and thus serves all lower layer requests that are necessary to receive the complete Secured I-PDU.
# The SecOC module copies the Secured I-PDU into its own memory.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Verification during bus 接口 reception
*原文标题：Verification during bus interface reception*

When a Secured I-PDU is received by means of a lower layer bus interface(e.g. CanIf, FrIf), the PduR module calls `SecOC_RxIndication` to inform the SecOC module for each incoming Secured I-PDU. During the processing of `SecOC_RxIndication`, the SecOC module copies the Authentic I-PDU to its own buffer.

  Upstream requirements: , ,
⌈
During reception of a static length (Secured / Authentic / Cryptographic) I-PDU, i.e. SecOCDynamicRuntimeLengthHandling set to FALSE, by means of a lower layer bus interface and when `SecOC_RxIndication` has been called, the SecOC module shall silently discard this I-PDU in case of the received length is smaller than the configured length.
⌋

Note: Static PDUs will normally be sent with configured length, therefore a mismatch between received length and configured length is seen as an error scenario. Also as static PDUs do not contain header length Information it could lead to errors in case of a shorter length in combination with padding bytes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 165 章（内容从略，见纯文本全文）

36. Verification during 传输协议 reception
37. Skipping Authentication for Secured I-PDUs at SecOC
38. 错误处理 and discarding of reception
39. Gateway functionality
40. Multicore Distribution
41. 安全事件
42. 错误分类
43. Development 错误
44. Runtime 错误
45. Production 错误
46. Extended Production 错误
47. Security Profiles
48. Secured area within a Pdu
49. 概述 of security profiles
50. SecOC Profile 1 (or 24Bit-CMAC-8Bit-FV)
51. SecOC Profile 2 (or 24Bit-CMAC-No-FV)
52. SecOC Profile 3 (or JASPAR)
53. API 规范
54. Imported 类型
55. 类型定义
56. SecOC_ConfigType
57. SecOC_StateType
58. SecOC_ReturnType
59. 功能定义
60. SecOC_Init
61. SecOC_DeInit
62. SecOC_IfTransmit
63. SecOC_TpTransmit
64. SecOC_IfCancelTransmit
65. SecOC_TpCancelTransmit
66. SecOC_TpCancelReceive
67. SecOC_VerifyStatusOverride
68. SecOC_SendDefaultAuthenticationInformation
69. Callback 通知
70. SecOC_RxIndication
71. SecOC_TpRxIndication
72. SecOC_TxConfirmation
73. SecOC_TpTxConfirmation
74. SecOC_TriggerTransmit
75. SecOC_CopyRxData
76. SecOC_CopyTxData
77. SecOC_StartOfReception
78. CSM callback 接口
79. Callout 定义
80. SecOC_GetRxFreshness
81. SecOC_GetRxFreshnessAuthData
82. SecOC_GetTxFreshness
83. SecOC_GetTxFreshnessTruncData
84. SecOC_SPduTxConfirmation
85. Scheduled functions
86. SecOC_MainFunctionRx
87. SecOC_MainFunctionTx
88. Expected 接口
89. Mandatory 接口
90. Optional 接口
91. Configurable 接口
92. SecOC_VerificationStatusCallout
93. SecOC_VerifyStatus
94. 服务接口
95. 概述
96. Sender-Receiver-Interfaces
97. Verification Status 服务
98. Client-Server-Interfaces
99. Verification Status 配置服务
100. FreshnessManagement
101. Sending Default Authentication Information 配置服务
102. Verification Status Provision 服务
103. Implementation 数据类型
104. SecOC_FreshnessArrayType
105. SecOC_VerificationResultType
106. SecOC_VerificationStatusType
107. SecOC_OverrideStatusType
108. Ports
109. Freshness 管理
110. 时序图
111. Authentication of outgoing PDUs
112. Authentication during direct transmission
113. Authentication during triggered transmission
114. Authentication during 传输协议 transmission
115. Authentication with 上层 layer 传输协议
116. Verification of incoming PDUs
117. Verification during direct reception
118. Verification during 传输协议 reception
119. Verification with 上层 layer 传输协议
120. Verification Reporting to Dem
121. Re-authentication Gateway
122. Freshness 处理
123. 配置规范
124. How to read this chapter
125. Containers and 配置 parameters
126. SecOC
127. SecOCGeneral
128. SecOCSecurityEventRefs
129. SecOCMainFunctionRx
130. SecOCMainFunctionTx
131. SecOCSameBufferPduCollection
132. SecOCRxPduProcessing
133. SecOCRxSecuredPduLayer
134. SecOCRxSecuredPdu
135. SecOCRxAuthenticPduLayer
136. SecOCRxSecuredPduCollection
137. SecOCRxCryptographicPdu
138. SecOCRxAuthenticPdu
139. SecOCTxPduProcessing
140. SecOCTxAuthenticPduLayer
141. SecOCTxSecuredPduLayer
142. SecOCTxSecuredPdu
143. SecOCTxSecuredPduCollection
144. SecOCTxAuthenticPdu
145. SecOCTxCryptographicPdu
146. SecOCUseMessageLink
147. SecOCTxPduSecuredArea
148. SecOCRxPduSecuredArea
149. 发布信息
150. 附录
151. 附录 A：Application hints for the development of SW-C Freshness Value 管理器
152. 概述 of freshness value construction
153. Freshness Value Based on Single Freshness Counter
154. Construction
155. Verification of I-PDUs
156. Freshness Value Based on Single Freshness Timestamp
157. Source of global time values
158. Resolution and precision of global time values
159. Verification of I-PDUs
160. Freshness Value Based on 多 Freshness Counters (Prerequisite：Truncated Freshness Value)
161. 定义 of Freshness Value
162. 结构 of Freshness Value
163. 规范 of counters used to construct Freshness Value
164. 同步 Message Format
165. Processing of FV 管理 Master
166. Processing of 初始化
167. Sending of 同步 Message
168. Processing of Slave ECUs
169. Processing of 初始化
170. Receiving of 同步 Message
171. Construction of Freshness Value for Transmission
172. Construction of Freshness Value for Reception
173. Freshness Value Based on 多 Freshness Counters (Prerequisite：Complete Freshness Value)
174. 定义 of Freshness Value
175. 结构 of Freshness Value
176. 规范 of counters used to construct Freshness Value
177. Processing of Sender ECU and FV 管理 Master ECU
178. Processing of 初始化
179. Construction of Freshness Value for Transmission
180. Processing of Receiver ECU
181. Processing of 初始化
182. Verification of I-PDUs
183. Successful verification of I-PDUs
184. 不适用需求
185. Mentioned Class Tables
186. Change history of AUTOSAR traceable items
187. Traceable item history of this document according to AUTOSAR Release R24-11
188. Added 规范 Items in R24-11
189. Changed 规范 Items in R24-11
190. Deleted 规范 Items in R24-11
191. Added Constraints in R24-11
192. Changed Constraints in R24-11
193. Deleted Constraints in R24-11
194. Traceable item history of this document according to AUTOSAR Release R25-11
195. Added 规范 Items in R25-11
196. Changed 规范 Items in R25-11
197. Deleted 规范 Items in R25-11
198. Added Constraints in R25-11
199. Changed Constraints in R25-11
200. Deleted Constraints in R25-11
