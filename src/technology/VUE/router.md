---
title: 'vue路由'
category:
  - 面试
  - 知识点
tag:
  - VUE
  - 路由
star: false
sticky: false  
article: true
---

## 前言

传统的网页根据用户访问的不同的地址，浏览器从服务器获取对应页面的内容展示给用户。这样造成服务器压力比较大，而且用户访问速度也比较慢。

## 前端路由

hash模式就是通过监听浏览器的hash值(锚点)来实现前端渲染；  
history模式是通过操作浏览器的历史记录并监听这个动作来实现前端渲染。浏览器每访问一个地址，都会在浏览器栈里存入路径记录。

### 模式
- hash模式：location.hash+hashchange

location.hash始终指向页面url中#之后的内容，用来修改浏览器的地址；  
hashchange来监听变化做出相应渲染
         ​
- history模式：html5推出的historyAPI

window.history.go、window.history.forward、window.history.back、window.history.pushState、window.history.replaceState，主要通过pushState和replaceState实现；popstate来监听变化

### 区别
- 外观

hash带#

- 兼容性

history利用的是html5推出的historyAPI，兼容性差

- 是否需要后端配合

hash模式只由前端控制；history模式需要我们与后端人员进行紧密配合，如果前端发起请求的URL与后端的URL不一致的话，会报404错误。

- 实现原理

hash模式，其原理就是监听（浏览器暴露的hashchange方法）url中hash(锚点)的变化；  
history的原理就是利用html5推出的history身上的API
         

## $router

### 概念

指的是router实例  
router是路由实例对象，包含一些路由跳转方法，比如push。

### 属性

- `$router.app`：配置了router的Vue根实例
- ​`$router.mode`：路由模式，这里是hash
- `$router.currentRoute`：当前路由的路由信息对象，包含了当前匹配路由的信息

### 方法

- `router.addRoutes(routes)`：动态添加路由规则，参数为符合routes选项要求的数组
- `router.beforeEach((to,from,next) => {})`：全局前置守卫
- `router.beforeResolve((to,from,next) => {})`：全局解析守卫, 在导航被确认之前，且在锁头组件内守卫和异步路由组件被解析之后调用
- `router.afterEach((to,from) => {})`：全局后置守卫
- `router.go(n)`：接受一个整数作为参数，类似window.history.go(n)，在浏览器历史记录中前进或后退几步
- `router.push(location)`：跳转导航的方法，这种方法会向history栈添加一个新的记录，编程式导航：
``` js
// ​query要用path来引入，params要用name来引入
​this.$router.push({ path: '/path', query: { name: '狮子' } })
​this.$router.push({ name: 'name', parmas: { name: '狮子' } })
```
- `router.replace(location)`：和router.push()类似，但是它会替换掉当前的history记录，不会添加新的记录
- `router.back()`：相当于router.go(-1)
- ​`router.forward()`：相当于router.go(1)


## $route

### 概念

是当前激活的路由信息对象，是只读属性，不可更改，但是可以watch，$route(to,from)  
route是路由信息对象，包含和路由相关的一些信息，比如params,location等。
    
### 属性

- `$route.fullPath`：完成解析后的url，包含查询参数和hash的完整路径
- `$route.path`：路径，字符串类型，解析为绝对路径
- `$route.hash`：当前路由的hash值（带#号的），如果没有hash值则为空字符串
- `$router.name`：当前路由的名称，如果有的话（用于命名路由）
- `$route.params`：一个键值对对象，路由参数
- `$route.query`：一个键值对对象，表示url查询参数
- `$route.matched`：一个包含了当前路由的所有嵌套路径片段的路由记录（routes配置数组中的对象副本）
- `$route.redirectedFrom`：重定向来源的路由的名字，如果存在重定向的话

## 路由钩子

[进入页面触发顺序](https://blog.csdn.net/weixin_39907729/article/details/124386097)

- 全局钩子

  - 全局前置守卫 router.beforeEach
  - 全局解析守卫 router.beforeResolve
  - 全局后置钩子 router.afterEach

- 路由钩子

  - router.beforeEnter

- 组件钩子

  - beforeRouterEnter
  - beforeRouterUpdate
  - beforeRouterLeave


## 路由组件
```js
// 路由链接
<router-link />
// 路由占位符  
<router-view />
```

## 路由懒加载

- Vue异步组件 `component: resolve => require(['放入需要加载的路由地址'], resolve)`
- ES6标准语法 `import()`
- Webpack `require`、`ensure()`

## 动态路由

[文章](https://www.jb51.net/article/224782.htm)

### 前端控制

- 好处
  - 不用后端帮助，路由表维护在前端
  - 逻辑相对比较简单，比较容易上手

- 思路

菜单管理麻烦，后端返回用户的角色，前端在路由配置里，通过meta属性，扩展权限相关的字段，在路由守卫（beforeEach）里通过判断这个权限标识，实现路由的动态增加，及页面跳转；如：我们增加一个role字段来控制角色

### 后端控制

- 好处
  - 相对更安全一点
  - 路由表维护在数据库

- 思路

一般要有菜单管理，菜单可配置权限，角色，用户，后台根据用户的角色返回菜单列表，前端把菜单列表转换成想要的路由结构，动态渲染到页面。

## 浏览器跳转和路由跳转

- vue-router使用pushState进行路由更新，静态跳转，页面不会重新加载；location.href会触发浏览器，页面重新加载一次
- vue-router使用diff算法，实现按需加载，减少dom操作
- vue-router是路由跳转或同一个页面跳转；location.href是不同页面间跳转；
- vue-router是异步加载this.$nextTick(()=>{获取url})；location.href是同步加载



