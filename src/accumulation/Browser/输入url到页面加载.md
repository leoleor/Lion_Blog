---
title: '从输入URL到页面加载的全过程'
category:
  - 面试
tag:
  - 浏览器
  - 计算机网络
star: false
sticky: false  
article: true
---

[参考文章](https://juejin.cn/post/7016593221815910408#heading-12)  
[参考文章](https://juejin.cn/post/6928677404332425223)
      
- 输入url

- 查找缓存：浏览器会从浏览器缓存->系统缓存->路由缓存查找是否有该页面

- DNS域名解析：浏览器向DNS服务器发起请求，解析该URL中的域名对应的IP地址。

- 建立TCP连接，进行三次握手

  ![](/images/browser/三次握手.png)

  为什么三次握手：`客户端与服务端都需要确认双发的发送和接收能力。`

  1. 第一次握手：建立连接时，客户端将初始化的序列号（client_isn）发送SYN包（syn=client_isn）到服务器，并进入SYN_SENT状态，等待服务器确认；
  2. 第二次握手：服务端收到SYN包也初始化自己的序列号（server_isn），然后发送SYN（syn=server_isn）+ACK（ack=client_isn+1）包给客户端，此时服务器进入SYN_RECV状态；
  3. 第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=server_isn+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。

  `第三次握手是可以携带数据的，前两次握手是不可以携带数据的`

- 服务器响应请求并把对应的html文件发送给浏览器（浏览器缓存）

- 关闭TCP连接：通过四次挥手释放TCP连接

  ![](/images/browser/四次挥手.jpg)

  为什么四次挥手：`因为TCP是全双工的,因此,每个方向都要单独关闭。`

  当一方完成数据发送任务后,发送一个FIN来终止这一方向的连接,收到一个FIN只是意味着一方向不会再收到数据了,但是这个TCP连接上仍然能够发送数据,直到这一方也发送了FIN，首先进行关闭的一方执行主动关闭,另一方执行被动关闭.第一个关闭的最后等待2MSL。

  1. 第一次：Client将FIN置为1,序号seq=M,发送给Server,进入FIN_WAIT_1（终止等待1）状态
  2. 第二次：Server收到后,将ACK置为1,ack=M+1,响应给Client,进入CLOSE_WAIT（关闭等待）状态Client收到响应后,进入FIN_WAIT_2（终止等待2）状态
  3. 第三次：Server在结束所有数据传输后,将Fin置为1,seq=N+1,发送给Client,进入LAST_ACK（最后确认）状态
  4. 第四次：Client收到后,将ACK置为1,ack=N+1,响应给Server,进入TIME_WAIT（时间等待）状态,等待 2MSL后,进入CLOSED状态，Server收到后,进入CLOSED状态
      
- 浏览器渲染

  - 构建DOM树：从上到下解析HTML文档生成DOM节点树，是DOM元素和属性节点组成的，树的根是document对象
  - 构建CSS规则树
  - 构建render树：Web浏览器将DOM和CSSOM结合，生成渲染树
  - 布局（layout）：根据渲染树将节点树的每一个节点布局在屏幕上
  - 绘制（painting）：遍历渲染树绘制所有节点，并使用UI后端绘制每个节点

