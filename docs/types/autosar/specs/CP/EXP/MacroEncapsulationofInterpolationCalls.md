# Macro Encapsulation of Interpolation Calls (`MacroEncapsulationofInterpolationCalls`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 808 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_MacroEncapsulationofInterpolationCalls_808\AUTOSAR_CP_EXP_MacroEncapsulationofInterpolationCalls.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_MacroEncapsulationofInterpolationCalls_808\AUTOSAR_CP_EXP_MacroEncapsulationofInterpolationCalls.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_MacroEncapsulationofInterpolationCalls_808\zzgen\CP_EXP_MacroEncapsulationofInterpolationCalls.complete.txt`

## 文档简介

Interpolation routines are used by the application software for calculating the unknown points from the known points. The existing AUTOSAR interpolation routines supports two categories curve (1D) and map (2D) interpolation functionalities both in integer and floating point. It supports two methods per category interpolation and lookup. Additionally special variants called group of curves/maps and fixed curves/maps with two different calculation formulas are supported which can be either interpolation (or) lookup.

Interpolation routines are very frequently used routines in the application software. As a consequence, the design of interpolation routines has a significant impact on the efforts of software development and will be first addressed by optimization. The explanatory document "Macro Encapsulation of Interpolation Calls" is developed to guide the Application Developer to perform the simplified invocation of the AUTOSAR compatible and resource optimized interpolation routines.

## 章节详细内容

### 1. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| DEM | Diagnostic Event Manager |
| DET | Default Error Tracer |

### 2. 相关文档
*原文标题：Related documentation*

### 3. Input documents & Related 规范
*原文标题：Input documents & Related specification*

### 4. 简介
*原文标题：Introduction*

Interpolation routines are used by the application software for calculating the unknown points from the known points. The existing AUTOSAR interpolation routines supports two categories curve (1D) and map (2D) interpolation functionalities both in integer and floating point. It supports two methods per category interpolation and lookup. Additionally special variants called group of curves/maps and fixed curves/maps with two different calculation formulas are supported which can be either interpolation (or) lookup.

Interpolation routines are very frequently used routines in the application software. As a consequence, the design of interpolation routines has a significant impact on the efforts of software development and will be first addressed by optimization. The explanatory document "Macro Encapsulation of Interpolation Calls" is developed to guide the Application Developer to perform the simplified invocation of the AUTOSAR compatible and resource optimized interpolation routines.

### 5. Motivation

The motivation for the explanatory document "MacroEncapsulationofInterpolationCalls" is to simplify the routine handling by introducing a single source principle. This will reduce the maintenance efforts and avoid false usage leading to bugs. They are the basis for the resulting cost reduction and increase in quality.

### 6. 免责声明
*原文标题：Disclaimer*

This explanatory document represents the macro encapsulation of library calls as one of the possible methods to reduce the application overhead in calling the mathematical interpolation functionalities. This document does not mandate that the user shall use only macro encapsulation for making the interpolation calls.

### 7. Use Cases

### 8. Generate Encapsulation Macros

The document `AUTOSAR_CP_TR_Methodology`  illustrates the general approach of generation of atomic software component header files (Figure ). The proposed encapsulation macros shall be saved in an "Encapsulation Macros Header File" similar to an "Application Header File".

Figure  shows the generation process which is parallel to the generation process of the application header file. The marked block suggests the new part. The Macro Encapsulation Generator Tool can be implemented as add-on to the Component API Generation Tool (RTE ). Inputs of both tools are information from the VFB Atomic Software Component and the Software Component Internal Behaviour.

The generated encapsulation macros need interfaces from the application header file e.g. to get access to the curve and maps. Therefore the macro encapsulation concept has to know the syntax and structure of the RTE  generated interfaces.

The proposed encapsulation macros shall be saved in an "Encapsulation Macros Header File" (see Figure ) similar to an "Application Header File".

### 9. Use Encapsulation Macros

Following matrix show all types of interpolations services, provided by IFX Libraries, which shall be handled by the macro encapsulation concept:

| Linear | Lookup | Fix (interval) | Fix (shift) | Lookup Fix (interval) | Lookup Fix (shift) |  |
|---|---|---|---|---|---|---|
| Curve | x | x | x | x | x | x |
| Map | x | x | x | x | x | x |
| Grouped Curve | x | x |  |  |  |  |
| Grouped Map | x | x |  |  |  |  |
| Axis Search | x |  |  |  |  |  |

Following matrix show all types of interpolations services, provided by IFL Libraries, which shall be handled by the macro encapsulation concept:

| Linear | Lookup | Fix (interval) | Fix (shift) | Lookup Fix (interval) | Lookup Fix (shift) |
|---|---|---|---|---|---|
| Curve | x |  |  |  |  |
| Map | x |  |  |  |  |
| Grouped Curve | x |  |  |  |  |
| Grouped Map | x |  |  |  |  |
| Axis Search | x |  |  |  |  |

### 10. Interpolation methods：
*原文标题：Interpolation methods:*

* Interpolates result considering two data points
* No interpolation, returns entry data point
* No explicit axis available, distribution points are calculated via Offset and Shift or Offset and Interval
* Mixture of Lookup and Fix

### 11. Interpolation calculation：
*原文标题：Interpolation calculation:*

* Integrated data point search and interpolation
* Distributed data point search and interpolation

For the grouped interpolation method the data point search is separated from the interpolation calculation. The data point search results in a structure which contains index and ratio information. This information can be used by curve interpolation, curve look-up interpolation, map interpolation and map look-up interpolation.Currently this document details on linear curve and map interpolations. The other types of interpolations can be handled similar but are not specified in this document.

### 12. Solution Proposal

### 13. 定义 of Terminology
*原文标题：Definition of Terminology*

This concept will provide an additional header file, the "Encapsulation Macros Header File". It contains generated macros to encapsulate the call of curve and map interpolation routines.

There are no other new terminologies provided.

### 14. Architectural Components

### 15. Encapsulation Macros Header 文件
*原文标题：Encapsulation Macros Header File*

| Artifact | Encapsulation Macros Header File | < | < |
|---|---|---|---|
| Package | AUTOSAR Root::M2::Methodology::Methodology Library::Component::Work Products | < | < |
| Brief Description | Header file for macros that encapsulate the call of curve and map interpolation routines | < | < |
| Description | Header generated for an AtomicSoftwareComponentType from Macro Encapsulation Generator Tool. It represents the complete encapsulation macro interfaces between the component code and the RTE (calls into the RTE as well as prototypes called by the RTE). All calls of encapsulation interpolation routines are routed through this header | < | < |
| Kind | Code | < | < |
| Relation Type | Related Element | Mult. | Note |
| Aggregated by | Delivered Atomic Software Components | 1 |  |
| Produced by | Generate Atomic Software Component Contract Header Files | 1 |  |
| Consumed by | Compile Atomic Software Component | 1 |  |

The name of the header will have following form: "<component>_Elc.h" where <component> is the name of the component for that the header is generated.

### 16. 功能性描述
*原文标题：Functional Description*

### 17. 基础 Concept 描述
*原文标题：Basic Concept Description*

### 18. Principle of Encapsulation Concept

For illustration of the encapsulation macros, an example of the processing of a curve interpolation is demonstrated as follows. (Given names are possibly not conforming to naming conventions because the focus is set to the principle of the concept.)

Suggest the data specification (VFB Atomic Software Component description) of a particular SWC component defines a data prototype, named "IgnitionCurve". This data prototype is typed by an ApplicationDataType named "IgnitionCurveType" inclusive their x- and y-axis. The ApplicationDataType corresponds to an ImplementationDataType (e.g. "GenericCurve"). This ImplementationDataType specifies the details of the resulting structure including their BaseTypes (e.g. data type uint8 for curve values, sint16 for the x-axis used by following example).

The prototype of an interpolation service which looks like below:

uint8 `Ifx_IntIpoCur_s16_u8`(sint16 Xin, sint16 N, const sint16* X_Array, const uint8* `Val_Array`);
// where,
// Xin: Input value
// N: Number of axis points
// X_Array: Pointer to X distribution
// `Val_Array`: Pointer to Curve values

Without the encapsulation concept the interpolation service has to be called as given below:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Concept Decision

Generally there are two types of parameters:

* First type is the input values to the curve or map.
* Second type is the values and pointers to the respective curve or map.

The input values are normally derived from physical values which are represented as ApplicationDataTypes. But it is possible that such input values are slightly preprocessed before calling the interpolation routine. In this case the interpolation routine is called with local variables which are not passed through RTE  contract phase. An explicit communication shall be needed but would be costly regarding resources. This will make the complete encapsulation of Interpolation calls complex and should be avoided.

The parameters for the values and pointers of the respective curve or map will have a more internal view, because they are derived from the memory representation of a curve or map which is described via RecordLayouts.

To limit the complexity of the handling of the input values two alternatives are possible:

# The generated macro has parameter(s) for the input value(s)

  CurveValue = `Elc_Get_myRunnable_IgnitionCurve`(local_input);

  or

  CurveValue = `Elc_Get_myRunnable_IgnitionCurve`(`Rte_X_input`);

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Needed Information for the Macro Generation

Based on the concept decision in chapter , the macro to be generated looks like below.

(Example for a curve):

#define `Elc_Get_`{Runnable}_{Accesspoint} {RoutineName}((X), {ImplTypeStruct}.{N}, {ImplTypeStruct}.{Axis}, {ImplTypeStruct}.{Values}

To generate this macro following information is needed:

* The generated macro is individual generated for each access point.
* The name of an interpolation routine depends on the type of the interpolation routine and the data types of the axis and output values. Each combination of data types of axis and output of interpolation values has an individual implementation and an individual name of the interpolation routine. To create the name of the interpolation routine it the most complex part of this concept.

  E.g. following curve interpolation routines has to be distinguished:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 概述 to get the Information for Macro Generation
*原文标题：Overview to get the Information for Macro Generation*

Figure  illustrates a rough overview of the workflow of the Macro Encapsulation Concept. The picture anticipates which information has to be prepared by the concept and which information are still available within the MetaModel of AUTOSAR.

Starting from the DataAccessPoint all information has to be collected to generate a macro which encapsulates the call of an interpolation routine. At the DataAccessPoint it is known what interpolation routine will be used and which values shall be the input and output of the interpolation routine. The name of the access point can be chosen directly from the DataAccessPoint. The name of the interpolation routine is taken from the BswModuleEntry. The BswModuleEntry is related to the DataAccessPoint via InterpolationRoutineMapping, RecordLayout and ApplicationDataTypes. RTE  access macros and data types can be derived from the ImplementationDataTypes which are linked to a DataAccessPoint over DataTypeMap and ApplicationDataTypes.

Interpolation routines varies depending on data types of the input and output values.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Non-Ambiguous InterpolationRoutineMapping

There are scenarios where the InterpolationRoutineMapping is not ambiguous and the same RecordLayout fits to more than one Interpolation function. In this scenario from point of data specification it is not clear for the macro encapsulation tool to find out which kind interpolation routine is used. A curve or map can be interpolated or only the lookup behavior can be used. The reason here is the data of the curve or map in memory are still identical in both cases. The user only specifies the data and properties of the curve or map in ARXML and the kind of interpolation is than chosen by the call of a related interpolation routine in code.

For example, `Ifx_IntIpoCur_s16_s16` and `Ifx_IntLkUpCur_s16_s16`.

The possible solution for such a non-ambiguous scenario would be, the macro encapsulation tool generates more than one macros for different interpolation routines. In the case the macros shall have different names to distinguish the different kinds of interpolation routines.

Example, consider `Ifx_IntIpoCur_s16_s16` and `Ifx_IntLkUpCur_s16_s16`,

#define `Elc_Get_myRunnable_IgnitionCurve_Ipo` `Ifx_IntIpoCur_s16_s16`(X_input, Curve.N, Curve.Axis, Curve.Values);

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 通用 Information to BswModuleEntry
*原文标题：General Information to BswModuleEntry*

The BswModuleEntry represents a single API entry (C-function prototype) into the BSW module or cluster. For IFX and IFL the BswModuleEntry is the reference to the interpolation routine and derived from the APIs of the interpolation defined from AUTOSAR in the SWS documents.

For Example, the `IntIpoCur_u16_u16` corresponds to the API `Ifx_IntIpoCur_u16_u16`.

More information is available in the AUTOSAR blueprint files in "`AUTOSAR_MOD_GeneralBlueprints`.zip" in below files.

`AUTOSAR_MOD_BswModuleEntrys_Blueprint`.arxml

`AUTOSAR_MOD_IFX_RecordLayout_Blueprint`.arxml

`AUTOSAR_MOD_IFL_RecordLayout_Blueprint`.arxml

Figure  and Figure  describes the complete overview with different focus.

### 24. Interpolation Routine and Record layouts

The relationship between record layouts and interpolation routines is specified in InterpolationRoutineMappingSet. The interpolation routine is represented as BswModuleEntry and implements a particular interpolation method which is denoted in shortLabel of InterpolationRoutine. The intended interpolation method is denoted in InterpolationMethod of SwDataDefProps.

Figure  shows the MetaModel of mapping a Record Layout to a specific interpolation routine (Note: This picture is taken from `AUTOSAR_TPS_SoftwareComponentTemplate` Description, Figure 5.53 ).

The structure and memory representation of a curve or map is described on data specification level via RecordLayout. Figure  is taken from the `AUTOSAR_TPS_SoftwareComponentTemplate`, Figure 5.48 .

### 25. 结构 of the Name of a Interpolation Routine
*原文标题：Structure of the Name of a Interpolation Routine*

The name of the interpolation routine has a defined build convention based on an inherent semantic.

Examples:

* `Ifx_IntIpoCur_u8_s8`
* `Ifl_IntIpoMap_f32f32_f32`

The structure of a name looks as follows:

{ModuleID}_{Method}{Type}_{InputDataType(s)}_{OutputDataType}

The single naming parts are described as follows:

*[{ModuleID}] Only two module IDs are possible: "Ifx" for integer interpolations and "Ifl" for float interpolations. A mix of integer and float interpolations is not intended.
*[{Method}] There are different methods available. A translation map is suggested to get a mapping between a specific method and the method part of the name of the interpolation routine. The method is described within ApplicationDataType.interpolationMethod. E.g. Linear IntIpo, Lookup IntLkUp
*[{Type}] If the interpolation has to be done for a curve or map can be chosen via category of the ApplicationDataType.category. Category CURVE Cur, MAP Map
*[{InputDataType(s)}] With the help of the ImplementationDataTypeElements the data types for the inputs are identified. Additionally the types of the axis can be derived via DataTypeMap from the DataTypes of the ApplicationDataTypes.valueAxisDataType.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 数据类型 of the Number of Axis Points
*原文标题：Data Type of the Number of Axis Points*

The macro encapsulation concept does not need this data type explicitly but the interpolation routine applies a special data type for the parameter for the number of axis points. Additionally the number of axis point is an element which is located in memory as well as the axis and values of a curve or map. Therefore the data type for the number of axis points has to be defined when the ImplementationDataType is derived from an ApplicationDataType.

The rule to determine the data type for the number of axis points is quite easy:

The number of axis points gets the same data type as the first axis.

### 27. Impacts for curves：
*原文标题：Impacts for curves:*

A curve has only one axis. Therefore the number of axis points gets the same data type as the x axis. If the x axis is a sint8 axis the number of axis points will be of data type sint8 too. It is clear that negative numbers of axis points makes no sense but 127 axis points should be sufficient. If the axis is from uint8, sint16 or uin16 type the number of axis points use the same data types too.

### 28. Impacts for maps：
*原文标题：Impacts for maps:*

A map has two axes. Here the number of axis points of the x and y axes gets the data type of the x axis. The reason for this is to avoid fill bytes within definition of ImplementationDataType. To understand this point further a definition has to be made. The order of elements within an ImplementationDataType has a well defined sequence. First the elements with the number of axis points have to be defined, than the axis/axes and finally the values of the curve or map are defined. The implementation of an ImplementationDataType can be done as structure or array. As example:

Struct
{
  uint8 Nx;
  uint8 Ny;
  uint8 AxisX[];
  uint16 AxisY[];
  sint8 Values[];
} Map;

Assuming a processor with natural alignment ("naturally aligned" means that any element is aligned to at least a multiple of its own size. For example, a 4-byte object is aligned to an address that's a multiple of 4, an 8-byte object is aligned to an address that's a multiple of 8, etc.) of memory elements no gap byte is needed between Nx and Ny. If Ny has the same type as the Y axis between Nx and Ny is a fill byte.

### 29. Implementation of Macro Encapsulation Concept

This chapter describes how the encapsulation macros will be generated and the needed information is picked up. This chapter refers to chapter  where the needed information for the macro encapsulations is described.

Three parts have to be generated:

* Name of the encapsulation macro
* Name of the interpolation routine
* Parameters of the interpolation routine

Abstract form of the generated macro:

#define {NameOfMacro} {RoutineName}((X),{Parameters})

Details of the generated macro (Example using a curve):

#define `Elc_Get_`{Runnable}_{NameOfAcessPoint} {RoutineName}(X)((X), {RteAccess}.{N}, {RteAccess}.{Axis}, {RteAccess}.{Values}

### 30. Generation of the Name of the Encapsulation Macro

The name of the encapsulation macro is derived from the name of the access point and a suffix according to the pattern:

`Elc_Get_`{NameOfRunnable}_{NameOfAcessPoint}

In this context Figure  shows the runnable access to a calibration port. This picture is taken from `AUTOSAR_TPS_SoftwareComponentTemplate`, 7.29 .

### 31. Generation of the Name of the Interpolation Routine

The name of the interpolation routine is defined in the MetaModel as BswModuleEntry. The Macro Encapsulation Generator Tool has to parse the MetaModel in following sequence to get the name of the interpolation routine:

# Start at DataAccess -> RunnableEntity -> ParameterAccess
# Via AutosarParameterRef the DataPrototype can be found
# Via AutosarDataPrototype the AutosarDataType can be found
# The AutosarDataType has a relation to SwDataDefProps
# Via SwDataDefProps a SwRecordLayout is chosen
# Via SwRecordLayout and InterpolationRoutineMapping and InterpolationRoutine the needed interpolation routine candidate's call can be found in BswModuleEntry.
# Finally the appropriate InterpolationRoutine is then determined by matching the data types of the ImplementationDataType.

The structure of a name looks as follows:

{ModuleID}_{Method}{Type}_{InputDataType(s)}_{OutputDataType} ----- 6 ----- ------------ 7 ------

### 32. Generation of the Parameters of the Interpolation Routine for ImplementationDataType of Category 结构
*原文标题：Generation of the Parameters of the Interpolation Routine for ImplementationDataType of Category STRUCTURE*

As decided in the concept decision in chapter  input variables for the curve or map interpolation are not encapsulated. In general they are available over DataAccess.dataDefProperties.swCalprmAxisSet.variableRef.

Only the parameters for the number of axis points, pointer to the axis and pointer to the curve or map values are generated. To get these parameters RTE  generated information is used.

The RTE generates typedefs and structures depending on ImplementationDataTypes which are the based on SwRecordLayouts of the corresponding curves or maps. The Macro Encapsulation Generator Tool has to know the same methods like the RTE to derive a typedef and structure from an ImplementationDataType to be able to use that information.

By default the RTE generates for each ImplementationDataType with category attribute set to "STRUCTURE" following typedef in the RTE Data Type header file "`Rte_Type`.h". This is done in the "RTE Contract" and "RTE Generation" phase.

typedef struct { <elements> } <name>;

where <elements> is the record element specification and <name> is the shortName of the Structure Implementation Data Type.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Generation of the Parameters of the Interpolation Routine for ImplementationDataType of Category ARRAY

There are approaches where the ImplementationDataType for e.g. a Curve is not a STRUCTURE but an ARRAY. Obviously this requires that the same primitive data types are used for number of Axispoints, Axis points, Values.

Nevertheless, in this case the naming convention described in chapter  is not fully applicable. Therefore the required positions in the implementation array need to be determined by a kind of "address calculation" based on the SwRecordLayout and the current size of the corresponding curve / map. The location of the size element can be found according to the naming conventions in chapter  and the record layout.

### 34. 附录
*原文标题：Appendix*

| Class | ApplicationDataType (abstract) | < | < | < |
|---|---|---|---|---|
| Note | ApplicationDataType defines a data type from the application point of view. Especially it should be used whenever something "physical" is at stake. |  |  |  |

An ApplicationDataType represents a set of values as seen in the application model, such as measurement units. It does not consider implementation details such as bit-size, endianess, etc.

| It should be possible to model the application level aspects of a VFB system by using ApplicationDataTypes only. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, AtpBlueprint, AtpBlueprintable, AtpClassifier, AtpType, AutosarDataType, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Subclasses | ApplicationCompositeDataType, ApplicationPrimitiveDataType | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| - | - | - | - | - |

| Class | AutosarDataPrototype (abstract) | < | < | < |
|---|---|---|---|---|
| Note | Base class for prototypical roles of an AutosarDataType. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。
