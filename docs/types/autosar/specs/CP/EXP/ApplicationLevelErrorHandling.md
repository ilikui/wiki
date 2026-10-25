# Explanation of Error Handling on Application Level (`ApplicationLevelErrorHandling`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 378 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_ApplicationLevelErrorHandling_378\AUTOSAR_CP_EXP_ApplicationLevelErrorHandling.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_ApplicationLevelErrorHandling_378\AUTOSAR_CP_EXP_ApplicationLevelErrorHandling.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_ApplicationLevelErrorHandling_378\zzgen\CP_EXP_ApplicationLevelErrorHandling.complete.txt`

## 文档简介

The purpose and aim of this document is to survey application level error handling mechanisms common in the automotive industry and available for use with AUTOSAR. This includes both handling of errors at the application level and handling of application level errors.

Error handling in this context refers to the complete handling chain, i.e., detection, isolation/identification and recovery. A set of error handling mechanisms useful for automotive systems is presented, which cover all three phases of error handling. Each mechanism is first described in a high-level manner, describing applicability for error handling and technical aspects. Then, AUTOSAR functionality related to the mechanism is reviewed and it is detailed where in an AUTOSAR system the mechanism is implemented or supported. Consequently, the list of mechanisms includes both mechanisms fully (or partially) supplied by AUTOSAR and mechanisms that should be implemented at SW-C-level by application developers, if incorporated into the system. Note that the set of mechanisms covered is not complete and limited to mechanisms that can be implemented for systems built on AUTOSAR release 4.0. Alternate and additional mechanisms are possible and future releases of AUTOSAR may enable even more error handling functionality. Also, this document does not prescribe the use of any mechanisms - the decision is of course solely up to the application developers and integrators.

This document is intended as a description of possible mechanisms and is primarily aimed at application/SW-C developers. However, it can also be of use to developers of BSW-modules. Focus is on random faults, not on systematic design faults (such as SW bugs). Examples of such faults include HW faults affecting the application, communication or peripheral devices. It focuses on errors most suitably handled by SW-Cs, not covering error handling within or below the RTE, such as COM and OS error handling.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

The purpose and aim of this document is to survey application level error handling mechanisms common in the automotive industry and available for use with AUTOSAR. This includes both handling of errors at the application level and handling of application level errors.

Error handling in this context refers to the complete handling chain, i.e., detection, isolation/identification and recovery. A set of error handling mechanisms useful for automotive systems is presented, which cover all three phases of error handling. Each mechanism is first described in a high-level manner, describing applicability for error handling and technical aspects. Then, AUTOSAR functionality related to the mechanism is reviewed and it is detailed where in an AUTOSAR system the mechanism is implemented or supported. Consequently, the list of mechanisms includes both mechanisms fully (or partially) supplied by AUTOSAR and mechanisms that should be implemented at SW-C-level by application developers, if incorporated into the system. Note that the set of mechanisms covered is not complete and limited to mechanisms that can be implemented for systems built on AUTOSAR release 4.0.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 范围
*原文标题：Scope*

This document concerns error handling from an application's point of view. That is, it describes mechanisms for detection, isolation and recovery at application level, as well as mechanisms that can handle faults relevant for applications (e.g. memory access violations or timing violations).

The focus is on handling of errors which mainly are the effects of random external faults. Even though systematic faults (i.e. design faults) can manifest themselves in the same way as external faults, these are not the primary target of this document. The handling of systematic faults is related to development (e.g., processes, design methodologies, and debugging) rather than error handling during system operation.

Error handling in AUTOSAR is not restricted to application level error handling. The BSW has a number of built-in error handling mechanisms which are able to provide e.g. reliable communication, synchronization, etc. However, these mechanisms will not be described in this document.

### 3. Guide to this Document

Depending on the familiarity of the reader to the various terms and definitions used in the area of dependable systems, some parts of the document can be flipped through quite quickly or even skipped. If you are very familiar with the area of dependable system, you might even go to Section  directly. In Table  you will find a summary of the subsequent chapters in order to identify which parts are of most interest to you.

| Section | Description |
|---|---|
| Scope | This section describes the assumptions made in this document. The assumptions concern for example existence of some basic dependability mechanisms in the BSW. |
| Definition of terms and acronyms | This section contains an overview of the terms used in this document, including descriptions of the terms fault, error, failure, a description of the FDIR (Fault Detection, Isolation and Recovery) process, and a description of various failure modes. If you are familiar with the concepts in the area of dependable systems, you can browse through this part rather quickly. |
| Error model | This section describes the types of errors that we have considered to be the most important ones from an automotive application point-of-view. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

The table below includes acronyms and abbreviations relevant to this document which are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|

 |

### 5. 基础 dependability terms
*原文标题：Basic dependability terms*

The fundamental concepts and terms of dependability used in this document are adopted directly from . This section contains a short overview of the main terms and definitions used for dependable systems. It should be noted here that the word system is used in a very wide sense in this context. A system can denote anything from a single SW-C to a complete vehicle with multiple networks and ECUs. However, as the document is aimed at application level error handling, a system in the rest of the document should denote a software application, potentially consisting of multiple SW-Cs, possibly mapped over a set of (distributed) ECUs.

The term dependability is defined as "the trustworthiness of a system such that reliance can justifiably be placed on the service it provides". This means that a dependable system is one upon which the user (either human or non-human) can place its trust in that the services provided by the system are correct. The dependability of a system is characterized by a set of attributes, compromised by a set of impairments, and achieved and analyzed by a set of means.

The dependability attributes characterize, and profile, the dependability of a given system.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Fault 检测, Isolation and Recovery (FDIR)
*原文标题：Fault Detection, Isolation and Recovery (FDIR)*

The process of handling faults during system operation is often referred to as FDIR, which stands for Fault Detection, Isolation, and Recovery.

Detection: The crucial first step in handling a fault is of course to become aware that it has occurred. Without this detection, no further activities can be performed. When it comes to detection, the original fault is often very hard to detect. What can be detected are the effects of the fault, that is, errors. These are detected by monitoring the state of the system.

Errors can manifest in different ways. The main manifestations are

# erroneous values in the system (data errors),
# erroneous execution time (timing errors),
# erroneous sequence or execution order (program flow errors).
# erroneous access to system resources, such as memory

Errors may propagate and generate consecutive faults which in turn may result in new errors, e.g., an erroneous data value is used as a pointer and causes a memory access violation, which may create an erroneous value in another data value if a value is written to the erroneous memory location.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 相关文档
*原文标题：Related Documentation*

### 8. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

This document is related to many other documents published within AUTOSAR, especially those handled by the AUTOSAR Functional Safety team. The purpose of this document is not to replace any of these other documents, but to view the work done in other work packages from an application developer's point of view. Consequently there is a significant amount of overlap between this document and other documents, which shows the maturity reached within AUTOSAR.

For each mechanism a list of related AUTOSAR documentation is presented, which forms the explicit relation between this document and other AUTOSAR documents.

Information about functional safety mechanisms and measures is distributed throughout the AUTOSAR specification documents. Unless one knows how functional safety mechanisms are supported and where the necessary information is specifically located, it is difficult to evaluate how a safety-relevant system can be implemented using AUTOSAR efficiently.

The AUTOSAR document  summarizes the key points related to functional safety in AUTOSAR, explains how functional safety mechanisms and measures can be used and references the respective documents.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 错误建模
*原文标题：Error model*

Design of dependable systems is based on a systematic analysis of potential faults (fault models) i.e., a set of postulated faults, derived from the operating environment of the system, which helps the designer or user to predict the consequences of these fault and define mechanisms for handling (detect, recover from etc.) those particular faults.

Faults can manifest on all levels of a system, from pure random HW faults (e.g., bit-flips) to SW (e.g., design defects) and faults in the interaction between components (e.g., incomplete interface specifications). Similarly faults are introduced throughout the design process (requirements, analysis, design, implementation, etc.). As this document is aimed at application level error handling focus is on errors that are expected to be handled by AUTOSAR SW components, either because application level knowledge is needed for the FDIR process, or because they have propagated from lower layers. Note that some errors of those types considered in this document can be handled by the BSW, but some may propagate to the application level and must therefore be handled there..

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 错误处理 mechanisms
*原文标题：Error handling mechanisms*

### 11. 概述
*原文标题：Overview*

This section describes a number of mechanisms on a high, conceptual level. These mechanisms can be used by application developers to incorporate error handling in the description or in the realization of applications.

Each mechanism is classified as being applicable or not applicable to a certain error type (as defined in Section ). If a mechanisms is applicable this indicates that the mechanism is suitable for use to detect (or isolate or recover from) a specific set of errors. It is important to note that it does not imply that all errors of a specific type are detected. Each mechanism needs to be tuned to detect the specific errors required, and may only be able to handle a subset of the errors in an error class.

Some mechanisms are only partially applicable if they can be used in a straightforward manner in conjunction with some other mechanisms. For instance, when detecting that the value received from a sensor is wrong a substitute (safe) value can be used instead as a form of recovery. However, this only partially solves the recovery from the failed sensor, additional mechanisms are needed as well to fully recover, e.g., re-initialization of sensor.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Plausibility checks

### 13. 描述
*原文标题：Description*

One of the most common ways to incorporate application specific knowledge is to construct monitors which check that the current value of a variable or a set of variables maintains some predefined condition, i.e., that they are plausible. A plausibility check is a predicate defined over set of variables in the application that can be checked dynamically at run time. The values that are being checked may represent values used for calculations, state values, or other kinds of values. Plausibility checks come in mainly two different flavours: i) checking the validity of a single value, and ii) comparing multiple values.

Checking the validity of a single value: As the name suggests, checks are made for the validity of a value, i.e., if the value falls in a range of "good" values, if it follows a known pattern or behaviour etc. Such discrimination can typically only be made using specific knowledge regarding the application and/or its environment, such as maximum vehicle speed, minimum engine temperature etc.

Checks can be of range type (within a range or set of "good" values) or of differential nature (change from previous value, less than etc).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Applicability

| Step\Error Model | Data | Program flow | Access | Timing | Asymmetric |
|---|---|---|---|---|---|
| Detection | X |  |  |  |  |
| Isolation | X |  |  |  |  |
| Recovery |  |  |  |  |  |

Validity checks are used to detect data errors in an application, where ranges of allowed/disallowed values can be defined. It is limited to the designer's ability to define such ranges based on requirements and/or application knowledge. Maintenance and traceability of such ranges must be handled within the development process. Undocumented or not up-to-date checks remaining in production code present a risk for the dependability of the application.

In some cases "safe" values can be defined to be used instead of a value outside the range of valid values, which is defined as a separate mechanism (Section ).

Validity checks are only useful for detecting data errors. Checks can in some cases be part of the isolation step, where additional information regarding an error is gained by use of additional plausibility checks, for instance by determining which value (out of several) is erroneous when comparison or voting (Section ) is used. This way application specific knowledge can be used when isolating errors.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Application level vs. BSW

Plausibility checks can be implemented as executable assertions, where the values of one or more variables are checked using simple if-statements. It is implemented in the source code of the SW-Component, but does not generally affect the overall structure of the application. Checks can in most cases be implemented with deterministic timing characteristics (not considering de-bouncing). Memory requirements for data are typically low, restricted to saving values for differential checks.

### 16. AUTOSAR References

| Name | Type | Document | Comment |
|---|---|---|---|
| SW-C End to End Communication Protection | SWS | E2E Library | Definition of protocols between sender and receiver. |
| Flash Test Core Test | SWS | FLSTST  CORTST | Comparison with known signature. |
| Runtime Environment | SWS | RTE | Supports range checks for scaled values. |
| AUTOSAR COM | SWS | COM | PDU replication and comparison. |

The SW-C End to End Communication Protection Library can be used to check whether a signal is coming from an unexpected SW-C sender, or when the received signal is providing the information that it is not supposed to provide. It also permits to define SW-Cs able to check whether a stream of instances of a signal have been received in sequence (depending on the use cases, this can also be configured at the AUTOSAR COM level).

The Flash Test and Core Test modules can be configured in the context of single processor or multi-processor ECUs to perform checks on the ECU's hardware. These checks are compared with known good signatures of the hardware.

The RTE can check if communicated values matches with their allowed range.

### 17. Substitute Values

### 18. 描述
*原文标题：Description*

Once an error has been detected that would prohibit the correct value to be assigned to a signal, a substitute value may be assigned to that signal. This substitute value can then be used in subsequent calculations such that these render useful results, albeit possibly degraded in quality. Examples of situations where substitute values could be assigned are:

* A sensor is malfunctioning, or operating outside of its operating range (e.g., detected by a plausibility check), and the corresponding physical entity cannot be measured reliably. A substitute value can be assigned that will allow subsequent algorithms using this value to proceed with their calculations.
* The providing SW-C of an input signal was reported as malfunctioning and thus its results may not be trusted even though a particular value seems to be within its valid domain.
* Transitory checking (e.g., close time after boot sequence) necessary to fulfil plausibility check when sensors are not yet available. Generally, "pending" status flag is set.

Since a substitute value is used it may be useful to notify the receiver that the original value is not available using a signal qualifier.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Applicability

| Step\Error Model | Data | Program flow | Access | Timing | Asymmetric |
|---|---|---|---|---|---|
| Detection |  |  |  |  |  |
| Isolation |  |  |  |  |  |
| Recovery | X | X |  | X | X |

Assigning a substitute provides means for subsequent operations to proceed in a way that makes an end result useful. However, it will not provide recovery from an error as it is not alleviating the situation that lead to the erroneous state in first place. Thus, it is partially applicable to recovery as it allows an existing error to be masked to a certain degree.

As the erroneous state that is to be masked with substitute values can be the result of any type of underlying error, it is partially applicable to all types.

### 20. Application level vs. BSW

Substitute values often require application knowledge that is not present at platform level and assignment is in these cases performed in the SW-Cs. At configuration time BSW modules can be configured with default substitute values. However, application specific knowledge is still typically needed.

### 21. AUTOSAR References

| Name | Type | Document | Comment |
|---|---|---|---|
| Software Component Template Runtime Environment AUTOSAR COM | TPS SWS | SWC-T  RTE  COM | Usage of initial and default values. |
| Software Component Template NVRAM Manager | TPS SWS | SWC-T  NVM | Usage of default ROM block or redundant block. |

The SW-C designer can specify an initValue on the UnqueuedReceiverComSpec. This value is used when no values were received, but the application reads the value. It can also be used in case of invalid values, depending on the UnqueuedReceiverComSpec's handleInvalid attribute (dontInvalidate, keep, replace). These initValues are implemented by COM  or RTE  based on the SW-C XML description (see the Software Component Template ).

An initValue can also be specified for UnqueuedSenderComSpec, InterRunnableVariables, PerInstanceMemory, or the ramBlocks of NvBlockComponentTypes (see the Software Component Template ).

The NVM  can use a default ROM block in case of failure. This block can be defined by the SW-C designer with a ParameterDataPrototype in the defaultData role (see RoleBasedDataAssignment in the Software Component Template ).

### 22. Voting

### 23. 描述
*原文标题：Description*

A basic principle for building fault-tolerant systems is to execute fragments ("components") redundantly and then consolidate the results of each component by performing a vote on the results. The actual vote is typically performed by a dedicated component called "voter". Common voting algorithms include "simple majority", "2 out-of 3" etc.

Voting can be performed at multiple levels, from replicated runnables in one SW-C to application level voting across ECUs. Replication can be made on the binary/source code level or on the specification level. In the former case each component is a copy of the same original component, whereas in the latter case components are different, but are built using the same specification.

Contrary to the comparison mechanism presented in Section , voting can handle more than two replicas and, depending on the number of replicas voting also provide isolation (identification of faulty replica) and partial recovery (a good value is output).

### 24. Applicability

| Step\Error Model | Data | Program flow | Access | Timing | Asymmetric |
|---|---|---|---|---|---|
| Detection | X |  |  |  |  |
| Isolation | X |  |  |  |  |
| Recovery | X |  |  |  |  |

Voting is used to detect data errors. Furthermore, the source of the erroneous value can be identified if three or more values are voted upon (and at most one value is erroneous). As a correct value can be produced despite the presence of an error, voting partially supports recovery. Additional means are needed to fully recover from the error.

### 25. Application level vs. BSW

Voting is performed in SW-Cs.

### 26. AUTOSAR References

AUTOSAR does not provide a voting service. Since voting mechanisms are not provided by the AUTOSAR BSW, these need to be implemented at application level in the SW-Cs who require them. AUTOSAR supports multiple instantiation of SW-Cs. This feature can be used by a SW-C implementer to implement a specific voting mechanism for an application.

### 27. Agreement

### 28. 描述
*原文标题：Description*

When redundant components are used to increase the reliability of an application agreement may be needed for components (called participants) to agree on the value used (including the result of some computation) by exchanging the result of local computations as messages.

The difference between agreement and voting mechanisms is that when using agreement components interact to reach a decision, whereas in voting it is left to the voter to decide. Agreement protocols could be compared with closed loop systems, where the feedback consists of the sent messages received by all other parties. Voting can analogously be compared to an open loop system where the voter collects values and decides.

Agreement protocols can also handle asymmetric faults through multiple rounds of information exchange. Thus all (correct) participants agree on the same value as well as on the correctness of the other participants.

### 29. Applicability

| Step\Error Model | Data | Program flow | Access | Timing | Asymmetric |
|---|---|---|---|---|---|
| Detection | X |  |  |  | X |
| Isolation | X |  |  |  | X |
| Recovery | X |  |  |  | X |

As values are compared similar to voting, agreement mechanisms can detect and isolate data value errors. The extra rounds of information exchange allow also for detection and isolation of asymmetric errors. Agreement cannot handle either program flow or timing errors.

Recovery is partially supported in that a faulty participant can be identified and its behavior masked from affecting the system. Additional means are needed to fully recover from the error.

### 30. Application level vs. BSW

Basic services are implemented on BSW-level, but applications using agreement protocol must be aware of the fact they participate. Proposal of new values and adoption of agreed values are examples of situations where applications need to be aware of the protocol.

### 31. AUTOSAR References

No true agreement service exists in AUTOSAR. If specific agreement semantics are needed for application level communication it shall be implemented specifically for these applications.

### 32. Checksums/Codes

### 33. 描述
*原文标题：Description*

A technique for increased data consistency is to add redundant information to the data values to protect. The extra information allows for detection of modifications of (parts of) the data, and in some cases even correction and restoration of the original data values. The cost is both in terms of performance (time to calculate and check the checksum, additional communication needs) and in terms of the additional memory requirements for storage. Extensions also include cryptographic algorithms providing digital signatures and encryption/decryption of data.

There are multiple uses of checksums/codes, including:

* Safely storing data in both volatile and non-volatile memory
* Dependable communication between SW-C, both inter- and intra- ECU
* Protecting data from tampering (data integrity) by unauthorized entities
* Sending and receiving of encrypted data across unsafe channels

Please note the difference between the first two cases, which are concerned with benign errors, whereas the latter two are concerned with malicious errors (attackers, intruders etc). However, the same mechanisms can often be used for multiple purposes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Applicability

| Step\Error Model | Data | Program flow | Access | Timing | Asymmetric |
|---|---|---|---|---|---|
| Detection | X |  |  |  | X |
| Isolation | X |  |  |  | X |
| Recovery | X |  |  |  | X |

Checksums and codes are mainly targeted at protection of data throughout the FDIR process. Depending on the type of code used, all steps of the process can be supported.

Codes are also used as part of certain protocols (e.g., agreement) for handling asymmetric faults.

### 35. Application level vs. BSW

Checksums and cryptographic libraries are implemented on BSW-level or as libraries, due to performance and portability reasons. The use of dedicated peripheral circuits further decreases the use of application level mechanisms.

### 36. AUTOSAR References

| Name | Type | Document | Comment |
|---|---|---|---|
| Crypto Service Manager | SWS | CSM | Access to cryptographic functions/hardware. |
| CRC Routines. | SWS | CRC | CRC routines. |
| SW-C End to End Communication Protection | SWS | E2E Library | Additional CRC added to signals by SW-Cs. |

The CSM can be used by SW-Cs to compute cryptographic checksums or codes through a port interface.

The CRC is a library which can be used directly by SW-Cs to compute checksums.

The SW-C End-to-End communication protection library can be used to define a protocol and protect with a checksum or code the data sent by SW-C through port interfaces.

### 37. Execution sequence monitoring

### 38. 描述
*原文标题：Description*

Correct execution of an application includes that the sequence of executable entities is correct. Monitoring execution sequence will enable the detection of erroneous execution paths that may result in erroneous results.

Monitoring of execution sequence can be performed at different levels of granularity. Some examples of levels of granularity are:

* Individual statements: This is the finest granularity with which execution sequence can be monitored at source code level. The sequence of individual statements in the code is monitored.
* Basic blocks: A basic block is a block of code that has exactly one entry point and one exit point and cannot be entered or exited outside of these two entry and exit points. Thus execution from entry point to exit point is strictly sequential. Note that the minimum basic block is a single statement. The execution sequence of basic blocks can be specified in a so called control flow graph, and monitoring execution sequence at this granularity would be to ensure that execution is performed according to this graph. Control flow in this context is synonymous to program flow.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Applicability

| Step\Error Model | Data | Program flow | Access | Timing | Asymmetric |
|---|---|---|---|---|---|
| Detection |  | X |  |  |  |
| Isolation |  |  |  |  |  |
| Recovery |  |  |  |  |  |

Monitoring of execution sequence will detect errors in program flow. These errors may be the result of previous data errors, timing errors or asymmetric errors. However, this cannot be distinguished by the monitor itself.

A monitor can not be used to recover from an error as it only checks the current state against some predefined notion of correctness (this is true for all kinds of monitors, not only those for execution sequence).

### 40. Application level vs. BSW

The most practical approach is probably cooperation between applications and the BSW where the application provides the BSW with information on where it is in the execution trajectory and the BSW then checks whether this location is a valid one. This requires predefined valid trajectories. One approach could be to configure valid successors from a given location in the execution trajectory for a set of locations. The granularity (instruction, basic block, runnable) could then be defined at configuration time.

### 41. AUTOSAR References

| Name | Type | Document | Comment |
|---|---|---|---|
| Watchdog Manager | SWS | WdgM | Supervision counter and program flow monitoring. |
| SW-C End-to-End Communication Protection | SWS | E2E Library | Data sequence control on messages. |
| AUTOSAR COM | SWS | COM | Sequence counters for messages sent over the bus. |

The Watchdog Manager can monitor heartbeats from application components not only for time but also for sequence. The correct sequence of execution is configured by the developers. The configuration contains the definition of a set of checkpoints or spy points and for each such point a set of allowed successors. It is then the responsibility of the SW-Cs (i.e. the developers) to make sure that each checkpoint/spy point is reported to the Watchdog Manager, which then checks the execution for temporal as well as logical sequence. In case of error detection, the ordinary recovery capabilities of the Watchdog Manager are utilized.

AUTOSAR COM and the SW-C E2E Communication Protection Library permit to check whether a stream of instances of a signal have been received in sequence.

### 其余 39 章（内容从略，见纯文本全文）

42. Aliveness monitoring
43. 描述
44. Applicability
45. Application level vs. BSW
46. AUTOSAR References
47. Status and 模式管理
48. 描述
49. Applicability
50. Application level vs. BSW
51. AUTOSAR References
52. Reconfiguration
53. 描述
54. Applicability
55. Application level vs. BSW
56. AUTOSAR References
57. Reset
58. 描述
59. Applicability
60. Application level vs. BSW
61. AUTOSAR References
62. 错误过滤
63. 描述
64. Applicability
65. Application level vs. BSW
66. AUTOSAR References
67. 存储 Protection
68. 描述
69. Applicability
70. Application level vs. BSW
71. AUTOSAR References
72. 时序 Protection
73. 描述
74. Applicability
75. Application level vs. BSW
76. AUTOSAR References
77. Aspect 映射
78. 概述
79. 映射 to FDIR process and 错误建模
80. 映射 to implementation level
