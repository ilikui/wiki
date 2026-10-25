# Modeling Guidelines of Basic Software EA UML Model (`BSWUMLModelModelingGuide`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 117 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_BSWUMLModelModelingGuide_117\AUTOSAR_CP_TR_BSWUMLModelModelingGuide.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_BSWUMLModelModelingGuide_117\AUTOSAR_CP_TR_BSWUMLModelModelingGuide.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_BSWUMLModelModelingGuide_117\zzgen\CP_TR_BSWUMLModelModelingGuide.complete.txt`

## 文档简介

This modeling guide describes the applied modeling techniques and rules, used to specify the AUTOSAR Basic Software within a UML model.

The information contained in the BSW model is processed by the AUTOSAR Meta Model Tool (MMT) and provides a major input of the several Software Specifications (SWS) defined by AUTOSAR. In order to make the BSW model accessible by the MMT, it is essential that the model observes the rules described in this document.

## 模块依赖

Illustrating a module's usage of an interface
⌈
If a module has a usage dependency to an interface, which has only illustrative purpose for diagrams, the dependency shall be modeled with the stereotype use>>. This dependency shall be ignored during the functional processing of the model.
⌋

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This modeling guide describes the applied modeling techniques and rules, used to specify the AUTOSAR Basic Software within a UML model.

The information contained in the BSW model is processed by the AUTOSAR Meta Model Tool (MMT) and provides a major input of the several Software Specifications (SWS) defined by AUTOSAR. In order to make the BSW model accessible by the MMT, it is essential that the model observes the rules described in this document.

### 2. Artifacts

The main purpose of the AUTOSAR BSW UML model is keeping the 99+ documents synchronous with respect to file structure, provided and required interfaces, sequence diagrams, state machines etc. Therefore, all the relevant information is kept in the BSW model according to the modeling rules specified in chapter .

The following artifacts are contributed to the SWS documents by the BSW UML model:

### 3. Header Files

Chapter 5.1 of each SWS document contains the BSW module's file structure, in particular its file inclusion structure. Most modules' include file relationships have a similar structure, in fact some parts are actually identically modeled. Therefore, the Header File structure is being modeled using a class diagram, with stereotyped classes representing the source code- and header files; see section .

### 4. Imported 类型定义
*原文标题：Imported Type Definitions*

SWS chapter 8.1 contains a tabular list of imported types. This table is automatically generated from the module dependency as explained in section .

### 5. 类型定义
*原文标题：Type Definitions*

SWS chapter 8.2 contains detailed descriptions of all types defined within a given BSW module. For details on the modeling of type definitions refer to section .

### 6. 功能定义
*原文标题：Function Definitions*

SWS chapter 8.3 contains a detailed description for each function provided by the BSW module. The description is presented in form of a table with a specific layout. The individual fields of the table are filled from the API function definitions according to section .

### 7. Callback 通知
*原文标题：Callback Notifications*

Very similar to the Function Definitions, SWS chapter 8.4 contains the callback definitions the BSW module provides. These are callbacks which will be called by other BSW modules, where the lower layer module is typically the caller. A table for each callback notification will be generated for a module's specified callbacks according to section .

### 8. Scheduled Functions

Scheduled Functions are described in SWS chapter 8.5. The definition of scheduled functions in the BSW UML model is described in section .

### 9. Mandatory 接口
*原文标题：Mandatory Interfaces*

SWS chapter 8.6.1 contains a list of "mandatory interfaces" expected by the module. The list is generated from the BSW UML model according to the mandatory dependencies as described in section .

### 10. Optional 接口
*原文标题：Optional Interfaces*

Similarly, the list of "optional interfaces" contained in SWS chapter 8.6.2 is generated from the BSW UML model according to the optional dependencies as described in section .

### 11. Configurable 接口
*原文标题：Configurable Interfaces*

SWS Chapter 8.6.3 contains a BSW module's "Configurable Interfaces". These are interfaces whose called function name can be configured using ECU configuration parameters. In AUTOSAR, these are typically used for issuing callback notifications, i.e. the module owning the configurable interface uses it to notify a (configurable) upper layer module's callback. In other words the module defining a "Configurable Interface" calls an other module that implements these interface definition. A table for each callback notification will be generated for a module's specified callbacks according to section .

### 12. 时序图
*原文标题：Sequence Diagrams*

In order to visualize the interaction of a BSW module with other modules, SWS Chapter 9 contains UML Sequence Diagrams for the module's typical use cases. In order to keep such Sequence Diagrams consistent between different modules within the AUTOSAR BSW stack, they are also modeled within the BSW UML model. The diagrams are being exported to image files by the mmt tool; they are then being included by the SWS document files. For the detailed modeling guidelines see section .

### 13. Various Diagrams

The SWS documents of various BSW modules use additional UML diagrams e.g. for either specifying core functionality, or for additionally illustrating dependencies between modules. Some concrete examples are the various state machines used throughout the AUTOSAR BSW stack, for example in the CAN State Manager or in COM manager. Whenever possible, such diagrams should also be modeled in the BSW UML model. This ensures that the sources of the document diagrams will not get lost, and also facilitates their maintenance and keeping a uniform modeling style.

### 14. 服务的建模
*原文标题：Modeling of services*

BSW Modules belonging to the Service Layer of the AUTOSAR Basic Software Architecture may offer their services in the form of AUTOSAR Service Interfaces. AUTOSAR Service Interfaces are described in terms of the Software Component Template rather than C-language interfaces, and they come in different flavors, e.g. ClientServerInterface, SenderReceiverInterface, ModeSwitchInterface. Consequently, their properties require a different style of modeling than the standard BSW API functions. Modeling of AUTOSAR services is described in section .

### 15. 错误分类
*原文标题：Error classification*

The SWS chapter "Error classification" (usually located within SWS chapter 7) contains detailed descriptions of all error codes the module uses for

* Development Errors
* Runtime Errors

For details on the modeling of these errors refer to section .

### 16. BSW 模块 List
*原文标题：BSW Module List*

The complete list of BSW modules is generated from the modeled components that represent the BSW modules, see section .

### 17. 建模 Guide
*原文标题：Modeling Guide*

This Chapter contains the modeling rules that shall be followed when modeling AUTOSAR BSW artifacts within the BSW UML model. It is important that these rules are used consistently throught the model for the following reasons: The model stays readable, additions and modifications are done in a reproducible way preventing the duplication of elements, and most importantly, the automated artifact generation using the MMT tool depends on nonambiguous modeling conventions.

### 18. Terminology

The agreed tool for UML modeling in AUTOSAR is Enterprise Architect by Sparx Systems. Accordingly the BSW model is being maintained using Enterprise Architect version 7.5 and above. This guide focusses on modeling techniques rather than tools, therefore this document strives to describe the concepts in terms of UML. Nevertheless, in order to be precise, sometimes terms specific to Enterprise Architect are used.

### 19. 建模结构
*原文标题：Model Structure*

The root structure of the BSW UML model consists of the following packages:

ReadMe: Contains diagrams providing version number, known limitations and disclaimer.

ExportConfiguations: Contains static configuration of exports from the model to be read by export tools.

Interaction Views: Contains sequence charts for modeling interactions of different modules. Only sequence diagrams shall be placed into this packages. The modules are arranged by stack vertically.

SoftwarePackages: Contains the BSW modules definitions including interfaces and type definitions. Moreover state and header diagrams are modelled here. The modules are arranged by layer horizontally.

Documentation Drawings: Used for additional illustrations of the BSW modules and for state diagrams to be included into SWS documents.

Specification Diagrams: Used for diagrams that shall explicitly be exported as SWS Items i.e. as normative part of the AUTOSAR Specification. Diagrams here are exported in a way that allows relevant changes (non-layout changes) to be tracked and documented. The following diagram types of the UML are supported in this package:

* Sequence charts
* State diagrams
* Activity diagrams

### 20. Common 建模 mechanisms
*原文标题：Common modeling mechanisms*

### 21. 建模 of element names
*原文标题：Modeling of element names*

Element names in the BSWUMLModel might be arbitrarily long, ambiguous, and contain various special characters e.g. for expressing different variants of an element.

This might cause issues when

* exporting elements to files with the file name containing the element name
* exporting elements to Blueprint files in ARXML format and cross-referencing to elements in Blueprints.

 Alternative Anchor Name
⌈
The optional tagged value aName is used to specify an alternative anchor name for BSWUML elements intended for further processing by tools.

This alternative anchor name shall be used in cases where the element name is not suitable because it is either ambiguous or contains special characters.

Hence, if the alternative anchor name is set it shall

* start with a letter, followed by only letters, numbers, and underscore characters
* be unique within its scope
* not be too long.
⌋

### 22. 建模 of Tagged Values
*原文标题：Modeling of Tagged Values*

Whenever a tagged value in the BSWUML has a long value (more than 255 characters) or the value contains line breaks it cannot be entered in Enterprise Architect.

To mitigate this problem the following specification was introduced using tagged value notes that can contain arbitrarily long text with line breaks:

 Modeling of tagged values as tagged value notes
⌈
Alternatively to setting text into the value of a tagged value the desired text may be put into the tagged value note.

To mark that the desired value text is found in the tagged value note the value of the tagged value shall be exactly the term "@note".
⌋

### 23. 建模 of predefined order of elements
*原文标题：Modeling of predefined order of elements*

Elements in the BSWUMLModel are ordered either by the explicitly set order in Enterprise Architect (e.g. for parameters of operations) or - if the order has no meaning in UML - they are ordered alphabetically by name. This order guarantees a stable generation of artifacts from the model.

In case the alphabetical order does not provide an satisfying result (e.g. for a enumeration with the literals `MAX_VALUE` and `MIN_VALUE`) there is the option to override the alphabetical order by setting tagged values.

 Explicit ordering of model elements
⌈
To apply an explicit order to model elements to appear in the generated artifacts from BSWUMLModel the tagged value bsw.sequenceOffset shall be set at the elements that are listed.

The values of bsw.sequenceOffset shall be integer numbers.

For the ordering of the elements during the artifact generation the following rules apply:

# The default value for all elements where bsw.sequenceOffset is not set is 0.
# Elements with lower value of bsw.sequenceOffset appear in the list before elements with higher value of bsw.sequenceOffset.
# Elements with the same value of bsw.sequenceOffset are ordered alphabetically by name.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. elements with an external 规范的建模
*原文标题：Modeling of elements with an external specification*

There might be elements (e.g. datatypes or interfaces) that are used in the AUTOSAR context, but are specified in another, external Standard (e.g. the TickType or the GetResource interface are specified in OSEK and are used in the AUTOSAR Os module).

It is not desired to repeat that specification in an AUTOSAR document. So, those elements shall only be modelled as detailed as required for a correct appearance in diagrams.

Additionally, they shall not be given an SWS Item ID as they are not part of the AUTOSAR Specification.

 Model elements with an external specification
⌈
Model elements used in AUTOSAR that come from an external Standard/Specification shall be marked with the tagged value bsw.externalSpecification with the value being the name of that Standard/Specification.
⌋

### 25. BSW 模块的建模
*原文标题：Modeling of BSW Modules*

### 26. Packages

BSW Module Packages
⌈
For each basic software module a UML package (the "module package") shall be placed within the package structure according to the module's role in the Layered Software Architecture.
⌋

 Naming of BSW Module Packages
⌈
The name of the module package shall be the 'module abbreviation' of the BSW module.
⌋

### 27. Components

BSW Module Components
⌈
Each basic software module shall be modeled as an UML component with stereotype module>> (the "module component").
⌋

 Naming of BSW Module components
⌈
The name of the module component shall be the 'module abbreviation' of the BSW module.
⌋

 BSW Module ID
⌈
The tagged value bsw.moduleId shall be set to the module ID of the BSW module.
⌋

 BSW Module Name
⌈
The tagged value bsw.moduleLongName shall be set to the module name of the BSW module.
⌋

 Location of BSW Module components
⌈
Each module component shall be modeled as a top-level element of its containing module package.
⌋

 SWS Item ID of the Imported Types table of the module
⌈
The tagged value bsw.importedTypes.swsItemId is used to specify the SWS Item ID for the table of datatypes imported into the module.
⌋

 Up-traces of the Imported Types table of the module
⌈
The tagged value bsw.importedTypes.traceRefs is used to specify up-traces to requirements of the SWS Item containing the table of datatypes imported into the module. Multiple requirement IDs have to be separated by a comma.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 模块 Extensions
*原文标题：Module Extensions*

Module extensions serve to provide additional interfaces for specific modules (e.g. CanXL is a module extension to Can). They are particular in the way that on the one hand they are needed to provide the same module ID to the outside world as they are an optional part of the same module. On the other hand, they are decribed in a separate document (e.g. `SWS_CANXLDriver` and `SWS_CANDriver`) and therefore are best modeled in a separate module to make clear during the development of the AUTOSAR Standard: which part belongs to which document.

It follows from the sections before (in particular  and ) that BSW modules shall be modeled as a component named equally to its parent package.

This rule cannot be applied here if the module and its extension shall be kept distinguishable. Clearly, the component of a module extension needs to be named as the module to ensure that e.g. it is correctly in UML diagrams that are exported and visible to the outside world. Hence, the only place to distinguish the extension from the module is the package name. The following shall be modelled:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 组件 Diagrams
*原文标题：Component Diagrams*

Component Diagrams
⌈
The module package shall contain a "component diagram" (Enterprise Architect: UML Component Diagram).
⌋

 Naming of Component Diagrams
⌈
The name of the component diagram shall be identical to the name of the module component (module abbreviation).
⌋

 Content of Component Diagrams
⌈
The component diagram contains the module component as well as all of the module's interface relationships.
⌋

### 30. 类型 Diagrams
*原文标题：Type Diagrams*

Type Diagrams
⌈
If a BSW module defines data types, its module package shall contain a "types diagram" (Enterprise Architect: UML Class Diagram).
⌋

 Naming of Types Diagrams
⌈
The name of the types diagram shall be the name of the module component followed by a space character followed by Types, e.g. FrTp Types.
⌋

 Content of Types Diagrams
⌈
The types diagram shall contain all types defined by the BSW module.
⌋

### 31. 建模 of API Functions
*原文标题：Modeling of API Functions*

An AUTOSAR BSW module provides services to other BSW modules in the form of C-syntax functions. These functions are also the underlying implementation of AUTOSAR Services accessed by Software Components over the RTE.

This section explains how each such function is modeled in the form of an UML operation. Each operation is placed in an UML interface owned by the BSW module realizing the service. This UML interface is hereinafter called Function interface.

 Function interfaces
⌈
For each function to be provided by a BSW module, an UML interface (the "function interface") shall be created in its module package. The stereotype of the interface shall be interface>>.
⌋

 Naming of function interfaces
⌈
The function interface shall have the same name as the actual function (depends on `TR_BSWMG_00017`, `TR_BSWMG_00030`).
⌋

 API functions in component diagrams
⌈
API functions shall be visible in the providing BSW module's component diagram.
⌋

Note: The easiest way to achieve this is to drag the new Interface directly into the providing module's component diagram when creating the interface.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Scheduled Functions

Stereotype for Scheduled Functions
⌈
Scheduled Functions shall be modeled by setting the operation's stereotype to scheduled_function>>.
⌋

Note: The Schedule attribute of a Scheduled Function is not used in any artifact any more.

### 33. API 功能 Parameters
*原文标题：API Function Parameters*

API Function Parameters
⌈
The function parameters shall have mandatory entries for "Name", "Type", "Direction" and "Notes".
⌋

 API Function Parameter types
⌈
The parameter "Type" shall be one of the existing types defined in the BSW model.
⌋

 C-Style Pointers as API Function Parameters
⌈
Parameters may be modeled as C-Style pointers by appending * to the parameter type, e.g. PduInfoType*
⌋

 Mandatory constant types for pointers of API Function Input Parameters
⌈
Pointer-type parameters of direction type "in", i.e. parameters that represent read-only structures or arrays, may prepend the parameter type with the const keyword. This enforces that the data pointed to by the parameter is read-only and will not be altered by the function. Example: const `FrIf_ConfigType`*
⌋

 API Function Parameter Direction
⌈
The parameter's direction type attribute shall be set to one of the values in, out, inout, return.
⌋

 API Function Parameter Description
⌈
Each parameter shall provide a short description about its purpose.
⌋

Note: EA provides a textfield called 'Notes' to take the parameters description.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Generic 接口
*原文标题：Generic Interfaces*

In some occasions the AUTOSAR BSW stack defines a number of interfaces which have basically the same function signature but slightly differ with regards to a module-specific naming. In these cases, redundant definitions of interfaces shall be prevented by usage of only one interface definition, called a "Generic Interface". To define a specific realization and/or usage of such a "Generic Interface", a "Derived Generic Interface" shall be used. A "Derived Generic Interface" inherits from the generic interface definition and sets the module specific properties, such as name, specitem-ID, and headerfile.

The following modeling pattern shall be used for defining "Generic Interfaces" and "Derived Generic Interfaces":

 Generic Interface Definition
⌈
The function definition shall be placed into an UML interface having the stereotype generic_interface>>.
⌋

 Generic Interface is abstract
⌈
This "generic interface" definition shall be considered abstract and not directly be referenced by any module.
⌋

 Generic Interface Function Definition
⌈
A generic interface definition shall contain exactly one operation with stereotype function_blueprint>>.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Callback 通知
*原文标题：Callback Notifications*

In AUTOSAR, a "callback" is defined as functionality in an upper-layer BSW module that is called by a lower-layer module in order to provide notification as required .

### 36. Callback 定义 and usage (non Configurable Callback)
*原文标题：Callback definition and usage (non Configurable Callback)*

Callback definition
⌈
Callback definitions shall be modeled as UML operations and shall use the stereotype callback>>.
⌋

 Callback interface
⌈
For each callback to be called by a BSW module, an UML interface (the "function interface") shall be created in its module package. The stereotype of the interface shall be interface>>.
⌋

 Naming of callback interfaces
⌈
The callback interface shall have the same name as the actual function (depends on , ).
⌋

 Callback function definition
⌈
The callback interface shall contain one function with stereotype callback>>.
⌋

The modeling of the function from  is described in chapter .

 Callback function usage/call
⌈
For all callbacks a lower module can call, a dependency of stereotype mandatory>> or optional>> (target callback interfaces) shall be modeled.
⌋

For details to  see also chapter  and .

 Callback function realization/implementation
⌈
For all callbacks a upper module implements, a realization of stereotype realize>> (target callback interfaces) shall be modeled.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Configurable Callback 定义 and usage
*原文标题：Configurable Callback definition and usage*

Lower-layer modules are caller of callbacks. Often, these modules can configure which actual instance of a callback definition will be called, i.e. which upper layer will be called in the callback situation. In the SWS the configurability of a callback is described in two parts: An API table for the configurable callback function including details like the callback signature and arguments, and the actual ECU configuration parameters described in chapter 10.

 Configurable Dependency for Callback definitions
⌈
A lower-layer module shall have dependencies with stereotype configurable>> to each of its configurable callback definitions.
⌋

 Target of a Configurable Dependency is a Generic Definition
⌈
A lower-layer module shall have a generic callback definition as target of the configurable dependency.
⌋

The naming of callback functions currently differs between BSW modules, and in particular between BSW stacks. Therefore, no definitive rules for naming patterns of callbacks can be stated here. However, as a guideline for adding new callback functions, either one of the following patterns should be followed:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Callback Generic 接口
*原文标题：Callback Generic Interfaces*

Similar to the definition of Generic Interfaces, it is possible to define Generic Interfaces for Callbacks. The purpose of a Callback Generic Interface is to serve as a one-time definition of a callback. The callback may then be referenced in different contexts, using different names in the contexts of different modules, and also varying in attributes like Service ID.

 Callback Generic Interface Definitions
⌈
Callback definitions shall be modeled as UML operations and shall use the stereotype callback>> and function_blueprint>>.
⌋

 Callback Generic Interface Name
⌈
The Callback definition name shall be set as in .
⌋

 Callback Blueprint Interface placement
⌈
Each callback blueprint definition shall be placed inside an UML interface having the same name as the contained operation with stereotype generic_interface>>.
⌋

Note that  also applies for Callback Generic Interfaces when determining the package that shall contain the interfaces.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. 模块 Dependencies
*原文标题：Module Dependencies*

### 40. Virtual 接口
*原文标题：Virtual Interfaces*

In general AUTOSAR BSW modules require functions from the APIs of other BSW modules in order to fulfill their own functionality. The general modeling pattern of dependencies between one BSW module and another uses so called function interfaces: Due to the fact that dependencies between APIs have to be expressed on a single API level of detail, each API function requires a representation on module level. For this purpose, the function interfaces have been introduced (see ).

In order to further enhance the expressiveness of the BSW module in UML diagrams, the concept of function interfaces is extended by virtual interfaces. Virtual interfaces are derived from function interfaces to merge a certain set of API functions. Recursive structures of virtual interfaces are also allowed, so a virtual interface is allowed to be derived from other virtual interfaces. This concept basically allows to reduce the number of visible module dependencies in diagrams, by e.g. providing a single virtual interface per providing module, collecting all functions required by this module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Mandatory 接口
*原文标题：Mandatory Interfaces*

Stereotype for Mandatory Dependencies on Interfaces
⌈
The user module shall have dependencies with stereotype mandatory>> to all its mandatory interfaces.
⌋

 SWS Item ID of the Mandatory Interfaces table of the module
⌈
The tagged value bsw.mandatory.swsItemId is used to specify the SWS Item ID for the table of mandatory interface dependencies of the module.
⌋

 Up-traces of the Mandatory Interfaces table of the module
⌈
The tagged value bsw.mandatory.traceRefs is used to specify up-traces to requirements of the SWS Item containing the table of mandatory interface dependencies of the module. Multiple requirement IDs have to be separated by a comma.
⌋

### 42. Optional 接口
*原文标题：Optional Interfaces*

Stereotypes for Optional Dependencies on Interfaces
⌈
The user module shall have dependencies with stereotype optional>> to all its optional interfaces.
⌋

 SWS Item ID of the Optional Interfaces table of the module
⌈
The tagged value bsw.optional.swsItemId is used to specify the SWS Item ID for the table of optional interface dependencies of the module.
⌋

 Up-traces of the Optional Interfaces table of the module
⌈
The tagged value bsw.optional.traceRefs is used to specify up-traces to requirements of the SWS Item containing the table of optional interface dependencies of the module. Multiple requirement IDs have to be separated by a comma.
⌋

### 43. Illustrative Dependencies

Illustrating a module's usage of an interface
⌈
If a module has a usage dependency to an interface, which has only illustrative purpose for diagrams, the dependency shall be modeled with the stereotype use>>. This dependency shall be ignored during the functional processing of the model.
⌋

### 44. 服务接口的建模
*原文标题：Modeling of Service Interfaces*

Services are provided through ports. A port implements a port interface. A port interface can be a ClientServerInterface, a SenderReceiverInterface or a ModeSwitchInterface.

A ClientServerInterface defines the available service operations. A service operation defines return, input and output parameters. Each service operation has a relationship to an existing api function (c function). Blueprints allow to configure things like parameters, services, ...

A SenderReceiverInterface defines DataElements. Each data element have to be linked to a data type.

A ModeSwitchInterface defines modes within a ModeDeclarationGroup.

Note: To get a better understanding of the modeling, listing examples of the informal textual definition of service interfaces in AUTOSAR R4.0.3 SWS documents are used. If you are not familiar with this old definition, please ignore these listings.

 Model location of Service Interfaces
⌈
All additional elements of service modeling shall be placed in a package "ARInterfaces". This packages shall be a child package of the module package.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. Client Server 接口
*原文标题：Client Server Interfaces*

The following listing shows the old syntax of modeling / defining ClientServerInterface in AUTOSAR R4.0.3 SWS documents.

ClientServerInterface `Csm_Hash` {

	// errors assisioated with the ProtInterface
	PossibleErrors {
		`CSM_E_NOT_OK`       = 1
		`CSM_E_BUSY`         = 2
		`CSM_E_SMALL_BUFFER` = 3
	};

	//containing operations

	//parameter kinds can be IN, OUT and INOUT
	//
	//ERR is not a parameter
	//	-> should be a associated error to an operation
	HashStart (
		ERR(`CSM_E_NOT_OK`, `CSM_E_BUSY`)
	);

	HashUpdate (
		IN    HashDataBuffer 	dataBuffer,
		IN    uint32 	dataLength,
		ERR(`CSM_E_NOT_OK`, `CSM_E_BUSY`)
	);

	HashFinish (
		OUT   HashResultBuffer	resultBuffer,
		INOUT HashLengthBuffer	resultLength,
		IN    boolean	TruncationIsAllowed,
		ERR(`CSM_E_NOT_OK`, `CSM_E_BUSY`, `CSM_E_SMALL_BUFFER`)
	);
};

 Modeling of ClientServerOperations
⌈
The operations defined through a Client Server Interface shall be modeled as a class of stereotype ClientServerOperation>> per operation (for each operation a separate class).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 55 章（内容从略，见纯文本全文）

46. 模式 Switch 接口
47. Sender Receiver 接口
48. Ports (with PortAPIOptions and PortDefinedArgumentValues)
49. 数据类型定义
50. Additional information on Datatypes used in 服务接口
51. Simple 类型
52. Enumerations
53. Std_ReturnType Extensions
54. Symbols (#define)
55. Arrays
56. Structures
57. Unions
58. Pointer 类型
59. 功能 Pointers
60. Bitfields
61. Implicit Dependencies between 数据类型
62. References to 数据类型
63. Variability of 建模 elements
64. 示例 of defining of variability in AUTOSAR R4.0.3 SWS documents
65. 建模 of variability
66. 错误 classification的建模
67. 建模 of Life Cycle information
68. Use cases of the Life Cycle concept in the BSWUMLModel
69. Diagrams
70. Header 文件建模
71. 时序图
72. 状态 Machine Diagrams
73. 规范 Diagrams
74. 附录
75. Stereotypes and Tagged Values defined for the BSWUMLModel
76. History of 规范 Items
77. 规范 Item History of this Document according to AUTOSAR R26-11
78. Added 规范 Items in R26-11
79. Changed 规范 Items in R26-11
80. Deleted 规范 Items in R26-11
81. 规范 Item History of this Document according to AUTOSAR R25-11
82. Added 规范 Items in R25-11
83. Changed 规范 Items in R25-11
84. Deleted 规范 Items in R25-11
85. 规范 Item History of this Document according to AUTOSAR R24-11
86. Added 规范 Items in R24-11
87. Changed 规范 Items in R24-11
88. Deleted 规范 Items in R24-11
89. 规范 Item History of this Document according to AUTOSAR R23-11
90. Added 规范 Items in R23-11
91. Changed 规范 Items in R23-11
92. Deleted 规范 Items in R23-11
93. 规范 Item History of this Document according to AUTOSAR R22-11
94. Added 规范 Items in R22-11
95. Changed 规范 Items in R22-11
96. Deleted 规范 Items in R22-11
97. 规范 Item History of this Document according to AUTOSAR R21-11
98. Added 规范 Items in R21-11
99. Changed 规范 Items in R21-11
100. Deleted 规范 Items in R21-11
