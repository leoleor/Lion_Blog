---
title: 'css3新特性'
category:
  - 面试
tag:
  - css
star: false
sticky: false  
article: true
---

## 选择器

- a[href="#"]
- :last-child
- :nth-of-type(n)
- :first-of-type
- :last-of-type

## 新样式

- `border-radius` 圆角边框  
- `box-shadow` 盒子阴影  

  语法: `box-shadow: h-shadow v-shadow blur spread color inset`

  | 属性 | 描述 |
  |:------|:-------:|
  | h-shadow | 必需的。水平阴影的位置。允许负值 |
  | v-shadow | 必需的。垂直阴影的位置。允许负值 |
  | blur | 可选。模糊距离 |
  | spread | 可选。阴影的大小 |
  | color | 可选。阴影的颜色。 |
  | inset | 可选。从外层的阴影（开始时）改变阴影内侧阴影 |

- `background-image` 背景图
      
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

语法 `transition: property duration timing-function delay;`

简写 `transition: property duration;`

1. transition-property: css属性名
2. transtion-duration: 过渡花费时间 默认0
3. transition-timing-function: 过渡的时间曲线 默认'ease' 
4. transition-delay: 过渡从何时开始 默认0

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

语法 `animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

简写 `animation: name duration;`

1. animation-name：关键帧名字，@keyframes 声明关键帧
2. animation-duration：播放动画时长 默认0
3. animation-timing-function：播放的速度曲线 默认'ease'
4. animation-delay：播放何时开始 默认0
5. animation-iteration-count：播放次数 默认1 'infinite'循环
6. animation-direction：播放方向 默认'normal' 'reverse'反向播放
7. animation-fill-mode：当动画完成时，或当动画有一个延迟未开始播放时
8. animation-play-state：指定动画是否正在运行或已暂停。

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

> 过渡与动画的区别

动画不需要事件触发，过渡需要(如hover)  
过渡只有一组关键帧，动画可以设置多个
   



