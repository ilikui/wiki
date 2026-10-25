# Requirements on Crypto Stack (`CryptoStack`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 426 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_CryptoStack_426\AUTOSAR_CP_RS_CryptoStack.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_CryptoStack_426\AUTOSAR_CP_RS_CryptoStack.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_CryptoStack_426\zzgen\CP_RS_CryptoStack.complete.txt`

## 文档简介

This document specifies the requirements of the crypto stack:

*
*
*
*

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document specifies the requirements of the crypto stack:

*
*
*
*

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to CryptoStack that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| μC | Microcontroller |
| AES | Advanced Encryption Standard |
| CBC | Cipher Block Chaining |
| CDD | Complex Device Driver |
| CFB | Cipher Feedback |
| CMAC | Cipher-based Message Authentication Code |
| CPU | Central Processing Unit |
| CRYPTO / Crypto | Crypto Driver |
| CRYIF / CryIf | Crypto Interface |
| CSM / Csm | Crypto Service Manager |
| DET / Det | Default Error Tracer |
| ECB | Electronic Code Book |
| ECC | Elliptic Curve Cryptography |
| ECDH | Elliptic Curve Diffie-Hellman |
| ECDSA | Elliptic Curve Digital Signature Algorithm |
| ECU | Electronic Control Unit |
| GCM | Galois Counter Mode |
| GMAC | Galois-based Message Authentication Code |
| HMAC | Hash-based Message Authentication Code |
| HSM / Hsm | Hardware Security Module |
| HW | HardWare |
| KEM | Key Encapsulation Mechanism |
| KeyM | Key Manager |
| MAC | Message Authentication Code |
| MCAL | Micro Controller Abstraction Layer |
| OEM | Original Equipment Manufacturer |
| OFB | Output Feedback |
| PKI | Public Key Infrastructure |
| PRNG | Pseudo-Random Number Generator |
| RACE | Rapid Automatic Cryptographic Equipment |
| RAM | Random Access Memory |

RIPEM

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the CryptoStack.

### 5. 功能概述
*原文标题：Functional Overview*

The Crypto Stack offers a standardized access to cryptographic services for applications and system functions.

The cryptographic services are, e.g., the computation of hashes, the verification of asymmetrical signatures, or the symmetrical encryption of data. These services depend on underlying cryptographic primitives and cryptographic schemes. The CSM shall make it possible for different applications to use the same service but using different underlying primitives and/or schemes. E.g., one application might need to use the hash service to compute an SHA2 digest and another might need to compute an SHA1 digest. Or one application might need to verify a signature which has been computed with the RSASSA-PKCS1-V1_5 signature scheme and using SHA1 as an underlying hash primitive, while another application might need to verify a signature computed with a different scheme which uses SHA2 as an underlying hash primitive. The Crypto Stack shall make it possible to configure which services are needed and to create several configurations for each service where schemes and primitives can be chosen.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Supported Algorithms

The following cryptographic algorithms or primitives should be supported by the Crypto Stack:

* Random Number Generation

  * Deterministic Random Number Generator (DRNG)
  * True Random Number Generator (TRNG)
* Symmetric Encryption

  * AES

    * Key Length: 128 and 256 bits
    * Modes: ECB, CBC, CTR, GCM, OFB, CFB, XTS
  * PRESENT

    * Key Length: 128 bits
    * Modes: ECB, CBC, CTR, GCM, OFB, CFB, XTS
  * ChaCha12/ChaCha20

    * Key Length: 256 bits
* AEAD

  * AES GCM
  * ChaCha20 and POLY1305
* Asymmetric Encryption/Decryption and Signature Handling

  * RSA

    * Key Length: 1024, 2048, 3072, 4096
    * Padding: PKCS#1 v2.2
  * ECDSA

    * Key Length: 256 bits
    * Curve: NIST P-256
  * Ed25519
* Hash

  * SHA-2

    * Length: 224, 256, 384, 512
  * SHA-3

    * Length: 224, 256, 384, 512
  * BLAKE

    * Length: 224, 256, 384, 512
  * RIPEMD-160
* MAC

  * CMAC
  * GMAC
  * HMAC
  * POLY1305
* Key exchange:

  * ECDH

    * Key Length: 256 bits
    * Curve: NIST P-256
  * X25519

### 7. 功能性需求
*原文标题：Functional Requirements*

### 8. Crypto Stack

### 9. 通用
*原文标题：General*

Synchronous Job Processing
⌈
| Description: | Some crypto services shall allow synchronous job processing. |
|---|---|
| Rationale: | There are some crypto services which can be calculated very fast and are required very fast. Then, the overhead of the asynchronous job processing including main function calls and call back functions, is too big. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | MAC generation for the SecOC module |
| Supporting Material: | - |

⌋

 Asynchronous Job Processing
⌈
| Description: | Some crypto services shall allow asynchronous job processing. |
|---|---|
| Rationale: | There are some crypto services which require a lot of time or are executed in an HSM. Then, synchronous job processing would require too much time. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Signature verification |
| Supporting Material: | - |

⌋

 The crypto stack shall be able to incorporate modules of the crypto library
⌈
| Description: | The crypto stack shall be able to incorporate modules of a crypto library. |
|---|---|
| Rationale: | The crypto library itself has to be available in the AUTOSAR stack. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | SW implementation of cryptographic primitives. |
| Supporting Material: | - |

⌋

### 10. 配置
*原文标题：Configuration*

The Crypto Stack shall provide scalability for the cryptographic features
⌈
| Description: | The Crypto Stack shall guarantee that the unused cryptographic features are not compiled into the binary. |
|---|---|
| Rationale: | Different security features require different encryption solutions (example: symmetric/asymmetric encryption, hashing) with or without hardware support. The hardware profiles available offer different features (example: internal NVM, random number generator, secure CPU core...). Scalability of cryptographic features allow different strategies for implementation if some features are not required and thus minimize SW or HW resource utilization. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The mapping between crypto stack and the functionalities of microcontroller hardware allows hardware vendors to develop generic drivers for their HSMs. |
| Supporting Material: | - |

⌋

 The Crypto Stack shall allow static configuration of keys used for cryptographic jobs
⌈
| Description: | The Crypto Stack shall allow static configuration of symmetric and asymmetric key pairs used for crypto services. |
|---|---|
| Rationale: | It shall be possible to use keys individually. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 初始化
*原文标题：Initialization*

None

### 12. Normal Operation

The Crypto Stack shall support reentrancy for all crypto services
⌈
| Description: | The Crypto Stack shall support reentrancy of crypto related interfaces to enable parallel operations of the same or different type when requested by multiple users. |
|---|---|

This requirement also covers scenarios where applications are residing on different cores.
| Rationale: | Crypto jobs shall be processable simultaneously |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Different applications may use cryptographic services in parallel. Handling of different tasks at the same time is necessary. |
| Supporting Material: | - |

⌋

 The Crypto Stack shall conceal symmetric keys from the users of crypto services
⌈
| Description: | There shall be no interface to extract symmetric key values directly to the user. Keys shall be addressed via identifiers by the users. |
|---|---|

Such keys shall only be exported in an encrypted format.
| Rationale: | If keys are stored in the application, this increases the chances of invalidation of keys or keys being compromised. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Keys residing in the HSM |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 关机 Operation
*原文标题：Shutdown Operation*

None

### 14. Fault Operation

None

### 15. Key 管理器
*原文标题：Key Manager*

### 16. 通用
*原文标题：General*

Key manager operation shall either run synchronously or asynchronously.
⌈
| Description: | A key manager operation shall support synchronous mode or asynchronous mode, if the computation takes a long time. . For the latter case, a callback shall indicate that an operation has been completed. |
|---|---|
| Rationale: | To avoid multiple task activation a key management operation shall be executed in the background. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Key derivation can take considerable amount of time |
| Supporting Material: | Concept 636 "Security Extensions" - C2 |

⌋

 Key manager shall provide interfaces to generate or update key material.
⌈
| Description: | The KeyM module shall provide an API allowing a software component or DCM to generate or update the key material for an ECU. KeyM shall use the CSM for the required cryptographic operations and key storage |
|---|---|
| Rationale: | A basic software module e.g. DCM or software component) triggers to generate or re-generate key material. The KeyM generates the key material and stores it in the crypto driver by calling the appropriate functions of the CSM. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 配置
*原文标题：Configuration*

Keys in the crypto stack can be uniquely identified
⌈
| Description: | All keys maintained by KeyM must be uniquely addressed so that new key material provided by the key server can be assigned to the corresponding key in the crypto driver. |
|---|---|
| Rationale: | A symbolic identification is required so that KeyM can uniquely identify which key is used by a corresponding job. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | C2 - Key Management |
| Supporting Material: | Concept 636 "Security Extensions" - C2 |

⌋

 Crypto driver shall place keys into specific key slots
⌈
| Description: | A key shall be placed to a specific key slot. This is required for the SHE to provide the correct key update information. |
|---|---|
| Rationale: | The SHE update protocol information includes the slot of the key that shall be updated. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | C2 - Key Management |
| Supporting Material: | Concept 636 "Security Extensions" - C2 |

⌋

 KeyM shall be highly configurable to support different OEM use cases
⌈
| Description: | The key management provides various options like certificate handling, key management operation. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 初始化
*原文标题：Initialization*

Keys shall use a default value if configured
⌈
| Description: | It shall be possible to configure KeyM to use key default values. |
|---|---|
| Rationale: | A key server may not be available during development of a secure system. So it should be possible to configure default keys which can be used during development. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | System tests during development phase. |
| Supporting Material: | Concept 636 "Security Extensions" - C2 |

⌋

 Keys shall not be used if they are empty or corrupted
⌈
| Description: | A key that has no default value or has been programmed but its contents cannot be retrieved shall be marked as invalid and is therefore not usable. |
|---|---|
| Rationale: | A system that has no properly initialized keys shall not provide any undetermined cryptographic results. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | C2 - Key Management |
| Supporting Material: | Concept 636 "Security Extensions" - C2 |

⌋

### 19. Normal Operation

Key material shall be securely stored either in NVM or CSM
⌈
| Description: | The KeyM shall use CSM interfaces for securely storing keys. |
|---|---|
| Rationale: | Off-board generated keys and on-board generated keys have to be securely stored. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | C2 - Key Management |
| Supporting Material: | Concept 636 "Security Extensions" - C2 |

⌋

 Provide a proof that the key has been programmed correctly
⌈
| Description: | The KeyM shall provide interfaces for providing a proof for correctly programmed keys. |
|---|---|

A verification function can be used to provide a proof to the key server if the correct key is programmed and associated with a specific job.
| Rationale: | Verification of a succesful key installation. A key provider may want to check if the key has been programmed correctly. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | C2 - Key Management |
| Supporting Material: | Concept 636 "Security Extensions" - C2 |

⌋

### 20. 关机 Operation
*原文标题：Shutdown Operation*

Cleanup all key material on shutdown operation
⌈
| Description: | Keys may be temporarily stored in RAM. A shutdown operation may cleanup these keys by removing the key data from RAM. |
|---|---|
| Rationale: | Keys may be stored during shutdown operation. |

For security reason, keys in RAM shall be destroyed.
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | C2 - Key Management |
| Supporting Material: | Concept 636 "Security Extensions" - C2 |

⌋

### 21. Fault Operation

Pass security related events to security event memory (SEM) for secure logging
  Status: DRAFT
⌈
| Description: | The KeyM shall use the interfaces provided by the security event memory for secure logging of security related events which are produced by KeyM. |
|---|---|
| Rationale: | Events such as failed key negotiation are security related events which need to be logged. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | C2 - Key Management |
| Supporting Material: | Concept 636 "Security Extensions" - C2 |

⌋

### 22. Crypto 服务管理器
*原文标题：Crypto Service Manager*

### 23. 通用
*原文标题：General*

Each primitive of the CRYIF shall belong to exactly one service of the CSM
⌈
| Description: | Each primitive of the CRYIF shall belong to exactly one service of the CSM. |
|---|---|
| Rationale: | There are channels which map a user specific crypto primitive via the CRYIF to the underlying Crypto Driver module. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The CRYIF is responsible for each service to map to the corresponding Crypto Driver module |
| Supporting Material: | - |

⌋

### 24. 配置
*原文标题：Configuration*

The job processing mode (synchronous or asynchronous) of a CSM service shall be defined by static configuration
⌈
| Description: | The mode of cryptographic jobs provided by the CSM shall be defined by static configuration. |
|---|---|
| Rationale: | It shall not be possible to change the behavior of a specific CSM service during runtime. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Synchronous hash calculation |
| Supporting Material: | - |

⌋

 The priority of a user and its crypto jobs shall be defined by static configuration
⌈
| Description: | The user's priority shall be defined by static configuration. All jobs of that user inherit that priority. |
|---|---|
| Rationale: | There are crypto jobs which have to processed very fast (e.g. MAC generation for the SecOC). Other crypto jobs (e.g. hashing over the whole ROM) take very long but are not time critical. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Prioritized job processing |
| Supporting Material: | - |

⌋

 The set of cryptographic services provided by the CSM shall be defined by static configuration
⌈
| Description: | The set of cryptographic services provided by the CSM shall be defined by static configuration. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 初始化
*原文标题：Initialization*

None

### 26. Normal Operation

The CSM module shall use the streaming approach for some selected services
⌈
| Description: | The CSM module shall use the streaming approach for some provided services (see Software Specification of CSM). |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | It shall be possible to hand over the input data in small chunks to the service. |

Supporting Material:
⌋

### 27. 关机 Operation
*原文标题：Shutdown Operation*

<what to do when the module is shut down>

### 28. Fault Operation

The CSM module shall distinguish between error types
⌈
| Description: | The CSM module shall distinguish between the following two types or errors: |
|---|---|

- errors that can only occur during development

- errors that are expected to occur also in production code
| Rationale: | Basic functionality |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The CSM module shall report detected development errors to the Default Error Tracer
⌈
| Description: | The CSM module shall report detected development errors to the Default Error Tracer |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The CSM module shall not return specific development error codes via the API
⌈
| Description: | The CSM module shall not return specific development error codes via the API. In case of a detected development error the error shall only be reported to the DET. If the API function which detected the error has the return type Std_ReturnType, it shall return E_NOT_OK. |
|---|---|
| Rationale: | Basic functionality |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Crypto 接口
*原文标题：Crypto Interface*

### 30. 配置
*原文标题：Configuration*

The Crypto Interface shall have an interface to the static configuration information of the Crypto Driver
⌈
| Description: | The Crypto Interface shall have an interface to the static configuration information of the Crypto Driver. |
|---|---|
| Rationale: | Flexibility and scalability |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | To derive vendor API Infix to support multiple Crypto Drivers |
| Supporting Material: | - |

⌋

 Channels mapped to different Crypto Driver Objects shall be uniquely configurable in Crypto Interface
⌈
| Description: | The Crypto Interface shall support a configuration model where all virtual channels shall be statically mapped to Crypto Driver Objects. |
|---|---|

Virtual channels are the virtual way from the queue of the CSM over the CRYIF to the corresponding Crypto Driver Object.
| Rationale: | Each crypto driver object in the driver can be abstracted from and utilized by CSM using virtual channels. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Two hardware resources: one for symmetric cryptography, one for asymmetric cryptography |
| Supporting Material: | - |

⌋

### 31. 初始化
*原文标题：Initialization*

None

### 32. Normal Operation

None

### 33. 关机 Operation
*原文标题：Shutdown Operation*

None

### 34. Fault Operation

The Crypto Interface shall report detected development errors to the Default Error Tracer
⌈
| Description: | The Crypto Interface shall report detected development errors to the Default Error Tracer (DET). |
|---|---|

The detection and reporting shall be statically configurable with one single preprocessor switch.
| Rationale: | Debugging Support |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | All the input parameters and internal states have to be validated before processing. |
| Supporting Material: | - |

⌋

### 35. Crypto 驱动
*原文标题：Crypto Driver*

### 36. 配置
*原文标题：Configuration*

The Crypto Driver shall allow static configuration of Crypto Driver Objects
⌈
| Description: | The Crypto Driver shall allow defining of different Crypto Driver Objects. |
|---|---|
| Rationale: | Abstraction of different hardware units |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Parallel processing of symmetric operations and asymmetric operations |
| Supporting Material: | - |

⌋

 Crypto Interface keys mapped to different Crypto Driver Keys shall be uniquely configurable in the Crypto Interface
⌈
| Description: | The Crypto Interface shall support a configuration model where all CRYIF keys shall be statically mapped to keys in the crypto driver. |
|---|---|
| Rationale: | Similar to the channels where the CsmQueue is mapped to the Crypto Driver Object, the keys in the CSM have to mapped via the CRYIF to the corresponding key in the Crypto Driver. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Multiple Crypto Driver modules where each module has its own key identifiers |
| Supporting Material: | - |

⌋

### 37. 初始化
*原文标题：Initialization*

None

### 38. Normal Operation

The Crypto Driver shall provide access to all cryptographic algorithms supported by the hardware
⌈
| Description: | The Crypto Driver shall support access to all by the Crypto Stack supported algorithms. |
|---|---|
| Rationale: | Usage of hardware support and performance benefits. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Primitives which are supported by the HSM should be accessible through the Crypto Driver |
| Supporting Material: | - |

⌋

### 39. 关机 Operation
*原文标题：Shutdown Operation*

None

### 40. Fault Operation

None

### 41. Security Event 存储
*原文标题：Security Event Memory*

### 42. 通用
*原文标题：General*

Log security events reported by basic software modules and SWC
⌈
| Description: | The security event memory (SEM) shall enable to log security events (SE) which are monitored by BSW modules or SWCs. |
|---|---|

It shall be possible to store the type of the security event along with data which is useful for forensic analysis.
| Rationale: | Log security events in a way that is useful for forensic analysis |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | UC1.1: BSW modules or SWCs write security related events to the SEM |
| Supporting Material: | Concept 636 "Security Extensions" - C1 |

⌋

 Configure security event properties
⌈
| Description: | Depending on the type of security event the number of storable snap shots and the properties of the snap shots shall be configurable. |
|---|---|
| Rationale: | Depending on the type of event different data needs to be stored in the snapshot for the event. Depending on the expected frequency of the event specific numbers of storable snapshots are sufficient. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | UC1.1: BSW modules or SWCs write security related events to the SEM |
| Supporting Material: | Concept 636 "Security Extensions" - C1 |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Non-Functional 需求 (Qualities)
*原文标题：Non-Functional Requirements (Qualities)*

### 44. 通用
*原文标题：General*

None

### 45. Crypto 服务管理器
*原文标题：Crypto Service Manager*

The CSM module shall provide an abstraction layer which offers a standardized interface to higher software layers to access cryptographic algorithms
⌈
| Description: | The CSM module shall provide an abstraction layer which offers a standardized interface to higher software layers to access cryptographic algorithms. |
|---|---|
| Rationale: | An abstraction layer encapsulates internal behaviors and reduces complexity. It also increases maintainability, improves portability and eases testability. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Session handling. |
| Supporting Material: | - |

⌋

 The CSM module shall be located in the AUTOSAR service layer
⌈
| Description: | The CSM module shall be located in the Autosar service layer |
|---|---|
| Rationale: | Management functionality must be available to all modules and layers of the system |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The CSM module shall be accessible from applications above the RTE. |
| Supporting Material: | - |

⌋

 The CSM shall provide an interface to be accessible via the RTE
⌈
| Description: | The CSM shall provide an interface to be accessible via the RTE. |
|---|---|
| Rationale: | The CSM module shall be accessible from applications above the RTE. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Crypto 接口
*原文标题：Crypto Interface*

The Crypto Interface shall be the interface layer between the underlying crypto driver(s) and upper layers
⌈
| Description: | The Crypto Interface is the single interface for all upper Layer (BSW) for crypto operations. |
|---|---|

The Crypto Interface is the single user of the Crypto Driver
| Rationale: | Interfaces and interaction |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Different Users might need to access more than one Crypto Drivers or SW based solutions. Also, different upper layers might need to access crypto services. |
| Supporting Material: | AUTOSAR_WP Architecture_SoftwareArchitecture |

⌋

 The Crypto Interface implementation and interface shall be independent from underlying Crypto Hardware or Software
⌈
| Description: | The CRYIF implementation and CRYIF interfaces shall be independent from the underlying Crypto Driver modules. |
|---|---|
| Rationale: | Portability and reusability |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Encapsulate implementation details of a specific Crypto module from higher software layers. |
| Supporting Material: | - |

⌋

### 47. Crypto 驱动
*原文标题：Crypto Driver*

The Crypto Driver module shall strictly separate error and status information
⌈
| Description: | The Crypto Driver module shall strictly separate error and status information. This requirement applies to return values and also to internal variables. |
|---|---|
| Rationale: | The distinction between error and status information allow an easier handling with them. Errors shall be treated differently than status information. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | All return values are error information. |
| Supporting Material: | - |

⌋

### 48. References

### 49. 附录
*原文标题：Appendix*

### 50. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 51. Traceable item history of this document according to AUTOSAR Release R25-11

### 52. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 53. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 54. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
