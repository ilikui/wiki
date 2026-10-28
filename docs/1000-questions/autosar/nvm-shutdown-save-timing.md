# NvM 关机保存时序：BswM Action、EcuM 超时与掉电预算

> 来源：Flomo「专栏⑤·第八篇：模式切换里的 NvM 保存时机」；原文保留，本文为工程化整理。  
> 规范参考：AUTOSAR Classic Platform R24-11, Specification of NVRAM Manager（Document ID 33）。

## 先记住结论

`NvM_WriteBlock()` 被调用成功，不等于数据已经物理写入非易失存储器。NvM 作业通常是异步执行的；必须确认请求已完成且结果为成功，再允许系统进入会切断存储供电的睡眠/关机阶段。

## 推荐排查顺序

1. **确认关机触发链**：KL15/Shutdown 请求 → BswM 规则仲裁 → Action List → EcuM 关机流程。
2. **确认数据是否变化**：应用是否更新 RAM Block；是否正确调用 `NvM_SetRamBlockStatus`（若该配置/接口适用），或采用项目约定的写请求策略。
3. **确认写请求是否受理**：检查 `NvM_WriteBlock` 返回值；排查队列满、块 ID 错误、写保护、配置未启用等问题。
4. **确认作业完成**：通过 `NvM_GetErrorStatus` 或项目配置的单块回调检查最终结果；不能只凭“函数返回 E_OK”就认定落盘完成。
5. **确认底层链路**：NvM → MemIf → Fee/Ea → Fls/Eep；检查 Fee/Fls 作业状态、擦写耗时、错误回调和 DEM 事件。
6. **确认关机截止时间**：最坏情况下的 NvM 写入时间，加上通信收敛、其他 BSW 退出动作及安全余量，必须小于可用供电窗口和 EcuM/项目关机超时。
7. **做断电注入测试**：分别在请求前、请求排队后、底层擦写中、作业完成后切断供电；重启后检查数据有效性、CRC/冗余恢复和默认值路径。

## 常见根因

| 现象                            | 可能原因                                        | 验证方法                             |
| ------------------------------- | ----------------------------------------------- | ------------------------------------ |
| 偶发恢复旧值                    | 只更新 RAM，未完成 NV 写入                      | 记录请求、作业状态与掉电时间戳       |
| 关机时写失败                    | 超时过短、队列满、底层驱动错误                  | 检查 NvM/MemIf/Fee/Fls 状态与 DEM    |
| 每次关机都耗时很长              | 无变化检测、重复写入大块                        | 统计写请求频率与擦写时间             |
| BswM 已执行后续动作但数据未落盘 | Action 只触发请求，没有等待完成条件             | 检查 Action List 与完成标志/回调联动 |
| 偶发损坏或回退默认值            | 断电窗口、块完整性/冗余配置或恢复策略不满足需求 | 进行掉电注入并检查块状态和恢复路径   |

## 设计原则

- 不要假设所有关键数据都必须“立即写”；应按允许的数据丢失窗口、写入频率、Flash 寿命、冗余/完整性需求与电源保持时间共同决定策略。
- Immediate/Periodic 的具体语义和调度细节要以所用 AUTOSAR release、配置工具及供应商实现为准。
- BswM Action List 不应被想当然地当成可以阻塞等待的脚本。若等待完成需要跨周期状态机、回调或仲裁条件，应按项目架构明确实现。
- 对转向偏移等安全相关数据，应定义写入完成判据、异常降级策略、数据有效性检查和验证证据，而不只依赖一次 API 调用。

## 调试记录建议

记录时间戳：Shutdown 请求、NvM API 返回、NvM 最终结果、Fee/Fls 作业完成、供电关闭/复位时刻。用这些事件计算真实预算，并用最坏情况而非平均值评估。

## 参考资料

- [AUTOSAR Specification of NVRAM Manager R24-11](https://www.autosar.org/fileadmin/standards/R24-11/CP/AUTOSAR_CP_SWS_NVRAMManager.pdf)
- [AUTOSAR Classic Platform](https://www.autosar.org/standards/classic-platform/)
- 原始 Flomo 笔记：[专栏⑤·第八篇](https://v.flomoapp.com/mine/?memo_id=MjQ5NTY2MjI5)
