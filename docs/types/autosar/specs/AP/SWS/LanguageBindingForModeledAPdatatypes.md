# Specification of Language Binding for modeled AP data types (`LanguageBindingForModeledAPdatatypes`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 994 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_LanguageBindingForModeledAPdatatypes_994\AUTOSAR_AP_SWS_LanguageBindingForModeledAPdatatypes.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_LanguageBindingForModeledAPdatatypes_994\AUTOSAR_AP_SWS_LanguageBindingForModeledAPdatatypes.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_LanguageBindingForModeledAPdatatypes_994\zzgen\AP_SWS_LanguageBindingForModeledAPdatatypes.complete.txt`

## 模块依赖

This specification does not specify a Functional Cluster. This chapter does not apply.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

### 2. Adaptive Platform 数据类型
*原文标题：Adaptive Platform Data Types*

The AUTOSAR data type model defined in  allows varying levels of granularity for specifying data types. The fundamentals of AUTOSAR data types are described in  and further specialized for the Adaptive Platform (AP) in .

This specification is not concerned with ApplicationDataTypes, it is only concerned with concrete sub-classes of AbstractImplementationDataType - it is at this point in the data type model that the Language Binding is selected.

In general, the data types are used by typed sub-classes of PortInterface which model a particular function, e.g. ServiceInterface. Interface elements of these sub-classes of PortInterface may reference AutosarDataPrototypes, further typed by concrete sub-classes of AutosarDataTypes; specifically, as stated in  these are "Application" level and "Implementation" level data types.

Figure  shows on meta-model level the usage of AutosarDataPrototypes in Adaptive Platform Interfaces.

### 3. Language Bindings

While the primary focus of the AP is targeted towards a C++ Language Binding (), the chapter structure of the document allows for future versions to seamlessly insert "other" Language Bindings.

### 4. Methodology

This specification documents the generation/serialization rules for transforming AP "modeled" Implementation Data Types to actual "language level" Data Types which can be processed by a compiler/interpreter of the bound language.

The general workflow step is described in "Adaptive Software Generated Item" in ; Figure  shows a very general workflow step for generation of data types from an Adaptive Platform Interface. Each "language specific" binding will have a "language specific" approach, and thus a respective chapter in this specification.

This specification is not concerned with the implementation details of an ARA Language Binding Generator, rather, the rules which an ARA Language Binding Generator must observe during generation/serialization.

 Principle of an ARA Language Binding Generator
  Upstream requirements:
⌈
The ARA Language Binding Generator is responsible for generating the Language Binding artifacts. These include data type declarations derived from the referenced AbstractImplementationDataTypes of the Adaptive Platform Interfaces.
⌋

### 5. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Abbreviation | Meaning |
|---|---|
| - | - |

| Term | Meaning |
|---|---|
| Allocator | A language specific object responsible for (de-)allocation, (de-)initialization and ultimately limit impositions in memory/storage. C++ allocators must satisfy the requirements for an Allocator in ISO/IEC 14882 (version according to ). |
| ARA Language Binding Generator | A workflow tool (e.g. a script) with the purpose to read/parse an ARXML model of data types in an Adaptive Platform Interface and generate a corresponding language specific representation thereof. Hereafter referred to as the Generator. |
| Adaptive Platform Interface | A typed (concrete) sub-class of PortInterface bound to the Adaptive Platform (in contrast to an "other" platform). |
| CppImplementationTypes Header File | A generated C++ header file created by an ARA Language Binding Generator. |
| C++ Bound Interface | An Adaptive Platform Interface which transitively references a CppImplementationDataType in it's usage (in contrast to an "other" language binding). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 相关文档
*原文标题：Related documentation*

### 7. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 8. Further applicable 规范
*原文标题：Further applicable specification*

No further AUTOSAR specifications apply.

### 9. 约束与假设
*原文标题：Constraints and assumptions*

### 10. 已知限制
*原文标题：Known limitations*

* Although future versions of this specification may add further Language Bindings, the primary focus of the AP (and therefore this specification) is a binding to the C++ language.

### 11. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This specification does not specify a Functional Cluster. This chapter does not apply.

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement, this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Source Code Portability Support |  |  |
| Compatibility with the ISO 14882 C++ standard |  |  |
| Header file name |  |  |
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Usage of ara::core types |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| Usage of string types |  |  |

### 13. 功能规范
*原文标题：Functional Specification*

LBAP is not an ARA Functional Cluster (FC) and therefore has no Functional Cluster behavior specification. Rather, in the following sub-chapters the serialization/binding rules are laid out certain model elements in a PortInterface are transformed to the respective language specific representation for use in ARA applications and FCs.

As explained in , AutosarDataTypes referenced by elements of any Adaptive Platform Interface, e.g.:

* ServiceInterface.event
* ServiceInterface.method
* ServiceInterface.field
* PersistencyKeyValueStorageInterface.dataElement

may be serialized/bound by a (generator/serializer) tool to an actual language bound compilable(or as near to as compilable as possible if they shall be further post-processed). The following sub-chapters specify the serialization rules for those Language Bindings supported by AUTOSAR.

### 14. C++ binding for CppImplementationDataTypes

This section describes the overall methodology and principles of the ARA Language Binding Generator for a binding to the C++ language; specifically, the version stated in  specifies the C++ standards version for the AP.

In the context of this specification, any reference to C++ language level aspects, pertain to the ISO C++ standards version given by .

Figure  shows the workflow steps for code generation for a C++ Language Binding, other languages may have other workflows.

This is a more detailed pictorial view of the high-level AP workflow step "Adaptive Software Generated Item" in  and thus the Language Binding generation would typically be done together with the other generations in the context of this workflow step.

The attribute typeEmitter has an immediate direct influence on the behavior of the ARA Language Binding Generator i.e. whether generation shall take place or not.

 ARA Language Binding Generator usage of typeEmitter
  Upstream requirements:
⌈
The ARA Language Binding Generator shall generate a corresponding C++ Language Binding according to the rules defined in ,  and .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. CppImplementationDataType

The basis for the C++ Language Binding is the C++ data type representation in . The CppImplementationDataType is the point in the AUTOSAR data type tree where the implementation of the data type becomes bound to the C++ language.

For the following sub-chapters, it is essential to have an understanding of the AUTOSAR data type model from the perspective of CppImplementationDataType shown here in Figure .

Further,  in  must be applied to all CppImplementationDataTypes in the following sub-chapters - this sets the necessary restriction of applicable category to CppImplementationDataType sub-element in the data type tree. The CppImplementationDataType is refined into two different sub-classes: StdCppImplementationDataType and CustomCppImplementationDataType and treated differently by the ARA Language Binding Generator.

### 16. StdCppImplementationDataType

The StdCppImplementationDataType is the basis for CppImplementationDataTypes, where the exact C++ serialization shall be provided by an AUTOSAR defined code implementation in .

### 17. Header 文件 Generation
*原文标题：Header File Generation*

Note:  obviously makes sense for C++ Compound Types, but it is accepted that this rule may be relaxed for simple types which resolve to C++ Fundamental Types, i.e. it makes less sense to create an own C++ header (.h) for a simple using declaration.

### 18. Primitive 数据类型
*原文标题：Primitive Data Type*

A Primitive CppImplementationDataType is classified by the category attribute of the CppImplementationDataType set to VALUE.

Models of Primitive CppImplementationDataType should conform to  in .

 Standardized Primitive CppImplementationDataTypess
  Upstream requirements: ,
⌈
The StdCppImplementationDataType of category=VALUE is allowed to have one of the following shortNames:

* int8_t : see  in ,
* int16_t : see  in ,
* int32_t : see  in ,
* int64_t : see  in ,
* uint8_t : see  in ,
* uint16_t: see  in ,
* uint32_t: see  in ,
* uint64_t: see  in ,
* bool : see  in ,
* float : see  in ,
* double : see  in ,
⌋

Since only a defined set of StdCppImplementationDataTypes with category=VALUE are supported, the primitive C++ data types float, bool and double are supported in addition to chosen fixed width integer types defined in the C++ standard library header <cstdint>.

 Primitive CppImplementationDataType fixed width integers
  Upstream requirements:
⌈
If a StdCppImplementationDataType with the category=VALUE is referenced in a C++ Bound Interface, the C++ standard library header <cstdint> shall be included if the StdCppImplementationDataType has one of the following shortNames:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. String 数据类型
*原文标题：String Data Type*

API specified in .

### 20. String Encoding

Since the usage of ApplicationDataTypes is not mandatory in AUTOSAR, it is necessary to stipulate the language binding behavior in both cases, where:

* ApplicationDataTypes are used:
* ApplicationDataTypes are NOT used:

It should be noted: the encoding scheme used for the language binding is independent of the configured encoding scheme for the network binding.

 Encoding of strings with a baseTypeEncoding
  Upstream requirements:
⌈
For a StdCppImplementationDataType.category==STRING with a corresponding ApplicationDataType.category==STRING mapped via a DataTypeMap and where that ApplicationDataType has a baseTypeEncoding=UTF-8, the generated string shall explicitly contain a UTF-8 encoding.
⌋

 Encoding of strings without a baseTypeEncoding
  Upstream requirements:
⌈
For a StdCppImplementationDataType of category==STRING with no corresponding ApplicationDataType with category=STRING mapped via a DataTypeMap, the generated string shall assume to contain the platform specific character encoding of UTF-8.
⌋

### 21. Enumeration (CompuMethod.category=TEXTTABLE) 数据类型
*原文标题：Enumeration (CompuMethod.category=TEXTTABLE) Data Type*

API specified in .

### 22. Bitfield (CompuMethod.category=BITFIELD_TEXTTABLE) 数据类型
*原文标题：Bitfield (CompuMethod.category=BITFIELD_TEXTTABLE) Data Type*

API specified in .

If either a:

* StdCppImplementationDataType.category==VALUE or
* StdCppImplementationDataType.category==`TYPE_REFERENCE` which type-resolves to category==VALUE

aggregate a swDataDefProps.compuMethod.category==`BITFIELD_TEXTTABLE`, the data type represents a Bitfield Data Type. The Bitfield Data Type itself, is represented by a C++ class, as shown in .

### 23. Bitsets

Inside the Bitfield Data Type, are individual bitsets. For each compuScale, a C++ type alias, is generated, with a symbolic name to represent the compuScale and with an underlying type to hold the actual bits in the bitset, as shown in .

Thus, the number of bitsets (N_{bitsets}) is the number of CompuMethod.compuPhysToInternal.compuContent.compuScales.

For each discrete bitset, the number of bits (L_{bitset}) in ara::core::Bitset<L_{bitset}> is only as long as the number of contiguous bits with value 1 in the CompuScale.mask.

The overall length of the Bitfield Data Type (L_{bitfield}) is the total length of all ara::core::Bitset<L_{bitset}>s, see also size() function.

In contrast to the traditional C-based bit-manipulation routines, the ara::core::Bitset offers a very flexible means of accessing/modifying individual bits without having to consider bit-masking.

### 24. Getters

It is irrelevant whether the CompuScale represents a single-bit boolean semantic or multiple-bits with an enumeration semantic, for each CompuScale, 1 getter method prototype shall be generated which shall return the value of the bitset, as shown in .

### 25. Setters

Additionally, for each unique combination of CompuScale.shortLabel and CompuScale.mask a setter method prototype shall be generated, one for each combination, using the CompuScale.symbol to disambiguate the possible setter states, which shall set the value of the bitset to the CompuScale.lowerLimit/CompuScale.upperLimit, as shown in .

The number of setters (N_{setters}) for the bitset is equivalent to the number of CompuScales with equivalent CompuScale.shortLabel and CompuScale.mask value pairs.

### 26. CustomCppImplementationDataType

The CustomCppImplementationDataType facilitates the usage of existing data type definitions that are taken as the basis for a C++ Language Binding. When processing a CustomCppImplementationDataType, instead of actually generating the "standard" language binding as with StdCppImplementationDataType, the generator shall defer to use a pre-existing implementation, identified by: a C++ header file, C++ namespace and C++ symbol identifier. See chapter .

API specified in .

### 27. C++ binding for ApApplicationErrors

The language binding for ApApplicationErrors and their ApApplicationErrorDomains utilizes the same AUTOSAR API as the ara::core error domain - i.e. . Similar to the language binding for CppImplementationDataType, the language binding for ApApplicationErrors and their ApApplicationErrorDomains shall be generated based partially on content from a PortInterface model, in particular the ClientServerOperations (fireAndForget==FALSE) referenced in the role method. In the example model in , all application error model actors and their relationships are shown. The example uses a ServiceInterface with modeled ApApplicationErrors, but the principle is the same with any sub-class of PortInterface.

The workflow for a generator to process the ApApplicationErrors is listed here:

# The generator shall collect and iterate over all ApApplicationErrors, (transitively) referenced either by:

  * ClientServerOperation.possibleApError or
  * ClientServerOperation.possibleApErrorSet[].apApplicationError

  which reference a ApApplicationErrorDomain in the role errorDomain.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. API 规范
*原文标题：API specification*

### 29. Header：{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h
*原文标题：Header: {<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h*

Definition of Header File {<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h
  Upstream requirements:
⌈
| Kind: | Header File | < |
|---|---|---|
| Syntax: | {<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h | < |
| Description: | For each modeled ApApplicationErrorDomain a C++ header file shall be generated according to this directory path/file name. A multiple inclusion guard shall be inserted around the whole header file as per | < |
| Descriptors: | {<aaed-dir>} | The directory path as given by SymbolProps aggregated in the role ApApplicationErrorDomain. namespace. For each namespace in the ordered list: namespace shall be an child directory of namespace converted to lower-case. |
| ^ | {<aaed-file-prefix>} | The ApApplicationErrorDomain.shortName converted to lower-case |
| ^ | {<aaed-sn-uc>} | The ApApplicationErrorDomain.shortName converted to upper-case |
| Example: | // File=n/n_plus_1/n_plus_2/{<aaed-file-prefix>}_error_domain.h |  |

#ifndef N_NPLUS1_NPLUS2_{<aaed-sn-uc>}_ERROR_DOMAIN_H_
#define N_NPLUS1_NPLUS2_{<aaed-sn-uc>}_ERROR_DOMAIN_H_
#include ".../path/to/{<aaed-file-prefix>}_error_domain.h"
...
| #endif // N_NPLUS1_NPLUS2_{<aaed-sn-uc>}_ERROR_DOMAIN_H_ | < |
|---|---|

⌋

### 30. Namespaces

### 31. Namespace：{<aaed-ns>}
*原文标题：Namespace: {<aaed-ns>}*

Definition of Namespace {<aaed-ns>}
  Upstream requirements:
⌈
| Kind: | namespace | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | -- | < |
| Syntax: | namespace {<aaed-ns>} | < |
| Description: | Namespace hierarchy of the ApApplicationErrorDomain | < |
| Descriptors: | {<aaed-dir>} | As per {<aaed-file-prefix>} in |
| ^ | {<aaed-file-prefix>} | As per {<aaed-file-prefix>} in |
| ^ | {<aaed-ns>} | The C++ namespace hierarchy as given by SymbolProps aggregated in the role ApApplicationErrorDomain. namespace. For each namespace in the ordered list: namespace shall be an inner namespace of namespace converted to lower-case. |
| Example: | ... |  |

namespace n {
namespace n_plus_1 {
namespace n_plus_2 { ... }
}
}
| ... | < |
|---|---|

⌋

### 32. Non-Member 类型
*原文标题：Non-Member Types*

Definition of API enum {<aaed-ns>}::{<aaed-sn>}Errc
  Upstream requirements:
⌈
| Kind: | enumeration | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | namespace {<aaed-ns>} | < |
| Symbol: | {<aaed-sn>}Errc | < |
| Underlying type: | ara::core::ErrorDomain::CodeType | < |
| Syntax: | enum class {<aaed-sn>}Errc : ara::core::ErrorDomain::CodeType {...}; | < |
| Values: | {<aae-list>} | As per |
| Description: | Defines the list of application error codes for the domain | < |
| Descriptors: | {<aaed-ns>} | As per {<aaed-ns>} in |
| ^ | {<aaed-sn>} | The ApApplicationErrorDomain. shortName |
| ^ | {<aae-list>} | Shown as "..." in Syntax. The list of enumerations/error codes as given by: |

* ClientServerOperation.possibleApError.errorCodes
* ClientServerOperation.possibleApErrorSet[].apApplicationError.errorCodes

For each enumerator in the list,  applies.
⌋

### 33. Global Variables

Definition of API variable {<aaed-ns>}::{<symbol-aae-sn>}
  Upstream requirements:
⌈
| Kind: | variable | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | namespace {<aaed-ns>} | < |
| Symbol: | {<symbol-aae-sn>} | < |
| Type: | -- | < |
| Syntax: | {<symbol-aae-sn>} = {<aae-ec>}; | < |
| Description: | For each error code in the list of error codes in  there shall exist a C++ enumerator declaration. | < |
| Descriptors: | {<aaed-ns>} | As per {<aaed-ns>} in |
| ^ | {<symbol-aae-sn>} | The error code literal, given by ApApplicationError.shortName |
| ^ | {<aae-ec>} | The error code value, given by ApApplicationError.errorCode. |
| See also: | , , , , | < |

⌋

### 34. Non-Member Functions

### 35. Other

Definition of API function {<aaed-ns>}::Get{<aaed-sn>}ErrorDomain
  Upstream requirements: ,
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | namespace {<aaed-ns>} | < |
| Syntax: | constexpr const ara::core::ErrorDomain & Get{<aaed-sn>}ErrorDomain () noexcept; | < |
| Return value: | const ara::core::ErrorDomain & | Reference to the aaed_ns::aaed_snErrorDomain object |
| Exception Safety: | exception safe | < |
| Thread Safety: | thread-safe | < |
| Description: | Returns a reference to the aaed_ns::aaed_snErrorDomain object | < |

⌋

 Definition of API function {<aaed-ns>}::MakeErrorCode
  Upstream requirements: , ,
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | namespace {<aaed-ns>} | < |
| Syntax: | constexpr ara::core::ErrorCode MakeErrorCode ({<aaed-ns>}::{<aaed-sn>}Errc code, ara::core::ErrorDomain::SupportDataType data) noexcept; | < |
| Parameters (in): | code | Error code number. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Class：{<aaed-sn>}ErrorDomain
*原文标题：Class: {<aaed-sn>}ErrorDomain*

Definition of API class {<aaed-ns>}::{<aaed-sn>}ErrorDomain
  Upstream requirements: , ,
⌈
| Kind: | class | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | namespace {<aaed-ns>} | < |
| Symbol: | {<aaed-sn>}ErrorDomain | < |
| Base class: | ara::core::ErrorDomain | < |
| Syntax: | class {<aaed-sn>}ErrorDomain final : public ara::core::ErrorDomain {...}; | < |
| Unique ID: | The domain identifier, given by ApApplicationErrorDomain.value | < |
| Description: | Class representing an ApApplicationErrorDomain | < |
| Descriptors: | {<aaed-sn>} | As per {<aaed-sn>} in |

⌋

### 37. Public Member 类型
*原文标题：Public Member Types*

Definition of API type {<aaed-ns>}::{<aaed-sn>}ErrorDomain::Errc
  Upstream requirements: ,
⌈
| Kind: | type alias | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | class {<aaed-ns>}::{<aaed-sn>}ErrorDomain | < |
| Symbol: | Errc | < |
| Syntax: | using Errc = {<aaed-sn>}Errc; | < |
| Description: | Alias for the error code value enumeration | < |
| Descriptors: | {<aaed-sn>} | As per {<aaed-sn>} in |

⌋

 Definition of API type {<aaed-ns>}::{<aaed-sn>}ErrorDomain::Exception
  Upstream requirements: ,
⌈
| Kind: | type alias | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | class {<aaed-ns>}::{<aaed-sn>}ErrorDomain | < |
| Symbol: | Exception | < |
| Syntax: | using Exception = {<aaed-sn>}Exception; | < |
| Description: | Alias for the exception base class | < |

⌋

### 38. Public Member Functions

### 39. Special Member Functions

Definition of API function {<aaed-ns>}::{<aaed-sn>}ErrorDomain::{<aaed-sn>}ErrorDomain
  Upstream requirements: ,
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | class {<aaed-ns>}::{<aaed-sn>}ErrorDomain | < |
| Syntax: | {<aaed-sn>}ErrorDomain ()=delete; | < |
| Description: | Constructs a new {<aaed-sn>}ErrorDomain object | < |

⌋

### 40. Member Functions

Definition of API function {<aaed-ns>}::{<aaed-sn>}ErrorDomain::Message
  Upstream requirements: , ,
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | class {<aaed-ns>}::{<aaed-sn>}ErrorDomain | < |
| Syntax: | const char * Message (CodeType errorCode) const noexcept override; | < |
| Parameters (in): | errorCode | The error code number. |
| Return value: | const char * | The message associated with the error code |
| Exception Safety: | exception safe | < |
| Thread Safety: | thread-safe | < |
| Description: | Returns the message associated with the error code | < |
| See also: |  | < |

⌋

 Definition of API function {<aaed-ns>}::{<aaed-sn>}ErrorDomain::Name
  Upstream requirements: ,
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | class {<aaed-ns>}::{<aaed-sn>}ErrorDomain | < |
| Syntax: | const char * Name () const noexcept override; | < |
| Return value: | const char * | {<aaed-sn>} as a string constant |
| Exception Safety: | exception safe | < |
| Thread Safety: | thread-safe | < |
| Description: | Retrieve the name of the error domain | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Class：{<aaed-sn>}Exception
*原文标题：Class: {<aaed-sn>}Exception*

Definition of API class {<aaed-ns>}::{<aaed-sn>}Exception
  Upstream requirements: , ,
⌈
| Kind: | class | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | namespace {<aaed-ns>} | < |
| Symbol: | {<aaed-sn>}Exception | < |
| Base class: | ara::core::Exception | < |
| Syntax: | class {<aaed-sn>}Exception : public ara::core::Exception {...}; | < |
| Description: | Defines a class for exceptions to be thrown by the API | < |
| Descriptors: | {<aaed-sn>} | As per {<aaed-sn>} in |

⌋

### 42. Public Member Functions

### 43. Constructors

Definition of API function {<aaed-ns>}::{<aaed-sn>}Exception::{<aaed-sn>}Exception
  Upstream requirements: , ,
⌈
| Kind: | function | < |
|---|---|---|
| Header file: | #include "{<aaed-dir>}/{<aaed-file-prefix>}_error_domain.h" | < |
| Scope: | class {<aaed-ns>}::{<aaed-sn>}Exception | < |
| Syntax: | explicit {<aaed-sn>}Exception (ara::core::ErrorCode errorCode) noexcept; | < |
| Parameters (in): | errorCode | The error code |
| Exception Safety: | exception safe | < |
| Thread Safety: | thread-safe | < |
| Description: | Constructs a new {<aaed-sn>}Exception containing an ara::core::ErrorCode | < |
| Descriptors: | {<aaed-sn>} | As per {<aaed-sn>} in |

⌋

### 44. Header：{<ns-derived-dir-path>}/impl_type_{<shortname-lower>}.h
*原文标题：Header: {<ns-derived-dir-path>}/impl_type_{<shortname-lower>}.h*

CppImplementationDataTypes Header Files: file name and multiple inclusion guard
  Upstream requirements:
⌈
| Kind: | Header File | < |
|---|---|---|
| Syntax: | {<ns-derived-dir-path>}/impl_type_{<shortname-lower>}.h | < |
| Description: | The generator shall construct: |  |

* The path/file name of each CppImplementationTypes Header File accordingly.
| * A multiple inclusion guard around the whole header file in each CppImplementationTypes Header File. | < |  |
|---|---|---|
| Descriptors: | {<ns-derived-dir-path>} | as per  whereby: for each inner namespace in the hierarchy, an inner directory shall be created to contain the header file |
| ^ | {<shortname-lower>} | CppImplementationDataType. shortName converted to lower-case. |
| ^ | {<ns-derived-include>} | relative path of the CppImplementationTypes Header File according to {<ns-derived-dir-path>} up to but omitting the file extension, with all path components separated by an underscore, converted to upper-case. |
| Example: | // Example where: {<shortname-lower>} = example |  |

//         where: {<ns-derived-dir-path>} = n/n_plus_1/n_plus_2
//
// Filename: .../n/n_plus_1/n_plus_2/impl_type_example.h

#ifndef N_NPLUS1_NPLUS2_IMPL_TYPE_EXAMPLE_H_
#define N_NPLUS1_NPLUS2_IMPL_TYPE_EXAMPLE_H_
...

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Namespaces

### 46. {<cppidt-ns-list-lc>}

CppImplementationDataTypes Header Files namespace hierarchy
  Upstream requirements:
⌈
| Kind: | namespace | < |
|---|---|---|
| Header file: | #include "{<ns-derived-dir-path>}/impl_type_{<shortname-lower>}.h" | < |
| Scope: | -- | < |
| Syntax: | namespace {<cppidt-ns-list-lc>} | < |
| Description: | The generator shall use the SymbolProps aggregated in the role CppImplementationDataType. namespace to construct the encapsulating C++ namespace hierarchy for the C++ data type inside the CppImplementationTypes Header File. | < |
| Descriptors: | {<cppidt-ns-list-lc>} | For each namespace in the ordered list: namespace shall be an inner namespace of namespace converted to lower-case. |
| Example: | ... |  |

  namespace n {
    namespace n_plus_1 {
      namespace n_plus_2 { ... }
    }
  }
| ... | < |  |
|---|---|---|
| See also: |  | < |

⌋

### 47. String 数据类型
*原文标题：String Data Type*

### 48. 类型 Alias：{<symbol-string>}
*原文标题：Type Alias: {<symbol-string>}*

StdCppImplementationDataType. category ==STRING without an Allocator
  Upstream requirements: ,
⌈
| Kind: | type alias | < |
|---|---|---|
| Header file: | #include "{<ns-derived-dir-path>}/impl_type_{<shortname-lower>}.h" | < |
| Scope: | namespace {<cppidt-ns-list-lc>} | < |
| Symbol: | {<symbol-string>} | < |
| Syntax: | using {<symbol-string>} = ara::core::String; | < |
| Description: | For each StdCppImplementationDataType. category ==STRING without an Allocator, there shall exist a C++ type alias. The storage is managed by the default allocator std::allocator . | < |
| Descriptors: | {<symbol-string>} | The symbol name of the type alias as given by CppImplementationDataType. shortName |
| Example: | // Example: string allocator=FALSE |  |
| using T_S = ara::core::String; | < |  |
| See also: | , | < |

⌋

### 49. 类型 Alias：{<symbol-string-alloc>}
*原文标题：Type Alias: {<symbol-string-alloc>}*

StdCppImplementationDataType. category ==STRING with an Allocator
  Upstream requirements:
⌈
| Kind: | type alias | < |
|---|---|---|
| Header file: | #include "{<ns-derived-dir-path>}/impl_type_{<shortname-lower>}.h" | < |
| Scope: | namespace {<cppidt-ns-list-lc>} | < |
| Symbol: | {<symbol-string-alloc>} | < |
| Syntax: | using {<symbol-string-alloc>} = ara::core::BasicString<{<fq-allocator>}<char>>; | < |
| Description: | For each StdCppImplementationDataType. category ==STRING with an Allocator, there shall exist a C++ type alias. | < |
| Descriptors: | {<symbol-string-alloc>} | as per {<symbol-string>} in |
| ^ | {<fq-allocator>} | Fully namespace-qualified signature of the Allocator where: |

* the C++ header file containing the allocator is given by Allocator. headerFile
* the C++ namespace containng the allocator is given by Allocator. namespace
* the symbol name of the struct/class which provides the allocator implementation is given by Allocator. shortName

A type alias shall be generated for the allocator as per . If the headerFile is not specified or does not exist, the generator shall terminate with an error. If the namespace is not specified, the generator shall terminate with an error.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 72 章（内容从略，见纯文本全文）

50. Array 数据类型
51. 类型 Alias：{<symbol-array>}
52. Vector 数据类型
53. 类型 Alias：{<symbol-vector>}
54. 类型 Alias：{<symbol-vector-alloc>}
55. 类型 Alias：{<symbol-vector-alloc-maxsize>}
56. 结构数据类型
57. Struct：{<symbol-struct>}
58. {<symbol-struct-element>}
59. {<symbol-struct-opt-element>}
60. Enumeration (CompuMethod.category=TEXTTABLE) 数据类型
61. Enumeration class：{<symbol-enum>}
62. Enumeration literal：{<symbol-enum-literal>}
63. Bitfield (CompuMethod.category=BITFIELD_TEXTTABLE) 数据类型
64. Class：{<symbol-bitfield>}
65. 类型 Alias：{<symbol-compuscale>}
66. Size
67. Get{<symbol-compuscale>}
68. Set{<symbol-compuscale>}
69. ToString
70. Associative 映射数据类型
71. 类型 Alias：{<symbol-assocmap>}
72. 类型 Alias：{<symbol-assocmap-alloc>}
73. Variant 数据类型
74. 类型 Alias：{<symbol-variant>}
75. 类型 Reference
76. 类型 Alias：{<symbol-typeref>}
77. CustomCppImplementationDataType
78. 类型 Alias：{<symbol-custom>}
79. Custom Allocator
80. 类型 Alias：{<symbol-alloc>}
81. 服务接口
82. 配置
83. 附录
84. Mentioned 清单 Elements
85. Change History
86. Change History of this document according to AUTOSAR Release R21-11
87. Added 规范 Items in R21-11
88. Changed 规范 Items in R21-11
89. Deleted 规范 Items in R21-11
90. Change History of this document according to AUTOSAR Release R22-11
91. Added 规范 Items in R22-11
92. Changed 规范 Items in R22-11
93. Deleted 规范 Items in R22-11
94. Change History of this document according to AUTOSAR Release R23-11
95. Added 规范 Items in R23-11
96. Changed 规范 Items in R23-11
97. Deleted 规范 Items in R23-11
98. Added Constraints in R23-11
99. Changed Constraints in R23-11
100. Deleted Constraints in R23-11
101. Change History of this document according to AUTOSAR Release R24-11
102. Added 规范 Items in R24-11
103. Changed 规范 Items in R24-11
104. Deleted 规范 Items in R24-11
105. Added Constraints in R24-11
106. Changed Constraints in R24-11
107. Deleted Constraints in R24-11
108. Change History of this document according to AUTOSAR Release R25-11
109. Added 规范 Items in R25-11
110. Changed 规范 Items in R25-11
111. Deleted 规范 Items in R25-11
112. Added Constraints in R25-11
113. Changed Constraints in R25-11
114. Deleted Constraints in R25-11
115. Change History of this document according to AUTOSAR Release R26-11
116. Added 规范 Items in R26-11
117. Changed 规范 Items in R26-11
118. Deleted 规范 Items in R26-11
119. Added Constraints in R26-11
120. Changed Constraints in R26-11
121. Deleted Constraints in R26-11
