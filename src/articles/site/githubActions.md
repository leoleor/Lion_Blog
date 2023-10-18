---
title: '小白都能看懂的 VuePress + Github Actions'
date: 2023-06-19 08:33:00
category:
  - 教程
tag:
  - VuePress
  - GithubPages
star: true
sticky: true  
article: true
---

## 前言

上一篇文章 [一份超详细VuePress + Github Pages教程](githubPages.md) 中详细介绍了 VuePress 的搭建和部署到 GitHub Pages 上，其中部署 GitHub Pages 采用的是手动部署。这篇文章教大家另一种部署方法 `Github Actions`，文章还是以部署 VuePress 静态网站为例：

## 准备工作

- 准备一个 VuePress 网站

- 完成 [ssh的配置](https://link.juejin.cn/?target=https%3A%2F%2Fblog.csdn.net%2Fkangkanglhb88008%2Farticle%2Fdetails%2F127947544 "https://blog.csdn.net/kangkanglhb88008/article/details/127947544")

- 创建 [GitHub个人令牌](https://blog.csdn.net/nxg0916/article/details/127271906)

## 了解 Github Actions

> GitHub Actions 是一种持续集成和持续交付 (CI/CD) 平台，可用于自动执行生成、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。
> 
> GitHub Actions 不仅仅是 DevOps，还允许您在存储库中发生其他事件时运行工作流程。 例如，您可以运行工作流程，以便在有人在您的存储库中创建新问题时自动添加相应的标签。
> 
> GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

Github Actions 功能强大，这篇文章主要教大家如何自动化部署，大白话就是：`提交完代码后，由Github去执行一系列运维工作，我们只需要等网站更新即可`。

## 了解工作流语法

注意：这里只挑常见且易懂的语法，如果需要完整的可以自行查看 [GitHub文档](https://docs.github.com/zh/actions/using-workflows/about-workflows)

### name

工作流的名称，如果省略，则使用当前文件名

``` yml
name: Auto Deploy
```

### run-name

从工作流生成的工作流运行的名称，如果省略，则使用提交时的commit信息

``` yml
run-name: Deploy by @${{ github.actor }}
```

### on

触发部署的条件，更多: [文档传送门](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#on)

``` yml
on:
  # 每当 push 到 master 分支时触发部署
  push:
    branches: 
      - master
```

### jobs

一个工作流中要执行的任务，结构如下：

``` yml
jobs:
  my_first_job:
    name: My first job
  my_second_job:
    name: My second job
```

每一个任务[my_first_job]下可以配置

- **name** 任务的名称，不设置则默认[my_first_job]

- **runs-on** 运行所需要的虚拟机环境

- **needs** 各个任务间可以设置依赖关系

- **steps** 每个任务下的运行步骤，从上至下依次执行

![](/images/githubActions/jobs.png)

- ... [文档传送门](https://docs.github.com/zh/actions/using-workflows/workflow-syntax-for-github-actions#jobs)

### jobs.<job_id>.steps

每一个步骤下可以设置

- **name** 步骤名称

- **run** 需要运行的命令行程序 如：`npm run build`

- **uses** 一般直接使用别人预先设置好的Actions 如：`actions/setup-node@v3` 用来安装Node环境

- **with** 使用不同的Actions需要不同的参数 如：`node-version: '16'` 用来选择安装的Node版本

## 创建工作流

**正片开始** 为了感受完整流程，我重新创建了一个 VuePress 的demo

![](/images/githubActions/demo.png)

在项目根路径下的 `.github/workflows` 目录中创建一个 deploy.yml/deploy.yaml 文件（deploy可以自定义命名）

注意：**如果你已经有代码仓库，是首次创建工作流，配置好后需要将其先提交到仓库，不然是不会运行工作流的。** 

``` yml
# 工作流的名称，如果省略，则使用当前文件名
name: Auto Deploy

# 从工作流生成的工作流运行的名称，如果省略，则使用提交时的commit信息
run-name: Deploy by @${{ github.actor }}

# 触发部署的条件
on:
  # 每当 push 到 master 分支时触发部署
  push:
    branches: 
      - master

# 当前流程要执行的任务，可以是多个。[my_first_job]就是一个任务
jobs:
  my_first_job:
    # 任务的名称，不设置则默认my_first_job
    name: build-and-deploy

    # 运行所需要的虚拟机环境
    runs-on: ubuntu-latest

    # 每个任务下的运行步骤，短横杠 - 表示一个步骤，从上至下依次执行。
    steps:
      # clone 该仓库的源码到工作流中
      - name: Clone Code
        uses: actions/checkout@v3
        with:
          # "最近更新时间"等 git 日志相关信息，需要拉取全部提交记录
          fetch-depth: 0

      # 安装 Node 环境
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          # 选择要使用的 node 版本
          node-version: '16'

      # 如果你的依赖是使用npm的，用这种
      # 缓存 npm node_modules
      - name: Cache dependencies
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-npm-cache-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-cache-

      # 安装依赖 npm
      - name: Install dependencies
        # 如果没有命中缓存才执行 npm install
        if: steps.cache-deps.outputs.cache-hit != 'true'
        run: npm install

      # 如果你的依赖是使用yarn的，用这种
      # 缓存 yarn node_modules
      # - name: Cache dependencies
      #   uses: actions/cache@v3
      #   id: yarn-cache
      #   with:
      #     path: |
      #       **/node_modules
      #     key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
      #     restore-keys: |
      #       ${{ runner.os }}-yarn-

      # 安装依赖 yarn
      # - name: Install dependencies
      #   # 如果没有命中缓存才执行 npm install
      #   if: steps.npm-cache.outputs.cache-hit != 'true'
      #   run: yarn --frozen-lockfile

      # 运行构建脚本
      - name: Run Build Script
        run: npm run build

      # 部署到 GitHub Pages
      - name: Deploy to GitHub Pages
        # 此actions的官方文档 https://github.com/JamesIves/github-pages-deploy-action
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 要部署的文件夹，必填
          FOLDER: docs/.vuepress/dist
          # 希望部署的分支，默认gh-pages
          BRANCH: gh-pages
          # # 仓库范围的访问令牌，可以将个人令牌的值存储在GitHub Secrets中
          # # 默认情况是不需要填的，如果您需要更多权限，例如部署到另一个存储库才需要填写
          # # ACCESS_TOKEN 对应GitHub Secrets中设置的字段，不要照搬
          # TOKEN: ${{ secrets.ACCESS_TOKEN }}
          # # 部署到GitHub的不同仓库 <用户名>/<仓库名>
          # # 此选项必须配置了TOKEN才能正常执行
          # REPOSITORY-NAME: leoleor/leo2
```

## 仓库的设置

### 配置 GitHub Secrets

用大白话描述下：`执行工作流的过程中，需要使用一些敏感数据（如个人令牌、服务器账号密码等），不能直接写在文件中，通过key/value的形式配置在 GitHub 中，使用的时候只需要输入key就能找到对应的value，这样就避免了将敏感数据直接暴露在文件中。`

配置过程如下：

![配置变量1](/images/githubActions/配置变量1.png)

![配置变量2](/images/githubActions/配置变量2.png)

配置完成后：


![配置变量3](/images/githubActions/配置变量3.png)

### 开启工作流权限

如果没有开启，执行工作流会报错

![权限报错](/images/githubActions/权限报错.png)

配置如下：

![权限1](/images/githubActions/权限1.png)

![权限2](/images/githubActions/权限2.png)

## 提交代码

代码提交到仓库后，工作流就开始执行，需要等一会，待 gh-pages 分支创建后，来到如图位置，Source 选择 `Deploy from a branch` ，Branch 选择 `gh-pages` 分支，点击 `save` 保存 

![选择构建](/images/githubActions/选择构建.png)

然后会看到 `Actions` 栏这里又开始运行一个工作流

![开始构建](/images/githubActions/开始构建.png)

稍等片刻执行完毕，看到 GitHub Pages 站点启动成功，就可以访问网站了！

![完成](/images/githubActions/完成.png)

## 总结

总体流程下来可以总结为三步：创建项目&工作流脚本、代码仓库的设置、提交代码等待执行，主要是理解工作流的语法。OK 文章到此结束，希望对刚了解 Github Actions 得你有所帮助！