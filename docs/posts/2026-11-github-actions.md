---
title: GitHub Actions 自动化实践：让云端替你打工
outline: deep
---

# 🚀 GitHub Actions 自动化实践：让云端替你打工

在现代软件开发和技术写作中，我们常常需要处理各种重复性繁琐的事情：比如每次写完博客要手动编译、检查死链、部署到服务器，或者写一些小脚本去跑定时任务。

如果有一台免费的云端服务器，只要你一往 Git 仓库提交代码（Push），它就自动帮你把所有杂活干完——这就是 **GitHub Actions** 带来的核心生产力解放。

---

## 一、 GitHub Actions 到底是什么？

简单来说，GitHub Actions 是 GitHub 内置的**免费云端 CI/CD（持续集成/持续部署）与自动化流水线运行器**。

* **不需要租云服务器**：所有的脚本、构建、定时任务，全部跑在 GitHub 官方提供的 Ubuntu 虚拟机上。
* **事件驱动（Event-driven）**：你可以设定触发条件。比如：
  * 当你 `git push` 代码时触发（构建网站）
  * 当别人提 Issue 或 PR 时触发（自动贴标签、欢迎留言）
  * 当到达指定时间（Cron 定时器）时触发（定时签到、爬虫、数据同步）

---

## 二、 核心概念速览

在编写自动化脚本（Workflow）前，只需要理解几个核心术语：

1. **Workflow（工作流）**：一个完整的自动化流程，通常写在仓库根目录的 `.github/workflows/` 文件夹下，以 `.yml` 或 `.yaml` 结尾。
2. **Event（事件）**：触发工作流的“发令枪”。例如 `on: push`（推送代码）、`on: schedule`（定时器）。
3. **Job（任务）**：一个工作流可以包含多个 Job（如同时在 Linux 和 Windows 环境下跑测试）。
4. **Step（步骤）**：每个 Job 里的具体动作，比如“检出代码”、“安装 Node.js”、“运行打包命令”。

---

## 三、 实战演练：如何实现“Push 即部署”？

以我们目前搭建的 **VitePress 个人知识库与作品集** 为例，整个自动化流水线的核心配置文件（`.github/workflows/deploy.yml`）逻辑如下：

```yaml
name: Deploy VitePress to GitHub Pages

# 1. 触发条件：每次往 main 分支推送代码时触发
on:
  push:
    branches: [main]
  workflow_dispatch: # 支持在 GitHub 网页端手动点击运行

# 2. 赋予 GitHub Pages 写入权限
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # 步骤一：把仓库代码拉取到虚拟机
      - name: Checkout
        uses: actions/checkout@v4

      # 步骤二：安装 Node.js 环境
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22

      # 步骤三：配置 GitHub Pages 部署参数
      - name: Setup Pages
        uses: actions/configure-pages@v5

      # 步骤四：安装项目依赖
      - name: Install dependencies
        run: npm install --no-package-lock

      # 步骤五：执行 VitePress 静态网页打包
      - name: Build with VitePress
        run: npm run docs:build

      # 步骤六：上传打包好的静态文件产物
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    steps:
      # 步骤七：正式发布上线到 GitHub Pages
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
