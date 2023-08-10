import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as l,c as s,b as e,d as c,e as r}from"./app-b272bd76.js";const a={},i={href:"https://juejin.cn/post/6969028296893792286",target:"_blank",rel:"noopener noreferrer"},_=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"省流总结"),e("p",null,"Js是一门单线程语言，当js执行的时候，主线程就会形成一个函数执行栈，首先去执行同步任务，遇到异步任务(宏/微，宏任务会在同步任务执行完之后执行，而微任务会在当前宏任务执行完之后立即执行。) 分别放到宏/微任务队列，当函数执行栈为空时，开始处理微任务队列，待清空后取宏任务队列中的第一项进入执行栈，待清空后又开始查看微任务队列是否有任务，如此反复循环直到清空所有任务。")],-1),u=e("ol",null,[e("li",null,"函数入栈（Call Stack），当Stack中执行到异步任务的时候，就将他丢给WebAPIs,接着执行同步任务,直到Stack为空；"),e("li",null,"此期间WebAPIs完成这个事件，把回调函数放入队列中等待执行（微任务放到微任务队列（micro task Queue），宏任务放到宏任务队列（task queue））"),e("li",null,"执行栈为空时，Event Loop把微任务队列执行清空；（因为整个script是一个宏任务，执行完一个宏任务就执行微任务）"),e("li",null,"微任务队列清空后，进入宏任务队列，取队列的第一项任务放入Stack（栈）中执行，执行完成后，查看微任务队列是否有任务，有的话，清空微任务队列。重复4，继续从宏任务中取任务执行，执行完成之后，继续清空微任务，如此反复循环，直至清空所有的任务。")],-1),p=e("ul",null,[e("li",null,"宏任务：DOM 渲染后触发，如 setTimeout 、setInterval 、DOM 事件 、script 。"),e("li",null,"微任务：DOM 渲染前触发，如 Promise.then 、MutationObserver 、Node 环境下的 process.nextTick 。")],-1);function d(m,h){const t=o("ExternalLinkIcon");return l(),s("div",null,[e("p",null,[e("a",i,[c("参考文章"),r(t)])]),_,u,p])}const v=n(a,[["render",d],["__file","Event Loop事件循环.html.vue"]]);export{v as default};
