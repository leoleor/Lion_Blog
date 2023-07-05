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
        'bfc'
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
  ]
});
