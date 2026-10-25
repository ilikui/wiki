# AUTOSAR 模块笔记库

由 `_gen_notes.py` 自动生成于 2026-09-21 19:41，覆盖 `F:\Work\Standards\01_Sources` 下全部 334 个官方规范文档。

## 统计

| 平台 | 类别 | 数量 | 说明 | 索引 |
|---|---|---|---|---|
| AP | EXP | 13 | 解释性指南（Explanation） | [AP/EXP/index.md](AP/EXP/index.md) |
| AP | MOD | 3 | 元模型（Model） | [AP/MOD/index.md](AP/MOD/index.md) |
| AP | RS | 14 | 需求规范（Requirements Specification） | [AP/RS/index.md](AP/RS/index.md) |
| AP | SRC | 1 | 源码头文件（Source） | [AP/SRC/index.md](AP/SRC/index.md) |
| AP | SWS | 25 | 软件模块规范（Software Specification） | [AP/SWS/index.md](AP/SWS/index.md) |
| AP | TPS | 3 | 模板规范（Template Specification） | [AP/TPS/index.md](AP/TPS/index.md) |
| AP | TR | 6 | 技术报告（Technical Report） | [AP/TR/index.md](AP/TR/index.md) |
| CP | EXP | 22 | 解释性指南（Explanation） | [CP/EXP/index.md](CP/EXP/index.md) |
| CP | MOD | 5 | 元模型（Model） | [CP/MOD/index.md](CP/MOD/index.md) |
| CP | RS | 43 | 需求规范（Requirements Specification） | [CP/RS/index.md](CP/RS/index.md) |
| CP | SWS | 115 | 软件模块规范（Software Specification） | [CP/SWS/index.md](CP/SWS/index.md) |
| CP | TPS | 7 | 模板规范（Template Specification） | [CP/TPS/index.md](CP/TPS/index.md) |
| CP | TR | 12 | 技术报告（Technical Report） | [CP/TR/index.md](CP/TR/index.md) |
| FO | ASWS | 1 | 自适应软件规范（Adaptive SWS） | [FO/ASWS/index.md](FO/ASWS/index.md) |
| FO | EXP | 7 | 解释性指南（Explanation） | [FO/EXP/index.md](FO/EXP/index.md) |
| FO | MMOD | 2 | 元模型基础（Meta-Model） | [FO/MMOD/index.md](FO/MMOD/index.md) |
| FO | MOD | 5 | 元模型（Model） | [FO/MOD/index.md](FO/MOD/index.md) |
| FO | PRS | 13 | 协议规范（Protocol Specification） | [FO/PRS/index.md](FO/PRS/index.md) |
| FO | RS | 19 | 需求规范（Requirements Specification） | [FO/RS/index.md](FO/RS/index.md) |
| FO | TPS | 8 | 模板规范（Template Specification） | [FO/TPS/index.md](FO/TPS/index.md) |
| FO | TR | 10 | 技术报告（Technical Report） | [FO/TR/index.md](FO/TR/index.md) |

## 核心模块速查（学习路线优先级）

| 优先级 | 模块 | 主题 | 笔记 |
|---|---|---|---|
| 1 | BSWDistributionGuide | BSW 分布与多核部署指南 | [BSWDistributionGuide](CP/EXP/BSWDistributionGuide.md) |
| 2 | ModeManagementGuide | 模式管理指南（CP 核心概念） | [ModeManagementGuide](CP/EXP/ModeManagementGuide.md) |
| 3 | RTE | RTE 运行时环境（CP 核心） | [RTE](CP/SWS/RTE.md) |
| 4 | OS | 操作系统（OSEK 血统） | [OS](CP/SWS/OS.md) |
| 5 | ECUStateManager | ECU 状态管理（EcuM） | [ECUStateManager](CP/SWS/ECUStateManager.md) |
| 6 | BSWModeManager | BSW 模式管理（BswM） | [BSWModeManager](CP/SWS/BSWModeManager.md) |
| 7 | CANInterface | CAN 接口（含官方分层架构图） | [CANInterface](CP/SWS/CANInterface.md) |
| 8 | PDURouter | PDU 路由器（通信栈枢纽） | [PDURouter](CP/SWS/PDURouter.md) |
| 9 | COM | COM 信号收发 | [COM](CP/SWS/COM.md) |
| 10 | COMManager | 通信管理器（ComM） | [COMManager](CP/SWS/COMManager.md) |
| 11 | DiagnosticCommunicationManager | 诊断通信管理（DCM/UDS） | [DiagnosticCommunicationManager](CP/SWS/DiagnosticCommunicationManager.md) |
| 12 | DiagnosticEventManager | 诊断事件管理（Dem/DTC） | [DiagnosticEventManager](CP/SWS/DiagnosticEventManager.md) |
| 13 | NVRAMManager | NvRAM 管理（NvM） | [NVRAMManager](CP/SWS/NVRAMManager.md) |
| 14 | E2ELibrary | E2E 端到端保护库 | [E2ELibrary](CP/SWS/E2ELibrary.md) |
| 15 | TcpIp | TCP/IP 协议栈 | [TcpIp](CP/SWS/TcpIp.md) |
| 16 | SOMEIPTransformer | SOME/IP 序列化 | [SOMEIPTransformer](CP/SWS/SOMEIPTransformer.md) |
| 17 | CryptoServiceManager | 加密服务管理器（CSM） | [CryptoServiceManager](CP/SWS/CryptoServiceManager.md) |
| 18 | SystemTemplate | 系统模板（系统描述建模） | [SystemTemplate](CP/TPS/SystemTemplate.md) |
| 19 | SoftwareComponentTemplate | 软件组件模板（SWC 建模） | [SoftwareComponentTemplate](CP/TPS/SoftwareComponentTemplate.md) |
| 20 | ECUConfiguration | ECU 配置参数定义 | [ECUConfiguration](CP/TPS/ECUConfiguration.md) |
| 21 | PlatformDesign | AP 平台设计总览（AP 入门首选） | [PlatformDesign](AP/EXP/PlatformDesign.md) |
| 22 | SWArchitecture | AP 软件架构视图 | [SWArchitecture](AP/EXP/SWArchitecture.md) |
| 23 | ARAComAPI | ara::com API 详解 | [ARAComAPI](AP/EXP/ARAComAPI.md) |
| 24 | CommunicationManagement | ara::com 通信管理 | [CommunicationManagement](AP/SWS/CommunicationManagement.md) |
| 25 | Core | ara::core 基础库 | [Core](AP/SWS/Core.md) |
| 26 | ExecutionManagement | 执行管理（EM） | [ExecutionManagement](AP/SWS/ExecutionManagement.md) |
| 27 | StateManagement | 状态管理（SM） | [StateManagement](AP/SWS/StateManagement.md) |

## 使用说明

- 每篇笔记含：元信息表、本地 PDF/ARXML/纯文本路径、自动提取的简介与模块依赖、**章节详细内容**（每章中文标题 + 原文标题 + 正文节选，每章至多约 1200 字符，超出部分见纯文本全文）。
- 笔记为自动提取的骨架，深入细节请点开本地 PDF 或纯文本全文阅读。
- 想要重新生成/更新：`python F:\Work\AUTOSAR_Module_Notes\_gen_notes.py`
