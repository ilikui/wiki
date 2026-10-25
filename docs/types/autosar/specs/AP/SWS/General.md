# General Specification of Adaptive Platform (`General`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1142 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_General_1142\AUTOSAR_AP_SWS_General.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_General_1142\AUTOSAR_AP_SWS_General.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_General_1142\zzgen\AP_SWS_General.complete.txt`

## 文档简介

The goal of this document is to define a common set of basic requirements that ap- ply to all functional clusters of the Adaptive Platform. It adds a common part to the specifications and it needs to be respected by platform vendors.

## 模块依赖

This specification does not specify a functional cluster. This chapter does not apply.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The goal of this document is to define a common set of basic requirements that ap- ply to all functional clusters of the Adaptive Platform. It adds a common part to the specifications and it needs to be respected by platform vendors.

### 2. 定义 of acronyms and abbreviations
*原文标题：Definition of acronyms and abbreviations*

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

This document does not define any specific acronyms or abbreviations. A general list of acronyms and abbreviations is available in the AUTOSAR glossary .

### 4. 定义 of terms
*原文标题：Definition of terms*

The table below contains all definitions of terms that are used in this document.

| Abbreviation / Acronym: | Description: |
|---|---|
| Violation | The semantics of a Violation are defined in |
| Standardized Violation | A Violation that is standardized in the AUTOSAR AP standard |
| Non-Standardized Violation | A Violation that is not standardized in the AUTOSAR AP standard |
| Undefined behavior | Behavior as defined in  in , with any additional UB documented by AUTOSAR (see also ) |
| Implementation-defined behavior | Behavior as defined in  in ; details are deferred to and documented by the implementation (see also ) |
| Vendor-specific behavior | Equivalent to Implementation-defined behavior in AUTOSAR APIs (see also ) |
| callable | The related definitions in  of  apply to AUTOSAR APIs (see also ) |
| Functions implemented by the user of the API | Functions with signatures defined by AUTOSAR and implemented by the user, such as callbacks or pure virtual functions (see also ) |
| Corruption | Corruption of a system resource (e.g., stack or heap overflow or hardware memory flaw); it is non-recoverable (see also ) |
| Failed Default Allocation | Inability of the default framework allocator to satisfy an allocation request; it i |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 约束与假设
*原文标题：Constraints and assumptions*

This specification does not specify a functional cluster. This chapter does not apply.

### 8. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This specification does not specify a functional cluster. This chapter does not apply.

### 9. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in AUTOSAR RS General  , and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| Source Code Portability Support |  |  |
| Public namespaces |  |  |
| Header file name |  |  |
| Error reporting |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| Return type of synchronous function calls |  |  |
| Handling of unsuccessful operations |  |  |
| Reentrancy of Functions |  |  |
| Thread-safety of Functions |  |  |
| Concurrent Use of Different Objects |  |  |
| InstanceSpecifierAlreadyInUseViolation |  |  |
| AraNotInitializedViolation |  |  |

### 10. 功能性规范 for all 功能性 Clusters
*原文标题：Functional specification for all Functional Clusters*

This chapter defines a common set of basic requirements that apply to all Functional Clusters of the Adaptive Platform. It adds a common part to the specifications and it needs to be respected by platform vendors.

### 11. 功能性 Cluster names
*原文标题：Functional Cluster names*

AUTOSAR Functional Clusters are assigned a standardized "name" e.g. com together with a reserved Functional Cluster namespace () below the top-level namespace. Table  shows the reserved Functional Cluster settings for each.

 AUTOSAR-standardized Functional Cluster names
  Status: DRAFT
  Upstream requirements:
⌈
| Name | Description | C++ namespace |
|---|---|---|
| aag | Automotive API Gateway | ara::aag |
| adi | Sensor Interfaces | ara::adi |
| com | Communication Management | ara::com |
| core | Core | ara::core |
| crypto | Cryptography | ara::crypto |
| diag | Diagnostics | ara::diag |
| exec | Execution Management | ara::exec |
| fw | Firewall | ara::fw |
| idsm | Intrusion Detection System Manager | ara::idsm |
| log | Log and Trace | ara::log |
| nm | Network Management | ara::nm |
| osi | Operating System Interface | ara::osi |
| per | Persistency | ara::per |
| phm | Platform Health Management | ara::phm |
| rds | Raw Data Stream | ara::rds |
| rper | Remote Persistency | ara::rper |
| shwa | Safe Hardware Acceleration | ara::shwa |
| sm | State Management | ara::sm |
| tsync | Time Synchronization | ara::tsync |
| ucm | Update and Configuration Management | ara::ucm |
| vucm | Vehicle Update and Configuration Management | ara::vucm |

⌋

### 12. 功能性 Cluster header files
*原文标题：Functional Cluster header files*

Include folder structure
  Upstream requirements: ,
  Previous Identifiers: `SWS_CORE_90001`
⌈
All #include directives in header files that refer to ARA libraries shall be written in the form: #include "ara/fc/header.h" where:

* ara: reserved; as per
* fc: reserved; is the remaining directory path of the implementation's installed header file, starting with the Functional Cluster name as per  e.g. com
* header.h: the filename of the header file as per
⌋

Example: for class ara::exec::ExecutionClient present in #include "ara/exec/execution_client.h"

The "..." form of #include statements shall be used, due to the recommendation given in   Par. 7.

 Prevent multiple inclusion of header file
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_90002`
⌈
All public header files shall prevent multiple inclusion by using #include guards that are likely to be system-wide unique.
⌋

While uniqueness can generally not be guaranteed, the likelihood of collisions can be decreased with a naming scheme that is regular and results in long symbol names.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. ARA coding 指南
*原文标题：ARA coding guidelines*

Reservation of ARA preprocessor macros
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_90003`
⌈
C/C++ preprocessor symbols that start with ARA are reserved for use by AUTOSAR.
⌋

The Adaptive Platform tries to avoid the use of C/C++ preprocessor macros. Such macros start with the prefix ARA. Platform vendors should thus not define any symbols (both macros and C/C++ ones) with this prefix, lest they conflict with such future additions to the standard.

 Consistency of Implementation-defined declaration classifiers
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_90004`
⌈
All APIs shall be implemented with the exact same declaration classifiers that are specified, except for inline and friend, which may be added as necessary.
⌋

Note: The order of declarations may be freely chosen.

  defines the specifiers that can be used in a declaration; these include, for instance, static, virtual, constexpr, inline and friend. An implementation that uses a different set of specifiers in its declaration of a specified API may be incompatible to the standard, or may allow non-standardized usage of that API, leading to portability concerns.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Undefined 行为
*原文标题：Undefined behavior*

Undefined behavior in AUTOSAR APIs
  Previous Identifiers: `SWS_CORE_90031`
⌈
* Generally: as per  in
* Additionally: Where known, UB is documented by AUTOSAR. The effects of UB are not documented and no guarantees are given about how the API shall execute during UB. Nevertheless, documented UB in AUTOSAR is not an error.
⌋

### 15. Implementation-defined 行为
*原文标题：Implementation-defined behavior*

Implementation-defined behavior in AUTOSAR APIs
  Previous Identifiers: `SWS_CORE_90032`
⌈
* Generally: as per  in
* Additionally: The precise behavior of IDB in an API is unknown and undocumented by AUTOSAR. The effects are deferred by AUTOSAR to the (out-of-scope) implementation where they shall be well-documented.
⌋

### 16. Vendor-specific 行为
*原文标题：Vendor-specific behavior*

Vendor-specific behavior in AUTOSAR APIs
  Previous Identifiers: `SWS_CORE_90033`
⌈
Vendor-specific behavior is equivalent to Implementation-defined behavior () since any "vendor-specifics" are implicitly "implementation-defined".
⌋

### 17. 初始化/De-initialization
*原文标题：Initialization/De-initialization*

### 18. Common aspects

For this Functional Cluster, the implementation may initialize the ARA framework up front to avoid first-use delays, or keep initialization empty when relying on "initialize on first use". In both cases, and as required by , the following ara::core types and functions are usable before framework initialization and after de-initialization:

Specifically:

* ara::core::ErrorCode and all its member functions and supporting constructs (including non-member operators)
* ara::core::StringView and all its member functions and supporting constructs (including non-member operators)
* ara::core::Result and all its member functions and supporting constructs, except for ara::core::Result::ValueOrThrow
* ara::core::ErrorDomain and all its member functions and its sub-classes, as long as they adhere to , but excluding <Prefix>ErrorDomain::ThrowAsException
* ara::core::Initialize
* ara::core::Abort
* ara::core::SetAbortHandler
* ara::core::AddAbortHandler

### 19. 初始化
*原文标题：Initialization*

ara::core::Initialize allows a central initialization of all included shared libraries of the ARA framework. This could include initialization of internal data or the setup of daemon links (details are up to the platform vendor).

The general advice for application developers is to call ara::core::Initialize right at the entry point of the application.

The ara::core::Initialize function can be used to:

* initialization of ARA framework specific data structures
* initialization of system resources
* spawning of background threads

If command line argument injection is used in ara::core::Initialize, the relevant command line arguments are removed transparently by this function to allow Application's command line parsing of the other arguments (See )

The behavior before initialization of the Adaptive Platform with ara::core::Initialize of functions that are not explicitly supported according to  or explicitly not supported according to  is implementation-defined.

### 20. De-initialization

ara::core::Deinitialize allows a central deinitialization of all included shared libraries of the ARA framework. This could include the orderly shutdown of background threads or the release of system resources (details are up to the platform vendor).

If a functionality (other than the ones mentioned in ) is called after ara::core::Deinitialize has been called, the behavior is implementation-defined (see ).

Rationale: A check for de-initialization would require runtime checks and semaphores to verify the platform state in each API call. Making this check mandatory would have a significant negative performance impact.

### 21. Logging and 追踪
*原文标题：Logging and Tracing*

The Adaptive Platform Foundation provides libraries that are integrated into adaptive application processes (see  "Figure: 'Overview Log and Trace'" and  "Figure: 'Architecture overview'"). Each function cluster has its own "Context ID" to distinguish these ARA libraries from the application logging and from each other. Further information on Context ID can be found in  in chapter: "Context ID".

 Functional Cluster Log and Trace messages
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_00055`
⌈
Each ARA Functional Cluster shall use standardized Logging and Tracing settings from  when logging their messages via ara::log:

* "Log and Trace Context Identifier": for use with DLT (see )
* "Log and Trace Message Identifier range": (see )
⌋

For Log and Trace Message Identifiers, a Functional Cluster Identifier (FCID) specific partitioning should be used:

* FCID field: up to 255 Functional Clusters (8-bit field)
* SMID field: up to 4096 messages per Functional Cluster (12-bit field)

The fields are derived from msgid as follows:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Thread safety

The  does not provide explicit criteria for defining thread-safety in functions, it is therefore necessary to provide an AUTOSAR definition to set the criteria during evaluation of whether an AUTOSAR function shall be thread-safe. The definitions are deliberately scoped to AUTOSAR APIs, and do not apply to non-AUTOSAR APIs where no guarantees are given.

 AUTOSAR definition of a thread-safe member function
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_13200`
⌈
An AUTOSAR API non-static member function is thread-safe if the function can be called on the same object concurrently by multiple threads without the need for the caller to synchronize between the calls.
⌋

Note: This definition also applies to destructors and assignment operators. They are usually not thread safe. That means concurrent assignments to the same object need to be synchronized by the user of the API.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Async signal safety

An async-signal-safe function is one that can be safely called from within a POSIX signal handler.

 defines a set of functions that are guaranteed to be async-signal-safe; all functions not on that list need to be assumed unsuitable to be called within a signal handler. This includes all ARA APIs, as it is not specified (and in general not possible to determine) which other functions (whether from POSIX or from other standards or implementations) are called within them.

 ARA API usage within a signal handler
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_13210`
⌈
Usage of any ARA API within a signal handler will result in undefined behavior of the application, unless otherwise specified

.
⌋

### 24. 错误处理
*原文标题：Error handling*

During execution of an implementation of Adaptive Platform APIs, different abnormal conditions might be detected and need to be handled and/or reported. Based on their nature, in the following sub-chapters, the types of unsuccessful operations are distinguished within the Adaptive Platform and shall be treated in different ways.

### 25. Traditional 错误处理 in C and C++
*原文标题：Traditional error handling in C and C++*

The C language largely relies on error codes for any kind of error handling. While it also has the setjmp/longjmp facility for performing "non-local gotos", its use for error handling is not widespread, mostly due to the difficulty of reliably avoiding resource leaks.

Error codes in C come in several flavors:

* return values
* out parameters
* error singletons (e.g. errno)

Typically, these error codes in C are plain int variables, making them a very low-level facility without any type safety.

C++ inherited these approaches to error handling from C (not least due to the inheritance of the C standard library as part of the C++ standard), but it also introduced exceptions as an alternative means of error propagation. There are many advantages of using exceptions for error propagation, which is why the C++ standard library generally relies on them for error propagation.

Notwithstanding the advantages of exceptions, error codes are still in widespread use in C++, even within the standard library. Some of that can be explained with concerns about binary compatibility with C, but many new libraries still prefer error codes to exceptions. Reasons for that include:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Violation

Semantics of a Violation
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_00021`
⌈
A Violation is the consequence of failed pre- or post-conditions of an internal state of the application framework. They are the Adaptive Platform's analog to a failed assertion. A Violation is non-recoverable.
⌋

Note: systematic errors can be considered as a failed pre-condition.

 Handling of Standardized Violations
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_00090`
⌈
If a Violation is detected that is standardized in the AUTOSAR AP, then the operation shall be terminated by:

* explicitly terminating the process abnormally via a call to Abort()

In this case a message to support debugging shall be created according to the DLT message defined for the concrete Violation. It shall be output in a string format to the process' standard error stream. Additionally, it should be logged into the log sinks with the "Context Identifier" () of either:

* the functional cluster that detected the Violation for the affected process, or
* the Execution Management

Which Log and Trace Context Identifier () is chosen is implementation-defined

.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Corruption

Semantics of a Corruption
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_00022`
⌈
A Corruption is the consequence of the corruption of a system resource, e.g. stack or heap overflow, or a hardware memory flaw (including even, for instance, a detected bit flip). A Corruption is non-recoverable.
⌋

 Handling of Corruptions
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_00004`
⌈
If a Corruption is detected, it shall result in unsuccessful process termination, in an implementation-defined way.
⌋

Note: It can either be abnormal or normal unsuccessful termination, depending on the implementation's ability to detect the Corruption and to react to it by cleaning up resources.

It is expected that a Violation or Corruption might occur during development of the framework, when new features are just coming together, but will not be experienced by a user (i.e. an application developer), unless there is something seriously wrong in the system's environment (e.g. faulty hardware: Corruption), or basic assumptions about resource requirements are violated (Violation), or possibly the user runs the framework in a configuration that is not supported by its vendor (Violation).

### 28. Failed default allocation

Semantics of a Failed Default Allocation
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_00023`
⌈
A Failed Default Allocation is the inability of the framework's default memory allocation mechanism to satisfy an allocation request. A Failed Default Allocation is non-recoverable.
⌋

 Handling of failed default allocations
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_00005`
⌈
A Failed Default Allocation shall be treated the same as a Non-Standardized Violation (see ), except that the DLT message is FailedDefaultAllocation ().
⌋

Note: An error of a custom allocator is not subject to this definition.

 Handling of exception-based Failed Default Allocations
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_00007`
⌈
If a Failed Default Allocation is realized using an Exception (that is not a sub-class of ara::core::Exception), and the noexcept specifier condition ( ) of the function in which it is raised, evaluates to true: the C++ runtime will invoke std::terminate() automatically.
⌋

Note: This will be the case more often than not as AUTOSAR API functions typically evaluate to noexcept(true).

### 29. 错误
*原文标题：Error*

Semantics of an Error
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_00020`
⌈
An Error is the inability of an assumed-bug-free API function to fulfill its specified purpose; it is often a consequence of invalid and/or unexpected (i.e. possibly valid, but received in unexpected circumstances) input data. An Error is recoverable.
⌋

 Handling of Errors
  Upstream requirements: , ,
  Previous Identifiers: `SWS_CORE_00002`
⌈
An Error shall be returned from the function as an instance of ara::core::Result or ara::core::Future.
⌋

For handling Errors, there are a number of data types defined that help in dealing with them. These are described in the following sub-chapters.

### 30. Standardized 错误 domain Identifiers
*原文标题：Standardized Error domain Identifiers*

Each error domain has a numeric identifier that is used to determine equality of error domains. The error domains that are pre-defined by the Adaptive Platform have standardized identifiers. Application-specific error domains should make sure their identifiers are system-wide unique.

The full range of unique error domain identifiers is partitioned into a range of:

* AUTOSAR-standardized (see ) reserved by AUTOSAR; shown in
* Vendor-specific Ids: (see ); reserved by an AUTOSAR stack vendor
* User-defined Ids: MSB=0; defined via ApApplicationErrorDomain.value

Regardless of the origin of an error domain identifier, it shall be unique in the platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Reporting

### 32. 安全事件
*原文标题：Security Events*

This functional cluster does not define any security events.

### 33. Log Messages

This section lists all non-verbose log messages (i.e., modelled DLT messages) defined by this functional cluster.

### 34. FailedDefaultAllocation

Log Message FailedDefaultAllocation
  Status: DRAFT
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_13018`
⌈
| Dlt-Message | FailedDefaultAllocation | < | < |
|---|---|---|---|
| Description | Sent in case the affected process was terminated because of a failed default allocation | < | < |
| MessageId | 0x80001000 | < | < |
| MessageTypeInfo | DLT_LOG_FATAL | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| modeledProcessId | Meta-model identifier of the process that caused the violation, i.e., its short name path with '/' as a separator | uint8 |  |
| location | An implementation-defined identifier of the location where the violation was detected, for example {filename}:{linenumber} | uint8 |  |
| message | Additional message that can describe the cause of the failed default allocation in more detail | uint8 |  |

⌋

### 35. Violation Messages

This section lists all violation messages (i.e., DLT messages logged for Violations according to ) defined by this functional cluster. Please note that concrete implementations might additionally implement Non-Standardized Violations (see also ).

### 36. AraNotInitializedViolation

Violation Message AraNotInitializedViolation
  Status: DRAFT
  Upstream requirements: ,
  Previous Identifiers: `SWS_CORE_13007`
⌈
| Dlt-Message | AraNotInitializedViolation | < | < |
|---|---|---|---|
| Description | Violation message that is sent in case a constructor or function checks for an initialized ara and identifies that ara is not initialized. | < | < |
| MessageId | 0x80001ff8 | < | < |
| MessageTypeInfo | DLT_LOG_FATAL | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| modeledProcessId | Meta-model identifier of the process that caused the violation, i.e., its short name path with '/' as a separator. | uint8 |  |
| location | An implementation-defined identifier of the location where the violation was detected, for example {filename}:{linenumber}. | uint8 |  |
| instanceSpecifier | InstanceSpecifier used to try to create the object. (only present in case this violation is created by a function/constructor that has an InstanceSpecifier as an argument) | uint8 |  |
| functionName | Name of the function/constructor that was called that checks for an initialized ara. | uint8 |  |

⌋

### 37. InstanceSpecifierAlreadyInUseViolation

Violation Message InstanceSpecifierAlreadyInUseViolation
  Status: DRAFT
  Upstream requirements: ,
  Previous Identifiers: `SWS_CORE_13006`
⌈
| Dlt-Message | InstanceSpecifierAlreadyInUseViolation | < | < |
|---|---|---|---|
| Description | Violation message that is sent in case a constructor in the ara framework was called with an InstanceSpecifier already in use in this process. | < | < |
| MessageId | 0x80001ff9 | < | < |
| MessageTypeInfo | DLT_LOG_FATAL | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| modeledProcessId | Meta-model identifier of the process that caused the violation, i.e., its short name path with '/' as a separator. | uint8 |  |
| location | An implementation-defined identifier of the location where the violation was detected, for example {filename}:{linenumber}. | uint8 |  |
| instanceSpecifier | InstanceSpecifier used to try to create the object. | uint8 |  |
| className | Name of the class that was instantiated. | uint8 |  |

⌋

### 38. UnresolvableInstanceSpecifierViolation

Violation Message UnresolvableInstanceSpecifierViolation
  Status: DRAFT
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_13025`
⌈
| Dlt-Message | UnresolvableInstanceSpecifierViolation | < | < |
|---|---|---|---|
| Description | InstanceSpecifier either cannot be resolved in the model in the context of your executable or process, or it refers to a model element that is neither a PortPrototype of the expected type nor a FunctionalClusterInteractsWithFunctionalClusterMapping of the expected type. | < | < |
| MessageId | 0x80001fe8 | < | < |
| MessageTypeInfo | DLT_LOG_FATAL | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| modeledProcessId | Meta-model identifier of the process that caused the violation, i.e., its short name path with '/' as a separator | uint8 |  |
| location | An implementation-defined identifier of the location where the violation was detected, for example {ClassName}:{MethodName}, {filename}:{linenumber}, etc. | uint8 |  |
| instanceSpecifier | InstanceSpecifier used to try to create the object. | uint8 |  |
| className | Name of the class that was instantiated. | uint8 |  |

⌋

### 39. InsufficientPermissionsViolation

Violation Message InsufficientPermissionsViolation
  Status: DRAFT
  Upstream requirements:
  Previous Identifiers: `SWS_CORE_13000`
⌈
| Dlt-Message | InsufficientPermissionsViolation | < | < |
|---|---|---|---|
| Description | Sent in case the caller had insufficient permissions for the requested operation. | < | < |
| MessageId | 0x80001fff | < | < |
| MessageTypeInfo | DLT_LOG_FATAL | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| modeledProcessId | Meta-model identifier of the process that caused the violation, i.e., its short name path with '/' as a separator. | uint8 |  |
| location | An implementation-defined identifier of the location where the violation was detected, for example {filename}:{linenumber}. | uint8 |  |
| message | Additional message that describes the cause of the access violation. | uint8 |  |

⌋

### 40. Production 错误
*原文标题：Production Errors*

This functional cluster does not define any production errors (i.e., Diagnostic Events).

### 41. API 规范
*原文标题：API specification*

This specification does not specify a functional cluster. This chapter does not apply.

### 42. 服务接口
*原文标题：Service Interfaces*

This specification does not specify a functional cluster. This chapter does not apply.

### 43. 配置
*原文标题：Configuration*

This specification does not specify a functional cluster. This chapter does not apply.

### 44. 附录
*原文标题：Appendix*

### 45. Mentioned 清单 Elements
*原文标题：Mentioned Manifest Elements*

This specification does not specify a functional cluster. This chapter does not apply.

### 46. Demands and constraints on Base 软件 (normative)
*原文标题：Demands and constraints on Base Software (normative)*

This specification does not specify a functional cluster. This chapter does not apply.

### 47. Platform Extension 接口 (normative)
*原文标题：Platform Extension Interfaces (normative)*

This specification does not specify a functional cluster. This chapter does not apply.

### 48. Not implemented 需求
*原文标题：Not implemented requirements*

This functional cluster implements all functional requirements specified in the corresponding requirement specifications.

### 49. History of Constraints and 规范 Items
*原文标题：History of Constraints and Specification Items*

This chapter provides an overview of the history of constraints and specification items. Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 50. Constraint and 规范 Item Changes between AUTOSAR Release R26-11
*原文标题：Constraint and Specification Item Changes between AUTOSAR Release R26-11*

### 51. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

| Number | Heading |
|---|---|
| Handling of Errors |  |
| Handling of Non-Standardized Violations |  |
| Handling of Corruptions |  |
| Handling of failed default allocations |  |
| Handling of exception-based Violations |  |
| Handling of exception-based Failed Default Allocations |  |
| Semantics of an Error |  |
| Semantics of a Violation |  |
| Semantics of a Corruption |  |
| Semantics of a Failed Default Allocation |  |
| Functional Cluster Log and Trace messages |  |
| Log and Trace messages of SWS General |  |
| Handling of Standardized Violations |  |
| Violation Message InsufficientPermissionsViolation |  |
| Violation Message InstanceSpecifierAlreadyInUseViolation |  |
| Violation Message AraNotInitializedViolation |  |
| Log Message FailedDefaultAllocation |  |
| AUTOSAR definition of a thread-safe member function |  |
| AUTOSAR definition of multiple thread-safe member functions |  |
| AUTOSAR definition of a thread-safe non-member function |  |
| Behavior of a concurrently executed non-thread-safe member function |  |
| Behavior of a concurrently executed non-thread-safe non-member function |  |
| Behavior of concurrently executed functions on different instances |  |
| AUTOSAR callable definition |  |
| Behavior of thread-safe callable |  |
| ARA API usage within a signal hand |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 2 章（内容从略，见纯文本全文）

52. Changed 规范 Items in R26-11
53. Deleted 规范 Items in R26-11
