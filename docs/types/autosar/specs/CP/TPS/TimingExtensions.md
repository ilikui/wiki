# Specification of Timing Extensions for Classic Platform (`TimingExtensions`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 411 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TPS_TimingExtensions_411\AUTOSAR_CP_TPS_TimingExtensions.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TPS_TimingExtensions_411\AUTOSAR_CP_TPS_TimingExtensions.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TPS_TimingExtensions_411\zzgen\CP_TPS_TimingExtensions.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. 概述
*原文标题：Overview*

This AUTOSAR document contains the specification of the AUTOSAR Timing Extensions (TIMEX) and describes the elements of the AUTOSAR meta-model  used for creating timing models for the respective AUTOSAR Platform.

It is a supplement to the formal Unified Modeling Language (UML) definition of the Timing Extensions by means of the AUTOSAR meta-model. In other words, this document in addition to the formal definition provides introductory description and rationale for the part of the AUTOSAR meta-model relevant for the creation of timing models.

### 3. Approach

For the integration of timing information into the AUTOSAR meta-model there were two viable alternatives: the extension of existing templates, or the definition of a separate timing template.

Several discussions lead to the decision to explicitly NOT defining a separate timing template. The most valuable advantage of such an approach is addressed by the idea behind the current template composition. They are highly adapted to the AUTOSAR methodology () and the several templates handle specific process steps in the methodology.

It is neither the goal to provide a proposal for a timing augmented development process, nor to define an isolated, new process step (e.g. a timing process step). Therefore, the augmentation of the existing templates instead of the creation of a new timing template reduces dependencies in the meta-model among templates.

### 4. 范围
*原文标题：Scope*

The primary purpose of TIMEX is to support constructing embedded real-time systems that satisfy given timing requirements and to perform timing analysis/validations of those systems once they have built up.

TIMEX provides a timing model as specification basis for a contract based development process, in which the development may be carried out by different organizations in different locations and time frames.

The constraints entered in the early phase of the project (when corresponding solutions are not developed yet) shall be seen as extra-functional requirements agreed between the development partners. In such way, the timing specification supports a top-down design methodology.

However, due to the fact that a pure top-down design is not feasible in most of the cases (e.g. because of legacy code), the timing specification allows the bottom-up design methodology as well.

The resulting overall specification shall enable the analysis of a system's timing behavior and the validation of the analysis results against timing constraints. Thus, timing properties required for the analysis shall be contained in the timing augmented system model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 建模
*原文标题：Modeling*

The AUTOSAR Timing Extensions (TIMEX) provide some basic means to describe and specify timing information: TimingDescriptions, expressed by TimingDescriptionEvents and TimingDescriptionEventChains, and TimingConstraints that are imposed on these TimingDescriptionEvent and TimingDescriptionEventChains. Both means, TimingDescriptions and TimingConstraints, are organized in timing views for specific purposes.

In general, the purpose of TIMEX are two fold:

* to provide timing requirements that guide the construction of systems which eventually shall satisfy those timing requirements
* to provide sufficient timing information to analyze and validate the temporal behavior of a system

Compared to the specification of a system's functional behavior, the specification of its timing behavior requires additional information to be captured. Not only the eventual occurrence of events but also their exact timing or the concurrency of various events become important. Therefore, in the specification of timing extensions for AUTOSAR, the event is the basic entity. This event is used to refer to an observable behavior within a system at a certain point in time. Example: (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. TimingExtensions (时序 Views)
*原文标题：TimingExtensions (Timing Views)*

A TIMEX model starts with the meta-class TimingExtension or rather, one of the sub-classes of TimingExtension as the top-level element. This is the owning element for all other related elements. The sub-classes of TimingExtension define a set of timing views as shown in Figure  and detailed in the next sub-sections. The chosen view depends on the availability of necessary information and the stage in the workflow. The timing views are:

* VfbTiming: timing information related to the interaction (e.g. reading and writing of data to ports) of SwComponentTypes at VFB level ()
* SwcTiming: timing information related to the SwcInternalBehavior of AtomicSwComponentTypes ()
* SystemTiming: timing information related to a System, utilizing information about topology, software deployment, and signal mapping ()
* BswModuleTiming/BswCompositionTiming: respectively, timing information related to the BswInternalBehavior of a single BswModuleDescription; timing information related to BswInternalBehavior of more than one implementation of a BswModuleDescription ()
* EcuTiming: timing information related to the EcucValueCollection covering the entire software on an ECU with application software an

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. VfbTiming

AUTOSAR defines the Virtual Functional Bus  as a composition of SwComponentPrototypes at a logical level, regardless of their physical distribution. On this logical level a special view can be applied for timing specification. This section describes what kind of timing specification can be applied at VFB level for a system or sub-system. Typically, end-to-end timing constraints, including (physical) sensors and actuators, shall be captured in this view, allowing an early formalization of those constraints.

Neglecting the physical distribution means that the VfbTiming view does not deal with the question, in which system context the prototype of a CompositionSwComponentType shall be implemented. An additional restriction of the VfbTiming view is present due to the black box treatment of software components. The SwcInternalBehavior of AtomicSwComponentTypes is not considered. For these mentioned restrictions (irrelevance of the physical distribution, black box view), TimingDescriptions at VFB level should only refer to SwComponentTypes, PortPrototypes and their connections, but not the InternalBehavior.

The VfbTiming view is applicable for different system granularities.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. SwcTiming

In contrast to the VfbTiming view, a specification engineer might especially be interested in the SwcInternalBehavior of AtomicSwComponentTypes that are represented as black boxes at VFB level. The SwcInternalBehavior specifies a component's behavioral decomposition into runnable entities, which are executed at runtime. Thus, in SwcTiming view, a timing description is attached to the SwcInternalBehavior of a SwComponentType. It can refer to the activation, start, and termination (see section ) of the execution of a RunnableEntity.

 Purpose of SwcTiming
⌈
The element SwcTiming aggregates all timing information, timing descriptions and timing constraints related to the Software Component View.
⌋

| Class | SwcTiming | < | < | < |
|---|---|---|---|---|
| Note | The SwcTiming is used to describe the timing of an atomic software component. |  |  |  |

TimingDescriptions aggregated by SwcTiming are restricted to event chains referring to events which are derived from the classes TDEventVfb and TDEventSwcInternalBehavior.

Tags: atp.recommendedPackage=TimingExtensions

This Class is only used by the AUTOSAR Classic Platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. SystemTiming

At system level a special prototype of a CompositionSwComponentType-the RootSwCompositionPrototype-is instantiated. This prototype, the chosen hardware topology and other artifacts are used as input to the task dealing with the deployment of software components onto ECUs in order to configure the system. The main configuration result is the mapping of software components to ECUs and in further steps the resulting communication matrix is created. This information is aggregated in the System description.

The SystemTiming view is used to provide timing information at system level. As an extension, it can be attached to a System. As the System description aggregates all the information about SwComponentTypes and their corresponding SwcInternalBehavior, it is possible to use the same concepts that are available in the views VfbTiming and SwcTiming also in this timing view. The difference is the specific system context that defines the validity of timing information at system level. Without knowledge of the mapping of software components to a target hardware respectively ECU, only a generic platform independent description can be provided.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. BswModuleTiming and BswCompositionTiming

The Basic Software Timing consists of two perspectives, which are described in the next sections.

### 12. BswModuleTiming

As part of the methodology, a BswModuleDescription is generated for each BSW module as part of the ECU configuration phase. For every module its internals, the BswInternalBehavior, shall be defined, i.e. structuring any BswModuleEntity. Similar to the timing view on the SwcInternalBehavior of an AtomicSwComponentType as described in section , the BSW module timing view focuses on the activation, start and end of the execution of any BswModuleEntity. The timing description for each module can be attached to the BswModuleDescription.

 Purpose of BswModuleTiming
⌈
The element BswModuleTiming aggregates all timing information, timing descriptions and timing constraints, that is related to the Basic Software Module View.
⌋

| Class | BswModuleTiming | < | < | < |
|---|---|---|---|---|
| Note | A model element used to define timing descriptions and constraints for the BswInternalBehavior of one BSW Module. Thereby, for each BswInternalBehavior a separate timing can be specified. |  |  |  |

A constraint defined at this level holds true for all Implementations of that BswInternalBehavior.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. BswCompositionTiming

In contrast to the element BswModuleTiming, which describes the timing information of a single BswInternalBehavior, the BswCompositionTiming describes the timing information for more than one implementation of a basic software module - a composition of basic software modules. Typically, this is the case when the timing information of a basic software stack, consisting of several basic software modules, shall be described or the timing information of a basic software module that is deployed onto different cores shall be described.

 Purpose of BswCompositionTiming
⌈
The element BswCompositionTiming describes the timing information related to BswInternalBehavior of more than one implementation of a BswModuleDescription.
⌋

| Class | BswCompositionTiming | < | < | < |
|---|---|---|---|---|
| Note | A model element used to define timing descriptions and constraints for a set of BswImplementations representing a BSW composition. A constraint defined at this level holds true for all referenced BswImplementations. Note, that multiple implementations of the same basic software module could be involved. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. EcuTiming

A result of the ECU configuration phase is the complete EcucValueCollection representing the ECU's configuration description. During ECU configuration, this artifact is filled amongst others with:

* the ECU Extract of System Configuration, where the needed part of the overall system description for the respective ECU is extracted.
* references to information about all BSW modules present on the ECU. Such BSW modules are described by BswModuleDescriptions, providing for instance information about the interfaces that the modules offer or require.

In this view, timing can reference all the ECU-relevant information: The deployed software component instances, the ECU related interactions including bus communication, Basic Software, etc. In other words, the EcuTiming has the same expressivity as the System Timing view but only focusing on one specific ECU in the system's topology. In addition, the entire BSW can be considered during timing modeling, because the complete composition and internal structure of the BSW modules are known. The internals of BSW modules and the inter-relations between BS modules are of interest in this timing view.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 时序 Conditions
*原文标题：Timing Conditions*

In almost all cases, systems, and the application software executed in those systems, operate under various conditions, like normal condition, error condition, start-up condition, etc. During the operation of such systems the conditions may change at any time.

As a consequence timing constraints imposed on the system may vary depending on these conditions, too. TIMEX provides a means to support the description of timing constraints depending on such conditions by Conditional Timing as described in this section.

Almost all software management systems controlling an internal combustion engine shall maintain a constant temperature of the coolant to ensure the optimal operation under specific conditions. For example, critical thermal conditions may occur that may lead to severe damage of the engine's mechanical components. In order to prevent the engine's mechanical components from being damaged the software application shall respond faster than in the nominal case. Therefore, different timing constraints are imposed on a given event chain depending on a known condition.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. TimingDescription

The TimingDescription of a system, sub-system or SWC consists of observable TimingDescriptionEvents and their causal relationships (TimingDescriptionEventChain) as shown in Figure . These are detailed in the next sections.

### 17. TimingDescriptionEventChain

Event chains (TimingDescriptionEventChains) specify a causal relationship between functionally dependent events (TimingDescriptionEvents) and their temporal occurrences. Generally, the notion of a TimingDescriptionEventChain enables one to specify the relationship between two TimingDescriptionEvent points, for example: when a event A occurs then the event B occurs, or in other words, the event B occurs if and only if the event A occurred before.

In the context of a TimingDescriptionEventChain the event A has the role of the stimulus and the event B has the role of the response. By means of an TimingDescriptionEventChain, the correlation between a stimulation of a system and its corresponding response can be explicitly described and used as a formalized definition of the scope for TimingConstraints.

Event chains can be hierarchical/nested, i.e. composed of further TimingDescriptionEventChains and decomposed into further TimingDescriptionEventChains - in both cases the nested TimingDescriptionEventChains are named segments.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Segments

Completeness of a composed TimingDescriptionEventChain
⌈
If a TimingDescriptionEventChain has > 0 segments: after  is applied, there shall be at least one end-to-end path from the parental TimingDescriptionEventChain.stimulus, through the segments, to the parental TimingDescriptionEventChain.response
⌋

 Disallow TimingDescriptionEventChain segmental circular-referencing
  Status: DRAFT
  Imposition time: `IT_TimingViewReady`
⌈
A TimingDescriptionEventChain.segment shall never reference the (parent) TimingDescriptionEventChain in which it is referenced in the role segment.
⌋

 Specifying end-points of a composed TimingDescriptionEventChain
  Imposition time: `IT_TimingViewReady`
⌈
If a TimingDescriptionEventChain has > 0 segments: in that list of segments:

* at least one segment.stimulus shall reference the (parent) TimingDescriptionEventChain.stimulus in which it is referenced in the role segment
* at least one segment.response shall reference the (parent) TimingDescriptionEventChain.response in which it is referenced in the role segment
⌋

### 19. Approach

The following subsections describe how to structure event chains for systems. Depending on the pre-conditions two different approaches can be distinguished: top-down (decomposition) and bottom-up (composition).

The decomposition respectively composition of event chains can be performed according to the software component hierarchy, but does not necessarily have to follow this hierarchy. The primary purpose is to increase respectively decrease granularity of the timing descriptions.

Note that event chains are used in all AUTOSAR timing views and any composition and decomposition of event chains can be done across various AUTOSAR timing views.

### 20. Decomposition

In a first step the time critical path in the system is identified. This means that a causal relationship between a stimulus event and response event is described by an event chain. For this event chain a timing constraint is specified describing the time budget. The second step is to decompose this event chain into event chain segments which implies that the given time budget gets split (decomposed) too.

Since event chain segments are event chains as well, these event chain segments can be subject to further decomposition.

Figure  shows a time critical path between the event "requesting the brake pedal position" (stimulus) and the event "making available the determined vehicle speed" (response). This event chain (EC) is subject to a timing constraint, namely a LatencyTimingConstraint, and is budgeted accordingly. For example, the time budget for the event chain EC is constrained by a maximum latency of 2 ms.

In subsequent steps of the development and with deeper knowledge about the system's dynamics, this event chain and its time budget can be split across the system's components. This results in the event chain segments EC1, EC2 and EC3 and their appropriate time budgets.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Composition

In the first step the system is build up based on available software components including timing descriptions. In the second step available event chains are connected with each other. This results in a sequence of event chains where the response event of one event chain has the role of the stimulus event of the subsequent event chain. In the third step, a high-level event chain is specified based on a sequence of available event chains which play the role of event chain segments. For this high-level event chain a time budget shall be specified. Finally, the aggregated time budget needs to be assessed if acceptable which means that the aggregated time budget shall be equal or less than the time budget of the high-level event chain.

Figure  shows the connected event chains EC1, EC2 and EC3. For each event chain a time budget, using a LatencyTimingConstraint, is specified: The time budget of event chain EC1 is 0.5 ms, of event chain EC2 is 0.6 ms and of event chain EC3 is 0.7 ms. The high-level event chain EC is a composition of the event chains EC1, EC2 and EC3.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Patterns

A sequence or hierarchy of event chains can form complex structures. However, if one of the aforementioned approaches is correctly followed then there is only a handful of patterns applicable. These patterns are introduced in the following with a simple example.

### 23. Sequence

The most frequently used pattern is the sequence of events. Such a sequence describes a succession of causally related events without an alternative path.

An example for this pattern is depicted in Figure . The event chains EC1 through EC3 define a causal relationship of events observed at a port of the SWC called Brake Pedal and a port of the SWC called Vehicle Speed Determination.

### 24. Fork

The "Fork" pattern describes the constellation where several event chains have one common stimulus event and different response events.

The pattern is illustrated in Figure , which shows a path that forks because the SWC Brake Controller calculates the brake force value for each wheel (EC5 through EC8).

### 25. Join

The "Join" pattern describes the constellation where several event chains have one common response event and different stimulus events.

The pattern is illustrated in Figure  which shows a path that joins because the SWC Vehicle Speed Determination aggregates the wheel speed values from individual wheels (EC13 through EC16).

### 26. Alternative

The "Alternative" pattern describes the constellation where more than one path between a stimulus and response event exists. This implies that at least one "Fork" is followed by at least one "Join".

The pattern is illustrated in Figure  which shows that an event observed at a required port of the SWC Motion Arbiter leads to an occurrence of an event either at the port called Deceleration of the SWC Brake Controller, or at the port called Acceleration of the SW-C Engine. These alternative causal relationships are described by the event chains EC2 and EC4 in this figure. In either case, the deceleration or acceleration of the vehicle leads to the occurrence of an event at the provided port called Vehicle Speed of the SW-C Vehicle Speed Determination reporting the vehicle's speed. These alternative causal relationships are described by the event chains EC3 and EC5 which both reference the same response event. To fulfill the overall event chain, only one of the alternative paths shall have occurred.

### 27. Cycle

The "Cycle" pattern describes the constellation where a path from the response event of an event chain leads to the stimulus of this event chain.

The pattern is illustrated in Figure  which shows three event chains EC8, EC12 and EC17 forming a cycle. The stimulus event of event chain EC8 is the response event of event chain EC17; and the response event of event chain EC12 is the stimulus event of event chain EC17. Event chain EC8 and EC12 reference the same event in different roles, namely response event from event chain EC8 perspective and stimulus event from the event chain EC12 perspective.

Note that an event chain referencing the same event for its stimulus and its response is forbidden according to the constraint . As a consequence a cycle consists of at least two event chains.

### 28. TimingDescriptionEvent

TimingDescriptionEvents refer to locations in systems at which the occurrences of events are observed at runtime. TIMEX defines a set of predefined TimingDescriptionEvent types for use in differing observable locations and further in differing Timing Views ().

For example, this can be the start of a RunnableEntity or storing a frame in the hardware buffer of a communication controller.

An overview of the different event types is given in Figure . These are described in more detail in the following sub-sections.

Depending on the value of the category of the TimingDescriptionEvent, it may be used in different use-cases.

 Standardized categorys of TimingDescriptionEvent in Classic Platform
⌈
AUTOSAR standardizes the following categorys of TimingDescriptionEvent and their semantics:

* undefined: as per STANDARD
* STANDARD: No specific semantics are imposed on the TimingDescriptionEvent. It indicates the standard behavior.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. TDEventVfb

Events related to the VFB can be used during the specification of:

* VfbTiming
* SystemTiming
* SwcTiming
* EcuTiming

| Class | TDEventVfb (abstract) | < | < | < |
|---|---|---|---|---|
| Note | A TimingDescriptionEvent occuring on a Virtual Functional Bus (VFB) PortPrototype. | < | < | < |
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable, TimingDescription, TimingDescriptionEvent | < | < | < |
| Subclasses | TDEventVfbPort, TDEventVfbPortGroup, TDEventVfbReference | < | < | < |
| Aggregated by | TimingExtension.timingDescription | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| - | - | - | - | - |

### 30. TDEventVfbReference

| Class | TDEventVfbReference | < | < | < |
|---|---|---|---|---|
| Note | Reference to "other" TimingDescriptionEvents. These other TimingDescriptionEvents may be specified in other TimingExtensions (Timing Views) and re-used in this view. | < | < | < |
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable, TDEventVfb, TimingDescription, TimingDescriptionEvent | < | < | < |
| Aggregated by | TimingExtension.timingDescription | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| referencedTDEventVfb | TDEventVfb | 0..1 | ref | The referenced timing description event. |

 Multiplicity of TDEventVfbReference.referencedTDEventVfb
  Imposition time: `IT_TimingViewReady`
⌈
For each TDEventVfbReference, the reference to TDEventVfb in the role referencedTDEventVfb shall exist
⌋

### 31. TDEventVfbPort

A TDEventVfbPort describes a TimingDescriptionEvent on the level of a PortPrototype. Since PortPrototypes are typed by different types of PortInterfaces whose usage is further broken down into the type of Operation/Data on that PortInterface, the sub-classing of TDEventVfbPort has been further divided into similar usages:

* TDEventVariableDataPrototype: the sending/receiving of a dataElement
* TDEventOperation: making/receiving a function call, sending/receiving a response
* TDEventTrigger: the sending/receiving of a Trigger
* TDEventModeDeclaration: mode switching

Due to instantiation principles, the referenced elements from these TDEventVfbPorts, may be multiply instantiated, thus a TDEventVfbPort always needs to refer to the SWC context in the role TDEventVfbPort.portPrototype. The meta-class TDEventVfbPortGroup is used to provide a grouping element for TDEventVfbPorts. This permits referencing a group of TDEventVfbPorts in a TimingDescriptionEventChain.stimulus or TimingDescriptionEventChain.response, e.g. a group of TDEventVariableDataPrototypes.

To permit some flexibility of referencing PortPrototypes on a system level (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 264 章（内容从略，见纯文本全文）

32. TDEventVariableDataPrototype
33. TDEventOperation
34. TDEventModeDeclaration
35. TDEventTrigger
36. Blueprinting TDEventVfbPort
37. TDEventSwc
38. TDEventSwcInternalBehavior
39. TDEventSwcInternalBehaviorTypeEnum
40. TDEventCom
41. TDEventISignal
42. TDEventIPdu
43. TDEventFrame
44. TDEventComEthernet
45. TDEventCycleStart
46. TDEventFrClusterCycleStart
47. TDEventBswInternalBehavior
48. TDEventBswInternalBehaviorTypeEnum
49. TDEventBsw
50. TDEventBswModule
51. TDEventBswModeDeclaration
52. TDEventComplex
53. TDEventOccurrenceExpression
54. TDEventOccurrenceExpressionFormula
55. TDEventOccurrenceExpressionVariable
56. TDEventOccurrenceExpressionArgument
57. TDEventOccurrenceExpression.功能==CONTENT_FILTER
58. TDEventOccurrenceExpression.功能==COMPLEX_EVENT
59. 示例
60. Time Base Referencing for 时序描述 Events
61. TimingConstraint
62. TimingConstraints on TimingDescriptionEvents
63. SynchronizationTimingConstraint
64. EventTriggeringConstraint
65. PeriodicEventTriggering
66. SporadicEventTriggering
67. ConcretePatternEventTriggering
68. BurstPatternEventTriggering
69. ArbitraryEventTriggering
70. OffsetTimingConstraint
71. AgeConstraint
72. TimingConstraints on TimingDescriptionEventChains
73. SynchronizationTimingConstraint
74. LatencyTimingConstraint
75. LatencyConstraintTypeEnum
76. LatencyConstraintType==age
77. LatencyConstraintType==reaction
78. TimingConstraints on ExecutableEntities
79. ExecutionOrderConstraint
80. Precedence and Succeedence
81. Executables and Events
82. ExecutionOrderConstraintTypeEnum==ordinaryEOC
83. ExecutionOrderConstraintTypeEnum==hierarchicalEOC
84. ExecutionOrderConstraintTypeEnum==repetitiveEOC
85. ExecutionTimeConstraint
86. Methodology
87. Logical Execution Time
88. LET Interval 定义
89. Relation between LET Intervals
90. Executable Entity Cluster to LET Interval 映射
91. 数据 flow within an LET Interval
92. 系统 Level Logical Execution Time
93. SL-LET Interval 定义
94. Execution Order
95. SL-LET Time Zones
96. SL-LET Zone Clocks
97. SL-LET Zone Clock Accuracy
98. Classic Platform 软件 Clusters
99. Specifying a Dispatcher
100. Specifying 时序 Parameters of a Dispatcher
101. 映射 Executable Entities to a Dispatcher
102. Mappings between 软件 Clusters
103. 示例
104. 附录
105. Reference Material
106. Terms and Abbreviations
107. Imposition Times
108. Test Cases
109. 组件集成
110. VFB 视图
111. ECU 视图
112. Engine 控制
113. 时序需求
114. 时序 constraints in 视图 VfbTiming的Formal 描述
115. Requirement_1
116. Requirement_2
117. Requirement_3
118. 时序 constraints in 视图 EcuTiming的Formal 描述
119. Requirement_4
120. 时序 constraints in 视图 SwcTiming的Formal 描述
121. Requirement_5
122. Describing and Constraining Sensor and Actuator 时序
123. External Event of a Sensor accessed via S/R
124. External Event of an Actuator accessed via S/R
125. External Event of a Sensor accessed via C/S
126. External Event of an Actuator accessed via C/S
127. Considering hardware I/O latency of EventChains at VFB-level
128. Input latency
129. Output latency
130. Constraining Input or Output Latency
131. ARXML Listings
132. Variant 处理
133. Logical Execution Time
134. Logical Execution Time - 时序 descriptions
135. Logical Execution Time - 时序 constraints - Latency 时序
136. Logical Execution Time - 时序 constraints - Event Triggering
137. Logical Execution Time - 时序 constraints - Event Triggering - Gap
138. Logical Execution Time - 时序 constraints - Offset 时序 - Without
139. Logical Execution Time - 时序 constraints - Offset 时序 - With
140. Logical Execution Time - 时序 constraints - Offset 时序 - Arbitrary
141. Logical Execution Time - 时序 constraints - Offset 时序 - Arbitrary Overlap
142. Logical Execution Time - 时序 constraints - Execution Order
143. 软件 Cluster
144. 软件 Cluster - 时序 descriptions
145. 系统 Level Logical Execution Time
146. 系统 Level Logical Execution Time
147. TDEventOccurrenceExpression
148. TDEventOccurrenceExpression - Filter Expression
149. TDEventOccurrenceExpression - Grammar
150. Test Cases
151. Test Cases - VFB Elements
152. Test Cases - VFB 时序 - Latency Constraints
153. Test Cases - VFB 时序 - Execution Order Constraints
154. Test Cases - COM Frame 时序
155. Test Cases - COM Frame 时序 - 时序描述 Event Chain
156. Test Cases - COM Frame 时序 - Latency Constraint
157. Test Cases - Engine 控制
158. Test Cases - Engine 控制 - Requirement_1
159. Test Cases - Engine 控制 - Requirement_2
160. Test Cases - Engine 控制 - Requirement_3
161. Test Cases - Engine 控制 - Requirement_4
162. Test Cases - Engine 控制 - Requirement_5
163. Mentioned Class Tables
164. Splitable Elements in the 范围 of this Document
165. Variation Points in the 范围 of this Document
166. Change History
167. Changes in AUTOSAR release R4.0.1
168. Added 规范 Items in Release R4.0.1
169. Changed 规范 Items in Release R4.0.1
170. Deleted 规范 Items in Release R4.0.1
171. Added Constraints in Release R4.0.1
172. Changed Constraints in Release R4.0.1
173. Deleted Constraints in Release R4.0.1
174. Changes in AUTOSAR release R4.0.2
175. Added 规范 Items in Release R4.0.2
176. Changed 规范 Items in Release R4.0.2
177. Deleted 规范 Items in Release R4.0.2
178. Added Constraints in Release R4.0.2
179. Changed Constraints in Release R4.0.2
180. Deleted Constraints in Release R4.0.2
181. Changes in AUTOSAR release R4.0.3
182. Added 规范 Items in Release R4.0.3
183. Changed 规范 Items in Release R4.0.3
184. Deleted 规范 Items in Release R4.0.3
185. Added Constraints in Release R4.0.3
186. Changed Constraints in Release R4.0.3
187. Deleted Constraints in Release R4.0.3
188. Changes in AUTOSAR release R4.1.1
189. Added 规范 Items in Release R4.1.1
190. Changed 规范 Items in Release R4.1.1
191. Deleted 规范 Items in Release R4.1.1
192. Added Constraints in Release R4.1.1
193. Changed Constraints in Release R4.1.1
194. Deleted Constraints in Release R4.1.1
195. Changes in AUTOSAR release R4.1.2
196. Added 规范 Items in Release R4.1.2
197. Changed 规范 Items in Release R4.1.2
198. Deleted 规范 Items in Release R4.1.2
199. Added Constraints in Release R4.1.2
200. Changed Constraints in Release R4.1.2
201. Deleted Constraints in Release R4.1.2
202. Changes in AUTOSAR release R4.1.3
203. Added 规范 Items in Release R4.1.3
204. Changed 规范 Items in Release R4.1.3
205. Deleted 规范 Items in Release R4.1.3
206. Added Constraints in Release R4.1.3
207. Changed Constraints in Release R4.1.3
208. Deleted Constraints in Release R4.1.3
209. Changes in AUTOSAR release R4.2.1
210. Added 规范 Items in Release R4.2.1
211. Changed 规范 Items in Release R4.2.1
212. Deleted 规范 Items in Release R4.2.1
213. Added Constraints in Release R4.2.1
214. Changed Constraints in Release R4.2.1
215. Deleted Constraints in Release R4.2.1
216. Changes in AUTOSAR release R4.2.2
217. Added 规范 Items in Release R4.2.2
218. Changed 规范 Items in Release R4.2.2
219. Deleted 规范 Items in Release R4.2.2
220. Added Constraints in Release R4.2.2
221. Changed Constraints in Release R4.2.2
222. Deleted Constraints in Release R4.2.2
223. Changes in AUTOSAR release R4.3.0
224. Added 规范 Items in Release R4.3.0
225. Changed 规范 Items in Release R4.3.0
226. Added Constraints in Release R4.3.0
227. Changed Constraints in Release R4.3.0
228. Deleted Constraints in Release R4.3.0
229. Changes in AUTOSAR release R4.3.1
230. Added 规范 Items in Release R4.3.1
231. Changed 规范 Items in Release R4.3.1
232. Added Constraints in Release R4.3.1
233. Changed Constraints in Release R4.3.1
234. Deleted Constraints in Release R4.3.1
235. Changes in AUTOSAR release R4.4.0
236. Added 规范 Items in Release R4.4.0
237. Changed 规范 Items in Release R4.4.0
238. Added Constraints in Release R4.4.0
239. Changed Constraints in Release R4.4.0
240. Deleted Constraints in Release R4.4.0
241. Changes in AUTOSAR release R19-11
242. Added 规范 Items in Release 19-11
243. Changed 规范 Items in Release 19-11
244. Added Constraints in Release 19-11
245. Changed Constraints in Release 19-11
246. Deleted Constraints in Release 19-11
247. Changes in AUTOSAR release R20-11
248. Added 规范 Items in R20-11
249. Changed 规范 Items in R20-11
250. Deleted 规范 Items in R20-11
251. Added Constraints in R20-11
252. Changed Constraints in R20-11
253. Deleted Constraints in R20-11
254. Changes in AUTOSAR release R21-11
255. Added 规范 Items in R21-11
256. Changed 规范 Items in R21-11
257. Deleted 规范 Items in R21-11
258. Added Constraints in R21-11
259. Changed Constraints in R21-11
260. Deleted Constraints in R21-11
261. Changes in AUTOSAR release R22-11
262. Added 规范 Items in R22-11
263. Changed 规范 Items in R22-11
264. Deleted 规范 Items in R22-11
265. Added Constraints in R22-11
266. Changed Constraints in R22-11
267. Deleted Constraints in R22-11
268. Changes in AUTOSAR release R23-11
269. Added 规范 Items in R23-11
270. Changed 规范 Items in R23-11
271. Deleted 规范 Items in R23-11
272. Added Constraints in R23-11
273. Changed Constraints in R23-11
274. Deleted Constraints in R23-11
275. Changes in AUTOSAR release R24-11
276. Added 规范 Items in R24-11
277. Changed 规范 Items in R24-11
278. Deleted 规范 Items in R24-11
279. Added Constraints in R24-11
280. Changed Constraints in R24-11
281. Deleted Constraints in R24-11
282. Changes in AUTOSAR release R25-11
283. Added 规范 Items in R25-11
284. Changed 规范 Items in R25-11
285. Deleted 规范 Items in R25-11
286. Added Constraints in R25-11
287. Changed Constraints in R25-11
288. Deleted Constraints in R25-11
289. Changes in AUTOSAR release R26-11
290. Added 规范 Items in R26-11
291. Changed 规范 Items in R26-11
292. Deleted 规范 Items in R26-11
293. Added Constraints in R26-11
294. Changed Constraints in R26-11
295. Deleted Constraints in R26-11
