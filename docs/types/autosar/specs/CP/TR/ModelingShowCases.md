# Modeling Show Cases Report (`ModelingShowCases`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 789 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_ModelingShowCases_789\AUTOSAR_CP_TR_ModelingShowCases.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_ModelingShowCases_789\AUTOSAR_CP_TR_ModelingShowCases.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_ModelingShowCases_789\zzgen\CP_TR_ModelingShowCases.complete.txt`

## 文档简介

The objective of this report is the illustration and execution of AUTOSAR modeling and the AUTOSAR methodology (see ) for selected show cases.

Each show case focuses on a few specific topics and gives an overview of their basic usage and their application in the field. Where appropriate, the show cases are based on real world applications of the AUTOSAR standard.

It contains

* explanatory background on the functional use case for which the specific part of the AUTOSAR modeling is applied.
* illustration of the AUTOSAR model content in form of interlinked tables
* explanation of the processing results of these AUTOSAR models (e.g. C code, A2L files, ...)
* snippets of the full-blown examples. The complete examples are provided in the archive `AUTOSAR_EXP_ModelingShowCases`.zip .

## 模块依赖

As mentioned in the introduction, mandatory integration requirements will always create a parameter, while suggested integration requirements will only create a parameter if it does not exist.

If integration requirements are applied at various times in the workflow, this will lead to different results, depending on the order of application (it introduces an order dependency). This is problematic if the mandatory value and the suggested value differ. If the mandatory integration requirement is applied first, the recommended one will not create a value (since one already exists), the resulting configuration contains one value (the mandatory one). Conversely, if the recommended one is applied first, the resulting configuration will contain two values (recommended and mandatory).

If the source of configuration is stored (see ), then this conflict can be detected and resolved immediately. Otherwise, it can be detected during reporting, when the configuration values are checked against the Integration Requirements.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

The objective of this report is the illustration and execution of AUTOSAR modeling and the AUTOSAR methodology (see ) for selected show cases.

Each show case focuses on a few specific topics and gives an overview of their basic usage and their application in the field. Where appropriate, the show cases are based on real world applications of the AUTOSAR standard.

It contains

* explanatory background on the functional use case for which the specific part of the AUTOSAR modeling is applied.
* illustration of the AUTOSAR model content in form of interlinked tables
* explanation of the processing results of these AUTOSAR models (e.g. C code, A2L files, ...)
* snippets of the full-blown examples. The complete examples are provided in the archive `AUTOSAR_EXP_ModelingShowCases`.zip .

### 2. 概述
*原文标题：Overview*

The report is organized in chapters according to the main focus of the contained show cases. Each chapter contains a topic specific overview and at least one show case. Each chapter is self contained and understandable without reading any other chapter.

The technical report on the AUTOSAR Methodology  deserves a special mentioning as accompanying document for going through the show cases.

In the first version of the technical report, the show cases are targeting the topic of measurement and calibration, involving the creation of A2L files based on AUTOSAR models. For these show cases, also the specification of the SoftwareComponentTemplate  is a good accompanying document.

This updated version is extended by an additional show case targeting the topic of Structured Requirements. For these show cases, also the specification of the StandardizationTemplate  is a good accompanying document.

### 3. Measurement and Calibration

Measurements and Calibration (short: MC) is a major step in the development of electronic control units (ECUs). Measurement and Calibration systems (MC systems), involving software tools (MC tools) as well as the hardware to access an ECU (not in focus here), enable the developer to measure variables and to adapt calibration parameters (or "characteristics") during the run-time of the ECU.

For instance, the following tasks are regularly done by "Measurement and Calibration"

* Adaptation to real hardware (e.g. inserting the electrical characteristics of a sensor)
* Calibration of controllers (e.g. adjusting the parameters of a closed loop controller)
* Tuning of ECU internal environment models (e.g. for "virtual sensors")
* Validation of ECU functions
* Tracking of development errors
* Collecting data for automated optimization of parameters

The "Introductory Show Case" (see ), illustrates all basic artifacts on the way from a physical system that is to be controlled by an ECU until measuring and calibrating with a MC system.

As didactic simplification only a few data types were used, e.g. neither CURVEs nor MAPs were chosen, nor any ApplicationCompositeDataType.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Introductory Show Case

As introduction to measurement and calibration with AUTOSAR a simple, artificial closed-loop control system was chosen. This allows interesting feedback of the system when using a MC tool. At the same time, the model, the source code and generated files are still comprehensible.

A drawback is, that not all typical "real world" data types are featured, for instance. Such topics are covered in the "Advanced Show Case", chapter .

### 5. Physical 系统
*原文标题：Physical System*

This section contains a description of the physical system setup. It can safely be skipped, if only the AUTOSAR modeling itself is of interest to the reader.

Figure  shows the major physical values and entities of our system. The control task is the following: The plant is a sensor in an airstream that requires heating. The temperature T_{Plant} is to be controlled by the ECU. However, there is no direct way to measure T_{Plant}.

For the estimation of T_{Plant} the following properties of the system are used:

* T_{Plant} depends on the temperature of the environment T_{Env}, i.e. the temperature of the air stream. T_{Env} can be measured directly.
* T_{Plant} depends on the current I_{Controller} which is output by the ECU and controlled by the controller and therefore known.
* The plant itself acts as a thermal energy storage. So T_{Plant} also depends on the heat quantity that is currently stored within the plant.
* All other influences on T_{Plant} are considered to be insignificant. So they can safely be ignored for this control task.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Components 概述
*原文标题：Components Overview*

For this show case, the interaction with a real physical environment is completely left out, i.e. there is no Heating Power Output component and the profile of T_{Env} is randomly generated inside the component Environment. This cuts off a lot of complexity from the example, and allows to run the software system on a PC without complex environment simulations.

For completeness: The plant model is calculated inside the component Plant and the controller inside the component Controller.

As typical for ECUs the calculations happen in a time-discrete manner, i.e. the calculations in the components are executed periodically at discrete in time steps. In the following, the index n \in \{1,2,...\} denotes the current time step. The previous time step is denoted by the index n-1. The index 0 denotes the initialization value. This also means that time step 1 is the first, that is actually calculated by the ECU.

Furthermore \Delta t denotes the time in seconds, that elapsed between the calculation of the previous time step and the current time step. In case of time step 1, \Delta t denotes the time that elapsed between initialization of the system and time step 1.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. The Environment

The modeling and implementation of the environment is not in the focus of this show case. The temperature Tenv_{n} \mathtt{[^{\circ}C]} is generated (pseudo) randomly. This is done in order to see the controller and the plant model "in action" during run-time of the system.

The generated profile is a random walk limited by an upper and a lower boundary, with saturation at these boundaries.

The random walk is configurable via \mathtt{T_{LowLimit}} \, \mathtt{[^{\circ}C]} and \mathtt{T_{HighLimit}} \, \mathtt{[^{\circ}C]}, for the boundaries, and \mathtt{T_{StepSize}} \, \mathtt{}, for the change of the temperature during one time step.

Assuming rand_n \, \mathtt{[\mbox{-}]} \in \{-1, 0, 1\} and n \in \{1, 2, 3, ...\} then Tenv_n is characterized by this equation (with Tenv_0 \, \mathtt{[^{\circ}C]} \: = \: -273.15 \, \mathtt{[^{\circ}C]}):

Tenv_n \, \mathtt{[^{\circ}C]} \: = \: Tenv_{n-1} \, \mathtt{[^{\circ}C]}
                            + \mathtt{T_{StepSize}} \, \mathtt{}
						      \cdot rand_n \, \mathtt{[\mbox{-}]}

if and only if Tenv_n would be inside the boundaries, i.e.

\mathtt{T_{LowLimit}} \: < \: Tenv_n \: < \: \mathtt{T_{HighLimit}}

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. The Plant

The plant is an electrically heated mass that is exposed to the air flow in the environment. The heat quantity Qplant that is stored inside the plant is considered to always be directly proportional to the temperature T with constant proportionality factor. Neither the mass of the plant, nor the specific heat capacity changes during the run-time of our system.

For simplicity, this proportionality factor is considered to be 1 \, \mathtt{[\frac{J}{K}]}. For the calculations inside the Plant component, we are always using \mathtt{} as unit for temperatures, so the conversion from and to \mathtt{[^{\circ}C]} only happens at the interface of the component.

With this, we have the following:

Qplant_n \, \mathtt{} & = & T_n \, \mathtt{} \cdot 1
                           \, \mbox{$\mathtt{\left[\frac{J}{K}\right]}$} \\
  \\%more vspace...
  T_n \, \mathtt{} & = & \frac{Qplant_n \,
                          \mathtt{}}{1 \, \mathtt{\left[\frac{J}{K}\right]}}

This also means, that Qplant_n \, \mathtt{} \: = \: 0 \, \mathtt{} corresponds T_n \, \mathtt{} = 0 \, \mathtt{}, i.e. absolute zero. So Qplant_n \, \mathtt{} \: \ge \: 0 \, \mathtt{} shall always be true.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. The Controller

For the closed loop control an I controller (by and large) was chosen for component Controller. This means that the amplification of the input signal is proportional to the integral of the errors, i.e. the deviation between measured variable and setpoint. Because the controller cannot actively cool down the temperature of the plant, the output I_n >= 0 for all n.

Again, all temperatures are converted to and from \mathtt{[^{\circ}C]} at the interface of the component. All internal calculation are done in \mathtt{}.

The error during the current time step is the difference between \mathtt{T_{SetPoint}} \, \mathtt{} and the measured variable T_n \, \mathtt{}:

e_n \, \mathtt{} \: = \: \mathtt{T_{SetPoint}} \, \mathtt{} - T_n \, \mathtt{}

The integral part of the controller is calculated via summing up all errors from the previous steps. With eSum_n \, \mathtt{} = 0 \, \mathtt{} we have:

eSum_n \, \mathtt{} \: = \: eSum_{n-1} \, \mathtt{}
                                + e_n \, \mathtt{} \cdot \Delta t

A further design decision for the controller was, to limit the integral and to saturate at the limits.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. AUTOSAR 建模
*原文标题：AUTOSAR Modeling*

This section gives a brief overview of the AUTOSAR modeling. More insight can be gained by browsing through the hyper-linked tables in section . These tables are generated from the AUTOSAR model of this show case. If this is still not sufficient, the complete model is available in .arxml format in `AUTOSAR_EXP_ModelingShowCases`.zip .

In this show case the components specified in section  are modeled as ApplicationSwComponentTypes.

* Environment
* Plant
* Controller

To keep the example simple, no SwcImplementations were modeled. For some tasks, like generation of a MemMap for an embedded controller, this would be needed.

The in- and outputs of the ApplicationSwComponentTypes are modeled as SenderReceiverInterface. The internal state is realized as implicitInterRunnableVariables. Besides the illustrative aspect, the rationale for this design decision was that the internal state is likely to be used by more than one runnable in ApplicationSwComponentTypes (at least "outside" of an introductory show case).

For variables that should just be available for measurement in a MC tool, arTypedPerInstanceMemorys are used.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. RTE Generation, Measurement and Calibration

The McSupport is an interface between the RTE generator and the A2L generator. A RTE generator provides a McDataInstance for each calibrateable or measurable object. From logical view the generation of McSupport could be seen in two steps:

1. Provide unique names for all parameters, measurements, component prototypes which are instantiated one or multiple times. This is done by the used AUTOSAR Authoring Tool.

2. Generate the McSupport itself. This is usually done by the RTE generator. A2L supports only one global namespace, while AUTOSAR defines own namespaces within each ARPackage. This means, that on the one hand unique names are needed for all objects which are to be accessible during measurement and calibration (parameters, measurements, component prototypes). But on the other hand, unique names are needed for all other things that will appear in A2L, e.g. CompuMethods, Units. For them the RTE generator will create unique names.

AUTOSAR specifies additionally an AliasNameSet to override names which is not used here.

See `AUTOSAR_EXP_ModelingShowCases`.zip  for the generated `Rte_McSupportData`.arxml file.

### 12. FlatMap

In this show case, the FlatMap gives unique names to the

* dataElements
* implicitInterRunnableVariables
* arTypedPerInstanceMemorys

The RTE-Generator uses this information for the generation of the McSupport file as well as for generation of the .c and .h files.

The FlatMap consists of a FlatInstanceDescriptor for each instance of these VariableDataPrototypes.

The concrete modeling of the FlatMap for this use case can be found in `AUTOSAR_EXP_ModelingShowCases`.zip .

### 13. ECU Documentation, Measurement and Calibration

When developing an ECU one usual requirement is, that objects described in A2L can be easily found in the documentation of the ECU. This is a challenge since documentation is on the level of SwComponentTypes while A2L is defined on the level of a System of category "`ECU_EXTRACT`".

* The names of SwComponentPrototypes are potentially different to the names of SwComponentTypes
* The names of McDataInstances are potentially different to the names of DataPrototypes

The challenge gets bigger, if types are instantiated multiple times. This issue needs to be solved by proper architecture, modeling conventions and clever generation of the FlatMap.

In this show case, this topic is only slightly touched by instantiating TemperatureSRIF two times, for the interface transporting T_{Env} as well as for the interface transporting T_{Plant}.

It is demonstrated that the FlatMap can be used to solve the issue. However, we manually crafted our FlatMap, which is usually not possible in the field. FlatMaps are usually automatically generated by customizable, "clever", not standardized tools.

### 14. A2L 文件
*原文标题：A2L File*

With the information in the McSupport file an A2L file is generated. However, for this generation the memory addresses for the variables and characteristics are needed. They are usually extracted from the map file that is output by the linker of the ECU executable. The exact process as well as the tool for the A2L file generation is not standardized.

An example A2L file is provided in `AUTOSAR_EXP_ModelingShowCases`.zip.

### 15. Implementation in C

The implementation in C is a straight forward realization of the physical specification within the AUTOSAR modeling (see section  and ). Therefore, the listings are presented without further explanation besides the comments in the source code.

A remark on the (pseudo) random numbers generated in line 22 of Environment.c (Listing ): The numbers don't have good "pseudo randomness" properties but are sufficient for this show case, nevertheless. This way of generation was only chosen, because it fits in one line of C code without introducing a dependency to a library.

### 16. A walk with T_Plant through the Show Case

This section revisits the complete show case, but focuses on one physical value: T_{Plant}. It visits all artifacts and highlights all places that relate to T_{Plant} to illustrate the dependencies between all artifacts.

### 17. Physical 系统
*原文标题：Physical System*

Our journey begins at the physical system, where the value of the physical system outside of the ECU is identified with a software value inside the ECU.

### 18. Components

It was located at the interface between two architectural components, sent by the Plant and received by the Controller. Furthermore a sequencing was introduced, i.e. in one time step the Plant is calculated before the Controller.

### 19. Equations

The functional behavior is defined by the equations for the Plant

T_{Plant} is also used by the physical equations in the component Controller:

Furthermore, calculations inside the components are done in Kelvin \mathtt{}. The conversion from and to \mathtt{[^{\circ}C]} happens at the interface level.

### 20. AUTOSAR 建模
*原文标题：AUTOSAR Modeling*

This architecture, i.e. the layout of the physical system, is modeled in AUTOSAR. The functional behavior defined by the equations will be implemented in C Code later on.

### 21. Physical Dimension and Unit

A PhysicalDimension is defined: T_{Plant} is a temperature.

| Common PhysicalDimension attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | Temperature | < | < | < |
| currentExp | 0 | < | < | < |  |
| lengthExp | 0 | < | < | < |  |
| luminousIntensityExp | 0 | < | < | < |  |
| massExp | 0 | < | < | < |  |
| molarAmountExp | 0 | < | < | < |  |
| temperatureExp | 1 | < | < | < |  |
| timeExp | 0 | < | < | < |  |
| < | < | < | < | < |  |

The corresponding ARXML description is:

T_{Plant} shall have the Unit DegreeCelsius:

| Common Unit attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | DegreeCelsius | < | < | < |
| displayName | °C | < | < | < |  |
| offsetSiToUnit | -273.15 | < | < | < |  |
| factorSiToUnit | 1.0 | < | < | < |  |
| physicalDimension | Temperature | < | < | < |  |
| < | < | < | < | < |  |

The corresponding ARXML description is:

The following is presented for completeness, although not directly needed for T_{Plant}. It is possible to link more than one unit to a physical dimension. So in the model, there is also a definition for the unit Kelvin:

| Common Unit attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | Kelvin | < | < | < |
| displayName | K | < | < | < |  |
| offsetSiToUnit | 0.0 | < | < | < |  |
| factorSiToUnit | 1.0 | < | < | < |  |
| physicalDimension | Temperature | < | < | < |  |
| < | < | < | < | < |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Application 数据类型
*原文标题：Application Data Type*

A new ApplicationDataType is defined for temperatures in degree Celsius:

| Common ApplicationDataType attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | Temperature_C | < | < | < |
| category | < | VALUE | < | < | < |
| desc | < | Type for a temperature in [°C] | < | < | < |
| swCalibrationAccess | < | readOnly | < | < | < |
| unit | < | DegreeCelsius | < | < | < |
| Range | < | < | < | < | < |
| Conversion | < | < | < | < | < |
| category | LINEAR | < | < | < |  |
| direction | compuInternalToPhys | < | < | < |  |
| desc | lowerLimit | upperLimit | compuNumerator / compuDenominator | < |  |
| - | - | - | Phys = \frac{ -273.15 + 1 * Internal  }{ 1 } | < |  |
| < | < | < | < | < |  |

The corresponding ARXML Code is split between the definition of the ApplicationDataType:

and the CompuMethod, which is referenced by the ApplicationDataType:

This ApplicationDataType is mapped to the ImplementationDataType float32. The DataTypeMappingSet that contains this DataTypeMap is referenced inside the SwcInternalBehaviors of the ApplicationSwComponentTypes presented later on.

For completeness, also the ARXML containing the definition of float32 is inserted here:

### 23. Port 接口
*原文标题：Port Interface*

The Temperature_C is used to define the SenderReceiverInterface which is used to type the "transport" of a temperature in degree Celsius between SwComponentTypes. Please note that in the show case, this PortInterface is not only used to type the "transport" of T_{Plant}, but also to type the "transport" of T_{Env}.

| Common SenderReceiverInterface attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | TemperatureSRIF | < | < | < |
| desc | < | Interface type for transferring temperatures in [°C] | < | < | < |
| properties of the dataElements | < | < | < | < | < |
| properties of VariableDataPrototype | < | < | < | < |  |
| shortName | T | < | < | < |  |
| type | Temperature_C | < | < | < |  |
| swImplPolicy | standard | < | < | < |  |
| swCalibrationAccess | readOnly | < | < | < |  |
| swAddrMethod | VAR | < | < | < |  |
| < | < | < | < | < |  |

In ARXML:

For completeness, also the referenced SwAddrMethod is described here:

| Common SwAddrMethod attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | VAR | < | < | < |
| desc | < | Memory section for variables | < | < | < |
| sectionType | var | < | < | < |  |
| memoryAllocationKeywordPolicy | addrMethodShortName | < | < | < |  |
| sectionInitializationPolicy | - | < | < | < |  |
| option | safetyQM | < | < | < |  |
| < | < | < | < | < |  |

In ARXML:

### 24. 软件 Components
*原文标题：Software Components*

The two ApplicationSwComponentTypes Controller and Plant are using T_{Plant}.

In Plant a PPortPrototype, typed by TemperatureSRIF, is defined for sending out T_{Plant}.

Furthermore dataWriteAccess is granted to the single RunnableEntity in this ApplicationSwComponentType. You also see the symbol, i.e. the name of the implementing C function, as well as the TimingEvent that triggers the execution of the RunnableEntity. These two are of further interest for tying together the system.

| Common ApplicationSwComponentType attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | Plant | < | < | < |
| properties of the ports | < | < | < | < | < |
| properties of PPortPrototype | < | < | < | < |  |
| shortName | PlantTemperaturePPP | < | < | < |  |
| desc | Port for sending out the estimated temperature of the plant | < | < | < |  |
| providedInterface | TemperatureSRIF | < | < | < |  |
| [ ... ] | < | < | < | < |  |
| < | < | < | < | < |  |
| internalBehavior | < | PlantInternalBehavior | < | < | < |

[ ...

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 系统
*原文标题：System*

In the `ECU_Extract`, i.e. a System with category `ECU_EXTRACT`, the Composition is used to type the rootSoftwareComposition. All SwComponentPrototypes in Composition are mapped to the single EcuInstance in this show case.

The FlatMap that is referenced in the `ECU_Extract`, gives the name TPlant to a dataElement (see ecuExtractReference below). The name TPlant is later on displayed in the MC Tool.

### 26. ECU 配置
*原文标题：ECU Configuration*

There are further things that need to be defined before the RTE and the OS can be generated. For instance, the order in which the RTEEvents for the RunnableEntitys are invoked and the assignment to an OsTask. This is done via EcucModuleConfigurationValues. The interesting parts of the RTE configuration are:

This part of the OS configuration defines the name of the OSTask, that we see later on in the generated C code:

These configurations are tied to the `ECU_Extract` by an EcucValueCollection:

This completes the presentation of the AUTOSAR modeling in our walk through.

### 27. RTE Generation

In the following, some snippets of the generated RTE are presented. However, they are examples only and may differ if different RTE generators are used.

Among other things, the OsTask is generated as defined in the ECU configuration above:

Also a MACRO to write T_{Plant} in the Plant

and to read T_{Plant} in the Controller

was generated. Furthermore, the McSupport file is generated as an interface between the "AUTOSAR world" and the "A2L world". As the reader can see, this is a compilation of necessary data from the AUTOSAR model presented before:

### 28. Implementation in C

The implementation in C-Code is a direct implementation of the physical equations. The Plant uses the MACRO, generated by the RTE generator, to write T_{Plant}:

The Controller uses the MACRO, generated by the RTE generator, to read T_{Plant}:

### 29. A2L 文件
*原文标题：A2L File*

Using the McSupport file and the map file from the linker, an example A2L file was generated for this show case. The snippet below is an example only and could differ if a different A2L file generator is used:

### 30. Measurement and Calibration Tool

The A2L file is then used by a MC tool to measure T_{Plant}. Of course, in addition to the A2L file a suitable ECU access must be available, to actually do measurement and calibration with the AUTOSAR system of this show case. However, the ECU access is not presented because this is not in the focus of this show case.

Below is a typical screen shot from a MC tool during an actual measurement and calibration task. You can see T_{Plant} measured and displayed in degree Celsius.

### 31. Show cases in the 示例
*原文标题：Show cases in the Example*

### 32. CompositionSwComponentTypes

| Common CompositionSwComponentType attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | Composition | < | < | < |
| properties of the components | < | < | < | < | < |
| properties of SwComponentPrototype | < | < | < | < |  |
| shortName | CPT_Controller | < | < | < |  |
| type | Controller | < | < | < |  |
| properties of SwComponentPrototype | < | < | < | < |  |
| shortName | CPT_Parameters | < | < | < |  |
| type | Parameters | < | < | < |  |
| properties of SwComponentPrototype | < | < | < | < |  |
| shortName | CPT_Plant | < | < | < |  |
| type | Plant | < | < | < |  |
| properties of SwComponentPrototype | < | < | < | < |  |
| shortName | CPT_Environment | < | < | < |  |
| type | Environment | < | < | < |  |
| < | < | < | < | < |  |

### 33. ParameterSwComponentTypes

| Common ParameterSwComponentType attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | Parameters | < | < | < |
| desc | < | Type for providing the parameters to the ApplicationSwCompoments | < | < | < |
| properties of the ports | < | < | < | < | < |
| properties of PPortPrototype | < | < | < | < |  |
| shortName | ControllerPPP | < | < | < |  |
| desc | Port for providing the parameters for the controller | < | < | < |  |
| providedInterface | ControllerPIF | < | < | < |  |
| properties of PPortPrototype | < | < | < | < |  |
| shortName | PlantPPP | < | < | < |  |
| desc | Port for providing the parameters for the plant | < | < | < |  |
| providedInterface | PlantPIF | < | < | < |  |
| properties of PPortPrototype | < | < | < | < |  |
| shortName | EnvironmentPPP | < | < | < |  |
| desc | Port for providing the parameters for the environment | < | < | < |  |
| providedInterface | EnvironmentPIF | < | < | < |  |
| properties of PPortPrototype | < | < | < | < |  |
| shortName | DtPPP | < | < | < |  |
| desc | Time of one time step | < | < | < |  |
| providedInterface | DtPIF | < | < | < |  |
| < | < | < | < | < |  |

### 34. ApplicationSwComponentTypes

| Common ApplicationSwComponentType attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | Controller | < | < | < |
| properties of the ports | < | < | < | < | < |
| properties of RPortPrototype | < | < | < | < |  |
| shortName | TemperatureRPP | < | < | < |  |
| desc | Port to receive the temperature of the plant | < | < | < |  |
| requiredInterface | TemperatureSRIF | < | < | < |  |
| properties of PPortPrototype | < | < | < | < |  |
| shortName | CurrentPPP | < | < | < |  |
| desc | Port for sending out the current output by this controller | < | < | < |  |
| providedInterface | CurrentSRIF | < | < | < |  |
| properties of RPortPrototype | < | < | < | < |  |
| shortName | ControllerParamsRPP | < | < | < |  |
| desc | Port to get the parameters for the controller | < | < | < |  |
| requiredInterface | ControllerPIF | < | < | < |  |
| properties of RPortPrototype | < | < | < | < |  |
| shortName | DtRPP | < | < | < |  |
| desc | Port to get delta t, i.e. time of one time step | < | < | < |  |
| requiredInterface | DtPIF | < | < | < |  |
| < | < | < | < | < |  |
| internalBehavior | < | ControllerInternalBehavior | < | < | < |
| < | < | < | < | < |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. ParameterInterfaces

| Common ParameterInterface attributes | < | < | < | < | < |
|---|---|---|---|---|---|
| shortName | < | ControllerPIF | < | < | < |
| desc | < | Interface with all parameters for the controller | < | < | < |
| properties of the parameters | < | < | < | < | < |
| properties of ParameterDataPrototype | < | < | < | < |  |
| shortName | ctrl_SetPoint | < | < | < |  |
| desc | Set point for the temperature of the plant | < | < | < |  |
| type | Temperature_C | < | < | < |  |
| swImplPolicy | standard | < | < | < |  |
| swCalibrationAccess | readWrite | < | < | < |  |
| swAddrMethod | CALIB | < | < | < |  |
| properties of ParameterDataPrototype | < | < | < | < |  |
| shortName | ctrl_K | < | < | < |  |
| desc | Amplification factor for the I-controller | < | < | < |  |
| type | Amplification | < | < | < |  |
| swImplPolicy | standard | < | < | < |  |
| swCalibrationAccess | readWrite | < | < | < |  |
| swAddrMethod | CALIB | < | < | < |  |
| properties of ParameterDataPrototype | < | < | < | < |  |
| shortName | ctrl_MaxESum | < | < | < |  |
| desc | Upper limit of the integal part of the I-controller | < | < | < |  |
| type | ESum | < | < | < |  |
| swImplPolicy | standard | < | < | < |  |
| swCalibrationAccess | readWrite | < | < | < |  |
| swAddrMethod | CALIB | < | < | < |  |
| < | < | < | < | < |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 76 章（内容从略，见纯文本全文）

36. SenderReceiverInterfaces
37. ApplicationDataTypes, Category VALUE
38. Units
39. PhysicalDimensions
40. SwAddrMethods
41. Advanced Show Case
42. the 建模结构的通用目标
43. The Ecu 描述
44. The Ecu Extract
45. The ECU Flat 映射
46. 数据类型 and 数据 Objects
47. Axis, Curves and Maps
48. Axis, Curves and Maps on ApplicationDataType level
49. Axis, Curves and Maps on DataPrototype and SwComponentPrototype level
50. Instantiation of Axis, Curves and Maps
51. Usage of Axis, Curves and Maps by 软件 Components
52. Linking 映射 and curve instances to its axes instances
53. Linking axes instances to its working point instances
54. Axis, Curves and Maps in the ECU Flat 映射
55. Arrays of Maps and Axes
56. Arrays of Maps and Axes in the ECU Flat 映射
57. Measurement of Modes
58. Enabling Measurement of Modes
59. Modes in the ECU Flat 映射
60. Show cases in the 示例
61. CompositionSwComponentTypes
62. ParameterSwComponentTypes
63. ApplicationSwComponentTypes
64. ParameterInterfaces
65. ModeSwitchInterfaces
66. SenderReceiverInterfaces
67. ApplicationDataTypes, Category BOOLEAN
68. ApplicationDataTypes, Category VALUE
69. ApplicationDataTypes, Category COM_AXIS
70. ApplicationDataTypes, Category CURVE
71. ApplicationDataTypes, Category 映射
72. ApplicationArrayDataTypes
73. ApplicationRecordDataTypes
74. ModeDeclarationGroups
75. Units
76. PhysicalDimensions
77. SwAddrMethods
78. Structured 需求
79. 规范 items as 需求
80. 诊断需求
81. Decomposition of 需求
82. 集成需求
83. Defining 集成需求 using StructuredReq
84. StructuredReq.shortName
85. StructuredReq.category
86. StructuredReq.importance
87. StructuredReq.rationale
88. StructuredReq.useCase
89. StructuredReq.描述
90. DefinitionReference
91. 描述
92. ARVersion
93. ModuleVersion
94. SetValue
95. SupportedLowValue
96. SupportedHighValue
97. SupportedValue
98. Applying 集成需求
99. Single 配置 value in a single container
100. Single 配置 value in 多 containers
101. 多配置 values in a container
102. 追踪配置 changes
103. Ranges in 集成需求
104. Possible Conflicts caused by applied 集成需求
105. Merge of 集成需求
106. No merge of fixed values
107. Merge of ranges
108. Order dependency between suggested and mandatory 集成需求
109. Reporting
110. 附录
111. Mentioned Class Tables
