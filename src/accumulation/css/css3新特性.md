---
title: 'css3新特性'
category:
  - 面试
tag:
  - css
star: false
sticky: false  
article: false
---

## 选择器

- a[href="#"]
- :last-child
- :nth-of-type(n)
- :first-of-type
- :last-of-type

## 样式

`border-radius` 圆角边框  
`box-shadow` 阴影
      
## 盒模型

`box-sizing: content-box | border-box`

## 弹性布局

- flex-direction
- justify-content
- align-items
- flex-wrap
      
## transform 转换和变形

- 旋转transform: rotate(45deg)
- 缩放transform: scale(0.5)
- 移动transform: translate(50px,50px)

## transition 过渡

概念

transition 简写属性

1. transition-property: css属性名
2. transtion-duration: 过渡花费时间 默认0
3. transition-timing-function: 过渡的时间曲线 默认'ease' 
4. transition-delay: 过渡从何时开始 默认0

例子
``` css
div {
  background-color: #000;
  width: 100px;
  height: 100px;
  transition: width 2s, height 2s, transform 2s;
​}
div:hover {
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
```

## animation 动画
概念
  animation 简写属性,animation: name duration timing-function delay iteration-count direction fill-mode;
  @keyframes 声明关键帧
  ​1.animation-name：关键帧名字
  2.animation-duration：播放动画时长 默认0
  3.animation-timing-function：播放的速度曲线 默认'ease'
  4.animation-delay：播放何时开始 默认0
  5.animation-iteration-count：播放次数 默认1 'infinite'循环
  6.animation-direction：播放方向 默认'normal' 'reverse'反向播放
  
例子
``` css
div {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: #000;
  animation: myMove 2s infinite, myColor 2s infinite;
}
@keyframes myMove {
  from {
    top: 0px;
    left: 0px;
  }
  to {
    top: 200px;
    left: 200px;
  }
}
@keyframes myColor {
  0% {
    background-color: pink;
  }
  25% {
    background-color: blue;
  }
  50% {
    background-color: green;
  }
  100% {
    background-color: red;
  }
​}
```

## 过渡与动画的区别

动画不需要事件触发，过渡需要(如hover)  
过渡只有一组关键帧，动画可以设置多个

## :before和::before

在css3中，单引号用于伪类；双引号用于伪元素  
:before是css3之前的用法，::before是css3后的用法

## css预处理器，用过什么特点

SASS(SCSS) 、LESS
语法
  sass语法不带大括号和分号，并且有严格的缩进
  ​scss是sass3.0引入的新语法，使用和css一样

特点
  变量
    sass以$符 $background-color: blue; 
    less以@符 @color: blue;
  混合Mixins，class中的class
    sass用法：先定义@mixin 样式名，用的时候@include 样式名
    less用法：直接.class.class
  传参
    sass  @mixin 样式名($参数)
    less .样式名(@参数)
  嵌套
    1.在一个选择器中再嵌套其子级选择器，避免重复写父级选择器， 使其结构清晰，增加代码可读性。如果在嵌套里要使用父级选择器，可以用&:hover
    ​2.属性嵌套：像 font-size, font-family, font-weight 等都是以 font 为属性命名空间， 在 Sass 中允许将属性嵌套在命名空间中。        



