# Specification of Firewall for Adaptive Platform (`Firewall`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1063 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_SWS_Firewall_1063\AUTOSAR_AP_SWS_Firewall.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_SWS_Firewall_1063\AUTOSAR_AP_SWS_Firewall.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_SWS_Firewall_1063\zzgen\AP_SWS_Firewall.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the FC Firewall.

The FC Firewall manages and configures the host-based firewall on the ECU where the Adaptive Platform is deployed on. To this end, the FC Firewall configures the underlying Firewall engine according to the Firewall Rule configuration deployed with the manifests. Additionally, the FC Firewall offers interfaces to adapt the Firewall rule configuration during runtime, e.g. to adapt for different vehicle contexts or to support Intrusion Prevention Systems.

## 模块依赖

AUTOSAR decided not to standardize interfaces which are exclusively used between Functional Clusters (on platform-level only), to allow efficient implementations, which might depend e.g. on the used Operating System.

This chapter provides an informative guideline of the interaction of Firewall with other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the public interfaces provided by Firewall to other Functional Clusters. Section  lists the public interfaces required by Firewall.

The goal is to provide a clear understanding of Functional Cluster boundaries and interaction, without specifying syntactical details. This ensures compatibility between documents specifying different Functional Clusters and supports parallel implementation of different Functional Clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters and return values can be added.

A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the FC Firewall.

The FC Firewall manages and configures the host-based firewall on the ECU where the Adaptive Platform is deployed on. To this end, the FC Firewall configures the underlying Firewall engine according to the Firewall Rule configuration deployed with the manifests. Additionally, the FC Firewall offers interfaces to adapt the Firewall rule configuration during runtime, e.g. to adapt for different vehicle contexts or to support Intrusion Prevention Systems.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations that are only relevant to the FC Firewall. A general list of acronyms and abbreviations is available in the .

### 3. Acronyms

| Acronym: | Description: |
|---|---|
| Firewall | An automotive Ethernet firewall is a network security device that monitors incoming and outgoing network traffic and grants or rejects network access between two or more Electronic Control Units (ECU) or between network zones (e.g. vehicle domain (ADAS, infotainment, diagnostics etc), trusted/non-trusted zones). |
| FC Firewall | Abbreviation for the Functional Cluster Firewall. |
| Firewall Rule | Pattern of expected values for a network packet together with an associated action in case a network packet matches the pattern (e.g., block or allow the network packet). |
| Firewall State | The Firewall State reflects the current state of the vehicle (e.g. driving, in a diagnostic session, ...) and can be set by a user application. Based on the currently active Firewall State, a specific set of Firewall Rules matching the current vehicle state is active. |
| Allowlist | Collection of Firewall Rules where the network packet is allowed in case of a pattern match. |
| Blocklist | Collection of Firewall Rules where the network packet is blocked in case of a pattern match. |
| OSI Layer | Network layer according to the ISO OSI model as specified in ISO/IEC 7498. |

### 4. Abbreviations

| Abbreviation: | Description: |
|---|---|
| DDS | Data Distribution Service |
| DDS-RTPS | DDS Real-Time Publish Subscribe Protocol |
| DoIP | Diagnostics over IP |
| IDS | Intrusion Detection System |
| IdsM | IDS Manager |
| IdsR | IDS Reporter |
| IP | Internet Protocol |
| SEv | Security Event |
| SOME/IP | Service oriented Middleware over IP |
| TCP | Transmission control protocol |
| UCM | Update & Configuration Management |
| UDP | User datagram protocol |

### 5. 相关文档
*原文标题：Related documentation*

This document provides the software specification for the FC Firewall. The following document complement this specification:

* `RS_Firewall` : Requirement specification of the AUTOSAR firewall on Foundation level.
* `TPS_ManifestSpecification` : Specification of the Adaptive AUTOSAR MetaModel, including the modeling of the FC Firewall.

### 6. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 7. Further applicable 规范
*原文标题：Further applicable specification*

AUTOSAR provides a core specification  which is also applicable for the FC Firewall. The chapter "General requirements for all FunctionalClusters" of this specification shall be considered as an additional and required specification for implementation of the FC Firewall.

### 8. 约束与假设
*原文标题：Constraints and assumptions*

### 9. 已知限制
*原文标题：Known limitations*

Features not supported for this release:

* Firewall rule (de-)activation during runtime
* Support for OEM-defined SEVs

### 10. 对其他功能集群的依赖
*原文标题：Dependencies to other Functional Clusters*

AUTOSAR decided not to standardize interfaces which are exclusively used between Functional Clusters (on platform-level only), to allow efficient implementations, which might depend e.g. on the used Operating System.

This chapter provides an informative guideline of the interaction of Firewall with other Functional Clusters in the AUTOSAR Adaptive Platform. Section  lists the public interfaces provided by Firewall to other Functional Clusters. Section  lists the public interfaces required by Firewall.

The goal is to provide a clear understanding of Functional Cluster boundaries and interaction, without specifying syntactical details. This ensures compatibility between documents specifying different Functional Clusters and supports parallel implementation of different Functional Clusters. Details of internal interfaces are up to the platform provider. Additional internal interfaces, parameters and return values can be added.

A detailed technical architecture documentation of the overall AUTOSAR Adaptive Platform is provided in .

### 11. Provided 接口
*原文标题：Provided Interfaces*

| Interface | Functional Cluster | Purpose |
|---|---|---|
| No provided interfaces | < | < |

### 12. Required 接口
*原文标题：Required Interfaces*

Figure  shows the interfaces required by Firewall from other Functional Clusters within the AUTOSAR Adaptive Platform.

| Functional Cluster | Interface | Purpose |
|---|---|---|
| Execution Management | ExecutionClient |  |
| Intrusion Detection System Manager | EventReporter | The Firewall uses this interface to report standardized security events. |

### 13. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

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
| Initialization of the Firewall |  |  |
| Method and Function names |  |  |
| Parameter names |  |  |
| Type names |  |  |
| Usage of ara::core types |  |  |
| AUTOSAR Adaptive Platform shall represent a rich and modern programming environment |  |  |
| usage of "noexcept" specifier |  |  |

### 14. 功能规范
*原文标题：Functional specification*

### 15. 架构概述
*原文标题：Architecture Overview*

The FC Firewall serves as a management cluster that abstracts the underlying firewall engine and configures it according to the firewall filter rules provided by the manifests. The actual filtering of the network traffic is carried out by the firewall engine, which can be realized in different ways on different levels, e.g. by inspecting traffic within the TCP/IP stack provided by the operating system, by leveraging hardware inspection capabilities and performing the inspection on hardware level or by inspecting different aspects on different layers and perform deep packet inspection at higher level closer to the application, for instance. The functional cluster firewall does not mandate a specific solution but lets the implementer choose the best solution for their use-case.

The general behaviour of a firewall can be described as follows: The FC Firewall manages a list of expected network packet patterns, where each pattern is associated with a respective action (e.g. allow or block the network packet). The combination of network packet pattern and action is called a FirewallRule.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 网络 packet inspection
*原文标题：Network packet inspection*

The FC Firewall manages a list of firewall rules, which consist of an expected network packet pattern and actions to be carried out in case of a pattern match. The firewall rules are modeled as FirewallRules in the AUTOSAR methodology. For every network packet that passes the network stack, the firewall compares the network packet with all configured expected patterns and carries out the action associated with the FirewallRule in case of a pattern match. The FirewallRules are ordered based on the Metamodel configuration and the firewall shall iterate through the FirewallRules in the configured order until the first pattern match.

  Upstream requirements:
⌈
The firewall shall inspect every network packet and compare it against the ordered list of expected patterns defined in FirewallRules. In case of a pattern match, the firewall stops with the comparison against the expected patterns and carries out the action associated with the matching rule.
⌋

The possible actions in case of a pattern match are described in Sec. .

The firewall supports different filtering mechanisms:

* Stateless filtering: Inspection of field values (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Stateless packet inspection

For stateless packet inspection, the firewall inspects the network protocol headers up to OSI layer 4 and compares them against expected values.

  Upstream requirements:
⌈
The firewall shall compare the expected values defined in DataLinkLayerRule of every FirewallRule against the header fields in the network packet. If all values match, the DataLinkLayerRule is considered a match. Otherwise the DataLinkLayerRule is considered a no-match
⌋

  Upstream requirements:
⌈
The firewall shall compare the expected values defined in NetworkLayerRule of every FirewallRule against the header fields in the network packet. If all values match, the NetworkLayerRule is considered a match. Otherwise the NetworkLayerRule is considered a no-match
⌋

  Upstream requirements:
⌈
The firewall shall compare the expected values defined in TransportLayerRule of every FirewallRule against the header fields in the network packet. If all values match, the TransportLayerRule is considered a match. Otherwise the TransportLayerRule is considered a no-match
⌋

The firewall shall only inspect the parameters that were configured within a FirewallRule.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Inspection of not modeled protocols

For stateless packet inspection, the FC Firewall natively supports the modeled protocols Ethernet, IPv4, IPv6, ICMP, TCP and UDP. Additional protocols can be added by two mechanisms:

EtherType inspection: Many protocols can already be identified on data link layer by means of the EtherType (as defined in IEEE 802.3 ). These protocols can therefore be blocked by the FC Firewall by configuring DataLinkLayerRule.etherType within a FirewallRule. Examples for protocols that can be identified based on EtherTypes can be found in Table .

| EtherType | Protocol |
|---|---|
| 0x0806 | Address Resolution protocol over IPv4 (ARP) |
| 0x22EA | Stream Reservation Protocol (SRP) |
| 0x22F0 | Audio Video Transport Protocol (AVTP) |
| 0x88E5 | MACsec |
| 0x88F7 | Precision Time Protocol (PTP) over IEEE 802.3 Ethernet |
| 0xF1C1 | Redundancy Tag (as defined in IEEE 802.1CB Frame Replication and Elimination for Reliability) |

Generic inspection based on byte pattern: The FC Firewall supports generic inspection of network packets based on expected byte-values at given offsets. This feature is specified in Sec.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. Stateful packet inspection

In stateful packet inspection, the FC Firewall takes into account the stateful nature of TCP and performs additional checks to identify timeouts, limit the number of open connections and perform checks against the TCP statemachine.

  Upstream requirements:
⌈
If the parameter TcpRule.timeoutCheck is set, the firewall shall store the time of the latest network packet for the respective communication peer. If the time between the latest and current network packet is smaller than the value of TcpRule.timeoutCheck, the TcpRule is considered a match.
⌋

  Upstream requirements:
⌈
If the parameter TcpRule.numberOfParallelTcpSessions is set, the firewall shall keep track of the number of open TCP connections. If a network packet wants to open a new TCP session and the number of open TCP sessions including the newly opened TCP session is smaller than TcpRule.numberOfParallelTcpSessions, the TcpRule is considered a match.
⌋

  Upstream requirements:
⌈
If the parameter TcpRule.stateManagementBasedOnTcpFlags is set to true, the firewall shall check whether the network packet wants to perform an allowed TCP state transition according to RFC 793.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Deep packet inspection

The firewall also supports inspection of application layer protocols to perform deep packet inspection of network packets. To this end, the firewall supports deep packet inspection of the following protocols:

* SOME/IP (including SOME/IP-SD)
* DDS
* DoIP
* Generic deep packet inspection

### 21. SOME/IP

For SOME/IP  the inspection focuses on the SOME/IP header fields. The header fields also include service-specific information like Service ID, Method ID etc., so the deep packet inspection of SOME/IP packets can be used to perform access control to individual services.

It is possible that multiple SOME/IP messages are transported within one TCP frame. Within the FC Firewall metamodel, every FirewallRule can aggregate at most one SOME/IP message. If a network packet contains more than one SOME/IP message, the FC Firewall has thus to check that for every SOME/IP message within the network packet a valid FirewallRule exists.

  Upstream requirements:
⌈
If the network packet to be inspected contains one or multiple SOME/IP messages, the FC Firewall shall find the subset of FirewallRules, where the respective DataLinkLayerRule, NetworkLayerRule and TransportLayerRule have provided a match and a SomeipProtocolRule is aggregated.
⌋

  Upstream requirements:
⌈
For this subset, the FC Firewall shall compare their expected values against the SOME/IP header fields of the SOME/IP messages in the network packet.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. DDS

Deep packet inspection of DDS messages is based on the DDS Interoperability Wire Protocol (DDS-RTPS ), which specifies the representation of DDS messages within network packets: DDS-RTPS defines a packet format that consists of a RTPS header and multiple RTPS submessages that can be accumulated within one RTPS message. Additionally, DDS allows also for multiple RTPS messages within one TCP or UDP packet. In analogy to SOME/IP, the FC Firewall allows only the configuration of a single RTPS header and submessage within a FirewallRule and the FC Firewall has hence to compare the network packet against all configured RTPS rules.

  Upstream requirements:
⌈
If the network packet to be inspected contains one or multiple DDSI-RTPS messages, the FC Firewall shall find the subset of FirewallRules, where the respective DataLinkLayerRule, NetworkLayerRule and TransportLayerRule have provided a match and a DdsRule is aggregated.
⌋

  Upstream requirements:
⌈
For this subset, the FC Firewall shall compare their expected values against the fields of the DDS-RTPS messages and submessages in the network packet.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. DoIP

The FC Firewall supports deep packet inspection of DoIP messages , where the firewall inspects the DoIP header as well as parts of the payload (DoIP source/destination address, UDS services). The FC Firewall does not, however, perform deep packet inspection of the UDS protocol, i.e., inspection on the level of individual DIDs, RIDs etc. Nevertheless, these kind of checks are still possible to implement by means of the generic inspection feature described in Sec. .

  Upstream requirements:
⌈
The firewall shall compare the expected values defined in DoIpRule of every FirewallRule against the DoIP header fields in the network packet. If all values match, the DoIpRule is considered a match. Otherwise the DoIpRule is considered a no-match
⌋

Similar to the stateless network packet inspection on lower layers, it is also possible to define ranges of allowed values by using minimal and maximal values. In case such a range is defined, all values from the network packet that fall within this range are a match

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Generic inspection

The FC Firewall allows for generic inspection of the network packets (e.g. to perform payload inspection or to inspect protocols that are not natively supported by the firewall). To this end, every FirewallRule can aggregate multiple PayloadBytePatternRules, which specify the expected byte values at a specific offset within the network packet.

  Upstream requirements:
⌈
The firewall shall compare the expected values defined in the PayloadBytePatternRules of every FirewallRule against the values at the specified offsets in the network packet. If all values match, the PayloadBytePatternRules are considered matches.
⌋

### 25. 网络 packet 过滤
*原文标题：Network packet filtering*

After describing the rule-based network packet inspection process based on pattern-matching in chapter , this chapter specifies the associated filtering mechanisms supported by the FC Firewall. Section  describes the pattern-matching-based filtering approach using Allowlists and Blocklists, section  specifies the rate limiting feature of the FC Firewall and section  outlines the state-dependent filtering mechanism based on configurable Firewall States.

### 26. Allowlists and Blocklists

Firewalls can generally be categorized into two groups: Allowlist and Blocklist firewalls. In an Allowlist firewall, all network traffic that is allowed to pass the firewall is specified (i.e. patterns are defined), all network packets without a matching pattern are blocked. Blocklist firewalls implement the inverse approach: Only explicitly defined network packets are blocked, whereas traffic without a matching pattern is allowed to pass the firewall.

The action to be carried out in the case of a match of a FirewallRule is defined by the parameter FirewallRuleProps.action in the referenced FirewallRuleProps.

  Upstream requirements:
⌈
If a FirewallRule is a match and FirewallRuleProps.action in the referenced FirewallRuleProps is set to allow, the firewall shall allow the network packet to continue its flow within the network stack
⌋

  Upstream requirements:
⌈
If a FirewallRule is a match and FirewallRuleProps.action in the referenced FirewallRuleProps is set to block, the firewall shall drop the network packet
⌋

In addition, it has to be defined how the Firewall shall behave in the case that no FirewallRule generated a match:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Rate limiting

The firewall supports rate limiting based on the pattern matching algorithm to identify off-frequency cyclic messages, that can be caused by, e.g., a man-in-the-middle attack or a faulty ECU. To realize this, the FC Firewall implements the leaky bucket algorithm, which is also supported on HW side by some products.

  Upstream requirements:
⌈
If the parameters FirewallRule.bucketSize and FirewallRule.refillAmount are configured for a FirewallRule, the FC Firewall shall keep track of the number of pattern matches by means of a leaky bucket algorithm, where FirewallRule.refillAmount defines the decrement rate of the leaky bucket algorithm and the counter is increased by one for every pattern match
⌋

  Upstream requirements:
⌈
In the case of a pattern match and if the leaky bucket counter is bigger than FirewallRule.bucketSize, the firewall shall drop the network packet.
⌋

### 28. 状态 dependent 过滤
*原文标题：State dependent filtering*

The in-vehicle traffic can strongly depend on the vehicle's situation (e.g. driving, parking, in a diagnostic session etc.), which also renders the expected network packets to be different depending on the current vehicle state. The FC Firewall supports this use-case by being state-dependent: FirewallRules can be associated with specific Firewall States, that are pre-configured on a project-specific basis by the integrator and that can be managed by a user application. Within the AUTOSAR Meta Model, this feature is realized by StateDependentFirewalls that aggregate a set of FirewallRules. Only one of the StateDependentFirewalls can be active, which means that only the FirewallRules associated with that StateDependentFirewall are active

  Upstream requirements:
⌈
The FC Firewall shall ensure that only one StateDependentFirewall is active
⌋

  Upstream requirements:
⌈
Only the FirewallRules referenced by the currently active StateDependentFirewall shall be taken into account for the network packet inspection. FirewallRules that are not referenced by the currently active StateDependentFirewall shall be ignored
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Firewall Rule 管理
*原文标题：Firewall Rule Management*

After their initial deployment, the FirewallRules need to be managed to address certain changes within the lifetime of the vehicle, e.g. newly deployed applications that should be added to the Allowlist or changes in the threat landscape that would require specific network packets to be blocked. While the first example can be thoroughly planned and rolled out over a longer time, the latter one might be more pressing, e.g. if an attacker is currently attacking the vehicle, a newly added block rule could help mitigating the attack. The FC Firewall supports two ways of managing FirewallRules: By performing an OTA update or by (de-)activating FirewallRules during runtime (not supported in this release).

The FC Firewall configuration including the FirewallRules are deployed to the AUTOSAR Adaptive Platform by means of the respective manifests. Hence, in order to add new rules, change existing ones or remove them completely, the firewall configuration can be updated by means of an OTA update using UCM. This is the preferred way of adding new rules that account for newly deployed applications, for instance, that require a new allow rule.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 功能性 cluster life-cycle
*原文标题：Functional cluster life-cycle*

Using ara::core::Initialize and ara::core::Deinitialize, the application can initialize and deinitialize the FC Firewall.

Applications are expected not to call any API of the FC Firewall before ara::core::Initialize or after ara::core::Deinitialize.

### 31. 启动
*原文标题：Startup*

Upstream requirements:
⌈
When ara::core::Initialize is called, the FC Firewall shall read in the manifest information and prepare the access structures necessary to communicate with applications.
⌋

Access structures may encompass the communication channel between the application process and the stack process (if there is any) or other resource required by the firewall.

### 32. 关机
*原文标题：Shutdown*

Upstream requirements:
⌈
When ara::core::Deinitialize is called, the FC Firewall shall close all acquired handles and free all access structures.
⌋

### 33. Daemon crash

No content.

### 34. Reporting

### 35. 安全事件
*原文标题：Security Events*

Firewalls are a crucial part of Intrusion Detection Systems (IDS), as they are monitoring the complete network traffic and are thus able to identify attacks within the in-vehicle network. AUTOSAR specifies the vehicle part of an IDS within the IdsM (IDS Manager), which aggregates and qualifies security events raised by IDS sensors and forwards them to the configured sink, either the persistent memory or the vehicle-central IDS instance (IdsR in the AUTOSAR IDS concept).

The FC Firewall supports the IDS by acting as an IDS sensor and raising security events (SEvs) to the IdsM. To this end, the FC Firewall specifies a set of SEvs (see Sec. ) as well as conditions on when to raise them (see Sec. ).

### 36. SEvs raised by the firewall

The IdsM specifies SEvs to consist of a unique SEv ID and associated context data, that provides more details about the nature of the incident. The IdsM qualifies these SEvs by running them through a filter chain. During this process, the IdsM can also aggregate multiple SEvs with the same SEv IDs, where only the context data of one SEv is kept. This behaviour can cause information loss and needs to be reflected when designing the SEvs raised by the FC Firewall - the SEvs need to be fine-grained enough to limit information loss as much as possible while still being precise and clear in their specification. To this end, the FC Firewall specifies a set of SEvs that is focusing on the individual protocols that are inspected by the firewall:

 Security events for firewall (AP)
  Upstream requirements:
⌈
| Name | Description | ID |
|---|---|---|
| SEV_FW_PACKET_BLOCKED_IPV4_MISMATCH | A network packet was blocked due to a rule mismatch on IPv4 layer. | 51 |
| SEV_FW_PACKET_BLOCKED_IPV6_MISMATCH | A network packet was blocked due to a rule mismatch on IPv6 layer. | 52 |
| SEV_FW_PACKET_BLOCKED_ICMP_MISMATCH | A network packet was blocked due to a rule mismatch within the ICMP protocol. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Raising SEvs

With regards to the general pattern matching process, the FC Firewall can raise SEvs in two cases: Either the network packet does not match any FirewallRule and the default action is performed or the network packet matches a defined FirewallRule and the respective action is performed. In this release, SEvs are only raised in the first case, i.e. if no FirewallRule matches. The second case will be added in a later release. In the no-match case, SEvs make only sense when the firewall is configured to block unspecified network packets as default action.

In this case, the FC Firewall has to identify on which network protocol the violation occurred to raise the corresponding SEv. To this end, the FC Firewall has to identify the rule that fits the no-matched network packet best by calculating the least distance as follows:

  Upstream requirements:
⌈
If a network packet is blocked by the default action, the FC Firewall shall identify the network protocol that was not matching the FirewallRules.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Log Messages

Currently the FC Firewall does not produce Log Messages.

### 39. Violation Messages

Currently the FC Firewall has not defined any Violation Messages.

### 40. Production 错误
*原文标题：Production Errors*

Currently the FC Firewall does not have defined Production Errors.

### 41. API 规范
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

### 42. PortInterface to API class binding

This table shows the API class binding for each PortInterface owned by this functional cluster and those functions taking an ara::core::InstanceSpecifier argument, designated to "construct" that class. These constructing functions may be any combination of special-member constructors, named constructor members or non-member factory constructors.

| Port Interface | API Class / Function |
|---|---|
| FirewallStateSwitchInterface | Definition of API class ara::fw::FirewallStateSwitchInterface |
| ^ | Definition of API function ara::fw::FirewallStateSwitchInterface::FirewallStateSwitchInterface |

### 其余 42 章（内容从略，见纯文本全文）

43. API Header Files
44. API Common 数据类型
45. API Reference
46. FirewallStateSwitchInterface
47. FirewallErrorDomain
48. ara：：fw：：FwErrc
49. ara：：fw：：GetFwErrorDomain
50. ara：：fw：：MakeErrorCode overload for ara：：fw：：GetFwErrorDomain
51. ara：：fw：：FwException
52. ara：：fw：：FwErrorDomain
53. 服务接口
54. 配置
55. Default Values
56. Semantic Constraints
57. 附录
58. Mentioned 清单 Elements
59. Demands and constraints on Base 软件 (normative)
60. Platform Extension 接口 (normative)
61. Not implemented 需求
62. Change history of AUTOSAR traceable items
63. Traceable item history of this document according to AUTOSAR Release R25-11
64. Added 规范 Items in R25-11
65. Changed 规范 Items in R25-11
66. Deleted 规范 Items in R25-11
67. Added Constraints in R25-11
68. Changed Constraints in R25-11
69. Deleted Constraints in R25-11
70. Traceable item history of this document according to AUTOSAR Release R24-11
71. Added 规范 Items in R24-11
72. Changed 规范 Items in R24-11
73. Deleted 规范 Items in R24-11
74. Added Constraints in R24-11
75. Changed Constraints in R24-11
76. Deleted Constraints in R24-11
77. Traceable item history of this document according to AUTOSAR Release R23-11
78. Added 规范 Items in R23-11
79. Changed 规范 Items in R23-11
80. Deleted 规范 Items in R23-11
81. Traceable item history of this document according to AUTOSAR Release R22-11
82. Added 规范 Items in R22-11
83. Changed 规范 Items in R22-11
84. Deleted 规范 Items in R22-11
