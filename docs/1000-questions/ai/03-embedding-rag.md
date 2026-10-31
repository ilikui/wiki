# 专栏⑯·第3篇：Embedding 与 RAG——文档讲不清、实际用起来完全不一样的两个概念

> 来源：Flomo 原始笔记（MjQ5MDI4MDk0）  
> [打开 Flomo 原文](https://v.flomoapp.com/mine/?memo_id=MjQ5MDI4MDk0)  
> 原始标签：#Area/技术/AI

**专栏⑯·第3篇：Embedding 与 RAG——文档讲不清、实际用起来完全不一样的两个概念**

📎 第2篇：AI 在知识管理里的角色 → <https://v.flomoapp.com/mine/?memo_id=MjQ5MDI4MDU0>

（来自7/28晚AI专题三问。五大学习法：费曼学习法→把一个"文档写了但实际落地跟你想象完全不一样"的概念讲透。）

**概念 1：Embedding——文档说"把文本变成向量"，没告诉你"质量取决于分块策略"**

**坑 1A：固定长度分块 — 关键句被拦腰切断**

512 tokens 从句子中间切开，上半块有上文没下文，下半块有下文没上文。RAG 检索到不完整内容，回答质量下降。

修复：用语义分块（按段落/句子边界分块）。

**坑 1B：chunk overlap 太小 — 边界上下文丢失**

overlap 50 tokens，中间漏了关键连接句。

修复：overlap 至少覆盖一个完整句子（100-150 tokens）。

**坑 1C：向量维度不适合数据量**

384 维 vs 1536 维，1000 条笔记用 384 维就够了，1536 维存储和搜索成本翻 4 倍。

**坑 1D：query 跟 chunk 的长度差距导致语义偏移**

18 个词的 query 跟 512 tokens 的 chunk 匹配——query 语义集中在最后几个词，chunk 含大量无关上下文。

修复：query 扩写（HyDE 方法）。

**概念 2：RAG——"检索相关但不回答"比没检索更危险**

**最隐蔽的坑：** 检索到的文档有"采样点"三个字，用户问的是"80% vs 87.5% 对 Error Frame 的影响"——LLM 基于训练数据强行回答， **这个数字不是从你的笔记里来的**。

**修复：** prompt 里明确约束"只使用检索内容回答，不包含答案直说不知道"——不加这个约束，LLM 一定会去编。

**一条总结：** AI 最容易被低估的工程细节不是模型选型——是 **数据和查询之间的对齐**。检索到了"相关但不回答"的内容，比没检索到更危险——因为它让你相信回答有依据。

📎 其二：AI在KM6层角色的评估 → <https://v.flomoapp.com/mine/?memo_id=MjQ5MDI4MDU0><br> 📎 其一：对话式索引 → <https://v.flomoapp.com/mine/?memo_id=MjQ5MDI4MDI3><br> 📎 第5篇：RAG 实战 → <https://v.flomoapp.com/mine/?memo_id=MjUwNTg2Mjk4>

**专栏⑯进度：3/10篇**

#Area/技术/AI
