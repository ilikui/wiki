# Application Design Patterns Catalogue (`AIDesignPatternsCatalogue`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 672 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_AIDesignPatternsCatalogue_672\AUTOSAR_CP_TR_AIDesignPatternsCatalogue.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_AIDesignPatternsCatalogue_672\AUTOSAR_CP_TR_AIDesignPatternsCatalogue.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_AIDesignPatternsCatalogue_672\zzgen\CP_TR_AIDesignPatternsCatalogue.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. Document conventions

Technical terms (Class Names) are typeset in mono spaced font, e.g. FrameTriggering.

When defining name patterns the syntax defined according to ANTLR is used . The grammar for name patterns as defined in , , is used. In the following we just list the most important placeholders that are used throughout the document:

* This represents a string which is valid shortName according to Identifier
| * This represents a string (( | _)*_?) which is valid part of a shortName. |
|---|---|

  Hint: The place holder "anyNamePart" shall not be used at the beginning of a shortName pattern to avoid invalid shortNames.
* This represents the shortName / shortLabel / symbol of the applied blueprint
* This represents the shortName of the BSW module resp. ASW SwComponentType / ASW component prototype related to the derived object. "Related" mainly could be both, aggregating or referencing.

  The placeholder componentName in particular supports multiple derivation of a PortPrototypeBlueprint in the context of different software component types resp. modules .
* This represents the shortName of the dedicated SwComponentType.
* This represents the shortName of the dedicated SwComponentPrototype.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. About Patterns

This document gives an overview of the patterns defined in AUTOSAR for ease the usage of AUTOSAR architecture, AUTOSAR application interfaces and the AUTOSAR meta-model. The focus is on application software (ASW).

### 4. 类型 of Pattern
*原文标题：Types of Pattern*

The following categories/classifications of patterns are distinguished:

* An architectural pattern is a standard design in the field of software architecture. The concept of an architectural pattern has a broader scope than the concept of design pattern. The architectural patterns address various issues in software engineering, such as computer hardware performance limitations, high availability and minimization of a business risk .
* In software engineering, a design pattern is a general reusable solution to a commonly occurring problem within a given context in software design. A design pattern is not a finished design that can be transformed directly into source or machine code. It is a description or template for how to solve a problem that can be used in many different situations. Patterns are formalized best practices that the programmer must implement themselves in the application .
* A solution pattern describes a generic solution for a specific problem like for example error handling or job scheduling .

An orthogonal classification of patterns is the following:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Describing Patterns

The description of the patterns in this document follow a predefined structure. This structure was created based on the contents of the documents , , , , and .

A pattern is described in a separate section and the header of the particular pattern contains the name of the pattern and the pattern identification (standardized name): {pattern name} ({pattern identification})

At the very beginning of the section describing a specific pattern the classification is given as shown below:

* {type of pattern} Pattern

The type of the pattern is one of the categories described in section .

| Section | Mandatory | Instruction | Additional Information |
|---|---|---|---|
| Problem | Yes | The problem solved by the design pattern and its general rationale and purpose. | None |
| Also Known As | No | Other names for the pattern, if any are known. | None |
| Applicability | Yes | A general description of the characteristics a system must have for the pattern to be useful in the design or implementation of the program. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Sensor and Actuator Pattern

* Design Pattern

### 7. Motivation

The Sensor/Actuator Design Pattern describes how to handle sensors or actuators that are connected to an ECU in the context of an overall architecture.

The main intention of this pattern is standardizing application interfaces for SWC controlling sensors and actuators, it focuses on aspects of:

* Independence of application software from concrete sensors and actuators connected to a specific ECU.
* Reusable code between different sensors and actuators.
* Different code sharing cooperation models (software sharing), thus supporting different business models.
* Deployment of functionality to different ECUs.

For standardizing interfaces it is useful to have an architectural design overview of a sensor/actuator composition. Therefore it was decided to create an architectural design pattern first and define the interface inside next. In a first step a layer model containing the main interfaces between those layers is created. Then the most common functions within the layers are defined and described for a common understanding in a second step. In the third step it is planned to describe also the interfaces in these functions from step 2.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Also Known As

This pattern is also known as Device Abstraction.

### 9. Applicability

The Device Abstraction is located above the RTE. It is a set of software components that abstracts from the sensors and actuators connected to a specific ECU. It uses sensor actuator software components, the only components above RTE that are allowed to access the ECU abstraction interface.

In case direct access to the Micro controller is required because specific interrupts and/or complex Micro controller peripherals to fulfill the special functional and timing requirements of the sensor evaluation or actuator control have to be implemented this pattern cannot be applied. Instead a complex driver implementation shall be used.

The Sensor/Actuator Design Pattern supports software sharing (=collaboration between various partners) on different levels: Development partner one might deliver the sensors together with the basic electrical driver software (DrvrSnsrElec), development partner two might deliver the sensor device driver software (DevDrvrSnsr) and the third partner might develop the substitute models together with the virtual device drivers (DevSnsrVirt).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Solution

In Figure  that was taken from  an example of the signal flow for a lamp (actuator) and a velocity sensor is shown. This signal flow pattern is refined by this sensor/actuator pattern.

The solution is proposing a three-level layering within a composition representing a sensor or actuator:

* electrical device driver layer,
* sensor/actuator device driver layer,
* virtual device driver layer.

Each layers can be represented by a single SwComponentType or also by a CompositionSwComponentType containing one or more SwComponentTypes. The electrical device driver layer in addition must contain at least one SensorActuatorSwComponentType.

In Figure  the overall structure of the pattern is shown. Recursive elements are optional. Closed loop controlled actuator and position feedback is included. The naming is simplified and will be explained in more detail later.

The application software can rely on the existence of the consolidated value. The consolidated value can be calculated from the

* estimated value,
* setpoint value,
* measured and/or raw value.

The calculation of the consolidated value via the setpoint or estimated value is used in case of actuators without feedback loop.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Naming

In the following the semantic port prototype (blueprint) definition together with the name patterns are described.

The overall name pattern for port short names is described in grammar . In the following these port (prototype blueprint) names are also referred to as signal names. In Table  additionally the pattern for the corresponding long names is given.

In addition to port prototypes, interface names are extended with sequence number. Usage and handling of sequence numbers is described in  in .

In case of a generic long name {anyLongNamePart} or {anyLongName}, resp., is empty.

| Generic Signal Name | Long Name Pattern of Concrete Sensor/Actuator Signal (EN) | Generic Long Name of Signal (EN) | AUTOSAR Definition |
|---|---|---|---|
| ElecRaw | Electrical Raw Value of {anyLongNamePart} | Electrical Raw Value | Electrical raw sensor value as provided by the ECU Abstraction. Typically this value is unfiltered. However, there are for example smart components doing some filtering themselves. |

This signal can only be represented in voltage, current, (period) time, binary value, frequency, dutycycle .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 接口定义
*原文标题：Interface definitions*

The following table defines the default attribute for all previously described PortInterfaces. SI units shall be used for SensorActuator PortInterfaces whenever possible.

| Interface name | ImplDatatype | CompuMethod | Unit | PhysicalDimension |
|---|---|---|---|---|
| Reqd | sint16 | 100 / (2^{13}) | Perc (%) | Ratio |
| Cpby | sint16 | 100 / (2^{13}) | Perc (%) | Ratio |
| Sp | sint16 | 100 / (2^{13}) | Perc (%) | Ratio |
| Outp | sint16 | 100 / (2^{13}) | Perc (%) | Ratio |
| Measd, Consold, Estimd, Raw (binary) | n.a. | 1 | - | Dimensionless |
| Measd, Consold, Estimd, Raw (T) | float32 | 1 | Kelvin (K) | Absolute Temperature / Relative Temperature |
| Measd, Consold, Estimd, Raw (P) | float32 | 1 | Pa (Pa) | Pressure |
| Measd, Consold, Estimd, Raw (Posn) | float32 | 1 | Perc (%) | Ratio |
| Measd, Consold, Estimd, Raw (I) | float32 | 1 | Ampr (A) | Electric Current |
| Measd, Consold, Estimd, Raw (N) | float32 | 1 | PerSec (1/s) | Rotational Speed |
| Measd, Consold, Estimd, Raw (U) | float32 | 1 | Volt (V) | Voltage |
| Measd, Consold, Estimd, Raw (R) | float32 | 1 | Ohm (Ohm) | Electric Resistance |
| Measd, Consold, Estimd, Raw (Pwr) | float32 | 1 | Watt (W) | Power |
| Measd, Consold, Estimd, Raw (RelHum) | float32 | 1 | Perc (%) | Ratio |

Measd, Cons

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Sensor Actuator 类型
*原文标题：Sensor Actuator types*

The following S/A types are available as SwComponentTypes:

* Sensor (Snsr)
* Actuator without feedback (Actr)
* Actuator with feedback (ActrWithFb)

### 14. Sensor

In Figure  a design pattern of blueprint components for a sensor is shown.

### 15. Actuator without Feedback Loop

In Figure  an open loop controlled actuator is shown. In addition to the actuator chain it is possible to also provide and calculate the consolidated value using the setpoint input, but there are alternatives how to calculate the consolidated value.

### 16. Actuator with Feedback Loop

In Figure  a design pattern of blueprint components for a typical closed loop controlled device with (position) feedback is shown.

### 17. Usage of pattern

The SensorActuator-Pattern can be used in different ways, see figure .

S/A types defined in  are stored and available via AI tool. User can either take SwComponentTypes directly and create one or multiple instances, or he/she can take them as a blueprint with the need to extend and adjust them afterwards. During single or multi instantiation SwComponentPrototypes with different names, but same content are generated. The blueprint mechanism offers the possibility to flexible change name, content and even rename ports. From point of creation, it has to be maintained separately.

### 18. 示例
*原文标题：Examples*

### 19. Throttle Valve

Figure  shows an example device abstraction for a throttle valve.

### 20. Turbo Charger

In Figure  an example of a closed looped controlled device with position feedback - a turbo charger - is shown.

Hint: In most cases it is not recommended to use company names in model names (like "AcmeXYZ" used in the Figures). Company names etc. are only used in the examples to show the difference between type and prototype and what is the reason for the difference. For general rules and recommendations how to deal with variants in models, as for example expressed by the company names in the examples, please refer to the modeling guides and templates.

### 21. Turbo Charger with Stages and Banks

In Figure  a project system configuration for turbo charger with several stages and banks is shown.

### 22. Sensor for Environment Temperature

In Figure  a typical sensor for environment temperature is shown.

### 23. Standard Sensor

In Figure  a design pattern of blueprint components for a standard sensor is shown.

### 24. Standard Sensor for Environment Temperature

In Figure  a standard sensor for environment temperature is shown.

### 25. Distributing Device 抽象
*原文标题：Distributing Device Abstraction*

In Figure  the ECU view derived from the VFB view of a temperature sensor as shown in Figure  is shown. Finally it is shown that it is possible to also deploy the different SW-C to different ECUs. Of course timing constraints have to be considered before distributing components to different ECUs.

### 26. Sample 代码 and 建模
*原文标题：Sample Code and Model*

In Listing  a blueprint for the components used in the Sensor/Actuator pattern is provided. The blueprint code is not complete but just gives an idea how it is realized. The composition component is not shown.

Please note that the AUTOSAR meta model requests that a sensor actuator component type references a corresponding sensor or actuator, resp., using a HwDescriptionEntity, . In this case a HwElement is needed to be used. Since there is a standardized HwCategory for sensors and actuators also a HwType is defined that is referenced by the HwElement.

The HwCategorys should be provided centrally because they are standardized. Definition of HwCategory "SensorActuator" is shown in Listing .

### 27. Typical location of some common 功能 within the specified layers
*原文标题：Typical location of some common function within the specified layers*

This chapter is for detailed description of the distribution of features across the device abstraction layers. It provides some examples of some typical and common features and their recommended location within the specified layers of the S/A-Pattern. Scope for this chapter is to make interface standardization easier.

### 28. Virtual Device Coordinator (DevCoorrVirt)

Virtual device is an abstraction of the physical representation of the actuator.

### 29. Conversion and linearization of physical requested value

Typically there is a delta between the mechanical endstops and the position where the physical effects are influenced due to the movement of the actuator. This gap could be compensated via offset compensation algorithm of the position sensor or via linearization of the requested setpoint value. The transfer function is used to compensate the actuator HW design/physics.

### 30. DCM 服务 / 诊断 tester 接口 for 基础功能 test
*原文标题：DCM service / Diagnostic tester interface for basic function test*

The DCM service interface is typically used as a tester interface and can overwrite the requested value to perform a basic function test of the actuator.

### 31. Cleaning / Ice breaking

Overwrite/Ignore the requested value, in order to prepare the actuator for proper actuation. The function switches between two different setpoint values for a specific time to either

# condition the actuator for offset learning
# clean particles/compounds from actuator
# break up from ice

### 32. Dither of setpoint

Continous overlayed/modulated signal on setpoint value to overcome static friction of actuator.

### 33. Release 功能 of setpoint
*原文标题：Release function of setpoint*

The release function is manipulating the requested setpoint value. This could be needed in case of a blocked actuator, i.e. the actuator got stuck at its position.

### 34. Coordination of activation and deactivation of the actuator

Activation: The actuator shall be activated as soon as actuation is requested. Deactivation: To ensure safe operation, the actuator shall be shut off under certain conditions (incl. monitoring e.g. open hood) and shall be shut off to fail safe before voltage supply is switched off.

### 35. Actuator Device 驱动 (DevDrvrActr)
*原文标题：Actuator Device Driver (DevDrvrActr)*

### 36. Dither of output value

Continous overlayed/modulated signal on output value to overcome static friction of actuator.

### 37. Release 功能 of output value
*原文标题：Release function of output value*

The release function is manipulating the output value. This could be needed in case of a blocked actuator, i.e. the actuator got stuck at its position.

### 38. Limitation

### 39. Static limitation

The output value is limited to protect the actuator from any mechanical or thermal damage at a static position. It is a static limitation of the output value. Example: Limitation of dutycycle at the mechanical endstops, e.g. to avoid overheating.

### 40. Dynamic limitation for overheating protection

Effective current monitoring + housing/motor temperature monitoring is used as overheating protection. To protect the actuator of overheating, the energy input to the actuator or the temperature inside the actuator is observed. It is a dynamic limitation of the output value. Hint: The temperature information could also come as a consolidated value from an abstracted sensor SW component.

### 41. Feed forward controller

The Feed Forward Controller compensatex the influcence of the known disturbances in the controlled system. It calculates the pre-controlled output value.

### 42. Closed loop controller

The Closed Loop Controller uses feedback to control output of a dynamic system, i.e. the output value is adapted according to the consolidated value.

### 43. Set point limitation

Set point limitation given by plant used as closed loop controller input.

### 44. Set point gradient limitation

Protection of the actuator by limiting the set point gradient, e.g. in position close to the endstops.

### 45. 控制 deviation monitoring
*原文标题：Control deviation monitoring*

Monitoring of the permanent deviation between setpoint and consolidated value.

### 46. Capability

Providing a Capability is a way of summarizing all active limitations on an actuator. The Capability is related to the requested set point, providing the dynamic boundaries of possible usage. For example, an electric machine actuator SW composition will report its capability to the coordinator functionality in the application software. If the capability is reduced, the coordinator functionality in the application software may use this capability information to redistribute the requested set points differently between the actuators of the system to obtain the overall system control objective.

| Generic Signal Name | Long Name Pattern of Concrete Sensor/Actuator Signal (EN) | Generic Long Name of Signal (EN) | AUTOSAR Definition |
|---|---|---|---|
| Cpby | Capability {anyLongNamePart} | Capability | Provides the dynamic instant capability typically based on output limitation but could also contain the limitation on rate of change of the consolidated value. It is expressed as percentage. |

This following section presents examples of capability. The capability can be described as the temporary dynamic bounds of actuation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Electrical Actuator 驱动 (DrvrActrElec)
*原文标题：Electrical Actuator Driver (DrvrActrElec)*

### 48. Power stage monitoring

An ECU might contain various power stages for driving different electrical loads. Common electrical faults at power stages are Short Circuit to Battery (SCB), Short Circuit to Ground (SCG), and Open Load (OL). These faults can occur during either on-state or off-state of the power stage output.

### 49. Virtual Device 驱动 (DevSnsrVirt)
*原文标题：Virtual Device Driver (DevSnsrVirt)*

### 50. Substitution

The function switches between the measured and a replacement value. The replacement value could be the estimated value. Example: The switching can happen based on:

# Sensor diagnostic information
# Sensor signal quality
# Sensor availabilty

### 51. Inertia compensation

The function provides a predicted sensor value (forecast) to compensate the inertia of the sensor. Examples: thermal inertia, mechanical inertia

### 52. Signal qualifier evaluation

The quality of the consolidated value is provided by that function. It is determined by checking consolidated value and all sensor related diagnosis information.

### 53. DCM 服务 / 诊断 tester 接口 for 基础功能 test
*原文标题：DCM service / Diagnostic tester interface for basic function test*

The DCM service interface is typically used to overwrite and stimulate the consolidated sensor value.

### 54. Plausibilization

### 55. Continous plausibilization

The measured value is checked continously against another redundant sensor information. This redundant sensor information can be provided by any other sensor or by the estimated value. Example: Offset diagnosis, in case difference (measured value vs. redundant value) exceeds certain threshold, e.g. tolerance threshold.

### 56. Conditional plausibilization

The measured value is checked at specific points in time (e.g. once in a driving cycle or at specific driving modes) against another redundant sensor information. This redundant sensor information can be provided by any other sensor or by the estimated value. Hint: The conditional plausibilization can be used to compensate or just identify sensor individual tolerances.

### 57. Sensor Device 驱动 (DevDrvrSnsr)
*原文标题：Sensor Device Driver (DevDrvrSnsr)*

### 58. High level 过滤
*原文标题：High level filtering*

This function block contains every kind of filter which might lead to a significant phase shift of the sensor value in order to provide a physical sensor value, fitting to requirements from user functions (regarding timing, accuracy). Hint: Therefore a good trade-off between phase shift and accuracy has to be found.

### 59. Offset adaption

The result of conditional plausibilization can be used to do an offset adaption of measured value to compensate individual tolerances of the sensor. The determined offset information is used to adapt the sensor signal to show values closer to the actual physical signal. Hint: The conditional plausibilization can be used to compensate or just identify sensor individual tolerances.

### 60. Zero point adaption

The zero point adaption is used to adjust the transfer function in the conversion to the physical zero point. Hint: The adaption of this zero point is done within the conversion block. Example 1: Sensors measuring relative values (differential pressure) shall show 0 if there is equalized pressure. Example 2: The sensor value is adapted to the mechanical endstop position of an closed loop operated actuator.

### 61. Drift 检测
*原文标题：Drift detection*

Sensor values are monitored throughout the driving cycle and used to derive a sensor deviation compared to the first and last learned value. Hint: Can be used for offset adaption, to improve sensor information or it can be used for diagnosis purpose only.

### 62. Conversion

The electrical signal is converted into physical representation by transfer function. In case of nonlinear signal, linearization will be part of transfer function as well.

### 63. Physical signal gradient calculation

In order to get information about the current dynamic of the sensed system, a gradient is calculated based on current and previous sensor information.

### 64. Physical signal gradient check

The gradient of the physical signal is checked against a maximum. For certain sensors a maximum gradient should not be exceeded. In case the sensor shows a higher gradient, it could be indicated as defect.

### 65. Stuck check diagnosis

Identify a "frozen" sensor information, in case the sensor signal does not change. A permanent "frozen" sensor information could be indicated as a defect.

### 66. Physical signal range check

Comparison of physical sensor signal against minimum and maximum thresholds for continuous diagnosis of physical limits.

### 67. Electrical Sensor 驱动 (DrvrSnsrElec)
*原文标题：Electrical Sensor Driver (DrvrSnsrElec)*

### 68. 基础 filter
*原文标题：Basic filter*

A basic filter is needed to mitigate electric noise. The timing behavior shall not give any significant phase shift to signal. Example: The definition of a significant phase shift is that it does not have any impact on the physical behaviour of the system. For signals influenced by the combustion the phase shift should not exceed the time given by a 360\deg camshaft rotation. Hint: Possible filter types for this use case could be FIR (finite impulse response) filter or PLL (phase locked loop). Reason: The DevDrvrSnsr transfers electrical value to physical value. In case the signal already has a phase shift, the timing within the upper layers cannot be compensated anymore.

### 69. Voltage compensation

Required for sensors with power supply from outside ECU. The seperate power supply creates a potential difference in reference voltage which needs to be compensated in SW. Hint: This functionality can be realized in hardware alternatively.

### 70. Electrical diagnosis

It is needed to diagnose electrical faults on the sensor. Examples: Short Circuit to Battery (SCB), Short Circuit to Ground (SCG), Open Circuit, Loose Contact.

### 71. Known Issues

Sensor abstraction of sensors with typical digital interfaces (e.g. SENT, FAS) or which are connected via bus (e.g. CAN, LIN) is part of this pattern as well. Description of required extensions is in progress.

### 72. FAQ

* Why is the estimated value in Example "Actuator without Feedback Loop (Setpoint Alternative)" not used? An estimated value does not exist for every sensor. So there is no need for it to be used. In this example, the consolidated value is calculated based on the setpoint.
* Is there a signal quality considered in the pattern? The topic "signal qualifier" is not yet considered. At the moment (R19-11) there is no activity known for standardizing such a signal quality.
* How are the names for the layers derived (e.g. DevCoorrVirt)? Can they be changed? The AUTOSAR abbreviations are given by strict rules . Even the concatenation of the abbreviations is defined. The names should not be changed due to backward compatibility reasons.

### 73. Known Uses

None.

### 74. Related Patterns

| Pattern | Description |
|---|---|
| Arbitration Pattern (see Chapter ) | The sensor/actuator pattern is typically combined with the arbitration pattern to allow several set point requesters, several providers of consolidated values or several providers of estimated values. This is, arbitration is not done within the sensor/actuator pattern but outside the device abstraction. |

### 75. Anti-Patterns One Should be Aware of

None.

### 76. Further Readings

More information could be found in  and .

### 77. Arbitration between several requesters or providers

* Design Pattern

### 78. Problem

Arbitration between several different providers or requesters.

### 79. Applicability

The number of requesters or providers, resp., has to be known at pre-compile time. The number of requesters or providers, resp., has to be known at implementation or generation time of the arbiter component.

This pattern can be applied in the context of Sensor/Actuator Design Pattern, e.g. for modeling several setpoint requesters, several providers of consolidated values or several providers of estimated values.

### 80. Solution

A new component for managing all requests from different requesters or providers, resp., is introduced. In Figure  the overall pattern for requesters is shown in case sender receiver interfaces are used. In Figure  the overall pattern for providers is shown in case sender receiver interfaces are used.

When using sender/receiver interfaces the arbitration component, also called "arbiter", needs to have unique names for the different requests or providers. This is realized by different request or provide ports, one per requester or provider, resp. The port interface or at least the application data type is typically the same for all of these requesters or providers, resp., and the resulting request or arbitrated value.

An arbitration component is introduced to support several requesters of the same action but not necessarily of the same value.

An arbitration component is introduced to support several providers of the same signal.

### 81. 示例
*原文标题：Examples*

### 82. Several Setpoint Requesters

In the context of the sensor/actuator pattern (see Chapter ) there might be several conflicting setpoint requesters. In this case a new component for managing all requests from different setpoint requesters is introduced, see Figure .

When using sender/receiver interfaces the arbitration component, also called "arbiter", needs to have unique names for the different requests. This is realized by different request ports, one per requester. The port interface or at least the application data type is typically the same for all of these requesters and the resulting request.

In grammar  it is described how the provide ports of the requesters as well as the request ports of the arbiter should be named: they all have the suffix "Reqd" for "Required". So terms like "desired", "wished" etc. should not be used to avoid that too many terms with similar meanings are used without being able to distinguish them.

Figure  shows the pattern in the context of the RTE. The Device Abstraction is designed as one large composition but this is not requested by the Sensor/Actuator pattern.

### 83. Several Providers of Consolidated Values

In the context of the sensor/actuator pattern () there might be several sensors providing the same physical information. This is, there are several component all providing a consolidated values for a specific physical signal.

A new component for managing all consolidated values from different providers is introduced, see Figure .

When using sender/receiver interfaces the arbitration component, also called "arbiter", needs to have unique names for the different providers. This is realized by different request ports, one per provider. The port interface or at least the application data type is typically the same for all of these providers and the resulting consolidated value.

In grammar  it is described how the provide ports of the providers as well as the provide port of the arbiter should be named: they all have the suffix "Consold" for "Consolidated". So terms like "modeled" etc. should not be used to avoid that too many terms with similar meanings are used without being able to distinguish them.

### 其余 27 章（内容从略，见纯文本全文）

84. Several Providers of Estimated Values
85. Sample 代码 and 建模
86. Known Uses
87. Related Patterns
88. Signal Quality States
89. Problem
90. Applicability
91. Solution
92. Implementation proposal
93. 附录
94. Change history of AUTOSAR traceable items
95. Traceable item history of this document according to AUTOSAR Release R24-11
96. Added 规范 Items in R24-11
97. Changed 规范 Items in R24-11
98. Deleted 规范 Items in R24-11
99. Traceable item history of this document according to AUTOSAR Release R23-11
100. Added 规范 Items in R23-11
101. Changed 规范 Items in R23-11
102. Deleted 规范 Items in R23-11
103. Traceable item history of this document according to AUTOSAR Release R22-11
104. Added 规范 Items in R22-11
105. Changed 规范 Items in R22-11
106. Deleted 规范 Items in R22-11
107. Added Constraints in R22-11
108. Changed Constraints in R22-11
109. Deleted Constraints in R22-11
110. Mentioned Class Tables
