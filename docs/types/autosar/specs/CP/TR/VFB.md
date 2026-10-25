# Virtual Functional Bus (`VFB`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 056 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_VFB_056\AUTOSAR_CP_TR_VFB.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_VFB_056\AUTOSAR_CP_TR_VFB.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_VFB_056\zzgen\CP_TR_VFB.complete.txt`

## 文档简介

This section specifies the communication mechanisms of the VFB, which atomic software components can use to communicate with each other.

Section , Error types, defines the types of errors that can appear in both Sender-Receiver and Client-Server communication models.

Section , Sender-Receiver communication, defines the functional semantics of sender-receiver communication in more detail. This section also defines the communication attributes that define the exact characteristics of the communication patterns provided by AUTOSAR. Some details related to mode-switches are covered in Chapter , Mode Management.

Section , Client-Server communication, does the same for client-server.

## 章节详细内容

### 1. 简介 to this document
*原文标题：Introduction to this document*

### 2. Contents

This specification describes the AUTOSAR Virtual Functional Bus (VFB).

### 3. Prereads

This document is one of the high-level conceptual documents of AUTOSAR.

Documents that can be consulted in parallel to this document include the "Methodology"  and the "Glossary" .

### 4. Relationship to other AUTOSAR specifications

Figure  illustrates the relationship between the specification of the "Virtual Functional Bus" and other major AUTOSAR specifications. The specification of the "Virtual Functional Bus" is part of a set of specifications describing the overall concepts of AUTOSAR. These documents give a conceptual overview of AUTOSAR and serve as requirements to the more detailed specifications. The conceptual specifications include:

* the "Methodology"  describes the method that is used when building systems with AUTOSAR
* the specification of the "Virtual Functional Bus"
* the "Layered Software Architecture"
* and the "List of Basic Software Modules"

These conceptual documents are refined and made concrete into a large set of AUTOSAR specifications, which can be grouped into:

* The specifications defining the AUTOSAR meta-model and templates: In this group the "Software Component Template"  is directly influenced by the VFB concepts.
* The specifications defining the AUTOSAR basic-software modules and the RTE: In this group the "Specification of RTE"  is directly influenced by the VFB concepts.

### 5. 结构 and conventions of this document
*原文标题：Structure and conventions of this document*

### 6. 结构 of this document
*原文标题：Structure of this document*

Figure  shows the structure of this document. The first chapters define the VFB concepts generically and should be read in order. The last chapters define and clarify specific issues, such as the interaction with hardware, mode-management, AUTOSAR-Services or Measurement and Calibration. The chapter about the timing model is for information purposes only and is not part of the standard. It is made available to show the early conceptual work to model time aspects in the VFB.

### 7. 规范 Items
*原文标题：Specification Items*

The requirements on the "Virtual Functional Bus" resulting from this document are listed explicitly as numbered "specification items". Each specification item has a unique ID of the form "VFB-XXX" and has the following format:

VBF-XXX : Example of a specification Item

### 8. The Virtual 功能性 Bus
*原文标题：The Virtual Functional Bus*

Figure  shows an overview out of the "Methodology" specification . Figure  illustrates the concept of the VFB.

In AUTOSAR, an application is modeled as a composition of interconnected components. This is illustrated in the top half of Figure  (labeled "VFB view"). The "virtual functional bus" is the communication mechanism that allows these components to interact. The components are mapped on specific system resources (ECUs). Thereby, the virtual connections between the components are mapped onto local connections (within a single ECU) or on network-technology specific communication mechanisms (such as CAN or FlexRay frames). Finally, the individual ECUs in such a system can be configured. The concrete interface between the individual components and between the components and the Basic Software (BSW)  is called the Run-Time Environment (RTE) .

A component encapsulates complete or partial automotive functionality. Components consist of an implementation and of an associated formal software-component description (defined in the "Software Component Template" specification ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 总体机制与概念
*原文标题：Overall mechanisms and concepts*

### 10. Components

The central structural element used when building a system at the VFB-level is the "component". A component has well-defined "ports", through which the component can interact with other components. A port always belongs to exactly one component and represents a point of interaction between a component and other components.

Figure  shows an example of the definition of a component-type called "SeatHeatingControl", which controls the heating element in a seat based on several information sources.

In this example, the component-type requires the following information as input:

* whether a passenger is sitting on the seat (through the port "SeatSwitch")
* the setting of the seat temperature dial (through the port "Setting")
* and some information from a central power management system (through the port "PowerManagement"), which could decide to disable seat heating in certain conditions.

It controls

* the DialLED that is associated with the seat temperature dial (port "DialLED")
* and the heating element (through the port "HeatingElement").

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Port-Interfaces

A port of a component is associated with a "port-interface". The port-interface defines the contract that must be fulfilled by the port providing or requiring that interface.

 Each port typed by exactly one interface
  Previous Identifiers: `EXP_VFB_00003`
⌈
At configuration time, each port is typed by exactly one port-interface
⌋

Table  lists the port-interfaces supported by AUTOSAR.

| Kind of port-interface | Comment | Further reading |
|---|---|---|
| Client-server | The server is provider of operations and several clients can invoke those operations. | this section and Section |
| Sender-receiver | A sender distributes information to one or several receivers, or one receiver gets information (events) from several senders. A mode manager can notify mode switches to one or several receivers | this section and Section |
| Parameter Interface | A parameter interface allows software components access to either constant data, fixed data or calibration data. It should be noted that depending on the type of access (i.e. fixed, const or standard respectively) that compatibility rules apply. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Ports

As defined before, the ports of a component are the interaction points between components.

A port of a component is either a "PPort", a "RPort" or a "PRPort". A "PPort" or a "PRPort" provides the elements defined in a port-interface. A "RPort" or a "PRPort" requires the elements defined in a port-interface. A port is thus typed by exactly one port-interface.

### 13. Port 类型
*原文标题：Port Types*

A single port-interface can type several different ports.

 Port kind known at configuration time
  Previous Identifiers: `EXP_VFB_00007`
⌈
At configuration time, it is known whether a component's port is a PPort, a RPort or a PRPort
⌋

The following shows the port-icons for the various combinations and summarizes the semantics of those ports. Please note that PRPorts typed by a parameter interface are not supported.

 Receiver port for sender-receiver interface
  Previous Identifiers: `EXP_VFB_00096`
⌈
* Kind of Port: RPort
* Kind of Interface: sender-receiver
* Service Port: No
* Port Description: The component reads/consumes values of data-elements
* Port-Icon: see Figure "Sender-Receiver RPort"
⌋

 Provider port for sender-receiver interface
  Previous Identifiers: `EXP_VFB_00097`
⌈
* Kind of Port: PPort
* Kind of Interface: sender-receiver
* Service Port: No
* Port Description: The component provides values of data-elements
* Port-Icon: see Figure "Sender-Receiver PPort"
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Port Compatibility

A receiver port can only be connected to a compatible provider port. Table  gives an overview over the compatibility of ports. The following comments describe some basic compatibility rules. Please note that this overview only contains some basic rules. A more comprehensive and detailed Port Description is given in the "Software Component Template" .

# For each element in the interface of the require port there must be a compatible element in the interface of the provide port. The mapping is realized implicitly via the shortname of the element or explicitly via explicit mappings (see Section ).
# For mode switch ports all elements of the interface of the provide port must have a corresponding element in the interface of the require port.
# Require and provide port are both service ports or are both not service ports.
# For connecting ports with Sender Receiver Interface, Parameter Interface or Non Volatile Data Interface, corresponding elements must have compatible implementation policies (see "Software Component Template" ).
# PRPorts typed by a parameter interface is not supported.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 数据类型 Policies
*原文标题：Data Type Policies*

Data elements on a port are typed properly as part of the port interface Port Description of a SWC. However it should be noted though that the data type of elements to be communicated between two ports can be overridden by the integrator by overriding the data type using a data type policy which allows for reducing the number of bits to be transmitted over a physical network. The data type has to be compatible and usually result in loss of precision and introduce quantization artifacts.

### 16. Connectors

During the design of an AUTOSAR system, ports between components that need to communicate with each other are hooked up using assembly-connectors. Such an assembly-connector connects one RPort or PRPort with one PPort or PRPort.

For the case of sender-receiver communication, the presence of an assembly-connector represents the fact that the data generated by the PPort on the connector is transmitted to the RPort. In the example of Figure  the data generated on the PPort "DialLED" of the component "SHCFrontRight" (of component-type "SeatHeatingControl") is transmitted to the RPort "LED" of the component "SHDialFrontRight" (of component-type "HeatingDial").

For the case of client-server communication, an invocation of the operations provided on a PPort is possible from the components that have an RPort connected to this PPort. In the example of Figure : when the component "SHDialFrontLeft" invokes an operation through the port "Position", this operation will be invoked on the port "Setting" of the component "SHCFrontLeft".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Unconnected Ports

The occurrence of an unconnected port is not per se a design mistake. It can be valid when an application provider for the data element is absent and the default init value is good enough to operate with or it could be that an end point was removed from the system because it is subjected to variability (See Section , Variant Handling).

### 18. Unconnected PRPorts

A PRPort is never considered unconnected, even if there are no connectors actually referring to it.

### 19. Unconnected Sender/Receiver Ports

If a PPort of a sender receiver communication is unconnected then the data being published by the provider will not appear on the VFB and as such will not be accessible by any other software component.

If an RPort of a sender receiver communication is unconnected then the RPort shall provide the initial value and report of an unconnected RPort.

### 20. Unconnected Client/Server Ports

If a PPort of a client server communication is not connected the server will not receive any requests.

If an RPort of a client server communication is unconnected then the RPort shall report of an unconnected RPort.

### 21. Compositions versus atomic components

A sub-system consisting of usages of components and connectors is packaged into a "composition". In AUTOSAR, the usage of a component-type within a composition is called a "prototype". A composition is itself a component-type and can have its own ports. Compositions can be used as structuring elements to build up hierarchical systems with an arbitrary number of hierarchies.

Figure  shows the definition of the composition "SeatHeatingControlAndDrivers". This composition contains three prototypes: the prototype "SHDial" (of component-type "HeatingDial"), the prototype "SHC" (of component-type "SeatHeatingControl") and the prototype "SH" (of component-type "SeatHeating"). The composition itself is a component-type and has seven ports.

Figure  shows the use of a composition as a component-type. Figure  essentially shows another composition containing three prototypes: the prototypes "SHFrontLeft" and "SHFrontRight" (both of type "SeatHeatingControlAndDrivers") and the prototype "PM" of type "PowerManagement".

A component-type in AUTOSAR is either a "composition" or "atomic". A composition is defined through interconnected prototypes (as in Figure ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Relationship between the VFB and the ECU 软件架构
*原文标题：Relationship between the VFB and the ECU Software Architecture*

When a sub-system consisting of atomic components and assembly-connectors is deployed on a network of ECUs, all atomic components are mapped on an ECU. The corresponding connectors between the components are implemented by intra- or inter-ECU communication mechanisms.

In the example of Figure , atomic components "SHDialFrontLeft" and "SHCFrontLeft" are mapped onto "ECU1", whereas the atomic component "PM" is mapped onto "ECU3". This implies that the connectors between the first two components are handled within ECU1, whereas the connection between the component "SHCFrontLeft" and the component "PM" will run through a network connection between ECU1 and ECU3.

Figure  shows the standard component-view on the AUTOSAR layered software architecture, which is the architecture of a single AUTOSAR ECU. The "AUTOSAR Interface" of a component refers to the full set of ports of a component (as defined before, a port-interface characterizes a single port of a component). A "Standardized AUTOSAR Interface" is an AUTOSAR Interface which is standardized by AUTOSAR. Typically, an AUTOSAR service will have such a "Standardized AUTOSAR Interface".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Kinds of 软件 components
*原文标题：Kinds of software components*

This section gives a final overview of the various kinds of components that are relevant to AUTOSAR.

 Application software component
  Previous Identifiers: `EXP_VFB_00209`
⌈
* Kind: Application software component
* Description: The Application Software Component is an Atomic Software Component that implements (part of) an application. It can use all AUTOSAR communication mechanisms and services. The Application Software Component interacts with sensors or actuators through a Sensor-Actuator Software Component.
* Illustration: see Figure "Application Software Component"
⌋

 Sensor-actuator software component
  Previous Identifiers: `EXP_VFB_00121`
⌈
* Kind: Sensor-actuator software component
* Description: The Sensor-Actuator Software Component is an Atomic Software Component that handles the specifics of a sensor and/or actuator. It directly interacts with the ECU-Abstraction (this is illustrated by a port called "IO").
* Illustration: see Figure "Sensor-Actuator Software Component"
⌋

See Chapter , Interaction with hardware.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Resources for components and "runnables"

### 25. Background

The VFB is a system modeling and communication concept, which allows components to be distributed in a network of ECUs. The interaction possibilities between a component and other components are described through the component's ports and their associated interfaces, which define the operations, data-elements, mode-groups or calibration parameters that are provided or required by the component. Through the same communication mechanisms, the component can interact with standardized AUTOSAR services (available on each properly configured AUTOSAR ECU) or the ECU-specific IO capabilities (available on the specific ECU on which the appropriate hardware is present and to which the correct devices are connected).

However, implementations of components need access to additional resources, mainly memory (the component's implementation typically needs memory to maintain its internal state) and CPU-power (the component's implementation contains code that must be executed according to a certain timing schedule or in response to certain events).

As these scheduling issues are closely linked to the communication needs of the component, the RTE must provide both aspects.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. The "runnable" concept

The "atomicity" of an atomic software-component refers to the fact that the component cannot be divided in smaller components and must therefore be mapped onto a single ECU.

For example, Figure  shows a logical component view of the mapped application-software component "SHCFrontLeft" on a specific ECU. Through its ports, the component expresses which information it requires from and provides to other components.

However, the actual implementation of a component consists of a set of "runnable entities" (also more simply called "runnables"). A "runnable entity" is a sequence of instructions (provided by the component) that can be started by the Run-Time Environment.

Figure  shows an example of this. Logically, the component-type "SeatHeatingControl" has defined six ports, through which it wants to interact with other components or services. The implementation of the component on the other hand contains two runnables: "MainCyclic" and "Setting". The component requires the runnable "MainCyclic" to be invoked cyclically (at a specific rate) by the RTE.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. The implementation of a 组件 and the role of the RTE
*原文标题：The implementation of a component and the role of the RTE*

In conclusion, the implementation of an atomic software-component essentially consists of three aspects:

A model of the component (using the concept of ports and port-interfaces) that is used to hook up the component with other components at the VFB-level

An implementation ("code"). The implementation of the component is structured in "runnables" which are pieces of code that can be executed by the RTE

A software-component description  in which the component describes requirements on the RTE. These include:

* Which runnables need to be called cyclically
* Which runnables need to be called in response to events related to communication or other sources
* How the component would like to access the information in its ports or invoke the operations that it requires from other components
* Any other resources the component requires, such as AUTOSAR services or local memory

In a properly configured AUTOSAR ECU, the RTE (in cooperation with a properly configured basic software), will satisfy the component's requirements. The RTE will for example:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 接口 Conversion Blocks
*原文标题：Interface Conversion Blocks*

When software components are developed by different organizations (e.g. two distinct suppliers delivering code to an OEM who integrates the SWCs) it may happen that two or more SWCs have the same engineering semantics but are represented with different data types. Instead of requiring the integrator to develop specific SWC conversion software the VFB will add a conversion block to a connector connecting Sender Receiver ports with mismatched interface definitions at the VFB level. The addition of this conversion block allows the designer to add which elements of the provided port map to the elements of the required port as well as provide the conversion semantics. In the RTE these mappings will be described with the PortInterfaceMappings. This construct maps an interface pair to the connection.

 Conversion block required for incompatible interfaces
  Previous Identifiers: `EXP_VFB_00140`
⌈
If a P-port specified by a Sender Receiver Interface is connected to an R-port with an incompatible interface then a conversion block must be added for the connector to allow the designer to describe the conversion. Incomplete conversion will not be allowed
⌋

### 29. Supported Conversions and Mappings

### 30. 接口 Element 映射
*原文标题：Interface Element Mapping*

In case two interfaces only differentiate in the shortnames of their elements, then a mapping can be provided which maps the elements of the one interface to the elements of the other interface.

### 31. Linear 数据 Conversion
*原文标题：Linear Data Conversion*

If the elements of two interfaces are logically equivalent but the range and resolution are different, then the linear conversion factor can be calculated out of the semantical information of the elements. In this case the data semantics is described using a CompuMethod with category IDENTICAL, LINEAR, `SCALE_LINEAR` or `SCALE_LINEAR_AND_TEXTTABLE`, where the

* IDENTICAL category means that the value of the physical representation is equal to the internal representation and the
* LINEAR, `SCALE_LINEAR` or `SCALE_LINEAR_AND_TEXTTABLE` categories mean that the internal representation is calculated out of the physical representation by means of a linear formula (factor * external value + offset) per range in one or more ranges (`SCALE_LINEAR` only).

 Conversion using COMPU-METHODS for supported data types
  Previous Identifiers: `EXP_VFB_00141`
⌈
A conversion block involving either IDENTICAL, LINEAR, TEXTTABLE, `SCALE_LINEAR` or `SCALE_LINEAR_AND_TEXTTABLE` data types shall use the COMPU-METHODS for the respective data types to determine the conversion function.
⌋

The following examples show the conversion of data that is described using CompuMethods with category LINEAR and IDENTICAL:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 数据映射
*原文标题：Data Mapping*

In case the data semantics is described using a list of values (CompuMethod with category TEXTTABLE) or partially described using a list of values (CompuMethod with category `SCALE_LINEAR_AND_TEXTTABLE`), then an explicit mapping needs to be given for each individual value.

 Explicit mapping for table-based conversions
  Previous Identifiers: `EXP_VFB_00142`
⌈
A conversion block involving TEXTTABLE or `SCALE_LINEAR_AND_TEXTTABLE` data types shall use explicit mapping of each RPort table element to a PPort table element.
⌋

### 33. Mixed Conversion

It is possible in a conversion block to mix both linear conversion and texttable mappings (`SCALE_LINEAR_AND_TEXTTABLE`).

An example would be a conversion block consisting of an input value of type uint8 which is linearly converted in the range 0..200 and has 2 texttable mappings for the values 254 "SensorNotAvailable" and 255 "SensorFault".

### 34. Variant 处理
*原文标题：Variant Handling*

To support variation in automotive applications AUTOSAR has a mechanism referred to as variant handling. This allows designers at many levels to put together a super set of functionality and choose which actual pieces of this functionality will be enabled in a specific variant. The place in the design where a choice is given between 2 or more variants is called a variation point. The time at which a choice must be made is called the latest binding time. Binding earlier is always allowed.

### 35. Binding Times

AUTOSAR supports several discreet binding times:

* System Design
* Code Generation
* Pre Compile
* Link Time
* Post Build

Although variability could exist at function design time and run-time AUTOSAR explicitly prohibits the later and does not provide support for the function design time.

### 36. Choosing a Variant

To choose a variant the AUTOSAR designer must assign no later than the required binding time one of a predefined set of values to a Software System Constant or to a Post Build Variant Criterion. The Post Build Variant Criterion is used for enabling Post Build binding times while the Software System Constant can be used for everything that has a latest binding time of Link Time.

By assigning a value to either a Software System Constant or Post Build Variant Criterion the AUTOSAR system can determine which variant is enabled for each Variation Point in the design by evaluating either a Software System Dependant Formula (uses System Constants to determine if a Variation Point is enabled or disabled) or by evaluating one or more a Post Build Variant Conditions (uses Post Build Variant Criterions to determine if a Variation Point is enabled or disabled). If the Variation Points Formula or Condition evaluates to true then the element in the design which was conditional upon the Variation Point will exist in the design.

Typically designers will define collections of validated assignments for Software System Constants and Post Build Variant Criterions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Variability

Although variability exists within the internal behavior of Software Components from a VFB perspective only three elements of variability are of interest:

* Software Component Variability
* Port Variability
* Connector Variability.

### 38. 软件组件 Variability
*原文标题：Software Component Variability*

The existence of a Software Component either Atomic or Composition can be subjected to the existence of a Variation Point. If a Variation Point exists and its conditions (see Section , Choosing a Variant) evaluate to true then the Software Component exists and its behavior will be scheduled and its ports produce output. If the Component however is removed from a composition (I.e. application or system design) then all Software components which are connected to the removed Software Component will have ports which will be considered unconnected and will behave as unconnected ports (see Section , Unconnected Ports for more details) and non of the behavior of the removed component will execute. Software Components variability in a Composition can be bound as late as Post Build.

### 39. Port Variability

Ports on a Software Component can also be subjected to variability. However their latest binding time is Pre Compile time and as such their variability can only be constrained using Software System Constants. If a Port is removed from the design then any connecting port must behave as an unconnected port. In a properly configured system if a Port is "disabled" the connector connecting to this port should also be subjected to the same variability conditions.

### 40. Connector Variability

A connection between two ports can be subjected to variability with a binding time of Post Build. If a connector is "disabled" then the two ports at either end of the connector must behave as unconnected ports.

### 41. Communication on the VFB

### 42. 简介
*原文标题：Introduction*

This section specifies the communication mechanisms of the VFB, which atomic software components can use to communicate with each other.

Section , Error types, defines the types of errors that can appear in both Sender-Receiver and Client-Server communication models.

Section , Sender-Receiver communication, defines the functional semantics of sender-receiver communication in more detail. This section also defines the communication attributes that define the exact characteristics of the communication patterns provided by AUTOSAR. Some details related to mode-switches are covered in Chapter , Mode Management.

Section , Client-Server communication, does the same for client-server.

### 43. 错误类型
*原文标题：Error types*

Errors are divided into two simple classes: infrastructure errors and application errors.

Infrastructure errors are returned when the infrastructure between the sender and the receiver, for sender-receiver communication, or between the client and the server, for client-server communication, failed. A typical example of an infrastructure error is a timeout. In case the client does not receive a response from the server within a certain amount of time (because the communication channel between client and server is not available or a message was lost) a "time-out" infrastructure error is returned to the client. The possible infrastructure errors are standardized by AUTOSAR.

Application errors are application-specific and must be defined as part of the sender-receiver interface, for sender-receiver communication, or client-server interface, for client-server communication.

### 其余 75 章（内容从略，见纯文本全文）

44. Sender-Receiver communication
45. From the point of 视图 of the sender
46. From the point of 视图 of the receiver
47. Multiplicity of sender-receiver
48. 过滤 between the sender and the receiver
49. Concurrency and ordering within a sender-receiver connector
50. Client-Server communication
51. From the point of 视图 of the client
52. From the point of 视图 of the server
53. Multiplicity of client-server
54. Ordering and concurrency within a client-server connector
55. Remarks regarding the identification of communication partners
56. 时序 Extensions
57. 时序 Extensions for AUTOSAR的Main 目的
58. 时序 in different phases of the AUTOSAR methodology
59. Interaction with hardware
60. 简介
61. Microcontroller 抽象 Layer (MCAL)
62. ECU 抽象
63. Sensor-Actuator 软件组件
64. Complex 驱动组件
65. AUTOSAR 服务
66. 简介
67. VFB Representation
68. Selection of a communication mechanism
69. Location of a 服务
70. Distribution of Requests to Remote 服务
71. Platform dependent 类型
72. 配置
73. List of 服务
74. 模式管理
75. 简介
76. Defining modes
77. Communicating modes
78. Mode-managers：components that 控制 modes
79. Components that depend on modes
80. Port Groups
81. Measurement and Calibration
82. Calibration
83. Port-based calibration
84. Pure single instantiation
85. the involved 软件 components的多 instantiation
86. 多 instantiation of the involved calibration components
87. Private calibration
88. Measurement
89. VFB Features and Profiles
90. Motivation and 简介
91. Feature tables
92. Intra-ECU features
93. Inter-ECU features
94. Interaction with Non-AUTOSAR-ECUs
95. 简介
96. Problems of interaction
97. 描述 of interaction
98. References
99. 附录
100. Change history of AUTOSAR traceable items
101. Traceable item history of this document according to AUTOSAR Release R25-11
102. Added 规范 Items in R25-11
103. Changed 规范 Items in R25-11
104. Deleted 规范 Items in R25-11
105. Traceable item history of this document according to AUTOSAR Release R24-11
106. Added 规范 Items in R24-11
107. Changed 规范 Items in R24-11
108. Deleted 规范 Items in R24-11
109. Traceable item history of this document according to AUTOSAR Release R23-11
110. Added Advisories in R23-11
111. Changed Advisories in R23-11
112. Deleted Advisories in R23-11
113. Added Constraints in R23-11
114. Changed Constraints in R23-11
115. Deleted Constraints in R23-11
116. Added 规范 Items in R23-11
117. Changed 规范 Items in R23-11
118. Deleted 规范 Items in R23-11
