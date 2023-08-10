---
title: 'HTTP报文组成'
category:
  - 面试
tag:
  - 计算机网络
  - http
star: false
sticky: false  
article: true
---

### 请求报文

- 请求行 — 包含http方法，页面地址，http协议，http版本
- 请求头 — eg： host、Cache-Control，Accept，Cookie等
- 空行 — 用来告诉服务端往下就是请求体的部分啦
- 请求体 — 就是正常的query/body参数

### 响应报文

- 状态行 — 包含http方法，http协议，http版本，状态码
- 响应头 — eg： Content-type，Set-cookie, Cache-Control, Date, Server等
- 空行 — 用来告诉客户端往下就是响应体的部分
- 响应体 — 就是服务端返回的数据

