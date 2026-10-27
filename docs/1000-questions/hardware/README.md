# 硬件从 0 到精通｜软件工程师的硬件全景

> 来源：Flomo 原始笔记（导航原文）
> 原始笔记：[打开 Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ3NTQ2MDE3)
> 标签：Area/技术/硬件

## 背景

你的嵌入式软件/AUTOSAR 经验做底，缺的是能独立完成从需求到第一板样机的完整硬件设计——软件和硬件两个世界的桥接。2024 年 7 月 17 日那条 CAN 终端电阻笔记是第一个硬件认知突破：一个电阻选型失误导致产线故障率——从软件里永远看不到这个问题，要在硬件层面才能理解。

## 专栏目录（10 篇）

1. 元器件认知——电阻/电容/电感/二极管/MOSFET/运放，软件工程师的第一个硬件门槛
2. 电路分析基础——从 KCL/KVL 到戴维南等效
3. 半导体器件实战——二极管/三极管/MOSFET/H桥
4. 电源设计——从 LDO 到 DC-DC
5. 信号完整性——传输线/反射/地弹/串扰/EMC
6. 嵌入式 MCU 硬件设计——最小系统/晶振/复位/调试接口
7. 汽车电子硬件——AEC-Q100/抛负载/ESD/休眠电流
8. PCB 设计——层叠/走线/布局/接地/热设计
9. 硬件调试——示波器三板斧/纹波测量/总线调试
10. 完整项目——从需求到打样的全流程

## 补充篇（4 篇）

1. 运放实战——软件工程师最容易忽略的模拟核心：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjUxMDI5OTU4)
2. EMC 与整改——汽车电子逃不掉的试验台：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjUxMDI5OTc5)
3. 电源深入——从「能出电压」到「纹波达标、环路稳定」：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjUxMDMwMDAz)
4. 焊接与样板验证——从打样回来到点亮第一块板：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjUxMDMwMDIw)

## 设计原则

- 每个概念都从真实项目出发：CAN 终端电阻→信号完整性，EcuM 唤醒验证→休眠电流，ADC 采样→分压器与源阻抗。
- 软件背景视角：先回答“这跟我写的代码有什么关系”，再讲硬件原理。
- 目标不是成为硬件专家，而是能独立完成从需求到第一板样机的完整硬件设计，并在硬件和软件之间建立有效沟通。

## 关联笔记

- 硬件三问·容差思维：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ5MDI4NTE3)
- 硬件三问·共模电感案：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ5MDI4NTQ1)
- 硬件三问·滤波 vs 去耦：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ5MDI4NTg4)
- 单片机深入学习计划：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ2NzY5Njgw)
- 通信专栏⑫导航：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ4NjM0MjEw)
- 电机控制专栏⑪导航：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ5OTUxNzQy)

**原笔记标注进度：导航 + 10/10 篇 + 补充一至四（共 14 篇）已完成。** 本次迁移的是导航页；14 篇正文仍需逐篇核对迁移。