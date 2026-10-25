# Specification of Firewall for Classic Platform (`Firewall`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1084 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_Firewall_1084\AUTOSAR_CP_SWS_Firewall.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_Firewall_1084\AUTOSAR_CP_SWS_Firewall.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_Firewall_1084\zzgen\CP_SWS_Firewall.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module Firewall.

The Firewall filters network traffic based on pre-defined firewall rules to protect the host from malicious messages. To this end, the Firewall supports stateless packet inspection, stateful packet inspection and deep packet inspection. Additionally, the Firewall offers interfaces to adapt the Firewall rule configuration during runtime, e.g. to adapt for different vehicle states or to support Intrusion Prevention Systems.

The Firewall also supports deployment scenarios directly on the switch: A Classic AUTOSAR stack can be deployed on a smart switch (containing a dedicated CPU), where the Firewall module can filter messages on network level rather than host level. The Firewall supports interfaces to the switch core to leverage hardware-accelerated network packet filtering on the switch core, e.g., by the means of TCAM rules.

## 模块依赖

The Firewall has connections to the following modules:

* LSduR: The Firewall receives network packets from the LSduR for inspection and passes them back to the LSduR if the network packet is allowed to continue in the network stack.
* EthIf: The Firewall uses the EthIf module to communicate with Ethernet Switch Drivers in the case of a deployment on a switch.
* IdsM: The Firewall module raises Security Events to the IdsM in the case of blocked network packets.
* BswM: The BswM manages the state of the Firewall (see Chapter  for more details)

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module Firewall.

The Firewall filters network traffic based on pre-defined firewall rules to protect the host from malicious messages. To this end, the Firewall supports stateless packet inspection, stateful packet inspection and deep packet inspection. Additionally, the Firewall offers interfaces to adapt the Firewall rule configuration during runtime, e.g. to adapt for different vehicle states or to support Intrusion Prevention Systems.

The Firewall also supports deployment scenarios directly on the switch: A Classic AUTOSAR stack can be deployed on a smart switch (containing a dedicated CPU), where the Firewall module can filter messages on network level rather than host level. The Firewall supports interfaces to the switch core to leverage hardware-accelerated network packet filtering on the switch core, e.g., by the means of TCAM rules.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Firewall module that are not included in the .

### 3. Acronyms

| Acronym: | Description: |
|---|---|
| Firewall | An automotive Ethernet firewall is a network security device that monitors incoming and outgoing network traffic and grants or rejects network access between two or more Electronic Control Units (ECU) or between network zones (e.g. vehicle domain (ADAS, infotainment, diagnostics etc), trusted/non-trusted zones). |
| Firewall Rule | Pattern of expected values for a network packet together with an associated action in case a network packet matches the pattern (e.g., block or allow the network packet). |
| Firewall State | The Firewall State reflects the current state of the vehicle (e.g. driving, in a diagnostic session, ...) and can be set by a user application. Based on the currently active Firewall State, a specific set of Firewall Rules matching the current vehicle state is active. |
| Allowlist | Collection of Firewall Rules where the network packet is allowed in case of a pattern match. |
| Blocklist | Collection of Firewall Rules where the network packet is blocked in case of a pattern match. |
| OSI Layer | Network layer according to the ISO OSI model as specified in ISO/IEC 7498. |

### 4. Abbreviations

| Abbreviation: | Description: |
|---|---|
| BswM | Basic Software Mode Manager |
| DDS | Data Distribution Service |
| DDS-RTPS | DDS Real-Time Publish Subscribe Protocol |
| DoIP | Diagnostics over IP |
| EthIf | Ethernet Interface |
| IDS | Intrusion Detection System |
| IdsM | IDS Manager |
| IdsR | IDS Reporter |
| IP | Internet Protocol |
| SEv | Security Event |
| SOME/IP | Service oriented Middleware over IP |
| TCAM | Ternary content-addressable memory |
| TCP | Transmission control protocol |
| UCM | Update & Configuration Management |
| UDP | User datagram protocol |

### 5. 相关文档
*原文标题：Related documentation*

This document provides the software specification for the Firewall module. The following document complement this specification:

* `FO_RS_Firewall` : Requirement specification of the AUTOSAR firewall on Foundation level.
* `CP_TPS_SystemTemplate` : System-level description of the Firewall configuration.

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for the Firewall.

Thus, the specification SWS BSW General shall be considered as additional and required specification for the Firewall.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 已知限制
*原文标题：Known Limitations*

The firewall supports only filtering of ingress traffic.

### 10. 适用的车型领域
*原文标题：Applicability to car domains*

No limitation with regards to applicability to specific car domains.

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The Firewall has connections to the following modules:

* LSduR: The Firewall receives network packets from the LSduR for inspection and passes them back to the LSduR if the network packet is allowed to continue in the network stack.
* EthIf: The Firewall uses the EthIf module to communicate with Ethernet Switch Drivers in the case of a deployment on a switch.
* IdsM: The Firewall module raises Security Events to the IdsM in the case of blocked network packets.
* BswM: The BswM manages the state of the Firewall (see Chapter  for more details)

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Stateless filtering of network traffic |  |  |
| Stateful filtering of network traffic |  |  |
| Deep Packet Inspection of network traffic |  |  |
| Allow list and block list configuration |  |  |
| Rule-Based filtering of network traffic |  |  |
| Rate Limiting |  |  |
| State-dependent Filtering |  |  |
| Raising of security Alerts |  |  |
| Hardware-Accelerated Filtering Support |  |  |
| Classification of development errors |  |  |

### 13. 功能规范
*原文标题：Functional specification*

### 14. 概述
*原文标题：Overview*

The AUTOSAR basic software module Firewall serves as an additional security layer that inspects network traffic and filters it based on a given rule set. The general behavior of a Firewall can be described as follows: The Firewall manages a list of expected network packet patterns, where each pattern is associated with a respective action (e.g. allow or block the network packet). The combination of network packet pattern and action is called a FirewallRule. For every network packet that passes the network stack (ingress and egress), the Firewall compares the network packet against the list of patterns. In case of a pattern match, the Firewall carries out the action associated with the pattern. If no pattern matches (no-match case), the Firewall carries out a default action.

The Firewall interfaces with the LSduR to receive network packets. After inspection, the Firewall returns the network packet to LSduR if it is allowed to continue in the network stack or otherwise dropped by the Firewall.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. 模块处理
*原文标题：Module handling*

### 16. 初始化
*原文标题：Initialization*

The Firewall module is initialized via `Fw_Init`. Except for `Fw_GetVersionInfo` and `Fw_Init`, the API functions of the Firewall module may only be called after the module has been properly initialized.

The Firewall follows the specification from the `CP_SWS_BSWGeneral`  with regards to the module initialization, especially `SWS_BSW_00071`, `SWS_BSW_00243` and `SWS_BSW_00231`.

### 17. 时序 Related Functionality
*原文标题：Timing Related Functionality*

To be able to handle asynchronous calls correctly, the Firewall module is triggered cyclically via the `Fw_MainFunction`.

### 18. 网络 packet inspection
*原文标题：Network packet inspection*

The Firewall manages a list of firewall rules, which consist of an expected network packet pattern and actions to be carried out in case of a pattern match. The firewall rules are modeled as FirewallRules in the AUTOSAR methodology. For every network packet that passes the network stack, the firewall compares the network packet with all configured expected patterns and carries out the action associated with the FirewallRule in case of a pattern match. The FirewallRules are ordered based on the Metamodel configuration and the firewall shall iterate through the FirewallRules in the configured order until the first pattern match.

 Pattern matching algorithm
  Status: DRAFT
  Upstream requirements:
⌈
Upon invocation of `Fw_RxIndication`, the firewall shall inspect the received network packet and compare it against the ordered list of expected patterns defined in FirewallRules. In case of a pattern match, the firewall stops with the comparison against the expected patterns and carries out the action associated with the matching rule.
⌋

The possible actions in case of a pattern match are described in Sec. .

The firewall supports different filtering mechanisms:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Stateless packet inspection

For stateless packet inspection, the Firewall inspects the network protocol headers up to OSI layer 4 and compares them against expected values.

  Status: DRAFT
  Upstream requirements:
⌈
The Firewall shall compare the expected values defined in FirewallDataLinkFilterConfig of every FirewallRule against the header fields in the network packet. If all values match, the FirewallDataLinkFilterConfig is considered a match. Otherwise the FirewallDataLinkFilterConfig is considered a no-match.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
The Firewall shall compare the expected values defined in FirewallNetworkLayerFilterConfig of every FirewallRule against the header fields in the network packet. If all values match, the FirewallNetworkLayerFilterConfig is considered a match. Otherwise the FirewallNetworkLayerFilterConfig is considered a no-match.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
The Firewall shall compare the expected values defined in FirewallTransportLayerFilterConfig of every FirewallRule against the header fields in the network packet. If all values match, the FirewallTransportLayerFilterConfig is considered a match.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Inspection of not modeled protocols

For stateless packet inspection, the Firewall natively supports the modeled protocols Ethernet, IPv4, IPv6, ICMP, TCP and UDP. Additional protocols can be added by two mechanisms:

EtherType inspection: Many protocols can already be identified on data link layer by means of the EtherType (as defined in IEEE 802.3 ). These protocols can therefore be blocked by the Firewall by configuring FirewallFilterEtherType within a FirewallRule. Examples for protocols that can be identified based on EtherTypes can be found in Table .

| EtherType | Protocol |
|---|---|
| 0x0806 | Address Resolution protocol over IPv4 (ARP) |
| 0x22EA | Stream Reservation Protocol (SRP) |
| 0x22F0 | Audio Video Transport Protocol (AVTP) |
| 0x88F7 | Precision Time Protocol (PTP) over IEEE 802.3 Ethernet |
| 0xF1C1 | Redundancy Tag (as defined in IEEE 802.1CB Frame Replication and Elimination for Reliability) |

Generic inspection based on byte pattern: The Firewall supports generic inspection of network packets based on expected byte-values at given offsets. This feature is specified in Sec.  and allows for detailed inspection of protocols that are not modeled within the Firewall as well as inspection of payload data.

### 21. Stateful packet inspection

In stateful packet inspection, the FC Firewall takes into account the stateful nature of TCP and performs additional checks to identify timeouts, limit the number of open connections and perform checks against the TCP state machine.

  Status: DRAFT
  Upstream requirements:
⌈
If the parameter FirewallTimeoutCheck is set, the Firewall shall store the time of the latest network packet for the respective communication peer. If the time between the latest and current network packet is smaller than the value of FirewallTimeoutCheck, the FirewallTransportLayerTcpFilterConfig is considered a match.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If the parameter FirewallNumberOfParallelTcpSessions is set, the Firewall shall keep track of the number of open TCP connections. If a network packet wants to open a new TCP session and the number of open TCP sessions including the newly opened TCP session is smaller than FirewallNumberOfParallelTcpSessions, the FirewallTransportLayerTcpFilterConfig is considered a match.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Deep packet inspection

The Firewall supports also inspection of application layer protocols to perform deep packet inspection of network packets. To this end, the Firewall supports deep packet inspection of the following protocols:

* SOME/IP (including SOME/IP-SD)
* DDS
* DoIP
* Generic deep packet inspection

### 23. SOME/IP

For SOME/IP  the inspection focuses on the SOME/IP header fields. The header fields also include service-specific information like Service ID, Method ID etc., so the deep packet inspection of SOME/IP packets can be used to perform access control to individual services.

It is possible that multiple SOME/IP messages are transported within one TCP or UDP frame. Within the Firewall metamodel, every FirewallRule can aggregate at most one SOME/IP message. If a network packet contains more than one SOME/IP message, the Firewall has thus to check that for every SOME/IP message within the network packet a valid FirewallRule exists.

  Status: DRAFT
  Upstream requirements:
⌈
If the network packet to be inspected contains one or multiple SOME/IP messages, the Firewall shall find the subset of FirewallRules, where the respective FirewallDataLinkFilterConfig, FirewallNetworkLayerFilterConfig and FirewallTransportLayerFilterConfig have provided a match and a FirewallSomeipProtocolFilterConfig is aggregated.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. DDS

Deep packet inspection of DDS messages is based on the DDS Interoperability Wire Protocol (DDS-RTPS ), which specifies the representation of DDS messages within network packets: DDS-RTPS defines a packet format that consists of a RTPS header and multiple RTPS submessages that can be accumulated within one RTPS message. Additionally, DDS allows also for multiple RTPS messages within one TCP or UDP packet. In analogy to SOME/IP, the Firewall allows only the configuration of a single RTPS header and submessage within a FirewallRule and the Firewall has hence to compare the network packet against all configured RTPS rules.

  Status: DRAFT
  Upstream requirements:
⌈
If the network packet to be inspected contains one or multiple DDSI-RTPS messages, the Firewall shall find the subset of FirewallRules, where the respective FirewallDataLinkFilterConfig, FirewallNetworkLayerFilterConfig and FirewallTransportLayerFilterConfig have provided a match and a FirewallDdsFilterConfig is aggregated.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
For this subset, the Firewall shall compare their expected values against the fields of the DDS-RTPS messages and submessages in the network packet.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. DoIP

The Firewall supports deep packet inspection of DoIP messages , where the firewall inspects the DoIP header as well as parts of the payload (DoIP source/destination address, UDS services). The Firewall does not, however, perform deep packet inspection of the UDS protocol, i.e., inspection on the level of individual DIDs, RIDs etc. Nevertheless, these kind of checks are still possible to implement by means of the generic inspection feature described in Sec. .

  Status: DRAFT
  Upstream requirements:
⌈
The Firewall shall compare the expected values defined in FirewallDoipFilterConfig of every FirewallRule against the DoIP header fields in the network packet. If all values match, the FirewallDoipFilterConfig is considered a match. Otherwise the FirewallDoipFilterConfig is considered a no-match.
⌋

Similar to the stateless network packet inspection on lower layers, it is also possible to define ranges of allowed values by using minimal and maximal values. In case such a range is defined, all values from the network packet that fall within this range are a match.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Generic inspection

The Firewall allows for generic inspection of the network packets (e.g. to perform payload inspection or to inspect protocols that are not natively supported by the firewall). To this end, every FirewallRule can aggregate multiple FirewallPayloadBytePatternFilterConfigs, which specify the expected byte values at a specific offset within the network packet.

  Status: DRAFT
  Upstream requirements:
⌈
The Firewall shall compare the expected values defined in the FirewallPayloadBytePatternFilterConfigs of every FirewallRule against the values at the specified offsets in the network packet. If all values match, the FirewallPayloadBytePatternFilterConfigs are considered matches.
⌋

### 27. 网络 packet 过滤
*原文标题：Network packet filtering*

After describing the rule-based network packet inspection process based on pattern-matching in chapter , this chapter specifies the associated filtering mechanisms supported by the Firewall. Section  describes the pattern-matching-based filtering approach using Allowlists and Blocklists, Section  specifies the rate limiting feature of the Firewall and Section  outlines the state-dependent filtering mechanism based on configurable Firewall States.

 Allowed network packets
  Status: DRAFT
  Upstream requirements:
⌈
If a network packet shall be allowed to continue in the network stack, the Firewall shall call `LsduR_FwRxIndication` with the same parameters used when receiving the network packet via `Fw_RxIndication`.
⌋

 Blocked network packets
  Status: DRAFT
  Upstream requirements:
⌈
If a network packet shall be blocked from continuing in the network stack, the Firewall shall drop the network packet. If Pdu.KeepLocalBuffer is set to True, the Firewall shall additionally call `LSduR_FwRxReleaseBuffer` to release the buffer.
⌋

### 28. Allowlists and Blocklists

Firewalls can generally be categorized into two groups: Allowlist and Blocklist firewalls. In an Allowlist firewall, all network traffic that is allowed to pass the firewall is specified (i.e. patterns are defined), all network packets without a matching pattern are blocked. Blocklist firewalls implement the inverse approach: Only explicitly defined network packets are blocked, whereas traffic without a matching pattern is allowed to pass the firewall.

The action to be carried out in the case of a match of a FirewallRule is defined by the parameter FirewallAction in the referenced FirewallActionForMatchingRules.

 Allow condition for a network packet
  Status: DRAFT
  Upstream requirements:
⌈
If a FirewallRule is a match and FirewallAction in the referenced FirewallActionForMatchingRules is set to allow, the Firewall shall allow the network packet as defined in .
⌋

 Block condition for a network packet
  Status: DRAFT
  Upstream requirements:
⌈
If a FirewallRule is a match and FirewallAction in the referenced FirewallActionForMatchingRules is set to block, the Firewall shall block the network packet as defined in .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Rate limiting

The Firewall supports rate limiting based on the pattern matching algorithm to identify off-frequency cyclic messages, that can be caused by, e.g., a man-in-the-middle attack or a faulty ECU. To realize this, the Firewall implements the leaky bucket algorithm, which is also supported on HW side by some products.

  Status: DRAFT
  Upstream requirements:
⌈
If the parameters FirewallBucketSize and FirewallRefillAmount are configured for a FirewallRule, the Firewall shall keep track of the number of pattern matches by means of a leaky bucket algorithm, where FirewallRefillAmount defines the decrement rate of the leaky bucket algorithm and the counter is increased by one for every pattern match.
⌋

 Overflowing leaky bucket behaviour
  Status: DRAFT
  Upstream requirements:
⌈
In the case of a pattern match and if the leaky bucket counter is bigger than FirewallBucketSize, the Firewall shall block the network packet as defined in .
⌋

  Status: DRAFT
  Upstream requirements: ,
⌈
The firewall shall keep the current leaky bucket counter also when the firewall state is switched according to .
⌋

### 30. 状态 dependent 过滤
*原文标题：State dependent filtering*

The in-vehicle traffic can strongly depend on the vehicle's situation (e.g. driving, parking, in a diagnostic session etc.), which also renders the expected network packets to be different depending on the current vehicle state. The Firewall supports this use-case by being state-dependent: FirewallRules can be associated with specific Firewall States, that are pre-configured on a project-specific basis by the integrator and that can be managed by a user application. Within the AUTOSAR Meta Model, this feature is realized by FirewallStateDependentRuless that aggregate a set of FirewallRules. Only one of the FirewallStateDependentRuless can be active, which means that only the FirewallRules associated with that FirewallStateDependentRules are active

  Status: DRAFT
  Upstream requirements:
⌈
Only the FirewallRules referenced by the currently active FirewallStateDependentRules shall be taken into account for the network packet inspection. FirewallRules that are not referenced by the currently active FirewallStateDependentRules shall be ignored.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Firewall interaction with the switch

Firewalls are not limited to deployments on endpoints/Host-ECUs, but make also a lot of sense on central network entities like gateways and switches. Switches come typically with some basic firewall functionality, oftentimes based on TCAM rules. TCAM rules allow to perform stateless packet inspection, but cannot be used for stateful and deep packet inspection. The latter two inspection categories can be realized on a switch when it contains a dedicated CPU that runs a firewall in SW and that performs the inspection parts that cannot be realized by TCAM rules.

From a technical perspective, these so-called smart switches behave like any other uC: they have a CPU, memory and are connected to the switch core by an Ethernet connection (see also Fig. ). This allows to also run an AUTOSAR stack directly on the switch. Switches are typically very resource-constrained devices, so it may allow to only run a stripped-down version of AUTOSAR, but this still allows to re-use the standardized AUTOSAR modules, the AUTOSAR tooling for configuration and the AUTOSAR firewall module to extend the basic firewall functionality based on TCAMs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Packet inspection by AUTOSAR firewall 模块
*原文标题：Packet inspection by AUTOSAR firewall module*

This section describes the case where a network packet was received by the switch and it passed inspection on the switch core, but additional inspection is needed by the firewall module on the switch CPU. The inspection by the firewall module can be performed quicker by taking into account that parts of the network packet were already inspected by the switch core. Hence, the firewall has to iterate only over all rules that are compatible with the filter rules associated with the EthSwtStreamIdentification that allowed the network packet to pass. To this end, the firewall module receives the index of the switch core filter rule via the parameter `FIREWALL_RULE_ID_16` of the PDU Metadata.

 Reduced set of firewall rules due to pre-filtering by switch core
  Status: DRAFT
  Upstream requirements:
⌈
If FirewallingWithPerStreamFiltering is enabled, the firewall shall consider only the FirewallRules for the inspection of the network packet that are compatible with the value stored at the `FIREWALL_RULE_ID_16` of the PDU Metadata.
⌋

Note that the mapping between the FirewallRules managed by the firewall module and the filter rules for the switch core are not explicitly modeled.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 网络 packets blocked by the switch 核
*原文标题：Network packets blocked by the switch core*

This section describes the case where a network packet was received by the switch and blocked by the filter rules in the switch core. The network packet needs not to be inspected by the firewall on the switch CPU, but the firewall shall raise a security event (SEv) for the blocked network packet.

To this end, the firewall supports two mechanisms to raise SEvs:

* Fine-grained SEvs indicating the network protocol for which a pattern mismatch was observed. This mechanism is outlined in detail in Section  and requires an inspection of the network packet by the firewall module.
* Reading out counting statistics from the switch core about applications of switch firewall rules on a regular basis and raise a SEv when counters are increased.

Both approaches have their advantages and disadvantages with respect to CPU load, memory consumption, detail of information etc. Both approaches are supported by the firewall and it is up to the project to decide which approach to follow. Both approaches are described in detail in the following sections.

### 34. SEvs on 协议 level
*原文标题：SEvs on protocol level*

Section  specifies the mechanism for raising security events based on the inspection result. Since the SEvs are very fine-grained, the network packet needs to be inspected by the firewall on the switch CPU to identify the correct SEv to raise. Hence, even when the network packet should already be blocked by the switch core, it needs to be forwarded to the switch CPU for the firewall to inspect it.

However, the sole purpose of the network packet inspection by the firewall module is to identify the correct SEv to raise. It was already decided by the switch core that the network packet shall be dropped, which is typically done by the default firewall rule in the switch core. Hence, the firewall can directly block the network packet according to .

 Default firewall rule in the switch core
  Status: DRAFT
  Upstream requirements:
⌈
If `Fw_RxIndication` is invoked with `FIREWALL_RULE_ID_16` containing the default firewall rule in the switch core, the Firewall shall block the network packet as defined in .
⌋

### 35. Switch firewall rule counting statistics SEv

Many switches support counting statistics for the firewall rules on the switch core. To this end, the rules are bundles within buckets that count the number of filter rule matches of all referenced rules combined (see Fig. ). The buckets are configured on switch level and are not part of the Firewall specification.

The firewall can poll the count values of these buckets on a regular basis and raise a SEv if the count values have changed, i.e., if at least one network packet was blocked by the switch. The sequence diagram for this mechanism is shown in Sec. .

  Status: DRAFT
  Upstream requirements:
⌈
If the container FirewallSwitchBucketCounterStatistics is configured, the firewall shall invoke `EthIf_GetStreamHandleIdxStatistics` for all configured SwitchIdxs every FwSwitchBucketCounterPollingInterval seconds.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
When `Fw_StreamStatisticsIndication` is called, the firewall shall extract the bucket counter values from ListOfBucketsPtr. The firewall shall cache the count values for every SwitchIdx until updated count values are reported via `Fw_StreamStatisticsIndication`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. firewall rules in the switch 核的管理
*原文标题：Management of firewall rules in the switch core*

This section describes the case when the BswM changes the firewall state, so that the set of active firewall filter rules is changed. This has also an impact in the firewall rules in the switch core, which need to be synchronized with the firewall rules on the switch CPU to ensure correct network packet filtering. To this end, the firewall supports the (de-)activation of individual rules on the switch core during runtime. The firewall does not change the actual filter rule during runtime; it is assumed that the set of filter rules are statically configured and the firewall only switches them on/off. A sequence diagram showing the interaction with the switch core can be found in Sec. .

  Status: DRAFT
  Upstream requirements:
⌈
If the firewall state is switched by the BswM according to , the firewall module shall invoke `EthIf_SetStreamState` for all applicable SwitchIdx and StreamHandleIdx and set their activity status using StreamActivityStatus to the value required by the active firewall state.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 67 章（内容从略，见纯文本全文）

37. 安全事件
38. SEvs raised by the firewall
39. Raising SEvs
40. 错误分类
41. Development 错误
42. Runtime 错误
43. Production 错误
44. Extended Production 错误
45. API 规范
46. Imported 类型
47. 类型定义
48. ConfigType
49. 功能定义
50. Init
51. GetVersionInfo
52. SetFirewallState
53. Callback 通知
54. RxIndication
55. StreamStatisticsIndication
56. StreamStateIndication
57. Scheduled functions
58. MainFunction
59. Expected 接口
60. Mandatory 接口
61. Optional 接口
62. Configurable 接口
63. 服务接口
64. 时序图
65. Switch 核 filter rule extraction
66. Switch 核 filter rule counter statistics
67. Switch 核 filter rule 管理
68. 配置规范
69. How to read this chapter
70. Containers and 配置 parameters
71. FirewallGeneral
72. Firewall Pdu Routing
73. Connection to BswM
74. Filter Rules
75. 数据 link layer 配置
76. IPv4 配置
77. IPv6 配置
78. ICMP 配置
79. TCP 配置
80. UDP 配置
81. SOME/IP 配置
82. SOME/IP-SD 配置
83. DDS 配置
84. DoIP 配置
85. Payload Byte Pattern 配置
86. Switch bucket counting mechanism
87. 安全事件
88. 发布信息
89. 附录
90. 不适用需求
91. Change history of AUTOSAR traceable items
92. Traceable item history of this document according to AUTOSAR Release R25-11
93. Added 规范 Items in R25-11
94. Changed 规范 Items in R25-11
95. Deleted 规范 Items in R25-11
96. Traceable item history of this document according to AUTOSAR Release R24-11
97. Added 规范 Items in R24-11
98. Changed 规范 Items in R24-11
99. Deleted 规范 Items in R24-11
100. Traceable item history of this document according to AUTOSAR Release R23-11
101. Added 规范 Items in R23-11
102. Changed 规范 Items in R23-11
103. Deleted 规范 Items in R23-11
