# Specification of Vehicle-2-X Data Manager (`V2XDataManager`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1023 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_V2XDataManager_1023\AUTOSAR_CP_SWS_V2XDataManager.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_V2XDataManager_1023\AUTOSAR_CP_SWS_V2XDataManager.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_V2XDataManager_1023\zzgen\CP_SWS_V2XDataManager.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module V2X Data Manager (V2xDM). The V2X Data Manager has the task to take over the V2x message that was received and pre-processed by the regional V2x stack and to perform the operation according to the configuration. Thus, the V2xDM is only relevant on reception of a V2x message and not to generate a V2x message for transmission. This is still in the responsibility of the V2x stack. The V2X Data Manager is independent from the underlying V2x stack and does not contain any V2X regional stack implementation. This means, it can be used in combination of any V2x stack regardless if that is specific to China, US or Europe. In fact, it is one of the key features of the V2x Data Manager to distribute parts of the V2x message to the RTE and adapt to it so that the resulting information can be independent from the underlying regional specific V2x stack.

## 模块依赖

This section describes the relations of the V2xDM module to other modules within the AUTOSAR basic software architecture. It outlines the modules that are required or optional for the realization of the V2xDM module and services that this module uses.

## 章节结构

1. 简介与功能概述
2. Architectural 概述
3. 缩略语
4. 相关文档
5. 输入文档与相关标准规范
6. 相关规范
7. 约束与假设
8. 限制
9. 适用的车型领域
10. 对其他模块的依赖
11. AUTOSAR DET (Default 错误 Tracer)
12. AUTOSAR V2xFac (V2xFacilities)
13. AUTOSAR V2xM (V2xManagement)
14. AUTOSAR CnV2xMsg (ChineseV2xMessage)
15. AUTOSAR CnV2xMgt (ChineseV2xManagement)
16. AUTOSAR RTE (Run Time Environment)
17. AUTOSAR PDU Router (PduR)
18. 需求追踪
19. 功能规范
20. 概述
21. Modelling approach
22. 模块处理
23. 初始化
24. 调度
25. 数据 Transmission and Reception
26. 数据 Transmission
27. 数据 Reception
28. 数据 Modelling
29. V2x message representation
30. V2x 数据 catalog
31. V2x 数据映射
32. Message Decoding and Forwarding
33. 错误分类
34. Development 错误
35. Runtime 错误
36. Production 错误
37. Extended Production 错误
38. API 规范
39. API parameter checking
40. Imported 类型
41. 类型定义
42. V2xDM_ConfigType
43. 功能定义
44. V2xDM_Init
45. V2xDM_GetVersionInfo
46. Callback 通知
47. V2xDM_RxIndication
48. V2xDM_V2xStackRxIndication
49. Scheduled functions
50. V2xDM_MainFunction
51. Expected 接口
52. Mandatory 接口
53. Optional 接口
54. Configurable 接口
55. V2xDM_Callback_<Stack>_<Msg>_<类型>
56. <V2xDM_ItemConversionFunc>
57. 服务接口
58. 时序图
59. V2x message reception
60. 配置规范
61. Containers and 配置 parameters
62. V2xDM
63. V2xDMGeneral
64. V2xDMConfigSet
65. V2xDMLink
66. V2xDMCatalogItem
67. V2xDMConnection
68. V2xDMConnectionSource
69. V2xDMConnectionSourceContext
70. V2xDMConversion
71. V2xDMConversionFunction
72. V2xDMConversionFunctionLinear
73. V2xDMStack
74. V2xDMMessage
75. V2xDMPdu
76. V2xDMMsgQueue
77. V2xDMStructuredType
78. V2xDMStructuredTypeSequence
79. V2xDMStructuredTypeSequenceChild
80. V2xDMStructuredTypeSequenceOf
81. V2xDMStructuredTypeSequenceOfConstr
82. V2xDMStructuredTypeChoice
83. V2xDMStructuredTypeChoiceOption
84. V2xDMSimpleType
85. V2xDMSimpleTypeBitString
86. V2xDMSimpleTypeBitStringConstr
87. V2xDMSimpleTypeBitStringItem
88. V2xDMSimpleTypeCharString
89. V2xDMSimpleTypeCharStringConstr
90. V2xDMSimpleTypeBoolean
91. V2xDMSimpleTypeEnum
92. V2xDMSimpleTypeEnumerationItem
93. V2xDMSimpleTypeInteger
94. V2xDMSimpleTypeIntegerConstr
95. V2xDMSimpleTypeIntegerItem
96. V2xDMSimpleTypeOctetString
97. V2xDMSimpleTypeOctetStringConstr
98. 发布信息
99. 附录
100. History of 规范 Items
101. 规范 Item History of this document compared to AUTOSAR R24-11.
102. Added 规范 Items in R25-11
103. Changed 规范 Items in R25-11
104. Deleted 规范 Items in R25-11
105. Constraint Item History of this document compared to AUTOSAR R24-11.
106. Added Constraints in R25-11
107. Changed Constraints in R25-11
108. Deleted Constraints in R25-11
109. 规范 Item History of this document compared to AUTOSAR R23-11.
110. Added 规范 Items in R24-11
111. Changed 规范 Items in R24-11
112. Deleted 规范 Items in R24-11
113. Constraint Item History of this document compared to AUTOSAR R23-11.
114. Added Constraints in R24-11
115. Changed Constraints in R24-11
116. Deleted Constraints in R24-11
117. 规范 Item History of this document compared to AUTOSAR R22-11.
118. Added 规范 Items in R23-11
119. Changed 规范 Items in R23-11
120. Deleted 规范 Items in R23-11
121. Constraint Item History of this document compared to AUTOSAR R22-11.
122. Added Constraints in R23-11
123. Changed Constraints in R23-11
124. Deleted Constraints in R23-11
125. 不适用需求
