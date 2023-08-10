---
title: 'css预处理器'
category:
  - 面试
tag:
  - css
star: false
sticky: false  
article: true
---

SASS(SCSS) 、LESS

## 语法

sass语法不带大括号和分号，并且有严格的缩进

``` sass
.img
  width: 200px
  height: 200px
  object-fit: cover
```
​
scss是sass3.0引入的新语法，兼容sass语法功能，使用方法和css一样

``` scss
.img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
```

less使用和css一样

## 变量

- sass以$变量名 $color: blue;

``` scss
<style lang="scss" scoped>
$wid: 240px;
.container {
  width: $wid;
  height: 300px;
  overflow: auto;
}
</style>
```

- less以@变量名 @color: blue;

``` less
<style lang="less" scoped>
@wid: 240px;
.container {
  width: @wid;
  height: 300px;
  overflow: auto;
}
</style>
```

- css以--变量名 var(--变量名)

``` css
<style>
:root {
  --wid: 240px;
}
.container {
  width: var(--wid);
  height: 300px;
  overflow: auto;
}
</style>
```

## 混合

sass用法：先定义@mixin 样式名，用的时候@include 样式名  

``` scss
<style lang="scss" scoped>
@mixin container {
  width: 100px;
  height: 200px;
}
.div1 {
  @include container;
  background: red;
}
.div2 {
  width: 100px;
  height: 200px;
  background: blue;
}
</style>
```

less用法：直接.class.class

``` less
<style lang="less" scoped>
.container {
  width: 100px;
  height: 200px;
}
.div1 {
  .container;
  background: red;
}
.div2 {
  width: 100px;
  height: 200px;
  background: blue;
}
</style>
```

## 传参

sass  @mixin 样式名($参数)  

```scss
<style lang="scss" scoped>
@mixin container($color: pink){
  width: 100px;
  height: 200px;
  background: $color;
}
.div1 {
  @include container(#111);
}
.div2 {
  width: 100px;
  height: 200px;
  background: blue;
}
</style>
```

less .样式名(@参数)

``` less
<style lang="less" scoped>
.container(@color: pink) {
  width: 100px;
  height: 200px;
  background: @color;
}
.div1 {
  .container(#111);
}
.div2 {
  width: 100px;
  height: 200px;
  background: blue;
}
</style>
```

## 嵌套

在一个选择器中再嵌套其子级选择器，避免重复写父级选择器，使其结构清晰，增加代码可读性。如果在嵌套里要使用父级选择器，可以用&，如&:hover  