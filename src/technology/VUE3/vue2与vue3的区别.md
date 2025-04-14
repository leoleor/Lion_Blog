---
title: 'vue2与vue3的区别'
category:
  - 面试
  - 知识点
tag:
  - VUE
star: false
sticky: false  
article: true
---

## vue2与vue3的区别

### 生命周期

![](/images/vue/vue2_vs_vue3_life.jpg)

- 钩子函数加 `on`
- `beforeCreate` 和 `created` 包含在 `setup` 函数中
- `beforeDestroy` 改为 `onBeforeUnmount`，`destroyed` 改为 `onUnmounted`

### 响应式原理

- vue2: Object.defineProperty()
- vue3: Proxy

::: tip vue2和vue3响应式的区别
- 原理: vue2使用Object.defineProperty()来实现响应式。它可以劫持对象属性的getter和setter，但是无法检测对象属性的新增或删除，也不能监听数组长度的变化和数组方法的调用。可以使用vue.set或者vue.delete去监听对象属性的添加或者删除，对于数组的话，vue重写了7个数组方法（push、pop、shift、unshift、splice、sort、reverse）来实现对数组的响应式出力；vue3使用ES6的Proxy对象来实现响应式。Proxy能拦截对象的各种操作，包括属性的访问、赋值、删除等，对数组的所有操作也都能触发响应式更新。
- 性能: 在处理大型对象的时候，Object.defineProperty()由于需要递归遍历对象的所有属性，在性能上会有些问题；Proxy是对整个对象进行代理，不需要递归遍历，所以性能更好。
:::


### 定义响应式数据

- vue2：定义在data函数返回的对象里
- vue3：ref定义基本数据类型，reactive定义引用类型

### API层面

- vue2（option API 选项卡式）

  - 处理数据

  将代码分割到各个钩子函数中（data，methods，watch，computed），导致大型页面和组件后期代码臃肿，难于阅读
  
  - 复用逻辑

  通过mixins，缺点：命名空间冲突 & 渲染上下文中暴露的 property 来源不清晰

- vue3（Composition API 组合式）

  - 通过set up函数关联
  
  把处理同一逻辑的操作写在一起，封装成一个函数

### 多根节点

- vue2：组件只有一个根节点
- vue3：组件有多个根本节点

### 注册组件

- vue2：组件除了import引入之外，还需要在component里注册
- vue3：借助script set up语法糖，组件只需引入不用注册

### ts的支持度

- vue2：支持ts需要引入一些额外的库
- vue3：全面支持ts，可以快速使用

### 性能方面

- vue2：它在大型的项目，或者复杂场景下，可能会有一个性能瓶颈
- vue3：在v2的基础上，优化一些虚拟的算法；减少一些不必要的重绘，提升渲染速度等

## 实际用法相比

### 匿名插槽和具名插槽

- vue2父插槽可以写在元素上

``` js
<div slot="left">我是插槽</div>
```

- vue3父插槽需要定义在template元素上

``` js
<template #left>
  <div>我是插槽</div>
</template>
```

### 绑定全局变量

- vue2

```js
main.js

Vue.prototype.$store = store
```

- vue3

  - app.config.globalProperties

  ```js
  main.js

  app.config.globalProperties.$timeFormat = timeFormat
  ```

  template中直接用

  ```js
  <template>
    <div>{{ $timeFormat() }}</div>
  </template>
  ```

  script中

  ```js
  import { getCurrentInstance } from 'vue'
  const { proxy } = getCurrentInstance()

  proxy.$timeFormat()
  ```

  - provide/inject

  ```js
  main.js

  app.provide('global', {
    $timeFormat: timeFormat
  })
  ```

  template中

  ```js
  <template>
    <div>{{ global.$timeFormat() }}</div>
  </template>
  ```

  script中

  ```js
  import { inject } from 'vue'
  const global = inject('global')

  global.$timeFormat()
  ```

### 获取元素信息

```js
<template>
  <div ref="panelRef" id="panel"></div>
</template>
```

- vue2

```js
this.$refs.panelRef
this.$refs.panelRef.offsetWidth
this.$refs.panelRef.style.color = "red"
```

- vue3

```js
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()

const element = instance?.refs.panelRef?.$el as HTMLElement
element.offsetWidth
element.style.color = 'red'
```

::: tip 通过ID获取

```js
// document.querySelector('#panel') || document.getElementById('panel')
const element = document.getElementById('panel') as HTMLElement
element.offsetWidth
element.style.color = 'red'
```

:::

### 组件间调方法

```js
<overlayDialog ref="overlayDialogRef" />
```

overlayDialog里有一个initDialog方法

- vue2 正常调用

```js
this.$refs.overlayDialogRef.initDialog()
```

- vue3 子组件需要defineExpose({ initDialog })

```js
const overlayDialogRef = ref<any>(false)
overlayDialogRef.value.initDialog()
```

### 双向绑定

- vue2

```js
<div :visible.sync="show"></div>

this.$emit('update:visible')
```

- vue3

```js
<div v-model:visible="show"></div>

emit('update:visible')
```

### 使用calc

script中，在calc中使用模板字符串计算，vue2没问题，vue3不行

- vue2

```js
pageStyle.value = `height: calc(${ statusBarHeight * 2 }rpx + 378rpx - 60rpx)`
```

- vue3

```js
const calcValue = statusBarHeight * 2 + 378 - 60
pageStyle.value = `height: ${calcValue}rpx`
```