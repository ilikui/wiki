# Specification of Module E2E Transformer (`E2ETransformer`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | CP |
| 类别 | SWS — 软件模块规范（Software Specification） |
| UID | 650 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\CP_SWS_E2ETransformer_650\AUTOSAR_CP_SWS_E2ETransformer.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\CP_SWS_E2ETransformer_650\AUTOSAR_CP_SWS_E2ETransformer.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\CP_SWS_E2ETransformer_650\zzgen\CP_SWS_E2ETransformer.complete.txt`

## 文档简介

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module E2E transformer.

The E2E transformer encapsulates the complexity of configuring and handling of the E2E protection and it offers a standard transformer interface. Thanks to this the caller of an E2E transformer does not need to know E2E internals.

E2E transformer belongs to the class "Safety", according to  and is based on the specification in the .

The E2E transformer ensures a correct communication of I-signals through QM communication stack. The communication stack is considered as "black channel" communication. If receiving SW-C does not evaluate the return codes of the E2E transformer, then the SW-C might use corrupted data.

The E2E transformer instantiates E2E configuration and E2E state data structures, based on its configuration. The E2E transformer is responsible for the invocation of the E2E Library based on the configuration of a specific data element (I-signal).

There is no data splitting/merging, i.e. one I-signal is NOT made of several data elements and one data element is not made of several I-signals. On the sender side, one data element maps exactly one-to-one to an I-signal. On the receiver side, one-or-more data elements represent the entire received I-signal. There is a fan-out I-signal to one-or-more data elements on receiver side.

The following scenarios are supported:

# On sender side, one data element is serialized to

  # one I-signal and protected with one E2E-protection
  # one or more I-signals placed in one I-PDU, where each I-signal has a different E2E protection. Some I-signals may have no E2E protection at all.
# On receiver side, one I-signal checked

  # Once: resulting with one data element (i.e. no fan-out)
  # Several times: with the same settings, but by independent functions (e.g. by ASIL-independent receiver SW-Cs),
  # Several times: with partially different settings (e.g. same DataID, but different counter tolerances), by different functions, resulting with separate data elements each having possibly different E2E-check result,
  # Several times: with and without E2E-check enabled (e.g. if one receiver is safety-related, and another one is QM and it does not need the results of E2E check).

The E2E transformer is invoked by a SW-C via the RTE API (read, write, send, receive).

## 模块依赖

The E2E Transformer depends on . The E2E Library provides data types and stateless functions. E2E Transformer executes the E2E Library routines passing the configuration and state as function parameters.

## 章节详细内容

### 1. 简介与功能概述
*原文标题：Introduction and functional overview*

This specification specifies the functionality, API and the configuration of the AUTOSAR Basic Software module E2E transformer.

The E2E transformer encapsulates the complexity of configuring and handling of the E2E protection and it offers a standard transformer interface. Thanks to this the caller of an E2E transformer does not need to know E2E internals.

E2E transformer belongs to the class "Safety", according to  and is based on the specification in the .

The E2E transformer ensures a correct communication of I-signals through QM communication stack. The communication stack is considered as "black channel" communication. If receiving SW-C does not evaluate the return codes of the E2E transformer, then the SW-C might use corrupted data.

The E2E transformer instantiates E2E configuration and E2E state data structures, based on its configuration. The E2E transformer is responsible for the invocation of the E2E Library based on the configuration of a specific data element (I-signal).

There is no data splitting/merging, i.e. one I-signal is NOT made of several data elements and one data element is not made of several I-signals.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 2. 缩略语
*原文标题：Acronyms and Abbreviations*

The glossary below includes acronyms and abbreviations relevant to the Communication Management that are not included in the .

| Abbreviation / Acronym: | Description: |
|---|---|
| I-Signal | An item to be serialized to an array of bytes to be E2E protected. For E2E protection I-Signals must be assigned to an I-Signal group. |
| I-Signal group | A set of I-Signals to be E2E protected. E2E protection is defined on the level of I-Signal groups. |
| Data element | Data exchanged between sender and receiver. The E2E transformer maps data elements 1-to-1 to I-signals or I-signal groups. |
| Variant | Transformer variant defined by a configuration of TransformationTechnology and EndToEndTransformationDescription. E2E transformers based on the same variant use the same E2E profile (see constr_03313 in ). |
| TransformationTechnology | TransformationTechnology is a specific class defined in . This class holds general config parameters of a transformer (not only for E2E transformers). |
| EndToEndTransformation-Description | Specific class defined that contains about 30 parameters for E2E configuration (see ). It is referenced by the TransformationTechnology. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 相关文档
*原文标题：Related documentation*

### 4. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 5. 相关规范
*原文标题：Related specification*

AUTOSAR provides a General Specification on Transformers , which is also valid for E2E Transformer.

Thus, the specification  shall be considered as additional and required specification for E2E Transformer.

### 6. 约束与假设
*原文标题：Constraints and assumptions*

### 7. 限制
*原文标题：Limitations*

General limitations regarding E2E protection and the detectable failure modes are described in .

Further, the following limitations are known:

# Error reporting to DEM not yet specified.

### 8. 适用的车型领域
*原文标题：Applicability to car domains*

The E2E Transformer is applicable for safety-related communication.

### 9. 对其他模块的依赖
*原文标题：Dependencies to other modules*

The E2E Transformer depends on . The E2E Library provides data types and stateless functions. E2E Transformer executes the E2E Library routines passing the configuration and state as function parameters.

### 10. Supported 配置 variants
*原文标题：Supported configuration variants*

There are currently no explicit Pre-compile time configuration settings apart from the settings specified in  and .

### 11. 需求追踪
*原文标题：Requirements Tracing*

| Requirement | Description | Satisfied by |
|---|---|---|
| E2E protocol shall provide different E2E profiles |  |  |
| An E2E Transformer shall be provided |  |  |
| All modules of the AUTOSAR Basic Software shall support a tool based configuration |  |  |

### 12. 功能规范
*原文标题：Functional specification*

E2E transformer is responsible for protecting safety-related data elements. On the data providing side E2E transformer E2E-protects the data. On the reception side E2E transformer E2E-checks the data, providing the result of the E2E-checks through RTE to SW-C. E2E transformer on the receipient side is called inverse E2E transformer. E2E transformer is invoked by RTE.

All algorithms are provided by  (protect, check, forward, state machine). E2E transformer invokes E2E Library functions and provides configuration and state to be used.

It is transparent to the communicating SW-Cs whether the data on the bus is E2E protected or not, regardless of whether a receiving SW-C reads the transformer return codes or not.

Each I-signal group to be E2E-protected or E2E-tested requires at least one E2E transformer or inverse E2E transformer function.

E2E transformer is generated to a high extent, where both configuration data structures and functions are generated. The configuration input can be found in  and .

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. Supported RTE functions

Currently, the following inter-ECU communication functions are supported:

# `Rte_Write`/`Rte_Read`
# `Rte_IWrite`/`Rte_IRead`
# `Rte_Send`/`Rte_Receive`
# `Rte_Call`/`Rte_Result`

### 14. Naming for functions and 数据 to be protected by E2E
*原文标题：Naming for functions and data to be protected by E2E*

E2E transformer functions and structures get the suffix <transformerId>.

The pattern <transformerId> is defined in  of  and defines an unique ID for each transformer function.

This name pattern is also used in the names of the E2E transformer's C-APIs and therefore used in the BswModuleEntrys which represent the C-APIs.

### 15. 配置
*原文标题：Configuration*

A transformer configuration contains settings of all parameters used by E2E transformer functions e.g. profile names, tolerance values for E2E checks or dataID mode. For details see .

The following parts form three stages of transformer configuration:

* EndToEndTransformationDescription

  defines the E2E configuration profiles, valid for several ISignals (see  in )
* EndToEndTransformationISignalProps

  defines the configuration options valid for a specific referenced ISignal (see  in )
* EndToEndTransformationComSpecProps

  defines the override configuration options valid for the port to which the ReceiverComSpec belongs (see  in ).

### 16. Precedence of 配置 attributes
*原文标题：Precedence of configuration attributes*

It is possible that there are several software components receiving independently data elements that are created (deserialized) from the same I-PDU. If some software components have adjusted/special configuration values, related to the tolerances of the E2E state machine, e.g. bigger tolerances, attributes of EndToEndTransformationComSpecProps are used.

  Upstream requirements:
⌈
The configuration options in EndToEndTransformationComSpecProps shall have precedence over the options in EndToEndTransformationDescription and EndToEndTransformationISignalProps.
⌋

That means:

Configuration options in EndToEndTransformationComSpecProps override the configuration options in EndToEndTransformationDescription and EndToEndTransformationISignalProps. However the attributes of EndToEndTransformationDescription do not cover all attributes of EndToEndTransformationComSpecProps and vice versa.

### 17. Disable E2E check

If a software component do not need to evaluate the E2E protection, e.g. for QM software components, then the E2E check can be disabled via EndToEndTransformationComSpecProps.disableEndToEndCheck.

  Upstream requirements:
⌈
If configuration option EndToEndTransformationComSpecProps.disableEndToEndCheck is set for a given <transformerId>, then E2E transformer shall skip the invocation of the E2E Library - it shall only perform buffer processing (e.g. copying from inputBuffer to buffer). Return value shall be E_OK.
⌋

### 18. 配置 variants
*原文标题：Configuration variants*

To support multiple post-build-selectable variants, each configuration has a variant identifier.

  Upstream requirements:
⌈
In case of post-build-selectable configuration, the variants shall be named according to the configuration attribute PredefinedVariant.shortName. This means:

<v> = PredefinedVariant.shortName.
⌋

  Upstream requirements:
⌈
In case of link-time configuration, there is just one variant, this means:

<v>= emtpy (NULL string).
⌋

Note that all variants that are based on the same TransformationTechnology use the same E2E profile (e.g. P04).

This also means that all transformers with the same <transformerId> use the same E2E profile.

All variants have the same E2E-protected data elements.

The functions and state-structures are independent on variants <v> - they depend only on the specific instance of the E2E transformer and therefore on the<transformerId>, whereas config-structures depends on instance (<transformerId>) and configuration variant(<v>).

### 19. Generated 结构类型
*原文标题：Generated structure types*

Based on the E2E transformer configuration (described in ,  and the generated ECU configuration ( described in ), the corresponding C structures are generated as described below.

### 20. E2E 转换器的Overall 配置 and 状态
*原文标题：Overall configuration and state of E2E transformer*

Upstream requirements:
⌈
The E2E transformer shall generate the following data structure, to store the configuration of E2E transformer module:

`E2EXf_ConfigStruct_`<v>(of type `E2EXf_ConfigType`)
⌋

  Upstream requirements:
⌈
The E2E transformer shall derive the required number of independent state data resources of types `E2E_PXXProtectStateType`, `E2E_PXXCheckStateType`, and `E2E_SMCheckStateType` to perform E2E Protection within the E2E transformer module from the number of E2E-protected data uniquely identified with <transformerId>, protected by profile PXX.
⌋

### 21. each E2E-protected 数据的配置 and 状态
*原文标题：Configuration and state of each E2E-protected data*

Upstream requirements:
⌈
The E2E transformer shall derive the required number of independent statically initialized configuration objects of types `E2E_PXXConfigType`, `E2E_SMConfigType` and (if required) additional information (e.g. the Source ID on client side for profiles P04m, P07m, P08m, P44m) to perform E2E Protection within the E2E transformer, from:

# the number of E2E-protected data uniquely identified with <transformerId>, protected by profile PXX, and
# the number of configuration variants (post-build selectable only).
⌋

### 22. Static 初始化
*原文标题：Static initialization*

### 23. Static 初始化 of config
*原文标题：Static initialization of config*

Configuration is statically initialized based on the following metamodel classes:

# EndToEndTransformationDescription: definition of E2E variants
# EndToEndTransformationISignalProps: definition of a specific protection for a given ISignal (e.g. length, DataID)
# EndToEndTransformationComSpecProps: override of some settings defining the check tolerances, with respect to E2E variants.

  Upstream requirements:
⌈
The generated configuration object of type `E2E_P01ConfigType` shall be initialized according to the following:

* DataID = EndToEndTransformationISignalProps.dataID
* DataLength = EndToEndTransformationISignalProps.dataLength
* CounterOffset = EndToEndTransformationDescription.counterOffset
* CRCOffset = EndToEndTransformationDescription.crcOffset
* DataIDNibbleOffset = EndToEndTransformationDescription.dataIdNibbleOffset
* DataIDMode shall be set to

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 24. 状态的Static 初始化
*原文标题：Static Initialization of state*

Contrary to config structures, state structures do not depend on variants (<v>).

  Upstream requirements:
⌈
In all E2E transformer variants, the generated state objects may be left uninitialized (i.e. without providing explicit initialization values).
⌋

### 25. Runtime 初始化 by E2EXf_Init() 功能
*原文标题：Runtime initialization by E2EXf_Init() function*

### 26. Runtime selection of 配置 (post-build variant only)
*原文标题：Runtime selection of configuration (post-build variant only)*

Upstream requirements:
⌈
In post-build-selectable variant, `E2EXf_Init`() shall check that Config pointer (received as function parameter) points to one of the configuration variants `E2EXf_ConfigStruct_`<v>.If this is the case, then `E2EXf_Init`() shall select the passed configuration variant, and it shall set the module initialization state to TRUE according to `SWS_E2EXf_00130`.
⌋

### 27. 状态的Runtime 初始化
*原文标题：Runtime initialization of State*

Upstream requirements:
⌈
The `E2EXf_Init`() function shall initialize the following external state data resources managed by E2E transformer (see `SWS_E2EXf_00125`) as follows:

* Initialization of state data resources of type `E2E_PXXProtectStateType` by calling corresponding `E2E_PXXProtectInit`() methods,
* Initialization of state data resources of type `E2E_PXXCheckStateType` by calling corresponding `E2E_PXXCheckInit`() methods,
* Initialization of state data resources of type `E2E_SMCheckStateType` by calling corresponding `E2E_SMCheckInit`() methods.
⌋

  Upstream requirements:
⌈
The `E2EXf_Init`() function shall initialize the internal state data resources of E2E functions forward, protect check and state machine of E2E transformer.
⌋

  Upstream requirements:
⌈
In case of post-build configuration, `E2EXf_Init`() function shall initialize the E2E transformer for a driving cycle.
⌋

  Upstream requirements:
⌈
The E2E transformer shall maintain a boolean information (Initialization state) that is only set to TRUE, if the module has been successfully initialized via a call to `E2EXf_Init`(). Otherwise, it is set to FALSE.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 28. Normal operation

Upstream requirements:
⌈
If the E2E transformer has not been correctly initialized (which means that `E2EXf_Init`() was not successfully called before), then all generated E2E transformer APIs shall return E_SAFETY_HARD_RUNTIMEERROR.
⌋

### 29. In-place processing and out-of-place processing

E2E transformer functions work using in-place processing or out-of-place processing. This is configured by binary setting BufferProperties.inPlace.

In-place processing means that one buffer is used by a transformer both as input and as output. In-place processing has a performance advantage (less copying, less buffers).

Out-of-place processing means that separate buffer, one input buffer and a separate output buffer, are used.

### 30. 转换器 pairing and 数据 exchange
*原文标题：Transformer pairing and data exchange*

A transformer is called by Rte and return results and data are returned to Rte. Following the definition in  transformers should not communicate with others than the Rte.

On the communication path 2 different transformers of the same kind are used a primary transformer on the protecting side and a secondary or inverse transformer on the checking side. In case of E2E is used in client/server communication to protect methods some data have to be exchanged between this pair of E2E transformers (i.e., between the primary transformer (E2EXf_<transformerId>()) and the corresponding secondary (inverse) transformer (`E2EXf_Inv_`<transformerId>()). While exchanging data via the Rte would be possible, doing so would introduce additional complexity (which is a drawback w.r.t. safety argumentation) and expose information to the Rte which actually is local and private to the E2EXf implementation (which is a drawback w.r.t. information hiding). Thus, this required exchange of information will be handled locally within the E2EXf implementation. The prerequiste for this is a safe implementation for this kind of data exchange e.g.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. 转换器 and E2E protection
*原文标题：Transformer and E2E protection*

E2E transformer invokes E2E Library protect() function via API E2EXf_<transformerId>(protect-function). This way configuration data and data to be E2E protected are provided to E2E Library functions.

Depending on the type of communication, the flow of E2EXf_<transformerId>() varies.

A general overview of this function is provided in . Details on specific parts are provided in  to . Communication type specific parts are coloured as described in .

  Upstream requirements:
⌈
The function E2EXf_<transformerId> shall be generated for each sent E2E-protected data element and each protected C/S operation (<transformerId>).
⌋

The following figure provides an activity diagram of the functionality provided by the API function E2EXf_<transformerId>.

Details on

* `E2EXf_input_checks`
* `E2EXf_handling_P01_P02`
* `E2EXf_handling_buffer_and_header`
* `E2EXf_handling_specific_protection`

  * `E2EXf_handling_PXXm_server`
  * `E2EXf_set_response_counter`
  * `E2EXf_handling_PXXm_client`
  * `E2EXf_store_request_counter`
* `E2EXf_data_transformation`

are provided in the following subchapters.

### 32. E2EXf_<transformerId> 概述
*原文标题：E2EXf_<transformerId> overview*

### 33. E2EXf_input_checks

`E2EXf_input_checks` performs some checks on input variables (e.g. buffer sizes, pointers) and returns the result as shown in the following figure.

  Upstream requirements:
⌈
In-place E2EXf_<transformerId> shall perform the following two precondition checks, without continuing further processing:

# (buffer == NULL)

  ||

  (buffer != NULL && inputBufferLength < EndToEndTransformationDescription.upperHeaderBitsToShift/8u)
# bufferLength == NULL.

If any of above conditions is TRUE, then the function shall return E_SAFETY_HARD_RUNTIMEERROR.
⌋

  Upstream requirements:
⌈
Out-of-place E2EXf_<transformerId> shall perform the following three precondition checks, without continuing further processing:

# (inputBuffer == NULL)

  ||

  (inputBuffer != NULL && inputBufferLength < EndToEndTransformationDescription.upperHeaderBitsToShift/8u)
# bufferLength == NULL
# buffer == NULL

If any of above conditions is TRUE, then the function shall return E_SAFETY_HARD_RUNTIMEERROR.
⌋

### 34. E2EXf_input_checks_PXXm

For method specific E2E profiles additional checks as shown in the following figure are to be applied.

Note that the function E2EXf_<transformerId> can be realized by a plain function or a macro (implementation-specific). The functions E2EXf_<transformerId> may call some internal common functions.

  Upstream requirements:
⌈
For profiles P04m, P07m, P08m and P44m both the in-place and the out-of-place E2EXf_<transformerId> shall perform the following additional precondition checks, without continuing further processing:

# extractProtocolHeaderFields == NULL

If any of above conditions is TRUE, then the function shall return E_SAFETY_HARD_RUNTIMEERROR.
⌋

### 35. E2EXf_handling_P01_P02

E2E transformer implements a specific handling of legacy profiles P01 and P02, as Library functions of these profiles were developed before the transformer approach was introduced into AUTOSAR and therefore provide different APIs. The handling of P01 and P02 is shown in the following figure.

  Upstream requirements:
⌈
For PXX = 01 or 02, the function E2EXf_<transformerId>() shall perform a check of the *bufferLength (after the computation of *bufferLength):

If (*bufferLength != config->DataLength/8), then the function shall return E_SAFETY_HARD_RUNTIMEERROR, i.e. without calling an E2E Library function.
⌋

  Status: DRAFT
  Upstream requirements:
⌈
| If (((PXX = 01 &&dataIDMode != nibble) |  | (PXX == 02) |  | (PXX = 11 &&dataIDMode != nibble) |  | (PXX == 22)) && BufferProperties.headerLength == 16 ), the function E2EXf_<transformerId>() shall, before calling E2E_PXXProtect() or E2E_PXXForward(), set 0xF in buffer at the bit offset (EndToEndTransformationDescription.crcOffset+12 for profiles P01 and P11 and EndToEndTransformationDescription.offset+12 for profiles P02 and P22). |
|---|---|---|---|---|---|---|

⌋

### 36. E2EXf 处理 buffer and header
*原文标题：E2EXf Handling buffer and header*

E2E transformer can be configured for the usage of in-place or out-of-place buffer. Both kinds of buffer handling and their implication for header handling are described in the following.

  Upstream requirements:
⌈
If (EndToEndTransformationDescription.upperHeaderBitsToShift > 0), in-place E2EXf_<transformerId> shall copy the amount upper HeaderBitsToShiftbits, in parameter buffer, with starting offset of BufferProperties.headerLength, in direction left by "distance" of BufferProperties.headerLength.
⌋

 illustrates the buffer handling done by API function E2EXf_<transformerId>for In-Place.

  Upstream requirements:
⌈
If (EndToEndTransformationDescription.upperHeaderBitsToShift > 0), out-of-place E2EXf_<transformerId> shall copy the first upper HeaderBitsToShiftbits from inputBuffer to buffer, and then copy the remaining part of inputBuffer (i.e. starting with offset upperHeaderBitsToShift) to parameter buffer starting with the destination offset of (upperHeaderBitsToShift+ BufferProperties.headerLength).
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 37. E2EXf_handling_specific_protection

The specific protection describes different activities depending on different communication types (see introduction of ).

For client/server communication a number of extras need to be considered. In order to perform the E2E check on the response message, the inverse E2E transformer (`E2EXf_Inv_`<transformerId>()) needs the value of E2E counter and E2E sourceID provided in the request message e2e header. Therefore, the primary E2E transformer (E2EXf_<transformerId>()), which protects the request message, stores this E2E counter and the E2E sourceID in a safe way at a memory location which can be read by the inverse E2E inverse transformer.

### 38. E2EXf_handling_PXXm_server

E2E transformer implements a specific handling of method profiles PXXm, as Library functions require additional parameters and therefore provide different APIs. The protection of PXXm profiles on server side is shown in the following figure.

  Upstream requirements:
⌈
For profiles P04m, P07m, P08m and P44m the in-place E2EXf_<transformerId> on the server-side shall call the extractProtocolHeaderFields() function passing the buffer, the bufferLength, the address of local messageType variable, and the address of a local messageResult variable as parameters.
⌋

  Upstream requirements:
⌈
For profiles P04m, P07m, P08m and P44m the out-of-place E2EXf_<transformerId> on the server-side shall call the extractProtocolHeaderFields() function passing the inputBuffer, the inputBufferLength, the address of local messageType variable, and the address of a local messageResult variable as parameters.
⌋

  Upstream requirements:
⌈
If extractProtocolHeaderFields() returns something different from E_OK, E2EXf_<transformerId> shall return E_SAFETY_HARD_RUNTIMEERROR.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. E2EXf_set_response_counter

The message counter of a response message shall be the same as the counter of the corresponding request message. Therefore, the stored receivedRequestCounter is used as an input to the protect function. The response counter (state->Counter) is set profile dependend as shown in the following figure. In case of profile 02 or 22 the receivedRequestCounter needs to be decremented since protect() and forward() functions of these profiles increment the counter prior to adding it to the message.

  Upstream requirements:
⌈
If E2E-Transformer is used for a response in a Client-Server Communication and Profile is P02 or P22 the variable state->Counter shall be set to shCopiedRequestE2ECounter - 1.
⌋

Note: Using receivedRequestCounter-1 for Profiles P02 and P22 is motivated by the fact that the Protect() and Forward() functions of this profile increment the counter prior to adding it to the message/including it in the CRC calculation.

  Upstream requirements:
⌈
If E2E-Transformer is used in a Client-Server Communication and Profile is P01, P04, P04m, P05, P06, P07, P07m, P08, P08m, P11, P44 or P44m the variable state->Counter shall be set to shCopiedRequestE2ECounter.
⌋

### 40. E2EXf_handling_PXXm_client

E2E transformer implements a specific handling of method profiles PXXm, as library functions require additional parameters and therefore provide different APIs. The protection of PXXm profiles on client side is shown in the following figure.

  Upstream requirements:
⌈
For profiles P04m, P07m, P08m and P44m the in-place E2EXf_<transformerId> on the client-side shall call the extractProtocolHeaderFields() function passing the buffer, the bufferLength, the address of local messageType variable, and the address of a local messageResult variable as parameters.
⌋

  Upstream requirements:
⌈
For profiles P04m, P07m, P08m and P44m the out-of-place E2EXf_<transformerId> on the client-side shall call the extractProtocolHeaderFields() function passing the inputBuffer, the inputBufferLength, the address of a local variable named messageType, and the address of a local variable named messageResult as parameters.
⌋

  Upstream requirements:
⌈
If extractProtocolHeaderFields() returns something different from E_OK, E2EXf_<transformerId> shall return E_SAFETY_HARD_RUNTIMEERROR.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 41. E2EXf_store_request_counter

The message counter of a response message shall be the same as the counter of the corresponding request message. Therefore, the requestCounter is stored and used as an input to the check function. The response counter(state-Counter) is stored profile depended as shown in the following figure.

The check function needs to access the E2E counter value of the request in order to compare it to the E2E counter value of the response from the server. If the E2E counters do not match an error occurred at the server.

The requestE2E-counter is stored profile depended as shown in the following figure.

  Upstream requirements:
⌈
If E2EXf_<transformerId> is used in a Client-Server Communication on the client-side and Profile is P02 or P22, state->Counter shall be stored to shExpectedResponseE2ECounter to be accessed by `E2EXf_Inv_`<transformerId> for checking the response.
⌋

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 42. E2EXf 数据 Transformation
*原文标题：E2EXf Data Transformation*

E2E transformer implements a specific handling for signal to service translation or vise versa. The forwarding() function replaces the protect() function to forward the result of an E2E check() in a new E2E protected message.

  Status: DRAFT
  Upstream requirements:
⌈
If DataTransformationStatusForwarding is set to noTransformerStatusForwarding and PXX is P01 ,P02 ,P04 ,P05 ,P06 ,P07 ,P08 ,P11 ,P22 or P44, the function E2EXf_<transformerId>() shall invoke `E2E_PXXProtect`(), passing to that function the appropriate Config and State structures (see  and ) that are associated with <transformerId>, as well as buffer and bufferLength (only for P04, P05, P06, P07, P08 ,P11 ,P22 and P44) that were updated in above requirements , , , .
⌋

  Upstream requirements:
⌈
If DataTransformationStatusForwarding is set to noTransformerStatusForwarding and PXX = P04m, P07m, P08m or P44m the function E2EXf_<transformerId>() shall invoke `E2E_PXXProtect`(), passing to that function:

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 43. E2EXf_MapCodeToStatus

The function `E2EXf_MapCodeToStatus`() maps the forwardedCode of type `Std_TransformerForwardCode` from `Rte_Write` (, `Rte_Send` (), `Rte_IWrite` () and `Rte_IWriteRef` () to a generic check status of type `E2E_PCheckStatusType`, which can be used by `E2E_PXXForward`() function.

  Upstream requirements:
⌈
| forwardedCode | CheckStatus |
|---|---|
| STD_E_FORWARDEDCODE_OK | E2E_P_OK |
| STD_E_FORWARDEDCODE_STATUS_REP | E2E_P_REPEATED |
| STD_E_FORWARDEDCODE_STATUS_SEQ | E2E_P_WRONGSEQUENCE |
| STD_E_FORWARDEDCODE_STATUS_ERR | E2E_P_ERROR |

⌋

### 44. 转换器 and E2E check
*原文标题：Transformer and E2E check*

E2E transformer invokes E2E Library check() function via API E2EXf_<transformerId>(check-function). This way configuration data and data to be E2E protected are provided to E2E Library function's. Depending on the type of communication present, the flow of E2EXf_<transformerId>() varies. A general overview of this function is provided in . Details on specific parts are provided in  to  Communication type specifc parts are coloured as described in .

### 45. E2EXf_Inv_<transformerId> 概述
*原文标题：E2EXf_Inv_<transformerId> overview*

Upstream requirements:
⌈
The function `E2EXf_Inv_`<transformerId> shall be generated for each received E2E-protected data element and each protected C/S operation (<transformerId>).
⌋

The following figure provides an activity diagram of the functionality provided by the API function `E2EXf_Inv_`<transformerId>.

Details on

* `E2EXf_Inv_input_checks`
* `E2EXf_Inv_handling_P01_P02`
* `E2EXf_Inv_handling_main_check`
* E2EXf_Inv_handling_P01_P02_forceConstantMaxDeltaCounter
* `E2EXf_Inv_handle_Statemachine`

are provided in the following subchapters.

Depending on the configuration of the E2EXf regarding buffer operations (in-place and out-of-place), a valid pointer to the output buffer with length parameter too small, may result in a soft or hard error, depending on E2EXf configuration and actual given length. In this case the following values shall be returned:

| Condition | Return Value | Description |
|---|---|---|
| Valid pointer to the output buffer, but the length of the buffer is too small to perform the buffer operations. | E_SAFETY_HARD_RUNTIMEERROR | cannot perform header copy operation, leaving buffer with invalid data according to configuration. Hard runtime error must be returned. |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 68 章（内容从略，见纯文本全文）

46. E2EXf_Inv_input_checks
47. E2EXf_Inv_input_checks_PXXm
48. E2EXf_Inv_handling_P01_P02
49. E2EXf_Inv_handling_main_check
50. E2EXf_Inv_handling_PXXm_client
51. E2EXf_Inv_PXXCheck_client
52. E2EXf_Inv_handling_PXXm_server_pre_check
53. E2EXf_Inv_extract_E2E_header_info
54. E2EXf_Inv_PXXCheck_server
55. E2EXf_Inv_Handling_PXXm_server_post_check
56. E2EXf_Inv_handling_P01_P02_forceConstantMaxDeltaCounter
57. E2EXf_Inv_handle_Statemachine
58. De-Initialization
59. 错误分类
60. Development 错误
61. Runtime 错误
62. Production 错误
63. Extended Production 错误
64. API 规范
65. Imported 类型
66. 类型定义
67. E2EXf_ConfigType
68. 功能定义
69. E2EXf_<transformerId>
70. E2EXf_Inv_<transformerId>
71. E2EXf_Init
72. E2EXf_DeInit
73. Callback 通知
74. Scheduled functions
75. Expected 接口
76. Mandatory 接口
77. Optional 接口
78. Configurable 接口
79. 时序图
80. E2E for Sender/Receiver
81. Send E2E protected signals
82. Receive E2E protected signals (Activation 模式)
83. Receive E2E protected signals (Polling 模式)
84. E2E for Events
85. Send an E2E Protected Event
86. Receive an E2E Protected Event(Activation 模式)
87. Receive an E2E Protected Event(Polling 模式)
88. E2E for Method Call/Method Response
89. Call an E2E Protected Method
90. Receive and respond to an E2E Protected Method Call
91. Receive a E2E Protected Response to a Method Call
92. E2E in Signal to 服务 Translation
93. 配置规范
94. 附录
95. 不适用需求
96. Change history of AUTOSAR traceable items
97. Traceable item history of this document according to AUTOSAR Release R22-11
98. Traceable item history of this document according to AUTOSAR Release R23-11
99. Added 规范 Items in R23-11
100. Changed 规范 Items in R23-11
101. Deleted 规范 Items in R23-11
102. Traceable item history of this document according to AUTOSAR Release R24-11
103. Added 规范 Items in R24-11
104. Changed 规范 Items in R24-11
105. Deleted 规范 Items in R24-11
106. Traceable item history of this document according to AUTOSAR Release R25-11
107. Added 规范 Items in R25-11
108. Changed 规范 Items in R25-11
109. Deleted 规范 Items in R25-11
110. Traceable item history of this document according to AUTOSAR Release R26-11
111. Added 规范 Items in R26-11
112. Changed 规范 Items in R26-11
113. Deleted 规范 Items in R26-11
