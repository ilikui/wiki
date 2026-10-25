# Explanation of Adaptive and Classic Platform Software Architectural Decisions (`SWArchitecturalDecisions`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 1078 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_EXP_SWArchitecturalDecisions_1078\AUTOSAR_FO_EXP_SWArchitecturalDecisions.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_EXP_SWArchitecturalDecisions_1078\AUTOSAR_FO_EXP_SWArchitecturalDecisions.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_EXP_SWArchitecturalDecisions_1078\zzgen\FO_EXP_SWArchitecturalDecisions.complete.txt`

## 文档简介

This explanatory document provides additional information on architectural decisions made for the AUTOSAR standards.

## 模块依赖

| Applies to | AP |
|---|---|
| Decision | Only functional dependencies between Software Clusters shall be supported. |
| Rationale | A Software Cluster is already a structural deployment entity and is technically the smallest unit that can be individually installed and updated on a Machine (by means of a Software Package). This means that also a delta-update (like updating only a single process within this Software Cluster) requires a new version of the Software Cluster. |
| Category | None |
| Application affected | No |
| Assumptions | No assumptions were made. |
| Constraints | No constraints were identified. |
| Alternatives | Support nested Software Clusters |

The alternative of structurally nested Software Cluster was realized in AUTOSAR, but the market use-cases could also be realized via Software Cluster with their functional dependencies.
| Remarks | Discontinue structurally nested Software Clusters (aka Sub-SWCL). |
|---|---|
| Related requirements | None |
| Release | R22-11 |

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This explanatory document provides additional information on architectural decisions made for the AUTOSAR standards.

### 2. 目标
*原文标题：Objectives*

The main objective of this document is to provide a documentation of architectural decisions made for the AUTOSAR standards that makes such decisions comprehensible and reviewable in the future and ultimately get more maintainable standards.

### 3. 范围
*原文标题：Scope*

This document covers decisions made for the software architecture of AUTOSAR standards. The main audience of this document are architects of the AUTOSAR standards as well as members of other working groups.

### 4. 术语与缩略语定义
*原文标题：Definition of Terms and Acronyms*

### 5. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation / Acronym | Description |
|---|---|
| API | Application Programming Interface |
| STL | Standard Template Library |

### 6. 定义 of Terms
*原文标题：Definition of Terms*

| Term | Description |
|---|---|
| Adaptive Application | See . |
| Execution Management | A Functional Cluster in the AUTOSAR Adaptive Platform. See  for an overview. |
| Functional Cluster | See .  provides an overview of all Functional Clusters in the AUTOSAR Adaptive Platform. |
| Platform Health Management | A Functional Cluster in the AUTOSAR Adaptive Platform. See  for an overview. |
| Process | See . |
| State Management | A Functional Cluster in the AUTOSAR Adaptive Platform. See  for an overview. |
| Software Cluster | See  and . |
| Thread | See . |
| Watchdog | An external component that supervises execution of the AUTOSAR Adaptive Platform. See  for an overview. |

### 7. 相关文档
*原文标题：Related Documentation*

This document provides an overview of the architectural decisions that have been made for the AUTOSAR standards and their rationale. A high-level overview of the architecture of the AUTOSAR standards is provided in  (AUTOSAR Classic Platform) as well as  and  (AUTOSAR Adaptive Platform).

### 8. References

### 9. 概述
*原文标题：Overview*

Architectural decisions refer to design choices that address architecturally significant requirements, particularly those related to non-functional or quality attributes. These decisions are typically regarded as challenging to make and costly to alter and therefore also alternative possibilities are considered / presented. Specifically, they impact multiple modules or functional clusters within the AUTOSAR standards.

Architectural decisions may also provide general guidelines how to design modules / functional clusters. In such cases the architectural decision provides a rational and the guideline will be added to the respective RS document.

This chapter provides an overview of the organization and structure of architectural decisions listed in this document. All architectural decisions are structured as a table (see table  for a template). The architectural decisions are organized into sections according to the platform they apply to.

| Applies to | A list of AUTOSAR platforms to which this architectural decision applies to. |
|---|---|
| Decision | The decision itself. The impact or direct consequences (for example, changes to interfaces) of the decision are not documented. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 架构决策
*原文标题：Architectural Decisions*

### 11. Common Decisions

This chapter lists architectural decisions that have been made for the AUTOSAR Adaptive Platform and Classic Platform.

### 12. Influence of PRS document changes on AP and CP

| Applies to | AP, CP |
|---|---|
| Decision | If multiple protocol versions shall be supported by AUTOSAR, they shall be standardized in one PRS document in the same release. Each platform can define the level of support by itself. One approach to document the different levels of support can be the use of chapter 4 of the SWS to describe the limitations. (Alternative 3) |
| Rationale | We see use cases where different versions of a protocol are used on the different platforms, e.g. AP might support the "old" and the "new" version whereas CP only supports the "old" version. The same applies to "features" of protocols of the same protocol version. |
| Category | None |
| Application affected | None |
| Assumptions | No assumptions were made. |
| Constraints | AUTOSAR follows a trunk-based development approach without any bugfix branches. This means current PRS document versions simply replace older ones. There is no maintenance of older PRS document versions. |
| Alternatives | Allow reference to an older AUTOSAR release |

Allow reference to an older AUTOSAR release like in the DLT v2 example.
| ^ | Support several versions in the same AUTOSAR release |
|---|---|

Support several versions of a PRS document in the same AUTOSAR release.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 指南 on standardizing SW functionalities
*原文标题：Guidelines on standardizing SW functionalities*

| Applies to | AP, CP |
|---|---|
| Decision | Criteria which favor a standardization: |

* Function is reusable by multiple OEMs and multiple projects
* Function abstracts standardized communication protocol(s)
* Function provides a functionality defined by other standards towards application(s)
* Function abstracts direct access to commonly used hardware
* Function is required by multiple ECUs/Machines within a car

Criteria which discourage standardization:

* Function has potential for competitive advantage of OEM/T1 business
* Function implements mainly OEM-specific requirement(s)
* Function is already established in the market -implementations are available.

A potential standardization should also consider the Layered Software Architecture  (CP) / Platform Design  (AP).
| Rationale | No rationale provided. |
|---|---|
| Category | None |
| Application affected | Yes |
| Assumptions | No assumptions were made. |
| Constraints | No constraints were identified. |
| Alternatives | No alternatives were considered. |
| Remarks | There are no generally applicable rules for assigning a SW function into the architecture. Therefore, this architectural decision should be understood as a guide to support such assignment decisions. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Adaptive Platform

This section lists architectural decisions that have been made for the AUTOSAR Adaptive Platform only.

### 15. Dynamic 存储 allocation
*原文标题：Dynamic memory allocation*

| Applies to | AP |
|---|---|
| Decision | The use of dynamic memory allocation by Adaptive Applications and Functional Clusters is allowed and assumed upon designing the AUTOSAR Adaptive Platform standard. |
| Rationale | The use of dynamic memory allocation is essentially indispensable as the AUTOSAR Adaptive Platform standard employs C++ as the language for its API. |

As the AUTOSAR Adaptive Platform standard will be used in safety-related systems, dynamic memory allocation can cause non-deterministic behavior. Two typical issues are the fragmentation and non-deterministic allocation/de-allocation processing time. Memory allocators designed for non-safety-critical systems often exhibit such issues, as they are more or less designed for memory efficiency and/or average processing performance.

These issues can be controlled by using deterministic memory allocators. Memory allocation is a well-studied area and various techniques have been reported (Refer to references below for some examples). Multiple AUTOSAR partners within the architecture group reportedly have such deterministic memory allocators implemented and have been used in mass-production systems.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Final specifier for 类型 and virtual member functions
*原文标题：Final specifier for types and virtual member functions*

| Applies to | AP |
|---|---|
| Decision | Adaptive Runtime types shall use the final specifier unless they are meant to be used as a base class. All virtual functions of a non-final class that are not intended to be overwritten by a user of the API shall be final. |
| Rationale | Making classes and virtual functions final that are not intended to be used as base classes or to be overwritten expresses the design (in particular the class hierarchy) more explicitly. This will avoid problems such as |

* to derive from a class that is not prepared for sub-classing,
* to inadvertently create a new virtual function instead of overwriting a function from the base class due to a slightly different signature.
| Category | None |
|---|---|
| Application affected | No |
| Assumptions | A clear expression of the intended design of the public AUTOSAR Runtime for Adaptive Applications class hierarchy. |
| Constraints | No constraints were identified. |
| Alternatives | Ensure proper use of AUTOSAR types by code review |

The alternative is to have a code review of the application code using AUTOSAR types. This is far out-of-scope of AUTOSAR. Therefore, it is not a real alternative.
| Remarks | No remarks. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Usage of out parameters

| Applies to | AP |
|---|---|
| Decision | Out parameters can be used for in-place modifications but shall not be used for returning values. |
| Rationale | Harmonized look and feel. |

C++ Core Guidelines : "F.20: For "out" output values, prefer return values to output parameters. [...] A return value is self-documenting, whereas a & could be either in-out or out-only and is liable to be misused. This includes large objects like standard containers that use implicit move operations for performance and to avoid explicit memory management."
| Category | None |
|---|---|
| Application affected | No |
| Assumptions | Dynamic memory allocation is allowed for all cases in which the APIs are used, even when running time critical safety related code including ASIL D. |
| Constraints | In/out parameters, i.e. modifying an already existing parameter within a function is allowed. For example, a function that clears or writes to a buffer should receive that buffer as a non-const in/out parameter. |
| Alternatives | No alternatives were considered. |
| Remarks | No remarks. |
| Related requirements | *  Usage of out parameters |
| Release | R20-11 |

### 18. Usage of named constructors for exception-less object creation

| Applies to | AP |
|---|---|
| Decision | Exceptionless functions for creation of objects which returns an ara::core::Result should use the "named constructor idiom". |
| Rationale | Disadvantages of constructor token approach are avoided as follows: |

* The constructor token type is an implementation detail of a Class and should thus not be specified, or even accessible from outside. This makes the use of auto for obtaining a token mandatory because the token type cannot be referred to in any other way.
* Moving the token's content to the SomeClass instance has to be done very carefully to fulfill the always-successful guarantee, which can be tricky if multiple resources need to be acquired.
* The token object is "destroyed" by std::move-ing its value into the SomeClass constructor (actually, it is to be in a "valid" but unspecific state according to the C++ standard), but it is easily possible to mistakenly use it again for attempting to create another instance, with undefined results.
| Category | Safety |
|---|---|
| Application affected | Yes |
| Assumptions | No assumptions were made. |
| Constraints | No constraints were identified. |
| Alternatives | Constructor token approach |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 简介 of a monotonic clock API
*原文标题：Introduction of a monotonic clock API*

| Applies to | AP |
|---|---|
| Decision | The AUTOSAR Runtime for Adaptive Applications shall provide its own monotonic std::chrono::SteadyClock representing the power-up time of the machine. The accuracy of this clock is defined by the platform vendor. |

The accuracy of this clock could be used as a characteristic value of the platform so that the projects could check whether this clock meets the project-specific requirements (e.g. time synchronization requires typically a clock with higher accuracy).

The system start of the machine defines the epoch of the clock. So this clock represents the power-up time of the machine.

Functional Clusters dealing with timestamps or clocks should use this clock as a basis.
| Rationale | The timestamps used in the time synchronization cluster should be based on std::chrono. Time synchronization requires a monotonic clock with special accuracy. |
|---|---|
| Category | None |
| Application affected | Yes |
| Assumptions | The time synchronization cluster is typically a daemon-based architecture due to a single communication endpoint of the time sync messages. A standardized clock with a special accuracy as a common basis is required to synchronize the daemon with the library. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Responsibilities of 状态管理, Execution 管理, and Platform Health 管理
*原文标题：Responsibilities of State Management, Execution Management, and Platform Health Management*

| Applies to | AP |
|---|---|
| Decision | State Management, Execution Management, and Platform Health Management are the fundament/basis of the AUTOSAR Adaptive Platform. A failure in either State Management, Platform Health Management, or Execution Management process will typically lead to stop triggering the watchdog. Platform Health Management supervises State Management and Execution Management. Platform Health Management controls the watchdog and is thus in turn supervised by the hardware watchdog. |

Triggering of a Machine reset as a last resort should not be an option at all in case of a failing of an Adaptive Application supervision (i.e. apart from Operating System / Execution Management / State Management / Platform Health Management). A supervision failure in an Adaptive Application shall be reported to State Management. State Management may forward this failure based on the criticality to Platform Health Management to wrongly trigger or stop triggering the serviced watchdog.

Platform Health Management performs a logical supervision of checkpoints within a process or between processes within a Function Group.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Use of local proxy objects for shared access to objects

| Applies to | AP |
|---|---|
| Decision | Local proxy object(s) shall be used to provide shared access to object instance(s) via the AUTOSAR Runtime for Adaptive Applications interface. |
| Rationale | Local proxy objects hide the implementation details of the shared access. The AUTOSAR Runtime for Adaptive Applications interface shall return a proxy object by value. The caller shall use the object as a local proxy for subsequent communication. Return by value is the most straightforward way to return data. This decision enforces harmonization of the AUTOSAR Runtime for Adaptive Applications interface. Stack vendors may freely choose how to implement the shared access inside the proxy class. |

An example for the use of a local proxy object by the caller is the following:

Result<void> myFunc() {
Result<void> myFunc() {
    Result<KeyValueStorage> kvsRes
        = KeyValueStorage::Create(`KVS_ID`);
    if (kvsRes) {
        KeyValueStorage kvs = std::move(kvsRes).Value();
        auto keyRes = kvs.GetAllKeys(); // Value semantics
        // ...
    } else {
        return {std::move(kvsRes).Error()};
    }
}
| Category | None |
|---|---|
| Application affected | Yes |
| Assumptions | No assumptions were made. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 功能性 Clusters shall standardize their production 错误
*原文标题：Functional Clusters shall standardize their production errors*

| Applies to | AP |
|---|---|
| Decision | Functional clusters shall standardize production errors for common use-cases demanded by the market. The standardization shall summarize all production errors by a standardized table in all SWS documents specifying production errors. |
| Rationale | Production errors are a fact. In order to be able to (semi-)automatically analyze them and react to them, they and their documentation/persistence and their healing needs to be standardized. |
| Category | None |
| Application affected | Yes |
| Assumptions | Conceptually production errors are taken over from the AUTOSAR Classic Platform. A differentiation between production errors and extended production errors is not necessary. |
| Constraints | No constraints were identified. |
| Alternatives | Introduce interfaces for monitoring production errors |

Functional clusters provide interfaces to allow applications to monitor production errors.
| Remarks | None |
|---|---|
| Related requirements | None |
| Release | R21-11 |

### 23. Default arguments are not allowed in virtual functions

| Applies to | AP |
|---|---|
| Decision | Default arguments shall not be used at all in virtual functions. |
| Rationale | The according RQ of the "C++ core guidelines" are too weak .. (they state, that it needs be made sure that a default argument is always the same) ... this would lead to code duplication with dependencies and high risks of inconsistencies, which can easily lead to unexpected behavior. |
| Category | None |
| Application affected | Yes |
| Assumptions | No assumptions were made. |
| Constraints | No constraints were identified. |
| Alternatives | No alternatives were considered. |
| Remarks | No remarks. |
| Related requirements | *  Default arguments are not allowed in virtual functions |
| Release | R21-11 |

### 24. Assert that only APIs from properly initialized 功能性 clusters can be called
*原文标题：Assert that only APIs from properly initialized functional clusters can be called*

| Applies to | AP |
|---|---|
| Decision | If functionality is called that depends on prior initialization via ara::core::Initialize and ara::core::Initialize has not been called, the functional cluster implementation shall treat this as a violation and shall follow SWS_CORE_00003 from . |
| Rationale | Calling APIs from uninitialized functional clusters that depend on prior initialization cannot perform properly. This results in undefined behavior. The problem is typically caused by misconfiguration or incomplete initialization at an earlier stage of the system startup. This cannot be handled by the caller of the API at the point in time where the error is detected. Aborting execution is the only way to signal this kind of systematic error and prevent later failures. |
| Category | None |
| Application affected | Yes |
| Assumptions | Parts of the system need to be initialized statically. |
| Constraints | No constraints were identified. |
| Alternatives | Extend all APIs to report a specific error code |

Extend every API that depends on prior initialization with a specific error code (e.g. kNotInitialized ) and force callers to check this error code at every call (and let them abort themselves).
| Remarks | No remarks. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. The AUTOSAR Runtime for Adaptive Applications shall define only 接口 that are intended to be used by AUTOSAR applications and other 功能性 Clusters
*原文标题：The AUTOSAR Runtime for Adaptive Applications shall define only interfaces that are intended to be used by AUTOSAR applications and other Functional Clusters*

| Applies to | AP |
|---|---|
| Decision | It is explicitly prohibited to standardize implementation details, like: |

* Classes, base-classes, functions etc. that are not used on the application level or in platform extension APIs
* Implementation inheritance in the public APIs
* C++ SFINAE techniques of any kind
* Private members of classes
| Rationale | * Provide only narrow interfaces to avoid coupling to implementation details. |
|---|---|

* Hide implementation details because by AUTOSAR definition the implementation details are on the platform vendor.
| Category | None |
|---|---|
| Application affected | Yes |
| Assumptions | No assumptions were made. |
| Constraints | No constraints were identified. |
| Alternatives | No alternatives were considered. |
| Remarks | No remarks. |
| Related requirements | *  Provide only interfaces that are intended to be used by AUTOSAR applications and other Functional Clusters |
| Release | R21-11 |

### 26. AUTOSAR Runtime for Adaptive Applications APIs should follow the C++ 核指南
*原文标题：AUTOSAR Runtime for Adaptive Applications APIs should follow the C++ Core Guidelines*

| Applies to | AP |
|---|---|
| Decision | AUTOSAR C++ APIs should follow the . The exceptions for hard-real-time systems shall apply. The AUTOSAR guidelines defined in RS-General shall overrule the "C++ Core Guidelines" in case of conflict. If a part of the AUTOSAR C++ API cannot follow the "C++ Core Guidelines" for some other reason, its specification shall state the rationale (how this is done in detail, shall be aligned with the architecture group). |
| Rationale | These guidelines are well accepted in the market. Their aim is to help C++ programmers writing simpler, more efficient, and more maintainable code. Specific guidelines for the automotive domain for C++ 14 are not available. When the upcoming version of the MISRA C++ standard is published, this decision/requirement may be replaced by a decision/requirement to follow MISRA C++. |
| Category | None |
| Application affected | Yes |
| Assumptions | No assumptions were made. |
| Constraints | Some exceptions apply like the exception-less handling of the ARA APIs. |
| Alternatives | No alternatives were considered. |
| Remarks | No remarks. |
| Related requirements | *  C++ Core Guidelines |
| Release | R21-11 |

### 27. Harmonized 错误处理 for lost daemon connection
*原文标题：Harmonized error handling for lost daemon connection*

| Applies to | AP |
|---|---|
| Decision | If a functional cluster communicates with a remote peer (e.g. IPC communication to a daemon) adequate error cases for communication failures shall be identified (e.g. lost communication). These error cases shall be grouped (according to the same error recovery mechanism) and if the user of the API shall receive notification (e.g. by callbacks or returning error codes) for a particular group, a suitable notification mechanism shall be selected. Please note that there might be scenarios where the user of an API will not receive any notification by design (e.g. fire-and-forget methods). |

If an immediate action is required on error occurrence the type of action should be determined in the following way:

* Functions that are currently defined with return type void (fire-and-forget methods) require no immediate action. Therefore, no return type and error code needs to be provisioned for such functions. The Adaptive Platform should defer the effects of such functions until the connection to the daemon has been (re-)established.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Granularity of 诊断
*原文标题：Granularity of diagnostics*

| Applies to | AP |
|---|---|
| Decision | Diagnostic entity shall be identical to the deployable unit within a vehicle. Deployable unit means from hardware units (ECUs), up to Software Clusters. |
| Rationale | AUTOSAR focused on the Software Cluster approach because it offers a more easy option to keep the two worlds consistent. A Software Cluster is the individual deployable unit from the OEM perspective. Therefore, it is easy to keep the offboard world consistent if the diagnostic has identical boundaries. |

The production and workshop systems are often bound to the physical device. Thus, many OEMs want to start also with this approach in Adaptive. Consequently, until there is no individual software setup with a car (e.g. because the installed options can be chosen by the driver itself) the offboard systems could be kept consistent by stringent workflows.
| Category | None |
|---|---|
| Application affected | No |
| Assumptions | DM core doesn't mind if a further diagnostic server is installed (in the context of a new Software Cluster) or the current diagnostic server is just extended. |
| Constraints | Diagnostics is a (non-verbose) offboard-communication using external description to document the communication content. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Potentially throwing constructors

| Applies to | AP |
|---|---|
| Decision | Constructors that may throw exceptions shall not participate in overload resolution when C++ exceptions are disabled in the compiler toolchain. |
| Rationale | Similar solution to other functions that use C++ exceptions as their error handling mechanism e.g., ara::core::Result::ValueOrThrow() |
| Category | None |
| Application affected | Yes |
| Assumptions | * There are use cases targeted by AUTOSAR, when C++ exceptions are disabled in the compiler toolchain. |

* By this decision the overload set might be changed, which may result in an unintended change to the program flow. Thus, the existence of two constructors of the same class that fulfill the following conditions:

  * one is potentially throwing, the other one noexcept,
  * both accept the same number of parameters
  * the corresponding parameters have to be convertible from the potentially throwing one to the noexcept one

  would be problematic. It is assumed that this situation will never occur because AUTOSAR follows  and users use C++ best practices, in particular  C.164: Avoid implicit conversion operators.
| Constraints | No constraints were identified. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. The 范围 for restarting processes is a FunctionGroup
*原文标题：The scope for restarting processes is a FunctionGroup*

| Applies to | AP |
|---|---|
| Decision | Applications can be restarted in the scope of a FunctionGroup. Ideally, the recovery of supervision errors should be handled in the own FunctionGroup. If the recovery cannot be handled within the own FunctionGroup, it has to be escalated within the State Management. There the coordination for the recovery should take place. This could typically be: |

* the shutdown/restart of multiple FunctionGroups,
* the start of other FunctionGroups or
* the restart of the entire Machine.

The coordination of the restart of the entire Machine has to be coordinated within the State Management of the platform-core Software Cluster.
| Rationale | Software Clusters are independently deployable units. They could be added later to the same Machine and then should not harm other Software Clusters (freedom from interference between Software Clusters). Recovery shall always be tried within the Software Cluster. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Platform-independent development of 软件 Clusters of category APPLICATION_LAYER
*原文标题：Platform-independent development of Software Clusters of category APPLICATION_LAYER*

| Applies to | AP |
|---|---|
| Decision | Functional Cluster daemons and their startup coordination shall be part of Software Clusters of category PLATFORM_CORE or PLATFORM. |
| Rationale | This allows uniform and platform-independent integration of Software Clusters of category APPLICATION_LAYER. Consequently, it shall not be necessary to take care of the platform software when developing an Software Cluster of category APPLICATION_LAYER. |
| Category | None |
| Application affected | Yes |
| Assumptions | Market demand is to deliver Machines with pre-installed Adaptive Platform software. |
| Constraints | No constraints were identified. |
| Alternatives | No limitation for allocation of platform software to Software Clusters |

Do not make any limitations of platform software. This can lead to a non-uniform integration of the platform software.
| Remarks | No remarks. |
|---|---|
| Related requirements | None |
| Release | R21-11 |

### 32. 功能性 Clusters shall standardize their logging/追踪
*原文标题：Functional Clusters shall standardize their logging/tracing*

| Applies to | AP |
|---|---|
| Decision | Functional Clusters shall standardize their logging/tracing for common use-cases demanded by the market. The standardization shall be for the non-verbose logging/tracing. If applicable it shall be summarized by two standardized tables (one for logging and a second for tracing) listing all standardized log-/trace messages. |
| Rationale | Standardized logging/tracing within Functional Clusters allows a harmonized evaluation of logging/tracing on vehicle-level. |
| Category | None |
| Application affected | Yes |
| Assumptions | Logging/tracing is necessary for a variety of use cases (root cause analysis, auditing, debugging). Especially, in a distributed environment a harmonization is necessary to enable automated analysis. |
| Constraints | No constraints were identified. |
| Alternatives | No standardized logging |

Do not standardize logging at all.
| Remarks | No remarks. |
|---|---|
| Related requirements | None |
| Release | R21-11 |

### 其余 17 章（内容从略，见纯文本全文）

33. Guidance whether to define a 服务 or a C++ 接口
34. 支持 only 功能性 dependencies between 软件 Clusters
35. The 简介 of virtual functions requires approval
36. 指南 for Extension 接口
37. Messages for unrecoverable 错误
38. No named constructors for 抽象 classes
39. the interaction of application-layer 软件 with 功能性 Clusters的建模
40. Extent of allowed behavioral 规范 in API table 描述 field
41. Namespace for AUTOSAR Adaptive Platform Extension 接口
42. 指南 on documenting re-specified external APIs in AUTOSAR
43. Classic Platform
44. The ordering of 结构 elements is a binding part of the standard
45. 类型 of standardized header files
46. Guidance for incompatible API changes
47. 处理 of Time in the AUTOSAR Classic Platform
48. Providing configurable 通知 functions in BSW 模块
49. Architectural considerations for the V2X stack in the AUTOSAR Classic Platform
