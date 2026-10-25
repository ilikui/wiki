# General Specification of Basic Software Modules (`BSWGeneral`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 578 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_BSWGeneral_578\AUTOSAR_CP_SWS_BSWGeneral.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_BSWGeneral_578\AUTOSAR_CP_SWS_BSWGeneral.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_BSWGeneral_578\zzgen\CP_SWS_BSWGeneral.complete.txt`

## 文档简介

This document is the general basic software specification on AUTOSAR Basic Software modules. It complements the specification of BSW modules with as a common specification, which is valid for various BSW modules.

## 模块依赖

This specification is common to all AUTOSAR BSW Modules (see ) and contains only general Specification items, which complement every single BSW Module specification. It shall not be used as a standalone specification.

Example: The CAN Interface module is specified by this specification (General Specification for BSW Modules) and by the document Specification on CAN Interface (SWS CAN Interface).

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document is the general basic software specification on AUTOSAR Basic Software modules. It complements the specification of BSW modules with as a common specification, which is valid for various BSW modules.

### 2. Traceability

The Specification items from this document describe the work products from the BSW Module implementation or their parts with regard to the Basic Software Requirements, which are described in AUTOSAR General Requirements on Basic Software Modules .

For every BSW Module, the traceability between Specification items and Basic Software Requirements is in scope of this document and the according BSW Module Software Specification. See also chapter  - Requirements traceability.

The BSW Module implementation must guarantee traceability to the corresponding Specification items of this document and of the corresponding BSW Module specification.

Some Specification items are not applicable to every BSW Module. In such a case, its description explicitly mentions the condition for its applicability. If no condition is mentioned, the Specification item is applicable for all BSW Modules.

Please refer to AUTOSAR Standardization Template  for further information.

### 3. Document conventions

Code examples, symbols and other technical terms in general are typeset in monospace font, e.g. const.

Terms and expressions defined in AUTOSAR Glossary , within this specification (see chapter  - Acronyms and abbreviations) or in related documentation are typeset in italic font, e.g. Module implementation prefix.

The Basic Software Requirements are described in document SRS BSW General . These are referenced using `SRS_BSW_`<n> where <n> is its requirement id. For instance: `SRS_BSW_00009`.

Every Specification item starts with , where <nr> is its unique identifier number of the Specification item. This number is followed by the Specification item title. The scope of the Specification item description is marked with half brackets and is followed by the list of related requirements from SRS BSW General, between braces.

Example:

 Specification item title

\lceilSpecification item description.\rfloor(`SRS_BSW_`<nr1>, `SRS_BSW_`<nr2>)

References to Specification items from other AUTOSAR documents use the conventions from the according document, for instance .

### 4. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the AUTOSAR Operating System module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| BSW driver | For a list of BSW drivers see , column "AUTOSAR SW layer". |
| Camel case | This document does not aim to specify rules for the camel case notation. Definition of CamelCase according to Wikipedia: |

"Camel case (...) is the practice of writing phrases without spaces or punctuation, indicating the separation of words with a single capitalized letter, and the first word starting with either case. (...)."

Example: MainFunction
| <Ie> | Implementation specific file name extension, see . |
|---|---|
| <Ma> | Module abbreviation, see . |
| <MA> | Capitalized module abbreviation. The Capitalized module abbreviation <MA> is the Module abbreviation <Ma> completely written in upper case. |
| MCAL | The MCAL, Microcontroller Abstraction Layer, is defined in AUTOSAR Layered Software Architecture |
| <Mip> | Module implementation prefix, see . |
| <MIP> | Capitalized module implementation prefix. The Capitalized module implementation prefix <MIP> is the Module implementation prefix <Mip> () completely written in upper case. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 相关文档
*原文标题：Related documentation*

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

This specification is common to all AUTOSAR BSW Modules (see ) and contains only general Specification items on BSW Modules. Some of these specification items may not be relevant to particular BSW Modules, whenever the conditions specified are not fulfilled.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

This document can be used for all domain applications when AUTOSAR Basic Software modules are used.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This specification is common to all AUTOSAR BSW Modules (see ) and contains only general Specification items, which complement every single BSW Module specification. It shall not be used as a standalone specification.

Example: The CAN Interface module is specified by this specification (General Specification for BSW Modules) and by the document Specification on CAN Interface (SWS CAN Interface).

### 11. 文件结构
*原文标题：File structure*

This specification does not completely define the BSW Module file structure. Nevertheless, names of implementation files not specified here must anyway follow .

### 12. 模块 implementation prefix
*原文标题：Module implementation prefix*

The BSW Module implementation prefix is used to form various identifiers used in work products of the BSW Module implementation, e.g. API names, parameter names, symbols and file names. This prefix is mainly formed by the Module abbreviation and, when necessary, additional vendor specific information.

The list of Module abbreviations is available in  within the column "Module Abbreviation".

 Module abbreviation
  Upstream requirements:
⌈
The Module abbreviation <Ma> of a BSW Module shall be the same as defined in Appendix "List of Basic Software Modules".
⌋

The Capitalized module abbreviation <MA> is the Module abbreviation completely written in upper case.

Examples of BSW Module abbreviations: EcuM, CanIf, OS, Com. The corresponding Capitalized module abbreviations are ECUM, CANIF, OS, COM.

 Module implementation prefix
  Upstream requirements: ,
⌈
The Module implementation prefix <Mip> shall be formed in the following way:

<Ma>

Where <Ma> is the Module abbreviation of the BSW Module (), <vi> is its vendorId and <ai> is its vendorApiInfix. The sub part in square brackets  is omitted if no vendorApiInfix is defined for the BSW Module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 模块 implementation files
*原文标题：Module implementation files*

This specification defines the following file types. Some of these types are mandatory for all BSW Modules, other depend on the according BSW Module specification:

| File type, for all BSW Modules | Classification | Example: Com |
|---|---|---|
| Module documentation | mandatory | Not defined. |
| BSW Module description | mandatory | Not defined. See . |
| Implementation source | mandatory | Com.c |
| Implementation header | mandatory | Com.h |
| Pre-compile time configuration source | conditional | Com_Cfg.c |
| Link time configuration source | conditional | Com_Lcfg.c |
| Post-build time configuration source | conditional | Com_PBcfg.c |
| Interrupt frame implementation source | conditional | Gpt_Irq.c |

Note that according to AUTOSAR Methodology  it is possible to deliver a BSW Module with its object files and only part of the source code. See also .

 General file naming convention
  Upstream requirements:
⌈
The name of all BSW Module implementation files shall be formed in the following way:

<Mip>*.*

The sup-part in square brackets  is an optional implementation specific file name extension. The first wildcard * is empty or replaced according to the different types of files specified for the module, e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Imported and exported information

Restrict imported information
  Upstream requirements:
⌈
The BSW Module shall import only the necessary information (i.e. header files) that is required to fulfill its functional requirements.
⌋

Note that the availability of other modules in the basic software depends on the used configuration. This has to be considered before including header files of these modules.

Example: The BSW module implementation is generated by an AUTOSAR toolchain. The module generator has to check before including header files of other modules if the respective module is available in the system according to the used configuration.

 Restrict exported information
  Upstream requirements:
⌈
The BSW Module shall export only that kind of information in their corresponding header files that is explicitly needed by other modules.
⌋

This is necessary to avoid modules importing or exporting functionality that could be misused. Also compile time might possibly be shortened through this restriction.

Example: The NVRAM Manager does not need to know all processor registers just because some implementation has included the processor register file in another header file used by the NVRAM Manager.

### 15. BSW 模块描述
*原文标题：BSW Module Description*

Provide BSW Module description
  Upstream requirements: , , ,
⌈
The BSW Module description (.arxml) shall be provided for the module according to the AUTOSAR Specification of BSW Module Description Template .
⌋

This specification does not define any file of the package structure for the BSW Module Description, as this delivery is specified in AUTOSAR Specification of BSW Module Description Template .

### 16. 模块 documentation
*原文标题：Module documentation*

Provide BSW Module documentation
  Upstream requirements: ,
⌈
The BSW Module documentation shall be provided with the BSW Module implementation.

The following content shall be part of it:

* Cover sheet with title, version number, date, company, document status, document name;
* Change history with version number, date, company, change description, document status;
* Table of contents (navigable);
* Functional overview;
* Source file list and description;
* Deviations to specification
* Deviations to requirements;
* Used resources (interrupts, \muC peripherals etc.);
* Integration description (OS, interface to other modules etc.);
* Configuration description with parameter, description, unit, valid range, default value, relation to other parameters.
* Examples for:

  * The correct usage of the API;
  * The configuration of the module.

The following content may be part of it:

* Memory footprint (RAM, ROM, stack size) together with the module configuration, platform information, compiler and compiler options, which were used for the calculation.
⌋

If possible the Memory footprint documentation may include a dependency formula between configuration elements and used memory (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 代码文件结构
*原文标题：Code file structure*

The code file structure for the BSW Module implementation is provided in this chapter. Note that the file structure delivered to user may be different.

Example:

Source code is not delivered; various post-build configuration sets are delivered.

### 18. Implementation source

The Implementation source provides the implementation for functionality of the BSW Module.

 Provide Implementation source files
  Upstream requirements:
⌈
The code file structure shall contain one or more files for the implementation of the provided BSW Module functionality: the Implementation source files. The file names shall be formed in the following way:

<Mip>.c
⌋

 Declarations within Implementation source files are restricted
  Upstream requirements:
⌈
The Implementation source files of the BSW Module shall declare all constants, global data types and functions that are only used by the module internally. Pre-link time configuration parameters are an exception of this rule.
⌋

To allow the compiler to check for consistency between declaration and definition of global variables and functions, the Implementation source shall include its own header file.

 Include Implementation header
  Upstream requirements:
⌈
The module Implementation source files of the BSW Module shall include its own Implementation header.
⌋

The Memory mapping header is necessary to enable the BSW Module to access the module specific functionality provided by the BSW Memory Mapping .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Link time 配置 source
*原文标题：Link time configuration source*

The Link time configuration source contains definitions of link time configuration parameters for the BSW Module.

 Provide Link time configuration source files
  Upstream requirements:
⌈
If the BSW Module implementation contains link time configuration parameters defined as const, the code file structure shall contain one or more files for their definition: the Link time configuration source files. The file names shall be formed in the following way:

<Mip>_Lcfg.c or <Mip>_Cfg.c
⌋

 Define all Link time configuration parameters
  Upstream requirements:
⌈
The Link time configuration source shall contain definitions for all link time configuration parameters specified for this module.
⌋

See also chapter  - Link time configuration.

### 20. Post-build time 配置 source
*原文标题：Post-build time configuration source*

The Post-build time configuration source contains definitions of post-build time configuration parameters for the BSW Module.

 Provide Post-build time configuration source files
  Upstream requirements:
⌈
If the BSW Module implementation contains post-build time configuration parameters, then the code file structure shall contain one or more files for their definition: the Post-build time configuration source files. The file names shall be formed in the following way:

<Mip>_PBcfg.c
⌋

 Define all Post-build time configuration parameters
  Upstream requirements:
⌈
The Post-build time configuration source files shall contain definitions for all post-build time configuration parameters specified for this module. Definitions of Precompile and Linktime configuration parameters may as well be placed in Post-build time configuration source files.
⌋

See also chapter  - Post-build time configuration.

Rationale for adding Precompile and Linktime configuration parameters in Post-build time configuration source files:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Interrupt frame implementation source

The Interrupt frame implementation source contains implementation of Interrupt frame routines of the BSW Module.

The implementation of Interrupt frames, done within the Interrupt frame implementation source, is separated from the implementation of Interrupt service routines, which is done within the Implementation source ()

This separation enables flexibility in the usage of different compilers and or OS integrations. For instance, the interrupt could be realized as ISR frame of the operating system or implemented directly without changing the driver code. The service routine can be called directly during module test without the need of causing an interrupt.

 Provide Interrupt frame implementation source files
  Upstream requirements:
⌈
If the BSW Module implements Interrupt frames, then the code file structure shall contain one or more files for their implementation: the Interrupt frame implementation source files. The file names shall be formed in the following way:

<Mip>_Irq.c
⌋

 Implement Interrupt frame routines
  Upstream requirements:
⌈
The Interrupt frame implementation source shall contain implementation of all Interrupt frame routines specified for this BSW Module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 头文件结构
*原文标题：Header file structure*

### 23. Implementation header

The Implementation header of the BSW Module provides the declaration of the modules' API. This header file or files are included by other modules that use the BSW Modules' API.

 Provide Implementation header file
  Upstream requirements:
⌈
The header file structure shall contain one or more files that provide the declaration of functions from the BSW Module API: the Implementation header files. The file names shall be formed in the following way:

<Mip>.h

At least the file <Mip>.h shall be available.
⌋

 Content of Implementation header
  Upstream requirements: ,
⌈
The Implementation header files may contain extern declarations of constants, global data and services. They shall at least contain those declarations of constants, global data and services that are available to users of the BSW Module.
⌋

To avoid double and inconsistent definition of data types in both BSW Module and Software Components, common data types are defined in the RTE Type header file. This file is included in BSW Module indirectly through its Application Types Header File.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Application Header 文件
*原文标题：Application Header File*

If the BSW Module implements AUTOSAR Services, the according Application Header File is generated with the RTE. This file provides interfaces for the interaction of the BSW Module with the RTE. The Application Header File is named Rte_<swc>.h, where <swc> is the Short Name of the according Software Component Type.

 Include Application Header File
  Upstream requirements:
⌈
If the BSW Module implements AUTOSAR Services, then it shall include its Application Header File in module files using RTE interfaces.
⌋

 Restrict inclusion for Application Header File
  Upstream requirements:
⌈
The Application Header File shall not be included in BSW Module files that are included directly or indirectly by other modules.
⌋

If the Application Header File is included in module files which are included directly or indirectly by other modules, other Services or CDDs would also include several Application Header Files and this is not supported by RTE. See Specification of RTE  - section "File Contents", requirement .

More information about the Application Header File can be found in the Specification of RTE  - section "Application Header File".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Version check

The integration of AUTOSAR BSW Modules is supported by the execution of Inter Module Checks: Each BSW Module performs a pre-processor check of the versions of all imported include files. During configuration, a methodology supporting tool checks whether the version numbers of all integrated modules belong to the same AUTOSAR major and minor release, i.e. if all modules are from the same AUTOSAR baseline. If not, an error is reported.

The execution of Inter Module Checks is necessary to avoid integration of incompatible modules. Version conflicts are then detected in early integration phase.

 Perform Inter Module Checks
  Upstream requirements:
⌈
The BSW Module shall perform Inter Module Checks to avoid integration of incompatible files: For every included header file that does not belong to this module, the following Published information elements () shall be verified through pre-processor checks:

* Major AUTOSAR Release Number (<MIP>_AR_RELEASE_MAJOR_VERSION)
* Minor AUTOSAR Release Number (<MIP>_AR_RELEASE_MINOR_VERSION)

If the values are not identical to the values expected by the implementation of this module, an error shall be reported.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 需求追踪
*原文标题：Requirements Tracing*

For every BSW Module, both the according BSW specification and this document (SWS BSW General) satisfy requirements from AUTOSAR General Requirements on Basic Software Modules . The following situations are possible:

| Requirement traceability from: | < | Result for BSW Module implementation: |  |
|---|---|---|---|
| ^ | Module SWS | SWS BSW General | ^ |
| 1 | "Not applicable." | "See module's SWS." | Requirement is not applicable for BSW Module. |
| 2 | "Not applicable." | Specified | Requirement is not applicable for BSW Module. The module implementation can ignore specification items from SWS BSW General that are tracing to this requirement. Please attempt also to comments in module's own SWS document. |
| 3 | Specified | "See module's SWS." | Requirement is applicable to BSW Module. The module specific SWS satisfies this requirement. |
| 4 | "Satisfied by SWS BSW General" | Specified | Requirement is applicable to BSW Module. SWS BSW General satisfies this requirement. |
| 5 | Specified | Specified | Requirement is applicable to BSW Module. Both general SWS and module specific SWS are needed to satisfy this requirement. I.e. module specific specification items complement general specification items from SWS BSW General. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 功能规范
*原文标题：Functional specification*

### 28. 通用 implementation 规范
*原文标题：General implementation specification*

### 29. Conformance to MISRA C and C standard

MISRA C describes programming rules for the C programming language and a process to implement and follow these rules.

 Conformance to MISRA C
  Upstream requirements:
⌈
If the BSW Module implementation is written in C language, then it shall conform to the MISRA C 2025 Standard .
⌋

Only in technically reasonable and exceptional cases, a MISRA violation is permissible. Such violations against MISRA rules shall be clearly identified and documented within comments in the C source code.

Example: MISRA violations could be commented next to the instruction causing the violation saying /* MRYY RULE XX VIOLATION: This is the reason why the MISRA rule could not be followed in this special case*/ while YY is two digit year representation of the MISRA version and XX is the MISRA number. For MISRA directives violation the following comment could be used: /* MR12 DIR XX VIOLATION: This is the reason why the MISRA directive was not be followed in this case*/

 Service Interface Conformance to C standard
  Upstream requirements:
⌈
The external interface binding of the BSW Modules shall be conform to ISO/IEC 9899:1999 (C99) standard.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Conformance to AUTOSAR 基础软件需求
*原文标题：Conformance to AUTOSAR Basic Software Requirements*

The BSW Module implementation shall conform to all applicable Basic Software Requirements, which are described in document SRS BSW General .

Note that some BSW Module specifications, in particular included code examples, may ignore some General BSW requirement for sake of simplicity. Examples:

* Memory abstraction is not used within the BSW specification text because of readability.
* The use of pre-processor directives (#defines) without "u" or "s" is widely present in the specifications, but this violates MISRA.

However, the implementation shall not interpret this as a simplification, redefinition or relaxation of general BSW requirements.

### 31. Conformance to AUTOSAR Methodology

The BSW Module implementation shall consider the AUTOSAR (see chapter ):, e.g. supporting the capability use cases Develop Basic Software and Integrate Software for ECU.

 Support to tool-based configuration
  Upstream requirements:
⌈
The BSW Module implementation shall support a tool based configuration, as described in AUTOSAR Methodology .
⌋

For more information about ECU configuration, see also AUTOSAR Specification of ECU Configuration .

With the AUTOSAR Methodology it is possible to configure an AUTOSAR ECU out of BSW Modules provided as source code and out of BSW Modules provided as object code, or even mixed. This must be of course supported by the implementation, i.e. it shall not require that the source code is always part of the delivery.

 Support object code delivery and configuration
  Upstream requirements:
⌈
The BSW Module implementation shall support configuration of its link-time and post-build configuration parameters even if only the object code and the corresponding header files are available, i.e. even if the source code files are not available.
⌋

### 32. Platform independency

According to their dependency on implementation platform, this specification classifies BSW Modules in two distinct categories:

* Platform independent BSW Modules: All BSW Modules except Complex Drivers, MCAL modules and the OS.
* Platform dependent BSW Modules: MCAL modules, Complex Drivers, OS.

The platform dependency comprises dependencies on used toolchain and hardware, e.g. compiler and processor dependencies

Platform dependent BSW Modules have or may have direct access to microcontroller hardware. Thus, their implementation is platform specific.

Platform independent BSW Modules can be developed once and then be compilable for all platforms without any changes. Any necessary processor or compiler specific instructions (e.g. memory locators, pragmas, use of atomic bit manipulations etc.) have to be encapsulated by macros and imported through include files. This is necessary to minimize number of variants and the according development effort.

The Microcontroller Abstraction Layer (MCAL) is defined in AUTOSAR Layered Software Architecture . The list of BSW Modules from MCAL is available in : Microcontroller Drivers, I/O Drivers, Communication Drivers and Memory Drivers.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Configurability

Plausibility checks on configuration parameters can be made by a configuration tool during configuration or by the pre-processor during runtime. See also

Detailed configuration rules and constraints may also be part of module's own specification and the BSW Module's documentation, which is delivered with the module implementation.

Optional functionalities of a BSW Module shall not consume resources (RAM, ROM and runtime). These functionalities can be enabled or disabled at pre-compile time with suitable configuration parameters, like defined in chapter 10 of the respective BSW Module specification.

 Implement configuration of optional functionality
  Upstream requirements:
⌈
If the BSW Module contains optional functionality, then this functionality shall be enabled (`STD_ON`) or disabled (`STD_OFF`) by a Pre-compile time configuration parameter.
⌋

Disabled functionality will not become part of compiled code. If the code is automatically generated, e.g. after configuration, the disabled functionality may even not be part of source code. It may also never have been implemented, if the BSW software provider does not support this configuration.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Various naming conventions

Naming convention for enumeration literals, status values and pre-processor directives
  Upstream requirements: ,
⌈
All enumeration literals, status values and pre-processor directives (#define) shall be labeled in the following way:

<MIP>_<SN>

Where here <MIP> is the Capitalized module implementation prefix of this BSW Module  and <SN> is the specific name. Only capital letters shall be used. If <SN> consists of several words, they shall be separated by underscore.

The pre-processor directives E_OK and E_NOT_OK are exceptions to this rule.
⌋

Example: The Eeprom driver has the following status values:

`EEP_21_LDEXT_UNINIT`
    `EEP_21_LDEXT_IDLE`
    `EEP_21_LDEXT_BUSY`

Examples for pre-processor directives:

#define `EEP_21_LDEXT_PARAM_CONFIG`
#define `EEP_21_LDEXT_SIZE`

Example for enumeration literals:

typedef enum
{
  `EEP_21_LDEXT_PARAM_CONFIG` = 0,
  `EEP_21_LDEXT_ARE` = 1,
  `EEP_21_LDEXT_EV` = 2
} `Eep_21_LDExt_Notification_Type`;

 Naming convention for Error values
  Upstream requirements:
⌈
Error values shall be named in the following way:

<`MIP_E_`<EN>

Where here <MIP> is the Capitalized module implementation prefix of this BSW Module  <EN> is the error name.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 配置 parameters
*原文标题：Configuration parameters*

The BSW Module implementation must use Configuration parameter names. For further information, see also chapter .

 Naming conventions for Configuration parameters names
  Upstream requirements: ,
⌈
Configuration parameters shall be named in one of the following ways:

Camel case: <Ma><Pn> Upper case: <MA><PN>

Where:

* <Pn> is the specific parameter name in camel case;
* <PN> is the specific parameter name in upper case;

The term <Pn> (or <PN>) may consist of several words which may or may not be separated by underscore.
⌋

Example:

* CanIfTxConfirmation

### 其余 105 章（内容从略，见纯文本全文）

36. Shared 代码
37. Global 数据
38. Usage of macros and inline functions
39. Calling Scheduled functions (Main processing functions)
40. Exclusive areas
41. Callouts
42. AUTOSAR 接口
43. Interrupt 服务 routines
44. Restricted OS functionality access
45. Access to hardware registers
46. 数据类型
47. AUTOSAR Standard 类型
48. Platform Specific 类型
49. AUTOSAR Integer 数据类型
50. Boolean 类型
51. Distributed execution on multi-partitioned systems
52. Libraries
53. Background
54. 配置
55. 需求
56. 错误处理
57. Classification
58. Development 错误
59. Synopsis
60. Documentation
61. 配置
62. Reporting
63. Runtime 错误
64. Synopsis
65. Documentation
66. 配置
67. Reporting
68. Extended production 错误 and production 错误
69. Synopsis Production 错误
70. Synopsis Extended production 错误
71. Documentation
72. 配置
73. Reporting
74. 示例 use case：错误 is detected and notified
75. Specific topics
76. Implementation specific 错误
77. 处理 of Symbolic Name Values
78. corrupted NV 数据的处理
79. 安全事件
80. Synopsis
81. Documentation
82. 配置
83. Reporting
84. Meta 数据处理
85. Debugging, 追踪, and Profiling 支持 of BasicSoftwareComponents
86. API 规范
87. Imported 类型
88. 类型定义
89. 功能定义
90. 通用规范 on API functions
91. 初始化功能
92. De-Initialization 功能
93. Callback 通知
94. Scheduled functions
95. Expected 接口
96. Mandatory 接口
97. Optional 接口
98. Configurable 接口
99. 服务接口
100. 时序图
101. 配置规范
102. 简介 to 配置规范
103. 配置 and 配置 parameters
104. Variants
105. Containers
106. 配置 parameter tables
107. 通用 section：
108. 配置 parameter section：
109. Section of included/referenced containers：
110. 配置 class labels
111. 通用配置规范
112. 配置 files
113. Implementation names for 配置 parameters
114. Pre-compile time 配置
115. Link time 配置
116. Post-build time 配置
117. 配置 variants
118. 发布信息
119. List of 基础软件模块
120. Libraries
121. 模块
122. Special Files
123. 附录
124. Change History
125. Change History of this document according to AUTOSAR Release R22-11
126. Added 规范 Items in R22-11
127. Changed 规范 Items in R22-11
128. Deleted 规范 Items in R22-11
129. Change History of this document according to AUTOSAR Release R23-11
130. Added 规范 Items in R23-11
131. Changed 规范 Items in R23-11
132. Deleted 规范 Items in R23-11
133. Change History of this document according to AUTOSAR Release R24-11
134. Added 规范 Items in R24-11
135. Changed 规范 Items in R24-11
136. Deleted 规范 Items in R24-11
137. Change History of this document according to AUTOSAR Release R25-11
138. Added 规范 Items in R25-11
139. Changed 规范 Items in R25-11
140. Deleted 规范 Items in R25-11
