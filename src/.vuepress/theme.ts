import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  // 当前网站部署到的域名
  hostname: "https://leoleor.github.io",

  // 文章显示的默认作者
  author: {
    name: "狮子",
  },

  // 站点图标
  favicon: '/favicon.ico',

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 博客选项
  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      Email: "mailto:hzr1642921219@163.com",
      Gitee: "https://gitee.com/huang-zhenrong",
      GitHub: "https://github.com/leoleor",
      // Gitlab: "https://example.com",
      // Wechat: "https://example.com",
    },
  },

  // 加密页面
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 导航栏图标，应为基于 .vuepress/public 文件夹的绝对路径。
  logo: "/logo.svg",

  // 仓库配置，用于在导航栏中显示仓库链接。
  repo: "leoleor/Lion_Blog",

  // 文档在仓库中的目录
  docsDir: "src",

  // 文档存放的分值
  docsBranch: 'master',

  // 页脚的默认内容
  footer: "谁在怀念 怀念从前",

  // 是否默认显示页脚
  displayFooter: true,

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  // 字体图标资源链接
  iconAssets: 'iconfont',

  // 打印按鈕
  print: false,
  
  // 全屏按鈕
  fullscreen: true,

  // 插件
  plugins: {
    blog: true,

    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
