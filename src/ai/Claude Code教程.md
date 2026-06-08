---
title: '在VS Code中使用Claude Code教程'
date: 2026-04-28 15:46:00
category:
  - 教程
tag:
  - AI
  - Claude Code
star: true
sticky: true  
article: true
---

## 前置

1.安装Git `Claude Code 是一个强大的 AI 编程工具，支持在 Windows 系统上运行，但其运行环境依赖于 Git Bash 提供的功能`

2.安装NodeJS `Claude Code 其实就是 npm 里面的一个包，推荐 20+LTS 以上版本`

## 安装Claude Code

```js
# 安装
npm install -g @anthropic-ai/claude-code

# 检查是否成功
claude --version

# 执行
claude
```

![](/images/claudeCode/01.webp)

第一次在`Git Bash`执行的时候会报错，原因是没有添加环境变量，按照提示加上环境变量

```js
# 这里的git地址需要根据自己的安装位置来
setx CLAUDE_CODE_GIT_BASH_PATH "E:\git\Git\mingw64\bin\git.exe"
```

![](/images/claudeCode/02.webp)

![](/images/claudeCode/03.webp)

添加完环境变量重启`Git Bash` ，再次执行`claude`还是会报错，原因是ClaudeCode在国内是无法使用的，ClaudeCode工具会校验位置信息，但是我们可以通过修改配置，来绕过这个校验

![](/images/claudeCode/04.webp)

在电脑中找到C盘用户下的`.claude.json`文件（注意只有成功执行了claude才会生成.claude.json文件，如因node版本低等问题报错则不会生成），往里面添加

```js
"hasCompletedOnboarding": true
```

![](/images/claudeCode/05.webp)

![](/images/claudeCode/06.webp)

最后可以正常启动了，选择Yes，但是现在还没有办法用，因为还没有配置大模型，可以看到Claude Code自带的模型是 `Sonnet 4.6` ，现在为了演示教程，先接入国产的大模型，国产的会用了，后续有机会用其他的大模型也是一样的

![](/images/claudeCode/07.webp)

![](/images/claudeCode/08.webp)

## 接入大模型

薅一下阿里千问的羊毛，`新用户有100w的免费token使用额度，限时3个月`
[阿里云百炼平台](https://bailian.console.aliyun.com/cn-beijing/?spm=a2c4g.11186623.0.0.16fe6fd16cGJ3x\&tab=model#/model-market)

![](/images/claudeCode/09.webp)

获取关键的 `API Key` ，进入密钥管理，创建一个密钥

![](/images/claudeCode/10.webp)

配置环境变量，千问不是所有模型都适用，试了几个都不行，`qwen3.5-plus` 目前没问题

```js
# YOUR_DASHSCOPE_API_KEY 需要替换成你自己的key
setx ANTHROPIC_API_KEY "YOUR_DASHSCOPE_API_KEY"
setx ANTHROPIC_BASE_URL "https://dashscope.aliyuncs.com/apps/anthropic"
setx ANTHROPIC_MODEL "qwen3.5-plus"
```

![](/images/claudeCode/11.webp)

现在就可以正常使用 Claude Code 了

![](/images/claudeCode/12.webp)

## 安装VS Code插件

如果想要在 Vscode 中使用 Claude Code ，需要先安装插件 `Claude Code for VS Code`

![](/images/claudeCode/13.webp)

安装完后编辑器的右上角就会出现一个橙色的logo，点击logo出现登录页

![](/images/claudeCode/14.webp)

然后找到插件配置里的 `setting.json` ，添加大模型变量

```js
# YOUR_DASHSCOPE_API_KEY 需要替换成你自己的key
"claudeCode.environmentVariables": [
  {
    "name": "ANTHROPIC_AUTH_TOKEN",
    "value": "YOUR_DASHSCOPE_API_KEY"
  },
  {
    "name": "ANTHROPIC_BASE_URL",
    "value": "https://dashscope.aliyuncs.com/apps/anthropic"
  },
  {
    "name": "ANTHROPIC_MODEL",
    "value": "qwen3.5-plus"
  }
]
```

![](/images/claudeCode/15.webp)

![](/images/claudeCode/16.webp)

![](/images/claudeCode/17.webp)

配置完重启 Vscode 就能看到 Claude Code 的界面了

![](/images/claudeCode/18.webp)

选择刚刚配置的模型，就可以正常使用了

![](/images/claudeCode/19.webp)

![](/images/claudeCode/20.webp)

![](/images/claudeCode/21.webp)

以上就是在VS Code中使用Claude Code的教程以及一些踩坑点，希望可以帮助到大家！