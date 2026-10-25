# Specification of Chinese Vehicle-2-X Security (`ChineseV2XSecurity`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1032 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_ChineseV2XSecurity_1032\AUTOSAR_CP_SWS_ChineseV2XSecurity.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_ChineseV2XSecurity_1032\AUTOSAR_CP_SWS_ChineseV2XSecurity.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_ChineseV2XSecurity_1032\zzgen\CP_SWS_ChineseV2XSecurity.complete.txt`

## 文档简介

This document specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Chinese Vehicle-2-X Security (CnV2xSec).

The Chinese Vehicle-2-X Security (CnV2xSec) together with the Chinese Vehicle-2-X Message (CnV2xMsg), Chinese Vehicle-2-X Management (CnV2xM), Chinese Vehicle-2-X Network (CnV2xNet) forms the Chinese V2X stack within the AUTOSAR architecture.

The bases for this document are the Chinese LTE-V2X based standards . It is assumed that the reader is familiar with these standards.

## 模块依赖

This section describes the relations of the CnV2xSec module to other modules within the AUTOSAR basic software architecture. It outlines the modules that are required or optional for the realization of the CnV2xSec module and the CnV2xSec services that these modules use.

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
10. Known 限制 in AUTOSAR R22-11
11. 适用的车型领域
12. 对其他模块的依赖
13. AUTOSAR Default 错误 Tracer (DET)
14. AUTOSAR Ecu 状态管理器 (EcuM)
15. AUTOSAR CnV2xMsg
16. AUTOSAR Csm
17. AUTOSAR NvM
18. 需求追踪
19. 功能规范
20. 启动行为
21. Security 功能性规范
22. Encapsulation and Decapsulation
23. Pseudonym 管理
24. 错误分类
25. Development 错误
26. Runtime 错误
27. Production 错误
28. Extended Production 错误
29. API 规范
30. Imported 类型
31. 类型定义
32. CnV2xSec_ConfigType
33. CnV2xSec_SecProfileType
34. CnV2xSec_SecReportType
35. CnV2xSec_SecReturnType
36. 功能定义
37. CnV2xSec_Init
38. CnV2xSec_GetVersionInfo
39. CnV2xSec_ReqEncap
40. CnV2xSec_ReqDecap
41. Call-back 通知
42. CSM callback 接口
43. Scheduled functions
44. CnV2xSec_MainFunction
45. Expected 接口
46. Mandatory 接口
47. Optional 接口
48. 时序图
49. Encapsulation
50. Decapsulation
51. Update Pseudonym
52. 配置规范
53. Containers and 配置 parameters
54. Variants
55. CnV2xSec
56. CnV2xSecGeneral
57. 附录
58. 不适用需求
59. History of 规范 Items
60. 规范 Item History of this document compared to AUTOSAR R24-11.
61. Added 规范 Items in R25-11
62. Changed 规范 Items in R25-11
63. Deleted 规范 Items in R25-11
64. 规范 Item History of this document compared to AUTOSAR R23-11.
65. Added 规范 Items in R24-11
66. Changed 规范 Items in R24-11
67. Deleted 规范 Items in R24-11
68. 规范 Item History of this document compared to AUTOSAR R22-11.
69. Added 规范 Items in R23-11
70. Changed 规范 Items in R23-11
71. Deleted 规范 Items in R23-11
