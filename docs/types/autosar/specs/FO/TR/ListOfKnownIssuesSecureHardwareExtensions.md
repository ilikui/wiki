# List of known Issues of Secure Hardware Extensions (`ListOfKnownIssuesSecureHardwareExtensions`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 971 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TR_ListOfKnownIssuesSecureHardwareExtensions_971\AUTOSAR_FO_TR_ListOfKnownIssuesSecureHardwareExtensions.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TR_ListOfKnownIssuesSecureHardwareExtensions_971\AUTOSAR_FO_TR_ListOfKnownIssuesSecureHardwareExtensions.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TR_ListOfKnownIssuesSecureHardwareExtensions_971\zzgen\FO_TR_ListOfKnownIssuesSecureHardwareExtensions.complete.txt`

## 文档简介

| No. | Date | Severity | Problem Description | Location |
|---|---|---|---|---|
| 1 | 2009-07-31 | erratum | CMD_EXPORT_RAM_KEY can also issue error code ERC_KEY_NOT_AVAILABLE. |  |

| Note: The description of the command and the overview table were missing the information. | Section 4.7.9 Table 4.6 |  |  |
|---|---|---|---|
| 2 | 2009-07-31 | erratum | CMD_GET_ID may not issue error code ERC_KEY_NOT_AVAILABLE since key protection flags are not evaluated |

| Note: The description of the command and the overview table indicate an error code that cannot be emitted by the command. | Section 4.7.17 Table 4.6 |  |  |
|---|---|---|---|
| 3 | 2009-07-31 | erratum | CMD_EXPORT_RAM_KEY reads UID |

| Note: The command also needs to access the UID to calculate the messages. The referenced table is missing the corresponding information (X = used by function). | Table 4.4 |  |  |  |
|---|---|---|---|---|
| 4 | 2009-07-31 | erratum | The flag SREG.EXT_DEBUGGER has not to be set if the secure boot failed, see Figure  of this errata sheet for a corrected flow chart. | Figure 4.10 |
| 5 | 2009-08-28 | detailing | Behavior of secure boot status in power saving modes, e.g., power gating, non-local clock gating etc.: whenever the CPU, a memory or SHE enters a power saving mode, the status register bit SREG.BOOT_OK has to be cleared ( |  |

## 章节详细内容

### 1. List of known Issues of Secure Hardware Extensions

| No. | Date | Severity | Problem Description | Location |
|---|---|---|---|---|
| 1 | 2009-07-31 | erratum | CMD_EXPORT_RAM_KEY can also issue error code ERC_KEY_NOT_AVAILABLE. |  |

| Note: The description of the command and the overview table were missing the information. | Section 4.7.9 Table 4.6 |  |  |
|---|---|---|---|
| 2 | 2009-07-31 | erratum | CMD_GET_ID may not issue error code ERC_KEY_NOT_AVAILABLE since key protection flags are not evaluated |

| Note: The description of the command and the overview table indicate an error code that cannot be emitted by the command. | Section 4.7.17 Table 4.6 |  |  |
|---|---|---|---|
| 3 | 2009-07-31 | erratum | CMD_EXPORT_RAM_KEY reads UID |

| Note: The command also needs to access the UID to calculate the messages. The referenced table is missing the corresponding information (X = used by function). | Table 4.4 |  |  |
|---|---|---|---|
| 4 | 2009-07-31 | erratum | The flag SREG.EXT_DEBUGGER has not to be set if the secure boot failed, see Figure  of this errata sheet for a corrected flow chart. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。
