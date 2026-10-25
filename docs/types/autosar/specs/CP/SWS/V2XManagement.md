# Specification of Vehicle-2-X Management (`V2XManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 796 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_V2XManagement_796\AUTOSAR_CP_SWS_V2XManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_V2XManagement_796\AUTOSAR_CP_SWS_V2XManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_V2XManagement_796\zzgen\CP_SWS_V2XManagement.complete.txt`

## 文档简介

This document specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Vehicle-2-X Management (V2xM). The Vehicle-2-X Management module together with the Vehicle-2-X Facilities (V2xFac) , Vehicle-2-X Data Manager (V2xDM) , Vehicle-2-X Basic Transport Protocol (V2xBtp) , the Vehicle-2-X GeoNetworking (V2xGn)  and the communication driver layer    forms the V2X stack within the AUTOSAR architecture.

V2xM is designed to be hardware independent. It controls and supports the services of V2X protocol stack entities.

Note that figures in this document are not regarded as requirements.

## 模块依赖

This section describes the relations of the V2xM module to other modules within the AUTOSAR basic software architecture. It outlines the modules that are required or optional for the realization of the V2xM module and the V2xM services that these modules use.

## 章节结构

1. 简介与功能概述
2. Architectural 概述
3. 功能概述
4. Position and Time 管理 (POTI)
5. Identity
6. Security
7. Decentralized Congestion 控制 (DCC)
8. 缩略语
9. 相关文档
10. 输入文档与相关标准规范
11. 相关规范
12. 约束与假设
13. 限制
14. 适用的车型领域
15. Authorisation Tickets and Pseudonyms
16. 对其他模块的依赖
17. AUTOSAR DET (Default 错误 Tracer)
18. AUTOSAR EcuM (Ecu 状态管理器)
19. AUTOSAR CSM (Cryptographic 服务管理器)
20. AUTOSAR NvM (NVRAMManager)
21. AUTOSAR Math libraries (Mfl, Efx)
22. 文件结构
23. 代码文件结构
24. 需求追踪
25. 功能规范
26. 启动行为
27. 关机行为
28. Identity 管理
29. Security
30. Position and Time
31. DCC 管理
32. 错误分类
33. Development 错误
34. Runtime 错误
35. Production 错误
36. Extended Production 错误
37. 安全事件
38. API 规范
39. Imported 类型
40. 类型定义
41. V2xM_ConfigType
42. V2x_GnPacketTransportType
43. V2x_GnDestinationType
44. V2x_GnAddressType
45. V2x_GnAreaShapeType
46. V2x_GnDestinationAreaType
47. V2x_GnTxResultType
48. V2x_SecProfileType
49. V2x_SecReturnType
50. V2x_MaximumPacketLifetimeType
51. V2x_TrafficClassIdType
52. V2x_ChanType
53. V2x_GnUpperProtocolType
54. V2x_GnLongPositionVectorType
55. V2x_PseudonymType
56. V2x_SecReportType
57. 功能定义
58. V2xM_Init
59. V2xM_GetVersionInfo
60. V2xM_GetPositionAndTime
61. V2xM_GetRefTimePtr
62. V2xM_V2xGn_ReqEncap
63. V2xM_V2xGn_ReqDecap
64. V2xM_TriggerPseudonymChange
65. V2xM_LockPseudonymChange
66. V2xM_UnlockPseudonymChange
67. V2xM_V2xGn_SetGlobalRxParams
68. V2xM_V2xGn_GetGlobalTxParams
69. V2xM_CalcDistance
70. V2xM_CalcHeadingInTolerance
71. V2xM_SetTollingZoneInformation
72. V2xM_Vdp_GetNextLongTermCertificateExpirationDate
73. V2xM_Vdp_GetNextPseudonymCertificateExpirationDate
74. V2xM_Vdp_SetPositionAndTime
75. V2xM_GetTime
76. Callback 通知
77. CSM callback 接口
78. Scheduled functions
79. V2xM_MainFunction
80. Expected 接口
81. Mandatory 接口
82. Optional 接口
83. 服务接口
84. Client-Server-Interfaces
85. V2xM_Vdp
86. V2xM_PseudonymChange
87. V2xM_GeoMath
88. Implementation 数据类型
89. ImplementationDataType V2xM_PositionAndTimeType
90. Ports
91. V2xM_V2xM_GeoMath
92. V2xM_V2xM_PseudonymChange
93. V2xM_V2xM_Vdp
94. 时序图
95. V2xM_Init - Time 初始化
96. Position and time update for V2xGn
97. Position and time update for V2xFac
98. Time 处理 at reception
99. 初始化 of Wireless Drivers
100. 配置规范
101. How to read this chapter
102. Containers and 配置 parameters
103. Variants
104. V2xM
105. V2xMConfig
106. V2xMSecurityConfig
107. V2xMGeneral
108. 发布信息
109. 附录
110. History of 规范 Items
111. Traceable item history of this document according to AUTOSAR Release R25-11
112. Added 规范 Items in R25-11
113. Changed 规范 Items in R25-11
114. Deleted 规范 Items in R25-11
115. 规范 Item History of this document compared to AUTOSAR R24-11
116. Added 规范 Items in R24-11
117. Changed 规范 Items in R24-11
118. Deleted 规范 Items in R24-11
119. 规范 Item History of this document compared to AUTOSAR R23-11
120. Added 规范 Items in R23-11
121. Changed 规范 Items in R23-11
122. Deleted 规范 Items in R23-11
