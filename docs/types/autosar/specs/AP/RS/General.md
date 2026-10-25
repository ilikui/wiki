# General Requirements specific to Adaptive Platform (`General`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 714 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_RS_General_714\AUTOSAR_AP_RS_General.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_RS_General_714\AUTOSAR_AP_RS_General.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_RS_General_714\zzgen\AP_RS_General.complete.txt`

## 文档简介

The goal of this document is to define a common set of basic requirements that apply to all SWS documents of the Adaptive Platform. Adaptive applications and functional cluster internals do not need to comply to these requirements.

## 章节详细内容

### 1. 范围 of this document
*原文标题：Scope of this document*

The goal of this document is to define a common set of basic requirements that apply to all SWS documents of the Adaptive Platform. Adaptive applications and functional cluster internals do not need to comply to these requirements.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to `AP_RS_General` that are not included in the AUTOSAR Glossary ().

| Abbreviation / Acronym: | Description: |
|---|---|
| failure transparent | * operations are guaranteed to succeed. If an error occurs, it will be handled internally and not observed by the caller of the operation |

* it has no defined errors nor exceptions
* it is noexcept and does not have a Result nor Future return type
| conditionally noexcept | A noexcept specifier with an argument that conditionally evaluates to either true or false. E.g., noexcept(std::is_nothrow_move_constructible<T>) or noexcept(noexcept(T(std::forward<Args>(args)...))) |
|---|---|
| standard Violation | AUTOSAR defines standardized Violations applicable for multiple FunctionalClusters in . |

### 4. 需求规范
*原文标题：Requirements Specification*

### 5. Non-functional 需求
*原文标题：Non-functional Requirements*

Source Code Portability Support
⌈
| Description: | The AUTOSAR Adaptive platform shall support source code portability for AUTOSAR Adaptive applications. |
|---|---|
| Rationale: | Allow reuse of existing Adaptive Applications in another project. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Integration of Adaptive Applications developed on different implementations of Adaptive Platform. |
| Supporting Material: | Adaptive Platform allows successful compilation and linking of an Adaptive Application that uses ARA only as specified in the standard. No changes to the source code, and no conditional compilation constructs are necessary for this if the application only uses constructs from the designated minimum C++ language version. The implementation may provide proprietary, non-ARA interfaces, as long as they do not contradict the AP standard. |

⌋

 AUTOSAR Adaptive Platform shall represent a rich and modern programming environment
⌈
| Description: | AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |
|---|---|
| Rationale: | Programmer productivity is an important aspect of any software framework. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 设计需求
*原文标题：Design Requirements*

Compatibility with the ISO 14882 C++ standard
⌈
| Description: | The C++ interfaces of AUTOSAR Adaptive Platform shall be compatible with the C++ standard ISO 14882:2017 . |
|---|---|
| Rationale: | The selected C++ version is selected to be a balance between: safety improved, modern versions of C++ vs. C++ versions supported by OS suppliers (which typically lag years behind the latest standard version). Given the solid backward compatibility of C++, compatibility with an older version usually means that this requirement does not prevent the use of newer C++ versions for compilation. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | To manage the complexity of the application development, the Adaptive platform shall support object-oriented programming. C++ is the programming language which supports object-oriented programming and is best suited for performance-critical and real-time applications. |
| Supporting Material: |  |

⌋

 Compatibility with newer ISO 14882 C++ standards
⌈
| Description: | The C++ interfaces should only use features that are neither deprecated nor removed in future versions of the standard. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 错误处理
*原文标题：Error handling*

Error reporting
⌈
| Description: | Interfaces shall be designed to report recoverable errors via a suitable return type, such as ara::core::Result or ara::core::Future. |
|---|---|
| Rationale: | Few compilers in the market allows to use exceptions in safety related projects. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Safety-related projects |
| Supporting Material: | - |

⌋

Guidelines on recoverable errors:

* Avoid "general error"-kinds of errors, e.g. kGeneralError, kGenericError, kInternalError - always strive to describe concrete error conditions.

  Note: It is recommended that error codes are recoverable and not too generic, but also not too specific. It is recommended to use the same error code for the same error reaction. e.g. lost daemon connection, link down, IPC corrupt, TCP/IP driver error, buffer overflow should be merged to the general communication error in ara::com.
* For error codes originating from a 3rd-party standard (e.g. ISO), prefer to take over those error code names as close to the original definitions as possible, even if that violates other of these guidelines (prefer to follow AR formatting, though, e.g. follow the kCamelCase formatting).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. The use of noexcept

Since the error handling strategy in the AP is intended to be used in an exception-less context many considerations that apply to "normal" C++ code and libraries do not apply to the AP. Therefore the guidance on the use of noexcept contradicts the strategy taken e.g., in the C++ STL.

Since errors are communicated through the ara::core::Result and ara::core::Future types as well as Violations instead of Exceptions, it is possible (even the default) to have functions with defined error conditions that still can not throw exceptions. This is the biggest difference in how the noexcept specifer needs to be interpreted depending on the context: In the context of AP noexcept does not mean that the function can not fail! Since there is the ara::core::Result and ara::core::Future error mechanism it is usually harmful to also allow exceptions. This is because it introduces inefficiencies. Also, users of the API might have to also consider Exceptions which would make the API hard to use.

In contrast to the C++ standard, the AP specification tries to avoid undefined behavior wherever possible. One key mechanism for that are Violations (  ) that indicate non-recoverable errors.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Thread Safety

Reentrancy of Functions
⌈
| Description: | AUTOSAR API functions specified by Functional Clusters in Adaptive Platform shall be considered not reentrant unless stated otherwise. |
|---|---|
| Rationale: | In almost all cases where reentrancy is specified, a specification of thread-safety is sufficient, more appropriate, and easier to understand. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Thread-safety of Functions
⌈
| Description: | AUTOSAR API functions shall specify their thread safety level in the API table using one of the following values: |
|---|---|

* "thread-safe",
* "not thread-safe", or
* "conditional" with specified conditions.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Concurrent Use of Different Objects
⌈
| Description: | AUTOSAR APIs shall be designed such that different instances of AUTOSAR API classes can be used concurrently from different threads. |
|---|---|
| Rationale: | Usability, concurrency. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Versioning of 服务接口 API
*原文标题：Versioning of Service Interface API*

On the Adaptive Platform the client and the provider of a service rely on a contract which covers the service interface and behavior. The interface and the behavior of a service may change over time. Therefore, service contract versioning shall be used to distinguish between the different versions of a service.

 Versioning of ServiceInterfaces
⌈
| Description: | Every Functional Cluster of the Adaptive Platform that provides a Service Interface shall also provide its version which consists of a majorVersion and a minorVersion numbers. The majorVersion number shall be increased when backwards-incompatible changes are introduced. The minorVersion number shall be increased when backwards-compatible changes are introduced. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 11. 日志与追踪
*原文标题：Log and Trace*

Logging and tracing capabilities are essential for diagnostics, debugging, and runtime monitoring of AUTOSAR Adaptive Platform. This chapter specifies requirements for the standardized naming conventions, message formats, and identification schemes used in AUTOSAR-defined Functional Clusters to ensure consistency and interoperability of log and trace data. These requirements establish guidelines for context identifiers, log message names, and parameter naming to facilitate integration with log analysis tools and maintain compatibility with the DLT (Diagnostic Log and Trace) protocol. Application-specific logging is not subject to these standardization requirements.

 Naming conventions for L&T Context ID
⌈
| Description: | Context IDs short names shall be 4 characters long with a prefix "#" (U+0023) and predefined for each Functional Cluster. |
|---|---|
| Rationale: | All AUTOSAR-defined context IDs are restricted to 4 ASCII characters in order to remain compatible with v1 of the DLT protocol, which only supports context IDs of 4 chars length. |

Applies To:
| Dependencies: | See  for the resulting names. |
|---|---|
| Use Case: | Avoid naming clashes. |
| Supporting Material: | See  for the reserved Prefix in |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 功能性需求
*原文标题：Functional Requirements*

UnresolvableInstanceSpecifierViolation
⌈
| Description: | Constructors or named constructors that have an InstanceSpecifier as an argument shall define the standard Violation UnresolvableInstanceSpecifierViolation  defined in . |
|---|---|

Additional information: The standard Violation text shall be taken from the Violation message itself (i.e. the Doxygen Tag has no message text)
| Rationale: | The rationale to treat this as a Violation is that this is seen as an integration error which anyway cannot be handled by the caller of the API. Aborting execution is in line with the strategy to fail early. |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Support application developers and integrators to identify inconsistencies between model and code. |
| Supporting Material: | - |

⌋

 InstanceSpecifierAlreadyInUseViolation
⌈
| Description: | Constructors or named constructors that have an InstanceSpecifier as an argument shall define the standard Violation InstanceSpecifierAlreadyInUseViolation  defined in . |
|---|---|

Additional information: The standard Violation text shall be taken from the Violation message itself (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 需求追踪
*原文标题：Requirements Tracing*

### 14. Trace Groups

| Defined Trace Groups | < |
|---|---|
| Identifier | Included Requirements |
| TG_AP_GeneralFunctional_WithInstanceSpecifier |  |
| TG_AP_GeneralNonFunctional |  |

### 15. References

### 16. 附录
*原文标题：Appendix*

### 17. Change History of this Document

### 18. Change History of this document according to AUTOSAR Release 26-11

### 19. Added 需求 in R26-11
*原文标题：Added Requirements in R26-11*

| Number | Heading |
|---|---|
| Compatibility with newer ISO 14882 C++ standards |  |
| UnresolvableInstanceSpecifierViolation |  |
| Guideline for the use of [] |  |
| Log Message parameter types with units |  |
| Log level usage guidance |  |

### 20. Changed 需求 in R26-11
*原文标题：Changed Requirements in R26-11*

| Number | Heading |
|---|---|
| Variable names |  |

### 21. Deleted 需求 in R26-11
*原文标题：Deleted Requirements in R26-11*

| Number | Heading |
|---|---|
| Arguments with an extended lifetime |  |
| InstanceSpecifierMappingIntegrityViolation |  |
| PortInterfaceMappingViolation |  |
| ProcessMappingViolation |  |

### 22. Change History of this document according to AUTOSAR Release 25-11

### 23. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

| Number | Heading |
|---|---|
| Log Message names |  |
| Log Message parameter names |  |
| AraNotInitializedViolation |  |
| Messages for Violations |  |

### 24. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

| Number | Heading |
|---|---|
| Compatibility with the ISO 14882 C++ standard |  |
| Usage of "final specifier" |  |
| Error handling for non-initialized Functional Cluster |  |
| Thread-safety of Functions |  |

### 25. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

| Number | Heading |
|---|---|
| noexcept behavior of API functions |  |
| noexcept behavior of move and swap operations |  |

### 26. Change History of this document according to AUTOSAR Release 24-11

### 27. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

| Number | Heading |
|---|---|
| Existence of a copy constructor and a copy assignment |  |
| IAM access violations |  |
| usage of "noexcept" specifier |  |
| Classification of Behavior for Recoverable Error |  |
| Arguments with an extended lifetime |  |
| Thread-safety of the Callback Function |  |
| Reentrancy of Functions |  |
| Thread-safety of Functions |  |
| Concurrent Use of Different Objects |  |
| Versioning of ServiceInterfaces |  |
| MISRA C++:2023 |  |
| Thread-safety of Overriding Functions |  |
| InstanceSpecifierMappingIntegrityViolation |  |
| PortInterfaceMappingViolation |  |
| ProcessMappingViolation |  |
| InstanceSpecifierAlreadyInUseViolation |  |
| PlatformExtension namespaces |  |

### 28. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

| Number | Heading |
|---|---|
| Source Code Portability Support |  |
| Public namespaces |  |
| Header file name |  |
| Return values / application errors |  |
| Method and Function names |  |
| Parameter names |  |
| Type names |  |
| Variable names |  |
| Enumerator and constant names |  |
| Public types defined by functional clusters shall be designed to allow implementation without dynamic memory allocation |  |
| noexcept behavior of API functions |  |
| noexcept behavior of move and swap operations |  |
| noexcept behavior of class destructors |  |
| Avoidance of shared ownership |  |
| Usage of "final specifier" |  |
| Usage of out parameters |  |
| Availability of a named constructor |  |
| Availability of special member functions |  |
| Classes whose construction requires interaction by the ARA framework |  |
| Classes that are created with an InstanceSpecifier as an argument are not copyable, but at most movable. |  |
| Error handling for non-initialized Functional Cluster |  |
| Provide only interfaces that are intended to be used by AUTOSAR Applications and Functional Clusters |  |
| C++ Core Guidelines |  |
| Avoidance of cluster-specific initialization functions |  |
| Naming conventions for L&T Context ID |  |

### 29. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

| Number | Heading |
|---|---|
| Faults inside constructor. |  |

### 30. Change History of this document according to AUTOSAR Release 23-11

### 31. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 32. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

| Number | Heading |
|---|---|
| Public namespaces. |  |
| noexcept behavior of API functions |  |
| Availability of a named constructor. |  |
| Classes that are created with an InstanceSpecifier as an argument are not copyable, but at most movable. |  |
| Naming conventions for L&T Context ID. |  |

### 33. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none

### 34. Change History of this document according to AUTOSAR Release 22-11

### 35. Added 需求 in R22-11
*原文标题：Added Requirements in R22-11*

| Number | Heading |
|---|---|
| Naming conventions for L&T Context ID. |  |

### 36. Changed 需求 in R22-11
*原文标题：Changed Requirements in R22-11*

| Number | Heading |
|---|---|
| C++ interface shall be compatible with C++14. |  |
| Connecting run-time interface with model. |  |
| Usage of out parameters. |  |
| Use 32-bit integral types by default. |  |
| Availability of special member functions. |  |
| Classes whose construction requires interaction by the ARA framework. |  |
| Classes which are created by an InstanceSpecifer shall not be copyable, but at most movable. |  |

### 37. Deleted 需求 in R22-11
*原文标题：Deleted Requirements in R22-11*

none

### 38. Change History of this document according to AUTOSAR Release 21-11

### 39. Added 需求 in R21-11
*原文标题：Added Requirements in R21-11*

| Number | Heading |
|---|---|
| Default arguments are not allowed in virtual functions. |  |
| Guidance on error handling. |  |
| Provide only interfaces that are intended to be used by AUTOSAR applications and other Functional Clusters. |  |
| C++ Core Guidelines. |  |
| Faults inside constructor. |  |
| Assignment operators should restrict "this" to lvalues |  |
| Internal namespaces. |  |
| Avoidance of cluster-specific initialization functions. |  |

### 40. Changed 需求 in R21-11
*原文标题：Changed Requirements in R21-11*

| Number | Heading |
|---|---|
| The AUTOSAR Adaptive Platform shall support source code portability for AUTOSAR Adaptive applications. |  |
| Public namespaces. |  |
| Public types defined by functional clusters shall be designed to allow implementation without dynamic memory allocation. |  |
| noexcept behavior of move and swap operations |  |
| Avoidance of shared ownership. |  |
| Usage of "final specifier" in ara types. |  |
| Usage of out parameters. |  |
| Availability of a named constructor. |  |
| Availability of special member functions. |  |
| Classes whose construction requires interaction by the ARA framework. |  |
| Classes which are created by an InstanceSpecifer shall not be copyable, but at most movable. |  |

### 41. Deleted 需求 in R21-11
*原文标题：Deleted Requirements in R21-11*

none

### 42. Change History of this document according to AUTOSAR Release 20-11

### 43. Added 需求 in R20-11
*原文标题：Added Requirements in R20-11*

| Number | Heading |
|---|---|
| Use 32-bit integral types by default. |  |
| Availability of a named constructor. |  |
| Availability of special member functions. |  |
| Classes whose construction requires interaction by the ARA framework. |  |
| Classes which are created by an InstanceSpecifer shall not be copyable, but at most movable. |  |

### 44. Changed 需求 in R20-11
*原文标题：Changed Requirements in R20-11*

| Number | Heading |
|---|---|
| C++ interface shall be compatible with C++14. |  |
| Public types defined by functional clusters shall be designed to allow implementation without dynamic memory allocation. |  |

### 45. Deleted 需求 in R20-11
*原文标题：Deleted Requirements in R20-11*

none

### 46. Change History of this document according to AUTOSAR Release 19-11

### 47. Added 需求 in 19-11
*原文标题：Added Requirements in 19-11*

| Number | Heading |
|---|---|
| noexcept behavior of move and swap operations |  |
| Avoidance of shared ownership. |  |
| Usage of string types. |  |
| Connecting run-time interface with model. |  |
| Return type of asynchronous function calls. |  |
| Return type of synchronous function calls. |  |
| Usage of "final specifier" in ara types. |  |
| Usage of out parameters. |  |
| Handling of unsuccessful operations. |  |

### 48. Changed 需求 in 19-11
*原文标题：Changed Requirements in 19-11*

| Number | Heading |
|---|---|
| Namespaces. |  |
| Header file name. |  |
| Return values / application errors. |  |
| Type names. |  |
| Usage of ara::core types. |  |
| Error reporting. |  |
| Public types defined by functional clusters shall be designed to allow implementation without dynamic memory allocation. |  |
| noexcept behavior of API functions |  |
| noexcept behavior of class destructors |  |

### 49. Deleted 需求 in 19-11
*原文标题：Deleted Requirements in 19-11*

| Number | Heading |
|---|---|
| API specification shall comply with selected coding guidelines. |  |
| Use of verbal forms to express requirement levels. |  |
