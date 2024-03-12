---
title: '一份超详细VuePress + Github Pages教程'
date: 2023-06-06 09:39:00
category:
  - 教程
tag:
  - VuePress
  - GithubPages
star: true
sticky: true  
article: true
---

## 前言

个人认为，有自己的个人博客是一种很酷的象征，同时在求职的时候，也会给人留下一个良好的印象。所以我一直想搞一个自己的博客网站，但是想到搞网站还要学习 `后端知识+服务器知识` ，我就失去动力了...

最近发现了一个神奇的工具 [VuePress](https://v2.vuepress.vuejs.org/zh/) ，它满足了我所有的需求

*   静态网站生成器（不用另外学后端知识啦）
*   路由会根据 Markdown 文件的相对路径来自动生成（约定式路由）
*   可以部署到 GitHub 上（没有自己的服务器也可以部署哇）
*   V2.0版本支持 `Vue3 + TypeScript + Vite` （就是你了）

于是立马开始啃文档，动手搭建自己的博客网站啦！

> 插播一小段感慨：说来惭愧，我是最近几天才知道 VuePress 的，但它其实在2018-4-12就发布了。我还是因为掘金文章的Markdown主题里有一个 `vuepress` 主题，觉得挺好看的，以为就是一个模仿vue官网主题的主题名而已，然后还是好奇搜了下，才发现原来有 VuePress 这个工具。

## 上手

### 依赖环境

需要满足`Node.js v16.19.0+`，推荐一个好用的node版本管理工具 [NVM](https://www.cnblogs.com/dreamsqin/p/10885082.html) ，可以对node版本进行下载/卸载/切换

### 创建目录并进入目录

可以手动创建也可以用命令创建

```sh
mkdir my-blog
cd my-blog
```

### 初始化项目&&安装依赖

初始化项目生成package.json文件

```sh
npm init
```

根据个人习惯选择包管理器npm/yarn/pnpm

```sh
npm install -D vuepress@next 或
yarn add -D vuepress@next 或
pnpm add -D vuepress@next @vuepress/client@next vue
```

### 初始化仓库

初始化git仓库

```sh
git init
```

添加 `.gitignore` 文件

```.gitignore
node_modules
.temp
.cache
dist
```

### 在package.json中添加命令

```json
{
  "scripts": {
    "dev": "vuepress dev docs", // 本地运行项目
    "build": "vuepress build docs" // 构建项目
  }
}
```

### 创建第一篇文档

在项目根目录下创建docs文件夹，再往docs文件夹下创建README.md文档，或者命令一步到位（但是命令会有乱码问题，下面会讲到）

```sh
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

### 本地启动运行

```sh
npm run dev
```

### 乱码问题

如果整个流程跑下来，页面出现乱码，`请用记事本方式打开乱码的 markdown 文件，另存为的同时修改文件编码为 UTF-8 即可`。我发现凡是用命令创建的文件都会乱码，手动创建的不会。

![](/images/githubPages/乱码问题.jpg)

## 进阶

简单的demo完成后，该开始“装饰”一下网站了。我们根据官方提供的 `默认主题` 进行“装饰”。

为了方便理解该框架，我用普通vue项目做了下对比——

![](/images/githubPages/vuepress目录理解.png)

### 站点配置

在.vuepress文件夹下创建config.js配置文件，这是整个网站的配置文件，支持 `.vuepress/config.js` 和 `.vuepress/config.ts` ，下面是基本的站点配置

```js
export default {
  lang: 'zh-CN',
  title: '一只攻城狮',
  description: '网站描述',
  head: [['link', { rel: 'icon', href: '/bg.jpg' }]],
}
```

### 添加导航栏

```js
import { defaultTheme } from '@vuepress/theme-default'

export default {
  ...
  theme: defaultTheme({
    navbar: [
      // 单个 link可以是外部链接'https://juejin.cn/user/4107431174222391'
      {
        text: '首页',
        link: '/',
      },
      // 下拉 - children为数组
      // children的text默认情况下：md文件的h1标题 -> children的key值
      {
        text: 'css',
        children: ['/pages/css/css01.md', '/pages/css/css02.md'],
      },
      // 下拉 - children为对象数组
      // children的text自定义
      {
        text: 'html',
        children: [
          {
            text: 'html1',
            link: '/pages/html/html01.md',
            // 该元素将一直处于激活状态
            activeMatch: '/',
          },
          {
            text: 'html2',
            link: '/pages/html/html02.md',
            // 该元素在当前路由路径是 /pages/js/ 开头时激活 支持正则表达式
            activeMatch: '^/pages/js/',
          },
        ],
      },
      // 下拉嵌套 - 最大深度为 2
      {
        text: 'js',
        children: [
          {
            text: 'js基础',
            children: ['/pages/js/js01.md', '/pages/js/js02.md'],
          },
          {
            text: 'js高级',
            children: ['/pages/js/js03.md'],
          },
        ],
      }
    ],
  }),
  ...
}
```

看看效果，可以根据自己的需要搭配着用

<p align="center"><img src="/images/githubPages/下拉-children数组.jpg" alt="下拉.png"></p>

<p align=center>下拉 - children为数组</p>

***

<p align="center"><img src="/images/githubPages/下拉-children对象数组.jpg" alt="下拉2.png"></p>

<p align=center>下拉 - children为对象数组</p>

***

<p align="center"><img src="/images/githubPages/下拉嵌套.jpg" alt="下拉嵌套.png"></p>

<p align=center>下拉嵌套</p>

***

### 添加侧边栏

```js
import { defaultTheme } from '@vuepress/theme-default'

export default {
  ...
  theme: defaultTheme({
    // 侧边栏数组 - 所有页面用一个
    // sidebar: [
    //   {
    //     text: '网站',
    //     children: [
    //       {
    //         text: 'vuepress',
    //         link: 'https://v2.vuepress.vuejs.org/zh/',
    //         children: [], // 可以套娃 7、8层不成问题
    //       },
    //     ],
    //   },
    // ],
    // 侧边栏对象 - 不用页面配置不同的
    sidebar: {
      '/pages/js/': [
        {
          text: 'js1',
          collapsible: true, // 可折叠
          children: ['/pages/js/js01.md', '/pages/js/js02.md'],
        },
        {
          text: 'js2',
          collapsible: true,
          children: ['/pages/js/js03.md'],
        },
      ],
      '/pages/css/': [
        {
          text: 'css',
          collapsible: true,
          children: ['/pages/css/css01.md', '/pages/css/css02.md'],
        },
      ],
      '/pages/html/': [
        {
          text: 'html',
          collapsible: true,
          children: ['/pages/html/html01.md', '/pages/html/html02.md'],
        },
      ],
    },
  }),
  ...
}
```

配置完导航栏和侧边栏后，网站慢慢有那味了\~看看效果图——

![](/images/githubPages/侧边栏+导航栏.png)

### 页面配置

页面可以通过 Frontmatter 配置，Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。

[首页](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5) 配置 `home: true` 可以将该页面设定为首页，将下面代码复制到 `docs/README.md` 里，就可以生成官方默认首页

```yaml
---
home: true
heroImage: /1.jpg // 图片资源放到docs/public下
heroImageDark: /2.jpg

actions:
  - text: 快速上手
    link: /pages/css/css01.html
    type: primary
  - text: 项目简介
    link: /pages/css/css02
    type: secondary

features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue 驱动
    details: 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

![](/images/githubPages/默认首页.png)

[普通页面](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html) 普通页面也可以根据需要配置，如页面的标题，如果不设置默认是取文档的第一个h1作为标题

```yaml
---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---
```

### 多语言支持

说实话，一开始我以为配置了能自动翻译网站，心想：这么牛！于是带着好奇捣鼓了一下发现其实并不是，只不过是把站点配置、主题配置、页面内容写了两份\~

要配置多语言，首先得把项目结构改成这样

```text
docs
├─ pages
├─ README.md
└─ zh
   ├─ pages
   └─ README.md
```

然后在配置文件里配置locales，支持配置这四个字段 `lang` `title` `description` `head`，不配置就会用默认用站点配置的

```js
export default {
  ...
  locales: {
    '/': {
      lang: 'en-US',
      title: 'a siege lion',
      description: 'Who is missing the past',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '一只攻城狮',
      description: '谁在怀念 怀念从前',
    },
  },
  ...
 }
```

默认主题的导航栏和侧边栏也是用同样的方法

```js
export default {
  ...
  theme: defaultTheme({
    navbar: [略],
    sidebar: [略],
    locales: {
      '/': {
        navbar: [{ text: 'home', link: '/' }],
        sidebar: [同理]
      },
      '/zh/': {
        navbar: [{ text: '首页', link: '/zh/' }],
        sidebar: [同理] // 注意里面的路径，需要在原本pages上加/zh/
      },
    }
  }),
  ...
}
```

最后是md页面的内容，我这个语言渣渣就不展示了。（小声bb，网站没达到一定的知名度，这玩意就只能装X，就当是学学思路吧\~）

### 搜索框

官方提供了两个插件 `search` `docsearch` ，前者是根据你的页面，在本地生成搜索索引，后者是将 [Algolia DocSearch](https://docsearch.algolia.com/) 集成到 VuePress 中，为你的文档网站提供搜索功能；前者能直接用，后者需要 [提交你的网站 URL](https://docsearch.algolia.com/apply/) 来加入 DocSearch 项目，用 [apiKey](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#apikey) 和 [indexName](https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#indexname) 去配置插件。

安装插件然后在配置文件中配置plugins

```sh
npm i -D @vuepress/plugin-search@next

npm i -D @vuepress/plugin-docsearch@next
```

```js
import { searchPlugin } from '@vuepress/plugin-search'
// import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default {
  ...
  plugins: [
    searchPlugin({
      // 配置
    }),
    // docsearchPlugin({
    //   // 配置
    // })
  ],
  ...
}
```

### 其他主题

如果你不喜欢默认的主题，还可以到 [NPM](https://www.npmjs.com/search?q=keywords:vuepress-theme) 上下载更多主题，更厉害的还可以自己制作一个主题。

## 部署

以部署到 Github Pages 为例：

### 创建仓库

首先在 Github 上新建一个仓库，有两种地址可选：`<USERNAME>` - 用户名、 `REPO` - 仓库名

1. `https://<USERNAME>.github.io/`
2. `https://<USERNAME>.github.io/<REPO>/`

如果是第一种，创建的仓库应为 `<USERNAME>.github.io`， `base` 默认为 `'/'` 因此不需要设置 

如果是第二种，仓库名随意，这里我取名为：`Lion_Blog`，相应地，在 `config.js` 添加一个 `base` 路径配置

```js
module.exports = {
  ...
  // github 仓库名
  base: '/Lion_Blog/',
  ...
}
```

### 创建脚本

然后在项目根目录创建 `deploy.sh` 

``` bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误

set -e

# 生成静态文件

npm run build

# 进入生成的文件夹

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'init: blog'

git push -f <仓库的SSH地址> master:gh-pages

cd -
```

### 执行脚本

最后执行脚本 `deploy.sh`，需要注意的是得用 `Git Bash` 去执行

```bash
sh deploy.sh
```

### 部署成功

脚本执行成功后，代码就会被上传到指定仓库的gh-pages分支，gh-pages分支里的就是项目构建后的dist文件，你也可以把源码上传到master分支或其他分支作为项目源分支。

![](/images/githubPages/GithubPages.png)

### 注意事项

*   部署 Github Pages 首先得完成 [ssh的配置](https://blog.csdn.net/kangkanglhb88008/article/details/127947544)

*   如果你之前配置过ssh，但是出现 `REMOTE HOST IDENTIFICATION HAS CHANGED`，请看 [hosts过期问题](https://www.cnblogs.com/morango/p/17269515.html)

## 总结

至此一个自己的博客网站就完成啦，其实 [VuePress](https://v2.vuepress.vuejs.org/zh/) 还有很多配置和玩法，我只不过是抛砖引玉，与大家共勉！
