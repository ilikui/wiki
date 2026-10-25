# Explanation of Adaptive Platform Software Architecture (`SWArchitecture`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 982 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_EXP_SWArchitecture_982\AUTOSAR_AP_EXP_SWArchitecture.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_EXP_SWArchitecture_982\AUTOSAR_AP_EXP_SWArchitecture.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_EXP_SWArchitecture_982\zzgen\AP_EXP_SWArchitecture.complete.txt`

## 文档简介

This explanatory document provides detailed technical description of the software architecture of the AUTOSAR Adaptive Platform standard with the main focus on the architecture model.

## 模块依赖

The dependency inversion principle (DIP) ,  states that high-level building blocks should not depend on low-level building blocks. Both should depend on abstractions (e.g. interfaces). Furthermore, the dependency inversion principle states that abstractions (e.g. interfaces) should not depend on details. Details (e.g. a concrete implementation) should depend on abstractions.

The dependency inversion principle results in a decoupling of the implementations of building blocks. This is important to scale implementation efforts (cf. Section ) and to perform proper integration tests.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This explanatory document provides detailed technical description of the software architecture of the AUTOSAR Adaptive Platform standard with the main focus on the architecture model.

### 2. 目标
*原文标题：Objectives*

This document is an architecture description of the AUTOSAR Adaptive Platform in accordance to  and has the following main objectives:

* Identify the stakeholders of the AUTOSAR Adaptive Platform and their concerns.
* Identify the system scope and provide overview information of the AUTOSAR Adaptive Platform.
* Provide definitions for all used architecture viewpoints and a mapping of all stakeholder concerns to those viewpoints.
* Provide an architecture view and its architecture models for each architecture viewpoint used in this architecture description.
* Provide correspondence rules and correspondences among the contents of this architecture description.
* Provide an architecture rationale (explanation, justification, reasoning for decisions made) on a high level. A more in-depth documentation of decisions is provided in .
* Provide a record of known inconsistencies and gaps among the architecture description.

There is some potential for ambiguity about the term "architecture". Association with this term is quite different e.g., for a mass production project in contrast with Adaptive Platform standardization.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 范围
*原文标题：Scope*

This explanatory document applies to the AUTOSAR Adaptive Platform. It is recommended to get an overview of the AUTOSAR Adaptive Platform for all members of the working groups, stack vendors, and application developers.

### 4. 文档结构
*原文标题：Document Structure*

This document is organized as follows. Section  provides an overview of the main requirements for the AUTOSAR Adaptive Platform, the top quality goals of its architecture, and a list of stakeholders that are affected by it. Section  lists requirements that constrain design and implementation decisions or decisions about the development process.

Section  is the base for discovering trade-offs and sensitivity points in the architecture of the AUTOSAR Adaptive Platform by introducing a quality attribute tree followed by the most important quality scenarios. The system context in which the AUTOSAR Adaptive Platform is intended to be used is outlined in section . Section  summarizes the fundamental decisions and solution strategies, that shape the architecture of the AUTOSAR Adaptive Platform such as technology decisions or architectural patterns to be used.

Sections  to  explain the software architecture from different view points. First, section  explains the decomposition of the AUTOSAR Adaptive Platform into Functional Clusters and their interdependencies.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 术语与缩略语定义
*原文标题：Definition of Terms and Acronyms*

This chapter lists abbreviations and terms that are specific to this document. A list of general terms for AUTOSAR is provided in the .

### 6. 缩略语
*原文标题：Acronyms and Abbreviations*

| Abbreviation | Description |
|---|---|
| SecOC | AUTOSAR Secure Onboard Communication |

### 7. 定义 of Terms
*原文标题：Definition of Terms*

| Term | Description |
|---|---|
| Thread | The smallest sequence of instructions the can be managed independently by a scheduler. Multiple Threads can be executed concurrently within one Process sharing resources such as memory. |
| Watchdog | An external component that supervises execution of the AUTOSAR Adaptive Platform. See Section  for details. |

### 8. 相关文档
*原文标题：Related Documentation*

This document provides a high-level overview of the AUTOSAR Adaptive Platform architecture. It is closely related to general requirements for AUTOSAR Adaptive Platform specified in , and the architectural decisions documented in .

The individual building blocks of the architecture (Functional Clusters) are specified in separate documents. Each Functional Cluster defines one or more requirements specification(s) (RS document), one or more software specification(s) (SWS document) and one or more explanatory document(s) (EXP document). Please refer to these documents for any details on the AUTOSAR Adaptive Platform standard.

### 9. References

### 10. 概述 and Goals
*原文标题：Overview and Goals*

In conventional automotive systems ECUs are used to replace or augment electro-mechanical systems. Those resource constrained, deeply-embedded ECUs typically perform basic control functions by creating electrical output signals (e.g. for actors) based on input signals (e.g. from sensors) and information from other ECUs connected to the vehicle network. Much of the control software is specifically designed and implemented for the target vehicle and does not change significantly during vehicle lifetime. The AUTOSAR Classic Platform standard addresses the needs of these deeply-embedded systems.

Recent and future vehicle functions, such as highly automated driving, will introduce complex and computing resource demanding software that shall fulfill strict safety, integrity and security requirements. Such software performs for example, environment perception and behavior planning, and interacts with external backend and infrastructure systems. The software in the vehicle regularly needs to be updated during the life-cycle of the vehicle, due to evolving external systems, improved or added functionality, or security problems.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 需求概述
*原文标题：Requirements Overview*

This section provides an overview of the basic requirements for the AUTOSAR Adaptive Platform that impact its architecture. The corresponding requirement identifiers are provided in square brackets. Please refer to  for any details, rationale or intended use-cases of these requirements.

### 12. 支持 of state-of-the-art Technology
*原文标题：Support of state-of-the-art Technology*

The AUTOSAR Adaptive Platform aims to support resource-intensive (memory, cpu) applications on state-of-the-art hardware. Therefore, the AUTOSAR Adaptive Platform shall support high performance computing platforms  as well as virtualized environments . The AUTOSAR Adaptive Platform shall be able to run multiple applications in parallel , each with concurrent application internal control flows .

### 13. 软件 Update and 配置
*原文标题：Software Update and Configuration*

The AUTOSAR Adaptive Platform shall support a flexible (configuration) data and software update. Hereby, AUTOSAR Adaptive Platform shall support up- and download of such update packages  and change of communication and application software at runtime .

AUTOSAR shall provide a unified way to describe software systems deployed to Adaptive and / or Classic platforms . That kind of description shall also support the deployment and reallocation of AUTOSAR Application Software , and shall provide means to describe interfaces of the entire system .

### 14. Security

The AUTOSAR Adaptive Platform shall support the development of secure systems  with secure access to ECU data and services , and secure onboard communication .

### 15. Safety

The AUTOSAR Adaptive Platform shall support the development of safety related systems  that are reliable  and highly available . The AUTOSAR Adaptive Platform specifications shall be analyzable and support methods to demonstrate the achievement of safety related properties accordingly .

### 16. Reuse and Interoperability

The AUTOSAR Adaptive Platform shall support standardized interoperability with non-AUTOSAR software  as well as (source code) portability for AUTOSAR Adaptive Applications across different implementations of the platform . Hereby, the AUTOSAR Adaptive Platform shall provide means to describe a component model for application software , and support bindings for different programming languages .

### 17. Communication

The AUTOSAR Adaptive Platform shall support standardized automotive communication protocols  for intra ECU communication  with different network topologies .

### 18. 诊断
*原文标题：Diagnostics*

The AUTOSAR Adaptive Platform shall provide diagnostics means during runtime for production and services purposes .

### 19. Quality Goals

This section will list the top quality goals for the architecture whose fulfillment is of highest importance to the major stakeholders in a future version of this document. Please refer to the currently un-prioritized list of Quality Attributes in Section .

### 20. Stakeholders

This section lists the stakeholders of the AUTOSAR Adaptive Platform architecture and their main expectations.

| Role | Expectation |
|---|---|
| Project Leader | Overview of technical risks and technical debt in the AUTOSAR Adaptive Platform. |
| Working Group Architecture | Concise yet thorough documentation of the goals and driving forces of the AUTOSAR Adaptive Platform. Documentation of the original architectural design of the AUTOSAR Adaptive Platform standard. Documentation of identified technical risks and technical debt in the AUTOSAR Adaptive Platform. |
| Working Group | Consolidated overview of the AUTOSAR Adaptive Platform architecture. Realization of use-cases that span multiple Functional Clusters. Usage of interfaces within the AUTOSAR Adaptive Platform. Guidelines and patterns for Functional Cluster and interface design. |
| Stack Developer | Consolidated overview of the original architectural design of the AUTOSAR Adaptive Platform. Realization of use-cases that span multiple Functional Clusters. Usage of interfaces within the AUTOSAR Adaptive Platform. |
| Application Developer | Overview of the building blocks of the AUTOSAR Adaptive Platform and their purpose and provided functionality. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 架构 Constraints
*原文标题：Architecture Constraints*

AUTOSAR is a worldwide development partnership of vehicle manufacturers, suppliers, service providers and companies from the automotive electronics, semiconductor and software industry. AUTOSAR standardizes the AUTOSAR Adaptive Platform automotive middleware. The AUTOSAR Adaptive Platform is not a concrete implementation. The AUTOSAR Adaptive Platform standard leaves a certain degree of freedom to implementers of the standard, as most standards do. On the one hand, more freedom enables competition among the different implementations and a broader choice of properties for users of the AUTOSAR Adaptive Platform. On the other hand, a more strict standardization makes the different implementations compatible and exchangeable (within the standardized scope). Naturally, those attributes are in conflict. It is usually a choice of the standardization organization to evaluate the attributes and define the desired level of strictness.

The AUTOSAR Classic Platform is rather strict in that sense by specifying a detailed layered software architecture imposing many constraints on its implementations. The AUTOSAR Adaptive Platform launched with a less strict approach.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Internal 接口
*原文标题：Internal Interfaces*

An important architectural constraint is that only interfaces that are intended to be used by applications or interfaces that are used to extend the functionality of the AUTOSAR Adaptive Platform shall be standardized. Internal interfaces between the building blocks of the AUTOSAR Adaptive Platform shall not be standardized. This approach leaves a lot of freedom to design and optimize the internals of an AUTOSAR Adaptive Platform stack. However, it also imposes constraints on how the AUTOSAR Adaptive Platform architecture can be defined and described in this document. Also, this means that it might not be possible to use different functional clusters from different AUTOSAR Adaptive Platform stack vendors.

First, the existence of internal interfaces and their usage by other building blocks is in most cases a recommendation and reflects the original design approach of the authors of the standard. The same applies to any interactions described in this document that make use of such internal interfaces.

Second, some quality attributes may be hard to ensure in general by the architecture of the standard.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Distributed Work

Standardization of the AUTOSAR Adaptive Platform is a worldwide distributed effort. The individual building blocks are specified by dedicated working groups in separate documents to be able to scale in that distributed setup. This impacts the way the AUTOSAR Adaptive Platform architecture is described in this document.

First, this document shows interfaces on an architectural level only. This document does not specify details of interfaces such as individual operations. This keeps redundancies and thus dependencies between this document and the documents actually specifying the individual building blocks manageable. Another consequence is that the interactions shown in this document are not based on actual operations specified in the interfaces but rather on an architectural level as well.

Second, this document aims to provide guidance for the working groups in specifying the individual building blocks by defining patterns and concepts to solve common problems. This guidance should help to build a uniform and consistent standard from ground up.

### 24. Quality 需求
*原文标题：Quality Requirements*

Quality requirements define the expectations of AUTOSAR Adaptive Platform stakeholders for the quality and the attributes of the AUTOSAR Adaptive Platform standard that indicate whether the quality factors are satisfied or not. Section  starts by listing the quality attributes that, in the end, are used to assess whether the AUTOSAR Adaptive Platform and its software architecture satisfies the expected quality factors or not. Section  then provides quality scenarios that operationalize quality attributes and turn them into measurable quantities by describing the reaction of the system to a stimulus in a certain situation.

### 25. Quality Attributes

The AUTOSAR Adaptive Platform has many stakeholders with different concerns. Thus, this document uses the following three quality attribute categories that correspond to the three main stakeholder groups in order to make the requirements and their impact on the architecture more comprehensible:

* AUTOSAR Adaptive Platform Standard: Quality requirements for the AUTOSAR standard itself. These requirements may directly affect the architecture of the AUTOSAR Adaptive Platform.
* AUTOSAR Adaptive Platform Stack: Quality requirements for an implementation of the AUTOSAR standard as an AUTOSAR stack. These requirements may indirectly affect the architecture of the AUTOSAR Adaptive Platform.
* AUTOSAR Adaptive Application: Quality requirements for an application based on an AUTOSAR stack. These requirements may transitively affect the architecture of the AUTOSAR Adaptive Platform.

The quality attributes are organized according to the Architecture Tradeoff Analysis Method (ATAM)  as a tree, one for each of the quality attribute categories. The leafs of those trees are the individual quality attributes.

### 26. AUTOSAR Adaptive Platform Standard

* Functional suitability

  * The software architecture shall reflect the project objectives (POs) and be the consistent source for all specifications (here: completeness with respect to the PO; see also usability below).
  * The standard shall not contain elements that are not traceable to POs, change requests (CRs), or concepts.
  * The standard shall contain at least one element derived from each PO, CR, or concept.
* Performance efficiency

  * The specification shall allow for a run-time efficient implementation. Run-time efficiency refers to all resource consumption, CPU, RAM, ROM.
* Compatibility

  * The standard shall retain older versions of its elements in the face of change.
  * The standard shall be interoperable with pre-existing standards, especially the AUTOSAR Classic Platform. Pre-existing standards means network protocols and the like.
  * The standard shall adopt new versions of pre-existing standards only after an impact analysis.
* Usability

  * The use of the standard shall be as easy as possible for suppliers and application developers. Easy means: not much material and resources required.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. AUTOSAR Adaptive Platform Stack

* Compatibility

  * An AUTOSAR Adaptive Platform stack implementation shall be capable to offer multiple versions of the same service.
  * An instance of an AUTOSAR Adaptive Platform stack implementation shall be able to co-exist with other instances on different machines, within the same vehicle.
* Usability

  * An AUTOSAR Adaptive Platform stack implementation shall explicitly document restrictions on the application development that go beyond the standard.
* Maintainability

  * An AUTOSAR Adaptive Platform stack implementation shall be traceable to the contents of the standard.
  * An AUTOSAR Adaptive Platform stack implementation shall support multiple versions of the same service.
* Portability

  * An AUTOSAR Adaptive Platform stack shall be portable to a different custom hardware.
  * An AUTOSAR Adaptive Platform stack shall provide mechanisms to replace parts.

### 28. AUTOSAR Adaptive Application

* Usability

  * No Goal: An application developer shall be able to supply custom implementation for pre-defined platform functionality.
* Maintainability

  * An application shall explicitly state which parts of the standard it uses.
* Portability

  * An application entirely based on AUTOSAR Adaptive Platform (i.e. without custom extensions) shall be portable to another AUTOSAR Adaptive Platform stack of the same version without modifications to the application source code itself (source code compatibility).

### 29. 质量场景
*原文标题：Quality Scenarios*

There are currently no quality scenarios defined for the AUTOSAR Adaptive Platform.

### 30. 系统范围与上下文
*原文标题：System Scope and Context*

This chapter provides an overview of the AUTOSAR Adaptive Platform system context by separating the AUTOSAR Adaptive Platform and its communication partners (e.g., external systems). Considering Figure , there are three categories of communication partners for the AUTOSAR Adaptive Platform.

The AUTOSAR Adaptive Platform is conceptually a middleware. AUTOSAR Adaptive Platform provides services to Adaptive Applications beyond those available from the underlying operating system, drivers, and extensions (cf. Section ). Section  describes the third category that are external systems communicating with (an Adaptive Application via) AUTOSAR Adaptive Platform.

### 31. Adaptive Application

Adaptive Applications are built on the functionality provided by the AUTOSAR Adaptive Platform. They directly use the various interfaces provided by the individual building blocks of AUTOSAR Adaptive Platform described in more detail in chapter .

### 32. Dependencies

### 33. Crypto Provider

Crypto Provider is a component that provides implementations of cryptographic routines and hash functions to the AUTOSAR Adaptive Platform.

### 34. 操作系统
*原文标题：Operating System*

The Operating System is the main component that AUTOSAR Adaptive Platform uses to provide its services. The Operating System controls processes and threads, and provides inter-process communication facilities. The Operating System also provides access to network interfaces, protocols like TCP/IP, and access to non-volatile storage.

### 35. Watchdog

The Watchdog is a component to control the hardware watchdog of the machine an AUTOSAR Adaptive Platform runs on.

### 36. External Systems

The AUTOSAR Adaptive Platform supports applications that are operated in heterogeneous environments. This section lists the external systems that AUTOSAR Adaptive Platform is intended to interface.

### 37. 诊断 Tester
*原文标题：Diagnostic Tester*

A tester is considered a physical or virtual device, which is located external to the Vehicle Network. It may request diagnostic services to be handled by the AUTOSAR Adaptive Platform, for instance a UDS request that is processed by Diagnostic Management.

### 38. Backend

Network node or network gateway that exchanges data with the AUTOSAR Adaptive Platform usually via TCP/IP protocol suite and is reachable via a public or a private IP address. Examples include an OEM cloud service node, a node in a private, e.g. home network, or a node connected to the public internet.

### 39. AdHoc Endpoint

A node which communicates via wireless links (single hop or multi-hop connection) with an AUTOSAR Adaptive Platform instance. Therefore, availability of services is constrained to regional proximity (distance usually from few meters up to a few hundred meters). Examples include a stationary roadside infrastructure or a road side user (e.g. device attached to pedestrian).

### 40. AUTOSAR Adaptive Platform

An AUTOSAR Adaptive Platform instance may need to exchange information with another AUTOSAR Adaptive Platform instance. Examples include the communication between Vehicle Update and Configuration Management and one or more Update and Configuration Management instances to distribute and install Software Packages in the vehicle.

### 41. AUTOSAR Classic Platform

An AUTOSAR Adaptive Platform instance may also need to exchange information with an AUTOSAR Classic Platform instance. Examples include sending/receiving controller signals (e.g. transmitted via CAN bus) that are translated to ara::com services connected via Ethernet network by an AUTOSAR Classic Platform instance.

### 42. Third-party Platform

An objective of AUTOSAR is to enable service oriented communication between an AUTOSAR Adaptive Platform instance and a 3rd-party Platform instance. Even though a gateway function to map protocol data on both endpoints has not yet been specified, this possibility is considered for the modelling of external actors.

### 43. 数据 Repository
*原文标题：Data Repository*

A data repository may host/store data associated with events generated within the AUTOSAR Adaptive Platform, such as log events by Log and Trace or security events by Intrusion Detection System Manager functional clusters. Such a repository is located external to the AUTOSAR Adaptive Platform.

### 44. 解决方案策略
*原文标题：Solution Strategy*

The AUTOSAR Adaptive Platform is a standard for an automotive middleware. It is not a concrete implementation. The AUTOSAR Adaptive Platform standard leaves a certain degree of freedom to its implementers by defining requirements and software specifications that need to be fulfilled without specifying how.

### 45. Architectural Approach

To support the complex applications, while allowing maximum flexibility and scalability in processing distribution and compute resource allocations, AUTOSAR Adaptive Platform follows the concept of a service-oriented architecture (SOA). In a service-oriented architecture a system consists of a set of services, in which one may use another in turn, and applications that use one or more of the services depending on its needs. Often service-oriented architectures exhibit system-of-system characteristics, which AUTOSAR Adaptive Platform also has. A service, for instance, may reside on a local ECU that an application also runs, or it can be on a remote ECU, which is also running another instance of AP. The application code is the same in both cases - the communication infrastructure will take care of the difference providing transparent communication. Another way to look at this architecture is that of distributed computing, communicating over some form of message passing. At large, all these represent the same concept. This message passing, communication-based architecture can also benefit from the rise of fast and high-bandwidth communication such as Ethernet.

### 46. Decomposition Strategy

The building blocks of the AUTOSAR Adaptive Platform architecture are refined step-by-step in this document according to the model depicted in figure . The top-level categories are chosen to give an overview from a users perspective what kind of functionality the AUTOSAR Adaptive Platform provides. A category contains one or more Functional Clusters. The Functional Clusters of the AUTOSAR Adaptive Platform are defined to group a specific coherent technical functionality. Functional Clusters themselves specify a set of interfaces and components to provide and realize that technical functionality. The building block view also contains information of the Functional Clusters interdependencies based on interfaces from other Functional Clusters they use. However, note that these interdependencies are recommendations rather than strict specifications because they would constrain implementations.

### 47. UML Profile

The UML diagrams presented in this document use a UML profile to provide a more precise semantics of the elements and relationships. Table  provides an overview of the stereotypes in that profile and their semantics. The names of all stereotypes that are specific to the AUTOSAR architecture are prefixed with aap (short for AUTOSAR Architecture Profile) to make them easily distinguishable from standard UML stereotypes and keywords.

| Stereotype | UML Meta-Class | Semantics |
|---|---|---|
| aapInternal | Interface | Internal interfaces shall be used only by Functional Clusters within the platform. Internal interfaces shall be realized by components that are part of the respective stack implementation (i.e., another Functional Cluster, additional middleware, drivers, or the operating system). |
| aapPlatformExtension | Interface | Platform extension interfaces shall be used only by Functional Clusters within the platform. Platform extension interfaces shall be realized either by third-party components (including application-level components) or components are part of the respective stack implementation (i.e., another Functional Cluster, additional middleware, drivers, or the operating system). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. Technology

### 49. Implementation Language

C++ is the programming language of choice for the AUTOSAR Adaptive Platform and Adaptive Applications. C++ was chosen due to its safer programming model (compared to C) and availability of certified compilers that produce highly optimized machine code. Such properties are especially important for safety- and performance-critical, real-time applications (such as typical Adaptive Applications) where C++ has become more and more popular in the software industry and academics.

### 50. Parallel Processing

Although the design for AUTOSAR Adaptive Platform as a service-oriented architecture inherently leverages parallel processing, the advancement of (heterogeneous) many-core processors offers additional opportunities. The AUTOSAR Adaptive Platform is designed to scale its functionality and performance as (heterogeneous) many-core technologies advance. The design of the AUTOSAR Adaptive Platform includes APIs to leverage heterogeneous high-performance computing based on hardware acceleration. Hardware and platform interface specifications are one part of that equation. However, advancements in operating system and hypervisor technologies as well as development tools (for example automatic parallelization) are also crucial and are to be fulfilled by AUTOSAR Adaptive Platform providers, the software industry, and academics.

### 51. 设计 Principles
*原文标题：Design Principles*

The architecture of the AUTOSAR Adaptive Platform is based on several design principles that are outlined below.

### 52. Leveraging existing standards

AUTOSAR Adaptive Platform aims to leverage existing standards and specifications wherever possible. For example, AUTOSAR Adaptive Platform ist built on the existing and open C++ standard (cf. Section ) to facilitate a faster development of the AUTOSAR Adaptive Platform itself and benefiting from the eco-systems of such standards. It is, therefore, a critical focus in developing the AUTOSAR Adaptive Platform specification not to casually introduce a new replacement functionality that an existing standard already offers. For instance, no new interfaces are casually introduced just because an existing standard provides the functionality required but the interface is superficially hard to understand.

### 其余 327 章（内容从略，见纯文本全文）

53. SOLID principles
54. Single-responsibility Principle
55. 接口 Segregation Principle
56. Dependency Inversion Principle
57. Acyclic Dependencies Principle
58. Versioning of the 服务接口 API
59. Platform Extensions
60. Callout
61. 目的
62. Applicability
63. Class 结构
64. 行为
65. Consequences
66. 示例
67. Callback
68. 目的
69. Applicability
70. Class 结构
71. 行为
72. Consequences
73. 示例
74. Plugin
75. 目的
76. Applicability
77. Class 结构
78. 行为
79. Consequences
80. 示例
81. 配置 Patterns
82. Reference to Class
83. Generated Plugin 定义
84. Dynamic 库
85. Offer/StopOffer Pattern
86. 目的
87. Applicability
88. Class 结构
89. Offer()
90. StopOffer()
91. Participants
92. 行为
93. Consequences
94. 示例
95. Deployment
96. Verification and 校验
97. 构建块视图
98. 概述
99. Runtime
100. 执行管理
101. Defined 接口
102. 接口 for 状态 reporting
103. 接口 for 状态管理
104. Provided 接口
105. Required 接口
106. 状态管理
107. Defined 接口
108. 接口 for a SMControlApplication
109. 接口 for StateMachine 通知
110. 接口 for interaction with Update and 配置管理
111. 接口 for Suspend-to-Ram 通知
112. Provided 接口
113. Required 接口
114. 日志与追踪
115. Defined 接口
116. Provided 接口
117. Required 接口
118. 核
119. Defined 接口
120. 接口 for 初始化 and de-initialization
121. 接口 for process termination
122. 接口 for 存储 resources
123. 接口 for 存储处理
124. Datatypes
125. Provided 接口
126. Required 接口
127. 操作系统接口
128. Defined 接口
129. Provided 接口
130. Required 接口
131. Communication
132. 通信管理
133. Defined 接口
134. Generated 接口 for 服务
135. 接口 for SecOC
136. 接口 for freshness value 管理
137. Provided 接口
138. Required 接口
139. Raw 数据 Stream
140. Defined 接口
141. Raw 数据 Streaming using IP based protocols (网络 layer)
142. Raw 数据 Streaming using IEEE1722 协议 (数据 link layer)
143. Provided 接口
144. Required 接口
145. 网络管理
146. Defined 接口
147. Provided 接口
148. Required 接口
149. 时间同步
150. Defined 接口
151. 接口 for time base providers
152. 接口 for time base consumers
153. 接口 for freshness value 管理
154. Provided 接口
155. Required 接口
156. Automotive API Gateway
157. Defined 接口
158. Provided 接口
159. Required 接口
160. Storage
161. 持久化
162. Defined 接口
163. 接口 for 文件 storage
164. 接口 for key-value storage
165. 接口 for 通用持久化处理
166. Installation and Update of Persistent 数据
167. Provided 接口
168. Required 接口
169. Remote 持久化
170. Defined 接口
171. Provided 接口
172. Required 接口
173. Security
174. 密码服务
175. Defined 接口
176. Common 接口
177. 通用密码服务接口
178. 密码服务 context 接口
179. Cryptographic object 接口
180. Cryptographic key 处理接口
181. X.509 certificate 处理接口
182. Provided 接口
183. Required 接口
184. Intrusion 检测系统管理器
185. Defined 接口
186. 接口 for Reporting Security Events
187. 接口 for Providing 数据 for Security Events
188. 接口 for Receiving 通知 about Qualified Security Events
189. Provided 接口
190. Required 接口
191. Firewall
192. Defined 接口
193. Provided 接口
194. Required 接口
195. Safety
196. 平台健康管理
197. Defined 接口
198. 接口 for supervision
199. 接口 for recovery
200. 接口 for watchdog 处理
201. Provided 接口
202. Required 接口
203. Safe Hardware Acceleration
204. Defined 接口
205. Provided 接口
206. Required 接口
207. 配置
208. 更新与配置管理
209. Defined 接口
210. 通用
211. D-PDU API
212. Provided 接口
213. Required 接口
214. Vehicle Update and 配置管理
215. Defined 接口
216. Provided 接口
217. Required 接口
218. Registry
219. Defined 接口
220. Provided 接口
221. Required 接口
222. 诊断
223. 诊断管理
224. Defined 接口
225. Common 接口
226. 接口 for request 处理
227. 接口 for security
228. 接口 for Upload and Download
229. 接口 for Managing 多 Conditions, Events, and Monitors
230. 接口 for ECU Reset
231. 接口 for 文件 Transfer
232. 接口 for UDS Transportlayer API
233. 接口 for DoIP API
234. 接口 for SOVD 数据 and operations
235. Provided 接口
236. Required 接口
237. Use-Case 视图
238. Runtime
239. 执行管理
240. Start Adaptive Platform
241. 关机 Adaptive Platform
242. Change 功能 Group 状态
243. 状态管理
244. Change 系统状态
245. Recover from Supervision Failure
246. Communication
247. Raw 数据 Stream
248. Send Raw 数据 Stream
249. Receive Raw 数据 Stream
250. 通信管理
251. Perform service-oriented communication
252. Perform E2E-protected service-oriented communication
253. 时间同步
254. Time 同步 Master
255. Set Value Of Time Base
256. Provide Measurement 数据
257. Time 同步 Slave
258. Get Value Of Time Base
259. Receive 通知
260. Automotive API Gateway
261. Access 数据
262. Storage
263. 持久化
264. Read Persistent 数据
265. Read Persistent 数据 from 文件
266. Read Persistent 数据 with Unique ID
267. Decrypt Persistent 数据
268. Detect and Correct 数据错误
269. Store Persistent 数据
270. Store Persistent 数据 in 文件
271. Store Persistent 数据 with Unique ID
272. Encrypt Persistent 数据
273. Add Redundancy
274. Monitoring
275. Get Storage Size
276. Security
277. Firewall
278. Switch Firewall 状态
279. Report Security Event
280. Safety
281. 平台健康管理
282. Manage Watchdog
283. Fire Watchdog Reaction
284. Report Supervision Failure
285. Recover from Critical Supervision Failure
286. Report Checkpoint
287. Safe Hardware Acceleration
288. Process 多 Instructions on 多数据
289. Process Single Instruction on 多数据
290. 配置
291. 更新与配置管理
292. Vehicle Update and 配置管理
293. 运行时视图
294. Runtime
295. 执行管理
296. Start Adaptive Platform
297. Scenario：Start Adaptive Platform with Supervision of Adaptive Applications
298. 关机 Adaptive Platform
299. Scenario：关机 Adaptive Platform with Supervision of Adaptive Applications
300. Change 功能 Group 状态
301. Scenario：Change 功能 Group 状态
302. 状态管理
303. Change 系统状态
304. Scenario：Change 系统状态
305. Recover from Supervision Failure
306. Scenario：Recover by 系统状态 Change
307. Scenario：Recover by Watchdog Reset
308. Communication
309. Raw 数据 Stream
310. Send Raw 数据 Stream
311. Scenario：Send IEEE1722 Stream
312. Scenario：Send IP Stream
313. Receive Raw 数据 Stream
314. Scenario：Receive IEEE1722 Stream
315. Scenario：Receive IP Stream
316. 时间同步
317. Time 同步 Master
318. Set Value of Time base
319. Scenario：Set Value Of Time Base
320. Time 同步 Slave
321. Get Value of Time base
322. Scenario：Get Value Of Time Base
323. Receive 通知
324. Scenario：Receive 通知
325. Storage
326. 持久化
327. Read Persistent 数据 from 文件
328. Scenario：Read Persistent 数据 from 文件
329. Read Persistent 数据 with Unique ID
330. Scenario：Read Persistent 数据 with Unique ID
331. Store Persistent 数据 in 文件
332. Scenario：Store Persistent 数据 in 文件
333. Store Persistent 数据 with Unique ID
334. Scenario：Store Persistent 数据 with Unique ID
335. Get Storage Size
336. Scenario：Get FileStorage Size
337. Scenario：Get KeyValueStorage Size
338. Security
339. Firewall
340. Switch Firewall 状态
341. Scenario：Switch Firewall 状态
342. Report Security Event
343. Scenario：Report Security Event
344. Safety
345. 平台健康管理
346. Manage Watchdog
347. Scenario：Manage Watchdog
348. Report Supervision Failure
349. Scenario：Report Supervision Failure
350. Recover from Critical Supervision Failure
351. Scenario：Recover from Critical Supervision Failure in Execution 管理
352. Scenario：Recover from Critical Supervision Failure in 状态管理
353. Report Checkpoint
354. Scenario：Report Checkpoint
355. 部署视图
356. Vehicle 软件 Deployment
357. Deployment of 软件 Packages on a Machine
358. 横切概念
359. 概述 of Platform Entities
360. 功能 Group
361. 功能 Group 状态
362. 软件 Cluster
363. Machine
364. 清单
365. 应用设计
366. 执行清单
367. 服务实例清单
368. 机器清单
369. 诊断 deployment
370. 错误处理
371. 可信平台
372. Communication Mechanisms
373. 下层 Layer Protocols
374. 网络 and 传输 Layer Protocols
375. Application Layer Protocols
376. Communication APIs
377. Service-Oriented Communication
378. 附录
379. Mentioned Class Tables
