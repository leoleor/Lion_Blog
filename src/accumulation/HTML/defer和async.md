---
title: 'defer和async'
category:
  - 面试
tag:
  - html
star: false
sticky: false  
article: true
---

![script 标签中 defer 和 async](/images/browser/script.jpg)

## html有两个script标签，他们的下载和解析是并行还是串行？

**默认方式：** 浏览器会并行加载script，但是执行是按书写顺序的，如果script1未执行完毕，
就不会开始执行script2，尽管script2已经加载完毕。
而且这种方式会阻碍script标签后面其他元素的渲染，直到script执行完毕才会渲染后面的dom。

**defer方式：** 也叫`延迟脚本`，使用defer后，该脚本会被马上加载，但是脚本会被延迟到整个页面都解析完再执行，并且这两个脚本会按顺序执行。

**async方式：** 也叫`异步脚本`，使用async后，该脚本会被马上加载，加载完立即执行，但是会影响页面的解析，这两个脚本谁先加载完谁就先执行。

## async和defer脚本的区别？

主要区别在执行时机和执行顺序

**执行时机：** async是异步脚本，在脚本下载完成之后立即执行，可能会阻塞html的解析；defer是延迟脚本，脚本下载完成之后不会立即执行，而是在html解析完成之后、DOMContentLoaded事件触发之前执行，确保了脚本执行时DOM加载完成。

**执行顺序：** 多个async脚本的执行顺序无法保证，哪个脚本先下载完就先执行；多个defer脚本会按照他们在文档中的顺序依次执行。