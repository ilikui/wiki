# Specification of Cryptography (`Cryptography`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 883 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_Cryptography_883\AUTOSAR_AP_SWS_Cryptography.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_Cryptography_883\AUTOSAR_AP_SWS_Cryptography.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_Cryptography_883\zzgen\AP_SWS_Cryptography.complete.txt`

## 文档简介

This specification describes the functionality and the configuration for the Adaptive AUTOSAR Functional Cluster Cryptography (FC Crypto) and its API (CryptoAPI, which is part of the AUTOSAR Adaptive Platform Foundation.

The FC Crypto offers applications and other Adaptive AUTOSAR Functional Clusters a standardized interface for operations including cryptographic operations, key management, and certificate handling. FC Crypto manages the actual implementations of all operations, the configuration, and the brokering of operations from applications to implementations. The standardized interface is exposed by the CryptoAPI.

## 模块依赖

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Cryptography to other Functional Clusters. Section  lists the interfaces required by Cryptography.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality and the configuration for the Adaptive AUTOSAR Functional Cluster Cryptography (FC Crypto) and its API (CryptoAPI, which is part of the AUTOSAR Adaptive Platform Foundation.

The FC Crypto offers applications and other Adaptive AUTOSAR Functional Clusters a standardized interface for operations including cryptographic operations, key management, and certificate handling. FC Crypto manages the actual implementations of all operations, the configuration, and the brokering of operations from applications to implementations. The standardized interface is exposed by the CryptoAPI.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the FC Crypto module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| ACL | Access Control List |
| AE | Authenticated Encryption |
| AEAD | Authenticated Encryption with Associated Data - Encryption scheme which simultaneously provides confidentiality and authenticity of data as well as additional authenticated but not encrypted data. |
| AES | Advanced Encryption Standard - A block cipher for the symmetric encryption of electronic data. |
| API | Abstract Programming Interface |
| ARA | Autosar Runtime Environment for Adaptive Applications |
| ASN.1 | Abstract Syntax Notation One, as defined in the ASN.1 standards |
| BER | Basic Encoding Rules |
| BLOB | Binary Large Object - A Binary Large OBject (BLOB) is a collection of binary data stored as a single entity. |
| CA | Certificate Authority or Certification Authority is an entity that issues digital certificates. |
| CBC | Cipher Block Chaining Mode - A mode of operation for symmetric ciphers (e.g. AES) that supports encryption. |
| CBC-MAC | Cipher Block Chaining Message Authentication Mode - A mode of operation for symmetric ciphers (e.g. AES) that supports authentication. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. Assumptions on the Implementation of Crypto

### 8. Process Isolation

In order to perform access control on keys and certificates, the implementation of Crypto must not be limited to the application process, i.e., it is assumed that it is not executed as a library-only implementation. Instead, the implementation of Crypto may relay on separate processes or other forms of trust boundaries (e.g., trusted execution environments).

### 9. Usage of Cryptographic 模块
*原文标题：Usage of Cryptographic Modules*

It is assumed that implementations of Crypto may make use of cryptographic module implementations that are implementated by a different party than the stack vendor and are exposed via a standardized interface (e.g., PSA, PKCS#11).

### 10. 已知限制
*原文标题：Known limitations*

There are no known limitations for this specification.

### 11. 对其他功能集群的依赖
*原文标题：Dependencies to other functional clusters*

This chapter provides an overview of the dependencies to other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the interfaces provided by Cryptography to other Functional Clusters. Section  lists the interfaces required by Cryptography.

A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

### 12. Provided 接口
*原文标题：Provided Interfaces*

Figure  shows interfaces assumed to be provided by Cryptography to other Functional Clusters within the AUTOSAR Adaptive Platform.  provides a list of interfaces assumed to be provided to other Functional Clusters within the AUTOSAR Adaptive Platform. Please note that for brevity only a placeholder interface CryptoStack is used instead of the many different standardized interfaces that would be required e.g., to access a certain key or to calculate a checksum.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| CryptoStack | Communication Management | This interface may be used e.g., to establish encrypted connections and generate / verify checksums (MAC). |
| ^ | Diagnostic Management | This interface may be used e.g., to access keys for secure diagnostics. |
| ^ | Intrusion Detection System Manager | Adaptive Intrusion Detection System Manager uses this interface to sign security events. |
| ^ | Persistency | Used to ensure confidentiality and integrity of the persisted data. |
| ^ | Raw Data Stream | This interface may be used to establish encrypted connections. |
| ^ | Time Synchronization | Time Synchronization shall use this interface to generate / verify checksums (MAC). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Required 接口
*原文标题：Required Interfaces*

provides a list of interfaces assumed to be required from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Execution Management | ExecutionClient |  |

### 14. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| Availability of a named constructor |  |  |
| IAM access violations |  |  |
| The Crypto Stack shall conceal symmetric keys from the users |  |  |
| The Crypto Stack shall conceal asymmetric private keys from the users |  |  |
| The Crypto Stack shall support management of non-persistent session/ephemeral keys during their lifetime |  |  |
| The Crypto Stack shall support secure storage of cryptographic artifacts |  |  |
| The Crypto Stack shall support unique identification of cryptographic objects |  |  |
| The Crypto Stack shall provide means for secure handling of "secret seeds" |  |  |
| The Crypto Stack shall support restrictions of the allowed usage scope for keys and "secret seeds" |  |  |
| The Crypto stack shall support separation of applications" access rights for each cryptographic object slot |  |  |
| The Crypto Stack shall provide interf |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 功能规范
*原文标题：Functional specification*

The AUTOSAR Adaptive architecture organizes the software of the AUTOSAR Adaptive foundation as Functional Clusters. These clusters offer common functionality as services to the applications. The Functional Cluster Cryptography (FC Crypto) is part of the AUTOSAR Adaptive Platform Foundation.

The FC Crypto provides the infrastructure to access multiple implementations of cryptographic operations through a standardized interface. It provides access to cryptographic primitives via the Crypto Provider and access to certificate management via the X.509 Certificate Management Provider. It supports common automotive security use-cases like secure communication (e.g., SecOC, TLS), authenticated diagnostics (e.g, service 0x29), and secure software update.

This specification includes the syntax and functional behavior of the API and its relationship to the model.

### 16. 架构 & 概念
*原文标题：Architecture & Concepts*

In this section the architecture of Crypto and several concepts used by Crypto are described.

### 17. 架构
*原文标题：Architecture*

The FC Crypto offers applications and other Adaptive AUTOSAR Functional Clusters a standardized interface to perform cryptographic operations, manage cryptographic keys, and handle certificate. The interfaces defined by FC Crypto are designed to enable integraton of 3rd party cryptographic libraries and hardware-based elements (e.g., HSMs). This facilitates implementation of a security "trust anchor" or acceleration of cryptographic transformations.

Figure  depicts the high-level architecture of FC Crypto.

A CryptoProvider provides access to the implementation of a set of cryptographic primitives and a key storage. Typically, an cryptographic module within a trusted execution environment is providing the actual implementation of primitives and key storage, and the CryptoProvider is providing a wrapper that allows access to different implementations using the same interface. A CryptoProvider is implemented by a stack vendor or a third party by implementing the ara::crypto::cryp::CryptoProvider class, as well as the classes for cryptographic contexts and the classes for cryptographic keys. It is possible to have multiple different CryptoProviders instantiated on one machine.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Usage of Crypto

### 19. Usage of Crypto by Applications

This section describes the required modelling during the design and deployment phase of an adaptive application. During design, the application designer has to decide, which persisted cryptographic keys, which persisted certificates, and which CryptoProviders the application will use.

* For each persisted key that will be used and modified by an application (e.g., the key is generated by the application and later used for signature generation), the application designer creates a CryptoKeySlotInterface.
* For each persisted key that will be used by an application, but modified only by a different application, the application designer creates a CryptoKeySlotClientInterface.
* For each persisted certificate that will be used by an application, the application designer creates a CryptoCertificateInterface.
* For each group of persisted certificates that will be used by an application, the application designer creates a CryptoCertificateGroupInterface.
* For each CryptoProvider that will be used by an application independently of cryptographic keys (e.g., to calculate cryptographic hash values), the application designer creates a CryptoProviderInterface.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Usage of Crypto by other 功能性 Clusters
*原文标题：Usage of Crypto by other Functional Clusters*

The implementation of some Adaptive Platform Services such as update and configuration, communication, persistency, or diagnostics also require access to cryptographic services and cryptographic keys to fulfill their functionality. Such access is modelled using cross functional cluster mappings. For instance, if a key is being used by SecOC for protection of a PDU, the model element ComSecOcToCryptoKeySlotMapping is used to configure the KeySlot to be used by SecOC. A detailled description of the available model can be found in the TPS Manifest in Chapter Cross-functional cluster interaction.

Typically, such key material is only used by a functional cluster, but managed (e.g., imported, generated, updated) by an adaptive application. In this case, the mechanisms described in Section  are used.

### 21. Access 控制
*原文标题：Access Control*

Crypto supports implementing the least privilege principle by restricting, which application can use and modify cryptographic keys and certificates. The policy, i.e., which application can access which resource in which way, is modelled in the manifest and enforced at runtime. In order to enforce these access restrictions, a separation between the application process using ara::crypto and the policy enforcement is required. This separation can be implemented using, e.g., OS mechanisms such as process isolation.

Access to a KeySlot is limited to certain processes in the manifest using the CryptoKeySlotPortMapping (see ) and CryptoKeySlotClientPortMapping (see ) model elements:

 Access Control on Loading KeySlots
  Upstream requirements: ,
⌈
Crypto shall restrict the processes that can load the content of a CryptoKeySlot to those Processes that are referenced by either

* a CryptoKeySlotPortMapping or
* aCryptoKeySlotClientPortMapping

that are aggregated by the respective CryptoKeySlot and which also reference the Process via either

* a CryptoKeySlotPortMapping.CryptoProcessRef or
* a CryptoKeySlotClientPortMapping.CryptoProcessRef.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Usage 控制
*原文标题：Usage Control*

When a key is generated, imported, or derived, the application can limit how the key can be used afterwards. The type ara::crypto::AllowedUsageFlags is used to represent the allowed usages of a key as a bitmask. Table  gives an overview of the available allowed usages. Multiple flags can be combined with a bitwise or in order to allow several usages of a key.

| Allowed Usage Flag | Applicable Key Type | Description | Relevant Contexts/Functions |
|---|---|---|---|
| kAllowDataEncryption | SymmetricKey, PublicKey | The key can be used for data encryption | SymmetricCipherCtx, AuthCipherCtx, EncryptorPublicCtx |
| kAllowDataDecryption | SymmetricKey, PrivateKey | The key can be used for data decryption. | SymmetricCipherCtx, AuthCipherCtx, DecryptorPrivateCtx |
| kAllowMac | SymmetricKey | The key can be used for MAC generation and verification. | MessageAuthnCodeCtx |
| kAllowSigGeneration | PrivateKey | The key can be used for signature generation. | SignerPrivateCtx |
| kAllowSigVerification | PublicKey | The key can be used for signature verification. | VerifierPublicCtx |
| kAllowKeyAgreement | PrivateKey, PublicKey | The key can be used as private or public input to key agreement. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Identification of Cryptographic Transformations and Key 类型
*原文标题：Identification of Cryptographic Transformations and Key Types*

The type of all keys and cryptographic transformations must be unambiguously identifiable to enable the application designer and developer to unambiguously express the desired key types and transformations to by used by the CryptoProvider.

The type of a key is typically defined by an algorithm (e.g., AES, RSA, ed25519) and optionally by a length (e.g., 2048 bit) or curve (e.g., secp256r1), and whether the key is a private or public key. A cryptographic transformation is typically defined by several elements:

* The operation that is performed by the transformation, e.g., hashing, encryption, signature verification.
* The algorithm that forms the basis of the transformation, e.g., SHA2-256, AES-128, ed25519.
* An optional variant that specifies how the algorithm is applied. This includes the mode (e.g., CBC), the signature scheme (e.g., RSAES-OAEP), the used curve (e.g., secp256r1), and the number of rounds.
* An optional parameter that specifies, e.g., an additional algorithm that is executed as part of the transformation (e.g., SHA2-256, Poly1305) or padding (e.g., PKCS7).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Concurrent Access

While unlimited concurrent access to ara::crypto is theoreticaly possible, in reality there are only limited resources available. For instance, an HSM might only have a certain number of AES accelerators, limiting the number of operations that can be processed in parallel. In order to represent this behavior, all functions of ara::crypto, which may need to allocate resources, may return kBusyResource in case the requested operation temporarly cannot be performed because a required resource is busy. This includes all functions for key generation, loading keys, importing keys, the Start() function of transformation contexts' streaming interface, and the single-call functions of transformation contexts.

 Limit concurrent access to internal resources
  Upstream requirements:
⌈
All functions of ara::crypto shall return kBusyResource if the requested operation temporarly cannot be performed because a required resource is busy.
⌋

The implementation of a CryptoProvider may perform internal scheduling or sequentializing of operations.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 功能性 Cluster Lifecycle
*原文标题：Functional Cluster Lifecycle*

### 26. 启动
*原文标题：Startup*

Using ara::core::Initialize and ara::core::Deinitialize, the application can initialize and de-initialize FC Crypto resources allocated to the application.

  Upstream requirements:
⌈
When ara::core::Initialize is called, the FC Crypto shall read in the manifest information and prepare the access structures that are defined in the manifest.
⌋

Hint: Access structures may encompass the communication channel between the application process and the stack process or other resource required by the CryptoAPI.

 Log initialization failed
  Upstream requirements:
⌈
Whenever Initialization of crypto structures failed during a call of ara::core::Initialize, FC Crypto shall log a DltMessage of type InitializationFailed with arguments set to:

* ProcessId: The process failed to initialize crypto
⌋

### 27. 关机
*原文标题：Shutdown*

Upstream requirements: , ,
⌈
When ara::core::Deinitialize is called, the FC Crypto shall ensure that all open contexts are closed and all occupied ressources are freed.
⌋

  Upstream requirements:
⌈
When ara::core::Deinitialize is called, the FC Crypto shall ensure that all associated persist operations in this context of this application are executed successfully and no new persist operations are started.
⌋

 Log deInitialization failed
  Upstream requirements:
⌈
Whenever deInitialization of crypto structures failed during call of ara::core::Deinitialize, FC Crypto shall log a DltMessage of type DeInitializationFailed with arguments set to:

* ProcessId: The process failed to deInitialize crypto
⌋

Note: the application is expected not to call any API of FC Crypto before ara::core::Initialize or after ara::core::Deinitialize. According to `SWS_CORE_90021`, such behavior will be trated as a violation.

 Initialization violation
  Upstream requirements:
⌈
The function ara::crypto::LoadX509Provider shall check that ara::core::Initialize has been called successfully and ara::core::Deinitialize has not yet been executed.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Crypto Provider

A Crypto Provider is a structural element that organizes Cryptographic primitives. Every Crypto Provider typically represents either one hardware element, e.g., trusted platform module (TPM) or hardware security module (HSM), or one software element, e.g., cryptographic library.

 Functionality of a CryptoProvider
  Upstream requirements:
⌈
Each derived implementation of the interface class ara::crypto::cryp::CryptoProvider shall encapsulate cryptographic transformations and associated resources, such as ara::crypto::cryp::CryptoObject and Cryptographic primitives, of a single software or hardware cryptography implementation.
⌋

Note: a Crypto Provider may expose only a subset of all available transformations or primitives of the underlying software or hardware cryptography implementation (e.g. in case of weak or outdated primitives). However, this implementation detail shall be documented and communicated to the user.

  Upstream requirements: ,
⌈
Derived implementations of the interface class ara::crypto::cryp::CryptoProvider shall isolate all non-session Key Material from the user (Adaptive Application).
⌋

### 29. KeySlot Access

An application can use the InstanceSpecifier representing a modeled CryptoKeySlotInterface or CryptoKeySlotClientInterface to access a KeySlot. If a CryptoKeySlotClientInterface is used, the key stored in the KeySlot can only be used but not modified. Usage of a CryptoKeySlotInterface additionally allows modification of the key stored in the KeySlot. The container CryptoKeySlotPortMapping associates the enclosing CryptoKeySlot with a Process, and an RPortPrototype.

If a KeySlot is only accessed in a read-only manner, the function ara::crypto::LoadKeySlot can be used to get a KeySlot object that is read-only.

 LoadKeySlot
  Upstream requirements:
⌈
The function ara::crypto::LoadKeySlot shall return the KeySlot instance that represents the key slot resource identified by the provided ara::core::InstanceSpecifier representing a modeled CryptoKeySlotInterface or CryptoKeySlotClientInterface through the CryptoKeySlotPortMapping.
⌋

If a KeySlot will also be modified, the function ara::crypto::LoadWriteableKeySlot can be used to get a WriteableKeySlot object, which can be used to modify the content of the KeySlot.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. CryptoProvider Instantiation

Crypto provides two functions to instantiate a CryptoProvider. First, if a CryptoProviderInterface is modelled, the function ara::crypto::LoadCryptoProvider can be used to instantiate a CryptoProvider. The main use cases for such a direct instantiation are, e.g., the use of keyless operations such as hashing or the generation and use of session keys. Secondly, if the application accesses modelled KeySlots as described in Section , the function ara::crypto::cryp::KeySlot::GetCryptoProvider can be used to instantiate the correct CryptoProvider for subsequent use of the stored key.

 Log Crypto Provider loading failed
  Upstream requirements:
⌈
Whenever Loading a Crypto Provider failed when calling ara::crypto::LoadCryptoProvider, FC Crypto shall log a DltMessage of type CryptoProviderLoadingFailed with arguments set to:

* CryptoProviderInstanceSpecifier: Crypto Provider instance specifier.
⌋

### 31. Runtime Key Instantiation and Usage

After loading a KeySlot, the KeySlot object can either be loaded into a CryptoProvider in order to obtain a runtime CryptoObject, or it can be used directly in a transformation context in order to specify the key used for the cryptographic transformation (cf. ).

A runtime key object can be creating using the functions ara::crypto::cryp::CryptoProvider::LoadSymmetricKey, ara::crypto::cryp::CryptoProvider::LoadPublicKey, and ara::crypto::cryp::CryptoProvider::LoadPrivateKey.

A runtime key can be stored in a KeySlot that is managed by the same CryptoProvider and has the same AlgId and CryptoObjectType as the runtime key using the function ara::crypto::cryp::CryptoObject::Save.

 Save runtime key to a KeySlot
  Upstream requirements:
⌈
The function ara::crypto::cryp::CryptoObject::Save shall verify that the AllowedUsageFlags include kAllowPersist, verify that the KeySlot is compatible to the key, verify that the KeySlot is writeable by the application, verify that the key currently stored in the KeySlot is not being used in an ongoing streaming operation, and store the key represented by the CryptoObject in the provided KeySlot.
⌋

Note: Write access to a KeySlot is defined in .

### 32. Utility functions

The classes ara::crypto::cryp::SymmetricKey, ara::crypto::cryp::PublicKey, and ara::crypto::cryp::PrivateKey provide the function ara::crypto::cryp::CryptoObject::GetAlgId to query the AlgId of the key. The classes ara::crypto::cryp::SymmetricKey, ara::crypto::cryp::PublicKey, and ara::crypto::cryp::PrivateKey provide the function ara::crypto::cryp::CryptoObject::GetAllowedUsage to query the AllowedUsage (cf. ) of the key. A ara::crypto::cryp::PrivateKey provides the function ara::crypto::cryp::PrivateKey::GetPublicKey that allows to query the corresponding public key.

### 33. Key Generation

In order to generate new keys, a CryptoProvider provides the functions ara::crypto::cryp::CryptoProvider::GenerateSymmetricKey and ara::crypto::cryp::CryptoProvider::GeneratePrivateKey. An application can pass a AlgId identifying the type of the key and the allowed usages of the generated key to the functions.

  Upstream requirements:
⌈
The functions ara::crypto::cryp::CryptoProvider::GeneratePrivateKey and ara::crypto::cryp::CryptoProvider::GenerateSymmetricKey shall generate secret key-material according to the provided ara::crypto::AlgId and return an instance of ara::crypto::cryp::PrivateKey or ara::crypto::cryp::SymmetricKey, respectively. Each function shall initialize the object according to the provided ara::crypto::AllowedUsageFlags.
⌋

### 34. Plaintext Key 管理
*原文标题：Plaintext Key Management*

### 35. Plaintext Key Import

Key material can be imported into a CryptoProvider in plaintext form and in protected form. The functions ara::crypto::cryp::CryptoProvider::ImportPublicKey, ara::crypto::cryp::CryptoProvider::ImportSymmetricKey , and ara::crypto::cryp::CryptoProvider::ImportPrivateKey can be used to import plaintext key material. When importing a key, the application can set the allowed usage of the imported key.

Depending on the key material and the context, importing or exporting confidential plaintext key material may represent a security risk. Therefore, the use of plaintext key import or export should be evaluated carefully by all involved parties. Additionally, a CryptoProvider may not support plaintext import or export of certain key types (e.g., symmetric or private keys) for security reasons.

 Import of public keys
  Upstream requirements:
⌈
The function ara::crypto::cryp::CryptoProvider::ImportPublicKey shall deserialize the provided serialized data from the format specified using the formatId parameter.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Plaintext Key Export

The function ara::crypto::Serializable::ExportPublicly provides a way to export symmetric, private, and public keys.

 Exporting public objects
  Upstream requirements:
⌈
The function ara::crypto::Serializable::ExportPublicly shall serialize the object in the format specified using the formatId parameter, write the serialized data into the provided output data buffer, and return the size of the written serialized data. If the function is a member function of a PublicKey, PrivateKey, or SymmetricKey, it shall additionally verify prior to serialization that its allowed usage includes kAllowPlaintextExport and the parameter CryptoKeySloyPortMapping.AllowPlainTextExport of the CryptoKeySlotPortMapping from which the object was loaded is configured as True.
⌋

### 37. Protected Key 管理
*原文标题：Protected Key Management*

### 38. Protected Key Import

Key material can be imported into a CryptoProvider in protected form including associated meta-data such as allowed-usage. This combination of key-material and meta-data is typically generated in a trusted environment of the OEM or another authorized entity.

These update packages fall into two categories: OEM custom packages and standardized packages specified for example by SHE (e.g. as used by command SHE/LOADKEY).

FC Crypto supports both categories by specifying the ProtectedKeyImportCtx. As with other contexts the ProtectedKeyImportCtx allows a CryptoProvider to be tailored to easily fulfill project requirements. Creating a ProtectedKeyImportCtx using the string-based ara::crypto::AlgId the application developer can selected the import protocol required for his project and supported by the chosen CryptoProvider.

One example, as already mentioned above, is the data format specified in `AUTOSAR_TR_SecureHardwareExtensions`. A package compatible with the command SHE/LOADKEY includes a header specifying the key-slot to update and the key-slot, whose content shall be used for unwrapping the protected payload (key-encryption-key or KEK).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Protected Key Export

Protected key exporting is supported by ara::crypto::cryp::CryptoProvider::ExportSecuredKey. Similar in usage to the ProtectedKeyImportCtx it allows to specify the AlgId to be used (i.e. the protocol specifying the protection wrapper and structure of the protected payload) as well as optionally the KEK, if not implicitly specified with the AlgId. This interface is offered by the CryptoProvider directly as a dedicated context would just replicate interfaces already offered by the ara::crypto::cryp::CryptoObject to be exported.

### 40. Import and Export Formats

The ara::crypto::FormatId is used to define data formats and encodings for importing and exporting data to and from ara::crypto.

 Raw Format
  Upstream requirements:
⌈
If a function accepts a ara::crypto::FormatId and the ara::crypto::FormatId is set to kFormatRawValueOnly, then the function shall (de-)serialize the object in the following formats depending on the object's type:

* SymmetricKey: The serialized, raw value of the symmetric key.
| * ed25519/ed448 signature: R | S (RFC 8032). |
|---|---|
| * ECDSA signature: R | S (IEEE P1363). |

* RSA PSS signature: S (RFC 8017).
* RSA PKCS#1 v1.5 signature: S (RFC 8017).
| * SLH-DSA signature: R | SIG_FORS | SIG_HT (IETF draft-ietf-lamps-cms-sphincs-plus) |
|---|---|---|

⌋

 DER Format
  Upstream requirements:
⌈
If a function accepts a ara::crypto::FormatId and the ara::crypto::FormatId is set to kFormatDerEncoded, then the function shall (de-)serialize the object in DER (X.690) according to the following schema depending on the object's type:

* Public Key: SubjectPublicKeyInfo (RFC 5280)
* Private Key: OneAsymmetricKey (RFC 5958)
* Signature: signatureValue (RFC 5280)
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 296 章（内容从略，见纯文本全文）

41. Context Creation
42. CryptoProvider Identification
43. Crypto Contexts
44. 概述
45. Set Key
46. Single-call API
47. Streaming API
48. Informational API
49. Output Buffers
50. 初始化 Vectors
51. Random Number Generator (RNG)
52. Hashing
53. Streaming API
54. Single-call API
55. Suspend and Resume Hash Calculations
56. Message Authentication 代码 (MAC)
57. Streaming API
58. Single-call API
59. Digital signatures
60. Streaming API
61. Single-call API
62. Symmetric Encryption & Decryption
63. Streaming API
64. Single-call API
65. Asymmetric Encryption & Decryption
66. Authenticated Encryption with Associated 数据
67. Key Derivation 功能 (KDF)
68. Key Wrapping
69. Key Encapsulation Mechanism (KEM)
70. Key Agreement
71. Certificate 处理 (X.509 Provider)
72. X.509 Certificate Parsing
73. X.509 Certificate 校验
74. X.509 Certificate Storage
75. Certificate Signing Requests (CSR)
76. Certificate Revocation Lists (CRL)
77. Online Certificate Status 协议 (OCSP)
78. Reporting
79. 安全事件
80. Log Messages
81. Violation Messages
82. Production 错误
83. API 规范
84. PortInterface to API class binding
85. Header：ara/crypto/common/base_id_types.h
86. Non-Member 类型
87. Global Variables
88. Struct：SecureCounter
89. Public Member Variables
90. Header：ara/crypto/common/crypto_error_domain.h
91. Non-Member 类型
92. Non-Member Functions
93. Other
94. Class：CryptoErrorDomain
95. Public Member 类型
96. Public Member Functions
97. Special Member Functions
98. Member Functions
99. Class：CryptoException
100. Public Member Functions
101. Constructors
102. Header：ara/crypto/common/entry_point.h
103. Non-Member Functions
104. Other
105. Header：ara/crypto/common/formatter.h
106. Non-Member Functions
107. Other
108. Class：Formatter
109. Public Member 类型
110. Public Member Functions
111. Special Member Functions
112. Member Functions
113. Header：ara/crypto/common/mem_region.h
114. Non-Member 类型
115. Header：ara/crypto/common/serializable.h
116. Non-Member 类型
117. Global Variables
118. Class：Serializable
119. Public Member Functions
120. Special Member Functions
121. Member Functions
122. Header：ara/crypto/cryp/auth_cipher_ctx.h
123. Class：AuthCipherCtx
124. Public Member 类型
125. Public Member Functions
126. Member Functions
127. Header：ara/crypto/cryp/crypto_context.h
128. Class：CryptoContext
129. Public Member Functions
130. Special Member Functions
131. Member Functions
132. Header：ara/crypto/cryp/crypto_provider.h
133. Class：CryptoProvider
134. Public Member 类型
135. Public Member Functions
136. Special Member Functions
137. Member Functions
138. Header：ara/crypto/cryp/decryptor_private_ctx.h
139. Class：DecryptorPrivateCtx
140. Public Member 类型
141. Public Member Functions
142. Member Functions
143. Header：ara/crypto/cryp/encryptor_public_ctx.h
144. Class：EncryptorPublicCtx
145. Public Member 类型
146. Public Member Functions
147. Member Functions
148. Header：ara/crypto/cryp/hash_function_ctx.h
149. Class：HashFunctionCtx
150. Public Member 类型
151. Public Member Functions
152. Member Functions
153. Header：ara/crypto/cryp/key_agreement_private_ctx.h
154. Class：KeyAgreementPrivateCtx
155. Public Member 类型
156. Public Member Functions
157. Member Functions
158. Header：ara/crypto/cryp/key_decapsulator_private_ctx.h
159. Class：KeyDecapsulatorPrivateCtx
160. Public Member 类型
161. Public Member Functions
162. Member Functions
163. Header：ara/crypto/cryp/key_derivation_function_ctx.h
164. Class：KeyDerivationFunctionCtx
165. Public Member 类型
166. Public Member Functions
167. Member Functions
168. Header：ara/crypto/cryp/key_encapsulator_public_ctx.h
169. Class：KeyEncapsulatorPublicCtx
170. Public Member 类型
171. Public Member Functions
172. Member Functions
173. Header：ara/crypto/cryp/keyslot.h
174. Class：KeySlot
175. Public Member 类型
176. Public Member Functions
177. Special Member Functions
178. Member Functions
179. Header：ara/crypto/cryp/message_authn_code_ctx.h
180. Class：MessageAuthnCodeCtx
181. Public Member 类型
182. Public Member Functions
183. Member Functions
184. Header：ara/crypto/cryp/protected_key_import_ctx.h
185. Class：ProtectedKeyImportCtx
186. Public Member 类型
187. Public Member Functions
188. Member Functions
189. Header：ara/crypto/cryp/random_generator_ctx.h
190. Class：RandomGeneratorCtx
191. Public Member 类型
192. Public Member Functions
193. Member Functions
194. Header：ara/crypto/cryp/signer_private_ctx.h
195. Class：SignerPrivateCtx
196. Public Member 类型
197. Public Member Functions
198. Member Functions
199. Header：ara/crypto/cryp/symmetric_cipher_ctx.h
200. Class：SymmetricCipherCtx
201. Public Member 类型
202. Public Member Functions
203. Member Functions
204. Header：ara/crypto/cryp/symmetric_key_wrapper_ctx.h
205. Class：SymmetricKeyWrapperCtx
206. Public Member 类型
207. Public Member Functions
208. Member Functions
209. Header：ara/crypto/cryp/verifier_public_ctx.h
210. Class：VerifierPublicCtx
211. Public Member 类型
212. Public Member Functions
213. Member Functions
214. Header：ara/crypto/cryp/writeable_keyslot.h
215. Class：WriteableKeySlot
216. Public Member 类型
217. Public Member Functions
218. Special Member Functions
219. Member Functions
220. Header：ara/crypto/cryp/cryobj/crypto_object.h
221. Class：CryptoObject
222. Public Member 类型
223. Public Member Functions
224. Member Functions
225. Header：ara/crypto/cryp/cryobj/private_key.h
226. Class：PrivateKey
227. Public Member 类型
228. Public Member Functions
229. Member Functions
230. Header：ara/crypto/cryp/cryobj/public_key.h
231. Class：PublicKey
232. Public Member 类型
233. Header：ara/crypto/cryp/cryobj/symmetric_key.h
234. Class：SymmetricKey
235. Public Member 类型
236. Header：ara/crypto/x509/cert_sign_request.h
237. Class：CertSignRequest
238. Public Member 类型
239. Header：ara/crypto/x509/certificate.h
240. Non-Member 类型
241. Global Variables
242. Class：Certificate
243. Public Member 类型
244. Public Member Functions
245. Member Functions
246. Header：ara/crypto/x509/certificate_validation_ctx.h
247. Non-Member 类型
248. Global Variables
249. Class：CertificateValidationCtx
250. Public Member 类型
251. Public Member Functions
252. Member Functions
253. Header：ara/crypto/x509/certificate_validation_result.h
254. Non-Member 类型
255. Class：CertificateValidationResult
256. Public Member 类型
257. Public Member Functions
258. Member Functions
259. Header：ara/crypto/x509/ocsp_response.h
260. Non-Member 类型
261. Class：OcspResponse
262. Public Member 类型
263. Public Member Functions
264. Member Functions
265. Header：ara/crypto/x509/x509_dn.h
266. Class：X509DN
267. Public Member 类型
268. Public Member Functions
269. Member Functions
270. Header：ara/crypto/x509/x509_provider.h
271. Class：X509Provider
272. Public Member 类型
273. Public Member Functions
274. Special Member Functions
275. Member Functions
276. Named Constructors
277. 服务接口
278. 配置
279. Containers and 配置 parameters
280. Crypto Instantiation
281. Crypto Certificate
282. CryptoCertificateCollection
283. CryptoCertificate
284. CryptoCertificatePortMappingCollection
285. CryptoCertificatePortMapping
286. Crypto Certificate Group
287. CryptoCertificateGroupCollection
288. CryptoCertificateGroup
289. CryptoCertificateGroupPortMappingCollection
290. CryptoCertificateGroupPortMapping
291. CryptoCertificateRefCollection
292. Crypto Provider
293. CryptoProviderCollection
294. CryptoProvider
295. CryptoKeySlotCollection
296. CryptoKeySlot
297. AlgorithmDescriptionCollection
298. AlgorithmDescription
299. CryptoKeySlotClientPortMappingCollection
300. CryptoKeySlotClientPortMapping
301. CryptoKeySlotPortMappingCollection
302. CryptoKeySlotPortMapping
303. CryptoProviderPortMappingCollection
304. CryptoProviderPortMapping
305. Correspondence Table
306. Default Values
307. Semantic Constraints
308. 附录
309. Mentioned 清单 Elements
310. 接口 to other 功能性 Clusters (informative)
311. 概述
312. 接口 Tables
313. Change History
314. Change History of this document according to AUTOSAR Release R22-11
315. Added 规范 Items in R22-11
316. Changed 规范 Items in R22-11
317. Deleted 规范 Items in R22-11
318. Change History of this document according to AUTOSAR Release R23-11
319. Added 规范 Items in R23-11
320. Changed 规范 Items in R23-11
321. Deleted 规范 Items in R23-11
322. Change History of this document according to AUTOSAR Release R24-11
323. Added 规范 Items in R24-11
324. Changed 规范 Items in R24-11
325. Deleted 规范 Items in R24-11
326. Added Constraints in R24-11
327. Changed Constraints in R24-11
328. Deleted Constraints in R24-11
329. Change History of this document according to AUTOSAR Release R25-11
330. Added 规范 Items in R25-11
331. Changed 规范 Items in R25-11
332. Deleted 规范 Items in R25-11
333. Added Constraints in R25-11
334. Changed Constraints in R25-11
335. Deleted Constraints in R25-11
336. Naming Convention
