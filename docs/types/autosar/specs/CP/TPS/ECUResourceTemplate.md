# Specification of ECU Resource Template (`ECUResourceTemplate`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 060 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TPS_ECUResourceTemplate_060\AUTOSAR_CP_TPS_ECUResourceTemplate.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TPS_ECUResourceTemplate_060\AUTOSAR_CP_TPS_ECUResourceTemplate.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TPS_ECUResourceTemplate_060\zzgen\CP_TPS_ECUResourceTemplate.complete.txt`

## 文档简介

One of the most prominent goals of AUTOSAR is the standardization of descriptions relevant for automotive software applications. In this context, the description of underlying ECU hardware is one of the major topics to resolve.

This document contains a specification of the modeling elements required to describe the hardware to the necessary extent. One aspect of the ECU Resource Template is to provide the system design engineer with the necessary information to assist the system partitioning, e.g. available memory and communication means of dedicated ECUs. Another aspect of the ECU Resource Template is to support the ECU Configuration engineers and tools with information required for the configuration of the micro-controller and ECU abstraction layer residing on a particular ECU.

The focus of the ECU Resource Template is to describe an already engineered piece of hardware, its content and structure. It is not in the focus of the ECU Resource Template to support the design of electronics hardware itself. There are established tools and exchange formats to aid in the design of electronics hardware already available. But such tools may be able to export their design using the AUTOSAR ECU Resource Template format for later usage in AUTOSAR design tools.

Where applicable, please consult the glossary and the abbreviation list contained in this document. The general characteristics of the ECU Resource Description are introduced followed by a detailed description of the hardware components inside the ECU.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

One of the most prominent goals of AUTOSAR is the standardization of descriptions relevant for automotive software applications. In this context, the description of underlying ECU hardware is one of the major topics to resolve.

This document contains a specification of the modeling elements required to describe the hardware to the necessary extent. One aspect of the ECU Resource Template is to provide the system design engineer with the necessary information to assist the system partitioning, e.g. available memory and communication means of dedicated ECUs. Another aspect of the ECU Resource Template is to support the ECU Configuration engineers and tools with information required for the configuration of the micro-controller and ECU abstraction layer residing on a particular ECU.

The focus of the ECU Resource Template is to describe an already engineered piece of hardware, its content and structure. It is not in the focus of the ECU Resource Template to support the design of electronics hardware itself. There are established tools and exchange formats to aid in the design of electronics hardware already available.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. the ECU Resource 模板的范围
*原文标题：Scope of the ECU Resource Template*

The scope of the ECU Resource Template is the description of ECUs by means of the following basic building blocks:

* Hardware Elements
* Hardware PinGroups and Hardware Pins
* Hardware Connections

The HW Elements are the main describing elements of an ECU, For example: Processing units, memory, peripherals and sensors/actuators. HW Elements have a unique name and can be identified within an ECU description. HW Elements do not necessarily have to be described on the level of an ECU. It is possible to describe HW Elements as parts of other HW Elements. By this means a hierarchical description of HW Elements can be created.

HW Elements provide HW PinGroups and HW Pins for being interconnected among each others. HW PinGroups allow a rough description of how certain groups of HW Pins are arranged. The detailed description can be done using the HW Pins.

HW Connections are used to describe connections on several levels:

* connections between HW Elements
* connections between HW PinGroups
* connections between HW Pins

The different levels of abstraction allow to define and gather the required information for the different use-cases of the ECU Resource Template.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 概述 ECU Resource 模板
*原文标题：Overview ECU Resource Template*

Figure  depicts the main elements of an ECU Resource description and their interrelations.

Modeling elements in the ECU Resource Template can be hierarchically organized. A particular ECU (the physical box containing the electronics) can be described as a hierarchical composition of one or more micro-controllers and ECU electronics. Each micro-controller is in turn composed of processing units, memory, peripherals and management units.

The same approach can be used to describe a particular ECU in combination with all sensors and actuators attached to the ECU.

The ECU Electronics is the hardware present on the ECU to guarantee the operation of the Processing Units (clock) as well as the conditioning of signals going out of the ECU or coming in (communication transceiver, amplifier, discrete electronics).

### 4. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 通用 Hardware 描述
*原文标题：General Hardware Description*

The ECU Resource Template utilizes the basic building blocks

* hardware elements
* hierarchies of hardware elements
* hardware pins
* hardware pin groups
* hardware connections

to describe the relevant aspects of the actual hardware. The ECU Resource Template allows however to choose the appropriate level of detail in the description of the hardware, depending on the use case. It also allows to describe arbitrary hardware and its connections.

 Support of AUTOSAR Basic Software configuration
⌈
The primary goal of the ECU Resource Template is to support the configuration of the AUTOSAR Basic Software by providing information on the respective hardware and the how the hardware is connected to each other.
⌋

In figure  the overview of the involved classes is shown.

### 6. Hardware 描述 Entity
*原文标题：Hardware Description Entity*

In order to allow flexibility of the ECU Resource Template with respect to the description of a multitude of hardware types the ECU Resource Template only provides the generic means to describe hardware elements and their connectivity. The description of specific attributes can be provided according to section .

 Definition of Hardware Elements
⌈
The HwDescriptionEntity allows to provide a set of attribute values which are defined by one or more hardware categories.
⌋

Please refer to chapter  for details on the actual applicable hardware categories and corresponding attributes.

The HwDescriptionEntity is able to specify for which hardware categories (see section ) this HwDescriptionEntity is applicable. It is possible to define several references in the role hwCategory.

*  Definition of HwCategory
  ⌈
  It shall be possible to reference different kinds of HwCategory elements in order to describe different aspects of the hardware (e.g. a Can controller with an integrated Spi channel).
  ⌋
*  Extension of HwCategory
  ⌈
  It shall be possible to extend the standardized HwCategory specification with additional attributes.
  ⌋

  For more details see section .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Hardware 类型
*原文标题：Hardware Type*

Definition of HwType
⌈
The HwType is used to gather attribute values for elements which can occur several times in an Ecu and will not change due to their multiple usage.
⌋

For details on the multiple occurrence of hardware elements please refer to section .

A HwType is an ARElement which inherits from HwDescriptionEntity. The features of ARElement allow the hardware type to have a name and stand for its own inside some package. The features of HwDescriptionEntity allow the hardware type to describe hardware categories and attribute values (see section ).

 Attribute values defined in the HwType are applicable for all occurrences of this HwType
⌈
The attribute values defined in the HwType are applicable for all occurrences of this HwType, although it is possible to override the value in the HwElement.
⌋

For more details see section .

 HwType shall not have a reference to another HwType
⌈
A HwType (being a HwDescriptionEntity) shall not have a reference to another HwType in the role hwType. The definition of HwTypes is not hierarchical.
⌋

The HwType does not specify any structural features of the hardware.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Hardware Element

The HwElement describes one piece of hardware
⌈
The HwElement describes how one piece of hardware - as a building block - is contributing to the overall circuit describing the ECU. It can be used to describe any hardware, independent of their granularity and scale. So an ECU can be described as a whole, the connected sensors and actuators, the built-in micro-controller and communication transceiver. But also the processing cores and the memory segments inside the micro-controller can be described.
⌋

 HwElement is self contained
⌈
Each HwElement can be described in a self contained way because the HwElement is an ARElement.
⌋

Each HwElement inherits from HwDescriptionEntity and is therefore capable to describe a set of attributes (see section  for details).

 HwElement can refer to a HwType
⌈
Each HwElement can optionally refer to a HwType element in the role hwType. In the HwType the attribute values, which are common for all occurrences of the hardware type, are described. In case the HwElement provides an attribute value which is also provided in the referenced HwType the attribute value from the HwElement takes precedence.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 多 occurrence of Hardware Elements
*原文标题：Multiple occurrence of Hardware Elements*

Hierarchy of hardware
⌈
The hierarchy of hardware is described via referencing the contained hardware elements with the role nestedElement. The containment hierarchy of hardware elements is not represented as a hierarchical structure in the XML description but as linked list.
⌋

This modeling allows the usage of different ARXML files for the description of the container hardware element and the nested hardware elements. E.g. the CPU is described by a Semiconductor-Vendor, the project specific usage of such a CPU is described by the ECU vendor.

 No support of multiple instantiation
⌈
An essential constraint is that each HwElement can only be target of one nestedElement reference. This means that there is no concept of multiple instantiation of hardware elements. If the same hardware element shall be used several times (using the nestedElement reference) each occurrence has to have its own description. This is also true for nested elements of the referenced nested element.
⌋

Thus the hardware element and all its structural features (hardware pin groups, hardware pins and hardware connections) need to be cloned.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Hardware Pin and Pin Group

The HwPinGroup allows to describe dedicated channels of connectivity for hardware elements. It can be used to describe grouped hardware ports like ADC and DIO. It can structure the port information hierarchically. At the detailed level it can be used to describe individual hardware pins.

Each HwPinGroup is Identifiable. A HwPinGroup can only exist inside a HwElement or another HwPinGroup.

Each HwPinGroup inherits from HwDescriptionEntity and is therefore capable to describe a set of attributes (see section  for details).

The content of the HwPinGroup is aggregated in the role hwPinGroupContent.

| Class | HwPinGroup | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to describe groups of pins which are used to connect hardware elements. This group acts as a bundle of pins. Thereby they allow to describe high level connections. Pin groups can even be nested. | < | < | < |
| Base | ARObject, HwDescriptionEntity, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | HwElement.hwPinGroup, HwPinGroupContent.hwPinGroup | < | < | < |
| Attribute | Type | Mult. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Hardware Connection

Connections can be described on several levels in the ECU Resource Template. This allows the expression of details on the needed level of abstraction.

 Connections between HwElements
⌈
The HwElementConnector allows to describe the connection between two HwElements. It is not meant to describe the actual technical connectivity between the two hardware elements. It is used to describe the general connectivity between the hardware elements.
⌋

| Class | HwElementConnector | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to connect two hardware elements. The details of the connection can be refined by hwPinGroupConnection. | < | < | < |
| Base | ARObject, Describable | < | < | < |
| Aggregated by | HwElement.hwElementConnection | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| hwElement | HwElement | * | ref | This association connects two hardware elements. |
| hwPinConnection | HwPinConnector | * | aggr | This represents one particular connection between two hardware pins. This connection shall be used if pin-to-pin-connection is to be described but no description of the connection between the hierarchical composition of HwPinGroups (using HwPinGroupConnector) is required. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 范围 of Connections
*原文标题：Scope of Connections*

The hardware connections are part of a hardware element and connect the two artifacts via references to the description of the artifacts. In principle such references can refer to any hardware element and its features in the input information. But the scope of connections is restricted based on the containing hardware element of the hardware connection.

 Scope of connections
⌈
Each hardware connection shall only connect features which both are in the hierarchical scope of the hardware element. The hierarchical scope encloses

* all features belonging to the hardware element containing the connection
* all features belonging to hardware elements which are referenced directly and indirectly in the nestedElement relation from the hardware element containing connection.
⌋

Especially it is allowed to specify connections in hardware elements which are in deeper hierarchical level and also connections which cross hierarchical levels.

In the example from figure  the following connections are allowed:

* connections specified in the scope of hardware element "MyEcu"

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Hardware Category 定义
*原文标题：Hardware Category Definition*

The definition of dedicated hardware types allows a flexible usage of the ECU Resource Template. Since the definition of hardware types and the applicable attributes is specified as an AUTOSAR XML file itself it can be updated and extended without the needs to update the AUTOSAR XML-Schema.

In figure  the relationship between the definition and the description of hardware is shown.

The element HwCategory specifies what type of hardware is defined. This can be a for example a memory segment, a processing unit, a communication transceiver etc.

The HwCategory is later referenced from the HwDescriptionEntity in the role hwCategory to describe what type of hardware is described. Possible values for the shortName of the HwCategory element are defined in  and .

The HwCategory may contain several HwAttributeDef elements.

| Class | HwCategory | < | < | < |
|---|---|---|---|---|
| Note | This metaclass represents the ability to declare hardware categories and its particular attributes. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Vendor specific extensions of Hardware Category 定义
*原文标题：Vendor specific extensions of Hardware Category Definition*

In order to allow the description of arbitrary hardware and their relationships the ECU Resource Template allows the extension of the definition of hardware categories and and hardware attributes. When extending the ECU Resource Description for vendor specific usage the following rules shall be respected:

*  Definition of new hardware categories
  ⌈
  New HwCategories for HwElement and HwPinGroup and HwPin can be defined if they are different from the already defined categories. This definition shall be in a package which is not the AUTOSAR package. A HwDescriptionEntity shall then reference the extended HwCategory.
  ⌋

  For more details on the already defined categories see chapter .
*  Extension of existing hardware categories
  ⌈
  An existing HwCategory can be extended with new attribute definitions. The extension is via defining a HwCategory of the same name as the standardized one in a different package than AUTOSAR. A HwDescriptionEntity shall then reference the standardized and the extended HwCategory.
  ⌋

  For more details on the already existing hardware categories see chapter .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Ecu Resource Variant 处理
*原文标题：Ecu Resource Variant Handling*

For details on the AUTOSAR variant handling support please refer to the AUTOSAR Generic Structure Template . The structure is shown in figure .

 Support for variant handling
⌈
In the description of a hardware element the following relationships are subject to variant handling:

* nestedElement
* hwPinGroup
* hwElementConnection
⌋

The existence of a HwPinGroup can be variant via the aggregation role hwPinGroup from HwElement. So different alternatives of HwPinGroup can be specified. The content of the HwPinGroup can as well be variant via the roles hwPinGroup and hwPin from the HwPinGroupContent.

The existence of a HwElementConnector can be variant via the aggregation role hwElementConnection from HwElement. The existence of individual HwPinGroupConnectors and HwPinConnectors in several roles is as well subject to variability.

For the description of attribute values the existence of the HwAttributeValue and the actual v element are subject to variability (see also figure ).

### 16. Documentation 支持
*原文标题：Documentation Support*

AUTOSAR provides support for integrated and well structured documentation. More details about the AUTOSAR Documentation Support concept can be found in the AUTOSAR Generic Structure Template .

 Documentation support
⌈
An optional documentation block can be applied to any Identifiable and Describable element in an Ecu Resource Description. This type of documentation is typically used to capture a short introduction about the role of an element or respectively how it is built.
⌋

### 17. Infrastructural aspects

Modeling of ECU Resource metamodel
⌈
The modeling of the ECU Configuration Value and ECU Configuration Parameter Definition metamodels is done according to the Generic Structure Template .
⌋

 Transformation of the ECU Resource metamodel to schema definition
⌈
The transformation of the ECU Resource metamodel to schema definitions is done according to the XML Schema Production Rules .
⌋

### 18. Hardware 类型 Specific 描述
*原文标题：Hardware Type Specific Description*

Chapter  introduced the general building blocks which are provided to describe hardware elements and their relationships. But in order to use the information from the ECU Resource Description to aid the configuration of an ECU there is need to describe dedicated attributes of specific hardware elements (e.g. memory size).

The following sections deal with the special elements that are necessary to specify a partly or complete engineered ECU with the ECU Resource Template.

### 19. HwElement categories

Standardized HwCategories for HwElement
⌈
| HwCategory | Description |
|---|---|
| Ecu | Describes an Ecu |
| ProcessingUnit | Describes a micro-controller core |
| MicroController | Describes a micro-controller |
| MemorySegment | Describes a memory segment |
| CommunicationController | Describes a communication controller |
| CommunicationTransceiver | Describes a communication transceiver |
| Digital | Describes a digital IO peripheral |
| Analog | Describes an analog IO peripheral |
| Timer | Describes a timer peripheral |
| Watchdog | Describes a watchdog peripheral |
| SensorActuator | Describes sensors and actuators |

⌋

### 20. Ecu

HwCategory of an Ecu
⌈
The HwCategory of an ECU is defined as Ecu.
⌋

Currently no special attributes are defined for the ECU.

There exists an inconsistency between the System Template and the ECU Resource Template concerning the usage of the term "Ecu". In the System Template "Ecu" is used to determine one instance of an AUTOSAR Stack (e.g. like in ECUInstance). In the Ecu Resource Template 'Ecu" is used to describe the physical box (HardwareElement of HwCategory Ecu) containing the electronics which may contain several processing units with several AUTOSAR Stack instances running.

### 21. Processing Unit

The processing unit describes one core of a micro-controller.

 HwCategory of a processing unit
⌈
The HwCategory of a processing unit is defined as ProcessingUnit.
⌋

Currently no special attributes are defined for the processing unit.

### 22. Micro-Controller

The micro-controller describes one piece of hardware as delivered by the manufacturer of the micro-controller hardware. Typically the micro-controller contains one or several processing units, memory segments and peripherals.

 HwCategory of a micro-controller
⌈
The HwCategory of a micro-controller is defined as MicroController.
⌋

Currently no special attributes are defined for the micro-controller.

Example  shows a simple description of a high-level view on a micro-controller.

### 23. 存储
*原文标题：Memory*

HwCategory of a memory segment
⌈
The HwCategory of a memory segment is defined as MemorySegment.
⌋

 Standardized attributes for the HwCategory MemorySegment
⌈
| Attribute | Required | Unit | Description |
|---|---|---|---|
| memorySize | true | INTEGER | Specifies the size of the memory segment in bytes. |
| memoryType | true | ENUMERATION | Specifies the type of memory: |

* RAM
* ROM
* EEPROM
* Flash
⌋

### 24. Communication Controller

HwCategory of a communication controller
⌈
The HwCategory of a communication controller is CommunicationController.
⌋

 Standardized attributes for the HwCategory CommunicationController
⌈
| Attribute | Required | Unit | Description |
|---|---|---|---|
| communicationControllerType | true | ENUMERATION | Specifies the type of communication controller: |

* CAN
* LIN
* FlexRay
* Ethernet
* Spi
⌋

### 25. Communication 收发器
*原文标题：Communication Transceiver*

HwCategory of a communication transceiver
⌈
The HwCategory of a communication transceiver is defined as CommunicationTransceiver.
⌋

 Standardized attributes for the HwCategory CommunicationTransceiver
⌈
| Attribute | Required | Unit | Description |
|---|---|---|---|
| supportsDisabling | false | BOOLEAN | Specifies whether the transceiver can be disabled |
| supportsWakeUp | false | BOOLEAN | Specifies whether the transceiver can indicate a wake-up situation on the bus |

⌋

### 26. Digital IO

HwCategory of a digital IO
⌈
The HwCategory of a digital IO hardware element is defined as Digital.
⌋

Currently no special attributes are defined for the digital IO.

### 27. Analog IO

HwCategory of an analog IO
⌈
The HwCategory of an analog IO hardware element is defined as Analog.
⌋

Currently no special attributes are defined for the analog IO.

### 28. Timer

HwCategory of a timer
⌈
The HwCategory of a timer is defined as Timer.
⌋

Currently no special attributes are defined for the timer.

### 29. Watchdog

HwCategory of a watchdog
⌈
The HwCategory of a watchdog is defined as Watchdog.
⌋

Currently no special attributes are defined for the watchdog.

### 30. SensorActuator

HwCategory of a sensor/actuator
⌈
The HwCategory of a sensor/actuator is defined as SensorActuator.
⌋

Currently no special attributes are defined for the sensor/actuator.

### 31. HwPinGroup categories

Standardized HwCategories for HwPinGroup
⌈
| HwCategory | Description |
|---|---|
| CommunicationPort | Describes a communication connector |

⌋

### 32. CommunicationPort

HwCategory of a Communication Port
⌈
The HwCategory of a Communication Port is defined as CommunicationPort.
⌋

 Standardized attributes for the HwCategory CommunicationPort
⌈
| Attribute | Required | Unit | Description |
|---|---|---|---|
| communicationPortType | true | ENUMERATION | Specifies the type of communication port: |

* CAN
* LIN
* FlexRay
* Ethernet
* Spi
⌋

### 33. HwPin categories

There are no dedicated HwCategories specified for HwPin.

### 34. 附录
*原文标题：Appendix*

### 35. 示例
*原文标题：Examples*

The content of this appendix chapter is informative in nature and shall not be considered as normative content.

This chapter contains a collection of selected examples that reflect concepts described in different chapters of this document.

### 36. Hardware Element

Example  shows a simple description of a high-level view on a micro-controller.

### 37. Hierarchy of Hardware Elements

Example  shows the hierarchical description of a processing unit in a micro-controller.

### 38. HwPinGroups and HwPins

Example  shows the description of pin groups and pins of the micro-controller.

### 39. Hardware Element Connection

Example  shows the description of the internal structure of a micro-controller in order to define which memory segments are accessible from which processing unit (core).

### 40. Combined 示例
*原文标题：Combined Example*

In this example section several mechanisms are utilized to describe an Ecu and some of its electronics attributes. The overview is shown in figure . The individual sections describe the different abstraction layers.

### 41. Micro-controller 描述
*原文标题：Micro-controller description*

The micro-controller consists of the processing unit, a Can controller and a Dio module. The processing unit is defined to have access to both of the peripherals.

The Dio module defines two HwPinGroups in order to support more detailed connection description.

The whole micro-controller is defined in an own ARPackage so it can be used in several projects.

### 42. 收发器描述
*原文标题：Transceiver description*

The transceiver module is defined as a HwElement which provides three HwPinGroups to describe its connectivity.

The transceiver module is defined in an own ARPackage so it can be used in several projects.

### 43. Ecu 描述
*原文标题：Ecu description*

The Ecu contains the micro-controller and the transceiver.

The Ecu defines one HwPinGroup to represent the CanBus communication to the outside of the Ecu.

The Ecu defines the detailed connectivity inside.

### 44. Attribute 定义
*原文标题：Attribute Definition*

Example  shows how a category and associated attribute definitions are described in the ECU Resource Template.

### 45. Attribute Value 示例
*原文标题：Attribute Value Example*

Example  shows the description of attributes which have been defined using the ECU Resource Template (see example ).

### 46. 术语表
*原文标题：Glossary*

The content of this appendix chapter is informative in nature and shall not be considered as normative content.

* This is a Work Product Definition that provides a description and definition for tangible work product types. Artifacts may be composed of other artifacts ().

  At a high level, an artifact is represented as a single conceptual file.
* This is a software tool which supports one or more tasks defined as AUTOSAR tasks in the methodology. Depending on the supported tasks, an AUTOSAR tool can act as an authoring tool, a converter tool, a processor tool or as a combination of those (see separate definitions).
* An AUTOSAR Tool used to create and modify AUTOSAR XML Descriptions. Example: System Description Editor.
* An AUTOSAR Tool used to create AUTOSAR XML files by converting information from other AUTOSAR XML files. Example: ECU Flattener
* This is the definition of parameters which can have values. One could say that the parameter values are Instances of the definitions. But in the meta model hierarchy of AUTOSAR, definitions are also instances of the meta model and therefore considered as a description.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. History of Constraints and 规范 Items
*原文标题：History of Constraints and Specification Items*

The content of this appendix chapter is informative in nature and shall not be considered as normative content.

This chapter provides the change history of traceable items in this document. The lists also include traceable items that have been removed from the document in a later version. These items do not appear as hyperlinks in the document.

### 48. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.0.2
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release R4.0.2*

No changes.

### 49. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.0.3
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release R4.0.3*

### 50. Added Constraints in R4.0.3

| Number | Heading |
|---|---|
| category of HwAttributeDef shall not be extended |  |

### 51. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.1.1
*原文标题：Constraint and Specification Item History of this document according to AUTOSAR Release R4.1.1*

### 52. Added Constraints in R4.1.1

| Number | Heading |
|---|---|
| HwType shall not have a reference to another HwType |  |
| No support of multiple instantiation |  |
| Scope of connections |  |

### 其余 40 章（内容从略，见纯文本全文）

53. Added Traceables in R4.1.1
54. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.1.2
55. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.1.3
56. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.2.1
57. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.2.2
58. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.3.0
59. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.3.1
60. Constraint and 规范 Item History of this document according to AUTOSAR Release R4.4.0
61. Constraint and 规范 Item History of this document according to AUTOSAR Release R19-11
62. Constraint and 规范 Item History of this document according to AUTOSAR Release R20-11
63. Constraint and 规范 Item History of this document according to AUTOSAR Release R21-11
64. Added 规范 Items in R21-11
65. Changed 规范 Items in R21-11
66. Deleted 规范 Items in R21-11
67. Added Constraints in R21-11
68. Changed Constraints in R21-11
69. Deleted Constraints in R21-11
70. Constraint and 规范 Item History of this document according to AUTOSAR Release R22-11
71. Constraint and 规范 Item History of this document according to AUTOSAR Release R23-11
72. Added 规范 Items in R23-11
73. Changed 规范 Items in R23-11
74. Deleted 规范 Items in R23-11
75. Added Constraints in R23-11
76. Changed Constraints in R23-11
77. Deleted Constraints in R23-11
78. Constraint and 规范 Item History of this document according to AUTOSAR Release R24-11
79. Added 规范 Items in R24-11
80. Changed 规范 Items in R24-11
81. Deleted 规范 Items in R24-11
82. Added Constraints in R24-11
83. Changed Constraints in R24-11
84. Deleted Constraints in R24-11
85. Constraint and 规范 Item History of this document according to AUTOSAR Release R25-11
86. Added 规范 Items in R25-11
87. Changed 规范 Items in R25-11
88. Deleted 规范 Items in R25-11
89. Added Constraints in R25-11
90. Changed Constraints in R25-11
91. Deleted Constraints in R25-11
92. Mentioned Class Tables
