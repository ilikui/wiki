# Explanation of Sensor Interfaces (`SensorInterfaces`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 913 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_EXP_SensorInterfaces_913\AUTOSAR_AP_EXP_SensorInterfaces.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_EXP_SensorInterfaces_913\AUTOSAR_AP_EXP_SensorInterfaces.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_EXP_SensorInterfaces_913\zzgen\AP_EXP_SensorInterfaces.complete.txt`

## 文档简介

A key point to meet the challenges of developing automated driving functions, especially SAE J3016 automation level 3-5, is standardization: There is a huge potential in reducing development and validation costs by standardizing subsections of the complex hardware and software setup for automated driving functions. Sensors for detecting the vehicle environment and its connected environmental models are considered major enablers for automated driving. The current focus is on the standardization of sensor interfaces that serve as an input to environmental models or data fusion algorithms which in turn serve as the input for automated driving functions equal or greater than SAE level 3. Specifically, the focus is on interfaces for on-board sensors that can independently perceive their environment for performing safety critical tasks, e.g. camera, radar, lidar and ultrasonic sensors. This includes the actual measurement data as well as dynamically changing sensor performance values such as the currently estimated detection range. Other information sources like Car2X and maps are considered as potential extensions. With the resulting standardized sensor interfaces, OEMs, suppliers, service providers and tool providers can reduce their costs and time for the development and validation of automated driving functions.

Automated driving functions in general are highly complex. To overcome the complexity, one way is to design the function for a specific use case, scenario or driving condition. For instance, an Autonomous Emergency Braking (AEB) system could be limited to operate only on highways with no oncoming or crossing traffic. Another AEB system could be designed to operate in urban environments as well which would include oncoming and crossing traffic. In contrast to the highway-only AEB, the urban AEB could require an additional classification indicator from the sensor, e.g. to distinguish between vehicles and pedestrians to better detect and track cross traffic. In general, many driving functions require similar or identical information from a sensor, e.g. the sensor's mounting position. However, most driving functions additionally have specific requirements for the data and signals provided by the sensor.

Currently, the interfaces of sensors for automated driving functions are proprietary and differ between suppliers. Thus, the integration of a new sensor requires a lot of effort as both the semantic as well as the logical interface need to be specified

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

This explanatory document may contain assumptions, exemplary items, like exemplary reference models, use-cases, scenarios, and/or references to exemplary technical solutions, devices, processes or software. Any such assumptions or exemplary items are contained in this document for illustration purposes only, and they themselves are not part of the AUTOSAR standard. Neither their presence in such specifications, nor any later documentation of AUTOSAR conformance of products actually implementing such exemplary items, imply that intellectual property rights covering such exemplary items or assumptions are licensed under the same rules as applicable to the AUTOSAR standard.

List of limitations:

* the list of use cases contains the stable and relevant use cases from the development so far, further use cases will be added if needed
* detailed architecture and interface design is still in development
* this document will be extended with the chapter "Interface Design" which explains the rationale and design choices of the sensor interface
* the description of interface usage is scheduled for later releases

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

A key point to meet the challenges of developing automated driving functions, especially SAE J3016 automation level 3-5, is standardization: There is a huge potential in reducing development and validation costs by standardizing subsections of the complex hardware and software setup for automated driving functions. Sensors for detecting the vehicle environment and its connected environmental models are considered major enablers for automated driving. The current focus is on the standardization of sensor interfaces that serve as an input to environmental models or data fusion algorithms which in turn serve as the input for automated driving functions equal or greater than SAE level 3. Specifically, the focus is on interfaces for on-board sensors that can independently perceive their environment for performing safety critical tasks, e.g. camera, radar, lidar and ultrasonic sensors. This includes the actual measurement data as well as dynamically changing sensor performance values such as the currently estimated detection range. Other information sources like Car2X and maps are considered as potential extensions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Intended audience

The document shall explain the motivation behind the standardization of the Sensor interface for autonomous driving for the AUTOSAR Adaptive platform as well as the usage and limitations of the interface. As this interface is an essential connection between different stakeholders in future vehicle architecture and software, this document is intended for the users of the AUTOSAR Adaptive platform and people involved in system development with sensors for autonomous driving.

More specifically different roles and their motivation behind a sensor standardization for the AUTOSAR Adaptive platform is described in the following, structured by main technical aspects.

### 4. 系统 Designer
*原文标题：System Designer*

From a System Designer perspective including rapid prototyping, the expectation towards the sensor standardization is to rely on a comparable and extendable interface for different sensor types.

### 5. 系统 Engineer
*原文标题：System Engineer*

From a System Designer and System Engineer perspective, the reuse of standardized communication protocols enables exchangability and compatibility between sensors from different suppliers and the target sensor fusion platform.

### 6. 系统 Integrator
*原文标题：System Integrator*

From an Integrator and Application Developer perspective, the standardized description of the interface and configuration is required for the generic, testable software implementation as well as the interoperability between implementations. Further AP Developers rely on the usable interface description for efficient fusion and algorithm implementation.

### 7. Safety and Security Engineer

From a Safety and Security Engineer perspective, the interface has to be compatible to the standardized mechanisms and can be validated during development.

### 8. Relation to other standards

The currently ongoing standardization of the international standard ISO 23150  "Road vehicles - Data communication between sensors and data fusion unit for automated driving functions - Logical interface" will be applicable to road vehicles with automated driving functions. It specifies the logical interface between smart in-vehicle sensors that sense the environment (e.g. camera, lidar, radar, ultrasonic, etc.) and the vehicle fusion unit. The interface is described in a modular, semantic representation allowing different types of sensor technologies and fusion concepts.

The "Open Simulation Interface" (OSI) is a generic software interface for the environmental perception of automated driving functions in virtual scenarios (https://github.com/OpenSimulationInterface/open-simulation-interface). OSI ensures modularity, integrability and interchangeability of the individual components. These can be environment simulation models, sensor models, logical models for the detected environment or sensor fusion and models for automated driving functions. Additional informations can be found on https://opensimulationinterface.github.io/open-simulation-interface/.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the explanation of ara::adi.

| Abbreviation / Acronym: | Description: |
|---|---|
| AD | Automated Driving |
| ADI | Automated Driving Interfaces |
| AEB | Autonomous Emergency Braking |
| HiL | Hardware in the Loop |
| ISO | International Organization for Standardization |
| LIDAR | LIght Detection And Ranging |
| MiL | Model in the Loop |
| OEM | Original Equipment Manufacturer |
| OSI | Open Simulation Interface |
| RADAR | RAdio Detection And Ranging |
| SAE | Society of Automotive Engineers |
| USS | UltraSonic Sensor |
| XiL | ... in the Loop |

Specific terms used in the ara::adi specification:

| Terms: | Description: |
|---|---|
| Car2X | Car-to-X-Communication is the generic term for various communication technologies in automotive, including car-to-car (C2C) and car-to-infrastructure (C2I) communication. The information is either transmitted directly between vehicles via IEEE 802.11p, between car and roadside infrastructure or by using existing mobile networks. |
| Fusion Unit | A fusion unit within ADI specification is an application executed on an AP processor which combines different sensor information into one environmental model. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Automated Driving Sensor Use Cases

The following sections describe the main use case for the automated driving sensor standardization from the perspective of different stakeholders within the described process. Chapter  describes the main use case in detail and following use cases in chapters  to  further detail the intention and restriction of scope for different stakeholders. Use case 6 in chapter  extends the focus area to virtual sensor simulation.

### 11. Use Case 1："Sensor Supplier 接口"
*原文标题：Use Case 1: "Sensor Supplier Interface"*

| Goal In Context: | As an OEM, I want to specify the sensor information (based on ISO) which is required by an automated driving function. I want to be able to integrate each sensor using a standardized interface which is adopted for my automated driving use case. |
|---|---|
| Stakeholder: | OEM |
| Brief Description: | Generally the automated driving use case (e.g. automated parking) defines the requirements to the fusion unit and the sensor. To specify the requirements for the sensor hardware, fusion unit, algorithm and communication the OEM wants to rely on standardized sensor information (defined by ISO) and on an AUTOSAR standardized interface. Therefore the scope of the AUTOSAR standardization shall be the data format between a smart sensor (e.g. tracking integrated) and a computing unit (e.g. fusion). |
| Constraints: | * The interpretation of sensor signals is described by ISO |

* The details of a sensor signal should be described by the ISO
* I want to reuse the standardized sensor information from ISO
* The interface might be different for each sensor implementation based on the sensor information description (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Use Case 2："Standardized Sensor API"
*原文标题：Use Case 2: "Standardized Sensor API"*

| Goal In Context: | As a Sensor Developer, I want to rely on a standardized programming API which is specified by a system description. |
|---|---|
| Stakeholder: | Sensor Developer |
| Brief Description: | To implement sensors for automated driving applications or fusion algorithms, the sensor developer needs to base the implementation on a well described and standardized interface. |
| Constraints: | * The detailed sensor information shall be specified by ISO |

* The description of the possible sensor information shall be reliable
* The description shall be provided by AUTOSAR (e.g. ARXML)
| Example: | Implementation of a radar sensor. |
|---|---|

### 13. Use Case 3："Sensor Fusion Algorithm"
*原文标题：Use Case 3: "Sensor Fusion Algorithm"*

| Goal In Context: | As a Sensor Fusion Developer, I want to select fusion algorithms based on the detailed information from each sensor. |
|---|---|
| Stakeholder: | Sensor Fusion Developer |
| Brief Description: | In order to combine information from different sensor signals during algorithm development the detailed description and interface of provided data is needed. |
| Constraints: | * I want to use a standardized interface to access this information. |

* I want to rely on a description of the possible sensor information and API.
| Example: | Implementation of fusion algorithm using signals from different sensors. |
|---|---|

### 14. Use Case 4："Sensor Fusion 集成"
*原文标题：Use Case 4: "Sensor Fusion Integration"*

| Goal In Context: | As a Sensor Fusion Integrator, I want to integrate a data fusion algorithm into an Adaptive Application. |
|---|---|
| Stakeholder: | Sensor Fusion Integrator |
| Brief Description: | Sensor fusion algorithms shall be integrated on a high performance computing platform within an Adaptive Application as the central unit of automated driving functions. |
| Constraints: | * I need to know the detailed information description to transform the data for each sensor implementation. |
| Example: | Integration of automated driving fusion algorithm onto Adaptive AUTOSAR ECU. |

### 15. Use Case 5："Sensor Implementation Testing"
*原文标题：Use Case 5: "Sensor Implementation Testing"*

| Goal In Context: | As a Sensor Implementation Tester, I expect a detailed specification of sensor data and interfaces to test on different integration levels. |
|---|---|
| Constraints: | Sensor Implementation Tester |
| Brief Description: | At each development stage of the sensor system, the implementation needs to be testable and therefore requires interfaces and descriptions accordingly. |
| Restrictions: | * A standardized interface on sensor signal level is needed for testing of automated driving functions. |

* Test cases and implementation provided by AUTOSAR is needed to ensure interoperability and testability.
| Example: | Testing improvements of automated driving function based on fusion algorithms which combine sensor signals. |
|---|---|

### 16. Use Case 6："Sensor Simulation"
*原文标题：Use Case 6: "Sensor Simulation"*

| Goal In Context: | As a Sensor Simulation Engineer, I want to be able to do simple sensor simulation of the algorithms using the specification of OSI and ISO 23150 . |
|---|---|
| Constraints: | Sensor Simulation Engineer |
| Brief Description: | By simulating the sensor fusion algorithms before actual target integration it is possible to ensure smooth integration during the design, development, test and safeguarding steps. This ensures compatibility of algorithm integration into an AUTOSAR Adaptive ECU. |
| Constraints: | * I want to use the same interfaces for the whole XiL process, e.g. for virtual algorithm development (MiL), for testing (HiL), for Autosar. |
| Restrictions: | * Reuse of simulation and signal specification by OSI and ISO 23150 . |
| Example: | Simulation of an automated parking function by using virtual sensor data before integration. |

### 17. Sensor 接口 Standardization的范围
*原文标题：Scope of Sensor Interface Standardization*

The standardization of sensor interfaces aims at creating a well accepted specification, that builds on and is compliant to the sensor interface specification released by the International Organization for Standardization (ISO). While the ISO specification mainly focuses on the semantic definition of interfaces for different sensors, the ADI specification of the AUTOSAR Adaptive platform covers all additional aspects to make it fully compliant to the Adaptive platform. This includes all syntactic elements for the implementation as well as additional functionalities like sensor configuration.

The following figure provides a high level view of the sensor interface standardization scope:

The following aspects of sensor interfaces are intentionally excluded from the specification, to not impose constraints:

* Mechanical and electrical interface
* Raw data level interface

For reading and writing Raw Data Streams an API for Adaptive applications is defined in SWS Communication Management.

The main boundary condition of the specification is that sensors are connected over a service interface to the AUTOSAR Adaptive computing unit.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Sensor 接口 API 设计
*原文标题：Sensor Interface API Design*

This chapter outlines the rationale about the current Interface API design proposal for Smart Sensors.

### 19. Sensor 接口 realization as a 服务
*原文标题：Sensor Interface realization as a Service*

The decision has been taken to realize the Sensor Interface as a Service. The principal reason for this is to universally offer Sensor services within a vehicle deployed on different AUTOSAR platforms (Classic and Adaptive). This supports the major future sensor architectures as presented in the figure below.

NB: this figure does not present a valid scenario in which a Classic platform may run ADAS/AD applications.

### 20. ISO 映射 to Sensor 服务
*原文标题：ISO mapping to Sensor Services*

ISO has defined the syntax and content of Smart Sensors. These are object level lists for tracking, roadmark and landmark independent from the sensor technology. In addition, there is a sensor technology dependent feature list for detection. The Sensor Service design directly maps this structure. Therefore each Smart Sensor offers a tracking, roadmark and landmark service plus a detection service dependent on the sensor technology. The figure below presents the ISO lists mapping to Sensor services.

### 21. Sensor 服务模板
*原文标题：Sensor Service Template*

The individual Service template design of Smart Sensors has faced the challenge that the ISO lists contain a lot of optional elements. This means a service template has mandatory and optional elements. The key assumption here is that the optional elements are known and fixed at design time by Sensor providers and users. There is a service capability vector indicating which optional element is provided by the Sensor. In addition, the same type of sensor may have different performance, i.e. also possible to use different data type resolutions with the same capability setting. This means a service template has different profiles e.g. Low and High profile. The figure below presents the conceptual view of this service template with capability vector and service profiles.

The service compatibility between sensor service provider and users are checked either by the integrator in the deployment phase or by the user during the service discovery phase. The sequence diagram below outlines the vector capability checking during the service discovery phase. After the service provider has offered its service, the user will register to it.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 接口 stability
*原文标题：Interface stability*

One of the driving factors for autonomous driving is the availability of suitable sensors for an affordable price. Out of this reason the research and development in this area is huge. New sensors, new accuracy possibilities or just higher sampling rates make it hard to define an interface that lasts a very long time.

### 23. 接口配置
*原文标题：Interface configuration*

The configuration of the sensor interface connectivity can happen at three different times:

* Design time An architect or developer specifies the whole system and configures all connections. Then the interface bindings are generated and the whole software is compiled and flashed to the complete environment. This might also require software updates of sensors.
* Connection time When the system is specified and the connections are configured, it is possible to specify more than one interface version for a connection. In other words the configuration is not complete at 'design time'. This implies that a service might have to implement several versions of an interface. If the system is powering up, the client initiates a handshake and determines the most suitable interface version for the connection. When this process is finished, the system initiates a final check to validate the complete configuration. Then, the same safety level can be reached as with the design time approach.
* Runtime Clients can connect to any available interface during runtime of the system. This creates a huge amount of flexibility but also the deterministic behaviour of the system decreases.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. References
