# Design guidelines for using parallel processing technologies on Adaptive Platform (`ParallelProcessingGuidelines`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 884 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_EXP_ParallelProcessingGuidelines_884\AUTOSAR_AP_EXP_ParallelProcessingGuidelines.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_EXP_ParallelProcessingGuidelines_884\AUTOSAR_AP_EXP_ParallelProcessingGuidelines.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_EXP_ParallelProcessingGuidelines_884\zzgen\AP_EXP_ParallelProcessingGuidelines.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. Contents

This document specifies the guidelines for using parallel processing technologies on the Adaptive Platform, or Parallel Processing Guidelines, in short.

The purpose of this document is to provide design guidelines for using parallel processing technologies on the Adaptive Platform. The focus is on software, especially the application layer including the services. General hardware discussions are also included to build the base for software.

### 3. Prereads

This document is one of the high-level conceptual documents of AUTOSAR.

Useful pre-reads are   .

### 4. Relationship to other AUTOSAR specifications

Refer to Contents and Prereads.

### 5. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Term | Description |
|---|---|
| ADAS | Autonomous Driving and Assistance System. |
| ARA | AUTOSAR Run-time for Applications. |
| SOA | Service-Oriented Architecture. |

The following technical terms used in this document are defined in the corresponding document mentioned in the table below.

| Term | Description |
|---|---|
| Machine | see  AUTOSAR Glossary |

### 6. 相关文档
*原文标题：Related Documentation*

### 7. 范围
*原文标题：Scope*

### 8. 定义 of parallel processing "technologies"
*原文标题：Definition of parallel processing "technologies"*

In this document, the meaning of parallel processing technologies is loosely defined. This is so on purpose, with hopes to provide design principles for parallel and related processing (see Distributed, concurrent, and parallel).

The term "parallel processing technologies" in this document, therefore, covers both hardware and software. In term of hardware, multicore, manycore, DFP (Data-Flow Processor), GPU (Graphical Processing Unit), FPGA (Field Programmable Gate Array), or alike; in terms of software, multi-thread programming, pragma based techniques like OpenMP, various template programming such as TBB, accelerator programming language like OpenCL, and even various message passing APIs like MPI that are not by themselves parallel processing technologies but are tightly related to. The technologies also include various tooling that assists in designing and implementing the parallel processing technologies into an Adaptive Platform based system.

It is not a purpose of this document to list all the existing parallel processing technologies, to explain what they are, nor to guide how to use the technologies themselves.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Audience

This specification is for multiple domains of Adaptive Platform related designers and developers, namely the system designer who decides hardware/software partitioning, hardware designer who design and/or select computing hardware resources, a software designer who design overall software system architecture, Adaptive Platform developers, and developers of Adaptive Platform services running on ARA.

Adaptive Application developers, on the other hand, who may not directly use parallel processing technologies and only design sequential, single-threaded application, may find this irrelevant, if his/her software architect follows the architectural design guideline described in this document. However, nowadays it is becoming difficult to write an application without some form of multi-thread programming, and it is likely to be more so in future, so essentially everyone concerned with Adaptive Platform is advised to reference this document.

### 10. Architectural 设计
*原文标题：Architectural design*

### 11. Background

### 12. Evolving parallel processing technologies

The parallel processing technologies are still rapidly evolving, both in hardware and software. In hardware, GPGPU (General Purpose GPU) is one of them but never the only one - various manycore processors, data flow processors, FPGA, and some dedicated accelerators are emerging, and it seems there are more to come, including the evolutions of these existing technologies.

The picture looks similar in software. Starting with the threading library offered by POSIX and C++ Standard libraries that the Adaptive Platform supports, and other threading libraries such as TBB, MTAPI, compiler directives based threading like OpenMP, accelerator programming language like OpenCL and CUDA® (proprietary), HLS compiler based FPGA programming, and various parallelization compilers/tools, such as graph or process network-based tools, which generally use threading underneath but technologically not limited to, and there are even model based parallelization tools that can take a Simulink® model as input. Also, there are various message passing APIs, like MPI, that often work along with these technologies.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Distributed, concurrent, and parallel

In most cases, AUTOSAR systems are distributed systems. A distributed system is concurrent, meaning multiple tasks are running at the same time. Each subsystem in the distributed system has some sort of processing elements, typically CPUs (but not necessarily) - therefore at the whole this is a multi-processor system, capable of both concurrent and parallel computing. Note that if the Adaptive Platform runs on a single-core processor Machine without any other computing elements, parallel processing is not possible, although concurrency still is, as OS provides the threading mechanism to switch processing (threads) triggered by some event.

Parallel processing may occur at different computing layers, from bit-level, instruction-level, thread-level, (and/or) task-level. The definition of "task-level" differs among computing models and methodologies. In AUTOSAR Adaptive Platform software point of view, however, parallel processing strictly applies either on thread-level, process level, or on Machine (platform) level.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. TLP/DLP/PLP

In general, there are three types of parallel processing: Task Level Parallelism (TLP), Data Level Parallelism (DLP), and Pipeline Level Parallelism (PLP). The TLP refers performing multiple tasks at the same time as they are (mostly) independent and (mostly) do not depend on each other. DLP refers to performing the same calculation with multiple, (mostly) non-interdependent sets of (large) data. The same calculation is multiplexed with the different set of data. PLP refers to executing multiple inter-dependent tasks in a pipeline fashion. Each task is assigned to a pipeline stage according to the data dependency of the task input/output.

The three types of parallelism exist in multiple layers of the system. There can be system level parallelism, like two Adaptive Platform machines may have TLP or even PLP. Another example may be that multiple-camera-based 360-degree real-time object recognition may be realized by multiple Adaptive Platform machines performing DLP against a large data set of (virtual) vehicle surrounding video image.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Service-based parallel processing

With the background provided in , the key concept of this guideline is to utilize the SOA of Adaptive Platform. That is, to push the use of parallel processing technologies underneath non-platform services, leaving the Adaptive Application free from the various parallel processing technologies used. The service 'implementation', on the other hand, will be specific to the choice of parallel processing technologies used. We call this model of parallel processing as " Service-based parallel processing".

This model allows the maximum reuse of Adaptive Application that requires high-performance computing in realizing its functionality. The heavy lifting part will be separated into non-platform services, and the implementation of services are free to utilize the full capability of the parallel processing technologies of choice, provided they conform to the safety/security requirements of the project.

### 16. Layered architectural 视图
*原文标题：Layered architectural view*

Figure  illustrates the overall architecture of the service-based parallel processing. The example is based on some ADAS domain application, but it is not the intention to limit the domain in any way.

The overall picture shows the producers and consumers of various parallel processing services, in a top-down layered fashion.

The Adaptive Application layer is the Adaptive Application that uses various services. The Adaptive Application does (or should) not know which of the services it is using uses parallel processing underneath.

The Service layer, in the context of this guideline, consists of the services which use parallel processing technologies. There are non-platform services that use ara::com. They provide C++ interface library generated from the service definition, which is used by the Adaptive Application. Note that these services may very well use other services internally. One example is that one may design a pre-processing or low-level sensing service, and a meta-data provider service that uses the output of the former service.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Accelerator-model

The Parallel processing library/languages layer interacts with the parallel processing hardware in different ways. There are two general models. One is accelerator-model, where the parallel processing library/language calls underneath some form of device drivers that directly controls the parallel processing hardware. The device driver, depending upon the design of OS used, maybe another process or some form of kernel module that executes in the context of OS kernel. The examples of this accelerator model include OpenCL/CUDA, OpenVX, etc. Figure  shows the combined process and physical architectural views for OpenCL based parallel processing.

### 18. CPU/co-processor-model

The other model is CPU/co-processor-model, where the parallel processing is executed directly by the CPUs with or without co-processor support. The most popular example is a threading model, which uses multiple POSIX threads to parallelize the processing. This can be fully handwritten, directive-based like OpenMP, or use some other vendor specific semi/full parallelization compiler technologies. Furthermore, there may be support for utilizing the specialized co-processor instructions, also may be manual or semi-automatic. Figure  shows the combined process and physical architectural views for threading-based (like POSIX threads) parallel processing.

### 19. Rationale：decoupling of parallel processing specific knowledge from application development
*原文标题：Rationale: decoupling of parallel processing specific knowledge from application development*

Understanding the specifics of non-general computing hardware requires specific skills. As previously mentioned, the parallel processing technologies are still actively being developed and evolving, it is hard at the best to understand all these. Some standardization effort, such as OpenCL, aims to ease this problem by setting up a hardware independent API set. However, in order to cover various types of hardware and also to fully exploit the hardware features for best performance, the OpenCL, in general, is very low-level API, essentially requiring the similar level of detailed hardware level knowledge.

Our proposed model of Service-based parallel processing decouples the required knowledge of parallel processing hardware from Adaptive Application developers via Adaptive Platform service interfaces. This frees the Adaptive Application developers from acquiring the specific hardware knowledge every time a new, more efficient, or more suitable hardware is introduced, and also allows the system designer to do so if that the introduction of such hardware yields better system design.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Adaptive Platform methodology consideration

Service-based parallel processing approach will not introduce any new Adaptive Platform methodology. It uses already defined service interface description to define the services.

### 21. Non-functional 设计 topics
*原文标题：Non-functional design topics*

### 22. Performance

One of the primary purposes of using parallel processing is to achieve higher performance. Since "Service-based parallel processing" utilizes the SOA of Adaptive Platform, the general performance-related design techniques also apply.

### 23. 接口 granularity and communication overhead
*原文标题：Interface granularity and communication overhead*

The granularity of interface is the size of operation unit per API. If the granularity is small, the service has many API. The finer the granularity is, the more flexible the service is in general, because it will allow the different application to optimize its usage.

In SOA, increasing the granularity will increase the communication between the client and server in general. Caching mechanisms may circumvent that problem. However, in a real-time system such as Adaptive Platform, caching, depending on the architecture and implementation increases non-determinism, thus not a convenient choice.

In the Adaptive Platform, there are two possible approaches to minimize the communication overhead of services. One is to make the service interface as coarse as possible, especially for the interface that has a high frequency in its usage. For example, instead of providing an interface only for processing one datum, providing another interface for processing a batch of data at a time is recommended. The other approach is to optimize at the service interface library.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 数据处理 and throughput balancing
*原文标题：Data handling and throughput balancing*

The overhead of moving very large data is costly. This is especially true if a lot of coping of data occurs. Often, parallel processing is used to perform processing a large amount of data, and this is often performed against a stream of data, constituting a data-flow processing. It is therefore essential to design the whole chain of data flow, from a data-generating device, a device driver, a primary server to process the raw data, a secondary server to work on the primary server output, then finally an Adaptive Application that uses the result of the secondary server. One typical design to achieve the highest throughput is to have all these components forming PLP, each component forming a stage of a pipeline. For the servers that perform heavy computation, DLP and/or PLP is employed. The data that flows between the components have to be propagated in an efficient manner, avoiding copying of the data where possible.

### 25. Safety considerations

Safety is a system design topic. One of the typical issues is that the parallel processing hardware technology does not satisfy ASIL-D but only up to ASIL-B. The software can be developed based on ASIL-D practices but as the hardware is only capable of ASIL-B, as a whole it cannot achieve ASIL-D. The required ASIL for a "subsystem" depends on the system functionality it provides - e.g. parallel processing subsystem is used for ASIL-B system functionality, which computation result is safety-checked by ASIL-D subsystem. Or, one can go duplicate ASIL-B subsystem to achieve ASIL-D (though it may be expensive). The design guidelines for system design to achieve overall functional safety requirements are out of the scope of this document.

### 26. Prospects

This guideline, especially the parallel processing hidden under the service model, should be capable of surviving a long time to come, due to the intrinsic decoupling. There are two areas with foreseeable advancement in future; (1) Adaptive Platform standard application services and (2) more parallel processing directly within Adaptive Application.

### 27. Adaptive Platform standard application 服务
*原文标题：Adaptive Platform standard application services*

It should be reasonable for one to expect such application services that use parallel processing technologies to be standardized by the Adaptive Platform. This indeed will not occur immediately, nor all services at once - however, even incremental introduction of such services should help both the providers of parallel processing technologies and also users of such. Higher level API standardization, that uses parallel processing technologies underneath, are already emerging in some areas, such as OpenVX.

### 28. More parallel processing within Adaptive Application

Following the service-based parallel processing design, Adaptive Application will use multiple services in parallel. As the number of services grows and if the Adaptive Application remains single-threaded, then the Adaptive Application itself can be a bottleneck in the whole processing chain. This will call for more parallel processing within Adaptive Application eventually. The Adaptive Platform already provides threading APIs of currently supported C++ standard and POSIX APIs, however, this may not be sufficient.

AUTOSAR Adaptive Platform adopts the C++ standard, along with the CPP Coding Guidelines to use the language with safety and security in mind. The C++ standard is incrementally introducing parallel processing. The most of both open source and commercial compilers support the standard and widely used in the industry. Therefore, it is foreseeable and perhaps promising to introduce more parallel processing technologies as the C++ standard progresses. One potentially promising standard is SYCL, as it is purely based on standard C++ with template libraries to implement parallel processing, part of it being introduced in C++17.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。
