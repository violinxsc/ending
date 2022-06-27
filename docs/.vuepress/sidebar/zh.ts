import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/": [
    "",
    "home",
    "slide",
  ],
  "/zh/guide/": [
    {
      text: "一生二",
      icon: "creative",
      prefix: "",
      link: "/zh/guide/",
      children: "structure",
    },
  ],
  "/zh/work/": [
    {
      text: "二生三",
      icon: "note",
      prefix: "",
      link: "/zh/work/",
      children: "structure",
    },
  ],
  "/zh/posts/": [
    {
      text: "三生万物",
      icon: "note",
      prefix: "",
      link: "/zh/posts/",
      children: [
        {
          text: "文章 1-4",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article1", "article2", "article3", "article4"],
        },
        {
          text: "文章 5-12",
          icon: "note",
          collapsable: true,
          children: [
            {
              text: "文章 5-8",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8"],
            },
            {
              text: "文章 9-12",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
      ],
    },
  ],
});
