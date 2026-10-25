# Specification of Crypto Interface (`CryptoInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 806 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CryptoInterface_806\AUTOSAR_CP_SWS_CryptoInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CryptoInterface_806\AUTOSAR_CP_SWS_CryptoInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CryptoInterface_806\zzgen\CP_SWS_CryptoInterface.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software Module Crypto Interface (CRYIF).

The Crypto Interface module is located between the low level Crypto solutions (Crypto Driver  and SW-based CDD) and the upper service layer (Crypto Service Manager ). It represents the interface to the services of the Crypto Driver(s) for the upper service layer. An AUTOSAR Layered View can be found in .

The Crypto Interface module provides a unique interface to manage different Crypto HW and SW solutions like HSM, SHE or SW-based CDD. Thus, multiple underlying internal and external Crypto HW as well as SW solutions can be utilized by the Crypto Service Manager module based on a mapping scheme maintained by Crypto Interface.

## 模块依赖

CryIf as an Interface BSW module
  Upstream requirements:
⌈
The Crypto Interface (CRYIF) shall be able to be called by the Crypto Service Manager (CSM), and forward its service requests to the underlying Crypto Drivers.
⌋

 Access to the underlying Crypto Drivers
  Upstream requirements:
⌈
The CRYIF shall be able to access the underlying Crypto Drivers to calculate results with their cryptographic services. These results shall be returned back to the CSM by the CRYIF.
⌋

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software Module Crypto Interface (CRYIF).

The Crypto Interface module is located between the low level Crypto solutions (Crypto Driver  and SW-based CDD) and the upper service layer (Crypto Service Manager ). It represents the interface to the services of the Crypto Driver(s) for the upper service layer. An AUTOSAR Layered View can be found in .

The Crypto Interface module provides a unique interface to manage different Crypto HW and SW solutions like HSM, SHE or SW-based CDD. Thus, multiple underlying internal and external Crypto HW as well as SW solutions can be utilized by the Crypto Service Manager module based on a mapping scheme maintained by Crypto Interface.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Crypto Interface module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| CSM | Crypto Service Manager |
| CRYIF | Crypto Interface |
| CRYPTO | Crypto Driver |
| HSM | Hardware Security Module |
| SHE | Security Hardware Extension |

| Terms: | Description: | < |
|---|---|---|
| Crypto Driver Object | A Crypto Driver Object is an instance of a crypto module (hardware or software), which is able to perform one or more different crypto operations. | < |
| Key | A Key can be referenced by a job in the Csm. |  |

| In the Crypto Driver, the key references a specific key type. | < |
|---|---|
| Key Type | A key type consists of references to key elements. |

| The key types are typically pre-configured by the vendor of the Crypto Driver. | < |
|---|---|
| Key Element | Key elements are used to store data. This data can be e.g. key material or the IV needed for AES encryption. |

| It can also be used to configure the behavior of the key management functions. Key elements from different keys have different memory area (both NV and RAM area). | < |
|---|---|
| Channel | A channel is the path from a Crypto Service Manager queue via the Crypto Interface to a specific Crypto Driver Object. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Crypto Interface.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Crypto Interface.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

The Crypto Interface is specifically designed to operate with one or multiple underlying Crypto Drivers. Several Crypto Driver modules covering different HW processing units or cores are represented by just one generic interface as specified in the Crypto Driver specification .

Any software based Crypto Driver shall be implemented as a CDD represented by the same interface above.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

The Crypto Interface can be used for all domain applications when security features are to be used.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

CryIf as an Interface BSW module
  Upstream requirements:
⌈
The Crypto Interface (CRYIF) shall be able to be called by the Crypto Service Manager (CSM), and forward its service requests to the underlying Crypto Drivers.
⌋

 Access to the underlying Crypto Drivers
  Upstream requirements:
⌈
The CRYIF shall be able to access the underlying Crypto Drivers to calculate results with their cryptographic services. These results shall be returned back to the CSM by the CRYIF.
⌋

### 10. 文件结构
*原文标题：File structure*

### 11. 代码文件结构
*原文标题：Code file structure*

File Structure is not defined
  Upstream requirements:
⌈
The code file structure shall not be defined within this specification completely.
⌋

 Only one source file
  Upstream requirements:
⌈
The code file structure shall contain one source file CryIf.c, that contains the entire CRYIF code.
⌋

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  as well as  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall provide at least a basic set of module files |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| Callback Function Return Types for AUTOSAR BSW |  |  |
| AUTOSAR Basic Software Modules callback functions are allowed to have parameters |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The Basic Software Module specifications shall specify at least in the description which other modules they require |  |  |
| API handling in uninitialized state |  |  |
| No description |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| It shall be possible to concurrently execute a service offered by a BSW |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能规范
*原文标题：Functional specification*

The Crypto Interface is located between the Crypto Service Manager and the underlying crypto drivers and is the unique interface to access cryptographic operations for all upper layers (BSW). The Crypto Interface is also the only user of the crypto drivers and provides a unique interface to manage different crypto hardware and software solutions. The Abstraction Layer encapsulates different mechanisms of hardware and software access, so the Crypto Interface implementation is independent from the underlying Crypto Drivers which can be realized in hardware or software.

Also it ensures the concurrent access to crypto services to enable the possibility to process multiple crypto tasks at the same time.

### 14. Multicore

In a setup with a distributed CSM and Crypto drivers assigned to different partitions, the CryIf APIs will be used in different partitions. Nevertheless, CryIf shall stay a pure forwarding component and not care about execution contexts anyway, means it simply forwards a request in the context of the original caller.

 API Calling from any partition
  Upstream requirements: ,
⌈
The CryIf module shall apply appropriate mechanisms to allow calls of its APIs from any partition.
⌋

 Context of call forwarding
  Upstream requirements: , ,
⌈
The CryIf module shall forward a call in the context of the original caller.
⌋

### 15. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 16. Development 错误
*原文标题：Development Errors*

Definition of development errors in module CryIf
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API request called before initialisation of CRYIF module. | CRYIF_E_UNINIT | 0x00 |
| Initialisation of CRYIF module failed. | CRYIF_E_INIT_FAILED | 0x01 |
| API request called with invalid parameter (null pointer). | CRYIF_E_PARAM_POINTER | 0x02 |
| API request called with invalid parameter (out of range). | CRYIF_E_PARAM_HANDLE | 0x03 |
| API request called with invalid parameter (invalid value). | CRYIF_E_PARAM_VALUE | 0x04 |
| Source key element size does not match the target key elements size. | CRYIF_E_KEY_SIZE_MISMATCH | 0x05 |

⌋

### 17. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 18. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 19. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 20. 错误检测
*原文标题：Error detection*

This chapter describes general error detection that applies to more than one specific functions.

 cryIfKeyId and targetCryIfKeyId paramters of jobPrimitiveInputOutput: Report `CRYIF_E_PARAM_HANDLE` error
  Upstream requirements:
⌈
If the parameter job->jobPrimitiveInfo->primitiveInfo->service is either set to `CRYPTO_KEYSETVALID`, `CRYPTO_KEYSETINVALID`, `CRYPTO_RANDOMSEED`, `CRYPTO_KEYGENERATE`, `CRYPTO_KEYDERIVE`, `CRYPTO_KEYEXCHANGECALCPUBVAL`, `CRYPTO_KEYEXCHANGECALCSECRET` or `CRYPTO_CUSTOM`, the parameters job->jobPrimitiveInputOutput->cryIfKeyId and, if applicable, job->jobPrimitiveInputOutput->targetCryIfKeyId shall be checked if it is in valid range.

If keys are out of range it shall report `CRYIF_E_PARAM_HANDLE` to DET in development mode, otherwise return E_NOT_OK.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 22. API 规范
*原文标题：API specification*

### 23. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module CryIf
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Csm | Crypto_GeneralTypes.h | Crypto_AlgorithmFamilyType |
| ^ | Crypto_GeneralTypes.h | Crypto_AlgorithmInfoType |
| ^ | Crypto_GeneralTypes.h | Crypto_AlgorithmModeType |
| ^ | Crypto_GeneralTypes.h | Crypto_JobPrimitiveInfoType |
| ^ | Crypto_GeneralTypes.h | Crypto_JobPrimitiveInputOutputType |
| ^ | Crypto_GeneralTypes.h | Crypto_JobRedirectionInfoType |
| ^ | Crypto_GeneralTypes.h | Crypto_JobStateType |
| ^ | Crypto_GeneralTypes.h | Crypto_JobType |
| ^ | Crypto_GeneralTypes.h | Crypto_PrimitiveInfoType |
| ^ | Crypto_GeneralTypes.h | Crypto_ProcessingType |
| ^ | Crypto_GeneralTypes.h | Crypto_ServiceInfoType |
| ^ | Rte_Csm_Type.h | Crypto_KeyStatusType |
| ^ | Rte_Csm_Type.h | Crypto_OperationModeType |
| ^ | Rte_Csm_Type.h | Crypto_ResultType |
| ^ | Rte_Csm_Type.h | Crypto_VerifyResultType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

It should be noted, that the Crypto Stack API uses the key element index definition from the CSM module (see ).

### 24. 类型定义
*原文标题：Type definitions*

### 25. Extension to Std_ReturnType

Definition of `Std_ReturnType`-extension for module CryIf
  Upstream requirements:
⌈
| Range | CRYPTO_E_BUSY | 0x02 | The service request failed because the service is still busy |
|---|---|---|---|
| ^ | CRYPTO_E_ENTROPY_EXHAUSTED | 0x04 | The service request failed because the entropy of the random number generator is exhausted |
| ^ | CRYPTO_E_KEY_READ_FAIL | 0x06 | The service request failed because read access was denied |
| ^ | CRYPTO_E_KEY_WRITE_FAIL | 0x07 | The service request failed because the writing access failed |
| ^ | CRYPTO_E_KEY_NOT_AVAILABLE | 0x08 | The service request failed because at least one required key element is not available. |
| ^ | CRYPTO_E_KEY_NOT_VALID | 0x09 | The service request failed because the key is invalid. |
| ^ | CRYPTO_E_KEY_SIZE_MISMATCH | 0x0A | The service request failed because the key size does not match. |
| ^ | CRYPTO_E_JOB_CANCELED | 0x0C | The service request failed because the Job has been canceled. |
| ^ | CRYPTO_E_KEY_EMPTY | 0x0D | The service request failed because of uninitialized source key element. |
| ^ | CRYPTO_E_CUSTOM_ERROR | 0x0E | Custom processing failed. |
| Description | - | < | < |
| Available via | Crypto_GeneralTypes.h | < | < |

⌋

Notes:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. CryIf_ConfigType

Definition of datatype `CryIf_ConfigType`
⌈
| Name | CryIf_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | The content of the configuration data structure is implementation specific. |
| Description | Configuration data structure of CryIf module | < |
| Available via | CryIf.h | < |

⌋

### 27. 功能定义
*原文标题：Function definitions*

### 28. 通用 API
*原文标题：General API*

Definition of API function `CryIf_Init`
  Upstream requirements: , ,
⌈
| Service Name | CryIf_Init | < |
|---|---|---|
| Syntax | void CryIf_Init ( |  |

  const `CryIf_ConfigType`* configPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | configPtr | Pointer to a selected configuration structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the CRYIF module. | < |
| Available via | CryIf.h | < |

⌋

 Configuration Pointer is always null
  Upstream requirements:
⌈
The Configuration pointer configPtr shall always have a null pointer value.
⌋

The Configuration pointer configPtr is currently not used and shall therefore be set to null pointer value.

 Report `CRYIF_E_INIT_FAILED` error
  Upstream requirements: ,
⌈
If the initialization of the CRYIF module fails, the CRYIF shall report `CRYIF_E_INIT_FAILED` to the DET.
⌋

 Module Initialization Process
  Upstream requirements:
⌈
The service `CryIf_Init` shall initialize the global variables and data structures of the CRYIF including flags and buffers.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Job Processing 接口
*原文标题：Job Processing Interface*

To unite a single call function and a streaming approach for the crypto services, there is one interface `CryIf_ProcessJob`. Its job parameter job contains a `Crypto_OperationModeType` flag field (job->jobPrimitiveInputOutput.mode), which can be set as "START", "UPDATE", "FINISH" or combination of them. It declares explicitly what operation shall be performed. These operation modes can be mixed, and execute multiple operations at once.

| To process a crypto service with a single call with Crypto_ProcessJob the operation mode is a disjunction of the 3 modes "START | UPDATE | FINISH". |
|---|---|---|

 Definition of API function `CryIf_ProcessJob`
⌈
| Service Name | CryIf_ProcessJob | < |
|---|---|---|
| Syntax | Std_ReturnType CryIf_ProcessJob ( |  |

  uint32 channelId,
  `Crypto_JobType`* job
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Depends on configuration | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | channelId | Holds the identifier of the crypto channel. |
| Parameters (inout) | job | Pointer to the configuration of the job. Contains structures with user and primitive relevant information. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Dispatch Key IDs

Set the jobPrimitiveInputOutput's cryptoKeyId with the key ID of the corresponding crypto driver
  Upstream requirements:
⌈
If the parameter job->jobPrimitiveInfo->primitiveInfo->service is either set to `CRYPTO_KEYSETVALID`, `CRYPTO_KEYSETINVALID`, `CRYPTO_RANDOMSEED`, `CRYPTO_KEYGENERATE`, `CRYPTO_KEYDERIVE`, `CRYPTO_KEYEXCHANGECALCPUBVAL`, `CRYPTO_KEYEXCHANGECALCSECRET` or `CRYPTO_CUSTOM`, the parameters job->jobPrimitiveInputOutput->cryIfKeyId and, if applicable, job->jobPrimitiveInputOutput->targetCryIfKeyId have to be checked if it is in a valid range.

If so, CryIf shall set job->cryptoKeyId with the key ID of the crypto driver that corresponds to job->jobPrimitiveInputOutput->cryIfKeyId, and, if applicable, job->targetCryptoKeyId with the key ID of the crypto driver that corresponds to job->jobPrimitiveInputOutput->targetCryIfKeyId..
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Job Cancellation 接口
*原文标题：Job Cancellation Interface*

Definition of API function `CryIf_CancelJob`
⌈
| Service Name | CryIf_CancelJob | < |
|---|---|---|
| Syntax | Std_ReturnType CryIf_CancelJob ( |  |

  uint32 channelId,
  `Crypto_JobType`* job
| ) | < |  |
|---|---|---|
| Service ID | 0x0e | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | channelId | Holds the identifier of the crypto channel. |
| Parameters (inout) | job | Pointer to the configuration of the job. Contains structures with user and primitive relevant information. |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Request successful, job has been removed E_NOT_OK: Request failed, job couldn't be removed CRYPTO_E_JOB_CANCELED |
| Description | This interface dispatches the job cancellation function to the configured crypto driver object. | < |
| Available via | CryIf.h | < |

⌋

 `CryIf_CancelJob` API: Report `CRYIF_E_UNINIT` error
  Upstream requirements: , ,
⌈
If development error detection for the CRYIF is enabled: The function `CryIf_CancelJob` shall report `CRYIF_E_UNINIT` to the DET if the module is not yet initialized.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Key 管理接口
*原文标题：Key Management Interface*

### 33. Key Setting 接口
*原文标题：Key Setting Interface*

Definition of API function `CryIf_KeyElementSet`
⌈
| Service Name | CryIf_KeyElementSet | < |
|---|---|---|
| Syntax | Std_ReturnType CryIf_KeyElementSet ( |  |

  uint32 cryIfKeyId,
  uint32 keyElementId,
  const uint8* keyPtr,
  uint32 keyLength
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | cryIfKeyId | Holds the identifier of the key whose key element shall be set. |
| ^ | keyElementId | Holds the identifier of the key element which shall be set. |
| ^ | keyPtr | Holds the pointer to the key data which shall be set as key element. |
| ^ | keyLength | Contains the length of the key element in bytes. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Request successful E_NOT_OK: Request failed CRYPTO_E_BUSY: Request failed, Crypto Driver Object is busy CRYPTO_E_KEY_WRITE_FAIL:Request failed because write access was denied CRYPTO_E_KEY_NOT_AVAILABLE: Request failed because the key is not available CRYPTO_E_KEY_SIZE_MISMATCH: Request failed, key element size does not match size of provided data |
| Description | This function shall dispatch the set key element function to the configured crypto driver object. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Key Status 接口
*原文标题：Key Status Interface*

Definition of API function `CryIf_KeyGetStatus`
⌈
| Service Name | CryIf_KeyGetStatus | < |
|---|---|---|
| Syntax | Std_ReturnType CryIf_KeyGetStatus ( |  |

  uint32 cryIfKeyId,
  `Crypto_KeyStatusType`* keyStatusPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x13 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | cryIfKeyId | Holds the identifier of the key for which the key state shall be returned. |
| Parameters (inout) | None | < |
| Parameters (out) | keyStatusPtr | Contains the pointer to the data where the status of the key shall be stored. |
| Return value | Std_ReturnType | E_OK: Request successful E_NOT_OK: Request failed |
| Description | Returns the key state of the key identified by cryIfKeyId. | < |
| Available via | CryIf.h | < |

⌋

 `CryIf_KeyGetStatus` API: Report `CRYIF_E_UNINIT` error
  Upstream requirements: , ,
⌈
If development error detection for the CryIf module is enabled, the function `CryIf_KeyGetStatus` shall report `CRYIF_E_UNINIT` to the DET if the module is not yet initialized.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Key Extraction 接口
*原文标题：Key Extraction Interface*

Definition of API function `CryIf_KeyElementGet`
⌈
| Service Name | CryIf_KeyElementGet | < |
|---|---|---|
| Syntax | Std_ReturnType CryIf_KeyElementGet ( |  |

  uint32 cryIfKeyId,
  uint32 keyElementId,
  uint8* resultPtr,
  uint32* resultLengthPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | cryIfKeyId | Holds the identifier of the key whose key element shall be returned. |
| ^ | keyElementId | Holds the identifier of the key element which shall be returned. |
| Parameters (inout) | resultLengthPtr | Holds a pointer to a memory location in which the length information is stored. On calling this function this parameter shall contain the size of the buffer provided by resultPtr. If the key element is configured to allow partial access, this parameter contains the amount of data which should be read from the key element. The size may not be equal to the size of the provided buffer anymore. When the request has finished, the amount of data that has been stored shall be stored. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Key Copying 接口
*原文标题：Key Copying Interface*

Definition of API function `CryIf_KeyElementCopy`
⌈
| Service Name | CryIf_KeyElementCopy | < |
|---|---|---|
| Syntax | Std_ReturnType CryIf_KeyElementCopy ( |  |

  uint32 cryIfKeyId,
  uint32 keyElementId,
  uint32 targetCryIfKeyId,
  uint32 targetKeyElementId
| ) | < |  |
|---|---|---|
| Service ID | 0x0f | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant, but not for the same cryIfKeyId | < |
| Parameters (in) | cryIfKeyId | Holds the identifier of the key whose key element shall be the source element. |
| ^ | keyElementId | Holds the identifier of the key element which shall be the source for the copy operation. |
| ^ | targetCryIfKeyId | Holds the identifier of the key whose key element shall be the destination element. |
| ^ | targetKeyElementId | Holds the identifier of the key element which shall be the destination for the copy operation. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Key Generation 接口
*原文标题：Key Generation Interface*

Definition of API function `CryIf_RandomSeed`
⌈
| Service Name | CryIf_RandomSeed | < |
|---|---|---|
| Syntax | Std_ReturnType CryIf_RandomSeed ( |  |

  uint32 cryIfKeyId,
  const uint8* seedPtr,
  uint32 seedLength
| ) | < |  |
|---|---|---|
| Service ID | 0x07 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | cryIfKeyId | Holds the identifier of the key for which a new seed shall be generated. |
| ^ | seedPtr | Holds a pointer to the memory location which contains the data to feed the seed. |
| ^ | seedLength | Contains the length of the seed in bytes. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Request successful E_NOT_OK: Request failed CRYPTO_E_KEY_NOT_VALID: Request failed, the key state of the key identified by cryptoKeyId is "invalid". CRYPTO_E_KEY_EMPTY: Request failed because of uninitialized source key element |
| Description | This function shall dispatch the random seed function to the configured crypto driver object. | < |
| Available via | CryIf.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Key Derivation 接口
*原文标题：Key Derivation Interface*

Definition of API function `CryIf_KeyDerive`
⌈
| Service Name | CryIf_KeyDerive | < |
|---|---|---|
| Syntax | Std_ReturnType CryIf_KeyDerive ( |  |

  uint32 cryIfKeyId,
  uint32 targetCryIfKeyId
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | cryIfKeyId | Holds the identifier of the key which is used for key derivation. |
| ^ | targetCryIfKeyId | Holds the identifier of the key which is used to store the derived key. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: Request successful E_NOT_OK: Request failed CRYPTO_E_KEY_EMPTY: Request failed because of uninitialized source key element CRYPTO_E_BUSY: Crypto Driver Object has returned CRYPTO_E_BUSY. CRYPTO_E_KEY_NOT_VALID: Request failed, the key state of the key identified by cryptoKeyId is "invalid". |
| Description | This function shall dispatch the key derive function to the configured crypto driver object. | < |
| Available via | CryIf.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Custom 服务接口
*原文标题：Custom Service Interface*

Definition of API function `CryIf_CustomSync`
⌈
| Service Name | CryIf_CustomSync | < |
|---|---|---|
| Syntax | Std_ReturnType CryIf_CustomSync ( |  |

  uint32 dispatchId,
  uint32 keyId,
  uint32 keyElementId,
  uint32 targetKeyId,
  uint32 targetKeyElementId,
  const uint8* inputPtr,
  uint32 inputLength,
  uint8* outputPtr,
  uint32* outputLengthPtr,
  uint8* secondaryOutputPtr,
  uint32* secondaryOutputLengthPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x15 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | dispatchId | unique id to identify the request |
| ^ | keyId | key Id of the key the certificate is stored |
| ^ | keyElementId | key element id |
| ^ | targetKeyId | Holds the target key id |
| ^ | targetKeyElementId | - |
| ^ | inputPtr | Pointer to the input data. |
| ^ | inputLength | Contains the input length in bytes. |
| Parameters (inout) | None | < |
| Parameters (out) | outputPtr | Pointer to the output data. |
| ^ | outputLengthPtr | Contains the output length in bytes. |
| ^ | secondaryOutputPtr | Pointer to the secondary output data. |
| ^ | secondaryOutputLengthPtr | Contains the secondary output length in bytes. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Callback 通知
*原文标题：Callback notifications*

This is a list of functions provided for other modules.

 Definition of API function `CryIf_CallbackNotification`
  Upstream requirements: ,
⌈
| Service Name | CryIf_CallbackNotification | < |
|---|---|---|
| Syntax | void CryIf_CallbackNotification ( |  |

  `Crypto_JobType`* job,
  `Crypto_ResultType` result
| ) | < |  |
|---|---|---|
| Service ID | 0x0d | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | job | Points to the completed job's information structure. It contains a callbackID to identify which job is finished. |
| ^ | result | Contains the result of the cryptographic operation. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | void | -- |
| Description | Notifies the CRYIF about the completion of the request with the result of the cryptographic operation. | < |
| Available via | CryIf.h | < |

⌋

 `CryIf_CallbackNotification` API: Report `CRYIF_E_UNINITR` error
  Upstream requirements: ,
⌈
If development error detection for the CRYIF module is enabled: The function `CryIf_CallbackNotification` shall report `CRYIF_E_UNINIT` to the DET if the module is not yet initialized.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Expected 接口
*原文标题：Expected interfaces*

In this chapter all interfaces required from other modules are listed.

### 42. Mandatory 接口
*原文标题：Mandatory interfaces*

Note: This section defines all interfaces, which are required to fulfill the core functionality of the module.

 Definition of mandatory interfaces required by module CryIf
⌈
| API Function | Header File | Description |
|---|---|---|
| There are no mandatory interfaces. | < | < |

⌋

### 43. Optional 接口
*原文标题：Optional interfaces*

This section defines all interfaces, which are required to fulfill an optional functionality of the module.

 Definition of optional interfaces requested by module CryIf
⌈
| API Function | Header File | Description |
|---|---|---|
| Crypto_CancelJob | Crypto.h | This interface removes the provided job from the queue and cancels the processing of the job if possible. |
| Crypto_CustomSync | Crypto.h | Requests the execution of a function that is specified by the given dispatch id. |
| Crypto_KeyCopy | Crypto.h | Copies a key with all its elements to another key in the same crypto driver. Note: If the actual key element is directly mapped to flash memory, there could be a bigger delay when calling this function (synchronous operation) |
| Crypto_KeyDerive | Crypto.h | Derives a new key by using the key elements in the given key identified by the cryptoKeyId. The given key contains the key elements for the password, salt. The derived key is stored in the key element with the id 1 of the key identified by targetCryptoKeyId. The number of iterations is given in the key element CRYPTO_KE_KEYDERIVATION_ITERATIONS. |
| Crypto_KeyElementCopy | Crypto.h | Copies a key element to another key element in the same crypto driver. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 16 章（内容从略，见纯文本全文）

44. 时序图
45. 配置规范
46. How to read this chapter
47. Containers and 配置 parameters
48. Variants
49. CryIf
50. CryIfGeneral
51. CryIfChannel
52. CryIfKey
53. 发布信息
54. 附录
55. Change history of AUTOSAR traceable items
56. Traceable item history of this document according to AUTOSAR Release R25-11
57. Added 规范 Items in R25-11
58. Changed 规范 Items in R25-11
59. Deleted 规范 Items in R25-11
