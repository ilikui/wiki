# Specification of Chinese Vehicle-2-X Management (`ChineseV2XManagement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1031 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_ChineseV2XManagement_1031\AUTOSAR_CP_SWS_ChineseV2XManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_ChineseV2XManagement_1031\AUTOSAR_CP_SWS_ChineseV2XManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_ChineseV2XManagement_1031\zzgen\CP_SWS_ChineseV2XManagement.complete.txt`

## 文档简介

This document specifies the functionality, APIs and the configuration of the AUTOSAR Basic Software module Chinese Vehicle-2-X Management (CnV2xM). The Chinese Vehicle-2-X Management (CnV2xM) together with the Chinese Vehicle-2-X Message (CnV2xMsg), Chinese Vehicle-2-X Network (CnV2xNet), Chinese Vehicle-2-X Security (CnV2xSec) and AUTOSAR BSW module Ethernet Interface (EthIf) forms the Chinese V2X stack within the AUTOSAR architecture. The bases for this document are the Chinese LTE-V2X based standards  . It is assumed that the reader is familiar with these standards.

## 模块依赖

This section describes the relations of CnV2xM module to other modules within the AUTOSAR basic software architecture. It outlines the modules that are required or optional for the realization of CnV2xM module and services.

## 章节结构

1. 简介与功能概述
2. 架构概述
3. 功能概述
4. 缩略语
5. 相关文档
6. 输入文档与相关标准规范
7. 相关规范
8. 约束与假设
9. 限制
10. 适用的车型领域
11. 对其他模块的依赖
12. AUTOSAR Default 错误 Tracer (DET)
13. AUTOSAR Ecu 状态管理器 (EcuM)
14. AUTOSAR Ethernet 接口 (EthIf)
15. AUTOSAR Chinese Vehicle-2-X Message (CnV2xMsg)
16. 需求追踪
17. 功能规范
18. 启动行为
19. 关机行为
20. Common Channel Parameter Acquisition
21. 错误分类
22. Development 错误
23. Runtime 错误
24. Production 错误
25. Extended Production 错误
26. API 规范
27. Imported 类型
28. 类型定义
29. CnV2xM_ConfigType
30. CnV2xM_ChanType
31. 功能定义
32. CnV2xM_Init
33. CnV2xM_GetVersionInfo
34. CnV2xM_GetChanTxParams
35. Callback 通知
36. Scheduled functions
37. CnV2xM_MainFunction
38. Expected 接口
39. Mandatory 接口
40. Optional 接口
41. 时序图
42. CnV2xM 初始化
43. 初始化 of Cellular V2X Drivers
44. 配置规范
45. Containers and 配置 parameters
46. Variants
47. CnV2xM
48. CnV2xMGeneral
49. 附录
50. 不适用需求
51. Change history of AUTOSAR traceable items
52. Traceable item history of this document according to AUTOSAR Release R25-11
53. Added 规范 Items in R25-11
54. Changed 规范 Items in R25-11
55. Deleted 规范 Items in R25-11
56. Traceable item history of this document according to AUTOSAR Release R24-11
57. Added 规范 Items in R24-11
58. Changed 规范 Items in R24-11
59. Deleted 规范 Items in R24-11
60. Traceable item history of this document according to AUTOSAR Release R23-11
61. Added 规范 Items in R23-11
62. Changed 规范 Items in R23-11
63. Deleted 规范 Items in R23-11
