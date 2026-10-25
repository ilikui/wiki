# System Template (`SystemTemplate`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 063 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TPS_SystemTemplate_063\AUTOSAR_CP_TPS_SystemTemplate.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TPS_SystemTemplate_063\AUTOSAR_CP_TPS_SystemTemplate.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TPS_SystemTemplate_063\zzgen\CP_TPS_SystemTemplate.complete.txt`

## 文档简介

This chapter describes the modeling of how a global time synchronization in an AUTOSAR system can be achieved.

 Value of category of GlobalTimeDomain
  Imposition time: CP:`IT_SysDesc`
⌈
The attribute category of GlobalTimeDomain can have the following value:

* SYNCHRONIZED: this time base does not depend on the existence of another time base
⌋

There are several use cases for implementing a system-wide global time in an vehicle:

* In case of an accident it may be necessary to post-mortem analyze whether the vehicle ECUs performed according to specification. This implies that it shall be possible to unambiguously determine the sequence of activities before a crash. This sequence can only be determined if all components in the distributed system depend on a reliable global time basis.
* It may be necessary that several ECUs in the distributed system need to act in concert with respect to the time that a specific activity is executed. A very trivial example for this requirement is the activation of turn indicators in a car. These are rarely connected to a single ECU (which could take care of synchronously flashing the turn indicators) but their synchronized execution is still very essential for the vehicle operation.
* The distribution of several global time bases shall be possible (e.g. a vehicle local time based on the runtime of the car and a GPS-based time).

It is obvious that the distribution of global time within a vehicle requires a system-wide context and therefore, the AUTOSAR System Template defines relevant meta-classes and their relations for this purpose.

Of course, the actual implementation of global time distribution is done in a couple of basic-software modules that need to be configured in the context of integrating a particular ECU. The purpose of the meta-model described in chapter  is to support the configuration of these basic-software modules.

The modeling of how the distribution of global time is supposed to work can roughly be distributed into two parts, the discussion of the big picture (see ) and the description of the details that eventually will support the configuration of the corresponding basic-software modules. The latter can be found in chapter .

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. Methodology for Defining Formal 模板
*原文标题：Methodology for Defining Formal Template*

Figure  illustrates the overall methodology used to define formal templates. As is explained in the "Generic Structure Template" , it is important to separate a precise and concise model of the information that needs to be captured from the concrete XML-DTDs, XML-Schemas or other technology that is used to define the actual templates.

The following documents describe the various aspects of the methodology:

# The document called System Template (this document) describes the information that can be captured in the "system constraint" and "system configuration" description, independently from the mapping of this model on XML-technology. This document is based upon the AUTOSAR meta-model and contains an elaborate description of the semantics (the precise meaning) of all the information that can be captured within the relevant parts of this meta-model.
# The UML and the AUTOSAR Template Profile  describes the basic concepts that should be used when creating content of the meta-model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 范围
*原文标题：Scope*

This document describes the system template and its use for the System Constraint Description and the System Configuration Description. In general a filled system template defines the relationship between the pure Software View on the System (represented by a top level SW Component Composition) and a Physical System Architecture with networked ECU instances. The system template is used in two stages of the "AUTOSAR Methodology"  (see Figure ).

* As System Constraint Description it serves as input to the AUTOSAR system generator
* As System Configuration Description it defines the output of the AUTOSAR System Configuration Generator and serves as input to the AUTOSAR ECU Configuration Generator for the different ECUs defined in the description.
* As ECU Extract of the System Configuration Description it describes the ECU specific view on the System Description. It is individually generated for each of the System's ECU as the output of the AUTOSAR ECU Configuration Generator.

The System Template defines five major elements: Topology, Software, Communication, Mapping and Mapping Constraints, which will be defined in detail in the following chapters.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. UML Meta-Model

This chapter gives an overview of the AUTOSAR Unified Modeling Language (UML) meta-model. All AUTOSAR templates use a common meta-model. The templates describe software components, ECU resources, the Basic Software Modules, the ECU Configuration Parameters (ECU Configuration Description and ECU Configuration Parameter Definition) and the System.

The System Template defines all elements, their parameters and their relations, which are necessary for the System Constraint Description and the System Configuration Description.

Figure  shows the overall structure of the meta-model.

The dashed arrows in the diagram describe dependencies in terms of import-relationships between the packages within the meta-model. For example, the package SystemTemplate imports meta-classes defined in the packages GenericStructure , SWComponentTemplate  and ECUResourceTemplate .

For clarification, please note that the package GenericStructure contains some fundamental infrastructure meta-classes and common patterns that are described in . As these are used by all other template specification the dependency associations are not depicted in the diagram for the sake of clarity.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Detailed Representation of InstanceRef Associations

As a special type of association "instanceRef" refers to an exact instance of the referenced class, requiring additional information of the target and the context. This is explained in detail in the AUTOSAR Generic Structure Template . Each "instanceRef" association can both be represented by the short form and by an detailed representation. For readability the diagrams in the main body of the specification use the short form. The detailed descriptions can be found in the Appendix .

### 7. Variant 处理
*原文标题：Variant Handling*

The System Template supports the creation of Variants in many of its model elements. In the Metamodel all locations that may exhibit variability are marked with the stereotype atpVariation. This allows the definition of possible variation points. Tagged Values are used to specify additional informations.

There are four types of locations in the metamodel which may exhibit variability:

* Aggregations
* Associations
* Attribute Values
* Classes providing property sets

The reasons for the attachment of the stereotype atpVariation to certain model elements and the consequences for other model elements are explained in class tables in the following chapters. More details about the AUTOSAR Variant Handling Concept can be found in the AUTOSAR Generic Structure Template .

### 8. 时序 Extensions
*原文标题：Timing Extensions*

With AUTOSAR Release 4.0 a new set of concepts for the description and analysis of end-to-end timing constraints is introduced by the Specification of Timing Extensions. A subset of these extensions aims for the system level and can be used to enhance the descriptions that are already available in the System Template.

A dedicated description of the timing extensions that can be used at system level is given in chapter 3 (System timing) in the Specification of Timing Extensions .

### 9. Documentation 支持
*原文标题：Documentation Support*

With AUTOSAR Release 4.0 the AUTOSAR XML schema provides support for integrated and well structured documentation. More details about the AUTOSAR Documentation Support concept can be found in the AUTOSAR Generic Structure Template . An optional documentation block can be applied to any identifiable element. Furthermore, as shown in figure , the System Template provides the possibility of adding additional documentation to several non-identifiable elements. The documentation of a System is composed of several chapters.

### 10. Stereotype atpSplitable in the 系统模板
*原文标题：Stereotype atpSplitable in the System Template*

The stereotype atpSplitable>> is used in the System Template to support stepwise processes, where the System Configuration Description is completed incrementally over a development process. Example:

1) Description of Communication only consists of interaction signals (ISignal). This is enough information to create an individual ECU's RTE, and even contains enough information to configure an ECU where the actual Frame/Pdu communication is being handled post-build.

2) In a second step, the communication matrix is being completed for a concrete vehicle. Pdus and Frames, along with their Triggerings are being added to the previous System Description. This model then contains the full information about an ECU's communication, especially containing the additional information to generate the post build information.

So, in this 2-step approach, an OEM could deliver the incomplete ECU extract from step (1) to the ECU integrator, who can then build a complete software image for the ECU.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. AUTOSAR 系统模板 and ASAM FIBEX
*原文标题：AUTOSAR System Template and ASAM FIBEX*

FIBEX (Field Bus Exchange Format)  is an XML exchange format proposed for data exchange between tools that deal with bus communication Systems. The format supports the most common automotive data buses: LIN , CAN , MOST , FlexRay . The covered areas of the exchange format are the functional network, system topology and the communication level. The functional network describes the software architecture of the system. In the system topology the logical layout of the system is described. This means it is documented which ECU is connected to which bus. The central purpose of a communication system is the exchange of frames with certain properties. The format is able to describe frames and their timing properties.

In future versions of the System Template a common subset between ASAM FIBEX and AUTOSAR will be harmonized. The current version of the System Template contains already the ASAM FIBEX description for communication and topology. Due to requirements of AUTOSAR some extensions were made to those descriptions. For instance the communication part is extended by a concept for PDUs (I-Pdus and N-Pdus).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 系统
*原文标题：System*

The top level element of the System Template is the class System, as shown in figure .

| Class | System | < | < | < |
|---|---|---|---|---|
| Note | The top level element of the System Description. The System description defines five major elements: Topology, Software, Communication, Mapping and Mapping Constraints. |  |  |  |

The System element directly aggregates the elements describing the Software, Mapping and Mapping Constraints; it contains a reference to an ASAM FIBEX description specifying Communication and Topology.

| Tags: atp.recommendedPackage=Systems | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, AtpClassifier, AtpFeature, AtpStructureElement, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, UploadableDesignElement, UploadablePackageElement | < | < | < |
| Aggregated by | ARPackage.element, AtpClassifier.atpFeature | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| clientIdDefinitionSet | ClientIdDefinitionSet | * | ref | Set of Client Identifiers that are used for inter-ECU client-server communication in the System. |

This Attribute is only used by the AUTOSAR Classic Platform.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 数据 interpretation of bus content in different contexts
*原文标题：Data interpretation of bus content in different contexts*

A System Description can be used for different purposes:

* as input for the creation of the Base Ecu Configuration
* as input for bus monitoring and network analysis tools

In some cases the System Description is interpreted in a different way between Ecuc tools and network analysis tools. This chapter collects such use cases and describes the differences in the interpretation of the configuration data.

### 14. Nm NID/CBV

NID/CBV signals shall be ignored by Ecuc tools
⌈
If NID/CBV are enabled (nmCbvPosition and nmNidPosition are configured), the Signals that are defined at the position of the respective NID/CBV bytes shall be ignored by Base Ecuc generators since these signals are not processed by COM.
⌋

Please note that there may be the use case to define the Signals that represent the NID and CBV in the NmPdu for bus monitoring or network analysis purposes.

### 15. ClientIdDefinitionSet

In the ClientIdDefinitionSet all Client Identifiers of the transaction handle used for a inter-ECU client server communication can be defined that belong to the System that refers the ClientIdDefinitionSet.

| Class | ClientIdDefinitionSet | < | < | < |
|---|---|---|---|---|
| Note | Set of Client Identifiers that are used for inter-ECU client-server communication in the System. |  |  |  |

| Tags: atp.recommendedPackage=ClientIdDefinitionSets | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| clientIdDefinition | ClientIdDefinition | * | aggr | Definition of a Client Identifier that will be used by the RTE in a inter-ECU client-server communication. |

Stereotypes: atpSplitable; atpVariation Tags: atp.Splitkey=clientIdDefinition.shortName, clientIdDefinition.variationPoint.shortLabel vh.latestBindingTime=postBuild

| Class | ClientIdDefinition | < | < | < |
|---|---|---|---|---|
| Note | Several clients in one client-ECU can communicate via inter-ECU client-server communication with a server on a different ECU, if a client identifier is used to distinguish the different clients. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 系统 ComSpec 定义
*原文标题：System ComSpec Definition*

Application software components are designed to be deployable to different system contexts. Thus several communication attributes may be depending on the actual deployment scenario the application software component is used in.

The SystemComSpecDefinitionSet is used to collect the definition of attributes specific to a dedicated System and define attribute values for application software component usage in that System. The reference System.systemComSpecDefinition defines which SystemComSpecDefinitionSets are applicable for this System.

| Class | SystemComSpecDefinitionSet | < | < | < |
|---|---|---|---|---|
| Note | Set of ComSpecDefinitions in the scope of the System. |  |  |  |

| Tags: atp.recommendedPackage=SystemComSpecDefinitionSets | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| modeSwitchSenderComSpecProps | ModeSwitchSenderComSpecProps | * | aggr | Definition of ComSpec attributes for the mode switch sender. |
| queuedReceiverComSpecProps | QueuedReceiverComSpecProps | * | aggr | Definition of ComSpec props for the receiverof a dataElement. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Server ComSpec

The meta-class ServerComSpecProps is able to define the attribute remoteClientQueueLengthContribution for a specific ClientServerOperation instance in the scope of the System. The value of ServerComSpecProps.remoteClientQueueLengthContribution is used to define the queue length which the server of that ClientServerOperation at least needs to configure for the queue length to handle the remote clients in the System.

Additional local clients in the scope of the EcuInstance the server is running on are not covered by the value of remoteClientQueueLengthContribution, these additional local clients need to be considered when configuring the actual queue length during Ecu configuration.

| Class | ServerComSpecProps | < | < | < |
|---|---|---|---|---|
| Note | Definition of ComSpec attributes for the server. | < | < | < |
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | SystemComSpecDefinitionSet.serverComSpecProps | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| clientServerOperation | ClientServerOperation | 0..1 | iref | Reference to the ClientServerOperation. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Queued Receiver ComSpec

The meta-class QueuedReceiverComSpecProps is able to define the attribute remoteSenderQueueLengthContribution for a specific dataElement instance in the scope of the System. The value of QueuedReceiverComSpecProps.remoteSenderQueueLengthContribution is used to define the queue length which the receiver of that dataElement at least needs to configure for the queue length to handle the remote senders in the System.

Additional local senders in the scope of the EcuInstance the receiver is running on are not covered by the value of remoteSenderQueueLengthContribution, these additional local senders need to be considered when configuring the actual queue length during Ecu configuration.

| Class | QueuedReceiverComSpecProps | < | < | < |
|---|---|---|---|---|
| Note | Definition of ComSpec attributes for the queued receiver. | < | < | < |
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | SystemComSpecDefinitionSet.queuedReceiverComSpecProps | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| dataElement | VariableDataPrototype | 0..1 | iref | Reference to the dataElement of a SenderReceiverInterface. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. ModeSwitch Sender ComSpec

The meta-class ModeSwitchSenderComSpecProps is able to define the attribute remoteModeSenderQueueLengthContribution for a specific modeGroup instance in the scope of the System. The value of ModeSwitchSenderComSpecProps.remoteModeSenderQueueLengthContribution is used to define the queue length which the mode user of that modeGroup at least needs to configure for the queue length to handle the remote senders in the System.

Additional local senders in the scope of the EcuInstance the receiver is running on are not covered by the value of remoteModeSenderQueueLengthContribution, these additional local senders need to be considered when configuring the actual queue length during Ecu configuration.

| Class | ModeSwitchSenderComSpecProps | < | < | < |
|---|---|---|---|---|
| Note | Definition of ComSpec attributes for the mode switch sender. | < | < | < |
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | SystemComSpecDefinitionSet.modeSwitchSenderComSpecProps | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| modeGroup | ModeDeclarationGroupPrototype | 0..1 | iref | Reference to the ModeDeclarationGroupPrototype. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. InterpolationRoutingMappingSet

The System defines with the interpolationRoutineMappingSet reference all InterpolationRoutineMappingSets that are relevant in the context of the System. More details about the InterpolationRoutineMappingSets, InterpolationRoutineMappings and InterpolationRoutines can be found in the Software Component Template .

| Class | InterpolationRoutineMappingSet | < | < | < |
|---|---|---|---|---|
| Note | This meta-class specifies a set of interpolation routine mappings. |  |  |  |

| Tags: atp.recommendedPackage=InterpolationRoutineMappingSets | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| interpolationRoutineMapping | InterpolationRoutineMapping | * | aggr | This specifies one particular mapping of recordlayout and its matching interpolationRoutines. |

| Class | InterpolationRoutineMapping | < | < | < |
|---|---|---|---|---|
| Note | This meta-class provides a mapping between one record layout and its matching interpolation routines. This allows to formally specify the semantics of the interpolation routines. |  |  |  |

The use case is such that the curves/Maps define an interpolation method.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Topology

This chapter explains how a vehicle's physical System Topology is being modeled in AUTOSAR (Example: Figure ). A topology is formed by a number of EcuInstances that are interconnected to each other in order to form ensembles of ECUs and CommunicationClusters, which are further detailed by providing information on bus-specific properties.

In the AUTOSAR methodology  the topology description is one of the inputs for the System Generator. It serves as constraints for mapping the Software Components (see chapter ) contained in the RootSwCompositionPrototype as well as for defining the System Communication matrix (see chapter ). Gateways which allow the exchange of Signals between CommunicationClusters are covered in chapter .

### 22. ECUs and their communication capabilities

Within a System Topology, the ECUs actually being connected with each other are described in the form of EcuInstances. An EcuInstance needs to have one or more CommunicationController, the actual hardware device by means of which devices send and receive frames from the communication medium. Furthermore, the EcuInstance has one or more CommunicationConnectors which describe the bus interfaces of the ECUs and to specify the sending/receiving behavior.

### 23. ECU Instance

Definition of EcuInstance
⌈
The EcuInstance defines one instance of the AUTOSAR stack.
⌋

The actual description of the ECU hardware resources is done by the means of the ECU Resource Template : It uses the HwElement class and its aggregated hardware elements for defining a specific ECU type. In other words the Ecu Resource Template "Ecu" is used to describe the physical box (HwElement of category Ecu) containing the electronics which may contain several microcontrollers with several AUTOSAR Stack instances running.

 Assign ECU type to EcuInstance
⌈
The process of assigning an ECU type to EcuInstance is a mapping step (see ) and performed latest in the System Generation step.
⌋

An EcuInstance can serve as a gateway if it is connected to two or more different clusters by two or more of its CommunicationControllers.

| Class | EcuInstance | < | < | < |
|---|---|---|---|---|
| Note | ECUInstances are used to define the ECUs used in the topology. The type of the ECU is defined by a reference to an ECU specified with the ECU resource description. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Communication Controller

Definition of CommunicationController
⌈
A CommunicationController is a dedicated hardware device by means of which hosts are sending frames to and receiving frames from the communication medium.
⌋

 Assign CommunicationController to the AUTOSAR Communication Peripheral
⌈
In order to illustrate the relationship of an CommunicationController to the HwElement with category CommunicationController defined in the ECU Resource Description, a mapping between these two classes may be specified using the CommunicationControllerMapping (see ).
⌋

| Class | «atpVariation» CommunicationController (abstract) | < | < | < |
|---|---|---|---|---|
| Note | The communication controller is a dedicated hardware device by means of which hosts are sending frames to and receiving frames from the communication medium. |  |  |  |

| Tags: vh.latestBindingTime=postBuild | < | < | < |  |
|---|---|---|---|---|
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Subclasses | AbstractCanCommunicationController, EthernetCommunicationController, FlexrayCommunicationController, LinCommunicationController, UserDefinedCommunicationController | < | < | < |
| Aggregated by | EcuInstance.commController, MachineDesign.communicationController | < | < | < |
| Attribute | Type | Mult. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Communication Connector

Definition of CommunicationConnector
⌈
An EcuInstance uses CommunicationConnector elements in order to describe its bus interfaces and to specify the sending/receiving behavior.
⌋

The relationship between an EcuInstance, a CommunicationController, and a PhysicalChannel is expressed by letting a PhysicalChannel reference a CommunicationConnector (which in turn is aggregated by EcuInstance) and which also has the ability to reference a CommunicationController.

 Existence of CommunicationConnector.commController
  Imposition time: CP:`IT_SysDesc`
⌈
For each CommunicationConnector, the reference in the role commController shall exist.
⌋

| Class | CommunicationConnector (abstract) | < | < | < |
|---|---|---|---|---|
| Note | The connection between the referencing ECU and the referenced channel via the referenced controller. |  |  |  |

Connectors are used to describe the bus interfaces of the ECUs and to specify the sending/receiving behavior. Each CommunicationConnector has a reference to exactly one communicationController.

Note: Several CommunicationConnectors can be assigned to one PhysicalChannel in the scope of one ECU Instance.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Internal ECU 处理 upon a communication 唤醒
*原文标题：Internal ECU handling upon a communication wakeup*

An ECU may be woken up via communication activities on a communication bus / network. It is possible to define the expected behavior if communication wakeup has been qualified as valid:

* If EcuInstance.channelSynchronousWakeup is set to TRUE, then all channels and all configured PNCs are woken up upon a detection of a valid wakeup on a channel
* If EcuInstance.pncSynchronousWakeup is set to TRUE, then all PNCs and the corresponding channels are woken up upon a detection of a valid wakeup on a channel.
* If CommunicationConnector.explicitWakeupChannel is defined, then a list of to be woken up PhysicalChannels is defined.
* If CommunicationConnector.explicitWakeupPnc is defined, then a list of to be woken up PNCs is defined.

The reference CommunicationConnector.explicitWakeupChannel can only be used to define a dedicated set of to be woken up PhysicalChannels if EcuInstance.channelSynchronousWakeup if set to FALSE. This restriction is based on the basic software ComM specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Communication Clustering

### 28. Communication Cluster

Definition of CommunicationCluster
⌈
CommunicationCluster represents a formal way to express that a number of EcuInstances are linked by an arbitrary topology (bus, star, ring, tree). Depending on the communication standard, a CommunicationCluster may either have exactly one or more (redundant) PhysicalChannels.
⌋

Note that all ECUs within a CommunicationCluster communicate within the same address range.

Note that the same ECU can participate in more than one CommunicationCluster if it has more than one CommunicationConnector being referenced by PhysicalChannels owned by different CommunicationClusters.

| Class | «atpVariation» CommunicationCluster (abstract) | < | < | < |
|---|---|---|---|---|
| Note | The CommunicationCluster is the main element to describe the topological connection of communicating ECUs. |  |  |  |

A cluster describes the ensemble of ECUs, which are linked by a communication medium of arbitrary topology (bus, star, ring, ...). The nodes within the cluster share the same communication protocol, which may be event-triggered, time-triggered or a combination of both.

A CommunicationCluster aggregates one or more physical channels.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Physical Channel

Definition of PhysicalChannel
⌈
PhysicalChannel represents the communication medium that is used to send and receive information between communicating ECUs. Each CommunicationCluster has at least one PhysicalChannel.
⌋

 Limitation on the number of PhysicalChannels that are referencing a CommunicationConnector
  Imposition time: CP:`IT_SysDesc`, AP:`IT_SysDes`
⌈
A CommunicationConnector shall only be referenced by at most one PhysicalChannel.
⌋

| Class | PhysicalChannel (abstract) | < | < | < |
|---|---|---|---|---|
| Note | A physical channel is the transmission medium that is used to send and receive information between communicating ECUs. Each CommunicationCluster has at least one physical channel. Bus systems like CAN and LIN only have exactly one PhysicalChannel. A FlexRay cluster may have more than one PhysicalChannels that may be used in parallel for redundant communication. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 592 章（内容从略，见纯文本全文）

30. Specialized Attributes of the Topology Entities
31. CAN
32. CAN Cluster
33. CAN Communication Controller
34. CAN FD
35. CAN XL
36. CAN Physical Channel
37. CAN Communication Connector
38. SAE J1939
39. J1939Node
40. FlexRay
41. FlexRay Cluster
42. FlexRay Communication Controller
43. FlexRay Communication Connector
44. FlexRay Physical Channel
45. LIN
46. LIN Cluster
47. LIN Communication Controller
48. LIN Master
49. LIN Slave
50. LIN Communication Connector
51. LIN Physical Channel
52. Ethernet
53. Ethernet Cluster
54. Ethernet Physical Channel
55. VLAN Priority
56. Ethernet Coupling Elements and Coupling Ports
57. Ethernet Communication Controller
58. Ethernet Communication Connector
59. Ethernet Switch 驱动
60. Ethernet switch port 结构
61. Ethernet switch Credit-Based Shaper (CBS)
62. Ethernet switch Asynchronous Traffic Shaper (ATS)
63. Ethernet packet forwarding
64. Ethernet VLAN 配置
65. Semi-static DHCP server 配置
66. Stream Identification and per-stream 过滤 and policing
67. TcpIp stack 配置 properties
68. IP 配置 properties
69. TCP and UDP 配置 properties
70. ICMP 配置 properties
71. Ethernet 唤醒 and 休眠 on dataline
72. Ethernet Communication Controller
73. 服务 primitives for 唤醒
74. 服务 primitives for 休眠
75. Ethernet communication channel that act as passive communication slave
76. 10BASE-T1S Ethernet
77. MACsec
78. CDD
79. 映射 of Topology Entities onto Hardware Elements
80. ECU 映射
81. Communication Controller 映射
82. HW-Port 映射
83. Top-level 软件 Composition
84. 映射
85. 软件组件映射
86. SW 组件 to ECU 映射
87. 软件组件 to Implementation 映射
88. SW 组件 to 分区映射
89. 软件组件映射 Constraints
90. ComponentClustering
91. ComponentSeparation
92. Affinity Constraints
93. Relation to TIMEX
94. a 软件 Composition的RteEvent to OsTaskProxy 映射 constraints in the context
95. the 系统的RteEvent to OsTaskProxy 映射 constraints in the context
96. 数据映射
97. Variable 数据 Prototypes on 系统 Signals的映射
98. 映射 of Variable 数据 Prototypes with primitive datatypes on 系统 Signals (Sender-Receiver Communication)
99. 映射 of Variable 数据 Prototypes with composite datatypes (Sender-Receiver Communication)
100. 数据 Transformation
101. 映射 via SystemSignalGroups
102. Client Server Operations to 系统 Signals的映射
103. 映射 of Trigger to SystemSignal
104. Signal Path Constraint
105. CommonSignalPath
106. ForbiddenSignalPath
107. PermissibleSignalPath
108. SeparateSignalPath
109. Compatibility Rules for DataMapping between a DataPrototype and a SystemSignal
110. DataPrototype typed by category VALUE
111. DataPrototype typed by category BOOLEAN
112. DataPrototype typed by category STRING
113. DataPrototype typed by an ARRAY
114. Compatibility of SwDataDefProps
115. RTE and 基础软件 resource estimations
116. Communication 管理映射
117. Partial Networking
118. Partial Networking and managed Ethernet switch
119. Partial 网络 Gateway
120. Checking the consistency of partial 网络 clusters (PNC)
121. Check for top level PNC-Coordinator
122. Check for cyclic PNC-Coordinator topology
123. Optional check if all nodes are reachable from PNC-Coordinators
124. Dynamic Partial 网络 Cluster 映射
125. Com 管理映射
126. 软件 Cluster 映射
127. Dds 映射
128. EcuPartition to 核映射
129. Communication 数据 in the RTE 映射的Cyclic 处理
130. Communication
131. Triggerings and Ports
132. Ownership of PduTriggerings
133. Ownership of ISignalTriggerings
134. ISignals
135. Large 数据 Path in COM
136. Big Endian and Little Endian 存储 layout of Pdus and Frames
137. PDUs
138. ContainerIPdu
139. SecuredIPdu
140. Crypto Infrastructure for SecuredIPdu
141. J1939ProtectedIPdu
142. GeneralPurposeConnection
143. IPdu 时序
144. 数据 Filter 配置
145. Cyclic 时序
146. EventControlled 时序
147. 配置 of a trigger for COM_TriggerIPduSend API call
148. I-Pdu Multiplexer
149. I-Pdu Multiplexer in 系统 Extract/ECU Extract
150. Frames
151. Specialized Attributes of the Communication Entities
152. FlexRay specific 描述
153. LIN specific 描述
154. LIN Frames
155. LIN 调度 Table
156. 配置服务
157. CAN specific 描述
158. SAE J1939 协议 specific 描述
159. CAN XL specific 描述
160. Ethernet specific 描述
161. ApplicationEndpoint
162. NetworkEndpoint
163. 服务 Instances
164. SOME/IP 服务 Instances
165. Multicast Subscription
166. SOME/IP specific 描述
167. SOME/IP ProvidedServiceInstance
168. SOME/IP ConsumedServiceInstance
169. ConsumedServiceInstance with multicast only reception
170. SOME/IP 服务 Discovery Server 配置
171. SOME/IP 服务 Discovery Client 配置
172. Group of ConsumedServiceInstances and ProvidedServiceInstances
173. DDS Specific 描述
174. DDS Common Parameters
175. DDS QoS Topic 数据
176. DDS QoS Durability
177. DDS QoS Durability 服务
178. DDS QoS Deadline
179. DDS QoS Latency Budget
180. DDS QoS Ownership
181. DDS QoS Ownership Strength
182. DDS QoS Liveliness
183. DDS QoS Reliability
184. DDS QoS 传输 Priority
185. DDS QoS Lifespan
186. DDS QoS Destination Order
187. DDS QoS History
188. DDS QoS Resource 限制
189. DDS 服务 Instances
190. DDS Provided 服务 Instances
191. DDS Consumed 服务 Instances
192. StaticSocketConnection
193. 服务 Discovery Message 配置
194. NmPdu 数据 exchange over StaticSocketConnection
195. 诊断 over IP
196. 传输 Layer Security
197. 建模 TLS using CryptoServicePrimitives
198. 建模 TLS using IANA Parameters
199. IPsec
200. EthernetFrameType based communication
201. Restriction in usage of ProvidedServiceInstance.majorVersion
202. Summary of supported 配置 options between ApplicationEndpoints
203. Firewall
204. ACL check
205. 传输 Layer
206. 传输 Layer Routing
207. FlexRay ISO 传输 Layer
208. CAN 传输 Layer
209. LIN 传输 Layer
210. Ethernet 传输 Layer
211. SOME/IP segmenter
212. SAE J1939 传输 Layer
213. 配置 of J1939Tp NPDUs
214. Broadcast Announce
215. Connection 模式数据 Transfer
216. Direct Transmission
217. Unicast TP 示例
218. Multicast TP 示例
219. 诊断 Connection
220. IEEE1722 传输 Layer
221. Audio Video 传输
222. Audio Video 传输 CRF
223. Audio Video 传输 AAF
224. Audio Video 传输 using IIDC and IEC61883
225. Audio Video 传输 RVF
226. 控制数据传输
227. 控制数据传输 CAN
228. 控制数据传输 LIN
229. 网络管理
230. FlexRay 网络管理
231. CAN 网络管理
232. UDP 网络管理
233. J1939 网络管理
234. J1939SharedAddressCluster
235. Managed Channels
236. Ethernet VLANs
237. Ethernet tunneling through CAN XL
238. Bus Mirroring
239. CAN Destination Channel
240. FlexRay Destination Channel
241. Ethernet Destination Channel
242. User Defined Destination Channel
243. Fan-out
244. Signal fan-out
245. RTE signal fan-out
246. COM Signal Gateway fan-out
247. Pdu fan-out
248. Pdu Router fan-out
249. Pdu Router simple fan-out
250. Pdu Router SecOC Pdu fan-out
251. Pdu Router Container Pdu fan-out
252. Pdu Router IPdu fan-out and SecOC / non SecOC
253. Flexray 接口 fan-out
254. Socket Adapter fan-out
255. Frame fan-out
256. Fan-in
257. RTE fan-in
258. Pdu fan-in
259. IPdu Container fan-in
260. 日志与追踪
261. 支持 of Complex Drivers
262. MetaData in SenderReceiverInterface
263. Signal 服务 Translation
264. Architectural setup
265. Method 处理
266. 映射描述
267. Filters and Transmission Triggers
268. 映射描述 from several sources
269. 映射描述 and 数据 conversion
270. Implementation of PassThroughSwConnectors
271. 服务 discovery 控制
272. 服务控制 at ECU start
273. 服务控制 due to availability of partial networks
274. related 服务 instance的服务控制 due to availability
275. Translation 行为
276. COM-Stack translation 行为
277. Translation Application 软件组件 translation 行为
278. End-to-End considerations
279. Safety
280. Security
281. 数据 Transformation
282. Outline
283. 配置 of the Communication Layout
284. 数据 Transformation by 软件
285. Use Cases
286. Transmission of large composite 数据类型 over networks with large PDUs (e.g Ethernet)
287. transmission from one sender to 多 receivers with Signal Fan-out的支持
288. transmission from one sender to 多 receivers with PDU Fan-out的支持
289. 转换器 Chaining
290. Signal Group Based interaction of the 转换器 with the Com 模块
291. 转换器配置
292. Generic 转换器
293. SOME/IP 转换器
294. SOME/IP Transformation Properties on the level of DataPrototypes
295. 网络 Representation
296. 示例 - Serialization based on the 网络 representation
297. Necessity of 数据 conversion based on CompuMethods
298. 示例 - Serialization based on the ImplementationDataTypes
299. COM Based 转换器
300. DDS 转换器
301. E2E 转换器
302. E2E 状态 machine settings
303. E2E recommended 配置 settings
304. E2E Profile 1 配置 setting C
305. E2E Profile 4 配置 setting A
306. E2E Profile 4 配置 setting B
307. E2E Profile 5
308. E2E Profile 7 配置 setting A
309. E2E Profile 7 配置 setting B
310. E2E Profile 11 配置 setting C
311. E2E Profile 4m 配置 setting A
312. E2E Profile 7m 配置 setting A
313. UserDefined 转换器
314. 支持 for TLV Encoding
315. Assignment of TLV 数据 Ids
316. Assignment of TLV Wire 类型
317. Gateways
318. Frame 映射
319. IPdu 映射
320. 示例 of IPdu Gateway configurations
321. Usage of IPduMapping.pduMaxLength
322. Routing and processing of 诊断 Pdus
323. Signal 映射
324. Partial Signal Group 映射
325. Global Time 同步
326. 简介
327. The big Picture
328. Cloning of Global Time Information
329. Reverse Sync Method
330. Global Time 同步的Detailed 描述
331. Time 同步 over CAN
332. Time 同步 over Ethernet
333. Time 同步 and Ethernet propagation delay
334. Time 同步 and Ethernet connection
335. Time 同步 and managed Ethernet switch
336. Fine-Grained GlobalTimeDomain Ethernet switch 配置
337. Time 同步 over FlexRay
338. Time 同步 by user defined Timebase Provider
339. Time 同步 Common Properties
340. 服务 Discovery 服务 in Classic Platform的描述
341. Representation of 服务接口 on VFB level
342. Representation of Events
343. Representation of Methods
344. Representation of Fire and Forget Methods
345. Representation of Fields
346. Representation of 服务接口 on 网络 level
347. 软件 Cluster
348. Big Picture
349. 软件 Cluster Resources
350. 软件 Cluster Binary 清单
351. 软件 Cluster Extraction
352. 软件 Cluster Extraction and DataMappings
353. Usage of the 系统模板
354. 系统 Constraint 描述
355. 抽象系统描述
356. the 系统配置描述的系统 Extract
357. OEM/Supplier Collaboration Scenario
358. 数据映射 in the 系统 Extract
359. SW 组件 inclusion and top level 数据映射
360. Port-Interface 映射 in the 系统 Extract
361. ECU Extract of the 系统配置描述
362. Topology
363. Top-level 软件 Composition
364. ECU Flat 视图
365. Internal Communication
366. External Communication
367. Port Groups
368. 服务 Needs
369. Extending the ECU 软件 Composition
370. Communication
371. Frame
372. PDU
373. ISignals and ISignalGroups
374. SystemSignal and SystemSignalGroup
375. Gateways
376. TP 配置
377. NM 配置
378. Naming Issues
379. Package 结构
380. Naming of Measurement and Calibration 数据
381. Naming of Derived Elements
382. Re-use of short names assigned in previous iterations
383. ECU Extract in subsequent Cycles of Iterative Development
384. Traceability of 建模 elements created in ECU Extract
385. 映射 of AUTOSAR attributes to ASAM ASAP2
386. Assigning communication graphs to RTE Implementation Plug-Ins
387. Variant 处理 in ECU Extract
388. 系统 Constants
389. Nested Whole/Part class variants
390. calibration parameters in 系统范围的多 instances
391. Supported special use-cases
392. 支持 of sending / receiving same Can/Flexray Frame on same channel (Pdu Gateway Use-Case)
393. 支持 of sending / receiving same Can/Flexray Frame on same channel (bidirectional routing in COM)
394. 支持 of dynamic CAN IDs
395. N：1 Sender Receiver communication 描述 in a 系统 Extract over one PhysicalChannel
396. 附录
397. Reference Material
398. Abbreviations
399. Imposition Times of Constraints
400. Detailed Representation of InstanceRef Associations in the 系统模板
401. Usage of InstanceRefs in 数据映射 diagrams
402. Usage of InstanceRefs in SW 映射 diagrams
403. Usage of InstanceRefs in Signal Path Constraint diagrams
404. Usage of InstanceRefs in PncMapping
405. Usage of InstanceRefs in ComManagementMapping
406. "SWC in 系统" InstanceRef
407. "ModeDeclarationGroupPrototype in 系统" InstanceRef
408. "Operation in 系统" InstanceRef
409. "VariableDataPrototype" InstanceRef
410. "PortGroup in 系统" InstanceRef
411. "DataPrototype in PortInterface" InstanceRef
412. Affinity Constraints InstanceRef
413. Harmonization between Upstream Templates and ECU 配置
414. Can
415. CanIf
416. CanNm
417. CanSM
418. CanTSyn
419. CanTp
420. CanTrcv
421. Cdd
422. Com
423. ComM
424. Crypto
425. Csm
426. Dcm
427. Dds
428. Dlt
429. DoIP
430. EcuC
431. EcuM
432. Eth
433. EthIf
434. EthSM
435. EthSwt
436. EthTSyn
437. EthTrcv
438. Firewall
439. Fr
440. FrIf
441. FrNm
442. FrSM
443. FrTSyn
444. FrTp
445. FrTrcv
446. IEEE1722Tp
447. IKE
448. ISO15118Chrg
449. IdsM
450. IpduM
451. J1939Dcm
452. J1939Nm
453. J1939Rm
454. J1939Tp
455. Lin
456. LinIf
457. LinTp
458. LinTrcv
459. Mirror
460. Mka
461. Nm
462. Os
463. PduR
464. Rte
465. Sd
466. SecOC
467. SoAd
468. SomeIpTp
469. StbM
470. SwCluC
471. TcpIp
472. UdpNm
473. VdpCmR
474. Xcp
475. Xfrm
476. 术语表
477. History of Constraints and 规范 Items
478. Constraint and 规范 Item History of this document according to AUTOSAR R4.0.1
479. Changed Constraints in R4.0.1
480. Added Constraints in R4.0.1
481. Deleted Constraints in R4.0.1
482. Constraint and 规范 Item History of this document according to AUTOSAR R4.0.2
483. Changed Constraints in R4.0.2
484. Added Constraints in R4.0.2
485. Deleted Constraints in R4.0.2
486. Constraint and 规范 Item History of this document according to AUTOSAR R4.0.3
487. Changed Constraints in R4.0.3
488. Changed 规范 Items in R4.0.3
489. Added Constraints in R4.0.3
490. Added 规范 Items in R4.0.3
491. Deleted Constraints in R4.0.3
492. Deleted 规范 Items in R4.0.3
493. Constraint and 规范 Item History of this document according to AUTOSAR R4.1.1
494. Changed Constraints in R4.1.1
495. Changed 规范 Items in R4.1.1
496. Added Constraints in R4.1.1
497. Added 规范 Items in R4.1.1
498. Deleted Constraints in R4.1.1
499. Deleted 规范 Items in R4.1.1
500. Constraint and 规范 Item History of this document according to AUTOSAR R4.1.2
501. Changed 规范 Items in R4.1.2
502. Added 规范 Items in R4.1.2
503. Added Constraints in R4.1.2
504. Changed Constraints in R4.1.2
505. Deleted Constraints in R4.1.2
506. Constraint and 规范 Item History of this document according to AUTOSAR R4.1.3
507. Changed 规范 Items in R4.1.3
508. Added 规范 Items in R4.1.3
509. Deleted 规范 Items in R4.1.3
510. Added Constraints in R4.1.3
511. Changed Constraints in R4.1.3
512. Deleted Constraints in R4.1.3
513. Constraint and 规范 Item History of this document according to AUTOSAR R4.2.1
514. Added 规范 Items in R4.2.1
515. Changed 规范 Items in R4.2.1
516. Deleted 规范 Items in R4.2.1
517. Added Constraints in R4.2.1
518. Changed Constraints in R4.2.1
519. Deleted Constraints in R4.2.1
520. Constraint and 规范 Item History of this document according to AUTOSAR R4.2.2
521. Added 规范 Items in R4.2.2
522. Changed 规范 Items in R4.2.2
523. Deleted 规范 Items in R4.2.2
524. Added Constraints in R4.2.2
525. Changed Constraints in R4.2.2
526. Deleted Constraints in R4.2.2
527. Constraint and 规范 Item History of this document according to AUTOSAR R4.3.0
528. Added 规范 Items in R4.3.0
529. Changed 规范 Items in R4.3.0
530. Deleted 规范 Items in R4.3.0
531. Added Constraints in R4.3.0
532. Changed Constraints in R4.3.0
533. Deleted Constraints in R4.3.0
534. Constraint and 规范 Item History of this document according to AUTOSAR R4.3.1
535. Added 规范 Items in R4.3.1
536. Changed 规范 Items in R4.3.1
537. Deleted 规范 Items in R4.3.1
538. Added Constraints in R4.3.1
539. Changed Constraints in R4.3.1
540. Deleted Constraints in R4.3.1
541. Constraint and 规范 Item History of this document according to AUTOSAR R4.4.0
542. Added 规范 Items in R4.4.0
543. Changed 规范 Items in R4.4.0
544. Deleted 规范 Items in R4.4.0
545. Added Constraints in R4.4.0
546. Changed Constraints in R4.4.0
547. Deleted Constraints in R4.4.0
548. Constraint and 规范 Item History of this document according to AUTOSAR R19-11
549. Added 规范 Items in R19-11
550. Changed 规范 Items in R19-11
551. Deleted 规范 Items in R19-11
552. Added Constraints in R19-11
553. Changed Constraints in R19-11
554. Deleted Constraints in R19-11
555. Constraint and 规范 Item History of this document according to AUTOSAR R20-11
556. Added 规范 Items in R20-11
557. Changed 规范 Items in R20-11
558. Deleted 规范 Items in R20-11
559. Added Constraints in R20-11
560. Changed Constraints in R20-11
561. Deleted Constraints in R20-11
562. Constraint and 规范 Item History of this document according to AUTOSAR R21-11
563. Added 规范 Items in R21-11
564. Changed 规范 Items in R21-11
565. Deleted 规范 Items in R21-11
566. Added Constraints in R21-11
567. Changed Constraints in R21-11
568. Deleted Constraints in R21-11
569. Constraint and 规范 Item History of this document according to AUTOSAR R22-11
570. Added 规范 Items in R22-11
571. Changed 规范 Items in R22-11
572. Deleted 规范 Items in R22-11
573. Added Constraints in R22-11
574. Changed Constraints in R22-11
575. Deleted Constraints in R22-11
576. Added Advisories in R22-11
577. Changed Advisories in R22-11
578. Deleted Advisories in R22-11
579. Constraint and 规范 Item History of this document according to AUTOSAR R23-11
580. Added 规范 Items in R23-11
581. Changed 规范 Items in R23-11
582. Deleted 规范 Items in R23-11
583. Added Constraints in R23-11
584. Changed Constraints in R23-11
585. Deleted Constraints in R23-11
586. Added Advisories in R23-11
587. Changed Advisories in R23-11
588. Deleted Advisories in R23-11
589. Constraint and 规范 Item History of this document according to AUTOSAR R24-11
590. Added 规范 Items in R24-11
591. Changed 规范 Items in R24-11
592. Deleted 规范 Items in R24-11
593. Added Constraints in R24-11
594. Changed Constraints in R24-11
595. Deleted Constraints in R24-11
596. Added Advisories in R24-11
597. Changed Advisories in R24-11
598. Deleted Advisories in R24-11
599. Constraint and 规范 Item History of this document according to AUTOSAR R25-11
600. Added 规范 Items in R25-11
601. Changed 规范 Items in R25-11
602. Deleted 规范 Items in R25-11
603. Added Constraints in R25-11
604. Changed Constraints in R25-11
605. Deleted Constraints in R25-11
606. Added Advisories in R25-11
607. Changed Advisories in R25-11
608. Deleted Advisories in R25-11
609. Constraint and 规范 Item History of this document according to AUTOSAR R26-11
610. Added 规范 Items in R26-11
611. Changed 规范 Items in R26-11
612. Deleted 规范 Items in R26-11
613. Added Constraints in R26-11
614. Changed Constraints in R26-11
615. Deleted Constraints in R26-11
616. Added Advisories in R26-11
617. Changed Advisories in R26-11
618. Deleted Advisories in R26-11
619. Mentioned Class Tables
620. Splitable Elements in the 范围 of this Document
621. Variation Points in the 范围 of this Document
