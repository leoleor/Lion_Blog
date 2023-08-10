const e=JSON.parse('{"key":"v-43adfbb2","path":"/accumulation/Browser/%E9%87%8D%E6%8E%92%E4%B8%8E%E9%87%8D%E7%BB%98.html","title":"重排/回流与重绘","lang":"zh-CN","frontmatter":{"title":"重排/回流与重绘","category":["面试"],"tag":["浏览器"],"star":false,"sticky":false,"article":true,"description":"概念 重排 当DOM的变化影响了元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。表现为重新生成布局，重新排列元素。 重绘 当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。表现为某些元素的外观被改变。重绘不一定重排，重排一定重绘。 如何触发 添加、删除、更新DOM节点 通过 display: none 隐藏一个DOM节点(隐藏元素并脱离文档流)-触发重排和重绘 通过 visibility: hidden 隐藏一个DOM节点-只触发重绘，因为没有几何变化 (opacity: 0隐藏元素，不触发回流重绘，会触发绑定事件) 移动或者给页面中的DOM节点添加动画 用户行为，例如调整窗口大小，改变字号，或者滚动","head":[["meta",{"property":"og:url","content":"https://leoleor.github.io/Lion_Blog/accumulation/Browser/%E9%87%8D%E6%8E%92%E4%B8%8E%E9%87%8D%E7%BB%98.html"}],["meta",{"property":"og:site_name","content":"一只攻城狮"}],["meta",{"property":"og:title","content":"重排/回流与重绘"}],["meta",{"property":"og:description","content":"概念 重排 当DOM的变化影响了元素的几何信息，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。表现为重新生成布局，重新排列元素。 重绘 当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。表现为某些元素的外观被改变。重绘不一定重排，重排一定重绘。 如何触发 添加、删除、更新DOM节点 通过 display: none 隐藏一个DOM节点(隐藏元素并脱离文档流)-触发重排和重绘 通过 visibility: hidden 隐藏一个DOM节点-只触发重绘，因为没有几何变化 (opacity: 0隐藏元素，不触发回流重绘，会触发绑定事件) 移动或者给页面中的DOM节点添加动画 用户行为，例如调整窗口大小，改变字号，或者滚动"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-10T12:39:18.000Z"}],["meta",{"property":"article:author","content":"狮子"}],["meta",{"property":"article:tag","content":"浏览器"}],["meta",{"property":"article:modified_time","content":"2023-08-10T12:39:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"重排/回流与重绘\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-10T12:39:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狮子\\"}]}"]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[{"level":3,"title":"重排","slug":"重排","link":"#重排","children":[]},{"level":3,"title":"重绘","slug":"重绘","link":"#重绘","children":[]}]},{"level":2,"title":"如何触发","slug":"如何触发","link":"#如何触发","children":[]},{"level":2,"title":"如何避免","slug":"如何避免","link":"#如何避免","children":[]}],"git":{"createdTime":1691671158000,"updatedTime":1691671158000,"contributors":[{"name":"狮子","email":"hzr1642921219@163.com","commits":1}]},"readingTime":{"minutes":1.78,"words":533},"filePathRelative":"accumulation/Browser/重排与重绘.md","localizedDate":"2023年8月10日","excerpt":"<h2> 概念</h2>\\n<h3> 重排</h3>\\n<p>当DOM的变化影响了元素的<code>几何信息</code>，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。表现为重新生成布局，重新排列元素。</p>\\n<h3> 重绘</h3>\\n<p>当一个元素的外观发生改变，但没有改变布局,重新把元素外观绘制出来的过程，叫做重绘。表现为某些元素的外观被改变。<code>重绘不一定重排，重排一定重绘。</code></p>\\n<h2> 如何触发</h2>\\n<ol>\\n<li><code>添加、删除、更新DOM节点</code></li>\\n<li>通过 <code>display: none</code> 隐藏一个DOM节点(隐藏元素并脱离文档流)-触发重排和重绘</li>\\n<li>通过 <code>visibility: hidden</code> 隐藏一个DOM节点-只触发重绘，因为没有几何变化<br>\\n(opacity: 0隐藏元素，不触发回流重绘，会触发绑定事件)</li>\\n<li>移动或者给页面中的DOM节点<code>添加动画</code></li>\\n<li><code>用户行为</code>，例如调整窗口大小，改变字号，或者滚动</li>\\n</ol>","autoDesc":true}');export{e as data};
