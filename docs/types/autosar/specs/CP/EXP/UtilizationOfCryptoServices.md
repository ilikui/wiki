# Utilization of Crypto Services (`UtilizationOfCryptoServices`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 602 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_UtilizationOfCryptoServices_602\AUTOSAR_CP_EXP_UtilizationOfCryptoServices.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_UtilizationOfCryptoServices_602\AUTOSAR_CP_EXP_UtilizationOfCryptoServices.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_UtilizationOfCryptoServices_602\zzgen\CP_EXP_UtilizationOfCryptoServices.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. 目的 of the Document
*原文标题：Purpose of the Document*

This document describes the intended usage of the AUTOSAR specified cryptographic functionality starting with AUTOSAR 4.3. The purpose of the document is to introduce the user/integrator to the principle concepts of the AUTOSAR supported cryptographic functionality.

### 3. 范围 of the Document
*原文标题：Scope of the Document*

The scope of this document is to help crypto stack integrators and users to understand:

* Architecture of AUTOSAR crypto stack;
* Integral representation of modules and their relationships;
* Integration of crypto hardware and software.

### 4. 限制
*原文标题：Limitations*

No limitations

### 5. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 6. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| BSW | Basic Software |
| CDD | Complex Device Driver |
| CRYIF | Crypto Interface |
| CRYPTO | Crypto Driver |
| CSM | Crypto Service Manager |
| HSM | Hardware Security Module |
| NvM | NVRAM Manager |
| RTE | Runtime Environment |
| SHE | Security Hardware Extension |
| SWC | Software Component |

### 7. 定义 of terms
*原文标题：Definition of terms*

| Terms: | Description: | < |
|---|---|---|
| Crypto Driver Object | A Crypto Driver implements one or more Crypto Driver Objects. The Crypto Driver Object can offer different crypto primitives in hardware or software. The Crypto Driver Objects of one Crypto Driver are independent of each other. There is only one workspace for each Crypto Driver Object (i.e. only one crypto primitive can be performed at the same time). | < |
| Crypto Primitive | A crypto primitive is an instance of a configured cryptographic algorithm realized in a Crypto Driver Object. | < |
| Job | A job is a configured crypto primitive together with a referenced key. | < |
| Key | A key can be referenced by a job or by a key management function in the CSM. In the Crypto Driver, the key refers a specific key type. | < |
| Key Element | Key elements are used to store data. This data can be, e.g., key material or the IV needed for AES encryption. It can also be used to configure the behavior of the key management functions. | < |
| Key Type | A key type consists of references to key elements. The key types are typically pre-configured by the vendor of the Crypto Driver. | < |
| Processing | Indicates the kind of job processing. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 相关文档
*原文标题：Related Documentation*

### 9. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 10. Crypto Stack 概述
*原文标题：Crypto Stack Overview*

Cryptographic services include, e.g., the computation of hashes, the verification of asymmetrical signatures, or the symmetrical encryption of data. In AUTOSAR, these services are supplied by the AUTOSAR crypto stack, namely the Crypto Service Manager (CSM) , the underlying Crypto Interface (CRYIF) , and Crypto Driver (CRYPTO) .

CSM services use cryptographic algorithms that are implemented using cryptographic software or hardware modules - both are out of scope and not specified by AUTOSAR. The hardware implementations heavily depend on the supported features of the target platform. Software implementations lack the support of e.g. secure key storage and have to rely on memory services provided by the AUTOSAR stack.

The AUTOSAR crypto stack does not provide a security concept. It offers cryptographic services that can be used to support and realize a certain security concept.

### 11. Stack 架构
*原文标题：Stack Architecture*

The AUTOSAR crypto stack expands over all layers of the AUTOSAR Layered Architecture :

* On the lowest level, the Microcontroller Abstraction Layer, the Crypto Drivers (CRYPTO)  are located. These modules hold the actual implementations of the different cryptographic hardware and software instances, e.g., an external HSM. A specific characteristic of the crypto stack is that there might be more than one Crypto Driver module;
* The CRYIF module is suited on the Hardware Abstraction Layer. It provides a generic interface for the CSM to the available Crypto Driver modules and makes the access independent of the underlying Crypto Drivers;
* The CSM is located on the Service Layer. It provides an abstraction layer, which offers standardized access to cryptographic services for applications via the RTE port mechanism. Other BSW modules and CDD can use C-API calls provided by the CSM to use the cryptographic services.

### 12. The Crypto 服务管理器 (CSM)
*原文标题：The Crypto Service Manager (CSM)*

The CSM  controls the concurrent access of one or more clients to one or more synchronous/asynchronous cryptographic services. It offers prioritized queues to manage jobs that could not directly be processed by the dedicated CRYPTO. The functionality provided by the CSM covers the following areas:

* Hash calculation;
* Generation and verification of message authentication codes;
* Generation and verification of digital signature;
* Encryption and decryption using symmetrical or asymmetrical algorithms;
* Random number generation;
* Key management operations, e.g., key setting and generation.

The CSM services are generic and the CSM allows different applications to use the same service with different cryptographic algorithms. This is feasible due to the possibility to configure and initialize the services individually. For example, one application might need the hash service to compute a SHA-2 digest and another application to compute a SHA-3 digest.

The actual cryptographic routines are encapsulated by the CSM.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. The Crypto 接口 (CRYIF)
*原文标题：The Crypto Interface (CRYIF)*

The CRYIF  is enclosed by the upper layer CSM and by the lower layer CRYPTO. It receives requests from the CSM and maps them to the appropriate cryptographic operation in the CRYPTO. CRYIF forwards the requests given by CSM to the particular CRYPTO. Callback notifications inform about the outcome in case the request was asynchronous.

The CRYIF can operate several CRYPTO modules. There could be, for example, one CRYPTO module for an external cryptographic hardware module and one CRYPTO module holding a cryptographic software library. The CRYIF provides a generic interface so that the access from the CSM does not need to distinguish between the actual CRYPTO implementations.

### 14. The Crypto 驱动 (CRYPTO)
*原文标题：The Crypto Driver (CRYPTO)*

A CRYPTO  typically holds the actual cryptographic implementations and supports key storage, key configuration, and key management for cryptographic services. It can have one or more Crypto Driver Objects, with separate workspaces. Each Crypto Driver Object can provide arbitrary many crypto primitives. A crypto primitive is an instance of a configured cryptographic algorithm. One Crypto Driver Object can only perform one crypto primitive at the same time.

The concept of several CRYPTO modules and several Crypto Driver Objects allows different and concurrent implementations of the same cryptographic services. Variants of CRYPTO modules with different optimization objectives may exist. For instance, the same hash algorithm might be implemented in two different CRYPTO modules, one by a faster (more expensive) hardware solution and the other by a slower (cheaper) software solution.

The following example describes a possible scenario using several CRYPTO modules:

There are two CRYPTO implementations by two different vendors. One CRYPTO is an abstraction of a hardware solution ("`CRYPTO_HW`") and the other CRYPTO is a pure software solution ("`CRYPTO_SW`").

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Usage Aspects

### 16. Job Concept

Requests to the CSM for cryptographic routines are represented as jobs. A job contains the information which cryptographic routine and which cryptographic key shall be processed. A job does not contain the actual key data itself but references the appropriate key. Key management functions are not processed as jobs.

### 17. Synchronous and Asynchronous 模式
*原文标题：Synchronous and Asynchronous Mode*

Since the computation of cryptographic services might be very computationally intensive, job processing shall be considered as synchronous or asynchronous.

When synchronous job processing is used, the CSM service will be executed immediately in the context of the caller. The result of the cryptographic routine will be available directly when the function returns.

Asynchronous jobs are processed later by the dedicated CRYPTO, in the context of a scheduled main function or in hardware. If the particular CRYPTO driver object rejects the job because it is busy, the CSM places the service request at the respective CSM job queue The CRYPTO notifies CRYIF about the completion of an asynchronous job using a callback function of the CRYIF. And CRYIF forwards the results by a callback function of the CSM.

### 18. Queuing and Priorities

The CSM may have several queues where asynchronous jobs are processed according to their priority. Each queue of the CSM is mapped to one single Crypto Driver Object, thereby enabling access to the crypto primitives of the selected Crypto Driver Object. After CRYPTO has rejected a CSM service request because it is busy, the particular job is put into the appropriate CSM queue, corresponding to its priority. The queued jobs are passed to the CRYIF during the cyclic `Csm_MainFunction`. The CRYIF will forward the jobs to the particular CRYPTO. Optionally, a Crypto Driver Object may also have a job queue. This might be useful to optimize the hardware usage of a Crypto Driver Object.

The priority of each job will be defined by its configuration. The higher the priority value, the higher the job's priority. Jobs will be executed corresponding to their priority.

Referring to the example introduced in , the following might be a possible scenario: The CSM receives two asynchronous job requests, one for `CDO_HASH` and one for `CDO_RNG`. Both Crypto Driver Objects belong to `CRYPTO_SW`. The CSM has job queues for both Crypto Driver Objects.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Streaming Approach vs Single Call Approach.

The processing of a crypto service embraces the operations "START", "UPDATE", and "FINISH":

* "START" (`CRYPTO_OPERATIONMODE_START`) notifies about a new start of a particular job and initializes the cryptographic computations;
* Input data can be provided using the "UPDATE" mode (`CRYPTO_OPERATIONMODE_UPDATE`) and intermediate results are computed;
* "FINISH" (`CRYPTO_OPERATIONMODE_FINISH`) indicates that the final cryptographic calculations shall be performed.

 gives an overview of the job's state machine, based on the aforesaid operations. The requested operation is given as operation mode parameter to a CSM job.

Crypto services can be invoked using a streaming or a single call approach. The streaming approach performs single operations separately on a given data. The streaming approach is available by calling, e.g., `Csm_MacGenerate` separately for each operation mode. Using the streaming approach allows, for example, the processing of very huge input data by calling the service function with operation mode "UPDATE" several times.

In order to increase performance of the crypto services, the single call approach combines several job operations into one single function invocation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Key 处理
*原文标题：Key Handling*

The key handling comprises the generation, update, im-/export, exchange, and derivation of cryptographic keys. Cryptographic keys may be stored in cryptographic hardware or using NvM.

Cryptographic keys are created referencing a certain key type. Vendors of CRYPTO implementations pre-configure key types appropriate for the usage with the provided cryptographic primitives. The key type consists of one or more references to key elements. For instance, the key element can be the key material required by an AES encryption or a seed for random number generation. The crypto stack uses a key element index definition.  For example, the crypto service MAC has a mandatory key element "Key Material" with key element id "1". The key elements indices can be extended by the vendor. A key element can also be part of several key types.

During key configuration the reference to an appropriate key type has to be specified. The particular CRYPTO provides data storage for the key elements contained in the key type, where the actual key data is actually held. A HW CRYPTO implementation will typically use key slots. Whereas a SW CRYPTO will use the NvM for managing the key storage.

### 21. 配置 Philosophy
*原文标题：Configuration Philosophy*

### 22. Registration of Crypto Functionality

The concept of arbitrarily many CRYPTO modules enables flexibility regarding available cryptographic features. This requires a registration mechanism that makes the actual cryptographic features in the CRYPTO implementations known to the CRYIF and CSM. Otherwise, it would not be possible to configure and use the actual cryptographic features in the CSM.

This is solved by a pre-configuration provided by the vendor, which represents the capabilities of each CRYPTO module. The pre-configuration is loaded from bottom to top, i.e. starting from CRYPTO over CRYIF to CSM. CRYIF mounts each registered CRYPTO module and integrates the particular cryptographic features into the generic interface provided to the CSM. The CSM takes over the available cryptographic features of the registered CRYPTO and deduces the particular cryptographic features for configuration by the user.

### 23. Project 配置
*原文标题：Project Configuration*

The configuration of the crypto stack is typically carried out using the top-down approach, starting from the CSM over CRYIF to CRYPTO:

* In CSM, the user selects and configures the cryptographic primitives and keys to be used that are provided by CRYIF and CRYPTO. The user further defines jobs and job queues.
* In CRYIF, the user mainly defines the mapping of the features requested by the CSM onto the provided features of the registered CRYPTO modules.
* In CRYPTO, the user adapts and extends the pre-configuration of the cryptographic primitives and keys.

### 24. 示例
*原文标题：Example*

In the following, the usage of the crypto stack is outlined using the service "Message Authentication Code" (MAC).

### 25. 配置 in 模块
*原文标题：Configuration in Modules*

The user creates a job with references to the requested MAC crypto primitive and the crypto key to be used. He further configures if the job shall be processed synchronously (`CRYPTO_PROCESSING_SYNC`) or asynchronously (`CRYPTO_PROCESSING_ASYNC`). If the job is asynchronous, he also defines the queue which shall handle the job.

MAC requires a key that at least references a key element "Key Material" (`CRYPTO_KE_MAC_KEY`).

### 26. APIs involved

The application, i.e., a runnable of a SWC, communicates with the crypto stack, i.e. the CSM, via RTE ports. For each configured job, the RTE generates a port named {Job}_MacGenerate with the client/server interface CsmMacGenerate_{Primitive}(). This port has one port defined argument value `Crypto_OperationModeType` with value `CRYPTO_OPERATIONMODE_SINGLECALL`. Thus, the SWC may invoke the MAC service by calling CsmMacGenerate_{Primitive} and provides all data required to perform the MAC request in one single call to the CSM. A BSW module or a CDD makes use of the MAC service by directly calling the C-API `Csm_MacGenerate`. Here, the job to be processed has to be passed as input parameter.

Depending on the configuration of the applied job, the processing of the job will be asynchronous or synchronous. In this example, we assume that the job has to be processed synchronously, in the context of the caller. The CSM dispatches the requested MAC service to CRYIF by calling `CryIf_ProcessJob`, passing the job as input parameter. CRYIF transfers the processing of the job to CRYPTO by calling `Crypto_ProcessJob` which finally executes the crypto primitive configured in the job parameter.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 附录
*原文标题：Appendix*
