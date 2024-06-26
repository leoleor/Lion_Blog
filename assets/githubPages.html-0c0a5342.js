import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c as o,b as s,d as n,e,f as p}from"./app-6eb32c14.js";const c="/Lion_Blog/images/githubPages/乱码问题.jpg",r="/Lion_Blog/images/githubPages/vuepress目录理解.png",d="/Lion_Blog/images/githubPages/下拉-children数组.jpg",u="/Lion_Blog/images/githubPages/下拉-children对象数组.jpg",k="/Lion_Blog/images/githubPages/下拉嵌套.jpg",v="/Lion_Blog/images/githubPages/侧边栏+导航栏.png",m="/Lion_Blog/images/githubPages/默认首页.png",b="/Lion_Blog/images/githubPages/GithubPages.png",h={},g=s("h2",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),n(" 前言")],-1),y=s("p",null,[n("个人认为，有自己的个人博客是一种很酷的象征，同时在求职的时候，也会给人留下一个良好的印象。所以我一直想搞一个自己的博客网站，但是想到搞网站还要学习 "),s("code",null,"后端知识+服务器知识"),n(" ，我就失去动力了...")],-1),f={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},_=p('<ul><li>静态网站生成器（不用另外学后端知识啦）</li><li>路由会根据 Markdown 文件的相对路径来自动生成（约定式路由）</li><li>可以部署到 GitHub 上（没有自己的服务器也可以部署哇）</li><li>V2.0版本支持 <code>Vue3 + TypeScript + Vite</code> （就是你了）</li></ul><p>于是立马开始啃文档，动手搭建自己的博客网站啦！</p><blockquote><p>插播一小段感慨：说来惭愧，我是最近几天才知道 VuePress 的，但它其实在2018-4-12就发布了。我还是因为掘金文章的Markdown主题里有一个 <code>vuepress</code> 主题，觉得挺好看的，以为就是一个模仿vue官网主题的主题名而已，然后还是好奇搜了下，才发现原来有 VuePress 这个工具。</p></blockquote><h2 id="上手" tabindex="-1"><a class="header-anchor" href="#上手" aria-hidden="true">#</a> 上手</h2><h3 id="依赖环境" tabindex="-1"><a class="header-anchor" href="#依赖环境" aria-hidden="true">#</a> 依赖环境</h3>',5),x=s("code",null,"Node.js v16.19.0+",-1),j={href:"https://www.cnblogs.com/dreamsqin/p/10885082.html",target:"_blank",rel:"noopener noreferrer"},w=p(`<h3 id="创建目录并进入目录" tabindex="-1"><a class="header-anchor" href="#创建目录并进入目录" aria-hidden="true">#</a> 创建目录并进入目录</h3><p>可以手动创建也可以用命令创建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> my-blog
<span class="token builtin class-name">cd</span> my-blog
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化项目-安装依赖" tabindex="-1"><a class="header-anchor" href="#初始化项目-安装依赖" aria-hidden="true">#</a> 初始化项目&amp;&amp;安装依赖</h3><p>初始化项目生成package.json文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根据个人习惯选择包管理器npm/yarn/pnpm</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next 或
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next 或
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vuepress@next @vuepress/client@next vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="初始化仓库" tabindex="-1"><a class="header-anchor" href="#初始化仓库" aria-hidden="true">#</a> 初始化仓库</h3><p>初始化git仓库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加 <code>.gitignore</code> 文件</p><div class="language-.gitignore line-numbers-mode" data-ext=".gitignore"><pre class="language-.gitignore"><code>node_modules
.temp
.cache
dist
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在package-json中添加命令" tabindex="-1"><a class="header-anchor" href="#在package-json中添加命令" aria-hidden="true">#</a> 在package.json中添加命令</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 本地运行项目</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span> <span class="token comment">// 构建项目</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建第一篇文档" tabindex="-1"><a class="header-anchor" href="#创建第一篇文档" aria-hidden="true">#</a> 创建第一篇文档</h3><p>在项目根目录下创建docs文件夹，再往docs文件夹下创建README.md文档，或者命令一步到位（但是命令会有乱码问题，下面会讲到）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> docs
<span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VuePress&#39;</span> <span class="token operator">&gt;</span> docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地启动运行" tabindex="-1"><a class="header-anchor" href="#本地启动运行" aria-hidden="true">#</a> 本地启动运行</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="乱码问题" tabindex="-1"><a class="header-anchor" href="#乱码问题" aria-hidden="true">#</a> 乱码问题</h3><p>如果整个流程跑下来，页面出现乱码，<code>请用记事本方式打开乱码的 markdown 文件，另存为的同时修改文件编码为 UTF-8 即可</code>。我发现凡是用命令创建的文件都会乱码，手动创建的不会。</p><figure><img src="`+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h2><p>简单的demo完成后，该开始“装饰”一下网站了。我们根据官方提供的 <code>默认主题</code> 进行“装饰”。</p><p>为了方便理解该框架，我用普通vue项目做了下对比——</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="站点配置" tabindex="-1"><a class="header-anchor" href="#站点配置" aria-hidden="true">#</a> 站点配置</h3><p>在.vuepress文件夹下创建config.js配置文件，这是整个网站的配置文件，支持 <code>.vuepress/config.js</code> 和 <code>.vuepress/config.ts</code> ，下面是基本的站点配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;一只攻城狮&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;网站描述&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;/bg.jpg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加导航栏" tabindex="-1"><a class="header-anchor" href="#添加导航栏" aria-hidden="true">#</a> 添加导航栏</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// 单个 link可以是外部链接&#39;https://juejin.cn/user/4107431174222391&#39;</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 下拉 - children为数组</span>
      <span class="token comment">// children的text默认情况下：md文件的h1标题 -&gt; children的key值</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/pages/css/css01.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/pages/css/css02.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 下拉 - children为对象数组</span>
      <span class="token comment">// children的text自定义</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;html1&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/pages/html/html01.md&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 该元素将一直处于激活状态</span>
            <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;html2&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/pages/html/html02.md&#39;</span><span class="token punctuation">,</span>
            <span class="token comment">// 该元素在当前路由路径是 /pages/js/ 开头时激活 支持正则表达式</span>
            <span class="token literal-property property">activeMatch</span><span class="token operator">:</span> <span class="token string">&#39;^/pages/js/&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// 下拉嵌套 - 最大深度为 2</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;js基础&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/pages/js/js01.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/pages/js/js02.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;js高级&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/pages/js/js03.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看看效果，可以根据自己的需要搭配着用</p><p align="center"><img src="`+d+'" alt="下拉.png"></p><p align="center">下拉 - children为数组</p><hr><p align="center"><img src="'+u+'" alt="下拉2.png"></p><p align="center">下拉 - children为对象数组</p><hr><p align="center"><img src="'+k+`" alt="下拉嵌套.png"></p><p align="center">下拉嵌套</p><hr><h3 id="添加侧边栏" tabindex="-1"><a class="header-anchor" href="#添加侧边栏" aria-hidden="true">#</a> 添加侧边栏</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/theme-default&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 侧边栏数组 - 所有页面用一个</span>
    <span class="token comment">// sidebar: [</span>
    <span class="token comment">//   {</span>
    <span class="token comment">//     text: &#39;网站&#39;,</span>
    <span class="token comment">//     children: [</span>
    <span class="token comment">//       {</span>
    <span class="token comment">//         text: &#39;vuepress&#39;,</span>
    <span class="token comment">//         link: &#39;https://v2.vuepress.vuejs.org/zh/&#39;,</span>
    <span class="token comment">//         children: [], // 可以套娃 7、8层不成问题</span>
    <span class="token comment">//       },</span>
    <span class="token comment">//     ],</span>
    <span class="token comment">//   },</span>
    <span class="token comment">// ],</span>
    <span class="token comment">// 侧边栏对象 - 不用页面配置不同的</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/pages/js/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;js1&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可折叠</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/pages/js/js01.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/pages/js/js02.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;js2&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/pages/js/js03.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/pages/css/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;css&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/pages/css/css01.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/pages/css/css02.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/pages/html/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;/pages/html/html01.md&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/pages/html/html02.md&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完导航栏和侧边栏后，网站慢慢有那味了~看看效果图——</p><figure><img src="`+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="页面配置" tabindex="-1"><a class="header-anchor" href="#页面配置" aria-hidden="true">#</a> 页面配置</h3><p>页面可以通过 Frontmatter 配置，Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。</p>',48),E={href:"https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"},P=s("code",null,"home: true",-1),M=s("code",null,"docs/README.md",-1),z=p(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /1.jpg // 图片资源放到docs/public下
<span class="token key atrule">heroImageDark</span><span class="token punctuation">:</span> /2.jpg

<span class="token key atrule">actions</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 快速上手
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /pages/css/css01.html
    <span class="token key atrule">type</span><span class="token punctuation">:</span> primary
  <span class="token punctuation">-</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> 项目简介
    <span class="token key atrule">link</span><span class="token punctuation">:</span> /pages/css/css02
    <span class="token key atrule">type</span><span class="token punctuation">:</span> secondary

<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 简洁至上
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue 驱动
    <span class="token key atrule">details</span><span class="token punctuation">:</span> 享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> 高性能
    <span class="token key atrule">details</span><span class="token punctuation">:</span> VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。

<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright © 2018<span class="token punctuation">-</span>present Evan You
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),V={href:"https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html",target:"_blank",rel:"noopener noreferrer"},N=p(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">---</span>
<span class="token key atrule">lang</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token key atrule">title</span><span class="token punctuation">:</span> 页面的标题
<span class="token key atrule">description</span><span class="token punctuation">:</span> 页面的描述
<span class="token punctuation">---</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h3><p>说实话，一开始我以为配置了能自动翻译网站，心想：这么牛！于是带着好奇捣鼓了一下发现其实并不是，只不过是把站点配置、主题配置、页面内容写了两份~</p><p>要配置多语言，首先得把项目结构改成这样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docs
├─ pages
├─ README.md
└─ zh
   ├─ pages
   └─ README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在配置文件里配置locales，支持配置这四个字段 <code>lang</code> <code>title</code> <code>description</code> <code>head</code>，不配置就会用默认用站点配置的</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;a siege lion&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;Who is missing the past&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;一只攻城狮&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;谁在怀念 怀念从前&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认主题的导航栏和侧边栏也是用同样的方法</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span>略<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>略<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">locales</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>同理<span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/zh/&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">navbar</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;首页&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;/zh/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">sidebar</span><span class="token operator">:</span> <span class="token punctuation">[</span>同理<span class="token punctuation">]</span> <span class="token comment">// 注意里面的路径，需要在原本pages上加/zh/</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后是md页面的内容，我这个语言渣渣就不展示了。（小声bb，网站没达到一定的知名度，这玩意就只能装X，就当是学学思路吧~）</p><h3 id="搜索框" tabindex="-1"><a class="header-anchor" href="#搜索框" aria-hidden="true">#</a> 搜索框</h3>`,11),A=s("code",null,"search",-1),B=s("code",null,"docsearch",-1),D={href:"https://docsearch.algolia.com/",target:"_blank",rel:"noopener noreferrer"},L={href:"https://docsearch.algolia.com/apply/",target:"_blank",rel:"noopener noreferrer"},q={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#apikey",target:"_blank",rel:"noopener noreferrer"},S={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html#indexname",target:"_blank",rel:"noopener noreferrer"},T=p(`<p>安装插件然后在配置文件中配置plugins</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-search@next

<span class="token function">npm</span> i <span class="token parameter variable">-D</span> @vuepress/plugin-docsearch@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> searchPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vuepress/plugin-search&#39;</span>
<span class="token comment">// import { docsearchPlugin } from &#39;@vuepress/plugin-docsearch&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">searchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// 配置</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// docsearchPlugin({</span>
    <span class="token comment">//   // 配置</span>
    <span class="token comment">// })</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他主题" tabindex="-1"><a class="header-anchor" href="#其他主题" aria-hidden="true">#</a> 其他主题</h3>`,4),R={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},I=p(`<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><p>以部署到 Github Pages 为例：</p><h3 id="创建仓库" tabindex="-1"><a class="header-anchor" href="#创建仓库" aria-hidden="true">#</a> 创建仓库</h3><p>首先在 Github 上新建一个仓库，有两种地址可选：<code>&lt;USERNAME&gt;</code> - 用户名、 <code>REPO</code> - 仓库名</p><ol><li><code>https://&lt;USERNAME&gt;.github.io/</code></li><li><code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code></li></ol><p>如果是第一种，创建的仓库应为 <code>&lt;USERNAME&gt;.github.io</code>， <code>base</code> 默认为 <code>&#39;/&#39;</code> 因此不需要设置</p><p>如果是第二种，仓库名随意，这里我取名为：<code>Lion_Blog</code>，相应地，在 <code>config.js</code> 添加一个 <code>base</code> 路径配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token comment">// github 仓库名</span>
  <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&#39;/Lion_Blog/&#39;</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建脚本" tabindex="-1"><a class="header-anchor" href="#创建脚本" aria-hidden="true">#</a> 创建脚本</h3><p>然后在项目根目录创建 <code>deploy.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token comment"># 确保脚本抛出遇到的错误</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># 生成静态文件</span>

<span class="token function">npm</span> run build

<span class="token comment"># 进入生成的文件夹</span>

<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;init: blog&#39;</span>

<span class="token function">git</span> push <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>仓库的SSH地址<span class="token operator">&gt;</span> master:gh-pages

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行脚本" tabindex="-1"><a class="header-anchor" href="#执行脚本" aria-hidden="true">#</a> 执行脚本</h3><p>最后执行脚本 <code>deploy.sh</code>，需要注意的是得用 <code>Git Bash</code> 去执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> deploy.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="部署成功" tabindex="-1"><a class="header-anchor" href="#部署成功" aria-hidden="true">#</a> 部署成功</h3><p>脚本执行成功后，代码就会被上传到指定仓库的gh-pages分支，gh-pages分支里的就是项目构建后的dist文件，你也可以把源码上传到master分支或其他分支作为项目源分支。</p><figure><img src="`+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>',18),C={href:"https://blog.csdn.net/kangkanglhb88008/article/details/127947544",target:"_blank",rel:"noopener noreferrer"},G=s("code",null,"REMOTE HOST IDENTIFICATION HAS CHANGED",-1),H={href:"https://www.cnblogs.com/morango/p/17269515.html",target:"_blank",rel:"noopener noreferrer"},U=s("h2",{id:"总结",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),n(" 总结")],-1),O={href:"https://v2.vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"};function F(K,W){const a=i("ExternalLinkIcon");return l(),o("div",null,[g,y,s("p",null,[n("最近发现了一个神奇的工具 "),s("a",f,[n("VuePress"),e(a)]),n(" ，它满足了我所有的需求")]),_,s("p",null,[n("需要满足"),x,n("，推荐一个好用的node版本管理工具 "),s("a",j,[n("NVM"),e(a)]),n(" ，可以对node版本进行下载/卸载/切换")]),w,s("p",null,[s("a",E,[n("首页"),e(a)]),n(" 配置 "),P,n(" 可以将该页面设定为首页，将下面代码复制到 "),M,n(" 里，就可以生成官方默认首页")]),z,s("p",null,[s("a",V,[n("普通页面"),e(a)]),n(" 普通页面也可以根据需要配置，如页面的标题，如果不设置默认是取文档的第一个h1作为标题")]),N,s("p",null,[n("官方提供了两个插件 "),A,n(),B,n(" ，前者是根据你的页面，在本地生成搜索索引，后者是将 "),s("a",D,[n("Algolia DocSearch"),e(a)]),n(" 集成到 VuePress 中，为你的文档网站提供搜索功能；前者能直接用，后者需要 "),s("a",L,[n("提交你的网站 URL"),e(a)]),n(" 来加入 DocSearch 项目，用 "),s("a",q,[n("apiKey"),e(a)]),n(" 和 "),s("a",S,[n("indexName"),e(a)]),n(" 去配置插件。")]),T,s("p",null,[n("如果你不喜欢默认的主题，还可以到 "),s("a",R,[n("NPM"),e(a)]),n(" 上下载更多主题，更厉害的还可以自己制作一个主题。")]),I,s("ul",null,[s("li",null,[s("p",null,[n("部署 Github Pages 首先得完成 "),s("a",C,[n("ssh的配置"),e(a)])])]),s("li",null,[s("p",null,[n("如果你之前配置过ssh，但是出现 "),G,n("，请看 "),s("a",H,[n("hosts过期问题"),e(a)])])])]),U,s("p",null,[n("至此一个自己的博客网站就完成啦，其实 "),s("a",O,[n("VuePress"),e(a)]),n(" 还有很多配置和玩法，我只不过是抛砖引玉，与大家共勉！")])])}const J=t(h,[["render",F],["__file","githubPages.html.vue"]]);export{J as default};
