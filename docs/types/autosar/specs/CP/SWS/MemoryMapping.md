# Specification of Memory Mapping (`MemoryMapping`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 128 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_MemoryMapping_128\AUTOSAR_CP_SWS_MemoryMapping.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_MemoryMapping_128\AUTOSAR_CP_SWS_MemoryMapping.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_MemoryMapping_128\zzgen\CP_SWS_MemoryMapping.complete.txt`

## 文档简介

This document specifies mechanisms for the mapping of code and data to specific memory sections via memory mapping files. For many ECUs and microcontroller platforms it is of utmost necessity to be able to map code, variables and constants module wise to specific memory sections. Selection of important use cases:

Avoidance of waste of RAM Besides symbols with defined alignment (e.g. code) further symbols of different alignment (e.g. 8, 16 and 64 bit) and size have to be allocated. If unsorted, the linker will leave gaps in the memory in between those symbols. This is because the microcontroller platform requires a specific alignment of those symbols and the linkers usually do not offer an optimization of variable allocation. This wastage of memory can be circumvented if the symbol are mapped to specific memory sections depending on their alignment. So an according mean is provided where required.

Usage of specific RAM properties Some variables (e.g. the RAM mirrors of the NVRAM Manager) must not be initialized after a non cold-power-on resets. It shall be possible to map them to a RAM section that is not initialized at any reset except cold-power-on-reset. For some variables (e.g. variables that are accessed via bit masks) it improves both performance and code size if these are located within a RAM section that allows bit manipulation instructions of the compiler.

Usage of specific ROM properties In large ECUs with external flash memory there is the requirement to map modules with functions that are called very often to the internal flash memory that allows for fast access and thus higher performance. Modules with functions that are called rarely or that have lower performance requirements are mapped to external flash memory that has slower access.

Usage of the same source code of a module for boot loader and application If a module shall be used both in different contexts (e.g. boot loader and application), it is necessary to allow the mapping of symbols to different memory sections. A mechanism for mapping of code and data to memory sections that is supported by all compilers listed in chapter 3.1 is the usage of pragmas. As #pragmas are very compiler specific, a mechanism that makes use of those #pragmas in a standardized way has to be specified.

Support of Memory Protection and Partitioning The usage of hardware memory protection requires an assignment of symbols to partitions. Therefore an additional separation of symbols into different memory (p

## 模块依赖

Upstream requirements: ,
⌈
The SWS Memory Mapping is applicable for each AUTOSAR basic software module and software component. Therefore the implementation of memory mapping files shall fulfill the implementation and configuration specific needs of each software module in a specific build scenario. See also , ,  and .
⌋

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies mechanisms for the mapping of code and data to specific memory sections via memory mapping files. For many ECUs and microcontroller platforms it is of utmost necessity to be able to map code, variables and constants module wise to specific memory sections. Selection of important use cases:

Avoidance of waste of RAM Besides symbols with defined alignment (e.g. code) further symbols of different alignment (e.g. 8, 16 and 64 bit) and size have to be allocated. If unsorted, the linker will leave gaps in the memory in between those symbols. This is because the microcontroller platform requires a specific alignment of those symbols and the linkers usually do not offer an optimization of variable allocation. This wastage of memory can be circumvented if the symbol are mapped to specific memory sections depending on their alignment. So an according mean is provided where required.

Usage of specific RAM properties Some variables (e.g. the RAM mirrors of the NVRAM Manager) must not be initialized after a non cold-power-on resets. It shall be possible to map them to a RAM section that is not initialized at any reset except cold-power-on-reset.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Memory Mapping specification that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| MAKW | Memory Allocation Key Word |

### 3. 相关文档
*原文标题：Related documentation*

### 4. Input documents

### 5. Related standards and norms

Not applicable.

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for SWS Memory Mapping.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

The user interface of the memory allocation mechanisms is assumed to be supported by any ANSI-C compiler. Instead the implementation of the abstraction inside the memory mapping header files is hardware, compiler and compiler version specific and results in specific #pragmas. So the mode sets made available to the mechanism need to reflect this limitation to be able to map to it accordingly. A dedicated pack-control of structures is not supported. Hence global set-up passed via compiler / linker parameters has to be used. A dedicated alignment control of code, variables and constants is not supported. Hence affected objects shall be assigned to different sections or a global setting passed via compiler / linker parameters has to be used. Originally during specification of abstraction and validation of concept the compilers listed in chapter 3.1 have been considered. The mechanism is limited to those and other compilers supporting the user interface and according #pragma abstraction.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

Upstream requirements: ,
⌈
The SWS Memory Mapping is applicable for each AUTOSAR basic software module and software component. Therefore the implementation of memory mapping files shall fulfill the implementation and configuration specific needs of each software module in a specific build scenario. See also , ,  and .
⌋

### 11. 文件结构
*原文标题：File structure*

### 12. 代码文件结构
*原文标题：Code file structure*

Not applicable.

### 13. 头文件结构
*原文标题：Header file structure*

Upstream requirements: , , ,
⌈
The Memory Mapping shall provide a BSW memory mapping header file if any of the BSW Module Descriptions is describing a DependencyOnArtifact as requiredArtifact.DependencyOnArtifact.category = MEMMAP In this case the file name of the BSW memory mapping header file name is defined by the attribute value requiredArtifact.DependencyOnArtifact.artifactDescriptor.shortLabel in the BSW Module Description.
⌋

Please note that  does support that either several BSW Module Descriptions contributing to the same file (e.g MemMap.h for legacy code) or that the same BSW Module Description specifies a set of memory mapping header files with differnt names for example in case of a BSW Module Description of an ICC2 cluster.

For instance:

Results in the generation of the requested Memory Allocation Key Words in the file MemMap.h

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 需求 traceability
*原文标题：Requirements traceability*

The following tables references the requirements specified in  and links to the fulfillment of these. Please note that if column 'Satisfied by' is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The source code of software modules above the \muC Abstraction Layer (MCAL) shall not be processor and compiler dependent. |  |  |
| SW components shall be tested by a function defined in a common API in the Basis-SW |  |  |
| The AUTOSAR SW Components shall provide information about their dependency from faults, signal qualities, driver demands |  |  |
| AUTOSAR Basic Software Modules shall be compiler and platform independent |  |  |
| All AUTOSAR Basic Software Modules shall avoid the duplication of code |  |  |
| BSW Modules shall support pre-compile configuration |  |  |
| Encapsulation of compiler specific methods to map objects |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| Basic Software Modules shall report wake-up reasons |  |  |
| The Basic Software Module specifications shall specify which other configuration files from other modules they use at least in the |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 功能规范
*原文标题：Functional specification*

### 16. 通用 issues
*原文标题：General issues*

The memory mapping files include the compiler and linker specific keywords for memory allocation into header and source files. These keywords control the assignment of variables and functions to specific sections. Thereby implementations are independent from compiler and microcontroller specific properties. The assignment of the sections to dedicated memory areas / address ranges is not the scope of the memory mapping file and is typically done via linker control files.

  Upstream requirements:
⌈
For each build scenario (e.g. Boot loader, ECU Application) an own set of memory mapping files has to be provided.
⌋

  Upstream requirements:
⌈
The memory mapping file name shall be {Mip}_MemMap.h for basic software modules and {componentTypeName}_MemMap.h for software components where {Mip} is the Module implementation prefix and {componentTypeName} is the name of the software component type.
⌋

Please note that the information of {Mip} is taken from the Basic Software Module Description of the related BSW module as described in  and .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Variables and 代码的映射
*原文标题：Mapping of Variables and Code*

gives a recommendation to the granularity in which the different types of variables and code should be allocated in a C implementation. The referenced subsection ,  and subsection  defines the standardized names for those memory allocation keywords. If an implementation needs to extend the definition of a memory allocation keyword it shall use the refinement possibility for <NAME> as specified in . Additionally, the <PREFIX> of the memory allocation keyword can be adapted conform to .

  Upstream requirements: ,
⌈
Each AUTOSAR basic software module and software component shall support the configuration of the following different Section Types:

* VAR as described in .
* `VAR_FAST` as described in .
* `VAR_SLOW` as described in .
* `INTERNAL_VAR` as described in .
* `VAR_SAVED_ZONE` as described in .
* CONST as described in .
* `CONST_SAVED_RECOVERY_ZONE` as described in .
* `CONFIG_DATA` as described in .
* CALIB as described in .
* CODE as described in .
* `CODE_FAST` as described in .
* `CODE_SLOW` as described in .
* `CALLOUT_CODE` as described in .

The shortcut {ALIGNMENT} means the typical variable alignment which shall be selected according to the standard definition.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Splitting of 模块 in allocatable 存储 Parts
*原文标题：Splitting of Modules in allocatable Memory Parts*

To increase the performance some multi core architectures work with core local memory areas. As a consequence the access speed to specific memory areas depends on the core where the code is executed. For instance a BSW module which is multi core capable by implementation of the Master/Satellite-approach is usually beneficial to split the interface of the BSW module from the "Master" functionality implementation. Another use case is to split a BSW module with several distinct features in different memory parts. Those memory parts are typically composed out of a set of sections (CODE, CONST, VAR) used or the implementation of the feature. This support that those memory parts can be assigned to set of physical controller memories being close to the main user of the feature.

  Upstream requirements:
⌈
When a BSW module is split into allocatable memory parts the <PREFIX> as described in  shall be build up according to  of .
⌋

  Upstream requirements:
⌈
When a BSW module is split into allocatable memory parts all belonging MemorySections.prefix needs to reference a SectionNamePrefix.
⌋

Please note the example given in .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Config Constants versus non-config Constants

There are basically two different kinds of constants in the implementation of an AUTOSAR BSW Module.

# Constants which are used to implement a configurable behavior. For the different config classes of config data (i.e. everything that is placed in <Mip>_Lcfg.c and <Mip>_PBcfg.c) the syntax of Memory Allocation Keywords are:

  {PREFIX}_START_SEC_CONFIG_DATA_{configClass}_{ALIGNMENT}
  {PREFIX}_STOP_SEC_CONFIG_DATA_{configClass}_{ALIGNMENT}

  Note: {configClass} may only be PREBUILD or POSTBUILD. Thereby PREBUILD represents both Pre-Compile time and Link time configuration data.

  See table in .
# Constants which are used to implement a fixed value which is not related to the configuration methodology of AUTOSAR. For non-config constants (i.e. everything that is placed in <Mip>. or <Mip>_<Implementation Extension>.) the Syntax of Memory Allocation Keywords are:

  {PREFIX}_START_SEC_CONST_{ALIGNMENT}
  {PREFIX}_STOP_SEC_CONST_{ALIGNMENT}

  See table in .

### 20. Variable Sections

The following tables define keywords for variable sections:

 Section Type VAR
  Upstream requirements: ,
⌈
| Syntax of Memory Allocation Keyword | {PREFIX}_START_SEC_VAR_{INIT_POLICY}_{ALIGNMENT} |
|---|---|

{PREFIX}_STOP_SEC_VAR_{`INIT_POLICY`}_{ALIGNMENT}
| Description | To be used for all global or static variables. |
|---|---|

The name part _{refinement} shall be used to refine the allocation or initialization behavior.

The name part _{safety} shall contain the safety integrity level with at most one of the strings QM, ASIL_A, ASIL_B, ASIL_C, ASIL_D. In case of QM the name part may be omitted.

The name part _{coreScope} shall contain the core scope qualification with at most one of the strings GLOBAL, LOCAL. In case of GLOBAL the name part may be omitted.

In the related SwAddrMethod one option attribute shall describe the safety integrity level with the possible values {safetyQM, safetyAsilA, safetyAsilB, safetyAsilC, safetyAsilD}. In case of safetyQM the attribute may be omitted.

In the related SwAddrMethod one option attribute shall describe the core scope qualification with at most one of the possible values {coreGlobal, coreLocal}. In case of coreGlobal the attribute may be omitted.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Constant and Calibration Sections

The following tables define keywords for constant and calibration sections.

 Section Type CONST
  Upstream requirements: ,
⌈
| Syntax of Memory Allocation Keyword | {PREFIX}_START_SEC_CONST_{ALIGNMENT} |
|---|---|

{PREFIX}_STOP_SEC_CONST_{ALIGNMENT}
| Description | To be used for global or static constants. |
|---|---|

The name part _{refinement} is the typical period time value and unit of the ExecutableEntitys in this MemorySection. The name part _{refinement} is optional. Units are:

* US microseconds
* MS milli second
* S second

For example: 100US, 400US, 1MS, 5MS, 10MS, 20MS, 100MS, 1S

Please note that deviations from this typical period time are possible due to integration decisions (e.g. RTEEvent To Task Mapping). Further on in special modes of the ECU the code may be scheduled with a higher or lower period.

The name part _{safety} shall contain the safety integrity level with at most one of the strings QM, ASIL_A, ASIL_B, ASIL_C, ASIL_D. In case of QM the name part may be omitted.

The name part _{coreScope} shall contain the core scope qualification with at most one of the strings GLOBAL, LOCAL. In case of GLOBAL the name part may be omitted.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 代码 Sections
*原文标题：Code Sections*

There are different kinds of execution code sections. This code sections shall be identified with dedicated keywords. If a section is not supported by the integrator and micro controller then be aware that the keyword is ignored. The table below defines recommended keywords for code sections:

 Section Type CODE
  Upstream requirements: ,
⌈
| Syntax of Memory Allocation Keyword | {PREFIX}_START_SEC_CODE |
|---|---|

{PREFIX}_STOP_SEC_CODE
| Description | To be used for mapping code to application block, boot block, external flash etc. |
|---|---|

The name part _{refinement} is the typical period time value and unit of the ExecutableEntitys in this MemorySection. The name part _{refinement} is optional. Units are:

* US microseconds
* MS milli second
* S second

For example: 100US, 400US, 1MS, 5MS, 10MS, 20MS, 100MS, 1S

Please note that deviations from this typical period time are possible due to integration decisions (e.g. RTEEvent To Task Mapping). Further on in special modes of the ECU the code may be scheduled with a higher or lower period.

The name part _{safety} shall contain the safety integrity level with at most one of the strings QM, ASIL_A, ASIL_B, ASIL_C, ASIL_D.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 需求 on 存储映射 Header Files
*原文标题：Requirements on Memory Mapping Header Files*

Upstream requirements: , , ,
⌈
The memory mapping header files shall provide a mechanism to select different code, variable or constant sections by checking the definition of the module specific Memory Allocation Key Words for starting a section (see ). Code, variables or constants declared after this selection shall be mapped to this section.
⌋

  Upstream requirements:
⌈
Each BSW memory mapping header file shall support the Memory Allocation Keywords to start and to stop a section for each belonging MemorySection defined in a BswImplementation which is part of the input configuration.
⌋

  Upstream requirements:
⌈
All MemorySections defined in a BswImplementation belong to the {Mip}_MemMap.h memory mapping header file if the BswImplementation does NOT contain a DependencyOnArtifact as requiredArtifact.DependencyOnArtifact.category = MEMMAP
⌋

Please note also .

  Upstream requirements:
⌈
All MemorySection defined in a BswImplementation belong to the memory mapping header file defined by the attribute requiredArtifact.artifactDescriptor.shortLabel if the BswImplementation does contain exactly one DependencyOnArtifact as requiredArtifact.DependencyOnArtifact.category = MEMMAP
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Usage 示例
*原文标题：Usage Examples*

The examples in this section shall illustrate the relationship between the Basic Software Module Descriptions, Software Component Descriptions, the ECU configuration of the Memory Mapping and the Memory Mapping header files.

### 25. 代码 Section
*原文标题：Code Section*

The following example shows ApplicationSwComponentType "MySwc" which contains in its SwcInternalBehavior a RunnableEntity "Run1". The RunnableEntity "Run1" references the SwAddrMethod "CODE" which sectionType attribute is set to code. This expresses the request to allocate the RunnableEntity code into a code section with the name "CODE".

According the SWS RTE  the Runnable Entity prototype in the Application Header File of the software component is emitted as:

Please note that the same Memory Allocation Keywords have to be used for the function definition of "`MySwc_Run1`" and all other functions of the Software Component which shall be located to same MemorySection.

The SwcImplementation "`Impl_MySwc`" associated with the ApplicationSwComponentType "MySwc" defines that it uses a MemorySection named CODE. The MemorySection "CODE" refers to SwAddrMethod "CODE". This indicates that the module specific (abstract) memory section CODE share a common addressing strategy defined by SwAddrMethod "CODE".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Fast Variable Section

The following example shows ApplicationSwComponentType "MySwc" which contains in its SwcInternalBehavior two VariableDataPrototypes "FooBar" and "EngSpd"'. The VariableDataPrototype "FooBar" references a ImplementationDataType which is associated to a SwBaseType defining baseTypeSize = 8. This denotes a variable size of 8 bit for the data implementing "FooBar". The VariableDataPrototype "EngSpd" references a ImplementationDataType which is associated to a SwBaseType defining baseTypeSize = 16. This denotes a variable size of 16 bit for the data implementing "EngSpd".

Both VariableDataPrototypes references the SwAddrMethod "`VAR_FAST_INIT`" which sectionType attribute is set to "var" and the memoryAllocationKeywordPolicy is set to addrMethodShortNameAndAlignment.

This denotes that the variables implementing the associated VariableDataPrototypes have to be sorted according their size into different MemorySections.

Please note that in this example both VariableDataPrototypes have to be implemented by RTE. The RTE again has to provide a BSW Module description defining the used MemorySections.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 代码 Section in ICC2 cluster
*原文标题：Code Section in ICC2 cluster*

The following examples shows a Basic Software Module description of a Code Section in ICC2 cluster:

With this information the Memory Allocation Header shall implement the following MAKW:

* `MEMIF_START_SEC_CODE`
* `MEMIF_STOP_SEC_CODE`
* `NVM_START_SEC_CODE`
* `NVM_STOP_SEC_CODE`

### 28. Callout sections

The following Basic Software Module Description would result in the support of the Memory Allocation Keywords in the MemMap header file:

With this information the Memory Allocation Header shall implement the following MAKW. These are build according to `SEC_CALLOUT_CODE_`... which is derived from BswModuleEntry.ShortName defined on Figure 7.8:

* `COM_START_SEC_CALLOUT_CODE_COM_RXIPDUCALLOUT`
* `COM_STOP_SEC_CALLOUT_CODE_COM_RXIPDUCALLOUT`
* `COM_START_SEC_CALLOUT_CODE_COM_TXIPDUCALLOUT`
* `COM_STOP_SEC_CALLOUT_CODE_COM_TXIPDUCALLOUT`

Nevertheless both memory sections are implemented identical since both are referencing the identical SwAddrMethod and the MemMapGenericMapping is used to configure the MemMap module.

### 29. Allocatable 存储 Parts
*原文标题：Allocatable Memory Parts*

The following example shows an Adc driver which is internally split into an interface part and a kernel part. Usually the kernel part is allocated to memory with high performance for the micro controller core handling the interrupts. In opposite the interface part is usually allocated to memory with a good average performance for all micro controller cores using the Adc module.

The shown configuration would result in the support of following Memory Allocation Keywords in the `Adc_MemMap`.h header file:

* `ADC_AUTOSCANKERNEL_START_SEC_CODE_QM_LOCAL`
* `ADC_AUTOSCANKERNEL_STOP_SEC_CODE_QM_LOCAL`
* ADC_AUTOSCANKERNEL_START_SEC_VAR_INIT_QM_LOCAL_8
* ADC_AUTOSCANKERNEL_STOP_SEC_VAR_INIT_QM_LOCAL_8
* ADC_AUTOSCANKERNEL_START_SEC_VAR_INIT_QM_LOCAL_16
* ADC_AUTOSCANKERNEL_STOP_SEC_VAR_INIT_QM_LOCAL_16
* `ADC_USERIF_START_SEC_CODE_QM_GLOBAL`
* `ADC_USERIF_STOP_SEC_CODE_QM_GLOBAL`
* `ADC_USERIF_START_SEC_VAR_INIT_QM_GLOBAL_8`
* `ADC_USERIF_STOP_SEC_VAR_INIT_QM_GLOBAL_8`

Nevertheless both memory sections are implemented identical since both are referencing the identical SwAddrMethod and the MemMapGenericMapping is used to configure the MemMap module.

### 30. API 规范
*原文标题：API specification*

Not applicable.

### 31. 时序图
*原文标题：Sequence diagrams*

Not applicable.

### 32. 配置规范
*原文标题：Configuration specification*

In general, this chapter defines configuration parameters and their clustering into containers. In order to support the specification  describes fundamentals. It also specifies a template (table) you shall use for the parameter specification. We intend to leave  in the specification to guarantee comprehension.

Chapter  specifies the structure (containers) and the parameters of the module MemMap.

Chapter  specifies published information of the module MemMap.

### 33. How to read this chapter

For details refer to .

### 34. Containers and 配置 parameters
*原文标题：Containers and configuration parameters*

The following chapters summarize all configuration parameters. The detailed meanings of the parameters describe  .

### 35. MemMap

Definition of EcucModuleDef MemMap
⌈
| Module Name | MemMap |
|---|---|
| Description | Configuration of the Memory Mapping module. |
| Post-Build Variant Support | false |
| Supported Config Variants | VARIANT-PRE-COMPILE |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| MemMapAddressingModeSet | 0..* | Defines a set of addressing modes which might apply to a SwAddrMethod. |
| MemMapAllocation | 0..* | Defines which MemorySection of a BSW Module or a Software Component is implemented with which MemMapAddressingModeSet. |

This can either be specified for a set of MemorySections which refer to an identical SwAddrMethod (MemMapGenericMapping) or for individual MemorySections (MemMapSectionSpecificMapping). If both are defined for the same MemorySection the MemMapSectionSpecificMapping overrules the MemMapGenericMapping.
⌋

### 36. MemMapAddressingModeSet

Definition of EcucParamConfContainerDef MemMapAddressingModeSet
⌈
| Container Name | MemMapAddressingModeSet | < | < |
|---|---|---|---|
| Parent Container | MemMap | < | < |
| Upstream mapping defined | - | < | < |
| Description | Defines a set of addressing modes which might apply to a SwAddrMethod. | < | < |
| Multiplicity | 0..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| MemMapSupportedAddressingMethodOption | 0..* |  |
| MemMapSupportedMemoryAllocationKeywordPolicy | 0..* |  |
| MemMapSupportedSectionInitializationPolicy | 0..* |  |
| MemMapSupportedSectionType | 0..* |  |

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| MemMapAddressingMode | 1..* | Defines a addressing mode with a set of #pragma statements implementing the start and the stop of a section. |

⌋

 Definition of EcucStringParamDef MemMapSupportedAddressingMethodOption
⌈
| Parameter Name | MemMapSupportedAddressingMethodOption | < | < |
|---|---|---|---|
| Parent Container | MemMapAddressingModeSet | < | < |
| Upstream mapping defined | - | < | < |
| Description | This constrains the usage of this addressing mode set for Generic Mappings to swAddrMethods. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. MemMapAddressingMode

Definition of EcucParamConfContainerDef MemMapAddressingMode
⌈
| Container Name | MemMapAddressingMode | < | < |
|---|---|---|---|
| Parent Container | MemMapAddressingModeSet | < | < |
| Upstream mapping defined | - | < | < |
| Description | Defines a addressing mode with a set of #pragma statements implementing the start and the stop of a section. | < | < |
| Multiplicity | 1..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| MemMapAddressingModeStart | 1 |  |
| MemMapAddressingModeStop | 1 |  |
| MemMapAlignmentSelector | 1..* |  |

No Included Containers
⌋

 Definition of EcucMultilineStringParamDef MemMapAddressingModeStart
⌈
| Parameter Name | MemMapAddressingModeStart | < | < |
|---|---|---|---|
| Parent Container | MemMapAddressingMode | < | < |
| Upstream mapping defined | - | < | < |
| Description | Defines a set of #pragma statements implementing the start of a section. | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucMultilineStringParamDef | < | < |
| Default value | - | < | < |
| Regular Expression | - | < | < |
| Post-Build Variant Value | false | < | < |
| Value Configuration Class | Pre-compile time | X | All Variants |
| ^ | Link time | - |  |
| ^ | Post-build time | - |  |
| Dependency |  | < | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. MemMapAllocation

Definition of EcucParamConfContainerDef MemMapAllocation
⌈
| Container Name | MemMapAllocation | < | < |
|---|---|---|---|
| Parent Container | MemMap | < | < |
| Upstream mapping defined | - | < | < |
| Description | Defines which MemorySection of a BSW Module or a Software Component is implemented with which MemMapAddressingModeSet. |  |  |

| This can either be specified for a set of MemorySections which refer to an identical SwAddrMethod (MemMapGenericMapping) or for individual MemorySections (MemMapSectionSpecificMapping). If both are defined for the same MemorySection the MemMapSectionSpecificMapping overrules the MemMapGenericMapping. | < | < |  |
|---|---|---|---|
| Multiplicity | 0..* | < | < |
| Configuration Parameters | < | < | < |

No Included Parameters

| Included Containers | < | < |
|---|---|---|
| Container Name | Multiplicity | Description |
| MemMapGenericMapping | 0..* | Defines which SwAddrMethod is implemented with which MemMapAddressingModeSet. |

The pragmas for the implementation of the MemorySelectorKeywords are taken from the MemMapAddressingModeStart and MemMapAddressingModeStop parameters of the MemMapAddressingModeSet for the individual alignments.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. MemMapGenericMapping

Definition of EcucParamConfContainerDef MemMapGenericMapping
⌈
| Container Name | MemMapGenericMapping | < | < |
|---|---|---|---|
| Parent Container | MemMapAllocation | < | < |
| Upstream mapping defined | - | < | < |
| Description | Defines which SwAddrMethod is implemented with which MemMapAddressingModeSet. |  |  |

The pragmas for the implementation of the MemorySelectorKeywords are taken from the MemMapAddressingModeStart and MemMapAddressingModeStop parameters of the MemMapAddressingModeSet for the individual alignments.

That this mapping becomes valid requires matching MemMapSupportedSectionType's, MemMapSupportedSectionInitializationPolicy's and MemMapSupportedAddressingMethodOption's.

| The MemMapGenericMapping applies only if it is not overruled by an MemMapSectionSpecificMapping | < | < |  |
|---|---|---|---|
| Multiplicity | 0..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| MemMapAddressingModeSetRef | 1 |  |
| MemMapMappingSelectorRef | 0..1 |  |
| MemMapSwAddressMethodRef | 1 |  |

No Included Containers
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. MemMapSectionSpecificMapping

Definition of EcucParamConfContainerDef MemMapSectionSpecificMapping
⌈
| Container Name | MemMapSectionSpecificMapping | < | < |
|---|---|---|---|
| Parent Container | MemMapAllocation | < | < |
| Upstream mapping defined | - | < | < |
| Description | Defines which MemorySection of a BSW Module or a Software Component is implemented with which MemMapAddressingModeSet. |  |  |

The pragmas for the implementation of the MemorySelectorKeywords are taken from the MemMapAddressingModeStart and MemMapAddressingModeStop parameters of the MemMapAddressingModeSet for the specific alignment of the MemorySection.

| The MemMapSectionSpecificMapping precedes a mapping defined by MemMapGenericMapping. | < | < |  |
|---|---|---|---|
| Multiplicity | 0..* | < | < |
| Configuration Parameters | < | < | < |

| Included Parameters | < | < |
|---|---|---|
| Parameter Name | Multiplicity | ECUC ID |
| MemMapAddressingModeSetRef | 1 |  |
| MemMapMemorySectionRef | 1 |  |

No Included Containers
⌋

 Definition of EcucReferenceDef MemMapAddressingModeSetRef
⌈
| Parameter Name | MemMapAddressingModeSetRef | < | < |
|---|---|---|---|
| Parent Container | MemMapSectionSpecificMapping | < | < |
| Upstream mapping defined | - | < | < |
| Description | Reference to the MemMapAddressingModeSet which applies to the MemMapModuleSectionSpecificMapping. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 12 章（内容从略，见纯文本全文）

41. MemMapMappingSelector
42. 发布信息
43. 附录
44. 附录
45. Referenced Meta Classes
46. Source 代码示例 for ADC
47. 存储映射 Header 文件示例 for ADC
48. 规范 Items
49. Added 规范 Items in R25-11
50. Changed 规范 Items in R25-11
51. Deleted 规范 Items in R25-11
52. Trace Items not relevant for this document
