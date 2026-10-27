# AUTOSAR RTE 与 Runnable：快速检查清单

RTE 是 SW-C 与底层通信、调度及部分 BSW 接口之间的生成式连接层。Runnable 是执行应用逻辑的单元，通常由配置的 RTE Event 触发，并映射到 OS Task。

## 先检查配置

1. ARXML 中的 RunnableEntity、Port、Interface 和 DataElement 是否匹配。
2. Provider/Requester Port 之间是否有正确的 Connector。
3. TimingEvent、DataReceivedEvent 等触发事件是否关联到目标 Runnable。
4. Runnable 到 OS Task 的映射、任务优先级和周期是否正确。
5. 生成代码是否来自当前这版 ARXML 和配置。

## 数据读写与一致性

Rte_Read / Rte_Write 的实际函数名由生成器根据 Port、Interface 和 DataElement 决定。应使用项目生成的头文件与原型，并检查返回状态。

非排队数据语义通常侧重最新值；排队语义可保留一定数量的样本，但会受队列容量、生产/消费速率和溢出策略影响。不能仅凭数据类型宽度推断所有读写都天然原子或不存在竞争。跨任务、跨核和中断场景应结合生成代码、调度与平台访问原子性核对。

## 常见故障

- **读到旧值：** 检查发送端是否执行、连接器、更新时刻、接收周期和缓冲语义。
- **Runnable 未运行：** 检查事件关联、任务映射、任务激活、模式条件和初始化。
- **数据不一致：** 检查类型/长度、配置版本、跨核通信与同步策略。

## 官方参考

- [AUTOSAR Classic Platform](https://www.autosar.org/standards/classic-platform/)
- [AUTOSAR Classic Platform Working Groups](https://www.autosar.org/working-groups/classic-platform)

相关页面：[诊断栈](answers-diagnostics-dcm-dem-det.md)、[FIM 与 UDS 刷写](answers-diagnostics-fim-uds-flashing.md)。
