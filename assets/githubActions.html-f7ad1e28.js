import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as p,b as n,d as s,e as a,w as u,f as t}from"./app-2cbedeea.js";const r="/Lion_Blog/images/githubActions/jobs.png",d="/Lion_Blog/images/githubActions/demo.png",m="/Lion_Blog/images/githubActions/配置变量1.png",k="/Lion_Blog/images/githubActions/配置变量2.png",v="/Lion_Blog/images/githubActions/配置变量3.png",b="/Lion_Blog/images/githubActions/权限报错.png",g="/Lion_Blog/images/githubActions/权限1.png",h="/Lion_Blog/images/githubActions/权限2.png",y="/Lion_Blog/images/githubActions/选择构建.png",f="/Lion_Blog/images/githubActions/开始构建.png",_="/Lion_Blog/images/githubActions/完成.png",x={},A=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),j=n("code",null,"Github Actions",-1),w=n("h2",{id:"准备工作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#准备工作","aria-hidden":"true"},"#"),s(" 准备工作")],-1),G=n("li",null,[n("p",null,"准备一个 VuePress 网站")],-1),B={href:"https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fkangkanglhb88008%2Farticle%2Fdetails%2F127947544",title:"https://blog.csdn.net/kangkanglhb88008/article/details/127947544",target:"_blank",rel:"noopener noreferrer"},L={href:"https://blog.csdn.net/nxg0916/article/details/127271906",target:"_blank",rel:"noopener noreferrer"},H=t('<h2 id="了解-github-actions" tabindex="-1"><a class="header-anchor" href="#了解-github-actions" aria-hidden="true">#</a> 了解 Github Actions</h2><blockquote><p>GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。</p><p>GitHub Actions 不仅仅是 DevOps，还允许您在存储库中发生其他事件时运行工作流程。 例如，您可以运行工作流程，以便在有人在您的存储库中创建新问题时自动添加相应的标签。</p><p>GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。</p></blockquote><p>Github Actions 功能强大，这篇文章主要教大家如何自动化部署，大白话就是：<code>提交完代码后，由Github去执行一系列运维工作，我们只需要等网站更新即可</code>。</p><h2 id="了解工作流语法" tabindex="-1"><a class="header-anchor" href="#了解工作流语法" aria-hidden="true">#</a> 了解工作流语法</h2>',4),z={href:"https://docs.github.com/zh/actions/using-workflows/about-workflows",target:"_blank",rel:"noopener noreferrer"},N=t(`<h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>工作流的名称，如果省略，则使用当前文件名</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> Auto Deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="run-name" tabindex="-1"><a class="header-anchor" href="#run-name" aria-hidden="true">#</a> run-name</h3><p>从工作流生成的工作流运行的名称，如果省略，则使用提交时的commit信息</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">run-name</span><span class="token punctuation">:</span> Deploy by @$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.actor <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="on" tabindex="-1"><a class="header-anchor" href="#on" aria-hidden="true">#</a> on</h3>`,7),C={href:"https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#on",target:"_blank",rel:"noopener noreferrer"},P=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 master 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jobs" tabindex="-1"><a class="header-anchor" href="#jobs" aria-hidden="true">#</a> jobs</h3><p>一个工作流中要执行的任务，结构如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">my_first_job</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> My first job
  <span class="token key atrule">my_second_job</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> My second job
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个任务[my_first_job]下可以配置</p><ul><li><p><strong>name</strong> 任务的名称，不设置则默认[my_first_job]</p></li><li><p><strong>runs-on</strong> 运行所需要的虚拟机环境</p></li><li><p><strong>needs</strong> 各个任务间可以设置依赖关系</p></li><li><p><strong>steps</strong> 每个任务下的运行步骤，从上至下依次执行</p></li></ul><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7),S={href:"https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#jobs",target:"_blank",rel:"noopener noreferrer"},E=t('<h3 id="jobs-job-id-steps" tabindex="-1"><a class="header-anchor" href="#jobs-job-id-steps" aria-hidden="true">#</a> jobs.&lt;job_id&gt;.steps</h3><p>每一个步骤下可以设置</p><ul><li><p><strong>name</strong> 步骤名称</p></li><li><p><strong>run</strong> 需要运行的命令行程序 如：<code>npm run build</code></p></li><li><p><strong>uses</strong> 一般直接使用别人预先设置好的Actions 如：<code>actions/setup-node@v3</code> 用来安装Node环境</p></li><li><p><strong>with</strong> 使用不同的Actions需要不同的参数 如：<code>node-version: &#39;16&#39;</code> 用来选择安装的Node版本</p></li></ul><h2 id="创建工作流" tabindex="-1"><a class="header-anchor" href="#创建工作流" aria-hidden="true">#</a> 创建工作流</h2><p><strong>正片开始</strong> 为了感受完整流程，我重新创建了一个 VuePress 的demo</p><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在项目根路径下的 <code>.github/workflows</code> 目录中创建一个 deploy.yml/deploy.yaml 文件（deploy可以自定义命名）</p><p>注意：<strong>如果你已经有代码仓库，是首次创建工作流，配置好后需要将其先提交到仓库，不然是不会运行工作流的。</strong></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 工作流的名称，如果省略，则使用当前文件名</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> Auto Deploy

<span class="token comment"># 从工作流生成的工作流运行的名称，如果省略，则使用提交时的commit信息</span>
<span class="token key atrule">run-name</span><span class="token punctuation">:</span> Deploy by @$<span class="token punctuation">{</span><span class="token punctuation">{</span> github.actor <span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token comment"># 触发部署的条件</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># 每当 push 到 master 分支时触发部署</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> master

<span class="token comment"># 当前流程要执行的任务，可以是多个。[my_first_job]就是一个任务</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">my_first_job</span><span class="token punctuation">:</span>
    <span class="token comment"># 任务的名称，不设置则默认my_first_job</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> build<span class="token punctuation">-</span>and<span class="token punctuation">-</span>deploy

    <span class="token comment"># 运行所需要的虚拟机环境</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token comment"># 每个任务下的运行步骤，短横杠 - 表示一个步骤，从上至下依次执行。</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># clone 该仓库的源码到工作流中</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Clone Code
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># &quot;最近更新时间&quot;等 git 日志相关信息，需要拉取全部提交记录</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token comment"># 安装 Node 环境</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 选择要使用的 node 版本</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token string">&#39;16&#39;</span>

      <span class="token comment"># 如果你的依赖是使用npm的，用这种</span>
      <span class="token comment"># 缓存 npm node_modules</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Cache dependencies
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> ~/.npm
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>npm<span class="token punctuation">-</span>cache<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/package-lock.json&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-npm-cache-</span>

      <span class="token comment"># 安装依赖 npm</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies
        <span class="token comment"># 如果没有命中缓存才执行 npm install</span>
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.cache<span class="token punctuation">-</span>deps.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install

      <span class="token comment"># 如果你的依赖是使用yarn的，用这种</span>
      <span class="token comment"># 缓存 yarn node_modules</span>
      <span class="token comment"># - name: Cache dependencies</span>
      <span class="token comment">#   uses: actions/cache@v3</span>
      <span class="token comment">#   id: yarn-cache</span>
      <span class="token comment">#   with:</span>
      <span class="token comment">#     path: |</span><span class="token scalar string">
      #       **/node_modules
      #     key: \${{ runner.os }}-yarn-\${{ hashFiles(&#39;**/yarn.lock&#39;) }}
      #     restore-keys: |
      #       \${{ runner.os }}-yarn-</span>

      <span class="token comment"># 安装依赖 yarn</span>
      <span class="token comment"># - name: Install dependencies</span>
      <span class="token comment">#   # 如果没有命中缓存才执行 npm install</span>
      <span class="token comment">#   if: steps.npm-cache.outputs.cache-hit != &#39;true&#39;</span>
      <span class="token comment">#   run: yarn --frozen-lockfile</span>

      <span class="token comment"># 运行构建脚本</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run Build Script
        <span class="token key atrule">run</span><span class="token punctuation">:</span> npm run build

      <span class="token comment"># 部署到 GitHub Pages</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy to GitHub Pages
        <span class="token comment"># 此actions的官方文档 https://github.com/JamesIves/github-pages-deploy-action</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># 要部署的文件夹，必填</span>
          <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> docs/.vuepress/dist
          <span class="token comment"># 希望部署的分支，默认gh-pages</span>
          <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># # 仓库范围的访问令牌，可以将个人令牌的值存储在GitHub Secrets中</span>
          <span class="token comment"># # 默认情况是不需要填的，如果您需要更多权限，例如部署到另一个存储库才需要填写</span>
          <span class="token comment"># # ACCESS_TOKEN 对应GitHub Secrets中设置的字段，不要照搬</span>
          <span class="token comment"># TOKEN: \${{ secrets.ACCESS_TOKEN }}</span>
          <span class="token comment"># # 部署到GitHub的不同仓库 &lt;用户名&gt;/&lt;仓库名&gt;</span>
          <span class="token comment"># # 此选项必须配置了TOKEN才能正常执行</span>
          <span class="token comment"># REPOSITORY-NAME: leoleor/leo2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="仓库的设置" tabindex="-1"><a class="header-anchor" href="#仓库的设置" aria-hidden="true">#</a> 仓库的设置</h2><h3 id="配置-github-secrets" tabindex="-1"><a class="header-anchor" href="#配置-github-secrets" aria-hidden="true">#</a> 配置 GitHub Secrets</h3><p>用大白话描述下：<code>执行工作流的过程中，需要使用一些敏感数据（如个人令牌、服务器账号密码等），不能直接写在文件中，通过key/value的形式配置在 GitHub 中，使用的时候只需要输入key就能找到对应的value，这样就避免了将敏感数据直接暴露在文件中。</code></p><p>配置过程如下：</p><figure><img src="`+m+'" alt="配置变量1" tabindex="0" loading="lazy"><figcaption>配置变量1</figcaption></figure><figure><img src="'+k+'" alt="配置变量2" tabindex="0" loading="lazy"><figcaption>配置变量2</figcaption></figure><p>配置完成后：</p><figure><img src="'+v+'" alt="配置变量3" tabindex="0" loading="lazy"><figcaption>配置变量3</figcaption></figure><h3 id="开启工作流权限" tabindex="-1"><a class="header-anchor" href="#开启工作流权限" aria-hidden="true">#</a> 开启工作流权限</h3><p>如果没有开启，执行工作流会报错</p><figure><img src="'+b+'" alt="权限报错" tabindex="0" loading="lazy"><figcaption>权限报错</figcaption></figure><p>配置如下：</p><figure><img src="'+g+'" alt="权限1" tabindex="0" loading="lazy"><figcaption>权限1</figcaption></figure><figure><img src="'+h+'" alt="权限2" tabindex="0" loading="lazy"><figcaption>权限2</figcaption></figure><h2 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码" aria-hidden="true">#</a> 提交代码</h2><p>代码提交到仓库后，工作流就开始执行，需要等一会，待 gh-pages 分支创建后，来到如图位置，Source 选择 <code>Deploy from a branch</code> ，Branch 选择 <code>gh-pages</code> 分支，点击 <code>save</code> 保存</p><figure><img src="'+y+'" alt="选择构建" tabindex="0" loading="lazy"><figcaption>选择构建</figcaption></figure><p>然后会看到 <code>Actions</code> 栏这里又开始运行一个工作流</p><figure><img src="'+f+'" alt="开始构建" tabindex="0" loading="lazy"><figcaption>开始构建</figcaption></figure><p>稍等片刻执行完毕，看到 GitHub Pages 站点启动成功，就可以访问网站了！</p><figure><img src="'+_+'" alt="完成" tabindex="0" loading="lazy"><figcaption>完成</figcaption></figure><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>总体流程下来可以总结为三步：创建项目&amp;工作流脚本、代码仓库的设置、提交代码等待执行，主要是理解工作流的语法。OK 文章到此结束，希望对刚了解 Github Actions 得你有所帮助！</p>',32);function O(D,F){const l=i("RouterLink"),e=i("ExternalLinkIcon");return c(),p("div",null,[A,n("p",null,[s("上一篇文章 "),a(l,{to:"/articles/site/githubPages.html"},{default:u(()=>[s("一份超详细VuePress + Github Pages教程")]),_:1}),s(" 中详细介绍了 VuePress 的搭建和部署到 GitHub Pages 上，其中部署 GitHub Pages 采用的是手动部署。这篇文章教大家另一种部署方法 "),j,s("，文章还是以部署 VuePress 静态网站为例：")]),w,n("ul",null,[G,n("li",null,[n("p",null,[s("完成 "),n("a",B,[s("ssh的配置"),a(e)])])]),n("li",null,[n("p",null,[s("创建 "),n("a",L,[s("GitHub个人令牌"),a(e)])])])]),H,n("p",null,[s("注意：这里只挑常见且易懂的语法，如果需要完整的可以自行查看 "),n("a",z,[s("GitHub文档"),a(e)])]),N,n("p",null,[s("触发部署的条件，更多: "),n("a",C,[s("文档传送门"),a(e)])]),P,n("ul",null,[n("li",null,[s("... "),n("a",S,[s("文档传送门"),a(e)])])]),E])}const I=o(x,[["render",O],["__file","githubActions.html.vue"]]);export{I as default};
