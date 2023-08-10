import { sidebar } from "vuepress-theme-hope";
import { getFileName } from './path/index'

export default sidebar({
  '/articles': [
    {
      text: '静态网站',
      prefix: "site/",
      collapsible: true,
      children: getFileName('./src/articles/site')
    }
  ],
  '/accumulation': [
    {
      text: "CSS",
      prefix: "CSS/",
      collapsible: true,
      children: getFileName('./src/accumulation/CSS')
    },
    {
      text: "HTML",
      prefix: "HTML/",
      collapsible: true,
      children: getFileName('./src/accumulation/HTML')
    },
    {
      text: "JavaScript",
      prefix: "JavaScript/",
      collapsible: true,
      children: getFileName('./src/accumulation/JavaScript')
    },
    {
      text: 'HTTP',
      prefix: "HTTP/",
      collapsible: true,
      children: getFileName('./src/accumulation/HTTP')
    },
    {
      text: '浏览器',
      prefix: "Browser/",
      collapsible: true,
      children: getFileName('./src/accumulation/Browser')
    },
    {
      text: '手写代码',
      prefix: "HandWrite/",
      collapsible: true,
      children: getFileName('./src/accumulation/HandWrite')
    },
    {
      text: '构建工具',
      prefix: "Build/",
      collapsible: true,
      children: getFileName('./src/accumulation/Build')
    }
  ],
  '/technology': [
    {
      text: 'VUE模块',
      prefix: "VUE/",
      collapsible: true,
      children: getFileName('./src/technology/VUE')
    },
    {
      text: 'REACT模块',
      prefix: "REACT/",
      collapsible: true,
      children: getFileName('./src/technology/REACT')
    },
    {
      text: 'UNIAPP模块',
      prefix: "UNIAPP/",
      collapsible: true,
      children: getFileName('./src/technology/UNIAPP')
    },
    {
      text: '微信小程序',
      prefix: "MpWeixin/",
      collapsible: true,
      children: getFileName('./src/technology/MpWeixin')
    }
  ]
});
