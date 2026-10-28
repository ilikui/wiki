# AUTOSAR 1000问｜答案集：PDU、CanTp 与网络管理

本页迁移 3 篇完整读取的 Flomo 问答，保留来源链接。原始标签：`#Area/技术/AUTOSAR`。

## 通信栈 Q3：Signal 和 PDU 的关系是什么？什么时候一个 PDU 里放多个 Signal？

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjUyNDgyNDYz) · 946 字

- **Signal** 是具体数据，如车速、转速或开关状态，包含位位置、长度、字节序等定义。
- **PDU** 是协议栈中传递的数据单元。COM 可将多个 Signal 按配置打包进一个 I-PDU。
- **CAN Frame** 是总线上的帧格式；CAN ID 是报文标识，不是 PDU 内容本身。

更新周期、来源和功能相近的信号可以考虑合帧，以节省总线开销。但周期差异大时，低频信号可能随高频信号重复发送；修改布局也会影响通信矩阵和所有接收方。合帧需在带宽、延迟和耦合度之间权衡。

## CanTp：诊断报文分段与 BS / STmin 参数

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjQ4MjgzMDY3) · 1050 字

CanTp 按 ISO 15765-2 处理超出单帧容量的诊断数据分段与重组。常见帧类型包括 SF（Single Frame）、FF（First Frame）、CF（Consecutive Frame）和 FC（Flow Control）。

- **BS（Block Size）**：发送方连续发送多少个 CF 后，需要等待下一次流控许可；BS=0 通常表示该批次不限制 CF 数量。
- **STmin（Minimum Separation Time）**：连续帧之间要求的最小间隔。

参数设置需考虑接收缓冲、CPU/总线负载、协议栈实现和时序要求。BS/STmin 过于激进可能造成缓冲压力或等待，过于保守则拉长传输时间。原笔记中的数值属于经验示例，不可直接当作所有 ECU 的通用配置。

排查时检查 FF/CF/FC Trace、FC 状态（CTS/WAIT/OVFLW）、缓冲区、处理周期、BS/STmin 与超时参数。

## 网络管理 Q4：两个 ECU 都没进入 Bus-Sleep，会发生什么？谁决定总线何时睡眠？

来源：[Flomo 原笔记](https://v.flomoapp.com/mine/?memo_id=MjUyNDgyNjM4) · 924 字

Classic AUTOSAR 网络管理通常由各 ECU 根据本地状态机、收到的 NM 报文、超时和通信需求决定是否继续保持唤醒，并非由单一总线主节点统一下令。

- 若节点持续发送 NM 或应用报文，网络可能持续保持唤醒，增加功耗。
- 若节点过早睡眠，必要通信可能中断。
- 若空闲时仍持续发送 NM，网络可能无法进入睡眠。
- NM 超时、重复消息时间、Ready Sleep / Prepare Bus-Sleep 等状态应结合具体网络管理类型和项目配置分析；不能简单认定“收不到一条 NM 就立刻睡眠”。

排查时核对各节点 NM 状态迁移、报文周期与超时、应用通信请求、唤醒源、CanSM/CanIf 状态及全网 Trace。

---

以上为原笔记结构化迁移；涉及 BS/STmin 与网络管理时序的具体行为，须以项目版本、配置和实测为准。
