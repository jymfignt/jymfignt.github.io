import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/skills-github-pages/', // <--- 关键就在这一行！没加就会导致 CSS 全部丢失
  title: "Maini's Space",
  description: "Computer Science & Technical Notes",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '作品集', link: '/projects' },
      { text: '技术文章', link: '/posts/hello' }
    ],
    sidebar: {
      '/posts/': [
        {
          text: '随笔与技术文',
          items: [
            { text: '第一篇随笔', link: '/posts/hello' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jymfignt' }
    ],
    search: {
      provider: 'local' // 自带全局本地搜索框
    }
  }
})
