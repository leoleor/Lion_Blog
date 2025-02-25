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

## vue2与vue3的区别

### 生命周期

![](/images/vue/vue2_vs_vue3_life.jpg)

- 钩子函数加 `on`
- `beforeCreate` 和 `created` 包含在 `setup` 函数中
- `beforeDestroy` 改为 `onBeforeUnmount`，`destroyed` 改为 `onUnmounted`

### 响应式原理

- vue2: Object.defineProperty()
- vue3: Proxy

::: tip Object.defineProperty()与Proxy的区别
- Object.defineProperty()劫持各个属性的setter和getter；不能监听数组的变化、不能监听新增/删除的属性；初始化的时候需要 `深层遍历` 每个对象的属性，花费更多时间
- 通过Proxy劫持属性；能够拦截数组的变化；监听整个对象，不需要进行遍历属性，优化性能
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

## ref、reactive、toRef 和 toRefs

1. ref 

- ref是一个函数，用于创建一个包含响应式数据的引用对象。
- ref函数可以接收原始数据类型与引用数据类型。
- ref 函数创建的响应式数据，在模板中可以直接被使用，在JS 中需要通过.value 的形式才能使用。

```js
import { ref } from 'vue';

const count = ref(0);
console.log(count.value); // 输出: 0
 
count.value++;
console.log(count.value); // 输出: 1
```

2. reactive

- reactive也是一个函数，用于创建一个响应式的对象。
- reactive函数只能接收引用数据类型。

```js 
import { reactive } from 'vue';

const state = reactive({
  count: 0,
  message: 'Hello, Vue!'
});
console.log(state.count); // 输出: 0
 
state.count++;
console.log(state.count); // 输出: 1
```

3. toRef

- toRef函数用于将一个reactive对象的某个属性转换为一个ref对象。
- 它接受两个参数：一个是reactive对象，另一个是要转换的属性名。
- 转换后的ref对象与原始reactive对象的属性保持双向绑定关系。

```js
import { reactive, toRef } from 'vue';
 
const state = reactive({
  count: 0
});
const countRef = toRef(state, 'count');
console.log(countRef.value); // 输出: 0
 
countRef.value++;
console.log(state.count); // 输出: 1
console.log(countRef.value); // 输出: 1
```

4. toRefs

- toRefs函数是toRef的扩展，它用于将一个reactive对象的所有属性转换为一组ref对象。
- 它接受一个reactive对象作为参数，并返回一个包含所有属性ref对象的普通对象。

```js
import { reactive, toRefs } from 'vue';
 
const state = reactive({
  count: 0,
  message: 'Hello, Vue!'
});
const stateRefs = toRefs(state);
console.log(stateRefs.count.value); // 输出: 0
 
stateRefs.count.value++;
console.log(state.count); // 输出: 1
console.log(stateRefs.count.value); // 输出: 1
```

### ref和reactive的区别

::: tip 概念/使用方式/使用场景
- 他们都是用来创建响应式数据的函数，接收参数，并返回一个经过响应式处理的代理对象。
- ref可以接收基本数据类型和引用类型；reactive只能接收引用类型。
- ref创建出来的数据在template中可以直接使用，在js中需要使用.value；reactive创建出来的数据在template和js中都可以直接使用。
- ref一般用于基本数据类型；reactive一般用于处理比较复杂的对象类型。
:::
