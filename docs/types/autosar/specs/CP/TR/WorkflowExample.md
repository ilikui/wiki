# Technical Report on Supplementary Material of Workflow Example (`WorkflowExample`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 1145 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_WorkflowExample_1145\AUTOSAR_CP_TR_WorkflowExample.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_WorkflowExample_1145\AUTOSAR_CP_TR_WorkflowExample.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_WorkflowExample_1145\zzgen\CP_TR_WorkflowExample.complete.txt`

## 文档简介

This technical report provides additional information to the AUTOSAR Workflow Example and is intended for all those who are concerned with the example.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This technical report provides additional information to the AUTOSAR Workflow Example and is intended for all those who are concerned with the example.

### 2. 目标
*原文标题：Objectives*

The objectives for the Workflow Example are:

* AUTOSAR is committed to enhance user experience by providing practical guides and examples to ease the entry into the work with AUTOSAR and to show typical applications.
* Since AUTOSAR specifies exchange artifacts, we want to provide practical examples based on these standards that can be processed by as many implementation providers as possible.
* To verify the usability and quality of these exchange artifacts, the processed artifacts must be integrable and systemically functional after deployment to a hardware target.
* This kind of test corresponds to the idea of a plug-fest, in which different providers plug their products installed on a hardware together and provide proof that they can work together.

### 3. 范围
*原文标题：Scope*

The basis of the Workflow Example is an iterative process which shall handle the challenges of AUTOSAR projects, e.g.

* specifications still leave room for interpretation,
* incomplete implementations of the standard,
* errors that unfortunately creep-in from time to time.

The workflow example provides a system description from which development partners can generate the system extracts for the individual sub-systems in such a way that as many partners as possible can process them smoothly with their tools.

### 4. 示例系统
*原文标题：Example System*

The basis function of the system is that a wheel speed which is simulated by a potentiometer, converted by an ADC module (Analog-Digital-Converter) of the WheelSpeed ECU, transmitted via CAN to the VehicleSpeed ECU and the calculated vehicle speed is indicated by two LEDs by a DIO module (Digital-Input-Output).

Transferred in the AUTOSAR methodology the function is defined by five software components in one system composition. Two SensorActuatorSwComponentTypes for the interaction with outer world, one SwComponentType for the internal calculation and two EcuAbstractionSwComponentType for the abstraction of the hardware. The System class is used to describe the System Configuration of the complete AUTOSAR system. The category property of System shall indicate the role of this work product. Here the category `SYSTEM_DESCRIPTION` is used. See  in . This is typically done by an OEM.

For the Workflow Example the overall system composition is separated in two `SYSTEM_EXTRACTs` assigned each to a separate ECU. These `SYSTEM_EXTRACTs` (SystemExtract 1 and 2) are provided to two different suppliers.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. Technical Aspects

The system defined in the `SYSTEM_DESCRIPTION` consists of the "TopLevelComposition" containing two sub-compositions.

These two sub-compositions are used to generate a `SYSTEM_EXTRACT` for each ECU.

The first `SYSTEM_EXTRACT` is dedicated for the ECU "WheelSpeed".

This composition consists of the EcuAbstractionSwComponentType named "`CPT_WhlSpdVirt`" which abstracts the hardware and the SensorActuatorSwComponentType named "`CPT_WhlSpdSnsr`" which handles the sensor signal.

The second `SYSTEM_EXTRACT` is dedicated for the ECU "VehicleSpeed".

This composition consists of three components: the ApplicationSwComponentType "`CPT_VehSpdCalc`" receives the data from the other ECU and converts the vehicle speed from the wheel speed. The SensorActuatorSwComponentType "`CPT_VehSpdActr`" prepares the actuator signal for each LED based on the calculated vehicle speed which will be finally received by the EcuAbstractionSwComponentType "`CPT_VehSpdVirt`" which encasulates the access to the MCAL drivers for the LED.

### 6. Architectural Aspects

Two approaches - top-down and bottom-up - are implemented in this project and will be described in a brief way.

]

Top-down Approach

The top-down approach is described in chapter 13.3 SW component inclusion and top level data mapping  and also used in this project.

The system designer of the "TopLevelComposition" can design the system in such a way that

* exchangeability on application side and
* decoupling of data mapping between network architecture and application architecture

are achievable. He creates the "TopLevelComposition" based on the RootSwCompositionPrototype and references the CompositionSwComponentType as the top-level software composition. The RootSwComposition will usually not contain all atomic software components that are used in a complete VFB (Virtual Function Bus) system.

Instead, the focus is on the interfaces between the components or whole compositions. The system design could even contain only compositions and their ports. In this example, the components are included as well.

The system designer (e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. 相关文档
*原文标题：Related Documentation*

### 8. 附录
*原文标题：Appendix*

### 9. Delivered artefacts

The delivery of the first iteration of the Workflow Example (WorkflowExample.zip) only includes the artefacts of the top-down approach, see section :

These are:

* `ECU_SYSTEM_DESCRIPTION` of the Workflow Example project containing all relevant ARXML files regarding to the infrastructure, software components and system configuration. Used and provided by the OEM.
* `SYSTEM_EXTRACT` of ECU 1 for the WheelSpeed composition (`WheelSpeed__SystemExtract`.arxml), used by the supplier of ECU 1 for further processing.
* `SYSTEM_EXTRACT` of ECU 2 for the VehicleSpeed composition (`VehicleSpeed__SystemExtract`.arxml), used by the supplier of ECU 2 for further processing.
* `AUTOSAR_CP_TR_WorkflowExample`.pdf, documentation of the Workflow Example, this file.

.
  # Unzip WorkflowExample.zip, three folders will be created:

    * EcuSystemDescription,
    * Ecu1SystemExtract and
    * Ecu2SystemExtract.
  # Depending on your role (OEM, supplier) load the corresponding folder in your AUTOSAR tooling and start working. As an OEM work based on the EcuSystemDescription, as a supplier use the System Extracts of ECU1 or ECU2.
  # As supplier continue as illustrated in figure  and complete the sub-system.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. Mentioned Class Tables

For the sake of completeness, this chapter contains a set of class tables representing meta-classes mentioned in the context of this document but which are not contained directly in the scope of describing specific meta-model semantics.

| Class | ARElement (abstract) | < | < | < |
|---|---|---|---|---|
| Note | An element that can be defined stand-alone, i.e. without being part of another element (except for packages of course). | < | < | < |
| Base | ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Subclasses | AclObjectSet, AclOperation, AclPermission, AclRole, AliasNameSet, ApplicabilityInfoSet, ApplicationPartition, AutosarDataType, BaseType, BlueprintMappingSet, BswEntryRelationshipSet, BswModuleDescription, BswModuleEntry, BuildActionManifest, CalibrationParameterValueSet, ClientIdDefinitionSet, ClientServerInterfaceToBswModuleEntryBlueprintMapping, Collection, CompuMethod, ConsistencyNeedsBlueprintSet, ConstantSpecification, ConstantSpecificationMappingSet, CpSoftwareCluster, CpSoftwareClusterBinaryManifestDescriptor, CpSoftwareClusterMappingSet, CpSoftwareClusterResourcePool, CryptoEllipticCurveProps, CryptoServiceCertificate, CryptoServiceKey, Crypto |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。
