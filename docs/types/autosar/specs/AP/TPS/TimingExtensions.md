# Specification of Timing Extensions for Adaptive Platform (`TimingExtensions`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 968 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_TPS_TimingExtensions_968\AUTOSAR_AP_TPS_TimingExtensions.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_TPS_TimingExtensions_968\AUTOSAR_AP_TPS_TimingExtensions.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_TPS_TimingExtensions_968\zzgen\AP_TPS_TimingExtensions.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. 概述
*原文标题：Overview*

This AUTOSAR document contains the specification of the AUTOSAR Timing Extensions and describes the elements of the AUTOSAR meta-model  used for creating timing models for the respective AUTOSAR Platform. It is a supplement to the formal definition of the Timing Extensions by means of the AUTOSAR meta-model. In other words, this document in addition to the formal definition provides introductory description and rationale for the part of the AUTOSAR meta-model relevant for the creation of timing models.

### 3. 模板 implications
*原文标题：Template implications*

All AUTOSAR templates use a common meta-model which is defined by using the Unified Modeling Language (UML). For the integration of timing information into the AUTOSAR meta-model we have to decide between two viable alternatives: on the one hand the extension of existing templates, and on the other hand the definition of a separate timing template.

Several discussions lead to the decision to explicitly NOT defining a separate timing template. The most valuable advantage of such an approach is addressed by the idea behind the current template composition. They are highly adapted to the AUTOSAR methodology (see  for more details about the AUTOSAR methodology) and the several templates handle specific process steps in the methodology. Since it is not our scope to provide a proposal for a timing augmented development process, it is as well not in our scope to define an isolated, new process step (e.g. a timing process step). For this reason, our project result has an impact to some of the existing templates. Therefore, the augmentation of the existing templates instead of the creation of a new timing template reduces dependencies in the meta-model among templates.

### 4. 范围
*原文标题：Scope*

The primary purpose of the timing extensions is to support constructing embedded real-time systems that satisfy given timing requirements and to perform timing analysis/validations of those systems once they have built up.

The AUTOSAR Timing Extensions provide a timing model as specification basis for a contract based development process, in which the development is carried out by different organizations in different locations and time frames. The constraints entered in the early phase of the project (when corresponding solutions are not developed yet) shall be seen as extra-functional requirements agreed between the development partners. In such way the timing specification supports a top-down design methodology. However, due to the fact that a pure top-down design is not feasible in most of the cases (e.g. because of legacy code), the timing specification allows the bottom-up design methodology as well.

The resulting overall specification (AUTOSAR Model and Timing Extensions) shall enable the analysis of a system's timing behavior and the validation of the analysis results against timing constraints.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Fundamentals

The AUTOSAR Timing Extensions provide some basic means to describe and specify timing information: Timing descriptions, expressed by events and event chains, and timing constraints that are imposed on these events and event chains. Both means, timing descriptions and timing constraints, are organized in timing views for specific purposes. By and large, the purpose of the Timing Extensions are two fold: The first purpose is to provide timing requirements that guide the construction of systems which eventually shall satisfy those timing requirements. And the second purpose is to provide sufficient timing information to analyze and validate the temporal behavior of a system.

Events: Events refer to locations in systems at which the occurrences of events are observed. The AUTOSAR Specification of Timing Extensions defines a set of predefined event types for such observable locations. Those event types are used in different timing views and each of these timing views correspond to one of the AUTOSAR platform views: VFB Timing and Virtual Functional Bus (VFB) View:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 建模
*原文标题：Modeling*

This chapter shall walk through the meta-model representation of the timing extensions in the following sub-sections.

### 8. TimingExtensions

An AUTOSAR Timing Extension model starts with the meta-class TimingExtension or rather, one of the sub-classes of TimingExtension as the top-level element. This is the owning element for all other related elements. The sub-classes of TimingExtension define a set of timing views as shown in Figure  and detailed in the next sub-sections. The timing views are:

* VfbTiming: timing information related to the interaction of AdaptiveApplicationSwComponentTypes at VFB level ()
* ExecutableTiming: timing information related to an Executable ()
* SystemTiming: timing information related to a System, utilizing information about topology, software deployment, and signal mapping ()
* ServiceTiming: timing information related to a service, specifically AdaptivePlatformServiceInstance ()
* MachineTiming: timing information related to a Machine ()

### 9. VfbTiming

AUTOSAR defines the Virtual Functional Bus  as a composition of SwComponentPrototypes at a logical level, regardless of their physical distribution. On this logical level a special view can be applied for timing specification. This section describes what kind of timing specification can be applied at VFB level for a system or sub-system. Typically, end-to-end timing constraints, including (physical) sensors and actuators, shall be captured in this view, allowing an early formalization of those constraints.

Neglecting the physical distribution means that the VfbTiming view does not deal with the question, in which system context the prototype of a CompositionSwComponentType shall be implemented. An additional restriction of the VfbTiming view is present due to the black box treatment of software components. For these mentioned restrictions (irrelevance of the physical distribution, black box view), TimingDescriptions at VFB level should only refer to SwComponentTypes, PortPrototypes and their connections.

The VfbTiming view is applicable for different system granularities. The smallest granularity is the investigation of a single SwComponentType without any contextual embedding.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. ExecutableTiming

Purpose of ExecutableTiming
  Status: DRAFT
⌈
The element ExecutableTiming aggregates all timing information, timing descriptions and timing constraints, that is related to the Executable View.
⌋

 Existence of ExecutableTiming.executable
⌈
For each ExecutableTiming, the reference to a Executable in the role executable shall exist at the time when the Executable Timing Description is complete.
⌋

| Class | ExecutableTiming | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the timing view for one or more executables. |  |  |  |

Tags: atp.Status=draft atp.recommendedPackage=TimingExtensions

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, TimingExtension | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| executable | Executable | * | ref | This defines the scope of a ExecutableTiming. All corresponding timing descriptions and constraints shall be defined within this scope. |

Tags: atp.Status=draft

### 11. SystemTiming

At system level a special prototype of a CompositionSwComponentType-the RootSwCompositionPrototype-is instantiated. This prototype, the chosen hardware topology and other artifacts are used as input to the task dealing with the deployment of software components onto machines in order to configure the system. The main configuration result is the mapping of software components to Machines and in further steps the resulting communication matrix is created. This information is aggregated in the System description.

The SystemTiming view is used to provide timing information at system level. As an extension, it can be attached to a System. As the System description aggregates all the information about AdaptiveApplicationSwComponentTypes, it is possible to use the same concepts that are available in the view VfbTiming also in this timing view. The difference is the specific system context that defines the validity of timing information at system level. Without knowledge of the mapping of software components to a target hardware respectively ECU, only a generic platform independent description can be provided.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. ServiceTiming

Purpose of ServiceTiming
  Status: DRAFT
⌈
The element ServiceTiming aggregates all timing information, timing descriptions and timing constraints, that is related to the Service View.
⌋

 Existence of ServiceTiming.serviceInstance
⌈
For each ServiceTiming, the reference to a AdaptivePlatformServiceInstance in the role serviceInstance shall exist at the time when the Service Timing Description is complete.
⌋

| Class | ServiceTiming | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the timing view for one or more service instances. |  |  |  |

Tags: atp.Status=draft atp.recommendedPackage=TimingExtensions

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, TimingExtension | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| serviceInstance | AdaptivePlatformServiceInstance | * | ref | This defines the scope of a ServiceTiming. All corresponding timing descriptions and constraints shall be defined within this scope. |

Tags: atp.Status=draft

### 13. MachineTiming

Purpose of MachineTiming
  Status: DRAFT
⌈
The element MachineTiming aggregates all timing information, timing descriptions and timing constraints, that is related to the Machine View.
⌋

 Existence of MachineTiming.machine
⌈
For each MachineTiming, the reference to a Machine in the role machine shall exist at the time when the Machine Timing Description is complete.
⌋

| Class | MachineTiming | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the timing view for a machine. |  |  |  |

Tags: atp.Status=draft atp.recommendedPackage=TimingExtensions

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, TimingExtension | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| machine | Machine | 0..1 | ref | This defines the scope of a MachineTiming. All corresponding timing descriptions and constraints shall be defined within this scope. |

Tags: atp.Status=draft

### 14. 时序行为的Formal 规范
*原文标题：Formal specification of timing behavior*

Compared to the specification of a system's functional behavior, the specification of its timing behavior requires additional information to be captured. Not only the eventual occurrence of events but also their exact timing or the concurrency of various events become important. Therefore, in the specification of timing extensions for AUTOSAR, the event is the basic entity. This event is used to refer to an observable behavior within a system at a certain point in time.

Having to deal with different abstraction levels and views (see chapter ), and in order to avoid semantic confusion with existing concepts, a new abstract type TimingDescriptionEvent (see section ) is introduced as a formal basis for the timing extensions. Depending on the model entity and the associated observable behavior, specific timing events are defined and linked to the different views.

For the analysis of a system's timing behavior usually not only single events but also the correlation of different events is of fundamental importance. To relate timing events to each other, a further concept called TimingDescriptionEventChain (see section ) is introduced.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Specifying Time Sets

Sometimes it is necessary to specify that there are several alternatives with regard to timing requirements. For example, quite often it is reasonable to specify that a process shall be periodically activated either at 1ms, 2ms, 5ms, 8ms, or 10ms. In other words, it is perfectly fine to decide that the process is activated every 8ms. Indeed, it is allowed to activate the process either at 1ms, 2ms, 5ms, 8ms, or 10ms. Hence, there should be a means to specify such time sets which contain all allowed timings, like in case of activating a process at {1, 2, 5, 8, 10} ms.

For the purpose of specifying time sets the timing extensions utilize the "Variant Handling" capabilities specified and described in .

### 16. 时序 Conditions
*原文标题：Timing Conditions*

Please refer to .

### 17. TimingDescription

The TimingDescription is an abstract class which provides the base for the two abstract sub-classes TimingDescriptionEventChain and TimingDescriptionEvent - which further provide the base for the respective concrete event types as shown in Figure . These are detailed in the next sections.

### 18. TimingDescriptionEventChain

A timing event chain describes a causal order for a set of functionally dependent timing events. Each event chain defines at least the relationship between two differing events, its stimulus and response .

This means that if the stimulus event occurs then the response event occurs after or in other words the response event follows if and only if the stimulus event occurred before.

 Purpose of TimingDescriptionEventChain
  Status: DRAFT
⌈
The element TimingDescriptionEventChain is used to specify a causal relationship between timing description events and their occurrences during the runtime of a system.
⌋

Thus, by means of an event chain, the correlation between a stimulation of a system and its corresponding response can be explicitly described, and used as a formalized definition of the scope for timing constraints. This is important, because timing constraints refer to a specific part of the overall system's timing and need clear validity semantics.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Segments

Specifying event chain segments
  Status: DRAFT
⌈
If a TimingDescriptionEventChain consists of further event chain segments then at least one sequence of event chain segments shall exist from the event chain's stimulus to the response.
⌋

 Referencing no further event chain segments
  Status: DRAFT
⌈
If a TimingDescriptionEventChain is not subdivided in further event chain segments, then the reference playing the role of segment shall reference this TimingDescriptionEventChain. In other words, an event chain without any event chain segments shall reference itself.
⌋

 Specifying stimulus event and response event of first and last event chain segment
  Status: DRAFT
⌈
The stimulus event of the first event chain segment and the response event of the last event chain segment shall reference the stimulus and response of the parent event chain the event chain segments directly belong to.
⌋

### 20. Approach

The following subsections describe how to structure event chains for systems. Depending on the pre-conditions two different approaches can be distinguished: top-down (decomposition) and bottom-up (composition).

The decomposition respectively composition of event chains can be performed according to the software component hierarchy, but does not necessarily have to follow this hierarchy. The primary purpose is to increase respectively decrease granularity of the timing descriptions.

Note that event chains are used in all AUTOSAR timing views and any composition and decomposition of event chains can be done across various AUTOSAR timing views.

### 21. Decomposition

In a first step the time critical path in the system is identified. This means that a causal relationship between a stimulus event and response event is described by an event chain. For this event chain a timing constraint is specified describing the time budget. The second step is to decompose this event chain into event chain segments which implies that the given time budget gets split - decomposed -, too.

Since event chain segments are event chains as well, these event chain segments can be subject to further decomposition.

Figure  shows a time critical path between the event "requesting the brake pedal position" (Stimulus) and the event "making available the determined vehicle speed" (Response). This event chain (EC) is subject to a timing constraint, namely a LatencyTimingConstraint, and is budgeted accordingly. For example, the time budget for the event chain EC is constrained by a maximum latency of 2 ms. In subsequent steps of the development and with deeper knowledge about the system's dynamics, this event chain and its time budget can be split across the system's components. This results in the event chain segments EC1, EC2 and EC3 and their appropriate time budgets.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Composition

In the first step the system is build up based on available software components including timing descriptions. In the second step available event chains are connected with each other. This results in a sequence of event chains where the response event of one event chain plays the role of the stimulus event of the subsequent event chain. In the third step, a high-level event chain is specified based on a sequence of available event chains which play the role of event chain segments. For this high-level event chain a time budget shall be specified. Finally, the aggregated time budget needs to be assessed if acceptable which means that the aggregated time budget shall be equal or less than the time budget of the high-level event chain.

Figure  shows the connected event chains EC1, EC2 and EC3. For each event chain a time budget, using a LatencyTimingConstraint, is specified: The time budget of event chain EC1 is 0.5 ms, of event chain EC2 is 0.6 ms and of event chain EC3 is 0.7 ms. The high-level event chain EC is a composition of the event chains EC1, EC2 and EC3.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Patterns

A sequence or hierarchy of event chains can form complex structures. However, if one of the aforementioned approaches is correctly followed then there is only a handful of patterns applicable. These patterns are introduced in the following with a simple example.

### 24. Sequence

The most frequently used pattern is the sequence of events. Such a sequence describes a succession of causally related events without an alternative path.

An example for this pattern is depicted in Figure . The event chains EC1 through EC3 define a causal relationship of events observed at a port of the AA called Brake Pedal and a port of the AA called Vehicle Speed Determination.

### 25. Fork

The "Fork" pattern describes the constellation where several event chains have one common stimulus event and different response events.

The pattern is illustrated in Figure , which shows a path that forks because the AA Brake Controller calculates the brake force value for each wheel (EC5 through EC8).

### 26. Join

The "Join" pattern describes the constellation where several event chains have one common response event and different stimulus events.

The pattern is illustrated in Figure  which shows a path that joins because the AA Vehicle Speed Determination aggregates the wheel speed values from individual wheels (EC13 through EC16).

### 27. Alternative

The "Alternative" pattern describes the constellation where more than one path between a stimulus and response event exists. This implies that at least one "Fork" is followed by at least one "Join".

The pattern is illustrated in Figure  which shows that an event observed at a required port of the AA Motion Arbiter leads to an occurrence of an event either at the port called Deceleration of the AA Brake Controller, or at the port called Acceleration of the AA Engine. These alternative causal relationships are described by the event chains EC2 and EC4 in this figure. In either case, the deceleration or acceleration of the vehicle leads to the occurrence of an event at the provided port called Vehicle Speed of the AA Vehicle Speed Determination reporting the vehicle's speed. These alternative causal relationships are described by the event chains EC3 and EC5 which both reference the same response event. To fulfill the overall event chain, only one of the alternative paths shall have been occurred.

### 28. Cycle

The "Cycle" pattern describes the constellation where a path from the response event of an event chain leads to the stimulus of this event chain.

The pattern is illustrated in Figure  which shows three event chains EC8, EC12 and EC17 forming a cycle. The stimulus event of event chain EC8 is the response event of event chain EC17; and the response event of event chain EC12 is the stimulus event of event chain EC17. Event chain EC8 and EC12 reference the same event in different roles, namely response event from event chain EC8 perspective and stimulus event from the event chain EC12 perspective.

Note that an event chain referencing the same event for its stimulus and its response is forbidden according to the constraint . As a consequence a cycle consists of at least two event chains.

### 29. TimingDescriptionEvent

Purpose of TimingDescriptionEvent
  Status: DRAFT
⌈
The element TimingDescriptionEvent and its specializations are used to describe the occurrences of an event which are observed at a specific location in a system during runtime respectively the operation of the system.
⌋

For example, this can be the start of a service or the different steps in executing an executable.

An overview of the different event types is given in Figure . These are described in more detail in the following sub-sections.

Depending on the value of the category of the TimingDescriptionEvent, it may be used in different use-cases.

 Standardized categorys of TimingDescriptionEvent in Adaptive Platform
  Status: DRAFT
⌈
AUTOSAR standardizes the following categorys of TimingDescriptionEvent and their semantics:

* undefined: as per STANDARD
* STANDARD: No specific semantics are imposed on the TimingDescriptionEvent. It indicates the standard behavior.
* `SL_LET_RELEASE`: The TimingDescriptionEvent represents the release/start point of an SL-LET interval
* `SL_LET_TERMINATE`: The TimingDescriptionEvent represents the termination/end point of an SL-LET interval
⌋

Please note constraint:  in  shall apply here also.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. TDEventVfb

Purpose of TDEventVfb
  Status: DRAFT
⌈
The element TDEventVfb and its specializations are used to describe the occurrences of an event which are observed at a specific location in the VFB view.
⌋

Events related to the VFB can be used during the specification of:

* VfbTiming
* SystemTiming

| Class | TDEventVfb (abstract) | < | < | < |
|---|---|---|---|---|
| Note | A TimingDescriptionEvent occuring on a Virtual Functional Bus (VFB) PortPrototype. | < | < | < |
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable, TimingDescription, TimingDescriptionEvent | < | < | < |
| Subclasses | TDEventVfbPort, TDEventVfbPortGroup, TDEventVfbReference | < | < | < |
| Aggregated by | TimingExtension.timingDescription | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| - | - | - | - | - |

 Purpose of TDEventVfbPort
  Status: DRAFT
⌈
The element TDEventVfbPort and its specializations are used to describe the occurrences of an event which are observed at a specific location in the VFB view.
⌋

| Class | TDEventVfbPort (abstract) | < | < | < |
|---|---|---|---|---|
| Note | A TimingDescriptionEvent occuring on a PortPrototype. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. TDEventServiceInstance

Purpose of TDEventServiceInstance
  Status: DRAFT
⌈
The element TDEventServiceInstance and its specializations are used to describe the occurrences of an event which are observed at a specific location in the Service view.
⌋

Events related to the adaptive service can be used during the specification of:

* VfbTiming
* SystemTiming
* ServiceTiming

| Class | TDEventServiceInstance (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This is the abstract parent class to describe specific timing description event types for service-oriented communication. |  |  |  |

Tags: atp.Status=draft

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable, TimingDescription, TimingDescriptionEvent | < | < | < |
| Subclasses | TDEventServiceInstanceDiscovery, TDEventServiceInstanceEvent, TDEventServiceInstanceField, TDEventServiceInstanceMethod | < | < | < |
| Aggregated by | TimingExtension.timingDescription | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| serviceInstanceToPortPrototypeMapping | ServiceInstanceToPortPrototypeMapping | 0..1 | ref | The service and the port this service is provided. |

Tags: atp.Status=draft

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. TDEventComplex

Purpose of TDEventComplex
  Status: DRAFT
⌈
The element TDEventComplex is used to specify relationships between occurrences of events.
⌋

Complex timing events can be used during the specification of:

* VfbTiming
* SystemTiming

| Class | TDEventComplex | < | < | < |
|---|---|---|---|---|
| Note | This is used to describe complex timing events. |  |  |  |

| The context of a complex timing event either is described informally, e.g. using the documentation block, or is described formally by the associated TDEventOccurrenceExpression. | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable, TimingDescription, TimingDescriptionEvent | < | < | < |
| Aggregated by | TimingExtension.timingDescription | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| - | - | - | - | - |

A complex timing event is a special observable event. In comparison to the "atomic" events described above a complex event does not contain information about the context it references, like VariableDataPrototype in TDEventVariableDataPrototype. Instead, a complex event uses the occurrence expression to specify the context with regard to occurrences of TimingDescriptionEvents as describe in the following section.

### 其余 77 章（内容从略，见纯文本全文）

33. TDEventSLLET
34. Occurrence Expression Language for 时序 Events
35. Specifying an Occurrence Expression
36. Occurrence Expression Language Syntax
37. Interpreting an Occurrence Expression
38. Interpreting a Content Filter
39. Interpreting a Complex Event
40. Time Base Referencing for 时序描述 Events
41. TimingConstraint
42. EventTriggeringConstraint
43. PeriodicEventTriggering
44. 示例
45. SporadicEventTriggering
46. ConcretePatternEventTriggering
47. BurstPatternEventTriggering
48. ArbitraryEventTriggering
49. LatencyTimingConstraint
50. AgeConstraint
51. SynchronizationTimingConstraint
52. SynchronizationTimingConstraint on Event Chains
53. SynchronizationTimingConstraint on Events
54. OffsetTimingConstraint
55. Traceability of Constraints
56. Logical Execution Time
57. 系统 Level Logical Execution Time
58. Blueprinting
59. Methodology
60. 附录
61. Reference Material
62. Terms and Abbreviations
63. Imposition Times of Constraints
64. Mentioned Class Tables
65. Splitable Elements in the 范围 of this Document
66. Variation Points in the 范围 of this Document
67. Change History
68. Change History of this document according to AUTOSAR Release R20-11
69. Added 规范 Items in R20-11
70. Changed 规范 Items in R20-11
71. Deleted 规范 Items in R20-11
72. Added Constraints in R20-11
73. Changed Constraints in R20-11
74. Deleted Constraints in R20-11
75. Change History of this document according to AUTOSAR Release R21-11
76. Added 规范 Items in R21-11
77. Changed 规范 Items in R21-11
78. Deleted 规范 Items in R21-11
79. Added Constraints in R21-11
80. Changed Constraints in R21-11
81. Deleted Constraints in R21-11
82. Change History of this document according to AUTOSAR Release R22-11
83. Added 规范 Items in R22-11
84. Changed 规范 Items in R22-11
85. Deleted 规范 Items in R22-11
86. Added Constraints in R22-11
87. Changed Constraints in R22-11
88. Deleted Constraints in R22-11
89. Change History of this document according to AUTOSAR Release R23-11
90. Added 规范 Items in R23-11
91. Changed 规范 Items in R23-11
92. Deleted 规范 Items in R23-11
93. Added Constraints in R23-11
94. Changed Constraints in R23-11
95. Deleted Constraints in R23-11
96. Change History of this document according to AUTOSAR Release R24-11
97. Added 规范 Items in R24-11
98. Changed 规范 Items in R24-11
99. Deleted 规范 Items in R24-11
100. Added Constraints in R24-11
101. Changed Constraints in R24-11
102. Deleted Constraints in R24-11
103. Change History of this document according to AUTOSAR Release R25-11
104. Added 规范 Items in R25-11
105. Changed 规范 Items in R25-11
106. Deleted 规范 Items in R25-11
107. Added Constraints in R25-11
108. Changed Constraints in R25-11
109. Deleted Constraints in R25-11
