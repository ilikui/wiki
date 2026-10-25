# AUTOSAR Feature Model Exchange Format (`FeatureModelExchangeFormat`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | TPS — 模板规范（Template Specification） |
| UID | 606 |
| 规范版本 | R26-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_TPS_FeatureModelExchangeFormat_606\AUTOSAR_FO_TPS_FeatureModelExchangeFormat.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_TPS_FeatureModelExchangeFormat_606\AUTOSAR_FO_TPS_FeatureModelExchangeFormat.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_TPS_FeatureModelExchangeFormat_606\zzgen\FO_TPS_FeatureModelExchangeFormat.complete.txt`

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional Overview*

### 2. Variant 处理 in AUTOSAR
*原文标题：Variant Handling in AUTOSAR*

Release 4 of AUTOSAR has added support for Variant Handling, which contributes two new aspects to the AUTOSAR metamodel as it was defined in release 3.

First, variation points have been introduced to AUTOSAR models. An AUTOSAR model with variation points describes a set of AUTOSAR models which have a common structure but differ at certain locations. A variant-free AUTOSAR model is created from such a model by binding the variation points, that is, by keeping some variations and discarding others.

Second, AUTOSAR defines means to express what constitutes a specific variant, for example which variation points are selected in an "economy" variant and which variation points are selected in a "luxury" variant. This is necessary because an AUTOSAR model with variation points may describe a very large number of variants, but few of them are actually used.

Variant Handling in AUTOSAR is described in chapter on variant handling of the Generic Structure Template .

### 3. The case for Feature Models

To summarize the previous section, AUTOSAR Variation points are intended to exchange information about where variation occurs in an AUTOSAR model, and to state what the relevant variants are. There are however two aspects that are not yet covered by this concept:

* Variation points are expressed on a rather low level. For example, the variants 'economy' and 'luxury' typically consist of a large number of variation points, but the fact that these variation points act conjointly is not explicitly visible in the model.
* There are dependencies between variation points. For example, 'economy' and 'luxury' variants are mutually exclusive, but this relationship is again not explicitly visible in the model. For variation points that are not PostBuild, this could be implemented by appropriately extending the formula language used for the conditions, although this would be difficult to maintain and would also intertwine two independent concepts, variation points and feature modeling. However, such an extension would not work for PostBuild because such variation points only use simple conditions.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 4. Sample Feature 建模
*原文标题：Sample Feature Model*

An example for a feature model is shown in Figure .

### 5. 概述
*原文标题：Overview*

# Features reside in the "problem domain". They are even independent from the implementation respectively the product architecture. They are much more abstract than variation points which reside in the "solution domain". Features express common and variable characteristics of the finished product instead of annotating individual locations in a model. A feature model provides a high-level view of an AUTOSAR model with variations.
# A feature model describes the dependencies between individual features. Examples for dependencies include hierarchical structuring of features, features that model alternatives, and features that require or prohibit other features.
# An individual product can be described by selecting a set of features. Of course, such a selection has to obey the dependencies stated in the feature model. A mapping from features to variation points specifies which variation points are affected by the selection.
# The Feature Model Exchange Format establishes an efficient way to exchange feature models between different feature modeling tools.
# Feature models will be optional in AUTOSAR.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Document Conventions

Technical terms are typeset in mono spaced font, e.g. PortPrototype. As a general rule, plural forms of technical terms are created by adding "s" to the singular form, e.g. PortPrototypes. By this means the document resembles terminology used in the AUTOSAR XML Schema.

This document contains constraints in textual form that are distinguished from the rest of the text by a unique numerical constraint ID, a headline, and the actual constraint text starting after the \lceil character and terminated by the \rfloor character.

The purpose of these constraints is to literally constrain the interpretation of the AUTOSAR meta-model such that it is possible to detect violations of the standardized behavior implemented in an instance of the meta-model (i.e. on M1 level).

Makers of AUTOSAR tools are encouraged to add the numerical ID of a constraint that corresponds to an M1 modeling issue as part of the diagnostic message issued by the tool.

The attributes of the classes introduced in this document are listed in form of class tables. They have the form shown in the example of the top-level element AUTOSAR:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. Terminology

Figure  presents an overview of the terminology used for feature modeling. We define seven terms that are specific to the Feature Model Exchange Format, namely Feature, Feature Selection, Feature Model, Product Model, Product Line Model, Product and Product Line:

*  Definition of Feature
  ⌈
  A Feature describes an essential characteristic of a product. Features usually differentiate one product from similar products - in our context, features differentiate the individual products in a product line.
  ⌋
*  Definition of Feature Selection
  ⌈
  A Feature Selection is a set of Features that describes a specific product.

  A Feature Selection is always paired with a Feature Model. All dependencies and relations that are defined in the Feature Model shall be obeyed.
  ⌋
*  Definition of Feature Model
  ⌈
  A Feature Model describes the available features of a product line and their interrelations / interdependencies. In other words, a Feature Model describes a Product Line Model in the problem domain.

  For example, a car may have either a gasoline or a diesel engine, so the features Gasoline and Diesel are alternatives.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Terminology from graph theory

In this document, we do occasionally use concepts from graph theory to provide formal descriptions for constraints. The following sections defines these terms.

* A directed graph is a tuple (V,E) where E \subseteq V \times V. V are called the nodes of G, and E are called the edges of G.
* A path p in a graph G=(V,E) is a sequence p = v_1,v_2,\ldots{},v_n of nodes with v_i \in V and \forall i \in \{ 1, \ldots{} n-1 \} : (v_i,v_{i+1}) \in E. p starts at v_1 and ends at v_n.
* A circle in a graph G=(V,E) is a path v_1,v_2,\ldots{},v_n where v_1 = v_n.
* A self loop in a graph G=(V,E) is an edge (v,v) \in E.
* An isolated node in a graph G=(V,E) is a node v \in V where \neg\exists v' : ((v,v') \in E \vee (v',v) \in E). In other words, an isolated node is one that has no edges.
* A tree is a graph G=(V,E) with root r \in V that has the following properties:

  # \forall v \in V : \exists \:\mathrm{path}\: p=\{r,v_2,\ldots{},v\}. In other words, for every node v \in V, there exists a path that starts at r and ends at v.
  # \neg \exists v \in V : (v,r) \in E. In other words, the root node has no incoming edge.
  # \forall v \in V, v \neq r : \dot{\exists} v' \in V : (v',v) \in E.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. 概述
*原文标题：Overview*

An AUTOSAR feature model consists of three different structures: the feature model itself, the feature selection, and finally the feature map.

### 10. Feature 建模
*原文标题：Feature Model*

A feature model (FMFeatureModel) consists of a number of features (FMFeature), which are organized hierarchically (FMFeatureDecomposition). That is, each feature may contain a number of subfeatures, which in turn may contain subfeatures of their own and so on. In other words: a feature model consists of one or more feature trees.

As a special case, it is possible to distribute (split) feature models over several AUTOSAR files. It is also possible to partition a large feature tree into subtrees.

Also, there may be interdependencies between features. For example, features may represent alternatives and are thus mutually exclusive (FMFeatureDecomposition), or a feature may require one or more other features, contradict other features (FMFeatureRelation), or features may include an expression that restricts their applicability (FMFeatureRestriction).

### 11. Feature Selection

A feature selection is a set of features that describe an actual product. For example, a specific car model is described by its set of features. This is implemented by a FMFeatureSelectionSet, which contains a number of FMFeatureSelections, each of which defines the state of a FMFeature within this particular feature selection.

A feature selection is said to be valid if all the restrictions and relations defined for its features as well as the hierarchical structure of the feature model are obeyed.

Feature selections are handled separately from feature models because there usually are many different feature selections for a single feature model. For example, different cars are represented by different feature selections.

### 12. Feature 映射
*原文标题：Feature Map*

In AUTOSAR Variant Handling, variation points are controlled by system constants. An expression that is based on system constants is used to determine whether a particular variation point is 'on' or 'off'. One consequence is that the same system constant may be used to control several variation points.

Hence, features cannot be mapped directly to variation points, but need to choose values for the system constants which are used in the variation points' expressions.

This is done by feature maps (FMFeatureMap). In a nutshell, each element of a feature map (FMFeatureMapElement) contains a set of conditions (FMFeatureMapCondition) that are based on features and feature attributes and a set of assertions (FMFeatureMapAssertion) that are based on features and system constants. If any of the conditions and all of the assertions evaluate to true, then the mapping lists a number of system constants and chooses values for them.

### 13. Feature 建模
*原文标题：Feature Model*

### 14. Class FMFeatureModel

| Class | FMFeatureModel | < | < | < |
|---|---|---|---|---|
| Note | A Feature model describes the features of a product line and their dependencies. Feature models are an optional part of an AUTOSAR model. |  |  |  |

| Tags: atp.recommendedPackage=FMFeatureModels | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| feature | FMFeature | * | ref | "feature" holds the list of features of the feature model. No FMFeature may be contained twice in this list. Also, each FMFeature may be contained on only one feature model. |

Stereotypes: atpSplitable Tags: atp.Splitkey=feature
| root | FMFeature | 0..1 | ref | The features of a feature model define a tree. The attribute root points to the root of this tree. |
|---|---|---|---|---|

 Purpose of FMFeatureModel
⌈
A FMFeatureModel describes the available features of a product line, as defined in .
⌋

A feature model is implemented by the class FMFeatureModel. As FMFeatureModel is an ARElement, an AUTOSAR model may contain any number of feature models, including zero.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 15. Reference feature

Each FMFeatureModel contains a number of FMFeature elements in the role feature. These elements represent the features of the feature model.

 Definition of Features of a FMFeatureModel
⌈
Let F be a FMFeatureModel and let \{f_1,f_2,\ldots{},f_n\} be the set of FMFeatures that are referenced from F in the role feature. Then \{f_1,f_2,\ldots{},f_n\} are the features of F.
⌋

A FMFeature can only be part of a single FMFeatureModel:

 FMFeature shall only be referenced from one FMFeatureModel in the role feature
  Imposition time: `IT_FeatMod`
⌈
Let f be a FMFeature, and F,F' be FMFeatureModels where F references f in the role feature, and F' also references f in the role feature. Then F =F'.
⌋

Obviously, a FMFeatureModel shall not contain the same feature twice.

 FMFeatureModel shall not contain the same FMFeature twice
  Imposition time: `IT_FeatMod`
⌈
Let F be a FMFeatureModel, and let f,f' be FMFeatures that are referenced from F in the role feature. Then f \neq f'.
⌋

On the other hand, there are no "isolated" features; every FMFeature is part of a FMFeatureModel.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. Reference root

As the features of a feature model are organized in a tree structure (see Section ), there is exactly one feature that sits at the top of the tree. The feature model has an extra reference root which points to that feature.

root is not strictly necessary because it would be possible to infer the root feature from the hierarchical structure of a feature model (see Section ). However, root is included for convenience and to assist tools in checking the integrity of the model.

 Definition of Root Feature of a FMFeatureModel
⌈
Let F be a FMFeatureModel that refers to a FMFeature f in the role root. Then f is called the root feature of F.
⌋

We need to define two constraints for the root feature. First, if the feature model is not empty - that is, it has features - then one feature shall be the root feature:

 Root feature shall be present if and only if the feature model is not empty
  Imposition time: `IT_FeatMod`
⌈
If a FMFeatureModel refers to one or more FMFeature elements in the role feature, then exactly one of them shall be referenced by FMFeatureModel in the role root.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Class FMFeature

Each FMFeatureModel consists of a number of FMFeatures, which in turn are organized in a hierarchical, tree-like structure. This hierarchy establishes a parent-child relation among features, where every feature that is not the root feature has exactly one parent, and any number of children, including zero.

| Class | FMFeature | < | < | < |
|---|---|---|---|---|
| Note | A FMFeature describes an essential characteristic of a product. Each FMFeature is contained in exactly one FMFeatureModel. |  |  |  |

| Tags: atp.recommendedPackage=FMFeatureModels | < | < | < |  |
|---|---|---|---|---|
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| attributeDef | FMAttributeDef | * | aggr | This defines the attributes of the given feature. |
| decomposition | FMFeatureDecomposition | * | aggr | Lists the sub-features of a feature. |
| maximumIntendedBindingTime | BindingTimeEnum | 0..1 | attr | Defines an upper bound for the binding time of the variation points that are associated with the FMFeature. This attribute is meant as a hint for the development process. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 18. Name and Documentation of a Feature

Name of a FMFeature
⌈
The attribute shortName may be used to identify a feature. Furthermore, the attribute longName may be used to provide a human readable name for a FMFeature.
⌋

 Description for a FMFeature
⌈
The attributes introduction and desc may be used to provide a human readable description for a FMFeature.
⌋

As outlined in , introduction and desc are intended to be used as follows:

* introduction  contains introductory documentation about how the feature may be used.
* desc  contains a brief description about what the feature is.

The attributes shortName, longName, introduction and desc are not visible in Figure , but stem from the fact that FMFeature is based on ARElement, which in turn is based on Identifiable and Referrable.

### 19. Intended Binding Time

The class FMFeature contains two optional attributes minimumIntendedBindingTime and maximumIntendedBindingTime, which define lower and upper bounds for the intended binding time (binding times are explained in the AUTOSAR Methodology) of the variation points that are associated with the FMFeature.

 Semantics of attributes minimumIntendedBindingTime and maximumIntendedBindingTime
⌈
Let f be a FMFeature and V be the set of affected variation points of f as defined in . Then the following conditions are implied for every variation point v \in V:

# If the attribute minimumIntendedBindingTime exists and has value \mathnormal{min}, then \mathnormal{min} \leq \mathnormal{bindingtime(v)}.
# If the attribute maximumIntendedBindingTime exists and has value \mathnormal{max}, then \mathnormal{bindingtime(v)} \leq \mathnormal{max}.
⌋

 refers to the variation points that are associated with a FMFeature. This information is not available through a FMFeatureModel, but is defined in a FMFeatureMap (see Section ). Hence, the attributes minimumIntendedBindingTime and maximumIntendedBindingTime can only be interpreted when a FMFeatureMap is also available.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. Attributes of a Feature

Each FMFeature aggregates zero or more FMAttributeDef elements, each of which defines an attribute of a feature.

| Class | FMAttributeDef | < | < | < |
|---|---|---|---|---|
| Note | This metaclass represents the ability to define attributes for a feature. | < | < | < |
| Base | ARObject, Identifiable, MultilanguageReferrable, Referrable | < | < | < |
| Aggregated by | FMFeature.attributeDef | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| defaultValue | Numerical | 0..1 | attr | This represents the default value of the attribute. |
| max | Limit | 0..1 | attr | Maximum possible value for the value of this attribute |
| min | Limit | 0..1 | attr | Minimum possible value for the value of this attribute |

 Multiplicity of FMAttributeDef.max and FMAttributeDef.min
  Imposition time: `IT_FeatMod`
⌈
For each FMAttributeDef the attributes max and min shall exist.
⌋

 Purpose of FMAttributeDef
⌈
FMAttributeDef defines attributes for features. Each FMAttributeDef contains an optional defaultValue and defines limits for its value with the attributes max and min.
⌋

 Semantics of attributes max and min in class FMAttributeDef
  Imposition time: `IT_FeatMod`
⌈
The following conditions shall hold for all instances of the class FMAttributeDef:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Class FMFeatureDecomposition

Each FMFeature aggregates one or more FMFeatureDecomposition elements. A FMFeatureDecomposition contains references to other features, and thus establishes a hierarchical organization of features. This hierarchy imposes certain restrictions on FMFeatures, for example declares some features as optional or mutually exclusive. It may also connect one FMFeatureModel to another FMFeatureModel by referring to its root feature.

| Class | FMFeatureDecomposition | < | < | < |
|---|---|---|---|---|
| Note | A FMFeatureDecomposition describes dependencies between a list of features and their parent feature (i.e., the FMFeature that aggregates the FMFeatureDecomposition). The kind of dependency is defined by the attribute category. | < | < | < |
| Base | ARObject | < | < | < |
| Aggregated by | FMFeature.decomposition | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| category | CategoryString | 0..1 | attr | The category of a FMFeatureDecomposition defines the type of dependency that is defined by the FMFeatureDecomposition. There are four different categories: MANDATORYFEATURE, OPTIONALFEATURE, ALTERNATIVEFEATURE, and MULTIPLEFEATURE. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 22. Constraints and Terminology for FMFeatureDecomposition

Definition of Parent Feature, Child Feature
⌈
Let f be a FMFeature which aggregates a FMFeatureDecomposition that references a FMFeature f' in the role feature. Then f is the parent feature of f', and f' is a child feature of f.
⌋

Each feature has at most one parent feature, but can have any number of child features, including zero. This is established by the fact that a feature model is organized as a tree, as determined by constraint  below.

 FMFeature shall not be referenced from more than one FMFeatureDecomposition
  Imposition time: `IT_FeatMod`
⌈
Let f be a FMFeature that is referenced from a FMFeatureDecomposition in the role feature. Then no other FMFeatureDecomposition shall reference f in the role feature.
⌋

Constraint  makes sure that every FMFeature has at most one parent feature (the number of child features is not limited for obvious reasons). This paves the way for the following definition of the underlying graph of a FMFeatureModel, which is in fact an underlying tree.

 Definition of Underlying Graph of a FMFeatureModel
⌈
Let F be a FMFeatureModel and \{f_1,f_2,\ldots{},f_n\} be the set of FMFeatures that are referenced from F in the role feature.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. Categories of Feature Decompositions

The attribute category of a FMFeatureDecomposition defines the semantics for the FMFeatures referenced in the role feature. We define four categories for FMFeatureDecomposition, namely MANDATORYFEATURE, OPTIONALFEATURE, ALTERNATIVEFEATURE and MULTIPLEFEATURE:

*  MANDATORYFEATURE
  ⌈
  All FMFeatures referenced in the role feature from a FMFeatureDecomposition that has the category MANDATORYFEATURE shall be present in a feature selection if and only if its parent FMFeature is included in the feature selection.
  ⌋
*  OPTIONALFEATURE
  ⌈
  FMFeatures referenced in the role feature from a FMFeatureDecomposition that has the category OPTIONALFEATURE may be present in a feature selection if and only if its parent FMFeature is included in the feature selection.
  ⌋
*  ALTERNATIVEFEATURE
  ⌈
  Exactly one of the FMFeatures referenced in the role feature from a FMFeatureDecomposition that has the category ALTERNATIVEFEATURE shall be present in a feature selection if and only if its parent FMFeature is included in the feature selection.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. Attributes min and max

If the optional attributes min and max are present, they restrict how many multiple features may be selected.

 Default values for attributes min and max of FMFeatureDecomposition
⌈
If min and max are missing, then the values 1 (for min) and \infty (for max) are assumed in .
⌋

In other words, if min and max are not specified, then a valid feature selection shall contain at least one of the features, but there is no upper bound. Technically, \infty in  translates to the maximum number that can be represented by PositiveInteger.

 Attributes min and max of FMFeatureDecomposition reserved for category MULTIPLEFEATURE
  Imposition time: `IT_FeatMod`
⌈
The optional attributes min and max of FMFeatureDecomposition are only allowed to be present if the category of the FMFeatureDecomposition is MULTIPLEFEATURE.
⌋

### 25. Hierarchical decomposition of Feature Models

There is a special case where FMFeatureDecomposition may reference a feature in another FMFeatureModel. This is useful for hierarchical decomposition of FMFeatureModels. However, this is only allowed if the referenced feature is the root feature.

 FMFeatureDecomposition may refer to a root feature of another feature model, but only once.
  Imposition time: `IT_FeatMod`
⌈
Let f_A be a FMFeature that is referenced by FMFeatureModel A in the role feature, but is also referenced from a FMFeatureDecomposition that is aggregated by a FMFeature f_B in the role decomposition.

Furthermore, let B be the FMFeatureModel that references f_B in the role feature with A \neq B. That is, f_A and f_B belong to different feature models.

Then both the following conditions shall hold:

# f_A is referenced from A in the role root.
# There is no other FMFeatureDecomposition (neither in B nor in any other FMFeatureModel) that references f_B in the role feature.
⌋

The second condition in  is necessary to make sure that the overall structure of the combined feature models is still a tree (see also  and ).

### 26. Why use referencing for FMFeature instead of aggregation?

We could also have defined feature models such that FMFeatureModel aggregates a single FMFeature (the root feature), and FMFeatureModel then recursively aggregates other FMFeatures. With this approach, several of the constraints defined earlier in this section would have been unnecessary because this aggregation naturally forms a tree.

However, this approach would not work for the decomposition of feature models as described in Section . In this case, a FMFeatureDecomposition refers to the root of a different FMFeatureModel. This cannot easily be done by aggregation.

### 27. Class FMFeatureRestriction

The hierarchy established by FMFeatureDecomposition (see Section ) covers many use cases for constraining the inclusion of a feature into a feature selection.

There are however circumstances where more elaborate constraints are necessary. FMFeatureDecomposition defines constraints for features which share the same parent features. For example, it may express that several features are alternatives within the context of their parent (typically, a "Car" either contains a "Diesel" or a "Gasoline" engine, but not both), but it cannot express that a FMFeature depends on another FMFeature accross the tree, or contradicts a combination of two other features.

A FMFeature may aggregate a number of FMFeatureRestriction elements that further limit its inclusion in a feature selection. A FMFeatureRestriction aggregates a boolean expression in the role restriction which constrains whether a particular feature is allowed to become part of a FMFeatureSelection.

More precisely, a feature may only become part of a feature selection if at least one of its restrictions evaluate to true.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Identifying and documenting FMFeatureRestrictions

Because FMFeatureRestriction is based on Identifiable, it may contain the optional attributes shortName, introduction, and desc.

 Identifying FMFeatureRestrictions
⌈
The attribute shortName can be used to distinguish relations in case a FMFeature aggregates several FMFeatureRestrictions.
⌋

 Documenting FMFeatureRestrictions
⌈
The attributes introduction and desc may be used to provide a human readable description for a FMFeatureRestriction.
⌋

### 29. 示例
*原文标题：Example*

Consider a feature f that has the following restriction:

f_1 \&\& f_2 \&\& f_3

This restriction defines that f may only be part of a feature selection if f_1, f_2 and f_3 are also included in that feature selection. This cannot be expressed with a feature tree because f would have to be a mandatory child of all three features, which is clearly a violation of the tree structure.

On the opposite side, it would be possible to define mandatory, optional, alternative and multiple features solely with restrictions. For example, the fact that features f and f' are mutually exclusive (that is, alternate features) could be expressed by assigning the restriction \neg f' to f and the restriction \neg f to f'.

By extending this approach, it would be possible to replace the different categories defined for FMFeatureDecomposition in Section . We did not follow this direction because it would be easy to generate such restrictions from a decomposition, but it would be hard to translate them back into decompositions without proper annotation.

### 其余 138 章（内容从略，见纯文本全文）

30. Class FMFeatureRelation
31. Attribute category
32. Identifying and documenting FMFeatureRelations
33. Predefined Relations
34. Hierarchy, Restrictions and Relations
35. Feature Selection
36. 示例
37. Class FMFeatureSelection
38. Reference feature
39. Attribute 状态
40. FMAttributeValue
41. 示例
42. Selected Binding Time
43. Class FMFeatureSelectionSet
44. Terminology and constraints
45. Relation include
46. 状态 and include
47. Valid Feature Selection
48. Feature 映射
49. 示例
50. 概述
51. Class FMFeatureMap
52. Class FMFeatureMapElement
53. Relationship with PredefinedVariant
54. So, how does it work?
55. Which variation points are affected by a particular FMFeature?
56. Common 概念
57. Special 数据 in Context of Feature Models
58. Formulas that use Features
59. FMFormulaByFeaturesAndAttributes
60. FMConditionByFeaturesAndAttributes
61. FMFormulaByFeaturesAndSwSystemconsts
62. FMConditionByFeaturesAndSwSystemconsts
63. Evaluating Expressions that use Features and Attributes
64. 附录
65. 术语表
66. Reference Material
67. Imposition Times of Constraints
68. Mentioned Class Tables
69. Constraint History
70. Change History for AUTOSAR R4.1.1
71. Added Constraints R4.1.1
72. Changed Constraints R4.1.1
73. Deleted Constraints R4.1.1
74. Added Traceables R4.1.1
75. Changed Traceables R4.1.1
76. Deleted Traceables R4.1.1
77. Change History for AUTOSAR R4.2.1 against R4.1.3
78. Added Constraints in 4.2.1
79. Changed Constraints in 4.2.1
80. Deleted Constraints in 4.2.1
81. Added 规范 Items in 4.2.1
82. Changed 规范 Items in 4.2.1
83. Deleted 规范 Items in 4.2.1
84. Change History for AUTOSAR R4.2.2 against R4.2.1
85. Added Constraints in 4.2.2
86. Changed Constraints in 4.2.2
87. Deleted Constraints in 4.2.2
88. Added 规范 Items in 4.2.2
89. Changed 规范 Items in 4.2.2
90. Deleted 规范 Items in 4.2.2
91. Change History for AUTOSAR R4.3.0 against R4.2.2
92. Added Constraints in 4.3.0
93. Changed Constraints in 4.3.0
94. Deleted Constraints in 4.3.0
95. Added 规范 Items in 4.3.0
96. Changed 规范 Items in 4.3.0
97. Deleted 规范 Items in 4.3.0
98. Change History for AUTOSAR R4.3.1 against R4.3.0
99. Added Constraints in 4.3.1
100. Changed Constraints in 4.3.1
101. Deleted Constraints in 4.3.1
102. Added 规范 Items in 4.3.1
103. Changed 规范 Items in 4.3.1
104. Deleted 规范 Items in 4.3.1
105. Change History for AUTOSAR R4.4.0 against R4.3.1
106. Added Constraints in 4.4.0
107. Changed Constraints in 4.4.0
108. Deleted Constraints in 4.4.0
109. Added 规范 Items in 4.4.0
110. Changed 规范 Items in 4.4.0
111. Deleted 规范 Items in 4.4.0
112. Change History for AUTOSAR R19-11 against R4.4.0
113. Added Constraints in 19-11
114. Changed Constraints in 19-11
115. Deleted Constraints in 19-11
116. Added 规范 Items in 19-11
117. Changed 规范 Items in 19-11
118. Deleted 规范 Items in 19-11
119. Change History for AUTOSAR R20-11 against R19-11
120. Added Constraints in R20-11
121. Changed Constraints in R20-11
122. Deleted Constraints in R20-11
123. Added 规范 Items in R20-11
124. Changed 规范 Items in R20-11
125. Deleted 规范 Items in R20-11
126. Change History for AUTOSAR R21-11 against R20-11
127. Added Constraints in R21-11
128. Changed Constraints in R21-11
129. Deleted Constraints in R21-11
130. Added 规范 Items in R21-11
131. Changed 规范 Items in R21-11
132. Deleted 规范 Items in R21-11
133. Change History for AUTOSAR R22-11 against R21-11
134. Added Constraints in R22-11
135. Changed Constraints in R22-11
136. Deleted Constraints in R22-11
137. Added 规范 Items in R22-11
138. Changed 规范 Items in R22-11
139. Deleted 规范 Items in R22-11
140. Change History for AUTOSAR R23-11 against R22-11
141. Added Constraints in R23-11
142. Changed Constraints in R23-11
143. Deleted Constraints in R23-11
144. Added 规范 Items in R23-11
145. Changed 规范 Items in R23-11
146. Deleted 规范 Items in R23-11
147. Change History for AUTOSAR R24-11 against R23-11
148. Added Constraints in R24-11
149. Changed Constraints in R24-11
150. Deleted Constraints in R24-11
151. Added 规范 Items in R24-11
152. Changed 规范 Items in R24-11
153. Deleted 规范 Items in R24-11
154. Change History for AUTOSAR R25-11 against R24-11
155. Added Constraints in R25-11
156. Changed Constraints in R25-11
157. Deleted Constraints in R25-11
158. Added 规范 Items in R25-11
159. Changed 规范 Items in R25-11
160. Deleted 规范 Items in R25-11
161. Change History for AUTOSAR R26-11 against R25-11
162. Added Constraints in R26-11
163. Changed Constraints in R26-11
164. Deleted Constraints in R26-11
165. Added 规范 Items in R26-11
166. Changed 规范 Items in R26-11
167. Deleted 规范 Items in R26-11
