# Specification of Key Manager (`KeyManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 907 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_KeyManager_907\AUTOSAR_CP_SWS_KeyManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_KeyManager_907\AUTOSAR_CP_SWS_KeyManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_KeyManager_907\zzgen\CP_SWS_KeyManager.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module <KeyManager>.

The AUTOSAR KeyM module consists of two sub modules, the crypto key submodule and the certificate submodule as required by  "AUTOSAR Requirements on Crypto Stack".

The crypto key submodule provides an API and configuration items to introduce or update pre-defined cryptographic key material. It acts as a key client to interpret the provided data from a key server and to create respective key materials. These keys are provided to the crypto service manager. After successful installation of the key material, the application is able to utilize the crypto operations. This allows OEMs to introduce key materials in production or maintenance phase to ECUs separate from the application.

The certificate submodule provides an API and configuration to operate on certificates. It allows to define certificate slots and associate them in a hierarchy as it is used in a PKI. Certificates can be permanently stored like a Root or intermediate certificate(s) so that they can be used to verify a given certificate against a certificate chain. Furthermore, the certificate submodule allows to access certificate elements or to verify its contents.

## 模块依赖

This chapter lists the relations to other modules that are used by the AUTOSAR KeyM module.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

None.

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module <KeyManager>.

The AUTOSAR KeyM module consists of two sub modules, the crypto key submodule and the certificate submodule as required by  "AUTOSAR Requirements on Crypto Stack".

The crypto key submodule provides an API and configuration items to introduce or update pre-defined cryptographic key material. It acts as a key client to interpret the provided data from a key server and to create respective key materials. These keys are provided to the crypto service manager. After successful installation of the key material, the application is able to utilize the crypto operations. This allows OEMs to introduce key materials in production or maintenance phase to ECUs separate from the application.

The certificate submodule provides an API and configuration to operate on certificates. It allows to define certificate slots and associate them in a hierarchy as it is used in a PKI. Certificates can be permanently stored like a Root or intermediate certificate(s) so that they can be used to verify a given certificate against a certificate chain.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Important note

This specification provides skeletons of an API for a Vehicle Key and Certificate Management system. Not all functionalities have been completely specified. This may allow some freedom of interpretation and implementation details. Even though the interfaces have been designed in a generic and flexible way it might be the case that they can change in upcoming AUTOSAR releases.

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the KeyM module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| KeyM | Key Manager |
| PKI | Public Key Infrastructure |
| CSR | Certificate Signing Request |
| CSM | Crypto Service Manager |
| CRL | Certificate Revocation List |
| CA | Certificate Authority |
| OID | Object Identifier. A byte array that identifies a certificate element or group or list of certificate elements. |

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for the Key Management module.

Thus, the specification SWS BSW General shall be considered as additional and required specification for the Key and Certificate Management module.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

The Key Management module shall be used with a Crypto Service Manager and its underlying modules.

Only a single KeyElement (with ID = 1) per CsmKey is currently supported.

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

This specification has no limitations to specific car domains.

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This chapter lists the relations to other modules that are used by the AUTOSAR KeyM module.

### 12. Dependencies to Crypto 服务管理器
*原文标题：Dependencies to Crypto Service Manager*

The KeyM module depends on cryptographic algorithms and functions provided by the  "Csm module". The KeyM module requires API functions to retrieve and set key elements and to verify signatures of certificates, namely:

* Key Setting Interface
* Key Extraction Interface
* Key Copying Interface
* Key Generation Interface
* Key Derivation Interface
* Key Exchange Interface
* Signature Interface

### 13. Dependencies to Non Volatile 存储
*原文标题：Dependencies to Non Volatile Memory*

The KeyM can be configured to store key material in non volatile memory. This requires interfaces to NVM.

### 14. Dependencies to Synchronized Time Base

The time for certificate validation period is provided by the STBM.

### 15. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in <`CITATIONS_OF_CONTRIBUTED_DOCUMENTS`> and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Basic SW security events |  |  |
| Modules of the \muC Abstraction Layer (MCAL) may not have hard coded horizontal interfaces |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The AUTOSAR Basic Software shall provide a microcontroller abstraction layer which provides a standardized interface to higher software layers |  |  |
| The AUTOSAR Basic Software shall provide a hardware abstraction layer |  |  |
| SW components shall be tested by a function defined in a common API in the Basis-SW |  |  |
| The AUTOSAR SW Components shall provide information about their dependency from faults, signal qualities, driver demands |  |  |
| The scheduling strategy that is built inside the Basic Software Modules shall be compatible with the strategy used in the system |  |  |
| API naming convention |  |  |
| Shared code shall be reentr |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能规范
*原文标题：Functional specification*

The Key Management module can roughly be divided into two parts: the crypto key sub module and the certificate sub module. The crypto key sub module is mainly used to interact with a key provisioning entity (key master) that initiates the generation or provides key material directly. These keys are assigned to crypto keys of the CSM and stored in dedicated NVM blocks or can be stored as keys of the respective crypto driver. The certificate sub module allows to configure certificates of a chain, providing interfaces to store and verify them. The public key contained in a certificate can further be assigned to CSM keys so that they can be used by crypto jobs.

  Upstream requirements: ,
⌈
The crypto key sub module of the Key Manager shall be completely disabled if KeyMCryptoKeyManagerEnabled is set to FALSE. No function shall be available, and no resources shall be allocated in this case that is not needed for other operation.
⌋

  Upstream requirements: ,
⌈
The support of the certificate sub module within the Key Manager shall be completely disabled if KeyMCertificateManagerEnabled is set to FALSE.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Crypto key submodule

The crypto key submodule is used to initialize, update and maintain cryptographic key material for an ECU. One use case is the provision of keys for the secured on-board communication that need to be distributed to the involved ECUs. These keys should be provided to CSM keys which are assigned to crypto jobs that are used for authentication of Secured I-PDUs. It is therefore crucial from a modelling aspect to assign the keys provided by the key master to the CSM keys and jobs used for the respective Secured-I PDUs. This is an overall task in a vehicle and affects several ECUs in the same way. It is one purpose of the crypto key submodule to support this operation.

The key master can either be located directly in the vehicle to coordinate the key generation internally, e.g. as a particular ECU. It is also possible to use a backend system in the cloud that generates the key material and provides the necessary data in a secure way to the ECUs. Usually diagnostic commands are used for the communication, directly or indirectly, between the key master and the crypto key sub module.

### 18. 通用行为
*原文标题：General behavior*

Upstream requirements: ,
⌈
The crypto key submodule can be configured to perform crypto key operation in a session like manner. In this way, key operation such as `KeyM_Prepare`() or `KeyM_Update`() are only accepted during an open session.
⌋

  Upstream requirements:
⌈
A session is started by a call to `KeyM_Start`(). Afterwards key operations can be performed until the session is closed with a call to the function `KeyM_Finalize`().
⌋

  Upstream requirements:
⌈
By default, the `KeyM_Start`() function will not consider any input data or length information and will not provide any output data nor will the output data length be changed.
⌋

  Upstream requirements:
⌈
Optionally, a key handler can be called if the configuration option KeyMCryptoKeyHandlerStartFinalizeEnabled is set to TRUE. The `KeyM_Start`() function will call in turn the `KeyM_KH_Start`() function with the same parameter of `KeyM_Start`(). The return value of `KeyM_KH_Start`() will be used as the return value of `KeyM_Start`().
⌋

Rationale:

The `KeyM_KH_Start`() function can perform OEM specific checks like signature verification of any input data to prove the authenticity for a key management operation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Certificate Submodule

The certificate submodule functions of KeyM allow BSW modules and SWCs to perform operations with certificates more efficiently and on a central point within  "the AUTOSAR software architecture". Examples for such operations are the verification of a complete certificate chain or retrieving elements from a certificate that was provided and verified at runtime.

The required cryptographic operations such as verification of a certificate signature are still performed by associated crypto jobs that are defined in the Crypto Service Manager. Also, the secure storage of certificates can be located in key storage locations of the CSM, e.g. to allow to store the root certificate within the HSM.

### 20. 通用行为
*原文标题：General behavior*

The certificate submodule allows to define and configure certificates so that they can be stored at production time and further be used for several purposes. The configuration allows to define certificates of a certificate chain in a hierarchical structure with root, intermediate and target certificates used in a PKI system. The stored certificates will be checked at startup according to the configured hierarchy. The configuration allows also to check if specific certificate elements have determined values. There is further support to read specific elements of a certificate and the contained public key can be associated to a CsmKey to use them with configured CSM crypto jobs.

One important part of the specification is therefore the configuration to define the parts of a certificate for flexible and comprehensive verification and for information extraction. The certificates can be associated to KeyMCryptoKey container. This allows a permanent storage of certificates in either NVM or CSM.

Root and intermediate certificates, if required, can be provided in the production phase of the ECU or the vehicle. These certificates will be permanently stored in a specified place.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 初始化
*原文标题：Initialization*

Upstream requirements: ,
⌈
During initialization, the certificate submodule will retrieve the permanently stored certificates, will prepare them for parsing and make them available on demand, e.g. for certificate element extraction or verification against other certificates.
⌋

Optionally, instead of parsing the certificate on every startup, the certificate submodule can parse the certificate once and store the parsed information in a dedicated NVM block. The advantage to store parsing results in NVM would lead to faster startup of the system.

Since parsing and verification of certificates can take a significant amount of time it is recommended to perform this operation for stored certificates in the background task after startup.

  Upstream requirements: ,
⌈
If the parsing operation was successful, the certificate submodule shall extract the public key from the certificate and shall store it in the provided key reference of the CSM or in NVM.
⌋

Note: Parsing may contain additional processing when defined by the particular specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Certificate 配置
*原文标题：Certificate configuration*

Upstream requirements:
⌈
At least one certificate shall be defined as the Root certificate of a PKI. The KeyMCertUpperHierarchicalCertRef of the corresponding KeyMCertificate container is referencing to itself.
⌋

Rationale:

A root certificate has the characteristics, that the signature is verified with the public key stored in the same certificate (self-signed certificate). It is the top certificate in the hierarchy.

Figure 7-3 shows a configuration of three KeyMCertificate containers in a hierarchal way. It illustrates the configuration of the CSM job and key and the references from the KeyMCertificate. This shows, which CSM job and key are referenced by the containers and which job is used for signature verification.

  Upstream requirements:
⌈
A certificate is stored for verification with the call of the function `KeyM_SetCertificate`(). The certificate will be placed in the preconfigured storage class of the KeyMCertificate/KeyMCertificateStorage.
⌋

Note:

Such a certificate is typically placed in RAM and is not intended to be used for permanent storage. `KeyM_SetCertificate`() is just used for the verification of a presented certificate.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Operation 模式
*原文标题：Operation mode*

Upstream requirements:
⌈
If the configuration item KeyMServiceCertificateFunctionEnabled and KeyMCertificateManagerEnabled is set to TRUE, the certificate submodule shall provide the function `KeyM_ServiceCertificate`{ByCertId}(). This function can be triggered by the key master and is used to provide certificate related information to the certificate submodule. Several certificate related operations can be performed like introduction or update of certificates that are permanently stored in the system.
⌋

Every certificate that can be addressed by its symbolic name KeyMCertificate/KeyMCertificateId provides a status as defined in `KeyM_CertificateStatusType`. Each status will be entered by a defined state transition that is outlined in Figure 7-4. The current status of a certificate can be requested by `KeyM_CertGetStatus`().

  Upstream requirements:
⌈
The certificate status "`KEYM_CERTIFICATE_NOT_AVAILABLE`" is entered after initialization of KeyM. This status can also be entered by a call to `KeyM_SetCertificate`() with a length value of 0 in certDataLength within the `KeyM_CertDataType` structure to reset a certificate and its status (see also ).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Custom 处理
*原文标题：Custom Handling*

Incoming service requests to KeyM can be processed either locally on KeyM or alternatively on an adapted Crypto Driver (e.g. HSM). This is realized by linking KeyM service requests through custom CSM jobs and APIs to an adapted Crypto driver. The adapted Crypto driver may transfer the requests to HSM. This way the KeyM acts as a proxy and the certificate operations which are configured accordingly are processed completely in the crypto stack (e.g. HSM). The KeyM APIs remain the same, independently if the certificate is handled on KeyM locally or in the Crypto Driver. This has the advantage that serialization and deserialization of passed data is handled completely within Crypto Stack .

To be able to execute the KeyM job as a custom crypto job, a mapping to an asynchronous or synchronous job processing at Csm is provided in a dedicated profile in Crypto (see SWS Crypto Driver Chapter 7.5.2 .<ref>). For KeyM synchronous functions like status requests the `Csm_CustomSync` function is used. The Crypto Driver profile also defines settings for it.

  Upstream requirements: ,
⌈
All certificates of a chain shall either by processed by KeyM locally or Csm Custom handling.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Processing Custom 服务 Requests
*原文标题：Processing Custom Service Requests*

Upstream requirements: ,
⌈
The following table shows the provided custom processing functions and their corresponding service requests/functions.
⌋

| KeyM Service Request | Csm API (Custom Processing Function) |
|---|---|
| KeyM_ServiceCertificate | Csm_CustomService |
| KeyM_ServiceCertificateByCertId | Csm_CustomService |
| KeyM_VerifyCertificates | Csm_CustomService |
| KeyM_VerifyCertificate | Csm_CustomService |
| KeyM_VerifyCertificateChain | Csm_CustomService |
| KeyM_CertElementGet | Csm_CustomSync |
| KeyM_CertGetStatus | Csm_CustomSync |
| KeyM_CertificateElementGetByIndex | Csm_CustomSync |
| KeyM_CertificateElementGetCount | Csm_CustomSync |
| KeyM_SetCertificate | Csm_CustomSync |
| KeyM_GetCertificate | Csm_CustomSync |

Note: In case of custom service API is used the APIs `KeyM_CertificateElementGetFirst`() and `KeyM_CertificateElementGetNext`() need to be implemented by usage of `KeyM_CertificateElementGetByIndex`() and `KeyM_CertificateElementGetCount`().

### 26. 安全事件
*原文标题：Security Events*

Upstream requirements:
⌈
If security event reporting has been enabled for the KeyM module ( KeyMEnableSecurityEventReporting = true) the respective security events shall be reported to  "the IdsM" via the interfaces defined in  "`AUTOSAR_SWS_BSWGeneral`".
⌋

The following table lists the security events which are standardized for the KeyM together with their trigger conditions:

 Security events for KeyM
  Upstream requirements:
⌈
| Name | Description | ID |
|---|---|---|
| SEV_CERT_CHAIN_VERIFICATION_FAILED | The verification of a certificate against a certificate chain was not successful. | 5 |
| SEV_CERT_INSTALL | Attempt to install a new certificate. | 95 |
| SEV_CERT_UPDATE | Attempt to update a certificate. | 96 |
| SEV_CERT_DELETE | Attempt to delete a certificate. | 97 |
| SEV_CERT_INSTALLED_BUT_INVALID | An already installed certificate is invalid. | 98 |

⌋

 Security event context data definition: `SEV_CERT_CHAIN_VERIFICATION_FAILED`
  Upstream requirements:
⌈
| SEV Name | SEV_CERT_CHAIN_VERIFICATION_FAILED | < |
|---|---|---|
| ID | 5 | < |
| Description | The verification of a certificate against a certificate chain was not successful. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 28. Development 错误
*原文标题：Development Errors*

Definition of development errors in module KeyM
  Upstream requirements: , , , , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called with invalid parameter (Null Pointer) | KEYM_E_PARAM_POINTER | 0x01 |
| Buffer is too small for operation | KEYM_E_SMALL_BUFFER | 0x02 |
| API called before module has been initialized | KEYM_E_UNINIT | 0x03 |
| KeyM module initialization failed | KEYM_E_INIT_FAILED | 0x04 |
| KeyM configuration failure | KEYM_E_CONFIG_FAILURE | 0x05 |

⌋

### 29. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 30. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 31. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 32. 错误检测
*原文标题：Error detection*

Upstream requirements: , ,
⌈
If development errors are active the Key Manager shall check on every function call if the module has been initialized with `KeyM_Init`() and not yet been de-initialized with `KeyM_Deinit`(). Otherwise, the Development error `KEYM_E_UNINIT` shall be set.
⌋

  Upstream requirements:
⌈
If development errors are active the Key Manager shall check on every function where result buffers are provided if the provided buffer is large enough to store the requested result. If not, the development error `KEYM_E_SMALL_BUFFER` shall be set.
⌋

  Upstream requirements: ,
⌈
If development errors are active the Key Manager shall check on every function where pointers are provided if the pointer is not a `NULL_PTR`. If a `NULL_PTR` is provided but not expected, the development error `KEYM_E_PARAM_POINTER` shall be set.
⌋

### 33. API 规范
*原文标题：API specification*

### 34. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module KeyM
  Upstream requirements: , , , ,
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Csm | Rte_Csm_Type.h | Crypto_OperationModeType |
| ^ | Rte_Csm_Type.h | Crypto_VerifyResultType |
| NvM | Rte_NvM_Type.h | NvM_BlockIdType |
| StbM | Rte_StbM_Type.h | StbM_SynchronizedTimeBaseType |
| ^ | Rte_StbM_Type.h | StbM_TimeBaseStatusType |
| ^ | Rte_StbM_Type.h | StbM_TimeStampType |
| ^ | Rte_StbM_Type.h | StbM_TimeTupleType |
| ^ | Rte_StbM_Type.h | StbM_UserDataType |
| ^ | StbM.h | StbM_VirtualLocalTimeType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 35. 类型定义
*原文标题：Type definitions*

### 36. KeyM_ConfigType

Definition of datatype `KeyM_ConfigType`
  Upstream requirements: ,
⌈
| Name | KeyM_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Implementation specific | < |
| ^ | Type | - |
| ^ | Comment | The content of this data structure is implementation specific |
| Description | This structure is the base type to initialize the Key Manager module. |  |

| A pointer to an instance of this structure will be used in the initialization of the Key Manager module. | < |  |
|---|---|---|
| Available via | KeyM.h | < |

⌋

### 37. KeyM_KH_UpdateOperationType

Definition of datatype `KeyM_KH_UpdateOperationType`
  Upstream requirements:
⌈
| Name | KeyM_KH_UpdateOperationType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | KEYM_KH_UPDATE_KEY_UPDATE_REPEAT | 0x01 | Key handler has successfully performed the operation and provides new key data that shall be further operated by the update function of the key manager. A next call to key handler is requested. |
| ^ | KEYM_KH_UPDATE_FINISH | 0x02 | Key handler has successfully performed all update operation. The update operation is finished and the result data can be provided back for a final result of the KeyM_Update operation. |
| Description | Specifies the type of key handler update operation that was performed in the callback. | < | < |
| Available via | KeyM.h | < | < |

⌋

### 38. KeyM_CertElementIteratorType

Definition of datatype `KeyM_CertElementIteratorType`
  Upstream requirements:
⌈
| Name | KeyM_CertElementIteratorType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Implementation specific | < |
| ^ | Type | - |
| ^ | Comment | The content of this data structure is implementation specific |
| Description | This structure is used to iterate through a number of elements of a certificate. | < |
| Available via | KeyM.h | < |

⌋

### 39. KeyM_CryptoKeyIdType

Definition of datatype `KeyM_CryptoKeyIdType`
  Upstream requirements:
⌈
| Name | KeyM_CryptoKeyIdType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint16 | < | < |
| Description | Crypto key handle. | < | < |
| Available via | KeyM.h | < | < |

⌋

### 40. KeyM_CertDataPointerType

Definition of datatype `KeyM_CertDataPointerType`
  Upstream requirements:
⌈
| Name | KeyM_CertDataPointerType |
|---|---|
| Kind | Pointer |
| Type | uint8* |
| Description | Byte-pointer to the data of the certificate |
| Available via | KeyM.h |

⌋

### 41. Extension to Std_ReturnType

The Key Management module uses the following extension to the `Std_ReturnType`:

 Definition of `Std_ReturnType`-extension for module KeyM
  Upstream requirements: ,
⌈
| Range | KEYM_E_BUSY | 0x02 | Key management is busy with other operations. |
|---|---|---|---|
| ^ | KEYM_E_PENDING | 0x03 | Operation request accepted, response is pending. It runs now in asynchronous mode, response will be given through callback. |
| ^ | KEYM_E_KEY_CERT_SIZE_MISMATCH | 0x04 | Parameter size does not match the expected value. |
| ^ | KEYM_E_PARAMETER_MISMATCH | 0x05 | Parameter to function does not provide the expected value. |
| ^ | KEYM_E_KEY_CERT_INVALID | 0x06 | Key or certificate is invalid and cannot be used for the operation. |
| ^ | KEYM_E_KEY_CERT_WRITE_FAIL | 0x07 | Certificate or key write operation failed. |
| ^ | KEYM_E_KEY_CERT_UPDATE_FAIL | 0x08 | Key or certificate update operation failed. |
| ^ | KEYM_E_KEY_CERT_READ_FAIL | 0x09 | Certificate or key could not be provided due to a read or permission failure. |
| ^ | KEYM_E_KEY_CERT_EMPTY | 0x0A | The requested key or certificate is not available, slot is empty. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. 功能定义
*原文标题：Function definitions*

This is a list of functions provided to upper layer modules.

### 43. 通用
*原文标题：General*

### 44. KeyM_Init

Definition of API function `KeyM_Init`
  Upstream requirements: , , , ,
⌈
| Service Name | KeyM_Init | < |
|---|---|---|
| Syntax | void KeyM_Init ( |  |

  const `KeyM_ConfigType`* ConfigPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | ConfigPtr | Pointer to the configuration set in VARIANT-POST-BUILD. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function initializes the key management module. | < |
| Available via | KeyM.h | < |

⌋

  Upstream requirements:
⌈
The Configuration pointer configPtr shall always have a `NULL_PTR` value.
⌋

Note: A Configuration of the Key Manager at initialization is currently not used and shall therefore pass a `NULL_PTR` to the module.

  Upstream requirements:
⌈
If the initialization of the key management module fails and development errors are activated, the error `KEYM_E_INIT_FAILED` shall be reported to the DET.
⌋

  Upstream requirements: ,
⌈
If the certificate submodule is active and permanently stored certificates are available in unparsed and unverified state, the KeyM certificate submodule part shall start a background task to pre-parse and pre-verify certificates.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. KeyM_Deinit

Definition of API function `KeyM_Deinit`
  Upstream requirements: , ,
⌈
| Service Name | KeyM_Deinit | < |
|---|---|---|
| Syntax | void KeyM_Deinit ( |  |

  void
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This function resets the key management module to the uninitialized state. | < |
| Available via | KeyM.h | < |

⌋

  Upstream requirements:
⌈
For security reason the crypto key submodule shall actively destroy all data in RAM that was used for cryptographical key material. Especially symmetric keys and intermediate results shall be set to an initial value.
⌋

### 46. KeyM_GetVersionInfo

Definition of API function `KeyM_GetVersionInfo`
  Upstream requirements: , ,
⌈
| Service Name | KeyM_GetVersionInfo | < |
|---|---|---|
| Syntax | void KeyM_GetVersionInfo ( |  |

  `Std_VersionInfoType`* VersionInfo
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | VersionInfo | Pointer to the version information of this module. |
| Return value | None | < |
| Description | Provides the version information of this module. | < |
| Available via | KeyM.h | < |

⌋

### 47. Crypto key operation

### 48. KeyM_Start

Definition of API function `KeyM_Start`
  Upstream requirements: , , , ,
⌈
| Service Name | KeyM_Start | < |
|---|---|---|
| Syntax | Std_ReturnType KeyM_Start ( |  |

  `KeyM_StartType` StartType,
  const uint8* RequestData,
  uint16 RequestDataLength,
  uint8* ResponseData,
  uint16* ResponseDataLength
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | StartType | Defines in which mode the key operation shall be executed. |
| ^ | RequestData | Information that comes along with the request, e.g. signature |
| ^ | RequestDataLength | Length of data in the RequestData array |
| Parameters (inout) | ResponseDataLength | In: Max number of bytes available in ResponseData Out: Actual number |
| Parameters (out) | ResponseData | Data returned by the function. |
| Return value | Std_ReturnType | E_OK: Start operation successfully performed. Key update operations are now allowed. E_NOT_OK: Start operation not accepted. KEYM_E_PARAMETER_MISMATCH: Parameter do not match with expected value. KEYM_E_KEY_CERT_SIZE_MISMATCH: Parameter size doesn't match |
| Description | This function is optional and only used if the configuration item KeyMCryptoKeyStartFinalizeFunctionEnabled is set to true. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 109 章（内容从略，见纯文本全文）

49. KeyM_Prepare
50. KeyM_Update
51. KeyM_Finalize
52. KeyM_Verify
53. Certificate 处理
54. KeyM_ServiceCertificate
55. KeyM_SetCertificate
56. KeyM_GetCertificate
57. KeyM_VerifyCertificates
58. KeyM_VerifyCertificate
59. KeyM_VerifyCertificateChain
60. KeyM_CertElementGet
61. KeyM_CertElementGetByIndex
62. KeyM_CertElementGetCount
63. KeyM_CertElementGetFirst
64. KeyM_CertElementGetNext
65. KeyM_CertGetStatus
66. Callback 通知
67. Call-out 定义
68. Scheduled functions
69. KeyM_MainFunction
70. KeyM_MainBackgroudFunction
71. Expected 接口
72. Mandatory 接口
73. Optional 接口
74. Configurable 接口
75. KeyM_KH_Start
76. KeyM_KH_Prepare
77. KeyM_KH_Update
78. KeyM_KH_Finalize
79. KeyM_KH_Verify
80. KeyM_KH_ServiceCertificate
81. KeyM_CryptoKeyUpdateCallbackNotification
82. KeyM_CryptoKeyFinalizeCallbackNotification
83. KeyM_CryptoKeyVerifyCallbackNotification
84. KeyM_ServiceCertificateCallbackNotification
85. KeyM_CertificateVerifyCallbackNotification
86. 服务接口
87. 范围 of this Chapter
88. 数据类型
89. KeyM_StartType
90. KeyM_CertElementIdType
91. KeyM_CertificateIdType
92. KeyM_ServiceCertificateType
93. KeyM_KeyCertNameDataType
94. KeyM_CertificateStatusType
95. KeyM_CertificateElementType_{ KeyMCertificate }_{ KeyMCertificateElement }
96. KeyM_CryptoKeyDataType
97. KeyM_ResultType
98. KeyM_CertDataType
99. KeyM__Type__KeyM_CertContextDataError
100. Client-Server-Interfaces
101. KeyMCertificate
102. KeyMCertificateElement
103. KeyMCryptoKey
104. KeyMVerifyCertificateNotification
105. KeyMServiceCertificate
106. KeyMServiceCertificatetByCertId
107. KeyMServiceCertificateNotification
108. KeyMCryptoKeyNotification
109. Ports
110. KeyMCertificate_{KeyMCertificate}
111. KeyMServiceCertificateNotification_{KeyMCertificate}
112. KeyMCertificateElement_{KeyMCertificate}_{KeyMCertificateElement}
113. KeyMCryptoKey
114. KeyMCryptoKeyNotification
115. KeyM_VerifiyCertificateNotification_{KeyMCertificate}
116. KeyM_ServiceCertificate_{KeyMCertificate}
117. KeyM_ServiceCertificateByCertId_{KeyMCertificate}
118. 时序图
119. Store single key
120. Store 多 keys
121. Derive key
122. Add working certificate
123. Add root or intermediate certificate
124. 配置规范
125. How to read this chapter
126. Containers and 配置 parameters
127. KeyM
128. KeyMGeneral
129. KeyMCertificate
130. KeyMCertificateElement
131. KeyMCertificateElementVerification
132. KeyMCertificateElementRule
133. KeyMCertificateElementCondition
134. KeyMCertificateElementConditionPrimitive
135. KeyMCertificateElementConditionArray
136. KeyMCertificateElementConditionArrayElement
137. KeyMCertificateElementConditionCerificateElement
138. KeyMCertificateElementConditionSenderReceiver
139. KeyMCryptoKey
140. KeyMNvmBlock
141. KeyMSecurityEventRefs
142. 发布信息
143. 附录
144. 不适用需求
145. History of 规范 Items
146. 规范 Item History of this document compared to AUTOSAR R23-11.
147. Added 规范 Items in R23-11
148. Changed 规范 Items in R23-11
149. Deleted 规范 Items in R23-11
150. 规范 Item History of this document compared to AUTOSAR R24-11.
151. Added 规范 Items in R24-11
152. Changed 规范 Items in R24-11
153. Deleted 规范 Items in R24-11
154. Traceable item history of this document according to AUTOSAR Release R25-11
155. Added 规范 Items in R25-11
156. Changed 规范 Items in R25-11
157. Deleted 规范 Items in R25-11
