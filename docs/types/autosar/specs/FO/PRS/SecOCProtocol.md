# Specification of Secure Onboard Communication Protocol (`SecOCProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 969 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_SecOCProtocol_969\AUTOSAR_FO_PRS_SecOCProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_SecOCProtocol_969\AUTOSAR_FO_PRS_SecOCProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_SecOCProtocol_969\zzgen\FO_PRS_SecOCProtocol.complete.txt`

## 文档简介

Authentication and integrity protection of sensitive data is necessary to protect correct and safe functionality of the vehicle systems - this ensures that received data comes from the right ECU and has the correct value.

The SecOC protocol as described in this document provides a mechanism to verify the authenticity and freshness of PDU based communication between ECUs within the vehicle architecture. The approach requires both the sending ECU and the receiving ECU to implement a SecOC module.

On the sender side, the SecOC module creates a Secured I-PDU by adding authentication information to the outgoing Authentic I-PDU. The authentication information comprises of an Authenticator (e.g. Message Authentication Code) and optionally a Freshness Value. Regardless if the Freshness Value is or is not included in the Secure I-PDU payload, the Freshness Value is considered during generation of the Authenticator. On the receiver side, the SecOC module checks the freshness and authenticity of the Authentic I-PDU by verifying the authentication information that has been appended by the sending side SecOC module. To verify the authenticity and freshness of an Authentic I-PDU, the Secured I-PDU provided to the receiving side SecOC should be the same Secured I-PDU provided by the sending side SecOC and the receiving side SecOC should have knowledge of the Freshness Value used by the sending side SecOC during creation of the Authenticator.

## 模块依赖

The interaction of SecOC with the lower layer of the communication stack will depend on the on the platform architecture (AP or CP), and in the case of a CP implementation, it will also depend on the type of transmission: direct transmission, triggered transmission or transport protocol. These design specific dependencies are not part of the protocol specification.

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

Authentication and integrity protection of sensitive data is necessary to protect correct and safe functionality of the vehicle systems - this ensures that received data comes from the right ECU and has the correct value.

The SecOC protocol as described in this document provides a mechanism to verify the authenticity and freshness of PDU based communication between ECUs within the vehicle architecture. The approach requires both the sending ECU and the receiving ECU to implement a SecOC module.

On the sender side, the SecOC module creates a Secured I-PDU by adding authentication information to the outgoing Authentic I-PDU. The authentication information comprises of an Authenticator (e.g. Message Authentication Code) and optionally a Freshness Value. Regardless if the Freshness Value is or is not included in the Secure I-PDU payload, the Freshness Value is considered during generation of the Authenticator. On the receiver side, the SecOC module checks the freshness and authenticity of the Authentic I-PDU by verifying the authentication information that has been appended by the sending side SecOC module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

The SecOC protocol aims for resource-efficient and appropriate authentication mechanisms for critical data on the level of PDUs. The authentication mechanisms shall be seamlessly integrated with the current AUTOSAR communication systems. The impact with respect to resource consumption should be as small as possible in order to allow protection as add-on for legacy systems. The specification is based on the assumption that mainly symmetric authentication approaches with message authentication codes (MACs) are used. They achieve the same level of security with much smaller keys than asymmetric approaches and can be implemented compactly and efficiently in software and in hardware. However, the specification provides the necessary level of abstraction so that both, symmetric approaches as well as asymmetric authentication approaches can be used.

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

The SecOC protocol is used in all ECUs where secure communication is necessary.

### 4. 约束与假设
*原文标题：Constraints and assumptions*

### 5. Adaptation in case of asymmetric approach

Although this document consequently uses the terms and concepts from symmetric cryptography, the SecOC protocol supports both symmetric and asymmetric cryptographic algorithms. In case of an asymmetric approach using digital signatures instead of the MAC-approach described throughout the whole document, some adaptations must be made:

# Instead of a shared secret between sender and (all) receivers, a key pair consisting of public key and secret key is used. The secret (or private) key is used by the sender to generate the signature, the corresponding public keys is used by (all) receiver(s) to verify the signature. The private key must not be feasibly computable from the public key and it shall not be assessable by the receivers.
# In order to verify a message, the receiver needs access to the complete signature / output of the signature generation algorithm. Therefore, a truncation of the signature as proposed in the MAC case is NOT possible. The parameter SecOCAuthInfoTruncLength has to be set to the complete length of the signature.
# The signature verification uses a different algorithm then the signature generation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 限制
*原文标题：Limitations*

The protocol specification aims to ensure compatibility between AP and CP, and it assumes the communication is realized over ethernet.

Depending of the communication paradigm between AP and CP, the functionality of the protocol is limited. In the case of SOME/IP, the protocol will not support separate transmission of Authentic PDU and Cryptographic PDU and will not support usage of part of the payload as freshness information. (the details are described in the chapter Configuration Parameters.)

### 7. Dependencies

### 8. Dependencies to other 协议 layers
*原文标题：Dependencies to other protocol layers*

The interaction of SecOC with the lower layer of the communication stack will depend on the on the platform architecture (AP or CP), and in the case of a CP implementation, it will also depend on the type of transmission: direct transmission, triggered transmission or transport protocol. These design specific dependencies are not part of the protocol specification.

### 9. Dependencies to other standards and norms

IEC 7498-1 The Basic Model, IEC Norm, 1994

 National Institute of Standards and Technology (NIST): FIPS-180-4, Secure Hash Standard (SHS), March 2012, available electronically at http://csrc.nist.gov/publications/fips/fips180-4/fips-180-4.pdf

 FIPS Pub 197: Advanced Encryption Standard (AES), U.S. Department of Commerce, Information Technology Laboratory (ITL), National Institute of Standards and Technology (NIST), Gaithersburg, MD, USA, Federal Information Processing Standards Publication, 2001, electronically available at http://csrc.nist.gov/publications/fips/fips197/fips-197.pdf

### 10. Dependencies to the Application Layer

The SecOC protocol does not have dependencies to typical Automotive application. However, it relies on the existence of a software component that provides a freshness information. In addition, there could also be specialized applications that trigger a modification in SecOC behavior (e.g. for development purpose) or applications that monitor the verification results.

### 11. Use Cases

| ID | Name | Description |
|---|---|---|
| UC_001 | SecOC SOME/IP | Secure communication between AP and CP using SOME/IP |
| UC_002 | SecOC SignalBased | Secure communication between AP and CP using signal-based communication and SignalToService translation |

### 12. 协议需求
*原文标题：Protocol Requirements*

### 13. 需求 Traceability
*原文标题：Requirements Traceability*

| Requirement | Description | Satisfied by |
|---|---|---|
| Selection of Authentic I-PDU |  |  |
| Range of verification retry by the receiver |  |  |
| Configuration of different security properties / requirements |  |  |
| Initialisation of security information |  |  |
| Creation of a Secured I-PDU from an Authentic I-PDU |  |  |
| Verification retry by the receiver |  |  |
| Communication security is available for all communication paradigms of AUTOSAR |  |  |
| Transmitted PDU authentication failure handling |  |  |
| Received PDU verification failure handling |  |  |
| Flexible freshness construction |  |  |
| Support of padding at lower layer modules and dynamic length Authentic I-PDUs |  |  |

### 14. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 15. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| FM | Freshness Manager |
| FV | Freshness Value |
| MAC | Message Authentication Code |
| SecOC | Secure Onboard Communication |

### 16. 定义 of terms
*原文标题：Definition of terms*

| Terms: | Description: |
|---|---|
| Authentic I-PDU | An Authentic I-PDU is an arbitrary AUTOSAR I-PDU the content of which is secured during network transmission by means of the Secured I-PDU. The secured content comprises the complete I-PDU or a part of the I-PDU. |
| Authentication | Authentication is a service related to identification. This function applies to both entities and information itself. Two parties entering into a communication should identify each other. Information delivered over a channel should be authenticated as to origin, date of origin, data content, time sent, etc. For these reasons, this aspect of cryptography is usually subdivided into two major classes: entity authentication and data origin authentication. Data origin authentication implicitly provides data integrity (for if a message is modified, the source has changed). |
| Authentication Information | The Authentication Information consists of a Freshness Value (or a part thereof) and an Authenticator (or a part thereof). Authentication Information are the additional pieces of information that are added by SecOC to realize the Secured I-PDU. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 协议规范
*原文标题：Protocol specification*

### 18. 规范 of the security solution
*原文标题：Specification of the security solution*

The SecOC protocol as described in this document provides a mechanism to verify the authenticity and freshness of PDU based communication between ECUs within the vehicle architecture. The approach requires both the sending ECU and the receiving ECU to implement a SecOC module.

On the sender side, the SecOC module creates a Secured I-PDU by adding Authentication Information to the outgoing Authentic I-PDU. The Authentication Information comprises of an Authenticator (e.g. Message Authentication Code) and optionally a Freshness Value. Regardless if the Freshness Value is or is not included in the Secure I-PDU payload, the Freshness Value is considered during generation of the Authenticator.

On the receiver side, the SecOC module checks the freshness and authenticity of the Authentic I-PDU by verifying the Authentication Information that has been appended by the sending side SecOC module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 基础 entities of the security solution
*原文标题：Basic entities of the security solution*

The term Authentic I-PDU refers to an AUTOSAR I-PDU that requires protection against unauthorized manipulation and replay attacks.

The payload of a Secured I-PDU consists of the Authentic I-PDU and an Authenticator (e.g. Message Authentication Code). The payload of a Secured I-PDU may optionally include the Freshness Value used to create the Authenticator (e.g. MAC). The order in which the contents are structured in the Secured I-PDU is compliant with .

The length of the Authentic I-PDU, the Freshness Value and the Authenticator within a Secured I-PDU may vary from one uniquely indefinable Secured I-PDU to another.

The Authenticator (e.g. MAC) refers to a unique authentication data string generated using a Key, Data Identifier of the Secured I-PDU, Authentic Payload, and Freshness Value. The Authenticator provides a high level of confidence that the data in an Authentic I-PDU is generated by a legitimate source and is provided to the receiving ECU at the time in which it is intended for.

Depending on the authentication algorithm used to generate the Authenticator, it may be possible to truncate the resulting Authenticator (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Authentication of I-PDUs

Upstream requirements: ,
⌈
The creation of a Secured I-PDU consists of the following steps in this order:

# Generate Authenticator.
# Construct Secured I-PDU.
# Increment Freshness Counter.

It shall be ensured that the Authenticator is generated before the freshness counter is incremented.
⌋

  Upstream requirements: ,
⌈
If the Freshness value calculation or the authenticator calculation fails and a default Pattern is configured by parameter SecOCDefaultAuthenticationInformationPattern, then Secured I-PDU shall use the default pattern for all the bytes of Freshness Value and Authenticator.
⌋

  Upstream requirements: ,
⌈
If the Freshness value calculation or the authenticator calculation fails and a default Pattern is not configured by parameter SecOCDefaultAuthenticationInformationPattern, then Secured I-PDU shall be dropped.
⌋

| Note: Example: SecOCFreshnessValueTxLength = 4bits SecOCAuthInfoTxLength = 20 bits SecOCDefaultAuthenticationInformationPattern = 0xA5 The resulting default Authentication Information within the secured PDU would be 0x05 (Truncated Freshness Value) | 0xA5 0xA5 0xA0 (Truncated Authenticator). " | " denotes concatenation. |
|---|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Verification of I-PDUs

Upstream requirements: ,
⌈
The verification of a Secured I-PDU consists of the following 3 steps:

# Calculate the expected Freshness Value.
# Construct Data for Authentication.
# Verify Authentication Information.
⌋

  Upstream requirements: ,
⌈
If the verification of the Authenticator could be successfully executed but the verification failed (e.g. the MAC verification has failed or the key was invalid), the authentication verify attempt counter shall be incremented, and the freshness value shall be updated to the next valid value.
⌋

  Upstream requirements: , ,
⌈
If the authentication verify attempt counter has reached the threshold of the SecOCAuthenticationVerifyAttempts on a failed verify attempt, then the received PDU shall be discarded.
⌋

  Upstream requirements: ,
⌈
If the parameter SecOCEnableForcedPassOverride is true, then the SecOC shall provide a mechanism to allow reception of the PDUs that failed in authentication.
⌋

  Upstream requirements: ,
⌈
| The data that is used to calculate the Authenticator (DataToAuthenticator) on the receiver side shall be constucted. This data is comprised of SecOCDataId | AuthenticIPDU | FreshnessVerifyValue. |
|---|---|---|

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Successful verification of I-PDUs

Upstream requirements: , ,
⌈
If the verification of a Secured I-PDU was successful or the status override was set accordingly, the SecOC module shall pass the Authentic I-PDU to the upper layer communication modules using the lower layer interfaces of the communication stack.
⌋

### 23. 错误处理 and discarding of reception
*原文标题：Error handling and discarding of reception*

Upstream requirements: ,
⌈
If SecOC has received both an Authentic I-PDU and a Cryptographic PDU and the verification of the resulting Secured I-PDU fails, both the Authentic and Cryptographic I-PDU shall remain buffered and verification shall be reattempted each time new data for any of them is received.
⌋

Note: This and the above requirement ensure that even if either an Authentic I-PDU or a Cryptographic I-PDU is lost in transit, SecOC will still function as expected as soon as an Authentic I-PDU and its corresponding Cryptographic I-PDU are received in direct succession.

### 24. 错误检测
*原文标题：Error detection*

### 25. Security Profiles

### 26. 概述 of security profiles
*原文标题：Overview of security profiles*

Secure Onboard Communication protocol allows multiple cryptographic algorithms and modes for the MAC calculation and how the truncation of the MAC and freshness value(if applicable) shall be done.The security profiles provide a consistent set of values for a subset of configuration parameters that are relevant for the configuration of Secure Onboard Communication.

  Upstream requirements: , , ,
⌈
Each Security Profile shall provide the configuration values for the authentication algorithm (parameter algorithmFamily, algorithmMode and algorithmSecondaryFamily in CryptoServicePrimitive), length of freshness Value, if applicable (parameter SecOCFreshnessValueLength), length of truncated Freshness Value (parameter SecOCFreshnessValueTruncLength), length of truncated MAC (parameter SecOCAuthInfoTruncLength), and a description of the profile.
⌋

### 27. SecOC Profile 1 (or 24Bit-CMAC-8Bit-FV)

Upstream requirements: , , ,
⌈
Using the CMAC algorithm based on AES-128 according to NIST SP 800-38B to calculate the MAC, use the eight least significant bit of the freshness value as truncated freshness value and use the 24 most significant bits of the MAC as truncated MAC.
⌋

| Parameter | Configuration value |
|---|---|
| The algorithm for the MAC (parameter algorithmFamily) | CRYPTO_ALGOFAM_AES |
| The algorithm mode for the MAC (parameter algorithmMode) | CRYPTO_ALGOMODE_CMAC |
| Additional algorithm family configuration (parameter algorithmSecondaryFamily, not used in this profile) | CRYPTO_ALGOFAM_NOT_SET |
| Length of Freshness Value (parameter SecOCFreshnessValueLength) | Not Specified |
| Length of truncated Freshness Value (parameter SecOCFreshnessValueTruncLength | 8 bits |
| Length of truncated MAC (parameter SecOCAuthInfoTruncLength) | 24 bits |

### 28. SecOC Profile 2 (or 24Bit-CMAC-No-FV)

Upstream requirements: , , ,
⌈
Using the CMAC algorithm based on AES-128 according to NIST SP 800-38B to calculate the MAC, don't use any freshness value at all and use the 24 most significant bits of the MAC as truncated MAC. The profile shall only be used if no synchronized freshness value is established. There is no restriction to a special bus.
⌋

| Parameter | Configuration value |
|---|---|
| The algorithm for the MAC (parameter algorithmFamily) | CRYPTO_ALGOFAM_AES |
| The algorithm mode for the MAC (parameter algorithmMode) | CRYPTO_ALGOMODE_CMAC |
| Additional algorithm family configuration (parameter algorithmSecondaryFamily, not used in this profile) | CRYPTO_ALGOFAM_NOT_SET |
| Length of Freshness Value (parameter SecOCFreshnessValueLength) | 0 |
| Length of truncated Freshness Value (parameter SecOCFreshnessValueTruncLength | 0 bits |
| Length of truncated MAC (parameter SecOCAuthInfoTruncLength) | 24 bits |

### 29. SecOC Profile 3 (or JASPAR)

Upstream requirements: , , ,
⌈
This profile depicts one configuration and usage of the JasPar counter base FV with Master-Slave Synchronization method. It uses the CMAC algorithm based on AES-128 according to NIST SP 800-38B Appendix-A to calculate the MAC. Use the 4 least significant bits of the freshness value as truncated freshness value and use the 28 most significant bits of the MAC as truncated MAC. Freshness Value provided to SecOC shall be constructed as described in the . The profile shall be used for CAN.
⌋

| Parameter | Configuration value |
|---|---|
| The algorithm for the MAC (parameter algorithmFamily) | CRYPTO_ALGOFAM_AES |
| The algorithm mode for the MAC (parameter algorithmMode) | CRYPTO_ALGOMODE_CMAC |
| Additional algorithm family configuration (parameter algorithmSecondaryFamily, not used in this profile) | CRYPTO_ALGOFAM_NOT_SET |
| Length of Freshness Value (parameter SecOCFreshnessValueLength) | 64 bits |
| Length of truncated Freshness Value (parameter SecOCFreshnessValueTruncLength | 4 bits |
| Length of truncated MAC (parameter SecOCAuthInfoTruncLength) | 28 bits |

### 30. 配置 parameters
*原文标题：Configuration parameters*

The table below describes the configuration parameters for the protocol. For the communication between AP and CP using SOME/IP network binding or raw data streaming, the protocol has a reduced functionality, therefore some parameters are not available in AP or they are implementation specific. These are described in column "Applicability to AP SOME/IP network binding". As a consequence, the requirements referring these parameters are not applicable either. The parameters that are not available are because following features are not available:

* It is not possible to use part of the Authentic PDU to construct as freshness information
* It is not possible to separate the Secure PDU in two different PDUs: Authentic and Cryptographic PDUs
* Provision of Freshness value already truncated by FM (the truncation is always done by SecOC)

The parameters defined in the table below will be referenced in the PRS to represent the configurable parameters or configurability in the SecOC protocol . They are not directly related to the Autosar Classic EcuC or the Autosar Adaptive Manifest.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 协议 usage and 指南
*原文标题：Protocol usage and guidelines*

This chapter has no content.

### 32. References

### 33. 附录
*原文标题：Appendix*

### 34. Change history of AUTOSAR traceable items

### 35. Change History of this document according to AUTOSAR Release R25-11

### 36. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 37. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 38. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 39. Change History of this document according to AUTOSAR Release R24-11

### 40. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

### 41. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 42. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*
