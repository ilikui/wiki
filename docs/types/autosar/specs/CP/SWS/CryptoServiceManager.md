# Specification of Crypto Service Manager (`CryptoServiceManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 402 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CryptoServiceManager_402\AUTOSAR_CP_SWS_CryptoServiceManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CryptoServiceManager_402\AUTOSAR_CP_SWS_CryptoServiceManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CryptoServiceManager_402\zzgen\CP_SWS_CryptoServiceManager.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the software module Crypto Service Manager (CSM) to satisfy the top-level requirements represented in the CSM Requirements Specification .

The CSM shall provide synchronous or asynchronous services to enable a unique access to basic cryptographic functionalities for all software modules. The CSM shall provide an abstraction layer, which offers a standardized interface to higher software layers to access these functionalities.

The functionality required by a software module can be different to the functionality required by other software modules. For this reason, there shall be the possibility to configure and initialize the services provided by the CSM individually for each software module. This configuration comprises as well the selection of synchronous or asynchronous processing of the CSM services.

The construction of the CSM module follows a generic approach. Wherever a detailed specification of structures and interfaces would limit the scope of the usability of the CSM, interfaces and structures are defined in a generic way. This provides an opportunity for future extensions.

## 模块依赖

Upstream requirements:
⌈
The CSM shall be able to access the cryptographic interface (CRYIF), which is implemented according to the cryptographic interface specification.
⌋

  Upstream requirements:
⌈
The CSM module shall use the interfaces of the CRYIF with the underlying Crypto Drivers (CRYPTO) to calculate the result of a cryptographic service.
⌋

The incorporated cryptographic library modules or hardware extensions of the Crypto Driver provide the cryptographic routines, e.g. SHA-1, RSA, AES, Diffie-Hellman key-exchange, etc.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the software module Crypto Service Manager (CSM) to satisfy the top-level requirements represented in the CSM Requirements Specification .

The CSM shall provide synchronous or asynchronous services to enable a unique access to basic cryptographic functionalities for all software modules. The CSM shall provide an abstraction layer, which offers a standardized interface to higher software layers to access these functionalities.

The functionality required by a software module can be different to the functionality required by other software modules. For this reason, there shall be the possibility to configure and initialize the services provided by the CSM individually for each software module. This configuration comprises as well the selection of synchronous or asynchronous processing of the CSM services.

The construction of the CSM module follows a generic approach. Wherever a detailed specification of structures and interfaces would limit the scope of the usability of the CSM, interfaces and structures are defined in a generic way. This provides an opportunity for future extensions.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Crypto Service Manager module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| AEAD | Authenticated Encryption with Associated Data |
| CDD | Complex Device Driver |
| CSM | Crypto Service Manager |
| CRYIF | Crypto Interface |
| CRYPTO | Crypto Driver |
| DET | Default Error Tracer |
| HSM | Hardware Security Module |
| HW | Hardware |
| SHE | Security Hardware Extension |
| SW | Software |

| Terms: | Description: | < |
|---|---|---|
| Crypto Driver Object | A Crypto Driver implements one or more Crypto Driver Objects. The Crypto Driver Object can offer different crypto primitives in hardware or software. The Crypto Driver Objects of one Crypto Driver are independent of each other. |  |

| There is only one workspace for each Crypto Driver Object (i.e. only one crypto primitive can be performed at the same time) | < |
|---|---|
| Key | A Key can be referenced by a job in the Csm. |

| In the Crypto Driver, the key refers a specific key type. | < |
|---|---|
| Key Type | A key type consists of refers to key elements. |

| The key types are typically pre-configured by the vendor of the Crypto Driver. | < |
|---|---|
| Key Element | Key elements are used to store data. This data can be e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Crypto Service Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Crypto Service Manager.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

Some type definitions of CSM start with the Prefix "CRYPTO_" which will violate . This will be harmonized in release 4.3.1. Nevertheless due to the constraint  part 1 the ports are still consider to be compatible.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

n.a.

### 9. Security Implications

There is no user management in place, which prevents non-authorized access on any of CSM's services. This means, that if any access protection is needed such must be implemented by the application and the served (by CSM) cryptographic library modules; access protection is not target of the CSM.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

Upstream requirements:
⌈
The CSM shall be able to access the cryptographic interface (CRYIF), which is implemented according to the cryptographic interface specification.
⌋

  Upstream requirements:
⌈
The CSM module shall use the interfaces of the CRYIF with the underlying Crypto Drivers (CRYPTO) to calculate the result of a cryptographic service.
⌋

The incorporated cryptographic library modules or hardware extensions of the Crypto Driver provide the cryptographic routines, e.g. SHA-1, RSA, AES, Diffie-Hellman key-exchange, etc.

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| Callback Function Return Types for AUTOSAR BSW |  |  |
| AUTOSAR Basic Software Modules callback functions are allowed to have parameters |  |  |
| The main processing function of each AUTOSAR Basic Software Module shall be named according the defined convention |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| Modules should have separate main processing functions for read/receive and write/transmit data path |  |  |
| Configuration data shall be defined in a structure |  |  |
| Each primitive of the CRYIF shall belong to exactly one service of the CSM |  |  |
| The Crypto Stack shall allow static configuration of keys used for cryptographic jobs |  |  |

 | T

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 功能规范
*原文标题：Functional specification*

### 13. 基础架构指南
*原文标题：Basic Architecture Guidelines*

The starting point for the description of the design of the CSM module is the AUTOSAR Layered Software Architecture (see Figure ). The description of the CSM module architecture on the basis of the AUTOSAR layered software architecture shall help to understand the specification of interfaces and functionalities of the CSM module in the following sections.

The architecture of AUTOSAR consists of several layers which can be seen in Figure . The Service Layer is the highest layer of the Basic Software. Its task is to provide basic services for application and basic software modules, i.e. it offers the most relevant functionalities for application software and basic software modules.

CSM is a service that provides cryptography functionality, based on a crypto driver which relies on a software library or on a hardware module. Also, mixed setups with multiple crypto drivers are possible. The CSM accesses the different CryptoDrivers over the CRYIF.

The CSM, as a service layer, provides the interface for SW-C or BSW for cryptographic operations. The main task of the CSM is to schedule and prioritize services and to call the crypto interface (CryIf) for further operation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 通用行为
*原文标题：General Behavior*

Upstream requirements:
⌈
A job is an instance of a configurated cryptographic primitive.
⌋

⌈
For each job just one instance shall be processed by CSM at a time.
⌋

  Upstream requirements:
⌈
The CSM module shall allow parallel processing of different jobs.
⌋

  Upstream requirements:
⌈
If a service of the CSM module is requested and the corresponding job is in "ACTIVE" state, the job request shall call `CryIf_ProcessJob` and pass on the return value.
⌋

  Upstream requirements:
⌈
If a service of the CSM module is requested, and the CSM job needs to be queued and the queue is full, the job request shall be rejected with the return value `CRYPTO_E_BUSY`.
⌋

  Upstream requirements:
⌈
If an asynchronous interface is configured, the CSM module shall provide a main function `Csm_MainFunction` which is called cyclically to control processing of the jobs via a state machine.
⌋

### 15. Normal Operation

Upstream requirements:
⌈
To unite a single call function and the streaming approach for the crypto services, there is the mode parameter, which determines the operation mode. This service operation is a flag field, indicating the operation mode "START", "UPDATE" or "FINISH". It declares explicitly what operation shall be performed. These operation modes can be mixed, and execute multiple operations at once.

The diagram in  (in ) shows the state machine of a job of this design.
⌋

Note: The actual transaction of the states is made in the layer, which works with these states, i.e. in the Crypto Driver.

⌈
The CSM crypto services shall support to process multiple operation mode inputs with a single call.
⌋

  Upstream requirements:
⌈
If the `CRYPTO_OPERATIONMODE_START` and `CRYPTO_OPERATIONMODE_FINISH` bits are set and the `CRYPTO_OPERATIONMODE_UPDATE` is not set, the Csm_<Service> function shall return with E_NOT_OK.
⌋

Note: The coherent single call approach could improve the performance due to less overhead. Instead of calling the explicit API multiple times, only one call is necessary. This approach is intended to be used with small data input, which demand fast processing.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 配置
*原文标题：Configuration*

Upstream requirements:
⌈
Each crypto primitive configuration shall be realized as a constant structure of type `Crypto_PrimitiveInfoType`.
⌋

  Upstream requirements:
⌈
Each job primitive configuration shall be realized as a constant structure of type `Crypto_JobPrimitiveInfoType`.
⌋

  Upstream requirements:
⌈
It shall be possible to create several configurations for each cryptographic primitive.
⌋

Note: One configuration per job per primitive is possible.

  Upstream requirements:
⌈
When creating a primitive configuration, it shall be possible to configure all available and allowed schemes from the underlying Crypto Driver Object.
⌋

  Upstream requirements:
⌈
If the asynchronous interface is chosen, each job primitive configuration shall contain a callback function.
⌋

### 17. Synchronous Job Processing

Upstream requirements:
⌈
When the synchronous interface is used, the interface functions shall immediately compute the result with the help of the underlying Crypto Stack modules.
⌋

  Upstream requirements:
⌈
If a synchronous job is issued and the priority is greater than the highest priority available in the queue, the CSM shall disable processing new jobs from the queue until the next call of the main function has finished that follows after completion of the currently processed job.
⌋

Note: Channels may hold jobs of both asynchronous and synchronous processing type. If so, a synchronous job might not be accepted for processing although its job's priority is higher than those of all asynchronous jobs.

Note: As the underlying Crypto Driver can have its own queue, it can not always be ensured that the highest priority job provided by the application is processed next.

  Upstream requirements:
⌈
If a synchronous job is issued and the priority is less than the highest priority available in the queue, the CSM shall return `CRYPTO_E_BUSY`.
⌋

Note: By pausing calls to the CSM main function with e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Asynchronous Job Processing

Upstream requirements:
⌈
If the asynchronous interface is used, the interface functions shall only hand over the necessary information to the underlying Crypto Stack modules.
⌋

  Upstream requirements:
⌈
The users of the CSM shall be notified when a requested cryptographic service has been processed by calling the callback function from the job primitive configuration.
⌋

### 19. 设计 Notes
*原文标题：Design Notes*

The CSM provides two services:

# the crypto services itself and
# key management.

### 20. CSM 模块启动
*原文标题：CSM module startup*

The `Csm_Init` request shall not be responsible to trigger the initialization of the underlying CRYIF. It is assumed, that the underlying CRYIF will be initialized by any appropriate entity (e.g. BswM).

Software components, which are using the CSM module, shall be responsible for checking global error and status information resulting from the CSM module startup.

### 21. Crypto 服务
*原文标题：Crypto Services*

### 22. Usage of the CSM crypto 服务
*原文标题：Usage of the CSM crypto services*

Upstream requirements:
⌈
CSM crypto services shall provide a Csm_<Service> API.
⌋

  Upstream requirements:
⌈
The application shall be able to call Csm_<Service> with the operation mode `CRYPTO_OPERATIONMODE_START` to initialize cryptographic computations.
⌋

  Upstream requirements:
⌈
The application shall be able to call Csm_<Service> with the operation mode `CRYPTO_OPERATIONMODE_UPDATE` arbitrary often, but at least one time, to feed the job's crypto primitive with input data.
⌋

  Upstream requirements:
⌈
The application shall be able to call Csm_<Service> with the operation mode `CRYPTO_OPERATIONMODE_FINISH` to finalize cryptographic computations.
⌋

  Upstream requirements:
⌈
Only the service operations HASH, MACGENERATE, MACVERIFY, ENCRYPT, DECRYPT, `AEAD_ENCRYPT`, `AEAD_DECRYPT`, SIGNATUREGENERATE, SIGNATUREVERIFY shall support the operation mode START, UPDATE and FINISH as specified from the API. For all other service operations, the CSM shall set the operation mode to `CRYPTO_OPERATIONMODE_SINGLECALL`, even if the API does not provide an operation mode.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Queuing

The CSM may have several queues, where the jobs are lining up depending on their priority, to process multiple cryptographic requests. The path from a CSM queue via the CryIf to a Crypto Driver Object is called a channel. Each queue of the CSM is mapped to one channel to access the crypto primitives of the Crypto Driver Object. The size of the queue is configurable.

To optimize the hardware usage of the Crypto Driver Object, there is optionally a queue in Crypto Driver, too.

A Crypto Driver Object represents an instance of an independent crypto "device" (hardware or software, e.g. AES accelerator). There could be a channel for fast AES and CMAC calculations on an HSM for jobs with high priority, which ends on a native AES calculation service in the Crypto Driver. But it is also possible, that a Crypto Driver Object is a piece of software, e.g. for RSA calculations where users are able to encrypt, decrypt, sign or verify data.

Figure  illustrates an AUTOSAR Layered View with channels. In this example, there is a HSM with two Crypto Driver Objects (HW-AES and HW-RSA), each of them has an own channel. Each channel is connected to a CSM queue and a Crypto Driver Object queue.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Key 管理
*原文标题：Key Management*

⌈
Services belonging to the key management shall provide the Csm_<Service> function, only.
⌋

⌈
A key consists of one or more key elements.
⌋

Examples of key elements are the key material itself, an initialization vector, a seed for random number generation, or the proof of the SHE standard.

Keys, i.e. the corresponding key IDs have symbolic names given by the configuration. The Crypto Stack API uses the following key element index definition from the CSM module:

⌈
| Crypto Service: | Key element: | Key element Name: | Key element ID: |
|---|---|---|---|
| MAC | Key Material | CRYPTO_KE_MAC_KEY | 1 |
| ^ | Proof (SHE) | CRYPTO_KE_MAC_PROOF | 2 |
| ^ | Seed | CRYPTO_KE_KEYGENERATE_SEED | 16 |
| Signature | Key Material | CRYPTO_KE_SIGNATURE_KEY | 1 |
| ^ | ECC curve type | CRYPTO_KE_SIGNATURE_CURVETYPE | 29 |
| Random | Seed State | CRYPTO_KE_RANDOM_SEED_STATE | 3 |
| ^ | Algorithm | CRYPTO_KE_RANDOM_ALGORITHM | 4 |
| Cipher/AEAD | Key Material | CRYPTO_KE_CIPHER_KEY | 1 |
| ^ | Proof (SHE) | CRYPTO_KE_CIPHER_PROOF | 2 |
| ^ | Init Vector | CRYPTO_KE_CIPHER_IV | 5 |
| ^ | 2^(nd) Key Material | CRYPTO_KE_CIPHER_2NDKEY | 7 |
| Key Exchange | Base | CRYPTO_KE_KEYEXCHANGE_BASE | 8 |
| ^ | Private Key | CRYPTO_KE_KEYEXCHANGE_PRIVKEY | 9 |
| ^ | Own Public Key |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Crypto 驱动 profiles
*原文标题：Crypto Driver profiles*

The Crypto Driver can support vendor specific custom services and custom synchronous API functions, triggered by `Csm_CustomService` and `Csm_CustomSync` (`Crypto_CustomSync`). In order to align the realization also for other BSW modules for a particular use case, a definition of key elements is required. This is defined by the definition of profiles for particular use case. The following defines groups of key element ids as they are used in a particular Crypto Driver profile. They shall be made available via `Crypto_GeneralTypes`.h

 Mapping table for KeyM Certificate Elements
  Upstream requirements:
⌈
Profile: KeyM and certificate management
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Redirection of Input and/or Output of Crypto Jobs

⌈
The input and/or output data of a job can be re-directed to a key element. Which input and output value to which key and its key element is re-directed shall be statically configured at compile time and shall not be changed at runtime.
⌋

⌈
If an input or output value of a job is re-directed to a key element (CsmInOutRedirectionRef  is existing) and the corresponding input or output length value is not set to 0, the job shall not be processed and E_NOT_OK shall be returned.
⌋

⌈
If input or output redirection is not used for a job (no CsmInOutRedirectionRef  is existing), jobRedirectionInfoRef shall be set to `NULL_PTR`. If redirection is used (CsmInOutRedirectionRef  is existing) the jobRedirectionInfoRef shall point to a structure of `Crypto_JobRedirectionInfoType`.
⌋

⌈
The structure `Crypto_JobRedirectionInfoType` contains information which key elements shall be used for redirection. A bit field called redirectionConfig is provided that indicates which input and/or output value is redirected.

The value of redirectionConfig is a bit coded value that is used to indicate, which of the input and output buffers are redirected.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Job context 接口
*原文标题：Job context interface*

The job context interface allows to save or restore the context data of the workspace for a specific crypto service from the crypto driver. This allows to store all dynamically created data within a crypto driver so that it can later be restored to continue this operation at the exact point where the context snapshot was taken.

Key element data are not affected. This means, that key elements are not part of the context data and must be set or read by the key element interface separately if necessary.

⌈
In addition to the standard error detection, on a call to `Csm_SaveContextJob` or `Csm_RestoreContextJob` the CSM shall check if the related job is currently active. If so, the operation shall continue as specified. Otherwise (the job is in `CRYPTO_JOBSTATE_IDLE` state), the function shall immediately return with E_NOT_OK.
⌋

⌈
On a call to `Csm_SaveContextJob` or `Csm_RestoreContextJob` the CSM shall check if the related job is currently actively processing data, means the CSM has scheduled an operation related to this job to the driver and is waiting for a response. In this case, the function shall immediately return with E_NOT_OK.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 29. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Csm
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API request called with invalid parameter (Nullpointer) | CSM_E_PARAM_POINTER | 0x01 |
| Csm Configuration ID out of range | CSM_E_PARAM_HANDLE | 0x04 |
| API request called before initialization of CSM module | CSM_E_UNINIT | 0x05 |
| Initialization of CSM module failed | CSM_E_INIT_FAILED | 0x07 |
| API request called with invalid processing mode | CSM_E_PROCESSING_MODE | 0x08 |
| Mismatch between the called API request and the service type of the job | CSM_E_SERVICE_TYPE | 0x09 |

⌋

### 30. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Csm
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Queue overrun | CSM_E_QUEUE_FULL | 0x01 |

⌋

### 31. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 32. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 33. 错误检测
*原文标题：Error Detection*

⌈
While the CSM is not initialized and any function of the CSM API is called, except of `Csm_Init`, the operation shall not be performed and `CSM_E_UNINIT` shall be reported to the DET when CsmDevErrorDetect is true.
⌋

⌈
If a pointer to null is passed to an API function and the corresponding input or output data are not re-directed to a key element, the operation shall not be performed and `CSM_E_PARAM_POINTER` shall be reported to the DET when CsmDevErrorDetect is true.
⌋

⌈
If a CSM API with a ID handle in its interface is called and the ID handle is out of range, the operation shall not be performed and `CSM_E_PARAM_HANDLE` shall be reported to the DET when CsmDevErrorDetect is true.
⌋

  Upstream requirements:
⌈
If a CSM API with a job handle (called jobId) in its interface is called and the `Crypto_ServiceInfoType` of the job does not match the requested service, the operation shall not be performed and `CSM_E_SERVICE_TYPE` shall be reported to the DET when CsmDevErrorDetect is true.
⌋

  Upstream requirements:
⌈
If a CSM job needs to be queued and the queue is full, the runtime error `CSM_E_QUEUE_FULL` shall be reported to the DET.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Multicore

In case the Crypto-Stack is distributed across several partitions, Csm shall allow calls of its <service> APIs in different partitions.

⌈
CsmQueues shall be handled within the MainFunction, which is referenced via CsmQueueMainFunctionRef.
⌋

Note: In case the a CsmJob is not processed inside MainFunction context at all (Synchronous interfacing), the MainFunction assignment (via the respective CsmQueue) defines the partition, where the CsmJob is assigned to.

⌈
The Csm module shall apply appropriate mechanisms to allow calls of Csm_<Service> API from partitions its CsmJobs are assigned to.
⌋

### 35. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 36. API 规范
*原文标题：API specification*

### 37. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module Csm
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_ReturnType |

⌋

### 38. 类型定义
*原文标题：Type definitions*

Definition of `Std_ReturnType`-extension for module Csm
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

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module.

  Upstream requirements:
⌈
All functions need not to be reentrant. For behavior in case of a reentrant call see .
⌋

### 40. 通用接口
*原文标题：General Interface*

Definition of API function `Csm_Init`
  Upstream requirements: , ,
⌈
| Service Name | Csm_Init | < |
|---|---|---|
| Syntax | void Csm_Init ( |  |

  const `Csm_ConfigType`* configPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x00 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | configPtr | Pointer to a selected configuration structure |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | Initializes the CSM module. In configurations, in which Csm is assigned to more than one partition (i.e. Csm_MainFunctions are mapped to partitions), Csm may provide one init function per partition. | < |
| Available via | Csm.h | < |

⌋

  Upstream requirements:
⌈
The Configuration pointer configPtr shall always have a null pointer value.
⌋

The Configuration pointer configPtr is currently not used and shall therefore be set null pointer value.

  Upstream requirements:
⌈
If the initialization of the CSM module fails, the CSM shall report `CSM_E_INIT_FAILED` to the DET when CsmDevErrorDetect is true.
⌋

### 41. Hash 接口
*原文标题：Hash Interface*

A cryptographic hash function is a deterministic procedure that takes an arbitrary block of data and returns a fixed-size bit string, the hash value, such that an accidental or intentional change to the data will change the hash value. Main properties of hash functions are that it is infeasible to find a message that has a given hash or to find two different messages with the same hash.

 Definition of API function `Csm_Hash`
  Upstream requirements:
⌈
| Service Name | Csm_Hash | < |
|---|---|---|
| Syntax | Std_ReturnType Csm_Hash ( |  |

  uint32 jobId,
  `Crypto_OperationModeType` mode,
  const uint8* dataPtr,
  uint32 dataLength,
  uint8* resultPtr,
  uint32* resultLengthPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x5d | < |
| Sync/Async | Depends on configuration | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | jobId | Holds the identifier of the job using the CSM service. |
| ^ | mode | Indicates which operation mode(s) to perfom. |
| ^ | dataPtr | Contains the pointer to the data for which the hash shall be computed. |
| ^ | dataLength | Contains the number of bytes to be hashed. |
| Parameters (inout) | resultLengthPtr | Holds a pointer to the memory location in which the output length in bytes is stored. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. MAC 接口
*原文标题：MAC Interface*

A message authentication code (MAC) is a short piece of information used to authenticate a message. A MAC algorithm accepts as input a secret key and an arbitrary-length message to be authenticated, and outputs a MAC. The MAC value protects both a message's data integrity as well as its authenticity, by allowing verifiers (who also possess the secret key) to detect any changes to the message content.

 Definition of API function `Csm_MacGenerate`
  Upstream requirements:
⌈
| Service Name | Csm_MacGenerate | < |
|---|---|---|
| Syntax | Std_ReturnType Csm_MacGenerate ( |  |

  uint32 jobId,
  `Crypto_OperationModeType` mode,
  const uint8* dataPtr,
  uint32 dataLength,
  uint8* macPtr,
  uint32* macLengthPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x60 | < |
| Sync/Async | Depends on configuration | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | jobId | Holds the identifier of the job using the CSM service. |
| ^ | mode | Indicates which operation mode(s) to perfom. |
| ^ | dataPtr | Contains the pointer to the data for which the MAC shall be computed. |
| ^ | dataLength | Contains the number of bytes to be hashed. |
| Parameters (inout) | macLengthPtr | Holds a pointer to the memory location in which the output length in bytes is stored. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 99 章（内容从略，见纯文本全文）

43. CipherInterface
44. Authenticated Encryption with Associated 数据 (AEAD) 接口
45. Signature 接口
46. Random 接口
47. Key 管理接口
48. Key Setting 接口
49. Key Status 接口
50. Key Extraction 接口
51. Key Copying 接口
52. Key Generation 接口
53. Key Derivation 接口
54. Key Exchange 接口
55. Cryptographic Primitives and Schemes
56. Context Save and Restore
57. Job Cancellation 接口
58. Custom 接口
59. Custom 服务接口
60. Custom Sync 接口
61. Callback 通知
62. Scheduled functions
63. Expected 接口
64. Mandatory 接口
65. Optional 接口
66. Configurable 接口
67. 服务接口
68. Client-Server-Interfaces
69. Client-Server 接口 (DATA_REFERENCES)
70. Client-Server-Interfaces (Key 管理)
71. Client-Server-Interfaces (Context 服务)
72. Client-Server-Interface 回调
73. Implementation 数据类型
74. Ports
75. 时序图
76. Asynchronous Calls
77. Synchronous Calls
78. 配置规范
79. How to read this chapter
80. Containers and 配置 parameters
81. Csm
82. CsmGeneral
83. CsmMainFunction
84. CsmJobs
85. CsmJob
86. CsmKeys
87. CsmKey
88. CsmQueues
89. CsmQueue
90. CsmInOutRedirections
91. CsmInOutRedirection
92. CsmPrimitives
93. CsmHash
94. CsmHashConfig
95. CsmMacGenerate
96. CsmMacGenerateConfig
97. CsmMacVerify
98. CsmMacVerifyConfig
99. CsmEncrypt
100. CsmEncryptConfig
101. CsmDecrypt
102. CsmDecryptConfig
103. CsmAEADEncrypt
104. CsmAEADEncryptConfig
105. CsmAEADDecrypt
106. CsmAEADDecryptConfig
107. CsmSignatureGenerate
108. CsmSignatureGenerateConfig
109. CsmSignatureVerify
110. CsmSignatureVerifyConfig
111. CsmRandomGenerate
112. CsmRandomGenerateConfig
113. CsmCustom
114. CsmCustomConfig
115. CsmJobKeySetValid
116. CsmJobKeySetValidConfig
117. CsmJobKeySetInvalid
118. CsmJobKeySetInvalidConfig
119. CsmJobRandomSeed
120. CsmJobRandomSeedConfig
121. CsmJobKeyDerive
122. CsmJobKeyDeriveConfig
123. CsmJobKeyGenerate
124. CsmJobKeyGenerateConfig
125. CsmJobKeyExchangeCalcPubVal
126. CsmJobKeyExchangeCalcPubValConfig
127. CsmJobKeyExchangeCalcSecret
128. CsmJobKeyExchangeCalcSecretConfig
129. CsmCallbacks
130. CsmCallback
131. CsmJobKeyWrap
132. CsmJobKeyWrapConfig
133. CsmJobKeyUnwrap
134. CsmJobKeyUnwrapConfig
135. 发布信息
136. 附录
137. Change history of AUTOSAR traceable items
138. Traceable item history of this document according to AUTOSAR Release R25-11
139. Added 规范 Items in R25-11
140. Changed 规范 Items in R25-11
141. Deleted 规范 Items in R25-11
