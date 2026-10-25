# Modeling and Naming Aspects for Documentation, Measurement, and Calibration (`AIMeasurementCalibrationDiagnostics`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 537 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_AIMeasurementCalibrationDiagnostics_537\AUTOSAR_CP_TR_AIMeasurementCalibrationDiagnostics.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_AIMeasurementCalibrationDiagnostics_537\AUTOSAR_CP_TR_AIMeasurementCalibrationDiagnostics.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_AIMeasurementCalibrationDiagnostics_537\zzgen\CP_TR_AIMeasurementCalibrationDiagnostics.complete.txt`

## 文档简介

This document is specific for the powertrain domain. For the powertrain domain efficient handling of calibration and measurement is of great importance.

This document gives some methodological background on calibration relevant issues of AUTOSAR independent of any application domain.

Examples are provided. Although they might resemble standardized application interfaces they are simply to be seen as examples) etc. but in this document for better readability the paths were shortened to /AUTOSAR/Units a.s.o..].

The main focus of this document, however, is to give a proposal how to automatically generate display names: the display name as used in this document is not identical to the `DISPLAY_IDENTIFIER` for A2L but identical to the attribute Name itself.] for measurement, calibration and diagnostic tools (MCD). If some assumptions and specific modeling rules are fulfilled then automatic generation leads to adequate display names. Of course, manual definition of display names is still possible and in cases the generated name is not suitable even necessary.

This document does not describe a complete mapping to MCD-2 MC (A2L, ). Its current focus is on variable and parameter prototype

## 章节详细内容

### 1. 范围
*原文标题：Scope*

This document is specific for the powertrain domain. For the powertrain domain efficient handling of calibration and measurement is of great importance.

This document gives some methodological background on calibration relevant issues of AUTOSAR independent of any application domain.

Examples are provided. Although they might resemble standardized application interfaces they are simply to be seen as examples) etc. but in this document for better readability the paths were shortened to /AUTOSAR/Units a.s.o..].

The main focus of this document, however, is to give a proposal how to automatically generate display names: the display name as used in this document is not identical to the `DISPLAY_IDENTIFIER` for A2L but identical to the attribute Name itself.] for measurement, calibration and diagnostic tools (MCD). If some assumptions and specific modeling rules are fulfilled then automatic generation leads to adequate display names. Of course, manual definition of display names is still possible and in cases the generated name is not suitable even necessary.

This document does not describe a complete mapping to MCD-2 MC (A2L, ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. How to read this document

### 3. Conventions used

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.
* SHOULD: This word, or the adjective "RECOMMENDED", means that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Numbering of Rules

All rules or recommendations are identified by an ID. See   for name pattern of such identifiers and  for the predefined names including the ones used in this document.

The ID starts with "`TR_MCM`" for the Modeling Rules for Measurement and Calibration followed by five digits ().

The ID starts with "`TR_MCG`" for the Generation Rules for Measurement and Calibration followed by five digits ().

The ID starts with "`TR_MCA`" for the Assumptions made for being able to use specific generation rules (). They are introduced for easier stating which assumptions are true for your project (line) and then to decide which rules (`TR_MCR`) are applicable.

The ID starts with "`TR_MCR`" for the Requirements for Measurement and Calibration followed by five digits ().

Terms taken from the Meta model like e.g. AutosarDataPrototype are written in italic.

The following table gives an overview of renumbered or deleted rules:

| New | Old | Comment |
|---|---|---|
|  | For avoiding same numbers for requirements and rules etc. |  |
|  | For avoiding same numbers for modeling rules from generation rules etc. |  |
|  | For avoiding same numbers for assumptions and rules etc. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym | Description |
|---|---|
| AI | Application interfaces |
| component | components are the SwComponentPrototypes of a CompositionSwComponentType |
| cp-path | SwComponentPrototype-Path, see chapter |
| dataElement or data element | Element of a port interface of type AutosarDataPrototype, |

dataElements are VariableDataPrototypes of a PortInterface
| data prototype | An AutosarDataPrototype like VariableDataPrototype or ParameterDataPrototype etc. |
|---|---|
| Descriptor | <X>Descriptor: Short form for "ShortName FlatInstanceDesriptor in a FlatMap of target element x of element type X" |
| Element | Element might be a prototype element like SwComponentPrototype, AutosarDataPrototype etc. or an ARElement |
| MCD | Measurement, Calibration and Diagnostic |
| name | Used as short form for ShortName if not mentioned otherwise |
| parameter | Element of a ParameterInterface of type ParameterDataPrototype, parameters are the ParameterDataPrototypes of a PortInterface |
| pb-path | PortPrototypeBlueprint-Path, see chapter |
| P/L-list | List with abbreviations for physical and logical types. |

See chapter .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 相关文档
*原文标题：Related Documentation*

### 7. 需求
*原文标题：Requirements*

Here you find a listing of the requirements together with a short description.

* For display names a global name space within one ECU is sometimes required by Measurement and Calibration Tools or Calibration Data Exchange Formats like for example A2L. Therefore this shall be supported.
* For one calibration team at OEM or Supplier site: The display name of a software signal shall be stable and identical in all systems to be calibrated by the team independent of the project, the project configuration or the underlying product or product line software architecture.
* There shall be a default derivable display name.
* Automatic generation of display names shall be possible.
* Automatic generation/derivation of model element names from display names should be possible.
* It should be possible but the exception in practice to manually define a display name for a data prototype. See also requirements for automatic generation and default display names.
* A display name should be kept as short as possible. It should not exceed 31 characters. In the best case a display name would not exceed 16 characters.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Traceability

The following table references the requirements specified in chapter  and links to the fulfillments of these.

| Requirement | Satisfied by |
|---|---|
| RS_MCR_90000 |  |
| RS_MCR_90001 |  |
| RS_MCR_90002 |  |
| RS_MCR_90003 |  |
| RS_MCR_90004 |  |
| RS_MCR_90005 |  |
| RS_MCR_90006 |  |
| RS_MCR_90008 |  |
| RS_MCR_90009 |  |
| RS_MCR_90011 |  |
| RS_MCR_90014 |  |
| RS_MCR_90015 |  |
| RS_MCR_90016 |  |
| RS_MCR_90781 |  |
| RS_MCR_90782 |  |
| RS_MCR_90783 |  |
| RS_MCR_90784 |  |

### 9. Methodological Background

The following chapters give background information on aspects of the AUTOSAR metal model and methodology. They can be skipped except for chapter  and  that introduce some new aspects that are important for understanding the following topics of the document.

### 10. SwCalibrationAccess

Display Names have to be provided for all instances of AutosarDataPrototypes for which the attribute SwCalibrationAccess is set via its SwDataDefProps to "readOnly" or "readWrite".

The information SwCalibrationAccess is mandatory for ApplicationDataTypes but can be overwritten. For example the SwCalibrationAccess can be overwritten in AutosarDataPrototypes or FlatInstanceDescriptor.swDataDefProps a.s.o. (see  in ,  in ).

In the current standardization of application interfaces () the information SwCalibrationAccess of ApplicationDataTypes is set to ReadOnly.

Example:

...
<VARIABLE-DATA-PROTOTYPE>
<SHORT-NAME>EngN</SHORT-NAME>
<TYPE-TREF DEST="APPLICATION-DATA-TYPE">/OEM1/ApplicationDataTypes/N1</TYPE-TREF>
<SW-DATA-DEF-PROPS>
	...
	<SW-CALIBRATION-ACCESS>NOT-ACCESSIBLE</SW-CALIBRATION-ACCESS>
	...
</SW-DATA-DEF-PROPS>
</VARIABLE-DATA-PROTOTYPE>
...

overwrites

...
<APPLICATION-PRIMITIVE-DATA-TYPE>
<SHORT-NAME>N1</SHORT-NAME>
<CATEGORY>VALUE</CATEGORY>
<SW-DATA-DEF-PROPS>
	<SW-DATA-DEF-PROPS-VARIANTS>
		<SW-DATA-DEF-PROPS-CONDITIONAL>
			...
			<SW-CALIBRATION-ACCESS>READ-ONLY</SW-CALIBRATION-ACCESS>
			...

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. FlatMap for Measurement and Calibration 数据
*原文标题：FlatMap for Measurement and Calibration Data*

Whereas SystemSignals serve for inter-ECU-communication, software signals are implicitly used within ECU-internal communication. There is no model element called software signal because they are represented by instance references (InstanceRef) to an AutosarDataPrototype. However, for calibration engineers there is the need to have unique names for software signals similar as there is the need to have unique names for inter-ECU-communication. These unique names for software signals are identical to the display names that are discussed in this document.

The AUTOSAR methodology provides means to specify unique names e.g. to be used to generate A2L-files out of it . This is done via so-called FlatMaps (see Figure ). The FlatMap consists of several FlatInstanceDescriptors. In our context a FlatInstanceDescriptor represents exactly one VariableDataPrototype or a ParameterDataPrototype and attaches a unique name (shortName) to it. This shortName can later be used as the display name of the software signal. In  the following mapping is recommended to A2L:

FlatInstanceDescriptor.shortName ->

MEASUREMENT Name for VariableDataPrototypes

CHARACTERISTIC Name for ParameterDataPrototypes

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. AliasNameSet for Display Names

An AliasNameAssignment (see Figure ) can be used to associate an alternative name to a flat instance descriptor or an Identifiable .

In  the following mapping is recommended to A2L :

AliasNameAssignment.shortLabel ->

MEASUREMENT -> `DISPLAY_IDENTIFIER` for VariableDataPrototypes

CHARACTERISTIC -> `DISPLAY_IDENTIFIER` for ParameterDataPrototypes

but

`SYSTEM_CONSTANT` -> Name for SwSystemconsts

Example for system constants:

<ALIAS-NAME-ASSIGNMENT>
	<SHORT-LABEL>`ENGNRCYL_SC`</SHORT-LABEL>
	<IDENTIFIABLE-REF DEST="SW-SYSTEMCONST">/OEM1/SwSystemconsts/EngNrCyl</IDENTIFIABLE-REF>
</ALIAS-NAME-ASSIGNMENT>

Since FlatMaps do not allow referencing SwSystemconsts the alias mechanism is used to specify unique display names for SwSystemconsts.

Aliases or `DISPLAY_IDENTIFIER` are not supported for SwSystemconsts, neither in AUTOSAR nor in ASAM MCD-2MC .

AliasNameAssignments are also needed if r- and p-ports both have an entry in the FlatMap but shalll have the same name in the generated A2L-file. Within the FlatMap the names of the r- and p-ports have to be different because of the name space the FlatMap defines.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Unique Symbolic Names for SW 组件类型 et. al.
*原文标题：Unique Symbolic Names for SW Component Types et. al.*

In some cases the RTE requires unique names although elements are contained in different name spaces to avoid name clashes in c code. For these cases the concept of symbol properties (SymbolProps) as special case of ImplementationProps was introduced .

Symbol properties are only available for atomic software component types because compositions are flattened and not visible in c code.

<APPLICATION-SW-COMPONENT-TYPE>
	<SHORT-NAME>TMdl</SHORT-NAME>
	<SYMBOL-PROPS>
		<SHORT-NAME>`AR_TMdl`</SHORT-NAME>
		<SYMBOL>`AR_TMdl`</SYMBOL>
	</SYMBOL-PROPS>
</APPLICATION-SW-COMPONENT-TYPE>

Symbol properties are also available for other elements like for example RunnableEntity and ImplementationDataType.

### 14. FlatMap for Unique Names of SW 组件 Prototypes
*原文标题：FlatMap for Unique Names of SW Component Prototypes*

Within the ECU extract of a system the FlatMap entries are needed to specify unique names for component prototypes .

Example:

The example specifies a unique name for the component prototype "Eng". Please note that the example from Figure 2 was extended by an additional component hierarchy "Pt" to make example more real.

<FLAT-MAP>
	<SHORT-NAME>ARMap</SHORT-NAME>
	<INSTANCES>
		<FLAT-INSTANCE-DESCRIPTOR>
			<SHORT-NAME>Eng</SHORT-NAME>
			<UPSTREAM-REFERENCE-IREF>
				<CONTEXT-ELEMENT-REF DEST="ROOT-SW-COMPOSITION-PROTOTYPE">/OEM1/Systems/System/TopLvl</CONTEXT-ELEMENT-REF>
				<CONTEXT-ELEMENT-REF DEST="SW-COMPONENT-PROTOTYPE">/OEM1/SwComponentTypes/TopLvl/Pt</CONTEXT-ELEMENT-REF>
				<TARGET-REF DEST="SW-COMPONENT-PROTOTYPE">/OEM1/SwComponentTypes/Pt/Eng</TARGET-REF>
			</UPSTREAM-REFERENCE-IREF>
		</FLAT-INSTANCE-DESCRIPTOR>
	</INSTANCES>
</FLAT-MAP>

### 15. Virtual Name Spaces

In this document we use the term "virtual name space for {element}" to denote that the name of all elements of kind {element} are unique within a specific ARPackage. This means that for all ARPackages being subpackages of this package as well as other elements of the meta model like SwComponentTypes that define their own name spaces according to the meta model this property of being able to define its own name space is ignored.

It also should be taken into account that there are restrictions to the AUTOSAR meta model specified for the RTE , i.e. the meta model allows defining more name spaces than the actual implementations of the RTE would support. E.g.  requires unique names for SwComponentTypes regardless of the ARPackage hierarchy. However, there is the possibility to add a symbolic name in a later stage of development via SymbolProps (see chapter ).

AUTOSAR allows defining so called global elements . Global elements can be referenced by using this reference base. It means that the ShortNames of these elements are unique within the current package (if the base is the current package) or assumed to be unique in the referenced ARPackage.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. References in Documentation

There are several possibilities for references within textual documentation. In this context the two most important ones are:

* Usage of Xref
* Usage of Tt

Both are used within paragraphs (<P>).

Example:

<P>
	<L-1 L="EN">This is a direct reference to a system constant
		<XREF SHOW-RESOURCE-SHORT-NAME="SHOW-SHORT-NAME">
			<REFERRABLE-REF DEST="SW-SYSTEMCONST">/OEM1/SwSystemconsts/DIESEL</REFERRABLE-REF>
		</XREF>.
	</L-1>
</P>

This would e.g. be printed like this:

"This is a direct reference to a system constant 'DIESEL'."

Since instance references are not supported within paragraphs one possibility would be to first define a FlatInstanceDescriptor and to reference this element.

Example:

<P>
	<L-1 L="EN">This is a reference to a sw signal
		<XREF SHOW-RESOURCE-SHORT-NAME="SHOW-SHORT-NAME">
			<REFERRABLE-REF DEST="FLAT-INSTANCE-DESCRIPTOR">/AUTOSAR/AISpecification/Flatmaps/PowertrainFlatmap/Eng_n</REFERRABLE-REF>
		</XREF>.
	</L-1>
</P>

This would e.g. be printed like this:

"This is a reference to a sw signal 'Eng_n'."

If there is no flat map then also DocumentContext information can be used for unique names.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Instance cp- and pb-paths

In this chapter new terms are introduced that allow a shortened description of the flat instance descriptors. In the context of calibration and measurement the data prototypes are of relevance.

Definition. The instance cp-path (SwComponentPrototype-Path) is the instance path to the software component prototype + one of its ports prototypes + one of the data prototypes (recursively) of the port interface of the port prototype:

{instance path to sw component prototype}/{port prototype}/{data prototype})_(1..n)

e.g.

/OEM1/Systems/System/TopLvl/Pt/Eng/EngN/EngN

i.e. in Backus Naur Form:

/({ARPackage of System}/)_(1..n) {System.name}/ {RootSwCompositionPrototype.name}/ ({SwComponentPrototype - part of referenced SwComponentType of RootSwCompositionPrototype or parent SwComponentPrototype resp.}/)_(0..n) {PortPrototype of referenced SwComponentType} (/{AutosarDataPrototype of referenced PortInterface or within parent data prototype})_(1..n)

Parent sw component prototype means the SwComponentPrototype referring to the SwComponentType the SwComponentPrototype is part of. E.g. in the cp-path

/OEM1/Systems/System/TopLvl/Pt/Eng/EngN/EngN

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Overall 建模 and Generation Rules
*原文标题：Overall Modeling and Generation Rules*

⌈
The model and the generated model elements shall be compliant to the Meta Model.

Fulfills requirements: `RS_MCR_90783`
⌋

The meta model parts relevant for this document are documented in , , , and .

⌈
The model shall be compliant to the Shall-Rules defined in . Recommendations and optional rules, however, may be violated.

Fulfills requirements: `RS_MCR_90784`
⌋

⌈
The generated display names shall be conformant to the C programming language.

Fulfills requirements: `RS_MCR_90014`
⌋

⌈
If a manually defined display name is available then it shall not be overwritten by a generated one.

Fulfills requirements: `RS_MCR_90005`, `RS_MCR_90008`
⌋

For explanation of "shall" and "recommendation/should" please see chapter .

There are two separate display name schemas, one for prototypes and one for ARElements.

⌈
For ARElements we have the following name parts:

element : {nameSpace}_{data}

with

nameSpace : {ARPackage.name}(_{ARPackage.name})_(0..n) data : {ARElement.name}(_{typeId})

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`, `RS_MCR_90004`, `RS_MCR_90015`, `RS_MCR_90016`
⌋

The {nameSpace} corresponds to the package hierarchy since ARPackages define name spaces.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Name Part Length

A display name of a sw signal should not exceed 31 characters. Therefore we recommend fulfilling the following rules. We are aware that this will not always be possible.

⌈
The {nameSpace} of a sw signal should not exceed 3 characters.

Fulfills requirements: `RS_MCR_90006`
⌋

⌈
It is recommended to further restrict the length of model element names relevant for generating the display names. AutosarDataPrototype names and PortPrototype names should not exceed 23 characters.

Fulfills requirements: `RS_MCR_90006`
⌋

⌈
The suffixes added to distinguish different type identifiers ({typeId}) of AutosarDataPrototypes should not exceed 3 characters.

Fulfills requirements: `RS_MCR_90006`
⌋

### 20. 数据 Prototypes
*原文标题：Data Prototypes*

In this chapter we deal with the {dataInfo} name part that will be needed for {data}.

⌈
{dataInfo} refers to one AutosarDataPrototype.

In case of primitive types we have:

dataInfo : {AutosarDataPrototype.name}

In case of complex types we have:

dataInfo : {AutosarDataPrototype.name} (_{parentData})_(0..n)_{AutosarDataPrototype.name}

with

| parentData : ({AutosarDataPrototype.name} | {index}) |
|---|---|

{index} is needed in case of ArrayElements.

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`
⌋

Example for Records:

Assume we have the port prototype LockgCenSts referencing PortInterface LockgCenSts with data element LockgCenSts with the following ApplicationRecordDataType:

ShortName: LockgCenSts1 recordElement 1: LockgSt recordElement 2: TrigSrc

Then we would have

dataInfo : `LockgCenSts_LockgSt`

or

dataInfo : `LockgCenSts_TrigSrc`

depending which of the two sw signals you are interested in.

Since ArrayElements do not have names only the index number can be used for automatic generation. So in general it is better to define display names manually in this case.

Arrays are handled in section ; they will need the {index} name part.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 数据 Prototypes in DataInterfaces
*原文标题：Data Prototypes in DataInterfaces*

In this chapter we deal with the {data} name part of data interfaces. The general schema is (see ):

data : {port}_{dataInfo}_{typeId}

⌈
For {data} of data prototypes within data interfaces we have the following name parts:

data : {port}_{dataInfo}(_{typeId})_(0..1)

{port} may refer to PortPrototype or PortPrototypeBlueprint, i.e.

port : (PortPrototype.name)

or

port : {PortPrototypeBlueprint.name}

{dataInfo} refers to one data prototype in the role of a dataElement, a parameter or an nvData within the data interface of the port.

{typeId} depends on the type of the final data prototype.

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`, `RS_MCR_90015`
⌋

Example:

Assume we have the port prototype LockgCenSts referencing PortInterface LockgCenSts with data element LockgCenSts with the following ApplicationRecordDataType:

ShortName: LockgCenSts1 recordElement 1: LockgSt recordElement 2: TrigSrc

Then we would have

data : `LockgCenSts_LockgCenSts_LockgSt`

or

data : `LockgCenSts_LockgCenSts_TrigSrc`

depending which of the two sw signals you are interested in.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Increase Readability of Display Names

To further increase the readability of display names the following modeling rules are recommended.

Our examples from the previous chapter were very short, e.g.:

EngN

However, the generated name could also look like this:

TrsmCluStTar

and may even be much longer.

In this case it would improve readability to point out the mean/source as well as the physical or logical meaning of the AutosarDataPrototype and add an underscore before it:

`TrsmClu_StTar`

To even improve readability more the physical or logical types should be written in small letters:

`TrsmClu_stTar`

To be able to do so additional generating and modeling rules are necessary:

⌈
There shall be a small and manageable list of physical and logical types for generating display names. This list is called the P/L-list.

Fulfills requirements: `RS_MCR_90782`
⌋

In chapter  a proposal for such a P/L-List for the powertrain domain is presented.

⌈
The P/L-List is a subset of the keyword abbreviations from .

Fulfills requirements: `RS_MCR_90011`, `RS_MCR_90784`
⌋

However, not all physical types or actions of  are elements of the P/L-list; it would be too large.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. VariableDataPrototypes in SenderReceiverInterfaces

To distinguish between variables that are needed for inter-runnable exchange and variables that are only defined for measurement purposes, the following rule is defined:

⌈
Add a suffix "_MP" for the display name of VariableDataPrototypes that are measurement points. We have

data : {port}_{dataInfo }_MP

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`, `RS_MCR_90009`, `RS_MCR_90011`
⌋

Whether a data prototype is a measurement point or not is specified within SwImplPolicy of SwDataDefProps.

Example:

Assume the following software signal to be defined only for measurement purposes:

`TrsmClu_stTar`

With rule  we then have

`TrsmClu_stTar_MP`

### 24. ParameterDataPrototypes in ParameterInterface

The type of a parameter is characterized by the category of its data type, e.g. MAP, CURVE . An AutosarDataPrototype is in the role of a parameter if it is an ApplicationCompositeElementDataPrototype being part of a ParameterDataPrototype or it is a ParameterDataPrototype itself.

It increases readability if it can be seen at one glance whether it is a variable or a parameter. Thus the following rules are added to distinguish parameters from variables:

⌈
Add a suffix "_C" for "constant" for the display name of a AutosarDataPrototype in the role of a parameter being a single data point (Category of ApplicationDataType equal to VALUE, STRING or BOOLEAN). We have

data : {port}_{dataInfo}_C

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`, `RS_MCR_90009`, `RS_MCR_90011`
⌋

⌈
Add a suffix "_T" for "table" or "curve" for the display name of a AutosarDataPrototype in the role of a parameter being a set of data points with one axis (dependency) (Category of ApplicationDataType equal to CURVE). We have

data : {port}_{dataInfo}_T

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`, `RS_MCR_90009`, `RS_MCR_90011`
⌋

⌈
Add a suffix "_M" for "map", i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. 数据 Prototypes in ClientServerInterfaces
*原文标题：Data Prototypes in ClientServerInterfaces*

In this chapter we deal with the {data} name part of client server interfaces. The general schema is:

data : {port}_{operationInfo}_{typeId}

⌈
For {data} of data prototypes within client server interfaces we have the following name parts:

data : {port}_{operationInfo}(_{typeId})_(0..1)

{port} may refer to PortPrototype or PortPrototypeBlueprint, i.e.

port : (PortPrototype.name)

or

port : {PortPrototypeBlueprint.name}

For {operationInfo} we have

operationInfo: {ClientServerOperation.name}_{dataInfo}

with {dataInfo} being the data prototype information of one of the arguments of the operation (ArgumentDataPrototype).

{typeId} depends on the type of the final data prototype.

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`
⌋

### 26. 数据 Prototypes within InternalBehavior
*原文标题：Data Prototypes within InternalBehavior*

In this chapter we deal with the {data} name part of AutosarDataPrototypes within InternalBehavior.

For InterhalBehavior we have:

* constantMemory
* staticMemory

For SwcInternalBehavior we have:

* arTypedPerInstanceMemory
* explicitInterRunnableVariable
* implicitInterRunnableVariable
* perInstanceParameter
* sharedParameter

For BswInternalBehavior we have:

* perInstanceParameter

The general schema is:

data : {swcInternalBehavior}_{dataInfo}_{typeId}

It is assumed that the internal behavior is not reused within different SwComponentTypes or BswModuleDescriptions, i.e. it is assumed that there is at most one SwComponentType per SwcInternalBehavior and one BswModuleDescription per BswBehavior.

SwcInternalBehavior defines the name space for internal data prototypes similar to the port prototype for the requested or provided data prototypes. Therefore it also has to be considered. Only atomic components do have an internal behavior.

⌈
For {data} of data prototypes within InternalBehavior we have the following name parts:

data : {swcInternalBehavior}_{dataInfo}(_{typeId})_(0..1)

with

| swcInternalBehavior : {{SwcInternalBehavior.name} | Int} |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Name Space

In this chapter we deal with the name space identifier {nameSpace}. The general schema for the name space for ARElements ({element}) is (see )

nameSpace : ({ARPackage.name}/)_(1..n)

The general schema of the name space for prototypes ({prototype}) is (see ):

nameSpace : ({ARPackage.name}/)_(1..n)_{System.name}

Details on the name space concept of AUTOSAR can be found in . Virtual name spaces are defined in chapter .

Every element is part of an ARPackage.

Some prototype elements like SwComponentPrototypes are element of a different name space, for SwComponentPrototypes it is the SwComponentType. For those the {componentHierarchy} is more important than the ARPackage the component type is part of. But for ARElements like PortPrototypeBlueprints, Units, System etc. the {nameSpace} is very important.

In the following some rules are given how to deal with the {nameSpace}.

⌈
An arbitrary abbreviation for the {nameSpace} may be defined for the elements within an ARPackage.

Fulfills requirements: `RS_MCR_90006`
⌋

⌈
For elements within the predefined ARPackage "AUTOSAR" the abbreviation "AR" should be used as part of the {nameSpace}.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. SwSystemconsts

Even constants values already evaluated at compile time can be visible ("readOnly") within a MCD system. For system constants (element : {systemconst}) the general schema is defined as follows (see ):

systemconst : {nameSpace}_{SwSystemconst.name}_{typeId}

⌈
Add a suffix "_SC" for "software configuration" for the display name of a SwSystemconst. We have

systemconst : {nameSpace}_{data}

with

data : {SwSystemconst.name}_SC

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`, `RS_MCR_90009`
⌋

⌈
For a display name of a SwSystemconst use only capital letters.

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`, `RS_MCR_90009`
⌋

Please note:  does not hold for system constants. This is because system constants typically do not contain physical or logical information but represent a feature or functionality.

⌈
Assumption: There is exactly one virtual name space sw for system constants.

Fulfills requirements: `RS_MCR_90006`
⌋

⌈
If there is only one system and exactly one virtual name space for SwSystemconsts we have

systemconst : {SwSystemconst.name}_SC

Fulfills requirements: `RS_MCR_90002`, `RS_MCR_90003`
⌋

In rule  assumption  and  are assumed to be fulfilled.

Example:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 15 章（内容从略，见纯文本全文）

29. PortPrototypeBlueprints
30. ComponentHierarchy
31. SwComponentPrototypes
32. Unique SW-Signal Display Names
33. 附录
34. 附录：Keywords Phys/Log (P/L-List) for Powertrain Domain
35. Change history of AUTOSAR traceable items
36. Traceable item history of this document according to AUTOSAR Release R25-11
37. Added 规范 Items in R25-11
38. Changed 规范 Items in R25-11
39. Deleted 规范 Items in R25-11
40. Traceable item history of this document according to AUTOSAR Release R24-11
41. Added 规范 Items in R24-11
42. Changed 规范 Items in R24-11
43. Deleted 规范 Items in R24-11
