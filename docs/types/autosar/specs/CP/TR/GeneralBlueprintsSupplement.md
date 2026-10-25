# Supplementary material of general blueprints for AUTOSAR (`GeneralBlueprintsSupplement`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | TR — 技术报告（Technical Report） |
| UID | 682 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_TR_GeneralBlueprintsSupplement_682\AUTOSAR_CP_TR_GeneralBlueprintsSupplement.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_TR_GeneralBlueprintsSupplement_682\AUTOSAR_CP_TR_GeneralBlueprintsSupplement.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_TR_GeneralBlueprintsSupplement_682\zzgen\CP_TR_GeneralBlueprintsSupplement.complete.txt`

## 文档简介

This technical report provides additional information to existing blueprints.

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

This technical report provides additional information to existing blueprints.

### 2. 概述通用 Blueprints
*原文标题：Overview General Blueprints*

The General Blueprints are provided in auxiliary package `AUTOSAR_FO_MOD_GeneralBlueprints`. Currently it contains

* `AUTOSAR_MOD_BswDataTypes_Blueprint`
* `AUTOSAR_MOD_BswModuleEntrys_Blueprint`
* `AUTOSAR_MOD_BswServiceDataTypes_Blueprint`
* `AUTOSAR_MOD_BswServiceInterfaces_Blueprint`
* `AUTOSAR_MOD_CommonDataTypes_Blueprint`
* `AUTOSAR_MOD_Cube_SwRecordLayouts_Blueprint`
* `AUTOSAR_MOD_IFL_RecordLayouts_Blueprint`
* `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`
* AUTOSAR_MOD_MemoryMapping_SwAddrMethods_Blueprint
* `AUTOSAR_MOD_PhyiscalDimensions_Blueprint`
* AUTOSAR_MOD_SWCServiceRelatedInterfaces_Blueprint
* `AUTOSAR_MOD_Units_Blueprint`
* `AUTOSAR_MOD_ValBlk_SwRecordLayouts_Blueprint`
* `AUTOSAR_TP_FormulaLanguage_TestCases_Blueprint`

### 3. AUTOSAR_MOD_BSWServiceInterfaces_Blueprint

The `AUTOSAR_MOD_BSWServiceInterfaces_Blueprint` provides for a variety of BSW modules blueprinted specification of their Standardized AUTOSAR Interfaces which consists of ClientServerInterfaces, ModeDeclarationGroups, ModeSwitchInterfaces, SenderReceiverInterfaces and ServiceSwComponentTypes. Inside these blueprints also the BlueprintPolicy is used. A detailed description of the BlueprintPolicy is given in . The ARXML file is generated based on the BSW UML Model.

### 4. AUTOSAR_MOD_BswModuleEntrys_Blueprint

The `AUTOSAR_MOD_BswModuleEntrys_Blueprint` provides blueprints of the BswModuleDescriptions and BswModuleEntrys based on .

### 5. AUTOSAR_MOD_BswServiceDataTypes_Blueprint

The `AUTOSAR_MOD_BswServiceDataTypes_Blueprint` provides blueprints of the DataConstrs, CompuMethods and ImplementationDataTypes for Services based on .

### 6. AUTOSAR_MOD_CommonDataTypes_Blueprint

The `AUTOSAR_MOD_CommonDataTypes_Blueprint` provides blueprints of the BaseTypes, CompuMethods and ImplementationDataTypes for Platform, Standard and General Definitions based on .

### 7. AUTOSAR_MOD_BswDataTypes_Blueprint

The `AUTOSAR_MOD_BswDataTypes_Blueprint` provides blueprints of the DataConstrs, CompuMethods and ImplementationDataTypes for BSW based on .

### 8. AUTOSAR_MOD_IFL_RecordLayouts_Blueprint

The `AUTOSAR_MOD_IFL_RecordLayouts_Blueprint` provides blueprints of the InterpolationRoutineMappingSets and SwRecordLayouts based on .

### 9. AUTOSAR_MOD_IFX_RecordLayouts_Blueprint

The `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint` provides blueprints of the InterpolationRoutineMappingSets and SwRecordLayouts based on .

### 10. AUTOSAR_MOD_Cube_RecordLayouts_Blueprint

The `AUTOSAR_MOD_Cube_RecordLayouts_Blueprint` provides blueprints of SwRecordLayouts for cuboids.

### 11. AUTOSAR_MOD_ValBlk_SwRecordLayouts_Blueprint

The `AUTOSAR_MOD_ValBlk_SwRecordLayouts_Blueprint` provides blueprints of SwRecordLayouts for Value and Valueblocks.

### 12. AUTOSAR_MOD_MemoryMapping_SwAddrMethods_Blueprint

The AUTOSAR_MOD_MemoryMapping_SwAddrMethods_Blueprint provides blueprints of the SwAddrMethods based on .

### 13. AUTOSAR_MOD_SWCServiceRelatedInterfaces_Blueprint

The AUTOSAR_MOD_SWCServiceRelatedInterfaces_Blueprint provides blueprints of the ClientServerInterfaces derived from the Standardized AUTOSAR Interfaces of the NVRAM Manager . Those ClientServerInterfaces are used for NvBlockSwComponentTypes as described in .

### 14. AUTOSAR_MOD_PhyiscalDimensions_Blueprint

The `AUTOSAR_MOD_PhyiscalDimensions_Blueprint` provides a collection of blueprints of Standardized AUTOSAR Physical Dimensions definitions which are used for Unit definitions as, e.g. in `AUTOSAR_MOD_Units_Blueprint`.

### 15. AUTOSAR_MOD_Units_Blueprint

The `AUTOSAR_MOD_Units_Blueprint` provides a collection of blueprints of Standardized AUTOSAR Units definitions which are used, e.g. for interface definitions as described in .

### 16. Predefined Names

The document FO TR PredefinedNames and the blueprint `AUTOSAR_TR_PredefinedNames_Blueprint` were removed in R25-11.

### 17. Composition of Blueprints

The blueprints are composed by different elements which can be applied use case specific. Table  provides an overview of the elements decribed by blueprints.

| BswModuleDescription | BswModuleEntry | ClientServerInterface | ClientServerInterfaceToBswModuleEntryBlueprintMapping | CompuMethod | DataConstr | ImplementationDataType | ModeDeclarationGroup | ModeSwitchInterface | SenderReceiverInterface | ServiceSwComponentType |  |
|---|---|---|---|---|---|---|---|---|---|---|---|
| AUTOSAR_MOD_BswServiceInterfaces_Blueprint |  |  | x |  |  |  |  | x | x | x | x |
| AUTOSAR_MOD_BswModuleEntrys_Blueprint | x | x |  |  |  |  |  |  |  |  |  |
| AUTOSAR_MOD_SWCServiceRelatedInterfaces_Blueprint |  |  | x |  |  |  |  |  |  |  |  |
| AUTOSAR_MOD_BswServiceDataTypes_Blueprint |  |  |  |  | x | x | x |  |  |  |  |
| AUTOSAR_MOD_CommonDataTypes_Blueprint |  |  |  |  | x | x | x |  |  |  |  |
| AUTOSAR_MOD_BswDataTypes_Blueprint |  |  |  |  | x | x | x |  |  |  |  |

### 18. Visualization of SwRecordLayouts

The visualization of the SwRecordLayouts follows a unique representation. The used graphical elements are illustrated in figure .

The logical view represents the definitive elements as number of sampling points, axis elements and data values. The data values are arranged according to the applicable dimension. Curves are visualized one dimensional (e.g. one column, see figure ). Maps are visualized in a two dimensional matrix, see figure ).

The memory representation illustrates the storage of values in linear memory. In case the SwRecordLayout defines also the elements as number of sampling points and axis elements (blue rectangle) the memory representation starts with these. Subsequently the storage of data values follows (orange rectangle). In case the SwRecordLayout does not define the elements as number of sampling points and axis elements the memory representation starts with the storage of data values.

The ARXML representation lists the significant part of the ARXML file describing the SwRecordLayout.

### 19. Distributed 数据 Points
*原文标题：Distributed Data Points*

This chapter describes the record layout for distributed data point search. This means that this SwRecordLayout describes only the number of sampling points and the axis values. It does not describe any values. In this case several curves can used the same axis (distributed data points), see figure .

### 20. Record Layout：Distr
*原文标题：Record Layout: Distr*

### 21. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout Distr. Nx represents the standardized value of SwRecordLayoutV.swRecordLayoutVProp and is documented in . In the scope of this example the value COUNT is used.

### 22. 存储 representation
*原文标题：Memory representation*

Due to the fact that the number of sampling points and the axis values (content of this record layout definition) are not stored in memory without any curve definition no memory representation is defined.

### 23. ARXML representation

Extract of the record layout `Distr_s16` from `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`.arxml.

Different curves can be assigned to one distribution.

Both curves use the same distribution (AXIS 1), e.g. illustrated by the purple-dotted lines (x value 25) with different values (AXIS 0), curve values (y values 65 and 15).

### 24. Curves

### 25. Record Layout：Cur
*原文标题：Record Layout: Cur*

This chapter describes the record layout for a curve.

### 26. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout Cur. The number of sampling points (Nx) and the elements of  are not defined inside this SwRecordLayout. The SwRecordLayoutGroup with the shortLabel Val is shown in the lower part.

### 27. 存储 representation
*原文标题：Memory representation*

The SwRecordLayout Cur illustrated in figure  is stored as follows:

This means that the data is stored in direction of columns (,,, ...).

### 28. ARXML representation

Extract of the record layout `Cur_s16` from `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`.arxml.

### 29. Record Layout：IntCur
*原文标题：Record Layout: IntCur*

This chapter describes the record layout for a curve with integrated data point search. This means that this SwRecordLayout represents a complete curve with number of sampling points, number of axis and values. It describes all elements of the curve.

### 30. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout IntCur. Nx represents the number of sampling points and is given by the standardized value of SwRecordLayoutV.swRecordLayoutVProp. In the scope of this example the value COUNT is used. The SwRecordLayoutGroup with the shortLabel Val is shown in the lower part. Its elements are indexed by  from value (AXIS 1: = 1) to value (AXIS 1: = -1) there -1 gives the last value.

### 31. 存储 representation
*原文标题：Memory representation*

The SwRecordLayout IntCur illustrated in figure  is stored as follows:

This means that the data is stored in direction of columns (,,, ...).

### 32. ARXML representation

Extract of the record layout `IntCur_s16_s8` from `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`.arxml.

### 33. Record Layout：FixIntCur
*原文标题：Record Layout: FixIntCur*

This chapter describes the record layout for a curve with fixed axis points. Fixed axis exist in three categories: `FIX_AXIS_PAR`, `FIX_AXIS_PAR_DIST` and `FIX_AXIS_PAR_LIST`, see  in .

The number of sampling points (Nx), the Offset, the shift and the distance values are represented in the following chapters by these logical views:

These values are not defined inside SwRecordLayouts with fixed axis points.

### 34. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout FixIntCur. The SwRecordLayoutGroup with the shortLabel Val is shown in the lower part. Its elements are indexed by virtual  which is fixed and of category `FIX_AXIS_PAR` and not defined inside this SwRecordLayout.

### 35. 存储 representation
*原文标题：Memory representation*

The SwRecordLayout FixIntCur illustrated in figure  is stored as follows:

This means that the data is stored in direction of columns (,,, ...).

### 36. ARXML representation

Extract of the record layout `FixIntCur_s16_s16` from `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`.arxml.

### 37. Maps

### 38. 定义 of Indexing
*原文标题：Definition of Indexing*

To understand the visualization of SwRecordLayouts it is important to set-up a common understanding of the used indexing. There is the indexing used by matrix definition in linear algebra and by cartesian coordinate systems. In linear algebra a matrix A(m,n) is defined by the row index (m) and the column index (n).

The cartesian coordinate system which is used by AUTOSAR and ASAM assigns AXIS 2 (`AXIS_PTS_Y`) to the row index (m) and AXIS 1 (`AXIS_PTS_X`) to the column index (n). This is the essential point in the transformation from indexing in matrix definition to the representation in cartesian coordinate system. The matrix element a(2,3) in figure  is represented in the cartesian coordinate system in figure  by (AXIS 1) x = 3 and (AXIS 2) y = 2.

Based on this transformation definition the following visualization of SwRecordLayouts shall improve a better common understanding of the provided SwRecordLayouts.

### 39. Transform Logical 视图 in 存储 Representation
*原文标题：Transform Logical View in Memory Representation*

The logical view is represented by m-by-n matrix (two dimensional matrix) as described in .

Each element of a matrix is denoted by an index with two subscripts . For instance,  represents the element at the second row (AXIS 2) and third column (AXIS 1) of a matrix. The index of the matrix can be transformed to the memory representation in two different ways:

* storage of array values in column-major order in linear memory -> `COLUMN_DIR`
* storage of array values in row-major order in linear memory -> `ROW_DIR`

In column-major order, a multidimensional array in linear memory is organized such that columns are stored one after the other. The first element of the first column  is selected and then inside this column all elements will iterate up to the last element [-1,1] (indicated by the red arrow in figure ). The last element is defined in SwRecordLayout by '-1'. Afterwards the first element of the second column  is selected and the iteration starts again as in the first column.

This listing illustrates two nested FOR-loops in case of column-major order whereas the outer loop iterates over AXIS 1 and the inner loop iterates over AXIS 2.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. Record Layout：映射
*原文标题：Record Layout: Map*

This chapter describes the record layout for a map.

### 41. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout Map. The number of sampling points (Nx, Ny) and the elements of  are not defined inside this SwRecordLayout. The SwRecordLayoutGroup with the shortLabel Val is shown in the lower part.

The matrix element a(2,3) in figure  is represented by (AXIS 1) x = 3 and (AXIS 2) y = 2.

### 42. 存储 representation (COLUMN_DIR)
*原文标题：Memory representation (COLUMN_DIR)*

The SwRecordLayout Map illustrated in figure  is stored in case of category `COLUMN_DIR` as follows:

This means that the data is stored first in direction of columns and then in direction of rows (,,, ...).

### 43. ARXML representation

Extract of the record layout `Map_s16` from `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`.arxml.

### 44. Record Layout：IntMap
*原文标题：Record Layout: IntMap*

This chapter describes the record layout for a map with integrated data point search.

### 45. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout IntMap. Nx and Ny represent the number of sampling points given by the standardized values of SwRecordLayoutV.swRecordLayoutVProp. In the following example the dimensions of Nx and Ny are not fixed defined but given by a range indicated by index values. In the scope of this example the value COUNT is used. The SwRecordLayoutGroup with the shortLabel Val is shown in the lower part. Its elements are indexed by  from value (AXIS 2: = 1, AXIS 1: = 1) to value (AXIS 2: = -1, AXIS 1: = -1) there -1 gives the last value.

The matrix element a(2,3) in figure  is represented by (AXIS 1) x = 3 and (AXIS 2) y = 2.

### 46. 存储 representation (COLUMN_DIR)
*原文标题：Memory representation (COLUMN_DIR)*

The SwRecordLayout IntMap illustrated in figure  is stored in case of category `COLUMN_DIR` as follows:

This means that the data is stored first in direction of columns and then in direction of rows (,,, ...).

### 47. ARXML representation

Extract of the record layout `IntMap_s16s16_s16` from `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`.arxml.

### 48. 存储 representation (ROW_DIR)
*原文标题：Memory representation (ROW_DIR)*

The SwRecordLayout IntMap illustrated in figure  is stored in case of category `ROW_DIR` as follows:

This means that the data are stored first in direction of rows and then in direction of columns (,,, ...).

### 49. ARXML representation

Extract of the record layout `IntMap_s8s16_s16` from `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`.arxml.

### 50. Record Layout：IntMap 3 x 4
*原文标题：Record Layout: IntMap 3 x 4*

Non-symmetrical matrices are commonly used and therefore a detailed description of their handling is given here.

The logical view is represented by 3-by-4 matrix (two dimensional matrix). Each element of a matrix is denoted by an index with two subscripts . For instance,  represents the element at the third row (AXIS 2) and second column (AXIS 1) of a matrix.

In case of column-major order transformation the 3 x 4 matrix results in

and in case of row-major order transformation the 3 x 4 matrix results in.

### 51. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout IntMap for the 3 x 4 matrix. Nx and Ny represent the number of sampling points given by the standardized values of SwRecordLayoutV.swRecordLayoutVProp. In the following example the dimensions are of Nx = 4 and Ny = 3. In the scope of this example the value COUNT is used. The SwRecordLayoutGroup with the shortLabel Val is shown in the lower part. Its elements are indexed by  from value (AXIS 2: = 1, AXIS 1: = 1) to value (AXIS 2: = 3, AXIS 1: = 4). AXIS 1 is assigned to Valx and shown above the values. AXIS 2 is assigned to Valy and shown on the left side of the values.

### 52. 存储 representation
*原文标题：Memory representation*

The SwRecordLayout IntMap of 3 x 4 matrix illustrated in figure  is stored in case of category `COLUMN_DIR` as follows:

This means that the data is stored first in direction of columns and then in direction of rows. This means for Valx(1) (,,), for Valx(2) (,,), for Valx(3) (,,) and for Valx(4) (,,).

The SwRecordLayout IntMap of 3 x 4 matrix illustrated in figure  is stored in case of category `ROW_DIR` as follows:

This means that the data is stored first in direction of rows and then in direction of columns. This means for Valy(1) (,,,), for Valy(2) (,,,), for Valy(3) (,,,).

### 53. Record Layout：FixIntMap
*原文标题：Record Layout: FixIntMap*

This chapter describes the record layout for a map with fixed axis points. Fixed axis exist in three categories: `FIX_AXIS_PAR`, `FIX_AXIS_PAR_DIST` and `FIX_AXIS_PAR_LIST`, see  in .

The number of sampling points (Nx, Ny), the Offset, the shift and the distance values are represented in the following chapters by these logical views:

These values are not defined inside SwRecordLayouts with fixed axis points.

### 54. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout FixIntMap. The SwRecordLayoutGroup with the shortLabel Val is shown in the lower part. Its elements are indexed by  from value (AXIS 2: = 1, AXIS 1: = 1) to value (AXIS 2: = -1, AXIS 1: = -1) there -1 gives the last value.

The matrix element a(2,3) in figure  is represented by (AXIS 1) x = 3 and (AXIS 2) y = 2.

### 55. 存储 representation (COLUMN_DIR)
*原文标题：Memory representation (COLUMN_DIR)*

The SwRecordLayout FixIntMap illustrated in figure  is stored in case of category `COLUMN_DIR` as follows:

This means that the data is stored in direction of columns and then in direction of rows (,,, ...).

### 56. ARXML representation

Extract of the record layout `FixIntMap_s16_s16` from `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`.arxml.

The following SwRecordLayouts are not part of `AUTOSAR_MOD_IFX_RecordLayouts_Blueprint`.arxml.

### 57. Multidimensional Arrays

This chapter describes record layouts for multidimensional arrays as cuboids, cube_4 and cube_5.

### 58. 定义 of Indexing
*原文标题：Definition of Indexing*

To define record layouts for arrays with more than two dimensions the same approach is used as for maps described in .

In linear algebra, a 3-dimensional matrix is defined by A(l,m,n). Even though the specifics of symbolic matrix notation varies widely, the subscripts are intentionally defined as follows (see figure ): slice or plane index (l), the row index (m) and the column index (n). The row index (m) and the column index (n) span maps as known from figure . The slice or plane index (l) builds an array of maps defined by the indexes (m,n).

The transformation from indexing in matrix definition to the representation in Cartesian coordinate system is shown in figure .

The (AXIS 1) and (AXIS 2) span a map. The (AXIS 3) builds an array of these maps called slices. Each of these slices will define a three-dimensional Euclidean space which determines every point by three "'coordinates"': (AXIS 1), (AXIS 2) and the value.

It is essential to understand that the (AXIS 3) is not providing the value of the data point. The (AXIS 3) gives the number of the three-dimensional Euclidean spaces in the cuboid.

### 59. Record Layout：Cuboid
*原文标题：Record Layout: Cuboid*

This chapter describes the record layout for a cuboid.

### 60. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout Cuboid. The number of sampling points (Nx, Ny, Nz) are defined by separate SwRecordLayoutVs inside the SwRecordLayout. In the following example the dimensions are of Nx = 5, Ny = 4 and Nz = 2. The elements of  are defined by separate SwRecordLayoutGroups inside the enclosing SwRecordLayoutGroup. The SwRecordLayoutGroup with the shortLabel Val defines the values of the data points and is shown in the lower part.

The first slice (AXIS 3: = 1) is illustrated by the dotted rectangular area named Valz(1), the second slice (AXIS 3: = 2) correspondently named by Valz(2).

### 61. 存储 representation
*原文标题：Memory representation*

The SwRecordLayout Cuboid illustrated in figure  is stored in case of category `COLUMN_DIR` as follows:

This means that the data is stored in direction of columns and then in direction of rows starting with the first slice (,,, ... ,). The second slice starts with (,,, ... ,) and follows the same pattern.

### 62. ARXML representation

The ARXML representation of the record layout `Cuboid_s16s16s16_s16` is given in two parts for illustrative reason. The first part defines the number of sampling points and the elements of axis.

The second part defines the values of the data points. Inside the SwRecordLayoutGroup with the shortLabel Val the definition of memory representation (`COLUMN_DIR` or `ROW_DIR`) has to be unique. This means that memory representation of the map (AXIS 1 and AXIS 2) and those of the slice (AXIS 3) have to be equal. In case of listing  the memory representation `COLUMN_DIR` is defined.

The combination of different base types e.g. a `Cuboid_u8s16u16_u32` are technically possible but not further described in this document.

### 63. Record Layout：Cube_4 and Cube_5
*原文标题：Record Layout: Cube_4 and Cube_5*

This chapter describes the record layouts for Cube_4 and Cube_5. The Cube_4 stores an array of Cuboids with incremented or decremented (AXIS 4). The Cube_5 correspondingly stores an array of `Cube_4s` with incremented or decremented (AXIS 5). In this version of the document only Cube_4 is described.

### 64. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout Cube_4. The number of sampling points (Nx, Ny, Nz1, Nz2) are defined by separate SwRecordLayoutVs inside the SwRecordLayout. In the following example the dimensions are of Nx = 5, Ny = 4, Nz1 = 2 and Nz2 = 3. The elements of  are defined by separate SwRecordLayoutGroups inside the SwRecordLayout. The SwRecordLayoutGroup with the shortLabel Val defines the values of the data points and is shown at the right side.

The first array of cuboids (AXIS 4: = 1) is illustrated by the blue rectangular area named Valz2(1) at the top in figure . It contains the cuboid with the slices Valz1(1) and Valz1(2). The second array of cuboids (AXIS 4: = 2) and the third one (AXIS 4: = 3) are illustrated in the middle and at the bottom in figure . Both contain cuboids with the slices Valz1(1) and Valz1(2). Each element of a matrix is denoted by an index with four subscripts .

### 65. 存储 representation
*原文标题：Memory representation*

The SwRecordLayout Cube_4 illustrated in figure  is stored in case of category `COLUMN_DIR` as follows:

The data values are stored in the following order: starting with the iteration along cuboids Valz2(1), Valz2(2) and Valz2(3). Inside each of these iterations the iteration along slices Valz1(1) and Valz1(2) run. Inside each of these iterations the iteration along the maps is executed as known from . The data values of cuboids Valz2(2) and Valz2(3) are intentionally not completely illustrated in figure .

[
   (select cuboid; loop level 4)
   iteration along cubuids
   (AXIS 4 iterates, AXIS 3, AXIS 2 and AXIS 1 are fixed !)
   start with first cuboid (AXIS 4: = 1)
   [
      (select slice; loop level 3)
      iteration along slices
      (AXIS 3 iterates, AXIS 4, AXIS 2 and AXIS 1 are fixed !)
      start with first slice (AXIS 3: = 1)
      [
         (select row element; loop level 2)
         iteration along row
         (AXIS 1 iterates, AXIS 4, AXIS 3 and AXIS 2 are fixed !)
         start with first row (AXIS 1: = 1)
         [
            (select column element; loop level 1)
            iteration along column
            (AXIS 2 iterates, AXIS 4, AXIS 3 and AXIS 1 are fixe

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 66. ARXML representation

The ARXML representation of the record layout `Cube_4_s16s16s16s16_s16` is given in three parts for illustrative reason. The first part defines the number of sampling points (Nx, Ny, Nz1, Nz2).

The second part defines the elements of axis .

The third part defines the values of the data points. Inside the SwRecordLayoutGroup with the shortLabel Val the nesting of the axis definies the memory representation. In case of listing  the memory representation `COLUMN_DIR` is defined. The (AXIS 2) iterates along the column.

### 67. Value and ValueBlock

### 68. Record Layout：Value
*原文标题：Record Layout: Value*

### 69. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout Value. This SwRecordLayout contains only one value.

### 70. 存储 representation
*原文标题：Memory representation*

The SwRecordLayout Val illustrated in figure  is stored as follows:

### 71. ARXML representation

### 72. Record Layout：One dimensional ValueBlock
*原文标题：Record Layout: One dimensional ValueBlock*

### 73. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout ValueBlock. This SwRecordLayout is an array of values (similar to an axis but without the number of axis points).

### 74. 存储 representation
*原文标题：Memory representation*

The SwRecordLayout ValueBlock illustrated in figure  is stored as follows:

### 75. ARXML representation

### 76. Record Layout：Multi dimensional ValueBlock
*原文标题：Record Layout: Multi dimensional ValueBlock*

In general AUTOSAR and ASAM support multi dimensional ValueBlocks. The following example shows a two dimensional SwRecordLayout. Therefore the `AUTOSAR_MOD_ValBlk_SwRecordLayouts_Blueprint`.arxml contains only blueprints for up to two dimensions.

### 77. 逻辑视图
*原文标题：Logical view*

The figure  illustrates the logical view of the SwRecordLayout Multi dimensional ValueBlock. This SwRecordLayout is an array of values (similar to a map or cuboid but without axis points). N_(i) defines the dimension of the ValueBlock, in this example to i = 2. N_(j) defines the number of values in a dedicated dimension.

### 78. 存储 representation
*原文标题：Memory representation*

The SwRecordLayout Multi dimensional ValueBlock illustrated in figure  is stored as follows:

### 79. ARXML representation

Hint: Comparable with FixIntMap. Due to ASAM the dimension is not limited, the examples in ASAM will represent up to 3 dimension.

### 80. Additional SwRecordLayouts

In this chapter further SwRecordLayout will be described which are not covered by dedicated SWS documents.

Contents will be updated.

### 81. Units and Physical Dimensions

The Units and Physical Dimension are defined accordingly to the description in  and  by , , , , , , , , , , ,  and .

### 82. 附录
*原文标题：Appendix*

### 83. Mentioned Class Tables

For the sake of completeness, this chapter contains a set of class tables representing meta-classes mentioned in the context of this document but which are not contained directly in the scope of describing specific meta-model semantics.

| Class | BaseType (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This abstract meta-class represents the ability to specify a platform dependent base type. | < | < | < |
| Base | ARElement, ARObject, CollectableElement, Identifiable, MultilanguageReferrable, PackageableElement, Referrable | < | < | < |
| Subclasses | SwBaseType | < | < | < |
| Aggregated by | ARPackage.element | < | < | < |
| Attribute | Type | Mult. | Kind | Note |
| baseTypeDefinition | BaseTypeDefinition | 1 | aggr | This is the actual definition of the base type. |

Tags: xml.roleElement=false xml.roleWrapperElement=false xml.sequenceOffset=20 xml.typeElement=false xml.typeWrapperElement=false

| Class | BlueprintPolicy (abstract) | < | < | < |
|---|---|---|---|---|
| Note | This meta-class represents the ability to indicate whether blueprintable elements will be modifiable or not modifiable. |  |  |  |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。
