# Specification of I/O Hardware Abstraction (`IOHardwareAbstraction`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 047 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_IOHardwareAbstraction_047\AUTOSAR_CP_SWS_IOHardwareAbstraction.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_IOHardwareAbstraction_047\AUTOSAR_CP_SWS_IOHardwareAbstraction.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_IOHardwareAbstraction_047\zzgen\CP_SWS_IOHardwareAbstraction.complete.txt`

## 文档简介

This specification specifies the functionality and the configuration of the AUTOSAR Basic Software I/O Hardware Abstraction. The I/O Hardware Abstraction is part of the ECU Abstraction Layer.

The I/O Hardware Abstraction shall not be considered as a single module, as it can be implemented as more than one module. This specification for the I/O Hardware Abstraction is not intended to standardize this module or group of modules. Instead, it is intended to be a guideline for the implementation of its functional interfaces with other modules.

Aim of the I/O Hardware Abstraction is to provide access to MCAL drivers by mapping I/O Hardware Abstraction ports to ECU signals. The data provided to the software component is completely abstracted from the physical layer values. Therefore, the software component designer does not need detailed knowledge about the MCAL driver's API and the units of the physical layer values anymore.

The I/O Hardware Abstraction is always an ECU specific implementation, because the requirements of the software components to the basic software have to be fitted to the features of a certain MCAL implementation.

The I/O Hardware Abstraction shall provide the service for initializing the whole I/O Hardware Abstraction.

The intention of this document is:

* to determine which part of the Software Component template shall be used when defining an I/O Hardware Abstraction.
* to explain the way to define generic ports, where ECU signals are mapped.

The intention of this document is not:

* to provide C-APIs
* to provide a specific formalization for every ECU signal, like it is done via the standardization of functional data (body domain, powertrain, chassis domain)

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality and the configuration of the AUTOSAR Basic Software I/O Hardware Abstraction. The I/O Hardware Abstraction is part of the ECU Abstraction Layer.

The I/O Hardware Abstraction shall not be considered as a single module, as it can be implemented as more than one module. This specification for the I/O Hardware Abstraction is not intended to standardize this module or group of modules. Instead, it is intended to be a guideline for the implementation of its functional interfaces with other modules.

Aim of the I/O Hardware Abstraction is to provide access to MCAL drivers by mapping I/O Hardware Abstraction ports to ECU signals. The data provided to the software component is completely abstracted from the physical layer values. Therefore, the software component designer does not need detailed knowledge about the MCAL driver's API and the units of the physical layer values anymore.

The I/O Hardware Abstraction is always an ECU specific implementation, because the requirements of the software components to the basic software have to be fitted to the features of a certain MCAL implementation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the IOHWAB module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| AUTOSAR | AUTomotive Open System ARchitecture |
| API | Application Programming Interface |
| BSW | Basic SoftWare |
| BSWMD | Basic SoftWare Module Description |
| C/S | Client/Server |
| DET | Default Error Tracer |
| ECU | Electronic Control Unit |
| HW | HardWare |
| IoHwAb | Input/Output Hardware Abstraction |
| ISR | Interrupt Service Routine |
| MCAL | MicroController Abstraction Layer |
| OS | Operating System |
| RTE | RunTime Environment |
| S/R | Sender/Receiver |
| SW | SoftWare |
| SWC | SoftWare Component (see  for further information) |
| XML | eXtensible Markup Language |

| Expression | Description | Example |
|---|---|---|
| Callback | Within this document, the term 'callback' is used for API services, which are intended for notifications to other BSW modules. |  |
| Callout | Callouts are function stubs, which can be filled at configuration time, with the purpose to add functionality to the module that provides the callout. |  |
| Class | A class represents a set of signals that has similar electrical characteristics. | Analogue class, |

Discrete class, ...

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for IO Hardware Abstraction.

Thus, the specification SWS BSW General shall be considered as additional and required specification for IO Hardware Abstraction.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No limitations

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. 接口 with MCAL drivers
*原文标题：Interface with MCAL drivers*

### 11. 概述
*原文标题：Overview*

The following picture shows the I/O Hardware Abstraction. It is located above MCAL drivers. That means the I/O Hardware Abstraction will call the driver's APIs for managing on chip devices. The configuration of the MCAL drivers depends on the quality of the ECU signals that is required by the SWCs. For instance, it could be necessary to have notifications when a relevant change occurs on the pin level (rising edge, falling edge). The system designer has to configure the MCAL drivers to allow notifications for a given signal. Notifications are generated by MCAL drivers and are handled within the I/O Hardware Abstraction.

Please notice that I/O Hardware Abstraction is not intended to abstract GPT functionalities, but rather to use them to perform its own functionalities. The interfacing with GPT driver is shown because it is part of the MCAL.

The following picture shows all interfaces with MCAL drivers:

### 12. Summary of 接口 with MCAL drivers
*原文标题：Summary of interfaces with MCAL drivers*

Upstream requirements:
⌈
The I/O Hardware Abstraction implementation shall provide Software Components with access to all MCAL drivers.
⌋

| < | MCAL drivers | < | < | < | < | < |  |
|---|---|---|---|---|---|---|---|
| IoHwAb | ADC driver | OCU driver | PWM driver | ICU driver | DIO driver | PORT driver | GPT driver |
| Calls API of | X | X | X | X | X | X | X |
| Receives notifications from | X | X | X | X | - | - | X |

The table above must be read as following:

* The I/O Hardware Abstraction calls API of the ADC driver
* The I/O Hardware Abstraction receives notifications from the ADC driver.
* The I/O Hardware Abstraction does not receive notifications from the DIO driver.

A complete list of all APIs is given in chapter .

### 13. 接口 with the communication drivers
*原文标题：Interface with the communication drivers*

Upstream requirements: ,
⌈
The I/O Hardware Abstraction implementation shall provide Software Components with access to communication drivers (for instance by SPI), if on-board devices are managed.
⌋

The following picture shows the I/O Hardware Abstraction, where some signals come from / are set via the SPI handler / driver.

According to the Layered Software Architecture  (ID03-16), the I/O Hardware Abstraction contains dedicated drivers to manage external devices for instance:

* A driver for external ADC driver, connected via SPI.
* A driver for external I/O realized on an ASIC device, connected via SPI.

### 14. 接口 with 系统服务
*原文标题：Interface with System Services*

Upstream requirements: , ,
⌈
The I/O Hardware Abstraction implementation shall interface with the following system services:

* ECU State Manager (init function)
* DET: Default Error Tracer
* BSW Scheduler
⌋

### 15. 接口 with DCM
*原文标题：Interface with DCM*

The I/O Hardware Abstraction shall provide interfaces to DCM, for functional diagnostics of the software components. DCM will use functional diagnostics for reading and controlling the implemented ECU signals.

The prototypes of the interfaces provided to DCM shall be within a header file `IoHwAb_Dcm`.h.

For details of the interfaces, refer section .

### 16. 文件结构
*原文标题：File structure*

### 17. 代码文件结构
*原文标题：Code file structure*

⌈
The code file structure shall not be defined within this specification.
⌋

### 18. 头文件结构
*原文标题：Header file structure*

As there can be multiple, project-specific instances of the I/O Hardware Abstraction, the file structure cannot be specified.

⌈
File names should be prefixed with 'IoHwAb_<ComponentName>_<reference>' (where the field <reference> can be an implementation-specific category and the field <ComponentName> is the name of the atomic software component, i.e. the instance of the I/O Hardware Abstraction) in order to avoid name clashes.
⌋

### 19. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| For each callback function it shall be specified if it is called from interrupt context or not |  |  |
| Basic SW module shall be able to shutdown |  |  |
| The Basic Software Module specifications shall specify at least in the description which other modules they require |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |
| BSW modules with AUTOSAR interfaces shall be describable with the means of the SW-C Template |  |  |
| The callback function invocation by the BSW module shall follow the signature provided by RTE to invoke servers via Rte_Call API |  |  |
| Naming convention for type, macro and function |  |  |
| A Main function of a un-initialized module shall return immediately |  |  |
| The I/O Hardware Abstraction shall provide an interface to the DCM th |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 功能规范
*原文标题：Functional specification*

### 21. 集成代码
*原文标题：Integration code*

The I/O Hardware Abstraction, as a part of the ECU abstraction, has been defined as integration code.

### 22. Background & Rationale

According to the AUTOSAR glossary , integration code is ECU schematic dependent software located below the AUTOSAR RTE.

### 23. 需求 for 集成代码 implementation
*原文标题：Requirements for integration code implementation*

The following requirements for the I/O Hardware Abstraction are related to hardware protection.

  Upstream requirements:
⌈
Integration code usually means that this software is designed to suite a specific ECU hardware layout. All strategies to protect the hardware shall be included in this software. This document does not intend to standardize or give a recommendation for such hardware protection.
⌋

Hardware protection means, that the I/O Hardware Abstraction is able to cut off an output signal, when a failure (short circuit to ground/power supply, over temperature, overload ...) is detected on the certain output.

  Upstream requirements:
⌈
The I/O Hardware Abstraction shall not contain strategies for failure recovery. Failure recovery actions can only be decided by the responsible SWC.
⌋

The internal behavior of the I/O Hardware Abstraction is project-specific and cannot be standardized.

There is no I/O Hardware Abstraction scalability. The SWC specifies what is needed (quality of signal) and the I/O Hardware Abstraction has to provide it.

### 24. ECU Signals Concept

### 25. Background & Rationale

The I/O Hardware Abstraction cannot provide Standardized AUTOSAR Interfaces to AUTOSAR SW-Cs, as its interfaces to the upper layer strongly depend on the chain of signal acquisition. Instead, the I/O Hardware Abstraction provides AUTOSAR Interfaces.

These AUTOSAR Interfaces represent an abstraction of electrical signals coming from the ECU inputs / addressed to ECU outputs.

Alternatively, these electrical signals may also come from other ECUs or be addressed to other ECUs (e.g. via a CAN network).

Ports are entry points of AUTOSAR components. They are typified by an AUTOSAR interface. These interfaces correspond to "ECU signals".

The concept of ECU signals comes from the necessity to guarantee the interchangeability of hardware platforms.

### 26. 需求 about ECU signals
*原文标题：Requirements about ECU signals*

The I/O Hardware Abstraction handles all inputs and outputs directly connected to the ECU (except those that have a dedicated driver, like CAN, see requirement ).

It includes all inputs and outputs, directly mapped to microcontroller ports, or to an onboard peripheral. All communication between the microcontroller and the peripherals (except sensors and actuators and peripherals managed by complex drivers) are hidden by the I/O Hardware Abstraction, while considering the provided interfaces.

An ECU is connected to the rest of the system through networks and inputs and output pins. Networks are out of scope of this document.

⌈
An ECU signal represents one electrical signal, which means at least one input or output ECU pin.
⌋

The software in this layer shall abstract the ECU pins. Looking from this place (for example using an oscilloscope) inputs and outputs are only electrical signals. Hence, all that is defined in this document is related to this concept of electrical signals. One extension of this concept is diagnosis (electrical failure status). Diagnosis is not visible from ECU connectors but is provided by the I/O Hardware Abstraction.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Attributes

### 28. Background & Rationale

Even though most of the characteristics of each ECU Signal are defined by the SWC, some properties have to be added to each signal to provide the signal quality the SWC expects.

### 29. 需求 about ECU signal attributes
*原文标题：Requirements about ECU signal attributes*

To detail the chain of signal-acquisition, a list of Attributes is defined to identify configurable characteristics of ECU signals.

### 30. 过滤/Debouncing Attribute
*原文标题：Filtering/Debouncing Attribute*

⌈
All ECU Signals shall have a Filtering/Debounce Attribute, so that the captured 'raw' - values can be filtered or debounced before passing them to the upper layer. This attribute is only reasonable for input signals. It influences the implementation of acquisition and access to the signal values.
⌋

### 31. Age Attribute

All ECU signals handled by I/O Hardware Abstraction depend on the ECU hardware design. This means that the time to set ECU Output signals and the time to get ECU Input signals could be different from one to other ECU signal. So to guarantee a template behavior for all kind of ECU signals (Input / Output) a common Age Attribute is defined and it shall be configured for each ECU signal.

⌈
All ECU signals shall have an Age Attribute. The Age Attribute has two specific names according to the direction of ECU signal (Input / Output). Anyway, it always contains a maximum time value. Following descriptions explain the meaning of this Attribute for each kind of ECU signals.

* ECU Input signals: the specific functionality of this attribute is to limit the signals lifetime. The value defines the maximum allowed age for data of this signal. If the lifetime is 0, the signal has to be retrieved from the physical register, immediately. If the lifetime is greater than 0, the signal is valid for the specified time.
* ECU Output signals: the specific functionality of this attribute is to limit the signal output to a maximum delay.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. I/O Hardware 抽象 and 软件组件模板
*原文标题：I/O Hardware Abstraction and Software Component Template*

Note about this chapter: This chapter refers to document .

Changes inside this document may influence the content of this chapter.

### 33. Background & Rationale

This approach allows defining the standardization deepness. As explained previously, the implementation is integration code. Therefore, this chapter only summarizes how to define the I/O Hardware Abstraction as a Software Component (SWC), and gives a short overview of the internal behavior. The internal behavior description mainly covers BSW scheduling mechanisms.

### 34. 软件组件模板的需求 about the usage
*原文标题：Requirements about the usage of Software Component template*

Upstream requirements:
⌈
The I/O Hardware Abstraction shall be based upon the Software Component Template as specified in document .
⌋

In the same manner as in any other Software Component, the I/O Hardware Abstraction might be sub-structured, depending on the complexity of an ECU.

Indeed, the I/O Hardware Abstraction is a classical Component Prototype, that can be atomic or composed and that provides and requires interfaces. Moreover, I/O Hardware Abstraction may only interact by means of their PortPrototypes with other Software Components above the RTE. Hidden dependencies that are not expressed by means of PortPrototypes are not allowed.

However, the I/O Hardware Abstraction interfaces on one side the MCAL drivers via Standardized Interfaces and on the other side the RTE. Hence, I/O Hardware Abstraction shall respect the virtual ports concept.

⌈
The I/O Hardware Abstraction shall be implemented as one or more instances of the EcuAbstractionSwComponentType.
⌋

See  for further information about the EcuAbstractionSwComponentType.

An instantiation of EcuAbstractionSwComponentType provides a set of ports.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Ports concept and I/O Hardware 抽象
*原文标题：Ports concept and I/O Hardware Abstraction*

This is an overview of recommendations for defining Ports of I/O Hardware Abstraction using the Software Component template.

Further chapters in this document go deeper in usage of ports for I/O Hardware Abstraction. Nevertheless, it is advised to read the Software Component Template document  to be aware of all terms and all concepts used.

The attributes described in chapter  shall be defined by annotating the ports of the I/O Hardware Abstraction components with an IoHwAbstractionServerAnnotation (see ).

### 36. 软件组件 and Runnable concept
*原文标题：Software Component and Runnable concept*

Software Components have functions to realize their strategies and internal behaviors. These are partly described using runnable entities. The former is contained in runnables and the latter depends of runnables design. Runnable entities are provided by the Atomic Software Component and are (at least indirectly) a subject for scheduling by the underlying operating system.

An implementation of an atomic Software Component has to provide an entry-point to code for each Runnable in its "InternalBehavior". For more information, please refer to the specification .

The runnable entities are the smallest code-fragments, which can be activated independently. They are provided by the Atomic Software Component and are activated by the RTE. Runnables are for instance set up to respond to data exchange or operation invocation on a server.

The runnable entities have three possible states: Suspended, Enabled and Running. During run-time, each runnable of an atomic Software Component is (by being a member of an OS task) in one of these states.

For a sight of available choices and attributes to define each runnables of the Atomic Software Component, please refer to specification .

### 37. 调度 concept for I/O Hardware 抽象
*原文标题：Scheduling concept for I/O Hardware Abstraction*

### 38. Background & Rationale

The I/O Hardware Abstraction may consist of several BSW modules (e.g. onboard device driver).

Each of these BSW modules can provide BSW runnable entities (also called BswModuleEntity in the RTE Specification (see ).

To make a parallel, a BswModuleEntity is the equivalent of SWC runnable entities, for which the AUTOSAR glossary  gives the following definition: "A Runnable Entity is a part of an Atomic Software-Component (definition) which can be executed and scheduled independently from the other Runnable Entities of this Atomic Software-Component".

This means that the I/O Hardware Abstraction can use Runnable Scheduling and BSW Scheduling simultaneously. The Runnable Scheduling handles the Runnable Entities and is mandatory. Unlike the Runnable Scheduling, the BSW Scheduling is optional and the interfacing with the BSW Scheduler has to be done manually.

In case of SWC runnable entities, these are called in AUTOSAR OS Tasks bodies. Runnables are given in the SWC description. Activation of SWC runnables strongly depends on RTE events.

In the same way than SWCs are most often activated by RTEEvents, the schedulables BswModuleEntities can be activated by BswEvents.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. 需求 about I/O Hardware 抽象调度 concept
*原文标题：Requirements about I/O Hardware Abstraction Scheduling concept*

### 40. Operations for 接口 provided by Ports
*原文标题：Operations for interfaces provided by Ports*

The I/O Hardware Abstraction, described from the interfaces point of view, implements the counterpart of the PortInterfaces defined by the SW-C, i.e. it provides Runnable Entities that implement the Provide Ports (Server port, Sender/Receiver port) required by the SW-C.

⌈
The implementation behind the service of the I/O Hardware Abstraction's Provide Ports is ECU specific and the mapping to the corresponding "PortInterface" shall be documented in the Software Component description.
⌋

### 41. Get operation

⌈
For an ECU Signal associated with a PortInterface configured as an input signal, the I/O Hardware Abstraction shall provide a GET operation, and the operation short name can be freely choose.
⌋

### 42. Set operation

⌈
For an ECU Signal associated with a PortInterface configured as an output signal, the I/O Hardware Abstraction shall provide an SET operation, and the operation shortname can be freely choose.
⌋

### 43. 通知 and/or Callback
*原文标题：Notification and/or Callback*

Upstream requirements:
⌈
The I/O Hardware Abstraction shall define BswInterruptEntities (a sub-class class of BswModuleEntity by opposition to BswSchedulableEntity) to fulfill notification and/or callback mechanisms to exchange data with other modules below the RTE within an interrupt context.
⌋

The I/O Hardware Abstraction may contain one or several callback functions. The available callback functions need to be hooked up to the notification interfaces of the MCAL drivers. Therefore, they have to respect the prototype definition of the MCAL drivers (no passing parameter, no return parameter).

  Upstream requirements: ,
⌈
The implementation has to take into consideration, that the callback functions will be executed in interrupt context.
⌋

Callback functions can additionally provide the capability to trigger Software Components outside of the I/O Hardware Abstraction. These notifications need to be handled through the RTE (sender port).

  Upstream requirements:
⌈
The number of available callback functions and the order of execution will be implementation dependent and must be documented in the I/O Hardware Abstraction BSWMD.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Main 功能 / job processing 功能
*原文标题：Main function / job processing function*

Upstream requirements:
⌈
The I/O Hardware Abstraction may contain one or several job processing functions that are BswSchedulableEntities (a sub-class of BswModuleEntity by opposition to BswInterruptEntity, e.g. one for each device driver). They shall be activated according to their use.

They will be time-triggered by the BSW Scheduler. They could be synchronized to the execution of the other runnable entities.

The number of BswSchedulableEntities and their order of execution will be implementation dependent and must be documented in the I/O Hardware Abstraction description.
⌋

### 45. 初始化, De-initialization and/or Callout
*原文标题：Initialization, De-initialization and/or Callout*

Upstream requirements: ,
⌈
The I/O Hardware Abstraction shall define BswModuleEntries to exchange data with other software below the RTE outside interrupt context, for example in case of BSW initialization/de-initialization.
⌋

These BswModuleEntries are linked to a dedicated BswModuleEntity, which will be called to perform the service / exchange the data.

The I/O Hardware Abstraction may contain one or several initialization and de-initialization functions (e.g. one for each device driver). Similar to the MCAL drivers the initialization functions shall contain a parameter to be able to pass different configurations to the device drivers. This function shall initialize all local and global variables used by the I/O Hardware Abstraction driver to an initial state.

⌈
The initialization/de-initialization functions shall be used/handled by the ECU State Manager, exclusively. For more information, refer to .

The number of available functions and the order of execution are implementation-dependent and must be documented in the I/O Hardware Abstraction description.
⌋

### 46. I/O Hardware 抽象调度示例
*原文标题：I/O Hardware Abstraction scheduling examples*

### 47. 接口 provided by ADC and I/O Hardware 抽象
*原文标题：Interface provided by ADC and I/O Hardware Abstraction*

The following example shows a scheduling example for an ADC conversion.

The I/O Hardware Abstraction shall provide two P-ports.

The Software Component interface in this example is af_pressure.

The ECU state manager is able to trigger a BswModuleEntry for initialization of the ADC driver (Call of `Adc_Init`() with the `Adc_ConfigType` structure).

Use Case: The software component needs the af_pressure value.

# RTE triggers the `OP_GET` operation of the dedicated P-Port.
# R1 is a runnable entity and it allows to call the appropriated ADC driver services

  * `ADC_EnableNotification`
  * `ADC_StartGroupConversion`
# At the end of conversion, the ADC triggers the BswModuleEntry R2, within interrupt context. This is possible since the notification is allowed for this interface. The `ADC_NotificationGroup`() function is specified in the ADC driver.
# The notification is then "sent" to the Software Component via an RTEevent.

The sequence diagram of this example is in chapter .

### 48. Synchronous 调度 with Runnable Entities and BswSchedulableEntities
*原文标题：Synchronous scheduling with Runnable Entities and BswSchedulableEntities*

The following example shows a scheduling example for setting a Lamp linked to a SMART power.

The SMART power is connected to the microcontroller by SPI bus. Hence, the dedicated piece of code uses the SPI Handler/Driver.

The FrontLeftLamp value to be set by the RTE is in an I/O Hardware Abstraction buffer.

An output line to another SMART power is set synchronously to trigger an ADC conversion of the same electrical signal by the ADC driver.

At the end of conversion, the converted result is available and the notification is set to the Analog input manager to store the value inside a buffer, available for diagnosis purpose.

In this example, the periodical treatment is realized by a BswSchedulableEntity.

### 49. 错误分类
*原文标题：Error Classification*

### 50. Development 错误
*原文标题：Development Errors*

Definition of development errors in module IoHwAb
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Up to the implementer to define error he wants to report | Up to the implementer | 0x01 |

⌋

### 51. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 52. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 53. Extended Production 错误
*原文标题：Extended Production Errors*

| Error Name: | Up to the implementer to define error he wants to report |
|---|---|

| IOHWAB_E_<DESCRIPTIVE_NAME> | < |  |
|---|---|---|
| Short Description: | Up to the implementer | < |
| Long Description: | Up to the implementer | < |
| Detection Criteria: | Fail | Up to the implementer |
| ^ | Pass | Up to the implementer |
| Secondary Parameters: | Up to the implementer | < |
| Time Required: | Up to the implementer | < |
| Monitor Frequency | Up to the implementer | < |

### 54. Other 需求
*原文标题：Other requirements*

For details refer to .

### 55. I/O Hardware 抽象 layer 描述
*原文标题：I/O Hardware Abstraction layer description*

### 56. Background & Rationale

The I/O Hardware Abstraction layer has some analogies with a Software Component, especially regarding port definition for communication through the RTE. The main difference is that the I/O Hardware Abstraction is below the RTE (in the ECU Abstraction Layer). The I/O Hardware Abstraction is a kind of interface between Basic Software modules and Application Software.

For the I/O Hardware Abstraction, but also for Services, the current methodology requires filling out two different templates. For example, in order to integrate an NVRAM Manager on an AUTOSAR ECU one would use the BSWMD to document its needs for the BSW Scheduler, OS Resources and so on. In addition, one would use the SWC to describe the ports towards the RTE.

The I/O Hardware Abstraction is a part of BSW. It could be considered as a group of modules. Although IOHWAB is integration code, each module of IOHWAB could fit to the BSWDT. Today, it is known that this point is not sufficiently documented in the current specification.

However, it is agreed that ECU signal will be mapped to a VFB Port (See chapter  and chapter ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 57. 需求
*原文标题：Requirements*

### 58. I/O Hardware 抽象 Ports 定义
*原文标题：I/O Hardware Abstraction Ports definition*

⌈
The I/O Hardware Abstraction specification defines only recommendations for the Port usage. The instantiation of the Ports shall be done during the configuration process and is specific to the ECU electronic design.
⌋

The I/O Hardware Abstraction proposes to create one Port for each ECU signal identified, exception made for ECU Diagnosis signals that are connected to ECU Output signals. A relationship between this ECU signal and the Port shall be created.

Example: The ECU has 10 Analog input pins, 15 PWM output pins, 15 Digital output pins. The I/O Hardware Abstraction defines at least one Port for each ECU signal. In this simple example, Ports are instantiated 40 times.

### 59. 示例
*原文标题：Examples*

### 60. 示例 1：Use case of on-board hardware
*原文标题：EXAMPLE 1: Use case of on-board hardware*

This example is derived from a power supplier ECU.

The ECU has a high number of Digital Inputs (DI). One main group is the "slow DI's" for mechanical switches. The second main group is the "fast DI's" for the diagnosis of the Power IC (this DI indicates that the output current is to high "over current", these DI's are not led out of the ECU). The MCU has not enough PIN's -> the slow DI's are connected to 8 bit multiplexers (3 address lines and 1 data line for each multiplexer) the maximum time between the occurrence of an "over current" and the switch of the Power IC is 1 ms. One OEM requirement is that the reaction of a switch must be not later than 100 ms. One other OEM requirement is that each DI must be debounced by 3 of 5 voting. However the practice shows that the kind of debouncing is not really important because the mechanical switches and the power IC do not generate disturbing signals.

The solution today is that all DI (slow and fast) are read every 0,8 ms (cyclic task) (The scan rate for the slow DI could be lower but the overhead for an additional task is higher than the runtime savings).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 42 章（内容从略，见纯文本全文）

61. 示例 2：Use case of failure monitoring
62. 示例 3：Output power stage
63. 示例 4：Setting sensor and controlling periphery in low power 状态
64. API 规范
65. Imported 类型
66. 类型定义
67. IoHwAb<Init_Id>_ConfigType
68. 功能定义
69. IoHwAb_Init<Init_Id>
70. IoHwAb_GetVersionInfo
71. Callback 通知
72. IoHwAb_AdcNotification<#groupID>
73. IoHwAb_Pwm_Notification<#channel>
74. IoHwAb_IcuNotification<#channel>
75. IoHwAb_GptNotification<#channel>
76. IoHwAb_OcuNotification<#channel>
77. IoHwAb_Pwm_NotifyReadyForPowerState<#模式>
78. IoHwAb_Adc_NotifyReadyForPowerState<#模式>
79. Scheduled functions
80. <Name of scheduled 功能>
81. 功能性诊断接口
82. IoHwAb_Dcm_<EcuSignalName>
83. IoHwAb_Dcm_Read<EcuSignalName>
84. Power 状态 Functions
85. IoHwAb_PreparePowerState<#模式>
86. IoHwAb_ EnterPowerState <#模式>
87. Expected 接口
88. Mandatory 接口
89. Optional 接口
90. Job End 通知
91. 时序图
92. ECU-signal provided by the I/O Hardware 抽象 (示例)
93. Setting ADC and PWM in a low consumption power 状态 as a result of a request for an application low power 模式 (示例)
94. 配置规范
95. 发布信息
96. 附录
97. 不适用需求
98. Change history of AUTOSAR traceable items
99. Traceable item history of this document according to AUTOSAR Release R25-11
100. Added 规范 Items in R25-11
101. Changed 规范 Items in R25-11
102. Deleted 规范 Items in R25-11
