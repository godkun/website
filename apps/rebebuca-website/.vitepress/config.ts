import { defineConfigWithTheme } from 'vitepress'
import { searchForWorkspaceRoot } from 'vite'
import type { Config as ThemeConfig } from '@vue/theme'
import baseConfig from '@vue/theme/config'
import { headerPlugin } from './headerMdPlugin'

const nav = [
  {
    text: 'Guide',
    activeMatch: '/guide/',
    link: '/guide/introduction.html'
  }
]

export const sidebar = {
  '/guide/': [
    {
      text: 'Guide',
      items: [
        { text: '介绍', link: '/guide/introduction' },
        { text: '快速起步', link: '/guide/startup' },
        { text: '新建-编辑-查找-删除分组', link: '/guide/新建-编辑-查找-删除分组' },
        { text: '新建-编辑-复制-删除ffmpeg命令', link: '/guide/新建-编辑-复制-删除ffmpeg命令' },
        { text: '新增-编辑-插入-删除ffmpeg命令参数', link: '/guide/新增-编辑-插入-删除ffmpeg命令参数' },
        { text: '视频格式转换', link: '/guide/视频格式转换' },
        { text: 'ffmpeg命令-运行-停止-重启-清除输出日志', link: '/guide/ffmpeg命令-运行-停止-重启-清除输出日志' },
        { text: '分组监控', link: '/guide/分组监控' },
        { text: '配置', link: '/guide/config' },
        { text: '进群交流', link: '/guide/qun' }
      ]
    }
  ]
}

export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,

  lang: 'en-zh',
  title: 'Rebebuca',
  description: 'Rebebuca - 桌面端 FFMPEG 管理器',
  srcDir: 'src',
  scrollOffset: 'header',
  lastUpdated: true,

  head: [
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'XNOLWPLB',
        'data-spa': 'auto',
        defer: ''
      }
    ],
    [
      'meta',
      {
        name: 'keywords',
        content: 'ffmpeg,推流,拉流,tauri'
      }
    ],
    [
      'meta',
      {
        name: 'description',
        content: '桌面端 FFMPEG 管理器'
      }
    ]
  ],

  themeConfig: {
    nav,
    sidebar,

    // socialLinks: [{ icon: 'github', link: 'https://github.com/godkun/website' }],

    editLink: {
      repo: 'godkun/website',
      text: 'Edit this page on GitHub'
    }
  },

  markdown: {
    config(md) {
      md.use(headerPlugin)
    }
  },

  vite: {
    define: {
      __VUE_OPTIONS_API__: false
    },
    optimizeDeps: {
      include: ['gsap', 'dynamics.js'],
      exclude: ['@vue/repl']
    },
    // @ts-ignore
    ssr: {
      external: ['@vue/repl']
    },
    server: {
      host: true,
      fs: {
        allow: [
          // search up for workspace root
          searchForWorkspaceRoot(process.cwd())
        ]
      }
    },
    build: {
      minify: 'terser',
      chunkSizeWarningLimit: Infinity
    },
    json: {
      stringify: true
    }
  },

  vue: {
    reactivityTransform: true
  }
})
