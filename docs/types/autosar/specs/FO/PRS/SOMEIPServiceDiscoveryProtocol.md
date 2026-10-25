# SOME/IP Service Discovery Protocol Specification (`SOMEIPServiceDiscoveryProtocol`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | PRS — 协议规范（Protocol Specification） |
| UID | 802 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_SOMEIPServiceDiscoveryProtocol_802\AUTOSAR_FO_PRS_SOMEIPServiceDiscoveryProtocol.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_SOMEIPServiceDiscoveryProtocol_802\AUTOSAR_FO_PRS_SOMEIPServiceDiscoveryProtocol.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_SOMEIPServiceDiscoveryProtocol_802\zzgen\FO_PRS_SOMEIPServiceDiscoveryProtocol.complete.txt`

## 文档简介

This protocol specification specifies the format, message sequences, and semantics of the Protocol SOME/IP Service Discovery (SOME/IP-SD).

The main tasks of the Service Discovery Protocol are communicating the availability of functional entities called service instances in the in-vehicle communication as well as controlling the send behavior of event messages. This allows sending only event messages to receivers requiring them (Publish/Subscribe). The solution described here is also known as SOME/IP-SD (Scalable service-Oriented MiddlewarE over IP - Service Discovery).

## 模块依赖

SOME/IP-SD depends on SOME/IP. SOME/IP itself supports both TCP and UDP communications but SOME/IP-SD uses only UDP (See ).

## 章节详细内容

### 1. 简介 and 概述
*原文标题：Introduction and overview*

This protocol specification specifies the format, message sequences, and semantics of the Protocol SOME/IP Service Discovery (SOME/IP-SD).

The main tasks of the Service Discovery Protocol are communicating the availability of functional entities called service instances in the in-vehicle communication as well as controlling the send behavior of event messages. This allows sending only event messages to receivers requiring them (Publish/Subscribe). The solution described here is also known as SOME/IP-SD (Scalable service-Oriented MiddlewarE over IP - Service Discovery).

### 2. 协议目的 and 目标
*原文标题：Protocol purpose and objectives*

SOME/IP-SD is used to

* Locate service instances.
* Detect when service instances are available.
* Implement the Publish/Subscribe handling.

### 3. Applicability of the 协议
*原文标题：Applicability of the protocol*

SOME/IP-SD can be used for service discovery in vehicle networks.

### 4. 约束与假设
*原文标题：Constraints and assumptions*

The SOME/IP-SD has the following constraints:

* SOME/IP-SD supports only IP-based communication.
* The network communication design has to consider the following limitations, if a subscription is handled via multicast communication:

  * Initial events should be transported via unicast.

### 5. Dependencies

### 6. Dependencies to other 协议 layers
*原文标题：Dependencies to other protocol layers*

SOME/IP-SD depends on SOME/IP. SOME/IP itself supports both TCP and UDP communications but SOME/IP-SD uses only UDP (See ).

### 7. Use Cases

| ID | Name | Description |
|---|---|---|
| UC_001 | Service Offering | A server is offering a service instance to the network without the need to statically configure the endpoint of the service instance on the client side. This also includes the availability of the service instance. |
| UC_002 | Service Subscription | A Client finds a desired service instance and subscribes to its eventgroups without knowing the server's endpoint(s). |
| UC_003 | Flexible communication paths | Clients can be dynamically connected to Service Instances at runtime; thus, avoiding static configuration. |

### 8. 协议需求
*原文标题：Protocol Requirements*

### 9. 需求 Traceability
*原文标题：Requirements Traceability*

| Requirement | Description | Satisfied by |
|---|---|---|
| SOME/IP Service Discovery Protocol shall be used on top of SOME/IP Protocol |  |  |
| SOME/IP Service Discovery Protocol shall support unicast messages |  |  |
| SOME/IP Service Discovery Protocol shall support multicast messages |  |  |
| SOME/IP Service Discovery Protocol shall support SOME/IP and non-SOME/IP services |  |  |
| SOME/IP Service Discovery Protocol shall support different versions of the same service |  |  |
| SOME/IP Service Discovery Protocol shall define the format of the Service Discovery message |  |  |
| SOME/IP Service Discovery Protocol shall define ordered feature sets for compliance of implementations |  |  |
| SOME/IP Service Discovery Protocol shall support to find the location of service instances |  |  |
| SOME/IP Service Discovery Protocol shall support to transport text-based names of services |  |  |
| SOME/IP Service Discovery Protocol shall provide support to transport optional data |  |  |
| SOME/IP Service Discovery Protocol shall provide support for load balancing |  |  |
| SOME/IP Service Discovery Protocol shall support to detect whether service instances are active |  |  |
| SOME/IP Service Discovery Protocol shall support to offer published services |  |  |

 | S

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the SOME/IP specification that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Method | a method, procedure, function, or subroutine that is called/invoked. |
| Parameters | input, output, or input/output arguments of a method or an event |
| Remote Procedure Call (RPC) | a method call from one ECU to another that is transmitted using messages |
| Request | a message of the client to the server invoking a method |
| Response | a message of the server to the client transporting results of a method invocation |
| Request/Response communication | a RPC that consists of request and response |
| Fire&Forget communication | a RPC call that consists only of a request message |
| Event | A uni-directional data transmission that is only invoked on changes or cyclically and is sent from the producer of data to the consumers. One event could even be both sent cyclically and spontaneously on change. This is completely in the responsibility of the sending application because the receiver has no means at all to distinguish between those two. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 协议规范
*原文标题：Protocol specification*

SOME/IP-SD is used to

* Locate service instances.
* Detect if service instances are running.
* Implement the Publish/Subscribe handling.

Inside the vehicular network service instance locations are commonly known; therefore, the state of the service instance is of primary concern. The location of the service (i.e. IP-Address, transport protocol, and port number) are of secondary concern.

### 12. Terms and 定义
*原文标题：Terms and Definitions*

Upstream requirements:
⌈
A separate server service instance shall be used per network interface if a service needs to be offered on multiple network interfaces.
⌋

  Upstream requirements:
⌈
A separate client service instance shall be used per network interface if a service needs to be configured to be accessed using multiple different network interfaces.
⌋

### 13. SOME/IP-SD Message Format

### 14. 通用需求
*原文标题：General Requirements*

Upstream requirements:
⌈
SOME/IP-SD messages shall be sent over UDP.
⌋

  Upstream requirements:
⌈
The SOME/IP-SD Message shall be as follows:

* Message ID (Service ID/Method ID) : 0xFFFF 8100
* Length
* Request ID (Client ID/Session ID)
* Protocol Version : 0x01
* Interface Version : 0x01
* Message Type : 0x02
* Return Code : 0x00
* Flags
* Reserved
* Length of Entries Array
* Entries Array
* Length of Options Array
* Options Array
⌋

The SOME/IP-SD Header Format is shown in Figure .

  Upstream requirements:
⌈
Service Discovery Messages shall start with a SOME/IP header.
⌋

 can be seen in Figure .

  Upstream requirements:
⌈
Service Discovery messages shall use the Service-ID (16 Bits) of 0xFFFF.
⌋

  Upstream requirements:
⌈
Service Discovery messages shall use the Method-ID (16 Bits) of 0x8100.
⌋

  Upstream requirements:
⌈
Service Discovery messages shall use a uint32 length field as specified by SOME/IP. That means that the length is measured in bytes and starts with the first byte after the length field and ends with the last byte of the SOME/IP-SD message.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. SOME/IP-SD Header

Upstream requirements:
⌈
SOME/IP-SD shall be transported using SOME/IP.
⌋

 can be seen in Figure .

  Upstream requirements:
⌈
The SOME/IP-SD Header shall start with an 8 Bit field called flags.
⌋

See a representation of Flags in Figure .

  Upstream requirements:
⌈
The first flag of the SOME/IP-SD Flags field (highest order bit) shall be called Reboot Flag.
⌋

For flags see Figure .

  Upstream requirements:
⌈
The Reboot Flag of the SOME/IP-SD Header shall be set to one for all messages after reboot until the Session-ID in the SOME/IP-Header wraps around and thus starts with 1 again. After this wrap around the Reboot Flag is set to 0.
⌋

  Upstream requirements: ,
⌈
The information for the reboot flag and the Session ID shall be kept for multicast and unicast separately.
⌋

  Upstream requirements: ,
⌈
The information for the reboot flag and the Session ID shall be kept for every sender-receiver relation (i.e. source address and destination address) separately.
⌋

Note: This means there shall be separate counters for sending and receiving.

Sending

* There shall be a counter for multicast.
* There shall be a separate counter for each peer for unicast.

Receiving

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Entry Format

Upstream requirements:
⌈
The service discovery shall support multiple entries that are combined in one service discovery message.
⌋

Note: The entries are used to synchronize the state of services instances and the Publish/Subscribe handling.

  Upstream requirements:
⌈
Two types of entries exist: A Service Entry Type for Services and an Eventgroup Entry Type for Eventgroups.
⌋

  Upstream requirements:
⌈
A Service Entry Type shall be 16 Bytes of size and include the following fields in this order:

* Type Field : encodes FindService (0x00), OfferService (0x01) and StopOfferService (0x01)
* Index First Option Run : Index of this runs first option in the option array.
* Index Second Option Run : Index of this runs second option in the option array.
* Number of Options 1 : Describes the number of options the first option run uses.
* Number of Options 2 : Describes the number of options the second option run uses.
* Service ID : Describes the Service ID of the Service or Service Instance this entry is concerned with.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Referencing Options from Entries

Upstream requirements:
⌈
Using the following fields of the entries, options are referenced by the entries:

* Index First Option Run: Index into array of options for first option run. Index 0 means first option of this SOME/IP-SD message.
* Index Second Option Run: Index into array of options for second option run. Index 0 means first option of this SOME/IP-SD message.
* Number of Options 1: Length of first option run. Length 0 means no option in option run.
* Number of Options 2: Length of second option run. Length 0 means no option in option run.
⌋

Two different option runs exist: First Option Run and Second Option Run.

Rationale for the support of two option runs: Two different types of options are expected: options common between multiple SOME/IP-SD entries and options different for each SOME/IP-SD entry. Supporting two different options runs is the most efficient way to support these two types of options, while keeping the wire format highly efficient.

  Upstream requirements:
⌈
Each option run shall reference the first option and the number of options for this run.
⌋

  Upstream requirements:
⌈
If the number of options is set to zero, the option run is considered empty.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Options Format

Options are used to transport additional information to the entries. This includes for instance the information how a service instance is reachable (IP-Address, Transport Protocol, Port Number).

  Upstream requirements:
⌈
In order to identify the option type every option shall start with:

* Length : Specifies the length of the option in Bytes.
* Type : Specifying the type of the option.
* Discardable Flag : Specifies, if this option can be discarded.
* Bit 1 to bit 7 are reserved and shall be 0.
⌋

  Upstream requirements:
⌈
The discardable flag shall be set to 1 if the option can be discarded by a receiving ECU that does not support this option.
⌋

### 19. 配置 Option
*原文标题：Configuration Option*

The configuration option is used to transport arbitrary configuration strings. This allows to encode additional information like the name of a service or its configuration. In additional, the configuration option allows to offer non-SOME/IP services with SOME/IP-SD.

  Upstream requirements:
⌈
The format of the Configuration Option shall be as follows:

* Length : Shall be set to the total number of bytes occupied by the configuration option, excluding the 16 bit length field and the 8 bit type flag.
* Type : Shall be set to 0x01.
* Discardable Flag : Shall be set to 1 if the Option can be discarded by the receiver.
* Bit 1 to bit 7 are reserved and shall be 0.
* ConfigurationString : Shall carry the configuration string.
⌋

  Upstream requirements: ,
⌈
The Configuration Option shall specify a set of name-value-pairs based on the DNS TXT and DNS-SD format.
⌋

  Upstream requirements:
⌈
The format of the configuration string shall start with a single byte length field that describes the number of bytes following this length field. After the length field a character sequence with the specified length shall follow.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Load Balancing Option

The Load Balancing option is used to prioritize different instances of the same service, so that a client can choose the service instance dynamically. This option will be referenced by Offer Service entries.

  Upstream requirements:
⌈
The Load Balancing Option shall carry a Priority and Weight like the DNS-SRV records, which shall be used for load balancing different service instances.
⌋

  Upstream requirements:
⌈
When looking for all service instances of a service (Service Instance set to 0xFFFF), the client shall choose the service instance with highest priority that also matches client specific criteria.
⌋

Note: Client specific criteria may be applied by the client application when choosing one of the offered service instances. They are not defined in this specification, and could e.g. restrict the range of appropriate instance IDs.

  Upstream requirements:
⌈
When having more than one service instance with highest priority (lowest value in Priority field) the service instance shall be chosen randomly based on the weights of the service instances.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. IPv4 Endpoint Option

The IPv4 Endpoint Option is used by a SOME/IP-SD instance to signal the relevant endpoint(s). Endpoints include the local IP address, the transport layer protocol (e.g. UDP or TCP), and the port number of the sender. These ports are used for the events and notification events as well.

  Upstream requirements: ,
⌈
The IPv4 Endpoint Option shall use the Type 0x04.
⌋

  Upstream requirements: ,
⌈
The IPv4 Endpoint Option shall specify the IPv4-Address, the transport layer protocol (ISO/OSI layer 4) used, and its Port Number.
⌋

  Upstream requirements: ,
⌈
The Format of the IPv4 Endpoint Option shall be as follows:

* Length : Shall be set to 0x0009.
* Type : Shall be set to 0x04.
* Discardable Flag : Shall be set to 0.
* Bit 1 to bit 7 are reserved and shall be 0.
* IPv4-Address : Shall transport the unicast IP-Address as four Bytes.
* Reserved : Shall be set to 0x00.
* Transport Protocol (L4-Proto) : Shall be set to the transport layer protocol (ISO/OSI layer 4) based on the IANA/IETF types (0x06: TCP, 0x11: UDP).
* Transport Protocol Port Number (L4-Port) : Shall be set to the port of the layer 4 protocol.
⌋

SOME/IP-SD IPv4 Endpoint Option is shown in Figure .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. IPv6 Endpoint Option

The IPv6 Endpoint Option is used by a SOME/IP-SD instance to signal the relevant endpoint(s). Endpoints include the local IP address, the transport layer protocol (e.g. UDP or TCP), and the port number of the sender. These ports are used for the events and notification events as well.

  Upstream requirements: ,
⌈
The IPv6 Endpoint Option shall use the Type 0x06.
⌋

  Upstream requirements: ,
⌈
The Format of the IPv6 Endpoint Option shall be as follows:

* Length : Shall be set to 0x0015.
* Type : Shall be set to 0x06.
* Discardable Flag : Shall be set to 0.
* Bit 1 to bit 7 are reserved and shall be 0.
* IPv6-Address : Shall transport the unicast IP-Address as 16 Bytes.
* Reserved : Shall be set to 0x00.
* Transport Protocol (L4-Proto) : Shall be set to the transport layer protocol (ISO/OSI layer 4) based on the IANA/IETF types (0x06: TCP, 0x11: UDP).
* Transport Protocol Port Number (L4-Port) : Shall be set to the transport layer port(e.g. 30490).
⌋

SOME/IP-SD IPv6 Endpoint Option shall be as shown in Figure

  Upstream requirements: ,
⌈
The server shall use the IPv6 Endpoint Option with Offer Service entries to signal the endpoints the services is available on.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. IPv4 Multicast Option

The IPv4 Multicast Option is either transmitted by the server (server multicast endpoint) or by the client (client multicast endpoint):

* If it is transmitted by the server, then a server announces the IPv4 multicast address, the transport layer protocol, and the port number, to where the multicast events are transmitted to.
* If it is transmitted by the client, then a client indicates the IPv4 multicast address, the transport layer protocol, and the port number, where a client expects to receive multicast events.

  Upstream requirements:
⌈
IPv4 Multicast Options shall be referenced by SubscribeEventgroup or by StopSubscribeEventgroup or by SubscribeEventgroupAck entries:

* If it is referenced by a SubscribeEventgroup entry, it describes the client service multicast endpoint (i.e. destination IP address and destination port), where the multicast events shall be received by the client.
* If it is referenced by a StopSubscribeEventgroup entry, it reflects the intent to stop the subscription of a client which has subscribed before via a client service multicast endpoint (i.e. destination IP address and destination port) to the given event group.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. IPv6 Multicast Option

The IPv6 Multicast Option is either transmitted by the server service (server multicast endpoint) or by the client service (client service multicast endpoint):

* If it is transmitted by the server service, then a server announces the IPv6 multicast address, the transport layer protocol (ISO/OSI layer 4), and the port number, to where the multicast events and multicast-notification-events are transmitted to.
* If it is transmitted by the client service, then a client indicates the IPv6 multicast address, the transport layer protocol (ISO/OSI layer 4), and the port number, where a client expects to receive multicast events and multicast-notification-events.

  Upstream requirements:
⌈
The IPv6 Multicast Option shall use the Type 0x16.
⌋

  Upstream requirements:
⌈
The IPv6 Multicast Option shall specify the IPv6-Address, the transport layer protocol (ISO/OSI layer 4) used, and its Port Number.
⌋

  Upstream requirements:
⌈
The Format of the IPv6 Multicast Option shall be as follows:

* Length : Shall be set to 0x0015.
* Type : Shall be set to 0x16.
* Discardable Flag : Shall be set to 0.
* Bit 1 to bit 7 are reserved and shall be 0.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. IPv4 SD Endpoint Option

The IPv4 SD Endpoint Option is used to transport the endpoint (i.e. IP-Address and Port) of the senders SD implementation. This is used to identify the SOME/IP-SD Instance even in cases in which the IP-Address and/or Port Number cannot be used.

Note: This is used to identify the SOME/IP-SD Instance even in cases in which the IP-Address and/or Port Number cannot be used. A use case would be a proxy service discovery on one ECU which handles the multicast traffic for another ECU.

SOME/IP-SD IPv4 SD Endpoint Option is shown in Figure

  Upstream requirements: ,
⌈
The IPv4 SD Endpoint Option may be included in any SD message up to 1 time.
⌋

  Upstream requirements: ,
⌈
The IPv4 SD Endpoint Option shall only be included if the SOME/IP-SD message is transported over IPv4.
⌋

  Upstream requirements: ,
⌈
o A receiver shall ignore all IPv4 SD Endpoint Options received over IPv6.
⌋

  Upstream requirements: ,
⌈
The IPv4 SD Endpoint Option shall be the first option in the options array, if existing.
⌋

  Upstream requirements: ,
⌈
A receiver shall ignore all IPv4 SD Endpoint Options that are located after the first position of the options array.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. IPv6 SD Endpoint Option

The Ipv6 SD Endpoint Option is used to transport the endpoint (i.e. IP-Address and Port) of the senders SD implementation. This is used to identify the SOME/IP-SD Instance even in cases in which the IP-Address and/or Port Number cannot be used. SOME/IP-SD IPv6 SD Endpoint Option is shown in Figure

Note: A use case would be a proxy service discovery on one ECU which handles the multicast traffic for another ECU.

  Upstream requirements: ,
⌈
The IPv6 SD Endpoint Option may be included in any SD message up to 1 time.
⌋

  Upstream requirements: ,
⌈
The IPv6 SD Endpoint Option shall be the first option in the options array, if existing.
⌋

  Upstream requirements: ,
⌈
A receiver shall ignore all IPv6 SD Endpoint Options that are located after the first position of the options array.
⌋

  Upstream requirements: ,
⌈
The IPv6 SD Endpoint Option shall not be referenced by any SD Entry.
⌋

  Upstream requirements: ,
⌈
A receiver shall ignore all references to the IPv6 SD Endpoint Option by Entries.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 服务 Entries
*原文标题：Service Entries*

### 28. Find 服务 Entry
*原文标题：Find Service Entry*

Upstream requirements: ,
⌈
The Find Service entry type shall be used for finding service instances and shall only be sent if the current state of a service is unknown (no current Service Offer was received and is still valid).
⌋

  Upstream requirements: ,
⌈
Find Service entries shall set the entry fields in the following way:

* Type shall be set to 0x00 (FindService).
* Service ID shall be set to the Service ID of the service that shall be found.
* Instance ID shall be set to 0xFFFF, if all service instances shall be returned. It shall be set to the Instance ID of a specific service instance, if just a single service instance shall be returned.
* Major Version shall be set to 0xFF, that means that services with any version shall be returned. If set to value different than 0xFF, services with this specific major version shall be returned only.
* Minor Version shall be set to 0xFFFF FFFF, that means that services with any version shall be returned. If set to a value different to 0xFFFF FFFF, services with this specific minor version shall be returned only.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Offer 服务 Entry
*原文标题：Offer Service Entry*

Upstream requirements:
⌈
The Offer Service entry type shall be used to offer a service to other communication partners.
⌋

  Upstream requirements: ,
⌈
Offer Service entries shall set the entry fields in the following way:

* Type shall be set to 0x01 (OfferService).
* Service ID shall be set to the Service ID of the service instance offered.
* Instance ID shall be set to the Instance ID of the service instance that is offered.
* Major Version shall be set to the Major Version of the service instance that is offered.
* Minor Version shall be set to the Minor Version of the service instance that is offered.
* TTL shall be set to the lifetime of the service instance. After this lifetime the service instance shall considered not been offered.
* If TTL is set to 0xFFFFFF, the Offer Service entry shall be considered valid until the next reboot.
* If `CYCLIC_OFFER_DELAY` is defined, TTL shall be greater or equal to the value for `CYCLIC_OFFER_DELAY`.
* TTL shall not be set to 0x000000 since this is considered to be the Stop Offer Service Entry.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Stop Offer 服务 Entry
*原文标题：Stop Offer Service Entry*

Upstream requirements:
⌈
The Stop Offer Service entry type shall be used to stop offering service instances.
⌋

  Upstream requirements:
⌈
Stop Offer Service entries shall set the entry fields exactly like the Offer Service entry they are stopping, except:

* TTL shall be set to 0x000000.
⌋

  Upstream requirements:
⌈
A StopOfferService (type 0x01), shall carry, i.e. reference, the same options as the entries trying to stop.
⌋

### 31. Usage of Options in Entries

Allowed Option Types for Entry Types
  Upstream requirements: , , , , ,
⌈
| Endpoint | Multicast | Configuration | Load Balancing |  |
|---|---|---|---|---|
| FindService | 0 | 0 | 0-1 | 0 |
| OfferService | 1-2 | 0 | 0-1 | 0-1 |
| StopOffer Service | 1-2 | 0 | 0-1 | 0-1 |
| Subscribe Eventgroup | 0-2 | 0-1 | 0-1 | 0 |
| StopSubscribe Eventgroup | 0-2 | 0-1 | 0-1 | 0 |
| Subscribe EventgroupAck | 0 | 0-1 | 0-1 | 0 |
| Subscribe EventgroupNack | 0 | 0 | 0-1 | 0 |

⌋

### 32. Eventgroup Entry

### 33. Subscribe Eventgroup Entry

Upstream requirements:
⌈
The Subscribe Eventgroup entry type shall be used to subscribe to an eventgroup.
⌋

  Upstream requirements:
⌈
Subscribe Eventgroup entries shall set the entry fields in the following way:

* Type shall be set to 0x06 (SubscribeEventgroup).
* Service ID shall be set to the Service ID of the service instance that includes the eventgroup subscribed to.
* Instance ID shall be set to the Instance ID of the service instance that includes the eventgroup subscribed to.
* Major Version shall be set to the Major Version of the service instance of the eventgroup subscribed to.
* Eventgroup ID shall be set to the Eventgroup ID of the eventgroup subscribed to.
* TTL shall be set to the lifetime of the subscription.

  * If set to 0xFFFFFF, the Subscribe Eventgroup entry shall be considered valid until the next reboot.
  * TTL shall not be set to 0x000000 since this is considered to be the Stop Offer Service Entry.
* Reserved shall be set to 0x000 until further notice.
* Counter shall be used to differentiate between parallel subscribes to the same eventgroup of the same service (only difference in endpoint). If not used, set to 0x0.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Stop Subscribe Eventgroup Entry

Upstream requirements:
⌈
The Stop Subscribe Eventgroup entry type shall be used to stop subscribing to eventgroups.
⌋

  Upstream requirements:
⌈
Stop Subscribe Eventgroup entries shall set the entry fields exactly like the Subscribe Eventgroup entry they are stopping, except:

* TTL shall be set to 0x000000.
⌋

  Upstream requirements:
⌈
A Stop Subscribe Eventgroup Entry shall reference the same options the Subscribe Eventgroup Entry referenced. This includes but is not limited to Endpoint and Configuration options.
⌋

### 35. Subscribe Eventgroup Acknowledgement (Subscribe Eventgroup Ack) Entry

Upstream requirements:
⌈
The Subscribe Eventgroup Acknowledgment entry type shall be used to indicate that Subscribe Eventgroup entry was accepted.
⌋

  Upstream requirements:
⌈
Subscribe Eventgroup Acknowledgment entries shall set the entry fields in the following way:

* Type shall be set to 0x07 (SubscribeEventgroupAck).
* Service ID, Instance ID, Major Version, Eventgroup ID, TTL, Reserved and Counter shall be the same value as in the Subscribe Eventgroup that is being answered.
⌋

  Upstream requirements:
⌈
Subscribe Eventgroup Ack entries referencing events and notification events that are transported via multicast shall reference an IPv4 Multicast Option and/or and IPv6 Multicast Option. The Multicast Options state to which Multicast address and port the events and notification events will be sent to.
⌋

  Upstream requirements:
⌈
When receiving a SubscribeEventgroupAck or SubscribeEventgroupNack the Service ID, Instance ID, Eventgroup ID, and Major Version shall match exactly to the corresponding SubscribeEventgroup Entry to identify an Eventgroup of a Service Instance.
⌋

### 36. Subscribe Eventgroup Negative Acknowledgement (Subscribe Eventgroup Nack) Entry

Upstream requirements:
⌈
The Subscribe Eventgroup Negative Acknowledgment entry type shall be used to indicate that Subscribe Eventgroup entry was NOT accepted.
⌋

  Upstream requirements:
⌈
Subscribe Eventgroup Negative Acknowledgment entries shall set the entry fields in the following way:

* Type shall be set to 0x07 (SubscribeEventgroupAck).
* Service ID, Instance ID, Major Version, Eventgroup ID, Counter, and Reserved shall be the same value as in the Subscribe that is being answered.
* The TTL shall be set to 0x000000.
⌋

  Upstream requirements:
⌈
Reasons to not accept a Subscribe Eventgroup include (but are not limited to):

* Combination of Service ID, Instance ID, Eventgroup ID, and Major Version is unknown
* Required TCP-connection was not opened by client
* Problems with the references options occurred
* Resource problems at the Server
* Security association not yet established
⌋

  Upstream requirements:
⌈
When the client receives a SubscribeEventgroupNack as answer on a SubscribeEventgroup for which a TCP connection is required, the client shall check the TCP connection and shall restart the TCP connection if needed.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 38 章（内容从略，见纯文本全文）

37. Endpoint 处理 for 服务 and Events
38. 服务 Endpoints
39. Eventgroup Endpoints
40. 服务 Discovery Messages
41. 服务 Discovery Communication 行为
42. 启动行为
43. Server Answer 行为
44. 关机行为
45. 状态 Machines
46. SOME/IP-SD Mechanisms
47. 错误处理
48. Non-SOME/IP protocols with SOME/IP-SD
49. Publish/Subscribe with SOME/IP and SOME/IP-SD
50. Reserved and special identifiers for SOME/IP and SOME/IP-SD.
51. 配置 Parameters
52. 协议 Usage
53. Mandatory Feature Set and 基础行为
54. Migration and Compatibility
55. Supporting 多 versions of the same 服务.
56. References
57. 附录
58. Change history of AUTOSAR traceable items
59. 规范 Item Changes between AUTOSAR Release R25-11 and R26-11
60. Added 规范 Items in R26-11
61. Changed 规范 Items in R26-11
62. Deleted 规范 Items in R26-11
63. 规范 Item Changes between AUTOSAR Release R24-11 and R25-11
64. Added 规范 Items in R25-11
65. Changed 规范 Items in R25-11
66. Deleted 规范 Items in R25-11
67. 规范 Item Changes between AUTOSAR Release R23-11 and R24-11
68. Added 规范 Items in R24-11
69. Changed 规范 Items in R24-11
70. Deleted 规范 Items in R24-11
71. Traceable item history of this document according to AUTOSAR Release R23-11
72. Added 规范 Items in R23-11
73. Changed 规范 Items in R23-11
74. Deleted 规范 Items in R23-11
