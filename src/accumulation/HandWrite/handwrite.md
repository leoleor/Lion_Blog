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

::: tabs

@tab 双层for

```js
function noRepeat(arr) {
  // 第一层for控制循环次数
  for(var i = 0; i < arr.length; i++) {
    // 第二层for用于控制与第一层比较的元素
    for(var j = i+1; j < arr.length; j++) {
      // 如果相等
      if (arr[i] === arr[j]) {
        // 删除后面 即第j个位置上的元素 删除个数1个
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}
```

@tab ES5

```js
const newArr = arr.filter((item,index) => arr.indexOf(item) === index)
```

@tab ES6

``` js
const newArr = [...new Set(arr)]
​const newArr = Array.from(new Set(arr))
```

:::

## 排序

::: tabs

@tab 冒泡排序

```js
//第一层控制比较轮次，每一轮最后一个最大，所以5个数比4轮就够
for (var i = 0; i < arr.length - 1; i+) {
  // 每一轮比较的次数，第一轮比4次，第二轮比3次，第三轮比2次
  for (var j = 0; j < arr.length - 1 - i; j+) {
    if(arr[j] > arr[j + 1]) {
      temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}
```

@tab 选择排序

```js
//第一层控制比较轮次，每一轮最后一个最大，所以5个数比4轮就够
for (var i = 0; i < arr.length - 1; i+) {
  // 每一轮都拿当前值和它后面所有元素比较，第一轮a[0]=3
  // 然后和后面4个比较，比较4次后a[0]=1，每一轮第一个最小
  for (var j = i + 1; j < arr.length; j+) {
    if(arr[i] > arr[jl) {
      temp = arr[il
      arr[il = arrljl
      arr[jl]= temp
    }
  }
}
```

@tab 快速排序

```js
function quickSort (arr) {
  if (arr.length <= 1) return arr
  const num = arr[0]
  const left = []
        right = []
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > num) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return left.concat([num],right) // 从大到小
}
```

@tab sort

```js
arr.sort((a,b)=〉a-b)
```

:::

## 深拷贝

```js
var obj = {
  name: "test",
  main: {
    a: 1,
    b: 2
  },
  fn: function () {},
  friends: [1, 2, 3, [22, 33]]
};

function deepClone(obj) {
  const isObj = (val) => typeof val === "object" && val !== null;
  const newObj = obj instanceof Array ? [] : {};
  for (key in obj) {
    const item = obj[key];
    newObj[key] = isObj(item) ? deepClone(item) : item;
  }
  return newObj;
}

var obj2 = deepClone(obj);
obj2.name = "修改成功";
obj2.main.a = 100;
console.log(obj, obj2);
```

## call、apply、bind

1. 当我们使用一个函数需要改变this指向的时候才会用到call/apply/bind
2. 如果你要传递的参数不多，则可以使用fn.call(thisObj, arg1, arg2 ...)
3. 如果你要传递的参数很多，则可以用数组将参数整理好调用fn.apply(thisObj, [arg1, arg2 ...])
4. 如果你想生成一个新的函数长期绑定某个函数给某个对象使用，则可以使用const newFn = fn.bind(thisObj); newFn(arg1, arg2...)

bar.call(foo)  
理解: call 改变了 this 的指向，指向到 foo，执行bar 

[别人博客](https://github.com/mqyqingfeng/Blog)

::: tabs

@tab call

```js
Function.prototype.myCall = function (context) {
  // 
  console.log(context, this);
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context);
  }
  const myFn = Symbol(); // 使用Symbol 来确定唯一
  context[myFn] = this; // 模拟对象的this指向
  const args = [...arguments].splice(1);
  const result = context[myFn](...args);
  delete context[myFn];
  return result;
}

const a = {
  value: "前端"
}

function b(value1, value2) {
  console.log([ ...arguments]); // ['后台'，'全栈']
  console.log(this.value + "和" + value1 + "还有" + value2); // 前端和后台还有全栈
  console.log(`${this.value}和${value1}还有${value2}`); // 前端和后台还有全栈
}

b.call(a, "后台", "全栈");
b.myCall(a, "后台", "全栈");
```

@tab apply

```js
Function.prototype.myApply = function (context) {
  // { value: '前端' } [Function: b] [ { value: '前端' }, ['后台', '全栈'] ]
  console.log(context, this, [...arguments]);
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  if (context === null || context === undefined) {
    context = window;
  } else { 
    context = Object(context);
  }
  const myFn = Symbol(); // 使用Symbol 来确定唯一
  context[myFn] = this; // 模拟对象的this指向
  const args = [...arguments][1];
  const result = arguments.length > 1 ? context[myFn](...args) : context[myFn]();
  delete context[myFn];
  return result;
}

const a = {
  value: "前端"
}
function b(...args) {
  console.log(this.value); // 前端
  console.log(args); // [后台，全栈']
  console.log([...arguments]); // [后台’，'全栈’]
}
b.apply(a, ["后台", "全栈"]);
b.myApply(a, ["后台","全栈"]);
```

@tab bind

```js
Function.prototype.myBind = function (context) {
  // [ value: '前端' ] [Function: b] [ { value: '前端’ }, '后台', '全栈' ]
  console.log(context, this, [...arguments]);
  if (typeof this !== "function") {
    throw new Error("type error");
  }
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context);
  }
  const self = this; // 模拟对象的this指向
  const args = [ ...arguments].splice(1);
  return function Fn(...newFnArgs) {
    if (this instanceof Fn) {
      return new self(...args, ...newFnArgs);
    }
    return self.apply(context, [...args, ...newFnArgs])
  }
}

const a = {
  value: "前端"
}
function b(value1, value2) {
  console.log(this.value); // 前端
  console.log(value1); // 后台
  console.log(value2); // 全栈
  console.log([...arguments]); // ['后台', '全栈']
}

const c = b.bind(a, "后台", "全栈");
c();
const myC = b.myBind(a, "后台", "全栈");
myc();
```

:::

## 继承

[JavaScript的继承，原型和原型链](https://juejin.cn/post/7015175738261241869)

[ES6的类Class中的super关键字](https://www.cnblogs.com/wenxuehai/p/10361653.html)

- 当做函数使用时，内部this指向子类实例
- 当做对象使用时，在普通对象方法中，指向父类的原型对象(在子类的普通方法中调用父类方法，方法内的this指向子类实例)；
  在静态方法中，指向父类(子类的静态方法中调用父类方法，方法内的this指向子类)


### 寄生组合

> es6之前 寄生组合继承(原型链+借用构造函数)

- 优点

1. 可以继承实例属性/方法，也可以继承原型属性/方法
2. 不存在引用属性共享问题
3. 可传参
4. 父类原型上的函数可复用

- 缺点: 调用了两次父类构造函数，生成了两份实例

```js
function Parent(name) {
  this.name = name;
}

Parent.prototype.eat = function () {
  console.log(this.name + " is eating");
}

const parent = new Parent("父亲");
console.log(parent.name); // 父亲
parent.eat(); // 父亲 is eating

function Child(name，age) {
  Parent.call(this, name);
  this.age = age;
}

// object.create(Parent.prototype) 等同于 new Parent()
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

const child = new Child("儿子"，18);
console.log(child.name); // 儿子
console.log(child.age); // 18
child.eat(); // 儿子 is eating
```

### class

> es6 class语法

- 优点: 语法简单易懂，操作更方便

- 缺点: 浏览器兼容class关键字

```js
class Parent {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + " is eating");
  }
}

const parent = new Parent("父亲");
console.log(parent.name); // 父亲
parent.eat(); // 父亲 is eating

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
 
const child = new Child("儿子"，18);
console.log(child.name); // 儿子
console.log(child.age); // 18
child.eat(); // 儿子 is eating
```

## 递归累加1-100

::: tabs

@tab 方法一

```js
function add(a,b) {
  let sum = a + b;
  if (b + 1 > 100) {
    return sum;
  } else {
    return add(sum, b + 1);
  }
}
const sum = add(1，2);
console.log(sum);
```

@tab 方法二

```js
function add(n) {
  if (n === 1) {
    return n;
  } else {
    return add(n - 1) + n;
  }
}
const sum = add(100);
console.log(sum);
```

:::

## 分组

```js
const arr = [{ "id": 1, "name": "张三" },
  { "id": 1, "name": "李四" },
  { "id": 2, "name": "王五" },
  { "id": 3, "name": "赵柳" }
];

const map = {};
const dest = [];
for (let i = 0; i < arr.length; i++) {
  const ai = arr[i];
  if (!map[ai.id]) { // 是否存在id
    dest.push({
      id: ai.id,
      name: [ai.name]
    });
    map[ai.id] = ai;
  } else {
    for (let j = 0; j < dest.length; j++) {
      const dj = dest[j];
      if (dj.id === ai.id) {
        dj.name.push(ai.name);
        break;
      }
     }
  }
}
console.log(dest);
```
