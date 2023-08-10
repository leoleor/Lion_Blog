import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as e}from"./app-b272bd76.js";const p={},t=e(`<p>SASS(SCSS) 、LESS</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><p>sass语法不带大括号和分号，并且有严格的缩进</p><div class="language-sass line-numbers-mode" data-ext="sass"><pre class="language-sass"><code><span class="token selector">.img</span>
<span class="token property-line">  <span class="token property">width</span><span class="token punctuation">:</span> 200px</span>
<span class="token property-line">  <span class="token property">height</span><span class="token punctuation">:</span> 200px</span>
<span class="token property-line">  <span class="token property">object-fit</span><span class="token punctuation">:</span> cover</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ scss是sass3.0引入的新语法，兼容sass语法功能，使用方法和css一样</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token selector">.img </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">object-fit</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>less使用和css一样</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><ul><li>sass以$变量名 $color: blue;</li></ul><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>&lt;style lang=<span class="token string">&quot;scss&quot;</span> scoped&gt;
<span class="token property"><span class="token variable">$wid</span></span><span class="token punctuation">:</span> 240px<span class="token punctuation">;</span>
<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">$wid</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>less以@变量名 @color: blue;</li></ul><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>&lt;style lang=<span class="token string">&quot;less&quot;</span> scoped&gt;
<span class="token variable">@wid<span class="token punctuation">:</span></span> 240px<span class="token punctuation">;</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token variable">@wid</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;<span class="token operator">/</span>style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>css以--变量名 var(--变量名)</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">&lt;style&gt;
:root</span> <span class="token punctuation">{</span>
  <span class="token property">--wid</span><span class="token punctuation">:</span> 240px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--wid<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="混合" tabindex="-1"><a class="header-anchor" href="#混合" aria-hidden="true">#</a> 混合</h2><p>sass用法：先定义@mixin 样式名，用的时候@include 样式名</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>&lt;style lang=<span class="token string">&quot;scss&quot;</span> scoped&gt;
<span class="token keyword">@mixin</span> <span class="token selector">container </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.div1 </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> container<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.div2 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>less用法：直接.class.class</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">&lt;style lang=&quot;less&quot; scoped&gt;
.container</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.div1</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.container</span><span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.div2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;<span class="token operator">/</span>style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="传参" tabindex="-1"><a class="header-anchor" href="#传参" aria-hidden="true">#</a> 传参</h2><p>sass @mixin 样式名($参数)</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code>&lt;style lang=<span class="token string">&quot;scss&quot;</span> scoped&gt;
<span class="token keyword">@mixin</span> <span class="token function">container</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> pink<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.div1 </span><span class="token punctuation">{</span>
  <span class="token keyword">@include</span> <span class="token function">container</span><span class="token punctuation">(</span>#111<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.div2 </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>less .样式名(@参数)</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">&lt;style lang=&quot;less&quot; scoped&gt;
.container(<span class="token variable">@color</span>: pink)</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">@color</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.div1</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.container</span><span class="token punctuation">(</span>#111<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.div2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
&lt;<span class="token operator">/</span>style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="嵌套" tabindex="-1"><a class="header-anchor" href="#嵌套" aria-hidden="true">#</a> 嵌套</h2><p>在一个选择器中再嵌套其子级选择器，避免重复写父级选择器，使其结构清晰，增加代码可读性。如果在嵌套里要使用父级选择器，可以用&amp;，如&amp;:hover</p>`,26),i=[t];function c(l,o){return s(),a("div",null,i)}const r=n(p,[["render",c],["__file","css预处理器.html.vue"]]);export{r as default};
