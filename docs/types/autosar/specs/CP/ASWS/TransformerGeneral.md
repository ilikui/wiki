# General Specification of Transformers (`TransformerGeneral`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | ASWS — 自适应软件规范（Adaptive SWS） |
| UID | 658 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_ASWS_TransformerGeneral_658\AUTOSAR_CP_ASWS_TransformerGeneral.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_ASWS_TransformerGeneral_658\AUTOSAR_CP_ASWS_TransformerGeneral.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_ASWS_TransformerGeneral_658\zzgen\CP_ASWS_TransformerGeneral.complete.txt`

## 文档简介

Transformer enable AUTOSAR systems to use a data transformation mechanism to linearize and transform data.

Transformers can be concatenated to transformer chains which are executed by the RTE for intra-ECU and inter-ECU communcation that is configured to be transformed.

A transformer provides well defined function signatures per each communication relation (port based and signal based), which is marked for transformation. The function signature depends on the transmitted data elements (Client/Server operation signature or Sender/Receiver interface signature) only. The output of a transformer will be always a linear byte array.

A more powerful system can chain multiple transformers where the input of the first transformer in the chain gets the data from the RTE. Each following transformer uses the output of the preceding transformer as input. All transformers following the first one then have generic signature with just a byte array as IN and OUT parameter. Such an architecture could be used to design systems, where you can flexibly add functionality like safety or security protection to a serialized stream.

## 模块依赖

There are not dependencies to AUTOSAR SWS modules.

## 章节结构

1. 简介与功能概述
2. 缩略语
3. 相关文档
4. Input documents
5. Related standards and norms
6. 相关规范
7. 约束与假设
8. 限制
9. 适用的车型领域
10. 对其他模块的依赖
11. 文件结构
12. 代码文件结构
13. 头文件结构
14. 需求追踪
15. 功能规范
16. Buffer 处理
17. 转换器 Classes
18. Serializer
19. Safety
20. Security
21. Custom
22. 错误处理
23. 错误 of Serializer Transformers
24. 错误 of Safety Transformers
25. 错误 of Security Transformers
26. 错误 of Custom Transformers
27. 错误分类
28. Development 错误
29. Runtime 错误
30. Production 错误
31. Extended Production 错误
32. XFRM_E_MALFORMED_MESSAGE
33. 错误通知
34. API 规范
35. Imported 类型
36. 类型定义
37. 功能定义
38. <Mip>_ExtractProtocolHeaderFields
39. <Mip>_<transformerId>
40. <Mip>_Inv_<transformerId>
41. <Mip>_Init
42. <Mip>_DeInit
43. <Mip>_GetVersionInfo
44. Callback 通知
45. Scheduled functions
46. Expected 接口
47. 时序图
48. 配置规范
49. How to read this chapter
50. Containers and 配置 parameters
51. XfrmGeneral
52. XfrmImplementationMapping
53. XfrmSignal
54. XfrmDemEventParameterRefs
55. 附录
56. Referenced Meta Classes
57. Change history of AUTOSAR traceable items
58. Traceable item history of this document according to AUTOSAR Release R23-11
59. Added 规范 Items in R23-11
60. Changed 规范 Items in R23-11
61. Deleted 规范 Items in R23-11
62. Traceable item history of this document according to AUTOSAR Release R24-11
63. Added 规范 Items in R24-11
64. Changed 规范 Items in R24-11
65. Deleted 规范 Items in R24-11
66. Added Constraints in R24-11
67. Changed Constraints in R24-11
68. Deleted Constraints in R24-11
69. Traceable item history of this document according to AUTOSAR Release R25-11
70. Added 规范 Items in R25-11
71. Changed 规范 Items in R25-11
72. Deleted 规范 Items in R25-11
73. Added Constraints in R25-11
74. Changed Constraints in R25-11
75. Deleted Constraints in R25-11
76. 不适用需求
