# Specification of ECU State Manager (`ECUStateManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 078 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_ECUStateManager_078\AUTOSAR_CP_SWS_ECUStateManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_ECUStateManager_078\AUTOSAR_CP_SWS_ECUStateManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_ECUStateManager_078\zzgen\CP_SWS_ECUStateManager.complete.txt`

## 文档简介

The ECU Manager module (as specified in this document) is a basic software module (see ) that manages common aspects of ECU states. Specifically, the ECU Manager module:

* Initializes and de-initializes the OS, the SchM and the BswM as well as some basic software driver modules.
* configures the ECU for SLEEP and SHUTDOWN when requested.
* manages all wakeup events on the ECU

The ECU Manager module provides the wakeup validation protocol to distinguish 'real' wakeup events from 'erratic' ones.

Furthermore:

* Partial or fast startup where he ECU starts up with limited capabilities and later, as determined by the application, continues startup step by step.
* Interleaved startup where the ECU starts minimally and then starts the RTE to execute functionality in SW-Cs as soon as possible. It then continues to start further BSW and SW-Cs, thus interleaving BSW and application functionality..
* Multiple operational states where the ECU has more than one RUN state. This, among other things, refines the notion of a spectrum of SLEEP states to RUN states. There can now be a continuum of operational states spanning from the classic RUN (fully operational) to the deepest SLEEP (processor halted).
* Multi-Core ECUs: STARTUP, SHUTDOWN, SLEEP and WAKEUP are coordinated on all cores of the ECU.

Flexible ECU management employs the generic mode management facilities provided by the following modules:

* RTE and BSW Scheduler module  are now amalgamated into one module: This module supports freely configurable BSW and application modes and their mode-switching facilities.
* BSW Mode Manager module : This module implements configurable rules and action lists to evaluate the conditions for switching ECU modes and to implement the necessary actions to do so.

Thus with Flexible ECU Management, most ECU states are no longer implemented in the ECU Manager module itself. In general, the ECU Manager module takes over control when the generic mode management facilities are unavailable in:

* Early STARTUP phases,
* Late SHUTDOWN phases,
* SLEEP phases where the facilities are locked out by the scheduler.

During the UP Phase of the ECU Manager module the BSW Mode Manager is responsible for further actions. Whereas, the ECU Manager module arbitrates RUN and `POST_RUN` Requests from SW-Cs and notifies BswM about the status of the modes.

## 模块依赖

The following sections outline the important relationships to other modules. They also contain some requirements that these modules must fulfill to collaborate correctly with the ECU Manager module.

If data pointers are passed to a BSW module, the address needs to point to a location in the shared part of the memory space.

## 章节详细内容

### 1. 已知限制
*原文标题：Known Limitations*

* The ECU Manager module interfaces must be specified as reentrant in the Multi-Core context.

### 2. 简介与功能概述
*原文标题：Introduction and Functional Overview*

The ECU Manager module (as specified in this document) is a basic software module (see ) that manages common aspects of ECU states. Specifically, the ECU Manager module:

* Initializes and de-initializes the OS, the SchM and the BswM as well as some basic software driver modules.
* configures the ECU for SLEEP and SHUTDOWN when requested.
* manages all wakeup events on the ECU

The ECU Manager module provides the wakeup validation protocol to distinguish 'real' wakeup events from 'erratic' ones.

Furthermore:

* Partial or fast startup where he ECU starts up with limited capabilities and later, as determined by the application, continues startup step by step.
* Interleaved startup where the ECU starts minimally and then starts the RTE to execute functionality in SW-Cs as soon as possible. It then continues to start further BSW and SW-Cs, thus interleaving BSW and application functionality..
* Multiple operational states where the ECU has more than one RUN state. This, among other things, refines the notion of a spectrum of SLEEP states to RUN states.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. Backwards Compatibility to Previous ECU 管理器模块 Versions
*原文标题：Backwards Compatibility to Previous ECU Manager Module Versions*

Flexible ECU management is backward compatible to previous ECU Manager versions if it is configured accordingly.

For more information about a configuration in respect to compatibility see the "Guide to Mode Management" .

### 4. 定义 and Abbreviations
*原文标题：Definitions and Abbreviations*

This chapter defines terms that are of special significance to the ECU Manager and the acronyms of related modules. Some acronyms are common to several specifications, for their definition refer to the Glossary

### 5. 定义
*原文标题：Definitions*

| Term | Description |
|---|---|
| Callback | Refer to the Glossary |
| Callout | 'Callouts' are function stubs that the system designer can replace with code, usually at configuration time, to add functionality to the ECU Manager module. Callouts are separated into two classes. One class provides mandatory ECU Manager module functionality and serves as a hardware abstraction layer. The other class provides optional functionality. |
| Integration Code | Refer to the Glossary |
| Mode | A Mode is a certain set of states of the various state machines (not only of the ECU Manager) that are running in the vehicle and are relevant to a particular entity, an application or the whole vehicle |
| Passive Wakeup | A wakeup caused from an attached bus rather than an internal event like a timer or sensor activity. |
| Phase | A logical or temporal assembly of ECU Manager's actions and events, e.g. STARTUP, UP, SHUTDOWN, SLEEP, ... Phases can consist of Sub-Phases which are often called Sequences if they above all exist to group sequences of executed actions into logical units. Phases in this context are not the phases of the AUTOSAR Methodology. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Abbreviations

| Abbreviations | Description |
|---|---|
| BswM | Refer to the Glossary |
| Dem | Refer to the Glossary |
| Det | Default Error Tracer |
| EcuM | ECU Manager |
| Gpt | Refer to the Glossary |
| Icu | Refer to the Glossary |
| ISR | Refer to the Glossary |
| Mcu | Refer to the Glossary |
| NVRAM | Refer to the Glossary |
| Os | Refer to the Glossary |
| Rte | Refer to the Glossary |
| VFB | Refer to the Glossary |

### 7. 相关文档
*原文标题：Related documentation*

### 8. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 9. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules (see ), which is also valid for ECU State Manager. Thus, the specification  shall be considered as additional and required specification for ECU State Manager.

### 10. 约束与假设
*原文标题：Constraints and Assumptions*

### 11. 限制
*原文标题：Limitations*

ECUs cannot always be switched off (i.e. zero power consumption).

Rationale: The shutdown target OFF can only be reached using ECU special hardware (e.g. a power hold circuit). If this hardware is not available, this specification proposes to issue a reset instead. Other default behaviors are permissible, however.

### 12. 适用的车型领域
*原文标题：Applicability to car domains*

The ECU Manager module is applicable to all car domains.

### 13. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The following sections outline the important relationships to other modules. They also contain some requirements that these modules must fulfill to collaborate correctly with the ECU Manager module.

If data pointers are passed to a BSW module, the address needs to point to a location in the shared part of the memory space.

### 14. SPAL 模块
*原文标题：SPAL Modules*

### 15. MCU 驱动
*原文标题：MCU Driver*

The MCU Driver is the first basic software module initialized by the ECU Manager module. When `MCU_Init` returns (see ), the MCU module and the MCU Driver module are not necessarily fully initialized, however. Additional MCU module specific steps may be needed to complete the initialization. The ECU Manager module provides two callout where this additional code can be placed. Refer to section  Activities in StartPreOS Sequence for details.

### 16. 驱动 Dependencies and 初始化 Order
*原文标题：Driver Dependencies and Initialization Order*

BSW drivers may depend on each other. A typical example is the watchdog driver, which needs the SPI driver to access an external watchdog. This means on the one hand, that drivers may be stacked (not relevant to the ECU Manager module) and on the other hand that the called module must be initialized before the calling module is initialized.

The system designer is responsible for defining the initialization order at configuration time in EcuMDriverInitListZero, EcuMDriverInitListOne, EcuMDriverRestartList and in EcuMDriverInitListBswM.

### 17. Peripherals with 唤醒 Capability
*原文标题：Peripherals with Wakeup Capability*

Wakeup sources must be handled and encapsulated by drivers.

These drivers must follow the protocols and requirements presented in this document to ensure a seamless integration into the AUTOSAR BSW. Basically, the protocol is as follows:

The driver must invoke `EcuM_SetWakeupEvent` (see ) to notify the ECU Manager module that a pending wakeup event has been detected. The driver must not only invoke `EcuM_SetWakeupEvent` while the ECU is waiting for a wakeup event during a sleep phase but also during the driver initialization phase and during normal operation when `EcuM_MainFunction` is running.

The driver must provide an explicit function to put the wakeup source to sleep. This function shall put the wakeup source into an energy saving and inert operation mode and rearm the wakeup notification mechanism.

If the wakeup source is capable of generating spurious events then either

* the driver or
* the software stack consuming the driver or
* another appropriate BSW module

must either provide a validation callout for the wakeup event or call the ECU Manager module's validation function.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 操作系统
*原文标题：Operating System*

The ECU Manager module starts the AUTOSAR OS and also shuts it down. The ECU Manager module defines the protocol how control is handled before the OS is started and how control is handled after the OS has been shut down.

### 19. BSW Scheduler

The ECU Manager module initializes the BSW Scheduler and the ECU Manager module also contains `EcuM_MainFunction` (see ) which is scheduled to periodically evaluate wakeup requests.

### 20. BSW 模式管理器
*原文标题：BSW Mode Manager*

ECU states are generally implemented as AUTOSAR modes and the BSW Mode Manager is responsible for monitoring changes in the ECU and affecting the corresponding changes to the ECU state machine as appropriate. Refer to the Specification of the Virtual Function Bus  for a discussion of AUTOSAR mode management and to the Guide to Mode Management  for ECU state machine implementation details and for guidelines about how to configure the BSW Mode Manager to implement the ECU state machine

The BSW Mode Manager can only manage the ECU state machine after mode management is operational - that is, after the SchM has been initialized and until the SchM is de-initialised or halted. The ECU Manager module takes control of the ECU when the BSW Mode manager is not operational.

The ECU Manager module therefore takes control immediately after the ECU has booted and relegates control to the BSW Mode Manager after initializing the SchM and the BswM.

The BswM passes control of the ECU back to the ECU Manager module to lock the operating system and handle wakeup events.

The BswM also passes control back to the ECU Manager immediately before the OS is stopped on shutdown.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. 软件 Components
*原文标题：Software Components*

The ECU Manager module handles the following ECU-wide properties:

* Shutdown targets.

This specification assumes that SW-Cs set these properties (through AUTOSAR ports), typically by some ECU specific part of the SW-C. The ECU Manager does not prevent a SW-C from overrighting settings made by SW-Cs. The policy must be defined at a higher level.

The following measures might help to resolve this issue.

* The SW-C Template may contain a field to indicate whether the SW-C sets the shutdown target.
* The generation tool may only allow configurations that have one SW-C accessing the shutdown target.

### 22. 文件结构
*原文标题：File Structure*

### 23. 代码文件结构
*原文标题：Code file structure*

This specification does not define the code file structure completely.

  Upstream requirements:
⌈
The ECU Manager module implementation shall provide a single `EcuM_Callout_Stubs`.c file which contains the stubs of the callouts realized in this implementation.
⌋

See also section  Callout Definitions for a list of the callouts that could possibly be implemented.

Whether `EcuM_Callout_Stubs`.c can be edited manually or is composed only of other generated files depends on the implementation.

### 24. 头文件结构
*原文标题：Header file structure*

Also refer to chapter  Expected Interfaces for dependencies to other modules.

### 25. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| All AUTOSAR Basic Software Modules shall only import the necessary information |  |  |
| Global variables naming convention |  |  |
| Error values naming convention |  |  |
| All Basic Software Modules shall strictly separate error and status information |  |  |
| For each callback function it shall be specified if it is called from interrupt context or not |  |  |
| Classification of development errors |  |  |
| All AUTOSAR Basic Software Modules shall provide at least a basic set of module files |  |  |
| All AUTOSAR Basic Software Modules shall allow the enabling/disabling of detection and reporting of development errors. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. 功能规范
*原文标题：Functional Specification*

Chapter 1 introduced the new, more flexible approach to ECU state management.

However, this flexibility comes at the price of responsibility. There are no standard ECU modes, or states. The integrator of an ECU must decide which states are needed and also configure them.

When ECU Mode Handling is used, the standard states RUN and `POST_RUN` are arbitrated by the RUN Request Protocol and propagated to the BswM. The system designer has to make sure that pre-conditions of respective states are met when setting an EcuM Mode by BswM actions.

Note that neither the BSW nor SW-Cs will be able to rely on certain ECU modes or states, although previous versions of the BSW have largely not relied on them..

This document only specifies the functionality that remains in the ECU Manager module. For a complete picture of ECU State Management, refer to the specifications of the other relevant modules, i.e., RTE and BSW Scheduler module  and BSW Mode Manager module .

Refer to the Guide to Mode Management  for some example use cases for ECU states and the interaction between the involved BSW modules.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Phases of the ECU 管理器模块
*原文标题：Phases of the ECU Manager Module*

Previous versions of the ECU Manager Module specification have differentiated between ECU states and ECU modes.

ECU modes were longer-lasting periods of operational ECU activities that were visible to applications and provided orientation to them, i.e. starting up, shutting down, going to sleep and waking up.

The ECU Manager states were generally continuous sequences of ECU Manager Module operations terminated by waiting until external conditions were fulfilled. Startup1, for example, contained all BSW initialization before the OS was started and terminated when the OS returned control to the ECU Manager module.

For the current Flexible ECU Manager there exist States, Modes and Phases which are defined in Definitions and Acronyms.

Here the ECU state machine is implemented as general modes under the control of the BSW Mode Manager module. This creates a terminology problem as the old ECU States now become Modes that are visible through the `RTE_Mode` port interface and the old ECU Modes become Phases.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. 启动 Phase
*原文标题：STARTUP Phase*

The purpose of the STARTUP phase is to initialize the basic software modules to the point where Generic Mode Management facilities are operational. For more details about the initialization see chapter .

### 29. UP Phase

Essentially, the UP phase starts when the BSW Scheduler has started and `BswM_Init` has been called. At that point, memory management is not initialized, there are no communication stacks, no SW-C support (RTE) and the SW-Cs have not started. Processing starts in a certain mode (the next one configured after Startup) with corresponding runnables, i.e. the BSW MainFunctions, and continues as an arbitrary combination of mode changes which cause the BswM to execute actions as well as triggering and disabling corresponding runnables.

From the ECU Manager Module perspective, the ECU is "up", however. The BSW Mode Manager Module then starts mode arbitration and all further BSW initialization, starting the RTE and (implicitly) starting SW-Cs becomes code executed in the BswM's action lists or driven by mode-dependent scheduling, effectively under the control of the integrator.

Initializing the NvM and calling `NvM_Readall` therefore also becomes integration code. This means that the integrator is responsible for triggering the initialization of Com, DEM and FIM at the end of `NvM_ReadAll`. The NvM will notify the BswM when `NvM_ReadAll` has finished.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 关机 Phase
*原文标题：SHUTDOWN Phase*

Upstream requirements:
⌈
The SHUTDOWN phase handles the controlled shutdown of basic software modules and finally results in the selected shutdown target OFF or RESET.
⌋

### 31. 休眠 Phase
*原文标题：SLEEP Phase*

The ECU saves energy in the SLEEP phase. Typically, no code is executed but power is still supplied, and if configured accordingly, the ECU is wakeable in this state. The ECU Manager module provides a configurable set of (hardware) sleep modes which typically are a trade off between power consumption and time to restart the ECU.

The ECU Manager module wakes the ECU up in response to intended or unintended wakeup events. Since unintended wakeup events should be ignored, the ECU Manager module provides a protocol to validate wakeup events. The protocol specifies a cooperative process between the driver which handles the wakeup source and the ECU Manager (see section  ).

### 32. OFF Phase

The ECU enters the OFF state when it is powered down. The ECU may be wakeable in this state but only for wakeup sources with integrated power control. In any case the ECU must be startable (e.g. by reset events).

### 33. the ECU 管理器的Structural 描述
*原文标题：Structural Description of the ECU Manager*

Figure  illustrates the ECU Manager module's relationship to the interfaces of other BSW modules. In most cases, the ECU Manager module is simply responsible for initialization. There are however some modules that have a functional relationship with the ECU Manager module, which is explained in the following paragraphs.

### 34. Standardized AUTOSAR 软件模块
*原文标题：Standardized AUTOSAR Software Modules*

Some Basic Software driver modules are initialized, shut down and re-initialized upon wakeup by the ECU Manager module.

The OS is initialized and shut down by the ECU Manager.

After the OS initialization, additional initialization steps are undertaken by the ECU Manager module before passing control to the BswM. The BswM hands execution control back to the ECU Manager module immediately before OS shutdown. Details are provided in the chapters  STARTUP and  SHUTDOWN .

### 35. 软件 Components
*原文标题：Software Components*

SW-Components contain the AUTOSAR ECU's application code.

A SW-C interacts with the ECU Manager module using AUTOSAR ports.

### 36. 启动 Phase
*原文标题：STARTUP Phase*

See Chapter  for an overview description of the STARTUP phase.

Figure  shows the startup behavior of the ECU. When invoked through `EcuM_Init`, the ECU Manager module takes control of the ECU startup procedure. With the call to StartOS, the ECU Manager module temporarily relinquishes control. To regain control, the Integrator has to implement an OS task that is automatically started and calls `EcuM_StartupTwo` as its first action.

### 37. Activities before EcuM_Init

The ECU Manager module assumes that before `EcuM_Init` (see  ) is called a minimal initialization of the MCU has taken place, so that a stack is set up and code can be executed, also that C initialization of variables has been performed.

### 38. Activities in StartPreOS Sequence

Upstream requirements:
⌈
Table StartPreOS Sequence shows the activities in StartPreOS Sequence and the order in which they shall be executed in `EcuM_Init` (see  ).
⌋

| StartPreOS Sequence | < | < |
|---|---|---|
| Initialization Activity | Comment | Opt. |
| Callout EcuM_AL_SetProgrammableInterrupts | On ECUs with programmable interrupt priorities, these priorities must be set before the OS is started. | yes |
| Callout EcuM_AL_DriverInitZero | Init block 0 |  |

| This callout may only initialize BSW modules that do not use post-build configuration parameters. The callout may not only contain driver initialization but also any kind of pre-OS, low level initialization code. See  Driver Initialization | yes |  |
|---|---|---|
| Callout EcuM_DeterminePbConfiguration | This callout is expected to return a pointer to a fully initialized EcuM_ConfigType structure containing the post-build configuration data for the ECU Manager module and all other BSW modules. | no |
| Check consistency of configuration data | If check fails the EcuM_ErrorHook is called. See  Checking Configuration Consistency for details on the consistency check. | no |
| Callout EcuM_AL_DriverInitOne | Init block I |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Activities in the StartPostOS Sequence

Upstream requirements:
⌈
| StartPostOS Sequence | < | < |
|---|---|---|
| Initialization Activity | Comment | Opt. |
| Start BSW Scheduler |  | no |
| Init BSW Mode Manager |  | no |
| Init BSW Scheduler | Initialize the semaphores for critical sections used by BSW modules | no |
| Start Scheduler Timing | Start periodical events for BSW/SWCs | no |

⌋

Note to column Opt. : Optional activities can be switched on or off by configuration. See section  Common Containers and configuration parameters for details.

  Upstream requirements:
⌈
When activated through the `EcuM_StartupTwo` (see  ) function, the ECU Manager module shall perform the actions in StartPostOS Sequence (see table in ).
⌋

### 40. Checking 配置 Consistency
*原文标题：Checking Configuration Consistency*

### 41. The Necessity for Checking 配置 Consistency in the ECU 管理器
*原文标题：The Necessity for Checking Configuration Consistency in the ECU Manager*

In an AUTOSAR ECU several configuration parameters are set and put into the ECU at different times. Pre-compile parameters are set, inserted into the generated source code and compiled into object code. When the source code has been compiled, link-time parameters are set, compiled, and linked with the previously configured object code into an image that is put into the ECU. Finally, post-build parameters are set, compiled, linked, and put into the ECU at a different time. All these parameters must match to obtain a stable ECU.

The configuration tool can check the consistency of configuration time parameters itself. The compiler may detect parameter errors at compilation time and the linker may find additional errors at link time. Unfortunately, finding configuration errors in post-build parameters is very difficult. This can only be achieved by checking that

* the pre-compile and link-time parameter settings used when compiling the code

are exactly the same as

* the pre-compile and link-time parameter settings used when configuring and compiling the post-build parameters.

This can only be done at run-time.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. 示例 Hash Computation Algorithm
*原文标题：Example Hash Computation Algorithm*

Note: This chapter is not normative. It describes one possible way to compute hash values.

A simple CRC over the values of configuration parameters will not serve as a good hash algorithm. It only detects global changes, e.g. one parameter has changed from 1 to 2. But if another parameter changed from 2 to 1, the CRC might stay the same.

Additionally, not only the values of the configuration parameters but also their names must be taken into account in the hash algorithm. One possibility is to build a text file that contains the names of the configuration parameters and containers, separate them from the values using a delimiter, e.g. a colon, and putting each parameter as a line into a text file.

If there are multiple containers of the same type, each container name can be appended with a number, e.g. "_0", "_1" and so on.

To make the hash value independent of the order in which the parameters are written into the text file, the lines in the file must now be sorted lexicographically.

Finally, a cryptographically strong hash function, e.g. MD5, can be run on the text file to produce the hash value.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. 驱动初始化
*原文标题：Driver Initialization*

A driver's location in the initialization process depends strongly on its implementation and the target hardware design.

Drivers can be initialized by the ECU Manager module in Init Block 0 or Init Block 1 of the STARTUP phase or re-initialized in the `EcuM_AL_DriverRestart` callout of the WakeupRestart Sequence. Drivers can also be initialized or re-initialized by the BswM during the UP phase.

This chapter applies to those AUTOSAR Basic Software drivers, other than SchM and BswM, whose initialization and re-initialization is handled by the ECU Manager module and not the BswM.

  Upstream requirements:
⌈
The configuration of the ECU Manager module shall specify the order of initialization calls inside init block 0 and init block 1. (see EcuMDriverInitListZero and EcuMDriverInitListOne ).
⌋

  Upstream requirements:
⌈
The ECU Manager module shall call each driver's init function with the parameters derived from the driver's EcuMModuleService configuration container.
⌋

  Upstream requirements:
⌈
For re-initialization during WakeupRestart, the integrator shall integrate a restart block into the integration code for `EcuM_AL_DriverRestart` (see  ) using the EcuMDriverRestartList.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. BSW 初始化
*原文标题：BSW Initialization*

The remaining BSW modules are initialized by the BSW Mode Manager, using a configured function of the ECU Manager (EcuMDriverInitCalloutName `ECUC_EcuM_00227`) created from the configured list of init functions ( EcuMDriverInitListBswM ).

  Upstream requirements:
⌈
The configuration of the ECU Manager module shall specify the order of initialization calls inside the BSW initialization (see EcuMDriverInitListBswM ).
⌋

### 45. 关机 Phase
*原文标题：SHUTDOWN Phase*

Refer to Section  SHUTDOWN Phase for an overview of the SHUTDOWN phase. `EcuM_GoDownHaltPoll` with shutdown target RESET or OFF initiates the SHUTDOWN Phase.

  Upstream requirements: ,
⌈
When a wakeup event occurs during the shutdown phase, the ECU Manager module shall complete the shutdown and restart immediately thereafter.
⌋

### 46. Activities in the OffPreOS Sequence

Upstream requirements:
⌈
| OffPreOS Sequence | < | < |
|---|---|---|
| Shutdown Activity | Comment | Opt. |
| De-init BSW Mode Manager |  | no |
| De-init BSW Scheduler |  | no |
| Check for wakeup events. All pending wakeup events or only wakeup events validated during shutdown are considered depending on the configuration of EcuMIgnoreWakeupEvValOffPreOS. | Purpose is to detect wakeup events that occurred during shutdown | no |
| Set RESET as shutdown target, if wakeup events are pending (default reset mode of EcuMDefaultResetModeRef will be used) | This action shall only be carried out when pending wakeup events were detected to allow an immediate startup | no |
| ShutdownOS | Last operation in this OS task | no |

⌋

Note to column Opt. : Optional activities can be switched on or off by configuration. It shall be the system designers choice if a module is compiled in or not for an ECU design. See chapter  Common Containers and configuration parameters for details.

  Upstream requirements: ,
⌈
In OffPreOS and configuration parameter EcuMIgnoreWakeupEvValOffPreOS is set to true, only wakeup events which do not need validation shall be considered, all other wakeup events shall be ignored.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. Activities in the OffPostOS Sequence

The OffPostOS sequence implements the final steps to reach the shutdown target after the OS has been shut down. `EcuM_Shutdown` (see  ) initiates the sequence.

The shutdown target can be either `ECUM_SHUTDOWN_TARGET_RESET` or `ECUM_SHUTDOWN_TARGET_OFF`, whereby the specific reset modality is determined by the reset mode. See section  Shutdown Targets for details.

| OffPostOS Sequence | < | < |
|---|---|---|
| Shutdown Activity | Comment | Opt. |
| Callout EcuM_OnGoOffTwo |  |  |
| Callout EcuM_AL_Reset or Callout EcuM_AL_SwitchOff | Depends on the selected shutdown target (RESET or OFF) | no |

Note to column Opt. : Optional activities can be switched on or off by configuration. It shall be the system designers choice if a module is compiled in or not for an ECU design. See chapter  Common Containers and configuration parameters for details.

  Upstream requirements:
⌈
When the shutdown target is RESET, the ECU Manager module shall call the `EcuM_AL_Reset` callout.
⌋

See section  `EcuM_AL_Reset` ( ) for details.

  Upstream requirements:
⌈
When the shutdown target is OFF, the ECU Manager module shall call the `EcuM_AL_SwitchOff` callout.
⌋

See section  `EcuM_AL_SwitchOff` ( ) for details.

### 48. 休眠 Phase
*原文标题：SLEEP Phase*

Refer to Section  SLEEP Phase for an overview of the SLEEP phase. `EcuM_GoDownHaltPoll` with shutdown target SLEEP initiate the SLEEP phase.

`EcuM_GoDownHaltPoll` with shutdown target SLEEP initiate two control streams, depending on the sleep mode selected (EcuMSleepModeSuspend parameter), that differ structurally in the mechanisms used to realize sleep. They share the sequences for preparing for and recovering from sleep, however.

Another module, presumably the BswM, although it could be an SW-C as well, must ensure that an appropriate `ECUM_STATE_SLEEP` shutdown target has been selected before calling `EcuM_GoDownHaltPoll`.

### 49. Activities in the GoSleep Sequence

In the GoSleep sequence the ECU Manager module configures hardware for the upcoming sleep phase and sets the ECU up for the next wakeup event.

  Upstream requirements: ,
⌈
To set the wakeup sources up for the next sleep mode, the ECU Manager module shall execute the `EcuM_EnableWakeupSources` callout (see  ) for each wakeup source that is configured in EcuMWakeupSourceMask for the target sleep mode.
⌋

  Upstream requirements:
⌈
In contrast to the SHUTDOWN phase, the ECU Manager module shall not shut down the OS when entering the SLEEP phase. The sleep mode, i.e. combination of the EcuM SLEEP phase and the Mcu Mode, shall be transparent to the OS.
⌋

  Upstream requirements:
⌈
When operating on a multicore ECU ECUM shall reserve a dedicated resource (`RES_AUTOSAR_ECUM`) for each core, which is allocated during GoSleep.
⌋

### 其余 194 章（内容从略，见纯文本全文）

50. Activities in the Halt Sequence
51. Activities in the Poll Sequence
52. Leaving Halt or Poll
53. Activities in the WakeupRestart Sequence
54. UP Phase
55. 唤醒 Source 状态处理
56. Internal Representation of 唤醒 States
57. Activities in the WakeupValidation Sequence
58. 唤醒 of Communication Channels
59. Interaction of 唤醒 Sources and the ECU 管理器
60. 唤醒校验 Timeout
61. 需求 for Drivers with 唤醒 Sources
62. 需求 for 唤醒校验
63. 唤醒 Sources and Reset Reason
64. 唤醒 Sources with Integrated Power 控制
65. 关机 Targets
66. 休眠
67. Reset
68. MultiCore
69. Master 核
70. Slave 核
71. Master 核 - Slave 核 Signalling
72. BSW Level
73. 示例 for 关机同步
74. UP Phase
75. 启动 Phase
76. Master 核启动
77. Slave 核启动
78. 关机 Phase
79. Master 核关机
80. Slave 核关机
81. 休眠 Phase
82. Master 核休眠
83. Slave 核休眠
84. Runnables and Entry points
85. Internal 行为
86. EcuM 模式处理
87. Advanced Topics
88. Relation to Bootloader
89. Relation to Complex Drivers
90. 处理错误 during 启动 and 关机
91. ErrorHook
92. 错误分类
93. Development 错误
94. Runtime 错误
95. Transient Faults
96. Production 错误
97. Extended Production 错误
98. API 规范
99. Imported 类型
100. 类型定义
101. EcuM_ConfigType
102. EcuM_RunStatusType
103. EcuM_WakeupSourceType
104. EcuM_WakeupStatusType
105. EcuM_ResetType
106. EcuM_StateType
107. 功能定义
108. 初始化 and 关机 Sequences
109. EcuM_GoDownHaltPoll
110. EcuM_Init
111. EcuM_StartupTwo
112. EcuM_Shutdown
113. 状态管理
114. EcuM_SetState
115. EcuM_RequestRUN
116. EcuM_ReleaseRUN
117. EcuM_RequestPOST_RUN
118. EcuM_ReleasePOST_RUN
119. 关机管理
120. EcuM_SelectShutdownTarget
121. EcuM_GetShutdownTarget
122. EcuM_GetLastShutdownTarget
123. EcuM_SelectShutdownCause
124. EcuM_GetShutdownCause
125. 唤醒处理
126. EcuM_CheckWakeup
127. EcuM_GetPendingWakeupEvents
128. EcuM_ClearWakeupEvent
129. EcuM_GetValidatedWakeupEvents
130. EcuM_GetExpiredWakeupEvents
131. Miscellaneous
132. EcuM_SelectBootTarget
133. EcuM_GetBootTarget
134. 回调 from 唤醒 Sources
135. EcuM_SetWakeupEvent
136. EcuM_ValidateWakeupEvent
137. Scheduled Functions
138. EcuM_MainFunction
139. Expected 接口
140. Mandatory 接口
141. Optional 接口
142. Callout 接口
143. Generic Callouts
144. EcuM_ErrorHook
145. Callouts from the 启动 Phase
146. EcuM_AL_SetProgrammableInterrupts
147. EcuM_AL_DriverInitZero
148. EcuM_DeterminePbConfiguration
149. EcuM_AL_DriverInitOne
150. EcuM_LoopDetection
151. Callouts from the 关机 Phase
152. EcuM_OnGoOffOne
153. EcuM_OnGoOffTwo
154. EcuM_AL_SwitchOff
155. EcuM_AL_Reset
156. Callouts from the 休眠 Phase
157. EcuM_EnableWakeupSources
158. EcuM_GenerateRamHash
159. EcuM_SleepActivity
160. EcuM_StartCheckWakeup
161. EcuM_CheckWakeupHook
162. EcuM_CheckRamHash
163. EcuM_DisableWakeupSources
164. EcuM_AL_DriverRestart
165. Callouts from the UP Phase
166. EcuM_StartWakeupSources
167. EcuM_CheckValidation
168. EcuM_StopWakeupSources
169. Configurable 接口
170. 回调 from the 启动 phase
171. the Port 接口的规范
172. Ports and Port 接口 for EcuM_ShutdownTarget 接口
173. 通用 Approach
174. 服务接口
175. Port 接口 for EcuM_BootTarget 接口
176. 通用 Approach
177. 服务接口
178. Port 接口 for EcuM_StateRequest 接口
179. 通用 Approach
180. 数据类型
181. 服务接口
182. Port 接口 for EcuM_CurrentMode 接口
183. 通用 Approach
184. 数据类型
185. 服务接口
186. the ECU 管理器服务的定义
187. Sequence Charts
188. 状态 Sequences
189. 唤醒 Sequences
190. GPT 唤醒 Sequences
191. ICU 唤醒 Sequences
192. CAN 唤醒 Sequences
193. LIN 唤醒 Sequences
194. FlexRay 唤醒 Sequences
195. Ethernet 唤醒 Sequence
196. 配置规范
197. Common Containers and 配置 parameters
198. EcuM
199. EcuMGeneral
200. EcuMConfiguration
201. EcuMCommonConfiguration
202. EcuMDefaultShutdownTarget
203. EcuMDriverInitListOne
204. EcuMDriverInitListZero
205. EcuMDriverRestartList
206. EcuMDriverInitItem
207. EcuMSleepMode
208. EcuMWakeupSource
209. EcuM-Flex Containers and 配置 parameters
210. EcuMFlexGeneral
211. EcuMFlexConfiguration
212. EcuMDriverInitListBswM
213. EcuMGoDownAllowedUsers
214. EcuMResetMode
215. EcuMSetClockAllowedUsers
216. 发布信息
217. 附录
218. 不适用需求
219. Change history of AUTOSAR traceable items
220. Traceable item history of this document according to AUTOSAR Release R21-11
221. Added 规范 Items in R21-11
222. Changed 规范 Items in R21-11
223. Deleted 规范 Items in R21-11
224. Traceable item history of this document according to AUTOSAR Release R22-11
225. Added 规范 Items in R22-11
226. Changed 规范 Items in R22-11
227. Deleted 规范 Items in R22-11
228. Traceable item history of this document according to AUTOSAR Release R23-11
229. Added 规范 Items in R23-11
230. Changed 规范 Items in R23-11
231. Deleted 规范 Items in R23-11
232. Traceable item history of this document according to AUTOSAR Release R24-11
233. Added 规范 Items in R24-11
234. Changed 规范 Items in R24-11
235. Deleted 规范 Items in R24-11
236. Traceable item history of this document according to AUTOSAR Release R25-11
237. Added 规范 Items in R25-11
238. Changed 规范 Items in R25-11
239. Deleted 规范 Items in R25-11
240. Traceable item history of this document according to AUTOSAR Release R26-11
241. Added 规范 Items in R26-11
242. Changed 规范 Items in R26-11
243. Deleted 规范 Items in R26-11
