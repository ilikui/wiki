# Explanation of ARA Applications in Rust (`ARARustApplications`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 1079 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_EXP_ARARustApplications_1079\AUTOSAR_AP_EXP_ARARustApplications.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_EXP_ARARustApplications_1079\AUTOSAR_AP_EXP_ARARustApplications.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_EXP_ARARustApplications_1079\zzgen\AP_EXP_ARARustApplications.complete.txt`

## 文档简介

This document introduces the current proposal for a programmer's interface to write AUTOSAR Adaptive applications in the Rust programming language. This API was created within the AUTOSAR Rust working group.

The target audience of this document is application developers who want to write Adaptive applications in the Rust programming language. Some level of familiarity with Adaptive AUTOSAR concepts and its C++ application programmer interface is assumed.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This document introduces the current proposal for a programmer's interface to write AUTOSAR Adaptive applications in the Rust programming language. This API was created within the AUTOSAR Rust working group.

The target audience of this document is application developers who want to write Adaptive applications in the Rust programming language. Some level of familiarity with Adaptive AUTOSAR concepts and its C++ application programmer interface is assumed.

### 2. Motivation

Challenges of C++ usage for automotive like memory management complexity, multithreading complexity, default copying semantics, absence of out-of-range detection motivate us to introduce AUTOSAR Adaptive Rust binding. Its purpose is to utilize Rust advantages for AUTOSAR Adaptive platform usage and potential future structural changes.

Rust is a relatively recent programming language with modern tooling. It is convenient, fast-growing and understandable for C++ developers. It brings improvements in many areas that have traditionally been hard to manage in C++. Rust also has advanced compile time checking which can prevent whole categories of common but non-trivial errors in code.

### 3. Rust Binding Advantages

The introduction of Rust aims to address the following challenges with C++:

| Use cases | C++ approach | Rust approach |
|---|---|---|
| Language design focus | Speed and maximum flexibility | Correctness with good enough speed |
| Memory management | Speed-optimized manual memory management | Formalized ownership based memory management, checked at compile time |
| Data protection for multithreaded application | Association between critical sections and data by documentation, checked by runtime instrumentation | Send and Sync restrict thread local and concurrent access, checked at compile time |
| Object semantics | Objects are copied by default, aliasing between pointers | Objects are moved by default, read-write interference is prevented across modules |
| Out of range detection for array-like data type | No boundary check by default. Checking bounds is the more verbose variant. | Always checked at compile or runtime, unchecked access is verbose and requires careful review |
| Object initialization | Initialization checked by static analyzers | Object initialization required by compiler |
| Modules | Introduced in C++20 | Modules are a core language feature. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Binding Methodology

Despite availability of several Rust binding generators, we introduce manually implemented Rust bindings for AUTOSAR Adaptive APIs to provide community agreed and reviewed bindings, and also avoid inconsistency of automated data types conversion between languages. This approach may change in the future as Rust binding generators become more feature rich and production ready. In our Rust binding methodology, we would like to utilize the best of both worlds, top-down (package design drives implementation) design and bottom-up (interface implementation leads to usable packages structure) to introduce Rust bindings that will be easy to understand, fast to adapt to new projects and minimize incorrect usage cases.

### 5. Layered 架构
*原文标题：Layered architecture*

Starting with a simple application, omitting ARXML generated code for now, we see that Rust application support needs numerous layers. The Rust API adapter can't directly talk to the AUTOSAR C++ API, because there is no common binary interoperability between Rust and C++ objects. A language independent binary interface, an ABI, is needed.

One option for a future option to define this interface for multiple languages at once.] is to define this interface with C compatible data types and calling conventions, because the standardized binary interface for the language C is accessible from both C++ and Rust. The current implementation defines this interface on the Rust side and uses cbindgen to generate C(++) headers used by the C++ adapter.

Please note that there exists no C code for this purpose, it merely uses the C compatible subset of Rust and C++ to interoperate.

| Rust Application | < |
|---|---|
| AUTOSAR Rust API | Rust standard library |
| AUTOSAR Rust adapter | ^ |
| Language neutral binary interface (ABI) | ^ |
| Language neutral to C++ adapter | ^ |
| AUTOSAR C++ API | ^ |
| AUTOSAR C++ stack | ^ |
| POSIX PSE51 API | < |
| Operating system | < |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

Acronyms and abbreviations which have a local scope and therefore are not contained in the AUTOSAR Glossary :

### 7. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| ABI | Application Binary Interface |
| ANSSI | Agence nationale de la sécurité des systèmes d'information |
| APD | Adaptive Platform Demonstrator |
| API | Application Programming Interface |
| ARA | AUTOSAR Adaptive (Platform) |
| FFI | Foreign Function Interface |
| I/O | Input/Output |
| MDG | Model Driven Generation |
| SDK | Software Development Kit |
| TDD | Test Driven Development |
| UML | Unified Modeling Language |

Note: ABI and API are easily confused.

### 8. 定义 of terms
*原文标题：Definition of terms*

Definition of terms which are not self-explaining and are needed to understand the explanations in this document.

| Terms: | Description: |
|---|---|
| async | asynchronous |
| impl | implementation |

### 9. 相关文档
*原文标题：Related Documentation*

### 10. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

Programming rules for secure applications by ANSSI  High Assurance Rust standard  SAE International good practices  Qualified toolchain for Functional Safety and matching specification

### 11. Rust language tutorials

This chapter first introduces the Rust programming language and then the more recently standardized asynchronous Rust used for the AUTOSAR binding. Asynchronous Rust is equivalent to co_await in modern C++.

Rust is a complex multi-paradigm programming language. While it might take a while to learn it compared to Python or Swift, it pays off when designing large-scale projects with high stability and security requirements. There is a number of free books and tutorials available on the Internet:

* The official documentation
* A good free course
* C and C++ developers might find a lot of familiar concepts like manual memory management, RAII, destructors. They can read  and  to speed up the learning process.
* The Rust cheat sheet

### 12. Tool installation

We recommend using the version of the toolchain (rustc/cargo) included in the Rust-enabled ARA SDK. See  for the details.

### 13. Which Advanced Rust 概念 to know
*原文标题：Which Advanced Rust concepts to know*

The Rust binding to AUTOSAR Adaptive uses asynchronous programming to minimize the number of necessary threads and context switches. So Asynchronous Rust is an advanced topic end users should be familiar with.

### 14. Asynchronous Rust：futures, streams, tasks
*原文标题：Asynchronous Rust: futures, streams, tasks*

The main source of information about asynchronous Rust is . Here is a short overview of its features.

While the identically named C++ feature std::async is typically based on a thread pool, Rust's async is the equivalent to C++-20's co_await.

Using the AUTOSAR specific ara::core::Future::then extension to the C++ std::future already reduces context switches and is more efficient than a blocking method invocation, but also reduces readability by introducing nested callbacks. Coroutines, like co_await and async Rust functions, can re-linearize this callback code again.

Diagram  shows how the state machine represented in the Future data structure enables async functions remember their state. So in a way which maintains source-code readability, async automatically resumes execution at the last wait point across invocations of poll until the function finally returns a value.

Since its introduction to Rust in 2018 async became a commonly taught and used language feature. It also showed unique performance advantages in microcontroller environments (see ), which looks promising in context of future AUTOSAR Classic Rust bindings.

### 15. Async operations and executors

Rust supports asynchronous operations to allow time-consuming operations like I/O interactions (network, files) or procedures dependent on waiting for external events to perform without blocking program execution. Async operations rely on an executor, which polls asynchronous operation result to check if progress could be made or if the whole operation has finished.

There are four main Rust packages implementing async executors and features for async operations:

* tokio
* async-std
* smol
* embassy

tokio and async-std are the most popular, general-purpose runtimes providing well developed tools for asynchronous and concurrent operations like Future bookkeeping, task scheduling, I/O operations and inter-task synchronization. tokio seems to be more mature and stable. It also covers more features like select for concurrency, however async-std appears to be faster, so a choice between the two depends on importance of high performance.

smol is set of basic async packages made in a way to improve speed and space efficiency.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. The Future trait

The Executor's polling entry point and indicator for the state of the asynchronous operation is a concept called a Future. A Future represents an operation that may not have produced its value yet. This kind of "asynchronous value" makes it possible for a thread to continue doing useful work while it waits for the value to become available. The core method of Future, poll, attempts to resolve the Future into a final value. This method does not block if the value is not ready. Instead, the current operation is scheduled to be woken up when it's possible to make further progress by polling again. The context passed to the poll method can provide a Waker, which is a handle for waking up the current task.

fn poll(self: Pin<&mut Self>, cx: &mut Context) -> Poll<Self::Output>

This function returns:

Poll::Pending if the Future is not ready yet Poll::Ready(val) with the result val of this Future if it has finished successfully.

Futures alone are inert; they must be actively polled to make progress, meaning that each time the current operation is woken up, it should actively re-poll pending Futures that it still has an interest in.

Example:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Tasks

Inside an async executor we can spawn tasks, which are concurrent units of execution with their own context. Unlike threads, tasks are handled inside executor thread, where they are polled and managed (without creating/switching threads). Spawning tasks is available for each listed packages, in similar manner:

handler = tokio::spawn(async{
//async closure
});

or

handler = async_std::task::spawn(async{
//async closure
});

Tasks have to be spawned in the context of an executor, and produce Futures which then get polled by the executor.

### 18. Main 功能 usage
*原文标题：Main function usage*

The life-cycle of an asynchronous Rust application starts by first creating the async executor instance and having it run a top-level task to completion in a blocking manner. This top-level task can only complete when all of its arbitrarily nested sub-tasks have also completed. The common way is to do this in the main function.

Tokio example:

fn main() {
let runtime = tokio::runtime::Runtime::new();
runtime.block(async {
    //asynchronous operations
    });
}

For convenience, we can use a macro to create an equivalent structure with simplified code:

#
async fn main() {
    //asynchronous operations
}

Similar declarations could be done for the other packages.

### 19. I/O operations

Async allows for the continuation of program execution during time-consuming external operations like network communication or file read/write. All async runtime packages implement functions to interact with I/O in a non-blocking way.

For example async accessing a file:

#
async fn main() -> io::Result<()> {
    let mut f = File::open("foo.txt").await?;
}

These packages also include features to simplify performing async read/write operations, especially when we have multiple connections assigned to multiple tasks, and all of them could perform reads and/or writes in parallel.

let socket = TcpStream::connect("127.0.0.1:6142").await?;
let (mut rd, mut wr) = io::split(socket);

// Write data in the background
tokio::spawn(async move {
    wr.write_all(b"hello\r\n").await?;
    wr.write_all(b"world\r\n").await?;
})?;

and somewhere else:

loop {
    let n = rd.read(&mut buf).await?
}

### 20. Streams

A stream is an asynchronous series of values. It is the asynchronous equivalent to Rust's std::iter::Iterator and is represented by the Stream trait. Streams can be iterated in async functions. They can also be transformed using adapters. Currently, the Rust programming language does not support async for loops. Instead, iterating streams is done using a while let loop paired with StreamExt::next().

use tokio_stream::StreamExt;

#
async fn main() {
    let mut stream = tokio_stream::iter(&);

    while let Some(v) = stream.next().await {
        println!("GOT = {:?}", v);
    }
}

### 21. 同步
*原文标题：Synchronization*

All async runtime packages provide methods for asynchronous resource sharing and inter-task communication similar to multithreading features (async mutex guards and channels).

Channel communication creates transmitter and receiver (producer and consumer) to exchange data between tasks. Channels can have a single producer and multiple consumers, multiple producers and a single consumer, or be broadcast. Receiver tasks wait asynchronously for messages to pass. Example:

use tokio::sync::mpsc;

async fn some_computation(input: u32) -> String {
    format!("the result of computation {}", input)
}

#
async fn main() {
    let (tx, mut rx) = mpsc::channel(100);

    tokio::spawn(async move {
        for i in 0..10 {
            let res = some_computation(i).await;
            tx.send(res).await.unwrap();
        }
    });

    while let Some(res) = rx.recv().await {
        println!("got = {}", res);
    }
}

Mutexes could also be used for task synchronization. However, a locked async mutex will yield context of the task and not block the thread. Example:

async fn main() {
    let data1 = Arc::new(Mutex::new(0));
    let data2 = Arc::clone(&data1);

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Tour of AUTOSAR with Rust

This chapter explains the Adaptive Platform Rust binding for applications.

Section  describes some higher level concepts of the API, section  points to the existing examples and documentation, sections  to  guide through adaptive Rust application code, starting at the basic APIs, then introducing ara::com and finally creating a new ErrorDomain.

### 23. AUTOSAR Rust API 概述
*原文标题：AUTOSAR Rust API overview*

The Adaptive Platform Rust binding is an example of integrating Rust-based applications into Adaptive AUTOSAR ecosystem (APD in this particular case). It can be used to develop AUTOSAR applications in Rust, which could bring enhanced memory safety combined with high performance and modern high-level abstractions. It may prove especially useful when building data processing, network protocols, command line interfaces, security applications or virtually any long-running services with high requirements towards robustness, memory footprint, and availability. Also, it is possible to port existing ARA-based applications to Rust, as it was done with radar and fusion sample applications.

The Rust binding grants access to the most important parts of ARA API, such as:

* Core Types: String, Result, etc.
* Execution Management
* Logging
* Communication

Other clusters could also be added in the future upon request.

The Rust API mostly resembles the existing the C++ counterpart while following Rust best practices. The resulting applications can communicate with other AUTOSAR services by means of ARA Communication API. In , API documentation generation is explained in details.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Finding the 示例代码
*原文标题：Finding the example code*

The AUTOSAR Adaptive Demonstrator examples have a rust subfolder. Within this folder there is the ara folder containing the Rust adapter for AUTOSAR Adaptive APIs, an examples folder containing several example applications and a UML folder containing styles for Enterprise Architect. Each of these Rust folders have C++ and Rust sources built with CMake and cargo respectively. (cpp and src folders.)

### 25. Generating the latest documentation

Rust libraries are typically documented within the source code similarly to doxygen tool for C++. To generate documentation for the ara package navigate to the ara subfolder and run

cargo doc --no-deps --open

Here creating the documentation for dependencies is skipped and the generated documentation is opened in a web browser.

### 26. Minimal 示例
*原文标题：Minimal example*

First, let's install a Rust-enabled version AUTOSAR Adaptive SDK a.k.a. ARA SDK. Here we'll assume it's installed to the directory /opt/sdk. Next, we need to initialize the SDK by running:

source /opt/sdk/environment*

Also, there is an optional dependency on the clang-format that formats the C++ source code. If it is not installed, the generated C++ code will be left unformatted. It can be set up by means of the packet manager of the development machine. For instance, Ubuntu users could use the following command:

sudo apt install clang-format

Executing cargo new project_name will start a new Rust project. Let's name it fusion_test. Then, let's add the ara and log dependencies:

log = "0.4.17"

version = "0.1.0"
path = "/opt/sdk/sysroots/core2-32-poky-linux/usr/local/src/ara_rust"

Here, core2-32-poky-linux is the target system root directory of a 32-bit Intel i686 version of the SDK. It will be different for other targets. You can identify it by looking up the SDKTARGETSYSROOT environment variable, e.g., echo $SDKTARGETSYSROOT.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Writing a simple ara：：com client
*原文标题：Writing a simple ara::com client*

In order to communicate with other APD programs, an application is supposed to have ARXML configuration and be integrated into the APD machine configuration. In our case, the easiest option is to simply reuse the configuration of one of existing example applications. The SDK includes a tool called aragen-rs generating Rust projects out of ARA COM wrappers for a particular APD application. Let's generate one for the fusion application:

cd path/to/fusion_test
aragen-rs --app fusion -m RadarFusionMachine

This will create a new project fusion_gen containing a Rust package and a C++/CMake shared library project wrapping the fusion service API. Let's build it:

cd fusion_gen
./build.sh

After that, we will be able to link it to our example project. First, fusion_gen and futures dependencies should be added to Cargo.toml. Also,  path should now point the symlink ara inside the fusion_gen folder:

futures = "0.3.21"
fusion_gen = { version = "0.1.0", path = "fusion_gen" }
...

version = "0.1.0"
path = "fusion_gen/ara"

Now we can implement the client code.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Implementing an ara：：com 服务
*原文标题：Implementing an ara::com service*

Services react to method calls and send events.

First, we'll need to create another Cargo project (see the previous sections) named radar_test. Next, we need to generate a communication project (see the section above for details):

cd path/to/radar_test
aragen-rs --app radar -m RadarFusionMachine

This will create a new project radar_gen containig a Rust package and a C++ shared library interfacing the radar service API. Let's build it:

cd radar_gen
./build.sh

Having done that, we can link it to our example project. First, radar_gen should be added to Cargo.toml. Also, the path to ara package must be updated:

log = "0.4.17"
async-trait = "0.1.56"
radar_gen = { version = "0.1.0", path = "radar_gen" }
ara = { version = "0.1.0", path = "radar_gen/ara" }
...

Now we can start writing the service code. To implement methods, let's create an object implementing the skeleton trait:

use radar_gen::radar_skeleton;
use async_trait::async_trait;
use radar_gen::types::{
    radar::{AdjustOutput, CalibrateOutput},
    FusionVariant, Position,
};

struct RadarImp { /* member variables */ }

impl RadarImp {
    fn new() -> Self {
        Self { /* member variables */ }
    }
}

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Creating a new ErrorDomain

An ErrorDomain is a collection of error codes (usually in the form of an enum) offering conversion into human-readable text. To create an ErrorDomain, we require a unique domain identifier, which is typically centrally assigned during the vehicle design stage.

To turn an enum into an ErrorDomain, we simply implement the ErrorDomain trait for it. This makes it suitable for generating ErrorCode objects, which is the error type used all across AUTOSAR Adaptive.

use ara::c_string_ptr;
use std::sync::Mutex;
use ara::core::ErrorCode;
use once_cell::sync::Lazy;

#
#
pub(crate) enum MyErrorDomain {
    NoInstanceFound,
}

impl ara::core::ErrorDomain for MyErrorDomain {
    type CodeType = MyErrorDomain;
    extern "C" fn name() -> *const u8 {
        c_string_ptr!("MyErrorDomain")
    }
    extern "C" fn message(elem: i32) -> *const u8 {
        match MyErrorDomain::from_repr(elem) {
            Some(MyErrorDomain::NoInstanceFound) => {
                c_string_ptr!("No Radar instance found")
            }
            None => c_string_ptr!("unknown"),
        }
    }
    fn id() -> u64 {
        // This number is assigned on a vehicle level
        1234
    }
}

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. In depth discussion

This chapter briefly describes the internal adapter layers between the Rust application and the C++ stack.

Chapter  describes why a C interface is needed, chapter  describes the basic C interface types, chapter  describes the logic of the Rust to C layer, chapter  describes the ARMXL generated C interface, chapter  discusses program start and termination, chapter  discusses documenting Rust code with UML and chapter  explains ownership, lifetime and event timing.

### 31. Application linking

Currently, Rust projects that interact with C++ can utilize the cxx package. However, in our case, it would be really complicated since we have 2 different C++ runtimes involved: Rust is LLVM based while ARA API is build with gcc. This creates an ABI incompatibility issue, which was sorted out by introducing a C API isolation layer in between. Consequently, Rust applications link to the C++ shared libraries: libara_rust.so for general ARA API wrappers and application-specific *_gen.so ARA COM wrappers generated by the aragen-rs tool, see . The C++ code building is managed by CMake and is similar to C++ APD applications. Linking is done by the SDK-provided linker.

### 32. Foreign 功能接口类型
*原文标题：Foreign Function Interface types*

This section presents the C structures which are used by both Rust and C++ for interoperability. They are defined in Rust code and then exported to C headers by cbindgen.

Wrapping a C++ type requires understanding its lifetime. If it is a read-only reference to a long living object, just passing the const pointer to a Rust object will do.

If a complex result of a function needs to be passed to Rust, a constant size object could be wrapped in a C struct and variable size objects need to be allocated on the heap requiring a destructor to be called on Drop.

* ErrorCode is of a constant size and typically part of Result
* ResultWrapper wraps the Result generic. It may contain either an ErrorCode or a Value, which has to be referenced from heap as the size is instantiation specific. If obj is nullptr, then the object contains an Error, i.e. HasValue() is false. There is a static dummy_object used for ara::core::Result. If this object is created on the Rust side, the obj pointer will be invalid if nonzero and require correction before use (as the object is directly stored in the ResultWrapper). This works around the missing stable interface to the Pin objects on the stack.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Rust to C++

Callbacks offered towards C++ need to be qualified as extern "C". If you pass objects to the callback, Box::into_raw is the most elegant way to send an object via a C callback.

If the value and callback need to be used multiple times (e.g. event reception), the receiver/callback has to access the Box via pointer. Also, the surrounding infrastructure has to destroy the Box pointer after the last callback was made. For asynchronous waiting, mpsc channels and StreamExt::next() work well.

If the callback is known to happen exactly once (e.g. find_service or method invocation), the callback can use Box::from_raw to access it. It would have to free the allocated Box. For asynchronous waiting, oneshot channels provide a good solution.

### 34. ara：：com binding generation
*原文标题：ara::com binding generation*

Each AUTOSAR Adaptive application is described in the ARXML format being part of an AUTOSAR Machine. The Communication wrappers (a C++ library and a Rust package) are generated by the aragen-rs command line tool, which is part of the SDK. It reads the ARXML configuration of a specified machine and generates all necessary glue code for a particular application. The primary source of ARXML configuration is the current SDK, which must be initialized beforehand, see . It also supports external ARXML sources (i.e. not a part of the SDK) including the whole machine configurations.

It is recommended to place the generated project inside the folder of the application using it. An example of how to link it is provided in .

### 35. Proxy 代码
*原文标题：Proxy code*

To get the function name, replace SVC with the name of a service, MTD with the name of a method, EVT with the name of an event, and FLD with a field name.

### 36. C++ side

The interface between the Rust and C++ side uses the following functions:

* `SVC_proxy_StartFindService_` starts the search for a service; its arguments consist of the search parameters, a callback on changes to the list, and opaque user data. Generated for each proxy type.
* `SVC_proxy_StopFindService` stops a running service search (for FindService)
* call_MTD One function per method; arguments consist of proxy, the arguments to the method, plus a callback on completion and user_data
* subscribe_EVT registers a callback passing ownership of the sample pointer to Rust
* unsubscribe_EVT unregisters a registered event callback
* get_FLD requests the value of FLD
* set_FLD modifies the value of FLD

### 37. Rust side

The service discovery function creates an oneshot channel, calls StartFindService with proper parameters, and waits on the channel. The callback will call StopFindService and send the discovered service to the waiting task via the channel.

A Proxy offers member functions for event access, field access/manipulation, and method invocation.

An event is referenced via an Event structure which provides a subscribe method. Subscribing for an event creates an mpsc (MultiPublisherSingleConsumer) channel, which provides a Stream to read from. A callback is registered to forward received OwnedSamplePtrs to the channel. A subscription is kept alive by the handle object returned by a subscribe_ call: dropping the object would automatically unsubscribe the client code from the event.

A field is accessed via the accessor methods of the Field structure. Depending on the field specification, it can support setting, getting, and subscription to field updates. Similarly to events, field subscription produces a subscription handle unsubscribing the client from the field updates upon dropping it.

A method is simply invoked by calling the matching method of the Proxy.

### 其余 21 章（内容从略，见纯文本全文）

38. Skeleton 代码
39. C++ side
40. Rust side
41. Application lifecycle
42. UML and Rust
43. 模块
44. Struct
45. Enumeration
46. 类型 alias
47. Traits and impl blocks
48. Generics
49. Advanced 概念
50. Ownership
51. Structured concurrency
52. Detailed event 处理
53. Recommend further readings
54. Recommended
55. Outlook
56. WebAssembly 接口类型
57. 附录
58. 附录
