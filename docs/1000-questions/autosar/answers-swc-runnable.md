# AUTOSAR 1000问：SW-C、Runnable 与接口设计

> 从 Flomo 原始笔记迁移的 8 条完整问答。各节保留来源链接；工程配置细节以项目实际 AUTOSAR 版本、工具链与生成代码为准。

## 1. SWC 类型 Q1：Application、Service、Sensor-Actuator、Composition SW-C 如何区分？

- **Application SW-C**：承载应用算法与业务逻辑，如控制计算、巡航逻辑、电池管理功能。
- **Service SW-C**：以组件接口封装系统级服务，如诊断、存储、日志、模式管理等；具体服务划分需与项目架构约定一致。
- **Sensor-Actuator SW-C**：在应用架构中封装传感器输入和执行器输出，作为应用逻辑与底层 I/O 服务之间的边界。实际硬件访问仍由对应 BSW/MCAL 或项目规定的驱动路径完成。
- **Composition SW-C**：把多个 SW-C 以有语义的端口连接组织为一个可复用组合单元，本身通常不实现业务算法。

判断时问：它主要是“算业务逻辑、提供服务、封装 I/O，还是组织其他组件”？

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjU0NDY1NzM3)

## 2. SWC 类型 Q2：Composition SW-C 与普通文件夹有什么区别？

Composition SW-C 不只是把组件放在一起，而是用组合结构描述子组件、内部连接、端口委派和对外接口：

- 模块化复用：将相关 SW-C 作为整体复用和部署。
- 封装抽象：对外暴露组合接口，隐藏内部组件细节。
- 结构化连接：明确子组件之间的连接关系，影响系统描述与 RTE 生成。
- 分层设计：允许子组合继续组成更高层组合。

文件夹仅是文件组织方式，不表达 AUTOSAR 组件间的连接语义，也不会因为文件夹结构本身改变 RTE 行为。

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjU0NDY1ODM1)

## 3. SWC 类型 Q3：Sender-Receiver 与 Client-Server 接口分别适合什么场景？

- **Sender-Receiver（S/R）**：用于数据传递与分发，适合周期信号、传感器数据和状态广播。发送端写入数据，接收端读取数据；具体是否排队、是否有新数据标志等由接口配置决定。
- **Client-Server（C/S）**：用于调用操作并取得执行结果，适合查询、计算、服务请求等具有操作语义的场景。

把请求-响应错误地建模成普通 S/R，容易丢失明确的返回值、错误传播和调用语义，并迫使调用方自己设计等待/轮询协议。应按“数据发布”还是“请求执行并取得结果”选择接口。

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjU0NDY1OTIw)

## 4. SWC 类型 Q3：如何配置一个 SW-C？

可以按四组检查项拆解：

1. **对外接口**：定义 P-Port/R-Port 与相应 Port Interface，例如 S/R、C/S、Mode-Switch、NvData。
2. **内部行为**：定义 Runnable 及触发事件，如 TimingEvent、DataReceivedEvent、OperationInvokedEvent、InitEvent。
3. **数据类型**：确认 Application Data Type、Implementation Data Type 及其映射。
4. **ECU 集成**：在集成工具中配置 SWC 到 ECU 的映射、Runnable 到 Task 的映射、Port Connector，以及分区/核部署。

常见工作流：在 SWC 设计工具中定义组件并导出 ARXML → ECU 配置工具导入并完成映射和连接 → 校验 → 生成 RTE。注意事件类型与 Task 的匹配、端口连接是否完整，以及设计侧修改后是否重新导入。工具职责和菜单名称随工具版本而异。

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjYxMzU1MTQ3)

## 5. SWC 类型 Q4：Runnable 怎么配置并映射到 Task？

Runnable 是 SW-C 中可被调度的执行单元；Task 决定执行上下文和时机。Runnable 本体与触发事件通常在 SWC 设计阶段定义，再在 ECU 集成配置中映射到 OS Task。

- TimingEvent：按周期触发，应与实际 Task/调度配置协调。
- DataReceivedEvent：数据到达时触发，需确认事件关联、数据更新语义及实际调度延迟。
- OperationInvokedEvent：客户端调用服务操作时触发。
- InitEvent：初始化阶段触发。
- 一个 Runnable 的映射约束、多个 Runnable 在同一 Task 内的顺序和调度规则，要以项目所用工具及 AUTOSAR 版本的校验规则为准，不应只依赖声明顺序。

建议流程：定义 Runnable 与事件 → 导出/导入 ARXML → 完成 ECU 与 Task 映射 → Validate → Generate → 检查生成的 RTE 包装函数与 OS 调度配置。

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjYxMzU2MjA5)

## 6. RTE 深入 Q2：Runnable 触发事件有哪些？

- **TimingEvent**：定时触发，适合周期计算、周期采样、控制环等。
- **DataReceivedEvent**：收到指定 S/R 数据时触发，适合数据驱动处理。
- **OperationInvokedEvent**：C/S 操作被调用时触发，适合服务型组件。
- **ModeSwitchEvent**：模式变化时触发相关行为。
- **InitEvent**：组件初始化时触发。
- **ExternalTriggerEvent**：由配置定义的外部触发源触发。

选择原则是区分“到点执行”与“事件发生才执行”，再核对数据语义、Task 映射、执行延迟和负载。可用事件及其具体行为受 AUTOSAR 版本和配置约束。

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjUzOTEzNDYz)

## 7. RTE 深入 Q4：Runnable 执行超时由谁处理？与 Watchdog 有什么关系？

RTE 的核心职责是接口与数据通信，不应把它当作通用的 Runnable 执行时间监控器。超时检测与故障处置通常涉及：

1. **OS Timing Protection**：根据配置的执行时间预算等约束检测任务执行超限，并按 OS 配置处理。
2. **WdgM Deadline Supervision**：通过配置的 Checkpoint 等监控关键程序路径是否满足时限。
3. **WdgM Alive/Logical Supervision**：分别用于活性和程序流逻辑监控。
4. **系统故障反应**：监控失败后，状态上报、BswM 协调、安全状态或复位策略由项目安全概念和配置决定。

RTE 可能表现为数据更新变晚或数据陈旧，但实际检测、上报和恢复路径应从 OS、WdgM、BswM 及项目配置验证。

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjUzOTIxNTU3)

## 8. SW-C 设计与应用层实践 Q2：同一 SW-C 内两个 Runnable 共享数据，应使用 S/R 还是全局变量？

优先考虑由 RTE 管理的 SW-C 内部数据（Internal Behavior 中定义的内部变量/IRV 等适用机制），而不是未经约束的裸全局变量。

- **同一 SW-C 内部共享**：根据组件设计使用内部变量及对应的 RTE 访问机制，明确 Runnable 间的数据一致性和生命周期语义。
- **跨 SW-C 通信**：通过 S/R 或 C/S Port/Interface 表达组件边界和通信契约。
- **避免裸全局变量的原因**：容易破坏封装、可移植性和可追溯性，并可能引入并发访问问题。

具体内部变量类型、API 名称和 implicit/explicit 访问方式，应按使用的 AUTOSAR 版本、SWC 模型和生成器确认。

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjU0OTY0NjUx)

---

## 迁移状态

以上 8 条来源笔记均已通过 Flomo 批量读取确认正文完整，再整理到本文件。此文件只覆盖列出的条目，不代表 AUTOSAR 题库整体完成。
