# Explanation of Application Interfaces of the HMI, Multimedia and Telematics Domain (`AIHMIMultimediaAndTelematics`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 272 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_AIHMIMultimediaAndTelematics_272\AUTOSAR_CP_EXP_AIHMIMultimediaAndTelematics.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_AIHMIMultimediaAndTelematics_272\AUTOSAR_CP_EXP_AIHMIMultimediaAndTelematics.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_AIHMIMultimediaAndTelematics_272\zzgen\CP_EXP_AIHMIMultimediaAndTelematics.complete.txt`

## 文档简介

The MM/T/HMI domain is complex and fairly large, with many interactions between SW components of different types fulfilling various purposes. The MM/T/HMI domain includes SW components of different application types, such as Multimedia, Telematics or HMI applications. Moreover, some SW components can be shared by two or more application types. For example, the video display and its associate SW components are shared by Multimedia and HMI applications. The HMI domain by itself is also complex and, is designed and handled differently by car OEM's.

Approaches and requirements for the HMI are heterogeneous. Some systems are very simple, while others are very complex. Some system designs desire to maintain full control of the HMI logic. Other system designs require a generic approach where the bulk of the HMI core software is easily reusable across systems (i.e.: different car models). The later approach requires powerful HMI core software that is unaware of the HMI design flow and which is instructed by other components to execute the HMI design flow. Of course, both approaches are valid and should be covered by the suggested architecture. Each approach calls for different type of HMI application interfaces. The domain complexity as well as the different views and requirements on the domain architecture calls for a well defined layered and flexible architecture approach. The aim of the architecture is to provide access to most demanded functionalities and allow different architecture designs for the HMI without imposing a particular design.

The architecture aims to:

* Separate "functional core" world from HMI world
* Separate HMI logic from HMI presentation
* Centralize the management of HMI resources (e.g.: audio and display)
* Abstract the physical devices (e.g. Keyboard)

## 章节详细内容

### 1. 目的 of this Document
*原文标题：Purpose of this Document*

The purpose of this document is to provide explanations on the ports and interfaces standardized for the Multimedia (MM), Telematics (T) and Human-Machine-Interface (HMI) sub-domains.

Up to this version only some simple UI(User Interface)-Device (e.g. buttons, knobs etc.) interfaces for the HMI sub-domain have been standardized.

Chapter  gives a brief introduction to the structure and characteristics of the MM/T/HMI domain. Besides that high-level requirements towards the MM/T/HMI are described in the same chapter. Chapter  gives an overview of the domain architecture for the MM/T/HMI domain. In chapter  the standardized MM/T/HMI ports and interfaces are explained.

### 2. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| HMI | Human Machine Interface |
| LED | Light Emitting Diode |
| MM/T/HMI | Multimedia / Telematics / Human Machine Interface |
| PDC | Park Distance Control |
| SWC | Software Component |
| UI | User Interface |

### 3. 简介
*原文标题：Introduction*

The MM/T/HMI domain is complex and fairly large, with many interactions between SW components of different types fulfilling various purposes. The MM/T/HMI domain includes SW components of different application types, such as Multimedia, Telematics or HMI applications. Moreover, some SW components can be shared by two or more application types. For example, the video display and its associate SW components are shared by Multimedia and HMI applications. The HMI domain by itself is also complex and, is designed and handled differently by car OEM's.

Approaches and requirements for the HMI are heterogeneous. Some systems are very simple, while others are very complex. Some system designs desire to maintain full control of the HMI logic. Other system designs require a generic approach where the bulk of the HMI core software is easily reusable across systems (i.e.: different car models). The later approach requires powerful HMI core software that is unaware of the HMI design flow and which is instructed by other components to execute the HMI design flow. Of course, both approaches are valid and should be covered by the suggested architecture.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 基础架构
*原文标题：Basic Architecture*

This section describes the architecture of a simple system and the terminology used to differentiate different types of application components (SWC).

The basic principle for the architecture is separation of HMI parts from non-HMI parts and of OEM-specific parts from non-OEM-specific parts.

A typical architecture includes the following types of SWCs as depicted in the overview shown next.

The three types of SWCs have the following responsibilities:

# Application Service SWC

  Implementation of the main functionality, e.g. PDC (Park Distance Control), CD/Media Player or mirror adjustment. This functionality is independent of the HMI (Look & Feel)
# UI-Device SWC

  Representation of all User Interface (UI) devices (input and output devices). The UI-Device definition should be unaware of the functionality it is connected to. A button SWC switching the PDC functionality on/off should, for example, only deliver pressed/not pressed information, not PDC on/off information (for the button to be reusable).Examples of input devices are buttons, joysticks, microphones, touch screens.Examples of output devices are screens, LEDs, buzzers, vibration devices.
# Application Controller

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 数据流
*原文标题：Data Flow*

The following overview shows the data flow for Application Service / Application Controller / UI-Device system. Note that there should never be a data flow directly between the Application Service and the UI-Device, since a basic principle is that the UI-Device should be generic and not know anything about the Application Service.

### 6. Application 服务 SWC
*原文标题：Application Service SWC*

Application services are the SWCs implementing the functionality of an HMI related application. There are a lot of examples for HMI related applications:

* Park distance control application
* AM/FM tuner application
* Navigation application
* Climate control application

Application services do not have to be specific to the MM/T/HMI domain, but can also be derived from any other domain interacting with the user, e.g. driving dynamics functionality. The ports and interfaces of some of these applications are standardized within AUTOSAR, others maybe standardized in different Standardization Groups, e.g. the MOST cooperation.

The HMI basic architecture defined in this document has to be able to cope with this requirement. Therefore the application controller SWC type is introduced.

### 7. Application Controller SWC

The Application Controller can be seen as the HMI specific wrapper of the Application Services. The HMI specific parts of the application realized by the Application Controller include the following aspects:

* Decide which data provided by the Application Service has to be presented to the user in which way (audio, video, etc.)
* Interpret the user input and control the functionality of the Application Service
* Decide at which point in time the Application Service wants to be active ("request for the focus")

Each OEM will define its specific HMI behavior (especially for each vehicle variant). Therefore the Application Controller will be different for each HMI system.

### 8. UI Devices SWCs

UI Device SWCs provide input from and output to the user. The components are the access points to the input and output hardware devices. Such devices are for instance buttons, joysticks, microphones, screens, LEDs, buzzers or others.

Please note there are some domain specific UI devices which are not handled by this WP like the accelerator pedal. These domain specific UI devices are strongly coupled to the specific application service and are hardly reusable.

Input UI Device SWCs retrieve the input signals via the I/O Abstraction Layer or Complex Driver from the input hardware. They then convert the received input signals and provide them via standardized application interfaces to other (potentially remote) SWCs.

Output UI Device SWCs are used to provide output to the user via output hardware devices. The UI Device SWC converts the output data received from other SWCs and passes it via the I/O Abstraction Layer to the output hardware device.

### 9. 示例：AUTOSAR PDC application
*原文标题：Example: AUTOSAR PDC application*

This section explains the usage of UI device interfaces based on a Park Distance Control (PDC) application example. This is only an example and is not related in anyway to the actually standardized AUTOSAR PDC ports and interfaces which are explained in the "Explanation of Application Interfaces of the Body and Comfort Domain" document .

Based on the MM/T/HMI architecture introduced in the previous section the example PDC functionality is realized using the following SWCs:

# PDC application service SWC
# PDC application controller SWC
# PDC Button SWC
# PDC LED SWC

The PDC application service provides the basic functionality of the PDC (handle sensors, compute distance to obstacles, etc.). The main purpose of the PDC Controller is to realize the communication between the application specific PDC application service SWC and the PDC application service agnostic UI devices.

The PDC application controller uses two interfaces to communicate with the PDC application service.

* PDC Service Interface
* PDC Status Interface

These interfaces are provided by the PDC domain experts and must be independent from the user interface provided to the user.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 软件 Compositions and Components的描述
*原文标题：Description of Software Compositions and Components*

This chapter introduces the parts of the basic architecture that are standardized within AUTOSAR.

Figure  depicts which parts of the HMI basic architecture are defined by AUTOSAR. The interfaces and ports of some of the application services are standardized within AUTOSAR. The Application Controllers are OEM specific and are therefore not standardized within AUTOSAR. Some of the UI Device interfaces will be standardized within AUTOSAR.

Figure  shows an example of a real-world system using the standardized AUTOSAR Application Service Interfaces and Ports and the standardized UI Device Interfaces.

The presentation of the application behavior to the user (HMI behavior) is always vendor and even vehicle variant specific (hard buttons vs. touch-screen). Standardizing a mapping from Application Services to UI Devices is not in the scope of AUTOSAR. Therefore, no Application Controller ports are standardized as they define a system's UI Device mapping.

Two "virtual helper compositions" which act as placeholders for the Application Controllers and UI Device SWCs of real-world systems are used in the AUTOSAR Application Interface model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Button Panel 组件
*原文标题：Button Panel Component*

The ButtonPanel is a "virtual helper SWC" acting as a placeholder for all the system specific UI Device SWCs which a real-world system would include (see Figure ).

The ButtonPanel aggregates a set of standardized Ports and Interfaces for simple UI Devices like hard buttons, switches, LEDs etc.

The UI-Device Interfaces are standardized with the following principles in mind:

* A UI-Device interface should never be specific to certain functionality.
* A UI-Device interface should be standardized on the most fundamental level possible. If more advanced functionality is required (e.g. a hold long signal after N ms), then that functionality must be layered on top of the UI-Device.

Please Note: The Button Panel Component is not intended to be taken as is for a real system. It is only a virtual example SWC used to group the standardized input and output interfaces.

### 12. Simple button 接口
*原文标题：Simple button interface*

| Simple button interface | < |
|---|---|
| Description | Used to send a simple user request. This request is provided by a button that supports the two different values "pressed" and "not pressed". (e.g. turn Park Distance Control functionality on/off). |
| Comments | * Long press handling is not a part of simple button. |

* Output value reflects physical position of button.

### 13. Toggle 状态接口
*原文标题：Toggle state interface*

| Toggle state interface | < |
|---|---|
| Description | Accept simple value information (activated / deactivated). A typical realization is a LED that shows if the according functionality is active or inactive (e.g. Park distance control functionality state is turned on/off). |
| Comments | * Other states (e.g. blinking state) are not supported. |

### 14. Multi 状态 button 接口
*原文标题：Multi state button interface*

| Multi state button interface | < |
|---|---|
| Description | Used to send a user request with multiple value information to the according SWC when the button/switch/knob etc. has more than two physical positions. |

The range for the state information may differ from small to large values. State values are always discrete values.
| Comments | * The multi state button can also be used for slider / gauge UI devices, especially if these UI devices have a fixed physical state (state is not being handled in software) |
|---|---|

* The current state value should represent a physical position of the button / slider / gauge etc.
* "0" (zero) state value should represent state "off".

### 15. Multi 状态 output 接口
*原文标题：Multi state output interface*

| Multi state output interface | < |
|---|---|
| Description | Accept state value information for UI hardware devices with multiple possible states. As for the multi state buttons, state value information with different ranges (see Multi State Button description) is used. (e.g. seat heating adjustment with value range 0-3 as state information. |
| Comments | * "0" (zero) state value should represent state "off". |

### 16. Boundless rotary knob 接口
*原文标题：Boundless rotary knob interface*

| Boundless rotary knob interface | < |
|---|---|
| Description | Used to send state output for input devices which does not have distinct user-recognizable physical positions. (e.g. knob/wheel without start/stop position). |

The movement (e.g. 1 step clockwise) influences the function (e.g. increase volume), not the physical position of the device.
| Comments | * The value transmitted is the number of steps/moves since the last transmitted value. |
|---|---|

* Note that the selected value depth (e.g. 5 bit for +/- 15 steps) is not correlated to the number of physical positions. It rather limits how many steps the user can apply when turning the rotary knob.
* The selected value depth is correlated to the update interval. A large update interval enables the user to turn the knob further and thereby making more steps.

### 17. InterDomainController Composition

The InterDomainController is a "virtual helper composition" (see chapter ). It is not intended for usage within real-world AUTOSAR systems. It is merely a placeholder taking the role of the various proprietary and highly system specific Application Controllers a real-world system would include (see Figure ).

The InterDomainController composition is responsible for handling all communication between the standardized AUTOSAR application service ports and the Ports of the ButtonPanel (see ).

For all the user input required by the standardized AUTOSAR application services it provides a Port which provides the required user input. For the feedback to the user which is being provided by the standardized AUTOSAR application service Ports it provides corresponding RequiredPorts.

A real-world application controller would map the application services' user in- and output to UI-Devices. As mentioned in chapter  standardizing such a mapping is not in the scope of AUTOSAR. Therefore, the InterDomainController does not have a corresponding UI-Device attached to it for each and every required/provided user input/output.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 术语表
*原文标题：Glossary*

Several widely used terminologies need to have a unique and shared definition in the scope of this document.

* A software (or program) that is specified to the solution of a problem of an end user requiring information processing for its solution.

  An Application has a functional part (Application Service) and an HMI / Behaviour part (Application Controller).
* Set of vehicle functions put together with reference to a certain semantic homogeneity. In AUTOSAR, there are 5 functional domains: Body and comfort, power train, chassis, P&P safety, HMI/Telematics/Multimedia. A domain may be divided into sub domains.
* The fundamental organization of a system embodied in its components, their static and dynamic relationships to each other, and to the environment, and the principles guiding its design and evolution.
* The allowed and desired sequence of user interactions.
* The allowed and desired sequence of user interactions between various applications in the system.
* The allowed and desired sequence of user interactions within a given application.
* The type of output channel to the user, e.g. audio or video output.

### 19. References
