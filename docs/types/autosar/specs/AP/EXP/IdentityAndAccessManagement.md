# Explanation of Identity and Access Management (`IdentityAndAccessManagement`)

> [返回本类索引](index.md)

| 属性     | 值                              |
| -------- | ------------------------------- |
| 平台     | AP                              |
| 类别     | EXP — 解释性指南（Explanation） |
| UID      | 1071                            |
| 规范版本 | R25-11                          |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_EXP_IdentityAndAccessManagement_1071\AUTOSAR_AP_EXP_IdentityAndAccessManagement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_EXP_IdentityAndAccessManagement_1071\AUTOSAR_AP_EXP_IdentityAndAccessManagement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_EXP_IdentityAndAccessManagement_1071\zzgen\AP_EXP_IdentityAndAccessManagement.complete.txt`

## 文档简介

This document describes the Identity and Access Management (IAM) model used in the AUTOSAR Adaptive Platform. IAM offers a standardized model for AUTOSAR AP components to manage authentication and access operations.

This document also discusses modelling and integration within Adaptive AUTOSAR's Functional Clusters. The Requirement Specifications are referenced in section 5.1.

Note that IAM is not a Functional Cluster nor an API. The functionality described in this document must then be implemented by Functional Clusters and APIs requiring access control. Additional support is provided by the AP Foundation and Services, e.g., Execution Management.

## 章节详细内容

### 1. 简介

_原文标题：Introduction_

This document describes the Identity and Access Management (IAM) model used in the AUTOSAR Adaptive Platform. IAM offers a standardized model for AUTOSAR AP components to manage authentication and access operations.

This document also discusses modelling and integration within Adaptive AUTOSAR's Functional Clusters. The Requirement Specifications are referenced in section 5.1.

Note that IAM is not a Functional Cluster nor an API. The functionality described in this document must then be implemented by Functional Clusters and APIs requiring access control. Additional support is provided by the AP Foundation and Services, e.g., Execution Management.

### 2. 缩略语

_原文标题：Acronyms and Abbreviations_

The glossary below includes acronyms and abbreviations relevant to Identity and Access Management that are not included in the AUTOSAR Glossary.

| Term                           | Description                                                                                                                                                                                                          |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Policy Decision Point (PDP)    | The PDP represents the logic in which the access control decision is made. It determines if the application is allowed to perform the requested task. The PDP implementation and setup are not specified in AUTOSAR. |
| Policy Enforcement Point (PEP) | The PEP represents the logic in which the Access Control Decisions are enforced. It communicates directly with the associated PDP to receive the Access Control Decision.                                            |
| Access control Policy          | Access Control Policies are bound to the targets of calls (i.e., Service interfaces) and are used to express what Identity Information are necessary to access those interfaces.                                     |
| Access Control Decision        | The Access Control Decision is a Boolean value indicating if the requested operation is permitted or not. It is based on the identity of the caller and the Access Control Policy.                                   |
| Identity                       | Identity represents properties of an Adaptive Application the access control is decided / enforced upon.                                                                                                             |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. AUTOSAR IAM

Identity and Access Management ensures that only the right authorized identities can access the right resources. In the context of AUTOSAR AP, identities would refer to Adaptive Applications, or their hosts, and resources to any functionality supported and exposed by Functional Clusters APIs within AP.

More broadly, IAM shall offer a framework that includes processes, policies, and technologies supporting the management of both identities and resources, via authentication and the control of access and permissions.

### 4. 建模描述

_原文标题：Model description_

The objective of IAM in AUTOSAR AP is essentially to prevent a malfunctioning or compromised Adaptive Application from accessing services or resources that were not intended to be accessed by the application's designer and the integrator.

As a motivating example, consider an infotainment application, with Internet access, which has a high risk of being compromised. We assume that this application should never have access to a service allowing to brake the car for instance. If the infotainment application gets compromised by an attacker, the AUTOSAR Adaptive Platform must prevent any access attempt of the said application to the braking service functionality.

During the design phase of an Adaptive Application, its intended access (referred to as intents) is modelled and acknowledged by the integrator during the deployment phase. A representation of access rights as an access matrix is shown in Fig. 3.2.

The access matrix shows the access rights of subjects on objects. A subject is an artifact that wants to have access. Typically, this is (part of) a process running on a system, but not a resource. An object is an artifact that the access should be granted to.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Remote IAM

The interaction between applications might need to happen across platform boundaries. Remote IAM, called SCREIAM , introduces host identity and access rights for when services and applications reside on different hosts. It provides means to resolve identities and authenticate remote hosts based on several secure channels, including TLS or IPSec.

In the local IAM description, applications running on the same platform can be reliably identified, e.g., with process ID. In the case of remote calling applications, this is done via network binding. When a secure channel is used, the remote host can be considered as authenticated and its identity known for IAM to apply the access policy as per the model described above.

### 6. Event reporting

The object provider shall report a security event in case of an access violation. Triggering of the event and reporting it are handled by the object provider application, using the IdsM. More details on how security events are reported can be found in AUTOSAR References.

Possible events and their descriptions are mentioned in respective functional clusters' specifications where access control is defined. The list of functional clusters which have security events defined are shown in Table 4.1.

### 7. Modelling

The application designer can model each interaction point of an application with the ARA API. For instance, ara::com can define PortInterfaces representing its ARA API features, as well as a set of GrantDesigns. These GrantDesigns shall be structured so that security-critical portions of the ARA API can be restricted. The ara::com API uses the ServiceInterface to represent its interaction points. The ServiceInterface itself consists of Method, Event, and Field entities. Each of these entities may be subject to fine-grained access control restrictions. Hence, there are GrantDesigns for each of these entities.

Using ara::com 's available meta-model design elements, the application designer can create a model consisting of:

- PortPrototypes referencing a Functional Cluster's PortInterfaces to express the need for using an ARA API,
- GrantDesigns to request access to specific elements within a Functional Cluster's PortInterface.

The integrator shall accept each requested intent by creating an explicit Grant entity in the deployment model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Identification of applications

The accurate identification of applications by the PEP is crucial to the IAM model. One mechanism for identifying a runtime instance of an application is to run the process as a distinct operating system user (e.g., POSIX users). In that case, Execution Management shall start application processes as distinct operating system users. Operating systems provide the functionality to query peer credentials on an IPC channel (e.g., getpeereid() with Unix domain sockets).

AUTOSAR does not fully specify the identification of Adaptive Applications. The most appropriate solution depends on the operating system and platform a vendor chooses.

The Adaptive Platform implementation's IPC mechanism can encapsulate this functionality and transfer the information to the Policy Enforcement Point. The Policy Enforcement Point shall translate the actual runtime identity (i.e., the Unix user ID) to the model's representation (i.e., the Process). The Policy Decision Point shall then use the reference to the model's runtime instance and the associated Grants to allow or deny access.

### 9. IAM 集成

_原文标题：IAM Integration_

The IAM model presented above describes the necessary elements needed to enable the description of permissions by developers, and their acknowledgment by integrators during deployment. This, however, will be adapted to each Functional Cluster, and new modelling elements might be specified. Table 4.1 shows the functional clusters for which solutions have already been developed.

| Functional cluster             | Description                                                                                                                              | Reference                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Communication Management (COM) | Modelling elements to specify access control to Local and Remote access control instances                                                | SWS_Communication_Management           |
| Firewall                       | Modelling elements to specify access control to Switch between firewall states                                                           | SWS_Firewall                           |
| Cryptography                   | Modelling elements to specify access control for certificates and key slots                                                              | SWS_Cryptography                       |
| Diagnostics                    | Modelling elements to specify access control to ara::diag interfaces                                                                     | SWS_Diagnostics                        |
| IDSM                           | Modelling elements to specify access control to generation of security events, modification of context data, and provision of timestamps | SWS_Intrusion_Detection_System_Manager |
| PHM                            | Modelling elements to specify access control to reporting of checkpoints                                                                 | SWS_Platform_Health_Management         |

### 10. 错误

_原文标题：Errors_

During the process of granting access to resources, the inability of the PDP to allow access or the subject to reach the PDP or PEP might be the result of insufficient access permissions, invalid requests, unexpected input data, or the non-availability of supporting services. These errors should be specified in ara::core or the Operating System Interface to be applicable in a consistent way across the board.

| Errors             | Description                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| AccessDenied       | The application does not have permission to either access or perform a task on the requested resource. |
| ServiceUnavailable | The authorization process cannot be completed, e.g., PDP or PEP cannot be reached.                     |

### 11. References

Documents which contain IAM specific information are referenced here:

### 12. Contents of the AUTOSAR 规范

_原文标题：Contents of the AUTOSAR specification_

The following table represents which parts of the IAM framework will be defined by AUTOSAR and which parts are up to the developer implementation-wise.

| Description                                                                                                | Affiliated to            | Part of                         |
| ---------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------- |
| Behavioral description of the IAM framework (regarding interfaces)                                         | AUTOSAR Specification    | EXP_IdentityAndAccessManagement |
| API for communication between Functional clusters implementing a PDP and the PEP in the Adaptive Platform. | Not specified by AUTOSAR |                                 |
| The application intents and Access control policies (Manifest file information).                           | AUTOSAR Specification    | TPS_Manifest_Specification      |
| Warnings/error messages that the applications receive on failed authorization.                             | AUTOSAR Specification    | EXP_IdentityAndAccessManagement |
| API for activity logging.                                                                                  | AUTOSAR Specification    | Not yet decided                 |
| Contents of the logging information.                                                                       | AUTOSAR Specification    | Not yet decided                 |
| Interface between Adaptive Application and Functional Clusters                                             | Not specified by AUTOSAR |                                 |
| Identification of Adaptive Applications during runtime                                                     | Not specified by AUTOSAR |                                 |

### 13. PEP Implementation

The implementation of a Policy Enforcement Point in a Functional Cluster is defined in the corresponding software specification.

Table 4.1 shows the functional clusters for which implementations have been defined.

### 14. Assumptions

- The integrator can configure an authentic channel between Policy Decision Points and Policy Enforcement Points. This could be done through the operating system's access rights for example.
- Applications are designed/configured to have intents (properties that allow them to access certain resources).
- Each intent will be acknowledged during deployment.
- Applications are deployed together with an Application Manifest containing intents.
- An Adaptive Application that wants to access a resource protected by IAM has to be started authentically, and its manifest has to be authenticated during deployment.
- The PEP and PDP should not be a part of the Subject ( Adaptive Application that is requesting a resource protected by IAM).
