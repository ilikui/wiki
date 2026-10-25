# Specification of Extended Fixed Point Library (`EFXLibrary`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 400 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_EFXLibrary_400\AUTOSAR_CP_SWS_EFXLibrary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_EFXLibrary_400\AUTOSAR_CP_SWS_EFXLibrary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_EFXLibrary_400\zzgen\CP_SWS_EFXLibrary.complete.txt`

## 文档简介

AUTOSAR Library routines are the part of system services in AUTOSAR architecture and below figure shows position of AUTOSAR library in layered architecture.

This specification specifies the functionality, API and the configuration of the AUTOSAR library dedicated to extended mathematical functions for fixed-point values.

This extended mathematical library (Efx) contains the following routines:

* Moving average
* First order high pass filter
* First order low-pass filter
* Controller routines
* Square root
* Exponential
* Average
* Array Average
* Moving Average
* Hypotenuse
* Trigonometric functions
* Rate limiter functions
* Ramp routines
* Hysteresis function
* Dead Time
* Debounce
* Ascending Sort Routine
* Descending Sort Routine
* Median Sort
* Edge detection routines
* Interval routines
* Counter routines
* Flip-Flop routine
* Limiter routines
* 64 bit functions

All routines are re-entrant and can be used by multiple runnables at the same time.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

AUTOSAR Library routines are the part of system services in AUTOSAR architecture and below figure shows position of AUTOSAR library in layered architecture.

This specification specifies the functionality, API and the configuration of the AUTOSAR library dedicated to extended mathematical functions for fixed-point values.

This extended mathematical library (Efx) contains the following routines:

* Moving average
* First order high pass filter
* First order low-pass filter
* Controller routines
* Square root
* Exponential
* Average
* Array Average
* Moving Average
* Hypotenuse
* Trigonometric functions
* Rate limiter functions
* Ramp routines
* Hysteresis function
* Dead Time
* Debounce
* Ascending Sort Routine
* Descending Sort Routine
* Median Sort
* Edge detection routines
* Interval routines
* Counter routines
* Flip-Flop routine
* Limiter routines
* 64 bit functions

All routines are re-entrant and can be used by multiple runnables at the same time.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the EFX Library module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| Arcsin | Inverse Sine |
| Arccos | Inverse Cosine |
| Cos | Cosine |
| EFX | Extended Mathematical library - Fixed point |
| Hypot | Hypotenuse |
| HpFilter | High pass filter |
| LpFilterFac1 | Low pass filter with a factor of 1 (included in ) |
| LpFilter | Low pass filter |
| Mn | Mnemonic |
| Lib | Library |
| Sqrt | Square root |
| Sin | Sine |
| u8 | Mnemonic for the uint8, specified in AUTOSAR_SWS_PlatformTypes |
| u16 | Mnemonic for the uint16, specified in AUTOSAR_SWS_PlatformTypes |
| u32 | Mnemonic for the uint32, specified in AUTOSAR_SWS_PlatformTypes |
| s8 | Mnemonic for the sint8, specified in AUTOSAR_SWS_PlatformTypes |
| s16 | Mnemonic for the sint16, specified in AUTOSAR_SWS_PlatformTypes |
| s32 | Mnemonic for the sint32, specified in AUTOSAR_SWS_PlatformTypes |
| s64 | Mnemonic for the sint64, specified in AUTOSAR_SWS_PlatformTypes |
| u64 | Mnemonic for the uint64, specified in AUTOSAR_SWS_PlatformTypes |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for EFX Library.

Thus, the specification SWS BSW General shall be considered as additional and required specification for EFX Library.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No limitations.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

### 10. 文件结构
*原文标题：File structure*

Implementation & grouping of routines with respect to C files is recommended as per below options and there is no restriction to follow the same.

Option 1 : <Name> can be function name providing one C file per function,

eg.: `Efx_Pt1_s32`.c etc.

Option 2 : <Name> can have common name of group of functions:

* 2.1 Group by object family:

  eg.:`Efx_Pt1`.c, `Efx_Dt1`.c, `Efx_Pid`.c
* 2.2 Group by routine family:

  eg.: `Efx_Filter`.c, `Efx_Controller`.c, `Efx_Average`.c etc.
* 2.3 Group by method family:

  eg.: `Efx_Sin`.c, `Efx_Exp`.c, `Efx_Arcsin`.c, etc.
* 2.4 Group by architecture:

  eg.: `Efx_Slewrate16`.c, `Efx_Slewrate32`.c
* 2.5 Group by other methods: (individual grouping allowed)

Option 3 : <Name> can be removed so that single C file shall contain all Efx functions, eg.: Efx.c.

Using above options gives certain flexibility of choosing suitable granularity with reduced number of C files. Linking only on-demand is also possible in case of some options.

### 11. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| All Basic SW Modules written in C language shall conform to the MISRA C 2025 Standard. |  |  |
| All AUTOSAR Basic Software Modules shall use only AUTOSAR data types instead of native C data types |  |  |
| AUTOSAR Basic Software Modules shall be compiler and platform independent |  |  |
| All Basic Software Modules shall provide a readable module vendor identification |  |  |
| AUTOSAR shall provide a boolean type |  |  |
| All software modules shall provide a module identifier in the header file and in the module XML description file. |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. 功能规范
*原文标题：Functional specification*

### 13. 错误分类
*原文标题：Error Classification*

⌈
Chapter  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.
⌋

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 14. Development 错误
*原文标题：Development Errors*

There are no development errors.

### 15. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 16. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 17. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 18. 初始化 and 关机
*原文标题：Initialization and shutdown*

Upstream requirements:
⌈
Efx library shall not require initialization phase. A Library function may be called at the very first step of ECU initialization, e.g. even by the OS or EcuM, thus the library shall be ready.
⌋

  Upstream requirements:
⌈
Efx library shall not require a shutdown operation phase.
⌋

### 19. Using 库 API
*原文标题：Using Library API*

Efx API can be directly called from BSW modules or SWC. No port definition is required. It is a pure function call.

The statement 'Efx.h' shall be placed by the developer or an application code generator but not by the RTE generator

Using a library should be documented. if a BSW module or a SWC uses a Library, the developer should add an Implementation-DependencyOnArtifact in the BSW/SWC template.

minVersion and maxVersion parameters correspond to the supplier version. In case of AUTOSAR library, these parameters may be left empty because a SWC or BSW module may rely on a library behaviour, not on a supplier implementation. However, the SWC or BSW modules shall be compatible with the AUTOSAR platform where they are integrated.

### 20. 库 implementation
*原文标题：library implementation*

Upstream requirements:
⌈
The Efx library shall be implemented in a way that the code can be shared among callers in different memory partitions.
⌋

  Upstream requirements:
⌈
Usage of macros should be avoided. The function should be declared as function or inline function. Macro #define should not be used.
⌋

  Upstream requirements:
⌈
A library function shall not call any BSW modules functions, e.g. the DET. A library function can call other library functions. Because a library function shall be re-entrant. But other BSW modules functions may not be re-entrant.
⌋

  Upstream requirements:
⌈
The library, written in C programming language, should conform to the MISRA C Standard.

Please refer to `SWS_BSW_00115` for more details.
⌋

  Upstream requirements:
⌈
Each AUTOSAR library Module implementation <library>*.c and

<library>*.h shall map their code to memory sections using the AUTOSAR memory mapping mechanism.
⌋

  Upstream requirements: ,
⌈
All AUTOSAR library Modules should use the AUTOSAR data types (integers, boolean) instead of native C data types, unless this library is clearly identified to be compliant only with a platform.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. API 规范
*原文标题：API specification*

### 22. Imported 类型
*原文标题：Imported types*

In this chapter, all types included from the following modules are listed:

 Definition of imported datatypes of module Efx
⌈
| Module | Header File | Imported Type |
|---|---|---|
| There are no imported types. | < | < |

⌋

It is observed that since the sizes of the integer types provided by the C language are implementation-defined, the range of values that may be represented within each of the integer types will vary between implementations.

The following mnemonic are used in the library routine names.

| Size | Platform Type | Mnemonic | Range |
|---|---|---|---|
| unsigned 8-Bit | boolean | u8 | [ TRUE, FALSE ] |
| signed 8-Bit | sint8 | s8 | [ -128, 127 ] |
| signed 16-Bit | sint16 | s16 | [ -32768, 32767 ] |
| signed 32-Bit | sint32 | s32 | [ -2147483648, 2147483647 ] |
| signed 64-Bit | sint64 | s64 | [-9223372036854775808, 9223372036854775807] |
| unsigned 8-Bit | uint8 | u8 | [ 0, 255 ] |
| unsigned 16-Bit | uint16 | u16 | [ 0, 65535 ] |
| unsigned 32-Bit | uint32 | u32 | [ 0, 4294967295 ] |
| unsigned 64-Bit | uint64 | u64 |  |

As a convention in the rest of the document:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 类型定义
*原文标题：Type definitions*

None

### 24. Comment about rounding

Two types of rounding can be applied:

Results are 'rounded off', it means:

* -0.5 < X < 0.5 rounded to 0
* 0.5 <= X <= 1 rounded to 1
* -1 <= X <= -0.5 rounded to -1

Results are rounded towards zero.

* -1 < X < 1 rounded to 0

### 25. Comment about routines optimized for target

The routines described in this library may be realized as regular routines or inline functions. For ROM optimization purposes, it is recommended that the c routines be realized as individual source files so they may be linked in on an as-needed basis.

For example, depending on the target, two types of optimization can be done:

* Some routines can be replaced by another routine using integer promotion
* Some routines can be replaced by the combination of a limiting routine and a routine with a different signature.

### 26. Mathematical functions 定义
*原文标题：Mathematical functions definitions*

This table describes the meaning of used symbols in below sections.

| Symbols | Description |
|---|---|
| Yn | Actual output to calculate |
| Yn-1 | Output value, one time step before |
| Xn | Actual input, given from the input |
| Xn-1 | Input, one time step before |
| a, b0, b1 | Filter dependent constants |

### 27. First-order low-pass filter

We consider a recursive first-order low-pass filter with a transfer function :

The new return value (Yn) at any point of time can be calculated given the previous value (Yn-1), the current value (Xn) and a known constant (K). The formula to calculate the same is as follows:

Yn = Yn-1 + (Xn - Yn-1) * K

Where b1=K and a = K - 1

The filter is a convergent low-pass filter only if the average value K is included in

### 28. First computation

Definition of API function `Efx_LpFilterFac1_`<InTypeMn><InTypeMn><InTypeMn>_<OutTypeMn>
⌈
| Service Name | Efx_LpFilterFac1_<InTypeMn><InTypeMn><InTypeMn>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Efx_LpFilterFac1_<InTypeMn><InTypeMn><InTypeMn>_<OutTypeMn> ( |  |

  <InType> Yn-1,
  <InType> Xn,
  <InType> fac
| ) | < |  |
|---|---|---|
| Service ID | 0x01 to 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Yn-1 | Old output value |
| ^ | Xn | Current measured value |
| ^ | fac | Factor value that represents the physical range: sint16: [-1, 0.999969482421875] uint8:  uint16:  uin32:  Only physical value  shall be used if the filter shall converge. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | <OutType> | Result (Yn) of the calculation |
| Description | This service computes the output of a first order low-pass filter | < |
| Available via | Efx.h | < |

⌋

⌈
Yn = Yn-1 + (((Xn - Yn-1) * fac) >> n)

Where 'n' is a shift that depends on the types used by the functions for the factor
⌋

⌈
In order to converge all the time, the result is corrected for value saturation using the following logic:

If (Yn == Yn-1)

If (((Xn - Yn-1) * fac) > 0)

Yn ++

End If

Endif
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Third computation

Definition of API function `Efx_LpFilter_`<InTypeMn>_<OutTypeMn>
⌈
| Service Name | Efx_LpFilter_<InTypeMn>_<OutTypeMn> | < |
|---|---|---|
| Syntax | <OutType> Efx_LpFilter_<InTypeMn>_<OutTypeMn> ( |  |

  <InType> input,
  <InType> old_output,
  uint32 tau_const,
  uint16 recurrence,
  uint8 reset,
  <InType> init_val,
  uint8* started
| ) | < |  |
|---|---|---|
| Service ID | 0x0D and 0x0E | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | input | Input signal |
| ^ | old_output | Previous value of the output value (filtered signal) |
| ^ | tau_const | Parameter Tau of the filter : the time constant (second) |
| ^ | recurrence | Delta time between two executions of the function |
| ^ | reset | Flag to reset the filtered signal |
| ^ | init_val | Initial value of the filter |
| Parameters (inout) | started | Pointer to the flag to detect the first call of the function |
| Parameters (out) | None | < |
| Return value | <OutType> | Return value of the filter |
| Description | This service computes the first one order discrete filter | < |
| Available via | Efx.h | < |

⌋

⌈
If (tau_const==0), then output = input
⌋

⌈
If (*started==0), then output = init_val

This flag is used to indicate the filter state.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. First-order High-pass filter

We consider a recursive first-order high-pass filter with a transfer function :

The new return value (Yn) at any point of time can be calculated given the previous value (Yn-1), the current input (Xn), the previous input (Xn-1) and a known constant (K). The formula to calculate the same is as follows:

Yn = Yn-1 - K * Yn-1 + ( Xn - Xn-1)

Where b0 = 1, b1 = -1 and a=K -1

The filter is a convergent high-pass filter only if the factor value m is included in

 Definition of API function `Efx_HpFilter_u8_s16`
⌈
| Service Name | Efx_HpFilter_u8_s16 | < |
|---|---|---|
| Syntax | sint16 Efx_HpFilter_u8_s16 ( |  |

  sint16 Yn-1,
  uint8 Xn,
  uint8 Xn-1,
  uint16 K
| ) | < |  |
|---|---|---|
| Service ID | 0x10 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Yn-1 | Previous sint16 output Physical range: [-256 , 255.9921875] Resolution: 1/2^(7) |
| ^ | Xn | Present uint8 input Physical range:  Resolution: 1 |
| ^ | Xn-1 | Previous uint8 input Physical range:  Resolution: 1 |
| ^ | K | Constant uint16 multiplying factor Physical range:  Resolution: 1/2^(16) |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | sint16 | Yn : Result of the calculation Physical range: [-256 , 255.9921875] Resolution: 1/2^7 |

Des

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Controller routines

Controller routines includes P, PT1, DT1, PD, I, PI, PID governors used in control system applications. For these controllers, the required parameters are derived using Laplace-Z transformation. The following parameters are required to calculate the new controller output yn and can be represented in the following equation.

Yn = a1 * Yn-1 + b0 * Xn + b1 * Xn-1 + b2 * Xn-2 + ..... + bn-1 * X1 + bn * X0

In the equation, the following symbols are used

| Symbols | Description |
|---|---|
| Yn | Actual output to calculate |
| Yn-1 | Output value, one time step before |
| Xn | Actual input, given from the input |
| Xn-1 | Input, one time step before |
| Xn-2 | Input, two time steps before |
| X1 | Input, n-1 time steps before |
| X0 | Input, n time steps before |
| a1, b0, b1, b2, bn-1, bn | Controller dependent proportional parameters are used to describe the weight of the states. |

### 32. 结构定义 for controller routines
*原文标题：Structure definitions for controller routines*

System parameters are separated from time or time equivalent parameters. The system parameters are grouped in controller dependent structures `Efx_Param`<controller>_Type, whereas the time (equivalent) parameters are assigned directly. Systems states are grouped in a structure `Efx_State`<controller>_Type except the actual input value Xn which is assigned directly.

The System parameters, used in the equations are given by:

K : Amplification factor, The amplification factor K shall have a resolution of 1/2^16.

T1 : Decay time constant.

T1rec is scaled by the factor 2^32.

T1rec is given by the equation: 2^32 / (10^6 * T1)

Tv : Lead time. Physical unit  describes the Lead time.

Tv is expressed in us (micro seconds) and shall have a resolution of 1/(2^8 * 10^6)

Tv range =  dT, with respect to

Tn : Follow-up time. Physical unit  describes the Follow-up time.

Tn is expressed in us and have a resolution of 1/10^6.

Tn is given by a reciprocal value (Tnrec) to avoid a division in the implementation.

Tnrec is scaled by the factor 2^32.

Tnrec is given by the equation: 2^32 / (10^6 * Tn).

The time and time equivalent parameters in the equation / implementation are given by:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. Proportional Controller

Proportional component calculates Y(x) = Kp * X.

# 'P' Controller

 Definition of API function `Efx_PCalc`
⌈
| Service Name | Efx_PCalc | < |
|---|---|---|
| Syntax | void Efx_PCalc ( |  |

  sint32 X_s32,
  sint32* P_ps32,
  sint32 K_s32
| ) | < |  |
|---|---|---|
| Service ID | 0x14 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | X_s32 | input value |
| ^ | K_s32 | Amplification factor (Quantized with 1/2^(16) per increment of 1 data representation unit) |
| Parameters (inout) | P_ps32 | Pointer to the calculated state |
| Parameters (out) | None | < |
| Return value | None | < |
| Description | This routine computes differential equation |  |

| Differential equation: Y = K * X | < |  |
|---|---|---|
| Available via | Efx.h | < |

⌋

⌈
Calculated value *P_ps32 = (K_s32 * X_s32) >> 16
⌋

⌈
Amplification factor is quantized with 1/2^16 per increment of 1 data representation unit
⌋

# Set 'P' State

This routine can be realised using inline function.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 34. Proportional controller with first order time constant

This routine calculates proportional element with first order time constant

# 'PT1' Controller

 Definition of API function `Efx_PT1Calc`
⌈
| Service Name | Efx_PT1Calc | < |
|---|---|---|
| Syntax | void Efx_PT1Calc ( |  |

  sint32 X_s32,
  `Efx_StatePT1_Type`* `State_cpst`,
  sint32 K_s32,
  sint32 `TeQ_s32`
| ) | < |  |
|---|---|---|
| Service ID | 0x2A | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | X_s32 | Input value for the PT1 element |
| ^ | K_s32 | Amplification factor |
| ^ | TeQ_s32 | Time equivalent |
| Parameters (inout) | State_cpst | Pointer to PT1 state structure |
| Parameters (out) | None | < |
| Return value | void | No return value |
| Description | This routine computes PT1 controller output value using below difference equation Yn = exp(-dT/T1) * Yn-1+ K(1 - exp(-dT/T1)) * Xn-1 | < |
| Available via | Efx.h | < |

⌋

⌈
This equation derives implementation :

`Output_value` = (`TeQ_s32` * `State_cpst`->Y1) + K_s32 * (1 - `TeQ_s32`) * `State_cpst`->X1

where `TeQ_s32` = exp (-dT/T1)
⌋

⌈
`Efx_CalcTeQ_s32` shall be used for calculation of time equivalent parameter `TeQ_s32` only if T1 > 0.
⌋

Note: If T1 = 0, a PT1 controller behaves like a P controller.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. Differential 组件 with time delay：DT1
*原文标题：Differential component with time delay : DT1*

This routine calculates differential element with first order time constant.

Routine `Efx_CalcTeQ_s32`, given in , shall be used for `Efx_DT1_s32` function to calculate the time equivalent TeQ.

# 'DT1' Controller - Type1

 Definition of API function `Efx_DT1Typ1Calc`
⌈
| Service Name | Efx_DT1Typ1Calc | < |
|---|---|---|
| Syntax | void Efx_DT1Typ1Calc ( |  |

  sint32 X_s32,
  `Efx_StateDT1Typ1_Type`* `State_cpst`,
  sint32 K_s32,
  sint32 `TeQ_s32`,
  sint32 dT_s32
| ) | < |  |
|---|---|---|
| Service ID | 0x30 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | X_s32 | Input value for the DT1 controller |
| ^ | K_s32 | Amplification factor |
| ^ | TeQ_s32 | Time equivalent |
| ^ | dT_s32 | Sample Time |
| Parameters (inout) | State_cpst | Pointer to state structure |
| Parameters (out) | None | < |
| Return value | void | No return value |
| Description | This routine computes DT1 controller output value using differential equation, Yn= exp(-dT/T1) * Yn-1+ K * (1- exp(-dT/T1)) * ((Xn-1 - Xn-2) / dT) | < |
| Available via | Efx.h | < |

⌋

⌈
This equation derives implementation :

`Output_value` = (TeQ * `State_cpst`->Y1) + K_s32 * (1 - TeQ) * ((`State_cpst`->X1 - `State_cpst`->X2) / dT)

where TeQ = exp(-dT/T1)

The result shall be Rounded towards Zero.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. Proportional and Differential controller

This routine is a combination of proportional and differential controller.

# PD Controller

 Definition of API function `Efx_PDCalc`
⌈
| Service Name | Efx_PDCalc | < |
|---|---|---|
| Syntax | void Efx_PDCalc ( |  |

  sint32 X_s32,
  `Efx_StatePD_Type`* `State_cpst`,
  const `Efx_ParamPD_Type`* `Param_cpst`,
  sint32 dT_s32
| ) | < |  |
|---|---|---|
| Service ID | 0x3A | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | X_s32 | Input value for the PD controller |
| ^ | Param_cpst | Pointer to parameter structure |
| ^ | dT_s32 | Sample Time |
| Parameters (inout) | State_cpst | Pointer to internal state structure |
| Parameters (out) | None | < |
| Return value | void | No return value |
| Description | This routine computes proportional plus derivative controller output value using differential equation: Yn= K(1+Tv/dT) * Xn - K(Tv/dT) * Xn-1 | < |
| Available via | Efx.h | < |

⌋

⌈
This equation derives implementation :

`Output_value` = (`Param_cpst`->K_C * (1+ `Param_cpst`->Tv_C/dT_s32) * X_s32) - (`Param_cpst`->K_C * (`Param_cpst`->Tv_C/dT_s32) * `State_cpst`->X1)

The result shall be Rounded towards Zero.
⌋

⌈
Calculated `Output_value` shall be stored to `State_cpst`->Y1.

`State_cpst`->Y1 = `Output_value`
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. Integral 组件
*原文标题：Integral component*

This routine calculates Integration element .

# 'I' Controller

 Definition of API function `Efx_ICalc`
⌈
| Service Name | Efx_ICalc | < |
|---|---|---|
| Syntax | void Efx_ICalc ( |  |

  sint32 X_s32,
  `Efx_StateI_Type`* `State_cpst`,
  sint32 K_s32,
  sint32 dT_s32
| ) | < |  |
|---|---|---|
| Service ID | 0x40 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | X_s32 | Input value for the 'I' controller |
| ^ | K_s32 | Amplification factor |
| ^ | dT_s32 | Sample Time |
| Parameters (inout) | State_cpst | Pointer to state variable. |
| Parameters (out) | None | < |
| Return value | void | No return value |
| Description | This routine computes 'I' controller output value using differential equation, Yn = Yn-1 + K * dT * Xn-1 | < |
| Available via | Efx.h | < |

⌋

⌈
This equation derives implementation :

`Output_value` = `State_cpst`->Y1 + K_s32 * dT_s32 * `State_cpst`->X1
⌋

⌈
Calculated `Output_value` and current input value shall be stored to `State_cpst`->Y1 and `State_cpst`->X1 respectively.

`State_cpst`->Y1 = `Output_value`

`State_cpst`->X1 = X_s32
⌋

⌈
Resolution of dT_s32 is 10^(-6) seconds per increment of 1 data representation unit
⌋

# 'I' Controller with limitation

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 38. Proportional and Integral controller

This routine is a combination of proportional and integral controller. Routine `Efx_CtrlSetLimits` shall be used to set limits for this controller in case of limited functionality.

# 'PI' Controller - Type1 (Implicit type)

 Definition of API function `Efx_PITyp1Calc`
⌈
| Service Name | Efx_PITyp1Calc | < |
|---|---|---|
| Syntax | void Efx_PITyp1Calc ( |  |

  sint32 X_s32,
  `Efx_StatePI_Type`* `State_cpst`,
  const `Efx_ParamPI_Type`* `Param_cpst`,
  sint32 dT_s32
| ) | < |  |
|---|---|---|
| Service ID | 0x45 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | X_s32 | Input value for the 'PI' controller |
| ^ | Param_cpst | Pointer to parameter structure |
| ^ | dT_s32 | Sample Time |
| Parameters (inout) | State_cpst | Pointer to the internal state structure. |
| Parameters (out) | None | < |
| Return value | void | No return value |
| Description | This routine computes Proportional plus integral controller (implicit type) output value using differential equation: Yn= Yn-1+ K * Xn - K * (1 - dT/Tn) * Xn-1 | < |
| Available via | Efx.h | < |

⌋

⌈
This equation derives implementation :

`Output_value` = `State_cpst`->Y1 + (`Param_cpst`->K_C * X_s32) - (`Param_cpst`->K_C * (1 - `Param_cpst`->Tnrec_C * dT_s32) * `State_cpst`->X1)
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. Proportional, Integral and Differential controller

This routine is a combination of Proportional, integral and differential controller. Routine `Efx_CtrlSetLimits` shall be used to set limits for this controller in case of limited functionality.

# 'PID' Controller - Type1 (Implicit type)

 Definition of API function `Efx_PIDTyp1Calc`
⌈
| Service Name | Efx_PIDTyp1Calc | < |
|---|---|---|
| Syntax | void Efx_PIDTyp1Calc ( |  |

  sint32 X_s32,
  `Efx_StatePID_Type`* `State_cpst`,
  const `Efx_ParamPID_Type`* `Param_cpst`,
  sint32 dT_s32
| ) | < |  |
|---|---|---|
| Service ID | 0x4B | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | X_s32 | Input value for the 'PID' controller |
| ^ | Param_cpst | Parameter structure |
| ^ | dT_s32 | Sample Time |
| Parameters (inout) | State_cpst | Pointer to the internal state structure. |
| Parameters (out) | None | < |
| Return value | void | No return value |
| Description | This routine computes Proportional plus integral plus derivative controller (implicit type) output value using differential equation: Yn=Yn-1+ K * (1 + Tv/dT) * Xn- K *(1 - dT/Tn + 2Tv/dT) * Xn-1 + K * (Tv/dT) * Xn-2 | < |
| Available via | Efx.h | < |

⌋

⌈
This equation derives implementation :

calc1 = `Param_cpst`->K_C * (1 + t_val) * X_s32

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Square root

Definition of API function `Efx_Sqrt_u32_u32`
⌈
| Service Name | Efx_Sqrt_u32_u32 | < |
|---|---|---|
| Syntax | uint32 Efx_Sqrt_u32_u32 ( |  |

  uint32 x_value
| ) | < |  |
|---|---|---|
| Service ID | 0x52 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | Argument Physical range:  Resolution: 1/2^(32) |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | uint32 | Return value of the function Physical range:  Resolution: 1/2^(32) |
| Description | This service computes the square root of a value | < |
| Available via | Efx.h | < |

⌋

⌈
Result = square_root ( x_value )
⌋

⌈
The result is rounded off.
⌋

 Definition of API function `Efx_Sqrt_u16_u16`
⌈
| Service Name | Efx_Sqrt_u16_u16 | < |
|---|---|---|
| Syntax | uint16 Efx_Sqrt_u16_u16 ( |  |

  uint16 x_value
| ) | < |  |
|---|---|---|
| Service ID | 0x53 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | x_value | Argument Physical range:  Resolution: 1/2^(16) |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | uint16 | Return value of the function Physical range:  Resolution: 1/2^(16) |
| Description | This service computes the square root of a value | < |
| Available via | Efx.h | < |

⌋

⌈
Result = square_root ( x_value )
⌋

⌈
The result is rounded off.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. Exponential

Definition of API function `Efx_Exp_s32_s32`
⌈
| Service Name | Efx_Exp_s32_s32 | < |
|---|---|---|
| Syntax | sint32 Efx_Exp_s32_s32 ( |  |

  sint32 Value1
| ) | < |  |
|---|---|---|
| Service ID | 0x55 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Value1 | Input value |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | sint32 | Return value of the function |
| Description | The routine returns the exponential value of the negated input value. | < |
| Available via | Efx.h | < |

⌋

⌈
Output = e^(-x)

where x = Value1
⌋

⌈
Output is quantized by 2^16

Output Range = ( * 2^16) =

Input Range = ([-10....10] * 2^16) =
⌋

### 其余 83 章（内容从略，见纯文本全文）

42. Average
43. Array Average
44. Moving Average
45. Hypotenuse
46. Trigonometric functions
47. Sine 功能
48. Cosine 功能
49. Inverse Sine 功能
50. Inverse cosine 功能
51. Rate limiter
52. Ramp routines
53. Ramp routine
54. Ramp 初始化
55. Ramp Set Slope
56. Ramp out routines
57. Ramp Jump routine
58. Ramp switch routine
59. Get Ramp Switch position
60. Check Ramp Activity
61. Hysteresis routines
62. Hysteresis
63. Hysteresis center half delta
64. Hysteresis left right
65. Hysteresis delta right
66. Hysteresis left delta
67. Debounce routines
68. Efx_Debounce
69. Efx_DebounceInit
70. Efx_DebounceSetparam
71. Ascending Sort Routine
72. Descending Sort Routine
73. Median sort routine
74. Edge 检测 routines
75. Edge bipol 检测
76. Edge falling 检测
77. Edge rising 检测
78. Interval routines
79. Interval Closed
80. Interval Open
81. Interval Left Open
82. Interval Right Open
83. Counter routines
84. Flip-Flop routine
85. Limiter routines
86. 64 bits functions
87. 通用需求
88. Absolute value
89. Additions
90. Subtractions
91. Multiplications
92. Division
93. Modulo
94. Signum 功能
95. Callback 通知
96. Scheduled functions
97. Expected 接口
98. Mandatory 接口
99. Optional 接口
100. Configurable 接口
101. 时序图
102. 配置规范
103. How to read this chapter
104. Containers and 配置 parameters
105. 发布信息
106. 附录
107. 不适用需求
108. Change history of AUTOSAR traceable items
109. Traceable item history of this document according to AUTOSAR Release R23-11
110. Added 规范 Items in R23-11
111. Changed 规范 Items in R23-11
112. Deleted 规范 Items in R23-11
113. Traceable item history of this document according to AUTOSAR Release R24-11
114. Added 规范 Items in R24-11
115. Changed 规范 Items in R24-11
116. Deleted 规范 Items in R24-11
117. Traceable item history of this document according to AUTOSAR Release R25-11
118. Added 规范 Items in R25-11
119. Changed 规范 Items in R25-11
120. Deleted 规范 Items in R25-11
121. Traceable item history of this document according to AUTOSAR Release R26-11
122. Added 规范 Items in R26-11
123. Changed 规范 Items in R26-11
124. Deleted 规范 Items in R26-11
