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

## 对象解构

## 扩展运算符 ...

## 对象属性简写

## Promise

## 类 Class

## 模块化 module

## for value of arr / for key in arr(es5)

## 可选链操作符 ?.

- 概念

    MDN: 可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。
    ?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined。与函数调用一起使用时，如果给定的函数不存在，则返回 undefined。  

- 用法

    `if (res && res.data && res.data.success)` ​等同于 `if (res?.data?.success)`

