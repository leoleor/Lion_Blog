const e=JSON.parse('{"key":"v-87b51cfc","path":"/accumulation/JavaScript/es6%E6%96%B0%E7%89%B9%E6%80%A7.html","title":"es6新特性","lang":"zh-CN","frontmatter":{"title":"es6新特性","category":["面试"],"tag":["JavaScript"],"star":false,"sticky":false,"article":true,"description":"变量声明 let、const 箭头函数 =&gt; 自身不绑定this，this指向当前上下文 不能作为构造函数 没有arguments，用rest 模板字符串 ${} 函数参数默认值 对象结构 扩展运算符 ... 对象属性简写 Promise 概念 Promise 本身是同步的立即执行函数， 当在 executor 中执行 resolve 或者 reject的时候, 此时是异步操作，会先执行then/catch等，当主栈完成后， 才会去调用 resolve/reject 中存放的方法执行。 async/await async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。 Async/Await 就是一个自执行的 generate 函数。利用 generate 函数的特性把异步的代码写成“同步”的形式,第一个请求的返回值作为后面一个请求的参数,其中每一个参数都是一个 promise 对象. 静态方法 Promise.all 所有成功才执行then Promise.race 拿到最快的看是then还是catch Promise.allSettled 一个成功就行，没有catch，结果包含了状态 Promise.any 有成功就行，输出第一个成功的，所有失败就catch ES2021","head":[["meta",{"property":"og:url","content":"https://leoleor.github.io/Lion_Blog/accumulation/JavaScript/es6%E6%96%B0%E7%89%B9%E6%80%A7.html"}],["meta",{"property":"og:site_name","content":"一只攻城狮"}],["meta",{"property":"og:title","content":"es6新特性"}],["meta",{"property":"og:description","content":"变量声明 let、const 箭头函数 =&gt; 自身不绑定this，this指向当前上下文 不能作为构造函数 没有arguments，用rest 模板字符串 ${} 函数参数默认值 对象结构 扩展运算符 ... 对象属性简写 Promise 概念 Promise 本身是同步的立即执行函数， 当在 executor 中执行 resolve 或者 reject的时候, 此时是异步操作，会先执行then/catch等，当主栈完成后， 才会去调用 resolve/reject 中存放的方法执行。 async/await async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。 Async/Await 就是一个自执行的 generate 函数。利用 generate 函数的特性把异步的代码写成“同步”的形式,第一个请求的返回值作为后面一个请求的参数,其中每一个参数都是一个 promise 对象. 静态方法 Promise.all 所有成功才执行then Promise.race 拿到最快的看是then还是catch Promise.allSettled 一个成功就行，没有catch，结果包含了状态 Promise.any 有成功就行，输出第一个成功的，所有失败就catch ES2021"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-10T12:39:18.000Z"}],["meta",{"property":"article:author","content":"狮子"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:modified_time","content":"2023-08-10T12:39:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"es6新特性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-10T12:39:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"狮子\\"}]}"]]},"headers":[{"level":2,"title":"变量声明 let、const","slug":"变量声明-let、const","link":"#变量声明-let、const","children":[]},{"level":2,"title":"箭头函数 =>","slug":"箭头函数","link":"#箭头函数","children":[]},{"level":2,"title":"模板字符串 ${}","slug":"模板字符串","link":"#模板字符串","children":[]},{"level":2,"title":"函数参数默认值","slug":"函数参数默认值","link":"#函数参数默认值","children":[]},{"level":2,"title":"对象结构","slug":"对象结构","link":"#对象结构","children":[]},{"level":2,"title":"扩展运算符 ...","slug":"扩展运算符","link":"#扩展运算符","children":[]},{"level":2,"title":"对象属性简写","slug":"对象属性简写","link":"#对象属性简写","children":[]},{"level":2,"title":"Promise","slug":"promise","link":"#promise","children":[]},{"level":2,"title":"类 Class","slug":"类-class","link":"#类-class","children":[]},{"level":2,"title":"模块化 module","slug":"模块化-module","link":"#模块化-module","children":[]},{"level":2,"title":"for value of arr / for key in arr(es5)","slug":"for-value-of-arr-for-key-in-arr-es5","link":"#for-value-of-arr-for-key-in-arr-es5","children":[]},{"level":2,"title":"可选链操作符 ?.","slug":"可选链操作符","link":"#可选链操作符","children":[]}],"git":{"createdTime":1691671158000,"updatedTime":1691671158000,"contributors":[{"name":"狮子","email":"hzr1642921219@163.com","commits":1}]},"readingTime":{"minutes":1.68,"words":503},"filePathRelative":"accumulation/JavaScript/es6新特性.md","localizedDate":"2023年8月10日","excerpt":"<h2> 变量声明 let、const</h2>\\n<h2> 箭头函数 =&gt;</h2>\\n<ul>\\n<li>自身不绑定this，this指向当前上下文</li>\\n<li>不能作为构造函数</li>\\n<li>没有arguments，用rest</li>\\n</ul>\\n<h2> 模板字符串 ${}</h2>\\n<h2> 函数参数默认值</h2>\\n<h2> 对象结构</h2>\\n<h2> 扩展运算符 ...</h2>\\n<h2> 对象属性简写</h2>\\n<h2> Promise</h2>\\n<ul>\\n<li>\\n<p>概念</p>\\n<p>Promise 本身是同步的立即执行函数， 当在 executor 中执行 resolve 或者 reject的时候, 此时是异步操作，会先执行then/catch等，当主栈完成后， 才会去调用 resolve/reject 中存放的方法执行。</p>\\n</li>\\n<li>\\n<p>async/await</p>\\n<p>async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。</p>\\n<p>Async/Await 就是一个自执行的 generate 函数。利用 generate 函数的特性把异步的代码写成“同步”的形式,第一个请求的返回值作为后面一个请求的参数,其中每一个参数都是一个 promise 对象.</p>\\n</li>\\n<li>\\n<p>静态方法</p>\\n<ul>\\n<li>Promise.all 所有成功才执行then</li>\\n<li>Promise.race 拿到最快的看是then还是catch</li>\\n<li>Promise.allSettled 一个成功就行，没有catch，结果包含了状态</li>\\n<li>Promise.any 有成功就行，输出第一个成功的，所有失败就catch ES2021</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
