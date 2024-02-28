---
title: 'es6新特性'
category:
  - 面试
tag:
  - JavaScript
star: false
sticky: false  
article: true
---

## 变量声明 let、const

## 箭头函数 =>

- 自身不绑定this，this指向当前上下文
- 不能作为构造函数
- 没有arguments，用rest

## 模板字符串 ${}

## 函数参数默认值

## 对象结构

## 扩展运算符 ...

## 对象属性简写

## Promise

- 概念

    Promise 本身是同步的立即执行函数， 当在 executor 中执行 resolve 或者 reject的时候, 此时是异步操作，会先执行then/catch等，当主栈完成后， 才会去调用 resolve/reject 中存放的方法执行。

- async/await

    async 函数返回一个 Promise 对象，当函数执行的时候，一旦遇到 await 就会先返回，等到触发的异步操作完成，再执行函数体内后面的语句。可以理解为，是让出了线程，跳出了 async 函数体。 

    Async/Await 就是一个自执行的 generate 函数。利用 generate 函数的特性把异步的代码写成“同步”的形式,第一个请求的返回值作为后面一个请求的参数,其中每一个参数都是一个 promise 对象.

- 静态方法

    - Promise.all 所有成功才执行then，有一个失败后面都会被忽略并执法catch
    - Promise.race 拿到最快的看是then还是catch
    - Promise.allSettled 所有执行完毕，返回包含了每个promise结果的对象数组 [{ status: "fulfilled", value: 3 }, { status: "rejected", reason: "foo" }]
    - Promise.any 有成功就执行then，输出第一个成功的，所有失败才执行catch ES2021

## 类 Class

## 模块化 module

## for value of arr / for key in arr(es5)

## 可选链操作符 ?.

- 概念

    MDN: 可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。
    ?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。  

- 用法

    `if (res && res.data && res.data.success)` ​等同于 `if (res?.data?.success)`

