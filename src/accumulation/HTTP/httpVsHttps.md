---
title: 'HTTP与HTTPS'
category:
  - 面试
tag:
  - 计算机网络
  - http
star: false
sticky: false  
article: true
---

- HTTPS是加密传输协议，HTTP是明文传输协议;

  > HTTP 是超文本传输协议，信息是明文传输，存在安全风险的问题。HTTPS 则解决 HTTP 不安全的缺陷，在 TCP 和 HTTP 网络层之间加入了 SSL/TLS 安全协议，使得报文能够加密传输。

- HTTPS需要用到CA证书，而HTTP不用;

- HTTPS标准端口443，HTTP标准端口80;

- HTTPS基于传输层，HTTP基于应用层;

- HTTP是无状态的，连接简单；HTTPS是有状态的，通过HTTP+SSL构建，连接费时

  > HTTP 连接建立相对简单， TCP 三次握手之后便可进行 HTTP 的报文传输。而 HTTPS 在 TCP 三次握手之后，还需进行 SSL/TLS 的握手过程，才可进入加密报文传输。

- HTTPS缓存不如HTTP

