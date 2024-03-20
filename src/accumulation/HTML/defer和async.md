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