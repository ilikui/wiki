# AUTOSAR 1000 问｜逐题覆盖矩阵与补全队列

> 本页用于管理“原始问题 → 已有答案 → 待补缺口”的关系。它是维护工作表，不代表全部问题已经完成。问题主表保留原文；新增答案优先拆成可独立复习、可验证的专题文档。

## 1. 已有专题答案入口

| 主题 | 已有答案 / 工程清单 | 当前覆盖边界 |
|---|---|---|
| 基础架构、RTE、SW-C、CAN 通信 | [基础架构与通信栈第一批答案](../../types/autosar/answers/基础架构与通信栈第一批答案.md)；[RTE Event、Runnable 调度与跨核 IOC 实战](rte-events-runnable-scheduling-ioc.md) | 已覆盖分层架构、RTE 事件、Runnable 映射、周期时序、DataReceivedEvent、OperationInvokedEvent 与跨核 IOC 排查；仍需按项目生成代码与配置验证 |
| NvM 数据模型 | [RAM/ROM Default 与 NV Block](nvm-ram-rom-nv-block-model.md) | 数据块与初始化模型；后续补齐冗余块、CRC、恢复路径及掉电一致性验证 |
| NvM 写入策略 | [Immediate 与 Periodic](nvm-immediate-periodic-strategy.md) | 写入策略与取舍；需补齐写入触发、队列/取消、作业状态与持久化验证 |
| NvM 关机保存 | [关机保存时序与完成判据](nvm-shutdown-save-timing.md) | 关机预算和异步完成判据；需结合具体 EcuM/BswM/供应商实现验证 |
| 诊断集成 | [诊断配置集成自检清单](diagnostics-integration-preflight-checklist.md) | 集成前检查；需继续补齐端到端请求/响应追踪与负向测试 |
| Dcm 多传输 | [CAN 与 DoIP 多诊断传输路径](dcm-can-doip-multiprotocol-routing.md) | 多协议路由概念；需验证项目中 Protocol、连接、PduId 与传输层映射 |
| Dcm 配置 | [Session、Security、DID 与 Routine](dcm-configuration-session-security-did-routine.md) | 常见诊断配置链；DID 范围、访问权限和回调细节需以 OEM 规范及项目配置为准 |
| CAN 故障恢复 | [CAN Bus-Off 恢复排查](can-busoff-recovery.md) | 从控制器到 CanSM/BswM 的排查路径；恢复策略和计时行为需核对版本及供应商配置 |
| 启动与网络唤醒 | [EcuM 启动初始化失败](ecum-startup-init-failure.md)、[EcuM 唤醒验证](ecum-wakeup-validation.md) | 启动链和唤醒链；仍需补齐 Shutdown/PostRun、复位原因与跨模块时序 |
| 诊断事件管理 | [Dcm/Dem/Det 答案](answers-diagnostics-dcm-dem-det.md)、[FiM/UDS/刷写答案](answers-diagnostics-fim-uds-flashing.md) | 诊断服务与事件管理；需继续逐项补齐 DTC 状态、去抖、快照/扩展数据和刷写异常路径 |
| V 模型与验证 | [V 模型开发与验证流程](v-model-development-and-verification.md) | 流程概览；需将需求、设计、代码、测试用例、结果证据建立可追溯关系 |

## 2. 按问题主表分组的覆盖状态

| 问题分组 | 当前状态 | 主要待补内容 |
|---|---|---|
| 基础概念 / 分层架构 | 部分覆盖 | 创始历史的官方来源、架构边界、标准版本差异 |
| RTE 深入 / SW-C 设计 | 部分覆盖 | TimingEvent、DataReceivedEvent、OperationInvokedEvent；S/R 与 C/S；queued/non-queued；跨核 IOC |
| 通信栈 / PDU 路由 | 部分覆盖 | Tx/Rx 回调完整链、网关路由、PDU/Signal 配置核对、周期抖动定位 |
| CanNm / ComM / BswM / EcuM | 部分覆盖 | Repeat Message、Bus-Sleep 条件、Partial Networking、PostRun/Shutdown 的完整时序 |
| 诊断 / UDS / Dcm / Dem / Det / FiM | 部分覆盖 | 0x19 子功能、DID/RID 权限、Session/Security、负响应、DTC 状态和刷写恢复 |
| NvM / MemIf / Fee / Fls | 部分覆盖 | Redundant Block 判定、CRC、恢复/重试、写作业状态、Flash 磨损与掉电验证 |
| OS / 调度 / 多核 / IOC | 待系统扩写 | 优先级反转、ScheduleTable、ISR 分类、资源保护、Spinlock、内存保护 |
| 功能安全 / E2E / WdgM | 待系统扩写 | E2E Profile 适用边界、错误状态处理、程序流监控和安全机制证据 |
| SecOC / Crypto / 密钥管理 | 待系统扩写 | Freshness、Authenticity、密钥生命周期、硬件/软件密码实现差异 |
| Adaptive / SOME/IP / DDS | 部分覆盖 | 服务发现、事件/请求响应、Execution Management、Classic 与 Adaptive 的边界 |
| CDD / ARXML / 工具链自动化 | 部分覆盖 | ARXML 语义 diff、XSD/模型校验、生成器 CI、配置依赖图 |
| 测试 / V 模型 / 工程集成 | 部分覆盖 | 单元测试桩、SIL/HIL 选择、测试追溯、可复现构建和证据归档 |
| CAN Bus-Off | 已有专项指南 | 需按实际 CanSM/CanIf/MCAL 配置做项目化验证，不把示例当规范要求 |

## 3. 后续补全顺序

1. **RTE 与 SW-C**：逐题补齐触发事件、数据一致性、缓冲区、任务映射和 IOC。
2. **通信与网络管理**：补齐 COM/PduR/CanIf 的发送/接收回调链，以及 ComM/CanNm/BswM/EcuM 的睡眠与唤醒联动。
3. **诊断与存储**：按 UDS 服务、DTC 状态、Dcm 权限、NvM 作业状态建立可测试案例。
4. **OS、多核与安全**：为每个专题增加时序图、配置检查点、测试用例和常见误判。
5. **工具链与版本差异**：对每个答案记录 AUTOSAR Release、工具/供应商、证据来源；没有项目证据的地方标注为通用解释或待验证。

## 4. 答案质量门槛

- 每篇答案明确适用范围：AUTOSAR Release、平台（Classic/Adaptive）、工具或供应商差异。
- 关键流程至少包含一张 Mermaid 图或等价步骤表，以及可以实际执行的检查清单。
- 区分规范要求、工具生成行为、供应商实现和项目经验。
- 每个故障排查主题至少包含：症状、优先检查点、观测证据、根因分支、修复后回归验证。
- 只有完成原始问题映射、答案核验和索引更新后，才将对应 Flomo 笔记标记为已迁移；不得自动删除原始笔记。

## 5. 官方参考入口

- [AUTOSAR Standards](https://www.autosar.org/standards)
- [AUTOSAR Classic Platform](https://www.autosar.org/standards/classic-platform)
- [Classic Platform R25-11 Release Overview](https://www.autosar.org/fileadmin/standards/R25-11/CP/AUTOSAR_CP_TR_ReleaseOverview.pdf)

> 当前 AUTOSAR 官方页面列出的 Classic Platform 当前发布版为 R25-11。项目实际适用版本仍应以项目基线为准；不能把较新版本的规范描述直接套用到旧版项目。


### 新增 RTE Buffer 专题

- [Queued / Non-queued、数据一致性与新鲜度](rte-buffer-data-consistency-queued-nonqueued.md)
