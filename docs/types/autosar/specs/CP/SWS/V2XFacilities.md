# Specification of Vehicle-2-X Facilities (`V2XFacilities`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 795 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_V2XFacilities_795\AUTOSAR_CP_SWS_V2XFacilities.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_V2XFacilities_795\AUTOSAR_CP_SWS_V2XFacilities.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_V2XFacilities_795\zzgen\CP_SWS_V2XFacilities.complete.txt`

## 文档简介

This document specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Vehicle-2-X Facilities (V2xFac). The Vehicle-2-X Facilities layer together with the Vehicle-2-X Basic Transport (V2xBtp), the Vehicle-2-X GeoNetworking (V2xGn), Vehicle-2-X Management (V2xM), Vehicle-2-X Data Manager (V2xDM) and the communication driver layer forms the V2X stack within the AUTOSAR architecture.

The V2xFac module is designed to be hardware independent.

The V2x Facilities layer of the ETSI architecture is split into the two AUTOSAR modules V2xFac and V2xDM.

The V2xFac module is dependent on services of V2X entities in the application layer and on lower V2xBtp module, and provides services tot the V2xDM module.

## 模块依赖

This section describes the relations of the V2xFac module to other modules within the AUTOSAR basic software architecture. It outlines the modules that are required or optional for the realization of the V2xFac module and the V2xFac services that these modules use.

## 章节结构

1. 简介与功能概述
2. Architectural 概述
3. 功能概述
4. Cooperative Awareness (CA)
5. CA 基础服务 in the AUTOSAR 架构
6. CA 基础服务功能性架构
7. Decentralized Environmental 通知 (DEN)
8. DEN 基础服务 in the AUTOSAR 架构
9. DEN 基础服务功能性架构
10. Vehicle 数据 Provider (VDP)
11. Local Dynamic 映射 (LDM)
12. Infrastructure to Vehicle Information (IVI)
13. IVI 服务 in the AUTOSAR 架构
14. IVI 服务功能性架构
15. Road and Lane Topology (RLT) 服务
16. RLT 服务 in the AUTOSAR 架构
17. RLT 服务功能性架构
18. Traffic Light Maneuver (TLM) 服务
19. TLM 服务 in the AUTOSAR 架构
20. TLM 服务功能性架构
21. 缩略语
22. 相关文档
23. 输入文档与相关标准规范
24. 相关规范
25. 约束与假设
26. 限制
27. 适用的车型领域
28. Authorisation Tickets and Pseudonyms
29. 对其他模块的依赖
30. AUTOSAR DET (Default 错误 Tracer)
31. AUTOSAR EcuM (Ecu 状态管理器)
32. V2x Vehicle 数据 Provider
33. AUTOSAR V2xDM
34. AUTOSAR V2xBtp
35. AUTOSAR V2xM
36. 需求追踪
37. 功能规范
38. 启动行为
39. 通用 Format 规范
40. CA 功能性规范
41. CA 初始化, Activation and Deactivation
42. CAM Generation, Sending and Frequency 管理
43. CAM Generation Frequency 管理 for RSU ITS-Ss
44. CAM Time Requirement
45. CAM Format 规范
46. Others
47. DEN 功能性规范
48. DEN 初始化
49. DENM Transmission 管理
50. DENM Reception 管理
51. DENM Repetition
52. DENM Keep Alive Forwarding (KAF)
53. DENM Format 规范
54. Message Reception 功能性规范
55. Path History
56. 错误分类
57. Development 错误
58. Runtime 错误
59. Production 错误
60. Extended Production 错误
61. 安全事件
62. API 规范
63. Imported 类型
64. 类型定义
65. V2xFac_RxParamsType
66. V2xFac_TxParamsType
67. 功能定义
68. V2xFac_Init
69. V2xFac_GetVersionInfo
70. V2xFac_V2xM_PreparePseudonymChange
71. V2xFac_V2xM_CommitPseudonymChange
72. V2xFac_V2xM_AbortPseudonymChange
73. V2xFac_V2xM_SetTGenCamDcc
74. V2xFac_V2xM_SetCaBsOperation
75. Callback 通知
76. V2xFac_RxIndication
77. Scheduled functions
78. V2xFac_CaBs_MainFunction
79. V2xFac_DenBs_MainFunction
80. V2xFac_RxS_MainFunction
81. Expected 接口
82. Mandatory 接口
83. Optional 接口
84. 服务接口
85. Sender-Receiver-Interfaces
86. V2xFacVdp
87. V2xFacVdpBasicLFC
88. Client-Server-Interfaces
89. V2xFacDenBs
90. Implementation 数据类型
91. V2xFac specific Implementation DataTypes
92. Common Implementation DataTypes
93. CAM specific Implementation DataTypes
94. DENM specific Implementation DataTypes
95. Ports
96. V2xFac_DenBs
97. V2xFac_Vdp
98. V2xFac_VdpBasicLFC
99. 时序图
100. CAM Generation and Transmission
101. DENM Generation and Transmission
102. Message Reception
103. 配置规范
104. How to read this chapter
105. Containers and 配置 parameters
106. Variants
107. V2xFac
108. V2xFacGeneral
109. V2xFacConfig
110. V2xFacDmMsgConfig
111. 发布信息
112. 附录
113. 不适用需求
114. History of 规范 Items
115. Traceable item history of this document according to AUTOSAR Release R25-11
116. Added 规范 Items in R25-11
117. Changed 规范 Items in R25-11
118. Deleted 规范 Items in R25-11
119. 规范 Item History of this document compared to AUTOSAR R24-11
120. Added 规范 Items in R24-11
121. Changed 规范 Items in R24-11
122. Deleted 规范 Items in R24-11
123. 规范 Item History of this document compared to AUTOSAR R23-11
124. Added 规范 Items in R23-11
125. Changed 规范 Items in R23-11
126. Deleted 规范 Items in R23-11
