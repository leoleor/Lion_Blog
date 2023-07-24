---
title: '手写代码'
category:
  - 面试
tag:
  - 手写代码
  - JavaScript
star: false
sticky: false  
article: true
index: true
---

## 防抖 && 节流

### 防抖

> 在一段时间内，事件只会触发一次

![](/images/javascript/防抖_立即执行.jpg)

![](/images/javascript/防抖_定时器版.jpg)

- 立即执行：执行事件，并设定周期，周期内又有事件触发，不执行，并且周期重新设定
理解：执行事件，并开启定时器，在规定时间又触发事件，不执行，并且重新设置定时器，只有定时器结束才能开启下一个事件
- 定时器版：设定周期延迟触发事件，周期内又有事件触发，不执行，重新设定周期，周期结束后触发事件
理解：设置定时器，让事件定时后执行，如果在规定时间内事件又执行，那么重新设置定时器

``` js
function debounce (func, wait, immediate) {
  let timeout;
  return function() {
    const context = this
    const args = [...arguments]
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      let callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      },wait)
      if (callNow) func.apply(context,args)
    } else {
      timeout = setTimeout(() => {
        func.apply(context,args)
      },wait)
    }
  }
}
```

### 节流

> 事件按照一段时间的间隔进行触发

![](/images/javascript/节流_时间戳版.jpg)

![](/images/javascript/节流_定时器版.jpg)

- 时间戳版：
理解：设置一个变量上次执行时间0，获取当前时间戳，只有当两值之差大于规定时间的时候才执行事件，并把当前时间赋值给上次执行时间
- 定时器版：
理解：设置一个定时器，定时器结束执行事件，中途又有新事件，不执行，只有等定时器结束才可以开启下一个定时器执行事件

``` js
function throttle(func, wait, immediate) {
  let timeout
  return function() {
    const context = this
    const args = [...arguments]
    if (immediate) {
      let pre = 0
      const now = Date.now()
      if (pre - now > 0) {
        func.apply(context,args)
        pre = now
      }
    } else {
      if (!timeout) {
        timeout = setTimeout(() => {
          func.apply(context,args)
          timeout = null
        },wait)
      }
    }
  }
}
```

### 应用

- 防抖：输入框输入搜索、窗口大小的resize、用户点击收藏
- 节流：滚动加载，加载更多或滚动到底部监听、高频点击提交，表单重复提交

## new

``` js
function newFn(fn,...args) {
  // 如果不是function直接return
  if (typeof fn !== 'function') return
  // 1. 创建一个新对象
  const newObj = {}
  // 2. 设置原型链,实现继承
  newObj.__proto__ = fn.prototypefn.prototype
  // 3. 改变this指向,让fn中的this指向newObj,并指向fn的函数体
  fn.apply(newObj,args)
  return newObj
}
```

## 去重

### ES5

### ES6

### 双层for
