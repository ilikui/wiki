# Specification of CRC Library (`CRCLibrary`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 016 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_CRCLibrary_016\AUTOSAR_CP_SWS_CRCLibrary.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_CRCLibrary_016\AUTOSAR_CP_SWS_CRCLibrary.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_CRCLibrary_016\zzgen\CP_SWS_CRCLibrary.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Library CRC.

The CRC library contains the following routines for CRC calculation:

* CRC8: SAEJ1850
* CRC8H2F: CRC8 0x2F polynomial
* CRC16
* CRC32
* CRC32P4: CRC32 0xF4ACFB13 polynomial
* CRC32P76: CRC32 0x6938392D polynomial
* CRC64: CRC-64-ECMA

For all routines (CRC8, CRC8H2F, CRC16, CRC32, CRC32P4 and CRC64), the following calculation methods are possible:

* Table based calculation: Fast execution, but larger code size (ROM table)
* Runtime calculation: Slower execution, but small code size (no ROM table)

All routines are re-entrant and can be used by multiple applications at the same time.

## 模块依赖

There are no dependencies to other modules.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Library CRC.

The CRC library contains the following routines for CRC calculation:

* CRC8: SAEJ1850
* CRC8H2F: CRC8 0x2F polynomial
* CRC16
* CRC32
* CRC32P4: CRC32 0xF4ACFB13 polynomial
* CRC32P76: CRC32 0x6938392D polynomial
* CRC64: CRC-64-ECMA

For all routines (CRC8, CRC8H2F, CRC16, CRC32, CRC32P4 and CRC64), the following calculation methods are possible:

* Table based calculation: Fast execution, but larger code size (ROM table)
* Runtime calculation: Slower execution, but small code size (no ROM table)

All routines are re-entrant and can be used by multiple applications at the same time.

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the CRC module that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| ALU | Arithmetic Logic Unit |

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Basic Software modules , which is also valid for CRC.

Thus, the specification SWS BSW General shall be considered as additional and required specification for AUTOSAR CRC Library.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

No known limitations.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

No restrictions.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

There are no dependencies to other modules.

### 10. 需求追踪
*原文标题：Requirements Tracing*

The following tables reference the requirements specified in  and  and links to the fulfillment of these. Please note that if column "Satisfied by" is empty for a specific requirement this means that this requirement is not fulfilled by this document.

| Requirement | Description | Satisfied by |
|---|---|---|
| Each module shall provide version information |  |  |
| Each library shall provide one header file with its public interface |  |  |
| All library functions shall be re-entrant |  |  |
| All function names and type names shall start with "Library short name_" |  |  |
| A library function may only call library functions |  |  |
| All CRC routines shall allow step-by-step-wise calculation of a large data block |  |  |
| The CRC library shall support the standard generator polynomials |  |  |

### 11. 功能规范
*原文标题：Functional specification*

### 12. 基础概念 of CRC Codes
*原文标题：Basic Concepts of CRC Codes*

### 13. Mathematical 描述
*原文标题：Mathematical Description*

Let D be a bitwise representation of data with a total number of n bit, i.e.

D = (d_{n-1}, d_{n-2}, d_{n-3}, \ldots{} , d_1, d_0),

with d_0,d_1,\ldots{} = 0b,1b. The corresponding Redundant Code C is represented by n+k bit as

C =(D, R)= (d_{n-1}, d_{n-2}, d_{n-3}, \ldots{} , d_2, d_1, d_0, r_{k-1}, \ldots{} , r_2, r_1, r_0 )

with r_0, r_1,\ldots{} = 0b,1b and R = (r_{k-1}, \ldots{} , r_2, r_1, r_0) . The code is simply a concatenation of the data and the redundant part. (For our application, we will chose k = 16, 32 and n as a multiple of 16 respectively 32).

CRC-Algorithms are related to polynomials with coefficients in the finite field of two element, using arithmetic operations \oplus and \ast according to the following tables.

The \oplus operation is identified as the binary operation exclusive-or, that is usually available in the ALU of any CPU.

| \oplus | 0b | 1b |  | \ast | 0b | 1b |
|---|---|---|---|---|---|---|
| 0b | 0b | 1b |  | 0b | 0b | 0b |
| 1b | 1b | 0b |  | 1b | 0b | 1b |

For simplicity, we will write ab instead of a\ast b

We introduce some examples for polynomials with coefficients in the field of two elements and give the simplified notation of it.

(ex.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. Euclidian Algorithm for Binary Polynomials and Bit-Sequences

Given a Polynomial P_n(X) = p_nX^n +p_{n-1}X^{n-1}+ \ldots{} + p_2X^2 + p_1X + p_0 with coefficients in the finite field of two elements. Let Q(X) = X^k + q_{k-1} X^{k-1} + q_{k-2} X^{k-2} + \ldots{} + q_2 X^2 + q_1 X + q_0 be another polynomial of exact order k>0. Let R_n(X) be the remainder of the polynomial division of maximum order k-1 and M_n(X) corresponding so that

R_n(X) \oplus M_n(X) Q(X) = P_n(X)

Euclidian Algorithm - Recursive

(Termination of recursion)

If n < k, then choose R_n(X) = P_n(X) and M_n = 0.

(Recursion n+1 \to n)

Let P_{n+1}(X) be of maximum order n+1.

If n+1>= k calculate P_n(X) = P_{n+1}(X) - p_{n+1} Q(X) X^{n-k+1}. This polynomial is of maximum order n. Then

P_{n+1}(X) \;\mathrm{mod}\; Q(X) = P_n(X) \;\mathrm{mod}\; Q(X)

Proof of recursion

Choose R_{n+1}(X) = P_{n+1}(X) \;\mathrm{mod}\; Q(X) and M_{n+1}(X) so that

R_{n+1}(X) \oplus M_{n+1}(X) Q(X) = P_{n+1}(X)

Then R_{n+1}(X) - R_n(X) = P_{n+1}(X) - M_{n+1}(X) Q(X) - P_n(X) \oplus M_n(X) Q(X).

With P_{n+1}(X) - P_n(X) = p_{n+1} Q(X) X^{n-k+1} we obtain:

R_{n+1}(X) - R_n(X) = p_{n+1} Q(X) X^{n-k+1} + M_n(X) Q(X) - M_{n+1}(X) Q(X)

R_{n+1}(X) - R_n(X) = Q(X)

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. CRC calculation, Variations and Parameter

Based on the Euclidian Algorithm, some variations have been developed in order to improve the calculation performance. All these variations do not improve the capability to detect or correct errors - the so-called Hamming Distance of the resulting code is determined only by the generator polynomial. Variations simply optimize for different implementing ALUs.

CRC-Calculation methods are characterized as follows:

# Rule for Mapping of Data to a bit sequence (d_{n-1}, d_{n-2}, d_{n-3}, \ldots{} , d_1, d_0) and the corresponding data polynomial D(X) (standard or reflected data).
# Generator polynomial G(X)
# Start value and corresponding Polynomial S(X)
# Appendix A(X), also called XOR-value for modifying the final result.
# Rule for mapping the resulting CRC-remainder R(X) to codeword. (Standard or reflected data)

The calculation itself is organized in the following steps

* Map Data to D(X)
* Perform Euclidian Algorithm on X^k D(X) + X^{n-k-1} S(X) + A(X) and determine R(X) = [ X^k D(X) + X^{n-k-1} S(X) + A(X)] \;\mathrm{mod}\; G(X)
* Map D(X), R(X) to codeword

### 16. Encoding of CRC polynomials

There are three notations for encoding the polynomial, so to clarify, all three notations are shown bellow as examples for the 42'F0'E1'EB'A9'EA'36'93h polynomial:

| 1 | Polynomial as binary | 0001'0100'0010'1111'0000'1110'0001'1110'1011'1010'1001' 1110'1010'0011'0110'1001'0011 |
|---|---|---|
| 2 | Normal representation with high bit | 01'42'F0'E1'EB'A9'EA'36'93h |
| 3 | Normal representation | 42'F0'E1'EB'A9'EA'36'93h |
| 4 | Reversed reciprocal representation (=Koopman representation) | A1'78'70'F5'D4'F5'1B'49h |

Notes:

# Normal representation with high bit = hex representation of polynomial as binary
# Normal representation with high bit = Koopman representation * 2 + 1

Within this document (and consistently unless otherwise noted) in AUTOSAR CP the Normal representation (without high bit), i.e., notation 3 in the above table, is used.

### 17. Standard parameters

This section gives a rough overview on the standard parameters that are commonly used for 8-bit, 16-bit and 32-bit CRC calculation.

* CRC result width: Defines the result data width of the CRC calculation.

* Polynomial: Defines the generator polynomial which is used for the CRC algorithm.

* Initial value: Defines the start condition for the CRC algorithm.
* Input data reflected: Defines whether the bits of each input byte are reflected before being processed (see definition below).

* Result data reflected: Similar to "Input data reflected" this parameter defines whether the bits of the CRC result are reflected (see definition below). The result is reflected over 8-bit for a CRC8, over 16-bit for a CRC16 and over 32-bit for a CRC32.
* XOR value: This Value is XORed to the final register value before the value is returned as the official checksum.

* Check: This field is a check value that can be used as a weak validator of implementations of the algorithm. The field contains the checksum obtained when the ASCII values '1' '2' '3' '4' '5' '6' '7' '8' '9' corresponding to values 31h 32h 33h 34h 35h 36h 37h 38h 39h is fed through the specified algorithm.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. 8-bit CRC calculation

### 19. 8-bit SAE J1850 CRC Calculation

Upstream requirements:
⌈
The `Crc_CalculateCRC8` function of the CRC module shall implement the CRC8 routine based on the SAE-J1850 CRC8 Standard, according to .
⌋

 SAE-J1850 CRC8 Polynomial
  Upstream requirements:
⌈
| CRC result width: | 8 bits |
|---|---|
| Polynomial: | 1Dh |
| Initial value: | FFh |
| Input data reflected: | No |
| Result data reflected: | No |
| XOR value: | FFh |
| Check: | 4Bh |
| Magic check: | C4h |

⌋

  Upstream requirements:
⌈
The `Crc_CalculateCRC8` function of the CRC module shall provide the following CRC results, according to .
⌋

 `Crc_CalculateCRC8` results
  Upstream requirements:
⌈
| Data bytes (hexadecimal) | < | < | < | < | < | < | < | < | CRC |
|---|---|---|---|---|---|---|---|---|---|
| 00 | 00 | 00 | 00 |  |  |  |  |  | 59 |
| F2 | 01 | 83 |  |  |  |  |  |  | 37 |
| 0F | AA | 00 | 55 |  |  |  |  |  | 79 |
| 00 | FF | 55 | 11 |  |  |  |  |  | B8 |
| 33 | 22 | 55 | AA | BB | CC | DD | EE | FF | CB |
| 92 | 6B | 55 |  |  |  |  |  |  | 8C |
| FF | FF | FF | FF |  |  |  |  |  | 74 |

⌋

### 20. 8-bit 0x2F polynomial CRC Calculation

Upstream requirements:
⌈
The `Crc_CalculateCRC8H2F` function of the CRC module shall implement the CRC8 routine based on the generator polynomial 0x2F, according to .
⌋

 CRC8 Polynomial
  Upstream requirements:
⌈
| CRC result width: | 8 bits |
|---|---|
| Polynomial: | 2Fh |
| Initial value: | FFh |
| Input data reflected: | No |
| Result data reflected: | No |
| XOR value: | FFh |
| Check: | DFh |
| Magic check: | 42h |

⌋

  Upstream requirements:
⌈
The `Crc_CalculateCRC8H2F` function of the CRC module shall provide the following CRC results, according to .
⌋

 `Crc_CalculateCRC8H2F` results
  Upstream requirements:
⌈
| Data bytes (hexadecimal) | < | < | < | < | < | < | < | < | CRC |
|---|---|---|---|---|---|---|---|---|---|
| 00 | 00 | 00 | 00 |  |  |  |  |  | 12 |
| F2 | 01 | 83 |  |  |  |  |  |  | C2 |
| 0F | AA | 00 | 55 |  |  |  |  |  | C6 |
| 00 | FF | 55 | 11 |  |  |  |  |  | 77 |
| 33 | 22 | 55 | AA | BB | CC | DD | EE | FF | 11 |
| 92 | 6B | 55 |  |  |  |  |  |  | 33 |
| FF | FF | FF | FF |  |  |  |  |  | 6C |

⌋

### 21. 16-bit CRC calculation

### 22. 16-bit CCITT-FALSE CRC16

Upstream requirements:
⌈
The CRC module shall implement the CRC16 routine based on the CCITT-FALSE CRC16 Standard, according to .
⌋

Note concerning the standard document :

The computed FCS is equal to CRC16 XOR FFFFh when the frame is built (first complement of the CCITT-FALSE CRC16).

For the verification, the CRC16 (CCITT-FALSE) is computed on the same data + FCS, and the resulting value is always 1D0Fh.

Note that, if during the verification, the check would have been done on data + CRC16 (i.e. FCS XOR FFFFh) the resulting value would have been 0000h that is the CCITT-FALSE magic check.

 CCITT-FALSE CRC16 Polynomial
  Upstream requirements:
⌈
| CRC result width: | 16 bits |
|---|---|
| Polynomial: | 1021h |
| Initial value: | FFFFh |
| Input data reflected: | No |
| Result data reflected: | No |
| XOR value: | 0000h |
| Check: | 29B1h |
| Magic check: | 0000h |

⌋

  Upstream requirements:
⌈
The `Crc_CalculateCRC16` function of the CRC module shall provide the following CRC results, according to .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. 16-bit 0x8005 polynomial CRC calculation

Upstream requirements:
⌈
The CRC module shall implement the CRC16 based on the CRC-16/ARC Standard, according to .
⌋

 CRC-16/ARC Polynomial
  Upstream requirements:
⌈
| CRC result width: | 16 bits |
|---|---|
| Polynomial: | 8005h |
| Initial value: | 0000h |
| Input data reflected: | Yes |
| Result data reflected: | Yes |
| XOR value: | 0000h |
| Check: | BB3Dh |
| Magic check: | 0000h |

⌋

  Upstream requirements:
⌈
The `Crc_CalculateCRC16ARC` function of the CRC module shall provide the following CRC results, according to .
⌋

 `Crc_CalculateCRC16ARC` results
  Upstream requirements:
⌈
| Data bytes (hexadecimal) | < | < | < | < | < | < | < | < | CRC |
|---|---|---|---|---|---|---|---|---|---|
| 00 | 00 | 00 | 00 |  |  |  |  |  | 0000 |
| F2 | 01 | 83 |  |  |  |  |  |  | C2E1 |
| 0F | AA | 00 | 55 |  |  |  |  |  | 0BE3 |
| 00 | FF | 55 | 11 |  |  |  |  |  | 6CCF |
| 33 | 22 | 55 | AA | BB | CC | DD | EE | FF | AE98 |
| 92 | 6B | 55 |  |  |  |  |  |  | E24E |
| FF | FF | FF | FF |  |  |  |  |  | 9401 |

⌋

### 24. 32-bit CRC calculation

### 25. 32-bit Ethernet CRC Calculation

Upstream requirements:
⌈
The CRC module shall implement the CRC32 routine based on the IEEE-802.3 CRC32 Ethernet Standard, according to .
⌋

 IEEE-802.3 CRC32 Ethernet Polynomial
  Upstream requirements:
⌈
| CRC result width: | 32 bits |
|---|---|
| Polynomial: | 04C11DB7h |
| Initial value: | FFFFFFFFh |
| Input data reflected: | Yes |
| Result data reflected: | Yes |
| XOR value: | FFFFFFFFh |
| Check: | CBF43926h |
| Magic check*: | DEBB20E3h |

⌋

*Important note: To match the magic check value, the CRC must be appended in little endian format, i.e. low significant byte first. This is due to the reflections of the input and the result.

  Upstream requirements:
⌈
The `Crc_CalculateCRC32` function of the CRC module shall provide the following CRC results, according to
⌋

 `Crc_CalculateCRC32` results
  Upstream requirements:
⌈
| Data bytes (hexadecimal) | < | < | < | < | < | < | < | < | CRC |
|---|---|---|---|---|---|---|---|---|---|
| 00 | 00 | 00 | 00 |  |  |  |  |  | 2144DF1C |
| F2 | 01 | 83 |  |  |  |  |  |  | 24AB9D77 |
| 0F | AA | 00 | 55 |  |  |  |  |  | B6C9B287 |
| 00 | FF | 55 | 11 |  |  |  |  |  | 32A06212 |
| 33 | 22 | 55 | AA | BB | CC | DD | EE | FF | B0AE863D |
| 92 | 6B | 55 |  |  |  |  |  |  | 9CDEA29B |
| FF | FF | FF | FF |  |  |  |  |  | FFFFFFFF |

⌋

### 26. 32-bit 0xF4ACFB13 polynomial CRC calculation

This 32-bit CRC function is described in . It has an advantage with respect to the Ethernet CRC - it has a Hamming Distance of 6 up to 4kB.

  Upstream requirements:
⌈
The CRC module shall implement the CRC32 routine using the 0xF4'AC'FB'13 polynomial, according to .
⌋

 0xF4'AC'FB'13 Polynomial
  Upstream requirements:
⌈
| CRC result width: | 32 bits |
|---|---|
| Polynomial: | F4'AC'FB'13h |
| Initial value: | FFFFFFFFh |
| Input data reflected: | Yes |
| Result data reflected: | Yes |
| XOR value: | FFFFFFFFh |
| Check: | 16'97'D0'6Ah |
| Magic check*: | 90'4C'DD'BFh |
| Hamming distance: | 6, up to 4096 bytes (including CRC) |

⌋

*Important note: To match the magic check value, the CRC must be appended in little endian format, i.e. low significant byte first. This is due to the reflections of the input and the result.

  Upstream requirements:
⌈
The `Crc_CalculateCRC32P4` function of the CRC module shall provide the following CRC results, according to .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. 32-bit SAE J1939-76 CRC Calculation

SAE J1939-76 CRC Calculation
  Status: DRAFT
  Upstream requirements:
⌈
The CRC module shall implement the CRC32 routine based on the SAE J1939-76 CRC32 Standard, according to .
⌋

 SAE J1939-76 CRC32 Polynomial
  Status: DRAFT
  Upstream requirements:
⌈
| CRC result width: | 32 bits |
|---|---|
| Polynomial: | 6938392Dh |
| Initial value: | FFFFFFFFh |
| Input data reflected: | No |
| Result data reflected: | No |
| XOR value: | 00000000h |
| Check: | 4DB36B68 |
| Magic check: | 00000000h |

⌋

 `Crc_CalculateCRC32P76` results
  Status: DRAFT
  Upstream requirements:
⌈
The `Crc_CalculateCRC32P76` function of the CRC module shall provide the following CRC results, according to
⌋

 `Crc_CalculateCRC32P76` results
  Status: DRAFT
  Upstream requirements:
⌈
| Data bytes (hexadecimal) | < | < | < | < | < | < | < | < | CRC |
|---|---|---|---|---|---|---|---|---|---|
| 00 | 00 | 00 | 00 |  |  |  |  |  | FFD18D4D |
| F2 | 01 | 83 |  |  |  |  |  |  | 22E39B5D |
| 0F | AA | 00 | 55 |  |  |  |  |  | 1E7F978E |
| 00 | FF | 55 | 11 |  |  |  |  |  | E3574865 |
| 33 | 22 | 55 | AA | BB | CC | DD | EE | FF | 09ADD524 |
| 92 | 6B | 55 |  |  |  |  |  |  | 93057FCD |
| FF | FF | FF | FF |  |  |  |  |  | 00000000 |

⌋

### 28. 64-bit CRC calculation

### 29. 64-bit ECMA polynomial CRC calculation

This 64-bit CRC function is described in . It has a good hamming distance of 4, for long data (see below).

  Upstream requirements:
⌈
The CRC module shall implement the CRC64 routine using the 0x42'F0'E1'EB'A9'EA'36'93 polynomial, according to .
⌋

 0x42'F0'E1'EB'A9'EA'36'93 Polynomial
  Upstream requirements:
⌈
| CRC result width: | 64 bits |
|---|---|
| Polynomial: | 42'F0'E1'EB'A9'EA'36'93h |
| Initial value: | FFFFFFFFFFFFFFFFh |
| Input data reflected: | Yes |
| Result data reflected: | Yes |
| XOR value: | FFFFFFFFFFFFFFFFh |
| Check: | 99'5D'C9'BB'DF'19'39'FAh |
| Magic check*: | 49'95'8C'9A'BD'7D'35'3Fh |
| Hamming distance: | 4, up to almost 8 GB |

⌋

*Important note: To match the magic check value, the CRC must be appended in little endian format, i.e. low significant byte first. This is due to the reflections of the input and the result.

  Upstream requirements:
⌈
The `Crc_CalculateCRC64` function of the CRC module shall provide the following CRC results, according to .
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. 通用行为
*原文标题：General behavior*

Data blocks are passed to the CRC routines using the parameters "start address", "size" and "start value". The return value is the CRC result.

### 31. Version check

For details, refer to .

### 32. Debugging concept

None

### 33. 错误分类
*原文标题：Error Classification*

The document  describes the error handling of the Basic Software in detail. Above all, it constitutes a classification scheme consisting of five error types which may occur in BSW modules.

Based on this foundation, the following section specifies particular errors arranged in the respective subsections below.

### 34. Development 错误
*原文标题：Development Errors*

There are no development errors.

### 35. Runtime 错误
*原文标题：Runtime Errors*

There are no runtime errors.

### 36. Production 错误
*原文标题：Production Errors*

There are no production errors.

### 37. Extended Production 错误
*原文标题：Extended Production Errors*

There are no extended production errors.

### 38. API 规范
*原文标题：API specification*

### 39. Imported 类型
*原文标题：Imported types*

In this chapter, all types included from the following modules are listed:

 Definition of imported datatypes of module Crc
⌈
| Module | Header File | Imported Type |
|---|---|---|
| There are no imported types. | < | < |

⌋

### 40. 类型定义
*原文标题：Type definitions*

None.

### 41. 功能定义
*原文标题：Function definitions*

This chapter contains all APIs provided by the module. The substructure of this chapter shall be based on possible users of the API, the users are identified via the different provided headers. If only the <Mip>.h is provided then no further substructure is needed.

The caller of a Crc API is responsible to pass valid arguments. Crc functions do not perform checks on validity of input parameters.

  Upstream requirements:
⌈
The CRC library functions shall not call any BSW modules functions (e.g. the DET).
⌋

⌈
The CRC function (with parameter `Crc_IsFirstCall` = TRUE) shall do the following operations:

# As 'Initial value' of the CRC computation, uses the attribute 'Initial value' of the polynomial:

  Crc = PolynomialInitVal
# If the attribute 'Input data reflected' of the polynomial is TRUE, then reflects input data (byte per byte) obtained via parameters `Crc_DataPtr` and `Crc_Length`:

  Data = \mathrm{reflect}_8 (Data) \textrm{ (in the case 'Input data reflected' is TRUE)}
# Compute the CRC over the data, the last CRC and the CRC polynomial:

  Crc = f(Data, Crc, Polynomial)
# Execute the XOR operation between crc and 'XOR value' of the polynomial:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. 8-bit CRC Calculation

### 43. 8-bit SAE J1850 CRC Calculation

Definition of API function `Crc_CalculateCRC8`
  Upstream requirements: , , ,
⌈
| Service Name | Crc_CalculateCRC8 | < |
|---|---|---|
| Syntax | uint8 Crc_CalculateCRC8 ( |  |

  const uint8* `Crc_DataPtr`,
  uint32 `Crc_Length`,
  uint8 `Crc_StartValue8`,
  boolean `Crc_IsFirstCall`
| ) | < |  |
|---|---|---|
| Service ID | 0x01 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Crc_DataPtr | Pointer to start address of data block to be calculated. |
| ^ | Crc_Length | Length of data block to be calculated in bytes. |
| ^ | Crc_StartValue8 | Start value when the algorithm starts. |
| ^ | Crc_IsFirstCall | TRUE: First call in a sequence or individual CRC calculation; start from initial value, ignore Crc_StartValue8. FALSE: Subsequent call in a call sequence; Crc_StartValue8 is interpreted to be the return value of the previous function call. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | uint8 | 8 bit result of CRC calculation. |
| Description | This service makes a CRC8 calculation on Crc_Length data bytes, with SAE J1850 parameters | < |
| Available via | Crc.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. 8-bit 0x2F polynomial CRC Calculation

Definition of API function `Crc_CalculateCRC8H2F`
  Upstream requirements: , , ,
⌈
| Service Name | Crc_CalculateCRC8H2F | < |
|---|---|---|
| Syntax | uint8 Crc_CalculateCRC8H2F ( |  |

  const uint8* `Crc_DataPtr`,
  uint32 `Crc_Length`,
  uint8 `Crc_StartValue8H2F`,
  boolean `Crc_IsFirstCall`
| ) | < |  |
|---|---|---|
| Service ID | 0x05 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Crc_DataPtr | Pointer to start address of data block to be calculated. |
| ^ | Crc_Length | Length of data block to be calculated in bytes. |
| ^ | Crc_StartValue8H2F | Start value when the algorithm starts. |
| ^ | Crc_IsFirstCall | TRUE: First call in a sequence or individual CRC calculation; start from initial value, ignore Crc_StartValue8H2F. FALSE: Subsequent call in a call sequence; Crc_StartValue8H2F is interpreted to be the return value of the previous function call. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | uint8 | 8 bit result of CRC calculation. |
| Description | This service makes a CRC8 calculation with the Polynomial 0x2F on Crc_Length | < |
| Available via | Crc.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 45. 16-bit CRC Calculation

### 46. 16-bit CCITT-FALSE CRC16

Definition of API function `Crc_CalculateCRC16`
  Upstream requirements: , , ,
⌈
| Service Name | Crc_CalculateCRC16 | < |
|---|---|---|
| Syntax | uint16 Crc_CalculateCRC16 ( |  |

  const uint8* `Crc_DataPtr`,
  uint32 `Crc_Length`,
  uint16 `Crc_StartValue16`,
  boolean `Crc_IsFirstCall`
| ) | < |  |
|---|---|---|
| Service ID | 0x02 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Crc_DataPtr | Pointer to start address of data block to be calculated. |
| ^ | Crc_Length | Length of data block to be calculated in bytes. |
| ^ | Crc_StartValue16 | Start value when the algorithm starts. |
| ^ | Crc_IsFirstCall | TRUE: First call in a sequence or individual CRC calculation; start from initial value, ignore Crc_StartValue16. FALSE: Subsequent call in a call sequence; Crc_StartValue16 is interpreted to be the return value of the previous function call. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | uint16 | 16 bit result of CRC calculation. |
| Description | This service makes a CRC16 calculation on Crc_Length data bytes. | < |
| Available via | Crc.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. 16-bit 0x8005 polynomial CRC calculation

Definition of API function `Crc_CalculateCRC16ARC`
  Upstream requirements: , , ,
⌈
| Service Name | Crc_CalculateCRC16ARC | < |
|---|---|---|
| Syntax | uint16 Crc_CalculateCRC16ARC ( |  |

  const uint8* `Crc_DataPtr`,
  uint32 `Crc_Length`,
  uint16 `Crc_StartValue16`,
  boolean `Crc_IsFirstCall`
| ) | < |  |
|---|---|---|
| Service ID | 0x08 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Crc_DataPtr | Pointer to start address of data block to be calculated. |
| ^ | Crc_Length | Length of data block to be calculated in bytes. |
| ^ | Crc_StartValue16 | Start value when the algorithm starts. |
| ^ | Crc_IsFirstCall | TRUE: First call in a sequence or individual CRC calculation; start from initial value, ignore Crc_StartValue16. FALSE: Subsequent call in a call sequence; Crc_StartValue16 is interpreted to be the return value of the previous function call. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | uint16 | 16 bit result of CRC calculation. |
| Description | This service makes a CRC16 calculation on Crc_Length data bytes, using the polynomial 0x8005. | < |
| Available via | Crc.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 48. 32-bit CRC Calculation

### 49. 32-bit Ethernet CRC Calculation

Definition of API function `Crc_CalculateCRC32`
  Upstream requirements: , , ,
⌈
| Service Name | Crc_CalculateCRC32 | < |
|---|---|---|
| Syntax | uint32 Crc_CalculateCRC32 ( |  |

  const uint8* `Crc_DataPtr`,
  uint32 `Crc_Length`,
  uint32 `Crc_StartValue32`,
  boolean `Crc_IsFirstCall`
| ) | < |  |
|---|---|---|
| Service ID | 0x03 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Crc_DataPtr | Pointer to start address of data block to be calculated. |
| ^ | Crc_Length | Length of data block to be calculated in bytes. |
| ^ | Crc_StartValue32 | Start value when the algorithm starts. |
| ^ | Crc_IsFirstCall | TRUE: First call in a sequence or individual CRC calculation; start from initial value, ignore Crc_StartValue32. FALSE: Subsequent call in a call sequence; Crc_StartValue32 is interpreted to be the return value of the previous function call. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | uint32 | 32 bit result of CRC calculation. |
| Description | This service makes a CRC32 calculation on Crc_Length data bytes. | < |
| Available via | Crc.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 50. 32-bit 0xF4ACFB13 polynomial CRC calculation

Definition of API function `Crc_CalculateCRC32P4`
  Upstream requirements: , , ,
⌈
| Service Name | Crc_CalculateCRC32P4 | < |
|---|---|---|
| Syntax | uint32 Crc_CalculateCRC32P4 ( |  |

  const uint8* `Crc_DataPtr`,
  uint32 `Crc_Length`,
  uint32 `Crc_StartValue32`,
  boolean `Crc_IsFirstCall`
| ) | < |  |
|---|---|---|
| Service ID | 0x06 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Crc_DataPtr | Pointer to start address of data block to be calculated. |
| ^ | Crc_Length | Length of data block to be calculated in bytes. |
| ^ | Crc_StartValue32 | Start value when the algorithm starts. |
| ^ | Crc_IsFirstCall | TRUE: First call in a sequence or individual CRC calculation; start from initial value, ignore Crc_StartValue32. FALSE: Subsequent call in a call sequence; Crc_StartValue32 is interpreted to be the return value of the previous function call. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | uint32 | 32 bit result of CRC calculation. |
| Description | This service makes a CRC32 calculation on Crc_Length data bytes, using the polynomial 0xF4ACFB13. |  |

| This CRC routine is used by E2E Profile 4. | < |  |
|---|---|---|
| Available via | Crc.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 51. 32-bit SAE J1939-76 CRC Calculation

Definition of API function `Crc_CalculateCRC32P76`
  Status: DRAFT
  Upstream requirements: , , ,
⌈
| Service Name | Crc_CalculateCRC32P76 (draft) | < |
|---|---|---|
| Syntax | uint32 Crc_CalculateCRC32P76 ( |  |

  const uint8* `Crc_DataPtr`,
  uint32 `Crc_Length`,
  uint32 `Crc_StartValue32`,
  boolean `Crc_IsFirstCall`
| ) | < |  |
|---|---|---|
| Service ID | 0x09 | < |
| Sync/Async | Synchronous | < |
| Reentrancy | Reentrant | < |
| Parameters (in) | Crc_DataPtr | Pointer to start address of data block to be calculated. |
| ^ | Crc_Length | Length of data block to be calculated in bytes. |
| ^ | Crc_StartValue32 | Start value when the algorithm starts. |
| ^ | Crc_IsFirstCall | TRUE: First call in a sequence or individual CRC calculation; start from initial value, ignore Crc_StartValue32. FALSE: Subsequent call in a call sequence; Crc_StartValue32 is interpreted to be the return value of the previous function call. |
| Parameters (inout) | None | < |
| Parameters (out) | None | < |
| Return value | uint32 | 32 bit result of CRC calculation. |
| Description | This service makes a CRC32 calculation on Crc_Length data bytes, using the polynomial 0x0x6938392D. |  |

| Tags: atp.Status=draft | < |  |
|---|---|---|
| Available via | Crc.h | < |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 44 章（内容从略，见纯文本全文）

52. 64-bit CRC Calculation
53. 64-bit 0x42F0E1EBA9EA3693 polynomial CRC calculation
54. Scheduled functions
55. Expected 接口
56. Mandatory 接口
57. Optional 接口
58. Callout 接口
59. Configurable 接口
60. 服务接口
61. 时序图
62. Crc_CalculateCRC8()
63. Crc_CalculateCRC8H2F()
64. Crc_CalculateCRC16()
65. Crc_CalculateCRC16ARC()
66. Crc_CalculateCRC32()
67. Crc_CalculateCRC32P4()
68. Crc_CalculateCRC32P76()
69. Crc_CalculateCRC64()
70. 配置规范
71. How to read this chapter
72. 配置 and 配置 parameters
73. Containers
74. Containers and 配置 parameters
75. Crc
76. 发布信息
77. 附录
78. 不适用需求
79. Change History
80. Change History of this document according to AUTOSAR Release R22-11
81. Added 规范 Items in R22-11
82. Changed 规范 Items in R22-11
83. Deleted 规范 Items in R22-11
84. Change History of this document according to AUTOSAR Release R23-11
85. Added 规范 Items in R23-11
86. Changed 规范 Items in R23-11
87. Deleted 规范 Items in R23-11
88. Change History of this document according to AUTOSAR Release R24-11
89. Added 规范 Items in R24-11
90. Changed 规范 Items in R24-11
91. Deleted 规范 Items in R24-11
92. Change History of this document according to AUTOSAR Release R25-11
93. Added 规范 Items in R25-11
94. Changed 规范 Items in R25-11
95. Deleted 规范 Items in R25-11
