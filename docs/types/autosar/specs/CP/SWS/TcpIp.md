# Specification of TCP/IP Stack (`TcpIp`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 617 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_TcpIp_617\AUTOSAR_CP_SWS_TcpIp.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_TcpIp_617\AUTOSAR_CP_SWS_TcpIp.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_TcpIp_617\zzgen\CP_SWS_TcpIp.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module TCP/IP.

The AUTOSAR TCP/IP module offers functionality to send and receive Internet Protocol data. The TCP/IP Stack (TcpIp) is located between the Socket Adaptor (SoAd) and Linklayer SDU Routing Module (LSduR). The TcpIp module exchange L-SDUs via the LSduR with the Ethernet Interface (EthIf) module.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module TCP/IP.

The AUTOSAR TCP/IP module offers functionality to send and receive Internet Protocol data. The TCP/IP Stack (TcpIp) is located between the Socket Adaptor (SoAd) and Linklayer SDU Routing Module (LSduR). The TcpIp module exchange L-SDUs via the LSduR with the Ethernet Interface (EthIf) module.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Tcp/Ip module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| DAD | Duplicate Address Detection |
| DHCPv4 | Dynamic Host Configuration Protocol for Internet Protocol Version 4 |
| DHCPv6 | Dynamic Host Configuration Protocol for Internet Protocol Version 6 |
| EthIf | Ethernet Interface |
| EthSM | Ethernet State Manager |
| HSM | Hardware Security Module |
| IANA | Internet Assigned Numbers Authority |
| ICMPv4 | Internet Control Message Protocol for Internet Protocol Version 4 |
| ICMPv6 | Internet Control Message Protocol for Internet Protocol Version 6 |
| IETF | Internet Engineering Task Force |
| IND | Inverse Neighbor Discovery |
| IPsec | Internet Protocol Security |
| IPv4 | Internet Protocol version 4 |
| IPv6 | Internet Protocol version 6 |
| NDP | Neighbor Discovery Protocol |
| PKI | Public Key Infrastructure |
| PRF | Pseudo Random Function |
| RNG | Random Number Generator |
| SACK | Selective Acknowledgment |
| SNI | Server Name Identification |
| SoAd | Socket Adaptor |
| TCP/IP | A family of communication protocols used in computer networks |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a Specification of Layered Software Architecture , which is also valid for TcpIp.

AUTOSAR provides a Specification of Basis Software Mode Manager .

AUTOSAR provides a Specification of Linklayer SDU Routing Module (LSduR) .

AUTOSAR provides a Specification of Socket Adaptor .

AUTOSAR provides a General Specification for Basic Software modules .

AUTOSAR provides a Specification of Ethernet .

AUTOSAR provides a Specification of ECU Configuration , which is also valid for TcpIp.

AUTOSAR provides a Specification of Crypto Service Manager .

AUTOSAR provides a Specification of Key Manager .

AUTOSAR provides a Specification of IPsecProtocol .

IETF RFC 3927 .

IETF RFC 1122 .

IETF RFC 826 .

IETF RFC 894 .

IETF RFC 791 .

IETF RFC 815 .

IETF RFC 4632 .

IETF RFC 1112 .

IETF RFC 792 .

IETF RFC 2131 .

IETF RFC 768 .

IETF RFC 793 .

IETF RFC 5681 .

IETF RFC 8200 .

IETF RFC 4291 .

IETF RFC 2464 .

IETF RFC 6724 .

IETF RFC 5722 .

IETF RFC 5095 .

IETF RFC 4862 .

IETF RFC 4429 .

IETF RFC 4443 .

IETF RFC 4861 .

IETF RFC 3315 .

IETF RFC 4702 .

IETF RFC 4704 .

IETF RFC 6582 .

IETF RFC 2132 .

IETF RFC 5942 .

IETF RFC 6437 .

IETF RFC 2474 .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

This document does not cover the assignment of UDP or TCP port numbers. There is no reserved space within the IANA assigned number range. Each implementer is responsible for managing the used port numbers.

This document does not cover the management of IP addresses. This might be done dynamically, e.g. by using DHCP, or statically. It is the implementer's responsibility to prevent address conflicts and achieve compliance with IANA address assignments.

This specification does not prescribe a certain physical layer or data rate. Although a CDD interface is specified, allowing additional upper layer modules, a fan-out of one socket to multiple upper layer modules is not intended to be supported.

The AUTOSAR TLS implementation has the following limitations:

* A TLS implementation shall not support data compression or decompression.
* Session renegotiation shall not be supported.
* No support for secure connection over UDP (e.g. for DTLS)
* No support of FQDN
* No client Hello padding extension IETF RFC7685
* No session hash and extended master secret IETF RFC 7627
* No support for TLS versions lower than 1.2.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. LSduR

The Linklayer SDU Router is the lower layer module of the Tcp/Ip module regarding the data path (e.g. transmission/reception of PDUs). Supported MetaDataItemTypes are provided/consumed by EthIf.

### 11. EthIf

The Ethernet Interface is the lower layer module of the Tcp/Ip module regarding the control path (e.g. setting the local physical address of an Ethernet controller via the EthIf (`EthIf_SetPhysAddr`)), and ultimately via LSduR also for the data path.

### 12. EthSM

The Ethernet State Manager controls the communication mode of the Tcp/Ip module by requesting communication modes from the Tcp/Ip module. Tcp/Ip notifies the EthSM about communication mode changes.

### 13. Socket Adaptor

The Socket Adaptor is the upper layer module of the Tcp/Ip module.

### 14. KeyM

The Key Manager module provides operations for certificate handling for the TLS and IPsec sub module.

### 15. CSM

The crypto service manager allows to perform crypto job and key operations used by the TLS and IPsec sub module.

### 16. 文件结构
*原文标题：File structure*

### 17. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 18. Version check

For details refer to .

### 19. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Internet Key Exchange (IKEv2) Protocol shall be supported according to IETF RFC 7296 |  |  |
| IKEv2 shall support periodic reauthentication and rekeying |  |  |
| IKEv2 shall support a seamless handover of exchanged keys |  |  |
| IKEv2 shall support dead peer detection |  |  |
| IKEv2 shall support authentication based on X.509v3 certificates with digital signatures |  |  |
| All algorithms which are classified as "MUST" in IETF RFC 8247 shall be supported by IKEv2 |  |  |
| IPsec's Security Policy Database (SPD) shall be configurable for IPs, IP ranges, protocols, ports and port ranges |  |  |
| IPsec's Security Policy Database (SPD) default behavior shall be BYPASS |  |  |
| IPsec's Peer Authorization Database (PAD) shall be configurable for use with X.509v3 |  |  |
| It shall be possible to define the priority order of the algorithms used by IKEv2 during the IKE_INIT negotiations |  |  |
| Basic SW security events |  |  |
| All AUTOSAR Basi |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 功能规范
*原文标题：Functional specification*

Figure  provides an architecture overview of the AUTOSAR TCP/IP stack. The TCP/IP stack consists of the sub modules within the red box. Furthermore the interaction with other AUTOSAR modules (beside Dem and Det) is shown.

⌈
The TCP/IP stack shall consist of sub modules implementing specific functionalities defined in the subchapters below.
⌋

### 21. 系统 Scalability
*原文标题：System Scalability*

### 22. Background & Rationale

The TcpIp module supports a variety of different use case, not all of them are required by each user. In order to achieve a scalable TcpIp Stack the protocols shall be grouped according to the following scalability classes:

* Scalability Class 1:

  IPv4 - In-Vehicle and Diagnostic Communication
* Scalability Class 2:

  IPv6 - In-Vehicle and Diagnostic Communication
* Scalability Class 3:

  IPv4 and IPv6 (Dual Stack) - In-Vehicle and Diagnostic Communication

The following protocols shall be available in the respective Scalability Class:

| Feature | Scalability Class 1 | Scalability Class 2 | Scalability Class 3 |
|---|---|---|---|
| IPv4 | X |  | X |
| ARP | X |  | X |
| ICMPv4 | X |  | X |
| DHCPv4 | X |  | X |
| Auto-IP | X |  | X |
| UDP | X | X | X |
| TCP | X | X | X |
| IPv6 |  | X | X |
| NDP |  | X | X |
| ICMPv6 |  | X | X |
| DHCPv6 |  | X | X |

In addition to the scalability classes, the following Feature Groups allow a more fine-grained selection of optional features to address the specific needs of certain ECUs.

### 23. IPv4-Global Communication Feature Group：
*原文标题：IPv4-Global Communication Feature Group:*

The following features are available for Scalability Classes 1 and 3.

* None

### 24. IPv6-Global Communication Feature Group：
*原文标题：IPv6-Global Communication Feature Group:*

The following features are available for Scalability Classes 2 and 3.

* IPv6 Anycasts Addresses
* NDP Redirect Messages

### 25. Special Features Group：
*原文标题：Special Features Group:*

The following features are available for Scalability Classes 1, 2 and 3.

* DHCP Server

### 26. Security Features Group：
*原文标题：Security Features Group:*

The following features are available for Scalability Classes 1, 2 and 3.

* TLS
* IPsec

### 27. 需求
*原文标题：Requirements*

⌈
The TcpIp module for IPv4 - In-Vehicle and Diagnostic Communication (Scalability class 1) shall support the features listed in Figure 3: TcpIp Scalability Classes, column Scalability Class 1.
⌋

⌈
The TcpIp module for IPv6 - In-Vehicle and Diagnostic Communication (Scalability class 2) shall support the features listed in Figure 3: TcpIp Scalability Classes, column Scalability Class 2.
⌋

⌈
The TcpIp module for IPv4 and IPv6 (Dual Stack) - In-Vehicle and Diagnostic Communication (Scalability class 3) shall support the features listed in Figure 3: TcpIp Scalability Classes, column Scalability Class 3.
⌋

### 28. Internet 协议 Version 4
*原文标题：Internet Protocol Version 4*

### 29. Internet 协议 (IPv4)
*原文标题：Internet Protocol (IPv4)*

The Internet Protocol (IP) is the main protocol of the TCP/IP stack and is responsible for delivering datagrams from a source host identified by the source address to one or multiple destination hosts identified by the destination address. IP hides the underlying physical network interface, is an unreliable, best-effort, and connectionless packet delivery protocol.

⌈
The TcpIp shall implement the Internet Protocol as defined in IETF RFC 791 (Internet Protocol of version 4).
⌋

⌈
The TcpIp shall encapsulate IP packets in Ethernet frames according to IETF RFC 894.
⌋

⌈
The TcpIp shall support the identification of the network an IP address belongs to, by using a network mask (prefix) in addition to the IP address according to IETF RFC 4632, section 3.1.
⌋

⌈
The TcpIp shall fulfill the Internet Protocol related requirements specified by IETF RFC 1122, section 3.2.1.1 (Version number), 3.2.1.2 (Checksum), 3.2.1.3 (Addressing), 3.2.1.7 (TTL), and 3.3.2 (Reassembly).
⌋

⌈
The TcpIp shall be able to transmit IP datagrams to a group of hosts identified by a single IP destination address (multicast address) according to IETF RFC 1112, section 4, 6.2, and 6.4.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Address Resolution 协议 (ARP)
*原文标题：Address Resolution Protocol (ARP)*

⌈
The TcpIp shall implement the Address Resolution Protocol (ARP) as defined in IETF RFC 826.
⌋

⌈
The TcpIp shall limit the number of ARP table (address resolution cache) entries to the number specified by the configuration parameter TcpIpArpTableSizeMax.
⌋

⌈
The TcpIp shall remove entries of the ARP table if they are not used for the timeout specified by the configuration parameter TcpIpArpTableEntryTimeout. If TcpIpArpTableEntryTimeout is set to INF, the TcpIp module shall never remove entries from the ARP table.
⌋

⌈
If TcpIpArpDefensiveProcessing is set to FALSE, the TcpIp shall use the information from each received IP packet to update the ARP table in addition to received ARP packets.
⌋

⌈
The TcpIp shall call `Up_PhysAddrTableChg`() directly after each ARP table change:

* If TcpIp adds a new entry or updates an existing one, the parameter valid shall be set to TRUE and the parameters IpAddrPtr and PhysAddrPtr shall be set according to the new or updated entry.
* In case TcpIp removes an entry, valid shall be set to FALSE and the parameters IpAddrPtr and PhysAddrPtr shall be set according to the removed entry.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Dynamic 配置 of IPv4 Link-Local Addresses (Auto-IP)
*原文标题：Dynamic Configuration of IPv4 Link-Local Addresses (Auto-IP)*

⌈
The TcpIp shall support the dynamic configuration of IPv4 Link Local addresses as defined in IETF RFC 3927 (Dynamic Configuration of IPv4 Link-Local Addresses).
⌋

### 32. Internet 控制 Message 协议 (ICMPv4)
*原文标题：Internet Control Message Protocol (ICMPv4)*

⌈
The TcpIp shall support the transmission and reception of Internet Control Message Protocol (ICMPv4) messages as defined in IETF RFC 792 (Internet Control Message Protocol in version 4).
⌋

  Upstream requirements:
⌈
The TcpIp shall only reply to ICMPv4 Echo Request Messages if they are valid and TcpIpIcmpEchoReplyEnabled is set to TRUE.
⌋

  Upstream requirements:
⌈
If a TcpIpIcmpMsgHandler is configured, the TcpIp shall call the respective `Up_IcmpMsgHandler`() if an ICMPv4 message is received and not handled by the TcpIp directly.
⌋

Note: For example, if the TcpIp replies to an ICMP echo request `Up_IcmpMsgHandler`() is not called for this message.

### 33. Internet 协议 Version 6
*原文标题：Internet Protocol Version 6*

⌈
TcpIp shall process a received Inverse Neighbor Discovery (IND) Solicitation message and respond with an Advertisement message, as described in IETF RFC 3122. The neighbor cache shall be updated with the values provided in the Solicitation message.
⌋

⌈
TLS shall be able to process X.509 v3 certificates and X.509 v2 certificate revocation list (CRL) profiles, as described in IETF RFC 5280.
⌋

⌈
If TcpIpTcpWindowScaleOptionEnabled is set to TRUE, the TCP window scale option (WSopt) and mechanism shall be supported according to IETF RFC 7323, chapter 2. The value given by TcpIpTcpWindowScale shall be the value transmitted in SYN message and the limiting factor when replying with SYN-ACK message.
⌋

⌈
The TcpIp shall support the frame format for transmission of IPv6 packets and the method of forming IPv6 link-local addresses and statelessly autoconfigured addresses on Ethernet networks as defined in IETF RFC 2464 (Transmission of IPv6 Packets over Ethernet Networks).
⌋

⌈
The TcpIp shall support the source address selection algorithm as defined in IETF RFC 6724 (Default Address Selection for Internet Protocol Version 6 (IPv6)).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Internet 协议 (IPv6)
*原文标题：Internet Protocol (IPv6)*

⌈
The TcpIp shall support the basic IPv6 header and the initially defined IPv6 extension headers and options as defined in IETF RFC 8200 (Internet Protocol, Version 6 (IPv6) Specification).
⌋

⌈
The TcpIp shall support the reception and reassembly of fragmented IPv6 frames according to IETF RFC 8200 Section 4.5 Fragment Header.
⌋

⌈
The TcpIp shall support the section 4, first paragraph of the IETF RFC 5722 (Handling of Overlapping IPv6 Fragments). The IETF RFC 5722 demonstrates the security issues associated with allowing overlapping fragments and updates the IPv6 specification to explicitly forbid overlapping fragments (transmission and reception).
⌋

⌈
The TcpIp shall fragment oversized IPv6 frames before transmission according to IETF RFC 8200 Section 4.5 Fragment Header.
⌋

  Upstream requirements:
⌈
The TcpIp shall support the section 2, IPv6 Addressing of IETF RFC 4291 (IP Version 6 Addressing Architecture) excluding Section 2.6. Anycast Addresses. Section 2.8 A Node's Required Addresses shall be limited to the node requirements for host only.
⌋

  Upstream requirements:
⌈
The TcpIp shall support the Section 2.6.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Internet 控制 Message 协议 (ICMPv6)
*原文标题：Internet Control Message Protocol (ICMPv6)*

⌈
The TcpIp shall support the Internet Control Message Protocol Version 6 as defined in IETF RFC 4443 (Internet Control Message Protocol (ICMPv6) for the Internet Protocol Version 6 (IPv6) Specification).
⌋

  Upstream requirements:
⌈
The TcpIp shall only reply to ICMPv6 Echo Request Messages if they are valid and TcpIpIcmpV6EchoReplyEnabled is set to TRUE.
⌋

  Upstream requirements:
⌈
If a TcpIpIcmpV6MsgHandler is configured, the TcpIp shall call the respective `Up_IcmpMsgHandler`() if an ICMPv6 message is received and not handled by the TcpIp directly.
⌋

Note: For example, if the TcpIp replies to an ICMPv6 echo request `Up_IcmpMsgHandler`() is not called for this message.

### 36. Neighbor Discovery 协议 (NDP)
*原文标题：Neighbor Discovery Protocol (NDP)*

Upstream requirements:
⌈
The TcpIp shall support the Neighbor Discovery protocol for IP Version 6 as defined in IETF RFC 4861 (Neighbor Discovery for IP version 6 (IPv6)) except the sections 4.5 Redirect Message Format, 6.2. Router Specification, 7.2.8. Proxy Neighbor Advertisements and 8. Redirect Function.
⌋

  Upstream requirements:
⌈
The TcpIp shall support the handling of redirect messages as defined in IETF RFC 4861 (Neighbor Discovery for IP version 6 (IPv6)) Section 8.3. Host Specification.
⌋

  Upstream requirements:
⌈
If TcpIpNdpDefensiveProcessing is set to TRUE, the NDP shall silently discard all received Neighbor Advertisements that have not been requested by a previously transmitted Neighbor Solicitation.
⌋

  Upstream requirements:
⌈
If TcpIpNdpDefensiveProcessing is set to TRUE, the NDP shall skip the update of the Neighbor Cache upon processing received Neighbor Solicitations.
⌋

  Upstream requirements:
⌈
The TcpIp shall limit the number of neighbor cache entries to the number specified by the configuration parameter TcpIpNdpMaxNeighborCacheSize ()
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Internet 协议 Security (IPsec)
*原文标题：Internet Protocol Security (IPsec)*

Upstream requirements: , , ,
⌈
TcpIp shall support IPsec according to AUTOSAR foundation `RS_IPsecProtocol` .
⌋

  Upstream requirements: ,
⌈
IKEv2 shall be implemented according to IETF RFC 7296 and  with the limitations defined in . IKEv1 shall not be supported.
⌋

Note: To ensure that IKEv2 is interoperable with the IETF IPsec standards in general and resolve any ambiguities, the open source IPsec implementation strongSwan (strongswan.org) is used as reference.

  Upstream requirements: , ,
⌈
The general IKEv2 connection configuration, e.g. connection lifetime and re-keying / re-authentication timeouts, dead peer detection, may be configured via the settings in the container "IKEConnections".
⌋

  Upstream requirements: ,
⌈
The IKEv2 certificates used for for authentication with other IKEv2 nodes may be configured via the settings in the container "IKECertificates" and "IKECertificate".
⌋

  Upstream requirements: ,
⌈
The security policy database, which defines which connections shall be protected by IPsec and by which protections, may be configured via the settings in the container "TcpIpSpdEntry" and "TcpIpIpSecPriority".

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. IP Based Protocols

### 39. Local Address Table

⌈
The TcpIp shall maintain a table of local IP addresses, which can be assigned to an EthIf controller during runtime according to the configuration container TcpIpLocalAddr (including its subcontainers).
⌋

Note: Each entry of the local IP address table is uniquely identified by the configuration parameter TcpIpAddrId.

⌈
In case no TcpIpStaticIpAddressConfig is provided, the TcpIp shall enable to specify a multicast IP address during runtime via `TcpIp_RequestIpAddrAssignment`().
⌋

⌈
The Local IP address used for a socket is specified via `TcpIp_Bind`().
⌋

  Upstream requirements:
⌈
If a TcpIpAddrAssignment configured with `TCPIP_STORE` is started, TcpIp shall check the NvMBlock (see ) for a valid IP address. If a valid address is present, TcpIp shall assign this address as if it was a static address. If no valid address is present, TcpIp shall start the respective IP address assignment method related to the TcpIpAddrAssignment. Once the procedure is complete, TcpIp shall store the new address in the NvMBlock.
⌋

### 40. User Datagram 协议 (UDP)
*原文标题：User Datagram Protocol (UDP)*

⌈
The TcpIp shall implement the User Datagram Protocol (UDP) as defined in IETF RFC 768 (User Datagram Protocol).
⌋

⌈
The TcpIp shall fulfill the UDP related requirements specified by IETF RFC 1122, section 4.1.3.1 (Ports), 4.1.3.4 (UDP Checksums), and 4.1.3.6 (Invalid Addresses).
⌋

### 41. Transmission 控制协议 (TCP)
*原文标题：Transmission Control Protocol (TCP)*

⌈
If TcpIpTcpSackEnabled is set to TRUE, the Selective Acknowledgement (SACK) mechanism shall be supported according to IETF RFC 2018. If enabled, the SACK option shall be sent in the TCP handshake
⌋

⌈
The TcpIp shall implement the Transmission Control Protocol (TCP) as defined in IETF RFC 793 (Transmission Control Protocol)
⌋

⌈
The TcpIp shall fulfill the TCP related requirements specified by IETF RFC 1122, section 4.2.2.3 (Window Size), 4.2.2.5 (TCP Options), 4.2.2.6 (MSS), 4.2.2.7 (Checksum), 4.2.2.9 (Initial sequence number selection), 4.2.2.10 (Simultaneous Open Attempts), 4.2.2.11 (Recovery from Old Duplicate SYN), 4.2.2.13 (Closing a Connection, excluding "half-duplex close"), 4.2.2.16 (Managing the Window), 4.2.2.17 (Probing Zero Windows), 4.2.2.18 (Passive OPEN Calls), 4.2.2.19 (TTL), 4.2.3.2 (delayed ACK), 4.2.3.6 (TCP Keep Alive), and 4.2.3.10 (Remote Address Validation).
⌋

⌈
The TcpIp shall support the Window and Acknowledgment Strategies in TCP as defined in IETF RFC 1122:

* 4.2.3.2 When to Send an ACK Segment
* 4.2.3.3 When to Send a Window Update
* 4.2.3.4 When to Send Data.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. 传输 Layer Security (TLS)
*原文标题：Transport Layer Security (TLS)*

⌈
TcpIp shall be able to process the BasicOCSPResponse according to IETF RFC 6960, section 4.2.1, sent by a TLS server in the CertificateStatus handshake message.
⌋

⌈
If the parameter TcpIpTlsRootCertUpdateCalloutFunction is enabled, the callout function, provided in it's value and defined in the header file given by TcpIpTlsRootCertUpdateCalloutHeaderFile, shall be called once a new, valid, root certificate is received during TLS handshake.
⌋

⌈
If TcpIpTlsUseExtensionMaxFragmentLength is set to TRUE then the max_fragment_length extension shall be used to negotiate the max. fragment length between TLS server and client according to IETF RFC 6066, chapter 4. If TcpIpTlsUseExtensionRecordSizeLimit is set to TRUE, this extension must not be sent and must be ignored on reception.
⌋

⌈
If TcpIpTlsUseExtensionTrustedCAKeys is set to TRUE then the TLS client shall transmit the elements of TcpIpTlsTrustedCAList in its ClientHello message using the trusted_ca_keys extension according to IETF RFC 6066, chapter 6. Each element of TcpIpTlsTrustedCAList represents a KeyM root certificate and is referenced by TcpIpTlsTrustedCAListEntry.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. 示例 #1：
*原文标题：Example #1:*

A ciphersuite that references RSA provides TcpIpTlsCsmKeyExchangeEncryptJobRef for the TLS client to encrypt the pre-master secret. First, the TLS client verifies the received certificate, will take the public key and copy it into the CSM key location referenced by TcpIpTlsCsmKeyExchangeEncryptKeyRef. Then encrypts the pre-master secret and send it to the TLS server. The Server uses TcpIpTlsCsmKeyExchangeDecryptJobRef to decrypt the pre-master secret. The job either references statically the private key or, if TcpIpTlsConnection/ TcpIpTlsCipherKeyMLocalCertificate/ KeyMCertPrivateKeyStorageCryptoKeyRef/ KeyMCryptoKeyCsmKeyTargetRef is available, copy this key into TcpIpTlsCsmKeyExchangeDecryptKeyRef.

### 44. 示例 #2：
*原文标题：Example #2:*

A ciphersuite references `ECDHE_ECDSA` and the used certificate contains appropriate ECC keys, ECDSA capable in this case. The server generates DH-parameter using the crypto job `Csm_KeyExchangeCalcPubVal`() using the reference to TcpIpTlsCsmKeyExchangeKeyRef and signs the result using TcpIpTlsHandshake/ TcpIpTlsCsmKeyExchangeSignatureGenerateKeyRef holding a reference to the certificate private key. If the key is not statically assigned to the job it must be copied accordingly (see Example #1). The resulting data is sent to the TLS client, who verifies the certificate and uses the key of the certificate to verify the provided ECDSA signature from the server using TcpIpTlsHandshake/ TcpIpTlsCsmKeyExchangeSignatureVerifyKeyRef. Afterwards, if successful, calculates its own DH parameter and provides this to the server. Both, TLS client and server will then calculate the pre-master secret using `Csm_KeyExchangeCalcSecret`().

### 45. 示例 #3：
*原文标题：Example #3:*

The selected ciphersuite defines a pre-shared key according to IETF RFC 4279. The server provides the psk_identity_hint in the ServerKeyExchange message. This can either be derived from the TcpIpTlsPskIdentity/ TcpIpTlsPresharedKeyIdentityHint or, if not specified, it can be queried from the user callback TcpIpTlsPskGetKeyIdentityHintFunc. The TLS client uses the hint to select a pre-shared key that is known by both the TLS Client and this TLS Server. If one key can uniquely be identified with the identity hint, then the TcpIpTlsPskIdentity configuration can be used as an alternative to the callback functions. In this case, the selected key can be determined by TcpIpTlsPresharedKeyIdentityHint and the TcpIpTlsPresharedKeyIdentity with TcpIpTlsPresharedKeyCsmKeyRef can be used further. A more flexible solution provides the usage of the callback TcpIpTlsPskGetClientKeyIdentityFunc that allows the selection of a key with its identity at runtime. After the key and its identity has been selected on the client side, the psk_identity will be provided back to the TLS server through the ClientKeyExchange message.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. Dynamic Host 配置协议
*原文标题：Dynamic Host Configuration Protocol*

Upstream requirements:
⌈
The server part of the Dynamic Host Configuration Protocol shall be pre compile time configurable ON/OFF by the configuration parameter TcpIpDhcpServerEnabled (see )
⌋

  Upstream requirements:
⌈
The server part of the Dynamic Host Configuration Protocol shall respond to client requests by assigning an available IP address according to the DHCP server configuration for the related TcpIpCtrl.
⌋

  Upstream requirements:
⌈
If the configuration contains TcpIpDhcpAddressAssignment that refer to specific ports of an Ethernet Switch, DHCP server shall identify the port the request was received from, by calling `EthIf_GetPortMacAddr`() with the MAC address of the DHCP client and choose an available IP address of the TcpIpDhcpAddressAssignment related to the same port.
⌋

### 47. Dynamic Host 配置协议 (DHCPv4)
*原文标题：Dynamic Host Configuration Protocol (DHCPv4)*

Upstream requirements: ,
⌈
The TcpIp shall implement the client and the server part of the Dynamic Host Configuration Protocol (DHCPv4) for the dynamic configuration of IPv4 addresses as defined in IETF RFC 2131 (Dynamic Host Configuration Protocol).
⌋

⌈
The TcpIp shall support the Fully Qualified Domain Name Option for Dynamic Host Configuration Protocol for IPv4 Client requirements as defined in IETF RFC 4702 (The Dynamic Host Configuration Protocol for IPv4 (DHCPv4) Client Fully Qualified Domain Name (FQDN) Option). No DNS shall be supported. Only section 2 The Client FQDN Option and section 3 DHCP Client Behavior shall be supported. Sub-Section 3.2, 3.3, 3.5 shall not be supported.
⌋

### 48. Dynamic Host 配置协议 (DHCPv6)
*原文标题：Dynamic Host Configuration Protocol (DHCPv6)*

⌈
The TcpIp shall support the client part of the Dynamic Host Configuration Protocol for IPv6 (DHCPv6) which enables DHCP servers to pass configuration parameters such as IPv6 network addresses to IPv6 nodes as defined in IETF RFC 3315 (Dynamic Host Configuration Protocol for IPv6 (DHCPv6)).Due to the fact that only the client functionality shall be supported, the following sections shall not be supported:

* Relay Agent Behavior
* Server Behavior
* Section 12. Management of Temporary Addresses
* Section 21. Authentication of DHCP Messages
* Section 22.5. Identity Association for Temporary Addresses Option
* Section 22.11. Authentication Option
* Section 22.14. Rapid Commit Option
⌋

⌈
The TcpIp shall support the Fully Qualified Domain Name Option for Dynamic Host Configuration Protocol for IPv6 Client requirements as defined in IETF RFC 4704 (The Dynamic Host Configuration Protocol for IPv6 (DHCPv6) Client Fully Qualified Domain Name (FQDN) Option). No DNS shall be supported. Only section 4 DHCPv6 Client FQDN Option and section 5 DHCPv6 Client Behavior shall be supported. Sub-Section 5.1, 5.2, 5.4 shall not be supported.
⌋

### 其余 182 章（内容从略，见纯文本全文）

49. Message Reception
50. Message Transmission
51. 状态处理
52. 状态处理 of PDUs
53. TCP/IP Stack 状态处理
54. 错误分类
55. Development 错误
56. Runtime 错误
57. Production 错误
58. Extended Production 错误
59. 版本检查
60. 安全事件
61. API 规范
62. Imported 类型
63. 类型定义
64. Symbol 定义
65. 功能定义
66. 通用
67. TcpIp_Init
68. TcpIp_GetVersionInfo
69. 核 Communication 控制
70. TcpIp_Close
71. TcpIp_Bind
72. TcpIp_TcpConnect
73. TcpIp_TcpListen
74. TcpIp_TcpReceived
75. TcpIp_RequestComMode
76. Extended Communication 控制 and Information
77. TcpIp_RequestIpAddrAssignment
78. TcpIp_ReleaseIpAddrAssignment
79. TcpIp_ResetIpAssignment
80. TcpIp_IcmpTransmit
81. TcpIp_IcmpV6Transmit
82. TcpIp_DhcpReadOption
83. TcpIp_DhcpV6ReadOption
84. TcpIp_DhcpWriteOption
85. TcpIp_DhcpV6WriteOption
86. TcpIp_ChangeParameter
87. TcpIp_GetIpAddr
88. TcpIp_GetPhysAddr
89. TcpIp_GetRemotePhysAddr
90. TcpIp_GetCtrlIdx
91. TcpIp_GetArpCacheEntries
92. TcpIp_GetNdpCacheEntries
93. TcpIp_GetAndResetMeasurementData
94. TcpIp_IsConnectionReady
95. Transmission
96. TcpIp_UdpTransmit
97. TcpIp_TcpTransmit
98. Callback 通知
99. TcpIp_RxIndication
100. TcpIp_TriggerTransmit
101. TcpIp_TxConfirmation
102. Scheduled functions
103. Terms and 定义
104. TcpIp_MainFunction
105. Expected 接口
106. Mandatory 接口
107. Optional 接口
108. Configurable 接口
109. TcpIp_<Up>GetSocket
110. <Up_PhysAddrTableChg>
111. SocketOwner functions
112. <Up_RxIndication>
113. <Up_TcpIpEvent>
114. <Up_TxConfirmation>
115. <Up_TcpAccepted>
116. <Up_TcpConnected>
117. <Up_CopyTxData>
118. <Up_LocalIpAddrAssignmentChg>
119. <Up_IcmpMsgHandler>
120. <Up_DADAddressConflict>
121. <Up_TlsGetCurrentTime>
122. <Up_TlsServerGetPskIdentityHint>
123. <Up_TlsClientGetPskIdentity >
124. <Up_TlsServerGetPskIdentity>
125. 服务接口
126. 时序图
127. TCP Connection Setup - Client
128. TCP Connection Setup - Server
129. Reception
130. Transmission TCP
131. Transmission UDP
132. Connection setup for a TLS server
133. TLS connection assignment to socket
134. 配置规范
135. How to read this chapter
136. Containers and 配置 parameters
137. TcpIp
138. TcpIpGeneral
139. TcpIpIpV4General
140. TcpIpIpV6General
141. TcpIpSecurityEventRefs
142. TcpIpConfig
143. TcpIpCtrl
144. TcpIpCtrlRxPdu
145. TcpIpCtrlTxPdu
146. TcpIpIpVXCtrl
147. TcpIpIpV4Ctrl
148. TcpIpIpV6Ctrl
149. TcpIpDhcpServerConfig
150. TcpIpDhcpAddressAssignment
151. TcpIpDuplicateAddressDetectionConfig
152. TcpIpIpConfig
153. TcpIpIpV4Config
154. TcpIpArpConfig
155. TcpIpAutoIpConfig
156. TcpIpDhcpConfig
157. TcpIpIcmpConfig
158. TcpIpIcmpMsgHandler
159. TcpIpIpFragmentationConfig
160. TcpIpIpV6Config
161. TcpIpDhcpV6Config
162. TcpIpIcmpV6Config
163. TcpIpIcmpV6MsgHandler
164. TcpIpIpV6ConfigExtHeaderFilter
165. TcpIpIpV6FragmentationConfig
166. TcpIpNdpConfig
167. TcpIpNdpArNudConfig
168. TcpIpNdpPrefixRouterDiscoveryConfig
169. TcpIpNdpPrefixList
170. TcpIpNdpPrefixListEntry
171. TcpIpNdpSlaacConfig
172. TcpIpLocalAddr
173. TcpIpAddrAssignment
174. TcpIpStaticIpAddressConfig
175. TcpIpNvmBlock
176. TcpIpPhysAddrConfig
177. TcpIpPhysAddrChgHandler
178. TcpIpSocketOwnerConfig
179. TcpIpSocketOwner
180. TcpIpTcpConfig
181. TcpIpTcpConfigOptionFilter
182. TcpIpUdpConfig
183. TcpIpTlsConfig
184. TcpIpTlsConnectionGroup
185. TcpIpTlsConnection
186. TcpIpTlsCiphersuites
187. TcpIpTlsCiphersuiteDefinition
188. TcpIpTlsCiphersuiteWorker
189. TcpIpTlsHandshake
190. TcpIpTlsCertificateIdentity
191. TcpIpTlsPskIdentity
192. TcpIpIpSecConfigSet
193. TcpIpEncryptionAlgorithm
194. TcpIpEncryptionTransformJobPair
195. TcpIpIntegrityAlgorithm
196. TcpIpIntegrityTransformJobPair
197. TcpIpSpdEntry
198. IKE
199. IKEGeneral
200. IKEMessageFormat
201. IKEConnections
202. IKEConnection
203. IKESession
204. IKEChildSaProposal
205. IKEIkeSaProposal
206. IKESignatureAuthenticationVariant
207. IKETransforms
208. IKEDhTransform
209. IKEEncrTransform
210. IKEIntegTransform
211. IKEPrfTransform
212. IKECertificates
213. IKECertificate
214. 发布信息
215. 附录
216. Change history of AUTOSAR traceable items
217. Traceable item history of this document according to AUTOSAR Release R25-11
218. Added 规范 Items in R25-11
219. Changed 规范 Items in R25-11
220. Deleted 规范 Items in R25-11
221. Added Constraints in R25-11
222. Changed Constraints in R25-11
223. Deleted Constraints in R25-11
224. Traceable item history of this document according to AUTOSAR Release R24-11
225. Added 规范 Items in R24-11
226. Changed 规范 Items in R24-11
227. Deleted 规范 Items in R24-11
228. Added Constraints in R24-11
229. Changed Constraints in R24-11
230. Deleted Constraints in R24-11
