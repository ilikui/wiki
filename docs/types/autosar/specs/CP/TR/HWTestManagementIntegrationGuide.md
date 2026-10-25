# Specification and Integration of Hardware Test Management at start up and shutdown (`HWTestManagementIntegrationGuide`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 804 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_HWTestManagementIntegrationGuide_804\AUTOSAR_CP_TR_HWTestManagementIntegrationGuide.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_HWTestManagementIntegrationGuide_804\AUTOSAR_CP_TR_HWTestManagementIntegrationGuide.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_HWTestManagementIntegrationGuide_804\zzgen\CP_TR_HWTestManagementIntegrationGuide.complete.txt`

## 文档简介

This document gives a brief description about the Hardware test management concept integration in standard AUTOSAR software platform.

It shall serve as a user guide for those who wants to implement the hardware test management start up and shutdown module as an AUTOSAR BSW module following the AUTOSAR methods and process.

The requirements of HTMSS module itself are described in HTMSS RS and SWS documents.

The contents of this document mainly describes the below aspects:

* Description of main feature in integrating hardware specific tests in AUTOSAR based ECU's
* The impact in AUTOSAR architecture and solution
* Definition of requirements of the impacted modules in AUTOSAR in order to integrate the HTMSS within the std. AUTOSAR software sequence and its corresponding behaviour in the ECU software

## 章节详细内容

### 1. 范围 of this document
*原文标题：Scope of this document*

This document gives a brief description about the Hardware test management concept integration in standard AUTOSAR software platform.

It shall serve as a user guide for those who wants to implement the hardware test management start up and shutdown module as an AUTOSAR BSW module following the AUTOSAR methods and process.

The requirements of HTMSS module itself are described in HTMSS RS and SWS documents.

The contents of this document mainly describes the below aspects:

* Description of main feature in integrating hardware specific tests in AUTOSAR based ECU's
* The impact in AUTOSAR architecture and solution
* Definition of requirements of the impacted modules in AUTOSAR in order to integrate the HTMSS within the std. AUTOSAR software sequence and its corresponding behaviour in the ECU software

### 2. 限制
*原文标题：Limitations*

None

### 3. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

The glossary below includes acronyms and abbreviations that are only relevant within this specification. A general list of acronyms and abbreviations is available in .

| Abbreviation / Acronym: | Description: |
|---|---|
| HTMSS | Hardware Tests Management Start up and Shutdown |
| DEM | Diagnostic Event Manager |
| ECU | Electronic Control Unit |
| BIST | Built-In Self Tests |
| CDD | Complex Device Driver |
| MSTP | Microcontroller Specific Test Package |

### 4. 相关文档
*原文标题：Related Documentation*

Additional AUTOSAR general specifications shall be considered while implementing HTMSS and associated extension requirements in impacted modules for its compatibilities in AUTOSAR software platform.

### 5. Objective

Each ECU is designed to provide predefined functionality in the context of a given system architecture. Then it's of great importance that this ECU operates without failures, which in turn can be avoided or detected before they appear, by simple monitoring of expected faults. One strategy to monitor operability of ECU is to execute tests that check given logic and conditions, and keep the results for further analysis.

The HTMSS concept depicts the need to address results from such tests on the ECU, and to provide their status on request.

That set of testing and monitoring activities shall provide the required diagnostic coverage, on potential faults, in order to satisfy the ISO26262 part 5  chapter 8 requirements for hardware architecture metrics.

The goal of tests and monitoring facility is to guarantee the fault detection is performed within the predefined time interval (Figure ). After the fault is detected, the responsible software component is informed. This software component shall take the necessary actions; apply a counter-fault reaction in order to maintain the safe state - Figure .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Goal

During the development for AUTOSAR based systems, a technical approach for integrating the semiconductor-manufacturer specific tests in standard AUTOSAR shall be considered.

The goal is to standardize the accessible interfaces with a microcontroller specific test package (which could be a non-AUTOSAR software module) and to integrate within the AUTOSAR system, which configures the tests, trigger tests execution and collect the test results. In consequence, this concept introduces a BSW module called HTMSS to achieve its functionalities.

### 7. Motivation

The motivation of HTMSS concept is to support awareness of the system that given functionality is trusted. E.g. resources are available, under operational conditions and no faults were detected. Even if certain faults are detected, still the system may be capable to perform certain activities with trust of their results. The determinism of how the system shall react on these faults has to be implemented based on system analysis and recommendations. The HTMSS concept shall provide support to achieve this awareness. Collecting results from a number of tests can provide facts on conditions and aspects of the resources in the system.

The concept shall meet the following requirements:

* It shall be possible to run tests before Autosar.
* It shall be possible to run tests at Autosar start up and shutdown, and to propagate their results.
* Test results shall be propagated for later analysis

### 8. Use Case

Diagnostic of potential faults, in the context of a safety critical system, is essential for functional safety goal achievement. It requires integration of tests, their execution and results propagation in parallel to the intended functionality. This implies the necessity to introduce a new component in system service layer, a basic software module called Hardware Test Manager (HTMSS). It implements the tests and monitoring orchestration, and propagates results to stakeholder software components - Figure .

The hardware tests shall be executed in harmony with the overall system behaviour. They shall not influence the intended functionality negatively. This is the reason a precise selection of the points they need to be executed should be done. Usually the tests are separate in two basic groups:

* Non destructive test - after execution of such test, the item can be transferred back to its previous state (before execution of the test) without a necessity of complete item or system reinitialization.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 约束与假设
*原文标题：Constraints and assumptions*

HTMSS goal is to provide necessary environment and infrastructure for collecting and reporting operational status of particular hardware module or periphery. Operational status is result of tests evaluation on these hardware modules and periphery. Basically, there are two types of tests executed in these phases, in respect to their impact on the system/microcontroller - destructive and non-destructive. The concept requires that the used microcontroller has the capability to maintain tests results integrity in a dedicated memory address/register, during the execution of destructive tests. The tests results are accessible for HTMSS. In case of severe failure (core or RAM/ROM failure) of hardware module, detected with, MSTP may take a decision not to continue with further software execution. In that case, the system must go in a safe state. Continuous reset is considered as a safe state. MSTP is responsible for maintaining the safe state. MSTP design specification and implementation are provided by the microcontroller supplier.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. HTMSS AUTOSAR 集成 approach
*原文标题：HTMSS AUTOSAR integration approach*

The hardware test management start up & shutdown proposes the integration of Microcontroller Specific Test Package (MSTP) in the AUTOSAR software environment as follows. The interaction between the standard AUTOSAR modules and MSTP shall be managed by introducing a new module called HTMSS in the BSW service layer.The basic functionalities of HTMSS are:

* Initialization of HTMSS module (including the MSTP module, if needed)
* Interface to configure MSTP tests based on HTMSS module configuration
* Interface for starting the MSTP tests execution
* Collect and provide the MSTP tests results to the required modules and application SWC's for evaluating the results and take relevant decisions.

To fulfill the functional integration certain AUTOSAR std. modules needs to be extended especially with ECU State manager UP phase and DOWN phase.

Below sections will describe the requirements that need to be considered in the AUTOSAR development process to achieve the functionalities proposed for HTMSS integration.

### 11. HTMSS Feature 描述
*原文标题：HTMSS Feature Description*

This section describes the main feature of hardware test management start up and shutdown, integration in AUTOSAR

  AUTOSAR shall provide a standardized safety mechanism to integrate microcontroller specific hardware test

| Description: | AUTOSAR shall provide a mechanism for collecting the microcontroller specific tests executed during start up and shutdown phases, evaluate the test status and provide it to the stakeholder SW-C. |
|---|---|
| Rationale: | A failure in the hardware test can lead to a safe state. |
| Use Case: | e.g. Critical hardware resource test determines the health of the MCU. |

### 12. AUTOSAR 架构 solution
*原文标题：AUTOSAR Architecture solution*

The integration of hardware test management for startup and shutdown requires functional extension of several BSW modules, as well as introduction of a new module "HTMSS" within the BSW layer.

The new module HTMSS shall fulfill the following the functional requirements: it shall interact with the Microcontroller Specific Test Package (here in forth called as MSTP), collect MSTP test results and provide the results to the relevant BSW modules and application SWCs.

The interfaces between HTMSS and MSTP shall be vendor-specific and can be handled via MSTP wrapper implemented within the AUTOSAR development process.

### 13. 集成需求 in AUTOSAR SW 架构
*原文标题：Integration requirements in AUTOSAR SW architecture*

This section describes the fundamental requirements that need to be implemented in the affected standard AUTOSAR modules, in order to integrate the HTMSS module and the corresponding Microcontroller Specific Test Package in the AUTOSAR architecture.

The following AUTOSAR modules are affected in this context:

* ECU State Manager  - Extension of EcuM UP and DOWN phase
* BSW Mode Manager  - Extension of shutdown target
* MCU driver  - Extension of reset reason

### 14. ECU 状态管理器
*原文标题：ECU state manager*

The EcuM modules needs to be extended as follows to incorporate HTMSS in the AUTOSAR software environment:

The extension is needed to fulfill below proposed functional integration approach

* The EcuM START UP phase shall prepare the HTMSS & MSTP module and perform the start up test execution.
* The ECUM DOWN phase shall integrate the HTMSS shutdown tests within the shutdown target sequence flow triggered from BswM.

The detailed requirements for EcuM are described in the below sections.

### 15. 通用需求
*原文标题：General requirements*

The `EcuM_ShutdownTargetType` shall be extended with `ECUM_SHUTDOWN_HWTEST_RESET` and `ECUM_SHUTDOWN_HWTEST_OFF` to handle the reset caused by shutdown test execution.

| Name | EcuM_ShutdownTargetType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | ECUM_SHUTDOWN_TARGET_SLEEP | 0x0 | - |
| ^ | ECUM_SHUTDOWN_TARGET_RESET | 0x1 | - |
| ^ | ECUM_SHUTDOWN_TARGET_OFF | 0x2 | - |
| ^ | ECUM_SHUTDOWN_HWTEST_RESET | 0x3 | - |
| ^ | ECUM_SHUTDOWN_HWTEST_OFF | 0x4 | - |
| Description | - | < | < |
| Variation | - | < | < |
| Available via | Rte_EcuM_Type.h | < | < |

### 16. During EcuM START UP PHASE：
*原文标题：During EcuM START UP PHASE:*

In the Init block 1, EcuM shall call `HTMSS_Init` to initialize the HTMSS module. (Please refer to  Section 9.1.1)

 The ECU manager module shall call `HTMSS_StartTest` to trigger the MSTP start up test execution based on return value of `Mcu_GetResetReason` API. (Please refer to  Section 9.1.2)

 The ECU manager module shall call `HTMSS_GetTestStatus` to collect the MSTP start up test results or shutdown test results based on return value of `Mcu_GetResetReason` API. (Please refer to  Section 9.1.2 and 9.1.5)

 The ECU manager module shall call `HTMSS_StartupTestErrorHook` in case the function `HTMSS_GetTestStatus` returns `HTMSS_STATUS_NOK`. (Please refer to  Section 9.1.2)

### 17. During EcuM 关机 PHASE：
*原文标题：During EcuM SHUTDOWN PHASE:*

The ECU manager module shall call the `HTMSS_StartTest` service function to trigger the MSTP shutdown test execution based on `EcuM_ShutdownTarget`. (Please refer to  Section 9.1.3)

 The ECU manager module shall call `HTMSS_GetTestStatus` based on the `Mcu_ResetType`. (Please refer to  Section 9.1.4 and 9.1.5)

Hint: Normally shutdown test execution causes a hardware reset. After this reset and in the `EcuM_Init` the `Mcu_GetResetReason` will be called by EcuM. If the reset reason is `MCU_HWTEST_RESET` then EcuM shall call `HTMSS_GetTestStatus` to collect the shutdown test results.

 The ECU manager module shall call `HTMSS_ShutdownTestErrorHook` in case the function `HTMSS_GetTestStatus` returns `HTMSS_STATUS_NOK`. (Please refer to  Section 9.1.5)

### 18. 示例 sequence diagrams for HTMSS 集成 in ECUM：
*原文标题：Example sequence diagrams for HTMSS integration in ECUM:*

The below sequence diagrams shall be referred to integrate HTMSS in EcuM UP and DOWN phase.

 Please refer to  Chapter 9.1.1 for HTMSS init function integration in EcuM.

 Please refer to  Chapter 9.1.2 for HTMSS start up test integration in EcuM.

 Please refer to  Chapter 9.1.3 for HTMSS shutdown test execution integration in EcuM.

 Please refer to  Chapter 9.1.4 and 9.1.5 to collect the last shutdown test results for application usage.

 Please refer to  Chapter 9.1.6 to integrate the shutdown tests execution in the EcuM shutdown phase.

### 19. BSW 模式管理器
*原文标题：BSW mode manager*

The BswMEcuMSelectShutdownTarget shall be extended with `HWTEST_OFF` and `HWTES_RESET` to handle the reset caused by shutdown test execution.

 Definition of EcucEnumerationParamDef BswMEcuMShutdownTarget

| Parameter Name | BswMEcuMShutdownTarget | < | < |
|---|---|---|---|
| Parent Container | BswMEcuMSelectShutdownTarget | < | < |
| Description | This parameter contains the shutdown target that the BswM selects at the EcuM. | < | < |
| Multiplicity | 1 | < | < |
| Type | EcucEnumerationParamDef | < | < |
| Range | BSWM_ECUM_SHUTDOWN_TARGET_OFF | - | < |
| ^ | BSWM_ECUM_SHUTDOWN_TARGET_RESET | In case the configuration parameter BswMEcuMShutdownTarget is set to BSWM_ECUM_SHUTDOWN_TARGET_RESET the configuration parameter BswMEcuMResetModeRef shall exist and contain a valid reference to a EcuM reset mode. | < |
| ^ | BSWM_ECUM_SHUTDOWN_TARGET_SLEEP | In case the configuration parameter BswMEcuMShutdownTarget is set to BSWM_ECUM_SHUTDOWN_TARGET_SLEEP the configuration parameter BswMEcuMSleepModeRef shall exist and contain a valid reference to a EcuM sleep mode. |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. MCU 驱动
*原文标题：MCU driver*

The `Mcu_ResetType` shall be extended with `MCU_HWTEST_RESET` to handle the reset caused by shutdown test execution.

| Name | Mcu_ResetType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | MCU_POWER_ON_RESET | 0x00 | Power On Reset (default) |
| ^ | MCU_WATCHDOG_RESET | 0x01 | Internal Watchdog Timer Reset |
| ^ | MCU_SW_RESET | 0x02 | Software Reset |
| ^ | MCU_HWTEST_RESET |  | Reset caused by shutdown tests |
| ^ | MCU_RESET_UNDEFINED | 0x03 | Reset is undefined |
| Description | This is the type of the reset enumerator containing the subset of reset types. It is not required that all reset types are supported by hardware. | < | < |
| Available via | Mcu.h | < | < |

### 21. Impact on performance and 软件行为 in AUTOSAR
*原文标题：Impact on performance and software behaviour in AUTOSAR*

The integration of HTMSS in AUTOSAR has an impact on the ECUM Start-up and Shutdown behaviour in ECUs. The consequence of this would be

* Additional time required to complete the HTMSS functionalities during the respective EcuM phases (e.g. longer EcuM initialization phase, longer EcuM shutdown phase)
* The ECU startup sequence may be aborted in case critical faults (i.e. when MSTP test status is judged as a critical fault) are detected.

Thus, the integrator is free to decide on the HTMSS integration needs in AUTOSAR, which is proposed as an optional feature that complies with the AUTOSAR software environment.
