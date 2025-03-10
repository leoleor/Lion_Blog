import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  '/articles/',
  {
    text: "前端积累",
    icon: "study",
    children: [
      "/accumulation/CSS/index.md",
      "/accumulation/HTML/index.md",
      "/accumulation/JavaScript/index.md",
      "/accumulation/HTTP/index.md",
      "/accumulation/Browser/index.md",
      "/accumulation/Build/index.md",
      "/accumulation/HandWrite/index.md",
      "/technology/VUE2/index.md",
      "/technology/VUE3/index.md",
      "/technology/REACT/index.md",
      "/technology/UNIAPP/index.md",
      "/technology/MpWeixin/index.md"
    ],
  },
  '/diary/',
  {
    text: "关于狮子",
    icon: "people",
    link: "/intro",
  },
]);
