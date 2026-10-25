# Explanation of Adaptive Platform Design (`PlatformDesign`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 706 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_EXP_PlatformDesign_706\AUTOSAR_AP_EXP_PlatformDesign.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_EXP_PlatformDesign_706\AUTOSAR_AP_EXP_PlatformDesign.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_EXP_PlatformDesign_706\zzgen\AP_EXP_PlatformDesign.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. Contents

This specification describes the AUTOSAR Adaptive Platform (AP) design. The purpose of this document is to provide an overview of AP but is not to detail all the elements of AP design. It is to provide the overall design of the AP and key concepts for both AP users and AP implementers.

The document is organized as follows. It starts with Technical Scope and Approach to provide some background of AP, followed by Architecture describing both logical and physical views of AP. Independent chapters of Methodology and Manifest and all Functional Clusters follow, which are the units of functionalities of AP, each containing its overview and introductions to their key concepts.

The detailed specification and discussions on the explained concepts are defined in the relevant RS, SWS, TR and EXP documents.

### 3. Prereads

This document is one of the high-level conceptual documents of AUTOSAR. Useful pre-reads are  and .

### 4. Relationship to other AUTOSAR specifications

The detailed specification and discussions on the explained concepts are defined in the relevant RS, SWS, TR and EXP documents. A detailed technical architecture documentation of the AUTOSAR Adaptive Platform is provided in .

### 5. 相关文档
*原文标题：Related Documentation*

### 6. Technical 范围 and Approach
*原文标题：Technical Scope and Approach*

### 7. 概述 - a landscape of intelligent ECUs
*原文标题：Overview - a landscape of intelligent ECUs*

Traditionally ECUs mainly implement functionality that replaces or augments electro-mechanical systems. Software in those deeply-embedded ECUs controls electrical output signals based on input signals and information from other ECUs connected to the vehicle network. Much of the control software is designed and implemented for the target vehicle and does not change significantly during vehicle lifetime.

New vehicle functions, such as highly automated driving, will introduce highly complex and computing resource demanding software into the vehicles and must fulfill strict integrity and security requirements. Such software realizes functions, such as environment perception and behavior planning, and integrates the vehicle into external backend and infrastructure systems. The software in the vehicle needs to be updated during the lifecycle of the vehicle, due to evolving external systems or improved functionality.

The AUTOSAR Classic Platform (CP) standard addresses the needs of deeply-embedded ECUs, while the needs of ECUs described above cannot be fulfilled. Therefore, AUTOSAR specifies a second software platform, the AUTOSAR Adaptive Platform (AP).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Technology Drivers

There are two major groups of technology drivers behind. One is Ethernet, and the other is processors.

The ever-increasing bandwidth requirement of the on-vehicle network has led to the introduction of Ethernet, that offers higher bandwidth and with switched networks, enabling the more efficient transfer of long messages, point-to-point communications, among others, compared to the legacy in-vehicle communication technologies such as CAN. The CP, although it supports Ethernet, is primarily designed for the legacy communication technologies, and it has been optimized for such, and it is difficult to fully utilize and benefit from the capability of Ethernet-based communications.

Similarly, performance requirements for processors have grown tremendously in recent years as vehicles are becoming even more intelligent. Multicore processors are already in use with CP, but the needs for the processing power calls for more than multicore. Manycore processors with tens to hundreds of cores, GPGPU (General Purpose use of GPU), FPGA, and dedicated accelerators are emerging, as these offer orders of magnitudes higher performance than the conventional MCUs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Adaptive Platform - Characteristics

The characteristic of AP is shaped by the factors outlined in sections  and . The landscape inevitably demands significantly more computing power, and the technologies trend provides a baseline of fulfilling such needs. However, the HPC in the space of safety-related domain while power and cost efficiencies also matter, is by itself imposes various new technical challenges.

To tackle them, AP employs various proven technologies traditionally not fully exploited by ECUs, while allowing maximum freedom in the AP implementation to leverage the innovative technologies.

### 10. C++

From top-down, the applications can be programmed in C++. It is now the language of choice for the development of new algorithms and application software in performance critical complex applications in the software industry and in academics. This should bring faster adaptations of novel algorithms and improve application development productivity if properly employed.

### 11. SOA

To support the complex applications, while allowing maximum flexibility and scalability in processing distribution and compute resource allocations, AP follows service-oriented-architecture (SOA). The SOA is based on the concept that a system consists of a set of services, in which one may use another in turn, and applications that use one or more of the services depending on its needs. Often SOA exhibits system-of-system characteristics, which AP also has. A service, for instance, may reside on a local ECU that an application also runs, or it can be on a remote ECU, which is also running another instance of AP. The application code is the same in both cases - the communication infrastructure will take care of the difference providing transparent communication. Another way to look at this architecture is that of distributed computing, communicating over some form of message passing. At large, all these represent the same concept. This message passing, communication-based architecture can also benefit from the rise of fast and high-bandwidth communication such as Ethernet.

### 12. Parallel processing

Distributed computing is inherently parallel. The SOA, as different applications use a different set of services, shares this characteristic. The advancement or manycore processors and heterogeneous computing that offer parallel processing capability offer technological opportunities to harness the computing power to match the inherent parallelism. Thus, the AP possesses the architectural capability to scale its functionality and performance as the manycore-heterogeneous computing technologies advance. Indeed, the hardware and platform interface specification are only parts of the equation, and advancements in OS/hypervisor technologies and development tools such as automatic parallelization tools are also critical, which are to be fulfilled by AP provider and the industry/academic eco-system. The AP aims to accommodate such technologies as well.

### 13. Leveraging existing standard

There is no point in re-inventing the wheels, especially when it comes to specifications, not implementations. As with already described in section , AP takes the strategy of reusing and adapting the existing open standards, to facilitate the faster development of the AP itself and benefiting from the eco-systems of existing standards. It is, therefore, a critical focus in developing the AP specification not to casually introduce a new replacement functionality that an existing standard already offers. For instance, this means no new interfaces are casually introduced just because an existing standard provides the functionality required but the interface is superficially not easy to understand.

### 14. 安全性与信息安全
*原文标题：Safety and security*

The systems that AP targets often require some level of safety and security, possibly at its highest level. The introduction of new concepts and technologies should not undermine such requirements although it is not trivial to achieve. To cope with the challenge, AP combines architectural, functional, and procedural approaches. The architecture is based on distributed computing based on SOA, which inherently makes each component more independent and free from unintended interferences, dedicated functionalities to assist achieving safety and security, and guidelines such as C++ coding guideline, which facilitates the safe and secure usage of complex language like C++, for example.

### 15. Planned dynamics

The AP supports the incremental deployment of applications, where resources and communications are managed dynamically to reduce the effort for software development and integration, enabling short iteration cycles. Incremental deployment also supports explorative software development phases.

For product delivery, AP allows the system integrator to carefully limit dynamic behavior to reduce the risk of unwanted or adverse effects allowing safety qualification. Dynamic behavior of an application will be limited by constraints stated in the Execution manifest (see section ). The interplay of the manifests of several applications may cause that already at design time. Nevertheless, at execution time dynamic allocation of resources and communication paths are only possible in defined ways, within configured ranges, for example.

Implementations of an AP may further remove dynamic capabilities from the software configuration for production use. Examples of planned dynamics might be:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Agile

Although not directly reflected in the platform functionalities, the AP aims to be adaptive to different product development processes, especially agile based processes. For agile based development, it is critical that the underlying architecture of the system is incrementally scalable, with the possibility of updating the system after its deployment. The architecture of AP should allow this.

### 17. 集成 of Classic, Adaptive and Non-AUTOSAR ECUs
*原文标题：Integration of Classic, Adaptive and Non-AUTOSAR ECUs*

As described in previous sections, AP will not replace CP or Non-AUTOSAR platforms in IVI/COTS. Rather, it will interact with these platforms and external backend systems such as road-side infrastructures, to form an integrated system (see Figures  and ). As an example, CP already incorporates SOME/IP, which is also supported by AP, among other protocols.

### 18. 规范的范围
*原文标题：Scope of specification*

AP defines the runtime system architecture, what constitutes a platform, and what functionalities and interfaces it provides. It also defines machine-readable models that are used in the development of such a system. The specification should provide necessary information on developing a system using the platform, and what needs to be met to implement the platform itself.

### 19. 架构
*原文标题：Architecture*

### 20. 逻辑视图
*原文标题：Logical view*

### 21. ARA

Figure  shows the architecture of AP. The Adaptive Applications (AA),or just Applications run on top of ARA, AUTOSAR Runtime for Adaptive applications. ARA consists of application interfaces provided by Functional Clusters, or FCs which belong to either Adaptive Platform Foundation, Adaptive Platform Services, or Vehicle Services.

Adaptive Platform Foundation FCs are C++ library-based building blocks providing the core AP functions. They can be accessed only locally within the same instance of AP in order to achieve the high performance, safety and security properties.

Adaptive Platform Service FCs are service-based platform building blocks that expose their functionality through ara::com service interfaces. AA use them as SOA services, not via direct C++ calls.

Vehicle Service FCs provide vehicle-level services to AA, using ara::com to expose vehicle-level functionality.

Note that any AA can also provide Services to other AA.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 支持的协议与安全特性
*原文标题：Supported protocols, safety and security features*

Adaptive Platform supports a series of well-known protocols, safety and security features. The figures and tables below provide overviews.

| Functional Cluster | Supported protocols |
|---|---|
| Communication Management | SOME/IP protocol incl. service discovery protocol |
| S2S - Signal2Service |  |
| DDS - Date Distribution Service (by OMG) |  |
| zero-copy IPC - Inter-Process Communication |  |
| Diagnostic Management | DoIP - Diagnostics over IP (ISO 13400-2) |
| UDS - Unified Diagnostic Services (ISO 14229-1) |  |
| SOVD - Service Oriented Vehicle Diagnostics (by ASAM) |  |
| Intrusion Detection System Manager | IDS - Intrusion Detection System Protocol |
| Network Management | UdpNM - AUTOSAR Network Management Protocol |
| Time Synchronization | gPTP = IEEE 802.1AS |
| AUTOSAR provides the Time Synchronization Protocol Specification which is an extension and profiling of this IEEE Norm |  |
| Raw Data Stream | TCP - Transmission Control Protocol for IPv4 and IPv6 |
| UDP - User Datagram Protocol for IPv4 and IPv6 |  |
| Log and Trace | DLT - Log and Trace Protocol Specification |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Language binding, C++ Standard 库, and POSIX API
*原文标题：Language binding, C++ Standard Library, and POSIX API*

The language binding of these API is based on C, and the C++ Standard library is also available as part of ARA. Regarding the OS API, Adaptive Applications are restricted by definition to use PSE51 interface, a single-process profile of POSIX standard. PSE51 has been selected to offer portability for AA and to enable freedom from interference among applications.

Note that the C++ Standard Library contains many interfaces based on POSIX, including multi-threading APIs. It is recommended not to mix the C++ Standard library threading interface with the native PSE51 threading interface to avoid complications. Unfortunately, the C++ Standard Library does not cover all the PSE51 functionalities, such as setting a thread scheduling policy. In such cases, the combined use of both interfaces may be necessary.

### 24. Application launch and 关机
*原文标题：Application launch and shutdown*

Lifecycles of applications are managed by Execution Management (EM). Loading/launching of an application is managed by using the functionalities of EM, and it needs appropriate configuration at system integration time or at runtime to launch an application. In fact, all the Functional Clusters are applications from EM point of view, and they are also launched in the same manner, except for EM itself. Figure  illustrates different types of applications within and on AP.

Note that decisions on which and when the application starts or terminates are not made by EM. A special FC, called State Management (SM), is the controller, commanding EM based on the design of a system, arbitrating different states thus controlling the overall system behavior. Since the system here refers to the whole machine AP and its application are running, the internal behavior thus the implementation is project specific. The SM also interact with other FCs to coordinate the overall machine behavior. The SM should use only the standard ARA interface to maintain portability among different AP stack implementations.

### 25. Application interactions

Regarding the interaction between AAs, PSE51 services do not include IPC (Inter-Process-Communication), so there is no direct interface to interact between AAs. Communication Management (CM) is the only explicit interface. CM also provides Service Oriented Communication for both intra-machine and inter-machine, which are transparent to applications. CM handles routing of Service requests/replies regardless of the topological deployment of Service and client applications. Note that other ARA interfaces may internally trigger interactions between AAs, however, this is not an explicit communication interface but just a byproduct of functionalities provided by the respective ARA interfaces.

### 26. Non-standard 接口
*原文标题：Non-standard interfaces*

Non-AA and Functional Clusters may use any non-standard interfaces, provided that they do not conflict with the standard AP functionalities and also that they conform to the safety/security requirements of the project. Unless they are pure application local runtime libraries, care should be taken to keep such use minimal, as this will impact the software portability onto other AP implementations.

### 27. 物理视图
*原文标题：Physical view*

The physical architecture .] of AP is discussed here. Note that most of the contents in this section are for illustration purpose only, and do not constitute the formal requirement specification of AP, as the internals of AP is implementation-defined. Any formal requirement on the AP implementation is explicitly stated. As an additional source of information, refer to  which describes the AP internal architecture in more detail.

### 28. OS, processes, and threads

The AP Operating System is required to provide multi-process POSIX OS capability. Each AA is implemented as an independent process, with its own logical memory space and namespace. Note that a single AA may contain multiple processes, and this may be deployed onto a single AP instance or distributed over multiple AP instances. From the module organization point of view, each process is instantiated by OS from an executable. Multiple processes may be instantiated from a single executable. Also, AA may constitute multiple executables.

Functional Clusters are also typically implemented as processes. A Functional Cluster may also be implemented with a single process or multiple (sub) processes. The Adaptive Platform Services and the non-platform Services are also implemented as processes.

All these processes can be single-threaded or a multi-threaded. However, the OS API they use may differ depending on which logical layer the processes belong to. If they are AAs running on top of ARA, then they are restricted to use PSE51 services by definition. If a process is one of the Functional Clusters, it is free to use any OS services available.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Library-based or 服务 based 功能性 Cluster implementation
*原文标题：Library-based or Service based Functional Cluster implementation*

As in Figure , a Functional Cluster can be an Adaptive Platform Foundation module or an Adaptive Platform Service. As described previously, these are generally both processes. For them to interact with AAs, which are also processes, they need to use IPC. There are two alternative designs to achieve this. One is "Library-based" design, in which the interface library, provided by the Functional Cluster and linked to AA, calls IPC directly. The other is "Service-based" design, where the process uses Communication Management functionality and has a Server proxy library linked to the AA. The proxy library calls Communication Management interface, which coordinates IPC between the AA process and Server process. Note it is implementation-defined whether AA only directly performs IPC with Communication Management or mix with direct IPC with the Server through the proxy library.

A general guideline to select a design for Functional Cluster is that if it is only used locally in an AP instance, the Library-based design is more appropriate, as it is simpler and can be more efficient.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. The interaction between 功能性 Clusters
*原文标题：The interaction between Functional Clusters*

In general, the Functional Clusters may interact with each other in the AP implementation-specific ways, as they are not bound to ARA interfaces, like for example PSE51, that restricts the use of IPC. It may indeed use ARA interfaces of other Functional Clusters, which are public interfaces. One typical interaction model between Functional Clusters is to use implementation-specific protected methods to provide access to a Functional Cluster for other Functional Clusters.

Also, from AP18-03, a new concept of Inter-Functional-Cluster (IFC) interface has been introduced. It describes the interface an FC provides to other FCs. Note that it is not part of ARA, nor does it constitute formal specification requirements to AP implementations. These are provided to facilitate the development of the AP specification by clarifying the interaction between FCs, and they may also provide better architectural views of AP for the users of AP specification. The interfaces are described in the Annex of respective FC SWS.

### 31. Machine/hardware

The AP regards hardware it runs on as a Machine. The rationale behind that is to achieve a consistent platform view regardless of any virtualization technology which might be used. The Machine might be a real physical machine, a fully-virtualized machine, a para-virtualized OS, an OS-level-virtualized container or any other virtualized environment.

On hardware, there can be one or more Machines, and only a single instance of AP runs on a machine. It is generally assumed that this 'hardware' includes a single chip, hosting a single or multiple Machines. However, it is also possible that multiple chips form a single Machine if the AP implementation allows it.

### 32. 方法论与清单
*原文标题：Methodology and Manifest*

The support for distributed, independent, and agile development of functional applications requires a standardized approach to the development methodology. AUTOSAR adaptive methodology involves the standardization of work products for the description of artifacts like services, applications, machines, and their configuration; and the respective tasks to define how these work products shall interact to achieve the exchange of design information for the various activities required for the development of products for the adaptive platform.

Figure  illustrates a draft overview of how adaptive methodology might be implemented. For the details of these steps see .

### 33. 清单
*原文标题：Manifest*

A Manifest represents a piece of AUTOSAR model description that is created to support the configuration of an AUTOSAR AP product and which is uploaded to the AUTOSAR AP product, potentially in combination with other artifacts (like binary files) that contain executable code to which the Manifest applies.

The usage of a Manifest is limited to the AUTOSAR AP. This does not mean, however, that all ARXML produced in a development project that targets the AUTOSAR AP is automatically considered a Manifest. In fact, the AUTOSAR AP is usually not exclusively used in a vehicle project.

A typical vehicle will most likely be also equipped with a number of ECUs developed on the AUTOSAR CP and the system design for the entire vehicle will, therefore, have to cover both - ECUs built on top of the AUTOSAR CP and ECUs created on top of the AUTOSAR AP.

In principle, the term Manifest could be defined such that there is conceptually just one "Manifest" and every deployment aspect would be handled in this context. This does not seem appropriate because it became apparent that manifest-related model-elements exist that are relevant in entirely different phases of a typical development project.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 应用设计
*原文标题：Application Design*

The application design describes all design-related modeling that applies to the creation of application software for the AUTOSAR AP.

Application Design focuses on the following aspects:

* Data types used to classify information for the software design and implementation
* Service interfaces as the pivotal element for service-oriented communication
* Definition how service-oriented communication is accessible by the application
* Persistency Interfaces as the pivotal element to access persistent data and files
* Definition how persistent storage is accessible by the application
* Definition how files are accessible by the application
* Definition how crypto software is accessible by the application
* Definition how the Platform Health Management is accessible by the application
* Definition how Time Bases are accessible by the application
* Serialization properties to define the characteristics of how data is serialized for the transport on the network
* Description of client and server capabilities
* Grouping of applications in order to ease the deployment of software.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 执行清单
*原文标题：Execution manifest*

The purpose of the execution manifest is to provide information that is needed for the actual deployment of an application onto the AUTOSAR AP.

The general idea is to keep the application software code as independent as possible from the deployment scenario to increase the odds that the application software can be reused in different deployment scenarios.

With the execution manifest the instantiation of applications is controlled, thus it is possible to

* instantiate the same application software several times on the same machine, or to
* deploy the application software to several machines and instantiate the application software per machine.

The Execution manifest focuses on the following aspects:

* Startup configuration to define how the application instance shall be started. The startup includes the definition of startup options and access roles. Each startup may be dependent on machines states and/or function group states.
* Resource Management, in particular resource group assignments.

### 36. 服务实例清单
*原文标题：Service Instance Manifest*

The implementation of service-oriented communication on the network requires configuration which is specific to the used communication technology (e.g. SOME/IP). Since the communication infrastructure shall behave the same on the provider and the requesters of a service, the implementation of the service must be compatible on both sides.

The Service Instance Manifest focuses on the following aspects:

* Service interface deployment to define how a service shall be represented on the specific communication technology.
* Service instance deployment to define for specific provided and required service instances the required credentials for the communication technology.
* The configuration of E2E protection
* The configuration of Security protection
* The configuration of Log and Trace

### 37. 机器清单
*原文标题：Machine Manifest*

The machine manifest allows to configure the actual adaptive platform instance running on specific hardware (machine).

The Machine Manifest focuses on the following aspects:

* Configuration of the network connection and defining the basic credentials for the network technology (e.g. for Ethernet this involves setting of a static IP address or the definition of DHCP).
* Configuration of the service discovery technology (e.g. for SOME/IP this involves the definition of the IP port and IP multicast address to be used).
* Definition of the used machine states
* Definition of the used function groups
* Configuration of the adaptive platform functional cluster implementations (e.g. the operating system provides a list of OS users with specific rights).
* The configuration of the Crypto platform Module
* The configuration of Platform Health Management
* The configuration of Time Synchronization
* Documentation of available hardware resources (e.g. how much RAM is available; how many processor cores are available)

### 38. 操作系统
*原文标题：Operating System*

### 39. 概述
*原文标题：Overview*

The Operating System (OS) is responsible for run-time scheduling, resource management (including policing memory and time constraints) and inter-process communication for all Applications on the Adaptive Platform. The OS works in conjunction with Execution Management which is responsible for platform initialization and uses the OS to perform the start-up and shut-down of Applications.

The Adaptive Platform does not specify a new Operating System for highly performant processors. Rather, it defines an execution context and Operating System Interface (OSI) for use by Adaptive Applications.

The OSI provides both C and C++ interfaces. In the case of a C program, the Adaptive Application's main source code business logic include C function calls defined in the POSIX standard, namely PSE51 defined in IEEE1003.13 . During compilation, the compiler determines which C library from the platform's operating system provides these C functions and the applications executable shall be linked against at runtime. In case of a C++ program, application software component's source code includes function calls defined in the C++ Standard and its Standard C++ Library.

### 其余 97 章（内容从略，见纯文本全文）

40. POSIX
41. 调度
42. 存储管理
43. 资源控制
44. 设备管理
45. Networking
46. 执行管理
47. 概述
48. 系统启动
49. Execution 管理 Responsibilities
50. 资源限制
51. 状态管理
52. 通信管理
53. 概述
54. 服务 Oriented Communication
55. Language binding and 网络 binding
56. Generated Proxies and Skeletons of C++ Language Binding
57. Static and dynamic 配置
58. 服务 Contract Versioning
59. 诊断
60. 概述
61. 软件 Cluster
62. 诊断 communication sub-cluster
63. 诊断 in Adaptive Application (AA)
64. Typed vs generic 接口
65. 诊断 conversations
66. Event 存储 sub-cluster
67. 服务 Oriented Vehicle 诊断
68. 持久化
69. 概述
70. Key-Value Storage
71. 文件 Storage
72. Use cases for 处理 persistent 数据 for UCM
73. 时间同步
74. 概述
75. 设计
76. 架构
77. 网络管理
78. 概述 on 网络管理 Algorithm
79. 架构
80. Update and Config 管理
81. 概述
82. Update 协议
83. 数据 transfer
84. Packages
85. 软件 package
86. Backend package
87. Vehicle Package
88. 软件 release and packaging 工作流
89. UCM processing and activating 软件 Packages
90. V-UCM update campaign coordination
91. Adaptive applications interacting with V-UCM
92. OTA Client
93. Vehicle 驱动
94. Vehicle 状态管理器
95. Flashing Adapter
96. 软件 information reporting
97. 软件 update consistency and authentication
98. Securing the update process
99. Appropriate 状态管理 during an update process
100. Identity and Access 管理
101. 密码服务
102. Security 架构
103. Key 管理架构
104. Remarks on API Extension
105. 日志与追踪
106. 概述
107. 架构
108. Safety
109. 功能性 Safety 架构
110. Protection of Information Exchange (E2E-Protection)
111. 平台健康管理
112. Safe Hardware Acceleration
113. 概述
114. 集成结构
115. 核类型
116. 错误处理
117. 概述
118. ErrorCode
119. Result
120. Future and Promise
121. Advanced 数据类型
122. Primitive 数据类型
123. Global 初始化 and 关机 functions
124. Intrusion 检测系统管理器
125. Firewall
126. Raw 数据 Stream
127. Raw 数据 Streaming over Ethernet using IP based protocols (网络 layer)
128. Raw 数据 Streaming using IEEE1722 协议 (数据 link layer)
129. Automotive API Gateway
130. Automotive API
131. Automotive API Gateway
132. Automotive API Gateway 架构
133. Remote 持久化
134. Sensor 接口
135. 概述
136. the 接口的配置
