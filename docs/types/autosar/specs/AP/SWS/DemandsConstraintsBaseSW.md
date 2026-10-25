# Specification of Demands and Constraints on Base Software (`DemandsConstraintsBaseSW`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1120 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_DemandsConstraintsBaseSW_1120\AUTOSAR_AP_SWS_DemandsConstraintsBaseSW.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_DemandsConstraintsBaseSW_1120\AUTOSAR_AP_SWS_DemandsConstraintsBaseSW.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_DemandsConstraintsBaseSW_1120\zzgen\AP_SWS_DemandsConstraintsBaseSW.complete.txt`

## 文档简介

This document describes common aspects of usage of Adaptive Platform functionality towards Base SW, such as the OS or other kinds of "lower layer" SW. For the latter this may include requirements, proposed default settings of configuration parameters, usage constraints and alike. The previously used term 'common' indicates that the usage aspects do not reflect a single functional cluster (FC) perspective but instead addresses Base SW considerations potentially used by several functional clusters. In contrast Base SW aspects related to individual FC usage are covered by the respective SWS documents.

This document's main purpose is to assist different roles for setting up an development AP project such as the integrator. As such the Base SW topics in this document are not necessarily connected on their technical subjects. The focus of the document shall not be mixed with , the latter addresses the interface from Adaptive Application perspective.

In contrast to many other AUTOSAR software specifications, this document is not related to a specific SW component (such as AP functional cluster).

## 模块依赖

This specification does not specify a functional cluster. This chapter does not apply.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document describes common aspects of usage of Adaptive Platform functionality towards Base SW, such as the OS or other kinds of "lower layer" SW. For the latter this may include requirements, proposed default settings of configuration parameters, usage constraints and alike. The previously used term 'common' indicates that the usage aspects do not reflect a single functional cluster (FC) perspective but instead addresses Base SW considerations potentially used by several functional clusters. In contrast Base SW aspects related to individual FC usage are covered by the respective SWS documents.

This document's main purpose is to assist different roles for setting up an development AP project such as the integrator. As such the Base SW topics in this document are not necessarily connected on their technical subjects. The focus of the document shall not be mixed with , the latter addresses the interface from Adaptive Application perspective.

In contrast to many other AUTOSAR software specifications, this document is not related to a specific SW component (such as AP functional cluster).

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Specification of Base Software that are not included in the .

| Abbreviation / Acronym | Description |
|---|---|
| ACK | Acknowledgement - message type of TCP providing confirmation about receiving the request to initiate the graceful shutdown or setup of a TCP connection |
| Base SW | Base Software - lower layer software that provides services or notifications to the Adaptive Platform, such as the operating system, hardware drivers, virtualization software, ... |
| DAD | Duplicate Address Detection |
| DLT | Diagnostics Log and Trace - a Log and Trace daemon implementation of the |
| IETF RFC | Internet Engineering Task Force - Request For Comment: is a standard-like specification of protocols related to TCP/IP protocol suite |
| FIN | Finish - message type of TCP to initiate the graceful shutdown of a TCP connection |
| FINWAIT-2 | TCP connection state at the communication peer after receiving the acknowledgement message (ACK) for connection termination |
| MTU | Maximum Transmission Unit |
| NDP | Neighbor Discovery Protocol |
| SYN | Synchronization - message type of TCP to initiate the setup of a TCP connection |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 约束与假设
*原文标题：Constraints and assumptions*

### 5. 已知限制
*原文标题：Known limitations*

This specification does not specify a functional cluster. This chapter does not apply.

### 6. Dependencies to 功能性 Clusters
*原文标题：Dependencies to Functional Clusters*

This specification does not specify a functional cluster. This chapter does not apply.

### 7. 需求追踪
*原文标题：Requirements Tracing*

There are no requirements yet for tracing.

### 8. 功能规范
*原文标题：Functional specification*

### 9. Reporting

### 10. 安全事件
*原文标题：Security Events*

AUTOSAR defines a set of security events for different technologies (see  for an overview). Some of these Security Events cannot be raised by the Adaptive AUTOSAR stack itself, because their functionality is implemented below the Adaptive Platform, on the level of the base software. This section lists all Security Events that can be raised by the Base Software.

 Security Events for Base Software
  Status: DRAFT
⌈
The Base Software shall implement the Security Events defined in  and raise them to the Adaptive Intrusion Detection System Manager (AIdsM).
⌋

 Security events for ap_core
  Status: DRAFT
  Upstream requirements:
  Previous Identifiers: `SWS_EM_02588`
⌈
| Name | Description | ID |
|---|---|---|
| SEV_ARP_IP_ADDR_CONFLICT | Received local IP address in ARP reply for different MAC. | 10 |
| SEV_TCP_DROP_INV_DEST_PORT | Dropped TCP packet because of invalid destination TCP-Port. | 11 |
| SEV_UDP_DROP_INV_DEST_PORT | Dropped UDP packet because of invalid destination UDP-Port. | 12 |
| SEV_IPV4_DROP_INV_DEST_ADDR | Dropped datagram because of invalid destination IPV4 address. | 13 |
| SEV_IPV6_DROP_INV_DEST_ADDR | Dropped datagram because of invalid destination IPV6 address. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Ethernet

Security event context data definition: `SEV_ETH_DROP_UNKNOWN_ETHERTYPE`
  Upstream requirements:
⌈
| SEV Name | SEV_ETH_DROP_UNKNOWN_ETHERTYPE | < |
|---|---|---|
| ID | 15 | < |
| Description | An ethernet datagram was dropped due the Ethertype is not known. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| Length | uint16 | Length of EthernetFrame byte array |
| EthernetFrame | uint8 | EthernetFrame, truncated to the first EthIfSEvEthernetFrameMaxLength bytes |
| MAX-LENGTH | Truncation length can be defined on a project specific basis. AUTOSAR has defined a default value, as given in the EthernetFrame byte array definition above. |  |

⌋

 Security event context data definition: `SEV_ETH_DROP_VLAN_DOUBLE_TAG`
  Upstream requirements:
⌈
| SEV Name | SEV_ETH_DROP_VLAN_DOUBLE_TAG | < |
|---|---|---|
| ID | 16 | < |
| Description | An ethernet datagram was dropped due to double VLAN tag. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| Length | uint16 | Length of EthernetFrame byte array |
| EthernetFrame | uint8 | EthernetFrame, truncated to the first EthIfSEvEthernetFrameMaxLength bytes |
| MAX-LENGTH | Truncation length can be defined on a project specific basis. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. TCP/IP

Security event context data definition: `SEV_ARP_IP_ADDR_CONFLICT`
  Upstream requirements:
⌈
| SEV Name | SEV_ARP_IP_ADDR_CONFLICT | < |
|---|---|---|
| ID | 10 | < |
| Description | Received local IP address in ARP reply for different MAC. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| Length | uint16 | Length of ReceivedPacket byte array |
| ReceivedPacket | uint8 | Received Packet, truncated to the first TcpIpSEvReceivedPacketMaxLength bytes |
| MAX-LENGTH | Truncation length can be defined on a project specific basis. AUTOSAR has defined a default value, as given in the ReceivedPacket byte array definition above. |  |

⌋

 Security event context data definition: `SEV_TCP_DROP_INV_DEST_PORT`
  Upstream requirements:
⌈
| SEV Name | SEV_TCP_DROP_INV_DEST_PORT | < |
|---|---|---|
| ID | 11 | < |
| Description | Dropped TCP packet because of invalid destination TCP-Port. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| Length | uint16 | Length of ReceivedPacket byte array |
| ReceivedPacket | uint8 | Received Packet, truncated to the first TcpIpSEvReceivedPacketMaxLength bytes |
| MAX-LENGTH | Truncation length can be defined on a project specific basis. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. MACsec

Security event context data definition: `SEV_MKA_AUTHENTICATION_FAILURE`
  Upstream requirements:
⌈
| SEV Name | SEV_MKA_AUTHENTICATION_FAILURE | < |
|---|---|---|
| ID | 78 | < |
| Description | Event triggered when the authentication during the MKA communication has failed (wrong CKN/CAK). | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| PortId | uint8 |  |
| CKN | uint8 |  |
| MACAdressOfPeer | uint8 |  |

⌋

 Security event context data definition: `SEV_MKA_TIMEOUT`
  Upstream requirements:
⌈
| SEV Name | SEV_MKA_TIMEOUT | < |
|---|---|---|
| ID | 79 | < |
| Description | Event triggered when the timeout for the MKA communication has expired. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| PortId | uint8 |  |
| CKN | uint8 |  |
| MACAdressOfPeer | uint8 |  |

⌋

 Security event context data definition: `SEV_MKA_PORT_NOT_ENABLED`
  Upstream requirements:
⌈
| SEV Name | SEV_MKA_PORT_NOT_ENABLED | < |
|---|---|---|
| ID | 80 | < |
| Description | Event triggered when the indicated port for the MKA communication is not enable. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| PortId | uint8 |  |
| CKN | uint8 |  |
| MACAdressOfPeer | uint8 |  |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 可信平台
*原文标题：Trusted Platform*

Reporting Security Event with Verification Mode set to `MEASURED_BOOT` to IdsM
⌈
The Base Software shall raise the Security Event `SEV_EXEC_SW_COMPONENT_INTEGRITY_CHECK_FAILED` with Verification Mode set to `MEASURED_BOOT` for each affected SWComponent, if an integrity verification according to  has failed.
⌋

 Reporting Security Event with Verification Mode set to STRICT to IdsM
⌈
The Base Software shall raise the Security Event `SEV_EXEC_SW_COMPONENT_INTEGRITY_CHECK_FAILED` with Verification Mode set to STRICT for each affected SWComponent, if an integrity verification according to , ,  or  has failed.
⌋

 Security event context data definition: `SEV_EXEC_SW_COMPONENT_INTEGRITY_CHECK_FAILED`
  Status: DRAFT
  Upstream requirements:
  Previous Identifiers: `SWS_EM_02589`
⌈
| SEV Name | SEV_EXEC_SW_COMPONENT_INTEGRITY_CHECK_FAILED | < |
|---|---|---|
| ID | 99 | < |
| Description | The integrity check of a SW component has failed. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| SWComponent | uint16 |  |
| VerificationMode | uint8 | RECOVERY (0x00) MEASURED_BOOT (0x01) RUNTIME_PERIODIC (0x02) STRICT (0x03) |

⌋

### 15. Log Messages

The base software does not define any non-verbose log messages (i.e., modelled DLT messages).

### 16. Violation Messages

The base software does not define any violation messages (i.e., DLT messages logged for Violations according to ). Please note that concrete implementations might implement Non-Standardized Violations (see also )

### 17. Production 错误
*原文标题：Production Errors*

The base software does not define any production errors (i.e., Diagnostic Events).

### 18. 可信平台
*原文标题：Trusted Platform*

From a security perspective, it is essential that all software executed on the Adaptive Platform is trusted, i.e. the integrity and authenticity of the software is ensured.

A key requirement for a trusted Adaptive Platform is a Trust Anchor on the Machine that is authentic by definition (hence that alternative name, "root of trust"). A Trust Anchor is often realized as a public key stored in a secure environment, e.g. in non-modifiable persistent memory or in an HSM. The trust has to be extended to the Machine by appropriate means, e.g. by a chain of trust. If the Machine does not exhibit a Trust Anchor, it cannot be ensured that the Adaptive Platform is trusted.

 Availability of a Trust Anchor
⌈
If there is no Trust Anchor available on the Machine, the following requirements may be ignored: , , , , , , , , , .
⌋

There are many ways to verify the integrity and authenticity of the Adaptive Platform. A Trusted Platform can be realized e.g. (but not limited to) by

* Verification of the complete Ramdisk by the Bootloader
* Verification of individual Executables and data files, e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 处理 of failed authenticity checks
*原文标题：Handling of failed authenticity checks*

If the integrity and authenticity has been verified successfully, the system has to continue with its regular start-up process. If the integrity and authenticity check has failed, however, the Machine.trustedPlatformExecutableLaunchBehavior offers a configuration option on how to proceed with the start-up process.

 Failed authenticity checks
⌈
The Base Software shall select the trusted platform mode based on the value of Machine.trustedPlatformExecutableLaunchBehavior.
⌋

The configuration of the three modes is done via the trustedPlatformExecutableLaunchBehavior attribute within the Processed Manifests. The configuration option is only allowed to be processed after the integrity and authenticity of the relevant Processed Manifests has been verified.

These three modes of the Machine.trustedPlatformExecutableLaunchBehavior are:

* monitorMode
* noTrustedPlatformSupport
* strictMode

 Launch Behavior Validation
⌈
The Base Software shall stop the start-up sequence of the Adaptive Platform if the integrity or authenticity check of the Processed Manifests containing the trustedPlatformExecutableLaunchBehavior selection has failed and switch to the unrecoverable state.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Monitor 模式
*原文标题：Monitor Mode*

In monitorMode, the integrity and authenticity checks are performed, but the start-up process is not affected. Hence, the Adaptive Platform starts up even if the file system has been compromised.

 Monitor Mode
⌈
In monitorMode, if a check (, ,  and ) fails then the Base Software shall log the failure as DltMessage FailedIntegrityOrAuthenticityCheck and continue regular startup of the Adaptive Platform.
⌋

monitorMode is useful when the integrator wants the system to keep running, even if the platform is not considered trusted. In this case, the integrator might use additional measures outside the scope of Adaptive AUTOSAR, like e.g. restricted key access when using an HSM that supports this feature.

monitorMode is also useful during development phase, when frequent changes on the Adaptive Platform are performed and keeping the authentication tag (e.g. signatures) valid is a tedious task.

### 21. Strict 模式
*原文标题：Strict Mode*

In strictMode, the Adaptive Platform ensures that no Processes are executed, where the integrity and authenticity of the corresponding Executables, manifests or linked library could not be verified.

 Strict Mode - Execution manifest
⌈
In strictMode, the Base Software shall prevent the execution of an Executable if the integrity or authenticity check of the corresponding processed Execution Manifests has failed.
⌋

 Strict Mode - Service Instance manifests
⌈
In strictMode, the Base Software shall prevent the execution of an Executable if the integrity or authenticity check of at least one of the corresponding processed Service Instance Manifests has failed.
⌋

 Strict Mode - Executables
⌈
In strictMode, the Base Software shall allow to start a Process only if the integrity and authenticity of the corresponding Executable and all shared objects linked with it was successfully verified.
⌋

Executable code can be provided by executables and by statically linked shared objects linked by the executable. The Base Software cannot determine dynamically linked shared objects and thus these needs to be validated through an alternative, implementation specific, mechanism.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. API 规范
*原文标题：API Specification*

This specification does not specify a functional cluster. This chapter does not apply.

### 23. 服务接口
*原文标题：Service Interfaces*

This specification does not specify a functional cluster. This chapter does not apply.

### 24. 配置
*原文标题：Configuration*

Aspects of configuration of Specification of Base Software are described in . This chapter defines default values and semantic constraints for this configuration model.

### 25. Default Values

This section defines default values for lower layer software (not related to an individual functional cluster) where useful for selected configuration parameters (where provision of such default value seems to be straightforward). These are defined in . The motivation for providing these values is to simplify setting up an adaptive development project.

In other words the default values are meant to guide certain roles (e.g. developer, integrator) which values to choose to quickly get to a working configuration for Adaptive Machines. This document lists default values for parameters, which were proposed by AUTOSAR partners, based on experience from development projects. By intention, it makes no distinction between design and deployment.

Some default values are taken over from . When there is no equivalent note provided, a default value is specified by AUTOSAR partners. It is worth noting that in any case the parameters and their default settings have been chosen for the optimization of in-vehicle communication between a AUTOSAR adaptive or classic platform instance with some vehicle local communication peer.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Default values for TCP parameters

| Qualified attribute name | Default Value | Description |
|---|---|---|
| MachineDesign.tcpIpProps.tcpProps.tcpDelayedAckTimeout | 0.01 | maximum time in seconds an acknowledgment is delayed for transmission |
| MachineDesign.tcpIpProps.tcpProps.tcpFinWait2Timeout | 1 | timeout in seconds to receive a FIN from the remote node, after the local node has initiated connection termination, i.e. maximum time waiting in FINWAIT-2 state for a connection termination request from the remote TCP. |
| MachineDesign.tcpIpProps.tcpProps.tcpKeepAliveEnabled | TRUE | Keep alive is assumed to be an important mechanism to detect potential problems with communication peer. If enabled both peers regularly exchange messages to verify the connection status. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Default values for UDP parameters

| Qualified attribute name | Default Value | Description |
|---|---|---|
| MachineDesign.tcpIpProps.udpProps.udpTtl | 255 | time-to-live in number of hops for outgoing UDP packets.This mechanism prevents undelivered UDP segments to be forwarded between nodes for an unspecified number of hops. |

### 28. Default values for ICMPv4 parameters

| Qualified attribute name | Default Value | Description |
|---|---|---|
| MachineDesign.tcpIpIcmpProps.icmpV4Props.tcpIpIcmpV4EchoReplyEnabled | FALSE | enables or disables transmission of ICMPv4 messages. Value is taken from classic platform . Further it is assumed that there are more sophisticated mechanisms for diagnostic monitoring. |

### 29. Default values for ICMPv6 parameters

| Qualified attribute name | Default Value | Description |
|---|---|---|
| MachineDesign.tcpIpIcmpProps.icmpV6Props.tcpIpIcmpV6EchoReplyAvoidFragmentation | TRUE | Defines whether the echo reply is only transmitted in case that the incoming ICMPv6 Echo Request (Pings) fits the MTU of the respective interface, i.e. can be transmitted without IPv6 fragmentation. Assumption is that fragmentation of ICMP echo request will be no issue inside vehicle network (based on Ethernet communication). |
| MachineDesign.tcpIpIcmpProps.icmpV6Props.tcpIpIcmpV6EchoReplyEnabled | TRUE | Parameter enables or disables transmission of ICMP echo reply message in case of a ICMP echo reception. |
| MachineDesign.tcpIpIcmpProps.icmpV6Props.tcpIpIcmpV6HopLimit | 255 | time-to-live in number of hops for outgoing ICMPv6 packets. This mechanism prevents undelivered ICMPv6 packets to be forwarded between nodes for an unspecified number of hops. |
| MachineDesign.tcpIpIcmpProps.icmpV6Props.tcpIpIcmpV6MsgDestinationUnreachableEnabled | TRUE | Parameter enables or disables transmission of ICMP Destination Unreachable Messages. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Default values for ARP parameters

| Qualified attribute name | Default Value | Description |
|---|---|---|
| MachineDesign.ethIpProps.arpProps.tcpIpArpNumGratuitousArpOnStartup | 0 | number of gratuitous ARP replies which shall be sent on assignment of a new IP address. This is a specific type of ARP response message which was not triggered by an ARP request message. |
| MachineDesign.ethIpProps.arpProps.tcpIpArpPacketQueueEnabled | FALSE | Enables or disables support of the ARP packet queue according to IETF RFC 1122. Value is taken from classic platform . |
| MachineDesign.ethIpProps.arpProps.tcpIpArpRequestTimeout | 1 | Timeout in seconds for the validity of ARP requests. After the transmission of an ARP request further transmission of ARP requests to the same destination shall be skipped for the specified duration. Value is taken from classic platform . |

### 31. Default values for AutoIP parameters

| Qualified attribute name | Default Value | Description |
|---|---|---|
| MachineDesign.ethIpProps.autoIpProps.tcpIpAutoIpInitTimeout | 0 | Specifies the time in seconds Auto-IP waits at startup, before beginning with ARP probing. This delay is used to give DHCP time to acquire a lease in case a DHCP server is present. |

### 32. Default values for IPv4 fragmentation parameters

| Qualified attribute name | Default Value | Description |
|---|---|---|
| MachineDesign.ethIpProps.fragmentationProps.tcpIpIpFragmentationRxEnabled | FALSE | Enables or disables support for reassembling of incoming datagrams that are fragmented according to IETF RFC 815 (IP Datagram ReassemblyAlgorithms). At least for in-vehicle communication with nodes connected to MTU of same size, Ethernet fragmentation is not needed. In case this argumentation is followed subsequent fragmentation related parameters, all of them taking the following prefix MachineDesign.ethIpProps.fragmentationProps. have no role in setting default values: tcpIpIpNumFragments tcpIpIpNumReassDgrams tcpIpIpReassTimeout |

### 33. Default values for DHCPv6 parameters

| Qualified attribute name | Default Value | Description |
|---|---|---|
| MachineDesign.ethIpProps.dhcpProps.tcpIpDhcpV6CnfDelayMax | 1 | maximum delay in seconds before sending the first confirm message. Value is taken from classic platform . |
| MachineDesign.ethIpProps.dhcpProps.tcpIpDhcpV6CnfDelayMin | 0 | minimum delay in seconds before the first confirm message will be sent. Value is taken from classic platform . |
| MachineDesign.ethIpProps.dhcpProps.tcpIpDhcpV6InfDelayMax | 1 | maximum delay in seconds before sending the first information request message. Value is taken from classic platform . |
| MachineDesign.ethIpProps.dhcpProps.tcpIpDhcpV6InfDelayMin | 0 | minimum delay in seconds before sending the first information request message. Value is taken from classic platform . |
| MachineDesign.ethIpProps.dhcpProps.tcpIpDhcpV6SolDelayMax | 1 | maximum delay in seconds before sending the first solicit message. Value is taken from classic platform . |
| MachineDesign.ethIpProps.dhcpProps.tcpIpDhcpV6SolDelayMin | 0 | minimum delay in seconds before the first solicit message will be sent. Value is taken from classic platform . |

### 34. Default values for NDP parameters

| Qualified attribute name | Default Value | Description |
|---|---|---|
| MachineDesign.ethIpProps.ndpProps.tcpIpNdpDefaultReachableTime | 120 | reachable time for NDP in seconds as specified by IETF RFC 4861. |
| MachineDesign.ethIpProps.ndpProps.tcpIpNdpDefaultRetransTimer | in the range between 0.1 and 1 | retransmission timer for NDP in seconds as specified by IETF RFC 4861. |
| MachineDesign.ethIpProps.ndpProps.tcpIpNdpDefaultRouterListSize | 2 | size of router list. These entries may be used to send NDP messages. Value is taken from classic platform . |
| MachineDesign.ethIpProps.ndpProps.tcpIpNdpDefensiveProcessing | FALSE | If enabled the NDP shall only process Neighbor Advertisements which are received in reaction to a previously transmitted Neighbor Solicitation as well as skipping updates to the Neighbor Cache based on received Neighbor Solicitations. If disabled all Neighbor Advertisements and Solicitations shall be processed as specified in RFC4861. |
| MachineDesign.ethIpProps.ndpProps.tcpIpNdpDelayFirstProbeTimeValue | 5 | delay in seconds before sending the first "Neighbor Unreachable Detection" (NUD) probe. Value is taken from classic platform . |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Semantic Constraints

This specification does not specify a functional cluster. This chapter does not apply.

### 36. 附录
*原文标题：Appendix*

### 37. Mentioned 清单 Elements
*原文标题：Mentioned Manifest Elements*

For the sake of completeness, this chapter contains a set of class tables representing meta-classes mentioned in the context of this document but which are not contained directly in the scope of describing specific meta-model semantics.

Chapter is generated.

| Class | Dhcpv6Props | < | < | < |
|---|---|---|---|---|
| Note | This meta-class specifies the configuration options for DHCPv6. | < | < | < |
| Base | ARObject | < | < | < |
| Aggregated by | Ipv6Props.dhcpProps | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| tcpIpDhcpV6CnfDelayMax | TimeValue | 0..1 | attr | Maximum delay in seconds before sending the first Confirm message. If this value is bigger than the previous minimum delay value a random delay will be chosen from the interval. |
| tcpIpDhcpV6CnfDelayMin | TimeValue | 0..1 | attr | Minimum delay in seconds before the first Confirm message will be sent. |
| tcpIpDhcpV6InfDelayMax | TimeValue | 0..1 | attr | Maximum delay in seconds before sending the first Information Request message. If this value is bigger than the previous minimum delay value a random delay will be chosen from the interval. |
| tcpIpDhcpV6InfDelayMin | TimeValue | 0..1 | attr | Minimum delay (s) before the first Information Request message will be sent. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Demands and constraints on Base 软件 (normative)
*原文标题：Demands and constraints on Base Software (normative)*

This specification does not specify a functional cluster. This subchapter does not apply.

### 39. Platform Extension 接口 (normative)
*原文标题：Platform Extension Interfaces (normative)*

This specification does not specify a functional cluster. This subchapter does not apply.

### 40. Not implemented 需求
*原文标题：Not implemented requirements*

This functional cluster implements all functional requirements specified in the corresponding requirement specifications.

### 41. History of Constraints and 规范 Items
*原文标题：History of Constraints and Specification Items*

This chapter provides an overview of the history of constraints and specification items. Please note that the lists in this chapter also include constraints and specification items that have been removed from the specification in a later version. These constraints and specification items do not appear as hyperlinks in the document.

### 42. Change History of this document according to AUTOSAR Release R26-11

### 43. Added 规范 Items in R26-11
*原文标题：Added Specification Items in R26-11*

| Number | Heading |
|---|---|
| Security Events for Base Software |  |
| Security events for ap_core |  |
| Reporting Security Event with Verification Mode set to MEASURED_BOOT to IdsM |  |
| Reporting Security Event with Verification Mode set to STRICT to IdsM |  |
| Security event context data definition: SEV_EXEC_SW_COMPONENT_INTEGRITY_CHECK_FAILED |  |
| Security event context data definition: SEV_ETH_DROP_UNKNOWN_ETHERTYPE |  |
| Security event context data definition: SEV_ETH_DROP_VLAN_DOUBLE_TAG |  |
| Security event context data definition: SEV_ETH_DROP_INV_VLAN |  |
| Security event context data definition: SEV_ETH_DROP_MAC_COLLISION |  |
| Security event context data definition: SEV_ARP_IP_ADDR_CONFLICT |  |
| Security event context data definition: SEV_TCP_DROP_INV_DEST_PORT |  |
| Security event context data definition: SEV_UDP_DROP_INV_DEST_PORT |  |
| Security event context data definition: SEV_IPV4_DROP_INV_DEST_ADDR |  |
| Security event context data definition: SEV_IPV6_DROP_INV_DEST_ADDR |  |
| Security event context data definition: SEV_MKA_AUTHENTICATION_FAILURE |  |
| Security event context data definition: SEV_MKA_TIMEOUT |  |
| Security event context data definition: SEV_MKA_PORT_NOT_ENABLED |  |
| Security event context data definition: |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Changed 规范 Items in R26-11
*原文标题：Changed Specification Items in R26-11*

none

### 45. Deleted 规范 Items in R26-11
*原文标题：Deleted Specification Items in R26-11*

none
