import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as i,f as a}from"./app-b272bd76.js";const d={},r=a('<p>开发的时候我们会用框架如Vue、React，ES6模块语法、Promise，开发样式使用LESS、SASS预处理器，这些代码是不能被浏览器识别的，如果要运行，就必须经过编译。</p><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><ol><li>webpack会以一个或者多个文件作为打包入口，将项目所有文件编译组合成一个或者多个文件输出，称为bundle，输出的文件可以在浏览器运行。</li><li>webpack本身功能有限：<br> 开发环境：仅能编译JS中的ES module语法<br> 生产环境：能编译JS中的ES module语法，还能压缩JS代码</li></ol><h2 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> entry</h2><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> output</h2><h2 id="loader" tabindex="-1"><a class="header-anchor" href="#loader" aria-hidden="true">#</a> loader</h2><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><p>编译的工具，加载顺序：从右往左，从下到上</p><h3 id="常用" tabindex="-1"><a class="header-anchor" href="#常用" aria-hidden="true">#</a> 常用</h3><ul><li>style-loader 将js中的css通过创建style标签添加到html文件中</li><li>css-loader 将css资源编译成commonJs的模块到js中</li><li>less-loader/s(a/c)ss-loader 编译成css文件</li><li>svg-sprite-loader</li><li>babel-loader 这个loader十分的重要，把高级语法转为ES5，常用于处理 ES6+ 并将其编译为 ES5</li><li>html-loader 用于将 HTML 文件转换为字符串并进行格式化，它允许我们通过 JS 加载一个 HTML 片段</li><li>file-loader 用于打包文件类型的资源，比如对png、jpg、gif等图片资源使用file-loader，然后就可以在JS中加载图片了</li><li>url-loader 小图转base64 减少请求</li><li>vue-loader 用来处理vue组件,还要安装vue-template-compiler来编译Vue模板，估计大家大部分都用脚手架了（vue-template-compiler 直接读取处理了.vue 文件 SFC 内容，将.vue 文件处理为一个 AST抽象语法树）</li></ul><h2 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h2><h3 id="概念-1" tabindex="-1"><a class="header-anchor" href="#概念-1" aria-hidden="true">#</a> 概念</h3><p>扩展功能的插件</p><h3 id="常用-1" tabindex="-1"><a class="header-anchor" href="#常用-1" aria-hidden="true">#</a> 常用</h3><ul><li>terser-webpack-plugin：支持压缩 ES6 (Webpack4，此插件可移除js和vue文件中的注释、打印等信息)</li><li>html-webpack-plugin：生成html文件，自动引入js文件</li><li>css-minimizer-webpack-plugin： 压缩css代码</li><li>compression-webpack-plugin：开启gzip压缩 性能优化</li><li>HotModuleReplacementPlugin：模块热替换</li><li>web-webpack-plugin：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用</li></ul><h2 id="mode" tabindex="-1"><a class="header-anchor" href="#mode" aria-hidden="true">#</a> mode</h2><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><p>我们从4个角度对 webpack 和代码进行了优化:</p><ol><li>提升开发体验</li></ol><ul><li>使用 <code>source Map</code> 让开发或上线时代码报错能有更加准确的错误提示</li></ul><ol start="2"><li>提升 webpack提升打包构建速度</li></ol><ul><li>使用 <code>HotModuleReplacement</code> 让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。</li><li>使用 <code>oneof</code> 让资源文件一旦被某个loader 处理了，就不会继续遍历了，打包速度更快。</li><li>使用 <code>Include/Exclude</code> 排除或只检测某些文件，处理的文件更少，速度更快。</li><li>使用 <code>cache</code> 对eslint和 babel处理的结果进行缓存，让第二次打包速度更快。</li><li>使用 <code>Thead</code> 多进程处理 eslint 和 babel 任务，速度更快。(需要注意的是，进程启动通信都有开销的，要在比较多代码处理时使用才有效果)</li></ul><ol start="3"><li>减少代码体积</li></ol><ul><li>使用 <code>Tree shaking</code> 剔除了没有使用的多余代码，让代码体积更小。</li><li>使用 <code>@babel/plugin-transform-runtime</code> 插件对 babel 进行处理，让辅助代码从中引入，而不是每个文件都生成辅助代码，从而体积更小。</li><li>使用 <code>Image Minimizer</code> 对项目中图片进行压缩，体更小，请求速度更快。(需要注意的是，如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。)</li></ul><ol start="4"><li>优化代码运行性能</li></ol><ul><li>使用 <code>code Splt</code> 对代码进行分割成多个js 文件，从而使单个文件体积更小，并行加载 js 速度更快。并通过 import 动态导入语法进行按需加载，从而达到需要使用时才加载该资源，不用时不加载资源。</li><li>使用 <code>Preload / Prefetch</code> 对代码进行提前加载，等未来需要使用时就能直接使用，从而用户体验更好。</li><li>使用 <code>Network cache</code> 能对输出资源文件进行更好的命名，将来好做缓存，从而用户体验更好。</li><li>使用 <code>core-is</code> 对js 进行兼容性处理，让我们代码能运行在低版本浏览器。</li><li>使用 <code>PWA</code> 能让代码离线也能访问，从而提升用户体验。</li></ul>',26),o=[r];function c(t,s){return l(),i("div",null,o)}const u=e(d,[["render",c],["__file","webpack.html.vue"]]);export{u as default};
