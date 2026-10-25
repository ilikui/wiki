# Specification of Sensor Interfaces (`SensorInterfaces`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 912 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_SensorInterfaces_912\AUTOSAR_AP_SWS_SensorInterfaces.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_SensorInterfaces_912\AUTOSAR_AP_SWS_SensorInterfaces.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_SensorInterfaces_912\zzgen\AP_SWS_SensorInterfaces.complete.txt`

## 文档简介

This specification describes the functional description and interfaces of the function cluster Sensor Interfaces which belongs to AUTOSAR Adaptive Platform Services.The Sensor Interfaces has the responsibility of connecting sensors to AUTOSAR Adaptive computing unit via a service interface.

The Sensor Interfaces are based on the logical interface defined in . The sensor types covered by the specification are the following:

* Camera Sensors
* Lidar Sensors
* Radar Sensors
* Ultrasonic Sensors

There are three levels for the sensor data reporting:

* Detection level
* Feature level
* Object level

Besides data reporting interfaces, the sensor supporing interfaces, i.e.sensor health and performance, are also defined.

The sensors as the AUTOSAR service provider and the AUTOSAR Adaptive applications are located in different ECUs. To allow the flexiblity usage of the Sensor Interfaces, it will expose its functionality via ara::com service interfaces, not direct APIs.

Further functional details are described in .

## 模块依赖

The Automated Driving Interfaces serve as common interfaces for the AUTOSAR Adaptive applications. The sensor information is provided by a non-platform service.The sensor interfaces are exposed to client applications via the ara::com middleware. Communication Management, uses Identity and Access Management to validate the authorization of requests made to the specific service interfaces, i.e. the Communication Management shall check if the invoker is allowed to access the requested service interface of a specific sensor. The following Figure shows a radar and camera sensor instance which provide sensor information to a Data Fusion instance consuming sensor data.

For each sensor type like radar, lidar, USS or camera, the ISO standard will contain lots of optional sensor data or signals in addition to the required signals, e.g. the classification of an object might be optional. During development of a driving function or data fusion system, a specific set of optional signals is selected by the function or data fusion developer according to the requirements of the driving function. To reduce development costs, especially in terms of functional safety, the set of optionals and thus the resulting logical sensor interface are required to be fixed during design-time, i.e. the specified sensor signals must not suddenly disappear from the interface of the sensor during runtime of the system so that a data fusion system can rely on the presence of the specified signals. Vice versa, a sensor interface must not add additional signals during runtime, e.g. not to risk an unintentional behavior change due to the increased bandwidth requirements.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This specification describes the functional description and interfaces of the function cluster Sensor Interfaces which belongs to AUTOSAR Adaptive Platform Services.The Sensor Interfaces has the responsibility of connecting sensors to AUTOSAR Adaptive computing unit via a service interface.

The Sensor Interfaces are based on the logical interface defined in . The sensor types covered by the specification are the following:

* Camera Sensors
* Lidar Sensors
* Radar Sensors
* Ultrasonic Sensors

There are three levels for the sensor data reporting:

* Detection level
* Feature level
* Object level

Besides data reporting interfaces, the sensor supporing interfaces, i.e.sensor health and performance, are also defined.

The sensors as the AUTOSAR service provider and the AUTOSAR Adaptive applications are located in different ECUs. To allow the flexiblity usage of the Sensor Interfaces, it will expose its functionality via ara::com service interfaces, not direct APIs.

Further functional details are described in .

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Sensor Interfaces that are not included in AUTOSAR Glossary .

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

| Terms: | Description: |
|---|---|
| V2X | Vehicle-to-X-Communication is the generic term for various communication technologies in automotive, including vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication. The information is either transmitted directly between vehicles, between vehicle and roadside infrastructure or by using existing mobile networks. |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

Dedicated interfaces for particular sensors like radar, lidar, USS and camera are provided.

### 7. 限制
*原文标题：Limitations*

### 8. ISO Optionals

All the ISO optionals are supported in the service defintiion, but the presence of an optional signal is decided during the design time. The optional signal presence is indicated by a capability vector. There is no change of optional presence during the run time.

### 9. Sensor 控制接口
*原文标题：Sensor Control Interfaces*

Sensor control interfaces are not supported, e.g. actions like reset, initialization, and calibration.

### 10. Sensor Capabilities

The configuration of sensor capabilities is not supported, e.g. sensor opening angle and detection range.

### 11. 适用的车型领域
*原文标题：Applicability to car domains*

AUTOSAR Sensor Interfaces are used as service interfaces between dedicated sensors for enviroment precesion and the AUTOSAR Adaptive applications.

### 12. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The Automated Driving Interfaces serve as common interfaces for the AUTOSAR Adaptive applications. The sensor information is provided by a non-platform service.The sensor interfaces are exposed to client applications via the ara::com middleware. Communication Management, uses Identity and Access Management to validate the authorization of requests made to the specific service interfaces, i.e. the Communication Management shall check if the invoker is allowed to access the requested service interface of a specific sensor. The following Figure shows a radar and camera sensor instance which provide sensor information to a Data Fusion instance consuming sensor data.

For each sensor type like radar, lidar, USS or camera, the ISO standard will contain lots of optional sensor data or signals in addition to the required signals, e.g. the classification of an object might be optional. During development of a driving function or data fusion system, a specific set of optional signals is selected by the function or data fusion developer according to the requirements of the driving function.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The ADI shall support the camera sensor technology for on-board sensors |  |  |
| The ADI shall support the lidar sensor technology for on-board sensors |  |  |
| The ADI shall support the radar sensor technology for on-board sensors |  |  |
| The ADI shall support the ultrasonic sensor technology for on-board sensors |  |  |
| The ADI shall be open for future extensions towards new sensor technologies |  |  |
| The ADI shall provide interfaces which enable exchangeability of service compatible AUTOSAR Adaptive applications without changing the rest of the system. |  |  |
| The ADI shall enable use cases with different resource limitations. |  |  |
| The ADI shall support the ISO-23150 interfaces and ISO-23150 interface signals |  |  |
| The ADI shall interpret the ISO-23150 compliant to AUTOSAR |  |  |
| The ADI shall be aligned with the semantics of the corresponding elements in the ISO-23150 . |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional Specification*

### 15. Outline

### 16. Goals and 范围
*原文标题：Goals and scope*

The specification is to provide well-defined sensor interfaces which is compliant to the sensor interface specification . The ISO document covers just semantic definitions of interfaces whereas this specification aims to cover all aspects of the interfaces to make them fully compliant to the AUTOSAR Adaptive platform.

The specification shall enable the compatibility of sensors and data fusion algorithms independently of the supplier. To ensure the compatibility between sensors the interfaces are provided on implementation data type level.

The Automated Driving Interfaces serve as common interfaces for the AUTOSAR Adaptive applications. Consumers of the interfaces are AUTOSAR Adaptive applications containing functional elements as sensor data receivers, sensor data processors, data fusion applications, and automated driving functions. The sensor information is provided by a non-platform service. The non-platform service consumer is running in the adaptive platform as an AUTOSAR adaptive application, where the sensor could be deployed on different AUTOSAR platforms (Classic and Adaptive) as shown in the following figure.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Relation to other standards

The currently ongoing standardization of the international standard ISO 23150 "Road vehicles - Data communication between sensors and data fusion unit for automated driving functions - Logical interface" will be applicable to road vehicles with automated driving functions. It specifies the logical interface between smart in-vehicle sensors that sense the environment (e.g. camera, lidar, radar, ultrasonic, etc.) and the vehicle fusion unit. The interface is described in a modular, semantic representation allowing different types of sensor technologies and fusion concepts. The "Open Simulation Interface" (OSI) is a generic software interface for the environmental perception of automated driving functions in virtual scenarios (https://github.com/OpenSimulationInterface/open-simulation-interface). OSI ensures modularity, integrability and interchangeability of the individual components. These can be environment simulation models, sensor models, logical models for the detected environment or sensor fusion and models for automated driving functions. Additional informations can be found on https://opensimulationinterface.github.io/open-simulation-interface/.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. AD Sensor 服务设计
*原文标题：AD Sensor Service Design*

### 19. ISO 映射 to Sensor 服务
*原文标题：ISO mapping to Sensor Services*

### 20. Sensor 类型
*原文标题：Sensor Types*

To comply with the ISO 23150, the specific service is defined with different sensor types. Currently, Camera, Lidar, Radar, and Ultrasonic sercives are supported in the specification. The new service will be introduced along with the evolution of .

 The Camera Sensor Data periodical Transmission
  Upstream requirements:
⌈
A Camera senor with Automated Driving interfaces shall provide the camera sensor data periodically to the Adaptive Applications
⌋

 The Lidar Sensor Data periodical Transmission
  Upstream requirements:
⌈
A Lidar sensor with Automated Driving interfaces shall provide the lidar sensor data periodically to the Adaptive Applications
⌋

 The Radar Sensor Data periodical Transmission
  Upstream requirements:
⌈
A radar sensor with Automated Driving interfaces shall be able to provide the radar sensor data periodically to the Adaptive Applications
⌋

 The Ultrasonic Sensor Data periodical Transmission
  Upstream requirements:
⌈
A ultrasonic sensor with Automated Driving interfaces shall be able to provide the ultrasonic sensor data periodically to the Adaptive Applications
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Sensor 数据 level
*原文标题：Sensor Data level*

In ISO 23150, there are three ISO logic interface levels to support different levels of fusion: object level, feature level and detection level:

* Object level interface: Potentially moving object interface, Road object interface and Static object interface;
* Feature level interface: Camera feature interface and USS feature interface;
* Detection level interface: Radar detection interface,Lidar detection interface, Camera detection interface and USS detection interface.

A sensor could provide several ISO logical interfaces, and shall provide at least one ISO interface either on object, feature, or detection level.

 Sensor specific services for different level ISO interfaces
  Upstream requirements: , , , ,
⌈
To allow the flexibility of service providing by a sensor, each ISO interface shall be mapped to a propriate ara::com means like events. The service interface shall support the defintions of ISO signals.The services for new types of sensors shall be added along with the evolution of . The follwing AP services are defined in this specification:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Supportive Sensor 接口
*原文标题：Supportive Sensor interfaces*

In ISO, there are two supportive senor interfaces for the Adaptive Applications process the reliability of the used measurement method or data, which are also used to the implementation of safety concept. The two supportive sensor interfaces are sensor technology indepedent, i.e. common to camera, lidar, radar and ultrasonic sensor, but with sensor technology specific data.

 Sensor independent supportive services
  Upstream requirements: , , ,
⌈
The supportive interfaces shall be mapped to two sensor indpendent AP services and support the defintions of ISO signals.The follwing services are defined in this specification:

* Sensor Performance service;
* Sensor Health information service.
⌋

### 23. 服务 Optional Elements
*原文标题：Service Optional Elements*

An individual Sensor Service design faces the challenge that each ISO interface contains a lot of optional elements. The optional elements are known and fixed at design time by service providers and service users. The present of optional elements shall not be changed during run time.

 Capability Vector
  Upstream requirements: , , ,
⌈
A service capability vector indicates which optional element is provided by the Service provider. The optional elements indicated by the capability vector shall be always sent during the runtime of the service. The service consumer should check the vector at the initialization time and subcribe the service if it includes all the optional elements that the consumer requires.The consumer may ignore the optional elements, if these elements are not required.
⌋

 Service Profiles
  Upstream requirements:
⌈
In different use cases, there are different requirements on the sensor data i.e.for different data Types, behavior, content, performance, resolution, etc. Different Service Profiles for a Sensor Type enables the flexiblity of the corresponding sensor service for different use cases.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. API 规范
*原文标题：API specification*

There are no APIs defined in this release.

### 25. 服务接口
*原文标题：Service Interfaces*

### 26. 类型定义
*原文标题：Type definitions*

This chapter lists all types provided by the ADI.

### 27. 通用 Header 定义
*原文标题：General Header Definition*

This section lists all the data types used in the header of the service interfaces.

### 28. CapabilityVector

Definition of ImplementationDataType CapabilityVector
  Upstream requirements: , , , , , ,
⌈
| Name | CapabilityVector | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | VECTOR <bool> | < | < | < |
| Derived from | - | < | < | < |
| Description | To identify presence of optional signal. The exact bit reference is denfined in the specification. For each service, there is exact one capabilityVector table, which is deifined in chapter 10. | < | < | < |

⌋

### 29. InterfaceVersionID

Definition of ImplementationDataType InterfaceVersionID
  Upstream requirements: , , , , , ,
⌈
| Name | InterfaceVersionID | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | InterfaceVersionIDMajor uint32_t |  |  |  |

InterfaceVersionIDMinor uint32_t

| InterfaceVersionIDPatch uint32_t | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | Represents the version of the service. | < | < | < |

⌋

### 30. InterfaceCycleTimeVariation

Definition of ImplementationDataType InterfaceCycleTimeVariation
  Upstream requirements: , , , , , ,
⌈
| Name | InterfaceCycleTimeVariation | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | TYPE_REFERENCE | < | < | < |
| Derived from | uint8_t | < | < | < |
| Description | To indicate the cycle time variation. It represents a linear value between 0% and 100%. | < | < | < |

⌋

### 31. InterfaceID

Definition of ImplementationDataType InterfaceID
  Upstream requirements: , , , , , ,
⌈
| Name | InterfaceID | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | TYPE_REFERENCE | < | < | < |
| Derived from | uint8_t | < | < | < |
| Description | Uniquely identify the interface. | < | < | < |
| Range / Symbol | Limit | Description | < | < |
| kUnknown | 0x00 | The interface ID is unknown. | < | < |
| kOther | 0x01 | Other interface. | < | < |
| kStaticObject | 0x02 | The Static Object interface. | < | < |
| kCameraFeature | 0x03 | The Camera Feature interface. | < | < |
| kUltrasonicFeature | 0x04 | The Ultrasonic Feature interface. | < | < |
| kRadarDetection | 0x05 | The Radar Detection interface. | < | < |
| kLidarDetection | 0x06 | The Lidar Detection interface. | < | < |
| kCameraDetection | 0x07 | The Camera Detection interface. | < | < |
| kUltrasonicDetection | 0x08 | The Ultrasonic Detection interface. | < | < |
| kSensorPerformance | 0x09 | The Sensor Performance interface. | < | < |
| kSensorHealthInformation | 0x0A | The Sensor Health interface. | < | < |
| kPotentialMovingObject | 0x0B | The Potential Moving Object interface. | < | < |
| kRoadObject | 0x0C | The Road Object interface. | < | < |

⌋

### 32. DataQualifier

Definition of ImplementationDataType DataQualifier
  Upstream requirements: , , , , , ,
⌈
| Name | DataQualifier | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | TYPE_REFERENCE | < | < | < |
| Derived from | uint8_t | < | < | < |
| Description | To identify the data quality of the transmitted data. | < | < | < |
| Range / Symbol | Limit | Description | < | < |
| kUnknown | 0x00 | Information of data quality is unknown. | < | < |
| kOther | 0x01 | Information of data quality is otherwise specified. | < | < |
| kNormal | 0x02 | Information can be used without restriction. | < | < |
| kReducedInViewAndPerformance | 0x03 | Reported data are from the sensor in a restricted view and performance. | < | < |
| kNotAvailable | 0x04 | Information from the sensor is not available. | < | < |
| kReducedInView | 0x05 | Reported data are from the sensor in a restricted view. | < | < |
| kTemporaryAvailable | 0x06 | Information is only temporary available. | < | < |
| kInvalid | 0x07 | Mesaurement cycle was invalid and no valid objects will be reported. | < | < |
| kReducedInPerformance | 0x08 | Reported data are from the sensor in a restricted performance. | < | < |
| kTestMode | 0x09 | Reported data are from the sensor in a test mode. | < | < |

⌋

### 33. RecognizedStatus

Definition of ImplementationDataType RecognizedStatus
  Upstream requirements: , , , , , ,
⌈
| Name | RecognizedStatus | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | TYPE_REFERENCE | < | < | < |
| Derived from | uint8_t | < | < | < |
| Description | To indicate the recognition process status of the sensor due to resource limitations. | < | < | < |
| Range / Symbol | Limit | Description | < | < |
| kUnknown | 0x00 | The performance status of the sensor is unknown. | < | < |
| kOther | 0x01 | The performance status of the sensor is otherwise specified. | < | < |
| kNormal | 0x02 | The performance of the sensor is enough to process all recognized entities. If additional entities would have been in the environment the sensor would have processed additional entities. | < | < |
| kPreLimits | 0x03 | The performance of the sensor is close to the limits to process all recognized entities. | < | < |
| kLimited | 0x04 | The performance of the sensor is not enough to process all recognized entities. | < | < |

⌋

### 34. TrackingMotionModel

Definition of ImplementationDataType TrackingMotionModel
  Upstream requirements: , , , , , ,
⌈
| Name | TrackingMotionModel | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | TYPE_REFERENCE | < | < | < |
| Derived from | uint8_t | < | < | < |
| Description | The motion model for tracking moving objects. | < | < | < |
| Range / Symbol | Limit | Description | < | < |
| kUnknown | 0x00 | The motion model is unknown. | < | < |
| kOther | 0x01 | The motion model is otherwise specified. | < | < |
| kConstantVelocity | 0x02 | Motion model uses constant velocity. | < | < |
| kConstantAcceleration | 0x03 | Motion model uses constant acceleration. | < | < |
| kConstantTurnRate | 0x04 | Motion model uses constant turn rate. | < | < |

⌋

### 35. MotionType

Definition of ImplementationDataType MotionType
  Upstream requirements: , , , , , ,
⌈
| Name | MotionType | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | TYPE_REFERENCE | < | < | < |
| Derived from | uint8_t | < | < | < |
| Description | To identify the applied motion type in the message, i.e. absolute or relative motion values. | < | < | < |
| Range / Symbol | Limit | Description | < | < |
| kUnknown | 0x00 | The motion tpye is unknown. | < | < |
| kOther | 0x01 | The motion type is otherwise specified. | < | < |
| kRelativeValues | 0x02 | Relative motion values are used. | < | < |
| kAbsoluteValues | 0x03 | Absolute motion values are used. | < | < |

⌋

### 36. ColourModelType

Definition of ImplementationDataType ColourModelType
  Upstream requirements: , , , , , ,
⌈
| Name | ColourModelType | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | TYPE_REFERENCE | < | < | < |
| Derived from | uint8_t | < | < | < |
| Description | To identify the applied colour model in the service. | < | < | < |
| Range / Symbol | Limit | Description | < | < |
| kGrey | 0x00 | Grey scale - 1 colour value is used for grey value. | < | < |
| kRGB | 0x01 | Red, green, blue - 3 colour values are used for the values for red, green, blue. | < | < |
| kRGBIR | 0x02 | Red, green, blue and IR - 4 colour values are used for the values for red, green, blue, and infrared. | < | < |
| kHSV | 0x03 | Hue, saturation, value - 3 colour values are used for the values for hue, saturation, value. | < | < |
| kLUV | 0x04 | Luminance and colour coordinates U, V - 3 colour values are used for the values for luminance and coordinates. | < | < |
| kCMYK | 0x05 | Cyan, magenta, yellow and key(black) values - 4 colour values are used for the values for cyan, maganeta, yellow and key | < | < |
| kColourList | 0x06 | Each value reference a pre-defined colour - 1 colour value. | < | < |

⌋

### 37. RadialVelocityAmbiguityDomain

Definition of ImplementationDataType RadialVelocityAmbiguityDomain
  Upstream requirements: , , ,
⌈
| Name | RadialVelocityAmbiguityDomain | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | Begin float |  |  |  |

| End float | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | The Doppler ambiguity caused by under sampling. m/s | < | < | < |

⌋

### 38. RangeAmbiguityDomain

Definition of ImplementationDataType RangeAmbiguityDomain
  Upstream requirements: , , ,
⌈
| Name | RangeAmbiguityDomain | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | Begin float |  |  |  |

| End float | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | The range of the ambiguity domain. m | < | < | < |

⌋

### 39. AngleAzimuthAmbiguityDomain

Definition of ImplementationDataType AngleAzimuthAmbiguityDomain
  Upstream requirements: , , ,
⌈
| Name | AngleAzimuthAmbiguityDomain | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | Begin float |  |  |  |

| End float | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | The azimuth angle of the ambiguity domain is defined by {begin} and {end}. The unit is {rad,rad} | < | < | < |

⌋

### 40. AngleElevationAmbiguityDomain

Definition of ImplementationDataType AngleElevationAmbiguityDomain
  Upstream requirements: , , ,
⌈
| Name | AngleElevationAmbiguityDomain | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | Begin float |  |  |  |

| End float | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | The elevation angle of the ambiguity domain is defined by {begin} and {end}.The unit is {rad,rad}. | < | < | < |

⌋

### 41. InterfaceApplicability

Definition of ImplementationDataType InterfaceApplicability
  Upstream requirements: , , , , , ,
⌈
| Name | InterfaceApplicability | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | TYPE_REFERENCE | < | < | < |
| Derived from | uint8_t | < | < | < |
| Description | To identify the related interface of the service. | < | < | < |
| Range / Symbol | Limit | Description | < | < |
| kUnknown | 0x00 | Unknown interfaces. | < | < |
| kOther | 0x01 | Otherwise specified interfaces. | < | < |
| kObjectLevelInterfaces | 0x02 | Object level interfaces. | < | < |
| kFeatureLevelInterface | 0x03 | Feature level interface. | < | < |
| kDetectionLevelInterface | 0x04 | Detection level interface. | < | < |
| kFLIandDLI | 0x05 | Feature level and detection level interfaces. | < | < |
| kPMOI | 0x06 | Potential Moving Objects Interface. | < | < |
| kRDOI | 0x07 | Road Objects Interface. | < | < |
| kSOI | 0x08 | Static Objects Interface. | < | < |
| kAll | 0x09 | All interfaces. | < | < |

⌋

### 42. VehicleCoordinateSystemType

Definition of ImplementationDataType VehicleCoordinateSystemType
  Upstream requirements: , , , , , ,
⌈
| Name | VehicleCoordinateSystemType | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | TYPE_REFERENCE | < | < | < |
| Derived from | uint8_t | < | < | < |
| Description | Defines the reference vehicle coordinate system for the interfaces of the sensor. | < | < | < |
| Range / Symbol | Limit | Description | < | < |
| kUnknown | 0x00 | Unknown coordinate system. | < | < |
| kOther | 0x01 | Otherwise specified coordinate system. | < | < |
| kRearAxle | 0x02 | Use vehicle rear axle coordinate system. | < | < |
| kRoadLevel | 0x03 | Use vehicle road level coordinate system. | < | < |

⌋

### 43. Point3D

Definition of ImplementationDataType Point3D
  Upstream requirements: , , , , , ,
⌈
| Name | Point3D | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | x float |  |  |  |

y float

| z float (optional) | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | Represents a 3 dimension vector, the unit will be vary according to the refering data type. | < | < | < |

⌋

### 44. Point3DError

Definition of ImplementationDataType Point3DError
  Upstream requirements: , , , , , ,
⌈
| Name | Point3DError | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | xError float |  |  |  |

yError float

| zError float (optional) | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | Represents Error value in 3 dimension vector, the unit will be vary according to the refering data type. | < | < | < |

⌋

### 45. Orientation3D

Definition of ImplementationDataType Orientation3D
  Upstream requirements: , , , , , ,
⌈
| Name | Orientation3D | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | Yaw float |  |  |  |

Pitch float

| Roll float | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | Represents a 3 dimension vector {yaw, pitch,roll}, the unit will be vary according to the refering data type. | < | < | < |

⌋

### 46. Orientation3DError

Definition of ImplementationDataType Orientation3DError
  Upstream requirements: , , , , , ,
⌈
| Name | Orientation3DError | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | YawError float |  |  |  |

PitchError float

| RollError float | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | Represents Error value in 3 dimension vector {yaw, pitch, roll}, the unit will be vary according to the refering data type. | < | < | < |

⌋

### 47. Point3DErrorVector

Definition of ImplementationDataType Point3DErrorVector
  Upstream requirements: , , , , , ,
⌈
| Name | Point3DErrorVector | < | < | < |
|---|---|---|---|---|
| Namespace | ara::adi::sensoritf | < | < | < |
| Kind | STRUCTURE | < | < | < |
| Sub-elements | xxError float (optional) |  |  |  |

xyError float (optional)

xzError float (optional)

yxError float (optional)

yyError float (optional)

yzError float (optional)

zxError float (optional)

zyError float (optional)

| zzError float (optional) | < | < | < |  |
|---|---|---|---|---|
| Derived from | - | < | < | < |
| Description | Represents the Error value in 3 dimension vector, the unit will be vary according to the refering data type. | < | < | < |

⌋

### 其余 312 章（内容从略，见纯文本全文）

48. Orientation3DErrorVector
49. VanishingPoint
50. VanishingPointError
51. InformationSensorPose
52. InformationSensorSurrounding
53. InterfaceHeader
54. SensorID
55. SensorIDList
56. InformationInterface
57. InformationInterfaceExtension
58. ProbabilityPercentage
59. SensorCalibratableComponent
60. SensorCalibrationStatus
61. CaliComponentInfo
62. CaliComponentInfoVector
63. Calibration
64. CalibrationProcessState
65. SensorOriginTranslationCorrectionLimit
66. SensorPoseAngleCorrectionLimit
67. SensorCluster
68. Point2D
69. Point2DError
70. InformationAmbiguityDomain
71. Potentially Moving Objects 接口定义
72. MeasurementStatus
73. ReferencePoint
74. MovementStatus
75. RoadLevel
76. DimensionBox
77. DimensionBoxError
78. IncludedGeometricStructures
79. PotentiallyMovingObjectClassificationType
80. LightStatus
81. LightType
82. PersonPoseType
83. ObjectLaneAssociation
84. AngleBetweenObjectEdgeAndLaneRightEdgeLeftLane
85. AngleBetweenObjectEdgeAndLaneRightEdgeLeftLaneError
86. PercentageSideLane
87. PotentiallyMovingObjectsDynamics
88. ObjectStatus
89. PotentiallyMovingObjectsBoundingBox
90. PotentiallyMovingObjectsInformation
91. ValidPotentiallyMovingObjectClassification
92. ValidPotentiallyMovingObjectClassificationVector
93. PotentiallyMovingObjectsLight
94. PotentiallyMovingObjectsLightVector
95. PotentiallyMovingObjectsLights
96. ValidPersonPose
97. PersonPoseVector
98. PotentiallyMovingObjectsPerson
99. PotentiallyMovingObjectsLaneRelatedInformation
100. PotentiallyMovingObjectsMotionRelatedInformation
101. ValidPotentiallyMovingObject
102. ValidPotentiallyMovingObjectVector
103. PotentiallyMovingObjects
104. ValidObservation
105. ValidObservationVector
106. ObservationStatus
107. PotentiallyMovingObjectsPosition
108. PotentiallyMovingObjectsCameraSensorTechnologySpecific
109. PotentiallyMovingObjectsRadarSensorTechnologySpecific
110. PotentiallyMovingObjectsLidarSensorTechnologySpecific
111. PotentiallyMovingObjectInterface
112. Road Objects 接口定义
113. RoadType
114. RoadSurfaceClassificationType
115. RoadConditionClassificationType
116. RoadMarkingType
117. ArrowDirection
118. SignClassificationType
119. SignValueUnit
120. ConnectionType
121. PolynomialCoefficient
122. ColourTone
123. RoadObjectInterface
124. PolynomialRangeX
125. SupportedDataRangeX
126. PolylineInterpolationMethod
127. VertexPointConfidence
128. RoadBoundaryType
129. RoadObjectLaneAssociation
130. RoadBoundaries
131. RoadSurfaceClassification
132. SignState
133. RoadSurfaceClassificationsVector
134. RoadSurfaceConditionClassification
135. RoadSurfaceConditionClassificationsVector
136. RoadSurface
137. ColourValueVector
138. RoadMarkingClassification
139. RoadMarkingClassificationVector
140. RoadMarkingsInformation
141. ValidConnection
142. ValidConnectionVector
143. ValidPolynomial
144. SupportedDataRangeVector
145. ValidPolynomialVector
146. Polynomials
147. ValidVertice
148. ValidVerticeVector
149. ValidPolyline
150. ValidPolylineVector
151. Polylines
152. RoadMarking
153. RoadMarkingVector
154. RoadMarkings
155. ValidRoadBoundaryClassification
156. ValidRoadBoundaryClassificationVector
157. RoadBoundariesInformation
158. ValidRoadBoundary
159. RoadBoundaryVector
160. SupportedAxis
161. SignClassification
162. ValidSignClassificationVector
163. SupportedDataRange
164. Static Objects 接口定义
165. GeneralLandmarkClassificationType
166. SignGeometry
167. TrafficSignsInformation
168. TrafficLightsInformation
169. LaneRelevanceClassificationType
170. SupplementarySignClassificationType
171. RelativePosition
172. StructureLightClassificationType
173. ColourClassificationType
174. GeneralLandmarksInformation
175. LightShapeClassificationType
176. LightModeClassificationType
177. ValidGeneralLandmarkClassificationVector
178. GeneralLandmarkClassification
179. GeneralLandmarksPosition
180. BoundingBox
181. GeneralLandmark
182. GeneralLandmarkVector
183. GeneralLandmarks
184. LaneRelevanceClassification
185. MainSignClassification
186. TrafficSignsPosition
187. SubObjectStatus
188. TrafficSignsSupplementarySignsInformation
189. SupplementarySignClassification
190. TrafficSignsSupplementarySignsPosition
191. TrafficSignsSupplementarySign
192. TrafficSignsSupplementarySignVector
193. TrafficSignsSupplementarySigns
194. TrafficSign
195. ValidTrafficSignVector
196. TrafficSigns
197. StructureLightClassification
198. TrafficLightsPosition
199. ColourClassification
200. ColourClassificationVector
201. TrafficLightsSpotsColour
202. LightModeClassification
203. LightModeClassificationVector
204. LightShapeClassification
205. TrafficLightsSpotsInformation
206. TrafficLightsSpotsPosition
207. TrafficLightSpot
208. TrafficLightSpotVector
209. TrafficLightSpots
210. TrafficLight
211. ValidTrafficLightVector
212. TrafficLights
213. StaticObjectInterface
214. ValidSupplementarySignClassificationVector
215. ValidMainSignClassificationVector
216. ValidLaneRelevanceClassificationVector
217. LightShapeClassificationVector
218. ValidStructureLightClassificationsVector
219. Feature Level 接口定义
220. ShapeType
221. ShapeClassificationType
222. UltrasonicFeatureClassificationType
223. TrilaterationStatus
224. MeasurementStatusFeature
225. ShapeClassification
226. ValidShapeClassificationsVector
227. CameraFeaturesShapeInformation
228. ShapePoint
229. ValidShapePointVector
230. ShapePoints
231. ShapeReferencePoint
232. ValidShapeReferencePointVector
233. ShapeReferencePoints
234. FeatureStatus
235. CameraFeature
236. ValidCameraFeatureVector
237. CameraFeatureInterface
238. UltrasonicSegmentInformation
239. UltrasonicFeatureClassification
240. SegmentPoint
241. ValidSegmentPointVector
242. UltrasonicSegmentPoints
243. UltrasonicFeature
244. ValidUltrasonicFeatureVector
245. UltrasonicFeatureInterface
246. ValidUltrasonicFeatureClassificationVector
247. 检测 Level 接口定义
248. Position3DSpheric
249. Position3DSphericError
250. DetectionClassificationType
251. DetectionsPosition
252. UltrasonicDetectionsPosition
253. DetectionStatus
254. DetectionClassification
255. ValidDetectionClassificationVector
256. RadarDetectionsInformation
257. RadarDetection
258. ValidRadarDetectionVector
259. DetectionsDynamics
260. RadarDetectionsInterface
261. LidarDetectionsInformation
262. LidarDetection
263. ValidLidarDetectionVector
264. LidarDetectionsPosition
265. LidarDetectionsInterface
266. DetectionShapeClassification
267. ValidDetectionShapeClassificationVector
268. CameraShapesShapeInformation
269. ShapePointDetectionLevel
270. ValidShapePointDetectionLevelVector
271. CameraShapesShapePoints
272. CameraShape
273. ValidCameraShapeVector
274. ShapeReferencePointDetectionLevel
275. ValidShapeReferencePointDetectionLevelVector
276. CameraShapesShapeReferencePoints
277. CameraDetectionsInterface
278. UltrasonicDetectionsInformation
279. UltrasonicDetection
280. ValidUltrasonicDetectionVector
281. UltrasonicDetectionsInterface
282. Supportive Sensor 接口定义
283. SegmentAzimuth
284. SegmentElevation
285. AnglePoint3D
286. BeamDivergence
287. SegmentsStatus
288. BlockageStatus
289. FieldOfViewReduction
290. FieldOfViewReductionReasonType
291. ValidFieldOfViewReductionReasonsVector
292. FieldOfViewReductionReasons
293. RecognizedObjectType
294. DetectionRange
295. RecognizableObjectTypes
296. ValidRecognizableObjectTypesVector
297. RealWorldObjectRecognitionCapabilities
298. ReferenceTargetType
299. ReferenceTargetTypes
300. ValidReferenceTargetTypesVector
301. ReferenceTargetRecognitionCapabilities
302. RelativeRadialVelocityRange
303. PeformanceSegment
304. SensorOperationMode
305. SensorDefectDetected
306. SensorDefectReason
307. ValidSensorOperationModeVector
308. StatusSupplyVoltage
309. SensorTemperatureStatus
310. ValidPeformanceSegmentVector
311. SensorInputSignalType
312. SensorInputSignalStatus
313. SensorExternalDisturbed
314. SensorTransmitPowerReduced
315. StatusSensorHeating
316. StatusSensorCleaning
317. SensorTimeSync
318. SensorPerformanceSegments
319. SensorPerformanceInterface
320. InputSignalStatus
321. ValidInputSignalStatusVector
322. SensorHealthStatus
323. SensorHealthInformationInterface
324. 服务接口
325. Sensor 接口 Port
326. Object level 接口
327. Feature level 接口
328. 检测 level 接口
329. Supportive 接口
330. Capability 配置
331. Object Level 服务
332. PMObjectsService Capability Vector
333. RObjectsService Capability Vector
334. SObjectsService Capability Vector
335. Feature Level 服务
336. CameraFeatureService Capability Vector
337. USSFeatureService Capability Vector
338. 检测 Level 服务
339. RadarDetectionService Capability Vector
340. LidarDetectionService Capability Vector
341. CameraDetectionService Capability Vector
342. USSDetectionService Capability Vector
343. Supportive 服务
344. SensorPerformanceService Capability Vector
345. SensorHealthService Capability Vector
346. 附录
347. Change history of AUTOSAR traceable items
348. Traceable item history of this document according to AUTOSAR Release R25-11
349. Added 规范 Items in R25-11
350. Changed 规范 Items in R25-11
351. Deleted 规范 Items in R25-11
352. Traceable item history of this document according to AUTOSAR Release R24-11
353. Added 规范 Items in R24-11
354. Changed 规范 Items in R24-11
355. Deleted 规范 Items in R24-11
356. Traceable item history of this document according to AUTOSAR Release R23-11
357. Added 规范 Items in R23-11
358. Changed 规范 Items in R23-11
359. Deleted 规范 Items in R23-11
