---
title: 'html5新特性'
category:
  - 面试
tag:
  - html
star: false
sticky: false  
article: true
---

## 语义化标签

header、footer、nav、section、article、aside、dialog

- 让人容易读懂（增加代码可读性）
- 有利于搜索引擎优化（SEO）
- 在没有css样式下，页面也能够呈现很好地内容结构、代码结构

## 表单元素

1. input 输入类型

- color 主要用于选取颜色

- date 从一个日期选择器选择一个日期

- datetime 选择一个日期（UTC 时间）

- datetime-local 选择一个日期和时间 (无时区)

- email 包含 e-mail 地址的输入域

- month 选择一个月份

- number 数值的输入域

- range 一定范围内数字值的输入域

- search 用于搜索域

- tel 定义输入电话号码字段

- time 选择一个时间

- url URL 地址的输入域

- week 选择周和年

2. 表单属性

- placehoder属性：简短的提示在用户输入值前会显示在输入域上，既默认框提示；

- required属性：是一个boolean属性，要求填写的输入域不为空；

- pattern属性：描述了一个正则表达式用于验证 input 元素的值；

- max/min属性：最大最小值；

- step属性：为输入域规定合法的数字间隔；

- height/width属性：用于image类型的 input 标签的图像高度和宽度；

- autofocus属性：是一个boolean属性，在页面加载时自动获得焦点；

- multiple属性：是一个boolean属性，规定 input 元素中选择多个值。

## 视频和音频

audio音频、video视频

## Canvas绘图

``` js
var canvas = document.getElementById("myCanvas"); 
var ctx = canvas.getContext("2d");
// uniapp
this.ctx = uni.createCanvasContext('canvas');
```

## SVG绘图


## 地理定位

``` js
window.navigator.geolocation {
    getCurrentPosition:  fn  用于获取当前的位置数据
    watchPosition: fn  监视用户位置的改变
    clearWatch: fn  清除定位监视
}

navigator.geolocation.getCurrentPosition(
    function(pos) {
　　　　console.log('用户定位数据获取成功')
　　　　console.log('定位时间：',pos.timestamp)
　　　　console.log('经度：',pos.coords.longitude)
　　　　console.log('纬度：',pos.coords.latitude)
　　　　console.log('海拔：',pos.coords.altitude)
　　　　console.log('速度：',pos.coords.speed)
    },
    function(err){ 
　　　　console.log('用户定位数据获取失败')
    }
)
```

## 拖放API

## Web Worker

## Web Storage

localStorage、sessionStorage

## WebSocket