# Specification of Adaptive Platform Core (`Core`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 903 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_Core_903\AUTOSAR_AP_SWS_Core.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_Core_903\AUTOSAR_AP_SWS_Core.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_Core_903\zzgen\AP_SWS_Core.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the functional cluster Core. To aid in this, it also defines functionality that applies to the entire framework, including a set of common data types used by multiple Functional Clusters as part of their public interfaces.

## 模块依赖

AUTOSAR decided not to standardize interfaces which are exclusively used between Functional Clusters (on platform-level only), to allow efficient implementations, which might depend e.g. on the used Operating System.

This chapter provides an informative guideline of the interaction of Core with other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the public interfaces provided by Core to other Functional Clusters. Section  lists the public interfaces required by Core.

The goal is to provide a clear understanding of Functional Cluster boundaries and interaction, without specifying syntactical details. This ensures compatibility between documents specifying different Functional Clusters and supports parallel implementation of different Functional Clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters and return values can be added.

A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the functional cluster Core. To aid in this, it also defines functionality that applies to the entire framework, including a set of common data types used by multiple Functional Clusters as part of their public interfaces.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant to Core. A general list of acronyms and abbreviations is available in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Explicitly aborting an Operation | Immediately aborting an API call, which is initiated by calling ara::core::Abort, usually as a consequence of the detection of a Violation |
| Violation | The semantics of a Violation are defined in |
| Failed Default Allocation | The semantics of a Failed Default Allocation are defined in |
| Standardized Violation | A Violation that is standardized in the AUTOSAR AP standard |
| Non-Standardized Violation | A Violation that is not standardized in the AUTOSAR AP standard |
| Error | The semantics of a Error are defined in |
| callable | The related definitions in  of  apply to AUTOSAR APIs (see also ) |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 约束与假设
*原文标题：Constraints and assumptions*

### 6. 已知限制
*原文标题：Known limitations*

* The specification of some data types (Array, Map, Optional, String, StringView, Variant) mentions "supporting constructs", but lacks a precise scope definition of this term.
* The specification of some data types (Map, Vector, String) is lacking a comprehensive definition of memory allocation behavior; it currently only describes it as "implementation-defined". The interacton with ara::core::MemoryResource and derived types is not defined.
* Chapter  ("") describes some behavior informally that should rather be given as specification items.
* Some parts of the chapter  ("") (SynchronizedPoolResource, UnsynchronizedPoolResource, Executor, String, some constructors) have not been assigned a thread safety category.

### 7. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

AUTOSAR decided not to standardize interfaces which are exclusively used between Functional Clusters (on platform-level only), to allow efficient implementations, which might depend e.g. on the used Operating System.

This chapter provides an informative guideline of the interaction of Core with other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the public interfaces provided by Core to other Functional Clusters. Section  lists the public interfaces required by Core.

The goal is to provide a clear understanding of Functional Cluster boundaries and interaction, without specifying syntactical details. This ensures compatibility between documents specifying different Functional Clusters and supports parallel implementation of different Functional Clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters and return values can be added.

A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 8. Provided 接口
*原文标题：Provided Interfaces*

provides a complete list of interfaces provided to other Functional Clusters within the AUTOSAR Adaptive Platform.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| No provided interfaces | < | < |

### 9. Required 接口
*原文标题：Required Interfaces*

provides a complete list of required interfaces from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| No required interfaces | < | < |

### 10. 功能性 Cluster 初始化
*原文标题：Functional Cluster initialization*

ara::core::Initialize and ara::core::Deinitialize initialize and de-initialize other Functional Clusters as necessary for the particular implementation. All Functional Clusters where this is necessary thus need to provide internal interfaces for their initialization and de-initialization.

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in AUTOSAR RS General , and links to the fulfillment of these.

| Requirement | Description | Satisfied by |
|---|---|---|
| Source Code Portability Support |  |  |
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Usage of ara::core types |  |  |
| Error reporting |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| noexcept behavior of class destructors |  |  |
| Usage of string types |  |  |
| Connecting run-time interface with model |  |  |
| Return type of asynchronous function calls |  |  |
| Usage of "final specifier" |  |  |
| Handling of unsuccessful operations |  |  |
| Availability of special member functions |  |  |
| Avoidance of cluster-specific initialization functions |  |  |
| usage of "noexcept" specifier |  |  |

### 12. 功能规范
*原文标题：Functional specification*

This chapter describes the general data types of the Adaptive Platform defined in ara::core.

### 13. 初始化/De-initialization
*原文标题：Initialization/De-initialization*

### 14. Common aspects

This section describes the global initialization and shutdown of the ARA framework. Before the framework is initialized, and after it is de-initialized, not all ARA functionality may be available.

While it is usually possible for a framework implementation to initialize all parts of the framework in an "initialize on first use" fashion, this might not always be desirable, as it introduces potentially noticeable delays during runtime.

For this reason, initialization and shutdown functions exist that may be used by the framework vendor to initialize/shutdown the framework to an extent that no lazy initialization during runtime is necessary.

On the other hand, another framework implementation might well have empty implementations of these functions, e.g. if this framework chooses to fully adopt the "initialize on first use" idiom.

 Special ara::core types to be used independently of initialization
  Upstream requirements:
⌈
A small subset of ara::core types and functions shall be usable independently of initialization with ara::core::Initialize and de-initialization with ara::core::Deinitialize. These are:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 初始化
*原文标题：Initialization*

ara::core::Initialize allows a central initialization of all included shared libraries of the ARA framework. This could include initialization of internal data or the setup of daemon links (details are up to the platform vendor).

The general advice for application developers is to call ara::core::Initialize right at the entry point of the application.

 Startup and initialization of ARA
  Upstream requirements:
⌈
The ara::core::Initialize function shall initiate the start-up of the ARA framework, which might include (but is not limited to):

* initialization of ARA framework specific data structures
* initialization of system resources
* spawning of background threads
⌋

 Command line argument injection in ara::core::Initialize
  Upstream requirements:
⌈
If command line argument injection is used in ara::core::Initialize, the relevant command line arguments shall be removed transparently by this function to not influence Application's command line parsing.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. De-initialization

Shutdown and de-initialization of ARA
  Upstream requirements:
⌈
The ara::core::Deinitialize function shall initiate the shutdown of the ARA framework, which might include (but is not limited to):

* orderly shutdown of spawned background threads
* de-allocation of dynamically allocated memory
* de-allocation of other system resources
⌋

An error returned by ara::core::Deinitialize is the only way for the ARA to report an error that is guaranteed to be available, e.g. in case ara::log has already been de-initialized. The user is not expected to be able to recover from such an error. However, the user may have a project-specific way of recording errors during de-initialization without ara::log. A typical error case to be reported here is that the user is still holding some resource from the ARA.

Calling ara::core::Deinitialize while ARA APIs are still being called concurrently results in undefined behavior of the application and the framework.

For a proper shutdown, it is also expected that ara::core::Deinitialize is called before the statically initialized data is destructed.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Sequence of 初始化 and De-initialization
*原文标题：Sequence of Initialization and De-initialization*

When ara::core::Initialize has returned successfully, calling it again without a prior call to ara::core::Deinitialize will return an error.

When ara::core::Initialize returns with an error, the application may identify the error cause and then try the call again. Calling ara::core::Deinitialize in this case is not necessary, as any necessary cleanup work has already been performed by ara::core::Initialize before returning to the caller.

When ara::core::Deinitialize returns with an error other than kNotInitialized, it is generally unsafe to call either ara::core::Deinitialize or ara::core::Initialize again.

 Framework initialization
  Upstream requirements:
⌈
A successful call of ara::core::Initialize shall bring the framework into a state that makes all its configured components ready for immediate servicing of further API calls.
⌋

 Clean deinitialization
  Upstream requirements:
⌈
A successful call of ara::core::Deinitialize shall bring the framework into a state that is equivalent to the state before the first call to ara::core::Initialize.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 错误处理
*原文标题：Error handling*

During execution of an implementation of Adaptive Platform APIs, different abnormal conditions might be detected and need to be handled and/or reported. Based on their nature, in the following sub-chapters, the types of unsuccessful operations are distinguished within the Adaptive Platform and shall be treated in different ways.

### 19. ErrorCode

As its name implies, ara::core::ErrorCode is a form of error code; however, it is a class type, loosely modeled on std::error_code, and thus allows much more sophisticated handling of errors than the simple error codes as used in typical C APIs. It always contains a low-level error code value and a reference to an error domain.

The error code value is an enumeration, typically a scoped one. When stored into a ara::core::ErrorCode, it is type-erased into an integral type and thus handled similarly to a C-style error code. The error domain reference defines the context for which the error code value is applicable and thus provides some measure of type safety.

An ara::core::ErrorCode also contains a support data value, which can be defined by an implementation of the Adaptive Platform to give a vendor-specific additional piece of data about the error.

 Semantics of ErrorCode
  Upstream requirements:
⌈
The type ara::core::ErrorCode provides a class interface for storing an error condition. It shall contain these properties:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 错误 Domain
*原文标题：Error Domain*

An AUTOSAR ara::core::ErrorDomain is the abstract base class for holding category specific error information in AUTOSAR. This class is loosely based on std::error_category, but differs significantly from it.

An error domain has an associated error code enumeration - ara::core::ErrorDomain::CodeType and an associated base ara::core::Exception type. Both these are usually defined in the same namespace as the ara::core::ErrorDomain sub-class. For normalized access to these associated types, type aliases with standardized names are defined within the ara::core::ErrorDomain sub-class. This makes the ErrorDomain sub-class the root of all data about errors.

 Semantics of ErrorDomain
  Upstream requirements:
⌈
The type ara::core::ErrorDomain defines a context for a set of error conditions.
⌋

### 21. Usages of ErrorDomain

ErrorDomains may be sub-classed in the following scenarios:

* functional clusters: AUTOSAR functional clusters or platform extensions APIs are sub-classes of ara::core::ErrorDomain. These are directly standardized by AUTOSAR.
* applications: AUTOSAR applications may derive ErrorDomains from ApApplicationErrorDomain. These sub-classes of ara::core::ErrorDomain may be generated PortInterface language binding rule
* implementation-defined: ErrorDomains () / vendor-specific ():

Identity of error domains is defined in terms of unique identifiers. AUTOSAR-defined error domains are given standardized identifiers; user-defined error domains are also required to define unique identifiers.

The ara::core::ErrorDomain class definition requires this unique identifier to be of unsigned 64 bit integer type (std::uint64_t). The range of possible values is large enough to apply UUID-like generation patterns (for UID-64) even if typical UUIDs have 128 bits and are thus larger than that. When a new error domain is created (either an AUTOSAR defined or an user defined one) an according Id shall be randomly generated, which represents this error domain.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 错误 domain Identifiers
*原文标题：Error domain Identifiers*

Each error domain has a numeric identifier that is used to determine equality of error domains. The error domains that are pre-defined by the Adaptive Platform have standardized identifiers. Application-specific error domains should make sure their identifiers are system-wide unique.

The full range of unique error domain identifiers is partitioned into a range of:

* AUTOSAR-standardized Ids: MSB=1; reserved by AUTOSAR; shown in
* Vendor-specific Ids: MSB=1; reserved by an AUTOSAR stack vendor
* User-defined Ids: MSB=0; defined via ApApplicationErrorDomain.value

Regardless of the origin of an error domain identifier, it shall be unique in the platform.

 Error domain identifier
  Upstream requirements:
⌈
All sub-classes of error domains specified in the standard shall implement the ErrorDomain::Id() function which shall return the system wide unique error domain identifier of the ara::core::ErrorDomain from .
⌋

 AUTOSAR error domain range
  Upstream requirements:
⌈
Error domain identifiers where bit #63 is set to 1 and bit #62 is set to 0 are reserved for AUTOSAR-defined error domains.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Vendor 错误 domains
*原文标题：Vendor error domains*

Each API that specifies a return type capable of holding an instance of ara::core::ErrorCode typically specifies a number of specified errors. These are error conditions that all or at least most implementations of that API are expected to generate.

In addition to that, however, an implementation may also return additional, non-specified errors. These are called vendor-specific errors.

Note: This applies in particular to APIs returning ara::core::Result or ara::core::Future.

 Vendor-specific errors
  Upstream requirements:
⌈
A vendor-specific error shall use a vendor-specific error domain.
⌋

### 24. Creating new 错误 domains
*原文标题：Creating new error domains*

Any new software module with significant logical separation from all existing modules of the Adaptive Platform should define one or more own error domains.

An error domain consists of:

* an error condition enumeration
* an exception base class
* an ara::core::ErrorDomain sub-class
* a non-member ErrorDomain sub-class accessor function
* a non-member MakeErrorCode function overload

All these are to reside not in the ara::core namespace, but in the "target" one.

 Custom error domain scope
  Upstream requirements:
⌈
The ara::core::ErrorDomain sub-class and the corresponding enumeration, exception base class, non-member accessor function, and the MakeErrorCode overload shall be defined in the same namespace as the software module for which they are being specified.
⌋

Note: This is to help making sure that the C++ ADL mechanism works as expected by other parts of this standard.

An error domain defined in the way specified in this section is suitable to be used for the ApApplicationErrorDomain model element.

Throughout this section, the character sequence <SN> is a placeholder for the shortname of the ApApplicationErrorDomain.

### 25. ErrorDomain sub-class

Then, a new class is created that derives from ara::core::ErrorDomain and overrides all the pure virtual member functions. In addition to that, it also needs to define in its scope a type alias called Errc for the error condition enumeration, as well as another type alias called Exception for the exception base class for this new error domain.

 ErrorDomain sub-class type
  Upstream requirements:
⌈
Each error domain shall define a class type that derives publicly from ara::core::ErrorDomain.
⌋

 ErrorDomain sub-class naming
  Upstream requirements:
⌈
All sub-classes of ara::core::ErrorDomain shall follow the naming scheme <SN>ErrorDomain, where <SN> is the shortname of the ApApplicationErrorDomain.
⌋

 Error domain message
  Upstream requirements:
⌈
All sub-classes of ara::core::ErrorDomain shall implement the ErrorDomain::Message() function, which shall return the description text, for any given error code in its domain.
⌋

 ErrorDomain sub-class non-extensibility
  Upstream requirements: ,
⌈
All sub-classes of ara::core::ErrorDomain shall be final.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Non-member ErrorDomain sub-class accessor 功能
*原文标题：Non-member ErrorDomain sub-class accessor function*

A non-member accessor function for the new error domain class is to be defined. For an error domain class MyErrorDomain, the accessor function is named GetMyErrorDomain. This accessor function returns a reference to a single global instance of that class. This accessor function shall be fully constexpr-capable; this in turn implies that the ErrorDomain sub-class also shall be constexpr-constructible (see ).

 ErrorDomain sub-class accessor function
  Upstream requirements:
⌈
For all sub-classes of ara::core::ErrorDomain, there shall be a non-member constexpr function that returns a reference-to-const to a singleton instance of it.
⌋

 ErrorDomain sub-class accessor function naming
  Upstream requirements:
⌈
All ara::core::ErrorDomain sub-class accessor functions shall follow the naming scheme Get<SN>ErrorDomain, where <SN> is the shortname of the ApApplicationErrorDomain.
⌋

 ErrorDomain sub-class accessor function
  Upstream requirements:
⌈
All ara::core::ErrorDomain sub-class accessor functions shall have a return type of const ErrorDomain&.
⌋

### 27. Non-member MakeErrorCode overload

A non-member factory function MakeErrorCode needs to be defined, which is implicitly used by the convenience constructors of class ara::core::ErrorCode. This factory function will make use of the non-member accessor function for the error domain sub-class, and call the type-erased constructor of class ara::core::ErrorCode.

 MakeErrorCode overload for new error domains
  Upstream requirements:
⌈
For all sub-classes of ara::core::ErrorDomain, there shall be a constexpr overload of the non-member function MakeErrorCode that creates an ara::core::ErrorCode instance for a given error condition value within the ara::core::ErrorDomain sub-class's error condition range.
⌋

 MakeErrorCode overload signature
  Upstream requirements:
⌈
All overloads of the non-member function MakeErrorCode shall have the following signature:

constexpr ErrorCode MakeErrorCode(<SN>Errc code, ErrorDomain::SupportDataType data) noexcept;

where <SN> is the shortname of the ApApplicationErrorDomain.
⌋

### 28. 错误 condition enumeration
*原文标题：Error condition enumeration*

The error condition enumeration describes all known error conditions of the new software module. It should be reasonably fine-grained to allow users to differentiate error conditions that they might want to handle in different ways.

 Error condition enumeration type
  Upstream requirements:
⌈
Each error domain shall define an error condition enum class with the base type ara::core::ErrorDomain::CodeType that holds all error conditions of that error domain.
⌋

 Error condition enumeration naming
  Upstream requirements:
⌈
Error domain error condition enumerations shall follow the naming scheme <SN>Errc, where <SN> is the shortname of the ApApplicationErrorDomain.
⌋

 Error condition enumeration contents
  Upstream requirements:
⌈
Error domain error condition enumerations shall not contain any values that indicate success.
⌋

 Error condition enumeration numbers
  Upstream requirements:
⌈
Error domain error condition enumerations shall keep the number 0 unassigned.
⌋

### 29. Exception base class

As a complement to the error condition enumeration, an exception base class for this error domain also needs to be defined. This exception base class is used for the "transformation" of an ara::core::ErrorCode object into an exception.

Additional exception types can be defined by the software module, but all these then derive from this base type.

 ErrorDomain exception base type
  Upstream requirements:
⌈
Each error domain shall define an exception base type that is a sub-class of ara::core::Exception.
⌋

 ErrorDomain exception base type naming
  Upstream requirements:
⌈
All error domain exception base types specified by  shall follow the naming scheme <SN>Exception, where <SN> is the shortname of the ApApplicationErrorDomain.
⌋

 ErrorDomain exception type hierarchy
  Upstream requirements:
⌈
All additional exception types defined by a software module shall have the exception base type specified by  as a base class.
⌋

### 30. 错误 Domain C++ pseudo 代码示例
*原文标题：Error Domain C++ pseudo code example*

The following C++ pseudo code illustrates how these definitions come together:

namespace my
{

enum class <SN>Errc : ara::core::ErrorDomain::CodeType
{
    // ...
};

class <SN>Exception : public ara::core::Exception
{
public:
    <SN>Exception(ara::core::ErrorCode err) noexcept;
};

class <SN>ErrorDomain final : public ara::core::ErrorDomain
{
public:
    using Errc = <SN>Errc;
    using Exception = <SN>Exception;

    constexpr <SN>ErrorDomain() noexcept;

    const char* Name() const noexcept override;
    const char* Message(ara::core::ErrorDomain::CodeType errorCode) const noexcept override;
    void ThrowAsException(const ara::core::ErrorCode& errorCode) const noexcept(false) override;
};

constexpr const ara::core::ErrorDomain& Get<SN>ErrorDomain() noexcept;

constexpr ara::core::ErrorCode MakeErrorCode(<SN>Errc code, ara::core::ErrorDomain::SupportDataType data) noexcept;

}  // namespace my

### 31. Result

The ara::core::Result type follows the ValueOrError concept from the C++ proposal p0786 . It either contains a value (of type ValueType), or an error (of type ErrorType). Both ValueType and ErrorType are template parameters of ara::core::Result, and due to their templated nature, both value and error can be of any type. ErrorType is defaulted to ara::core::ErrorCode, and it is enforced that only this type is allowed as the ErrorType template parameter for ara::core::Result.

ara::core::Result acts as a "wrapper type" that connects the exception-less API approach using ara::core::ErrorCode with C++ exceptions. As there is a direct mapping between ara::core::ErrorCode and a domain-specific exception type, ara::core::Result allows to "transform" its embedded ara::core::ErrorCode into the appropriate exception type, by calling ara::core::Result::ValueOrThrow.

 Semantics of ara::core::Result
  Upstream requirements: , ,
⌈
The type ara::core::Result shall provide a means to handle both return values and errors from synchronous function calls in an exception-less way, by providing an encapsulated return type which may be either:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Future and Promise

ara::core::Future and its companion class ara::core::Promise are closely modeled on std::future and std::promise, but have been adapted to interoperate with ara::core::Result. Similar to ara::core::Result described in section , the class ara::core::Future either contains a value, or an error (the Future first has to be in "ready" state, though).

Class ara::core::Promise has been adapted in two aspects:

* std::promise::set_exception has been removed and ara::core::Promise::SetError has been introduced in its stead.
* For ara::core::Future, there is a new member function ara::core::Future::GetResult that is similar to ara::core::Future::get, but never throws an exception and returns a ara::core::Result instead.

Thus, ara::core::Future as return type allows the same dual approach to error handling as ara::core::Result, in that it either works exception-based (with ara::core::Future::get), or exception-free (with ara::core::Future::GetResult).

ara::core::Result is a type used for returning values or errors from a synchronous function call, whereas ara::core::Future is a type used for returning values or errors from an asynchronous function call.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Exceptions

The Adaptive Platform defines a base exception type ara::core::Exception for all exceptions defined in the standard. This exception takes a ara::core::ErrorCode object as mandatory constructor argument, similar to the way std::system_error takes a std::error_code argument for construction.

Below this exception base type, there is an additional layer of exception base types, one for each error domain.

For error domains that are modeled in ARXML, the C++ language binding will generate an exception class in addition to the ErrorDomain sub-class (which is described in section ). This exception class also conforms to a standard naming scheme: shortName of ApApplicationErrorDomain plus Exception suffix (this makes it distinguishable from the ara::core::ErrorDomain sub-class itself). It is located in the same namespace as the corresponding ara::core::ErrorDomain sub-class.

### 34. Duality of ErrorCode and Exception

By using the classes listed above, all APIs of the Adaptive Platform can be used with either an exception-based or an exception-less error handling workflow. However, no API function will ever treat an Error by throwing an exception directly; it will always return an error code in the form of a ara::core::Result or ara::core::Future return value instead. It is then possible for the caller to "transform" the Error into an exception, typically via the member function ara::core::Result::ValueOrThrow.

When working with a C++ compiler that does not support exceptions at all (or one that has been configured to disable them with an option such as g++'s -fno-exceptions), all API functions still show the same behavior. What does differ then is that ara::core::Result::ValueOrThrow is not defined - this member function is only defined when the compiler does support exceptions.

### 35. Explicitly aborting an Operation

If a Violation has been detected by the implementation of an API function,  mandates to abort this operation immediately. It allows two ways to do this; either by throwing certain kinds of exceptions (if the implementation supports C++ exceptions), or by calling ara::core::Abort.

Calling ara::core::Abort will result in an Explicitly aborting an Operation, which usually leads to an Abnormal Termination as defined by . This section defines the behavior of this mechanism.

Like std::abort, calling ara::core::Abort is meant to terminate the current process abnormally and immediately, without performing stack unwinding and without calling destructors of static objects.

 Standard Error Stream Logging of Explicitly aborting an Operation
  Upstream requirements:
⌈
Calling ara::core::Abort shall result in a log message being output to the process' standard error stream. The log message shall contain the string representation of the parameters that have been passed to the function as arguments, in the same order that they have been passed.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 446 章（内容从略，见纯文本全文）

36. AbortHandler
37. SIGABRT handler
38. 核数据类型
39. 数据类型 devised by AUTOSAR
40. ara：：核：：InstanceSpecifier
41. ara：：核：：Executor
42. 数据类型 derived from the C++ standard
43. 通用 aspects：
44. Deviations：
45. Containers 库
46. ara：：核：：Array
47. ara：：核：：Vector
48. ara：：核：：映射
49. ara：：核：：Span
50. 通用 utilities 库
51. ara：：核：：Bitset
52. ara：：核：：Optional
53. ara：：核：：Optional<T&>
54. ara：：核：：Variant
55. ara：：核：：MemoryResource
56. In-place disambiguation tags
57. Non-member container access
58. Strings 库
59. ara：：核：：String
60. ara：：核：：StringView
61. Language 支持库
62. ara：：核：：Byte
63. Time 库
64. ara：：核：：SteadyClock
65. 定义 of terms
66. Clocks in the Adaptive Platform
67. 功能性 cluster life-cycle
68. 启动
69. 关机
70. Reporting
71. 安全事件
72. Log Messages
73. AbortMessage
74. Violation Messages
75. FutureContinuationHasThrownViolation
76. FutureInvalidViolation
77. IsoStdBadAllocViolation
78. IsoStdBadOptionalAccessViolation
79. IsoStdBadVariantAccessViolation
80. IsoStdFutureErrcFutureAlreadyRetrievedViolation
81. IsoStdFutureErrcNoStateViolation
82. IsoStdFutureErrcPromiseAlreadySatisfiedViolation
83. IsoStdInvalidArgumentViolation
84. IsoStdLengthErrorViolation
85. IsoStdOutOfRangeViolation
86. IsoStdOverflowErrorViolation
87. PromiseNoSharedStateToSetViolation
88. ResultWithNoErrorViolation
89. ResultWithNoValueViolation
90. WrongDomainOfAnErrorCodeViolation
91. Production 错误
92. API 规范
93. Header：ara/核/array.h
94. Non-Member Functions
95. Other
96. Class：Array
97. Public Member 类型
98. Public Member Functions
99. Member Functions
100. Capacity
101. Element access
102. Iterators
103. Struct：tuple_element
104. Public Member 类型
105. Struct：tuple_size
106. Header：ara/核/bitset.h
107. Non-Member Functions
108. Other
109. Class：Bitset
110. Public Member Functions
111. Special Member Functions
112. Constructors
113. Capacity
114. Conversions
115. Element access
116. Modifiers
117. Other
118. Class：reference
119. Public Member Functions
120. Special Member Functions
121. Member Functions
122. Private Member Functions
123. Special Member Functions
124. Struct：hash
125. Header：ara/核/映射.h
126. Non-Member Functions
127. Other
128. Class：映射
129. Public Member 类型
130. Public Member Functions
131. Special Member Functions
132. Constructors
133. Capacity
134. Element access
135. Iterators
136. Lookup
137. Modifiers
138. Observers
139. Operator=
140. Other
141. Class：value_compare
142. Protected Member Variables
143. Public Member Functions
144. Member Functions
145. Protected Member Functions
146. Constructors
147. Header：ara/核/memory_resource.h
148. Non-Member Functions
149. Other
150. Class：MemoryResource
151. Public Member Functions
152. Special Member Functions
153. Member Functions
154. Private Member Functions
155. Member Functions
156. Class：MonotonicBufferResource
157. Public Member Functions
158. Special Member Functions
159. Constructors
160. Member Functions
161. Protected Member Functions
162. Member Functions
163. Class：PolymorphicAllocator
164. Public Member 类型
165. Public Member Functions
166. Special Member Functions
167. Constructors
168. Member Functions
169. Struct：PoolOptions
170. Public Member Variables
171. Class：SynchronizedPoolResource
172. Public Member Functions
173. Special Member Functions
174. Constructors
175. Member Functions
176. Protected Member Functions
177. Member Functions
178. Class：UnsynchronizedPoolResource
179. Public Member Functions
180. Special Member Functions
181. Constructors
182. Member Functions
183. Protected Member Functions
184. Member Functions
185. Header：ara/核/optional.h
186. Global Variables
187. Non-Member Functions
188. Other
189. Class：Optional
190. Public Member 类型
191. Public Member Functions
192. Special Member Functions
193. Constructors
194. Modifiers
195. Observers
196. Operator=
197. Class：Optional<T &>
198. Public Member 类型
199. Public Member Functions
200. Special Member Functions
201. Constructors
202. Modifiers
203. Observers
204. Operator=
205. Struct：nullopt_t
206. Struct：hash
207. Public Member Functions
208. Member Functions
209. Header：ara/核/span.h
210. Global Variables
211. Non-Member Functions
212. Other
213. Class：Span
214. Public Member 类型
215. Public Member Variables
216. Public Member Functions
217. Special Member Functions
218. Constructors
219. Element access
220. Iterators
221. Observers
222. Subviews
223. Header：ara/核/string_view.h
224. Non-Member Functions
225. Other
226. Class：StringView
227. Public Member 类型
228. Public Member Variables
229. Public Member Functions
230. Special Member Functions
231. Constructors
232. Capacity
233. Element access
234. Iterators
235. Operations
236. Struct：hash
237. Public Member Functions
238. Member Functions
239. Header：ara/核/string.h
240. Non-Member 类型
241. Non-Member Functions
242. Other
243. Class：BasicString
244. Public Member 类型
245. Public Member Variables
246. Public Member Functions
247. Special Member Functions
248. Constructors
249. Capacity
250. Element access
251. Iterators
252. Modifiers
253. Operations
254. Operator=
255. Other
256. Search
257. Struct：hash
258. Header：ara/核/variant.h
259. Non-Member 类型
260. Global Variables
261. Non-Member Functions
262. Other
263. Struct：Monostate
264. Class：Variant
265. Public Member Functions
266. Special Member Functions
267. Constructors
268. Member Functions
269. Modifiers
270. Observers
271. Operator=
272. Struct：variant_alternative
273. Struct：variant_alternative<I, Variant<类型...>>
274. Struct：variant_alternative<I, const T>
275. Struct：variant_alternative<I, const volatile T>
276. Struct：variant_alternative<I, volatile T>
277. Struct：variant_size
278. Struct：variant_size<Variant<类型...>>
279. Struct：variant_size<const T>
280. Struct：variant_size<const volatile T>
281. Struct：variant_size<volatile T>
282. Struct：Monostate>
283. Public Member Functions
284. Member Functions
285. Struct：Variant<类型...>>
286. Public Member Functions
287. Member Functions
288. Header：ara/核/vector.h
289. Non-Member Functions
290. Other
291. Class：Vector
292. Public Member 类型
293. Public Member Functions
294. Special Member Functions
295. Constructors
296. Capacity
297. Element access
298. Iterators
299. Modifiers
300. Operator=
301. Other
302. Struct：hash
303. Public Member Functions
304. Member Functions
305. Header：ara/核/abort.h
306. Non-Member 类型
307. Non-Member Functions
308. Other
309. Header：ara/核/exception.h
310. Class：Exception
311. Public Member Functions
312. Special Member Functions
313. Constructors
314. Member Functions
315. Protected Member Functions
316. Special Member Functions
317. Header：ara/核/error_domain.h
318. Class：ErrorDomain
319. Public Member 类型
320. Public Member Functions
321. Special Member Functions
322. Member Functions
323. Protected Member Functions
324. Special Member Functions
325. Constructors
326. Header：ara/核/error_code.h
327. Non-Member Functions
328. Other
329. Class：ErrorCode
330. Public Member Functions
331. Constructors
332. Member Functions
333. Header：ara/核/core_error_domain.h
334. Non-Member 类型
335. Non-Member Functions
336. Other
337. Class：CoreErrorDomain
338. Public Member 类型
339. Public Member Functions
340. Special Member Functions
341. Member Functions
342. Class：CoreException
343. Public Member Functions
344. Constructors
345. Header：ara/核/future.h
346. Non-Member 类型
347. Class：Future
348. Public Member Functions
349. Special Member Functions
350. Member Functions
351. Class：Future<void, E>
352. Public Member Functions
353. Special Member Functions
354. Member Functions
355. Class：Promise
356. Public Member Functions
357. Special Member Functions
358. Member Functions
359. Class：Promise<void, E>
360. Public Member Functions
361. Special Member Functions
362. Member Functions
363. Header：ara/核/future_error_domain.h
364. Non-Member 类型
365. Non-Member Functions
366. Other
367. Class：FutureErrorDomain
368. Public Member 类型
369. Public Member Functions
370. Special Member Functions
371. Member Functions
372. Class：FutureException
373. Public Member Functions
374. Constructors
375. Header：ara/核/steady_clock.h
376. Class：SteadyClock
377. Public Member 类型
378. Public Member Variables
379. Public Member Functions
380. Member Functions
381. Header：ara/核/utility.h
382. Non-Member 类型
383. Global Variables
384. Non-Member Functions
385. Other
386. Struct：in_place_index_t
387. Public Member Functions
388. Special Member Functions
389. Struct：in_place_t
390. Public Member Functions
391. Special Member Functions
392. Struct：in_place_type_t
393. Public Member Functions
394. Special Member Functions
395. Struct：is_nothrow_swappable
396. Header：ara/核/executor.h
397. Class：Executor
398. Public Member Functions
399. Special Member Functions
400. Member Functions
401. Header：ara/核/初始化.h
402. Non-Member Functions
403. Other
404. Header：ara/核/instance_specifier.h
405. Non-Member Functions
406. Other
407. Class：InstanceSpecifier
408. Public Member Functions
409. Special Member Functions
410. Constructors
411. Member Functions
412. Named Constructors
413. Header：ara/核/result.h
414. Non-Member Functions
415. Other
416. Class：Result
417. Public Member 类型
418. Public Member Functions
419. Special Member Functions
420. Constructors
421. Member Functions
422. Named Constructors
423. Class：Result<T &, E>
424. Public Member 类型
425. Public Member Functions
426. Special Member Functions
427. Constructors
428. Member Functions
429. Named Constructors
430. Class：Result<void, E>
431. Public Member 类型
432. Public Member Functions
433. Special Member Functions
434. Constructors
435. Member Functions
436. Named Constructors
437. 服务接口
438. 配置
439. Default Values
440. Semantic Constraints
441. 附录
442. Mentioned 清单 Elements
443. Demands and constraints on Base 软件 (normative)
444. Platform Extension 接口 (normative)
445. Implementation-defined and undefined 行为 (informative)
446. Implementation-defined 行为 (IDB)
447. Undefined 行为 (UB)
448. Not implemented 需求
449. Change History
450. Change History of this document according to AUTOSAR Release R19-11
451. Added 规范 Items in R19-11
452. Changed 规范 Items in R19-11
453. Deleted 规范 Items in R19-11
454. Change History of this document according to AUTOSAR Release R20-11
455. Added 规范 Items in R20-11
456. Changed 规范 Items in R20-11
457. Deleted 规范 Items in R20-11
458. Change History of this document according to AUTOSAR Release R21-11
459. Added 规范 Items in R21-11
460. Changed 规范 Items in R21-11
461. Deleted 规范 Items in R21-11
462. Change History of this document according to AUTOSAR Release R22-11
463. Added 规范 Items in R22-11
464. Changed 规范 Items in R22-11
465. Deleted 规范 Items in R22-11
466. Change History of this document according to AUTOSAR Release R23-11
467. Added 规范 Items in R23-11
468. Changed 规范 Items in R23-11
469. Deleted 规范 Items in R23-11
470. Change History of this document according to AUTOSAR Release R24-11
471. Added 规范 Items in R24-11
472. Changed 规范 Items in R24-11
473. Deleted 规范 Items in R24-11
474. Change History of this document according to AUTOSAR Release R25-11
475. Added 规范 Items in R25-11
476. Changed 规范 Items in R25-11
477. Deleted 规范 Items in R25-11
478. Change History of this document according to AUTOSAR Release R26-11
479. Added 规范 Items in R26-11
480. Changed 规范 Items in R26-11
481. Deleted 规范 Items in R26-11
