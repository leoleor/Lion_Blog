import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  '/articles/',
  {
    text: "前端积累",
    icon: "study",
    children: ["/accumulation/index.md", "/technology/index.md"],
  },
  '/diary/',
  {
    text: "关于狮子",
    icon: "people",
    link: "/intro",
  },
]);
