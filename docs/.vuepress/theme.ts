import { hopeTheme } from "vuepress-theme-hope";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://github.com/violinxsc",
  author: {
    name: "无言名",
    url: "https://github.com/violinxsc",
  },
  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "https://github.com/violinxsc",
  docsDir: "demo/src",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],
  blog: {
    medias: {
      Email: "vollionxia@qq.com",
      GitHub: "https://github.com/violinxs",
      QQ: "1801698054"
    },
  },

  locales: {
    "/": {
      navbar: navbar._,
      sidebar: sidebar._,
      footer: "千里之行，始于足下",
      displayFooter: true,
      blog: {
        description: "朝闻道，夕死可矣",
        intro: "/intro.html",
      },
    },
    "/zh/": {
      navbar: navbar.zh,
      sidebar: sidebar.zh,
      footer: "千里之行，始于足下",
      displayFooter: true,
      blog: {
        description: "朝闻道，夕死可矣",
        intro: "/zh/intro.html",
      },
    },
    "/en/": {
      navbar: navbar.en,
      sidebar: sidebar.en,
      footer: "千里之行，始于足下",
      displayFooter: true,
      blog: {
        description: "朝闻道，夕死可矣",
        intro: "/zh/intro.html",
      },
    },
  },
  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },
  plugins: {
    blog: {
      autoExcerpt: true,
    },
    comment: {
      provider: "Giscus",
      repo: "violinxsc/ending",
      repoId: "R_kgDOHkUMXw",
      category: "Announcements",
      categoryId: "DIC_kwDOHkUMX84CP9K7",
    },
    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
