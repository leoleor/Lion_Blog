import { sidebar } from "vuepress-theme-hope";

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
      children: [
        'bfc',
        '盒模型',
        '选择器'
      ],
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
