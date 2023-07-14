---
title: '对BFC的理解'
category:
  - 面试
tag:
  - css
star: false
sticky: false  
article: true
---

## 概念
BFC（Block Formatting Context）即“块级格式化上下文”表现为：

1. 内部的元素在垂直方向上一个接一个排列
2. 上下相邻的两个元素的margin会重叠
3. 一个独立的渲染区域，里面的元素不会影响外面的元素
4. 不会与浮动元素发生重叠
5. 计算bfc高度的时候，需要计算浮动元素的高度

## 如何创建
1. 浮动元素，float 除 none 以外的值；
2. 绝对定位元素，position（absolute，fixed）
3. overflow的值不为visible（hidden，scroll，auto，inherit）
4. display的值为table-cell, table-caption, inline-block中的任何一个
  
## 使用场景

1. 去除边距重叠现象
2. 实现三栏自适应布局
3. 避免浮动元素覆盖
4. 清除外部浮动(高度塌陷)

> Q：清除浮动方法？  

1. 在浮动元素末尾添加一个空的标签例如

``` vue
<div style="clear:both"></div>
```

优点：通俗易懂，容易掌握  
缺点：会添加多少无意义的空标签

2. 父元素设置 overflow: hidden，创建bfc，根据计算bfc高度，浮动元素也要计算

优点：不存在结构和语义化问题，代码量极少  
​缺点：内容增多时候容易造成不会自动换行导致内容被隐藏掉，无法显示需要溢出的元素 

3. 最佳伪元素（::after）

``` css
.box::after {
  content: '';
  clear: both;
  display :block;
  overflow: hidden;
  visibility: hidden;
​}
```
