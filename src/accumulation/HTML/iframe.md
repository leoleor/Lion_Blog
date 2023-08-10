---
title: 'iframe'
category:
  - 面试
tag:
  - html
star: false
sticky: false  
article: true
---

## 使用

``` html
<iframe src="http://www.bilibili.com" name="iframe" frameborder="1" height="400" width="600" scrolling="no">你的浏览器不支持该iframe标签</iframe>
```

## 优点

- 模块化，头部和侧边栏一样，中间内容嵌套写
- 解决跨域

    document.domain+iframe  
    这个方法只能用于同一个主域下不同子域之间的跨域请求，比如a.com和1.a.com 之间，1.a.com和2.a.com 之间。
    只要把两个页面的document.domian都指向主域就可以了，比如document.domain="a.com"。
    ​父页面通过iframe嵌入子页面，通过iframe.contentWindow获取子页面的window,即可操作子页面，子页面通过parent.window和parent来访问父页面的window。

## 缺点

- 代码复杂，不利于seo
- iframe框架页面会增加服务器的http请求
- 很多的移动设备无法完全显示框架，设备兼容性差
- 阻塞页面，非常的耗资源，加载速度比script css等慢一两个等级
- 阻塞onload事件

    window 的 onload 事件需要在所有 iframe 加载完毕后(包含里面的元素)才会触发。在 Safari 和 Chrome 里，通过 JavaScript 动态设置 iframe 的 SRC 可以避免这种阻塞情况。

