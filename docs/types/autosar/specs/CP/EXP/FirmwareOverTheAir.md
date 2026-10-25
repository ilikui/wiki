# Explanation of Firmware Over-The-Air (`FirmwareOverTheAir`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 945 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_FirmwareOverTheAir_945\AUTOSAR_CP_EXP_FirmwareOverTheAir.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_FirmwareOverTheAir_945\AUTOSAR_CP_EXP_FirmwareOverTheAir.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_FirmwareOverTheAir_945\zzgen\CP_EXP_FirmwareOverTheAir.complete.txt`

## 文档简介

The FOTA approach shall introduce a generic mechanism to update ECU software during runtime. While the current ECU software is executed and fully available from functional point of view (e.g. during driving) a new ECU software shall be programmed in the background (installation phase). At the time of the installation, which can be interrupted and continued over several driving cycles, the authenticity and integrity of the new SW shall be verified. In case of positive verification results, the ECU shall be able to activate the new SW. The activation of the SW shall always require a special ECU mode (e.g. boot), hence the activation of new SW must not be started or even executed while driving. The activation shall be done in a vehicle safe-state, e.g. standstill, engine off and applied parking brake. In case of detected anomalies or errors after or during activation of the new SW, the ECU shall be able to realize an ECU internal rollback to previous SW. ECU internal rollback implies the approach, that the previous SW is still present on the ECU and can be re-activated.

Important: The whole realization approach of FOTA features strongly depends on concepts and change requests currently under development or discussion within AUTOSAR. These discussion points are expected to be solved in the next release phase:

* UCM Master (see specification documents  and , also see chapter  within this document)
* Concurrent access to flash memory (read-while-write feature, see chapter )

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

The FOTA approach shall introduce a generic mechanism to update ECU software during runtime. While the current ECU software is executed and fully available from functional point of view (e.g. during driving) a new ECU software shall be programmed in the background (installation phase). At the time of the installation, which can be interrupted and continued over several driving cycles, the authenticity and integrity of the new SW shall be verified. In case of positive verification results, the ECU shall be able to activate the new SW. The activation of the SW shall always require a special ECU mode (e.g. boot), hence the activation of new SW must not be started or even executed while driving. The activation shall be done in a vehicle safe-state, e.g. standstill, engine off and applied parking brake. In case of detected anomalies or errors after or during activation of the new SW, the ECU shall be able to realize an ECU internal rollback to previous SW. ECU internal rollback implies the approach, that the previous SW is still present on the ECU and can be re-activated.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Motivation

Due to a growing SW complexity driven by evolving security requirements, distributed and connected functions the need to keep a system in a vehicle up-to-date is continuously increasing. In order to avoid time-consuming and recurring service garage visits because of an upcoming SW update, the SW deployment to fleets shall be orchestrated over-the-air. Different wireless techniques (UMTS, LTE, Bluetooth, WiFi, 5G) can be used to connect the vehicle to a backend/cloud system to provide a capability to download SW to the vehicle. The distribution of the new SW to target ECUs affected by the update is done via vehicle busses as CAN, CAN-FD, Flexray or Automotive Ethernet.

Most ECUs nowadays have an on-board reprogramming capability, which is used in the service garage infrastructure to deploy bugfixes or functional improvements in the field.

This interface, usually a flashbootloader, could also be addressed via an Over-The-Air (OTA) update master ECU in order to install a new SW, when the vehicle is outside of the service garage.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 范围
*原文标题：Scope*

The objective of this document is to provide new SW update concepts, which support installing new SW on the ECUs, while current SW is normally executed. This includes the scenario, where a vehicle is driving and the new SW is installed on the affected ECUs without functional degradation of those.

Strategies to avoid interferences and blockings with the runtime system will be evaluated within this document. This means all running applications as well as system services (e.g. diagnostics, NvMemory) shall be fully available during the update process and may impact the delay of any request processing from functional point of view only in a minimal way.

Investigation of different approaches for ECU internal backup and rollback capabilities will also be detailed in this document.

### 4. 通用 Use Case
*原文标题：General Use Case*

The new ECU software shall be transmitted using diagnostic communication services (Dcm using UDS) and be transferred via the FOTA Target module to the low level memory driver. The memory stack shall program the new software into an inactive memory partition. A buffering mechanism is to be used to piecewise transfer the SW image to the memory stack. After the installation process has succeeded and the integrity of new SW was verified, an activation mechanism will be triggered to finally initiate the new SW. In case of failures during or after the activation of the new SW a rollback to previous SW, which shall be still available ECU-internally, shall be possible.

A complete list of specified requirements necessary to achieve the FOTA process can be found here:

### 5. 限制 of this Document
*原文标题：Limitations of this Document*

Use cases and topics that are not covered within this document:

* Update of ECUs without UDS support
* Verification strategy of the newly flashed SW
* ECU SW version handling and checking (vendor specific)
* ECU SW compatibility/integrity check (vendor specific)
* Any details about the SW architecture of the memory stack

### 6. 约束与假设
*原文标题：Constraints and Assumptions*

### 7. Prerequisites to the 存储 stack
*原文标题：Prerequisites to the memory stack*

Within this document, the term memory stack shall substitute the memory driver (e.g. FlashDriver) and memory management modules (e.g. Fee), regardless if they are realized as internal or external driver, since no decisions on architectural solutions have been made yet within AUTOSAR. As long as these prerequisites are under discussion and not yet part of the specification documents, the following assumptions must be considered and implemented in the memory stack, in order to realize the FOTA approach as described in this document.

* Access to program flash memory

  Up to now AUTOSAR only foresees the access to the data flash sections during runtime. The access to program flash sections was not addressed within AUTOSAR yet and needed to be realized in a proprietary manner (e.g. in bootloader mode). To realize the FOTA approach, it is necessary to get read and write access to the program flash sections during runtime. Therefore an extension of the AUTOSAR memory stack in order to gain write access to the program memory is currently under development and planned to be released in R20-11.
* Read-while-write feature

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Realization of FOTA Master instance

Since the FOTA approach shall be applicable to both the classic and the adaptive platform of AUTOSAR, it was decided to place the FOTA-Master realization into the adaptive platform, since adaptive ECUs are expected to be way more powerful than classic ones. This FOTA-Master realization is done by the WG-UCM team in the adaptive platform context and will be called UCM-Master. The UCM-Master shall address, handle and steer updates also to the classic platform and is expected to have the first release in R19-11 together with this document.

However, since this document focuses on FOTA features, it will always refer to the master instance as FOTA-Master where the distinct implementation is realized in the adaptive platform as the UCM-Master.

### 9. Further reading

* For more information about the UCM-Master implementation see specification document .
* For more information about the role of the here referred FOTA-Master see chapters  and  for details about its expected behavior.
* For more information about potential non-volatile data handling and migration see specification document .

### 10. Terminology

In this chapter all prerequisites, assumptions, process and system terminologies used within the FOTA process are listed.

### 11. 缩略语
*原文标题：Acronyms and Abbreviations*

Commonly known acronyms defined by AUTOSAR and listed in AUTOSAR Glossary .

| Abbreviation/Acronym | Description |
|---|---|
| BSW | Basic Software (See LayeredSWArchitecture slide collection in AUTOSAR releases) |
| ECU | Electronic control unit |

### 12. Not listed acronyms in TR_Glossary

Here is the copy paste ready list of acronyms which are not yet part of the `TR_Glossary`  document:

| Abbreviation/Acronym | Description |
|---|---|
| DCM | Diagnostic Communication Manager (AUTOSAR BSW Module, Classic Platform) (Surprisingly not yet listed!) |
| FOTA | FirmwareOverTheAir |
| HSM | Hardware Security Module (cryptographic features realized in HW) (Should actually come from a different doc, e.g. safety or security) |
| NvM | Non-Volatile Memory, BSW Module, sometimes referred to as NV Memory (Surprisingly not yet listed!) |
| OTA | Over-The-Air technologies in general, regardless of AUTOSAR |
| UCM | Update And Configuration Management (Functional Cluster in the Adaptive Platform, AUTOSAR Workgroup) |
| UDS | Unified diagnostic services (see ISO-14229) (Surprisingly not yet listed!) |

### 13. 系统组件 Terminology
*原文标题：System Component Terminology*

### 14. FOTA Target

This term applies to all ECUs which are capable to be updated via the FOTA procedure in general.

### 15. FOTA Master

The FOTA Master specifies the instance which handles all software updates with all their related information needed to apply the respective update to the FOTA Target ECU addressed by the FOTA update process.

Note: Keep in mind, that the FOTA Master is realized in context of the UCM Master concept, which is currently under development and might change in the future. A collaboration between UCM and the FOTA group is considered and planned for future releases.

See chapter  for more details.

### 16. (FOTA-) Image

The term Image describes a full downloadable ECU software collection. This shall be regardless if partial, incremental or full featured ECU software is downloaded and installed (see figure ). Applying a new Image to an ECU will update at least one of the following ECU software parts:

* Application software
* Basic software
* Calibration data

After applying a new Image to an ECU, it must be in a fully functional state and be compatible to the rest of the system.

### 17. Backend

This identifies the remote instance which provides the FOTA Image to be downloaded into the FOTA Target ECU (e.g. via Wifi, 3G, 4G, 5G, etc.).

### 18. 数据 Chunk
*原文标题：Data Chunk*

Data Chunks are data packets, transferred from the FOTA Master ECU to the FOTA Target ECU, containing the raw image data (UDS TransferData service payload). This term is used since the length of each data chunk may vary.

### 19. Process terminology

The overall FOTA update process can be divided into several phases, which are shown in this chapter. A general overview is shown in figure :

### 20. Update

The term "(FOTA) update" is used to indicate a whole update procedure of an ECU (or multiple ECUs in case of other dependent ECU updates). It contains all below described tasks such as download, installation, verification, activation and so on. The roll-back functionality can be considered as part of the update procedure in case it is necessary.

### 21. Download

Downloading the image refers to the transfer of all related and necessary ECU software, data and configuration needed for a complete update of a FOTA Target ECU from the backend server to the FOTA Master instance.

### 22. Installation

The term "installation" refers to the transfer of the new ECU software from the FOTA Master ECU to the FOTA Target ECU. Since it is not handy to completely transfer the whole ECU software at once to the FOTA Target ECU, this process is realized using data chunks (see chapter  for details). This means that the installation process can be active even over several driving cycles. The installation process is finished, when there is no more chunks left to transfer to the FOTA Target ECU and all of them have successfully been written to the memory stack.

In addition, the installation process also covers the actual writing of software into the inactive target partition by the program flash driver within the FOTA Target ECU.

### 23. Verification

The verification process is implementation specific and shall assure the correctness of the newly flashed ECU software. This only affects the plain ECU software (e.g. an image or even a differential update) which was flashed into the respective FOTA Target ECU.

Note: The initial verification, authentication and conditions checks related to integrity and authenticity of the FOTA Image as software update package is done by the FOTA Master. Verification checks in context of the FOTA procedure from FOTA Target point of view shall focus on the semantic and functional integrity and are therefore implementation specific. Integrity and authenticity verification can be done again on the FOTA Target if needed.

Note: In case of using external flash memory, which needs to be copied to the internal memory during activation, a second verification step after copying shall be considered. This shall ensure that no unintended modifications of the e.g. SPI transfer from external to internal memory has happened.

### 24. Activation

The activation process describes the actual switch of the ECU boot partition. In case of non-switchable memory architecture ECUs (e.g. external flash memory, fixed multi partition memory), this also covers the copy process from the temporary (e.g. external) flash memory to the internal one. The activation procedure is completed, when also the backup of the previous ECU software (n-1) is confirmed.

Note: The final activation of the newly installed software must be done in a vehicle-safe state. It is up to the integrator to ensure this vehicle-safe state.

### 25. Rollback

During the rollback process all ECU and user data from the previous running software must be restored. After the rollback has finished there must be no difference to the ECU software and user data compared to before the whole update procedure has been started.

### 26. 需求
*原文标题：Requirements*

All requirements defined for FOTA so far can be found in the AUTOSAR RS document .

### 27. Detailed Technical Solution

This chapter provides all needed information in order to setup FOTA Target features for the Firmware-Over-The-Air procedure. Affected architectural components, outside of FOTA Target ECUs, are also listed here for system completeness.

Figure  shows an architectural overview of all involved components and modules within the overall FOTA process.

### 28. 功能性 and Architectural Elements
*原文标题：Functional and Architectural Elements*

The overall FOTA architectural design (as shown in figure ) consists of:

* The FOTA Target ECU

  which receives the ECU software to be flashed from the FOTA Master and forwards the software to the low level memory stack instance (actual ECU software flashing process).
* The FOTA Master ECU

  which caches all new ECU software artifacts to be flashed to a FOTA Target ECU.
* A backend server

  which provides the FOTA master ECU with the image to be installed to the FOTA Target ECU.

### 29. FOTA Target ECU

Since the FOTA Handler specification is currently evolving and not all features are specified and defined yet, the FOTA Handler module is seen as a CDD for now. This decision was made due to the fact, that up to now, not enough features were defined to release a complete new AUTOSAR Basic Software Module. If, in future, the feature set grows to a BSW module worth complexity, a definition of a FOTA BSW module will be considered. However, since the architectural decision on how the "read-while-write" flash approaches and the program flash access, that will be realized by the related AUTOSAR MCAL group, has not been decided, the CDD approach leaves the option to connect through all BSW layers.

### 30. the FOTA Handler 模块的功能性描述
*原文标题：Functional Description of the FOTA Handler Module*

The FOTA Handler module is meant to take care about the FOTA chunk buffer (located in the DCM module as part of the protocol row configuration) handling and to finally trigger the memory stack when new chunk data has arrived, and the memory driver is available for writing.

Within the FOTA Handler module, the respective callout function to serve the received requests by the Dcm module, which provides the FOTA data chunks, needs to be implemented. Inside this callout function the reception of the FOTA chunk needs to be handled.

The solution approach described in this document implements two functions within the FOTA Handler module:

* `FOTA_ProcessTransferDataWrite`(...) (Dcm callout)

  This function is called by the Dcm module each time an image chunk is received by the Dcm module. The main task of this function is to inform about the reception of a new data chunk, to be processed by the FOTAHandlerMain(...) function. Additionally, the OpStatus call parameter shall be set to `DCM_PENDING` until the data chunk processing is finished. During the processing of the data chunk, the callout function shall always return with `Dcm_ReturnWriteMemoryType` = `DCM_WRITE_PENDING`.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 诊断 (Dcm)
*原文标题：Diagnostics (Dcm)*

As the AUTOSAR Dcm module implements the UDS (see ) diagnostics protocol, lots of useful features are delivered "free of charge" for realizing the FOTA functionalities. For the FOTA procedure, the following ones can be considered:

* Session Handling
* Security Access
* Authentication
* Service Handling (user jobs), e.g.:

  * 0x22/0x2E Read/WriteDataByIdentifier
  * 0x31 Routine Control
  * 0x34 RD/0x36 TD/0x37 TE (request download/transfer data/transfer exit)
* Error Handling
* Check Programming Conditions
* Reset/Restart ECU

Goal is to use as much features already provided by the DCM module as possible. Any additional extensions due to a lack of features required for the FOTA procedure shall be realized without extending any core features of the DCM module.

Additional needed extensions to achieve the FOTA requirements shall be implemented by either the FOTA Handler module instance or the FOTA Master module instance (UCM-Master, see chapter  for details).

### 32. Nv 数据
*原文标题：Nv Data*

The NvM module in AUTOSAR typically takes care about the data flash (user data, calibration data, errors and snapshots, additional runtime data for the ECU SW) and aligns them into so called NvDataBlocks. The NvM module provides features and interfaces to read, write or delete these data blocks. In order to migrate or modify NvData the features provided by the NvM module shall be used. Neither the FOTA Master nor a FOTA Target may interact with the data flash directly to avoid interferences, blockings or corruption of data. This means that e.g. data model changes that affect the NvData or user data migrations must be handled by the implementer. Refer to chapter  for details.

However, to safely store FOTA process related information (e.g. current FOTA process state, last successfully written memory address by the FOTA handler, etc.) in order to persist during interruption, the NvM module shall be used to handle (FOTA specific) user data. The mechanisms defined in the respective specification documents shall be used (see  for details).

### 33. FOTA Image 类型
*原文标题：FOTA Image Types*

In general there are several ways to update an ECU, e.g. installing a full system image or just parts of the SW. Even partial and incremental updates can be possible. However, since this document does not specify in detail how to install new software onto a FOTA Target ECU, all types of updates are possible as long as the used installation mechanism allows them.

Based on the capability of the used HW several options to place a new image are possible:

* Runtime execution from fixed addresses

  In this configuration no swapping of partitions is possible due to HW limitations. In that case the image data needs to be placed in a temporary storage location (regardless if internal or external memory) and gets copied to the executable runtime partition during the activation phase. Backing up the previous SW version is required for rollback scenarios.
* Runtime execution from flexible addresses

  Swapping partitions is supported by the HW, therefore the new SW can be placed in any available partition and will be executed after activation from that location. Adaptions or conversions of addresses and offsets within the image must be ensured by the implementer.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. FOTA Master (UCM-Master)

The FOTA Target ECUs need to communicate with a corresponding Master instance in order to receive FOTA Image data. This Master instance must store the image data for all relevant ECUs within the vehicle network, which can be quite a lot of data.

Usually embedded ECUs, which are targeted by the Classic Platform, do only have limited resources in means of memory, storage and computing power. Therefore it makes sense to move the responsibility of the Master instance to ECUs, which offer way more power, the adaptive platform.

The realization of the Master instance communicating with the FOTA Target ECU is currently done by the Work Group Update And Configuration Management (WG-UCM). This would result in following logical architecture:

Note: Keep in mind, that the UCM-Master concept is currently under development and might change. A potential collaboration between WG-UCM and the FOTA concept group is considered for future releases.

### 35. Backend

The Backend instance represents the initial image provider and notification interface to the vehicle to be updated. A notification about available new software could either be triggered from the backend instance to the car or the vehicle decides on its own when to ask if new software is available (polling approach). However, if a new software for one or more ECUs within the vehicle network are available, the fetching process is started and stores the images in an appropriate location within the vehicle (e.g. FOTA Master). Information about dependencies to other software packages must also be provided by the backend. Status and update progress information about the FOTA processes could be shared with the backend for analytic and diagnostic purposes.

### 36. FOTA Procedure

Note: Keep in mind, that all instructions in this chapter are mainly best practices and shall only act as guide line to realize the FOTA procedure.

### 37. FOTA Handler 模块
*原文标题：FOTA Handler Module*

During a FOTA update process the FOTA Handler module needs to take care about certain actions in order to create a solid update process:

* Receive data chunks from FOTA Master
* Handle data chunks
* Forward data chunks to the memory stack
* Exchange status information with the FOTA Master

This chapter explains how those task shall be realized and gives hints and best practices to do so.

### 38. Internal FOTA Status

The FOTA Handler module needs to handle and to indicate all different states during the processing of FOTA Images. This also includes the recovery of interrupted (due to e.g. driving cycle change) or suspended (by e.g. higher priority diagnostic requests). To provide this information to the FOTA Master, which initiates and triggers the FOTA procedure, a diagnostic service shall be realized to provide and update the current state of installation procedure from FOTA Target point of view. These different states shall be reflected by the following enumeration:

* IDLE

  Initial state of the FOTA Handler after the ECU startup procedure
* INIT

  The FOTA Handler is initialized and Dcm is set into the correct state(in Dcm FOTA session and security access has been granted).
* READY

  All FOTA data chunks have been installed, activation procedure can be triggered.
* PROCESSING

  The FOTA Handler is triggered by the Dcm callout since a new chunk has been received and is processed in the callout context.
* WAIT

  The FOTA Handler has successfully processed the last received data chunk, returned the Dcm callout function and is waiting for the next data chunk.
* VERIFY

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Installation

The installation process starts in the WAIT state and consists of waiting for the TransferData service request from the FOTA Master. Once this is received, the FOTA handler switches its state to PROCESSING. In this state, the FOTA chunk is received in the DCM RAM buffer (see chapter , also refer to specification document ). Once all the data of the chunk is received, the Dcm module will execute the FOTA callout function to process the chunk (see ). The callout function takes the address of the chunk in Dcm RAM buffer as an input parameter and programs this data into the flash memory using the memory stack interface. The destination address (offset in partition) and size of the chunk are also input parameters to this function. Optionally (implementation specific), the callout function can verify the data after it is programmed. Once the programming is done, the callout function returns the final response (OK/NOK) to the DCM, so it can be transmitted to the FOTA Master. After this, the FOTA handlers switches back to WAIT state. The callout function must be implement asynchronously, i.e., within a FOTA main function, called cyclically by the OS.

### 40. Activation (Switching 分区)
*原文标题：Activation (Switching Partitions)*

In order to enable a newly flashed ECU software, a switching mechanism is needed. This shall apply for all available flash memory solutions (e.g. A/B swappable or temporary storage). The switching mechanism needs to take care of all activities required to successfully switch the boot/runtime partition (e.g. moving new ECU software from external to the internal flash). Status information about the currently active partition and update status of the inactive partition must be available in all run modes (e.g. bootloader, application).

Note: This switching mechanism is also a prerequisite to the HW from system point of view.

Since it is not transparent to the FOTA Target ECU if the current update is dependent to other ECU updates and their status, the FOTA Master needs to take care of dependencies and the point in time when an activation of new SW is performed. A respective Dcm service job to trigger the FOTA state machine transition from READY to ACTIVATE e.g. using a RoutineControl (`RC_TriggerActivation`) service (refer to figure ) needs to be configured.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Rollback

The main use case of the rollback scenario is the master-triggered rollback. This means, the FOTA Master detects an error on one or more newly installed SW images and actively triggers a rollback, for example on request from backend or when version incompatibility is detected. This must be indicated by the FOTA Master in an appropriate way using again UDS services provided by the Dcm module (e.g. ReadDataByIdentifier/WriteDataByIdentifier, RoutineControl), see section  for more details.

Alternatively, the respective FOTA Target ECU, which is not capable to boot successfully, will initiate the rollback procedure (e.g. switch back partitions) autonomously in order to achieve a running and communicative state again. After the autonomous rollback and the FOTA Target ECU is responsive again, the respective SW version can be requested by the FOTA Master ECU.

To read the currently running SW version of a certain FOTA Target ECU back to the FOTA Master ECU, according to requirement , an appropriate UDS service shall be in place (e.g. ReadDataByIdentifier/WriteDataByIdentifier, RoutineControl), see section  for more details.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. Realization Approach as 示例
*原文标题：Realization Approach as Example*

In order to indicate a running FOTA Target ECU after boot to the FOTA Master ECU, the parameter DcmResponseToEcuReset shall be set to `AFTER_RESET` in the respective Dcm configuration element DcmDspEcuReset for every FOTA Target ECU. This will send a final positive response to the FOTA Master ECU to announce the availability of each FOTA Target ECU after reset individually. The FOTA Master ECU may then ask each FOTA Target ECU in the system about their currently running SW version. Dependencies between different FOTA Target ECUs and if a potential rollback shall be applied, must be evaluated and triggered by the FOTA Master ECU.

Note: Consider setting configuration parameter DcmSendRespPendOnRestart to TRUE in order to inform the FOTA Master ECU about the restart for activation.

### 43. Cancellation

Cancellation describes the abortion of an ongoing FOTA software update process. The cancellation process can be triggered by the FOTA Master ECU at any time between the initiation of the FOTA update and the activation trigger after finalizing the installation procedure. In detail cancellation simply stops the transmission of FOTA chunks from the FOTA Master ECU to the FOTA Target ECU by executing the RequestTransferExit service on FOTA Master ECU side. Additionally the target partition, to where the just canceled software should be applied to, shall be invalidated in order to indicate to the FOTA Target ECU that no interrupted update needs to be resumed after e.g. an ECU reset/restart due to a new driving cycle. Also refer to chapter  about the invalidation procedure.

### 其余 23 章（内容从略，见纯文本全文）

44. Invalidate "old" runtime 分区
45. FOTA Master
46. Dcm Interaction
47. 接口 FOTA Target instance via 诊断服务 (Dcm)
48. 诊断服务 used by FOTA
49. FOTA 诊断 Session
50. Buffer 处理 in context of FOTA
51. Processing the FOTA buffer
52. Preemption of the FOTA 协议
53. Resume of a preempted FOTA procedure
54. Exposed FOTA specific 诊断服务
55. Migration Scenario
56. Interfacing Additional Features
57. Security Features
58. Safety Features
59. 错误处理
60. Sequence Charts
61. (Re-)初始化 of the FOTA procedure
62. Processing of FOTA 数据 Chunks
63. Resume interrupted/preempted FOTA procedure
64. Activation of successfully flashed FOTA-Image
65. Rollback of FOTA procedure
66. 附录
