# Foundation Release Overview (`ReleaseOverview`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 781 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TR_ReleaseOverview_781\AUTOSAR_FO_TR_ReleaseOverview.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TR_ReleaseOverview_781\AUTOSAR_FO_TR_ReleaseOverview.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TR_ReleaseOverview_781\zzgen\FO_TR_ReleaseOverview.complete.txt`

## 文档简介

AUTOSAR addresses a wide range of use cases in automotive software development with its standards. These use cases have different requirements and lead to different technical solutions.

Packaging its deliverables into different standards

* eases the access to AUTOSAR solutions for users and
* allows AUTOSAR to scale with market needs.

## 模块依赖

Each release of Classic and Adaptive Platform relies on a dedicated version of Foundation. The specific dependency is documented in chapter .

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. 范围 of This Document
*原文标题：Scope of This Document*

This document provides an overview of the AUTOSAR standard Foundation Release R26-11.

### 3. Terminology and Licenses

### 4. 免责声明 Regarding Language in This Release
*原文标题：Disclaimer Regarding Language in This Release*

This release may contain terminology or phrasing that, while historically or technically conventional, could be perceived as outdated, insensitive, or discriminatory in modern contexts. AUTOSAR wishes to explicitly state that any such language is unintentional and is not meant to offend, exclude, or imply prejudice against any individual or group.

Such instances typically arise from:

* Terms that were once common in technical or industry parlance.
* Descriptions inherited from older systems or standards that predate current inclusive language guidelines.
* Language chosen for precise technical meaning, which may inadvertently carry unintended connotations.
* In some cases, specific terminologies cannot be altered without breaking backward compatibility with existing systems, codebases, or processes. Additionally, certain terms may be retained to align with established industry standards, external specifications, or third-party documentation, where consistency is critical for interoperability and clear communication across different platforms and organizations.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Usage of W3C XML Schema

The AUTOSAR XML Schema requires the XML namespace definition file xml.xsd.

There are several occurrences of the "xml.xsd" file within this release. For all occurrences the W3C license applies which can be found on https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document.

### 6. License

By obtaining and/or copying this work, you (the licensee) agree that you have read, understood, and will comply with the following terms and conditions.

Permission to copy, modify, and distribute this work, with or without modification, for any purpose and without fee or royalty is hereby granted, provided that you include the following on ALL copies of the work or portions thereof, including modifications:

The full text of this NOTICE in a location viewable to users of the redistributed or derivative work. Any pre-existing intellectual property disclaimers, notices, or terms and conditions. If none exist, the W3C Software and Document Short Notice should be included. Notice of any changes or modifications, through a copyright statement on the new code or document such as "This software or document includes material copied from or derived from . Copyright ©  W3C^(®) (MIT, ERCIM, Keio, Beihang)."

### 7. Disclaimers

THIS WORK IS PROVIDED "AS IS," AND COPYRIGHT HOLDERS MAKE NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE OR THAT THE USE OF THE SOFTWARE OR DOCUMENT WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS, TRADEMARKS OR OTHER RIGHTS.

COPYRIGHT HOLDERS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF ANY USE OF THE SOFTWARE OR DOCUMENT.

The name and trademarks of copyright holders may NOT be used in advertising or publicity pertaining to the work without specific, written prior permission. Title to copyright in this work will at all times remain with copyright holders.

### 8. AUTOSAR Standards

### 9. 简介
*原文标题：Introduction*

AUTOSAR addresses a wide range of use cases in automotive software development with its standards. These use cases have different requirements and lead to different technical solutions.

Packaging its deliverables into different standards

* eases the access to AUTOSAR solutions for users and
* allows AUTOSAR to scale with market needs.

### 10. 定义
*原文标题：Definition*

An AUTOSAR standard is a consistent set of AUTOSAR deliverables, which are released at the same time. AUTOSAR deliverables can be of but are not limited to the following kinds:

* Textual explanations
* Textual specifications
* Test specifications
* Source code
* Other formal or semi-formal textual formats (e.g., ARXML, UML models, XML schemata)

At the time of release, AUTOSAR ensures that dependencies are fulfilled.

### 11. 概述 of AUTOSAR's Standards
*原文标题：Overview of AUTOSAR's Standards*

AUTOSAR delivers the following standards:

| Standard | Abbreviation |
|---|---|
| Adaptive Platform | AP |
| Classic Platform | CP |
| Foundation | FO |

### 12. Adaptive Platform

The Adaptive Platform is AUTOSAR's solution for high-performance computing ECUs to build safety-related systems for use cases such as highly automated and autonomous driving.

### 13. Classic Platform

The Classic Platform is AUTOSAR's solution for embedded systems with hard real-time and safety constraints.

### 14. Foundation

The purpose of the Foundation standard is to enforce interoperability between the AUTOSAR platforms.

Foundation contains the generic artifacts that are common for AP and CP to ensure compatibility between

* Classic- and Adaptive Platform and
* Non-AUTOSAR platforms to AUTOSAR platforms.

### 15. Dependencies Between Standards

Each release of Classic and Adaptive Platform relies on a dedicated version of Foundation. The specific dependency is documented in chapter .

### 16. Release Numbering and Life Cycle

### 17. Platform Release Number

AUTOSAR applies a four-digit numbering scheme Ryy-mm to identify releases. The identifiers "yy" and "mm" depict the year and month of the release date, for example, R20-11 for the November 2020 release.

### 18. Internal Release Number

AUTOSAR additionally maintains an internal release number for different purposes (e.g., usage in BSW modules in Classic Platform). The internal release number is used for all platforms and follows up on the Classic Platform release number. This is newly introduced in the Adaptive Platform. For Foundation, this leads to a discontinuation of the former numbering pattern (e.g., R1.5.0). A mapping between Platform Releases and corresponding internal release numbers can be found in chapter . The internal release number uses a three-digit numbering scheme R<major>.<minor>.<revision> to identify releases. Its primary purpose is to identify a release as

* a major release: Valid and draft specification parts may be changed backward incompatibly.
* a minor release: Valid specification parts may only be changed backward compatibly. Draft specification parts may be changed backward incompatibly.
* a revision: Does not contain extensions but only backward compatible bugfixes.

### 19. AUTOSAR Schema Versions

Until the Releases CP R4.4.0 and AP R19-03, AUTOSAR released the platforms separately where a Foundation release went along with each platform release. Since compatibility between the platforms is essential to be able to have AP and CP ECUs within one vehicle project, an XML schema needs to be available that works with the different releases. The following table gives an overview about the different schema versions and the corresponding platform releases they can be used for.

The AUTOSAR schema does not have an impact on the Foundation. The Foundation releases are mentioned for the sake of completeness.

| Schema version | Classic Platform release | Adaptive Platform release | Foundation release |
|---|---|---|---|
| AUTOSAR_00042 | R4.3.0 | R17-03 | R1.1.0 |
| AUTOSAR_00043 | R4.3.0 | R17-10 | R1.2.0 |
| AUTOSAR_00044 | R4.3.1 | R17-10 | R1.3.0 |
| AUTOSAR_00045 | R4.3.1 | R18-03 | R1.4.0 |
| AUTOSAR_00046 | R4.4.0 | R18-10 | R1.5.0 |
| AUTOSAR_00047 | R4.4.0 | R19-03 | R1.5.1 |

Starting with release R19-11, all platforms are released as one AUTOSAR release and therefore come along with one schema version.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Release Life Cycle of a Major Release

Each major release goes through four consecutive steps within its life cycle (examples based on the internal release numbering scheme):

# Development: Between the start of life cycle and the initial release (e.g., R4.0.1)
# Evolution: Following the initial release with zero, one or several minor releases and/or revisions (e.g., R4.0.2, R4.1.1)
# Maintenance: No new content is added; only maintenance of existing content is provided through zero, one or several revisions (e.g., R3.2.2).
# Issue Notice: No more revisions but zero, one or several issue notices, i.e., updates of the list of known issues until the end of life cycle.

According to the release life cycle of AUTOSAR the release R26-11 is a minor release.

### 21. Life Cycle States of 规范 Items and 需求
*原文标题：Life Cycle States of Specification Items and Requirements*

The life cycle state of a specification item is found after the specification item ID surrounded by curly brackets. The states are:

* This indicates that the related entity is a valid part of the document. This is the default and also applies if no dedicated life cycle status is annotated for the related entity.
* This indicates that the related entity is newly introduced but still experimental. This information is published but is subject to change without backward compatibility guarantee.
* This indicates that the related entity is subject to be removed in one of the following releases without further notice.

The life cycle state of a requirement is found in the attribute "Status". The states are the same as the specification item states.

### 22. Content of Chapters

This document is structured as follows:

* Chapter  provides an introduction to AUTOSAR's release strategy and its standardization approach.
* Chapter  provides a summary of changes since the previous release of the Foundation.
* Chapter  contains the overview of specifications comprising the AUTOSAR Foundation Release R26-11. This chapter is structured according to the clusters being in use in AUTOSAR Foundation Release R26-11.
* Chapter  contains remarks about known technical deficiencies.
* Chapter  contains the detailed revision history of all released specifications.

### 23. Summary of Changes in Release R26-11

This chapter contains a summary of changes which have been implemented since the previous release R25-11. The purpose of the Foundation standard is to enforce interoperability between the AUTOSAR platforms and therefore contains common requirements and technical specifications (e.g. protocols) shared between the AUTOSAR platforms.

### 24. 概念
*原文标题：Concepts*

### 25. Introduced 概念
*原文标题：Introduced Concepts*

The following concepts in  -  have been introduced.

### 26. Impact of 概念
*原文标题：Impact of Concepts*

The introduced concepts had impact on several specifications. The following table provides a detailed overview.

Please note that some of the specifications are marked by special text formatting:

* Specifications in bold font are completely new specifications originating from the particular concept.
* If specifications or models like the BSW UML model or the ECUC model are only indirectly affected because they just provide artifacts for other specifications, they are not listed here.

### 27. Specifications

### 28. New Specifications

The following new specifications have been introduced via concepts:

* TODO

In addition to the above listed new specifications, the following documents have been added with this release:

* TODO

### 29. Migrated Specifications

With this release, the following specification has been moved from TODO to the TODO standard:

* TODO

### 30. Obsolete Specifications

The following specifications have been set to status "obsolete" in this release:

* TODO

### 31. Removed Specifications

The following specifications have been removed from the AUTOSAR standard:

* TODO

### 32. Reworked Specifications

The following specifications have been changed fundamentally in this release:

* TODO

### 33. Moved 规范 Parts
*原文标题：Moved Specification Parts*

The following specification parts have been moved to other documents in this release:

* TODO

### 34. Renamed Specifications

The following specifications have been renamed in this release:

* FO TPS LogAndTrace (Log And Trace Template, UID 1024)

### 35. Release Documentation

There are no major changes in the Release Documentation.

### 36. Remarks to Known Technical Deficiencies

This section and its subsections provide an overview of several important technical deficiencies of the specification. All known technical deficiencies and limitations are detailed in the individual documents.

| Document UID | Document name | Document type | Section reference |
|---|---|---|---|
| TODO | TODO | TODO | TODO |
