---
title: 'css深度选择器'
category:
  - 面试
  - 知识点
tag:
  - css
star: false
sticky: false  
article: true
---

深度选择器的使用场景一般是 `修改第三方UI组件库`，如vant，elementUI，antd，同时页面中又使用了 `scoped`

## >>>

原生css式样使用 `>>>`

```js
<style scoped>

.myclass >>> .el-tag {
  // 样式
}
</style>
```

## /deep/ 和 ::v-deep

`>>>` 只作用于css的深度选择器，对于less和scss之类的预处理器不起作用，如果是less和scss的话需要用到 `/deep/` 或 `::v-deep`

```js
<style lang="less" scoped>
  /deep/ .el-button {
    // 样式
  }
</style>

<style lang="scss" scoped>
  .el-button ::v-deep {
    // 样式
  }
</style>
```

## :deep()

`vue3` 废弃 >>>、::v-deep、/deep/，采用 `:deep()`

```js
<style lang="scss" scoped>
  :deep(.el-button) {
    // 样式
  }
</style>
```

## :global()

:global是`react`中使用比较多的

```js
.search-input {
  :global(.ant-input) {
      height: unset !important
  }
}
```