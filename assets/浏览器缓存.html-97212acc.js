import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as t,b as e,d as n,e as c,f as l}from"./app-b272bd76.js";const d="/Lion_Blog/images/browser/强缓存.jpg",s="/Lion_Blog/images/browser/协商缓存1.jpg",h="/Lion_Blog/images/browser/协商缓存2.jpg",p={},f={href:"https://juejin.cn/post/6844904067882287111",target:"_blank",rel:"noopener noreferrer"},g=l('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>什么是缓存？ 把一些不需要重新获取的内容再重新获取一次。<br> 为什么需要缓存？ 网络请求相比于 CPU 的计算和页面渲染是非常非常慢的。<br> 哪些资源可以被缓存？ 静态资源，比如 js css img。</p><ul><li><p>三种刷新操作对http缓存的影响</p><ul><li>正常操作：地址栏输入url，跳转链接，前进后退等。<code>强缓存有效，协商缓存有效</code></li><li>手动刷新：F5，点击刷新按钮，右键菜单刷新。<code>强缓存失效，协商缓存有效</code></li><li>强制刷新：Ctrl + F5，Shift + Command + R。<code>强缓存失效，协商缓存失效</code></li></ul></li></ul><h2 id="强缓存" tabindex="-1"><a class="header-anchor" href="#强缓存" aria-hidden="true">#</a> 强缓存</h2><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>Expires(HTTP 1.0)</p><p>返回的时间是服务器的绝对时间，容易造成误差</p></li><li><p>Cache-Control(HTTP 1.1 优先)</p><ul><li><code>max-age</code> 缓存最大过期时间。Cache-Control: max-age=3153600（单位是秒）</li><li><code>no-cache</code> 可以在客户端存储资源，每次都必须去服务端做新鲜度校验，来决定从服务端获取新的资源（200）还是使用客户端缓存（304）</li><li><code>no-store</code> 永远都不要在客户端存储资源，永远都去原始服务器去获取资源</li></ul></li></ul><h3 id="内存缓存" tabindex="-1"><a class="header-anchor" href="#内存缓存" aria-hidden="true">#</a> 内存缓存</h3><h3 id="硬盘缓存" tabindex="-1"><a class="header-anchor" href="#硬盘缓存" aria-hidden="true">#</a> 硬盘缓存</h3><h3 id="读取缓存时机" tabindex="-1"><a class="header-anchor" href="#读取缓存时机" aria-hidden="true">#</a> 读取缓存时机</h3><p>内存缓存（Memory Cache）是浏览器将常用的文件存储在内存中，以便下次访问时可以快速加载。通常情况下，内存缓存中存储的是一些静态文件，例如 HTML、CSS、JavaScript、图片等。相比于磁盘缓存，内存缓存的访问速度更快，但是容量较小，也更容易受到系统内存的影响。</p><p>磁盘缓存（Disk Cache）是浏览器将一些不常用的文件存储在硬盘上，以便下次访问时可以从硬盘上读取。磁盘缓存中存储的文件通常是一些比较大的文件，例如视频、音频等。相比于内存缓存，磁盘缓存的容量更大，但是访问速度较慢。</p><p>浏览器在加载页面时，会先检查内存缓存中是否存在该页面的缓存，如果存在且未过期，则直接从内存中读取并加载页面。如果内存缓存中不存在或者已过期，则会检查磁盘缓存中是否存在该页面的缓存，如果存在则从磁盘中读取并加载页面。如果磁盘缓存中也不存在或者已过期，则需要重新请求服务器获取该页面的内容。</p><h2 id="协商缓存" tabindex="-1"><a class="header-anchor" href="#协商缓存" aria-hidden="true">#</a> 协商缓存</h2><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>Last-Modified：资源的最后修改时间</p><p>服务端拿到 if-Modified-Since 之后拿这个时间去和服务端资源最后修改时间做比较，如果一致则返回 304 ，不一致（也就是资源已经更新了）就返回 200 和新的资源及新的 Last-Modified。</p></li><li><p>Etag：资源的唯一标识（一个字符串，类似于人类的指纹 优先）</p><p>其实 Etag 和 Last-Modified 一样的，只不过 Etag 是服务端对资源按照一定方式（比如 contenthash）计算出来的唯一标识，就像人类指纹一样，传给客户端之后，客户端再传过来时候，服务端会将其与现在的资源计算出来的唯一标识做比较，一致则返回 304，不一致就返回 200 和新的资源及新的 Etag。</p></li></ul>',16);function _(u,m){const a=o("ExternalLinkIcon");return r(),t("div",null,[e("p",null,[e("a",f,[n("参考文章"),c(a)])]),g])}const C=i(p,[["render",_],["__file","浏览器缓存.html.vue"]]);export{C as default};
