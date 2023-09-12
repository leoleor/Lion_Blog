---
title: 'vue3'
category:
  - 面试
tag:
  - VUE
star: false
sticky: false  
article: true
---

## 与vue2相比

### 生命周期

![](/images/vue/vue2_vs_vue3_life.jpg)

- 钩子函数加 `on`
- `beforeCreate` 和 `created` 包含在 `setup` 函数中
- `beforeDestroy` 改为 `onBeforeUnmount`，`destroyed` 改为 `onUnmounted`

### 多根节点

不需要在div外面包裹一层template

### script setup 语法糖

- 变量不需要return
- 组件只需引入不用注册

### 组合式 Composition API

- vue2（option API）

  - 处理数据

  将代码分割到各个钩子函数中（data，methods，watch，computed），导致大型页面和组件后期代码臃肿，难于阅读
  
  - 复用逻辑

  通过mixins，缺点：命名空间冲突 & 渲染上下文中暴露的 property 来源不清晰

- vue3

  - 自定义hooks
  
  把处理同一逻辑的操作写在一起，封装成一个函数


### 定义响应式数据

- ref 基本数据类型
- reactive 引用数据类型
- toRefs 解构 let num = toRefs(reactive(obj))

> 注意.value

### Hooks

- 钩子函数都变成了hooks函数形式
- watch，watchEffect（立即监听，和vue2的immediate:true）

### 响应式原理

- vue2: Object.defineProperty()
- vue3: Proxy

### 周边

- vue-cli 4.5.0
- Vue Router 4.0
- Vuex 4.0
- Element plus
- Vite
- Pinia

