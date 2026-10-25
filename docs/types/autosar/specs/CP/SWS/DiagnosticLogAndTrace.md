# Specification of Diagnostic Log and Trace (`DiagnosticLogAndTrace`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 351 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticLogAndTrace_351\AUTOSAR_CP_SWS_DiagnosticLogAndTrace.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticLogAndTrace_351\AUTOSAR_CP_SWS_DiagnosticLogAndTrace.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticLogAndTrace_351\zzgen\CP_SWS_DiagnosticLogAndTrace.complete.txt`

## 文档简介

This specification describes the functionality and the configuration of the AUTOSAR Basic Software module Dlt.

It receives log information from DET, DEM, SW-Cs, or trace information of the RTE. The Dlt module transmits this data via communication busses to make this information visible outside the ECU.

For this purpose, the Dlt module defines the API to send and receive dedicated log/trace information on the bus.

In addition, the NvM module can be optionally used to store an updated filter setting of the Dlt module persistently. This enables the ECU to transmit log/trace information with the desired level without the need of an explicit setup request coming from the communication bus (via a logging tool) at every ECU startup.

The Dlt module is located on top of the PduR and below the RTE as shown in .

Please note: The Dlt Message Format, available Commands, and Protocol (to communicate with an external logging and tracing tool) are defined in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality and the configuration of the AUTOSAR Basic Software module Dlt.

It receives log information from DET, DEM, SW-Cs, or trace information of the RTE. The Dlt module transmits this data via communication busses to make this information visible outside the ECU.

For this purpose, the Dlt module defines the API to send and receive dedicated log/trace information on the bus.

In addition, the NvM module can be optionally used to store an updated filter setting of the Dlt module persistently. This enables the ECU to transmit log/trace information with the desired level without the need of an explicit setup request coming from the communication bus (via a logging tool) at every ECU startup.

The Dlt module is located on top of the PduR and below the RTE as shown in .

Please note: The Dlt Message Format, available Commands, and Protocol (to communicate with an external logging and tracing tool) are defined in .

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms, abbreviations and definitions relevant to the Diagnostic Log and Trace module that are not included in  or in .

| Abbreviation / Acronym | Description |
|---|---|
| APID | Application ID |
| CTID | Context ID |
| Dlt | Diagnostic Log and Trace |
| MCNT | Message Counter |
| MSBF | Most Significant Byte First |
| MSBI | Message Bus Info |
| MSCI | Message Control Info |
| MSLI | Message Log Info |
| MSTP | Message Type |
| MSTI | Message Trace Info |
| NOAR | Number of Arguments |
| STMS | Timestamp |
| UEH | Use Extended Header |
| VERB | Verbose |
| VERS | Version Number |
| WEID | With ECU ID |
| WSID | With Session ID |
| WTMS | With Timestamp |

### 3. Term and 定义
*原文标题：Term and definition*

| Term | Description: |
|---|---|
| Log and trace message | A log and trace message contains all data and options to describe a log and trace event in a software. The log and trace message consists of a header and payload. |
| Dlt User | A Dlt User represents the source of a generated Dlt message. The possible users are SW-Cs, RTE (for VFB traces), DEM, or DET. |
| Log Message | A Log Message contains debug information like state changes or value changes. |
| Trace Message | A Trace messages contains information, which has passed via the VFB. |
| ECU ID | ECU ID is the name of an ECU, composed by four 8-bit ASCII characters (e.g., ABS0 or COMB). |
| Session | A session is a logical entity of source of log or trace messages. If an application / SW-C is instantiated several times, each instance gets a globally unique session ID with respect to the application / context ID. It is possible for an application / SWC to have several simultaneous log or trace sessions, if it has several ports opened to Dlt. |

Since Session ID is not specified in AUTOSAR for SW-Cs, the port defined argument values shall be used for this number.
| Session ID | Session ID is the identification number of a log or trace session. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 相关文档
*原文标题：Related documentation*

### 5. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 6. Related standards and norms

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software  which is also valid for Dlt.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 限制
*原文标题：Limitations*

VFB Trace only supports the non-verbose mode. I.e., the Dlt module will send out the arguments in a raw format, simply doing a memory copy of the arguments to the trace message.

The Dlt data type model does NOT support arbitrarily nested complex data types, which AUTOSAR does. So there is no generic way to transform arguments given to the VFB Trace hook functions into Dlt data types needed for the verbose mode.

An ASAM Fibex description cannot be generated by the Dlt module as the in-memory representation might not be compliant to the SWCD data type description of the arguments.

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

This basic software module can be used for all car domains.

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 12. RTE

The RTE  (including the VFB and the BSW Scheduler) is used to interact with SW-Cs to generate Log and Trace messages and to call the Dlt module's Tx function cyclically.

### 13. PDU Router

In order to transmit Dlt messages on the communication bus, the Dlt module interacts with the PDU Router.

### 14. NvM

In order to load and store altered configurations like filter settings and/or Log Channel assignments, the NvM module can optionally be used.

### 15. GPT

In order to derive a time stamp, the GPT module can be used for this purpose.

### 16. StbM

In order to get a synchronized time value (Local Time Base derived from Global Time Base) in standard/extended format., the StbM module can be used for this purpose.

### 17. DET

In order to be able to report default errors and to forward DET errors to the communication bus, the Dlt module has to interact with the DET module. However, the interaction with DET is optional.

### 18. DEM

In order to be able to report development errors and to transmit DEM events on the communication bus, the Dlt module has to interact with the DEM module using a CDD and/or a SW-C. No standardized interaction between DEM and DLT is available.

### 19. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference requirements specified in an upper tracing level context and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement, this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| BSW Modules shall support link-time configuration |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| Each module shall provide version information |  |  |
| BSW Modules shall support post-build configuration |  |  |
| BSW Modules shall support multiple configuration sets |  |  |
| No description |  |  |
| Init functions shall have a pointer to a configuration structure as single parameter |  |  |

### 20. 功能规范
*原文标题：Functional specification*

### 21. Dlt 规范
*原文标题：Dlt specification*

The following chapters describe the AUTOSAR specific data and control paths the Dlt module needs for the interaction with SW-Cs, PduR, and an external client (logging tool).

### 22. Dlt commands

The Dlt Protocol specifies all sorts of Dlt Commands which are identified by unique Service IDs. The Dlt Commands are used to modify the behavior of the Dlt module at runtime, e.g., fetching information about the current Dlt configuration or altering filter settings.

 Supported Service ID to Dlt Command Name mapping
  Upstream requirements:
⌈
| Service ID | Dlt Command Name | Description |
|---|---|---|
| 0x01 | SetLogLevel | Set the Log Level |
| 0x02 | SetTraceStatus | Enable/Disable Trace Messages |
| 0x03 | GetLogInfo | Return the LogLevel for registered SW-Cs |
| 0x04 | GetDefaultLogLevel | Return the Log Level for wildcards |
| 0x05 | StoreConfiguration | Store the current configuration non-volatile |
| 0x06 | ResetToFactoryDefault | Set the configuration back to default |
| 0x0A | SetMessageFiltering | Enable/Disable the Dlt filters |
| 0x11 | SetDefaultLogLevel | Set the LogLevel for wildcards |
| 0x12 | SetDefaultTraceStatus | Enable/Disable Trace Messages for wildcards |
| 0x15 | GetDefaultTraceStatus | Get the current TraceLevel for wildcards |
| 0x17 | GetLogChannelNames | Return the name(s) of the LogChannel(s) |
| 0x1F | GetTraceStatus | Get the current trace status (on/off) |
| 0x20 | SetLogChannelAssignment | Add/ Remove the given |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Dlt interaction with 软件 components
*原文标题：Dlt interaction with software components*

The Dlt module offers interfaces SW-Cs can use for sending Log and Trace Messages as shown in .

Optionally, SW-Cs can provide a port for notifications on log level threshold and trace status changes, which are provided by the Dlt module separately for every tuple of DltSwcApplicationId/DltSwcContextId. These notifications can be used to avoid already the generation of Log and Trace Messages by the SW-Cs, instead of having them to be filtered out later on by the Dlt module.

Since the Dlt module supports multiple instances of SW-Cs, which use the same tuples of DltSwcApplicationId/DltSwcContextId, an additional DltSwcSessionId) parameter allows distinguishing log/trace messages from different instances of the same SW-C.

To separate those SW-Cs technically from each other and to avoid that SW-Cs have to use unique DltSwcSessionId)s in calls to SendLogMessage/SendTraceMessage (details, see next chapters), the Dlt module provides a dedicated PPortPrototype per configured SW-C (see configuration parameter DltSwcSessionId) where the SessionId is managed as a port-defined-argument.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Registering ApplicationIDs and ContextIds to Dlt

The Dlt module is able to inform SW-Cs about a log level change. For this purpose, they have to register at the Dlt module, using a tuple of DltSwcApplicationId/DltSwcContextId at runtime.

Note:Because the development of SWCs are part of this specification, the Dlt module has to collect this information at runtime.

⌈
The Dlt module shall remember all tuples of DltSwcApplicationIds and DltSwcContextIds of the SW-Cs, which register to the Dlt module.
⌋

⌈
The Dlt module shall manage a log level and a trace state for every tuple of DltSwcApplicationId and DltSwcContextId.
⌋

Note: In addition, a dynamic registration supports the possibility for the Dlt module to see which SW-C/runnable is active and which not. This is essential to know which SW-C to inform in case of a log level or trace status change.

When a SW-C is calling the `Dlt_RegisterContext` method of the DltSwcMessageService interface, a port defined argument value is provided sessionId to the Dlt module.

The value of this port defined argument corresponds to LogTraceSessionControl interface of the SW-C/runnable for providing information about the changing of a log level to the SW-C/runnable.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Unregistering ApplicationIDs and ContextIds to Dlt

In case a SW-C is going to be stopped, it should unregister itself. This information can be used to inform an external client (e.g. a logging device) about the current SW-C status.

⌈
The Dlt module shall delete all tuples of DltSwcApplicationIds and DltSwcContextIds of the SW-Cs which unregister to the Dlt module from the list of registered applications.
⌋

Note: For these tuples, the Dlt module will not try to notify the corresponding SWC any more about LogLevel changes.

⌈
If the parameter DltGeneralRegisterContextNotification is set to TRUE, every time `Dlt_UnregisterContext` is called, the Dlt module shall send the Dlt Control Message `Dlt_GetLogInfo` containing the provided DltSwcApplicationId/DltSwcContextId with parameter status set to 5.
⌋

### 26. Using port defined argument values for the 定义 of SessionIds
*原文标题：Using port defined argument values for the definition of SessionIds*

For every function call of `Dlt_SendLogMessage`, `Dlt_SendTraceMessage`, `Dlt_RegisterContext` and `Dlt_UnregisterContext`, a port defined argument value needs to be provided.

⌈
Port defined argument values shall be used by the Dlt module as SessionIds.
⌋

Note: A session is the part of a SW-C for which a log level monitor is responsible. For each log level monitor the same SessionId (port defined argument value) shall be used.

⌈
The port defined argument value corresponds to the defined

SessionID. The value shall start at 0x1000 (for BSW modules the module ID is taken).
⌋

⌈
Each port of a SW-C connected to the Dlt module shall have a unique SessionId as port defined argument. The range of SessionIds shall be continuous.
⌋

### 27. VFB trace

The VFB trace is specified in the RTE. The meaning of VFB trace is an implicit (system inherent) forwarding of SW-C communication data (which flows over the RTE) to the Dlt module. Trace means in this case that no explicit call by the SW-C is made to forward this data to Dlt. This section describes the interaction of the RTE with the Dlt module to record a VFB trace and the internal control of the trace data.

### 28. 接口 provided by Dlt for VFB traces
*原文标题：Interfaces provided by Dlt for VFB traces*

In case the Dlt module is used as a VFB trace client, the RTE has to be configured accordingly. This means that the RTE configuration parameter RteVfbTraceClientPrefix has to be configured with value "Dlt".

The configuration, whether VFB tracing is enabled at all and which traceable events are supported/activated, is solely configured in the RTE module.

From its configuration, the RTE generator then updates in Generation Phase the RTEs Basic Software Module Description with BswModuleEntries for each configured VFB trace hook function. Those BswModuleEntries exactly describe the expected function prototype the configured trace clients have to provide:

* The expected function name is defined by the shortName.
* The rest of the expected signature is defined by the contained arguments.

The Dlt module has to provide the implementation for all BswModuleEntries, which are referenced by the attribute outgoingCallback of the BswModuleDescription of the RTE, whose shortName starts with "`Rte_Dlt`".

  Upstream requirements:
⌈
The Dlt module shall be compliant to the VFB trace described in the `AUTOSAR_RTE_SWS`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Generating hook functions

Upstream requirements:
⌈
Because the interface `Dlt_SendTraceMessage` is a SW-C interface, an internal function which is equivalent to `Dlt_SendTraceMessage`, shall be implemented to be called by the generated hook functions.
⌋

  Upstream requirements:
⌈
In the hook function the internal representation of `Dlt_SendTraceMessage` shall be called. This call shall be in non-verbose mode.
⌋

⌈
The payload for this hook function call shall be filled with the arguments provided by the hook function. All data transported with the arguments shall be provided.
⌋

⌈
The argument data shall be written in raw format to the payload.
⌋

⌈
Every hook function shall get its own DltSwcContextId.

In some cases some events can be bundled to the same ContextId. This shall mostly be done if a very large number of signals are traced.
⌋

⌈
The ApplicationID shall be "VFBT".
⌋

⌈
The Message Type (MSTP) entry in the generated trace message shall be set to `DLT_TYPE_APP_TRACE`, the Message Trace Info (MSTI) entry in this case shall be set to `DLT_TRACE_VFB`.
⌋

⌈
Because non-verbose mode is used, a unique Message ID as defined in  shall be used for each call to `Dlt_SendTraceMessage`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Log messages from DEM

⌈
The ApplicationID, ContextId and Message ID of a Log Message sent for a DEM event shall have the following values:

ApplicationID = "DEM"

ContextId = "STD0"

MessageID = 0x00000001
⌋

### 31. Recommendation for generation of Message IDs

The payload of non-verbose messages contains the Message ID. The Message ID shall be unique for an ECU. The problem is that Message IDs are provided by a SW-C (the user of Dlt) and at the point in time when coding of the log and trace message calls are done there is no instance to guarantee the uniqueness of used Message IDs.

A possible solution is to map all Log Messages in a virtual memory segment and then use the memory address as Message ID. Another solution is to have an authoring tool that is responsible for the uniqueness of the Message IDs.

In addition, it could be possible to fix Message ID values during the post build process, so uniqueness for the ECU can be guaranteed.

It is important to provide for every Message ID a description for the associated message.

⌈
MessageIds used for DEM (0x00000001) and DET (0x00000002), and Trace Messages (0x00000003) are reserved and therefore not usable for SW-Cs.
⌋

### 32. 启动行为
*原文标题：Startup behavior*

The Dlt module specifies several configuration parameters, which can be reconfigured during runtime via API calls or via Dlt control messages.

This means, that those configuration parameters respectively data structures, which are based on them, have to be loaded into runtime variables during the startup of the Dlt module.

In addition, it might happen that SW-Cs and/or BSW modules are already generating log and trace data even though the Dlt module itself has not been initialized yet. For this scenario, the Dlt module offers the possibility to buffer even this data until the Dlt module is initialized.

The described functionalities result in the requirements below:

  Upstream requirements:
⌈
The Dlt module shall be able to buffer data coming from calls to `Dlt_SendLogMessage` and/or `Dlt_SendTraceMessage` even if the Dlt module has not been initialized yet.
⌋

⌈
When the `Dlt_Init` is called, the optional timer DltGeneralStartUpDelayTimer shall be started if configured.
⌋

⌈
If the parameter DltGeneralNvRAMSupport is disabled, static Dlt module configuration shall be used for initialization.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Persistent storage of 配置
*原文标题：Persistent storage of configuration*

The Dlt module offers the possibility to store configuration data in the NVRamManager module. Therefore, it is recommended to call the `Dlt_Init` function only after the NVRamManager module has been initialized.

The persistency functionality of the Dlt module supports the non-volatile saving of configuration values, which are modifiable during runtime.

The idea is to allow to customize the logging configuration during runtime and to assure that this configuration is recovered after an ECU reset or restart.

⌈
If the parameter DltGeneralNvRAMSupport is set to TRUE, non-volatile memory blocks shall be used by the Dlt module to store the current Dlt configuration persistently.
⌋

⌈
If the parameter DltGeneralNvRAMSupport is set to TRUE, the Dlt module has to verify the validity of the non-volatile blocks used.
⌋

⌈
If the parameter DltGeneralNvRAMSupport is set to TRUE, the stored Dlt configuration shall be used as initial values.
⌋

Note: Initial values in this case are the initial values for the persistent stored values for the first startup of the ECU.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Sending of Log and Trace Messages

The Dlt data path describes the flow a Dlt Log and Trace Message takes from the source to the sink. The source can be either a SW-C or a BSW module, whereas the PDU Router is representing the sink.

Figure  provides an overview of the separate steps to send a Dlt message on the communication bus:

Sending of Log and Trace messages is done with the dedicated functions `Dlt_SendLogMessage` and `Dlt_SendTraceMessage`.

Two additional functions exist that allow to give additional attributes to Log and Trace messages. These functions are named `Dlt_SendLogMessageWithAttributes` and `Dlt_SendTraceMessageWithAttributes` respectively. These two are pure supersets of the previously mentioned ones, which remain in the Standard for backwards-compatibility and convenience purposes, for the common case where no additional attributes are needed.

Please note that throughout this document, whenever the functions `Dlt_SendLogMessage` or `Dlt_SendTraceMessage` are being mentioned, these need to be understood as a shorthand notation a for `Dlt_SendLogMessage` or `Dlt_SendLogMessageWithAttributes` and `Dlt_SendTraceMessage` or `Dlt_SendTraceMessageWithAttributes` respectively, unless otherwise noted.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Generating the timestamp

Depending of the current configuration, a timestamp may be added to the Dlt message.

⌈
Only if the parameter DltHeaderUseTimestamp is set to TRUE, shall the Dlt module fetch a timestamp.
⌋

⌈
If the parameter DltHeaderUseTimestamp is set to TRUE, but the Dlt module cannot fetch a timestamp for any reason, the timestamp shall be set to 0x00000000.
⌋

⌈
If the parameter DltHeaderUseTimestamp is set to TRUE and DltGeneralGptChannelRef is configured, the Dlt module shall call the API `Gpt_GetTimeElapsed` with the configured channel reference (see DltGeneralGptChannelRef) to fetch the elapsed time.
⌋

⌈
If the parameter DltHeaderUseTimestamp is set to TRUE and DltGeneralStbMTimeBaseRef is configured, the Dlt module shall call the API `StbM_GetCurrentTime` with the configured time base reference (see DltGeneralStbMTimeBaseRef) to fetch the current synchronized time and calculate the elapsed time.
⌋

### 36. Message 过滤
*原文标题：Message filtering*

Message filtering means to accept or discard an incoming log or trace message based on the DltSwcApplicationId/DltSwcContextId tuple, which is assigned to that message.

Filtering differs slightly between Log Messages (`Dlt_SendLogMessage`) and trace messages (`Dlt_SendTraceMessage`).

⌈
For Dlt Log Messages, the highest LogLevel Threshold shall be defined as `DLT_LOG_VERBOSE`
⌋

⌈
For Dlt Log Messages, the lowest LogLevel Threshold shall be defined as `DLT_LOG_OFF`.
⌋

Note: The `Dlt_MessageLogLevelType` defines all possible Log Message filter levels.

⌈
For Log Message filtering the Dlt internally manages LogLevel threshold to DltSwcApplicationId/DltSwcContextId tuple mappings (see configuration parameter DltLogLevelThreshold).
⌋

⌈
For trace message filtering the Dlt internally manages trace activation state to DltSwcApplicationId/DltSwcContextId tuple mappings (see configuration parameter DltTraceStatusAssignment).
⌋

Note: The matching algorithm for finding the proper mapping element (containing a threshold log level value in the Log Message case respectively containing a trace activation state in the trace message case) is identical for Log Messages and trace messages.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Select target LogChannel

In this step, the Dlt module identifies on which LogChannel(s) the log or trace message will be transmitted.

⌈
For LogChannel selection the Dlt module manages LogChannel to DltSwcApplicationId/DltSwcContextId tuple mappings. (see configuration parameter DltLogChannelAssignmentSwcContextRef).
⌋

Note: There can be several LogChannels configured for a given DltSwcApplicationId/DltSwcContextId tuple contained in a `Dlt_SendLogMessage` or `Dlt_SendTraceMessage` call.

⌈
To find the matching LogChannels for the DltSwcApplicationId/DltSwcContextId tuple contained in a `Dlt_SendLogMessage` or `Dlt_SendTraceMessage` call, the Dlt module shall do the following steps:

* From all mapping elements, where DltSwcApplicationId/DltSwcContextId tuple of mapping element equals to the DltSwcApplicationId/DltSwcContextId tuple of the log/trace message, the LogChannel shall be added to the list of output LogChannels.
* From all mapping elements, where ApplicationID of mapping element equals to the ApplicationID of the log/trace message AND the ContextId of mapping element equals wildcard (value 0x00000000), the LogChannel shall be added to the list of output LogChannels.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Check message length

⌈
If the Dlt message length including the required Dlt headers exceeds the configured value given by DltLogChannelMaxMessageLength for all assigned LogChannels, discard this Dlt message and return `DLT_E_MSG_TOO_LARGE`.
⌋

Note: If the message is short enough for at least one assigned LogChannel, continue to process this message for all LogChannels where the message is short enough.

### 39. Apply LogChannel LogLevelThreshold

In this step, the Dlt module decides, individually for each identified log and trace channel, whether the current log or trace message may pass or not.

⌈
Log messages with a log level numerically higher than the configured value of LogChannel threshold for the identified LogChannel shall be discarded and E_OK shall be returned. This shall be done on each LogChannel from the list of output LogChannels for the Log Message, considering .
⌋

⌈
Trace messages shall be filtered out, when the config parameter DltTraceStatus is FALSE for the identified LogChannel. That means they do not proceed to the next processing step and E_OK is returned.
⌋

### 40. Copying Dlt message to the LogChannel buffer

In this step the Dlt module copies the Dlt message to all buffers of the LogChannels, which the Dlt message is assigned to.

⌈
The Dlt module shall copy the log/trace message which has passed the message filters to all assigned target LogChannel buffers where the Dlt message length is not larger than DltLogChannelMaxMessageLength of the respective LogChannel.
⌋

⌈
If there was not enough space to copy the complete message to any of the assigned LogChannel's buffer, `DLT_E_NO_BUFFER` shall be returned and the Dlt log and trace message shall be discarded.

In addition, check each assigned buffer whether it was already full before, i.e., check Dlt internal flags to store a buffer overflow event:

* If the buffer overflow flag is currently not set for this buffer:

  * Set the buffer overflow flag to indicate the occurrence of a buffer overflow
  * The Dlt log and trace message shall be discarded
* If the buffer overflow flag for this buffer was already set for this buffer:

  * The Dlt log and trace message shall be discarded
* Send Dlt Control Message(s) "BufferOverflowNotification" according to the configuration. Please refer to chapter ("BufferOverflowNotification")
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Apply the message attributes, if any are present and supported

Optional attributes can be added to a message when using the APIs `Dlt_SendLogMessageWithAttributes` or `Dlt_SendTraceMessageWithAttributes`, and if the configuration parameter DltProtocolVersion is set to 2 or higher.

The attributes are given as an additional function argument of type pointer to `Dlt_MessageAttributesType`.

The `Dlt_MessageAttributesType` structure has been designed to be extensible; any future extension of this structure will be provided as new fields, either with an in-band "invalid" state (e.g. a null pointer), or with a separate bool flag denoting the existence of a meaningful value for the subsequent field.

Therefore, prior to calling a function defined in this standard which reads values from a `Dlt_MessageAttributesType` structure (such as `Dlt_SendLogMessageWithAttributes`), the application shall ensure that all members of the structure, including any additional non-standardized members, are initialized with default initialization.

This can be done, for instance, with: `Dlt_MessageAttributesType` attributes = { 0 };

The messageTags field of the `Dlt_MessageAttributesType` type constitutes a pointer to an array of strings.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Sending messages from LogChannel Buffer

⌈
The sending of Dlt messages via the PduR API shall be decoupled from the `Dlt_SendLogMessage` and `Dlt_SendTraceMessage` API call.
⌋

Note: The decoupling is done because of the following reasons:

* Shortening runtime of calls from the SW-Cs/BSWs which trigger log/trace messages, to reduce blocking time.
* In case traffic shaping functionality is enabled, the transmissions have to be processed by an asynchronous cyclic BSW entity anyway.
* In case retry feature is enabled a decoupled BSW entity, which cares for retries, is needed anyway.

⌈
The Dlt module shall transmit Dlt messages collected in the LogChannel specific buffer from the context of the `Dlt_TxFunction` function.
⌋

⌈
The Dlt Message Header shall be assembled before `PduR_DltTransmit` is called.
⌋

Note: For details regarding the assembling of the Dlt Message Header, please refer to the next section.

⌈
The Dlt module shall use the `PduR_DltTransmit` function to send the Dlt message with the configured DltTxPduId.
⌋

⌈
The Dlt module shall monitor a transmit counter for each Dlt message in a LogChannel specific buffer.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 140 章（内容从略，见纯文本全文）

43. Create Dlt message header
44. Assembling the Dlt Header
45. Assembling the Dlt Extended Header
46. Removing messages from LogChannel buffer
47. Receiving of Dlt commands
48. SetLogLevel
49. SetTraceStatus
50. GetLogInfo
51. GetDefaultLogLevel
52. StoreConfiguration
53. ResetToFactoryDefault
54. SetMessageFiltering
55. SetDefaultLogLevel
56. SetDefaultTraceStatus
57. GetDefaultTraceStatus
58. GetLogChannelNames
59. GetTraceStatus
60. SetLogChannelAssignment
61. SetLogChannelThreshold
62. GetLogChannelThreshold
63. Sending of Dlt commands
64. BufferOverflowNotification
65. 错误分类
66. Development 错误
67. Runtime 错误
68. Production 错误
69. Extended Production 错误
70. API 规范
71. Imported 类型
72. 类型定义
73. Dlt_ConfigType
74. Dlt_MessageType
75. Dlt_MessageNetworkTraceInfoType
76. 功能定义
77. Dlt_Init
78. Dlt_GetVersionInfo
79. Dlt_SendTraceMessage
80. Dlt_SendLogMessage
81. Dlt_RegisterContext
82. Dlt_UnregisterContext
83. Dlt_SetLogLevel
84. Dlt_SetTraceStatus
85. Dlt_GetLogInfo
86. Dlt_GetDefaultLogLevel
87. Dlt_StoreConfiguration
88. Dlt_ResetToFactoryDefault
89. Dlt_SetMessageFiltering
90. Dlt_SetDefaultLogLevel
91. Dlt_SetDefaultTraceStatus
92. Dlt_GetDefaultTraceStatus
93. Dlt_GetLogChannelNames
94. Dlt_GetTraceStatus
95. Dlt_SetLogChannelAssignment
96. Dlt_SetLogChannelThreshold
97. Dlt_GetLogChannelThreshold
98. Dlt_SendLogMessageWithAttributes
99. Dlt_SendTraceMessageWithAttributes
100. Callback 通知
101. Dlt_RxIndication
102. Dlt_TriggerTransmit
103. Dlt_TxConfirmation
104. Dlt_TpTxConfirmation
105. Dlt_CopyTxData
106. Dlt_StartOfReception
107. Dlt_TpRxIndication
108. Dlt_CopyRxData
109. Scheduled functions
110. Dlt_TxFunction
111. Expected 接口
112. Mandatory 接口
113. Optional 接口
114. Configurable 接口
115. 服务接口
116. Client-Server-Interfaces
117. DltControlService
118. InjectionCallback
119. LogTraceSessionControl
120. DltSwcMessageService
121. Implementation 数据类型
122. Dlt_ApplicationIDType
123. Dlt_ContextIDType
124. Dlt_SessionIDType
125. Dlt_LogInfoType
126. Dlt_ContextIdInfoType
127. Dlt_ApplicationIdInfoType
128. Dlt_MessageOptionsType
129. Dlt_MessageLogInfoType
130. Dlt_MessageLogLevelType
131. Dlt_MessageTraceType
132. Dlt_MessageArgumentCount
133. Dlt_MessageTraceInfoType
134. Dlt_LogChannelNameInfoType
135. Dlt_AssignmentOperation
136. Dlt_MessageAttributesType
137. Ports
138. Dlt_ControlService
139. Dlt_InjectCallback_{SW-C}
140. Dlt_SessionControlCallback_{SW-C}
141. Dlt_SwcMessageService_{SW-C}
142. 时序图
143. Dlt 初始化
144. 概述 of Dlt message transmission on one LogChannel
145. SetLogLevelFilter
146. Buffer overflow indication
147. 配置规范
148. Containers and 配置 parameters
149. Dlt
150. DltGeneral
151. DltSwc
152. DltSwcContext
153. DltConfigSet
154. DltProtocol
155. DltEcuId
156. DltEcuIdCalloutChoice
157. DltEcuIdValueChoice
158. DltLogLevelSetting
159. DltLogLevelThreshold
160. DltLogChannelAssignment
161. DltTraceStatusSetting
162. DltTraceStatusAssignment
163. DltLogOutput
164. DltLogChannel
165. DltTxPdu
166. DltRxPdu
167. 发布信息
168. 附录
169. Mentioned Class Tables
170. Change History
171. Change History of this document according to AUTOSAR Release R23-11
172. Added 规范 Items in R23-11
173. Changed 规范 Items in R23-11
174. Deleted 规范 Items in R23-11
175. Change History of this document according to AUTOSAR Release R24-11
176. Added 规范 Items in R24-11
177. Changed 规范 Items in R24-11
178. Deleted 规范 Items in R24-11
179. Change History of this document according to AUTOSAR Release R25-11
180. Added 规范 Items in R25-11
181. Changed 规范 Items in R25-11
182. Deleted 规范 Items in R25-11
