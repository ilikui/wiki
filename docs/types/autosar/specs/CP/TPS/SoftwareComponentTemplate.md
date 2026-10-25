# Software Component Template (`SoftwareComponentTemplate`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 062 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TPS_SoftwareComponentTemplate_062\AUTOSAR_CP_TPS_SoftwareComponentTemplate.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TPS_SoftwareComponentTemplate_062\AUTOSAR_CP_TPS_SoftwareComponentTemplate.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TPS_SoftwareComponentTemplate_062\zzgen\CP_TPS_SoftwareComponentTemplate.complete.txt`

## 文档简介

For the sake of a compact description of relevant meta-model elements the discussion and explanation of conceptual aspects has been concentrated in this chapter.

Reading this chapter is not a pre-requisite for understanding the subsequent chapters. It just provides a central place for the detailed description of conceptual aspects used in various other chapters of this document.

The actual explanation of the concept of a software-component starts in .

## 模块依赖

SwDataDependency allows dependent data elements to be specified. For example, other ParameterDataPrototypes can be combined into one ParameterDataPrototype whose consistent value is automatically derived by the measurement and calibration system. Upon adjusting one of the parameters, the dependent parameter is then also automatically adjusted according to the chosen formula.

Consider for example a rectangular triangle with a hypotenuse of length 1, where the length of the other sides are the parameters A and B. When adjusting parameter A, the parameter B has to be adjusted accordingly to B = \sqrt {(1 - A*A)}. Also, other parameters might depend on B, e.g. B\_AREA = B * B or TRIANGULAR\_AREA = (A * B) / 2.

This example is shown in .

A dependent parameter should not be adjustable by itself. The only way to influence its value is through the adjustment of a parameter it depends on.

An exemplary definition of a data dependency can be found in .

| Class | SwDataDependency | < | < | < |
|---|---|---|---|---|
| Note | This element describes the interdependencies of data objects, e.g. variables and parameters. |  |  |  |

Use cases:

* Calculate the value of a calibration parameter (by the MCD system) from the value(s) of other calibration parameters.
| * Virtual data - that means the data object is not directly in the ecu and this property describes how the "virtual variable" can be computed from the real ones (by the MCD system). | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject | < | < | < |
| Aggregated by | SwDataDefProps.swDataDependency | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| swDataDependencyArgs | SwDataDependencyArgs | 0..1 | aggr | Specifies the arguments used in the data dependency. Note that this is 0..1 since the aggregated class is a container (atpMixed). |

Tags: xml.sequenceOffset=40
| swDataDependencyFormula | CompuGenericMath | 0..1 | aggr | This element describes the formula with which the dependencies between the participating objects are defined. |
|---|---|---|---|---|

Tags: xml.sequenceOffset=30

| Class | «atpMixed» SwDataDependencyArgs | < |
|---|---|---|

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. 概述
*原文标题：Overview*

This document contains the specification of the AUTOSAR Software-Component Template.

In this context, the term software-component refers to a formally described piece of software existing that needs the  for execution.

Please note that the general ideas behind the semantics of application software-components have been described in the specification of the . The latter, however, represents conceptual work that strongly influences but does not totally govern the formal definition of software-components.

Note further that this document does not provide any "best practice" recommendations of software-component modeling nor does it require or enforce a certain methodology. Note however, that the methodology aspect is covered by the specification of the .

Although it is beyond any doubt reasonable to use a suitable AUTOSAR Authoring Tool for dealing with AUTOSAR software-components, this specification does not make any assumptions nor does it give recommendations regarding the tooling.

Please note that parts of this document are also relevant for the AUTOSAR adaptive platform. This relation is formally specified by the definition of constraints.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 范围
*原文标题：Scope*

As already mentioned in , the Scope of this document is the description of AUTOSAR software-components. This work covers the following three aspects:

* A general description of SwComponentTypes using PortPrototypes and PortInterfaces, i.e. this document defines the SwComponentType as an entity which can be described through PortPrototypes which provide or require PortInterfaces.
* A description of CompositionSwComponentTypes which are sub-systems consisting out of connected instances of software-components, i.e. software-components may be defined in the form of hierarchical subsystems which in turn consist of software-components again. The description of such hierarchical structures is in scope of this document.
* A description of AtomicSwComponentType which is implemented as a piece of software that can be mapped to an AUTOSAR ECU. An AtomicSwComponentType therefore shows up in the ECU Software Architecture depicted in . In this figure, the green (vertically striped) and blue (diagonally striped) borders show the aspects that are described by the Software-Component Template.

Aspects of AUTOSAR Basic Software not relevant for the RTE are out of scope; these are covered by the .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Organization of the Meta-Model

sketches the overall structure of the meta-model which formally defines the vocabulary required to describe AUTOSAR software-components. As the diagram points out, other template specifications (e.g.  and ) also use the same modeling approach in order to define an overall consistent model of AUTOSAR software description.

The dashed arrows in the diagram describe dependencies in terms of import-relationships between the packages within the meta-model. For example, the package SWComponentTemplate imports meta-classes defined in the packages  and .

Please note that this specification document will (with some well-defined exceptions) mostly discuss meta-model elements defined in the package SWComponentTemplate.

For clarification, please note that the package GenericStructure contains some fundamental infrastructure meta-classes and common patterns that are described in . As these are used by all other template specification the dependency associations are not depicted in the diagram for the sake of clarity.

### 5. the 模板的结构
*原文标题：Structure of the Template*

AUTOSAR software-components are described on three distinctive levels, as shown in .

### 6. 软件 Components on VFB Level的描述
*原文标题：Description of Software Components on VFB Level*

The highest (most abstract) description level is the . In this document SwComponentTypes are described with the means of DataTypes, PortInterfaces, PortPrototypes, and connections between them.

At this level, the fundamental communication properties of components and their communication relationships among each other are expressed.

In the diagram depicted in , this aspect is expressed by means of the description of AtomicSwComponentType.

### 7. 软件 Components on RTE Level的描述
*原文标题：Description of Software Components on RTE Level*

The middle level allows for behavior description of a given AtomicSwComponentType. The SwcInternalBehavior is modeled according to AUTOSAR RTE concepts, e.g. RTEEvents and, in terms of executable units, the RunnableEntitys.

For instance, for a ClientServerOperation defined in the scope of a particular ClientServerInterface on the VFB, the behavior specifies which RunnableEntity is activated as a consequence of the invocation of the specific ClientServerOperation.

As sketched by , there may be zero or one SwcInternalBehaviors aggregated by a given AtomicSwComponentType.

In response to the existence of the stereotype atpSplitable>> at one aggregation, it is possible to distribute the aggregation over several physical files.

### 8. Descriptions of 软件 Components on Implementation Level
*原文标题：Descriptions of Software Components on Implementation Level*

The lowest level of description specifies the implementation (i.e. in terms of the AUTOSAR meta-model: the SwcImplementation) of a given SwcInternalBehavior description. More precisely, the RunnableEntitys of such a behavior are mapped to code (source code or object code).

There may be different SwcImplementations that reference a specific SwcInternalBehavior description, e.g. in different programming languages, or with differently optimized code.

Please note that Implementation has been described in previous versions of this document. In response to the evolution of the AUTOSAR standard, the description of the Implementation aspect has been moved to the "CommonStructure" (see ) because it is also used for creating the .

The SwcImplementation still remains in the scope of this document as it exclusively covers aspects of software-components rather than basic software modules.

### 9. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. About Tables

There is a number of tables in this document that describe the applicability or multiplicity of model elements. These tables contain empty cells, which represent a "not applicable" meaning. Model elements that correspond to an empty cell shall not exist in the context described by the respective table cell.

If the value of a table cell shall indicate that that either the existence or multiplicity of the represented model element shall be ignored anyway, the table cell gets the content "d/c" for "don't care". This means that if the respective model element exists, it shall be ignored in the downstream processing of the model.

### 11. Conceptual Aspects

### 12. 简介
*原文标题：Introduction*

For the sake of a compact description of relevant meta-model elements the discussion and explanation of conceptual aspects has been concentrated in this chapter.

Reading this chapter is not a pre-requisite for understanding the subsequent chapters. It just provides a central place for the detailed description of conceptual aspects used in various other chapters of this document.

The actual explanation of the concept of a software-component starts in .

### 13. The Encapsulation Principle

The guiding principle behind the definition of an AUTOSAR software-component is that it represents a self-contained entity.

This means that every software-component shall be Independent from another software-component in terms of the configuration using the AUTOSAR meta-model and the contract for the code that implements the behavior of the software-component.

This does not mean that software-component cannot share configuration elements with other software-components (it typically has to, for example the usage of a PortInterface, see ), it means that one software-component shall not be defined by the content of another software-component.

There are references, which are only meant to target elements within the same software-component. For example RTEEvent.startOnEvent (see ) is meant to refer to a RunnableEntity (see ) within the same software-component.

Creating such a reference that targets an element in another software-component would violate the encapsulation principle.

Please note that there are some constraints (for example,  and ) to avoid the creation of prominent cases of a violation of the encapsulation principle.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Measurement and Calibration

### 15. 基础 Approach of Measurement and Calibration
*原文标题：Basic Approach of Measurement and Calibration*

While performing the calibration process using an MCD tool (Measurement, Calibration, and Diagnostic) the calibration engineer needs to have a specific insight to the data within the CPU at runtime.

This insight is provided by access to ECU internal variables (also called measurements) as well as calibration parameters (sometimes also called characteristic value). For more details, please refer to

The description of measurement variables and calibration parameters is basically the same. In AUTOSAR both appear finally as DataPrototypes.

### 16. Calibration Parameters 概述
*原文标题：Calibration Parameters Overview*

A Calibration Parameter is a parameter which characterizes the dynamics of a control algorithm. From a software implementation point of view, it is a variable with only read-access during the normal operation of an ECU.

Calibration Parameters (some examples are sketched in ) are specialized DataPrototype entities in terms of its associated type but are used similarly.

 Ways to define a calibration parameter
⌈
This means that Calibration Parameters can be defined

* individually for a SwComponentPrototype in the SwcInternalBehavior of a SwComponentType via an aggregation of an ParameterDataPrototype in the role of perInstanceParameter (similar to the supported variants of per-instance memory).
* sharing between all SwComponentPrototypes of the same SwComponentType in its SwcInternalBehavior via an aggregation of an ParameterDataPrototype in the role of sharedParameter or constantMemory.
* for several SwComponentPrototypes (using the port-/interface-concept with ParameterInterfaces).
⌋

Please note:

* The definition of perInstanceParameter is further described in .
*  provides more information about the definition of sharedParameter or constantMemory.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Using Calibration Parameters

As mentioned above, a ParameterDataPrototype can be used in the context of SwcInternalBehavior as well as in the context of PortPrototypes.

### 18. Sharing Calibration Parameters within Compositions

To provide calibration parameters for being visible in other SwComponentTypes, a dedicated ParameterSwComponentType (see ) that inherits from SwComponentType has to be used as a SwComponentPrototype within a CompositionSwComponentType.

 SwComponentType requiring access to shared calibration parameters needs RPortPrototype typed by a ParameterInterface
⌈
Every SwComponentType requiring access to shared calibration parameters will have an RPortPrototype typed by a ParameterInterface.

The definition of this shared calibration access in the context of a CompositionSwComponentType will be defined by creating a SwConnector between the relevant SwComponentPrototypes.
⌋

| Class | ParameterSwComponentType | < | < | < |
|---|---|---|---|---|
| Note | The ParameterSwComponentType defines parameters and characteristic values accessible via provided Ports. The provided values are the same for all connected SwComponentPrototypes |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Sharing Calibration Parameters between SwComponentPrototypes of the same SwComponentType

To share calibration parameters between several SwComponentPrototypes of the same SwComponentType, a ParameterDataPrototype is attached to an SwcInternalBehavior in sharedParameter role (see ).

When the SwcInternalBehavior is aggregated by an AtomicSwComponentType, the actual calibration parameters of the ParameterDataPrototype carry the identical value for all SwComponentPrototypes.

 ParameterDataPrototype aggregated in the role constantMemory
⌈
Additionally, it is possible to describe the implementation of shared characteristic values via a ParameterDataPrototype which is attached to an SwcInternalBehavior in the role constantMemory.

In contrast to the ParameterDataPrototype in sharedParameter role this kind of memory is not instantiated by the RTE.

This approach enables more efficient implementations (especially for software-components provided as object code) by avoidance of the additional indirection caused by the RTE's component data structure.
⌋

This kind of memory reduces the dependencies of the software-component's implementation to generated RTE code which is appreciated for safety related functionalities.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Providing Instance Individual Characteristic 数据
*原文标题：Providing Instance Individual Characteristic Data*

ParameterDataPrototype aggregated in the role perInstanceParameter
⌈
For the provision of instance-specific calibration parameters, a ParameterDataPrototype is owned by a SwcInternalBehavior in the role perInstanceParameter.

If the SwcInternalBehavior is attached to an AtomicSwComponentType, the actual calibration values are specific for each SwComponentPrototype.
⌋

### 21. Runtime and 数据 Consistency Aspects
*原文标题：Runtime and Data Consistency Aspects*

### 22. Background：the Issues
*原文标题：Background: the Issues*

This section provides some background information and lists possible strategies concerning the implementation of the RunnableEntitys and the RTE with respect to efficient communication between the RunnableEntitys.

The communication among RunnableEntitys can very efficiently be implemented by means of "sharing memory".

This is technically feasible because it is always guaranteed that the RunnableEntitys within an AtomicSwComponentType are always gathered at a specific processing unit (in other words: distribution is not an option).

Note that the purpose of communication among the RunnableEntitys is to establish a data flow scheme. The latter is a very popular pattern in the application of control theory to automotive embedded systems.

So if "global variables" are used for establishing internal communication among RunnableEntitys, they acquire the semantics of so called state-messages.

Nevertheless, directly sharing memory between RunnableEntitys requires a serious problem to be solved: the guarantee of data consistency among communicating RunnableEntitys.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Mutual Exclusion with Semaphores

Multi-threaded operating systems provide mutexes (mutual exclusion semaphores) that protect access to an exclusive resource that is used from within several tasks.

The RTE could use these OS-provided mutexes to make sure that the RunnableEntitys sharing a memory-space would never run concurrently. The RTE would make sure the task running the RunnableEntity has taken an appropriate mutex before accessing the memory shared between the RunnableEntitys.

### 24. Interrupt Disabling

Another alternative would be the disabling of interrupts during the run-time of RunnableEntitys or at least for a period in time identical to the interval from the first to the last usage of a concurrently accessed variable in a RunnableEntity. This approach could lead to seriously non-deterministic execution timing.

### 25. Priority Ceiling

Priority ceiling allows for a non-blocking protection of shared resources. Provided that the priority scheme is static, the AUTOSAR OS is capable of temporarily raising the priority of a task that attempts to access a shared resource to the highest priority of all tasks that would ever attempt to access the resource.

By this means is technically impossible that a task in temporary possession of a resource is ever preempted by a task that attempts to access the resource as well.

### 26. Implicit Communication by means of Variable Copies

Another alternative is the usage of copies of concurrently accessed variables with state message semantics. Note that this approach directly corresponds to the semantics of "implicit" sender-receiver communication (see ).

This means in particular that for a concurrently used variable a copy is created on which a RunnableEntity entity can work without any danger of data inconsistency.

This concept requires additional code to write the value of the concurrently accessed variable to the copy before the RunnableEntity that accesses the variable is executed. The value of the copy shall be written back to the concurrently accessed variable after the RunnableEntity has been terminated.

This concept is sketched in . Since it would be too expensive and error-prone to manually care about the copy routines it would be a good idea to leave the creation of the additional code to a suitable code generator.

The additional copy-routines, as sketched in , already protect the particular RunnableEntitys from unintended changes of concurrently accessed variables.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 数据 Consistency at Runtime
*原文标题：Data Consistency at Runtime*

In addition, copy routines will only be inserted where appropriate, e.g. a copy routine for writing the value of a copy back to the concurrently accessed variable will only be inserted if the RunnableEntity has write-access to the concurrently used variable.

Please note that the copy routines have to temporarily make sure that the copy process is not interrupted in order to be capable of consistently copying the values from and to the concurrently accessed variable.

These periods, however, are supposed to be very short compared with the overall run-time consumption of the RunnableEntity and thus would not have a significant impact on the runtime behavior.

Further optimization criteria can be applied, for example: it would be (as sketched in ) perfectly safe to avoid the creation of copies for RunnableEntitys that are scheduled in the task with the highest priority of all tasks that (via contained RunnableEntitys) access a certain concurrently accessed variable.

In order to keep the application code free of any dependencies from the code generation, access to concurrently accessed variables will be guarded by macros that are later resolved by the code generator.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 数据 Consistency的建模 Aspects
*原文标题：Modeling Aspects of Data Consistency*

The intrinsic meaning of the terms "explicit communication" and "implicit communication" is explained in .

It would be fair to say that the distinction between implicit and explicit communication establishes a usage pattern in the application domain, i.e. in the world of the developer of AUTOSAR software-components and their implementation.

There is another facet to this subject, however, namely the question of how this pattern is implemented in the meta-model. With respect to the application of the pattern for port-based communication the details can be found in , more specifically in .

The consideration of the internal communication based on so-called "inter-runnable variables" is described in .

By reading the respective text sections it becomes apparent that the two applications of the pattern are modeled differently. The port-based communication uses the VariableAccess to formalize different roles of accessing communication elements.

Some roles used for this purpose imply explicit communication (e.g. dataSendPoint) and some represent implicit communication (e.g. dataWriteAccess).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Variant 处理 in the 软件组件模板
*原文标题：Variant Handling in the Software Component Template*

The Software Component Template supports the creation of Variants in a subset of its model elements. The full list of model elements that support variation can be found in .

The usage of variation points in the scope of this document does not only affect the model, it also has an impact on the behavior of the RTE. An example for this effect is given in .

 SwConnector exists depending on a PostBuild condition
⌈
A SwConnector that exists depending on a PostBuild condition has an impact on the behavior of API function calls that apply on a PortPrototype to which the SwConnector is attached.

If the SwConnector does not exist, the behavior of the RTE API functions need to take this caveat into account.

This means that the RTE implementation of this PortPrototype resembles the behavior of an unconnected PortPrototype.
⌋

Please find more details in the specification of the .

 API functions of not existing SwConnector are still part of the software-component's implementation
⌈
If SwConnectors do not exist, the corresponding API functions are still part of the software-component's implementation. It is not possible to remove the API functions in a PostBuild step.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Composition 组件类型的Communication 规范
*原文标题：Communication Specification of Composition Component Types*

ComSpecs defined by CompositionSwComponentTypes
⌈
It shall be possible to attach ComSpecs to PortPrototypes owned by CompositionSwComponentTypes.
⌋

### 31. Rationale

ComSpecs (these are explained in detail within ) attached to a PortPrototype owned by an AtomicSwComponentType have a direct impact on the generation of the RTE.

The RTE Generator, on the other hand, does not consider the existence of CompositionSwComponentTypes.

Nevertheless, there are some cases where the definition of a ComSpec attached to a PortPrototype owned by a CompositionSwComponentType does make sense.

That is, if an OEM wants to submit the definition of a CompositionSwComponentType to a supplier for adding more details and implementing the behavior the OEM might want to point out that from the OEM's point of view sender initValues and receiver initValues apply for the elements of PortInterfaces used to type the delegation PortPrototypes.

The idea is that the supplier takes over the initValues attached to the delegation PortPrototypes and copies them to the PortPrototypes owned by SwComponentPrototypes of the CompositionSwComponentType.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. PRPortPrototype

In some cases SwComponentTypes need to read and write the same piece of data. One of the most prominent examples for this use case is the NvBlockSwComponentType that factually ready and writes blocks of NvRAM.

Without the ability to combine read and write semantics in a kind of PortPrototype that supports both read and write semantics, work-arounds have to be implemented that come with a certain footprint on memory and processing time.

### 33. Use Case 1

Without the ability to define a combined read and write semantics the definition of a combination of an RPortPrototype and a PPortPrototype is required for reading and writing the applicable data, as sketched in .

Technically, this read and write access is related to the same data item in an NVRAM Block. This requires a consistent connection of the PortPrototypes between an NvBlockSwComponentType and ApplicationSwComponentType as well as a consistent mapping of the corresponding RPortPrototype and a PPortPrototype of the NvBlockSwComponentType and the related element of the ramBlock.

### 34. Use Case 2

It may happen that a SwComponentType need to consume the same data that it produces, as exemplified in .

If the only way to achieve this was the connection of a PPortPrototype to an RPortPrototype of the same SwComponentType then the creator of the SwComponentType cannot enforce this connection as it is created on a higher level of abstraction in the context of a CompositionSwComponentType.

In other words, it is impossible to fully specify the semantics of the otherwise self-contained SwComponentType.

This means that only in the in best case one buffer for the data is needed. But depending on the mapping RunnableEntitys to OS tasks additional buffers may need to be allocated by the RTE to fully implement the implicit communication pattern.

As an alternative, the ApplicationSwComponentType could utilize inter-runnable variables but unfortunately this inhibits any optimization in the RTE and will consume additional RAM. In contrast to the previous approach, at least two buffers are needed.

### 35. Use Case 3

In this scenario, several ApplicationSwComponentTypes are iterating over the same large set of data, as sketched in .

This means each ApplicationSwComponentType implements one out of many steps of a complex data processing algorithm applied to the same piece of data.

For example, this scenario may apply for video signal processing in camera applications. Typically, such applications will not be distributed over several ECUs.

It is clear that in this case the allocation of several buffers in the RTE is required to implement the individual connections between the ApplicationSwComponentTypes.

In most cases, the processing has to be executed at a certain point in time in a dedicated order.

### 36. Solution

The solution to the above-mentioned use cases is the ability to define a PortPrototype that can read and write the same piece of data. This solves both the described problem of resource consumption and the problem of having to define multiple PortPrototypes as outlets for same piece of data item.

The technical details of the definition of PRPortPrototype are explained in  and .

### 37. Variable-size Array 数据类型
*原文标题：Variable-size Array Data Types*

### 38. 概述 and Use cases
*原文标题：Overview and Use cases*

AUTOSAR supports the definition of array data types where the size of the actual payload varies at run-time. As far as the configuration is concerned, it is possible to specify a maximum number of array elements that shall not be exceeded at run-time.

In order to properly understand the approach, it is necessary to understand that the support for Variable-Size Array Data Types has been introduced in two waves that each had a different motivation.

### 39. "Old-world" dynamic-size Arrays

In the first wave, the support for Variable-Size Array Data Types was limited to data types that basically boil down to an array where the base type is an unsigned integer data type with a length of exactly one byte.

The main use cases for this scenario are derived from diagnostics requirements as well as support for the J1939 communication protocol.

In both cases the actual length of a Variable-Size Array Data Type could be determined from the context, i.e. either by the diagnostic basic-software module or by the implementation of the J1939 TP.

For the lack of a better terminology, this specification distinguishes between "old-world" dynamic-size arrays and "new-world" Variable-Size Array Data Types. It will be necessary to clearly define the characteristics that allow for a disambiguation between the "old-world" dynamic-size arrays and "new-world" Variable-Size Array Data Types.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 769 章（内容从略，见纯文本全文）

40. "New-world" variable-size Arrays
41. 建模 Aspects regarding Application 数据类型
42. 建模 Aspects regarding Implementation 数据类型
43. Optional Elements in Structures
44. Background
45. 软件 Components
46. 简介
47. 软件组件
48. 概述
49. Port Prototype
50. Atomic 软件组件类型
51. Parameter 软件组件类型
52. Symbolic Name of a Software-Component
53. Composition 软件组件类型
54. 概述
55. 软件组件 Prototype
56. 软件 Connector
57. Instantiation-specific RTE Events
58. Communication among 软件 Components
59. 简介
60. Port 接口概述
61. Port 接口 Details
62. Sender Receiver Communication
63. Sender Receiver 接口
64. Communication Patterns for Sender Receiver Communication
65. Invalidation Policy
66. Meta-data on the Application 软件 Level
67. Client Server Communication
68. Client Server 接口
69. 错误处理 in Client/Server Communication
70. External Trigger Event Communication
71. 模式 Communication
72. 模式 Switch 接口
73. 数据类型 used for 模式 Communication
74. Relevance for Measurement and Calibration
75. Parameter Communication
76. Port 接口映射 and 数据 Scaling
77. Port 接口映射
78. 映射 of Sender Receiver 接口, Parameter 接口 and Non Volatile 数据接口 Elements
79. Client Server 接口 Elements的映射
80. 模式接口 Elements的映射
81. Trigger 接口 Elements的映射
82. Elements of a composite 数据类型的映射
83. 数据 Conversion
84. Linear 数据 Scaling
85. Table Conversion
86. Relevance for 数据 Transformation
87. Port Annotation
88. 简介
89. SenderReceiverAnnotation
90. ClientServerAnnotation
91. Annotation for the I/O Hardware 抽象 Layer
92. Parameter Port Annotation
93. 模式 Port Annotation
94. Trigger Port Annotation
95. Non Volatile 数据 Port Annotation
96. Delegated Port Annotations
97. 通用 Annotation
98. Communication 规范
99. Communication 规范 for Sender-Receiver Communication
100. Receiver Communication 规范
101. Sender Communication 规范
102. 数据 Filter
103. Communication between Application and NV Block 软件 Components
104. Communication 行为 to be implemented by the 软件组件
105. Transmission ComSpec Props
106. Transmission triggered by Element of composite 数据类型
107. Communication 行为 to be implemented by the Com Handler
108. Communication 规范 for Client-Server Communication
109. Client ComSpec
110. Server ComSpec
111. Communication 规范 for 模式 Switch Communication
112. 模式 Switch Sender ComSpec
113. 模式 Switch Receiver ComSpec
114. Communication 规范 for Parameter Communication
115. Communication 规范 for NV 数据 Communication
116. NV Require ComSpec
117. NV Provide ComSpec
118. 数据 Transformation的配置
119. Port Groups within 软件组件类型
120. Partial Networking
121. VFC 控制 Ports
122. VFC Status Ports
123. implicit Communication 行为的Formal 定义
124. Consistency Needs on Receiver Side
125. Consistency Needs on Sender Side
126. Consistency Needs for Senders and receivers of the same 数据 inside on RunnableEntityGroup
127. 数据描述
128. 简介
129. 数据类型
130. 概述
131. 数据类型映射
132. 概述
133. Advanced Topics
134. Inline 定义 of ImplementationDataTypeElement
135. Explicit 定义 of ImplementationDataType
136. DataTapeMap exists on the level of the record element
137. 数据 Categories
138. Application 数据类型
139. Application Primitive 数据类型
140. 数据类型 for Single Values
141. About Enumerations
142. 数据类型 for Calibration Parameters
143. 数据类型 for Textual Strings
144. Application Composite 数据类型
145. ApplicationArrayDataType
146. Variable Size Array
147. Multi-Dimensional Arrays
148. Index 数据类型
149. ApplicationRecordDataType
150. Implementation 数据类型
151. 概述
152. 类型 Reference using Implementation 数据类型的建模
153. 结构 using Implementation 数据类型的建模
154. Optional Element 结构 with ImplementationDataType的建模
155. Union using Implementation 数据类型的建模
156. Array using Implementation 数据类型的建模
157. 概述
158. Variable-Size Array using Implementation 数据类型的建模
159. Pointer using Implementation 数据类型的建模
160. Base 类型
161. Big Picture
162. Category
163. Native Declaration
164. Base 类型 Size
165. Base 类型 Encoding
166. Relation between Base 类型 Size, Base 类型 Encoding and Internal Constraint
167. Byte Order and 存储 Alignment
168. 数据类型 Terminology
169. Primitive 类型
170. Compound Primitive 数据类型
171. Integral Primitive 类型
172. Variable-Size Array 数据类型
173. Wrapped Union 数据类型
174. Optional Element 结构
175. Compu Scale Literal
176. 数据 Prototypes
177. 概述
178. 数据 Constraints for 数据 Prototypes typed by Array DataTypes
179. Reference to 数据 Prototypes
180. AUTOSAR Variable Ref
181. AUTOSAR Parameter Ref
182. 建模 Approach
183. Access into Variable 数据 Prototype typed by an Implementation 数据类型
184. Access into Parameter 数据 Prototype typed by an Implementation 数据类型
185. Properties of 数据定义
186. 概述
187. Invalid Value
188. Properties for Measurement
189. Properties of Curves and Maps
190. 规范 of grouped Axes
191. 规范 of fix Axes
192. Setting an Axis Input Value
193. Setting a Group Axis
194. Specifying 数据 Dependencies
195. Precedence of 数据 properties with respect to 数据 elements, axis elements, computation methods, units
196. Elements used in Properties of 数据定义
197. Computation Methods
198. 概述
199. 限制 of Computation Methods
200. Units in the context of Computation Methods
201. Symbols in Computation Methods
202. Display Format in Computation Methods
203. Category Values in the context of a CompuMethod
204. Applicability of Attributes in the context of a CompuMethod
205. Compu Method and Autosar 数据类型
206. CompuMethod and ApplicationDataType
207. CompuMethod and ImplementationDataType
208. Compu Method and A2L
209. Physical Dimensions
210. Units and Unit Groups
211. 数据 Constraints
212. Physical 限制
213. Internal 限制
214. Addressing Methods
215. Record Layouts
216. Specifying Record Layouts
217. RecordLayouts and DataTypes
218. Record Layouts and Interpolation Routines
219. 设计 Record Layouts
220. Recipes for Record Layouts
221. Record Layout for scalar Value
222. Record Layout for one-dimensional Array
223. Record Layout for two-dimensional Array
224. Record Layout for an Axis
225. Record Layout for a Curve
226. Record Layout for a 映射
227. Record Layout for a Cuboid
228. Record Layout for a Cube_4
229. Record Layout for a Cube_5
230. Display Presentation
231. 规范 of Constant Values
232. 概述
233. Reference to Constant
234. Constant 规范映射
235. Values for Variable-Size Array
236. Values for Compound Primitive 数据类型
237. Values for TEXTTABLE
238. Values for BITFIELD_TEXTTABLE
239. Values for Strings
240. String is modeled by ApplicationDataType
241. String is modeled by ImplementationDataType
242. 规范 of Values based on Rules
243. 支持 for primitive 数据类型
244. 支持 for composite 数据类型
245. 支持 for compound primitive 数据类型
246. Initial Values
247. 概述
248. Initial Value Representation
249. Initial Values For Calibration Parameters
250. Initial Value for optional Element
251. Initial Value for optional Application Record Element
252. Initial Value for optional Implementation 数据类型 Element
253. Compatibility
254. 简介
255. Compatibility of 数据类型
256. Application 数据类型
257. Application Primitive 数据类型
258. Application Composite 数据类型
259. Implementation 数据类型
260. Compatibility of 软件 Base 类型
261. Compatibility of 软件数据定义 Properties
262. Compatibility of Units
263. Compatibility of Physical Dimensions
264. Compatibility of 数据 Constraints
265. Compatibility in the Case of ImplementationDataType
266. Compatibility of Compu Methods
267. 软件 Text Properties
268. Compatibility of Application 数据类型 and Implementation 数据类型
269. 通用 Rule
270. Category VALUE
271. Category ARRAY, VAL_BLK
272. Category 结构
273. Category BOOLEAN
274. Category COM_AXIS, RES_AXIS, CURVE, 映射, CUBOID, CUBE_4, CUBE_5
275. Forbidden Mappings
276. Compatibility of Variable 数据 Prototypes and Parameter 数据 Prototypes
277. Compatibility of Sender Receiver 接口, Parameter 接口 and Non Volatile 数据接口
278. Connection of Required and Provided Port via AssemblySwConnector
279. Connection of Inner and Outer Port via DelegationSwConnector
280. Connection of Required and Provided Port via PassThroughSwConnector
281. Compatibility of ParameterDataPrototype and VariableDataPrototype depending on PortInterface 类型
282. Compatibility of 模式 Switch 接口
283. Connection of Required and Provided Port via AssemblySwConnector
284. Connection of Inner and Outer Port via DelegationSwConnector
285. Connection of Outer and Outer Port via PassThroughSwConnector
286. Compatibility of 模式 Declaration Group Prototypes
287. Compatibility of 模式 Declaration Groups
288. Compatibility of Argument Prototypes
289. Compatibility of Application 错误
290. Compatibility of Client/Server Operations
291. Compatibility of Client Server 接口
292. Connection of Required and Provided Port via AssemblySwConnector
293. Connection of Inner and Outer Port via DelegationSwConnector
294. Connection of Outer and Outer Port via PassThroughSwConnector
295. Compatibility of Trigger 接口
296. Connection of Required and Provided Port via AssemblySwConnector
297. Connection of Inner and Outer Port via DelegationSwConnector
298. Connection of Outer and Outer Port via PassThroughSwConnector
299. Compatibility of Trigger
300. Entire Delegation of a Provided Port Prototype
301. Split and Merge of PortInterface Elements
302. Compatibility in the Case of a Flat ECU Extract
303. Internal 行为
304. 简介
305. Runnable Entity
306. Concurrency and Reentrancy of a RunnableEntity that cannot be Invoked Concurrently
307. Concurrency and Reentrancy of a RunnableEntity that can be Invoked Concurrently
308. Timed Activation of Runnable Entities
309. Additional Remarks and Clarifications
310. Reentrancy and 多 Instantiation
311. Reentrancy and "库 Functions"
312. Compatibility of Client Server Operations triggering the same Runnable Entity
313. Categories of Runnable Entities
314. Arguments of a Runnable Entity
315. Activation Reason of a Runnable Entity
316. Runnable Entity for 初始化目的
317. RTE Event
318. Defining an Event
319. Defining how to Respond to an Event
320. Communication among Runnable Entities
321. 描述 Possibility 1：Exclusive Area
322. Entire Runnable Runs in the Exclusive Area
323. Runnable would Dynamically Enter and Leave the Exclusive Area
324. 配置 of API Generation
325. 描述 Possibility 2：Inter-Runnable Variable
326. Inter Runnable Triggering
327. 数据 Access of Runnable Entities
328. RunnableEntities and Sender Receiver Communication
329. Terminology
330. 数据 Access
331. Explicit Sending and Receiving
332. Implicit Sending and Receiving
333. DataSendCompletedEvent
334. DataWriteCompletedEvent
335. DataReceivedEvent
336. DataReceiveErrorEvent
337. RunnableEntities and Client Server Communication
338. Invoking an Operation
339. Providing an Implementation of an Operation
340. Reacting on 数据 Transformation 错误
341. RunnableEntities and External Trigger Event Communication
342. Trigger Source
343. Trigger Sink
344. RunnableEntities and Parameter Access
345. Instantiation 数据 Def Props
346. RunnableEntities and 模式 Communication
347. Port API Options
348. Enable to Take Address
349. Indirect API Generation
350. Port Defined Argument Value
351. Supported Features
352. Buffer Locking
353. Per Instance 存储
354. Per Instance 存储 typed by "C" 数据类型
355. Per Instance 存储 typed by AUTOSAR 数据类型
356. Static 存储 and Constant 存储
357. Included AUTOSAR 数据类型
358. Included 模式 Declaration Groups
359. 服务 Needs
360. 概述
361. Assignment of 服务 Needs to Ports and 数据
362. Swc 服务 Dependency
363. Mixed Usage of Different Kinds of 服务 Needs
364. Same Kind of 服务 Needs used in 服务 Use Case
365. Variation Point Proxy
366. Implementation
367. 模式管理
368. Declaration of Modes
369. Modes and Events
370. 初始化 / Finalization
371. 模式错误行为
372. Summary Meta-Model Excerpt Related to Modes
373. ECU 抽象 and Complex Drivers
374. 简介
375. High Level Hardware and 软件架构
376. 接口 and APIs
377. ECU 抽象 and its AUTOSAR 接口
378. Sensors/Actuators
379. I/O Hardware 抽象
380. Complex 驱动
381. 服务
382. 概述：Generation of Service-related 建模 Elements
383. 服务软件组件类型
384. 服务 Proxy 组件类型
385. Non Volatile 存储
386. 简介
387. NvBlockComponent
388. Software-Components using NVRAM 数据 of NvBlockComponents
389. Software-Components connected to NvBlockComponents
390. NvBlockDescriptor
391. Writing Strategies
392. Existence of 多 event-driven Writing Strategies
393. NvBlockNeeds
394. RAM Block and ROM Block
395. NvBlockDataMapping
396. Client Server Ports
397. BulkNvDataDescriptor
398. SwcInternalBehavior of an NvBlockSwComponentType
399. 软件组件 Documentation
400. 简介
401. 服务 Dependencies and 服务 Use Cases
402. 概述
403. NvM 服务 Dependencies
404. NvM Use Case：Permanent RAM Block
405. NvM Use Case：Temporary RAM Block
406. NvM Use Case：RAM Block with explicit 同步 using Mirror 接口
407. NvM Use Case：Software-Components using Nv 数据 provided by NvBlockSwComponentType (not ServiceSwComponent of NvM)
408. NvM Use Case：Software-Components using Nv 数据 provided by NvBlockSwComponentType with individual settings in NvBlockNeeds
409. Watchdog 服务 Dependencies
410. Watchdog 服务 Use Case：Local Supervision
411. Watchdog 服务 Use Case：Global Supervision Status 通知
412. Watchdog 服务 Use Case：控制 global supervision or get global supervision status
413. Watchdog 服务 Use Case：Software-component wants to obtain the status of a local supervision
414. Watchdog 服务 Use Case：Software-component wants to report a checkpoint
415. COM 管理器服务 Needs
416. ComM Use Case：read current ComM 模式
417. ComM Use Case：request ComM 模式
418. ComM Use Case：Software-Component acts as a 模式管理器 that influences the ECU 状态
419. Read PNC ComM 模式
420. ECU 状态管理器服务 Needs
421. EcuM Use Case：read current ECU 模式
422. EcuM Use Case：request a certain ECU 状态
423. EcuM Use Case：select 关机 Target
424. EcuM Use Case：select Boot Target
425. BswM
426. Partial Networking
427. 模式管理器
428. 模式 User
429. 模式 Requester
430. 服务 Oriented Use Cases
431. PortGroup supports Relation between Software-Component and 服务 Instance
432. 通用 Server interaction
433. 通用 Client interaction
434. Event Reception Without Subscription
435. Use Case：Server 服务 Offer
436. Use Case：Server 服务 Subscription Status
437. Use Case：Client Event / Method Subscription
438. Use Case：Client Event and Method Subscription Status
439. Crypto 服务 Dependencies
440. 概述
441. Crypto 服务 Use Cases
442. Crypto 服务 Use Case：Hash calculation
443. Crypto 服务 Use Case：MAC calculation
444. Crypto 服务 Use Case：MAC verification
445. Crypto 服务 Use Case：generation of random numbers
446. Crypto 服务 Use Case：Encryption with Authenticated Encryption with Associated 数据 (AEAD)
447. Crypto 服务 Use Case：Decryption with Authenticated Encryption with Associated 数据 (AEAD)
448. Crypto 服务 Use Case：encryption
449. Crypto 服务 Use Case：decryption
450. Crypto 服务 Use Case：signature generation
451. Crypto 服务 Use Case：signature verification
452. Crypto 服务 Use Case：usage of key 管理
453. Crypto 服务 Job Use Cases
454. Crypto 服务 Use Case：usage of job API to set key valid
455. Crypto 服务 Use Case：usage of job API to create a random seed
456. Crypto 服务 Use Case：usage of job API to generate a key
457. Crypto 服务 Use Case：usage of job API to derive a key
458. Crypto 服务 Use Case：usage of job API to execute calculation of the public value for key exchange
459. Crypto 服务 Use Case：usage of job API to execute calculation of shared secret for key exchange
460. Crypto 服务 Use Case：usage of job API to execute certificate parsing
461. Crypto 服务 Use Case：usage of job API to execute certificate verification
462. Crypto 服务 Use Case：Wrap plain-text key using AES algorithms
463. Crypto 服务 Use Case：Unwrap cipher-text using AES algorithms
464. Crypto Key 管理 Use Cases
465. KeyM 服务 Use Case：Atomic Software-Component wants check a certificate on KeyM
466. KeyM 服务 Use Case：Atomic Software-Component wants to retrieve a certificate from KeyM
467. KeyM 服务 Use Case：Atomic Software-Component wants to retrieve elements of a certificate from KeyM
468. KeyM 服务 Use Case：Atomic Software-Component wants to check the existence of a certificate from KeyM
469. KeyM 服务 Use Case：Atomic Software-Component wants to store a (derived) key in KeyM
470. KeyM 服务 Use Case：Atomic Software-Component wants to store a container with (encrypted) keys in KeyM
471. KeyM 服务 Use Case：Atomic Software-Component wants to verify if cryptographic operation was executed using a specific key
472. 诊断服务 Dependency
473. Development Approach
474. 功能 Inhibition Needs
475. 功能 Inhibition 管理器服务 use Case：read 功能 permission
476. 功能 Inhibition 管理器 Use Case：react on suppressed or unavailable events
477. 功能 Inhibition 管理器 Use Case：Atomic Software-Component wants to get notified when FID 状态 changes
478. 功能 Inhibition 管理器 Use Case：Atomic Software-Component wants to query the list of 诊断 event that are inhibiting a FID
479. 诊断 Event Needs
480. Dem 服务 Use Case：诊断 monitor, debouncing by Dem
481. Dem 服务 Use Case：诊断 monitor, debouncing by SWC
482. Dem 服务 Use Case：Atomic Software-Component provides Information about Operation Cycles
483. Dem 服务 Use Case：Atomic Software-Component enables Reporting of Dtcs In 通用
484. Dem 服务 Use Case：Atomic Software-Component enables Storage of Subsequent DTCs
485. Dem 服务 Use Case：retrieve Information of the Lamp Status
486. Dem 服务 Use Case：DEM provides Information that the Fault Storage Overflows
487. Dem 服务 Use Case：Atomic Software-Component suppresses the Storage of DTCs
488. Dem 服务 Use Case：Atomic Software-Component informs that the PTO is active
489. Dem 服务 Use Case：Atomic Software-Component needs Information about any DTC Status Change
490. Dem 服务 Use Case：Call Operation if the 数据 of a given 诊断 Event changes (I)
491. Dem 服务 Use Case：Call Operation if the 数据 or Status of any 诊断 Event Changes (II)
492. Dem 服务 Use Case：Atomic Software-Component provides 数据 for 诊断 Purposes
493. Dem 服务 Use Case：Atomic Software-Component gets Information about a specific DTC
494. Dem 服务 Use Case：Atomic Software-Component wants to be triggered on Monitor Status Changes
495. Dem 服务 Use Case：Write Parameter Identifier (PID) by Atomic Software-Component
496. Dem 服务 Use Case：Read Parameter Identifier by Atomic Software-Component
497. Dem 服务 Use Case：诊断 Monitor provides Monitor 数据, debouncing by Dem
498. Dem 服务 Use Case：诊断 Monitor provides Monitor 数据, debouncing by Atomic Software-Component
499. Dem 服务 Use Case：Atomic Software-Component checks whether an Event is suppressed
500. Dem 服务 Use Case：Atomic Software-Component wants Information about DTC Clearance
501. Dem 服务 Use Case：Atomic Software-Component wants to reset a Degradation 状态
502. Dem 服务 Use Case：Atomic Software-Component wants to clear a DTC
503. Dem 服务 Use Case：Atomic Software-Component wants to contribute 数据 to an Extended 数据 Record of a DTC
504. 诊断 Communication Needs
505. Dcm 服务 Use Case：read/write current values by Client Server 接口
506. Dcm 服务 Use Case：read/write current values of specific DID by Client Server 接口
507. Dcm 服务 Use Case：read/write current values by Sender Receiver 接口 or Nv 数据接口
508. Dcm 服务 Use Case：read/write entire DID by Sender Receiver 接口 or Nv 数据接口
509. Dcm 服务 Use Case：start/stop or request Routine Results
510. Dcm 服务 Use Case：IO 控制 by Client Server 接口
511. Dcm 服务 Use Case：IO 控制 by Sender Receiver 接口
512. Dcm 服务 Use Case：Access to 协议, Session and Security Information
513. Dcm 服务 Use Case：Verify the Access to Security Level
514. Dcm 服务 Use Case：服务 Request 通知
515. Dcm 服务 Use Case：read/write and IOCtrl current Values by Client Server 接口
516. Dcm 服务 Use Case：Atomic Software-Component acts as a "文件 Server" to a 诊断 Tester
517. Dem 服务 Use Case：Deliver Authentication 通知
518. OBD related Needs
519. Dem 服务 Use Case：In-Use-Monitor Performance Ratio calculation
520. Dcm 服务 Use Case：read Parameter Identifier via 诊断服务 by Client Server 接口
521. Dcm 服务 Use Case：read Parameter Identifier via 诊断服务 by Sender Receiver 接口
522. Dcm 服务 Use Case：Request Vehicle Information
523. Dem 服务 Use Case：Read DTR 数据 from SW-C for OBD 服务 $06
524. Dcm 服务 Use Case：request 控制 of On-Board 系统, Test or 组件
525. Dem 服务 Use Case：In-Use-Monitoring Performance Ratio Denominator 接口
526. Dem 服务 Use Case：SW-C sets DTR for OBD 服务 $06
527. 诊断 over IP
528. DoIP 服务 Use Case：GID 同步 can be necessary if the ECU is DoIP Gid 同步 Master
529. DoIP 服务 Use Case：Vehicle Information is broadcast or can be requested by the Tester
530. DoIP 服务 Use Case：Tester could also request the Power Status with respect to 诊断
531. DoIP 服务 Use Case：Routing Activation Mechanism is used which can lead to additional Impact regarding Authentication or Confirmation
532. DoIP 服务 Use Case：a DoIP Entity needs to be informed when an External Tester is attached or activated.
533. 服务 Use Case：Set and reset Warning Indicator Request Bit
534. DoIP 服务 Use Case：Atomic Software-Component provides the further Action Byte to the DoIP 服务组件
535. Miscellaneous 诊断服务 Use-Cases
536. Dcm 服务 Use Case：DiagnosticSessionControl
537. Dcm 服务 Use Case：EcuReset
538. Dcm 服务 Use Case：EcuReset ModeRapidPowerShutDown
539. Dcm 服务 Use Case：CommunicationControl
540. Dcm 服务 Use Case：ControlDTCSetting
541. Dcm 服务 Use Case：SecurityAccess
542. 服务 Use Case：Atomic Software-Component implements a Hardware 关机
543. 服务 Use Case：Upload and Download of 数据
544. 诊断 Log and Trace Dependency
545. Dlt use Case：Atomic Software-Component transmits Debug Information
546. Synchronized Time-Base 管理器 Dependency
547. StbM Use Case：start Timer and potentially get notified about its Expiration
548. StbM Use Case：Atomic Software-Component wants to get 通知 of Status Changes
549. StbM Use Case：Process Time Snapshot obtained from Global Time slave for 诊断 Purposes
550. StbM Use Case：Atomic Software-Component represents a Global Time Master
551. StbM Use Case：Atomic Software-Component represents a Global Time Slave
552. StbM Use Case：Atomic Software-Component analyzes Predictions about the Time 同步 Process
553. StbM Use Case：Software-Components wants to initiate the Cloning of a Time Base
554. Secure On-Board Communication
555. SecOc Use Case：obtain the Verification Status of Secure Communication
556. SecOc Use Case：Atomic Software-Component retires from Secure Communication for a given Period
557. SecOc Use Case：deliver Freshness to SecOC I
558. SecOc Use Case：deliver Freshness to SecOC II
559. SecOc Use Case：deliver Freshness to SecOC III
560. SecOc Use Case：enable the Sending of Pdus even if Computation of the MAC is not possible
561. SecOc Use Case：Receive 通知 about an Authentication Attempt
562. J1939 Communication
563. J1939RM Use Case：Atomic Software-Component sends Requests to the Bus
564. J1939RM Use Case：Atomic Software-Component accepts Requests from the Bus
565. J1939Dcm wants to retrieve Calibration Verification Numbers from an Atomic Software-Component
566. 错误 Tracer
567. 错误 Tracer Use Case：Default 错误 Tracer 服务 use Case：report Failure
568. Intrusion 检测系统管理器
569. IdsM 服务 Use Case：Atomic Software-Component reports Security Event
570. IdsM 服务 Use Case：Atomic Software-Component sets or retrieves Security Event Reporting 模式
571. IdsM 服务 Use Case：Atomic Software-Component provides Custom Time Stamp to IdsM
572. Charge 管理器
573. ChrgM Use Case：ChrgM requests Message 数据 from Atomic Software-Component
574. ChrgM Use Case：ChrgM sends Message Response to Atomic Software-Component
575. ChrgM Use Case：ChrgM sends 错误通知 to Atomic Software-Component
576. ChrgM Use Case：ChrgM provides Connection Setup Parameters to the Atomic Software-Component
577. 通用目的 Time 服务
578. 通用目的 Time 服务 Use Case
579. Rapid Prototyping Scenarios
580. 定义 of Rapid Prototyping Scenario
581. Usage of RptContainers on M1
582. Usage of atpSplitable for RptContainers on M1
583. Modifications of the Meta-Model for supporting the RPT scenario
584. Extended Buffer Access Method
585. RP Preparation
586. 服务 Points
587. 服务 Functions
588. 附录
589. Reference Material
590. Abbreviations
591. Imposition Times of Constraints
592. 示例
593. 数据类型的示例
594. a String 数据类型的定义
595. UTF-8 String
596. UTF-16 String
597. an Index 数据类型的定义
598. 定义 of variable-size Arrays
599. a Wrapped Union 数据类型的定义
600. an Multi-Dimensional Array 数据类型的定义
601. 定义 of "Typedefs"
602. Base 类型 for Arrays的定义
603. 定义 of Optional Elements and the Availability Bitfield
604. Usage of ArVariableInImplementationDataInstanceRef
605. 数据 Properties的示例
606. a 数据 Dependency的定义
607. 定义 of Unit and Physical Dimension
608. 定义 of Record Layout
609. 定义 of Record Layout of a Curve
610. 定义 of Fix Axis
611. 示例 for the 规范 of constant Values
612. Constant 规范 for category CURVE
613. Constant 规范 for category 映射
614. Constant 规范 for category 映射 with two STD_AXIS
615. Constant 规范 for category COM_AXIS
616. Value 规范 for BITFIELD_TEXTTABLE
617. Value 规范 for 映射 depending on Record Layout
618. Row-First
619. Column-First
620. Rule-based Value 规范
621. primitive 数据类型的Rule-based Value 规范 for Elements
622. composite 数据类型的Rule-based Value 规范 for Elements
623. Rule-based Value 规范 for an Array of compound primitive Objects
624. 示例 of Compu Methods
625. Compu Method representing an Enumeration
626. Compu Method representing a Linear Conversion
627. Compu Method representing a Linear Conversion with texttable
628. Conversion specified by a rational 功能
629. Compu Method representing a BITFIELD_TEXTTABLE
630. Compatibility 示例
631. Compatibility on Assembly Level
632. Valid Use
633. Invalid Use
634. Compatibility on Delegation Level
635. Valid Use
636. Invalid Use
637. Software-Components connected to NvBlockComponents
638. Invalid Connection according to constr_1417
639. Invalid Connection according to constr_1418
640. Rapid Prototyping 示例
641. 定义 of Rapid Prototyping Scenario
642. Supported Special Use Cases
643. Asymmetric 数据 Transformation between a Software-Component and a Complex 驱动
644. 概述
645. 建模 Aspects
646. 建模 of InstanceRef
647. 简介
648. 建模
649. Components and Compositions
650. implicit Communication 行为的定义
651. Internal 行为
652. Mentioned Class Tables
653. 术语表
654. Change History of AUTOSAR Traceable Items
655. Traceable item history of this document according to AUTOSAR Release R4.0.1
656. Changed Constraints in R4.0.1
657. Added Constraints in R4.0.1
658. Deleted Constraints in R4.0.1
659. Traceable item history of this document according to AUTOSAR Release R4.0.2
660. Changed Constraints in R4.0.2
661. Added Constraints in R4.0.2
662. Deleted Constraints in R4.0.2
663. Traceable item history of this document according to AUTOSAR Release R4.0.3
664. Changed Constraints in R4.0.3
665. Added Constraints in R4.0.3
666. Added 规范 Items in R4.0.3
667. Deleted Constraints in R4.0.3
668. Deleted 规范 Items in R4.0.3
669. Traceable item history of this document according to AUTOSAR Release R4.1.1
670. Changed Constraints in R4.1.1
671. Added Constraints in R4.1.1
672. Changed 规范 Items in R4.1.1
673. Added 规范 Items in R4.1.1
674. Deleted Constraints in R4.1.1
675. Deleted 规范 Items in R4.1.1
676. Traceable item history of this document according to AUTOSAR Release R4.1.2
677. Changed Constraints in R4.1.2
678. Added Constraints in R4.1.2
679. Changed 规范 Items in R4.1.2
680. Added 规范 Items in R4.1.2
681. Deleted Constraints in R4.1.2
682. Deleted 规范 Items in R4.1.2
683. Traceable item history of this document according to AUTOSAR Release R4.1.3
684. Added Traceables in R4.1.3
685. Changed Traceables in R4.1.3
686. Deleted Traceables in R4.1.3
687. Added Constraints in R4.1.3
688. Changed Constraints in R4.1.3
689. Deleted Constraints in R4.1.3
690. Traceable item history of this document according to AUTOSAR Release R4.2.1
691. Added Traceables in R4.2.1
692. Changed Traceables in R4.2.1
693. Deleted Traceables in R4.2.1
694. Added Constraints in R4.2.1
695. Changed Constraints in R4.2.1
696. Deleted Constraints in R4.2.1
697. Traceable item history of this document according to AUTOSAR Release R4.2.2
698. Added Traceables in R4.2.2
699. Changed Traceables in R4.2.2
700. Deleted Traceables in R4.2.2
701. Added Constraints in R4.2.2
702. Changed Constraints in R4.2.2
703. Deleted Constraints in R4.2.2
704. Traceable item history of this document according to AUTOSAR Release R4.3.0
705. Added Traceables in R4.3.0
706. Changed Traceables in R4.3.0
707. Deleted Traceables in R4.3.0
708. Added Constraints in R4.3.0
709. Changed Constraints in R4.3.0
710. Deleted Constraints in R4.3.0
711. Traceable item history of this document according to AUTOSAR Release R4.3.1
712. Added 规范 Items in R4.3.1
713. Changed 规范 Items in R4.3.1
714. Deleted 规范 Items in R4.3.1
715. Added Constraints in R4.3.1
716. Changed Constraints in R4.3.1
717. Deleted Constraints in R4.3.1
718. Traceable item history of this document according to AUTOSAR Release R4.4.0
719. Added 规范 Items in R4.4.0
720. Changed 规范 Items in R4.4.0
721. Deleted 规范 Items in R4.4.0
722. Added Constraints in R4.4.0
723. Changed Constraints in R4.4.0
724. Deleted Constraints in R4.4.0
725. Traceable item history of this document according to AUTOSAR Release R19-11
726. Added 规范 Items in R19-11
727. Changed 规范 Items in R19-11
728. Deleted 规范 Items in R19-11
729. Added Constraints in R19-11
730. Changed Constraints in R19-11
731. Deleted Constraints in R19-11
732. Traceable item history of this document according to AUTOSAR Release R20-11
733. Added 规范 Items in R20-11
734. Changed 规范 Items in R20-11
735. Deleted 规范 Items in R20-11
736. Added Constraints in R20-11
737. Changed Constraints in R20-11
738. Deleted Constraints in R20-11
739. Traceable item history of this document according to AUTOSAR Release R21-11
740. Added 规范 Items in R21-11
741. Changed 规范 Items in R21-11
742. Deleted 规范 Items in R21-11
743. Added Constraints in R21-11
744. Changed Constraints in R21-11
745. Deleted Constraints in R21-11
746. Traceable item history of this document according to AUTOSAR Release R22-11
747. Added 规范 Items in R22-11
748. Changed 规范 Items in R22-11
749. Deleted 规范 Items in R22-11
750. Added Constraints in R22-11
751. Changed Constraints in R22-11
752. Deleted Constraints in R22-11
753. Traceable item history of this document according to AUTOSAR Release R23-11
754. Added 规范 Items in R23-11
755. Changed 规范 Items in R23-11
756. Deleted 规范 Items in R23-11
757. Added Constraints in R23-11
758. Changed Constraints in R23-11
759. Deleted Constraints in R23-11
760. Added Advisories in R23-11
761. Changed Advisories in R23-11
762. Deleted Advisories in R23-11
763. Traceable item history of this document according to AUTOSAR Release R24-11
764. Added 规范 Items in R24-11
765. Changed 规范 Items in R24-11
766. Deleted 规范 Items in R24-11
767. Added Constraints in R24-11
768. Changed Constraints in R24-11
769. Deleted Constraints in R24-11
770. Added Advisories in R24-11
771. Changed Advisories in R24-11
772. Deleted Advisories in R24-11
773. Traceable item history of this document according to AUTOSAR Release R25-11
774. Added 规范 Items in R25-11
775. Changed 规范 Items in R25-11
776. Deleted 规范 Items in R25-11
777. Added Constraints in R25-11
778. Changed Constraints in R25-11
779. Deleted Constraints in R25-11
780. Added Advisories in R25-11
781. Changed Advisories in R25-11
782. Deleted Advisories in R25-11
783. Traceable item history of this document according to AUTOSAR Release R26-11
784. Added 规范 Items in R26-11
785. Changed 规范 Items in R26-11
786. Deleted 规范 Items in R26-11
787. Added Constraints in R26-11
788. Changed Constraints in R26-11
789. Deleted Constraints in R26-11
790. Added Advisories in R26-11
791. Changed Advisories in R26-11
792. Deleted Advisories in R26-11
793. Upstream 映射
794. 简介
795. BswM
796. Com
797. Dcm
798. Dem
799. EcuC
800. MemMap
801. NvM
802. Os
803. Rte
804. SecOC
805. SwCluC
806. WdgM
807. Splitable Elements in the 范围 of this Document
808. Variation Points in the 范围 of this Document
