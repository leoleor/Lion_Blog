import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/Lion_Blog/",

  lang: "zh-CN",
  title: "一只攻城狮",
  description: "一只前端攻城狮",

  theme,
  
  plugins: [
    searchPlugin({
      // 你的选项
    }),
  ],

  markdown:{
    headers:{
      level: [2,3,4]
    }
  }

  // Enable it with pwa
  // shouldPrefetch: false,
});
