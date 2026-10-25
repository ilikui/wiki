# AUTOSAR XML Schema Production Rules (`XMLSchemaProductionRules`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 122 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TPS_XMLSchemaProductionRules_122\AUTOSAR_FO_TPS_XMLSchemaProductionRules.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TPS_XMLSchemaProductionRules_122\AUTOSAR_FO_TPS_XMLSchemaProductionRules.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TPS_XMLSchemaProductionRules_122\zzgen\FO_TPS_XMLSchemaProductionRules.complete.txt`

## 文档简介

The AUTOSAR meta-model describes all information entities which can be used to describe an AUTOSAR system. XML is chosen as a basis for the exchange of formal descriptions of AUTOSAR systems. This document describes how a W3C XML schema specification  compliant XML schema can be compiled out of the AUTOSAR meta-model . Using the production rules a new XML schema can be generated automatically whenever the meta-model is updated. The schema production rules defined in this document exceed the configuration possibilities of comparable approaches like XMI  and enables the generic reproduction of a wide range of existing XML schemas out of well-structured UML models. The numbers in brackets you can find in this specification identify specification items.

 describes the XML schema production rules in the overall context. The meta-levels of the AUTOSAR modeling approach are described on the left side of the image:

* The syntax and semantics of the language UML2.0 is described on the meta-meta-level (M3). The AUTOSAR template profile  defines, which parts of UML2.0 are allowed to be used in the AUTOSAR meta-model.
* The AUTOSAR meta-model  is a UML2.0  model that defines the language for describing AUTOSAR systems. The AUTOSAR meta-model is a graphical representation of a template. UML2.0 class diagrams are used to describe the attributes and their interrelationships. Stereotypes and OCL  (object constraint language) are used for defining specific semantics and constraints.
* An AUTOSAR model is an instance of the AUTOSAR meta-model. The information contained in the AUTOSAR model can be anything that is representable according to the AUTOSAR meta-model.

The meta-levels of the XML language are described on the right side of :

* The W3C XML schema specification  defines how a W3C XML schema can be defined.
* The AUTOSAR XML schema is a W3C XML schema that defines the language for exchanging AUTOSAR models. This XML schema is derived from the AUTOSAR meta-model by means of the rules defined in this document. The AUTOSAR XML schema defines the AUTOSAR data exchange format.
* An AUTOSAR XML description describes the XML representation of an AUTOSAR model. The AUTOSAR XML description can consist of several fragments (e.g. files). Each individual fragment must validate successfully against the AUTOSAR XML schema.

This document describes how the AUTOSAR meta-model is mapped to the AUTOSAR XML schema by means of the XML schema production rules.

The mapping between AU

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

The AUTOSAR meta-model describes all information entities which can be used to describe an AUTOSAR system. XML is chosen as a basis for the exchange of formal descriptions of AUTOSAR systems. This document describes how a W3C XML schema specification  compliant XML schema can be compiled out of the AUTOSAR meta-model . Using the production rules a new XML schema can be generated automatically whenever the meta-model is updated. The schema production rules defined in this document exceed the configuration possibilities of comparable approaches like XMI  and enables the generic reproduction of a wide range of existing XML schemas out of well-structured UML models. The numbers in brackets you can find in this specification identify specification items.

 describes the XML schema production rules in the overall context. The meta-levels of the AUTOSAR modeling approach are described on the left side of the image:

* The syntax and semantics of the language UML2.0 is described on the meta-meta-level (M3). The AUTOSAR template profile  defines, which parts of UML2.0 are allowed to be used in the AUTOSAR meta-model.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. XML Schema 设计 principles
*原文标题：XML Schema design principles*

This chapter first describes some notes on XML schema and on UML2.0 semantics of the AUTOSAR meta-model and then gives a brief description on some basic principles, which include a short description of XML names, order of XML elements and linking.

### 3. Notes on UML2.0 semantics of the AUTOSAR meta-model

In UML2.0  attributes and navigable association ends are represented as properties. Since the AUTOSAR Template Profile only supports associations with two association ends, attributes and associations can be considered as equivalent for the XML schema production rules. Therefore the XML schema production rules can concentrate on classes and properties.

The following four sections give more information on the UML2.0 semantics of these concepts. Each chapter contains a diagram which shows the concept in the UML graphical notation (upper half of the diagram) and how it is represented as an instance of the UML2.0 meta-model (lower part of the diagram).

Please note that in UML2.0 compositions and references are both described by means of associations. The only difference is the value of the attribute "aggregation" of the association ends. For a more detailed description of the UML2.0 semantics please refer to the UML2.0 superstructure specification .

In the following sections the value of the attribute "aggregation" of the navigable association end is shown in brackets behind the association.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Representation of association (aggregation = composite)

depicts how a composite association is represented by means of instances of the UML2.0 meta-model. The association end 'theC' is navigable from class A and is represented as a property that is owned by class 'A'. The association end that is not navigable is owned by the association.

The information represented by the anonymous association and the not navigable property is not relevant for the XML schema production rules: From the point of view of production rules there is not difference between composite association and an attribute (see also next section).

### 5. Representation of attribute (aggregation = composite)

depicts how an attribute is represented by means of instances of the UML2.0 meta-model. The attribute 'theC' is represented as a property that is owned by class 'A'.

### 6. Representation of associations (aggregation = none)

depicts how a reference (association with aggregation = none) is represented by means of instances of the UML2.0 meta-model. The association end 'theB' is navigable from class D and is represented as a property that is owned by class 'D'.

The information represented by the anonymous association and the not navigable property is not relevant for the XML schema production rules. From the point of view of the production rules there is no difference between a reference and an attribute with aggregation=none (see also next section). However, the AUTOSAR meta-model allows stereotypes for references. The special semantics are handled separately as described in .

### 7. Representation of attributes (aggregation = none)

depicts how an attribute with aggregation = none is represented by means of instances of the UML2.0 meta-model. The attribute 'theB' is represented as a property that is owned by class 'D'.

Notes:

* A property with 'aggregation = none' is represented by a "*" in the UML2.0 graphical representation (attribute: theB: B*).
* According to the AUTOSAR Template Profile only attributes with aggregation=composite are allowed. However, the XML schema production rules cover those attributes since they do not add complexity: For the XML schema production rules attributes with aggregation=none (described in this section) are equivalent to associations with aggregation=none (described in ).

### 8. Notes on use of W3C XML schema

A W3C XML schema provides means by which a validating XML parser can validate the syntax and some of the semantics of an XML description.

XML validation can determine e.g.

* whether required XML elements are available,
* whether additional XML attributes or XML elements that are not allowed are used,
* or whether some values fit to a given regular expression.

Although some checking can be done, it is impossible to rely solely on XML validation to verify that the represented model satisfies all of a model's semantic constraints.

 W3C XML Schema Version 1.0
⌈
The AUTOSAR XML Schema conforms to the W3C XML Schema Version 1.0 (see ).
⌋

The production rules described in this document make sure that for each class, attribute and association represented in the AUTOSAR meta-model a representation in the AUTOSAR XML schema exists. Additionally, they make sure that the mapping between the AUTOSAR meta-model and the AUTOSAR schema is unambiguous.

In other words:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 处理 Inheritance
*原文标题：Handling Inheritance*

Inheritance in the AUTOSAR XML Schema
⌈
Inheritance in the AUTOSAR meta-model is mapped to XML schema by the following mechanisms:

* For each class in the AUTOSAR meta-model groups are created which contain the XML-elements and XML-attributes that represent the properties that are directly defined by the class. Classes without properties with xml.attribute=false will result in empty groups.
* Additionally an xsd:complexType representing the full content of the concrete class is created. The structure of this xsd:complexType is defined by referencing the group that defines the properties of the class itself and the xsd:groups that define the properties of the super-classes. The group representing the most general class (root of inheritance tree) is referenced first. The group representing the class itself is referenced last.
⌋

This concept allows for using polymorphism on XML level: The most general properties can always be found at the beginning of an XML-element. The more specific properties are appended at the end of a description.

Additionally properties that are directly defined by a class are grouped together. (See  for more details on the order of XML-elements and groups).

### 10. Generic Approach

The AUTOSAR XML schema production rules exceed the configuration possibilities of comparable approaches like XMI. This enables the generic reproduction of a wide range of existing XML formats such as MSR-SW  and XHTML .

### 11. XML element versus attribute

In accordance to the MSR-TR-CAP the production rules map all content related information to XML elements. This default rule can be overwritten by assigning the tagged value 'xml.attribute=true' to the respective property. If 'xml.attribute=true' then the property is translated to an XML-attribute. (See  for more details on this tagged value).

### 12. XML names

XML Names
⌈
All XML-elements, XML-attributes, XML-groups and XML-types used in the AUTOSAR XML schema are written in upper-case letters. In order to increase the readability of the XML names, hyphens are inserted in the XML names which separate parts of the names.

This document refers to a name that is translated as described in this section as a XML-name.

Non-alphanumeric characters SHALL not be used in UML names.

Formally, the following algorithm describes the translation of the UML names to XML names:

# Remove all non-alphanumeric characters from the UML name. If such characters exist, raise an error.
# Split up the UML name from left to right into tokens. A new token starts whenever an uppercase letter or digit is found. TestECUClass12ADC ->
# Iterate through the list, beginning from the last element and join adjacent single uppercase letters and join adjacent digits. E.g.:  ->  ->  ->  ->  ->
# Convert all tokens to uppercase: E.g.:
# Concatenate the tokens using a hyphen: E.g.: TEST-ECU-CLASS-12-ADC
⌋

If the default mapping is not suitable, the XML name can be explicitly defined by specifying the tagged value 'xml.name' for the corresponding UML model element.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Order of XML-elements

In order to decrease the complexity and to improve the performance of tools that read AUTOSAR XML descriptions a predictable order of XML-elements is defined. Additionally the order of XML-elements improves the human readability of XML descriptions.

### 14. Order of xml elements

Order of XML elements
⌈
Properties owned by classes in the AUTOSAR meta-model are mapped to XML-elements. By default, the AUTOSAR XML schema defines a certain sequence on XML elements which follows an alphabetical ordering.
⌋

This default rule can be overwritten by using the tagged value 'xml.sequenceOffset'. The value can be all integers between -999 to 999. The default value of xml.sequenceOffset is 0.

If offsetA is the offset of elementA and offsetB is the offset of elementB then:

offsetA < offsetB \Rightarrow elementA is listed before elementB

Elements with the same offset are ordered alphabetically.

### 15. Order of xml elements of derived uml：properties
*原文标题：Order of xml elements of derived uml:properties*

Chapter  described the order of the XML elements without considering inheritance. In case of inheritance not only the XML elements that are generated out of the properties that are directly defined by a class need to be considered. Additionally the XML-elements defined by the super-classes are relevant.

 Order of XML elements with Inheritance
⌈
The XML elements that represent XML elements directly owned by a class are grouped together and ordered as described in . The groups of XML elements are ordered as described by the pseudo code below:

// global variables
int index = 1;
Hashtable sequenceIndexTable = new Hashtable();

// method setSequenceIndex is invoked recursively
void setSequenceIndex(Class class) {
  List directBaseClasses = getDirectBaseClasses(class);

  // if class has baseclasses
  If ( !directBaseClasses.isEmpty() ) {
    // split up set of baseclasses into two groups
    List classesWithSupertypeIdentifiable =
         getClassesWithSupertypeIdentifiable(directBaseClasses);
    List classesWithoutSupertypeIdentifiable =
         getClassesWithoutSupertypeIdentifiable(directBaseClasses);

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Linking

XML Representation of meta-class references
⌈
References between meta-classes are represented by XML-elements suffixed with <...-REF> or <...-TREF>.
⌋

For more details about the representation of associations in XML descriptions, please refer to Generic Structure Template .

### 17. Transmitting incomplete 数据
*原文标题：Transmitting incomplete Data*

Optional XML elements
⌈
In order to allow the exchange of incomplete AUTOSAR descriptions, by default all XML elements are optional.
⌋

This default rule can be overwritten by marking a meta-model element with the tagged value 'xml.enforceMinimumMultiplicity=true'. In this case the lower value of the multiplicity will be used as minimum occurrence of an XML element in the AUTOSAR XML schema.

### 18. Identification of XML schema version in XML descriptions

XML schema version
⌈
The version of the AUTOSAR release is encoded into the namespace of the AUTOSAR XML schema. The format of the namespace is defined by http://autosar.org/schema/r<major>.<minor>.
⌋

This allows for parallel use of different versions of AUTOSAR XML schema and AUTOSAR XML descriptions. E.g. the namespace of the AUTOSAR XML schema published with AUTOSAR release 4.0 is http://autosar.org/schema/r4.0.

### 19. 配置 of XML schema production
*原文标题：Configuration of XML schema production*

In order to reduce the complexity of the mapping rules and to increase the transparency of the mapping between meta-model classes with their attributes and associations on the one side, and XML-elements on the other side, the mapping rules do not directly operate on the AUTOSAR meta-model. Instead it is translated in two steps:

* Step1: Configuration of XML schema production. In a first step the AUTOSAR meta-model is translated to a simplified intermediate model.]. Content relevant information of the AUTOSAR meta-model is mapped to classes, properties, enumerations, primitive data types and tagged values. If not otherwise mentioned missing tagged values are set to their default value as described in section ff. Some more complex mappings are described in chapter .
* Step 2: Schema production. The schema production rules use the intermediate model as input. The rules are parameterized by the tagged values defined in Step 1. See chapter  for more details on the schema production rules.

### 20. Tailoring schema production

### 21. 概述
*原文标题：Overview*

Tailoring XML schema production
⌈
| Tag Name | Value Type | Default Value | Applicable to | Description |
|---|---|---|---|---|
| extensionPoint | Boolean | False | Class | If set to true, then the class is mapped as it would have subclasses. This allows for later adding subclasses without loosing compatibility to older XML descriptions. |
| xml.attribute | Boolean | False | Property: Attributes only | If true, serializes the property as an XML attribute. By default all properties are mapped to XML elements. |
| xml.attributeRef | Boolean | False | Property | If true, serializes the property as an XML attribute reference (e.g. <xsd:attribute ref="xml:space" >). The namespace is taken from the value of xml.nsPrefix, the value of xml.name must be a valid name in that namespace. |
| xml.enforceMaxMultiplicity | Boolean | True | Property | If true, enforce maximum multiplicity; otherwise, it is "unbounded". By default xml.enforceMaxMultiplicity is true. |
| xml.enforceMinMultiplicity | Boolean | False | Property | If true, enforce minimum multiplicity; otherwise, it is "0". In order to allow for transmitting partial information, the minimum multiplicity is not enforced by default. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Constraints on tags

Some tags are not allowed to be used in combination with other tags. These constraints are listed in the next two subchapters.

### 23. Constraints on tags applied to properties

Constraints on tags applied to properties
⌈
| Constraints on tags applied to properties | xml.name | xml.namePlural | xml.roleElement | xml.roleWrapperElement | xml.typeElement | xml.typeWrapperElement | xml.attribute | xml.enforceMaxMultiplicity | xml.enforceMinMultiplicity | xml.sequenceOffset |
|---|---|---|---|---|---|---|---|---|---|---|
| xml.name | / |  |  |  |  |  |  |  |  |  |
| xml.namePlural |  | / |  |  |  |  |  |  |  |  |
| xml.roleElement |  |  | / |  |  |  | o |  |  |  |
| xml.roleWrapperElement |  |  |  | / |  |  | o |  |  |  |
| xml.typeElement |  |  |  |  | / |  | o |  |  |  |
| xml.typeWrapperElement |  |  |  |  |  | / | o |  |  |  |
| xml.attribute |  |  | o | o | o | o | / | o |  | o |
| xml.enforceMaxMultiplicity |  |  |  |  |  |  | o | / |  |  |
| xml.enforceMinMultiplicity |  |  |  |  |  |  |  |  | / |  |
| xml.sequenceOffset |  |  |  |  |  |  | o |  |  | / |

⌋

If the tagged value 'xml.attribute' is set to true, then an XML attribute is created for the respective property. The name of the XML attribute is defined by the tagged value 'xml.name'. If the lower value of the multiplicity of the property is bigger than 0 and 'xml.enforceMinMultiplicity' is set to true, then the 'use' of the XML attribute is set to 'required'.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Constraints on tags applied to classes

Constraints on tags applied to classes
⌈
| Constraints on tags applied to classes | xml.name | xml.namePlural | xml.ordered | xml.text | xml.globalElement | xml.xsd.type | xml.mds.type |
|---|---|---|---|---|---|---|---|
| xml.name | / |  |  |  |  | o | o |
| xml.namePlural |  | / |  |  |  | o | o |
| xml.ordered |  |  | / |  |  | o | o |
| xml.text |  |  |  | / |  | o | o |
| xml.globalElement |  |  |  |  | / | o | o |
| xml.xsd.type | o | o | o | o | o | / | o |
| xml.mds.type | o | o | o | o | o | o | / |

⌋

The tagged values 'xml.xsd.type' and 'xml.mds.type' are used to specify a predefined data type which is defined in the W3C XML schema specification or in the Generic Structure Template . If these tagged values are applied, then all other tagged values are ignored.

### 25. Constraints on values of xml.*Element tagged values

The following table depicts which combinations of values of the xml.*Element tags are allowed. The column usage defines that a combination is either preferred, alternative, "handle with care" or not allowed. The first two categories always lead to consistent, unambiguous XML schema. The "handle with care" category describes mapping rules which might lead to invalid XML schema. Those mapping rules are allowed in order to be able to support some MSR-TR-CAP concepts.

 Constraints on values of xml.*Element tagged values
⌈
| xml.roleWrapperElement | xml.roleElement | xml.typeWrapperElement | xml.typeElement | description | Usage (P=preferred, A=alternative, H=handle with care, N=not allowed) | used in standard |
|---|---|---|---|---|---|---|
| 0 | 0 | 0 | 0 | Handle with care: The resulting pattern will result in ambiguous XML schema | H | MSR |
| 0 | 0 | 0 | 1 | Handle with care: Role Information is missing - might lead to ambiguous XML schema if two roles have the same type | H | MSR |
| 0 | 0 | 1 | 0 | Not allowed: typeWrapperElement without typeElement | N |  |
| 0 | 0 | 1 | 1 | Handle with care: Role Information is missing - might lead to ambiguous descriptions if two roles have the same type | H | MSR |
| 0 | 1 | 0 | 0 | Preferred |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Default 配置 of XML schema production
*原文标题：Default configuration of XML schema production*

This chapter describes how the XML schema production rules are configured for mapping the AUTOSAR meta-model to the AUTOSAR XML schema. Tagged values that are already defined in the AUTOSAR meta-model are not overwritten: The configuration rules defined in this chapter add missing tagged values. If the resulting combination of tagged values is invalid, an error needs to be indicated. The fault needs to be resolved by editing the tagged values in the AUTOSAR meta-model.

### 27. 配置 of multiplicities
*原文标题：Configuration of multiplicities*

XML Configuration of multiplicities
⌈
The tagged values 'xml.enforceMinMultiplicity' and 'xml.enforceMaxMultiplicity' are set to the default values (see ) if not explicitly defined otherwise in the AUTOSAR metamodel. Additionally, the multiplicities of all properties are updated according to the following rules:

* If 'xml.enforceMinMultiplicity = false', then set 'lower multiplicity' of property to 0.
* If 'xml.enforceMinMultiplicity = true', then no changes on 'lower multiplicity' of property.
* If 'xml.enforceMaxMultiplicity = false', then set 'upper multiplicity' of property to unbounded.
* If 'xml.enforceMaxMultiplicity = true', then no changes on 'upper multiplicity' of property.
⌋

### 28. 映射配置 for properties
*原文标题：Mapping configuration for properties*

Five cases are distinguished when configuring the mapping of properties in the AUTOSAR meta-model:

#  XML Configuration of properties (upper multiplicity 1, no subclasses)
  ⌈
  Upper multiplicity of property = 1 and type of property has no subclasses:

  * xml.roleWrapperElement = false Note: upper multiplicity of property = 1, no need for a wrapper
  * xml.roleElement = true
  * xml.typeWrapperElement = false Note: upper multiplicity of property = 1, no need for a wrapper
  * xml.typeElement = false Note: the type can uniquely be derived from meta-model

  Note: If the tagged value 'extensionPoint' is used for a class and set to true, then the class is mapped as it would have subclasses. This allows for later adding subclasses without loosing backwards compatibility to older XML descriptions. In this case the "*Element" tagged values are set according to case 3.
  ⌋

  The property 'theC' in  depicts this case.
#  XML Configuration of properties (upper multiplicity greater than 1, no subclasses)
  ⌈
  Upper multiplicity of property > 1 and type of property has no subclasses:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. 映射配置 for references
*原文标题：Mapping configuration for references*

In addition to the configuration defined in the previous section the following configuration is applied to references (association with aggregation = none).

### 30. References without stereotypes

XML Configuration of references without stereotype
⌈
For references we basically distinguish the following two cases:

# Upper multiplicity of reference = 1

  * xml.roleWrapperElement = false
  * xml.roleElememt = true
  * xml.typeWrapperElement = false
  * xml.typeElement = false
# Upper Multiplicity of reference > 1

  * xml.roleWrapperElement = true
  * xml.roleElememt = true
  * xml.typeWrapperElement = false
  * xml.typeElement = false

Furthermore 'xml.name' of properties representing the navigable association end of references is set to the default 'xml.name' appended by "-REF" (the default 'xml.name' is defined in ). The 'xml.namePlural' is set to the default 'xml.name' appended by "-REFS".
⌋

### 31. Instance references

The AUTOSAR Template UML Profile requires that all details of instance references are properly modeled in the AUTOSAR meta-model.

 XML Configuration of instance references
⌈
The following tagged values are applied:

* Composite reference between the source of the instance reference and the meta-class which contains the references to the context(s) and the target:

  * xml.name = xml-name suffixed by '-IREF'
  * xml.namePlural = xml-name suffixed by '-IREFS'
  * xml.roleWrapperElement =
  * xml.roleElement = true
  * xml.typeWrapperElement = false
  * xml.typeElement =  (If there are subclasses of the InstanceRef class, the applied class has to be specified by a typeElement.)
* instanceRef meta-class:

  * xml.name = xml-name suffixed by "-IREF". Additionally the "_" is replaced by "--" in order to guarantee the uniqueness of the xml name.
* reference from instanceRef meta-class to the target (the reference to the target is mandatory):

  * xml.enforceMinMultiplicity = false (Consequently, this should be set to true as an InstanceRef shall always point to a target.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. References with stereotype <<isOfType>>

XML Configuration of type references
⌈
If the stereotype isOfType>> is applied to an association in the AUTOSAR meta-model then the tagged value 'xml.name' of the navigable association end is set to the default xml.name appended by "-TREF". According to the AUTOSAR Template Profile, the upper multiplicity of an association with stereotype isOfType>> is limited to 1. Therefore no multiplicity wrapper is required and no xml.namePlural needs to be defined.
⌋

### 33. Stereotypes applied to classes

### 34. Stereotype <<atpMixed>>

If the stereotype atpMixed>> is applied to a class in the AUTOSAR meta-model then the properties are represented by XML elements in arbitrary order and unbounded multiplicity. This only applies to properties that are not explicitly mapped to attributes by setting the 'xml.attribute' tag to 'true'.

 XML Configuration of classes with atpMixed>>
⌈
The following values are applied to classes with stereotype atpMixed>> (other values specified in the meta-model are ignored):

* Values of the stereotyped meta-class:

  * xml.ordered=false
  * xml.text=false
* Values of the properties of the stereotyped meta-class:

  * upper multiplicity = unbounded
  * lower multiplicity = 0
  * xml.roleWrapperElement = false
  * xml.roleElement = true
  * xml.typeWrapperElement = false
  * xml.typeElement = true (if the type of the property has concrete subclasses), false (otherwise)
⌋

### 35. Stereotype <<atpMixedString>>

If the stereotype atpMixedString>> is applied to a class in the AUTOSAR meta-model then the properties may be represented by XML elements in arbitrary order and unbounded multiplicity. In this case the tagged value 'xml.ordered' is set to false and the tagged value 'xml.text' is set to true. See chapter  for more details on the scope of the tagged value 'xml.text'. No wrappers are created for the properties. Additionally, the XML elements may have text in-between.

 XML Configuration of classes with atpMixedString>>
⌈
The following values are applied to classes with stereotype atpMixedString>> (other values specified in the meta-model are ignored):

* Values of the stereotyped meta-class:

  * xml.ordered=false
  * xml.text=true
* Values of the properties of the stereotyped meta-class:

  * upper multiplicity = unbounded
  * lower multiplicity = 0
  * xml.roleWrapperElement = false
  * xml.roleElement = true
  * xml.typeWrapperElement = false
  * xml.typeElement = true (if the type of the property has concrete subclasses), false (otherwise)
⌋

### 36. XML Schema production rules

The following sections describe the mapping rules for an automatic generation of the AUTOSAR XML schema out of the intermediate meta-model. Please note that in the intermediate meta-model all tagged values and multiplicities are set as defined in chapter .

Each rule is described by the following information:

* Applies to: The meta-meta-model (UML2.0) element the rule applies to
* Precondition: The rule can only be applied if the precondition evaluates to true
* Target pattern: The target pattern describes how the respective meta-model element is mapped to XML schema. Values that need to be read out of the AUTOSAR meta-model are denoted by script tags "<%" and "%>": e.g.: <%=my variable %>.
* Description: The description explains the target pattern and how it can be parameterized.
* UML example, XML schema example and XML instance example: These examples illustrate the application of the rule.

### 37. Create 建模 representation
*原文标题：Create model representation*

depicts how a model is mapped to a XML schema. The header of the schema is created first, followed by XML representations for each class. After that the predefined data types and the footer of the schema are created.

### 38. Create xsd：schema
*原文标题：Create xsd:schema*

XML Schema production rule: xsd:schema
⌈
| Applies to | Package |
|---|---|
| Precondition | n/a |
| Target pattern | <xsd:schema xmlns:<%=xmlNsPrefix%>="<%=xmlNsUri%>" |

            xmlns:xsd="http://www.w3.org/2001/XMLSchema"
            targetNamespace="<%=xmlNsUri%>"
            elementFormDefault="qualified"
            attributeFormDefault="unqualified">
  <xsd:import namespace="http://www.w3.org/XML/1998/namespace"
              schemaLocation="http://www.w3.org/2001/03/xml.xsd"/>

  <% for all classes { %>
  <% call class representation %>
  <% } %>
</xsd:schema>
| Description: | This rule creates the header and footer of the XML schema. By default xmlNsPrefix is set to "AR" and the xmlNsUri is set to http://autosar.org/schema/r<realease_number>. The body of the XML schema is composed of a namespace import of the XML namespace and representations for each class (including their properties). |
|---|---|
| XML schema example: | <xsd:schema xmlns:AR="http://autosar.org/schema/r4.0" xmlns:xsd="http://www.w3.org/2001/XMLSchema" targetNamespace="http://autosar.org/schema/r4.0" elementFormDefault="qualified" attributeFormDefault="unqualified"> |

  ...
</xsd:schema>
| XML instance example: | <... |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 53 章（内容从略，见纯文本全文）

39. Create class representation
40. Create xsd：group
41. Create xsd：attributeGroup
42. Create xsd：complexType
43. Create xsd：complexType with simple content
44. Create global xsd：element
45. Create enumeration of subtypes
46. Create reference to XML predefined 数据类型
47. Create a custom simple 类型
48. Create xsd：simpleType for enumeration
49. Create composite property representation (映射 to XML attributes)
50. Create xsd：attribute
51. Create composite property representation (映射 to XML elements)
52. Create composite property representation (1111)
53. Create composite property representation (1101)
54. Create composite property representation (1100)
55. Create composite property representation (1011)
56. Create composite property representation (1000)
57. Create composite property representation (1001)
58. Create composite property representation (0111)
59. Create composite property representation (0101)
60. Create composite property representation (0100)
61. Create composite property representation (0011)
62. Create composite property representation (0001)
63. Create composite property representation (0000)
64. Create reference representation
65. Create reference property representation (1)
66. Create reference property representation (0)
67. Create a reference to attributes in foreign namespaces
68. AUTOSAR XML schema compliance
69. 附录
70. Change history of AUTOSAR traceable items
71. 规范 Item 映射：Document migration from TR to TPS
72. Traceable item history of this document according to AUTOSAR Release R25-11
73. Added 规范 Items in R25-11
74. Changed 规范 Items in R25-11
75. Deleted 规范 Items in R25-11
76. Traceable item history of this document according to AUTOSAR Release R24-11
77. Added 规范 Items in R24-11
78. Changed 规范 Items in R24-11
79. Deleted 规范 Items in R24-11
80. Traceable item history of this document according to AUTOSAR Release R23-11
81. Added 规范 Items in R23-11
82. Changed 规范 Items in R23-11
83. Deleted 规范 Items in R23-11
84. Traceable item history of this document according to AUTOSAR Release R22-11
85. Added 规范 Items in R22-11
86. Changed 规范 Items in R22-11
87. Deleted 规范 Items in R22-11
88. Traceable item history of this document according to AUTOSAR Release R21-11
89. Added 规范 Items in R21-11
90. Changed 规范 Items in R21-11
91. Deleted 规范 Items in R21-11
