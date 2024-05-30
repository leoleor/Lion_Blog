---
title: 'vue3'
category:
  - 面试
  - 知识点
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

### 响应式原理

- vue2: Object.defineProperty()
- vue3: Proxy

### 定义响应式数据

- ref 基本数据类型
- reactive 引用数据类型
- toRefs 解构 let num = toRefs(reactive(obj))

> 注意.value

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

### 周边

- vue-cli 4.5.0
- Vue Router 4.0
- Vuex 4.0
- Element plus
- Vite
- Pinia

## 实际用法相比

### 插槽

- vue2插槽可以在任意元素上

``` js
<div slot="left">我是插槽</div>
```


- vue3插槽需要在template元素上

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

### 获取元素信息(ref)

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
