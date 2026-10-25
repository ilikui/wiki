# Guidelines for using Adaptive Platform interfaces (`InterfacesGuidelines`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 929 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_EXP_InterfacesGuidelines_929\AUTOSAR_AP_EXP_InterfacesGuidelines.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_EXP_InterfacesGuidelines_929\AUTOSAR_AP_EXP_InterfacesGuidelines.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_EXP_InterfacesGuidelines_929\zzgen\AP_EXP_InterfacesGuidelines.complete.txt`

## 文档简介

The AUTOSAR Adaptive Platform Communication Management is based on Service Oriented communication. This is good for implementing platform independent and dynamic applications with a service-oriented design.

For ADAS applications, it is important to be able to transfer raw binary data streams over Ethernet efficiently between applications and sensors, where service oriented communication (e.g. SOME/IP, DDS) either creates unnecessary overhead for efficient communication, or the sensors do not even have the possibility to send anything but raw binary data.

The Raw Data Binary Stream API using IP based protocols provides a way to send and receive Raw Binary Data Streams, which are sequences of bytes, without any data type. They enable efficient communication with external sensors in a vehicle (e.g. sensor delivers video and map data in "Raw data" format). The communication is performed over a network using network layer sockets.

The Raw Data Streaming API is static, i.e. its is not generated. It is located in namespace ara::rds.

## 模块依赖

Client code should not rely on a type remaining an aggregate.

Example:

Point p{1, 2};

Future API evolution may introduce constructors or other members that change aggregate behavior. *Note that this might be especially interesting with (https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p1008r1.pdf) as soon as AUTOSAR updates the required C++ version.*

## 章节详细内容

### 1. 简介 to this document
*原文标题：Introduction to this document*

### 2. Contents

While SWS of FC is a specification for ARA interfaces, some of the interfaces require "guidelines" on how to use them. The guidelines are indeed related to the specification, but some are indirect and having such information within each SWS bloats SWS hence making it difficult for readers to grasp the usage. Another important perspective is that these guidelines are a kind of requirement against AA to follow, but SWS of FC are specification requirements for FCs. Therefore, it does not fit well to have these contents in SWS, and this is the purpose of this "Guidelines for using Adaptive Platform Interfaces."

The main contents of this document will be the guidelines for applications to follow as mentioned in the background above. Not necessarily all FCs will have contents in this document; they will be added when it deems valid.

The contents are organized per relevant topic, but in general, this will be grouped by FC, each having its independent chapter. Also, note that the contents may be provided in separate AUTOSAR AP documents. If this is the case, such documents will be listed or referenced from this guideline.

### 3. Prereads

This document is a supplementary document to the SWS of AP. Therefore, the relevant SWS of the topic in these guidelines should be read in parallel. Also, the first AP document to be read is , which gives the architectural overview of AP.

### 4. Relationship to other AUTOSAR specifications

Refer to Contents  and Prereads .

### 5. Common Regulations

### 6. Namespace

The namespace ara (and all namespaces below it) are reserved by AUTOSAR.

The behavior of an Adaptive Application is undefined if it adds declarations or definitions to namespace ara or to a namespace within namespace ara.

Note: the standardized namespaces could have been extended by the platform vendors to be able to implement the standard or to provide extensions.

Data type declarations usually are also available via forwarding header files.

All data types for a particular Functional Cluster are available in a single forwarding header file whose filename follows the pattern <fc>_fwd.h. For instance, forwarding declarations of all ara::core types are available in a header file ara/core/core_fwd.h.

### 7. Client 代码 Restrictions and Assumptions
*原文标题：Client Code Restrictions and Assumptions*

AUTOSAR defines rules according to which API changes are considered source compatible. These compatibility guarantees apply only to normal use of the documented API. Client code that relies on implicit implementation details, language corner cases, or compile-time introspection may require adaptation even when an API change is classified as source compatible.

### 8. Reliance on Exact 功能 Signatures
*原文标题：Reliance on Exact Function Signatures*

Client code shall not rely on exact function signatures.

Changes such as adding default arguments or additional overloads may be source compatible for ordinary function calls.

Client code shall not rely on exact function signatures through constructs such as:

auto ptr = &Api::Function;

or

using FunctionType = void(*)(void);

Such code may become invalid when the API evolves.

### 9. Reliance on Exact Overload Sets

Client code shall not assume that the set of overloads for a function remains unchanged.

For example:

Function(0);

may resolve differently if additional overloads are introduced.

Applications should avoid ambiguous calls and should use explicit casts where necessary.

### 10. 模板 Metaprogramming and Compile-Time Introspection
*原文标题：Template Metaprogramming and Compile-Time Introspection*

Compatibility guarantees do not apply to code that performs compile-time analysis of API declaration.

Examples include:

decltype(&Api::Function)

std::is_invocable_v<...>

std::void_t<...>

requires(...) // as soon as AUTOSAR makes use of C++20 Concepts

Changes that affect such constructs are not considered source incompatible by this standard.

### 11. 检测 of Members and Functions
*原文标题：Detection of Members and Functions*

Client code shall not depend on the presence or absence of specific members solely through detection idioms.

Example:

HasResetMethod<T>

A source-compatible API extension may invalidate such assumptions.

### 12. Reliance on Exact 模板定义
*原文标题：Reliance on Exact Template Definitions*

Client code shall not depend on implementation details of public template definitions unless explicitly documented as part of the API.

Changes to template implementations may affect metaprogramming constructs while remaining source compatible under this standard.

### 13. Dependence on Aggregate Properties

Client code should not rely on a type remaining an aggregate.

Example:

Point p{1, 2};

Future API evolution may introduce constructors or other members that change aggregate behavior. *Note that this might be especially interesting with (https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p1008r1.pdf) as soon as AUTOSAR updates the required C++ version.*

### 14. Dependence on Implicit Conversions

Client code should avoid reliance on implicit conversions where explicit alternatives exist.

Additional overloads or constructors may alter overload resolution.

Example:

// Instead ...
Function(0);

// ... prefer the following when a specific overload is intended:
Function(static_cast<int>(0));

### 15. Use of Inheritance from Non-Interface Classes

Client code should derive only from classes explicitly documented for inheritance.

Future source-compatible changes may introduce new virtual functions, members, or implementation details that affect derived classes.

### 16. Overriding Undocumented Virtual Functions

Client code shall only override virtual functions intended as extension points.

Functions not documented for customization may change in future versions.

### 17. Reliance on Namespace Contents

Client code shall not assume that a namespace contains only the currently available declarations.

New types, functions, aliases, or enumerators may be added as part of source-compatible API evolution.

### 18. Dependence on Header 结构
*原文标题：Dependence on Header Structure*

Client code should include the header that directly declares the required API element.

Transitive include relationships are not guaranteed to remain unchanged.

### 19. Reliance on Public Constants for Compile-Time Decisions

Client code should avoid compile-time branching based on undocumented API constants, traits, or helper types.

Such implementation details may evolve without being considered source incompatible.

### 20. Dependence on Exact 类型定义
*原文标题：Dependence on Exact Type Definitions*

Client code shall not rely on implementation-specific details of exposed types beyond their documented interface.

Client code should not assume a specific inheritance hierarchy, nested type set, or collection of helper members *unless documented as part of the API*.

class Container
{
public:
    using value_type = int;
};

// Client code
Container::value_type value;
//  If value_type is not part of the documented API contract,
//  its removal in a newer AUTOSAR release is source compatible.

### 21. Use of Deprecated API Elements

Client code should migrate away from deprecated interfaces as early as practical.

Deprecated API elements remain source compatible during the deprecation period. Their eventual removal is considered a source-incompatible change.

### 22. Adaptive 核
*原文标题：Adaptive Core*

### 23. 错误处理
*原文标题：Error handling*

Handling errors is a crucial topic for any software development. For safety-critical software, it is even more important, because lives can depend on it. However, current standards for the development of safety-critical software places significant restrictions on the build toolchain, especially with regard to C++ exceptions. For ASIL applications, using C++ exceptions is usually not possible due to the lack of exceptions support with ASIL-certified C++ compilers.

The Adaptive Platform introduces a concept that enables error handling without C++ exceptions and defines a number of C++ data types to aid in this.

From an application programmer's point of view, the central types implementing this concept are ara::core::ErrorCode and ara::core::Result.

### 24. ErrorCode

An instance of ara::core::ErrorCode represents a specific error condition within a software. It is similar to std::error_code, but differs in significant aspects from it.

An ErrorCode always contains an enumeration value (type-erased into an integral type) and a reference to an error domain. The enumeration value describes the specific type of error, and the error domain reference defines the context where that error is applicable. Additional optional members are a user-defined message string and a vendor-defined supplementary error description value.

### 25. Result

Class ara::core::Result follows the "ValueOrError" concept from the C++ proposal p0786 (see https://wg21.link/P0786). It either contains a value or an error. ErrorType is defaulted to ara::core::ErrorCode, and it is enforced that only this type is allowed as the ErrorType template parameter for ara::core::Result.

Because the ErrorType is defaulted to ara::core::ErrorCode, most declarations of ara::core::Result only need to give the ValueType, e.g. ara::core::Result<int> for a Result type that contains either an int variable, or an ErrorCode.

ARA interfaces use ara::core::Result as the return type for functions that can encounter recoverable errors. This type can be used to either generate a C++ exception from the object if the user chooses to use exceptions, or retrieve error information via observer methods without using exceptions.

This section guides you on how to handle such Result objects returned from ARA interface in your application code, and also gives guidance on how to create new Result objects within your own Adaptive Application.

### 26. Creation of a Result

For creating a Result with an embedded value, there are constructors allowing implicit conversion from a ValueType. This makes defining a Result with a value quite straightforward:

Result<int> res1(42);
  Result<int> res2 = 42;

Returning a value from a function declared to return a Result is similarly straightforward:

Result<int> myfunction()
  {
    return 42;
  }

Putting an error inside a Result requires calling an explicit constructor, e.g.:

ErrorCode ec = MyEnum::some_error;
  Result<int> res2(ec);

Alternatively, construction of Result objects is also possible with static member functions, for instance:

Result<int> res1 = Result<int>::FromValue(42);
  Result<int> res2 = Result<int>::FromError(ec);

These forms can be advantageous when ValueType or ErrorType are expensive to copy because they allow in-place construction. For instance, returning a Result containing an instance of BigClass which is constructed with two constructor arguments "a1" and "a2" could look like this:

return Result<BigClass>::FromValue(a1, a2);

For ErrorType, this also allows implicit construction of the ErrorCode instance, including an optional supplementary data value:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Retrieving values and 错误
*原文标题：Retrieving values and errors*

When trying to retrieve the value or error that is contained within a Result, one first has to consider which one of these (value or error) is available. In general, this is not known, so one has to take care to handle both cases.

When working without exceptions, the Result object is queried to check whether it contains a value or an error:

Result<int> some_function() { ... }

  Result<int> res = some_function();
  if (res.HasValue()) {
    int theValue = res.Value();
  } else {
    ErrorCode const& ec = res.Error();
  }

This code also works in a completely exception-free environment, including with a compiler that does not support exceptions at all.

When working with an exception-based workflow, the query code looks quite similar to regular exception-based code:

Result<int> some_function() { ... }

  int theValue = some_function().ValueOrThrow();

Here, the Result object that is returned by some_function() is immediately reduced to its ValueType (int) by calling its ValueOrThrow() member function.

If the Result did contain an ErrorCode, this would immediately throw an exception type that corresponds to the embedded ErrorCode object.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Advanced topics

The two basic methods for retrieving the embedded value or error are called just as such: Result::Value() and Result::Error(). However, when calling any of these, one has to be certain that the Result object does indeed contain what is implied by calling one of these functions. In the previous section, this was done by first calling Result::HasValue(), and calling Value() or Error() depending on the outcome of that call.

A more convenient way of accessing the embedded value has already also been mentioned in the previous section: By calling Result::ValueOrThrow, no if-statement is needed, and the invocation collapses into a single-line statement (excluding the try...catch block, which might exist elsewhere).

Other convenience methods exist, for instance Result::ValueOr, which retrieves the value, if if exists, or takes a default value otherwise (i.e., in case of any error), e.g.:

int res = some_function().ValueOr(42);

A generalization of Result::ValueOr is called Result::Resolve, which does not take a default value as an argument, but a Callable, which is to create the default value on-demand:

int res = some\_function()
    .Resolve([](ErrorCode const& ec){ return 42; });

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Faults inside constructors

Constructors cannot return ara::core::Result objects. Therefore, constructors that may encounter recoverable errors will throw exceptions when they do so. The ARA API uses a technique that is similar to the named constructor idiom to support applications that do not use exception mechanisms. For each constructor that may throw exceptions as part of its defined behavior, a class provides an additional static method as an alternative to create objects. The method has the name Create and does not throw exceptions. It has the same parameters as the constructor.

For example, a class that provides the constructor

SomeClass::SomeClass(uint8_t i);

which may throw exceptions, also provides the static method

static ara::core::Result<SomeClass> SomeClass::Create(uint8_t i) noexcept;

The method Create returns an ara::core::Result object, which either contains the new instance of the class or an error. Retrieving one or the other from the return value is similar to all other functions that return ara::core::Result objects (see Section 2.1.2).

Both the constructor itself and the method Create are available for constructors that may throw exceptions if the toolchain supports exceptions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Non-Recoverable 错误
*原文标题：Non-Recoverable Errors*

There can also be situations that are non-recoverable. The AUTOSAR AP defines three such categories in :

* Violation
* Failed Default Allocation
* Corruption

They all lead to the termination of the process in which they occur.

Standardized Violations are implemented by the AUTOSAR AP implementation by a call to ara::core::Abort and Non-Standardized Violations as well as Failed Default Allocations may be implemented by a call to ara::core::Abort. The application can register abort handlers to do some required tasks before the process is terminated. Non-Standardized Violations and Failed Default Allocations can alternatively be realized by an AUTOSAR AP implementation by throwing an Exception that is not a subclass of ara::core::Exception. Such Exceptions are converted to a call to std::terminate if the API function in which it occurs is noexcept. In case they are not, it would be possible for an application to catch such Exceptions. This is not advised except for the purpose of calling ara::core::Abort because that would rely on the implementation-specific decision of how the handling of the concrete Violation is implemented.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Standardized vs Vendor-specific ErrorCodes

AUTOSAR standardizes ErrorCodes for the standardized behavior.

It is possible for an API to return vendor-specific ErrorCodes. These must use their own ErrorDomain (see ). These ErrorDomains contain the vendor ID, which enables a unique assignment.

A portable stack-vendor neutral application should consider this and treat these ErrorDomains as general errors (default case).

### 32. 启动 and 关机
*原文标题：Startup and Shutdown*

Before making use of ARA the Application has to call ara::core::Initialize. The general advice is to call ara::core::Initialize to initialize the platform right at the entry point of an Adaptive Application. That entry point could be either the standard main function or a user-defined function that is called from main (e.g., to support unit tests for that function). If necessary, actions that do not rely on ARA APIs can be performed prior to calling ara::core::Initialize, such as registering a SIGTERM handler or parsing command line arguments. However, only the ARA APIs that are listed in  may be used prior to calling ara::core::Initialize.

At the end of the Adaptive Application lifecycle, ara::core::Deinitialize needs to be called prior to termination of the Adaptive Application after any ARA resources held by the Adaptive Application (including those that are in use by other threads of the Adaptive Application) have been freed.

Both ara::core::Initialize and ara::core::Deinitialize return a ara::core::Result<void> that needs to be checked because these operations may fail.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Reserved symbols

### 34. Preprocessor macros

The Adaptive Platform tries to avoid the use of C/C++ preprocessor macros. Such macros start with the prefix ARA. Macros with this prefix should thus not be defined by developers of an Adaptive Application.

### 35. Thread-safety

If the API is thread-safe, then thread-safety should be considered for any implementation of such functions provided by a vendor or user of the API (this affects e.g., callback or implementations of pure virtual functions like skeleton functions). The interface assumes adherence of implementations to the given thread-safety specifications.

### 36. Async signal-safety

Usage of any ARA API within a POSIX signal handler may result in undefined behavior of the application, unless otherwise specified.

### 37. 执行管理
*原文标题：Execution Management*

Execution Management is a Functional Cluster responsible for all aspects of system execution management including platform initialization and startup / shutdown of processes.

Execution Management provides multiple dedicated interfaces to the processes as part of the AUTOSAR Runtime for Adaptive (ARA).

### 38. Execution Client

As mentioned in `TPS_ManifestSpecification` a Modelled Process is an instance of an Executable. On the AUTOSAR Adaptive Platform, a Modelled Process is realized at run-time as an OS process. As Execution Management is responsible for tracking the life cycle of a Modelled Process, a reporting process is expected to notify Execution Management about its own state. This is done by instantiation of an Execution Client (ara::exec::ExecutionClient) and reporting Running Execution State (ara::exec::ExecutionState::kRunning) via the ara::exec::ExecutionClient::ReportExecutionState class method. A process should typically report kRunning as soon as initialization has been completed. Delaying further the report according to service availability (service discovery over Communication Management) for example may introduce non-deterministic delays impacting other processes.

Please also note, that Execution Management is monitoring the start-up time of the process, which is measured until the report of the kRunning. If kRunning is not reported before the configured amount of time, Execution Management will consider this as a failure during the start-up and will terminate the process.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Exit 代码
*原文标题：Exit code*

On reception of the SIGTERM the process should initiate its own termination procedure. Execution Management will monitor the time needed for process termination. If the process does not terminate before the configured amount of time, this will be considered as a failure during the termination and the process will be forcibly terminated (e.g. via SIGKILL).

A graceful termination of the process is expected to report 0 (`EXIT_SUCCESS`). Any non 0 exit code are handled as Abnormal Termination.

### 40. 状态 Client
*原文标题：State Client*

State Management Functional Cluster is responsible for coordinating states of Function Groups to achieve a certain functionality (based on internal decisions, external or platform internal requests).

Function Groups provide the capability to coherently control group of processes. Each Function Group State (belonging to a Function Group) defines which processes shall be started/terminated/restarted. This is done when State Management requests Function Group State change activation from Execution Management.

The states of MachineFG are used to control machine life cycle (shutdown/restart) and therefore processes of platform level, while other Function Group States individually control processes which belong to functionally coherent user-level Applications.

The ara::exec::StateClient class provides multiple methods to State Management to request Function Group state changes. The undefinedStateCallback is a parameter of the State Client constructor. Execution Management will invoke the undefinedStateCallback in case of unexpected termination of a process outside a state transition.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 状态管理
*原文标题：State Management*

### 42. Interaction with AUTOSAR Adaptive (Platform) Applications

### 43. 基础状态管理 functionality
*原文标题：Basic State Management functionality*

As State Management is available in two different designs (StateMachine approach or project-specific "hand-written" code), two different approaches for the interfaces are available as well:

For the StateMachine approach a service interface to trigger a state change and another service interface for being notified about the current state of the StateMachine is available per StateMachine. For the project-specific approach no interface to applications is defined, as implementer can specify the needed interface by its own. The defined service interface, as well as the project-specific interface should at least support the following functionality:

* FunctionGroups can be requested to be set to a dedicated state
* (Partial) Networks can be requested to be de- / activated
* The machine can be requested to be shutdown, restarted or suspended to RAM

Some of these functions are critical. Therefor access to those interfaces has to be secured properly by Integrator via Identity and Access Management not to change the internal state of State Management (and therefor the depending effects) accidently.

### 44. 状态管理 StateMachine functionality
*原文标题：State Management StateMachine functionality*

With the optional StateMachine approach of StateManagement the user is able to configure a certain set of actions to be taken when a StateMachine state is entered. Currently the following actions are possible to configure:

* FunctionGroups can be requested to be set to a dedicated state
* (Partial) Networks can be requested to be set to FullCom or NoCom
* StateMachine(s) can be started or stopped
* Synchronization between actions is possible
* Sleeping between actions is possible
* Coordination of suspend to RAM is possible

Please note that the list of actions might be extended it future AUTOSAR releases.

Beside the actions it is for sure possible to configure the amount of states for a certain StateMachine. To complete StateMachine definition two more tables have to be configured:

* TransitionRequestTable, which contains the possible transitions based on user input triggers (from SMControlApplication) and / or changes in NMHandle states

* ErrorRecoveryTable, which contains unconditional transitions, based on ErrorCode, coming from PlatformHealthManagement, ExecutionManagement and / or StateManagement itself.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. 持久化
*原文标题：Persistency*

### 46. 概述
*原文标题：Overview*

Persistency is one of the foundation clusters of the adaptive AUTOSAR platform which provides an API to the application to store and retrieve user data. It supports two different storage mechanisms: Key-Value Storage and File Storage.

Both storage mechanisms might use a file system of the operating system, and in this case rely on this file system to be able to synchronize changes. This has to be ensured by a proper integration of the file system, e.g. by using appropriate mount options.

### 47. Key-Value Storage

This is a simple key based database that helps the user to store their data in the database.

Key-Value Storages support a simple transactional context that starts when the Key-Value Storage is opened, and is stopped and restarted when SyncToStorage or DiscardPendingChanges is called, and finally stopped when the Key-Value Storage is closed. It is well suited for a medium to large number of not too large data items.

### 48. 文件 Storage
*原文标题：File Storage*

This is a simple file based storage where the data is stored in files inside a folder. It supports storing huge amounts of data.

### 49. 配置
*原文标题：Configuration*

An application needs to design Key-Value Storages and File Storages as a port interfaces in order to access the Key-Value Storage and File Storage features. After designing the Persistency port interfaces, further configuration information will be provided during the target configuration stage (e.g. storage location, redundancy CRC, redundancy M out of N, etc.) either in the target configuration section of the manifest or in the APMC of Persistency.

Based on the logging implementation inside Persistency, the cluster can log the run time-related warnings errors and fatal problems.

Note: `AUTOSAR_AP_SWS_Persistency` does not specify the above details as that is implementation specific.

### 50. Redundancy feature

This feature ensures persistent data safety for both Key-Value Storages and File Storages. There are three possible ways to ensure data safety (integrity).

# CRC
# Hashes
# M out of N approach

It is a configurable parameter. Based on the project need, either one or a combination of them can be configured. With respect to CRC, all the AUTOSAR CRCs are supported to configure. In addition to the detection of integrity M out of N approach helps to recover the data if there are sufficient redundant copies available.

Persistency also allows the application to install a callback that will report any problems detected in any of the storages, even if the problem could be corrected because the redundancy was sufficient. This callback can be used in safety critical application, or when the application wants to monitor the health of the hardware.

Recover Storage: It is part of the Redundancy Feature. If integrity checks fail for a Key-Value Storage or a File Storage or a file or a key-value pair, the user can use RecoverKeyValueStorage/RecoverFileStorage/RecoverFile/RecoverKey APIs to recover the data based on a best effort recovery mechanism.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. Reset Storage

This feature resets a Key-Value Storage/File Storage/file/key-value pair to the initial state, containing only key-value pairs/files which were deployed from the manifest, with their initial values and it will fail with a kResourceBusyError when the Key-Value Storage/FileStorage/file/key-value pair is currently open/accessed and with a kInitValueNotAvailableError when target configuration does not define an initial content for the key-value pair/file.

Reset APIs:

* ResetPersistency(): Reset all Key-Value Storages and File Storages to the initial state with key-value pairs and files deployed from manifest
* ResetKeyValueStorage(): Reset Key-Value Storage to the initial state with key-value pairs deployed from manifest
* ResetAllFiles(): Reset the whole File Storage, including all files from the deployed content from manifest
* ResetFile(): Reset a single file to its initial content which was deployed from the manifest
* ResetKey(): Reset a single Key-Value Pair to its initial content which was deployed from the manifest

### 其余 130 章（内容从略，见纯文本全文）

52. Update and Removal of Persistent 数据
53. 示例 usage of the Key-Value Storage API
54. 文件 Storage API的示例 usage
55. 平台健康管理
56. Supervision and Checkpoints
57. Recovery actions
58. Watchdog 处理
59. 关机 functionality
60. 更新与配置管理
61. Port 配置
62. Method deployments
63. 数据 transfer, message loss and block sizes
64. Raw 数据 Streams
65. Raw 数据 Streaming over Ethernet using IP based protocols (网络 layer)
66. Raw 数据 Streaming 接口
67. 简介
68. 功能性描述
69. Class and 建模
70. Class and signatures
71. Constructor
72. Destructor
73. 清单建模
74. Methods of class RawDataStream
75. Timeout parameter
76. Methods
77. WaitForConnection
78. Connect
79. 关机
80. ReadData
81. WriteData
82. Security
83. Usage of RawDataStreaming
84. 时序图
85. Usage
86. 示例 of usage as server
87. 示例 of usage as client
88. Raw 数据 Streaming using IEEE1722 协议 (数据 link layer)
89. Raw 数据 Streaming 接口
90. 简介
91. 功能性描述
92. Class and 建模
93. Class and signatures
94. Constructor
95. Destructor
96. 清单建模
97. Methods of class IEEE1722RawDataStreamConsumer/Producer
98. Methods
99. Connect
100. 关机
101. ReadData
102. WriteData
103. Security
104. Usage of RawDataStreaming
105. Usage
106. 示例 of usage as IEEE1722RawDataStreamConsumer
107. 示例 of usage as IEEE1722RawDataStreamProducer
108. Safety
109. Hints for implementers
110. 诊断管理
111. 诊断 Communication 管理
112. 诊断 Event 管理
113. Negative Return Codes
114. 诊断 communication over Internet 协议
115. 服务 oriented Vehicle 诊断
116. 密码服务
117. 建模 and 映射
118. Design-time 建模
119. KeySlot 设计 Steps
120. Integration-time 映射
121. Development
122. 建模示例
123. CryptoProvider
124. KeySlot
125. Detailed KeySlot 建模
126. Certificate
127. CertificateGroup
128. CryptoAPIs
129. Crypto Provider
130. Key 管理
131. Load KeySlot
132. Writable KeySlot
133. Read-Only KeySlot
134. Update Writable KeySlot Content
135. Delete Writable KeySlot Content
136. Generate Cryptographic Keys
137. Symmetric Key
138. Asymmetric Key Pair
139. Derive Cryptographic Keys
140. Import and Export Plaintext Cryptographic Keys
141. Export
142. Import
143. Import and Export Protected Cryptographic Keys
144. Export Secured Key
145. Import Protected Key
146. Allowed Usages
147. Cryptographic Transformations
148. 示例 Scenarios
149. Generate MAC
150. Import Public Key and Verify Signature
151. Streaming Encryption
152. Hash Calculation
153. Certificate 处理 (X.509 Provider)
154. X.509 Provider 概述
155. Certificate
156. Loading
157. Load Certificate
158. Load Certificate Group
159. Parsing
160. Parse Certificate
161. Parse Certificate Chain
162. Validating
163. Persisting and Deleting
164. Persist Certificate
165. Delete Certificate
166. Persist Certificate in Group
167. Remove Certificate from Group
168. Certificate Signing Request (CSR)
169. Certificate Revocation Lists (CRLs)
170. Import CRL
171. Delete CRL
172. CRL 校验
173. Online Certificate Status 协议 (OCSP)
174. Create OCSP Request
175. Parse and Use OCSP Response
176. Sensor 接口
177. 接口配置
178. 数据 Transfer
179. 服务 profile and 数据类型
180. 相关文档
181. 附录
