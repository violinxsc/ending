import { sidebar } from "vuepress-theme-hope";

export const _ = sidebar({
  "/": [
    {
      text: "道生一",
      icon: "home",
      prefix: "",
      link: "/",
      children: "structure",
    }
  ],
  "/two/": [
    {
      text: "一生二",
      icon: "creative",
      prefix: "",
      link: "/two/",
      children: "structure",
    },
  ],
  "/three/": [
    {
      text: "二生三",
      icon: "creative",
      prefix: "",
      link: "/three/",
      children: "structure",
    },
  ],
  "/things/": [
    {
      text: "三生万物",
      icon: "creative",
      prefix: "/things/",
      children: [
        {
          text: "1-4",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article1", "article2", "article3", "article4"],
        },
        {
          text: "5-12",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article5", "article6", "article7", "article8", "article9", "article10", "article11", "article12"]
        },
      ],
    },
  ],
});
