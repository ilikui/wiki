# Specification of Diagnostic Communication Manager (`DiagnosticCommunicationManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 018 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticCommunicationManager_018\AUTOSAR_CP_SWS_DiagnosticCommunicationManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticCommunicationManager_018\AUTOSAR_CP_SWS_DiagnosticCommunicationManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_DiagnosticCommunicationManager_018\zzgen\CP_SWS_DiagnosticCommunicationManager.complete.txt`

## 文档简介

The Dcm SWS describes the functionality, the API, and the configuration of the AUTOSAR Basic Software module Dcm (Diagnostic Communication Manager). The Dcm module provides a common API for diagnostic services. The functionality of the Dcm module is used by external diagnostic tools during the development, manufacturing or service.

The Dcm module ensures diagnostic data flow and manages the diagnostic states, especially diagnostic sessions and security states. Furthermore, the Dcm module checks if the diagnostic service request is supported and if the service may be executed in the current session according to the diagnostic states.The Dcm module provides the OSI-Layers 5 to 7 of Table 1: Diagnostic protocols and OSI-Layer.

| OSI-Layer | Protocols | < | < | < | < | < |
|---|---|---|---|---|---|---|
| 7 | UDS-Protocol - ISO14229-1  - SAE J1979-2 | - | - | - | - | Legislated OBD - ISO15031-5  - SAE J1979 |
| 6 | ISO 14229-1:2013 | SAE J1979DA, SAE J2012DA | - | - | - | SAE J1979DA, SAE J2012DA |
| 5 | ISO15765-3 | - | - | - | - | ISO14229-2 |
| 4 | ISO15765-2 | ISO 15765-4 | - | - | ISO 13400-2 | ISO 15765-4 |
| 3 | ISO15765-2 | ISO 15765-4 | - | - | ISO 13400-2 | ISO14229-2 |
| 2 | CAN-Protocol | ISO 15765-4 | LIN-Protocol | FlexRay | ISO 13400-3 | ISO14229-2 |
| 1 | CAN-Protocol | ISO 15765-4 | LIN-Protocol | FlexRay | ISO 13400-3 | ISO14229-2 |

At OSI-level 7, the Dcm module provides an extensive set of ISO14229-1  services. In addition, the Dcm module provides mechanisms to support the OBD services $01 - $0A defined in documents  and . With these services, Autosar OBD functionality is capable of meeting all light duty OBD regulations worldwide (California OBDII, EOBD, Japan OBD, and all others). At OSI-level 5, the Dcm module handles the network-independent sections of the following specifications:

* ISO15765-3 : Implementation of unified diagnostic services (UDS on CAN)
* ISO15765-4 : Requirements for emission-related systems, Chapter 5 "Session Layer"

In the AUTOSAR Architecture the Diagnostic Communication Manager is located in the Communication Services (Service Layer).

The Dcm module is network-independent. All network-specific functionality (the specifics of networks like CAN, LIN, FlexRay or MOST) is handled outside of the Dcm module. The PDU Router (PduR) module provides a network-independent interface to the Dcm module. The Dcm module receives a diagnostic message from the PduR module. The Dcm module processes and checks internally the diagnostic message. As part of processing the requested diagnostic se

## 模块依赖

The AUTOSAR Diagnostic Communication Manager (DCM) has interfaces and dependencies to the following Basic Software modules and SW-Cs:

* Diagnostic Event Manager (DEM): The DEM module provides function to retrieve all information related to fault memory such that the Dcm module is able to respond to tester requests by reading data from the fault memory.
* Protocol Data Unit Router (PduR module): The PduR module provides functions to transmit and receive diagnostic data. Proper operation of the Dcm module presumes that the PduR interface supports all service primitives defined for the Service Access Point (SAP) between diagnostic application layer and underlying transport layer (see ISO14229-1 , chapter 5 Application layer services).
* Communication Manager (ComM): The ComM module provides functions such that the Dcm module can indicate the states "active" and "inactive" for diagnostic communication. The Dcm module provides functionality to handle the communication requirements "Full-/ Silent-/ No-Communication". Additionally, the Dcm module provides the functionality to enable and disable Diagnostic Communication if requested by the ComM module.
* SW-C and RTE: The Dcm module has the capability to analyze the received diagnostic request data stream and handles all functionalities related to diagnostic communication such as protocol handling and timing. Based on the analysis of the request data stream the Dcm module assembles the response data stream and delegates routines or IO-Control executions to SW-Cs .If any of the data elements or functional states cannot be provided by the Dcm module itself the Dcm requests data or functional states from SW-Cs via port-interfaces or from other BSW modules through direct function-calls.
* BswM: The Dcm notifies the BswM that the application was updated if the initialization of the Dcm is the consequence of a jump from the bootloader . The Dcm also indicates to the BswM a communication mode change.
* Crypto Service Manager (Csm

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

The Dcm SWS describes the functionality, the API, and the configuration of the AUTOSAR Basic Software module Dcm (Diagnostic Communication Manager). The Dcm module provides a common API for diagnostic services. The functionality of the Dcm module is used by external diagnostic tools during the development, manufacturing or service.

The Dcm module ensures diagnostic data flow and manages the diagnostic states, especially diagnostic sessions and security states. Furthermore, the Dcm module checks if the diagnostic service request is supported and if the service may be executed in the current session according to the diagnostic states.The Dcm module provides the OSI-Layers 5 to 7 of Table 1: Diagnostic protocols and OSI-Layer.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Dcm module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| AddressAndLengthFormatIdentifier | Defines the number of bytes used for the memoryAddress and memorySize parameter in the request messages. |
| Application Layer | The Application Layer is placed above the RTE. Within the Application Layer the AUTOSAR Software-Components are placed. |
| Atomic Sender/Receiver interface | An atomic sender-receiver interface can be used to group DID data elements into one record data element prototype. All data elements can be read or write having a single read or write operation. |
| Channel | A link at which a data transfer can take place. If there is more than one Channel, there is normally some kind of ID assigned to the Channel. |
| Concurrent TesterPresent | A UDS service TesterPresent with set suppressPosRspMsgIndicationBit (3E 80) which is received with functional addressing. It is also known as keep-alive logic.. |
| Diagnostic Channel | A link at which a data transfer between a diagnostic tool and an ECU can take place. Example: An ECU is connected via CAN and the diagnostic channel has an assigned CAN-ID. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Typographical Conventions

This document uses the following typographical conventions:

* see configuration parameter myConfigurationParameter: this is a reference to a configuration parameter which can be found in Chapter .
* myFunction(): this is a function provided or required by the module as defined in Chapter

### 4. 相关文档
*原文标题：Related documentation*

### 5. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 6. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules  , which is also valid for Diagnostic Communication Manager.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Diagnostic Communication Manager.

### 7. 约束与假设
*原文标题：Constraints and assumptions*

### 8. 限制
*原文标题：Limitations*

The following limitations apply when using the Dcm module:

* UDS Service AccessTimingParameter (0x83) is not supported by the ISO standards in CAN and LIN. Also it is not planned to support this service with FlexRay. Therefore no support for this service is planned.
* Subfunction onTimerInterrupt of Service ResponseOnEvent is not supported in the current release.
* UDS Service SecuredDataTransmission (0x84) is not supported in the current release.
* The Dcm SWS does not cover any SAE J1939 related diagnostic requirements.
* Due to DEM limitation, the diagnostic service $19 05 is limited to the OBD legislative freeze frame.
* Management of IOControl service without InputOutputControlParameter in request and response is not supported
* The length of controlState parameter in IOControl request and response has to be of same size (due to the one configuration parameter DcmDspDataByteSize)
* Same layout of a DID which is used in RDBI, WDBI or IOCBI services
* The user optional parameter DTCSettingControlOptionRecord in the ControlDTCSetting request is only supported if it corresponds to a groupOfAllDTCs (0xFFFFFF) value.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 适用的车型领域
*原文标题：Applicability to car domains*

The Dcm module can be used for all car domains.

### 10. Applicability to emission-related environments (OBD)

This Dcm SWS is intended to fulfill the emission related requirements given by legislator. However, the supplier of the emission related system is responsible to fulfill the OBD requirements. Certain requirements cannot be fulfilled by the Dcm module by itself, but need to be considered at the level of the entire ECU or system. Example: During the integration of the Dcm module within the system, the timing requirements (50ms response time) must be fulfilled.

For WWH-OBD only the FunctionalGroupIdentifier 0x33 is currently supported.

### 11. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The AUTOSAR Diagnostic Communication Manager (DCM) has interfaces and dependencies to the following Basic Software modules and SW-Cs:

* Diagnostic Event Manager (DEM): The DEM module provides function to retrieve all information related to fault memory such that the Dcm module is able to respond to tester requests by reading data from the fault memory.
* Protocol Data Unit Router (PduR module): The PduR module provides functions to transmit and receive diagnostic data. Proper operation of the Dcm module presumes that the PduR interface supports all service primitives defined for the Service Access Point (SAP) between diagnostic application layer and underlying transport layer (see ISO14229-1 , chapter 5 Application layer services).
* Communication Manager (ComM): The ComM module provides functions such that the Dcm module can indicate the states "active" and "inactive" for diagnostic communication. The Dcm module provides functionality to handle the communication requirements "Full-/ Silent-/ No-Communication". Additionally, the Dcm module provides the functionality to enable and disable Diagnostic Communication if requested by the ComM module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in ,  as well as  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Network independent design |  |  |
| Manage Security Access level handling |  |  |
| Manage session handling |  |  |
| Provide diagnostic state information to applications |  |  |
| Timing handling according to ISO14229-2 |  |  |
| Support "Busy handling" by sending a negative response 0x78 |  |  |
| Suppress responses to diagnostic tool requests |  |  |
| Handling of different diagnostic sessions in parallel |  |  |
| Support the upload/download services for reading/writing data in an ECU in an extended and manufacturer specific diagnostic session |  |  |
| Ability to access different event memories |  |  |
| Provide the diagnostic status information according to ISO 14229-1 |  |  |
| Interact with standard bootloader |  |  |
| The optional parameter DTCSettingControlOptionRecord as part of UDS service ControlDTCSetting shall be limited to GroupOfDTC |  |  |
| Handle the execution of diagnostic services according to the assigned diagnostic sess |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能规范
*原文标题：Functional specification*

### 14. 通用设计 elements
*原文标题：General design elements*

### 15. Submodules within the Dcm 模块
*原文标题：Submodules within the Dcm module*

To define the functionality of the Dcm module, The Dcm SWS models the Dcm module as consisting of the following submodules:

* Diagnostic Session Layer (DSL) submodule: The DSL submodule ensures data flow concerning diagnostic requests and responses, supervises and guarantees diagnostic protocol timing and manages diagnostic states (especially diagnostic session and security).
* Diagnostic Service Dispatcher (DSD) submodule: The DSD submodule processes a stream of diagnostic data. The submodule:

  * Receives a new diagnostic request over a network and forwards it to a data processor.
  * Transmits a diagnostic response over a network when triggered by the data processor (e.g. by the DSP submodule).
* Diagnostic Service Processing (DSP) submodule: The DSP submodule handles the actual diagnostic service (respectively subservice) requests.

The next graphic gives an overview of the interfaces between the submodules DSP, DSD, and DSL within the Dcm module.

Note: The implementation of these submodules and the interfaces between them is not mandatory. They are introduced only to improve the readability of the specification.

### 16. Negative Response 代码 (NRC)
*原文标题：Negative Response Code (NRC)*

The standards defining the UDS Services and OBD Services define the negative response codes (NRCs). The Dcm SWS uses these NRCs in the interfaces between the Dcm and other BSW modules and the SW-Cs. These NRCs are defined in the data type `Dcm_NegativeResponseCodeType`.

⌈
The order of the transmitted NRC shall be compliant with the one described in ISO14229-1 .
⌋

### 17. Non-volatile information

Several features of the Dcm require non-volatile information to be initialized. AUTOSAR does not describe how this information is accessed or if the information is already available when the Dcm is initialized. Therefore the access for the non-volatile information is implementation specific and has to be ensured during integration.

  Upstream requirements:
⌈
The Dcm shall check if the NvM is read out correctly. If the non-volatile information could not read out correct the Dcm shall start a default reaction. The default reaction is described in the chapter were the usage of the non-volatile data is described.
⌋

⌈
If the Dcm cancels a service with NvM access, it shall call `NvM_CancelJobs`().
⌋

The service is cancelled either by reaching the maximum number of RCRRP NRCs or by protocol preemption.

### 18. 类型
*原文标题：Types*

⌈
The Dcm shall treat non-integer data types (e.g. uint8) either like integer data types of the matching size or leave their contents uninterpreted in case DcmDspDataEndianness is configured to OPAQUE.
⌋

⌈
The Dcm module shall interpret opaque data as uint8 and shall always map it to an n-bytes sized signal. For opaque data endianness, DcmDspDataEndianness has to be configured to OPAQUE.
⌋

⌈
The Dcm shall extend the endianness conversion to signed data types.
⌋

The associated configurations can be found in the configuration DcmDspData.

### 19. Atomic 类型概述
*原文标题：Atomic types overview*

### 20. 数据 array 类型概述
*原文标题：Data array types overview*

### 21. Nested 数据类型概述
*原文标题：Nested Data types overview*

The data types used for DIDs and Diagnostic Routines may be defined in a nested way. A DID or Routine Argument may consist of several elements, e.g. an array where each array element is a structure, and that structure consists of several data elements typed by primitives, arrays, or further structures.

In the configuration this represented by a dedicated pattern:

* the root data element defines a pool of nested elements (e.g. DcmDspDidSignalCompositePool in DcmDspDid)
* the root data element has an anchor object (e.g. DcmDspDidSignal), this anchor object may represent primitive or array data, in this case there is no reference to a pool element defined (e.g. DcmDspDidSignalCompositeRef).
* if the anchor object represents a structure, then it defines one or more references to pool elements (e.g. DcmDspDidSignalCompositeRef). This defines that the referenced pool elements build the content of that structure.

A pool element may itself be a nested definition. This allows for an arbitrary nesting of structured elements.

⌈
If a DcmDspDidSignal contains at least one DcmDspDidSignalCompositeRef, then that DcmDspDidSignal shall only define the following parameters:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 数据类型 constraints
*原文标题：Data types constraints*

Existence of size parameter
⌈
DcmDspDataByteSize shall be present if DcmDspDataType is set to: UINT8_N, SINT8_N, UINT16_N, SINT16_N, UINT32_N, SINT32_N, DOUBLE_N, UINT64_N, SINT64_N, FLOAT_N or `UINT8_DYN`.
⌋

Note: DcmDspDataByteSize is not required for primitive datatypes

 Restrictions on size parameter for 16 Bit arrays
⌈
DcmDspDataByteSize shall be a multiple of 2 if the value is greater than 2 and DcmDspDataType is UINT16_N or SINT16_N.
⌋

 Restrictions on size parameter for 32 Bit arrays
⌈
DcmDspDataByteSize shall be a multiple of 4 if the value is greater than 4 and DcmDspDataType is UINT32_N or SINT32_N.
⌋

 Restrictions on size parameter for 64 Bit arrays
⌈
DcmDspDataByteSize shall be a multiple of 8 if the value is greater than 8 and DcmDspDataType is DOUBLE_N, UINT64_N or or SINT64_N.
⌋

 Define the usage of DcmDspRoutineParameterSize parameter
⌈
DcmDspRoutineParameterSize is only required if DcmDspRoutineSignalType is set to SINT8_N, SINT16_N, SINT32_N,, SINT64_N, UINT8_N, UINT16_N, UINT32_N, UINT64_N, DOUBLE_N, FLOAT_N or `VARIABLE_LENGTH`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Dcm_OpStatusType

For the operation using the `Dcm_OpStatusType`, the Dcm shall work as follow :

⌈
At first call of an operation using the `Dcm_OpStatusType`, the Dcm call the operation with OpStatus = `DCM_INITIAL`
⌋

⌈
If the value `DCM_E_FORCE_RCRRP` is returned from an operation using `Dcm_OpStatusType`, the Dcm shall invoke the transmit request for RCR-RP (NRC 0x78 transmission) and the Dcm shall not realize further invocation of the operation till RCR-RP is transmitted.
⌋

⌈
After transmit confirmation of a RCR-RP transmitted on the context of , the Dcm calls, from `Dcm_MainFunction` (due to call context), the operation again with OpStatus = `DCM_FORCE_RCRRP_OK`.
⌋

⌈
If a `DCM_E_PENDING` value is returned from an operation using the `Dcm_OpStatusType`, the Dcm call the operation on each `Dcm_MainFunction` call with OpStatus = `DCM_PENDING` as long as `DCM_E_PENDING` is returned.
⌋

### 24. Dcm_Cemr_{DID}类型
*原文标题：Dcm_Cemr_{DID}Type*

For ease of use in SWC, the Dcm generates a symbolic name to access the CEMR bit according to `Dcm_Cemr_`{DID}Type (see ) for each data element used in a DID with IO control. The SWC can work only with the generated symbolic value of the bitfield text table to mask out a certain bit. This helps to avoid confusion, while the first RID bit on the network controls the first parameter of the DID but that Bit is the most significant Bit in the MSB. The symbolic name also helps if the size of the RID is changing. In that case the bitmask changes as well, but the symbolic value is always updated.

### 25. 诊断 Session Layer (DSL)
*原文标题：Diagnostic Session Layer (DSL)*

### 26. 简介
*原文标题：Introduction*

Upstream requirements: ,
⌈
All functional areas of the DSL submodule shall be in conformance with the specifications ISO14229-1 , ISO14229-2  and the network-independent part of ISO15765-3 .
⌋

There is no network-dependent functional area in the DSL submodule. Within the configuration, some parameters can be set dependent on the network.

### 27. Use cases

The DSL submodule provides the following functionalities:

* Session handling (as required by ISO14229-1  and ISO 15765-3 )
* Application layer timing handling (as required by ISO14229-1  and ISO 15765-3 )
* Specific response behavior (as required by ISO14229-1  and ISO 15765-3 )
* Authentication state handling per diagnostic connection (as required by ISO 14229-1:2018)

  * Provide authentication state per connection
  * Manage authentication state transitions

### 28. Interaction with other 模块
*原文标题：Interaction with other modules*

The DSL has the following interaction with other modules:

* PduR module

  * PduR module provides data of incoming diagnostic requests.
  * The DSL submodule triggers output of diagnostic responses.

* DSD submodule

  * The DSL submodule informs the DSD submodule about incoming requests and provides the data.
  * The DSD submodule triggers output of diagnostic responses.

* SW-Cs / DSP submodule. The DSL submodule provides access to security and session state.
* ComM module

  * The DSL submodule guarantees the communication behavior required by the ComM module

### 29. 功能性描述
*原文标题：Functional description*

### 30. 概述
*原文标题：Overview*

The DSL submodule provides the following functionality:

Request Handling

* Forward requests from the PduR module to the DSD submodule.
* Concurrent TesterPresent ("keep alive logic").

Response Handling

* Forward responses from the DSD submodule to the PduR module.
* Guarantee response timing to tester.
* Support of periodic transmission.
* Support of ResponseOnEvent (ROE) transmission.
* Support of segmented response.
* Support of ResponsePending response triggered by the application.

Security Level Handling

* Manage security level.

Authentication

* Manage authentication state per diagnostic connection

Session State Handling

* Manage session state.
* Keep track of active non-default sessions.
* Allows modifying timings.

Diagnostic Protocol Handling

* Handling of different diagnostic protocols.
* Manage resources.

Communication Mode Handling

* Handling of communication requirements (Full- / Silent- / No Communication).
* Indicating of active / inactive diagnostic.
* Enabling / disabling all kinds of diagnostic transmissions.

### 31. Forward requests from the PduR 模块 to the DSD submodule
*原文标题：Forward requests from the PduR module to the DSD submodule*

The PduR module indicates the Dcm module whenever a reception of new diagnostic request content is started on a DcmDslProtocolRxPduId, which is assigned to the Dcm module. This is done by calling `Dcm_StartOfReception`, which inform the Dcm module of the data size to be received and provides the data of the first frame or single frame, and allows the Dcm to reject the reception if the data size overflows its buffer size, or if the requested service is not available. The further call to `Dcm_CopyRxData` request the Dcm module to copy the data from the provided buffer to the Dcm buffer. If the reception of a diagnostic request is finished (when `Dcm_StartOfReception` succeeded) the PduR module will call `Dcm_TpRxIndication` to give a receive indication to the Dcm module. The Dcm shall be able to use generic connections, where the addressing information is provided to Dcm by `Dcm_StartOfReception` via the MetaData of the DcmRxPdu. This addressing information must be stored and used for the response and for detection of requests from the same tester. see section  Generic Connection Handling for further details.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Dcm_StartOfReception

⌈
If the requested size is large than the buffer available in the DCM, the function `Dcm_StartOfReception` shall return `BUFREQ_E_OVFL` (see ).
⌋

  Upstream requirements:
⌈
When the API `Dcm_StartOfReception` is invoked with TpSduLength equal to 0, the value `BUFREQ_E_NOT_OK` shall be returned.
⌋

 Message reception according to ISO 14229-2
  Upstream requirements:
⌈
The Dcm shall receive and handle diagnostic messages according to the session layer services of ISO14229-2 .
⌋

 Mapping of T_DataSOM.ind
  Upstream requirements:
⌈
The Dcm shall map a call of `Dcm_StartOfReception` to the T_DataSOM.ind from ISO14229-2 .
⌋

 Mapping of T_Data.ind
  Upstream requirements:
⌈
The Dcm shall map a call of `Dcm_TpRxIndicationto` T_Data.ind from ISO14229-2 .
⌋

 Multi client handling
  Upstream requirements:
⌈
The Dcm shall handle requests from multiple clients according to ISO14229-1  Annex J.
⌋

"Figure J.2 - Multiple client handling flow" of ISO14229-1  gives a comprehensive overview of parallel client request handling. A major aspect is the support of additional protocol resources. The Dcm follows this flow chart and provides protocol resources per configured DcmDslProtocolRow.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Dcm_CopyRxData

⌈
If `Dcm_StartOfReception` returns `BUFREQ_OK`, the further call to `Dcm_CopyRxData` shall copy the data from the buffer provided in info parameter) to the Dcm buffer and update the bufferSizePtr parameter with remaining free place in Dcm receive buffer after completion of this call.
⌋

⌈
When the API `Dcm_CopyRxData` is invoked with SduLength from info equal to 0, the value `BUFREQ_OK` shall be returned and bufferSizePtr shall be filled with the remaining size of the Rx buffer.
⌋

Note: The size of the Rx buffer is based on the buffer length, which is returned in the parameter RxBufferSizePtr of API `Dcm_StartOfReception`.

⌈
After starting to copy the received data (see ), the Dcm module shall not access the receive buffer until it is notified by the service `Dcm_TpRxIndication` about the successful completion or unsuccessful termination of the reception.
⌋

Note: `Dcm_TpRxIndication` is only expected when `Dcm_StartOfReception` succeeded

### 34. Dcm_TpRxIndication

⌈
If `Dcm_TpRxIndication` is called with parameter Result different from E_OK, then the Dcm module shall not evaluate the buffer assigned to the I-PDU, which is referenced in parameter DcmRxPduId.
⌋

Rationale for : It is undefined which part of the buffer contains valid data in this case

### 35. Concurrent TesterPresent ("keep alive logic")

The Concurrent TesterPresent is defined by ISO14229-1  and also called "bypass logic" or "keep alive logic". The purpose is to keep the non-default session active and reset the S3 timer defined by ISO14229-2 . Concurrent TesterPresent are only received by functional addressing and are processed independent from any activity on a physical request and service processing.

 Concurrent tester present support
  Upstream requirements:
⌈
The Dcm shall handle and process the Concurrent TesterPresent according to ISO14229-1 .
⌋

In addition to ISO14229-1  the Dcm limits the processing for received Concurrent TesterPresent messages to the connection from where the request to enter a non-default session was received. This avoids that a tester that did not request the non-default session can influence the protocol and timing behavior of another tester.

 Concurrent tester present from different connections
  Upstream requirements:
⌈
The Dcm shall only process and handle Concurrent TesterPresent messages received on the same DcmDslConnection that requested the Dcm to enter the non-default session.
⌋

### 36. Dcm_CopyTxData

If the copied data is smaller than the length requested to transmit within the service `PduR_DcmTransmit`() the Dcm module will be requested by the service `Dcm_CopyTxData` to provide another data when the current copied data have been transmitted.

⌈
If the function `Dcm_CopyTxData` is called and the Dcm module successfully copied the data in the buffer provided in info parameter, then the function shall return `BUFREQ_OK`.
⌋

⌈
Caveats of `Dcm_CopyTxData`:

* The value of parameter availableDataPtr of function `Dcm_CopyTxData` shall not exceed the number of Bytes still to be sent.
* If this service returns `BUFREQ_E_NOT_OK` the transmit requests issued by calling the service `PduR_DcmTransmit`() is still not finished. A final confirmation (indicating an error with call of service `Dcm_TpTxConfirmation`) is required to finish this service and to be able to start another transmission (call to `PduR_DcmTransmit`()). So it is up to the transport protocol to confirm the abort of transmission.
⌋

### 37. Dcm_TpTxConfirmation

⌈
If the function `Dcm_TpTxConfirmation` is called, then the Dcm module shall unlock the transmit buffer.
⌋

⌈
If the function `Dcm_TpTxConfirmation` is called, then the Dcm module shall stop error handling (Page buffer timeout, P2ServerMax/P2*ServerMax timeout ).
⌋

For transmission via FlexRay the following restriction has to be considered: Since the FlexRay Specification does not mandate the existence of a transmit interrupt, the exact meaning of this confirmation (i.e. "transfer into the FlexRay controller's send buffer" OR "transmission onto the FlexRay network") depends on the capabilities of the FlexRay communication controller and the configuration of the FlexRay Interface.

### 38. Forward responses from the DSD submodule to the PduR 模块
*原文标题：Forward responses from the DSD submodule to the PduR module*

Upstream requirements:
⌈
The DSD submodule shall request the DSL submodule for transmission of responses.
⌋

  Upstream requirements:
⌈
When the diagnostic response of a DcmDslMainConnection is ready, the DSL submodule shall trigger the transmission of the diagnostic response to the PduR module by calling `PduR_DcmTransmit`() using the corresponding DcmDslProtocolTxPduRef parameter as PduId.
⌋

⌈
In case of PeriodicTransmission, the Dcm shall provide in the call to `PduR_DcmTransmit`() the full payload data and expect no call to `Dcm_CopyTxData`.
⌋

  Upstream requirements:
⌈
In case of PeriodicTransmission, the Dcm will be called for periodic transmission with `Dcm_TxConfirmation` to indicate the transmission result.
⌋

Responses are sent with the DcmTxPduId, which is linked in the Dcm module configuration to the DcmDslProtocolRxPduId, i.e. the ID the request was received with (see configuration parameter DcmDslProtocolTx) Within `PduR_DcmTransmit`() only the length information and, for generic connections, the addressing information, is given to the PduR module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Generic Connection 处理
*原文标题：Generic Connection Handling*

The Dcm shall be able to handle generic connections, identified by DcmPdus with MetaDataItems of type `SOURCE_ADDRESS_16` and `TARGET_ADDRESS_16`. These connections carry the actual tester address at run time. Generic connections are supported for diagnostics over IP and FlexRay diagnostics, and CAN diagnostics using normal fixed or mixed 29 bit addressing formats according to ISO15765-2 . Depending on the actual layout of the CAN IDs, generic connections could also be used for extended or normal and mixed 11 bit addressing formats. The Dcm is not aware of the actual addressing format used by CanTp. Several connections may reference the same DcmPdus.

⌈
Generic connections shall be consistent. This means that the MetaDataItems and the PduLength of all referenced PDUs of a DcmDslConnection (DcmDslProtocolRxPduRef, DcmDslProtocolTxPduRef, DcmDslPeriodicTxPduRef)are identical.
⌋

⌈
The source address of diagnostic requests received via a generic connection must be stored. It is provided in the MetaDataItem `SOURCE_ADDRESS_16` provided via `Dcm_StartOfReception`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Guarantee 时序 to tester by sending busy responses
*原文标题：Guarantee timing to tester by sending busy responses*

Upstream requirements: ,
⌈
If the Application (or the DSP submodule) is able to perform a requested diagnostic task, but needs additional time to finish the task and prepare the response, then the DSL submodule shall send a negative response with NRC 0x78 (Response pending) when reaching the response time (DcmDspSessionP2ServerMax - DcmTimStrP2ServerAdjust respectively DcmDspSessionP2StarServerMax - DcmTimStrP2StarServerAdjust).
⌋

Rationale for : The DSL submodule guarantees the response timing to tester.

⌈
The DSL submodule shall send negative responses as required in  from a separate buffer.
⌋

Rationale for : This is needed in order to avoid overwriting the ongoing processing of requests, e.g. the application already prepared response contents in the diagnostic buffer. The number of negative responses with NRC 0x78 (response pending) for one diagnostic request can be limited by the configuration parameter DcmDslDiagRespMaxNumRespPend to avoid endless NRC 0x78 transmission in case of an application deadlock.

⌈
The maximum number of negative responses with NRC 0x78 can be configured using the optional configuration parameter DcmDslDiagRespMaxNumRespPend (see `ECUC_Dcm_00693`).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 支持 of periodic transmission
*原文标题：Support of periodic transmission*

The UDS service ReadDataByPeriodicIdentifier (0x2A) allows the tester to request the periodic transmission of data record values from the ECU identified by one or more periodicDataIdentifiers.

⌈
The Dcm module shall send responses for periodic transmissions using a separate protocol and a separate buffer of configurable size.
⌋

The DcmDslPeriodicTransmissionConRef configuration parameter allows linking the protocol used to receive the periodic transmission request / transmit the periodic transmission response to the protocol used for the transmission of the periodic transmission messages. Note that multiple DcmTxPduIds can be assigned to the periodic transmission protocol. The Dcm module respects several restrictions according to the communication mode:

⌈
Periodic transmission communication shall only take place in Full Communication Mode.
⌋

Periodic transmission events can occur when not in Full Communication Mode. So the following requirement exists:

⌈
The Dcm module shall discard periodic transmission events beside Full Communication Mode and shall not queue it for transmission.
⌋

⌈
Periodic transmission events shall not activate the Full Communication Mode.
⌋

### 其余 583 章（内容从略，见纯文本全文）

42. 支持 of segmented response (paged-buffer)
43. 支持 of ResponsePending response triggered by the Application
44. Manage security level
45. 初始化 sequence
46. AttemptCounter update
47. Manage session 状态
48. Manage authentication 状态
49. Non-default sessions
50. Allow to modify timings
51. Different 服务 tables
52. Prioritization of 协议
53. Preemption of 协议
54. Parallel 诊断协议 processing
55. Manage resources
56. Communication 模式处理
57. No Communication
58. Silent Communication
59. Full Communication
60. 诊断 Activation 状态
61. 诊断服务 Dispatcher (DSD)
62. 简介
63. Use cases
64. Receive a request message and transmit a positive response message
65. Receive a request message and suppress a positive response
66. Receive a request message and suppress a negative response
67. Receive a request message and transmit a negative response message
68. Send a positive response message without corresponding request
69. Segmented Responses (paged-buffer)
70. Interaction of the DSD with other 模块
71. Interaction of the DSD with the DSL main functionality
72. Interaction of the DSD with the DSP
73. 功能性描述 of the DSD
74. 支持 checking the 诊断服务 identifier and adapting the 诊断 message
75. 处理 of "suppressPosRspMsgIndicationBit"
76. Verification functionality
77. Verification of the 诊断服务 access rights
78. Verification of the 诊断 Session
79. Verification of the 服务 Security Access levels
80. Verification of the 服务模式 dependencies
81. Check format and subfunction 支持
82. Verification of the Manufacturer Application environment/permission
83. Verification of the Supplier Application environment/permission
84. Distribution of 诊断 message to DSP submodule
85. Assemble positive or negative response
86. Positive Response
87. Negative Response
88. Suppression of response
89. Initiate transmission
90. 诊断服务 Processing (DSP)
91. 通用
92. Check format and subfunction 支持
93. Assemble response
94. Negative Response Codes 处理
95. 诊断模式 declaration groups
96. Environmental condition dependent execution
97. Sender/Receiver Communication
98. Passing SwDataDefProps properties from DEXT 文件 to the Dcm 服务 SW-C
99. DcmDspDiagnosticDataElementRef 工作流
100. DcmDspAlternativeDataType.DcmApplicationDataType 工作流
101. Asynchronous call 行为
102. UDS 服务
103. 通用行为 using DEM 接口
104. 服务 0x10 - 诊断 Session 控制
105. 服务 0x11 - ECUReset
106. 服务 0x14 - Clear 诊断 Information
107. 服务 0x19 - Read DTC Information
108. Subfunctions 0x01, 0x07 and 0x12
109. Subfunctions 0x02, 0x0A, 0x13, 0x15 and 0x17
110. Subfunction 0x08
111. Subfunction 0x09
112. Subfunctions 0x06/0x19
113. Subfunction 0x03
114. Subfunctions 0x04 and 0x18
115. Subfunction 0x05
116. Subfunctions 0x0B, 0x0C, 0x0D and 0x0E
117. Subfunction 0x14
118. Subfunction 0x1A
119. Subfunction 0x42
120. Subfunction 0x55
121. Subfunction 0x56
122. 服务 0x22 - ReadDataByIdentifier
123. UDS DID
124. OBD DID
125. 服务 0x24 - ReadScalingDataByIdentifier
126. 服务 0x27 - SecurityAccess
127. 服务 0x28 - CommunicationControl
128. 服务 0x29 - Authentication
129. De-authentication
130. Verify Certificates
131. Proof of ownership client
132. 定义 and verification of roles
133. 定义 and verification of white lists
134. AuthenticationConfiguration
135. TransmitCertificate
136. 服务 0x2A - ReadDataByPeriodicIdentifier
137. Scheduler PeriodicTransmission
138. 服务 0x2C - DynamicallyDefineDataIdentifier
139. 服务 0x2E - WriteDataByIdentifier
140. 服务 0x2F - InputOutputControlByIdentifier
141. 服务 0x31 - RoutineControl
142. 处理 of OBD RID
143. 服务 0x3E - Tester Present
144. 服务 0x3D - WriteMemoryByAddress
145. 服务 0x23 - ReadMemoryByAddress
146. 服务 0x34 - RequestDownload
147. 服务 0x35 - RequestUpload
148. 服务 0x36 - TransferData
149. 服务 0x37 - RequestTransferExit
150. 服务 0x38 - RequestFileTransfer
151. 服务 0x85 - ControlDTCSetting
152. 服务 0x86 - ResponseOnEvent (RoE)
153. 服务 0x87 - LinkControl
154. OBD 服务
155. 概述
156. 通用行为
157. 服务 $01 - Request Current Powertrain 诊断数据
158. 服务 $02 - Request Power Train FreezeFrame 数据
159. 服务 $02 - PID$02
160. 服务 $02 - availability PID
161. 服务 $02 - other PIDs
162. 服务 $03 $07 $0A - Obtaining DTCs
163. 服务 $04 - Clear/reset emission-related 诊断 information
164. 服务 $06 - Request On-Board Monitoring Test-results for Specific Monitored Systems
165. 通用需求
166. Test results obtained via Dem interaction
167. 服务 $08 - Request 控制 of On-Board 系统, Test or 组件
168. 服务 $09 - Request Vehicle Information
169. Interaction usecases
170. Jump to Bootloader
171. Jump due to ECUReset
172. Jump from Bootloader / ECUReset
173. Flags 管理
174. Jump to Bootloader
175. Jump from Bootloader
176. 错误通知
177. Synchronous and Asynchronous implementation
178. DID 配置
179. Individual DID
180. DID ranges
181. Secure Coding
182. 启动行为
183. 错误分类
184. Development 错误
185. Runtime 错误
186. Production 错误
187. Extended Production 错误
188. 安全事件
189. API 规范
190. Imported 类型
191. 类型定义
192. Dcm_CommunicationModeType
193. Dcm_ConfigType
194. Dcm_ReturnReadMemoryType
195. Dcm_ReturnWriteMemoryType
196. Dcm_EcuStartModeType
197. Dcm_ProgConditionsType
198. Dcm_MsgItemType
199. Dcm_MsgType
200. Dcm_MsgLenType
201. Dcm_MsgAddInfoType
202. Dcm_IdContextType
203. Dcm_MsgContextType
204. Dcm_ExtendedOpStatusType
205. 功能定义
206. Functions provided for other BSW components
207. Dcm_Init
208. Dcm_DemTriggerOnDTCStatus
209. Dcm_GetVin
210. Dcm_BndMWriteBlockFinish
211. Functions provided to BSW 模块 and to SW-Cs
212. Dcm_SetDeauthenticatedRole
213. Dcm_GetSecurityLevel
214. Dcm_GetSesCtrlType
215. Dcm_ResetToDefaultSession
216. Dcm_ SetActiveDiagnostic
217. Callback 通知
218. Dcm_StartOfReception
219. Dcm_CopyRxData
220. Dcm_TpRxIndication
221. Dcm_CopyTxData
222. Dcm_TpTxConfirmation
223. Dcm_TxConfirmation
224. Dcm_ComM_NoComModeEntered
225. Dcm_ComM_SilentComModeEntered
226. Dcm_ComM_FullComModeEntered
227. Dcm_CsmAsyncJobFinished
228. Dcm_KeyMAsyncCertificateVerifyFinished
229. Callout 定义
230. Dcm_ReadMemory
231. Dcm_WriteMemory
232. Dcm_SetProgConditions
233. Dcm_GetProgConditions
234. Dcm_ProcessRequestAddFile
235. Dcm_ProcessRequestDeleteFile
236. Dcm_ProcessRequestReplaceFile
237. Dcm_ProcessRequestReadFile
238. Dcm_ProcessRequestReadDir
239. Dcm_WriteFile
240. Dcm_ReadFileOrDir
241. UploadDownloadServices
242. ProcessRequestDownload
243. ProcessRequestTransferExit
244. ProcessRequestUpload
245. ProcessTransferDataRead
246. ProcessTransferDataWrite
247. Scheduled functions
248. Dcm_MainFunction
249. Expected 接口
250. Mandatory 接口
251. Optional 接口
252. Configurable 接口
253. SecurityAccess
254. GetSeed
255. CompareKey
256. GetSecurityAttemptCounter
257. SetSecurityAttemptCounter
258. DataServices
259. ReadData
260. WriteData
261. ReadDataLength
262. ConditionCheckRead
263. GetScalingInformation
264. ReturnControlToECU
265. ResetToDefault
266. Synchronous 接口
267. Asynchronous 接口
268. FreezeCurrentState
269. Synchronous 接口
270. Asynchronous 接口
271. ShortTermAdjustment
272. Synchronous 接口
273. Asynchronous 接口
274. DataServices_DIDRange
275. IsDidAvailable
276. ReadDidData
277. WriteDidData
278. ReadDidRangeDataLength
279. InfoTypesServices
280. GetInfotypeValueData
281. RoutineServices
282. Xxx_Start Operation
283. Xxx_StartConfirmation Operation
284. Xxx_Stop Operation
285. Xxx_StopConfirmation Operation
286. Xxx_RequestResults Operation
287. Xxx_RequestResultsConfirmation Operation
288. RequestControlServices
289. RequestControl callout
290. ServiceRequestNotification
291. Indication
292. Confirmation
293. ClearDTCCheckFnc
294. Dcm as Service-Component
295. Implementation 数据类型
296. Dcm_OpStatusType
297. Dcm_ConfirmationStatusType
298. Dcm_SecLevelType
299. Dcm_SesCtrlType
300. Dcm_ProtocolType
301. Dcm_NegativeResponseCodeType
302. Dcm_DataElementType_{数据}类型
303. Dcm_DataElement_{数据}StructuredType
304. Dcm_DataElementType_{数据}ArrayType
305. Dcm_DataElementType_{数据}PrimitiveType
306. Dcm_DataArrayTypeUint8_{数据}类型
307. {DID}_Struct_DataType
308. Dcm_RangeArray_{Range}类型
309. Dcm_InfoTypeServicesArray_{VehInfoData}类型
310. Dcm_RequestControlServicesInArray_{Tid}类型
311. Dcm_RequestControlServicesOutArray_{Tid}类型
312. Dcm_ScalingInfoArray_{数据}类型
313. Dcm_RequestDataOut_{Routine}_{Signal}PrimitivType
314. Dcm_RequestDataIn_{Routine}_{Signal}PrimitiveType
315. Dcm_RequestDataOut_{Routine}_{Signal}类型
316. Dcm_RequestDataOut_{Routine}_{Signal}StructuredType
317. Dcm_RequestDataIn_{Routine}_{Signal}类型
318. Dcm_RequestDataIn_{Routine}_{Signal}StructuredType
319. Dcm_RequestDataOut_{Routine}_{Signal}ArrayType
320. Dcm_RequestDataIn_{Routine}_{Signal}ArrayType
321. Dcm_RequestFlexibleOutArrayData_{Routine}_{Signal}类型
322. Dcm_RequestFlexibleInArrayData_{Routine}_{Signal}类型
323. Dcm_StartDataIn_{Routine}_{Signal}PrimitivType
324. Dcm_StartDataIn_{Routine}_{Signal}类型
325. Dcm_StartDataIn_{Routine}_{Signal}StructuredType
326. Dcm_StartDataIn_{Routine}_{Signal}ArrayType
327. Dcm_StartDataOut_{Routine}_{Signal}PrimitivType
328. Dcm_StartDataOut_{Routine}_{Signal}类型
329. Dcm_StartDataOut_{Routine}_{Signal}StructuredType
330. Dcm_StartDataOut_{Routine}_{Signal}ArrayType
331. Dcm_StartFlexibleInArrayData_{Routine}_{Signal}类型
332. Dcm_StartFlexibleOutArrayData_{Routine}_{Signal}类型
333. Dcm_StopDataIn_{Routine}_{Signal}PrimitivType
334. Dcm_StopDataIn_{Routine}_{Signal}类型
335. Dcm_StopDataIn_{Routine}_{Signal}StructuredType
336. Dcm_StopDataIn_{Routine}_{Signal}ArrayType
337. Dcm_StopDataOut_{Routine}_{Signal}PrimitivType
338. Dcm_StopDataOut_{Routine}_{Signal}类型
339. Dcm_StopDataOut_{Routine}_{Signal}StructuredType
340. Dcm_StopDataOut_{Routine}_{Signal}ArrayType
341. Dcm_StopFlexibleInArrayData_{Routine}_{Signal}类型
342. Dcm_StopFlexibleOutArrayData_{Routine}_{Signal}类型
343. Dcm_KeyArray_{SecurityLevel}类型
344. Dcm_SeedArray_{SecurityLevel}类型
345. Dcm_SecurityAccessDataRecordArray_{SecurityLevel}类型
346. Dcm_RequestDataArrayType
347. Dcm_ControlMask_{DID}类型
348. Dcm_inputOutputControlParameterType
349. Dcm_IOOperationRequest_{DID}类型
350. Dcm_IOOperationResponseType
351. Dcm_DidSupportedType
352. Dcm_FileAndDirNameType
353. Dcm_ResponseDataArrayType
354. Dcm_AuthenticationRoleType
355. Dcm_ControlMask_{数据}ArrayType
356. Dcm_ControlMask_{数据}PrimitiveType
357. Dcm_Cemr_{DID}类型
358. Sender-Receiver-Interfaces
359. DataServices_{DID}
360. DataServices_{数据}
361. IOControlRequest_{DID}
362. IOControlResponse_{DID}
363. Client-Server-Interfaces
364. SecurityAccess_{SecurityLevel}
365. DataServices_{数据}
366. ReadData
367. WriteData
368. ReadDataLength
369. ConditionCheckRead
370. GetScalingInformation
371. ReturnControlToEcu
372. ResetToDefault
373. FreezeCurrentState
374. ShortTermAdjustment
375. DataServices_DIDRange_{Range}
376. InfotypeServices_{VehInfoData}
377. RoutineServices_{RoutineName}
378. RequestControlServices_{Tid}
379. ServiceRequestNotification
380. UploadDownloadServices
381. DCMServices
382. Authentication
383. NvDataInterface
384. DataServices_{DID}
385. Ports
386. DataServices_DIDRange_{Range}
387. DataServices_{DID}
388. DataServices_{数据}
389. IOControlRequest_{DID}
390. IOControlResponse_{DID}
391. DCMServices
392. InfotypeServices_{VehInfoData}
393. RequestControlServices_{Tid}
394. ServiceRequestManufacturerNotification_{Name}
395. ServiceRequestSupplierNotification_{Name}
396. RoutineServices_{RoutineName}
397. SecurityAccess_{SecurityLevel}
398. Dcm_DiagnosticSessionControlModeSwitchInterface
399. Dcm_EcuResetModeSwitchInterface
400. Dcm_ModeRapidPowerShutDownModeSwitchInterface
401. Dcm_CommunicationControlModeSwitchInterface_{ComMChannelName}
402. Dcm_ControlDTCSettingModeSwitchInterface
403. Dcm_SecurityAccessModeSwitchInterface
404. Dcm_UploadDownloadServices
405. Dcm_Authentication_{Connection}
406. Dcm_AuthenticationStateMSI
407. ModeDeclarationGroups
408. DcmDiagnosticSessionControl
409. DcmEcuReset
410. DcmModeRapidPowerShutDown
411. DcmCommunicationControl
412. DcmControlDTCSetting
413. DcmSecurityAccess
414. DcmAuthenticationState
415. Mode-Switch-Interfaces
416. Dcm_DiagnosticSessionControlModeSwitchInterface
417. Dcm_EcuResetModeSwitchInterface
418. Dcm_ModeRapidPowerShutDownModeSwitchInterface
419. Dcm_CommunicationControlModeSwitchInterface
420. Dcm_ControlDTCSettingModeSwitchInterface
421. Dcm_SecurityAccessModeSwitchInterface
422. Dcm_AuthenticationStateModeSwitchInterface
423. External 诊断服务 processing
424. <模块>_<DiagnosticService>
425. <模块>_<DiagnosticService>_<SubService>
426. Internal 接口 (not normative)
427. DslInternal_SetSecurityLevel
428. DslInternal_SetSesCtrlType
429. DspInternal_DcmConfirmation
430. DsdInternal_StartPagedProcessing
431. DspInternal_CancelPagedBufferProcessing
432. DsdInternal_ProcessPage
433. 时序图
434. 概述
435. DSL (诊断 Session Layer)
436. Process Busy 行为
437. Update 诊断 Session 控制 when timeout occurs
438. Process single response of ReadDataByPeriodicIdentifier
439. Process single event-triggered response of ResponseOnEvent
440. Process concurrent requests
441. 接口 to ComManager
442. 处理 in Default Session
443. 处理 in Non-Default Session
444. Session transitions
445. Communication States
446. Receive request message and transmit negative response message
447. Process 服务 Request with paged-buffer
448. Process copy 数据 in reception
449. Process copy 数据 in transmission
450. DSP (诊断服务 Processing)
451. 接口 DSP - DEM (服务 0x19, 0x14, 0x85)
452. 接口 special 服务
453. Process 诊断 Session 控制
454. Process Tester Present
455. Process Security Access
456. Process ResponseOnEvent OnDtcChange
457. Process ResponseOnEvent OnChangeOfDataIdentifier
458. Process Jump to Bootloader
459. Process IOControlRequest 处理
460. 配置规范
461. How to read this chapter
462. Containers and 配置 parameters
463. Dcm
464. DcmConfigSet
465. DcmPageBufferCfg
466. DcmProcessingConditions
467. DcmDsd
468. DcmDsd
469. DcmDsdService
470. DcmDsdServiceRequestManufacturerNotification
471. DcmDsdServiceRequestSupplierNotification
472. DcmDsdServiceTable
473. DcmDsdSubService
474. DcmDsl
475. DcmDsl
476. DcmDslBuffer
477. DcmDslDiagResp
478. DcmDslProtocol
479. DcmDslProtocolRow
480. DcmDslConnection
481. DcmDslMainConnection
482. DcmDslProtocolRx
483. DcmDslProtocolTx
484. DcmDslPeriodicTransmission
485. DcmDslPeriodicConnection
486. DcmDsp
487. DcmDspReadDTCInformation
488. DcmDspReadDTCInformationUserDefinedFaultMemory
489. DcmDspAuthentication
490. DcmDspAuthenticationTransmitCertificate
491. DcmDspAuthenticationRow
492. DcmDspAuthenticationConnection
493. Communication 控制
494. DcmDspComControl
495. DcmDspComControlAllChannel
496. DcmDspComControlSetting
497. DcmDspComControlSpecificChannel
498. DcmDspComControlSubNode
499. DcmDspCommonAuthorization
500. DIDs
501. DcmDspDid
502. DcmDspDidInfo
503. DcmDspDidRead
504. DcmDspDidSignal
505. DcmDspDidSignalCompositePool
506. DcmDspDidSupportInfo
507. DcmDspDidRange
508. DcmDspDidWrite
509. DcmDspControlDTCSetting
510. 数据 elements
511. DcmDspData
512. DcmDspDiagnosisScaling
513. DcmDspArgumentScaling
514. DcmDspAlternativeArgumentData
515. DcmDspTextTableMapping
516. DcmDspAlternativeDataInterface
517. DcmDspAlternativeDataType
518. DcmDspAlternativeDiagnosticDataElement
519. DcmDataElementInstance
520. DcmDspExternalSRDataElementClass
521. DcmDspPidService01ExternalSRDataElementClass
522. DcmSubElementInDataElementInstance
523. DcmDspDidDataSupportInfo
524. DcmDspDataInfo
525. DcmDspDidControl
526. DcmDspDidControlEnableMask
527. Ecu Reset
528. DcmDspEcuReset
529. DcmDspEcuResetRow
530. 存储
531. DcmDspMemory
532. DcmDspMemoryTransfer
533. DcmDspAddressAndLengthFormatIdentifier
534. DcmDspMemoryIdInfo
535. DcmDspMemoryTransferIdInfo
536. DcmDspReadMemoryRangeByLabelInfo
537. DcmDspReadMemoryRangeInfo
538. DcmDspWriteMemoryRangeByLabelInfo
539. DcmDspWriteMemoryRangeInfo
540. PIDs
541. DcmDspPid
542. DcmDspPidSupportInfo
543. DcmDspPidData
544. DcmDspPidService01
545. DcmDspPidService02
546. DcmDspPidDataSupportInfo
547. DcmDspRequestControl
548. DcmDspRequestFileTransfer
549. Response on Event
550. DcmDspRoe
551. Routines
552. DcmDspRoutine
553. DcmDspRequestRoutineResults
554. DcmDspRequestRoutineResultsIn
555. DcmDspRequestRoutineResultsInSignal
556. DcmDspRequestRoutineResultsInSignalCompositePool
557. DcmDspRequestRoutineResultsOut
558. DcmDspRequestRoutineResultsOutSignal
559. DcmDspRequestRoutineResultsOutSignalCompositePool
560. DcmDspStartRoutine
561. DcmDspStartRoutineIn
562. DcmDspStartRoutineInSignal
563. DcmDspStartRoutineInSignalCompositePool
564. DcmDspStartRoutineOut
565. DcmDspStartRoutineOutSignal
566. DcmDspStopRoutine
567. DcmDspStopRoutineIn
568. DcmDspStartRoutineOutSignalCompositePool
569. DcmDspStopRoutineInSignal
570. DcmDspStopRoutineInSignalCompositePool
571. DcmDspStopRoutineOut
572. DcmDspStopRoutineOutSignal
573. DcmDspStopRoutineOutSignalCompositePool
574. Session Security and Modes
575. DcmDspSecurity
576. DcmDspSecurityRow
577. DcmDspSession
578. DcmDspSessionRow
579. DcmModeCondition
580. DcmSwcDataElementValue
581. DcmSwcDataElementPrimitive
582. DcmSwcDataElementArray
583. DcmSwcDataElementArrayElement
584. DcmModeRule
585. DcmDspVehInfo
586. DcmDspVehInfoData
587. DcmDspPeriodicTransmission
588. DcmDspClearDTC
589. DcmGeneral
590. DcmSecurityEventRefs
591. DcmSecureCoding
592. 协议配置示例
593. 发布信息
594. 附录
595. Change history of AUTOSAR traceable items
596. Traceable item history of this document according to AUTOSAR Release R26-11
597. Added 规范 Items in R26-11
598. Changed 规范 Items in R26-11
599. Deleted 规范 Items in R26-11
600. Added Constraints in R26-11
601. Changed Constraints in R26-11
602. Deleted Constraints in R26-11
603. Traceable item history of this document according to AUTOSAR Release R25-11
604. Added 规范 Items in R25-11
605. Changed 规范 Items in R25-11
606. Deleted 规范 Items in R25-11
607. Added Constraints in R25-11
608. Changed Constraints in R25-11
609. Deleted Constraints in R25-11
610. Traceable item history of this document according to AUTOSAR Release R24-11
611. Added 规范 Items in R24-11
612. Changed 规范 Items in R24-11
613. Deleted 规范 Items in R24-11
614. Added Constraints in R24-11
615. Changed Constraints in R24-11
616. Deleted Constraints in R24-11
617. Traceable item history of this document according to AUTOSAR Release R23-11
618. Added 规范 Items in R23-11
619. Changed 规范 Items in R23-11
620. Deleted 规范 Items in R23-11
621. Added Constraints in R23-11
622. Changed Constraints in R23-11
623. Deleted Constraints in R23-11
624. 不适用需求
