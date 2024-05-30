---
title: 'vue2'
category:
  - 面试
  - 知识点
tag:
  - VUE
star: false
sticky: false  
article: true
---

[vue上](https://juejin.cn/post/6919373017218809864)

[vue下](https://juejin.cn/post/6964779204462247950)

## MVVM

- 概念

  - Model(数据)
  - View(视图)
  - ViewModel(负责两者之间的数据处理操作)

- 特点

  - 低耦合: 视图view可独立于model的变化和修改
  - 可复用性: 视图逻辑viewModel可用于不同的view
  - 独立开发
  - 可测试性

- 总结

mvvm是前后端分离的一种技术，m是model数据层，v是view视图层，vm是处理数据与视图逻辑的桥梁viewmodel层。

mvvm最核心的部分就是viewmodel层，它向上与视图层进行数据双向绑定，向下与model层通过接口请求进行数据交互。

vue里就是将以前繁琐的dom操作，通过js去编写成一个通用的viewmodel，使得我们前端开发更专注于界面，以及界面上的交互。

它具有低耦合、可复用性、独立开发、可测试性的特点

## 生命周期

### 组件生命周期

- create：beforeCreate、created（不可操作dom，掉接口）
- mount：beforeMount、mounted（可操作dom，$refs）
- update：beforeUpdate、updated
- destroy：beforeDestroy、destroyed（销毁定时任务）

> 加载一个子组件的过程:

> 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount  
> 子mounted->父mounted  
> 父beforeUpdate->子beforeUpdate->子updated->父updated  
> 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed  

### KeepAlive生命周期

keep-alive有单独的生命周期activated、deactivated。当组件被换掉时，会被缓存到内存中，触发 deactivated 生命周期；当组件被切回来时，再去缓存里找这个组件、触发 activated钩子函数。

当引入keep-alive的时候，页面第一次进入，钩子的触发顺序created-> mounted-> activated，退出时触发deactivated。
当再次进入（前进或者后退）时，只触发activated。

## 双向绑定

vue2.0 是采用 `数据劫持` 结合 `发布者-订阅者模式` 的方式，通过 `Object.defineProperty()` 来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调来渲染视图。
```js
​Object.defineProperty(obj, "obj的属性", {
  get: function(){}, 
  set: function(){}
})
```

> 实现思路:

1. 实现一个监听器Observer，劫持数据
2. 还需要一个订阅器Dep，在监听器捕获数据的时候添加订阅者，更新数据的时候发布通知
3. 实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图
监听器和订阅者不是直接通讯的，而是通过订阅器（发布订阅模式）

## v-model

[掘金文章](https://juejin.cn/post/7049135444310622245)

- 一种语法糖

  - input的text类型使用 value 属性和 input 事件

  ``` vue
  <input v-bind:value="searchText" v-on:input="searchText = $event.target.value" />
  ```    
              
  - checkbox 和 radio 使用 checked 属性和 change 事件

  ``` vue
  <input type="radio" value="1" :checked="foo = '1'" @change="foo = $event.target.value" />
  ```

  - select 使用 value 属性 和change 事件

  ``` vue
  <select :value="foo" @change="foo = $event.target.value">
  ```

- 双向绑定，单向数据流

单向数据流: 子组件不能改变父组件传递给它的 prop 属性，推荐的做法是它抛出事件，通知父组件自行改变绑定的值。


- 总结

v-model，第一它本质是一种语法糖，用来监听用户输入事件以更新数据，比如作用在input框的v-bind绑定value和v-on监听input、作用select标签的value属性和change事件、作用在radio标签的checked属性和change事件；第二它具有双向数据绑定以及单向数据流特性，双向数据绑定就是刚刚第一点提到的，可以在input、select元素上创建双向数据绑定，单向数据流就是子组件不能修改父组件传递给它的 prop 属性（可以通过emit出去一个事件在父元素接收）

## 虚拟DOM

- 面试话术

虚拟DOM是真实DOM的抽象，通过js来表示DOM结构，它可以将多次DOM修改的结果一次性的更新在页面上，从而有效的减少页面的渲染次数，减少浏览器的重排重绘次数，提高渲染性能。

- 为什么要用虚拟DOM

  1. 保证性能下限（首次渲染大量DOM时，由于多了一层虚拟DOM的计算，会比innerHTML插入慢）
  2. 无需手动操作DOM，提升开发效率
  3. 跨平台：服务端渲染、uniapp

- diff算法

策略: 深度遍历，同层比较

- vue中的key

  - v-for更高效的更新渲染虚拟DOM
  - v-if标识唯一元素，避免就地复用


## 组件通信

- `props` (父->子) / $emit (子->父)
- `$ref` (父->子只能一级，不能跨级)
- `$children` (父->子) / $parent (子->父)
- `eventBus` ($emit/$on)
- `vuex`

- `$attrs / $listeners` (父->子孙)

  - `$attrs`: 除了组件内props声名了的所有给组件传的值（class,style除外）
  
  在子组件上用v-bind=“attrs”，用的时候直接this.$attrs(上一层定义在props就不会传到下层了)

  ```js
  // A组件
  <B :pchild1="child1" :pchild2="child2" :pchild3="child3" />
  data() {
    return {
      child1:'1',
      child2: 2,
      child3:{
        name:'child3'
      }
    };
  },

  // B组件
  <C v-bind="$attrs" />
  props: {
    pchild1:{
      type:String
    }
  }
  console.log(this.pchild1) // 1
  console.log(this.$attrs) // { pchild2, pchild3 }

  // C组件
  console.log(this.pchild1) // undefined
  console.log(this.$attrs) // { pchild2, pchild3 }
  ```

  - `$listeners`: 接收除了带有.native事件修饰符的所有事件监听器

  当出现同名的事件时，不会被覆盖，而是都会执行，执行顺序就是事件冒泡的执行顺序，先触发child 再触发parent

- `Provide / inject` (父->子孙) (适用于高阶组件)

``` js
provide() {
  return {
    msg: "父组件提供给子孙组件的值"    
  } 
}
子组件接收：
inject: ['msg']
```

## watch和computed

1. watch监听属性，computed计算属性
2. watch可以监听的数据源：data、props、computed；computed不在data里，而是根据data、props里的数据计算出一个新的值
3. watch不支持缓存，监听的数据变化就触发相应操作；computed缓存计算结果，只有依赖的数据变化才会重新计算
4. watch支持异步；computed不支持异步
5. 例子: watch: 待补充；computed: 拼接，原价打折计算结果

watch用法

``` js
// 设置immediate: true，当值第一次绑定的时候，立即执行监听函数/执行handler方法
// 设置deep: true，当对象的属性较多是，每个属性的变化都会执行handler
watch: { 
  pageSize(newVal, oldVal) { // 简单监听
    console.log(newVal, oldVal) 
  },
  person: { // 对对象进行深度监听
    handler(nv) {
      console.log(nv)
    },
    immediate: true,
    deep: true
  },
  'person.name': { // 对对象的某一个属性进行深度监听
    handler(nv) {
      console.log(nv)
    },
    immediate: true,
    deep: true
  }
}
```
computed用法
``` js
computed: {
  fullName() {
    return this.surname + '~' + this.name
  }
}
```

## v-show和v-if

- 相同: 控制元素在页面的显隐，用法也相同

- 不同

  - 控制手段：v-show通过为元素添加css样式的display:none；v-if通过添加或删除dom元素
  - 触发周期：v-show不触发生命周期；v-if会触发生命周期: 
                                    false→true触发beforeCreate、created、beforeMount、mounted，
                                    true→false触发beforeDestory、destoryed
  - 性能消耗：v-show有更高的初始渲染消耗；v-if有更高的切换消耗

## 指令

### 内置指令

Vue一共有16个自带指令，包括了：

`v-text`、`v-html`、`v-show`、`v-if`、`v-else`、`v-else-if`、`v-for`、`v-on`、`v-bind`、`v-model`、`v-slot`、`v-pre`、`v-cloak`、`v-once`、`v-memo`、`v-is`，其中 `v-memo` 是3.2新增的，`v-is` 在3.1.0中废弃

- v-text：v-text的作用是，用于更新元素的 textContent

``` vue
<h1 v-text="msg"></h1>
```

- v-html：与v-text很像，只是v-html用于更新元素的 innerHTML

```vue
<div v-html="'<h1>Hello LBJ</h1>'"></div>
```

- v-show：v-show可以根据表达式的真假值，切换元素的display值，用于控制元素的展示和隐藏

```vue
<div v-show="true">v-show 不支持 <template></div>
```

- v-if：v-if用于根据表达式的真假值，来有条件地渲染元素

```vue
<div v-if="true">v-if 支持 <template></div>
```

- v-else：v-else无需表达式，表示添加一个“else 块”，相当于v-if满足条件时展示v-if的元素，否则展示v-else的元素

```vue
<div v-if="true">1</div>
<div v-else>v-else前一个兄弟元素必须有 v-if 或 v-else-if</div>
```

- v-else-if：表示 v-if 的“else if 块”，和v-else一样，前一个兄弟元素必须有v-if或 v-else-if

```vue
<div v-if="a==1">1</div>
<div v-else-if="a==2">2</div>
<div v-else>3</div>
```

- v-for：v-for一个用于迭代的指令，可以根据源数据多次渲染元素或模板块

```vue
<div v-for="(item, index) in items" :key="index"></div>
```

- v-on：v-on用于给元素绑定事件，可以缩写为：@

  修饰符
  - .stop - 调用 event.stopPropagation()
  - .prevent - 调用 event.preventDefault()
  - .capture - 添加事件侦听器时使用 capture 模式
  - .self - 只当事件是从侦听器绑定的元素本身触发时才触发回调
  - .{keyAlias} - 仅当事件是从特定键触发时才触发回调
  - .once - 只触发一次回调
  - .left - 只当点击鼠标左键时触发
  - .right - 只当点击鼠标右键时触发
  - .middle - 只当点击鼠标中键时触发
  - .passive - { passive: true } 模式添加侦听器

```vue
<!-- 停止冒泡 -->
<!-- 用在普通元素上时，只能监听原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件 -->
<button @click.stop="doThis"></button>
```

- v-bind：v-bind用于绑定数据和元素属性，可以缩写为: 或.(当使用 .prop 修饰符时)

  修饰符
  - .camel - 将 kebab-case attribute 名转换为 camelCase
  - .prop - 将一个绑定强制设置为一个 DOM property。3.2+
  - .attr - 将一个绑定强制设置为一个 DOM attribute。3.2+

```vue
<div :someProperty.prop="someObject"></div>
<!-- 相当于 -->
<div .someProperty="someObject"></div>
```

- v-model：双向绑定语法糖，v-model限制于：`<input> <select> <textarea> components`

  修饰符
  - .lazy - 惰性更新，监听 change 而不是 input 事件
  - .number - 输入字符串转为有效的数字
  - .trim - 输入首尾空格过滤

```vue
<input v-mode="value" />
```

- v-slot：v-slot用于提供具名插槽或需要接收 prop 的插槽，可以缩写为：#

- v-pre：v-pre指令用于跳过这个元素及其子元素的编译过程

- v-cloak：v-cloak指令主要用于解决插值表达式在页面闪烁问题

```vue
<!-- 这样div只会在编译结束后显示 -->
<div v-cloak>{{ message }}</div>
```

```css
[v-cloak] {
  display: none;
}
```

- v-once：v-once指令用于表示只渲染一次，当要重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过

- v-memo：用于缓存一个模板的子树 3.2+

该指令接收一个固定长度的数组作为依赖值进行记忆比对。如果数组中的每个值都和上次渲染的时候相同，则整个该子树的更新会被跳过

```vue
<!-- 在重新渲染时，如果 valueA 与 valueB 都维持不变，那么对这个 <div> 以及它的所有子节点的更新都将被跳过 -->
<div v-memo="[valueA, valueB]"></div>
```

- v-is：已在 3.1.0 中废弃，改用:is

```vue
<component :is="currentView"></component>
```

### 自定义指令

#### 使用

1. 全局注册：使用 `Vue.directive(id,definition)`

```js
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

2. 局部注册：使用组件中 `directives` 选项

```js
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

#### 钩子函数

均为可选

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。

- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。

- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。

- `unbind`：只调用一次，指令与元素解绑时调用。

#### 钩子函数参数

- `el`：指令所绑定的元素，可以用来直接操作 DOM。
- `binding`：一个对象，包含以下 property：
  - `name：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

::: warning
除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 `dataset` 来进行。
:::

#### 案例

- v-hasPermission

- v-focus

- v-adaptiveHeight

## 修饰符

[参考文章](https://blog.csdn.net/Yannnnnm/article/details/112485543)

`.lazy`、`.trim`、`.number`、`.stop`、`.prevent`、`.self`、`.once`、`.capture`、`.passive`、`.native`、`.left`、`.right`、`.middle`、`.sync`、`.camel`、`.prop`

vue中修饰符分为以下五种：

- 表单修饰符
- 事件修饰符
- 鼠标按键修饰符
- 键值修饰符
- v-bind修饰符

### 表单修饰符

- lazy
在我们填完信息，光标离开标签的时候，才会将值赋予给value，也就是在change事件之后再进行信息同步

```js
<input type="text" v-model.lazy="value">
<p>{{value}}</p>
```

- trim
自动过滤用户输入的首空格字符，而中间的空格不会过滤

```js
<input type="text" v-model.trim="value">
```

- number
自动将用户的输入值转为数值类型，但如果这个值无法被parseFloat解析，则会返回原来的值

```js
<input type="number" v-model.number="age">
```

### 事件修饰符

- stop
阻止了事件冒泡，相当于调用了event.stopPropagation方法

```js
<div @click="shout(2)">
  <button @click.stop="shout(1)">ok</button>
</div>
//只输出1
```

- prevent
阻止了事件的默认行为，相当于调用了event.preventDefault方法

```js
<form v-on:submit.prevent="onSubmit"></form>
```

- self
只当在 event.target 是当前元素自身时触发处理函数

```js
<div v-on:click.self="doThat">...</div>
```

::: warning
使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击
:::

- once
绑定了事件以后只能触发一次，第二次就不会触发

```js
<button @click.once="shout(1)">ok</button>
```

- capture
使事件触发从包含这个元素的顶层开始往下触发

```js
<div @click.capture="shout(1)">
  obj1
  <div @click.capture="shout(2)">
    obj2
    <div @click="shout(3)">
      obj3
      <div @click="shout(4)">
        obj4
      </div>
    </div>
  </div>
</div>
// 输出结构: 1 2 4 3 
```

- passive
在移动端，当我们在监听元素滚动事件的时候，会一直触发onscroll事件会让我们的网页变卡，因此我们使用这个修饰符的时候，相当于给onscroll事件整了一个.lazy修饰符

```js
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

::: warning
不要把 .passive 和 .prevent 一起使用,因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。
passive 会告诉浏览器你不想阻止事件的默认行为
:::

- native
让组件变成像html内置标签那样监听根元素的原生事件，否则组件上使用 v-on 只会监听自定义事件

```js
// 如果只是 v-on:click="doSomething" 则不会触发 doSomething 方法
<my-component v-on:click.native="doSomething"></my-component>
```

### 鼠标按钮修饰符

- left 左键点击

- right 右键点击

- middle 中键点击

```js
<button @click.left="shout(1)">ok</button>
<button @click.right="shout(1)">ok</button>
<button @click.middle="shout(1)">ok</button>
```

### 键盘修饰符

键盘修饰符是用来修饰键盘事件（onkeyup，onkeydown）的，有如下：

keyCode存在很多，但vue为我们提供了别名，分为以下两种：

- 普通键（enter、tab、delete、space、esc、up…）

- 系统修饰键（ctrl、alt、meta、shift…）

```js
// 只有按键为keyCode的时候才触发
<input type="text" @keyup.keyCode="shout()">
```

### v-bind修饰符

- sync（(2.3.0+) 语法糖，相当于给props开启了双向数据绑定）

```js
// 父组件
<comp :myMessage.sync="bar"></comp> 

// 子组件
this.$emit('update:myMessage',params);

// 子组件直接修改父组件传递过来的值会被vue2警告
// myMessage 需要一致
```

- prop（作为一个 DOM property 绑定而不是作为 attribute 绑定）。

- camel（(2.1.0+) 将 kebab-case attribute 名转换为 camelCase）

## nextTick

- 概念

在下次DOM更新循环结束之后执行延迟回调
  
- 为什么存在

因为Vue 更新DOM时 是采用 `异步更新策略`，当监听到数据发生变化的时候不会立即去更新DOM。  
比如：点击按钮改变视图元素的值，然后获取视图元素的值打印，获取还是改变前的，因为视图还没有渲染完。

::: warning Vue 异步更新策略
Vue 在更新 DOM 时是异步执行的。
只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。
如果同一个 watcher 被多次触发，只会被推入到队列中一次。
这种在缓冲时去除重复数据对于 `避免不必要的计算和 DOM 操作` 是非常重要的。
然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。
Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。
:::

- 作用

nextTick 接收一个回调函数作为参数，并将这个回调函数延迟到DOM更新后才执行

- 实现原理

将传入的回调函数包装成异步任务，异步任务又分微任务和宏任务，为了尽快执行所以优先选择微任务；
nextTick 内对浏览器的兼容性进行优雅降级处理 `Promise.then(微)` > `MutationObserver(微)` > `setImmediate(宏)` > `setTimeout(fn,0)(宏)`

## set

[文章](https://blog.csdn.net/liu19721018/article/details/125554525)

- 用途

在Vue2中当我们通过数组的下标去修改数组值，或者向对象添加添加属性时，对应的视图都无法进行更新，这是因为我们所添加的数据不是响应式的，无法响应视图的变化。那么此时我们可以通过 `$set` 来实现。对于数组可以通过 `this.$set(this.arr,0,'xx')` 来去修改数组下标对应的值，对于对象可以通过 `this.$set(this.obj,'a','xxx')` 向对象新增属性a。
   
- 例子

`this.persons[0].name = '马老师'` 通过直接修改数组里面对象的值，页面模板改变。

`this.persons[0] = {id:'001',name:'马老师',age:50,sex:'男'}` 通过索引改数组的值，页面模板不变，
因为Vue用数据代理 `Object.defineProperty get()、set()` 进行模板更新，
而原生的数组方法无法实现这一点。【**如果数组每一个都加get、set，那么会严重影响代码效率**】

因此vue重写了`push 、pop 、shift 、unshift 、splice 、sort 、reverse`

- 原理

当$set所设置的目标对象为数组时，则调用目标对象的splice方法将修改的数据变为响应式。

当$set所设置的目标对象为对象时，先判断这个属性是否在对象上，如果不在就给目标对象的属性添加响应式

## vuex

- 概念

1. `state`：相当于组件的data this.$store.state.num
2. `getters`：相当于组件的computed this.$store.getters.getNum
3. `mutations`(更改vuex中的状态的唯一办法就是提交mutation)： 相当于组件的methods，但不能使用异步 this.$store.commit("increase", 3)
4. `actions`：处理异步 this.$store.dispatch('decreaseAsync')
5. `module`：模块化，命名空间 `namespace`

- 辅助函数

mapState、mapGetters、mapActions、mapMutations

- 为什么mutations不能处理异步

Vuex中所有的状态更新的唯一途径都是mutation，异步操作通过 Action 来提交 mutation实现，这样使得我们可以方便地跟踪每一个状态的变化，从而让我们能够实现一些工具（devtools）帮助我们更好地了解我们的应用。


## Mixins

> 生命周期先执行，data数据和其他选项卡重名会被覆盖

- mixin 中定义的方法和参数`在各组件中不共享`， 即当前组件对mixins的属性的修改，其他也引用了这个mixins的组件不会受影响;

- mixin 中定义的`生命周期函数会比引用组件的生命周期先执行`，会和组件中定义的methods、created等选项合并调用;

- mixin 对象里的(components、methods、computed、data)这些选项，混入组件时选项会被合并，重名冲突时`优先采用组件中定义的数据`;

- 果同时引入多个mixin对象，`执行顺序和引入顺序一致`;

## 插槽

### 作用
`插槽`：父组件提供内容，在子组件中展示。  
`作用域插槽`：子组件提供内容（数据），在父组件中展示。

### 类型

- 匿名插槽
```js
// 父组件
<niming>11</niming>

// 子组件
<template>
  <div>
    <div>我是匿名插槽</div>
    <div class="slot">
      <slot />
    </div>
  </div>
</template>
```

- 具名插槽
``` js
// 父组件
<juming>
  <template slot="slot1">
    <div>这是蓝色</div>
  </template>
  <template slot="slot2">
    <div>这是绿色</div>
  </template>
</juming>

// 子组件
<template>
  <div>
    <div>我是具名插槽</div>
    <div style="background-color:blue"><slot name="slot1" /></div>
    <div style="background-color:green"> <slot name="slot2" /></div>
  </div>
</template>
```

- 作用域插槽
``` js
// 父组件1
<zyy1 :list="list">
  <template slot-scope="scope">
    {{ scope.$index }} - {{ scope.itemName.name }}
  </template>
</zyy1>

// 子组件1
<template>
  <div>
    <div>我是作用域插槽1</div>
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <slot :itemName="item" :index="index" />
      </li>
    </ul>
  </div>
</template>

// 父组件2
<zyy2 :user-info="userInfo">
  <template slot-scope="scope">
    {{ scope.info }}
  </template>
</zyy2>

// 子组件2
<template>
  <div>
    <div>我是作用域插槽2</div>
    <slot :info="userInfo" />
  </div>
</template>
```

## 设计模式

- 单例模式：new多次，只有一个实例
- 工厂模式：传入参数就可以创建实例（虚拟节点的创建）
- 发布订阅模式：eventBus、双向数据绑定
- 观察者模式：watch
- 代理模式：_data属性、proxy、防抖、节流
- 中介者模式：vuex
- 策略模式
- 外观模式

::: warning 观察者 vs 发布订阅
1. 观察者模式，被观察者和观察者之间可以直接通讯；发布订阅模式，消息发送者不会将消息直接发送给订阅者，而是通过一个事件通道传递（直签公司和外派公司）
2. 观察者模式需要定义两个类，一个被观察者类（里面需要有添加观察者方法、通知方法）、一个观察者类（定义需要执行的方法）；发布订阅模式只需要定义一个类（里面需要定义发布方法、订阅方法）
3. 观察者模式没有完全解耦；发布订阅模式实现了发布者和订阅者的解耦
:::

