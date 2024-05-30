---
title: 'uniapp知识'
category:
  - 面试
  - 知识点
tag:
  - UNIAPP
  - VUE
  - 微信小程序
star: false
sticky: false  
article: true
---

## 小程序

### 编译到微信小程序u-icon上的class无效

- 问题：编译到微信小程序上后，组件如`<u-icon />`上的class、style无效

![](/images/uniapp/mergeVirtualHostAttributes-代码.png)

![](/images/uniapp/mergeVirtualHostAttributes-配置前.png)

- 解决：在manifest.json的mp-weixin中配置`mergeVirtualHostAttributes`

`mergeVirtualHostAttributes:` 合并组件虚拟节点外层属性（目前仅支持 style、class 属性）

配置后可以看到style和class都编译出来了

![](/images/uniapp/mergeVirtualHostAttributes-配置后.png)

### textarea在微信小程序安卓真机上会超出maxlength的长度限制

- 问题：textarea在微信小程序`安卓真机上`会超出maxlength的长度限制

- 解决：input监听输入，截取字符`slice`后重新赋值

``` js
<template>
    <textarea
        type="text"
        v-model="form.description"
        maxlength="60"
        @input="(e: Event) => listenInput(e, 'description')"
    />
</template>

<script setup lang='ts'>
const listenInput = (e: Event, type: string) => {
  const target = e.target as HTMLInputElement
  nextTick(() => {
    if (target.value.length > 60) {
    form.value.description = target.value.slice(0, 60)
    } else {
    form.value.description = target.value
    }
  })
}
</script>
```