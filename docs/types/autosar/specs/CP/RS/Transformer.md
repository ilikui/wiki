# Requirements on Transformer (`Transformer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | RS — 需求规范（Requirements Specification） |
| UID | 657 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_RS_Transformer_657\AUTOSAR_CP_RS_Transformer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_RS_Transformer_657\AUTOSAR_CP_RS_Transformer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_RS_Transformer_657\zzgen\CP_RS_Transformer.complete.txt`

## 章节详细内容

### 1. 免责声明
*原文标题：Disclaimer*

### 2. 范围 of this document
*原文标题：Scope of this document*

The goal this document is to define a common set of basic requirements that apply to all Transformers in AUTOSAR.

For the sake of simplicity all requirements on Transformers are maintained in this one document.

The functional requirements defined in this document shall be referenced in each Software Specification (SWS) document of the specific Transformers.

### 3. Document Conventions

The representation of requirements in AUTOSAR documents follows the table specified in , see .

The verbal forms for the expression of obligation specified in  shall be used to indicate requirements, see .

### 4. 缩略语
*原文标题：Acronyms and Abbreviations*

There are no acronyms and abbreviations relevant within this document that are not included in the .

### 5. 需求
*原文标题：Requirements*

### 6. 通用需求 on Transformers
*原文标题：General Requirements on Transformers*

A transformer takes data from the RTE, works on them and returns the output back to the RTE. It can both serialize/linearize data (transform them from a structured into a linear form) and transform (modify or extend linear data) them (e.g add a checksum).

Transformers are BSW modules in the System Service Cluster which provide services to the RTE. The transformers are executed by the RTE when the RTE needs the service which a transformer provides.

A transformer is no library because transformers can hold an internal state but they can work as well stateless.

It is possible to connect a set of transformers together into a transformer chain. The RTE coordinates the execution of the transformer chain and calls the transformers of the chain exactly in the specified order. Using that mechanism, inter-ECU communication is transformed if configured accordingly. This configuration is done in the . The maximum length of a transformer chain is limited to 255 transformers.

The order of transformers configured in the  represents the order on the sending side. The order on the receiving side is the inverse of the sending side.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 7. SOME/IP 转换器需求
*原文标题：SOME/IP Transformer Requirements*

The Scalable service-Oriented MiddlewarE over IP (SOME/IP) Transformer linearizes data with the SOME/IP on-the-wire format and specifies an automotive/embedded RPC mechanism for inter-ECU Client/Server communication.

The basic motivation to specify "yet another RPC-Mechanism" instead of using an existing infrastructure/technology is the goal to have a technology that:

* Fulfills the hard requirements regarding resource consumption in an embedded world
* Is compatible through as many use-cases and communication partners as possible
* Provides the features required by automotive use-cases
* Is scalable from tiny to large platforms
* Can be implemented on different operating system (i.e. AUTOSAR, GENIVI, and OSEK) and even embedded devices without operating system

 The SOME/IP Transformer shall define the serialization of atomic and structured data elements into linear arrays
⌈
| Description: | The SOME/IP Transformer shall define the serialization of atomic and structured data elements into linear arrays. |
|---|---|

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. COM Based 转换器需求
*原文标题：COM Based Transformer Requirements*

The transformer feature provides functionality to chain arbitrary transformers when sending and receiving data in the RTE. This functionality shall also be available when the target bus system uses a fixed communication matrix with packed data representations.

 The COM Based Transformer shall define the serialization of atomic and structured data elements into linear arrays based on a fixed data mapping
⌈
| Description: | The COM Based Transformer shall define the serialization of atomic and structured data elements into linear arrays based on a fixed data mapping. |
|---|---|
| Rationale: | In order to support the interaction with a statically defined communication matrix the COM Based Transformer takes the information how to serialize the data from the fixed data mapping of the System Description. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Inter-ECU Sender/Receiver communication based on fixed communication matrix |
| Supporting Material: | - |

⌋

 The COM Based Transformer shall take its configuration from the COM module
⌈
| Description: | The COM Based Transformer shall take its configuration from the COM module. |
|---|---|
| Rationale: | The COM module already copes with the handling of the communication matrix. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 9. DDS 转换器需求
*原文标题：DDS Transformer Requirements*

The role of the DDS Transformer is to copy input data elements (VariableDataPrototype) and operations (ClientServerOperations) from the application layer into a buffer provided by the RTE. And vice versa, the DDS transformer has to copy received data to data elements of the buffer provided by the application.

All the RTPS  serialization and de-serialization requirements are not part of this specification.

 The DDS Transformer shall define a copy procedure of atomic, structured data elements and operations into a memory buffer
⌈
| Description: | The DDS Transformer shall define a copy procedure of atomic, structured data elements and operations into a memory buffer. |
|---|---|
| Rationale: | An algorithm to copy the data is necessary to enable communication if DDS Transformers of different vendors/implementors are used in the different ECU which communicate with each other. |

Applies To:
| Dependencies: | - |
|---|---|
| Use Case: | Inter-ECU Sender/Receiver communication and Inter-ECU Client/Server communication based on Data Distribution Service |
| Supporting Material: | - |

⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 10. References

### 11. 附录
*原文标题：Appendix*

### 12. Change history of AUTOSAR traceable items

Please note that the lists in this chapter also include traceable items that have been removed from the specification in a later version. These items do not appear as hyperlinks in the document.

### 13. Traceable item history of this document according to AUTOSAR Release R24-11

### 14. Added 需求 in R25-11
*原文标题：Added Requirements in R25-11*

### 15. Changed 需求 in R25-11
*原文标题：Changed Requirements in R25-11*

none

### 16. Deleted 需求 in R25-11
*原文标题：Deleted Requirements in R25-11*

none

### 17. Traceable item history of this document according to AUTOSAR Release R24-11

### 18. Added 需求 in R24-11
*原文标题：Added Requirements in R24-11*

none

### 19. Changed 需求 in R24-11
*原文标题：Changed Requirements in R24-11*

none

### 20. Deleted 需求 in R24-11
*原文标题：Deleted Requirements in R24-11*

none

### 21. Traceable item history of this document according to AUTOSAR Release R23-11

### 22. Added 需求 in R23-11
*原文标题：Added Requirements in R23-11*

none

### 23. Changed 需求 in R23-11
*原文标题：Changed Requirements in R23-11*

none

### 24. Deleted 需求 in R23-11
*原文标题：Deleted Requirements in R23-11*

none
