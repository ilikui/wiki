# Specification of Safe Hardware Acceleration (`SafeHardwareAcceleration`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1088 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_SafeHardwareAcceleration_1088\AUTOSAR_AP_SWS_SafeHardwareAcceleration.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_SafeHardwareAcceleration_1088\AUTOSAR_AP_SWS_SafeHardwareAcceleration.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_SafeHardwareAcceleration_1088\zzgen\AP_SWS_SafeHardwareAcceleration.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the Functional Cluster Safe Hardware Acceleration.

The Safe Hardware Acceleration Functional Cluster will be referenced as Safe Hardware Acceleration in the remainder of this document.

Safe Hardware Acceleration offers mechanisms to Adaptive Applications and other Functional Clusters to send tasks for parallel execution to the hardware accelerators availalbe in the system.

The Safe Hardware Acceleration will typically be implemented as a library that runs within a Process of an Adaptive Application, with the rights of that Process.

To avoid redundancy in the specification, in the remainder of this document, Adaptive Applications and Functional Clusters that use Safe Hardware Acceleration will be called Safe Hardware Acceleration users, while the term Adaptive Application will be also be used to denote a Functional Cluster implemented as a Daemon, which is handled similarly to an Adaptive Application.

The explanation of how to use the functional cluster API and its use-cases are described in

## 模块依赖

Safe Hardware Acceleration(SHWA) is a new AUTOSAR Functional Cluster (FC). At the moment of writing there are no dependencies to other FCs.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the Functional Cluster Safe Hardware Acceleration.

The Safe Hardware Acceleration Functional Cluster will be referenced as Safe Hardware Acceleration in the remainder of this document.

Safe Hardware Acceleration offers mechanisms to Adaptive Applications and other Functional Clusters to send tasks for parallel execution to the hardware accelerators availalbe in the system.

The Safe Hardware Acceleration will typically be implemented as a library that runs within a Process of an Adaptive Application, with the rights of that Process.

To avoid redundancy in the specification, in the remainder of this document, Adaptive Applications and Functional Clusters that use Safe Hardware Acceleration will be called Safe Hardware Acceleration users, while the term Adaptive Application will be also be used to denote a Functional Cluster implemented as a Daemon, which is handled similarly to an Adaptive Application.

The explanation of how to use the functional cluster API and its use-cases are described in

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Abbreviation / Acronym | Description |
|---|---|
| SHWA | Safe Hardware Acceleration |

| Term | Description |
|---|---|
| Accessor | Refers to the Accessor the only way to access to Buffer underlying data |
| Adaptive Application | Refers to the Adaptive Application defined in , or to a Functional Cluster implemented as a Daemon. |
| Adaptive Platform | Refers to the AUTOSAR Adaptive Platform defined in . |
| Adaptive Platform Foundation | Refers to the Adaptive Platform Foundation defined in . |
| Buffer | Refers to a Buffer memory area allocated for data storage. |
| Daemon | Refers to a Functional Cluster implemented as a Daemon. |
| Device | A device represents a physical computing unit, where parallel computations can be executed. This could be a CPU or GPU that is accessed directly by Safe Hardware Acceleration. |
| Execution Manifest | Refers to the Execution Manifest defined in . |
| Functional Cluster | Refers to the Functional Cluster defined in . |

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

### 7. 已知限制
*原文标题：Known limitations*

The interaction with hardware acceleration devices could be done only within one ECU.

### 8. Assumptions about the Implementation of Safe Hardware Acceleration

Safe Hardware Acceleration can be implemented with different internal architectures, and at the same time, Safe Hardware Acceleration users expect a well defined behavior that is independent of the actual implementation of Safe Hardware Acceleration. Therefore, the specification in this document needs to be sufficiently generic to cover the underlying differences. As usual in AUTOSAR Adaptive, the actual implementation is not defined by the specification and is therefore entirely up to the vendor of Safe Hardware Acceleration.

The following subsections list some of the possible implementations of Safe Hardware Acceleration.

### 9. 库 Only
*原文标题：Library Only*

In this scenario, Safe Hardware Acceleration consists solely of a library. The manifest is partly used to configure the compilation of the library (design time parts) and partly transferred to a configuration file that is read by Safe Hardware Acceleration at run-time (deployment parts).

### 10. Using a Central Daemon

In this scenario, the Safe Hardware Acceleration library connects in the background to a daemon via some IPC mechanism. The manifest influences again the compilation of the library part and is also transferred to configuration files for the library part and possibly also the daemon.

An implementer has the same freedom regarding underlying hardware acceleration framework. But an additional challenge is that the communication channel between library and daemon can be lost at any time, resulting in additional potential errors.

### 11. Direct Access to Hardware Acceleration Devices

Independently of whether a daemon is used or not, Safe Hardware Acceleration can be implemented to directly access hardware devices like CPU, GPU or other hardware accelerator.

Most operating systems include drivers that take care of communication with the underlying hardware. But this approach is not recommended to be followed due to complexity and potential risks. This use case is therefore not described in any detail in this specification.

### 12. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

Safe Hardware Acceleration(SHWA) is a new AUTOSAR Functional Cluster (FC). At the moment of writing there are no dependencies to other FCs.

### 13. Safe Hardware Acceleration(SHWA) Specifics

The Safe Hardware Acceleration is compiled as part of an Executable of an Adaptive Application, and therefore also executed as part of a Process, which creates an implicit dependency on the Execution Management (see ).

### 14. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

*Details can be found in

 shows interfaces provided by Safe Hardware Acceleration to other Functional Clusters within the AUTOSAR Adaptive Platform.

Interfaces provided by Safe Hardware Acceleration can be logically split into three section, as described on

* Storage and management of data which will be used for operations on HWA
* Task execution on HWA
* HWA Device management and monitoring

### 15. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in the  and the , and links to the fulfillments of these. Please note that if column "Satisfied by" is empty for a specific requirement, this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Public namespaces |  |  |
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Enumerator and constant names |  |  |
| Usage of ara::core types |  |  |
| Error reporting |  |  |
| Avoidance of shared ownership |  |  |
| Usage of "final specifier" |  |  |
| Handling of unsuccessful operations |  |  |
| Error handling for non-initialized Functional Cluster |  |  |
| usage of "noexcept" specifier |  |  |
| SHWA Operations Execution on Hardware Accelerator |  |  |
| SHWA Data Exchange with Hardware Accelerators |  |  |
| Hardware Accelerator Runtime State Monitoring |  |  |
| Timeout-based Blocking Operations Cancellation Mechanism |  |  |
| Hardware Accelerator Type Selection |  |  |
| Synchronous Errors Handling Mechanism |  |  |
| Asynchronous Error Handling Mechanism |  |  |
| Data Integrity Support |  |  |
| Allocated Resources Clean Up |  |  |
| SHWA multi-processing |  |  |
| Initialization and Shutdown |  |  |
| Memor |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 功能规范
*原文标题：Functional Specification*

### 17. The 架构 of Safe Hardware Acceleration
*原文标题：The Architecture of Safe Hardware Acceleration*

The Safe Hardware Acceleration offers a mechanism to utilize hardware acceleration for different tasks which can be executed in parallel.

The high level design of the Safe Hardware Acceleration within an Adaptive Platform is depicted in . As shown there, an Adaptive Application should use Safe Hardware Acceleration APIs for parallel tasks execution with simultaneous usage of other Functional Clusters like PHM to achieve required level of safe execution.

The typical usage of the Safe Hardware Acceleration within an Adaptive Application is depicted in . As shown there, an Adaptive Application can use a combination of multiple Queues, Devices and Buffers. Of course, the same applies to other Functional Clusters using Safe Hardware Acceleration.

Safe Hardware Acceleration can also be used directly by other Functional Clusters without involvement of the Adaptive Application. The library part of these Functional Clusters will use dedicated deployment information of Safe Hardware Acceleration, while Daemons of Functional Clusters can be modeled similarly to Adaptive Applications.

### 18. 通用 Features of Safe Hardware Acceleration
*原文标题：General Features of Safe Hardware Acceleration*

SHWA Namespaces
  Upstream requirements:
⌈
All specified classes within the Safe Hardware Acceleration shall reside within the C++ namespace ara::shwa.
⌋

### 19. 错误处理
*原文标题：Error Handling*

Error handling in Safe Hardware Acceleration is aligned with the guidelines described in . To this end, the Safe Hardware Acceleration has to implement a set of standard classes and APIs, which are described in this section.

 Safe Hardware Acceleration Error handling approach
  Upstream requirements:
⌈
Safe Hardware Acceleration shall use the error codes defined in ara::shwa::ShwaErrorCode to report problems to the calling Safe Hardware Acceleration user via ara::core::Result. Vendors of Safe Hardware Acceleration should add their own errors to a separate vendor-specific error-domain.
⌋

ara::shwa::ShwaErrorCode belongs to the ara::shwa::ShwaErrorDomain, which can be used by a Safe Hardware Acceleration user to classify returned errors.

 Safe Hardware Acceleration Error Domain
  Upstream requirements:
⌈
ara::shwa::GetShwaDomain shall return the global ara::shwa::ShwaErrorDomain object.
⌋

 Safe Hardware Acceleration Error Code
  Upstream requirements:
⌈
ara::shwa::MakeErrorCode shall return an ara::core::ErrorCode object when called with an error code enum from ara::shwa::ShwaErrorCode.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 通用错误的处理
*原文标题：Handling of General Errors*

kRuntime General Error
  Upstream requirements:
⌈
When a function or method of Safe Hardware Acceleration encounters a runtime issues with memory management, device management or task execution, Safe Hardware Acceleration shall return the error kRuntime.
⌋

When kRuntime occurs, the Safe Hardware Acceleration user shell perform additional measures to estimate if system is in appropriate state for safe performing of further operations.

 kTaskExecutionFailure General Error
  Upstream requirements:
⌈
When a method of Safe Hardware Acceleration encounters problems during task execution on selected device, Safe Hardware Acceleration shall return the error kTaskExecutionFailure.
⌋

When kTaskExecutionFailure occurs, Safe Hardware Acceleration user shall estimate health state of actual device, check data integrity of involved buffers (if there was any) and repeat needed task on current or alternative device.

 kMemoryNotAllocated General Error
  Upstream requirements:
⌈
When a method of Safe Hardware Acceleration have issues to allocate memory needed for particular buffer, Safe Hardware Acceleration shall return the error kMemoryNotAllocated.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Parallel Access to Hardware Acceleration Objects

According to , the SHWA Objects like Buffer, Queue or Accessor are local to one Process. Therefore, Safe Hardware Acceleration will never share SHWA Objects between two (or more) Processes, even of the same Executable. The background of this decision is that Safe Hardware Acceleration should not provide an additional communication path for Adaptive Applications besides the mechanisms provided by the Functional Cluster Communication Management (e.g. using ara::com).

 Objects sharing between processes
  Upstream requirements:
⌈
SHWA Objects shall always be local to one Process.
⌋

If SHWA Objects needs to be accessed by multiple Processes (of the same or different Adaptive Applications), it is the duty of the application designer to provide Service Interfaces for communication and guarantee safety and security measures.

Safe Hardware Acceleration provides move semantics only for SHWA Objects. Having move semantics, SHWA Objects are prepared for handling by multiple threads of the same Adaptive Application, running in the context of the same Process.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Security 概念
*原文标题：Security Concepts*

The Safe Hardware Acceleration does not implement own security mechanisms and relies on existed security mechanisms within Adaptive Platform.

### 23. Resource 管理概念
*原文标题：Resource Management Concepts*

The Safe Hardware Acceleration does not implement hardware resources management due to the following:

Unified hardware accelerator resource management is challenging because accelerators like GPUs, FPGAs, and TPUs differ significantly in architecture, memory models, and how they execute workloads. Each vendor provides its own software stack and APIs such as CUDA, ROCm, or oneAPI, which are not compatible with each other. Unlike CPUs, there is no standard abstraction layer or unified way to represent and schedule these devices.

Security and isolation requirements also vary widely, especially in multi-tenant or safety-critical environments. These differences make it impractical to manage all accelerators through a single, unified software layer without sacrificing performance, flexibility, or reliability.

Therefore, hardware acceleration resource management can be implemented as extension for specific hardware by platform vendor.

### 24. Safety 概念
*原文标题：Safety Concepts*

The Safe Hardware Acceleration FC was designed with safety in consideration. It provides the following concepts related to the safety:

### 25. Exceptionless API

All methods in SHWA are marked as noexcept. In case if method can return an error, its return value is wrapped into Result class in order to provide an error without usage of exceptions.

### 26. Factory methods instead of constructors

Classic object creation constructors are excluded in SHWA design. Naturally during object construction exception situation can be occured, which is not expected for SHWA since it's exceptionless. It's possible to mark constructor with noexcept, but in this case there will be no way to communicate an error to the Adaptive Application developer. Therefore factory methods with return value wrapped into Result class are used instead of constructors in SHWA.

### 27. Mandatory asynchronous 错误 handler
*原文标题：Mandatory asynchronous error handler*

During task submission and execution, two types of errors can be occured

* Synchronous - wrapped in Result return value from ara::shwa::Queue::Submit method.
* Asynchronous - can be occurred on the Device during task execution.

Asynchronous errors can be handled only with asynchronous error handler (callback function), which is mandatory to be defined in SHWA to guarantee explicit error handling for each error case.

### 28. Device status monitoring

SHWA provides specific methods for monitoring of actual status of Device to give possibility to develop reliable applications with appropriate safety measures in case of inappropriate status of Device.

### 29. RAII idiom

RAII idiom is used for design of all SHWA classes for safe resource management via object lifetime.

### 30. Controllable (timeout-based) locking mechanism

In some cases Adaptive Application logic requires locking mechanism to synchronize main thread with task execution on the Device. But main thread locking with dependency on the task execution on the Device can affect determinism of an Adaptive Application. Therefore SHWA provides additional (timeout-based) locking mechanism which can establish threshold for task execution and unlock main thread if this threshold was exceeded.

### 31. 数据 Access Specifics
*原文标题：Data Access Specifics*

In SHWA FC Accessors are the main mechanism for safely and efficiently accessing data on a Device, whether from Buffers or host memory, while maintaining synchronization between host and Device code.

### 32. 目的 of Accessors
*原文标题：Purpose of Accessors*

* Provide typed, safe access to memory in Kernels.
* Abstract the complexity of data movement between host and Device.
* Specify access modes (Read, Write, Read/Write) so the runtime can schedule operations efficiently and avoid race conditions.

### 33. Accessors Key 概念
*原文标题：Accessors Key Concepts*

* Binding to a Data Source

  An accessor is always associated with a data source, such as buffer (most common)
* Access Modes

  The access mode defines how the kernel interacts with the data:

  Read - Only read data.

  Write - Only write data (initial content ignored).

  Read/Write - Read existing data and write back updates.

  This approach lets the runtime optimize memory transfers and avoid unnecessary copies.
* Memory Spaces

  Global Memory is default for Buffer Accessors (accessible by all work-items).
* Synchronization

  Accessors are tied to the command group they are created in.

  When the Kernel finishes, writes are synchronized back to the host Buffer if the access mode allows it.

### 34. 数据 Access Specifics Summary
*原文标题：Data Access Specifics Summary*

Accessors in SHWA are a bridge between Kernels and data, letting us specify what we want to access, how we want to access it, and where it resides - while the appropriate runtime transparently manages data movement and synchronization.

### 35. Device Specifics

The Device abstraction represents the actual compute hardware where kernels run - such as a CPU, GPU, FPGA, or other accelerator. The runtime part lets you choose, query, and manage devices in a flexible way so your code can target heterogeneous systems.

### 36. Device 抽象
*原文标题：Device Abstraction*

A Device object wraps:

* The type of Device (CPU, GPU, accelerator, custom)
* Its capabilities (extensions, max work-group size, supported memory types)
* Its vendor-specific properties

Example:

ara::shwa::Device dev = ara::shwa::Device(ara::shwa::GpuSelector);
std::cout  "Running on: "
           dev.GetInfo<ara::shwa::info::Device::Name>()  "\n";

### 37. Device 类型
*原文标题：Device Types*

Devices are typically grouped as:

* CPU devices - Host processor
* GPU devices - Discrete or integrated graphics
* Accelerator devices - FPGA, AI chips, DSPs
* Custom devices - Vendor-defined

### 38. Device Selection Mechanisms

SHWA provides Device selectors to pick a device at runtime:

Built-in selectors:

* CpuSelector - Chooses the best available CPU device.
* GpuSelector - Chooses the best available GPU device.
* AcceleratorSelector - Chooses an accelerator device.

Custom selectors:

You can write your own logic:

struct MySelector {
    int operator()(const ara::shwa::Device &dev) const {
        if (dev.IsGpu()) return 100; // high score for GPU
        return -1; // reject other devices
    }
};
ara::shwa::Device myDev = ara::shwa::Device(MySelector{});

### 39. Querying Device Properties

It is possible to inspect a device to decide if it meets requirements:

if (dev.GetInfo<ara::shwa::info::Device::local_mem_type>()
    != ara::shwa::info::local_mem_type::none) {
    // Device supports local memory
}

Common queries:

* name
* vendor
* max compute units
* max work group size
* global mem size
* extensions

### 40. Device and Queue Relationship

Device: The actual hardware unit.

Queue: Associated with a device; used to submit kernels.

Typical flow:

ara::shwa::Queue q(ara::shwa::GpuSelector);
ara::shwa::Device dev = q.GetDevice();

### 41. Device Choice Strategy

Performance-tuned -> pick explicitly (GpuSelector or custom scoring)

Specialized hardware -> check vendor name and extensions

### 42. Device Specifics Summary

Device lets you discover and choose the most suitable compute hardware at runtime, while device selectors automate or customize that choice based on performance or capability needs.

### 43. 存储 Allocation Specifics
*原文标题：Memory Allocation Specifics*

### 44. 存储 Allocation 建模
*原文标题：Memory Allocation Model*

Memory management is a core part of SHWA, because heterogeneous computing often requires moving data between host (CPU) and device (GPU/FPGA/etc.). SHWA provides the following memory allocation model based on automatic movement.

Buffer-Accessor Model

Buffer manages memory automatically.

Data is copied between host and device when needed.

Accessed inside Kernels via Accessors.

Example:

auto range = ara::shwa::Range<bufferDimension>::Create(bufferSize);
auto buf = ara::shwa::Buffer::Create<int, 1>(range);

q.submit([&](ara::shwa::TaskHandler& h) {
    auto acc = ara::shwa::Accessor::Create<int, 1, ara::shwa::AccessMode::kWrite>(buf);
    h.ParallelFor(N, [=](ara::shwa::Id<1> i) {
        acc = i * 2;
    });
});

Pros: Simple, portable, runtime handles transfers.

Cons: Less explicit control, might introduce synchronization overhead.

### 45. Task Queuing And Ordering Specifics

### 46. Task Queuing Approach

SHWA provides mechanism for task queuing for execution on the device using Queue class. ara::shwa::Queue::Submit method provides possibility to submit kernel function for execution on the device.

### 47. Task Ordering Approach

Task Queuing can be ordered or unordered, dependent on created Queue type. For unordered Queue it's possible to syncronyze tasks execution using Event object and its ara::shwa::Event::Wait method.

NOTE: SHWA can guarantee only task submition order, but not order of tasks execution on device

Example:

auto event = q.submit([&](ara::shwa::TaskHandler& handler) {
    // task code
});

event.Wait();

ara::shwa::Event::Wait method allows to block main thread till task execution finish. There are also alternative methods ara::shwa::Event::Wait and ara::shwa::Event::WaitFor allowing to block main thread with dependency to other Events and perform time based block accordingly.

### 48. 功能性 Cluster Life-Cycle
*原文标题：Functional Cluster Life-Cycle*

Using ara::core::Initialize and ara::core::Deinitialize defined in , the Adaptive Application initializes and de-initializes all Functional Clusters with direct ARA interfaces (i.e. the Adaptive Platform Foundation).

The Safe Hardware Acceleration user is expected not to call any API of Safe Hardware Acceleration (directly or indirectly through other Functional Clusters) before initialization with ara::core::Initialize or after de-initialization with ara::core::Deinitialize, but Safe Hardware Acceleration needs to protect itself against such eventualities.

 Check for Initialization
  Upstream requirements:
⌈
ara::shwa::Buffer::Create, ara::shwa::Accessor::Create, ara::shwa::Queue::Create shall check whether they are called before ara::core::Initialize was called or after ara::core::Deinitialize was called by the Adaptive Application. If not, Safe Hardware Acceleration user shall handle this situation as a violation according to .
⌋

### 49. 启动
*原文标题：Startup*

There is no specific information about start up.

### 50. 关机
*原文标题：Shutdown*

Shutdown
  Upstream requirements:
⌈
When ara::core::Deinitialize is called, the Safe Hardware Acceleration shall implicitly ensure that all Buffers, Queues and Accessors were destructed. Afterwards, Safe Hardware Acceleration shall free remaining resources that are not exposed by objects held by the Safe Hardware Acceleration user.
⌋

### 51. Reporting

### 52. 安全事件
*原文标题：Security Events*

This functional cluster does not define any security events.

### 53. Log Messages

This functional cluster does not define any non-verbose log messages (i.e., modelled DLT messages).

### 54. Violation Messages

This section lists all violation messages (i.e., DLT messages logged for Violations according to ) defined by this functional cluster. Please note that concrete implementations might additionally implement Non-Standardized Violations (see also ).

### 55. CalledWhileUnititialized

Violation Message CalledWhileUnititializedViolation
  Upstream requirements:
⌈
| Dlt-Message | CalledWhileUnititializedViolation | < | < |
|---|---|---|---|
| Description | A named constructor or global function of the SHWA API was called before ara::core::Initialize. | < | < |
| MessageId | 0x80012fff | < | < |
| MessageTypeInfo | DLT_LOG_FATAL | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| modeledProcessId | Meta-model identifier of the process that caused the violation, i.e., its short name path with '/' as a separator | uint8 |  |
| location | An implementation-defined identifier of the location where the violation was detected, for example \\{filename}:\\{linenumber}. | uint8 |  |
| functionName | Affected function or method of the SHWA API. | uint8 |  |

⌋

### 56. Platform Specifics

### 57. Platform 管理 Approach
*原文标题：Platform Management Approach*

In SHWA Platform provides high-level representation of the underlying hardware and software environment. There could be more than one Platform available in the vehicle, so Platform provides method ara::shwa::Platform::GetPlatforms to get all available platforms. Platform has one or more Devices bind to it, but one Device can be bind on;y to one Platform.

Platform-Device can be described using next example:

|
     +-- Platform (Intel OpenCL)
| +-- Device: Intel CPU |
|---|
| +-- Device: Intel GPU |

     |
     +-- Platform (NVIDIA CUDA)
| +-- Device: GeForce RTX 3080 |
|---|

     |
     +-- Platform (AMD ROCm)
             +-- Device: Radeon RX 6800

### 58. Properties 管理 Specifics
*原文标题：Properties Management Specifics*

### 59. Properties 管理 Approach
*原文标题：Properties Management Approach*

Since SHWA implementation is widely dependent on underlying hardware and software environment, capabilities and specifics of actual hardware accelerators, SHWA PropertyList as opportunity of SHWA functionality adjustment and extension.

Some SHWA classes can get PropertyList as an input parameter to Create method, which will allow to adapt SHWA Object behavior according to vendor specific capabilities.

Particular Properties should be defined by vendor.

namespace property {
namespace queue {

     class EnableProfiling {
     public:
       EnableProfiling() = default;
     };

}; // device
}; // info

Class using PropertyList is obliged to have ara::shwa::Queue::HasProperty and ara::shwa::Queue::GetProperty methods defined. Than it's possible to check if property available for current object and get it.

auto q = ara::shwa::Queue::Create{
               device,
               errorHandler,
               PropertyList{
                    ara::shwa::property::queue::EnableProfiling{}
               }
          };

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 60. API 规范
*原文标题：API specification*

This chapter provides a reference of the APIs defined by this functional cluster. The API is described in the following chapters in tables. Table  explains the content that is described in such an API table.

| Kind: | Defines the kind of the declaration that this API table describes. The following values are supported: |
|---|---|

* class (Declaration of a class)
* function (Declaration of a member or non-member function)
* struct (Declaration of a structure)
* type alias (Declaration of a type alias)
* enumeration (Declaration of an enumeration)
| * variable (Declaration of a variable) | < |  |
|---|---|---|
| Port Interfaces: | States that the C++ API class is the related C++ API binding for the given modeled sub-class of PortInterface | < |
| Header File: | Defines the header file to be included according to | < |
| Forwarding Header File: | Defines the forwarding header file to be included according to | < |
| Scope: | Defines the scope that may be a C++ namespace (in case of a class or non-member function) or a class declaration (in case of a member) | < |
| Symbol: | C++ symbol name | < |
| Thread Safety: | Defines whether a function is thread-safe, not thread-safe, or conditional according to  and | < |
| Syntax: | Description of C++ sy |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 61. Header：ara/shwa/accessor.h
*原文标题：Header: ara/shwa/accessor.h*

Definition of Header File ara/shwa/accessor.h
  Upstream requirements:
⌈
| Kind: | Header File | < |
|---|---|---|
| Syntax: | ara/shwa/accessor.h | < |
| Description: | File contains classes and methods for accessing the data in the underlying buffers. | < |

⌋

### 62. Class：Accessor
*原文标题：Class: Accessor*

Definition of API class ara::shwa::Accessor
  Upstream requirements: ,
⌈
| Kind: | class | < |
|---|---|---|
| Header file: | #include "ara/shwa/accessor.h" | < |
| Forwarding header file: | #include "ara/shwa/shwa_fwd.h" | < |
| Scope: | namespace ara::shwa | < |
| Symbol: | Accessor | < |
| Syntax: | template <typename DataT, int Dimensions = 1, AccessMode AccessModeType = AccessMode::kRead, Target AccessTargetType = Target::kDevice, typename AllocatorT = BufferAllocator<std::remove_const_t<DataT>>> class Accessor final {...}; | < |
| Template param: | typename DataT | The type of the value that shall be accessed. |
| ^ | int Dimensions = 1 | Dimensions of the underlying data. |
| ^ | AccessMode AccessModeType = AccessMode::kRead | Type of the access to the underlying data. |
| ^ | Target AccessTargetType = Target::kDevice | Target type of the access to the underlying hardware. |
| ^ | typename AllocatorT = BufferAllocator<std::remove_const_t<DataT>> | Buffer memory allocator. |
| Description: | Accessor manages read and write access to allocated memory by Buffer. Designed as not copyable, since it's owning resources. Intended to be managed exclusively by std::unique_ptr, which may be moved. | < |

⌋

### 其余 108 章（内容从略，见纯文本全文）

63. Public Member 类型
64. Public Member Functions
65. Special Member Functions
66. Constructors
67. Member Functions
68. Header：ara/shwa/buffer.h
69. Class：Buffer
70. Public Member Functions
71. Special Member Functions
72. Constructors
73. Member Functions
74. Header：ara/shwa/device.h
75. Class：Device
76. Public Member Functions
77. Special Member Functions
78. Constructors
79. Member Functions
80. Header：ara/shwa/device_monitor.h
81. Class：DeviceMonitor
82. Private Member Functions
83. Special Member Functions
84. Constructors
85. Member Functions
86. Header：ara/shwa/device_selector.h
87. Class：AcceleratorSelector
88. Public Member Functions
89. Member Functions
90. Class：CpuSelector
91. Public Member Functions
92. Member Functions
93. Class：DeviceSelector
94. Public Member Functions
95. Special Member Functions
96. Member Functions
97. Class：GpuSelector
98. Public Member Functions
99. Member Functions
100. Header：ara/shwa/error_handler.h
101. Class：ErrorHandler
102. Public Member Functions
103. Special Member Functions
104. Constructors
105. Member Functions
106. Header：ara/shwa/event.h
107. Class：Event
108. Public Member Functions
109. Member Functions
110. Header：ara/shwa/id.h
111. Class：Id
112. Public Member Functions
113. Special Member Functions
114. Constructors
115. Member Functions
116. Header：ara/shwa/platform.h
117. Class：Platform
118. Private Member Functions
119. Special Member Functions
120. Constructors
121. Member Functions
122. Header：ara/shwa/property_list.h
123. Class：PropertyList
124. Public Member Functions
125. Constructors
126. Header：ara/shwa/queue.h
127. Class：Queue
128. Public Member Functions
129. Special Member Functions
130. Constructors
131. Member Functions
132. Header：ara/shwa/range.h
133. Class：Range
134. Public Member Functions
135. Special Member Functions
136. Constructors
137. Member Functions
138. Header：ara/shwa/shwa_enums.h
139. Non-Member 类型
140. Header：ara/shwa/shwa_error_domain.h
141. Non-Member 类型
142. Non-Member Functions
143. Other
144. Class：ShwaErrorDomain
145. Public Member 类型
146. Public Member Functions
147. Special Member Functions
148. Member Functions
149. Class：ShwaException
150. Public Member Functions
151. Constructors
152. Header：ara/shwa/task_handler.h
153. Class：TaskHandler
154. Public Member Functions
155. Member Functions
156. 服务接口
157. 配置
158. Default Values
159. Semantic Constraints
160. 附录
161. Mentioned 清单 Elements
162. Demands and constraints on Base 软件 (normative)
163. Platform Extension 接口 (normative)
164. History of Constraints and 规范 Items
165. Constraint and 规范 Item History of this document according to AUTOSAR Release yy-mm
166. Change History of this document according to AUTOSAR Release R25-11
167. Added 规范 Items in R25-11
168. Changed 规范 Items in R25-11
169. Deleted 规范 Items in R25-11
170. Not implemented 需求
