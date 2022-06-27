import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  base: "./",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "终",
      description: "终",
    },
    "/en/": {
      lang: "en-US",
      title: "Ending",
      description: "Ending",
    },
  },
  theme,
});
