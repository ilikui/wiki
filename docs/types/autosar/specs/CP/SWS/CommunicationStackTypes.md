# Specification of Communication Stack Types (`CommunicationStackTypes`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 050 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CommunicationStackTypes_050\AUTOSAR_CP_SWS_CommunicationStackTypes.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CommunicationStackTypes_050\AUTOSAR_CP_SWS_CommunicationStackTypes.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CommunicationStackTypes_050\zzgen\CP_SWS_CommunicationStackTypes.complete.txt`

## 文档简介

This document specifies the AUTOSAR communication stack type header file. It contains all types that are used across several modules of the communication stack of the basic software and all types of all basic software modules that are platform and compiler independent.

It is strongly recommended that those communication stack type files are unique within the AUTOSAR community to guarantee unique types and to avoid type changes when changing from supplier A to B.

## 模块依赖

The communication stack type header file defines communication types based on the platform types  (`Platform_Types`.h) header file. To prevent multiple includes of header files, the communication stack header file includes the standard types header file  which already includes both other files.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This document specifies the AUTOSAR communication stack type header file. It contains all types that are used across several modules of the communication stack of the basic software and all types of all basic software modules that are platform and compiler independent.

It is strongly recommended that those communication stack type files are unique within the AUTOSAR community to guarantee unique types and to avoid type changes when changing from supplier A to B.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Communication Stack Types that are not included in the .

| Abbreviation: | Description: |
|---|---|
| Com | Communication |
| EcuC | ECU Configuration |
| e.g. | exempli gratia =  for example |
| i.e. | it est =  that is |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Communication Stack Types.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Communication Stack Types.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No limitations.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. Applicability to safety related environments

No restrictions, because the subject of this specification is a header file specifying types. It does not include or implement any functionality.

### 10. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The communication stack type header file defines communication types based on the platform types  (`Platform_Types`.h) header file. To prevent multiple includes of header files, the communication stack header file includes the standard types header file  which already includes both other files.

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Rate Ratio Calculation |  |  |
| Naming convention for type, macro and function |  |  |
| AUTOSAR COM shall provide a receive indication function |  |  |
| AUTOSAR COM shall provide a function to request the transmit buffer data for lower layer triggered transmission |  |  |
| AUTOSAR COM shall use the TP to fragment and reassemble large signals |  |  |
| AUTOSAR COM shall support independent development of CP Software Clusters |  |  |
| Support of time stamping in hardware |  |  |
| PTP Physical Clock Adjustment |  |  |
| Ethernet Driver hardware supported data transfer |  |  |

### 12. 功能规范
*原文标题：Functional specification*

### 13. 通用 issues
*原文标题：General issues*

Upstream requirements: , ,
⌈
It is not allowed to add any project or supplier specific extension to this file. Any extension invalidates the AUTOSAR conformity.
⌋

  Upstream requirements: , ,
⌈
Because many of the communication stack type are depending on the appropriate ECU, this file shall be generated dependent on the specific ECU configuration for each ECU independently.
⌋

### 14. 错误分类
*原文标题：Error Classification*

Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 15. Development 错误
*原文标题：Development Errors*

There are no development errors.

### 16. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 17. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 18. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 19. 安全事件
*原文标题：Security Events*

The module does not report security events.

### 20. API 规范
*原文标题：API specification*

### 21. 类型定义
*原文标题：Type definitions*

### 22. PduIdType

Definition of datatype PduIdType
⌈
| Name | PduIdType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint16 | < | < |
| Description | This type is used to identify a PDU within the entire AUTOSAR Com Stack. | < | < |
| Available via | ComStack_Types.h | < | < |

⌋

  Upstream requirements: , ,
⌈
Variables of this type serve as a unique identifier of a PDU within a software module or a set thereof, and also for interaction of two software modules where the PduId of the corresponding target module is being used for referencing.
⌋

  Upstream requirements: , ,
⌈
In order to be able to perform table-indexing within a software module, variables of this type shall be zero-based and consecutive.

There might be several ranges of PduIds in a module, one for each type of operation performed within that module (e.g. sending and receiving).
⌋

### 23. PduLengthType

Definition of datatype PduLengthType
⌈
| Name | PduLengthType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint32 | < | < |
| Description | This type contains the length information (in bytes) of a PDU. | < | < |
| Available via | ComStack_Types.h | < | < |

⌋

  Upstream requirements: , ,
⌈
Variables of this type serve as length information of a PDU. The length information is provided in number of bytes.
⌋

### 24. PduInfoType

Definition of datatype PduInfoType
⌈
| Name | PduInfoType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | SduDataPtr | < |
| ^ | Type | uint8* |
| ^ | Comment | Pointer to the SDU (i.e. payload data) of the PDU. The type of this pointer depends on the memory model being used at compile time. |
| ^ | MetaDataPtr | < |
| ^ | Type | uint8* |
| ^ | Comment | Pointer to the meta data (e.g. CAN ID, socket ID, diagnostic addresses) of the PDU, consisting of a sequence of meta data items. The length and type of the meta data items is statically configured for each PDU. Meta data items with more than 8 bits use platform byte order. |
| ^ | SduLength | < |
| ^ | Type | PduLengthType |
| ^ | Comment | Length of the SDU in bytes. |
| Description | Variables of this type shall be used to store the basic information about a PDU of any type, namely a pointer variable pointing to its SDU (payload), a pointer to Meta Data of the PDU, and the corresponding length of the SDU in bytes. | < |
| Available via | ComStack_Types.h | < |

⌋

### 25. PNCHandleType

Definition of datatype PNCHandleType
⌈
| Name | PNCHandleType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint16 | < | < |
| Description | Used to store the identifier of a partial network cluster. | < | < |
| Available via | ComStack_Types.h | < | < |

⌋

### 26. TPParameterType

Definition of datatype TPParameterType
⌈
| Name | TPParameterType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | TP_STMIN | 0x00 | Separation Time |
| ^ | TP_BS | 0x01 | Block Size |
| ^ | TP_BC | 0x02 | The Band width control parameter used in FlexRay transport protocol module. |
| Description | Specify the parameter to which the value has to be changed (BS or STmin). | < | < |
| Available via | ComStack_Types.h | < | < |

⌋

### 27. BufReq_ReturnType

Definition of datatype `BufReq_ReturnType`
⌈
| Name | BufReq_ReturnType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | BUFREQ_OK | 0x00 | Buffer request accomplished successful. This status shall have the value 0. |
| ^ | BUFREQ_E_NOT_OK | 0x01 | Buffer request not successful. Buffer cannot be accessed. This status shall have the value 1. |
| ^ | BUFREQ_E_BUSY | 0x02 | Temporarily no buffer available. It's up the requester to retry request for a certain time. This status shall have the value 2. |
| ^ | BUFREQ_E_OVFL | 0x03 | No Buffer of the required length can be provided. This status shall have the value 3. |
| Description | Variables of this type shall be used to store the result of a buffer request. | < | < |
| Available via | ComStack_Types.h | < | < |

⌋

### 28. TpDataStateType

Definition of datatype TpDataStateType
⌈
| Name | TpDataStateType | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | TP_DATACONF | 0x00 | TP_DATACONF indicates that all data, that have been copied so far, are confirmed and can be removed from the TP buffer. Data copied by this API call are excluded and will be confirmed later. |
| ^ | TP_DATARETRY | 0x01 | TP_DATARETRY indicates that this API call shall copyalready copied data in order to recover from an error. In this case TxTpDataCnt specifies the offset of the first byte to be copied by the API call. |
| ^ | TP_CONFPENDING | 0x02 | TP_CONFPENDING indicates that the previously copied data must remain in the TP. |
| Description | Variables of this type shall be used to store the state of TP buffer. | < | < |
| Available via | ComStack_Types.h | < | < |

⌋

### 29. RetryInfoType

Definition of datatype RetryInfoType
⌈
| Name | RetryInfoType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | TpDataState | < |
| ^ | Type | TpDataStateType |
| ^ | Comment | The enum type to be used to store the state of Tp buffer. |
| ^ | TxTpDataCnt | < |
| ^ | Type | PduLengthType |
| ^ | Comment | Offset from the current position which identifies the number of bytes to be retransmitted. |
| Description | Variables of this type shall be used to store the information about Tp buffer handling. | < |
| Available via | ComStack_Types.h | < |

⌋

### 30. NetworkHandleType

Definition of ImplementationDataType NetworkHandleType
⌈
| Name | NetworkHandleType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | 0..255 | - | Zero-based integer number |
| Description | Variables of the type NetworkHandleType shall be used to store the identifier of a communication channel. | < | < |
| Variation | - | < | < |
| Available via | ComStack_Types.h | < | < |

⌋

### 31. CbkHandleIdType

Definition of datatype CbkHandleIdType
  Upstream requirements:
⌈
| Name | CbkHandleIdType | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint16 | < | < |
| Description | Used for the handle Ids of Com user callbacks. | < | < |
| Available via | ComStack_Types.h | < | < |

⌋

### 32. TimeTupleType

Definition of datatype TimeTupleType
  Status: DRAFT
  Upstream requirements: ,
⌈
| Name | TimeTupleType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | timestampClockValue | < |
| ^ | Type | TimeStampType |
| ^ | Comment | Value of the clock, which is used of ingress/egress timestamping |
| ^ | disciplinedClockValue | < |
| ^ | Type | TimeStampType |
| ^ | Comment | Value of the adjustable HW clock |
| ^ | timeQuality | < |
| ^ | Type | TimeStampQualType |
| ^ | Comment | Status of time tuple |
| Description | The Time Tuple represents the clock values of two related HW clocks |  |

* the value of the clock used for timestamping of frames
* and the corresponding value of the adjustable HW clock, derived by cross-timestamping

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | ComStack_Types.h | < |

⌋

### 33. TimeStampType

Definition of datatype TimeStampType
  Status: DRAFT
  Upstream requirements:
⌈
| Name | TimeStampType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | nanoseconds | < |
| ^ | Type | uint32 |
| ^ | Comment | Nanoseconds part of the time |
| ^ | seconds | < |
| ^ | Type | uint32 |
| ^ | Comment | 32 bit LSB of the 48 bits Seconds part of the time |
| ^ | secondsHi | < |
| ^ | Type | uint16 |
| ^ | Comment | 16 bit MSB of the 48 bits Seconds part of the time |
| Description | Variables of this type are used for expressing time stamps including relative time and absolute calendar time. The absolute time starts at 1970-01-01. Value range of Seconds part: |  |

* 0 .. (2 ^(48)-1), i.e. 0 to 3257812230d

Value range of Nanoseconds part:

* 0 to 999999999ns
* invalid value in nanoseconds:  to
* Bit 30 and 31 reserved, default: 0

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | ComStack_Types.h | < |

⌋

### 34. TimeStampQualType

Definition of datatype TimeStampQualType
  Status: DRAFT
  Upstream requirements:
⌈
| Name | TimeStampQualType (draft) | < | < |
|---|---|---|---|
| Kind | Enumeration | < | < |
| Range | VALID | 0 | Timestamp is valid |
| ^ | INVALID | 1 | Timestamp is invalid |
| ^ | UNCERTAIN | 2 | Status of timestamp is uncertain |
| Description | Depending on the HW, quality information regarding the evaluated timestamp might be supported. If not supported, the value shall be always Valid. For Uncertain and Invalid values, the upper layer shall discard the time stamp. |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | ComStack_Types.h | < | < |

⌋

### 35. RateDeviationStatusType

Definition of datatype RateDeviationStatusType
  Status: DRAFT
  Upstream requirements:
⌈
| Name | RateDeviationStatusType (draft) | < | < |
|---|---|---|---|
| Kind | Type | < | < |
| Derived from | uint8 | < | < |
| Range | RATE_OK | 0x00 | A valid rate deviaton value is available/calculated |
| ^ | RATE_NOT_AVAILABLE | 0xFE | No valid rate deviation value available/calculated |
| ^ | RATE_EXCEEDED | 0xFF | The calculated rate deviation value exceeds limits |
| Description | Type that indicates the current status of the rate calculation |  |  |

| Tags: atp.Status=draft | < | < |  |
|---|---|---|---|
| Available via | ComStack_Types.h | < | < |

⌋

### 36. RateDeviationWithStatusType

Definition of datatype RateDeviationWithStatusType
  Status: DRAFT
  Upstream requirements:
⌈
| Name | RateDeviationWithStatusType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | rateDeviationValue | < |
| ^ | Type | sint32 |
| ^ | Comment | Rate deviation value (resolution: 2 ^(-32)) |
| ^ | rateDeviationStatus | < |
| ^ | Type | RateDeviationStatusType |
| ^ | Comment | Current state of the rate deviation calculation |
| Description | Rate deviation value and status |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | ComStack_Types.h | < |

⌋

### 37. ListElemStructType

Definition of datatype ListElemStructType
  Status: DRAFT
  Upstream requirements: ,
⌈
| Name | ListElemStructType (draft) | < |
|---|---|---|
| Kind | Structure | < |
| Elements | DataLength | < |
| ^ | Type | uint16 |
| ^ | Comment | Represents length of data |
| ^ | DataPtr | < |
| ^ | Type | uint8* |
| ^ | Comment | Represents pointer to data |
| ^ | NextListElemPtr | < |
| ^ | Type | ListElemStructType* |
| ^ | Comment | Pointer to next list element |
| Description | This type defines one element of a single linked list. Each element represents on part of an associated data block. The data block could form for example an Ethernet frame. Each element addresses a data location, the data length and a pointer to the next element. The last node (tail) has NextListElemPtr set to NUL_PTR. The re-construction process of a data block (e.g. Ethernet frame) is performed by traversing from the first data element (head) to the last data element (tail). The single linked list is linked in network order (big-endian). Thus, the head element represents the most significiant part of the data block (e.g. Ethernet frame) |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | ComStack_Types.h | < |

⌋

### 38. 功能定义
*原文标题：Function definitions*

Not applicable.

### 39. 时序图
*原文标题：Sequence diagrams*

Not applicable.

### 40. 配置规范
*原文标题：Configuration specification*

### 41. 发布信息
*原文标题：Published Information*

For details refer to .

### 42. 附录
*原文标题：Appendix*

### 43. 不适用需求
*原文标题：Not applicable requirements*

Upstream requirements: , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
⌈
These requirements are not applicable to this specification.
⌋

### 44. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 45. Traceable item history of this document according to AUTOSAR Release R25-11

### 46. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

| Number | Heading |
|---|---|
| Definition of datatype RateDeviationWithStatusType |  |
| Definition of datatype RateDeviationStatusType |  |

### 47. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

| Number | Heading |
|---|---|
| Definition of datatype CbkHandleIdType |  |
| Definition of datatype TimeTupleType |  |
| Definition of datatype TimeStampType |  |
| Definition of datatype TimeStampQualType |  |

### 48. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 49. Traceable item history of this document according to AUTOSAR Release R24-11

### 50. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 51. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 52. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none
