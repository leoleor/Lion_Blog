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
  1. 虚拟DOM

- 不同的
  1. `语法` vue-原生语法、react-JSX语法
  2. `数据绑定` vue-v-model双向绑定、react-setState单向流动
  3. `props` vue-props直接写、react-需要引入prop-types
  4. `DOM更新策略` react自顶向下重新渲染render树
  5. `条件渲染` vue-v-if、react-借助三元运算符，逻辑性更强
  6. `兄弟组件通信` vue-eventBus-on/emit、react-subscribe/publish
  7. `路由信息` vue-组件里获取this.$route、react-路由组件里获取this.props.history/location/match，一般组件没有
  8. `css作用域` vue-scoped、react-module(仅选择器，原生标签不行)

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

