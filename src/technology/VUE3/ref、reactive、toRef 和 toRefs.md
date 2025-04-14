---
title: 'ref、reactive、toRef 和 toRefs'
category:
  - 面试
  - 知识点
tag:
  - VUE
star: false
sticky: false  
article: true
---

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
