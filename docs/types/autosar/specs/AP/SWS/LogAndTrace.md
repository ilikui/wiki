# Specification of Log and Trace (`LogAndTrace`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 853 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_LogAndTrace_853\AUTOSAR_AP_SWS_LogAndTrace.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_LogAndTrace_853\AUTOSAR_AP_SWS_LogAndTrace.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_LogAndTrace_853\zzgen\AP_SWS_LogAndTrace.complete.txt`

## 文档简介

This specification specifies the functionality of the AUTOSAR Adaptive Platform Log and Trace.

The Log and Trace provides interfaces for Adaptive Applications to forward logging information onto the communication bus, the console, to the file system or to ARTI-trace. Each of the provided logging information has its own severity level. Different methods are provided to be used by applications or Functional Clusters, e.g. ara::com, to log with a dedicated severity level. In addition, utility methods are provided to convert decimal values into the hexadecimal numeral system, or into the binary numeral system.

To pack the provided logging information into a standardized delivery and presentation format, a protocol is needed. For this purpose, the DLT protocol can be used, which is standardized within the AUTOSAR consortium.

The DLT protocol can add additional information to the provided logging information. This information can be used by a Logging client to relate, sort or filter the received logging frames.

Detailed information regarding the use cases and the DLT protocol itself are provided by the PRS Log and Trace protocol specification. For more information regarding the DLT protocol refer to .

The ARTI-trace methods are integrated in the ara::log Functional Cluster. The support of ARTI-trace functionality of non Adaptive Applications or services is handled by adapters (i.e. ).

Furthermore, this document introduces additional specification extensions for the AUTOSAR Adaptive Platform Log and Trace.

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality of the AUTOSAR Adaptive Platform Log and Trace.

The Log and Trace provides interfaces for Adaptive Applications to forward logging information onto the communication bus, the console, to the file system or to ARTI-trace. Each of the provided logging information has its own severity level. Different methods are provided to be used by applications or Functional Clusters, e.g. ara::com, to log with a dedicated severity level. In addition, utility methods are provided to convert decimal values into the hexadecimal numeral system, or into the binary numeral system.

To pack the provided logging information into a standardized delivery and presentation format, a protocol is needed. For this purpose, the DLT protocol can be used, which is standardized within the AUTOSAR consortium.

The DLT protocol can add additional information to the provided logging information. This information can be used by a Logging client to relate, sort or filter the received logging frames.

Detailed information regarding the use cases and the DLT protocol itself are provided by the PRS Log and Trace protocol specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Abbreviation / Acronym: | Description: |
|---|---|
| Log and Trace | The official Functional Cluster name that manages the logging |
| DLT protocol | Original name of the protocol itself (Log and Trace), specified in the PRS document |
| Logging API | The main logging interface towards user applications as a library |
| Logging backend | Implementation of the DLT protocol, e.g. DLT |
| Logging Client | An external tool which can remotely interact with the Logging framework |
| Logging framework | Implementation of the software solution used for logging purposes |
| Logging instance | The class that enables the logging functionality and handles a single logging context |
| Log message | Log message, including message header(s) |
| Log severity level | Meta information about the severity of a passed logging information |
| DLT | Diagnostics Log and Trace - a Log and Trace daemon implementation of the DLT protocol |
| Application process | An executable instance (process) that is running on a Machine |
| ara::log Modeled Message Generator | A workflow tool (e.g. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a general specification  which is also applicable for this functional cluster. It shall be considered an additional and required specification for implementing this functional cluster.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 已知限制
*原文标题：Known limitations*

There are no known limitations for this specification.

### 8. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 9. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

 shows the interfaces provided by Log and Trace to other functional clusters within the AUTOSAR Adaptive Platform.  lists the interfaces provided to other functional clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| Logger | Automotive API Gateway | The Automotive API Gateway shall use this interface to log messages. |
| ^ | Communication Management | Communication Management shall use this interface to log standardized messages. |
| ^ | Diagnostic Management | Diagnostic Management shall use this interface to log standardized messages. |
| ^ | Execution Management | Execution Management shall use this interface to log standardized messages. |
| ^ | Intrusion Detection System Manager | Adaptive Intrusion Detection System Manager shall use this interface to log standardized messages. |
| ^ | Network Management | Network Management shall use this interface to log standardized messages. |
| ^ | Persistency | Used to provide information about errors and internal states and actions of Persistency. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

 shows the interfaces required by Log and Trace from other functional clusters within the AUTOSAR Adaptive Platform.  lists the interfaces required from other functional clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Time Synchronization | SynchronizedTimeBaseConsumer | Log and Trace shall use this interface to determine the timestamps that are associated with log messages. |

### 11. 需求追踪
*原文标题：Requirements Tracing*

No upstream requirements are defined for the SWS items specified in this document.

### 12. 功能规范
*原文标题：Functional specification*

This specification defines the usage of the defined C++ Logging API for the Log and Trace. Adaptive Applications can use these functions to forward Log messages to various sinks, for example the network, a serial bus, the console or the file system.

The following functionalities are provided:

# Methods for initializing the Logging framework (see )
# Utility methods to convert decimal values into hexadecimal or binary values (see )
# Automatic timestamping of Log messages (see )
# Log and trace network bandwith limitation (see chapter )

Adaptive Applications and Functional Clusters can startup (see ) and shutdown (see ) all Functional Clusters with direct ARA interfaces (e.g. the Logging framework), by calling ara::core::Initialize() or ara::core::Deinitialize().

### 13. Necessary Parameters and 初始化
*原文标题：Necessary Parameters and Initialization*

The concept of identifying the user application: To be able to distinguish the logs of different application instances within a system (e.g. an ECU or even the whole vehicle), every Application process, in that system, has to get a particular ID and a description.

The concept of log contexts: In order to be able to distinguish the logs from different logical groups within an Application process, for every context within an Application process a particular ID and a description has to be assigned. Every Application process can have an arbitrary number of contexts.

Machine-specific configuration settings for the Log and Trace functional cluster are collected in LogAndTraceInstantiation. The Application processes using the Logging framework need to supply the following configuration through the application execution manifest:

* Application ID
* Application description
* The default log level, if not set through the manifest a default predefined value is set
* The log mode
* The log file path, in case of a specific log mode that indicates logging to a file

The Application process using the Logging framework creates a Logging instance per context.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Application ID

The Application ID is an identifier that allows to associate generated logging information with its user application. The Application ID is passed as a string value. Depending on the Logging framework actual implementation, i.e. Logging backend, the length of the Application ID might be limited. To be able to unambiguously associate the received logging information to the origin, it is recommended to assign unique Application IDs within one ECU. There is no need for uniqueness of Application IDs across ECUs as the ECU ID will be the differentiator. The system integrator has the overall responsibility to ensure that each Application process instance has a unique Application ID. By having this value defined in the manifest the integrator is able to perform consistency checks. The applicationId in the DltApplication identifies the application instance and is put as ApplicationId into the log and trace message.

Note: The Application IDs are unique IDs per Application process, meaning if the same Application process is started multiple times it shall have an own ID per instance.

The length limits of the Application ID apply only to version-1 of the PRS LogAndTraceProtocol.

### 15. Application 描述
*原文标题：Application Description*

Since the length of the Application ID can be quite short, an additional descriptive text can be provided. This description is passed as a string and the maximum length is implementation dependent. The applicationDescription in the DltApplication is an optional setting that allows to describe the applicationId as descriptive text.

### 16. Default Log Level

The Log severity level represents the severity of the log messages. Severity levels are defined in chapter . defaultLogThreshold in the DltLogSink defines the initial log reporting level for the application instance.

Each initiated log message is qualified with such a severity level. The default Log severity level is set through the application configuration per Application process. The Log severity level acts as a reporting filter. Only log messages having a higher or the same severity will be processed by the Logging framework, while the others are ignored.

The default Log severity level is the initially configured log reporting level for a certain Application process, though it can be overriden per context.

The Application process wide log reporting level shall be adjustable during runtime. The realization is an implementation detail of the underlying backend. E.g. remotely via a Logging client for example DLT Viewer. The same applies for the context reporting level.

The design rationale for providing an initial default Log severity level application wide against having per context default Log severity levels is the following:

* It simplifies the API usage.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Log 模式
*原文标题：Log Mode*

Depending on the Logging framework implementation, the passed logging information can be processed in different ways. The destination (the Log message sink) can be the console output, a file on the file system or the communication bus. The system integrator is responsible to populate this information in the machine manifest. A direct API for dynamically changing this value for development purposes is provided. In the AUTOSAR Meta-Model the category of DltLogSink is equivalent to the log mode described here, for more information see . The category of DltLogSink defines the destination to which the log messages will be forwarded.

As shown in the diagram, once the log mode is set to use the Logging backend the configuration is of that backend is centralized in the Machine manifest configuration. For example, the Logging backend can be configured to store the logging information locally and that configuration would be kept in the Machine-specific manifest. Furthermore, the output channel on Ethernet for Log messages is configured with the PlatformModuleEthernetEndpointConfiguration that is referenced by DltLogSink in the role endpointConfiguration.

### 18. Log 文件 Path
*原文标题：Log File Path*

In case the log mode is set to log to a file, a destination directory path needs to be provided. path in the DltLogSink defines the destination file to which the logging information is passed. This option is provided for development, integration and prototyping purposes and is not suitable for production.

### 19. Context ID

The Context ID is an identifier that is used to logically group logging information within the scope of an Application process. The Context ID is a string value. Depending on the actual implementation of the Logging backend, the length of the Context ID might be limited (i.e. version-1 of the PRS LogAndTraceProtocol is used). Context ID is unique in the scope of an Application process and as such the developer is responsible for assigning it. This information is not modeled in the manifest. There is no need for uniqueness of Context IDs across multiple different Application processes as the Application ID will be the differentiator.

Note: Special attention should be paid to library components. The libraries are meant to be used by Application processes and therefore are running within the Application process' scope. Logging executed from those libraries will end up inside the scope of the parent Application process. In order to distinguish the internal library logs from the Application process logs or from other library logs within the same process, each library should have its own Context ID.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Context 描述
*原文标题：Context Description*

Since the length of the Context ID can be quite short, additional descriptive text has to be provided in the configuration described in . This Context description is passed as a string. The maximum length of the Context description is implementation dependent.

### 21. 初始化 of the Logging framework
*原文标题：Initialization of the Logging framework*

To correctly associate incoming logging information with its origin, an Application process registers itself and its logging sources with the Logging framework. The Application ID and description uniquely identify the generating process, while the configured log mode and sink determine the routing of the resulting log data, for example to the console, file system, or communication bus.

When registering a logging context, the Logging framework provides an internal logger instance that groups related logging information. Contexts serve as logical clusters and form the basis for forwarding log and trace data through a common, message-independent API. Logger creation includes specifying a context ID, description, and an initial log-level threshold, which may later be adjusted.

To avoid unnecessary CPU and memory usage, an Application process can query whether a given severity level is currently enabled before preparing log data. In case of internal errors, calls into the Logging framework are silently discarded to ensure the Application process is not affected.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Log Messages

Log messages can generally be output to different targets. The Log and Trace Functional Cluster supports these logging targets:

* the console
* a file on a local file system
* a network

Most of the discussion in this section assumes that messages are being output to a network, as this use case requires the additional consideration of minimizing network load.

The Log and Trace Functional Cluster offers two principal "classes" of log messages: Modeled and Non-Modeled messages. Both these support adding one or more "arguments" to a log message. A log message without any arguments serves no purpose and is discarded.

Non-Modeled messages are the traditional way of composing log messages: All arguments of the message are added to an internal message buffer and then eventually serialized for output, either to a console/file, or via network. All parts of the messages will be sent via network. In the DLT protocol, these messages are called "verbose" messages.

Modeled messages are designed to reduce traffic on the network, by omitting certain static (i.e. unchanging) parts of a message from the network. As the name suggests, these parts are instead added to the application ARXML model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Non-modeled messages

While developing applications, it is critical to extract internal information, such as variable values, the current state of a state machine, and other dynamic data, to understand exactly what is happening internally. To achieve this, the Logging framework provides a generic interface that enables applications to forward arbitrary logging information alongside a designated severity level. These non-modeled messages allow developers to rapidly assemble complex, multi-part log outputs without requiring predefined static ARXML models.

The ara::log Functional Cluster defines a "Builder"-pattern inspired set of APIs for constructing non-modeled messages. The ara::log::Logger::WithLevel member function is used for creating a ara::log::LogStream object which is then subsequently filled with message content (i.e. message arguments). Alternatively to ara::log::Logger::WithLevel, there are also separate member functions for creating a ara::log::LogStream object, one per supported log level.

Arguments are added to a verbose message by calling an appropriate operator overload for the desired argument:

logger.WithLevel(LogLevel::kInfo)  "text"  4.2;

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Message Tags

Arbitrary "message tags" can be set by calling the member function ara::log::LogStream::WithTag with an argument that is convertible to ara::core::StringView.

Multiple such tags can be added to a message; these tags will then be added to the message in the order of addition.

Example:

logger.WithLevel(LogLevel::kInfo)
	  .WithTag("filter1")
	  .WithTag("filter2")
	   ...;

The length of a tag shall not exceed 255 characters. Only characters from the ASCII character set are allowed.

### 25. Conversion Functions

Sometimes it makes sense to represent integer numbers in hexadecimal or binary format instead of decimal format. Similarly, floating-point numbers often should appear with a certain precision.

For this purpose, it is possible to "annotate" numerical arguments with formatting hints. Viewer applications can use these hints in order to influence the appearance of the received numbers.

Formatting hints can be added with the generic ara::log::Arg decorator function, for instance:

mLog.LogInfo()  Arg(42, Hex());
mLog.LogInfo()  Arg(43, Hex(4));

uses ara::log::Hex to add the "hint" to the message that this argument is supposed to be displayed as a hexadecimal value. The second line additionally adds the hint that the hexadecimal number should be displayed with four digits.

Other functions exist that allow to format as binary, decimal, or octal values, and to format floating-point values in different ways and with specific precisions.

It is the decision of the viewer application whether to heed these hints.

### 26. Modelled messages

Modeled messages address the need to trace internal application states and variable values, similar to non-modeled messages, but with a more efficient representation. Their structure is defined in ARXML, specifying static elements such as parameter names and types. Because only the dynamic payload is transmitted at runtime, modeled messages significantly reduce network overhead and provide a standardized, bandwidth-efficient mechanism for extracting internal application information in distributed systems.

The ara::log Functional Cluster defines a single member function ara::log::Logger::Log for sending modeled messages. Unlike the non-modeled message APIs, it represents a single-call interface, i.e. a single function call passes all arguments to the ara::log::Logger instance and performs all necessary actions to generate and send the message.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Log message 建模
*原文标题：Log message model*

All modeled messages are defined as DltMessages, which are aggregated by a LogAndTraceMessageCollectionSet. Each DltMessage contains a messageId, which needs to be unique within an ECU, and the messageTypeInfo denoting the log level, and optionally the messageSourceFile and messageLineNumber. The DltMessage aggregates an ordered list of DltArguments, which in turn define the network representation in the role dltArgumentProps.networkRepresentation. The name of a log message argument is taken from the shortName of the DltArgument, while the type and unit are taken from the dltArgumentProps.networkRepresentation.

At design time it is possible to define an Executable with a SwComponentPrototype that has a PortPrototype typed by an LogAndTraceInterface. Such a PortPrototype is used to describe that the SwComponentPrototype is able to forward logging information onto the external Dlt Log Viewer. The DltMessages that are used by the SwComponentPrototype are collected in the LogAndTraceMessageCollectionSet that is referenced from the PortPrototype.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. ara：：log Modeled Message Generation Principle
*原文标题：ara::log Modeled Message Generation Principle*

This chapter specifies those C++ header files used directly for modeled messages in an Adaptive Application. As part of the Adaptive Platform Methodology, these C++ header files are generated by a workflow tool (ara::log Modeled Message Generator) directly from the LogAndTraceMessageCollectionSet and DltLogSink ARXML configuration as the implementation of type and variable definitions representing modeled messages.

### 29. Header 文件 directory 结构
*原文标题：Header file directory structure*

Modeled message header files directory structure
⌈
The modeled message header files defined by  shall be located within the folder

<namespace>/<namespace>/.../<namespace>/<name>/

where:

<namespace> ... <namespace>

are the namespace names as defined in LogAndTraceInterface, converted to lower case, and <name> is LogAndTraceMessageCollectionSet.shortName, converted to lower case.
⌋

### 30. Modeled message header 文件
*原文标题：Modeled message header file*

Modeled Message header file name
⌈
The modeled message header file shall use the file name messages.h.
⌋

 Modeled Message header file existence
⌈
One LogAndTraceMessageCollectionSet shall correspond with one modeled message header file.
⌋

 Inclusion of modeled messages
⌈
The symbols defining the modeled messages of one LogAndTraceMessageCollectionSet shall be made exclusively available in the header file defined in ,
⌋

Namespaces are used to separate the symbols defined based on LogAndTraceMessageCollectionSet from each other to prevent name conflicts and they allow to use reasonably short names.

### 31. Contents in the modeled message header 文件
*原文标题：Contents in the modeled message header file*

The modeled message header file contains constexpr variable definition and corresponding type definition for the parameters of the API ara::log::Logger::Log, and those definitions are defined inside user-defined namespaces to avoid variable or type name collision.

 Namespaces in the modeled message header files
⌈
Based on the symbol attributes of the ordered SymbolProps aggregated by LogAndTraceInterface and LogAndTraceMessageCollectionSet.shortName in role namespace, the C++ namespace of the modeled message header file shall be:

namespace <LogAndTraceInterface.namespace.symbol> {
  namespace <LogAndTraceInterface.namespace.symbol> {
  namespace <...> {
  namespace <LogAndTraceInterface.namespace.symbol>{
  namespace <LogAndTraceMessageCollectionSet.shortName>{
  ...
  } // namespace <LogAndTraceMessageCollectionSet.shortName>
  } // namespace <LogAndTraceInterface.namespace.symbol>
  } // namespace <...>
  } // namespace <LogAndTraceInterface.namespace.symbol>
  } // namespace <LogAndTraceInterface.namespace.symbol>

with all namespace names converted to lower-case letters.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Usage

To use modeled messages, an ARXML file can be used for generating header files which include constexpr variables within corresponding namespaces.

For instance, if the ARXML representation of the manifest contains the following:

<AR-PACKAGES>
<AR-PACKAGE>
  <SHORT-NAME>AUTOSAR</SHORT-NAME>
  <ELEMENTS>
    <LOG-AND-TRACE-INTERFACE>
      <SHORT-NAME>LogAndTraceInterface</SHORT-NAME>
      <NAMESPACES>
        <SYMBOL-PROPS>
          <SHORT-NAME>apd</SHORT-NAME>
          <SYMBOL>apd</SYMBOL>
        </SYMBOL-PROPS>
        <SYMBOL-PROPS>
          <SHORT-NAME>myapp</SHORT-NAME>
          <SYMBOL>myapp</SYMBOL>
        </SYMBOL-PROPS>
      </NAMESPACES>
    </LOG-AND-TRACE-INTERFACE>
    <ADAPTIVE-APPLICATION-SW-COMPONENT-TYPE>
      <SHORT-NAME>`DltMessage_SWC`</SHORT-NAME>
      <PORTS>
        <R-PORT-PROTOTYPE>
          <SHORT-NAME>`DltMessages_RPort`</SHORT-NAME>
          <REQUIRED-INTERFACE-TREF DEST="LOG-AND-TRACE-INTERFACE">/AUTOSAR/LogAndTraceInterface</REQUIRED-INTERFACE-TREF>
        </R-PORT-PROTOTYPE>
      </PORTS>
    </ADAPTIVE-APPLICATION-SW-COMPONENT-TYPE>
    <LT-MESSAGE-COLLECTION-TO-PORT-PROTOTYPE-MAPPING>
      <SHORT-NAME>`DltMessages_Mapping`</SHORT-NAME>

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Customizing message properties

Certain properties can be customized for an individual modeled message, by using the separate API ara::log::Logger::LogWith that allows to add attributes to a modeled message. For instance:

logger.LogWith(std::make_tuple(Location(FILE, LINE)), SpeedMsg, 4.2);

Supported attributes are:

Location: file identifier and line number of the location where the log message is being sent, similar to ara::log::LogStream::WithLocation

Tag: Arbitrary message tag, similar to ara::log::LogStream::WithTag

### 34. Segmentation

Log and Trace module decides based on the knowledge of the lower layer frame length, whether segmentation needs to be used. (case: usage of segmentation for shorter frames needs not to be considered). Overall length of segmented messages is limited to < 2^{48} bytes (i.e. 16bit header length * 32bit sequence).

Proposal for the segementation header: (no handshake needed)

* FrameType (8bit): FirstFrame, ConsecutiveFrame, LastFrame, AbortFrame;
* TotalLength (64bit), only with FirstFrame;
* SequenceCounter (32bit), only with ConsecutiveFrame;
* AbortReason (8bit), only with AbortFrame;

LastFrame indicates successful transmission of the whole message. Successful reception can be assumed if the accumulated length of the data contained in the segmented frames equals the TotalLength of the FirstFrame. In the BaseHeader the HeaderType (HTYP2).Bit 11 shall be reservered for the SegmentationHeader (WS = WithSegmentation). In the ExtensionHeader the length field of the SegmentationHeader will depend on the FrameType;

### 35. Log and Trace Timestamp

When analyzing and comparing the behavior of complex, distributed systems, it is essential to refer all logged events to an absolute time scale. To support this, the logging interface utilizes the Time Synchronization Functional Cluster to automatically append a timestamp of a defined granularity to each message during reception. This allows external clients to synchronize individual log and trace messages from different sources and accurately reconstruct the global timeline of events.

The Log and Trace information is transmitted by means of the DLT protocol which is bus agnostic. This protocol offers the possibility to include a timestamp in each sent message, as long as such messages are sent with an extended header (refer to  for more information).

The synchronized time base is supplied by the Time Synchronization Functional Cluster. The now() method is used by the Adaptive Applications in order to retrieve the current time from the TS (refer to  for more information).

According to the requirement , the reference time base is derived from the machine manifest timeBaseResource.

 Access Synchronized Time Base
⌈
Log and Trace should have accesss to a synchronized time base.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 93 章（内容从略，见纯文本全文）

36. Log and Trace 数据 loss prevention
37. 追踪
38. OS/ara：：log Adapter
39. Precompile 配置 of ara：：log/Trace
40. Static 配置 of ara：：log/Trace
41. Output Bindings
42. 概述
43. Console binding
44. 通用
45. Message arguments
46. bool
47. ara：：核：：Span<const ara：：核：：Byte>
48. InstanceSpecifier
49. std：：chrono：：duration
50. 文件 binding
51. DLT 协议 binding
52. 通用
53. Log level
54. Message arguments
55. bool
56. string 类型
57. ara：：核：：Span<const ara：：核：：Byte>
58. InstanceSpecifier
59. 功能性 Cluster Lifecyle
60. 启动
61. 关机
62. Daemon crash
63. Reporting
64. 安全事件
65. Log Messages
66. Violation Messages
67. Production 错误
68. API 规范
69. PortInterface to API class binding
70. Header：ara/log/common.h
71. Non-Member 类型
72. Header：ara/log/log_stream.h
73. Non-Member Functions
74. Other
75. Class：Argument
76. Class：LogStream
77. Public Member Functions
78. Special Member Functions
79. Member Functions
80. Header：ara/log/logger.h
81. Non-Member 类型
82. Non-Member Functions
83. Other
84. Struct：Format
85. Public Member Variables
86. Class：Logger
87. Public Member Functions
88. Special Member Functions
89. Member Functions
90. 服务接口
91. 配置
92. Default Values
93. Semantic Constraints
94. 附录
95. Mentioned 清单 Elements
96. Demands and constraints on Base 软件 (normative)
97. Platform Extension API (normative)
98. Header：apext/log/trace_arti.h
99. Non-Member Functions
100. Other
101. Not implemented 需求
102. Change History
103. Change History of this document according to AUTOSAR Release R25-11
104. Added 规范 Items in R25-11
105. Changed 规范 Items in R25-11
106. Deleted 规范 Items in R25-11
107. Added Constraints in R25-11
108. Changed Constraints in R25-11
109. Deleted Constraints in R25-11
110. Change History of this document according to AUTOSAR Release R24-11
111. Added 规范 Items in R24-11
112. Changed 规范 Items in R24-11
113. Deleted 规范 Items in R24-11
114. Added Constraints in R24-11
115. Changed Constraints in R24-11
116. Deleted Constraints in R24-11
117. Change History of this document according to AUTOSAR Release R23-11
118. Added 规范 Items in R23-11
119. Changed 规范 Items in R23-11
120. Deleted 规范 Items in R23-11
121. Change History of this document according to AUTOSAR Release R22-11
122. Added 规范 Items in R22-11
123. Changed 规范 Items in R22-11
124. Deleted 规范 Items in R22-11
125. Change History of this document according to AUTOSAR Release R21-11
126. Added 规范 Items "in R21-11"
127. Changed 规范 Items "in R21-11"
128. Deleted 规范 Items "in R21-11"
