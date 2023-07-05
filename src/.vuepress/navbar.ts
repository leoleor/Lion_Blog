import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  '/articles/',
  '/accumulation/',
  '/diary/',
  {
    text: "关于狮子",
    icon: "user",
    link: "/intro",
  },
]);
