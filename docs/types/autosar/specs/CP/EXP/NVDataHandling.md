# NV Data Handling Guideline (`NVDataHandling`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 810 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_EXP_NVDataHandling_810\AUTOSAR_CP_EXP_NVDataHandling.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_EXP_NVDataHandling_810\AUTOSAR_CP_EXP_NVDataHandling.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_EXP_NVDataHandling_810\zzgen\CP_EXP_NVDataHandling.complete.txt`

## 文档简介

This document gives an introduction to the basic AUTOSAR concepts on Non-volatile Memory as well as the various access mechanisms available for the application software components.

A brief outline of the Non-volatile memory concepts is provided in chapter  while chapter  provides the various use cases on accessing Non-volatile memory from an application (end user).

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document gives an introduction to the basic AUTOSAR concepts on Non-volatile Memory as well as the various access mechanisms available for the application software components.

A brief outline of the Non-volatile memory concepts is provided in chapter  while chapter  provides the various use cases on accessing Non-volatile memory from an application (end user).

### 2. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

| Abbreviation / Acronym: | Description: |
|---|---|
| NvM | NVRAM Manager |
| NV | Non-volatile |
| NVRAM | Non-volatile Random Access Memory |
| NVRAM Block | The NVRAM Block is the entire structure, which is needed to administrate and to store a block of NV data. |
| NV Block | The NV Block is a Basic Storage Object. It represents the part of a "NVRAM Block" which resides in the NV memory |
| RAM Block | The RAM Block is a Basic Storage Object. It represents the part of a "NVRAM Block" which resides in the RAM. |
| RAM Mirror | RAM mirrors are NvM internal buffer used for operations that read and write the RAM block of NVRAM blocks with NvMBlockUseSyncMechanism set TRUE. |
| ROM Block | The ROM Block is a Basic Storage Object. It represents the part of a "NVRAM Block" which resides in the ROM. |
| ROM | Read-Only Memory |
| RTE | Runtime Environment |
| SW-C | Software Component |

### 3. 相关文档
*原文标题：Related Documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. Related standards and norms

None

### 6. 相关规范
*原文标题：Related specification*

None

### 7. 总体机制与概念
*原文标题：Overall mechanisms and concepts*

### 8. NvM and its features

Changeability and durability are attributes associated with data inside an ECU. Data whose values are changeable but available across the power cycles needs to be stored in the Non-volatile memory. NV Data is that data inside the Non-volatile memory. In AUTOSAR, application can access this Non-volatile memory only via the NVRAM Manager (NvM). This module provides the required services (synchronous / asynchronous) for the management and maintenance of the data.

Figure  shows the interaction between applications and memory stack along with the modules involved.

Following sub sections will provide overview of different concepts and features provided by NvM module, for more details refer .

### 9. 基础 storage objects
*原文标题：Basic storage objects*

A "Basic Storage Object" is the smallest entity of a "NVRAM block". Several "Basic Storage Objects" can be used to build a NVRAM Block. A "Basic Storage Object" can reside in different memory locations (RAM/ROM/NV memory).

These basic storage objects are described below -

### 10. RAM Block

The "RAM Block" is a "Basic Storage Object". It represents the part of a "NVRAM Block" which resides in the RAM.

It is composed of user data and (optionally) a CRC value and (optionally) a NV block header. It is used to hold the live data. This is an optional part of NVRAM block.

### 11. ROM Block

The "ROM Block" is a "Basic Storage Object". It represents the part of a "NVRAM Block" which resides in the ROM. The "ROM Block" is an optional part of a "NVRAM Block".

Contents of ROM Block are of persistent nature, which can't be modified during program execution and resides in ROM/Flash. It is used to provide default data in case of an empty or damaged NV block.

### 12. NV Block

The "NV Block" is a "Basic Storage Object". It represents the part of a "NVRAM Block" which resides in the NV memory. The "NV Block" is a mandatory part of a "NVRAM Block".

Contents of NV Block are of persistent nature that can be modified during program execution and resides in the Flash. It is composed of NV user data and (optionally) a CRC value and (optionally) a NV block header. It is used to hold the live data that are stored periodically/on request.

### 13. Administrative Block

The "Administrative Block" is a "Basic Storage Object". It resides in RAM. The "Administrative Block" is a mandatory part of a "NVRAM Block".

Contents of Administrative Block are of non-persistent nature and resides in the RAM.

It is used to hold attribute/error/status information of the corresponding NVRAM blocks well as the block indices specifically for NVRAM blocks of type 'Dataset'. This is a mandatory part of NVRAM block.

### 14. Block 管理类型
*原文标题：Block Management types*

The following NVRAM Block Management types are supported by the NvM:

### 15. Native NVRAM block

The Native NVRAM block is the simplest block management type. It allows storage to/retrieval from NV memory with a minimal overhead.

`NVM_BLOCK_NATIVE` type of NVRAM storage consists of the following basic storage objects:

* NV Blocks: 1
* RAM Blocks: 1
* ROM Blocks: 0..1
* Administrative Blocks:1

### 16. Redundant NVRAM block

In addition to the Native NVRAM block, the Redundant NVRAM block provides enhanced fault tolerance, reliability and availability. It increases resistance against data corruption. The Redundant NVRAM block consists of two NV blocks, a RAM block and an Administrative block.

In case NV Block associated with a Redundant NVRAM block is deemed invalid (e.g. during read), an attempt is made to recover the NV Block using data from the incorrupt NV Block.

`NVM_BLOCK_REDUNDANT` type of NVRAM storage consists of the following basic storage objects:

* NV Blocks: 2
* RAM Blocks: 1
* ROM Blocks: 0..1
* Administrative Blocks:1

### 17. Dataset NVRAM block

The Dataset NVRAM block is an array of equally sized data blocks. The application can at one-time access exactly one of this data block.

`NVM_BLOCK_DATASET` type of NVRAM storage consists of the following basic storage objects:

* NV Blocks: 1..NvMNvBlockNum
* RAM Blocks: 1
* ROM Blocks: 0..NvMRomBlockNum
* Administrative Blocks: 1

The total number of configured datasets (NV+ROM blocks) must be in the range of 1..255.

A specific dataset element is accessed by setting the corresponding index using the API `NvM_SetDataIndex`. Elements with an index from 0 up to NvMNvBlockNum - 1 represent the NV Blocks, while the ones with an index from NvMNvBlockNum up to NvMNvBlockNum + NvMRomBlockNum - 1 represent the ROM blocks. The NVRAM Block user has to ensure that a valid dataset index is selected before accessing data elements.

### 18. 同步 Mechanism supported
*原文标题：Synchronization Mechanism supported*

Two types of synchronization mechanisms are supported while accessing data to and from NvM module's RAM mirror.

### 19. Implicit 同步
*原文标题：Implicit synchronization*

In the Implicit synchronization, Application and NvM have concurrent access to a common RAM Block. Application writes/reads the data to/from RAM by invoking NvM API's.

In this case, RAM Block is mapped to one SW-C and sharing of RAM block is not recommendable. Whenever SW-C accesses NVRAM using RAM block (temporary / permanent), it has to ensure the data consistency of the RAM block until ongoing operation is completed by the NvM.

Following steps need to be considered while using Implicit synchronization.

* Write request:

  # The application fills a RAM block with the data that has to be written by the NvM module
  # The application issues the `NvM_WriteBlock` or `NvM_WritePRAMBlock` request which transfers control to the NvM module.
  # From now on the application must not modify the RAM block until success or failure of the request is signaled or derived via polling. In the meantime, the contents of the RAM block may be read.
  # An application can use polling to get the status of the request or can be informed via a callback function asynchronously.
  # After completion of the NvM module operation, the RAM block is reusable for modifications.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Explicit 同步
*原文标题：Explicit synchronization*

In Explicit synchronization, NvM defines a RAM mirror which is used to exchange data with the RAM block of Application. Application writes the data in RAM block and invokes NvM write API. NvM invokes API to read the RAM mirror and data is copied from RAM mirror to RAM block and finally to NV block. The data is transferred by the application in both directions via callback routines, called by the NvM module.

The advantage is that applications can control their RAM block in an efficient way. They are responsible for copying consistent data to and from the NvM module's RAM mirror using ReadRamBlockFromNvM / WriteRamBlockToNvM. Application has to ensure data integrity of RAM block while copying data to/from RAM mirror.

The drawbacks are the additional RAM that needs to have the same size as the largest NVRAM block that uses this mechanism and the necessity of an additional copy between two RAM locations for every operation.

This mechanism especially enables the sharing of NVRAM blocks by different applications, if there is a module (e.g. NvBlockSwComponentType) that synchronizes these applications and is the owner of the NVRAM block from the NvM module's perspective.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Other features

### 22. CRC based comparison

The NvM module internally uses CRC generation routines (8/16/32 bit) to check and to generate CRC for NVRAM blocks as a configurable option.

The NvM module provides an option to skip writing of unchanged data by implementing a CRC based compare mechanism. CRC based compare mechanism can be enabled by setting configuration parameter NvMBlockUseCRCCompMechanism.

Note - In general, there is a risk that some changed content of an RAM Block leads to the same CRC as the initial content so that an update might be lost if this option is used. Therefore, this option should be used only for blocks where this risk can be tolerated.

### 23. 错误 recovery
*原文标题：Error recovery*

The NvM module provides implicit error recovery on read for NVRAM block management types NATIVE and REDUNDANT by loading default values (if configured via either the parameter NvMRomBlockDataAddress or the parameter NvMInitBlockCallback).

The explicit retrieval of ROM data is available for all block management types by calling the API `NvM_RestoreBlockDefaults`. For DATASET, the related index must be set (pointing at a ROM block) prior to calling this API.

The NvM module provides error recovery on read for NVRAM blocks of block management type `NVM_BLOCK_REDUNDANT` by loading the RAM block with default values.

The NvM module provides error recovery on write by performing write retries regardless of the NVRAM block management type.

### 24. Write Verification

In case of write verification, when a RAM Block is written to NV memory, the NV block is immediately read back and compared with the original content in RAM Block.

If the original content in RAM Block is not the same as read back, then write retries are performed. And if enabled, the production code error `NVM_E_VERIFY_FAILED` is reported to DEM.

If the read back operation fails, then read retries are not performed.

### 25. RAM Block 处理 using the NvM_SetRamBlockStatus API
*原文标题：RAM Block handling using the NvM_SetRamBlockStatus API*

### 26. During 启动 phase (NvM_ReadAll)
*原文标题：During startup phase (NvM_ReadAll)*

For some NVRAM Blocks it might be required to preserve the data contents of the respective RAM Block from being overwritten during `NvM_ReadAll`, in case the data stored in the respective NV Block is older than the one in the RAM Block (e.g. in case of a warm reset when the data in RAM was not yet written to NV memory). In such a case the RAM Block has to be allocated in a reset-safe (non-initialized) RAM area and the configuration parameter CalcRamBlockCrc has to be set to TRUE (this implies that the corresponding NV block(s) also has/have a CRC configured) and the parameter NvMSetRamBlockStatusApi has to be set to the value TRUE.

After every change of the RAM Block data content the API `NvM_SetRamBlockStatus` has to be called for the corresponding NVRAM Block, with the parameter BlockChanged set to TRUE. The NVRAM Manager will then recalculate the CRC of this RAM Block and store the result in an internal variable allocated in the reset-safe (non-initialized) RAM area. As a prerequisite for this NVRAM block either a valid permanent RAM Block (NvMRamBlockDataAddress) or an explicit synchronization callback function (NvMReadRamBlockFromNvM) has to be configured.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. During 关机 phase (NvM_WriteAll)
*原文标题：During shutdown phase (NvM_WriteAll)*

In case the configuration parameter NvMSetRamBlockStatusApi is set to the value FALSE, the NVRAM Manager copies during the `NvM_WriteAll` process the data content of the RAM Block to the corresponding NV Block for all NVRAM Blocks configured for WriteAll (configuration parameter NvMSelectBlockForWriteAll is set to the value TRUE) and having a permanent RAM Block (NvMRamBlockDataAddress) or an explicit synchronization callback function (NvMReadRamBlockFromNvM) configured.

In order to minimize the number of write cycles to the NV memory it is useful to only copy the content of those RAM Blocks to the corresponding NV Blocks, for which the data content has been changed by the NVRAM Block user. In order to enable this feature during the `NvM_WriteAll` process the configuration parameter NvMSetRamBlockStatusApi has to be set to the value TRUE. In this case the NVRAM Block user has to inform the NVRAM Manager after every change made in the RAM Block data the has to be informed by calling the API `NvM_SetRamBlockStatus` for the corresponding NVRAM Block, with the parameter BlockChanged set to TRUE. This way this NVRAM Block will be marked as to be processed during the `NvM_WriteAll` process.

### 28. Resistant to changed 软件
*原文标题：Resistant to changed software*

The behavior of the NvM module during start-up (i.e. while processing the request `NvM_ReadAll`) will be influenced by the two configuration parameters NvMDynamicConfiguration and NvMResistantToChangedSw.

In ECU projects, in which it is not important to react on configuration changes of the NVRAM Blocks, the parameter NvMDynamicConfiguration has to be set to FALSE. For NVRAM Blocks with the configuration parameter NvMCalcRamBlockCrc set to TRUE, the assigned RAM block is then checked for its validity. If the RAM block content is detected to be invalid, or if the parameter NvMCalcRamBlockCrc set to FALSE, the NV block is checked for its validity. A NV block, which is detected to be valid, is copied to its assigned RAM block. If an invalid NV Block is detected default data will be loaded (if configured via either the parameter NvMRomBlockDataAddress or the parameter NvMInitBlockCallback).

In case the configuration of NVRAM Blocks was changed, while the NV Blocks already stored in NV Memory still correspond to the old configuration, critical problems may arise during the `NvM_ReadAll` process.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Block Fragmentation

Currently, there is an increasing demand for huge data blocks that have to be stored in NvRAM. These data are typically organized in huge arrays, but the update per driving cycle is usually local. Such an array is usually organized only in a single NvBlock. A more frequent update, e.g. after each driving cycle, shortens the lifetime of the ECU or requires the use of a larger DataFlash.

This feature offers the possibility of fragmenting a large block into smaller units. These fragments shall only be written if the content has been changed. The unchanged fragments shall be kept unchanged.

The following picture shows the concept and the evolution of the NvRAM dataset mapping in case of local / spare updated data inside an array data element object.

Note: The fragmentation can be implemented efficiently only when the NVM elements are grouped according to the write frequency. The NVM elements shall be arranged in such a way that they are in either increasing or decreasing order of write frequency.

### 30. Accessing NvM using RTE

Details of possible Interfaces, Software component types to access NV data using RTE are listed in this section, for more details refer  and .

### 31. 接口
*原文标题：Interfaces*

* Client-server interface

  A client/server interface provides a number of operations that can be invoked on a server by a client. In case of services provided by NvM to the Application, NvM acts as server and Application acts as client. Also notifications to be provided to the Applications from NvM can be implemented using same; role of client and server is exchanged in this case.
* NvDataInterface

  A non-volatile data interface defines a number of VariableDataPrototypes to be exchanged between non-volatile block components and atomic software components. These VariableDataPrototypes can be mapped to complete RAM block or elements of RAM block implemented inside non-volatile block components.

### 32. Accessing NV 数据 using ServiceSwComponent
*原文标题：Accessing NV Data using ServiceSwComponent*

NvM is configured as ServiceSwComponent. Here SW-C(s) which wants to read/write data to NVRAM needs to utilize the standard NvM services using a Client-Server Interface.

Refer section  and section  for more details on using NvM as ServiceSwComponent.

* Benefits:

  * Enables basic generic configuration to accommodate NvM services and callbacks using the SW-C template.
  * Dedicated set of ports available for each block.
  * Application is abstracted from Block Identifier of NVRAM Block allocated by NvM.
* Restoring Default Value

  If Application is maintaining the RAM Blocks, it can define ParameterDataPrototypes local to a SW-C using PerInstanceParameter or ConstantMemory configuration which can be used by the SW-C to restore the RAM block and by NvM to restore the NV block.
* Handling Notifications

  Notifications from NvM to the Application are implemented by the RTE using a Client-Server Interface in the scenario of which NvM acts as the client and the user of the NvBlock acts as the server.

  In case of NvM being used via a ServiceSwComponent, the NvM uses generic Client-Server API mapped to a r-port of the NvM ServiceSwComponent i.e.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Accessing NV 数据 using NvBlockSwComponent
*原文标题：Accessing NV Data using NvBlockSwComponent*

Here NvM is configured as NvBlockSwComponent in RTE and can be utilized to create RAM Blocks (mirrors) of its own which can be written/read partially or completely by a single or multiple SW-C's using a NV-Data Interface.

Along with this, the Client-Server Interfaces are used for the NvM services and notifications.

Refer section  for more details on using NvM as NvBlockSwComponent.

* Benefits:

  * Each block is identified and has a dedicated RAM block allocated by the RTE.
  * Application SW-C implementation are independent of the name and type of the RAM block.
  * RAM block can be shared between multiple SW-C's via partial data mapping mechanisms provided by RTE (PortInterfaceMapping, NvDataMapping).
  * Less memory is used to implement RAM blocks.
  * Application always access RAM blocks via port interfaces resulting into a more modular approach.
  * User can utilize the dirtyFlag mechanism to enable a writing strategy in the NvBlockSwComponent instead of implementing a writing strategy in the Application software.
* Restoring Default Value

  NvBlockDescriptor inside a NvBlockSwComponent allows configuration of optional ROM blocks using ParameterDataPrototype.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. 初始化 of RAM Blocks from NVRAM
*原文标题：Initialization of RAM Blocks from NVRAM*

There are different strategies in AUTOSAR to restore RAM blocks to their previous values i.e. the values held before going into last shutdown.

Individual blocks can be explicitly read one-by-one using `NvM_ReadBlock`/`NvM_ReadPRAMBlock` from the Initialization runnables called using InitEvent during `Rte_Init`().

A more optimized approach is to read all such blocks where data persistence is required using a single NvM request `NvM_ReadAll`. All such NvM blocks are configured to be applicable for `NvM_ReadAll`. Any block to be read during `NvM_ReadAll` has to either have explicit synchronization or have a permanent RAM block. Figure  shows the process of restoration of RAM block using `NvM_ReadAll`. Further information about the AUTOSAR startup process is mentioned in .

### 35. Use Case Summary

The use-cases are segregated with respect to allocation of RAM blocks by Application or the RTE. In the majority of use-cases, all of the services are implemented by the RTE and used by the Application.

It is assumed that the RAM blocks have been initialized from the NVRAM on startup using one of the possible strategies within AUTOSAR elaborated in section ).

This use cases are applicable to all types of NVRAM blocks specified in section .

Following table provides overview of all use cases described in the below sub-sections:

| Section | Title | Description |
|---|---|---|
| Application SW-C accessing NVRAM Blocks having no Permanent RAM block | In this use case, SW-C is responsible for allocating RAM blocks that are used to access NVRAM block via Client-server ports. |  |
| Application SW-C accessing NVRAM blocks which have Permanent RAM blocks | In this use case, the RAM block is allocated in the RTE using PerInstanceMemory and is used to access NVRAM block via Client-Server ports. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Case 1：Application SW-C accessing NVRAM Blocks having no Permanent RAM block
*原文标题：Case 1: Application SW-C accessing NVRAM Blocks having no Permanent RAM block*

In all the scenarios covered by the use-case, NvM is configured in the form of a ServiceSwComponent. Any Application SW-C which wants to read/write data to NVRAM needs to utilize the standard NvM services using a Client-Server Interface.

Set of ports can be uniquely mapped to a NvMBlockDescriptor using the Port Defined Argument Value to determine the Identifier of the NvBlock.

The above use case is categorized further into two scenarios depending on the type NvM Block Synchronization used:

### 37. Case 1a：Application providing reference to its RAM 数据 area
*原文标题：Case 1a: Application providing reference to its RAM data area*

Implicit Synchronization is configured for the particular NvMBlockDescriptor for this use case (NvMBlockUseSyncMechanism parameter set to false). This mechanism is also known as "Using Temporary RAM Block by NvM".

In this scenario, the Application provides the reference of RAM data area as an argument as part of the `NvM_ReadBlock` / `NvM_WriteBlock` API's. Thus, it is the responsibility of the User (SW-C) to ensure data consistency for the RAM data (e.g. writing into the RAM data area while NvM is using it).

NvMRamBlockDataAddress parameter is not configured for this use case.

Figure  provides an overview of memory allocation in Application and NvM as per this use case. For details about interaction between these modules refer sequence diagram in figure .

Figure  shows port configuration used to access NvM interfaces by user (SWC1 / SWC2), here NvM is configured as ServiceSwComponentType.

Following ports are required to be configured -

* NvMService interface is used to send commands to the NvM.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. 配置 for SWC1：
*原文标题：Configuration for SWC1:*

| Interface | < | NvMService | < |
|---|---|---|---|
| Client | SWC1 | Server | NvM |
| R-Port | NvM_Service | P-Port | NvM_PS_NvMBlock0 |
| Synchronous Server CallPoints | WriteBlock, ReadBlock, RestoreBlockDefaults, GetErrorStatus, SetRamBlockStatus, Get/SetDataIndex etc. | Operation Invoked Events | WriteBlock, ReadBlock, RestoreBlockDefaults, GetErrorStatus, SetRamBlockStatus, Get/SetDataIndex etc. |

| Interface | < | NvMAdmin | < |
|---|---|---|---|
| Client | SWC1 | Server | NvM |
| R-Port | NvM_Admin | P-Port | NvM_PAdmin_NvMBlock0 |
| Synchronous Server CallPoints | SetBlockProtection | Operation Invoked Events | SetBlockProtection |

| Interface | < | NvMNotifyInitBlock | < |
|---|---|---|---|
| Client | NvM | Server | SWC1 |
| R-Port | NvM_PNIB_NvMBlock0 | P-Port | NvM_NotifyInitBlock |
| Synchronous Server CallPoints | NotifyInitBlock | Operation Invoked Events | NotifyInitBlock |

| Interface | < | NvMNotifyJobFinished | < |
|---|---|---|---|
| Client | NvM | Server | SWC1 |
| R-Port | NvM_PNJF_NvMBlock0 | P-Port | NvM_NotifyJobFinished |
| Synchronous Server CallPoints | NotifyJobFinished | Operation Invoked Events | NotifyJobFinished |

### 39. 配置 for SWC2：
*原文标题：Configuration for SWC2:*

| Interface | < | NvMService | < |
|---|---|---|---|
| Client | SWC2 | Server | NvM |
| R-Port | NvM_Service | P-Port | NvM_PS_NvMBlock1 |
| Synchronous Server CallPoints | WriteBlock, ReadBlock, RestoreBlockDefaults, GetErrorStatus, SetRamBlockStatus, Get/SetDataIndex etc. | Operation Invoked Events | WriteBlock, ReadBlock, RestoreBlockDefaults, GetErrorStatus, SetRamBlockStatus, Get/SetDataIndex etc. |

| Interface | < | NvMAdmin | < |
|---|---|---|---|
| Client | SWC2 | Server | NvM |
| R-Port | NvM_Admin | P-Port | NvM_PAdmin_NvMBlock1 |
| Synchronous Server CallPoints | SetBlockProtection | Operation Invoked Events | SetBlockProtection |

| Interface | < | NvMNotifyInitBlock | < |
|---|---|---|---|
| Client | NvM | Server | SWC2 |
| R-Port | NvM_PNIB_NvMBlock1 | P-Port | NvM_NotifyInitBlock |
| Synchronous Server CallPoints | NotifyInitBlock | Operation Invoked Events | NotifyInitBlock |

| Interface | < | NvMNotifyJobFinished | < |
|---|---|---|---|
| Client | NvM | Server | SWC2 |
| R-Port | NvM_PNJF_NvMBlock1 | P-Port | NvM_NotifyJobFinished |
| Synchronous Server CallPoints | NotifyJobFinished | Operation Invoked Events | NotifyJobFinished |

### 40. Case 1b：NvM fetches application RAM 数据 via callback (NvM Explicit 同步)
*原文标题：Case 1b: NvM fetches application RAM data via callback (NvM Explicit Synchronization)*

NvM Block Descriptor is required to be configured to have explicit synchronization for this use case (NvMBlockUseSyncMechanism parameter set to true).

In this scenario, data is maintained locally by the application SW-C. A call to `NvM_WriteBlock` will start the process but the data can be modified till that point in time when a callback referred by configuration parameter NvMWriteRamBlockToNvCallback occurs. The data is copied from the application data area to the NvM Ram Mirror as part of this callback. Similarly, during read operation, application data area is updated from NvM module's mirror via callback configured using NvMReadRamBlockFromNvCallback parameter.

This is similar to a deferred operation where unlike earlier scenarios, an SW-C can modify its data after a call to `NvM_WriteBlock` even when it is not yet written to an NV Block, as data area is accessed only during callback (protection needs to be ensured during the callback).

The callbacks are implemented using a Client Server Interface specified in section .

Figure  provides an overview of memory allocation in Application and NvM as per this use case.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. For SWC1：
*原文标题：For SWC1:*

| Interface | < | NvMMirror | < |
|---|---|---|---|
| Client | NvM | Server | SWC1 |
| R-Port | NvM_PM_NvMBlock0 | P-Port | NvM_Mirror |
| Synchronous Server CallPoints | SetMirror, GetMirror | Operation Invoked Events | SetMirror, GetMirror |

### 42. For SWC2：
*原文标题：For SWC2:*

| Interface | < | NvMMirror | < |
|---|---|---|---|
| Client | NvM | Server | SWC2 |
| R-Port | NvM_PM_NvMBlock1 | P-Port | NvM_Mirror |
| Synchronous Server CallPoints | SetMirror, GetMirror | Operation Invoked Events | SetMirror, GetMirror |

### 43. Case 2：Application SW-C accessing NVRAM blocks which have Permanent RAM blocks
*原文标题：Case 2: Application SW-C accessing NVRAM blocks which have Permanent RAM blocks*

In this scenario, RAM blocks are configured in the form of Per Instance Memory in RTE. The reference to the created Per Instance Memory is given in the NvMBlockDescriptor configuration using the NvMRamBlockDataAddress parameter.

NvM Block Descriptor is configured to have implicit synchronization for this use case (NvMBlockUseSyncMechanism parameter set to false). In case of permanent RAM blocks configured in NvM, NvM provides dedicated API's to request services regarding the Permanent RAM blocks i.e. `NvM_ReadPRAMBlock`/`NvM_WritePRAMBlock`.

Additionally, if the User has a need to provide temporary RAM blocks even though a permanent one is configured in the system, `NvM_ReadBlock`/`NvM_WriteBlock` API is used to provide the temporary RAM block address. Such API's have precedence over `NvM_ReadPRAMBlock`/`NvM_WritePRAMBlock`.

The (ArTyped)PerInstanceMemory is allocated as RAM block in the RTE and can be accessed by the Application SW-C using `Rte_Pim` API. In this scenario, it is invalid for two SW-C's to use the RAM block for their purpose.

In general, there are two different kinds of Per Instance Memory available which are varying in the typing mechanisms.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 17 章（内容从略，见纯文本全文）

44. For SWC1：
45. For SWC2：
46. Case 3：Application SW-C accessing NVRAM block using an NvBlockSwComponentType
47. Case 3a：Using Rte Explicit S/R Communication
48. No Dirty Flag 支持
49. With Dirty Flag 支持
50. Storing Cyclically
51. Storing at 关机
52. Storing Immediately
53. Case 3b：Using Rte Implicit S/R Communication
54. No Dirty Flag 支持
55. With Dirty Flag 支持
56. Storing Cyclically
57. Storing at 关机
58. Storing Immediately
59. 附录
60. 附录
