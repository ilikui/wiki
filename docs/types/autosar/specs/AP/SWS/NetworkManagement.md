# Specification of Network Management (`NetworkManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 898 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_NetworkManagement_898\AUTOSAR_AP_SWS_NetworkManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_NetworkManagement_898\AUTOSAR_AP_SWS_NetworkManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_NetworkManagement_898\zzgen\AP_SWS_NetworkManagement.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration of the Network Management for the AUTOSAR Adaptive Platform.

Adaptive Network Management is intended to work independent of the communication stack used. Its main purpose is to coordinate the transition between normal operation and bus-sleep mode of the underlying networks (physical and partial networks).

## 模块依赖

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

Section  lists the interfaces provided by Network Management to other Functional Clusters. Section  lists the interfaces required by Network Management.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration of the Network Management for the AUTOSAR Adaptive Platform.

Adaptive Network Management is intended to work independent of the communication stack used. Its main purpose is to coordinate the transition between normal operation and bus-sleep mode of the underlying networks (physical and partial networks).

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Abbreviation / Acronym: | Description: |
|---|---|
| API | Application Programming Interface |
| CBV | Control Bit Vector |
| CM | Communication Management |
| CWU | Car Wakeup |
| EM | Execution Management |
| IP | Internet Protocol |
| MTU | Maximum Transmission Unit |
| NM | Network Management |
| NM Node | A node that supports network management. Please note that network node, node and NM node are used with the same meaning througout the document. |
| PN | Partial Network |
| PNI | Partial Network Information |
| PNL | Partial Network Learning |
| UDP | User Datagram Protocol |
| PNC | Partial Network Cluster |
| VLAN | Virtual Local Area Network |
| ECU | Electronic Control Unit |

| Terms: | Description: |
|---|---|
| Bus communication | Communication on the physical medium |
| Logical Network | A network in which devices can be addressed independent from the actual network technology. |
| NM cluster | Set of NM nodes coordinated with the use of the NM algorithm. |
| NM message | Refers to the payload transmitted in a packet. |

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
*原文标题：Known Limitations*

The Adaptive Network Management is actually only supporting UdpNM.

The Adaptive Network Management does not allow node detection through asking other nodes to enter Repeat Message State, but handles incoming Repeat Message requests.

The Adaptive Network Management cannot be configured as the master network coordinator.

The Adaptive Network Management does not support coordinated shutdown using the information in CBV.

The Adaptive Network Management does not support passive mode and passive start-up. Passive start-up would mean that a node has started (i.e. goes to Normal mode), but the network has been woken up by another node.

Modeling part for mapping the logical networks to the BitVector positions as defined in chapter  is not available in the manifest.

Update and access of User Data was removed as the service interface to Applications has been removed. State Management will control the network request/release and it must be clarified if user data changes/indications shall be done via State Management or directly by applications.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

AUTOSAR Adaptive Network Management can be used for all car domains.

### 9. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

This chapter defines the dependencies of this functional cluster to other functional clusters. AUTOSAR decided not to standardize interfaces which are exclusively used between functional clusters to allow efficient implementations which might depend e.g., on the used operating system. The goal of this chapter is to provide an informative guideline for the interactions between functional clusters without specifying syntactical details. This ensures compatibility between documents specifying different functional clusters and supports parallel implementation of different functional clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters, and return values can be added. A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

Section  lists the interfaces provided by Network Management to other Functional Clusters. Section  lists the interfaces required by Network Management.

### 10. Provided 接口
*原文标题：Provided Interfaces*

This section provides an overview of the public interfaces provided by this functional cluster towards other functional clusters.

 shows the interfaces provided by Network Management to other functional clusters within the AUTOSAR Adaptive Platform.  lists the interfaces provided to other functional clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Interface | Functional Cluster | Purpose |
|---|---|---|
| NetworkHandle | State Management | This interface shall be used to retrieve information about the network status of a NetworkHandle. |

### 11. Required 接口
*原文标题：Required Interfaces*

This section provides an overview of the public interfaces required by this functional cluster from other functional clusters.

 shows the interfaces required by Network Management from other functional clusters within the AUTOSAR Adaptive Platform.  lists the interfaces required from other functional clusters within the AUTOSAR Adaptive Platform and provides a rationale.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Execution Management | ExecutionClient |  |
| Log and Trace | Logger | Network Management shall use this interface to log standardized messages. |

### 12. 协议 layer dependencies
*原文标题：Protocol layer dependencies*

The Adaptive Network Management is based on the protocol mentioned in PRS NetworkManagementProtocol .

Adaptive Network Management uses functionality of the underlying communication stack in order to send or receive NM messages on the physical networks.

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in RS Adaptive Network Management  and the AUTOSAR RS General , and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Return values / application errors |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Enumerator and constant names |  |  |
| Usage of ara::core types |  |  |
| Avoidance of shared ownership |  |  |
| Usage of "final specifier" |  |  |
| Error handling for non-initialized Functional Cluster |  |  |
| usage of "noexcept" specifier |  |  |
| Nm shall not prohibit bus traffic with Nm not being initialized |  |  |
| The Nm shall be applicable to different types of communication systems which are in the scope of AUTOSAR and support a bus sleep mode. |  |  |
| Nm shall provide services to coordinate shutdown of Nm-clusters independently of each other |  |  |
| Nm shall provide a service to request to keep the bus awake and a service to cancel this request. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 功能规范
*原文标题：Functional specification*

The Adaptive Network Management offers services that allows to request and query the network states for logical network handles that can be mapped to physical or partial networks.

To do so, the following functionalities are provided:

# Interfaces for requesting and releasing logical network handles
# Support for partial networking

### 15. Architectural 概述
*原文标题：Architectural Overview*

Figure  gives an overview of the Adaptive NM service.

The following figure shows an overview on the interaction between  and Network Management as well as an example mapping between logical networks, partial networks and physical networks.

### 16. 网络管理 Algorithm
*原文标题：Network Management Algorithm*

The AUTOSAR Adaptive NM is based on decentralized direct network management strategy, which means that every network node performs activities self-sufficient depending only on the NM packets received and/or transmitted within the communication system.

The AUTOSAR Adaptive NM algorithm is based on periodic NM packets, which are received by all nodes in the cluster via multicast. Reception of NM packets indicates that sending nodes want to keep the NM cluster awake. If any node is ready to go to sleep mode, it stops sending NM packets, but as long as NM packets from other nodes are received, it postpones transition to sleep mode. Finally, if a dedicated timer elapses because no NM packets are received anymore, every node initiates transition to the sleep mode.

If any node in the NM cluster requires bus-communication, it can keep the NM cluster awake by transmitting NM packets.

The main concept of the AUTOSAR Adaptive NM coordination algorithm as described in  can be summarized by the following key-behavior:

Every network node transmits periodic NM messages as long as it requires bus-communication; otherwise it does not transmit NM messages.

### 17. NetworkControl

Logical network handles are a mapped to one or more partial or physical networks, while a partial network itself can be mapped to one or multiple physical networks. By using the logical network handle all assigned partial networks, VLANs and underlying physical channel(s) are controlled together.

With the introduction of the State Management functional cluster, Network Management no longer receives logical network requests from applications, instead they are controlled by the State Management. State Management can split the one or more applications in multiple functions that might require network communication. Applications (or part of) would then request different functions to be activated/deactivated from State Management and then State Management would in turn, depending on configuration, request/release different logical networks. NM checks then the requested state over all logical networks handles and will activate or deactivate the according physical networks.

  Upstream requirements:
⌈
Each port offered by NM shall enable control of one logical NmNetworkHandle which in turn can be mapped to partial networks or VLANs.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Operational Modes

This chapter describes the operational modes of the AUTOSAR Adaptive NM.

  Upstream requirements:
⌈
NM shall realize the state machine mentioned in  for every physical channel (EthernetCommunicationConnector) separately.
⌋

Note: The state machine in  is applied to physical channels. In case of partial networking, the NM module should additionally take care of relevant PNs.

The Network Management contains three operational modes:

* Network Mode, see
* Prepare Bus-Sleep Mode, see
* Bus-Sleep Mode, see

These modes will not be visible to the Adaptive Application as it is.

When the NM is in Network mode it implies that the network is requested or active. And the logical network information bit will be set to 1.

When the NM is in Prepare Bus-Sleep or Bus-Sleep Mode, It implies that the network is released or inactive. And the logical network information bit will be set to 0.

The following figure shows the state diagram. Mode change related transitions are denoted in green and error handling related transmissions in red.

 State Chart Diagram
  Upstream requirements:
⌈

⌋

### 19. 网络模式
*原文标题：Network Mode*

Upstream requirements:
⌈
The Network Mode shall consist of three internal states:

* Repeat Message State
* Normal Operation State
* Ready Sleep State
⌋

For more information check the following chapters:

* Repeat Message State, see
* Normal Operation State, see
* Ready Sleep State, see

  Upstream requirements:
⌈
When the Network Mode is entered from Bus-Sleep Mode or Prepare Bus-Sleep Mode, by default, the Repeat Message State shall be entered.
⌋

  Upstream requirements: ,
⌈
When the Network Mode is entered, the NM-Timeout Timer shall be started with the value nmNetworkTimeout.
⌋

  Upstream requirements:
⌈
Upon successful reception of a NM message in Network Mode, the NM-Timeout Timer shall be restarted with the value nmNetworkTimeout.
⌋

  Upstream requirements:
⌈
Upon successful transmission of a NM message in Network Mode, the NM-Timeout Timer shall be restarted with the value nmNetworkTimeout.
⌋

### 20. Repeat Message 状态
*原文标题：Repeat Message State*

The Repeat Message State ensures, that any transition from Bus-Sleep or Prepare Bus-Sleep to the Network Mode becomes visible for the other nodes on the network. Additionally, it ensures that any node stays active for a minimum amount of time.

  Upstream requirements:
⌈
When the Repeat Message State of Network Mode is entered from Bus-Sleep Mode, Prepare-Bus-Sleep Mode or from within Network Mode (Normal Operation State or Ready Sleep State) transmission of NM messages shall be (re-) started.
⌋

  Upstream requirements:
⌈
When the NM-Timeout Timer expires in the Repeat Message State, the NM-Timeout Timer shall be restarted.
⌋

  Upstream requirements: ,
⌈
The NM shall stay in the Repeat Message State for a configurable amount of time determined by the nmRepeatMessageTime; after that time the Repeat Message State shall be left.
⌋

  Upstream requirements:
⌈
When Repeat Message State is left, the Normal Operation State shall be entered, if the network has been requested.
⌋

  Upstream requirements:
⌈
When Repeat Message State is left, the Ready Sleep State shall be entered, if the network has been released.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Normal Operation 状态
*原文标题：Normal Operation State*

The Normal Operation State ensures that any node can keep the NM cluster awake as long as the network functionality is required.

  Upstream requirements: ,
⌈
When the Normal Operation State is entered from Ready Sleep State, transmission of NM messages shall be started immediately.
⌋

  Upstream requirements:
⌈
When the NM-Timeout Timer expires in the Normal Operation State, the NM-Timeout Timer shall be restarted.
⌋

  Upstream requirements:
⌈
When the network is released and the current state is Normal Operation State, the Normal Operation State shall be left and the Ready Sleep state shall be entered.
⌋

  Upstream requirements:
⌈
If Repeat Message Request Bit (set in the CBV of the received NM message) is received in the Normal Operation State, the Normal Operation State shall be left and the Repeat Message State shall be entered.
⌋

### 22. Ready 休眠状态
*原文标题：Ready Sleep State*

The Ready Sleep State ensures that any node in the NM cluster waits with the transition to the Prepare Bus-Sleep Mode as long as any other node keeps the NM cluster awake.

  Upstream requirements:
⌈
When the Ready Sleep State is entered from Repeat Message State or Normal Operation State, transmission of NM messages shall be stopped.
⌋

  Upstream requirements:
⌈
When the NM-Timeout Timer expires in the Ready Sleep State, the Ready Sleep State shall be left and the Prepare Bus-Sleep Mode shall be entered.
⌋

  Upstream requirements:
⌈
When the network is requested (by calling ara::nm::NetworkHandle::SetNetworkRequestedState with kFullCom) and the current state is the Ready Sleep State, the Ready Sleep State shall be left and the Normal Operation State shall be entered.
⌋

  Upstream requirements:
⌈
If Repeat Message Request Bit (set in the CBV of the received NM message) is received in the Ready Sleep State, the Ready Sleep State shall be left and the Repeat Message State shall be entered.
⌋

Note: Handling of multiple transition conditions which might arise at the same time (e.g. NM-Timeout timer expires vs. network is requested) is considered to be implementation-specific.

### 23. Prepare Bus-Sleep 模式
*原文标题：Prepare Bus-Sleep Mode*

The purpose of the Prepare Bus Sleep state is to ensure that all nodes have time to stop their network activity before the Bus Sleep state is entered. Bus activity is calmed down (i.e. queued messages are transmitted in order to empty all TX-buffers) and finally there is no activity on the bus in the Prepare Bus-Sleep Mode.

  Upstream requirements: ,
⌈
The NM shall stay in the Prepare Bus-Sleep Mode for an amount of time determined by the nmWaitBusSleepTime; after that time, the Prepare Bus-Sleep Mode shall be left and the Bus-Sleep Mode shall be entered.
⌋

  Upstream requirements:
⌈
Upon successful reception of a NM message in the Prepare Bus-Sleep Mode, the Prepare Bus-Sleep Mode shall be left and the Network Mode shall be entered; by default, the Repeat Message State is entered.
⌋

Rationale: Other nodes in the cluster are still in Prepare Bus-Sleep Mode; in the exceptional situation described above, transition into the Bus-Sleep Mode shall be avoided and bus-communication shall be restored as fast as possible.

### 24. Bus-Sleep 模式
*原文标题：Bus-Sleep Mode*

The purpose of the Bus-Sleep state is to reduce power consumption in the node, when no messages are to be exchanged. Transmission and reception capabilities can be switched off if supported by hardware.

If a configurable amount of time determined by nmNetworkTimeout + nmWaitBusSleepTime is identically configured for all nodes in the NM cluster, all nodes in the NM cluster that are coordinated with use of the AUTOSAR NM algorithm perform the transition into the Bus-Sleep Mode at approximately the same time.

  Upstream requirements:
⌈
In Bus-Sleep Mode the return value of the corresponding ara::nm::NetworkHandle::GetNetworkState are kNoCom (see also ).
⌋

Note: Reception of a message during bus sleep (if receiving capability is not switched off) is not explicitly handled in this specification as for example wake-up is considered project specific.

Note: In Bus-Sleep Mode, it is assumed that all nodes in a cluster are in this state. Typically, all nodes request the communication approximately at the same time by a common trigger, for instance a wake-up line.

### 25. NM Message Format

Message Layout is shown in .

Note: As mentioned in , the length of an NM packet shall not exceed the MTU of the underlying physical transport layer.

### 26. Source Node Identifier

Upstream requirements: ,
⌈
The location of the source node identifier shall be taken from nmNidPosition. If nmNidPosition is not set, NID shall not be contained in the NM messages (see ).
⌋

  Upstream requirements: ,
⌈
The source node identifier shall be set with configurable Node-Id value nmNodeId unless the location of the source node identifier is set to Off (see ).
⌋

### 27. 控制 Bit Vector
*原文标题：Control Bit Vector*

The format (bit-layout) and definition of the CBV is described in .

  Upstream requirements:
⌈
The location of the Control Bit Vector shall be configurable using nmCbvPosition. If nmCbvPosition is not set, CBV shall not be contained in the NM messages (see ).
⌋

  Upstream requirements:
⌈
Repeat Message Request Bit shall always be set to 0 in the transmitted NM message.
⌋

  Upstream requirements:
⌈
Active Wakeup Bit shall always be set to 0 in the transmitted NM message.
⌋

  Upstream requirements:
⌈
NM Coordinator Sleep Ready Bit shall always be set to 0 in the transmitted NM message.
⌋

  Upstream requirements:
⌈
Partial Network Learning Bit (PNL) shall always be set to 0 in the transmitted NM message.
⌋

### 28. NM User 数据
*原文标题：NM User Data*

Upstream requirements:
⌈
If NM user data is configured (i.e. nmUserDataLength is existing with a value greater than 0) it shall be always included in the NM message (see ).
⌋

Note: the range (in bytes) that contains the user data in the received NM message is defined by nmUserDataLength.

Note: UserData does not include the PNI in case the Partial Networking is active. Received and Transmitted UserData does not overlap with the PNI.

  Upstream requirements:
⌈
If nmUserDataLength is existing with a value greater than 0 and no data is provided by the application then the NM shall set the user data to 0 before sending the NM message.
⌋

Note: Currently there is no standardized API to get/set user data.

### 29. Nm Transmission

### 30. Transmission 调度
*原文标题：Transmission Scheduling*

Note: The periodic transmission mode is used in the "Repeat Message State" and "Normal Operation State". When entering "Repeat Message State" or "Normal Operation State", the periodic transmission of NM messages must be started (see ).

Note: If the Repeat Message State is entered (), the transmission of NM message is delayed by nmMsgCycleOffset after entering the Repeat Message State. (see also )

Note: If transmission of NM messages has been started and the NM message Cycle Timer expires, a NM message transmission is initiated. (see also )

Note: If the NM message Cycle Timer expires, it is restarted with nmMsgCycleTime.(see also )

Note: Upon an active network request (by calling ara::nm::NetworkHandle::SetNetworkRequestedState with kFullCom) immediate NM messages are sent according to `PRS_Nm_00334` using:

* nmImmediateNmCycleTime as NmImmediateNmCycleTime and
* nmImmediateNmTransmissions as NmImmediateNmTransmissions

### 31. Nm User 数据处理
*原文标题：Nm User Data Handling*

Note: Although contained in the underlying Protocol Specification  currently no use case is seen for user data.

### 32. Partial Networking

### 33. Partial 网络状态 Machine
*原文标题：Partial Network State Machine*

The partial network state machine mentioned in  is supposed to be implementation specific. Note: Although being implementation specific, the implemented behaviour shall conform to the Partial Networking requirements described in .

### 34. Rx 处理 of NM messages
*原文标题：Rx Handling of NM messages*

Note : Reception Handling of PNC Request Bit Vector as described in  is switched on/off by NmCluster.nmPncParticipation

  Upstream requirements: , ,
⌈
If nmPncParticipation is TRUE and the PNI bit in the received NM message is 1, the NM shall consider this messages as relevant to update the internal states. Otherwise the message is ignored.
⌋

  Upstream requirements: , ,
⌈
If nmPncParticipation is set to TRUE and the PNI bit in the received NM message is 0, NM shall still process the user data information.
⌋

  Upstream requirements: ,
⌈
The reset time value PnResetTime shall be configured by pnResetTimer.
⌋

  Upstream requirements: ,
⌈
pnResetTimer shall be configured to a value greater than nmMsgCycleTime.
⌋

### 35. Tx 处理 of NM messages
*原文标题：Tx Handling of NM messages*

Upstream requirements: , ,
⌈
nmPncParticipation shall enable/disable the reception and transmission of PNI.
⌋

Note: The usage of the CBV is mandatory in case Partial Networking is used. This has to be ensured by configuration in the respective platform.

### 36. NM message Filter Algorithm

Upstream requirements: ,
⌈
The range (in bytes) that contains the Partial Network request information (PNC Request Bit Vector) in the received NM message shall be defined by PNC Request Bit Vector offset (pncVectorOffset) starting from byte 0 and PNC Request Bit Vector length (pncVectorLength).
⌋

Example:

* PNC Request Bit Vector Offset = 3
* PNC Request Bit Vector Length = 2

| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |  |
|---|---|---|---|---|---|---|---|---|
| Byte 0 | Control Bit Vector (default) | < | < | < | < | < | < | < |
| Byte 1 | User data 0 | < | < | < | < | < | < | < |
| Byte 2 | User data 1 | < | < | < | < | < | < | < |
| Byte 3 | PNC Request Bit Vector 0 | < | < | < | < | < | < | < |
| Byte 4 | PNC Request Bit Vector 1 | < | < | < | < | < | < | < |

In the above example only Byte 3 and Byte 4 of the NM message contain Partial Network request information.

Note: Every bit of the PNC Request Bit Vector represents one Partial Network. If the bit is set to 1 the Partial Network is requested. If the bit is set to 0 there is no request for this Partial Network.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. 功能性 Cluster Lifecycle
*原文标题：Functional Cluster Lifecycle*

This section defines behavior of this functional cluster during its life-cycle. Please note that there is a general behavior for ara::core::Initialize and ara::core::Deinitialize defined in  by  and .

### 38. 启动
*原文标题：Startup*

No special startup handling needed for Network Management. The environment is expected to take care that Network Management is running and able to serve communication requests as soon as network communication is needed. If and how the NM is actually start up in advance depends on platform constraints like e.g. fast (re-)start etc.

### 39. 关机
*原文标题：Shutdown*

Communication Shutdown
  Upstream requirements:
⌈
When a SIGTERM is received by NM, any active Network Requests via ara::nm::NetworkHandle::SetNetworkRequestedState shall be withdrawn and ara::nm::NetworkHandle::GetNetworkState shall return kNoCom until process termination.
⌋

Note: The NetworkHardware might be shutdown afterwards. It is assumed that StateManagement takes care that no shutdown is initiated while Network Communication is still needed and that active Network Requests during shutdown are an exceptional situation.

### 40. Reporting

### 41. 安全事件
*原文标题：Security Events*

This functional cluster does not define any security events.

### 42. Log Messages

This functional cluster does not define any non-verbose log messages (i.e., modelled DLT messages).

### 43. Violation Messages

This section lists all violation messages (i.e., DLT messages logged for Violations according to ) defined by this functional cluster. Please note that concrete implementations might additionally implement Non-Standardized Violations (see also ).

 Violation Message InstanceSpecifierMappingIntegrityViolation
  Status: DRAFT
  Upstream requirements: ,
  Previous Identifiers: `SWS_CORE_13003`
⌈
| Dlt-Message | InstanceSpecifierMappingIntegrityViolation | < | < |
|---|---|---|---|
| Description | InstanceSpecifier either cannot be resolved in the model in the context of your executable, or it refers to a model element other than a PortPrototype. | < | < |
| MessageId | 0x80001ffc | < | < |
| MessageTypeInfo | DLT_LOG_FATAL | < | < |
| Dlt-Argument | ArgumentDescription | ArgumentType | ArgumentUnit |
| modeledProcessId | Meta-model identifier of the process that caused the violation, i.e., its short name path with '/' as a separator. | uint8 |  |
| location | An implementation-defined identifier of the location where the violation was detected, for example {filename}:{linenumber}. | uint8 |  |
| instanceSpecifier | InstanceSpecifier used to try to create the object. | uint8 |  |
| className | Name of the class that was instantiated. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Production 错误
*原文标题：Production Errors*

This functional cluster does not define any production errors (i.e., Diagnostic Events).

### 45. API 规范
*原文标题：API specification*

This chapter provides a reference of the APIs defined by this functional cluster. The API is described in the following chapters in tables. Table  explains the content that is described in such an API table.

| Kind: | Defines the kind of the declaration that this API table describes. The following values are supported: |
|---|---|

* class (Declaration of a class)
* function (Declaration of a member or non-member function)
* struct (Declaration of a structure)
* type alias (Declaration of a type alias)
* enumeration (Declaration of an enumeration)
| * variable (Declaration of a variable) | < |  |
|---|---|---|
| Port Interfaces: | States that the C++ API class is the related C++ API binding for the given modeled sub-class of PortInterface | < |
| Header File: | Defines the header file to be included according to | < |
| Forwarding Header File: | Defines the forwarding header file to be included according to | < |
| Scope: | Defines the scope that may be a C++ namespace (in case of a class or non-member function) or a class declaration (in case of a member) | < |
| Symbol: | C++ symbol name | < |
| Thread Safety: | Defines whether a function is thread-safe, not thread-safe, or conditional according to  and | < |
| Syntax: | Description of C++ sy |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 85 章（内容从略，见纯文本全文）

46. PortInterface to API class binding
47. Header：ara/nm/network_handle.h
48. Class：NetworkHandle
49. Public Member 类型
50. 类型 Alias：NetworkStateChangeNotifier
51. Enumeration：NetworkStateType
52. Public Member Functions
53. Special Member Functions
54. Copy Constructor
55. Move Constructor
56. Copy Assignment Operator
57. Move Assignment Operator
58. Destructor
59. Constructors
60. NetworkHandle
61. Member Functions
62. GetNetworkRequestedState
63. GetNetworkState
64. RegisterNetworkRequestedStateChangeNotifier(NetworkStateChangeNotifier)
65. RegisterNetworkRequestedStateChangeNotifier(NetworkStateChangeNotifier, ExecutorT&&)
66. RegisterNetworkStateChangeNotifier(NetworkStateChangeNotifier)
67. RegisterNetworkStateChangeNotifier(NetworkStateChangeNotifier, ExecutorT&&)
68. SetNetworkRequestedState
69. UnregisterNetworkRequestedStateChangeNotifier
70. UnregisterNetworkStateChangeNotifier
71. Header：ara/nm/nm_error_domain.h
72. Non-Member 类型
73. Enumeration：NmErrc
74. Non-Member Functions
75. Other
76. GetNmDomain
77. MakeErrorCode
78. Class：NmErrorDomain
79. Public Member 类型
80. 类型 Alias：Errc
81. 类型 Alias：Exception
82. Public Member Functions
83. Special Member Functions
84. Default Constructor
85. Member Functions
86. Message
87. Name
88. ThrowAsException
89. Class：NmException
90. Public Member Functions
91. Constructors
92. NmException
93. 服务接口
94. 配置
95. 配置规范
96. 概述
97. Correspondence Table
98. Default Values
99. Semantic Constraints
100. 附录
101. Mentioned 清单 Elements
102. Demands and constraints on Base 软件 (normative)
103. Platform Extension 接口 (normative)
104. Not implemented 需求
105. History of Constraints and 规范 Items
106. Constraint and 规范 Item Changes between AUTOSAR Release R24-11 and R25-11
107. Added 规范 Items in R25-11
108. Changed 规范 Items in R25-11
109. Deleted 规范 Items in R25-11
110. Added Constraints in R25-11
111. Changed Constraints in R25-11
112. Deleted Constraints in R25-11
113. Constraint and 规范 Item Changes between AUTOSAR Release R23-11 and R24-11
114. Added 规范 Items in R24-11
115. Changed 规范 Items in R24-11
116. Deleted 规范 Items in R24-11
117. Added Constraints in R24-11
118. Changed Constraints in R24-11
119. Deleted Constraints in R24-11
120. Constraint and 规范 Item Changes between AUTOSAR Release R22-11 and R23-11
121. Added 规范 Items in R23-11
122. Changed 规范 Items in R23-11
123. Deleted 规范 Items in R23-11
124. Constraint and 规范 Item Changes between AUTOSAR Release R21-11 and R22-11
125. Added 规范 Items in R22-11
126. Changed 规范 Items in R22-11
127. Deleted 规范 Items in R22-11
128. Added Constraints in R22-11
129. Changed Constraints in R22-11
130. Deleted Constraints in R22-11
