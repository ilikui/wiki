# Vehicle-2-X Remote Access Layer Protocol Specification (`V2XRemoteAccessLayer`)

> [返回本类索引](index.md)

| 属性     | 值                                       |
| -------- | ---------------------------------------- |
| 平台     | FO                                       |
| 类别     | PRS — 协议规范（Protocol Specification） |
| UID      | 1033                                     |
| 规范版本 | R25-11                                   |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_PRS_V2XRemoteAccessLayer_1033\AUTOSAR_FO_PRS_V2XRemoteAccessLayer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_PRS_V2XRemoteAccessLayer_1033\AUTOSAR_FO_PRS_V2XRemoteAccessLayer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_PRS_V2XRemoteAccessLayer_1033\zzgen\FO_PRS_V2XRemoteAccessLayer.complete.txt`

## 文档简介

This protocol specification enables to exchange of format, message sequences and semantics of the AUTOSAR Protocol V2XRemoteAccessLayer (V2xRAL).

The protocol allows to exchange information between a node that runs the V2x stack with a node that runs the Remote Access Layer via a communication bus. This allows to separate the Access Layer for radio transmission from the V2x stack. As a result, lightweight devices with standardized interfaces for a smart antenna can be built that communicate with a more powerful node that runs the region-specific V2x stack.

## 模块依赖

The V2xRAL protocol is a lightweight protocol to provide a minimum set of control data besides the payload to perform radio network communication and does not depend on any other protocols. Due to the minimum set of data it can be exchanged within a raw Ethernet frame, but can also be placed on top of a protocol such as TCP/IP. Usage of TCP/IP may be required if protocols like IPsec or TLS need to be used for security reason.

## 章节详细内容

### 1. 简介 and 概述

_原文标题：Introduction and overview_

This protocol specification enables to exchange of format, message sequences and semantics of the AUTOSAR Protocol V2XRemoteAccessLayer (V2xRAL).

The protocol allows to exchange information between a node that runs the V2x stack with a node that runs the Remote Access Layer via a communication bus. This allows to separate the Access Layer for radio transmission from the V2x stack. As a result, lightweight devices with standardized interfaces for a smart antenna can be built that communicate with a more powerful node that runs the region-specific V2x stack.

### 2. 协议目的 and 目标

_原文标题：Protocol purpose and objectives_

The Access Layer is used to perform the radio transmission and reception according to the specification of the wireless communication network. The protocol specification supports the radio transmission technologies, LTE-PC5 (specified in ) and ITS-G5 (). It defines the format of the messages that are exchanged between the V2x stack and the Remote Access Layer.

### 3. Applicability of the 协议

_原文标题：Applicability of the protocol_

The V2xRAL protocol is explicitly designed to exchange the playoad and control data between the V2x stack and the Remote Access Layer within the car domain. The payload corresponds to the actual data sent or received over the radio network whereas the control data contains information collected during the reception or required for the transmission of messages. This protocol specification is applicable in the car domain in the context of V2X.

### 4. 约束与假设

_原文标题：Constraints and assumptions_

Within this protocol specification, it is assumed that the data communication between the V2x stack and the V2x Access Layer will happen over Ethernet, but any other communication technology can be used. The V2xRAL does not specify further details for communication over Ethernet such as VLAN, TCP or UDP, Ports, EtherType or other media dependent details. Security considerations for the communication channel are also not in the scope. It is assumed that any security protocol such as MACsec, IPsec or TLS could be used, since the V2xRAL is located on top of these layers.

The protocol does not prevent a duplication of V2x messages. Thus, if the V2XRemoteAccessLayer receives for any reason a V2x message twice from the radio network, it will also forward this frame twice on the network. Therefore, a sequence counter or transaction ID or any other means to identify a previously received or transmitted frame via this protocol is not observed or detected.

### 5. 限制

_原文标题：Limitations_

The V2xRAL is specified for the car domain and is dedicated to be used with the V2x stack as specified in AUTOSAR. It might be that the usage of the V2xRAL does not provide sufficient parameters. But the protocol should be flexible enough to be extended even beyond this specification.

### 6. Dependencies

### 7. Dependencies to other 协议 layers

_原文标题：Dependencies to other protocol layers_

The V2xRAL protocol is a lightweight protocol to provide a minimum set of control data besides the payload to perform radio network communication and does not depend on any other protocols. Due to the minimum set of data it can be exchanged within a raw Ethernet frame, but can also be placed on top of a protocol such as TCP/IP. Usage of TCP/IP may be required if protocols like IPsec or TLS need to be used for security reason.

### 8. Dependencies to other standards and norms

The V2x radio network transmission and reception is defined in standards such as SAE, IEEE and Chinese Telecommunication Industry Standard (YD/T). Details are specified by regional groups for the application in the V2x context, such as ETSI or Chinese GB/T. References to theses specifications can be found in section .

### 9. Dependencies to the Application Layer

The protocol has no dependency to the application. Meaning that there is no need and possibility to influence the protocol through the application.

### 10. Use Cases

This chapter describes the conditions where the protocol specification can be applied. It first introduces a typical communication setup with devices using the V2xRAL. Afterwards, the different use cases for the protocol will be described.

### 11. Communication setup

The V2xRAL is used to perform the communication between a node that runs the V2x stack, the V2x-stack node, and another node that runs the V2x Access Layer, the V2x Access Layer node. Typically, the communication channel between the two nodes is an ethernet channel, but different technologies like IPC can also be used.

The V2x stack node generates the V2x messages such as CAM, DENM or BSM and wants to distribute them over a radio network. Since the V2x stack node does not have the capability to run the access layer on the same device, it sends the message as the payload to the V2x Access Layer node. Since the payload itself does not contain sufficient information for a radio transmission, additional control information need to be added. The specific data sent as control information depend on the radio technology (LTE-PC5 or ITS-G5) and its related specification. Thus, the V2x stack node will add the transmission control information required for the radio technology that is used and send the control information and the payload to the V2x Remote Access Layer node.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Use case 定义

_原文标题：Use case definition_

| ID      | Name    | Description                                      |
| ------- | ------- | ------------------------------------------------ |
| UC_0001 | ITS-G5  | Radio network is based on ITS-G5 (IEEE 802.11.p) |
| UC_0002 | LTE-PC5 | Radio network is based on LTE-PC5.               |

### 13. UC_0001 "Radio 网络 based on ITS-G5"

_原文标题：UC_0001 "Radio network based on ITS-G5"_

The protocol is used if ITS stations are communicating according to the standard defined according to . This specification is applied for ITS-stations in and . Especially the V2x stack for Europe is using this technology. It supports an architecture where the access layer with the antenna can be separated from the actual processing of the V2x stack.

### 14. UC_0002 "Radio 网络 based on LTE-PC5"

_原文标题：UC_0002 "Radio network based on LTE-PC5"_

This protocol is applicable if a V2x stack and the access layer shall be separated, due to the vehicle architecture. It is applicable if radio network technology according to is used, but the access layer and the V2x stack do not reside in the same device.

### 15. 相关文档

_原文标题：Related documentation_

### 16. 输入文档与相关标准规范

_原文标题：Input documents & related standards and norms_

### 17. 相关规范

_原文标题：Related specification_

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for the V2XRemoteAccessLayer.

Thus, the specification SWS BSW General shall be considered as additional and required specification for V2xRAL.

### 18. 协议需求

_原文标题：Protocol Requirements_

Not applicable.

### 19. 术语与缩略语定义

_原文标题：Definition of terms and acronyms_

### 20. 缩略语

_原文标题：Acronyms and abbreviations_

| Abbreviation / Acronym: | Description:                                                                                                                                                                                     |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 3GPP                    | The 3rd Generation Partnership Project provides environment to produce the Reports and Specifications that define 3GPP technologies.                                                             |
| 5GAA                    | The 5G Automotive Association is a global, cross-industry organisation to develop future mobility and transportation services.                                                                   |
| C-V2X                   | Cellular V2X. Communication through a cellular modem.                                                                                                                                            |
| BSM                     | Basic Safety Message.                                                                                                                                                                            |
| CAM                     | Cooperative Awareness Message.                                                                                                                                                                   |
| CBR                     | Channel Busy Ratio.                                                                                                                                                                              |
| DCC                     | Decentralized Congestion Control.                                                                                                                                                                |
| DENM                    | Decentralized Environmental Notification Message.                                                                                                                                                |
| L2ID                    | Layer 2 ID (equivalent to a "Message Authentication Code" for Ethernet).                                                                                                                         |
| MAC                     | Medium Access Control.                                                                                                                                                                           |
| MDR                     | Maximum Data Rate.                                                                                                                                                                               |
| PHY                     | Physical Layer.                                                                                                                                                                                  |
| PPPP                    | ProSe Per Packet Priority.                                                                                                                                                                       |
| V2X                     | Either vehicle to vehicle (V2V), or vehicle to infrastructure (V2I) and/or infrastructure to vehicle (I2V). This terminology is used for Ad-Hoc networks, not for Vehicle-Backend communication. |
| V2xRAL                  | V2x Remote Access Layer                                                                                                                                                                          |
| IPC                     | Inter Process Communication.                                                                                                                                                                     |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 定义 of terms

_原文标题：Definition of terms_

| Terms:                  | Description:                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| V2x Stack               | The V2x stack implements the regional specific requirements for the communication between a vehicle and other road users such as cars, trucks, infrastructures (e.g. traffic light, speed limit), etc. Regions such as China, America or Europe have their own specification. Therefore, there exist several V2x stack implementations. Each one is region-specific. |
| V2x Message             | A V2x message is a message received from another vehicle or Roadside Unit (RSU). The message follows the standard for V2X communication. It is typically encoded in ASN.1 PER coding format. A V2x message is also transmitted by the V2x stack from time to time.                                                                                                   |
| V2x Remote Access Layer | The V2x Remote Access Layer (V2xRAL) is a logical unit that is able to communicate to Off-Board units through LTE-PC5 or ITS-G5. The Remote Access Layer includes the wireless PHY and MAC towards the antenna. This includes channel selection, modulation, congestion control, queuing, priority, QoS, etc.                                                        |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 协议规范

_原文标题：Protocol specification_

### 23. Message format

The message format of the Remote Access Layer protocol is shown in . The message does not rely on any data that has been sent previously with one exception: the value for the pseudonym has to be stored to detect a pseudonym change.

The protocol does not require any acknowledgement or segmentation.

Due to restrictions of the payload for V2x messages the V2xRAL message including the additional control header will fit into a single ethernet frame.

### 24. 控制 Header

_原文标题：Control Header_

⌈
The V2xRAL message is divided into two parts. The first part shall contain control data used by the wireless transport service. The second part shall contain the payload that is used for communication between ITS stations.
⌋

⌈
All data in the control header shall be sent in big endian format (high byte first).
⌋

### 25. Common part

⌈
The first byte of the V2xRAL message shall contain a one byte version information that specifies the version of this protocol specification. The first byte shall always contain the value 0x01. The values 0x00 and 0x02..0xFF are reserved for future use.
⌋

⌈
The second byte of the V2xRAL message shall contain the total Control Header Length. The length information includes the length byte and the version byte. This limits the control header length to 255 bytes. The minimum value of the length byte is 2, because the length and the version byte is mandatory and always present. The values 0 and 1 are reserved.
⌋

⌈
The byte that follows the Control Header Length shall be the Frame Type Identifier and specifies the radio communication network that the frame belongs to.
⌋

⌈
After the Frame Type Identifier a number of data pairs follow. Each pair shall consist of a Tag Identifier and a Value. The Tag Identifier denotes the type of data and the Value represents the control information for this Tag Id. The Value for a specific Tag ID has fixed size that is specified in this protocol definition.
⌋

Info: A length value is not provided (e.g. as TLV) to spare the space in the header.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Radio Transmission Part for ITS-G5

⌈
One of the radio communication protocols that need to be supported for the V2x stack in AUTOSAR is ITS-G5 for connection-less transport services in the ITS ad-hoc network as specified in . This is currently the standard communication specified by the ETSI. Further protocols may follow, but the support of this technology is essential to support the aforementioned specification defined in AUTOSAR.
⌋

⌈
The control header of the V2xRAL contains information about the tolling zone.
⌋

Info: The tolling zone information is defined as a Tag-ID in .

⌈
The control header of the V2xRAL contains information about DCC (see Tag-ID in table below) when sending a packet from the V2x stack to the V2x Remote Access Layer and the CBR when sending a packet from the V2x Remote Access Layer to the V2x stack.
⌋

| Name            | TAG ID | No. of Bytes | Dir\* | Description                                                                                                                                                                                                           |
| --------------- | ------ | ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Packet Interval | 0x10   | 1 Byte       | Tx    | Packet interval for transmission interspace in milliseconds (well-known by the Access Layer for ITS-G5). One increment represents 10 ms. This allows a range of 0..2550 ms for the packet interval in steps of 10 ms. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Radio Transmission Part for LTE-PC5

| Name           | TAG ID | No. of Bytes | Dir\* | Description                                                                                                    |
| -------------- | ------ | ------------ | ----- | -------------------------------------------------------------------------------------------------------------- |
| MDR            | 0x30   | 3 Byte       | Rx    | Maximum data rate in bps (bits per seconds). Value is in the range of 0..1585200. 1585201..16777215: reserved. |
| CBR            | 0x31   | 1 Byte       | Rx    | Channel busy ratio in the range of 0(=0%) to 100(=100%). 101..255=reserved.                                    |
| Traffic Period | 0x32   | 1 Byte       | Tx    | Traffic period.                                                                                                |

- = Traffic Period: 20ms;
- = Traffic Period: 50ms;
- = Traffic Period: 100ms;
- = Traffic Period: 200ms;
- = Traffic Period: 300ms;
- = Traffic Period: 400ms;
- = Traffic Period: 500ms;
- = Traffic Period: 600ms;
- = Traffic Period: 700ms;
- = Traffic Period: 800ms;
- = Traffic Period: 900ms;
- = Traffic Period: 1000ms.

Values 0x0c..0xFF are reserved.
| PPPP | 0x33 | 1 Byte | Rx/Tx | PPPP: ProSe per Packet Priority in the range of 1..8. 1=highest priority, 8=lowest priority. Values 0 and 9..255 are reserved. |
|---|---|---|---|---|
| Src L2ID | 0x34 | 3 Byte | Rx/Tx | Specifies the source L2ID of the frame (equiv. to Src-MAC). |
| Dest L2ID | 0x35 | 3 Byte | Rx/Tx | Specifies the destination L2ID of the frame (equiv. to Dst-MAC). |
| - | 0x00..0x2F, 0x36..0xFF | - | - | Reserved. |

\*Dir: Direction of the frame:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Message 类型

_原文标题：Message types_

The V2xRAL protocol does not distinguish any message types. Typically, the Control Header comes along with the payload of the V2x message since the control header is pretty small (approx. 20-25 bytes). Combining both, the control and the payload information into the same frame ensures, that the remote access layer always has the adequate control data for the payload. This prevents that the wireless frame is sent with unwanted control data. Considering this, a V2xRAL message without control header is not usable in the context of this protocol. A control header can be sent without payload information but this is rarely applicable. A typical use case is the pseudonym change, where the V2x stack can send a new pseudonym immediately to the V2x Remote Access Layer when commanded.

### 29. 服务 / Commands

_原文标题：Services / Commands_

There are no services defined for the V2XRemoteAccessLayer protocol. The main use case is the exchange of the payload of V2x messages and its control data between the network layer and the access layer.

One operational service is the change of the pseudonym. In this case, the V2x stack sends a command to the V2XRemoteAccessLayer to change the pseudonym. This information can be triggered by the V2x stack and can be transmitted with or without V2x message payload.

### 30. Sequences (下层 layer)

_原文标题：Sequences (lower layer)_

The V2XRemoteAccessLayer protocol is stateless. Therefore, no sequences are specified within this protocol.

### 31. 错误 messages

_原文标题：Error messages_

The V2XRemoteAccessLayer does not use any error messages.

### 32. Backward compatibility

The layout of the control header supports backward compatibility. This is achieved by the control header length field at the very beginning of the control header. Thus, if the protocol layer parses the tag IDs it can process all known tag IDs. If a a new and unknown tag ID is found, all further tags cannot be processed since the length of the tag is unknown.

As a consequence, if the protocol will be extended by new tags and the new tag information is not essential for previous versions of the protocol, the new tags need to be added at the end of the tag fields (not in the middle or at the beginning). For any breaking change of the protocol it is recommended to change the frame type or even the protocol version.

### 33. 配置 parameters

_原文标题：Configuration parameters_

There are no configuration items for the V2XRemoteAccessLayer protocol.

### 34. 协议 usage and 指南

_原文标题：Protocol usage and guidelines_

There are no additional guidelines available for this protocol.

### 35. 附录

_原文标题：Appendix_

### 36. History of 规范 Items

_原文标题：History of Specification Items_

Please note that the lists in this chapter also include specification items that have been removed from the specification in a later version. These specification items do not appear as hyperlinks in the document.

### 37. 规范 Item History of this document compared to AUTOSAR R25-11.

_原文标题：Specification Item History of this document compared to AUTOSAR R25-11._

### 38. Added 规范 Items in R26-11

_原文标题：Added Specification Items in R26-11_

none

### 39. Changed 规范 Items in R26-11

_原文标题：Changed Specification Items in R26-11_

none

### 40. Deleted 规范 Items in R26-11

_原文标题：Deleted Specification Items in R26-11_

none

### 41. 规范 Item History of this document compared to AUTOSAR R24-11.

_原文标题：Specification Item History of this document compared to AUTOSAR R24-11._

### 42. Added 规范 Items in R25-11

_原文标题：Added Specification Items in R25-11_

none

### 43. Changed 规范 Items in R25-11

_原文标题：Changed Specification Items in R25-11_

none

### 44. Deleted 规范 Items in R25-11

_原文标题：Deleted Specification Items in R25-11_

none

### 45. 规范 Item History of this document compared to AUTOSAR R23-11.

_原文标题：Specification Item History of this document compared to AUTOSAR R23-11._

### 46. Added 规范 Items in R24-11

_原文标题：Added Specification Items in R24-11_

none

### 47. Changed 规范 Items in R24-11

_原文标题：Changed Specification Items in R24-11_

none

### 48. Deleted 规范 Items in R24-11

_原文标题：Deleted Specification Items in R24-11_

none

### 49. 规范 Item History of this document compared to AUTOSAR R22-11.

_原文标题：Specification Item History of this document compared to AUTOSAR R22-11._

### 50. Added 规范 Items in R23-11

_原文标题：Added Specification Items in R23-11_

| Number | Heading |
| ------ | ------- |

|

### 51. Changed 规范 Items in R23-11

_原文标题：Changed Specification Items in R23-11_

none

### 52. Deleted 规范 Items in R23-11

_原文标题：Deleted Specification Items in R23-11_

none
