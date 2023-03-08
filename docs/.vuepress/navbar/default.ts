import { navbar } from "vuepress-theme-hope";

export const _ = navbar([
  { text: "道生一", icon: "home", link: "/" },
  { text: "一生二", icon: "creative", link: "/two/" },
  { text: "二生三", icon: "creative", link: "/three/" },
  {
    text: "三生万物",
    icon: "creative",
    link: "/things/",
    prefix: "/things/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
          "article/article9",
          "article/article10",
          "article/article11",
          "article/article12",
        ],
      },
    ],
  }
]);
