# Explanation of ara::com API (`ARAComAPI`)

> [返回本类索引](index.md)

| 属性     | 值                              |
| -------- | ------------------------------- |
| 平台     | AP                              |
| 类别     | EXP — 解释性指南（Explanation） |
| UID      | 846                             |
| 规范版本 | R25-11                          |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\AP_EXP_ARAComAPI_846\AUTOSAR_AP_EXP_ARAComAPI.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\AP_EXP_ARAComAPI_846\AUTOSAR_AP_EXP_ARAComAPI.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\AP_EXP_ARAComAPI_846\zzgen\AP_EXP_ARAComAPI.complete.txt`

## 文档简介

Typically, reading formal specifications isn't the easiest way to learn and understand a certain technology. This especially holds true for the Communication Management API (ara::com) in the AUTOSAR Adaptive Platform.

Therefore this document shall serve as an entry point not only for the developer of software components for the Adaptive Platform, who will use the ara::com API to interact with other application or service components, but also for Adaptive Platform product vendors, who are going to implement an optimizedIPCbinding for the ara::com API on their platform.

We strongly encourage both groups of readers to read this document at hand before going into the formal details of the related SWS.

## 章节详细内容

### 1. Preface

Typically, reading formal specifications isn't the easiest way to learn and understand a certain technology. This especially holds true for the Communication Management API (ara::com) in the AUTOSAR Adaptive Platform.

Therefore this document shall serve as an entry point not only for the developer of software components for the Adaptive Platform, who will use the ara::com API to interact with other application or service components, but also for Adaptive Platform product vendors, who are going to implement an optimizedIPCbinding for the ara::com API on their platform.

We strongly encourage both groups of readers to read this document at hand before going into the formal details of the related SWS.

### 2. 缩略语

_原文标题：Acronyms and Abbreviations_

The glossary below includes acronyms and abbreviations relevant to the explanation of ara::com API that are not included in the AUTOSAR Glossary .

| Abbreviation / Acronym: | Description:                                                                                                                                                            |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ara::com                | C++ namespace of functional cluster Communication Management                                                                                                            |
| ctor                    | C++ constructor                                                                                                                                                         |
| dtor                    | C++ destructor                                                                                                                                                          |
| std::future             | C++ std::future provides a mechanism to access the result of asynchronous operations                                                                                    |
| std::promise            | C++ std::promise provides a facility to store a value or an exception that is later acquired asynchronously via a std::future object created by the std::promise object |
| Error                   | Recoverable Errors according to of . Defined for ara::com functions using ara::core::ErrorCodes, e.g.                                                                   |

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 3. 简介

_原文标题：Introduction_

### 4. Approach

Why did AUTOSAR invent yet another communication middleware API/technology, while there are dozens on the market - the more so as one of the guidelines of Adaptive Platform was to reuse existing and field proven technology?

Before coming up with a new middleware design, we did evaluate existing technologies, which - at first glance - seemed to be valid candidates. Among those were:

- ROS API
- DDS API
- CommonAPI (GENIVI)
- DADDY API (Bosch)

The final decision to come up with a new and AUTOSAR-specific Communication Management API was made due to the fact, that not all of our key requirements were met by existing solutions:

- We need a Communication Management, which is NOT bound to a concrete network communication protocol. It has to support the SOME/IP protocol but there has to be flexibility to exchange that.
- The AUTOSAR service model, which defines services as a collection of provided methods, events and fields shall be supported naturally/straight forward.
- The API shall support an event-driven and a polling model to get access to communicated data equally well.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 5. API 设计 Visions and 指南

_原文标题：API Design Visions and Guidelines_

One goal of the API design was to have it as lean as possible. Meaning, that it should only provide the minimal set of functionality needed to support the service based communication paradigm consisting of the basic mechanisms: methods, events and fields.

Our definition of the notion "as lean as possible" in this context means: Essentially the API shall only deal with the functionality to handle method, field and event communication on service consumer and service provider implementation side.

If we decided to provide a bit more than just that, then the reason generally was "If solving a certain communication-related problem ABOVE our API could not be done efficiently, we provide the solution as part of ara::com API layer."

Consequently, ara::com does not provide any kind of component model or framework, which would take care of things like component life cycle, management of program flow or simply setting up ara::com API objects according to the formal component description of the respective application.

All this could be easily built on top of the basic ara::com API and needs not be standardized to support typical collaboration models.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 6. Fundamentals

### 7. Proxy/Skeleton 架构

_原文标题：Proxy/Skeleton Architecture_

If you've ever had contact with middleware technology from a programmer's perspective, then the approach of a Proxy/Skeleton architecture might be well known to you.

Looking at the number of middleware technologies using the Proxy/Skeleton (sometimes even called Stub/Skeleton) paradigm, it is reasonable to call it the "classic approach".

So with ara::com we also decided to use this classical Proxy/Skeleton architectural pattern and also name it accordingly.

The basic idea of this pattern is, that from a formal service definition two code artifacts are generated:

- Service Proxy: This code is - from the perspective of the service consumer, which wants to use a possibly remote service - the facade that represents this service on code level.

  In an object-oriented language binding, this typically is an instance of a generated class, which provides methods for all functionalities the service provides. So the service consumer side application code interacts with this local facade, which then knows how to propagate these calls to the remote service implementation and back.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 8. Means of Communication

Now, that we've talked about the Proxy/Skeleton Architecture, let us continue to talk about how to communicate between proxies and skeletons.

ara::com defines four different mechanisms to communicate between a server and a client

- Methods
- Events
- Fields
- Triggers

Before any of these mechanisms can be used, a service must be instantiated and the server must offer itself to the system (OfferService()). Then a client needs to find and connect to the service instance using the Proxy (FindService() or StartFindService() ).

### 9. ara：：com Event and Trigger based communication

_原文标题：ara::com Event and Trigger based communication_

When a client application has connected to a server, it can subscribe (Subscribe()) to events in the service that is offered by the server, as described in figure .

When data is available for an event, the server application sends the event data to communication management middleware, that notifies all subscribing client applications. The subscribers can then fetch the event samples, using GetNewSamples(), either directly or via a callback (defined by SetReceiveHandler()) that is triggered by the notification.

Triggers are used by the server to notify when a specific condition occurs. It does not transfer any data. It uses the same subscription and notification mechanisms as events.

### 10. ara：：com Method based communication

_原文标题：ara::com Method based communication_

With method based communication a client application calls a method that is executed on the remote server. This is shown in figure . The method may, or may not return a value to the client. If a return value is provided, the ara::core::Future and ara::core::Promise pattern is used to give a possibility of a non-blocking behavior for the communication. See chapter for details.

The server can be configured for different processing modes of method invocations. The options are

- Event-driven, concurrent (kEvent): Incoming service method calls are processed in an event based manner.
- Event-driven, sequential (kEventSingleThread): Same as kEvent on single thread basis.
- Polling (KPoll): Incoming service method calls need to be explicitly processed in polling manner by calling ProcessNextMethodCall.

### 11. ara：：com Field based communication

_原文标题：ara::com Field based communication_

With field based communication a server can provide a value for some data that a client can access or update at any time. The functionality of a field can be viewed as a combination of event and methods:

- Like an event the client can subscribe to changes of the value. The client will be notified using the same notification mechanisms as for events (defined by SetReceiveHandler()).
- Using methods, the client can retrieve the value by calling a get-operation (Get()), or update the value by calling a set-operation for the field in the proxy (Set()).

On the server side, the field is handled in the skeleton implementation by

- Defining a callback that is called when the value is updated by a client (defined by RegisterSetHandler()).
- Calling an update-method when a new value shall be published to the clients (Update()).

### 12. 数据类型 Abstractions

_原文标题：Data Type Abstractions_

ara::com API introduces specific data types, which are used throughout its various interfaces. They can roughly be divided into the following classes:

- Pointer types: for pointers to data transmitted via middleware
- Collection types: for collections of data transmitted via middleware.
- Types for async operation result management: ara::com relies on AUTOSAR AP specific data types (see ), which are specific versions of C++ std::future/std::promise
- Function wrappers: for various application side callback or handler functions to be called by the middleware

ara::com defines signature and expected behavior of those types, but does not provide an implementation. The idea of this approach is, that platform vendors could easily come up with their own optimized implementation of those types.

This is obvious for collection and pointer types as one of the major jobs of an IPC implementation has to deal with memory allocation for the data which is exchanged between middleware users.

Being able to provide their own implementations allows to optimize for their chosen memory model.

For most of the types ara::com provides a default mapping to existing C++ types in ara/com/types.h.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 13. 错误处理

_原文标题：Error Handling_

ara::com API follows the concepts of error handling described in chapter "Error handling" in . Recoverable Errors will be returned via an ara::core::ErrorCode embedded into a ara::core::Result, which either holds a valid return value or the ara::core::ErrorCode.

For each function in the ara::com API a set of predefined ara::core::ErrorCodes from the error domain ara::com::ComErrorDomain, (or from ara::com::e2e::E2EErrorDomain for E2E checks) are defined. These errors should be handled by the application that is using the API. Besides these a stack vendor may also define additional error codes, that might need to be handles as well.

Application Errors within ara::com API can only occur in the context of a call of a SI method and is therefore fully covered in subsection and subsection .

Exceptions in the ara::com API are only used in case of Violations or Corruptions. These are non-recoverable and should normally not be handled by the application developer.

### 14. 服务 Connection Approach

_原文标题：Service Connection Approach_

### 15. Instance Identifiers and Instance Specifiers

Instance identifiers, which get used at proxy and as well at skeleton side, are such a central concept, that their explanation is drawn here - before the detailed description of ara::com proxies and skeletons in upcoming chapters.

Instance identifiers are used within ara::com, on client/proxy side, when a specific instance of a service shall be searched for or - at the server/skeleton side - when a specific instance of a service is created.

At ara::com API level the instance identifier is generally a technical binding specific identifier.

Therefore the concrete content/structure of which such an instance identifier consists, is totally technology specific: So f.i. SOME/IP is using 16 bit unsigned integer identifiers to distinguish different instances of the same service type, while DDS (DDS-RPC) uses string<256> as service_instance_name.

Independant of the binding technology the abstract facade of any concrete instance identifier shall apply to this signature at ara::com API level in namespace ara::com:

As you can see the instance identifier interface ara::com::InstanceIdentifier provides a ctor taking a string, which means it can be constructed from a string representation.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 16. When to use InstanceIdentifier versus InstanceSpecifier

According to the previous explanations, the impression may have arisen that a software developer always has to resolve ara::core::InstanceSpecifier to ara::com::InstanceIdentifier manually (by a call to ResolveInstanceIDs()) first, before using ara::com APIs, which need instance identifier information.

This would be indeed a bit awkward as we already mentioned, that the "typical" approach for a software developer, which implements an Adaptive AUTOSAR SWC, is to use abstract "instance specifiers" from the realm of the software component model.

As you will see in the upcoming chapters, which detail the APIs on the proxy and skeleton side, ara::com provides typically function overloads, which either take ara::com::InstanceIdentifier OR ara::core::InstanceSpecifier, freeing the developer in the most common use cases, where he simply uses ara::core::InstanceSpecifier from explicitly calling ResolveInstanceIDs().

This means, that the direct use of ara::com::InstanceIdentifier and manual resolution of ara::core::InstanceSpecifier is intended more for power users with rather specific/exotic use cases.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 17. Transfer of an InstanceIdentifier

As discussed before the ara::com::InstanceIdentifier should only be used for "power users" since its format is stack vendor dependent and it contains technology binding information. The transfer or the storage of an ara::com::InstanceIdentifier may be very risky, therefore. As the transfer binding may not exist anymore after the transfer or re-storing or the ara::com::InstanceIdentifier of stack vendor A may be interpreted by an application using the stack of vendor B.

### 18. Detailed API 描述

_原文标题：Detailed API description_

### 19. High Level API 结构

_原文标题：High Level API Structure_

ara::com provides an API that supports the AUTOSAR service model. The services have methods, events, fields and triggers.

- Methods: Execute a function in the Service Application which can also return a value (e.g. Calibrate method).
- Events: The Service Application sends an event (may also include a value) when specific conditions occur (e.g. Brake event). A Client Application can subscribe to events.
- Fields: Have a value at any time, like a status value. Can be read using Get or modified using Set (e.g. UpdateRate field). A Client Application can be notified when a Field value changes.
- Triggers: The Service Application sends a trigger when specific conditions occur. A Client Application can subscribe to triggers.

As described in , Client and Service Application communicate with each other and therefore the API supports methods, events and fields in both sides. This means that the API defines interfaces for sending and receiving events, provides and calls service methods, register handlers for field setters and getters amongst others.

The ara::com API also defines ctors/dtors to create and destroy instances for Proxy and Skeleton classes.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 20. API Elements

The following subchapters will guide through the different API elements, which ara::com defines. Since we will give code examples for various artifacts and provide sample code how to use those APIs from a developer perspective, it is a good idea to have some uniformity in our examples.

So we will use a virtual service (interface) called "RadarService". The following is a kind of a semi-formal description, which should give you an impression of what this "RadarService" provides/does and might be easier to read than a formal AUTOSAR ARXML service description:

So the example service RadarService provides an event "BrakeEvent", which consists of a structure containing a flag and a variable length array of uint8 (as extra payload).

Then it provides a field "UpdateRate", which is of uint32 type and supports get and set calls and finally it provides three methods.

Method "Adjust", to position the radar, which contains a target position as in-parameter and two out-parameters. One to signal the success of the positioning and one to report the final (maybe deviating) effective position.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 21. Proxy Class

The Proxy class is generated from the SI description of the AUTOSAR meta model.

ara::com does standardize the interface of the generated Proxy class.The toolchain of an AP product vendor will generate a Proxy implementation class exactly implementing this interface.

Note: Since the interfaces the Proxy class has to provide are defined by ara::com, a generic (product independent) generator could generate an abstract class or a mock class against which the application developer could implement his service consumer application. This perfectly suits the platform vendor independent development of Adaptive AUTOSAR SWCs.

ara::com expects proxy related artifacts inside a namespace "proxy". This namespace is typically included in a namespace hierarchy deduced from the service definition and its context.

### 22. Proxy Class API's

- FindService()
- StartFindService()
- StopFindService()
- Subscribe()
- Unsubscribe()
- GetSubscriptionState()
- SetSubscriptionStateChangeHandler()
- UnsetSubscriptionStateChangeHandler()
- GetNewSamples()
- GetFreeSampleCount()
- SetReceiveHandler()
- UnsetReceiveHandler()
- ResolveInstanceIDs()
- Field::Get()
- Field::Set()

### 23. RadarService Proxy Class 示例

_原文标题：RadarService Proxy Class Example_

### 24. Constructor and 句柄 Concept

_原文标题：Constructor and Handle Concept_

As you can see in the Listing ara::com prescribes the Proxy class to provide a constructor. This means, that the developer is responsible for creating a proxy instance to communicate with a possibly remote service.

The ctor takes a parameter of type ProxyHandleType - an inner class of the generated proxy class. Probably the immediate question then is: "What is this handle and how to create it/where to get it from?"

What it is, should be straightforward: After the call to the ctor you have a proxy instance, which allows you to communicate with the service, therefore the handle has to contain the needed addressing information, so that the Communication Management binding implementation is able to contact the service.

What exactly this address information contains is totally dependent on the binding implementation/technical transport layer!

That already partly answers the question "how to create/where to get it": Really creating is not possible for an application developer as he is - according to AUTOSAR core concepts - implementing his application AP product and therefore Communication Management independent.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 25. Finding 服务

_原文标题：Finding Services_

The Proxy class provides class (static) methods to find service instances, which are compatible with the Proxy class.

Since the availability of service instances is dynamic by nature, as they have a life cycle, ara::com provides two different ways to do a "FindService" for convenience in general:

- StartFindService is a class method, which starts a continuous "FindService" activity in the background, which notifies the caller via a given callback anytime the availability of instances of the service changes.
- FindService is a one-off call, which returns available instances at the point in time of the call.

Both of those methods come in two different overrides, depending on the instance identifier approach taken (see ):

- one taking an ara::com::InstanceIdentifier
- one taking an ara::core::InstanceSpecifier

Note that only technical bindings will be used for finding/searching, which are configured for the corresponding SI within the service instance manifest in the form of a SI deployment.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 26. Auto Update Proxy instance

Regardless whether you use the one-off FindService or the StartFindService variant, in both cases you get a handle identifying the - possibly remote - service instance, from which you then create your proxy instance.

But what happens if the service instance goes down and later comes up again e.g. due to some life cycle state changes? Can the existing proxy instance at the service consumer side still be re-used later, when the service instance gets available again?

The good news is: The ara::com design team decided to require this re-use possibility from the binding implementation as it eases the typical task of implementing service consumers.

In the service based communication universe it is expected, that during the life time of the entire system (e.g. vehicle) service provider and consumer instances are starting up and going down again due to their own life cycle concepts frequently.

To deal with that, there is the service discovery infrastructure, where the life cycle of service providers and consumers is monitored in terms of service offerings and service (re)subscriptions!

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 27. Events

For each event the remote service provides, the proxy class contains a member of a event specific wrapper class. In our example the member has the name BrakeEvent and is of type events::BrakeEvent.

As you see in all the event classes needed for the proxy class are generated inside a specific namespace events, which is contained inside the proxy namespace.

The member in the proxy is used to access events/event data, which are sent by the service instance our proxy is connected to. Let's have a look at the generated event class for our example:

The data type of the event data in our example event is RadarObjects (see ). The first you encounter is the using-directive which assigns the generic name SampleType to the concrete type, which is then used throughout the interface.

### 28. Event Subscription and Local Cache

The mere fact, that there exists a member of the event wrapper class inside the proxy instance does not mean, that the user gets instant access to events raised/sent out by service instance.

First you have to "subscribe" for the event, in order to tell the Communication Management, that you are now interested in receiving events.

For that purpose the event wrapper class of ara::com provides the method

/\*\*
_ \brief The application expects the CM to subscribe the event.
_
_ ....
_
_ \param maxSampleCount maximum number of samples, which can be held.
_/
ara::core::Result<void> Subscribe(size_t maxSampleCount);

This method expects a parameter maxSampleCount, which basically informs Communication Management implementation, how many event samples the application intends to hold at maximum. Therefore - with calling this method, you not only tell the Communication Management, that you now are interested in receiving event updates, but you are at the same time setting up a "local cache" for those events bound to the event wrapper instance with the given maxSampleCount.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Monitoring Event Subscription

The call to the Subscribe() method is asynchronous by nature. This means that at the point in time Subscribe() returns, it is just the indication, that the Communication Management has accepted the order to care for subscription.

The subscription process itself may (most likely, but depends on the underlying IPC implementation) involve the event provider side. Contacting the possibly remote service for setting up the subscription might take some time.

So the binding implementation of the subscribe is allowed to return immediately after accepting the subscribe, even if for instance the remote service instance has not yet acknowledged the subscription (in case the underlying IPC would support mechanism like acknowledgment at all). If the user - after having called Subscribe() - wants to get feedback about the success of the subscription, he might call:

/\*\*
_ \brief query current subscription state.
_
_ \return current state of the subscription.
_/
ara::com::SubscriptionState GetSubscriptionState() const;

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 30. Accessing Event 数据 - aka Samples

_原文标题：Accessing Event Data - aka Samples_

So, after you successfully subscribed to an event according to the previous chapters, how is the access to received event data samples achieved? The event data, which is sent from the event emitter (service provider) to subscribing proxy instances is - in typicalIPC implementations - accumulated/queued in some buffers (e.g. kernel buffers, specialIPCimplementation controlled shared memory regions, ...). So there has to be taken an explicit action, to get/fetch those event samples from those buffers, eventually deserialze it and and then put them into the event wrapper class instance specific cache in form of a correct SampleType. The API to trigger this action is GetNewSamples().

/\*\*
_ \brief Get new data from the Communication Management
_ buffers and provide it in callbacks to the given callable f. \*
_ ....
_/
template <typename F>
ara::core::Result<size_t> GetNewSamples(
F&& f,
size_t maxNumberOfSamples = std::numeric_limits<size_t>::max());

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 31. Event Sample 管理 via SamplePtrs

_原文标题：Event Sample Management via SamplePtrs_

A SamplePtr, which is handed over from the ara::com implementation to application/user layer is - from a semantical perspective - a unique-pointer (very similar to a std::unique_ptr): When the ara::com implementation hands it over an ownership transfer takes place. From now on the application/user is responsible for the lifetime management of the underlying sample. As long as the user doesn't free the sample by destroying the SamplePtr or by calling explicit assignment-ops/modifiers on the SamplePtr instance, the ara::com implementation can not reclaim the memory slot occupied by this sample.

Those memory-slots, in which the event sample data reside, are allocated by the ara::com implementation. This typically takes place in the context of the call to Subscribe(), where the user/application defines by parameter maxSampleCount, what maximum number of event data samples it wants to have concurrently accessible. Within later GetNewSamples() calls, the ara::com implementation then populates/fills such a "sample slot" (if one is free) and passes a SamplePtr pointing to it in the user/application callback f.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 32. Event-Driven vs Polling-Based access

As already promised, we fully support event-driven and polling approaches to access new data. For the polling approach no other APIs are needed than those, which we have discussed up to this point. The typical use case is, that you have an application, which is cyclically triggered to do some processing and provide its output to certain deadlines. This is the typical pattern of a regulator/control algorithm - the cyclic activation might additionally be driven by a real-time timer, which assures a minimal jitter.

In such a setup you call GetNewSamples() in each activation cycle and then use those updated cache data as input for the current processing iteration. Here it is fully sufficient to get the latest data to process at the time the processing algorithm is scheduled.

It would be counterproductive, if the Communication Management would notify your application anytime new data is available: This would just mean unnecessary context switches to your application process, since at the time you get the notification you do not want to process that new data as it is not time for it.

However, there are other use cases as well.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 33. 缓冲 Strategies

_原文标题：Buffering Strategies_

The following figure sketches a simple deployment, where we have a service providing an event, for which two different local adaptive SWCs have subscribed through their respective ara::com proxies/event wrappers.

As you can see in the picture both proxies have a local event cache. This is the cache, which gets filled via GetNewSamples(). What this picture also depicts is, that the service implementation sends its event data to a Communication Management buffer, which is apparently outside the process space of the service implementation - the picture here assumes, that this buffer is owned by kernel or it is realized as a shared memory between communicating proxies and skeleton or owned by a separate binding implementation specific "demon" process.

The background of those assumptions made in the figure is the following: Adaptive applications are realized as processes with separated/protected memory/address spaces.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 其余 52 章（内容从略，见纯文本全文）

34. Methods
35. One-Way aka Fire-and-Forget Methods
36. Event-Driven vs Polling access to method results
37. Canceling Method Result
38. Fields
39. Triggers
40. Skeleton Class
41. Skeleton Class API's
42. RadarService Skeleton Class 示例
43. Instantiation (Constructors)
44. Offering 服务 instance
45. Polling and event-driven processing modes
46. Polling 模式
47. Event-Driven 模式
48. Methods
49. One-Way aka Fire-and-Forget Methods
50. Raising Application 错误
51. Events
52. Fields
53. Registering Getters
54. Registering Setters
55. Ensuring existence of "SetHandler"
56. Ensuring existence of valid Field values
57. Access to current field value from Get/SetHandler
58. Triggers
59. 数据类型 on 服务接口 level
60. Optional 数据 elements
61. Tutorials
62. Usage of 服务接口
63. 服务接口 Deployment
64. 服务 Instance Deployment
65. 服务 Implementation
66. Usage of InstanceSpecifier
67. 建模 and 配置/映射 over 清单 from user perspective
68. Instance IDs only for provided 服务
69. Usage in context of MultiBinding
70. 附录
71. Serialization
72. Zero-Copy implications
73. 服务 Discovery Implementation Strategies
74. Central vs Distributed approach
75. Multi-Binding implications
76. Simple Multi-Binding use case
77. Local/网络 Multi-Binding use case
78. Typical SOME/IP Multi-Binding use case
79. ara：：com and AUTOSAR meta-model relationship
80. Connection to AUTOSAR_TR_AdaptiveMethodology
81. 服务接口
82. 软件组件
83. Adaptive Application/Executables and Processes
84. Usage of meta-model identifiers within ara：：com based application 代码
85. 抽象协议网络 Binding 示例
