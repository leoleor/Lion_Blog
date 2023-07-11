import { sidebar } from "vuepress-theme-hope";
import { getFileName } from './path/index'

export default sidebar({
  '/articles': [
    {
      text: '静态网站',
      prefix: "site/",
      collapsible: true,
      children: [
        'githubPages',
        'githubActions'
      ]
    }
  ],
  '/accumulation': [
    {
      text: "css",
      prefix: "css/",
      collapsible: true,
      children: getFileName('./src/accumulation/css')
    },
    {
      text: "html",
      prefix: "html/",
      collapsible: true,
      children: [
        'html5'
      ],
    },
    {
      text: 'http',
      prefix: "http/",
      collapsible: true,
      children: [
        'httpVersion'
      ]
    }
  ]
});
