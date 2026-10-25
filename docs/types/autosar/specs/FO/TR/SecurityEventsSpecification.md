# Technical Report on Security Events Specification (`SecurityEventsSpecification`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 1122 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TR_SecurityEventsSpecification_1122\AUTOSAR_FO_TR_SecurityEventsSpecification.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TR_SecurityEventsSpecification_1122\AUTOSAR_FO_TR_SecurityEventsSpecification.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TR_SecurityEventsSpecification_1122\zzgen\FO_TR_SecurityEventsSpecification.complete.txt`

## 文档简介

This technical report provides the Security Event (SEv) specification of the AUTOSAR Standard.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This technical report provides the Security Event (SEv) specification of the AUTOSAR Standard.

### 2. 目标
*原文标题：Objectives*

Efficient intrusion detection is heavily relying on IDS sensors monitoring sensible resources and providing high-quality information to the Vehicle Security Operation Center (VSOC). AUTOSAR implements a set of IDS sensors as part of the AUTOSAR software specification, where the respective SEv specification can be found in the corresponding SWS documents. This document collects these AUTOSAR-specified SEvs and provides an overview on all SEvs that are defined in AUTOSAR, including their specification.

The SEv specification in this document is provided in the form of generated tables. The source of the generated tables is the document `FO_MOD_GeneralDefinitions` , which can be used as a machine-readable version of the SEv specification in the VSOC.

Please note that this document does not contain the trigger condition under which the SEv is raised by the AUTOSAR stack. The trigger condition can be found in the SWS document of the module that raises the respective SEv.

### 3. 文档结构
*原文标题：Document structure*

This document is structured as follows:

* Chapter 4 contains a list of all SEvs defined by AUTOSAR in a tabular form. The list contains SEv ID, Name, Description and AUTOSAR module that raises the SEv, but no context data.
* Chapter 5 contains detailed SEv specification including the SEvs context data. The chapter contains only SEvs for which context data is specified.

### 4. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to this document that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| IDS | Intrusion Detection System |
| SEv | Security Event |
| VSOC | Vehicle Security Operation Center |

### 6. 相关文档
*原文标题：Related Documentation*

### 7. Security Event 规范
*原文标题：Security Event specification*

This section provides an overview over all Security Events provided by AUTOSAR. The module shortnames can be found in   and  .

| SEv Id | Name | Description | Raised by the following modules | Context Data Version |
|---|---|---|---|---|
| Communication SEvs | < | < | < | < |
| 6 | SEV_DROP_PDU_RX_UDP | SoAd dropped a PDU. The PDU violates stack configuration and was received via a UDP socket. | CP: SoAd AP: n/a | n/a |
| 7 | SEV_DROP_MSG_RX_UDP_LENGTH | SoAd dropped a message. The message contains at least one PDU which violates stack configuration and was received via a UDP socket. The violation relates to the length of the PDUs compared to the overall length of the message. | CP: SoAd AP: n/a | n/a |
| 8 | SEV_DROP_MSG_RX_UDP_SOCKET | SoAd received a UDP message which violates stack configuration and was dropped. No suitable socket connection matching to configuration was found. | CP: SoAd AP: n/a | n/a |
| 9 | SEV_REJECTED_TCP_CONNECTION | SoAd rejected a TCP connection. The connection request violates stack configuration. | CP: SoAd AP: n/a | n/a |
| 10 | SEV_ARP_IP_ADDR_CONFLICT | Received local IP address in ARP reply for different MAC. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Context 数据规范
*原文标题：Context data specification*

This chapter lists the context data definition for all Security Events where context data is defined. Note that following  all context data elements are provided in big endian byte order .

### 9. Communication SEvs

### 10. CAN SEvs

Security event context data definition: `SEV_CAN_TX_ERROR_DETECTED`
  Upstream requirements:
⌈
| SEV Name | SEV_CAN_TX_ERROR_DETECTED | < |
|---|---|---|
| ID | 19 | < |
| Description | A transmission related error was detected. Depending on the context data this could indicate suspicious CAN activity. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| ControllerId | uint8 |  |
| CanError | uint8 | CAN_ERROR_BIT_MONITORING1 (0x01) CAN_ERROR_BIT_MONITORING0 (0x02) CAN_ERROR_BIT (0x03) CAN_ERROR_CHECK_ACK_FAILED (0x04) CAN_ERROR_ACK_DELIMITER (0x05) CAN_ERROR_ARBITRATION_LOST (0x06) CAN_ERROR_OVERLOAD (0x07) |

⌋

 Security event context data definition: `SEV_CAN_RX_ERROR_DETECTED`
  Upstream requirements:
⌈
| SEV Name | SEV_CAN_RX_ERROR_DETECTED | < |
|---|---|---|
| ID | 20 | < |
| Description | A reception related error was detected. Depending on the context data this could indicate suspicious CAN activity. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| ControllerId | uint8 |  |
| CanError | uint8 | CAN_ERROR_CHECK_FORM_FAILED (0x08) CAN_ERROR_CHECK_STUFFING_FAILED (0x09) CAN_ERROR_CHECK_CRC_FAILED (0x0A) CAN_ERROR_BUS_LOOK (0x0B) |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Ethernet SEvs

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

### 12. Firewall SEvs

Security event context data definition: `SEV_FW_PACKET_BLOCKED_IPV4_MISMATCH`
  Upstream requirements:
⌈
| SEV Name | SEV_FW_PACKET_BLOCKED_IPV4_MISMATCH | < |
|---|---|---|
| ID | 51 | < |
| Description | A network packet was blocked due to a rule mismatch on IPv4 layer. | < |
| Context Data Version | 2 | < |
| Context Data | Data Type | Allowed Values |
| Length | uint16 | Length of EthernetFrame byte array |
| EthernetFrame | uint8 | Received EthernetFrame, truncated to the first bytes according to - CP: FwSEvEthernetFrameMaxLength - AP: maxLength of the ContextDataElement EthernetFrame from the SecurityExtract |
| MAX-LENGTH | Truncation length can be defined on a project specific basis. AUTOSAR has defined a default value, as given in the EthernetFrame byte array definition above. |  |

⌋

 Security event context data definition: `SEV_FW_PACKET_BLOCKED_IPV6_MISMATCH`
  Upstream requirements:
⌈
| SEV Name | SEV_FW_PACKET_BLOCKED_IPV6_MISMATCH | < |
|---|---|---|
| ID | 52 | < |
| Description | A network packet was blocked due to a rule mismatch on IPv6 layer. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. MACsec SEvs

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

### 14. SecOC SEvs

Security event context data definition: `SEV_SECOC_MAC_VERIFICATION_FAILED`
  Upstream requirements:
⌈
| SEV Name | SEV_SECOC_MAC_VERIFICATION_FAILED | < |
|---|---|---|
| ID | 44 | < |
| Description | MAC verification of a received PDU failed. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| DataId | uint16 |  |

⌋

 Security event context data definition: `SEV_SECOC_FRESHNESS_NOT_OK`
  Upstream requirements:
⌈
| SEV Name | SEV_SECOC_FRESHNESS_NOT_OK | < |
|---|---|---|
| ID | 45 | < |
| Description | Failed to get freshness value from FvM upon reception of a SecOC secured PDU. Depending on the freshness value management, this can be an indicator of a replay attack. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| DataId | uint16 |  |

⌋

### 15. Signal-based communication SEvs

Security event context data definition: `SEV_COM_RX_SIGNAL_VALUE_UNEXPECTED`
  Upstream requirements:
⌈
| SEV Name | SEV_COM_RX_SIGNAL_VALUE_UNEXPECTED | < |
|---|---|---|
| ID | 89 | < |
| Description | Signal or group signal is received with unexpected value. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| ComHandleId | uint16 |  |

⌋

### 16. TCPIP SEvs

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

### 17. TLS SEvs

Security event context data definition: `SEV_TLS_ERROR`
  Upstream requirements:
⌈
| SEV Name | SEV_TLS_ERROR | < |
|---|---|---|
| ID | 90 | < |
| Description | An alert message (warning or fatal) was detected (either received or generated) by TLS. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| ReasonForFailure | uint8 | Alert message as described in the the Alert Protocol in - RFC5246 for TLS Version 1.2 - RFC8446 for TLS Version 1.3 |
| TLSVersion | uint16 | Version as defined in RFC5246, RFC8446 - 0x0303 for TLS Version 1.2 - 0x0304 for TLS Version 1.3 |
| SourceIpAddress | uint8 | All IPv6 addresses and IPv4 addresses shall be encoded as specified in RFC 4291 Section 2.5.5.2 |
| SourcePort | uint16 |  |
| DestinationIpAddress | uint8 | All IPv6 addresses and IPv4 addresses shall be encoded as specified in RFC 4291 Section 2.5.5.2 |
| DestinationPort | uint16 |  |

⌋

 Security event context data definition: `SEV_TLS_CONNECTION_ESTABLISHED`
  Upstream requirements:
⌈
| SEV Name | SEV_TLS_CONNECTION_ESTABLISHED | < |
|---|---|---|
| ID | 91 | < |
| Description | A TLS connection was successfully established. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Time 同步 SEvs
*原文标题：Time Synchronization SEvs*

Security event context data definition: `SEV_TSYN_CAN_ICV_GENERATION_FAILED`
  Upstream requirements: ,
⌈
| SEV Name | SEV_TSYN_CAN_ICV_GENERATION_FAILED | < |
|---|---|---|
| ID | 66 | < |
| Description | ICV generation for a FUP message has failed. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| GlobalTimeDomainId | uint8 |  |

⌋

 Security event context data definition: `SEV_TSYN_CAN_ICV_VERIFICATION_FAILED`
  Upstream requirements: ,
⌈
| SEV Name | SEV_TSYN_CAN_ICV_VERIFICATION_FAILED | < |
|---|---|---|
| ID | 67 | < |
| Description | ICV verification of a FUP message has failed. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| GlobalTimeDomainId | uint8 |  |

⌋

 Security event context data definition: `SEV_TSYN_CAN_FRESHNESS_NOT_AVAILABLE`
  Upstream requirements: ,
⌈
| SEV Name | SEV_TSYN_CAN_FRESHNESS_NOT_AVAILABLE | < |
|---|---|---|
| ID | 68 | < |
| Description | Failed to get freshness value from FvM. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| GlobalTimeDomainId | uint8 |  |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 19. 密码服务 SEvs
*原文标题：Cryptography SEvs*

### 20. Certificates SEvs

Security event context data definition: `SEV_CERT_CHAIN_VERIFICATION_FAILED`
  Upstream requirements:
⌈
| SEV Name | SEV_CERT_CHAIN_VERIFICATION_FAILED | < |
|---|---|---|
| ID | 5 | < |
| Description | The verification of a certificate against a certificate chain was not successful. | < |
| Context Data Version | 2 | < |
| Context Data | Data Type | Allowed Values |
| CertError | uint8 | Cert_no_error (0x00) Cert_invalid_format (0x01) Cert_invalid_type (0x02) Cert_invalid_chain_of_trust (0x03) Cert_signature_fail (0x04) Cert_revoked (0x05) Cert_validity_period_fail (0x06) Cert_invalid_content (0x07) General_failure (0xFF) |
| Length | uint16 | Length of Certificate byte array |
| Certificate | uint8 | Certificate, optionally truncated to the first KeyMSEvCertificateMaxLength bytes |
| MAX-LENGTH | Truncation length can be defined on a project specific basis. AUTOSAR has defined a default value, as given in the Certificate byte array definition above. |  |

⌋

 Security event context data definition: `SEV_CERT_INSTALL`
  Upstream requirements:
⌈
| SEV Name | SEV_CERT_INSTALL | < |
|---|---|---|
| ID | 95 | < |
| Description | Attempt to install a new certificate. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 诊断 SEvs
*原文标题：Diagnostic SEvs*

### 22. DoIP SEvs

Security event context data definition: `SEV_DOIP_HEADER_CHECK_FAILED`
  Upstream requirements:
⌈
| SEV Name | SEV_DOIP_HEADER_CHECK_FAILED | < |
|---|---|---|
| ID | 127 | < |
| Description | The DoIP Header Handler rejected a request (routing or diagnostic message). | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| SourceIp | uint8 |  |
| SourcePort | uint8 |  |
| ProtocolVersion | uint8 |  |
| PayloadType | uint8 |  |
| NACKCode | uint8 |  |

⌋

 Security event context data definition: `SEV_DOIP_ROUTING_ACTIVATION_CHECK_FAILED`
  Upstream requirements:
⌈
| SEV Name | SEV_DOIP_ROUTING_ACTIVATION_CHECK_FAILED | < |
|---|---|---|
| ID | 128 | < |
| Description | A routing request was rejected by the routing handler. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| SourceIp | uint8 |  |
| SourcePort | uint8 |  |
| LogicalSourceAddress | uint8 |  |
| ActivationType | uint8 |  |
| ResponseCode | uint8 |  |

⌋

 Security event context data definition: `SEV_DOIP_ROUTING_ACTIVATION_SUCCESS`
  Upstream requirements:
⌈
| SEV Name | SEV_DOIP_ROUTING_ACTIVATION_SUCCESS | < |
|---|---|---|
| ID | 129 | < |
| Description | A routing request was successful. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. UDS SEvs

Security event context data definition: `SEV_UDS_SECURITY_ACCESS_NEEDED`
  Upstream requirements:
⌈
| SEV Name | SEV_UDS_SECURITY_ACCESS_NEEDED | < |
|---|---|---|
| ID | 100 | < |
| Description | Tester has sent a diagnostic request without meeting the server's security level requirements for that service. NRC 0x33 (securityAccessDenied) was returned. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| SID | uint8 |  |
| Subfunction | uint8 | 255: is filled in case the service is without Subfunction |
| DataIdentifier | uint16 | 65535: is filled in case the service is without DID |
| RoutineIdentifier | uint16 | 65535: is filled in case the service is without RID |
| ClientSourceAddress | uint16 |  |

⌋

 Security event context data definition: `SEV_UDS_AUTHENTICATION_NEEDED`
  Upstream requirements:
⌈
| SEV Name | SEV_UDS_AUTHENTICATION_NEEDED | < |
|---|---|---|
| ID | 101 | < |
| Description | A diagnostic request was received while the required authentication to execute this service is not given. NRC 0x34 (authenticationRequired) was returned. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Identity and Access 管理 SEvs
*原文标题：Identity and Access Management SEvs*

Security event context data definition: SEV_ACCESS_CONTROL_FIREWALL_IAM_ACCESS_DENIED
  Upstream requirements:
⌈
| SEV Name | SEV_ACCESS_CONTROL_FIREWALL_IAM_ACCESS_DENIED | < |
|---|---|---|
| ID | 131 | < |
| Description | Access of an application to a resource provided by the firewall was denied. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| UserId | uint32 |  |

⌋

 Security event context data definition: `SEV_ACCESS_CONTROL_DM_IAM_ACCESS_DENIED`
  Upstream requirements:
⌈
| SEV Name | SEV_ACCESS_CONTROL_DM_IAM_ACCESS_DENIED | < |
|---|---|---|
| ID | 133 | < |
| Description | Access of an application to a resource provided by DM was denied. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| UserId | uint32 |  |

⌋

 Security event context data definition: `SEV_ACCESS_CONTROL_CRYPTO_IAM_ACCESS_DENIED`
  Upstream requirements:
⌈
| SEV Name | SEV_ACCESS_CONTROL_CRYPTO_IAM_ACCESS_DENIED | < |
|---|---|---|
| ID | 134 | < |
| Description | Access of an application to a resource provided by Cryptography was denied. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| UserId | uint32 |  |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. IdsM SEvs

Security event context data definition: `SEV_IDSM_STATISTICS`
  Status: DRAFT
  Upstream requirements:
⌈
| SEV Name | SEV_IDSM_STATISTICS | < |
|---|---|---|
| ID | 126 | < |
| Description | A SEV reported by application to snapshot the IdsM statistics data. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| ControlField | uint8 | The 8 byte control field is used to describe the content of the context data in the following bytes. |
| InstanceStatisticsForEvents | uint8 | The instance statistics segment contains various types of counts for events in an IdsM instance, e.g., number of events received, transmitted and stored. This segment of the context data is optional and its availability is indicated by Bit0 of the ControlField. |
| InstanceStatisticsForEventBuffers | uint8 | The instance statistics segment contains buffer fill level information that are collected for an IdsM instance, e.g., peak fill level of the event and qualified event buffers. This segment of the context data is optional and its availability is indicated by Bit0 of the ControlField. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. SW Update SEvs

Security event context data definition: `SEV_SW_UPDATE_FAILED`
  Upstream requirements:
⌈
| SEV Name | SEV_SW_UPDATE_FAILED | < |
|---|---|---|
| ID | 93 | < |
| Description | A SW update operation was requested, but it was not successful. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| Action | uint8 |  |
| ErrorCode | uint8 |  |
| Resolution | uint8 |  |
| SwName | uint8 |  |
| ReceivedSwVersion | uint8 |  |

⌋

 Security event context data definition: `SEV_SW_UPDATE_SUCCESS`
  Upstream requirements:
⌈
| SEV Name | SEV_SW_UPDATE_SUCCESS | < |
|---|---|---|
| ID | 94 | < |
| Description | A SW update operation was executed successfully. | < |
| Context Data Version | 1 | < |
| Context Data | Data Type | Allowed Values |
| Action | uint8 |  |
| SwName | uint8 |  |
| ReceivedSwVersion | uint8 |  |

⌋

### 27. Secure Boot SEvs

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
