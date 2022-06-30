import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme";

export default defineUserConfig({
  base: "/ending",
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
  plugins: [
    docsearchPlugin({
      appId: "11",
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
    }),
  ],
});
