# 🚀 Maini's Space - 个人技术知识库与文艺角

基于 **VitePress** 构建的高性能静态文档网站，采用 **GitHub Actions** 实现 CI/CD 自动化流水线部署。

---

## 📋 Website TODO List (网站完善待办清单)

### 🛠️ 1. 基础架构与自动化
- [x] 完成 VitePress 基础框架搭建与 `base` 路径适配
- [x] 配置 GitHub Actions 自动构建与持续部署（CI/CD）
- [x] 集成 `vitepress-sidebar` 实现文章与项目目录的自动扫描生成
- [ ] 优化移动端（手机/平板）浏览时的响应式适配与侧边栏折叠体验
- [ ] 为网站配置一个独具个人特色的自定义 `favicon`（网站图标）

### 💻 2. 作品集与技术文章扩充 (`docs/projects/` & `docs/posts/`)
- [x] 搭建作品集总览卡片页（`docs/projects/index.md`）
- [x] 编写工业物联网时序异常检测与区块链存证项目详情页
- [x] 编写 GitHub Actions 自动化实践技术随笔
- [ ] 补充“畜牧业生物信息区块链监测系统”详细架构与获奖历程文档
- [ ] 补充“企业级数字出版与编辑管理系统 UML 建模”设计文档
- [ ] 记录更多计算机底层、算法、前端工程化的踩坑笔记

### ☕ 3. 文艺角搭建 (`docs/arts/`)
- [x] 搭建文艺角总览页与分类索引卡片（`docs/arts/index.md`）
- [x] 完成读书与小说书单记录（`docs/arts/books.md`）
- [x] 完成影视与悬疑观后感记录（`docs/arts/reviews.md`）
- [x] 完成古典诗词与文学摘抄（`docs/arts/poems.md`）
- [x] 完成音乐与灵感歌单推荐（`docs/arts/music.md`）
- [ ] 为文艺角引入精美的书籍封面缩略图或影视海报排版

### ⚡ 4. 进阶玩法探索 (Optional)
- [ ] 配置微博/日常自动化定时脚本（GitHub Actions Cron 实践）
- [ ] 集成 Giscus 或 Gitalk 评论区插件（支持访客在线留言讨论）
- [ ] 引入 VitePress 官方统计插件或访问量计数看板
- [ ] 将仓库自定义域名绑定到专属个人顶级域名（如 `maini.space`）

---

## 🛠️ Tech Stack (技术栈)
* **核心框架**: [VitePress](https://vitepress.dev/) (Vue 驱动的静态站点生成器)
* **自动侧边栏**: `vitepress-sidebar`
* **自动化部署**: GitHub Actions (`GitHub Pages`)
* **排版支持**: Markdown / LaTeX 数学公式 / Mermaid 架构图
