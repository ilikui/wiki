# Specification of Time Service (`TimeService`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 624 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_TimeService_624\AUTOSAR_CP_SWS_TimeService.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_TimeService_624\AUTOSAR_CP_SWS_TimeService.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_TimeService_624\zzgen\CP_SWS_TimeService.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module "Time Service".

The Time Service module is part of the Services Layer. The module provides services for time-based functionality. Use cases are:

* Time measurement
* time-based state machine
* Timeout supervision
* Busy waiting

The Time Service module does not use and distribute all features of the GPT driver.

Several types of - so called "Time Service Predef Timers" - are available, if supported by hardware and enabled by configuration.

Each Predef Timer has a predefined tick duration (physical time unit) and a predefined number of bits (physical range, width). By this, compatibility of time-based functionality is ensured for all platforms which support the required Predef Timers.

The Time Service Predef Timers are based on so-called "GPT Predef Timers", which are free running hardware timers, provided by the GPT driver .

The following time-based services are provided:

* `Tm_ResetTimer`
* `Tm_GetTimeSpan`
* `Tm_ShiftTimer`
* `Tm_SyncTimer`
* `Tm_BusyWait1us`

All services are called by user (polling mode). Notifications are not supported.

The time services can be used in:

* Initialization phase (after a call to `Tm_Init`)
* Tasks
* Cat2 interrupt service routines
* OS hooks

For implementation of the Time Service module no interrupts are needed.

## 模块依赖

This section describes the relations to other modules.

The Time Service module has dependencies to the following other AUTOSAR modules:

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module "Time Service".

The Time Service module is part of the Services Layer. The module provides services for time-based functionality. Use cases are:

* Time measurement
* time-based state machine
* Timeout supervision
* Busy waiting

The Time Service module does not use and distribute all features of the GPT driver.

Several types of - so called "Time Service Predef Timers" - are available, if supported by hardware and enabled by configuration.

Each Predef Timer has a predefined tick duration (physical time unit) and a predefined number of bits (physical range, width). By this, compatibility of time-based functionality is ensured for all platforms which support the required Predef Timers.

The Time Service Predef Timers are based on so-called "GPT Predef Timers", which are free running hardware timers, provided by the GPT driver .

The following time-based services are provided:

* `Tm_ResetTimer`
* `Tm_GetTimeSpan`
* `Tm_ShiftTimer`
* `Tm_SyncTimer`
* `Tm_BusyWait1us`

All services are called by user (polling mode). Notifications are not supported.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. Use cases

### 3. Time measurement

By using the Time Service module, execution time and cycle time of code can be measured, even run time and cycle time of:

* Tasks
* Cat2 interrupt service routines
* Functions
* Pieces of software

Time stamps can be generated.

Services of the Time Service module may be used to measure CPU load and task load, because the services may be called in the PreTaskHook (and PostTaskHook) of the Operating System.

### 4. Time-based 状态 machine
*原文标题：Time-based state machine*

"Time base state machine" means: State transitions depending on timing. By using the Time Service module, time-based state machines can be implemented, which are nearly independently from the cycle time of the calling task. The user software has to ensure that the cycle time of the task is short enough relating to the desired timing behavior, due to polling of time information.

### 5. Timeout supervision and busy waiting

By using the Time Service module, errors and ambiguous behavior may be prevented in software modules by applying Predef Timers instead of "loops" or "nop instructions" to implement timeout supervision or busy waiting.

Using "loops" or "nop instructions" is a poor and critical design, because time intervals implemented in such a way are dependent on:

* CPU speed
* Pipeline effects
* Cache effects
* Access time to memory (bus width, wait states, ...)
* Interruption by Interrupt Service Routines
* Compiler version, compiler options, compiler optimizations

### 6. Acronyms, abbreviations and terms

Only a few acronyms and abbreviations are listed here which are helpful to understand this document or which have a local scope. Further information can be found in the official .

| Acronym / Abbreviation: | Description: |
|---|---|
| nop | No Operation |

The terms defined in the table below have a local scope within this document.

| Term: | Description: |
|---|---|
| GPT Predef Timer | A GPT Predef Timer is a free running up counter provided by the GPT driver . Which GPT Predef Timer(s) are available depends on hardware (clock, hardware timers, prescaler, width of timer register, ...) and configuration. A GPT Predef Timer has predefined physical time unit and range. |
| Time Service Predef Timer | A Time Service Predef Timer is a free running up counter with predefined physical time unit and range. The hardware timer functionality is based on the corresponding GPT Predef Timer. The user uses timer instances to interact with the PreDef Timers. |
| Timer instance | A timer instance is a configured object (of a Time Service Predef Timer) and is used as handle in APIs. The user can configure any number of instances, they are completely independently of each other. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 相关文档
*原文标题：Related documentation*

### 8. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 9. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for Tm.

Thus, the specification SWS BSW General shall be considered as additional and required specification for Tm.

### 10. 约束与假设
*原文标题：Constraints and assumptions*

### 11. Assumptions

The Time Service module is using hardware timers which may be impacted when the ECU is in SLEEP mode. This means that it depends on the hardware if a timer still counts in such a situation or if it stops while the ECU is in SLEEP. As the Time Service module itself cannot detect this it is assumed that the users of the module are aware of such situations. As a consequence it is assumed that users don't measure time across SLEEP periods and that they reset the Time Service timers after a SLEEP.

### 12. 限制
*原文标题：Limitations*

### 13. Functionality is based on HW timers which are not perhaps available

The functionality of the Time Service module is based on hardware timers (GPT Predef Timers) provided by the GPT Driver . Which GPT Predef Timer(s) can be enabled depends on clock and available timer hardware (prescaler, width of timer register). It is recommended to enable all GPT Predef Timers to ensure compatibility of time-based functionality for all platforms.

### 14. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 15. 对其他模块的依赖
*原文标题：Dependencies to other modules*

This section describes the relations to other modules.

The Time Service module has dependencies to the following other AUTOSAR modules:

### 16. GPT：
*原文标题：GPT:*

The functionality of the Time Service module is based on so called "GPT Predef Timers". A GPT Predef Timer is a free running up counter provided by the .

### 17. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in AUTOSAR SRS documents and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| The Basic Software Module shall be able to initialize variables and hardware in a separate initialization function |  |  |
| Shared code shall be reentrant |  |  |
| All AUTOSAR Basic Software Modules shall check passed API parameters for validity |  |  |
| Classification of development errors |  |  |
| BSW Modules shall support link-time configuration |  |  |
| All AUTOSAR standard types and constants shall be placed and organized in a standard type header file |  |  |
| The return type of init() functions implemented by AUTOSAR Basic Software Modules shall be void |  |  |
| All AUTOSAR Basic Software Modules shall not return specific development error codes via the API |  |  |
| The BSW shall specify the configuration and conditions for detecting an error |  |  |
| BSW Modules shall support post-build configuration |  |  |
| BSW Modules shall support multiple configuration sets |  |  |
| No description |  |  |
| Init functions shal |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 功能规范
*原文标题：Functional specification*

### 19. TM Predef Timers

### 20. Background

This functionality of the Time Service module is based on so called "GPT Predef Timers", see .

### 21. Time 服务 Predef Timers
*原文标题：Time Service Predef Timers*

A Time Service Predef Timer is based on the corresponding GPT Predef Timer. The Time Service module assumes that the GPT is configured in a way suitable for the Time Service.

The following resolutions are available:

| Type of Time Service Predef Timer | Tick duration | Maximum tick value | Number of bits | Maximum time span (circa values) |
|---|---|---|---|---|
| TM_PREDEF_TIMER_1US_16BIT | 1 \mus | 65535 | 16 bit | 65 ms |
| TM_PREDEF_TIMER_1US_24BIT | ^ | 16777215 | 24 bit | 16 s |
| TM_PREDEF_TIMER_1US_32BIT | ^ | 4294967295 | 32 bit | 71 minutes |
| TM_PREDEF_TIMER_100US_32BIT | 100 \mus | 4294967295 | 32 bit | 4.9 days |

Users of Time Service require a timer instance to access the functionality offered in Time Service module. A timer instance has to be configured (via TmPreDefTimerInstance) before it can be used.

The Time Service module offers a set of API services which are available to its users. The following services are offered for timer instances:

* `Tm_ResetTimer`
* `Tm_GetTimeSpan`
* `Tm_ShiftTimer`
* `Tm_SyncTimer`

Additionally the service `Tm_BusyWait1us` is available for short waiting times.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. 时序 aspects to consider
*原文标题：Timing aspects to consider*

This chapter contains several aspects of the provided Time Service functionality which has to be considered on user software level. Chapter  contains additional hints for users of `Tm_BusyWait1us`

### 23. Maximal measurable time span

The measurable time span is restricted to the maximum value of the corresponding GPT Predef Timer. A wrap-around of a timer is handled by the `Tm_GetTimeSpan` function, see .

The diagram "Free running up counter" below shows the general behavior of a free running up counter provided by the GPT driver . The services `Tm_ResetTimer` and `Tm_GetTimeSpan` are used to measure three time spans, as example.

By calling `Tm_ResetTimer` the current time of the related GPT Predef Timer is stored as a reference time in the timer instance. For details see chapter .

By calling `Tm_GetTimeSpan` the time difference between the current time and the reference time is calculated and delivered. For details see chapter .

For:

* `Tm_GetTimeSpan`^(1)
* `Tm_GetTimeSpan`^(2)

the time span will be calculated correctly.

For:

* `Tm_GetTimeSpan`^(3)

it is not possible to calculate the correct time span, because the maximum time span is exceeded. It is not possible for the Time Service module to detect such an exceeding. This is not a fault of this specification, it's a logical consequence caused by the technical principle. See also "Unintentional behavior of `Tm_BusyWait1us` services" in chapter .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Time quantization 错误
*原文标题：Time quantization error*

The theory of quantization error has to be considered at using/interpretation of the values delivered by the `Tm_GetTimeSpan` function.

The value delivered by a `Tm_GetTimeSpan` function has an accuracy of +/- 1 tick.

For example:

| Value delivered by Tm_GetTimeSpan function | < | Real time minimum | < | < | Real time maximum | < | < | Comment |
|---|---|---|---|---|---|---|---|---|
| Value | Tick duration |  |  |  |  |  |  |  |
| 1 | \mus | nearly | 0 | \mus | nearly | 2 | \mus | See figure |
| 3400 | \mus | nearly | 3399 | \mus | nearly | 3401 | \mus |  |
| 56 | 100\mus | nearly | 5500 | \mus | nearly | 5700 | \mus |  |

In the example diagram above both calls of `Tm_GetTimeSpan` (^(1) and ^(2)) deliver the value 1, this means 1\mus.

Depending on points in time the calls of `Tm_ResetTimer` and `Tm_GetTimeSpan` occur, the real time span can be in a range nearly 0\mus to nearly 2\mus.

If a `Tm_GetTimeSpan` function is used to check a minimum time, e.g. for:

* Timeout supervision
* Busy waiting

n+1 ticks must be observed by user software to ensure that an interval of at least n ticks has passed, see also .

For busy waiting please use the `Tm_BusyWait1us` service, see chapter .

### 25. Execution times of 服务 / measurement of short time spans
*原文标题：Execution times of services / measurement of short time spans*

If short time spans shall be measured on user software level, the execution times of the Tm services and the underlying GPT driver services shall be short enough related to the time spans to be measured.

The execution times are dependent on:

* Implementation
* CPU speed
* Realization of related GPT Predef Timer, see chapter GPT Predef Timer in

The user has to check whether the execution times are sufficient for his use case.

### 26. API 服务
*原文标题：API Services*

The `Tm_GetTimeSpan`, `Tm_ShiftTimer` and `Tm_SyncTimer` services require timer instance(s) as input. It is assumed that these timer instance(s) do have a valid reference time. This means there was a previous call to `Tm_ResetTimer` which used the timer instance.

 Development error when refernce time is missing
  Upstream requirements: ,
⌈
If development error detection for the Time Service module is enabled: If a timer instance provided by the user in a call to `Tm_GetTimeSpan`, `Tm_ShiftTimer` or `Tm_SyncTimer` does not contain a reference time the called function shall raise the development error `TM_E_STATE`.
⌋

The `Tm_GetTimeSpan` and the `Tm_ShiftTimer` services provide or require a timer value. For both services the type of the timer value is fixed to a 32 bit type (uint32). If predef timers are used with a smaller width (16bit or 24bit), the "unused" part of the timer value shall always be 0.

Example: If a timer instance is using a 16bit pre def timer then values of the timer are always in the range of 0x00000000 and 0x0000FFFF.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 服务 ResetTimer
*原文标题：Service ResetTimer*

The service `Tm_ResetTimer` resets a timer instance from user point of view.

  Upstream requirements:
⌈
The `Tm_ResetTimer` function shall reset the provided timer instance. This means, the reference time of the timer instance shall be set to the current time of the related GPT Predef Timer.
⌋

### 28. 服务 GetTimeSpan
*原文标题：Service GetTimeSpan*

The service `Tm_GetTimeSpan` returns the current timer value of the timer instance.

  Upstream requirements:
⌈
The `Tm_GetTimeSpan` function shall calculate and deliver the time difference between the current time and the reference time of the timer instance.
⌋

Note: The restriction of maximal measurable time span has to be considered on user software level, see chapter .

Note: Because the `Tm_GetTimeSpan` function deliver time differences as integer values, the theory of quantization error has to be considered on user software level at using/interpretation of the values, see chapter .

  Upstream requirements:
⌈
The `Tm_GetTimeSpan` function shall perform proper wrap-around handling at subtraction (current time - reference time), if value of current time is less than value of reference time.
⌋

### 29. 服务 ShiftTimer
*原文标题：Service ShiftTimer*

Upstream requirements:
⌈
The `Tm_ShiftTimer` function shall shift the reference time of the timer instance. This means, the provided timer value shall be added to the reference time of the timer instance.
⌋

  Upstream requirements:
⌈
The `Tm_ShiftTimer` function shall perform proper wrap-around handling at adding (reference time + TimeValue), if the sum is greater than the maximum value of the timer.
⌋

### 30. 服务 SyncTimer
*原文标题：Service SyncTimer*

Upstream requirements:
⌈
The `Tm_SyncTimer` function shall synchronize two timer instances. This means, the reference time of the destination timer instance shall be set to the reference time of the source timer instance.
⌋

### 31. 服务 BusyWait
*原文标题：Service BusyWait*

The service `Tm_BusyWait1us` performs busy waiting (active waiting) by polling with a guaranteed minimum waiting time. The `Tm_BusyWait1us` service should be used instead of own implementations on user software level to avoid risks of bad implementations.

Risks may be:

* minimum waiting time is not guaranteed
* "loops" or "nop instructions" are used instead of hardware timers, see chapter

Note: The specification of the `Tm_BusyWait1us` function considers the theory of quantization error, see chapter .

Note: Because the `Tm_BusyWait1us` service is based on polling, the user of the `Tm_BusyWait1us` service is responsible for avoiding unintentional behavior, see chapter .

The service is available with tick duration of 1\mus. The waiting time is restricted to 8 bits (255\mus) to prevent long time blocking of code execution.

  Upstream requirements:
⌈
The `Tm_BusyWait1us` function shall perform busy waiting for the minimum time passed by the parameter WaitingTimeMin.
⌋

  Upstream requirements:
⌈
The `Tm_BusyWait1us` function shall not disable the interrupts. This means the real waiting time may be greater than the desired waiting time.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. BusyWait 服务的Unintentional 行为
*原文标题：Unintentional behavior of BusyWait services*

This chapter has to be considered on user software level.

Because the `Tm_BusyWait1us` service is based on polling, the user of `Tm_BusyWait1us` service is responsible for avoiding unintentional behavior.

Unintentional behavior can occur when an ongoing call of `Tm_BusyWait1us` is preempted or interrupted. Here is a possible scenario:

# A Task A calls `Tm_BusyWait1us` with waiting time of 10\mus. The function reads the current value of the timer. The current value is 0.
# After 2\mus the scheduler preempts Task A, and another Task is executed.
# Task A stays preempted for a long time. In the meantime the timer wraps around and the value is again 0
# Shortly afterwards Task A continues. The next value which is read in the function `Tm_BusyWait1us` is 3
# For `Tm_BusyWait1us` it looks like that just 1\mus has passed. So it still loops until the timer reaches 10.

The waiting time in the above example is in the end extremely long. By using the service `Tm_BusyWait1us` a problem as described above can only occur, if a task which calls the busy wait function is preempted for more than 71 minutes. See also .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 配置 of Predef Timers
*原文标题：Configuration of Predef Timers*

The Time Service module requires that timer instances are configured before they can be used. See TmPreDefTimerInstance for details. For each timer instance the type of the underlying timer has to be provided (see TmPreDefTimerType). Additionally it has to be specified if the timer instance is used on application level (access via ports) or just from other modules via its C-API. This can be specified in TmTimerUser.

There is a restriction regarding the availability of port(s) and timer types: For ports only PreDef Timers of type `TM_PREDEF_TIMER_1US_32BIT` are allowed.

 Service interface always use 32bit wide 1us resolution
⌈
The Time Service module only support ports for configured timer instances of type `TM_PREDEF_TIMER_1US_32BIT`.
⌋

 Configuration check
⌈
If a configuration contains a TmPreDefTimerInstance where the TmTimerUser equals PORT and the TmPreDefTimerType is not equal `TM_PREDEF_TIMER_1US_32BIT` then the generator tool of the Time Service module shall report an error.
⌋

### 34. Sample 代码 of use cases
*原文标题：Sample code of use cases*

This chapter contains example code of use cases in addition to the use cases described in chapter .

### 35. Time measurement

Sometimes execution time of code shall be measured.

Sample code:

#include "Os.h"
#include "Tm.h"

/* `TmConf_TmPreDefTimerInstance_TimerIsr1` = Name of the configured timer instance with a 1us resolution */
/* `TmConf_TmPreDefTimerInstance_TimerTask100us` = Name of the configured timer instance with a 1us resolution */

uint32 RunTimeIsr1us; /* Gross runtime of Isr1 */
uint32 RunTimeTask100us; /* Gross runtime of Task100ms */

ISR(Isr1) {
  (void)`Tm_ResetTimer`(`TmConf_TmPreDefTimerInstance_TimerIsr1`);
  /* Code */
  (void)`Tm_GetTimeSpan`(`TmConf_TmPreDefTimerInstance_TimerIsr1`, &RunTimeIsr1us);
}

TASK(Task100ms) {
  (void)`Tm_ResetTimer`(`TmConf_TmPreDefTimerInstance_TimerTask100us`);
  /* Code */
  (void)`Tm_GetTimeSpan`(`TmConf_TmPreDefTimerInstance_TimerTask100us`, &RunTimeTask100us);
  (void)TerminateTask();
}

### 36. time-based 状态 machine
*原文标题：time-based state machine*

By implementing a time-based state machine it is possible to realize time-based functionality nearly independently from the cycle time of the calling task.

Sample code:

#include "Os.h"
#include "Tm.h"

#define `MY_INIT` 0
#define `MY_WAIT1` 1
#define `MY_WAIT2` 2

/* `TmConf_TmPreDefTimerInstance_Timer` = Name of configured timer instance. */

uint8_least State = `MY_INIT`;

TASK(Task5ms) {
  uint32 `WaitingTime1_us` = 500000u; /* 500ms */
  uint32 `WaitingTime2_us` = 250000u; /* 250ms */

  switch (State) {
    case `MY_INIT`: {
      (void)`Tm_ResetTimer`(`TmConf_TmPreDefTimerInstance_Timer`);
      State = `MY_WAIT1`;
      break;
    }
    case `MY_WAIT1`: {
      uint32 `Time_us`;
      (void)`Tm_GetTimeSpan`(`TmConf_TmPreDefTimerInstance_Timer`, &`Time_us`);
      if (`Time_us` >= `WaitingTime1_us`) {
        /* Action ... */
        `Tm_ShiftTimer`(`TmConf_TmPreDefTimerInstance_Timer`, `WaitingTime1_us`);
        State = `MY_WAIT2`;
      }
      break;
    }
    case `MY_WAIT2`: {
      uint32 `Time_us`;
      (void)`Tm_GetTimeSpan`(`TmConf_TmPreDefTimerInstance_Timer`, &`Time_us`);
      if (`Time_us` >= `WaitingTime2_us`) {
        /* Action ... */
        `Tm_ShiftTimer`(`TmConf_TmPreDefTimerInstance_Timer`, `WaitingTime2_us`);

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Timeout supervision

In case of hardware accessing MCAL driver, sometimes it is necessary that a hardware reaction is expected within certain but short time frame.

Sample code:

#include "Register.h"
#include "Tm.h"

/* `TmConf_TmPreDefTimerInstance_Timer1` = Name of configured timer instance */

uint16 StatusRegisterBit0;
uint32 `TimeElapsed_us`;

void SampleFunction(void) {
  (void)`Tm_ResetTimer`(`TmConf_TmPreDefTimerInstance_Timer1`);
  do {
    StatusRegisterBit0 = `HW_STATUS_REG` & 0x0001u;
    (void)`Tm_GetTimeSpan`(`TmConf_TmPreDefTimerInstance_Timer1`, &`TimeElapsed_us`);
  } while ( (StatusRegisterBit0 != 0x0001u) /* Wait until bit 0 is set*/
            && (`TimeElapsed_us` <= 40) /* Timeout 40us */);
}

### 38. Busy waiting

In case of hardware accessing MCAL driver, sometimes it is necessary that a certain but short time frame shall elapse.

Sample code:

#include "Tm.h"

`Std_ReturnType` `CanTrcv_SetOpMode`(uint8 Transceiver, `CanIf_TrcvModeType` OpMode) {
  /* Code */
  switch(OpMode) {
    case `CANIF_TRCV_MODE_NORMAL`: {
      /* Code */
      break;
    }
    case `CANIF_TRCV_MODE_SLEEP`: {
      /* Code */
      SetPinEnableHigh();
      /* Busy waiting: 50us (for TJA1054: at least 50us) */
      (void)`Tm_BusyWait1us`(50);
      SetPinEnableLow();
      /* Code */
      break;
    }
    case `CANIF_TRCV_MODE_STANDBY`: {
      /* Code */
      break;
    }
  }
  /* Code */
}

### 39. Version check

Please refer to chapter "Version Check" in .

### 40. 错误分类
*原文标题：Error classification*

Upstream requirements: , , ,
⌈
When an error occurs the corresponding Time Service function shall return without any action, unless it is specified for the specific function differently/more in detail.
⌋

### 41. Development 错误
*原文标题：Development Errors*

Definition of development errors in module Tm
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| API parameter checking: invalid pointer | TM_E_PARAM_POINTER | 0x01 |
| API parameter checking: invalid value | TM_E_PARAM_VALUE | 0x02 |
| API parameter checking: incompatible timer instances for Tm_SyncTimer | TM_E_PARAM_SYNC | 0x03 |
| A provided timer instance was not initialized via Tm_ResetTimer | TM_E_STATE | 0x04 |

⌋

  Upstream requirements:
⌈
Additional errors that are detected because of specific implementation shall be added in the specific implementation specification. The classification and enumeration shall be compatible to the errors listed.
⌋

### 42. Runtime 错误
*原文标题：Runtime Errors*

Definition of runtime errors in module Tm
⌈
| Type of error | Related error code | Error value |
|---|---|---|
| Access to underlying hardware timer failed | TM_E_HARDWARE_TIMER | 0x03 |

⌋

  Upstream requirements:
⌈
If the underlying GPT driver service returns E_NOT_OK, the functions `Tm_ResetTimer`, `Tm_GetTimeSpan` and `Tm_BusyWait1us` shall raise the runtime error `TM_E_HARDWARE_TIMER`.
⌋

### 43. Production 错误
*原文标题：Production Errors*

No production errors are defined for the Time Service module.

### 44. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 45. API 规范
*原文标题：API specification*

### 46. Imported 类型
*原文标题：Imported types*

In this chapter all types included from the following modules are listed:

 Definition of imported datatypes of module Tm
  Upstream requirements:
⌈
| Module | Header File | Imported Type |
|---|---|---|
| Gpt | Gpt.h | Gpt_PredefTimerType |
| Std | Std_Types.h | Std_ReturnType |
| ^ | Std_Types.h | Std_VersionInfoType |

⌋

### 47. 类型定义
*原文标题：Type Definitions*

### 48. Tm_ConfigType

Definition of datatype `Tm_ConfigType`
  Upstream requirements:
⌈
| Name | Tm_ConfigType | < |
|---|---|---|
| Kind | Structure | < |
| Elements | implementation specific | < |
| ^ | Type | - |
| ^ | Comment | The contents of the initialization data structure are implementation specific |
| Description | This type contains the implementation-specific configuration structure. | < |
| Available via | Tm.h | < |

⌋

### 49. 功能定义
*原文标题：Function definitions*

### 50. Tm_Init

Definition of API function `Tm_Init`
  Upstream requirements: , , , , ,
⌈
| Service Name | Tm_Init | < |
|---|---|---|
| Syntax | void Tm_Init ( |  |

  const `Tm_ConfigType`* config
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Non Reentrant | < |
| Parameters (in) | config | Pointer to the Time Service module's configuration dat |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This service initializes the Time Service module. Is shall be called before other functional APIs are used. | < |
| Available via | Tm.h | < |

⌋

### 51. Tm_GetVersionInfo

Definition of API function `Tm_GetVersionInfo`
  Upstream requirements:
⌈
| Service Name | Tm_GetVersionInfo | < |
|---|---|---|
| Syntax | void Tm_GetVersionInfo ( |  |

  `Std_VersionInfoType`* VersionInfoPtr
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | None | < |
| Parameters (inout) | None | < |
| Parameters (out) | VersionInfoPtr | Pointer to where to store the version information of this module. |
| Return value | None | < |
| Description | Returns the version information of this module. | < |
| Available via | Tm.h | < |

⌋

  Upstream requirements:
⌈
If development error detection for the Time Service module is enabled: If the parameter VersionInfoPtr is a null pointer, the function `Tm_GetVersionInfo` shall raise the error `TM_E_PARAM_POINTER`.
⌋

### 52. Tm_ResetTimer

Definition of API function `Tm_ResetTimer`
  Upstream requirements: , ,
⌈
| Service Name | Tm_ResetTimer | < |
|---|---|---|
| Syntax | Std_ReturnType Tm_ResetTimer ( |  |

  uint32 timerId
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant but not for the same timerId | < |
| Parameters (in) | timerId | A timer instance handle. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | Std_ReturnType | E_OK: The underlying GPT driver service has returned E_OK. E_NOT_OK: The underlying GPT driver service has not returned E_NOT_OK. |
| Description | Reset a timer instance by setting the reference time to the current value of the related PreDef Timer. | < |
| Available via | Tm.h | < |

⌋

  Upstream requirements: ,
⌈
If development error detection for the Time Service module is enabled: If the parameter timerId is not a valid timer instance, the `Tm_ResetTimer` functions shall raise the development error `TM_E_PARAM_VALUE`.
⌋

### 53. Tm_GetTimeSpan

Definition of API function `Tm_GetTimeSpan`
  Upstream requirements: , ,
⌈
| Service Name | Tm_GetTimeSpan | < |
|---|---|---|
| Syntax | Std_ReturnType Tm_GetTimeSpan ( |  |

  uint32 timerId,
  uint32* timeSpan
| ) | < |  |
|---|---|---|
| Service ID | 0x04 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | timerId | A timer instance handle. |
| Parameters (inout) | None | < |
| Parameters (out) | timeSpan | Pointer to location where the time will be stored. |
| Return value | Std_ReturnType | E_OK: The underlying GPT driver service has returned E_OK. E_NOT_OK: The underlying GPT driver service has not returned E_OK. |
| Description | Delivers the (relative) value of the time since the last reset (or shifting) of the timer instance. | < |
| Available via | Tm.h | < |

⌋

 Unknown timer
  Upstream requirements: ,
⌈
If development error detection for the Time Service module is enabled: If the parameter timerId is not a valid timer instance, the `Tm_GetTimeSpan` functions shall raise the development error `TM_E_PARAM_VALUE`.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 46 章（内容从略，见纯文本全文）

54. Tm_ShiftTimer
55. Tm_SyncTimer
56. Tm_BusyWait1us
57. Call-back 通知
58. Scheduled functions
59. Expected 接口
60. Mandatory 接口
61. Optional 接口
62. Configurable 接口
63. 服务接口
64. Provided Ports of Tm
65. Client-Server-Interfaces
66. TmPreDefTimerService
67. 时序图
68. Tm Normal Operation
69. 配置规范
70. How to read this chapter
71. Containers and 配置 parameters
72. Tm
73. TmGeneral
74. TmPreDefTimerInstance
75. 发布信息
76. 附录
77. 不适用需求
78. History of Constraints and 规范 Items
79. Differences between R24-11 and R25-11
80. Added 规范 Items in R25-11
81. Changed 规范 Items in R25-11
82. Deleted 规范 Items in R25-11
83. Added Constraints in R25-11
84. Changed Constraints in R25-11
85. Deleted Constraints in R25-11
86. Differences between R23-11 and R24-11
87. Added 规范 Items in R24-11
88. Changed 规范 Items in R24-11
89. Deleted 规范 Items in R24-11
90. Added Constraints in R24-11
91. Changed Constraints in R24-11
92. Deleted Constraints in R24-11
93. Differences between R22-11 and R23-11
94. Added 规范 Items in R23-11
95. Changed 规范 Items in R23-11
96. Deleted 规范 Items in R23-11
97. Migration from Operating 系统
98. Availability of ports
99. Port 接口
