# Specification of Ethernet Driver (`EthernetDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 430 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_EthernetDriver_430\AUTOSAR_CP_SWS_EthernetDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_EthernetDriver_430\AUTOSAR_CP_SWS_EthernetDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_EthernetDriver_430\zzgen\CP_SWS_EthernetDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Ethernet Driver.

In the AUTOSAR Layered Software Architecture, the Ethernet Driver belongs to the Microcontroller Abstraction Layer, or more precisely, to the Communication Drivers.

This indicates the main task of the Ethernet Driver:

Provide to the upper layer (Ethernet Interface) a hardware independent interface comprising multiple equal controllers. This interface shall be uniform for all controllers. Thus, the upper layer (Ethernet Interface) may access the underlying bus system in a uniform manner. The interface provides functionality for initialization, configuration and data transmission. The configuration of the Ethernet Driver however is bus specific, since it takes into account the specific features of the communication controller.

A single Ethernet Driver module supports only one type of controller hardware, but several controllers of the same type. Additionally, the Ethernet Driver has to be able to be interoperable with the Switch Driver, if it is in a managed mode. In this case, a special treatment of the Ethernet frame might be necessary to fit a specific interpretation by a Switch device afterwards. The Ethernet Driver's prefix requires a unique namespace. The Ethernet Interface can access different controller types using different Ethernet Drivers using this prefix. The decision which driver to use to access a particular controller is a configuration parameter of the Ethernet Interface.

Figure  depicts the lower part of the Ethernet stack. One Ethernet Interface accesses several controllers using one or several Ethernet Drivers.

Note: The Ethernet Driver is specified in a way that allows for object code delivery of the code module, following the "one-fits-all" principle, i.e. the entire configuration of the Ethernet Interface can be carried out without modifying any source code. Thus, the configuration of the Ethernet Driver can be carried out largely without detailed knowledge of the Ethernet Driver software.

## 模块依赖

This chapter lists the modules interacting with the Ethernet Driver module.

Modules that use Ethernet Driver module (Calls between drivers are abstracted by the EthIf):

* Ethernet Interface (EthIf, see )
* Ethernet Transceiver Driver (EthTrcv see )
* Ethernet Switch Driver (EthSwt, see )

Modules used by the Ethernet Driver module:

* BSW Scheduler mechanisms for data consistency and main function handling.

Dependencies to other Modules:

* On certain systems the controller might share resources with other components (e.g. the MCU, Port), and may depend on their configuration. If those resources are within scope of the other modules (e.g. PLL configuration, memory mapping, etc.) the Ethernet Driver module does not take care of configuring those components but requires their preceding initialization.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

Currently, chapter  does not describe the versions of dependent modules. Thus, a version check will extend the chapter.

### 2. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Ethernet Driver.

In the AUTOSAR Layered Software Architecture, the Ethernet Driver belongs to the Microcontroller Abstraction Layer, or more precisely, to the Communication Drivers.

This indicates the main task of the Ethernet Driver:

Provide to the upper layer (Ethernet Interface) a hardware independent interface comprising multiple equal controllers. This interface shall be uniform for all controllers. Thus, the upper layer (Ethernet Interface) may access the underlying bus system in a uniform manner. The interface provides functionality for initialization, configuration and data transmission. The configuration of the Ethernet Driver however is bus specific, since it takes into account the specific features of the communication controller.

A single Ethernet Driver module supports only one type of controller hardware, but several controllers of the same type. Additionally, the Ethernet Driver has to be able to be interoperable with the Switch Driver, if it is in a managed mode.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Acronyms, Abbreviations and 定义
*原文标题：Acronyms, Abbreviations and Definition*

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Ethernet Driver module that are not included in the AUTOSAR glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| EC | Ethernet controller |
| Eth | Ethernet Driver (AUTOSAR BSW module) |
| EthIf | Ethernet Interface (AUTOSAR BSW module) |
| EthTrcv | Ethernet Transceiver Driver (AUTOSAR BSW module) |
| ISR | Interrupt Service Routine |
| MACPHY | Ethernet controller and PHY integrated in one module |
| MCG | Module Configuration Generator |
| MII | Media Independent Interface (standardized Interface provided by Ethernet controllers to access Ethernet transceivers) |
| OA TC06 | OPEN ALLIANCE Technical Committee 6 |

"10BASE-T1x MACPHY Serial interface"
| OA TC10 | OPEN ALLIANCE Technical Committee 10 |
|---|---|

"Automotive Ethernet Sleep/Wake-Up"
| PLCA | Physical Layer Collision Avoidance - Media acces |
|---|---|
| TCP | Transmission Control Protocol |
| UDP | User Datagram Protocol |
| MDIO | Managment Data Input Ouput |
| MMD | MDIO Manageable Device |

### 5. 定义
*原文标题：Definitions*

### 6. Hardware supported 数据 transfert
*原文标题：Hardware supported data transfert*

A "Hardware supported data transfer" represents a copy action where data is transferred from a source address to an destination address asynchronously by hardware (e.g. DMA).

### 7. 数据 transfer session 句柄
*原文标题：Data transfer session handle*

A "Data transfer session handle" represents an id to identify a specific hardware supported data transfer. This id could be used by hardware to confirm the finalization of the data transfer.

### 8. 相关文档
*原文标题：Related documentation*

### 9. Input documents

### 10. Related standards and norms

No content.

### 11. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules SWS BSW General, , which is also valid for Ethernet Driver.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Ethernet Driver.

Additional support added for clause 45 MII access defined by IEEE 802.3ae.

### 12. 约束与假设
*原文标题：Constraints and assumptions*

### 13. 限制
*原文标题：Limitations*

It is not possible to transmit data which exceeds the available buffer size of the used controller. Longer data has to be transmitted using the Internet Protocol (IP) or Transmission Control Protocol (TCP).

Depending on the Ethernet hardware, it may become necessary that implementations deviate from API specifications in respect to the asynchronous/synchronous behaviour.

### 14. 适用的车型领域
*原文标题：Applicability to car domains*

The Ethernet BSW stack is intended to be used wherever high data rates are required but no hard real-time is required. Of course, it can also be used for less-demanding use cases, i.e. for low data rates.

### 15. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This chapter lists the modules interacting with the Ethernet Driver module.

Modules that use Ethernet Driver module (Calls between drivers are abstracted by the EthIf):

* Ethernet Interface (EthIf, see )
* Ethernet Transceiver Driver (EthTrcv see )
* Ethernet Switch Driver (EthSwt, see )

Modules used by the Ethernet Driver module:

* BSW Scheduler mechanisms for data consistency and main function handling.

Dependencies to other Modules:

* On certain systems the controller might share resources with other components (e.g. the MCU, Port), and may depend on their configuration. If those resources are within scope of the other modules (e.g. PLL configuration, memory mapping, etc.) the Ethernet Driver module does not take care of configuring those components but requires their preceding initialization.

### 16. 驱动服务
*原文标题：Driver Services*

Status: DRAFT
  Upstream requirements:
⌈
If the Ethernet controller is on-chip, the Eth module shall not use any service of other drivers.
⌋

Note: Not in case of MACPHY

  Status: DRAFT
  Upstream requirements:
⌈
The function `Eth_Init` shall initialize all on-chip hardware resources that are used by the Ethernet controller. The only exception to this is the digital I/O pin configuration (of pins used by Ethernet controller), which is done by the port driver.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
The Mcu module (SPAL see SPAL General) shall configure register settings that are "shared" with other modules.
⌋

Implementation hint: The Mcu module shall be initialized before initializing the Ethernet module.

  Status: DRAFT
  Upstream requirements:
⌈
If an off-chip Ethernet controller is used (i.e. MACPHY), the Ethernet controller module shall use services of other MCAL drivers (e.g. SPI).
⌋

Implementation hint: If the Ethernet driver module uses services of other MCAL drivers (e.g. SPI), it must be ensured that these drivers are up and running before initializing the Ethernet module.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Configure which Ethernet ports use MACsec |  |  |
| Modules of the \muC Abstraction Layer (MCAL) may not have hard coded horizontal interfaces |  |  |
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |
| Optional functionality of a Basic-SW component that is not required in the ECU shall be configurable at pre-compile-time |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 功能规范
*原文标题：Functional specification*

### 19. Ethernet BSW stack

As part of the AUTOSAR Layered Software Architecture according to Figure , the Ethernet BSW modules also form a layered software stack. Figure  depicts the basic structure of this Ethernet BSW stack. The Ethernet Interface module accesses several controllers using the Ethernet Driver layer, which can be made up of several Ethernet Drivers modules.

### 20. Switch

Furthermore a Switch device might be connected to a dedicated controller index of an Ethernet Driver. This scenario leads to additional interaction between the Switch Driver and the Ethernet Driver using the driver API abstraction of the EthIf (Figure ). The Ethernet Driver asks the Switch Driver for a special treatment to ensure that the current Ethernet frame could be managed in the Switch later on.

### 21. External MAC

In case of MACPHY (external mac controller) the data and management are done via the SPI module (see  and ) (Figure ).

### 22. Indexing scheme

Users of the Ethernet Driver identify controller resources using an indexing scheme as depicted in Figure .

⌈
The Ethernet Driver is using a zero-based index to abstract the access for upper software layers. The parameter EthCtrlIdx  within configuration corresponds to parameter CtrlIdx used in the API.
⌋

Note: A buffer index (BufIdx) is an internal handle for one transaction between EthIf and Eth. BufIdx identifies an Ethernet buffer processed by Ethernet Driver API functions. Each controller's buffers are identified by buffer indexes 0 to (n-1) where n is the number of buffers processed by the corresponding controller. Buffer indexes are valid within a tuple <CtrlIdx, BufIdx> only. A BufIdx uniquely identifies the buffer used for an Ethernet Driver.

### 23. 需求
*原文标题：Requirements*

This chapter lists requirements that shall be fulfilled by Ethernet Driver module implementations.

The Ethernet Driver module environment comprises all modules which are calling interfaces of the Ethernet Driver module.

⌈
The Ethernet Driver module shall support pre-compile time, link time and post-build time configuration.
⌋

⌈
In case development error detection is enabled for the Ethernet Driver module: The Ethernet Driver module shall check API parameters for validity and report detected errors to the DET.
⌋

DET API functions are specified in SWS Default Error Tracer .

⌈
None of the Ethernet Driver module header files shall define global variables.
⌋

⌈
The Ethernet Driver shall ensure that the base addresses of all reception and transmission buffers fulfill the memory alignment requirements for all AUTOSAR data types of the respective platform.
⌋

⌈
For transmissions the Ethernet Controller shall enable hardware capabilities for the calculation of protocol checksums (offloading) according to the following list:

a) for IPv4 frames if EthCtrlEnableOffloadChecksumIPv4 is set to TRUE

b) for ICMP frames if EthCtrlEnableOffloadChecksumICMP is set to TRUE

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 初始化
*原文标题：Initialization*

The Eth driver module is initialized via `Eth_Init`(). Except for `Eth_Init`() and any scheduled function (e.g. `Eth_MainFunction`()), the API functions of the Eth driver module may only be called after the module has been properly initialized.

 Eth Initialization
  Upstream requirements: , ,
⌈
If development error reporting is enabled via EthDevErrorDetect, the Eth driver module shall call `Det_ReportError` with the error code `Eth_E_UNINIT` when any API other than `Eth_Init`(), or any scheduled function (e.g. `Eth_MainFunction`()), is called in uninitialized state.
⌋

### 25. Communication

### 26. Transmission

The Ethernet driver provides two approaches to handle transmission requests.

### 27. Indirect 数据 provision
*原文标题：Indirect data provision*

Transmission request with indirect data provision: splits the request for available egress queue resources and the transmission request in two API calls. The upper layer has to request for an available egress queue element of the corresponding EthCtrlConfigEgressQueue at the corresponding Ethernet controller. If the Ethernet driver is able to provide an egress queue element, then the requester (upper layer) can update this egress queue element with data. A second call from the upper layer would request to transmit the egress queue element:

# An upper layer call `Eth_ProvideTxBuffer` to request an egress buffer at the Ethernet driver according the given priority. After return, the upper layer copies data to the provided egress buffer
# An upper layer call `Eth_Transmit` to request the Ethernet driver to transmit the content of the egress buffer

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Direct 数据 provision
*原文标题：Direct data provision*

Transmission request with direct data provision: Performs the data and transmission request in one API call. The upper layer call `Eth_ImmediateTransmit` provides a list of headers as single linked list and the payload with payload length. All headers of the single linked list together with the payload form an entire Ethernet frame. Each element of the list contains a pointer to data, data length and a pointer to the next element. The Ethernet driver has to traverse from the head to the last element (tail) and copy data of each header to an egress queue element. After the last element has been reached, the payload is added to the egress queue element. If the data transfer is finished, the entire Ethernet frame resides in the egress queue element. The Ethernet driver triggers a transmission of the Ethernet frame to convey the data on the Ethernet network.

 Precondition checks for transmission request with direct data provision
  Status: DRAFT
  Upstream requirements: , ,
⌈
If `Eth_ImmediateTransmit` has been called and the given CtrlIdx has an EthCtrlConfigEgressQueue configured, then the Ethernet driver shall perform the following precondition checks in the following order:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Transmission confirmation

⌈
Ethernet SW Driver shall call `EthIf_TxConfirmation` with Result set to E_OK to indicate a successful transmission; either from the Interrupt routine (in interrupt mode) or from the `Eth_TxConfirmation` routine in polling mode (if the notification has been enabled).
⌋

⌈
Ethernet SW Driver shall call `EthIf_TxConfirmation` with Result set to E_NOT_OK if the transmission failed.
⌋

The call to `EthIf_TxConfirmation` with Result set to E_NOT_OK shall allow the upper layer to implement a simple locking scheme. It can rely on the fact that every time `Eth_Transmit` is called, `EthIf_TxConfirmation` will be called afterwards.

### 30. Indirect 数据 provision
*原文标题：Indirect data provision*

A transmission requests with indirect data provision uses `Eth_ProvideTxBuffer` as first call to reserve an EthCtrlConfigEgressQueue element with a specific Priority at a dedicated Ethernet controller. The function returns a BufIdxPtr. The tuple of Ethernet controller and BufIdxPtr is used as unique identification of the EthCtrlConfigEgressQueue element. If a transmission of an Ethernet frame was successful, the Ethernet driver calls `EthIf_TxConfirmation` with BufIdxPtr and CtrlIdx that refers to the EthCtrlConfigEgressQueue element.

  Status: DRAFT
  Upstream requirements: , , ,
⌈
If `Eth_ProvideTxBuffer` was called and returned a BufPtrIdx for a specific EthCtrlConfigEgressQueue element at the given CtrlIdx and a subsequent `Eth_Transmit` request for a transmission for this BufPtrIdx at the same CtrlIdx and with TxConfirmation set to TRUE is performed, then the Ethernet driver shall call `EthIf_TxConfirmation` with a BufPtrIdx which refers to this EthCtrlConfigEgressQueue element.
⌋

### 31. Direct 数据 provision
*原文标题：Direct data provision*

Status: DRAFT
  Upstream requirements: , ,
⌈
If `Eth_ImmediateTransmit` was called and returned with E_OK, and the Ethernet driver detected the finalization of the transmission (either successful or not), then the Ethernet driver shall call `Eth_TxConfirmation` with TxHandleId provided in the previous call of `Eth_ImmediateTransmit` which refer to the same EthCtrlConfigEgressQueue element.
⌋

Note: A call of `Eth_ImmediateTransmit` which return E_OK reserved a EthCtrlConfigEgressQueue element at the given CtrlIdx and map the given TxHandleId to this EthCtrlConfigEgressQueue element

  Status: DRAFT
  Upstream requirements: , ,
⌈
If `Eth_ImmediateTransmit` has been called, EthCtrlEnableEgressHardwareSupportedDataTransfer is set to TRUE and the hardware report for at least one data transfer sessions of a specific EthCtrlConfigEgressQueue element unsuccessful transfer, then the Ethernet driver shall perform the following actions:

* remove all data transfer session handles from this EthCtrlConfigEgressQueue element
* call `EthIf_TxConfirmation` with BufIdx set to TxHandleId and result set to E_NOT_OK
⌋

### 32. Reception

An Ethernet controller receives frames in the configured EthCtrlConfigIngressQueue. The arrival of an Ethernet frame at an EthCtrlConfigIngressQueue could signal a receive interrupt if interrupt mode is configured for the Ethernet controller or individually for this EthCtrlConfigIngressQueue (see  for more details). Otherwise the EthCtrlConfigIngressQueues are polled. Independent from the handling, the Ethernet driver will call `EthIf_RxIndication` to indicate the reception of Ethernet frame.

⌈
Ethernet SW Driver shall call `EthIf_RxIndication` to indicate a successful reception either from the Interrupt routine (in interrupt mode) or from the `Eth_Receive` routine in polling mode.
⌋

⌈
When calling the callback function `EthIf_RxIndication` broadcast frames shall be indicated to the Ethernet Interface (see ).
⌋

  Status: DRAFT
  Upstream requirements: , ,
⌈
When calling the callback function `EthIf_RxIndication` and EthGlobalTimeSupport set to TRUE, then the Ethernet driver shall provide the ingress timestamp as tuple of type TimeTupleType with API parameter IngressTimeTuplePtr.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Hardware supported 数据 transfer
*原文标题：Hardware supported data transfer*

It is possible to configure a hardware supported data transfer (e.g. DMA), to transfer data from the upper layer to an EthCtrlConfigEgressQueue element, if hardware supports this feature. A hardware supported data transfer should preserve CPU load. It is assumed that the preparation for each data transfer increase the load on the CPU. If a preparation wastes the same amount of CPU resource as the data transfer itself (or in worst case wastes more), then the CPU performance is negatively impacted. The usage of hardware supported data transfer has to consider a proper tradeoff between either using CPU or hardware for data transfer. The Ethernet driver supports to configure a data length related threshold to balance between usage of CPU and hardware supported data transfer. Usage and data length related threshold in bytes can be configured per Ethernet controller with EthCtrlEnableEgressHardwareSupportedDataTransfer and EthCtrEgressHardwareSupportedDataTransferThreshold.

Note:

* Hardware supported data transfer could be triggered in context of the Ethernet driver, if `Eth_ImmediateTransmit` is used (direct data provision approach).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Queue 处理
*原文标题：Queue handling*

The Ethernet driver provide the possibility to configure queues for transmission (EthCtrlConfigIngressQueue) and for reception (EthCtrlConfigEgressQueue) of Ethernet frames. A single Ethernet controller is represented as EthCtrlConfig. An EthCtrlConfig could have multiple queues configured. A queue exist of elements. One element hold one Ethernet frame. The size of an element is configured with EthCtrlConfigEgressQueueBufLenByte in bytes. The total amount elements of one queue is configured with EthCtrlConfigEgressQueueBufTotal. Thus, the total size in bytes of one queue is calculated as EthCtrlConfigEgressQueueBufLenByte multiplied with EthCtrlConfigEgressQueueBufTotal. The following subchapters describe the specific properties of EthCtrlConfigIngressQueues and EthCtrlConfigEgressQueues.

### 35. Ingress queue

An EthCtrlConfig could have 1 or more EthCtrlConfigIngressQueues configured. For each EthCtrlConfigIngressQueue a EthCtrlConfigIngressQueueSortingType could be assigned. EthCtrlConfigIngressQueueSortingType represents a Ethernet frame attribute used as filter to identify received Ethernet frame. Ethernet frames attributes of the received Ethernet frame which match to the configured EthCtrlConfigIngressQueueSortingType of EthCtrlConfigIngressQueue are sorted in that EthCtrlConfigIngressQueue. The following sorting types are supported:

* Destination MAC address (EthCtrlIngressQueueSortingMacDestinationAssignment)
* VLAN-ID (EthCtrlIngressQueueSortingVlanIdAssignment)
* VLAN priority (EthCtrlIngressQueueSortingVlanPriorityAssignment)
* EtherType (EthCtrlIngressQueueSortingEtherTypeAssignment)

  Status: DRAFT
  Upstream requirements: , ,
⌈
The configured EthCtrlConfigIngressQueueSortingType of an EthCtrlConfigIngressQueue shall be applied as filter on an Ethernet frame to identify a match. If a match is identified, then this Ethernet frame shall be enqueued in the affected EthCtrlConfigIngressQueue.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Ingress queue handler

An Ethernet controller receive an Ethernet frame, try to find a matching ingress queue and if an matching queue is found, enqueue this Ethernet frame in the according Ethernet ingress queue. An enqueuing of an Ethernet frame could be signaled as interrupt or the upper layer of the Ethernet driver is polling the ingress queues. Independent on the approach either "interrupt driven" or "polling", the communication stack need to dequeue the received Ethernet frames from the configures ingress queues. Therefore a so-called "ingress queue handler" is needed. An ingress queue handler is implementation specific. The Ethernet driver provide the possibility to configure polling and interrupt driven approaches, and to define an entry where to implement the ingress queue handler.

The following points summarize the possibility how EthCtrlConfigIngressQueues could be processed:

* Interrupt driven approach by setting EthCtrlEnableRxInterrupt to TRUE: enqueuing of an Ethernet frame at any EthCtrlConfigIngressQueue of the same Ethernet controller, signal an receive interrupt. A ingress queue handler is executed in the context of the ISR.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Egress queue

An EthCtrlConfig could have 1 or more EthCtrlConfigEgressQueues configured. For each EthCtrlConfigEgressQueue a EthCtrlConfigEgressQueueSortingType could be assigned. EthCtrlConfigEgressQueueSortingType contains EthCtrlConfigEgressQueueSortingEntry which represents a field of the sorting filter to transmit an Ethernet frame. Ethernet frames attributes of the transmitted Ethernet frame which match to the configured EthCtrlConfigEgressQueueSortingEntry of EthCtrlConfigEgressQueue are sorted in that EthCtrlConfigEgressQueue. The following attributes are defining the sorting type :

* Sorting Key (EthCtrlConfigEgressQueueSortingKey)
* Sorting Mask (EthCtrlConfigEgressQueueSortingMask)
* Sorting Size (EthCtrlConfigEgressQueueSortingSize)
* Sorting Offset (EthCtrlConfigEgressQueueSortingOffset)

Note: EthCtrlConfigEgressQueueSortingType is optional for at most one EthCtrlConfigEgressQueue at the same EthCtrlConfig (see ).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Egress - shapers and transmission selection

Ethernet frames are enqueued in egress queues according to their priority assignment. A Ethernet frame stay in the egress queue as long as the so-called EthCtrlConfigScheduler select an Ethernet frame for transmission. Each egress queue (see EthCtrlConfigEgressQueue) has to configure the algorithm to select the Ethernet frames for transmission. Therefore each egress queue has an mandatory sub container EthCtrlConfigEgressQueueTransmissionSelection. EthCtrlConfigEgressQueueTransmissionSelection defines the selection algorithm via EthCtrlConfigEgressQueueTransmissionSelectionAlgorithm (e.g. credit based shaper, asynchronous traffic shaper ... a.s.o.). Each EthCtrlConfigEgressQueue is connected to an egress scheduler. The egress scheduler has to schedule all connected egress queues. Each egress scheduler has an mandatory sub container EthCtrlConfigScheduler which defines the scheduler algorithm via EthCtrlConfigSchedulerAlgorithm (e.g. strict priority). Multiple egress schedulers at the same EthCtrl could be configured and connected in an cascaded manner. Thus, the output of an egress scheduler is used as an input for the sub sequential egress scheduler.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Details on egress scheduler

As mentioned before EthCtrlConfigScheduler select Ethernet frames which are offered to be transmitted by the EthCtrlConfigEgressQueue based on the configured EthCtrlConfigEgressQueueTransmissionSelectionAlgorithm. The EthCtrlConfigScheduler examine each of its incoming predecessor EthCtrlConfigEgressQueue, starting with the EthCtrlConfigEgressQueue where the highest priority is assigned and proceed in descending order. This scheduling process highly depends on the configuration of the EthCtrlConfigSchedulerAlgorithm, the EthCtrlConfigEgressQueueTransmissionSelectionAlgorithm of each relevant egress queue and the egress structure.

The configuration supports the following EthCtrlConfigSchedulerAlgorithms:

* `ETH_SCHEDULER_STRICT_PRIORITY`: The egress scheduler always selects a relevant egress queue with the highest assigned priority, that offers an emission opportunity to dequeue an Ethernet frame. After each dequeued Ethernet frame the scheduling algorithm checks for current available offers of an egress queue with a higher assigned priority before proceeding.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. 支持 of frame preemption
*原文标题：Support of frame preemption*

The the Eth driver module supports the configuration of frame preemption per EthCtrlConfig (see ), if the Ethernet switch hardware support the functionality. By default it is assumed that Ethernet controller hardware is not supposed to perform or not even capable of frame preemption, thus EthCtrlFramePreemptionEnable is set to FALSE for the respective EthCtrlConfig.

 Ethernet controller hardware support for frame preemption
  Status: DRAFT
  Upstream requirements:
⌈
If and only if an Ethernet controller hardware supports frame preemption, then it shall be allowed to set EthCtrlFramePreemptionEnable to TRUE for the resepective EthCtrlConfig.
⌋

 Frame preemption enabling on ingress and egress per EthCtrlConfig
  Status: DRAFT
  Upstream requirements:
⌈
If EthCtrlFramePreemptionEnable is set to TRUE for an EthCtrl (EthCtrlConfig), then frame preemption handling shall be enabled on ingress and egress for this EthCtrl. Otherwise frame preemption shall be disabled.
⌋

Frame preemption is working on a per link basis. Thus, both ends of the link need to support the frame preemption, otherwise it does not work properly.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. HW Clock 处理
*原文标题：HW Clock Handling*

If HW Timestamping support is enabled (EthGlobalTimeSupport is set to TRUE), it is expected, that the Ethernet Controller supports a HW clock to perform HW timestamping for Timesync frames (Ethertype = 0x88F7) ingressed and egressed on the controller port (refer to ).

In addition, if supported by the Ethernet Controller, the Ethernet Driver may support an adjustable PTP HW clock (PHC), i.e., a clock that is adjustable in rate and offset. (refer to chapter ).

Finally, if a PHC is supported, the Ethernet Driver may also support the generation of a Pulse-Per-Second (PPS) signal (refer to chapter ).

### 42. HW Timestamping

If the Ethernet Controller supports HW timestamping (refer to EthGlobalTimeSupport), the Ethernet Driver module will provide the following APIs to the upper layer to enable HW timestamping:

* `Eth_EnableEgressTimeStamp` to enable timestamping for a frame
* `Eth_GetEgressTimeStamp` to read the egress timestamp of a transmitted frame.
* `Eth_GetCurrentTimeTuple` to read the current value of the timestamping HW clock and, if supported, the current value of the PTP HW clock (PHC)

### 43. Adjustable PTP HW Clock (PHC)

If the Ethernet Controller supports an adjustable PTP HW Clock (refer to EthPhcSupport), the Ethernet Driver allows the upper layer to read and set the PHC using the following APIs:

* `Eth_GetPhcTime` to read the current value of the PHC
* `Eth_SetPhcTime` to set the current value of the PHC
* `Eth_SetPhcCorrection` to apply a given rate and offset value as correction for the PHC

`Eth_SetPhcTime` is used to set an absolute value of a PHC. `Eth_SetPhcCorrection` is used to apply rate and offset correction to an PHC. `Eth_SetPhcTime` is typically called if the upper layer detect a jump of the synchronized time (e.g. after first reception of a time sync message from a global time provider). Afterwards the PHC is adjusted with rate deviation and offset correction values which are calculated by the upper layer as deviation from a global time provider. The upper layer is responsible to call `Eth_SetPhcTime` and `Eth_SetPhcCorrection` in a sensible way.

  Status: DRAFT
  Upstream requirements:
⌈
If EthGlobalTimeSupport is set to FALSE, then EthPhcSupport shall be set to FALSE
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 125 章（内容从略，见纯文本全文）

44. Cross-Timestamping of PTP HW Clock and Timestamping Clock
45. Generation of a Pulse-Per-Second (PPS) Signal
46. MACsec 支持
47. 配置描述
48. 错误分类
49. Development 错误
50. Runtime 错误
51. Production 错误
52. Extended Production 错误
53. API 规范
54. API Parameters Checking
55. Imported 类型
56. 类型定义
57. Eth_ConfigType
58. Eth_ModeType
59. Eth_StateType
60. Eth_FrameType
61. Eth_BufIdxType
62. Eth_RxStatusType
63. Eth_FilterActionType
64. Eth_MacVlanType
65. Eth_CounterType
66. Eth_RxStatsType
67. Eth_TxStatsType
68. Eth_TxErrorCounterValuesType
69. Eth_SpiStatusType
70. Eth_StreamStatisticCounterType
71. 功能定义
72. Eth_Init
73. Eth_SetControllerMode
74. Eth_GetControllerMode
75. Eth_GetPhysAddr
76. Eth_SetPhysAddr
77. Eth_UpdatePhysAddrFilter
78. Eth_WriteMii
79. Eth_ReadMii
80. Eth_GetCounterValues
81. Eth_GetRxStats
82. Eth_GetTxStats
83. Eth_GetTxErrorCounterValues
84. Eth_GetSpiStatus
85. Eth_GetCurrentTimeTuple
86. Eth_SetPhcTime
87. Eth_SetPhcCorrection
88. Eth_GetPhcTime
89. Eth_SetPpsSignalMode
90. Eth_EnableEgressTimeStamp
91. Eth_GetEgressTimeStamp
92. Eth_ProvideTxBuffer
93. Eth_Transmit
94. Eth_Receive
95. Eth_ImmediateTransmit
96. Eth_ReleaseRxBuffer
97. Eth_TxConfirmation
98. Eth_ReadMmd
99. Eth_WriteMmd
100. Eth_MacSecUpdateSecY
101. Eth_MacSecInitRxSc
102. Eth_MacSecResetRxSc
103. Eth_MacSecAddTxSa
104. Eth_MacSecUpdateTxSa
105. Eth_MacSecDeleteTxSa
106. Eth_MacSecAddRxSa
107. Eth_MacSecUpdateRxSa
108. Eth_MacSecDeleteRxSa
109. Eth_MacSecGetTxSaNextPn
110. Eth_MacSecSetControlledPortEnabled
111. Eth_MacSecGetMacSecStatistics
112. Scheduled functions
113. Eth_MainFunction
114. Expected 接口
115. Mandatory 接口
116. Optional 接口
117. Callout 接口
118. Configurable 接口
119. Eth_<IngressQueueHandlerFunction>
120. 时序图
121. 配置规范
122. How to read this chapter
123. Containers and 配置 parameters
124. Eth
125. EthConfigSet
126. EthCtrlConfig
127. EthCtrlClk and EthClkUnit
128. EthCtrlPulsePerSecondConfig
129. EthCtrlConfigEgress
130. EthCtrlConfigEgressQueue - DRAFT
131. EthCtrlConfigEgressQueueSortingType - DRAFT
132. EthCtrlConfigEgressQueueSortingEntry - DRAFT
133. EthCtrlConfigEgressQueueTransmissionSelection - DRAFT
134. EthCtrlConfigEgressQueueTransmissionSelectionCBSConfig - DRAFT
135. EthCtrlConfigScheduler
136. EthCtrlConfigSchedulerPredecessor
137. EthCtrlConfigIngress
138. EthCtrlConfigIngressQueue - DRAFT
139. EthCtrlConfigSpiConfiguration
140. EthCtrlMacSecConfig
141. EthDemEventParameterRefs
142. EthGeneral
143. EthCtrlOffloading
144. 发布信息
145. 附录
146. 不适用需求
147. Change history of AUTOSAR traceable items
148. Traceable item history of this document according to AUTOSAR Release R25-11
149. Added 规范 Items in R25-11
150. Changed 规范 Items in R25-11
151. Deleted 规范 Items in R25-11
152. Added Constraints in R25-11
153. Changed Constraints in R25-11
154. Deleted Constraints in R25-11
155. Traceable item history of this document according to AUTOSAR Release R24-11
156. Added 规范 Items in R24-11
157. Changed 规范 Items in R24-11
158. Deleted 规范 Items in R24-11
159. Added Constraints in R24-11
160. Changed Constraints in R24-11
161. Deleted Constraints in R24-11
162. Traceable item history of this document according to AUTOSAR Release R23-11
163. Added 规范 Items in R23-11
164. Changed 规范 Items in R23-11
165. Deleted 规范 Items in R23-11
166. Added Constraints in R23-11
167. Changed Constraints in R23-11
168. Deleted Constraints in R23-11
