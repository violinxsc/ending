# github 的仓库开启giscus的评论插件

- 配置页面地址：[https://giscus.app/zh-CN](https://giscus.app/zh-CN)

  ### 需要满足的条件

  选择 giscus 连接到的仓库。请确保：

  1. 此仓库是公开的，否则访客将无法查看 discussion。
  2. **[giscus](https://github.com/apps/giscus) app 已安装**否则访客将无法评论和回应。
  3. **Discussions**功能已在你的仓库中启用。
  
- 跟着配置指导生成具体配置

  ```
  <script src="https://giscus.app/client.js"
          data-repo="violinxsc/ending"
          data-repo-id="R_kgDOHkUMXw"
          data-category="Announcements"
          data-category-id="DIC_kwDOHkUMX84CP9K7"
          data-mapping="pathname"
          data-reactions-enabled="1"
          data-emit-metadata="0"
          data-input-position="bottom"
          data-theme="light"
          data-lang="zh-CN"
          crossorigin="anonymous"
          async>
  </script>
  ```

  
