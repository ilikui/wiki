# Methodology for Classic Platform (`Methodology`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 068 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_Methodology_068\AUTOSAR_CP_TR_Methodology.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_Methodology_068\AUTOSAR_CP_TR_Methodology.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_Methodology_068\zzgen\CP_TR_Methodology.complete.txt`

## 模块依赖

| Task Definition | Add Independence Relation | < | < |
|---|---|---|---|
| Package | AUTOSAR Root::M2::Methodology::Methodology Library::Common Elements::Safety::Tasks | < | < |
| Brief Description | Add Independence relation to decomposed requirements. | < | < |
| Description | This task establishes the INDEPENDENCE relation between requirements. The relation is established between a decomposed requirement and a requirement which express a means to achieve freedom from interference for the two requirements into which the decomposed requirement is decomposed by the task Decompose Safety Requirement. |  |  |

| Obviously, this task is processed in the context of the decomposition of safety requirements. | < | < |  |
|---|---|---|---|
| Relation Type | Related Element | Mult. | Note |
| Performed by | Safety Engineer | 1 |  |
| Consumes | Safety Requirement | 1..* |  |
| Produces | Safety Requirement | 1..* | Linked Requirement: |

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. Objective

AUTOSAR requires a common technical approach for some steps of system development. This approach is called the AUTOSAR methodology. This document defines and describes this AUTOSAR methodology. It covers all major steps of the development of a system with AUTOSAR: from the definition of the Virtual Functional Bus to the generation of an ECU executable.

### 3. Document Conventions

This document follows a list of document conventions, which are described in the following.

Technical terms of AUTOSAR are typeset in mono spaced font, e.g. ECU. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. ECUs.

This document contains specification items in textual form that are distinguished from the rest of the text by a unique numerical ID, a headline, and the actual text starting after the \lceil character and terminated by the \rfloor character. The conventions for requirements traceability follow , see Standardization Template ().

### 4. 范围
*原文标题：Scope*

Scope of the AUTOSAR methodology
⌈
The AUTOSAR methodology is not a complete process description, but rather aggregates the various elements of AUTOSAR and shows how they are brought together to develop a complete system.
⌋

Note: Sample aggregations are provided as Use Cases in chapter .

 Support for various stakeholders by the AUTOSAR methodology
⌈
The structure of the methodology was designed to help cover the needs of various AUTOSAR stakeholders:

* Organizations: Methodology is modeled in a modular format to allow organizations to tailor it and combine the Methodology within their own internal processes, while identifying points where they interact with other organizations.
* Engineers: Methodology is scoped to allow engineers of various roles quickly find AUTOSAR information that is relevant to their specific needs.
* Tool Vendors: Methodology provides a common language to share among all AUTOSAR members and a common expectation of what capabilities tools should support.
⌋

 Restrictions of AUTOSAR methodology
⌈
Furthermore, the methodology does not prescribe a precise order in which activities should be carried out.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Terms and Abbreviations

The main list of terms and abbreviations are defined in .

| Abbreviation / Acronym | Description |
|---|---|
| SPEM | Software and Systems Process Engineering Meta-Model (previously called Software Process Engineering Metamodel) - a way of modeling processes. |

### 6. 概述
*原文标题：Overview*

Domains of the AUTOSAR methodology
⌈
The AUTOSAR methodology is structured into several domains of development:

* Virtual Functional Bus
* System
* Software Component
* Basic Software
* ECU

These domains are depicted in the methodology overview workflow.
⌋

Note: See Figure .

 AUTOSAR methodology assets
⌈
For each domain relevant Work Product, Task, Role, and Tool elements are defined. In addition, there are elements that are common for all domains.
⌋

Note: See chapter  and chapter  for the relevant elements.

 AUTOSAR methodology use cases
⌈
Use cases show how these standard reusable elements are applied to support real-world development. The Overall View provides an end to end view on the typical use cases of all domains.
⌋

Note: See chapter  for the use cases and chapter  for the overall view.

### 7. Methodology 概念
*原文标题：Methodology Concepts*

General AUTOSAR methodology concepts
⌈
The AUTOSAR methodology defines activities performed by roles that create work products as general reusable method patterns. The reusable method pattern elements are described in the methodology library elements chapter. The methodology also describes sample process patterns of typical use cases considered for the creation of AUTOSAR work products. The patterns use process elements that are described in the use case elements chapter.

The definitions and the figures are made according to the Software Process Engineering Meta-Model Specification . The symbols are taken from the Enterprise Architect modeling tool.
⌋

Note: See chapter  for the methodology library elements and chapter  for the use case elements.

### 8. Methodology 库 Elements
*原文标题：Methodology Library Elements*

Methodology Library
⌈
The Methodology Library defines the Methodology Library Elements of every method pattern such as Roles, Tasks, and Work Product Definitions.
⌋

Note: See chapter .

 Methodology Library Element
⌈
A Methodology Library Element contains a description of the element to define its purpose in the methodology and thus provides the basic contents of the AUTOSAR methodology. The Methodology Library Elements are used for the description of the related development processes. These Methodology Library Elements can been seen as a standard.
⌋

 Relation of Methodology Library and Methodology Library Element to the SPEM meta model
⌈
The Methodology Library and the Methodology Library Elements correspond to the Method Content and Method Content Elements in the SPEM meta model .
⌋

 Overview of Methodology Library Elements
⌈
Methodology Library Elements comprise:

* Task Definition
* Work Product Definition
* Role Definition
* Tool Definition
* Guidance
⌋

Note: See chapter  for Task Definition, chapter  for Work Product Definition, chapter  for Role Definition, chapter  for Tool Definition and chapter  for Guidance.

The element symbols are shown in Figure .

s

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. Task 定义
*原文标题：Task Definition*

Task Definition
⌈
According to the SPEM meta model, a Task Definition is an assignable unit of work that is being performed by specific Roles. The duration of a task is generally a few hours to a few days. Tasks usually generate one or more work products. Each Task is associated to input and output Work Products. Inputs are differentiated in mandatory and optional inputs. A Task is used as one element among others to define a Process.
⌋

 Task semantics
⌈
A Task has a clear purpose in which the performing roles achieve a well defined goal. It provides complete step-by-step explanations of doing all the work that needs to be done to achieve this goal. This description is completely independent of when in a process lifecycle the work would actually be done. It does not describe when what work is being done, but describes all the work that gets done.
⌋

 Task usage
⌈
When a Task will be used in a development process, it provides the information which pieces of the Task will actually be performed at any particular point in time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Work Product 定义
*原文标题：Work Product Definition*

Work Product Definition
⌈
According to the SPEM meta model, a Work Product Definition is used, modified, and produced by Tasks (i.e. a task input and output). Work Products are in most cases tangible work products consumed, produced, or modified by Tasks. They may serve as a basis for defining reusable assets. A Work Product can be related to other work products by a kind of nesting relationship, but work products shall not have circular references with other work products.
⌋

 Relationship between Roles and Work Products
⌈
Roles use Work Products to perform Tasks and produce Work Products in the course of performing the Tasks. Work Products are in the responsibility of the associated Roles, thereby also defining a set of skills the performing Role should have. Even though one Role might own a specific type of Work Product, other Roles can still use the Work Product for their work, and update them .
⌋

A Work Product can be of type Artifact or Deliverable:

*  Artifact Definition
  ⌈
  Artifact: A tangible Work Product that is consumed, produced, or modified by one or more Tasks. Artifacts may be composed of other Artifacts and may serve as a basis for defining reusable assets .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Role 定义
*原文标题：Role Definition*

Role Definition
⌈
According to the SPEM meta model, Role Definitions define responsibilities of an individual or a set of individuals and thereby define a set of related skills, competencies, and qualifications needed to perform a Task. A Role can be filled by one person or multiple people, one person may fill several Roles. Each Role performs Tasks.
⌋

 Role assignment
⌈
Roles are not individuals or resources. Individual members of the development organization will wear different hats, or perform different Roles. The mapping from individual to Role, usually performed by the project manager when planning and staffing a project, allows different individuals to act as several different Roles, and for a Role to be taken by several individuals .

In the AUTOSAR Methodology, a Role also assigns the responsibility of a Task and defines optional performers. Performers that are responsible for e.g. a Task have a multiplicity of 1 for the relationship to the Task, optional performers have optional multiplicity assigned. Role Definitions are usually generic and still provide sufficient level of detail for managers to organize a team.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Tool 定义
*原文标题：Tool Definition*

Tool Definition
⌈
According to the SPEM meta model, Tool Definitions can be used to specify a tool's participation in a Task. A Tool Definition describes the capabilities of a CASE tool, general purpose tool, or any other automation unit that supports the associated Roles in performing the work defined by a Task. A Tool can identify a resource as useful, recommended, or necessary for a task's completion. A Tool can also be used to manage one or more Work Products .

The AUTOSAR Methodology uses the Tool Definition to describe AUTOSAR specific (e.g. Software Component Contract Generator) and other general Tools (e.g. Compilers). The relationship of a Tool to a Task shows which Tools a Role will need to perform the Task.
⌋

| Tool | Tool Name | < | < |
|---|---|---|---|
| Package | Location in the MetaModel package | < | < |
| Brief Description | some description as summary | < | < |
| Description | some description as more detailed explanation | < | < |
| Kind | Tool Kind (e.g. Editor) | < | < |
| Relation Type | Related Element | Mult. | Note |
| Used | Task where the tool is used | 0..1 or 1 | Description of the activites supported by the tool in this task |

### 13. Guidance

Guidance definition
⌈
According to the SPEM meta model, a Guidance provides additional information related to e.g. Roles, Work Products, and Tasks. A Guidance is classified to indicate a specific type for which perhaps a specific structure and type of content is assumed .
⌋

 Guidance kinds
⌈
A Guidance can be a

* Supporting Material: Supporting Material is a catch-all for other types of guidance not specifically defined elsewhere. It can be related to all kinds of Content Elements, i.e., including other guidance elements. The AUTOSAR Methodology uses the Supporting Material Guidance type to define title pages, change histories, disclaimers etc.
* Tool Mentor: A Tool Mentor shows how to use a specific Tool to accomplish some piece of work either in the context of or independent from a Task or Activity. In the context of the AUTOSAR Methodology, a Tool Mentor is used in the same way as the Tool element.
* White Paper: White Papers are concept guidances that have been externally reviewed or published and can be read and understood in isolation from other Method Content. AUTOSAR documents are examples of White Papers.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Use Case Specifications

This section explains how the use cases in chapter  are specified. The first two subsections introduce the main constituents of the use cases. Afterwards, it is explained how these elements together with the Methodology Library elements are used for describing the use cases.

 Adaptability of the AUTOSAR methodology
⌈
The main focus of this section is merely to provide a use case process flow that can be supported by an AUTOSAR tool chain rather than to define a complete process description. One reason for doing this is that the AUTOSAR methodology should be adaptable to development processes of different organizations.
⌋

 Use case elements
⌈
This section describes the main elements to build a use case, which are given by the Capability Pattern and the Activity. Roles, Work Products, Deliverables and Tasks are used directly to describe the details of an Activity. The SPEM meta model additionally defines the Role Use , the Work Product Use and the Task Use elements, which are not used in the AUTOSAR methodology.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Activity

Definition of Activities
⌈
In the SPEM meta model, an Activity is the main building block to define a process. An Activity is usually a defined task or work to be done that is commonly executed in one sequence.
⌋

 Composition of Activities
⌈
Activities can include other Activities and thereby often decompose a flow of work and show which Activity precedes other Activities . At the lowest level, Activities are collections of work breakdown elements which in AUTOSAR methodology are Tasks, Roles, and Work Products.
⌋

 Definition of Processes
⌈
A Process is a special Activity in the SPEM meta model that describes a typical structure of development projects or parts of them. A Process focuses on the lifecycle and the sequencing of work in breakdown structures. Processes contain sequences of Task and Activities and thereby express a lifecycle of the product under development. Processes also define how to get from one milestone to the next by defining sequences of work, operations, or events .
⌋

### 16. Capability Pattern

The methodology library elements (cf. Section ) are referenced in order to describe together with activities the so-called Capability Patterns.

 Capability Pattern definition
⌈
A Capability Pattern is a process pattern that contains a reusable set of activities.
⌋

 Composition of Capability Patterns
⌈
Capability Patterns can be assembled to larger Capability Patterns that describe development processes or parts of a development process including typical use cases.
⌋

### 17. 描述 of Use Cases
*原文标题：Description of Use Cases*

For the AUTOSAR Methodology, the main Use Cases are described with 3 types of diagrams.

 Description of overall Use Cases
⌈
In the first diagram, one Capability Pattern describes the overall Use Case, composing a set of Activities and their main outputs (Deliverables). In these diagrams, the predecessor relationship can be used in order to define a sequence of the Activities. However, the predecessor relationship can be skipped and Deliverables can be extended by other Deliverables.
⌋

Note: See Figure .

The diagram is followed by its corresponding table as detailed hereunder:

| Process Pattern | Capability Pattern Name | < | < |
|---|---|---|---|
| Package | Location in the MetaModel package | < | < |
| Brief Description | some description as summary | < | < |
| Description | some description as more detailed explanation | < | < |
| Relation Type | Related Element | Mult. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 通用需求
*原文标题：General Requirements*

The following requirements are satisfied by the AUTOSAR methodology in a general way together with other documents as listed in the following:

 Definition of Consistency Needs
⌈
The AUTOSAR methodology supports the exchange of implicit communication behavior description as consistency needs.
⌋

Note: Chapters  and  depict the task and the artifact which allow to define the corresponding consistency needs.

 Building the AUTOSAR methodology document
⌈
All AUTOSAR methodology related model elements are consumed by an internal AUTOSAR tool that automatically produces the corresponding text, tables, and diagrams. These artifacts are included into a document which is automatically transformed into the final PDF file.
⌋

Note: See chapter .

 Relations between AUTOSAR Work Products
⌈
Work Products (Deliverables and Artifacts) are designed in such a way that no circular references with other Work Products exist.
⌋

 Traceability to external artifacts
⌈
Artifacts considered in the Methodology model include external artifacts like c-code, libraries, documentation and generated artifacts. General Non Autosar Artifact is a generic representation of non AUTOSAR artifacts.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Use Cases

In the following, the main use cases for building an AUTOSAR system are described. Chapter  gives an overall brief description of the main development steps. These steps are elaborated in detail in chapter  to chapter . In addition, chapter  to  decribe general topics of interest.

### 20. Overall 视图
*原文标题：Overall View*

### 21. 目的
*原文标题：Purpose*

This chapter provides a rough outline of the design steps to build an AUTOSAR system. The main activities are depicted in Figure . The overall workflow including relevant work products is given in Figure . A brief description of these main steps is given below in section . For a detailed description please refer to the relevant chapters  to .

### 22. 描述
*原文标题：Description*

### 23. Views on the 系统
*原文标题：Views on the System*

During the development of an AUTOSAR system different views on the system can exist. This allows to refine the system step by step as well as to concentrate on the relevant parts during the development.

 Virtual Functional Bus View
⌈
The development of an AUTOSAR System is based on the definition of the Virtual Functional Bus (VFB). The VFB is an abstract communication mechanism that allows software components to interact. This view is independent of any ECUs and networks used. Based on the VFB the system is designed.
⌋

 Support of different system views
⌈
The views on the system might further be restricted to e.g. the functionality only, or a subsystem. These views are described explicitly, whereas a mapping mechanism is used to express the relation between them.
⌋

In the following, three different views on the system are distinguished:

*  Abstract system
  ⌈
  The abstract system abstracts from the concrete software architecture and describes e.g. the functional view on the system.
  ⌋
*  Overall technical system
  ⌈
  The overall technical system is organized from the software architecture perspective including a topology of ECUs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Overall 工作流
*原文标题：Overall Workflow*

The main activities in order to develop an AUTOSAR system are described briefly in the following. The first step focuses on the development of an abstract system, followed by the description of the VFB development and finally the activities for refining and developing the system further.

 Development of a functional view on the system
⌈
The overall workflow starts with an optional activity. In this activity, the Abstract System Description is developed in advance, which represents the overall system from a functional or abstract view (functional architecture). On the one hand, this Abstract System Description might contain VFB-related parts. This information might serve as an input for the development of the VFB later and a mapping between those two views might be established. Please note that during this step the functionality including ports is mapped to software components. Therefore some ports used in the abstract view might not be used in the subsequent development. On the other hand, the Abstract System Description might contain information regarding the topology and the mapping to ECUs. This is then the basis for the development of the concrete System Description.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. The role of Extracts

Extracts bundle together parts of a System. This allows splitting the task of developing a whole car into subsystems. For example, a System Level Extract covers a system or subsystem, while an ECU Level Extract covers a single EcuInstance. In addition to the extracts that cover the overall VFB architecture (like the System Extract), there are also extracts that cover specific topics. This allows experts to focus on their subtopics (often cross cutting concerns like diagnostics or security).

These extracts evolved over time to facilitate typical working models of automotive projects: some pieces of information are created by specialists, or contain information that has to be exchanged independently from a software binary. In the example of diagnostics, both aspects apply: creating and maintaining diagnostic test routines is often done by specialists, and the information is needed in workshops and for homologation.

An additional benefit of using extracts is that the amount of information is reduced, leading to smaller file sizes and faster tool processing times.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 工作流
*原文标题：Workflow*

| Process Pattern | Methodology Overview | < | < |
|---|---|---|---|
| Package | AUTOSAR Root::M2::Methodology::Methodology Use Cases::High Level::Methodology Overview | < | < |
| Brief Description | High level view of the AUTOSAR Methodology | < | < |
| Description | This Process Patterns contains the typical activities to develop an AUTOSAR system. | < | < |
| Relation Type | Related Element | Mult. | Note |
| Aggregates | Develop Application Software | 1 |  |
| Aggregates | Develop Basic Software | 1 |  |
| Aggregates | Develop Sub-System | 1 |  |
| Aggregates | Develop System | 1 |  |
| Aggregates | Develop a VFB System Description | 1 |  |
| Aggregates | Develop an Abstract System Description | 1 |  |
| Aggregates | Integrate Software for ECU | 1 |  |

### 27. Develop an 抽象系统描述
*原文标题：Develop an Abstract System Description*

### 28. 目的
*原文标题：Purpose*

This Activity provides a rough outline of the creation of the Abstract System Description.

### 29. 描述
*原文标题：Description*

Abstract System Description activity
⌈
Due to the fact that the overall view on vehicle functions can differ from the actual technical definition of the software architectures of individual ECUs, the optional activity Develop an Abstract System Description allows to define a view on the overall system from an abstract or functional perspective. This view describes a dedicated abstract VFB. During the further activities this abstract view is refactored into a technical view of the software architecture.
⌋

For the purpose of this use case, this activity is split into sub-activities and tasks (see Figure ) that are in detail described in Chapter  and :

* Data Model Development
* Component Model Development
* VFB Timing Development
* Define VFB Top Level
* Define VFB Component Constraints
* Design System
* Integrate Non AUTOSAR System at VFB level

In the Data Model Development activity, the set of VFB Interfaces, VFB Modes, and VFB Types that are used throughout the abstract VFB are defined. Please note, that these objects can be used in later steps by the VFB and the subsystem VFB as well.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 工作流
*原文标题：Workflow*

| Activity | Develop an Abstract System Description | < | < |
|---|---|---|---|
| Package | AUTOSAR Root::M2::Methodology::Methodology Use Cases::System::Develop System | < | < |
| Brief Description | Develop an abstract or functional view on the system. | < | < |
| Description | This activity defines an abstract view on the overall system from an abstract or functional point of view. This activity is optional. | < | < |
| Relation Type | Related Element | Mult. | Note |
| Consumes | System Constraint Description | 0..1 | In the context of the "Develop an Abstract System Description" activity, the constraints for the abstract or functional view on the system can be provided by the "System Constraint Description". |
| Consumes | VFB AUTOSAR Standard Package | 1..* |  |
| Produces | Abstract System Description | 1..* |  |
| Aggregates | Component Model Development | 1 |  |
| Aggregates | Data Model Development | 1 |  |
| Aggregates | Define VFB Component Constraints | 1 |  |
| Aggregates | Define VFB Top Level | 1 |  |
| Aggregates | Design System | 1 | In the context of the "Develop an Abstract System Description" activity, not all tasks have to be performed. |
| Aggregates | Integrate Non AUTOSAR System at VFB level | 1 |  |
| Aggregates | VFB Timing Development | 1 |  |

### 31. Develop a VFB 系统描述
*原文标题：Develop a VFB System Description*

### 32. 目的
*原文标题：Purpose*

This Activity provides a rough outline of the creation of a Virtual Functional Bus view of a System.

### 33. 描述
*原文标题：Description*

Virtual Functional Bus
⌈
The Virtual Functional Bus (VFB) view of a System shows how the Systems software functions interact independently of any network topology or deployment of features across multiple ECUs.
⌋

For more information on the VFB concept see . For detailed information on the meta-model parts relevant for the VFB see .

For the purpose of this use case, this Activity is split into the following sub-activities:

* Data Model Development
* Component Model Development
* VFB Timing Development
* Integrate Non AUTOSAR System at VFB level
* Define VFB Safety Information

 Data Model Development activity
⌈
In the Data Model Development, the set of VFB Interfaces, VFB Modes, and VFB Types that are used throughout the VFB are defined. Some of these have already been pre-defined by AUTOSAR (so-called "blueprints").
⌋

Note: See chapter .

 Definition of the VFB
⌈
In the Component Model Development activity, the VFB is defined. This can either be done by the use of the abstract VFB as a basis, or is done directly by defining the software components.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 工作流
*原文标题：Workflow*

| Activity | Develop a VFB System Description | < | < |
|---|---|---|---|
| Package | AUTOSAR Root::M2::Methodology::Methodology Use Cases::VFB::Develop VFB | < | < |
| Brief Description | This pattern describes the methodology to develop the Virtual Functional Bus view of the System. | < | < |
| Description | The Virtual Functional Bus (VFB) view of a System shows how the Systems software and hardware functions interact independent of any network topology or deployment of features across muliple ECUs. This Activity is split into three sub-activities: |  |  |

* Data Model Development
* Component Model Development
* Timing Model Development
* Integrate Non AUTOSAR System at VFB level
| * Define VFB Safety Information. | < | < |  |
|---|---|---|---|
| Relation Type | Related Element | Mult. | Note |
| Consumes | Abstract System Description | 0..* | The abstract System Description is an optional input for the activity "Develop a VFB System Description". The VFB-related part of the Abstract System Description can be than refined to the concrete "Overall VFB System". Additionally, a mapping between those two views can be established. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Develop 软件 Components
*原文标题：Develop Software Components*

### 36. Develop an Atomic 软件组件
*原文标题：Develop an Atomic Software Component*

### 37. 目的
*原文标题：Purpose*

This Activity provides a rough outline of the creation of an Atomic Software Component.

### 38. 描述
*原文标题：Description*

Develop an Atomic Software Component activity
⌈
This is the generic Activity valid for several kinds of Atomic Software Components. The first step is to create design, including the runnables, events, inter-runnable variables, etc. Once this is complete, the contract header files can be created and the software component can be implemented.

Optionally, the safety relevant information for the software component and all contained elements can be defined. If the software component is developed as a SEOOC (Safety Element out of Context) and the safety requirements are not fully known at development time, the ASIL attribute can be set to indicate the integrity level the component was developed for, i.e. in the development process all development process related requirements of ISO 26262 for the specified ASIL have been applied.
⌋

For safety aspects, see chapter .

Note that the method of implementation, quality, testing, etc. are beyond the scope of this activity.

After the component is implemented and successfully compiled, its resources are measured and stored as part of the software component description for further usage by downstream processes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 559 章（内容从略，见纯文本全文）

39. 工作流
40. Develop Application 软件
41. 目的
42. 描述
43. 工作流
44. Uses Cases for more Specialized 软件 Components
45. 目的
46. 描述
47. 工作流
48. Develop 系统 and Subsystems
49. 概述
50. 目的
51. 描述
52. 设计系统
53. 目的
54. 描述
55. 工作流
56. Generate 系统 Extract
57. 目的
58. 描述
59. 工作流
60. Create ECU 系统描述
61. 目的
62. 描述
63. 工作流
64. 设计 Sub-System
65. 目的
66. 描述
67. 工作流
68. Generate CpSoftwareCluster Extract
69. 目的
70. 描述
71. 工作流
72. Generate ECU Extract
73. 目的
74. 描述
75. 工作流
76. 设计 Custom 转换器
77. 目的
78. 描述
79. 工作流
80. Define 系统 Safety Information
81. 目的
82. 描述
83. 工作流
84. Develop 基础软件
85. 概述
86. 目的
87. 描述
88. 工作流
89. 设计 BSW
90. 目的
91. 描述
92. 工作流
93. Develop BSW 模块
94. 目的
95. 描述
96. 工作流
97. Integrate 软件 for ECU
98. 描述
99. 概述
100. 目的
101. 描述
102. Inputs to ECU 配置
103. ECU 配置 Values
104. 工作流
105. Prepare ECU 配置
106. 描述
107. 工作流
108. Configure BSW and RTE
109. 描述
110. 工作流
111. Update ECU 配置
112. 描述
113. 工作流
114. 建模 ECU 时序
115. 工作流
116. Generate BSW and RTE
117. 描述
118. 工作流
119. Build Executable
120. 描述
121. 工作流
122. 配置 Classes
123. 配置 Class：Pre-compile Time
124. 描述
125. 工作流
126. 配置 Class：Link Time
127. 描述
128. 工作流
129. 配置 Class：Post-build Time
130. 描述
131. 工作流
132. different post-build variants in 配置 classes的处理
133. 描述
134. Components and 服务
135. 目的
136. 描述
137. 工作流
138. Calibration 概述
139. 目的
140. 描述
141. 工作流
142. 存储映射
143. 目的
144. 描述
145. 工作流
146. E2E Protection
147. 目的
148. 描述
149. 工作流
150. 诊断 Extract
151. 目的
152. 描述
153. 工作流
154. Rapid Prototyping
155. 目的
156. 描述
157. 工作流
158. Safety Information
159. 目的
160. 描述
161. 工作流
162. Variant 处理
163. 概述
164. Binding Times
165. Latest Binding Time
166. Actual Binding Time
167. Defining Variants
168. Choosing Variants
169. 定义 of Binding Times
170. 概述
171. A Classification of Artifacts with respect to Binding Times
172. Classification of Binding Times
173. BlueprintDerivationTime
174. FunctionDesignTime
175. InitialBindingTime
176. SystemDesignTime
177. CodeGenerationTime
178. PreCompileTime
179. CompileTime
180. LinkTime
181. PostBuild
182. Runtime
183. How to resolve Name Conflicts
184. Reasons for Name Conflicts
185. Points in the Methodology where Name Conflicts are resolved
186. Mechanisms for resolving Name Conflicts
187. Methodology 库
188. Common Elements
189. Work Product Kinds
190. Tasks
191. Add 通用 Documentation
192. Define Admin 数据
193. Define Alias Names
194. Evaluate Variant
195. Define 存储 Addressing Modes
196. Configure Memmap Allocation
197. Generate BSW 存储映射 Header
198. Generate SWC 存储映射 Header
199. Work Products
200. 通用 Documentation
201. Alias Name Set
202. Evaluated Variant Set
203. Autosar 规范
204. 通用 Autosar Artifact
205. 通用 Deliverable
206. 通用 Non-Autosar Artifact
207. Postbuild Variant Set
208. Predefined Variant
209. Standard Header Files
210. 系统 Constant Value Set
211. Roles
212. Tools
213. Compiler
214. Linker
215. 诊断
216. Work Products
217. Safety
218. Tasks
219. Define Safety Requirement
220. Define Safety Measure
221. Define ASIL For AUTOSAR Element
222. Refine Safety Requirement
223. Decompose Safety Requirement
224. Allocate Safety Measure
225. Allocate Safety Requirement
226. 映射 Safety Requirement to Safety Measure
227. Add Independence Relation
228. Work Products
229. Safety Information
230. Safety Requirement
231. Safety Measure
232. Virtual 功能性 Bus
233. Tasks
234. Define VFB Top Level
235. Define VFB Composition 组件
236. Extend Composition
237. Define VFB 组件 Constraints
238. Define VFB Application 软件组件
239. Define VFB Sensor or Actuator 组件
240. Define VFB Parameter 组件
241. Define ECU 抽象组件
242. Define Complex 驱动组件
243. Define VFB NvBlock 软件组件
244. Define Wrapper Components to Integrate Legacy 软件
245. Define VFB 接口
246. Define VFB 类型
247. Define VFB Modes
248. Define VFB Constants
249. Define VFB 时序
250. Define VFB Variants
251. Define VFB 集成 Connector
252. Translate Non-AUTOSAR 描述 to AUTOSAR 描述
253. Work Products
254. VFB 系统
255. Overall VFB 系统
256. VFB 系统 Extract
257. VFB Top Level 系统 Composition
258. VFB Composition 组件
259. VFB AUTOSAR Standard Package
260. Application 接口的AUTOSAR 规范
261. VFB Atomic 软件组件
262. VFB Atomic Application 软件组件
263. Complex 驱动组件
264. ECU 抽象软件组件
265. VFB Parameter 组件
266. VFB Sensor Actuator 组件
267. VFB NvBlock 软件组件
268. VFB Non AUTOSAR 组件
269. VFB 接口
270. VFB 类型
271. VFB 数据类型映射 Set
272. VFB Modes
273. VFB Constants
274. VFB 软件组件映射 Constraints
275. VFB 时序
276. a Non-AUTOSAR 系统的描述
277. 集成 Connector
278. 系统
279. Tasks
280. Set 系统 Root
281. Assign Top Level Composition
282. Define ECU 描述
283. Define 系统 Topology
284. Deploy 软件组件
285. 设计 CpSoftwareCluster
286. Extend CpSoftwareCluster
287. Generate or Adjust 系统 Flat 映射
288. Derive Communication Needs
289. Define Signal Path Constraints
290. Define 系统 Variants
291. Define 系统时序
292. Define Security Events
293. Extend Topology
294. Select 软件组件 Implementation
295. Select 设计 Time Variant
296. Define 系统视图映射
297. Create 转换器规范
298. Define Rapid Prototyping Scenario
299. Define 集成需求
300. Work Products
301. 系统描述
302. 抽象系统描述
303. Complete ECU 描述
304. CpSoftwareCluster Extract
305. 系统描述 Root Element
306. 系统映射概述
307. 数据映射
308. 软件 Components to ECUs的映射
309. 软件 Components to Implementations的映射
310. Signal Path Constraints
311. Topology
312. Ecu Resources 描述
313. 系统 Signal
314. 系统 Signal Group
315. 系统 Flat 映射
316. 系统时序
317. Security Extract
318. 系统视图映射
319. 转换器设计 Bundle
320. Custom 转换器规范
321. Rapid Prototyping Scenario
322. 集成需求
323. Communication Matrix and Communication Layers
324. Tasks
325. Define Communication Matrix
326. Define Frames
327. Define Signal PDUs
328. Define Secured PDUs
329. Define TP
330. Define 网络管理
331. Define PDU Gateway
332. Define Signal Gateway
333. Define RTE Fan-out
334. Define Transformation Technology
335. Define E2E 转换器 Technology
336. Define Transformation Chain
337. Work Products
338. Communication Layers
339. Communication Matrix
340. 数据 Link Layer
341. Interaction Layer
342. 诊断 Interaction Layer
343. 网络 Layer
344. Serializer 转换器
345. E2E 转换器
346. ECU Extract
347. Tasks
348. Extract ECU Topology
349. Generate or Adjust ECU Flat 映射
350. Flatten 软件 Composition
351. Extract the ECU Communication
352. Extract the ECU 时序建模
353. Extract the ECU 系统 Variant 建模
354. Extract ECU Rapid Prototyping Scenario
355. Work Products
356. ECU Extract
357. ECU Extract Root Element
358. ECU Extract of VFB 系统
359. ECU Extract of 数据映射
360. ECU Extract of Topology
361. ECU Extract for Communication
362. ECU Extract of 系统时序
363. ECU Extract of 系统 Variant 建模
364. ECU Flat 映射
365. ECU Extract of Rapid Prototyping Scenario
366. 软件组件
367. Tasks
368. Define 软件组件 Internal 行为
369. Define Partial Flat 映射
370. Define 软件组件时序
371. Define SymbolProps for 类型
372. Add Documentation to the 软件组件
373. Generate Atomic 软件组件 Contract Header Files
374. Generate 组件 Header 文件 in Vendor 模式
375. Generate 组件 Prebuild 数据 Set
376. Implement Atomic 软件组件
377. Compile Atomic 软件组件
378. 映射软件组件 to BSW
379. Measure 组件 Resources
380. Recompile 组件 in ECU Context
381. Define Consistency Needs
382. Generate Rapid Prototyping Wrapper
383. Work Products
384. Delivered Atomic 软件 Components
385. 软件组件 Internal 行为
386. Atomic 软件组件 Implementation
387. 软件组件 Documentation
388. 软件组件时序
389. 软件组件 to BSW 映射
390. Partial Flat 映射
391. Application Header 文件
392. 软件组件数据类型 Header
393. 组件 RTE Prebuild 配置 Header
394. Atomic 软件组件 Source 代码
395. Atomic 软件组件 Object 代码
396. Optimized Application Header 文件
397. Optimized 软件组件 Object 代码
398. Consistency Needs
399. Rapid Prototyping Wrapper Header 文件
400. Rapid Prototyping Wrapper Source 代码
401. Tools
402. 组件 API Generator Tool
403. 基础软件
404. Tasks
405. Define BSW 类型
406. Define BSW Entries
407. Define BSW 接口
408. Define Vendor Specific 模块定义
409. Define BSW 行为
410. Define BSW 模块时序
411. Generate BSW Contract Header Files
412. Implement a BSW 模块
413. Develop BSW 模块 Generator
414. Create 库
415. Compile BSW 核代码
416. Generate BSW 模块 Prebuild Dataset
417. Work Products
418. BSW Standard Package
419. BSW 模块 Bundle
420. BSW 设计 Bundle
421. BSW 模块 ICS Bundle
422. BSW 模块 Delivered Bundle
423. AUTOSAR 软件模块规范
424. AUTOSAR Standard 类型 and Blueprints
425. AUTOSAR Platform 类型 and Blueprints
426. BSW 模块 Generator
427. AUTOSAR Standardized ECU 配置 Parameter 定义
428. BSW 模块 Preconfigured 配置
429. BSW 模块 Recommended 配置
430. BSW 模块 Vendor Specific 配置 Parameter 定义
431. BSW 类型
432. 基础软件 Entries
433. 基础软件模块描述
434. 基础软件模块 Internal 行为
435. 基础软件模块 Implementation 描述
436. Build Action 清单
437. 基础软件模块时序
438. 基础软件模块核 Header
439. 基础软件模块核 Source 代码
440. 基础软件 Interlink Header
441. 基础软件 Interlink 类型 Header
442. BSW RTE Prebuild 配置 Header
443. 基础软件模块 Object 代码
444. 库描述
445. 库 Header Files
446. 库 Object 代码
447. Custom 转换器
448. ECU 集成 and 配置
449. Tasks
450. Provide RTE Calibration Dataset
451. Define 集成 Variant
452. Generate Base ECU 配置
453. Generate Updated ECU 配置
454. Define ECU 时序
455. Configure EcuC
456. Configure OS
457. Configure RTE
458. Configure Watchdog 管理器
459. Configure 模式管理
460. Configure NvM
461. Configure 诊断
462. Create 服务组件
463. Connect 服务组件
464. Configure COM
465. Configure IO Hardware 抽象
466. Configure MCAL
467. Configure 转换器
468. Generate BSW 配置代码 and 建模 Extensions
469. Generate Local MC 数据支持
470. Create MC 功能建模
471. Generate RTE
472. Generate Scheduler
473. Generate OS
474. Generate RTE Prebuild Dataset
475. Compile ECU Source 代码
476. Generate ECU Executable
477. Generate RTE Postbuild Dataset
478. Generate A2L
479. Measure Resources
480. Refine Rapid Prototyping Scenario
481. Merge CpSoftwareCluster
482. Work Products
483. BSW 模块集成 Bundle
484. ECU 软件 Delivered
485. 服务组件描述
486. ECU 服务 Connectors
487. ECU 时序
488. BSW 模块接口 Extension
489. BSW 模块行为 Extension
490. BSW 模块 Implementation Extension
491. ECU 配置 Values
492. RTE Implementation 描述
493. RTE Prebuild 配置 Header
494. Calibration Parameter Value Set
495. MC 功能建模
496. Local Measurement and Calibration 支持数据
497. RTE Measurement and Calibration 支持数据
498. RTE Source 代码
499. BSW Scheduler 代码
500. OS Generated 代码
501. RTE Postbuild Variants Dataset
502. ECU Object 代码
503. ECU Executable
504. Merged ECU Executable
505. 映射 of the ECU Executable
506. A2L 文件
507. MC 驱动支持数据
508. MC Additional Config
509. Tools
510. RTE Generator
511. BSW Generator Framework
512. ECU Config Classes
513. Tasks
514. Compile Unconfigured Bsw
515. Compile Configured Bsw
516. Compile BSW 配置数据
517. Compile Generated BSW
518. Generate BSW Precompile 配置 Header
519. Generate BSW Source 代码
520. Generate BSW 配置代码
521. Generate BSW Postbuild 配置代码
522. Link ECU 代码 after Precompile 配置
523. Link ECU 代码 During Link Time 配置
524. Link ECU 代码 During Post-build Time
525. Work Products
526. BSW 模块配置 Header 文件
527. BSW 模块 Completely Generated Source 代码
528. BSW 模块配置数据 Source 代码
529. BSW 模块配置数据 Object 代码
530. BSW 模块配置数据 Loadable to ECU 存储
531. 附录
532. Mentioned Class Tables
533. Change History
534. Change History of this document according to AUTOSAR Release R4.1.1
535. Added 规范 Items in 4.1.1
536. Changed 规范 Items in 4.1.1
537. Deleted 规范 Items in 4.1.1
538. Change History of this document according to AUTOSAR Release R4.1.2
539. Added 规范 Items in 4.1.2
540. Changed 规范 Items in 4.1.2
541. Deleted 规范 Items in 4.1.2
542. Change History of this document according to AUTOSAR Release R4.1.3
543. Added 规范 Items in 4.1.3
544. Changed 规范 Items in 4.1.3
545. Deleted 规范 Items in 4.1.3
546. Change History of this document according to AUTOSAR Release R4.2.1
547. Added 规范 Items in 4.2.1
548. Changed 规范 Items in 4.2.1
549. Deleted 规范 Items in 4.2.1
550. Change History of this document according to AUTOSAR Release R4.2.2
551. Added 规范 Items in 4.2.2
552. Changed 规范 Items in 4.2.2
553. Deleted 规范 Items in 4.2.2
554. Change History of this document according to AUTOSAR Release R4.3.0
555. Added 规范 Items in 4.3.0
556. Changed 规范 Items in 4.3.0
557. Deleted 规范 Items in 4.3.0
558. Change History of this document according to AUTOSAR Release R4.3.1
559. Added 规范 Items in 4.3.1
560. Changed 规范 Items in 4.3.1
561. Deleted 规范 Items in 4.3.1
562. Change History of this document according to AUTOSAR Release R4.4.0
563. Added 规范 Items in 4.4.0
564. Changed 规范 Items in 4.4.0
565. Deleted 规范 Items in 4.4.0
566. Change History of this document according to AUTOSAR Release R19-11
567. Added 规范 Items in 19-11
568. Changed 规范 Items in 19-11
569. Deleted 规范 Items in 19-11
570. Change History of this document according to AUTOSAR Release R20-11
571. Added 规范 Items in R20-11
572. Changed 规范 Items in R20-11
573. Deleted 规范 Items in R20-11
574. Change History of this document according to AUTOSAR Release R21-11
575. Added 规范 Items in R21-11
576. Changed 规范 Items in R21-11
577. Deleted 规范 Items in R21-11
578. Change History of this document according to AUTOSAR Release R22-11
579. Added 规范 Items in R22-11
580. Changed 规范 Items in R22-11
581. Deleted 规范 Items in R22-11
582. Change History of this document according to AUTOSAR Release R23-11
583. Added 规范 Items in R23-11
584. Changed 规范 Items in R23-11
585. Deleted 规范 Items in R23-11
586. Change History of this document according to AUTOSAR Release R24-11
587. Added 规范 Items in R24-11
588. Changed 规范 Items in R24-11
589. Deleted 规范 Items in R24-11
590. Change History of this document according to AUTOSAR Release R25-11
591. Added 规范 Items in R25-11
592. Changed 规范 Items in R25-11
593. Deleted 规范 Items in R25-11
594. Change History of this document according to AUTOSAR Release R26-11
595. Added 规范 Items in R26-11
596. Changed 规范 Items in R26-11
597. Deleted 规范 Items in R26-11
