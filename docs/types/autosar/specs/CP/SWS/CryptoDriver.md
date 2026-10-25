# Specification of Crypto Driver (`CryptoDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 807 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CryptoDriver_807\AUTOSAR_CP_SWS_CryptoDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CryptoDriver_807\AUTOSAR_CP_SWS_CryptoDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CryptoDriver_807\zzgen\CP_SWS_CryptoDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Crypto Driver.

The Crypto Drivers are located in the Microcontroller Abstraction Layer, which is below the Crypto Hardware Abstraction Layer (Crypto Interface ) and the upper service layer (Crypto Service Manager ). The Crypto Driver is a driver for a specific device, that is only abstracting the features supported by the hardware.

The Crypto Drivers allow defining of different Crypto Driver Objects (i.e. AES accelerator, SW component, etc), which shall be used for concurrent requests in different buffers. For each hardware object a priority-dependent job processing shall be supported. A crypto software solution (i.e. software-based CDD) can define interfaces identical to the Crypto Drivers for interacting with the upper layers, which shall provide an interface to the applications.

## 模块依赖

⌈
If an off-chip crypto hardware module (e.g. external HSM) is used, the Crypto Driver shall use services of other MCAL drivers (e.g. SPI).
⌋

Hint: If the Crypto Driver uses services of other MCAL drivers (e.g. SPI), it must be ensured that these drivers are up and running before initializing the Crypto Driver module.

⌈
The Crypto Driver shall be able to store key material in a non-volatile way if supported by the dedicated crypto hardware.
⌋

Note:

The Crypto Drivers are called by the Crypto Interface (CRYIF), which is implemented according to the cryptographic interface specification .

The Crypto Drivers access the underlying hardware and software objects, to calculate results with their cryptographic primitives. The results shall be forwarded to the CRYIF.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Crypto Driver.

The Crypto Drivers are located in the Microcontroller Abstraction Layer, which is below the Crypto Hardware Abstraction Layer (Crypto Interface ) and the upper service layer (Crypto Service Manager ). The Crypto Driver is a driver for a specific device, that is only abstracting the features supported by the hardware.

The Crypto Drivers allow defining of different Crypto Driver Objects (i.e. AES accelerator, SW component, etc), which shall be used for concurrent requests in different buffers. For each hardware object a priority-dependent job processing shall be supported. A crypto software solution (i.e. software-based CDD) can define interfaces identical to the Crypto Drivers for interacting with the upper layers, which shall provide an interface to the applications.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| CDD | Complex Device Driver |
| CSM | Crypto Service Manager |
| CRYIF | Crypto Interface |
| CRYPTO | Crypto Driver |
| DET | Default Error Tracer |
| HSM | Hardware Security Module |
| HW | Hardware |
| SHE | Security Hardware Extension |
| SW | Software |

### 3. 术语表 of Terms
*原文标题：Glossary of Terms*

| Term: | Description: | < |
|---|---|---|
| Crypto Driver Object | A Crypto Driver implements one or more Crypto Driver Objects. The Crypto Driver Object can offer different crypto primitives in hardware or software. The Crypto Driver Objects of one Crypto Driver are independent of each other. |  |

There is only one workspace for each Crypto Driver Object (i.e. only one crypto primitive can be performed at the same time).

| The only exception of independency between Crypto Driver Object is the usage of a default Random Number Generator (see ). | < |
|---|---|
| Key | A Key can be referenced by a job in the Csm. |

| In the Crypto Driver, the key references a specific key type. | < |
|---|---|
| Key Type | A key type consists of references to key elements. |

| The key types are typically pre-configured by the vendor of the Crypto Driver. | < |
|---|---|
| Key Element | Key elements are used to store data. This data can be e.g. key material or the IV needed for AES encryption. |

It can also be used to configure the behaviour of the key management functions.

Key elements from different keys have different memory area (both NV and RAM area).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 相关文档
*原文标题：Related documentation*

### 5. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Crypto Driver. Thus, the specification SWS BSW General shall be considered as additional and required specification for Crypto Driver.

External related documents include following:

* IEC 7498-1 The Basic Model, IEC Norm, 1994
* ISO/IEC 10118-3:2018 Part 3: Dedicated hash-functions (SM3)
* ISO/IEC 14888-3:2018 IT Security techniques - Digital signatures with appendix - Part 3: Discrete logarithm based mechanisms (SM2)
* Specification of the 3GPP Confidentiality and Integrity Algorithms 128-EEA3 & 128-EIA3:

  * 128-EEA3 and 128-EIA3 Specification, Version 1.7, 30th Dec 2011
  * ZUC Specification, Version 1.6, 28th June 2011
* IETF RFC 3394 Advanced Encryption Standard (AES) Key Wrap Algorithm, 2002

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

n.a.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The Crypto Driver can be used for all domain applications when security features are to be used.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

⌈
If an off-chip crypto hardware module (e.g. external HSM) is used, the Crypto Driver shall use services of other MCAL drivers (e.g. SPI).
⌋

Hint: If the Crypto Driver uses services of other MCAL drivers (e.g. SPI), it must be ensured that these drivers are up and running before initializing the Crypto Driver module.

⌈
The Crypto Driver shall be able to store key material in a non-volatile way if supported by the dedicated crypto hardware.
⌋

Note:

The Crypto Drivers are called by the Crypto Interface (CRYIF), which is implemented according to the cryptographic interface specification .

The Crypto Drivers access the underlying hardware and software objects, to calculate results with their cryptographic primitives. The results shall be forwarded to the CRYIF.

### 11. 文件结构
*原文标题：File structure*

### 12. 代码文件结构
*原文标题：Code File Structure*

The code file structure is not defined within this specification completely.

⌈
The code file structure shall contain a source file Crypto.c and a code file `Crypto_KeyManagement`.c.
⌋

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Basic SW security events |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| API handling in uninitialized state |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| The Crypto Stack shall allow static configuration of keys used for cryptographic jobs |  |  |
| The Crypto Stack shall identify MAC generation/verification as a cryptographic primitive which can be requested to a driver |  |  |
| The Crypto Stack shall identify hash calculation as a cryptographic primitive which can be requested to a driver |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

The Crypto Driver module is located in the micro controller abstraction layer and is below the Crypto Interface module and Crypto Service Manager module. It implements a generic interface for synchronous and asynchronous cryptographic primitives. It also supports key storage, key configuration, and key management for cryptographic services.

To provide cryptographic functionalities an ECU needs to integrate one unique Crypto Service Manager module and one Crypto Interface. However, the Crypto Interface can access several Crypto Drivers, each of them is configured according to the underlying Crypto Driver Object.

A Crypto Driver Object represents an instance of independent crypto hardware "device" (e.g. AES accelerator). There could be a channel for fast AES and CMAC calculations on an HSM for jobs with high priority, which ends on a native AES calculation service in the Crypto Driver. But it is also possible, that a Crypto Driver Object is a piece of software, e.g. for RSA calculations where jobs are able to encrypt, decrypt, sign or verify data. The Crypto Driver Object is the endpoint of a crypto channel.

### 15. Pre-Configuration

The vendor of the Crypto Driver has to provide a pre-configuration for the Crypto Driver which represents the capabilities of the Crypto Driver. The pre-configuration shall be delivered with the BSWMD-file of the Crypto Driver.

### 16. CryptoPrimitive 配置
*原文标题：CryptoPrimitive configuration*

The Crypto Driver contains one or more crypto driver objects that each supports one or more crypto primitive service. Algorithm family and mode provides details on how to operate crypto primitive services. For example, the crypto primitive service "Encrypt" supports the Family "AES" and the mode "CBC". Further refinements are required by setting secondary family values.

The CryptoPrimitive configuration of a crypto driver object defines the possible options for a crypto primitive service. From the example above, the driver can support the modes CBC or ECB for an AES algorithm. This is sometimes referred as the "capabilities" of the driver for a specific crypto primitive service. Thus, a CryptoPrimitive may configure several family and mode values if it is applicable for a crypto service primitive.

The job configuration of the CSM contains a reference to a CsmPrimitive. The corresponding Config section of this CsmPrimitive also defines the families and mode, but with multiplicity of 1, to identify uniquely what combination of family and mode shall be used for a job. At least, the associated crypto driver object must contain a CryptoPrimitive that supports the configuration.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Cryptographic capabilities

The capabilities of a Crypto Driver can be divided in the two main topics: key storage and supported algorithms. The supported algorithms can be pre-configured by creating a new CryptoPrimitive container (e.g. MacGenerate). In this container the vendor can now specify that the Crypto Driver is for example only capable of doing a CMAC. In this case, an example configuration would be:

CryptoPrimitiveAlgorithmFamily = `CRYPTO_ALGOFAM_AES`

CryptoPrimitiveAlgorithmMode = `CRYPTO_ALGOMODE_CMAC`

CryptoPrimitiveAlgorithmSecondaryFamily = `CRYPTO_ALGOMODE_NOT_SET`

CryptoPrimitiveService = MacGenerate

The primitive MacGenerate can then be referenced by the Crypto Driver Object to show, that it is capable of doing a CMAC. If no other primitives a pre-configured, the Crypto Driver Object is not able to perform e.g. an AES encryption.

If all primitives are independent from each other, a vendor would pre-configure one Crypto Driver Object for each primitive. Otherwise, there would be one Crypto Driver Object, which would reference all primitives.

### 18. Available Keys

The keys, which are provided by the Crypto Driver can also be pre-configured. A CryptoKey container references a specific CryptoKeyType. The CryptoKeyType provides the information which key elements are contained in a CryptoKey referencing this CryptoKeyType.

The vendor also pre-configures the key elements to define:

* read/write access
* the maximum size of the element
* if the element can be read/written with data smaller than the maximum size
* the init value after startup if the element is not already initialized

The init value is the value, which is stored into the key element at the initialization of the crypto driver when the key element is empty. It is e.g. used for the key element with the id `CRYPTO_KE_`<Service>_ALGORITHM. This way, the key management functions can be configured. To provide e.g. different key exchange algorithms in one Crypto Driver, the vendor can pre-configure the following containers and set the init values of the `CRYPTO_KE_`<Service>_ALGORITHM key element to a vendor specific value:

`CryptoKeyElement_KeyExchange_Algorithm_RSA`

* ID = 11
* Init value = 0x00
* Size = 1
* Read Access = `RA_NONE`
* Write Access = `WA_NONE`

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 通用行为
*原文标题：General Behavior*

The Crypto Driver can have one or more Crypto Driver Objects.

⌈
In case several Crypto Driver instances (of same or different vendor) are implemented in one ECU the file names, API names, and published parameters must be distinguished such that no two definitions with the same name are generated.

The name shall be formatted according to : Crypto_<vi>_<ai>, where <vi> is the vendorId and <ai> is the vendorApiInfix.
⌋

  Upstream requirements:
⌈
The Crypto Driver may support all crypto primitives that are supported by the underlying hardware object.
⌋

A job, declared in CSM specification , is an instance of a configured cryptographic primitive.

⌈
A Crypto Driver Object shall only support processing one job at one time.
⌋

⌈
A Crypto Driver with n Crypto Driver Objects shall be able to process n jobs in parallel.
⌋

Hint: Jobs, that are in the job queue (described in chapter ), do not count as in processing.

⌈
If a Crypto Driver requires Random Number Generator services for internal use (e.g. `Crypto_KeyExchangeCalcPubVal`), it shall configure the first Crypto Driver Object (object number 0) for this purpose. The configuration is done in  and .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Normal Operation

⌈
"START" indicates a new request of a crypto primitive, and it shall cancel all previous requests of the same job.
⌋

Note:

"job is being processed" means that the corresponding crypto driver object is currently and actively processing this job. When a job is not finished but the crypto driver object is not active with it (because, e.g., the operation "FINISH" is outstanding) this does not mean that this job is being processed.

Note:

To unite a single call function and a streaming approach for the crypto services, there is one interface `Crypto_ProcessJob` with a service operation parameter (embedded in job structure parameter). This service operation is a flag field, that indicates the operation modes "START", "UPDATE" or "FINISH". It declares explicitly which operation will be performed.

If the "UPDATE" flag is set, the crypto primitive expects input data. "FINISH" indicates, that after this function call, all data are fed completely and the crypto primitive can finalize the calculations.

These operations can be combined to execute multiple operations at once. Then, the operations are performed in the order "START", "UPDATE", "FINISH".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 功能性需求
*原文标题：Functional Requirements*

Note: The information whether the job shall be processed synchronously or asynchronously is part of the `Crypto_JobType`.

### 22. Synchronous Job Processing

⌈
When the synchronous job processing is used, the corresponding interface functions shall compute the result synchronously within the context of this function call.
⌋

⌈
If the Crypto Driver has a queue and if a synchronous job is issued and the priority is greater than the highest priority available in the queue, the Crypto Driver shall disable processing new jobs from the queue until the next call of the main function has finished that follows after completion of the currently processed job.
⌋

Note: Channels may hold jobs of both asynchronous and synchronous processing type. If so, a synchronous job might not be accepted for processing although its job's priority is higher than those of all asynchronous jobs.

### 23. Asynchronous Job Processing

⌈
If the asynchronous job processing is used, the interface functions shall only hand over the necessary information to the primitive. The actual computation may be kicked-off by the main function.
⌋

⌈
For each asynchronous request the Crypto Driver shall notify CRYIF about the completion of the job by calling the `CRYIF_CallbackNotification` function passing on the job information and the result of cryptographic operation.
⌋

### 24. 设计 Notes
*原文标题：Design Notes*

The Crypto Driver provides two services: (1) the crypto services itself and (2) key management.

### 25. Priority-dependent Job Queue

⌈
Optionally, every Crypto Driver Object shall be able to line up jobs into a queue to process them one after the other.
⌋

⌈
The Crypto Driver Object shall disable queueing when the size of the crypto driver queue is set to 0.
⌋

⌈
The queue shall sort the jobs according to the configured jobs' priority.
⌋

The higher the job priority value, the higher the job's priority.

⌈
If `Crypto_ProcessJob` is called, when the queue is empty and the Crypto Driver Object is not busy the Job shall switch to the state 'active' and execute the crypto primitive.
⌋

⌈
If `Crypto_ProcessJob` is called and the queue is full, the function shall return with `CRYPTO_E_BUSY`.
⌋

Note:

It has to be ensured, that the asynchronous jobs are processed fast enough to avoid that the synchronous job has to wait for a long time.

It is also recommended to use `CRYPTO_OPERATIONMODE_SINGLECALL` for the asynchronous jobs.

Note:

A Crypto Driver Object can handle different jobs with synchronous and asynchronous job processing at the same time. However, synchronous job processing and job-queuing might not be useful.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Key 管理
*原文标题：Key Management*

A key consists of one or more key elements.

Examples of key elements are the key material itself, an initialization vector, a seed state for random number generation, or the proof of the SHE standard.

Each key element has a defined access right for read or write access. The access right itself is defined by enumerations with an assigned value (see  or ) in the configuration of a CryptoKeyElement. The integer values of these enumerations are chosen in a way, that the assignment of an access right to a key element also deduces further right accesses. The lower the value, the higher the access right. This allows an easy compare of the assigned value to a required right access by numbers.

Example:

If a key element has access rights of `CRYPTO_RA_INTERNAL_COPY`=2, the right permission also applies to `CRYPTO_RA_ENCRYPTED`=1 and `CRYPTO_RA_ALLOWED`=0, because both rights of the assigned enumeration values are lower and therefore are lower in the ranking of the access rights.

⌈
Access rights shall be taken into account when direct access to key elements are required. This applies for read and write access.
⌋

Keys or key elements can be copied using the key copy interface functions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Key Formats

The key element with ID 1 is a particular key that provides the cryptographic key for the related cryptographic primitive.

In IETF RFC, keys are described in a specific format to provide a common and compact way to transport them between entities.

To support this standard also within AUTOSAR, the following chapter describes key formats that are supported by AUTOSAR.

This allows to provide a given key in such a format to the crypto driver, e.g. from parts of a certificate without the needs for an application to analyse the structure and to construct that data.

By supporting the IETF RFC within the crypto driver, the key material can be provided as is.

If supported, the extraction of the required key elements, such as private or public key fields, is accomplished in the driver.

It is unlikely to compose such formats back to the application by the crypto driver. Thus, such a key element might only be temporarily stored and may not persisted in "composed" format (M1M2M3), e.g. to retrieve that after reset.

  Upstream requirements:
⌈
Asymmetric key material with identification is specified in accordance to RFC5958 in ASN.1 format.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 定义 of RSA Key Material
*原文标题：Definition of RSA Key Material*

Upstream requirements:
⌈
For `CRYPTO_KE_FORMAT_BIN_` `RSA_PRIVATEKEY` the parameter 'KeyMaterial OCTET STRING' for RSA private keys is defined according to IETF RFC8017 and has the following contents:

KeyMaterial ::= RSAPrivateKey

RSAPrivateKey ::= SEQUENCE {

version Version,

modulus INTEGER, - n

publicExponent INTEGER, - e

privateExponent INTEGER, - d

prime1 INTEGER, - p

prime2 INTEGER, - q

exponent1 INTEGER, - d mod (p-1)

exponent2 INTEGER, - d mod (q-1)

coefficient INTEGER - (inverse of q) mod p }

Version ::= INTEGER { two-prime(0), multi(1) }

The fields of type RSAPrivateKey have the following meanings:

* version is the version number, for compatibility with future revisions of this document. It shall be 0 for this version of the document.
* modulus is the modulus n.
* publicExponent is the public exponent e.
* privateExponent is the private exponent d.
* prime1 is the prime factor p of n.
* prime2 is the prime factor q of n.
* exponent1 is d mod (p-1).
* exponent2 is d mod (q-1).
* coefficient is the Chinese Remainder Theorem coefficient (inverse of q) mod p.
⌋

Note:

The values for prime1, prime2, exponent1, exponent2 and coefficient are optional.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 定义 of ECC Key Material
*原文标题：Definition of ECC Key Material*

Upstream requirements:
⌈
Due to a lack of clear and efficient standard definition for ECC keys, key material for ECC is defined as binary information in the format definition of `CRYPTO_KE_FORMAT_BIN_OCTET`. The length of data depends on the assigned curve operation.
⌋

  Upstream requirements:
⌈
Public keys for NIST and Brainpool ECC curves are provided with their X and Y coordinates:

| ECC Public Key = Point X | Point Y. |
|---|---|

The points are stored in little endian format.

The number of bytes for the key depends on the implementation of the curve.

Examples:

| NIST curve P(256) public key = X(32) | Y(32) |
|---|---|

| NIST curve P(192) public key = X(24) | Y(24) |
|---|---|

⌋

  Upstream requirements:
⌈
Private keys for NIST and Brainpool ECC curves are provided with their X and Y coordinates and an additional scalar:

| ECC Private Key = Point X | Point Y | Scalar. |
|---|---|---|

The points and the scalar are stored in little endian format.

Example:

| Brainpool curve P(256) = X(32) | Y(32) | SCALAR(32) |
|---|---|---|

⌋

  Upstream requirements:
⌈
The public key information for ED25519 contains a point on the curve:

ED25519 Public Key = Point X

The point is stored in little endian format.

Example:

ED25519 Public Key = X(32).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 定义 of SHE key material
*原文标题：Definition of SHE key material*

⌈
If a crypto key element is used as a secret key of a SHE hardware, then the configuration of CryptoKeyFormat/CryptoKeyElementFormat shall be set to `CRYPTO_KE_FORMAT_BIN_SHEKEY`. This indicates that the key element shall be presented in M1M2M3 format as specified in . The function `Crypto_KeyElementSet` is used to load the key into the SHE hardware (not directly on a call to this function but rather through key-set-valid operation).

With `Crypto_KeyElementSet`, the parameter 'keyElementId' shall be set to 1. This can be taken from e.g. `CRYPTO_KE_MAC_KEY` or `CRYPTO_KE_CIPHER_KEY` (see ).

The SHE hardware provides M4M5 as the proof of the correct key processing and to confirm the operation. To extract this key information, an additional key element is needed. To read the proof after the key-set-valid operation, the function `Crypto_KeyElementGet` with key element ID value '2' shall be used, e.g. with pre-defined macros `CRYPTO_KE_MAC_PROOF` or `CRYPTO_KE_CIPHER_PROOF`. The proof will only be available directly after a successful key-element-set followed by key-set-valid operation, e.g. within an ignition cycle. This means, the proof must not be stored, e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Key Storage in NVM

To allow a crypto driver to persist key elements in non-volatile memory, access to NVM is required. For this, the configuration of the crypto driver needs a reference to one or more NVM blocks. Keys with key elements that shall be persisted are to be assigned to these blocks. The elements that are to be persisted will then be written by the driver on validation and values are retrieved during initialization of the driver. The principal relation to configuration items is shown in Figure 7-2.

Important note:

The crypto driver only deals with the functional operation to store data to and read data from an NVM block. Any error handling like defects of NVM blocks must be captured and dealt with in the application.

### 32. Writing keys to NVM

Upstream requirements:
⌈
The storage of keys resp. their elements shall be initiated only when KEYSETVALID" is started, either by a call to `Crypto_KeySetValid` or to `Crypto_ProcessJob` with primitive service `CRYPTO_KEYSETVALID` or `CRYPTO_KEYSETINVALID` set. Thus, key element storage in NVM shall not be initiated on a call to `Crypto_KeyElementSet` or similar operation. The storage operation shall only take place if the validation was successfully finished and the operation returns E_OK (either directly by a synchronous call or asynchronously through the callback).
⌋

Rationale:

Especially when key elements of a key have interdependencies to one or more other key element(s) of the same key, writing the key element immediately when it is set has the risk, that the key itself can be inconsistent. In addition, the explicit initiation of the operation with KEYSETVALID allows the crypto driver to check the consistency and interdependency of all elements and storing will be denied if the check fails. Also, updating several elements of a key will result in a single write operation to NVM and not multiple times for each key element, which can reduce the total number of write operations to NVM.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Reading Keys from NVM

Upstream requirements:
⌈
On initialization of the crypto driver, the callback function Crypto_<vi>_<ai>_NvBlock_ReadFrom_<NvBlock>() shall be called to retrieve the previously persisted key elements for the associated Keys.
⌋

Note:

The format of the data within the NvBlock are local to the driver. At least, the driver needs to make sure that key elements and keys can be uniquely assigned within the NV RAM Block. Also, versioning of NV RAM Block data for future updates of the format shall be considered. Data consistency of the block may be considered.

  Upstream requirements: ,
⌈
On initialization, if an NvBlock could be read successfully and the internal consistency check of the NvBlock data was successful, all key elements of the referencing keys to this block shall be set with the value from the NV RAM Block data.
⌋

  Upstream requirements: ,
⌈
On initialization, when reading an NvBlock for keys and the block is available but corrupted (driver internal data consistency check failed), all related keys shall be set to invalid.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Crypto Profiles

### 35. custom 服务 and 功能 profiles的概述
*原文标题：Overview of custom service and function profiles*

The Crypto Driver can support vendor specific custom services and custom synchronous API functions, triggered by `Csm_CustomService` and `Csm_CustomSync` (`Crypto_CustomSync`). In order to align the realization by different Crypto vendors for a particular use case, a mapping of parameters is required. This mapping is defined by the definition of profiles for particular use case.

⌈
A Crypto profile shall define the mapping for the following parameters for `Csm_CustomService`:

uint32                    JobId
`Crypto_OperationModeType`  mode
uint32                    targetKeyId
const uint8*              inputPtr
uint32                    inputLength
const uint8 *             secondaryInputPtr
uint32                    secondaryInputLength
const uint8*              tertiaryInputPtr
uint32                    tertiaryInputLength
uint8*                    outputPtr
uint32*                   outputLengthPtr
uint8*                    secondaryOutputPtr
uint32*                   secondaryOutputLengthPtr
`Crypto_VerifyResultType`*  verifyPtr
⌋

⌈
A Crypto profile shall define the mapping for the following parameters for `Csm_CustomSync`:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Custom 服务 and 功能 profile 1 (KeyM and certificate 管理)
*原文标题：Custom service and function profile 1 (KeyM and certificate management)*

This profile defines how to use a custom service with the certificate management services specified for the KeyM. Using this profile enables the KeyM to forward the actual certificate processing to the Crypto Driver and its associated HSM. The Crypto profile provides a consistent mapping of the parameters from the KeyM services and functions to the Csm job configured for the custom service and to the custom synchronous API function `Crypto_CustomSync`.

The ServiceInfoType is defined as `CUSTOM_SERVICE` with value 0x15.

The `Crypto_AlgorithmFamilyType` is defined as `CRYPTO_ALGOFAM_KEYM` with value 0x80 and need to be configured via  CryptoPrimitiveAlgorithmFamilyCustomId.

The `Crypto_AlgorithmModeType` is defined as `CRYPTO_ALGOMODE_NOT_SET` with value 0x00.

The `KeyM_ServiceCertificate` (ServiceId: 0x09) can be mapped by the KeyM to call `KeyM_ServiceCertificateByCertId` (ServiceId: 0x13).

In case the data type mapped to a parameter of type unit8* have a bigger size (e.g. uint16) the MSB should be the first byte.

⌈
Each Crypto profile shall define the mapping of the parameters of `Crypto_CustomService` to the using KeyM service/function.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 105 章（内容从略，见纯文本全文）

37. 错误分类
38. Development 错误
39. Runtime 错误
40. Production 错误
41. Extended Production 错误
42. 错误检测
43. 安全事件
44. Security events for secure boot
45. API 规范
46. Imported 类型
47. 类型定义
48. Extension to Std_ReturnType
49. Crypto_ConfigType
50. 功能定义
51. 通用 API
52. Crypto_Init
53. Job Processing 接口
54. Crypto_ProcessJob
55. Job Cancellation 接口
56. Crypto_CancelJob
57. Key 管理接口
58. Key Setting 接口
59. Crypto_KeyElementSet
60. Crypto_KeySetValid
61. Crypto_KeySetInvalid
62. Key Extraction 接口
63. Crypto_KeyElementGet
64. Key Status 接口
65. Crypto_KeyGetStatus
66. Key Copying 接口
67. Crypto_KeyElementCopy
68. Crypto_KeyElementCopyPartial
69. Crypto_KeyCopy
70. Crypto_KeyElementIdsGet
71. Key Generation 接口
72. Crypto_RandomSeed
73. Crypto_KeyGenerate
74. Key Derivation 接口
75. Crypto_KeyDerive
76. Key Exchange 接口
77. Crypto_KeyExchangeCalcPubVal
78. Crypto_KeyExchangeCalcSecret
79. Custom 服务接口
80. Callback 通知
81. Crypto_NvBlock_Init_<NvBlock>
82. Crypto_NvBlock_ReadFrom_<NvBlock>
83. Crypto_NvBlock_WriteTo_<NvBlock>
84. Crypto_NvBlock_Callback_<NvBlock>
85. Scheduled functions
86. Crypto_MainFunction
87. Expected 接口
88. 接口 to Standard 软件模块
89. Mandatory 接口
90. Optional 接口
91. 时序图
92. 配置规范
93. How to read this chapter
94. Containers and 配置 parameters
95. Crypto
96. CryptoGeneral
97. CryptoDriverObjects
98. CryptoDriverObject
99. CryptoKeys
100. CryptoKey
101. CryptoKeyElements
102. CryptoKeyElement
103. CryptoKeyTypes
104. CryptoKeyType
105. CryptoPrimitives
106. CryptoPrimitive
107. CryptoPrimitiveAlgorithmFamilyCustom
108. CryptoPrimitiveAlgorithmModeCustom
109. CryptoNvStorage
110. CryptoNvBlock
111. 发布信息
112. 附录
113. Change history of AUTOSAR traceable items
114. Traceable item history of this document according to AUTOSAR Release R26-11
115. Added 规范 Items in R26-11
116. Changed 规范 Items in R26-11
117. Deleted 规范 Items in R26-11
118. Added Constraints in R26-11
119. Changed Constraints in R26-11
120. Deleted Constraints in R26-11
121. Traceable item history of this document according to AUTOSAR Release R25-11
122. Added 规范 Items in R25-11
123. Changed 规范 Items in R25-11
124. Deleted 规范 Items in R25-11
125. Added Constraints in R25-11
126. Changed Constraints in R25-11
127. Deleted Constraints in R25-11
128. Traceable item history of this document according to AUTOSAR Release R24-11
129. Added 规范 Items in R24-11
130. Changed 规范 Items in R24-11
131. Deleted 规范 Items in R24-11
132. Added Constraints in R24-11
133. Changed Constraints in R24-11
134. Deleted Constraints in R24-11
135. Traceable item history of this document according to AUTOSAR Release R23-11
136. Added 规范 Items in R23-11
137. Changed 规范 Items in R23-11
138. Deleted 规范 Items in R23-11
139. Added Constraints in R23-11
140. Changed Constraints in R23-11
141. Deleted Constraints in R23-11
