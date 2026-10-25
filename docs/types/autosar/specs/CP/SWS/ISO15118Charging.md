# Specification of ISO15118 Charging (`ISO15118Charging`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1095 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_ISO15118Charging_1095\AUTOSAR_CP_SWS_ISO15118Charging.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_ISO15118Charging_1095\AUTOSAR_CP_SWS_ISO15118Charging.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_ISO15118Charging_1095\zzgen\CP_SWS_ISO15118Charging.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module ISO15118Chrg. The charging module (ISO15118Chrg) belongs to the service layer of the AUTOSAR layered architecture.

The ISO15118Chrg implements the V2GTP (vehicle to grid transport protocol) and the EXI (efficient XML interchange), the V2GTP defines the structure of the PDU; which is the header and payload definitions. The EXI is responsible for compression of the XML data for faster processing. The ISO15118Chrg module communicates with the Crypto stack to support data authentication and encryption, as well as certificate management and verification.

Refer to chapter 5 for ISO15118Chrg interaction with other modules. The figure given below describes the architecture:

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

Currently the Charging Manager does not support the following:

* Wireless charging as per
* Bi-directional charging as per
* Charging over CAN as per Chademo
* Charging over LIN

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module ISO15118Chrg. The charging module (ISO15118Chrg) belongs to the service layer of the AUTOSAR layered architecture.

The ISO15118Chrg implements the V2GTP (vehicle to grid transport protocol) and the EXI (efficient XML interchange), the V2GTP defines the structure of the PDU; which is the header and payload definitions. The EXI is responsible for compression of the XML data for faster processing. The ISO15118Chrg module communicates with the Crypto stack to support data authentication and encryption, as well as certificate management and verification.

Refer to chapter 5 for ISO15118Chrg interaction with other modules. The figure given below describes the architecture:

### 3. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes the relevant acronyms and abbreviations.

| Abbreviation / Acronym: | Description: |
|---|---|
| ISO15118-2 Charging Manager | Charging Manager |
| V2GTP | Vechile to Grid Transport Protocol |
| EVCC | Electric Vehicle Communcation Controller |
| SECC | Supply Equipment Communcation Controller |
| HLC | High Level Communcation |
| EVSE | Electrical Vehicle Supply Equipment |
| SDP | SECC Discovery Protocol |
| PLC | Pilot Line Communcation |
| EV | Electric Vehicle |
| CCS | Combined Charging System |
| EXI | Efficient XML Interchange |
| eMAID | e-Mobility Account Identifier |
| EIM | External Identification Means |

### 4. 相关文档
*原文标题：Related documentation*

### 5. Input documents

### 6. Related Standards

ISO15118-2: Road vehicles Vehicle to Grid Communication Interface, Network and application protocol requirements.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

The ISO15118Chrg module (charging manager) supports communication between the EV and the EVSE as per the standard ISO-15118, other communication standards such as CAN, LIN, FlexRay are not supported. The wireless and the wired ethernet and transceiver drivers must be configured to support IEEE802.1X and HomePlugPHY standards respectively. The ISO15118Chrg module does not support bi-directional charging.

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The ISO15118Chrg module can be used wherever wired and wireless charging over ethernet is used.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 11. ECU 状态管理器 (EcuM)
*原文标题：ECU State Manager (EcuM)*

The EcuM module intializes the ISO15118Chrg module.

### 12. 基础软件模式管理器 (BswM)
*原文标题：Basic Software Mode Manager (BswM)*

The ISO15118Chrg module will notify the BswM about the mode changes of the ethernet network(s).

### 13. BSW Scheduler (SchM)

The BSW Scheduler module calls the main function of the ISO15118Chrg module.

### 14. Ethernet 状态管理器 (EthSM)
*原文标题：Ethernet State Manager (EthSM)*

The Ethernet state manager (EthSM) will notify the ISO15118Chrg module about the communication modes of the ethernet network(s).

### 15. Socket Adaptor (SoAd)

The socket adaptor is the upper layer of the TCPIP stack and is used by the ISO15118Chrg module for opening and closing of sockets for TCP and UDP connections.

### 16. TcpIp

The TCPIP stack will be used by the ISO15118Chrg module to provide services such as TCP, UDP, ICMPv6, SLAAC, DHCP, NDP, etc.

### 17. Ethernet 接口 (EthIf)
*原文标题：Ethernet Interface (EthIf)*

The ethernet interface provides APIs to access the ethernet drivers and the ethernet transceiver drivers. It also provides APIs to the TCPIP stack for transmission and reception of TCP and UDP packets.

### 18. Ethernet 驱动 (EthDrv)
*原文标题：Ethernet Driver (EthDrv)*

The ethernet driver is used to configure the ethernet controller, as per the concept  it must support HomePlugPHY standard.

### 19. Ethernet 收发器驱动 (EthTrcv)
*原文标题：Ethernet Transceiver Driver (EthTrcv)*

The ethernet transceiver driver provides the APIs to configure the ethernet transceiver, which transmits and receives data to and from the ethernet bus.

### 20. Crypto 服务模块 (Csm)
*原文标题：Crypto Service Module (Csm)*

The ISO15118Chrg module will use the services of the crypto module to support encryption and decryption of messages.

### 21. Key 管理器 (KeyM)
*原文标题：Key Manager (KeyM)*

The ISO15118Chrg module will use the services of the KeyManager to support certificate management and verfication.

### 22. 需求 Traceability
*原文标题：Requirements Traceability*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The ChrgM module shall initiate the process of IP address assignment. |  |  |
| The ChrgM module shall initiate the process of SECC Discovery Process (SDP). |  |  |
| The ChrgM shall establish a TCP-TLS session. |  |  |
| The ChrgM shall establish a V2G session. |  |  |
| The ChrgM shall implement the EXI (efficient XML interchange). |  |  |
| The ChrgM shall provide security and authentication for V2G messages. |  |  |
| The ChrgM shall store, verify and update certificates. |  |  |
| The ChrgM shall implement the V2GTp (vehicle to grid transport protocol). |  |  |
| The ChrgM shall communicate with the RTE and CDDs. |  |  |
| The ChrgM shall provide timers for managing communication. |  |  |
| The ChrgM shall provide an error handling mechanism for V2G messages. |  |  |
| The ChrgM shall provide callback functions. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 功能规范
*原文标题：Functional specification*

The Charging Manager (ISO15118Chrg) module enables the charging process between the supply equipment (EVSE) and the vehicle (EV), the charging process is based upon the standard , which supports both AC and DC charging with the option of 2 payment methods PnC (plug and charge) and EIM (external identification means). The communication between the EV (electric vehicle) and the EVSE (electric vehicle suppy equipment) is established using two modems on each side, these modems are configured as per the HomePlugPHY standard.

### 24. Charging 管理器 (ISO15118Chrg) 概述
*原文标题：Charging Manager (ISO15118Chrg) Overview*

The ISO15118Chrg (charging module) is introduced in the AUTOSAR layered architecture as a communication module in the service layer and it controls the charging process using different sets of messages. It provides interfaces to communicate with the upper layer, and the lower layers such as the socket adaptor  and the . The ISO15118Chrg also communicates with the ethernet state manager , the basic software mode manager , the basic software scheduler  and the .

The process of charging begins when the vehicle plugs itself in the supply equipment, the EVCC (electric vehicle communication controllers) senses a voltage at the CP line, an application software SwC needs to poll this CP line, once a voltage is sensed, the SwC will inform the ISO15118Chrg via the operation SetCpLineStatus. This marks the beginning of the charging process. For different states of the CP line, refer to ISO15118-1.

The EVCC then establishes a data link connection with the SECC, once the data link is established it informs the ISO15118Chrg. The charging interface used in the European Union is the CCS-Type2.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Charging 管理器通用需求
*原文标题：Charging Manager General Requirements*

General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
The ISO15118Chrg shall provide service interfaces to the upper layer, through which the request and response messages shall be exchanged.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
The ISO15118Chrg shall be able to create the V2G message from the dataPtr it receives in the request message from the upper layer.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
The ISO15118Chrg shall implement EXI encoding and decoding as per .
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
The ISO15118Chrg shall implement the V2GTP as per . The V2GTP is the standard communication protocol between the EV and the EVSE.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
The ISO15118Chrg shall provide the following timers with their respecitve timeouts as per :

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Transmission of Charging 控制 Messages
*原文标题：Transmission of Charging Control Messages*

General Requirement
  Status: DRAFT
  Upstream requirements: ,
⌈
The ISO15118Chrg shall encode the V2G message into the EXI format, upon successful EXI encoding, the ISO15118Chrg shall then pack this EXI stream into the V2GTP format as mentioned in .
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
If there is an error during the EXI encoding operation, then the ISO15118Chrg shall inform the upper layer with an error message and shall stop the charging process and go to the state `ISO15118Chrg_Init`.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
The ISO15118Chrg shall send the V2GTPPDU to the lower layer by calling PduR_<User:Up>Transmit. The ISO15118Chrg shall also start the timer `ISO15118ChrgV2G_EVCC_Msg_Timer` when it sends the 'Request' message.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
If there is an error during the V2GTP formatting process, then the ISO15118Chrg shall inform the upper layer with an error message and shall stop the V2G session, and go to the state `ISO15118Chrg_Init`.
⌋

### 27. Reception of Charging 控制 Messages
*原文标题：Reception of Charging Control Messages*

General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
Upon reception of message from the lower layer, the ISO15118Chrg shall perform header checks in accordance with the V2GTP as mentioned in .
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
If the header checks are successful and the response code starts with 'OK', and all timeouts are respected, then the ISO15118Chrg shall:

* Decode received EXI encoded message,
* Reset the timer `ISO15118ChrgV2G_EVCC_Msg_Timer`,
* Send the complete message (header + payload) to the upper layer,
* Wait for the next message to be triggered
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
If timeouts are respected and the header checks are unsuccessful then the ISO15118Chrg shall:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. ISO15118Chrg Connection Setup

General Requirement
  Status: DRAFT
  Upstream requirements: , ,
⌈
The ISO15118Chrg controls the state machine as given in Figure which shall contain the following states:

* Init : Initialization of the ISO15118Chrg module.
* Assigning IP address : Initiates the process of assigning IP address..
* Discovering SECC : ISO15118Chrg establishing UDP connection and discovering the SECC IP address and Port number.
* Establishing TCP-TLS : ISO15118Chrg establishing TCP-TLS connection.
* Establishing V2G Session : ISO15118Chrg establishing V2G session.
* V2G Session Ongoing : ISO15118Chrg in V2G session.
* V2G Session Paused : ISO15118Chrg pausing V2G session.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
The ISO15118Chrg shall move to the state Init when a call to `ISO15118Chrg_Init` is made.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
While the ISO15118Chrg is in the state Init, if:

* `ISO15118Chrg_DataLinkIndication` is called with '`ETHTRCV_LINK_STATE_ACTIV`', and
* The operation SetChargeState is called with parameter StateMachine control set to '`ISO15118_START`',

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. ISO15118Chrg Charging 控制 Messages
*原文标题：ISO15118Chrg Charging Control Messages*

The ISO15118Chrg has two sets of messages to control AC and DC charging. It also offers two different sets of messages depending on whether EiM or PnC is selected as a payment method.

### 30. 通用控制 Messages
*原文标题：General Control Messages*

The message set for AC charging EiM is as follows:

The message set for AC charging PnC is as follows:

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
Through the operation ServiceDiscoveryParams, the message 'ServiceDiscoveryReq' shall be triggered while the ISO15118Chrg is in the state V2G Session Ongoing. Then the ISO15118Chrg shall proceed as per requirements , , , . The ISO15118Chrg shall wait for the response message.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
Upon reception of the response message 'ServiceDiscoveryRes', the ISO15118Chrg shall proceed per the requirements mentioned , , , , .
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
Once the message 'ServiceDiscoveryRes' has been processed succesfully, a call to the operation ServiceDetailParams, shall trigger the message 'ServiceDetailReq'. Then the ISO15118Chrg shall proceed as per requirements , ,  to . The ISO15118Chrg shall wait for the response message.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
Upon reception of the response message 'ServiceDetailRes', the ISO15118Chrg shall proceed per the requirements mentioned , , , , .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 控制 Messages for AC Charging
*原文标题：Control Messages for AC Charging*

General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
If the parameter EVSEProcessing is set to Finished in the response message 'ChargeParameterDiscoveryRes', and the response message was succesfully processed as per the requirements mentioned , , , , , then the request message 'PowerDeliveryReq' shall be triggered through the operation PowerDeliveryParams. Then the ISO15118Chrg shall proceed as per requirements , ,  to . The ISO15118Chrg shall wait for the response message.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
Upon reception of the message 'PowerDeliveryRes', the ISO15118Chrg shall proceed as per requirements mentioned , , , , . If the response message is succesfully processed, then the message 'ChargeStatusReq' shall be triggered through the operation ChargingStatusParams. Then the ISO15118Chrg shall proceed as per requirements , ,  to . The ISO15118Chrg shall wait for the response message.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
Upon reception of the message 'ChargeStatusRes', the ISO15118Chrg shall proceed as per requirements mentioned , , , , .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 控制 Messages for DC Charging
*原文标题：Control Messages for DC Charging*

The message set for DC charging EiM is as follows:

The message set for DC charging PnC is as follows:

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
After succesfully processing the response message 'ChargeParameterDiscoveryRes', the message 'CableCheckReq' shall be triggered through the operation CableCheckParams. Then the ISO15118Chrg shall proceed as per requirements , ,  to . The ISO15118Chrg shall wait for the response message.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
Upon reception of the message 'CableCheckRes', the ISO15118Chrg shall proceed as per requirements mentioned , , , , . If the response message is succesfully processed, and if it contains the parameter EVSEProcessing set to Ongoing, then the message 'CableCheckReq' shall be sent again.
⌋

 General Requirement
  Status: DRAFT
  Upstream requirements:
⌈
The ISO15118Chrg shall trigger the timer `V2G_EVCC_Ongoing_Timer` if the paramater EVSEProcessing is set to Ongoing upon reception of the first 'CableCheckRes' message, and wait for parameter EVSEProcessing equal to Finished.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 34. Development 错误
*原文标题：Development Errors*

Definition of development errors in module ISO15118Chrg
  Status: DRAFT
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API service called before initializing the module | ISO15118CHRG_E_UNINIT | 0x01 |
| API service called with NULL pointer | ISO15118CHRG_E_PARAM_POINTER | 0x02 |
| Invalid argument | ISO15118CHRG_E_INV_ARG | 0x03 |
| Invalid configuration set selection | ISO15118CHRG_E_INIT_FAILED | 0x06 |

⌋

### 35. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module ISO15118Chrg
  Status: DRAFT
  Upstream requirements:
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| No buffer space available | ISO15118CHRG_E_NOBUFS | 0x07 |

⌋

### 36. Production 错误
*原文标题：Production Errors*

No production errors.

### 37. Extended Production 错误
*原文标题：Extended Production Errors*

No extended production errors.

### 38. 安全事件
*原文标题：Security Events*

The module does not report any security events.

### 39. API 规范
*原文标题：API specification*

Note: Chapters 8 and 9 are available at the following link:

### 40. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following files are listed.

 Definition of imported datatypes of module ISO15118Chrg
  Status: DRAFT
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| BswM | BswM.h | BswM_ModeType |
| ^ | BswM.h | BswM_UserType |
| Comtype | ComStack_Types.h | BufReq_ReturnType |
| ^ | ComStack_Types.h | PduIdType |
| ^ | ComStack_Types.h | PduInfoType |
| ^ | ComStack_Types.h | PduLengthType |
| ^ | ComStack_Types.h | RetryInfoType |
| ^ | ComStack_Types.h | TpDataStateType |
| Csm | Rte_Csm_Type.h | Crypto_OperationModeType |
| ^ | Rte_Csm_Type.h | Crypto_VerifyResultType |
| EthTrcv | Eth_GeneralTypes.h | EthTrcv_LinkStateType |
| KeyM | KeyM.h | KeyM_CertDataType |
| ^ | Rte_KeyM_Type.h | KeyM_CertElementIdType |
| ^ | Rte_KeyM_Type.h | KeyM_CertificateIdType |
| ^ | Rte_KeyM_Type.h | KeyM_ServiceCertificateType |
| SoAd | SoAd.h | SoAd_SoConIdType |
| ^ | SoAd.h | SoAd_SoConModeType |
| Std | Std_Types.h | Std_ReturnType |
| TcpIp | TcpIp.h | TcpIp_DomainType |
| ^ | TcpIp.h | TcpIp_IpAddrAssignmentType |
| ^ | TcpIp.h | TcpIp_IpAddrStateType |
| ^ | TcpIp.h | TcpIp_LocalAddrIdType |
| ^ | TcpIp.h | TcpIp_ReturnType |
| ^ | TcpIp.h | TcpIp_SockAddrType |

⌋

### 41. 类型定义
*原文标题：Type definitions*

### 42. ISO15118Chrg_ConfigType

Definition of datatype `ISO15118Chrg_ConfigType`
  Status: DRAFT
  Upstream requirements: ,
⌈
| Name | ISO15118Chrg_ConfigType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Description | This is the type of the data structure containing the initialization data for COM. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | Rte_ISO15118Chrg.h | < |

⌋

### 43. ISO15118Chrg_AC_EVChargeParameterType

Definition of ImplementationDataType `ISO15118Chrg_AC_EVChargeParameterType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_AC_EVChargeParameterType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | DepartureTime | < |
| ^ | Type | uint32 |
| ^ | Comment | This element is used to indicate when the vehicle intends to finish the charging process. Offset in seconds from the point in time of sending this message. |
| ^ | EAmount | < |
| ^ | Type | ISO15118Chrg_PhysicalValueType |
| ^ | Comment | Amount of energy reflecting the EV's estimate how much energy is needed to fulfill the user configured charging goal for the current charging session. This might include energy for other purposes than solely charging the HV battery of an EV. |
| ^ | EVMaxVoltage | < |
| ^ | Type | ISO15118Chrg_PhysicalValueType |
| ^ | Comment | The RMS of the maximal nominal voltage the vehicle can accept, measured between one phase and neutral. |
| ^ | EVMaxCurrent | < |
| ^ | Type | ISO15118Chrg_PhysicalValueType |
| ^ | Comment | Maximum current supported by the EV per phase. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. ISO15118Chrg_AC_EVSEChargeParameterType

Definition of ImplementationDataType `ISO15118Chrg_AC_EVSEChargeParameterType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_AC_EVSEChargeParameterType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | AC_EVSEStatus | < |
| ^ | Type | ISO15118Chrg_AC_EVSEStatusType |
| ^ | Comment | Current status of the EVSE |
| ^ | EVSENominalVoltage | < |
| ^ | Type | ISO15118Chrg_PhysicalValueType |
| ^ | Comment | Line voltage supported by the EVSE. This is the voltage measured between one phases and neutral. If the EVSE supports multiple phase charging the EV might easily calculate the voltage between phases. This parameter is also used as reference for calculating the corresponding maximum charging current out of the PMax values in the SASchedule entities. |
| ^ | EVSEMaxCurrent | < |
| ^ | Type | ISO15118Chrg_PhysicalValueType |
| ^ | Comment | Maximum allowed line current restriction set by the EVSE per phase. If the PWM ratio is set to 5% ratio then this is the only line current restriction processed by the EVCC. Otherwise, the EVCC applies the smaller current constraint from the EVSEMaxCurrent value and the PWM ratio information. |
| Description | A structure having elements as per ISO15118-2 |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. ISO15118Chrg_AC_EVSEStatusType

Definition of ImplementationDataType `ISO15118Chrg_AC_EVSEStatusType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_AC_EVSEStatusType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | RCD | < |
| ^ | Type | boolean |
| ^ | Comment | Indicates the current status of the Residual Current Device (RCD). If RCD is equal to true, the RCD has detected an error. If RCD is equal to false, the RCD has not detected an error. This status flag is for informational purpose only. |
| ^ | NotificationMaxDelay | < |
| ^ | Type | uint16 |
| ^ | Comment | This value is the time in seconds from the point in time this message is sent (relative time) and expected to perform the action immediately. The SECC uses the NotificationMaxDelay element in the EVSEStatus to indicate the time until it expects the EVCC to react on the action request indicated in EVSENotification. |
| ^ | EVSENotification | < |
| ^ | Type | ISO15118Chrg_EVSENotificationType |
| ^ | Comment | This value is used by the SECC to influence the behavior of the EVCC. The EVSENotification contains an action that the SECC wants the EVCC to perform. The requested action is expected by the EVCC until the time provided in NotificationMaxDelay. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 46. ISO15118Chrg_AppProtocolType

Definition of ImplementationDataType `ISO15118Chrg_AppProtocolType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_AppProtocolType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | ProtocolNameSpace | < |
| ^ | Type | ISO15118Chrg_ProtocolNameSpaceType |
| ^ | Comment | This message element is used by the EVCC to uniquely identify the Namespace URI of a specific protocol supported by the EVCC, i.e. this is the protocol name of the related protocol. |
| ^ | ProtocolNameSpaceLength | < |
| ^ | Type | uint8 |
| ^ | Comment | Defines the length of the ProtocolNameSpace argument. |
| ^ | VersionNumberMajor | < |
| ^ | Type | uint16 |
| ^ | Comment | This message element is used by the EVCC to indicate the major version number of the protocol indicated in the message element ProtocolNamespace. |
| ^ | VersionNumberMinor | < |
| ^ | Type | uint16 |
| ^ | Comment | This message element is used by the EVCC to indicate the minor version number of the protocol indicated in the message element ProtocolNamespace. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. ISO15118Chrg_AppProtocolType_ArrayType

Definition of ImplementationDataType `ISO15118Chrg_AppProtocolType_ArrayType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_AppProtocolType_ArrayType (draft) | < | < |
|---|---|---|---|
| Kind | Array | Element type | ISO15118Chrg_AppProtocolType |
| Size | 20 Elements | < | < |
| Description | An array of 20 elements as defined in ISO15118-2. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Variation | - | < | < |
| Available via | Rte_ISO15118Chrg.h | < | < |

⌋

### 48. ISO15118Chrg_CertificateChainType

Definition of ImplementationDataType `ISO15118Chrg_CertificateChainType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_CertificateChainType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Id | < |
| ^ | Type | ISO15118Chrg_StringType |
| ^ | Comment | This attribute is used for referencing the message element in the signature header when a signature needs to be applied. It is used in response messages only. |
| ^ | Certificate | < |
| ^ | Type | uint16 |
| ^ | Comment | An x.509v3 Certificate (the "client" certificate). The certificate is DER encoded. |
| ^ | SubCertificates | < |
| ^ | Type | ISO15118Chrg_SubCertificatesType |
| ^ | Comment | The Chain with all Subcertificates to the Root-Certificate (not including root certificate) |
| Description | A structure having elements as per ISO15118-2 |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Variation | - | < |
| Available via | Rte_ISO15118Chrg.h | < |

⌋

### 49. ISO15118Chrg_ChargeProgressType

Definition of ImplementationDataType `ISO15118Chrg_ChargeProgressType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_ChargeProgressType (draft) | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | ISO15118_Start | 0x00 | - |
| ^ | ISO15118_Stop | 0x01 | - |
| ^ | ISO15118_Renegotiate | 0x02 | - |
| Description | An enumeration having values as per ISO15118-2. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Variation | - | < | < |
| Available via | Rte_ISO15118Chrg.h | < | < |

⌋

### 50. ISO15118Chrg_ChargeServiceType

Definition of ImplementationDataType `ISO15118Chrg_ChargeServiceType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_ChargeServiceType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | ServiceId | < |
| ^ | Type | uint16 |
| ^ | Comment | This element identifies a service which has been offered by the SECC in the ServiceDiscoveryRes message. |
| ^ | ServiceName | < |
| ^ | Type | ISO15118Chrg_StringType |
| ^ | Comment | Human readable service name |
| ^ | ServiceCategory | < |
| ^ | Type | ISO15118Chrg_ServiceCategoryType |
| ^ | Comment | Category of a service, corresponds to the defined services, derived from the base service |
| ^ | ServiceScope | < |
| ^ | Type | ISO15118Chrg_ServiceScopeType |
| ^ | Comment | Additional information about usage of that service |
| ^ | ServiceScopeLength | < |
| ^ | Type | uint8 |
| ^ | Comment | Defines length of element ServiceScope. |
| ^ | FreeService | < |
| ^ | Type | boolean |
| ^ | Comment | This element is used by the SECC to indicate if a service can be used by the EVCC free of charge or not. If FreeService is equal to true, the EV can use the offered service without payment. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. ISO15118Chrg_ChargingProfileType

Definition of ImplementationDataType `ISO15118Chrg_ChargingProfileType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_ChargingProfileType (draft) | < | < |
|---|---|---|---|
| Kind | Array | Element type | ISO15118Chrg_ProfileEntryType |
| Size | 24 Elements | < | < |
| Description | An array of 24 elements. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Variation | - | < | < |
| Available via | Rte_ISO15118Chrg.h | < | < |

⌋

### 52. ISO15118Chrg_ChargingSequenceStateType

Definition of ImplementationDataType `ISO15118Chrg_ChargingSequenceStateType`
  Status: DRAFT
  Upstream requirements:
⌈
| Name | ISO15118Chrg_ChargingSequenceStateType (draft) | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | ISO15118_CS_INIT | 0x00 | - |
| ^ | ISO15118_CS_Slac | 0x01 | - |
| ^ | ISO15118_CS_AssigningIpAddress | 0x02 | - |
| ^ | ISO15118_CS_DiscoveringSecc | 0x03 | - |
| ^ | ISO15118_CS_EstablishingTcpTls | 0x04 | - |
| ^ | ISO15118_CS_SupportedAppProtocol | 0x05 | - |
| ^ | ISO15118_CS_SessionSetup | 0x06 | - |
| ^ | ISO15118_CS_ServiceDiscovery | 0x07 | - |
| ^ | ISO15118_CS_ServiceDetail | 0x08 | - |
| ^ | ISO15118_CS_ServicePaymentSelection | 0x09 | - |
| ^ | ISO15118_CS_CertificateInstallation | 0x0A | - |
| ^ | ISO15118_CS_CertificateUpdate | 0x0B | - |
| ^ | ISO15118_CS_PaymentDetails | 0x0C | - |
| ^ | ISO15118_CS_Authorization | 0x0D | - |
| ^ | ISO15118_CS_ChargeParameterDiscovery | 0x0E | - |
| ^ | ISO15118_CS_CableCheck | 0x0F | - |
| ^ | ISO15118_CS_PreCharge | 0x1A | - |
| ^ | ISO15118_CS_PowerDelivery | 0x1B | - |
| ^ | ISO15118_CS_CurrentDemand | 0x1C | - |
| ^ | ISO15118_CS_ChargingStatus | 0x1D | - |
| ^ | ISO15118_CS_MeteringReceipt | 0x1E | - |
| ^ | ISO15118_CS_WeldingDetection | 0x1F | - |
| ^ | ISO15118_CS_SessionStop | 0x |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 103 章（内容从略，见纯文本全文）

53. ISO15118Chrg_ChargingSequenceSubStateType
54. ISO15118Chrg_ChargingSessionType
55. ISO15118Chrg_ConsumptionCostType
56. ISO15118Chrg_CostKindType
57. ISO15118Chrg_CostType
58. ISO15118Chrg_DC_EVChargeParameterType
59. ISO15118Chrg_DC_EVErrorCodeType
60. ISO15118Chrg_DC_EVPowerDeliveryParameterType
61. ISO15118Chrg_DC_EVSEChargeParameterType
62. ISO15118Chrg_DC_EVSEStatusCodeType
63. ISO15118Chrg_DC_EVSEStatusType
64. ISO15118Chrg_DC_EVStatusType
65. ISO15118Chrg_eMAIDType
66. ISO15118Chrg_EnergyTransferModeType
67. ISO15118Chrg_EntryType
68. ISO15118Chrg_EVSEIdType
69. ISO15118Chrg_EVSENotificationType
70. ISO15118Chrg_IsolationLevelTypeType
71. ISO15118Chrg_MeterInfoType
72. ISO15118Chrg_ParameterSetTypeType
73. ISO15118Chrg_ParameterSetType_ArrayType
74. ISO15118Chrg_ParameterType
75. ISO15118Chrg_PaymentOptionListType
76. ISO15118Chrg_PaymentOptionType
77. ISO15118Chrg_PhysicalValueType
78. ISO15118Chrg_PmaxScheduleEntryType
79. ISO15118Chrg_PMaxScheduleType_ArrayType
80. ISO15118Chrg_PMaxScheduleTypePtr
81. ISO15118Chrg_ProfileEntryType
82. ISO15118Chrg_ProtocolNameSpaceType
83. ISO15118Chrg_RelativeTimeIntervalType
84. ISO15118Chrg_ResponseCodeType
85. ISO15118Chrg_SalesTariffEntryType
86. ISO15118Chrg_SalesTariffEntryType_ArrayType
87. ISO15118Chrg_SalesTariffType
88. ISO15118Chrg_SAScheduleListType
89. ISO15118Chrg_SAScheduleTupleType
90. ISO15118Chrg_SelectedServiceListType
91. ISO15118Chrg_SelectedServiceType
92. ISO15118Chrg_ServiceCategoryType
93. ISO15118Chrg_ServiceListType
94. ISO15118Chrg_ServiceParameterListTypePtr
95. ISO15118Chrg_ServiceScopeType
96. ISO15118Chrg_StateMachineControlType
97. ISO15118Chrg_StringType
98. ISO15118Chrg_SubCertificatesType
99. ISO15118Chrg_SupportedEnergyTransferModeType
100. ISO15118Chrg_TariffDescriptionType
101. ISO15118Chrg_UnitMultiplierType
102. ISO15118Chrg_UnitSymbolType
103. 功能定义
104. ISO15118Chrg_Init
105. ISO15118Chrg_DataLinkIndication
106. ISO15118Chrg_V2GTpCopyRxData
107. ISO15118Chrg_V2GTpCopyTxData
108. ISO15118Chrg_V2GTpLocalIpAddrAssignmentChg
109. ISO15118Chrg_V2GTpRxIndication
110. ISO15118Chrg_V2GTpSoConModeChg
111. ISO15118Chrg_V2GTpStartOfReception
112. ISO15118Chrg_V2GTpTxConfirmation
113. Scheduled functions
114. ISO15118Chrg_MainFunction_Rx
115. ISO15118Chrg_MainFunction_Tx
116. Expected 接口
117. Mandatory 接口
118. Optional 接口
119. Callout 接口
120. Configurable 接口
121. 服务接口
122. Charge Parameters
123. Charge 控制
124. Ports 接口
125. Required 服务 Port
126. Provided 服务 Port
127. 时序图
128. 数据 Link Indication
129. Start IP Address Assignment
130. SECC Discovery Process
131. Transmission
132. Reception
133. 配置规范
134. How to read this chapter
135. Containers and 配置 parameters
136. ISO15118Chrg
137. ISO15118ChrgGeneral
138. ISO15118ChrgTimer
139. ISO15118ChrgV2GTP
140. ISO15118ChrgService
141. 发布信息
142. 附录
143. Change history of AUTOSAR traceable items
144. Traceable item history of this document according to AUTOSAR Release R25-11
145. Added 规范 Items in R25-11
146. Changed 规范 Items in R25-11
147. Deleted 规范 Items in R25-11
148. Traceable item history of this document according to AUTOSAR Release R24-11
149. Added 规范 Items in R24-11
150. Changed 规范 Items in R24-11
151. Deleted 规范 Items in R24-11
152. Traceable item history of this document according to AUTOSAR Release R23-11
153. Added 规范 Items in R23-11
154. Changed 规范 Items in R23-11
155. Deleted 规范 Items in R23-11
