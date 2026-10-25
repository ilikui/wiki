# Specification of the AUTOSAR Network Management Protocol (`NetworkManagementProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 928 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_NetworkManagementProtocol_928\AUTOSAR_FO_PRS_NetworkManagementProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_NetworkManagementProtocol_928\AUTOSAR_FO_PRS_NetworkManagementProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_NetworkManagementProtocol_928\zzgen\FO_PRS_NetworkManagementProtocol.complete.txt`

## 文档简介

This protocol specification specifies the format, message sequences and semantics of the AUTOSAR Network Management (NM) protocol.

NM is intended to work together with an underlying communication stack, independent of the physical layer of the communication system used.

The AUTOSAR Network Management is a hardware independent protocol (for limitations refer to chapter ).

The following figure shows how the NM interfaces with an upper (see ) and a lower (bus) layer.

## 模块依赖

NM algorithm uses services of the underlying communication stack modules to send and receive NM messages.

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

This protocol specification specifies the format, message sequences and semantics of the AUTOSAR Network Management (NM) protocol.

NM is intended to work together with an underlying communication stack, independent of the physical layer of the communication system used.

The AUTOSAR Network Management is a hardware independent protocol (for limitations refer to chapter ).

The following figure shows how the NM interfaces with an upper (see ) and a lower (bus) layer.

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

Main purpose of the NM protocol is to coordinate one or more groups of ECUs to wake up and shutdown their communication stack synchronously.

The NM algorithm is based on periodic NM messages, which are received by all nodes in a NM cluster. Reception of NM messages indicates that sending nodes want to keep NM cluster awake. If any node does not need communication any more, it stops sending NM messages, but if NM messages from other nodes are received, it postpones transition to sleep mode. Finally, if a dedicated timer elapses because no NM messages are received anymore, every node initiates transition to the sleep mode, the NM node initiate the shutdown of the corresponding network.

If any node in the NM cluster requires bus-communication, it can keep the NM cluster awake by transmitting NM messages.

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

### 4. 约束与假设
*原文标题：Constraints and assumptions*

There may exist NM nodes in the network which follow the protocol without ever actively sending NM messages (called NM passive nodes).

### 5. 限制
*原文标题：Limitations*

# One NM instance is associated with only one NM cluster in one network. One NM cluster can have only one instance of Nm in one node.
# The maximum size of the NM message is limited by the used communication bus.
# The NM Coordinator is only used in the AUTOSAR Classic Platform. Details can be found in .

### 6. Dependencies

### 7. Dependencies to other 协议 layers
*原文标题：Dependencies to other protocol layers*

NM algorithm uses services of the underlying communication stack modules to send and receive NM messages.

### 8. Dependencies to other standards and norms

N/A

### 9. Dependencies to the Application Layer

Upper layer (e.g. application) uses NM services to request or release a network i.e. to activate or deactivate sending of NM messages.

In addition, the upper layer/module may use the possibility to get informed about changes of the NM operational modes.

### 10. Use Cases

The Use Cases for PRS Network Management Protocol are listed and described in the chapter "Use Cases" of RS Adaptive Network Management .

### 11. 协议需求
*原文标题：Protocol Requirements*

### 12. 需求 Traceability
*原文标题：Requirements Traceability*

| Requirement | Description | Satisfied by |
|---|---|---|
| The Nm shall be applicable to different types of communication systems which are in the scope of AUTOSAR and support a bus sleep mode. |  |  |
| Nm shall provide a service to request to keep the bus awake and a service to cancel this request. |  |  |
| Nm shall put the communication controller into sleep mode if there is no bus communication |  |  |
| There shall be a deterministic time from the point where all nodes agree to go to bus sleep to the point where bus is switched off. |  |  |
| Specific features of the Network Management shall be configurable |  |  |
| The Nm API shall optionally give the possibility to send user data |  |  |
| The Nm API shall optionally give the possibility to get user data |  |  |
| The Nm shall optionally set the local node identifier to the Nm-message |  |  |
| Nm shall provide functionality which enables upper layers to control the sleep mode. |  |  |
| CanNm shall support Partial Networking on CAN |  |  |
| The Nm Control Bit Vector shall contain a PNI (Partial Network Information) bit. |  |  |
| Nm shall define a common layout of Nm messages. |  |  |
| <Bus>Nm PNC shutdown Propagation and Evaluation |  |  |
| Nm shall support Partial Networking |  |  |

### 13. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 14. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Network Management specification that are not included in the .

| Abbreviation / Acronym | Description |
|---|---|
| CBV | Control Bit Vector |
| FR | FlexRay |
| NM | Network Management |
| PN | Partial Network |
| PNC | Partial Network Cluster |
| PNI | Partial Network Information |
| PNL | Partial Network Learning |

### 15. 定义 of terms
*原文标题：Definition of terms*

| Term | Description |
|---|---|
| Network Mode | In this state the network is requested or active. |
| Prepare Bus-Sleep Mode | In this state the network is released or inactive. |
| Bus-Sleep Mode | In this state the network is released or inactive. In this state no NM message is sent |
| FlexRay communication cycle | Part of FlexRay communication schedule consisting of time slots (static or dynamic). Each FlexRay message is assigned to a specific time slot in one communication cycle. |
| NM cluster | Set of NM nodes coordinated with the use of the NM algorithm. |
| NM Message | Refers to the payload transmitted on the bus. It contains the User Data as well as the Control Bit Vector and may contain the Source Node Identifier. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 协议规范
*原文标题：Protocol specification*

### 17. NM message format

Contents of an Nm Message
  Status: DRAFT
  Upstream requirements:
⌈
An Nm Message shall consist of the following elements:

* Control Bit Vector (CBV) of 1 Byte (optional)
* Source Node ID (SNI) of 1 Byte (optional)
* User Data of n Bytes (optional, may include PNInfo of n Bytes)
⌋

Note: There is an additional option to have a "Car Wakeup" bit.

 Format of an Nm Message
  Status: DRAFT
  Upstream requirements:
⌈
User Data and/or PNInfo shall be located after CBV/SNI
⌋

Note: UserData and PNInfo may overlap.

The following table shows an example layout of an NM message:

| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |  |
|---|---|---|---|---|---|---|---|---|
| Byte 0 | Control Bit Vector (default) | < | < | < | < | < | < | < |
| Byte 1 | Source Node Identifier (default) | < | < | < | < | < | < | < |
| Byte 2 | User data 0 | < | < | < | < | < | < | < |
| Byte 3 | User data 1 | < | < | < | < | < | < | < |
| Byte 4 | PNInfo byte 0 | < | < | < | < | < | < | < |
| Byte 5 | PNInfo byte 1 | < | < | < | < | < | < | < |
| Byte 6 | PNInfo byte 2 | < | < | < | < | < | < | < |
| Byte 7 | PNInfo byte 3 | < | < | < | < | < | < | < |

  Upstream requirements:
⌈
The length of an NM message shall not exceed the MTU of the underlying physical transport layer.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Source Node Identifier

Upstream requirements: ,
⌈
The location of the source node identifier shall be configurable to position Byte 0 or Byte 1 or Off (default: Byte 1). For FlexRay the source node identifier shall only be configurable to position Byte 1 or Off (default: Byte 1).
⌋

  Upstream requirements: ,
⌈
The source node identifier shall be available (set to a configurable value) unless the location of the source node identifier is set to Off.
⌋

### 19. 控制 Bit Vector
*原文标题：Control Bit Vector*

Upstream requirements:
⌈
The location of the Control Bit Vector shall be configurable to position Byte 0 or Byte 1 or Off (default: Byte 0). For FlexRay the Control Bit Vector shall be non-configurable and always be set to position Byte 0.
⌋

  Upstream requirements:
⌈
The Control Bit Vector shall consist of:

* * Bit 0: Repeat Message Request
  * 0: Repeat Message State not requested
  * 1: Repeat Message State requested
* * Bit 1: PN Shutdown Request Bit (PNSR)
  * 0: NM message does not contain synchronized Partial Network shutdown request
  * 1: NM message does contain synchronized Partial Network shutdown request for at least one PNC
* * Bit 3: NM Coordinator Sleep Ready Bit
  * 0: Start of synchronized shutdown is not requested by main coordinator
  * 1: Start of synchronized shutdown is requested by main coordinator
* * Bit 4: Active Wakeup Bit
  * 0: Node has not woken up the network (passive wakeup)
  * 1: Node has woken up the network (active wakeup)
* * Bit 5: Partial Network Learning Bit (PNL)
  * 0: PNC learning is not requested
  * 1: PNC learning is requested
* * Bit 6: Partial Network Information Bit (PNI)
  * 0: NM message contains no Partial Network request inform

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. User 数据
*原文标题：User Data*

User Data is considered all data not being part of CBV and NID.

  Upstream requirements: , ,
⌈
It shall be possible to enable or disable the support of NM user data (NM user data is optional).
⌋

Note: In AP UserData is configured with config parameter "nmUserDataLength". Note: The length of the UserData in CP can be calculated from the NmMessageLength minus the amount of used NM system bytes and PNInfo bytes.

### 21. Partial Networking

Upstream requirements:
⌈
It shall be possible to enable or disable the PN support (PN feature is optional).
⌋

  Upstream requirements: ,
⌈
It shall be possible to enable or disable the handling of synchronized PNC shutdown (handling is optional). If handling is enabled, then also PN support shall be enabled.
⌋

  Upstream requirements: ,
⌈
If PN Support is enabled, the layout of the PNC Request Bit Vector within the NM message shall be pre-configured with PnInfoOffset and PnInfoLength (in bytes).
⌋

Note: Every bit (PNC bit) of the PNC Request Bit Vector Length represents one Partial Network. The following interpretation has to be considered:

* PNI bit ="'1"' and PNSR = "'0"': If the PNC bit is set to 1 the Partial Network is requested. If the bit is set to 0 there is no request for this PN.

* PNI bit ="'1"' and PNSR = "'1"' (received by a top-level PNC coordinator): ignore the PNSR bit and handle the message as a usual NM message. A top-level PNC coordinator should never receive a PN shutdown request. This is an error case, where an intermediate PNC coordinator or PNC leaf node sets the PNSR bit within the Nm message by accident.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 处理 of Rx NM messages
*原文标题：Handling of Rx NM messages*

Upstream requirements: , ,
⌈
If PN support is disabled, then its NM shall ignore any partial networking information contained in the received message.
⌋

  Upstream requirements:
⌈
If the PN support is enabled, and the PNI bit in the received NM message is 0, the node's NM shall ignore the partial networking information bytes of the message.
⌋

  Upstream requirements:
⌈
If the PN support is enabled, the PNI bit is set to 1 and the PNSR bit is set to 0 in the received NM message, NM shall process the Partial Networking Information of the NM message.
⌋

  Upstream requirements: ,
⌈
If synchronized PNC shutdown is enabled, a NM message is received in the role of a top-level PNC/intermediate PNC coordinator on an active coordinated channel and PNI bit and PNSR bit are set to 1, then NM shall ignore the PNSR bit and handle the message as a usual NM message.
⌋

Note: A PN shutdown message (PNI bit = 1 and PNSR bit = 1) should never be received by a top-level/intermediate PNC coordinator on an active coordinated channel, because only a top-level PNC coordinator of a dedicated PNC could initiate a PN shutdown message.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 处理 of Tx NM messages
*原文标题：Handling of Tx NM messages*

Upstream requirements:
⌈
If the PN support is enabled, its NM shall set the value of the transmitted PNI bit in the CBV to 1.
⌋

  Upstream requirements:
⌈
If the PN support is disabled, its NM shall set the value of the transmitted PNI bit in the CBV to 0.
⌋

  Upstream requirements:
⌈
If the PN support is enabled, for PNCs that are "internally requested" the corresponding bit in the PNC Request Bit Vector shall be set to 1 before sending the NM message.
⌋

Constraint: The usage of the CBV is mandatory in case Partial Networking is used. This must be ensured by configuration in the respective platform.

  Upstream requirements: ,
⌈
If the PN support is enabled, for PNCs that are "'internally requested"' or "'externally requested"' the corresponding bit in the PNC Request Bit Vector shall be set to 1 before sending the NM message in the role of a top-level PNC coordinator or an intermediate PNC coordinator.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 时序行为
*原文标题：Timing behavior*

### 25. Transition to Bus-Sleep 模式
*原文标题：Transition to Bus-Sleep Mode*

When a NM node does not need the communication on a bus, it will not immediately shut down i.e. switch to Bus-Sleep Mode. Instead, it will first change to the so called Ready Sleep state. This state ensures that any NM node in the NM cluster waits to transition to the Bus-Sleep Mode as long as any other node keeps the NM cluster awake.

  Upstream requirements: ,
⌈
If bus communication is released, the NM algorithm shall perform transition to the Bus-Sleep Mode after a configurable amount of Ready Sleep Time has expired and no new communication request occurs in between and no NM Message has been received.
⌋

Note: The Ready Sleep Time depends on the used network, refer to .

### 26. Networks specifics

### 27. CAN and Ethernet

On the transition path from Network to Bus-Sleep Mode, CAN NM and UDP NM introduce Prepare Bus Sleep Mode. The purpose of this state is to ensure that all nodes have time to stop their network activity before the Bus Sleep state is entered.

  Status: DRAFT
  Upstream requirements:
⌈
If NmStayInPbsEnabled is disabled and bus communication in a NM cluster is released, and there are no Network Management PDUs on the bus for a configurable amount of time determined by NM Timeout Time (NmTimeOutTime) + Wait Bus-Sleep Time (NmWaitBusSleepTime) transition into the BusSleep Mode shall be performed.
⌋

  Upstream requirements: ,
⌈
If NmStayInPbsEnabled is disabled the NM shall stay in the Prepare Bus-Sleep Mode for an amount of time determined by the Wait Bus-Sleep Time. After this time has expired, the Prepare Bus-Sleep Mode shall be left, and the Bus-Sleep Mode shall be entered.
⌋

Note: Thus the Ready Sleep Time is extended by Wait Bus-Sleep Time (NmWaitBusSleepTime). The Ready Sleep Time on CAN and Ethernet starts when bus communication is released and it ends NM Timeout Time (NmTimeOutTime) after last NM messages was transmitted or received on the bus.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Sending NM message

If communication on the bus is needed i.e. requested, NM messages are sent out. If no communication is needed i.e. released, sending of NM messages is stopped.

  Upstream requirements:
⌈
NM messages shall be sent periodically in states "Repeat Message" and "Normal Operation" using configured NM Message Cycle Time (NmMsgCycleTime).
⌋

  Upstream requirements:
⌈
If the "Repeat Message" state is not entered beacuse of network request OR NM transmissions is zero (see NmImmediateNmTransmissions) the transmission of NM messages shall be delayed by NM Cycle Offset (see NmMsgCycleOffset) after entering the "Repeat Message" state.
⌋

  Upstream requirements:
⌈
When the "Repeat Message" state is entered because of network request or repeat message request and configured number of immediate NM transmissions is greater than zero (see NmImmediateNmTransmissions), these immediate NM messages shall be transmitted using Immediate NM Cycle Time (see NmImmediateNmCycleTime). NM Cycle Offset (see NmMsgCycleOffset) shall not be applied in this case.
⌋

### 29. FlexRay

In addition to NM message containing data (see Figure 5.1), the FlexRay NM specifies so-called NM-Vote messages.

In fact, the FlexRay NM algorithm is based on periodic NM-Vote messages received by all nodes in the cluster. Reception of a NM-Vote message indicates that the sending node wants to keep the NM cluster awake.

| Bit 7 | Bit 6 | Bit 5 | Bit 4 | Bit 3 | Bit 2 | Bit 1 | Bit 0 |  |
|---|---|---|---|---|---|---|---|---|
| Byte 0 | Vote | Set to "0" | < | < | < | < | < | < |

  Upstream requirements:
⌈
The NM-Vote message format shall contain a Voting Bit (Vote) with the following meaning:

* 0 - vote against keeping awake
* 1 - vote for keeping awake
⌋

  Upstream requirements:
⌈
The FlexRay NM shall be able to separately transmit NM-Data and NM-Vote, or to combine them within one NM message (in either static or dynamic slot). Transmission format shall be configurable (Schedule Variant).
⌋

When the NM-Vote and NM-Data are combined (by Bit OR-ing) within one NM message, the content of the NM-Vote will be combined with the content of the Control Bit Vector Byte.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Sequences

### 31. Communication request

### 32. Communication release

### 33. 配置 parameters
*原文标题：Configuration parameters*

This chapter lists all parameters the NM protocol uses.

### 34. NM Message Layout

| Parameter | Description |
|---|---|
| NmNidPosition | Defines the position of the source node identifier (if used) within the NM message |
| NodeId | Node identifier of local node |
| NmCbvPosition | Defines the position of the Control Bit Vector (if used) within the NM message |
| UserDataEnabled | Enables/disables user data support |
| NmMessageLength | Specifies the length (in bytes) of the NM message |
| PnEnabled | Enables/disables support of partial networking |
| PnInfoOffset | Offset of the PN request information in the NM message. The offset to the PNC data can only be configured to either be directly after the system bytes or after the user data. |
| PnInfoLength | Length of the PN request information in the NM message |

### 35. Timeout Parameters

| Parameter | Description |
|---|---|
| NmTimeOutTime | The time for a node between the reception of the last NM message keeping it awake to the transition to Bus Sleep |
| NmMsgCycleTime | The transmission periodicity of an NM message by a node |
| NmMsgCycleOffset | The start delay of a transmission of Nm messages in Repeat Message State |
| NmRepeatMessageTime | The time for a node to remain in Repeat Message State |
| NmWaitBusSleepTime | Timeout for bus calm down phase. It denotes the time in seconds how long the NM shall stay in the Prepare Bus-Sleep Mode before transition into Bus-Sleep Mode (CAN NM, UDP NM only). |
| NmReadySleepCnt | Ready sleep counter. After NmReadySleepCnt+1 repetition cycles without any NM-Vote, NM enters Bus-Sleep (FR NM only). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. NM local 配置
*原文标题：NM local configuration*

| Parameter | Description |
|---|---|
| SynchronizedPncShutdownEnabled | Enable/Disable a synchronized PNC shutdown |
| NmStayInPbsEnabled | If this parameter is disabled Prepare Bus-Sleep Mode is left after NmWaitBusSleep Time. If this parameter is enabled Prepare Bus-Sleep Mode can only be left if ECU is powered off or any restart reason applies. |
| NmPnHandleMultipleNetworkRequests | If enabled, an additional transition from Network Mode to Repeat Message State shall be performed, if the requested state of the channel/VLAN or an associated PNC changes. |

### 37. 协议 usage and 指南
*原文标题：Protocol usage and guidelines*

No additional guidelines or How-To instructions for implementer. All relevant information already provided in previous chapters.

### 38. References

### 39. 附录
*原文标题：Appendix*

### 40. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 41. Traceable item history of this document according to AUTOSAR Release R26-11

### 42. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

none

### 43. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

| Number | Heading |
|---|---|

 |
 |
| Contents of an Nm Message |
|---|
| Format of an Nm Message |

### 44. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

none

### 45. Traceable item history of this document according to AUTOSAR Release R25-11

### 46. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

| Number | Heading |
|---|---|
| Handling multiple network requests |  |

### 47. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 48. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 49. Traceable item history of this document according to AUTOSAR Release R24-11

### 50. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 51. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 52. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none

### 53. Traceable item history of this document according to AUTOSAR Release R23-11

### 54. Added 规范 Items in R23-11
*原文标题：Added Specification Items in R23-11*

| Number | Heading |
|---|---|

 |
 |
 |

### 55. Changed 规范 Items in R23-11
*原文标题：Changed Specification Items in R23-11*

| Number | Heading |
|---|---|

 |
 |

### 56. Deleted 规范 Items in R23-11
*原文标题：Deleted Specification Items in R23-11*

none

### 57. Traceable item history of this document according to AUTOSAR Release R22-11

### 58. Added 规范 Items in R22-11
*原文标题：Added Specification Items in R22-11*

none

### 59. Changed 规范 Items in R22-11
*原文标题：Changed Specification Items in R22-11*

| Number | Heading |
|---|---|

 |
 |
 |
 |
 |
 |
 |
 |
 |
 |
 |

### 60. Deleted 规范 Items in R22-11
*原文标题：Deleted Specification Items in R22-11*

| Number | Heading |
|---|---|

 |
