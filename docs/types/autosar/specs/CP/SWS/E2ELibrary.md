# Specification of SW-C End-to-End Communication Protection Library (`E2ELibrary`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 428 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_E2ELibrary_428\AUTOSAR_CP_SWS_E2ELibrary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_E2ELibrary_428\AUTOSAR_CP_SWS_E2ELibrary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_E2ELibrary_428\zzgen\CP_SWS_E2ELibrary.complete.txt`

## 文档简介

This document cointains the platform specific implementation requirements of the PRS E2E Protocol. This includes interfaces and datatypes used.

The main part of the functional specification is given in the AUTOSAR Foundation document 849 "E2E Protocol Specification".

Platform dependent functional specifications extending the protocol specifications are collected in the following sub section(s).

The concept of E2E protection assumes that safety-related data exchange shall be protected at runtime against the effects of faults within the communication link (see ). Examples for such faults are random HW faults (e.g. corrupt registers of a CAN transceiver), interference (e.g. due to EMC), and systematic faults within the software implementing the VFB communication (e.g. RTE, IOC, COM and network stacks).

By using E2E communication protection mechanisms, the faults in the communication link can be detected and handled at runtime.The E2E Library provides mechanisms for E2E protection, adequate for safety-related communication having requirements up to ASIL D.

The algorithms of protection mechanisms are implemented in the E2E Library. The callers of the E2E Library are responsible for the correct usage of the library, in particular for providing correct parameters the E2E Library routines.

The E2E protectionallows the following:

* It protects the safety-related data elements to be sent over the RTE by attaching control data,
* It verifies the safety-related data elements received from the RTE using this control data, and
* It indicates that received safety-related data elements faulty,which then has to be handled by the receiver SW-C.

To provide the appropriate solution addressing flexibility and standardization, AUTOSAR specifies a set of flexible E2E profiles that implementan appropriate combination of E2E protection mechanisms. Each specified E2E profile has a fixed behavior, but it has some configuration options by function parameters (e.g. the location of CRC in relation to the data, which are to be protected).

The E2E library is invoked from:

# E2E Transformer (a new, standardized way to invoke E2E, introduced in R4.2.1)
# COM E2E Callout.

Regardless where E2E is executed, the E2E Protection is for data elements. The E2E Protection is performed on the serialized representation of data elements, on the same bit layout as the one transmitted on the bus. This means:

* In case E2E Transformer is used, the serialization is performed by a transformer a

## 模块依赖

It is important to note that the function `Crc_CalculateCRC8` of CRC library / CRC routines have changed is functionality since R4.0, i.e. it is different in R3.2 and >=R4.0:

* There is an additional parameter `Crc_IsFirstCall`
* The function has different start value and different XOR values (changed from 0x00 to OxFF).

This results with a different value of computed CRC of a given buffer.

To have the same results of the functions `E2E_P01Protect`() and `E2E_P01Check`() in >=R4.0 and R3.2, while using differently functioning CRC library, E2E "compensates" different behavior of the CRC library. This results with different invocation of the CRC library by E2E library in >=R4.0 and R3.2.

Mandatory interfaces to CRC Library are listed here:

 Definition of mandatory interfaces required by module E2E
  Upstream requirements: , ,
⌈
| API Function | Header File | Description |
|---|---|---|
| Crc_CalculateCRC16 | Crc.h | This service makes a CRC16 calculation on Crc_Length data bytes. |
| Crc_CalculateCRC32P4 | Crc.h | This service makes a CRC32 calculation on Crc_Length data bytes, using the polynomial 0xF4ACFB13. |

This CRC routine is used by E2E Profile 4.
| Crc_CalculateCRC64 | Crc.h | This service makes a CRC64 calculation on Crc_Length data bytes, using the polynomial 0x42F0E1EBA9EA3693. |
|---|---|---|

This CRC routine is used by E2E Profile 7.
| Crc_CalculateCRC8 | Crc.h | This service makes a CRC8 calculation on Crc_Length data bytes, with SAE J1850 parameters |
|---|---|---|
| Crc_CalculateCRC8H2F | Crc.h | This service makes a CRC8 calculation with the Polynomial 0x2F on Crc_Length |

⌋

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document cointains the platform specific implementation requirements of the PRS E2E Protocol. This includes interfaces and datatypes used.

The main part of the functional specification is given in the AUTOSAR Foundation document 849 "E2E Protocol Specification".

Platform dependent functional specifications extending the protocol specifications are collected in the following sub section(s).

The concept of E2E protection assumes that safety-related data exchange shall be protected at runtime against the effects of faults within the communication link (see ). Examples for such faults are random HW faults (e.g. corrupt registers of a CAN transceiver), interference (e.g. due to EMC), and systematic faults within the software implementing the VFB communication (e.g. RTE, IOC, COM and network stacks).

By using E2E communication protection mechanisms, the faults in the communication link can be detected and handled at runtime.The E2E Library provides mechanisms for E2E protection, adequate for safety-related communication having requirements up to ASIL D.

The algorithms of protection mechanisms are implemented in the E2E Library.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

All technical terms used in this document, except the ones listed in the table below, can be found in the official AUTOSAR glossary .

Acronyms and abbreviations that have a local scope and therefore are not contained in the AUTOSAR glossary appear in the glossary below.

| Abbreviation / Acronym: | Description: |
|---|---|
| E2E Library | Short name for the End-to-End Communication Protection Library. |
| Data ID | An identifier that uniquely identifies the message / data element / data. |
| Source ID | An identifier that uniquely identified the source (origin) of the message / data element / data. |
| Repetition | Repetition of information. |
| Loss | Loss of information. |
| Delay | Delay of information. |
| Insertion | Insertion of information. |
| Masquerade | Masquerade. |
| Incorrect addressing | Incorrect addressing of information. |
| Incorrect sequence | Incorrect sequence of information. |
| Corruption | Corruption of information. |
| Asymmetric information | Asymmetric information sent from a sender to multiple receivers. |
| Subset | Information from a sender received by only a subset of the receivers. |
| Blocking | Blocking access to a communication channel. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for E2ELibrary.

Thus, the specification SWS BSW General shall be considered as additional and required specification for E2ELibrary.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

General limitations regarding E2E protection and the detectable failure modes are described in . E2E Profile 2 has in R4.2.1 a new setting offset. This offset can be configured in the system template. However, the E2E Profile 2 specification does not support the case when offset is different than 0. The specification of E2E Profile 2 will be fixed in a future AUTOSAR release, to support a configurable offset.

E2E Profile 1 in the "Double Data ID configuration"uses an implicit 2-byte Data ID, over which CRC8 is calculated. As a CRC over two different 2-byte numbers may result with the same CRC, some precautions must be taken by the user. See `PRS_E2E_UC_00072` and `PRS_E2E_UC_00073`.

E2E Profile 2 uses an implicit 1-byte Data ID, selected from a List of Data IDs depending on each value of the counter, for calculation of the CRC. See  for details on the usage and generation of DataIDList for E2E profile 2.

### 8. Implementation of the E2E 库
*原文标题：Implementation of the E2E Library*

Upstream requirements:
⌈
The implementation of the E2E Library shall comply with the requirements for the development of safety-related software for the automotive domain.
⌋

The ASIL assigned to the requirements implemented by the E2E library depends on the safety concept of a particular system. Depending on that application, the E2E Library at least may need to comply with an ASIL A, B, C or D development process. Therefore, it may be most efficient to develop the library according to the highest ASIL, which enables to use the same library for lower ASILs as well.

  Upstream requirements:
⌈
The configuration of the E2E Library and of the code invoking it (e.g. E2E wrapper , E2E callouts , E2E transformer) shall be implemented and configured (including configuration options used from other subsystems, e.g. COM signal to I-PDU mapping) according to the requirements for the development of safety-related software for the automotive domain.
⌋

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. Required 文件结构
*原文标题：Required file structure*

Upstream requirements:
⌈
E2E library shall be built of the following files: E2E.h (common header), E2E.c (implementation of common parts),`E2E_PXX`.c (where XX: e.g. 01, 02, ... representing the profile) and `E2E_SM`.c (for E2E state machine).
⌋

  Upstream requirements:
⌈
Files `E2E_PXX`.c and E2E.h shall contain implementation parts specific of each profile.
⌋

The below requirement is redundant with above ones, but important to be stated explicitly:

  Upstream requirements:
⌈
E2E library files (i.e. E2E_*.*) shall not include any RTE files.
⌋

### 11. Dependency on CRC 库
*原文标题：Dependency on CRC library*

It is important to note that the function `Crc_CalculateCRC8` of CRC library / CRC routines have changed is functionality since R4.0, i.e. it is different in R3.2 and >=R4.0:

* There is an additional parameter `Crc_IsFirstCall`
* The function has different start value and different XOR values (changed from 0x00 to OxFF).

This results with a different value of computed CRC of a given buffer.

To have the same results of the functions `E2E_P01Protect`() and `E2E_P01Check`() in >=R4.0 and R3.2, while using differently functioning CRC library, E2E "compensates" different behavior of the CRC library. This results with different invocation of the CRC library by E2E library in >=R4.0 and R3.2.

Mandatory interfaces to CRC Library are listed here:

 Definition of mandatory interfaces required by module E2E
  Upstream requirements: , ,
⌈
| API Function | Header File | Description |
|---|---|---|
| Crc_CalculateCRC16 | Crc.h | This service makes a CRC16 calculation on Crc_Length data bytes. |
| Crc_CalculateCRC32P4 | Crc.h | This service makes a CRC32 calculation on Crc_Length data bytes, using the polynomial 0xF4ACFB13. |

This CRC routine is used by E2E Profile 4.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in , ,  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Implementation of E2E protocol shall fulfill ISO 26262 |  |  |
| E2E protocol shall provide different E2E profiles |  |  |
| Each E2E profile shall define a set of protection mechanisms and its behavior |  |  |
| E2E Library shall call the CRC routines of CRC library |  |  |
| CRC used in a E2E profile shall be different than the CRC used by the underlying physical communication protocol |  |  |
| E2E protocol shall provide E2E Check status to the application |  |  |
| An E2E protection mechanism for inter-ECU communication of short to large data shall be provided |  |  |
| E2E protocol shall provide E2E overall state to the application |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Classification of development errors |  |  |
| The functional behavior of each library functions shall not be configurable |  |  |
| Each library shall provide one header file with its public interface |  |  |
| A lib |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 功能规范
*原文标题：Functional specification*

### 14. 错误分类
*原文标题：Error classification*

Libraries have no configuration and therefore a tracing of development errors cannot be disabled or enabled. Thus, there is no possibility to classify errors detected by library-internal mechanisms as development or production errors. Moreover, Libraries cannot call BSW modules (e.g. DEM or DET). Therefore, the errors detected by library-internal mechanisms are reported to callers synchronously. Note that both CRC Library and E2E Library are not BSW Modules; Libraries are allowed to call each other.

  Upstream requirements:
⌈
The E2E library shall not contain library-internal mechanisms for error detection to be traced as development errors.
⌋

  Upstream requirements:
⌈
The E2E Library shall report errors detected by library-internal mechanisms to callers of E2E functions through return value.
⌋

  Upstream requirements:
⌈
The E2E Library shall not call BSW modules for error reporting (in particular DEM and DET), nor for any other purpose. The E2E Library shall not call RTE.
⌋

### 15. Development 错误
*原文标题：Development Errors*

The following error flags for errors shall be used by all E2E Library functions:

 Definition of development errors in module E2E
  Upstream requirements: , ,
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| At least one pointer parameter is a NULL pointer | E2E_E_INPUTERR_NULL | 0x13 |
| At least one input parameter is erroneous, e.g. out of range | E2E_E_INPUTERR_WRONG | 0x17 |
| Function executed in wrong state | E2E_E_WRONGSTATE | 0x1A |

⌋

The range 0x80..0xFE is foreseen only for extending the AUTOSAR profiles with vendor specific return values.

  Upstream requirements:
⌈
The caller of the E2E functions `E2E_PXXProtect`() / `E2E_PXXCheck`() shall handle the errors/stati defined in `SWS_E2E_00047` according to the column "How do caller of E2E shall handle it".
⌋

In other words, the E2E libary does not define any integration errors for itself. However, the caller of E2E library uses the return values of E2E functions and does the corresponding error handling.

### 16. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 17. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 18. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 19. API 规范
*原文标题：API specification*

This chapter specifies the API of E2E Library.

Members of the configuration structures (e.g. in ) are in alphabetical order. However, for implementation, the sequence of members of this data structure is provided by table specification items (e.g. ).

### 20. Imported 类型
*原文标题：Imported types*

In this chapter, all types and #defines included from the following files are listed:

 Definition of imported datatypes of module E2E
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Std | Std_Types.h | Std_MessageResultType |
| ^ | Std_Types.h | Std_MessageTypeType |
| ^ | Std_Types.h | Std_ReturnType |

⌋

### 21. 类型定义
*原文标题：Type definitions*

This chapter defines the data types defined by E2E Library that are visible to the callers.

Some attributes shown below define data offset. The offset is defined according to the following rules:

* The offset is in bits,
* Within a byte, bits are numbered from 0 upwards, with bit 0 being the least significant bit (regardless of the microcontroller or bus endianness).

Example 1 - Counter with bit offset = 8 on MSB microcontroller:

| MSB |  |  |  |  |  |  | LSB |  |
|---|---|---|---|---|---|---|---|---|
| Data | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
| ^ | CRC with bit offset 0 | < | < | < | < | < | < | < |
| Data | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 |
| ^ | User data with bit offset 12 | < | < | < | Counter with offset 8 | < | < | < |
| Data | 23 | 22 | 21 | 20 | 19 | 18 | 17 | 16 |
| ^ | User data with bit offset 20 | < | < | < | User data with bit offset 16 | < | < | < |

### 22. E2E Profile 1 类型
*原文标题：E2E Profile 1 types*

Note: Since AUTOSAR 4.1.1, type names were renamed. If an existing application using E2E Library requires compatibility of interfaces to previous release versions, then the header file E2E.h shall contain following type definitions:

typedef `E2E_P01ProtectStateType` `E2E_P01SenderStateType`;

typedef `E2E_P01CheckStateType` `E2E_P01ReceiverStateType`;

typedef `E2E_P01CheckStatusType` `E2E_P01ReceiverStatusType`;

### 23. E2E_P01ConfigType

Definition of datatype `E2E_P01ConfigType`
  Upstream requirements:
⌈
| Name | E2E_P01ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | CounterOffset | < |
| ^ | Type | uint16 |
| ^ | Comment | Bit offset of Counter in MSB first order. CounterOffset shall be a multiple of 4. In variants 1A, 1B, and 1C, CounterOffset is 8. |
| ^ | CRCOffset | < |
| ^ | Type | uint16 |
| ^ | Comment | Bit offset of CRC (i.e. since *Data) in MSB first order. The offset shall be a multiple of 8. In variants 1A, 1B, and 1C, CRCOffset is 0. |
| ^ | DataID | < |
| ^ | Type | uint16 |
| ^ | Comment | A unique identifier, for protection against masquerading. There are some constraints on the selection of ID values, described in section "Configuration constraints on Data IDs". |
| ^ | DataIDNibbleOffset | < |
| ^ | Type | uint16 |
| ^ | Comment | Bit offset of the low nibble of the high byte of Data ID. This parameter is used by E2E Library only if DataIDMode = E2E_P01_DATAID_NIBBLE (otherwise it is ignored by E2E Library). |

For DataIDMode different than `E2E_P01_DATAID_NIBBLE`, DataIDNibbleOffset shall be initialized to 0 (even if it is ignored by E2E Library).

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. E2E_P01DataIDMode

Note: The values for the enumeration constants are specified on the associated UML diagram.

 Definition of datatype `E2E_P01DataIDMode`
  Upstream requirements:
⌈
| Name | E2E_P01DataIDMode | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | E2E_P01_DATAID_BOTH | 0 | Two bytes are included in the CRC (double ID configuration) This is used in E2E variant 1A. |
| ^ | E2E_P01_DATAID_ALT | 1 | One of the two bytes byte is included, alternating high and low byte, depending on parity of the counter (alternating ID configuration). For an even counter, the low byte is included. For an odd counter, the high byte is included. This is used in E2E variant 1B. |
| ^ | E2E_P01_DATAID_LOW | 2 | Only the low byte is included, the high byte is never used. This is applicable if the IDs in a particular system are 8 bits. |
| ^ | E2E_P01_DATAID_NIBBLE | 3 | The low byte is included in the implicit CRC calculation, the low nibble of the high byte is transmitted along with the data (i.e. it is explicitly included), the high nibble of the high byte is not used. This is applicable for the IDs up to 12 bits. This is used in E2E variant 1C. |
| Description | The Data ID is two bytes long in E2E Profile 1. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. E2E_P01ProtectStateType

Definition of datatype `E2E_P01ProtectStateType`
  Upstream requirements:
⌈
| Name | E2E_P01ProtectStateType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Counter | < |
| ^ | Type | uint8 |
| ^ | Comment | Counter to be used for protecting the next Data. The initial value is 0, which means that the first Data will have the counter 0. After the protection by the Counter, the Counter is incremented modulo 0xF. The value 0xF is skipped (after 0xE the next is 0x0), as 0xF value represents the error value. The four high bits are always 0. |
| Description | State of the sender for a Data protected with E2E Profile 1. | < |
| Available via | E2E.h | < |

⌋

### 26. E2E_P01CheckStateType

Note: The values for the enumeration constants are specified on the associated UML diagram. Note that in previous SWS E2E versions, `E2E_P01STATUS_OK` was equal to 0x10.

 Definition of datatype `E2E_P01CheckStateType`
  Upstream requirements: ,
⌈
| Name | E2E_P01CheckStateType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | LastValidCounter | < |
| ^ | Type | uint8 |
| ^ | Comment | Counter value most recently received. If no data has been yet received, then the value is 0x0. After each reception, the counter is updated with the value received. |
| ^ | MaxDeltaCounter | < |
| ^ | Type | uint8 |
| ^ | Comment | MaxDeltaCounter specifies the maximum allowed difference between two counter values of consecutively received valid messages. |
| ^ | WaitForFirstData | < |
| ^ | Type | boolean |
| ^ | Comment | If true means that no correct data (with correct Data ID and CRC) has been yet received after the receiver initialization or reinitialization. |
| ^ | NewDataAvailable | < |
| ^ | Type | boolean |
| ^ | Comment | Indicates to E2E Library that a new data is available for Library to be checked. This attribute is set by the E2E Library caller, and not by the E2E Library. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. E2E_P01CheckStatusType

Definition of datatype `E2E_P01CheckStatusType`
  Upstream requirements:
⌈
| Name | E2E_P01CheckStatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | E2E_P01STATUS_OK | 0x00 | OK: The new data has been received according to communication medium, the CRC is correct, the Counter is incremented by 1 with respect to the most recent Data received with Status _INITIAL, _OK, or _OKSOMELOST. This means that no Data has been lost since the last correct data reception. |
| ^ | E2E_P01STATUS_NONEWDATA | 0x01 | Error: the Check function has been invoked but no new Data is not available since the last call, according to communication medium (e.g. RTE, COM). As a result, no E2E checks of Data have been consequently executed. |
| ^ | E2E_P01STATUS_WRONGCRC | 0x02 | Error: The data has been received according to communication medium, but |

# the CRC is incorrect (applicable for all E2E Profile 1 configurations) or
# the low nibble of the high byte of Data ID is incorrect (applicable only for E2E Profile 1 with `E2E_P01DataIDMode` = `E2E_P01_DATAID_NIBBLE`).

The two above errors can be a result of corruption, incorrect addressing or masquerade.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. E2E Profile 2 类型
*原文标题：E2E Profile 2 types*

Since AUTOSAR 4.1.1, type names were renamed. If an existing application using E2E Library requires compatibility of interfaces to previous release versions, then the header file E2E.h shall contain following type definitions:

typedef `E2E_P02ProtectStateType` `E2E_P02SenderStateType`;

typedef `E2E_P02CheckStateType` `E2E_P02ReceiverStateType`;

typedef `E2E_P02CheckStatusType` `E2E_P02ReceiverStatusType`;

### 29. E2E_P02ConfigType

Definition of datatype `E2E_P02ConfigType`
  Upstream requirements:
⌈
| Name | E2E_P02ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | DataLength | < |
| ^ | Type | uint16 |
| ^ | Comment | Length of Data, in bits. The value shall be a multiple of 8. |
| ^ | DataIDList | < |
| ^ | Type | Array of uint8 |
| ^ | Size | 16 |
| ^ | Comment | An array of appropriately chosen Data IDs for protection against masquerading. |
| ^ | MaxDeltaCounterInit | < |
| ^ | Type | uint8 |
| ^ | Comment | Initial maximum allowed gap between two counter values of two consecutively received valid Data. For example, if the receiver gets Data with counter 1 and MaxDeltaCounterInit is 1, then at the next reception the receiver can accept Counters with values 2 and 3, but not 4. |

Note that if the receiver does not receive new Data at a consecutive read, then the receiver increments the tolerance by 1.
| ^ | MaxNoNewOrRepeatedData | < |
|---|---|---|
| ^ | Type | uint8 |
| ^ | Comment | The maximum amount of missing or repeated Data which the receiver does not expect to exceed under normal communication conditions. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. E2E_P02ProtectStateType

Definition of datatype `E2E_P02ProtectStateType`
  Upstream requirements:
⌈
| Name | E2E_P02ProtectStateType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Counter | < |
| ^ | Type | uint8 |
| ^ | Comment | Counter to be used for protecting the Data. The initial value is 0. As the counter is incremented before sending, the first Data will have the counter value 1 |
| Description | State of the sender for a Data protected with E2E Profile 2. | < |
| Available via | E2E.h | < |

⌋

### 31. E2E_P02CheckStateType

Note that in previous SWS E2E versions, `E2E_P02STATUS_OK` was equal to 0x10.

 Definition of datatype `E2E_P02CheckStateType`
  Upstream requirements: ,
⌈
| Name | E2E_P02CheckStateType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | LastValidCounter | < |
| ^ | Type | uint8 |
| ^ | Comment | Counter of last valid received message. |
| ^ | MaxDeltaCounter | < |
| ^ | Type | uint8 |
| ^ | Comment | MaxDeltaCounter specifies the maximum allowed difference between two counter values of consecutively received valid messages. |
| ^ | WaitForFirstData | < |
| ^ | Type | boolean |
| ^ | Comment | If true means that no correct data (with correct Data ID and CRC) has been yet received after the receiver initialization or reinitialization. |
| ^ | NewDataAvailable | < |
| ^ | Type | boolean |
| ^ | Comment | Indicates to E2E Library that a new data is available for Library to be checked. This attribute is set by the E2E Library caller, and not by the E2E Library. |
| ^ | LostData | < |
| ^ | Type | uint8 |
| ^ | Comment | Number of data (messages) lost since reception of last valid one. |
| ^ | Status | < |
| ^ | Type | E2E_P02CheckStatusType |
| ^ | Comment | Result of the verification of the Data, determined by the Check function. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. E2E_P02CheckStatusType

Note: The values for the enumeration constants are specified on the associated UML diagram.

 Definition of datatype `E2E_P02CheckStatusType`
  Upstream requirements:
⌈
| Name | E2E_P02CheckStatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | E2E_P02STATUS_OK | 0x00 | OK: The new data has been received according to communication medium, the CRC is correct, the Counter is incremented by 1 with respect to the most recent Data received with Status _INITIAL, _OK, or _OKSOMELOST. This means that no Data has been lost since the last correct data reception. |
| ^ | E2E_P02STATUS_NONEWDATA | 0x01 | Error: the Check function has been invoked but no new Data is not available since the last call, according to communication medium (e.g. RTE, COM). As a result, no E2E checks of Data have been consequently executed. |
| ^ | E2E_P02STATUS_WRONGCRC | 0x02 | Error: The data has been received according to communication medium, but the CRC is incorrect. |
| ^ | E2E_P02STATUS_SYNC | 0x03 | NOT VALID: The new data has been received after detection of an unexpected behavior of counter. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. E2E Profile 4 类型
*原文标题：E2E Profile 4 types*

### 34. E2E_P04ConfigType

Definition of datatype `E2E_P04ConfigType`
  Upstream requirements: ,
⌈
| Name | E2E_P04ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | DataID | < |
| ^ | Type | uint32 |
| ^ | Comment | A system-unique identifier of the Data. |
| ^ | Offset | < |
| ^ | Type | uint16 |
| ^ | Comment | Bit offset of the first bit of the E2E header from the beginning of the Data (bit numbering: bit 0 is the least important). The offset shall be a multiple of 8 and 0 <= Offset <= MaxDataLength-(12*8). Example: If Offset equals 8, then the high byte of the E2E Length (16 bit) is written to Byte 1, the low Byte is written to Byte 2. |
| ^ | MinDataLength | < |
| ^ | Type | uint16 |
| ^ | Comment | Minimal length of Data, in bits. E2E checks that DataLength is >= MinDataLength (see ). The value shall be a multiple of 8. |
| ^ | MaxDataLength | < |
| ^ | Type | uint16 |
| ^ | Comment | Maximal length of Data, in bits. E2E checks that DataLength is <= MaxDataLength (see ). The value shall be a multiple of 8. |
| ^ | MaxDeltaCounter | < |
| ^ | Type | uint16 |
| ^ | Comment | Maximum allowed gap between two counter values of two consecutively received valid Data. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. E2E_P04ProtectStateType

Definition of datatype `E2E_P04ProtectStateType`
  Upstream requirements: ,
⌈
| Name | E2E_P04ProtectStateType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Counter | < |
| ^ | Type | uint16 |
| ^ | Comment | Counter to be used for protecting the next Data. The initial value is 0, which means that in the first cycle, Counter is 0. Each time E2E_P04Protect() is called, it increments the counter up to 0xFF'FF. After the maximum value is reached, the next value is 0x0. The overflow is not reported to the caller. |
| Description | State of the sender for a Data protected with E2E Profile 4. | < |
| Available via | E2E.h | < |

⌋

### 36. E2E_P04CheckStateType

Note: The values for the enumeration constants are specified only on the associated UML diagram (not in the table).

 Definition of datatype `E2E_P04CheckStateType`
  Upstream requirements: , ,
⌈
| Name | E2E_P04CheckStateType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | Status | < |
| ^ | Type | E2E_P04CheckStatusType |
| ^ | Comment | Result of the verification of the Data in this cycle, determined by the Check function. |
| ^ | Counter | < |
| ^ | Type | uint16 |
| ^ | Comment | Counter of the data in previous cycle. |
| Description | State of the reception on one single Data protected with E2E Profile 4. | < |
| Available via | E2E.h | < |

⌋

### 37. E2E_P04CheckStatusType

Definition of datatype `E2E_P04CheckStatusType`
  Upstream requirements: ,
⌈
| Name | E2E_P04CheckStatusType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | E2E_P04STATUS_OK | 0x00 | OK: the checks of the Data in this cycle were successful (including counter check, which was incremented by 1). |
| ^ | E2E_P04STATUS_NONEWDATA | 0x01 | Error: the Check function has been invoked but no new Data is not available since the last call, according to communication medium (e.g. RTE, COM). As a result, no E2E checks of Data have been consequently executed. |

This may be considered similar to `E2E_P04STATUS_REPEATED`.
| ^ | E2E_P04STATUS_ERROR | 0x07 | Error: error not related to counters occurred (e.g. wrong crc, wrong length, wrong options, wrong Data ID). |
|---|---|---|---|
| ^ | E2E_P04STATUS_REPEATED | 0x08 | Error: the checks of the Data in this cycle were successful, with the exception of the repetition. |
| ^ | E2E_P04STATUS_OKSOMELOST | 0x20 | OK: the checks of the Data in this cycle were successful (including counter check, which was incremented within the allowed configured delta). |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. E2E_P04HeaderInformationType

Definition of datatype `E2E_P04HeaderInformationType`
  Upstream requirements: ,
⌈
| Name | E2E_P04HeaderInformationType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | SequenceCounter | < |
| ^ | Type | uint16 |
| ^ | Comment | sequence counter of profile P04 |
| Description | Data that can be retrieved from E2E header on receiver side in case E2E Profile 04 is used. | < |
| Available via | E2E.h | < |

⌋

### 39. E2E Profile 4m 类型
*原文标题：E2E Profile 4m types*

### 40. E2E_P04mConfigType

Definition of datatype `E2E_P04mConfigType`
  Upstream requirements:
⌈
| Name | E2E_P04mConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | DataID | < |
| ^ | Type | uint32 |
| ^ | Comment | A system-unique identifier of the Data. |
| ^ | Offset | < |
| ^ | Type | uint16 |
| ^ | Comment | Bit offset of the first bit of the E2E header from the beginning of the Data (bit numbering: bit 0 is the least important). The offset shall be a multiple of 8 and 0 <= Offset <= MaxDataLength-(12*8). Example: If Offset equals 8, then the high byte of the E2E Length (16 bit) is written to Byte 1, the low Byte is written to Byte 2. |
| ^ | MinDataLength | < |
| ^ | Type | uint16 |
| ^ | Comment | Minimal length of Data, in bits. E2E checks that DataLength is >= MinDataLength (see ). The value shall be a multiple of 8. |
| ^ | MaxDataLength | < |
| ^ | Type | uint16 |
| ^ | Comment | Maximal length of Data, in bits. E2E checks that DataLength is <= MaxDataLength (see ). The value shall be a multiple of 8. |
| ^ | MaxDeltaCounter | < |
| ^ | Type | uint16 |
| ^ | Comment | Maximum allowed gap between two counter values of two consecutively received valid Data. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 248 章（内容从略，见纯文本全文）

41. E2E_P04mProtectStateType
42. E2E_P04mCheckStateType
43. E2E_P04mCheckStatusType
44. E2E_P04mHeaderInformationType
45. E2E Profile 5 类型
46. E2E_P05ConfigType
47. E2E_P05ProtectStateType
48. E2E_P05CheckStateType
49. E2E_P05CheckStatusType
50. E2E_P05HeaderInformationType
51. E2E Profile 6 类型
52. E2E_P06ConfigType
53. E2E_P06ProtectStateType
54. E2E_P06CheckStateType
55. E2E_P06CheckStatusType
56. E2E_P06HeaderInformationType
57. E2E Profile 7 类型
58. E2E_P07ConfigType
59. E2E_P07ProtectStateType
60. E2E_P07CheckStateType
61. E2E_P07CheckStatusType
62. E2E_P07HeaderInformationType
63. E2E Profile 7m 类型
64. E2E_P07mConfigType
65. E2E_P07mProtectStateType
66. E2E_P07mCheckStateType
67. E2E_P07mCheckStatusType
68. E2E_P07mHeaderInformationType
69. E2E Profile 8 类型
70. E2E_P08ConfigType
71. E2E_P08ProtectStateType
72. E2E_P08CheckStateType
73. E2E_P08CheckStatusType
74. E2E_P08HeaderInformationType
75. E2E Profile 8m 类型
76. E2E_P08mConfigType
77. E2E_P08mProtectStateType
78. E2E_P08mCheckStateType
79. E2E_P08mCheckStatusType
80. E2E_P08mHeaderInformationType
81. E2E Profile 11 类型
82. E2E_P11ConfigType
83. E2E_P11DataIDMode
84. E2E_P11ProtectStateType
85. E2E_P11CheckStateType
86. E2E_P11CheckStatusType
87. E2E Profile 22 类型
88. E2E_P22ConfigType
89. E2E_P22ProtectStateType
90. E2E_P22CheckStateType
91. E2E_P22CheckStatusType
92. E2E Profile 44 类型
93. E2E_P44ConfigType
94. E2E_P44ProtectStateType
95. E2E_P44CheckStateType
96. E2E_P44CheckStatusType
97. E2E_P44HeaderInformationType
98. E2E Profile 44m 类型
99. E2E_P44mConfigType
100. E2E_ P44mProtectStateType
101. E2E_P44mCheckStateType
102. E2E_P44mCheckStatusType
103. E2E_P44mHeaderInformationType
104. E2E Profile 76 类型
105. E2E_P76ConfigType
106. E2E_P76ProtectStateType
107. E2E_P76CheckStateType
108. E2E_P76CheckStatusType
109. E2E 状态 machine 类型
110. E2E_PCheckStatusType
111. E2E_SMConfigType
112. E2E_SMCheckStateType
113. E2E_SMStateType
114. Routine 定义
115. E2E Profile 1 routines
116. E2E_P01Protect
117. E2E_P01ProtectInit
118. E2E_P01Forward
119. E2E_P01Check
120. E2E_P01CheckInit
121. E2E_P01MapStatusToSM
122. E2E Profile 2 routines
123. E2E_P02Protect
124. E2E_P02ProtectInit
125. E2E_P02Forward
126. E2E_P02Check
127. E2E_P02CheckInit
128. E2E_P02MapStatusToSM
129. E2E Profile 4 routines
130. E2E_P04Protect
131. E2E_P04ProtectInit
132. E2E_P04Forward
133. E2E_P04Check
134. E2E_P04CheckInit
135. E2E_P04MapStatusToSM
136. E2E_P04GetHeaderInfo
137. E2E Profile 4m routines
138. E2E_P04mProtect
139. E2E_P04mProtectInit
140. E2E_P04mForward
141. E2E_P04mSourceCheck
142. E2E_P04mSinkCheck
143. E2E_P04mCheckInit
144. E2E_P04mMapStatusToSM
145. E2E_P04mGetHeaderInfo
146. E2E Profile 5 routines
147. E2E_P05Protect
148. E2E_P05ProtectInit
149. E2E_P05Forward
150. E2E_P05Check
151. E2E_P05CheckInit
152. E2E_P05MapStatusToSM
153. E2E_P05GetHeaderInfo
154. E2E Profile 6 routines
155. E2E_P06Protect
156. E2E_P06ProtectInit
157. E2E_P06Forward
158. E2E_P06Check
159. E2E_P06CheckInit
160. E2E_P06MapStatusToSM
161. E2E_P06GetHeaderInfo
162. E2E Profile 7 routines
163. E2E_P07Protect
164. E2E_P07ProtectInit
165. E2E_P07Forward
166. E2E_P07Check
167. E2E_P07CheckInit
168. E2E_P07MapStatusToSM
169. E2E_P07GetHeaderInfo
170. E2E Profile 7m routines
171. E2E_P07mProtect
172. E2E_P07mProtectInit
173. E2E_P07mForward
174. E2E_P07mSourceCheck
175. E2E_P07mSinkCheck
176. E2E_P07mCheckInit
177. E2E_P07mMapStatusToSM
178. E2E_P07mGetHeaderInfo
179. E2E Profile 8 routines
180. E2E_P08Protect
181. E2E_P08ProtectInit
182. E2E_P08Forward
183. E2E_P08Check
184. E2E_P08CheckInit
185. E2E_P08MapStatusToSM
186. E2E_P08GetHeaderInfo
187. E2E Profile 8m routines
188. E2E_P08mProtect
189. E2E_P08mProtectInit
190. E2E_P08mForward
191. E2E_P08mSourceCheck
192. E2E_P08mSinkCheck
193. E2E_P08mCheckInit
194. E2E_P08mMapStatusToSM
195. E2E_P08mGetHeaderInfo
196. E2E Profile 11 routines
197. E2E_P11Protect
198. E2E_P11ProtectInit
199. E2E_P11Forward
200. E2E_P11Check
201. E2E_P11CheckInit
202. E2E_P11MapStatusToSM
203. E2E Profile 22 routines
204. E2E_P22Protect
205. E2E_P22ProtectInit
206. E2E_P22Forward
207. E2E_P22Check
208. E2E_P22CheckInit
209. E2E_P22MapStatusToSM
210. E2E Profile 44 routines
211. E2E_P44Protect
212. E2E_P44ProtectInit
213. E2E_P44Forward
214. E2E_P44Check
215. E2E_P44CheckInit
216. E2E_P44MapStatusToSM
217. E2E_P44GetHeaderInfo
218. E2E Profile 44m routines
219. E2E_P44mProtect
220. E2E_P44mProtectInit
221. E2E_P44mForward
222. E2E_P44mSourceCheck
223. E2E_P44mSinkCheck
224. E2E_P44mCheckInit
225. E2E_P44mMapStatusToSM
226. E2E_P44mGetHeaderInfo
227. E2E Profile 76 routines
228. E2E_P76Protect
229. E2E_P76ProtectInit
230. E2E_P76Check
231. E2E_P76CheckInit
232. E2E_P76MapStatusToSM
233. E2E 状态 machine routines
234. E2E_SMCheck
235. E2E_SMCheckInit
236. Callback 通知
237. Scheduled functions
238. Expected 接口
239. Mandatory 接口
240. 时序图
241. Sender
242. Sender of 数据 elements
243. Sender at signal group level
244. Receiver
245. Receiver at 数据 element level
246. Receiver at signal group level
247. 配置规范
248. 发布信息
249. 附录
250. 附录 A：Safety Manual for usage of E2E 库
251. E2E profiles and their standard variants
252. E2E 错误处理
253. Methodology of usage of E2E 库
254. RTE 配置 constraints for SW-C level protection
255. Communication 建模 for SW-C level protection
256. Multiplicities for SW-C level protection
257. Explicit access
258. Restrictions on the use of COM features
259. 附录 B：Application hints on usage of E2E 库
260. COM E2E Callouts
261. 功能概述
262. Sending/Calling
263. Reception
264. Methodology
265. 代码示例
266. Protection at RTE level through E2E 转换器
267. 不适用需求
268. Change history of AUTOSAR traceable items
269. Traceable item history of this document according to AUTOSAR Release R22-11
270. Added 规范 Items in R22-11
271. Changed 规范 Items in R22-11
272. Deleted 规范 Items in R22-11
273. Traceable item history of this document according to AUTOSAR Release R23-11
274. Added 规范 Items in R23-11
275. Changed 规范 Items in R23-11
276. Deleted 规范 Items in R23-11
277. Traceable item history of this document according to AUTOSAR Release R24-11
278. Added 规范 Items in R24-11
279. Changed 规范 Items in R24-11
280. Deleted 规范 Items in R24-11
281. Traceable item history of this document according to AUTOSAR Release R25-11
282. Added 规范 Items in R25-11
283. Changed 规范 Items in R25-11
284. Deleted 规范 Items in R25-11
285. Traceable item history of this document according to AUTOSAR Release R26-11
286. Added 规范 Items in R26-11
287. Changed 规范 Items in R26-11
288. Deleted 规范 Items in R26-11
