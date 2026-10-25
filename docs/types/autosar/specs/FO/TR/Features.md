# Technical Report on AUTOSAR Features (`Features`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 1104 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TR_Features_1104\AUTOSAR_FO_TR_Features.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TR_Features_1104\AUTOSAR_FO_TR_Features.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TR_Features_1104\zzgen\FO_TR_Features.complete.txt`

## 文档简介

This technical report provides information about the Features of the AUTOSAR Standard. An AUTOSAR Feature is a characteristic of the AUTOSAR Standard to satisfy a user objective. This document represents infomation of the AUTOSAR Features and its Branches of each Feature, presented in a graph (AUTOSAR Feature Graph or in short: Feature Graph) similar to a tree. The Feature Graph release in R24-11 is preliminary and will be developed further in the upcoming release

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This technical report provides information about the Features of the AUTOSAR Standard. An AUTOSAR Feature is a characteristic of the AUTOSAR Standard to satisfy a user objective. This document represents infomation of the AUTOSAR Features and its Branches of each Feature, presented in a graph (AUTOSAR Feature Graph or in short: Feature Graph) similar to a tree. The Feature Graph release in R24-11 is preliminary and will be developed further in the upcoming release

### 2. 目标
*原文标题：Objectives*

As a goal, the sum of all AUTOSAR Features shall cover the whole AUTOSAR Standard. That means vice versa, everything in the AUTOSAR Standard shall be covered by an AUTOSAR Feature.

### 3. 范围
*原文标题：Scope*

The AUTOSAR Features cover a wide range of functionalities, from hardware abstraction and communication to safety, security, and system diagnostics, ensuring that automotive software is interoperable, reliable and future-proof.

### 4. Motivation (UseCase)

In terms of use cases this means for example:

* As a user of the AUTOSAR Standard, I want to select a consistent subset of AUTOSAR documents based on short and expressive terms.
* As an AUTOSAR developer (doc-owner), I want to analyze dependencies to other documents, and I also want to describe dependencies of my own document to other documents.
* As a product manager, I want to discuss and plan implementations based on standardized Features.
* As a concept owner, I want to identify the integrated Features and the respective documents in the Standard.

Example for Feature Branch:

Communication >Network Technology >CAN >(CAN 2.0 , CAN FD, CAN XL)

as a recommended pattern: If the user decide to select CAN, they automatically would get the Standard documents for CAN 2.0 and CAN FD. Optionally they can select the CAN XL which automatically selects Ethernet. Considering the resource consumption of the CAN XL-Feature and resulting additional costs of a product it makes sense to decide, if the CAN XL-Feature is required or not. Hardware extensions must be foreseen as well. It does not make sense to select that Feature for a single ECU.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. 定义 of acronyms and abbreviations
*原文标题：Definition of acronyms and abbreviations*

### 6. 缩略语
*原文标题：Acronyms and abbreviations*

The table below contains all acronyms, abbreviations or initialisms that are component-specific and not available in the AUTOSAR glossary .

| Abbreviation | Description |
|---|---|

A |
| ADAS | Advanced Driving Assistance Systems |
|---|---|
| AIF | Application InterFace |

B |
| BASE-T | Ethernet standard for local area networks with twisted pair cabling |
|---|---|

C |
| CAN FD | Controller Area Network Flexible Data-Rate |
|---|---|
| CAN NM | Controller Area Network Network Management |
| CAN TP | Controller Area Network Transport Protocol |
| CAN XL | Controller Area Network longer data frames and higher data rates |
| CXPI | Clock Extension Peripheral Interface |

E |
| ETH | Ethernet |
|---|---|

G |
| GPIO | General Purpose Input/Output |
|---|---|

H |
| HW Support IO | Hardware Support Input Output |
|---|---|

I |
| I2C | Inter-Integrated Circuit |
|---|---|
| IDS | Intrusion Detection System |
| IOC | Inter-Operating System Communication |
| IP v4 | Internet Protocol version 4 |
| IP v6 | Internet Protocol version 6 |
| IPDU | Interaction Layer Protocol Data Unit |
| IPSec | Internet Protocol Security |

M |
| MACsec | Media Access Control Security |
|---|---|

N |
| NDP | Neighbor Discovery Protocol |
|---|---|

O |
| OBDII | On-Board Diagnostics II |
|---|---|

S |
| SCREIAM | Service Communication Registration, Interaction, and Application Management |
|---|---|
| SecOC | Secure Onboa |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 相关文档
*原文标题：Related Documentation*

### 8. Features

This chapter descibes the AUTOSAR Features and its Branches, presented in a Feature Graph. The complete Feature Graph is published separately in the Feature Model documentation . The Feature Graph complies to the AUTOSAR Feature Model Exchange Format .

To read the figures in this document properly, please see the legend below:

The following chapters present the AUTOSAR Features level by level, starting with root level 1. The Features are ordered alphabetically. Each Feature begins with its name, a graphical representation of its children, followed by a table of the Feature's attributes.

### 9. Level 1

### 10. [FO_TR_FEAT_00064

`Basic_Functionality`]

| Short Name: | FO_TR_FEAT_00064 |
|---|---|
| Long Name: | Basic_Functionality |
| Obligation: | Mandatory |
| Description: | The Basic Functionality represents the essential services and capabilities as a foundation for developing and operating automotive software applications. |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Mathematical_Primitives |

*  Scheduling
*  `Multi_Core`
*  `Time_Service`
*  `Resource_Partitioning`

### 11. [FO_TR_FEAT_00122

Communication]

| Short Name: | FO_TR_FEAT_00122 |
|---|---|
| Long Name: | Communication |
| Obligation: | Optional |
| Description: | This Feature describes mechanisms and protocols that enable data exchange between different software components, Electronic Control Units (ECUs), and external systems within an automotive environment. |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Service_Oriented_Communication |

*  `Intra_Machine_Communication`
*  `Network_Technology`
*  `Network_Management`
*  `Signalbased_Communication`
*  `Communication_State_Control`
*  `Container_PDU`
*  `Gateway_Support`
*  E2E
*  SecOC
*  `Time_Synchronization`
*  V2X
*  `Automotive_API`
*  `Charging_Protocol`

### 12. [FO_TR_FEAT_00111

Development]

| Short Name: | FO_TR_FEAT_00111 |
|---|---|
| Long Name: | Development |
| Obligation: | Optional |
| Description: | This Feature facilitates and enhances the software development process for automotive systems. |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Logging |

*  `Tracing_and_Profiling`
*  Debugging
*  `Measurement_and_Calibration`
*  `Bus_Mirroring`
*  `ECU_Data_Collection`

### 13. [FO_TR_FEAT_00086

Diagnostic]

| Short Name: | FO_TR_FEAT_00086 |
|---|---|
| Long Name: | Diagnostic |
| Obligation: | Optional |
| Description: | This Feature ensures that diagnostic information is consistently represented,that it allows for effective maintenance and troubleshooting, and that it complies with legislative requirements. |
| Applies to: | AP, CP |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Diagnostic_Communication |

*  `Diagnostic_Error_Memory`
*  `Legislative_Diagnostics`

### 14. [FO_TR_FEAT_00071

`Execution_Environment`]

| Short Name: | FO_TR_FEAT_00071 |
|---|---|
| Long Name: | Execution_Environment |
| Obligation: | Optional |
| Description: | The Execution Environment describes the underlying infrastructure and support mechanisms that enable the execution of automotive software components on Electronic Control Units (ECUs). |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Runtime_Management |

*  `Mode_and_State_Management`
*  `Software_Clustering`

### 15. [FO_TR_FEAT_00236

`Hardware_Support`]

| Short Name: | FO_TR_FEAT_00236 |
|---|---|
| Long Name: | Hardware_Support |
| Obligation: | Optional |
| Description: | The Hardware Support in AUTOSAR refers to the Feature that facilitates interaction between the software applications and the vehicle's hardware components. |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Safe_Hardware_Accelerators |

*  `MCU_Abstraction`
*  `ECU_Abstraction`

### 16. [FO_TR_FEAT_00043

Safety]

| Short Name: | FO_TR_FEAT_00043 |
|---|---|
| Long Name: | Safety |
| Obligation: | Optional |
| Description: | Safety according to ISO26262. The underlying structure follows ISO26262-6:2018. |
| Applies to: | FO |
| Relations: | Rollback |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Safe_Communication |

*  `Hardware_Test_Management`
*  `Safe_Execution`
*  `Safe_Memory`

### 17. [FO_TR_FEAT_00207

Security]

| Short Name: | FO_TR_FEAT_00207 |
|---|---|
| Long Name: | Security |
| Obligation: | Optional |
| Description: | The Security Feature encompasses various mechanisms and protocols designed to protect the ECU's sensible resources (e.g. cryptographic keys), the vehicle's network and its communication from unauthorized access. |
| Relations: | Package_Authentication |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Secure_Communication |

*  `Intrusion_Detection_System`
*  Cryptography
*  `Certificate_Management`
*  `Key_Management`
*  `Identity_and_Access_Management_IAM`
*  Firewall
*  `Trusted_Platform`

### 18. [FO_TR_FEAT_00222

`Software_Update`]

| Short Name: | FO_TR_FEAT_00222 |
|---|---|
| Long Name: | Software_Update |
| Obligation: | Optional |
| Description: | The Software Update in AUTOSAR ensures that vehicle software remains up-to-date and functional through a managed process of updates |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Vehicle_Software_Update |

*  `Software_Cluster_Update`
*  `Update_History`
*  Rollback
*  `Package_Authentication`
*  `Update_Status_Reporting`
*  `Suspend_Update`

### 19. [FO_TR_FEAT_00096

`Standardized_Application_Interface`]

| Short Name: | FO_TR_FEAT_00096 |
|---|---|
| Long Name: | Standardized_Application_Interface |
| Obligation: | Optional |
| Description: | This Feature contains definitions for commonly agreed interface definitions to ensure interoperability between applications. |
| Applies to: | AP, CP |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Vehicle_Domain_Interfaces |

*  `AIF_Method`
*  `Physical_Dimensions_And_Units`

### 20. [FO_TR_FEAT_00055

Storage]

| Short Name: | FO_TR_FEAT_00055 |
|---|---|
| Long Name: | Storage |
| Obligation: | Optional |
| Description: | The Feature Storage ensures the reliable and efficient management of data within automotive systems, which allows preservation of critical information even in the event of power loss. |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  NVRAM_Access |

*  Persistency
*  `Remote_Persistency`

### 21. [FO_TR_FEAT_00256

Timing]

| Short Name: | FO_TR_FEAT_00256 |
|---|---|
| Long Name: | Timing |
| Obligation: | Optional |
| Description: | Captures temporal aspects such as durations and coordination relevant to the system's resource-constrained behavior. |
| Applies to: | AP, CP |
| Introduced: | R25-11 |
| Parent Feature: | AUTOSAR_Features |
| Sub Features: | *  Timing_Design |

*  `Timing_Analysis`

### 22. Level 2

### 23. [FO_TR_FEAT_00107

`AIF_Method`]

| Short Name: | FO_TR_FEAT_00107 |
|---|---|
| Long Name: | AIF_Method |
| Obligation: | Optional |
| Description: | This Feature describes a collection of methods for Interfaces between software applications and components within an automotive system. |
| Applies to: | AP, CP |
| Parent Feature: | Standardized_Application_Interface |
| Sub Features: | *  Interface_Naming_Convention |

*  `Application_Software_Design_Patterns`

### 24. [FO_TR_FEAT_00202

`Automotive_API`]

| Short Name: | FO_TR_FEAT_00202 |
|---|---|
| Long Name: | Automotive_API |
| Obligation: | Optional |
| Description: | The Automotive API is an interface that allows data-centric communication with the vehicle. It defines how other systems can access selected vehicle data securely and independently of the in-vehicle representation using a standardized interface across vehicle types and manufacturers. |
| Parent Feature: | Communication |
| Sub Features: | *  VISS |

*  VSS

### 25. [FO_TR_FEAT_00269

`Bus_Mirroring`]

| Short Name: | FO_TR_FEAT_00269 |
|---|---|
| Long Name: | Bus_Mirroring |
| Obligation: | Optional |
| Lifecycle Status: | Valid |
| Description: | This Feature enables forwarding of communication on internal buses towards diagnostic connectors. It is used to "debug" networks by using the Bus_Mirror Feature. |
| Applies to: | CP |
| Introduced: | R25-11 |
| Relations: | Bus_Mirror |
| Parent Feature: | Development |

### 26. [FO_TR_FEAT_00218

`Certificate_Management`]

| Short Name: | FO_TR_FEAT_00218 |
|---|---|
| Long Name: | Certificate_Management |
| Obligation: | Optional |
| Description: | The Certificate Management involves the processes and technologies used to manage digital certificates. |
| Parent Feature: | Security |

### 27. [FO_TR_FEAT_00205

`Charging_Protocol`]

| Short Name: | FO_TR_FEAT_00205 |
|---|---|
| Long Name: | Charging_Protocol |
| Obligation: | Optional |
| Description: | This Feature manages the charging protocol of electric vehicles. |
| Applies to: | CP |
| Parent Feature: | Communication |
| Sub Features: | ISO15118_2 |

### 28. [FO_TR_FEAT_00184

`Communication_State_Control`]

| Short Name: | FO_TR_FEAT_00184 |
|---|---|
| Long Name: | Communication_State_Control |
| Obligation: | Optional |
| Description: | The Communication State Control refers to the mechanisms and protocols used to manage the communication states of the network and individual communication channels or protocols. |
| Parent Feature: | Communication |

### 29. [FO_TR_FEAT_00274

`Container_PDU`]

| Short Name: | FO_TR_FEAT_00274 |
|---|---|
| Long Name: | Container_PDU |
| Obligation: | Optional |
| Description: | The Container PDU (Protocol Data Unit) refers to a data structure used to encapsulate multiple individual PDUs into a single container for transmission. |
| Parent Feature: | Communication |

### 30. [FO_TR_FEAT_00210

Cryptography]

| Short Name: | FO_TR_FEAT_00210 |
|---|---|
| Long Name: | Cryptography |
| Obligation: | Optional |
| Description: | The Cryptography in AUTOSAR refers to the techniques and methods used to secure data communication and storage. |
| Parent Feature: | Security |
| Sub Features: | *  Hashcodes |

*  `Dig_Signatures`
*  `Encryption_and_Decryption`
*  `Message_Auth_Codes`
*  `Random_Number_Generation`

### 31. [FO_TR_FEAT_00117

Debugging]

| Short Name: | FO_TR_FEAT_00117 |
|---|---|
| Long Name: | Debugging |
| Obligation: | Optional |
| Description: | The Debugging in the AUTOSAR context refers to the process of identifying, analyzing, and resolving defects or issues within automotive software systems. |
| Parent Feature: | Development |
| Sub Features: | ARTI_Debugging |

### 32. [FO_TR_FEAT_00087

`Diagnostic_Communication`]

| Short Name: | FO_TR_FEAT_00087 |
|---|---|
| Long Name: | Diagnostic_Communication |
| Obligation: | Optional |
| Description: | The Diagnostic_Communication describes the communication between Diagnostics clients and servers according ISO-14229. |
| Applies to: | CP, AP |
| Parent Feature: | Diagnostic |
| Sub Features: | *  UDS |

*  SOVD
*  `J1939_Diagnostics`

### 33. [FO_TR_FEAT_00091

`Diagnostic_Error_Memory`]

| Short Name: | FO_TR_FEAT_00091 |
|---|---|
| Long Name: | Diagnostic_Error_Memory |
| Obligation: | Optional |
| Description: | This Feature ensures that fault information is recorded accurately and that it can be accessed for diagnostics and repairs by managing the storage and retrieval of Diagnostic Trouble Codes (DTCs) and error information within the vehicle's ECUs. |
| Applies to: | CP, AP |
| Parent Feature: | Diagnostic |

### 34. [FO_TR_FEAT_00193

E2E]

| Short Name: | FO_TR_FEAT_00193 |
|---|---|
| Long Name: | E2E |
| Obligation: | Optional |
| Description: | The E2E (End-to-End) Protection is a set of mechanisms and protocols designed to detect communication faults in intra vehicle comunication and to return the results of the checks. |
| Restrictions: | *  Signalbased_Communication |

*  `SOME_IP`
*  DDS
| Relations: | CRC_Support |
|---|---|
| Parent Feature: | Communication |

### 35. [FO_TR_FEAT_00275

`ECU_Abstraction`]

| Short Name: | FO_TR_FEAT_00275 |
|---|---|
| Long Name: | ECU_Abstraction |
| Obligation: | Optional |
| Description: | ECU Abstraction abstracts the hardware of an ECU. It abstracts the ECU hardware layout , MCU and connected devices to the MCU. |
| Applies to: | CP |
| Parent Feature: | Hardware_Support |

### 36. [FO_TR_FEAT_00263

`ECU_Data_Collection`]

| Short Name: | FO_TR_FEAT_00263 |
|---|---|
| Long Name: | ECU_Data_Collection |
| Obligation: | Optional |
| Description: | The feature allows capturing and recording of ECU internal data during operation. |
| Applies to: | CP |
| Introduced: | R25-11 |
| Parent Feature: | Development |

### 37. [FO_TR_FEAT_00221

Firewall]

| Short Name: | FO_TR_FEAT_00221 |
|---|---|
| Long Name: | Firewall |
| Obligation: | Optional |
| Description: | The Firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. |
| Parent Feature: | Security |

### 38. [FO_TR_FEAT_00187

`Gateway_Support`]

| Short Name: | FO_TR_FEAT_00187 |
|---|---|
| Long Name: | Gateway_Support |
| Obligation: | Optional |
| Description: | The Gateway Support describes the functionalities to facilitate routing and transfer of data between different communication networks or protocols within a vehicle. |
| Parent Feature: | Communication |
| Sub Features: | *  Signal_Routing |

*  `IPDU_Routing`
*  `Frame_Routing`
*  `Bus_Mirror`
*  Tunneling

### 39. [FO_TR_FEAT_00045

`Hardware_Test_Management`]

| Short Name: | FO_TR_FEAT_00045 |
|---|---|
| Long Name: | Hardware_Test_Management |
| Obligation: | Optional |
| Description: | This Feature represents a built-in test at startup or cyclically. |
| Applies to: | CP, AP |
| Introduced: | R25-11 |
| Parent Feature: | Safety |

### 40. [FO_TR_FEAT_00220

`Identity_and_Access_Management_IAM`]

| Short Name: | FO_TR_FEAT_00220 |
|---|---|
| Long Name: | Identity_and_Access_Management_IAM |
| Obligation: | Optional |
| Description: | The Identity and Access Management (IAM) focuses on identifying and controlling who has access to the vehicle's network and ECU's resources. |
| Parent Feature: | Security |

### 41. [FO_TR_FEAT_00132

`Intra_Machine_Communication`]

| Short Name: | FO_TR_FEAT_00132 |
|---|---|
| Long Name: | Intra_Machine_Communication |
| Obligation: | Optional |
| Description: | This Feature describes the data exchange mechanisms and protocols within a single vehicle's electronic system |
| Parent Feature: | Communication |
| Sub Features: | *  Inter_Runnable_Communication |

*  `Inter_Process_Communication`
*  `Inter_OS_Application_Communication`

### 42. [FO_TR_FEAT_00209

`Intrusion_Detection_System`]

| Short Name: | FO_TR_FEAT_00209 |
|---|---|
| Long Name: | Intrusion_Detection_System |
| Obligation: | Optional |
| Description: | The Intrusion Detection System (IDS) monitors the vehicle's network and ECU's resources for suspicious activities and potential security breaches. |
| Parent Feature: | Security |

### 43. [FO_TR_FEAT_00219

`Key_Management`]

| Short Name: | FO_TR_FEAT_00219 |
|---|---|
| Long Name: | Key_Management |
| Obligation: | Optional |
| Description: | The Key Management encompasses the methods and processes for handling cryptographic keys throughout their lifecycle. |
| Parent Feature: | Security |

### 44. [FO_TR_FEAT_00092

`Legislative_Diagnostics`]

| Short Name: | FO_TR_FEAT_00092 |
|---|---|
| Long Name: | Legislative_Diagnostics |
| Obligation: | Optional |
| Description: | This Feature describes the standardized diagnostic protocols and procedures mandated by regulatory authorities to ensure that vehicles comply with environmental and safety regulations. |
| Applies to: | CP |
| Parent Feature: | Diagnostic |
| Sub Features: | *  OBDII |

*  `OBD_on_UDS`
*  `WWH_OBD`

### 45. [FO_TR_FEAT_00112

Logging]

| Short Name: | FO_TR_FEAT_00112 |
|---|---|
| Long Name: | Logging |
| Obligation: | Optional |
| Description: | This Feature allows capturing and recording of system events and messages during operation. |
| Parent Feature: | Development |
| Sub Features: | *  Log_and_Trace |

*  `Default_Error_Tracer`

### 46. [FO_TR_FEAT_00065

`Mathematical_Primitives`]

| Short Name: | FO_TR_FEAT_00065 |
|---|---|
| Long Name: | Mathematical_Primitives |
| Obligation: | Optional |
| Description: | This feature is basic to perform mathematical computations efficiently and accurately, e.g. libraries. |
| Parent Feature: | Basic_Functionality |
| Sub Features: | CRC_Support |

### 47. [FO_TR_FEAT_00266

`MCU_Abstraction`]

| Short Name: | FO_TR_FEAT_00266 |
|---|---|
| Long Name: | MCU_Abstraction |
| Obligation: | Optional |
| Description: | The MCU Abstraction provides a uniform interface to the microcontroller hardware. It abstracts the internal peripherals of the MCU and offers standardized services for upper software layers. |
| Applies to: | CP |
| Parent Feature: | Hardware_Support |
| Sub Features: | IO_Hardware_Abstraction |

### 48. [FO_TR_FEAT_00120

`Measurement_and_Calibration`]

| Short Name: | FO_TR_FEAT_00120 |
|---|---|
| Long Name: | Measurement_and_Calibration |
| Obligation: | Optional |
| Description: | The Measurement and Calibration in the AUTOSAR context refer to the processes and tools used to gather data from the automotive system (measurement) and adjust parameters to optimize performance (calibration). |
| Parent Feature: | Development |
| Sub Features: | XCP |

### 49. [FO_TR_FEAT_00073

`Mode_and_State_Management`]

| Short Name: | FO_TR_FEAT_00073 |
|---|---|
| Long Name: | Mode_and_State_Management |
| Obligation: | Optional |
| Description: | This Feature describes mechanisms and services that handle the different operational modes and states of the automotive system. |
| Parent Feature: | Execution_Environment |
| Sub Features: | *  Machine_State_Management |

*  `Application_State_Management`
*  `Network_State_Management`
*  `Vehicle_State_Management`
*  `Machine_Sleep_States_Coordination`

### 50. [FO_TR_FEAT_00068

`Multi_Core`]

| Short Name: | FO_TR_FEAT_00068 |
|---|---|
| Long Name: | Multi_Core |
| Obligation: | Optional |
| Description: | The Feature Multi-Core describes the distribution of applications to multiple cores of a micro controller. |
| Applies to: | CP |
| Parent Feature: | Basic_Functionality |

### 51. [FO_TR_FEAT_00179

`Network_Management`]

| Short Name: | FO_TR_FEAT_00179 |
|---|---|
| Long Name: | Network_Management |
| Obligation: | Optional |
| Description: | The Network Management describes mechanisms and protocols used to control, configure, and monitor the state and operation of the network within a vehicle. |
| Parent Feature: | Communication |
| Sub Features: | *  Partial_Networking |

*  VNSM

### 52. [FO_TR_FEAT_00136

`Network_Technology`]

| Short Name: | FO_TR_FEAT_00136 |
|---|---|
| Long Name: | Network_Technology |
| Obligation: | Optional |
| Description: | This Feature represents communication protocols, hardware, and software infrastructure that facilitate data exchange between ECUs in automotive systems. |
| Parent Feature: | Communication |
| Sub Features: | *  Ethernet |

*  LIN
*  FlexRay
*  CAN
*  IP
*  `Deterministic_Communication`
*  I2C
*  SPI

### 53. [FO_TR_FEAT_00056

`NVRAM_Access`]

| Short Name: | FO_TR_FEAT_00056 |
|---|---|
| Long Name: | NVRAM_Access |
| Obligation: | Optional |
| Description: | The NVRAM Access (non-volatile random-access memory) is used to store data which are retained across power cycles. |
| Parent Feature: | Storage |
| Sub Features: | *  Flash |

*  EEPROM

### 54. [FO_TR_FEAT_00233

`Package_Authentication`]

| Short Name: | FO_TR_FEAT_00233 |
|---|---|
| Long Name: | Package_Authentication |
| Obligation: | Optional |
| Description: | The Package Authentication involves verifying the integrity and authenticity of the software update packages before they are applied. |
| Parent Feature: | Software_Update |

### 55. [FO_TR_FEAT_00059

Persistency]

| Short Name: | FO_TR_FEAT_00059 |
|---|---|
| Long Name: | Persistency |
| Obligation: | Optional |
| Description: | This Feature ensures that the system can resume operations seamlessly by retaining necessary information. |
| Relations: | Safe_Storage |
| Parent Feature: | Storage |
| Sub Features: | *  File_Storage |

*  `Key_Value_Storage`
*  `Persistency_Update`
*  `Secure_Storage`

### 56. [FO_TR_FEAT_00110

`Physical_Dimensions_And_Units`]

| Short Name: | FO_TR_FEAT_00110 |
|---|---|
| Long Name: | Physical_Dimensions_And_Units |
| Obligation: | Optional |
| Description: | This Feature defines a collection of standardized definitions of physical dimensions and their units. |
| Applies to: | FO |
| Parent Feature: | Standardized_Application_Interface |

### 57. [FO_TR_FEAT_00260

`Remote_Persistency`]

| Short Name: | FO_TR_FEAT_00260 |
|---|---|
| Long Name: | Remote_Persistency |
| Obligation: | Optional |
| Description: | Remote Persistency provides access to centrally stored data items on one ECU or for a vehicle. Supports different update paths. Access to Remote Persistency is implemented via service interfaces. Therefore, ara::com can be used to read and write data items of the Remote Persistency. IAM protections is expected for the write access. |
| Applies to: | AP |
| Relations: | Remote_IAM |
| Parent Feature: | Storage |

### 58. [FO_TR_FEAT_00251

`Resource_Partitioning`]

| Short Name: | FO_TR_FEAT_00251 |
|---|---|
| Long Name: | Resource_Partitioning |
| Obligation: | Optional |
| Description: | This feature enables the partitioning of system resources such as CPU time and RAM into distinct groups, ensuring that software components are allocated and limited to specific resource sets. By isolating resources, the feature enhances system stability and security, preventing unintended interference or resource contention between different applications. Resource Partitioning also supports safety by containing potential misbehavior, ensuring that critical tasks have the resources they need while maintaining overall system integrity. |
| Relations: | *  Scheduling |

*  Security
| Parent Feature: | Basic_Functionality |
|---|---|
| Sub Features: | Storage_Quota |

### 59. [FO_TR_FEAT_00232

Rollback]

| Short Name: | FO_TR_FEAT_00232 |
|---|---|
| Long Name: | Rollback |
| Obligation: | Optional |
| Description: | The Rollback refers to the ability to revert to a previous version of the software if the latest update fails or causes issues. |
| Parent Feature: | Software_Update |

### 60. [FO_TR_FEAT_00072

`Runtime_Management`]

| Short Name: | FO_TR_FEAT_00072 |
|---|---|
| Long Name: | Runtime_Management |
| Obligation: | Optional |
| Description: | This Feature describes set of services and mechanisms that oversee the execution lifecycle of software components on the ECUs. |
| Parent Feature: | Execution_Environment |

### 61. [FO_TR_FEAT_00044

`Safe_Communication`]

| Short Name: | FO_TR_FEAT_00044 |
|---|---|
| Long Name: | Safe_Communication |
| Obligation: | Optional |
| Description: | The Safe Communication provides elements to protect information exchange and enables detection of communication faults. |
| Applies to: | AP, CP |
| Relations: | E2E |
| Parent Feature: | Safety |

### 62. [FO_TR_FEAT_00046

`Safe_Execution`]

| Short Name: | FO_TR_FEAT_00046 |
|---|---|
| Long Name: | Safe_Execution |
| Obligation: | Optional |
| Description: | The Safe Execution enables the detection of faults during SWS execution and provides reactions. |
| Applies to: | AP, CP |
| Parent Feature: | Safety |
| Sub Features: | *  System_Health_Monitoring_SHM |

*  `Alive_Supervision`
*  `Deadline_Supervision`
*  `Logical_Supervision`
*  Watchdog

### 63. [FO_TR_FEAT_00254

`Safe_Hardware_Accelerators`]

| Short Name: | FO_TR_FEAT_00254 |
|---|---|
| Long Name: | Safe_Hardware_Accelerators |
| Obligation: | Optional |
| Description: | The Safe Hardware Accelerators in AUTOSAR refers to the Feature that facilitates interaction between the software applications and the vehicle's hardware accelerators. |
| Applies to: | AP |
| Parent Feature: | Hardware_Support |

### 其余 175 章（内容从略，见纯文本全文）

64. [FO_TR_FEAT_00052
65. [FO_TR_FEAT_00066
66. [FO_TR_FEAT_00195
67. [FO_TR_FEAT_00208
68. [FO_TR_FEAT_00123
69. [FO_TR_FEAT_00182
70. [FO_TR_FEAT_00230
71. [FO_TR_FEAT_00078
72. [FO_TR_FEAT_00235
73. [FO_TR_FEAT_00276
74. [FO_TR_FEAT_00196
75. [FO_TR_FEAT_00119
76. [FO_TR_FEAT_00258
77. [FO_TR_FEAT_00115
78. [FO_TR_FEAT_00250
79. [FO_TR_FEAT_00231
80. [FO_TR_FEAT_00234
81. [FO_TR_FEAT_00199
82. [FO_TR_FEAT_00097
83. [FO_TR_FEAT_00223
84. Level 3
85. [FO_TR_FEAT_00098
86. [FO_TR_FEAT_00048
87. [FO_TR_FEAT_00109
88. [FO_TR_FEAT_00075
89. [FO_TR_FEAT_00118
90. [FO_TR_FEAT_00116
91. [FO_TR_FEAT_00101
92. [FO_TR_FEAT_00191
93. [FO_TR_FEAT_00157
94. [FO_TR_FEAT_00102
95. [FO_TR_FEAT_00246
96. [FO_TR_FEAT_00124
97. [FO_TR_FEAT_00049
98. [FO_TR_FEAT_00114
99. [FO_TR_FEAT_00178
100. [FO_TR_FEAT_00212
101. [FO_TR_FEAT_00058
102. [FO_TR_FEAT_00213
103. [FO_TR_FEAT_00137
104. [FO_TR_FEAT_00060
105. [FO_TR_FEAT_00057
106. [FO_TR_FEAT_00156
107. [FO_TR_FEAT_00190
108. [FO_TR_FEAT_00106
109. [FO_TR_FEAT_00211
110. [FO_TR_FEAT_00103
111. [FO_TR_FEAT_00242
112. [FO_TR_FEAT_00135
113. [FO_TR_FEAT_00134
114. [FO_TR_FEAT_00133
115. [FO_TR_FEAT_00108
116. [FO_TR_FEAT_00253
117. [FO_TR_FEAT_00167
118. [FO_TR_FEAT_00189
119. [FO_TR_FEAT_00206
120. [FO_TR_FEAT_00262
121. [FO_TR_FEAT_00061
122. [FO_TR_FEAT_00151
123. [FO_TR_FEAT_00268
124. [FO_TR_FEAT_00050
125. [FO_TR_FEAT_00259
126. [FO_TR_FEAT_00074
127. [FO_TR_FEAT_00053
128. [FO_TR_FEAT_00216
129. [FO_TR_FEAT_00237
130. [FO_TR_FEAT_00076
131. [FO_TR_FEAT_00094
132. [FO_TR_FEAT_00093
133. [FO_TR_FEAT_00104
134. [FO_TR_FEAT_00180
135. [FO_TR_FEAT_00062
136. [FO_TR_FEAT_00105
137. [FO_TR_FEAT_00217
138. [FO_TR_FEAT_00131
139. [FO_TR_FEAT_00054
140. [FO_TR_FEAT_00063
141. [FO_TR_FEAT_00198
142. [FO_TR_FEAT_00130
143. [FO_TR_FEAT_00188
144. [FO_TR_FEAT_00129
145. [FO_TR_FEAT_00183
146. [FO_TR_FEAT_00127
147. [FO_TR_FEAT_00090
148. [FO_TR_FEAT_00243
149. [FO_TR_FEAT_00252
150. [FO_TR_FEAT_00047
151. [FO_TR_FEAT_00241
152. [FO_TR_FEAT_00197
153. [FO_TR_FEAT_00240
154. [FO_TR_FEAT_00255
155. [FO_TR_FEAT_00192
156. [FO_TR_FEAT_00088
157. [FO_TR_FEAT_00224
158. [FO_TR_FEAT_00200
159. [FO_TR_FEAT_00201
160. [FO_TR_FEAT_00077
161. [FO_TR_FEAT_00203
162. [FO_TR_FEAT_00181
163. [FO_TR_FEAT_00204
164. [FO_TR_FEAT_00051
165. [FO_TR_FEAT_00249
166. [FO_TR_FEAT_00121
167. Level 4
168. [FO_TR_FEAT_00215
169. [FO_TR_FEAT_00100
170. [FO_TR_FEAT_00229
171. [FO_TR_FEAT_00158
172. [FO_TR_FEAT_00163
173. [FO_TR_FEAT_00126
174. [FO_TR_FEAT_00125
175. [FO_TR_FEAT_00177
176. [FO_TR_FEAT_00089
177. [FO_TR_FEAT_00139
178. [FO_TR_FEAT_00238
179. [FO_TR_FEAT_00239
180. [FO_TR_FEAT_00265
181. [FO_TR_FEAT_00226
182. [FO_TR_FEAT_00227
183. [FO_TR_FEAT_00244
184. [FO_TR_FEAT_00245
185. [FO_TR_FEAT_00172
186. [FO_TR_FEAT_00168
187. [FO_TR_FEAT_00170
188. [FO_TR_FEAT_00176
189. [FO_TR_FEAT_00138
190. [FO_TR_FEAT_00152
191. [FO_TR_FEAT_00154
192. [FO_TR_FEAT_00145
193. [FO_TR_FEAT_00281
194. [FO_TR_FEAT_00278
195. [FO_TR_FEAT_00277
196. [FO_TR_FEAT_00280
197. [FO_TR_FEAT_00279
198. [FO_TR_FEAT_00128
199. [FO_TR_FEAT_00264
200. [FO_TR_FEAT_00214
201. [FO_TR_FEAT_00174
202. [FO_TR_FEAT_00146
203. [FO_TR_FEAT_00173
204. [FO_TR_FEAT_00247
205. [FO_TR_FEAT_00248
206. [FO_TR_FEAT_00225
207. [FO_TR_FEAT_00099
208. [FO_TR_FEAT_00228
209. Level 5
210. [FO_TR_FEAT_00169
211. [FO_TR_FEAT_00161
212. [FO_TR_FEAT_00160
213. [FO_TR_FEAT_00164
214. [FO_TR_FEAT_00166
215. [FO_TR_FEAT_00165
216. [FO_TR_FEAT_00159
217. [FO_TR_FEAT_00141
218. [FO_TR_FEAT_00140
219. [FO_TR_FEAT_00142
220. [FO_TR_FEAT_00144
221. [FO_TR_FEAT_00143
222. [FO_TR_FEAT_00149
223. [FO_TR_FEAT_00153
224. [FO_TR_FEAT_00155
225. [FO_TR_FEAT_00171
226. [FO_TR_FEAT_00267
227. [FO_TR_FEAT_00175
228. [FO_TR_FEAT_00148
229. [FO_TR_FEAT_00150
230. [FO_TR_FEAT_00147
231. Level 6
232. [FO_TR_FEAT_00272
233. [FO_TR_FEAT_00270
234. [FO_TR_FEAT_00273
235. [FO_TR_FEAT_00271
236. 附录
237. Change history of AUTOSAR traceable items
238. Traceable item history of this document according to AUTOSAR Release R25-11
