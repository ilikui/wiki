# Specification of Wireless Ethernet Transceiver Driver (`WirelessEthernetTransceiverDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 799 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_WirelessEthernetTransceiverDriver_799\AUTOSAR_CP_SWS_WirelessEthernetTransceiverDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_WirelessEthernetTransceiverDriver_799\AUTOSAR_CP_SWS_WirelessEthernetTransceiverDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_WirelessEthernetTransceiverDriver_799\zzgen\CP_SWS_WirelessEthernetTransceiverDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Ethernet Wireless driver.

In the AUTOSAR Layered Software Architecture, the Wireless Ethernet Transceiver driver belongs to the Microcontroller Abstraction Layer, or more precisely, to the Communication Drivers.

This indicates the main task of the Wireless Ethernet Transceiver driver:

Provide to the upper layer (Ethernet Interface) a hardware independent interface comprising multiple equal transceivers. This interface shall be uniform for all transceivers. Thus, the upper layer (Ethernet Interface) may access the underlying bus system in a uniform manner. The interface provides functionality for initialization, configuration and data transmission. The configuration of the Wireless Ethernet Transceiver driver however is bus specific, since it takes into account the specific features of the communication controller.

A single Wireless Ethernet Transceiver driver module supports only one type of transceiver hardware. The Wireless Ethernet Transceiver driver's prefix requires a unique namespace. The Ethernet Interface can access different Wireless Ethernet controller types using different Wireless Ethernet Transceiver drivers using this prefix. The decision which driver to use to access a particular transceiver is a configuration parameter of the Ethernet Interface.

Figure  depicts the lower part of the Wireless Ethernet stack. One Ethernet Interface can access several transceivers using several Wireless Ethernet Transceiver drivers. Each transceiver may support multiple radio configurations.

## 模块依赖

This chapter lists the modules interacting with the Wireless Ethernet Transceiver Driver module.

Modules that use Wireless Ethernet Transceiver Driver module:

* Ethernet Interface (EthIf)

Modules used by the Wireless Ethernet Transceiver Driver module:

* Wireless Ethernet Controller Driver (WEth) to abstract the hardware access via an transceiver dependent interface
* Typically the V2X modem and/or the transceiver hardware is an external device that is accessed by an existing communication driver such as SPI.

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
10. 需求追踪
11. 功能规范
12. Wireless Ethernet BSW stack
13. Indexing scheme
14. 需求
15. 收发器 Parameters
16. Key/Value Parameter 映射
17. MainFunction
18. V2X Specific 收发器需求
19. 唤醒支持
20. 错误分类
21. Development 错误
22. Runtime 错误
23. Production 错误
24. Extended Production 错误
25. 安全事件
26. API 规范
27. Imported 类型
28. 类型定义
29. WEthTrcv_ConfigType
30. WEthTrcv_SetRadioParamIdType
31. WEthTrcv_SetChanRxParamIdType
32. WEthTrcv_SetChanTxParamIdType
33. WEthTrcv_GetChanRxParamIdType
34. WEthTrcv_BandwidthType
35. WEthTrcv_TxPwrLvlType
36. WEthTrcv_RssiType
37. WEthTrcv_RadioModeType
38. 功能定义
39. WEthTrcv_Init
40. WEthTrcv_SetTransceiverMode
41. WEthTrcv_GetTransceiverMode
42. WEthTrcv_GetLinkState
43. WEthTrcv_SetRadioParams
44. WEthTrcv_SetChanRxParams
45. WEthTrcv_SetChanTxParams
46. WEthTrcv_GetChanRxParams
47. WEthTrcv_GetVersionInfo
48. Callback 通知
49. Scheduled functions
50. WEthTrcv_MainFunction
51. Expected 接口
52. Mandatory 接口
53. Optional 接口
54. Configurable 接口
55. 服务接口
56. 时序图
57. 配置规范
58. How to read this chapter
59. Containers and 配置 parameters
60. WEthTrcv
61. WEthTrcvConfigSet
62. WEthTrcvConfig
63. WEthTrcvDemEventParameterRefs
64. WEthTrcvRadioConfigSet
65. WEthTrcvRadioConfig
66. WEthTrcvRadioChannelTxQueueConfig
67. WEthTrcvAntennaConfigSet
68. WEthTrcvAntennaConfig
69. WEthTrcvGeneral
70. 发布信息
71. 附录
72. Change history of AUTOSAR traceable items
73. Traceable item history of this document according to AUTOSAR Release R25-11
74. Added 规范 Items in R25-11
75. Changed 规范 Items in R25-11
76. Deleted 规范 Items in R25-11
77. Added Constraints in R25-11
78. Changed Constraints in R25-11
79. Deleted Constraints in R25-11
80. Traceable item history of this document according to AUTOSAR Release R24-11
81. Added 规范 Items in R24-11
82. Changed 规范 Items in R24-11
83. Deleted 规范 Items in R24-11
84. Added Constraints in R24-11
85. Changed Constraints in R24-11
86. Deleted Constraints in R24-11
87. Traceable item history of this document according to AUTOSAR Release R23-11
88. Added 规范 Items in R23-11
89. Changed 规范 Items in R23-11
90. Deleted 规范 Items in R23-11
91. Added Constraints in R23-11
92. Changed Constraints in R23-11
93. Deleted Constraints in R23-11
