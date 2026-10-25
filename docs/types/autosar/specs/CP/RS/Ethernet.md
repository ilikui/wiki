# Requirements on Ethernet Support in AUTOSAR (`Ethernet`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 419 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_Ethernet_419\AUTOSAR_CP_RS_Ethernet.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_Ethernet_419\AUTOSAR_CP_RS_Ethernet.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_Ethernet_419\zzgen\CP_RS_Ethernet.complete.txt`

## 文档简介

This document is intended to list the general requirements for the implementation of an AUTOSAR Ethernet communication stack by considering the following software specifications:

* 414 UDP Network Management (UdpNm)
* 415 Ethernet State Manager (EthSM)
* 416 Socket Adaptor (SoAd)
* 417 Ethernet Interface (EthIf)
* 418 Diagnostics over IP (DoIP)
* 430 Ethernert Driver (Eth)
* 431 Ethernet Transciever Driver (EthTrcv)
* 616 Service Discovery (Sd)
* 617 Tcp/Ip Stack (TcpIp)
* 656 Ethernet Switch Driver (EthSwt)
* 798 Wireless Ethernet Driver (WEth)

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document is intended to list the general requirements for the implementation of an AUTOSAR Ethernet communication stack by considering the following software specifications:

* 414 UDP Network Management (UdpNm)
* 415 Ethernet State Manager (EthSM)
* 416 Socket Adaptor (SoAd)
* 417 Ethernet Interface (EthIf)
* 418 Diagnostics over IP (DoIP)
* 430 Ethernert Driver (Eth)
* 431 Ethernet Transciever Driver (EthTrcv)
* 616 Service Discovery (Sd)
* 617 Tcp/Ip Stack (TcpIp)
* 656 Ethernet Switch Driver (EthSwt)
* 798 Wireless Ethernet Driver (WEth)

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to SRS Ethernet that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| COTS | Commercial Of The Shelf |
| DAD | Duplicate Address Detection |
| DHCPv4 | Dynamic Host Configuration Protocol for Internet Protocol Version 4 |
| DHCPv6 | Dynamic Host Configuration Protocol for Internet Protocol Version 6 |
| IANA | Internet Assigned Numbers Authority |
| ICMPv4 | Internet Control Message Protocol for Internet Protocol Version 4 |
| ICMPv6 | Internet Control Message Protocol for Internet Protocol Version 6 |
| IETF | Internet Engineering Task Force |
| IPv4 | Internet Protocol for Version 4 |
| IPv6 | Internet Protocol for Version 6 |
| NDP | Neighbor Discovery Protocol |
| SoAd | AUTOSAR Socket Adaptor Module |
| TCP/IP | A family of communication protocols used in computer networks |
| UdpNm | AUTOSAR UDP Network Management Module |

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the Requirements on Ethernet Support in AUTOSAR.

### 5. 功能概述
*原文标题：Functional Overview*

### 6. TCP/IP 协议 Stack (TCPIP)
*原文标题：TCP/IP Protocol Stack (TCPIP)*

The TCP/IP protocol stack (TCP/IP stack) is intended to handle layers 2 through 4 of the ISO/OSI layer model. This includes, but is not limited to protocols like IPv4, IPv6, DHCPv4, DHCPv6, ARP, NDP, TCP, UDP, ICMPv4, ICMPv6, TLS and others.

In Terms of this model the SoAd and therefore the whole AUTOSAR COM stack above represent the application at layer 7.

### 7. SWS Socket Adaptor (SoAd)

The SoAd is an adaptor layer, not only matching the AUTOSAR APIs to standard socket APIs , but also mapping PDU IDs to socket connections.

### 8. SWS 诊断 over IP (DoIP)
*原文标题：SWS Diagnostics over IP (DoIP)*

The DoIP part of the SoAd implements the functionality required by .

### 9. SWS Ethernet 接口 (EthIf)
*原文标题：SWS Ethernet Interface (EthIf)*

The Ethernet Interface provides standardized interfaces to provide the communication with the Ethernet bus system of an ECU. The APIs are independent from the specific Ethernet Controllers and Transceivers and their access through the responsible Driver layer. The Ethernet Interface is conceptually able to access one or more Ethernet Drivers and Ethernet Transceiver Drivers via one uniform interface.

### 10. SWS Ethernet 驱动 (Eth)
*原文标题：SWS Ethernet Driver (Eth)*

The Ethernet Driver offers uniform interfaces for the Ethernet Interface. The Ethernet Driver hides hardware specific details of the used Ethernet controller.

### 11. SWS Ethernet 收发器驱动 (EthTrcv)
*原文标题：SWS Ethernet Transceiver Driver (EthTrcv)*

The Ethernet Transceiver Driver offers uniform interfaces for the Ethernet Interface. The Ethernet Transceiver Driver hides hardware specific details of the used Ethernet transceiver.

### 12. SWS Ethernet 驱动 (WEth)
*原文标题：SWS Ethernet Driver (WEth)*

The Wireless Ethernet Driver offers uniform interfaces for the Ethernet Interface. The Wireless Ethernet Driver hides hardware specific details of the used Ethernet controller for wireless communication.

### 13. SWS Ethernet Switch 驱动 (EthSwt)
*原文标题：SWS Ethernet Switch Driver (EthSwt)*

Ethernet is a switched network and switches need to be integrated into AUTOSAR-ECUs. These ECUs need to have the capability to configure Ethernet switches.

Ethernet Switch Driver provides an interface for managing and controlling a switch and its ports.

### 14. SWS Ethernet 状态管理器 (EthSM)
*原文标题：SWS Ethernet State Manager (EthSM)*

The Ethernet State Manager offers uniform interfaces for the Communication Manager (ComM). The Ethernet State Manager hides network specific details.

### 15. SWS UDP 网络管理 (UdpNm)
*原文标题：SWS UDP Network Management (UdpNm)*

The UDP Network Management offers uniform interfaces for the Network Management Interface (NmIf). The UDP Network Management hides network specific details.

### 16. SWS 服务 Discovery (Sd)
*原文标题：SWS Service Discovery (Sd)*

Service Discovery serves primarily to determine the operational status of a service. A service may be comprised of any combination of SW-Cs and/or BSWs in an ECU. The BswM is used to aggregate the SW-Cs and BSWs status and trigger Sd when the required combination is available. Secondly Sd can also be used as a registration protocol for publish/subscribe communication patterns. In both cases Sd can transport addressing information in addition to the registration and availability information.

### 17. 通用需求
*原文标题：General Requirements*

### 18. 配置
*原文标题：Configuration*

SWS shall specify configuration
⌈
| Description: | The SWS documents shall include a configuration section to allow adaption of the functionality. |
|---|---|
| Rationale: | The functionality needs to be adapted to different use-cases and environments. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 19. Operation

Robustness aganist the change of logical addresses
⌈
| Description: | The Ethernet-related BSW modules of the AUTOSAR communication stack shall be able to handle the change of logical addresses of remote nodes. |
|---|---|
| Rationale: | ECUs can by configured for dynamic address assignment (e.g. DHCP) hence it is possible that ECUs change their addresses |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | DoIP, V2G, SD |
| Supporting Material: | - |

⌋

 Robustness against unexpected communication patterns
⌈
| Description: | The Ethernet-related BSW modules shall provide configuration options to restrict the processing of frames or PDUs that don't fulfill certain expected properties. |
|---|---|
| Rationale: | This allows to define data policies and to drop all unexpected traffic, thereby reducing the processing overhead. This also limits the impact of faulty communication and the vulnerability to malicious attacks. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Robustness |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. AUTOSAR 接口
*原文标题：AUTOSAR Interfaces*

SoAd shall support UDP NM
⌈
| Description: | The SoAd shall offer an interface API for UDP NM to send network management messages. This interface shall mimic the API of interfaces in Autosar. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 SoAd shall support XCP
⌈
| Description: | The SoAd module shall offer a data path to the AUTOSAR XCP module. |
|---|---|
| Rationale: | Exchange XCP frames between master and client |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Calibration and Measurement |
| Supporting Material: | ASAM XCP |

⌋

 SoAd shall support generic upper layers
⌈
| Description: | The SoAd shall offer an interface API for a generic upper layer to send and receive PDUs via socket connections, to control socket connections and to provide notification of socket connection and IP address assignment state changes. |
|---|---|
| Rationale: | Simplifies adding of additional upper layers |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | DoIP, V2G, DNS-SD |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 功能性需求
*原文标题：Functional Requirements*

### 22. SWS TCP/IP 协议 Stack
*原文标题：SWS TCP/IP Protocol Stack*

### 23. TCP/IP 通用需求
*原文标题：TCP/IP General Requirements*

TCPIP minimum functionality
⌈
| Description: | If DoIP is not implemented, the minimum requirements on the functionality of the TCP/IP stack shall be determined by the configuration of the Socket Adaptor. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 TCP and UDP related requirement specified in IETF RFC 1122 shall be implemented
⌈
| Description: | TCP and UDP related requirements specified in IETF RFC 1122 shall be implement in the TCP/IP stack |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | IETF RFC 768, IETF RFC 793 |
| Supporting Material: | IETF RFC 1122 |

⌋

 The TCPIP shall support access to measurement counter values
⌈
| Description: | The TCPIP shall provide an optional API to access measurement counter values, like for example the number of dropped datagrams |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Interface for diagnostics |
| Supporting Material: | - |

⌋

 The TcpIp module shall support PDU based communication
  Status: DRAFT
⌈
| Description: | * The TcpIp module shall support PDU based communication with its lower layer. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. TCP/IP Internet 协议
*原文标题：TCP/IP Internet Protocol*

TCPIP automatic IP address assignment
⌈
| Description: | The TCP/IP stack shall implement a mechanism to automatically configure an IP addresses. |
|---|---|
| Rationale: | This is necessary when no static IP-addresses are assigned to still allow for plug and play configuration of the TCP/IP stack. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | IEEE 802.1AS |

⌋

 TCPIP shall allow to categorize outbound IP traffic
⌈
| Description: | The TCP/IP stack shall implement a mechanism to assign labels and/or service classes to the outbound traffic. |
|---|---|
| Rationale: | This allows network components like routers to differentiate the traffic based on this information and treat it appropriately. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Improved traffic forwarding algorithms, monitoring |
| Supporting Material: | IETF RFC 2474;  IETF RFC 6437 |

⌋

### 25. TCP/IP Sub 模块：IPv4
*原文标题：TCP/IP Sub Module: IPv4*

IPv4 shall be implemented according to IETF RFC 791
⌈
| Description: | The Internet Protocol (IPv4) shall at least be implemented in the TCP/IP stack as stated in IETF RFC 791 |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | IETF RFC 791 |

⌋

 ARP shall be implemented according to IETF RFC 826
⌈
| Description: | For DoIP the Address Resolution Protocol (ARP) shall at least be implemented in the TCP/IP stack as stated in IETF RFC 826 |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | - |
| Supporting Material: | IETF RFC 826 |

⌋

 The dynamic configuration of IPv4 link-local addresses as specified in IETF RFC 3927 shall be implemented
⌈
| Description: | For DoIP the dynamic configuration of IPv4 link-local addresses as specified in IETF RFC 3927 shall be implemented in the TCP/IP stack |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | IETF RFC 3927 |

⌋

### 26. TCP/IP Sub 模块：IPv6
*原文标题：TCP/IP Sub Module: IPv6*

IPv6 shall be implemented according to IETF RFC 2460
⌈
| Description: | Internet Protocol Version 6 (IPv6) shall at least be implemented in the TCP/IP stack as stated in IETF RFC 2460. |
|---|---|

Limitation: the Authentication and Encapsulating Security Payload extension headers and other IPsec functionalities may not be supported. The handling of IPsec headers shall be tolerated

Limitation: The TcpIp shall limit the IETF RFC 2460 to support only the reception of IPv6 fragment header and forbid the transmission. IETF RFC 2460 section 5. Packet Size Issue discourage the use of IP Fragmentation and therefore it can be covered by IETF RFC 1981 Path MTU Discovery for IP version 6.

Extension: The Deprecation of Type 0 Routing Headers in IPv6 shall be implemented as stated in IETF RFC 5095
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In-vehicle communication and diagnostics |
| Supporting Material: | IETF RFC 2460;  IETF RFC 5095;  IETF RFC 1981 |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. TCP/IP ICMP

An API shall be available to generate any ICMP message
⌈
| Description: | An API Shall be available to generate any ICMP message |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 A call-back function shall be configurable for any received ICMP message type
⌈
| Description: | A call-back function shall be configurable for any received ICMP message type |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

### 28. TCP/IP Sub 模块：ICMPv4
*原文标题：TCP/IP Sub Module: ICMPv4*

ICMPv4 shall be implemented according to IETF RFC 792
⌈
| Description: | For the Internet Control Message Protocol (ICMP) shall at least be implemented in the TCP/IP stack as stated in IETF RFC 792 |
|---|---|

Rationale:
Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | In-vehicle communication and diagnostics |
| Supporting Material: | IETF RFC 792 |

⌋

### 29. TCP/IP Sub 模块：ICMPv6
*原文标题：TCP/IP Sub Module: ICMPv6*

ICMPv6 shall be implemented according to IETF RFC 4443
⌈
| Description: | Internet Control Message Protocol (ICMPv6) for IPv6 shall at least be implemented in the TCP/IP stack as stated in IETF RFC 4443 |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In-vehicle communication and diagnostics |
| Supporting Material: | IETF RFC 4443 |

⌋

### 30. TCP/IP TCP

TCP shall be implemented according to IETF RFC 793
⌈
| Description: | The Transmission Control Protocol (TCP) shall at least be implemented in the TCP/IP stack as stated in IETF RFC 793 |
|---|---|

Rationale:
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In-vehicle communication and diagnostics |
| Supporting Material: | IETF RFC 793 |

⌋

 Congestion Control strategies shall be implemented according to IETF RFC 5681
⌈
| Description: | The Congestion control strategies shall at least be implemented in the TCP/IP stack as stated in IETF RFC 5681. |
|---|---|

Limitation: The strategies Slow-Start, Congestion Avoidance, Fast Retransmit and Fast Recovery shall be implemented.
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In-vehicle communication and diagnostics |
| Supporting Material: | IETF RFC 5681 |

⌋

 The NewReno Modification shall be implemented according to IETF RFC 6582
⌈
| Description: | The NewReno Modification to TCP's Fast Recovery Algorithm shall at least be implemented in the TCP/IP stack as stated in IETF RFC 6582. |
|---|---|

Limitation: The modification shall only be used if the Fast Recovery strategy of IETF RFC 5681 is enabled.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. TCP/IP TLS

TCP sockets shall be assigned to TLS connections
⌈
| Description: | It shall be configurable if a TCP socket uses TLS. The configuration also implies if the connection for this socket is for a TLS server or client. |
|---|---|
| Rationale: | Dedicated sockets shall use TLS. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | A tester that communicates over a specific port number shall be forced to use TLS. |
| Supporting Material: | - |

⌋

 Configuration of ciphersuites for TLS connections
⌈
| Description: | To limit the amount of crypto jobs that are necessary for TLS, AUTOSAR shall support the pre-configuration of a sub-set of ciphersuites. |
|---|---|
| Rationale: | Only those ciphersuites shall be offered for or by a dedicated TLS connection that are needed. This reduces the required resources within the ECU. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | The TLS server and client offer a number of ciphersuites so that the server depicts one for best practice. |
| Supporting Material: | - |

⌋

 The number of TLS connections that can be opened in parallel shall be configurable
⌈
| Description: | An ECU may support more than one secure port for TLS communication. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. TCP/IP UDP

UDP shall be implemented according to IETF RFC 768
⌈
| Description: | The User Datagram Protocol (UDP) shall at least be implemented in the TCP/IP stack as stated in IETF RFC 768 |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | IETF RFC 768 |

⌋

### 33. TCP/IP DHCP

An API shall be available to fill DHCP options field
⌈
| Description: | An API shall be available to fill any DHCPv4 and DHCPv6 options field |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 An API shall be available to read any received DHCP options field
⌈
| Description: | An API shall be available to read any received DHCPv4 and DHCPv6 options field |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 DHCP Server
⌈
| Description: | IP-addresses can be assigned depending on the port a DHCP request has been received. |
|---|---|
| Rationale: | DHCP server functionality is a standard feature in IP-networks and shall be supported. In automotive networks a modification is necessary that allows to assign defined IP addresses on a port basis. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | ECU without a predefined IP address can get an IP address assigned via DHCP. |
| Supporting Material: | - |

⌋

### 34. TCP/IP Sub-Module：DHCPv4
*原文标题：TCP/IP Sub-Module: DHCPv4*

DHCPv4 shall be implemented according to IETF RFC 2131
⌈
| Description: | The Dynamic Host Configuration Protocol (DHCP) shall at least be implemented in the TCP/IP stack as stated in IETF RFC 2131 |
|---|---|
| Rationale: | - |

Applies To:
Dependencies:
| Use Case: | - |
|---|---|
| Supporting Material: | IETF RFC 2131 |

⌋

 The DHCPv4 host name option shall be implemented according to IETF RFC 2132
⌈
| Description: | The DHCPv4 host name option shall at least be implemented in the TCP/IP stack as stated in IETF RFC 2132 |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | ; SRS_Eth_00020 |
|---|---|
| Use Case: | - |
| Supporting Material: | IETF RFC 2132 |

⌋

 The Fully Qualified Domain Name (FQDN) Option for DHCPv4 shall be implemented according to IETF RFC 4702
⌈
| Description: | The Fully Qualified Domain Name Option for Dynamic Host Configuration Protocol for IPv4 shall at least be implemented in the TCP/IP stack as stated in IETF RFC 4702 (The Dynamic Host Configuration Protocol for IPv4 (DHCPv4) Client Fully Qualified Domain Name (FQDN) Option). |
|---|---|
| Rationale: | - |

Applies To:
Dependencies:
| Use Case: | - |
|---|---|
| Supporting Material: | IETF RFC 4702 |

⌋

### 35. TCP/IP Sub-Module：DHCPv6
*原文标题：TCP/IP Sub-Module: DHCPv6*

The IPv6 stack shall implement DHCPv6 as a DHCPv6 client according to IETF RFC 3315
⌈
| Description: | The Dynamic Host Configuration Protocol for IPv6 (DHCPv6) shall at least be implemented in the TCP/IP stack as stated in IETF RFC 3315 as a DHCPv6 client. |
|---|---|

Limitation: The following sections shall not be implemented according to the "only Client" Use Case:

* Relay Agent Behavior
* Server Behavior
* Section 12. Management of Temporary Addresses
* Section 21. Authentication of DHCP Messages
* Section 22.5. Identity Association for Temporary Addresses Option
* Section 22.11. Authentication Option
* Section 22.14. Rapid Commit Option
| Rationale: | - |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In-vehicle communication and diagnostics |
| Supporting Material: | IETF RFC 3315 |

⌋

 The Client Fully Qualified Domain Name (FQDN) Option for IPv6 shall be implemented according to IETF RFC 4704
⌈
| Description: | The Dynamic Host Configuration Protocol for IPv6 (DHCPv6) Client Fully Qualified Domain Name (FQDN) Option shall at least be implemented in the TCP/IP stack as stated in IETF RFC 4704. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. TCP/IP IPsec

The Security Architecture for the Internet Protocol shall be implemented according to IETF RFC 4301
⌈
| Description: | The Security Architecture for the Internet Protocol shall be implemented in the TCP/IP stack as stated in IETF RFC 4301. |
|---|---|

Limitation: Any sections related to tunnel mode, may or may not be implemented, e.g. section 5.1.2, 7.1, 7.2
| Rationale: | Ethernet is mostly used to connect to other AUTOSAR bus nodes. They use these protocols; therefore, they need to be available inside AUTOSAR |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IETF RFC 4301 |

⌋

 The IP Authentication Header (AH) shall be implemented according to IETF RFC 4302
⌈
| Description: | The IP Authentication Header (AH) shall be implemented in the TCP/IP stack as stated in IETF RFC 4302. |
|---|---|

Limitation: Section 3.1.2, related to tunnel mode, may or may not be implemented
| Rationale: | Ethernet is mostly used to connect to other AUTOSAR bus nodes. They use these protocols; therefore, they need to be available inside AUTOSAR |
|---|---|

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | In-vehicle secure communication |
| Supporting Material: | IETF RFC 4302 |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. SWS Socket Adaptor (SoAd)

The SoAd shall support a local multi-homed host
⌈
| Description: | The SoAd shall support a local multi-homed host. |
|---|---|
| Rationale: | An ECU might be connected to multiple IP networks for different use-cases |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The IP addresses as well as the method of acquisition shall be a configurable item.
⌈
| Description: | The IP addresses as well as the method of acquisition shall be a configurable item. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 The initialization the SoAd shall be able to establish all TCP connections
⌈
| Description: | The initialization the SoAd shall be able to establish all TCP connections as described in the configuration. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Both UDP or TCP shall be usable
⌈
| Description: | Both UDP or TCP shall be usable. |
|---|---|
| Rationale: | - |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | - |
| Supporting Material: | - |

⌋

 Upon Shutdown the Socket Adaptor shall close all open TCP connections
⌈
| Description: | Upon Shutdown the Socket Adaptor shall close all open TCP connections. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. SWS Ethernet 接口 (EthIf)
*原文标题：SWS Ethernet Interface (EthIf)*

The Ethernet Interface shall be pre-compile time configurable for interrupt or polling.
⌈
| Description: | The Ethernet Interface shall provide configuration for interrupt and polling mode. In interrupt mode received frames shall be reported from the driver. In polling mode the main function shall check for received frames. |
|---|---|
| Rationale: | Interface and interaction |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | For low latency interrupt mode is crucial. On systems with high system load the polling mode reduces the system load |
| Supporting Material: | - |

⌋

 The Ethernet Interface shall provide hardware configuration and initialization.
⌈
| Description: | The Ethernet Interface shall provide hardware independent configuration and initialization interface. |
|---|---|
| Rationale: | Hardware abstraction |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Exchanging the used Ethernet controller and transceiver shall be transparent and only be reflected by replacing the used driver. |
| Supporting Material: | - |

⌋

 The Ethernet Interface shall provide indication for link state change.
⌈
| Description: | The Ethernet Interface shall provide indication for link state change of connected transceivers. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. SWS Ethernet 驱动 (Eth)
*原文标题：SWS Ethernet Driver (Eth)*

The Ethernet Driver shall be pre-compile time configurable for interrupt or polling.
⌈
| Description: | The Ethernet Driver shall provide configuration for interrupt and polling mode. In interrupt mode received frames shall be reported from the driver. |
|---|---|

Rationale:
Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | For low latency interrupt mode is crucial. On systems with high system load the polling mode reduces the system load |
| Supporting Material: | - |

⌋

 The Ethernet Driver shall provide hardware configuration and initialization.
⌈
| Description: | The Ethernet Driver shall provide hardware independent configuration and initialization interface. |
|---|---|
| Rationale: | Hardware abstraction |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Exchanging the used Ethernet controller shall be transparent and only be reflected by replacing the used driver. |
| Supporting Material: | - |

⌋

 The Ethernet Driver shall support to receive MAC broadcast frames
⌈
| Description: | The Ethernet driver shall support the configuration of the Ethernet controller to receive MAC broadcast frames. |
|---|---|
| Rationale: | Reception of frames by all nodes |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | ARP Request |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. SWS Wireless Ethernet 驱动 (WEth)
*原文标题：SWS Wireless Ethernet Driver (WEth)*

Wireless Ethernet Driver hardware supported data transfer
  Status: DRAFT
⌈
| Description: | The Wireless Ethernet Drivers shall support hardware supported data transfer. |
|---|---|
| Rationale: | This could relax the CPU load if data with a large size needs to be transferred from the upper layer to the egress buffer |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Exchange of data with large size via a wireless communication of a Vehicle-2-X communication scenario |
| Supporting Material: | - |

⌋

 Wireless Ethernet Driver transmission requests with direct data provision
  Status: DRAFT
⌈
| Description: | The Wireless Ethernet Driver shall support transmission requests with direct data provision. Additional Information: The upper layer initiates the transmission and directly provides all required data pointers and data length information within the transmission request. |
|---|---|
| Rationale: | Efficient way to provide data information and a transmission request in a single call |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Exchange of data with large size via a wireless communication of a Vehicle-2-X communication scenario |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. SWS Ethernet 收发器驱动 (EthTrcv)
*原文标题：SWS Ethernet Transceiver Driver (EthTrcv)*

The Ethernet Transceiver Driver shall provide hardware configuration and initialization.
⌈
| Description: | The Ethernet Transceiver Driver shall provide hardware independent configuration and initialization interface. |
|---|---|
| Rationale: | Hardware abstraction |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Exchanging the used Ethernet transceiver shall be transparent and only be reflected by replacing the used driver. |
| Supporting Material: | - |

⌋

 The Ethernet Transceiver Driver shall provide access to the link state.
⌈
| Description: | The Ethernet Transceiver Driver shall provide access to the link state of connected transceivers. |
|---|---|
| Rationale: | Interface and interaction |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Disconnection of the cable results in invalid IP address. Thus a valid IP assignment cycle has to be started. |
| Supporting Material: | - |

⌋

 The Ethernet Transceiver Driver shall provide access to standardized hardware features
⌈
| Description: | The Ethernet Transceiver Driver shall provide access to standardized hardware features such as signal quality measurement and physical layer test modes. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 32 章（内容从略，见纯文本全文）

42. SWS Ethernet Switch 驱动 (EthSwt)
43. SWS Ethernet 状态管理器 (EthSM)
44. SWS UDP 网络管理 (UdpNm)
45. SWS 服务 Discovery (Sd)
46. Non-Functional 需求 (Qualities)
47. SWS TCP/IP 协议 Stack
48. SWS Socket Adaptor (SoAd)
49. SWS Ethernet 接口 (EthIf)
50. SWS Ethernet 驱动 (Eth)
51. SWS Wireless Ethernet 驱动 (WEth)
52. SWS Ethernet 收发器驱动 (EthTrcv)
53. SWS Ethernet 状态管理器 (EthSM)
54. SWS UDP 网络管理 (UdpNm)
55. References
56. 附录
57. Change history of AUTOSAR traceable items
58. Traceable item history of this document according to AUTOSAR Release R25-11
59. Added 需求 in R25-11
60. Changed 需求 in R25-11
61. Deleted 需求 in R25-11
62. Traceable item history of this document according to AUTOSAR Release R24-11
63. Added 需求 in R24-11
64. Changed 需求 in R24-11
65. Deleted 需求 in R24-11
66. Traceable item history of this document according to AUTOSAR Release R23-11
67. Added 需求 in R23-11
68. Changed 需求 in R23-11
69. Deleted 需求 in R23-11
70. Traceable item history of this document according to AUTOSAR Release R22-11
71. Added 需求 in R22-11
72. Changed 需求 in R22-11
73. Deleted 需求 in R22-11
