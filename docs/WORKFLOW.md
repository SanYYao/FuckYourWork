# FuckYourWork 工作流 🚀

## 触发条件
消息开头包含 `FuckYourWork` 即刻执行此工作流。

## 工作流步骤

### 1️⃣ 输入识别
- 用户发送工作信息（链接、截图、文本）
- 我识别出关键信息

### 2️⃣ 信息提取与补全
从输入中提取：
- `company` - 公司名称
- `position` - 岗位名称
- `location` - 工作地点
- `salary_min / salary_max` - 薪资范围
- `source_url` - 信息来源

缺少信息时自动 web_search 补全。

### 3️⃣ 市场对标
搜索该岗位在该城市的平均薪资，用于数据对标。

### 4️⃣ 生成 Tag（代码块格式）
```
`tag1` `tag2` `tag3` `tag4`
```
至少选择：技能 + 行业 + 地点 + 薪资等级

**注意**：使用代码块格式避免 Markdown 标题识别冲突。

### 5️⃣ 生成 Markdown 文件
创建：`~/FuckYourWork/{公司名}-{岗位}.md`

内容按 template.md 格式填充，Tag 部分用代码块格式。

### 6️⃣ 更新 JSON 汇总
追加到 `~/FuckYourWork/jobs.json`：
```json
{
  "id": "unique-id",
  "timestamp": "ISO-8601",
  "company": "公司名",
  "position": "岗位",
  "location": "地点",
  "salary": {
    "min": 4000,
    "max": 6000,
    "marketAvg": 5000,
    "currency": "CNY"
  },
  "tags": ["电商运营", "快手", "郑州"],
  "source": "https://...",
  "status": "new"
}
```

### 7️⃣ 输出摘要
```
✅ {公司名} - {岗位}
💰 {min}k - {max}k（市场：{avg}k）
📍 {地点}
🏷️ `tag1` `tag2` `tag3`
📄 已保存：FuckYourWork/{公司名}-{岗位}.md
```

## 文件结构

### 工作信息目录
```
~/FuckYourWork/
├── WORKFLOW.md              # 本工作流
├── schema.json             # 数据结构
├── template.md             # Markdown 模板
├── jobs.json               # JSON 汇总
└── {公司名}-{岗位}.md     # 工作记录
```

### VitePress 网站目录
```
~/FuckYourWork-git/docs/Work/
└── {公司名}-{岗位}.md     # 用户手工 cp 复制来的
```

## 部署流程

1. **我**：生成 Markdown + 更新 jobs.json
2. **你**：`cp ~/FuckYourWork/*.md ~/FuckYourWork-git/docs/Work/`
3. **你**：`cd ~/FuckYourWork-git && git add . && git commit -m '...' && git push`
4. **CF Pages**：自动部署

## 关键更新

⚠️ **不再自动 git push** — 你手工控制时机和 commit message。

✅ **Tag 格式已改为代码块** — 避免 Markdown 标题冲突。

---

**消息触发词**：`FuckYourWork`
