# Methodology for Adaptive Platform (`Methodology`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 709 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_TR_Methodology_709\AUTOSAR_AP_TR_Methodology.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_TR_Methodology_709\AUTOSAR_AP_TR_Methodology.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_TR_Methodology_709\zzgen\AP_TR_Methodology.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. Objective and 范围
*原文标题：Objective and Scope*

AUTOSAR requires a common technical approach for at least the major development steps, called the AUTOSAR Methodology.

The methodology for the AUTOSAR Classic Platform is given by , whereas this document defines the methodology for the AUTOSAR Adaptive Platform.

The present expansion was necessary, because the AUTOSAR Adaptive Platform has introduced new concepts.

In contrast to the AUTOSAR Classic Platform, instances of Adaptive Software, are executed within the context of processes (which are entities managed by the operating system). If permitted by the configuration of the operating system, processes may be started, executed or stopped, at any time during the life cycle of a Machine. As a consequence, the way of configuration (by the means of Manifests) or when and how software packages are deployed (e.g., by software updates over-the-air) clearly differ from the concepts of the AUTOSAR Classic Platform.

Moreover, the term Machine has been newly introduced with the AUTOSAR Adaptive Platform. A Machine is quasi a virtualized ECU-HW, an entity where software can be deployed to.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Document Outline

This document will follow the policies of the AUTOSAR Classic Platform, i.e., the way how to model use-cases, how to structure the document and the way to specify.

Thus, the outline of this document follows roughly its counterpart of the AUTOSAR Classic Platform:

* Section  () describes the major use cases for the development of a system implementing an AUTOSAR Adaptive Platform. Note that the description of the life cycle of a Software Package is not included in the AUTOSAR Methodology.
* Section  () lists and describes all tasks and work products, which are used in the descriptions of the use cases in section .
* The rest of this  section documents the policies utilized and the requirements traceability map.

### 4. Document Conventions

This document follows a list of document conventions, which are described in the following.

Technical terms of AUTOSAR are typeset in mono spaced font, e.g. Machine. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. Machines.

This document contains specification items in textual form that are distinguished from the rest of the text by a unique numerical ID, a headline, and the actual text starting after the \lceil character and terminated by the \rfloor character. The conventions for requirements traceability follow , see Standardization Template ().

### 5. Abbreviations and Technical Terms

The main list of terms and abbreviations are defined in . The following table contains the list of terms and abbreviations used in the scope of this document which are not already defined in  along with the spelled-out meaning of each of the abbreviations.

| Abbreviation | Meaning |
|---|---|
| - | - |

| Technical Term | Meaning |
|---|---|
| Adaptive Software | An application-level or platform-level software entity tailored to run on the AUTOSAR Adaptive Platform. These software entities may consist of multiple Executables running in multiple OS Processes. |
| Bottom-up approach | A methodology pattern in which the work/design flows from a concrete/fine grained methodology to an abstract/coarse grained methodology, e.g. SWC \rightarrow binary \rightarrow software cluster \rightarrow System |
| Diagnostic Manager | The term Diagnostic Management is a placeholder for the complete functionality of diagnostic communication and event handling. |
| Function Group | A Function Group defines a state-machine for a set of cohesive instances (i.e. Processes) likely having a run-time interdependency. The Process specifies it's participation in a Function Group. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Methodology 概念
*原文标题：Methodology Concepts*

The concepts of the methodology for the Adaptive Platform are identical with the concepts of the methodology for the Classic Platform. Hence, we will only mention the main principles here. Please refer to section 1.5 in  for further details.

 Definition of tasks, work products and use cases
⌈
The methodology describes typical use cases by means of activitys, entities to aggregate tasks and their corresponding work products. Tasks are defined as reusable elements: input information (e.g., stored within particular work products) is processed in order to generate new work products.
⌋

This document describes use cases in Section , tasks and work products in Section .

 Types and kinds of work products
⌈
Work products are either artifacts or deliverables and can be of the kind AUTOSAR XML, source code, object code, executable, text or custom.
⌋

 Documentation of work products
⌈
In order to document design decisions or restrictions during the development process, each work product may aggregate a corresponding documentation.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 已知限制
*原文标题：Known Limitations*

Elaboration of chapter  /   is pending

Elaboration of chapter  /   is pending

### 8. 设计 vs. Deployment
*原文标题：Design vs. Deployment*

Please note that the workflow of an individual artifact (or deliverable)

# may be associated exclusively to design steps
# may be associated to both design and deployment steps
# may be associated exclusively to deployment steps
# may be associated to deployment steps depending on information from design level

  # this may include design data items replicated into deployment artifacts
  # this may need only structural information from design level , the content of references marked with atpUriDef>> is in scope of design only.]
# may be associated to deployment steps having direct counterparts on design level

which indicates that the border between design and deployment on the AUTOSAR adaptive platform is not as easily defined as on the AUTOSAR classic platform.

### 9. Use Cases for the Adaptive Platform

This chapter describes the main use cases for building a system based on the AUTOSAR Adaptive Platform in terms of tasks and work products according to .

 Domains of development utilized for the methodology of the AUTOSAR Adaptive Platform
⌈
The methodology of the Adaptive Platform shall be structured by the following domains of development:

* Analysis
* Architecture and Design
* System Development
* Software Development
* Integration and Deployment
⌋

 Develop the System
  Status: DRAFT
⌈
The subsequent specifications of the Classic Platform methodology  shall also be applicable for the Adaptive Platform (by following their general meanings):

* Development of the System () and (Develop) the overall system (), which talk about the refinement of the VFB by the definition of a topology of ECU-Instances and networks and the deployment of software components onto ECU-Instances, with the extensions necessary for the Vehicle Software Architecture and the additions to specify Machines and the corresponding mapping of Machines to ECU-HWs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 系统 - High Level 架构
*原文标题：System - High Level Architecture*

A typical vehicle will be most likely equipped with ECUs hosting - ECU-Instances with software developed for the AUTOSAR classic platform (CP) - and Machines with software developed for the AUTOSAR adaptive platform (AP) - and eventually also HW entities with non-AUTOSAR software.

The software architecture and System design for the entire vehicle has therefore to cover all these ECUs as well as the communication between these ECUs, considering - communication between AUTOSAR AP and CP hardware and software entities - communication between AUTOSAR and non-AUTOSAR hardware and software entities).

Figure  gives an overview of the tasks and work products in scope of High Level Architecture. Please find the detailed definitions of these tasks and work products in  (see chapter ).

In a top-down approach the activities related to Define High Level Architecture start with Develop Function Architecture and/or Develop Abstract Platform Specification resulting in the Function Architecture and Abstract Platform Specification contributions to High Level Architecture:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Overall 系统视图
*原文标题：Overall System View*

Develop a Function Architecture
  Status: DRAFT
⌈
An engineer, e.g. an E/E system architect, may evaluate features and requirements necessary for a specific E/E vehicle project in order to form an appropriate Function Architecture during the activity Develop Function Architecture.

The Function Architecture consists of a number of vehicle functions with their interfaces and the corresponding connections.

In an analysis step, a vehicle function may be detailed into a number of function blocks which later lead to the abstract SWCs in the derived Abstract Platform Specification:

* A function block encapsulates a specific functionality. Note, that function blocks may be realized in software or hardware or as a mix of both.
* A composition of function blocks represents the functionality that is needed to execute a particular vehicle function.

This activity is optional and will not show up in a bottom-up approach.
⌋

 Develop a Vehicle Software Architecture
  Status: DRAFT
⌈
An engineer, e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Derive Sub-Systems

Derive Sub-Systems
  Status: DRAFT
⌈
A sub-system is a reduced part of the overall technical system and emphasizes on relevant aspects of it. Feasible use cases are

* derive a pure AUTOSAR Classic Platform sub-system as VFB view
* derive a pure AUTOSAR Adaptive Platform sub-system
* derive a view on a mixed Adaptive/Classic Platform sub-system.

Motivations for the decomposition into sub-systems are

* functional aspects, e.g. scoping of sub-system by vehicle functions
* technology aspects, e.g. scoping of sub-system by AUTOSAR platform
* logistics, e.g. scoping of sub-system by intended sub-contracting

Any sub-system may interact with other sub-systems: in such cases software components allocated to different sub-systems communicate. To support this the sub-system shall include PortInterface definitions at least for the AUTOSAR Adaptive and Classic Platform software component ports interfacing to other sub-systems.

This activity is optional.
⌋

Figure   shows three possible views on sub-systems derived from the Vehicle Software Architecture.

The overall Vehicle Software Architecture covers a whole System considering all AUTOSAR software entities of a vehicle.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 系统设计
*原文标题：System Design*

Figure  gives an overview of the tasks and work products in scope of System Design. Please find the detailed definitions of these tasks and work products in  (see chapter ).

Main inputs are Vehicle Software Architecture and Vehicle Hardware Architecture from High Level Architecture, see also chapter . The System Design represents a - preferably platform specific - sub-system derived from High Level Architecture.

The System Design consists of

# System Topology Description see
# SW Cluster Design Description see
# Global Time Description see
# Network Management Description see
# Signal to Service Translation Description see

### 14. 系统设计 Contributions
*原文标题：System Design Contributions*

### 15. 系统 Topology 描述
*原文标题：System Topology Description*

System Topology Description as outcome of task Define System Topology with the intention to refine the Vehicle Software Architecture and to define sub-systems with the required functionalities and their communication needs. This includes:

* Specify groups for distributed but coherent functionality. These function groups will be detailed as SW Cluster Design Descriptions during .

  In AP the Function Group Description defines a set of cohesive executable instances (aka application processes) likely having run-time interdependencies.
* Specify the network connectivity for the communication clusters of the required communication technologies like CAN or Ethernet for CP and SOME/IP for AP.

  For Ethernet (and of course also SOME/IP) the Network Endpoint Description defines the network addresses (as Internet Protocol version 4 or version 6 address and/or Media-Access-Control (MAC) multicast address) for the individual communication connectors of ECUs (or to be more precise of the CP-ECU-Instances and AP-Machines) taking part in a communication cluster.
* Specify the network of services as Service Topology Description.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. SW Cluster 设计描述
*原文标题：SW Cluster Design Description*

Some initial SW Cluster Design Description as outcome of task Identify Software Cluster with the intention to define the major building blocks in the sub-system software architecture. See chapter   for the actual elaboration of SW Cluster Design Description.

We shall/may group software components into software clusters with the intention to deploy the software clusters on an ECU. For CP this is an optional grouping to facilitate the mapping of SWCs to ECU-Instances. For AP this is a mandatory grouping of SWCs taking part in the build of executables to be deployed on a specific Machine.

See also chapter Software Distribution in  and chapter Software Cluster in  .

### 17. Global Time 描述
*原文标题：Global Time Description*

Global Time Description as outcome of task Define Global Time with the intention to take part in the vehicle-wide time synchronization of ECUs.

It may be necessary that several ECUs in a vehicle E/E system need to act in concert while executing a (distributed) vehicle function. To achieve this the global time functional clusters across all connected CP-ECU-Instances and AP-Machines need to synchronize to the same time bases.

Please see in the schematic figure   how the involved global time functional clusters (labeled X in diagram) may exchange synchronization messages through the communication infrastructure.

Global Time Description for AP describes how the Machines in scope take part in the Global Time Synchronization of a vehicle. This happens via Ethernet. For CP the Global Time Synchronization may happen via CAN or Ethernet.

See also chapter Time Synchronization Deployment in  and chapter Global Time Synchronization in .

### 18. 管理描述
*原文标题：Management Description*

Network Management Description as outcome of task Define Network Management with the intention to take part in the vehicle-wide wake-up and sleep behavior of Networks (and network-connectors of ECUs).

Please see in the schematic figure   how the involved network management functional clusters (labeled X in diagram) may exchange synchronization messages through the communication infrastructure.

Typically an OEM provides the network configuration with all configuration settings that are relevant for the network management functional clusters across all connected CP-ECU-Instances and AP-Machines in a vehicle.

Network Management Description for AP describes how the Machines in scope take part in the overall network management in a vehicle.

See also `TPS_MANI_03166` and `TPS_MANI_03226` and related explanations in  and chapter Network Management in .

### 19. Signal to 服务 Translation 描述
*原文标题：Signal to Service Translation Description*

Signal to Service Translation Description as outcome of task Define Signal to Service Translation with the intention to define how SOME/IP serialized communication of AP can be translated into signal based communication of CP and vice versa.

See chapter   for details.

The above mentioned tasks may be executed - as per demand - in arbitrary order.

### 20. 系统设计 Usage Scenario (top-down)
*原文标题：System Design Usage Scenario (top-down)*

Figure  shows the tailored task and work product definitions of System Design in a top-down usage scenario targeting at a vehicle wide system description. This may start from scratch or from some base line system description.

Elements are:

* Define (complete) System Topology with

  - Decompose System into Sub-Systems - Define Function Groups - Define Network Endpoints - Define Service Topology

  (see overview in list item  on page )
* Identify Software Clusters for function groups: Define the major building blocks in the sub-system software architecture (see overview in list item  on page ) for software entities and sub-systems identified in Vehicle Software Architecture, see also .
* Define system-wide Global Time: Define the vehicle-wide time synchronization of ECUs (see overview in list item  on page ) . This enables the synchronization of the global time functional clusters across all connected CP-ECU-Instances and AP-Machines to same time bases.
* Define system-wide Network Management: Define the vehicle-wide wake-up and sleep behavior of Networks (see overview in list item  on page ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 系统设计 Usage Scenario (bottom-up)
*原文标题：System Design Usage Scenario (bottom-up)*

Figure  shows the tailored task and work product definitions of System Design in a bottom-up usage scenario targeting at a Contribution to System Design for a specific AP-Machine.

Elements are:

* Define the System Topology Contribution for a Machine with the intention to Define the Sub-System for a Machine and Contribute Network Endpoints for a Machine eventually in combination with Define the Machine Design Locally (see chapter  )
* Outline the Sub-System in scope of a specific Machine to identify the SoftwareClusters in scope.

The bottom-up approach leads to the following work products tailored for Machine-scope:

* Software Cluster Descriptions as outcome of Outline the Sub-System in scope of a specific Machine identifying the software clusters implementing the function groups as per current machine scope.
* System Topology Contribution as outcome of Define the System Topology Contribution for a Machine considering function groups, network endpoints and the service topology as per current machine scope.

### 22. Signal to 服务 Translation
*原文标题：Signal to Service Translation*

Figure   outlines the activity of designing the service oriented communication between Classic and Adaptive Platform software entities, if (and only if) the CP side does not directly and completely fulfill the SOME/IP message format.

Remarks:

* The background of this activity is the request to enable service oriented communication between applications of a Classic Platform (CP) ECU-Instance and those of an Adaptive Platform (AP) Machine via SOME/IP.
* If CP communicates as per SOME/IP no signal to service translation is necessary. This is the case if

  * CP communicates directly via Ethernet and fulfills the SOME/IP message format.
  * a Gateway does the necessary translation (e.g. from CAN) to the SOME/IP message format.
* Otherwise a signal to service translation as per ,  and  has to do the job:

  * Unfortunately CP does not support service interfaces. Thus, the equivalent to an AP service interface may be composed of different types of CP PortInterfaces like Sender/Receiver, Client/Server or Trigger interfaces.
  * A signal to service translation specification needs to cover the mapping of AP and CP interface elements as well as the mapping of data instances (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 服务接口设计
*原文标题：Service Interface Design*

Figure  gives an overview of the tasks and work products in scope of Service Interface (Design) Description. Please find the detailed definitions of these tasks and work products in  (see chapter ).

The resulting work products are

* Service Interface Description as outcome of Define Service Interface eventually enhanced by Service Interface Mapping as outcome of Aggregate Service Interfaces for reducing the bus load
* Datatypes for the Adaptive Platform as outcome of Define Datatypes for the Adaptive Platform

 Develop Service Interfaces for Adaptive Software
  Status: DRAFT
⌈
All service interfaces used in Adaptive Software need to be defined as Service Interface Description with event, method and field details.

They are the basis for the header file generation. Therefore, it is also possible to define name spaces within a service interface, which has a direct influence on the generated code.
⌋

 Aggregating service interfaces for reducing the bus load
  Status: DRAFT
⌈
Optionally, service interfaces can be aggregated to more coarse-grained service interfaces by defining a Service Interface Mapping or a service interface element mapping respectively.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 服务接口设计 Usage Scenario
*原文标题：Service Interface Design Usage Scenario*

Figure  shows the usage scenario of how to obtain Service Interface Descriptions

* either in create/change use cases based on the tailored tasks:

  * Define (or re-use) Service Interface
  * Define (or re-use) Datatypes for a Service Interface
  * this may be done in the context of system and/or application design activities in top-down approach
* either in re-use use cases based on the tailored tasks:

  * Re-use Service Interface
  * (Define or) re-use Datatypes for a Service Interface
  * this may be done in the context of system and/or application design activities in bottom-up approach
* resulting in tailored work products

  * Service Interface Description
  * Data Type Descriptions for Service Interfaces

### 25. 应用设计
*原文标题：Application Design*

Figure  gives an overview of the tasks and work products in scope of Application Design. Please find the detailed definitions of these tasks and work products in  (see chapter ).

The resulting Application Design Description consists of

* SW Component Design as outcome of task Define SW Component Design. The SW Component Design defines - among other aspects not to be detailed here - interaction endpoints in terms of SWC Ports instantiating specific (application-level or platform-level) PortInterfaces.
* Executable Description including a SW Composition Description as outcome of task Define Executable with enclosed SW Composition. Dependencies are:

  * all addressed SW Component Designs are available.
* Process Design Description as outcome of task Define Process Design with the intention to define a design time proxy for the actual OS process instantiating (i.e. starting) a specific executable. Dependencies are:

  * Executable Description is available.
* SW Interaction Description with the at design-time known (and integration relevant) interaction configuration for the SWC Port instances existing in an executable instance. Containing

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Application 设计 Usage Scenario (top-down)
*原文标题：Application Design Usage Scenario (top-down)*

Figure  shows the usage scenario of how to elaborate the Application Design, targeting at complete executables and their instantiation as Process Design Description (top-down approach) based on the tailored tasks:

* Define Executable with enclosed SW Composition with

  * Define or re-use SW Components This includes the specification of SWC interaction endpoints in terms of Ports instantiating specific (application-level or platform-level) PortInterfaces. Inputs are Functional Cluster Interface Descriptions and Service Interface Descriptions, deliverable is a SW Component Description.
  * Define Executable This includes the instantiation of SWCs in the dedicated SW composition of an executable. Inputs are SW Component Descriptions, deliverable is the Executable Description along with the related SW Composition Description
* Define Executable Run-time Behavior with

  * Define Process Design as design time proxy for the actual OS process instantiating (i.e. starting) a specific executable. Input is the Executable Description, deliverable is a Process Design.
* Define SW Interaction for the SWC Port instances existing in an executable instance, with

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Application 设计 Usage Scenario (bottom-up)
*原文标题：Application Design Usage Scenario (bottom-up)*

Figure  shows the usage scenario of how to elaborate a Contribution to Application Design based on the tailored task:

* Define SW Components for re-use with Define re-usable SW Component Inputs are Functional Cluster Interface Descriptions and Service Interface Descriptions, deliverable is a SW Component Description.

### 28. Implementation of Adaptive 软件
*原文标题：Implementation of Adaptive Software*

Figure  gives an overview of the tasks and work products in scope of application-level and platform-level Adaptive Software Implementation. Please find the detailed definitions of these tasks and work products in  (see chapter ).

 Develop Adaptive Software
  Status: DRAFT
⌈
The development of application-level and/or platform-level Adaptive Software can start when the adaptive (service) interfaces have been defined. This software development may include several sub-activities like analysis, design, implementation or test.

The most important outcome of this activity are either source-code or object-code artifacts, depending on whether or not the developer knows the Adaptive Software Build Configuration beforehand.

Finally the adaptive software developer forwards the resulting Adaptive Software Implementation to an integrator.
⌋

Develop Adaptive Software and Adaptive Software Implementation details:

* Input to the actual software development are Adaptive Software Generated Items (see ). This is necessary for (but not restricted to) service proxies and skeletons implementing COM Ports and related PortInterfaces.

  See also chapter  .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 诊断设计
*原文标题：Diagnostic Design*

Figure  gives an overview of the tasks and work products in scope of Diagnostic Design. Please find the detailed definitions of these tasks and work products in  (see chapter ).

This activity associates given diagnostic information (diagnostic data, diagnostic enable conditions, diagnostic events, diagnostic operation cycles) with the software structure (application design information for components, ports etc.) targeting at a particular diagnostic manager for a specific machine.

The configuration of diagnostics on the AUTOSAR adaptive platform will typically be done by creating a Diagnostic Extract (DEXT) as per  that is also used on the AUTOSAR classic platform. Therefore, concepts within the Diagnostic Extract are similarly applicable to models on both platforms uniformly: It can even be safely expected that a given DEXT can be divided into parts applying to CP ECU-Instances and parts applying to AP Machines that all belong to the same vehicle.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Machine 设计
*原文标题：Machine Design*

Figure  gives an overview of the tasks and work products in scope of Machine Design. Please find the detailed definitions of these tasks and work products in  (see chapter ).

The resulting Machine Design as outcome of Define Machine Design uses or anticipates network endpoint definitions from System Design

 Configuration of the Machine
  Status: DRAFT
⌈
A Machine has a configuration that is tailored as per ECU Resource Description of a concrete ECU-HW. Due to this the activities Define Machine Design and Define Machine Manifest are in scope of Tier 1 company integrators.

The provisioning of Network Endpoint Description - which is in the scope of a communication designer of an OEM - is a precondition for this. This happens in an early design phase, the resulting Machine Design represents requirements regarding the network communication for a prospective Machine.

Thus, the configuration of the Machine is subdivided into two process steps:

* The first step is the configuration of the communication structure of a prospective Machine and will be

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Machine 设计 Usage Scenario
*原文标题：Machine Design Usage Scenario*

* either in the context of an existing System Design (top-down approach) based on the Network Endpoint Descriptions defined in System Topology Description as per tailored task:

  * Define Machine Design as per System Topology
* or locally (bottom-up approach) - eventually along with a system topology contribution - based on the tailored task:

  * Define Machine Design Locally

resulting in tailored work products

* Network Connector Description and Service Discovery Description as Machine Design
* optionally also System Topology Contribution in System Design

### 其余 189 章（内容从略，见纯文本全文）

32. 机器清单
33. 软件 Cluster 设计
34. Outline SW Cluster 设计
35. Define (and 映射) provided and required 服务 instances
36. Associate content elements
37. 软件 Cluster 设计 Usage Scenario (top-down)
38. 软件 Cluster 设计 Usage Scenario (bottom-up)
39. 软件 Cluster 集成
40. Build SW for test environment
41. Create Execution 清单
42. Create Platform 模块配置
43. Create or Finalize 服务 Instance 清单
44. Integrate 诊断
45. 软件 Packaging
46. Define SW Package
47. Specify update campaign
48. Adaptive Methodology 库
49. High Level 架构
50. Tasks
51. Define High Level 架构
52. Develop 功能架构
53. Develop 抽象 Platform 规范
54. Develop Vehicle 软件架构
55. Develop Vehicle Hardware 架构
56. Work Products
57. High Level 架构
58. 功能架构
59. 抽象 Platform 规范
60. Vehicle 软件架构
61. Vehicle Hardware 架构
62. 系统设计
63. Tasks
64. Define Global Time
65. Define 网络管理
66. Identify 软件 Cluster
67. Define 系统 Topology
68. Define Signal to 服务 Translation
69. Work Products
70. 系统设计
71. Global Time 描述
72. 网络管理描述
73. 系统 Topology 描述
74. Signal to 服务 Translation 描述
75. 应用设计
76. Tasks
77. Define Executable with enclosed SW Composition
78. Define Interaction with Applications
79. Define Interaction with 功能性 Clusters
80. Define SW-Component 设计
81. Define Process 设计
82. Work Products
83. Application 设计描述
84. 功能性 Cluster 接口描述
85. Process 设计描述
86. Executable 描述
87. SW 组件设计
88. SW Composition 描述
89. SW Interaction 描述
90. Adaptive 软件 Implementation
91. Tasks
92. Develop Adaptive 软件
93. Work Products
94. Adaptive 软件 Implementation
95. Adaptive 软件 Source 代码
96. Adaptive 软件 Object 代码
97. Adaptive 软件 Generated Item
98. Adaptive 软件 Build 配置
99. 诊断设计
100. Tasks
101. Define 诊断 Contribution 描述
102. Define 诊断接口描述
103. Provide DEXT for Application Set-up
104. Work Products
105. 诊断设计
106. 诊断 Extract (DEXT)
107. 诊断 Contribution 描述
108. 诊断接口描述
109. SW to 诊断 Interaction 描述
110. Machine 设计
111. Tasks
112. Define Machine 设计
113. Work Products
114. Machine 设计
115. ECU Resource 描述
116. 机器清单
117. Tasks
118. Define Machine 清单
119. Work Products
120. 机器清单
121. Machine 描述
122. 服务接口设计
123. Tasks
124. Aggregatie 服务接口 (for reducing the bus load)
125. Define 数据类型 (for the Adaptive Platform)
126. Define 服务接口
127. Work Products
128. Datatypes for the Adaptive Platform
129. 服务接口描述
130. 服务接口 (Element) 映射
131. 软件 Cluster 设计
132. Tasks
133. Define provided and required 服务 instances
134. 映射 provided and required 服务 instances to contained executables
135. Outline SW Cluster 设计
136. Associate content elements
137. Associate 诊断 Address and Contribution
138. Work Products
139. SW Cluster 设计描述
140. Associated uploadable elements
141. Black box of contained SW
142. 服务 Deployment 描述
143. 服务 Instance 描述
144. 服务 Instance 映射
145. 软件 Cluster 集成
146. Tasks
147. Build SW for test environment
148. Define Execution 清单
149. Configure Platform 模块
150. Create or Finalize 服务 Instance 清单
151. Integrate 诊断
152. Work Products
153. 软件 Cluster 描述
154. Adaptive 软件 Binary
155. 诊断管理器 Binary
156. 诊断 Mappings for Adaptive SW
157. 执行清单
158. 服务实例清单
159. 功能 Group 配置
160. Adaptive 软件 Glue 代码
161. Platform 模块配置
162. Process 配置
163. 软件 Packaging
164. Tasks
165. Build SW for target runtime environment
166. Define SW Package
167. Specify Update Campaign
168. Work Products
169. Adaptive 软件 Package
170. SW Package 描述
171. Update Campaign 描述
172. 附录
173. Mentioned Class Tables
174. Change History
175. Change History of this document according to AUTOSAR Release R17-03
176. Added 规范 Items in 17-03
177. Change History of this document according to AUTOSAR Release R17-10
178. Added 规范 Items in 17-10
179. Changed 规范 Items in 17-10
180. Deleted 规范 Items in 17-10
181. Change History of this document according to AUTOSAR Release R18-03
182. Added 规范 Items in 18-03
183. Changed 规范 Items in 18-03
184. Deleted 规范 Items in 18-03
185. Change History of this document according to AUTOSAR Release R18-10
186. Added 规范 Items in 18-10
187. Changed 规范 Items in 18-10
188. Deleted 规范 Items in 18-10
189. Change History of this document according to AUTOSAR Release R19-03
190. Added 规范 Items in 19-03
191. Changed 规范 Items in 19-03
192. Deleted 规范 Items in 19-03
193. Change History of this document according to AUTOSAR Release R19-11
194. Added 规范 Items in 19-11
195. Changed 规范 Items in 19-11
196. Deleted 规范 Items in 19-11
197. Change History of this document according to AUTOSAR Release R20-11
198. Added 规范 Items in R20-11
199. Changed 规范 Items in R20-11
200. Deleted 规范 Items in R20-11
201. Change History of this document according to AUTOSAR Release R21-11
202. Added 规范 Items in R21-11
203. Changed 规范 Items in R21-11
204. Deleted 规范 Items in R21-11
205. Change History of this document according to AUTOSAR Release R22-11
206. Added 规范 Items in R22-11
207. Changed 规范 Items in R22-11
208. Deleted 规范 Items in R22-11
209. Change History of this document according to AUTOSAR Release R23-11
210. Added 规范 Items in R23-11
211. Changed 规范 Items in R23-11
212. Deleted 规范 Items in R23-11
213. Change History of this document according to AUTOSAR Release R24-11
214. Added 规范 Items in R24-11
215. Changed 规范 Items in R24-11
216. Deleted 规范 Items in R24-11
217. Change History of this document according to AUTOSAR Release R25-11
218. Added 规范 Items in R25-11
219. Changed 规范 Items in R25-11
220. Deleted 规范 Items in R25-11
