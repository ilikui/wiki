# Specification of Wireless Ethernet Driver (`WirelessEthernetDriver`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 798 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_WirelessEthernetDriver_798\AUTOSAR_CP_SWS_WirelessEthernetDriver.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_WirelessEthernetDriver_798\AUTOSAR_CP_SWS_WirelessEthernetDriver.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_WirelessEthernetDriver_798\zzgen\CP_SWS_WirelessEthernetDriver.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module Wireless Ethernet driver.

In the AUTOSAR Layered Software Architecture, the Wireless Ethernet driver belongs to the Microcontroller Abstraction Layer, or more precisely, to the Communication Drivers.

This indicates the main task of the Wireless Ethernet driver:

Provide to the upper layer (Ethernet Interface) a hardware independent interface comprising multiple equal controllers. This interface shall be uniform for all controllers. Thus, the upper layer (Ethernet Interface) may access the underlying bus system in a uniform manner. The interface provides functionality for initialization, configuration and data transmission. The configuration of the Wireless Ethernet Driver however is bus specific, since it takes into account the specific features of the communication controller.

A single Wireless Ethernet driver module supports only one type of controller hardware. The Wireless Ethernet driver's prefix requires a unique namespace. The Ethernet Interface can access different controller types using different Wireless Ethernet drivers using this prefix. The decision which driver to use to access a particular controller is a configuration parameter of the Ethernet Interface.

Figure  depicts the lower part of the Wireless Ethernet stack. One Ethernet Interface can access several radios using several Wireless Ethernet Transceiver drivers. Each radio may support multiple contexts i.e. multiple radio channel configurations.

Note: The Wireless Ethernet driver is specified in a way that allows for object code delivery of the code module, following the "one-fits-all" principle, i.e. the entire configuration of the Ethernet Interface can be carried out without modifying any source code. Thus, the configuration of the Wireless Ethernet driver can be carried out largely without detailed knowledge of the Wireless Ethernet driver software.

## 模块依赖

This chapter lists the modules interacting with the Wireless Ethernet Driver module.

Modules that use Wireless Ethernet Driver module:

* Ethernet Interface (EthIf)
* Wireless Ethernet Transceiver (WEthTrcv)

Modules used by the Wireless Ethernet Driver module:

* Typically, the wireless radio hardware is an external device that is accessed by an existing communication driver such as SPI.

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
13. Wireless Ethernet BSW stack
14. Indexing scheme
15. 收发器配置
16. 通用需求
17. Reception
18. Transmission
19. Indirect 数据 provision
20. Direct 数据 provision
21. Transmission confirmation
22. Transmission buffer 处理
23. Controller on-packet-base parameters
24. Key/Value Parameter 映射
25. V2X Specific Controller 需求
26. 错误分类
27. Development 错误
28. Runtime 错误
29. Production 错误
30. Extended Production 错误
31. 安全事件
32. API 规范
33. Imported 类型
34. 类型定义
35. WEth_ConfigType
36. WEth_BufWRxParamIdType
37. WEth_BufWTxParamIdType
38. 功能定义
39. WEth_Init
40. WEth_SetControllerMode
41. WEth_GetControllerMode
42. WEth_GetPhysAddr
43. WEth_SetPhysAddr
44. WEth_UpdatePhysAddrFilter
45. WEth_ProvideTxBuffer
46. WEth_Transmit
47. WEth_TxConfirmation
48. WEth_Receive
49. WEth_ImmediateTransmit
50. WEth_GetWEtherStats32
51. WEth_GetWEtherStats64
52. WEth_WriteTrcvRegs
53. WEth_ReadTrcvRegs
54. WEth_GetBufWRxParams
55. WEth_GetBufWTxParams
56. WEth_SetBufWTxParams
57. WEth_GetVersionInfo
58. WEth_TriggerPriorityQueueTransmit
59. Callback 通知
60. Scheduled functions
61. WEth_MainFunction
62. Expected 接口
63. Mandatory 接口
64. Optional 接口
65. Configurable 接口
66. 时序图
67. 配置规范
68. Containers and 配置 parameters
69. Variants
70. WEth
71. WEthConfigSet
72. WEthCtrlConfig
73. WEthDemEventParameterRefs
74. WEthGeneral
75. 附录
76. Change history of AUTOSAR traceable items
77. Traceable item history of this document according to AUTOSAR Release R25-11
78. Added 规范 Items in R25-11
79. Changed 规范 Items in R25-11
80. Deleted 规范 Items in R25-11
81. Added Constraints in R25-11
82. Changed Constraints in R25-11
83. Deleted Constraints in R25-11
84. Traceable item history of this document according to AUTOSAR Release R24-11
85. Added 规范 Items in R24-11
86. Changed 规范 Items in R24-11
87. Deleted 规范 Items in R24-11
88. Added Constraints in R24-11
89. Changed Constraints in R24-11
90. Deleted Constraints in R24-11
91. Traceable item history of this document according to AUTOSAR Release R23-11
92. Added 规范 Items in R23-11
93. Changed 规范 Items in R23-11
94. Deleted 规范 Items in R23-11
95. Added Constraints in R23-11
96. Changed Constraints in R23-11
97. Deleted Constraints in R23-11
98. Traceable item history of this document according to AUTOSAR Release R22-11
99. Added Constraints in R22-11
100. Changed Constraints in R22-11
101. Deleted Constraints in R22-11
