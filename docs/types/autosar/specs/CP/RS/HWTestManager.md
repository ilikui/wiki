# Requirements on Hardware Test Manager on start up and shutdown (`HWTestManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 760 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_HWTestManager_760\AUTOSAR_CP_RS_HWTestManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_HWTestManager_760\AUTOSAR_CP_RS_HWTestManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_HWTestManager_760\zzgen\CP_RS_HWTestManager.complete.txt`

## 文档简介

This document lists the requirements applicable to the design of the HTMSS module of AUTOSAR.

## 章节详细内容

### 1. 范围 of Document
*原文标题：Scope of Document*

This document lists the requirements applicable to the design of the HTMSS module of AUTOSAR.

### 2. Conventions to be used

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as follows.

Note that the requirement level of the document in which they are used modifies the force of these words.

* MUST: This word, or the adjective "LEGALLY REQUIRED", means that the definition is an absolute requirement of the specification due to legal issues.
* MUST NOT: This phrase, or the phrase "MUST NOT", means that the definition is an absolute prohibition of the specification due to legal issues.
* SHALL: This phrase, or the adjective "REQUIRED", means that the definition is an absolute requirement of the specification.
* SHALL NOT: This phrase means that the definition is an absolute prohibition of the specification.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to CP RS HWTestManager that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description: |
|---|---|
| ADC | Analog to Digital converter |
| BIST | Built In Self Test |
| BSW | Basic Software |
| ECU | Electronic Control Unit |
| ECUM | Electronic Control Unit Manager |
| HTMSS | Hardware Test Management startup shutdown |
| MCU | Micro Controller Unit |
| MSTP | Microcontroller Specific Test Package |

### 4. 需求规范
*原文标题：Requirements Specification*

This chapter describes all requirements driving the work to define the CP RS HWTestManager.

### 5. 功能概述
*原文标题：Functional Overview*

The purpose of this module is to provide an infrastructure for integrating/transforming the microcontroller manufacturer specific start up and shutdown tests (e.g. BIST) test results/status within the AUTOSAR standard software platform.

The basic functionalities of this module includes collecting the test results/status from the MSTP, configure MSTP tests, start tests execution, provide the MSTP test status to EcuM module and application SWC to evaluate the test results for the system behavior.

The HTMSS module integrates on the level of the AUTOSAR BSW service layer. Below figure shows the functional integration of the HTMSS module in AUTOSAR software platform.

The HTMSS module pre-integration requirements are:

* It shall be possible to run Microcontroller Specific Test Package (MSTP) startup and shutdown tests on the device under development
* The test results/status are available to the HTMSS module access
* It shall be possible to configure the MSTP start up and shutdown tests via HTMSS module

### 6. 功能性需求
*原文标题：Functional Requirements*

### 7. 配置需求 of HTMSS and MSTP tests
*原文标题：Configuration requirements of HTMSS and MSTP tests*

The HTMSS shall allow configuration of start up and shutdown tests
⌈
| Description: | It shall be possible to configure the microcontroller specific start up and shutdown tests |
|---|---|
| Rationale: | It is necessary to be able to select and configure the tests based on HTMSS integrator requirements |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | The HTMSS configuration developer maps the microcontroller specific tests in the module configuration set |

Supporting Material:
⌋

 The HTMSS shall allow the configuration of tests at individual hardware resource level
⌈
| Description: | It shall be possible to test the individual hardware resources (e.g. selected via module / channel ID) on the given hardware |
|---|---|
| Rationale: | The given hardware may contain two hardware unit for the resource considered under test (e.g. 2 separate ADC hardware units). In this example, it may be possible to test/obtain result for each ADC unit individually. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Main functionalities of HTMSS

The HTMSS shall provide a service to collect the MSTP tests results
⌈
| Description: | The HTMSS shall collect and provide the test results of all executed tests |
|---|---|
| Rationale: | The MSTP test results shall be accessible |

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | Having the tests results details, shall convey the fault status of the microcontroller. |

Supporting Material:
⌋

 The HTMSS shall provide a mechanism to share the test results with the application layer software
⌈
| Description: | The current MSTP test results shall be provided to the application layer software during RUN time |
|---|---|
| Rationale: | The applicative software evaluates and react on critical errors to ensure the safe state (e.g. change from normal run time to a degradation mode) |

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | The application software shall maintain the safe state based on the test results. E.g. a critical error judged according to the safety goals of the system may result in going to a safe state |

Supporting Material:
⌋

### 9. ECUM 集成 functionalities of HTMSS
*原文标题：ECUM integration functionalities of HTMSS*

Below HTMSS module functions shall be integrated in the ECUM module.

 The HTMSS shall provide a service to configure/Initialise the MSTP tests during ECUM start up phase
⌈
| Description: | It shall be possible to configure the start up and shutdown tests during the ECUM start up phase via HTMSS interface |
|---|---|
| Rationale: | Initialization is required to pre-initialize the variables of HTMSS and the MSTP tests |

Applies To:
| Dependencies: | , |
|---|---|
| Use Case: | During MCU start up the hardware is initialised to execute MSTP tests |

Supporting Material:
⌋

 The HTMSS shall provide a service to trigger the tests execution
⌈
| Description: | It shall be possible to trigger the start up tests during the ECUM start up phase and shutdown tests during ECUM shut down phase via HTMSS provided service function |
|---|---|
| Rationale: | The start up tests shall be performed during ECUM start up phase and the shut down tests shall be performed during the ECUM shutdown phase |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | During ECU start up and shutdown phase the configured MSTP tests are triggered for its execution |

Supporting Material:
⌋

### 10. Fault Operation

HTMSS shall provide callout options to handle the test failure conditions
⌈
| Description: | On test failure (critical error conditions) it shall be possible to initiate error hooks as callout functions. |
|---|---|
| Rationale: | e.g. React to test failure to initiate ECU reset, safe state etc. |

Applies To:
| Dependencies: |  |
|---|---|
| Use Case: | The ECU software need to react to the test failures by preparing the system state (e.g. reset, halt, safe state) |

Supporting Material:
⌋

### 11. References

### 12. Deliverables of AUTOSAR

### 13. Related standards and norms

The ISO26262 part 5 chapter 8 requirements for hardware architecture metrics.

### 14. 附录
*原文标题：Appendix*

### 15. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 16. Traceable item history of this document according to AUTOSAR Release R25-11

### 17. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

none

### 18. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

### 19. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none
