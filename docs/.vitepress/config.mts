import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  base: '/skills-github-pages/',
  title: "Maini's Space",
  description: "Computer Science & Technical Notes",
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '作品集', link: '/projects/' },
      { text: '技术文章', link: '/posts/hello' }
    ],
    // 自动扫描 posts 和 projects 文件夹生成左侧目录
    sidebar: generateSidebar([
      {
        documentRootPath: '/docs',
        scanStartPath: 'posts',
        resolvePath: '/posts/',
        useTitleFromFileHeading: true, // 自动提取文章里的 # 标题作为侧边栏名字
        sortMenusByFrontmatterOrder: true
      },
      {
        documentRootPath: '/docs',
        scanStartPath: 'projects',
        resolvePath: '/projects/',
        useTitleFromFileHeading: true,
        sortMenusByFrontmatterOrder: true
      }
    ]),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jymfignt' }
    ],
    search: {
      provider: 'local'
    }
  }
})
