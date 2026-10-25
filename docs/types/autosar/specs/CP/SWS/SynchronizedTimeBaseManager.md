# Specification of Synchronized Time-Base Manager (`SynchronizedTimeBaseManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 421 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_SynchronizedTimeBaseManager_421\AUTOSAR_CP_SWS_SynchronizedTimeBaseManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_SynchronizedTimeBaseManager_421\AUTOSAR_CP_SWS_SynchronizedTimeBaseManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_SynchronizedTimeBaseManager_421\zzgen\CP_SWS_SynchronizedTimeBaseManager.complete.txt`

## 文档简介

This document specifies the functionality, API and the configuration of the Synchronized Time-Base Manager (StbM) module. The purpose of the Synchronized Time-Base Manager is to provide Synchronized Time Bases to its customers, i.e., time bases, which are synchronized with time bases on other nodes of a distributed system.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies the functionality, API and the configuration of the Synchronized Time-Base Manager (StbM) module. The purpose of the Synchronized Time-Base Manager is to provide Synchronized Time Bases to its customers, i.e., time bases, which are synchronized with time bases on other nodes of a distributed system.

### 2. Use Cases

Two main use cases are supported by the Synchronized Time-Base Manager:

* Synchronization of RunnableEntities

  An arbitrary number of RunnableEntities must be executed synchronously. Synchronous means that they shall start with a well-defined and guaranteed relative offset (e.g. relative offset "0", means the execution shall occur at the same point in time). Such a requirement can be specified by the  and must be fulfilled independently of the actual deployment of the software components. Typcial examples of this use case are the sensor data read out or synchronous actuator triggering by different RunnableEntities.
* Provision of absolute or relative time value

  The application (and other BSW modules) shall provide a central module that is responsible for the provision of information about absolute or relative time and progression of it.

  Typical examples of this use case are:

  * Sensor data fusion: Data from various sensor systems like radar or stereo multi-purpose cameras can be temporally correlated.
  * Event data recording: In some cases, e.g. crash, it is desirable to store data about the events and the internal state of different ECUs.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 功能概述
*原文标题：Functional Overview*

illustrates how the Synchronized Time-Base Manager interacts with other modules.

The Synchronized Time-Base Manager itself does not provide means like network time protocols or time agreement protocols to synchronize its (local) Time Bases to Time Bases on other nodes. It interacts with the <Bus>TSyn modules of the BSW to achieve such synchronization. Those modules take as shown in  the role of a Time Base Provider and support above mentioned time protocols.

With the information retrieved from the provider modules, the Synchronized Time-Base Manager is able to synchronize its Time Bases to Time Bases on other nodes.

BSW modules and SW-C, which take the role of a customer, consume the time information provided and managed by the Synchronized Time-Base Manager. Three types of customers may be distingushed:

# Triggered Customer
# Active Customer
# Notification Customer

Thus, the Synchronized Time-Base Manager acts as Time Base broker by offering the customers access to Synchronized Time Bases. Doing so, the Synchronized Time-Base Manager abstracts from the "real" Time Base provider.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Acronyms, Abbreviations and 定义
*原文标题：Acronyms, Abbreviations and Definitions*

The glossary below includes acronyms and abbreviations relevant to the StbM module that are not included in

* the
* and

### 5. Acronyms and Abbreviation

| Abbreviation | Description |
|---|---|
| <Bus>TSyn | A bus specific Time Synchronization Provider module |
| CAN | Controller Area Network |
| CanTSyn | Time Synchronization Provider module for CAN |
| DET | Default Error Tracer |
| ECU | Electronic Control Unit |
| ETH | Ethernet |
| EthTSyn | Time Synchronization Provider module for Ethernet |
| FR | FlexRay |
| FrTSyn | Time Synchronization Provider module for FlexRay |
| FUP message | Follow-Up message for a Synchronized Time Base |
| FV | Freshness Value |
| FVM | Freshness Value Manager |
| GTM | Global Time Master |
| NvM | Non-volatile Memory |
| o_(oc) | Offset correction value |
| PTP | Precision Time Protocol |
| StbM | Synchronized Time-Base Manager |
| SYNC message | Time Synchronization message for a Synchronized Time Base |
| TG | Global Time |
| Timesync | Time Synchronization |
| TL | Local Instance of the Global Time |
| TL_(Sync) | Local Instance of the Global Time at re-synchronization |
| TSP | Time Synchronization Provider |
| TV | Virtual Local Time |
| TG_(Rx) | Global Time of Rx Time Tuple |
| TG_(URx) | Global Time of Updated Rx Time |
| r | (Applied) rate |
| r_(rc) | Rate (correction) as derived by rate measurement |
| r_(oc) | Rate offset as derived by Offset Correction by Rate Adaption |

### 6. 定义
*原文标题：Definitions*

| Term | Definition |
|---|---|
| Active Time Base Customer | A Time Base Customer that autonomously calls the Synchronized Time-Base Manager either |

* to read time information for a Time Base from the Synchronized Time-Base Manager or
* to update the Time Base maintained by the Synchronized Time-Base Manager according to application information
| Applied Rate | Rate that is applied for setting/calculating the Local Instance of the Global Time. |
|---|---|

* For a Time Master of a Synchronized Time Base and for Pure Local Time Bases it is the same as the Rate Correction r_(rc)
* For a Time Slave of a Synchronized Time Base it is calculated by adding r_(rc) and r_(oc)
| Current Time Tuple | Time Tuple which holds the current Local Instance of the Global Time and the corresponding current Virtual Local Time |
|---|---|
| Disciplined HW Clock | A HW clock, that can be adjusted in rate and offset to follow a reference clock. |
| Fallback Virtual Local Time | Secondary Virtual Local Time derived from a HW clock different than that one used for deriving the primary Virtual Local Time. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 相关文档
*原文标题：Related documentation*

### 8. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 9. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for StbM.

Thus, the specification SWS BSW General shall be considered as additional and required specification for StbM.

### 10. 约束与假设
*原文标题：Constraints and assumptions*

### 11. 限制
*原文标题：Limitations*

The current module proposal has a number of limitations for the application of the Synchronized Time-Base Manager within an AUTOSAR system.

### 12. OS ScheduleTable

The Synchronized Time-Base Manager shall perform the functionality of synchronizing OS ScheduleTables with a respective Synchronized Time Base. However, the StbM considers only the case when the targeted OS ScheduleTable is explicitly synchronized. The implicit synchronization does not affect the StbM, because the synchronization mechanism bypasses the module (for more information about the difference between explicit and implicit synchronization, please refer to . Thus, when talking in the following about synchronization of OS ScheduleTables, always the explicit one is meant.

### 13. Synchronized Time Base Identifier

The StbMSynchronizedTimeBaseIdentifier range (128 .. 65535) is currently reserved and might still be used by legacy applications (implementing Triggered Customers). The ID range will however be reassigned to new features in the next release. Legacy applications will then no longer be supported.

### 14. 模式 switches
*原文标题：Mode switches*

The Synchronized Time-Base Manager does not deal with mode switches during runtime.

### 15. 配置
*原文标题：Configuration*

Postbuild configuration of the StbM is limited to enabling or disabling the functionality of a system wide Global Time Master for a Time Base (refer to StbMIsSystemWideGlobalTimeMaster ).

### 16. Fallback Virtual Local Time

The Synchronized Time-Base Manager allows to configure a Fallback Virtual Local Time. If the Primary Virtual Local Time fails, the Fallback Virtual Local Time provides only a hold-over capability to the local application. That means, that time information derived from that Fallback Virtual Local Time is not distributed on the network. In the next releases of the StbM the behavior of the Fallback Virtual Local Time might be extended to support additional use cases.

### 17. Out of 范围
*原文标题：Out of scope*

* Errors, which occurred during Global Time establishment and which are not caused by the module itself (e.g. loss of FlexRay global time is a FlexRay issue and is not an issue of the Synchronized Time-Base Manager).
* Errors, which occurred during interaction with customers.

Example: Calling the explicit OS ScheduleTable synchronization may cause an exception, because the delta between the submitted parameter counterValue and the OS internal counter is higher than the tolerance range of affected expiry points. Dealing with this exception is an OS issue, not an issue of the Synchronized Time-Base Manager.

### 18. 适用的车型领域
*原文标题：Applicability to car domains*

The concept is targeted at supporting time-critical and safety-related automotive applications such as airbag systems and braking systems. This doesn't mean that the concept has all that is required by such systems though, but crucial timing-related features that cannot be deferred to implementation are considered.

### 19. Conflicts

None.

### 20. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 21. 代码文件结构
*原文标题：Code file structure*

For details refer to .

### 22. 头文件结构
*原文标题：Header file structure*

For full details please refer to . In addition to the files defined in that chapter, the StbM needs to include the files Os.h, CanIf.h, EthIf.h and Gpt.h.

  Upstream requirements:
⌈
If a triggered customer is configured (refer to StbMTriggeredCustomer), StbM.c shall include Os.h to have access to the schedule table interface of the OS.
⌋

  Upstream requirements:
⌈
If time stamping via Ethernet shall be supported (refer to EthIfGlobalTimeSupport, which is referenced via StbMLocalTimeHardware or StbMFallbackTimeHardware, if set to EthTSynGlobalTimeDomain), StbM.c shall include EthIf.h to have access to the interface of the EthIf module.
⌋

  Status: DRAFT
  Upstream requirements: ,
⌈
If CAN hardware timestamping is supported (refer to configuration parameter CanIfGlobalTimeSupport in CanIf, which is referenced via StbMLocalTimeHardware or StbMFallbackTimeHardware, if set to CanTSynGlobalTimeDomain), StbM.c shall include CanIf.h to have access to the interface of the CanIf module.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Implementation of Time Synchronization shall maintain its own Time Base independently of the acting role. |  |  |
| The TS shall initialize the Local Time Base with a configurable startup value |  |  |
| The Implementation of Time Synchronization shall initialize the Global Time Base with a configurable startup value. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 功能规范
*原文标题：Functional specification*

### 25. 概述
*原文标题：Overview*

A Global Time network contains of a Time Master and at least one Time Slave. The Time Master is distributing via Time Synchronization messages the Global Time Base to the connected Time Slaves for each Time Domain. For CAN and Ethernet, the Time Slave corrects the received Global Time Base by considering the Time Stamp at the transmitter side and the own generated receiver Time Stamp. For FlexRay, the Time Synchronization mechanism is based on the local time of the FlexRay bus.

The local instance of the Time Base (derived from a HW reference clock) will be updated with the latest received valid value of the Global Time Base and runs autonomously until the next value of the Global Time Base is received.

### 26. 类型 of Time Bases
*原文标题：Types of Time Bases*

The type of a Time Base is defined by the Time Base specific configuration parameter StbMSynchronizedTimeBaseType as

* Synchronized Time Base (refer to chapter )
* or Pure Local Time Base (refer to chapter )

### 27. Synchronized Time Bases

Each Time Base has assigned a Time Base identifier in the range between 0 and 127. Time Base identifiers are configured in the StbM (refer to parameter StbMSynchronizedTimeBaseIdentifier).

Additionally, for each Synchronized Time Base the Timsync modules define a Time Domain identifier. The Time Domain identifier is actually sent/received by the Timesync modules in the Timesync messages on the network.

The Time Domain identifier is configured in the Timesync modules and it is independent of the Time Base identifiers in the StbM. Time Domain identifiers are in the range between 0 and 15 for CAN and FlexRay and between 0 and 127 for Ethernet.

Since the Time Base identifier in StbM is independent of the Time Domain identifier in the Timesync modules the following examples represent valid configurations:

* a Global Time Master contains a single Synchronized Time Base with Time Base identifier 0 that is transmitted as Time Domain 0 on Ethernet and Time Domain 1 on CAN
* a Time Slave receives Time Domain 0 on Ethernet and stores it as Time Base 0 whereas it also receives Time Domain 1 on CAN and stores it as Time Base 2.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Pure Local Time Bases

For details of Pure Local Time Bases refer to chapter .

### 29. Roles of the StbM

Depending on its configuration the StbM may take one of the following three roles for a Time Base:

* Global Time Master
* Time Slave
* Time Gateway

In each role specific functionality is supported or not supported.

Example: In  the Time Base StbMSynchronizedTimeBase1 is referenced by two Time Domains CanTSynGlobalTimeDomain 1 and FrTSynGlobalTimeDomain 1 from within a CanTSyn and a FrTSyn Timesync module, respectively.

CanTSynGlobalTimeDomain 1 is configured as a Time Master and FrTSynGlobalTimeDomain 1 as a Time Slave. This makes the StbM a Time Gateway for Time Base StbMSynchronizedTimeBase1.

If Time Base StbMSynchronizedTimeBase1 would have been referenced by only one of the Time Domains - CanTSynGlobalTimeDomain 1 or FrTSynGlobalTimeDomain 1 - the StbM would have become a Time Master or a Time Slave for Time Base StbMSynchronizedTimeBase1, respectively.

Note: For system level representation of roles refer to figure 9.1 ("Big Picture of AUTOSAR global time synchronization") in

### 30. Global Time Master

A Global Time Master is the system wide origin for a given Time Base. Its Time Base values are distributed via the network to the Time Slaves.

  Upstream requirements:
⌈
`StbM_GetMasterConfig` shall return the value of the configuration parameter StbMIsSystemWideGlobalTimeMaster for the Time Base timeBaseId. This is to check, if the StbM is configured as system wide Global Time Master for a specific Time Base.
⌋

### 31. Time Slave

In the role of a Time Slave the StbM updates its internally maintained local Time Base based on Global Time Base values, which are provided by the corresponding Timesync module.

### 32. Time Gateway

A Time Gateway in the StbM is a Time Base which is referenced by one Time Slave and one or more Time Masters. The Time Slave, which references a StbM Time Gateway receives Timesync messages on the corresponding bus and passes the received Time Base values to the StbM. Every Time Master referencing the Time Gateway retrieves the Gateway Time Base values from the StbM and transmits those on the bus. Depending on configuration the reception on slave side can or cannot automatically trigger the transmission on the master side automatically.

So, Timesync messages are not routed directly through an AUTOSAR Time Gateway. This is because routing delays need to be compensated.

### 33. Virtual Local Time

The Virtual Local Time is derived from a hardware reference clock (see ). The following hardware reference clocks are supported:

* OS counter
* GPT counter
* Ethernet free-running counter (used for ingress and egress timestamping)

Each Synchronized and Pure Local Time Base has to have one Virtual Local Time assigned to progress the Local Instance of the Global Time for that Time Bases. That Virtual Local Time is denoted as the Primary Virtual Local Time of the corresponding Time Base (refer to chapter ).

Optionally (e.g. when Time Validation is supported), each Synchronized Time Base may have a secondary Virtual Local Time assigned, denoted as the Fallback Virtual Local Time of the Time Base (refer to chapter ).

In this document, if not explicitly stated otherwise, the term Virtual Local Time refers to the Primary Virtual Local Time.

### 34. Primary Virtual Local Time

The Primary Virtual Local Time is configured by the configuration container StbMLocalTimeClock referenced by the Time Base. Each Time Base might have a different Primary Virtual Local Time configured.

  Upstream requirements: ,
⌈
If StbMLocalTimeHardware references a Gpt Channel as local time source for a Synchronized Time Base, the StbM shall derive the Virtual Local Time from the value of the corresponding GPT timer.

The elapsed timer value shall be read via `Gpt_GetTimeElapsed`.
⌋

  Upstream requirements:
⌈
The StbM shall use the factor (StbMClockPrescaler/StbMClockFrequency) to convert the time of its local hardware reference clock to the actual time of the Virtual Local Time (refer to `StbM_VirtualLocalTimeType`), if the Virtual Local Time is derived from a GPT or OsCounter (refer to StbMLocalTimeHardware).
⌋

Note: Rationale is that a tick duration of the hardware reference clock does not necessarily have to match the resolution of the Virtual Local Time.

  Upstream requirements:
⌈
If the range of the corresponding HW reference counter is less than that of the Virtual Local Time (refer to `StbM_VirtualLocalTimeType`), the StbM shall extend the range accordingly.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Fallback Virtual Local Time

The StbM optionally supports a Fallback Virtual Local Time. Like a Primary Virtual Local Time a Fallback Virtual Local Time is derived from a hardware reference clock, i.e., from an Os counter, a GPT counter, an Ethernet free running counter or any other hardware reference clock, if available. The Fallback Virtual Local Time is configured by the configuration container StbMFallbackTimeClock which is referenced by the Time Bases.

The Fallback Virtual Local Time supports 2 use cases,

* Monitoring the progression of the Local Instance of the Global Time (refer to )
* and Time extrapolation when the Primary Virtual Local Time is absent (refer to ).

For Time Validation (safe time use case) the integrator shall ensure that the clock source for Virtual Local Time and Fallback Virtual Local Time are not only different but independent. (See )

  Status: DRAFT
  Upstream requirements: ,
⌈
If StbMFallbackTimeClock is configured, then the StbM shall provide a Fallback Virtual Local Time.
⌋

Note: For configuration of StbMFallbackTimeClock also refer to .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Local Instance of the Global Time

The Synchronized Time-Base Manager has to progress the Local Instance of the Global Time (TL) of a Synchronized or Pure Local Time Base between the updates

* from the Timesync Modules (for a Time Slave of a Synchronized Time Base)
* or from the application (for a Global Time Master or a Pure Local Time Base)

Progression of TL can be done

* by SW calculation based on a free-running HW Clock (refer to chapter ).
* or by a Disciplined HW Clock, which is adjustable in rate and offset (refer to chapter )

The type of progression can be configured per Time Base.

### 37. Progressing the Local Instance of the Global Time by a free-running HW clock

This chapter specifies how progression of the Local Instance of the Global Time (TL) is done based on a free-running HW clock.

The StbM derives TL from a on a free-running HW clock by doing a rate correction in SW according to .

  Upstream requirements:
⌈
For a Time Base if

* the Primary Virtual Local Time TV_(Primary) is available (i.e., `StbM_GetCurrentVirtualLocalTime` returns E_OK)
* and a Disciplined HW Clock is not supported (i.e., StbMDisciplinedClock is not configured),

then StbM shall calculate Local Instance of the Global Time (TL) of the Time Base, based on the Main Time Tuple and the Applied Rate according to:

\label{eq:rateCorrection}
		TL = TL_{Main} + r * (TV_{Primary} - TV_{Main})
⌋

### 38. Main Time Tuple

It is obvious that the precision of the extrapolation by the StbM in  depends on rounding effects and the granularity of the HW counters from which the Primary Virtual Local Time (TV_(Primary)) is derived.

In addition, the precision of a Time Base depends on the handling of the Main Time Tuple , i.e.,

* when and how is it interpolated by the StbM
* for a Time Slave or Time Gateway: how is it received and processed by the Timesync Modules and how it was transmitted by the Timesync Modules of the Global Time Master

The Main Time Tuple is managed by the StbM. Each time TL_(Main) is updated, TV_(Main) has to be updated as well and vice versa.

  Upstream requirements: ,
⌈
If for a Time Base

* a Disciplined HW Clock is not supported (i.e., StbMDisciplinedClock is not configured)
* or a Fallback Virtual Local Time is configured (i.e., StbMFallbackTimeClock is configured),

when

* for a Global Time Master

  * a new Global Time or a new Rate Correction value is set by the application (refer )
  * or a Time Base gets cloned from another Time Base (see )
* or for a Time Slave

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Main Time Triple

Status: DRAFT
  Upstream requirements:
⌈
If a Fallback Virtual Local Time is enabled (i.e., StbMFallbackTimeClock is configured), then the StbM shall extend the Main Time Tuple to a Main Time Triple (TL_(Main), TV_(Main), TV_(`Fallback_Main`))
⌋

Note: The StbM maintains the Main Time Triple and derives the Main Time Tuple from the Main Time Triple when needed by reading only the relevant members of the Main Time Triple.

  Status: DRAFT
  Upstream requirements: ,
⌈
When StbM updates the Main Time Tuple (refer to ), then the StbM shall immediately update the Fallback Virtual Local Time of the Main Time Triple (TV_(`Fallback_Main`)) by the current value of the Fallback Virtual Local Time.

If Fallback Virtual Local Time could not be determined (e.g., the underlying hardware counter has not been activated yet), when the Main Time Triple is updated, then the StbM shall set the Fallback Virtual Local Time of the Main Time Triple (TV_(`Fallback_Main`)) to 0.
⌋

Note: "immediately" means that the values of the Main Time Tuple and the Fallback Virtual Local Time are sampled at the very same point in time. Ideally, this is done in an atomic, i.e., a non-interruptable sequence.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Progressing the Local Instance of the Global Time by a disciplined HW clock

This chapter specifies progression of the Local Instance of the Global Time (TL) if supported by a Disciplined HW Clock, i.e., a HW clock that is incremented by the underlying hardware and which can be adjusted in offset and rate.

A Disciplined HW Clock is currently only supported for Synchronized and Pure Local Time Bases which reference an underlying Ethernet HW clock (PHC).

The StbM will use the following 2 APIs to adjust the value of the Disciplined HW Clock while it is progressing:

* `EthIf_SetPhcTime` for setting the absolute value, e.g.,

  * on Global Time Master side after a reset of the ECU when restoring the time from NvM
  * or on Global Time Master side when `StbM_SetGlobalTime` or `StbM_UpdateGlobalTime` are being called
* `EthIf_SetPhcCorrection` for smoothly adapting the rate of the HW clock and correcting smaller offsets according to

  * on Time Slave side

    * after receiving a new Rx Time Tuple (TG_(Rx)) via `StbM_BusSetGlobalTime`
    * or when the adaption interval for Offset Correction by Rate Adaption has elapsed
  * or on Global Time Master side when `StbM_SetRateCorrection` is being called.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. 处理 the Local Instance of the Global Time in absence of Primary Virtual Local Time
*原文标题：Handling the Local Instance of the Global Time in absence of Primary Virtual Local Time*

If the Primary Virtual Local Time is available, the Local Instance of the Global Time of a Time Base will be derived based on the Primary Virtual Local Time of that Time Base (refer to chapter ).

If the Primary Virtual Local Time of a Time Base fails, the StbM can still extrapolate the Local Instance of the Global Time of the Time Base using a Fallback Virtual Local Time, if configured for the Time Base. The Fallback Virtual Local Time provides a hold-over capability for extrapolating the Local Instance of the Global Time locally.

"Locally" means, that the value of the Local Instance of the Global Time is only provided to the local application upon request, but is not distributed on the network. This is because the Timesync modules currently still call the `StbM_GetCurrentVirtualLocalTime`. Since that call will return E_NOT_OK, when the Primary Virtual Local Time is not available, the Timesync module cannot properly process any transmit or receive request.

 illustrates how the Local Instance of the Global Time of a Time Base is derived, if the Primary Virtual Local Time fails and afterwards recovers from an outage.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Synchronized Time Bases

Upstream requirements: ,
⌈
After initialization the StbM shall maintain the Local Time of each Time Base autonomously via a hardware reference clock (referenced by StbMLocalTimeClock).
⌋

Note: While no Global Time Base value has yet been set/received (`GLOBAL_TIME_BASE` bit is not yet set), the StbM shall maintain the Local Time of each Time Base (i.e., progress the time) starting at the value restored from NvM or at value 0 (depending on setting of StbMStoreTimebaseNonVolatile).

Note: Progressing the time means that the Virtual Local Time as part of the Main Time Tuple needs to be retrieved once the Global Time part of the Main Time Tuple was either set to 0 or to the value restored from NvM.

  Upstream requirements: , ,
⌈
For Synchronized Time Bases if

* the Primary Virtual Local Time is available and valid,
* or Fallback Virtual Local Time is available (i.e., StbMFallbackTimeClock is configured) and valid

then `StbM_GetCurrentTime` shall return

* E_OK.
* and the current Time Tuple ,
* and the current status of the Time Base timeBaseStatus,
* and the User Data.
⌋

  Upstream requirements: , ,
⌈
For Synchronized Time Bases if

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. Global Time Master

Upstream requirements: ,
⌈
For a Global Time Master of a Synchronized Time Bases,

if a Disciplined HW Clock is not supported (i.e., StbMDisciplinedClock is not configured),

when `StbM_SetGlobalTime` or `StbM_UpdateGlobalTime` is called,

then the StbM shall update the Main Time Tuple  of the corresponding Synchronized Time Base.

StbM shall set

* TL_(Main) to the value of the parameter timeStamp of `StbM_SetGlobalTime` or `StbM_UpdateGlobalTime`, respectively
* and TV_(Main) to the value of the Primary Virtual Local Time as sampled immediately after entering `StbM_SetGlobalTime` or `StbM_UpdateGlobalTime`, respectively
⌋

Note: Sampling the Virtual Local Time immediately after entering `StbM_SetGlobalTime` or `StbM_UpdateGlobalTime` improves the precision. In order to further improve precision it may be beneficial for applications to call `StbM_SetGlobalTime` or `StbM_UpdateGlobalTime` with locked interrupts.

  Status: DRAFT
  Upstream requirements: ,
⌈
For a Global Time Master of a Synchronized Time Bases,

if a Disciplined HW Clock is supported (StbMDisciplinedClock is configured),

when `StbM_SetGlobalTime` or `StbM_UpdateGlobalTime` is called,

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. Time Slave

illustrates the steps to update a Synchronized Time Base, when a new Timesync message is received from a Time Master.

Once a new Time Tuple (denoted as Rx Time Tuple ) is derived by the Timesync Module, the Timesync Module forwards this Time Tuple via `StbM_BusSetGlobalTime` to the StbM for further processing.

The following steps are also illustrated in the sequence diagrams  and . Upon invocation of `StbM_BusSetGlobalTime`, the StbM records the current value of the Virtual Local Time as TV_(Sync) and calculates two new Time Tuples:

* the SyncLocal Time Tuple  which is the Time Tuple at that point in time (TV_(Sync)). The SyncLocal Time Tuple does not consider the current update of the Rx Time Tuple  (refer to chapter ).

  Hence, the SyncLocal Time Tuple is a prediction of the Global Time by the StbM at TV_(Sync) based on 'previous' update of the Global Time TG_(Rx) received from the Global Time Master and the calculated rate and offset correction.
* the Updated Rx Time Tuple  which is calculated at the very same point in time as the SyncLocal Time Tuple, i.e., TV_(URx) = TV_(Sync).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 210 章（内容从略，见纯文本全文）

45. Calculation of the SyncLocal Time Tuple
46. Calculation of the Updated Rx Time Tuple
47. 通用
48. Pure Local Time Bases
49. 同步状态
50. Global Time Master
51. Time Slaves
52. User 数据
53. 启动行为
54. Preconditions
55. 初始化
56. 关机行为
57. Immediate Time 同步
58. Time Correction
59. Rate Correction Measurement (for Time Slaves)
60. Rate Measurement by Timesync 模块
61. Rate Measurement by StbM
62. Rate and Offset Correction (for Time Slaves)
63. Offset Correction by Jump
64. Offset Correction by Rate Adaption
65. Time Extrapolation and Rate Correction for Global Time Masters
66. Time Base Cloning
67. 通知 of Customers
68. Time 通知
69. Status 通知
70. Triggering Customers
71. Time Recording
72. 通用
73. Global Time Precision Measurement 支持
74. Synchronized Time Base Record Table
75. Snapshot Conditions
76. Time 校验
77. Record Tables
78. Time Slave/Master
79. Pdelay Initiator/Responder
80. Common
81. Time 校验 Snapshot Conditions
82. Time Slave/Master
83. Pdelay Initiator/Responder
84. Common
85. Monitoring the progression of the Local Instance of Global Time
86. Rate 校验
87. Calculation of Rate Jitter
88. Calculation of Rate Wander
89. Freshness Value
90. Interaction with User Defined Timesync 模块 (CDD)
91. Multicore Distribution
92. 错误处理
93. 错误分类
94. Development 错误
95. Runtime 错误
96. Production 错误
97. Extended Production 错误
98. Version Check
99. API 规范
100. Imported 类型
101. 类型定义
102. Extension to Std_ReturnType
103. StbM_ConfigType
104. StbM_MeasurementType
105. 功能定义
106. StbM_Init
107. StbM_GetCurrentTime
108. StbM_GetCurrentSafeTime
109. StbM_GetCurrentVirtualLocalTime
110. StbM_GetFallbackVirtualLocalTime
111. StbM_SetGlobalTime
112. StbM_UpdateGlobalTime
113. StbM_SetUserData
114. StbM_BusSetGlobalTime
115. StbM_GetRateDeviation
116. StbM_SetRateCorrection
117. StbM_GetTimeLeap
118. StbM_GetTimeBaseStatus
119. StbM_CloneTimeBase
120. StbM_SetCloningOffset
121. StbM_StartTimer
122. StbM_GetSyncTimeRecordHead
123. StbM_TriggerTimeTransmission
124. StbM_GetTimeBaseUpdateCounter
125. StbM_GetMasterConfig
126. StbM_CanSetSlaveTimingData
127. StbM_ FrSetSlaveTimingData
128. StbM_EthSetSlaveTimingData
129. StbM_CanSetMasterTimingData
130. StbM_FrSetMasterTimingData
131. StbM_EthSetMasterTimingData
132. StbM_EthSetPdelayInitiatorData
133. StbM_EthSetPdelayResponderData
134. StbM_GetBusProtocolParam
135. StbM_SetBusProtocolParam
136. StbM_GetTxFreshness
137. StbM_GetTxFreshnessTruncData
138. StbM_SPduTxConfirmation
139. StbM_GetRxFreshness
140. Scheduled functions
141. StbM_MainFunction
142. Expected 接口
143. Mandatory 接口
144. Optional 接口
145. Callout 接口
146. Configurable 接口
147. SyncTimeRecordBlockCallback
148. StatusNotificationCallback
149. <Customer>_TimeNotificationCallback
150. SPduTxConfirmationFct
151. GetTxFreshnessTruncDataFct
152. GetTxFreshnessFct
153. GetRxFreshnessFct
154. 服务接口
155. Sender-Receiver 接口
156. StatusNotification
157. Client-Server-Interfaces
158. GlobalTime_Master
159. GlobalTime_Slave
160. StartTimer
161. TimeNotification
162. MeasurementNotification
163. TimeBaseProviderNotification_Eth
164. TimeBaseProviderNotification_Fr
165. TimeBaseProviderNotification_Can
166. FreshnessManagement
167. Implementation 数据类型
168. StbM_PortIdType
169. StbM_SynchronizedTimeBaseType
170. StbM_TimeBaseStatusType
171. StbM_TimeBaseNotificationType
172. StbM_VirtualLocalTimeType
173. StbM_TimeStampShortType
174. StbM_TimeStampType
175. StbM_TimeTupleType
176. StbM_TimeTripleType
177. StbM_TimeDiffType
178. StbM_RateDeviationType
179. StbM_CloneConfigType
180. StbM_UserDataType
181. StbM_CustomerIdType
182. StbM_SyncRecordTableHeadType
183. StbM_SyncRecordTableBlockType
184. StbM_MasterConfigType
185. StbM_EthTimeMasterMeasurementType
186. StbM_FrTimeMasterMeasurementType
187. StbM_CanTimeMasterMeasurementType
188. StbM_EthTimeSlaveMeasurementType
189. StbM_FrTimeSlaveMeasurementType
190. StbM_CanTimeSlaveMeasurementType
191. StbM_PdelayInitiatorMeasurementType
192. StbM_PdelayResponderMeasurementType
193. StbM_TimeSyncType
194. StbM_ProtocolParamType
195. StbM_FreshnessArrayType
196. Provided Ports
197. GlobalTime_Master
198. GlobalTime_Slave
199. GlobalTime_StatusEvent
200. StartTimer
201. Required Ports
202. GlobalTime_TimeEvent
203. GlobalTime_Measurement
204. TimeBaseProviderNotification_Eth
205. TimeBaseProviderNotification_Fr
206. TimeBaseProviderNotification_Can
207. FreshnessManagement
208. 时序图
209. StbM 初始化
210. Immediate Time Synchronisation
211. Explicit 同步 of OS ScheduleTable
212. Rx Time Tuple Processing Sequence
213. 配置规范
214. How to read this chapter
215. Containers and 配置 parameters
216. StbM
217. StbMGeneral
218. StbMSynchronizedTimeBase
219. StbMTimeCorrection
220. StbMLocalTimeClock
221. StbMDisciplinedClock
222. StbMFallbackTimeClock
223. StbMTimeRecording
224. StbMTimeValidation
225. StbMNotificationCustomer
226. StbMTriggeredCustomer
227. StbMFreshnessValueInformation
228. StbMFreshnessValue
229. Constraints
230. 发布信息
231. 附录
232. 不适用需求
233. Change history of AUTOSAR traceable itemss
234. Traceable item history of this document according to AUTOSAR Release R25-11
235. Added 规范 Items in R25-11
236. Changed 规范 Items in R25-11
237. Deleted 规范 Items in R25-11
238. Added Constraints in R25-11
239. Changed Constraints in R25-11
240. Deleted Constraints in R25-11
241. Traceable item history of this document according to AUTOSAR Release R24-11
242. Added 规范 Items in R24-11
243. Changed 规范 Items in R24-11
244. Deleted 规范 Items in R24-11
245. Added Constraints in R24-11
246. Changed Constraints in R24-11
247. Deleted Constraints in R24-11
248. Traceable item history of this document according to AUTOSAR Release R23-11
249. Added 规范 Items in R23-11
250. Changed 规范 Items in R23-11
251. Deleted 规范 Items in R23-11
252. Added Constraints in R23-11
253. Changed Constraints in R23-11
254. Deleted Constraints in R23-11
