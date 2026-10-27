# AUTOSAR 诊断配置集成自检清单：上车前的 10 项

本文把诊断通信、故障管理、刷写时序和启动依赖放在同一张集成检查表中。具体 NRC、时序阈值与 OEM 服务序列必须以项目规范为准。

## 通信层：Dcm / PduR / CanTp / CanIf

- [ ] **S3Server 超时覆盖**：列出长耗时服务（如 RoutineControl）的最大执行时间，核对会话计时和 ResponsePending 处理，避免服务执行中会话意外回落。
- [ ] **PduR 路由闭环**：检查请求路径和响应路径的 PduId/连接映射。特别验证 Dcm 的响应能否经 PduR、CanTp、CanIf 发回诊断仪。
- [ ] **CommunicationControl 恢复**：验证关闭通信后恢复命令是否让通信管理状态机回到项目期望状态，检查 FullCommunication、Bus-off 与 Partial Networking 等边界。

## 故障管理层：Dem / Fim / NvM

- [ ] **DEM Event → DTC → NvM 闭环**：核对事件、DTC、Freeze Frame/Extended Data 的配置关系、容量和保存策略；确认相关 NvM Block 的长度与配置足够。
- [ ] **FIM 抑制副作用**：验证故障抑制某功能后，不会因连锁功能不可用而产生误导性次生故障；确认事件依赖关系与报告条件。
- [ ] **监控窗口管理**：在刷写或通信关闭期间，确认 DEM 监控与 DTC Setting 的策略符合项目要求，避免预期通信中断被误判为新故障。不要将特定 UDS 子功能的使用方式泛化到所有项目。

## 刷写流程：RoutineControl / Bootloader / BswM

- [ ] **RoutineControl 结果检查**：对于异步或分阶段 Routine，确认测试仪/客户端按项目定义检查执行结果，而不是仅凭开始请求的肯定响应就认为工作成功。
- [ ] **刷写时序与 S3Server**：将 Routine、擦除、下载和传输过程的最长时间纳入会话保持策略，验证超时与 ResponsePending 行为。
- [ ] **复位与通信控制顺序**：确认复位、通信关闭和恢复命令的顺序符合诊断协议及 OEM 流程；不要在 ECU 已复位/断链后才依赖原连接发送后续命令。

## 启动集成：EcuM / BswM / Dcm

- [ ] **DCM 就绪时刻**：检查启动序列中 PduR、CanTp、Dcm 与通信管理的初始化依赖，验证第一次诊断请求到来时链路已可用，或 ECU 能按项目要求处理尚未就绪的请求。

## 执行与证据

1. 每项保留 ARXML 配置基线、生成代码版本、工具版本、测试条件和日志。
2. 使用正常路径、拒绝路径、超时路径和故障注入覆盖关键场景。
3. 对每个失败记录触发条件、实际响应、预期响应、状态机状态和根因，不要只记录“诊断失败”。
4. 对安全相关诊断、刷写和 DTC 管理流程执行项目规定的安全审查与回归测试。

## 配套文档

- [Dcm Session、Security、DID 与 Routine 配置排查](dcm-configuration-session-security-did-routine.md)
- [诊断栈实战：Dcm、Dem、DET、DTC 与 UDS](answers-diagnostics-dcm-dem-det.md)
- [FIM 功能抑制与 UDS 刷写](answers-diagnostics-fim-uds-flashing.md)

## 参考

- [AUTOSAR Classic Platform](https://www.autosar.org/standards/classic-platform/)
- [AUTOSAR 官方文档检索](https://www.autosar.org/search/)
