---
title: 'react知识'
category:
  - 面试
tag:
  - REACT
star: false
sticky: false  
article: true
---

## 与vue相比

- 相同点
  1. 都使用虚拟DOM提高性能
  2. 专注自身核心库，将其他功能如路由和全局状态管理交给其他库
  3. 都提倡组件化，提高复用性
  4. 都有自己的构建工具，能让你得到一个根据最佳实践设置的项目模板
  5. 都有props的概念，允许组件间的数据传递

- 不同的
  1. `语法` vue-SFC模板系统，接近html写法、react-JSX语法
  2. `数据绑定` vue-v-model双向绑定、react-setState单向流动
  3. `监听数据变化的原理`
    - vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化
    - vue 计算 Virtual DOM 的差异是以组件为颗粒度的，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。
    - react 默认是通过比较引用的方式（diff）进行的，如果不优化可能导致大量不必要的 VDOM 的重新渲染。
    可以用 `shouldComponentUpdate/PureComponent/React.memo()` 进行优化
  4. `条件渲染` vue-v-if、react-借助三元运算符，逻辑性更强
  5. `组件通信`
    - vue 子组件向父组件发送消息有两种方式：事件(emit)和回调函数(定义在props)
    - vue 通过 provide/inject 来实现跨层级的通信
    - react 子组件向父组件发送消息，都是使用回调函数的
    - react 可以通过 context 进行跨层级的通信
  6. `css模块作用域` vue-scoped、react-module(xxx.module.css)

## 特点

- 组件化模式、声明式编码，提高开发效率及组件复用率
- rn进行移动端开发
- 使用虚拟DOM+优秀的diff算法，减少与真实DOM的交互

## JSX语法

- 定义虚拟DOM，`不要写引号`
- 标签中`混入JS表达式时要用{}`
- `样式的类名`不要用class，用`className`
- 内联样式，要用 `style={{key: value}}` 的形式
- 只有`一个根节点`
- `标签必须闭合`
- 标签首字母
  - 小写开头：找相应的html标签，没有则警告
  - 大写开头：组件，没有则报错

## 组件

- 函数式组件

![](/images/react/component_function.jpg)

- 类组件

![](/images/react/component_class.jpg)

## 组件实例的三大属性

### state

![](/images/react/attributes_state.jpg)

### props

### ref

## 生命周期

### 旧版

![](/images/react/react_life_old.jpg)

- 初始化阶段: 由ReactDOM.render()触发---初次渲染

  - constructor()
  - componentWillMount()
  - render()
  - componentDidMount() =====> `常用`
  
    一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息
​
- 更新阶段: 由组件内部this.setSate()或父组件render触发

  - shouldComponentUpdate()

  - componentWillUpdate()

  - render() =====> `必须使用的一个`
  
  - componentDidUpdate()
​
- 卸载组件: 由ReactDOM.unmountComponentAtNode()触发

  - componentWillUnmount()  =====> `常用`  
  
    一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

### 新版

![](/images/react/react_life_new.jpg)

- 初始化阶段: 由ReactDOM.render()触发---初次渲染

  - constructor()
  - getDerivedStateFromProps 
  - render()
  - componentDidMount() =====> `常用`

    一般在这个钩子中做一些初始化的事，例如：开启定时器、发送网络请求、订阅消息

- 更新阶段: 由组件内部this.setSate()或父组件重新render触发

  - getDerivedStateFromProps

  - shouldComponentUpdate()

  - render()

  - getSnapshotBeforeUpdate

  - componentDidUpdate()
​
- 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
  
  - componentWillUnmount()  =====> `常用`
    
    一般在这个钩子中做一些收尾的事，例如：关闭定时器、取消订阅消息

