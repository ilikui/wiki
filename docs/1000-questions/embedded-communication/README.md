# 嵌入式通信协议全景｜SPI / I2C / UART / RS-485 / USB / SENT

> 来源：Flomo 原始笔记（导航原文）
> 原始笔记：[打开 Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ4NjM0MjEw)
> 标签：Area/技术/通信

## 背景与已有知识关联

AUTOSAR CAN 通信栈已有系统覆盖，车载以太网也有相关内容；MCU 级嵌入式通信协议（SPI / I2C / UART / RS-485 / USB / SDIO）需要独立系统化。与单片机学习计划中的 UART 轮询→中断→环形缓冲区、硬件信号完整性、示波器协议波形分析相互关联。

## 专栏目录（10 篇）

1. 基础概念——同步/异步、全/半双工、主从模式
2. 四大协议详解——UART、SPI、I2C、RS-485
3. 协议故障排查——四个协议最常踩的翻车现场
4. 汽车嵌入式场景——SPI/UART/I2C/SENT 具体落点
5. SPI Flash 驱动深入——命令集、状态轮询、QSPI、磨损均衡
6. I2C 传感器/EEPROM 深入——时钟拉伸、多主仲裁、上拉电阻选值
7. RS-485 多节点组网——使能时序、终端电阻、Modbus 帧解析
8. SENT 传感器协议——汽车传感器的“单线传真”
9. USB 设备通信——HID / CDC / 自定义类的选择与坑
10. 通信技术自检清单——上车前逐项打勾的 15 项

## 补充篇（4 篇）

1. LIN 总线——UART 底子、成本优先的车上第二大巴：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjUxMDI5MDYy)
2. SDIO——SD 卡和 WiFi 模块都走这条线：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjUxMDI5MTM2)
3. 信号完整性——为什么短线上也要讲传输线：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjUxMDI5MjAz)
4. 车载以太网——从 CAN 到 100BASE-T1，带宽跃迁：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjUxMDI5MjY2)

## 专题知识架构（学习路径 5 阶）

1. 基础概念——同步/异步、全/半双工、串行/并行、主从模式
2. 常用协议详解——UART、SPI、I2C、RS-232、RS-485
3. 协议实现关键点——UART 波特率误差与流控；SPI 的 CPOL/CPHA 与片选；I2C 开漏、上拉电阻、时钟拉伸、多主仲裁；RS-485 使能时序
4. 应用级排障——乱码（波特率/电平）、最后一位不对（时钟相位）、SDA 拉不动（上拉电阻）、节点吞数据（使能时序）
5. 汽车场景——SPI 连 Flash/CAN 控制器/传感器；UART 连蓝牙/4G/GPS/调试口；I2C 连温度传感器/PMIC/EEPROM；RS-485 长距离；SENT 单线协议

## 关联笔记

- 单片机学习计划：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ2NzY5Njgw)
- 硬件信号完整性：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ3NTQ2NDgw)
- 硬件调试与示波器波形：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ3NTQ2NjE2)
- CAN 排查工具箱：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ3Njc2MTY1)
- 通信选型决策树：[Flomo](https://v.flomoapp.com/mine/?memo_id=MjQ5MDI2NDQ5)

**原笔记标注进度：导航 + 10/10 篇 + 补充一至四（共 14 篇）已完成。** 本次迁移的是导航页；14 篇正文仍需逐篇核对迁移。