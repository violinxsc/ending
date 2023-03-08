import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/en/": [
    {
      text: "One in things",
      icon: "home",
      prefix: "",
      link: "/en/",
      children: "structure",
    }
  ],
  "/en/two/": [
    {
      text: "Two in one",
      icon: "creative",
      prefix: "",
      link: "/en/two/",
      children: "structure",
    },
  ],
  "/en/three/": [
    {
      text: "Three in two",
      icon: "creative",
      prefix: "",
      link: "/en/three/",
      children: "structure",
    },
  ],
  "/en/things/": [
    {
      text: "Things in three",
      icon: "creative",
      prefix: "/en/things/",
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
