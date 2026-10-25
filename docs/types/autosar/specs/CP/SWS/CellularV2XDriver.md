# Specification of Cellular Vehicle-2-X Driver (`CellularV2XDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 1030 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CellularV2XDriver_1030\AUTOSAR_CP_SWS_CellularV2XDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CellularV2XDriver_1030\AUTOSAR_CP_SWS_CellularV2XDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CellularV2XDriver_1030\zzgen\CP_SWS_CellularV2XDriver.complete.txt`

## 文档简介

This specification describes the functionality, API and the configuration for the AUTOSAR Basic Software module Cellular V2X Driver.

In the AUTOSAR Layered Software Architecture, the Cellular V2X driver belongs to the Microcontroller Abstraction Layer if the Cellular V2X controller is on-Chip type (internal), while the Cellular V2X driver belongs to Hardware Abstraction layer if the cellular V2X controller is off-chip type (external).

This indicates the main task of the Cellular V2X driver,which is: Provide to the upper layer (Ethernet Interface for example) a hardware independent interface comprising multiple equal controllers. This interface shall be uniform for all controllers. Thus, the upper layer (Ethernet Interface for example) may access the underlying bus system in a uniform manner. The interface provides functionality for initialization, configuration and data transmission and facilities to manage/observe the lifecycle of the hardware. The configuration of the Cellular V2X Driver however is bus specific, since it takes into account the specific features of the wireless communication controller.

A single Cellular V2X driver module supports only one type of Cellular V2X hardware. The Cellular V2X driver's prefix requires a unique namespace. The Ethernet Interface can access different controller types using different Cellular V2X drivers using this prefix. The decision which driver to use to access a particular controller is a configuration parameter of the Ethernet Interface.

Figure 1 depicts an example of the lower part of the Cellular V2X stack. One Ethernet Interface can access several Cellular V2X hardware units, using several Cellular V2X drivers.

Note:

# Typically, Cellular V2X hardware includes both Cellular V2X RF transceiver and Cellular V2X Controller. There is no separated Cellular V2X transceiver/controller in the market, and cellular V2X transceiver is not controlled directly by ECU, therefore transceiver driver for Cellular V2X is not needed. In order to keep the naming consistent in AUTOSAR, "controller" is also used in this document to present the Cellular V2X hardware.
# The Cellular V2X driver is specified in a way that allows for object code delivery of the code module, following the "one-fits-all" principle, i.e. the entire configuration of the Ethernet Interface can be carried out without modifying any source code. Thus, the configuration of the Cellular V2X driver can be carried out largely without detailed knowledge of 

## 模块依赖

This chapter lists the modules interacting with the Cellular V2X Driver module.

Modules that use Cellular V2X Driver module:

* Ethernet Interface (EthIf)

## 章节结构

1. 简介与功能概述
2. 缩略语
3. 相关文档
4. 输入文档与相关标准规范
5. 相关规范
6. 约束与假设
7. 限制
8. 适用的车型领域
9. 对其他模块的依赖
10. 驱动服务
11. 需求追踪
12. 功能规范
13. Cellular V2X BSW stack
14. Indexing scheme
15. 通用需求
16. Per-packet-base parameters
17. Key/Value parameter 映射
18. 错误分类
19. Development 错误
20. Runtime 错误
21. Production 错误
22. Extended Production 错误
23. API 规范
24. Imported 类型
25. 类型定义
26. CV2x_ConfigType
27. CV2x_StateType
28. CV2x_BufCV2xPC5RxParamIdType
29. CV2x_BufCV2xPC5TxParamIdType
30. CV2x_GetChanTxParamIdType
31. 功能定义
32. CV2x_Init
33. CV2x_GetVersionInfo
34. CV2x_SetControllerMode
35. CV2x_GetControllerMode
36. CV2x_ProvideTxBuffer
37. CV2x_Transmit
38. CV2x_TxConfirmation
39. CV2x_Receive
40. CV2x_GetBufCV2xPC5RxParams
41. CV2x_GetBufCV2xPC5TxParams
42. CV2x_SetBufCV2xPC5TxParams
43. CV2x_GetChanCV2xPC5TxParams
44. Callback 通知
45. Scheduled functions
46. CV2x_MainFunction
47. Expected 接口
48. Mandatory 接口
49. Optional 接口
50. Configurable 接口
51. 时序图
52. 配置规范
53. Containers and 配置 parameters
54. Variant
55. CV2x
56. CV2xGeneral
57. CV2xConfigSet
58. CV2xCtrlConfig
59. CV2xDemEventParameterRefs
60. 附录
61. 不适用需求
62. Change history of AUTOSAR traceable items
63. Traceable item history of this document according to AUTOSAR Release R23-11
64. Added 规范 Items in R24-11
65. Changed 规范 Items in R24-11
66. Deleted 规范 Items in R24-11
67. Added Constraints in R24-11
68. Changed Constraints in R24-11
69. Deleted Constraints in R24-11
70. Added 规范 Items in R23-11
71. Changed 规范 Items in R23-11
72. Deleted 规范 Items in R23-11
73. Added Constraints in R23-11
74. Changed Constraints in R23-11
75. Deleted Constraints in R23-11
