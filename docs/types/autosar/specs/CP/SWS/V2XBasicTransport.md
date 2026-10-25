# Specification of Vehicle-2-X Basic Transport (`V2XBasicTransport`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 794 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_V2XBasicTransport_794\AUTOSAR_CP_SWS_V2XBasicTransport.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_V2XBasicTransport_794\AUTOSAR_CP_SWS_V2XBasicTransport.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_V2XBasicTransport_794\zzgen\CP_SWS_V2XBasicTransport.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Vehicle-2-X Basic Transport (called "V2xBtp module" in this document).

V2xBtp module together with Vehicle-2-X Facilities  (V2xFac), Vehicle-2-X GeoNetworking  (V2xGn), Vehicle-2-X Management  (V2xM), Vehicle-2-X Data Manager  (V2xDM) and AUTOSAR BSW module Ethernet Interface  (EthIf) forms the V2X stack within the AUTOSAR architecture.

The base for this document is the BTP specification . It is assumed that the reader is familiar with this specification. This document will not redefine BTP functionality, but it will try to follow the same order as the BTP specification.

## 模块依赖

This section describes the relations of the V2xBtp module to other modules within the AUTOSAR basic software architecture. It outlines the modules that are required or optional for the realization of the V2xBtp module and the V2xBtp services that these modules use.

## 章节结构

1. 简介与功能概述
2. Architectural 概述
3. 功能概述
4. 缩略语
5. 相关文档
6. 输入文档与相关标准规范
7. 相关规范
8. 约束与假设
9. 限制
10. 适用的车型领域
11. 对其他模块的依赖
12. AUTOSAR DET (Default 错误 Tracer)
13. AUTOSAR EcuM (Ecu 状态管理器)
14. AUTOSAR V2xFac (Vehicle-2-X Facilities)
15. AUTOSAR V2xGn (Vehicle-2-X GeoNetworking)
16. 需求追踪
17. 功能规范
18. 通用功能
19. Message Reception
20. Message Transmission
21. 错误分类
22. Development 错误
23. Runtime 错误
24. Production 错误
25. Extended Production 错误
26. API 规范
27. Imported 类型
28. 类型定义
29. V2xBtp_TxParamsType
30. V2xBtp_RxParamsType
31. 功能定义
32. V2xBtp_Init
33. V2xBtp_GetVersionInfo
34. V2xBtp_Transmit
35. Callback 通知
36. V2xBtp_RxIndication
37. V2xBtp_CopyTxData
38. Expected 接口
39. Mandatory 接口
40. Optional 接口
41. Configurable 接口
42. <User>_RxIndication
43. 时序图
44. 发送请求
45. 接收指示
46. 配置规范
47. How to read this chapter
48. Containers and 配置 parameters
49. Variants
50. VARIANT-PRE-COMPILE
51. V2xBtp
52. V2xBtpGeneral
53. V2xBtpRxIndicationFunction
54. 发布信息
55. 附录
56. History of 规范 Items
57. Traceable item history of this document according to AUTOSAR Release R25-11
58. Added 规范 Items in R25-11
59. Changed 规范 Items in R25-11
60. Deleted 规范 Items in R25-11
61. 规范 Item History of this document compared to AUTOSAR R24-11
62. Added 规范 Items in R24-11
63. Changed 规范 Items in R24-11
64. Deleted 规范 Items in R24-11
65. 规范 Item History of this document compared to AUTOSAR R23-11.
66. Added 规范 Items in R23-11
67. Changed 规范 Items in R23-11
68. Deleted 规范 Items in R23-11
69. 规范 Item History of this document compared to AUTOSAR R22-11
70. Added 规范 Items in R22-11
71. Changed 规范 Items in R22-11
72. Deleted 规范 Items in R22-11
73. Constraint Item History of this document compared to AUTOSAR R22-11
74. Added Constraints in R22-11
75. Changed Constraints in R22-11
76. Deleted Constraints in R22-11
