import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  { text: "One in things", icon: "home", link: "/en/" },
  { text: "Two in one", icon: "creative", link: "/en/two/" },
  { text: "Three in two", icon: "creative", link: "/en/three/" },
  {
    text: "Three in all",
    icon: "edit",
    link: "/en/things/",
    prefix: "/en/things/",
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
