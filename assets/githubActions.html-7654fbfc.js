const e=JSON.parse('{"key":"v-1f8c1e6e","path":"/articles/site/githubActions.html","title":"小白都能看懂的 VuePress + Github Actions","lang":"zh-CN","frontmatter":{"title":"小白都能看懂的 VuePress + Github Actions","date":"2023-06-19T08:33:00.000Z","category":["教程"],"tag":["VuePress","GithubPages"],"star":true,"sticky":true,"article":true,"description":"前言 上一篇文章 一份超详细VuePress + Github Pages教程 中详细介绍了 VuePress 的搭建和部署到 GitHub Pages 上，其中部署 GitHub Pages 采用的是手动部署。这篇文章教大家另一种部署方法 Github Actions，文章还是以部署 VuePress 静态网站为例： 准备工作 准备一个 VuePress 网站 完成 ssh的配置 创建 GitHub个人令牌","head":[["meta",{"property":"og:url","content":"https://leoleor.github.io/Lion_Blog/articles/site/githubActions.html"}],["meta",{"property":"og:site_name","content":"一只攻城狮"}],["meta",{"property":"og:title","content":"小白都能看懂的 VuePress + Github Actions"}],["meta",{"property":"og:description","content":"前言 上一篇文章 一份超详细VuePress + Github Pages教程 中详细介绍了 VuePress 的搭建和部署到 GitHub Pages 上，其中部署 GitHub Pages 采用的是手动部署。这篇文章教大家另一种部署方法 Github Actions，文章还是以部署 VuePress 静态网站为例： 准备工作 准备一个 VuePress 网站 完成 ssh的配置 创建 GitHub个人令牌"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-10T12:39:18.000Z"}],["meta",{"property":"article:author","content":"狮子"}],["meta",{"property":"article:tag","content":"VuePress"}],["meta",{"property":"article:tag","content":"GithubPages"}],["meta",{"property":"article:published_time","content":"2023-06-19T08:33:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-10T12:39:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"小白都能看懂的 VuePress + Github Actions\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-19T08:33:00.000Z\\",\\"dateModified\\":\\"2023-08-10T12:39:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狮子\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"准备工作","slug":"准备工作","link":"#准备工作","children":[]},{"level":2,"title":"了解 Github Actions","slug":"了解-github-actions","link":"#了解-github-actions","children":[]},{"level":2,"title":"了解工作流语法","slug":"了解工作流语法","link":"#了解工作流语法","children":[{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"run-name","slug":"run-name","link":"#run-name","children":[]},{"level":3,"title":"on","slug":"on","link":"#on","children":[]},{"level":3,"title":"jobs","slug":"jobs","link":"#jobs","children":[]},{"level":3,"title":"jobs.<job_id>.steps","slug":"jobs-job-id-steps","link":"#jobs-job-id-steps","children":[]}]},{"level":2,"title":"创建工作流","slug":"创建工作流","link":"#创建工作流","children":[]},{"level":2,"title":"仓库的设置","slug":"仓库的设置","link":"#仓库的设置","children":[{"level":3,"title":"配置 GitHub Secrets","slug":"配置-github-secrets","link":"#配置-github-secrets","children":[]},{"level":3,"title":"开启工作流权限","slug":"开启工作流权限","link":"#开启工作流权限","children":[]}]},{"level":2,"title":"提交代码","slug":"提交代码","link":"#提交代码","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1691671158000,"updatedTime":1691671158000,"contributors":[{"name":"狮子","email":"hzr1642921219@163.com","commits":1}]},"readingTime":{"minutes":6.16,"words":1848},"filePathRelative":"articles/site/githubActions.md","localizedDate":"2023年6月19日","excerpt":"<h2> 前言</h2>\\n<p>上一篇文章 <a href=\\"/Lion_Blog/articles/site/githubPages.html\\" target=\\"blank\\">一份超详细VuePress + Github Pages教程</a> 中详细介绍了 VuePress 的搭建和部署到 GitHub Pages 上，其中部署 GitHub Pages 采用的是手动部署。这篇文章教大家另一种部署方法 <code>Github Actions</code>，文章还是以部署 VuePress 静态网站为例：</p>\\n<h2> 准备工作</h2>\\n<ul>\\n<li>\\n<p>准备一个 VuePress 网站</p>\\n</li>\\n<li>\\n<p>完成 <a href=\\"https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fkangkanglhb88008%2Farticle%2Fdetails%2F127947544\\" title=\\"https://blog.csdn.net/kangkanglhb88008/article/details/127947544\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">ssh的配置</a></p>\\n</li>\\n<li>\\n<p>创建 <a href=\\"https://blog.csdn.net/nxg0916/article/details/127271906\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">GitHub个人令牌</a></p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
