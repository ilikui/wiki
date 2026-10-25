# Explanation of Time Sensitive Network features (`TimeSensitiveNetworkFeatures`)

> [返回本类索引](index.md)

| 属性 | 值 |
|---|---|
| 平台 | FO |
| 类别 | EXP — 解释性指南（Explanation） |
| UID | 1091 |
| 规范版本 | R25-11 |

## 本地文件

- 规范 PDF: `F:\Work\Standards\01_Sources\FO_EXP_TimeSensitiveNetworkFeatures_1091\AUTOSAR_FO_EXP_TimeSensitiveNetworkFeatures.pdf`
- ARXML 模型: `F:\Work\Standards\01_Sources\FO_EXP_TimeSensitiveNetworkFeatures_1091\AUTOSAR_FO_EXP_TimeSensitiveNetworkFeatures.arxml`
- 纯文本全文: `F:\Work\Standards\01_Sources\FO_EXP_TimeSensitiveNetworkFeatures_1091\zzgen\FO_EXP_TimeSensitiveNetworkFeatures.complete.txt`

## 章节详细内容

### 1. 简介
*原文标题：Introduction*

### 2. 目标
*原文标题：Objectives*

Time-Sensitive Networking (TSN) is a set of standards specified by . It provides end-to-end data transmission with extremely low latency and high reliability over Ethernet. As a result, TSN is considered as one of the key enabler for deterministic communication on standard Ethernet, which can further be used to accurate timing and guarantee data delivery for automotive Ethernet.

The purpose of this document is to give an overview on the relevant TSN features, and provide examples how to use them together with AUTOSAR platform.

### 3. 范围
*原文标题：Scope*

This document provides explanatory information and help the automotive engineer to understand the fundamental TSN features, as well as the basic approach to design a deterministic network on automotive Ethernet.

The content of this document will address following topics:

* Constraints and Assumptions
* Overview
* Usage of Shapers
* Accuracy of Time Synchronization
* Measure Quality (Accuracy) of Time Synchronization

### 4. 术语与缩略语定义
*原文标题：Definition of terms and acronyms*

### 5. 缩略语
*原文标题：Acronyms and abbreviations*

The glossary below includes acronyms and abbreviations relevant to `FO_RS_IEEE1722` that are not included in the AUTOSAR TR Glossary.

| Abbreviation / Acronym: | Description: |
|---|---|
| TSN | Time Sensitive Networking |
| TSpec | Traffic specification as defined by |
| AVTP | Audio/Video Transport Protocol as defined by |
| AVTPDU | Audio/Video Transport Protocol Data Unit as defined by |
| IIDC | Instrumentation and Industrial Digital Camera as defined by |
| 61883_IIDC | IEC 61883/IIDC format as defined by |
| AAF | AVTP Audio Format as defined by |
| CRF | Control Reference Format as defined by |
| TSCF | Time Sensitive Control Format as defined by |
| NTSCF | None Time Sensitive Control Format as defined by |
| ACF | AVTP Control Format as defined by |
| ACF_CAN | Controller Area Network (CAN)/CAN with Flexible Data-Rate (CAN FD) message as defined by |
| ACF_CAN_BRIEF | Abbreviated CAN/CAN FD message as defined by |
| ACF_LIN | LIN® message as defined by |
| RVF | Raw Video Format as defined by |
| gPTP | generalized Precision Time Protocol |
| PPS | Pulse Per Second physical signal |
| 1PPS | 1 Pulse Per Second physical line |
| GPS | Global Positioning System |

### 6. 定义 of terms
*原文标题：Definition of terms*

### 7. Ethernet packet

Definition: An "Ethernet packet" is an on wire format defined by  which includes the following parts: Preamble (7 bytes), SFD (start frame delimiter, 1 byte), Ethernet frame (up to 2000 bytes), IPG (inter package gap, 12 byte times)

### 8. Ethernet frame

Definition: An "Ethernet frame" is on wire format defined  which includes the following parts: MAC destination address field (6 bytes), MAC source address field (6 bytes), Type field (2 bytes), MAC client data field (include optional Q-Tag (4 bytes)) (up to 1982 bytes), optional PAD (padding bytes), FCS (frame check sequence, 4 bytes)

### 9. Stream

Definition: A "stream" represent multiple Ethernet frames which are grouped by similar frame attributes (e.g. MAC source address)

### 10. IEEE1722-based stream

Definition: A "IEEE1722-based stream" represent multiple Ethernet frames which have EtherType set to AVTP Ethertype (0x22F0) (see )), carry an IEEE1722 specified AVTP header and an AVTP stream data subtype (e.g. AAF (AVTP Audio Format))

### 11. Stream 数据 producer
*原文标题：Stream data producer*

Definition: A "stream data producer" represent an end node in an Ethernet network which (continuously) produces data. The data is transmitted via a stream and received by 1 or multiple end nodes (stream data consumer)

### 12. Stream 数据 consumer
*原文标题：Stream data consumer*

Definition: A "stream data consumer" represent an end node in an Ethernet network which (continuously) consumes data. The data is received via a stream.

### 13. AVTP presentation time

Definition: The "AVTP presentation time" is defined by ) and represents the globally synchronized time at which designated data within an AVTPDU payload is transferred to a time-sensitive application of an stream data consumer. Please note: AVTP presentation time is calculated as "TavtpPresentationTime" = "TcurrentGlobalTime" + "TmaxTransitTime".

### 14. Max transit time

Definition: "Max transit time" is defined by ) and represents the maximal acceptable delay when data of a stream data producer is added to its egress queue, transferred across the network via an IEEE1722-based stream and this data is forwarded from the ingress queue of the receiving stream data consumer to a time-sensitive application.

### 15. Media clock

Definition: "Media clock" is defined by ) and represents an entity which generates a periodic signal with a constant rate (e.g. precise hardware clock with a constant rate (e.g. 48kHz) ). The media clock is hosted by the media clock provider.

### 16. Media clock provider

Definition: A "media clock provider" is an end node in the network which hosts an media clock. The media clock provider transmit an IEEE1722-based stream to 1 or multiple media clock consumer. The IEEE1722-based stream is of subtype Clock Reference Format (CRF) and contain several presentation timestamps which correlates to the media clock rate.

### 17. Media clock consumer

Definition: A "media clock consumer" is an end node in the network which receives a IEEE1722-based stream of subtype Clock Reference Format (CRF) from a media clock provider. The media clock consumer performs a recovery of its media clock (e.g. PLL) based on the received encapsulated data from the media clock provider.

### 18. 相关文档
*原文标题：Related Documentation*

### 19. 输入文档与相关标准规范
*原文标题：Input documents & related standards and norms*

### 20. Time Sensitive 网络 in AUTOSAR
*原文标题：Time Sensitive Network in AUTOSAR*

### 21. 约束与假设
*原文标题：Constraints and Assumptions*

AUTOSAR does not support the following TSN features:

* time aware shapers
* active stream identification
* frame replication

AUTOSAR assumes that all Ethernet switches in the network are VLAN-aware. VLAN-unaware Ethernet switches are not supported.

### 22. 概述
*原文标题：Overview*

TSN is a set of IEEE 802 standards based on Ethernet. It specifies functions to ensure the transmission with bounded low latency and high availability for applications in automotive or industrial control facilities. The deterministic transmission of time-critical frames may be achieved by using TSN features of high reliability, low delay, zero packet loss through traffic shaping, seamless redundant transmission, filtering, priority-based scheduling, ingress policing and rate limitation.

Some of these IEEE documents are stand-alone, like  which are each further developed through annexes and revisions, or they are initially annexes of  which get rolled up into the main document and may be updated, as the main document is developed further through revisions.

While it is customary to often refer back to the original Q-annex a feature was introduced in, the reader is advised to always check the latest revision of the main document (e.g. currently ) for updates and changes to the functionality.

The list of documents considered part of the TSN family is constantly evolving.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 23. IEEE 802.1AS

IEEE 802.1AS () was derived as a profile of IEEE Std 1588 () operating on the data link layer (ISO/OSI layer 2). It may be surprising to some, that only very few TSN features require time-synchronization as a basis. The most well known are the Enhancements for scheduled traffic in section 8.6.8.4 of , originally developed in  (see ).

Time synchronization is used mostly for application level communication and not as an infrastructure element to manage the network.

### 24. IEEE 802.1Qav

IEEE 802.1Qav  can be used to ensure that traditional asynchronous Ethernet data traffic does not interfere with AVB's real-time audio and video streams. To avoid competition for network resources between ordinary data traffic and AVB traffic, the AVB switch differentiates time-sensitive audio and video streams from ordinary data streams, queues real-time frames and asynchronous frames separately, and assigns the highest priority to real-time frames. Therefore a so-called Credit Based Shaper (CBS) could be used for bandwidth limitation to convergence time-sensitive and time-insensitive traffic.

CBS is described in more detail in section .

### 25. IEEE 802.1Qbv

IEEE 802.1Qbv  specifies the feature of time-aware shaping, which allows the scheduling of the transmission of frames with different priorities in time-triggered windows. Time-aware shaping divides time into fixed windows, and schedules the transmission of frames within these windows based on their priority. Time-critical frames are normally given with higher priority and transmitted in a separate window, while lower priority frames are transmitted in the remaining time.

### 26. IEEE 802.1Qcc

Most networks need to be configured while the network is down, which is not suitable for applications such as in industrial control and automotive network communication. IEEE 802.1Qcc  can be used to introduce a Centralized Network Configuration (CNC) and a Centralized User Configuration (CUC) to implement dynamic network configuration, and flexibly configure new devices and data flows when the network is running.

### 27. Usage of Shapers in the 网络
*原文标题：Usage of Shapers in the Network*

### 28. Fundamental Shaper and Scheduler 概念
*原文标题：Fundamental Shaper and Scheduler Concepts*

The following definitions are used in this section:

# Scheduling: Is the action of assigning resources
# Traffic Shaping: Is a bandwidth management technique
# Policing: Is the rule (based on header fields, ingress or egress ports, ...) or bandwidth (data per time) based discarding of frames

If the resource assigned by a scheduler is (access to) bandwidth, then a scheduler will implicitly perform Traffic Shaping. E.g.: The Enhancements for Scheduled Traffic (of ) are based on scheduling access to a transmission port based on a timetable.

Strict Priority Queuing (SPQ) assigns access to a transmission port based on priority. But SPQ does not manage the bandwidth, as the highest priority can get 100% access to the transmission port.

An ingress rate limiter discards frames (polices them) in case they arrive too frequently. Less bandwidth is required for the left over egress traffic, but one would usually not call this shaping.

Schedulers and shapers can ever only delay transmission. This will increase the worst case latency of the frames being shaped.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 29. Congestion

### 30. Congested Traffic

Congested Traffic is under-served on egress, i.e. frames accumulate in the egress buffer of the relay as they do not get selected for transmission.

Traffic can become congested, if:

# The shaper on egress is configured with too low a rate or too a small burst size.
# Excessively large lower priority Frames block the transmission.
# A large higher priority burst blocks the transmission.

Therefore in order to prevent traffic from becoming congested:

# Bandwidth needs for all traffic must be well known.
# All traffic goes through a max. SDU Size Filter (:8.6.5.3.1).
# All higher priority traffic (and therefore all traffic, except the lowest TC) goes through a Flow Meter (:8.6.5.5).

### 31. Congesting Traffic

Congesting Traffic is providing excess ingress bandwidth, i.e. more buffer is (or would be) required to store incoming frames than was expected/configured.

Traffic causes congestion, if: a) Bursts of random size occur, as no shaping is implemented. b) A Shaper (CBS, ATS, TAS) with a mis-configured rate or burst size is active. c) The Traffic contains excessively large Frames.

Therefore in order to prevent Traffic from causing congestion: d) All Traffic is shaped on egress at every Talker. e) Bandwidth needs for all Traffic must be well known. f) All traffic goes through a max. SDU Size Filter (:8.6.5.3.1).

### 32. Summary and Conclusion

Congestion separation is to be performed on each Bridge locally. a) A Bridge is configurable to segregate the Buffers for different Traffic, so Buffer overruns in one segregated block can lead to discarding of Frames within that one Traffic aggregate, but not for the other Traffic aggregates. b) Frames are not forwarded on egress, if the bandwidth exceeds a configured maximum. c) Frames are discarded if the bandwidth exceeds a configured maximum on ingress.

### 33. Asynchronous Traffic Shaper

### 34. 概述
*原文标题：Overview*

Asynchronous Traffic Shaping (ATS) was originally specified by  and provides a traffic shaping concept that can provide bounded latencies for data streams in a network. It allows for bursts and provides a fair usage of the egress port for streams arriving on different ingress ports. This is a main difference between the Credit Based Shaper (CBS) and ATS, as CBS only considers a particular traffic class of an egress port. The ATS shaping algorithm is loosely based on the token bucket algorithm and uses similar terminology for the configuration parameters.

ATS is divided into two major functional blocks, one, the "ATS Eligibility Time Assignment" (see ) situated on the ingress side of a bridge, operating on streams identified by the stream filters using the stream_handle and priority, includes the computational part of the shaping function. This means it calculates an eligibility time for every frame received based on the ATS algorithm. The eligibility time is the earliest time when a frame is eligible for transmission on the egress port.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 35. 描述 of the ATS algorithm
*原文标题：Description of the ATS algorithm*

The ATS algorithm is defined by section 8.6.11.3 of . It assigns an eligibilityTime \tau to a frame n received at arrivalTime t_A.

The IEEE's ATS algorithm uses BucketEmptyTime E to represent the current virtual credit. If BucketEmptyTime E is in the past of arrivalTime (t_A> E ), positive virtual credit has been accumulated. If BucketEmptyTime E is in the future, virtual credit is negative. Virtual credit is constantly accumulated at CommittedInformationRate r.

Therefore, while not actually used in the IEEE's description, ATS keeps track of a virtual credit c, which can usually be calculated by:

\label{eq:`ATS_virtualCredit`}
c = \left(t - E\right) \times r

At arrivalTime the IEEE ATS algorithm initially calculates a schedulerEligibilityTime:

\label{eq:tau_zero}
\tau_0 = E + L/r

and sets the eligibilityTime to:

\label{eq:tau}
\tau = \max \left( t_A, \tau_G, \tau_0 \right)

Ignoring \tau_G (see  for details) initially in this explanation the frame becomes eligible for transmission immediately (i.e., at t_A) if sufficient virtual credit c for the frame of length L is available, or at \tau_0 in the future of t_A as soon as sufficient virtual credit has accumulated.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 36. ATS normal shaping operation

In a correctly configured network (see ), without overload conditions, data is expected to arrive roughly at the rate r configured in the shaper for the egress under consideration. In other words frames of identical length arriving within the window between BucketEmptyTime and BucketFullTime become eligible at the configured CommittedInformationRate in equal intervals.

### 37. Alternative 功能性 ATS 描述
*原文标题：Alternative functional ATS description*

The following steps represent a fundamentally equivalent shaping methodology to the algorithm given in IEEE Std 802.1Q-2022 according to Boyer . This does however not handle some special cases, like the discard of a frame due to exceeded MaxResidenceTime.

# Virtual credit increases continuously with committedInformationRate
# Virtual credit can never be larger than committedBurstSize
# A frame becomes eligible for transmission as soon as the virtual credit is equal or larger than the frame length
# The virtual credit of the shaper instance is reduced by the frame's length at it's eligibilityTime, i.e. not at it's actual transmission time

### 38. Actual ATS transmission bursts

Assuming 2 frames n_1 and n_2 arrive at roughly the same time t_A \approx t_A, the virtual credit is at CommittedBurstSize c=C, and the CommittedBurstSize is at least the sum of the frame lengths C \geq L + L. Then the EligibilityTime of the first frame is immediately \tau=t_A as sufficient credit is available (see ()). Because of c \left \right]=C, () is true and E = L/r + t_A - C/r according to (). As C>L this means E < t_A and c\left \right] \geq L. Therefore the EligibilityTime of the second frame is also immediately \tau=t_A as again sufficient credit is available (see ()). In other words the 2 frames carry basically the same EligibilityTime forward and can be burst from the egress queue controlled by the ATS transmission selection algorithm.

The above represents the case of the intended bursting of the ATS, the following two cases must be considered unintended bursts:

As described in , a single Frame shaped by an ATS instance can be larger than CommittedBurstSize and it is therefore possible for a queue controlled by the ATS transmission selection algorithm to transmit a frame which is larger than the configured CommittedBurstSize.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 39. 指南 for MaxResidenceTime 配置
*原文标题：Guideline for MaxResidenceTime configuration*

As already stated in , IEEE Std 802.1Q does not require a certain relation between L, C, and \Delta_{max}. Both () and () allow for L>C (see  for details). On the other hand if L>\Delta_{max} \times r the frame will be discarded, even if L<C. The later must obviously be viewed as a misconfiguration.

To find a guideline on how to configure MaxResidenceTime the GroupEligibilityTime can be ignored. For simplicity all frames are assumed to be of equal length L \leq C.

In order for () to be true, schedulerEligibilityTime must be greater than arrivalTime t_A < \tau_0 according to equation (). Therefore \tau = \tau_0 and the frame is discarded if:

t_A + \Delta_{max} \leq E + L/r
%t_A + \Delta_{max} - E \leq L/r
%r \leq \frac{L}{t_A + \Delta_{max} - E}

\label{eq:ats_discard}
t_A - E \leq L/r - \Delta_{max}

t_A - E is positive, if frame n was received after E = E + L/r, if the previous frame  was scheduled regularly. In any sensible configuration L/r < \Delta_{max} must be true, although this is not mandated by IEEE (see above). Then L/r - \Delta_{max} <0 and () trivially becomes false, i.e., the frame is forwarded and not discarded.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 40. ATS implicit frame length limit

Assuming t_A - E = \epsilon \leq 0, what is the maximum frame length L_{max} that can still be scheduled without the frame being discarded due to ()?

\epsilon \geq L/r - \Delta_{max}

Since L/r < \Delta_{max} must be true, the maximum frame length results for \epsilon =0:

\label{eq:ats_max_frame_length}
L_{max} = \Delta_{max} \times r

Therefore it is possible for L>C and the ATS can create a single frame burst which is larger than the configured CommittedBurstSize C. Using () this yields L_{max} \geq 2 \times C.

Since this frame consumes more virtual credit than committedBurstSize, the BucketEmptyTime of the following frame E is delayed by a time equivalent to the excessively consumed credit E = F + (L_{max} - C)/r. If the larger frame length is accounted for by the configured shaping rate this does not cause any issues. If the larger frame length represents excess data beyond the configured CommittedInformationRate the ATS will no longer be bandwidth-preserving, i.e., it can not catch up and data loss will occur at some later time.

In  the maximum SDU size filter is therefore required to be applied to all streams going through an ATS instance.

### 41. ATS implicit rate limit

According to () a frame n of length L_{max} from () is discarded if:

E + L/r  \geq  t_A

I.e., the maximum length frame must arrive before the schedulerEligibilityTime \tau_0 of the previous frame. Assuming the previous frame was of CommittedBurstSize L=C, an ingress burst of C + L_{max} occurs within emptyToFullDuration. The momentary ingress rate leading to the discard of the maximum length frame from () is therefore:

\label{eq:ats_max_ingress_rate}
r_{max}
= \frac{ C + L_{max}}{C/r }
%= r \times \left(1 + \frac{ L_{max}}{C }\right)
= r \times \left(1 + \frac{\Delta_{max} \times r }{C }\right) \\
%= r \times \left( 1 + \frac{2 \times C / r }{C} \times r \right)

Using () this yields:

r_{max} \geq 3 \times r

For such an overload condition the ATS will no longer be bandwidth-preserving, i.e., it can not catch up and data loss will occur at some later time. In  the ingress rate to the ATS instance is therefore required to be limited for all streams.

### 42. Consequences of the groupEligibilityTime

If two or more ATS instances are assigned to the same SchedulerGroupInstanceID, they share a common groupEligibilityTime. According to () the EligibilityTime of a frame being processed can never be earlier than the groupEligibilityTime, which is set to the EligibilityTime of the frame most recently processed by any one of the ATS instances. In effect frames which are processed by any ATS instance within the same SchedulerGroupInstanceID will be assigned consecutive EligibilityTimes in the same order in which the frames have been received.

If the CommittedInformationRates of two ATS instances (x and y) within the same SchedulerGroupInstanceID are significantly different (r >> r) the groupEligibilityTime prevents a frame in ATS instance x to be transmitted before the previously processed frame in ATS instance y, even if the higher CommittedInformationRate r would require this.

In order to prevent such a dysfunctional network configuration, ATS must be seen as a network wide concept (see ) and can not be applied just locally to any one switch.

This is why in Q there is no Groups in End Stations, in order to align the packets correctly at the start!

### 43. Guidance on the 配置
*原文标题：Guidance on the configuration*

In the ATS' ground state the virtual credit is at the CommittedBurstSize. Therefore more than one frame can be set eligible for immediate transmission (see ). This is different from the Credit Based Shaper (CBS see ), where at its ground state the credit is zero and only a single frame can be transmitted immediately.

Even more importantly the ATS concept can shape different streams in individual ATS instances while still transmitting all frames from a single egress queue, i.e., with the same priority. Looking at IEEE Std 802.1BA-2021 the latency of frames shaped by CBS stems from the fact that all streams (S_i) of the same priority (TC in IEEE Std 802.1Q-2022) arriving on different ingress ports (P_i) with individual rates (R_i) are shaped in a single CBS instance with r_{CBS}=\sum_{i} R_i. Thus a frame from a high rate stream may still be scheduled last. In order to prevent this Specht  requires the following ATS instance allocation rule :

SAR1: Two streams may not be assigned to the same ATS instance, if they have been received on two different ingress ports.

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 44. ATS 配置 parameters
*原文标题：ATS Configuration parameters*

Configuration parameters of the ATS Eligibility Time Assignment:

| IEEE Terminology | AR ECU Parameter | Mathematical Symbol |
|---|---|---|
| Scheduler Instance Table | EthSwtAtsInstanceTable |  |
| EthSwtAtsInstanceEntry |  |  |
| CommittedBurstSize | EthSwtPortATSCommitedBurstSize | C |
| CommittedInformationRate | EthSwtPortATSCommitedInformationRate | r |
| SchedulerGroupInstanceID | EthSwtPortAtsSchedulerGroupRef |  |
| Scheduler Group Instance Table | EthSwtAtsGroupInstanceTable |  |
| EthSwtAtsGroupInstanceEntry |  |  |
| MaxResidenceTime | EthSwtAtsGroupMaximumResidenceTime | \Delta_{max} |

Configuration parameters of the ATS transmission selection algorithm: There are no specific parameters to configure the ATS transmission selection algorithm, but the ATS transmission selection algorithm needs to be configured for the traffic class used to transmit the frames intended to be shaped using ATS.

### 45. Credit Based Shaper

### 46. 概述
*原文标题：Overview*

The Credit Based Shaper (CBS)

is

was orginally specified by  and provides a traffic shaping concept for high priority, high data rate streams. It was specified as part of the Audio Video Bridging (AVB) standards. The behavior is similar to ATS, but the CBS is operating only on Traffic Classes on the egress side of a bridge. Therefore, there is no differentiation between individual streams within the traffic class as well as different ingress ports. As a consequence, the Credit Based Shaper is strictly operating on the order frames are received on all ports, there is no reordering of frames received on different ports. The Credit Based Shaper minimizes bursts and therefore protects lower priority traffic from the high priority CBS shaped traffic.

The CBS only exists as one functional block (per traffic class) that is located on the egress side of a bridge port and makes frames available for transmission selection based on a credit value. If there is zero or positive credit, frames are available for transmission, in case there is negative credit, frames of the associated traffic class are not available for transmission selection. The idleSlope is the

only

> ……本章内容较长已节选，完整内容见「本地文件」中的纯文本全文。

### 47. CBS 配置 parameters
*原文标题：CBS Configuration parameters*

Configuration parameters of the Credit Based Shaper:

* idleSlope (EthSwtPortEgressQueueCreditBasedShaperIdleSlope)  in

### 48. CBS credit estimation

In the IEEE mode, the credit can theoretically increase without limit. Obviously this is not possible in any practical implementation. While not being configurable

* highCredit and
* lowCredit

give useful indications of the credit levels to be expected.

* highCredit is calculated based on the maximum amount of interference by traffic from higher priority traffic classes and the idleSlope configuration parameter.
* lowCredit can be derived from the maximum frame size expected in the traffic class and the idleSlope configuration parameter.

Since accurate numbers for these calculations may not always be known, these values give a rough lower bound for the credit levels only.

### 49. Guidance on the 配置
*原文标题：Guidance on the configuration*

# Frames associated with the CBS are identified by the priority. In case there are ports of the bridge that use the priority intended to be used for CBS traffic for other traffic, the priorities on those ports need to be remapped by configuring the priority regeneration table.
# The idleSlope of the CBS is set according to the average bit rate of all streams sent with this traffic class on that specific port. A little bit of oversubscription is necessary to account for frequency differences of the oscillators of the different bridges in the network. Credit increases with the idleSlope and is reduced with sendSlope (sendSlope = idleSlope - portTransmitRate).
# To use the CBS algorithm the traffic class(es) used for CBS need to be configured to use the CBS transmission selection. Therefore, EthSwtPortEgressQueueTransmissionSelectionAlgorithm needs to be set to `ETHSWT_TRANSMISSION_SELECTION_ALGORITHM_CBS`

   in

  .

### 50. Ensure Accuracy of Time 同步
*原文标题：Ensure Accuracy of Time Synchronization*

### 51. Recommendations to 支持 accuracy in an Ethernet 网络
*原文标题：Recommendations to support accuracy in an Ethernet network*

### 52. Parts in Documents which Reflect Accuracy

In Time Synchronization Protocol Specification :

Time Master and Time Slave shall work with a Time Base reference clock accuracy as defined in , ANNEX B.1.2 "Time measurement granularity".

In Specification of Time Synchronization over Ethernet :

Automotive systems requiring a common Time Base for ECUs regardless of which bus system the ECUs are connected to.

### 53. 系统需求
*原文标题：System requirements*

TSN uses gPTP protocol (IEEE 802.1AS) to get precise timestamps for the nodes in the Network. IEEE 802.1AS also targets at accuracy of +/-500ns between any two nodes over 7 hops for Audio Video Bridging using 100 Mb/s links. That means, the hardware has to support the global time on Ethernet with an end to end accuracy of +/- 500ns, where end to end describes a network path from a data producer to a data consumer (e.g. from audio source to an audio sink).

### 其余 5 章（内容从略，见纯文本全文）

54. Measurement of the Time 同步 Quality (Accuracy)
55. 概述
56. Usage of PPS
57. 配置 of PPS within an Ethernet controller
58. 配置 of PPS by using OCU in combination with a PHC
