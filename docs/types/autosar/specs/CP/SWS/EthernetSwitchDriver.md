# Specification of Ethernet Switch Driver (`EthernetSwitchDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 656 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_EthernetSwitchDriver_656\AUTOSAR_CP_SWS_EthernetSwitchDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_EthernetSwitchDriver_656\AUTOSAR_CP_SWS_EthernetSwitchDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_EthernetSwitchDriver_656\zzgen\CP_SWS_EthernetSwitchDriver.complete.txt`

## 文档简介

In the AUTOSAR Layered Software Architecture , the Ethernet Switch Driver belongs to the Communication Hardware Abstraction.

This indicates the main task of the Ethernet Switch Driver:

Provide to the upper layers (e.g. Ethernet Interface ) a hardware independent interface comprising a switch with several ports. This interface shall be uniform for all Ethernet switches. Thus, the upper layers may access the underlying communication technology in a uniform manner.

A single Ethernet Switch Driver module supports only one type of switch hardware. The Ethernet physical layer ports are configured by the Ethernet Transceiver Driver. The Ethernet Switch Driver's prefix generates a unique namespace. The Ethernet Interface can access different Ethernet controller types using different Ethernet Switch Drivers using this prefix. The decision which driver to use to access a particular transceiver is a configuration parameter of the Ethernet Interface.

 depicts the lower part of the Ethernet stack. Accesses via an SPI- and MII/MDIO-Hardware-Interface for switch specific configuration or functions are done via the Ethernet Driver  or the SPI driver .

## 模块依赖

This chapter lists the modules interacting with the Ethernet Switch Driver module.

Modules that use the Ethernet Switch Driver module:

* Ethernet Interface (EthIf) calls the Ethernet Switch driver for initializing and accessing the switch device.

Modules used by the Ethernet Switch Driver module:

* Ethernet Transceiver Driver (EthTrcv) through the abstraction API provided by the Ethernet Interface (EthIf) for configuring and controlling external transceivers connected to the switch.
* Ethernet Controller Driver (Eth) through the abstraction API provided by the Ethernet Interface (EthIf) for communicating with the switch if it is managed through MDIO.
* Spi Driver (Spi) for communicating with the switch if the switch is managed through an SPI interface.

Dependencies to other Modules:

* On certain systems the Ethernet switch might share resources with other components, and may depend on their configuration. If those resources are within the scope of other modules (e.g. PLL configuration, memory mapping, etc.) the Ethernet Switch Driver module does not take care of configuring those components but requires their preceding initialization.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

In the AUTOSAR Layered Software Architecture , the Ethernet Switch Driver belongs to the Communication Hardware Abstraction.

This indicates the main task of the Ethernet Switch Driver:

Provide to the upper layers (e.g. Ethernet Interface ) a hardware independent interface comprising a switch with several ports. This interface shall be uniform for all Ethernet switches. Thus, the upper layers may access the underlying communication technology in a uniform manner.

A single Ethernet Switch Driver module supports only one type of switch hardware. The Ethernet physical layer ports are configured by the Ethernet Transceiver Driver. The Ethernet Switch Driver's prefix generates a unique namespace. The Ethernet Interface can access different Ethernet controller types using different Ethernet Switch Drivers using this prefix. The decision which driver to use to access a particular transceiver is a configuration parameter of the Ethernet Interface.

 depicts the lower part of the Ethernet stack. Accesses via an SPI- and MII/MDIO-Hardware-Interface for switch specific configuration or functions are done via the Ethernet Driver  or the SPI driver .

### 2. Acronyms, abbreviations and definitons

The glossary below includes acronyms, abbreviations and definitions relevant to the Ethernet Switch Driver module that are not included in the .

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

| Acronym / Abbreviation: | Description: |
|---|---|
| ARL | Address resolution table. The table contains the (VLAN-specific) MAC address to Ethernet switch port mapping, i.e., for SVL the MAC address to port mapping is learnt and stored as an ARL entry in the ARL table, while for IVL the combination of MAC address and VLAN is associated with a single ARL entry upon learning. |
| EcuM | ECU State Manager module |
| Eth | Ethernet Controller Driver (AUTOSAR BSW module) |
| EthIf | Ethernet Interface (AUTOSAR BSW module) |
| EthTrcv | Ethernet Transceiver Driver (AUTOSAR BSW module) |
| IVL | Independent VLAN learning defined by |
| MII | Media Independent Interface (standardized interface provided by Ethernet controllers to access Ethernet transceivers) |
| MDIO | Management Data Input/Output |
| OA TC10 | Open Alliance TC10 specification (see ) |
| SVL | Shared VLAN learning defined by |

### 4. 定义
*原文标题：Definitions*

### 5. Ethernet packet

Definition: An "Ethernet packet" is an on-wire format defined by  which includes the following parts: Preamble (7 bytes), SFD (start frame delimiter, 1 byte), Ethernet frame (up to 2000 bytes))

### 6. Ethernet frame

Definition: An "Ethernet frame" is on-wire format defined  which includes the following parts: MAC destination address field (6 bytes), MAC source address field (6 bytes), Type field (2 bytes), MAC client data field (inlcude optional Q-Tag (4 bytes)) (up to 1982 bytes), optional PAD (padding bytes), FCS (frame check sequence, 4 bytes)

### 7. Stream

Definition: A "stream" represent multiple Ethernet frames which are grouped by similar frame attributes (e.g. MAC source address)

### 8. Stream identification

Definition: The term "Stream identification" is derived from  and represent the functionality to identify received Ethernet frames based on a particular set of frame attributes. Frames carrying different sets of frame attributes can only be identified with a single stream

### 9. 相关文档
*原文标题：Related documentation*

### 10. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 11. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software  which is also valid for Ethernet Switch Driver.

Thus, the specifications  , `SRS_Ethernet`  shall be considered as additional and required specification for Ethernet Switch Driver.

### 12. 约束与假设
*原文标题：Constraints and assumptions*

### 13. Constraints

The following constraints have to be considered:

* The Ethernet switch driver module is only able to handle a single thread of execution. The execution must not be pre-empted by itself.
* The implementation is limited to 10Mbit/s, 100MBit/s, 1000Mbit/s, 2.5Gbit/s, 5Gbit/s and 10Gbit/s Ethernet bandwidth and to PHYs connected via (gigabit) Media Independent Interface (xMII).
* External MACPHY connected with an Ethernet switch over SPI are not supported.
* The Ethernet switch driver do only support VLAN-aware Ethernet switches
* The Ethernet switch driver support only passive stream identification. Active stream identification is not supported and therefore features like frame replication are not supported
* Stream identification is considered in the out-facing. Thus, stream identification is applied only at ingress side
* The Ethernet switch driver support only a subset of the IEEE specified forwarding process in an Ethernet switch.  give an overview which IEEE specfied forwarding processing steps are covered by AUTOSAR:

| IEEE specified bridge execution order | Coverage by AUTOSAR |
|---|---|
| Default priority assignment (:13.1) | n/a |

Placeholder MacSEC (incl.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Assumptions

The following assumptions have to be considered

* Depending on the Ethernet hardware, it may become necessary that implementations deviate from API specifications in respect to the asynchronous/synchronous behavior.

### 15. 适用的车型领域
*原文标题：Applicability to car domains*

The Ethernet BSW stack is intended to be used wherever high data rates are required but no hard real-time is required. Of course, it can also be used for less-demanding use cases, i.e. for low data rates.

### 16. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This chapter lists the modules interacting with the Ethernet Switch Driver module.

Modules that use the Ethernet Switch Driver module:

* Ethernet Interface (EthIf) calls the Ethernet Switch driver for initializing and accessing the switch device.

Modules used by the Ethernet Switch Driver module:

* Ethernet Transceiver Driver (EthTrcv) through the abstraction API provided by the Ethernet Interface (EthIf) for configuring and controlling external transceivers connected to the switch.
* Ethernet Controller Driver (Eth) through the abstraction API provided by the Ethernet Interface (EthIf) for communicating with the switch if it is managed through MDIO.
* Spi Driver (Spi) for communicating with the switch if the switch is managed through an SPI interface.

Dependencies to other Modules:

* On certain systems the Ethernet switch might share resources with other components, and may depend on their configuration. If those resources are within the scope of other modules (e.g. PLL configuration, memory mapping, etc.) the Ethernet Switch Driver module does not take care of configuring those components but requires their preceding initialization.

### 17. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  as well as  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Hardware-Accelerated Filtering Support |  |  |
| Configure which Ethernet ports use MACsec |  |  |
| All software modules shall provide version and identification information |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| The AUTOSAR Basic Software shall provide a microcontroller abstraction layer which provides a standardized interface to higher software layers |  |  |
| The AUTOSAR Basic Software shall provide a hardware abstraction layer |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| A Naming seperation of different instances of BSW drivers shall be in place |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and re |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 功能规范
*原文标题：Functional specification*

### 19. Ethernet BSW stack

As part of the AUTOSAR Layered Software Architecture according to , the Ethernet BSW modules also form a layered software stack.

 depicts the basic Ethernet BSW stack. The EthIf module accesses several switches using one or more Ethernet Switch Driver modules. The role of the Ethernet transceiver driver is to configure and control the physical layer ports (PHY) integrated into or connected to a switch. Whereas, the role of the Ethernet switch driver is the configuration and control of the switch. In case the Ethernet interface wants to access a PHY, it has to use the APIs of the switch driver which forward the API call to the addressed transceiver driver using the EthIf driver abstraction.

By separating the transceiver driver from the switch driver, different hardware architectures will be supported. In HW-Variant 1, the PHYs are separate devices from different vendors. They are connected via MII and MDIO to a switch which is integrated into a microcontroller. In HW-Variant 2, the switch has integrated PHYs. In HW-Variant 3, the microcontroller can control the switch via MDIO or SPI and the switch has three external PHYs which can be controlled via MDIO.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Indexing scheme

Users of the Ethernet Switch Driver identify switch resources using an indexing scheme as depicted in .

  Upstream requirements: ,
⌈
The Ethernet Switch Driver shall use a zero-based index to abstract the access for upper software layers.
⌋

  Upstream requirements: ,
⌈
The SwitchPortIdx is an index for a port at the switch.
⌋

  Upstream requirements:
⌈
The parameter EthSwtIdx within the configuration shall correspond to the argument used in the API.
⌋

  Upstream requirements: , ,
⌈
The parameter EthSwtIndex shall be used to distinguish different instances of a switch driver module in case the API `Det_ReportError`(uint16 ModuleId, uint8 InstanceId, uint8 ApiId, uint8 ErrorId) is called.
⌋

  Upstream requirements: ,
⌈
In case different Switch devices are used in one ECU, the function names of the different Ethernet Switch drivers must be modified such that no two functions with the same names are generated. It is the responsibility of the user to take care that no two functions with the same names are configured. The names may be extended with a vendor ID or a type ID.
⌋

### 21. Ethernet Switch Port Mirroring

Ethernet switch port mirroring use the common established functionality of the Ethernet switch hardware to mirror traffic of one or more Ethernet switch ports (mirrored port) to a another Ethernet switch port (capture port). The mirroring configuration is given by the port mirror configuration (see ). The port mirror configuration is set up per Ethernet switch. The configuration is stored persistently by the Ethernet switch driver. Therefore a shadow buffer is used to store the port mirror configuration during runtime and stored persistently according to the NvM storing strategy (e.g. store the shadow buffer persistently upon ECU shutdown). The port mirror configuration could be activated and de-activated, respectively, explicitly via dedicated APIs. The port mirroring is controlled by a dedicated diagnostic CDD with receive diagnostic request and forward them to the Ethernet switch driver.

  Upstream requirements:
⌈
The port mirror configuration (see  ) shall be written to a shadow buffer of the Ethernet switch driver per Ethernet Switch by calling `EthSwt_WritePortMirrorConfiguration`.
⌋

Note: One port mirror configuration is maintained per Ethernet switch.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 状态处理
*原文标题：State Handling*

⌈
All functions apart from `EthSwt_SetSwitchPortMode`, `EthSwt_GetSwitchPortMode`, `EthSwt_StartSwitchPortAutoNegotiation`, `EthSwt_GetLinkState`, `EthSwt_GetBaudRate`, `EthSwt_GetDuplexMode`, `EthSwt_ReadTrcvRegister`, `EthSwt_WriteTrcvRegister`, `EthSwt_Init`, `EthSwt_MainFunction` and `EthSwt_BackgroundTask` may only be called in state `ETHSWT_STATE_ACTIVE`.

If a function which can only run (succeed with E_OK) in the states `ETHSWT_STATE_PORTINIT_COMPLETED` and `ETHSWT_STATE_ACTIVE` is called before state `ETHSWT_STATE_PORTINIT_COMPLETED` is reached, the Ethernet switch driver shall raise the runtime error `ETHSWT_INIT_NOT_COMPLETED`.
⌋

⌈
`ETHSWT_STATE_PORTINIT_COMPLETED` shall be reached as soon as the port initialization has finished.
⌋

Note: `ETHSWT_STATE_PORTINIT_COMPLETED` can be reached either by the function `EthSwt_Init` or by a background task (see ).

⌈
`ETHSWT_STATE_ACTIVE` shall be reached, when the Ethernet switch initialization has finished.
⌋

Note: The initialization of the Ethernet switch takes longer than the initialization of the Ethernet switch ports.

### 23. cable 诊断的处理
*原文标题：Handling of cable diagnostic*

Cable diagnostic measurement is triggered by calling `EthSwt_RunPortCableDiagnostic`. The current state of the cable diagnostic measurement is polled by calling `EthSwt_GetPortCableDiagnosticsResult`. If `EthSwt_GetPortCableDiagnosticsResult` return with other value then `ETHTRCV_CABLEDIAG_PENDING`, then the cable diagnostic has finished.

Its up to the caller to re-trigger cable diagnostic again, if the measurement failed by returning `ETHTRCV_CABLEDIAG_ERROR`.

⌈
The cable diagnostic APIs (`EthSwt_RunPortCableDiagnostic`, `EthSwt_GetPortCableDiagnosticsResult`) shall only be called for Ethernet switch ports of a Ethernet switch, where the Ethernet switch ports reference an Ethernet transceiver.
⌋

Note: The upper layer is a CDD that triggers the cable diagnostic measurement and maintains the cable diagnostic result. The EthSwt forwards the API calls to the EthTrcv using the EthIf driver API abstraction (see  and ).

### 24. 支持 of frame preemption
*原文标题：Support of frame preemption*

The EthSwt driver module supports the configuration of frame preemption per EthSwtPort (see ), if the Ethernet switch hardware support the functionality. By default it is assumed that Ethernet switch hardware is not supposed to perform or not even capable of frame preemption, thus EthSwtFramePreemptionEnable is set to FALSE on all EthSwtPorts.

 Ethernet switch hardware support for frame preemption
  Status: DRAFT
⌈
If and only if an Ethernet switch hardware supports frame preemption, then it shall be allowed to set EthSwtFramePreemptionEnable to TRUE per EthSwtPort.
⌋

 Frame preemption enabling per EthSwtPort
  Status: DRAFT
⌈
If EthSwtFramePreemptionEnable is set to TRUE for an EthSwtPort, then frame preemption handling shall be enabled on ingress and on egress, for this EthSwtPort. Otherwise frame preemption handling shall be disabled for this EthSwtPort.
⌋

Note: On a EthSwtPort that has frame preemption handling enabled, preemptable Ethernet frames can be preempted on egress by interspersing express Ethernet frames.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Interaction with the Firewall 模块
*原文标题：Interaction with the Firewall module*

The Ethernet frame inspection with per-stream filtering can be supported by the AUTOSAR firewall module to perform more advanced inspection techniques like stateful packet inspection and deep packet inspection. This chapter describes the functionality required by the Firewall module in the EthSwt driver to perform efficient Ethernet frame inspection and filtering supported by per-stream filtering. More details about the interaction between the firewall module and per-stream filtering can be found in `CP_SWS_Firewall`.

Extraction of StreamHandleIdentifier from Ethernet frame When an Ethernet frame is passed to the firewall for inspection, it has already passed the inspection by per-stream filtering. The firewall needs to know the per-stream filtering filter rule that allows the Ethernet frame to pass. This filter rule is modeled by the StreamHandleIdentifier in the EthSwt driver. The value of the StreamHandleIdentifier can be added by the switch core to the Ethernet frame by modifying the Ethernet frame header and adding Ethernet frame meta information to the network packet. This meta information is however not standardized and depends on the switch vendor.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 功能性描述
*原文标题：Functional Description*

### 27. Learning Phase at Start-up

Upstream requirements:
⌈
The switch driver shall support a learning phase which can be divided into several sequential steps.
⌋

Note: After assembly and initial power-up of the network, three learning phases follow which include MAC-Learning and IP-Address Assignment. Afterwards the learned parameters are stored to one or several non-volatile memories to make them available for subsequent start-ups. This process is shown in . As an example for triggering this process, the DCM receives a diagnostic request via a bus system or a broadcast message in the Ethernet network. This diagnostic request can be forwarded to an SWC which triggers the auto-configuration process. However, the trigger is not part of this specification.

MAC-Learning (Optional Step): In this phase, messages need to be sent through the network and the switch will learn new MAC addresses (cf.  or ). These MAC-addresses will be stored in addition to predefined addresses, e.g. multicast MAC addresses which are configured during the vehicle network design. If static learning is executed, i.e. MAC address will be persistently stored, it might be possible to add dynamically learned entries in the tables.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Frame forwarding process

As shown in , the Ethernet switch consists of a certain number of Ethernet switch ports. A single physical Ethernet port is logically divided in an ingress port and an egress port. A frame is received by an Ethernet switch port in the role of an ingress port. This frame is processed within the Ethernet switch and most likely forwarded to one or more Ethernet switch ports in the role of an egress port. This process is called the "frame forwarding process". A frame forwarding process considers among others the follwoing points:

* An Ethernet frame is typically not forwarded to the Ethernet switch port where it has been received.
* A unicast Ethernet frame could be forwarded to exactly one egress port. (Please note, for some reasons (e.g. mirroring or unkown unicast Ethernet frame) a unicast Ethernet frame may forwarded to multiple egress ports)
* A multicast Ethernet frame (e.g. SOME/IP-SD offer frame) could be forwarded to one or more egress ports.
* A broadcast Ethernet frame (e.g. ARP frame) is forwarded to all egress ports except the Ethernet switch port from where the frame has been received.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Ensure VLAN-ID and priority availability

AUTOSAR Ethernet switches are exclusively VLAN-aware (refer to chapter ). If an Ethernet frame is received, then an AUTOSAR Ethernet switch ensures the availability of a VLAN-ID and a priority for this Ethernet frame before forwarding to the next processing stage. Therefore the so-called "frame type acceptance filter", "port-based VLAN classification" and "priority-code-point decoding" is performed by an Ethernet switch. The following chapters describe how to ensure VLAN-ID and priority availability.

### 30. 处理 of untagged Ethernet frames
*原文标题：Handling of untagged Ethernet frames*

Ethernet frames carrying a TPID set to 0x8100 are considered as tagged Ethernet frames, i.e. they carry a VLAN-tag. For Ethernet frames which are received without an VLAN-tag, a specific Ethernet switch handling could be configured via the AUTOSAR Ethernet switch driver.

There are two ways to handle untagged Ethernet frames at ingress side:

* Drop all untagged Ethernet frames at ingress side of the Ethernet port where the Ethernet frame was received
* Tag all untagged Ethernet frames at ingress side with a default VLAN and default VLAN priority.

Note: The handling of untagged Ethernet frames by the Ethernet switch is expected to be performed before all other modifications of the VLAN (e.g. VLAN modification). This applies also for the VLAN priority handling, which is expected to be performed before a Traffic Class assignement (see subsequential chapters) is done.

Basically, an Ethernet switch tag all Ethernet frames internally for its internal processing with hardware specific default value for a VLAN-tag. This hardware specific default value can be overwritten via EthSwtPortIngressDefaultVlan and EthSwtPortIngressDefaultPriority per Ethernet switch port

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 处理 of double tagged Ethernet frames
*原文标题：Handling of double tagged Ethernet frames*

AUTOSAR support to configure the handling for so-called "double tagged" Ethernet frames per Ethernet switch. Double tagged Ethernet frames contain two VLAN-tags. The first tag is called "S-TAG" (service provider tag) and the second tag is called "C-TAG" (customer tag). Per default the forwarding of double tagged frames is supported. In the forwarding process the S-TAG is considered. For some use cases it is necessary to avoid handdling of such Ethernet frames. Therefore a boolean parameter EthSwtDropDoubleTagged is available. The Ethernet Switch Driver supports a configuration of dropping double tagged frames via the configuration parameter EthSwtDropDoubleTagged, if the Ethernet switch hardware supports dropping of double tagged Ethernet frames.

  Upstream requirements:
⌈
If parameter EthSwtDropDoubleTagged is set to TRUE, double tagged Ethernet frames shall be dropped independent on which Ethernet switch port this Ethernet frame has been received.
⌋

Note: Dropping of double tagged Ethernet frames depend on the configuration of the TPID for the outer VLAN-tag.

### 32. Priority-Code-Point-Regeneration

If an Ethernet frame pass the processing stage to ensure VLAN-ID and priority availability, then the co-called "priority regeneration" is performed. This processing step is mandatory and will always be executed. The PCP-field (priority code point) within an VLAN-tag of an received Ethernet frame can be modified at an ingress port of an Ethernet switch. For this purpose a so-called priority regeneration table has to be defined:

| Ingress PCP | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|---|
| Regenerated PCP | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

  Status: DRAFT
  Upstream requirements:
⌈
If an Ethernet frame is forwarded within an Ethernet switch, then the Ethernet switch shall perform a PCP regeneration for the PCP of this Ethernet frame by considering the configured priority regeneration table (see EthSwtPortPriorityRegeneration,EthSwtPortPriorityRegenerationIngressPCP and EthSwtPortPriorityRegenerationRegeneratedPriority) available at the EthSwtPortIngress, where this Ethernet frame was received.
⌋

Please note: If no modification is required, than the PCP ingress and PCP regenerated should have the same value.

### 33. Stream identification

If an Ethernet frame pass the "priority-code-point regeneration" than a so-called "stream identification" could be performed by an Ethernet switch, if this processing stage is configured. Otherwise the Ethernet switch forward the Ethernet frame to the next processing stage "ingress filtering".

 defines stream identification. A stream identification is the mandatory pre-condition to perform "per-stream filtering and policing" in a later processing stage. The stream identification function is used to identify a Ethernet frame according particular Ethernet frame attributes. If the Ethernet frame match, then a so-called "stream handle id" is assigned to the Ethernet frame. Therefore the stream handle id is added to Ethernet frame meta information. If the Ethernet frame reaches the processing stage "per-stream filtering and policing", then this stream handle id is used to find a corresponding EthSwtStreamFilterEntry to perform e.g. a flow metering.

If the Ethernet switch HW supports this feature, then it can be configured by using the sub container EthSwtStreamIdentificationTable.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Stream identification and filter rules

An EthSwtStreamIdentificationEntry has always a filter rule configured (EthSwtStreamFilterRule). EthSwtStreamFilterRule defines which parts of a received Ethernet frame are considered for the filtering (e.g. MAC source address, IP destination address a.s.o). The EthSwtStreamFilterRule could contain multiple filter rules. One particular filter rule (e.g. EthSwtStreamFilterMACDestAddress) is called a "filter rule primitive".

  Status: DRAFT
  Upstream requirements:
⌈
If an EthSwtStreamFilterRule have multiple filter rule primitives configured (e.g. EthSwtStreamFilterMACSrcAddress and EthSwtStreamFilterVlanId), then the filter rule primitives shall be considered as AND-linked filter rules.
⌋

Note: A received Ethernet frame (i.e. stream) matches the filter, if all configured filter rule primitives are matches. E.g. if EthSwtStreamFilterMACSrcAddress and EthSwtStreamFilterVlanId is configured, then a stream matches, if the source MAC address AND the VLAN-ID match the defined values. A stream where for example only the EthSwtStreamFilterMACSrcAddress matches is considered as NOT matching Ethernet frame.

  Status: DRAFT
  Upstream requirements:
⌈
If a Ethernet frame (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Stream identification and filter action

An EthSwtStreamIdentificationEntry could define a filter action (EthSwtStreamFilterAction). The filter action describe the expected behaviour, if a matching stream has been detected. A filter action always refer to the filter rule of the same EthSwtStreamIdentificationEntry.

  Status: DRAFT
  Upstream requirements:
⌈
If a Ethernet frame (i.e. stream) has been qualified as matching stream and an EthSwtStreamFilterAction is configured, then this filter action shall be applied on this Ethernet frame.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If a filter action is applied on a Ethernet frame (i.e. stream) and the corresponding EthSwtStreamFilterAction has EthSwtStreamFilterActionDropFrame set to TRUE, then this Ethernet frame shall be dropped.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If a filter action is applied on a Ethernet frame (i.e. stream) and the corresponding EthSwtStreamFilterAction EthSwtStreamFilterActionBlockSource set to TRUE, then this Ethernet frame and all sub sequential receptions of Ethernet frames with the same source MAC address shall be blocked.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
If a filter action is applied on a Ethernet frame (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Ingress 过滤
*原文标题：Ingress filtering*

If an Ethernet frame pass the "priority-code-point regeneration" and the optional "stream identification" frame processing stage, then a so-called ingress filtering is performed by an Ethernet switch. The following sub chapters describe the details of the processing.

### 37. Vlan-Membership

For each Ethernet switch port a VLAN membership could be defined. An Ethernet switch port could be member of 0..* VLANs. The VLAN membership impacts the frame processing. A VLAN Membership describes ingress and egress behavior in terms of filtering, tagging or untagging.

### 38. Vlan-Membership - ingress implications

If an Ethernet frame has been received, then the Ethernet switch inspect the frame regarding a VLAN-tag. If an VLAN-tag within the received Ethernet frame exist, the Ethernet switch evaluates the received VLAN identifier (VLAN-ID). If the Ethernet switch port from where the Ethernet frame has been received is member of the VLAN which is associated with the received VLAN-ID, then the frame processing will continue, otherwise the frame is discarded and no further frame processing will be performed. Thus, all supported VLAN-IDs are configured in EthSwtVlanMembership.

Please note: VLAN-membership ingress handling is performed in ingress processing stage "ingress filtering" as shown in .

  Status: DRAFT
  Upstream requirements:
⌈
If an Ethernet switch port, from where the Ethernet frame has been received, is member of the VLAN according to the configuration of EthSwtVlanMembership and the VLAN-ID of the received Ethernet match to the configured VLAN membership of this Ethernet switch port, then the frame processing shall continue, otherwise the Ethernet frame shall be discarded and frame processing aborted.
⌋

### 其余 213 章（内容从略，见纯文本全文）

39. Vlan-Membership - egress implications
40. VLAN-modification at ingress side
41. Priority 处理
42. Internal priority value
43. Frame 过滤
44. Egress 过滤
45. Per-stream 过滤 and policing
46. Queueing frames
47. Shapers and transmission selection
48. Details on egress port scheduler
49. Transmission on the 网络
50. Switch 管理支持
51. Global Time 支持
52. Counter 同步 of Ethernet switches which are connected via uplink ports
53. Verification of 配置
54. Testing and 诊断 of Switch Ports
55. Low Power 模式支持
56. MACsec 支持
57. 错误 Classifications
58. Development 错误
59. Runtime 错误
60. Transient Faults
61. Production 错误
62. Extended Production 错误
63. API 规范
64. Imported 类型
65. 类型定义
66. EthSwt_StateType
67. EthSwt_ConfigType
68. EthSwt_MacLearningType
69. EthSwt_MgmtInfoType
70. EthSwt_PortMirrorCfgType
71. EthSwt_PortMirrorStateType
72. EthSwt_ReturnType
73. EthSwt_MgmtOwner
74. EthSwt_Mgmt_ObjectType
75. EthSwt_MgmtObjectValidType
76. 功能定义
77. EthSwt_Init
78. EthSwt_SetSwitchPortMode
79. EthSwt_GetSwitchPortMode
80. EthSwt_StartSwitchPortAutoNegotiation
81. EthSwt_CheckWakeup
82. EthSwt_GetSwitchPortWakeupReason
83. EthSwt_GetLinkState
84. EthSwt_GetBaudRate
85. EthSwt_GetDuplexMode
86. EthSwt_GetPortMacAddr
87. EthSwt_GetPortMacAddrVlan
88. EthSwt_GetArlTable
89. EthSwt_GetCounterValues
90. EthSwt_GetRxStats
91. EthSwt_GetTxStats
92. EthSwt_GetTxErrorCounterValues
93. EthSwt_GetSwitchReg
94. EthSwt_SetSwitchReg
95. EthSwt_ReadTrcvRegister
96. EthSwt_WriteTrcvRegister
97. EthSwt_ReadMmd
98. EthSwt_WriteMmd
99. EthSwt_EnableVlan
100. EthSwt_StoreConfiguration
101. EthSwt_ResetConfiguration
102. EthSwt_SetMacLearningMode
103. EthSwt_GetMacLearningMode
104. EthSwt_NvmSingleBlockCallback
105. EthSwt_EthRxProcessFrame
106. EthSwt_EthRxFinishedIndication
107. EthSwt_EthTxPrepareFrame
108. EthSwt_EthTxAdaptBufferLength
109. EthSwt_SetMgmtInfo
110. EthSwt_EthTxProcessFrame
111. EthSwt_EthTxFinishedIndication
112. EthSwt_PortEnableTimeStamp
113. EthSwt_VerifyConfig
114. EthSwt_SetForwardingMode
115. EthSwt_GetPortSignalQuality
116. EthSwt_GetPortIdentifier
117. EthSwt_GetSwitchIdentifier
118. EthSwt_WritePortMirrorConfiguration
119. EthSwt_ReadPortMirrorConfiguration
120. EthSwt_DeletePortMirrorConfiguration
121. EthSwt_GetPortMirrorState
122. EthSwt_SetPortMirrorState
123. EthSwt_SetPortTestMode
124. EthSwt_SetPortLoopbackMode
125. EthSwt_SetPortTxMode
126. EthSwt_RunPortCableDiagnostic
127. EthSwt_GetPortCableDiagnosticsResult
128. EthSwt_GetCfgDataRaw
129. EthSwt_GetCfgDataInfo
130. EthSwt_PortLinkStateRequest
131. EthSwt_GetMaxQueueBufferFillLevel
132. EthSwt_GetRxMgmtObject
133. EthSwt_GetTxMgmtObject
134. EthSwt_MacSecUpdateSecY
135. EthSwt_MacSecInitRxSc
136. EthSwt_MacSecResetRxSc
137. EthSwt_MacSecAddTxSa
138. EthSwt_MacSecUpdateTxSa
139. EthSwt_MacSecDeleteTxSa
140. EthSwt_MacSecAddRxSa
141. EthSwt_MacSecUpdateRxSa
142. EthSwt_MacSecDeleteRxSa
143. EthSwt_MacSecGetTxSaNextPn
144. EthSwt_MacSecGetMacSecStatistics
145. EthSwt_MacSecSetControlledPortEnabled
146. EthSwt_ExtractStreamHandleIdx
147. EthSwt_GetStreamHandleIdxStatistics
148. EthSwt_SetStreamState
149. Callback 通知
150. EthSwtPersistentConfigurationResultCallback
151. Scheduled functions
152. EthSwt_MainFunction
153. EthSwt_BackgroundTask
154. Expected 接口
155. Mandatory 接口
156. Optional 接口
157. Configurable 接口
158. <EthSwtLinkDownCallout>
159. <EthSwtLinkUpCallout>
160. <GetCfgDataRawDone>
161. 服务接口
162. 时序图
163. Switch 管理支持
164. 配置规范
165. Containers and 配置 parameters
166. EthSwt
167. EthSwtGeneral
168. EthSwtConfig
169. EthSwtAtsGroupInstanceTable
170. EthSwtAtsGroupInstanceEntry
171. EthSwtDemEventParameterRefs
172. EthSwtMacForwardingTable
173. EthSwtNvm
174. EthSwtPSCM
175. EthSwtAtsInstanceTable
176. EthSwtAtsInstanceEntry
177. EthSwtPSFP
178. EthSwtFilterMaxSduSizeTable
179. EthSwtFilterMaxSduSizeEntry
180. EthSwtFlowMeteringTable
181. EthSwtFlowMeteringEntry
182. EthSwtStreamFilterTable
183. EthSwtStreamFilterEntry
184. EthSwtAssignedStreamHandle
185. EthSwtStreamGateTable
186. EthSwtStreamGateEntry
187. EthSwtPort
188. EthSwtPortEgress
189. EthSwtPortPriorityToTrafficClassAssignment
190. EthSwtPortEgressScheduler
191. EthSwtPortEgressSchedulerPredecessor
192. EthSwtPortQueue
193. EthSwtPortEgressQueueTransmissionSelection
194. EthSwtPortEgressQueueTransmissionSelectionCBSConfig
195. EthSwtPortEgressQueueTransmissionSelectionETSConfig
196. EthSwtPortIngress
197. EthSwtPortIngressScheduler
198. EthSwtPortIngressVlanTranslationTable
199. EthSwtPortIngressVlanTranslationTableEntry
200. EthSwtPortPriorityRegeneration
201. EthSwtSpi
202. EthSwtSpiSequence
203. EthSwtStreamIdentificationTable
204. EthSwtStreamIdentificationEntry
205. EthSwtStreamFilterAction
206. EthSwtStreamFilterActionDestinationPortModification
207. EthSwtStreamFilterActionVlanModification
208. EthSwtStreamFilterRule
209. EthSwtStreamFilterIPDestAddress
210. EthSwtStreamFilterIPSrcAddress
211. EthSwtStreamFilterMACDestAddress
212. EthSwtStreamFilterMACSrcAddress
213. EthSwtStreamFilterTcpDestPort
214. EthSwtStreamFilterTcpSrcPort
215. EthSwtStreamFilterUdpDestPort
216. EthSwtStreamFilterUdpSrcPort
217. EthSwtStreamFilterIEEE1722StreamId
218. EthSwtUnknownMacDestAddressConfig
219. EthSwtVlanMembership
220. EthSwtVlanMembershipPortRefEntry
221. Constraints
222. 附录
223. Change History
224. Traceable item history of this document according to AUTOSAR Release R22-11
225. Added 规范 Items in R22-11
226. Changed 规范 Items in R22-11
227. Deleted 规范 Items in R22-11
228. Added Constraints in R22-11
229. Changed Constraints in R22-11
230. Deleted Constraints in R22-11
231. Traceable item history of this document according to AUTOSAR Release R23-11
232. Added 规范 Items in R23-11
233. Changed 规范 Items in R23-11
234. Deleted 规范 Items in R23-11
235. Added Constraints in R23-11
236. Changed Constraints in R23-11
237. Deleted Constraints in R23-11
238. Traceable item history of this document according to AUTOSAR Release R24-11
239. Added 规范 Items in R24-11
240. Changed 规范 Items in R24-11
241. Deleted 规范 Items in R24-11
242. Added Constraints in R24-11
243. Changed Constraints in R24-11
244. Deleted Constraints in R24-11
245. Traceable item history of this document according to AUTOSAR Release R25-11
246. Added 规范 Items in R25-11
247. Changed 规范 Items in R25-11
248. Deleted 规范 Items in R25-11
249. Added Constraints in R25-11
250. Changed Constraints in R25-11
251. Deleted Constraints in R25-11
