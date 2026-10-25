# Specification of CAN Interface (`CANInterface`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 012 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CANInterface_012\AUTOSAR_CP_SWS_CANInterface.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CANInterface_012\AUTOSAR_CP_SWS_CANInterface.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CANInterface_012\zzgen\CP_SWS_CANInterface.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module CAN Interface.

As depicted in  the CAN Interface module is located between the low level CAN device drivers (CAN Driver  and Transceiver Driver ) and the upper communication service layers (i.e. CAN State Manager , CAN Network Management , CAN Transport Protocol , PDU Router ). It represents the interface to the services of the CAN Driver for the upper communication layers.

The CAN Interface module provides a unique interface to manage different CAN hardware device types like CAN Controllers and CAN Transceivers used by the defined ECU hardware layout. Thus multiple underlying internal and external CAN Controllers/CAN Transceivers can be controlled by the CAN State Managers module based on a physical CAN channel related view.

The CAN Interface module consists of all CAN hardware independent tasks, which belongs to the CAN communication device drivers of the corresponding ECU. Those functionality is implemented once in the CAN Interface module, so that underlying CAN device drivers only focus on access and control of the corresponding specific CAN hardware device.

CanIf fulfils main control flow and data flow requirements of the PDU Router and upper layer communication modules of the AUTOSAR COM stack: transmit request processing, transmit confirmation / receive indication / error notification and start / stop of a CAN Controller and thus waking up / participating on a network. Its data processing and notification API is based on CAN L-SDUs, whereas APIs for control and mode handling provides a CAN Controller related view.

In case of Transmit Requests CanIf completes the L-PDU transmission with corresponding parameters and relays the CAN L-PDU via the appropriate CanDrv to the CAN Controller. At reception CanIf distributes the Received L-PDUs as L-SDUs to the upper layer. The assignment between Receive L-SDU and upper layer is statically configured. At transmit confirmation CanIf is responsible for the notification of upper layers about successful transmission.

The CAN Interface module provides CAN communication abstracted access to the CAN Driver and CAN Transceiver Driver services for control and supervision of the CAN network. The CAN Interface forwards downwards the status change requests from the CAN State Manager to the lower layer CAN device drivers, and upwards the CAN Driver / CAN Transceiver Driver events are forwarded by the CAN I

## 模块依赖

This section describes the relations to other modules within the AUTOSAR basic software architecture. It contains brief descriptions of configuration information and services, which are required by the CAN Interface Layer from other modules (see ).

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module CAN Interface.

As depicted in  the CAN Interface module is located between the low level CAN device drivers (CAN Driver  and Transceiver Driver ) and the upper communication service layers (i.e. CAN State Manager , CAN Network Management , CAN Transport Protocol , PDU Router ). It represents the interface to the services of the CAN Driver for the upper communication layers.

The CAN Interface module provides a unique interface to manage different CAN hardware device types like CAN Controllers and CAN Transceivers used by the defined ECU hardware layout. Thus multiple underlying internal and external CAN Controllers/CAN Transceivers can be controlled by the CAN State Managers module based on a physical CAN channel related view.

The CAN Interface module consists of all CAN hardware independent tasks, which belongs to the CAN communication device drivers of the corresponding ECU. Those functionality is implemented once in the CAN Interface module, so that underlying CAN device drivers only focus on access and control of the corresponding specific CAN hardware device.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the CAN Interface module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| CAN L-PDU | CAN Protocol Data Unit. Consists of an identifier, Data Length and data (SDU) Visible to the CAN driver. |
| CAN L-SDU | CAN Service Data Unit. Data that are transported inside the CAN L-PDU. Visible to the upper layers of the CAN interface (e.g. PDU Router). |
| CanDrv | CAN Driver module |
| CAN FD | CAN with Flexible Data-Rate |
| CanId | CAN Identifier |
| CanIf | CAN Interface module |
| CanNm | CAN Network Management module |
| CanSm | CAN State Manager module |
| CanTp | CAN Transport Layer module |
| CanTrcv | CAN Transceiver Driver module |
| CanTSyn | Global Time Synchronization over CAN |
| ComM | Communication Manager module |
| DCM | Diagnostic Communication Manager module |
| EcuM | ECU State Manager module |
| HOH | CAN hardware object handle |
| HRH | CAN hardware receive handle |
| HTH | CAN hardware transmit handle |
| J1939Nm | J1939 Network Management module |
| J1939Tp | J1939 Transport Layer module |
| LLC | logical link control |
| L-SDU Router | Module that transfers L-SDUs from one module to another module. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for CAN Interface.

Thus, the specification SWS BSW General shall be considered as additional and required specification for CAN Interface.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

The CAN Interface can be used for CAN communication only and is specifically designed to operate with one or multiple underlying CAN Drivers and CAN Transceiver Drivers. Several CAN Driver modules covering different CAN Hardware Units are represented by just one generic interface as specified in the CAN Driver specification . As well in the same manner several CAN Transceiver Driver modules covering different CAN Transceiver devices are represented by just one generic interface as specified in the CAN Transceiver Driver specification . Other protocols than CAN (i.e. LIN or FlexRay) are not supported.

Please be aware that an active PnTxFilter ensures that the first messages on bus is CanIfTxPduPnFilterPdu. In case that CanIfTxPduPnFilterPdu is the NM-PDU the COM-Stack start up takes care that the PduGroups are disabled until successful transmission of that PDU. However, transmit requests for other PDUs (i.e. initially started PDUs, TP-PDUs, XCP-PDUs) will be rejected until the configured PDU was sent. Only the very first PDU which initiates the Wake-up of the Network has to be the CanIfTxPduPnFilterPdu.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

The CAN Interface can be used for all domain applications when the CAN protocol is used.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section describes the relations to other modules within the AUTOSAR basic software architecture. It contains brief descriptions of configuration information and services, which are required by the CAN Interface Layer from other modules (see ).

### 10. 上层协议层
*原文标题：Upper Protocol Layers*

Inside the AUTOSAR BSW architecture the upper layers of the CAN Interface module (Abbr.: CanIf) are represented by the PDU Router module (Abbr.: PduR), CAN Network Management module (Abbr.: CanNm), CAN Transport Layer module (Abbr.: CanTp), CAN State Manager module (Abbr.: CanSm), ECU State Manager module (Abbr.: EcuM), Complex Driver modules (Abbr.: CDD), Universal Calibration Protocol module (Abbr.: XCP), Global Time Synchronization over CAN (Abbr.: CanTSyn), J1939 Transport Layer module (Abbr.: J1939Tp) and J1939 Network Management module (Abbr.: J1939Nm).

The AUTOSAR BSW architecture indicates that the application data buffers are located in the upper layer, to which they belong. Direct access to these buffers is prohibited. The buffer location is passed by the CanIf from or to the CAN Driver module (Abbr.: CanDrv) during transmission and reception. During execution of these transmission/reception indication services buffer location is passed. Data integrity is guaranteed by use of lock mechanisms each time the buffer has been accessed. See .

The API used by the CanIf consists of notification services as basic agents for the transfer of CAN related data (i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. 初始化：ECU 状态管理器
*原文标题：Initialization: Ecu State Manager*

The EcuM initializes the CanIf (refer to ).

### 12. 模式控制：CAN 状态管理器
*原文标题：Mode Control: CAN State Manager*

The CanSm module is responsible for mode control management of all supported CAN Controllers and CAN Transceivers.

### 13. 下层：CAN 驱动
*原文标题：Lower layers: CAN Driver*

The main lower layer CAN device driver is represented by the CanDrv (see ). The CanIf has a close relation to the CanDrv as a result of its position in the AUTOSAR Basic Software Architecture.

The CanDrv provides a hardware abstracted access to the CAN Controller only, but control of operation modes is done in CanSm only.

The CanDrv detects and processes events of the CAN Controllers and notifies those to the CanIf.

The CanIf passes operation mode requests of the CanSm to the corresponding underlying CAN Controllers.

CanDrv provides a normalized L-PDU to ensure hardware independence of CanIf. The pointer to this normalized L-PDU points either to a temporary buffer (for e.g. data normalizing) or to the CAN hardware dependent CanDrv. For CanIf the kind of L-PDU buffer is invisible.

The CanIf provides notification services used by the CanDrv in all notifications scenarios, for example: transmit confirmation (`CanIf_TxConfirmation`()), receive indication (CAN 2.0/FD `CanIf_RxIndication`(), CAN XL `CanIf_XLRxIndication`()) and notification of a controller mode change `CanIf_ControllerModeIndication`().

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 下层：CAN 收发器驱动
*原文标题：Lower layers: CAN Transceiver Driver*

The second available lower layer CAN device driver is represented by the CanTrcv (see ).

Each CanTrcv itself does operation mode control of the CAN Transceiver device. The CanIf just maps all APIs of several underlying CanTrcvs to a unique one, thus CanSm is able to trigger a transition of the corresponding CAN Transceiver modes. No control or handling functionality belonging to CanTrcv is done inside the CanIf.

The CanIf maps the following services of all underlying CanTrcvs to one unique interface. These are further described in the CAN Transceiver Driver SWS (see ):

* Unique CanTrcv mode request and read services to manage the operation modes of each underlying CAN Transceiver device.
* Read service for CAN Transceiver wake up reason support.
* Mode request service to enable/disable/clear wake up event state of each used CAN transceiver (`CanIf_SetTrcvMode`(), see ).

### 15. 配置
*原文标题：Configuration*

The CanIf design is optimized to manage CAN protocol specific capabilities and handling of the used underlying CAN Controller.

The CanIf is capable to change the CAN configuration without a re-build. Therefore, the function `CanIf_Init`() (see ) retrieves the required CAN configuration information from configuration containers and parameters, which are specified (linked as references, or additional parameters) in , see .

This section gives a summary of the retrieved information, e.g.:

* Number of CAN Controllers. The number of CAN Controllers is necessary for dispatching of transmit and receive L-PDUs and for the control of the status of the available CAN Drivers (see CanIfCtrlDrvCfg).
* Number of Hardware Object Handles. To supervise transmit requests the CAN Interface needs to know the number of HTHs and the assignments between each HTH and the corresponding CAN Controller (see CanIfHthCanCtrlIdRef; CanIfHthIdSymRef).
* Range of received CAN IDs passing hardware acceptance filter for each hardware object.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. 文件结构
*原文标题：File structure*

### 17. 代码文件结构
*原文标题：Code file structure*

⌈
CanIf shall access the location of the API of all used underlying CanDrvs for link time configuration by a set of function pointers for each CanDrv.
⌋

The values for the function pointers for each CanDrv are given at link time.

### 18. 头文件结构
*原文标题：Header file structure*

⌈
The header file CanIf.h only contains extern declarations of constants, global data and services that are specified in CanIf.
⌋

Constants, global data types and functions that are only used by CanIf internally, are declared within CanIf.c.

  Upstream requirements:
⌈
CanIf shall include the header file Mirror.h if Bus Mirroring is enabled (see CanIfBusMirroringSupport).
⌋

### 19. 需求追踪
*原文标题：Requirements Tracing*

The following tables references the requirements specified in  as well as  and links to the fulfillment of these. Please note that if column 'Satisfied by' is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Basic SW security events |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| API naming convention |  |  |
| Shared code shall be reentrant |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Basic SW module shall be able to shutdown |  |  |
| All AUTOSAR standard types and constants shall be placed and organized in a standard type header file |  |  |
| All type definitions of target and compiler specific scope shall be placed and organized in a single type header |  |  |
| For success/failure of an API call a standard return type shall be defined |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| BSW Modules shall support multiple confi |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. 功能规范
*原文标题：Functional specification*

### 21. 通用功能
*原文标题：General Functionality*

The services of CanIf can be divided into the following main groups:

* Initialization
* Transmit request services
* Transmit confirmation services
* Reception indication services
* Controller mode control services
* PDU mode control services

Possible applications of CanIf:

# Interrupt Mode CanDrv processes interrupts triggered by the CAN Controller. CanIf, which is event based, is notified when an event occurs. In this case the relevant CanIf services are called within the corresponding ISRs in CanDrv.
# Polling Mode CanDrv is triggered by the SchM and performs subsequent processes (Polling Mode). In this case `Can_MainFunction_`<Write/Read/BusOff/Wakeup/Transceiver>() must be called periodically within a defined time interval. CanIf is notified by CanDrv about events (Reception, Transmission, BusOff, Timeout), that occurred in one of the CAN Controllers, equally to the interrupt driven operation. CanDrv is responsible for the update of the corresponding information which belongs to the occurred event in the CAN Controller, for example reception of a L-PDU.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 硬件对象句柄
*原文标题：Hardware object handles*

Hardware Object Handles (HOH) for transmission (HTH) as well as for reception (HRH) represent an abstract reference to a CAN mailbox structure, that contains CAN related parameters such as CanId, DLC and data. Based on the CAN hardware buffer abstraction each Hardware Object is referenced in CanIf independent of the CAN hardware buffer layout. The HOH is used as a parameter in the calls of CanDrv's interface services and is provided by CanDrv's configuration and used by CanDrv as identifier for communication buffers of the CAN mailbox.

CanIf acts only as user of the Hardware Object Handle, but does not interpret it on the basis of hardware specific information. CanIf therefore remains independent of hardware.

  Upstream requirements:
⌈
CanIf shall avoid direct access to hardware specific communication buffers and shall access it exclusively via CanDrv interface services.
⌋

Rationale for : CanIf remains independent of hardware, because CanDrv interfaces are called with HOH parameters, which abstract from the concrete CAN hardware buffer properties.

Each CAN Controller can provide multiple CAN Transmit Hardware Objects in the CAN mailbox.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Static L-PDUs

CanIf offers general access to the CAN L-SDU related data for upper layers. Attributes of the following table are represented as configuration parameters and are specified in :

| CAN Interface specific attributes | CAN Protocol Control Information (PCI) |
|---|---|
| Method of SW filtering CanIfPrivateSoftwareFilterType | CAN Identifier (CanId) CanIfTxPduCanId, range of CanIds per PDU (see CanIfRxPduCanIdRange), CanIfRxPduCanId, CanIfRxPduCanIdMask |
| Direction of L-PDU (Tx, Rx) CanIfTxPduId, CanIfRxPduId | Type of CAN Identifier (StandardCAN, ExtendedCAN) referenced from CanDrv via CanIfHthIdSymRef, CanIfHrhIdSymRef |
| HTH/HRH of the CAN Controller | Data Length and Data Length Code (DLC) CanIfRxPduDataLength |
| Target ID for the upper layer LSduR | Reference to the PDU data (see ) |
| Type of Transmit L-PDU (STATIC, DYNAMIC) CanIfTxPduType |  |
| Type of Tx/Rx L-PDU (FullCAN, BasicCAN) CanIfHthIdSymRef, CanIfHrhIdSymRef |  |

CanIf supports activation and deactivation of all L-PDUs belonging to one CAN Controller for transmission as well as for reception (see , see `CanIf_SetPduMode`(), ). For L-PDU mode control refer to .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Dynamic L-PDUs

CanIf shall support the ability to filter incoming messages using the CanIfRxPduCanIdMask. The filtering shall be done by comparing the incoming CanId with the stored CanIfRxPduCanId after applying the CanIfRxPduCanIdMask to both IDs. This should be done after the filtering of regular CanIds without mask, to allow for separate handling of some of the CanIds that fall into the range defined by the mask or a CanId based range.

Additionally, DYNAMIC Tx and Rx L-SDUs shall be supported, where the CanId resides in the MetaData of the L-SDU.

During transmission of dynamic L-SDUs, when a CanIfTxPduCanIdMask is defined, the variable parts of the CanId provided via the MetaData must be merged with the CanId by using this mask. When no CanIfTxPduCanIdMask and no CanIfTxPduCanId are configured, the MetaData shall be used directly as CanId.

During reception of dynamic L-SDUs, the received CanId shall be placed in the L-SDU MetaData. The content of the MetaData is independent of the CanIfRxPduCanIdMask parameter.

⌈
CanIf shall support dynamic L-PDUs, where the CanId or relevant parts of the CanId are placed in the MetaData of a L-SDU.
⌋

### 25. Dynamic Transmit L-PDUs

Definition of dynamic Transmit L-PDUs: L-PDUs which allow reconfiguration of the CanId during runtime (CanIfTxPduType) or where the ID or parts thereof are provided as MetaData of the L-SDU.

The Data Length and the pointer to the data buffer are both determined by the upper layer module at call of `CanIf_Transmit`() and cannot be reconfigured.

The function `CanIf_SetDynamicTxId`() (see ) reconfigures the CanId of a dynamic L-PDU with CanIfTxPduType.

⌈
CanIf shall process the two most significant bits of the CanId (see , definition of `Can_IdType` ) to determine which type of CanId is used and thus how the dynamic Transmit L-PDU shall be transmitted.
⌋

⌈
The CanIf shall guarantee data consistency of the CanId in case of running function `CanIf_SetDynamicTxId`(). This service may be interrupted by a pre-emptive call of `CanIf_Transmit`() affecting the same L-PDU, see .
⌋

⌈
If CanIfTxPduCanIdMask and CanIfTxPduCanId are omitted, the CanId is directly taken from the MetaData.
⌋

⌈
CanIfTxPduCanIdMask shall be ignored when meta data configuration does not contain `CAN_ID_32` for this L-SDU.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Dynamic receive L-PDUs

Definition of dynamic Receive L-PDUs: L-PDUs that correspond to a set of CanIds, where the actually received CanId is provided to upper layers as part of the PDU data.

⌈
Configuration shall ensure that dynamic Receive L-PDUs use an ID range or a mask and that the MetaDataItem `CAN_ID_32` is configured for the L-SDU. Besides, the software filtering must be enabled for these L-SDUs.
⌋

⌈
Upon reception of a dynamic L-SDU, CanIf shall place the CanId in the MetaDataItem of type `CAN_ID_32`.
⌋

### 27. Physical channel 视图
*原文标题：Physical channel view*

A physical channel is linked with one CAN Controller and one CAN Transceiver, whereas one or multiple physical channels may be connected to a single network.

The CanIf provides services to control all CAN devices like CAN Controllers and CAN Transceivers of all supported ECU's CAN channel. Those APIs are used by the CanSm to provide a network view to the ComM (see ) used to perform wake up and sleep request for all physical channels connected to a single network.

The CanIf passes status information provided by the CanDrv and CanTrcv separately for each physical channel as status information for the CanSm (<`User_ControllerBusOff`>(), refer to ).

⌈
The CanIf shall provide a ControllerId, which abstracts from the different Controllers of the different CanDrv instances. The range of the ControllerIds within the CanIf shall start with '0'. It shall be configurable via CanIfCtrlId.
⌋

Example:

| CanIf |  | CanDrv A |  | CanDrv B |
|---|---|---|---|---|
|  |  |  |  |  |
| ControllerId 0 |  | Controller 0 |  |  |
|  |  |  |  |  |
| ControllerId 1 |  | Controller 1 |  |  |
|  |  |  |  |  |
| ControllerId 2 |  |  |  | Controller 0 |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. CAN Hardware Unit

The CAN Hardware Unit combines one or multiple CAN Controller modules of the same type, which may be located on-chip or as external standalone devices. Each CAN Hardware Unit is served by the corresponding CanDrv.

If different types of CAN Controllers are used, also different types of CanDrvs have to be applied with a unified API to CanIf. CanIf collects information about number and types of CAN Controllers and their Hardware Objects at configuration time. This allows transparent and hardware independent access to the CAN Controllers from upper layer modules using HOHs (refer to  and ).

 shows a CAN Hardware Unit consisting of two CAN Controllers of the same type connected to two physical channels:

### 29. BasicCAN and FullCAN reception

This chapter only applies to CAN 2.0 and CAN FD.

CAN XL hardware has an entirely different approach for accessing the frames using descriptors and queues, similar to Ethernet.

CanIf distinguishes between BasicCAN and FullCAN handling for activation of software acceptance filtering.

A CAN mailbox (Hardware Object) for FullCAN operation only enables transmission or reception of single CanIds. Accordingly, BasicCAN operation of one Hardware Object enables to transmit or receive a range of CanIds.

A Hardware Receive Object for configured BasicCAN reception is able to receive a range of CanIds, which pass its hardware acceptance filter. This range may exceed the list of predefined Rx L-PDUs to be received by this HRH. Therefore, CanIf subsequently shall execute software filtering to pass only the predefined list of Rx L-PDUs to the corresponding upper layer modules. For more details please refer to .

⌈
CanIf shall configure and store an order on HTHs and HRHs for all HOHs derived from the configuration containers CanIfHthCfg and CanIfHrhCfg.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 初始化
*原文标题：Initialization*

The EcuM calls the CanIf's function `CanIf_Init`() for initialization of the entire CanIf (see ). All global variables and data structures are initialized including flags and buffers during the initialization process. The EcuM executes initialization of CanDrvs and CanTrcvs separately by call of their corresponding initialization services (refer to  and ).

The CanIf expects that the CAN Controller remains in STOPPED mode like after power-on reset after the initialization process has been completed. In this mode the CanIf and CanDrv are neither able to transmit nor receive CAN L-PDUs (see ).

If re-initialization of the entire CAN modules during runtime is required, the EcuM shall invoke the CanSm (see ) to initiate the required state transitions of the CAN Controller by call of CAN Interface module's API service `CanIf_SetControllerMode`(). The CanIf maps the calls from CanSm to calls of the respective CanDrvs (see ).

### 31. 发送请求
*原文标题：Transmit request*

CanIf's transmit request function `CanIf_Transmit`() () is a common interface for upper layers to transmit L-PDUs on the CAN network. The upper communication layer modules initiate the transmission only via CanIf's services without direct access to CanDrv. The initiated Transmit Request is successfully completed, if CanDrv could write the L-PDU data into the CAN hardware transmit object.

Upper layer modules use the API service `CanIf_Transmit`() to initiate a transmit request (refer to ).

CanIf performs following actions for L-PDU transmission at call of the service `CanIf_Transmit`():

* Check, initialization status of CanIf
* Identify CanDrv (only if multiple CanDrvs are used)
* Determine HTH for access to the CAN hardware transmit object
* Call `Can_Write`() or `CanXL_Write`() of CanDrv

The transmission is successfully completed, if the transmit request service `CanIf_Transmit`() returns E_OK.

  Upstream requirements:
⌈
If an L-PDU is requested to be transmitted via a PDU channel mode, which equals `CANIF_OFFLINE`, the CanIf shall report the runtime error code `CANIF_E_STOPPED` to the `Det_ReportRuntimeError`() service of the DET and `CanIf_Transmit`() shall return E_NOT_OK.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. 发送数据流
*原文标题：Transmit data flow*

The Transmit Request service `CanIf_Transmit`() is based on L-PDUs. The access to the L-SDU specific data is organized by the following parameters:

* Transmit L-PDU => L-SDU ID
* Reference to a data structure, which contains L-SDU related data: Pointer to the L-SDU, pointer to the MetaData and L-SDU length.

The reference to the L-SDU data structure is used as a parameter in several CanIf's API services, e.g. `CanIf_Transmit`() or the callback service `LSduR_CanIfRxIndication`(). In case the L-PDU is configured for triggered transmission, the L-SDU pointer is a null pointer.

CanIf stores information about the available hardware objects configured for transmission purposes. The function `CanIf_Transmit`() maps the CanTxPduId to the corresponding HTH and calls the function `Can_Write`() or `CanXL_Write`().

  Upstream requirements:
⌈
If Bus Mirroring is enabled globally (see CanIfBusMirroringSupport) and has been activated with a call to `CanIf_EnableBusMirroring`() for a CAN Controller, the CanIf shall store the content of each frame before it is transmitted on that controller with `Can_Write`().
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Transmit 缓冲
*原文标题：Transmit buffering*

This chapter only applies to CAN 2.0 and CAN FD. Using transmit buffering for CAN XL within CanIf is not supported.

Note: In case the buffers provided by the hardware are not sufficient, the CAN XL Driver might implement software buffers.

### 34. 通用行为
*原文标题：General behavior*

At the scope of CanIf the transmit process starts with the call of `CanIf_Transmit`() and it ends with invocation of upper layer module's callback service `LSduR_CanIfTxConfirmation`(). During the transmit process CanIf, CanDrv and the CAN Mailbox altogether shall store the L-PDU to be transmitted only once at a single location. Depending on the transmit method, these are:

* The CAN hardware transmit object or
* The Transmit L-PDU Buffer inside CanIf, if transmit buffering is enabled.

For triggered transmission, CanIf only has to store the transmit request for the given L-PDU but not its data. The data is fetched just in time by means of the trigger transmit function when the HTH is free (again). A single Tx L-PDU, requested for transmission, shall never be stored twice. This behavior corresponds to the usual way of periodic communication on the CAN network.

If transmit buffering is enabled, CanIf will store a Tx L-PDU in a CanIf Transmit L-PDU Buffer (CanIfBufferCfg), if it is rejected by CanDrv at Transmit Request.

Basically, the overall buffer in CanIf for buffering Tx L-PDUs consits of one or multiple CanIfBufferCfg (see CanIfBufferCfg).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 缓冲区特性
*原文标题：Buffer characteristics*

CanIfTxPduBufferRef, CanIfBufferCfg, CanIfBufferHthRef and CanIfBufferSize describe the possible CanIfBufferCfg configurations.

### 36. Storage of L-PDUs in the transmit L-PDU buffer

CanIf tries to store a new Transmit L-PDU or its Transmit Request in the Transmit L-PDU Buffer only, if CanDrv return `CAN_BUSY` during a call of `Can_Write`() (see ).

  Upstream requirements:
⌈
The CanIf shall support buffering of a CAN L-PDU for BasicCAN transmission in the CanIf, if parameter CanIfPublicTxBuffering (see CanIfPublicTxBuffering) is enabled.
⌋

⌈
For dynamic Transmit L-PDUs, also the CanId has to be stored in the CanIfTxBuffer.
⌋

  Upstream requirements:
⌈
If transmit buffering is enabled (see ) and if the call of `Can_Write`() for a PDU configured for direct transmission returns with `CAN_BUSY`, CanIf shall check if it is possible to buffer the CanIf Tx L-PDU, which was requested to be transmitted via `Can_Write`() in a CanIfTxBuffer.
⌋

When the call of `Can_Write`() returns with `CAN_BUSY`, CanDrv has rejected the requested transmission of the L-PDU (see ) because there is no free hardware object available at time of the transmit request (Tx request).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Clearance of transmit L-PDU buffers

⌈
CanIf shall evaluate during transmit confirmation (see ), whether pending CanIf Tx L-PDUs or Transmit Requests are stored within the CanIfTxBuffers, which are assigned to the new free Hardware Transmit Object (see ).
⌋

⌈
If pending CanIf Tx L-PDUs or Transmit Requests are available in the CanIfTxBuffers as per , then CanIf shall call `Can_Write`() for that pending CanIf Tx L-PDU or Transmit Requests (of the one assigned to the new Hardware Transmit Object) with the highest priority (see ).
⌋

⌈
CanIf shall transmit L-PDUs or Transmit Requests stored in the Transmit L-PDU Buffers in priority order (see ) per each HTH. CanIf shall not differentiate between L-PDUs and Transmit Requests.
⌋

⌈
When CanIf calls the function `Can_Write`() for prioritized L-PDUs and Transmit Requests stored in CanIfTxBuffer and the return value of `Can_Write`() is E_OK, then CanIf shall remove this L-PDU or Transmit Request from the Transmit L-PDU Buffer immediately, before the transmit confirmation returns.
⌋

The behavior specified in  simplifies the choice of the new transmit L-PDU stored in the Transmit L-PDU Buffer.

### 其余 166 章（内容从略，见纯文本全文）

38. 初始化 of transmit L-PDU buffers
39. 数据 integrity of transmit L-PDU buffers
40. 发送确认
41. 接收数据流
42. 接收指示
43. Read received 数据
44. Read Tx/Rx 通知 status
45. 数据 integrity
46. CAN Controller 模式
47. 通用功能
48. CAN Controller Operation Modes
49. Controller 模式 Transitions
50. 唤醒
51. 唤醒检测
52. 唤醒校验
53. PDU channel 模式控制
54. PDU channel groups
55. PDU channel modes
56. CANIF_OFFLINE
57. CANIF_ONLINE
58. CANIF_OFFLINE_ACTIVE
59. 软件 receive filter
60. 软件过滤 concept
61. 软件 filter algorithms
62. 数据 Length Check
63. L-SDU dispatcher to 上层 layers
64. Polling 模式
65. 多 CAN 驱动支持
66. Transmit requests by using 多 CAN Drivers
67. 通知 mechanism using 多 CAN Drivers
68. Partial Networking
69. CAN FD 支持
70. CAN XL 支持
71. Dynamic 控制 of CAN XL Attributes
72. 安全事件
73. 错误分类
74. Development 错误
75. Runtime 错误
76. Production 错误
77. Extended Production 错误
78. API 规范
79. Imported 类型
80. 类型定义
81. CanIf_ConfigType
82. CanIf_PduModeType
83. CanIf_NotifStatusType
84. 功能定义
85. CanIf_Init
86. CanIf_DeInit
87. CanIf_SetControllerMode
88. CanIf_GetControllerMode
89. CanIf_GetControllerErrorState
90. CanIf_Transmit
91. CanIf_ReadRxPduData
92. CanIf_ReadTxNotifStatus
93. CanIf_ReadRxNotifStatus
94. CanIf_SetPduMode
95. CanIf_GetPduMode
96. CanIf_GetVersionInfo
97. CanIf_SetDynamicTxId
98. CanIf_SetTrcvMode
99. CanIf_GetTrcvMode
100. CanIf_GetTrcvWakeupReason
101. CanIf_SetTrcvWakeupMode
102. CanIf_CheckWakeup
103. CanIf_CheckValidation
104. CanIf_GetTxConfirmationState
105. CanIf_ClearTrcvWufFlag
106. CanIf_CheckTrcvWakeFlag
107. CanIf_SetBaudrate
108. CanIf_GetControllerRxErrorCounter
109. CanIf_GetControllerTxErrorCounter
110. CanIf_EnableBusMirroring
111. CanIf_GetCurrentTime
112. CanIf_EnableEgressTimeStamp
113. CanIf_GetEgressTimeStamp
114. CanIf_GetIngressTimeStamp
115. Callback 通知
116. CanIf_TriggerTransmit
117. CanIf_TxConfirmation
118. CanIf_RxIndication
119. CanIf_XLRxIndication
120. CanIf_XLReportErrorState
121. CanIf_ControllerBusOff
122. CanIf_ConfirmPnAvailability
123. CanIf_ConfirmCtrlPnAvailability
124. CanIf_ClearTrcvWufFlagIndication
125. CanIf_CheckTrcvWakeFlagIndication
126. CanIf_ControllerModeIndication
127. CanIf_TrcvModeIndication
128. CanIf_ControllerErrorStatePassive
129. CanIf_ErrorNotification
130. Scheduled functions
131. Expected 接口
132. Mandatory 接口
133. Optional 接口
134. Configurable 接口
135. <User_ValidateWakeupEvent>
136. <User_ControllerBusOff>
137. 配置 of <User_ControllerBusOff>()
138. <User_ConfirmPnAvailability>
139. <User_ConfirmCtrlPnAvailability>
140. <User_ClearTrcvWufFlagIndication>
141. <User_CheckTrcvWakeFlagIndication>
142. <User_ControllerModeIndication>
143. <User_TrcvModeIndication>
144. 时序图
145. Transmit request (single CAN 驱动)
146. Transmit request (多 CAN Drivers)
147. Transmit confirmation (interrupt 模式)
148. Transmit confirmation (polling 模式)
149. Transmit confirmation (with 缓冲)
150. Trigger Transmit Request
151. Receive indication (interrupt 模式)
152. Receive indication (polling 模式)
153. Read received 数据
154. Start CAN 网络
155. BusOff 通知
156. BusOff recovery
157. 配置规范
158. Containers and 配置 parameters
159. CanIf
160. CanIfPrivateCfg
161. CanIfPublicCfg
162. CanIfInitCfg
163. CanIfTxPduCfg
164. CanIfTxPduXLParams
165. CanIfRxPduCfg
166. CanIfRxPduXLParams
167. CanIfRxPduCanIdRange
168. CanIfDispatchCfg
169. CanIfCtrlCfg
170. CanIfCtrlDrvCfg
171. CanIfTrcvDrvCfg
172. CanIfTrcvCfg
173. CanIfInitHohCfg
174. CanIfHthCfg
175. CanIfHrhCfg
176. CanIfHrhRangeCfg
177. CanIfBufferCfg
178. CanIfSecurityEventRefs
179. 配置 constraints
180. 附录
181. 不适用需求
182. Change History
183. Change History of this document according to AUTOSAR Release R23-11
184. Added 规范 Items in R23-11
185. Changed 规范 Items in R23-11
186. Deleted 规范 Items in R23-11
187. Added Constraints in R23-11
188. Changed Constraints in R23-11
189. Deleted Constraints in R23-11
190. Change History of this document according to AUTOSAR Release R24-11
191. Added 规范 Items in R24-11
192. Changed 规范 Items in R24-11
193. Deleted 规范 Items in R24-11
194. Added Constraints in R24-11
195. Changed Constraints in R24-11
196. Deleted Constraints in R24-11
197. Change History of this document according to AUTOSAR Release R25-11
198. Added 规范 Items in R25-11
199. Changed 规范 Items in R25-11
200. Deleted 规范 Items in R25-11
201. Added Constraints in R25-11
202. Changed Constraints in R25-11
203. Deleted Constraints in R25-11
