# Integration of DDS Security (`DDSSecurityIntegration`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | AP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 1027 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_TR_DDSSecurityIntegration_1027\AUTOSAR_AP_TR_DDSSecurityIntegration.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_TR_DDSSecurityIntegration_1027\AUTOSAR_AP_TR_DDSSecurityIntegration.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_TR_DDSSecurityIntegration_1027\zzgen\AP_TR_DDSSecurityIntegration.complete.txt`

## 文档简介

This Technical Report provides additional information to the DDS Network Binding of the Communications Management functional cluster of the AUTOSAR Adaptive Platform, as defined by .

DDS Security, as defined in , is a complementary standard to DDS, providing transport-independent security measures (authentication, secrecy, non-repudiation, integrity, access control and logging) without requiring changes to application logic.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This Technical Report provides additional information to the DDS Network Binding of the Communications Management functional cluster of the AUTOSAR Adaptive Platform, as defined by .

DDS Security, as defined in , is a complementary standard to DDS, providing transport-independent security measures (authentication, secrecy, non-repudiation, integrity, access control and logging) without requiring changes to application logic.

### 2. 目标
*原文标题：Objectives*

This document aims at mapping DDS Service Interface and Instance Deployment models, as well as IAM Communications Grant models, to DDS QoS policies, and DDS Security certificate, governance and permission documents as defined by .

### 3. 范围
*原文标题：Scope*

This document builds on the DDS Network Binding as specified by  and supports, in summary, the following security mechanisms:

* Per-instance, per-event access control, along with secrecy and authentication configuration for in-band and out-of-band traffic
* Per-instance, per-field notifier access control, along with secrecy and authentication configuration for in-band and out-of-band traffic
* Per instance methods access control along with secrecy and authentication configuration for in-band and out-of-band traffic
* Per instance field methods (Get/Set) access control along with secrecy and authentication configuration for in-band and out-of-band traffic

As noted above, fine-grained security controls for independent methods and field methods (Get/Set) are not supported by DDS Security at the moment, due to the specific design of the DDS Network Binding, where all methods belonging to a single Service Interface Instance are multiplexed over a limited set of DDS Topics.

### 4. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

| Abbreviation / Acronym: | Description: |
|---|---|
| ACL | Access Control List |
| CA | Certificate Authority |
| DDS | Data Distribution Service |
| IAM | Identity and Access Management |
| QoS | Quality of Service |
| URI | Uniform Resource Identifier |

### 6. 定义 of terms
*原文标题：Definition of terms*

Not applicable.

### 7. 相关文档
*原文标题：Related Documentation*

### 8. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 9. AUTOSAR Metamodel to DDS Security mappings

### 10. 配置工作流
*原文标题：Configuration workflow*

Integrators should not manually manipulate DDS Security artifacts, but rather update related the AUTOSAR design elements, then re-generate and re-deploy the DDS Security artifacts:

Although the following sections describe this process in detail, a brief summary is presented here for clarity and ease of understanding:

# DDS-specific deployment for Service Interfaces and Service Instances is modelled as prescribed in , including DDS Security Communication Properties (DdsSecureComProps) and the cryptographic resources associated to them (CryptoCertificate)
# Following the detailed procedures shown in the next sections, a set of intermediate DDS Security-specific artifacts are produced for each Provided or Required DDS Service Instance, portraying modelled instance identity, domain governance policies, participant policies and QoS policies
# During deployment, for each service instance, identity certificates, governance and permission documents are signed using secret key material by the host, and deployed alongside relevant crypto certificates (without the private key part) and the QoS profiles library
# In run-time, Adaptive Applications load the instance certificates, governance a

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 11. Provisioning of DDS Security artifacts

Artifacts required by Provided or Required Service Instances
  Status: DRAFT
⌈
For each DdsServiceInstanceToMachineMapping referencing a DdsSecureComProps object, the following artifacts shall be uniquely generated and deployed for access by the host Process during runtime along with the processed manifest:

* A unique, CA-signed DDS Security Governance Document, with contents according to
* A unique, CA-signed DDS Security Permissions Document, with contents according to
* A QoS profile to be referenced from DdsProvidedServiceInstance or DdsRequiredServiceInstance via qosProfile, with Domain Participant QoS properties set according to , , , ,  and
⌋

 Identity Certificate Authority
  Status: DRAFT
⌈
The dds.sec.auth.identity_ca property shall be set to the short name path of the CryptoCertificate referenced by the identityCertificateAuthority attribute via governance, or an URI referencing a CryptoCertificate rendition that's supported by the DDS Security implementation (e.g. file://...).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 12. Provisioning of the DDS Security Governance Document

In DDS Security, all Domain Participants communicating in the same secure domain operate under an authentic set of governance rules described in governance documents modelled via DdsSecureGovernance.

 Governance Document
  Status: DRAFT
⌈
In the DDS Security Governance Document associated to each Service Instance through governance via secureComPropsForDds in the context of , a domain_rule element shall be incorporated under the domain_access_rules element as follows:

* The allow_unauthenticated_participants element is set to the value of allowUnauthenticatedParticipants (via governance)
* The enable_join_access_control element is set to the value of enableJoinAccessControl (via governance)
* The discovery_protection_kind element is set to the value of discoveryProtectionKind (via governance)
* The liveliness_protection_kind element is set to the value of livelinessProtectionKind (via governance)
* The rtps_protection_kind element is set to the value of rtpsProtectionKind (via governance)
* One topic_access_rules element as described by ,  and
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Provisioning of the DDS Security Permissions Document

In DDS Security, all Domain Participants communicating in the same secure domain operate under an authentic set of ACL-like policies applicable to domains, partitions, topics and topic instances, described in permissions documents modelled via ComGrants.

 Permissions file contents for DDS IAM Remote Subjects
  Status: DRAFT
⌈
In the DDS Security Permissions Document associated to each Service Instance via secureComPropsForDdsin the context of , a grant element shall added under the permissions element, including:

* A subject_name element set to the subject name field of the certificate referenced by identity.
* An allow_rule element, including:

  * A domains element mirroring domainId through governance
  * A publish element with contents for provided and required service instances according to  and , respectively
  * A subscribe element with contents for provided and required service instances according to  and , respectively
* A default element set to DENY
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 14. 附录
*原文标题：Appendix*

### 15. Mentioned Class Tables

For the sake of completeness, this chapter contains a set of class tables representing meta-classes mentioned in the context of this document.

| Class | AdaptivePlatformServiceInstance (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to describe the existence and configuration of a service instance in an abstract way. |  |  |  |

| This Class is only used by the AUTOSAR Adaptive Platform. | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable, UploadableDesignElement, UploadablePackageElement | < | < | < |
| Subclasses | ProvidedApServiceInstance, RequiredApServiceInstance | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| e2eEventProtectionProps | End2EndEventProtectionProps | * | aggr | This aggregation allows to protect an event or a field notifier that is defined inside of the ServiceInterface that is referenced by the ServiceInstance in the role serviceInterface. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Changed 规范 Items
*原文标题：Changed Specification Items*

### 17. Release 25-11

### 18. Added 规范 Items in R25-11
*原文标题：Added Specification Items in R25-11*

none

### 19. Changed 规范 Items in R25-11
*原文标题：Changed Specification Items in R25-11*

none

### 20. Deleted 规范 Items in R25-11
*原文标题：Deleted Specification Items in R25-11*

none

### 21. Release 24-11

### 22. Added 规范 Items in R24-11
*原文标题：Added Specification Items in R24-11*

none

### 23. Changed 规范 Items in R24-11
*原文标题：Changed Specification Items in R24-11*

none

### 24. Deleted 规范 Items in R24-11
*原文标题：Deleted Specification Items in R24-11*

none
